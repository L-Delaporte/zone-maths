#!/usr/bin/env node
/**
 * Générateurs : aucune regex à lookbehind (Safari < 16.4), mélanges sans biais, historique anti-répétition
 * compact, écritures propres (parenthèses, x = n/1, bruit flottant dans les SVG), variété Licence et CAPES.
 * Usage : node scripts/tests/test_audit_generators.js
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..');

// --- Environnement de navigateur minimal ---
global.window = global;
const store = {};
global.localStorage = {
  getItem: k => (k in store ? store[k] : null),
  setItem: (k, v) => { store[k] = String(v); },
  removeItem: k => { delete store[k]; }
};
global.sessionStorage = global.localStorage;
const fakeEl = () => ({
  style: {}, classList: { add() {}, remove() {}, toggle() {} }, setAttribute() {}, appendChild() {},
  addEventListener() {}, getContext: () => null, querySelector: () => null, querySelectorAll: () => []
});
const nodes = {};
global.document = {
  createElement: fakeEl, createElementNS: fakeEl, querySelector: () => null, querySelectorAll: () => [],
  getElementById: id => nodes[id] || null, addEventListener() {}, body: fakeEl(), documentElement: fakeEl()
};
if (typeof navigator === 'undefined') global.navigator = { userAgent: 'node' };

[
  'js/data/chapters.js', 'js/data/chapters_lycee.js', 'js/data/chapters_licence.js', 'js/data/exercises.js',
  'js/data/data_2nde.js', 'js/data/data_1ere.js', 'js/data/data_1tc.js', 'js/data/data_1techno.js', 'js/data/data_terminale.js', 'js/data/data_l1.js',
  'js/data/data_l2.js', 'js/data/data_l3.js', 'js/data/data_capes.js', 'js/data/data_proofs.js',
  'js/geometryFigures.js', 'js/scratchRenderer.js', 'js/generatorsCore.js', 'js/randomGenerators.js',
  'js/generators6e.js', 'js/advancedGenerators.js', 'js/lyceeGenerators.js', 'js/premiereVoiesGenerators.js', 'js/adaptiveEngine.js',
  'js/flashQuizGenerator.js'
].forEach(f => {
  const p = path.join(ROOT, f);
  if (fs.existsSync(p)) vm.runInThisContext(fs.readFileSync(p, 'utf8'), { filename: p });
});
const G = global.MathsGenerators;
const A = global.MathsAdvancedGenerators;

const failures = [];
const check = (cond, msg) => { if (!cond) failures.push(msg); };
const resetHistory = () => { G._recentGeneratedStatements = {}; Object.keys(store).forEach(k => delete store[k]); };

// --- 1. Sources ---
const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
  const p = path.join(dir, e.name);
  return e.isDirectory() ? walk(p) : (e.name.endsWith('.js') ? [p] : []);
});
walk(path.join(ROOT, 'js')).forEach(p => {
  check(!/\(\?<[=!]/.test(fs.readFileSync(p, 'utf8')), `lookbehind dans ${path.relative(ROOT, p)}`);
});
['randomGenerators', 'generators6e', 'advancedGenerators', 'lyceeGenerators', 'flashQuizGenerator', 'generatorsCore',
  'santeGenerators', 'vetoGenerators', 'crpeGenerators'].forEach(f => {
  const p = path.join(ROOT, 'js', `${f}.js`);
  if (fs.existsSync(p)) check(!/sort\(\(\)\s*=>\s*Math\.random/.test(fs.readFileSync(p, 'utf8')), `mélange biaisé dans ${f}.js`);
});

// --- 2. Filet typographique ---
[
  ['2 + (2) \\times (-2)', '2 + 2 \\times (-2)'], ['5 - (3)', '5 - 3'], ['x = \\left(2\\right)', 'x = 2'],
  ['(-3) + (5)', '(-3) + 5'], ['f(3)', 'f(3)'], ['2(3)', '2(3)'], ['-(25)', '-(25)'], ['= -(6)', '= -(6)'],
  ['(0{,}5)^2', '(0{,}5)^2'], ['(5)^{2}', '5^{2}'], ['k^2 = (3)^2 = 9', 'k^2 = 3^2 = 9'], ['f(3)^2', 'f(3)^2'],
  ['(-3)^2', '(-3)^2'], ['-(3)^2', '-(3)^2'], ['A = B = B', 'A = B'], ['4 = 4', '4 = 4'], ['(4)(5)', '(4)(5)'], ['(1)', '(1)'], ['\\text{(1)}', '\\text{(1)}'],
  ['\\frac{(3)}{2}', '\\frac{(3)}{2}'], ['3 \\times (4 + 5)', '3 \\times (4 + 5)'],
  ['3 \\times \\left(\\frac{5}{9}\\right)', '3 \\times \\frac{5}{9}'], ['x - \\left(\\dfrac{1}{2}\\right) = 1', 'x - \\dfrac{1}{2} = 1'],
  ['24 \\times \\left(\\frac{5}{9}\\right)^3', '24 \\times \\left(\\frac{5}{9}\\right)^3'], ['2\\left(\\frac{1}{2}\\right)', '2\\left(\\frac{1}{2}\\right)'],
  ['\\arctan\\left(\\frac{15}{9}\\right)', '\\arctan\\left(\\frac{15}{9}\\right)'], ['3 \\times \\left(-\\frac{5}{9}\\right)', '3 \\times \\left(-\\frac{5}{9}\\right)']
].forEach(([input, want]) => {
  const got = G._polishMath(input);
  check(got === want, `_polishMath(${input}) = ${got}, attendu ${want}`);
});
const noisy = G._polishText('<svg viewBox="0 0 10 10"><path d="M 1.0000000000000002 2.5 L 3e-17 7.123456"/><text x="1.5">2.5</text></svg>');
check(!/\d\.\d{3,}|\de-\d/.test(noisy) && noisy.includes('x="1.5"') && noisy.includes('>2,5<'), `SVG mal nettoyé : ${noisy}`);

// --- 3. Historique anti-répétition ---
{
  resetHistory();
  const legacy = '<svg>' + 'x'.repeat(5000) + '</svg> Énoncé complet';
  store[G._recentStorageKey] = JSON.stringify({ T1: [legacy, '#abc12'], T2: 'corrompu' });
  G._recentGeneratedStatements = {};
  const list = G._getRecentHistory('T1');
  check(list.length === 2 && list[0] === G._statementKey(legacy) && list[1] === '#abc12', 'migration de l\'ancien historique');
  check(/^#[0-9a-z]{1,7}$/.test(G._statementKey(legacy)), 'forme de l\'empreinte');
  check(Array.isArray(G._getRecentHistory('T2')), 'entrée corrompue de l\'historique');
  resetHistory();
  for (let i = 0; i < 80; i++) G._saveRecentStatement('T1', `Énoncé ${i} ${'y'.repeat(2000)}`);
  check(G._getRecentHistory('T1').length === 50, 'plafond de l\'historique');
  check(store[G._recentStorageKey].length < 1000, `historique trop volumineux : ${store[G._recentStorageKey].length} caractères`);
  resetHistory();
}

// --- 4. Collège et 6e : écritures produites ---
const SIXIEME = Object.keys(G).filter(k => /^generate6/.test(k)).map(k => k.slice(8));
const stripSvg = s => s.replace(/<svg[\s\S]*?<\/svg>/g, '');
const mathSegments = s => [...stripSvg(s).matchAll(/\$\$([\s\S]*?)\$\$|\$([^$]*?)\$/g)].map(m => (m[1] !== undefined ? m[1] : m[2]));
const SAMPLES = 40;
[...G.COLLEGE_CHAPTERS, ...SIXIEME].forEach(ch => {
  for (let tier = 1; tier <= 4; tier++) {
    for (let i = 0; i < SAMPLES; i++) {
      delete G._recentGeneratedStatements[ch];
      const q = G.generateForChapter(ch, tier);
      if (!q) continue;
      Object.values(q).filter(v => typeof v === 'string').forEach(v => {
        (v.match(/<svg[\s\S]*?<\/svg>/g) || []).forEach(svg => (svg.match(/<[^>]*>/g) || []).forEach(tag => {
          check(!/\d\.\d{3,}|\de-\d/.test(tag), `${ch}/T${tier} bruit flottant : ${tag.slice(0, 90)}`);
        }));
        mathSegments(v).forEach(seg => {
          check(!/(?:\\times|\\div)\s*-\s*(?:\d|\\d?frac)/.test(seg), `${ch}/T${tier} facteur négatif sans parenthèses : ${seg.slice(0, 90)}`);
          check(!/\bx\s*=\s*\\d?frac\{-?[\d{},]+\}\{1\}/.test(seg), `${ch}/T${tier} x = n/1 : ${seg.slice(0, 90)}`);
          check(!/(?:^|[=+(]\s*|\\times\s*)\(\d+\)\^/.test(seg), `${ch}/T${tier} base positive entre parenthèses : ${seg.slice(0, 90)}`);
          check(!/[\dx]\s*-\s*\(\d*x\)\s*=/.test(seg), `${ch}/T${tier} monôme positif entre parenthèses : ${seg.slice(0, 90)}`);
          const membres = seg.split('=').map(m => m.trim());
          if (membres.length > 2) membres.forEach((m, k) => check(!k || !m || m !== membres[k - 1], `${ch}/T${tier} égalité dupliquée : ${seg.slice(0, 90)}`));
        });
      });
    }
  }
});
resetHistory();

// --- 5. L1-PRF : générateur paramétré ---
for (let tier = 1; tier <= 4; tier++) {
  const seen = new Set();
  let made = 0;
  for (let i = 0; i < 150; i++) {
    const q = A.generate('L1-PRF', tier);
    if (!q) continue;
    made++;
    seen.add(q.statement);
    // familles à saisie exacte (contre-exemple, rang d'initialisation…) : on contrôle la forme QCM d'origine
    const opts = q.type === 'exact' && q.mcq ? q.mcq.options : q.options;
    check(Array.isArray(opts) && opts.length >= 4, `L1-PRF/T${tier} moins de 4 options : ${q.title}`);
    if (!Array.isArray(opts)) continue;
    check(new Set(opts).size === opts.length, `L1-PRF/T${tier} options en double : ${q.title}`);
    if (q.type === 'exact') check(String(q.answer).trim() !== '' && opts.includes(q.mcq.answer), `L1-PRF/T${tier} saisie ou réponse d'origine invalide : ${q.title}`);
    else check(Number.isInteger(q.correctIndex) && q.options[q.correctIndex] !== undefined, `L1-PRF/T${tier} index correct invalide : ${q.title}`);
    check(q.solution && !/undefined|NaN/.test(q.statement + q.solution + opts.join('')), `L1-PRF/T${tier} texte incomplet : ${q.title}`);
  }
  check(made >= 75, `L1-PRF/T${tier} : ${made} tirages générés sur 150`);
  check(seen.size >= 30, `L1-PRF/T${tier} : ${seen.size} énoncés distincts`);
}

// --- 6. Variété réelle, historique actif ---
const distinct = (ch, tier, n) => {
  resetHistory();
  const seen = new Set();
  for (let i = 0; i < n; i++) {
    const q = G.generateForChapter(ch, tier);
    if (q) seen.add(q.statement);
  }
  return seen.size;
};
const capesIds = (global.MATHS_CHAPTERS || []).map(c => c.id).filter(id => /^capes-\d+$/.test(id));
check(capesIds.length >= 10, `chapitres CAPES trouvés : ${capesIds.length}`);
capesIds.forEach(id => {
  for (let tier = 1; tier <= 4; tier++) {
    const d = distinct(id, tier, 60);
    check(d >= 40, `${id}/T${tier} : ${d} énoncés distincts sur 60`);
  }
});
for (let tier = 1; tier <= 4; tier++) {
  const d = distinct('L1-PRF', tier, 60);
  check(d >= 25, `L1-PRF/T${tier} : ${d} énoncés distincts sur 60`);
  // Banque fixe, sans générateur : tous les exercices du palier doivent sortir (au moins 10 par palier)
  const oral = distinct('capes-oral2', tier, 60);
  check(oral >= 10, `capes-oral2/T${tier} : ${oral} énoncés distincts sur 60`);
}
resetHistory();

// --- 7. Devoir blanc ---
{
  const Q = global.MathsQuizGenerator;
  const T = global.MathsExamTools;
  nodes['quiz-exam-note'] = { style: {} };
  nodes['quiz-count-select'] = { value: 'bac-20' };
  Q.syncExamNote();
  check(nodes['quiz-exam-note'].style.display === 'block', 'avertissement absent pour un format d\'examen');
  nodes['quiz-count-select'].value = '10';
  Q.syncExamNote();
  check(nodes['quiz-exam-note'].style.display === 'none', 'avertissement affiché pour un format libre');

  const ch3 = (global.MATHS_CHAPTERS || []).filter(c => c.level === '3eme').map(c => c.id);
  check(T.buildAutomatismes(ch3, 9, 0.4).length === 9, 'automatismes du brevet : 9 questions attendues');

  // Rituels (diaporama) : automatismes sans calculatrice, progression des paliers gardée, repli si rien ne convient
  let ritCalc = 0, firstTiers = 0, lastTiers = 0;
  for (let r = 0; r < 12; r++) {
    const serie = G.generateSeries(ch3, 12, { ritual: true });
    check(serie.length === 12, `rituel 3e : ${serie.length} questions au lieu de 12`);
    serie.forEach(q => { if (T.needsCalculator(q)) ritCalc++; });
    firstTiers += serie.slice(0, 3).reduce((s, q) => s + (q.tier || 1), 0);
    lastTiers += serie.slice(-3).reduce((s, q) => s + (q.tier || 1), 0);
  }
  check(ritCalc === 0, `rituel 3e : ${ritCalc} question(s) demandant une calculatrice`);
  check(lastTiers > firstTiers, 'rituel 3e : la série ne monte plus en palier');
  // G2 au palier 3 : toujours un arrondi ; le rituel doit redescendre (au plus un échec sur 30, tirage aléatoire)
  let g2Calc = 0;
  for (let k = 0; k < 30; k++) {
    const q = G.pickRitualQuestion('G2', 3);
    check(q && q.statement, 'rituel G2 (Défi) : question absente');
    if (q && T.needsCalculator(q)) g2Calc++;
  }
  check(g2Calc <= 1, `rituel G2 (Défi) : ${g2Calc} question(s) à calculatrice sur 30`);
  const repli = G.pickRitualQuestion('Algo', 4);
  check(repli && repli.statement, 'rituel Algo palier 4 : pas de question de repli');
  check(!G.isRitualQuestion({ statement: 'Donner une valeur approchée au dixième de $\\sqrt{7}$.' }), 'rituel : valeur approchée acceptée');
  check(!G.isRitualQuestion({ statement: 'x'.repeat(G.RITUAL_MAX_LENGTH + 1) }), 'rituel : énoncé trop long accepté');
  check(G.isRitualQuestion({ statement: 'Calculer $3 \\times 4$.\n\n*Saisir un nombre entier.*' }), 'rituel : question courte refusée');
  global.MATHS_BREVET_PROBLEMS = [{ theme: 'a', points: 4 }, { theme: 'b', points: 4 }, { theme: 'c', points: 4 }];
  const picked = Q.pickBrevetProblems();
  check(picked && picked.length === 3 && new Set(picked.map(p => p.theme)).size === 3, 'tirage des problèmes du brevet');
}

if (failures.length) {
  const uniques = [...new Set(failures)];
  console.error(`ÉCHEC : ${failures.length} anomalie(s), ${uniques.length} distincte(s).`);
  uniques.slice(0, 40).forEach(f => console.error(`  - ${f}`));
  process.exit(1);
}
console.log('OK : générateurs conformes (regex, mélanges, historique, écritures, variété, devoir blanc).');
