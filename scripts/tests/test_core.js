#!/usr/bin/env node
/**
 * Tests du cœur applicatif : correction des réponses (validateAnswer) et robustesse du stockage.
 * Usage : node scripts/tests/test_core.js
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
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
exact('5=x', '5', true);
exact('≈3,5', '3.5', true);
exact('environ 3,5', '3.5', true);
exact('8.', '8', true);
exact('x²+2x+1', 'x^2+2x+1', true);
exact('4/-49', '-4/49', true);
exact('-4/49', '4/-49', true);
exact('-4/-49', '4/49', true);
exact('-4/-49', '-4/49', false);

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
  ['exact', 'radical', 'denominator', 'fraction', 'fractionForm', 'decimalForm', 'scientific', 'power10', 'unit', 'form', 'rounding', 'approx'].every(k => Array.isArray(E.ADVICE_MESSAGES[k]) && E.ADVICE_MESSAGES[k].length === 2), true);

// Forme imposée par la consigne : sans consigne de forme (ci-dessus), seule la valeur compte
const SCI = "Donner l'écriture scientifique de ce nombre.";
const POW = "Écrire sous la forme d'une seule puissance de 10.";
const FRAC = 'Donner le résultat sous forme de fraction irréductible.';
const LIBRE = '*Saisir la valeur exacte : entier, décimal ou fraction irréductible (par exemple -7/3).*';
const DECI = "Donner l'écriture décimale de la fraction 14/5.";
const inForm = (user, answer, statement, expected) =>
  check(`validateAnswer(${JSON.stringify(user)} pour ${JSON.stringify(answer)}, ${statement})`, E.validateAnswer(user, { type: 'exact', answer, statement }), expected);
['9,1*10^6', '9,1 x 10^6', '9,1×10⁶', '9,1.10^6', '9,1 10^6', '9,1e6', '9,1E6', '9.1*10^(6)'].forEach(u => inForm(u, '9.1*10^6', SCI, true));
['9100000', '91*10^5', '0,91*10^7'].forEach(u => advice(u, '9.1*10^6', 'scientific', SCI));
inForm('6,02.10^23', '6.02*10^23', SCI, true);
inForm('1,5', '1.5*10^0', SCI, true);
advice('15*10^-1', '1.5*10^0', 'scientific', SCI);
advice('3/2', '1.5*10^0', 'scientific', SCI);
advice('100000000000', '10^11', 'power10', POW);
inForm('10^11', '10^11', POW, true);
inForm('10¹¹', '10^11', POW, true);
exact('9100000', '9.1*10^6', true);
advice('1,25', '5/4', 'fractionForm', FRAC);
advice('10/8', '5/4', 'fraction', FRAC);
inForm('5/4', '5/4', FRAC, true);
inForm('2', '2', FRAC, true);
inForm('1,25', '5/4', LIBRE, true);
advice('0,1666666667', '1/6', 'exact');
advice('0,1666666667', '1/6', 'exact', LIBRE);
exact('1,25', '5/4', true);
advice('14/5', '2.8', 'decimalForm', DECI);
inForm('2,8', '2.8', DECI, true);
// Formulations courtes de la consigne, recopie de l'énoncé
['(fraction)', '(fraction $a/b$)'].forEach(c => advice('0,375', '3/8', 'fractionForm', `Quelle est la probabilité ? ${c}`));
inForm('0,375', '3/8', 'Quelle est la probabilité ? (entier ou fraction)', true);
['sous la forme d\'un nombre décimal.', '(nombre décimal)', '(entier ou décimal)', '(valeur exacte, nombre décimal)'].forEach(c => advice('51/2', '25.5', 'decimalForm', `Écrire le résultat ${c}`));
advice('51/2', '25.5', 'decimalForm', 'Donner le quotient décimal exact de 51 par 2.');
advice('102/4', '25.5', 'decimalForm', 'Donner le quotient décimal exact de 102 par 4.');
inForm('51/2', '25.5', 'Saisir la valeur exacte : (décimal ou fraction)', true);
inForm('51/2', '25.5', 'Ce nombre n\'est pas un nombre décimal, et ?', true);
advice('9,1*10^6', '9100000', 'decimalForm', "Donner l'écriture décimale de $9{,}1 \\times 10^{6}$.");
advice('10^5', '100000', 'decimalForm', 'Écrire sous forme décimale $N = 10^{5}$.');
advice('10^3', '1000', 'decimalForm', 'Calculer la valeur de $A = 10^{3}$.');
advice('10^-2', '0.01', 'decimalForm', 'Calculer la valeur de $A = 10^{-2}$.');
inForm('10^3', '1000', 'Combien y a-t-il de mètres dans un kilomètre ?', true);
inForm('5*10^3', '5000', 'Sachant que 1 km = 10^3 m, convertir 5 km en mètres.', true);
// Décorations : « 5 = x » s'enlève, pas « f(x) = b »
exact('f(x)=b', 'f(x)=a', false);
exact('y+1=b', 'y+1=a', false);
exact('√2=x', '√2', true);
exact('sqrt(2)=x', '√2', true);
exact('-1/2=x', '-1/2', true);
// Unités : celles de la grandeur demandée sont acceptées, une unité d'une autre grandeur vaut un conseil
[['16 km²', "Calculer l'aire du champ."], ['16 km2', "Calculer l'aire du champ."], ['16 dam²', "Calculer l'aire du champ."], ['16 hm²', "Calculer l'aire du champ."],
 ['16 dm³', 'Calculer le volume.'], ['16 mL/h', 'Quel est le débit ?'], ['16 mmol/L', 'Quelle est la concentration ?'], ['16 mg/kg', 'Quelle est la posologie ?'],
 ['12 m', 'Un ruban coûte 3 €. Combien de mètres peut-on acheter ?'], ['12 g', 'Un sachet coûte 3 €. Combien de grammes contient-il ?'],
 ['12 t', 'Un camion coûte 3 €. Combien de tonnes transporte-t-il ?'], ['12 h', 'Le tarif est de 3 €. Combien d\'heures de location ?']]
  .forEach(([u, s]) => inForm(u, u.split(' ')[0], s, true));
advice('12 cm', '12', 'unit', 'Un sachet coûte 3 €. Combien de grammes contient-il ?');
inForm('12 m²', '12', 'Combien de mètres carrés de moquette faut-il ?', true);
inForm('12 m³', '12', 'Combien de mètres cubes de sable faut-il ?', true);
[['16 cm²', "Calculer l'aire du carré."], ['16 cm2', "Calculer l'aire du carré."], ['16 cm^2', "Calculer l'aire, en cm²."],
 ['16 cm³', 'Calculer le volume du cube.'], ['16 %', 'Quel est le taux de réduction ?'], ['16 kg', 'Quelle est sa masse ?'],
 ['16 degrés', "Quelle est la mesure de l'angle ?"], ['16°', "Quelle est la mesure de l'angle ?"], ['16 min', 'Quelle est la durée ?'],
 ['16 ml', 'Quel volume, en mL, faut-il ?'], ['16 €', 'Quel est le prix ?'], ['16 euros', 'Quel est le prix ?'], ['16 km/h', 'Quelle est sa vitesse ?'],
 ['16 mg/L', 'Quelle est la concentration, en mg/L ?'], ['16 mg/kg', 'Quelle dose ? (en mg/kg)'], ['16 ans', "Quel est l'âge de Léa ?"], ['16 m', 'Combien cela fait-il ?']]
  .forEach(([u, s]) => inForm(u, '16', s, true));
advice('11°', '11', 'unit', 'Calculer la longueur AB, en cm.');
advice('16 m²', '16', 'unit', "Calculer l'aire, en cm².");
advice('5000 mm', '5000', 'unit', 'Convertir 5 km en m.');
inForm('5000 m', '5000', 'Convertir 5 km en m.', true);
inForm('2x+m', '2x+m', 'Réduire.', true);
// Fraction : l'attendu non réduit (lecture d'une graduation) ne réclame aucune simplification
check('Attendu non réduit : pas de conseil', E.checkUnsimplifiedFraction('14/8', { type: 'exact', answer: '14/8' }), null);
check('Réponse admise telle quelle : pas de conseil', E.checkUnsimplifiedFraction('2/4', { type: 'exact', answer: '1/2', acceptedAnswers: ['2/4'] }), null);
check('Fraction réductible : conseil', !!E.checkUnsimplifiedFraction('3/6', { type: 'exact', answer: '1/2' }), true);
check('Dénominateur négatif réductible : conseil', !!E.checkUnsimplifiedFraction('3/-6', { type: 'exact', answer: '-1/2' }), true);

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
// QCM dont la bonne réponse est introuvable : ni mélangé, ni corrigé à tort sur la première option
const orphan = E.shuffleMcq({ type: 'mcq', options: ['a', 'b'], answer: 'c' });
check('QCM sans bonne réponse : pas de mélange', orphan._mcqShuffled, undefined);
check('QCM sans bonne réponse : pas d\'indice forcé', orphan.correctIndex, undefined);
check('QCM sans bonne réponse : détecté', E._mcqIsBroken(orphan), true);
check('QCM à bonne réponse textuelle : sain', E._mcqIsBroken({ type: 'mcq', options: ['a', 'b'], answer: 'b' }), false);
check('QCM à indice : sain', E._mcqIsBroken({ type: 'mcq', options: ['a', 'b'], correctIndex: 1 }), false);

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

// Un QCM sans bonne réponse identifiable n'est jamais servi : la banque statique prend le relais
{
  const generate = window.MathsGenerators.generateForChapter;
  const pick = E.pickStaticExercise;
  window.MathsGenerators.generateForChapter = () => ({ type: 'mcq', title: 't', statement: 'cassé', options: ['a', 'b'], answer: 'c', solution: 's' });
  E.pickStaticExercise = () => ({ type: 'exact', title: 't', statement: 'sain', answer: '7', solution: 's' });
  freshChapter();
  check('nextExercise écarte un QCM sans bonne réponse', E.state.currentExercise.statement, 'sain');
  window.MathsGenerators.generateForChapter = generate;
  E.pickStaticExercise = pick;
}

// Un conseil de forme (écriture attendue non respectée) n'est pas compté comme une erreur
freshChapter();
E.state.currentExercise = { type: 'exact', title: 't', statement: SCI, answer: '9.1*10^6', solution: 's' };
const histBeforeSci = E.state.sessionHistory.length;
check('submitAnswer : conseil « scientific »', E.submitAnswer('9100000').adviceKind, 'scientific');
check('submitAnswer : conseil de forme non compté', E.state.sessionHistory.length, histBeforeSci);
check('submitAnswer : écriture scientifique acceptée ensuite', E.submitAnswer('9,1 x 10^6').isCorrect, true);

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

// MathsApp est assemblé par Object.assign dans plusieurs fichiers : une méthode définie deux fois
// écraserait l'autre sans erreur, selon l'ordre de chargement.
{
  const appDir = path.join(ROOT, 'js/app');
  const files = ['js/app.js', ...fs.readdirSync(appDir).filter(f => f.endsWith('.js')).sort().map(f => `js/app/${f}`)];
  const owners = new Map();
  const duplicates = [];
  let current = '';
  const claim = (keys) => {
    for (const key of keys) {
      if (owners.has(key)) duplicates.push(`${key} (${owners.get(key)} et ${current})`);
      owners.set(key, current);
    }
  };
  const sandbox = { console, document: { addEventListener() {} }, __claim: source => claim(Object.keys(source)) };
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(`{
    const assign = Object.assign;
    Object.assign = function (target, ...sources) {
      if (target === window.MathsApp) sources.forEach(window.__claim);
      return assign(target, ...sources);
    };
  }`, sandbox);
  for (const file of files) {
    current = file;
    vm.runInContext(fs.readFileSync(path.join(ROOT, file), 'utf8'), sandbox, { filename: file });
    if (file === 'js/app.js') claim(Object.keys(sandbox.MathsApp));
  }
  check('MathsApp : aucune clé définie deux fois', duplicates.join(', '), '');
  check('MathsApp : assemblage complet observé', owners.size > 145 && files.length >= 8, true);
}

if (failures) {
  logError(`\n✖ test_core : ${failures} échec(s)`);
  process.exit(1);
}
console.log('✔ test_core : correction des réponses, mélange des QCM, stockage et modèle de progression OK');
