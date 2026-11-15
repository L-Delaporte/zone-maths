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
 *    (throwOnError), et aucun `$` orphelin ; pas de `\\` collé à une lettre hors environnement ;
 *  - identifiants de chapitre conformes à la convention du niveau (table dans README.md) ;
 *  - mots de brouillon oubliés (« attendez », « recalculons », « hmm »…) ;
 *  - indices (hint, hint1, hint2) : non vides, hint1 ne contient pas la réponse finale,
 *    pas d'indice identique dans deux chapitres différents ;
 *  - mention de maths-et-tiques ; champ `fullText` dans les fiches.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const { loadSiteData } = require('./load_site.js');

const ROOT = path.resolve(__dirname, '..', '..');
const problems = [];
const fail = (msg) => problems.push(msg);

// ---------------------------------------------------------------------------
// 1. Chargement des données dans l'ordre d'index.html
// ---------------------------------------------------------------------------
const { win: W, files: dataFiles } = loadSiteData({ onError: fail });
if (!dataFiles.length) fail('index.html : aucun script js/data/ trouvé');

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
    checkDoubleBackslash(c.tex, where);
  }
}

// KaTeX accepte `\\alpha` (saut de ligne puis texte) : c'est presque toujours `\alpha` mal échappé.
// Seuls les environnements à plusieurs lignes (pmatrix, cases, aligned, array…) ont besoin de `\\`.
const LINE_ENVS = /\\begin\{([A-Za-z]+\*?)\}[\s\S]*?\\end\{\1\}/g;
function checkDoubleBackslash(tex, where) {
  const m = tex.replace(LINE_ENVS, '').match(/(?<!\\)(?:\\\\)+[A-Za-z]+/);
  if (m) fail(`${where} : « ${m[0]} » dans « ${tex.slice(0, 80)} » (commande LaTeX mal échappée ?)`);
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

// Les identifiants figurent dans les liens, les QR codes imprimés et la progression des élèves : les
// existants ne changent jamais. Seule la 3e garde des identifiants historiques sans préfixe de niveau.
const LEGACY_3E_IDS = new Set(['N1', 'N2', 'N2bis', 'N3', 'N4', 'N5', 'G0', 'G1', 'G2', 'G2bis', 'G3', 'G4', 'G5', 'G6', 'G7', 'Org1', 'Org2', 'Org3', 'Org4', 'Algo']);
const CHAPTER_ID_RULES = {
  '6eme': /^6[A-Z]\d+$/, '5eme': /^5[A-Z]\d+$/, '4eme': /^4[A-Z]\d+$/, '3eme': /^3[A-Z]\d+$/,
  '2nde': /^2[A-Z]\d+$/, '1ere': /^1[A-Z]\d+$/, tale: /^T[A-Z]\d+$/,
  '1tc': /^1TC\d+$/, '1techno': /^1T\d+$/,
  L1: /^L1-[A-Z]+\d*$/, L2: /^L2-[A-Z]+\d*$/, L3: /^L3-[A-Z]+\d*$/,
  capes: /^capes-(\d{2}|oral2(-cas)?)$/, crpe: /^crpe-\d{2}$/, sante: /^sante-\d{2}$/, pass: /^pass-\d{2}$/, veto: /^veto-\d{2}$/
};
for (const { id, level } of chapters) {
  if (level === '3eme' && LEGACY_3E_IDS.has(id)) continue;
  const rule = CHAPTER_ID_RULES[level];
  if (!rule) fail(`Chapitre ${id} : niveau « ${level} » inconnu`);
  else if (!rule.test(id)) fail(`Chapitre ${id} : identifiant hors convention pour le niveau ${level} (voir README.md)`);
}

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
  // Étude de cas en trois étapes : trois étapes complètes, quatre choix distincts, une bonne réponse
  if (ex.type === 'case3') {
    if (!Array.isArray(ex.steps) || ex.steps.length !== 3) { fail(`${where} : étude de cas sans trois étapes`); continue; }
    ex.steps.forEach((st, k) => {
      for (const f of ['label', 'question', 'hint', 'explanation']) {
        if (typeof st[f] !== 'string' || !st[f].trim()) fail(`${where} : étape ${k + 1}, champ « ${f} » vide`);
      }
      if (!Array.isArray(st.options) || st.options.length !== 4) { fail(`${where} : étape ${k + 1} sans quatre choix`); return; }
      if (!Number.isInteger(st.correctIndex) || st.correctIndex < 0 || st.correctIndex > 3) fail(`${where} : étape ${k + 1}, correctIndex ${st.correctIndex} hors bornes`);
      const n = st.options.map(norm);
      n.forEach((v, i) => { if (!v) fail(`${where} : étape ${k + 1}, choix ${i} vide`); if (n.indexOf(v) !== i) fail(`${where} : étape ${k + 1}, choix dupliqué`); });
    });
    if (ex.answer === undefined || String(ex.answer).trim() === '') fail(`${where} : synthèse (answer) manquante`);
    continue;
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

// Indices (hint, hint1, hint2) : non vides, hint1 ne livre pas la réponse finale,
// pas d'indice recopié à l'identique dans un exercice d'un autre chapitre.
/**
 * Exercices où la réponse finale apparaît dans hint1 comme résultat INTERMÉDIAIRE
 * (coïncidence numérique justifiée, l'indice ne la présente pas comme la réponse).
 */
const HINT_ANSWER_OK = new Set(['5N1-2']);
const normHint = (s) => String(s).replace(/\$/g, '').replace(/\\[dt]frac/g, '\\frac').replace(/\{,\}/g, ',')
  .replace(/\\[,;!: ]|\\quad|\\text\{\s*\}|\\left|\\right/g, '').replace(/\s+/g, '').toLowerCase();
/** `needle` présent dans `hay` comme expression entière (pas au milieu d'un nombre ou d'un mot). */
function containsToken(hay, needle) {
  for (let i = hay.indexOf(needle); i >= 0; i = hay.indexOf(needle, i + 1)) {
    const before = hay[i - 1] || '', after = hay[i + needle.length] || '';
    const afterNext = hay[i + needle.length + 1] || '';
    if (/[0-9a-z.,\\]/.test(before) || /[0-9a-z]/.test(after) || ((after === ',' || after === '.') && /[0-9]/.test(afterNext))) continue;
    return true;
  }
  return false;
}
const hintOwners = new Map();
const hintSeenEx = new Set();
for (const { chId, ex, where } of allEx) {
  if (hintSeenEx.has(ex)) continue;
  hintSeenEx.add(ex);
  for (const f of ['hint', 'hint1', 'hint2']) {
    if (!(f in ex) || ex[f] === undefined || ex[f] === null) continue;
    if (typeof ex[f] !== 'string' || !ex[f].trim()) { fail(`${where} : indice « ${f} » vide`); continue; }
    const k = normHint(ex[f]);
    if (k.length < 25) continue; // formules très courtes : les répétitions sont légitimes
    if (!hintOwners.has(k)) hintOwners.set(k, []);
    hintOwners.get(k).push({ chId, id: ex.id, f });
  }
  const h1 = typeof ex.hint1 === 'string' ? ex.hint1 : ex.hint;
  if (typeof h1 !== 'string' || ex.answer === undefined || HINT_ANSWER_OK.has(ex.id)) continue;
  const a = normHint(ex.answer);
  // Réponses courtes non triviales seulement (un chiffre seul ou « oui » se retrouvent partout).
  if (a.length < 2 || a.length > 40 || /^(oui|non|vrai|faux)$/.test(a)) continue;
  if (containsToken(normHint(h1), a)) fail(`${where} : hint1 contient la réponse finale « ${ex.answer} »`);
}
for (const owners of hintOwners.values()) {
  const chs = new Set(owners.map((o) => o.chId));
  if (chs.size > 1) fail(`Indice identique dans des chapitres différents : ${owners.map((o) => `${o.id}.${o.f}`).join(', ')}`);
}

// Fiches
const allWs = [];
for (const [chId, list] of Object.entries(worksheets)) {
  if (!Array.isArray(list)) { fail(`Fiches ${chId} : pas un tableau`); continue; }
  list.forEach((ws, i) => {
    allWs.push(ws.id);
    if ('fullText' in ws) fail(`MATHS_WORKSHEETS.${chId}[${i}] : champ obsolète « fullText »`);
    if (!ws.statement || !String(ws.statement).trim()) fail(`MATHS_WORKSHEETS.${chId}[${i}] : énoncé vide`);
    if (ws.type !== 'cours' && !String(ws.solution || '').trim()) fail(`MATHS_WORKSHEETS.${chId}[${i}] : corrigé absent (champ solution)`);
    if (/\n#{1,3}\s*Corrig[ée]/.test(String(ws.statement || ''))) fail(`MATHS_WORKSHEETS.${chId}[${i}] : corrigé inclus dans l'énoncé`);
  });
}
dupCheck('Fiches', allWs);

// ---------------------------------------------------------------------------
// 4. Textes : KaTeX, brouillons, maths-et-tiques
// ---------------------------------------------------------------------------
const roots = {
  MATHS_CHAPTERS: chapters, MATHS_COURSES: courses, MATHS_EXERCISES: exercises,
  MATHS_WORKSHEETS: worksheets, CAPES_LESSONS: capesLessons,
  // Flashcards complémentaires (js/data/flashcards_<niveau>.js)
  MATHS_EXTRA_FLASHCARDS: W.MATHS_EXTRA_FLASHCARDS || {}
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

// KaTeX des banques de DS et du brevet : contrôlé par test_ds_banks.js, sauf ce défaut qu'il ne peut pas voir.
for (const [name, obj] of Object.entries({ MATHS_DS_BANK: W.MATHS_DS_BANK || {}, MATHS_BREVET_PROBLEMS: W.MATHS_BREVET_PROBLEMS || [] })) {
  walkStrings(obj, name, (s, where) => {
    if (s.includes('$')) for (const c of mathChunks(s).chunks) checkDoubleBackslash(c.tex, where);
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
