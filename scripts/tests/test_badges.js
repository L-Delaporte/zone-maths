#!/usr/bin/env node
/**
 * Tests des badges à niveaux (js/badges.js) : compteurs, montées de niveau, niveaux jamais en baisse.
 * Usage : node scripts/tests/test_badges.js
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
console.warn = () => {};
require(path.join(ROOT, 'js/storage.js'));
require(path.join(ROOT, 'js/badges.js'));
const S = window.MathsStorage, B = window.MathsBadges;

let failures = 0;
const check = (label, actual, expected) => {
  if (actual !== expected) { failures++; console.error(`✖ ${label} : obtenu ${JSON.stringify(actual)}, attendu ${JSON.stringify(expected)}`); }
};
const level = id => (S.load().badgeLevels || {})[id] || 0;

window.MATHS_CHAPTERS = [
  { id: 'A', level: '5eme', domain: 'nombres' },
  { id: 'B', level: '5eme', domain: 'nombres' },
  { id: 'C', level: '5eme', domain: 'geometrie' }
];

// Premier passage silencieux (progression existante)
check('Premier passage : aucune célébration', B.evaluate().length, 0);
check('Premier passage : niveaux enregistrés', typeof S.load().badgeLevels, 'object');

// Sans filet : 25 bonnes réponses du premier coup sans indice → Bronze
for (let i = 0; i < 25; i++) B.recordAnswer({ chapterId: 'A', domain: 'nombres', isCorrect: true, firstSubmission: true, hintsUsed: 0, mistakesBefore: 0 });
const ups = B.evaluate();
check('Sans filet Bronze après 25 réponses', ups.some(u => u.def.id === 'sans_filet' && u.level === 1), true);
check('Série parfaite Argent (15) atteinte avec 25 d\'affilée', level('serie_parfaite'), 2);
check('Montée signalée une seule fois', B.evaluate().filter(u => u.def.id === 'sans_filet').length, 0);

// Indice : pas compté dans « sans filet », casse la série
B.recordAnswer({ chapterId: 'A', isCorrect: true, firstSubmission: true, hintsUsed: 1, mistakesBefore: 0 });
check('Indice : compteur sans filet inchangé', S.load().stats.firstTryNoHint, 25);
check('Indice : série remise à zéro', S.load().stats.perfectRun, 0);
check('Meilleure série conservée', S.load().stats.perfectRunBest, 25);

// Ténacité : réussite après 2 erreurs
B.recordAnswer({ chapterId: 'A', isCorrect: true, firstSubmission: false, hintsUsed: 0, mistakesBefore: 2 });
check('Ténacité comptée', S.load().stats.tenacity, 1);

// Rebond secret : 3 échecs au premier coup puis réussite
for (let i = 0; i < 3; i++) B.recordAnswer({ chapterId: 'A', isCorrect: false, firstSubmission: true, hintsUsed: 0 });
B.recordAnswer({ chapterId: 'A', isCorrect: true, firstSubmission: true, hintsUsed: 0 });
B.evaluate();
check('Secret Rebond dévoilé', level('secret_rebond'), 1);

// Palier impeccable : 8 pastilles vertes
B.recordAnswer({ chapterId: 'A', isCorrect: true, firstSubmission: true, hintsUsed: 0, newlyValidated: [{ tier: 1, marks: Array(8).fill('g') }] });
B.recordAnswer({ chapterId: 'A', isCorrect: true, firstSubmission: true, hintsUsed: 0, newlyValidated: [{ tier: 2, marks: ['g', 'g', 'g', 'g', 'g', 'g', 'h', 'g'] }] });
check('Palier impeccable : seul le palier tout vert compte', S.load().stats.impeccable, 1);

// Thème = chapitre le moins avancé
const d = S.load();
d.chapters = { A: { validatedTiers: [1, 2], mastery: 50 }, B: { validatedTiers: [1], mastery: 30 }, C: { validatedTiers: [1, 2, 3], mastery: 80 } };
S.save(d);
B.evaluate();
check('Thème nombres : chapitre le moins avancé (palier 1)', level('theme_5eme_nombres'), 1);
check('Thème géométrie : palier 3', level('theme_5eme_geometrie'), 3);
check('Diplômé de 5e : Bronze', level('level_5eme'), 1);

// Un niveau atteint ne baisse jamais
const d2 = S.load(); d2.chapters.C = { validatedTiers: [], mastery: 0 }; S.save(d2);
B.evaluate();
check('Niveau jamais en baisse', level('theme_5eme_geometrie'), 3);

// Rituels et papier
B.recordEvent('rituel'); B.recordEvent('paper');
const ups2 = B.evaluate();
check('Rituel : Bronze au premier', ups2.some(u => u.def.id === 'rituels'), true);
check('Papier : Bronze au premier', level('papier'), 1);

// Classes d'animation
const sec = B.getShowcase(S.load()).find(x => x.id === 'secret_rebond');
check('Secret : classe Diamant', B.tierClass(sec, 1), 4);
const sf = B.getShowcase(S.load()).find(x => x.id === 'sans_filet');
check('Libellé Légende au niveau 5', B.tierLabel(sf, 5), 'Légende');

// Les badges secrets cachés ne révèlent pas leur condition
B.getShowcase(S.load()).filter(x => x.secret).forEach(x => check(`Secret ${x.id} : devinette distincte de la condition`, !!x.riddle && x.riddle !== x.desc(), true));

if (failures) { console.error(`\n✖ test_badges : ${failures} échec(s)`); process.exit(1); }
console.log('✔ test_badges : compteurs, montées de niveau, thèmes et secrets OK');
