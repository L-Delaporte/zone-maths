#!/usr/bin/env node
/**
 * Test de cohérence des contenus statiques (js/data/*.js).
 *
 * Usage (depuis n'importe où) : node scripts/tests/test_data_content.js
 * Sortie : code 0 si tout est conforme, 1 sinon (la liste des problèmes est affichée).
 *
 * Vérifications :
 *  - identifiants dupliqués (chapitres, exercices, fiches) ;
 *  - chapitre sans cours (ou leçon CAPES) ou sans exercices ;
 *  - QCM : options présentes, correctIndex entier dans les bornes, `answer` cohérent
 *    avec options[correctIndex], options dupliquées ou numériquement équivalentes ;
 *  - KaTeX : chaque fragment mathématique doit être rendu par vendor/katex
 *    (throwOnError), et aucun `$` orphelin ;
 *  - mots de brouillon oubliés (« attendez », « recalculons », « hmm »…) ;
 *  - mention de maths-et-tiques ; champ `fullText` dans les fiches.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..');
const problems = [];
const fail = (msg) => problems.push(msg);

// ---------------------------------------------------------------------------
// 1. Environnement navigateur minimal + chargement dans l'ordre d'index.html
// ---------------------------------------------------------------------------
const sandbox = {
  console,
  localStorage: { getItem: () => null, setItem() {}, removeItem() {} },
  document: {
    addEventListener() {}, getElementById: () => null, querySelector: () => null,
    querySelectorAll: () => [], createElement: () => ({ style: {}, appendChild() {}, setAttribute() {} })
  }
};
sandbox.window = sandbox;
sandbox.self = sandbox;
vm.createContext(sandbox);

const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
/**
 * Fichiers de données dans l'ordre du site : d'abord les <script src="js/data/…"> chargés
 * au démarrage, puis ceux des niveaux chargés à la demande (<script id="level-bundles">,
 * lu par js/dataLoader.js), dans l'ordre où ils sont déclarés.
 */
function dataFilesFromIndex(page) {
  const files = [...page.matchAll(/<script[^>]+src="(js\/data\/[^"?]+)/g)].map((m) => m[1]);
  const b = page.match(/<script[^>]*id="level-bundles"[^>]*>([\s\S]*?)<\/script>/);
  if (b) {
    try {
      for (const urls of Object.values(JSON.parse(b[1]))) {
        for (const u of urls) {
          const f = String(u).split('?')[0];
          if (/^js\/data\//.test(f) && !files.includes(f)) files.push(f);
        }
      }
    } catch (e) {
      fail(`index.html : déclaration level-bundles illisible (${e.message})`);
    }
  }
  return files;
}
const dataFiles = dataFilesFromIndex(html);
if (!dataFiles.length) fail('index.html : aucun script js/data/ trouvé');

for (const f of dataFiles) {
  try {
    vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), sandbox, { filename: f });
  } catch (e) {
    fail(`${f} : erreur au chargement : ${e.message}`);
  }
}
const W = sandbox;

// KaTeX réel
let katex = null;
try {
  const kCtx = { window: {}, document: undefined };
  vm.createContext(kCtx);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'vendor/katex/katex.min.js'), 'utf8'), kCtx);
  katex = kCtx.katex || (kCtx.window && kCtx.window.katex) || (kCtx.module && kCtx.module.exports);
} catch (e) {
  fail(`Impossible de charger vendor/katex/katex.min.js : ${e.message}`);
}
if (!katex || typeof katex.renderToString !== 'function') fail('KaTeX introuvable dans vendor/katex');

// ---------------------------------------------------------------------------
// 2. Outils
// ---------------------------------------------------------------------------
const DRAFT_RE = /\b(attendez|recalculons|hmm+|je me suis tromp[ée]e?|TODO|FIXME)\b|\?\?\?|\bnon\s*(\.\.\.|…)/i;
const MTQ_RE = /maths?[\s-]*et[\s-]*tiques|mathsettiques/i;

/** Parcourt récursivement toutes les chaînes d'un objet. */
function walkStrings(obj, where, cb, seen = new Set()) {
  if (typeof obj === 'string') { cb(obj, where); return; }
  if (!obj || typeof obj !== 'object' || seen.has(obj)) return;
  seen.add(obj);
  if (Array.isArray(obj)) obj.forEach((v, i) => walkStrings(v, `${where}[${i}]`, cb, seen));
  else for (const [k, v] of Object.entries(obj)) walkStrings(v, `${where}.${k}`, cb, seen);
}

/** Découpe une chaîne en fragments mathématiques ; signale les `$` orphelins. */
function mathChunks(str) {
  const chunks = [];
  let i = 0, mode = null, cur = '', err = null;
  // Les blocs de code Markdown (`...`) ne sont pas interprétés par KaTeX.
  const s = str.replace(/```[\s\S]*?```/g, '').replace(/`[^`\n]*`/g, '');
  while (i < s.length) {
    if (s[i] === '\\' && s[i + 1] === '$') { if (mode) cur += '\\$'; i += 2; continue; }
    if (s.startsWith('$$', i)) {
      if (mode === 'display') { chunks.push({ display: true, tex: cur }); cur = ''; mode = null; }
      else if (mode === 'inline') { err = '`$$` rencontré dans un fragment `$...$`'; break; }
      else mode = 'display';
      i += 2; continue;
    }
    if (s[i] === '$') {
      if (mode === 'inline') { chunks.push({ display: false, tex: cur }); cur = ''; mode = null; }
      else if (mode === 'display') cur += '$';
      else mode = 'inline';
      i++; continue;
    }
    if (mode) cur += s[i];
    i++;
  }
  if (!err && mode) err = `\`$\` orphelin (fragment ${mode === 'display' ? '$$' : '$'} non fermé)`;
  return { chunks, err };
}

// Caractère absent des polices KaTeX (ex. « € » en mode math) = erreur ;
// les autres écarts au LaTeX strict (lettres accentuées…) sont tolérés comme sur le site.
const STRICT = (code) => (code === 'unknownSymbol' ? 'error' : 'ignore');
const katexCache = new Map();
function checkKatex(str, where) {
  if (str.indexOf('$') === -1) return;
  const { chunks, err } = mathChunks(str);
  if (err) fail(`${where} : ${err} — « ${str.slice(0, 90).replace(/\n/g, ' ')}… »`);
  if (!katex) return;
  for (const c of chunks) {
    const key = (c.display ? 'D' : 'I') + c.tex;
    let msg = katexCache.get(key);
    if (msg === undefined) {
      try { katex.renderToString(c.tex, { throwOnError: true, strict: STRICT, displayMode: c.display }); msg = null; }
      catch (e) { msg = e.message; }
      katexCache.set(key, msg);
    }
    if (msg) fail(`${where} : KaTeX invalide « ${c.tex.slice(0, 80)} » : ${msg}`);
  }
}

/** Normalisation textuelle d'une option de QCM (pour détecter les doublons). */
const norm = (s) => String(s).replace(/\$/g, '').replace(/\\[,;!: ]|\\quad|\\text\{\s*\}/g, '').replace(/\s+/g, '').toLowerCase();

/**
 * Évaluation numérique d'une option simple : nombre, fraction, racine, puissance, π,
 * ou expression polynomiale/rationnelle en une variable x (évaluée en plusieurs points).
 * Renvoie un tableau de valeurs, ou null si l'option n'est pas reconnue.
 */
const SAMPLE_X = [0.37, 1.91, -2.43];
function numericValue(opt) {
  let s = String(opt).trim().replace(/^\$+|\$+$/g, '').trim();
  // « \sqrt{49} = 7 » : on évalue chaque membre, ils doivent concorder.
  if (/[<>≤≥]|\\(le|ge|leq|geq|lt|gt|neq|in|cup|cap|approx|text|mathbb)\b|[;:]/.test(s)) return null;
  const parts = s.split('=');
  if (parts.length > 2) return null;
  const vals = parts.map(evalExpr);
  if (vals.some((v) => v === null)) return null;
  if (vals.length === 2 && !sameValues(vals[0], vals[1])) return null;
  return vals[vals.length - 1];
}
function evalExpr(src) {
  let s = src;
  if (!s || s.length > 80) return null;
  s = s.replace(/\\left|\\right|\\displaystyle|\\,|\;|\\!|\s+/g, '')
    .replace(/\\dfrac|\\tfrac/g, '\\frac')
    .replace(/(\d)\{,\}(\d)/g, '$1.$2').replace(/(\d),(\d)/g, '$1.$2');
  let prev;
  do {
    prev = s;
    s = s.replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '(($1)/($2))')
      .replace(/\\sqrt\{([^{}]*)\}/g, 'S($1)')
      .replace(/\^\{([^{}]*)\}/g, '^($1)');
  } while (s !== prev);
  s = s.replace(/\\times|\\cdot/g, '*').replace(/\\div/g, '/').replace(/\\pi/g, 'P').replace(/−/g, '-');
  if (/[^0-9x+\-*/().^SP]/.test(s)) return null;
  // multiplication implicite : 3x, 2(…), )(, x(, )x, 2S(, 3P
  s = s.replace(/(\d|x|\)|P)(?=[x(SP])/g, '$1*').replace(/(\)|x|P)(?=\d)/g, '$1*').replace(/\^/g, '**');
  const pts = s.includes('x') ? SAMPLE_X : [0];
  try {
    const f = Function('x', 'S', 'P', `"use strict";return (${s});`);
    const out = pts.map((x) => f(x, Math.sqrt, Math.PI));
    return out.every((v) => typeof v === 'number' && Number.isFinite(v)) ? out : null;
  } catch (e) { return null; }
}
const sameValues = (a, b) => a.length === b.length && a.every((v, i) => Math.abs(v - b[i]) <= 1e-9 * Math.max(1, Math.abs(v)));

/**
 * QCM où plusieurs options sont égales en valeur mais où la question porte sur la FORME
 * (écriture scientifique, décomposition en facteurs premiers…) : une seule est correcte.
 */
const FORM_QUESTIONS = new Set(['N3-3', 'N5-3', 'N2bis-1', '2N1-2']);

// ---------------------------------------------------------------------------
// 3. Chapitres, cours, exercices, fiches
// ---------------------------------------------------------------------------
const chapters = W.MATHS_CHAPTERS || [];
const courses = W.MATHS_COURSES || {};
const exercises = W.MATHS_EXERCISES || {};
const worksheets = W.MATHS_WORKSHEETS || {};
const capesLessons = W.CAPES_LESSONS || [];
if (!chapters.length) fail('window.MATHS_CHAPTERS est vide');

const dupCheck = (label, ids) => {
  const seen = new Set();
  for (const id of ids) {
    if (id === undefined || id === null || id === '') { fail(`${label} : identifiant manquant`); continue; }
    if (seen.has(id)) fail(`${label} : identifiant dupliqué « ${id} »`);
    seen.add(id);
  }
};
dupCheck('Chapitres', chapters.map((c) => c.id));

const chapterIds = new Set(chapters.map((c) => c.id));
const capesIds = new Set(capesLessons.map((l) => l.id));
for (const ch of chapters) {
  if (!courses[ch.id] && !capesIds.has(ch.id)) fail(`Chapitre ${ch.id} : aucun cours`);
  const list = exercises[ch.id];
  if (!Array.isArray(list) || !list.length) fail(`Chapitre ${ch.id} : aucun exercice`);
}
for (const k of Object.keys(exercises)) if (!chapterIds.has(k)) fail(`Exercices « ${k} » : chapitre inconnu`);
for (const k of Object.keys(courses)) if (!chapterIds.has(k)) fail(`Cours « ${k} » : chapitre inconnu`);
for (const k of Object.keys(worksheets)) if (!chapterIds.has(k)) fail(`Fiches « ${k} » : chapitre inconnu`);

// Exercices
const allEx = [];
for (const [chId, list] of Object.entries(exercises)) {
  if (!Array.isArray(list)) { fail(`Exercices ${chId} : pas un tableau`); continue; }
  list.forEach((ex, i) => allEx.push({ chId, ex, where: `MATHS_EXERCISES.${chId}[${ex && ex.id || i}]` }));
}
dupCheck('Exercices', allEx.map((e) => e.ex.id));

for (const { chId, ex, where } of allEx) {
  if (ex.chapterId && ex.chapterId !== chId) fail(`${where} : chapterId « ${ex.chapterId} » ≠ ${chId}`);
  for (const f of ['title', 'statement', 'solution']) {
    if (typeof ex[f] !== 'string' || !ex[f].trim()) fail(`${where} : champ « ${f} » vide`);
  }
  const isMcq = ex.type === 'mcq' || Array.isArray(ex.options);
  if (!isMcq) {
    if (ex.answer === undefined || String(ex.answer).trim() === '') fail(`${where} : réponse attendue manquante`);
    continue;
  }
  const opts = ex.options;
  if (!Array.isArray(opts) || opts.length < 2) { fail(`${where} : QCM sans au moins deux options`); continue; }
  const ci = ex.correctIndex;
  if (!Number.isInteger(ci) || ci < 0 || ci >= opts.length) {
    fail(`${where} : correctIndex ${ci} hors bornes (0..${opts.length - 1})`);
    continue;
  }
  if (ex.answer !== undefined && norm(ex.answer) !== norm(opts[ci])) {
    fail(`${where} : answer « ${ex.answer} » ≠ options[correctIndex] « ${opts[ci]} »`);
  }
  if (Array.isArray(ex.explanations) && ex.explanations.length !== opts.length) {
    fail(`${where} : ${ex.explanations.length} explications pour ${opts.length} options`);
  }
  const n = opts.map(norm);
  n.forEach((v, i) => { if (!v) fail(`${where} : option ${i} vide`); if (n.indexOf(v) !== i) fail(`${where} : option dupliquée « ${opts[i]} »`); });
  // Une seule bonne réponse : aucune autre option ne doit avoir la même valeur numérique.
  const vals = FORM_QUESTIONS.has(ex.id) ? [] : opts.map(numericValue);
  if (vals[ci]) {
    vals.forEach((v, i) => {
      if (i !== ci && v && sameValues(v, vals[ci])) {
        fail(`${where} : l'option ${i} « ${opts[i]} » est équivalente à la bonne réponse « ${opts[ci]} »`);
      }
    });
  }
}

// Fiches
const allWs = [];
for (const [chId, list] of Object.entries(worksheets)) {
  if (!Array.isArray(list)) { fail(`Fiches ${chId} : pas un tableau`); continue; }
  list.forEach((ws, i) => {
    allWs.push(ws.id);
    if ('fullText' in ws) fail(`MATHS_WORKSHEETS.${chId}[${i}] : champ obsolète « fullText »`);
    if (!ws.statement || !String(ws.statement).trim()) fail(`MATHS_WORKSHEETS.${chId}[${i}] : énoncé vide`);
  });
}
dupCheck('Fiches', allWs);

// ---------------------------------------------------------------------------
// 4. Textes : KaTeX, brouillons, maths-et-tiques
// ---------------------------------------------------------------------------
const roots = {
  MATHS_CHAPTERS: chapters, MATHS_COURSES: courses, MATHS_EXERCISES: exercises,
  MATHS_WORKSHEETS: worksheets, CAPES_LESSONS: capesLessons
};
for (const [name, obj] of Object.entries(roots)) {
  walkStrings(obj, name, (s, where) => {
    // Champs non mathématiques (noms de fichiers, couleurs, icônes…)
    if (/\.(id|filename|folder|icon|color|chapterId|type|level|domain)$/.test(where)) return;
    if (name !== 'MATHS_CHAPTERS') checkKatex(s, where);
    const d = s.match(DRAFT_RE);
    if (d) fail(`${where} : brouillon oublié « ${d[0]} » — « ${s.slice(Math.max(0, d.index - 40), d.index + 40).replace(/\n/g, ' ')} »`);
    if (MTQ_RE.test(s)) fail(`${where} : mention de maths-et-tiques`);
  });
}

// Mentions dans les sources (commentaires compris)
for (const f of fs.readdirSync(path.join(ROOT, 'js/data')).filter((x) => x.endsWith('.js'))) {
  const src = fs.readFileSync(path.join(ROOT, 'js/data', f), 'utf8');
  if (MTQ_RE.test(src)) fail(`js/data/${f} : mention de maths-et-tiques dans le source`);
  if (/"fullText"\s*:/.test(src)) fail(`js/data/${f} : champ « fullText » présent`);
}

// ---------------------------------------------------------------------------
// 5. Bilan
// ---------------------------------------------------------------------------
const nMcq = allEx.filter((e) => e.ex.type === 'mcq').length;
console.log(`Fichiers chargés : ${dataFiles.length} | chapitres : ${chapters.length} | cours : ${Object.keys(courses).length} | exercices : ${allEx.length} (dont ${nMcq} QCM) | fiches : ${allWs.length} | fragments KaTeX distincts : ${katexCache.size}`);
if (problems.length) {
  console.error(`\n${problems.length} problème(s) :`);
  for (const p of problems) console.error(' - ' + p);
  process.exit(1);
}
console.log('OK : contenus statiques conformes.');
