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

// --- Racines, π, mots : analyseur d'expressions (sans eval) ---------------------------------
// Écritures équivalentes d'une forme exacte
[['√2', '√2'], ['sqrt(2)', '√2'], ['sqrt2', '√2'], ['racine de 2', '√2'], ['\\sqrt{2}', '√2'],
 ['3√2', '3√2'], ['3*sqrt(2)', '3√2'], ['3√(2)', '3√2'], ['√2*3', '3√2'], ['3 racine(2)', '3√2'],
 ['2√3/3', '2√3/3'], ['(2/3)√3', '2√3/3'], ['2sqrt(3)/3', '2√3/3'], ['\\frac{2\\sqrt{3}}{3}', '2√3/3'],
 ['2π', '2π'], ['2pi', '2π'], ['2*pi', '2π'], ['π/3', 'π/3'], ['pi/3', 'π/3'], ['1/3π', 'π/3'],
 ['3π/4', '3π/4'], ['3/4π', '3π/4'], ['-π/2', '-π/2'], ['−pi/2', '-π/2'], ['x = π/3', 'π/3'],
 ['(1+√5)/2', '(1+√5)/2'], ['1/2+√5/2', '(1+√5)/2'], ['(√2;π)', '(√2;π)'], ['(3√2 ; pi/4)', '(3√2;π/4)'],
 ['S={-2;3}', '(-2;3)'], ['(2, 5)', '(2;5)'], ['3,5;2', '(3,5;2)'], ['10*x', '10x'], ['10⁻³', '0.001'],
 ['0,060', '0,06'], ['10000000', '10^7']]
  .forEach(([u, a]) => exact(u, a, true));
// Forme exacte exigée : une valeur décimale, même très précise, ne remplace pas √2 ou π
[['1,414', '√2'], ['1.41421356237', '√2'], ['6.2832', '2π'], ['3,14', 'π'], ['0,33', '1/3'], ['0,333', '1/3'],
 ['(1,414;π)', '(√2;π)'], ['2', '2π'], ['3', '3√2'], ['√3', '√2'], ['π/4', '3π/4'], ['-√2', '√2'],
 // Arrondi demandé : la valeur non arrondie ou une forme exacte ne valident pas
 ['0,0609', '0,06'], ['1/3', '0,33'], ['√2', '1,41'], ['3,1416', '3,14'],
 // La réponse doit être calculée, pas recopiée sous forme d'opération
 ['2*3', '6'], ['√4', '2'], ['2^3', '8'], ['59049', '9^5'], ['2²', '4'],
 // Saisies invalides ou non sûres (aucune évaluation de code)
 ['1/0', '1'], ['2abc', '2'], ['alert(1)', '1'], ['Math.PI', 'π'], ['√', '√2'], ['((2', '2'], ['', '0'], ['2;3', '(2;3;4)']]
  .forEach(([u, a]) => exact(u, a, false));
// Mots et synonymes
[['Aucune', 'aucune'], ['∅', 'aucune'], ['pas de solution', 'aucune'], ["l'ensemble vide", 'aucune'], ['S = ∅', 'aucune'],
 ['{}', 'aucune'], ['Oui !', 'oui'], ['VRAI', 'oui'], ['faux', 'non'], ['Impossible', 'impossible'],
 ["ça n'existe pas", 'impossible'], ['Isocèle', 'isocèle'], ['un triangle isocèle', 'triangle isocèle'],
 ['parallèles', 'parallèle'], ["plus l'infini", '+∞'], ['-inf', '-∞']]
  .forEach(([u, a]) => exact(u, a, true));
[['0', 'aucune'], ['non', 'oui'], ['vrai', 'faux'], ['-inf', '+∞'], ['aucune', 'impossible'], ['rectangle', 'isocèle']]
  .forEach(([u, a]) => exact(u, a, false));

// Conseils (non comptés comme erreurs) : le motif est identifié
const advice = (user, answer, kind, statement = '') =>
  check(`analyzeAnswer(${JSON.stringify(user)} pour ${JSON.stringify(answer)}).advice`,
    E.analyzeAnswer(user, { type: 'exact', answer, statement }).advice || null, kind);
advice('1,414', '√2', 'exact');
advice('√18', '3√2', 'radical');
advice('2/√3', '2√3/3', 'denominator');
advice('4√3/6', '2√3/3', 'fraction');
advice('π+π', '2π', 'form');
advice('0,0609', '0,06', 'rounding');
advice('0,1234', '0,12', 'rounding', 'Donner la valeur arrondie au centième.');
advice('√2', '1,41', 'approx');
advice('0,07', '0,06', null);
advice('5', '3√2', null);
check('Message de conseil défini pour chaque motif',
  ['exact', 'radical', 'denominator', 'fraction', 'form', 'rounding', 'approx'].every(k => Array.isArray(E.ADVICE_MESSAGES[k]) && E.ADVICE_MESSAGES[k].length === 2), true);

// Réponses alternatives proposées par le générateur (ex. ancienne saisie « (3;2) » pour 3√2)
const withAlt = { type: 'exact', answer: '(3;2)', acceptedAnswers: ['3√2'] };
check('acceptedAnswers : réponse principale', E.validateAnswer('(3;2)', withAlt), true);
check('acceptedAnswers : forme alternative', E.validateAnswer('3sqrt(2)', withAlt), true);
check('acceptedAnswers : décimal refusé', E.validateAnswer('4,24', withAlt), false);
check('acceptedAnswers : autre valeur refusée', E.validateAnswer('2√3', withAlt), false);
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

// Un conseil de forme (racine à simplifier) n'est pas compté comme une erreur
freshChapter();
E.state.currentExercise = { type: 'exact', title: 't', statement: 'Simplifier √18.', answer: '3√2', solution: 's' };
const histBefore = E.state.sessionHistory.length;
const adv = E.submitAnswer('√18');
check('submitAnswer : conseil « radical »', adv && adv.needsSimplification && adv.adviceKind, 'radical');
check('submitAnswer : conseil non compté', E.state.sessionHistory.length, histBefore);
check('submitAnswer : forme exacte acceptée ensuite', E.submitAnswer('3*sqrt(2)').isCorrect, true);

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

// Pastilles : vert du premier coup, orange après une erreur, rouge après plusieurs erreurs ou si non trouvée
freshChapter();
answer(true); E.nextExercise();
answer(false); answer(true); E.nextExercise();
answer(false); answer(false); answer(true); E.nextExercise();
answer(false); E.nextExercise();
check('Pastilles vert / orange / rouge / rouge', E.getTierProgressStatus('SIM').marks.join(''), 'gorr');
check('Pastilles alignées sur les traces', S.getChapterProgress('SIM').tierMarks[1].length, S.getChapterProgress('SIM').tierWindows[1].length);

// Trophée Grand Maître : chapitre mené de 0 % à 100 % sans aucune erreur (indices permis)
const prevChapters = window.MATHS_CHAPTERS;
const seedBefore = seed, genBefore = genCount;
window.MATHS_CHAPTERS = [{ id: 'SIM', num: 'S1', title: 'Simulation', shortTitle: 'Simulation' }];
const runToFull = (errorAt) => {
  freshChapter();
  const badges = [];
  for (let i = 0; i < 200 && S.getChapterProgress('SIM').mastery < 100; i++) {
    if (i === errorAt) answer(false);
    const r = answer(true);
    if (r && r.newlyUnlockedBadges) badges.push(...r.newlyUnlockedBadges.map(b => b.badgeId || b.id));
    E.nextExercise();
  }
  return badges;
};
let vb = runToFull(-1);
check('Grand Maître : sans erreur, trophée décroché à 100 %', vb.includes('SIM_perfect'), true);
check('Grand Maître : rang Maître (100 %) aussi décroché', vb.includes('SIM_tier_4'), true);
check('Grand Maître : titre', /^Grand Maître /.test((S.load().badges.find(b => b.id === 'SIM_perfect') || {}).title), true);
vb = runToFull(10);
check('Grand Maître : une seule erreur suffit à le perdre', vb.includes('SIM_perfect'), false);
check('Grand Maître : rang Maître malgré l\'erreur', vb.includes('SIM_tier_4'), true);
freshChapter(); answer(true); E.nextExercise(); E.requestHint(1);
check('Grand Maître : un indice suffit à le perdre', S.getChapterProgress('SIM').flawless, false);
store[KEY] = JSON.stringify({ version: 2, user: { xp: 0 }, chapters: { SIM: { mastery: 30, currentTier: 2, validatedTiers: [1], completed: [], attempts: 12 } } });
E.startChapterSession('SIM'); answer(true);
check('Grand Maître : impossible pour un chapitre déjà commencé', S.getChapterProgress('SIM').flawless, false);
window.MATHS_CHAPTERS = prevChapters;
seed = seedBefore; genCount = genBefore;

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
// Pastilles orange (juste après une erreur) non comptées : environ 31 questions en médiane (25 avant le 1/11/2026)
const weak = profile('Élève en difficulté (45 %)', 0.45, { mcq: 0.3 }, { 1: [8, 40] });
check('Élève à 45 % : jamais bloqué au palier 1 (toujours validé, sans allègement)', weak.every(r => r[1]), true);
check('Objectif inchangé (6 sur 8) même après 16 questions sur le palier', E.getTierTarget({ tierAnswered: { 1: 40 }, tierWindows: { 1: Array(40).fill(1) } }, 1), P.TARGET);
// Indice utilisé dans la fenêtre : 7 bonnes réponses sur 8 au lieu de 6
const withHint = { tierAnswered: { 1: 8 }, tierWindows: { 1: [1, 1, 1, 1, 1, 0.75, 0, 0] }, tierMarks: { 1: ['g', 'g', 'g', 'g', 'g', 'h', 'r', 'r'] } };
check('Indice dans la fenêtre : objectif 7', E.getTierTarget(withHint, 1), P.TARGET + 1);
check('6 bonnes dont une avec indice : palier non validé', E.isTierObjectiveMet(withHint, 1), false);
withHint.tierWindows[1][6] = 1; withHint.tierMarks[1][6] = 'g';
check('7 bonnes dont une avec indice : palier validé', E.isTierObjectiveMet(withHint, 1), true);
const noHint = { tierAnswered: { 1: 8 }, tierWindows: { 1: [1, 1, 1, 1, 1, 1, 0.5, 0] }, tierMarks: { 1: ['g', 'g', 'g', 'g', 'g', 'g', 'o', 'r'] } };
check('6 vertes sans indice : palier validé', E.isTierObjectiveMet(noHint, 1), true);
noHint.tierMarks[1][5] = 'o';
check('Orange non comptée : 5 vertes ne suffisent pas', E.isTierObjectiveMet(noHint, 1), false);
const guessers = Array.from({ length: 40 }, () => simulate(0, { mcq: 1, guess: true, maxQ: 100 }));
check('QCM au hasard : palier 1 presque jamais validé en 100 questions', guessers.filter(r => r[1]).length <= 4, true);
mcqRate = 0;

if (failures) {
  logError(`\n✖ test_core : ${failures} échec(s)`);
  process.exit(1);
}
console.log('✔ test_core : correction des réponses, mélange des QCM, stockage et modèle de progression OK');
