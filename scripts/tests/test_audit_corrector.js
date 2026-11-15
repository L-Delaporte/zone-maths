#!/usr/bin/env node
/**
 * Aller-retour générateurs → correcteur, avec le vrai submitAnswer, sur tous les chapitres et paliers :
 * la réponse attendue passe sans message ; ses écritures équivalentes aussi (virgule, « x = », unité de
 * l'énoncé, a/-b) ; une écriture qui ne respecte pas la forme demandée donne un conseil sans compter d'erreur
 * (décimal si la fraction est exigée, nombre brut si l'écriture scientifique est exigée, fraction ou puissance de 10
 * si l'écriture décimale est exigée, arrondi si la valeur est exacte). Les QCM ont une bonne réponse identifiable.
 * Usage : node scripts/tests/test_audit_corrector.js [N=4]
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..');
const N = parseInt(process.argv[2], 10) > 0 ? parseInt(process.argv[2], 10) : 4;

// --- Environnement de navigateur minimal ---
global.window = global;
const store = {};
global.localStorage = { getItem: k => (k in store ? store[k] : null), setItem: (k, v) => { store[k] = String(v); }, removeItem: k => { delete store[k]; } };
global.sessionStorage = global.localStorage;
const fakeEl = () => ({ style: {}, classList: { add() {}, remove() {}, toggle() {} }, setAttribute() {}, appendChild() {}, addEventListener() {}, getContext: () => null, querySelector: () => null, querySelectorAll: () => [] });
global.document = { createElement: fakeEl, createElementNS: fakeEl, querySelector: () => null, querySelectorAll: () => [], getElementById: () => null, addEventListener() {}, body: fakeEl(), documentElement: fakeEl() };
if (typeof global.navigator === 'undefined') global.navigator = { userAgent: 'node' };

const logError = console.error.bind(console);
console.warn = () => {};
console.error = () => {};

const dataFiles = fs.readdirSync(path.join(ROOT, 'js/data')).filter(f => /^(chapters|data_|exercises)/.test(f)).map(f => `js/data/${f}`);
const code = ['js/geometryFigures.js', 'js/scratchRenderer.js', 'js/generatorsCore.js', 'js/randomGenerators.js', 'js/generators6e.js', 'js/advancedGenerators.js',
  'js/lyceeGenerators.js', 'js/crpeGenerators.js', 'js/santeGenerators.js', 'js/vetoGenerators.js', 'js/storage.js', 'js/adaptiveEngine.js'];
for (const f of dataFiles.concat(code)) {
  const file = path.join(ROOT, f);
  if (fs.existsSync(file)) vm.runInThisContext(fs.readFileSync(file, 'utf8'), { filename: file });
}
const G = window.MathsGenerators;
const E = window.MathsAdaptiveEngine;

// --- Contrôles ---
const failures = new Map();
let draws = 0;
let submits = 0;
function fail(kind, ch, tier, detail) {
  const key = `${kind}|${ch}/T${tier}`;
  if (!failures.has(key)) failures.set(key, detail);
}
function submit(q, input) {
  submits++;
  E.state.currentExercise = Object.assign({}, q);
  E.state.answerEntry = null;
  E.state.mistakesOnCurrent = 0;
  E.state.usedHintsCount = 0;
  return E.submitAnswer(input);
}
const plainText = s => String(s || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ')
  .replace(/\\text\{\s*([^{}]*)\}\^\{?2\}?/g, '$1²').replace(/\\text\{\s*([^{}]*)\}\^\{?3\}?/g, '$1³');
const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
function isTerminating(den) {
  while (den % 2 === 0) den /= 2;
  while (den % 5 === 0) den /= 5;
  return den === 1;
}
/** Réponse attendue simple, décomposée indépendamment de l'analyseur du correcteur */
function shapeOf(answer) {
  const a = String(answer).trim();
  let m;
  if ((m = a.match(/^(-?)(\d+)\/(\d+)$/))) {
    const num = Number(m[2]) * (m[1] ? -1 : 1);
    return { kind: 'fraction', num, den: Number(m[3]), value: num / Number(m[3]) };
  }
  if ((m = a.match(/^(-?\d+(?:[.,]\d+)?)\s*[*×]\s*10\^\(?(-?\d+)\)?$/))) {
    return { kind: 'scientific', exponent: Number(m[2]), value: Number(m[1].replace(',', '.')) * 10 ** Number(m[2]) };
  }
  if (/^-?\d+(?:[.,]\d+)?$/.test(a)) return { kind: 'number', value: Number(a.replace(',', '.')) };
  return { kind: 'other' };
}
const decimalText = x => x.toLocaleString('fullwide', { useGrouping: false, maximumFractionDigits: 15 }).replace('.', ',');
const UNIT_ASKED = /\ben\s+(?:\\text\{\s*|\$)*(mm²|cm²|dm²|m²|km²|mm³|cm³|dm³|m³|mm|cm|dm|km|kg|mg|mL|cL|min|€)(?:\s|\$|\}|\*|\.|\?|\))/;

function checkExact(q, ch, tier) {
  const answer = String(q.answer);
  const statement = plainText(q.statement);
  const good = (input, kind) => {
    const r = submit(q, input);
    if (!r || !r.isCorrect) fail(kind, ch, tier, `« ${input} » refusé pour « ${answer} » : ${statement.slice(-120)}`);
  };
  const advised = (input, kind) => {
    const r = submit(q, input);
    if (!r || r.isCorrect || !r.needsSimplification) fail(kind, ch, tier, `« ${input} » sans conseil pour « ${answer} » : ${statement.slice(-120)}`);
  };
  good(answer, 'réponse attendue refusée');
  const shape = shapeOf(answer);
  if (shape.kind === 'other') return;

  if (answer.includes('.')) good(answer.replace(/\./g, ','), 'virgule décimale refusée');
  if (shape.kind === 'number') {
    good(`x = ${answer}`, '« x = » refusé');
    const unit = statement.match(UNIT_ASKED);
    if (unit) good(`${answer} ${unit[1]}`, 'unité de l\'énoncé refusée');
    if (/(?:écriture|forme) décimale/i.test(statement) && !/combien de zéros/i.test(statement)) {
      const copy = statement.match(/([\d{},]+)\s*\\times\s*10\^\{(-?\d+)\}/);
      if (copy && Math.abs(Number(copy[1].replace('{,}', '.')) * 10 ** Number(copy[2]) - shape.value) < 1e-12) advised(`${copy[1].replace('{,}', ',')}*10^${copy[2]}`, 'puissance de 10 recopiée acceptée');
      const decimals = (answer.split(/[.,]/)[1] || '').length;
      if (decimals) advised(`${Math.round(shape.value * 10 ** decimals)}/${10 ** decimals}`, 'fraction acceptée malgré l\'écriture décimale');
    }
  }
  if (shape.kind === 'fraction' && shape.den > 1 && gcd(shape.num, shape.den) === 1) {
    good(`${-shape.num}/-${shape.den}`, 'a/-b refusé');
    const freeDecimal = /décimal,? ou fraction|fractions? acceptée|fraction si|\ben fractions?\b|\(entier ou fraction\)/i.test(statement);
    const fractionRequired = !freeDecimal && /fraction irréductible|sous (?:la )?forme d['’]une fraction|forme de fraction|sous la forme \$?a\/b|\(fraction(?: \$?a\/b\$?)?\)/i.test(statement);
    if (!isTerminating(shape.den)) advised(shape.value.toFixed(10).replace('.', ','), 'valeur approchée sans conseil');
    else if (fractionRequired) advised(decimalText(shape.value), 'décimal accepté malgré la fraction exigée');
  }
  if (shape.kind === 'scientific' && shape.exponent !== 0 && /(?:écriture|notation) scientifique/i.test(statement)) {
    advised(decimalText(shape.value), 'nombre brut accepté malgré l\'écriture scientifique');
  }
}

function checkMcq(q, ch, tier) {
  const options = q.options || q.choices || [];
  const idx = q.correctIndex !== undefined ? q.correctIndex : (q.answer ? options.indexOf(q.answer) : 0);
  if (!(idx >= 0 && idx < options.length)) fail('QCM sans bonne réponse', ch, tier, plainText(q.statement).slice(0, 120));
  else if (q.answer && q.correctIndex !== undefined && options[q.correctIndex] !== q.answer) fail('QCM incohérent', ch, tier, plainText(q.statement).slice(0, 120));
}

const check = (q, ch, tier) => {
  if (!q) return;
  draws++;
  if (q.type === 'mcq') checkMcq(q, ch, tier);
  else if (q.type === 'exact') checkExact(q, ch, tier);
};

const banks = [window.MATHS_EXERCISES, window.CAPES_EXERCISES, window.PROOF_EXERCISES].filter(Boolean);
const chapters = [...new Set((window.MATHS_CHAPTERS || []).map(c => c.id).concat(...banks.map(Object.keys)))];
for (const ch of chapters) {
  store.maths_3e_progress_v1 = '{}';
  E._recentStatements = {};
  E.startChapterSession(ch);
  for (let tier = 1; tier <= 4; tier++) {
    for (let i = 0; i < N; i++) check(G.generateForChapter(ch, tier), ch, tier);
  }
  for (const bank of banks) (bank[ch] || []).forEach(q => check(q, ch, q.tier || 1));
}

console.log(`Chapitres : ${chapters.length} · exercices : ${draws} · réponses soumises : ${submits}`);
if (failures.size) {
  [...failures.entries()].slice(0, 60).forEach(([k, d]) => logError(`✖ ${k} : ${d}`));
  logError(`✖ test_audit_corrector : ${failures.size} anomalie(s)`);
  process.exit(1);
}
console.log('✔ test_audit_corrector : réponses attendues, écritures équivalentes et formes demandées OK');
