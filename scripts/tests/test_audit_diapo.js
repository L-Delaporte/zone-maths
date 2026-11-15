#!/usr/bin/env node
/**
 * Non-régression du diaporama (rituel projeté) et des titres du moteur de preuves.
 *
 * Usage (depuis n'importe où) : node scripts/tests/test_audit_diapo.js
 * Sortie : code 0 si tout est conforme, 1 sinon.
 *
 * Vérifications :
 *  - formatAnswerForDisplay : une formule nue passe en mode math, une phrase ou une valeur avec unité reste du texte ;
 *  - réponses écrites sous leur forme de saisie (10^-3, 7.5*10^-2, pi/4, sqrt(3)) : exposant entier, virgule, symboles ;
 *  - toutes les réponses statiques du site : ni LaTeX brut ni « $ » hors formule, pas d'erreur KaTeX, pas de mot en mode math ;
 *  - raccourcis du déroulé : flèches et Page suivante / précédente (télécommande), inactifs hors déroulé ;
 *  - Échap pendant le déroulé : quitte d'abord le plein écran, puis demande confirmation ;
 *  - aucun titre de preuve avec du LaTeX (ils s'affichent dans un <select>, qui ne le rend pas).
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..');
const read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');

const failures = [];
const expect = (cond, label) => { if (!cond) failures.push(label); };

const store = {};
const sandbox = {
  console: { log() {}, warn() {}, error() {}, info() {} },
  localStorage: { getItem: k => (k in store ? store[k] : null), setItem(k, v) { store[k] = String(v); }, removeItem(k) { delete store[k]; } },
  document: {
    addEventListener() {}, getElementById: () => null, querySelector: () => null, querySelectorAll: () => [],
    createElement: () => ({ style: {}, appendChild() {}, setAttribute() {}, classList: { add() {}, remove() {} } }),
    body: { appendChild() {} }, documentElement: { style: {} }
  },
  navigator: { userAgent: 'node' }, setTimeout, clearTimeout, setInterval, clearInterval
};
sandbox.window = sandbox;
sandbox.self = sandbox;
vm.createContext(sandbox);
const run = f => vm.runInContext(read(f), sandbox, { filename: f });

const html = read('index.html');
const dataFiles = new Set([...html.matchAll(/<script[^>]+src="(js\/data\/[^"?]+)/g)].map(m => m[1]));
const bundles = JSON.parse(html.match(/<script[^>]*id="level-bundles"[^>]*>([\s\S]*?)<\/script>/)[1]);
Object.values(bundles).flat().map(u => u.split('?')[0]).filter(f => f.startsWith('js/data/')).forEach(f => dataFiles.add(f));
dataFiles.forEach(run);
['js/mathRenderer.js', 'js/diaporamaEngine.js', 'js/proofEngine.js'].forEach(run);

const katexCtx = {};
vm.runInNewContext(read('vendor/katex/katex.min.js'), katexCtx);
const { katex } = katexCtx;
const D = sandbox.MathsDiaporama;

// --- Formules nues, phrases et unités -------------------------------------------------------------
const bare = ['\\frac{3}{4}', 'y=2/3x+1', 'x^2', 'AC² = AB² + BC²', '\\sqrt{2}', 'x > 3', '2 \\times x', '\\begin{pmatrix}1\\\\2\\end{pmatrix}'];
const text = ['2,5 mL/min', '6 mg/L', '15 L/h', 'Le maximum vaut 3 / 2', 'oui', '12', '$x = 2$', 'Pour $x = 2$, la valeur est \\(3\\)', '=2*A3 + 5'];
bare.forEach(s => expect(D.isBareFormula(s), `Formule non reconnue : ${s}`));
text.forEach(s => expect(!D.isBareFormula(s), `Texte lu comme une formule : ${s}`));

// --- Forme de saisie -> écriture mathématique --------------------------------------------------------
const shownAs = {
  '0.375': '$0{,}375$',
  '-10.91': '$-10{,}91$',
  '10^-3': '$10^{-3}$',
  '10^16': '$10^{16}$',
  '7.5*10^-2': '$7{,}5\\times 10^{-2}$',
  'pi/4': '$\\pi /4$',
  'pi^2/4-2': '$\\pi ^{2}/4-2$',
  'sqrt(3)': '$\\sqrt{3}$',
  '2sqrt(3)/3': '$2\\sqrt{3}/3$',
  '\\mathbb{R}^*': '$\\mathbb{R}^*$',
  'e_1^*+2': '$e_1^*+2$'
};
Object.entries(shownAs).forEach(([saisie, attendu]) => {
  const obtenu = D.formatAnswerForDisplay(saisie).replace(/<\/?[a-zA-Z][^>]*>/g, '').trim();
  expect(obtenu === attendu, `Affichage de « ${saisie} » : attendu ${attendu}, obtenu ${obtenu}`);
});
const sentence = D.formatAnswerForDisplay('La valeur vaut sqrt(2)');
expect(sentence.includes('sqrt(2)') && !sentence.includes('$'), 'Une phrase ne doit pas être réécrite');

// --- Réponses statiques ----------------------------------------------------------------------------
// Découpe comme l'auto-rendu KaTeX, dans le même ordre de délimiteurs
function splitMath(source) {
  let parts = [{ math: false, v: source }];
  for (const [open, close] of [['$$', '$$'], ['$', '$'], ['\\[', '\\]'], ['\\(', '\\)']]) {
    const next = [];
    for (const p of parts) {
      if (p.math) { next.push(p); continue; }
      const s = p.v;
      let from = 0, buf = '';
      for (;;) {
        const a = s.indexOf(open, from);
        if (a < 0) { buf += s.slice(from); break; }
        let b = a + open.length, end = -1, depth = 0;
        while (b < s.length) {
          if (depth <= 0 && s.startsWith(close, b)) { end = b; break; }
          if (s[b] === '\\') b++;
          else if (s[b] === '{') depth++;
          else if (s[b] === '}') depth--;
          b++;
        }
        if (end < 0) { buf += s.slice(from); break; }
        buf += s.slice(from, a);
        if (buf) next.push({ math: false, v: buf });
        buf = '';
        next.push({ math: true, v: s.slice(a + open.length, end) });
        from = end + close.length;
      }
      if (buf) next.push({ math: false, v: buf });
    }
    parts = next;
  }
  return parts;
}

const decode = s => s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
function answerIssues(raw) {
  const issues = [];
  const shown = decode(D.formatAnswerForDisplay(raw).replace(/<\/?[a-zA-Z][^>]*>/g, ' '));
  for (const p of splitMath(shown)) {
    if (!p.math) {
      if (/\\[a-zA-Z]/.test(p.v)) issues.push('LaTeX brut');
      if (p.v.includes('$')) issues.push('« $ » hors formule');
      continue;
    }
    try { katex.renderToString(p.v, { throwOnError: true }); } catch (e) { issues.push('KaTeX : ' + e.message.slice(0, 60)); }
    const words = p.v.replace(/\\(?:text\w*|math\w+|operatorname|begin|end)\s*\{[^{}]*\}/g, ' ').replace(/\\[a-zA-Z]+/g, ' ');
    if (/[a-zA-ZÀ-ÿ]{4,}/.test(words)) issues.push('mot en mode math');
  }
  return issues;
}

const answers = new Set();
(function walk(o) {
  if (Array.isArray(o)) { o.forEach(walk); return; }
  if (!o || typeof o !== 'object') return;
  if ('statement' in o) {
    const a = o.options ? o.options[o.correctIndex !== undefined ? o.correctIndex : 0] : o.answer;
    if (a !== undefined && a !== null && a !== '') answers.add(String(a));
  } else Object.values(o).forEach(walk);
})(sandbox.MATHS_EXERCISES || {});
expect(answers.size > 500, `Trop peu de réponses inspectées (${answers.size}) : le chargement des données a échoué`);
answers.forEach(a => {
  const issues = answerIssues(a);
  if (issues.length) failures.push(`Réponse mal affichée (${[...new Set(issues)].join(', ')}) : ${a}`);
});

// --- Raccourcis du déroulé ---------------------------------------------------------------------------
const calls = [];
['next', 'prev', 'togglePause', 'toggleFullscreen', 'closeModal'].forEach(m => { D[m] = () => calls.push(m); });
D.setFullscreen = on => calls.push('setFullscreen:' + on);
const press = (key, extra = {}) => {
  calls.length = 0;
  const e = { key, target: { closest: () => null }, prevented: false, stopped: false, preventDefault() { this.prevented = true; }, stopPropagation() { this.stopped = true; }, ...extra };
  D.handleRunKey(e);
  return e;
};
const same = (expected, label) => expect(JSON.stringify(calls) === JSON.stringify(expected), `${label} : attendu ${expected}, obtenu ${calls}`);

D.state.isRunning = true;
for (const [key, action] of [['ArrowRight', 'next'], ['PageDown', 'next'], [' ', 'next'], ['Enter', 'next'], ['ArrowLeft', 'prev'], ['PageUp', 'prev'], ['p', 'togglePause'], ['F', 'toggleFullscreen']]) {
  const e = press(key);
  same([action], `Touche « ${key} »`);
  expect(e.prevented && e.stopped, `Touche « ${key} » : le défilement ou un autre raccourci resterait actif`);
}
press('ArrowRight', { repeat: true });
same([], 'Touche maintenue');
press(' ', { target: { closest: () => ({}) } });
same([], 'Espace sur un bouton ciblé');
press('ArrowRight', { ctrlKey: true });
same([], 'Ctrl + flèche');

let inFullscreen = true, confirmAnswer = false;
sandbox.document.getElementById = () => ({ classList: { contains: () => inFullscreen } });
sandbox.confirm = () => confirmAnswer;
press('Escape');
same(['setFullscreen:false'], 'Échap en plein écran');
inFullscreen = false;
const refused = press('Escape');
same([], 'Échap, confirmation refusée');
expect(refused.stopped, 'Échap atteindrait la fermeture commune des modales');
confirmAnswer = true;
press('Escape');
same(['closeModal'], 'Échap, confirmation acceptée');

D.state.isRunning = false;
const idle = press('ArrowRight');
same([], 'Hors déroulé');
expect(!idle.prevented, 'Hors déroulé, les flèches doivent garder leur effet');
expect(!press('Escape').stopped, 'Hors déroulé, Échap doit garder la fermeture commune');

// --- Titres des preuves ------------------------------------------------------------------------------
const theorems = sandbox.ProofEngine.getTheorems();
expect(theorems.length > 0, 'Aucun théorème chargé');
theorems.forEach(t => expect(!/[$\\]/.test(t.title), `Titre de preuve avec du LaTeX : ${t.title}`));

if (failures.length) {
  console.error(`✖ ${failures.length} échec(s) :`);
  failures.slice(0, 40).forEach(f => console.error('  - ' + f));
  process.exit(1);
}
console.log(`✔ Diaporama et preuves : ${answers.size} réponses, ${theorems.length} titres, raccourcis conformes`);
