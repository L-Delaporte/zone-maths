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

if (failures) {
  logError(`\n✖ test_core : ${failures} échec(s)`);
  process.exit(1);
}
console.log('✔ test_core : correction des réponses, mélange des QCM et stockage OK');
