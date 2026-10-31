#!/usr/bin/env node
/**
 * Test automatique des générateurs procéduraux du collège (js/randomGenerators.js, + js/generators6e.js s'il existe).
 *
 * Usage (depuis n'importe où) :
 *   node scripts/tests/test_college_generators.js [N=200] [filtre] [--verbose]
 *     N       : nombre de tirages par générateur et par palier (défaut 200)
 *     filtre  : sous-chaîne du nom du générateur (ex. "4N" ou "generateN3")
 *
 * Code de sortie 1 si au moins une erreur est détectée :
 *  exception, valeur undefined/NaN/null/[object Object], KaTeX invalide, « \n » littéral, LaTeX hors $…$,
 *  QCM sans bonne réponse ou avec options en double / numériquement égales, notation scientifique non normalisée,
 *  « 1x », « + - », « - - », « x + 0 », « 0x », « x^1 », point décimal (convention française : virgule),
 *  note > 20, chaîne d'égalités numériques fausse, fraction non irréductible quand l'énoncé l'exige.
 * La variété (nombre d'énoncés distincts par palier) est affichée avec un avertissement sous le seuil.
 * Vérification indépendante : les questions portant `_v` sont recalculées par scripts/tests/college_verifiers.js.
 * Cohérence des indices (scripts/tests/hint_checks.js) pour la 5e à la 3e : hint1 et hint2 présents et distincts, sans la
 * réponse, sans nombre ni point étranger à l'énoncé ; indices partagés entre familles signalés (--verbose).
 * Développement : TESTC_EXTRA_GEN=surcouche.js, TESTC_EXTRA_VER=verificateurs.js.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..');
const args = process.argv.slice(2);
const VERBOSE = args.includes('--verbose');
const positional = args.filter(a => !a.startsWith('--'));
const N = parseInt(positional[0], 10) > 0 ? parseInt(positional[0], 10) : 200;
const FILTER = positional[1] || '';
const VARIETY_MIN = Math.min(30, Math.floor(N / 5));

// ---------------------------------------------------------------------------
// Environnement navigateur minimal
// ---------------------------------------------------------------------------
global.window = global;
const memStore = {};
global.localStorage = {
  getItem: k => (k in memStore ? memStore[k] : null),
  setItem: (k, v) => { memStore[k] = String(v); },
  removeItem: k => { delete memStore[k]; }
};
const fakeEl = () => ({ style: {}, classList: { add() {}, remove() {}, toggle() {} }, setAttribute() {}, appendChild() {}, addEventListener() {}, getContext: () => null, querySelector: () => null, querySelectorAll: () => [] });
global.document = {
  createElement: fakeEl, createElementNS: fakeEl, querySelector: () => null, querySelectorAll: () => [],
  getElementById: () => null, addEventListener() {}, body: fakeEl(), documentElement: fakeEl()
};
if (typeof global.navigator === 'undefined') global.navigator = { userAgent: 'node' };

// Fichiers nécessaires, chargés dans l'ordre de index.html
const NEEDED = ['js/geometryFigures.js', 'js/scratchRenderer.js', 'js/generatorsCore.js', 'js/randomGenerators.js', 'js/generators6e.js'];
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const ordered = [];
for (const m of html.matchAll(/<script[^>]*\bsrc="([^"?]+)/g)) if (NEEDED.includes(m[1])) ordered.push(m[1]);
for (const f of NEEDED) if (!ordered.includes(f) && fs.existsSync(path.join(ROOT, f))) ordered.push(f); // fichier pas encore référencé
for (const f of ordered) {
  const file = path.join(ROOT, f);
  if (!fs.existsSync(file)) continue;
  vm.runInThisContext(fs.readFileSync(file, 'utf8'), { filename: file });
}
// Développement : TESTC_EXTRA_GEN=a.js,b.js charge des fichiers générateurs supplémentaires (surcouches)
for (const f of (process.env.TESTC_EXTRA_GEN || '').split(',').filter(Boolean)) {
  const file = path.isAbsolute(f) ? f : path.join(ROOT, f);
  vm.runInThisContext(fs.readFileSync(file, 'utf8'), { filename: file });
}
const G = global.MathsGenerators;
if (!G) { console.error('window.MathsGenerators introuvable'); process.exit(1); }

const kCtx = {};
vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'vendor/katex/katex.min.js'), 'utf8'), kCtx);
const katex = kCtx.katex;

// ---------------------------------------------------------------------------
// Évaluateur numérique minimal d'expressions LaTeX sans variable
// ---------------------------------------------------------------------------
function matchBrace(s, i) {
  let d = 0;
  for (let j = i; j < s.length; j++) {
    if (s[j] === '{') d++;
    else if (s[j] === '}') { d--; if (d === 0) return j; }
  }
  return -1;
}
function preTex(s) {
  s = s.replace(/\\(left|right|bigl|bigr|Bigl|Bigr|big|Big)\b\.?/g, '').replace(/\\[,;!:]|\\quad|\\qquad|\\ |~/g, ' ');
  s = s.replace(/\\(text|mathrm|textrm|mbox|textbf)\{[^{}]*\}(\^\{?[23]\}?)?/g, '');
  s = s.replace(/\\(cos|sin|tan)\s*\(?\s*(\d+(?:[.,]\d+|\{,\}\d+)?)\s*(?:\^\{?\\circ\}?|°)\s*\)?/g,
    (m, f, v) => '(' + Math[f](parseFloat(v.replace(/\{,\}|,/, '.')) * Math.PI / 180) + ')');
  s = s.replace(/\\pi/g, '(' + Math.PI + ')');
  s = s.replace(/\^\{?\\circ\}?|°/g, '');
  s = s.replace(/\{,\}/g, '.').replace(/(\d),(\d)/g, '$1.$2');
  s = s.replace(/(\d)\s+(?=\d{3}\b)/g, '$1');
  s = s.replace(/\\times|\\cdot|×/g, '*').replace(/\\div|÷/g, '/');
  s = s.replace(/−/g, '-');
  let guard = 0;
  while (/\\[dt]?frac\s*\{/.test(s) && guard++ < 50) {
    const m = /\\[dt]?frac\s*\{/.exec(s);
    const a0 = m.index + m[0].length - 1; const a1 = matchBrace(s, a0); if (a1 < 0) return null;
    let b0 = a1 + 1; while (s[b0] === ' ') b0++; if (s[b0] !== '{') return null;
    const b1 = matchBrace(s, b0); if (b1 < 0) return null;
    s = s.slice(0, m.index) + '((' + s.slice(a0 + 1, a1) + ')/(' + s.slice(b0 + 1, b1) + '))' + s.slice(b1 + 1);
  }
  guard = 0;
  while (/\\sqrt\s*\{/.test(s) && guard++ < 50) {
    const m = /\\sqrt\s*\{/.exec(s); const a0 = m.index + m[0].length - 1; const a1 = matchBrace(s, a0); if (a1 < 0) return null;
    s = s.slice(0, m.index) + 'S(' + s.slice(a0 + 1, a1) + ')' + s.slice(a1 + 1);
  }
  s = s.replace(/\\\{|\\\}/g, m => (m === '\\{' ? '(' : ')')).replace(/[[{]/g, '(').replace(/[\]}]/g, ')');
  s = s.replace(/\s+/g, '');
  if (/[a-zA-Z\\_%]/.test(s.replace(/S\(/g, '('))) return null;
  return s;
}
function parseExpr(s) {
  let i = 0;
  const peek = () => s[i];
  function expr() { let v = term(); while (peek() === '+' || peek() === '-') { const o = s[i++]; const r = term(); v = o === '+' ? v + r : v - r; } return v; }
  function term() {
    let v = factor();
    for (;;) {
      const c = peek();
      if (c === '*' || c === '/') { i++; const r = factor(); v = c === '*' ? v * r : v / r; }
      else if (c === '(' || c === 'S') v *= factor();
      else break;
    }
    return v;
  }
  function factor() { const c = peek(); if (c === '-') { i++; return -factor(); } if (c === '+') { i++; return factor(); } return power(); }
  function power() { const b = atom(); if (peek() === '^') { i++; let e; if (peek() === '-') { i++; e = -atom(); } else e = atom(); return Math.pow(b, e); } return b; }
  function atom() {
    const c = peek();
    if (c === '(') { i++; const v = expr(); if (s[i++] !== ')') throw new Error('paren'); return v; }
    if (c === 'S') { i++; if (s[i++] !== '(') throw new Error('sqrt'); const v = expr(); if (s[i++] !== ')') throw new Error('paren'); return Math.sqrt(v); }
    const m = /^\d+(\.\d+)?|^\.\d+/.exec(s.slice(i)); if (!m) throw new Error('tok');
    i += m[0].length; return parseFloat(m[0]);
  }
  const v = expr(); if (i !== s.length) throw new Error('trail'); return v;
}
function evalTex(t) {
  if (t == null) return null;
  const p = preTex(String(t)); if (!p || !/\d/.test(p)) return null;
  try { const v = parseExpr(p); return Number.isFinite(v) ? v : null; } catch (e) { return null; }
}
function splitTop(s) {
  const parts = []; const ops = []; let d = 0; let cur = '';
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '{') d++; if (c === '}') d--;
    if (d === 0 && c === '=') { parts.push(cur); ops.push('='); cur = ''; continue; }
    if (d === 0 && s.startsWith('\\approx', i)) { parts.push(cur); ops.push('~'); cur = ''; i += 6; continue; }
    if (d === 0 && s.startsWith('\\simeq', i)) { parts.push(cur); ops.push('~'); cur = ''; i += 5; continue; }
    cur += c;
  }
  parts.push(cur); return { parts, ops };
}
function mathChunks(str) {
  const out = []; if (typeof str !== 'string') return out;
  const re = /\$\$([\s\S]*?)\$\$|\$([^$]+?)\$|\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]/g; let m;
  while ((m = re.exec(str))) out.push({ tex: m[1] || m[2] || m[3] || m[4] || '', display: !!(m[1] || m[4]) });
  return out;
}
// Texte hors formules, hors balises HTML/SVG et hors blocs de code
function plainText(str) {
  return String(str).replace(/<svg[\s\S]*?<\/svg>/g, ' ').replace(/<[^>]*>/g, ' ')
    .replace(/```[\s\S]*?```/g, ' ').replace(/`[^`]*`/g, ' ')
    .replace(/\$\$[\s\S]*?\$\$/g, ' ').replace(/\$[^$]*\$/g, ' ');
}
// b est-il un arrondi de a (à l'unité, au dixième, à la dizaine, à la centaine…) ? (ordres de grandeur)
const isRounding = (a, b) => {
  for (let k = -4; k <= 6; k++) {
    const step = Math.pow(10, k);
    if (Math.abs(b - Math.round(a / step) * step) < 1e-9 * Math.max(1, Math.abs(b))) return true;
  }
  return false;
};
const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };

// ---------------------------------------------------------------------------
// Vérificateurs indépendants (familles de questions portant un champ `_v` = { k: 'clé', ...paramètres }) :
// VERIFIERS[k](v, q) renvoie la réponse attendue (nombre ou chaîne) ; pour un QCM, l'option correcte attendue.
// Vérificateurs : scripts/tests/college_verifiers.js ; développement : TESTC_EXTRA_VER=a.js,b.js (module.exports = { k: fn }).
// ---------------------------------------------------------------------------
const VERIFIERS = Object.assign({}, require('./college_verifiers.js'));
for (const f of (process.env.TESTC_EXTRA_VER || '').split(',').filter(Boolean)) {
  Object.assign(VERIFIERS, require(path.isAbsolute(f) ? f : path.join(ROOT, f)));
}
const normAns = s => String(s).replace(/\$/g, '').replace(/\\[,;! ]|\s+|\u202f|\u00a0/g, '').replace(/\{,\}/g, ',').replace(/−/g, '-');
function ansNum(s) {
  const t = normAns(s).replace(',', '.');
  let m = /^(-?\d+(?:\.\d+)?)$/.exec(t); if (m) return +m[1];
  m = /^(-?\d+)\/(\d+)$/.exec(t); if (m) return m[1] / m[2];
  m = /^(-?)\\[dt]?frac\{(\d+)\}\{(\d+)\}$/.exec(t); if (m) return (m[1] ? -1 : 1) * m[2] / m[3];
  return null;
}
function sameAns(a, b) {
  const na = ansNum(a), nb = ansNum(b);
  if (na !== null && nb !== null) return Math.abs(na - nb) < 1e-9 * Math.max(1, Math.abs(nb));
  return normAns(a).toLowerCase() === normAns(b).toLowerCase();
}
let verifiedCount = 0;
// Cohérence des indices (hint1/hint2) avec la question posée : voir scripts/tests/hint_checks.js
const { hintIssues, hintTemplate, familyKey } = require('./hint_checks.js');
const sharedHints = {}; // gen|T -> gabarit de hint1 -> familles

// ---------------------------------------------------------------------------
// Collecte des anomalies
// ---------------------------------------------------------------------------
const issues = {};
let errorCount = 0;
function add(gen, t, kind, msg, q) {
  const k = `${gen}|T${t}|${kind}`;
  const e = issues[k] || (issues[k] = { count: 0, samples: [] });
  e.count++; errorCount++;
  if (e.samples.length < 2) e.samples.push({ msg: String(msg).slice(0, 260), statement: q && String(q.statement || '').replace(/<svg[\s\S]*?<\/svg>/g, '<svg/>').slice(0, 220), answer: q && q.answer });
}
const katexCache = new Map();
function katexError(tex, display) {
  const k = (display ? 'D' : 'I') + tex;
  if (katexCache.has(k)) return katexCache.get(k);
  let r = null;
  try { katex.renderToString(tex, { throwOnError: true, displayMode: display }); } catch (e) { r = e.message; }
  katexCache.set(k, r); return r;
}

const FORMAT_RULES = [
  [/\+\s*-(?!>)|(?<![<-])-\s*-(?![->])|\+\s*\+|(?<![\\a-z])-\s*\+/, 'SIGNES (+ - / - -)'],
  [/(^|[^\d.,{}\\a-zA-Z_^])1[a-z](?![a-zA-Z])/, 'COEF_1 (1x)'],
  [/(^|[^\d.,{}\\a-zA-Z_^])0[a-z](?![a-zA-Z])/, 'COEF_0 (0x)'],
  [/[a-zA-Z]\^\{?1\}?(?![\d.,])/, 'EXPOSANT_1 (x^1)'],
  [/(?:[a-z)]|\^\{?\d\}?)\s*[+-]\s*0(?![\d.,{]|\s*[\d,.])/, 'PLUS_ZERO (x + 0)'],
  [/\d\.\d/, 'POINT_DECIMAL (virgule attendue)'],
  [/\^-\d/, 'EXPOSANT_NEGATIF_SANS_ACCOLADES']
];
const TEXT_FIELDS = ['statement', 'solution', 'hint1', 'hint2', 'hint3', 'title'];

function checkQuestion(gen, t, q) {
  if (!q || typeof q !== 'object') { add(gen, t, 'NULL', 'question nulle', q); return; }
  if (!q.statement) add(gen, t, 'MISSING', 'statement manquant', q);
  if (q.type !== 'mcq' && (q.answer === undefined || q.answer === null || String(q.answer).trim() === '')) add(gen, t, 'MISSING', 'answer manquant', q);

  const fields = [
    ...TEXT_FIELDS.map(f => [f, q[f]]),
    ['answer', q.answer],
    ...(Array.isArray(q.hints) ? q.hints.map((h, j) => ['hints' + j, h]) : []),
    ...(q.options || []).map((o, j) => ['opt' + j, o]),
    ...(q.explanations || []).map((o, j) => ['expl' + j, o])
  ];
  for (const [f, v] of fields) {
    if (v === undefined || v === null) continue;
    if (typeof v !== 'string' && typeof v !== 'number') { add(gen, t, 'NON_STRING', `${f}: ${typeof v}`, q); continue; }
    const s = String(v);
    const bad = s.match(/undefined|NaN|Infinity|\[object Object\]|\bnull\b/);
    if (bad) add(gen, t, 'VALEUR_INVALIDE', `${f}: ${s.slice(Math.max(0, bad.index - 60), bad.index + 40)}`, q);
    const longDec = s.replace(/<[^>]*>/g, ' ').match(/\d(?:[.,]|\{,\})\d{7,}/);
    if (longDec) add(gen, t, 'FLOTTANT_BRUT', `${f}: ${longDec[0]}`, q);
    if (f === 'answer') continue;

    if (/\\n(?![a-zA-Z])/.test(s)) add(gen, t, 'BACKSLASH_N_LITTERAL', `${f}: ${s.slice(Math.max(0, s.search(/\\n(?![a-zA-Z])/) - 40), s.search(/\\n(?![a-zA-Z])/) + 20)}`, q);
    const outside = plainText(s);
    const raw = outside.match(/\\[a-zA-Z]+|\^[-{\d]|_\{/);
    if (raw) add(gen, t, 'LATEX_HORS_DOLLARS', `${f}: …${outside.slice(Math.max(0, raw.index - 40), raw.index + 30)}…`, q);
    const dp = outside.match(/\d\.\d/);
    if (dp) add(gen, t, 'POINT_DECIMAL_TEXTE', `${f}: …${outside.slice(Math.max(0, dp.index - 30), dp.index + 20)}…`, q);

    for (const c of mathChunks(s)) {
      const err = katexError(c.tex, c.display);
      if (err) add(gen, t, 'KATEX', `${f}: ${err.slice(0, 120)} | ${c.tex.slice(0, 100)}`, q);
      const tx = c.tex.replace(/\\text\{[^{}]*\}/g, m => m.replace(/\d\.\d/g, '#'));
      for (const [re, kind] of FORMAT_RULES) {
        const m = tx.match(re);
        if (m) add(gen, t, kind, `${f}: …${tx.slice(Math.max(0, m.index - 30), m.index + 30)}…`, q);
      }
      // Chaînes d'égalités numériques (solution et indices)
      if (/^(solution|hint\d|hints\d)$/.test(f)) {
        for (const line of c.tex.split(/\\\\|\\quad|\\qquad|\\text\{[^{}]*\}\s*(?=\S)|;|\\Rightarrow|\\implies|\\iff|\\Leftrightarrow|\\neq|<|>|\\leq?|\\geq?/)) {
          const { parts, ops } = splitTop(line);
          if (parts.length < 2) continue;
          const vals = parts.map(p => (/\\text|%|\\%|°|\\circ|\\ldots|\\dots/.test(p) ? null : evalTex(p)));
          for (let j = 0; j < ops.length; j++) {
            const a = vals[j]; const b = vals[j + 1];
            if (a == null || b == null) continue;
            const tol = ops[j] === '=' ? 1e-6 * Math.max(1, Math.abs(a)) : Math.max(0.06, 0.02 * Math.abs(a));
            if (ops[j] !== '=' && isRounding(a, b)) continue;
            if (Math.abs(a - b) > tol) add(gen, t, ops[j] === '=' ? 'EGALITE_FAUSSE' : 'APPROX_FAUX', `${f}: ${parts[j].trim().slice(-60)} ${ops[j] === '=' ? '=' : '≈'} ${parts[j + 1].trim().slice(0, 60)}  (${a} vs ${b})`, q);
          }
        }
      }
    }
  }

  // Notes sur 20
  if (/\bnotes?\b/i.test(q.statement || '')) {
    const st = `${q.statement}\n${q.solution || ''}`;
    for (const m of st.matchAll(/(-?\d+(?:[.,]\d+|\{,\}\d+)?)\s*\/\s*20\b/g)) {
      const v = parseFloat(m[1].replace(/\{,\}|,/, '.')); if (v > 20 || v < 0) add(gen, t, 'NOTE_HORS_0_20', m[0], q);
    }
    const plain = plainText(q.statement) + ' ' + mathChunks(q.statement).map(c => c.tex).join(' ; ');
    for (const m of plain.matchAll(/(?<![\d^{_])(\d+(?:\{,\}\d+|[.,]\d+)?)(?![\d}])/g)) {
      const v = parseFloat(m[1].replace(/\{,\}|,/, '.'));
      if (v > 20 && v <= 25 && /\bnotes?\b[^.]*:/i.test(q.statement) && /sur\s*\$?20|\/\s*20/.test(q.statement)) add(gen, t, 'NOTE_HORS_0_20', m[1], q);
    }
  }

  // Notation scientifique normalisée
  if (/notation scientifique|écriture scientifique/i.test(q.statement || '')) {
    const cands = [q.answer];
    if (q.type === 'mcq' && q.options) cands.push(q.options[q.correctIndex]);
    for (const a of cands) {
      if (a == null) continue;
      const m = /^\s*\$?\s*(-?[\d.,{}]+)\s*(?:\*|\\times|×)\s*10\^\{?(-?\d+)\}?\s*\$?\s*$/.exec(String(a));
      if (m) {
        const v = Math.abs(parseFloat(m[1].replace(/\{,\}|,/, '.')));
        if (!(v >= 1 && v < 10)) add(gen, t, 'NOTATION_SCI_NON_NORMALISEE', String(a), q);
      }
    }
  }

  if (!/^generate6/.test(gen)) { // la 6e est contrôlée par test_6eme.js
    for (const is of hintIssues(q)) add(gen, t, is.kind, is.msg, q);
    const ht = hintTemplate(q.hint1 || '');
    if (ht) { const m = sharedHints[`${gen}|T${t}`] || (sharedHints[`${gen}|T${t}`] = new Map()); if (!m.has(ht)) m.set(ht, new Set()); m.get(ht).add(familyKey(q)); }
  }

  if (q._v && !/^generate6/.test(gen)) { // les questions de 6e sont vérifiées par test_6eme.js
    const vf = VERIFIERS[q._v.k];
    if (typeof vf !== 'function') add(gen, t, 'VERIFICATEUR_ABSENT', `_v.k = ${q._v.k}`, q);
    else {
      let exp; try { exp = vf(q._v, q); } catch (e) { add(gen, t, 'VERIFICATEUR_EXCEPTION', `${q._v.k} : ${e.message}`, q); exp = undefined; }
      if (exp !== undefined) {
        if (q.type === 'mcq') {
          const o = q.options || [];
          const ok = o.filter(x => sameAns(x, exp));
          if (ok.length !== 1) add(gen, t, 'VERIF_QCM', `[${q._v.k}] ${ok.length} option(s) = attendu « ${exp} » : ${JSON.stringify(o).slice(0, 160)}`, q);
          else if (!sameAns(q.answer, exp)) add(gen, t, 'VERIF_REPONSE', `[${q._v.k}] réponse « ${q.answer} » ≠ attendu « ${exp} »`, q);
          else verifiedCount++;
        } else if (!sameAns(q.answer, exp)) add(gen, t, 'VERIF_REPONSE', `[${q._v.k}] réponse « ${q.answer} » ≠ attendu « ${exp} »`, q);
        else verifiedCount++;
      }
    }
  }

  if (q.type === 'mcq') {
    const o = q.options || q.choices;
    if (!Array.isArray(o) || o.length < 2) add(gen, t, 'QCM_OPTIONS', 'options manquantes', q);
    else {
      const norm = o.map(x => String(x).replace(/\s+/g, '').replace(/\{,\}/g, ','));
      if (new Set(norm).size !== o.length) add(gen, t, 'QCM_DOUBLON', JSON.stringify(o), q);
      const ci = q.correctIndex !== undefined ? q.correctIndex : o.indexOf(q.answer);
      if (!(ci >= 0 && ci < o.length)) add(gen, t, 'QCM_SANS_BONNE_REPONSE', `correctIndex=${q.correctIndex} answer=${q.answer}`, q);
      else if (q.answer !== undefined && q.answer !== o[ci]) add(gen, t, 'QCM_ANSWER_INCOHERENT', `answer=${q.answer} options[ci]=${o[ci]}`, q);
      // Options purement numériques (entier, décimal, fraction) de même valeur
      const pure = o.map(x => {
        const s = String(x).replace(/\$/g, '').replace(/\s+/g, '').replace(/\{,\}/g, '.').replace(/,/g, '.');
        let m = /^(-?\d+(?:\.\d+)?)$/.exec(s); if (m) return +m[1];
        m = /^(-?)\\[dt]?frac\{(\d+)\}\{(\d+)\}$/.exec(s); if (m) return (m[1] ? -1 : 1) * m[2] / m[3];
        m = /^(-?\d+)\/(\d+)$/.exec(s); if (m) return m[1] / m[2];
        return null;
      });
      for (let a = 0; a < pure.length; a++) for (let b = a + 1; b < pure.length; b++) {
        if (pure[a] != null && pure[b] != null && Math.abs(pure[a] - pure[b]) < 1e-9) add(gen, t, 'QCM_DEUX_BONNES_REPONSES', `${o[a]} = ${o[b]}`, q);
      }
    }
  } else if (q.type === 'exact' && /irréductible/i.test(q.statement || '')) {
    const fm = /^(-?\d+)\/(-?\d+)$/.exec(String(q.answer).replace(/\s/g, ''));
    if (fm && (gcd(+fm[1], +fm[2]) !== 1 || Math.abs(+fm[2]) === 1)) add(gen, t, 'FRACTION_NON_IRREDUCTIBLE', q.answer, q);
  }
}

// ---------------------------------------------------------------------------
// Boucle principale
// ---------------------------------------------------------------------------
const gens = Object.keys(G).filter(k => /^generate\w+$/.test(k) && !/^generate(ForChapter|Series)$/.test(k) && typeof G[k] === 'function' && k.includes(FILTER));
const variety = {};
let calls = 0;
const t0 = Date.now();
for (const gen of gens) {
  for (let t = 1; t <= 4; t++) {
    const stmts = new Set();
    for (let i = 0; i < N; i++) {
      calls++;
      let q;
      try { q = G[gen](t); } catch (e) { add(gen, t, 'EXCEPTION', `${e.message} @ ${(e.stack || '').split('\n')[1] || ''}`, null); continue; }
      if (q && q.statement) stmts.add(q.statement);
      checkQuestion(gen, t, q);
    }
    variety[`${gen}|T${t}`] = stmts.size;
  }
}

// Repli generateForChapter pour un chapitre inconnu possédant un générateur generate<id>
if (!FILTER) {
  try {
    G.generateTestRepliXYZ = () => ({ statement: 'repli', type: 'exact', answer: '1', solution: 'ok' });
    const q = G.generateForChapter('TestRepliXYZ', 2);
    if (!q || q.statement !== 'repli') add('generateForChapter', 2, 'REPLI_GENERIQUE', 'le repli generate<chapterId> n\'est pas utilisé', q);
  } catch (e) { add('generateForChapter', 2, 'EXCEPTION', e.message, null); }
  delete G.generateTestRepliXYZ;
}

// ---------------------------------------------------------------------------
// Rapport
// ---------------------------------------------------------------------------
const byKind = {};
for (const k of Object.keys(issues)) { const kind = k.split('|')[2]; byKind[kind] = (byKind[kind] || 0) + issues[k].count; }
console.log(`Fichiers chargés : ${ordered.join(', ')}`);
console.log(`Générateurs : ${gens.length} × 4 paliers × ${N} tirages = ${calls} questions (${((Date.now() - t0) / 1000).toFixed(1)} s)`);
console.log(`Réponses recalculées indépendamment (champ _v) : ${verifiedCount}`);

const low = Object.entries(variety).filter(([, v]) => v < VARIETY_MIN).sort((a, b) => a[1] - b[1]);
console.log(`\nVariété : ${Object.keys(variety).length} paliers testés, ${low.length} sous le seuil de ${VARIETY_MIN} énoncés distincts (avertissement).`);
if (low.length) console.log('  ' + low.map(([k, v]) => `${k.replace('generate', '')}:${v}`).join('  '));
if (VERBOSE) console.log(Object.entries(variety).map(([k, v]) => `${k.replace('generate', '')}:${v}`).join('  '));

const shared = [];
for (const [k, m] of Object.entries(sharedHints)) for (const [ht, fams] of m) if (fams.size >= 2) shared.push(`${k.replace('generate', '')} : « ${ht.slice(0, 70)} » pour ${fams.size} familles`);
console.log(`\nIndices partagés par plusieurs familles de questions (avertissement, à vérifier) : ${shared.length}`);
if (shared.length && VERBOSE) console.log('  ' + shared.join('\n  '));

if (errorCount === 0) {
  console.log('\nOK : aucune erreur détectée.');
  process.exit(0);
}
console.log(`\nÉCHEC : ${errorCount} anomalie(s).`);
console.log(Object.entries(byKind).sort((a, b) => b[1] - a[1]).map(([k, v]) => `  ${k}: ${v}`).join('\n'));
for (const [k, v] of Object.entries(issues).sort((a, b) => b[1].count - a[1].count)) {
  console.log(`\n## ${k}  ×${v.count}`);
  for (const s of v.samples) console.log(`   - ${s.msg}\n     énoncé: ${String(s.statement).replace(/\n/g, ' ⏎ ')}\n     réponse: ${s.answer}`);
}
process.exit(1);
