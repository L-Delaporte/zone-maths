#!/usr/bin/env node
/**
 * Vérifie les banques d'exercices de DS (questions ouvertes, sans QCM) :
 *   js/data/ds_bank_*.js  → window.MATHS_DS_BANK[chapterId] = [exercice, …]
 *   js/data/brevet_problems.js → window.MATHS_BREVET_PROBLEMS = [problème, …]
 *
 * Schéma d'un exercice de DS :
 *   { id: 'TA4-ds-01',            // unique, préfixé par l'identifiant du chapitre
 *     title: 'Étude d'une fonction exponentielle',
 *     difficulty: 1..4,           // 1 = application directe … 4 = approfondissement
 *     points: 4..8,               // barème indicatif (le DS est ramené à 20)
 *     statement: 'Markdown : contexte puis questions numérotées « 1. », « 2. » (sous-questions « a) »)',
 *     solution: 'Markdown : corrigé rédigé et justifié, question par question' }
 * Un problème de brevet a en plus : theme (géométrie | fonctions | statistiques-probabilités |
 *   algorithmique | grandeurs-mesures | nombres-calculs) et points ∈ {3; 3,5; 4; 4,5; 5}.
 *
 * Usage : node scripts/tests/test_ds_banks.js [--min N]   (N exercices minimum par chapitre bancarisé)
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..');
const minArg = process.argv.indexOf('--min');
const MIN_PER_CHAPTER = minArg > 0 ? parseInt(process.argv[minArg + 1], 10) : 1;

const ctx = { window: {}, console };
ctx.window.window = ctx.window;
vm.createContext(ctx);
const load = rel => vm.runInContext(fs.readFileSync(path.join(ROOT, rel), 'utf8'), ctx, { filename: rel });
['js/data/chapters.js', 'js/data/chapters_lycee.js', 'js/data/chapters_licence.js', 'js/data/data_capes.js'].forEach(load);

const dataDir = path.join(ROOT, 'js/data');
const bankFiles = fs.readdirSync(dataDir).filter(f => /^ds_bank_.+\.js$/.test(f) || f === 'brevet_problems.js');
bankFiles.forEach(f => load(`js/data/${f}`));

const kctx = {};
vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'vendor/katex/katex.min.js'), 'utf8'), kctx);
const katex = kctx.katex;

const chapterIds = new Set((ctx.window.MATHS_CHAPTERS || []).map(c => c.id));
let errors = 0;
const fail = msg => { errors++; if (errors <= 60) console.error('✖ ' + msg); };

function checkMath(label, md) {
  const text = String(md || '');
  const fragments = [...text.matchAll(/\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g)];
  const stripped = text.replace(/\$\$[\s\S]+?\$\$|\$[^$\n]+?\$/g, '');
  if (/\$/.test(stripped.replace(/\\\$/g, ''))) fail(`${label} : « $ » orphelin`);
  for (const m of fragments) {
    const tex = m[1] || m[2];
    try {
      katex.renderToString(tex, { throwOnError: true, displayMode: !!m[1] });
    } catch (e) {
      fail(`${label} : KaTeX invalide « ${tex.slice(0, 60)} » (${e.message.slice(0, 80)})`);
    }
  }
  // « \n » littéral (une barre oblique suivie de n qui n'est pas une commande LaTeX comme \neq)
  if (/(^|[^\\])\\n(?![a-zA-Z])/.test(text)) fail(`${label} : « \\n » littéral`);
}

function checkExercise(ex, label, opts = {}) {
  if (!ex || typeof ex !== 'object') return fail(`${label} : exercice invalide`);
  for (const k of ['id', 'title', 'statement', 'solution']) {
    if (!ex[k] || typeof ex[k] !== 'string' || !ex[k].trim()) fail(`${label} : champ « ${k} » manquant`);
  }
  if (ex.options || ex.choices || ex.correctIndex !== undefined || ex.type === 'mcq') fail(`${label} : QCM interdit dans un DS`);
  if (/parmi les (propositions|réponses)|cocher|entourer la bonne/i.test(ex.statement || '')) fail(`${label} : formulation de QCM`);
  if (!opts.brevet && !(Number.isInteger(ex.difficulty) && ex.difficulty >= 1 && ex.difficulty <= 4)) fail(`${label} : difficulty doit valoir 1 à 4`);
  if (!(typeof ex.points === 'number' && ex.points >= 2 && ex.points <= 10)) fail(`${label} : points hors de [2 ; 10]`);
  if (!/(^|\n)\s*1[.)]\s/.test(ex.statement || '')) fail(`${label} : l'énoncé doit comporter des questions numérotées (« 1. »)`);
  if ((ex.solution || '').length < 120) fail(`${label} : corrigé trop court`);
  if (/maths-et-tiques|mathsmentales/i.test(ex.statement + ex.solution)) fail(`${label} : mention d'un site tiers`);
  checkMath(`${label} (énoncé)`, ex.statement);
  checkMath(`${label} (corrigé)`, ex.solution);
}

// Conventions françaises (hors formules) et notations adaptées au niveau
const COLLEGE = new Set((ctx.window.MATHS_CHAPTERS || []).filter(c => ['6eme', '5eme', '4eme', '3eme'].includes(c.level || '3eme')).map(c => c.id));
const LEVEL_OF = {};
(ctx.window.MATHS_CHAPTERS || []).forEach(c => { LEVEL_OF[c.id] = c.level || '3eme'; });
function checkConventions(label, md, chapterId) {
  const text = String(md || '');
  const prose = text.replace(/\$\$[\s\S]+?\$\$|\$[^$\n]+?\$/g, ' ');
  const el = prose.match(/\b(lors|puis)?que (un|une|il|ils|elle|elles|on)\b/i);
  if (el) fail(`${label} : élision manquante « ${el[0]} »`);
  if (chapterId && COLLEGE.has(chapterId) && /\\mathbb\{R\}|ℝ/.test(text)) fail(`${label} : ℝ dans un énoncé de collège`);
  // Intervalle numérique écrit avec une virgule comme séparateur : [0,1], ]a,b[, [-2, 3]
  const maths = [...text.matchAll(/\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g)].map(m => m[1] || m[2]);
  for (const tex of maths) {
    const m = tex.match(/(?:^|[^\w\\}\]])[\[\]]\s*-?\s*(?:\d+|\\infty|\\pi|[a-d]|0)\s*,\s*[-+]?\s*(?:\d+|\\infty|\+\s*\\infty|\\pi|\d*\\pi(?:\/\d+)?|[a-d])\s*[\[\]](?![_^]?\{?[\w(])/);
    if (m && !/\{,\}/.test(m[0])) { fail(`${label} : intervalle avec une virgule « ${m[0].trim()} » (écrire « ; »)`); break; }
  }
}

const ids = new Set();
const bank = ctx.window.MATHS_DS_BANK || {};
let total = 0;
for (const [chapterId, list] of Object.entries(bank)) {
  if (!chapterIds.has(chapterId)) fail(`MATHS_DS_BANK : chapitre inconnu ${chapterId}`);
  if (!Array.isArray(list)) { fail(`MATHS_DS_BANK[${chapterId}] n'est pas une liste`); continue; }
  if (list.length < MIN_PER_CHAPTER) fail(`${chapterId} : ${list.length} exercice(s) < ${MIN_PER_CHAPTER}`);
  const diffs = new Set(list.map(e => e && e.difficulty));
  if (list.length >= 4 && diffs.size < 3) fail(`${chapterId} : difficultés trop peu variées`);
  list.forEach((ex, i) => {
    const label = `${chapterId}#${i + 1}${ex && ex.id ? ` (${ex.id})` : ''}`;
    checkExercise(ex, label);
    if (ex) { checkConventions(`${label} (énoncé)`, ex.statement, chapterId); checkConventions(`${label} (corrigé)`, ex.solution, chapterId); }
    if (ex && ex.id) {
      if (ids.has(ex.id)) fail(`${label} : id en double`);
      ids.add(ex.id);
      if (!ex.id.startsWith(chapterId)) fail(`${label} : l'id doit commencer par ${chapterId}`);
    }
    total++;
  });
  // Variété des DS : chaque tirage du DS de chapitre (sheets.js, createBankDsSheet) doit avoir
  // au moins 3 exercices possibles, pour que deux DS successifs n'aient aucun exercice commun.
  const lvl = LEVEL_OF[chapterId];
  const plan = ['L1', 'L2', 'L3', 'capes'].includes(lvl) || !lvl ? [[1, 2], [3], [4, 3]] : [[1], [2], [3], [4, 3]];
  if (MIN_PER_CHAPTER >= 12) {
    plan.forEach(diffs => {
      const n = list.filter(e => e && diffs.includes(e.difficulty)).length;
      const need = diffs.length > 1 ? 3 + (diffs.includes(3) && plan.some(d => d.length === 1 && d[0] === 3) ? 3 : 0) : 3;
      if (n < need) fail(`${chapterId} : ${n} exercice(s) de difficulté ${diffs.join(' ou ')} (< ${need}) : les DS successifs se répéteront`);
    });
  }
}

const brevet = ctx.window.MATHS_BREVET_PROBLEMS || [];
const THEMES = ['géométrie', 'fonctions', 'statistiques-probabilités', 'algorithmique', 'grandeurs-mesures', 'nombres-calculs'];
brevet.forEach((ex, i) => {
  const label = `Brevet#${i + 1}${ex && ex.id ? ` (${ex.id})` : ''}`;
  checkExercise(ex, label, { brevet: true });
  checkConventions(`${label} (énoncé)`, ex.statement, 'G0'); checkConventions(`${label} (corrigé)`, ex.solution, 'G0');
  if (!THEMES.includes(ex.theme)) fail(`${label} : theme invalide (${ex.theme})`);
  if (![3, 3.5, 4, 4.5, 5].includes(ex.points)) fail(`${label} : points ∉ {3 ; 3,5 ; 4 ; 4,5 ; 5}`);
  if (ex.id && ids.has(ex.id)) fail(`${label} : id en double`);
  if (ex.id) ids.add(ex.id);
});

console.log(`Banques DS : ${Object.keys(bank).length} chapitres, ${total} exercices · Problèmes de brevet : ${brevet.length} · fichiers : ${bankFiles.join(', ') || 'aucun'}`);
if (errors) {
  console.error(`✖ test_ds_banks : ${errors} erreur(s)`);
  process.exit(1);
}
console.log('✔ test_ds_banks : banques de DS valides');
