#!/usr/bin/env node
/**
 * Test autonome de la classe de 6ème (L'Établi des Maths).
 * Usage (depuis la racine du dépôt) : node scripts/tests/test_6eme.js
 *
 * Vérifie :
 *  1. Structure : chaque chapitre 6ème (MATHS_CHAPTERS, level "6eme") a un cours complet,
 *     des exercices statiques couvrant les 4 paliers et un générateur generate<ID>.
 *  2. KaTeX valide (délimiteurs, commandes LaTeX hors $, rendu katex) dans cours, exercices, fiches.
 *  3. Chaque générateur × 4 paliers × N tirages : pas d'exception, NaN, undefined, Infinity,
 *     « 1x », « + - », point décimal, \n littéral, QCM à exactement une bonne réponse,
 *     réponse 'exact' sous forme canonique simple.
 *  4. Vérification indépendante : chaque question porte `_v` ({ k, ...params }) et la réponse
 *     est recalculée par VERIFIERS[k].
 *  5. Variété : au moins MIN_DISTINCT énoncés distincts par chapitre et par palier.
 *
 * Variables d'environnement (développement) :
 *  TEST6_ONLY=6N1,6N2     limite les chapitres testés
 *  TEST6_EXTRA_GEN=a.js,b.js   fichiers générateurs supplémentaires à charger
 *  TEST6_EXTRA_VER=a.js,b.js   modules (module.exports = {k: fn}) de vérificateurs supplémentaires
 *  TEST6_GEN_ONLY=1       ne teste que les générateurs (pas les données statiques)
 *  TEST6_DATA_FILE=x.js  remplace js/data/data_6eme.js (développement)
 *  TEST6_RUNS=300         nombre de tirages par palier
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..');
const RUNS = parseInt(process.env.TEST6_RUNS || '300', 10);
const MIN_DISTINCT = 30;
const ONLY = (process.env.TEST6_ONLY || '').split(',').map(s => s.trim()).filter(Boolean);
const GEN_ONLY = process.env.TEST6_GEN_ONLY === '1';

// ---------------------------------------------------------------------------
// Stubs navigateur
// ---------------------------------------------------------------------------
global.window = global;
const memStore = {};
global.localStorage = {
  getItem: k => (k in memStore ? memStore[k] : null),
  setItem: (k, v) => { memStore[k] = String(v); },
  removeItem: k => { delete memStore[k]; }
};
global.document = {
  addEventListener: () => {},
  getElementById: () => null,
  querySelector: () => null,
  querySelectorAll: () => [],
  createElement: () => ({ style: {}, setAttribute() {}, appendChild() {}, classList: { add() {}, remove() {} } }),
  body: { appendChild() {}, classList: { add() {}, remove() {} } }
};
try { Object.defineProperty(global, 'navigator', { value: { userAgent: 'node' }, configurable: true, writable: true }); } catch (e) {}

function load(rel) {
  const p = path.isAbsolute(rel) ? rel : path.join(ROOT, rel);
  const code = fs.readFileSync(p, 'utf8');
  vm.runInThisContext(code, { filename: p });
}

// KaTeX
let katex = null;
{
  const kp = path.join(ROOT, 'vendor/katex/katex.min.js');
  const ctx = {};
  vm.runInNewContext(fs.readFileSync(kp, 'utf8'), ctx);
  katex = ctx.katex;
  if (!katex) { console.error('KaTeX introuvable'); process.exit(2); }
}

// Ordre d'index.html (données puis moteurs), puis fichiers 6ème
const ORDER = [
  'js/data/chapters.js', 'js/data/chapters_lycee.js', 'js/data/chapters_licence.js',
  'js/data/courses.js', 'js/data/worksheets.js', 'js/data/exercises.js',
  'js/data/data_5eme.js', 'js/data/data_4eme.js',
  'js/data/data_6eme.js',
  'js/storage.js', 'js/geometryFigures.js', 'js/scratchRenderer.js',
  'js/advancedGenerators.js', 'js/lyceeGenerators.js', 'js/randomGenerators.js',
  'js/generators6e.js'
];
if (process.env.TEST6_DATA_FILE) ORDER[ORDER.indexOf('js/data/data_6eme.js')] = process.env.TEST6_DATA_FILE;
for (const f of ORDER) {
  if (!fs.existsSync(path.resolve(ROOT, f))) { console.error(`[ABSENT] ${f}`); continue; }
  try { load(f); } catch (e) { console.error(`[CHARGEMENT] ${f} : ${e.message}`); if (/6e/.test(f)) process.exit(1); }
}
for (const f of (process.env.TEST6_EXTRA_GEN || '').split(',').filter(Boolean)) load(f);

let errors = 0;
const errorSamples = {};
function fail(key, msg) {
  errors++;
  errorSamples[key] = (errorSamples[key] || 0) + 1;
  if (errorSamples[key] <= 3) console.error(`[ERREUR] ${key} : ${msg}`);
}

// ---------------------------------------------------------------------------
// Contrôle LaTeX / typographie
// ---------------------------------------------------------------------------
function splitMath(str) {
  const math = [], text = [], errs = [];
  let inD = false, inI = false, cur = '', curM = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '\\' && str[i + 1] === '$') { if (inD || inI) curM += '\\$'; else cur += '\\$'; i++; continue; }
    if (str.substr(i, 2) === '$$') {
      if (inD) { math.push({ d: true, c: curM }); curM = ''; inD = false; }
      else if (inI) errs.push('$$ dans un $ en ligne');
      else { text.push(cur); cur = ''; inD = true; }
      i++; continue;
    }
    if (str[i] === '$') {
      if (inD) curM += '$';
      else if (inI) { math.push({ d: false, c: curM }); curM = ''; inI = false; }
      else { text.push(cur); cur = ''; inI = true; }
      continue;
    }
    if (inD || inI) curM += str[i]; else cur += str[i];
  }
  if (inD || inI) errs.push('délimiteur $ non fermé');
  text.push(cur);
  return { math, text, errs };
}

const LATEX_OUTSIDE = /\\(frac|dfrac|times|div|sqrt|le\b|ge\b|leq|geq|neq|approx|widehat|overline|circ|text|mathrm|pi\b|cdot|dots|ldots|in\b|quad|hline|begin)/;

function checkText(str, where) {
  if (typeof str !== 'string') return;
  const { math, text, errs } = splitMath(str);
  errs.forEach(e => fail(where, e + ` « ${str.slice(0, 100)} »`));
  for (const t of text) {
    const noTags = t.replace(/<[^>]*>/g, ' ').replace(/`[^`]*`/g, '');
    const m = noTags.match(LATEX_OUTSIDE);
    if (m) fail(where, `commande LaTeX \\${m[1]} hors $ : « ${noTags.slice(Math.max(0, m.index - 30), m.index + 30)} »`);
    if (/\d\.\d/.test(noTags)) fail(where, `point décimal dans le texte : « ${noTags.match(/.{0,20}\d\.\d.{0,20}/)[0]} »`);
  }
  for (const c of math) {
    try { katex.renderToString(c.c, { throwOnError: true, displayMode: c.d }); }
    catch (e) { fail(where, `KaTeX : ${e.message} dans « ${c.c.slice(0, 120)} »`); }
    if (/\d\.\d/.test(c.c)) fail(where, `point décimal en mode math : « ${c.c.slice(0, 80)} »`);
  }
  const plain = str.replace(/<svg[\s\S]*?<\/svg>/g, '');
  if (/\\n(?![a-zA-Z])/.test(plain)) fail(where, `\\n littéral : « ${plain.slice(0, 80)} »`);
  if (/\b(NaN|undefined|Infinity|null)\b/.test(plain)) fail(where, `NaN/undefined/null : « ${plain.slice(0, 140)} »`);
  if (/\[object Object\]/.test(plain)) fail(where, '[object Object]');
  for (const c of math) {
    if (/(^|[^\d,{}.])1\s?[a-z]\b/.test(c.c.replace(/\\[a-zA-Z]+/g, ' ').replace(/\\,/g, ' '))) {
      // « 1x » : coefficient 1 explicite devant une lettre
      const s = c.c.replace(/\\[a-zA-Z]+/g, ' ');
      if (/(^|[^\d,{}.\w])1[a-z]\b/.test(s)) fail(where, `coefficient « 1x » : « ${c.c.slice(0, 80)} »`);
    }
    if (/\+\s*-|-\s*-\s*\d|\+\s*\+/.test(c.c)) fail(where, `signes doublés : « ${c.c.slice(0, 80)} »`);
  }
}

function checkObjFields(obj, where) {
  for (const f of ['title', 'statement', 'answer', 'solution', 'hint1', 'hint2', 'hint', 'explanation', 'placeholder']) {
    if (obj[f] !== undefined) checkText(String(obj[f]), `${where}.${f}`);
  }
  if (Array.isArray(obj.options)) obj.options.forEach((o, i) => checkText(String(o), `${where}.options[${i}]`));
  if (Array.isArray(obj.hints)) obj.hints.forEach((o, i) => checkText(String(o), `${where}.hints[${i}]`));
}

// ---------------------------------------------------------------------------
// Normalisation des réponses
// ---------------------------------------------------------------------------
const NUM_RE = /^-?\d+([.,]\d+)?(\/\d+)?$/;
function norm(s) { return String(s).replace(/\s+/g, '').replace(/ /g, ''); }
function numVal(s) {
  const t = norm(s).replace(',', '.');
  if (!NUM_RE.test(t)) return null;
  if (t.includes('/')) { const [a, b] = t.split('/'); return parseFloat(a) / parseFloat(b); }
  return parseFloat(t);
}
function sameAnswer(a, b) {
  const na = numVal(a), nb = numVal(b);
  if (na !== null && nb !== null) return Math.abs(na - nb) < 1e-9;
  return norm(a) === norm(b);
}
function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; }

// ---------------------------------------------------------------------------
// Vérificateurs indépendants : VERIFIERS[k](v, q) -> réponse attendue (chaîne ou nombre)
// Pour un QCM, la valeur renvoyée est l'option correcte attendue.
// ---------------------------------------------------------------------------
const H = {
  // Formats indépendants des helpers des générateurs
  dec(x) { const v = Math.round(x * 1e6) / 1e6; return String(v).replace('.', ','); },
  frac(n, d) { const g = gcd(n, d); n /= g; d /= g; if (d < 0) { n = -n; d = -d; } return d === 1 ? String(n) : `${n}/${d}`; },
  gcd
};
const VERIFIERS = {};
// --- Vérificateurs 6N1 à 6N5 (nombres et calcul) ---
Object.assign(VERIFIERS, (function () {
  const module = { exports: {} };
// ----- 6N1 à 6N5 (vérificateurs indépendants) -----
  // Formats locaux (indépendants des helpers du générateur)
  const vA_r = x => Math.round(x * 1e6) / 1e6;
  const vA_tex = x => {
    const v = vA_r(x); const neg = v < 0;
    const [ip, dp] = String(Math.abs(v)).split('.');
    return (neg ? '-' : '') + ip.replace(/\B(?=(\d{3})+(?!\d))/g, '\\,') + (dp ? `{,}${dp}` : '');
  };
  const vA_ans = x => String(vA_r(x)).replace('.', ',');
  const vA_gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
  const vA_parse = s => parseFloat(String(s).replace(/\$/g, '').replace(/\\,/g, '').replace('{,}', '.'));
module.exports = {
  // 6N1
  '6N1.chiffre': v => Math.floor(v.m / Math.pow(10, v.p + 3)) % 10,
  '6N1.decomp': v => vA_ans(v.terms.reduce((s, [c, p]) => s + c * Math.pow(10, p + 3), 0) / 1000),
  '6N1.fracdec': v => vA_ans(v.n / v.d),
  '6N1.total': v => Math.floor(v.m / v.q),
  '6N1.pct': v => (v.dir === 'to_dec' ? vA_ans(v.p / 100) : v.p),
  '6N1.grand': v => String(((v.a * 1000 + v.b) * 1000 + v.c) * 1000 + v.d),
  '6N1.decfrac': v => `$\\frac{${vA_tex(v.n)}}{${vA_tex(v.d)}}$`,
  '6N1.mixte': v => v.e * v.b + v.a,
  '6N1.fracmixte': v => (v.ask === 'e' ? Math.floor(v.n / v.b) : v.n % v.b),
  '6N1.ecriture': v => `$${v.u} + \\frac{${v.d1}}{10} + \\frac{${v.d2}}{100}$`,
  '6N1.pctfrac': v => vA_ans(v.a / v.b * 100),
  '6N1.numeration': v => vA_ans(v.x100 * v.m / 100),
  '6N1.devinette': v => {
    const u = v.u, d = 2 * u, c = d + 1, e = c - u;
    return vA_ans(c * 100 + d * 10 + u + e / 10 + v.f / 100 + v.g / 1000);
  },
  '6N1.sommefrac': v => vA_ans(v.a / 10 + v.b / 100 + v.c / 1000),
  '6N1.conversion': v => vA_ans((v.a + v.b / 10) * v.m),
  '6N1.plusgrand': v => {
    const c = [[v.fa / v.fb, `$\\frac{${v.fa}}{${v.fb}}$`], [v.p / 100, `$${v.p}\\,\\%$`], [v.dec / 1000, `$${vA_tex(v.dec / 1000)}$`], [v.n / 1000, `$\\frac{${v.n}}{1\\,000}$`]];
    c.sort((a, b) => b[0] - a[0]);
    return c[0][1];
  },

  // 6N2
  '6N2.comparer': v => (v.x < v.y ? '$<$' : v.x > v.y ? '$>$' : '$=$'),
  '6N2.abscisse': v => vA_ans(v.s + v.j / v.div),
  '6N2.arrondi': v => { const val = v.x / v.scale; const p = Math.pow(10, v.prec); return vA_ans(Math.round(val * p + 1e-9) / p); },
  '6N2.encadrement': v => {
    const st = Math.pow(10, 3 - v.prec), lo = v.x - (v.x % st);
    return `$${vA_tex(lo / 1000)} < ${vA_tex(v.x / 1000)} < ${vA_tex((lo + st) / 1000)}$`;
  },
  '6N2.extremum': v => {
    const vals = v.ds.map(d => v.a + d / 1000);
    return `$${vA_tex(v.mode === 'max' ? Math.max(...vals) : Math.min(...vals))}$`;
  },
  // Recherche parmi les options : le nombre strictement compris entre n/10 et (n+1)/10
  '6N2.intercaler': (v, q) => q.options.find(o => { const x = vA_parse(o); return x > v.n / 10 + 1e-9 && x < (v.n + 1) / 10 - 1e-9; }) || 'aucune',
  '6N2.ranger': v => `$${v.ds.map(d => v.a + d / 1000).sort((x, y) => x - y).map(vA_tex).join(' < ')}$`,
  '6N2.pas': v => vA_ans((v.B - v.A) / v.n),
  '6N2.manquant': v => {
    // teste tous les chiffres possibles
    const ok = [];
    for (let s = 0; s <= 9; s++) {
      const left = s * 10 + v.t1, right = v.d * 10 + v.t2;
      if (v.mode === 'max' ? left < right : left > right) ok.push(s);
    }
    return v.mode === 'max' ? Math.max(...ok) : Math.min(...ok);
  },
  '6N2.arrondipossible': (v, q) => q.options.find(o => Math.round(vA_parse(o) * 10 + 1e-9) === v.tt) || 'aucune',
  '6N2.infini': () => 'Une infinité',

  // 6N3 : combinaison linéaire de termes [signe, numérateur, dénominateur]
  '6N3.lin': v => vA_ans(v.terms.reduce((s, [sg, n, d]) => s + sg * n / d, 0)),
  '6N3.ordre': v => {
    const ra = Math.round(v.a / 10 / 100) * 100, rb = Math.round(v.b / 10 / 100) * 100;
    return v.op === '+' ? ra + rb : ra - rb;
  },

  // 6N4
  '6N4.prod': v => vA_ans(v.f.reduce((p, [n, d]) => p * n / d, 1)),
  '6N4.ordre': v => (Math.round(v.a / 100) * 10) * (Math.round(v.b / 100) * 10),
  '6N4.facteur': v => vA_ans((v.y1e5 / 1e5) / (v.x100 / 100)),
  '6N4.compare': v => (v.f10 < 10 ? 'plus petit que' : v.f10 > 10 ? 'plus grand que' : 'égal à'),

  // 6N5
  '6N5.euclide': v => (v.ask === 'q' ? Math.floor(v.a / v.b) : v.a - v.b * Math.floor(v.a / v.b)),
  '6N5.diviseur': v => (v.n % v.d === 0 ? 'Oui' : 'Non'),
  '6N5.critere': v => { const ok = v.nums.filter(n => n % v.k6 === 0); return ok.length === 1 ? `$${vA_tex(ok[0])}$` : 'ambigu'; },
  '6N5.div': v => vA_ans(v.num / v.den),
  '6N5.boites': v => (v.ask === 'min' ? Math.ceil(v.n / v.b) : Math.floor(v.n / v.b)),
  '6N5.dividende': v => v.b * v.q0 + v.r,
  '6N5.nbdiv': v => { let c = 0; for (let i = 1; i <= v.n; i++) if (v.n % i === 0) c++; return c; },
  '6N5.ppcm': v => v.a * v.b / vA_gcd(v.a, v.b),
  '6N5.commun': v => { let x = v.N + 1; while (x % v.a !== 0 || x % v.b !== 0) x++; return x; },
  '6N5.chiffre9': v => {
    const ok = [];
    for (let c = 0; c <= 9; c++) { const s = v.digits.reduce((a, d, i) => a + (i === v.pos ? c : d), 0); if (s % 9 === 0) ok.push(c); }
    return ok.length === 1 ? ok[0] : 'ambigu';
  },
  '6N5.jour': v => ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'][(v.start + v.N) % 7]
};
  return module.exports;
})());

// --- Vérificateurs 6N6 à 6N8 et 6P1 (fractions, pensée algébrique, proportionnalité) ---
Object.assign(VERIFIERS, (function () {
  const module = { exports: {} };
// Vérificateurs indépendants : 6N6, 6N7, 6N8, 6P1
'use strict';
const g = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
const fr = (n, d) => { const k = g(n, d); n /= k; d /= k; return d === 1 ? String(n) : `${n}/${d}`; };
const dec = x => String(Math.round(x * 1e6) / 1e6).replace('.', ',');
const tf = (n, d) => `$\\frac{${n}}{${d}}$`;
const sym = c => (c < 0 ? '$<$' : c > 0 ? '$>$' : '$=$');
module.exports = {
  '6N6.quotient': v => fr(v.a, v.b),
  '6N6.decimal': v => dec(v.a / v.b),
  '6N6.part': v => tf(v.a, v.b),
  '6N6.vocab': v => String(v.askNum ? v.a : v.b),
  '6N6.cmp1': v => sym(v.a - v.b),
  '6N6.line': v => fr(v.n, v.d),
  '6N6.equal': v => String(v.askNum ? v.a * v.kk : v.b * v.kk),
  '6N6.simplify': v => fr(v.a, v.b),
  '6N6.nature': v => {
    const q = v.a / v.b;
    if (Number.isInteger(q)) return 'Un nombre entier';
    // décimal ssi q × 10^k entier pour un k ≤ 12
    for (let k = 1; k <= 12; k++) { const p = v.a * Math.pow(10, k); if (p % v.b === 0) return 'Un nombre décimal non entier'; }
    return 'Un nombre non décimal';
  },
  '6N6.cmp': v => sym(v.n1 / v.d1 - v.n2 / v.d2 + 0),
  '6N6.mixed': v => `$${Math.floor(v.n / v.d)} + \\frac{${v.n - v.d * Math.floor(v.n / v.d)}}{${v.d}}$`,
  '6N6.frame': v => String(Math.floor(v.n / v.d)),
  '6N6.order': v => {
    let best = v.list[0];
    for (const f of v.list) if (v.askMax ? f[0] * best[1] > best[0] * f[1] : f[0] * best[1] < best[0] * f[1]) best = f;
    return tf(best[0], best[1]);
  },
  '6N6.between': v => { for (let n = 0; n < 1000; n++) if (n * v.b > 2 * v.b * v.a && n * v.b < 2 * v.b * (v.a + 1)) return String(n); return 'none'; },
  '6N6.frommixed': v => fr(v.e * v.d + v.r, v.d),
  '6N6.percent': v => dec(v.a / v.b * 100),

  '6N7.addsame': v => fr(v.op === '+' ? v.a + v.b : v.a - v.b, v.d),
  '6N7.ofqty': v => dec(v.N * v.a / v.b),
  '6N7.multint': v => fr(v.kk * v.a, v.d),
  '6N7.addmult': v => { const D = v.b * v.kk; const x = v.a * D / v.b; return fr(v.op === '+' ? x + v.c : x - v.c, D); },
  '6N7.intplus': v => fr(v.n * v.b + v.a, v.b),
  '6N7.three': v => fr(v.a * v.D / v.b + v.c - v.e, v.D),
  '6N7.remaining': v => fr(v.D - v.a * v.D / v.b - v.c, v.D),
  '6N7.missing': v => String(v.total - v.a * v.D / v.b),
  '6N7.reverse': v => dec(v.val / v.a * v.b),
  '6N7.money': v => dec(v.N * (1 - v.a / v.b - v.c / v.D)),
  '6N7.multadd': v => fr(v.kk * v.a + v.c, v.d),
  '6N7.chain': v => { const D = 4 * v.b; return fr(v.a * 4 + v.c * 2 + v.e, D); },

  '6N8.hole': v => {
    switch (v.sub) {
      case 'add': return dec(v.b - v.a);
      case 'sub1': return dec(v.b + v.a);
      case 'sub2': return dec(v.a - v.b);
      case 'mult': return dec(v.b / v.a);
      default: return dec(v.b * v.a);
    }
  },
  '6N8.prog': v => dec(v.order ? v.x * v.a + v.b : (v.x + v.b) * v.a),
  '6N8.pattern': v => { let c = v.a; for (let i = 2; i <= v.n; i++) c += v.d; return String(c); },
  '6N8.think': v => dec((v.r - v.b) / v.a),
  '6N8.reverse': v => dec(v.r / v.a - v.b),
  '6N8.barsum': v => dec(v.s / (v.kk + 1)),
  '6N8.bardiff': v => dec(v.dd / (v.kk - 1)),
  '6N8.matches': v => { // dénombrement direct : n figures, côtés partagés
    const sides = v.per === 3 ? 4 : 3; return String(sides * v.n - (v.n - 1));
  },
  '6N8.patternrev': v => { let c = v.a, n = 1; while (c < v.N) { c += v.d; n++; } return c === v.N ? String(n) : 'none'; },
  '6N8.balance': v => dec((v.tot - v.a) / v.kk),
  '6N8.twoprices': v => dec((v.s - v.dd) / 2),

  '6P1.lin': v => dec(v.P / v.n * v.m),
  '6P1.isprop': v => (v.ys.every((y, i) => Math.abs(y / v.xs[i] - v.ys[0] / v.xs[0]) < 1e-9) ? 'Oui' : 'Non'),
  '6P1.percent': v => dec(v.N * v.p / 100),
  '6P1.coef': v => dec(v.y / v.x),
  '6P1.scale': v => dec(v.d * v.E / 100),
  '6P1.scalerev': v => dec(v.real_m * 100 / v.E),
  '6P1.discount': v => dec(v.N * (100 - v.p) / 100),
  '6P1.scalefind': v => dec(v.real_m * 100 / v.d),
  '6P1.which': v => v.correct,
  '6P1.offers': v => { const a = v.P1 / v.n1, b = v.P2 / v.n2; return Math.abs(a - b) < 1e-9 ? 'Les deux offres se valent' : (a < b ? 'Offre A' : 'Offre B'); }
};
  return module.exports;
})());

// --- Vérificateurs 6M1 à 6M4 (grandeurs et mesures) ---
Object.assign(VERIFIERS, (function () {
  const module = { exports: {} };
// Vérificateurs indépendants 6M1–6M4
const r6 = x => Math.round(x * 1e6) / 1e6;
const L_UNITS = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
const CM3 = { 'L': 1000, 'dm³': 1000, 'cm³': 1, 'mL': 1, 'cL': 10, 'dL': 100, 'm³': 1000000 };
const dur = n => { const h = Math.floor(n / 60), m = n % 60; return h ? (m ? `${h} h ${m} min` : `${h} h`) : `${m} min`; };
const hour = n => { const t = ((n % 1440) + 1440) % 1440; const mm = t % 60; return `${(t - mm) / 60} h ${mm < 10 ? '0' : ''}${mm}`; };
module.exports = {
  // 6M1
  '6M1.conv': v => r6(v.val * Math.pow(10, L_UNITS.indexOf(v.to) - L_UNITS.indexOf(v.from))),
  '6M1.rect': v => v.L + v.L + v.l + v.l,
  '6M1.reg': v => v.n * v.c,
  '6M1.sum': v => r6(v.sides.reduce((s, x) => s + x, 0)),
  '6M1.rectmix': v => r6(2 * v.Lm * 100 + 2 * v.lcm),
  '6M1.sqside': v => r6(v.P / 4),
  '6M1.rectside': v => v.P / 2 - v.L,
  '6M1.circ': v => Math.round(314 * v.d) / 100,
  '6M1.circExact': v => `$${2 * v.r}\\pi\\text{ ${v.u}}$`,
  '6M1.lshape': v => 2 * v.W + 2 * v.H,
  '6M1.circInv': v => r6(v.L / 3.14),
  '6M1.stade': v => r6(v.L * 2 + Math.round(314 * v.d) / 100),
  '6M1.sqhalf': v => r6(3 * v.c + Math.round(314 * v.c) / 200),
  '6M1.fence': v => r6((2 * v.L + 2 * v.l - v.g) * v.p),
  '6M1.wheel': v => r6(v.n * Math.round(314 * v.d) / 100),
  // 6M2
  '6M2.conv': v => r6(v.val * Math.pow(100, L_UNITS.indexOf(v.to) - L_UNITS.indexOf(v.from))),
  '6M2.rect': v => r6(v.L * v.l),
  '6M2.sq': v => v.c * v.c,
  '6M2.side': v => v.A / v.L,
  '6M2.aireperi': v => v.what === 'aire' ? `$${v.L * v.l}\\text{ cm}^2$` : `$${2 * v.L + 2 * v.l}\\text{ cm}$`,
  '6M2.lshape': v => v.W * v.H - v.a * v.b,
  '6M2.frame': v => v.W * v.H - v.w * v.h,
  '6M2.mix': v => r6(v.Lm * 100 * v.lcm),
  '6M2.tri': v => r6(v.a * v.b / 2),
  '6M2.paint': v => { const area = Math.round((v.W * v.H - v.w * v.h) * 1e6); const c = v.c * 1e6; return Math.floor((area + c - 1) / c); },
  '6M2.sameperi': v => { const c = (2 * (v.L + v.l)) / 4; return c * c; },
  '6M2.tiles': v => (v.L * 100 / v.c) * (v.l * 100 / v.c),
  // 6M3
  '6M3.conv': v => r6(v.val * CM3[v.from] / CM3[v.to]),
  '6M3.count': v => v.a * v.b * v.c,
  '6M3.cube': v => v.c ** 3,
  '6M3.pave': v => r6(v.L * v.l * v.h),
  '6M3.height': v => v.V / (v.L * v.l),
  '6M3.aqua': v => r6(v.L * v.l * v.h / 1000),
  '6M3.remove': v => v.a * v.b * v.c - v.r,
  '6M3.fill': v => v.L * v.l * v.h / v.d,
  '6M3.fit': v => Math.floor(v.L / v.s) * Math.floor(v.l / v.s) * Math.floor(v.h / v.s),
  '6M3.level': v => r6(v.V * 1000 / (v.L * v.l)),
  // 6M4
  '6M4.tomin': v => v.h * 60 + v.m,
  '6M4.tohm': v => dur(v.n),
  '6M4.tosec': v => v.m * 60 + v.s,
  '6M4.between': v => v.e - v.s,
  '6M4.end': v => hour(v.s + v.d),
  '6M4.days': v => v.j * 24 + v.h,
  '6M4.betweenhm': v => dur(v.e - v.s),
  '6M4.start': v => hour(v.e - v.d),
  '6M4.sum': v => dur(v.a + v.b),
  '6M4.hms': v => v.h * 3600 + v.m * 60 + v.s,
  '6M4.night': v => hour(v.s + v.d) + (v.s + v.d >= 1440 ? ' le lendemain' : ''),
  '6M4.dech': v => r6(v.val * 60),
  '6M4.todec': v => r6(v.h + v.m / 60)
};
  return module.exports;
})());

// --- Vérificateurs 6G1 à 6G5 (espace et géométrie) ---
Object.assign(VERIFIERS, (function () {
  const module = { exports: {} };
/* Vérificateurs indépendants 6G1–6G5 */
const dec = x => String(Math.round(x * 1e6) / 1e6).replace('.', ',');
const sum = arr => arr.reduce((s, v) => s + v, 0);
module.exports = {
  // 6G1
  '6G1.notation': v => [`$[${v.P}${v.Q}]$`, `$(${v.P}${v.Q})$`, `$[${v.P}${v.Q})$`, `$${v.P}${v.Q}$`][v.kind],
  '6G1.half': v => dec(v.x / 2),
  '6G1.double': v => dec(v.x * 2),
  '6G1.sum': v => dec(v.a + v.b),
  '6G1.diff': v => dec(v.a - v.b),
  '6G1.sum3': v => dec(v.a + v.b + v.c),
  '6G1.position': v => (Math.abs(v.d - v.r) < 1e-9 ? 'sur le cercle' : v.d < v.r ? "à l'intérieur du disque, mais pas sur le cercle" : "à l'extérieur du disque"),
  '6G1.vocab': v => ['un diamètre', 'un rayon', 'une corde (qui n’est pas un diamètre)'][v.kind],
  '6G1.quart': v => dec(v.ask === 0 ? v.c / 4 : v.c / 2 + v.c / 4),
  '6G1.chaine': v => {
    const L = v.L, M = L / 2, N = (M + L) / 2, P = N / 2;
    const pos = { A: 0, B: L, M, N, P };
    return dec(Math.abs(pos[v.roles[0]] - pos[v.roles[1]]));
  },
  '6G1.inter': v => {
    const s = v.r1 + v.r2, e = Math.abs(v.r1 - v.r2);
    if (v.d > e && v.d < s) return 'deux points';
    if (v.d === s || v.d === e) return 'un seul point';
    return 'aucun point';
  },
  // 6G2
  '6G2.def': v => `la droite perpendiculaire à $[${v.P}${v.Q}]$ en son milieu`,
  '6G2.same': v => dec(v.x),
  '6G2.axes': v => ['4', '2', '2', '3', '1', 'une infinité', '2', 'aucun', '6', 'aucun'][v.idx],
  '6G2.grid': v => dec(2 * Math.abs(v.vertical ? v.px - v.axis : v.py - v.axis)),
  '6G2.prop': v => `Il appartient à la médiatrice de $[${v.P}${v.Q}]$.`,
  '6G2.sum': v => dec(sum(v.list)),
  '6G2.rect': v => dec(v.ask === 0 ? v.L * v.l : v.L + v.l + v.L + v.l),
  '6G2.axe': v => (v.kind === 0 ? `le point $${v.P}$ lui-même` : `la médiatrice du segment $[${v.P}${v.P}']$`),
  '6G2.twomed': v => dec(v.ask === 0 ? v.x : v.x + v.x + v.x),
  '6G2.kite': v => `la médiatrice de $[${v.P}${v.Q}]$`,
  // 6G3
  '6G3.nature': v => (v.x < 90 ? 'un angle aigu' : v.x === 90 ? 'un angle droit' : v.x < 180 ? 'un angle obtus' : 'un angle plat'),
  '6G3.sommet': v => `le point $${v.O}$`,
  '6G3.cotes': v => `$[${v.O}${v.P})$ et $[${v.O}${v.Q})$`,
  '6G3.sub': v => dec(v.tot - sum(v.parts)),
  '6G3.add': v => dec(sum(v.parts)),
  '6G3.same': v => dec(v.x),
  '6G3.half': v => dec(v.x / 2),
  '6G3.secantes': v => dec(v.opp ? v.x : 180 - v.x),
  '6G3.bissplat': v => dec(v.x + (180 - v.x) / 2),
  '6G3.horloge': v => {
    const minute = v.half ? 180 : 0;
    const hour = (v.h % 12) * 30 + (v.half ? 15 : 0);
    const d = Math.abs(hour - minute) % 360;
    return dec(Math.min(d, 360 - d));
  },
  // 6G4
  '6G4.sub': v => dec(v.tot - sum(v.parts)),
  '6G4.mul': v => dec(v.a * v.b),
  '6G4.nature': v => {
    const [a, b, c] = v.s;
    if (a === b && b === c) return 'équilatéral';
    if (a === b || b === c || a === c) return 'isocèle (non équilatéral)';
    return 'quelconque (aucun côté égal)';
  },
  '6G4.isobase': v => dec((180 - v.x) / 2),
  '6G4.construct': v => {
    const s = v.s.slice().sort((x, y) => x - y);
    return s[2] < s[0] + s[1] ? 'Oui, ce triangle est constructible.' : "Non, ce triangle n'est pas constructible.";
  },
  '6G4.possible': v => (sum(v.list) === 180 ? 'Oui, car la somme des angles vaut 180°.' : 'Non, car la somme des angles ne vaut pas 180°.'),
  '6G4.ext': v => dec(180 - (180 - v.apex) / 2),
  '6G4.deux': v => { const adb = 180 - v.b - v.c; return dec(v.adb ? adb : 180 - adb); },
  // 6G5
  '6G5.count': v => dec(sum(v.h.flat())),
  '6G5.elem': v => dec([6, 12, 8][v.prop]),
  '6G5.dessus': v => dec(v.h.flat().filter(x => x > 0).length),
  '6G5.grand': v => dec(v.ask === 0 ? Math.pow(v.n, 3) : Math.pow(v.n, 2)),
  '6G5.completer': v => { const H = Math.max(...v.h.flat()); return dec(v.h.length * v.h[0].length * H - sum(v.h.flat())); },
  '6G5.face': v => dec(sum(v.h.map(r => Math.max(...r)))),
  '6G5.aretes': v => dec(4 * v.L + 4 * v.l + 4 * v.h),
  '6G5.peint': v => {
    // Dénombrement direct des petits cubes
    let n = 0;
    for (let x = 0; x < v.a; x++) for (let y = 0; y < v.b; y++) for (let z = 0; z < v.c; z++) {
      const f = (x === 0 || x === v.a - 1 ? 1 : 0) * (v.a === 1 ? 2 : 1) + (y === 0 || y === v.b - 1 ? 1 : 0) + (z === 0 || z === v.c - 1 ? 1 : 0);
      if (f === v.kind) n++;
    }
    return dec(n);
  }
};
  return module.exports;
})());

// --- Vérificateurs 6D1, 6D2, 6A1 (données, probabilités, pensée informatique) ---
Object.assign(VERIFIERS, (function () {
  const module = { exports: {} };
// Vérificateurs indépendants 6D1 / 6D2 / 6A1
const dec = x => String(Math.round(x * 1e6) / 1e6).replace('.', ',');
const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
const frac = (n, d) => { const g = gcd(n, d); return d / g === 1 ? String(n / g) : `${n / g}/${d / g}`; };
const sum = a => a.reduce((x, y) => x + y, 0);
const CERT = 'Certain', IMP = 'Impossible', POS = 'Possible (ni certain, ni impossible)';
const status = (k, n) => (k === 0 ? IMP : k === n ? CERT : POS);

function dieFav(n, kind, m) {
  let k = 0;
  for (let f = 1; f <= n; f++) {
    let ok;
    switch (kind) {
      case 'pair': ok = f % 2 === 0; break;
      case 'impair': ok = f % 2 !== 0; break;
      case 'mult3': ok = f % 3 === 0; break;
      case 'mult4': ok = f % 4 === 0; break;
      case 'geq': ok = f >= m; break;
      case 'lt': ok = f < m; break;
      case 'leq': ok = !(f > m); break;
      case 'eq': ok = f === m; break;
      default: throw new Error('kind ' + kind);
    }
    if (ok) k++;
  }
  return k;
}

const COLS = 'ABCDEFGH';
const STEP = { D: [1, 0], G: [-1, 0], H: [0, 1], B: [0, -1] };
function walk(start, moves, reps) {
  let x = start[0], y = start[1];
  for (let i = 0; i < reps; i++) {
    for (const [d, n] of moves) {
      for (let s = 0; s < Math.abs(n); s++) {
        x += STEP[d][0] * Math.sign(n); y += STEP[d][1] * Math.sign(n);
        if (x < 1 || x > 8 || y < 1 || y > 8) return null;
      }
    }
  }
  return [x, y];
}
const cell = p => COLS[p[0] - 1] + p[1];

function studentOk(st, crit) {
  switch (crit.kind) {
    case 'hGt': return st.h > crit.s;
    case 'hLe': return st.h <= crit.s;
    case 'age': return st.age === crit.s;
    case 'act': return st.act === crit.s;
  }
  throw new Error('crit');
}

module.exports = {
  // ---- 6D1
  '6D1.lire': v => v.vals[v.i],
  '6D1.max': v => { let b = 0; v.vals.forEach((x, i) => { if (x > v.vals[b]) b = i; }); return v.cats[b]; },
  '6D1.total': v => sum(v.vals),
  '6D1.bar': v => v.vals[v.i],
  '6D1.diff': v => Math.abs(v.vals[v.a] - v.vals[v.b]),
  '6D1.complete': v => v.tot - sum(v.shown.filter(x => x !== null)),
  '6D1.double': v => {
    if (v.askTotal) return sum(v.grid[v.hr]);
    return v.cT[v.hc] - v.grid[1 - v.hr][v.hc];
  },
  '6D1.barcompare': v => (v.mode === 'sum2' ? v.vals[v.i] + v.vals[v.j] : sum(v.vals)),
  '6D1.moyenne': v => dec(sum(v.vals) / v.vals.length),
  '6D1.pourcent': v => { if (sum(v.vals) !== v.tot) throw new Error('total incohérent'); return dec(v.vals[v.i] / v.tot * 100); },
  '6D1.etendue': v => { const s = v.vals.slice().sort((a, b) => a - b); return s[s.length - 1] - s[0]; },
  '6D1.filter': v => v.list.filter(st => studentOk(st, v.crit)).length,
  '6D1.filter2': v => v.list.filter(st => st.h >= v.crit.s1 && (v.crit.mode === 'and') === (st.age === v.crit.s2)).length,

  // ---- 6D2
  '6D2.vocabDe': v => status(dieFav(v.n, v.kind, v.m), v.n),
  '6D2.vocabUrne': v => {
    const tot = sum(v.counts);
    const k = v.color === null ? tot : v.cols.reduce((a, c, i) => a + (c === v.color ? v.counts[i] : 0), 0);
    return status(k, tot);
  },
  '6D2.between': v => { const ok = v.cands.filter(x => x >= 0 && x <= 1); if (ok.length !== 1) throw new Error('candidats'); return dec(ok[0]); },
  '6D2.de': v => frac(1, v.n),
  '6D2.urne': v => frac(v.counts[v.j], sum(v.counts)),
  '6D2.roue': v => frac(v.sectors.filter(s => s === v.color).length, v.sectors.length),
  '6D2.deEvt': v => frac(dieFav(v.n, v.kind, v.m), v.n),
  '6D2.contraire': v => frac(sum(v.counts) - v.counts[v.j], sum(v.counts)),
  '6D2.compare': v => {
    const a = v.r1 / (v.r1 + v.b1), b = v.r2 / (v.r2 + v.b2);
    if (Math.abs(a - b) < 1e-12) return 'Les deux urnes donnent la même chance';
    return a > b ? 'Urne A' : 'Urne B';
  },
  '6D2.lettres': v => {
    const L = v.w.split('');
    const k = L.filter(ch => (v.mode === 'voyelle' ? /[AEIOUY]/.test(ch) : v.mode === 'consonne' ? !/[AEIOUY]/.test(ch) : ch === v.letter)).length;
    return frac(k, L.length);
  },
  '6D2.freq': v => dec(v.c / v.N),
  '6D2.ajout': v => {
    // plus petit x ≥ 0 tel que (r + x) / (r + x + b) = p / q
    for (let x = 0; x < 1000; x++) if ((v.r + x) * v.q === v.p * (v.r + x + v.b)) return x;
    throw new Error('pas de solution');
  },
  '6D2.freqProba': v => {
    const e = v.N / v.n;
    const best = v.cands.slice().sort((a, b) => Math.abs(a - e) - Math.abs(b - e));
    if (Math.abs(best[0] - e) === Math.abs(best[1] - e)) throw new Error('ambigu');
    return String(best[0]);
  },

  // ---- 6A1
  '6A1.case': v => { const e = walk(v.start, v.moves, v.reps); if (!e) throw new Error('hors grille'); return cell(e); },
  '6A1.pas': v => sum(v.moves.map(m => m[1])),
  '6A1.calc': v => {
    let n = v.x;
    for (const [o, a] of v.ops) n = o === '+' ? n + a : o === '-' ? n - a : n * a;
    return n;
  },
  '6A1.poly': v => v.n * v.d,
  '6A1.score': v => { let s = v.s0; for (let i = 0; i < v.n; i++) s += v.a; return s; },
  '6A1.depart': v => {
    // recherche exhaustive de la case de départ
    const sols = [];
    for (let c = 1; c <= 8; c++) for (let r = 1; r <= 8; r++) {
      const e = walk([c, r], v.moves, 1);
      if (e && e[0] === v.end[0] && e[1] === v.end[1]) sols.push(cell([c, r]));
    }
    if (sols.length !== 1) throw new Error('départ non unique');
    return sols[0];
  },
  '6A1.nbRep': v => {
    const dist = Math.abs(v.target[0] - v.start[0]) + Math.abs(v.target[1] - v.start[1]);
    if (dist % v.d) throw new Error('non divisible');
    return dist / v.d;
  },
  '6A1.condition': v => {
    const c = v.mode === 'sup' ? v.x > v.s : v.x < v.s;
    return c ? v.x * v.b : v.x + v.a;
  },
  '6A1.angle': v => 360 / v.n,
  '6A1.imbrique': v => { let t = 0; for (let i = 0; i < v.k1; i++) { for (let j = 0; j < v.k2; j++) t += v.d; t += v.e; } return t; },
  '6A1.choixProg': (v, q) => {
    const ok = q.options.filter(opt => {
      const p = v.progs.find(pp => pp.label === opt);
      if (!p) throw new Error('option inconnue ' + opt);
      const e = walk(v.start, p.moves, p.reps);
      return e && e[0] === v.target[0] && e[1] === v.target[1];
    });
    if (ok.length !== 1) throw new Error(`${ok.length} programmes corrects`);
    return ok[0];
  }
};
  return module.exports;
})());
// --- Vérificateurs des familles ajoutées / révisées, groupe E (audit 2026-10-31) ---
Object.assign(VERIFIERS, (function () {
  const module = { exports: {} };
// Vérificateurs indépendants des nouvelles familles 6D1, 6D2, 6A1 (audit 2026-10-31)
const vE_gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
const vE_frac = (n, d) => { const g = vE_gcd(n, d); return d / g === 1 ? String(n / g) : `${n / g}/${d / g}`; };
const vE_dec = x => String(Math.round(x * 1e6) / 1e6).replace('.', ',');
const vE_sum = a => a.reduce((s, x) => s + x, 0);
const vE_step = { D: [1, 0], G: [-1, 0], H: [0, 1], B: [0, -1] };
module.exports = {
  '6D1.barext': v => { let best = 0; v.vals.forEach((x, i) => { if (v.mode === 'min' ? x < v.vals[best] : x > v.vals[best]) best = i; }); return v.cats[best]; },
  '6D1.hauteur': v => vE_dec(v.vals[v.i] / v.kk),
  '6D1.choixdiag': v => ({ barres: 'Un diagramme en barres', circ: 'Un diagramme circulaire', courbe: 'Un graphique (points reliés) en fonction du temps', double: 'Un tableau à double entrée' })[v.type],
  '6D1.erreur': v => v.cats[v.vals.findIndex((x, i) => x !== v.drawn[i])],
  '6D1.double2': v => {
    const row = v.grid[v.hr];
    const missing = v.rT[v.hr] - row.reduce((s, x) => s + (x === null ? 0 : x), 0);
    return missing + v.grid[1 - v.hr][v.hc];
  },
  '6D1.barfrac': v => vE_frac(v.vals[v.i], vE_sum(v.vals)),
  '6D2.echelle': v => {
    const tot = vE_sum(v.counts);
    const fav = v.mode === 'one' ? v.counts[v.j] : tot - v.counts[v.j];
    if (fav === 0) return '0 : impossible';
    if (fav === tot) return '1 : certain';
    if (fav * 2 === tot) return '1/2 : une chance sur deux';
    return fav * 2 < tot ? 'Entre 0 et 1/2 : peu probable' : 'Entre 1/2 et 1 : très probable';
  },
  '6D2.dec': v => vE_dec(v.k1 / v.tot),
  '6D2.roueInegale': v => vE_frac(v.ks[v.j] * 360 / v.n, 360),
  '6D2.bleues': v => { for (let b = 0; b < 1000; b++) if (v.r * v.q === v.p * (v.r + b)) return b; return -1; },
  '6D2.conclure': v => {
    const f = v.c / v.N;
    if (v.N < 100) return 'On ne peut pas conclure : il y a trop peu de lancers';
    return Math.abs(f - 1 / 6) > 0.05 ? 'Le dé est très probablement truqué' : 'Rien n\'indique que le dé est truqué';
  },
  '6D2.retrait': v => {
    const c = v.counts.slice(); c[v.a] -= v.x;
    return vE_frac(c[v.b], vE_sum(c));
  },
  '6A1.completer': v => {
    const m = v.moves[v.ask];
    const [dx, dy] = vE_step[m[0]];
    return dx ? Math.abs(v.target[0] - v.start[0]) : Math.abs(v.target[1] - v.start[1]);
  },
  '6A1.bug': v => {
    let x = v.start[0], y = v.start[1];
    v.moves.forEach(([d, n], i) => { if (i !== v.idx) { x += vE_step[d][0] * n; y += vE_step[d][1] * n; } });
    const [dx, dy] = vE_step[v.moves[v.idx][0]];
    return dx ? (v.end[0] - x) / dx : (v.end[1] - y) / dy;
  },
  '6A1.boucleVar': v => {
    if (v.mode === 'double') return v.x * Math.pow(2, v.n);
    if (v.mode === 'somme') { let s = 0; for (let c = 1; c <= v.n; c++) s += c; return s; }
    let n = v.x; for (let i = 0; i < v.n; i++) n = 2 * (n + v.a); return n;
  },
  '6A1.inverse': v => {
    let n = v.res;
    for (let i = v.ops.length - 1; i >= 0; i--) { const [o, a] = v.ops[i]; n = o === '+' ? n - a : o === '-' ? n + a : n / a; }
    return n;
  }
};
  return module.exports;
})());
// --- Vérificateurs des familles ajoutées / révisées, groupe B (audit 2026-10-31) ---
Object.assign(VERIFIERS, (function () {
  const module = { exports: {} };
// Vérificateurs indépendants — groupe B (6N6, 6N7, 6N8, 6P1), nouvelles familles
'use strict';
const vB_gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
const vB_fr = (n, d) => { const g = vB_gcd(n, d); n /= g; d /= g; return d === 1 ? String(n) : `${n}/${d}`; };
const vB_dec = x => String(Math.round(x * 1e6) / 1e6).replace('.', ',');
// Nombre de carreaux d'un motif : formule fermée (premier terme + écart constant)
const vB_motif = (shape, n) => ({ L: 2 * n + 1, croix: 4 * n + 1, T: 3 * n + 1, double: 2 * n + 2 })[shape];
module.exports = {
  '6N6.shaded': v => vB_fr(v.a, v.r * v.c),
  '6N6.dec2frac': v => vB_dec(v.N / 100 * v.d),
  '6N6.maxnum': v => { if (v.below) { let n = 0; while ((n + 1) < v.kk * v.d) n++; return String(n); } let n = 0; while (n <= v.kk * v.d) n++; return String(n); },
  '6N6.unitlen': v => vB_dec(v.x * v.b / v.a),
  '6N6.round10': v => { const c = Math.floor(v.a * 100 / v.b); const t = Math.floor(c / 10) + (c % 10 >= 5 ? 1 : 0); return vB_dec(t / 10); },
  '6N7.ofunit': v => vB_dec(v.tot * v.a / v.b),
  '6N7.complete1': v => vB_fr(v.b - v.a, v.b),
  '6N7.subint': v => vB_fr(v.n * v.b - v.a, v.b),
  '6N7.whole2': v => vB_dec(v.R / (1 - v.a / v.b)),
  '6N7.tank': v => vB_dec(v.V / v.a * v.b - v.V),
  '6N8.prog1': v => vB_dec(v.add ? v.x * v.a + v.b : v.x * v.a - v.b),
  '6N8.seq': v => { const t = v.terms; return String(2 * t[t.length - 1] - t[t.length - 2]); },
  '6N8.motif': v => String(vB_motif(v.shape, v.n)),
  '6N8.think1': v => vB_dec(v.op === 'add' ? v.r - v.a : v.op === 'sub' ? v.r + v.a : v.op === 'mul' ? v.r / v.a : v.r * 2),
  '6N8.seqgap': v => { const s = v.shown; const i = s.indexOf(null); const known = s.map((x, j) => [j, x]).filter(p => p[1] !== null); const [j0, x0] = known[0], [j1, x1] = known[known.length - 1]; return vB_dec(x0 + (x1 - x0) / (j1 - j0) * (i - j0)); },
  '6N8.hole2': v => vB_dec((v.c - v.b) / v.a),
  '6N8.sumdiff': v => vB_dec(v.askBig ? (v.S + v.D) / 2 : (v.S - v.D) / 2),
  '6N8.twoprogs': v => { for (let x = 0; x <= 1000; x++) if (v.a * x + v.b === v.c * x + v.d) return String(x); return 'aucun'; },
  '6N8.motifrev': v => { for (let n = 1; n < 1000; n++) if (vB_motif(v.shape, n) === v.N) return String(n); return 'aucun'; },
  '6P1.tab': v => { const j = [0, 1, 2].find(i => v.r1[i] !== null && v.r2[i] !== null); const k = v.r2[j] / v.r1[j]; const i = [0, 1, 2].find(x => v.r1[x] === null || v.r2[x] === null); return vB_dec(v.r1[i] === null ? v.r2[i] / k : v.r1[i] * k); },
  '6P1.pctsimple': v => vB_dec(v.N * v.p / 100),
  '6P1.addlin': v => vB_dec(v.A / v.a * (v.a + v.b)),
  '6P1.pctfind': v => vB_dec(v.M / v.N * 100),
  '6P1.pctinc': v => vB_dec(v.N * (1 + v.p / 100)),
  '6P1.recipeinv': v => vB_dec(v.Q * v.p / v.q),
  '6P1.speed': v => vB_dec(v.D / v.m1 * v.m2),
  '6P1.pctcmp': v => vB_dec(Math.max(v.a1 / v.n1, v.a2 / v.n2) * 100)
};
  return module.exports;
})());
// --- Vérificateurs des familles ajoutées / révisées, groupe C (audit 2026-10-31) ---
Object.assign(VERIFIERS, (function () {
  const module = { exports: {} };
// ----- Vérificateurs indépendants des familles ajoutées/réécrites : 6M1, 6M2, 6M3, 6M4, 6G1 -----
const vC_r = x => Math.round(x * 1e6) / 1e6;
const vC_ans = x => String(vC_r(x)).replace('.', ',');
// périmètre d'une figure en colonnes : on compte les arêtes de carreaux frontières
const vC_per = hs => {
  const filled = (i, k) => i >= 0 && i < hs.length && k >= 0 && k < hs[i];
  let p = 0;
  hs.forEach((h, i) => { for (let k = 0; k < h; k++) for (const [di, dk] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) if (!filled(i + di, k + dk)) p++; });
  return p;
};
const vC_unit = u => ({ 'm³': '$\\text{m}^3$', 'm²': '$\\text{m}^2$', 'cm²': '$\\text{cm}^2$', 'mm²': '$\\text{mm}^2$', 'km²': '$\\text{km}^2$' }[u] || `$\\text{${u}}$`);
module.exports = {
  '6M1.gridper': v => vC_per(v.hs),
  '6M1.demidisque': v => vC_ans(Math.round((v.d + 3.14 * v.d / 2) * 1000) / 1000),
  '6M1.tours': v => { let n = 0; const tour = Math.round(314 * v.d) / 100; while ((n + 1) * tour <= v.Dm * 100 + 1e-9) n++; return n; },
  '6M2.gridaire': v => v.hs.reduce((s, x) => s + x, 0),
  '6M2.unite': v => vC_unit(v.u),
  '6M2.cmpfig': v => {
    const R = v.ask === 'aire' ? v.a * v.b : 2 * v.a + 2 * v.b;
    const C = v.ask === 'aire' ? v.c * v.c : 4 * v.c;
    return R > C ? 'le rectangle' : R < C ? 'le carré' : 'ils sont égaux';
  },
  '6M2.per2aire': v => (v.P / 4) * (v.P / 4),
  '6M2.trapeze': v => vC_ans(((2 * v.a + v.b) * v.h) / 2), // aire du trapèze rectangle (bases a et a+b)
  '6M3.unite': v => vC_unit(v.u),
  '6M3.compare': v => Math.abs(v.A.reduce((p, x) => p * x, 1) - v.B.reduce((p, x) => p * x, 1)),
  '6M3.arete': v => { let a = 1; while (a * a * a < v.V) a++; return a; },
  '6M3.boiteL': v => vC_ans(v.L * v.l * v.h / 1000),
  '6M3.compose': v => v.b * (v.a * v.h1 + v.c * v.h2),
  '6M3.verres': v => (v.L * v.l * v.h) / (10 * v.verre),
  '6M3.agrandir': v => (v.ask === 'vol' ? Math.pow(v.kf * v.a, 3) : Math.pow(v.kf, 3)),
  '6M3.immersion': v => vC_ans(Math.pow(v.a, 3) / (v.L * v.l)),
  '6M4.samehour': v => v.e - v.s,
  '6M4.semaines': v => 7 * v.w + v.d,
  '6M4.seances': v => v.n * v.c + v.x,
  '6M4.calendrier': v => v.d2 - v.d1,
  '6M4.bus': v => v.tj - v.ti,
  '6M4.edt': v => (v.e - v.s - v.r) / v.n,
  '6M4.chrono': v => v.et - v.st,
  '6M4.escale': v => (v.a - v.s) - v.esc,
  '6M4.frach': v => 60 * v.f1[0] / v.f1[1] + 60 * v.f2[0] / v.f2[1],
  '6G1.quadri': v => ['un rectangle (non carré)', 'un losange (non carré)', 'un carré'][v.kind],
  '6G1.droites': v => ['parallèles', 'perpendiculaires', 'parallèles'][v.kind],
  '6G1.diagrect': v => vC_ans(v.mode === 'half' ? v.x / 2 : v.x),
  '6G1.milieux2': v => (v.ask === 'AC' ? 2 * v.y : 2 * v.y - v.a),
  '6G1.cercledroite': v => (v.h < v.r ? 2 : v.h === v.r ? 1 : 0)
};
  return module.exports;
})());
// --- Vérificateurs des familles ajoutées / révisées, groupe D (audit 2026-10-31) ---
Object.assign(VERIFIERS, (function () {
  const module = { exports: {} };
// Vérificateurs indépendants des nouvelles familles 6G2 à 6G5 (groupe D)
'use strict';
const vD_dec = x => String(Math.round(x * 1e6) / 1e6).replace('.', ',');
const vD_sum = a => a.reduce((s, v) => s + v, 0);
// Pliage d'un patron (cases [c, r]) par roulement : renvoie la face du cube (U, D, N, S, E, W) de chaque case, ou null.
const vD_fold = cells => {
  const key = p => p[0] + ',' + p[1];
  const idx = new Map(cells.map((p, i) => [key(p), i]));
  const face = Array(cells.length).fill(null);
  face[0] = { U: 'U', D: 'D', N: 'N', S: 'S', E: 'E', W: 'W' };
  const stack = [0];
  const rolls = [
    [1, 0, o => ({ D: o.E, E: o.U, U: o.W, W: o.D, N: o.N, S: o.S })],
    [-1, 0, o => ({ D: o.W, W: o.U, U: o.E, E: o.D, N: o.N, S: o.S })],
    [0, 1, o => ({ D: o.S, S: o.U, U: o.N, N: o.D, E: o.E, W: o.W })],
    [0, -1, o => ({ D: o.N, N: o.U, U: o.S, S: o.D, E: o.E, W: o.W })]
  ];
  while (stack.length) {
    const i = stack.pop();
    for (const [dx, dy, f] of rolls) {
      const j = idx.get(key([cells[i][0] + dx, cells[i][1] + dy]));
      if (j === undefined || face[j]) continue;
      face[j] = f(face[i]); stack.push(j);
    }
  }
  if (face.some(f => !f)) return null;
  const down = face.map(f => f.D);
  return new Set(down).size === 6 ? down : null;
};
const vD_opp = { U: 'D', D: 'U', N: 'S', S: 'N', E: 'W', W: 'E' };

module.exports = {
  '6G2.lettres': v => {
    // lettres capitales bâton possédant au moins un axe (vertical ou horizontal)
    const vert = new Set('AHIMOTUVWXY'), horiz = new Set('BCDEHIKOX');
    return String(v.list.filter(l => vert.has(l) || horiz.has(l)).length);
  },
  '6G2.distaxe': v => vD_dec(v.x / 2),
  '6G2.carreaux': v => String(new Set(v.cells.map(c => c.join(','))).size * 2),
  '6G2.repere': v => String(v.a + (v.a - v.x)),
  '6G2.angtri': v => String(180 - v.a - v.b),
  '6G2.deuxsym': v => { const A = -v.x, A1 = -A, A2 = 2 * v.e - A1; return String(Math.abs(A2 - A)); },
  '6G2.polyreg': v => String(v.n),
  '6G3.rapp': v => String(v.x),
  '6G3.compte': v => String(v.list.filter(x => (v.kind === 'aigus' ? x > 0 && x < 90 : x > 90 && x < 180)).length),
  '6G3.droit': v => String(90 - v.x),
  '6G3.bissadj': v => vD_dec(v.a + v.b / 2),
  '6G3.plat3': v => String(180 - (v.a + v.b)),
  '6G3.deuxbiss': v => vD_dec(v.a / 2 + v.b / 2),
  '6G3.tour': v => vD_dec(v.m * (360 / v.n)),
  '6G4.isoper': v => String(v.x + v.x + v.b),
  '6G4.equicote': v => vD_dec(v.per / 3),
  '6G4.compas': v => `un arc de cercle de centre $${v.P}$ et de rayon $${v.ac}$ cm`,
  '6G4.relation': v => String(180 - v.x - v.m * v.x),
  '6G4.ineg': v => {
    // l'unique option donnant un triangle non aplati
    const ok = c => { const s = [v.a, v.b, c].sort((p, q) => p - q); return s[2] < s[0] + s[1]; };
    if (!ok(v.good)) return 'incohérent';
    return `$${v.good}$ cm`;
  },
  '6G4.isorel': v => vD_dec(180 / (v.m + 2)),
  '6G4.entiers': v => {
    const vals = [];
    for (let c = 1; c < 100; c++) { const s = [v.a, v.b, c].sort((p, q) => p - q); if (s[2] < s[0] + s[1]) vals.push(c); }
    return String(v.ask === 'max' ? Math.max(...vals) : v.ask === 'min' ? Math.min(...vals) : vals.length);
  },
  '6G5.solide': v => ['un cube', 'un pavé droit', 'un cylindre', 'une pyramide', 'un cône', 'une boule', 'un prisme droit'][v.i],
  '6G5.aretescube': v => vD_dec(v.a * 12),
  '6G5.patron': v => {
    const ok = v.nets.map(n => vD_fold(n) !== null);
    if (ok.filter(Boolean).length !== 1) return 'incohérent';
    return `la figure ${ok.indexOf(true) + 1}`;
  },
  '6G5.verscube': v => { const m = Math.max(v.a, v.b, v.c); return String(Math.pow(m, 3) - v.a * v.b * v.c); },
  '6G5.de': v => {
    const down = vD_fold(v.cells);
    if (!down) return 'incohérent';
    const hole = v.texts.indexOf('?');
    const opp = down.indexOf(vD_opp[down[hole]]);
    return String(7 - Number(v.texts[opp]));
  },
  '6G5.cotee': v => {
    if (v.ask === 'total') return String(vD_sum(v.h.map(vD_sum)));
    let s = 0;
    for (let c = 0; c < v.h[0].length; c++) s += Math.max(...v.h.map(r => r[c]));
    return String(s);
  },
  '6G5.maxvues': v => { let t = 0; v.f.forEach(a => v.s.forEach(b => { t += a < b ? a : b; })); return String(t); },
  '6G5.airepatron': v => String(2 * v.L * v.l + 2 * v.l * v.h + 2 * v.L * v.h),
  '6G5.visibles': v => {
    // simulation : chaque cube a 6 faces ; on retire les faces collées et posées sur la table
    let visible = 6 * v.n - 2 * (v.n - 1);
    visible -= v.kind === 'pile' ? 1 : v.n;
    return String(visible);
  }
};
  return module.exports;
})());
// --- Vérificateurs des familles ajoutées / révisées, groupe A (audit 2026-10-31) ---
Object.assign(VERIFIERS, (function () {
  const module = { exports: {} };
// Vérificateurs indépendants des nouvelles familles 6N1 à 6N5 (groupe A)
'use strict';
const r6 = x => Math.round(x * 1e6) / 1e6;
const ans = x => String(r6(x)).replace('.', ',');
const tex = x => {
  const v = r6(x); const neg = v < 0;
  const [ip, dp] = String(Math.abs(v)).split('.');
  return (neg ? '-' : '') + ip.replace(/\B(?=(\d{3})+(?!\d))/g, '\\,') + (dp ? `{,}${dp}` : '');
};
// Analyse indépendante d'un nombre écrit en lettres
const WV = { zéro: 0, un: 1, deux: 2, trois: 3, quatre: 4, cinq: 5, six: 6, sept: 7, huit: 8, neuf: 9, dix: 10, onze: 11, douze: 12, treize: 13, quatorze: 14, quinze: 15, seize: 16, vingt: 20, vingts: 20, trente: 30, quarante: 40, cinquante: 50, soixante: 60 };
function parseWords(s) {
  let total = 0, cur = 0, prev = '';
  for (const w of s.split(/[\s-]+/).filter(Boolean)) {
    if (w === 'et') continue;
    if ((w === 'vingt' || w === 'vingts') && prev === 'quatre') { cur += 76; prev = w; continue; }
    if (w === 'cent' || w === 'cents') cur = (cur || 1) * 100;
    else if (w === 'mille') { total += (cur || 1) * 1000; cur = 0; }
    else if (w === 'million' || w === 'millions') { total += cur * 1e6; cur = 0; }
    else if (w in WV) cur += WV[w];
    else throw new Error('mot inconnu ' + w);
    prev = w;
  }
  return total + cur;
}
// Orthographe (rectifiée) d'un nombre < 10 000, écrite indépendamment
function spell(n) {
  const U = 'zéro un deux trois quatre cinq six sept huit neuf dix onze douze treize quatorze quinze seize dix-sept dix-huit dix-neuf'.split(' ');
  const T = ['', '', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante', 'quatre-vingt', 'quatre-vingt'];
  const two = (x, last) => {
    if (x < 20) return U[x];
    const t = Math.floor(x / 10), u = x % 10;
    if (t === 7 || t === 9) return T[t] + (t === 7 && u === 1 ? '-et-' : '-') + U[10 + u];
    if (u === 0) return T[t] + (t === 8 && last ? 's' : '');
    return T[t] + (u === 1 && t !== 8 ? '-et-un' : '-' + U[u]);
  };
  const three = (x, last) => {
    const c = Math.floor(x / 100), r = x % 100;
    const out = [];
    if (c) out.push(c === 1 ? 'cent' : U[c] + '-cent' + (r === 0 && last ? 's' : ''));
    if (r) out.push(two(r, last));
    return out.join('-');
  };
  const th = Math.floor(n / 1000), rest = n % 1000;
  const out = [];
  if (th) out.push(th === 1 ? 'mille' : three(th, false) + '-mille');
  if (rest) out.push(three(rest, true));
  return out.join('-');
}
function perms(a) { if (a.length <= 1) return [a]; const o = []; a.forEach((x, i) => perms(a.slice(0, i).concat(a.slice(i + 1))).forEach(p => o.push([x].concat(p)))); return o; }

module.exports = {
  '6N1.valeur': v => {
    const s = String(v.m); // m = nombre × 1000, 7 chiffres
    const i = s.indexOf(String(v.d));
    const rank = s.length - 1 - i - 3; // exposant de 10
    return ans(v.d * Math.pow(10, rank));
  },
  '6N1.lettres': v => String(parseWords(v.words)),
  '6N1.enlettres': v => spell(v.n),
  '6N1.chiffres': v => {
    let best = null;
    for (const p of perms(v.ds)) {
      const x = parseInt(p.join(''), 10) / Math.pow(10, v.dec);
      if (best === null || (v.ask === 'grand' ? x > best : x < best)) best = x;
    }
    return ans(best);
  },
  '6N2.placer': v => {
    const target = v.s + v.j / 10;
    const hit = v.pts.filter(([, j]) => Math.abs(v.s + j / 10 - target) < 1e-9);
    return hit.length === 1 ? hit[0][0] : '??';
  },
  '6N2.intercale1': v => {
    const c = [];
    for (let x = Math.ceil(v.lo / 10); x * 10 < v.hi; x++) if (x * 10 > v.lo && x % 10 !== 0) c.push(x);
    return c.length === 1 ? ans(c[0] / 10) : '??';
  },
  '6N2.nbentre': v => {
    let c = 0;
    for (let x = v.a * 10 + 1; x < v.b * 10; x++) c++;
    return c;
  },
  '6N3.mental': v => ans((v.op === '+' ? v.a + v.d : v.a - v.d) / 100),
  '6N3.bonresultat': v => `$${tex(v.a / 10 + v.b / 100)}$`,
  '6N3.astuce': v => ans((v.op === '+' ? v.x + v.v : v.x - v.v) / v.den),
  '6N3.ticket': v => {
    const known = v.p.reduce((s, x, i) => (i === v.miss ? s : s + x), 0);
    return ans((v.p.reduce((s, x) => s + x, 0) - known) / 100);
  },
  '6N3.erreur': v => {
    const A = String(v.a), B = String(v.b * 10).padStart(A.length, '0');
    let nc = '';
    for (let i = 0; i < A.length; i++) nc += String((+A[i] + +B[i]) % 10);
    const shown = v.shown100 / 1000;
    const exact = (v.a + 10 * v.b) / 100;
    const close = x => Math.abs(x - shown) < 1e-9;
    if (close(exact)) return 'Aucune : le résultat est juste.';
    if (close((v.a + v.b) / 100)) return 'Les derniers chiffres ont été alignés au lieu des virgules.';
    if (close(exact / 10)) return 'La virgule du résultat est mal placée.';
    if (close(parseInt(nc, 10) / 100)) return 'Une retenue a été oubliée.';
    return '??';
  },
  '6N3.pyramide': v => ans((v.top - v.a - v.c) / 20),
  '6N3.magique': v => {
    const M = v.M;
    const S = M[0][0] + M[1][1] + M[2][2];
    const lines = [...M, ...[0, 1, 2].map(j => M.map(r => r[j]))];
    if (!lines.every(l => l.reduce((a, b) => a + b, 0) === S) || M[0][2] + M[1][1] + M[2][0] !== S) return '??';
    return ans((S - M[v.r].reduce((a, b, j) => (j === v.col ? a : a + b), 0)) / 10);
  },
  '6N4.moitie': v => ans(v.n100 / 100 / v.div),
  '6N4.aire': v => ans(v.L * v.l / 100),
  '6N4.div10': v => ans(v.tot10 / 10 / v.m),
  '6N4.distrib': v => ans(v.x10 * v.m / 10),
  '6N4.courses': v => ans((v.billet * 100 - v.pk * v.mk / 10 - v.n * v.pu) / 100),
  '6N4.carre': v => {
    const sq = (v.a * v.a) / (v.s * v.s);
    for (let i = 1; i < 10000; i++) if (Math.abs((i / 1000) * (i / 1000) - sq) < 1e-12) return ans(i / 1000);
    return '??';
  },
  '6N4.cmpprod': v => {
    const vals = v.F.map(f => v.N * f / 100);
    const best = v.ask === 'grand' ? Math.max(...vals) : Math.min(...vals);
    const f = v.F[vals.indexOf(best)];
    return `$${v.N} \\times ${tex(f / 100)}$`;
  },
  '6N5.tables': v => v.n / v.d,
  '6N5.nbmult': v => { let c = 0; for (let x = 1; x <= v.N; x++) if (x % v.d === 0) c++; return c; },
  '6N5.criteres': v => [2, 3, 5, 9, 10].filter(d => v.n % d === 0).length,
  '6N5.approche': v => {
    // division posée chiffre par chiffre
    let q = Math.floor(v.n / v.d), r = v.n % v.d, digs = [];
    const k = String(v.p).length - 1;
    for (let i = 0; i <= k; i++) { r *= 10; digs.push(Math.floor(r / v.d)); r %= v.d; }
    let kept = q * Math.pow(10, k) + digs.slice(0, k).reduce((s, d) => s * 10 + d, 0);
    if (digs[k] >= 5) kept += 1;
    return ans(kept / v.p);
  },
  '6N5.restes': v => {
    const sol = [];
    for (let x = v.lo; x < v.lo + v.a * v.b; x++) if (x % v.a === v.ra && x % v.b === v.rb) sol.push(x);
    return sol.length === 1 ? sol[0] : '??';
  }
};
  return module.exports;
})());
for (const f of (process.env.TEST6_EXTRA_VER || '').split(',').filter(Boolean)) {
  Object.assign(VERIFIERS, require(path.isAbsolute(f) ? f : path.join(ROOT, f)));
}

// ---------------------------------------------------------------------------
// Cohérence des indices (consigne du propriétaire) : nombres cités présents dans l’énoncé (ou constantes
// de cours), réponse jamais donnée, hint1 ≠ hint2.
// ---------------------------------------------------------------------------
// Règles de cohérence des indices (partagées par hintcheck6.js et test_6eme.js) : q -> [messages]
const HINT_CONST = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '12', '24', '60', '100', '1000', '10000', '90', '180', '360', '3,14', '0,1', '0,01', '0,001', '0,5', '50', '25', '20', '30', '365', '7', '3600', '1000000']);
function hClean(s) {
  return String(s == null ? '' : s).replace(/<svg[\s\S]*?<\/svg>/g, ' ').replace(/<[^>]+>/g, ' ')
    .replace(/\{,\}/g, ',').replace(/(\d)\\,(?=\d{3})/g, '$1').replace(/(\d)[   ](?=\d{3}\b)/g, '$1');
}
function hNums(s) { return (hClean(s).match(/\d+(?:,\d+)?/g) || []); }
function hCanon(n) { let s = n.replace(/^0+(?=\d)/, ''); if (s.includes(',')) s = s.replace(/0+$/, '').replace(/,$/, ''); return s; }
// Contrôle commun au collège (heuristique : nombres dérivés, objets étrangers, réponse livrée)
const { hintIssues, hintTemplate, familyKey } = require('./hint_checks.js');
function hintRules(q) {
  const errs = [];
  const h1 = String(q.hint1 || ''), h2 = String(q.hint2 || '');
  if (!h1.trim() || !h2.trim()) errs.push('indice manquant');
  if (h1.trim() && h1.trim() === h2.trim()) errs.push('hint1 = hint2');
  const ctx = [q.statement, ...(q.options || [])].join(' ');
  const ctxN = new Set(hNums(ctx).map(hCanon));
  const ans = q.type === 'mcq' ? null : String(q.answer);
  for (const [nm, h] of [['hint1', h1], ['hint2', h2]]) {
    const hn = hNums(h).map(hCanon);
    for (const n of hn) if (!ctxN.has(n) && !HINT_CONST.has(n)) { errs.push(`${nm} cite ${n}, absent de l'énoncé`); break; }
    if (q._hintLeakOk) continue;
    if (ans != null) {
      if (/^-?\d+(,\d+)?$/.test(ans) && hn.includes(hCanon(ans.replace('-', ''))) && !ctxN.has(hCanon(ans.replace('-', '')))) errs.push(`${nm} contient la réponse ${ans}`);
      const m = ans.match(/^(\d+)\/(\d+)$/);
      if (m && new RegExp(`\\\\frac\\{${m[1]}\\}\\{${m[2]}\\}|\\b${m[1]}/${m[2]}\\b`).test(h) && !new RegExp(`\\\\frac\\{${m[1]}\\}\\{${m[2]}\\}`).test(ctx)) errs.push(`${nm} contient la réponse ${ans}`);
    } else if (q.options) {
      const a = hClean(q.answer).replace(/\s+/g, '');
      if (a.length > 3 && hClean(h).replace(/\s+/g, '').includes(a) && !q.options.every(o => hClean(h).replace(/\s+/g, '').includes(hClean(o).replace(/\s+/g, '')))) errs.push(`${nm} contient l'option correcte`);
    }
  }
  return errs;
}
// ---------------------------------------------------------------------------
// 1. Structure
// ---------------------------------------------------------------------------
const G = window.MathsGenerators;
let chapters = (window.MATHS_CHAPTERS || []).filter(c => c.level === '6eme');
if (ONLY.length) chapters = chapters.filter(c => ONLY.includes(c.id));
const ids = chapters.map(c => c.id);
console.log(`Chapitres 6ème : ${ids.length} (${ids.join(', ')})`);
if (!ids.length) fail('structure', 'aucun chapitre de niveau 6eme');

const THIRD_PARTY_RE = new RegExp(['maths', 'et', 'tiques'].join('-'), 'i'); // aucune référence à un site tiers
const chapSrc = fs.readFileSync(path.join(ROOT, 'js/data/chapters.js'), 'utf8');
if (THIRD_PARTY_RE.test(chapSrc)) fail('chapters.js', 'mention de site tiers résiduelle');
for (const f of ['js/data/data_6eme.js', 'js/generators6e.js']) {
  if (fs.existsSync(path.join(ROOT, f)) && THIRD_PARTY_RE.test(fs.readFileSync(path.join(ROOT, f), 'utf8'))) fail(f, 'mention de site tiers');
}

let staticCount = 0, sheetCount = 0;
if (!GEN_ONLY) {
  const C6 = window.MATHS_COURSES_6E || {}, E6 = window.MATHS_EXERCISES_6E || {}, W6 = window.MATHS_WORKSHEETS_6E || {};
  for (const ch of chapters) {
    for (const k of ['id', 'level', 'domain', 'domainName', 'folder', 'num', 'title', 'shortTitle', 'icon', 'badge', 'color', 'description', 'skills']) {
      if (ch[k] === undefined || ch[k] === '') fail(`meta.${ch.id}`, `champ ${k} manquant`);
    }
    if (!['nombres', 'geometrie', 'fonctions', 'algo'].includes(ch.domain)) fail(`meta.${ch.id}`, `domaine inconnu ${ch.domain}`);
    const c = C6[ch.id];
    if (!c) { fail(`cours.${ch.id}`, 'cours absent'); continue; }
    if (window.MATHS_COURSES[ch.id] !== c) fail(`cours.${ch.id}`, 'non fusionné dans MATHS_COURSES');
    if (!c.title || !c.domain) fail(`cours.${ch.id}`, 'title/domain manquant');
    if (!Array.isArray(c.objectives) || c.objectives.length < 3) fail(`cours.${ch.id}`, 'objectifs < 3');
    if (!Array.isArray(c.keyPoints) || c.keyPoints.length < 2) fail(`cours.${ch.id}`, 'keyPoints < 2');
    if (!Array.isArray(c.methods) || c.methods.length < 1) fail(`cours.${ch.id}`, 'méthodes absentes');
    if (!Array.isArray(c.traps) || c.traps.length < 2) fail(`cours.${ch.id}`, 'erreurs fréquentes < 2');
    if (!Array.isArray(c.flashcards) || c.flashcards.length < 4) fail(`cours.${ch.id}`, 'flashcards < 4');
    (c.objectives || []).forEach((o, i) => checkText(o, `cours.${ch.id}.objectives[${i}]`));
    (c.keyPoints || []).forEach((kp, i) => { checkText(kp.title, `cours.${ch.id}.kp[${i}].title`); checkText(kp.content, `cours.${ch.id}.kp[${i}].content`); });
    (c.methods || []).forEach((m, i) => {
      if (!m.title || !m.example || !Array.isArray(m.steps) || !m.steps.length) fail(`cours.${ch.id}`, `méthode ${i} incomplète`);
      checkText(m.title, `cours.${ch.id}.m[${i}].title`); checkText(m.example, `cours.${ch.id}.m[${i}].example`);
      (m.steps || []).forEach((s, j) => checkText(s, `cours.${ch.id}.m[${i}].steps[${j}]`));
    });
    (c.traps || []).forEach((t, i) => checkText(t, `cours.${ch.id}.traps[${i}]`));
    (c.flashcards || []).forEach((f, i) => { if (!f.q || !f.a) fail(`cours.${ch.id}`, `flashcard ${i} incomplète`); checkText(f.q, `cours.${ch.id}.fc[${i}].q`); checkText(f.a, `cours.${ch.id}.fc[${i}].a`); });

    const ex = E6[ch.id];
    if (!Array.isArray(ex) || ex.length < 4 || ex.length > 6) fail(`exos.${ch.id}`, `4 à 6 exercices attendus (${ex ? ex.length : 0})`);
    else {
      if (window.MATHS_EXERCISES[ch.id] !== ex) fail(`exos.${ch.id}`, 'non fusionné dans MATHS_EXERCISES');
      const tiers = new Set(ex.map(e => e.tier));
      [1, 2, 3, 4].forEach(t => { if (!tiers.has(t)) fail(`exos.${ch.id}`, `palier ${t} non couvert`); });
      const seen = new Set();
      ex.forEach((e, i) => {
        staticCount++;
        const w = `exos.${ch.id}[${e.id || i}]`;
        if (seen.has(e.id)) fail(w, 'id dupliqué'); seen.add(e.id);
        if (e.chapterId !== ch.id) fail(w, 'chapterId incorrect');
        for (const k of ['id', 'title', 'statement', 'type', 'answer', 'hint1', 'solution', 'skill']) if (e[k] === undefined || e[k] === '') fail(w, `champ ${k} manquant`);
        if (e.type === 'mcq') {
          if (!Array.isArray(e.options) || e.options.length < 2) fail(w, 'options QCM');
          else if (e.options[e.correctIndex] !== e.answer) fail(w, 'correctIndex incohérent avec answer');
          else if (new Set(e.options).size !== e.options.length) fail(w, 'options dupliquées');
        } else if (e.type === 'exact') {
          if (!NUM_RE.test(String(e.answer)) && !/^[A-Za-zÀ-ÿ'’()-]+$/.test(String(e.answer))) fail(w, `réponse non canonique « ${e.answer} »`);
        } else fail(w, `type inconnu ${e.type}`);
        checkObjFields(e, w);
      });
    }
    (W6[ch.id] || []).forEach((s, i) => {
      sheetCount++;
      if (window.MATHS_WORKSHEETS[ch.id] !== W6[ch.id]) fail(`fiches.${ch.id}`, 'non fusionné');
      for (const k of ['id', 'filename', 'type', 'title', 'statement']) if (!s[k]) fail(`fiches.${ch.id}[${i}]`, `champ ${k}`);
      checkText(s.statement, `fiches.${ch.id}[${i}]`);
    });
  }
  if (!ONLY.length && sheetCount < 3) fail('fiches', `au moins 3 fiches attendues (${sheetCount})`);
}

// ---------------------------------------------------------------------------
// 2. Générateurs
// ---------------------------------------------------------------------------
let draws = 0, verified = 0;
const varietyReport = [];
for (const ch of chapters) {
  const fn = G && G['generate' + ch.id];
  if (typeof fn !== 'function') { fail(`gen.${ch.id}`, 'générateur absent'); continue; }
  for (let tier = 1; tier <= 4; tier++) {
    const stmts = new Set();
    const sharedHints = new Map();
    for (let r = 0; r < RUNS; r++) {
      const w = `gen.${ch.id}.t${tier}`;
      let q;
      try { q = fn.call(G, tier, 0); } catch (e) { fail(w, `exception ${e.message}`); continue; }
      draws++;
      if (!q || typeof q !== 'object') { fail(w, 'résultat vide'); continue; }
      if (q.chapterId !== ch.id) fail(w, `chapterId ${q.chapterId}`);
      if (q.tier !== tier) fail(w, `tier ${q.tier}`);
      for (const k of ['title', 'statement', 'answer', 'hint1', 'solution']) {
        if (q[k] === undefined || q[k] === null || q[k] === '') fail(w, `champ ${k} manquant`);
      }
      stmts.add(q.statement + '||' + (q.options ? q.options.slice().sort().join('|') : ''));
      checkObjFields(q, w);
      // Type et forme de la réponse
      if (q.type === 'mcq') {
        if (!Array.isArray(q.options) || q.options.length < 2) { fail(w, 'options QCM'); continue; }
        if (new Set(q.options.map(norm)).size !== q.options.length) fail(w, `options dupliquées ${JSON.stringify(q.options)}`);
        if (q.options[q.correctIndex] !== q.answer) fail(w, 'correctIndex incohérent avec answer');
      } else if (q.type === 'exact') {
        const a = String(q.answer);
        if (!(NUM_RE.test(a) || /^[A-Za-zÀ-ÿ'’-]+$/.test(a) || /^\(-?\d+(,\d+)?;-?\d+(,\d+)?\)$/.test(a))) fail(w, `réponse non canonique « ${a} »`);
        if (/\.\d/.test(a)) fail(w, `point décimal dans la réponse « ${a} »`);
        if (/^-?\d+\/\d+$/.test(a)) { const [n, d] = a.replace('-', '').split('/').map(Number); if (gcd(n, d) !== 1 || d === 1) fail(w, `fraction non irréductible « ${a} »`); }
        if (/^-?0\d/.test(a) || /,\d*0$/.test(a)) fail(w, `zéros inutiles « ${a} »`);
      } else fail(w, `type inconnu ${q.type}`);
      for (const e of hintRules(q)) fail(`${w}.indices`, `${e} | ${(q._v && q._v.k) || q.title}`);
      for (const e of hintIssues(q)) fail(`${w}.indices`, `${e.kind} ${e.msg} | ${(q._v && q._v.k) || q.title}`);
      { const ht = hintTemplate(q.hint1 || ''); if (ht) { if (!sharedHints.has(ht)) sharedHints.set(ht, new Set()); sharedHints.get(ht).add(familyKey(q)); } }
      // Vérification indépendante
      if (!q._v || !q._v.k) { fail(w, 'champ _v manquant'); continue; }
      const vf = VERIFIERS[q._v.k];
      if (typeof vf !== 'function') { fail(w, `vérificateur absent pour ${q._v.k}`); continue; }
      let expected;
      try { expected = vf(q._v, q); } catch (e) { fail(w, `vérificateur ${q._v.k} : ${e.message}`); continue; }
      if (q.type === 'mcq') {
        const matches = q.options.filter(o => sameAnswer(o, expected));
        if (matches.length !== 1) fail(w, `[${q._v.k}] ${matches.length} option(s) correcte(s) pour attendu « ${expected} » : ${JSON.stringify(q.options)} | ${q.statement.slice(0, 160)}`);
        else if (!sameAnswer(q.answer, expected)) fail(w, `[${q._v.k}] réponse « ${q.answer} » ≠ attendu « ${expected} » | ${q.statement.slice(0, 160)}`);
        else verified++;
      } else {
        if (!sameAnswer(q.answer, expected)) fail(w, `[${q._v.k}] réponse « ${q.answer} » ≠ attendu « ${expected} » | ${q.statement.slice(0, 200)}`);
        else verified++;
      }
    }
    for (const [ht, fams] of sharedHints) if (fams.size > 1) console.warn(`[AVERTISSEMENT] gen.${ch.id}.t${tier} : hint1 partagé par ${[...fams].join(', ')} « ${ht.slice(0, 70)} »`);
    if (stmts.size < MIN_DISTINCT) fail(`gen.${ch.id}.t${tier}`, `variété insuffisante : ${stmts.size} énoncés distincts / ${RUNS}`);
    varietyReport.push(`${ch.id}.t${tier}:${stmts.size}`);
  }
  // Intégration via generateForChapter (si le repli this['generate'+id] est présent)
  try {
    const q = G.generateForChapter(ch.id, 2);
    if (q && q.chapterId !== ch.id) console.warn(`[INFO] generateForChapter('${ch.id}') ne route pas encore vers generate${ch.id} (repli à câbler).`);
  } catch (e) { fail(`gen.${ch.id}`, `generateForChapter : ${e.message}`); }
}

console.log(`\nVariété (énoncés distincts / ${RUNS}) : ${varietyReport.join('  ')}`);
console.log(`Exercices statiques : ${staticCount} · fiches : ${sheetCount}`);
console.log(`Tirages : ${draws} · réponses vérifiées indépendamment : ${verified}`);
if (errors) {
  console.error(`\nÉCHEC : ${errors} erreur(s).`);
  for (const [k, n] of Object.entries(errorSamples)) if (n > 3) console.error(`  ${k} : ${n} occurrences`);
  process.exit(1);
}
console.log('\nOK : 0 erreur.');
