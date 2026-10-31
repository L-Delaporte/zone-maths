#!/usr/bin/env node
/**
 * Tests du cœur applicatif : correction des réponses (validateAnswer) et robustesse du stockage.
 * Usage : node scripts/tests/test_core.js
 */
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');

const store = {};
global.window = {};
global.localStorage = {
  getItem: k => (k in store ? store[k] : null),
  setItem: (k, v) => { store[k] = String(v); },
  removeItem: k => { delete store[k]; }
};
require(path.join(ROOT, 'js/storage.js'));
require(path.join(ROOT, 'js/adaptiveEngine.js'));
const S = window.MathsStorage;
const E = window.MathsAdaptiveEngine;

// Les avertissements attendus (données corrompues volontairement) ne doivent pas polluer la sortie
const logError = console.error.bind(console);
console.warn = () => {};
console.error = () => {};

let failures = 0;
function check(label, actual, expected) {
  if (actual !== expected) {
    failures++;
    logError(`✖ ${label} : obtenu ${JSON.stringify(actual)}, attendu ${JSON.stringify(expected)}`);
  }
}

// --- Correction des réponses saisies -------------------------------------------------------
const exact = (user, answer, expected) =>
  check(`validateAnswer(${JSON.stringify(user)} pour ${JSON.stringify(answer)})`, E.validateAnswer(user, { type: 'exact', answer }), expected);

// Réponses fausses qui étaient acceptées (parseFloat tronquait au premier caractère non numérique)
exact('2', '2x+3', false);
exact('3', '3√2', false);
exact('2', '2π', false);
exact('9', '9^5', false);
exact('30', '30x', false);
exact('6', '6;5;3', false);
exact('2abc', '2', false);
exact('3', '17/3', false);
// Réponses justes sous d'autres écritures
exact('2,5', '2.5', true);
exact('5/2', '2.5', true);
exact('x=4', '4', true);
exact('S={4}', '4', true);
exact('12 cm', '12', true);
exact('1,6*10^1', '16', true);
exact('1.6×10^1', '16*10^0', true);
exact('10^-3', '0.001', true);
exact('1,6×10^-1', '1.6*10^-1', true);
exact('1,6 \\times 10^{-1}', '1.6*10^-1', true);
exact('1.6*10^(-1)', '1.6*10^-1', true);
exact('0,16', '1.6*10^-1', true);
exact('16*10^-2', '1.6*10^-1', true);
exact('(3;-2)', '(3;-2)', true);
exact('64/6', '32/3', true);
exact('(3;5)', '(3 ; 5)', true);
exact('2x+3', '2x + 3', true);
exact('−3', '-3', true);
exact('oui', 'vrai', true);
// QCM
check('QCM bon indice', E.validateAnswer(2, { type: 'mcq', options: ['a', 'b', 'c'], correctIndex: 2 }), true);
check('QCM mauvais indice', E.validateAnswer(0, { type: 'mcq', options: ['a', 'b', 'c'], correctIndex: 2 }), false);

// --- Mélange des QCM -------------------------------------------------------------------------
const positions = new Set();
for (let i = 0; i < 200; i++) {
  const q = E.shuffleMcq({ type: 'mcq', options: ['juste', 'f1', 'f2', 'f3'], correctIndex: 0 });
  check('shuffleMcq conserve la bonne réponse', q.options[q.correctIndex], 'juste');
  positions.add(q.correctIndex);
}
check('shuffleMcq varie la position de la bonne réponse', positions.size, 4);

// --- Stockage : données corrompues ou partielles ------------------------------------------------
const KEY = 'maths_3e_progress_v1';
for (const raw of ['{"version":1,"user":null}', '{"user":{"name":"a"}}', '{"chapters":null}', '[]', 'pas du JSON']) {
  delete store[KEY + '_backup'];
  store[KEY] = raw;
  try {
    S.addXp(5);
    S.getChapterProgress('N1');
    check(`XP après chargement de ${raw}`, S.load().user.xp, 5);
  } catch (e) {
    failures++;
    logError(`✖ Plantage avec les données ${raw} : ${e.message}`);
  }
}
store[KEY] = 'pas du JSON';
delete store[KEY + '_backup'];
S.load();
check('Copie de secours des données illisibles', store[KEY + '_backup'], 'pas du JSON');

// Migration v1 → v2 : les ids d'exercices générés ne sont plus conservés
store[KEY] = JSON.stringify({ version: 1, user: { xp: 10 }, chapters: { N1: { completed: ['N1-dyn-t1-123', 'N1-ex1'] } } });
check('Migration v2 des exercices réussis', JSON.stringify(S.getChapterProgress('N1').completed), '["N1-ex1"]');

// Import / export
check('Import refusé si le fichier n\'est pas une progression', S.importFromJson('{"foo":1}'), false);
check('Import refusé si JSON invalide', S.importFromJson('{'), false);
check('Import accepté pour une sauvegarde valide', S.importFromJson(JSON.stringify(S.load())), true);

// --- Modèle de progression (fenêtre glissante par palier) ------------------------------------
// Générateur pseudo-aléatoire déterministe : les simulations donnent toujours le même résultat
let seed = 12345;
Math.random = () => {
  seed = (seed + 0x6D2B79F5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
let genCount = 0;
let mcqRate = 0;
window.MathsGenerators = {
  generateForChapter() {
    genCount++;
    if (Math.random() < mcqRate) {
      return { type: 'mcq', title: 't', statement: `Q${genCount}`, options: ['ok', 'f1', 'f2', 'f3'], correctIndex: 0, solution: 's' };
    }
    return { type: 'exact', title: 't', statement: `Q${genCount}`, answer: '7', solution: 's' };
  }
};
const P = E.PROGRESSION;
const freshChapter = () => { delete store[KEY]; E._recentStatements = {}; E.startChapterSession('SIM'); };
const answer = ok => {
  const ex = E.state.currentExercise;
  if (ex.type === 'mcq') return E.submitAnswer(ok ? ex.correctIndex : (ex.correctIndex + 1) % ex.options.length);
  return E.submitAnswer(ok ? '7' : '8');
};
const tiersOf = () => (S.getChapterProgress('SIM').validatedTiers || []).slice().sort();

// Pas de validation en moins de MIN_ANSWERS réponses, même toutes justes
freshChapter();
for (let i = 1; i < P.MIN_ANSWERS; i++) { answer(true); E.nextExercise(); }
check('Palier 1 non validé après 5 bonnes réponses', tiersOf().includes(1), false);
check('Message de progression explicite', E.getTierProgressStatus('SIM').message, 'Encore 1 bonne réponse pour débloquer le Palier 2 !');
const r6 = answer(true);
check('Palier 1 validé à la 6e bonne réponse', tiersOf().includes(1), true);
check('Bascule automatique sur le palier 2', r6.newTier, 2);
// Deux réussites sur la même question ne comptent qu'une fois
freshChapter();
answer(true); answer(true);
check('Une question = une seule trace', S.getChapterProgress('SIM').tierWindows[1].length, 1);
freshChapter();
for (let i = 0; i < P.MIN_ANSWERS; i++) { answer(true); E.nextExercise(); }
check('Maîtrise affichée = 25 % au palier 1 validé', S.getChapterProgress('SIM').mastery, 25);
// Une série d'erreurs ne fait jamais perdre un palier validé, et l'erreur ne retire rien au palier en cours
E.nextExercise();
for (let i = 0; i < 3; i++) answer(true), E.nextExercise();
const before = E.getTierProgressStatus('SIM').remaining;
for (let i = 0; i < 3; i++) answer(false);
check('Erreurs : palier 1 toujours validé', tiersOf().includes(1), true);
check('Erreur sur une question : objectif inchangé (fenêtre non pleine)', E.getTierProgressStatus('SIM').remaining, before);
check('Palier 2 toujours débloqué après des erreurs', E.isTierUnlocked('SIM', 2), true);

// Crédits : indice demandé, essais multiples, QCM (correction du hasard)
check('Crédit juste sans aide', E.answerCredit({ type: 'exact' }, true, 0, 0), 1);
check('Crédit juste avec un indice', E.answerCredit({ type: 'exact' }, true, 0, 1), 0.75);
check('Crédit juste au 2e essai', E.answerCredit({ type: 'exact' }, true, 1, 0), 0.5);
check('Crédit QCM trouvé par élimination', E.answerCredit({ type: 'mcq', options: ['a', 'b', 'c', 'd'] }, true, 1, 0) < 0, true);

// Une question passée après une erreur garde sa trace (pas d'esquive possible)
freshChapter();
answer(false);
E.nextExercise();
check('Erreur puis question suivante : trace conservée', S.getChapterProgress('SIM').tierWindows[1].length, 1);

// Migration douce des progressions de l'ancien modèle
store[KEY] = JSON.stringify({ version: 2, user: { xp: 0 }, chapters: {
  OLD1: { mastery: 40, currentTier: 2, validatedTiers: [1], completed: [], successesByTier: { 1: 9, 2: 4, 3: 0, 4: 0 } },
  OLD2: { mastery: 60, currentTier: 3, completed: [] },
  OLD3: { mastery: 100, currentTier: 4, validatedTiers: [1, 2, 3, 4], completed: [] }
} });
check('Migration : paliers débloqués conservés (mastery 60 sans validatedTiers)', E.isTierUnlocked('OLD2', 3), true);
const st1 = E.getTierProgressStatus('OLD1');
check('Migration : maîtrise jamais en baisse', st1.mastery >= 40, true);
check('Migration : palier 2 en cours', st1.tier, 2);
check('Migration : chapitre complet conservé', E.getTierProgressStatus('OLD3').complete, true);
E.startChapterSession('OLD1');
answer(true);
check('Migration appliquée au premier enregistrement', S.getChapterProgress('OLD1').tierModel, P.MODEL_VERSION);
check('Migration : palier 1 toujours validé', S.getChapterProgress('OLD1').validatedTiers.includes(1), true);

// Révision espacée : une question de rappel d'un palier validé toutes les REVIEW_EVERY questions
freshChapter();
for (let i = 0; i < P.MIN_ANSWERS; i++) { answer(true); if (i < P.MIN_ANSWERS - 1) E.nextExercise(); }
E.setTier(2);
const reviewFlags = [];
for (let i = 0; i < 2 * P.REVIEW_EVERY; i++) { reviewFlags.push(!!E.state.currentExercise.isReview); answer(false); answer(false); answer(false); E.nextExercise(); }
check('Révision espacée : rappels du palier 1 intercalés', reviewFlags.filter(Boolean).length >= 1, true);
check('Pas de rappel juste après un changement de palier', reviewFlags[0], false);

// Simulations de profils d'élèves : questions nécessaires par palier
function simulate(p, { mcq = 0, guess = false, maxQ = 300 } = {}) {
  mcqRate = mcq;
  freshChapter();
  const at = {};
  for (let q = 1; q <= maxQ; q++) {
    const ex = E.state.currentExercise;
    let res;
    if (guess && ex.type === 'mcq') {
      const tried = new Set();
      do {
        const opts = ex.options.map((_, i) => i).filter(i => !tried.has(i));
        const pick = opts[Math.floor(Math.random() * opts.length)];
        tried.add(pick);
        res = E.submitAnswer(pick);
      } while (!res.isCorrect && res.stage !== 'solution');
    } else {
      res = answer(Math.random() < p);
      while (!res.isCorrect && res.stage !== 'solution') res = answer(Math.random() < Math.min(0.95, p + 0.15));
    }
    tiersOf().forEach(t => { if (!at[t]) at[t] = q; });
    if (at[4]) break;
    if (res.isCorrect && res.newlyValidatedTiers && res.newlyValidatedTiers.length) E.setTier(res.newTier);
    else E.nextExercise();
  }
  return at;
}
const med = a => { const s = a.slice().sort((x, y) => x - y); return s[Math.floor(s.length / 2)]; };
function profile(label, p, opts, ranges) {
  const runs = Array.from({ length: 40 }, () => simulate(p, opts));
  for (const [tier, [lo, hi]] of Object.entries(ranges)) {
    const t = Number(tier);
    const per = runs.filter(r => r[t]).map(r => r[t] - (r[t - 1] || 0));
    const m = per.length ? med(per) : Infinity;
    if (!(m >= lo && m <= hi)) { failures++; logError(`✖ ${label} : palier ${t} validé en ${m} questions (médiane), attendu ${lo}-${hi}`); }
  }
  return runs;
}
const strong = profile('Élève fort (90 %)', 0.9, { mcq: 0.3 }, { 1: [6, 9], 2: [6, 10], 3: [6, 10], 4: [6, 10] });
check('Élève fort : jamais de palier validé en moins de 6 questions', strong.every(r => r[1] >= P.MIN_ANSWERS), true);
profile('Élève moyen (70 %)', 0.7, { mcq: 0.3 }, { 1: [6, 12], 2: [7, 14], 3: [7, 14], 4: [7, 14] });
const weak = profile('Élève en difficulté (45 %)', 0.45, { mcq: 0.3 }, { 1: [8, 30] });
check('Élève à 45 % : jamais bloqué au palier 1 (validé en moins de 60 questions)', weak.every(r => r[1] && r[1] <= 60), true);
const guessers = Array.from({ length: 40 }, () => simulate(0, { mcq: 1, guess: true, maxQ: 100 }));
check('QCM au hasard : palier 1 presque jamais validé en 100 questions', guessers.filter(r => r[1]).length <= 4, true);
mcqRate = 0;

if (failures) {
  logError(`\n✖ test_core : ${failures} échec(s)`);
  process.exit(1);
}
console.log('✔ test_core : correction des réponses, mélange des QCM, stockage et modèle de progression OK');
