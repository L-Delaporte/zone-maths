#!/usr/bin/env node
/**
 * Séries communes (« Partager à ma classe », &seed=) et question de remise en ordre (type order).
 *
 * Usage (depuis n'importe où) : node scripts/tests/test_audit_seed.js
 * Sortie : code 0 si tout est conforme, 1 sinon.
 *
 * Vérifications :
 *  - deux élèves au passé différent (historique, progression, aléatoire déjà consommé) reçoivent,
 *    à graine, chapitre, palier et rang égaux, exactement les mêmes exercices, sur tous les chapitres ;
 *  - Math.random et l'état du moteur sont restaurés après chaque tirage, même si le tirage échoue ;
 *  - sans graine, ni Math.random ni le tirage ne sont touchés ; le palier enregistré ne bouge pas ;
 *  - un QCM dont la réponse n'est pas identifiable ne désigne aucune option ;
 *  - type order : données cohérentes, réponse validée par le moteur, abandon jusqu'à la correction.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { ROOT, loadSiteData } = require('./load_site');

const read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');
const failures = [];
const expect = (cond, label) => { if (!cond) failures.push(label); };

const page = read('index.html');
const bundles = JSON.parse(page.match(/<script[^>]*id="level-bundles"[^>]*>([\s\S]*?)<\/script>/)[1]);
const generators = [...new Set(Object.values(bundles).flat().map(u => u.split('?')[0]).filter(f => !f.startsWith('js/data/')))];
const SCRIPTS = ['js/storage.js', 'js/geometryFigures.js', 'js/scratchRenderer.js', 'js/adaptiveEngine.js', 'js/generatorsCore.js', ...generators, 'js/app/training.js'];

/** Un « navigateur » complet et indépendant : un élève. */
function newStudent() {
  const { win } = loadSiteData();
  const store = {};
  win.localStorage = {
    getItem: k => (k in store ? store[k] : null),
    setItem: (k, v) => { store[k] = String(v); },
    removeItem: k => { delete store[k]; }
  };
  win.console = { log() {}, warn() {}, error() {}, info() {} };
  win.location = { search: '' };
  win.URLSearchParams = URLSearchParams;
  win.MathsApp = {};
  for (const file of SCRIPTS) vm.runInContext(read(file), win, { filename: file });
  win.MathsAdaptiveEngine.isTierUnlocked = () => true;
  win.MathsApp.installSharedSeries();
  return win;
}

const link = (win, chapterId, seed) => { win.location.search = seed ? `?chapitre=${encodeURIComponent(chapterId)}&seed=${seed}` : ''; };
const random = win => vm.runInContext('Math.random', win);
const FIELDS = ['statement', 'type', 'answer', 'answerType', 'acceptedAnswers', 'options', 'correctIndex', 'explanations', 'steps', 'solution', 'hint1', 'hint2', 'tier', 'title', 'skill', 'sharedRank'];
const snapshot = exo => JSON.stringify(FIELDS.map(f => (exo ? exo[f] : null)));
const QUESTIONS = 5;

function series(win, chapterId, tier, seed) {
  link(win, chapterId, seed);
  const engine = win.MathsAdaptiveEngine;
  const out = [snapshot(engine.startChapterSession(chapterId, tier))];
  for (let i = 1; i < QUESTIONS; i++) out.push(snapshot(engine.nextExercise()));
  return out;
}

// Passé différent de l'élève B : exercices déjà tirés (historiques), progression, aléatoire consommé
function disturb(win, chapterId, tier) {
  link(win, chapterId, null);
  const engine = win.MathsAdaptiveEngine;
  engine.startChapterSession(chapterId, tier);
  for (let i = 0; i < 6; i++) engine.nextExercise();
  const bank = (win.MATHS_EXERCISES && win.MATHS_EXERCISES[chapterId]) || (win.CAPES_EXERCISES && win.CAPES_EXERCISES[chapterId]) || (win.PROOF_EXERCISES && win.PROOF_EXERCISES[chapterId]) || [];
  win.MathsStorage.updateChapterProgress(chapterId, p => {
    p.mastery = 77;
    p.completed = bank.filter((e, i) => i % 2 === 0).map(e => e.id); // une moitié : la banque restante change
    return p;
  });
}

// --- Même lien, même série, quel que soit l'élève ---
const alice = newStudent();
const bob = newStudent();
const chapters = alice.MATHS_CHAPTERS.map(c => c.id);
expect(chapters.length > 100, `liste de chapitres anormalement courte (${chapters.length})`);
let compared = 0;
let repeats = 0;
let drawn = 0;
for (const chapterId of chapters) {
  for (const tier of [1, 2, 3, 4]) {
    disturb(bob, chapterId, tier);
    const a = series(alice, chapterId, tier, 'abc123');
    const b = series(bob, chapterId, tier, 'abc123');
    a.forEach((s, i) => {
      compared++;
      if (s !== b[i]) failures.push(`${chapterId} palier ${tier} question ${i + 1} : les deux élèves n'ont pas le même exercice`);
    });
    const statements = a.map(s => JSON.parse(s)[0]).filter(Boolean);
    drawn += statements.length;
    repeats += statements.length - new Set(statements).size;
    a.forEach((s, i) => expect(JSON.parse(s)[15] === i + 1, `${chapterId} palier ${tier} : rang affiché faux à la question ${i + 1}`));
  }
}
expect(compared === chapters.length * 4 * QUESTIONS, 'comparaison incomplète');
// Le tirage courant admet quelques redites sur les banques d'un seul exercice par palier, jamais une série qui bégaie
expect(repeats / drawn < 0.05, `trop de redites dans les séries : ${repeats} sur ${drawn}`);

// Le rejeu sur le même navigateur redonne la série ; une autre graine en donne une autre
const replay = chapters.flatMap(c => series(alice, c, 1, 'abc123').map(s => `${c}:${s}`));
const again = chapters.flatMap(c => series(alice, c, 1, 'abc123').map(s => `${c}:${s}`));
expect(replay.join() === again.join(), 'rouvrir le lien ne redonne pas la même série');
const other = chapters.flatMap(c => series(alice, c, 1, 'zzz999').map(s => `${c}:${s}`));
const same = replay.filter((s, i) => s === other[i]).length;
expect(same / replay.length < 0.6, `une autre graine redonne presque la même série (${same} sur ${replay.length})`);

// --- Restauration, même en cas d'échec ---
const gen = alice.MathsGenerators;
const engine = alice.MathsAdaptiveEngine;
const before = random(alice);
let thrown = false;
try { gen.withSeed('x', () => { throw new Error('boum'); }); } catch (e) { thrown = true; }
expect(thrown && random(alice) === before, 'withSeed ne restaure pas Math.random après une exception');
expect(gen.withSeed('x', () => random(alice)) !== before && random(alice) === before, 'withSeed ne remplace pas Math.random le temps du tirage');
const firstDraws = () => { const r = gen.seededRandom('x'); return [r(), r(), r()].join(); };
expect(firstDraws() === firstDraws(), 'seededRandom non déterministe');
expect(gen.seededRandom('a')() !== gen.seededRandom('b')(), 'seededRandom ignore le texte');
expect(Array.from({ length: 1000 }, gen.seededRandom('c')).every(v => v >= 0 && v < 1), 'seededRandom hors de [0 ; 1[');

const chapterId = chapters[0];
link(alice, chapterId, 'abc123');
engine.startChapterSession(chapterId, 1);
const personal = engine.getRecentStatements(chapterId);
const pick = engine.pickStaticExercise;
const generate = gen.generateForChapter;
gen.generateForChapter = () => { throw new Error('boum'); };
thrown = false;
try { engine.nextExercise(); } catch (e) { thrown = true; }
gen.generateForChapter = generate;
expect(thrown, 'le générateur en panne devait remonter son erreur');
expect(random(alice) === before, 'Math.random non restauré après un tirage en échec');
expect(gen._sharedHistory === null, 'historique de série laissé en place après un échec');
expect(engine.pickStaticExercise === pick, 'pickStaticExercise non restauré après un échec');
expect(engine.getRecentStatements(chapterId) === personal, 'historique personnel non restauré après un échec');

// L'historique de l'élève s'enrichit de la série (anti-répétition hors série) ; sa progression ne bouge pas
const fresh = series(alice, 'N1', 3, 'hist01');
const last = JSON.parse(fresh[QUESTIONS - 1])[0];
expect(engine.getRecentStatements('N1').includes(last), 'énoncé de la série absent de l’historique récent de l’élève');
expect(gen._personalHistory('N1').includes(gen._statementKey(last)), 'énoncé de la série absent de l’historique persistant');
expect(alice.MathsStorage.getChapterProgress('N1').currentTier === 1, 'tirer une série a changé le palier enregistré');

// --- Sans graine : rien ne change ---
link(alice, 'N1', null);
let touched = false;
const realGenerate = gen.generateForChapter;
gen.generateForChapter = function (...args) {
  if (random(alice) !== before || gen._sharedHistory) touched = true;
  return realGenerate.apply(gen, args);
};
engine.startChapterSession('N1', 1);
for (let i = 0; i < 8; i++) engine.nextExercise();
gen.generateForChapter = realGenerate;
expect(!touched, 'sans graine, le tirage a été modifié');
expect(!engine.state.currentExercise.sharedRank, 'sans graine, un rang de série est affiché');
const noSeed = [...Array(6)].map(() => engine.nextExercise().statement);
expect(new Set(noSeed).size > 1, 'sans graine, les tirages ne varient plus');
['?chapitre=N1&seed=a%20b', '?chapitre=N1&seed=', '?seed=abc', '?chapitre=N2&seed=abc'].forEach(search => {
  alice.location.search = search;
  expect(alice.MathsApp.sharedSeedFor('N1') === null, `graine acceptée à tort : ${search}`);
});
alice.location.search = '?chapitre=n1&palier=2&seed=abc123';
expect(alice.MathsApp.sharedSeedFor('N1') === 'abc123', 'graine valide ignorée');
const appSource = read('js/app.js');
expect(/has\('seed'\)\) this\.installSharedSeries\(\)/.test(appSource), 'le moteur doit rester intact sans graine dans l’URL');

// --- QCM sans réponse identifiable ---
const training = read('js/app/training.js');
expect(!/exercise\.correctIndex = 0/.test(training), 'un QCM cassé désigne de nouveau la première option');
const broken = { type: 'mcq', options: ['a', 'b'], answer: 'c' };
expect(['a', 'b', 0, 1].every(u => engine.validateAnswer(u, broken) === false), 'un QCM sans bonne réponse valide une option');

// --- Remise en ordre ---
const banks = [alice.MATHS_EXERCISES, alice.CAPES_EXERCISES, alice.PROOF_EXERCISES].filter(Boolean);
const orderExercises = banks.flatMap(bank => Object.values(bank).flat()).filter(e => e.type === 'order');
const checkOrder = ex => {
  const expected = ex.options[ex.correctIndex].match(/\d+/g).map(Number);
  expect(Array.isArray(ex.orderSteps) && ex.orderSteps.length === expected.length, `${ex.id} : orderSteps incohérent`);
  expect(expected.slice().sort((a, b) => a - b).every((n, i) => n === i + 1), `${ex.id} : ordre attendu qui n'est pas une permutation`);
  expect(expected.some((n, i) => n !== i + 1), `${ex.id} : l'ordre de départ est déjà la bonne réponse`);
  expect(ex.answer === ex.options[ex.correctIndex], `${ex.id} : answer et options[correctIndex] divergent`);
};
orderExercises.forEach(checkOrder);

const proofs = alice.PROOF_EXERCISES['L1-PRF'];
const source = proofs.find(e => e.id === 'L1-PRF-6');
expect(!!source, 'L1-PRF-6 introuvable');
// Conversion à blanc tant que la banque n'est pas convertie
const order = source.type === 'order' ? JSON.parse(JSON.stringify(source)) : Object.assign(JSON.parse(JSON.stringify(source)), {
  type: 'order',
  orderSteps: source.statement.split('\n').filter(l => /^\d\. /.test(l)).map(l => l.replace(/^\d\. /, ''))
});
checkOrder(order);
expect(engine.validateAnswer('Étape 2 → Étape 3 → Étape 1 → Étape 4', order) === true, 'bon ordre refusé');
expect(engine.validateAnswer('Étape 1 → Étape 2 → Étape 3 → Étape 4', order) === false, 'mauvais ordre accepté');
expect(engine.validateAnswer(null, order) === false, 'absence de réponse acceptée');
expect(engine._mcqIsBroken(order) === false, 'exercice order écarté comme QCM cassé');
if (alice.MathsAdvancedGenerators) {
  const mutated = alice.MathsAdvancedGenerators.mutateExercise(order, 4);
  expect(mutated.type === 'order' && mutated.orderSteps.length === 4 && mutated.correctIndex === order.correctIndex, 'la mutation altère un exercice order');
}

const app = alice.MathsApp;
let applied = null;
app.clearAnswerError = () => {};
app.applyAnswerResult = (result, exo) => { applied = { result, exo }; };
app.orderState = { order: [2, 3, 1, 4], locked: false };
engine.state.chapterId = 'L1-PRF';
engine.state.currentExercise = order;
engine.state.mistakesOnCurrent = 0;
app.submitCurrentAnswer();
expect(applied && applied.result.isCorrect === true, 'réponse order exacte non reconnue par submitCurrentAnswer');

engine.state.currentExercise = JSON.parse(JSON.stringify(order));
engine.state.mistakesOnCurrent = 0;
applied = null;
app.giveUpCurrentExercise();
expect(applied && applied.result.isCorrect === false && applied.result.stage === 'solution', '« Je ne sais pas » ne mène pas à la correction d’un exercice order');

if (failures.length) {
  console.error(`✖ ${failures.length} échec(s) :\n  - ${failures.slice(0, 40).join('\n  - ')}`);
  process.exit(1);
}
console.log(`✔ Séries communes : ${compared} exercices identiques sur ${chapters.length} chapitres ; restauration, absence de graine et type order conformes.`);
