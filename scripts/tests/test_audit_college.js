#!/usr/bin/env node
/**
 * Contenus du collège après audit : virgule décimale en mode math, indices complets, réponses recalculées,
 * formes acceptées par le correcteur, aucune étiquette de provenance invérifiable.
 * Usage : node scripts/tests/test_audit_college.js
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..');
const FILES = ['data_6eme', 'data_5eme', 'data_4eme', 'exercises', 'courses', 'worksheets', 'brevet_problems',
  'ds_bank_3eme', 'ds_bank_4eme', 'ds_bank_5eme', 'ds_bank_6eme', 'flashcards_6eme'].map(f => `js/data/${f}.js`);

const data = {};
data.window = data;
vm.createContext(data);
for (const f of FILES) vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), data, { filename: f });

const store = {};
global.window = {};
global.localStorage = {
  getItem: k => (k in store ? store[k] : null),
  setItem: (k, v) => { store[k] = String(v); },
  removeItem: k => { delete store[k]; }
};
require(path.join(ROOT, 'js/storage.js'));
require(path.join(ROOT, 'js/adaptiveEngine.js'));
const E = window.MathsAdaptiveEngine;

let failures = 0;
function fail(msg) {
  failures++;
  console.error(`✖ ${msg}`);
}

const list = v => (Array.isArray(v) ? v : Object.values(v).flat());
const exercises = list(data.MATHS_EXERCISES);
const byId = Object.fromEntries(exercises.map(q => [q.id, q]));

// --- Virgule décimale : 7{,}5 en mode math, jamais 7,5 (KaTeX y ajouterait une espace)
function mathSegments(text) {
  const segments = [];
  const re = /\$\$([\s\S]*?)\$\$|\$([^$]*)\$|\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]/g;
  for (const m of text.replace(/<svg[\s\S]*?<\/svg>/g, ' ').replace(/\\\$/g, ' ').matchAll(re)) {
    segments.push(m[1] ?? m[2] ?? m[3] ?? m[4]);
  }
  return segments;
}
function walk(value, visit) {
  if (typeof value === 'string') visit(value);
  else if (value && typeof value === 'object') Object.values(value).forEach(v => walk(v, visit));
}
let scanned = 0;
for (const key of Object.keys(data).filter(k => k.startsWith('MATHS_'))) {
  walk(data[key], (text) => {
    for (const seg of mathSegments(text)) {
      scanned++;
      const bare = seg.replace(/\\(?:text|mathrm|mbox)\s*\{[^{}]*\}/g, ' ').replace(/[_^]\{[^{}]*\}/g, ' ');
      if (/\d,\d/.test(bare)) fail(`${key} : virgule décimale sans accolades dans « ${seg.slice(0, 80)} »`);
    }
  });
}

// --- Le champ placeholder n'est lu par aucun code : il ne doit pas revenir, ses exemples donnaient des réponses
const leaked = exercises.filter(q => 'placeholder' in q).map(q => q.id);
if (leaked.length) fail(`placeholder présent : ${leaked.slice(0, 10).join(', ')}`);

// --- Deux indices distincts sur tous les exercices rédigés du collège
for (const q of exercises) {
  if (!q.hint1 || !q.hint2) fail(`${q.id} : hint1 ou hint2 absent`);
  else if (q.hint1 === q.hint2) fail(`${q.id} : hint1 et hint2 identiques`);
}

// --- Réponses recalculées et formes acceptées : [saisie, correcte ?]
const ANSWERS = {
  'G0-5': [['4√3', true], ['4sqrt(3)', true], ['√48', false], ['6,93', false]],
  'Org2-4': [['34/3', true], ['11,33', true], ['11.33', true], ['11,3', false]],
  '5D2-4': [['50', true], ['50%', true], ['50 %', true], ['25', false]],
  '4D2-1': [['0,65', true], ['65%', true], ['65 %', true], ['13/20', true], ['0,35', false], ['65', false], ['0,65%', false], ['0,65 %', false]],
  '4D2-2': [['0,9', true], ['0,9 %', false]],
  '5D2-2': [['0,5', true], ['0,5 %', false]],
  'Org4-1': [['0,5', true], ['50%', true], ['1/2', true], ['0,6', false], ['50', false], ['0,5%', false], ['0,5 %', false]],
  '5N5-4': [['6', true], ['5', false]],
  '5G3-4': [['60', true], ['75', false]],
  'G4-4': [['3335', true], ['3 335', true], ['3336', false]],
  '4G1-4': [['6', true], ['8', false]],
  '4G1-6': [['13', true], ['10', false]]
};
for (const [id, cases] of Object.entries(ANSWERS)) {
  if (!byId[id]) { fail(`${id} introuvable`); continue; }
  for (const [input, expected] of cases) {
    const got = E.validateAnswer(input, byId[id]);
    if (got !== expected) fail(`${id} : « ${input} » ${got ? 'accepté' : 'refusé'}, attendu ${expected ? 'accepté' : 'refusé'}`);
  }
}

// --- Toute réponse saisie doit être acceptée par le correcteur, à la virgule comme au point
for (const q of exercises.filter(x => x.type === 'exact')) {
  if (/^\d+\.\d+$/.test(String(q.answer))) fail(`${q.id} : réponse écrite avec un point (${q.answer})`);
  const forms = [q.answer, ...(q.acceptedAnswers || [])].map(String);
  if (/^\d+,\d+$/.test(String(q.answer))) forms.push(String(q.answer).replace(',', '.'));
  for (const form of forms) if (!E.validateAnswer(form, q)) fail(`${q.id} : le correcteur refuse sa propre réponse « ${form} »`);
}

// --- Provenance : la source exacte des exercices n'est pas connue
const sourceTags = /\(DNB\b|sujet officiel|annales?\b/i;
for (const key of ['MATHS_EXERCISES', 'MATHS_WORKSHEETS', 'MATHS_BREVET_PROBLEMS']) {
  if (!data[key]) continue;
  walk(data[key], (text) => {
    if (sourceTags.test(text.replace(/\(type DNB\)/g, ''))) fail(`${key} : étiquette de provenance dans « ${text.slice(0, 80)} »`);
  });
}

if (failures) {
  console.error(`\n${failures} anomalie(s) dans les contenus du collège.`);
  process.exit(1);
}
console.log(`OK : contenus du collège conformes (${exercises.length} exercices, ${scanned} segments mathématiques).`);
