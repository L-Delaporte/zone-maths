#!/usr/bin/env node
/**
 * Test des générateurs procéduraux Lycée (2nde, 1re, Tle) et Licence (L1, L2, L3).
 *
 * Usage (depuis n'importe où) :
 *   node scripts/tests/test_lycee_licence_generators.js [--n=200] [--only=REGEX] [--min-variety=10]
 *                                                       [--load=fichier.js] [--verify=fichier.js] [--samples]
 *
 * Pour chaque chapitre × palier (1 à 4) × N tirages, échoue (exit 1) sur :
 *   - exception, undefined / NaN / [object Object] / Infinity ;
 *   - formule KaTeX invalide (vendor/katex), délimiteurs $ non fermés, caractère de contrôle
 *     (barre oblique perdue dans une chaîne JS : \t, \b, \f, \v, \r) ;
 *   - commande LaTeX sans barre oblique (frac{, hat{, sqrt{, dots…) ou mots français en mode math ;
 *   - QCM : < 4 options, doublons, plusieurs options numériquement égales à la réponse, mauvais correctIndex ;
 *   - formatage : « 1x », « + - », « - - », « + 0 », « 0x », « ^1 », « \frac{a}{-b} », fractions non réduites,
 *     point décimal au lieu de la virgule ;
 *   - recalcul indépendant des familles vérifiables (table VERIFIERS) ;
 *   - saisie exacte (type 'exact') : réponse en texte brut, acceptée par MathsAdaptiveEngine.validateAnswer
 *     ainsi que des écritures équivalentes (décimal / fraction, « x = », point ou virgule, couple sans
 *     parenthèses, écriture scientifique) ; refus d'une valeur fausse et des distracteurs du QCM d'origine ;
 *     valeur identique à la réponse LaTeX d'origine (q.mcq) ; recalcul indépendant sur la forme QCM d'origine ;
 *     --mode=exact|mcq force la conversion (ou l'interdit) pour tester les deux formes ;
 *   - variété insuffisante : moins de --min-variety énoncés distincts sur N tirages (sauf palier renvoyant null,
 *     qui déclenche le repli sur la banque statique MATHS_EXERCISES).
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..');
const args = Object.fromEntries(process.argv.slice(2).map((a) => {
  const m = a.match(/^--([^=]+)(?:=(.*))?$/);
  return m ? [m[1], m[2] === undefined ? true : m[2]] : [a, true];
}));
const LOADS = process.argv.slice(2).filter((a) => a.startsWith('--load=')).map((a) => a.slice(7));
const VERIFY_FILES = process.argv.slice(2).filter((a) => a.startsWith('--verify=')).map((a) => a.slice(9));
const N = parseInt(args.n, 10) || 200;
const ONLY = args.only ? new RegExp(args.only) : null;
const MIN_VARIETY = args['min-variety'] !== undefined ? parseInt(args['min-variety'], 10) : 10;

// ---------------------------------------------------------------------------
// Environnement navigateur minimal
// ---------------------------------------------------------------------------
global.window = global;
global.localStorage = { getItem: () => null, setItem() {}, removeItem() {} };
global.sessionStorage = global.localStorage;
global.document = {
  addEventListener() {}, getElementById: () => null, querySelector: () => null, querySelectorAll: () => [],
  createElement: () => ({ style: {}, setAttribute() {}, appendChild() {}, classList: { add() {}, remove() {} } }),
  body: { appendChild() {} }, documentElement: { style: {} }
};
if (typeof navigator === 'undefined') global.navigator = { userAgent: 'node' };

const kctx = {};
vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'vendor/katex/katex.min.js'), 'utf8'), kctx);
const katex = kctx.katex;

// Ordre identique à index.html (seuls les fichiers utiles aux générateurs)
const FILES = [
  'js/data/chapters.js', 'js/data/chapters_lycee.js', 'js/data/chapters_licence.js', 'js/data/exercises.js',
  'js/data/data_2nde.js', 'js/data/data_1ere.js', 'js/data/data_terminale.js',
  'js/data/data_l1.js', 'js/data/data_l2.js', 'js/data/data_l3.js', 'js/data/data_capes.js', 'js/data/data_proofs.js',
  'js/advancedGenerators.js', 'js/lyceeGenerators.js', 'js/randomGenerators.js', 'js/adaptiveEngine.js'
];
for (const f of FILES) require(path.join(ROOT, f));
for (const f of LOADS) require(path.resolve(f));
const ADV = window.MathsAdvancedGenerators;
const ENGINE = window.MathsAdaptiveEngine;
if (args.mode === 'mcq' || args.mode === 'exact') window.MathsGenUtils.forceMode = args.mode;

// ---------------------------------------------------------------------------
// Outils
// ---------------------------------------------------------------------------
const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };

function mathChunks(str) {
  const out = []; const errs = []; let i = 0; let mode = null; let cur = '';
  while (i < str.length) {
    if (str[i] === '\\' && str[i + 1] === '$') { if (mode) cur += '\\$'; i += 2; continue; }
    if (str.substr(i, 2) === '$$') {
      if (mode === 'd') { out.push([cur, true]); cur = ''; mode = null; } else if (!mode) mode = 'd'; else errs.push('$$ dans du mode inline');
      i += 2; continue;
    }
    if (str[i] === '$') {
      if (mode === 'i') { out.push([cur, false]); cur = ''; mode = null; } else if (!mode) mode = 'i'; else cur += '$';
      i++; continue;
    }
    if (mode) cur += str[i];
    i++;
  }
  if (mode) errs.push('$ non fermé');
  return { out, errs };
}

const LATEX_CMDS = 'frac|dfrac|tfrac|sqrt|hat|bar|overline|underline|vec|dots|cdots|ldots|cdot|times|infty|mathbb|mathcal|mathrm|' +
  'mathbf|operatorname|lim|sum|prod|int|iint|oint|alpha|beta|gamma|delta|Delta|lambda|varepsilon|epsilon|theta|sigma|omega|' +
  'Omega|varphi|phi|mu|pi|ln|cos|sin|tan|exp|log|gcd|binom|left|right|begin|end|text|leq|geq|neq|le|ge|in|notin|subset|' +
  'cup|cap|emptyset|forall|exists|implies|iff|to|mapsto|pmatrix|langle|rangle|partial|nabla|det|ker|dim|sup|inf|max|min|' +
  'quad|qquad|approx|equiv|pmod|mid|nmid|circ|wedge|vee|neg|setminus|overrightarrow|widehat|underbrace|xrightarrow';
const NOBACKSLASH_RE = new RegExp(`(?<![\\\\a-zA-Z])(${LATEX_CMDS})\\{`);
const NOBACKSLASH_BARE_RE = /(?<![\\a-zA-Z])(frac|dfrac|sqrt|dots|cdots|ldots|cdot|times|infty|mathbb|mathcal|overline|lambda|varepsilon|alpha|beta|gcd|hat|sum|prod|binom|leq|geq|neq|implies|iff|forall|exists|emptyset|setminus|langle|rangle|nabla|partial)(?![a-zA-Z])/;

const kcache = new Map();
/** strictFrac : toute fraction non réduite est une erreur (réponse, options) ; sinon (énoncé, solution)
 *  seules les fractions non réduites qui ne sont pas suivies d'une simplification « = … » le sont. */
function checkStr(s, strictFrac = false) {
  const issues = [];
  if (typeof s !== 'string') return issues;
  const bt = s.match(/undefined|NaN|Infinity|\[object Object\]|\bnull\b|function\s*\(/);
  if (bt) issues.push('JETON:' + bt[0]);
  const cc = s.match(/.{0,15}[\x08\x0b\x0c\x09\x0d\x07].{0,15}/);
  if (cc) issues.push('CTRL(barre oblique perdue):' + JSON.stringify(cc[0]));
  const { out, errs } = mathChunks(s);
  errs.forEach((e) => issues.push('DELIM:' + e));
  // mode texte : commande LaTeX hors $…$
  const textOnly = s.replace(/\$\$[\s\S]*?\$\$|\$[^$]*\$/g, '');
  if (/\\(frac|sqrt|mathbb|times|le|ge|neq|in|infty)(?![a-zA-Z])/.test(textOnly)) issues.push('LATEX_HORS_MATH <<' + textOnly.slice(0, 80) + '>>');
  for (const [m, d] of out) {
    const k = m + '|' + d;
    let r = kcache.get(k);
    if (r === undefined) {
      try { katex.renderToString(m, { throwOnError: true, displayMode: d }); r = ''; } catch (e) { r = e.message.slice(0, 120); }
      kcache.set(k, r);
    }
    if (r) issues.push('KATEX:' + r + ' <<' + m.slice(0, 100) + '>>');
    if (/\n/.test(m)) issues.push('RETOUR_LIGNE_EN_MATH <<' + m.slice(0, 60) + '>>');
    const mm = m.replace(/\\(text|textbf|textit|mathrm|operatorname)\{[^}]*\}/g, '');
    const nb = mm.match(NOBACKSLASH_RE) || mm.match(NOBACKSLASH_BARE_RE);
    if (nb) issues.push('SANS_BACKSLASH:' + nb[1] + ' <<' + m.slice(0, 80) + '>>');
    // mots français en mode math
    const words = mm.replace(/\\(mathbb|mathcal|mathbf|mathfrak)\{[^}]*\}/g, '').replace(/\\[a-zA-Z]+/g, ' ');
    if (/[a-zàéèêç]{3,}\s+[a-zàéèêç]{2,}\s+[a-zàéèêç]{2,}/i.test(words) || /[éèàçù]/.test(words) || /(^|\s)(et|ou|donc|est|sont|car|avec|pour)\s/.test(' ' + words + ' ')) {
      issues.push('MOTS_EN_MATH <<' + m.slice(0, 80) + '>>');
    }
    // style
    const s1 = mm.match(/(^|[=+\-(\s{,;<>]|\\[a-z]+\s)1\s?([a-zA-Z])(?![a-zA-Z0-9{])/);
    if (s1 && !/\\(mathbb|mathcal)/.test(s1[0])) issues.push('STYLE:1x <<' + m.slice(0, 80) + '>>');
    if (/[+-]\s*-\s*[\d\\a-zA-Z(]|\+\s*\+|-\s*\+\s*\d|\+\s*-\s*\d/.test(mm.replace(/\\[a-zA-Z]+/g, 'C').replace(/\{,\}/g, '.')) ) {
      // tolère "\pm", "\mp" (remplacés), et "-(-" volontaire uniquement entre parenthèses
      issues.push('STYLE:+-/-- <<' + m.slice(0, 80) + '>>');
    }
    if (/\^\{?--/.test(mm)) issues.push('STYLE:^{--} <<' + m.slice(0, 80) + '>>');
    if (/[a-z)]\^1(?![0-9])|[a-z)]\^\{1\}/.test(mm)) issues.push('STYLE:^1 <<' + m.slice(0, 80) + '>>');
    if (/[+-]\s*0\s*[a-zA-Z(]|[+-]\s*0\s*($|[)=,;\]<>])|(^|[^0-9.,}])0[a-zA-Z]/.test(mm.replace(/\\[a-zA-Z]+/g, ' ').replace(/\{,\}/g, '.'))) issues.push('STYLE:+0/0x <<' + m.slice(0, 80) + '>>');
    for (const f of mm.matchAll(/\\[dt]?frac\{(-?\d+)\}\{(-?\d+)\}/g)) {
      const a = +f[1]; const b = +f[2];
      if (b === 0) issues.push('FRAC:/0 ' + f[0]);
      else if (b < 0) issues.push('FRAC:dénominateur négatif ' + f[0]);
      else if ((gcd(a, b) > 1 || b === 1) && (strictFrac || !/^\s*(=|\\approx)/.test(mm.slice(f.index + f[0].length)))) issues.push('FRAC:non réduite ' + f[0]);
    }
    if (/\d\.\d/.test(mm.replace(/\\[a-zA-Z]+/g, ''))) issues.push('STYLE:point_décimal <<' + m.slice(0, 60) + '>>');
  }
  return issues;
}

function numVal(s) {
  s = String(s).trim().replace(/^\$+|\$+$/g, '').trim();
  s = s.replace(/^[A-Za-z_\\{}'()0-9]*\s*(=|\\approx)\s*/, '').trim();
  let m;
  if ((m = s.match(/^(-?)\\[dt]?frac\{(-?\d+)\}\{(-?\d+)\}$/))) return (m[1] ? -1 : 1) * m[2] / m[3];
  if (/^-?\d+((\{,\}|[.,])\d+)?$/.test(s)) return parseFloat(s.replace('{,}', '.').replace(',', '.'));
  return null;
}

const FIELDS = ['title', 'skill', 'statement', 'question', 'answer', 'hint1', 'hint2', 'hint', 'solution', 'explanation'];
function checkQ(q) {
  const issues = [];
  if (typeof q !== 'object') return ['PAS_UN_OBJET'];
  for (const f of ['statement', 'answer', 'solution']) if (q[f] === undefined || q[f] === '') issues.push('CHAMP_MANQUANT:' + f);
  for (const f of FIELDS) if (q[f] != null) checkStr(String(q[f]), f === 'answer').forEach((x) => issues.push(f + ':' + x));
  if (q.type === 'mcq') {
    const o = q.options || [];
    o.forEach((x, i) => checkStr(String(x), true).forEach((y) => issues.push('opt' + i + ':' + y)));
    if (o.length < 4) issues.push('QCM:' + o.length + ' options');
    if (new Set(o.map((x) => String(x).replace(/\s+/g, ''))).size !== o.length) issues.push('QCM:options en double');
    if (q.correctIndex < 0 || o[q.correctIndex] !== q.answer) issues.push('QCM:correctIndex faux');
    const ca = numVal(q.answer);
    if (ca !== null) {
      o.forEach((x, i) => {
        const v = numVal(x);
        if (i !== q.correctIndex && v !== null && Math.abs(v - ca) < 1e-9) issues.push('QCM:distracteur numériquement égal à la réponse: ' + x);
      });
    }
    o.forEach((x) => { if (/^\$-?\d+\$$/.test(String(x).trim()) && !/^\$-?\d+(\{,\}\d+)?\$$/.test(String(q.answer).trim())) issues.push('QCM:distracteur synthétique nu ' + x); });
  } else if (q.type === 'exact') {
    if (/\$|\\/.test(String(q.answer))) issues.push('EXACT:réponse contenant du LaTeX: ' + q.answer);
  }
  return issues;
}

// ---------------------------------------------------------------------------
// Recalculs indépendants : clé 'CHAPITRE/T' ou 'CHAPITRE' -> fonction(q) renvoyant
//   - undefined / null : question vérifiée (ou famille non reconnue → comptée "non vérifiée")
//   - 'skip' : famille non vérifiable automatiquement
//   - true : vérifiée OK ; chaîne : message d'erreur
// Outils de parsing communs dans V.
// ---------------------------------------------------------------------------
const V = {
  gcd,
  /** Valeur d'un nombre LaTeX simple : "-\frac{3}{4}", "2{,}5", "-7" */
  val(s) {
    s = String(s).replace(/\s+/g, '').replace(/^\$|\$$/g, '');
    let m;
    if ((m = s.match(/^(-?)\\[dt]?frac\{(-?\d+)\}\{(\d+)\}$/))) return (m[1] ? -1 : 1) * m[2] / m[3];
    if ((m = s.match(/^(-?\d+)(?:\{,\}|[.,])(\d+)$/))) return parseFloat(m[1] + '.' + m[2]);
    if (/^[+-]?\d+$/.test(s)) return +s;
    return NaN;
  },
  /** Coefficients d'un polynôme formaté "3x^2 - x + 5" (variable v) -> {2:3, 1:-1, 0:5} */
  poly(s, v = 'x') {
    const out = {};
    const str = String(s).replace(/\s+/g, '').replace(/\$/g, '');
    const re = new RegExp(`([+-]?)(\\d+(?:\\{,\\}\\d+)?)?(${v}(?:\\^\\{?(\\d+)\\}?)?)?`, 'g');
    let m; let pos = 0;
    while (pos < str.length && (m = re.exec(str)) && m[0] !== '') {
      if (m.index !== pos) return null;
      pos = re.lastIndex;
      const sign = m[1] === '-' ? -1 : 1;
      const c = m[2] ? parseFloat(m[2].replace('{,}', '.')) : 1;
      const d = m[3] ? (m[4] ? +m[4] : 1) : 0;
      if (!m[2] && !m[3]) return null;
      out[d] = (out[d] || 0) + sign * c;
    }
    if (pos !== str.length) return null;
    return out;
  },
  near(a, b, eps = 1e-9) { return Math.abs(a - b) < eps * Math.max(1, Math.abs(a), Math.abs(b)); }
};

const VERIFIERS = {
  // ==== VERIFIERS: début (ajoutés par niveau) ====
  // ==== VERIFIERS: fin ====
};
// ---- recalculs ly2nde ----
{
// Recalculs indépendants — Seconde (2N1 … 2S3)
Object.assign(VERIFIERS, ((V) => {
  const gcd = V.gcd;
  // ---------- évaluation d'expressions LaTeX simples ----------
  function tex2js(t) {
    let s = String(t).replace(/\\left|\\right/g, '').replace(/\s+/g, '').replace(/\{,\}/g, '.');
    for (let k = 0; k < 6; k++) {
      s = s.replace(/\\[dt]?frac\{([^{}]*)\}\{([^{}]*)\}/g, '(($1)/($2))');
      s = s.replace(/\\sqrt\{([^{}]*)\}/g, 'Math.sqrt($1)');
    }
    s = s.replace(/\\times/g, '*').replace(/\\div/g, '/').replace(/\\cdot/g, '*');
    s = s.replace(/\^\{([^{}]*)\}/g, '^($1)');
    // puissances
    for (let k = 0; k < 4; k++) s = s.replace(/(\d+(?:\.\d+)?|x|\([^()]*\))\^(\d+|\([^()]*\))/g, 'Math.pow($1,$2)');
    // multiplications implicites
    s = s.replace(/(\d|\))(?=[x(M])/g, '$1*').replace(/x(?=[(xM\d])/g, 'x*');
    if (/[^0-9x+\-*/().,Mathpowsqrt]/.test(s)) throw new Error('tex2js: ' + t + ' -> ' + s);
    // eslint-disable-next-line no-new-func
    return new Function('x', 'return ' + s + ';');
  }
  const num = (t) => tex2js(t)(0);
  const near = (a, b) => Math.abs(a - b) < 1e-9 * Math.max(1, Math.abs(a));
  const math = (s) => [...String(s).matchAll(/\$([^$]*)\$/g)].map((m) => m[1]);
  // ---------- ensembles de réels ----------
  function parseSet(str) {
    let s = String(str).replace(/\$/g, '').replace(/^\s*S\s*=\s*/, '').replace(/\\mathcal\{D\}_f\s*=\s*/, '').replace(/\\left|\\right/g, '').trim();
    const parts = s.split('\\cup').map((p) => p.trim());
    const pieces = [];
    for (let p of parts) {
      if (p === '\\emptyset') continue;
      let m;
      if ((m = p.match(/^\\mathbb\{R\}\s*\\setminus\s*\\\{(.*)\\\}$/))) {
        const ex = m[1].split(';').map((x) => num(x.trim()));
        pieces.push((x) => !ex.some((e) => near(e, x)));
        continue;
      }
      if (p === '\\mathbb{R}') { pieces.push(() => true); continue; }
      if ((m = p.match(/^\\\{(.*)\\\}$/))) {
        const el = m[1].split(';').map((x) => num(x.trim()));
        pieces.push((x) => el.some((e) => near(e, x)));
        continue;
      }
      if ((m = p.match(/^([\[\]])(.*);(.*)([\[\]])$/))) {
        const lo = m[2].trim() === '-\\infty' ? -Infinity : num(m[2]);
        const hi = m[3].trim() === '+\\infty' ? Infinity : num(m[3]);
        const lc = m[1] === '[';
        const rc = m[4] === ']';
        pieces.push((x) => (lc ? x >= lo - 1e-12 : x > lo + 1e-12) && (rc ? x <= hi + 1e-12 : x < hi - 1e-12));
        continue;
      }
      throw new Error('parseSet: ' + p);
    }
    const pts = [];
    for (const m of s.matchAll(/-?\\frac\{\d+\}\{\d+\}|-?\d+(?:\{,\}\d+)?/g)) { try { pts.push(num(m[0])); } catch (e) { /* */ } }
    return { has: (x) => pieces.some((f) => f(x)), pts };
  }
  function sameSet(pred, setStr, extraPts = []) {
    const S = parseSet(setStr);
    const pts = [];
    for (let k = -2400; k <= 2400; k++) pts.push(k / 60);
    for (const p of [...S.pts, ...extraPts]) pts.push(p, p - 1e-6, p + 1e-6);
    for (const x of pts) {
      if (!!pred(x) !== !!S.has(x)) return `désaccord en x = ${x} (attendu ${!!pred(x)})`;
    }
    return true;
  }
  const cmp = (op) => ({ '\\le': (a, b) => a - b <= 1e-9, '<': (a, b) => a - b < -1e-9, '\\ge': (a, b) => a - b >= -1e-9, '>': (a, b) => a - b > 1e-9, '=': (a, b) => Math.abs(a - b) < 1e-9 }[op]);
  const ok = (v) => Number.isFinite(v) && Math.abs(v) < 1e8;
  const ineqPred = (expr) => {
    const m = expr.match(/^(.*?)(\\le|\\ge|<|>)(.*)$/);
    const f = tex2js(m[1]);
    const g = tex2js(m[3]);
    const c = cmp(m[2]);
    return (x) => { const a = f(x); const b = g(x); return ok(a) && ok(b) && c(a, b); };
  };
  const absToJs = (e) => e.replace(/\|([^|]*)\|/g, '(\\abs{$1})');
  const evalAbs = (e) => {
    const js = e.replace(/\|([^|]*)\|/g, (m0, inner) => `__ABS__(${inner})`);
    const parts = js.split('__ABS__');
    if (parts.length === 1) return tex2js(js);
    const m = js.match(/__ABS__\(([^)]*)\)/);
    const inner = tex2js(m[1]);
    return (x) => Math.abs(inner(x));
  };
  void absToJs;
  const primes = (n) => { const out = []; for (let p = 2; p * p <= n; p++) while (n % p === 0) { out.push(p); n /= p; } if (n > 1) out.push(n); return out; };
  const isPrime = (p) => p > 1 && primes(p).length === 1;
  const squarefree = (b) => { for (let k = 2; k * k <= b; k++) if (b % (k * k) === 0) return false; return true; };
  const ptc = (s, name) => { const m = s.match(new RegExp(`${name}\\((-?\\d+(?:\\{,\\}\\d+)?) ; (-?\\d+(?:\\{,\\}\\d+)?)\\)`)); return m ? [V.val(m[1]), V.val(m[2])] : null; };
  const colv = (s, name) => { const m = s.match(new RegExp(`${name}\\}?\\\\begin\\{pmatrix\\} (-?\\d+) \\\\\\\\ (-?\\d+|m) \\\\end\\{pmatrix\\}`)); return m ? [+m[1], m[2] === 'm' ? 'm' : +m[2]] : null; };

  const R = {};
  // ======================= 2N1 =======================
  R['2N1/1'] = (q) => {
    const A = q.statement.match(/A = (.*?)\$/)[1];
    let label;
    const v = num(A);
    const sq = A.match(/\\sqrt\{(\d+)\}/);
    if (sq && !Number.isInteger(Math.sqrt(+sq[1]))) label = 'RQ';
    else if (Number.isInteger(Math.round(v * 1e9) / 1e9) && Math.abs(v - Math.round(v)) < 1e-9) label = v >= 0 ? 'N' : 'Z';
    else {
      const f = A.match(/\\frac\{(\d+)\}\{(\d+)\}/);
      const d = +f[2] / gcd(+f[1], +f[2]);
      label = primes(d).every((p) => p === 2 || p === 5) ? 'D' : 'Q';
    }
    const map = { N: '$\\mathbb{N}$', Z: '$\\mathbb{Z}$', D: '$\\mathbb{D}$', Q: '$\\mathbb{Q}$', RQ: '$\\mathbb{R} \\setminus \\mathbb{Q}$' };
    return q.answer === map[label] || `attendu ${map[label]}`;
  };
  R['2N1/2'] = (q) => {
    const a = q.answer.replace(/\$/g, '');
    const m = a.match(/^(-?\d*)\\sqrt\{(\d+)\}$/);
    if (!m) return a === '0' || 'forme a√b attendue';
    const k = m[1] === '' ? 1 : m[1] === '-' ? -1 : +m[1];
    if (!squarefree(+m[2])) return 'b non sans facteur carré';
    const expr = q.statement.match(/: \$(?:B = )?(.*?)\$\.$/)[1];
    return near(num(expr), k * Math.sqrt(+m[2])) || 'valeur fausse';
  };
  R['2N1/3'] = (q) => {
    const wantDec = !/PAS/.test(q.statement);
    const good = q.options.filter((o) => {
      const m = o.match(/\\frac\{(\d+)\}\{(\d+)\}/);
      if (gcd(+m[1], +m[2]) !== 1) return false;
      const isDec = primes(+m[2]).every((p) => p === 2 || p === 5);
      return isDec === wantDec;
    });
    return (good.length === 1 && good[0] === q.answer) || 'nombre de bonnes options ≠ 1';
  };
  R['2N1/4'] = (q) => {
    if (/Irrationalité/.test(q.title)) return 'skip';
    if (/Décomposition/.test(q.title)) {
      const n = +q.statement.match(/de \$(\d+)\$/)[1];
      const fac = q.answer.replace(/\$/g, '').split('\\times').map((x) => x.trim().split('^').map(Number));
      const prod = fac.reduce((acc, [p, e]) => acc * p ** (e || 1), 1);
      return (prod === n && fac.every(([p]) => isPrime(p))) || 'décomposition fausse';
    }
    const m = q.statement.match(/\$(\d+) \\div (\d+)\$/);
    const f = q.answer.match(/\\frac\{(\d+)\}\{(\d+)\}/);
    return (f && +m[1] * +f[2] === +m[2] * +f[1] && gcd(+f[1], +f[2]) === 1) || 'fraction fausse';
  };
  // ======================= 2N2 =======================
  R['2N2'] = (q) => {
    const e = q.statement.match(/= (.*)\$\.$/)[1];
    const f = tex2js(e);
    const g = tex2js(q.answer.replace(/\$/g, ''));
    for (const x of [-3, -1, 0, 0.5, 2, 7]) if (!near(f(x), g(x))) return `différent en x = ${x}`;
    if (q.tier >= 3 && !/\)\(|\)\^2\(/.test(q.answer)) return 'pas factorisé';
    return true;
  };
  // ======================= 2N3 =======================
  R['2N3/1'] = (q) => sameSet(ineqChain(q.statement.match(/si \$(.*?)\$/)[1]), q.answer);
  function ineqChain(e) {
    const toks = e.split(/(\\le|\\ge|<|>)/).map((t) => t.trim());
    return (x) => {
      for (let i = 1; i < toks.length; i += 2) {
        const a = toks[i - 1] === 'x' ? x : num(toks[i - 1]);
        const b = toks[i + 1] === 'x' ? x : num(toks[i + 1]);
        if (!cmp(toks[i])(a, b)) return false;
      }
      return true;
    };
  }
  R['2N3/2'] = (q) => {
    if (/distance/.test(q.statement)) {
      const m = q.statement.match(/réels \$(-?\d+)\$ et \$(-?\d+)\$/);
      return +q.answer.replace(/\$/g, '') === Math.abs(+m[1] - +m[2]) || 'distance fausse';
    }
    const e = math(q.statement).pop();
    const m = e.match(/^\|x ([+-]) (\d+)\| (\\le|<|=) (\d+)$/);
    const c = m[1] === '-' ? +m[2] : -m[2];
    const r = +m[4];
    return sameSet((x) => cmp(m[3])(Math.abs(x - c), r), q.answer);
  };
  R['2N3/3'] = (q) => {
    const e = math(q.statement).pop();
    const m = e.match(/^\|x ([+-]) (\d+)\| (\\ge|>) (\d+)$/);
    const c = m[1] === '-' ? +m[2] : -m[2];
    return sameSet((x) => cmp(m[3])(Math.abs(x - c), +m[4]), q.answer);
  };
  R['2N3/4'] = (q) => {
    const I = parseSet(q.statement.match(/I = (.*?)\$/)[1]);
    const J = parseSet(q.statement.match(/J = (.*?)\$/)[1]);
    const inter = /\\cap J/.test(q.statement);
    return sameSet((x) => (inter ? I.has(x) && J.has(x) : I.has(x) || J.has(x)), q.answer, [...I.pts, ...J.pts]);
  };
  // ======================= 2N4 =======================
  R['2N4/1'] = (q) => {
    const e = q.statement.match(/: \$(.*) = 0\$/)[1];
    const f = tex2js(e);
    const c0 = f(0); const c1 = f(1); const cm = f(-1);
    const a = (c1 + cm) / 2 - c0; const b = (c1 - cm) / 2;
    const d = b * b - 4 * a * c0;
    const roots = d < -1e-12 ? [] : d < 1e-12 ? [-b / (2 * a)] : [(-b - Math.sqrt(d)) / (2 * a), (-b + Math.sqrt(d)) / (2 * a)];
    const el = q.answer.match(/\\\{(.*)\\\}/)[1].split(';').map((x) => num(x.trim()));
    if (el.length !== roots.length) return `nombre de solutions ${el.length} au lieu de ${roots.length}`;
    return roots.every((r) => el.some((x) => near(x, r))) || 'racines fausses';
  };
  for (const t of [2, 3, 4]) R['2N4/' + t] = (q) => sameSet(ineqPred(math(q.statement).pop()), q.answer);
  // ======================= 2A1 =======================
  R['2A1/1'] = (q) => {
    const f = tex2js(q.statement.match(/f\(x\) = (.*?)\$/)[1]);
    const m = q.answer.match(/f\((-?\d+)\) = (.*)\$/);
    return near(f(+m[1]), num(m[2])) || 'image fausse';
  };
  R['2A1/2'] = (q) => {
    const f = tex2js(q.statement.match(/f\(x\) = (.*?)\$/)[1]);
    const y = +q.statement.match(/(?:antécédent de|le nombre) \$(-?\d+)\$/)[1];
    if (/x = /.test(q.answer)) return near(f(num(q.answer.match(/x = (.*)\$/)[1])), y) || 'antécédent faux';
    const k = f(0);
    if (y < k) return q.answer === 'Aucun antécédent' || 'aucun attendu';
    if (y === k) return /^\$0\$/.test(q.answer) || '0 attendu';
    const r = Math.sqrt(y - k);
    return q.answer === `$${-r}$ et $${r}$` || 'antécédents faux';
  };
  for (const t of [3, 4]) {
    R['2A1/' + t] = (q) => {
      const f = tex2js(q.statement.match(/f\(x\) = (.*?)\$ \?/)[1]);
      return sameSet((x) => ok(f(x)), q.answer);
    };
  }
  // ======================= 2A2 =======================
  R['2A2/1'] = (q) => {
    const f = tex2js(q.statement.match(/f\(x\) = (.*?)\$/)[1]);
    const inc = f(1) > f(0);
    return (inc ? /croissante/.test(q.answer) && !/décroissante/.test(q.answer) : /^Strictement décroissante/.test(q.answer)) || 'sens faux';
  };
  R['2A2/2'] = (q) => {
    const f = tex2js(q.statement.match(/f\(x\) = (.*?)\$/)[1]);
    const c0 = f(0); const a = (f(1) + f(-1)) / 2 - c0; const b = (f(1) - f(-1)) / 2;
    const al = -b / (2 * a); const be = f(al);
    const m = q.answer.match(/^(Minimum|Maximum) \$(-?\d+)\$ atteint en \$x = (-?\d+)\$$/);
    return (m && (a > 0) === (m[1] === 'Minimum') && near(+m[2], be) && near(+m[3], al)) || 'extremum faux';
  };
  R['2A2/3'] = (q) => {
    const m = q.answer.match(/^\$(.*) ([<>]) (.*)\$$/);
    const u = num(m[1]); const v = num(m[3]);
    return (m[2] === '<' ? u < v : u > v) || 'comparaison fausse';
  };
  R['2A2/4'] = (q) => {
    const f = tex2js(q.statement.match(/f\(x\) = (.*?)\$/)[1]);
    const m = q.statement.match(/x \\in \[(-?\d+) ; (-?\d+)\]/);
    const a = +m[1]; const b = +m[2];
    let lo = Infinity; let hi = -Infinity;
    for (let i = 0; i <= 2000; i++) { const v = f(a + (b - a) * i / 2000); lo = Math.min(lo, v); hi = Math.max(hi, v); }
    if (a <= 0 && b >= 0) { const v = f(0); if (ok(v)) { lo = Math.min(lo, v); hi = Math.max(hi, v); } }
    const r = q.answer.match(/^\$(.*) \\le f\(x\) \\le (.*)\$$/);
    return (near(num(r[1]), lo) && near(num(r[2]), hi)) || 'encadrement faux';
  };
  // ======================= 2A3 =======================
  R['2A3/1'] = (q) => {
    const x = num(q.statement.match(/image de \$(.*?)\$/)[1]);
    const f = /racine/.test(q.title) ? Math.sqrt : /carré/.test(q.title) ? (t) => t * t : /cube/.test(q.title) ? (t) => t ** 3 : /inverse/.test(q.title) ? (t) => 1 / t : Math.sqrt;
    return near(num(q.answer.replace(/\$/g, '')), f(x)) || 'image fausse';
  };
  R['2A3/2'] = (q) => {
    const e = q.statement.match(/l'équation \$(.*?)\$/)[1];
    const m = e.match(/^(.*) = (.*)$/);
    const f = tex2js(m[1]);
    const k = num(m[2]);
    const roots = [];
    if (/x\^2/.test(m[1])) { if (k > 0) roots.push(-Math.sqrt(k), Math.sqrt(k)); else if (k === 0) roots.push(0); }
    else if (/x\^3/.test(m[1])) roots.push(Math.cbrt(k));
    else roots.push(1 / k);
    roots.forEach((r) => { if (!near(f(r), k)) throw new Error('racine'); });
    if (!roots.length) return q.answer === '$S = \\emptyset$' || 'vide attendu';
    const S = parseSet(q.answer);
    for (let x = -40; x <= 40; x += 1 / 60) if (S.has(x) && !roots.some((r) => near(r, x))) return 'solution en trop';
    return roots.every((r) => S.has(r)) || 'solution manquante';
  };
  R['2A3/3'] = (q) => sameSet(ineqPred(q.statement.match(/l'inéquation \$(.*?)\$/)[1]), q.answer);
  R['2A3/4'] = (q) => {
    const f = tex2js(q.statement.match(/f\(x\) = (.*?)\$/)[1]);
    const pts = [0.5, 1, 2, 3.3];
    const even = pts.every((x) => near(f(-x), f(x)));
    const odd = pts.every((x) => near(f(-x), -f(x)));
    const exp = even ? 'Paire' : odd ? 'Impaire' : 'Ni paire ni impaire';
    return q.answer === exp || `attendu ${exp}`;
  };
  // ======================= 2G1 =======================
  R['2G1/1'] = (q) => {
    const A = ptc(q.statement, 'A'); const B = ptc(q.statement, 'B'); const I = ptc(q.answer, 'I');
    return (near(I[0], (A[0] + B[0]) / 2) && near(I[1], (A[1] + B[1]) / 2)) || 'milieu faux';
  };
  R['2G1/2'] = (q) => {
    const A = ptc(q.statement, 'A'); const B = ptc(q.statement, 'B');
    const d = Math.hypot(B[0] - A[0], B[1] - A[1]);
    const r = q.answer.replace(/\$/g, '').split('=').pop().trim();
    const m = r.match(/^(\d*)\\sqrt\{(\d+)\}$/);
    if (m && !squarefree(+m[2])) return 'racine non simplifiée';
    return near(num(r), d) || 'distance fausse';
  };
  R['2G1/3'] = (q) => {
    const P = { A: ptc(q.statement, 'A'), B: ptc(q.statement, 'B'), C: ptc(q.statement, 'C') };
    const d2 = (u, w) => (P[u][0] - P[w][0]) ** 2 + (P[u][1] - P[w][1]) ** 2;
    const AB = d2('A', 'B'); const AC = d2('A', 'C'); const BC = d2('B', 'C');
    const right = AB + AC === BC ? 'A' : AB + BC === AC ? 'B' : AC + BC === AB ? 'C' : null;
    const iso = AB === AC ? 'A' : AB === BC ? 'B' : AC === BC ? 'C' : null;
    const exp = right && iso ? `Rectangle et isocèle en ${right}` : right ? `Rectangle en ${right} (non isocèle)` : iso ? `Isocèle en ${iso} (non rectangle)` : 'Ni rectangle ni isocèle';
    return q.answer === exp || `attendu ${exp}`;
  };
  R['2G1/4'] = (q) => {
    const A = ptc(q.statement, 'A'); const B = ptc(q.statement, 'B');
    if (/parallélogramme/.test(q.statement)) {
      const C = ptc(q.statement, 'C'); const D = ptc(q.answer, 'D');
      return (near(A[0] + C[0], B[0] + D[0]) && near(A[1] + C[1], B[1] + D[1])) || 'D faux';
    }
    const S = ptc(q.answer, "A'");
    return (near(S[0] + A[0], 2 * B[0]) && near(S[1] + A[1], 2 * B[1])) || "A' faux";
  };
  // ======================= 2G2 =======================
  R['2G2/1'] = (q) => {
    const A = ptc(q.statement, 'A'); const B = ptc(q.statement, 'B'); const v = colv(q.answer, 'AB');
    return (v[0] === B[0] - A[0] && v[1] === B[1] - A[1]) || 'AB faux';
  };
  R['2G2/2'] = (q) => {
    const u = colv(q.statement, 'u'); const v = colv(q.statement, 'v'); const w = colv(q.answer, 'w');
    const comb = q.statement.match(/\\vec\{w\} = (.*?)\$/)[1].replace(/\\vec\{u\}/, '*U').replace(/\\vec\{v\}/, '*W');
    const coef = (str, tag) => { const m = str.replace(/\s/g, '').match(new RegExp(`([+-]?\\d*)\\*${tag}`)); const c = m[1]; return c === '' || c === '+' ? 1 : c === '-' ? -1 : +c; };
    const k = coef(comb, 'U'); const m = coef(comb, 'W');
    return (w[0] === k * u[0] + m * v[0] && w[1] === k * u[1] + m * v[1]) || 'combinaison fausse';
  };
  R['2G2/3'] = (q) => {
    const u = colv(q.statement, 'u'); const v = colv(q.statement, 'v');
    if (v[1] === 'm') { const m = num(q.answer.match(/m = (.*)\$/)[1]); return near(u[0] * m - u[1] * v[0], 0) || 'm faux'; }
    const det = u[0] * v[1] - u[1] * v[0];
    return (det === 0 ? /^Oui/.test(q.answer) : /^Non/.test(q.answer) && q.answer.includes(`= ${det} `)) || 'colinéarité fausse';
  };
  R['2G2/4'] = (q) => {
    const A = ptc(q.statement, 'A'); const B = ptc(q.statement, 'B'); const C = ptc(q.statement, 'C');
    const det = (B[0] - A[0]) * (C[1] - A[1]) - (B[1] - A[1]) * (C[0] - A[0]);
    return (det === 0 ? /^Oui/.test(q.answer) : /^Non/.test(q.answer) && q.answer.includes(`= ${det} `)) || 'alignement faux';
  };
  // ======================= 2G3 =======================
  const lineFn = (eq) => { // "y = ..." ou "ax + by + c = 0" -> F(x,y) = 0
    if (/^y = /.test(eq)) { const f = tex2js(eq.slice(4)); return (x, y) => y - f(x); }
    const lhs = eq.replace(/ = 0$/, '');
    return (x, y) => tex2js(lhs.replace(/(\d)y/g, '$1*(' + y + ')').replace(/y/g, '(' + y + ')'))(x);
  };
  R['2G3/1'] = (q) => {
    const A = ptc(q.statement, 'A'); const B = ptc(q.statement, 'B');
    const F = lineFn(q.answer.replace(/\$/g, ''));
    return (near(F(A[0], A[1]), 0) && near(F(B[0], B[1]), 0)) || 'droite fausse';
  };
  R['2G3/2'] = (q) => {
    if (/vecteurs suivants/.test(q.statement)) {
      const eq = q.statement.match(/d : (.*?)\$/)[1];
      const F = lineFn(eq);
      const u = colv(q.answer, 'u');
      // F affine : F(u) - F(0) = a u0 + b u1 doit être nul
      return near(F(u[0], u[1]) - F(0, 0), 0) || 'vecteur non directeur';
    }
    const A = ptc(q.statement, 'A'); const u = colv(q.statement, 'u');
    const F = lineFn(q.answer.replace(/\$/g, ''));
    const nonConst = !near(F(1, 0) - F(0, 0), 0) || !near(F(0, 1) - F(0, 0), 0);
    return (nonConst && near(F(A[0], A[1]), 0) && near(F(A[0] + u[0], A[1] + u[1]), 0)) || 'équation fausse';
  };
  R['2G3/3'] = (q) => {
    const F = lineFn(q.statement.match(/d : (.*?)\$/)[1]);
    const on = q.options.filter((o) => { const P = ptc(o, 'M'); return near(F(P[0], P[1]), 0); });
    return (on.length === 1 && on[0] === q.answer) || 'nombre de points sur la droite ≠ 1';
  };
  R['2G3/4'] = (q) => {
    const e1 = q.statement.match(/d_1 : (.*?)\$/)[1]; const e2 = q.statement.match(/d_2 : (.*?)\$/)[1];
    const F1 = lineFn(e1); const F2 = lineFn(e2);
    const c1 = F1(0, 0); const a1 = F1(1, 0) - c1; const b1 = F1(0, 1) - c1;
    const c2 = F2(0, 0); const a2 = F2(1, 0) - c2; const b2 = F2(0, 1) - c2;
    const det = a1 * b2 - a2 * b1;
    if (!near(det, 0)) {
      const x = (-c1 * b2 + c2 * b1) / det; const y = (-a1 * c2 + a2 * c1) / det;
      return q.answer === `Sécantes en $(${x} ; ${y})$` || 'intersection fausse';
    }
    const conf = near(a1 * c2 - a2 * c1, 0) && near(b1 * c2 - b2 * c1, 0);
    return q.answer === (conf ? 'Confondues' : 'Strictement parallèles') || 'parallélisme faux';
  };
  // ======================= 2S1 =======================
  const meanCheck = (ans, mean) => {
    const m = ans.match(/\\bar\{x\} (=|\\approx) (-?\d+(?:\{,\}\d+)?)\$/);
    const v = V.val(m[2]);
    if (m[1] === '=') return near(v, mean) || 'moyenne exacte fausse';
    return (Math.abs(v - mean) <= 0.005 + 1e-9 && !near(v, mean)) || 'arrondi faux';
  };
  R['2S1/1'] = (q) => {
    if (/effectif\)/.test(q.statement)) {
      const pairs = [...q.statement.matchAll(/(\d+) : (\d+)/g)].map((m) => [+m[1], +m[2]]);
      const N = pairs.reduce((a, p) => a + p[1], 0);
      return meanCheck(q.answer, pairs.reduce((a, p) => a + p[0] * p[1], 0) / N);
    }
    const vals = q.statement.match(/suivante : ([\d ;]+)/)[1].split(';').map(Number);
    return meanCheck(q.answer, vals.reduce((a, b) => a + b, 0) / vals.length);
  };
  R['2S1/2'] = (q) => {
    const vals = q.statement.match(/série : ([\d ;]+)/)[1].split(';').map(Number).sort((a, b) => a - b);
    const n = vals.length;
    const med = n % 2 ? vals[(n - 1) / 2] : (vals[n / 2 - 1] + vals[n / 2]) / 2;
    return near(V.val(q.answer.match(/Me = (.*)\$/)[1]), med) || 'médiane fausse';
  };
  R['2S1/3'] = (q) => {
    const vals = q.statement.match(/valeurs : ([\d ;]+)/)[1].split(';').map(Number).sort((a, b) => a - b);
    const n = vals.length;
    // définition : plus petite valeur telle qu'au moins 25 % (75 %) des valeurs lui sont inférieures ou égales
    const quart = (p) => vals.find((v) => vals.filter((w) => w <= v).length >= p * n);
    const Q1 = quart(0.25); const Q3 = quart(0.75);
    const val = +q.answer.match(/= (-?\d+)\$/)[1];
    if (/Q_3 - Q_1 =/.test(q.answer)) return val === Q3 - Q1 || 'écart interquartile faux';
    if (/Q_1 =/.test(q.answer)) return val === Q1 || 'Q1 faux';
    return val === Q3 || 'Q3 faux';
  };
  R['2S1/4'] = (q) => {
    if (/groupe A/.test(q.statement)) {
      const m = q.statement.match(/groupe A de (\d+) élèves a une moyenne de (\d+), un groupe B de (\d+) élèves a une moyenne de (\d+)/).slice(1).map(Number);
      return meanCheck(q.answer, (m[0] * m[1] + m[2] * m[3]) / (m[0] + m[2]));
    }
    if (/minimum/.test(q.statement)) {
      const n = q.statement.match(/-?\d+/g).map(Number);
      const [mn, , q1, , q3, mx] = [n[0], 1, n[2], 3, n[4], n[5]];
      return +q.answer.replace(/\$/g, '') === (/étendue \?/.test(q.statement) ? mx - mn : q3 - q1) || 'indicateur faux';
    }
    const vals = q.statement.match(/série ([\d ;]+) a pour/)[1].split(';').map(Number);
    const n = vals.length; const S = vals.reduce((a, b) => a + b, 0); const E = Math.max(...vals) - Math.min(...vals);
    const mult = q.statement.match(/multiplie toutes les valeurs par (\d+)/);
    const add = q.statement.match(/on (ajoute|retranche) (\d+)/);
    const newMean = mult ? S * +mult[1] / n : (S + (add[1] === 'ajoute' ? 1 : -1) * +add[2] * n) / n;
    const newE = mult ? E * +mult[1] : E;
    const m = q.answer.match(/Moyenne \$(\\approx )?(-?\d+(?:\{,\}\d+)?)\$, étendue \$(\d+)\$/);
    return (Math.abs(V.val(m[2]) - newMean) <= 0.005 + 1e-9 && +m[3] === newE) || 'transformation fausse';
  };
  // ======================= 2S2 =======================
  R['2S2/1'] = (q) => {
    if (/P\(A\) = /.test(q.statement)) {
      const p = V.val(q.statement.match(/P\(A\) = (.*?)\$/)[1]);
      return near(V.val(q.answer.match(/= (.*)\$/)[1]), 1 - p) || 'contraire faux';
    }
    const cnt = (c) => { const m = q.statement.match(new RegExp(`(\\d+) boules? ${c}`)); return m ? +m[1] : 0; };
    const r = cnt('rouges?'); const b = cnt('bleues?'); const v = cnt('vertes?');
    const want = /soit rouge/.test(q.statement) ? r : b;
    return near(num(q.answer.replace(/\$/g, '')), want / (r + b + v)) || 'probabilité fausse';
  };
  R['2S2/2'] = (q) => {
    const g = (lab) => { const m = q.statement.match(new RegExp(`P\\(${lab}\\) = (.*?)\\$`)); return m ? V.val(m[1]) : null; };
    const pa = g('A'); const pb = g('B'); const pi = g('A \\\\cap B'); const pu = g('A \\\\cup B');
    const v = V.val(q.answer.match(/= (.*)\$/)[1]);
    if (pi !== null) return near(v, pa + pb - pi) || 'réunion fausse';
    return near(v, pa + pb - pu) || 'intersection fausse';
  };
  R['2S2/3'] = (q) => {
    const m = q.statement.match(/à (\d+) faces.*multiple de (\d+).*supérieur ou égal à (\d+)/).slice(1).map(Number);
    let c = 0;
    const union = /cup/.test(q.answer);
    for (let i = 1; i <= m[0]; i++) { const a = i % m[1] === 0; const b = i >= m[2]; if (union ? a || b : a && b) c++; }
    return near(num(q.answer.match(/= (.*)\$/)[1]), c / m[0]) || 'probabilité fausse';
  };
  R['2S2/4'] = (q) => {
    const m = q.statement.match(/(\d+) boules rouges et (\d+) boules bleues/);
    const r = +m[1]; const b = +m[2]; const T = r + b;
    const remise = /avec remise/.test(q.statement);
    // énumération exhaustive des tirages ordonnés
    const balls = [...Array(r).fill('R'), ...Array(b).fill('B')];
    let fav = 0; let tot = 0;
    for (let i = 0; i < T; i++) for (let j = 0; j < T; j++) {
      if (!remise && i === j) continue;
      tot++;
      const nR = (balls[i] === 'R') + (balls[j] === 'R');
      if (/deux boules rouges/.test(q.statement) ? nR === 2 : /même couleur/.test(q.statement) ? balls[i] === balls[j] : nR === 1) fav++;
    }
    return near(num(q.answer.replace(/\$/g, '')), fav / tot) || 'probabilité fausse';
  };
  // ======================= 2S3 =======================
  R['2S3/1'] = (q) => {
    if (/Conditions/.test(q.title)) {
      const n = +q.statement.match(/n = (\d+)/)[1]; const p = V.val(q.statement.match(/p = (.*?)\$/)[1]);
      const okc = n >= 25 && p >= 0.2 && p <= 0.8;
      return (okc ? /^Oui, car/.test(q.answer) : (n < 25 ? /n < 25/.test(q.answer) : /n'est pas compris/.test(q.answer))) || 'conditions mal évaluées';
    }
    const n = +q.statement.match(/n = (\d+)/)[1];
    return near(num(q.answer.replace(/\$/g, '')), 1 / Math.sqrt(n)) || '1/√n faux';
  };
  R['2S3/2'] = (q) => {
    const n = +q.statement.match(/n = (\d+)/)[1]; const p = V.val(q.statement.match(/p = (.*?)\$/)[1]);
    const m = q.answer.match(/\[(.*) ; (.*)\]/);
    return (near(V.val(m[1]), p - 1 / Math.sqrt(n)) && near(V.val(m[2]), p + 1 / Math.sqrt(n))) || 'intervalle faux';
  };
  R['2S3/3'] = (q) => {
    const p = V.val(q.statement.match(/p = (.*?)\$/)[1]);
    const n = +q.statement.match(/échantillon de (\d+)/)[1]; const k = +q.statement.match(/observe (\d+)/)[1];
    const I = q.statement.match(/est \$\[(.*) ; (.*)\]\$/);
    if (!near(V.val(I[1]), p - 1 / Math.sqrt(n)) || !near(V.val(I[2]), p + 1 / Math.sqrt(n))) return 'intervalle de l\'énoncé faux';
    const f = k / n;
    const fA = V.val(q.answer.match(/f = (.*?)\$/)[1]);
    if (!near(fA, f)) return 'fréquence fausse';
    const inside = f >= p - 1 / Math.sqrt(n) && f <= p + 1 / Math.sqrt(n);
    return (inside ? / appartient à/.test(q.answer) && !/n'appartient/.test(q.answer) : /n'appartient pas/.test(q.answer)) || 'décision fausse';
  };
  R['2S3/4'] = (q) => {
    if (/Python/.test(q.title)) return 'skip';
    const amp = V.val(q.statement.match(/égale à \$(.*?)\$/)[1]);
    const n = +q.answer.match(/n = (\d+)/)[1];
    return (2 / Math.sqrt(n) <= amp + 1e-12 && 2 / Math.sqrt(n - 1) > amp) || 'n minimal faux';
  };
  void evalAbs;
  return R;
})(V));
}
// ---- recalculs lyTA ----
{
// Recalculs indépendants TA1-TA7 (Terminale, analyse)
Object.assign(VERIFIERS, ((V) => {
  // ---- mini-évaluateur LaTeX -> JS ----
  function group(s, i) { // s[i] === '{' ; renvoie [contenu, indexAprès]
    let d = 0;
    for (let j = i; j < s.length; j++) {
      if (s[j] === '{') d++;
      else if (s[j] === '}') { d--; if (d === 0) return [s.slice(i + 1, j), j + 1]; }
    }
    throw new Error('accolade non fermée');
  }
  function toJs(t) {
    t = String(t).replace(/\\left|\\right|\\limits/g, '').replace(/\\[,;!]/g, '').replace(/\{,\}/g, '.')
      .replace(/\\times|\\cdot/g, '*').replace(/\\dfrac/g, '\\frac');
    let k;
    while ((k = t.indexOf('\\frac')) >= 0) {
      const [a, i1] = group(t, k + 5); const [b, i2] = group(t, i1);
      t = t.slice(0, k) + `((${a})/(${b}))` + t.slice(i2);
    }
    while ((k = t.indexOf('\\sqrt')) >= 0) {
      const [a, i1] = group(t, k + 5);
      t = t.slice(0, k) + `Q(${a})` + t.slice(i1);
    }
    t = t.replace(/\\ln/g, 'L').replace(/\\cos/g, 'C').replace(/\\sin/g, 'S').replace(/\\pi/g, 'P');
    while ((k = t.indexOf('^{')) >= 0) {
      const [a, i1] = group(t, k + 1);
      t = t.slice(0, k) + `**(${a})` + t.slice(i1);
    }
    t = t.replace(/\^([0-9a-z])/g, '**$1').replace(/[{]/g, '(').replace(/[}]/g, ')').replace(/\s+/g, '');
    t = t.replace(/([0-9a-z)UDYP])(?=[a-zA-Z(])/g, '$1*');
    t = t.replace(/(^|[(*/+-])-/g, '$1-1*');
    if (/\\/.test(t)) throw new Error('commande non gérée : ' + t);
    return t;
  }
  const fnCache = new Map();
  function ev(tex, vars = {}) {
    let f = fnCache.get(tex);
    if (!f) {
      const js = toJs(tex);
      f = new Function('x', 'n', 'k', 'm', 'U', 'D', 'Y', 'e', 'L', 'Q', 'C', 'S', 'P', `return (${js});`);
      fnCache.set(tex, f);
    }
    return f(vars.x, vars.n, vars.k, vars.m, vars.U, vars.D, vars.Y, Math.E, Math.log, Math.sqrt, Math.cos, Math.sin, Math.PI);
  }
  const strip = (s) => String(s).replace(/^\$|\$$/g, '');
  const rhs = (s) => { s = strip(s); const i = s.lastIndexOf('= '); return i >= 0 ? s.slice(i + 2) : s; };
  const near = (a, b, eps = 1e-6) => Math.abs(a - b) <= eps * Math.max(1, Math.abs(a), Math.abs(b));
  const mathIn = (s, re) => { const m = s.match(re); if (!m) throw new Error('motif introuvable ' + re); return m; };
  // valeur d'une option de limite : nombre, +/-Infinity ou null (texte)
  const limVal = (o) => { const r = rhs(o); if (r === '+\\infty') return Infinity; if (r === '-\\infty') return -Infinity; if (!/^\$/.test(o)) return null; return ev(r); };
  const sameLim = (v, w) => (v === Infinity || v === -Infinity || w === Infinity || w === -Infinity ? v === w : (w !== null && near(v, w, 1e-6)));
  function checkLim(q, val) { // val = limite recalculée (nombre ou ±Infinity, approximative si finie)
    const a = limVal(q.answer);
    const approx = (x) => (Number.isFinite(val) ? Math.abs(x - val) < 1e-3 * Math.max(1, Math.abs(val)) : x === val);
    if (!approx(a)) return `limite ${a} ≠ recalcul ${val}`;
    for (const o of q.options) if (o !== q.answer) { const w = limVal(o); if (w !== null && sameLim(a, w)) return 'option équivalente à la réponse : ' + o; }
    return true;
  }
  const numLim = (v) => (v > 1e5 ? Infinity : v < -1e5 ? -Infinity : v);
  // exactement une option vérifie le prédicat, et c'est la réponse
  function onlyAnswer(q, pred) {
    const ok = q.options.filter((o) => { try { return pred(o); } catch (e) { return false; } });
    if (ok.length !== 1 || ok[0] !== q.answer) return `options valides : ${JSON.stringify(ok)} (réponse ${q.answer})`;
    return true;
  }
  const deriv = (tex, x, h = 1e-5) => (ev(tex, { x: x + h }) - ev(tex, { x: x - h })) / (2 * h);
  const simpson = (tex, a, b, N = 2000) => {
    const h = (b - a) / N; let s = ev(tex, { x: a }) + ev(tex, { x: b });
    for (let i = 1; i < N; i++) s += (i % 2 ? 4 : 2) * ev(tex, { x: a + i * h });
    return s * h / 3;
  };
  const fOf = (st) => mathIn(st, /f\(x\) = ([^$]*)\$/)[1];

  return {
    // ---------------- TA1 ----------------
    TA1(q) {
      const st = q.statement;
      if (/\\sum_\{k=1\}/.test(st)) {
        const term = mathIn(st, /\\sum_\{k=1\}\^\{n\} \(([^)]*)\)/)[1]; const m = +mathIn(st, /S_\{(\d+)\}\$ \?/)[1];
        let S = 0; for (let k = 1; k <= m; k++) S += ev(term, { k });
        return +rhs(q.answer) === S ? true : `S = ${S}`;
      }
      if (/est divisible par/.test(st)) {
        const mm = mathIn(st, /\$(\d+)\^\{n\} ([+-]) (\d+)\$ est divisible par \$(\d+)\$/);
        const a = +mm[1]; const c = (mm[2] === '-' ? -1 : 1) * mm[3]; const d = +mm[4];
        for (let n = 0; n < 7; n++) if (((a ** n + c) % d + d) % d !== 0) return 'propriété fausse au rang ' + n;
        const target = { A: a * d, B: c * (1 - a) }; // a^{k+1} + c = a(dm - c) + c
        return onlyAnswer(q, (o) => {
          const r = mathIn(strip(o), /= (\d+)\((\d*)m ([+-]) (\d+)\)$/);
          const D = +r[1]; const A = r[2] === '' ? 1 : +r[2]; const B = (r[3] === '-' ? -1 : 1) * r[4];
          return D * A === target.A && D * B === target.B;
        });
      }
      if (/Bernoulli|multiplie les deux membres/.test(st)) {
        const mm = mathIn(st, /\$(\d+)\^\{n\} \\ge 1 \+ (\d+)n\$/); const B = +mm[1]; const a = +mm[2];
        if (B !== a + 1) return 'énoncé incohérent';
        return onlyAnswer(q, (o) => { const p = V.poly(strip(o).split('\\ge ')[1], 'k'); return p && p[1] === a * B && p[0] === B && Object.keys(p).length === 2; });
      }
      // suites récurrentes
      const u0s = mathIn(st, /u_0 = ([^$]*)\$/)[1]; const rec = mathIn(st, /u_\{n\+1\} = ([^$]*)\$/)[1].replace(/u_n/g, 'U');
      const u = [ev(u0s)]; for (let n = 0; n < 7; n++) u.push(ev(rec, { U: u[n], n }));
      if (/Que vaut \$u_(\d)\$/.test(st)) { const k = +st.match(/Que vaut \$u_(\d)\$/)[1]; return near(+rhs(q.answer), u[k]) ? true : `u_${k} = ${u[k]}`; }
      return onlyAnswer(q, (o) => u.every((v, n) => near(ev(rhs(o), { n }), v, 1e-9)));
    },
    // ---------------- TA2 ----------------
    TA2(q) {
      const st = q.statement;
      if (/u_\{n\+1\}/.test(st)) {
        let u = ev(mathIn(st, /u_0 = ([^$]*)\$/)[1]); const rec = mathIn(st, /u_\{n\+1\} = ([^$]*)\$/)[1].replace(/u_n/g, 'U');
        for (let i = 0; i < 2000; i++) u = ev(rec, { U: u });
        return checkLim(q, u);
      }
      if (/\\le u_n \\le/.test(st)) {
        const mm = mathIn(st, /\$([^$]*) \\le u_n \\le ([^$]*)\$/); const n = 1e7;
        const lo = ev(mm[1], { n }); const hi = ev(mm[2], { n });
        if (Math.abs(lo - hi) > 1e-5) return 'encadrement non resserré';
        return checkLim(q, lo);
      }
      if (/u_n \\(ge|le) /.test(st)) {
        const mm = mathIn(st, /u_n \\(ge|le) ([^$]*)\$/); const v = numLim(ev(mm[2], { n: 1e14 }));
        if (mm[1] === 'ge' && v !== Infinity) return 'minorant ne tendant pas vers +inf';
        if (mm[1] === 'le' && v !== -Infinity) return 'majorant ne tendant pas vers -inf';
        return checkLim(q, v);
      }
      const ex = mathIn(st, /u_n = ([^$]*)\$/)[1];
      const n = /\^\{n\}/.test(ex) ? 300 : 1e6;
      return checkLim(q, numLim(ev(ex, { n })));
    },
    // ---------------- TA3 ----------------
    TA3(q) {
      const st = q.statement;
      if (/si \$x < /.test(st)) {
        const mm = mathIn(st, /f\(x\) = ([^$]*)\$ si \$x < (-?\d+)\$ et \$f\(x\) = x\^2 \+ k\$/);
        const c = +mm[2]; const k = ev(mm[1], { x: c }) - c * c;
        return +rhs(q.answer) === k ? true : `k = ${k}`;
      }
      if (/asymptotes/.test(st)) {
        const mm = mathIn(st, /\\frac\{([^}]*)\}\{([^}]*)\}/); const num = V.poly(mm[1]); const den = V.poly(mm[2]);
        const a = num[1]; const c = -den[0]; const N = a * c + (num[0] || 0);
        if (N === 0) return 'fonction simplifiable';
        return q.answer === `$x = ${c}$ et $y = ${a}$` ? true : 'asymptotes';
      }
      if (/tend vers \$(-?\d+)\$ avec \$x ([<>])/.test(st)) {
        const mm = st.match(/tend vers \$(-?\d+)\$ avec \$x ([<>])/); const c = +mm[1]; const x = c + (mm[2] === '>' ? 1e-9 : -1e-9);
        return checkLim(q, numLim(ev(fOf(st), { x })));
      }
      if (/unique solution/.test(st)) {
        const P = V.poly(fOf(st)); const f = (x) => x ** 3 + (P[1] || 0) * x + (P[0] || 0);
        if (P[3] !== 1 || !(P[1] > 0)) return 'fonction non strictement croissante';
        const k = +mathIn(strip(q.answer), /^\[(-?\d+) ; /)[1];
        return f(k) < 0 && f(k + 1) > 0 ? true : 'pas de changement de signe';
      }
      if (/Combien de solutions/.test(st)) {
        const P = V.poly(fOf(st)); const m = +mathIn(st, /f\(x\) = (-?\d+)\$ admet/)[1];
        const p = P[1]; const r = (P[0] || 0) - m; const D = -(4 * p ** 3 + 27 * r * r);
        const n = D > 0 ? 3 : D === 0 ? 2 : 1;
        // cohérence des valeurs données
        const a = Math.sqrt(-p / 3); const g = (x) => x ** 3 + p * x + (P[0] || 0);
        if (!st.includes(`f(${-a}) = ${g(-a)}`) || !st.includes(`f(${a}) = ${g(a)}`)) return 'valeurs extrêmes fausses';
        return +rhs(q.answer) === n ? true : `${n} solutions`;
      }
      if (/\\lim_\{x \\to 0\}/.test(st)) {
        const ex = mathIn(st, /\\lim_\{x \\to 0\} ([^$]*)\$/)[1];
        return checkLim(q, ev(ex, { x: 1e-7 }));
      }
      if (/\\lim_\{x \\to \+\\infty\} e\^/.test(st)) {
        const ex = mathIn(st, /\\lim_\{x \\to \+\\infty\} ([^$]*)\$/)[1];
        return checkLim(q, ev(ex, { x: 1e9 }));
      }
      const dir = mathIn(st, /\\lim_\{x \\to ([+-])\\infty\}/)[1] === '+' ? 1 : -1;
      return checkLim(q, numLim(ev(fOf(st), { x: dir * 1e7 })));
    },
    // ---------------- TA4 ----------------
    TA4(q) {
      const st = q.statement;
      if (/Déterminer \$f''\(x\)\$/.test(st)) {
        const P = V.poly(fOf(st)); const exp = {};
        for (const d of Object.keys(P)) if (d >= 2) exp[d - 2] = P[d] * d * (d - 1);
        return onlyAnswer(q, (o) => { const A = V.poly(rhs(o)); return A && [0, 1, 2, 3].every((d) => (A[d] || 0) === (exp[d] || 0)); });
      }
      if (/exponentielle est convexe/.test(st)) {
        const a = +mathIn(st, /abscisse \$(-?\d+)\$/)[1]; const T = (x) => Math.exp(a) * (x - a + 1);
        return onlyAnswer(q, (o) => { const s = strip(o); return /\\ge/.test(s) && [-1.3, 0.4, 2.2].every((x) => near(ev(s.split('\\ge ')[1], { x }), T(x))); });
      }
      if (/\\ln\$ est concave/.test(st)) {
        const a = +mathIn(st, /abscisse \$(\d+)\$/)[1]; const T = (x) => (x - a) / a + Math.log(a);
        return onlyAnswer(q, (o) => { const s = strip(o); return /\\le/.test(s) && [0.5, 1.4, 7].every((x) => near(ev(s.split('\\le ')[1], { x }), T(x))); });
      }
      const fx = fOf(st);
      const f2 = (x) => { const h = 1e-3; return (ev(fx, { x: x + h }) - 2 * ev(fx, { x }) + ev(fx, { x: x - h })) / (h * h); };
      if (/abscisses des points/.test(st)) {
        const xs = [...strip(q.answer).matchAll(/x = (-?\d+)/g)].map((m) => +m[1]);
        const sc = (x) => Math.sign(f2(x - 0.01)) !== Math.sign(f2(x + 0.01));
        const all = []; for (let x = -10; x <= 10; x += 0.5) if (Math.sign(f2(x)) !== Math.sign(f2(x + 0.5))) all.push(x);
        return xs.length === 2 && xs.every(sc) && all.length === 2 ? true : 'points d\'inflexion';
      }
      if (/point d'inflexion/.test(st)) {
        const x0 = ev(rhs(q.answer));
        if (!(Math.abs(f2(x0)) < 1e-2 * Math.max(1, Math.abs(f2(x0 + 1)))) || Math.sign(f2(x0 - 0.3)) === Math.sign(f2(x0 + 0.3))) return `f'' ne s'annule pas en changeant de signe en ${x0}`;
        for (const o of q.options) if (o !== q.answer && near(ev(rhs(o)), x0, 1e-9)) return 'option égale';
        return true;
      }
      if (/convexe \?/.test(st)) {
        const s = strip(q.answer); let m;
        if ((m = s.match(/^\[(.*) ; \+\\infty\[$/))) { const x0 = ev(m[1]); return f2(x0 + 0.5) > 0 && f2(x0 + 5) > 0 && f2(x0 - 0.5) < 0 ? true : 'intervalle faux'; }
        if ((m = s.match(/^\]-\\infty ; (.*)\]$/))) { const x0 = ev(m[1]); return f2(x0 - 0.5) > 0 && f2(x0 - 5) > 0 && f2(x0 + 0.5) < 0 ? true : 'intervalle faux'; }
        return 'format';
      }
      return 'famille TA4 non reconnue';
    },
    // ---------------- TA5 ----------------
    TA5(q) {
      const st = q.statement;
      if (/sous la forme \$k\\ln/.test(st) || /Calculer \$B = /.test(st)) {
        const ex = mathIn(st, /\$[AB] = ([^$]*)\$/)[1]; const v = ev(ex);
        return onlyAnswer(q, (o) => near(ev(rhs(o)), v, 1e-9));
      }
      if (/\\ln\(x\) \+ \\ln\(x \+/.test(st)) {
        const mm = mathIn(st, /\\ln\(x \+ (\d+)\) = \\ln\((\d+)\)/); const a = +mm[1]; const b = +mm[2];
        const D = a * a + 4 * b; const roots = [(-a + Math.sqrt(D)) / 2, (-a - Math.sqrt(D)) / 2].filter((r) => r > 0 && r + a > 0);
        const S = [...strip(q.answer).matchAll(/-?\d+/g)].map(Number);
        return S.length === roots.length && S.every((s, i) => near(s, roots[i])) ? true : `S = ${roots}`;
      }
      if (/l'équation \$\\ln\(/.test(st)) {
        const mm = mathIn(st, /\\ln\(([^)]*)\) = \\ln\(([^)]*)\)/); const P1 = V.poly(mm[1]); const P2 = V.poly(mm[2]);
        const x0 = ((P2[0] || 0) - (P1[0] || 0)) / ((P1[1] || 0) - (P2[1] || 0));
        const ok = (P1[1] || 0) * x0 + (P1[0] || 0) > 0;
        const exp = ok ? `$S = \\{${x0}\\}$` : '$S = \\emptyset$';
        return q.answer === exp ? true : 'attendu ' + exp;
      }
      if (/Déterminer \$f'\(x\)\$/.test(st)) {
        const fx = fOf(st);
        return onlyAnswer(q, (o) => [1.3, 2.2, 4.7].every((x) => near(ev(rhs(o), { x }), deriv(fx, x), 1e-5)));
      }
      if (/plus petit entier naturel/.test(st)) {
        const mm = mathIn(st, /\((\d\{,\}\d+)\)\^n < (\d\{,\}\d+)/); const qq = V.val(mm[1]); const s = V.val(mm[2]);
        let n = 0; while (Math.pow(qq, n) >= s) n++;
        return +rhs(q.answer) === n ? true : 'n = ' + n;
      }
      if (/intérêts composés/.test(st)) {
        const t = +mathIn(st, /\$(\d+)\\,\\%\$/)[1]; const k = +mathIn(st, /multiplié par \$(\d+)\$/)[1];
        let n = 0; let C = 1; while (C < k) { C *= 1 + t / 100; n++; }
        return +strip(q.answer).match(/\d+/)[0] === n ? true : 'n = ' + n;
      }
      const mm = mathIn(st, /\\lim_\{x \\to (0\^\{\+\}|\+\\infty)\} ([^$]*)\$/);
      const x = mm[1].startsWith('0') ? 1e-9 : 1e9;
      return checkLim(q, numLim(ev(mm[2], { x })));
    },
    // ---------------- TA6 ----------------
    TA6(q) {
      const st = q.statement;
      const residual = (eq, y, x) => { // eq : "LHS = RHS" avec y', y, x
        const [l, r] = eq.replace(/y'/g, 'D').replace(/y/g, 'Y').split(' = ');
        const vars = { x, Y: ev(y, { x }), D: deriv(y, x) };
        return ev(l, vars) - ev(r, vars);
      };
      if (/primitive/.test(st)) {
        const fx = fOf(st);
        return onlyAnswer(q, (o) => [-0.7, 0.4, 1.3].every((x) => near(deriv(rhs(o), x), ev(fx, { x }), 1e-5)));
      }
      const eq = mathIn(st, /différentielle \$([^$]*)\$/)[1];
      if (/solution constante/.test(st)) {
        const y = rhs(q.answer);
        return onlyAnswer(q, (o) => Math.abs(residual(eq, rhs(o), 0.5)) < 1e-6);
      }
      if (/fonction affine/.test(st)) {
        return onlyAnswer(q, (o) => [-1, 0.5, 2].every((x) => Math.abs(residual(eq, rhs(o), x)) < 1e-5));
      }
      const y0 = +mathIn(st, /y\(0\) = (-?\d+)/)[1];
      return onlyAnswer(q, (o) => near(ev(rhs(o), { x: 0 }), y0, 1e-9) && [-0.5, 0.3, 1.1].every((x) => Math.abs(residual(eq, rhs(o), x)) < 1e-4 * Math.max(1, Math.abs(ev(rhs(o), { x })))));
    },
    // ---------------- TA7 ----------------
    TA7(q) {
      const st = q.statement;
      let I;
      if (/\\int_/.test(st)) {
        const mm = mathIn(st, /\\int_\{(-?\d+)\}\^\{(-?\d+)\} (.*?) \\, dx/);
        I = simpson(mm[3].replace(/^\((.*)\)$/, '$1').replace(/^\((.*)\)(e\^)/, '($1)$2'), +mm[1], +mm[2]);
      } else if (/valeur moyenne/.test(st)) {
        const b = +mathIn(st, /\[0 ; (\d+)\]/)[1]; I = simpson(fOf(st), 0, b) / b;
      } else if (/g\(x\) = /.test(st)) {
        const g = mathIn(st, /g\(x\) = ([^$]*)\$/)[1]; const mm = mathIn(st, /en \$x = (-?\d+)\$ et \$x = (-?\d+)\$/);
        const a = +mm[1]; const b = +mm[2];
        if (ev(g, { x: a }) !== a * a || ev(g, { x: b }) !== b * b) return 'points d\'intersection faux';
        I = simpson(`(${g}) - x^2`, a, b);
      } else {
        const mm = mathIn(st, /x \\in \[(-?\d+) ; (\d+)\]/); const a = +mm[1]; const b = +mm[2]; const fx = fOf(st);
        if (Math.abs(ev(fx, { x: a })) > 1e-9 || ev(fx, { x: 0 }) < 0) return 'f non positive / bornes';
        I = simpson(fx, a, b);
      }
      return onlyAnswer(q, (o) => near(ev(rhs(o)), I, 1e-7));
    }
  };
})(V));
}
// ---- recalculs lyTGSX ----
{
// Recalculs indépendants : TG1 TG2 TS1 TS2 TX1 TX2 TX3 TX4 TX5
Object.assign(VERIFIERS, ((V) => {
  const vec = (s, label) => {
    const m = s.match(new RegExp(label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\((-?\\d+) ; (-?\\d+) ; (-?\\d+)\\)'));
    return m ? [+m[1], +m[2], +m[3]] : null;
  };
  const vecs = (s, label) => [...s.matchAll(new RegExp(label + '\\((-?\\d+) ; (-?\\d+) ; (-?\\d+)\\)', 'g'))].map((m) => [+m[1], +m[2], +m[3]]);
  const cross = (u, v) => [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]];
  const colin = (u, v) => cross(u, v).every((x) => x === 0);
  const dot = (u, v) => u[0] * v[0] + u[1] * v[1] + u[2] * v[2];
  const eq = (a, b) => a.length === b.length && a.every((x, i) => x === b[i]);
  // \begin{cases} x = ... \\ y = ... \\ z = ... \end{cases} -> [[c0, c1] x3]
  const cases = (s, v) => {
    const all = [...s.matchAll(/\\begin\{cases\} x = (.*?) \\\\ y = (.*?) \\\\ z = (.*?) \\end\{cases\}/g)];
    return all.map((m) => [m[1], m[2], m[3]].map((e) => { const p = V.poly(e, v || 't'); return p ? [p[0] || 0, p[1] || 0] : null; }));
  };
  const casesV = (s) => {
    const all = [...s.matchAll(/\\begin\{cases\} x = (.*?) \\\\ y = (.*?) \\\\ z = (.*?) \\end\{cases\}/g)];
    return all.map((m) => {
      const varName = /s(?![a-z])/.test(m[1] + m[2] + m[3]) && !/t/.test(m[1] + m[2] + m[3]) ? 's' : (/k/.test(m[1] + m[2] + m[3]) ? 'k' : 't');
      return [m[1], m[2], m[3]].map((e) => { const p = V.poly(e, varName); return p ? [p[0] || 0, p[1] || 0] : null; });
    });
  };
  const gcd = V.gcd;
  // fraction / nombre LaTeX (+ sqrt simplifié) -> valeur
  const num = (s) => {
    s = s.trim();
    let m;
    if ((m = s.match(/^(-?)(\d*)\\sqrt\{(\d+)\}$/))) return (m[1] ? -1 : 1) * (m[2] ? +m[2] : 1) * Math.sqrt(+m[3]);
    if ((m = s.match(/^(-?)\\frac\{(\d*)\\sqrt\{(\d+)\}\}\{(\d+)\}$/))) return (m[1] ? -1 : 1) * (m[2] ? +m[2] : 1) * Math.sqrt(+m[3]) / +m[4];
    return V.val(s);
  };
  // complexe "a + bi" (a, b entiers ou fractions) -> [re, im]
  const cplx = (s) => {
    s = s.replace(/\s+/g, '');
    if (s === '0') return [0, 0];
    let re = 0; let im = 0;
    const terms = s.match(/[+-]?[^+-]+/g);
    if (!terms) return null;
    for (const t of terms) {
      if (/i$/.test(t)) {
        let c = t.slice(0, -1);
        if (c === '' || c === '+') c = '1'; else if (c === '-') c = '-1';
        im += num(c.replace(/^\+/, ''));
      } else re += num(t.replace(/^\+/, ''));
    }
    return [re, im];
  };
  const mod = (a, n) => ((a % n) + n) % n;
  const modpow = (a, e, n) => { let r = 1; a = mod(a, n); for (let i = 0; i < e; i++) r = (r * a) % n; return r; };
  const binom = (n, k) => { let r = 1; for (let i = 1; i <= k; i++) r = r * (n - k + i) / i; return Math.round(r); };
  const dval = (s) => parseFloat(String(s).replace('{,}', '.'));
  const approxOk = (txt, val) => {
    // "= 0{,}123" exact ou "\approx 0{,}123" arrondi au millième
    const all = [...txt.matchAll(/(=|\\approx) (-?\d+(?:\{,\}\d+)?)/g)];
    const m = all[all.length - 1];
    if (!m) return false;
    const v = dval(m[2]);
    if (m[1] === '=') return Math.abs(v - val) < 1e-9;
    return Math.abs(v - Math.round(val * 1000) / 1000) < 1e-9 && Math.abs(v - val) > 1e-12;
  };
  // angle LaTeX -> multiple de pi
  const angle = (s) => {
    s = s.trim();
    if (s === '0') return 0;
    if (s === '\\pi') return 1;
    if (s === '-\\pi') return -1;
    const m = s.match(/^(-?)\\frac\{(\d*)\\pi\}\{(\d+)\}$/);
    if (!m) return NaN;
    return (m[1] ? -1 : 1) * (m[2] ? +m[2] : 1) / +m[3];
  };
  // "r e^{i theta}" -> [module, angle/pi]
  const expo = (s) => {
    s = s.trim();
    const m = s.match(/^(.*?)e\^\{(-?)i(.*)\}$/);
    if (!m) { const v = num(s); return [Math.abs(v), v < 0 ? 1 : 0]; }
    return [m[1] === '' ? 1 : num(m[1]), (m[2] ? -1 : 1) * angle(m[3])];
  };
  const inPi = (a) => a > -1 + 1e-9 && a <= 1 + 1e-9;
  const sameAng = (a, b) => Math.abs(mod(Math.round((a - b) * 1e6), 2e6)) < 2;

  return {
    // ------------------------------------------------------------------ TG1
    TG1(q) {
      const S = q.statement; const A = q.answer;
      if (/Représentation paramétrique/.test(q.title)) {
        const P = vec(S, 'A'); const u = vec(S, '\\vec{u}');
        const c = cases(A)[0];
        if (!c || c.some((x) => !x)) return 'parse';
        if (!eq(c.map((x) => x[0]), P) || !eq(c.map((x) => x[1]), u)) return 'représentation fausse';
        for (const o of q.options) {
          if (o === A) continue;
          const d = cases(o)[0];
          if (!d) continue;
          const Q = d.map((x) => x[0]); const w = d.map((x) => x[1]);
          if (colin(w, u) && colin(Q.map((x, i) => x - P[i]), u)) return 'distracteur juste ' + o;
        }
        return true;
      }
      if (/paramètre donné/.test(q.title)) {
        const c = cases(S)[0]; const t = +S.match(/t = (-?\d+)\$ \?/)[1];
        const M = vec(A, 'M');
        return eq(M, c.map((x) => x[0] + t * x[1])) || 'point faux';
      }
      if (/Coordonnées d'un vecteur/.test(q.title)) {
        const P = vec(S, 'A'); const B = vec(S, 'B'); const w = vec(A, '\\vec{AB}');
        return eq(w, B.map((x, i) => x - P[i])) || 'AB faux';
      }
      if (/colinéaires/.test(q.title)) {
        const u = vec(S, '\\vec{u}');
        const vm = S.match(/\\vec\{v\}\(([^)]*)\)/)[1].split(' ; ');
        const m = +A.match(/m = (-?\d+)/)[1];
        const v = vm.map((x) => (x === 'm' ? m : +x));
        if (!colin(u, v)) return 'non colinéaires';
        return true;
      }
      if (/Alignement/.test(q.title)) {
        const P = vec(S, 'A'); const B = vec(S, 'B'); const C = vec(S, 'C');
        const AB = B.map((x, i) => x - P[i]); const AC = C.map((x, i) => x - P[i]);
        const al = colin(AB, AC);
        if (/^Non/.test(A)) return !al || 'alignés pourtant';
        const k = A.match(/= (-?\d*)\\vec/)[1];
        const kk = k === '' ? 1 : k === '-' ? -1 : +k;
        return eq(AC, AB.map((x) => kk * x)) || 'k faux';
      }
      if (/Décomposition/.test(q.title)) {
        const u = vec(S, '\\vec{u}'); const v = vec(S, '\\vec{v}'); const w = vec(S, '\\vec{w}');
        const m = A.match(/\\vec\{w\} = (.*)\$/)[1];
        const p = V.poly(m.replace(/\\vec\{u\}/g, 'a').replace(/\\vec\{v\}/g, 'b').replace(/b/g, 'a^2'), 'a');
        const al = p[1] || 0; const be = p[2] || 0;
        return eq(w, u.map((x, i) => al * x + be * v[i])) || 'combinaison fausse';
      }
      if (/Position relative de deux droites/.test(q.title)) {
        const [d1, d2] = casesV(S);
        const P1 = d1.map((x) => x[0]); const u = d1.map((x) => x[1]);
        const P2 = d2.map((x) => x[0]); const v = d2.map((x) => x[1]);
        const w = P2.map((x, i) => x - P1[i]);
        let kind;
        if (colin(u, v)) kind = colin(w, u) ? 'conf' : 'par';
        else kind = dot(cross(u, v), w) === 0 ? 'sec' : 'gau';
        if (kind === 'par') return /strictement parallèles/.test(A) || 'attendu parallèles';
        if (kind === 'conf') return /confondues/.test(A) || 'attendu confondues';
        if (kind === 'gau') return /non coplanaires/.test(A) || 'attendu non coplanaires';
        const I = vec(A, 'I');
        if (!I) return 'attendu sécantes';
        // I sur les deux droites
        const on = (Pt, d) => colin(Pt.map((x, i) => x - d[i][0]), d.map((x) => x[1]));
        return (on(I, d1) && on(I, d2)) || 'point d\'intersection faux';
      }
      return 'famille inconnue ' + q.title;
    },
    // ------------------------------------------------------------------ TG2
    TG2(q) {
      const S = q.statement; const A = q.answer;
      const plane = (s) => {
        const m = s.match(/: ([^$]*?) = 0\$/) || s.match(/équation \$([^$]*?) = 0\$/);
        const e = m[1];
        const out = [0, 0, 0, 0];
        for (const t of e.replace(/\s+/g, '').match(/[+-]?[^+-]+/g)) {
          const mm = t.match(/^([+-]?)(\d*)([xyz]?)$/);
          const c = (mm[1] === '-' ? -1 : 1) * (mm[2] === '' ? 1 : +mm[2]);
          out[mm[3] ? 'xyz'.indexOf(mm[3]) : 3] += c;
        }
        return out;
      };
      if (/Vecteur normal/.test(q.title)) {
        const p = plane(S); const n = vec(A, '\\vec{n}');
        if (!colin(n, p.slice(0, 3))) return 'non normal';
        for (const o of q.options) if (o !== A && colin(vec(o, '\\vec{n}'), p.slice(0, 3))) return 'distracteur normal';
        return true;
      }
      if (/Point appartenant/.test(q.title)) {
        const p = plane(S); const M = vec(A, 'M');
        if (dot(p, M) + p[3] !== 0) return 'point hors plan';
        for (const o of q.options) if (o !== A) { const Q = vec(o, 'M'); if (dot(p, Q) + p[3] === 0) return 'distracteur dans le plan'; }
        return true;
      }
      if (/Produit scalaire/.test(q.title)) {
        const u = vec(S, '\\vec{u}'); const v = vec(S, '\\vec{v}');
        return +A.match(/= (-?\d+)\$/)[1] === dot(u, v) || 'produit scalaire faux';
      }
      if (/orthogonaux/.test(q.title)) {
        const u = vec(S, '\\vec{u}'); const m = S.match(/\\vec\{v\}\((-?\d+) ; (-?\d+) ; m\)/);
        const mv = V.val(A.match(/m = (.*)\$/)[1]);
        return V.near(u[0] * m[1] + u[1] * m[2] + u[2] * mv, 0) || 'pas orthogonaux';
      }
      if (/Norme/.test(q.title)) {
        const u = vec(S, '\\vec{u}');
        return V.near(num(A.match(/= (.*)\$/)[1]), Math.sqrt(dot(u, u))) || 'norme fausse';
      }
      if (/Équation cartésienne/.test(q.title)) {
        const P = vec(S, 'A'); const n = vec(S, '\\vec{n}');
        const p = plane('équation ' + A);
        return (eq(p.slice(0, 3), n) && dot(n, P) + p[3] === 0) || 'équation fausse';
      }
      if (/Position relative de deux plans/.test(q.title)) {
        const m = S.match(/_1 : (.*?) = 0\$ et \$\\mathcal\{P\}_2 : (.*?) = 0\$/);
        const p1 = plane('équation $' + m[1] + ' = 0$'); const p2 = plane('équation $' + m[2] + ' = 0$');
        const n1 = p1.slice(0, 3); const n2 = p2.slice(0, 3);
        let kind;
        if (colin(n1, n2)) {
          const k = n1.map((x, i) => (x ? n2[i] / x : null)).find((x) => x !== null);
          kind = V.near(p2[3], k * p1[3]) ? 'confondus' : 'strictement parallèles';
        } else kind = dot(n1, n2) === 0 ? 'perpendiculaires' : 'sécants mais non';
        return A.includes(kind) || 'attendu ' + kind;
      }
      if (/Projeté orthogonal/.test(q.title)) {
        const p = plane(S); const P = vec(S, 'A'); const H = vec(A, 'H');
        const n = p.slice(0, 3);
        return (dot(n, H) + p[3] === 0 && colin(H.map((x, i) => x - P[i]), n)) || 'projeté faux';
      }
      if (/Distance d'un point/.test(q.title)) {
        const p = plane(S); const P = vec(S, 'A');
        const dist = Math.abs(dot(p, P) + p[3]) / Math.sqrt(dot(p, p));
        return V.near(num(A.match(/= (.*)\$/)[1]), dist) || 'distance fausse';
      }
      return 'famille inconnue ' + q.title;
    },
    // ------------------------------------------------------------------ TS1
    TS1(q) {
      const S = q.statement; const A = q.answer;
      if (/Coefficients binomiaux/.test(q.title)) {
        const m = A.match(/\\binom\{(\d+)\}\{(\d+)\} = (\d+)/);
        return +m[3] === binom(+m[1], +m[2]) || 'binôme faux';
      }
      const B = S.match(/\\mathcal\{B\}\((\d+) ; ([\d{},]+)\)/);
      const n = B ? +B[1] : null; const p = B ? dval(B[2]) : null;
      if (/Probabilité avec la loi binomiale/.test(q.title)) {
        const k = +S.match(/P\(X = (\d+)\)/)[1];
        return approxOk(A, binom(n, k) * p ** k * (1 - p) ** (n - k)) || 'probabilité fausse';
      }
      if (/Espérance/.test(q.title)) return V.near(dval(A.match(/= (.*)\$/)[1]), n * p) || 'E fausse';
      if (/Variance/.test(q.title)) return V.near(dval(A.match(/= (.*)\$/)[1]), n * p * (1 - p)) || 'V fausse';
      if (/au moins un succès/.test(q.title)) return approxOk(A, 1 - (1 - p) ** n) || 'P(X>=1) faux';
      if (/cumulée/.test(q.title)) return approxOk(A, (1 - p) ** n + n * p * (1 - p) ** (n - 1)) || 'P(X<=1) faux';
      if (/Nombre minimal/.test(q.title)) {
        const m = S.match(/succès est \$([\d{},]+)\$.*égale à \$([\d{},]+)\$/);
        const pp = dval(m[1]); const s = dval(m[2]);
        const nn = +A.match(/n = (\d+)/)[1];
        const ok = (k) => 1 - (1 - pp) ** k >= s - 1e-12;
        return (ok(nn) && !ok(nn - 1)) || 'n minimal faux';
      }
      return 'famille inconnue ' + q.title;
    },
    // ------------------------------------------------------------------ TS2
    TS2(q) {
      const S = q.statement; const A = q.answer;
      const lin = (expr, vars) => { // "3X - 2Y + 5" -> coefficients
        const out = {};
        for (const t of expr.replace(/\s+/g, '').match(/[+-]?[^+-]+/g)) {
          const m = t.match(/^([+-]?)(\d*)([XY]?)$/);
          out[m[3] || '1'] = (m[1] === '-' ? -1 : 1) * (m[2] === '' ? 1 : +m[2]);
        }
        return vars.map((v) => out[v] || 0);
      };
      const res = () => dval(A.match(/= (-?[\d{},]+)\$/)[1]);
      if (/Linéarité de l'espérance/.test(q.title)) {
        const EX = dval(S.match(/E\(X\) = (-?[\d{},]+)/)[1]);
        const [a, b] = lin(S.match(/Calculer \$E\((.*)\)\$/)[1], ['X', '1']);
        return V.near(res(), a * EX + b) || 'E(aX+b) faux';
      }
      if (/combinaison/.test(q.title)) {
        const EX = dval(S.match(/E\(X\) = (-?[\d{},]+)/)[1]); const EY = dval(S.match(/E\(Y\) = (-?\d+)/)[1]);
        const [a, c] = lin(S.match(/Calculer \$E\((.*)\)\$/)[1], ['X', 'Y']);
        return V.near(res(), a * EX + c * EY) || 'E(aX+cY) faux';
      }
      if (/transformation affine/.test(q.title)) {
        const VX = +S.match(/V\(X\) = (\d+)/)[1];
        const [a] = lin(S.match(/Calculer \$V\((.*)\)\$/)[1], ['X', '1']);
        return res() === a * a * VX || 'V(aX+b) faux';
      }
      if (/indépendantes/.test(q.title)) {
        const VX = +S.match(/V\(X\) = (\d+)/)[1]; const VY = +S.match(/V\(Y\) = (\d+)/)[1];
        const [a, c] = lin(S.match(/Calculer \$V\((.*)\)\$/)[1], ['X', 'Y']);
        return res() === a * a * VX + c * c * VY || 'V somme faux';
      }
      if (/Inégalité de Bienaymé/.test(q.title)) {
        const Va = +S.match(/V\(X\) = (\d+)/)[1]; const d = +S.match(/\\ge (\d+)\)\$/)[1];
        return V.near(V.val(A), Va / (d * d)) || 'majorant faux';
      }
      if (/Minoration/.test(q.title)) {
        const mu = +S.match(/E\(X\) = (\d+)/)[1]; const Va = +S.match(/V\(X\) = (\d+)/)[1];
        const m = S.match(/P\((-?\d+) < X < (\d+)\)/); const d = +m[2] - mu;
        if (mu - +m[1] !== d) return 'intervalle non centré';
        return V.near(V.val(A.match(/\\ge (.*)\$/)[1]), 1 - Va / (d * d)) || 'minorant faux';
      }
      if (/moyenne empirique/.test(q.title)) {
        const n = +S.match(/n = (\d+)/)[1]; const v = +S.match(/variance \$(\d+)\$/)[1];
        return V.near(res(), v / n) || 'V(Mn) faux';
      }
      if (/taille d'échantillon/.test(q.title)) {
        const v = +S.match(/variance \$(\d+)\$/)[1];
        const m = S.match(/\\ge ([\d{},]+)\) \\le ([\d{},]+)\$/);
        const d = dval(m[1]); const al = dval(m[2]);
        const n = +A.match(/n = (\d+)/)[1];
        const ok = (k) => v / (k * d * d) <= al + 1e-12;
        return (ok(n) && !ok(n - 1)) || 'n faux';
      }
      return 'famille inconnue ' + q.title;
    },
    // ------------------------------------------------------------------ TX1
    TX1(q) {
      const S = q.statement; const A = q.answer;
      const z = (lbl) => cplx(S.match(new RegExp(lbl + ' = ([^$]*)\\$'))[1]);
      const ans = () => cplx(A.replace(/^\$(.*= )?/, '').replace(/\$$/, ''));
      const near2 = (u, v) => u && v && V.near(u[0], v[0]) && V.near(u[1], v[1]);
      if (/Parties réelle/.test(q.title)) {
        const w = z('z'); const m = A.match(/Re\}\(z\) = (-?\d+)\$ et \$\\text\{Im\}\(z\) = (-?\d+)\$$/);
        return (m && +m[1] === w[0] && +m[2] === w[1]) || 'Re/Im faux';
      }
      if (/Somme|Différence/.test(q.title)) {
        const a = z('z_1'); const b = z('z_2'); const s = /Somme/.test(q.title) ? 1 : -1;
        return near2(ans(), [a[0] + s * b[0], a[1] + s * b[1]]) || 'somme fausse';
      }
      if (/Conjugué/.test(q.title)) { const a = z('z'); return near2(ans(), [a[0], -a[1]]) || 'conjugué faux'; }
      if (/Produit de deux/.test(q.title)) {
        const m = S.match(/\$\((.*)\)\((.*)\)\$/); const a = cplx(m[1]); const b = cplx(m[2]);
        return near2(ans(), [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]]) || 'produit faux';
      }
      if (/conjugué$/.test(q.title)) { const a = z('z'); return near2(ans(), [a[0] ** 2 + a[1] ** 2, 0]) || 'zzbar faux'; }
      if (/Carré/.test(q.title)) { const a = z('z'); return near2(ans(), [a[0] ** 2 - a[1] ** 2, 2 * a[0] * a[1]]) || 'carré faux'; }
      if (/Quotient/.test(q.title)) {
        const m = S.match(/\\frac\{(.*)\}\{(.*)\}\$\.$/); const a = cplx(m[1]); const b = cplx(m[2]);
        const d = b[0] ** 2 + b[1] ** 2;
        return near2(ans(), [(a[0] * b[0] + a[1] * b[1]) / d, (a[1] * b[0] - a[0] * b[1]) / d]) || 'quotient faux';
      }
      if (/Inverse/.test(q.title)) {
        const a = z('z'); const d = a[0] ** 2 + a[1] ** 2;
        return near2(cplx(A.slice(1, -1)), [a[0] / d, -a[1] / d]) || 'inverse faux';
      }
      if (/second degré/.test(q.title)) {
        const p = V.poly(S.match(/équation \$(.*) = 0\$/)[1], 'z');
        const a = p[2] || 0; const b = p[1] || 0; const c = p[0] || 0;
        const roots = A.match(/\\\{(.*) ; (.*)\\\}/).slice(1).map(cplx);
        const ok = roots.every((r) => {
          const re = a * (r[0] ** 2 - r[1] ** 2) + b * r[0] + c; const im = a * 2 * r[0] * r[1] + b * r[1];
          return V.near(re, 0) && V.near(im, 0);
        }) && !V.near(roots[0][1], roots[1][1]);
        return ok || 'racines fausses';
      }
      return 'famille inconnue ' + q.title;
    },
    // ------------------------------------------------------------------ TX2
    TX2(q) {
      const S = q.statement; const A = q.answer;
      if (/Module d'un nombre/.test(q.title)) {
        const w = cplx(S.match(/z = (.*)\$\.$/)[1]);
        return V.near(num(A.match(/= (.*)\$/)[1]), Math.hypot(w[0], w[1])) || 'module faux';
      }
      if (/forme algébrique/.test(q.title)) {
        const [r, t0] = expo(S.match(/z = (.*)\$\.$/)[1]); const t = t0 * Math.PI;
        const w = cplx(A.match(/z = (.*)\$/)[1]);
        return (V.near(w[0] + 1, r * Math.cos(t) + 1) && V.near(w[1] + 1, r * Math.sin(t) + 1)) || 'forme algébrique fausse';
      }
      if (/Forme exponentielle/.test(q.title)) {
        const w = cplx(S.match(/z = (.*)\$\.$/)[1]);
        const [r, t] = expo(A.match(/z = (.*)\$/)[1]);
        if (!inPi(t) && t !== 0) return 'argument hors intervalle';
        return (V.near(r, Math.hypot(w[0], w[1])) && V.near(Math.atan2(w[1], w[0]) / Math.PI, t)) || 'forme exponentielle fausse';
      }
      if (/Moivre/.test(q.title)) {
        const [r, t] = expo(S.match(/On pose \$z = (.*?)\$/)[1]); const n = +S.match(/z\^\{(\d+)\}/)[1];
        const [R, T] = expo(A.match(/= (.*)\$/)[1]);
        return (V.near(R, r ** n) && inPi(T) && sameAng(T, n * t)) || 'puissance fausse';
      }
      if (/en forme exponentielle/.test(q.title)) {
        const [r1, t1] = expo(S.match(/z_1 = (.*?)\$/)[1]); const [r2, t2] = expo(S.match(/z_2 = (.*?)\$/)[1]);
        const div = /Quotient/.test(q.title);
        const [R, T] = expo(A.match(/= (.*)\$/)[1]);
        return (V.near(R, div ? r1 / r2 : r1 * r2) && inPi(T) && sameAng(T, div ? t1 - t2 : t1 + t2)) || 'produit/quotient faux';
      }
      if (/Nature d'un triangle/.test(q.title)) {
        const za = cplx(S.match(/z_A = (.*?)\$/)[1]); const zb = cplx(S.match(/z_B = (.*?)\$/)[1]); const zc = cplx(S.match(/z_C = (.*?)\$/)[1]);
        const u = [zb[0] - za[0], zb[1] - za[1]]; const v = [zc[0] - za[0], zc[1] - za[1]];
        const d = u[0] ** 2 + u[1] ** 2;
        const qq = [(v[0] * u[0] + v[1] * u[1]) / d, (v[1] * u[0] - v[0] * u[1]) / d];
        const modq = Math.hypot(qq[0], qq[1]);
        let kind;
        if (V.near(qq[1] + 1, 1)) kind = 'alignés';
        else if (V.near(qq[0] + 1, 1)) kind = V.near(modq, 1) ? 'rectangle isocèle' : 'rectangle en $A$, mais pas isocèle';
        else kind = V.near(modq, 1) ? 'isocèle en $A$, mais pas rectangle' : '???';
        return A.includes(kind) || 'attendu ' + kind;
      }
      return 'famille inconnue ' + q.title;
    },
    // ------------------------------------------------------------------ TX3
    TX3(q) {
      const S = q.statement; const A = q.answer;
      const r = () => +A.match(/(-?\d+)\$$/)[1];
      if (/Reste et congruence/.test(q.title)) {
        const m = S.match(/\$(-?\d+) \\equiv r \\pmod\{(\d+)\}/);
        return r() === mod(+m[1], +m[2]) || 'reste faux';
      }
      if (/Compatibilité/.test(q.title)) {
        const m = S.match(/\$(\d+) \\times (\d+) \+ (\d+)\$ par \$(\d+)\$/);
        return r() === mod(+m[1] * +m[2] + +m[3], +m[4]) || 'reste faux';
      }
      if (/Puissance et congruence|grande puissance/.test(q.title) && /division euclidienne/.test(S)) {
        const m = S.match(/\$(\d+)\^\{(\d+)\}\$ par \$(\d+)\$/);
        return r() === modpow(+m[1], +m[2], +m[3]) || 'reste faux';
      }
      if (/Chiffre des unités/.test(q.title)) {
        const m = S.match(/\$(\d+)\^\{(\d+)\}\$/);
        return r() === modpow(+m[1], +m[2], 10) || 'chiffre faux';
      }
      if (/Équation de congruence/.test(q.title)) {
        const m = S.match(/\$(\d+)x \\equiv (\d+) \\pmod\{(\d+)\}/); const x = +A.match(/x \\equiv (\d+)/)[1];
        const sols = []; for (let k = 0; k < +m[3]; k++) if (mod(+m[1] * k - +m[2], +m[3]) === 0) sols.push(k);
        return (sols.length === 1 && sols[0] === x) || 'solution fausse';
      }
      return 'famille inconnue ' + q.title;
    },
    // ------------------------------------------------------------------ TX4
    TX4(q) {
      const S = q.statement; const A = q.answer;
      if (/PGCD/.test(q.title)) {
        const m = S.match(/PGCD\}\((\d+) ; (\d+)\)/);
        return +A.match(/\d+/)[0] === gcd(+m[1], +m[2]) || 'pgcd faux';
      }
      if (/Bézout/.test(q.title)) {
        const m = S.match(/\$(\d+)u \+ (\d+)v = 1\$/); const a = +m[1]; const b = +m[2];
        const uv = (o) => { const mm = o.match(/u = (-?\d+)\$ et \$v = (-?\d+)/); return a * +mm[1] + b * +mm[2] === 1; };
        if (!uv(A)) return 'couple faux';
        for (const o of q.options) if (o !== A && uv(o)) return 'distracteur juste';
        return true;
      }
      if (/Décomposition/.test(q.title)) {
        const N = +S.match(/de \$(\d+)\$/)[1];
        const f = A.match(/= (.*)\$/)[1].split(' \\times ').map((t) => { const m = t.match(/^(\d+)(?:\^\{(\d+)\})?$/); return [+m[1], m[2] ? +m[2] : 1]; });
        const isP = (p) => { for (let d = 2; d * d <= p; d++) if (p % d === 0) return false; return p > 1; };
        return (f.every(([p]) => isP(p)) && f.reduce((acc, [p, e]) => acc * p ** e, 1) === N) || 'décomposition fausse';
      }
      if (/diviseurs/.test(q.title)) {
        const N = +S.match(/\$(\d+) = /)[1]; let c = 0; for (let d = 1; d <= N; d++) if (N % d === 0) c++;
        return +A.match(/\d+/)[0] === c || 'nb diviseurs faux';
      }
      if (/diophantienne/.test(q.title)) {
        const m = S.match(/\$\(E\) : (\d+)x \+ (\d+)y = (-?\d+)\$/); const a = +m[1]; const b = +m[2]; const c = +m[3];
        const mx = A.match(/x = (.*?)\$ et \$y = (.*?)\$/);
        const px = V.poly(mx[1], 'k'); const py = V.poly(mx[2], 'k');
        const x0 = px[0] || 0; const x1 = px[1] || 0; const y0 = py[0] || 0; const y1 = py[1] || 0;
        return (a * x0 + b * y0 === c && a * x1 + b * y1 === 0 && Math.abs(x1) === b && Math.abs(y1) === a) || 'solutions fausses';
      }
      if (/RSA/.test(q.title)) {
        const p = +S.match(/p = (\d+)/)[1]; const qq = +S.match(/q = (\d+)/)[1]; const e = +S.match(/e = (\d+)/)[1];
        const phi = (p - 1) * (qq - 1); const d = +A.match(/d = (\d+)/)[1];
        return (d > 0 && d < phi && (e * d) % phi === 1) || 'd faux';
      }
      return 'famille inconnue ' + q.title;
    },
    // ------------------------------------------------------------------ TX5
    TX5(q) {
      const S = q.statement; const A = q.answer;
      const mats = (s) => [...s.matchAll(/\\begin\{pmatrix\}(.*?)\\end\{pmatrix\}/g)].map((m) => m[1].split('\\\\').map((r) => r.split('&').map((x) => x.trim())));
      const N = (M) => M.map((r) => r.map((x) => dval(x)));
      if (/Produit de deux matrices/.test(q.title)) {
        const [a, b] = mats(S).map(N); const r = N(mats(A)[0]);
        const p = a.map((row) => [0, 1].map((j) => row[0] * b[0][j] + row[1] * b[1][j]));
        return p.every((row, i) => row.every((x, j) => x === r[i][j])) || 'produit faux';
      }
      if (/Inverse/.test(q.title)) {
        const a = N(mats(S)[0]); const inv = N(mats(A)[0]);
        const pre = A.match(/A\^\{-1\} = (.*?)\\begin/)[1];
        const k = pre === '' ? 1 : pre === '-' ? -1 : V.val(pre);
        const p = a.map((row) => [0, 1].map((j) => k * (row[0] * inv[0][j] + row[1] * inv[1][j])));
        return (V.near(p[0][0], 1) && V.near(p[1][1], 1) && V.near(p[0][1] + 1, 1) && V.near(p[1][0] + 1, 1)) || 'inverse fausse';
      }
      if (/non inversible/.test(q.title)) {
        const M = mats(S)[0]; const m = +A.match(/m = (-?\d+)/)[1];
        return m * dval(M[1][1]) - dval(M[0][1]) * dval(M[1][0]) === 0 || 'm faux';
      }
      const P = N(mats(S)[0]);
      if (Math.abs(P[0][0] + P[0][1] - 1) > 1e-9 || Math.abs(P[1][0] + P[1][1] - 1) > 1e-9) return 'matrice non stochastique';
      if (/Évolution/.test(q.title)) {
        const m = S.match(/\\pi_0 = \(([\d{},]+) ; ([\d{},]+)\)/); const x = dval(m[1]); const y = dval(m[2]);
        if (!V.near(x + y, 1)) return 'pi0 non loi';
        const r = A.match(/\(([\d{},]+) ; ([\d{},]+)\)/);
        return (V.near(dval(r[1]), x * P[0][0] + y * P[1][0]) && V.near(dval(r[2]), x * P[0][1] + y * P[1][1])) || 'pi1 faux';
      }
      if (/État stable/.test(q.title)) {
        const r = A.match(/\\left\((.*) ; (.*)\\right\)/); const x = V.val(r[1]); const y = V.val(r[2]);
        return (V.near(x + y, 1) && V.near(x * P[0][0] + y * P[1][0], x)) || 'état stable faux';
      }
      return 'famille inconnue ' + q.title;
    }
  };
})(V));
}
// ---- recalculs ly1ere ----
{
// Recalculs indépendants — Première spécialité (1A1 … 1S2)
Object.assign(VERIFIERS, ((V) => {
  // ---------------------------------------------------------------------------
  // Mini-évaluateur LaTeX (sous-ensemble produit par les générateurs)
  // ---------------------------------------------------------------------------
  function tokenize(src) {
    const s = String(src)
      .replace(/\{,\}/g, '.')
      .replace(/\\left|\\right|\\[,;!]/g, '')
      .replace(/\\cdot|\\times/g, '*')
      .replace(/\\div/g, '/')
      .replace(/\\[dt]frac/g, '\\frac')
      .replace(/u_\{?n\}?/g, 'U')
      .replace(/v_\{?n\}?/g, 'W');
    const re = /\s*(\\[a-zA-Z]+|\d+(?:\.\d+)?|[a-zA-Z]|[-+*/^(){}|])/y;
    const out = [];
    let m;
    re.lastIndex = 0;
    while (re.lastIndex < s.length) {
      const before = re.lastIndex;
      m = re.exec(s);
      if (!m) {
        if (/^\s*$/.test(s.slice(before))) break;
        throw new Error('token: ' + s.slice(before, before + 10));
      }
      out.push(m[1]);
    }
    return out;
  }
  function evaluate(src, vars = {}) {
    const t = tokenize(src);
    let i = 0;
    const peek = () => t[i];
    const eat = (x) => { if (t[i] !== x) throw new Error(`attendu ${x}, trouvé ${t[i]} dans ${src}`); i++; };
    const startsAtom = (k) => k !== undefined && (/^\d/.test(k) || /^[a-zA-Z]$/.test(k) || k === '(' || k === '{' || ['\\frac', '\\sqrt', '\\pi', '\\cos', '\\sin', '\\ell'].includes(k));
    function expr() {
      let v = term();
      while (peek() === '+' || peek() === '-') { const o = t[i++]; const w = term(); v = o === '+' ? v + w : v - w; }
      return v;
    }
    function term() {
      let v = unary();
      for (;;) {
        if (peek() === '*' || peek() === '/') { const o = t[i++]; const w = unary(); v = o === '*' ? v * w : v / w; } else if (startsAtom(peek())) { v *= power(); } else break;
      }
      return v;
    }
    function unary() {
      if (peek() === '-') { i++; return -unary(); }
      if (peek() === '+') { i++; return unary(); }
      return power();
    }
    function power() {
      const b = atom();
      if (peek() === '^') {
        i++;
        let e;
        if (peek() === '{') { i++; e = expr(); eat('}'); } else if (peek() === '-') { i++; e = -atom(); } else e = atom();
        return b ** e;
      }
      return b;
    }
    function group() { eat('{'); const v = expr(); eat('}'); return v; }
    function atom() {
      const k = t[i++];
      if (k === undefined) throw new Error('fin inattendue: ' + src);
      if (/^\d/.test(k)) return parseFloat(k);
      if (k === '(') { const v = expr(); eat(')'); return v; }
      if (k === '{') { const v = expr(); eat('}'); return v; }
      if (k === '|') { const v = expr(); eat('|'); return Math.abs(v); }
      if (k === '\\frac') { const a = group(); const b = group(); return a / b; }
      if (k === '\\sqrt') return Math.sqrt(group());
      if (k === '\\pi') return Math.PI;
      if (k === '\\cos' || k === '\\sin') { const a = peek() === '(' ? (i++, (() => { const v = expr(); eat(')'); return v; })()) : atom(); return k === '\\cos' ? Math.cos(a) : Math.sin(a); }
      if (k === 'e' && !('e' in vars)) return Math.E;
      if (k === 'U') return vars.U;
      if (k === 'W') return vars.W;
      if (k === '\\ell') return vars.l;
      if (/^[a-zA-Z]$/.test(k)) { if (!(k in vars)) throw new Error('variable inconnue ' + k + ' dans ' + src); return vars[k]; }
      throw new Error('atome inattendu ' + k + ' dans ' + src);
    }
    const v = expr();
    if (i !== t.length) throw new Error('reste: ' + t.slice(i).join(' ') + ' dans ' + src);
    return v;
  }
  const ev = evaluate;
  const near = (a, b, eps = 1e-7) => Math.abs(a - b) <= eps * Math.max(1, Math.abs(a), Math.abs(b));
  const maths = (s) => [...String(s).matchAll(/\$([^$]+)\$/g)].map((m) => m[1]);
  const rhs = (s) => String(s).replace(/^\$|\$$/g, '').split(/=|\\approx/).pop().trim();
  const num = (s) => ev(String(s).replace(/\$/g, '').replace(/\\circ|\^\\circ/g, ''));
  const deriv = (f, x, h = 1e-5) => (f(x + h) - f(x - h)) / (2 * h);
  const fn = (expr, v = 'x') => (x) => ev(expr, { [v]: x });
  /** "f(x) = …" dans l'énoncé */
  const fOf = (st) => { const m = st.match(/f\(x\) = ([^$]+)\$/); if (!m) throw new Error('f(x) introuvable'); return m[1]; };
  /** Ensemble fini "\{a ; b\}" ou "\emptyset" -> nombres triés */
  const parseSet = (s) => {
    s = String(s).replace(/^\$|\$$/g, '').replace(/^S = /, '');
    if (/\\emptyset/.test(s)) return [];
    const m = s.match(/\\\{(.*)\\\}/);
    if (!m) throw new Error('ensemble illisible ' + s);
    return m[1].split(';').map((x) => num(x.trim())).sort((a, b) => a - b);
  };
  /** Réunion d'intervalles -> prédicat d'appartenance */
  const parseIntervals = (s) => {
    s = String(s).replace(/\$/g, '').replace(/^(Sur |S = )/, '').replace(/ et sur /g, ' \\cup ');
    if (/^\\mathbb\{R\}$/.test(s.trim())) return () => true;
    const parts = s.split('\\cup').map((p) => p.trim());
    const ivs = parts.map((p) => {
      const m = p.match(/^([\[\]])(.*) ; (.*)([\[\]])$/);
      if (!m) throw new Error('intervalle illisible ' + p);
      const lo = /infty/.test(m[2]) ? -Infinity : num(m[2]);
      const hi = /infty/.test(m[3]) ? Infinity : num(m[3]);
      return { lo, hi, loC: m[1] === '[', hiC: m[4] === ']' };
    });
    const f = (x) => ivs.some((I) => (x > I.lo || (I.loC && near(x, I.lo, 1e-12))) && (x < I.hi || (I.hiC && near(x, I.hi, 1e-12))));
    f.ivs = ivs;
    return f;
  };
  /** Compare un prédicat d'ensemble-solution à la vérité sur des points tests */
  const checkSolutionSet = (member, truth, pts) => {
    for (const x of pts) {
      if (!Number.isFinite(x)) continue;
      const a = member(x); const b = truth(x);
      if (a !== b) return `x = ${x} : réponse ${a}, vérité ${b}`;
    }
    return true;
  };
  const testPoints = (pred) => {
    const pts = [-1000, 1000, 0, 0.123];
    for (const I of pred.ivs || []) for (const b of [I.lo, I.hi]) if (Number.isFinite(b)) pts.push(b, b - 1e-6, b + 1e-6, b - 0.5, b + 0.5);
    return pts;
  };
  const opTruth = (op, d) => ({ '>': d > 1e-12, '<': d < -1e-12, '\\ge': d >= -1e-12, '\\le': d <= 1e-12 }[op]);
  const quad = (st, lhsRe) => {
    const m = st.match(lhsRe);
    const P = V.poly(m[1]);
    if (!P) throw new Error('polynôme illisible ' + m[1]);
    return { a: P[2] || 0, b: P[1] || 0, c: P[0] || 0, m };
  };
  const T = (q) => q.title;
  /** exposant (fonction de x) d'un membre e^{…}, e, 1 ou k e^{…} (log sinon) */
  const expo = (side) => {
    side = side.trim();
    if (side === '1') return () => 0;
    if (side === 'e') return () => 1;
    const m = side.match(/^e\^\{(.*)\}$/);
    if (m) return (x) => ev(m[1], { x });
    return (x) => Math.log(ev(side, { x }));
  };

  // ---------------------------------------------------------------------------
  // Vérificateurs
  // ---------------------------------------------------------------------------
  const v1A1 = (q) => {
    const st = q.statement; const A = q.answer;
    if (/Calcul du discriminant/.test(T(q))) {
      const { a, b, c } = quad(st, /P\(x\) = ([^$]+)\$/);
      return +rhs(A) === b * b - 4 * a * c || 'Delta faux';
    }
    if (/Nombre de solutions/.test(T(q))) {
      const { a, b, c } = quad(st, /\$([^$]+) = 0\$/);
      const d = b * b - 4 * a * c;
      const exp = d > 0 ? /Deux/ : d === 0 ? /seule/ : /Aucune/;
      return exp.test(A) || 'nombre de solutions faux';
    }
    if (/Résolution d'une équation du second degré/.test(T(q))) {
      const { a, b, c } = quad(st, /\$([^$]+) = 0\$/);
      const d = b * b - 4 * a * c;
      const roots = d < 0 ? [] : d === 0 ? [-b / (2 * a)] : [(-b - Math.sqrt(d)) / (2 * a), (-b + Math.sqrt(d)) / (2 * a)].sort((x, y) => x - y);
      const got = parseSet(A);
      return (got.length === roots.length && got.every((x, i) => near(x, roots[i]))) || `racines ${roots} ≠ ${got}`;
    }
    if (/Forme canonique/.test(T(q))) {
      const f = fn(fOf(st)); const g = fn(rhs(A));
      return [-2, 0.5, 3].every((x) => near(f(x), g(x))) || 'forme canonique fausse';
    }
    if (/Sommet/.test(T(q))) {
      const { a, b, c } = quad(st, /y = ([^$]+)\$/);
      const al = -b / (2 * a); const be = a * al * al + b * al + c;
      const m = A.match(/S\((-?\d+) ; (-?\d+)\)/);
      return (near(+m[1], al) && near(+m[2], be)) || 'sommet faux';
    }
    if (/Extremum d'une fonction polynôme du second degré/.test(T(q))) {
      const { a, b, c } = quad(st, /f\(x\) = ([^$]+)\$/);
      const al = -b / (2 * a); const be = a * al * al + b * al + c;
      const m = A.match(/un (minimum|maximum) égal à \$(-?\d+)\$, atteint en \$x = (-?\d+)\$/);
      return (m && (m[1] === 'minimum') === (a > 0) && near(+m[2], be) && near(+m[3], al)) || 'extremum faux';
    }
    if (/Inéquation du second degré/.test(T(q))) {
      const m = st.match(/\$([^$]+) (>|<|\\ge|\\le) 0\$/);
      const f = fn(m[1]);
      const pred = parseIntervals(A);
      return checkSolutionSet(pred, (x) => opTruth(m[2], f(x)), testPoints(pred));
    }
    if (/Trinôme à paramètre/.test(T(q))) {
      const m = st.match(/\$(\d*)x\^2 \+ mx \+ (\d+) = 0\$/);
      const a = m[1] === '' ? 1 : +m[1]; const c = +m[2];
      const r = A.match(/m = (-?\d+)\$ ou \$m = (-?\d+)/);
      return (r && (+r[1]) ** 2 === 4 * a * c && +r[1] === -r[2]) || 'paramètre faux';
    }
    if (/Somme et produit/.test(T(q))) {
      const r1 = +st.match(/\$(-?\d+)\$ est une racine/)[1];
      const f = fn(st.match(/P\(x\) = ([^$]+)\$/)[1]);
      const r2 = +rhs(A);
      return (f(r1) === 0 && f(r2) === 0 && r2 !== r1) || 'autre racine fausse';
    }
    return 'famille 1A1 non reconnue: ' + T(q);
  };

  const v1A2 = (q) => {
    const st = q.statement; const A = q.answer;
    if (/Taux de variation/.test(T(q))) {
      const f = fn(fOf(st));
      const m = st.match(/entre \$(-?\d+)\$ et \$(-?\d+)\$/);
      return near(num(A), (f(+m[2]) - f(+m[1])) / (m[2] - m[1])) || 'taux faux';
    }
    if (/pente de la tangente/.test(T(q))) {
      const m = st.match(/A\((-?\d+) ; (-?\d+)\).*B\((-?\d+) ; (-?\d+)\)/);
      return near(num(rhs(A)), (m[4] - m[2]) / (m[3] - m[1])) || 'pente fausse';
    }
    if (/Lecture de la tangente/.test(T(q))) {
      const x0 = +st.match(/abscisse \$(-?\d+)\$/)[1];
      const y = fn(st.match(/\$y = ([^$]+)\$/)[1]);
      const m = A.match(/= (-?\d+)\$ et \$f'\(-?\d+\) = (-?\d+)/);
      return (near(+m[1], y(x0)) && near(+m[2], y(1) - y(0))) || 'lecture fausse';
    }
    if (/nombre dérivé|Nombre dérivé de la fonction racine/.test(T(q))) {
      const f = st.includes('\\sqrt{x}') ? Math.sqrt : fn(fOf(st));
      const x0 = +st.match(/f'\((-?\d+)\)/)[1];
      return near(num(rhs(A)), deriv(f, x0), 1e-5) || 'nombre dérivé faux';
    }
    if (/Équation de la tangente/.test(T(q))) {
      const f = fn(fOf(st)); const x0 = +st.match(/abscisse \$(-?\d+)\$/)[1];
      const y = fn(rhs(A));
      return (near(y(x0), f(x0)) && near(y(x0 + 1) - y(x0), deriv(f, x0), 1e-5)) || 'tangente fausse';
    }
    if (/Tangente parallèle/.test(T(q))) {
      const f = fn(fOf(st)); const d = fn(st.match(/droite d'équation \$y = ([^$]+)\$/)[1]);
      return near(deriv(f, num(rhs(A))), d(1) - d(0), 1e-5) || 'abscisse fausse';
    }
    if (/Tangentes horizontales/.test(T(q))) {
      const f = fn(fOf(st));
      const m = A.match(/x = (-?\d+)\$ et \$x = (-?\d+)/);
      return (m && m[1] !== m[2] && near(deriv(f, +m[1]), 0, 1e-5) && near(deriv(f, +m[2]), 0, 1e-5)) || 'tangentes horizontales fausses';
    }
    if (/Intersection d'une tangente/.test(T(q))) {
      const f = fn(fOf(st)); const x0 = +st.match(/abscisse \$(-?\d+)\$/)[1];
      const m = deriv(f, x0); const xi = x0 - f(x0) / m;
      return near(num(rhs(A)), xi, 1e-5) || 'intersection fausse';
    }
    return 'famille 1A2 non reconnue: ' + T(q);
  };

  /** Vérification générique d'une dérivée f -> f' */
  const checkDerivative = (q) => {
    const f = fn(fOf(q.statement));
    const g = fn(q.answer.match(/f'\(x\) = ([^$]+)\$/)[1]);
    let ok = 0;
    for (const x of [1.37, 2.71, 0.43, -0.61, -1.9, 3.3]) {
      const d = deriv(f, x); const y = g(x);
      if (!Number.isFinite(d) || !Number.isFinite(y) || Math.abs(d) > 1e6) continue;
      if (!near(d, y, 1e-5)) return `f'(${x}) = ${d} ≠ ${y}`;
      ok++;
    }
    return ok >= 2 || 'pas assez de points';
  };

  const v1A3 = (q) => {
    const st = q.statement; const A = q.answer;
    if (/^Dérivée/.test(T(q))) return checkDerivative(q);
    if (/^Variations/.test(T(q))) {
      const f = fn(fOf(st)); const inc = /croissante/.test(st.split('?')[0].split('Où').pop().split('intervalle').pop()) && !/décroissante/.test(st);
      const pred = parseIntervals(A);
      return checkSolutionSet(pred, (x) => (inc ? deriv(f, x) > 1e-6 : deriv(f, x) < -1e-6), [-50, -7.3, -3.5, -2.5, -1.5, -0.5, 0.5, 1.5, 2.5, 3.5, 4.5, 6.3, 50].filter((x) => Math.abs(deriv(f, x)) > 1e-4));
    }
    if (/Extremum local/.test(T(q)) || /Optimisation/.test(T(q))) {
      const f = fn(fOf(st));
      const m = A.match(/^\$(-?\d+)\$, atteint en \$x = (-?\d+)\$/);
      const x = +m[2];
      const wantMax = /maximum/.test(st);
      const d2 = deriv((t) => deriv(f, t, 1e-4), x, 1e-3);
      return (near(f(x), +m[1]) && near(deriv(f, x), 0, 1e-4) && (wantMax ? d2 < 0 : d2 > 0)) || 'extremum faux';
    }
    return 'famille 1A3 non reconnue: ' + T(q);
  };

  const v1A4 = (q) => {
    const st = q.statement; const A = q.answer;
    if (/Propriétés algébriques|Puissance d'une exponentielle/.test(T(q))) {
      const L = fn(st.match(/[AB] = ([^$]+)\$/)[1]); const R = fn(rhs(A));
      return [0.3, -0.7, 1.1].every((x) => near(L(x), R(x))) || 'simplification fausse';
    }
    if (/puissances de \$e\$/.test(T(q))) return near(num(st.match(/C = ([^$]+)\$/)[1]), num(rhs(A))) || 'puissance fausse';
    if (/^Dérivée/.test(T(q))) return checkDerivative(q);
    if (/^Équation/.test(T(q))) {
      const m = st.match(/équation : \$([^$]+) = ([^$]+)\$/);
      const L = expo(m[1]); const R = expo(m[2]);
      const S = parseSet(A);
      // L - R = 0 a exactement une solution (exponentielles de fonctions affines distinctes)
      return (S.length === 1 && near(L(S[0]), R(S[0]), 1e-9)) || 'solution fausse';
    }
    if (/^Inéquation/.test(T(q))) {
      const m = st.match(/inéquation : \$([^$]+) (>|<|\\ge|\\le) ([^$]+)\$/);
      const L = expo(m[1]); const R = expo(m[3]);
      const pred = parseIntervals(A);
      return checkSolutionSet(pred, (x) => opTruth(m[2], L(x) - R(x)), testPoints(pred));
    }
    if (/^Étude|^Extremum/.test(T(q))) {
      const f = fn(fOf(st));
      const m = A.match(/un (minimum|maximum) en \$x = ([^$]+)\$/);
      const x = num(m[2]);
      const d2 = deriv((t) => deriv(f, t, 1e-4), x, 1e-3);
      return (near(deriv(f, x), 0, 1e-4) && (m[1] === 'maximum' ? d2 < 0 : d2 > 0)) || 'extremum faux';
    }
    if (/^Signe/.test(T(q))) {
      const f = fn(fOf(st)); const pred = parseIntervals(A);
      return checkSolutionSet(pred, (x) => f(x) >= -1e-12, testPoints(pred).filter((x) => Math.abs(x) < 100));
    }
    return 'famille 1A4 non reconnue: ' + T(q);
  };

  const v1A5 = (q) => {
    const st = q.statement; const A = q.answer;
    if (/Calcul d'un terme/.test(T(q))) {
      const e = st.match(/u_n = ([^$]+)\$/)[1]; const k = +st.match(/u_\{(\d+)\}\$\./)[1];
      return near(ev(e, { n: k }), num(rhs(A))) || 'terme faux';
    }
    if (/^Suite (définie par récurrence|récurrente)/.test(T(q))) {
      let u = +st.match(/u_0 = (-?\d+)/)[1]; const e = st.match(/u_\{n\+1\} = ([^$]+)\$/)[1];
      const N = +st.match(/Calculer \$u_(\d+)\$/)[1];
      for (let n = 0; n < N; n++) u = ev(e, { U: u, n });
      return near(u, num(rhs(A))) || 'terme récurrent faux';
    }
    if (/Différence/.test(T(q))) {
      const e = st.match(/u_n = ([^$]+)\$/)[1]; const g = rhs(A);
      return [0, 1, 2, 5].every((n) => near(ev(e, { n: n + 1 }) - ev(e, { n }), ev(g, { n }))) || 'différence fausse';
    }
    if (/Sens de variation d'une suite récurrente/.test(T(q))) {
      let u = +st.match(/u_0 = (-?\d+)/)[1]; const e = st.match(/u_\{n\+1\} = ([^$]+)\$/)[1];
      let inc = true; let dec = true;
      for (let n = 0; n < 8; n++) { const w = ev(e, { U: u, n }); if (w <= u) inc = false; if (w >= u) dec = false; u = w; }
      return (inc ? /croissante/.test(A) && !/décroissante/.test(A) : dec ? /décroissante/.test(A) : false) || 'sens faux';
    }
    if (/quotient/.test(T(q))) {
      const e = st.match(/u_n = ([^$]+)\$/)[1];
      const inc = ev(e, { n: 1 }) > ev(e, { n: 0 });
      return (inc ? !/décroissante/.test(A) : /décroissante/.test(A)) || 'sens faux';
    }
    if (/seuil/.test(T(q))) {
      const e = st.match(/u_n = ([^$]+)\$/)[1];
      const m = st.match(/u_n (>|<) (\d+)\$/);
      let n = 0;
      while (!(m[1] === '>' ? ev(e, { n }) > +m[2] : ev(e, { n }) < +m[2])) n++;
      return n === +rhs(A) || `seuil ${n}`;
    }
    if (/majorée/.test(T(q))) {
      const e = st.match(/u_n = ([^$]+)\$/)[1];
      const u = (n) => ev(e, { n });
      const inc = u(1) > u(0); const L = u(1e9);
      const m = A.match(/est (croissante|décroissante) et (majorée|minorée) par \$(-?\d+)\$/);
      return (m && (m[1] === 'croissante') === inc && (m[2] === 'majorée') === inc && near(+m[3], L, 1e-6)) || 'propriété fausse';
    }
    return 'famille 1A5 non reconnue: ' + T(q);
  };

  const v1A6 = (q) => {
    const st = q.statement; const A = q.answer;
    if (/Terme d'une suite arithmétique/.test(T(q))) {
      const m = st.match(/u_(\d) = (-?\d+)\$ et de raison \$r = (-?\d+)\$\. Calculer \$u_\{(\d+)\}/);
      return +rhs(A) === +m[2] + (m[4] - m[1]) * m[3] || 'terme arithmétique faux';
    }
    if (/Terme d'une suite géométrique/.test(T(q))) {
      const m = st.match(/v_0 = (-?\d+)\$ et de raison \$q = (-?\d+)\$\. Calculer \$v_(\d+)/);
      return +rhs(A) === m[1] * m[2] ** m[3] || 'terme géométrique faux';
    }
    if (/Raison d'une suite arithmétique/.test(T(q))) {
      const m = st.match(/u_\{(\d+)\} = (-?\d+)\$ et \$u_\{(\d+)\} = (-?\d+)/);
      const r = (m[4] - m[2]) / (m[3] - m[1]); const u0 = m[2] - m[1] * r;
      const a = A.match(/r = (-?\d+)\$ et \$u_0 = (-?\d+)/);
      return (a && +a[1] === r && +a[2] === u0) || 'raison fausse';
    }
    if (/Raison d'une suite géométrique/.test(T(q))) {
      const m = st.match(/v_\{(\d+)\} = (\d+)\$ et \$v_\{(\d+)\} = (\d+)/);
      const qq = Math.sqrt(m[4] / m[2]); const v0 = m[2] / qq ** m[1];
      const a = A.match(/q = (\d+)\$ et \$v_0 = (\d+)/);
      return (a && near(+a[1], qq) && near(+a[2], v0)) || 'raison géométrique fausse';
    }
    if (/Somme des premiers entiers/.test(T(q))) {
      const n = +st.match(/\\dots \+ (\d+)\$/)[1];
      let s = 0; for (let k = 1; k <= n; k++) s += k;
      return s === +rhs(A) || 'somme fausse';
    }
    if (/Somme de termes consécutifs/.test(T(q))) {
      const m = st.match(/u_0 = (-?\d+)\$ et de raison \$(-?\d+)\$\. Calculer \$S = u_0 \+ u_1 \+ \\dots \+ u_\{(\d+)\}/);
      let s = 0; for (let k = 0; k <= +m[3]; k++) s += +m[1] + k * m[2];
      return near(s, num(rhs(A))) || 'somme arithmétique fausse';
    }
    if (/Somme de termes d'une suite géométrique/.test(T(q))) {
      const m = st.match(/v_0 = (\d+)\$ et de raison \$(\d+)\$\. Calculer \$S = v_0 \+ v_1 \+ \\dots \+ v_\{(\d+)\}/);
      let s = 0; for (let k = 0; k <= +m[3]; k++) s += m[1] * m[2] ** k;
      return s === +rhs(A) || 'somme géométrique fausse';
    }
    if (/pourcentage/.test(T(q))) {
      const m = st.match(/vaut \$(\d+)\$ au départ et (augmente|diminue) de \$(\d+)\\,\\%\$ chaque année\. .* au bout de \$(\d+)\$ ans/);
      const t = (m[2] === 'augmente' ? 1 : -1) * m[3];
      const val = m[1] * (1 + t / 100) ** m[4];
      return Math.abs(num(rhs(A)) - val) <= 0.005 + 1e-9 || 'valeur fausse';
    }
    if (/arithmético-géométrique/.test(T(q))) {
      const e = st.match(/u_\{n\+1\} = ([^$]+)\$/)[1];
      const l = num(rhs(A));
      return near(ev(e, { U: l }), l) || 'point fixe faux';
    }
    if (/Reconnaître une suite géométrique/.test(T(q))) {
      const e = st.match(/u_n = ([^$]+)\$/)[1];
      const u0 = ev(e, { n: 0 }); const r = ev(e, { n: 1 }) / u0;
      const m = A.match(/raison \$(-?\d+)\$ et de premier terme \$u_0 = (-?\d+)\$/);
      return (m && near(+m[1], r) && near(+m[2], u0) && near(ev(e, { n: 2 }) / ev(e, { n: 1 }), r)) || 'nature fausse';
    }
    if (/Reconnaître une suite arithmétique/.test(T(q))) {
      const e = st.match(/u_n = ([^$]+)\$/)[1];
      const u0 = ev(e, { n: 0 }); const r = ev(e, { n: 1 }) - u0;
      const m = A.match(/raison \$(-?\d+)\$ et de premier terme \$u_0 = (-?\d+)\$/);
      return (m && /arithmétique/.test(A) && near(+m[1], r) && near(+m[2], u0)) || 'nature fausse';
    }
    return 'famille 1A6 non reconnue: ' + T(q);
  };

  const v1G1 = (q) => {
    const st = q.statement; const A = q.answer;
    if (/Valeurs remarquables/.test(T(q))) {
      const m = st.match(/\$\\(cos|sin)\\left\((.*)\\right\)\$/);
      const x = num(m[2]);
      return near(m[1] === 'cos' ? Math.cos(x) : Math.sin(x), num(rhs(A)), 1e-9) || 'valeur fausse';
    }
    if (/degrés-radians/.test(T(q))) {
      const d = +st.match(/\$(-?\d+)\^\\circ\$/)[1];
      return near(num(A.replace(/ rad$/, '')), d * Math.PI / 180) || 'conversion fausse';
    }
    if (/radians-degrés/.test(T(q))) {
      const r = num(st.match(/Convertir \$([^$]+)\$ rad/)[1]);
      return near(num(A.replace(/\^\\circ/, '')), r * 180 / Math.PI) || 'conversion fausse';
    }
    if (/cos\^2 x/.test(T(q))) {
      const m = st.match(/x \\in \\left\[(.*) ; (.*)\\right\]\$ et que \$\\(sin|cos)\(x\) = ([^$]+)\$/);
      const lo = num(m[1]); const hi = num(m[2]); const g = num(m[4]);
      // x dans [lo ; hi] tel que fn(x) = g
      let x = m[3] === 'sin' ? Math.asin(g) : Math.acos(g);
      const cands = [x, Math.PI - x, -x, -Math.PI - x, x - 2 * Math.PI, Math.PI + x].filter((t) => t >= lo - 1e-9 && t <= hi + 1e-9 && near(m[3] === 'sin' ? Math.sin(t) : Math.cos(t), g));
      if (!cands.length) return 'aucun x';
      x = cands[0];
      return near(m[3] === 'sin' ? Math.cos(x) : Math.sin(x), num(rhs(A))) || 'valeur fausse';
    }
    if (/Mesure principale/.test(T(q))) {
      const a = num(st.match(/mesure \$([^$]+)\$/)[1]); const m = num(A);
      const k = (a - m) / (2 * Math.PI);
      return (m > -Math.PI + 1e-9 && m <= Math.PI + 1e-9 && near(k, Math.round(k), 1e-9)) || 'mesure principale fausse';
    }
    if (/Angles associés/.test(T(q))) {
      const c = num(st.match(/\\cos\(x\) = ([^$]+)\$/)[1]); const s = num(st.match(/\\sin\(x\) = ([^$]+)\$/)[1]);
      const x = Math.atan2(s, c);
      const e = st.match(/A = ([^$]+)\$/)[1];
      return near(ev(e, { x }), num(rhs(A)), 1e-9) || 'valeur fausse';
    }
    if (/Équation trigonométrique/.test(T(q))) {
      const m = st.match(/dans \$(.*)\$ l'équation : \$\\(cos|sin)\(x\) = ([^$]+)\$/);
      const dom0 = /\\pi ; \\pi/.test(m[1]);
      const lo = dom0 ? -Math.PI : 0; const hi = dom0 ? Math.PI : 2 * Math.PI;
      const v = num(m[3]); const f = m[2] === 'cos' ? Math.cos : Math.sin;
      const base = m[2] === 'cos' ? [Math.acos(v), -Math.acos(v)] : [Math.asin(v), Math.PI - Math.asin(v)];
      const sols = [];
      for (const b of base) for (let k = -3; k <= 3; k++) {
        const x = b + 2 * k * Math.PI;
        const inDom = dom0 ? (x > lo + 1e-9 && x <= hi + 1e-9) : (x >= lo - 1e-9 && x < hi - 1e-9);
        if (inDom && !sols.some((y) => near(x, y, 1e-9))) sols.push(x);
      }
      sols.sort((a, b) => a - b);
      const got = parseSet(A);
      return (got.length === sols.length && got.every((x, i) => near(x, sols[i], 1e-9) && near(f(x), v, 1e-9))) || `solutions ${sols} ≠ ${got}`;
    }
    return 'famille 1G1 non reconnue: ' + T(q);
  };

  const pt = (s, name) => { const m = s.match(new RegExp(`${name}\\((-?\\d+) ; (-?\\d+)\\)`)); return [+m[1], +m[2]]; };
  const v1G2 = (q) => {
    const st = q.statement; const A = q.answer;
    if (/repère orthonormé$/.test(T(q))) {
      const u = pt(st, '\\\\vec\\{u\\}'); const v = pt(st, '\\\\vec\\{v\\}');
      return +rhs(A) === u[0] * v[0] + u[1] * v[1] || 'produit scalaire faux';
    }
    if (/à partir de points/.test(T(q))) {
      const a = pt(st, 'A'); const b = pt(st, 'B'); const c = pt(st, 'C');
      return +rhs(A) === (b[0] - a[0]) * (c[0] - a[0]) + (b[1] - a[1]) * (c[1] - a[1]) || 'produit scalaire faux';
    }
    if (/normes et angle/.test(T(q))) {
      const nu = +st.match(/\\\|\\vec\{u\}\\\| = (\d+)/)[1]; const nv = +st.match(/\\\|\\vec\{v\}\\\| = (\d+)/)[1];
      const th = num(st.match(/\(\\vec\{u\}, \\vec\{v\}\) = ([^$]+)\$/)[1]);
      return near(num(rhs(A)), nu * nv * Math.cos(th), 1e-9) || 'produit scalaire faux';
    }
    if (/Orthogonalité et paramètre/.test(T(q))) {
      const a = +st.match(/\\vec\{u\}\((-?\d+) ; m\)/)[1]; const v = pt(st, '\\\\vec\\{v\\}');
      return near(a * v[0] + num(rhs(A)) * v[1], 0) || 'm faux';
    }
    if (/projection/.test(T(q))) {
      const ab = +st.match(/AB = (\d+)/)[1]; const ah = +st.match(/AH = (\d+)/)[1];
      return +rhs(A) === (/demi-droite/.test(st) ? 1 : -1) * ab * ah || 'projection fausse';
    }
    const norms = () => [+st.match(/\\\|\\vec\{u\}\\\| = (\d+)/)[1], +st.match(/\\\|\\vec\{v\}\\\| = (\d+)/)[1]];
    if (/Norme d'une somme/.test(T(q))) {
      const [nu, nv] = norms(); const d = +st.match(/\\vec\{u\} \\cdot \\vec\{v\} = (-?\d+)/)[1];
      const s = /\\vec\{u\} \+ \\vec\{v\}\\\|\^2\$\./.test(st) ? 1 : -1;
      return +rhs(A) === nu * nu + nv * nv + 2 * s * d || 'norme fausse';
    }
    if (/polarisation/.test(T(q))) {
      const [nu, nv] = norms(); const m = st.match(/\\vec\{u\} (\+|-) \\vec\{v\}\\\|\^2 = (-?\d+)/);
      const d = (m[1] === '+' ? 1 : -1) * (+m[2] - nu * nu - nv * nv) / 2;
      return near(num(rhs(A)), d) || 'polarisation fausse';
    }
    if (/Bilinéarité/.test(T(q))) {
      const [nu, nv] = norms(); const d = +st.match(/\\vec\{u\} \\cdot \\vec\{v\} = (-?\d+)\$/)[1];
      const m = st.match(/Calculer \$\((.*)\) \\cdot \((.*)\)\$/);
      const co = (s) => { const u = ev(s.replace(/\\vec\{u\}/g, '(1)').replace(/\\vec\{v\}/g, '(0)')); const v = ev(s.replace(/\\vec\{v\}/g, '(1)').replace(/\\vec\{u\}/g, '(0)')); return [u, v]; };
      const [a, b] = co(m[1]); const [c, e] = co(m[2]);
      return +rhs(A) === a * c * nu * nu + (a * e + b * c) * d + b * e * nv * nv || 'bilinéarité fausse';
    }
    if (/Angle entre deux vecteurs/.test(T(q))) {
      const u = pt(st, '\\\\vec\\{u\\}'); const v = pt(st, '\\\\vec\\{v\\}');
      const th = Math.acos((u[0] * v[0] + u[1] * v[1]) / Math.hypot(...u) / Math.hypot(...v));
      return near(num(A), th, 1e-9) || 'angle faux';
    }
    if (/dans un (carré|rectangle|triangle équilatéral)/.test(T(q))) {
      let P;
      if (/carré/.test(T(q))) { const a = +st.match(/côté \$(\d+)\$/)[1]; P = { A: [0, 0], B: [a, 0], C: [a, a], D: [0, a] }; }
      else if (/rectangle/.test(T(q))) { const L = +st.match(/AB = (\d+)/)[1]; const l = +st.match(/AD = (\d+)/)[1]; P = { A: [0, 0], B: [L, 0], C: [L, l], D: [0, l] }; }
      else { const a = +st.match(/côté \$(\d+)\$/)[1]; P = { A: [0, 0], B: [a, 0], C: [a / 2, a * Math.sqrt(3) / 2] }; }
      const m = st.match(/\\overrightarrow\{([A-D])([A-D])\} \\cdot \\overrightarrow\{([A-D])([A-D])\}/);
      const vec = (p, r) => [P[r][0] - P[p][0], P[r][1] - P[p][1]];
      const x = vec(m[1], m[2]); const y = vec(m[3], m[4]);
      return near(num(rhs(A)), x[0] * y[0] + x[1] * y[1], 1e-9) || 'produit scalaire figure faux';
    }
    return 'famille 1G2 non reconnue: ' + T(q);
  };

  const v1G3 = (q) => {
    const st = q.statement; const A = q.answer;
    const g = (re) => +st.match(re)[1];
    if (/calcul d'une longueur/.test(T(q))) {
      const c = g(/AB = (\d+)/); const b = g(/AC = (\d+)/); const ang = g(/= (\d+)\^\\circ/);
      return near(num(rhs(A)), Math.sqrt(b * b + c * c - 2 * b * c * Math.cos(ang * Math.PI / 180)), 1e-9) || 'longueur fausse';
    }
    if (/cosinus d'un angle/.test(T(q))) {
      const a = g(/BC = (\d+)/); const b = g(/AC = (\d+)/); const c = g(/AB = (\d+)/);
      return near(num(rhs(A)), (b * b + c * c - a * a) / (2 * b * c)) || 'cosinus faux';
    }
    if (/Mesure d'un angle/.test(T(q))) {
      const a = g(/BC = (\d+)/); const b = g(/AC = (\d+)/); const c = g(/AB = (\d+)/);
      const ang = Math.acos((b * b + c * c - a * a) / (2 * b * c)) * 180 / Math.PI;
      return near(num(A.replace(/\^\\circ/, '')), ang, 1e-9) || 'angle faux';
    }
    if (/Vecteur normal/.test(T(q))) {
      const e = st.match(/d'équation \$(.*) = 0\$/)[1];
      const f = (x, y) => ev(e, { x, y });
      const a = f(1, 0) - f(0, 0); const b = f(0, 1) - f(0, 0);
      const n = pt(A, '\\\\vec\\{n\\}');
      return (n[0] * b - n[1] * a === 0 && (n[0] !== 0 || n[1] !== 0)) || 'vecteur non normal';
    }
    if (/vecteur normal donné/.test(T(q))) {
      const P = pt(st, 'A'); const n = pt(st, '\\\\vec\\{n\\}');
      const m = A.match(/\$(.*) = (-?\d+)\$/);
      const f = (x, y) => ev(m[1], { x, y }) - +m[2];
      return (near(f(P[0], P[1]), 0) && near(f(1, 0) - f(0, 0), n[0]) && near(f(0, 1) - f(0, 0), n[1])) || 'équation fausse';
    }
    const circ = (s) => { const m = s.match(/\$(.*) = (\d+)\$/); return { f: (x, y) => ev(m[1], { x, y }), r2: +m[2] }; };
    if (/Équation d'un cercle/.test(T(q))) {
      const C = pt(st, '\\\\Omega'); const r = g(/rayon \$(\d+)\$/);
      const { f, r2 } = circ(A);
      return (r2 === r * r && near(f(C[0], C[1]), 0) && near(f(C[0] + 1, C[1]), 1)) || 'cercle faux';
    }
    if (/Centre et rayon/.test(T(q))) {
      const e = st.match(/tels que \$(.*) = 0\$/)[1]; const f = (x, y) => ev(e, { x, y });
      const C = pt(A, '\\\\Omega'); const r = +A.match(/r = (\d+)/)[1];
      return [[r, 0], [0, r], [-r, 0], [0.6 * r, 0.8 * r]].every(([dx, dy]) => near(f(C[0] + dx, C[1] + dy), 0)) || 'centre/rayon faux';
    }
    if (/diamètre/.test(T(q))) {
      const a = pt(st, 'A'); const b = pt(st, 'B');
      const { f, r2 } = circ(A);
      return (near(f(a[0], a[1]), r2) && near(f(b[0], b[1]), r2) && near(f((a[0] + b[0]) / 2, (a[1] + b[1]) / 2), 0)) || 'cercle de diamètre faux';
    }
    if (/Distance d'un point/.test(T(q))) {
      const P = pt(st, 'A'); const e = st.match(/d'équation \$(.*) = 0\$/)[1];
      const f = (x, y) => ev(e, { x, y });
      const a = f(1, 0) - f(0, 0); const b = f(0, 1) - f(0, 0);
      return near(num(rhs(A)), Math.abs(f(P[0], P[1])) / Math.hypot(a, b)) || 'distance fausse';
    }
    if (/médiane/.test(T(q))) {
      const ab = g(/AB = (\d+)/); const ac = g(/AC = (\d+)/); const bc = g(/BC = (\d+)/);
      // coordonnées : B(0,0), C(bc,0), A tel que AB, AC
      const x = (ab * ab - ac * ac + bc * bc) / (2 * bc); const y2 = ab * ab - x * x;
      return near(num(rhs(A)), (x - bc / 2) ** 2 + y2) || 'médiane fausse';
    }
    return 'famille 1G3 non reconnue: ' + T(q);
  };

  const dv = (s) => num(s);
  const v1S1 = (q) => {
    const st = q.statement; const A = q.answer;
    const get = (re) => dv(st.match(re)[1]);
    if (/Calcul d'une probabilité conditionnelle/.test(T(q))) return near(num(rhs(A)), get(/P\(A \\cap B\) = ([\d{},]+)/) / get(/P\(A\) = ([\d{},]+)/)) || 'P_A(B) fausse';
    if (/Probabilité d'une intersection/.test(T(q))) return near(num(rhs(A)), get(/P\(A\) = ([\d{},]+)/) * get(/P_A\(B\) = ([\d{},]+)/)) || 'intersection fausse';
    if (/probabilités totales/.test(T(q))) {
      const pa = get(/P\(A\) = ([\d{},]+)/);
      return near(num(rhs(A)), pa * get(/P_A\(B\) = ([\d{},]+)/) + (1 - pa) * get(/P_\{\\overline\{A\}\}\(B\) = ([\d{},]+)/)) || 'P(B) fausse';
    }
    if (/Indépendance/.test(T(q))) {
      const ind = near(get(/P\(A\) = ([\d{},]+)/) * get(/P\(B\) = ([\d{},]+)/), get(/P\(A \\cap B\) = ([\d{},]+)/));
      return (ind === /^Oui/.test(A)) || 'indépendance fausse';
    }
    if (/Réunion/.test(T(q))) {
      const a = get(/P\(A\) = ([\d{},]+)/); const b = get(/P\(B\) = ([\d{},]+)/);
      return near(num(rhs(A)), a + b - a * b) || 'réunion fausse';
    }
    if (/Bayes/.test(T(q))) {
      const pa = get(/P\(A\) = ([\d{},]+)/); const b1 = get(/P_A\(B\) = ([\d{},]+)/); const b2 = get(/P_\{\\overline\{A\}\}\(B\) = ([\d{},]+)/);
      const v = pa * b1 / (pa * b1 + (1 - pa) * b2);
      return (Math.abs(num(rhs(A)) - v) <= 0.005 + 1e-9 && (/\\approx/.test(A) || near(num(rhs(A)), v))) || 'Bayes faux';
    }
    if (/tableau d'effectifs/.test(T(q))) {
      const [nAB, nAnB, nnAB, nnAnB] = [...st.matchAll(/\$(\d+)\$ (ont|n'ont)/g)].map((m) => +m[1]);
      const lab = st.match(/Calculer \$(.*)\$\./)[1];
      const v = lab === 'P_B(A)' ? nAB / (nAB + nnAB) : lab === 'P_A(B)' ? nAB / (nAB + nAnB) : nAnB / (nAnB + nnAnB);
      return near(num(rhs(A)), v) || 'probabilité conditionnelle fausse';
    }
    return 'famille 1S1 non reconnue: ' + T(q);
  };

  const law = (st) => [...st.matchAll(/\$P\(X = (-?\d+)\) = ([\d{},]+|p)\$/g)].map((m) => [+m[1], m[2] === 'p' ? null : dv(m[2])]);
  const v1S2 = (q) => {
    const st = q.statement; const A = q.answer;
    if (/manquante/.test(T(q))) {
      const L = law(st); const s = L.reduce((a, [, p]) => a + (p || 0), 0);
      return near(num(rhs(A)), 1 - s) || 'p fausse';
    }
    if (/espérance/.test(T(q))) {
      const L = law(st);
      return (near(L.reduce((a, [, p]) => a + p, 0), 1) && near(num(rhs(A)), L.reduce((a, [x, p]) => a + x * p, 0))) || 'espérance fausse';
    }
    if (/variance/.test(T(q))) {
      const L = law(st); const E = L.reduce((a, [x, p]) => a + x * p, 0);
      return near(num(rhs(A)), L.reduce((a, [x, p]) => a + (x - E) ** 2 * p, 0)) || 'variance fausse';
    }
    if (/Espérance de \$aX \+ b\$/.test(T(q))) {
      const E = dv(st.match(/E\(X\) = ([-\d{},]+)/)[1]); const y = st.match(/Y = ([^$]+)\$/)[1];
      return near(num(rhs(A)), ev(y, { X: E })) || 'E(Y) fausse';
    }
    if (/Variance de \$aX \+ b\$/.test(T(q))) {
      const Vx = dv(st.match(/V\(X\) = ([\d{},]+)/)[1]); const y = st.match(/Y = ([^$]+)\$/)[1];
      const a = ev(y, { X: 1 }) - ev(y, { X: 0 });
      return near(num(rhs(A)), a * a * Vx) || 'V(Y) fausse';
    }
    if (/Jeu équitable/.test(T(q))) {
      const G = [...st.matchAll(/\$(\d+)\$ € avec la probabilité \$([\d{},]+)\$/g)].map((m) => [+m[1], dv(m[2])]);
      return (near(G.reduce((a, [, p]) => a + p, 0), 1) && near(num(rhs(A)), G.reduce((a, [g, p]) => a + g * p, 0))) || 'mise fausse';
    }
    return 'famille 1S2 non reconnue: ' + T(q);
  };

  return {
    '1A1': v1A1, '1A2': v1A2, '1A3': v1A3, '1A4': v1A4, '1A5': v1A5, '1A6': v1A6,
    '1G1': v1G1, '1G2': v1G2, '1G3': v1G3, '1S1': v1S1, '1S2': v1S2
  };
})(V));
}
// ---- recalculs licL2 ----
{
// Recalculs indépendants — Licence 2
Object.assign(VERIFIERS, ((V) => {
  const val = (s) => V.val(String(s).trim());
  const rhs = (s) => String(s).replace(/\$/g, '').split('=').pop().trim();
  const close = (a, b, eps = 1e-9) => Math.abs(a - b) <= eps * Math.max(1, Math.abs(a), Math.abs(b));
  const cell = (x) => val(x.trim());
  const mats = (s, env = 'pmatrix') => [...String(s).matchAll(new RegExp(`\\\\begin\\{${env}\\}(.*?)\\\\end\\{${env}\\}`, 'g'))]
    .map((m) => m[1].split('\\\\').map((r) => r.split('&').map(cell)));
  const tuples = (s) => [...String(s).matchAll(/\(([^()]*?)\)/g)].map((m) => m[1].split(',').map((x) => val(x))).filter((t) => t.every((x) => !Number.isNaN(x)));
  const perms = (n) => (n === 1 ? [[0]] : perms(n - 1).flatMap((p) => Array.from({ length: n }, (_, i) => [...p.slice(0, i), n - 1, ...p.slice(i)])));
  const sgn = (p) => { let s = 1; for (let i = 0; i < p.length; i++) for (let j = i + 1; j < p.length; j++) if (p[i] > p[j]) s = -s; return s; };
  const det = (M) => perms(M.length).reduce((acc, p) => acc + sgn(p) * p.reduce((pr, j, i) => pr * M[i][j], 1), 0);
  const mul = (A, B) => A.map((r) => B[0].map((_, j) => r.reduce((s, x, k) => s + x * B[k][j], 0)));
  const simpson = (f, a, b, n = 2000) => { const h = (b - a) / n; let s = f(a) + f(b); for (let i = 1; i < n; i++) s += f(a + i * h) * (i % 2 ? 4 : 2); return (s * h) / 3; };
  const lambdas = (s) => [...String(s).matchAll(/\\lambda_\d = (-?\d+)/g)].map((m) => +m[1]);
  const ok = (cond, msg) => (cond ? true : msg);
  // polynôme en plusieurs variables "-2x^2y + 3y^3 - x" -> [[c,i,j]]
  const poly2 = (s) => {
    const str = String(s).replace(/\s+/g, '');
    const out = []; const re = /([+-]?)(\d*)(x(?:\^(\d))?)?(y(?:\^(\d))?)?/g; let m;
    while ((m = re.exec(str)) && m[0] !== '') {
      if (!m[2] && !m[3] && !m[5]) return null;
      out.push([(m[1] === '-' ? -1 : 1) * (m[2] ? +m[2] : 1), m[3] ? (m[4] ? +m[4] : 1) : 0, m[5] ? (m[6] ? +m[6] : 1) : 0]);
    }
    return out;
  };
  const ev2 = (P, x, y) => P.reduce((s, [c, i, j]) => s + c * x ** i * y ** j, 0);
  const grad2 = (P, x, y) => [P.reduce((s, [c, i, j]) => s + (i ? c * i * x ** (i - 1) * y ** j : 0), 0), P.reduce((s, [c, i, j]) => s + (j ? c * j * x ** i * y ** (j - 1) : 0), 0)];
  const piVal = (s) => { // "\frac{3\pi}{2}", "5\pi", "\pi"
    s = String(s).replace(/\s+/g, '');
    let m;
    if ((m = s.match(/^\\frac\{(\d*)\\pi\}\{(\d+)\}$/))) return (m[1] ? +m[1] : 1) * Math.PI / +m[2];
    if ((m = s.match(/^(\d*)\\pi$/))) return (m[1] ? +m[1] : 1) * Math.PI;
    return NaN;
  };

  return {
    // ----------------------------------------------------------------- DET
    'L2-DET/1': (q) => ok(close(det(mats(q.statement)[0]), val(rhs(q.answer))), 'det 2x2'),
    'L2-DET/2': (q) => ok(close(det(mats(q.statement)[0]), val(rhs(q.answer))), 'det 3x3'),
    'L2-DET/3': (q) => {
      const n = +q.statement.match(/\\mathcal\{M\}_\{(\d+)\}/)[1];
      const a = +q.statement.match(/\\det\(A\) = (-?\d+)/)[1];
      const b = +q.statement.match(/\\det\(B\) = (-?\d+)/)[1];
      const expr = q.statement.match(/Calculer \$\\det\((.*?)\)\$/)[1];
      const m = expr.match(/^(-?\d*)A(?:\^\{(-?\d+)\})?B(?:\^\{(T|2)\})?$/);
      if (!m) return 'expr non reconnue ' + expr;
      const k = m[1] === '' ? 1 : m[1] === '-' ? -1 : +m[1];
      const p = m[2] ? +m[2] : 1; const e = m[3] === '2' ? 2 : 1;
      return ok(close(k ** n * a ** p * b ** e, val(rhs(q.answer))), 'det propriétés');
    },
    'L2-DET/4': (q) => ok(close(det(mats(q.statement, 'vmatrix')[0]), val(rhs(q.answer))), 'Vandermonde'),
    // ----------------------------------------------------------------- RED1
    'L2-RED1/1': (q) => {
      const tr = +q.statement.match(/Tr\}\(A\) = (-?\d+)/)[1]; const d = +q.statement.match(/\\det\(A\) = (-?\d+)/)[1];
      const [l1, l2] = lambdas(q.answer); return ok(l1 !== l2 && l1 + l2 === tr && l1 * l2 === d, 'vp trace/det');
    },
    'L2-RED1/2': (q) => {
      const A = mats(q.statement)[0]; const [l1, l2] = lambdas(q.answer);
      return ok(l1 + l2 === A[0][0] + A[1][1] && l1 * l2 === det(A), 'vp matrice');
    },
    'L2-RED1/3': (q) => {
      const A = mats(q.statement)[0]; const l = +q.statement.match(/\\lambda = (-?\d+)/)[1]; const v = tuples(q.answer)[0];
      const Av = [A[0][0] * v[0] + A[0][1] * v[1], A[1][0] * v[0] + A[1][1] * v[1]];
      return ok((v[0] || v[1]) && Av[0] === l * v[0] && Av[1] === l * v[1], 'vecteur propre');
    },
    'L2-RED1/4': (q) => {
      const A = mats(q.statement)[0]; const t = A[0][0] + A[1][1]; const disc = t * t - 4 * det(A);
      const scalar = A[0][1] === 0 && A[1][0] === 0 && A[0][0] === A[1][1];
      if (scalar) return 'matrice scalaire inattendue';
      const exp = disc > 0 ? /^Oui : .*deux racines réelles distinctes/ : disc === 0 ? /^Non : valeur propre double/ : /^Non dans .*pas de racine réelle/;
      return ok(exp.test(q.answer), 'diagonalisabilité');
    },
    // ----------------------------------------------------------------- RED2
    'L2-RED2/1': (q) => {
      const A = mats(q.statement)[0]; const A2 = mul(A, A);
      const s = rhs(q.answer).replace(/\s+/g, ''); let al = 0, be = 0;
      for (const m of s.matchAll(/([+-]?)(\d*)(A|I_2)/g)) { const c = (m[1] === '-' ? -1 : 1) * (m[2] ? +m[2] : 1); if (m[3] === 'A') al += c; else be += c; }
      return ok([0, 1].every((i) => [0, 1].every((j) => A2[i][j] === al * A[i][j] + (i === j ? be : 0))), 'Cayley-Hamilton');
    },
    'L2-RED2/2': (q) => {
      const A = mats(q.statement)[0];
      const s = rhs(q.answer).replace(/\s+/g, ''); let al = 0, be = 0;
      for (const m of s.matchAll(/([+-]?)(\\frac\{\d+\}\{\d+\}|\d*)(A|I_2)/g)) { const c = (m[1] === '-' ? -1 : 1) * (m[2] ? val(m[2]) : 1); if (m[3] === 'A') be += c; else al += c; }
      const B = [[al + be * A[0][0], be * A[0][1]], [be * A[1][0], al + be * A[1][1]]];
      const P = mul(B, A);
      return ok(close(P[0][0], 1) && close(P[1][1], 1) && close(P[0][1], 0) && close(P[1][0], 0), 'inverse CH');
    },
    'L2-RED2/3': (q) => {
      const T = mats(q.statement)[0]; const diag = [T[0][0], T[1][1], T[2][2]].sort((a, b) => a - b);
      const roots = [];
      for (const m of rhs(q.answer).matchAll(/(?:\(X ([+-]) (\d+)\)|X)(?:\^(\d))?/g)) {
        const r = m[1] ? (m[1] === '-' ? 1 : -1) * +m[2] : 0; const mult = m[3] ? +m[3] : 1;
        for (let i = 0; i < mult; i++) roots.push(r);
      }
      roots.sort((a, b) => a - b);
      return ok(roots.length === 3 && roots.every((r, i) => r === diag[i]), 'polynôme caractéristique triangulaire');
    },
    'L2-RED2/4': (q) => {
      const N = mats(q.statement)[0]; let P = N; let p = 1;
      while (P.flat().some((x) => x !== 0) && p < 10) { P = mul(P, N); p++; }
      return ok(+q.answer.match(/p = (\d+)/)[1] === p, 'nilpotence');
    },
    // ----------------------------------------------------------------- DUA
    'L2-DUA/1': (q) => {
      const phi = q.statement.match(/\\varphi = (.*?)\$/)[1].replace(/\s+/g, ''); const c = [0, 0, 0];
      for (const m of phi.matchAll(/([+-]?)(\d*)e_(\d)\^\*/g)) c[+m[3] - 1] += (m[1] === '-' ? -1 : 1) * (m[2] ? +m[2] : 1);
      const u = tuples(q.statement.split('pour')[1])[0];
      return ok(c[0] * u[0] + c[1] * u[1] + c[2] * u[2] === val(rhs(q.answer)), 'forme linéaire');
    },
    'L2-DUA/2': (q) => {
      const [e1, e2] = tuples(q.statement); const k = +q.statement.match(/forme linéaire \$e_(\d)\^\*/)[1];
      const c = { x: 0, y: 0 };
      for (const m of rhs(q.answer).replace(/\s+/g, '').matchAll(/([+-]?)(\d*)([xy])/g)) c[m[3]] += (m[1] === '-' ? -1 : 1) * (m[2] ? +m[2] : 1);
      const f = (v) => c.x * v[0] + c.y * v[1];
      return ok(f(e1) === (k === 1 ? 1 : 0) && f(e2) === (k === 2 ? 1 : 0), 'base duale');
    },
    'L2-DUA/3': (q) => {
      const n = +q.statement.match(/dimension \$(\d+)\$/)[1]; const p = +q.statement.match(/\\dim F = (\d+)/)[1];
      const g = +q.statement.match(/\\dim G = (\d+)/)[1]; const r = +q.statement.match(/\\cap G\) = (\d+)/)[1];
      const exp = /\\cap G\^\{\\circ\}\)/.test(q.statement) ? n - (p + g - r) : n - r;
      return ok(+rhs(q.answer) === exp, 'dimension orthogonal');
    },
    'L2-DUA/4': (q) => {
      const [u, v] = tuples(q.statement); const s = rhs(q.answer).replace(/\s+/g, ''); const c = { x: 0, y: 0, z: 0 };
      for (const m of s.matchAll(/([+-]?)(\d*)([xyz])/g)) c[m[3]] += (m[1] === '-' ? -1 : 1) * (m[2] ? +m[2] : 1);
      const d = (w) => c.x * w[0] + c.y * w[1] + c.z * w[2];
      return ok((c.x || c.y || c.z) && d(u) === 0 && d(v) === 0, 'noyau forme');
    },
    // ----------------------------------------------------------------- PRE
    'L2-PRE/1': (q) => { const u = tuples(q.statement)[0]; return ok(close(Math.hypot(...u), val(rhs(q.answer))), 'norme'); },
    'L2-PRE/2': (q) => {
      const [u, v] = tuples(q.statement.replace(/\\mathbb\{R\}\^3/, '')); const s = u.reduce((a, x, i) => a + x * v[i], 0); const n2 = u.reduce((a, x) => a + x * x, 0);
      const p = tuples(q.answer)[0]; return ok(p.every((x, i) => close(x, (s / n2) * u[i])), 'projection');
    },
    'L2-PRE/3': (q) => {
      const ts = tuples(q.statement); const u = ts.find((t) => t.length === 3); const v = ts.filter((t) => t.length === 3)[1];
      const s = u.reduce((a, x, i) => a + x * v[i], 0); const n2 = u.reduce((a, x) => a + x * x, 0);
      const w = tuples(q.answer)[0];
      return ok(w.every((x, i) => close(x, v[i] - (s / n2) * u[i])) && close(w.reduce((a, x, i) => a + x * u[i], 0), 0), 'Gram-Schmidt');
    },
    'L2-PRE/4': (q) => {
      const P = V.poly(q.statement.match(/P = (.*?)\$/)[1], 'X'); const Qm = q.statement.match(/Q = (.*?)\$/);
      const Q = Qm ? V.poly(Qm[1], 'X') : P;
      const f = (t) => ((P[0] || 0) + (P[1] || 0) * t) * ((Q[0] || 0) + (Q[1] || 0) * t);
      return ok(close(simpson(f, 0, 1, 10), val(rhs(q.answer)), 1e-9), 'produit scalaire intégral');
    },
    // ----------------------------------------------------------------- SYM
    'L2-SYM/1': (q) => {
      const r = +q.statement.match(/\\frac\{1\}\{(\d+)\}/)[1]; const A = mats(q.statement)[0].map((row) => row.map((x) => x / r));
      const AtA = mul([[A[0][0], A[1][0]], [A[0][1], A[1][1]]], A);
      const orth = close(AtA[0][0], 1) && close(AtA[1][1], 1) && close(AtA[0][1], 0);
      const d = det(A);
      if (!orth) return ok(/n'est pas orthogonale/.test(q.answer), 'non orthogonale');
      return ok(d > 0 ? /rotation/.test(q.answer) : /réflexion/.test(q.answer), 'nature orthogonale');
    },
    'L2-SYM/2': (q) => { const A = mats(q.statement)[0]; const [l1, l2] = lambdas(q.answer); return ok(l1 + l2 === A[0][0] + A[1][1] && l1 * l2 === det(A), 'spectre symétrique'); },
    'L2-SYM/3': (q) => {
      const s = q.statement.match(/q\(x, y\) = (.*?)\$/)[1].replace(/\s+/g, ''); let a = 0, b2 = 0, c = 0;
      for (const m of s.matchAll(/([+-]?)(\d*)(x\^2|xy|y\^2)/g)) { const k = (m[1] === '-' ? -1 : 1) * (m[2] ? +m[2] : 1); if (m[3] === 'x^2') a += k; else if (m[3] === 'xy') b2 += k; else c += k; }
      const b = b2 / 2; const tr = a + c; const dl = Math.sqrt((a - c) ** 2 + 4 * b * b);
      const ls = [(tr - dl) / 2, (tr + dl) / 2]; const p = ls.filter((x) => x > 1e-12).length; const n = ls.filter((x) => x < -1e-12).length;
      const m = q.answer.match(/= \((\d), (\d)\)/); return ok(+m[1] === p && +m[2] === n, 'signature');
    },
    'L2-SYM/4': (q) => {
      const S = mats(q.statement)[0]; const tr = S[0][0] + S[1][1] + S[2][2];
      const c2 = S[0][0] * S[1][1] - S[0][1] * S[1][0] + S[0][0] * S[2][2] - S[0][2] * S[2][0] + S[1][1] * S[2][2] - S[1][2] * S[2][1];
      const d = det(S); const coefs = [1, -tr, c2, -d].filter((x) => x !== 0);
      let ch = 0; for (let i = 1; i < coefs.length; i++) if (coefs[i] * coefs[i - 1] < 0) ch++;
      const kind = d === 0 ? 'deg' : ch === 3 ? 'pos' : ch === 0 ? 'neg' : 'ind';
      const got = /^Définie positive/.test(q.answer) ? 'pos' : /^Définie négative/.test(q.answer) ? 'neg' : /^Ni positive/.test(q.answer) ? 'ind' : 'autre';
      return ok(kind === got, 'nature forme quadratique (Descartes)');
    },
    // ----------------------------------------------------------------- SER
    'L2-SER/1': (q) => {
      const k = +q.statement.match(/n=(\d+)/)[1]; const x = val(q.statement.match(/\\left\((.*?)\\right\)/)[1]);
      let s = 0; for (let n = k; n < k + 3000; n++) s += x ** n; return ok(close(s, val(rhs(q.answer)), 1e-9), 'série géométrique');
    },
    'L2-SER/2': (q) => {
      const m = q.statement.match(/u_n = \\frac\{(1|n(?:\^\{(\d+)\})?)\}\{n(?:\^\{(\d+)\})? \+ (\d+)\}/);
      const a = m[1] === '1' ? 0 : m[2] ? +m[2] : 1; const b = m[3] ? +m[3] : 1; const d = b - a;
      const exp = d === 0 ? /grossièrement/ : d === 1 ? /^Diverge : / : /^Converge : /;
      return ok(exp.test(q.answer), 'nature série');
    },
    'L2-SER/3': (q) => {
      const m = q.statement.match(/\\frac\{(\d+)\}\{n\(n \+ (\d+)\)\}/); const a = +m[1], k = +m[2]; const N = 400000;
      let s = 0; for (let n = 1; n <= N; n++) s += a / (n * (n + k)); s += a / (N + 0.5 + k / 2); // reste ≈ a/N
      return ok(close(s, val(rhs(q.answer)), 1e-6), 'série télescopique');
    },
    'L2-SER/4': (q) => {
      const x = val(q.statement.match(/\\left\((.*?)\\right\)/)[1]); const plus1 = /\(n \+ 1\)/.test(q.statement);
      let s = 0; for (let n = 0; n < 4000; n++) s += (plus1 ? n + 1 : n) * x ** n; return ok(close(s, val(rhs(q.answer)), 1e-9), 'série n q^n');
    },
    // ----------------------------------------------------------------- RIE
    'L2-RIE/1': (q) => {
      const inner = q.statement.match(/\\sum_\{k=1\}\^\{n\} \\left\((.*)\\right\)\$/)[1];
      const m = inner.match(/^(\d*)(?:\\frac\{k\}\{n\}|\\left\(\\frac\{k\}\{n\}\\right\)\^\{(\d+)\})(?: \+ (\d+))?$/);
      if (!m) return 'parse ' + inner;
      const a = m[1] ? +m[1] : 1, p = m[2] ? +m[2] : 1, b = m[3] ? +m[3] : 0; const n = 200000;
      let s = 0; for (let k = 1; k <= n; k++) s += a * (k / n) ** p + b; s /= n;
      return ok(Math.abs(s - val(rhs(q.answer))) < 1e-4, 'somme de Riemann');
    },
    'L2-RIE/2': (q) => {
      const rows = [...q.statement.matchAll(/(-?\d+) & \\text\{si \} (-?\d+) \\leq x (?:<|\\leq) (-?\d+)/g)].map((m) => [+m[1], +m[2], +m[3]]);
      return ok(rows.length === 3 && rows.reduce((s, [c, a, b]) => s + c * (b - a), 0) === val(rhs(q.answer)), 'fonction en escalier');
    },
    'L2-RIE/3': (q) => {
      const m = q.statement.match(/\\int_\{(-?\d+)\}\^\{(-?\d+)\} \\left\((.*?)\\right\)/); const P = V.poly(m[3], 'x');
      const f = (x) => Object.entries(P).reduce((s, [d, c]) => s + c * x ** d, 0);
      return ok(close(simpson(f, +m[1], +m[2], 20), val(rhs(q.answer)), 1e-9), 'intégrale polynôme');
    },
    'L2-RIE/4': (q) => {
      const k = +q.statement.match(/\^\{x\^(\d)\}/)[1]; const g = V.poly(q.statement.match(/\\left\((.*?)\\right\) dt/)[1], 't');
      const P = V.poly(rhs(q.answer), 'x'); if (!P) return 'parse';
      const ev = (Q, x) => Object.entries(Q).reduce((s, [d, c]) => s + c * x ** d, 0);
      return ok([0.5, 1.3, -0.7, 2].every((x) => close(ev(P, x), k * x ** (k - 1) * ev(g, x ** k), 1e-9)), 'dérivée borne variable');
    },
    // ----------------------------------------------------------------- ING
    'L2-ING/1': (q) => {
      const inf = /\\int_1\^\{\+\\infty\}/.test(q.statement);
      const m = q.statement.match(/\\frac\{dx\}\{x\^(?:\{(\\frac\{\d+\}\{\d+\})\}|(\d+))\}/); const al = val(m[1] || m[2]);
      const exp = inf ? 1 / (al - 1) : 1 / (1 - al);
      return ok((inf ? al > 1 : al < 1) && close(exp, val(rhs(q.answer)), 1e-9), 'intégrale de Riemann');
    },
    'L2-ING/2': (q) => {
      const m = q.statement.match(/\\int_0\^\{\+\\infty\} (?:x(?:\^\{?(\d+)\}?)? )?e\^\{-(\d*)x\}/);
      const n = /\\infty\} x/.test(q.statement) ? (m[1] ? +m[1] : 1) : 0; const a = m[2] ? +m[2] : 1;
      const I = simpson((x) => x ** n * Math.exp(-a * x), 0, 60 / a, 20000);
      return ok(close(I, val(rhs(q.answer)), 1e-6), 'intégrale x^n e^{-ax}');
    },
    'L2-ING/3': (q) => {
      const m = q.statement.match(/f\(x\) = \\frac\{(1|x(?:\^\{(\d+)\})?)\}\{x(?:\^\{(\d+)\})? \+ (\d+)\}/);
      const p = m[1] === '1' ? 0 : m[2] ? +m[2] : 1; const qq = m[3] ? +m[3] : 1;
      const d = qq - p; const eq = d === 0 ? '1' : `\\frac{1}{${d === 1 ? 'x' : `x^{${d}}`}}`;
      return ok(q.answer.startsWith(`${d > 1 ? 'Converge' : 'Diverge'} : $f(x) \\sim ${eq}$`) && (d > 1 ? /exposant \$> 1/ : /exposant \$\\leq 1/).test(q.answer), 'nature intégrale');
    },
    'L2-ING/4': (q) => {
      const fx = q.statement.match(/\\int_2\^\{\+\\infty\} (.*?) \\, dx/)[1];
      const xpow = (s) => (s === undefined ? 1 : val(s));
      let al, be, m;
      if ((m = fx.match(/^\\frac\{1\}\{x(?:\^\{(.*?)\})? (?:\\ln x|\(\\ln x\)\^\{(.*?)\})\}$/))) { al = xpow(m[1]); be = m[2] === undefined ? 1 : val(m[2]); }
      else if ((m = fx.match(/^\\frac\{(?:\\ln x|\(\\ln x\)\^\{(.*?)\})\}\{x(?:\^\{(.*?)\})?\}$/))) { al = xpow(m[2]); be = -(m[1] === undefined ? 1 : val(m[1])); }
      else return 'parse ' + fx;
      const exp = al > 1 ? /^Converge \(car \$\\alpha > 1/ : al < 1 ? /^Diverge \(car \$\\alpha < 1/ : be > 1 ? /^Converge \(car \$\\alpha = 1\$ et \$\\beta > 1/ : /^Diverge \(car \$\\alpha = 1\$ et \$\\beta \\leq 1/;
      return ok(exp.test(q.answer), 'Bertrand');
    },
    // ----------------------------------------------------------------- EDO
    'L2-EDO/1': (q) => {
      const a = q.statement.match(/y' = (-?\d*)y/)[1]; const av = a === '' ? 1 : a === '-' ? -1 : +a; const y0 = +q.statement.match(/y\(0\) = (-?\d+)/)[1];
      const m = rhs(q.answer).match(/^(-?\d*)e\^\{(-?\d*)t\}$/); if (!m) return 'parse';
      const c = m[1] === '' ? 1 : m[1] === '-' ? -1 : +m[1]; const k = m[2] === '' ? 1 : m[2] === '-' ? -1 : +m[2];
      return ok(c === y0 && k === av, 'Cauchy ordre 1');
    },
    'L2-EDO/2': (q) => {
      const m = q.statement.match(/\$y' ([+-]) (\d*)y = (-?\d+)\$/); const a = (m[1] === '-' ? -1 : 1) * (m[2] ? +m[2] : 1); const b = +m[3];
      const r = rhs(q.answer).replace(/\s+/g, ''); const mm = r.match(/^Ce\^\{(-?\d*)t\}([+-].*)$/); if (!mm) return 'parse ' + r;
      const k = mm[1] === '' ? 1 : mm[1] === '-' ? -1 : +mm[1]; const cst = val(mm[2].replace(/^\+/, ''));
      return ok(k === -a && close(cst, b / a), 'ordre 1 second membre');
    },
    'L2-EDO/3': (q) => {
      const eq = q.statement.match(/\$(y''.*?) = 0\$/)[1].replace(/\s+/g, ''); let p = 0, qq = 0;
      for (const m of eq.matchAll(/([+-]?)(\d*)y('*)/g)) { const c = (m[1] === '-' ? -1 : 1) * (m[2] ? +m[2] : 1); if (m[3] === "'") p = c; else if (m[3] === '') qq = c; }
      const D = p * p - 4 * qq; const A = rhs(q.answer);
      const exps = [...A.matchAll(/e\^\{(-?\d*)t\}/g)].map((m) => (m[1] === '' ? 1 : m[1] === '-' ? -1 : +m[1]));
      if (D > 0) {
        const r1 = (-p - Math.sqrt(D)) / 2, r2 = (-p + Math.sqrt(D)) / 2;
        const got = []; for (const m of A.matchAll(/C_\d(?:e\^\{(-?\d*)t\})?/g)) got.push(m[1] === undefined ? 0 : m[1] === '' ? 1 : m[1] === '-' ? -1 : +m[1]);
        got.sort((x, y) => x - y); return ok(!/C_2 t/.test(A) && got.length === 2 && got[0] === r1 && got[1] === r2, 'racines distinctes');
      }
      if (D === 0) { const r = -p / 2; return ok(/C_2 t/.test(A) && (r === 0 ? exps.length === 0 : exps.length === 1 && exps[0] === r), 'racine double'); }
      const al = -p / 2, be = Math.sqrt(-D) / 2; const bm = A.match(/\\cos\((\d*)t\)/);
      return ok(bm && (bm[1] ? +bm[1] : 1) === be && (al === 0 ? exps.length === 0 : exps[0] === al), 'racines complexes');
    },
    'L2-EDO/4': (q) => {
      const A = mats(q.statement)[0]; const vs = mats(q.answer); const r = rhs(q.answer);
      const ks = [...r.matchAll(/C_\d (?:e\^\{(-?\d*)t\})?/g)].map((m) => (m[1] === undefined ? 0 : m[1] === '' ? 1 : m[1] === '-' ? -1 : +m[1]));
      if (vs.length !== 2 || ks.length !== 2) return 'parse';
      const good = vs.every((v, i) => { const x = [v[0][0], v[1][0]]; return A[0][0] * x[0] + A[0][1] * x[1] === ks[i] * x[0] && A[1][0] * x[0] + A[1][1] * x[1] === ks[i] * x[1]; });
      return ok(good && ks[0] !== ks[1], 'système différentiel');
    },
    // ----------------------------------------------------------------- PAR
    'L2-PAR/1': (q) => {
      const m = q.statement.match(/\((\d*)t \+ x\)\^(\d)/); const a = m[1] ? +m[1] : 1; const n = +m[2]; const x0 = +q.statement.match(/F'\((-?\d+)\)/)[1];
      const F = (x) => simpson((t) => (a * t + x) ** n, 0, 1, 400); const h = 1e-3;
      return ok(close((F(x0 + h) - F(x0 - h)) / (2 * h), val(rhs(q.answer)), 1e-4), 'dérivation sous intégrale');
    },
    'L2-PAR/2': (q) => {
      const m = q.statement.match(/calculer \$\\int_0\^1 (?:t(?:\^\{(\d+)\})? )?(\\ln t|\(\\ln t\)\^2) \\, dt\$/);
      const a = /calculer \$\\int_0\^1 t/.test(q.statement) ? (m[1] ? +m[1] : 1) : 0; const k = m[2] === '\\ln t' ? 1 : 2;
      const I = simpson((u) => Math.exp(-(a + 1) * u) * (-u) ** k, 0, 80, 40000); // t = e^{-u}
      return ok(Math.abs(I - val(rhs(q.answer))) < 1e-6, 'intégrale t^a ln^k');
    },
    'L2-PAR/3': (q) => {
      const num = q.statement.match(/\\frac\{(.*?)\}\{1 \+ x\^n\}/)[1]; let a, p, m;
      if ((m = num.match(/^(\d+)$/))) { a = +m[1]; p = 0; } else { m = num.match(/^(\d*)x(?:\^\{?(\d+)\}?)?$/); a = m[1] ? +m[1] : 1; p = m[2] ? +m[2] : 1; }
      const n = 20000; const I = simpson((x) => a * x ** p / (1 + x ** n), 0, 1, 200000);
      return ok(Math.abs(I - val(rhs(q.answer))) < 1e-3, 'convergence dominée');
    },
    'L2-PAR/4': (q) => {
      const G = (s) => simpson((t) => (t === 0 ? 0 : t ** (s - 1) * Math.exp(-t)), 0, 80, 200000);
      let m;
      if ((m = q.statement.match(/Calculer \$\\Gamma\((\d+)\)\$/))) return ok(close(G(+m[1]), val(rhs(q.answer)), 1e-6), 'Gamma entier');
      if ((m = q.statement.match(/calculer \$\\Gamma\\left\(\\frac\{(\d+)\}\{2\}\\right\)\$/))) {
        const r = rhs(q.answer).replace(/\s+/g, ''); const mm = r.match(/^(.*?)\\sqrt\{\\pi\}$/); if (!mm) return 'parse ' + r;
        const c = mm[1] === '' ? 1 : val(mm[1]); return ok(close(G(+m[1] / 2), c * Math.sqrt(Math.PI), 1e-4), 'Gamma demi-entier');
      }
      if ((m = q.statement.match(/t\^(\d) e\^\{-(\d*)t\}/))) {
        const n = +m[1], a = m[2] ? +m[2] : 1; const I = simpson((t) => t ** n * Math.exp(-a * t), 0, 80 / a, 100000);
        return ok(close(I, val(rhs(q.answer)), 1e-6), 'intégrale Gamma');
      }
      return 'famille non reconnue';
    },
    // ----------------------------------------------------------------- MUL
    'L2-MUL/1': (q) => {
      const m = q.statement.match(/\[0, (\d+)\] \\times \[0, (\d+)\]\} (.*?) \\, dx/); const a = +m[1], b = +m[2];
      const px = m[3].match(/x(?:\^\{(\d+)\})?/); const py = m[3].match(/y(?:\^\{(\d+)\})?/);
      const p = px ? (px[1] ? +px[1] : 1) : 0, qq = py ? (py[1] ? +py[1] : 1) : 0;
      const I = simpson((x) => x ** p, 0, a, 100) * simpson((y) => y ** qq, 0, b, 100);
      return ok(close(I, val(rhs(q.answer)), 1e-9), 'Fubini rectangle');
    },
    'L2-MUL/2': (q) => {
      const m = q.statement.match(/\\iint_\{T\} \((.*?)\) \\, dx/); const a = +q.statement.match(/x \\leq (\d+)\\\}/)[1];
      const s = m[1].replace(/\s+/g, ''); let c = 0, d = 0;
      for (const t of s.matchAll(/([+-]?)(\d*)([xy])/g)) { const k = (t[1] === '-' ? -1 : 1) * (t[2] ? +t[2] : 1); if (t[3] === 'x') c += k; else d += k; }
      const I = simpson((x) => simpson((y) => c * x + d * y, 0, x, 10), 0, a, 10);
      return ok(close(I, val(rhs(q.answer)), 1e-9), 'Fubini triangle');
    },
    'L2-MUL/3': (q) => {
      const integ = q.statement.match(/\\iint_\{D\} (.*?) \\, dx/)[1]; const k = integ === '1' ? 0 : integ === '(x^2 + y^2)' ? 1 : 2;
      const lo = q.statement.match(/(\d+) \\leq x\^2/); const hi = +q.statement.match(/y\^2 \\leq (\d+)/)[1];
      const R1 = lo ? Math.sqrt(+lo[1]) : 0, R2 = Math.sqrt(hi);
      const I = 2 * Math.PI * simpson((r) => r ** (2 * k + 1), R1, R2, 4000);
      return ok(close(I, piVal(rhs(q.answer)), 1e-8), 'coordonnées polaires');
    },
    'L2-MUL/4': (q) => {
      const m = q.statement.match(/0 \\leq (.*?) \\leq (\d+), \\ 0 \\leq (.*?) \\leq (\d+)\\\}/);
      const lin = (s) => { const c = { x: 0, y: 0 }; for (const t of s.replace(/\s+/g, '').matchAll(/([+-]?)(\d*)([xy])/g)) c[t[3]] += (t[1] === '-' ? -1 : 1) * (t[2] ? +t[2] : 1); return c; };
      const U = lin(m[1]), W = lin(m[3]); const M = +m[2], N = +m[4];
      const D = U.x * W.y - U.y * W.x; const inv = (u, v) => [(W.y * u - U.y * v) / D, (-W.x * u + U.x * v) / D];
      const pts = [inv(0, 0), inv(M, 0), inv(M, N), inv(0, N)];
      let area = 0; for (let i = 0; i < 4; i++) { const [x1, y1] = pts[i], [x2, y2] = pts[(i + 1) % 4]; area += x1 * y2 - x2 * y1; }
      area = Math.abs(area) / 2;
      const exp = /mathcal\{A\}/.test(q.answer) ? area : area * M / 2; // moyenne de u sur D = M/2
      return ok(close(exp, val(rhs(q.answer)), 1e-9), 'changement de variables');
    },
    // ----------------------------------------------------------------- CRB
    'L2-CRB/1': (q) => {
      const m = q.statement.match(/\\gamma\(t\) = \((.*?), (.*?)\)\$/); const X = V.poly(m[1], 't'), Y = V.poly(m[2], 't');
      const t0 = +q.statement.match(/\\gamma'\((-?\d+)\)/)[1];
      const d = (P) => Object.entries(P).reduce((s, [k, c]) => s + (+k ? c * k * t0 ** (k - 1) : 0), 0);
      const r = tuples(rhs(q.answer))[0] || tuples(q.answer).pop();
      return ok(r[0] === d(X) && r[1] === d(Y), 'vecteur vitesse');
    },
    'L2-CRB/2': (q) => {
      const m = q.statement.match(/\((\d+)\\cos t, \d+\\sin t, (\d+)t\)\$ pour \$t \\in \[0, (\d*)\\pi\]/); const a = +m[1], b = +m[2], T = (m[3] ? +m[3] : 1) * Math.PI;
      const L = simpson(() => Math.hypot(a, b), 0, T, 10); return ok(close(L, (+rhs(q.answer).replace('\\pi', '')) * Math.PI, 1e-9), 'longueur hélice');
    },
    'L2-CRB/3': (q) => {
      const k = val(rhs(q.answer)); let m;
      if ((m = q.statement.match(/hélice \$\\gamma\(t\) = \((\d*)\\cos t, \d*\\sin t, (\d*)t\)/))) {
        const a = m[1] ? +m[1] : 1, b = m[2] ? +m[2] : 1; const g1 = [0, a, b], g2 = [-a, 0, 0]; // en t = 0
        const cr = [g1[1] * g2[2] - g1[2] * g2[1], g1[2] * g2[0] - g1[0] * g2[2], g1[0] * g2[1] - g1[1] * g2[0]];
        return ok(close(Math.hypot(...cr) / Math.hypot(...g1) ** 3, k), 'courbure hélice');
      }
      if ((m = q.statement.match(/\((\d+)\\cos\((\d*)t\), \d+\\sin/))) return ok(close(1 / +m[1], k), 'courbure cercle');
      if ((m = q.statement.match(/y = (.*?)\$ en son sommet/))) { const P = V.poly(m[1], 'x'); return ok(close(2 * Math.abs(P[2]), k), 'courbure parabole'); }
      return 'famille non reconnue';
    },
    'L2-CRB/4': (q) => {
      const m = q.statement.match(/\\gamma\(t\) = \((.*?), (.*?)\)\$/); const X = V.poly(m[1], 't'), Y = V.poly(m[2], 't');
      const x1 = X[1] || 0, x2 = 2 * (X[2] || 0), y1 = Y[1] || 0, y2 = 2 * (Y[2] || 0);
      return ok(close(Math.abs(x1 * y2 - y1 * x2) / Math.hypot(x1, y1) ** 3, val(rhs(q.answer))), 'courbure plane');
    },
    // ----------------------------------------------------------------- PRB
    'L2-PRB/1': (q) => {
      const m = q.statement.match(/x_i & (.*?) \\\\ \\hline P\(X = x_i\) & (.*?) \\end/); const xs = m[1].split('&').map(val); const ps = m[2].split('&').map(val);
      return ok(close(ps.reduce((a, b) => a + b), 1) && close(xs.reduce((s, x, i) => s + x * ps[i], 0), val(rhs(q.answer)), 1e-9), 'espérance');
    },
    'L2-PRB/2': (q) => {
      const m = q.statement.match(/\\mathcal\{B\}\((\d+), (.*?)\)/); const n = +m[1], p = val(m[2]);
      const exp = /V\(X\)/.test(q.answer) ? n * p * (1 - p) : n * p; return ok(close(exp, val(rhs(q.answer)), 1e-9), 'binomiale');
    },
    'L2-PRB/3': (q) => {
      const p = val(q.statement.match(/p = (.*?)\$/)[1]);
      let E = 0, E2 = 0; for (let k = 1; k < 5000; k++) { const pk = (1 - p) ** (k - 1) * p; E += k * pk; E2 += k * k * pk; }
      const exp = /V\(X\)/.test(q.answer) ? E2 - E * E : E; return ok(close(exp, val(rhs(q.answer)), 1e-6), 'géométrique');
    },
    'L2-PRB/4': (q) => {
      const l1 = +q.statement.match(/X \\sim \\mathcal\{P\}\((\d+)\)/)[1], l2 = +q.statement.match(/Y \\sim \\mathcal\{P\}\((\d+)\)/)[1];
      const k = +q.statement.match(/P\(X \+ Y = (\d+)\)/)[1];
      let pr = 0; const pois = (l, j) => { let f = 1; for (let i = 2; i <= j; i++) f *= i; return Math.exp(-l) * l ** j / f; };
      for (let j = 0; j <= k; j++) pr += pois(l1, j) * pois(l2, k - j); // convolution
      const r = rhs(q.answer).replace(/\s+/g, ''); const m = r.match(/^(.*?)e\^\{-(\d+)\}$/); if (!m) return 'parse';
      const c = m[1] === '' ? 1 : val(m[1]); return ok(close(c * Math.exp(-m[2]), pr, 1e-9), 'Poisson somme');
    },
    // ----------------------------------------------------------------- CAL
    'L2-CAL/1': (q) => {
      const P = poly2(q.statement.match(/f\(x, y\) = (.*?)\$/)[1]); const pt = q.statement.match(/\\nabla f\((-?\d+), (-?\d+)\)/);
      const g = grad2(P, +pt[1], +pt[2]); const h = 1e-5; const gn = [(ev2(P, +pt[1] + h, +pt[2]) - ev2(P, +pt[1] - h, +pt[2])) / (2 * h), (ev2(P, +pt[1], +pt[2] + h) - ev2(P, +pt[1], +pt[2] - h)) / (2 * h)];
      const r = tuples(rhs(q.answer))[0] || tuples(q.answer).pop();
      return ok(Math.abs(gn[0] - r[0]) < 1e-4 && Math.abs(gn[1] - r[1]) < 1e-4 && close(g[0], r[0]), 'gradient');
    },
    'L2-CAL/2': (q) => {
      const P = poly2(q.statement.match(/f\(x, y\) = (.*?)\$/)[1]); const r = tuples(q.answer)[0];
      const g = grad2(P, r[0], r[1]); return ok(g[0] === 0 && g[1] === 0, 'point critique');
    },
    'L2-CAL/3': (q) => {
      const P = poly2(q.statement.match(/f\(x, y\) = (.*?)\$/)[1]); const pt = tuples(q.statement.split('critique')[1])[0];
      const g = grad2(P, pt[0], pt[1]); if (g[0] || g[1]) return 'pas un point critique';
      const c = (i, j) => P.filter((t) => t[1] === i && t[2] === j).reduce((s, t) => s + t[0], 0);
      const r = 2 * c(2, 0), s = c(1, 1), t = 2 * c(0, 2); const tr = r + t, d = r * t - s * s;
      const l1 = (tr - Math.sqrt(tr * tr - 4 * d)) / 2, l2 = (tr + Math.sqrt(tr * tr - 4 * d)) / 2;
      const kind = l1 > 0 ? /minimum/ : l2 < 0 ? /maximum/ : l1 < 0 && l2 > 0 ? /selle/ : /conclure/;
      return ok(kind.test(q.answer), 'nature point critique (valeurs propres hessienne)');
    },
    'L2-CAL/4': (q) => {
      const P = poly2(q.statement.match(/f\(x, y\) = (.*?)\$/)[1]);
      const u = q.statement.match(/u = (?:\\left)?\((.*?)(?:\\right)?\)\$/)[1].replace(/\\right$/, '').split(', ').map(val);
      const pt = q.statement.match(/en \$\((-?\d+), (-?\d+)\)\$/); const x = +pt[1], y = +pt[2]; const h = 1e-5;
      const D = (ev2(P, x + h * u[0], y + h * u[1]) - ev2(P, x - h * u[0], y - h * u[1])) / (2 * h);
      return ok(close(Math.hypot(...u), 1) && Math.abs(D - val(rhs(q.answer))) < 1e-4, 'dérivée directionnelle');
    }
  };
})(V));
}
// ---- recalculs licL3 ----
{
// Recalculs indépendants — Licence 3
Object.assign(VERIFIERS, ((V) => {
  const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
  const lcm = (a, b) => (a / gcd(a, b)) * b;
  const phi = (n) => { let c = 0; for (let k = 1; k <= n; k++) if (gcd(k, n) === 1) c++; return c; };
  const divs = (n) => { const d = []; for (let k = 1; k <= n; k++) if (n % k === 0) d.push(k); return d; };
  const fact = (n) => (n <= 1 ? 1 : n * fact(n - 1));
  const strip = (s) => String(s).replace(/\$/g, '').trim();
  const rhs = (s) => { s = strip(s); const i = s.lastIndexOf(' = '); return i >= 0 ? s.slice(i + 3) : s; };
  const near = (a, b, eps = 1e-6) => Number.isFinite(a) && Number.isFinite(b) && Math.abs(a - b) <= eps * Math.max(1, Math.abs(a), Math.abs(b));

  /** Évalue une expression LaTeX simple (nombres, \frac, \sqrt, \pi, e, ^, \ln, \cos, \sin, |.|, variables x, y, n, t). Compilation mise en cache. */
  const VARS = { x: 'ẋ', y: 'ẏ', n: 'ṅ', t: 'ṫ' };
  const cache = new Map();
  function compile(tex) {
    if (cache.has(tex)) return cache.get(tex);
    let s = strip(tex).replace(/\\left|\\right/g, '').replace(/\\[,;!]/g, '').replace(/\{,\}/g, '.')
      .replace(/\\dfrac/g, '\\frac').replace(/\\cdot|\\times/g, '*').replace(/\\infty/g, '∞');
    s = s.replace(/\s+/g, '');
    s = s.replace(/\\pi/g, 'π').replace(/\\ln/g, 'ʟ').replace(/\\cos/g, 'ç').replace(/\\sin/g, 'š').replace(/\\sqrt/g, '√');
    s = s.replace(/\|([^|]*)\|/g, 'ⓐ($1)');
    s = s.replace(/e/g, 'ℯ');
    for (const [k, v] of Object.entries(VARS)) s = s.replace(new RegExp(k, 'g'), v);
    for (;;) {
      const prev = s;
      s = s.replace(/\^\{([^{}]*)\}/g, '^($1)').replace(/√\{([^{}]*)\}/g, '√($1)')
        .replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '(($1)/($2))');
      if (s !== prev) continue;
      s = s.replace(/(?<!\\frac|\})\{([^{}]*)\}/, '($1)');
      if (s === prev) break;
    }
    s = s.replace(/\^/g, '**');
    s = s.replace(/([0-9.)πℯẋẏṅṫ∞])(?=[(πℯʟçš√ⓐẋẏṅṫ])/g, '$1*').replace(/([)πℯẋẏṅṫ])(?=[0-9])/g, '$1*');
    s = s.replace(/(^|[(])-/g, '$10-');
    s = s.replace(/π/g, '(Math.PI)').replace(/ℯ/g, '(Math.E)').replace(/ʟ/g, 'Math.log').replace(/ç/g, 'Math.cos')
      .replace(/š/g, 'Math.sin').replace(/√/g, 'Math.sqrt').replace(/ⓐ/g, 'Math.abs').replace(/∞/g, 'Infinity')
      .replace(/ẋ/g, 'x').replace(/ẏ/g, 'y').replace(/ṅ/g, 'n').replace(/ṫ/g, 't');
    // eslint-disable-next-line no-new-func
    const f = Function('x', 'y', 'n', 't', `"use strict"; return (${s});`);
    cache.set(tex, f);
    return f;
  }
  const ev = (tex, v = {}) => compile(tex)(v.x, v.y, v.n, v.t);
  const simpson = (f, a, b, n = 2000) => {
    const h = (b - a) / n; let S = f(a) + f(b);
    for (let i = 1; i < n; i++) S += (i % 2 ? 4 : 2) * f(a + i * h);
    return (S * h) / 3;
  };
  const nums = (s) => (String(s).match(/-?\d+/g) || []).map(Number);
  const ok = (cond, msg) => (cond ? true : msg);
  /** coefficient de la variable `name` dans une forme linéaire "3x - y + 2z" */
  const coefIn = (t, name) => {
    const s = String(t).replace(/\s+/g, '');
    const re = new RegExp('(^|[+-])(\\d*)' + name.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&') + '(?![0-9_a-zA-Z])');
    const mm = s.match(re);
    if (!mm) return 0;
    const v = mm[2] === '' ? 1 : +mm[2];
    return mm[1] === '-' ? -v : v;
  };

  return {
    'L3-GRP1': (q) => {
      const S = q.statement; const A = rhs(q.answer); let m;
      if ((m = S.match(/Z\}\/(\d+)\\mathbb\{Z\}, \+\)\$, quel est l'ordre de la classe \$\\bar\{(\d+)\}/))) return ok(+A === m[1] / gcd(+m[1], +m[2]), 'ordre');
      if ((m = S.match(/cyclique \$\(\\mathbb\{Z\}\/(\d+)\\mathbb\{Z\}, \+\)\$ possède-t-il de générateurs/))) return ok(+A === phi(+m[1]), 'phi');
      if ((m = S.match(/groupe cyclique d'ordre \$(\d+)\$/))) { const N = +m[1]; const good = q.options.filter((o) => N % +strip(o) === 0); return ok(good.length === 1 && good[0] === q.answer, 'lagrange'); }
      if (/ordre de \$\\sigma\$/.test(S)) {
        const cyc = [...S.matchAll(/\((\d+(?:\\;\d+)+)\)/g)].map((x) => x[1].split('\\;').length);
        // vérifie aussi la disjonction des supports
        const all = [...S.matchAll(/\((\d+(?:\\;\d+)+)\)/g)].flatMap((x) => x[1].split('\\;'));
        return ok(new Set(all).size === all.length && +A === cyc.reduce(lcm, 1), 'ordre permutation');
      }
      if ((m = S.match(/ordre exactement \$(\d+)\$ le groupe \$\(\\mathbb\{Z\}\/(\d+)/))) {
        const d = +m[1]; const n = +m[2]; let c = 0;
        for (let k = 0; k < n; k++) if (n / gcd(k, n) === d) c++;
        return ok(+A === c, 'elements ordre d');
      }
      if ((m = S.match(/Z\}\/(\d+)\\mathbb\{Z\} \\times \\mathbb\{Z\}\/(\d+)\\mathbb\{Z\}\$, quel est l'ordre de l'élément \$\(\\bar\{(\d+)\}, \\bar\{(\d+)\}\)/))) {
        const [M, N, a, b] = m.slice(1).map(Number); let k = 1;
        while ((k * a) % M || (k * b) % N) k++;
        return ok(+A === k, 'ordre produit');
      }
      return 'famille non reconnue';
    },
    'L3-GRP2': (q) => {
      const S = q.statement; const A = +rhs(q.answer); let m;
      if ((m = S.match(/d'ordre \$(\d+)\$ agit sur un ensemble \$X\$\. Le stabilisateur \$G_x\$ d'un point \$x \\in X\$ est d'ordre \$(\d+)\$/))) return ok(A * +m[2] === +m[1], 'orbite');
      if ((m = S.match(/d'ordre \$(\d+)\$ agit sur un ensemble \$X\$, et l'orbite d'un point \$x\$ compte \$(\d+)\$/))) return ok(A * +m[2] === +m[1], 'stab');
      if ((m = S.match(/S\}_\{(\d+)\}\$ contient-il de (\d+)-cycles/))) {
        // dénombrement brut des k-cycles par énumération des permutations de petite taille
        const n = +m[1]; const k = +m[2];
        let c = 0;
        const perm = [...Array(n).keys()];
        const rec = (i) => {
          if (i === n) {
            const seen = new Array(n).fill(false); const lens = [];
            for (let j = 0; j < n; j++) if (!seen[j]) { let l = 0; let x = j; while (!seen[x]) { seen[x] = true; x = perm[x]; l++; } lens.push(l); }
            const nt = lens.filter((l) => l > 1); if (nt.length === 1 && nt[0] === k) c++;
            return;
          }
          for (let j = i; j < n; j++) { [perm[i], perm[j]] = [perm[j], perm[i]]; rec(i + 1); [perm[i], perm[j]] = [perm[j], perm[i]]; }
        };
        if (n <= 8) rec(0);
        return ok(A === c, `k-cycles attendu ${c}`);
      }
      if ((m = S.match(/groupe d'ordre \$(\d+) = .*?nombre \$n_\{(\d+)\}\$/))) {
        const N = +m[1]; const p = +m[2]; let M = N; while (M % p === 0) M /= p;
        const exp = divs(M).filter((d) => d % p === 1 % p);
        const got = strip(q.answer).match(/\\\{(.*)\\\}/)[1].split(', ').map(Number);
        return ok(JSON.stringify(got) === JSON.stringify(exp), 'sylow');
      }
      if ((m = S.match(/d'ordre \$(\d+)\^\{(\d+)\}\$ agit sur un ensemble fini \$X\$ de cardinal \$(\d+)\$/))) return ok(A === +m[3] % +m[1], 'points fixes');
      if ((m = S.match(/groupe d'ordre \$(\d+) = (\d+) \\times (\d+)\$/))) {
        const p = +m[2]; const qq = +m[3];
        const isP = (x) => x > 1 && divs(x).length === 2;
        if (!(isP(p) && isP(qq) && p < qq && (qq - 1) % p !== 0)) return 'paire (p,q) invalide';
        if (/sous-groupes d'ordre/.test(S)) return ok(A === 1, 'n_p');
        return ok(q.answer === `$\\mathbb{Z}/${p * qq}\\mathbb{Z}$`, 'cyclique');
      }
      return 'famille non reconnue';
    },
    'L3-ANN': (q) => {
      const S = q.statement; let m;
      if ((m = S.match(/inverse de \$\\bar\{(\d+)\}\$ dans l'anneau \$\\mathbb\{Z\}\/(\d+)/))) { const v = +strip(q.answer).match(/\\bar\{(\d+)\}/)[1]; return ok((v * +m[1]) % +m[2] === 1 && v < +m[2], 'inverse'); }
      if ((m = S.match(/Z\}\/(\d+)\\mathbb\{Z\}\$ possède-t-il de diviseurs de zéro/))) {
        const n = +m[1]; let c = 0;
        for (let a = 1; a < n; a++) { for (let b = 1; b < n; b++) if ((a * b) % n === 0) { c++; break; } }
        return ok(+rhs(q.answer) === c, 'diviseurs de zero');
      }
      if ((m = S.match(/Z\}\/(\d+)\\mathbb\{Z\}\$ possède-t-il d'idéaux/))) {
        // idéaux = sous-groupes additifs (Z/nZ cyclique) : on les engendre tous
        const n = +m[1]; const sets = new Set();
        for (let a = 0; a < n; a++) { const s = new Set(); for (let k = 0; k < n; k++) s.add((a * k) % n); sets.add([...s].sort((x, y) => x - y).join(',')); }
        return ok(+rhs(q.answer) === sets.size, 'ideaux');
      }
      if (/PGCD unitaire/.test(S)) {
        m = S.match(/P = (.*?)\$ et \$Q = (.*?)\$/);
        const toArr = (o) => { const deg = Math.max(...Object.keys(o).map(Number)); return [...Array(deg + 1).keys()].map((i) => o[deg - i] || 0); };
        const P = toArr(V.poly(m[1], 'X')); const Q = toArr(V.poly(m[2], 'X'));
        const pmod = (a, b) => { a = a.slice(); while (a.length >= b.length && a.some((x) => Math.abs(x) > 1e-9)) { const c = a[0] / b[0]; for (let i = 0; i < b.length; i++) a[i] -= c * b[i]; a.shift(); } while (a.length && Math.abs(a[0]) < 1e-9) a.shift(); return a; };
        let a = P; let b = Q;
        while (b.length) { const r = pmod(a, b); a = b; b = r; }
        const g = a.map((x) => x / a[0]);
        const got = toArr(V.poly(rhs(q.answer), 'X'));
        return ok(got.length === g.length && got.every((x, i) => near(x, g[i])), 'pgcd ' + g);
      }
      if ((m = S.match(/mathbb\{F\}_\{(\d+)\}\^\{\\times\}\$ du corps fini/))) return ok(+rhs(q.answer) === phi(+m[1] - 1), 'generateurs Fq');
      if ((m = S.match(/irréductibles de degré \$2\$ dans \$\\mathbb\{F\}_\{(\d+)\}/))) {
        const p = +m[1]; let c = 0;
        for (let b = 0; b < p; b++) for (let cc = 0; cc < p; cc++) { let root = false; for (let x = 0; x < p; x++) if ((x * x + b * x + cc) % p === 0) root = true; if (!root) c++; }
        return ok(+rhs(q.answer) === c, 'irreductibles');
      }
      return 'famille non reconnue';
    },
    'L3-MET': (q) => {
      const S = q.statement; let m;
      if ((m = S.match(/A = \((-?\d+), (-?\d+)\)\$ et \$B = \((-?\d+), (-?\d+)\)\$\. Calculer \$d_\{(1|2|\\infty)\}/))) {
        const dx = Math.abs(m[3] - m[1]); const dy = Math.abs(m[4] - m[2]);
        const exp = m[5] === '1' ? dx + dy : m[5] === '2' ? Math.hypot(dx, dy) : Math.max(dx, dy);
        return ok(near(ev(rhs(q.answer)), exp), 'distance');
      }
      if ((m = S.match(/u = \((-?\d+), (-?\d+)\)\$ appartient-il à la boule fermée \$\\overline\{B\}\(0, (\d+)\)/))) {
        const a = Math.abs(+m[1]); const b = Math.abs(+m[2]); const r = +m[3];
        const inN = [a + b <= r, Math.hypot(a, b) <= r + 1e-12, Math.max(a, b) <= r];
        const A = q.answer;
        const exp = inN[0] ? /trois/.test(A) : inN[1] ? /N_2\$ et/.test(A) : inN[2] ? /N_\\infty\$ seulement/.test(A) : /aucune/.test(A);
        return ok(exp, 'boule');
      }
      if ((m = S.match(/R\}\^\{(\d+)\}\$, quelle est la plus petite constante \$c > 0\$ telle que pour tout \$x\$, \$(N_\S+)\(x\) \\le c\\, (N_\S+)\(x\)/))) {
        // constante optimale estimée par recherche sur vecteurs de signes / canoniques
        const n = +m[1]; const N = { 'N_1': (v) => v.reduce((s, x) => s + Math.abs(x), 0), 'N_2': (v) => Math.hypot(...v), 'N_\\infty': (v) => Math.max(...v.map(Math.abs)) };
        let best = 0;
        for (let k = 1; k <= n; k++) { const v = [...Array(n).keys()].map((i) => (i < k ? 1 : 0)); best = Math.max(best, N[m[2]](v) / N[m[3]](v)); }
        return ok(near(ev(rhs(q.answer)), best), 'constante ' + best);
      }
      if ((m = S.match(/A = \[(-?\d+), (-?\d+)\[ \\cup \\\{(-?\d+)\\\} \\cup \(\](-?\d+), (-?\d+)\[ \\cap/))) {
        const [a, b, c, d, e] = m.slice(1);
        const exp = /adhérence/.test(S) ? `[${a}, ${b}] \\cup \\{${c}\\} \\cup [${d}, ${e}]` : /intérieur/.test(S) ? `]${a}, ${b}[` : `\\{${a}, ${b}, ${c}\\} \\cup [${d}, ${e}]`;
        return ok(strip(q.answer) === exp && +a < +b && +b < +c && +c < +d && +d < +e, 'topologie');
      }
      return 'famille non reconnue';
    },
    'L3-BAN': (q) => {
      const S = q.statement; const A = rhs(q.answer); let m;
      // constante de Lipschitz : sup |f'| estimé numériquement
      if ((m = S.match(/x \\mapsto \\frac\{x\}\{(\d+)\} [+-] \d+\$ soit/))) return ok(near(ev(A), 1 / +m[1]), 'lip affine');
      if ((m = S.match(/x \\mapsto (.*?)\\sin\(x\)\$ soit/))) { const k = m[1] ? ev(m[1]) : 1; return ok(near(ev(A), k), 'lip sin'); }
      if ((m = S.match(/x \\mapsto \\frac\{x\^2\}\{(\d+)\}\$ soit \$k\$-lipschitzienne sur \$\[0, (\d+)\]/))) {
        const a = +m[1]; const M = +m[2]; let best = 0;
        for (let i = 0; i < 2000; i++) { const x = (M * i) / 2000; const y = x + M / 2000; best = Math.max(best, Math.abs(y * y - x * x) / a / (y - x)); }
        return ok(Math.abs(ev(A) - best) < 1e-2 * best && ev(A) >= best - 1e-9, 'lip carre');
      }
      if ((m = S.match(/x \\mapsto (.*?)\$ est contractante/))) {
        const f = (x) => ev(m[1], { x });
        let x = 0; for (let i = 0; i < 200; i++) x = f(x);
        return ok(near(ev(A), x, 1e-9), 'point fixe ' + x);
      }
      if ((m = S.match(/k = \\frac\{1\}\{(\d+)\}\$, et \$\(x_n\)\$ .*d\(x_1, x_0\) = (\d+)\$.*10\^\{-(\d+)\}/))) {
        const k = 1 / +m[1]; const d = +m[2]; const eps = 10 ** -+m[3];
        let n = 0; while ((k ** n / (1 - k)) * d > eps * (1 + 1e-12)) n++;
        return ok(+A === n, 'iterations ' + n);
      }
      if ((m = S.match(/y' = (.*?)\$, \$y\(0\) = (-?\d+)\$.*Que vaut \$y_\{(\d)\}\(t\)/))) {
        const a = m[1] === 'y' ? 1 : m[1] === '-y' ? -1 : +m[1].replace('y', ''); const b = +m[2]; const k = +m[3];
        // itérées de Picard calculées numériquement par quadrature successive sur une grille
        const T = 1; const Npts = 400; const h = T / Npts;
        let y = new Array(Npts + 1).fill(b);
        for (let it = 0; it < k; it++) {
          const ny = [b]; let acc = 0;
          for (let i = 1; i <= Npts; i++) { acc += (h * (a * y[i - 1] + a * y[i])) / 2; ny.push(b + acc); }
          y = ny;
        }
        return ok(Math.abs(ev(A, { t: 1 }) - y[Npts]) < 1e-3 * Math.max(1, Math.abs(y[Npts])), 'picard');
      }
      return 'famille non reconnue';
    },
    'L3-CMP': (q) => {
      const S = q.statement; let m;
      if (/est compacte/.test(S)) return 'skip';
      if ((m = S.match(/f\(x\) = (.*?)\$ sur le segment \$\[(-?\d+), (-?\d+)\]\$.*\\(max|min)_/))) {
        const f = (x) => ev(m[1], { x }); const a = +m[2]; const b = +m[3];
        let best = m[4] === 'max' ? -Infinity : Infinity;
        for (let i = 0; i <= 4000; i++) { const v = f(a + ((b - a) * i) / 4000); best = m[4] === 'max' ? Math.max(best, v) : Math.min(best, v); }
        return ok(near(ev(rhs(q.answer)), best), 'extremum ' + best);
      }
      if ((m = S.match(/f\(x\) = (.*?)\$ sur \$I = \[(\d+), (\d+|\+\\infty)\[?\]?\$ et \$\\varepsilon = (.*?)\$/))) {
        const f = (x) => ev(m[1], { x }); const a = +m[2]; const b = m[3].includes('infty') ? a + 1000 : +m[3];
        let L = 0; const N = 20000; const h = 1e-7;
        for (let i = 0; i <= N; i++) { const x = a + (b - a - h) * (i / N) ** 3; L = Math.max(L, Math.abs(f(x + h) - f(x)) / h); }
        const eps = ev(m[4]);
        return ok(Math.abs(ev(rhs(q.answer)) - eps / L) < 1e-3 * (eps / L), 'delta');
      }
      if ((m = S.match(/la partie \$A = (.*?)\$ de/))) {
        const ivs = m[1].split(' \\cup ').map((t) => { const mm = t.match(/([[\]])(\d+), (\d+)([[\]])/); return { lc: mm[1] === '[', s: +mm[2], e: +mm[3], rc: mm[4] === ']' }; });
        const inA = (x) => ivs.some((I) => (x > I.s && x < I.e) || (x === I.s && I.lc) || (x === I.e && I.rc));
        let comps = 0; let prev = false;
        for (let i = -4; i <= 4 * 20; i++) { const x = i / 4; const cur = inA(x); if (cur && !prev) comps++; prev = cur; }
        return ok(+strip(q.answer) === comps, 'composantes ' + comps);
      }
      return 'famille non reconnue';
    },
    'L3-SDF': (q) => {
      const S = q.statement; const A = rhs(q.answer); let m;
      if ((m = S.match(/f_n\(x\) = \\frac\{x\^n\}\{(\d+) \+ x\^n\}\$ .*f_n\\left\((.*?)\\right\)/))) {
        const a = +m[1]; const x = ev(m[2]); const n = 400; const xn = Math.pow(x, n);
        const v = Number.isFinite(xn) ? xn / (a + xn) : 1;
        return ok(Math.abs(ev(A) - v) < 1e-6, 'limite simple ' + v);
      }
      if ((m = S.match(/f_n\(x\) = \\frac\{nx\}\{1 \+ (\d*)nx\}\$ .*f_n\\left\((.*?)\\right\)/))) {
        const a = m[1] ? +m[1] : 1; const x = ev(m[2]); const n = 1e9;
        return ok(Math.abs(ev(A) - (n * x) / (1 + a * n * x)) < 1e-6, 'limite simple rat');
      }
      if ((m = S.match(/f_n\(x\) = (.*?)\$ pour \$x \\in \[0, \+\\infty\[\$\. Que vaut/))) {
        const n = 7; let best = 0;
        for (let i = 1; i <= 20000; i++) { const x = i / (n * 2000); best = Math.max(best, Math.abs(ev(m[1], { n, x }))); }
        return ok(Math.abs(ev(A, { n }) - best) < 1e-4 * Math.max(1, best), 'sup ' + best);
      }
      if ((m = S.match(/ici \$\\alpha = (.*?)\$/))) {
        const al = ev(m[1]); const f = S.match(/f_n\(x\) = (.*?)\$ sur/)[1];
        const n = 5; let best = 0;
        for (let i = -4000; i <= 4000; i++) { const x = i / 400; best = Math.max(best, Math.abs(ev(f.replace(/n\^\{([^}]*)\}/g, `(${n})^{$1}`).replace(/\\cos\(nx\)/, `\\cos(${n}x)`), { x, n }))); }
        const supS = q.answer.match(/\|_\\infty = (.*?)\$/)[1];
        const supOk = Math.abs(ev(supS.replace(/n\^\{([^}]*)\}/g, `(${n})^{$1}`), { n }) - best) < 1e-3 * best;
        const verdict = /ne converge pas/.test(q.answer) ? al <= 1 : al > 1;
        return ok(supOk && verdict, 'normale');
      }
      if ((m = S.match(/\\int_0\^\{(\d+)\} \\left\(1 ([+-]) \\frac\{(\d*)x\}\{n\}\\right\)\^n/))) {
        const b = +m[1]; const sg = m[2] === '+' ? 1 : -1; const c = m[3] ? +m[3] : 1; const n = 1e6;
        const I = simpson((x) => Math.exp(n * Math.log(1 + (sg * c * x) / n)), 0, b, 4000);
        return ok(Math.abs(ev(A) - I) < 1e-3 * Math.max(1, I), 'lim int ' + I);
      }
      return 'famille non reconnue';
    },
    'L3-SER': (q) => {
      const S = q.statement; const A = rhs(q.answer); let m;
      if ((m = S.match(/\\sum_\{n \\geq [01]\} (.*?)\\, z\^n\$/))) {
        const coef = m[1].replace(/\s+/g, ''); let mm; let a = 1; let p = 0; let typ = null;
        if ((mm = coef.match(/^\\frac\{(1|n|n\^(\d))\}\{(\d+)\^n\}$/))) { typ = 'div'; a = +mm[3]; p = mm[1] === '1' ? 0 : mm[2] ? +mm[2] : 1; }
        else if ((mm = coef.match(/^(?:(n)(?:\^(\d))?\\,)?(\d+)\^n$/))) { typ = 'mul'; a = +mm[3]; p = mm[1] ? (mm[2] ? +mm[2] : 1) : 0; }
        else if ((mm = coef.match(/^\\frac\{(\d+)\^n\}\{n!\}$/))) { typ = 'fact'; a = +mm[1]; }
        else if ((mm = coef.match(/^\\frac\{n(?:\^(\d))?\}\{n!\}$/))) { typ = 'fact'; p = mm[1] ? +mm[1] : 1; }
        if (!typ) return 'coef non reconnu ' + coef;
        const n = 1e6;
        const d = p * Math.log(n / (n + 1)) + (typ === 'div' ? Math.log(a) : typ === 'mul' ? -Math.log(a) : -Math.log(a) + Math.log(n + 1));
        const ratio = Math.exp(d);
        if (A === '+\\infty') return ok(ratio > 1e4, 'R infini');
        return ok(Math.abs(ratio - ev(A)) < 1e-4 * ev(A), 'rayon ' + ratio);
      }
      if ((m = S.match(/\\sum_\{n \\geq 0\} (?:\\frac\{z\^\{(\d)n\}\}\{(\d+)\^n\}|(\d+)\^n z\^\{(\d)n\})\$/))) {
        const k = +(m[1] || m[4]); const a = +(m[2] || m[3]); const inv = !!m[1];
        // |a_n|^(1/kn) -> 1/R : Cauchy-Hadamard sur les coefficients de z^{kn}
        const R = inv ? a ** (1 / k) : a ** (-1 / k);
        return ok(near(ev(A), R), 'lacunaire');
      }
      if ((m = S.match(/S = (\\sum_\{n \\geq ([01])\} \\frac\{(.*?)\}\{(.*?)\})\$/))) {
        let sum = 0;
        for (let n = +m[2]; n < 160; n++) {
          const num = m[3].replace(/\(-(\d+)\)\^n/, (x, c) => `(${(-c) ** n})`).replace(/(\d+)\^n/, (x, c) => `(${c ** n})`).replace(/n \+ 1/, `${n + 1}`).replace(/^n$/, `${n}`);
          const den = m[4].replace(/n!/, `${fact(n)}`).replace(/n\\, (\d+)\^n/, (x, c) => `${n}*${c ** n}`).replace(/(\d+)\^n/, (x, c) => `${c ** n}`);
          sum += Function(`return (${num})/(${den})`)();
        }
        return ok(Math.abs(ev(A) - sum) < 1e-9 * Math.max(1, Math.abs(sum)), 'somme ' + sum);
      }
      if ((m = S.match(/f\(x\) = \\frac\{1\}\{\((.*?)\)\((.*?)\)\}\$/))) {
        const coefOf = (t) => { const c = V.poly(t, 'x'); return -(c[1] || 0); };
        const a = coefOf(m[1]); const b = coefOf(m[2]);
        if (/coefficient de \$x\^\{(\d)\}/.test(S)) {
          const k = +S.match(/coefficient de \$x\^\{(\d)\}/)[1];
          // division de séries : 1 / (1 - (a+b)x + abx^2)
          const c = [1]; for (let n = 1; n <= k; n++) c[n] = (a + b) * c[n - 1] - (n >= 2 ? a * b * c[n - 2] : 0);
          return ok(+A === c[k], 'coef ' + c[k]);
        }
        return ok(near(ev(A), 1 / Math.max(Math.abs(a), Math.abs(b))), 'rayon frac rat');
      }
      return 'famille non reconnue';
    },
    'L3-FOU': (q) => {
      const S = q.statement; const A = rhs(q.answer); let m;
      const coefN = (f, kind, n) => simpson((x) => f(x) * (kind === 'a' ? Math.cos(n * x) : Math.sin(n * x)), -Math.PI, Math.PI, 4000) / Math.PI;
      if ((m = S.match(/^Soit \$f\(x\) = (.*?)\$\. /))) {
        const f = (x) => ev(m[1], { x });
        if (/Calculer \$M/.test(S)) return ok(Math.abs(ev(A) - simpson((x) => f(x) ** 2, -Math.PI, Math.PI, 4000) / (2 * Math.PI)) < 1e-6, 'parseval trig');
        const nm = S.match(/Que vaut \$([ab])_(?:\{(\d+)\}|(0))\$/);
        const n = +(nm[2] || nm[3]);
        return ok(Math.abs(ev(A) - coefN(f, nm[1], n)) < 1e-6, 'coef trig');
      }
      if ((m = S.match(/f\(x\) = (.*?)\$ sur \$\]-\\pi, \\pi\]\$\. .*Que vaut \$([ab])_\{(\d+)\}\$/))) {
        const f = (x) => ev(m[1], { x });
        return ok(Math.abs(ev(A) - coefN(f, m[2], +m[3])) < 1e-6, 'coef usuel');
      }
      if ((m = S.match(/f\(x\) = (.*?)\$ sur \$\]-\\pi, \\pi\]\$\. .*Que vaut \$\\sum_\{n \\geq 1\} ([ab])_n\^2\$/))) {
        // Parseval vérifié par somme numérique des carrés des coefficients calculés par quadrature (n ≤ 60) + reste estimé
        const f = (x) => ev(m[1], { x });
        let s = 0; const N = 60;
        for (let n = 1; n <= N; n++) s += coefN(f, m[2], n) ** 2;
        const total = simpson((x) => f(x) ** 2, -Math.PI, Math.PI, 4000) / Math.PI - (m[2] === 'a' ? coefN(f, 'a', 0) ** 2 / 2 : 0);
        return ok(Math.abs(ev(A) - total) < 1e-6 && Math.abs(s - total) < 0.05 * total, 'parseval');
      }
      if (/Parseval à une fonction/.test(S)) {
        const t = S.match(/calculer \$(.*?)\$\./)[1]; let s = 0;
        const odd = /2k \+ 1/.test(t); const p = /\^4/.test(t) ? 4 : 2;
        for (let n = 1; n < 2e5; n += odd ? 2 : 1) s += 1 / n ** p;
        return ok(Math.abs(ev(A) - s) < 1e-4, 'somme classique');
      }
      return 'famille non reconnue';
    },
    'L3-GPR': (q) => {
      const S = q.statement; let m;
      const coords = (s) => { const mm = strip(s).match(/\\left\((.*) ; (.*)\\right\)/); return [ev(mm[1]), ev(mm[2])]; };
      if ((m = S.match(/centre \$\\Omega\\left\((-?\d+) ; (-?\d+)\\right\)\$ et de rapport \$k = (.*?)\$.*M\\left\((-?\d+) ; (-?\d+)\\right\)/))) {
        const k = ev(m[3]); const [x, y] = coords(q.answer);
        return ok(near(x - m[1], k * (m[4] - m[1])) && near(y - m[2], k * (m[5] - m[2])), 'homothetie');
      }
      if (/barycentre/.test(S)) {
        const P = [...S.matchAll(/[ABC]\\left\((-?\d+) ; (-?\d+)\\right\)/g)].map((x) => [+x[1], +x[2]]);
        const w = [...S.matchAll(/\([ABC], (-?\d+)\)/g)].map((x) => +x[1]);
        const [x, y] = coords(q.answer);
        // G barycentre <=> somme des w_i (P_i - G) = 0
        return ok(near(w.reduce((s, wi, i) => s + wi * (P[i][0] - x), 0), 0) && near(w.reduce((s, wi, i) => s + wi * (P[i][1] - y), 0), 0), 'barycentre');
      }
      if ((m = S.match(/puissance \$k = (\d+)\$.*M\\left\((-?\d+) ; (-?\d+)\\right\)/))) {
        const k = +m[1]; const [x, y] = coords(q.answer);
        // M' sur [OM) et OM.OM' = k
        const cross = x * m[3] - y * m[2]; const dot = x * m[2] + y * m[3];
        return ok(near(cross, 0) && dot > 0 && near(Math.hypot(x, y) * Math.hypot(+m[2], +m[3]), k), 'inversion');
      }
      if ((m = S.match(/abscisses \$(-?\d+)\$, \$(-?\d+)\$, \$(-?\d+)\$/))) {
        const [a, b, c] = m.slice(1).map(Number); const d = ev(rhs(q.answer));
        return ok(near(((c - a) * (d - b)) / ((c - b) * (d - a)), -1), 'harmonique');
      }
      if ((m = S.match(/a = (-?\d+)\$, \$b = (-?\d+)\$, \$c = (-?\d+)\$, \$d = (-?\d+)\$/))) {
        const [a, b, c, d] = m.slice(1).map(Number);
        return ok(near(ev(rhs(q.answer)), ((c - a) * (d - b)) / ((c - b) * (d - a))), 'birapport');
      }
      return 'famille non reconnue';
    },
    'L3-GDF': (q) => {
      const S = q.statement; const A = ev(rhs(q.answer)); let m;
      if ((m = S.match(/rayon \$R = (\d+)\$, un triangle géodésique a pour angles \$(.*?)\$, \$(.*?)\$ et \$(.*?)\$/))) {
        const R = +m[1]; const s = ev(m[2]) + ev(m[3]) + ev(m[4]);
        return ok(s > Math.PI && near(A, R * R * (s - Math.PI)), 'triangle spherique');
      }
      if ((m = S.match(/(sphère|cylindre de révolution) de rayon \$R = (.*?)\$/))) {
        const R = ev(m[2]); const k = m[1] === 'sphère' ? [1 / R, 1 / R] : [1 / R, 0];
        return ok(near(A, /Gauss/.test(S) ? k[0] * k[1] : Math.abs((k[0] + k[1]) / 2)), 'courbure usuelle');
      }
      if ((m = S.match(/surface \$z = (.*?)\$ par .*coefficient \$([EFG])\$ .*paramètres \$\((-?\d+), (-?\d+)\)\$/))) {
        const f = (x, y) => ev(m[1], { x, y }); const x0 = +m[3]; const y0 = +m[4]; const h = 1e-5;
        const fx = (f(x0 + h, y0) - f(x0 - h, y0)) / (2 * h); const fy = (f(x0, y0 + h) - f(x0, y0 - h)) / (2 * h);
        const exp = { E: 1 + fx * fx, F: fx * fy, G: 1 + fy * fy }[m[2]];
        return ok(Math.abs(A - exp) < 1e-4, 'EFG');
      }
      if ((m = S.match(/l'origine de la surface d'équation \$z = (.*?)\$/))) {
        const f = (x, y) => ev(m[1], { x, y }); const h = 1e-3;
        const fxx = (f(h, 0) - 2 * f(0, 0) + f(-h, 0)) / h ** 2; const fyy = (f(0, h) - 2 * f(0, 0) + f(0, -h)) / h ** 2;
        const fxy = (f(h, h) - f(h, -h) - f(-h, h) + f(-h, -h)) / (4 * h * h);
        return ok(Math.abs(A - (fxx * fyy - fxy * fxy)) < 1e-3, 'K graphe');
      }
      if ((m = S.match(/genre \$g = (\d+)\$/))) return ok(near(A, 2 * Math.PI * (2 - 2 * +m[1])), 'gauss-bonnet');
      return 'famille non reconnue';
    },
    'L3-NUM': (q) => {
      const S = q.statement; let m;
      const pm = (s) => s.match(/\\begin\{pmatrix\}(.*?)\\end\{pmatrix\}/)[1].split('\\\\').map((r) => r.split('&').map((x) => +x.trim()));
      if (/factorisation \$A = LU\$/.test(S)) {
        const M = pm(S); const l = M[1][0] / M[0][0]; const u22 = M[1][1] - l * M[0][1];
        // vérification : L U = A
        if (!near(l * M[0][1] + u22, M[1][1])) return 'LU';
        return ok(/ell_\{21\}/.test(q.answer) ? near(+rhs(q.answer), l) : near(+rhs(q.answer), u22), 'LU coef');
      }
      if (/Cholesky/.test(S)) {
        const M = pm(S); const L = pm(q.answer);
        const P = [[L[0][0] ** 2, L[0][0] * L[1][0]], [L[1][0] * L[0][0], L[1][0] ** 2 + L[1][1] ** 2]];
        return ok(L[0][1] === 0 && L[0][0] > 0 && L[1][1] > 0 && P.every((r, i) => r.every((x, j) => x === M[i][j])), 'cholesky');
      }
      if (/conditionnement/.test(S)) {
        const M = pm(S); const det = M[0][0] * M[1][1] - M[0][1] * M[1][0];
        const inv = [[M[1][1] / det, -M[0][1] / det], [-M[1][0] / det, M[0][0] / det]];
        const n = (X) => Math.max(...X.map((r) => Math.abs(r[0]) + Math.abs(r[1])));
        return ok(near(ev(rhs(q.answer)), n(M) * n(inv)), 'cond');
      }
      if ((m = S.match(/\\begin\{cases\} (.*?) = (-?\d+) \\\\ (.*?) = (-?\d+) \\end\{cases\}/))) {
        const a11 = coefIn(m[1], 'x'); const a12 = coefIn(m[1], 'y'); const a21 = coefIn(m[3], 'x'); const a22 = coefIn(m[3], 'y'); const b1 = +m[2]; const b2 = +m[4];
        let x = 0; let y = 0;
        if (/Jacobi/.test(S)) { for (let k = 0; k < 2; k++) { const nx = (b1 - a12 * y) / a11; const ny = (b2 - a21 * x) / a22; x = nx; y = ny; } }
        else { x = (b1 - a12 * y) / a11; y = (b2 - a21 * x) / a22; }
        const mm = strip(q.answer).match(/\\left\((.*) ; (.*)\\right\)/);
        return ok(near(ev(mm[1]), x) && near(ev(mm[2]), y), 'iteration');
      }
      return 'famille non reconnue';
    },
    'L3-PROG': (q) => {
      const S = q.statement; let m;
      if ((m = S.match(/contraintes \$x \+ y \\le (\d+)\$, \$(.*?) \\le (\d+)\$, \$x \\geq 0\$, \$y \\geq 0\$\. Lequel/))) {
        const c = +m[1]; const a1 = coefIn(m[2], 'x'); const a2 = coefIn(m[2], 'y'); const d = +m[3];
        const adm = (o) => { const [x, y] = strip(o).replace(/[()]/g, '').split(' ; ').map(Number); return x >= 0 && y >= 0 && x + y <= c && a1 * x + a2 * y <= d; };
        const good = q.options.filter(adm);
        return ok(good.length === 1 && good[0] === q.answer, 'admissible');
      }
      if ((m = S.match(/maximiser \$z = (.*?)\$ sous les contraintes \$x \\le (\d+)\$, \$y \\le (\d+)\$, \$x \+ y \\le (\d+)\$/))) {
        const [a, b, c] = [+m[2], +m[3], +m[4]]; let best = -Infinity;
        for (let x = 0; x <= a; x++) for (let y = 0; y <= b; y++) if (x + y <= c) best = Math.max(best, ev(m[1], { x, y }));
        return ok(+rhs(q.answer) === best, 'optimum ' + best);
      }
      const rows = [...S.matchAll(/\$([^$]*?x_1[^$]*?) \\le (\d+)\$/g)].map((x) => [x[1], +x[2]]);
      const lin = (t) => [coefIn(t, 'x_1'), coefIn(t, 'x_2')];
      if (/problème dual/.test(S)) {
        const obj = lin(S.match(/maximiser \$(.*?)\$/)[1]);
        const A = rows.map((r) => lin(r[0])); const b = rows.map((r) => r[1]);
        const ans = q.answer;
        const u = (t) => [coefIn(t, 'u_1'), coefIn(t, 'u_2')];
        const mm = ans.match(/^\$\\min\\ (.*?)\$ sous \$(.*?) \\geq (\d+)\$, \$(.*?) \\geq (\d+)\$/);
        if (!mm) return 'forme du dual';
        const o = u(mm[1]); const c1 = u(mm[2]); const c2 = u(mm[4]);
        return ok(o[0] === b[0] && o[1] === b[1] && c1[0] === A[0][0] && c1[1] === A[1][0] && c2[0] === A[0][1] && c2[1] === A[1][1] && +mm[3] === obj[0] && +mm[5] === obj[1], 'dual');
      }
      if (/saturées|écarts complémentaires/.test(S)) {
        const obj = lin(S.match(/maximiser \$(.*?)\$/)[1]);
        const A = rows.map((r) => lin(r[0])); const b = rows.map((r) => r[1]);
        // énumération des sommets (intersections de 2 droites parmi contraintes et axes)
        const lines = [[...A[0], b[0]], [...A[1], b[1]], [1, 0, 0], [0, 1, 0]];
        let best = -Infinity; let bx = null;
        for (let i = 0; i < 4; i++) for (let j = i + 1; j < 4; j++) {
          const [p1, q1, r1] = lines[i]; const [p2, q2, r2] = lines[j]; const D = p1 * q2 - p2 * q1; if (!D) continue;
          const x = (r1 * q2 - r2 * q1) / D; const y = (p1 * r2 - p2 * r1) / D;
          if (x < -1e-9 || y < -1e-9 || A[0][0] * x + A[0][1] * y > b[0] + 1e-9 || A[1][0] * x + A[1][1] * y > b[1] + 1e-9) continue;
          const z = obj[0] * x + obj[1] * y; if (z > best) { best = z; bx = [x, y]; }
        }
        if (/u_\{(\d)\}\^\*/.test(q.answer)) {
          const i = +q.answer.match(/u_\{(\d)\}\^\*/)[1] - 1;
          const D = A[0][0] * A[1][1] - A[1][0] * A[0][1];
          const u1 = (obj[0] * A[1][1] - A[1][0] * obj[1]) / D; const u2 = (A[0][0] * obj[1] - A[0][1] * obj[0]) / D;
          const xs = S.match(/x\^\* = \((\d+), (\d+)\)/);
          return ok(near([u1, u2][i], +rhs(q.answer)) && near(bx[0], +xs[1]) && near(bx[1], +xs[2]) && u1 >= 0 && u2 >= 0, 'dual var');
        }
        return ok(near(best, +rhs(q.answer)), 'valeur optimale ' + best);
      }
      return 'famille non reconnue';
    },
    'L3-MES': (q) => {
      const S = q.statement; const A = rhs(q.answer); let m;
      if ((m = S.match(/mesure de Lebesgue de \$A = ([[\]])(-?\d+), (-?\d+)([[\]]) \\cup ([[\]])(-?\d+), (-?\d+)([[\]]) \\cup/))) {
        const I = [[+m[2], +m[3]], [+m[6], +m[7]]]; let L = 0;
        for (let k = -20; k < 40; k++) { const x = k + 0.5; if (I.some(([s, e]) => x > s && x < e)) L++; }
        return ok(+A === L, 'mesure ' + L);
      }
      if ((m = S.match(/f = (.*?)\$\./))) {
        const parts = m[1].split(/ (?=[+-] )/);
        let I = 0;
        for (const p of parts) {
          const mm = p.match(/^([+-] )?(\d*)\\mathbf\{1\}_\{(.*)\}$/) || p.match(/^(-)?(\d*)\\mathbf\{1\}_\{(.*)\}$/);
          if (!mm) return 'parse';
          const sg = mm[1] && mm[1].trim() === '-' ? -1 : 1; const c = sg * (mm[2] ? +mm[2] : 1);
          const iv = mm[3].match(/\[(-?\d+), (-?\d+)\]/);
          if (iv) I += c * (iv[2] - iv[1]);
        }
        return ok(+A === I, 'integrale etagee ' + I);
      }
      if ((m = S.match(/\\lim\\limits_\{n \\to \+\\infty\} \\int_0\^\{\+\\infty\} (.*?) \\, dx/))) {
        const n = 1e6; const f = (x) => ev(m[1], { x, n });
        const a = +(m[1].match(/e\^\{-(\d*)x\}/)[1] || 1);
        const I = simpson(f, 0, 60 / a, 20000);
        return ok(Math.abs(ev(A) - I) < 1e-4 * Math.max(1, I), 'conv dominee ' + I);
      }
      if ((m = S.match(/\\iint_\{\[0, (\d+)\] \\times \[0, (\d+)\]\} (.*?) \\, dx/))) {
        const f = (x, y) => ev(m[3] === '' ? '1' : m[3].replace(/ /g, ''), { x, y });
        const I = simpson((x) => simpson((y) => f(x, y), 0, +m[2], 40), 0, +m[1], 40);
        return ok(Math.abs(ev(A) - I) < 1e-6 * Math.max(1, I), 'fubini pave ' + I);
      }
      if ((m = S.match(/\\iint_\{T\} (.*?) \\, dx.*x \\le (\d+)\\\}/))) {
        const f = (x, y) => ev(m[1].replace(/ /g, ''), { x, y });
        const I = simpson((x) => simpson((y) => f(x, y), 0, x, 40), 0, +m[2], 400);
        return ok(Math.abs(ev(A) - I) < 1e-6 * Math.max(1, I), 'fubini triangle ' + I);
      }
      return 'famille non reconnue';
    },
    'L3-PRC': (q) => {
      const S = q.statement; let m;
      if ((m = S.match(/loi exponentielle de paramètre \$\\lambda = (\d+)\$\. (Calculer \$P\(X > (\d+)\)|Que vaut \$(E|V)\(X\))/))) {
        const l = +m[1]; const dens = (x) => l * Math.exp(-l * x);
        if (m[3]) return ok(near(ev(rhs(q.answer)), simpson(dens, +m[3], +m[3] + 60 / l, 20000), 1e-6), 'survie');
        const E = simpson((x) => x * dens(x), 0, 60 / l, 20000); const E2 = simpson((x) => x * x * dens(x), 0, 60 / l, 20000);
        return ok(near(ev(rhs(q.answer)), m[4] === 'E' ? E : E2 - E * E, 1e-6), 'moments exp');
      }
      if ((m = S.match(/loi uniforme sur \$\[(-?\d+), (-?\d+)\]\$\. Que vaut \$(E|V)\(X\)/))) {
        const a = +m[1]; const b = +m[2]; const d = 1 / (b - a);
        const E = simpson((x) => x * d, a, b, 200); const E2 = simpson((x) => x * x * d, a, b, 200);
        return ok(near(ev(rhs(q.answer)), m[3] === 'E' ? E : E2 - E * E), 'uniforme');
      }
      const law = (s) => { const mm = s.match(/\\mathcal\{N\}\((-?\d+), (-?\d+)\)/); return [+mm[1], +mm[2]]; };
      if ((m = S.match(/X \\sim \\mathcal\{N\}\((-?\d+), (\d+)\)\$ \(moyenne .*loi de \$Y = (.*?)\$/))) {
        const c = V.poly(m[3], 'X'); const a = c[1] || 0; const b = c[0] || 0; const [mu, v] = law(q.answer);
        return ok(mu === a * +m[1] + b && v === a * a * +m[2], 'affine gauss');
      }
      if ((m = S.match(/X \\sim \\mathcal\{N\}\((-?\d+), (\d+)\)\$ et \$Y \\sim \\mathcal\{N\}\((-?\d+), (\d+)\)\$ indépendantes .*loi de \$X ([+-]) Y\$/))) {
        const [mu, v] = law(q.answer); const sg = m[5] === '-' ? -1 : 1;
        return ok(mu === +m[1] + sg * +m[3] && v === +m[2] + +m[4], 'somme gauss');
      }
      if (/covariance \$\\Sigma/.test(S)) {
        const M = S.match(/\\begin\{pmatrix\}(.*?)\\end\{pmatrix\}/)[1].split('\\\\').map((r) => r.split('&').map((x) => +x.trim()));
        if (M[0][0] * M[1][1] - M[0][1] ** 2 <= 0 || M[0][1] !== M[1][0]) return 'covariance non definie positive';
        const comb = S.match(/(?:V|Cov\})\((.*?)(?:, X)?\)\$ \?/)[1];
        const a = coefIn(comb, 'X'); const bb = coefIn(comb, 'Y');
        const exp = /\\mathrm\{Cov\}/.test(S) ? a * M[0][0] + bb * M[1][0] : a * a * M[0][0] + 2 * a * bb * M[0][1] + bb * bb * M[1][1];
        return ok(+rhs(q.answer) === exp, 'vecteur gaussien ' + exp);
      }
      if ((m = S.match(/X_\{(\d+)\}\$ des variables i\.i\.d\. d'espérance \$(\d+)\$ et d'écart-type \$(\d+)\$.*P\(S \\le (-?\d+)\)/))) {
        const n = +m[1]; const z = (+m[4] - n * +m[2]) / (+m[3] * Math.sqrt(n));
        const got = parseFloat(strip(q.answer).match(/\\Phi\((.*)\)/)[1].replace('{,}', '.'));
        return ok(near(got, z), 'TCL');
      }
      return 'famille non reconnue';
    }
  };
})(V));
}
// ---- recalculs licL1 ----
{
// Recalculs indépendants — Licence 1 (L1-*)
Object.assign(VERIFIERS, ((V) => {
  // ---------- outils ----------
  const strip = (s) => String(s).replace(/\$/g, '').trim();
  const near = (a, b, eps = 1e-6) => Math.abs(a - b) <= eps * Math.max(1, Math.abs(a), Math.abs(b));
  const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
  /** Conversion LaTeX simple -> fonction JS (variables données) */
  function toJS(latex, vars = ['x']) {
    let s = strip(latex)
      .replace(/\\left|\\right|\\displaystyle|\\,|\\;|\\!/g, '')
      .replace(/\\[dt]frac/g, '\\frac')
      .replace(/\{,\}/g, '.')
      .replace(/\\cdot|\\times/g, '*')
      .replace(/\\ln\s*([a-z])(?![a-z(])/g, '\\ln($1)')
      .replace(/(?<=[0-9a-z)}])e\^/g, '*e^');
    let prev;
    do {
      prev = s;
      s = s.replace(/\\sqrt\{([^{}]*)\}/g, 'Math.sqrt($1)')
        .replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '(($1)/($2))')
        .replace(/(?<![a-zA-Z])e\^\{([^{}]*)\}/g, 'Math.exp($1)')
        .replace(/\^\{([^{}]*)\}/g, '**($1)');
    } while (s !== prev);
    s = s.replace(/\^(\d)/g, '**$1')
      .replace(/\\arctan/g, 'Math.atan').replace(/\\sin/g, 'Math.sin').replace(/\\cos/g, 'Math.cos')
      .replace(/\\tan/g, 'Math.tan').replace(/\\ln/g, 'Math.log').replace(/\\pi/g, 'Math.PI')
      .replace(/(?<![a-zA-Z.])e(?![a-zA-Z(])/g, 'Math.E');
    if (/\\/.test(s)) throw new Error('toJS: commande non gérée dans ' + s);
    s = s.replace(/(\d)\s*(?=[a-zA-Z(])/g, '$1*')
      .replace(/\)\s*(?=[a-zA-Z0-9(])/g, ')*')
      .replace(/(?<![a-zA-Z.])([a-z])\s*(?=[(A-Za-z])/g, (m, v) => (vars.includes(v) ? v + '*' : m));
    s = s.replace(/(\([^()]*\)|\b[a-zA-Z0-9.]+)\*\*(\([^()]*\)|[\w.]+)/g, '($1**$2)');
    // eslint-disable-next-line no-new-func
    return new Function(...vars, 'return ' + s + ';');
  }
  const ev = (latex) => toJS(latex, [])();
  const rhs = (s) => strip(s).replace(/^.*?=\s*/, '');
  /** Valeur numérique de la réponse « ... = X » */
  const ansVal = (q) => { const r = rhs(q.answer); if (/\\infty/.test(r)) return /-\\infty/.test(r) ? -Infinity : Infinity; return ev(r); };
  /** Polynôme « 3x^2 - x + 5 » (variable v) -> {deg: coef} (coefficients entiers) */
  const P = (s, v = 'x') => { const p = V.poly(strip(s), v); if (!p) throw new Error('poly illisible : ' + s); return p; };
  const deg = (p) => Math.max(...Object.keys(p).filter((k) => p[k] !== 0).map(Number));
  const evalP = (p, x) => Object.entries(p).reduce((a, [d, c]) => a + c * x ** d, 0);
  const derivAt = (f, x) => (f(x + 1e-5) - f(x - 1e-5)) / 2e-5;
  const simpson = (f, a, b, n = 2000) => { const h = (b - a) / n; let s = f(a) + f(b); for (let i = 1; i < n; i++) s += f(a + i * h) * (i % 2 ? 4 : 2); return (s * h) / 3; };
  /** DL : séries tronquées (flottants) */
  const N = 6;
  const ser = { x: (c = 1) => [0, c, 0, 0, 0, 0, 0], k: (c) => [c, 0, 0, 0, 0, 0, 0] };
  const sadd = (a, b) => a.map((x, i) => x + b[i]);
  const smul = (a, b) => a.map((_, k) => { let s = 0; for (let i = 0; i <= k; i++) s += a[i] * b[k - i]; return s; });
  const spow = (a, n) => { let r = ser.k(1); for (let i = 0; i < n; i++) r = smul(r, a); return r; };
  const fact = (k) => (k <= 1 ? 1 : k * fact(k - 1));
  const compose = (coef, u) => { let r = ser.k(0); for (let k = 0; k <= N; k++) r = sadd(r, spow(u, k).map((x) => x * coef(k))); return r; };
  const EXP = (u) => compose((k) => 1 / fact(k), u);
  const LN1 = (u) => compose((k) => (k === 0 ? 0 : (k % 2 ? 1 : -1) / k), u);
  const SIN = (u) => compose((k) => (k % 2 ? (k % 4 === 1 ? 1 : -1) / fact(k) : 0), u);
  const COS = (u) => compose((k) => (k % 2 ? 0 : (k % 4 === 0 ? 1 : -1) / fact(k)), u);
  const INV1 = (u) => compose((k) => (k % 2 ? -1 : 1), u); // 1/(1+u)
  const POW1 = (u, al) => compose((k) => { let c = 1; for (let i = 0; i < k; i++) c *= (al - i) / (i + 1); return c; }, u);
  /** Coefficients d'un DL affiché « 1 + 2x - \frac{3}{2}x^2 + o(x^n) » */
  function dlCoeffs(s) {
    const body = strip(s).replace(/\s*\+\s*o\(x(\^\d)?\)\s*$/, '');
    const out = new Array(N + 1).fill(0);
    const terms = body.replace(/\s+/g, '').replace(/-/g, '+-').split('+').filter(Boolean);
    for (const t of terms) {
      const m = t.match(/^(-?)((?:\\frac\{\d+\}\{\d+\})|\d+)?(x(?:\^(\d))?)?$/);
      if (!m) throw new Error('terme DL illisible : ' + t);
      const c = (m[1] ? -1 : 1) * (m[2] ? ev(m[2]) : 1);
      const d = m[3] ? (m[4] ? +m[4] : 1) : 0;
      out[d] += c;
    }
    return out;
  }
  /** Série d'une fonction affichée dans les énoncés L1-TAY */
  function dlOf(f) {
    f = f.replace(/\s+/g, ' ').trim();
    let m;
    const lin = (str) => { const p = P(str); return [p[0] || 0, p[1] || 0, p[2] || 0, 0, 0, 0, 0]; };
    if ((m = f.match(/^e\^\{(.*)\}$/))) return EXP(lin(m[1]));
    if ((m = f.match(/^\\sin\((.*)\)$/))) return SIN(lin(m[1]));
    if ((m = f.match(/^\\cos\((.*)\)$/))) return COS(lin(m[1]));
    if ((m = f.match(/^\\ln\(1 (.*)\)$/))) return LN1(lin(m[1]));
    if ((m = f.match(/^\\dfrac\{1\}\{1 (.*)\}$/))) return INV1(lin(m[1]));
    if ((m = f.match(/^\(1 \+ x\)\^\{(.*)\}$/))) return POW1(ser.x(), ev(m[1]));
    if ((m = f.match(/^\\sqrt\{1 (.*)\}$/))) return POW1(lin(m[1]), 0.5);
    if ((m = f.match(/^\((.*)\)e\^\{(.*)\}$/))) return smul(lin(m[1]), EXP(lin(m[2])));
    if ((m = f.match(/^\\dfrac\{e\^\{(.*)\}\}\{(.*)\}$/))) { const d = lin(m[2]); return smul(EXP(lin(m[1])), INV1(sadd(d, ser.k(-1)))); }
    throw new Error('fonction DL non reconnue : ' + f);
  }
  const sameSeries = (a, b, n) => a.slice(0, n + 1).every((x, i) => near(x, b[i], 1e-9));
  const intv = (s) => { const m = strip(s).match(/^([\[\]])(-?\d+), (-?\d+)([\[\]])$/); return m ? [m[1], +m[2], +m[3], m[4]] : null; };

  const R = {};

  // ======================= L1-SUI =======================
  R['L1-SUI'] = (q) => {
    const S = q.statement; let m;
    const t = q.title;
    if (/suite rationnelle/.test(t)) {
      m = S.match(/u_n = \\dfrac\{([^{}]*)\}\{([^{}]*)\}/);
      const a = P(m[1], 'n'); const b = P(m[2], 'n');
      const da = deg(a); const db = deg(b);
      const exp = da < db ? 0 : da === db ? a[da] / b[db] : (a[da] / b[db] > 0 ? Infinity : -Infinity);
      return ansVal(q) === exp || near(ansVal(q), exp) || 'limite rationnelle : attendu ' + exp;
    }
    if (/suite géométrique/.test(t)) {
      m = S.match(/u_n = (-?\d*)\\left\((.*?)\\right\)\^n/);
      const c = m[1] === '' ? 1 : m[1] === '-' ? -1 : +m[1]; const r = ev(m[2]);
      if (r <= -1) return /pas de limite/.test(q.answer) || 'q <= -1 : pas de limite attendu';
      const exp = Math.abs(r) < 1 ? 0 : c > 0 ? Infinity : -Infinity;
      return ansVal(q) === exp || 'géométrique : attendu ' + exp;
    }
    if (/varepsilon\$-\$N/.test(t)) {
      m = S.match(/u_n = (?:(-?\d+) \+ )?\\frac\{(\d+)\}\{n\}.*\\ell = (-?\d+)\$.*\\varepsilon = ([\d{},]+)\$/);
      const L = m[1] ? +m[1] : 0; const b = +m[2]; const eps = ev(m[4]);
      if (L !== +m[3]) return 'limite annoncée fausse';
      const exp = Math.floor(b / eps + 1e-9) + 1;
      return ansVal(q) === exp || 'N attendu ' + exp;
    }
    if (/Rang explicite/.test(t)) {
      m = S.match(/\\dfrac\{([^{}]*)\}\{n \+ 1\}.*\\ell = (-?\d+)\$.*\\frac\{1\}\{(\d+)\}/);
      const p = P(m[1], 'n'); const a = p[1] || 0; const b = p[0] || 0; const M = +m[3];
      if (a !== +m[2]) return 'limite annoncée fausse';
      // plus petit N tel que |b-a|/(n+1) < 1/M pour n >= N
      let n = 0; while (Math.abs(b - a) * M >= n + 1) n++;
      return ansVal(q) === n || 'N attendu ' + n;
    }
    if (/conjuguée/.test(t)) {
      m = S.match(/\\sqrt\{([^{}]*)\} - n/);
      const p = P(m[1], 'n');
      return near(ansVal(q), (p[1] || 0) / 2) || 'limite conjuguée : attendu ' + (p[1] || 0) / 2;
    }
    if (/arithmético-géométrique/.test(t)) {
      m = S.match(/u_\{n\+1\} = (.*?)u_n ([+-]) (\d+)\$/);
      const a = m[1] === '' ? 1 : m[1] === '-' ? -1 : ev(m[1]); const b = (m[2] === '-' ? -1 : 1) * m[3];
      if (Math.abs(a) >= 1) return 'raison >= 1';
      // itération numérique indépendante
      let u = +S.match(/u_0 = (-?\d+)/)[1]; for (let i = 0; i < 400; i++) u = a * u + b;
      return near(ansVal(q), u, 1e-6) || 'limite itérée ' + u;
    }
    if (/u_\{n\+1\} = f\(u_n\)/.test(t)) {
      const a = +S.match(/\\sqrt\{(\d+) \+ u_n\}/)[1];
      let u = 0; for (let i = 0; i < 200; i++) u = Math.sqrt(a + u);
      return near(ansVal(q), u, 1e-6) || 'limite itérée ' + u;
    }
    if (/périodique/.test(t)) {
      const p = +S.match(/\\frac\{2n\\pi\}\{(\d+)\}/)[1];
      const vals = [...new Set([...Array(p).keys()].map((k) => Math.round(Math.cos((2 * Math.PI * k) / p) * 1e9) / 1e9))].sort((x, y) => x - y);
      const got = strip(q.answer).replace(/^\\\{|\\\}$/g, '').split(', ').map(ev).sort((x, y) => x - y);
      return (got.length === vals.length && got.every((x, i) => near(x, vals[i]))) || 'valeurs d\'adhérence attendues ' + vals;
    }
    if (/Sous-suites|Limite (supérieure|inférieure)/.test(t)) {
      m = S.match(/\\dfrac\{([^{}]*)\}\{n \+ (\d+)\}/);
      const a = P(m[1], 'n')[1];
      const f = (n) => (-1) ** n * evalP(P(m[1], 'n'), n) / (n + +m[2]);
      if (!near(f(200000), a, 1e-3) || !near(f(200001), -a, 1e-3)) return 'sous-suites';
      if (/Sous-suites/.test(t)) return strip(q.answer) === `\\{-${a}, ${a}\\}` || 'adhérences attendues ±' + a;
      return ansVal(q) === (/supérieure/.test(t) ? a : -a) || 'limsup/liminf';
    }
    return 'skip';
  };

  // ======================= L1-CNT =======================
  R['L1-CNT'] = (q) => {
    const S = q.statement; const t = q.title; let m;
    if (/Rolle sur un trinôme/.test(t)) {
      m = S.match(/f\(x\) = (.*?)\$ sur \$\[(.*?), (.*?)\]\$/);
      const p = P(m[1]); const lo = ev(m[2]); const hi = ev(m[3]);
      if (!near(evalP(p, lo), evalP(p, hi))) return 'f(a) != f(b)';
      const c = -(p[1] || 0) / (2 * p[2]);
      return (near(ansVal(q), c) && c > lo && c < hi) || 'c attendu ' + c;
    }
    if (/Hypothèses du théorème de Rolle/.test(t)) {
      m = S.match(/\|(.*?)\|\$ sur \$\[(-?\d+), (-?\d+)\]/);
      const p = P(m[1]); const c = -(p[0] || 0); const a = +m[2]; const b = +m[3];
      return (Math.abs(a - c) === Math.abs(b - c) && /ne s'applique pas/.test(q.answer)) || 'Rolle |x - c|';
    }
    if (/^Théorème des accroissements finis$/.test(t)) {
      m = S.match(/f\(x\) = (.*?)\$ sur \$\[(-?\d+), (-?\d+)\]\$/);
      const p = P(m[1]); const a = +m[2]; const b = +m[3];
      const slope = (evalP(p, b) - evalP(p, a)) / (b - a);
      const c = (slope - (p[1] || 0)) / (2 * p[2]);
      return near(ansVal(q), c) || 'c attendu ' + c;
    }
    if (/Accroissements finis pour \$x\^3\$/.test(t)) {
      const k = +S.match(/\[0, (\d+)\]/)[1];
      return near(ansVal(q), k / Math.sqrt(3)) || 'c attendu ' + k / Math.sqrt(3);
    }
    if (/Accroissements finis pour \$1\/x\$/.test(t)) {
      m = S.match(/\[(\d+), (\d+)\]/);
      const a = +m[1]; const b = +m[2]; const slope = (1 / b - 1 / a) / (b - a);
      return near(ansVal(q), Math.sqrt(-1 / slope)) || 'c attendu';
    }
    if (/Prolongement/.test(t)) {
      let f; let x0;
      if ((m = S.match(/\\lim\\limits_\{h \\to 0\} (\\dfrac\{.*\}\{h\})\$/))) { f = toJS(m[1], ['h']); x0 = 0; }
      else {
        m = S.match(/f\(x\) = (\\dfrac\{.*?\}\{[^{}]*\})\$/);
        f = toJS(m[1], ['x']);
        x0 = +(S.match(/donner à \$f\((-?\d+)\)\$/) || [0, 0])[1];
      }
      const h = 1e-6; const L = (f(x0 + h) + f(x0 - h)) / 2;
      return near(ansVal(q), L, 1e-4) || 'limite numérique ' + L;
    }
    if (/Nombre de racines réelles/.test(t)) {
      m = S.match(/\$(.*) = 0\$/);
      const p = P(m[1]); const pp = p[1] || 0; const qq = p[0] || 0;
      const D = -4 * pp ** 3 - 27 * qq ** 2;
      const n = D > 0 ? 3 : D === 0 ? 2 : 1;
      const lab = /Trois/.test(q.answer) ? 3 : /Deux/.test(q.answer) ? 2 : /seule/.test(q.answer) ? 1 : 0;
      return lab === n || 'nombre de racines attendu ' + n;
    }
    if (/Inégalité des accroissements finis/.test(t)) {
      m = S.match(/f\(x\) = x\^(\d)\$ sur \$I = \[(-?\d+), (-?\d+)\]/);
      const n = +m[1]; const a = +m[2]; const b = +m[3];
      let M = 0; for (let i = 0; i <= 1000; i++) { const x = a + ((b - a) * i) / 1000; M = Math.max(M, Math.abs(n * x ** (n - 1))); }
      return near(ansVal(q), M) || 'M attendu ' + M;
    }
    return 'skip';
  };

  // ======================= L1-TAY =======================
  R['L1-TAY'] = (q) => {
    const S = q.statement; const t = q.title; let m;
    if ((m = S.match(/à l'ordre (\d) en \$0\$ de \$f\(x\) = (.*)\$ \?$/))) {
      const n = +m[1]; const s = dlOf(m[2]);
      const got = dlCoeffs(q.answer);
      if (!sameSeries(s, got, n)) return 'DL faux : attendu ' + s.slice(0, n + 1).join(', ');
      for (const o of q.options) if (o !== q.answer && sameSeries(s, dlCoeffs(o), n)) return 'distracteur aussi juste : ' + o;
      return true;
    }
    if (/limite par développement limité/.test(t)) {
      m = S.match(/\\lim\\limits_\{x \\to 0\} (.*)\$\.$/);
      const f = toJS(m[1], ['x']);
      const L = (f(1e-4) + f(-1e-4)) / 2;
      return near(ansVal(q), L, 1e-3) || 'limite numérique ' + L;
    }
    if (/Tangente et position/.test(t)) {
      m = S.match(/f\(x\) = (.*?)\$\. Quelle/);
      const s = dlOf(m[1]);
      const tang = strip(q.answer.match(/\$y = (.*?)\$/)[1]);
      const tp = dlCoeffs(tang);
      if (!near(tp[0], s[0]) || !near(tp[1], s[1])) return 'tangente fausse';
      if (s[2] === 0) return 'position indéterminée';
      return (s[2] > 0) === /au-dessus/.test(q.answer) || 'position fausse';
    }
    return 'skip';
  };

  // ======================= L1-INT =======================
  R['L1-INT'] = (q) => {
    const S = q.statement; const t = q.title; let m;
    if ((m = S.match(/\\displaystyle\\int_\{?(-?[^}^]*?)\}?\^\{(.*?)\} (.*?) \\, dx\$/))) {
      const a = ev(m[1]); const b = ev(m[2]); const f = toJS(m[3].replace(/^\((.*)\)$/, '$1'), ['x']);
      const I = simpson(f, a, b);
      return near(ansVal(q), I, 1e-6) || 'intégrale numérique ' + I;
    }
    if (/Déterminer une primitive/.test(S)) {
      m = S.match(/de \$f\(x\) = (.*?)\$\.$/);
      const f = toJS(m[1], ['x']);
      const F = toJS(strip(q.answer).replace(/\s*\+ C$/, ''), ['x']);
      const pts = [0.7, 1.3, 2.1, 0.4];
      if (!pts.every((x) => near(derivAt(F, x), f(x), 1e-5))) return 'primitive fausse';
      for (const o of q.options) {
        if (o === q.answer) continue;
        const G = toJS(strip(o).replace(/\s*\+ C$/, ''), ['x']);
        if (pts.every((x) => near(derivAt(G, x), f(x), 1e-5))) return 'distracteur aussi primitive : ' + o;
      }
      return true;
    }
    if (/éléments simples/.test(t)) {
      m = S.match(/\$\\dfrac\{([^{}]*)\}\{([^{}]*)\} = \\dfrac\{a\}\{([^{}]*)\} \+ \\dfrac\{b\}\{([^{}]*)\}\$/);
      const lhs = toJS(`\\frac{${m[1]}}{${m[2]}}`); const d1 = toJS(m[3]); const d2 = toJS(m[4]);
      const ab = strip(q.answer).match(/a = (.*?) et b = (.*)$/) || q.answer.match(/\$a = (.*?)\$ et \$b = (.*?)\$/);
      const a = ev(ab[1]); const b = ev(ab[2]);
      return [0.37, 2.71, -1.3, 9.1].every((x) => near(lhs(x), a / d1(x) + b / d2(x), 1e-7)) || 'DES fausse';
    }
    if (/Somme de Riemann/.test(t)) {
      let f; let n = 20000;
      if ((m = S.match(/\\sum_\{k=1\}\^\{n\} \\frac\{(\d*)k(?:\^(\d))?\}\{n\^\{(\d+)\}\}/))) {
        const a = m[1] ? +m[1] : 1; const p = m[2] ? +m[2] : 1; f = (k) => (a * k ** p) / n ** (p + 1);
        let s = 0; for (let k = 1; k <= n; k++) s += f(k);
        return near(ansVal(q), s, 1e-3) || 'somme numérique ' + s;
      }
      if ((m = S.match(/\\sum_\{k=1\}\^\{(\d*)n\} \\frac\{1\}\{n \+ k\}/))) {
        const a = m[1] ? +m[1] : 1; let s = 0; for (let k = 1; k <= a * n; k++) s += 1 / (n + k);
        return near(ansVal(q), s, 1e-3) || 'somme numérique ' + s;
      }
      if ((m = S.match(/\\frac\{n\}\{n\^2 \+ (\d*)k\^2\}/))) {
        const c = m[1] ? +m[1] : 1; let s = 0; for (let k = 1; k <= n; k++) s += n / (n * n + c * k * k);
        return near(ansVal(q), s, 1e-3) || 'somme numérique ' + s;
      }
      if ((m = S.match(/e\^\{(-?\d*)k\/n\}/))) {
        const a = m[1] === '' ? 1 : m[1] === '-' ? -1 : +m[1]; let s = 0; for (let k = 0; k < n; k++) s += Math.exp((a * k) / n) / n;
        return near(ansVal(q), s, 1e-3) || 'somme numérique ' + s;
      }
      return 'Riemann non reconnu';
    }
    return 'skip';
  };

  // ======================= L1-GEO =======================
  const lineCoefs = (s) => { // "ax + by + c" -> [a,b,c]
    const str = strip(s).replace(/\s+/g, '');
    const r = [0, 0, 0];
    for (const tm of str.replace(/-/g, '+-').split('+').filter(Boolean)) {
      const mm = tm.match(/^(-?)(\d*)([xy]?)$/);
      if (!mm) throw new Error('terme ' + tm);
      const c = (mm[1] ? -1 : 1) * (mm[2] ? +mm[2] : 1);
      r[mm[3] === 'x' ? 0 : mm[3] === 'y' ? 1 : 2] += mm[3] ? c : (mm[2] ? c : NaN);
    }
    return r;
  };
  R['L1-GEO'] = (q) => {
    const S = q.statement; const t = q.title; let m;
    if (/Distance d'un point/.test(t)) {
      m = S.match(/M\((-?\d+), (-?\d+)\)\$ à la droite \$\\mathcal\{D\} : (.*) = 0\$/);
      const [a, b, c] = lineCoefs(m[3]); const d = Math.abs(a * m[1] + b * m[2] + c) / Math.hypot(a, b);
      return near(ansVal(q), d) || 'distance ' + d;
    }
    if (/vecteur normal donné/.test(t)) {
      m = S.match(/A\((-?\d+), (-?\d+)\)\$ et de vecteur normal \$\\vec\{n\}\((-?\d+), (-?\d+)\)/);
      const [a, b, c] = lineCoefs(strip(q.answer).replace(/ = 0$/, ''));
      const ok = a * m[4] - b * m[3] === 0 && a * m[1] + b * m[2] + c === 0;
      return ok || 'droite fausse';
    }
    if (/Cercle/.test(t)) {
      m = S.match(/\$(.*) = 0\$ est un cercle/);
      const str = m[1].replace(/x\^2 \+ y\^2/, '').trim();
      const [D, E, F] = str ? lineCoefs(str) : [0, 0, 0];
      const h = -D / 2; const k = -E / 2; const r = Math.sqrt(h * h + k * k - F);
      const a = q.answer.match(/\\Omega\((-?\d+), (-?\d+)\)\$, rayon \$(\d+)\$/);
      return (+a[1] === h && +a[2] === k && +a[3] === r) || 'cercle : attendu ' + [h, k, r];
    }
    if (/Projeté orthogonal/.test(t)) {
      m = S.match(/M\((-?\d+), (-?\d+)\)\$ sur la droite \$\\mathcal\{D\} : (.*) = 0\$/);
      const [a, b, c] = lineCoefs(m[3]); const x0 = +m[1]; const y0 = +m[2];
      const tt = -(a * x0 + b * y0 + c) / (a * a + b * b);
      const H = q.answer.match(/H\\left\((.*), (.*)\\right\)/);
      return (near(ev(H[1]), x0 + tt * a) && near(ev(H[2]), y0 + tt * b)) || 'projeté faux';
    }
    if ((m = S.match(/\\frac\{x\^2\}\{(\d+)\} ([+-]) \\frac\{y\^2\}\{(\d+)\} = 1/))) {
      const A2 = +m[1]; const B2 = +m[3]; const ell = m[2] === '+';
      const c = Math.sqrt(ell ? A2 - B2 : A2 + B2); const a = Math.sqrt(A2); const b = Math.sqrt(B2);
      if (/Excentricité/.test(t)) return near(ansVal(q), c / a) || 'e attendu ' + c / a;
      if (/Foyers/.test(t)) return +q.answer.match(/F\((\d+), 0\)/)[1] === c || 'foyers';
      if (/Asymptotes/.test(t)) return near(ev(q.answer.match(/y = (.*?)x\$/)[1]), b / a) || 'asymptotes';
    }
    if (/Foyer d'une parabole/.test(t)) {
      m = S.match(/\$(x|y)\^2 = (-?\d*)(x|y)\$/);
      const twoP = m[2] === '-' ? -1 : +m[2]; const f = twoP / 4;
      const F = q.answer.match(/F\\left\((.*), (.*)\\right\)/);
      return (m[1] === 'y' ? near(ev(F[1]), f) && ev(F[2]) === 0 : ev(F[1]) === 0 && near(ev(F[2]), f)) || 'foyer parabole';
    }
    if (/Réduction d'une conique/.test(t)) {
      m = S.match(/\$(.*) = 0\$/);
      const str = m[1].replace(/\s+/g, '').replace(/-/g, '+-');
      const co = { xx: 0, yy: 0, x: 0, y: 0, c: 0 };
      for (const tm of str.split('+').filter(Boolean)) {
        const mm = tm.match(/^(-?\d*)(x\^2|y\^2|x|y)?$/);
        const c = mm[1] === '' ? 1 : mm[1] === '-' ? -1 : +mm[1];
        co[mm[2] === 'x^2' ? 'xx' : mm[2] === 'y^2' ? 'yy' : mm[2] || 'c'] += c;
      }
      const h = -co.x / (2 * co.xx); const k = -co.y / (2 * co.yy);
      const K = co.xx * h * h + co.yy * k * k - co.c; // xx (x-h)^2 + yy (y-k)^2 = K
      const a2 = K / co.xx; const b2 = K / co.yy;
      let nat; let e;
      if (a2 > 0 && b2 > 0) { nat = 'Ellipse'; const A = Math.max(a2, b2); const B = Math.min(a2, b2); e = Math.sqrt(1 - B / A); }
      else { nat = 'Hyperbole'; const A = a2 > 0 ? a2 : b2; const B = Math.abs(a2 > 0 ? b2 : a2); e = Math.sqrt(1 + B / A); }
      const am = q.answer.match(/^(\w+) de centre \$\\Omega\((-?\d+), (-?\d+)\)\$ et d'excentricité \$(.*)\$$/);
      return (am[1] === nat && +am[2] === h && +am[3] === k && near(ev(am[4]), e)) || 'conique : attendu ' + [nat, h, k, e];
    }
    return 'skip';
  };

  // ======================= L1-LOG =======================
  const NEG = { '<': '\\ge', '\\le': '>', '>': '\\le', '\\ge': '<' };
  R['L1-LOG'] = (q) => {
    const S = q.statement; const t = q.title; let m;
    if (/Négation d'une assertion quantifiée/.test(t) && (m = S.match(/« \$(\\forall|\\exists) x \\in (\\mathbb\{\w\}), (\\forall|\\exists) y \\in \\mathbb\{\w\}, (.*) (<|>|\\le|\\ge) (-?\d+)\$ »/))) {
      const sw = (x) => (x === '\\forall' ? '\\exists' : '\\forall');
      const exp = `$${sw(m[1])} x \\in ${m[2]}, ${sw(m[3])} y \\in ${m[2]}, ${m[4]} ${NEG[m[5]]} ${m[6]}$`;
      return q.answer === exp || 'négation attendue ' + exp;
    }
    if (/modulo n sur un ensemble fini/.test(t)) {
      m = S.match(/\\dots, (\d+)\\\}\$.*\\pmod\{(\d+)\}.*classe de \$(\d+)\$/);
      const Nn = +m[1]; const n = +m[2]; const k = +m[3];
      let c = 0; for (let x = 1; x <= Nn; x++) if ((x - k) % n === 0) c++;
      return +q.answer.match(/\$(\d+)\$/)[1] === c || 'cardinal attendu ' + c;
    }
    if (/Nombre de classes/.test(t)) {
      const mm = +S.match(/\\\{-(\d+), \\dots/)[1];
      const s = new Set(); for (let x = -mm; x <= mm; x++) s.add(x * x);
      return +q.answer.match(/\$(\d+)\$/)[1] === s.size || 'classes attendues ' + s.size;
    }
    if (/Classe d'équivalence dans le plan/.test(t)) {
      m = S.match(/classe de \$\((-?\d+), (-?\d+)\)\$/);
      const sum = +m[1] + +m[2];
      const ok = (o) => { const v = o.match(/-?\d+/g).map(Number); return v[0] + v[1] === sum; };
      return (ok(q.answer) && q.options.filter(ok).length === 1) || 'classe plan';
    }
    if (/Représentants d'une classe/.test(t)) {
      m = S.match(/(\d+) \\mid \(x - y\).*classe de \$(-?\d+)\$/);
      const n = +m[1]; const a = +m[2];
      const ok = (o) => ((+strip(o) - a) % n + n) % n === 0;
      return (ok(q.answer) && q.options.filter(ok).length === 1) || 'représentant';
    }
    if (/Relation d'équivalence et ensemble quotient/.test(t)) {
      const n = +S.match(/\\pmod\{(\d+)\}/)[1];
      return strip(q.answer) === String(n) || 'quotient';
    }
    if (/Image directe/.test(t)) {
      m = S.match(/f\(\[(-?\d+), (-?\d+)\]\)/);
      const a = +m[1]; const b = +m[2];
      let lo = Infinity; let hi = -Infinity; for (let i = 0; i <= 10000; i++) { const x = a + ((b - a) * i) / 10000; lo = Math.min(lo, x * x); hi = Math.max(hi, x * x); }
      return strip(q.answer) === `[${Math.round(lo)}, ${Math.round(hi)}]` || 'image directe';
    }
    if (/Image réciproque d'un intervalle|valeurs négatives/.test(t)) {
      m = S.match(/f\^\{-1\}\(\[(-?\d+), (-?\d+)\]\)/);
      const c = +m[1]; const d = +m[2];
      const inSet = (x) => x * x >= c && x * x <= d;
      const parts = strip(q.answer).split(' \\cup ').map((s) => s.match(/\[(-?\d+), (-?\d+)\]/).slice(1).map(Number));
      const inAns = (x) => parts.some(([u, v]) => x >= u && x <= v);
      for (let x = -40; x <= 40; x += 0.25) if (inSet(x) !== inAns(x)) return 'image réciproque fausse en ' + x;
      return true;
    }
    if (/Injectivité d'une fonction rationnelle/.test(t)) {
      m = S.match(/\\frac\{(\d+)x \+ (\d+)\}\{x - (\d+)\}/);
      return (+m[1] * +m[3] + +m[2] !== 0 && /^Oui/.test(q.answer)) || 'injectivité homographique';
    }
    if (/Surjectivité d'une fonction homographique/.test(t)) {
      m = S.match(/\\frac\{(\d+)x \+ (\d+)\}\{x - 1\}/);
      return (+m[1] + +m[2] !== 0 && q.answer.includes(`$${m[1]}$`)) || 'surjectivité homographique';
    }
    return 'skip';
  };

  // ======================= L1-CMP =======================
  const factorPoly = (s) => { // produit de facteurs (X ± r)^k, (X^2 + c) -> fonction
    const f = toJS(strip(s).replace(/X/g, 'x'), ['x']); return f;
  };
  R['L1-CMP'] = (q) => {
    const S = q.statement; const t = q.title; let m;
    if (/degré 3 (avec|à) racine double/.test(t)) {
      m = S.match(/P\(X\) = (.*?)\$/);
      const p = P(m[1], 'X');
      const fac = (o) => factorPoly(strip(o).replace(/\$? avec .*$/, '').replace(/\$/g, ''));
      const same = (g) => [-2.5, -1, 0.3, 1.7, 3.2].every((x) => near(g(x), evalP(p, x), 1e-9));
      if (!same(fac(q.answer))) return 'factorisation fausse';
      for (const o of q.options) if (o !== q.answer && same(fac(o))) return 'distracteur aussi juste : ' + o;
      if (/racine double/.test(q.answer)) {
        const r = q.answer.match(/avec \$(-?\d+)\$ racine double et \$(-?\d+)\$ racine simple/);
        const d = +r[1]; const s = +r[2];
        const dp = (x) => (evalP(p, x + 1e-6) - evalP(p, x - 1e-6)) / 2e-6;
        if (!near(evalP(p, d), 0) || Math.abs(dp(d)) > 1e-4 || !near(evalP(p, s), 0) || d === s) return 'racines fausses';
      }
      return true;
    }
    if (/degré 3 scindé/.test(t)) {
      m = S.match(/P\(X\) = (.*?)\$/);
      const p = P(m[1], 'X'); const g = factorPoly(q.answer);
      return [-2.5, -1, 0.3, 1.7, 3.2].every((x) => near(g(x), evalP(p, x), 1e-9)) || 'factorisation fausse';
    }
    if (/second degré à racine double/.test(t)) {
      m = S.match(/P\(X\) = X\^2 ([+-]) (\d+)X \+ (\d+)/);
      const b = (m[1] === '-' ? -1 : 1) * +m[2]; const c = +m[3];
      const r = +q.answer.match(/\$(-?\d+)\$ est une racine double/)[1];
      return (b * b === 4 * c && r === -b / 2) || 'racine double';
    }
    if (/Somme des racines n-ièmes privées/.test(t)) return strip(q.answer) === '-1' || 'somme privée de 1';
    if (/Produit des racines/.test(t)) { const n = +S.match(/n = (\d+)/)[1]; return strip(q.answer) === String(n % 2 ? 1 : -1) || 'produit racines'; }
    if (/Somme totale/.test(t)) return strip(q.answer) === '0' || 'somme totale';
    if (/Reste de division euclidienne/.test(t)) {
      const n = S.match(/X\^\{(\w+)\}/)[1];
      if (n === 'n') return 'skip';
      const r = q.answer.match(/(\d+)X - (\d+)/); return (+r[1] === +n && +r[2] === n - 1) || 'reste';
    }
    return 'skip';
  };

  // ======================= L1-MAT =======================
  const pmats = (s) => (s.match(/\\begin\{pmatrix\}.*?\\end\{pmatrix\}/g) || []).map((x) => x.replace(/\\begin\{pmatrix\}|\\end\{pmatrix\}/g, '').split('\\\\').map((r) => r.split('&').map((c) => ev(c.trim()))));
  const mmul = (A, B) => A.map((r) => B[0].map((_, j) => r.reduce((acc, x, k) => acc + x * B[k][j], 0)));
  const prefix = (s) => { const mm = strip(s).match(/=\s*(.*?)\\begin\{pmatrix\}/); const tt = mm ? mm[1].trim() : ''; return tt === '' ? 1 : tt === '-' ? -1 : ev(tt); };
  const isId = (M) => M.every((r, i) => r.every((x, j) => near(x, i === j ? 1 : 0, 1e-9)));
  R['L1-MAT'] = (q) => {
    const S = q.statement; const t = q.title;
    if (/inverse|Inverse|Inversion/.test(t) && /pmatrix/.test(q.answer) && !/annulateur/.test(t)) {
      const M = pmats(S)[0]; const parts = q.answer.split('$').filter((x) => /pmatrix/.test(x));
      const last = parts[parts.length - 1]; const Inv = pmats(last)[0].map((r) => r.map((x) => x * prefix(last)));
      if (!isId(mmul(M, Inv))) return 'inverse fausse';
      for (const o of q.options) {
        if (o === q.answer) continue;
        const ps = o.split('$').filter((x) => /pmatrix/.test(x)); const l = ps[ps.length - 1];
        const I2 = pmats(l)[0].map((r) => r.map((x) => x * prefix(l)));
        if (I2.length === M.length && isId(mmul(M, I2))) return 'distracteur aussi inverse : ' + o;
      }
      return true;
    }
    if (/Déterminant 2x2/.test(t)) {
      const M = pmats(S)[0]; const d = M[0][0] * M[1][1] - M[0][1] * M[1][0];
      const v = +q.answer.match(/= (-?\d+)/)[1];
      return (v === d && /non inversible/.test(q.answer) === (d === 0)) || 'det 2x2';
    }
    if (/Déterminant d'une matrice triangulaire/.test(t)) {
      const M = pmats(S)[0]; const d = M[0][0] * M[1][1] * M[2][2];
      return +q.answer.match(/= (-?\d+)/)[1] === d || 'det triangulaire';
    }
    if (/Paramètre d'inversibilité/.test(t)) {
      const M = pmats(S.replace(/\\lambda/g, '0'))[0]; const l = +q.answer.match(/= (-?\d+)/)[1];
      return l * M[1][1] - M[0][1] * M[1][0] === 0 || 'lambda';
    }
    if (/Produit de matrices|Multiplication matricielle|matrice-vecteur/.test(t)) {
      const ms = pmats(S); const BA = /produit \$BA\$/.test(S);
      const Rm = BA ? mmul(ms[1], ms[0]) : mmul(ms[0], ms[1]); const got = pmats(q.answer)[0];
      return Rm.every((r, i) => r.every((x, j) => near(x, got[i][j]))) || 'produit faux';
    }
    if (/système échelonné/.test(t)) {
      const rhsv = [...S.matchAll(/= (-?\d+)/g)].map((x) => +x[1]); const [x, y, z] = q.answer.match(/-?\d+/g).map(Number).slice(-3);
      return (x + 2 * y - z === rhsv[0] && y + 2 * z === rhsv[1] && 2 * z === rhsv[2]) || 'système';
    }
    if (/unipotente/.test(t) && /A\^n/.test(q.answer)) {
      const a = pmats(S)[0][0][1]; const got = strip(q.answer).match(/1 & (.*?) \\\\/)[1];
      return toJS(got, ['n'])(7) === 7 * a || 'A^n';
    }
    if (/Trace/.test(t)) {
      const M = pmats(S)[0]; const tm = q.answer.match(/Tr\}\(A\) = (-?\d+)/); if (!tm) return 'skip';
      return +tm[1] === M[0][0] + M[1][1] || 'trace';
    }
    return 'skip';
  };

  // ======================= L1-EV1 =======================
  const rank = (M) => { const A = M.map((r) => r.slice()); let rk = 0; for (let c = 0; c < A[0].length && rk < A.length; c++) { let p = rk; while (p < A.length && Math.abs(A[p][c]) < 1e-12) p++; if (p === A.length) continue; [A[rk], A[p]] = [A[p], A[rk]]; for (let r = 0; r < A.length; r++) if (r !== rk) { const f = A[r][c] / A[rk][c]; A[r] = A[r].map((x, j) => x - f * A[rk][j]); } rk++; } return rk; };
  R['L1-EV1'] = (q) => {
    const S = q.statement; const t = q.title; let m;
    const num = () => +strip(q.answer).match(/(-?\d+)$/)[1];
    if (/sous-espace engendré/.test(t)) {
      const vs = [...S.matchAll(/= \((-?\d+), (-?\d+), (-?\d+)\)/g)].map((x) => x.slice(1).map(Number));
      return num() === rank(vs) || 'rang attendu ' + rank(vs);
    }
    if (/système homogène/.test(t)) {
      const eqs = S.match(/\\mid (.*)\\\}\$/)[1].split(' \\text{ et } ').map((e) => e.replace(/ = 0$/, ''));
      const rows = eqs.map((e) => { const r = [0, 0, 0]; for (const tm of e.replace(/\s+/g, '').replace(/-/g, '+-').split('+').filter(Boolean)) { const mm = tm.match(/^(-?)(\d*)([xyz])$/); r['xyz'.indexOf(mm[3])] = (mm[1] ? -1 : 1) * (mm[2] ? +mm[2] : 1); } return r; });
      return num() === 3 - rank(rows) || 'dimension attendue ' + (3 - rank(rows));
    }
    if (/sous-espace de polynômes$/.test(t)) {
      m = S.match(/\\mathbb\{R\}_\{(\d+)\}\[X\] \\mid (.*?)\\\}/);
      const n = +m[1]; const cond = m[2];
      const k = /P'/.test(cond) || /= P\(/.test(cond) ? 2 : 1; // nombre de conditions indépendantes
      return num() === n + 1 - k || 'dimension polynômes';
    }
    if (/Formule de Grassmann$/.test(t)) {
      m = S.match(/\\dim F = (\d+)\$, \$\\dim G = (\d+)\$ et \$\\dim\(F \\cap G\) = (\d+)/);
      return num() === +m[1] + +m[2] - +m[3] || 'Grassmann';
    }
    if (/Dimension minimale/.test(t)) {
      m = S.match(/\\mathbb\{R\}\^\{(\d+)\}.*respectives \$(\d+)\$ et \$(\d+)\$/);
      return num() === Math.max(0, +m[2] + +m[3] - +m[1]) || 'intersection minimale';
    }
    if (/matrices (anti)?symétriques$/.test(t)) {
      const n = +S.match(/_\{(\d+)\}\(\\mathbb\{R\}\)/)[1];
      return num() === (/antisym/.test(t) ? (n * (n - 1)) / 2 : (n * (n + 1)) / 2) || 'dim S/A';
    }
    if (/noyau de la trace/.test(t)) { const n = +S.match(/_\{(\d+)\}/)[1]; return num() === n * n - 1 || 'trace'; }
    if (/matrices triangulaires/.test(t)) { const n = +S.match(/_\{(\d+)\}/)[1]; return num() === (n * (n + 1)) / 2 || 'triang'; }
    if (/Liberté de deux vecteurs/.test(t)) {
      m = S.match(/u = \((-?\d+), (-?\d+)\), v = \((-?\d+), (-?\d+)\)/).slice(1).map(Number);
      const d = m[0] * m[3] - m[1] * m[2];
      return ((d === 0) === /Liée/.test(q.answer) && (d === 0 || q.answer.includes(`= ${d} `))) || 'liberté 2 vecteurs';
    }
    if (/Base de \$\\mathbb\{R\}\^3\$ et liberté/.test(t) || /Liberté d'une famille de vecteurs sans/.test(t)) {
      const vs = [...S.matchAll(/= \((-?\d+), (-?\d+), (-?\d+)\)/g)].map((x) => x.slice(1).map(Number)); const [u, v, w] = vs;
      const d = u[0] * (v[1] * w[2] - v[2] * w[1]) - u[1] * (v[0] * w[2] - v[2] * w[0]) + u[2] * (v[0] * w[1] - v[1] * w[0]);
      const claimed = q.answer.match(/= (-?\d+) \\neq/);
      return (claimed ? +claimed[1] === d : d === 0) || 'det 3x3 attendu ' + d;
    }
    return 'skip';
  };

  // ======================= L1-APP =======================
  R['L1-APP'] = (q) => {
    const S = q.statement; const t = q.title; let m;
    const comps = (s, vars) => s.split(', \\, ').map((c) => toJS(c, vars));
    if (/^Noyau/.test(t)) {
      m = S.match(/\(x, y(?:, z)?\) = \((.*)\)\$\./);
      const vars = /z\)/.test(S.split('=')[0] + S.match(/\((x, y(?:, z)?)\) =/)[1]) ? ['x', 'y', 'z'] : ['x', 'y'];
      const fs = comps(m[1], vars);
      const M = fs.map((f) => vars.map((_, j) => f(...vars.map((__, k) => (k === j ? 1 : 0)))));
      const rk = rank(M); const n = vars.length; const p = fs.length;
      const km = q.answer.match(/\\text\{Vect\}\(\((.*?)\)\)/);
      if (n - rk === 0) { if (km || !/\\\{\(0, 0(, 0)?\)\\\}/.test(q.answer)) return 'noyau nul attendu'; }
      else {
        if (!km) return 'noyau non nul attendu';
        const w = km[1].split(', ').map(Number);
        if (fs.some((f) => f(...w) !== 0) || w.every((x) => x === 0)) return 'vecteur du noyau faux';
        if (n - rk !== 1) return 'dimension noyau';
      }
      const inj = rk === n; const surj = rk === p;
      const A = q.answer;
      const saysInj = /est injective|automorphisme|bijective/.test(A) && !/n'est (ni|pas) injective|pas injective/.test(A);
      const saysSurj = /surjective|automorphisme|bijective/.test(A) && !/pas surjective|ni surjective|ni injective ni surjective/.test(A);
      return (saysInj === inj && saysSurj === surj) || 'nature fausse (inj ' + inj + ', surj ' + surj + ')';
    }
    if (/Théorème du rang/.test(t)) {
      let dE; let dF; let k;
      if ((m = S.match(/\\mathbb\{R\}\^\{(\d+)\} \\to \\mathbb\{R\}\^\{(\d+)\}.*Ker\} f\) = (\d+)/))) [dE, dF, k] = m.slice(1).map(Number);
      else if ((m = S.match(/\\dim\(E\) = (\d+)\$ et \$\\dim\(F\) = (\d+)\$\. Si \$\\dim\(\\text\{Ker\} f\) = (\d+)/))) [dE, dF, k] = m.slice(1).map(Number);
      else if ((m = S.match(/\\mathcal\{L\}\(\\mathbb\{R\}\^\{(\d+)\}, \\mathbb\{R\}\^\{(\d+)\}\)\$ de rang \$(\d+)\$/))) { const [n, p, r] = m.slice(1).map(Number); const okk = +q.answer.match(/Ker\}\(f\) = (\d+)/)[1] === n - r && /est injective/.test(q.answer) === (r === n) && /et est surjective/.test(q.answer) === (r === p); return (r <= Math.min(n, p) && okk) || 'synthèse rang'; }
      else return 'skip';
      const rg = +q.answer.match(/rg\}\(f\) = (\d+)/)[1];
      if (dE - k > dF) return 'énoncé incohérent : rang > dim F';
      return rg === dE - k || 'rang attendu ' + (dE - k);
    }
    if (/image d'un vecteur/.test(t)) {
      m = S.match(/f\(x, y\) = \((.*)\)\$\. Quelle est l'image du vecteur \$u = \((-?\d+), (-?\d+)\)/);
      const fs = comps(m[1], ['x', 'y']); const r = q.answer.match(/= \((-?\d+), (-?\d+)\)/);
      return (+r[1] === fs[0](+m[2], +m[3]) && +r[2] === fs[1](+m[2], +m[3])) || 'image vecteur';
    }
    if (/dérivation concrète/.test(t)) {
      const p = P(S.match(/P\(X\) = (.*?)\$/)[1], 'X'); const d = P(strip(q.answer).replace(/^D\(P\) = /, ''), 'X');
      return ((d[1] || 0) === 2 * p[2] && (d[0] || 0) === (p[1] || 0)) || 'dérivée';
    }
    if (/Matrice d'un endomorphisme dans la base canonique/.test(t)) {
      m = S.match(/f\(x, y\) = \((.*)\)\$\. Quelle/); const fs = comps(m[1], ['x', 'y']);
      const got = pmats(q.answer)[0];
      return (got[0][0] === fs[0](1, 0) && got[0][1] === fs[0](0, 1) && got[1][0] === fs[1](1, 0) && got[1][1] === fs[1](0, 1)) || 'matrice canonique';
    }
    if (/Projecteur : trace/.test(t)) { m = S.match(/\\mathbb\{R\}\^\{(\d+)\}.*trace \$(\d+)\$/); return +strip(q.answer) === +m[1] - +m[2] || 'projecteur'; }
    if (/Symétrie vectorielle : trace/.test(t)) {
      m = S.match(/\\mathbb\{R\}\^\{(\d+)\}.*Id\}\) = (\d+)\$/); const n = +m[1]; const k = +m[2];
      return +strip(q.answer) === (/det/.test(S.split('Que vaut')[1]) ? (-1) ** k : n - 2 * k) || 'symétrie';
    }
    if (/carré nul/.test(t)) { const n = +S.match(/\\mathbb\{R\}\^\{(\d+)\}/)[1]; return +strip(q.answer) === Math.floor(n / 2) || 'carré nul'; }
    if (/passage/.test(t)) {
      const u = S.match(/u = \((\d+), (\d+)\)/); const v = S.match(/v = \((\d+), (\d+)\)/); const Pm = pmats(q.answer)[0];
      return (Pm[0][0] == u[1] && Pm[1][0] == u[2] && Pm[0][1] == v[1] && Pm[1][1] == v[2] && (u[1] * v[2] - u[2] * v[1]) !== 0) || 'passage';
    }
    return 'skip';
  };

  // ======================= L1-REL =======================
  R['L1-REL'] = (q) => {
    const S = q.statement; const t = q.title; let m;
    const A = () => { const mm = S.match(/A = (\]|\[)(-?\d+), (-?\d+)(\]|\[)/); return mm; };
    if (/somme de parties/.test(t)) {
      const a = S.match(/A = \](-?\d+), (-?\d+)\]/); const b = S.match(/B = \[(-?\d+), (-?\d+)\[/);
      const sup = /supérieure/.test(t);
      const v = sup ? +a[2] + +b[2] : +a[1] + +b[1];
      return (+q.answer.match(/= (-?\d+)/)[1] === v && /pas atteint/.test(q.answer)) || 'sup/inf somme';
    }
    if (/Bornes de \$-A\$/.test(t)) {
      const a = S.match(/A = \](-?\d+), (-?\d+)\]/);
      const r = q.answer.match(/inf\(-A\) = (-?\d+)\$ et \$\\sup\(-A\) = (-?\d+)/);
      return (+r[1] === -a[2] && +r[2] === -a[1]) || 'bornes -A';
    }
    if (/lambda A/.test(t)) {
      const a = S.match(/A = \](-?\d+), (-?\d+)\]/); const l = +S.match(/et \$(-?\d+)A =/)[1];
      return +q.answer.match(/= (-?\d+)\$$/)[1] === Math.max(l * a[1], l * a[2]) || 'sup lambda A';
    }
    if (/Partie entière d'un rationnel/.test(t)) {
      const x = ev(S.match(/x = (.*?)\$/)[1]); const neg = /lfloor -x/.test(S.split('Que vaut')[1]);
      return +q.answer.match(/= (-?\d+)\$/)[1] === Math.floor(neg ? -x : x) || 'partie entière';
    }
    if (/^Propriété d'Archimède$/.test(t)) {
      m = S.match(/n \\cdot \\frac\{(\d+)\}\{(\d+)\} > (\d+)\$/); const pp = +m[1]; const qq = +m[2]; const M = +m[3];
      let n = 0; while (n * pp <= M * qq) n++;
      return +q.answer.match(/= (\d+)/)[1] === n || 'Archimède ' + n;
    }
    if (/suite alternée/.test(t)) {
      const a = +S.match(/\\frac\{(\d+)\}\{n\}/)[1];
      const vals = []; for (let n = 1; n <= 20000; n++) vals.push((-1) ** n + a / n);
      const sup = /\\sup/.test(q.answer);
      return near(ansVal(q), sup ? Math.max(...vals) : Math.min(...vals), sup ? 1e-9 : 1e-3) || 'borne suite alternée';
    }
    if (/Bornes et extrema d'un intervalle/.test(t)) {
      m = S.match(/I = ([\[\]])(-?\d+), (-?\d+)([\[\]])/); const a = +m[2]; const b = +m[3]; const lc = m[1] === '['; const rc = m[4] === ']';
      const exp = /borne supérieure/.test(S) ? (rc ? `$\\sup(I) = ${b}$ et $\\max(I) = ${b}$` : `$\\sup(I) = ${b}$ et $\\max(I)$ n'existe pas`) : (lc ? `$\\inf(I) = ${a}$ et $\\min(I) = ${a}$` : `$\\inf(I) = ${a}$ et $\\min(I)$ n'existe pas`);
      return (q.answer === exp && !q.options.some((o, i) => i !== q.correctIndex && o === exp)) || 'intervalle';
    }
    if (/emboîtés$|Réunion d'une famille/.test(t) && /bigcap|bigcup/.test(S)) {
      // test d'appartenance numérique
      const inner = S.match(/\\(bigcap|bigcup)_\{n \\ge 1\} \\left([\[\]])(.*?), (.*?)\\right([\[\]])\$/);
      const cap = inner[1] === 'bigcap';
      const lo = toJS(inner[3], ['n']); const hi = toJS(inner[4], ['n']);
      const inI = (x, n) => (inner[2] === '[' ? x >= lo(n) - 1e-12 : x > lo(n) + 1e-12) && (inner[5] === ']' ? x <= hi(n) + 1e-12 : x < hi(n) - 1e-12);
      const member = (x) => { const ns = [1, 2, 5, 10, 100, 1e4, 1e7]; return cap ? ns.every((n) => inI(x, n)) : ns.some((n) => inI(x, n)); };
      const ans = strip(q.answer);
      const inAns = ans === '\\emptyset' ? () => false : (() => { const iv = intv(ans); return (x) => (iv[0] === '[' ? x >= iv[1] : x > iv[1]) && (iv[3] === ']' ? x <= iv[2] : x < iv[2]); })();
      const pts = []; for (let x = -8; x <= 10; x += 0.5) pts.push(x); pts.push(...pts.map((x) => x + 1e-3));
      for (const x of pts) if (member(x) !== inAns(x)) return 'ensemble faux en ' + x;
      return true;
    }
    if (/Borne supérieure et irrationnels/.test(t)) { const k = +S.match(/x\^2 < (\d+)/)[1]; return strip(q.answer) === `\\sup(A) = \\sqrt{${k}}` || 'sqrt'; }
    if (A() && /Bornes et extrema d'ensembles à termes alternés/.test(t)) return 'skip';
    return 'skip';
  };

  return R;
})(V));
}
// ---- recalculs 2N5 ----
{
Object.assign(VERIFIERS, ((V) => {
  // ======================= 2N5 : proportions et évolutions =======================
  const num = (s) => V.val(String(s).replace(/\\,\\%/g, '').replace(/\\,/g, '').replace(/^\+/, ''));
  /** « Une hausse de $x\,\%$ » -> x ; « Une baisse de $x\,\%$ » -> -x ; « Aucune évolution » -> 0 ; « $+x\,\%$ » -> x */
  const evo = (a) => {
    if (/^Aucune évolution$/.test(a)) return 0;
    let m = a.match(/^Une (hausse|baisse) de \$(.*?)\\,\\%\$$/);
    if (m) return (m[1] === 'hausse' ? 1 : -1) * num(m[2]);
    m = a.match(/^\$([+-])(.*?)\\,\\%\$$/);
    if (m) return (m[1] === '+' ? 1 : -1) * num(m[2]);
    m = a.match(/^\$(.*?)\\,\\%\$$/);
    if (m) return num(m[1]);
    return NaN;
  };
  /** Taux signés des verbes « augmente de $t\,\%$ » / « diminue de $t\,\%$ », dans l'ordre */
  const verbs = (s) => [...s.matchAll(/(augmente|diminue|augmenté|diminué) de \$(.*?)\\,\\%\$/g)].map((m) => (/^augment/.test(m[1]) ? 1 : -1) * num(m[2]));
  const dollars = (s) => [...s.matchAll(/\$([^$]*)\$/g)].map((m) => m[1]);
  const close = (a, b, eps = 1e-9) => Number.isFinite(a) && Math.abs(a - b) <= eps;
  const R2 = (x) => Math.round(x * 100) / 100;
  const check = (q) => {
    const s = q.statement; const a = q.answer;
    switch (q.title) {
      case 'Coefficient multiplicateur': {
        const [t] = verbs(s);
        return close(num(a), 1 + t / 100) || 'coefficient faux';
      }
      case 'Taux à partir du coefficient': {
        const cm = num(s.match(/par \$(.*?)\$/)[1]);
        return close(evo(a), R2((cm - 1) * 100), 1e-6) || 'taux faux';
      }
      case 'Calcul d\'une proportion': {
        const [N, nA] = dollars(s).map(num);
        return close(evo(a), (nA / N) * 100, 1e-9) || 'proportion fausse';
      }
      case 'Effectif à partir d\'une proportion': {
        const d = dollars(s);
        const N = num(d[0]); const k = num(d[1].replace(/\\,\\%/, ''));
        return close(num(a), (k * N) / 100) || 'effectif faux';
      }
      case 'Taux d\'évolution': {
        const m = s.match(/passe de \$(.*?)\$ à \$(.*?)\$/);
        const VD = num(m[1]); const VA = num(m[2]);
        return close(evo(a), ((VA - VD) / VD) * 100, 1e-9) || 'taux faux';
      }
      case 'Valeur après évolution': {
        const VD = num(s.match(/valait \$(.*?)\$/)[1]); const [t] = verbs(s);
        return close(num(a), VD * (1 + t / 100), 1e-9) || 'valeur d\'arrivée fausse';
      }
      case 'Valeur avant évolution': {
        const [t] = verbs(s); const VA = num(s.match(/vaut \$(.*?)\$/)[1]);
        return close(num(a) * (1 + t / 100), VA, 1e-9) || 'valeur initiale fausse';
      }
      case 'Évolutions successives': {
        const [t1, t2] = verbs(s);
        return close(evo(a), R2(((1 + t1 / 100) * (1 + t2 / 100) - 1) * 100), 1e-6) || 'taux global faux';
      }
      case 'Proportion de proportion': {
        const d = dollars(s).map((x) => num(x));
        return close(evo(a), (d[0] * d[1]) / 100, 1e-9) || 'proportion de proportion fausse';
      }
      case 'Évolution réciproque': {
        const [t] = verbs(s);
        const tr = (1 / (1 + t / 100) - 1) * 100;
        if (/arrondi/.test(s) === (Math.abs(R2(tr) - tr) < 1e-9)) return 'mention d\'arrondi incohérente';
        return close(evo(a), R2(tr), 1e-6) || 'taux réciproque faux';
      }
      case 'Évolutions identiques répétées': {
        const [t] = verbs(s); const n = +s.match(/pendant \$(\d+)\$ ans/)[1];
        return close(evo(a), R2(((1 + t / 100) ** n - 1) * 100), 1e-6) || 'taux global faux';
      }
      case 'Second taux d\'évolution': {
        const [t1] = verbs(s);
        const m = s.match(/est une (hausse|baisse) de \$(.*?)\\,\\%\$/);
        const tg = (m[1] === 'hausse' ? 1 : -1) * num(m[2]);
        return close(evo(a), ((1 + tg / 100) / (1 + t1 / 100) - 1) * 100, 1e-6) || 'second taux faux';
      }
      default:
        return 'famille 2N5 non reconnue : ' + q.title;
    }
  };
  return { '2N5': check };
})(V));
}
// ---- recalculs 2S4 ----
{
Object.assign(VERIFIERS, ((V) => {
  // ---------- mini-interpréteur Python (sous-ensemble) pour les recalculs d'algorithmique ----------
  // int = nombre JS, float = PyFloat, bool, str, list. Instructions : =, +=, -=, *=, /=, //=, %=, a, b = …, L[i] = …,
  // if/elif/else, for … in …, while, break, def/return, print, import (ignoré).
  // Fonctions : range, len, abs, sum, max, min, int, float, str, sqrt, random, randint (hooks), list.append.
  const PY = (() => {
    class PyFloat { constructor(v) { this.v = v; } }
    const F = (v) => new PyFloat(v);
    const isF = (x) => x instanceof PyFloat;
    const nv = (x) => (isF(x) ? x.v : typeof x === 'boolean' ? (x ? 1 : 0) : x);
    const isNum = (x) => typeof x === 'number' || typeof x === 'boolean' || isF(x);
    const truthy = (x) => (Array.isArray(x) ? x.length > 0 : isF(x) ? x.v !== 0 : !!x);
    const TOK = /\s*(?:(\d+\.\d*(?:e-?\d+)?|\d+e-?\d+|\d+)|("[^"]*"|'[^']*')|([A-Za-z_]\w*)|(\*\*|\/\/=|\/\/|==|!=|<=|>=|\+=|-=|\*=|\/=|%=|[-+*/%<>()[\],.:=]))/y;
    function tokenize(s) {
      const out = []; TOK.lastIndex = 0; let m;
      while (TOK.lastIndex < s.length) {
        const start = TOK.lastIndex;
        if (/^\s*$/.test(s.slice(start))) break;
        m = TOK.exec(s);
        if (!m) throw new Error('jeton illisible : ' + s.slice(start));
        if (m[1] !== undefined) out.push({ t: 'num', v: /[.e]/.test(m[1]) ? F(parseFloat(m[1])) : parseInt(m[1], 10) });
        else if (m[2] !== undefined) out.push({ t: 'str', v: m[2].slice(1, -1) });
        else if (m[3] !== undefined) out.push({ t: 'name', v: m[3] });
        else out.push({ t: 'op', v: m[4] });
      }
      return out;
    }
    // ---- analyse d'expressions ----
    function parser(toks) {
      let i = 0;
      const peek = (v) => toks[i] && (toks[i].t === 'op' || toks[i].t === 'name') && toks[i].v === v;
      const eat = (v) => { if (!peek(v)) throw new Error('attendu ' + v + ' trouvé ' + (toks[i] ? toks[i].v : 'fin')); i++; };
      function expr() { return or(); }
      function or() { let a = and(); while (peek('or')) { i++; const b = and(); const l = a; a = { k: 'or', l, r: b }; } return a; }
      function and() { let a = not(); while (peek('and')) { i++; const b = not(); const l = a; a = { k: 'and', l, r: b }; } return a; }
      function not() { if (peek('not')) { i++; return { k: 'not', e: not() }; } return cmp(); }
      function cmp() {
        const first = add(); const ops = []; const rest = [];
        while (toks[i] && ['==', '!=', '<', '<=', '>', '>=', 'in'].includes(toks[i].v) && toks[i].t !== 'str') { ops.push(toks[i].v); i++; rest.push(add()); }
        return ops.length ? { k: 'cmp', first, ops, rest } : first;
      }
      function add() { let a = mul(); while (peek('+') || peek('-')) { const op = toks[i++].v; a = { k: 'bin', op, l: a, r: mul() }; } return a; }
      function mul() { let a = unary(); while (peek('*') || peek('/') || peek('//') || peek('%')) { const op = toks[i++].v; a = { k: 'bin', op, l: a, r: unary() }; } return a; }
      function unary() { if (peek('-')) { i++; return { k: 'neg', e: unary() }; } if (peek('+')) { i++; return unary(); } return pow(); }
      function pow() { const a = post(); if (peek('**')) { i++; return { k: 'bin', op: '**', l: a, r: unary() }; } return a; }
      function post() {
        let a = atom();
        for (;;) {
          if (peek('(')) { i++; const args = []; while (!peek(')')) { args.push(expr()); if (peek(',')) i++; } eat(')'); a = { k: 'call', f: a, args }; } else if (peek('[')) { i++; const ix = expr(); eat(']'); a = { k: 'idx', e: a, ix }; } else if (peek('.')) { i++; a = { k: 'attr', e: a, name: toks[i++].v }; } else break;
        }
        return a;
      }
      function atom() {
        const t = toks[i++];
        if (!t) throw new Error('expression incomplète');
        if (t.t === 'num' || t.t === 'str') return { k: 'lit', v: t.v };
        if (t.t === 'name') {
          if (t.v === 'True') return { k: 'lit', v: true };
          if (t.v === 'False') return { k: 'lit', v: false };
          return { k: 'name', v: t.v };
        }
        if (t.v === '(') { const e = expr(); if (peek(',')) { const items = [e]; while (peek(',')) { i++; if (peek(')')) break; items.push(expr()); } eat(')'); return { k: 'tuple', items }; } eat(')'); return e; }
        if (t.v === '[') {
          if (peek(']')) { i++; return { k: 'list', items: [] }; }
          const first = expr();
          if (peek('for')) {
            i++; const v = toks[i++].v; eat('in'); const it = or(); let cond = null;
            if (peek('if')) { i++; cond = or(); }
            eat(']'); return { k: 'comp', e: first, v, it, cond };
          }
          const items = [first]; while (peek(',')) { i++; if (peek(']')) break; items.push(expr()); } eat(']');
          return { k: 'list', items };
        }
        throw new Error('jeton inattendu ' + t.v);
      }
      function tupleExpr() { const e = expr(); if (peek(',')) { const items = [e]; while (peek(',')) { i++; items.push(expr()); } return { k: 'tuple', items }; } return e; }
      return { expr, tupleExpr, done: () => i >= toks.length, rest: () => toks.slice(i), pos: () => i, setPos: (p) => { i = p; }, peek, eat };
    }
    const parseExpr = (s) => { const p = parser(tokenize(s)); const e = p.tupleExpr(); if (!p.done()) throw new Error('reste : ' + s); return e; };
    // ---- arithmétique ----
    function arith(op, a, b) {
      if (op === '+' && Array.isArray(a)) return a.concat(b);
      if (op === '+' && typeof a === 'string') return a + b;
      if (op === '*' && typeof a === 'string') return a.repeat(nv(b));
      if (!isNum(a) || !isNum(b)) throw new Error('opérandes invalides pour ' + op);
      const x = nv(a); const y = nv(b); const fl = isF(a) || isF(b);
      const w = (v) => (fl ? F(v) : v);
      switch (op) {
        case '+': return w(x + y);
        case '-': return w(x - y);
        case '*': return w(x * y);
        case '/': if (y === 0) throw new Error('ZeroDivisionError'); return F(x / y);
        case '//': if (y === 0) throw new Error('ZeroDivisionError'); return w(Math.floor(x / y));
        case '%': if (y === 0) throw new Error('ZeroDivisionError'); return w(x - y * Math.floor(x / y));
        case '**': return (!fl && y >= 0) ? Math.pow(x, y) : F(Math.pow(x, y));
        default: throw new Error('op ' + op);
      }
    }
    function eq(a, b) {
      if (isNum(a) && isNum(b)) return nv(a) === nv(b);
      if (Array.isArray(a) && Array.isArray(b)) return a.length === b.length && a.every((x, k) => eq(x, b[k]));
      return a === b;
    }
    function compare(op, a, b) {
      if (op === '==') return eq(a, b);
      if (op === '!=') return !eq(a, b);
      if (op === 'in') return Array.isArray(b) ? b.some((x) => eq(x, a)) : String(b).includes(a);
      const x = isNum(a) ? nv(a) : a; const y = isNum(b) ? nv(b) : b;
      return { '<': x < y, '<=': x <= y, '>': x > y, '>=': x >= y }[op];
    }
    function repr(v, inner) {
      if (isF(v)) {
        const x = v.v;
        if (Number.isInteger(x) && Math.abs(x) < 1e16) return x + '.0';
        return String(x).replace(/e([+-])(\d)$/, 'e$10$2');
      }
      if (typeof v === 'boolean') return v ? 'True' : 'False';
      if (typeof v === 'string') return inner ? "'" + v + "'" : v;
      if (Array.isArray(v)) return '[' + v.map((x) => repr(x, true)).join(', ') + ']';
      if (v && v.k === 'tuple') return '(' + v.items.map((x) => repr(x, true)).join(', ') + ')';
      return String(v);
    }
    // ---- programme ----
    function parseProgram(code) {
      const lines = code.split('\n').map((l) => l.replace(/#.*$/, '').replace(/\s+$/, '')).filter((l) => l.trim());
      let li = 0;
      const ind = (l) => l.match(/^ */)[0].length;
      function block(level) {
        const out = [];
        while (li < lines.length && ind(lines[li]) === level) out.push(stmt(level));
        if (li < lines.length && ind(lines[li]) > level) throw new Error('indentation inattendue : ' + lines[li]);
        return out;
      }
      function body(level) {
        if (li >= lines.length || ind(lines[li]) <= level) throw new Error('bloc vide');
        return block(ind(lines[li]));
      }
      function stmt(level) {
        const line = lines[li++].trim();
        let m;
        if ((m = line.match(/^def (\w+)\((.*)\):$/))) return { k: 'def', name: m[1], params: m[2].split(',').map((s) => s.trim()).filter(Boolean), body: body(level) };
        if ((m = line.match(/^if (.*):$/))) {
          const branches = [{ c: parseExpr(m[1]), b: body(level) }]; let els = null;
          while (li < lines.length && ind(lines[li]) === level) {
            const l2 = lines[li].trim(); let m2;
            if ((m2 = l2.match(/^elif (.*):$/))) { li++; branches.push({ c: parseExpr(m2[1]), b: body(level) }); } else if (l2 === 'else:') { li++; els = body(level); break; } else break;
          }
          return { k: 'if', branches, els };
        }
        if ((m = line.match(/^for (\w+) in (.*):$/))) return { k: 'for', v: m[1], it: parseExpr(m[2]), body: body(level) };
        if ((m = line.match(/^while (.*):$/))) return { k: 'while', c: parseExpr(m[1]), body: body(level) };
        if (line === 'break') return { k: 'break' };
        if ((m = line.match(/^return(?: (.*))?$/))) return { k: 'return', e: m[1] ? parseExpr(m[1]) : null };
        if (/^(import|from) /.test(line)) return { k: 'pass' };
        if (line === 'pass') return { k: 'pass' };
        const toks = tokenize(line);
        let depth = 0;
        for (let k = 0; k < toks.length; k++) {
          const t = toks[k];
          if (t.t !== 'op') continue;
          if ('([' .includes(t.v)) depth++;
          else if (')]'.includes(t.v)) depth--;
          else if (depth === 0 && ['=', '+=', '-=', '*=', '/=', '//=', '%='].includes(t.v)) {
            const pl = parser(toks.slice(0, k)); const target = pl.tupleExpr();
            const pr = parser(toks.slice(k + 1)); const value = pr.tupleExpr();
            if (!pl.done() || !pr.done()) throw new Error('affectation illisible : ' + line);
            return { k: 'assign', op: t.v, target, value };
          }
        }
        const p = parser(toks); const e = p.tupleExpr(); if (!p.done()) throw new Error('instruction illisible : ' + line);
        return { k: 'expr', e };
      }
      const prog = block(0);
      if (li < lines.length) throw new Error('ligne non analysée : ' + lines[li]);
      return prog;
    }
    class Ret { constructor(v) { this.v = v; } }
    class Brk {}
    function run(code, hooks = {}) {
      const out = []; let steps = 0;
      const globals = {};
      const builtins = {
        print: (...a) => { out.push(a.map((x) => repr(x)).join(' ')); return undefined; },
        range: (a, b, c) => { let s = 0; let e; let st = 1; if (b === undefined) e = nv(a); else { s = nv(a); e = nv(b); if (c !== undefined) st = nv(c); } const r = []; if (st > 0) for (let x = s; x < e; x += st) r.push(x); else for (let x = s; x > e; x += st) r.push(x); return r; },
        len: (a) => a.length,
        abs: (a) => (isF(a) ? F(Math.abs(a.v)) : Math.abs(nv(a))),
        sum: (a) => a.reduce((s, x) => arith('+', s, x), 0),
        max: (...a) => { const L = a.length === 1 && Array.isArray(a[0]) ? a[0] : a; return L.reduce((m, x) => (compare('>', x, m) ? x : m)); },
        min: (...a) => { const L = a.length === 1 && Array.isArray(a[0]) ? a[0] : a; return L.reduce((m, x) => (compare('<', x, m) ? x : m)); },
        int: (a) => (typeof a === 'string' ? parseInt(a, 10) : Math.trunc(nv(a))),
        float: (a) => F(typeof a === 'string' ? parseFloat(a) : nv(a)),
        str: (a) => repr(a),
        sqrt: (a) => F(Math.sqrt(nv(a))),
        random: () => F(hooks.random ? hooks.random() : Math.random()),
        randint: (a, b) => (hooks.randint ? hooks.randint(nv(a), nv(b)) : nv(a) + Math.floor(Math.random() * (nv(b) - nv(a) + 1)))
      };
      function lookup(env, n) {
        if (env.loc && n in env.loc) return env.loc[n];
        if (n in globals) return globals[n];
        if (n in builtins) return builtins[n];
        throw new Error('NameError: ' + n);
      }
      function ev(e, env) {
        if (++steps > 2e6) throw new Error('trop d\'étapes');
        switch (e.k) {
          case 'lit': return e.v;
          case 'name': return lookup(env, e.v);
          case 'neg': { const v = ev(e.e, env); return isF(v) ? F(-v.v) : -nv(v); }
          case 'not': return !truthy(ev(e.e, env));
          case 'and': { const a = ev(e.l, env); return truthy(a) ? ev(e.r, env) : a; }
          case 'or': { const a = ev(e.l, env); return truthy(a) ? a : ev(e.r, env); }
          case 'bin': return arith(e.op, ev(e.l, env), ev(e.r, env));
          case 'cmp': { let a = ev(e.first, env); for (let k = 0; k < e.ops.length; k++) { const b = ev(e.rest[k], env); if (!compare(e.ops[k], a, b)) return false; a = b; } return true; }
          case 'list': return e.items.map((x) => ev(x, env));
          case 'tuple': return { k: 'tuple', items: e.items.map((x) => ev(x, env)) };
          case 'comp': {
            const it = ev(e.it, env); const res = [];
            const loc = Object.assign({}, env.loc || {});
            const env2 = { loc };
            for (const x of it) { loc[e.v] = x; if (!e.cond || truthy(ev(e.cond, env2))) res.push(ev(e.e, env2)); }
            return res;
          }
          case 'idx': { const L = ev(e.e, env); let ix = nv(ev(e.ix, env)); if (ix < 0) ix += L.length; if (ix < 0 || ix >= L.length) throw new Error('IndexError'); return L[ix]; }
          case 'attr': {
            const o = ev(e.e, env);
            if (Array.isArray(o) && e.name === 'append') return (x) => { o.push(x); return undefined; };
            throw new Error('attribut ' + e.name);
          }
          case 'call': {
            const f = ev(e.f, env); const args = e.args.map((x) => ev(x, env));
            if (typeof f === 'function') return f(...args);
            if (f && f.k === 'def') {
              const loc = {}; f.params.forEach((p, k) => { loc[p] = args[k]; });
              try { exec(f.body, { loc }); } catch (r) { if (r instanceof Ret) return r.v; throw r; }
              return undefined;
            }
            throw new Error('appel invalide');
          }
          default: throw new Error('noeud ' + e.k);
        }
      }
      function assignTo(t, v, env) {
        const store = env.loc || globals;
        if (t.k === 'name') store[t.v] = v;
        else if (t.k === 'tuple') { const vs = v.k === 'tuple' ? v.items : v; t.items.forEach((x, k) => assignTo(x, vs[k], env)); } else if (t.k === 'idx') { const L = ev(t.e, env); let ix = nv(ev(t.ix, env)); if (ix < 0) ix += L.length; L[ix] = v; } else throw new Error('cible invalide');
      }
      function exec(stmts, env) {
        for (const s of stmts) {
          if (++steps > 2e6) throw new Error('trop d\'étapes');
          switch (s.k) {
            case 'def': (env.loc || globals)[s.name] = s; break;
            case 'if': { const br = s.branches.find((b) => truthy(ev(b.c, env))); if (br) exec(br.b, env); else if (s.els) exec(s.els, env); break; }
            case 'for': {
              const it = ev(s.it, env);
              try { for (const x of (typeof it === 'string' ? it.split('') : it.slice())) { assignTo({ k: 'name', v: s.v }, x, env); exec(s.body, env); } } catch (b) { if (!(b instanceof Brk)) throw b; }
              break;
            }
            case 'while': try { while (truthy(ev(s.c, env))) exec(s.body, env); } catch (b) { if (!(b instanceof Brk)) throw b; } break;
            case 'break': throw new Brk();
            case 'return': throw new Ret(s.e ? ev(s.e, env) : undefined);
            case 'pass': break;
            case 'assign': {
              let v = ev(s.value, env);
              if (s.op !== '=') v = arith(s.op.slice(0, -1), ev(s.target, env), v);
              assignTo(s.target, v, env); break;
            }
            case 'expr': ev(s.e, env); break;
            default: throw new Error('instruction ' + s.k);
          }
        }
      }
      exec(parseProgram(code), {});
      return { out, globals, repr, call: (name, ...args) => ev({ k: 'call', f: { k: 'lit', v: globals[name] }, args: args.map((v) => ({ k: 'lit', v })) }, {}) };
    }
    /** Évalue une expression Python isolée (variables fournies dans vars). */
    function evalExpr(src, vars = {}, hooks = {}) {
      const code = Object.entries(vars).map(([k, v]) => `${k} = ${typeof v === 'number' && !Number.isInteger(v) ? String(v) : v}`).join('\n') + '\n__r = ' + src;
      const r = run(code, hooks);
      return nv(r.globals.__r);
    }
    /** Code Python d'un énoncé (premier bloc ```python ... ```). */
    const code = (s) => { const m = String(s).match(/```python\n([\s\S]*?)```/); if (!m) throw new Error('pas de bloc python'); return m[1]; };
    /** Vérifie une réponse de QCM contre la sortie d'un programme : « … » = texte exact, sinon valeur numérique. */
    function checkOut(ans, outLines) {
      const got = outLines.join('\n');
      const m = String(ans).match(/^« (.*) »$/);
      if (m) return m[1] === got || `affiche « ${got} », réponse « ${m[1]} »`;
      const v = V.val(String(ans).replace(/^\$|\$$/g, ''));
      if (Number.isNaN(v)) return 'réponse illisible ' + ans;
      if (outLines.length !== 1 || Number.isNaN(parseFloat(got))) return 'sortie non numérique « ' + got + ' »';
      return Math.abs(parseFloat(got) - v) < 1e-9 * Math.max(1, Math.abs(v)) || `affiche ${got}, réponse ${ans}`;
    }
    return { run, evalExpr, code, checkOut, nv, repr, F };
  })();
  V.py = PY;
  /** Recalcul générique : exécute le programme de l'énoncé, compare la sortie à la réponse et vérifie
   *  qu'aucun distracteur ne correspond aussi à la sortie. */
  const runCheck = (q) => {
    const r = PY.run(PY.code(q.statement));
    const ok = PY.checkOut(q.answer, r.out);
    if (ok !== true) return ok;
    const dup = (q.options || []).find((o) => o !== q.answer && PY.checkOut(o, r.out) === true);
    return dup ? 'distracteur également correct : ' + dup : true;
  };
  return { '2S4/1': runCheck, '2S4/2': runCheck, '2S4/3': runCheck, '2S4/4': runCheck };
})(V));
}
// ---- recalculs 1S3 ----
{
Object.assign(VERIFIERS, ((V) => {
  // Utilise l'interpréteur V.py défini avec les recalculs de 2S4 (résolu à l'appel).
  const runCheck = (q) => {
    const PY = V.py;
    const r = PY.run(PY.code(q.statement));
    const ok = PY.checkOut(q.answer, r.out);
    if (ok !== true) return ok;
    const dup = (q.options || []).find((o) => o !== q.answer && PY.checkOut(o, r.out) === true);
    return dup ? 'distracteur également correct : ' + dup : true;
  };
  /** Programme de simulation : on énumère toutes les issues des appels randint de la fonction d'expérience
   *  et on compare la moyenne exacte (probabilité ou espérance) à la réponse. */
  const enumCheck = (q) => {
    const PY = V.py;
    const code = PY.code(q.statement);
    const fn = /def gain\(\)/.test(code) ? 'gain' : 'experience';
    if (!/return (c|s) \/ N/.test(code)) return 'fonction de moyenne absente';
    const lines = code.split('\n');
    const i0 = lines.findIndex((l) => l === `def ${fn}():`);
    let i1 = i0 + 1;
    while (i1 < lines.length && /^ {4}/.test(lines[i1])) i1++;
    const block = lines.slice(i0, i1).join('\n');
    const calls = [...block.matchAll(/randint\((\d+), (\d+)\)/g)].map((m) => [+m[1], +m[2]]);
    let combos = [[]];
    for (const [a, b] of calls) { const nx = []; for (const c of combos) for (let v = a; v <= b; v++) nx.push([...c, v]); combos = nx; }
    let sum = 0;
    for (const c of combos) {
      let k = 0;
      const r = PY.run(block + `\nprint(${fn}())`, { randint: () => c[k++] });
      sum += parseFloat(r.out[0]);
    }
    const mean = sum / combos.length;
    const val = (o) => V.val(String(o).replace(/^\$|\$$/g, ''));
    if (!V.near(val(q.answer), mean)) return `moyenne exacte ${mean}, réponse ${q.answer}`;
    const dup = q.options.find((o) => o !== q.answer && V.near(val(o), mean));
    return dup ? 'distracteur égal à la valeur exacte : ' + dup : true;
  };
  const any = (q) => (/randint/.test(q.statement) ? enumCheck(q) : runCheck(q));
  return { '1S3/1': runCheck, '1S3/2': runCheck, '1S3/3': runCheck, '1S3/4': any };
})(V));
}
// ---- recalculs TA8 ----
{
Object.assign(VERIFIERS, ((V) => {
  // Recalculs indépendants — TA8 (dérivées de composées, dérivée seconde) : dérivation numérique
  // Évaluateur indépendant d'expressions LaTeX en x : \frac, \sqrt, e^{…}, \ln, \sin, \cos, \pi, puissances, produits implicites
  const ev = (tex) => {
    let s = String(tex).replace(/\\left|\\right|\\,|\\!/g, '').replace(/\\[dt]frac/g, '\\frac').replace(/\{,\}/g, '.').replace(/\s+/g, '');
    let prev;
    do {
      prev = s;
      s = s.replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '(($1)/($2))').replace(/\\sqrt\{([^{}]*)\}/g, 'S($1)')
        .replace(/e\^\{([^{}]*)\}/g, 'E($1)').replace(/\^\{([^{}]*)\}/g, '^($1)');
    } while (s !== prev);
    s = s.replace(/\\sin/g, 'N').replace(/\\cos/g, 'C').replace(/\\ln/g, 'L').replace(/\\pi/g, 'P').replace(/\\times|\\cdot/g, '*');
    const toks = s.match(/\d+(?:\.\d+)?|[xPeSENCL]|[+\-*/^()]/g) || [];
    if (toks.join('') !== s) throw new Error('ev: jeton inconnu dans ' + tex + ' -> ' + s);
    let i = 0;
    const peek = () => toks[i];
    const expr = () => {
      let v = term();
      while (peek() === '+' || peek() === '-') { const o = toks[i++]; const r = term(); const l = v; v = o === '+' ? (x) => l(x) + r(x) : (x) => l(x) - r(x); }
      return v;
    };
    const term = () => {
      let v = unary();
      for (;;) {
        const t = peek();
        if (t === '*' || t === '/') { i++; const r = unary(); const l = v; v = t === '*' ? (x) => l(x) * r(x) : (x) => l(x) / r(x); } else if (t !== undefined && /^[\d(xPeSENCL]/.test(t)) { const r = power(); const l = v; v = (x) => l(x) * r(x); } else break;
      }
      return v;
    };
    const unary = () => {
      if (peek() === '-') { i++; const u = unary(); return (x) => -u(x); }
      return power();
    };
    const power = () => {
      const b = primary();
      if (peek() === '^') { i++; const e = unary(); return (x) => Math.pow(b(x), e(x)); }
      return b;
    };
    const primary = () => {
      const t = toks[i++];
      if (t === undefined) throw new Error('ev: fin inattendue ' + tex);
      if (/^\d/.test(t)) { const c = +t; return () => c; }
      if (t === 'x') return (x) => x;
      if (t === 'P') return () => Math.PI;
      if (t === 'e') return () => Math.E;
      if (t === '(') { const v = expr(); if (toks[i++] !== ')') throw new Error('ev: ) attendue ' + tex); return v; }
      const F = { S: Math.sqrt, E: Math.exp, N: Math.sin, C: Math.cos, L: Math.log }[t];
      if (F) { if (toks[i++] !== '(') throw new Error('ev: ( attendue ' + tex); const v = expr(); if (toks[i++] !== ')') throw new Error('ev: ) attendue ' + tex); return (x) => F(v(x)); }
      throw new Error('ev: jeton ' + t + ' dans ' + tex);
    };
    const f = expr();
    if (i !== toks.length) throw new Error('ev: reste non lu dans ' + tex);
    return f;
  };
  const fin = (v) => Number.isFinite(v) && Math.abs(v) < 1e9;
  const d1 = (f, x, h = 1e-4) => (-f(x + 2 * h) + 8 * f(x + h) - 8 * f(x - h) + f(x - 2 * h)) / (12 * h);
  const d2 = (f, x, h = 1e-3) => (-f(x + 2 * h) + 16 * f(x + h) - 30 * f(x) + 16 * f(x - h) - f(x - 2 * h)) / (12 * h * h);
  const close = (a, b, tol = 1e-5) => Math.abs(a - b) <= tol * Math.max(1, Math.abs(a), Math.abs(b));
  const PTS = []; for (let k = -120; k <= 120; k++) PTS.push(k * 0.137 + 0.0123);
  /** g ≈ dérivée (ordre 1 ou 2) de f sur les points de définition (au moins 4) */
  const sameDeriv = (f, g, order = 1) => {
    let n = 0;
    for (const x of PTS) {
      const vals = [-2, -1, 0, 1, 2].map((k) => f(x + k * 1e-3));
      if (!vals.every(fin)) continue;
      const num = order === 1 ? d1(f, x) : d2(f, x);
      const num2 = order === 1 ? d1(f, x, 5e-5) : d2(f, x, 5e-4);
      const gv = g(x);
      if (!fin(num) || !fin(gv) || !close(num, num2, 1e-7)) continue; // zone numériquement instable : ignorée
      if (!close(num, gv, order === 1 ? 1e-5 : 1e-4)) return `écart en x = ${x.toFixed(4)} : ${gv} au lieu de ${num}`;
      n++;
    }
    return n >= 4 || 'trop peu de points de contrôle';
  };

  const fOf = (s) => ev(s.match(/\$f\(x\) = (.*?)\$/)[1]);
  const rhs = (a) => a.replace(/^\$/, '').replace(/\$$/, '').replace(/^[^=]*= /, '');
  const iv = (a) => {
    let m;
    if ((m = a.match(/^\$\[(.*) ; \+\\infty\[\$$/))) return { lo: V.val(m[1]) || ev(m[1])(0), right: true };
    if ((m = a.match(/^\$\]-\\infty ; (.*)\]\$$/))) return { hi: ev(m[1])(0), right: false };
    return null;
  };
  /** la fonction (dérivée d'ordre `order` de f) est >= 0 exactement sur l'intervalle de la réponse */
  const signOn = (f, ans, order) => {
    const I = iv(ans);
    if (!I) return 'intervalle illisible ' + ans;
    const c = I.right ? I.lo : I.hi;
    for (const dx of [0.05, 0.4, 1.5, 3]) {
      const inside = I.right ? c + dx : c - dx; const outside = I.right ? c - dx : c + dx;
      const di = order === 1 ? d1(f, inside) : d2(f, inside); const de = order === 1 ? d1(f, outside) : d2(f, outside);
      if (!(di > 0) || !(de < 0)) return `signe incorrect autour de ${c}`;
    }
    return true;
  };
  const R = {};
  R['TA8/1'] = (q) => sameDeriv(fOf(q.statement), ev(rhs(q.answer)), 1);
  R['TA8/2'] = R['TA8/1'];
  R['TA8/3'] = (q) => {
    const f = fOf(q.statement);
    const m = q.answer.match(/^\$f''\((-?\d+)\) = (-?\d+)\$$/);
    if (m) return close(d2(f, +m[1]), +m[2], 1e-5) || `f''(${m[1]}) attendu ${d2(f, +m[1])}`;
    return sameDeriv(f, ev(rhs(q.answer)), 2);
  };
  R['TA8/4'] = (q) => {
    const f = fOf(q.statement);
    if (/tangente/.test(q.statement)) {
      const x0 = +q.statement.match(/abscisse \$(-?\d+)\$/)[1];
      const t = ev(rhs(q.answer));
      const y0 = f(x0); const m = d1(f, x0);
      return (close(t(x0), y0) && close(t(x0 + 1) - t(x0), m)) || 'tangente fausse';
    }
    if (/dérivée \$f'\$ est-elle croissante/.test(q.statement)) return signOn(f, q.answer, 2);
    return signOn(f, q.answer, 1);
  };
  return R;
})(V));
}
// ---- recalculs TA9 ----
{
Object.assign(VERIFIERS, ((V) => {
  // Recalculs indépendants — TA9 (sinus et cosinus) : évaluation numérique, résolution par arcsin / arccos
  // Évaluateur indépendant d'expressions LaTeX en x : \frac, \sqrt, e^{…}, \ln, \sin, \cos, \pi, puissances, produits implicites
  const ev = (tex) => {
    let s = String(tex).replace(/\\left|\\right|\\,|\\!/g, '').replace(/\\[dt]frac/g, '\\frac').replace(/\{,\}/g, '.').replace(/\s+/g, '');
    let prev;
    do {
      prev = s;
      s = s.replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '(($1)/($2))').replace(/\\sqrt\{([^{}]*)\}/g, 'S($1)')
        .replace(/e\^\{([^{}]*)\}/g, 'E($1)').replace(/\^\{([^{}]*)\}/g, '^($1)');
    } while (s !== prev);
    s = s.replace(/\\sin/g, 'N').replace(/\\cos/g, 'C').replace(/\\ln/g, 'L').replace(/\\pi/g, 'P').replace(/\\times|\\cdot/g, '*');
    const toks = s.match(/\d+(?:\.\d+)?|[xPeSENCL]|[+\-*/^()]/g) || [];
    if (toks.join('') !== s) throw new Error('ev: jeton inconnu dans ' + tex + ' -> ' + s);
    let i = 0;
    const peek = () => toks[i];
    const expr = () => {
      let v = term();
      while (peek() === '+' || peek() === '-') { const o = toks[i++]; const r = term(); const l = v; v = o === '+' ? (x) => l(x) + r(x) : (x) => l(x) - r(x); }
      return v;
    };
    const term = () => {
      let v = unary();
      for (;;) {
        const t = peek();
        if (t === '*' || t === '/') { i++; const r = unary(); const l = v; v = t === '*' ? (x) => l(x) * r(x) : (x) => l(x) / r(x); } else if (t !== undefined && /^[\d(xPeSENCL]/.test(t)) { const r = power(); const l = v; v = (x) => l(x) * r(x); } else break;
      }
      return v;
    };
    const unary = () => {
      if (peek() === '-') { i++; const u = unary(); return (x) => -u(x); }
      return power();
    };
    const power = () => {
      const b = primary();
      if (peek() === '^') { i++; const e = unary(); return (x) => Math.pow(b(x), e(x)); }
      return b;
    };
    const primary = () => {
      const t = toks[i++];
      if (t === undefined) throw new Error('ev: fin inattendue ' + tex);
      if (/^\d/.test(t)) { const c = +t; return () => c; }
      if (t === 'x') return (x) => x;
      if (t === 'P') return () => Math.PI;
      if (t === 'e') return () => Math.E;
      if (t === '(') { const v = expr(); if (toks[i++] !== ')') throw new Error('ev: ) attendue ' + tex); return v; }
      const F = { S: Math.sqrt, E: Math.exp, N: Math.sin, C: Math.cos, L: Math.log }[t];
      if (F) { if (toks[i++] !== '(') throw new Error('ev: ( attendue ' + tex); const v = expr(); if (toks[i++] !== ')') throw new Error('ev: ) attendue ' + tex); return (x) => F(v(x)); }
      throw new Error('ev: jeton ' + t + ' dans ' + tex);
    };
    const f = expr();
    if (i !== toks.length) throw new Error('ev: reste non lu dans ' + tex);
    return f;
  };
  const fin = (v) => Number.isFinite(v) && Math.abs(v) < 1e9;
  const d1 = (f, x, h = 1e-4) => (-f(x + 2 * h) + 8 * f(x + h) - 8 * f(x - h) + f(x - 2 * h)) / (12 * h);
  const d2 = (f, x, h = 1e-3) => (-f(x + 2 * h) + 16 * f(x + h) - 30 * f(x) + 16 * f(x - h) - f(x - 2 * h)) / (12 * h * h);
  const close = (a, b, tol = 1e-5) => Math.abs(a - b) <= tol * Math.max(1, Math.abs(a), Math.abs(b));
  const PTS = []; for (let k = -120; k <= 120; k++) PTS.push(k * 0.137 + 0.0123);
  /** g ≈ dérivée (ordre 1 ou 2) de f sur les points de définition (au moins 4) */
  const sameDeriv = (f, g, order = 1) => {
    let n = 0;
    for (const x of PTS) {
      const vals = [-2, -1, 0, 1, 2].map((k) => f(x + k * 1e-3));
      if (!vals.every(fin)) continue;
      const num = order === 1 ? d1(f, x) : d2(f, x);
      const num2 = order === 1 ? d1(f, x, 5e-5) : d2(f, x, 5e-4);
      const gv = g(x);
      if (!fin(num) || !fin(gv) || !close(num, num2, 1e-7)) continue; // zone numériquement instable : ignorée
      if (!close(num, gv, order === 1 ? 1e-5 : 1e-4)) return `écart en x = ${x.toFixed(4)} : ${gv} au lieu de ${num}`;
      n++;
    }
    return n >= 4 || 'trop peu de points de contrôle';
  };

  const rhs = (a) => a.replace(/^\$/, '').replace(/\$$/, '').replace(/^[^=]*= /, '');
  const fOf = (s) => ev(s.match(/\$f\(x\) = (.*?)\$/)[1]);
  const num = (t) => ev(t)(0);
  const ivOf = (tex) => {
    const t = tex.replace(/\\left|\\right/g, '').trim();
    const m = t.match(/^([\[\]])(.*) ; (.*)([\[\]])$/);
    return { lo: num(m[2]), hi: num(m[3]), lc: m[1] === '[', rc: m[4] === ']' };
  };
  const inIv = (x, I, eps = 1e-9) => (I.lc ? x >= I.lo - eps : x > I.lo + eps) && (I.rc ? x <= I.hi + eps : x < I.hi - eps);
  /** Ensemble-réponse : { pts: [...] } (ensemble fini) ou { ivs: [...] } (réunion d'intervalles) */
  const setOf = (ans) => {
    const s = rhs(ans).trim();
    if (s === '\\emptyset') return { pts: [] };
    let m;
    if ((m = s.match(/^\\left\\\{(.*)\\right\\\}$/))) return { pts: m[1].split(' ; ').map(num) };
    return { ivs: s.split(' \\cup ').map(ivOf) };
  };
  const sameSetPred = (pred, S, I) => {
    const xs = [];
    for (let k = 0; k <= 960; k++) xs.push(I.lo + (I.hi - I.lo) * k / 960);
    for (const J of S.ivs) for (const b of [J.lo, J.hi]) xs.push(b, b - 1e-6, b + 1e-6);
    const ends = [I.lo, I.hi]; for (const J of S.ivs) ends.push(J.lo, J.hi);
    for (const x of xs) {
      if (!inIv(x, I, 0)) continue;
      const dmin = Math.min(...ends.map((b) => Math.abs(x - b)));
      if (dmin > 0 && dmin < 1e-7) continue; // trop près d'une borne : seuls les tests exacts aux bornes comptent
      const inS = S.ivs.some((J) => inIv(x, J));
      if (inS !== pred(x)) return `désaccord en x = ${x}`;
    }
    for (const J of S.ivs) if (!inIv(J.lo, I) && J.lc) return 'borne hors de I';
    return true;
  };
  const OPS = { '\\ge': (a, b) => a >= b - 1e-9, '\\le': (a, b) => a <= b + 1e-9, '>': (a, b) => a > b + 1e-9, '<': (a, b) => a < b - 1e-9 };
  const R = {};
  R['TA9/1'] = (q) => {
    const f = fOf(q.statement);
    if (/Parité/.test(q.title)) {
      const xs = [0.3, 0.71, 1.2, 1.9, 2.6, 3.3];
      const even = xs.every((x) => Math.abs(f(-x) - f(x)) < 1e-9); const odd = xs.every((x) => Math.abs(f(-x) + f(x)) < 1e-9);
      const lab = even && odd ? 'à la fois' : even ? 'est paire' : odd ? 'est impaire' : 'ni paire ni impaire';
      return q.answer.includes(lab) || 'parité fausse';
    }
    if (/Période/.test(q.title)) {
      const T = num(rhs(q.answer));
      const per = (t) => [0.1, 0.5, 1.3, 2.2, -0.7].every((x) => Math.abs(f(x + t) - f(x)) < 1e-9);
      if (!per(T)) return 'T n\'est pas une période';
      for (let k = 2; k <= 12; k++) if (per(T / k)) return 'période non minimale';
      return true;
    }
    return sameDeriv(f, ev(rhs(q.answer)), 1);
  };
  R['TA9/2'] = (q) => {
    if (/Équation/.test(q.title)) return eqCheck(q);
    return sameDeriv(fOf(q.statement), ev(rhs(q.answer)), 1);
  };
  const eqCheck = (q) => {
    const m = q.statement.match(/I = (.*?)\$ l'équation \$\\(sin|cos)\(x\) = (.*?)\$/);
    const I = ivOf(m[1]); const v = num(m[3]);
    const base = m[2] === 'sin' ? [Math.asin(v), Math.PI - Math.asin(v)] : [Math.acos(v), -Math.acos(v)];
    const sols = [];
    for (let k = -4; k <= 4; k++) for (const b of base) { const x = b + 2 * k * Math.PI; if (inIv(x, I) && !sols.some((y) => Math.abs(y - x) < 1e-9)) sols.push(x); }
    sols.sort((a, b) => a - b);
    const S = setOf(q.answer);
    if (!S.pts) return 'ensemble fini attendu';
    const got = S.pts.slice().sort((a, b) => a - b);
    return (got.length === sols.length && got.every((x, i) => Math.abs(x - sols[i]) < 1e-9)) || `solutions attendues ${sols.map((x) => (x / Math.PI).toFixed(4) + 'π')}`;
  };
  R['TA9/3'] = (q) => {
    if (/Équation/.test(q.title)) return eqCheck(q);
    if (/Limite/.test(q.title)) {
      const g = ev(q.statement.match(/\\lim_\{x \\to 0\} (.*?)\$/)[1]);
      const l = num(rhs(q.answer));
      return (Math.abs(g(1e-6) - l) < 1e-6 && Math.abs(g(-1e-6) - l) < 1e-6) || 'limite fausse';
    }
    return sameDeriv(fOf(q.statement), ev(rhs(q.answer)), 1);
  };
  R['TA9/4'] = (q) => {
    const S = setOf(q.answer);
    if (!S.ivs) return 'réunion d\'intervalles attendue';
    const I = ivOf(q.statement.match(/I = (.*?)\$/)[1]);
    if (/Inéquation/.test(q.title)) {
      const m = q.statement.match(/l'inéquation \$\\(sin|cos)\(x\) (\\ge|\\le|>|<) (.*?)\$/);
      const fn = m[1] === 'sin' ? Math.sin : Math.cos; const v = num(m[3]); const op = OPS[m[2]];
      return sameSetPred((x) => op(fn(x), v), S, I);
    }
    const f = fOf(q.statement);
    return sameSetPred((x) => d1(f, x) >= -1e-7, S, I);
  };
  return R;
})(V));
}
// ---- recalculs TS3 ----
{
Object.assign(VERIFIERS, ((V) => {
  // Recalculs indépendants — TS3 (dénombrement)
  const fact = (n) => (n <= 1 ? 1 : n * fact(n - 1));
  const C = (n, k) => (k < 0 || k > n ? 0 : Math.round(fact(n) / (fact(k) * fact(n - k))));
  const A = (n, k) => Math.round(fact(n) / fact(n - k));
  const Nval = (q) => { const m = String(q.answer).match(/^\$N = ([\d\\,]+)\$$/); return m ? +m[1].replace(/\\,/g, '') : NaN; };
  const ints = (s) => [...String(s).replace(/\$N\$/g, '').matchAll(/\d+/g)].map((m) => +m[0]);
  const chk = (q, v) => Nval(q) === v || `N attendu ${v}, obtenu ${q.answer}`;
  const frac = (q, num, den) => {
    const m = String(q.answer).match(/^\$\\frac\{(\d+)\}\{(\d+)\}\$$/);
    if (!m) return 'fraction illisible ' + q.answer;
    return (+m[1] * den === +m[2] * num && V.gcd(+m[1], +m[2]) === 1) || `probabilité attendue ${num}/${den}`;
  };
  const R = {};
  R['TS3/1'] = (q) => {
    const [n, k] = ints(q.statement);
    if (/k-uplets/.test(q.title)) return chk(q, n ** k);
    if (/Permutations/.test(q.title)) return chk(q, fact(n));
    if (/Arrangements/.test(q.title)) return chk(q, A(n, k));
    if (/Combinaisons/.test(q.title)) return chk(q, C(n, k));
    return 'famille TS3/1 inconnue';
  };
  R['TS3/2'] = (q) => {
    const s = q.statement;
    if (/Anagrammes/.test(q.title)) {
      const w = s.match(/« ([A-Z]+) »/)[1];
      const cnt = {};
      for (const c of w) cnt[c] = (cnt[c] || 0) + 1;
      return chk(q, Object.values(cnt).reduce((v, m) => v / fact(m), fact(w.length)));
    }
    if (/urne/.test(q.title)) {
      const n = +s.match(/contient (\d+) boules/)[1]; const k = +s.match(/remise (\d+) boules|simultanément (\d+) boules/).slice(1).find(Boolean);
      if (/avec remise/.test(s)) return chk(q, n ** k);
      if (/sans remise/.test(s)) return chk(q, A(n, k));
      return chk(q, C(n, k));
    }
    if (/Pascal/.test(q.title)) {
      const m = s.match(/N = \\binom\{(\d+)\}\{(\d+)\}/);
      const given = [...s.matchAll(/\\binom\{(\d+)\}\{(\d+)\} = ([\d\\,]+)\$/g)];
      for (const g of given) if (C(+g[1], +g[2]) !== +g[3].replace(/\\,/g, '')) return 'donnée de l\'énoncé fausse';
      return chk(q, C(+m[1], +m[2]));
    }
    if (/Parties/.test(q.title)) {
      const n = +s.match(/possède (\d+) éléments/)[1];
      if (/non vides/.test(s)) return chk(q, 2 ** n - 1);
      const m = s.match(/parties de \$E\$ à (\d+) éléments/);
      if (m) return chk(q, C(n, +m[1]));
      return chk(q, 2 ** n);
    }
    return 'famille TS3/2 inconnue';
  };
  R['TS3/3'] = (q) => {
    const s = q.statement;
    if (/Délégation/.test(q.title)) {
      const f = +s.match(/(\d+) filles/)[1]; const g = +s.match(/(\d+) garçons/)[1]; const k = +s.match(/délégation de (\d+)/)[1];
      let cnt = 0;
      // énumération brute : nombre de filles i de la délégation
      for (let i = 0; i <= k; i++) {
        const ok = /au moins une/.test(s) ? i >= 1 : /au plus une/.test(s) ? i <= 1 : i === +s.match(/exactement (\d+) fille/)[1];
        if (ok) cnt += C(f, i) * C(g, k - i);
      }
      return chk(q, cnt);
    }
    if (/cartes/.test(q.title)) {
      const [D, a, k, i] = ints(s);
      return chk(q, C(a, i) * C(D - a, k - i));
    }
    if (/Codes/.test(q.title)) {
      const l = +s.match(/formé de (\d+) lettre/)[1]; const c = +s.match(/de (\d+) chiffre/)[1];
      return chk(q, (/deux à deux distinctes/.test(s) ? A(26, l) : 26 ** l) * 10 ** c);
    }
    if (/chiffres/.test(q.title)) {
      const k = +s.match(/exactement (\d+) chiffres/)[1];
      let cnt = 0;
      if (k <= 5) {
        for (let x = 10 ** (k - 1); x < 10 ** k; x++) if (!/distincts/.test(s) || new Set(String(x)).size === k) cnt++;
      } else cnt = /distincts/.test(s) ? 9 * A(9, k - 1) : 9 * 10 ** (k - 1);
      return chk(q, cnt);
    }
    return 'famille TS3/3 inconnue';
  };
  R['TS3/4'] = (q) => {
    const s = q.statement;
    if (/Probabilité par/.test(q.title)) {
      const [D, a, k, i] = ints(s);
      return frac(q, C(a, i) * C(D - a, k - i), C(D, k));
    }
    if (/quadrillage/.test(q.title)) {
      const m = s.match(/B\((\d+) ; (\d+)\)/);
      // dénombrement récursif des chemins
      const a = +m[1]; const b = +m[2];
      const T = Array.from({ length: a + 1 }, () => Array(b + 1).fill(1));
      for (let x = 1; x <= a; x++) for (let y = 1; y <= b; y++) T[x][y] = T[x - 1][y] + T[x][y - 1];
      return chk(q, T[a][b]);
    }
    if (/Diagonales/.test(q.title)) { const n = ints(s)[0]; return chk(q, C(n, 2) - n); }
    if (/Poignées/.test(q.title)) { const n = ints(s)[0]; return chk(q, n * (n - 1) / 2); }
    if (/listes/.test(q.title)) {
      const [k, n] = ints(s);
      let fav = 0;
      for (let x = 0; x < n ** k; x++) { const d = []; let y = x; for (let j = 0; j < k; j++) { d.push(y % n); y = Math.floor(y / n); } if (new Set(d).size === k) fav++; }
      return frac(q, fav, n ** k);
    }
    if (/deux éléments/.test(q.title)) { const n = ints(s)[0]; return chk(q, 2 ** n - 1 - n); }
    return 'famille TS3/4 inconnue';
  };
  return R;
})(V));
}
// ---- recalculs TS4 ----
{
Object.assign(VERIFIERS, ((V) => {
  // Utilise l'interpréteur V.py défini avec les recalculs de 2S4 (résolu à l'appel).
  const runCheck = (q) => {
    const PY = V.py;
    const r = PY.run(PY.code(q.statement));
    const ok = PY.checkOut(q.answer, r.out);
    if (ok !== true) return ok;
    const dup = (q.options || []).find((o) => o !== q.answer && PY.checkOut(o, r.out) === true);
    return dup ? 'distracteur également correct : ' + dup : true;
  };
  /** Valeur d'une réponse pouvant contenir π : "$\frac{\pi}{4}$", "$2\pi$", "$1 - \frac{\pi}{4}$", "$\frac{8}{3}$" */
  const piVal = (s) => {
    let t = String(s).replace(/^\$|\$$/g, '').replace(/\s+/g, '');
    for (let k = 0; k < 3; k++) t = t.replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '(($1)/($2))');
    t = t.replace(/(\d)\\pi/g, '$1*P').replace(/\\pi/g, 'P');
    if (/[^0-9P+\-*/().]/.test(t)) return NaN;
    return Function('P', 'return ' + t)(Math.PI);
  };
  /** Monte-Carlo : proportion exacte (intégration numérique sur une grille fine) de la condition du programme. */
  const mcCheck = (q) => {
    const code = V.py.code(q.statement);
    const mx = code.match(/x = (?:(\d+) \* )?random\(\)/);
    const my = code.match(/y = (?:(\d+) \* )?random\(\)/);
    const mc = code.match(/if (.*):/);
    const mr = code.match(/return (?:(\d+) \* )?c \/ n/);
    if (!mx || !my || !mc || !mr) return 'gabarit Monte-Carlo non reconnu';
    const A = +(mx[1] || 1); const M = +(my[1] || 1); const K = +(mr[1] || 1);
    const cond = Function('x', 'y', 'return ' + mc[1].replace(/sqrt\(/g, 'Math.sqrt(') + ';');
    const G = 800; let c = 0;
    for (let i = 0; i < G; i++) for (let j = 0; j < G; j++) if (cond(A * (i + 0.5) / G, M * (j + 0.5) / G)) c++;
    const est = K * c / (G * G);
    const v = piVal(q.answer);
    if (!(Math.abs(v - est) < 0.01 * Math.max(1, Math.abs(est)))) return `valeur théorique ≈ ${est}, réponse ${q.answer}`;
    const dup = q.options.find((o) => o !== q.answer && Math.abs(piVal(o) - est) < 0.03 * Math.max(1, Math.abs(est)));
    return dup ? 'distracteur proche de la valeur théorique : ' + dup : true;
  };
  return { 'TS4/1': runCheck, 'TS4/2': runCheck, 'TS4/3': runCheck, 'TS4/4': mcCheck };
})(V));
}

// Vérificateurs prioritaires (familles ajoutées, saisies exactes natives) : clé 'CH/T' ou 'CH' ; une valeur
// undefined renvoyée signifie « famille non reconnue ici » et passe la main au vérificateur principal.
const PRE_VERIFIERS = {};
const addPre = (obj) => { for (const [k, f] of Object.entries(obj)) (PRE_VERIFIERS[k] = PRE_VERIFIERS[k] || []).push(f); };
// ==== PRE_VERIFIERS: blocs intégrés ====
// ---- vérificateurs prioritaires CAPES ----
{
// Recalculs indépendants — CAPES (gen_capes_01 … gen_capes_10). Chaque fonction relit l'énoncé.
addPre(( (V) => {
  const fact = (n) => (n <= 1 ? 1 : n * fact(n - 1));
  const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
  const close = (a, b) => Math.abs(a - b) < 1e-9 * Math.max(1, Math.abs(a), Math.abs(b));
  /** saisie attendue -> nombres */
  const vals = (q) => {
    const s = String(q.answer).replace(/\s+/g, '').replace(/^\(|\)$/g, '');
    return s.split(';').map((t) => { const m = t.match(/^(-?\d+)\/(\d+)$/); return m ? +m[1] / +m[2] : parseFloat(t.replace(',', '.')); });
  };
  const expect = (q, ...exp) => {
    const got = vals(q);
    if (got.length !== exp.length) return `n-uplet de longueur ${got.length}, attendu ${exp.length}`;
    return got.every((g, i) => close(g, exp[i])) || `attendu (${exp.join(' ; ')}), obtenu ${q.answer}`;
  };
  const st = (q) => String(q.statement);
  /** valeur LaTeX simple : "-\frac{3}{4}", "5" */
  const tv = (s) => { s = s.trim(); const m = s.match(/^(-?)\\frac\{(\d+)\}\{(\d+)\}$/); return m ? (m[1] ? -1 : 1) * m[2] / m[3] : +s; };
  /** coefficients de y'' , y' , y dans « y'' + 3y' - 2y » */
  const odeCoefs = (lhs) => {
    const t = lhs.replace(/\s+/g, '');
    const c = { 2: 0, 1: 0, 0: 0 };
    for (const m of t.matchAll(/([+-]?)(\d*)y('*)/g)) c[m[3].length] += (m[1] === '-' ? -1 : 1) * (m[2] === '' ? 1 : +m[2]);
    return c;
  };
  const R = {};
  R['capes-01'] = (q) => {
    const s = st(q);
    let m;
    if (/Solution constante de/.test(q.title)) {
      m = s.match(/\$(y' [^$]*) = (-?\d+)\$/);
      const c = odeCoefs(m[1]);
      return expect(q, +m[2] / c[0]);
    }
    if (/Équation caractéristique|complexes/.test(q.title)) {
      m = s.match(/\$(y''[^$]*) = 0\$/);
      const c = odeCoefs(m[1]);
      const D = c[1] * c[1] - 4 * c[0];
      if (/complexes/.test(q.title)) return expect(q, -c[1] / 2, Math.sqrt(-D) / 2);
      return expect(q, (-c[1] - Math.sqrt(D)) / 2, (-c[1] + Math.sqrt(D)) / 2);
    }
    if (/Solution particulière constante/.test(q.title)) {
      m = s.match(/\$(y''[^$]*) = (-?\d+)\$/);
      return expect(q, +m[2] / odeCoefs(m[1])[0]);
    }
    if (/Problème de Cauchy/.test(q.title)) {
      m = s.match(/\$(y''[^$]*) = 0\$ telle que \$y\(0\) = (-?\d+)\$ et \$y'\(0\) = (-?\d+)\$/);
      const c = odeCoefs(m[1]); const A = +m[2]; const B = +m[3];
      const ex = [...s.matchAll(/e\^\{(-?\d*)t\}/g)].map((x) => (x[1] === '' ? 1 : x[1] === '-' ? -1 : +x[1]));
      for (const r of ex) if (Math.abs(r * r + c[1] * r + c[0]) > 1e-9) return 'exposant non racine caractéristique';
      // vérification numérique : y(t) = C1 e^{r1 t} + C2 e^{r2 t}
      const [C1, C2] = vals(q);
      return (close(C1 + C2, A) && close(ex[0] * C1 + ex[1] * C2, B)) || 'conditions initiales non vérifiées';
    }
    if (/Résonance/.test(q.title)) {
      m = s.match(/y'' \+ (\d*)y = (-?\d+)\\cos\((\d*)t\)/);
      const w2 = m[1] === '' ? 1 : +m[1]; const c = +m[2]; const w = m[3] === '' ? 1 : +m[3];
      if (w * w !== w2) return 'pas de résonance';
      // y = k t sin(wt) : y'' = k(2w cos - w^2 t sin) ; test numérique en t = 0,7
      const k = vals(q)[0]; const t = 0.7;
      const y = k * t * Math.sin(w * t); const ypp = k * (2 * w * Math.cos(w * t) - w * w * t * Math.sin(w * t));
      return close(ypp + w2 * y, c * Math.cos(w * t)) || 'équation non vérifiée';
    }
    if (/hors résonance/.test(q.title)) {
      m = s.match(/y'' \+ (\d*)y = (-?\d+)\\cos\((\d*)t\)/);
      const w2 = m[1] === '' ? 1 : +m[1]; const c = +m[2]; const W = m[3] === '' ? 1 : +m[3];
      const A = vals(q)[0]; const t = 0.4;
      return close(-W * W * A * Math.cos(W * t) + w2 * A * Math.cos(W * t), c * Math.cos(W * t)) || 'équation non vérifiée';
    }
    return undefined;
  };
  const mat2 = (s) => { const m = s.match(/\\begin\{pmatrix\} (-?\d+) & (-?\d+) \\\\ (-?\d+) & (-?\d+) \\end\{pmatrix\}/); return m.slice(1, 5).map(Number); };
  const mul2 = (A, B) => [A[0] * B[0] + A[1] * B[2], A[0] * B[1] + A[1] * B[3], A[2] * B[0] + A[3] * B[2], A[2] * B[1] + A[3] * B[3]];
  R['capes-02'] = (q) => {
    const s = st(q);
    if (/Valeurs propres/.test(q.title)) {
      const A = mat2(s);
      const [l1, l2] = vals(q);
      const det = (l) => (A[0] - l) * (A[3] - l) - A[1] * A[2];
      return (l1 < l2 && close(det(l1), 0) && close(det(l2), 0)) || 'pas des valeurs propres';
    }
    if (/Vecteur propre/.test(q.title)) {
      const A = mat2(s); const l = +s.match(/valeur propre \$(-?\d+)\$/)[1]; const y = vals(q)[0];
      return (close(A[0] + A[1] * y, l) && close(A[2] + A[3] * y, l * y)) || 'AX ≠ λX';
    }
    if (/Trace d'une puissance/.test(q.title)) {
      const A = mat2(s); const n = +s.match(/A\^\{(\d+)\}/)[1];
      let P = [1, 0, 0, 1];
      for (let k = 0; k < n; k++) P = mul2(P, A);
      return expect(q, P[0] + P[3]);
    }
    if (/Cayley-Hamilton|Polynôme annulateur/.test(q.title)) {
      const A = mat2(s); const A3 = mul2(A, mul2(A, A)); const [al, be] = vals(q);
      return [0, 1, 2, 3].every((i) => close(A3[i], al * A[i] + be * (i === 0 || i === 3 ? 1 : 0))) || 'A^3 ≠ αA + βI';
    }
    if (/sous-espace propre/.test(q.title)) {
      const m = s.match(/\\begin\{pmatrix\} (-?\d+) & (-?\d+) & (-?\d+) \\\\ 0 & (-?\d+) & (-?\d+) \\\\ 0 & 0 & (-?\d+) \\end\{pmatrix\}/);
      const [l, x, y, l2, z, mu] = m.slice(1).map(Number);
      const lam = +s.match(/E_\{(-?\d+)\}/)[1];
      // rang de A - lam I par élimination
      const M = [[l - lam, x, y], [0, l2 - lam, z], [0, 0, mu - lam]];
      let r = 0; const rows = M.map((row) => row.slice());
      for (let c = 0; c < 3 && r < 3; c++) {
        const p = rows.findIndex((row, i) => i >= r && Math.abs(row[c]) > 1e-12);
        if (p < 0) continue;
        [rows[r], rows[p]] = [rows[p], rows[r]];
        for (let i = 0; i < 3; i++) if (i !== r) { const f = rows[i][c] / rows[r][c]; for (let j = 0; j < 3; j++) rows[i][j] -= f * rows[r][j]; }
        r++;
      }
      return expect(q, 3 - r);
    }
    return undefined;
  };
  R['capes-03'] = (q) => {
    const s = st(q);
    const integ = (f, a, b, N = 4000) => { let S = 0; const h = (b - a) / N; for (let i = 0; i < N; i++) S += f(a + (i + 0.5) * h); return S * h; };
    if (/Parseval pour un polynôme/.test(q.title)) {
      const m = s.match(/f\(x\) = (.*?)\$/)[1];
      let a = 0; let b = 0; let c = 0; let p = 1; let qq = 1;
      for (const t of m.replace(/\s+/g, '').matchAll(/([+-]?)(\d*)(\\cos\((\d*)x\)|\\sin\((\d*)x\))?/g)) {
        if (!t[0]) continue;
        const v = (t[1] === '-' ? -1 : 1) * (t[2] === '' ? 1 : +t[2]);
        if (!t[3]) a = v; else if (t[3].startsWith('\\cos')) { b = v; p = t[4] === '' ? 1 : +t[4]; } else { c = v; qq = t[5] === '' ? 1 : +t[5]; }
      }
      const f = (x) => a + b * Math.cos(p * x) + c * Math.sin(qq * x);
      const I = integ((x) => f(x) ** 2, -Math.PI, Math.PI) / (2 * Math.PI);
      return Math.abs(I - vals(q)[0]) < 1e-6 || `intégrale numérique ${I}`;
    }
    if (/dents de scie/.test(q.title)) {
      const al = s.match(/f\(x\) = (-?\d*)x\$/)[1]; const a = al === '' ? 1 : al === '-' ? -1 : +al;
      const n = +s.match(/b_\{(\d+)\}/)[1];
      const I = integ((x) => a * x * Math.sin(n * x), -Math.PI, Math.PI) / Math.PI;
      return Math.abs(I - vals(q)[0]) < 1e-5 || `intégrale numérique ${I}`;
    }
    if (/de \$x\^2\$/.test(q.title)) {
      const bt = s.match(/f\(x\) = (-?\d*)x\^2\$/)[1]; const b = bt === '' ? 1 : bt === '-' ? -1 : +bt;
      const n = +s.match(/a_\{(\d+)\}/)[1];
      const I = integ((x) => b * x * x * Math.cos(n * x), -Math.PI, Math.PI) / Math.PI;
      return Math.abs(I - vals(q)[0]) < 1e-5 || `intégrale numérique ${I}`;
    }
    if (/Somme d'une série par les séries de Fourier/.test(q.title)) {
      const m = s.match(/\\sum_\{n \\ge (\d)\} \\frac\{(\d*)(.*?) = r\\,\\pi\^\{(\d)\}/);
      const n0 = +m[1]; const body = m[3]; const k = m[2] === '' ? 1 : /^\(-1\)/.test(body) || body.startsWith('}') ? +m[2] || 1 : 1;
      const alt = /\(-1\)\^\{n\+1\}/.test(body); const odd = /2n\+1/.test(body); const e = +body.match(/\^(\d)\}$/)[1];
      const num = (n) => (alt ? (n % 2 ? 1 : -1) : 1);
      const den = (n) => (odd ? 2 * n + 1 : n) ** e;
      let S = 0;
      for (let n = n0; n < 2e5; n++) S += num(n) / den(n);
      m[5] = m[4];
      const r = vals(q)[0] * Math.PI ** +m[5];
      return Math.abs(k * S - r) < 1e-4 || `somme numérique ${k * S}, r π^p = ${r}`;
    }
    return undefined;
  };
  R['capes-04'] = (q) => {
    const s = st(q);
    let m;
    if ((m = s.match(/binomiale \$\\mathcal\{B\}\\left\((\d+) ; \\frac\{(\d+)\}\{(\d+)\}\\right\)\$\. Calculer \$(E|V)/))) {
      const n = +m[1]; const p = m[2] / m[3];
      // calcul par la loi
      const C = (N, K) => fact(N) / (fact(K) * fact(N - K));
      let E = 0; let E2 = 0;
      for (let k = 0; k <= n; k++) { const pk = C(n, k) * p ** k * (1 - p) ** (n - k); E += k * pk; E2 += k * k * pk; }
      return Math.abs((m[4] === 'E' ? E : E2 - E * E) - vals(q)[0]) < 1e-6 || 'valeur fausse';
    }
    if ((m = s.match(/géométrique de paramètre \$p = \\frac\{1\}\{(\d+)\}\$.*?(P\(X > (\d+)\)|E\(X\)|V\(X\))/))) {
      const p = 1 / +m[1];
      let E = 0; let E2 = 0; let tail = 0;
      for (let k = 1; k < 4000; k++) { const pk = (1 - p) ** (k - 1) * p; E += k * pk; E2 += k * k * pk; if (m[3] && k > +m[3]) tail += pk; }
      const v = m[3] ? tail : m[2] === 'E(X)' ? E : E2 - E * E;
      return Math.abs(v - vals(q)[0]) < 1e-6 || `valeur ${v}`;
    }
    if ((m = s.match(/Poisson de paramètre \$\\lambda = (\\frac\{\d+\}\{\d+\}|\d+)\$/))) {
      const lam = tv(m[1]);
      let E1 = 0; let E2 = 0; let E3f = 0; let pk = Math.exp(-lam);
      for (let k = 0; k < 200; k++) { if (k > 0) pk *= lam / k; E1 += k * pk; E2 += k * k * pk; E3f += k * (k - 1) * (k - 2) * pk; }
      let v;
      if (/E\(X\^2\)/.test(s)) v = E2;
      else if (/X\(X-1\)\(X-2\)/.test(s)) v = E3f;
      else { const mm = s.match(/Calculer \$V\((-?\d*)X/); const c = mm[1] === '' ? 1 : mm[1] === '-' ? -1 : +mm[1]; v = c * c * (E2 - E1 * E1); }
      return Math.abs(v - vals(q)[0]) < 1e-6 || `valeur ${v}`;
    }
    if ((m = s.match(/comporte \$(\d+)\$ vignettes/))) {
      // espérance par chaîne de Markov : E_k = 1 + (k/n) E_k + ((n-k)/n) E_{k+1}
      const n = +m[1]; let E = 0;
      for (let k = n - 1; k >= 0; k--) E = (1 + ((n - k) / n) * E) / ((n - k) / n);
      return Math.abs(E - vals(q)[0]) < 1e-9 || `valeur ${E}`;
    }
    if (/Bienaymé-Tchebychev/.test(q.title)) {
      m = s.match(/\\ge \\frac\{1\}\{(\d+)\}\) \\le \\frac\{1\}\{(\d+)\}\$/);
      const eps = 1 / +m[1]; const al = 1 / +m[2];
      let n = 1; while (1 / (4 * n * eps * eps) > al + 1e-12) n++;
      return expect(q, n);
    }
    return undefined;
  };
  const vec = (s, name) => { const m = s.match(new RegExp(name + ' = \\((-?\\d+) ; (-?\\d+) ; (-?\\d+)\\)')); return m.slice(1).map(Number); };
  const dot = (a, b) => a.reduce((x, y, i) => x + y * b[i], 0);
  R['capes-05'] = (q) => {
    const s = st(q);
    if (/sur une droite/.test(q.title)) {
      const u = vec(s, 'u'); const v = vec(s, 'v'); const p = vals(q);
      // p colinéaire à v et u - p orthogonal à v
      const r = u.map((x, i) => x - p[i]);
      const col = Math.abs(p[0] * v[1] - p[1] * v[0]) + Math.abs(p[1] * v[2] - p[2] * v[1]) + Math.abs(p[0] * v[2] - p[2] * v[0]);
      return (col < 1e-9 && Math.abs(dot(r, v)) < 1e-9) || 'pas le projeté';
    }
    if (/hyperplan/.test(q.title)) {
      const u = vec(s, 'u'); const v = vec(s, 'v');
      // minimisation numérique de |u - x|^2 sur H : u - x = t v
      const t = dot(u, v) / dot(v, v);
      const d2 = dot(v, v) * t * t;
      return Math.abs(d2 - vals(q)[0]) < 1e-9 || `d² = ${d2}`;
    }
    if (/Gram-Schmidt/.test(q.title)) {
      const v1 = vec(s, 'v_1'); const v2 = vec(s, 'v_2'); const w = vals(q);
      const diff = w.map((x, i) => x - v2[i]);
      const col = Math.abs(diff[0] * v1[1] - diff[1] * v1[0]) + Math.abs(diff[1] * v1[2] - diff[2] * v1[1]) + Math.abs(diff[0] * v1[2] - diff[2] * v1[0]);
      return (Math.abs(dot(w, v1)) < 1e-9 && col < 1e-9) || 'w2 non orthogonal ou hors de Vect(v1, v2)';
    }
    if (/approximation affine/.test(q.title)) {
      const m = s.match(/f\(t\) = (-?\d*)t\^\{(\d+)\}/); const c = m[1] === '' ? 1 : m[1] === '-' ? -1 : +m[1]; const k = +m[2];
      const [a, b] = vals(q);
      // conditions d'orthogonalité par intégration numérique
      const N = 20000; let I0 = 0; let I1 = 0;
      for (let i = 0; i < N; i++) { const t = (i + 0.5) / N; const r = c * t ** k - a * t - b; I0 += r / N; I1 += r * t / N; }
      return (Math.abs(I0) < 1e-6 && Math.abs(I1) < 1e-6) || 'f - p non orthogonal aux fonctions affines';
    }
    return undefined;
  };
  R['capes-06'] = (q) => {
    const s = st(q);
    const integ = (f, a, b, N = 200000) => { let S = 0; const h = (b - a) / N; for (let i = 0; i < N; i++) S += f(a + (i + 0.5) * h); return S * h; };
    let m;
    if (/somme de Riemann/.test(q.title)) {
      const n = 20000; let S = 0;
      if ((m = s.match(/\\sum_\{k=1\}\^\{n\} (-?)\\frac\{(\d*)k\^\{(\d+)\}\}\{n\^\{(\d+)\}\}/))) {
        const c = (m[1] ? -1 : 1) * (m[2] === '' ? 1 : +m[2]); const p = +m[3];
        for (let k = 1; k <= n; k++) S += c * k ** p / n ** (p + 1);
      } else {
        m = s.match(/\\sum_\{k=1\}\^\{n\} (-?\d*)\\left\(1 \+ \\frac\{k\}\{n\}\\right\)\^\{(\d+)\}/);
        const c = m[1] === '' ? 1 : m[1] === '-' ? -1 : +m[1]; const p = +m[2];
        for (let k = 1; k <= n; k++) S += c * (1 + k / n) ** p / n;
      }
      return Math.abs(S - vals(q)[0]) < 2e-3 * Math.max(1, Math.abs(S)) || `somme numérique ${S}`;
    }
    if ((m = s.match(/I = \\int_0\^1 t(?:\^\{(\d+)\})?\(1 - t\)(?:\^\{(\d+)\})?\\,dt/))) {
      const a = m[1] ? +m[1] : 1; const b = m[2] ? +m[2] : 1;
      const I = integ((t) => t ** a * (1 - t) ** b, 0, 1);
      return Math.abs(I - vals(q)[0]) < 1e-9 || `intégrale ${I}`;
    }
    if ((m = s.match(/\\int_0\^1 t(?:\^\{(\d+)\})?(?:\\ln t|\(\\ln t\)\^\{(\d+)\})\\,dt/))) {
      const a = m[1] ? +m[1] : 1; const k = m[2] ? +m[2] : 1;
      const I = integ((t) => t ** a * Math.log(t) ** k, 0, 1);
      return Math.abs(I - vals(q)[0]) < 1e-6 || `intégrale ${I}`;
    }
    if ((m = s.match(/\\int_0\^\{\+\\infty\} t(?:\^\{(\d+)\})?e\^\{-(\d*)t\}/))) {
      const n = m[1] ? +m[1] : 1; const a = m[2] === '' ? 1 : +m[2];
      const I = integ((t) => t ** n * Math.exp(-a * t), 0, 80 / a, 400000);
      return Math.abs(I - vals(q)[0]) < 1e-6 * Math.max(1, I) || `intégrale ${I}`;
    }
    return undefined;
  };
  const permOf = (s) => { const m = s.match(/\\begin\{pmatrix\} [\d &]+ \\\\ ([\d &]+) \\end\{pmatrix\}/); return m[1].split('&').map((x) => +x.trim()); };
  R['capes-07'] = (q) => {
    const s = st(q);
    if (/Ordre d'une permutation/.test(q.title)) {
      const p = permOf(s); let k = 1; let cur = p.slice();
      while (!cur.every((x, i) => x === i + 1)) { cur = cur.map((x) => p[x - 1]); k++; }
      return expect(q, k);
    }
    if (/inversions/.test(q.title)) {
      const p = permOf(s); let n = 0;
      for (let i = 0; i < p.length; i++) for (let j = i + 1; j < p.length; j++) if (p[i] > p[j]) n++;
      return expect(q, n);
    }
    if (/Signature/.test(q.title)) {
      // signature par produit (p(j) - p(i)) / (j - i)
      const p = permOf(s); let num = 1; let den = 1;
      for (let i = 0; i < p.length; i++) for (let j = i + 1; j < p.length; j++) { num *= Math.sign(p[j] - p[i]); den *= 1; }
      return expect(q, num / den);
    }
    if (/cycles/.test(q.title) || /classe de conjugaison/.test(q.title)) {
      // énumération brute de S_n
      const n = +s.match(/\\mathcal\{S\}_\{(\d+)\}/)[1];
      let target;
      if (/Cardinal/.test(q.title)) target = s.match(/longueurs \$([\d, ]+)\$/)[1].split(',').map((x) => +x.trim());
      else target = [+s.match(/longueur \$(\d+)\$/)[1]];
      const key = target.slice().sort((a, b) => a - b).join(',');
      let cnt = 0;
      const p = [...Array(n).keys()];
      const rec = (k) => {
        if (k === n) {
          const seen = new Array(n).fill(false); const lens = [];
          for (let i = 0; i < n; i++) { if (seen[i]) continue; let l = 0; let j = i; while (!seen[j]) { seen[j] = true; j = p[j]; l++; } if (l > 1) lens.push(l); }
          if (lens.sort((a, b) => a - b).join(',') === key) cnt++;
          return;
        }
        for (let i = k; i < n; i++) { [p[k], p[i]] = [p[i], p[k]]; rec(k + 1); [p[k], p[i]] = [p[i], p[k]]; }
      };
      rec(0);
      return expect(q, cnt);
    }
    return undefined;
  };
  R['capes-08'] = (q) => {
    const s = st(q);
    if (/inflexion/.test(q.title)) {
      const m = s.match(/f\(x\) = x\^3 ([+-]) (\d*)x\^2/);
      const a = (m[1] === '-' ? -1 : 1) * (m[2] === '' ? 1 : +m[2]);
      const x0 = vals(q)[0];
      return close(6 * x0 + 2 * a, 0) || 'f\'\'(x0) ≠ 0';
    }
    if (/degré 4/.test(q.title)) {
      const m = s.match(/f\(x\) = x\^4 ([+-]) (\d*)x\^3/);
      const a = (m[1] === '-' ? -1 : 1) * (m[2] === '' ? 1 : +m[2]);
      const b = vals(q)[0];
      // min de f'' = 12x^2 + 6ax + 2b doit être nul
      let mn = Infinity;
      for (let x = -10; x <= 10; x += 1e-4) mn = Math.min(mn, 12 * x * x + 6 * a * x + 2 * b);
      return Math.abs(mn) < 1e-5 || `min f'' = ${mn}`;
    }
    if (/arithmético-géométrique/.test(q.title)) {
      const n = (s.match(/\$x_1 x_2( x_3)?( x_4)?\$/)[0].match(/x_/g) || []).length; const S = +s.match(/somme \$(\d+)\$/)[1];
      // maximum numérique pour n = 2 ou 3 (grille) ; formule sinon
      let best = 0;
      if (n === 2) for (let x = 0; x <= S; x += S / 2000) best = Math.max(best, x * (S - x));
      else if (n === 3) for (let x = 0; x <= S; x += S / 300) for (let y = 0; x + y <= S; y += S / 300) best = Math.max(best, x * y * (S - x - y));
      else best = (S / 4) ** 4;
      return Math.abs(best - vals(q)[0]) < 1e-6 * Math.max(1, best) || `max ${best}`;
    }
    if (/Cauchy-Schwarz/.test(q.title)) {
      const m = s.match(/vérifie \$(.*) = (-?\d+)\$/);
      const co = { x: 0, y: 0, z: 0 };
      for (const t of m[1].replace(/\s+/g, '').matchAll(/([+-]?)(\d*)([xyz])/g)) co[t[3]] = (t[1] === '-' ? -1 : 1) * (t[2] === '' ? 1 : +t[2]);
      const d = +m[2]; const N = co.x ** 2 + co.y ** 2 + co.z ** 2;
      // distance de l'origine au plan, recalculée par projection
      return close(vals(q)[0], (d / Math.sqrt(N)) ** 2) || 'minimum faux';
    }
    return undefined;
  };
  R['capes-09'] = (q) => {
    const s = st(q);
    let m;
    if ((m = s.match(/\\sum_\{n=(\d)\}\^\{\+\\infty\} (-?\d*)\\left\((-?\\frac\{\d+\}\{\d+\})\\right\)\^n/))) {
      const n0 = +m[1]; const c = m[2] === '' ? 1 : m[2] === '-' ? -1 : +m[2]; const x = tv(m[3]);
      let S = 0; for (let n = n0; n < 3000; n++) S += c * x ** n;
      return Math.abs(S - vals(q)[0]) < 1e-9 || `somme ${S}`;
    }
    if ((m = s.match(/\\frac\{(\d+)\}\{n\(n \+ (\d+)\)\}/))) {
      const c = +m[1]; const k = +m[2]; let S = 0;
      for (let n = 1; n < 2e6; n++) S += c / (n * (n + k));
      return Math.abs(S - vals(q)[0]) < 1e-4 || `somme ${S}`;
    }
    if (/série alternée/.test(q.title)) {
      m = s.match(/\\frac\{(\d*)\(-1\)\^\{n\+1\}\}\{n(?:\^\{(\d)\})?\}/);
      const c = m[1] === '' ? 1 : +m[1]; const p = m[2] ? +m[2] : 1;
      const e = s.match(/\\le (?:(\d) \\times )?10\^\{-(\d)\}\$/); const eps = (e[1] ? +e[1] : 1) * 10 ** -+e[2];
      let N = 0; while (c / (N + 1) ** p > eps * (1 + 1e-12)) N++;
      return expect(q, N);
    }
    if ((m = s.match(/\\frac\{(\d*)n(\^2)?\}\{(\d+)\^n\}/))) {
      const c = m[1] === '' ? 1 : +m[1]; const e = m[2] ? 2 : 1; const b = +m[3]; let S = 0;
      for (let n = 1; n < 400; n++) S += c * n ** e / b ** n;
      return Math.abs(S - vals(q)[0]) < 1e-9 || `somme ${S}`;
    }
    return undefined;
  };
  R['capes-10'] = (q) => {
    const s = st(q);
    let m;
    if ((m = s.match(/pgcd\}\((\d+), (\d+)\)/))) {
      const a = +m[1]; const b = +m[2]; let g = 1;
      for (let d = 1; d <= Math.min(a, b); d++) if (a % d === 0 && b % d === 0) g = d;
      return expect(q, g);
    }
    if ((m = s.match(/inverse de \$(\d+)\$ dans \$\\mathbb\{Z\}\/(\d+)/))) {
      const x = vals(q)[0];
      return ((+m[1] * x) % +m[2] === 1 && x >= 1 && x < +m[2]) || 'pas l\'inverse';
    }
    if ((m = s.match(/x \\equiv (\d+) \\pmod\{(\d+)\}\$ et \$x \\equiv (\d+) \\pmod\{(\d+)\}/))) {
      const x = vals(q)[0];
      for (let y = 0; y < x; y++) if (y % +m[2] === +m[1] && y % +m[4] === +m[3]) return 'pas le plus petit';
      return (x % +m[2] === +m[1] && x % +m[4] === +m[3]) || 'congruences non vérifiées';
    }
    if ((m = s.match(/\\varphi\((\d+)\)/)) && /Indicatrice/.test(q.title)) {
      const n = +m[1]; let c = 0;
      for (let k = 1; k <= n; k++) if (gcd(k, n) === 1) c++;
      return expect(q, c);
    }
    if (/RSA/.test(q.title)) {
      const p = +s.match(/p = (\d+)/)[1]; const qq = +s.match(/q = (\d+)/)[1]; const e = +s.match(/e = (\d+)/)[1];
      const d = vals(q)[0]; const n = p * qq;
      // test de déchiffrement effectif sur quelques messages
      const pw = (b, k, mod) => { let r = 1; b %= mod; while (k) { if (k & 1) r = (r * b) % mod; b = (b * b) % mod; k >>= 1; } return r; };
      for (const msg of [2, 3, 7, 10, n - 2]) if (pw(pw(msg, e, n), d, n) !== msg) return 'le déchiffrement échoue';
      return (d > 0 && d < (p - 1) * (qq - 1)) || 'd hors de l\'intervalle';
    }
    return undefined;
  };
  return R;
})(V));
}
// ---- vérificateurs prioritaires L1 ----
{
// Vérificateurs indépendants des familles L1 modifiées / ajoutées (audit des entraînements).
// Chaque fonction reçoit la question (forme QCM d'origine si convertie, avec q.exactInput = saisie attendue)
// et renvoie undefined (famille non reconnue), true, ou un message d'erreur.
'use strict';
addPre(( (V) => {
  // ---------------------------------------------------------------- outils
  const strip = (s) => String(s).replace(/^\$|\$$/g, '');
  const close = (a, b, eps = 1e-6) => Math.abs(a - b) <= eps * Math.max(1, Math.abs(a), Math.abs(b));
  /** saisie élève « (a;b;c) » ou « a » -> nombres */
  const tup = (s) => String(s).replace(/^\(|\)$/g, '').split(';').map((t) => {
    const m = t.trim().match(/^(-?\d+)\/(\d+)$/);
    return m ? +m[1] / +m[2] : parseFloat(t.replace(',', '.'));
  });
  const sameTup = (a, b, eps) => a.length === b.length && a.every((x, i) => close(x, b[i], eps));
  /** vérifie q.exactInput (si présent) contre les valeurs attendues */
  const chkIn = (q, expect, eps = 1e-6) => {
    if (q.exactInput === undefined) return true;
    const got = tup(q.exactInput);
    return sameTup(got, expect, eps) || `saisie ${q.exactInput} ≠ attendu (${expect.map((x) => +x.toFixed(6)).join(';')})`;
  };
  // ------------------------------------------- évaluateur d'expressions LaTeX
  function matchBrace(s, i) { // s[i] === '{' -> index de l'accolade fermante
    let d = 0;
    for (let j = i; j < s.length; j++) { if (s[j] === '{') d++; else if (s[j] === '}') { d--; if (!d) return j; } }
    return -1;
  }
  function texToTokens(tex) {
    let s = String(tex).replace(/\\left|\\right|\\displaystyle|\\[,;!]|\\cdot/g, (m) => (m === '\\cdot' ? '*' : '')).replace(/\\times/g, '*');
    // \frac{A}{B}
    for (;;) {
      const i = s.search(/\\[dt]?frac\{/);
      if (i < 0) break;
      const a0 = s.indexOf('{', i); const a1 = matchBrace(s, a0); const b1 = matchBrace(s, a1 + 1);
      s = s.slice(0, i) + '((' + s.slice(a0 + 1, a1) + ')/(' + s.slice(a1 + 2, b1) + '))' + s.slice(b1 + 1);
    }
    for (;;) {
      const i = s.search(/\\sqrt\{/);
      if (i < 0) break;
      const a0 = s.indexOf('{', i); const a1 = matchBrace(s, a0);
      s = s.slice(0, i) + 'sqrt(' + s.slice(a0 + 1, a1) + ')' + s.slice(a1 + 1);
    }
    for (;;) {
      const i = s.search(/e\^\{/);
      if (i < 0) break;
      const a0 = i + 2; const a1 = matchBrace(s, a0);
      s = s.slice(0, i) + 'exp(' + s.slice(a0 + 1, a1) + ')' + s.slice(a1 + 1);
    }
    s = s.replace(/\^\{/g, '^(').replace(/\{/g, '(').replace(/\}/g, ')');
    s = s.replace(/\\(ln|sin|cos|tan|arctan|exp)/g, ' $1 ').replace(/\\pi/g, ' pi ');
    s = s.replace(/(^|[^a-z])e\^(\d)/g, '$1exp($2)');
    const toks = s.match(/\d+(?:\.\d+)?|sqrt|exp|ln|arctan|sin|cos|tan|pi|[a-z]|[-+*/^()]/g) || [];
    return toks;
  }
  const FN = { sqrt: Math.sqrt, exp: Math.exp, ln: Math.log, sin: Math.sin, cos: Math.cos, tan: Math.tan, arctan: Math.atan };
  /** expression LaTeX -> fonction (variables : noms donnés) */
  function texFn(tex, vars = ['x']) {
    const toks = texToTokens(tex); let i = 0;
    const peek = () => toks[i];
    const isAtomStart = (t) => t !== undefined && (/^\d/.test(t) || /^[a-z]+$/.test(t) || t === '(');
    function expr() { let f = term(); while (peek() === '+' || peek() === '-') { const op = toks[i++]; const g = term(); const h = f; f = op === '+' ? (v) => h(v) + g(v) : (v) => h(v) - g(v); } return f; }
    function term() {
      let f = unary();
      for (;;) {
        if (peek() === '*' || peek() === '/') { const op = toks[i++]; const g = unary(); const h = f; f = op === '*' ? (v) => h(v) * g(v) : (v) => h(v) / g(v); } else if (isAtomStart(peek())) { const g = power(); const h = f; f = (v) => h(v) * g(v); } else break;
      }
      return f;
    }
    function unary() { if (peek() === '-') { i++; const g = unary(); return (v) => -g(v); } if (peek() === '+') { i++; return unary(); } return power(); }
    function power() { const b = atom(); if (peek() === '^') { i++; const e = peek() === '-' ? unary() : atom(); return (v) => b(v) ** e(v); } return b; }
    function atom() {
      const t = toks[i++];
      if (t === undefined) throw new Error('fin inattendue');
      if (/^\d/.test(t)) { const c = +t; return () => c; }
      if (t === '(') { const f = expr(); if (toks[i++] !== ')') throw new Error('parenthèse'); return f; }
      if (t === 'pi') return () => Math.PI;
      if (FN[t]) {
        const fn = FN[t];
        if (peek() === '^') { i++; const e = atom(); const a = atom(); return (v) => fn(a(v)) ** e(v); }
        const a = peek() === '(' ? atom() : power();
        return (v) => fn(a(v));
      }
      const k = vars.indexOf(t);
      if (k >= 0) return (v) => (Array.isArray(v) ? v[k] : v);
      throw new Error('symbole ' + t);
    }
    const f = expr();
    if (i !== toks.length) throw new Error('reste ' + toks.slice(i).join(' '));
    return f;
  }
  /** coefficients de Taylor numériques en 0 (interpolation aux nœuds de Tchebychev) */
  function taylor(fn, n, h = 0.05, D = 14) {
    const N = D + 1; const xs = []; const A = []; const b = [];
    for (let j = 0; j < N; j++) { const t = Math.cos(Math.PI * (j + 0.5) / N); xs.push(t); A.push(Array.from({ length: N }, (_, k) => t ** k)); b.push(fn(h * t)); }
    // élimination de Gauss avec pivot partiel
    for (let c = 0; c < N; c++) {
      let p = c; for (let r = c + 1; r < N; r++) if (Math.abs(A[r][c]) > Math.abs(A[p][c])) p = r;
      [A[c], A[p]] = [A[p], A[c]]; [b[c], b[p]] = [b[p], b[c]];
      for (let r = c + 1; r < N; r++) { const k = A[r][c] / A[c][c]; for (let j = c; j < N; j++) A[r][j] -= k * A[c][j]; b[r] -= k * b[c]; }
    }
    const co = new Array(N).fill(0);
    for (let r = N - 1; r >= 0; r--) { let s = b[r]; for (let j = r + 1; j < N; j++) s -= A[r][j] * co[j]; co[r] = s / A[r][r]; }
    return co.slice(0, n + 1).map((c, k) => c / h ** k);
  }
  /** polynôme LaTeX (coefficients entiers ou \frac) -> {deg: coef} ; variable v */
  function polyTex(s, v = 'x') {
    s = strip(s).replace(/\s+/g, '').replace(/\+o\([^)]*\)$/, '').replace(/\\[dt]frac/g, '\\frac');
    const out = {}; const re = new RegExp(`([+-]?)(\\\\frac\\{(\\d+)\\}\\{(\\d+)\\}|\\d+)?(${v}(?:\\^\\{?(\\d+)\\}?)?)?`, 'y');
    let pos = 0;
    while (pos < s.length) {
      re.lastIndex = pos; const m = re.exec(s);
      if (!m || m[0] === '' || (!m[2] && !m[5])) return null;
      pos = re.lastIndex;
      const c = (m[1] === '-' ? -1 : 1) * (m[3] ? m[3] / m[4] : m[2] ? +m[2] : 1);
      const d = m[5] ? (m[6] ? +m[6] : 1) : 0;
      out[d] = (out[d] || 0) + c;
    }
    return out;
  }
  const texNum = (s) => { s = strip(s).replace(/\s+/g, ''); const m = s.match(/^(-?)\\[dt]?frac\{(\d+)\}\{(\d+)\}$/); return m ? (m[1] ? -1 : 1) * m[2] / m[3] : V.val(s); };

  // ---------------------------------------------------------------- L1-TAY
  const TAY = (q) => {
    const S = q.statement; const t = q.title; let m;
    if ((m = S.match(/à l'ordre (\d) en \$0\$ de \$f\(x\) = (.*)\$ \?/))) {
      const n = +m[1]; const fn = texFn(m[2]);
      const co = taylor(fn, n);
      const p = polyTex(q.answer.replace(/^\$/, '').replace(/\+ o\(x\^\d\)\$$/, ''));
      if (!p) return 'DL illisible ' + q.answer;
      for (let k = 0; k <= n; k++) if (!close(p[k] || 0, co[k], 1e-5)) return `coefficient ${k} faux (${co[k]})`;
      for (const o of q.options) {
        if (o === q.answer) continue;
        const po = polyTex(o.replace(/^\$/, '').replace(/\+ o\(x\^\d\)\$$/, ''));
        if (po && [...Array(n + 1).keys()].every((k) => close(po[k] || 0, co[k], 1e-5))) return 'distracteur juste ' + o;
      }
      if (q.exactInput !== undefined) {
        const idx = /\\cos/.test(m[2]) && n === 4 ? [0, 2, 4] : /\\sin/.test(m[2]) && n === 3 ? [1, 3] : [...Array(n + 1).keys()];
        return chkIn(q, idx.map((k) => co[k]), 1e-5);
      }
      return true;
    }
    if (/Asymptote oblique/.test(t)) {
      m = S.match(/Soit \$f\(x\) = (.*?)\$\. Déterminer/);
      const fn = texFn(m[1]);
      const X = 2000; const mm = Math.round(fn(1e6) / 1e6);
      const g = (x) => fn(x) - mm * x;
      const p = 2 * g(2 * X) - g(X);
      const ans = polyTex(strip(q.answer).replace(/^y=\s*/, '').replace(/^y = /, ''));
      if (!ans || !close(ans[1] || 0, mm) || !close(ans[0] || 0, p, 1e-5)) return `asymptote attendue y = ${mm}x + ${p}`;
      const c = (g(X) - p) * X; // terme en 1/x
      if (/au-dessus/.test(q.solution) !== (c > 0)) return 'position fausse';
      for (const o of q.options) { if (o === q.answer) continue; const po = polyTex(strip(o).replace(/^y = /, '')); if (po && close(po[1] || 0, mm) && close(po[0] || 0, p, 1e-5)) return 'distracteur juste'; }
      return chkIn(q, [mm, p], 1e-5);
    }
    return undefined;
  };

  // ---------------------------------------------------------------- L1-INT
  const deriv = (F, x, h = 1e-5) => (F(x + h) - F(x - h)) / (2 * h);
  const INT = (q) => {
    const S = q.statement; const t = q.title; let m;
    if (/Déterminer une primitive/.test(S) && q.exactInput !== undefined) {
      m = S.match(/de \$f\(x\) = (.*?)\$\.$/);
      const f = texFn(m[1]);
      const F = texFn(strip(q.answer).replace(/\s*\+ C$/, ''));
      const pts = [0.7, 1.3, 2.1, 0.4];
      if (!pts.every((x) => close(deriv(F, x), f(x), 1e-5))) return 'primitive fausse';
      const [al, be] = tup(q.exactInput);
      let G;
      if (/Primitive de la forme/.test(t)) {
        const mm = S.match(/x\(x\^2 \+ (\d+)\)\^\{(\d+)\}/);
        G = (x) => al * (x * x + +mm[1]) ** (+mm[2] + 1);
      } else if (/logarithme/.test(t)) {
        const n = (m[1].match(/x\^(\d)/) || [0, 1])[1];
        G = (x) => al * x ** (+n + 1) * Math.log(x) + be * x ** (+n + 1);
      } else {
        const a = texFn((m[1].match(/e\^\{(.*?)\}|\\(?:sin|cos)\((.*?)\)/) || []).slice(1).find(Boolean));
        const k = a(1) - a(0);
        if (/e\^/.test(m[1])) G = (x) => (al * x + be) * Math.exp(k * x);
        else if (/\\cos/.test(m[1])) G = (x) => al * x * Math.sin(k * x) + be * Math.cos(k * x);
        else G = (x) => al * x * Math.cos(k * x) + be * Math.sin(k * x);
      }
      return pts.every((x) => close(deriv(G, x), f(x), 1e-5)) || 'saisie (α ; β) fausse : ' + q.exactInput;
    }
    if (/éléments simples/.test(t) && q.exactInput !== undefined) {
      m = S.match(/\$\\dfrac\{([^{}]*)\}\{([^{}]*)\} = \\dfrac\{a\}\{([^{}]*)\} \+ \\dfrac\{b\}\{([^{}]*)\}\$/);
      const lhs = texFn(`\\frac{${m[1]}}{${m[2]}}`); const d1 = texFn(m[3]); const d2 = texFn(m[4]);
      // a = lim (x - p) F(x) en p : évaluation numérique au voisinage du pôle
      const p1 = -d1(0); const p2 = -d2(0);
      const a = (lhs(p1 + 1e-7) * d1(p1 + 1e-7) + lhs(p1 - 1e-7) * d1(p1 - 1e-7)) / 2;
      const b = (lhs(p2 + 1e-7) * d2(p2 + 1e-7) + lhs(p2 - 1e-7) * d2(p2 - 1e-7)) / 2;
      const ab = q.answer.match(/\$a = (.*?)\$ et \$b = (.*?)\$/);
      if (!close(texNum(ab[1]), a, 1e-5) || !close(texNum(ab[2]), b, 1e-5)) return 'DES fausse';
      return chkIn(q, [a, b], 1e-5);
    }
    return undefined;
  };

  // ---------------------------------------------------------------- L1-GEO
  const pair = (s) => s.split(/\s*;\s*/).map(texNum);
  const lineCo = (s) => { const p = V.poly(s.replace(/y/g, 'Y'), 'x'); const py = {}; // ax + by + c
    const str = s.replace(/\s+/g, ''); const m = str.match(/^(-?\d*)x([+-]\d*)y([+-]\d+)?$/);
    if (!m) return null; const c = (u) => (u === '' || u === '+' ? 1 : u === '-' ? -1 : +u);
    return [c(m[1]), c(m[2]), m[3] ? +m[3] : 0]; };
  const GEO = (q) => {
    const S = q.statement; const t = q.title; let m;
    if (/Distance d'un point/.test(t)) {
      m = S.match(/M\((-?\d+) ; (-?\d+)\)\$ à la droite \$\\mathcal\{D\} : (.*) = 0\$/);
      const [a, b, c] = lineCo(m[3]); const d = Math.abs(a * m[1] + b * m[2] + c) / Math.hypot(a, b);
      if (!close(texNum(strip(q.answer).replace(/^d = /, '')), d)) return 'distance ' + d;
      return chkIn(q, [d]);
    }
    if (/vecteur normal donné/.test(t)) {
      m = S.match(/A\((-?\d+) ; (-?\d+)\)\$ et de vecteur normal \$\\vec\{n\}\((-?\d+) ; (-?\d+)\)/);
      const [a, b, c] = lineCo(strip(q.answer).replace(/ = 0$/, ''));
      if (!(a === +m[3] && b === +m[4] && a * m[1] + b * m[2] + c === 0)) return 'droite fausse';
      return chkIn(q, [-(m[3] * m[1] + m[4] * m[2])]);
    }
    if (/Cercle/.test(t)) {
      m = S.match(/\$x\^2 \+ y\^2(.*) = 0\$ est un cercle/);
      const str = m[1].replace(/\s+/g, '');
      const D = +String((str.match(/([+-]\d*)x/) || [0, 0])[1]).replace(/^([+-])$/, '$11');
      const E = +String((str.match(/([+-]\d*)y/) || [0, 0])[1]).replace(/^([+-])$/, '$11');
      const F = +(str.match(/([+-]\d+)$/) || [0, 0])[1];
      const h = -D / 2; const k = -E / 2; const r = Math.sqrt(h * h + k * k - F);
      const a = q.answer.match(/\\Omega\((-?\d+) ; (-?\d+)\)\$, rayon \$(\d+)\$/);
      if (!(+a[1] === h && +a[2] === k && +a[3] === r)) return 'cercle : attendu ' + [h, k, r];
      return chkIn(q, [h, k, r]);
    }
    if (/Projeté orthogonal/.test(t)) {
      m = S.match(/M\((-?\d+) ; (-?\d+)\)\$ sur la droite \$\\mathcal\{D\} : (.*) = 0\$/);
      const [a, b, c] = lineCo(m[3]); const x0 = +m[1]; const y0 = +m[2];
      const tt = -(a * x0 + b * y0 + c) / (a * a + b * b);
      const H = pair(q.answer.match(/H\\left\((.*)\\right\)/)[1]);
      if (!(close(H[0], x0 + tt * a) && close(H[1], y0 + tt * b))) return 'projeté faux';
      return chkIn(q, [x0 + tt * a, y0 + tt * b]);
    }
    if ((m = S.match(/\\frac\{x\^2\}\{(\d+)\} ([+-]) \\frac\{y\^2\}\{(\d+)\} = 1/))) {
      const A2 = +m[1]; const B2 = +m[3]; const ell = m[2] === '+';
      const c = Math.sqrt(ell ? A2 - B2 : A2 + B2); const a = Math.sqrt(A2); const b = Math.sqrt(B2);
      if (ell && A2 <= B2) return 'grand axe vertical non prévu';
      if (/Excentricité/.test(t)) return close(texNum(strip(q.answer).replace(/^e = /, '')), c / a) || 'e attendu ' + c / a;
      if (/Foyers/.test(t)) return (+q.answer.match(/F\((\d+) ; 0\)/)[1] === c && chkIn(q, [c, 0]) === true) || 'foyers';
      if (/Asymptotes/.test(t)) return (close(texNum(q.answer.match(/y = (.*?)x\$/)[1]), b / a) && chkIn(q, [b / a]) === true) || 'asymptotes';
      if (/Directrice/.test(t)) return (close(texNum(strip(q.answer).replace(/^x = /, '')), a * a / c) && chkIn(q, [a * a / c]) === true) || 'directrice ' + a * a / c;
      return 'conique non reconnue';
    }
    if (/Foyer d'une parabole/.test(t)) {
      m = S.match(/\$(x|y)\^2 = (-?\d+)(x|y)\$/);
      const f = +m[2] / 4;
      const F = pair(q.answer.match(/F\\left\((.*)\\right\)/)[1]);
      const exp = m[1] === 'y' ? [f, 0] : [0, f];
      return (sameTup(F, exp) && chkIn(q, exp) === true) || 'foyer parabole';
    }
    if (/Réduction d'une conique/.test(t)) {
      m = S.match(/\$(.*) = 0\$/);
      const str = m[1].replace(/\s+/g, '').replace(/-/g, '+-');
      const co = { xx: 0, yy: 0, x: 0, y: 0, c: 0 };
      for (const tm of str.split('+').filter(Boolean)) {
        const mm = tm.match(/^(-?\d*)(x\^2|y\^2|x|y)?$/);
        const c = mm[1] === '' ? 1 : mm[1] === '-' ? -1 : +mm[1];
        co[mm[2] === 'x^2' ? 'xx' : mm[2] === 'y^2' ? 'yy' : mm[2] || 'c'] += c;
      }
      const h = -co.x / (2 * co.xx); const k = -co.y / (2 * co.yy);
      const K = co.xx * h * h + co.yy * k * k - co.c;
      const a2 = K / co.xx; const b2 = K / co.yy;
      let nat; let e;
      if (a2 > 0 && b2 > 0) { nat = 'Ellipse'; e = Math.sqrt(1 - Math.min(a2, b2) / Math.max(a2, b2)); } else { nat = 'Hyperbole'; const A = a2 > 0 ? a2 : b2; const B = Math.abs(a2 > 0 ? b2 : a2); e = Math.sqrt(1 + B / A); }
      const am = q.answer.match(/^(\w+) de centre \$\\Omega\((-?\d+) ; (-?\d+)\)\$ et d'excentricité \$(.*)\$$/);
      return (am[1] === nat && +am[2] === h && +am[3] === k && close(texNum(am[4]), e)) || 'conique : attendu ' + [nat, h, k, e];
    }
    if (/Équation polaire/.test(t)) {
      if ((m = S.match(/r = \\dfrac\{(\d+)\}\{(\d+) ([+-]) (\d*)\\cos\\theta\}\$/))) {
        const N = +m[1]; const D = +m[2]; const E = m[4] === '' ? 1 : +m[4];
        const e = E / D; const p = N / D;
        const am = q.answer.match(/\$e = (.*?)\$ et \$p = (.*?)\$/);
        if (!close(texNum(am[1]), e) || !close(texNum(am[2]), p)) return 'polaire : attendu ' + [e, p];
        const nat = e < 1 ? 'ellipse' : e === 1 ? 'parabole' : 'hyperbole';
        if (!q.solution.includes(nat)) return 'nature fausse';
        return chkIn(q, [e, p]);
      }
      m = S.match(/x = (\d+)\$ et d'excentricité \$e = (.*?)\$/);
      const d = +m[1]; const e = texNum(m[2]);
      // r(θ) vérifie OM = e · d(M, D) en quelques angles
      const fr = texFn(strip(q.answer).replace(/^r = /, '').replace(/\\theta/g, 't'), ['t']);
      for (const th of [0.3, 1.1, 2.0]) { const r = fr(th); if (r > 0 && !close(r, e * (d - r * Math.cos(th)))) return 'équation polaire fausse'; }
      return chkIn(q, [e * d]);
    }
    return 'famille GEO non reconnue';
  };

  // ---------------------------------------------------------------- L1-MAT
  function pmats(str) {
    return [...String(str).matchAll(/\\begin\{pmatrix\}(.*?)\\end\{pmatrix\}/g)].map((m) => m[1].split('\\\\').map((r) => r.split('&').map((x) => texNum(x.trim()))));
  }
  const prefixOf = (str) => { // facteur devant la dernière matrice : "\frac{1}{7} \begin", "-\begin"
    const m = String(str).match(/(-?)\s*(\\frac\{(\d+)\}\{(\d+)\})?\s*\\begin\{pmatrix\}(?!.*\\begin\{pmatrix\})/);
    return (m[1] ? -1 : 1) * (m[2] ? m[3] / m[4] : 1);
  };
  const mmul = (X, Y) => X.map((r) => Y[0].map((_, j) => r.reduce((a, x, k) => a + x * Y[k][j], 0)));
  const det3 = (A) => A[0][0] * (A[1][1] * A[2][2] - A[1][2] * A[2][1]) - A[0][1] * (A[1][0] * A[2][2] - A[1][2] * A[2][0]) + A[0][2] * (A[1][0] * A[2][1] - A[1][1] * A[2][0]);
  const inv3 = (A) => { const d = det3(A); const c = (i, j) => { const m = A.filter((_, r) => r !== i).map((r) => r.filter((_, k) => k !== j)); return ((i + j) % 2 ? -1 : 1) * (m[0][0] * m[1][1] - m[0][1] * m[1][0]); }; return [0, 1, 2].map((i) => [0, 1, 2].map((j) => c(j, i) / d)); };
  const casesRows = (str) => { const m = str.match(/\\begin\{cases\}(.*?)\\end\{cases\}/); return m[1].split('\\\\').map((r) => { const [l, rhs] = r.split('='); const co = [0, 0, 0]; for (const t of l.replace(/\s+/g, '').matchAll(/([+-]?\d*)([xyz])/g)) co['xyz'.indexOf(t[2])] += t[1] === '' || t[1] === '+' ? 1 : t[1] === '-' ? -1 : +t[1]; return [...co, +rhs]; }); };
  const lastMatOf = (o) => { const ps = pmats(o); return ps.length ? ps[ps.length - 1].map((r) => r.map((x) => x * prefixOf(o))) : null; };
  const MAT = (q) => {
    const S = q.statement; const t = q.title; let m;
    const flat = (M) => M.reduce((a, r) => a.concat(r), []);
    if (/inverse|Inverse|Inversion/.test(t) && /pmatrix/.test(q.answer) && !/annulateur/.test(t)) {
      const M = pmats(S)[0]; const n = M.length;
      const Inv = n === 2 ? (() => { const d = M[0][0] * M[1][1] - M[0][1] * M[1][0]; return [[M[1][1] / d, -M[0][1] / d], [-M[1][0] / d, M[0][0] / d]]; })() : inv3(M);
      const got = lastMatOf(q.answer);
      if (!flat(got).every((x, i) => close(x, flat(Inv)[i]))) return 'inverse fausse';
      for (const o of q.options) { if (o === q.answer) continue; const g = lastMatOf(o); if (g && g.length === n && flat(g).every((x, i) => close(x, flat(Inv)[i]))) return 'distracteur aussi inverse ' + o; }
      if (q.exactInput === undefined) return true;
      if (n === 2) return chkIn(q, flat(Inv));
      if (/diagonale/.test(t)) return chkIn(q, [Inv[0][0], Inv[1][1], Inv[2][2]]);
      const upper = M[0][1] !== 0 || M[0][2] !== 0 || M[1][2] !== 0;
      return chkIn(q, upper ? [Inv[0][1], Inv[0][2], Inv[1][2]] : [Inv[1][0], Inv[2][0], Inv[2][1]]);
    }
    if (/Déterminant/.test(t) && q.exactInput !== undefined) {
      const M = pmats(S)[0]; const d = M.length === 2 ? M[0][0] * M[1][1] - M[0][1] * M[1][0] : det3(M);
      if (+q.answer.match(/= (-?\d+)/)[1] !== d || /non inversible/.test(q.answer) !== (d === 0)) return 'déterminant faux';
      return chkIn(q, [d]);
    }
    if (/Produit de matrices|Multiplication matricielle|matrice-vecteur/.test(t) && q.exactInput !== undefined) {
      const ms = pmats(S); const BA = /produit \$BA\$/.test(S);
      const Rm = BA ? mmul(ms[1], ms[0]) : mmul(ms[0], ms[1]); const got = pmats(q.answer)[0];
      if (!Rm.every((r, i) => r.every((x, j) => close(x, got[i][j])))) return 'produit faux';
      if (Rm.length === 3 && Rm[0].length === 3) return chkIn(q, Rm[1]);
      return chkIn(q, flat(Rm));
    }
    if (/système échelonné|pivot de Gauss/.test(t)) {
      const rows = casesRows(S); const A = rows.map((r) => r.slice(0, 3)); const b = rows.map((r) => r[3]);
      const d = det3(A); if (d === 0) return 'système non inversible';
      const sol = [0, 1, 2].map((k) => det3(A.map((r, i) => r.map((c, j) => (j === k ? b[i] : c)))) / d);
      const got = q.answer.match(/= \((.*)\)\$/)[1].split(';').map((x) => +x.trim());
      if (!sameTup(got, sol)) return 'solution fausse ' + sol;
      if (/échelonné/.test(t) && !(A[1][0] === 0 && A[2][0] === 0 && A[2][1] === 0)) return 'système non échelonné';
      return chkIn(q, sol);
    }
    if (/selon un paramètre/.test(t)) {
      const D = (mv) => det3(pmats(S.replace(/& m \\end/, `& ${mv} \\end`))[0]);
      const d0 = D(0); const d1 = D(1); const m0 = -d0 / (d1 - d0);
      if (d1 === d0) return 'det indépendant de m';
      if (!close(+q.answer.match(/m = (-?\d+)/)[1], m0)) return 'paramètre attendu ' + m0;
      return chkIn(q, [m0]);
    }
    if (/polynôme annulateur/.test(t) && q.exactInput !== undefined) {
      const rel = S.match(/telle que \$(.*) = 0\$/)[1].replace(/\s+/g, '');
      const co = {}; for (const tm of rel.matchAll(/([+-]?\d*)(A\^(\d)|A|I_n)/g)) co[tm[3] ? +tm[3] : tm[2] === 'A' ? 1 : 0] = tm[1] === '' || tm[1] === '+' ? 1 : tm[1] === '-' ? -1 : +tm[1];
      const deg = co[3] ? 3 : 2; const q0 = co[0];
      // A^{-1} = -(1/q0)(A^{deg-1} + c_{deg-1} A^{deg-2} + ... + c_1 I)
      const exp = []; for (let k = deg; k >= 1; k--) exp.push(-(k === deg ? 1 : (co[k] || 0)) / q0);
      const ans = strip(q.answer).split('A^{-1} = ')[1];
      const got = []; for (const mon of deg === 3 ? ['A^2', 'A', 'I_n'] : ['A', 'I_n']) { const re = new RegExp(`(^|[+-])\\s*(\\\\frac\\{\\d+\\}\\{\\d+\\}|\\d+)?${mon.replace('^', '\\^')}(?![\\^_])`); const mm = ans.replace(/\s+/g, '').replace(/([+-])/g, ' $1').trim().split(' ').map((x) => x.trim()).find((x) => new RegExp(`${mon.replace('^', '\\^')}$`).test(x) && (mon !== 'A' || !/A\^/.test(x))); got.push(mm ? (/^-/.test(mm) ? -1 : 1) * (mm.replace(/^[+-]/, '').replace(mon, '') === '' ? 1 : texNum(mm.replace(/^[+-]/, '').replace(mon, ''))) : 0); }
      if (!sameTup(got, exp)) return 'inverse annulateur fausse ' + exp;
      return chkIn(q, exp);
    }
    if (/Rang d'une matrice par échelonnement/.test(t)) {
      const A = pmats(S)[0].map((r) => r.slice()); let rk = 0;
      for (let c = 0; c < A[0].length && rk < A.length; c++) {
        let p = rk; while (p < A.length && Math.abs(A[p][c]) < 1e-9) p++;
        if (p === A.length) continue;
        [A[rk], A[p]] = [A[p], A[rk]];
        for (let i = rk + 1; i < A.length; i++) { const f = A[i][c] / A[rk][c]; A[i] = A[i].map((x, j) => x - f * A[rk][j]); }
        rk++;
      }
      if (+q.answer.match(/= (\d)\$/)[1] !== rk) return 'rang attendu ' + rk;
      return chkIn(q, [rk]);
    }
    if ((/binôme de Newton/.test(t) || (/unipotente/.test(t) && /Calculer \$A\^\{\d+\}\$/.test(S))) && (q.exactInput !== undefined || /unipotente/.test(t))) {
      const A = pmats(S)[0]; const k = +S.match(/A\^\{(\d+)\}/)[1];
      let P = [[1, 0], [0, 1]]; for (let i = 0; i < k; i++) P = mmul(P, A);
      const got = pmats(q.answer)[0];
      if (!flat(got).every((x, i) => close(x, flat(P)[i]))) return 'puissance fausse';
      return chkIn(q, flat(P));
    }
    if (/système de Cramer/.test(t)) {
      m = S.match(/mx \+ (\d*)y = -?\d+ \\\\ (\d*)x \+ my/);
      const ab = (m[1] === '' ? 1 : +m[1]) * (m[2] === '' ? 1 : +m[2]); const r = Math.sqrt(ab);
      if (!new RegExp(`\\\\setminus \\\\\\{-${r} ; ${r}\\\\\\}\\$$`).test(q.answer)) return 'valeurs exclues ±' + r;
      return chkIn(q, [-r, r]);
    }
    return undefined;
  };

  // ---------------------------------------------------------------- L1-CMP
  const cxParse = (str) => { // "2 - 3i", "-i", "5", "8i"
    const t = String(str).replace(/\s+/g, ''); let re = 0; let im = 0;
    for (const m of t.matchAll(/([+-]?)(\d*)(i?)/g)) { if (!m[0]) continue; const v = (m[1] === '-' ? -1 : 1) * (m[2] === '' ? 1 : +m[2]); if (m[3]) im += v; else if (m[2] !== '') re += v; }
    return [re, im];
  };
  const cmul = (u, v) => [u[0] * v[0] - u[1] * v[1], u[0] * v[1] + u[1] * v[0]];
  const peval = (co, x) => Object.entries(co).reduce((a, [d, c]) => a + c * x ** +d, 0);
  const CMP = (q) => {
    const S = q.statement; const t = q.title; let m;
    if (/Racines carrées d'un nombre complexe/.test(t)) {
      const Z = cxParse(S.match(/de \$Z = (.*?)\$/)[1]);
      const w = cxParse(q.answer.match(/\\pm\((.*)\)\$/)[1]);
      const w2 = cmul(w, w);
      if (w2[0] !== Z[0] || w2[1] !== Z[1]) return 'racine carrée fausse';
      const wp = w[0] > 0 || (w[0] === 0 && w[1] > 0) ? w : [-w[0], -w[1]];
      return chkIn(q, wp);
    }
    if (/Forme algébrique d'une puissance/.test(t)) {
      m = S.match(/\$\((.*)\)\^\{(\d+)\}\$/);
      const z = cxParse(m[1]); let r = [1, 0]; for (let k = 0; k < +m[2]; k++) r = cmul(r, z);
      const got = cxParse(strip(q.answer).split(" = ").pop());
      if (got[0] !== r[0] || got[1] !== r[1]) return 'puissance fausse ' + r;
      return chkIn(q, r);
    }
    if (/Division euclidienne de polynômes/.test(t)) {
      m = S.match(/A\(X\) = (.*?)\$ par \$B\(X\) = (.*?)\$/);
      const A = V.poly(m[1], 'X'); const B = V.poly(m[2], 'X');
      const degA = Math.max(...Object.keys(A).map(Number));
      const a = []; for (let d = degA; d >= 0; d--) a.push(A[d] || 0);
      const b = [B[2] || 0, B[1] || 0, B[0] || 0];
      const Q = []; const r = a.slice();
      for (let i = 0; i + 2 < r.length; i++) { const c = r[i] / b[0]; Q.push(c); for (let j = 0; j < 3; j++) r[i + j] -= c * b[j]; }
      const R = r.slice(-2);
      const askR = /le reste/.test(S);
      const tgt = askR ? R : Q;
      const got = V.poly(strip(q.answer).replace(/^[QR]\(X\) = /, ''), 'X');
      const gv = []; for (let d = tgt.length - 1; d >= 0; d--) gv.push(got[d] || 0);
      if (!sameTup(gv, tgt)) return 'division fausse';
      return chkIn(q, tgt);
    }
    if (/degré 3 scindé/.test(t) && q.exactInput !== undefined) {
      const co = V.poly(S.match(/P\(X\) = (.*?)\$/)[1], 'X');
      const roots = []; for (let x = -20; x <= 20; x++) if (peval(co, x) === 0) roots.push(x);
      if (roots.length !== 3) return 'racines entières attendues';
      const fr = [...q.answer.matchAll(/\(X ([+-]) (\d+)\)|X(?![\^ ]*[-+(])/g)];
      return chkIn(q, roots);
    }
    if (/degré 3 (avec|à) racine double/.test(t) && q.exactInput !== undefined) {
      const co = V.poly(S.match(/P\(X\) = (.*?)\$/)[1], 'X');
      const dco = {}; for (const [d, c] of Object.entries(co)) if (+d > 0) dco[+d - 1] = c * +d;
      let dbl = null; let sim = null;
      for (let x = -20; x <= 20; x++) if (peval(co, x) === 0) { if (peval(dco, x) === 0) dbl = x; else sim = x; }
      return chkIn(q, [dbl, sim]);
    }
    if (/PGCD de deux polynômes/.test(t)) {
      m = S.match(/P\(X\) = (.*?)\$ et \$Q\(X\) = (.*?)\$/);
      const P1 = V.poly(m[1], 'X'); const Q1 = V.poly(m[2], 'X');
      const com = []; for (let x = -20; x <= 20; x++) if (peval(P1, x) === 0 && peval(Q1, x) === 0) com.push(x);
      if (com.length !== 2) return 'racines communes';
      const g = V.poly(q.answer.match(/= (.*)\$/)[1], 'X');
      const exp = [-(com[0] + com[1]), com[0] * com[1]];
      if ((g[2] || 0) !== 1 || (g[1] || 0) !== exp[0] || (g[0] || 0) !== exp[1]) return 'pgcd faux';
      return chkIn(q, exp);
    }
    if (/Équation du second degré dans C/.test(t)) {
      m = S.match(/l'équation \$z\^2(.*) = 0\$/)[1];
      // z^2 + Bz + C : on teste les solutions proposées
      const z1 = cxParse(q.answer.match(/z_1 = (.*?)\$/)[1]); const z2 = cxParse(q.answer.match(/z_2 = (.*?)\$/)[1]);
      const ev = (z) => { const lin = m.replace(/z/g, `*(${z[0]}+${z[1]}*I)`); return lin; };
      // somme et produit lus sur l'équation
      let Bc = [0, 0]; let Cc = [0, 0];
      const mm = m.match(/^\s*(?:([+-]) \(([^)]*)\)z|([+-]) ([^ ]*)z)?\s*(?:\+ \((.*)\)|([+-]) (.*))?$/);
      if (!mm) return 'équation illisible';
      if (mm[2] !== undefined) { const c = cxParse(mm[2]); Bc = mm[1] === '-' ? [-c[0], -c[1]] : c; } else if (mm[4] !== undefined) { const c = cxParse(mm[4] === '' ? '1' : mm[4]); Bc = mm[3] === '-' ? [-c[0], -c[1]] : c; }
      if (mm[5] !== undefined) Cc = cxParse(mm[5]); else if (mm[7] !== undefined) { const c = cxParse(mm[7]); Cc = mm[6] === '-' ? [-c[0], -c[1]] : c; }
      const f = (z) => { const z2b = cmul(z, z); const bz = cmul(Bc, z); return [z2b[0] + bz[0] + Cc[0], z2b[1] + bz[1] + Cc[1]]; };
      const r1 = f(z1); const r2 = f(z2);
      if (r1[0] || r1[1] || r2[0] || r2[1] || (z1[0] === z2[0] && z1[1] === z2[1])) return 'solutions fausses';
      if (z2[0] > z1[0] || (z2[0] === z1[0] && z2[1] > z1[1])) return 'ordre z1/z2';
      return chkIn(q, [...z1, ...z2]);
    }
    if (/Reste d'une division euclidienne par un carré/.test(t)) {
      m = S.match(/X\^\{(\d+)\}\$ par \$B\(X\) = (\(X ([+-]) (\d+)\)|X)\^2/);
      const n = +m[1]; const a = m[2] === 'X' ? 0 : (m[3] === '-' ? 1 : -1) * +m[4];
      // reste = interpolation d'Hermite : R(a) = a^n, R'(a) = n a^{n-1}
      const al = n * a ** (n - 1); const be = a ** n - al * a;
      const g = V.poly(q.answer.match(/R\(X\) = (.*)\$/)[1], 'X');
      if ((g[1] || 0) !== al || (g[0] || 0) !== be) return 'reste faux';
      return chkIn(q, [al, be]);
    }
    if (/Polynôme réel de racine complexe/.test(t)) {
      m = S.match(/admettant \$(.*?)\$ et \$(-?\d+)\$ pour racines/);
      const z = cxParse(m[1]); const r = +m[2];
      const g = V.poly(strip(q.answer), 'X');
      // P(z) = 0 et P(r) = 0 avec P unitaire de degré 3
      const co = [g[3] || 0, g[2] || 0, g[1] || 0, g[0] || 0];
      if (co[0] !== 1) return 'non unitaire';
      let v = [0, 0]; for (const c of co) { v = cmul(v, z); v[0] += c; }
      if (Math.abs(v[0]) + Math.abs(v[1]) > 1e-9 || co.reduce((a, c) => a * r + c, 0) !== 0) return 'polynôme faux';
      return chkIn(q, co.slice(1));
    }
    if (/racines multiples par le PGCD/.test(t) && q.exactInput !== undefined) {
      const co = V.poly(S.match(/P\(X\) = (.*?)\$/)[1], 'X');
      const dco = {}; for (const [d, c] of Object.entries(co)) if (+d > 0) dco[+d - 1] = c * +d;
      for (let x = -20; x <= 20; x++) if (peval(co, x) === 0 && peval(dco, x) === 0) return chkIn(q, [x]);
      return 'pas de racine multiple';
    }
    if (/Ordre de multiplicité/.test(t) && q.exactInput !== undefined) {
      let co = V.poly(S.match(/P\(X\) = (.*?)\$/)[1].replace(/\{(\d+)\}/g, '$1'), 'X'); let k = 0;
      while (Math.abs(peval(co, 1)) < 1e-9 && k < 10) { const d = {}; for (const [e, c] of Object.entries(co)) if (+e > 0) d[+e - 1] = c * +e; co = d; k++; }
      return chkIn(q, [k]);
    }
    return undefined;
  };

  // ------------------------------------------- familles historiques étiquetées (_L1tag)
  // La réponse QCM est recalculée par le vérificateur principal (on renvoie undefined) ; ici on contrôle
  // seulement que la saisie attendue est bien la valeur portée par la réponse.
  const TAG = (q) => {
    if (q.exactInput === undefined) return undefined;
    const t = q.title; const A = q.answer; let m; let exp = null;
    if (/image d'un vecteur par une application/.test(t)) { m = A.match(/= \((-?\d+), (-?\d+)\)\$$/); exp = [+m[1], +m[2]]; }
    else if (/dérivation concrète/.test(t)) { const p = V.poly(strip(A).replace(/^D\(P\) = /, ''), 'X'); exp = [p[1] || 0, p[0] || 0]; }
    else if (/Théorème du rang (appliqué|: Dimension)/.test(t)) exp = [+A.match(/rg\}\(f\) = (\d+)/)[1]];
    else if (/Matrice d'un endomorphisme dans la base canonique|Matrice de passage entre deux bases/.test(t)) exp = pmats(A)[0].flat();
    else if (/Liberté de deux vecteurs|et liberté sans composante/.test(t)) exp = [+A.match(/\\det\(u, v(?:, w)?\) = (-?\d+)/)[1]];
    else if (/^Rang d'une matrice \$3/.test(t)) exp = [+A.match(/rg\}\(M\) = (\d)/)[1]];
    else if (/Nombre de racines réelles/.test(t)) exp = [/^Trois/.test(A) ? 3 : /^Deux/.test(A) ? 2 : 1];
    else if (/Nombre de classes|modulo n sur un ensemble fini/.test(t)) exp = [+A.match(/^\$(\d+)\$/)[1]];
    else if (/Image directe d'un intervalle/.test(t)) { m = A.match(/\[(-?\d+), (-?\d+)\]/); exp = [+m[1], +m[2]]; }
    if (!exp) return undefined;
    const r = chkIn(q, exp);
    return r === true ? undefined : r;
  };
  const LOG = (q) => {
    if (/Bijection réciproque d'une homographie/.test(q.title)) {
      const m = q.statement.match(/f\(x\) = \\dfrac\{(.*?)\}\{(.*?)\}\$/);
      const f = texFn(`\\frac{${m[1]}}{${m[2]}}`);
      const g = texFn(strip(q.answer).replace(/^f\^\{-1\}\(y\) = /, '').replace(/y/g, 'x'));
      for (const x of [0.37, 2.9, -4.1]) { const y = f(x); if (!close(g(y), x, 1e-7)) return 'réciproque fausse'; }
      for (const o of q.options) { if (o === q.answer) continue; const h = texFn(strip(o).replace(/^f\^\{-1\}\(y\) = /, '').replace(/y/g, 'x')); if ([0.37, 2.9, -4.1].every((x) => close(h(f(x)), x, 1e-7))) return 'distracteur juste'; }
      if (q.exactInput === undefined) return true;
      const [al, be, de] = tup(q.exactInput);
      return [0.37, 2.9, -4.1].every((x) => close((al * f(x) + be) / (f(x) + de), x, 1e-7)) || 'saisie réciproque fausse';
    }
    return TAG(q);
  };
  const APP = (q) => {
    if (/Dimensions du noyau et de l'image/.test(q.title)) {
      const comps = q.statement.match(/f\(x, y, z\) = \((.*)\)\$\. Déterminer/)[1].split(', \\, ');
      const M = comps.map((c) => { const f = texFn(c, ['x', 'y', 'z']); return [[1, 0, 0], [0, 1, 0], [0, 0, 1]].map((e) => f(e)); });
      const A = M.map((r) => r.slice()); let rk = 0;
      for (let c = 0; c < 3 && rk < 3; c++) { let p = rk; while (p < 3 && Math.abs(A[p][c]) < 1e-9) p++; if (p === 3) continue; [A[rk], A[p]] = [A[p], A[rk]]; for (let i = rk + 1; i < 3; i++) { const f = A[i][c] / A[rk][c]; A[i] = A[i].map((x, j) => x - f * A[rk][j]); } rk++; }
      const m = q.answer.match(/Ker\}\(f\) = (\d)\$ et \$\\text\{rg\}\(f\) = (\d)/);
      if (+m[1] !== 3 - rk || +m[2] !== rk) return 'dimensions attendues ' + [3 - rk, rk];
      return chkIn(q, [3 - rk, rk]);
    }
    return TAG(q);
  };

  return {
    'L1-LOG': LOG,
    'L1-APP': APP,
    'L1-EV1': TAG,
    'L1-REL': TAG,
    'L1-CNT': TAG,
    'L1-CMP': CMP,
    'L1-MAT': MAT,
    'L1-TAY': TAY,
    'L1-INT': INT,
    'L1-GEO': GEO
  };
})(V));
}
// ---- vérificateurs prioritaires L2/L3 ----
{
// Vérificateurs indépendants des familles L2/L3 ajoutées (patch_l23.js).
// Chaque fonction recalcule la réponse à partir de l'énoncé (forme QCM d'origine si convertie).
addPre(( (V) => {
  const val = (s) => V.val(String(s).replace(/\\dfrac/g, '\\frac').trim());
  const near = (a, b, e = 1e-9) => Math.abs(a - b) <= e * Math.max(1, Math.abs(a), Math.abs(b));
  const strip = (s) => String(s).replace(/\$/g, '');
  const rhs = (s) => strip(s).split('=').pop().trim();
  /** n-uplet « (a ; b ; c) » en fin de réponse */
  const tupA = (s) => { const m = strip(s).match(/\(([^()]*;[^()]*)\)\s*$/); return m ? m[1].split(';').map((x) => val(x)) : null; };
  const num = (s) => val(rhs(s));
  const cellv = (x) => { x = x.trim(); const v = val(x); return Number.isNaN(v) ? x : v; };
  const mats = (s, env = 'pmatrix') => [...String(s).matchAll(new RegExp(`\\\\begin\\{${env}\\}(.*?)\\\\end\\{${env}\\}`, 'g'))]
    .map((m) => m[1].split('\\\\').map((r) => r.split('&').map(cellv)));
  const perms = (n) => (n === 1 ? [[0]] : perms(n - 1).flatMap((p) => Array.from({ length: n }, (_, i) => [...p.slice(0, i), n - 1, ...p.slice(i)])));
  const sgn = (p) => { let s = 1; for (let i = 0; i < p.length; i++) for (let j = i + 1; j < p.length; j++) if (p[i] > p[j]) s = -s; return s; };
  const det = (M) => perms(M.length).reduce((acc, p) => acc + sgn(p) * p.reduce((pr, j, i) => pr * M[i][j], 1), 0);
  const mul = (A, B) => A.map((r) => B[0].map((_, j) => r.reduce((s, x, k) => s + x * B[k][j], 0)));
  const rank = (M0) => {
    const M = M0.map((r) => r.slice()); let r = 0;
    for (let c = 0; c < M[0].length && r < M.length; c++) {
      let p = r; while (p < M.length && Math.abs(M[p][c]) < 1e-12) p++;
      if (p === M.length) continue;
      [M[r], M[p]] = [M[p], M[r]];
      for (let i = 0; i < M.length; i++) if (i !== r) { const f = M[i][c] / M[r][c]; for (let k = 0; k < M[0].length; k++) M[i][k] -= f * M[r][k]; }
      r++;
    }
    return r;
  };
  const solve = (A, b) => { // Gauss, petite taille
    const n = A.length; const M = A.map((r, i) => [...r, b[i]]);
    for (let c = 0; c < n; c++) {
      let p = c; while (Math.abs(M[p][c]) < 1e-12) p++;
      [M[c], M[p]] = [M[p], M[c]];
      for (let i = 0; i < n; i++) if (i !== c) { const f = M[i][c] / M[c][c]; for (let k = c; k <= n; k++) M[i][k] -= f * M[c][k]; }
    }
    return M.map((r, i) => r[n] / r[i]);
  };
  const tuple = (s) => s.split(',').map((x) => val(x));
  const lin = (s, vars = 'xyz') => { // "2x - y + 3z" -> coefficients
    const out = Array(vars.length).fill(0);
    const t = String(s).replace(/\s+/g, '');
    const re = new RegExp(`([+-]?)(\\d*)([${vars}])`, 'g'); let m;
    while ((m = re.exec(t))) out[vars.indexOf(m[3])] += (m[1] === '-' ? -1 : 1) * (m[2] ? +m[2] : 1);
    return out;
  };
  /** compare un n-uplet recalculé à la réponse (et à la saisie attendue si présente) */
  const cmpT = (q, exp, msg) => {
    const got = tupA(q.answer);
    if (!got || got.length !== exp.length || got.some((x, i) => !near(x, exp[i]))) return `${msg}: attendu (${exp.join(';')}) / réponse ${q.answer}`;
    if (q.exactInput) {
      const e = String(q.exactInput).replace(/^\(|\)$/g, '').split(';').map((x) => { const m = x.match(/^(-?\d+)\/(\d+)$/); return m ? m[1] / m[2] : parseFloat(x.replace(',', '.')); });
      if (e.length !== exp.length || e.some((x, i) => !near(x, exp[i]))) return `${msg}: saisie ${q.exactInput} ≠ (${exp.join(';')})`;
    }
    return true;
  };
  const cmpN = (q, exp, msg) => (near(num(q.answer), exp) ? true : `${msg}: attendu ${exp} / réponse ${q.answer}`);
  const sorted = (a) => [...a].sort((x, y) => x - y);
  const eig2 = (A) => { const t = A[0][0] + A[1][1]; const d = A[0][0] * A[1][1] - A[0][1] * A[1][0]; const s = Math.sqrt(t * t - 4 * d); return [(t - s) / 2, (t + s) / 2]; };
  const st = (q) => String(q.statement);
  const grab = (s, re) => { const m = String(s).match(re); return m ? m : null; };

  const F = {}; // titre -> vérificateur
  // ---------------------------------------------------------------- L2-DET
  F['Matrice 2x2 non inversible : valeur du paramètre'] = (q) => {
    const M = mats(st(q))[0];
    const f = (x) => { const N = M.map((r) => r.map((c) => (c === 'x' ? x : c))); return det(N); };
    const x = -f(0) / (f(1) - f(0));
    return cmpN(q, x, 'paramètre');
  };
  F["Comatrice d'une matrice 2x2"] = (q) => {
    const [[a, b], [c, d]] = mats(st(q))[0];
    // cofacteurs C_ij = (-1)^{i+j} mineur
    return cmpT(q, [d, -c, -b, a], 'comatrice');
  };
  F['Système de Cramer 2x2'] = (q) => {
    const rows = [...st(q).matchAll(/([^{}\\]*?) = (-?\d+)(?= \\\\| \\end)/g)].map((m) => [lin(m[1], 'xy'), +m[2]]);
    const s = solve(rows.map((r) => r[0]), rows.map((r) => r[1]));
    return cmpT(q, s, 'Cramer 2');
  };
  F['Système de Cramer 3x3'] = (q) => {
    const rows = [...st(q).matchAll(/([^{}\\]*?) = (-?\d+)(?= \\\\| \\end)/g)].map((m) => [lin(m[1], 'xyz'), +m[2]]);
    if (rows.length !== 3) return 'système illisible';
    const D = +st(q).match(/déterminant \$(-?\d+)\$/)[1];
    if (D !== det(rows.map((r) => r[0]))) return 'déterminant annoncé faux';
    return cmpT(q, solve(rows.map((r) => r[0]), rows.map((r) => r[1])), 'Cramer 3');
  };
  F["Coefficient de l'inverse par la comatrice"] = (q) => {
    const M = mats(st(q))[0];
    const [, i, j] = st(q).match(/\(A\^\{-1\}\)_\{(\d)(\d)\}/);
    const D = det(M);
    if (!st(q).includes(`déterminant $${D}$`)) return 'déterminant annoncé faux';
    // inverse par Gauss : colonne j de A^{-1} = solution de A x = e_j
    const e = [0, 0, 0]; e[j - 1] = 1;
    return cmpN(q, solve(M, e)[i - 1], 'coef inverse');
  };
  F['Opérations élémentaires sur les lignes'] = (q) => {
    const d = +st(q).match(/\\det\(A\) = (-?\d+)/)[1];
    const R = [1, 2, 3].map((k) => st(q).match(new RegExp(`R_${k} = ([^$]*)\\$`))[1]);
    const C = R.map((r) => { const c = [0, 0, 0]; for (const m of r.replace(/\s+/g, '').matchAll(/([+-]?)(\d*)L_(\d)/g)) c[+m[3] - 1] += (m[1] === '-' ? -1 : 1) * (m[2] ? +m[2] : 1); return c; });
    return cmpN(q, det(C) * d, 'opérations');
  };
  F["Déterminant d'ordre n à structure"] = (q) => cmpN(q, det(mats(st(q))[0]), 'det structure');
  F["Valeurs d'un paramètre annulant un déterminant"] = (q) => {
    const M = mats(st(q))[0];
    const at = (m) => det(M.map((r) => r.map((c) => (typeof c === 'number' ? c : m + (val(c.replace(/^m\s*/, '').replace(/\s+/g, '')) || 0)))));
    const roots = []; for (let m = -40; m <= 40; m++) if (Math.abs(at(m)) < 1e-9) roots.push(m);
    if (roots.length !== 2) return 'racines entières: ' + roots.join(',');
    return cmpT(q, roots, 'paramètre det');
  };
  // ---------------------------------------------------------------- L2-RED1
  F["Valeurs propres d'une matrice triangulaire"] = (q) => {
    const M = mats(st(q))[0];
    const tri = M.every((r, i) => r.every((x, j) => i >= j || x === 0)) || M.every((r, i) => r.every((x, j) => i <= j || x === 0));
    if (!tri) return 'pas triangulaire';
    return cmpT(q, sorted(M.map((r, i) => r[i])), 'spectre triangulaire');
  };
  F["Polynôme caractéristique d'une matrice 2x2"] = (q) => { const A = mats(st(q))[0]; return cmpT(q, [-(A[0][0] + A[1][1]), det(A)], 'chi'); };
  F['Valeur propre associée à un vecteur propre'] = (q) => {
    const [A, v] = mats(st(q)); const vv = v.map((r) => r[0]);
    const Av = mul(A, v).map((r) => r[0]); const k = vv[0] !== 0 ? 0 : 1; const l = Av[k] / vv[k];
    if (!near(Av[1 - k], l * vv[1 - k])) return 'v non propre';
    return cmpN(q, l, 'vp');
  };
  F["Spectre d'un polynôme en A"] = (q) => {
    const A = mats(st(q))[0];
    const B = st(q).match(/B = ([^$]*)\$/)[1].replace(/\s+/g, '');
    const cA2 = 1; const mA = B.match(/([+-]\d*)A(?!\^)/); const mI = B.match(/([+-]\d*)I_2/);
    const p = mA ? (mA[1] === '+' ? 1 : mA[1] === '-' ? -1 : +mA[1]) : 0; const r = mI ? (mI[1] === '+' ? 1 : mI[1] === '-' ? -1 : +mI[1]) : 0;
    const A2 = mul(A, A); const M = A2.map((row, i) => row.map((x, j) => cA2 * x + p * A[i][j] + (i === j ? r : 0)));
    return cmpT(q, eig2(M), 'spectre P(A)');
  };
  F["Composante d'un vecteur propre"] = (q) => {
    const A = mats(st(q))[0]; const l = +st(q).match(/\\lambda = (-?\d+)\$ pour valeur propre/)[1];
    const x = +mats(st(q))[1][0][0]; const y = num(q.answer);
    const Av = [A[0][0] * x + A[0][1] * y, A[1][0] * x + A[1][1] * y];
    return (near(Av[0], l * x) && near(Av[1], l * y)) || 'Av ≠ λv';
  };
  F["Dimension d'un sous-espace propre"] = (q) => {
    const A = mats(st(q))[0]; const l = +st(q).match(/E_\{(-?\d+)\}/)[1];
    return cmpN(q, 3 - rank(A.map((r, i) => r.map((x, j) => x - (i === j ? l : 0)))), 'dim E');
  };
  F["Trace d'une puissance par diagonalisation"] = (q) => {
    const A = mats(st(q))[0]; const n = +st(q).match(/A\^\{(\d+)\}/)[1];
    let P = A; for (let k = 1; k < n; k++) P = mul(P, A);
    return cmpN(q, P[0][0] + P[1][1], 'trace puissance');
  };
  F["Puissance d'une matrice diagonalisable"] = (q) => { const A = mats(st(q))[0]; const P = mul(mul(A, A), A); return cmpT(q, P.flat(), 'A^3'); };
  // ---------------------------------------------------------------- L2-RED2
  F['Polynôme annulateur de degré 2'] = (q) => { const A = mats(st(q))[0]; return cmpT(q, [-(A[0][0] + A[1][1]), det(A)], 'annulateur'); };
  F["Carré d'une matrice strictement triangulaire"] = (q) => { const N = mats(st(q))[0]; return cmpN(q, mul(N, N)[0][2], 'N^2'); };
  F['Puissance par Cayley-Hamilton'] = (q) => {
    const A = mats(st(q))[0]; const A3 = mul(mul(A, A), A);
    // A^3 = alpha A + beta I : résolution sur les coefficients (0,1)/(1,0) puis diagonale
    const al = A[0][1] !== 0 ? A3[0][1] / A[0][1] : A3[1][0] / A[1][0]; const be = A3[0][0] - al * A[0][0];
    if (!near(A3[1][1], al * A[1][1] + be)) return 'A^3 non combinaison';
    return cmpT(q, [al, be], 'A^3');
  };
  F['Inverse par Cayley-Hamilton (coefficients)'] = (q) => {
    const A = mats(st(q))[0]; const D = det(A); const Ai = [[A[1][1] / D, -A[0][1] / D], [-A[1][0] / D, A[0][0] / D]];
    const al = A[0][1] !== 0 ? Ai[0][1] / A[0][1] : Ai[1][0] / A[1][0]; const be = Ai[0][0] - al * A[0][0];
    return cmpT(q, [al, be], 'inverse CH');
  };
  F['Degré du polynôme minimal'] = (q) => {
    const T = mats(st(q))[0]; const I = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
    const ev = [...new Set(T.map((r, i) => r[i]))];
    const sub = (l) => T.map((r, i) => r.map((x, j) => x - (i === j ? l : 0)));
    // degré minimal : plus petit produit de (T - l_i)^{k_i} nul
    let best = 9;
    const cand = ev.length === 2 ? [[1, 1], [2, 1], [1, 2], [2, 2]] : [[1], [2], [3]];
    for (const ks of cand) { let P = I; ev.forEach((l, i) => { for (let k = 0; k < ks[i]; k++) P = mul(P, sub(l)); }); if (P.flat().every((x) => x === 0)) best = Math.min(best, ks.reduce((a, b) => a + b, 0)); }
    return cmpN(q, best, 'deg mu');
  };
  F['Trigonalisation : valeur propre double'] = (q) => {
    const A = mats(st(q))[0]; const l = (A[0][0] + A[1][1]) / 2;
    if (!near(det(A), l * l)) return 'pas de racine double';
    const y = A[0][1] !== 0 ? -(A[0][0] - l) / A[0][1] : -A[1][0] / (A[1][1] - l);
    return cmpT(q, [l, y], 'trigonalisation');
  };
  F["Puissance n-ième d'une matrice λI + N"] = (q) => {
    const A = mats(st(q))[0]; const n = +st(q).match(/A\^\{(\d+)\}/)[1];
    let P = A; for (let k = 1; k < n; k++) P = mul(P, A);
    return cmpN(q, P[0][2], '(A^n)_13');
  };
  F['Polynôme annulateur scindé à racines simples'] = (q) => {
    const m = st(q).match(/\\dim E_\{(-?\d+)\}\(A\) ; \\dim E_\{(-?\d+)\}/); const a = +m[1], b = +m[2];
    const t = +st(q).match(/\\mathrm\{Tr\}\(A\) = (-?\d+)/)[1];
    for (let p = 1; p <= 2; p++) if (p * a + (3 - p) * b === t) return cmpT(q, [p, 3 - p], 'multiplicités');
    return 'aucune solution';
  };
  // ---------------------------------------------------------------- L2-DUA
  F["Dimension de l'orthogonal d'un sous-espace"] = (q) => {
    const T = [...st(q).matchAll(/= \(([-\d, ]+)\)/g)].map((m) => tuple(m[1]));
    return cmpN(q, 4 - rank(T), 'dim F°');
  };
  F["Vecteur du noyau d'une forme linéaire"] = (q) => {
    const c = lin(st(q).match(/\\varphi\(x, y, z\) = ([^$]*)\$/)[1]);
    const m = st(q).match(/u = \((-?\d+), m, (-?\d+)\)/);
    return cmpN(q, -(c[0] * +m[1] + c[2] * +m[2]) / c[1], 'noyau');
  };
  F['Forme linéaire prescrite sur une base'] = (q) => {
    const e1 = tuple(st(q).match(/e_1 = \(([^)]*)\)/)[1]); const e2 = tuple(st(q).match(/e_2 = \(([^)]*)\)/)[1]);
    const a = +st(q).match(/\\varphi\(e_1\) = (-?\d+)/)[1]; const b = +st(q).match(/\\varphi\(e_2\) = (-?\d+)/)[1];
    return cmpT(q, solve([e1, e2], [a, b]), 'forme prescrite');
  };
  F["Forme linéaire de l'orthogonal d'une droite"] = (q) => {
    const u = tuple(st(q).match(/u = \(([^)]*)\)/)[1]);
    const phi = st(q).match(/\\varphi = ([^$]*)\$/)[1].replace(/\s+/g, '');
    const co = [1, 2].map((k) => { const m = phi.match(new RegExp(`([+-]?\\d*)e_${k}\\^\\*`)); return m ? (m[1] === '' || m[1] === '+' ? 1 : m[1] === '-' ? -1 : +m[1]) : 0; });
    return cmpN(q, -(co[0] * u[0] + co[1] * u[1]) / u[2], 'orthogonal droite');
  };
  F['Base antéduale'] = (q) => {
    const f1 = lin(st(q).match(/\\varphi_1\(x, y\) = ([^$]*)\$/)[1], 'xy'); const f2 = lin(st(q).match(/\\varphi_2\(x, y\) = ([^$]*)\$/)[1], 'xy');
    const w = +st(q).match(/vecteur \$e_(\d)\$/)[1];
    return cmpT(q, solve([f1, f2], w === 1 ? [1, 0] : [0, 1]), 'antéduale');
  };

  // ---------------------------------------------------------------- outils polynômes en x, y
  const P2 = (s) => { // "-3x^2y + 2xy - y^3 + 4" -> [[c, i, j]]
    const t = String(s).replace(/\s+/g, ''); const out = []; const re = /([+-]?)(\d*)((?:x(?:\^(\d))?)?)((?:y(?:\^(\d))?)?)/g; let m;
    while ((m = re.exec(t)) && m[0] !== '') out.push([(m[1] === '-' ? -1 : 1) * (m[2] ? +m[2] : 1), m[3] ? (m[4] ? +m[4] : 1) : 0, m[5] ? (m[6] ? +m[6] : 1) : 0]);
    return out;
  };
  const ev2 = (P, x, y) => P.reduce((s, [c, i, j]) => s + c * x ** i * y ** j, 0);
  const dx = (P) => P.filter(([, i]) => i > 0).map(([c, i, j]) => [c * i, i - 1, j]);
  const dy = (P) => P.filter(([, , j]) => j > 0).map(([c, i, j]) => [c * j, i, j - 1]);
  const dot = (a, b) => a.reduce((s, x, i) => s + x * b[i], 0);
  const T3 = (s, name) => tuple(st({ statement: s }).match(new RegExp(`${name} = \\(([^)]*)\\)`))[1]);
  const fv = (s) => { const m = String(s).match(/^(-?)\\frac\{(\d+)\}\{(\d+)\}$/); return m ? (m[1] ? -1 : 1) * m[2] / m[3] : val(s); };
  // ---------------------------------------------------------------- L2-PRE
  F['Orthogonalité dans $\\mathbb{R}^3$ euclidien'] = (q) => {
    const u = T3(st(q), 'u'); const m = st(q).match(/v = \((-?\d+), (-?\d+), m\)/);
    return cmpN(q, -(u[0] * +m[1] + u[1] * +m[2]) / u[2], 'orthogonalité');
  };
  const bil = (s) => { const C = [[0, 0], [0, 0]]; for (const m of String(s).replace(/\s+/g, '').matchAll(/([+-]?)(\d*)x_(\d)y_(\d)/g)) C[+m[3] - 1][+m[4] - 1] += (m[1] === '-' ? -1 : 1) * (m[2] ? +m[2] : 1); return C; };
  F['Calcul dans un produit scalaire non canonique'] = (q) => {
    const C = bil(st(q).match(/\\langle x, y \\rangle = ([^$]*)\$/)[1]); const u = T3(st(q), 'u'); const v = T3(st(q), 'v');
    return cmpN(q, dot(u, mul(C, v.map((x) => [x])).map((r) => r[0])), 'ps');
  };
  F['Reconnaître un produit scalaire'] = (q) => {
    const C = bil(st(q).match(/\\varphi\(x, y\) = ([^$]*)\$/)[1]);
    let k;
    if (C[0][1] !== C[1][0]) k = 'symétrique';
    else { const D = C[0][0] * C[1][1] - C[0][1] ** 2; const t = C[0][0] + C[1][1]; k = D > 0 && t > 0 ? 'ok' : D === 0 && t > 0 ? 'définie' : D < 0 ? 'négatives' : '?'; }
    const a = q.answer;
    return (k === 'ok' ? /^C'est un produit/.test(a) : a.includes(k)) || `attendu ${k} / ${a}`;
  };
  F['Distance à une droite vectorielle'] = (q) => { const u = T3(st(q), 'u'); const v = T3(st(q), 'v'); return cmpN(q, dot(v, v) - dot(u, v) ** 2 / dot(u, u), 'd droite'); };
  const plane = (s) => lin(s.match(/P : ([^$]*?) = 0\$/)[1]);
  F['Distance à un plan vectoriel'] = (q) => { const n = plane(st(q)); const v = T3(st(q), 'v'); return cmpN(q, dot(n, v) ** 2 / dot(n, n), 'd plan'); };
  F['Projection orthogonale sur un plan'] = (q) => {
    const n = plane(st(q)); const v = T3(st(q), 'v'); const k = dot(n, v) / dot(n, n);
    const p = v.map((x, i) => x - k * n[i]); if (Math.abs(dot(p, n)) > 1e-9) return 'p non dans P';
    return cmpT(q, p, 'proj plan');
  };
  F['Meilleure approximation affine en moyenne quadratique'] = (q) => {
    const f = st(q).match(/f\(t\) = ([^$]*)\$/)[1].replace(/\s+/g, '');
    const c = { 2: 0, 3: 0 }; for (const m of f.matchAll(/([+-]?)(\d*)t\^(\d)/g)) c[+m[3]] = (m[1] === '-' ? -1 : 1) * (m[2] ? +m[2] : 1);
    const I = (k) => c[2] / (k + 3) + c[3] / (k + 4); // int t^k f
    return cmpT(q, solve([[1, 1 / 2], [1 / 2, 1 / 3]], [I(0), I(1)]), 'moindres carrés');
  };
  F['Déterminant de Gram'] = (q) => { const u = T3(st(q), 'u'); const v = T3(st(q), 'v'); return cmpN(q, dot(u, u) * dot(v, v) - dot(u, v) ** 2, 'Gram'); };
  // ---------------------------------------------------------------- L2-SYM
  F["Matrice d'une forme quadratique"] = (q) => {
    const P = P2(st(q).match(/q\(x, y\) = ([^$]*)\$/)[1]); const co = (i, j) => P.filter((t) => t[1] === i && t[2] === j).reduce((s, t) => s + t[0], 0);
    return cmpT(q, [co(2, 0), co(1, 1) / 2, co(0, 2)], 'matrice q');
  };
  F["Angle d'une rotation du plan"] = (q) => {
    const M = st(q).match(/R = \\begin\{pmatrix\} (.*?) \\end\{pmatrix\}/)[1].split('\\\\').map((r) => r.split('&').map((x) => { x = x.trim().replace(/\\frac\{\\sqrt\{3\}\}\{2\}/, String(Math.sqrt(3) / 2)); return x.startsWith('-') && x.includes('frac') ? -fv(x.slice(1)) : fv(x); }));
    const th = Math.atan2(M[1][0], M[0][0]); const k = num(q.answer);
    if (!(near(M[0][1], -M[1][0]) && near(M[1][1], M[0][0]))) return 'pas une rotation';
    return (k > -6 && k <= 6 && near(k * Math.PI / 6, th)) || `angle ${th}`;
  };
  F["Vecteur propre d'une matrice symétrique"] = (q) => { const [S, x] = mats(st(q)); const v = x.map((r) => r[0]); const w = mul(S, x).map((r) => r[0]); const k = v[0] ? 0 : 1; return cmpN(q, w[k] / v[k], 'vp sym'); };
  F["Réduction de Gauss d'une forme quadratique"] = (q) => {
    const P = P2(st(q).match(/q\(x, y\) = ([^$]*)\$ sous/)[1]); const co = (i, j) => P.filter((t) => t[1] === i && t[2] === j).reduce((s, t) => s + t[0], 0);
    const a = co(2, 0), b2 = co(1, 1), c = co(0, 2); const al = b2 / (2 * a);
    return cmpT(q, [al, c - a * al * al], 'Gauss');
  };
  const eigSym = (S) => { // valeurs propres d'une matrice symétrique 3x3 entière : racines entières de chi
    const ch = (l) => det(S.map((r, i) => r.map((x, j) => x - (i === j ? l : 0)))); const out = [];
    for (let l = -80; l <= 80; l++) { if (Math.abs(ch(l)) < 1e-9) { // multiplicité
      let mlt = 1; const h = 1e-3; if (Math.abs((ch(l + h) - ch(l - h)) / (2 * h)) < 1e-4) mlt = Math.abs((ch(l + h) + ch(l - h) - 2 * ch(l)) / (h * h)) < 1e-3 ? 3 : 2;
      for (let k = 0; k < mlt; k++) out.push(l); } }
    return out;
  };
  F["Spectre d'une matrice symétrique $aI_3 + uu^{T}$"] = (q) => cmpT(q, eigSym(mats(st(q))[0]), 'spectre aI+uu^T');
  F["Extremum d'une forme quadratique sur le cercle unité"] = (q) => {
    const P = P2(st(q).match(/q\(x, y\) = ([^$]*)\$/)[1]); const co = (i, j) => P.filter((t) => t[1] === i && t[2] === j).reduce((s, t) => s + t[0], 0);
    const e = eig2([[co(2, 0), co(1, 1) / 2], [co(1, 1) / 2, co(0, 2)]]);
    return cmpN(q, /maximale/.test(st(q)) ? e[1] : e[0], 'extremum cercle');
  };
  F["Rotation de l'espace : angle"] = (q) => {
    const R = mats(st(q))[0]; const RT = R[0].map((_, j) => R.map((r) => r[j])); const I = mul(R, RT);
    if (!I.every((r, i) => r.every((x, j) => x === (i === j ? 1 : 0))) || det(R) !== 1) return 'pas une rotation';
    return cmpN(q, (R[0][0] + R[1][1] + R[2][2] - 1) / 2, 'cos rotation');
  };
  F["Extremum d'une forme quadratique sur la sphère unité"] = (q) => {
    const f = st(q).match(/q\(x, y, z\) = ([^$]*)\$/)[1].replace(/\s+/g, ''); const S = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]; const ix = { x: 0, y: 1, z: 2 };
    for (const m of f.matchAll(/([+-]?)(\d*)([xyz])(\^2|[xyz])/g)) { const c = (m[1] === '-' ? -1 : 1) * (m[2] ? +m[2] : 1); if (m[4] === '^2') S[ix[m[3]]][ix[m[3]]] += c; else { S[ix[m[3]]][ix[m[4]]] += c / 2; S[ix[m[4]]][ix[m[3]]] += c / 2; } }
    const e = eigSym(S); return cmpN(q, /maximale/.test(st(q)) ? Math.max(...e) : Math.min(...e), 'extremum sphère');
  };
  // ---------------------------------------------------------------- L2-SER (sommes numériques par sommation directe)
  const sumNum = (f, n0, N = 200000) => { let s = 0; for (let n = n0; n < N; n++) s += f(n); return s; };
  const texNum = (s) => Function('n', 'return ' + String(s).replace(/\\left|\\right/g, '').replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '(($1)/($2))').replace(/(\d)n/g, '$1*n').replace(/n\(/g, 'n*(').replace(/\)\(/g, ')*(').replace(/(\d)\(/g, '$1*(').replace(/\s+/g, ''));
  F['Série télescopique simple'] = (q) => {
    const m = st(q).match(/\\sum_\{n=(\d+)\}\^\{\+\\infty\} \\left\((.*)\\right\)\$/); const f = texNum(m[2]);
    return near(sumNum(f, +m[1], 2e6), num(q.answer), 1e-5) || 'somme télescopique';
  };
  F["Règle de d'Alembert"] = (q) => {
    const u = st(q).match(/u_n = (.*?)\$\. Calculer/)[1]; let r;
    let m;
    if ((m = u.match(/^(?:n(?:\^\{?(\d)\}?)? )?\\left\((-?\\frac\{\d+\}\{\d+\}|\d+)\\right\)\^n$/))) r = fv(m[2]);
    else if (/n!|\(2n\)!/.test(u)) r = 0;
    else return 'forme inconnue ' + u;
    return cmpN(q, r, "d'Alembert");
  };
  F['Série alternée : majoration du reste'] = (q) => {
    const den = st(q).match(/\\frac\{\(-1\)\^n\}\{([^}]*)\}/)[1]; const N = +st(q).match(/R_\{(\d+)\}/)[1];
    const f = Function('n', 'return ' + den.replace(/(\d)n/g, '$1*n').replace(/\s+/g, ''));
    return near(val(strip(q.answer).split('\\leq').pop()), 1 / f(N + 1)) || 'reste alterné';
  };
  F['Règle de Cauchy'] = (q) => {
    const m = st(q).match(/\\frac\{([^}]*)\}\{([^}]*)\}\\right\)\^n/); const a = lin(m[1], 'n')[0]; const c = lin(m[2], 'n')[0];
    return cmpN(q, a / c, 'Cauchy');
  };
  F['Produit de Cauchy de deux séries géométriques'] = (q) => {
    const xs = [...st(q).matchAll(/\\left\((-?\\frac\{\d+\}\{\d+\})\\right\)\^/g)].map((m) => fv(m[1]));
    return cmpN(q, 1 / ((1 - xs[0]) * (1 - xs[1])), 'produit Cauchy');
  };
  F['Série alternée : rang garantissant une précision'] = (q) => {
    const den = st(q).match(/\\frac\{\(-1\)\^n\}\{([^}]*)\}/)[1]; const M = 1 / fv(st(q).match(/\\leq (\\frac\{1\}\{\d+\})/)[1]);
    const f = Function('n', 'return ' + den.replace(/(\d)n/g, '$1*n').replace(/\s+/g, ''));
    let N = 0; while (1 / f(N + 1) > 1 / M + 1e-15) N++;
    return cmpN(q, N, 'rang alterné');
  };
  F["Série télescopique d'ordre 2"] = (q) => {
    const m = st(q).match(/\\sum_\{n=1\}\^\{\+\\infty\} (\\frac\{\d+\}\{[^$]*\})\$/); const f = texNum(m[1]);
    return near(sumNum(f, 1, 1e6), num(q.answer), 1e-6) || 'somme ordre 2 ' + sumNum(f, 1, 1e6);
  };
  F['Série $\\sum n^2 x^n$'] = (q) => { const x = fv(st(q).match(/\\left\((-?\\frac\{\d+\}\{\d+\})\\right\)\^n/)[1]); return cmpN(q, sumNum((n) => n * n * x ** n, 1, 3000), 'n^2 x^n'); };
  // ---------------------------------------------------------------- L2-CAL
  F['Matrice jacobienne'] = (q) => {
    const m = st(q).match(/F\(x, y\) = \((.*?), (.*?)\)\$/); const p = st(q).match(/J_F\((-?\d+), (-?\d+)\)/); const x = +p[1], y = +p[2];
    const A = P2(m[1]), B = P2(m[2]);
    return cmpT(q, [ev2(dx(A), x, y), ev2(dy(A), x, y), ev2(dx(B), x, y), ev2(dy(B), x, y)], 'jacobienne');
  };
  F['Dérivée partielle croisée'] = (q) => {
    const f = P2(st(q).match(/f\(x, y\) = ([^$]*)\$/)[1]); const p = st(q).match(/\}\((-?\d+), (-?\d+)\)\$\./);
    return cmpN(q, ev2(dx(dy(f)), +p[1], +p[2]), 'dxy');
  };
  F["Dérivée d'une fonction composée"] = (q) => {
    const f = P2(st(q).match(/f\(x, y\) = ([^$]*)\$/)[1]);
    const xt = P2(st(q).match(/x\(t\) = ([^$]*)\$/)[1].replace(/t/g, 'x')); const yt = P2(st(q).match(/y\(t\) = ([^$]*)\$/)[1].replace(/t/g, 'x'));
    const t0 = +st(q).match(/g'\((-?\d+)\)/)[1]; const g = (t) => ev2(f, ev2(xt, t, 0), ev2(yt, t, 0)); const h = 1e-5;
    return near((g(t0 + h) - g(t0 - h)) / (2 * h), num(q.answer), 1e-6) || 'chain rule';
  };
  F["Jacobien d'un changement de variables"] = (q) => {
    const m = st(q).match(/\\varphi\(u, v\) = \((.*?), (.*?)\)\$/); const p = st(q).match(/J_\\varphi\((-?\d+), (-?\d+)\)/);
    const A = P2(m[1].replace(/u/g, 'x').replace(/v/g, 'y')), B = P2(m[2].replace(/u/g, 'x').replace(/v/g, 'y')); const x = +p[1], y = +p[2];
    return cmpN(q, ev2(dx(A), x, y) * ev2(dy(B), x, y) - ev2(dy(A), x, y) * ev2(dx(B), x, y), 'jacobien');
  };
  F['Hessienne en un point'] = (q) => {
    const f = P2(st(q).match(/f\(x, y\) = ([^$]*)\$/)[1]); const p = st(q).match(/point \$\((-?\d+), (-?\d+)\)\$/); const x = +p[1], y = +p[2];
    return cmpT(q, [ev2(dx(dx(f)), x, y), ev2(dx(dy(f)), x, y), ev2(dy(dy(f)), x, y)], 'hessienne');
  };
  F['Plan tangent à une surface'] = (q) => {
    const f = P2(st(q).match(/z = ([^$]*)\$\. Son/)[1]); const p = st(q).match(/abscisses \$\((-?\d+), (-?\d+)\)\$/); const x = +p[1], y = +p[2];
    const a = ev2(dx(f), x, y), b = ev2(dy(f), x, y); return cmpT(q, [a, b, ev2(f, x, y) - a * x - b * y], 'plan tangent');
  };
  F["Valeur d'un extremum local"] = (q) => {
    const f = P2(st(q).match(/f\(x, y\) = ([^$]*)\$/)[1]); const lab = /un minimum/.test(st(q)) ? 'min' : 'max'; const vals = [];
    for (let x = -10; x <= 10; x++) for (let y = -10; y <= 10; y++) {
      if (ev2(dx(f), x, y) !== 0 || ev2(dy(f), x, y) !== 0) continue;
      const r = ev2(dx(dx(f)), x, y), s = ev2(dx(dy(f)), x, y), t = ev2(dy(dy(f)), x, y);
      if (r * t - s * s > 0 && (lab === 'min' ? r > 0 : r < 0)) vals.push(ev2(f, x, y));
    }
    return vals.length === 1 ? cmpN(q, vals[0], 'extremum') : 'extrema trouvés: ' + vals.join(',');
  };
  F['Extremum sous contrainte (multiplicateur de Lagrange)'] = (q) => {
    const m = st(q).match(/contrainte \$([^$=]*) = (-?\d+)\$/); const [a, b] = lin(m[1], 'xy'); const c = +m[2];
    return cmpN(q, c * c / (a * a + b * b), 'Lagrange');
  };

  // ---------------------------------------------------------------- outils analyse (part C)
  /** LaTeX simple -> fonction JS d'une variable v */
  const fn = (tex, v = 'x') => {
    let s = String(tex).replace(/\\left|\\right|\\,/g, '').replace(/\s+/g, '');
    for (let k = 0; k < 5; k++) {
      s = s.replace(/\\[dt]?frac\{([^{}]*)\}\{([^{}]*)\}/g, '(($1)/($2))');
      s = s.replace(/\\sqrt\{([^{}]*)\}/g, 'Math.sqrt($1)');
      s = s.replace(/e\^\{([^{}]*)\}/g, 'Math.exp($1)');
      s = s.replace(/\^\{([^{}]*)\}/g, '^($1)');
    }
    s = s.replace(/\\cos/g, 'Math.cos').replace(/\\sin/g, 'Math.sin').replace(/\\ln/g, 'Math.log').replace(/\\times|\\cdot/g, '*');
    s = s.replace(new RegExp(`(\\d|\\))(?=[${v}(M])`, 'g'), '$1*').replace(new RegExp(`${v}(?=[(${v}M\\d])`, 'g'), `${v}*`);
    for (let k = 0; k < 4; k++) s = s.replace(/([a-z]|\d+(?:\.\d+)?|\((?:[^()]|\([^()]*\))*\))\^(\d+|\([^()]*\))/g, 'Math.pow($1,$2)');
    // eslint-disable-next-line no-new-func
    return Function(v, 'return ' + s);
  };
  const simp = (f, a, b, n = 4000) => { const h = (b - a) / n; let s = f(a) + f(b); for (let i = 1; i < n; i++) s += f(a + i * h) * (i % 2 ? 4 : 2); return (s * h) / 3; };
  const cmpA = (q, exp, msg, e = 1e-6) => (Math.abs(num(q.answer) - exp) <= e * Math.max(1, Math.abs(exp)) ? true : `${msg}: attendu ≈ ${exp} / réponse ${q.answer}`);
  // ---------------------------------------------------------------- L2-RIE
  F["Valeur moyenne d'une fonction"] = (q) => {
    const m = +st(q).match(/sur \$\[0, (\d+)\]\$/)[1]; const f = fn(st(q).match(/de \$f\(x\) = ([^$]*)\$/)[1]);
    return cmpA(q, simp(f, 0, m) / m, 'moyenne');
  };
  F['Somme de Riemann à gauche'] = (q) => {
    const n = +st(q).match(/R_\{(\d+)\}/)[1]; const f = fn(st(q).match(/f\(x\) = ([^$]*)\$/)[1]);
    let S = 0; for (let k = 0; k < n; k++) S += f(k / n); return cmpN(q, S / n, 'Riemann gauche');
  };
  F['Intégrale de la partie entière'] = (q) => {
    const m = st(q).match(/\\int_\{(-?\d+)\}\^\{([^}]*(?:\}\{\d+\})?)\}/); const a = +m[1]; const b = fv(m[2].replace(/^\\frac\{(\d+)\}\{(\d+)$/, '\\frac{$1}{$2}'));
    return cmpA(q, simp((x) => Math.floor(x + 1e-12), a, b, 200000), 'partie entière', 1e-4);
  };
  F["Limite d'intégrales par convergence uniforme"] = (q) => {
    const p = st(q).match(/\\frac\{n\((.*?)\) \+ (\d+)\}\{n \+ 1\}/); const f = fn(p[1]); const c = +p[2]; const n = 1e7;
    return cmpA(q, simp((x) => (n * f(x) + c) / (n + 1), 0, 1), 'CVU', 1e-5);
  };
  F["Dérivée d'une intégrale à bornes variables"] = (q) => {
    const g = fn(st(q).match(/\\int_\{x\}\^\{x\^2\} \((.*?)\) \\, dt/)[1], 't'); const x0 = +st(q).match(/F'\((-?\d+)\)/)[1];
    const F2 = (x) => simp(g, x, x * x, 2000); const h = 1e-4;
    return cmpA(q, (F2(x0 + h) - F2(x0 - h)) / (2 * h), 'bornes variables', 1e-5);
  };
  F["Limite d'une intégrale par développement limité"] = (q) => {
    const g = fn(st(q).match(/g\(t\) = ([^$]*)\$/)[1], 't'); const x = 1e-4;
    return cmpA(q, simp((t) => g(t) - g(0), 0, x, 200) / (x * x), 'limite DL', 1e-3);
  };
  F['Intégrales de Wallis'] = (q) => { const n = +st(q).match(/W_\{(\d+)\}\$\./)[1]; return cmpA(q, simp((t) => Math.sin(t) ** n, 0, Math.PI / 2), 'Wallis'); };
  F['Limite de somme de Riemann (intégrale bêta)'] = (q) => {
    const m = st(q).match(/\\sum_\{k=1\}\^\{n\} (.*)\$\./)[1].replace(/\\frac\{k\}\{n\}/g, 'x'); const f = fn(m);
    return cmpA(q, simp(f, 0, 1), 'bêta');
  };
  // ---------------------------------------------------------------- L2-ING
  F["Intégrale impropre d'une puissance"] = (q) => {
    const m = st(q).match(/\\int_\{(\d+)\}\^\{\+\\infty\} \\frac\{(\d+)\}\{\(x \+ (\d+)\)\^\{(\d+)\}\}/); const [a, c, b, k] = m.slice(1).map(Number);
    // changement u = 1/(x + b) : int_0^{1/(a+b)} c u^{k-2} du
    return cmpA(q, simp((u) => c * u ** (k - 2), 0, 1 / (a + b)), 'puissance');
  };
  F['Équivalent de Riemann en $+\\infty$'] = (q) => {
    const m = st(q).match(/f\(x\) = \\frac\{([^}]*)\}\{([^}]*)\}/); const f = (x) => fn(m[1])(x) / fn(m[2])(x);
    const al = -Math.log(f(1e6) / f(1e5)) / Math.log(10); return cmpA(q, Math.round(al), 'alpha') === true && Math.abs(al - Math.round(al)) < 1e-3 ? true : 'alpha ' + al;
  };
  F['Intégrale de polynôme × exponentielle'] = (q) => {
    const m = st(q).match(/\\int_0\^\{\+\\infty\} \((.*?)\) (e\^\{[^}]*\})/); const f = fn('(' + m[1] + ')*' + m[2]);
    return cmpA(q, simp(f, 0, 60, 60000), 'poly exp');
  };
  F['Intégrale de type gaussien (puissance impaire)'] = (q) => {
    const m = st(q).match(/\\int_0\^\{\+\\infty\} (.*?) \\, dx/)[1].replace(' ', '*'); return cmpA(q, simp(fn(m), 0, 12, 60000), 'gauss impair');
  };
  F["Seuil de convergence d'une intégrale"] = (q) => { const b = +st(q).match(/x\^\{(\d+)\} \+/)[1]; let a = 0; while (b - (a + 1) > 1) a++; return cmpN(q, a, 'seuil'); };
  F['Intégrale impropre en une borne finie'] = (q) => {
    const m = st(q).match(/\\int_\{(-?\d+)\}\^\{(-?\d+)\} \\frac\{(\d+)\}\{\\sqrt\{([^}]*)\}\}/); const a = +m[1], b = +m[2], c = +m[3];
    const g = fn(m[4]); if (Math.abs(g(a)) > 1e-12) return 'borne singulière fausse';
    // u = sqrt(x - a) : int = 2c sqrt(b - a)
    return cmpA(q, simp((u) => 2 * c * u / Math.sqrt(g(a + u * u)), 1e-9, Math.sqrt(b - a)), 'borne finie', 1e-4);
  };
  F["Calcul d'une intégrale de Bertrand"] = (q) => {
    const m = st(q).match(/\\int_\{e(?:\^\{(\d+)\})?\}\^\{\+\\infty\} \\frac\{dx\}\{x \(\\ln x\)\^\{(\d+)\}\}/); const lo = m[1] ? +m[1] : 1; const k = +m[2];
    // u = ln x puis w = 1/u : int_0^{1/lo} w^{k-2} dw
    return cmpA(q, simp((w) => w ** (k - 2), 0, 1 / lo), 'Bertrand');
  };
  F['Convergence aux deux bornes'] = (q) => {
    const m = st(q).match(/a \\in \\\{(-?\d+), \\dots, (-?\d+)\\\}/); const be = +st(q).match(/x\^\{(\d+)\}\}/)[1]; let c = 0;
    for (let a = +m[1]; a <= +m[2]; a++) if (a > -1 && a - be < -1) c++;
    return cmpN(q, c, 'comptage');
  };
  // ---------------------------------------------------------------- L2-EDO (vérification par substitution numérique)
  const ode1 = (s) => { const m = s.match(/\$y' (?:([+-]) (\d*)y) = (-?\d+)\$/); return { a: (m[1] === '-' ? -1 : 1) * (m[2] ? +m[2] : 1), b: +m[3] }; };
  F["Problème de Cauchy d'ordre 1 à second membre constant"] = (q) => {
    const { a, b } = ode1(st(q)); const y0 = +st(q).match(/y\(0\) = (-?\d+)/)[1]; const [C, D] = tupA(q.answer);
    const y = (t) => C * Math.exp(-a * t) + D; const yp = (t) => -a * C * Math.exp(-a * t);
    if (!near(y(0), y0) || ![0, 0.3, 1].every((t) => near(yp(t) + a * y(t), b))) return 'Cauchy 1 faux';
    return cmpT(q, [C, D], 'Cauchy 1');
  };
  F['Solution particulière polynomiale'] = (q) => {
    const m = st(q).match(/\$y' ([+-]) (\d*)y = ([^$]*)\$/); const a = (m[1] === '-' ? -1 : 1) * (m[3 - 1] ? +m[2] : 1); const r = P2(m[3].replace(/t/g, 'x'));
    const al = ev2(r, 1, 0) - ev2(r, 0, 0), be = ev2(r, 0, 0);
    const p = al / a, qq = (be - p) / a; return cmpT(q, [p, qq], 'sol poly');
  };
  const ode2 = (s) => { const m = s.match(/\$(y''[^=$]*) = /)[1].replace(/\s+/g, ''); let p = 0, qq = 0; for (const t of m.matchAll(/([+-])(\d*)(y'|y)(?!')/g)) { const c = (t[1] === '-' ? -1 : 1) * (t[2] ? +t[2] : 1); if (t[3] === "y'") p = c; else qq = c; } return { p, q: qq }; };
  F['Second membre exponentiel (ordre 2)'] = (q) => {
    const { p, q: qq } = ode2(st(q)); const m = st(q).match(/= (-?\d*)e\^\{(-?\d*)t\}\$ admet/); const c = m[1] === '' ? 1 : m[1] === '-' ? -1 : +m[1]; const k = m[2] === '' ? 1 : m[2] === '-' ? -1 : +m[2];
    return cmpN(q, c / (k * k + p * k + qq), 'exp part');
  };
  F["Problème de Cauchy d'ordre 2"] = (q) => {
    const { p, q: qq } = ode2(st(q)); const d = Math.sqrt(p * p - 4 * qq); const r1 = (-p - d) / 2, r2 = (-p + d) / 2;
    const y0 = +st(q).match(/y\(0\) = (-?\d+)/)[1], y1 = +st(q).match(/y'\(0\) = (-?\d+)/)[1];
    return cmpT(q, solve([[1, 1], [r1, r2]], [y0, y1]), 'Cauchy 2');
  };
  F["Exponentielle d'une matrice nilpotente"] = (q) => {
    const N = mats(st(q))[0]; let E = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]; let P = E; let f = 1;
    for (let k = 1; k < 6; k++) { P = mul(P, N); f *= k; E = E.map((r, i) => r.map((x, j) => x + P[i][j] / f)); }
    return cmpN(q, E[0][2], 'exp nilpotente');
  };
  F["Déterminant d'une exponentielle de matrice"] = (q) => {
    const A = mats(st(q))[0]; const t = +(st(q).match(/e\^\{(\d*)A\}/)[1] || 1); return cmpN(q, t * (A[0][0] + A[1][1] + A[2][2]), 'det exp');
  };
  F['Système différentiel avec condition initiale'] = (q) => {
    const M = mats(st(q)); const A = M[0], v1 = M[1].map((r) => r[0]), v2 = M[2].map((r) => r[0]), X0 = M[3].map((r) => r[0]);
    const l1 = +st(q).match(/valeur propre \$(-?\d+)\$\) et/)[1], l2 = +st(q).match(/valeur propre \$(-?\d+)\$\)\. La/)[1];
    if (!near(mul(A, M[1])[0][0], l1 * v1[0]) || !near(mul(A, M[2])[1][0], l2 * v2[1])) return 'vecteurs propres faux';
    return cmpT(q, solve([[v1[0], v2[0]], [v1[1], v2[1]]], X0), 'système CI');
  };
  F['Second membre résonant (racine simple)'] = (q) => {
    const { p, q: qq } = ode2(st(q)); const m = st(q).match(/y_p\(t\) = Ate\^\{(-?\d*)t\}/); const r = m ? (m[1] === '' ? 1 : m[1] === '-' ? -1 : +m[1]) : 0;
    const cm = st(q).match(/= (-?\d*)(?:e\^\{[^}]*\})?\$ admet/); const c = cm[1] === '' ? 1 : cm[1] === '-' ? -1 : +cm[1];
    if (Math.abs(r * r + p * r + qq) > 1e-12) return 'r non racine';
    // y = A t e^{rt} : y'' + p y' + q y = A (2r + p) e^{rt}
    return cmpN(q, c / (2 * r + p), 'résonance');
  };
  // ---------------------------------------------------------------- L2-PAR
  F["Continuité d'une intégrale à paramètre"] = (q) => {
    const m = st(q).match(/\\int_0\^1 \((.*?)\) e\^\{(\d*)xt\}/); const g = fn(m[1], 't'); const c = +(m[2] || 1); const x = 1e-7;
    return cmpA(q, simp((t) => g(t) * Math.exp(c * x * t), 0, 1), 'continuité', 1e-5);
  };
  F["Dérivée en 0 d'une intégrale à paramètre"] = (q) => {
    const g = fn(st(q).match(/\\int_0\^1 \((.*?)\) e\^\{xt\}/)[1], 't'); const Fx = (x) => simp((t) => g(t) * Math.exp(x * t), 0, 1); const h = 1e-4;
    return cmpA(q, (Fx(h) - Fx(-h)) / (2 * h), 'F\'(0)', 1e-5);
  };
  F['Intégrale à paramètre calculée explicitement'] = (q) => {
    const a = +(st(q).match(/e\^\{-(\d*)t\} \\cos/)[1] || 1); const x0 = +st(q).match(/Calculer \$F\((-?\d+)\)/)[1];
    return cmpA(q, simp((t) => Math.exp(-a * t) * Math.cos(x0 * t), 0, 60 / a, 200000), 'Laplace cos', 1e-5);
  };
  F['Moments gaussiens'] = (q) => {
    const n2 = +st(q).match(/x\^\{(\d+)\}/)[1]; const s2 = +st(q).match(/\\frac\{x\^2\}\{(\d+)\}/)[1] / 2; const s = Math.sqrt(s2);
    return cmpA(q, simp((x) => x ** n2 * Math.exp(-x * x / (2 * s2)), -15 * s, 15 * s, 100000) / (s * Math.sqrt(2 * Math.PI)), 'moment', 1e-5);
  };
  F['Convergence dominée sur un intervalle non borné'] = (q) => {
    const a = +(st(q).match(/e\^\{-(\d*)x\}/)[1] || 1); const n = 1e6;
    return cmpA(q, simp((x) => Math.exp(n * Math.log1p(x / n) - a * x), 0, 80, 100000), 'TCD', 1e-4);
  };
  const gamma = (x) => { // Lanczos
    const g = 7; const c = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
    if (x < 0.5) return Math.PI / (Math.sin(Math.PI * x) * gamma(1 - x)); x -= 1; let a = c[0]; const t = x + g + 0.5; for (let i = 1; i < 9; i++) a += c[i] / (x + i); return Math.sqrt(2 * Math.PI) * t ** (x + 0.5) * Math.exp(-t) * a;
  };
  F['Quotient de valeurs de la fonction Gamma'] = (q) => {
    const m = [...st(q).matchAll(/\\Gamma\\left\((\\frac\{\d+\}\{\d+\})\\right\)/g)].map((x) => fv(x[1]));
    return cmpA(q, gamma(m[0]) / gamma(m[1]), 'Gamma', 1e-8);
  };
  F['Fonction Bêta'] = (q) => { const m = st(q).match(/Calculer \$B\((\d+), (\d+)\)/); const p = +m[1], r = +m[2]; return cmpA(q, simp((t) => t ** (p - 1) * (1 - t) ** (r - 1), 0, 1), 'Bêta'); };
  F['Transformée de Laplace'] = (q) => {
    const f = fn(st(q).match(/f\(t\) = ([^$]*)\$/)[1].replace(' ', '*'), 't'); const s = +st(q).match(/\\mathcal\{L\}f\((-?\d+)\)/)[1];
    return cmpA(q, simp((t) => f(t) * Math.exp(-s * t), 0, 80, 200000), 'Laplace', 1e-5);
  };

  // ---------------------------------------------------------------- L2-MUL
  const simp2 = (f, a, b, lo, hi, n = 400) => simp((x) => simp((y) => f(x, y), lo(x), hi(x), n), a, b, n);
  const alphaPi = (q) => num(q.answer); // réponse « \alpha = ... »
  F["Intégrale double d'une fonction affine sur un rectangle"] = (q) => {
    const m = st(q).match(/\[0, (\d+)\] \\times \[0, (\d+)\]\} \((.*?)\)/); const c = lin(m[3], 'xy');
    return cmpA(q, simp2((x, y) => c[0] * x + c[1] * y, 0, +m[1], () => 0, () => +m[2], 40), 'rectangle');
  };
  F["Aire d'un domaine plan"] = (q) => { const k = lin(st(q).match(/\\leq (\d*x)\\\}/)[1], 'x')[0]; return cmpA(q, simp((x) => k * x - x * x, 0, k), 'aire'); };
  F["Inversion de l'ordre d'intégration"] = (q) => {
    const m = st(q).match(/\\int_0\^(\d) \\left\(\\int_y\^\d (.*?) \\, dx\\right\) dy/); const a = +m[1]; const f = fn(m[2]);
    return cmpA(q, simp((y) => simp(f, y, a, 200), 0, a, 200), 'inversion', 1e-5);
  };
  F['Volume sous un paraboloïde'] = (q) => {
    const R2 = +st(q).match(/x\^2 \+ y\^2 \\leq (\d+)/)[1]; const h = +st(q).match(/0 \\leq z \\leq (\d+)/)[1];
    return cmpA({ answer: q.answer }, simp((r) => 2 * Math.PI * h * (1 - r * r / R2) * r, 0, Math.sqrt(R2)) / Math.PI, 'paraboloïde');
  };
  F["Centre de gravité d'une plaque homogène"] = (q) => {
    const a = +st(q).match(/0 \\leq x \\leq (\d+)/)[1]; const g = fn(st(q).match(/0 \\leq y \\leq ([^\\]*)\\\}/)[1]);
    const A = simp(g, 0, a), X = simp((x) => x * g(x), 0, a), Y = simp((x) => g(x) ** 2 / 2, 0, a);
    return cmpT(q, [X / A, Y / A].map((v) => Math.round(v * 1e9) / 1e9), 'centre de gravité');
  };
  F['Volume en coordonnées sphériques'] = (q) => {
    const m = st(q).match(/\\\{(?:(\d+) \\leq )?x\^2 \+ y\^2 \+ z\^2 \\leq (\d+)\\\}/); const r1 = Math.sqrt(+(m[1] || 0)), r2 = Math.sqrt(+m[2]);
    return cmpA(q, 4 / 3 * (r2 ** 3 - r1 ** 3), 'sphériques');
  };
  F["Moment d'inertie d'un disque"] = (q) => {
    const R2 = +st(q).match(/x\^2 \+ y\^2 \\leq (\d+)\}/)[1]; const c = P2(st(q).match(/\} \((.*?)\) \\, dx/)[1]);
    const f = (r, t) => ev2(c, r * Math.cos(t), r * Math.sin(t)) * r;
    return cmpA(q, simp((r) => simp((t) => f(r, t), 0, 2 * Math.PI, 200), 0, Math.sqrt(R2), 200) / Math.PI, 'moment', 1e-5);
  };
  F['Intégrale gaussienne sur le plan'] = (q) => {
    const a = +(st(q).match(/e\^\{-(\d*)\(x\^2/)[1] || 1); const w = st(q).match(/\} (\(x\^2 \+ y\^2\)(?:\^2)? )?e\^/); const k = !w[1] ? 0 : /\^2 $/.test(w[1]) ? 2 : 1;
    return cmpA(q, simp((r) => 2 * r ** (2 * k + 1) * Math.exp(-a * r * r), 0, 12, 20000), 'gauss plan');
  };
  // ---------------------------------------------------------------- L2-CRB
  const arc = (q) => { const m = st(q).match(/\\gamma\(t\) = \((.*?), (.*?)\)\$/); return [fn(m[1], 't'), fn(m[2], 't')]; };
  const der = (f, t, h = 1e-5) => (f(t + h) - f(t - h)) / (2 * h);
  F["Point stationnaire d'un arc paramétré"] = (q) => { const [x, y] = arc(q); const t = num(q.answer); return (Math.abs(der(x, t)) < 1e-6 && Math.abs(der(y, t)) < 1e-6) || 'pas stationnaire'; };
  F['Pente de la tangente à un arc'] = (q) => { const [x, y] = arc(q); const t = +st(q).match(/paramètre \$t = (-?\d+)\$/)[1]; return cmpA(q, der(y, t) / der(x, t), 'pente'); };
  F['Point stationnaire : entiers caractéristiques'] = (q) => {
    const m = st(q).match(/\\gamma\(t\) = \((.*?), (.*?)\)\$/); const co = (s) => { const c = {}; for (const t of s.replace(/\s+/g, '').matchAll(/([+-]?)(\d*)t\^(\d)/g)) c[+t[3]] = (t[1] === '-' ? -1 : 1) * (t[2] ? +t[2] : 1); return c; };
    const X = co(m[1]), Y = co(m[2]); let p = 0; for (let k = 1; k < 9; k++) if (X[k] || Y[k]) { p = k; break; }
    let qq = 0; for (let k = p + 1; k < 9; k++) if ((X[k] || 0) * (Y[p] || 0) - (Y[k] || 0) * (X[p] || 0) !== 0) { qq = k; break; }
    return cmpT(q, [p, qq], '(p;q)');
  };
  F["Longueur d'arches de cycloïde"] = (q) => {
    const R = +(st(q).match(/\\gamma\(t\) = \((\d*)\(t/)[1] || 1); const e = st(q).match(/\[0, (\d*)\\pi\]/)[1]; const T = (e ? +e : 1) * Math.PI;
    return cmpA(q, simp((t) => R * Math.sqrt(2 - 2 * Math.cos(t)), 0, T, 20000), 'cycloïde', 1e-6);
  };
  F['Vecteur tangent unitaire (repère de Frenet)'] = (q) => { const [x, y] = arc(q); const v = [der(x, 0), der(y, 0)]; const n = Math.hypot(...v); const got = tupA(q.answer); return (got && got.every((g, i) => Math.abs(g - v[i] / n) < 1e-6)) || 'tangent unitaire'; };
  F["Rayon de courbure d'une parabole"] = (q) => {
    const a = lin(st(q).match(/y = (-?\d*)x\^2/)[1] + 'x', 'x')[0]; const x0 = fv(st(q).match(/abscisse \$x = ([^$]*)\$/)[1]);
    return cmpA(q, (1 + (2 * a * x0) ** 2) ** 1.5 / Math.abs(2 * a), 'rayon');
  };
  F["Courbure d'une ellipse en un sommet"] = (q) => {
    const m = st(q).match(/\\gamma\(t\) = \((\d*)\\cos t, (\d*)\\sin t\)/); const A = +(m[1] || 1), B = +(m[2] || 1);
    const x = (t) => A * Math.cos(t), y = (t) => B * Math.sin(t); const t = /\(0, \d+\)\$\.$/.test(st(q)) ? Math.PI / 2 : 0; const h = 1e-4;
    const xp = der(x, t), yp = der(y, t), xs = (x(t + h) - 2 * x(t) + x(t - h)) / h / h, ys = (y(t + h) - 2 * y(t) + y(t - h)) / h / h;
    return cmpA(q, Math.abs(xp * ys - yp * xs) / Math.hypot(xp, yp) ** 3, 'courbure ellipse', 1e-5);
  };
  F["Torsion d'une hélice"] = (q) => {
    const m = st(q).match(/\\gamma\(t\) = \((\d*)\\cos t, \d*\\sin t, (-?\d*)t\)/); const a = +(m[1] || 1); const b = m[2] === '' ? 1 : m[2] === '-' ? -1 : +m[2];
    const g1 = [0, a, b], g2 = [-a, 0, 0], g3 = [0, -a, 0]; // en t = 0
    const cr = [g1[1] * g2[2] - g1[2] * g2[1], g1[2] * g2[0] - g1[0] * g2[2], g1[0] * g2[1] - g1[1] * g2[0]];
    return cmpN(q, dot(cr, g3) / dot(cr, cr), 'torsion');
  };
  // ---------------------------------------------------------------- L2-PRB
  const binom = (n, k) => { let r = 1; for (let i = 1; i <= k; i++) r = r * (n - k + i) / i; return r; };
  const dval = (s) => parseFloat(String(s).replace('{,}', '.'));
  F['Probabilité pour une loi géométrique'] = (q) => { const p = fv(st(q).match(/p = ([^$]*)\$/)[1]); const k = +st(q).match(/P\(X = (\d+)\)\$\./)[1]; return cmpN(q, (1 - p) ** (k - 1) * p, 'géométrique'); };
  F['Formule des probabilités totales'] = (q) => {
    const g = (re) => dval(st(q).match(re)[1]); const pa = g(/P\(A\) = ([\d{},]+)/), u = g(/P\(B \\mid A\) = ([\d{},]+)/), v = g(/P\(B \\mid \\overline\{A\}\) = ([\d{},]+)/);
    return near(dval(rhs(q.answer)), pa * u + (1 - pa) * v) || 'probabilités totales';
  };
  F['Fonction génératrice : espérance et variance'] = (q) => {
    const G = st(q).match(/G_X\(t\) = ([^$]*)\$/)[1]; const g = fn(G, 't'); const h = 1e-4;
    const g1 = der(g, 1, h), g2 = (g(1 + h) - 2 * g(1) + g(1 - h)) / h / h;
    if (Math.abs(g(1) - 1) > 1e-9) return 'G(1) ≠ 1';
    return cmpA(q, /V\(X\)\$\./.test(st(q)) ? g2 + g1 - g1 * g1 : g1, 'génératrice', 1e-5);
  };
  F["Variance d'une combinaison de variables de Poisson"] = (q) => {
    const l = +st(q).match(/X \\sim \\mathcal\{P\}\((\d+)\)/)[1], m = +st(q).match(/Y \\sim \\mathcal\{P\}\((\d+)\)/)[1]; const c = lin(st(q).match(/Calculer \$V\((.*?)\)\$/)[1], 'XY');
    return cmpN(q, c[0] ** 2 * l + c[1] ** 2 * m, 'variance Poisson');
  };
  F['Loi du minimum de deux variables géométriques'] = (q) => {
    const ps = [...st(q).matchAll(/\\mathcal\{G\}\\left\((\\frac\{\d+\}\{\d+\})\\right\)/g)].map((m) => fv(m[1]));
    return cmpN(q, 1 - (1 - ps[0]) * (1 - ps[1]), 'min géométriques');
  };
  F["Variance d'une combinaison avec covariance"] = (q) => {
    const vx = +st(q).match(/V\(X\) = (\d+)/)[1], vy = +st(q).match(/V\(Y\) = (\d+)/)[1], c = +st(q).match(/\\mathrm\{Cov\}\(X, Y\) = (-?\d+)/)[1]; const [a, b] = lin(st(q).match(/Calculer \$V\((.*?)\)\$/)[1], 'XY');
    return cmpN(q, a * a * vx + b * b * vy + 2 * a * b * c, 'variance cov');
  };
  F['Somme de binomiales indépendantes (fonction génératrice)'] = (q) => {
    const B = [...st(q).matchAll(/\\mathcal\{B\}\\left\((\d+), (\\frac\{\d+\}\{\d+\})\\right\)/g)]; const n = +B[0][1], m = +B[1][1], p = fv(B[0][2]); const k = +st(q).match(/P\(X \+ Y = (\d)\)/)[1];
    let s = 0; for (let i = 0; i <= Math.min(k, n); i++) s += binom(n, i) * p ** i * (1 - p) ** (n - i) * binom(m, k - i) * p ** (k - i) * (1 - p) ** (m - k + i) * (k - i <= m ? 1 : 0);
    return cmpN(q, s, 'somme binomiales');
  };
  F['Loi conditionnelle pour des variables de Poisson'] = (q) => {
    const l = +st(q).match(/X \\sim \\mathcal\{P\}\((\d+)\)/)[1], m = +st(q).match(/Y \\sim \\mathcal\{P\}\((\d+)\)/)[1]; const mm = st(q).match(/P\(X = (\d+) \\mid X \+ Y = (\d+)\)/); const k = +mm[1], n = +mm[2];
    const po = (lam, j) => Math.exp(-lam) * lam ** j / [1, 1, 2, 6, 24][j];
    return cmpN(q, po(l, k) * po(m, n - k) / po(l + m, n), 'Poisson conditionnel');
  };

  // ================================================================ L3
  const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
  const ordMod = (a, n) => { let k = 1, x = a % n; while (x !== 0) { x = (x + a) % n; k++; } return k; }; // ordre additif de a dans Z/n
  F["Ordre d'un groupe quotient cyclique"] = (q) => { const m = st(q).match(/\\mathbb\{Z\}\/(\d+)\\mathbb\{Z\}\$, soit \$H = \\langle \\overline\{(\d+)\}/); const n = +m[1], a = +m[2]; return cmpN(q, n / ordMod(a, n), 'quotient'); };
  F["Premier théorème d'isomorphisme"] = (q) => {
    const m = st(q).match(/\\mathbb\{Z\}\/(\d+)\\mathbb\{Z\} \\to \\mathbb\{Z\}\/(\d+)\\mathbb\{Z\}\$, \$\\overline\{x\} \\mapsto \\overline\{(\d*)x\}/); const n = +m[1], mm = +m[2], k = +(m[3] || 1);
    if ((k * n) % mm) return 'mal défini'; const im = new Set(); let ker = 0;
    for (let x = 0; x < n; x++) { const y = (k * x) % mm; im.add(y); if (y === 0) ker++; }
    return cmpN(q, /\\ker/.test(st(q).split('Calculer').pop()) ? ker : im.size, 'iso');
  };
  F["Signature d'une permutation"] = (q) => {
    const s = mats(st(q))[0][1]; const n = s.length; const seen = Array(n).fill(false); let e = 1;
    for (let i = 0; i < n; i++) { if (seen[i]) continue; let j = i, L = 0; while (!seen[j]) { seen[j] = true; j = s[j] - 1; L++; } if (L % 2 === 0) e = -e; }
    return cmpN(q, e, 'signature');
  };
  F["Ordre d'un $p$-sous-groupe de Sylow"] = (q) => { const n = +st(q).match(/d'ordre \$(\d+)\$/)[1]; const p = +st(q).match(/\$(\d)\$-sous-groupe/)[1]; let r = 1, m = n; while (m % p === 0) { m /= p; r *= p; } return cmpN(q, r, 'Sylow'); };
  F["Nombre d'inversibles de $\\mathbb{Z}/n\\mathbb{Z}$"] = (q) => { const n = +st(q).match(/\\mathbb\{Z\}\/(\d+)/)[1]; let c = 0; for (let a = 1; a <= n; a++) if (gcd(a, n) === 1) c++; return cmpN(q, c, 'phi'); };
  F["Somme et intersection d'idéaux de $\\mathbb{Z}$"] = (q) => { const m = st(q).match(/\$(\d+)\\mathbb\{Z\} \+ (\d+)\\mathbb\{Z\}/); const a = +m[1], b = +m[2]; return cmpT(q, [gcd(a, b), a * b / gcd(a, b)], 'idéaux'); };
  F["Normes usuelles d'un vecteur"] = (q) => { const v = T3(st(q), 'x'); return cmpT(q, [v.reduce((s, x) => s + Math.abs(x), 0), Math.max(...v.map(Math.abs))], 'normes'); };
  F["Diamètre d'une partie pour une norme"] = (q) => {
    const m = st(q).match(/\[0, (\d+)\] \\times \[0, (\d+)\]/); const a = +m[1], b = +m[2]; const one = /\\\|_\{1\}/.test(st(q));
    let best = 0; for (const [x1, y1] of [[0, 0], [a, 0], [0, b], [a, b]]) for (const [x2, y2] of [[0, 0], [a, 0], [0, b], [a, b]]) best = Math.max(best, one ? Math.abs(x1 - x2) + Math.abs(y1 - y2) : Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2)));
    return cmpN(q, best, 'diamètre');
  };
  F["Norme subordonnée d'une matrice"] = (q) => {
    const A = mats(st(q))[0]; const one = /\\\|A\\\|_\{1\}/.test(st(q)); let best = 0;
    for (let k = 0; k < 2000; k++) { const t = 2 * Math.PI * k / 2000; const x = one ? [Math.cos(t), Math.sin(t)].map((c) => c / (Math.abs(Math.cos(t)) + Math.abs(Math.sin(t)))) : [Math.sign(Math.cos(t)) || 1, Math.sign(Math.sin(t)) || 1];
      const y = [A[0][0] * x[0] + A[0][1] * x[1], A[1][0] * x[0] + A[1][1] * x[1]]; best = Math.max(best, one ? Math.abs(y[0]) + Math.abs(y[1]) : Math.max(Math.abs(y[0]), Math.abs(y[1]))); }
    return cmpA(q, best, 'norme subordonnée', 1e-6);
  };
  F["Bornes et points adhérents d'une partie de $\\mathbb{R}$"] = (q) => {
    const m = st(q).match(/\\left\((\d+) \+ \\frac\{(\d+)\}\{n\}\\right\)/); const c = +m[1], d = +m[2]; const u = []; for (let n = 1; n < 2000; n++) u.push((-1) ** n * (c + d / n));
    return cmpT(q, [Math.min(...u), Math.max(...u)], 'inf sup');
  };
  F["Image d'un segment par une fonction continue"] = (q) => { const m = st(q).match(/compact \$\[(-?\d+), (-?\d+)\]\$/); const a = +m[1], b = +m[2]; const v = []; for (let k = 0; k <= 1000; k++) { const x = a + (b - a) * k / 1000; v.push(x * x); } if (a <= 0 && b >= 0) v.push(0); return cmpT(q, [Math.min(...v), Math.max(...v)].map((x) => Math.round(x * 1e9) / 1e9), 'image'); };
  F["Continuité uniforme d'une fonction lipschitzienne"] = (q) => { const k = +st(q).match(/est \$(\d+)\$-lipschitzienne/)[1]; const e = fv(st(q).match(/\\leq (\\frac\{1\}\{\d+\})\$ \?/)[1]); return cmpN(q, e / k, 'delta'); };
  F["Composantes connexes d'un ouvert de $\\mathbb{R}$"] = (q) => {
    const P = fn(st(q).match(/U = \\\{x \\in \\mathbb\{R\} : (.*?) > 0\\\}/)[1]); let c = 0, prev = false;
    for (let x = -50; x <= 50; x += 0.01) { const pos = P(x) > 0; if (pos && !prev) c++; prev = pos; }
    return cmpN(q, c, 'composantes');
  };
  F["Itérées d'une contraction"] = (q) => { const g = fn(st(q).match(/g\(x\) = ([^$]*)\$/)[1]); const x0 = +st(q).match(/x_0 = (-?\d+)/)[1]; return cmpA(q, g(g(x0)), 'itérées'); };
  F["Nombre d'itérations pour une précision donnée"] = (q) => {
    const k = fv(st(q).match(/\$(\\frac\{1\}\{\d+\})\$-contractante/)[1]); const d0 = +st(q).match(/= (\d+)\$\. Quel/)[1]; const m = +st(q).match(/10\^\{-(\d+)\}/)[1];
    let n = 0; while (k ** n / (1 - k) * d0 > 10 ** -m * (1 + 1e-12)) n++; return cmpN(q, n, 'itérations');
  };
  F["Constante de contraction d'un opérateur intégral"] = (q) => {
    const m = st(q).match(/T\(f\)\(x\) = (\\frac\{\d+\}\{\d+\})\\int_0\^1 (xt|t)? ?\\?,? ?f\(t\)/); const lam = fv(m[1]); const K = m[2] || '1';
    let best = 0; for (let i = 0; i <= 100; i++) { const x = i / 100; best = Math.max(best, simp((t) => Math.abs(K === 'xt' ? x * t : K === 't' ? t : 1), 0, 1, 100)); }
    return cmpA(q, lam * best, 'contraction', 1e-6);
  };
  F["Norme uniforme d'une fonction"] = (q) => { const f = fn(st(q).match(/f\(x\) = ([^$]*)\$/)[1]); let b = 0; for (let k = 0; k <= 100000; k++) b = Math.max(b, Math.abs(f(k / 100000))); return cmpA(q, b, 'sup', 1e-6); };
  F['Série des normes uniformes'] = (q) => { const r = fv(st(q).match(/\\left\[0, (\\frac\{\d+\}\{\d+\})\\right\]/)[1]); return cmpA(q, sumNum((n) => r ** n, 1, 3000), 'série normes'); };
  F['Interversion série-intégrale par convergence normale'] = (q) => {
    const c = +st(q).match(/\{(\d+)\^n\}/)[1]; const k = +(st(q).match(/S\(x\)\\cos\((\d*)x\)/)[1] || 1);
    const S = (x) => { let s = 0; for (let n = 0; n < 60; n++) s += Math.cos(n * x) / c ** n; return s; };
    return cmpA(q, simp((x) => S(x) * Math.cos(k * x), 0, 2 * Math.PI, 4000) / Math.PI, 'interversion', 1e-6);
  };
  F['Rayon de convergence (Cauchy-Hadamard)'] = (q) => { const r = fv(st(q).match(/\\left\((\\frac\{\d+\}\{\d+\}|\d+)\\right\)\^n/)[1]); return cmpN(q, 1 / r, 'rayon'); };
  F["Rayon de convergence d'une somme de séries entières"] = (q) => { const m = st(q).match(/\((\d+)\^n \+ (\d+)\^n\)/); return cmpN(q, 1 / Math.max(+m[1], +m[2]), 'rayon somme'); };
  F["Coefficient d'un produit de séries entières"] = (q) => {
    const m = st(q).match(/\\frac\{1\}\{\((.*?)\)\((.*?)\)\}/); const a = -lin(m[1], 'x')[0], b = -lin(m[2], 'x')[0]; const n = +st(q).match(/c_\{(\d+)\}\$\./)[1];
    // développement par récurrence : c_n = (a + b) c_{n-1} - ab c_{n-2}
    const c = [1, a + b]; for (let i = 2; i <= n; i++) c.push((a + b) * c[i - 1] - a * b * c[i - 2]); return cmpN(q, c[n], 'Cauchy coef');
  };
  F["Valeur moyenne d'un polynôme trigonométrique"] = (q) => { const f = fn(st(q).match(/f\(x\) = \\left\((.*?)\\right\)\^2/)[1]); return cmpA(q, simp((x) => f(x) ** 2, -Math.PI, Math.PI) / (2 * Math.PI), 'moyenne'); };
  F['Coefficients de Fourier par linéarisation'] = (q) => {
    const m = st(q).match(/f\(x\) = (-?\d*)\\(cos|sin)\^3 x/); const c = m[1] === '' ? 1 : m[1] === '-' ? -1 : +m[1]; const tr = m[2] === 'cos' ? Math.cos : Math.sin;
    const co = (k) => simp((x) => c * Math.sin(x) ** 0 * tr(x) ** 3 * tr(k * x), -Math.PI, Math.PI) / Math.PI;
    const got = tupA(q.answer); return (got && Math.abs(got[0] - co(1)) < 1e-6 && Math.abs(got[1] - co(3)) < 1e-6) || 'linéarisation';
  };
  F['Théorème de Dirichlet en un point de discontinuité'] = (q) => { const a = +st(q).match(/= (-?\d+)\$ sur \$\]-\\pi, 0\[/)[1], b = +st(q).match(/= (-?\d+)\$ sur \$\]0, \\pi\[/)[1]; return cmpN(q, (a + b) / 2, 'Dirichlet'); };
  F['Composée de deux homothéties'] = (q) => { const k1 = +st(q).match(/de rapport \$(-?\d+)\$, et/)[1]; const k2 = fv(st(q).match(/rapport \$([^$]*)\$\. La/)[1]); return cmpN(q, k1 * k2, 'composée'); };
  F["Coordonnées barycentriques d'un point"] = (q) => {
    const pt = (L) => st(q).match(new RegExp(`\\$${L}\\((-?\\d+) ; (-?\\d+)\\)\\$`)).slice(1).map(Number);
    const A = pt('A'), B = pt('B'), Cc = pt('C'); const Pm = st(q).match(/P\\left\((.*?) ; (.*?)\\right\)/); const P = [fv(Pm[1]), fv(Pm[2])];
    const [be, ga] = solve([[B[0] - A[0], Cc[0] - A[0]], [B[1] - A[1], Cc[1] - A[1]]], [P[0] - A[0], P[1] - A[1]]);
    const got = tupA(q.answer); const e = [1 - be - ga, be, ga]; return (got && got.every((g, i) => Math.abs(g - e[i]) < 1e-9)) || 'barycentriques';
  };
  F['Intersection de deux droites en coordonnées homogènes'] = (q) => {
    const L = [...st(q).matchAll(/D_\d : (.*?) = 0\$/g)].map((m) => lin(m[1])); const s = solve([[L[0][0], L[0][1]], [L[1][0], L[1][1]]], [-L[0][2], -L[1][2]]);
    const got = tupA(q.answer); return (got && got.every((g, i) => Math.abs(g - s[i]) < 1e-9)) || 'intersection';
  };
  F["Première forme fondamentale d'un plan paramétré"] = (q) => {
    const comp = st(q).match(/X\(u, v\) = \((.*?)\)\$/)[1].split(', ').map((c) => lin(c, 'uv')); const u = comp.map((c) => c[0]), v = comp.map((c) => c[1]);
    return cmpT(q, [dot(u, u), dot(u, v), dot(v, v)], 'I');
  };
  F["Aire d'un morceau de surface"] = (q) => { const [a, b] = lin(st(q).match(/plan \$z = ([^$]*)\$/)[1], 'xy'); const m = st(q).match(/\[0, (\d+)\] \\times \[0, (\d+)\]/); return cmpA(q, +m[1] * +m[2] * Math.sqrt(1 + a * a + b * b), 'aire'); };
  F['Deuxième forme fondamentale en un point critique'] = (q) => { const f = P2(st(q).match(/z = ([^$]*)\$, paramétrée/)[1]); return cmpT(q, [ev2(dx(dx(f)), 0, 0), ev2(dx(dy(f)), 0, 0), ev2(dy(dy(f)), 0, 0)], 'II'); };
  const iterRho = (G) => { let x = [1, 0.7]; let r = 0; for (let k = 0; k < 400; k++) { const y = [G[0][0] * x[0] + G[0][1] * x[1], G[1][0] * x[0] + G[1][1] * x[1]]; const n = Math.hypot(...y); if (n < 1e-300) return 0; r = n / Math.hypot(...x); x = y.map((c) => c / n); } return r; };
  F['Rayon spectral de la matrice de Jacobi'] = (q) => { const [[a, b], [c, d]] = mats(st(q))[0]; const J = [[0, -b / a], [-c / d, 0]]; // chi_J = X^2 - tr X + det, tr = 0 : |mu|^2 = |det J|
    return cmpA(q, Math.abs(J[0][0] * J[1][1] - J[0][1] * J[1][0]), 'rho J^2', 1e-9); };
  F['Rayon spectral de la matrice de Gauss-Seidel'] = (q) => {
    const [[a, b], [c, d]] = mats(st(q))[0]; const G = [[0, -b / a], [0, b * c / (a * d)]]; // (D - E)^{-1} F calculé : x1 = -b x2 / a ; x2 = -c x1 / d
    return cmpA(q, iterRho(G), 'rho GS', 1e-6);
  };
  const lin2 = (s) => lin(s, 'xy');
  F["Valeur de l'objectif en un sommet"] = (q) => {
    const z = lin2(st(q).match(/maximise \$z = ([^$]*)\$/)[1]); const cs = [...st(q).matchAll(/\$([^$]*?) \\leq (\d+)\$/g)].map((m) => [lin2(m[1]), +m[2]]);
    const s = solve([cs[0][0], cs[1][0]], [cs[0][1], cs[1][1]]); return cmpA(q, z[0] * s[0] + z[1] * s[1], 'objectif');
  };
  F['Sommet du domaine admissible'] = (q) => {
    const cs = [...st(q).matchAll(/\\ ([^\\$]*?) \\leq (\d+)/g)].map((m) => [lin2(m[1]), +m[2]]); return cmpT(q, solve([cs[0][0], cs[1][0]], [cs[0][1], cs[1][1]]), 'sommet');
  };
  F["Dualité faible : majorant de l'optimum"] = (q) => {
    const obj = lin(st(q).match(/maximiser \$([^$]*)\$/)[1].replace(/x_1/g, 'x').replace(/x_2/g, 'y'), 'xy');
    const cs = [...st(q).matchAll(/\$([^$]*?) \\leq (\d+)\$/g)].map((m) => [lin(m[1].replace(/x_1/g, 'x').replace(/x_2/g, 'y'), 'xy'), +m[2]]);
    const y = st(q).match(/= \((\d+), (\d+)\)\$ est admissible/).slice(1).map(Number);
    if ([0, 1].some((j) => cs[0][0][j] * y[0] + cs[1][0][j] * y[1] < obj[j])) return 'dual non admissible';
    return cmpN(q, cs[0][1] * y[0] + cs[1][1] * y[1], 'dualité faible');
  };
  F["Mesure d'une réunion dénombrable disjointe"] = (q) => { const r = fv(st(q).match(/\\left\((\\frac\{\d+\}\{\d+\})\\right\)\^n/)[1]); return cmpA(q, sumNum((n) => r ** n, 0, 3000), 'mesure'); };
  F['Exposant conjugué (inégalité de Hölder)'] = (q) => { const p = fv(st(q).match(/avec \$p = ([^$]*)\$/)[1]); return cmpN(q, 1 / (1 - 1 / p), 'Hölder'); };
  F["Norme $L^p$ d'une fonction puissance"] = (q) => { const f = fn(st(q).match(/f\(x\) = ([^$]*)\$/)[1]); const p = +st(q).match(/\\\|f\\\|_\{(\d+)\}/)[1]; return cmpA(q, simp((x) => Math.abs(f(x)) ** p, 0, 1), 'Lp'); };
  F["Constante de normalisation d'une densité"] = (q) => { const k = +(st(q).match(/c ?x(?:\^\{(\d+)\})?\$/)[1] || 1); const a = +st(q).match(/sur \$\[0, (\d+)\]\$/)[1]; return cmpA(q, 1 / simp((x) => x ** k, 0, a), 'normalisation'); };
  F["Théorème central limite : loi approchante d'une somme"] = (q) => {
    const n = +st(q).match(/X_\{(\d+)\}/)[1], m = +st(q).match(/espérance \$(-?\d+)\$/)[1], v = +st(q).match(/variance \$(\d+)\$/)[1]; return cmpT(q, [n * m, n * v], 'TCL');
  };

  const run = (q) => { const f = F[q.title]; return f ? f(q) : undefined; };
  const keys = ['L2-DET', 'L2-RED1', 'L2-RED2', 'L2-DUA', 'L2-PRE', 'L2-SYM', 'L2-SER', 'L2-CAL', 'L2-RIE', 'L2-ING', 'L2-EDO', 'L2-PAR', 'L2-MUL', 'L2-CRB', 'L2-PRB',
    'L3-GRP1', 'L3-MET', 'L3-CMP', 'L3-MES', 'L3-GRP2', 'L3-ANN', 'L3-BAN', 'L3-SDF', 'L3-SER', 'L3-FOU', 'L3-GPR', 'L3-GDF', 'L3-NUM', 'L3-PROG', 'L3-PRC'];
  return Object.fromEntries(keys.map((k) => [k, run]));
})(V));
}
// ---- vérificateurs prioritaires 2nde/1re ----
{
/* Vérificateurs indépendants des familles ajoutées / converties (2nde et 1re spécialité).
 * Chaque fonction reçoit la question (forme QCM d'origine si convertie, avec q.exactInput = saisie attendue ;
 * sinon question 'exact' native dont q.answer est la saisie brute) et renvoie undefined / true / message. */
addPre(( (V) => {
  // ---------------------------------------------------------------- outils
  const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
  const near = (a, b, e = 1e-6) => Math.abs(a - b) <= e * Math.max(1, Math.abs(a), Math.abs(b));
  /** saisie brute -> tableau de nombres */
  const pv = (s) => {
    const one = (t) => {
      t = t.trim().replace(',', '.');
      let m;
      if ((m = t.match(/^(-?\d+)\/(\d+)$/))) return +m[1] / +m[2];
      return /^-?\d+(\.\d+)?$/.test(t) ? +t : NaN;
    };
    s = String(s).trim();
    if (/^\(.*\)$/.test(s)) return s.slice(1, -1).split(';').map(one);
    return [one(s)];
  };
  /** saisie attendue : q.exactInput (QCM converti) ou q.answer (saisie native) */
  const inp = (q) => (q.exactInput !== undefined ? q.exactInput : q.type === 'exact' ? q.answer : null);
  const cmp = (q, exp, e = 1e-6) => {
    const s = inp(q);
    if (s === null) return undefined;
    const got = pv(s);
    exp = [].concat(exp);
    if (got.length !== exp.length || got.some((g, i) => !near(g, exp[i], e))) return `attendu (${exp.join(';')}), saisie ${s}`;
    return true;
  };
  /** nombre LaTeX simple */
  const nv = (t) => {
    t = String(t).replace(/\s|\\,/g, '').replace(/\\[dt]frac/g, '\\frac');
    let m;
    if ((m = t.match(/^(-?)\\frac\{(-?\d+)\}\{(\d+)\}$/))) return (m[1] ? -1 : 1) * m[2] / m[3];
    t = t.replace('{,}', '.');
    return /^[+-]?\d+(\.\d+)?$/.test(t) ? +t : NaN;
  };
  /** évaluateur d'expressions LaTeX (x, y, k, n, e^, \sqrt, \frac, ^, multiplication implicite) */
  function evalTex(tex, env) {
    let s = String(tex).replace(/\\left|\\right|\\displaystyle/g, '').replace(/\\[dt]frac/g, '\\frac').replace(/\{,\}/g, '.')
      .replace(/\\times|\\cdot/g, '*').replace(/\\,|\\;|\\!/g, '').replace(/\s+/g, '');
    let i = 0;
    const peek = () => s[i];
    const err = (m) => { throw new Error('evalTex: ' + m + ' @' + i + ' in ' + s); };
    const group = () => { // { ... }
      if (s[i] !== '{') return primary();
      i++; const v = expr(); if (s[i] !== '}') err('} attendu'); i++; return v;
    };
    function primary() {
      const c = peek();
      if (c === '(') { i++; const v = expr(); if (s[i] !== ')') err(') attendu'); i++; return v; }
      if (c === '{') return group();
      if (s.startsWith('\\frac', i)) { i += 5; const a = group(); const b = group(); return a / b; }
      if (s.startsWith('\\sqrt', i)) { i += 5; return Math.sqrt(group()); }
      if (s.startsWith('\\pi', i)) { i += 3; return Math.PI; }
      if (s.startsWith('\\ln', i)) { i += 3; return Math.log(factorNoImplicit()); }
      if (s.startsWith('\\cos', i)) { i += 4; return Math.cos(factorNoImplicit()); }
      if (s.startsWith('\\sin', i)) { i += 4; return Math.sin(factorNoImplicit()); }
      if (c === 'e' && !/[a-z]/.test(s[i + 1] || '')) { i++; return Math.E; }
      if (/[0-9.]/.test(c)) { const m = s.slice(i).match(/^\d+(\.\d+)?|^\.\d+/); i += m[0].length; return +m[0]; }
      if (/[a-z]/i.test(c)) { i++; if (!(c in env)) err('variable ' + c); return env[c]; }
      return err('inattendu ' + c);
    }
    function power() {
      let b = primary();
      while (s[i] === '^') { i++; const e = s[i] === '{' ? group() : (s[i] === '-' ? (i++, -primary()) : primary()); b = Math.pow(b, e); }
      return b;
    }
    function factorNoImplicit() { if (s[i] === '-') { i++; return -factorNoImplicit(); } if (s[i] === '+') { i++; return factorNoImplicit(); } return power(); }
    function term() {
      let v = factorNoImplicit();
      for (;;) {
        const c = s[i];
        if (c === '*') { i++; v *= factorNoImplicit(); } else if (c === '/') { i++; v /= factorNoImplicit(); }
        else if (c !== undefined && (c === '(' || c === '{' || c === '\\' || /[0-9a-z.]/i.test(c))) v *= power();
        else break;
      }
      return v;
    }
    function expr() {
      let v = term();
      while (s[i] === '+' || s[i] === '-') { const o = s[i++]; const t = term(); v = o === '+' ? v + t : v - t; }
      return v;
    }
    const v = expr();
    if (i !== s.length) err('reste « ' + s.slice(i) + ' »');
    return v;
  }
  const fx = (tex) => (x) => evalTex(tex, { x });
  /** coefficients [c0, c1, c2] d'un polynôme de degré <= 2 donné en LaTeX (vérifie le degré) */
  const quad = (tex) => {
    const f = fx(tex);
    const c0 = f(0); const s1 = f(1); const m1 = f(-1);
    const c2 = (s1 + m1) / 2 - c0; const c1 = (s1 - m1) / 2;
    for (const t of [2.5, -3.7, 7]) if (!near(f(t), c0 + c1 * t + c2 * t * t, 1e-7)) throw new Error('pas de degré 2 : ' + tex);
    return [c0, c1, c2];
  };
  const lin = (tex) => { const [c0, c1, c2] = quad(tex); if (Math.abs(c2) > 1e-9) throw new Error('pas affine ' + tex); return [c0, c1]; };
  const same = (f, g) => [0.3, -1.7, 2.9, 5.1].every((t) => near(f(t), g(t), 1e-7));
  const st = (q) => String(q.statement);
  const mat = (s, re) => { const m = s.match(re); if (!m) throw new Error('motif absent ' + re); return m; };
  const iv = (str) => { // "]a ; b[" -> {lc, a, b, rc}
    const m = str.match(/([[\]])\s*(-?[\d{},]+|-\\infty)\s*;\s*(-?[\d{},]+|\+\\infty)\s*([[\]])/);
    if (!m) throw new Error('intervalle ' + str);
    return { lc: m[1] === '[', a: /infty/.test(m[2]) ? -Infinity : nv(m[2]), b: /infty/.test(m[3]) ? Infinity : nv(m[3]), rc: m[4] === ']' };
  };
  const inIv = (I, x) => (x > I.a || (x === I.a && I.lc)) && (x < I.b || (x === I.b && I.rc));
  const pt = (s, n) => { const m = s.match(new RegExp(`${n}\\((-?\\d+) ; (-?\\d+)\\)`)); if (!m) throw new Error('point ' + n); return [+m[1], +m[2]]; };
  const vec = (s, n) => { const m = s.match(new RegExp(`${n}\\\\begin\\{pmatrix\\} (-?\\d+) \\\\\\\\ (-?\\d+) \\\\end`)); if (!m) throw new Error('vecteur ' + n); return [+m[1], +m[2]]; };
  const pct = (a) => { // réponse d'évolution / pourcentage -> valeur signée
    const m = String(a).match(/\$([+-]?)([\d{},]+)\\,\\%\$/);
    if (!m) return NaN;
    const v = nv(m[2]);
    return (/baisse/.test(a) || m[1] === '-') ? -v : v;
  };
  const by = (map) => (q) => { const f = map[q.title]; if (!f) return undefined; return f(q, st(q)); };

  // ---------------------------------------------------------------- 2N1
  const n2N1 = {
    'Plus grand multiple inférieur à un entier': (q, s) => { const m = mat(s, /multiple de \$(\d+)\$ inférieur ou égal à \$(\d+)\$/); return cmp(q, +m[1] * Math.floor(+m[2] / +m[1])); },
    'Encadrement décimal d\'un rationnel': (q, s) => { const m = mat(s, /\$\\frac\{(\d+)\}\{(\d+)\}\$ par deux décimaux d'amplitude \$0\{,\}(0?1)\$/); const k = m[3].length; return cmp(q, Math.floor(+m[1] * 10 ** k / +m[2]) / 10 ** k); },
    'Calcul sur les puissances': (q, s) => {
      let m = s.match(/\\dfrac\{(\d+)\^\{(-?\d+)\} \\times \d+\^\{(-?\d+)\}\}\{\d+\^\{(-?\d+)\}\}/);
      if (m) return cmp(q, +m[2] + +m[3] - +m[4]);
      m = mat(s, /\\left\((\d+)\^\{(-?\d+)\}\\right\)\^\{(\d+)\} \\times \d+\^\{(-?\d+)\}/);
      return cmp(q, +m[2] * +m[3] + +m[4]);
    },
    'Simplification de radicaux': (q, s) => { const N = +mat(s, /\\sqrt\{(\d+)\}\$\.?$/m)[1]; let a = 1; for (let k = 2; k * k <= N; k++) if (N % (k * k) === 0) a = k; return cmp(q, [a, N / (a * a)]); },
    'Somme de radicaux': (q, s) => {
      const m = mat(s, /a\\sqrt\{(\d+)\}\$ : \$B = \\sqrt\{(\d+)\} ([+-]) \\sqrt\{(\d+)\}\$/);
      const b = +m[1]; const c1 = Math.sqrt(+m[2] / b); const c2 = Math.sqrt(+m[4] / b);
      if (!Number.isInteger(Math.round(c1 * 1e9) / 1e9) || !Number.isInteger(Math.round(c2 * 1e9) / 1e9)) return 'radicaux non simplifiables';
      return cmp(q, c1 + (m[3] === '+' ? c2 : -c2));
    },
    'Écriture décimale d\'un nombre décimal': (q, s) => { const m = mat(s, /\\dfrac\{(\d+)\}\{(\d+)\}/); let d = +m[2]; while (d % 2 === 0) d /= 2; while (d % 5 === 0) d /= 5; if (d !== 1) return 'non décimal'; return cmp(q, +m[1] / +m[2]); },
    'Carré d\'un nombre impair': (q, s) => { const n = +mat(s, /Pour \$n = (\d+)\$/)[1]; return cmp(q, (n * n - 1) / 2); },
    'Problème de partage (plus grand diviseur commun)': (q, s) => { const m = mat(s, /dispose de \$(\d+)\$ .* et \$(\d+)\$ /); return cmp(q, gcd(+m[1], +m[2])); },
    'Décomposition en facteurs premiers': (q, s) => {
      if (inp(q) === null) return undefined;
      let n = +mat(s, /premiers de \$(\d+)\$/)[1]; const e = [2, 3, 5, 7].map((p) => { let k = 0; while (n % p === 0) { n /= p; k++; } return k; });
      if (n !== 1) return 'facteur premier > 7';
      return cmp(q, e);
    }
  };

  // ---------------------------------------------------------------- 2N2
  const exprOf = (s, name) => mat(s, new RegExp(`\\$${name} = (.*?)\\$`))[1];
  const n2N2 = {
    'Développer et réduire': (q, s) => { const f = fx(exprOf(s, 'E')); const a = pv(inp(q)); return same(f, (x) => a[0] * x + a[1]) || 'développement faux'; },
    'Factoriser $ax^2 + bx$': (q, s) => { const f = fx(exprOf(s, 'F')); const a = pv(inp(q)); if (!same(f, (x) => a[0] * x * (a[1] * x + a[2]))) return 'factorisation fausse'; const [, c1, c2] = quad(exprOf(s, 'F')); return a[0] === gcd(c1, c2) || 'k pas maximal'; },
    'Réduire au même dénominateur': (q, s) => { const m = mat(s, /\$B = (.*?)\$ sous la forme \$\\dfrac\{mx \+ n\}\{(.*?)\}\$/); const f = fx(m[1]); const g = fx(m[2]); const a = pv(inp(q)); return same(f, (x) => (a[0] * x + a[1]) / g(x)) || 'quotient faux'; },
    'Choisir la forme adaptée': (q, s) => {
      const dev = mat(s, /f\(x\) = (.*?) = /)[1]; const [c0, c1, c2] = quad(dev);
      if (/Calculer \$f\(0\)\$|calculer \$f\(0\)\$/.test(s)) return cmp(q, c0);
      if (/ésoudre \$f\(x\) = 0\$/.test(s)) { const D = c1 * c1 - 4 * c2 * c0; const r = [(-c1 - Math.sqrt(D)) / (2 * c2), (-c1 + Math.sqrt(D)) / (2 * c2)].sort((u, v) => u - v); return cmp(q, r); }
      const a = +mat(s, /alculer \$f\((-?\d+)\)\$/)[1]; return cmp(q, c0 + c1 * a + c2 * a * a);
    }
  };
  const polyCheck = (exprName) => (q, s) => {
    if (inp(q) === null) return undefined;
    const f = fx(exprOf(s, exprName)); const a = pv(inp(q));
    return same(f, (x) => a[0] * x * x + a[1] * x + a[2]) || 'coefficients faux';
  };
  n2N2['Développement : carré d\'une somme'] = polyCheck('A');
  n2N2['Développement : carré d\'une différence'] = polyCheck('A');
  n2N2['Différence de deux carrés'] = polyCheck('B');
  n2N2['Double distributivité'] = polyCheck('B');
  n2N2['Factorisation par un facteur commun'] = (q, s) => {
    if (inp(q) === null) return undefined;
    const f = fx(exprOf(s, 'C')); const F = fx(mat(s, /\$C = (\([^()]*\))/)[1]); const a = pv(inp(q));
    return same(f, (x) => F(x) * (a[0] * x + a[1])) || 'factorisation fausse';
  };
  n2N2['Factorisation : différence de deux carrés'] = (q, s) => {
    if (inp(q) === null) return undefined;
    const f = fx(exprOf(s, 'D')); const a = pv(inp(q));
    if (a.length === 2) { const c = lin(mat(s, /\$D = \(([^()]*)\)\^2/)[1])[1]; if (a[0] >= a[1]) return 'm < n attendu'; return same(f, (x) => (c * x + a[0]) * (c * x + a[1])) || 'factorisation fausse'; }
    return same(f, (x) => (a[0] * x + a[1]) * (a[2] * x + a[3])) || 'factorisation fausse';
  };

  // ---------------------------------------------------------------- 2N3
  const countInt = (pred) => { let c = 0; for (let x = -200; x <= 200; x++) if (pred(x)) c++; return c; };
  const n2N3 = {
    'Entiers d\'un intervalle': (q, s) => { const I = iv(mat(s, /I = (.*?)\$/)[1]); return cmp(q, countInt((x) => inIv(I, x))); },
    'Centre et rayon d\'un intervalle': (q, s) => { const I = iv(mat(s, /x \\in (.*?) \\iff/)[1]); const strict = /< r\$/.test(s); if (I.lc === strict || I.rc === strict) return 'crochets incohérents'; return cmp(q, [(I.a + I.b) / 2, (I.b - I.a) / 2]); },
    'Encadrement d\'une racine carrée (balayage)': (q, s) => { const N = +mat(s, /\\sqrt\{(\d+)\}/)[1]; let k = 0; while ((k + 1) * (k + 1) <= 100 * N) k++; return cmp(q, k / 10); },
    'Équation avec valeur absolue': (q, s) => { if (inp(q) === null) return undefined; const m = mat(s, /\|x ([+-]) (\d+)\| = (\d+)\$/); const c = m[1] === '-' ? +m[2] : -m[2]; return cmp(q, [c - +m[3], c + +m[3]]); }
  };
  const interCount = (q, s) => { const I = iv(mat(s, /I = (.*?)\$/)[1]); const J = iv(mat(s, /J = (.*?)\$/)[1]); const inter = /\\cap J/.test(s); return cmp(q, countInt((x) => (inter ? inIv(I, x) && inIv(J, x) : inIv(I, x) || inIv(J, x)))); };
  n2N3['Entiers d\'une intersection d\'intervalles'] = interCount;
  n2N3['Entiers d\'une réunion d\'intervalles'] = interCount;

  // ---------------------------------------------------------------- 2N4
  const rel = { '<': (a, b) => a < b, '\\le': (a, b) => a <= b, '>': (a, b) => a > b, '\\ge': (a, b) => a >= b };
  const n2N4 = {
    'Équation du premier degré': (q, s) => { const m = mat(s, /équation \$(.*) = (.*)\$\./); const [c0, c1] = lin(`(${m[1]})-(${m[2]})`); return cmp(q, -c0 / c1); },
    'Équation quotient': (q, s) => { const m = mat(s, /\$\\dfrac\{(.*?)\}\{(.*?)\} = (-?\d+)\$/); const [n0, n1] = lin(m[1]); const [d0, d1] = lin(m[2]); const k = +m[3]; const x = (k * d0 - n0) / (n1 - k * d1); if (near(d0 + d1 * x, 0)) return 'valeur interdite'; return cmp(q, x); },
    'Entier solution d\'une inéquation': (q, s) => { const m = mat(s, /inéquation \$(.*?) (>|\\ge) (.*?)\$/); const L = fx(m[1]); const R = fx(m[3]); const ok = (x) => rel[m[2]](L(x), R(x)); const xs = []; for (let x = -100; x <= 100; x++) if (ok(x)) xs.push(x); return cmp(q, /plus petit/.test(s) ? xs[0] : xs[xs.length - 1]); },
    'Entiers solutions d\'une inéquation produit': (q, s) => { const m = mat(s, /inéquation \$(.*) (\\le|<|\\ge|>) 0\$/); const f = fx(m[1]); return cmp(q, countInt((x) => rel[m[2]](f(x), 0))); },
    'Modéliser par une inéquation': (q, s) => { const m = mat(s, /abonnement de \$(\d+)\$ € puis \$(\d+)\$ €.*Tarif B : \$(\d+)\$ €/); let n = 0; while (!(+m[1] + +m[2] * n < +m[3] * n)) n++; return cmp(q, n); },
    'Équation produit nul': (q, s) => { if (inp(q) === null) return undefined; const [c0, c1, c2] = quad(mat(s, /équation : \$(.*) = 0\$/)[1]); const D = c1 * c1 - 4 * c2 * c0; return cmp(q, [(-c1 - Math.sqrt(D)) / (2 * c2), (-c1 + Math.sqrt(D)) / (2 * c2)].sort((u, v) => u - v)); }
  };

  // ---------------------------------------------------------------- 2N5 (saisies explicites : cohérence avec la réponse vérifiée par ailleurs)
  const n2N5 = (q) => {
    if (q.exactInput === undefined) return undefined;
    const v = pct(q.answer);
    if (!Number.isFinite(v)) return undefined;
    return near(pv(q.exactInput)[0], v) ? undefined : `saisie ${q.exactInput} ≠ réponse ${q.answer}`;
  };

  // ---------------------------------------------------------------- 2A1, 2A2, 2A3
  const n2A1 = {
    'Point d\'une courbe et paramètre': (q, s) => { const m = mat(s, /f\(x\) = ax\^2 ?([+-] \d+)?\$/); const c = m[1] ? +m[1].replace(' ', '') : 0; const [x0, y0] = pt(s, 'A'); return cmp(q, (y0 - c) / (x0 * x0)); },
    'Intersection de deux courbes': (q, s) => { const f = lin(mat(s, /f\(x\) = (.*?)\$/)[1]); const g = lin(mat(s, /g\(x\) = (.*?)\$/)[1]); const x = (g[0] - f[0]) / (f[1] - g[1]); return cmp(q, [x, f[0] + f[1] * x]); },
    'Valeur interdite': (q, s) => { const [d0, d1] = lin(mat(s, /\\dfrac\{.*?\}\{(.*?)\}\$/)[1]); return cmp(q, -d0 / d1); },
    'Modéliser par une fonction': (q, s) => { const h = +mat(s, /A\(x\) = x\((\d+) - x\)/)[1]; if (/Donner \$b\$/.test(s)) return cmp(q, h); const x0 = +mat(s, /Calculer \$A\((\d+)\)\$/)[1]; return cmp(q, x0 * (h - x0)); }
  };
  const n2A2 = {
    'Extremum à partir des variations': (q, s) => {
      const pts = [...s.matchAll(/\$f\((-?\d+)\) = (-?\d+)\$/g)].map((m) => [+m[1], +m[2]]);
      const m = mat(s, /(maximum|minimum) de \$f\$ sur \$\[(-?\d+) ; (-?\d+)\]\$/);
      const vals = pts.filter(([x]) => x >= +m[2] && x <= +m[3]).map(([, y]) => y);
      // cohérence des sens de variation annoncés
      const segs = [...s.matchAll(/(croissante|décroissante) sur \$\[(-?\d+) ; (-?\d+)\]\$/g)];
      for (const sg of segs) { const a = pts.find(([x]) => x === +sg[2]); const b = pts.find(([x]) => x === +sg[3]); if ((sg[1] === 'croissante') !== (b[1] > a[1])) return 'variations incohérentes'; }
      return cmp(q, m[1] === 'maximum' ? Math.max(...vals) : Math.min(...vals));
    },
    'Extremum d\'une fonction affine': (q, s) => { const f = fx(mat(s, /f\(x\) = (.*?)\$/)[1]); const m = mat(s, /sur \$\[(-?\d+) ; (-?\d+)\]\$\. Quel est le (maximum|minimum)/); const v = [f(+m[1]), f(+m[2])]; return cmp(q, m[3] === 'maximum' ? Math.max(...v) : Math.min(...v)); },
    'Problème d\'optimisation': (q, s) => { const P = +mat(s, /périmètre de \$(\d+)\$ m/)[1]; const c = P / 4; if (!same(fx(mat(s, /A\(x\) = (.*?) = /)[1]), (x) => x * (P / 2 - x))) return 'aire mal modélisée'; return cmp(q, /aire maximale/.test(s) ? c * c : c); },
    'Problème d\'optimisation (enclos)': (q, s) => { const L = +mat(s, /dispose de \$(\d+)\$ m/)[1]; return cmp(q, /aire maximale/.test(s) ? (L / 4) * (L / 2) : L / 4); },
    'Extremum d\'une fonction du second degré': (q, s) => { if (inp(q) === null) return undefined; const [c0, c1, c2] = quad(mat(s, /f\(x\) = (.*?)\$ définie/)[1]); const al = -c1 / (2 * c2); return cmp(q, [al, c0 + c1 * al + c2 * al * al]); },
    'Encadrement d\'images': (q, s) => {
      if (inp(q) === null) return undefined;
      const f = fx(mat(s, /f\(x\) = (.*?)\$/)[1]); const m = mat(s, /x \\in \[(-?\d+) ; (-?\d+)\]/); const a = +m[1]; const b = +m[2];
      const ys = []; for (let k = 0; k <= 4000; k++) ys.push(f(a + (b - a) * k / 4000)); if (a < 0 && b > 0) ys.push(f(0));
      return cmp(q, [Math.min(...ys), Math.max(...ys)], 1e-6);
    }
  };
  const sqEq = (q, s) => { const m = mat(s, /\(x ([+-]) (\d+)\)\^2 (=|\\le|<|\\ge|>) (\d+)\$/); const a = m[1] === '-' ? +m[2] : -m[2]; const r = Math.sqrt(+m[4]); return cmp(q, [a - r, a + r]); };
  const n2A3 = {
    'Équation $(x - a)^2 = k$': sqEq,
    'Inéquation $(x - a)^2 \\le k$': sqEq,
    'Équation $\\sqrt{ax + b} = k$': (q, s) => { const m = mat(s, /\\sqrt\{(.*?)\} = (\d+)\$/); const [c0, c1] = lin(m[1]); return cmp(q, (+m[2] * +m[2] - c0) / c1); },
    'Équation $x^2 = k$': (q, s) => { if (inp(q) === null) return undefined; const k = +mat(s, /x\^2 = (-?\d+)\$/)[1]; return cmp(q, [-Math.sqrt(k), Math.sqrt(k)]); },
    'Équation $x^3 = k$': (q, s) => { if (inp(q) === null) return undefined; const k = +mat(s, /x\^3 = (-?\d+)\$/)[1]; return cmp(q, Math.cbrt(k)); },
    'Équation $\\frac{1}{x} = k$': (q, s) => { if (inp(q) === null) return undefined; const k = nv(mat(s, /\\dfrac\{1\}\{x\} = (.*?)\$/)[1]); return cmp(q, 1 / k); }
  };

  // ---------------------------------------------------------------- 2G1, 2G2, 2G3
  const n2G1 = {
    'Distance entière entre deux points': (q, s) => { const A = pt(s, 'A'); const B = pt(s, 'B'); return cmp(q, Math.hypot(B[0] - A[0], B[1] - A[1])); },
    'Centre du cercle circonscrit (triangle rectangle)': (q, s) => { const A = pt(s, 'A'); const B = pt(s, 'B'); const C = pt(s, 'C'); if ((B[0] - A[0]) * (C[0] - A[0]) + (B[1] - A[1]) * (C[1] - A[1]) !== 0) return 'pas rectangle en A'; return cmp(q, [(B[0] + C[0]) / 2, (B[1] + C[1]) / 2]); },
    'Point équidistant sur un axe': (q, s) => { const A = pt(s, 'A'); const B = pt(s, 'B'); const x = pv(inp(q))[0]; return near(Math.hypot(x - A[0], A[1]), Math.hypot(x - B[0], B[1])) || 'MA ≠ MB'; }
  };
  const n2G2 = {
    'Extrémité d\'un vecteur': (q, s) => { const A = pt(s, 'A'); const u = vec(s, '\\\\overrightarrow\\{AB\\}'); return cmp(q, [A[0] + u[0], A[1] + u[1]]); },
    'Coordonnées d\'un vecteur': (q, s) => { if (inp(q) === null) return undefined; const A = pt(s, 'A'); const B = pt(s, 'B'); return cmp(q, [B[0] - A[0], B[1] - A[1]]); },
    'Combinaison linéaire de vecteurs': (q, s) => { if (inp(q) === null) return undefined; const u = vec(s, '\\\\vec\\{u\\}'); const v = vec(s, '\\\\vec\\{v\\}'); const m = mat(s, /\\vec\{w\} = (-?\d*)\\vec\{u\} ([+-]) (\d*)\\vec\{v\}/); const k = m[1] === '' ? 1 : m[1] === '-' ? -1 : +m[1]; const l = (m[2] === '-' ? -1 : 1) * (m[3] === '' ? 1 : +m[3]); return cmp(q, [k * u[0] + l * v[0], k * u[1] + l * v[1]]); },
    'Calcul d\'un déterminant': (q, s) => { const u = vec(s, '\\\\vec\\{u\\}'); const v = vec(s, '\\\\vec\\{v\\}'); return cmp(q, u[0] * v[1] - u[1] * v[0]); },
    'Norme d\'un vecteur': (q, s) => { const u = vec(s, '\\\\vec\\{u\\}'); return cmp(q, Math.hypot(u[0], u[1])); },
    'Coefficient de colinéarité': (q, s) => { const u = vec(s, '\\\\vec\\{u\\}'); const w = vec(s, '\\\\vec\\{w\\}'); const k = w[0] / u[0]; if (!near(w[1], k * u[1])) return 'non colinéaires'; return cmp(q, k); },
    'Point aligné avec deux autres': (q, s) => { const A = pt(s, 'A'); const B = pt(s, 'B'); const xC = +mat(s, /C\((-?\d+) ; y\)/)[1]; const y = pv(inp(q))[0]; return near((B[0] - A[0]) * (y - A[1]) - (B[1] - A[1]) * (xC - A[0]), 0) || 'non alignés'; }
  };
  const cart = (tex) => { const F = (x, y) => evalTex(tex, { x, y }); const c = F(0, 0); return [F(1, 0) - c, F(0, 1) - c, c]; };
  const n2G3 = {
    'Coefficient directeur': (q, s) => { const A = pt(s, 'A'); const B = pt(s, 'B'); return cmp(q, (B[1] - A[1]) / (B[0] - A[0])); },
    'Équation réduite d\'une droite': (q, s) => { if (inp(q) === null) return undefined; const A = pt(s, 'A'); const B = pt(s, 'B'); const m = (B[1] - A[1]) / (B[0] - A[0]); return cmp(q, [m, A[1] - m * A[0]]); },
    'Équation cartésienne vers équation réduite': (q, s) => { const [a, b, c] = cart(mat(s, /équation cartésienne \$(.*?) = 0\$/)[1]); return cmp(q, [-a / b, -c / b]); },
    'Droite par un point et sa pente': (q, s) => { const m = +mat(s, /de pente \$(-?\d+)\$/)[1]; const A = pt(s, 'A'); return cmp(q, [m, A[1] - m * A[0]]); },
    'Point d\'une droite d\'abscisse donnée': (q, s) => { const x0 = +mat(s, /d'abscisse \$(-?\d+)\$/)[1]; const [a, b, c] = cart(mat(s, /d : (.*?) = 0\$/)[1]); return cmp(q, -(a * x0 + c) / b); },
    'Intersection avec l\'axe des abscisses': (q, s) => { const [c0, c1] = lin(mat(s, /d : y = (.*?)\$/)[1]); return cmp(q, -c0 / c1); },
    'Point d\'intersection de deux droites': (q, s) => { const f = lin(mat(s, /d_1 : y = (.*?)\$/)[1]); const g = lin(mat(s, /d_2 : y = (.*?)\$/)[1]); const x = (g[0] - f[0]) / (f[1] - g[1]); return cmp(q, [x, f[0] + f[1] * x]); },
    'Droites parallèles et paramètre': (q, s) => { const sl = mat(s, /y = \((.*?)\)x/)[1]; const g = lin(mat(s, /d_2 : y = (.*?)\$/)[1]); const k = pv(inp(q))[0]; return near(evalTex(sl, { k }), g[1]) || 'pentes différentes'; }
  };

  // ---------------------------------------------------------------- 2S1, 2S2
  const rows = (s) => [...s.matchAll(/\| \$\[(\d+) ; (\d+)\[\$ \| \$(\d+)\$ \|/g)].map((m) => [+m[1], +m[2], +m[3]]);
  const round2 = (x) => Math.round(x * 100) / 100;
  const n2S1 = {
    'Moyenne de données regroupées en classes': (q, s) => { const R = rows(s); const N = R.reduce((t, r) => t + r[2], 0); return cmp(q, round2(R.reduce((t, r) => t + (r[0] + r[1]) / 2 * r[2], 0) / N)); },
    'Ajout d\'une valeur à une série': (q, s) => { const m = mat(s, /série de \$(\d+)\$ notes a pour moyenne \$(\d+)\$\. On ajoute la note \$(\d+)\$/); return cmp(q, round2((+m[1] * +m[2] + +m[3]) / (+m[1] + 1))); },
    'Classe médiane': (q, s) => { const R = rows(s); const N = R.reduce((t, r) => t + r[2], 0); let c = 0; for (const r of R) { c += r[2]; if (c > N / 2) return cmp(q, r[0]); } return 'pas de classe'; },
    'Note nécessaire pour une moyenne': (q, s) => { const n = +mat(s, /Après \$(\d+)\$ devoirs/)[1]; const t = +mat(s, /soit exactement \$(\d+)\$/)[1]; const ms = s.match(/vaut exactement \$(\d+)\$/); const S = ms ? +ms[1] : n * nv(mat(s, /moyenne d'un élève est \$(.*?)\$/)[1]); return cmp(q, (n + 1) * t - S); }
  };
  const disp = (q, s) => { const xs = mat(s, /série : ([\d ;]+)\./)[1].split(';').map(Number); const m = xs.reduce((a, b) => a + b, 0) / xs.length; const Vv = xs.reduce((a, x) => a + (x - m) ** 2, 0) / xs.length; return cmp(q, /écart type/.test(s) ? round2(Math.sqrt(Vv)) : Vv); };
  n2S1['Écart type d\'une série'] = disp;
  n2S1['Variance d\'une série'] = disp;
  const n2S2 = {
    'Probabilité d\'une issue manquante': (q, s) => { const ps = [...s.matchAll(/\| \$(0\{,\}\d+)\$/g)].map((m) => nv(m[1])); return cmp(q, 1 - ps.reduce((a, b) => a + b, 0)); },
    'Tableau croisé et probabilité conditionnelle': (q, s) => {
      const R = [...s.matchAll(/\| \*\*([^*]+)\*\* \| \$(\d+)\$ \| \$(\d+)\$ \| \$(\d+)\$ \|/g)].map((m) => [m[1], +m[2], +m[3], +m[4]]);
      const [r1, r2, tot] = R; if (r1[1] + r1[2] !== r1[3] || r1[1] + r2[1] !== tot[1] || tot[3] !== r1[3] + r2[3]) return 'totaux faux';
      const ev = mat(s, /On note \$(\w)\$ : « (.*?) » et \$(\w)\$ : « (.*?) »/); const L = ev[1]; const C = ev[3];
      const a = r1[1]; let exp;
      if (new RegExp(`P\\(${L} \\\\cap ${C}\\)`).test(s)) exp = a / tot[3];
      else if (new RegExp(`P_\\{${L}\\}\\(${C}\\)`).test(s)) exp = a / r1[3];
      else if (new RegExp(`P_\\{${C}\\}\\(${L}\\)`).test(s)) exp = a / tot[1];
      else return 'question illisible';
      return cmp(q, exp);
    },
    'Arbre pondéré : probabilité d\'un chemin': (q, s) => { const m = mat(s, /P\(A\) = (.*?)\$, \$P_A\(B\) = (.*?)\$ et \$P_\{\\bar\{A\}\}\(B\) = (.*?)\$/); const [pa, pba, pbna] = [m[1], m[2], m[3]].map(nv); return cmp(q, /P\(\\bar\{A\} \\cap B\)/.test(s) ? (1 - pa) * pbna : pa * pba); },
    'Test de dépistage : faux positifs': (q, s) => { const m = mat(s, /touche \$(\d+)\\,\\%\$.*chez \$(\d+)\\,\\%\$ des malades.*chez \$(\d+)\\,\\%\$ des non-malades/); const p = +m[1] / 100; const se = +m[2] / 100; const sp = +m[3] / 100; const vp = p * se; const fp = (1 - p) * (1 - sp); return cmp(q, /ne soit pas malade/.test(s) ? fp / (vp + fp) : vp / (vp + fp)); }
  };

  // ---------------------------------------------------------------- 2S3 (réécrit)
  const n2S3 = {
    'Fréquence observée': (q, s) => { const m = mat(s, /lance \$(\d+)\$ fois .* obtient \$(\d+)\$ fois/); return cmp(q, +m[2] / +m[1]); },
    'Effectif à partir d\'une fréquence': (q, s) => { const m = mat(s, /échantillon de \$(\d+)\$ tirages, la fréquence observée de succès est \$f = (.*?)\$/); return cmp(q, Math.round(+m[1] * nv(m[2]))); },
    'La fonction randint': (q, s) => { const m = mat(s, /randint\((\d+), (\d+)\)/); const n = +m[2] - +m[1] + 1; return cmp(q, /Combien de valeurs/.test(s) ? n : 1 / n); },
    'Probabilité estimée par une simulation': (q, s) => {
      const m = mat(s, /if randint\(1, (\d+)\) (<=|>=|% 2 ==|==) (\d+):/); const F = +m[1]; const k = +m[3]; let fav = 0;
      for (let r = 1; r <= F; r++) if ((m[2] === '<=' && r <= k) || (m[2] === '>=' && r >= k) || (m[2] === '% 2 ==' && r % 2 === k) || (m[2] === '==' && r === k)) fav++;
      return cmp(q, fav / F);
    },
    'Regrouper des échantillons': (q, s) => { const n = +mat(s, /chacun \$(\d+)\$ lancers/)[1]; const xs = mat(s, /respectivement \$(.*?)\$ fois/)[1].split(/\$, \$/).map(Number); return cmp(q, xs.reduce((a, b) => a + b, 0) / (n * xs.length)); },
    'Somme de deux dés simulée': (q, s) => { const t = +mat(s, /if s == (\d+):/)[1]; let f = 0; for (let i = 1; i <= 6; i++) for (let j = 1; j <= 6; j++) if (i + j === t) f++; return cmp(q, f / 36); },
    'Écart entre fréquence et probabilité': (q, s) => { const m = mat(s, /simule \$(\d+)\$ fois .* \$p = (.*?)\$ et on obtient \$(\d+)\$ succès/); return cmp(q, Math.abs(+m[3] / +m[1] - nv(m[2]))); },
    'Fluctuation d\'échantillonnage': (q, s) => { const p = nv(mat(s, /\$p = (.*?)\$/)[1]); const e = nv(mat(s, /au plus \$(.*?)\$ de/)[1]); const fs = mat(s, /observées sont : \$(.*?)\$\. Combien/)[1].split(/\$ ; \$/).map(nv); return cmp(q, fs.filter((f) => Math.abs(f - p) <= e + 1e-9).length); },
    'Programme simulant des échantillons': (q, s) => { const m = mat(s, /frequence\((\d+)\) for k in range\((\d+)\)/); return cmp(q, /éléments contient/.test(s) ? +m[2] : +m[1] * +m[2]); },
    'Lire un programme de simulation': (q) => (/La fréquence de/.test(q.answer) ? true : 'réponse'),
    'Loi des grands nombres': (q, s) => { const m = mat(s, /taille \$10\\,000\$ : \$f = (.*?)\$/); return q.answer.startsWith(`$${m[1]}$`) || 'mauvaise estimation'; },
    'Taille de l\'échantillon et fluctuation': (q) => (/plus proches de \$p\$ que/.test(q.answer) ? true : 'réponse')
  };


  // ---------------------------------------------------------------- compléments 2nde (BO 2026)
  Object.assign(n2N1, {
    'Cardinal d\'une réunion': (q, s) => { const m = mat(s, /de \$1\$ à \$(\d+)\$.*multiples de \$(\d+)\$ .*multiples de \$(\d+)\$/); const N = +m[1]; let c = 0; for (let x = 1; x <= N; x++) if (x % +m[2] === 0 || x % +m[3] === 0) c++; return cmp(q, c); },
    'Cardinal d\'une intersection': (q, s) => { const m = mat(s, /de \$1\$ à \$(\d+)\$.*multiples de \$(\d+)\$ .*multiples de \$(\d+)\$/); const N = +m[1]; let c = 0; for (let x = 1; x <= N; x++) if (x % +m[2] === 0 && x % +m[3] === 0) c++; return cmp(q, c); },
    'Caractérisation des nombres décimaux': (q, s) => {
      const isDec = (d) => { while (d % 2 === 0) d /= 2; while (d % 5 === 0) d /= 5; return d === 1; };
      const want = !/n'est PAS/.test(s);
      const ok = (o) => { const m = o.match(/\\frac\{(\d+)\}\{(\d+)\}/); return gcd(+m[1], +m[2]) === 1 && isDec(+m[2]) === want; };
      return ok(q.answer) && q.options.filter(ok).length === 1 ? true : 'caractérisation fausse';
    }
  });
  Object.assign(n2N3, {
    'Arrondi et chiffres significatifs': (q, s) => { const x = nv(mat(s, /: \$(.*?)\$\. Arrondir/)[1].replace(/\\,/g, '')); const k = +mat(s, /à (\d) chiffres/)[1]; const o = Math.floor(Math.log10(x) + 1e-12); const st = Math.pow(10, o - k + 1); return cmp(q, Math.round(x / st) * st, 1e-9); },
    'Comparer par la différence': (q, s) => { const m = mat(s, /A = \\dfrac\{(\d+)\}\{(\d+)\}\$ et \$B = \\dfrac\{(\d+)\}\{(\d+)\}/); return cmp(q, +m[1] / +m[2] - +m[3] / +m[4]); },
    'Comparer par le quotient': (q, s) => { const m = mat(s, /\$A = (\d+)\$ .* \$B = (\d+)\$/); return cmp(q, +m[1] / +m[2]); }
  });
  Object.assign(n2N4, {
    'Équation $x^2 = a$': (q, s) => { const a = +mat(s, /x\^2 = (\d+)\$/)[1]; return cmp(q, [-Math.sqrt(a), Math.sqrt(a)]); },
    'Équation $\\frac{a}{x} = b$': (q, s) => { const m = mat(s, /\\dfrac\{(-?\d+)\}\{x\} = (-?\d+)\$/); return cmp(q, +m[1] / +m[2]); },
    'Isoler une variable': (q, s) => { const m = mat(s, /relation \$(.*?) = (-?\d+)\$/); const [a, b] = cart(m[1]); return cmp(q, [-a / b, +m[2] / b]); },
    'Isoler une variable dans une formule': (q, s) => { const m = mat(s, /relation \$(\w) = (\w) \\times (\w)\$.*Exprimer \$(\w)\$.*pour \$\w = (.*?)\$ .* et \$\w = (.*?)\$/); return cmp(q, nv(m[5]) / nv(m[6])); }
  });
  Object.assign(n2A3, {
    'Fonction valeur absolue': (q, s) => { const m = mat(s, /Calculer \$f\((-?\d+)\) - f\((-?\d+)\)\$/); return cmp(q, Math.abs(+m[1]) - Math.abs(+m[2])); },
    'Inéquation avec la fonction valeur absolue': (q, s) => { const k = +mat(s, /\|x\| (?:\\le|<) (\d+)\$/)[1]; return cmp(q, [-k, k]); },
    'Extremums de la fonction valeur absolue': (q, s) => { const m = mat(s, /intervalle \$\[(-?\d+) ; (-?\d+)\]\$/); const a = +m[1]; const b = +m[2]; return cmp(q, [a <= 0 && b >= 0 ? 0 : Math.min(Math.abs(a), Math.abs(b)), Math.max(Math.abs(a), Math.abs(b))]); }
  });
  const fcv = (q, s) => {
    const R = [...s.matchAll(/\| \*\*([^*]+)\*\* \| \$(\d+)\$ \| \$(\d+)\$ \| \$(\d+)\$ \|/g)].map((m) => [m[1], +m[2], +m[3], +m[4]]);
    const [r1, r2, tot] = R; if (r1[1] + r2[1] !== tot[1] || r1[1] + r1[2] !== r1[3]) return 'totaux faux';
    if (/fréquence marginale/.test(s)) return cmp(q, tot[1] / tot[3]);
    if (/parmi les « /.test(s)) return cmp(q, r1[1] / r1[3]);
    return cmp(q, r2[1] / tot[1]);
  };
  n2S1['Fréquence marginale'] = fcv; n2S1['Fréquence conditionnelle'] = fcv;
  const n2S4 = { 'Quotient et reste en Python': (q, s) => { if (inp(q) === null) return undefined; const m = mat(s, /print\((\d+) \/\/ (\d+), \d+ % \d+\)/); return cmp(q, [Math.floor(+m[1] / +m[2]), +m[1] % +m[2]]); } };

  // ---------------------------------------------------------------- 1re
  const rhs = (a) => String(a).replace(/^\$|\$$/g, '').split(/=/).pop();
  const piv = (t) => { // "\frac{3\pi}{4}" / "-\pi" / "\frac{\pi}{6}" -> coefficient de pi
    t = t.replace(/\s/g, ''); let m;
    if ((m = t.match(/^(-?)\\frac\{(\d*)\\pi\}\{(\d+)\}$/))) return (m[1] ? -1 : 1) * (m[2] ? +m[2] : 1) / +m[3];
    if ((m = t.match(/^(-?)(\d*)\\pi$/))) return (m[1] ? -1 : 1) * (m[2] ? +m[2] : 1);
    if (t === '0') return 0;
    return NaN;
  };
  const ansNums = (a) => [...String(a).replace(/f'?\([^)]*\)|[fu]_?\{?\w*\}?\([^)]*\)|u_\{?\w+\}?|v_\{?\w+\}?|x_\d/g, ' ').matchAll(/(-?)\\frac\{(-?\d+)\}\{(\d+)\}|-?\d+(?:\{,\}\d+)?/g)].map((m) => (m[2] !== undefined ? (m[1] ? -1 : 1) * m[2] / m[3] : nv(m[0])));
  const viaAns = (fn) => (q, s) => { if (q.exactInput === undefined) return undefined; let e; try { e = fn(q.answer, s); } catch (err) { return 'réponse illisible : ' + err.message; } const r = cmp(q, e); return r === true ? undefined : r; };
  const numsAns = viaAns((a) => ansNums(a));
  const n1A1 = {
    'Factoriser un trinôme': (q, s) => { const [c0, c1, c2] = quad(mat(s, /f\(x\) = (.*?)\$ sous/)[1]); const D = Math.sqrt(c1 * c1 - 4 * c2 * c0); const r = [(-c1 - D) / (2 * c2), (-c1 + D) / (2 * c2)].sort((u, v) => u - v); return cmp(q, [c2, ...r]); },
    'Trinôme connaissant ses racines': (q, s) => { const m = mat(s, /s'annule en \$(-?\d+)\$ et en \$(-?\d+)\$, et \$f\((-?\d+)\) = (-?\d+)\$/); const [r1, r2, x0, y0] = m.slice(1).map(Number); const a = y0 / ((x0 - r1) * (x0 - r2)); return cmp(q, [a, -a * (r1 + r2), a * r1 * r2]); },
    'Signe d\'un trinôme sous forme factorisée': (q, s) => { const m = mat(s, /f\(x\) = (.*?)\$\. L'ensemble des solutions de \$f\(x\) (<|>) 0\$/); const f = fx(m[1]); const xs = []; for (let x = -20; x <= 20; x += 0.5) if (m[2] === '<' ? f(x) < 0 : f(x) > 0) xs.push(x); return cmp(q, [xs[0] - 0.5, xs[xs.length - 1] + 0.5]); },
    'Deux nombres de somme et produit donnés': (q, s) => { const m = mat(s, /somme vaut \$(-?\d+)\$ et le produit vaut \$(-?\d+)\$/); const S = +m[1]; const P = +m[2]; const D = Math.sqrt(S * S - 4 * P); return cmp(q, [(S - D) / 2, (S + D) / 2]); },
    'Racine évidente': (q, s) => { const m = mat(s, /que \$(-?\d+)\$ est une racine évidente de \$f\(x\) = (.*?)\$/); const [c0, c1, c2] = quad(m[2]); const one = +m[1]; if (!near(c2 * one * one + c1 * one + c0, 0)) return 'pas racine'; return cmp(q, c0 / c2 / one); },
    'Nombre de solutions d\'une équation du second degré': viaAns((a) => (/Deux/.test(a) ? 2 : /seule/.test(a) ? 1 : /Aucune/.test(a) ? 0 : NaN)),
    'Résolution d\'une équation du second degré': numsAns,
    'Forme canonique d\'un trinôme': viaAns((a) => { const [c0, c1, c2] = quad(rhs(a)); const al = -c1 / (2 * c2); return [c2, al, c0 + c1 * al + c2 * al * al]; }),
    'Trinôme à paramètre': numsAns
  };
  const n1A2 = {
    'Approximation affine': (q, s) => { const m = mat(s, /f\((-?\d+)\) = (-?\d+)\$ et \$f'\(-?\d+\) = (-?\d+)\$.*de \$f\((.*?)\)\$/); return cmp(q, +m[2] + +m[3] * (nv(m[4]) - +m[1])); },
    'Vitesse instantanée': (q, s) => { const d = mat(s, /d\(t\) = (.*?)\$/)[1]; const t0 = +mat(s, /instant \$t = (\d+)\$/)[1]; const f = (t) => evalTex(d, { t }); return cmp(q, (f(t0 + 1e-6) - f(t0 - 1e-6)) / 2e-6, 1e-5); },
    'Nombre dérivé comme limite': (q, s) => { const f = fx(mat(s, /f\(x\) = (.*?)\$ et/)[1]); const a = +mat(s, /\\dfrac\{f\((-?\d+) \+ h\)/)[1]; const t = (h) => (f(a + h) - f(a)) / h; const beta = t(1e-6); const alpha = t(1) - t(0.5) ? (t(1) - t(0.5)) / 0.5 : 0; return cmp(q, [alpha, beta], 1e-4); },
    'Coût marginal': (q, s) => { const C = mat(s, /C\(q\) = (.*?)\$/)[1]; const q0 = +mat(s, /pour \$q = (\d+)\$/)[1]; const f = (x) => evalTex(C, { q: x }); return cmp(q, (f(q0 + 1e-4) - f(q0 - 1e-4)) / 2e-4, 1e-5); },
    'Lecture de la tangente': numsAns,
    'Équation de la tangente': viaAns((a) => { const [c0, c1] = lin(rhs(a)); return [c1, c0]; }),
    'Tangentes horizontales': numsAns
  };
  const n1A3 = {
    'Dérivée de $x^n$ avec $n$ entier négatif': (q, s) => { const f = fx(mat(s, /f\(x\) = (.*?)\$\. On a/)[1]); const [k, p] = pv(inp(q)); return [0.7, 1.3, 2.1].every((x) => near((f(x + 1e-6) - f(x - 1e-6)) / 2e-6, k / Math.pow(x, p), 1e-4)) || 'dérivée fausse'; },
    'Nombre dérivé d\'un produit': (q, s) => { const f = fx(mat(s, /f\(x\) = (.*?)\$\. Calculer/)[1]); const x0 = +mat(s, /f'\((-?\d+)\)/)[1]; return cmp(q, (f(x0 + 1e-6) - f(x0 - 1e-6)) / 2e-6, 1e-5); },
    'Parité d\'une fonction': (q, s) => { const f = fx(mat(s, /f\(x\) = (.*?)\$ est-elle/)[1]); const xs = [0.5, 1.3, 2.7]; const even = xs.every((x) => near(f(-x), f(x))); const odd = xs.every((x) => near(f(-x), -f(x))); const exp = even ? 'Paire' : odd ? 'Impaire' : 'Ni paire ni impaire'; return q.answer === exp || `attendu ${exp}`; },
    'Dérivée d\'un produit': viaAns((a) => { const [c0, c1] = lin(rhs(a)); return [c1, c0]; }),
    'Dérivée d\'un quotient': viaAns((a) => { const m = rhs(a).match(/(-?)\\frac\{(\d+)\}/); return (m[1] ? -1 : 1) * +m[2]; }),
    'Dérivée de l\'inverse d\'une fonction': viaAns((a) => { const m = rhs(a).match(/(-?)\\frac\{(\d+)\}/); return (m[1] ? -1 : 1) * +m[2]; }),
    'Dérivée d\'un produit avec la racine carrée': viaAns((a) => { const [c0, c1] = lin(rhs(a).match(/\\frac\{(.*?)\}\{2\\sqrt\{x\}\}/)[1]); return [c1, c0]; }),
    'Extremum local d\'une fonction polynôme': viaAns((a) => { const n = ansNums(a); return [n[1], n[0]]; }),
    'Optimisation sur $]0 ; +\\infty[$': viaAns((a) => { const n = ansNums(a); return [n[1], n[0]]; })
  };
  n1A3['Dérivée d\'une fonction polynôme'] = (q) => {
    if (q.exactInput === undefined) return undefined;
    const g = fx(rhs(q.answer)); const v = pv(q.exactInput);
    let ok;
    if (v.length === 3) ok = same(g, (x) => v[0] * x * x + v[1] * x + v[2]);
    else ok = [1, 2, 3, 4, 5, 6].some((d) => same(g, (x) => v[0] * Math.pow(x, d) + v[1]));
    return ok ? undefined : 'coefficients ≠ réponse';
  };
  const ek = (t) => { t = t.replace(/\s/g, ''); let m; if (t === '1') return 0; if (t === 'e') return 1; if ((m = t.match(/^e\^\{(-?\d*)x?\}$/))) return m[1] === '' ? 1 : m[1] === '-' ? -1 : +m[1]; return NaN; };
  const n1A4 = {
    'Décroissance exponentielle $e^{-kt}$': (q, s) => { const m = mat(s, /Q\(t\) = (\d+)e\^\{-(.*?)t\}/); return cmp(q, -nv(m[2]) * +m[1]); },
    'Croissance exponentielle discrète': (q, s) => { const m = mat(s, /N\(n\) = (\d+) \\times (.*?)\^n\$\. Calculer \$N\((\d+)\)/); return cmp(q, Math.round(+m[1] * Math.pow(nv(m[2]), +m[3]) * 100) / 100); },
    'Abscisse de l\'extremum de $(ax + b)e^{kx}$': (q, s) => { const m = mat(s, /f\(x\) = \((.*?)\)e\^\{(-?\d*)x\}\$/); const [b, a] = lin(m[1]); const k = m[2] === '' ? 1 : m[2] === '-' ? -1 : +m[2]; return cmp(q, -(a + b * k) / (a * k)); },
    'Propriétés algébriques de l\'exponentielle': viaAns((a) => ek(rhs(a))),
    'Puissance d\'une exponentielle': viaAns((a) => ek(rhs(a))),
    'Calcul avec des puissances de $e$': viaAns((a) => { const t = rhs(a).trim(); const m = t.match(/^e\^\{(-?\d+)\}$/); return t === 'e' ? 1 : t === '1' ? 0 : +m[1]; }),
    'Dérivée de $e^{kx}$': viaAns((a) => { const m = rhs(a).trim().match(/^(-?\d*)e\^/); return m[1] === '' ? 1 : m[1] === '-' ? -1 : +m[1]; }),
    'Dérivée d\'un produit avec $e^x$': viaAns((a) => { const [c0, c1] = lin(rhs(a).match(/\((.*?)\)e\^/)[1]); return [c1, c0]; }),
    'Dérivée de $(ax + b)e^{kx}$': viaAns((a) => { const [c0, c1] = lin(rhs(a).match(/\((.*?)\)e\^/)[1]); return [c1, c0]; }),
    'Équation avec des exponentielles': numsAns,
    'Équation $e^{u(x)} = 1$': numsAns
  };
  const n1A5 = {
    'Rang à partir duquel une suite croît': (q, s) => { const f = (n) => evalTex(mat(s, /u_n = (.*?)\$ pour/)[1], { n }); let n0 = 0; for (let n = 60; n >= 0; n--) { if (f(n + 1) < f(n)) { n0 = n + 1; break; } } return cmp(q, n0); },
    'Conjecturer une limite': (q, s) => { const f = (n) => evalTex(mat(s, /u_n = (.*?)\$ pour/)[1], { n }); return cmp(q, Math.round(f(1e7))); },
    'Différence de deux termes consécutifs': viaAns((a) => { const g = (n) => evalTex(rhs(a), { n }); return [g(1) - g(0), g(0)]; })
  };
  const n1A6 = {
    'Terme général d\'une suite arithmétique': (q, s) => { const m = mat(s, /raison \$(-?\d+)\$ et \$u_\{(\d+)\} = (-?\d+)\$/); return cmp(q, [+m[3] - +m[2] * +m[1], +m[1]]); },
    'Terme général d\'une suite géométrique': (q, s) => { const m = mat(s, /raison \$(.*?)\$ et \$v_\{(\d+)\} = (.*?)\$/); const qq = nv(m[1]); return cmp(q, [nv(m[3]) / Math.pow(qq, +m[2]), qq]); },
    'Raison d\'une suite arithmétique': numsAns,
    'Raison d\'une suite géométrique': numsAns
  };
  const n1G1 = {
    'Longueur d\'un arc': (q, s) => { const R = +mat(s, /rayon \$(\d+)\$/)[1]; const th = piv(mat(s, /centre de \$(.*?)\$ rad/)[1]); return cmp(q, R * th); },
    'Angle interceptant un arc': (q, s) => { const R = +mat(s, /rayon \$(\d+)\$/)[1]; const L = piv(mat(s, /longueur \$(.*?)\$ cm/)[1]); return cmp(q, L / R); },
    'Calcul avec des valeurs remarquables': (q, s) => { const m = mat(s, /A = (.*?)\$\./); return cmp(q, evalTex(m[1], {})); },
    'Réel associé dans $]-\\pi ; \\pi]$': (q, s) => { const x = piv(mat(s, /que le réel \$(.*?)\$ \?/)[1]); let m = x % 2; if (m > 1) m -= 2; if (m <= -1) m += 2; if (!near(piv(rhs(q.answer)), m)) return 'mauvais réel'; return q.exactInput === undefined ? true : cmp(q, m); },
    'Conversion degrés-radians': viaAns((a) => piv(a.replace(/\$ rad$/, '').replace(/^\$/, ''))),
    'Conversion radians-degrés': viaAns((a) => +a.match(/-?\d+/)[0])
  };
  const n1G2 = { 'Angle entre deux vecteurs': viaAns((a) => piv(rhs(a))) };
  const circ = (a) => { const t = rhs(a); const L = String(a).replace(/^\$/, '').split('=')[0]; const F = (x, y) => evalTex(L, { x, y }); const h = -(F(1, 0) - F(-1, 0)) / 4; const k = -(F(0, 1) - F(0, -1)) / 4; return [h, k, nv(t)]; };
  const n1G3 = {
    'Projeté orthogonal d\'un point sur une droite': (q, s) => { const A = pt(s, 'A'); const [a, b, c] = cart(mat(s, /D : (.*?) = 0\$/)[1]); const [x, y] = pv(inp(q)); if (!near(a * x + b * y + c, 0)) return 'H hors de D'; return near((x - A[0]) * b - (y - A[1]) * a, 0) || 'AH non normal'; },
    'Formule d\'Al-Kashi : calcul d\'une longueur': (q, s) => { if (q.exactInput === undefined) return undefined; const L = evalTex(rhs(q.answer), {}); const r1 = cmp(q, L * L); if (r1 === true) return undefined; const r2 = cmp(q, L); return r2 === true ? undefined : r1; },
    'Équation d\'une droite de vecteur normal donné': viaAns((a) => cart(String(a).replace(/^\$|\$$/g, '').split('=')[0])),
    'Équation d\'un cercle': viaAns(circ),
    'Cercle de diamètre $[AB]$': viaAns(circ),
    'Centre et rayon d\'un cercle': numsAns,
    'Mesure d\'un angle avec Al-Kashi': viaAns((a) => +a.match(/\d+/)[0])
  };
  const C2 = (m, k) => { let r = 1; for (let i = 0; i < k; i++) r = r * (m - i) / (i + 1); return r; };
  const n1S1 = {
    'Répétition d\'épreuves de Bernoulli': (q, s) => { const n = +mat(s, /répète \$(\d+)\$ fois/)[1]; const p = nv(mat(s, /succès est \$(.*?)\$/)[1]); if (/au moins un succès/.test(s)) return cmp(q, 1 - (1 - p) ** n); const k = +mat(s, /obtenir (?:exactement )?(\d+) succès/)[1]; return cmp(q, C2(n, k) * p ** k * (1 - p) ** (n - k)); }
  };
  const law = (s) => { const xs = [...mat(s, /\| \$x_i\$ \|(.*)\|\n/)[1].matchAll(/\$(-?\d+)\$/g)].map((m) => +m[1]); const ps = [...mat(s, /\| \$P\(X = x_i\)\$ \|(.*)\|/)[1].matchAll(/\$(.*?)\$/g)].map((m) => nv(m[1])); if (!near(ps.reduce((a, b) => a + b, 0), 1)) throw new Error('loi'); return [xs, ps]; };
  const n1S2 = {
    'Probabilité d\'un événement $\\{X \\le a\\}$': (q, s) => { const [xs, ps] = law(s); const m = mat(s, /Calculer \$P\(X (\\le|<|>|\\ge) (-?\d+)\)\$/); const a = +m[2]; return cmp(q, xs.reduce((t, x, i) => t + (rel[m[1]](x, a) ? ps[i] : 0), 0)); },
    'Loi d\'un gain': (q, s) => { const w = /un 6 ;|un 6,|obtient un 6/.test(s) && !/un 5/.test(s) ? 1 : /un 4/.test(s) ? 3 : 2; return cmp(q, /P\(X = -/.test(s) ? (6 - w) / 6 : w / 6); },
    'Écart type d\'une variable aléatoire': (q, s) => { const [xs, ps] = law(s); const E = xs.reduce((t, x, i) => t + x * ps[i], 0); const Vv = xs.reduce((t, x, i) => t + (x - E) ** 2 * ps[i], 0); return cmp(q, Math.round(Math.sqrt(Vv) * 100) / 100); },
    'Formule de König-Huygens': (q, s) => { const m = mat(s, /E\(X\) = (.*?)\$ et \$E\(X\^2\) = (.*?)\$/); return cmp(q, nv(m[2]) - nv(m[1]) ** 2); }
  };
  const n1S3 = { 'Liste des premiers termes': viaAns((a) => [...a.matchAll(/-?\d+/g)].map((m) => +m[0])) };

  const out = {};
  const reg = (ch, tiers, map) => { for (const t of tiers) out[`${ch}/${t}`] = typeof map === 'function' ? map : by(map); };
  reg('2N1', [1, 2, 3, 4], n2N1); reg('2N2', [1, 2, 3, 4], n2N2); reg('2N3', [1, 2, 3, 4], n2N3); reg('2N4', [1, 2, 3, 4], n2N4);
  reg('2N5', [1, 2, 3, 4], n2N5);
  reg('2A1', [1, 2, 3, 4], n2A1); reg('2A2', [1, 2, 3, 4], n2A2); reg('2A3', [1, 2, 3, 4], n2A3);
  reg('2G1', [1, 2, 3, 4], n2G1); reg('2G2', [1, 2, 3, 4], n2G2); reg('2G3', [1, 2, 3, 4], n2G3);
  reg('2S1', [1, 2, 3, 4], n2S1); reg('2S2', [1, 2, 3, 4], n2S2); reg('2S3', [1, 2, 3, 4], n2S3);
  reg('2S4', [1], n2S4);
  reg('1A1', [1, 2, 3, 4], n1A1); reg('1A2', [1, 2, 3, 4], n1A2); reg('1A3', [1, 2, 3, 4], n1A3); reg('1A4', [1, 2, 3, 4], n1A4);
  reg('1A5', [1, 2, 3, 4], n1A5); reg('1A6', [1, 2, 3, 4], n1A6); reg('1G1', [1, 2, 3, 4], n1G1); reg('1G2', [4], n1G2);
  reg('1G3', [1, 2, 3, 4], n1G3); reg('1S1', [3, 4], n1S1); reg('1S2', [1, 2, 3, 4], n1S2); reg('1S3', [2], n1S3);
  return out;
})(V));
}
// ---- vérificateurs prioritaires Terminale ----
{
// Vérificateurs indépendants — Terminale (TA, TG, TS, TX) : familles nouvelles et saisies explicites (q.exactInput)
addPre(( (V) => {
  // ---------- mini-évaluateur LaTeX (descente récursive) ----------
  function tokenize(s) {
    s = String(s).replace(/\$/g, '').replace(/\\left|\\right|\\displaystyle/g, '').replace(/\\[,;!: ]/g, ' ').replace(/\\[dt]frac/g, '\\frac');
    const t = []; let i = 0;
    while (i < s.length) {
      const c = s[i];
      if (/\s/.test(c)) { i++; continue; }
      let m;
      if ((m = s.slice(i).match(/^\d+(?:\{,\}\d+|[.,]\d+)?/))) { t.push({ k: 'num', v: parseFloat(m[0].replace('{,}', '.').replace(',', '.')) }); i += m[0].length; continue; }
      if ((m = s.slice(i).match(/^\\([a-zA-Z]+)/))) { t.push({ k: 'cmd', v: m[1] }); i += m[0].length; continue; }
      if (/[a-zA-Z]/.test(c)) { t.push({ k: 'id', v: c }); i++; continue; }
      t.push({ k: 'op', v: c }); i++;
    }
    return t;
  }
  function parse(tex, vars) {
    const T = tokenize(tex); let p = 0;
    const peek = () => T[p]; const eat = (v) => { if (!T[p] || T[p].v !== v) throw new Error('attendu ' + v + ' dans ' + tex); p++; };
    const startsAtom = (tk) => tk && (tk.k === 'num' || tk.k === 'id' || (tk.k === 'cmd' && !['times', 'cdot', 'div'].includes(tk.v)) || (tk.k === 'op' && (tk.v === '(' || tk.v === '{')));
    function expr() { let f = term(); while (peek() && peek().k === 'op' && (peek().v === '+' || peek().v === '-')) { const o = T[p++].v; const g = term(); const f0 = f; f = o === '+' ? (e) => f0(e) + g(e) : (e) => f0(e) - g(e); } return f; }
    function term() {
      let f = unary();
      for (;;) {
        const tk = peek();
        if (tk && ((tk.k === 'cmd' && (tk.v === 'times' || tk.v === 'cdot')) || (tk.k === 'op' && tk.v === '/'))) { const div = tk.v === '/'; p++; const g = unary(); const f0 = f; f = div ? (e) => f0(e) / g(e) : (e) => f0(e) * g(e); continue; }
        if (startsAtom(tk)) { const g = power(); const f0 = f; f = (e) => f0(e) * g(e); continue; }
        return f;
      }
    }
    function unary() { const tk = peek(); if (tk && tk.k === 'op' && (tk.v === '-' || tk.v === '+')) { p++; const g = unary(); return tk.v === '-' ? (e) => -g(e) : g; } return power(); }
    function power() { const b = atom(); if (peek() && peek().v === '^') { p++; const ex = atom(); return (e) => Math.pow(b(e), ex(e)); } return b; }
    function group() { if (peek() && peek().v === '{') { p++; const f = expr(); eat('}'); return f; } return atom(); }
    function atom() {
      const tk = T[p++];
      if (!tk) throw new Error('fin inattendue ' + tex);
      if (tk.k === 'num') return () => tk.v;
      if (tk.k === 'id') {
        if (tk.v === 'e' && !vars.includes('e')) return () => Math.E;
        if (tk.v === 'i' && !vars.includes('i')) throw new Error('complexe');
        const name = tk.v; let idx = name;
        if (peek() && peek().v === '_') { p++; const sub = T[p++]; if (sub.v === '{') { idx += '_' + T[p++].v; eat('}'); } else idx += '_' + sub.v; }
        return (e) => { if (!(idx in e)) throw new Error('variable inconnue ' + idx); return e[idx]; };
      }
      if (tk.k === 'op' && tk.v === '(') { const f = expr(); eat(')'); return f; }
      if (tk.k === 'op' && tk.v === '{') { const f = expr(); eat('}'); return f; }
      if (tk.k === 'cmd') {
        if (tk.v === 'frac') { const a = group(); const b = group(); return (e) => a(e) / b(e); }
        if (tk.v === 'sqrt') { const a = group(); return (e) => Math.sqrt(a(e)); }
        if (tk.v === 'pi') return () => Math.PI;
        const fns = { ln: Math.log, sin: Math.sin, cos: Math.cos, exp: Math.exp, tan: Math.tan };
        if (fns[tk.v]) { const a = power(); return (e) => fns[tk.v](a(e)); }
      }
      throw new Error('jeton ' + JSON.stringify(tk) + ' dans ' + tex);
    }
    const f = expr();
    if (p !== T.length) throw new Error('reste non lu dans ' + tex + ' @' + p);
    return f;
  }
  const rhs = (tex) => { const s = String(tex).replace(/^\$|\$$/g, ''); const parts = s.split(/=|\\approx|\\ge|\\le/); return parts[parts.length - 1]; };
  const math = (s) => [...String(s).matchAll(/\$([^$]*)\$/g)].map((m) => m[1]);
  const near = (a, b, eps = 1e-7) => Math.abs(a - b) <= eps * Math.max(1, Math.abs(a), Math.abs(b));
  /** saisie « (a;b) » ou « a » -> tableau de nombres */
  const tup = (s) => String(s).replace(/^\(|\)$/g, '').split(';').map((x) => { const m = x.trim().match(/^(-?\d+)\/(\d+)$/); return m ? m[1] / m[2] : parseFloat(x.replace(',', '.')); });
  /** compare la saisie (gabarit tpl(tuple) -> fonction de l'environnement) à la réponse LaTeX évaluée */
  function sameFn(q, vars, tpl, pts) {
    if (q.exactInput === undefined) return undefined;
    const t = tup(q.exactInput);
    const g = parse(rhs(q.answer), vars);
    const h = tpl(t);
    for (const e of pts) {
      const a = g(e); const b = h(e);
      if (!Number.isFinite(a)) continue;
      if (!near(a, b, 1e-6)) return `saisie ${q.exactInput} incohérente avec ${q.answer} (${a} ≠ ${b})`;
    }
    return undefined;
  }
  const X = [0.37, 1.3, 2.1, 3.7].map((x) => ({ x }));
  const Nn = [1, 2, 3, 5].map((n) => ({ n }));
  const K = [1, 2, 3, 5].map((k) => ({ k, m: 7 }));
  const Mm = [1, 2, 5].map((m) => ({ m }));
  const val = (s) => { const v = V.val(String(s).trim()); return v; };
  const ansNum = (q) => { const v = val(rhs(q.answer)); return v; };
  const okIn = (q, v) => (q.exactInput === undefined || near(tup(q.exactInput)[0], v) ? true : `saisie ${q.exactInput} ≠ ${v}`);
  const chk = (cond, msg) => (cond ? true : msg);
  const polyOf = (s, v = 'x') => { const P = V.poly(s, v); if (!P) throw new Error('polynôme illisible ' + s); return (d) => P[d] || 0; };

  const R = {};
  const add = (key, f) => { (R[key] = R[key] || []).push(f); };
  const by = (key, re, f) => add(key, (q) => (re.test(q.title) ? f(q) : undefined));

  // =============================== TA1 ===============================
  by('TA1/2', /Conjecturer puis démontrer/, (q) => sameFn(q, ['n'], ([A, b, L]) => (e) => A * b ** e.n + L, Nn));
  by('TA1/2', /Bernoulli/, (q) => sameFn(q, ['k'], ([a, b]) => (e) => a * e.k + b, K));
  by('TA1/3', /Initialisation : rang de départ/, (q) => {
    const m = q.statement.match(/\$(\d+)\^\{n\} > ([^$]*)\$/);
    const P = polyOf(m[2], 'n'); const b = +m[1];
    const holds = (n) => b ** n > P(1) * n + P(0);
    let n0 = 80; while (n0 > 0 && holds(n0 - 1)) n0--;
    const a = ansNum(q);
    return chk(a === n0, `n0 attendu ${n0}, trouvé ${a}`) === true ? okIn(q, n0) : `n0 attendu ${n0}`;
  });
  by('TA1/3', /Récurrence et divisibilité/, (q) => {
    if (q.exactInput === undefined) return undefined;
    // a^{k+1} ± c = d(αm + β) avec a^k ± c = dm : recalcul direct
    const m = q.statement.match(/on suppose \$(\d+)\^\{k\} ([+-]) (\d+) = (\d+)m\$/);
    const a = +m[1]; const c = (m[2] === '+' ? 1 : -1) * +m[3]; const d = +m[4];
    // a^{k+1} + c = a(dm - c) + c = a d m - c(a - 1)
    const al = a; const be = -c * (a - 1) / d;
    const t = tup(q.exactInput);
    return chk(near(t[0], al) && near(t[1], be), `attendu (${al};${be}), saisie ${q.exactInput}`) === true ? undefined : `attendu (${al};${be}), saisie ${q.exactInput}`;
  });
  by('TA1/4', /accroissements affines/, (q) => sameFn(q, ['n'], ([a, b, c]) => (e) => a * e.n * e.n + b * e.n + c, Nn));
  by('TA1/4', /homographique/, (q) => sameFn(q, ['n'], ([a, b]) => (e) => 1 / (a * e.n + b), Nn));

  // =============================== TA3 ===============================
  by('TA3/2', /forme indéterminée levée par factorisation/, (q) => {
    const m = q.statement.match(/\\lim_\{x \\to (-?\d+)\} \\frac\{([^}]*)\}\{([^}]*)\}/);
    const c = +m[1]; const N = polyOf(m[2]); const D = polyOf(m[3]);
    if (N(2) !== 1 || D(1) !== 1 || D(0) !== -c) return 'énoncé inattendu';
    if (c * c + N(1) * c + N(0) !== 0) return 'le numérateur ne s\'annule pas en c';
    // x^2 + px + q = (x - c)(x - r) : r = -p - c ; limite = c - r
    const L = c - (-N(1) - c);
    const a = ansNum(q);
    return a === L ? okIn(q, L) : `limite attendue ${L}, trouvé ${a}`;
  });
  by('TA3/2', /Asymptotes d'une fonction homographique/, (q) => {
    if (q.exactInput === undefined) return undefined;
    const m = q.statement.match(/f\(x\) = \\frac\{([^}]*)\}\{([^}]*)\}/);
    const N = polyOf(m[1]); const D = polyOf(m[2]);
    const t = tup(q.exactInput);
    return near(t[0], -D(0)) && near(t[1], N(1)) ? undefined : `asymptotes attendues (${-D(0)};${N(1)}), saisie ${q.exactInput}`;
  });
  by('TA3/3', /Théorème des valeurs intermédiaires/, (q) => {
    if (q.exactInput === undefined) return undefined;
    const P = polyOf(q.statement.match(/f\(x\) = ([^$]*)\$/)[1]);
    const f = (x) => P(3) * x ** 3 + P(2) * x * x + P(1) * x + P(0);
    const m = tup(q.exactInput)[0];
    return f(m) < 0 && f(m + 1) > 0 ? undefined : `f(${m}) et f(${m + 1}) ne changent pas de signe`;
  });

  // =============================== TA4 ===============================
  by('TA4/1', /Dérivée seconde en un point et convexité/, (q) => {
    const P = polyOf(q.statement.match(/f\(x\) = ([^$]*)\$/)[1]);
    const x0 = +q.statement.match(/Calculer \$f''\((-?\d+)\)\$/)[1];
    const v = 6 * P(3) * x0 + 2 * P(2);
    const a = ansNum(q);
    return a === v ? okIn(q, v) : `f''(x0) attendu ${v}, trouvé ${a}`;
  });
  by('TA4/1', /Calcul d'une dérivée seconde/, (q) => {
    if (q.exactInput === undefined) return undefined;
    const P = polyOf(q.statement.match(/f\(x\) = ([^$]*)\$/)[1]);
    const t = tup(q.exactInput);
    const exp = P(4) || P(4) === 0 && t.length === 3 ? [12 * P(4), 6 * P(3), 2 * P(2)] : [6 * P(3), 2 * P(2)];
    const want = t.length === 3 ? [12 * P(4), 6 * P(3), 2 * P(2)] : [6 * P(3), 2 * P(2)];
    void exp;
    return want.every((w, i) => near(w, t[i])) ? undefined : `f'' attendu (${want.join(';')}), saisie ${q.exactInput}`;
  });
  by('TA4/4', /Tangente au point d'inflexion d'une cubique/, (q) => {
    const P = polyOf(q.statement.match(/f\(x\) = ([^$]*)\$/)[1]);
    const x0 = -P(2) / (3 * P(3));
    const f = (x) => P(3) * x ** 3 + P(2) * x * x + P(1) * x + P(0);
    const d = (x) => 3 * P(3) * x * x + 2 * P(2) * x + P(1);
    const m = d(x0); const p = f(x0) - m * x0;
    const A = V.poly(rhs(q.answer), 'x');
    if (!A || !near(A[1] || 0, m) || !near(A[0] || 0, p)) return `tangente attendue y = ${m}x + ${p}, trouvé ${q.answer}`;
    if (q.exactInput !== undefined) { const t = tup(q.exactInput); if (!near(t[0], m) || !near(t[1], p)) return `saisie ${q.exactInput} ≠ (${m};${p})`; }
    return true;
  });
  by('TA4/4', /Points d'inflexion d'une fonction de degré 4/, (q) => {
    if (q.exactInput === undefined) return undefined;
    const P = polyOf(q.statement.match(/f\(x\) = ([^$]*)\$/)[1]);
    // f'' = 12x^2 + 2c2 = 0
    const r = Math.sqrt(-2 * P(2) / 12);
    const t = tup(q.exactInput);
    return near(t[0], -r) && near(t[1], r) ? undefined : `abscisses attendues (${-r};${r})`;
  });

  // ---------- outils supplémentaires ----------
  const ev = (tex, env = {}, vars = Object.keys(env)) => parse(tex, vars)(env);
  const fx = (st, re = /f\(x\) = ([^$]*)\$/) => st.match(re)[1];
  const inExp = (st) => st.match(/e\^\{([^{}]*)\}/)[1];
  const tupEq = (q, want) => { if (q.exactInput === undefined) return undefined; const t = tup(q.exactInput); return want.length === t.length && want.every((w, i) => near(w, t[i], 1e-9)) ? undefined : `saisie ${q.exactInput} ≠ (${want.join(';')})`; };
  /** complexe a + bi (LaTeX, linéaire en i) -> [re, im] */
  const cplx = (tex) => { const f = parse(tex, ['i']); const re = f({ i: 0 }); return [re, f({ i: 1 }) - re]; };
  const simpson = (f, a, b, n = 2000) => { const h = (b - a) / n; let s = f(a) + f(b); for (let k = 1; k < n; k++) s += (k % 2 ? 4 : 2) * f(a + k * h); return s * h / 3; };

  // =============================== TA5 ===============================
  by('TA5/1', /Propriétés algébriques du logarithme/, (q) => {
    const m = [...q.statement.split('sous la forme')[0].matchAll(/([+-]?) ?\\ln\((\d+)\)/g)];
    const p = +q.statement.match(/k\\ln\((\d+)\)/)[1];
    let k = 0; for (const x of m) k += (x[1] === '-' ? -1 : 1) * Math.round(Math.log(+x[2]) / Math.log(p));
    return tupEq(q, [k]);
  });
  by('TA5/2', /Équation \$\\ln\(x\) = \\ln\(c\)\$/, (q) => {
    const m = q.statement.match(/\\ln\(x\) = (\d)\\ln\((\d+)\) ([+-]) \\ln\((\d+)\)/);
    const c = (+m[2]) ** (+m[1]) * (m[3] === '+' ? +m[4] : 1 / +m[4]);
    const a = ev(rhs(q.answer));
    return near(a, c) ? okIn(q, c) : `solution attendue ${c}, trouvé ${a}`;
  });
  by('TA5/2', /Équation avec logarithmes/, (q) => {
    if (q.exactInput === undefined) return undefined;
    let sol;
    let m = q.statement.match(/\\ln\(x\) \+ \\ln\(x \+ (\d+)\) = \\ln\((\d+)\)/);
    if (m) { const a = +m[1]; const b = +m[2]; sol = (-a + Math.sqrt(a * a + 4 * b)) / 2; }
    else {
      m = q.statement.match(/l'équation \$\\ln\(([^)]*)\) = \\ln\(([^)]*)\)\$/);
      const P = polyOf(m[1]); const Q = polyOf(m[2]);
      const x = (Q(0) - P(0)) / (P(1) - Q(1));
      sol = P(1) * x + P(0) > 0 ? x : 'aucune';
    }
    if (sol === 'aucune') return q.exactInput === 'aucune' ? undefined : `attendu « aucune », saisie ${q.exactInput}`;
    return tupEq(q, [sol]);
  });
  by('TA5/3', /Dérivée de \$\\ln\(u\)\$/, (q) => { const u = q.statement.match(/\\ln\(([^)]*)\)\$/)[1]; return sameFn(q, ['x'], ([k]) => (e) => k * e.x / ev(u, { x: e.x }), X); });
  by('TA5/3', /Dérivée d'un produit avec/, (q) => sameFn(q, ['x'], ([a, b, c]) => (e) => a * Math.log(e.x) + b + c / e.x, X));
  by('TA5/3', /Dérivée d'un quotient avec/, (q) => sameFn(q, ['x'], ([a, b]) => (e) => (a + b * Math.log(e.x)) / (e.x * e.x), X));
  by('TA5/4', /Placement à intérêts composés/, (q) => {
    const t = +q.statement.match(/taux annuel de \$(\d+)\\,\\%\$/)[1]; const k = +q.statement.match(/multiplié par \$(\d+)\$/)[1];
    let n = 0; while ((1 + t / 100) ** n < k) n++;
    return tupEq(q, [n]);
  });

  // =============================== TA6 ===============================
  by('TA6/1', /Primitive d'une fonction polynôme/, (q) => {
    const P = polyOf(fx(q.statement));
    return tupEq(q, [P(2) / 3, P(1) / 2, P(0)]);
  });
  by('TA6/1', /Primitive de \$e\^\{kx\}\$/, (q) => {
    const f = fx(q.statement); const k = polyOf(inExp(q.statement))(1);
    const lam = ev(f, { x: 0 }) / k; // f(0) = a
    return tupEq(q, [lam]);
  });
  by('TA6/2', /Solution constante/, (q) => {
    const eqn = q.statement.match(/\$y' = ([^$]*)\$/)[1]; const P = polyOf(eqn, 'y');
    return tupEq(q, [-P(0) / P(1)]);
  });
  by('TA6/2', /Équation \$y' = ay\$/, (q) => {
    const a = V.poly(q.statement.match(/\$y' = ([^$]*)\$/)[1], 'y')[1]; const y0 = +q.statement.match(/y\(0\) = (-?\d+)/)[1];
    return tupEq(q, [y0, a]);
  });
  by('TA6/3', /Équation \$y' = ay \+ b\$/, (q) => {
    let a; let b;
    let m = q.statement.match(/\$y' = ([^$]*)\$/);
    if (m) { const P = polyOf(m[1], 'y'); a = P(1); b = P(0); } else { m = q.statement.match(/\$y' ([+-]) (\d*)y = (-?\d+)\$/); a = (m[1] === '-' ? 1 : -1) * (m[2] === '' ? 1 : +m[2]); b = +m[3]; }
    const y0 = +q.statement.match(/y\(0\) = (-?\d+)/)[1]; const d = -b / a;
    return tupEq(q, [y0 - d, a, d]);
  });
  by('TA6/4', /Solution particulière affine/, (q) => {
    const P = (() => { const s = q.statement.match(/\$y' = ([^$]*)\$/)[1]; const t = s.replace(/\s+/g, ''); const c = { y: 0, x: 0, 1: 0 };
      for (const term of t.match(/[+-]?[^+-]+/g)) { const mm = term.match(/^([+-]?)(\d*)([xy]?)$/); c[mm[3] || 1] += (mm[1] === '-' ? -1 : 1) * (mm[2] === '' ? 1 : +mm[2]); } return c; })();
    // α = k(αx + β) + m x + p  =>  kα + m = 0, α = kβ + p
    const al = -P.x / P.y; const be = (al - P[1]) / P.y;
    return tupEq(q, [al, be]);
  });
  by('TA6/4', /Primitive de la forme \$\\frac\{u'\}\{u\}\$/, (q) => {
    const m = q.statement.match(/f\(x\) = \\frac\{([^}]*)\}\{([^}]*)\}/);
    const N = polyOf(m[1]); const D = polyOf(m[2]);
    return tupEq(q, [N(1) / (2 * D(2))]);
  });
  by('TA6/4', /Primitive de la forme \$u'e\^\{u\}\$/, (q) => {
    const k = ev(fx(q.statement), { x: 1 }) / Math.exp(polyOf(inExp(q.statement))(2));
    const a = polyOf(inExp(q.statement))(2);
    return tupEq(q, [k / (2 * a)]);
  });

  // =============================== TA7 ===============================
  by('TA7/2', /Intégrale d'une exponentielle/, (q) => {
    const k = polyOf(inExp(q.statement))(1);
    if (q.exactInput === undefined) return undefined;
    const I = simpson((x) => Math.exp(k * x), 0, 1); const t = tup(q.exactInput);
    return near(t[0] * Math.exp(k) + t[1], I, 1e-8) ? undefined : `saisie ${q.exactInput} : ${t[0]}e^${k}+${t[1]} ≠ ${I}`;
  });
  by('TA7/2', /Intégrale de \$\\frac\{1\}\{x\}\$/, (q) => { const m = q.statement.match(/\\int_\{1\}\^\{(\d+)\} \\frac\{(\d+)\}\{x\}/); return tupEq(q, [+m[2]]); });
  by('TA7/4', /Linéarité et relation de Chasles/, (q) => {
    const ints = [...q.statement.matchAll(/\\int_\{(-?\d+)\}\^\{(-?\d+)\} ([fg])\(x\)\\,dx = (-?\d+)/g)].map((m) => ({ a: +m[1], b: +m[2], f: m[3], v: +m[4] }));
    const tgt = q.statement.match(/I = \\int_\{(-?\d+)\}\^\{(-?\d+)\} \((.*)\)\\,dx/);
    const A = +tgt[1]; const C = +tgt[2];
    const L = tgt[3].replace(/f\(x\)/, 'F').replace(/g\(x\)/, 'G');
    // intégrale de f de A à C par Chasles (orientation)
    const If = ints.filter((o) => o.f === 'f').reduce((s, o) => s + (o.a < o.b ? o.v : -o.v), 0);
    const fs = ints.filter((o) => o.f === 'f'); const lo = Math.min(...fs.map((o) => Math.min(o.a, o.b))); const hi = Math.max(...fs.map((o) => Math.max(o.a, o.b)));
    if (lo !== A || hi !== C) return 'bornes de Chasles incohérentes';
    const Ig = ints.find((o) => o.f === 'g').v;
    const I = parse(L, ['F', 'G'])({ F: If, G: Ig });
    const a = ansNum(q);
    return a === I ? okIn(q, I) : `I attendu ${I}, trouvé ${a}`;
  });
  by('TA7/4', /Intégration par parties/, (q) => {
    if (q.exactInput === undefined) return undefined;
    const m = q.statement.match(/\\int_\{(\d+)\}\^\{(\d+)\} (.*?) \\, dx/);
    const a = +m[1]; const b = +m[2]; const body = m[3];
    const I = simpson((x) => ev(body, { x }), a === 1 && /ln/.test(body) ? 1 : a, b);
    const t = tup(q.exactInput);
    const K = /ln/.test(body) ? Math.log(b) : (b === 1 ? Math.E : Math.exp(b));
    return near(t[0] * K + t[1], I, 1e-8) ? undefined : `saisie ${q.exactInput} incohérente (${I})`;
  });

  // =============================== TA8 ===============================
  {
    const U1 = (st) => st.match(/f\(x\) = \(([^)]*)\)\^\{\d+\}/)[1];
    const g = (u) => (x) => ev(u, { x });
    by('TA8/1', /Dérivée de \$\(ax \+ b\)\^n\$/, (q) => { const u = g(U1(q.statement)); return sameFn(q, ['x'], ([k, m]) => (e) => k * u(e.x) ** m, X); });
    by('TA8/1', /Dérivée de \$e\^\{ax \+ b\}\$/, (q) => { const u = g(inExp(q.statement)); return sameFn(q, ['x'], ([k]) => (e) => k * Math.exp(u(e.x)), X); });
    by('TA8/1', /Dérivée de \$\\sqrt\{ax \+ b\}\$/, (q) => { const u = g(q.statement.match(/\\sqrt\{([^}]*)\}/)[1]); return sameFn(q, ['x'], ([k]) => (e) => k / Math.sqrt(u(e.x)), [5, 7, 9].map((x) => ({ x }))); });
    by('TA8/1', /Dérivée de \$\\frac\{1\}\{ax \+ b\}\$/, (q) => { const u = g(q.statement.match(/\\frac\{1\}\{([^}]*)\}/)[1]); return sameFn(q, ['x'], ([k]) => (e) => k / u(e.x) ** 2, X); });
    by('TA8/1', /Dérivée de \$\\ln\(ax \+ b\)\$/, (q) => { const u = g(q.statement.match(/\\ln\(([^)]*)\)/)[1]); return sameFn(q, ['x'], ([k]) => (e) => k / u(e.x), X); });
    by('TA8/2', /Dérivée de \$u\^n\$/, (q) => { const u = g(U1(q.statement)); return sameFn(q, ['x'], ([a, b, m]) => (e) => (a * e.x + b) * u(e.x) ** m, X); });
    by('TA8/2', /Dérivée de \$e\^\{u\}\$/, (q) => { const u = g(inExp(q.statement)); return sameFn(q, ['x'], ([a, b]) => (e) => (a * e.x + b) * Math.exp(u(e.x)), [0.1, 0.4, -0.3].map((x) => ({ x }))); });
    by('TA8/2', /Dérivée de \$\\sqrt\{u\}\$/, (q) => { const u = g(q.statement.match(/\\sqrt\{([^}]*)\}/)[1]); return sameFn(q, ['x'], ([k]) => (e) => k * e.x / Math.sqrt(u(e.x)), X); });
    by('TA8/2', /Dérivée de \$\\ln\(u\)\$/, (q) => { const u = g(q.statement.match(/\\ln\(([^)]*)\)/)[1]); return sameFn(q, ['x'], ([k]) => (e) => k * e.x / u(e.x), X); });
    by('TA8/2', /Dérivée de \$\\frac\{1\}\{u\}\$/, (q) => { const u = g(q.statement.match(/\\frac\{1\}\{([^}]*)\}/)[1]); return sameFn(q, ['x'], ([a, b]) => (e) => (a * e.x + b) / u(e.x) ** 2, X); });
    by('TA8/3', /Dérivée seconde de \$\(ax \+ b\)\^n\$/, (q) => { const u = g(U1(q.statement)); return sameFn(q, ['x'], ([k, m]) => (e) => k * u(e.x) ** m, X); });
    by('TA8/3', /Dérivée seconde de \$e\^\{ax\^2\}\$/, (q) => { const u = g(inExp(q.statement)); return sameFn(q, ['x'], ([a, b, c]) => (e) => (a * e.x * e.x + b * e.x + c) * Math.exp(u(e.x)), [0.1, 0.4, -0.3].map((x) => ({ x }))); });
    by('TA8/3', /Dérivée seconde de \$xe\^\{kx\}\$/, (q) => { const u = g(inExp(q.statement)); return sameFn(q, ['x'], ([a, b]) => (e) => (a * e.x + b) * Math.exp(u(e.x)), [0.1, 0.4, -0.3].map((x) => ({ x }))); });
    by('TA8/3', /Dérivée seconde de \$\\sqrt\{ax \+ b\}\$/, (q) => { const u = g(q.statement.match(/\\sqrt\{([^}]*)\}/)[1]); return sameFn(q, ['x'], ([k]) => (e) => k / (u(e.x) * Math.sqrt(u(e.x))), [5, 7, 9].map((x) => ({ x }))); });
    by('TA8/4', /Tangente à la courbe/, (q) => {
      if (q.exactInput === undefined) return undefined;
      const f = parse(rhs(q.answer), ['x']); const t = tup(q.exactInput);
      return near(t[0], f({ x: 1 }) - f({ x: 0 })) && near(t[1], f({ x: 0 })) ? undefined : `saisie ${q.exactInput} ≠ ${q.answer}`;
    });
  }

  // =============================== TA9 ===============================
  {
    const argOf = (st) => st.match(/\\(?:sin|cos)\(([^)]*)\)/)[1];
    const setVals = (tex) => { if (/emptyset/.test(tex)) return []; const inner = tex.match(/\\left\\\{(.*)\\right\\\}/)[1]; return inner.split(';').map((t) => ev(t, {}) / Math.PI); };
    const trigSol = (q) => {
      if (q.exactInput === undefined) return undefined;
      const want = setVals(q.answer);
      if (!want.length) return q.exactInput === 'aucune' ? undefined : `attendu « aucune », saisie ${q.exactInput}`;
      return tupEq(q, want.sort((a, b) => a - b));
    };
    by('TA9/1', /^Dérivée de \$\\(sin|cos)\(ax \+ b\)\$/, (q) => { const u = argOf(q.statement); return sameFn(q, ['x'], ([a, b]) => (e) => a * Math.sin(ev(u, e)) + b * Math.cos(ev(u, e)), X); });
    by('TA9/1', /Période d'une fonction/, (q) => tupEq(q, [ev(rhs(q.answer), {}) / Math.PI]));
    by('TA9/2', /Dérivée d'un produit avec sinus/, (q) => sameFn(q, ['x'], ([a, b, c, d]) => (e) => (a * e.x + b) * Math.sin(e.x) + (c * e.x + d) * Math.cos(e.x), X));
    by('TA9/2', /^Équation/, trigSol);
    by('TA9/3', /^Équation/, trigSol);
    by('TA9/3', /Dérivée d'une composée trigonométrique/, (q) => {
      const f = fx(q.statement);
      let gf;
      if (/^e\^/.test(f)) gf = (x) => Math.cos(x) * ev(f, { x });
      else if (/^\\cos/.test(f)) { const inner = f.match(/\\cos\((.*)\)$/)[1]; gf = (x) => x * Math.sin(ev(inner, { x })); }
      else if (/^\\ln/.test(f)) { const c = +f.match(/\\ln\((\d+)/)[1]; gf = (x) => Math.sin(x) / (c + Math.cos(x)); }
      else { const c = +f.match(/\\sqrt\{(\d+)/)[1]; gf = (x) => Math.cos(x) / Math.sqrt(c + Math.sin(x)); }
      return sameFn(q, ['x'], ([l]) => (e) => l * gf(e.x), X);
    });
    by('TA9/4', /Nombre de solutions d'une équation trigonométrique/, (q) => {
      const m = q.statement.match(/\$\\(sin|cos)\((\d)x\) = ([^$]*)\$/);
      const k = +m[2]; const v = ev(m[3], {}); const fn = m[1] === 'sin' ? Math.sin : Math.cos;
      // comptage numérique : racines de fn(kx) - v sur [0 ; 2π[ (changements de signe + racines doubles par minimum de |.|)
      const N = 24000; let cnt = 0; const h = (x) => fn(k * x) - v;
      for (let i = 0; i < N; i++) {
        const x0 = 2 * Math.PI * i / N; const x1 = 2 * Math.PI * (i + 1) / N;
        if (h(x0) === 0 || (h(x0) * h(x1) < 0)) cnt++;
        else if (Math.abs(v) === 1) { const xm = (x0 + x1) / 2; if (Math.abs(h(xm)) < 1e-7 && Math.abs(h(xm)) <= Math.abs(h(x0)) && Math.abs(h(xm)) <= Math.abs(h(x1))) cnt++; }
      }
      if (Math.abs(v) === 1) { cnt = 0; for (let j = 0; j < 4 * k; j++) { const x = (j * Math.PI) / (2 * k); if (x < 2 * Math.PI - 1e-12 && Math.abs(h(x)) < 1e-9) cnt++; } }
      const a = ansNum(q);
      return a === cnt ? okIn(q, cnt) : `nombre attendu ${cnt}, trouvé ${a}`;
    });
  }

  // =============================== TG1 / TG2 ===============================
  const v3 = (s, lab) => { const m = s.match(new RegExp(lab.replace(/[\\{}()$]/g, '\\$&') + '\\((-?\\d+) ; (-?\\d+) ; (-?\\d+)\\)')); return m ? [+m[1], +m[2], +m[3]] : null; };
  const ansV3 = (q, lab) => v3(q.answer, lab);
  by('TG1/2', /Point défini par une égalité vectorielle/, (q) => {
    const A = v3(q.statement, 'A'); const B = v3(q.statement, 'B');
    const ks = q.statement.match(/\\vec\{AM\} = (.*?)\\vec\{AB\}/)[1]; const k = ks === '' ? 1 : ks === '-' ? -1 : ev(ks, {});
    const M = A.map((x, i) => x + k * (B[i] - x));
    const a = ansV3(q, 'M');
    if (!a || a.some((x, i) => !near(x, M[i]))) return `M attendu (${M.join(';')})`;
    for (const o of q.options) if (o !== q.answer) { const w = v3(o, 'M'); if (w && w.every((x, i) => near(x, M[i]))) return 'distracteur juste'; }
    return true;
  });
  by('TG1/3', /Intersection d'une droite et d'un plan de coordonnées/, (q) => {
    const cs = q.statement.match(/x = ([^\\]*) \\\\ y = ([^\\]*) \\\\ z = ([^\\]*) \\end/).slice(1).map((e) => polyOf(e, 't'));
    const ax = 'xyz'.indexOf(q.statement.match(/d'équation \$([xyz]) = 0\$/)[1]);
    const t = -cs[ax](0) / cs[ax](1);
    const P = cs.map((c) => c(0) + c(1) * t);
    const a = ansV3(q, 'I');
    return a && a.every((x, i) => near(x, P[i])) ? true : `I attendu (${P.join(';')})`;
  });
  by('TG1/3', /Décomposition d'un vecteur/, (q) => {
    if (q.exactInput === undefined) return undefined;
    const u = v3(q.statement, '\\vec{u}'); const v = v3(q.statement, '\\vec{v}'); const w = v3(q.statement, '\\vec{w}');
    const [a, b] = tup(q.exactInput);
    return u.every((x, i) => near(a * x + b * v[i], w[i])) ? undefined : `saisie ${q.exactInput} ne décompose pas w`;
  });
  by('TG1/4', /Coplanarité de trois vecteurs : paramètre/, (q) => {
    const u = v3(q.statement, '\\vec{u}'); const v = v3(q.statement, '\\vec{v}');
    const ws = q.statement.match(/\\vec\{w\}\(([^)]*)\)/)[1].split(' ; ');
    const i = ws.indexOf('m'); const [j, k] = [0, 1, 2].filter((x) => x !== i);
    const det = u[j] * v[k] - u[k] * v[j];
    const a = (+ws[j] * v[k] - +ws[k] * v[j]) / det; const b = (u[j] * +ws[k] - u[k] * +ws[j]) / det;
    const m = a * u[i] + b * v[i];
    const got = ansNum(q);
    return near(got, m) ? okIn(q, m) : `m attendu ${m}, trouvé ${got}`;
  });
  by('TG2/1', /Coordonnée manquante d'un point d'un plan/, (q) => {
    const e = q.statement.match(/d'équation \$([^$]*) = 0\$/)[1].replace(/\s+/g, '');
    const c = { x: 0, y: 0, z: 0, 1: 0 };
    for (const t of e.match(/[+-]?[^+-]+/g)) { const mm = t.match(/^([+-]?)(\d*)([xyz]?)$/); c[mm[3] || 1] += (mm[1] === '-' ? -1 : 1) * (mm[2] === '' ? 1 : +mm[2]); }
    const P = q.statement.match(/M\(([^)]*)\)/)[1].split(' ; ');
    const vn = ['x', 'y', 'z']; let rest = c[1]; let coef = 0;
    P.forEach((x, i) => { if (x === 'm') coef = c[vn[i]]; else rest += c[vn[i]] * +x; });
    const m = -rest / coef; const got = ansNum(q);
    return near(got, m) ? okIn(q, m) : `m attendu ${m}, trouvé ${got}`;
  });
  by('TG2/3', /Équation cartésienne d'un plan/, (q) => {
    if (q.exactInput === undefined) return undefined;
    const A = v3(q.statement, 'A'); const n = v3(q.statement, '\\vec{n}');
    return tupEq(q, [-(A[0] * n[0] + A[1] * n[1] + A[2] * n[2])]);
  });

  // =============================== TS ===============================
  by('TS1/4', /Probabilité d'au moins un succès|Probabilité cumulée/, (q) => {
    if (q.exactInput === undefined) return undefined;
    const m = q.statement.match(/\\mathcal\{B\}\((\d+) ; (0\{,\}\d+)\)/); const n = +m[1]; const p = V.val(m[2]);
    const want = /au moins/.test(q.title) ? 1 - (1 - p) ** n : (1 - p) ** n + n * p * (1 - p) ** (n - 1);
    const t = tup(q.exactInput)[0];
    return Math.abs(t - want) < 6e-4 ? undefined : `saisie ${q.exactInput} ≠ ${want}`;
  });
  by('TS2/3', /Minoration par Bienaymé-Tchebychev/, (q) => {
    if (q.exactInput === undefined) return undefined;
    const Vx = +q.statement.match(/V\(X\) = (\d+)/)[1]; const m = q.statement.match(/P\((-?\d+) < X < (-?\d+)\)/);
    const d = (+m[2] - +m[1]) / 2;
    return tupEq(q, [1 - Vx / (d * d)]);
  });
  by('TS4/3', /Dichotomie : encadrement/, (q) => {
    if (q.exactInput === undefined) return undefined;
    const m = q.answer.match(/« (\S+) (\S+) »/);
    return tupEq(q, [parseFloat(m[1]), parseFloat(m[2])]);
  });

  // =============================== TX ===============================
  const cOf = (tex) => cplx(rhs(tex));
  const cx = (st, lab) => cplx(st.match(new RegExp(lab.replace(/[\\{}]/g, '\\$&') + ' = ([^$]*)\\$'))[1]);
  for (const [key, re] of [['TX1/1', /Somme|Différence|Conjugué/], ['TX1/2', /Produit de deux|Carré/], ['TX1/3', /Quotient|Inverse/]]) {
    by(key, re, (q) => (q.exactInput === undefined ? undefined : tupEq(q, cOf(q.answer))));
  }
  by('TX1/1', /Parties réelle et imaginaire/, (q) => { const z = cx(q.statement, 'z'); return tupEq(q, z); });
  by('TX1/4', /Équation du second degré dans/, (q) => {
    if (q.exactInput === undefined) return undefined;
    const P = polyOf(q.statement.match(/l'équation \$([^$]*) = 0\$/)[1], 'z');
    const D = P(1) ** 2 - 4 * P(2) * P(0);
    return tupEq(q, [-P(1) / (2 * P(2)), Math.sqrt(-D) / (2 * P(2))]);
  });
  by('TX1/4', /Équation avec le conjugué/, (q) => {
    const m = q.statement.match(/\$z ([+-]) (\d+)\\bar\{z\} = ([^$]*)\$/);
    const k = (m[1] === '-' ? -1 : 1) * +m[2]; const [A, B] = cplx(m[3]);
    const z = [A / (1 + k), B / (1 - k)];
    const a = cOf(q.answer);
    if (!near(a[0], z[0]) || !near(a[1], z[1])) return `z attendu ${z}`;
    for (const o of q.options) if (o !== q.answer) { const w = cOf(o); if (near(w[0], z[0]) && near(w[1], z[1])) return 'distracteur juste'; }
    return tupEq(q, z) || true;
  });
  {
    // r e^{i θ} (LaTeX) -> [r, θ/π]
    const expoOf = (tex) => {
      const s0 = rhs(tex).trim();
      const m = s0.match(/^(.*?)e\^\{(-?)i(.*)\}$/);
      if (!m) return [ev(s0, {}), 0];
      const r = m[1] === '' ? 1 : ev(m[1], {});
      return [r, (m[2] ? -1 : 1) * ev(m[3], {}) / Math.PI];
    };
    by('TX2/1', /Module d'un nombre complexe/, (q) => {
      if (q.exactInput === undefined) return undefined;
      const z = cx(q.statement, 'z'); const t = tup(q.exactInput);
      if (t.length === 1) return near(t[0], Math.hypot(z[0], z[1])) ? undefined : `saisie ${q.exactInput} ≠ module`;
      return near(t[0] * Math.sqrt(t[1]), Math.hypot(z[0], z[1])) && Number.isInteger(t[1]) && ![4, 9, 16, 25].some((c) => t[1] % c === 0) ? undefined : `saisie ${q.exactInput} ≠ module`;
    });
    by('TX2/2', /Forme exponentielle/, (q) => {
      if (q.exactInput === undefined) return undefined;
      const z = cx(q.statement, 'z'); const r = Math.hypot(z[0], z[1]); const th = Math.atan2(z[1], z[0]) / Math.PI;
      return tupEq(q, [r, th]);
    });
    by('TX2/3', /Moivre|en forme exponentielle/, (q) => {
      if (q.exactInput === undefined) return undefined;
      const [r, th] = expoOf(q.answer);
      if (!(th > -1 && th <= 1)) return 'argument hors de ]-π ; π]';
      return tupEq(q, [r, th]);
    });
    by('TX2/4', /Construction d'un triangle rectangle isocèle/, (q) => {
      const A = cx(q.statement, 'z_A'); const B = cx(q.statement, 'z_B');
      const s = /= -\\frac\{\\pi\}\{2\}/.test(q.statement) ? -1 : 1;
      const w = [B[0] - A[0], B[1] - A[1]];
      const C = [A[0] - s * w[1], A[1] + s * w[0]];
      const a = cOf(q.answer);
      if (!near(a[0], C[0]) || !near(a[1], C[1])) return `z_C attendu ${C}`;
      for (const o of q.options) if (o !== q.answer) { const w2 = cOf(o); if (near(w2[0], C[0]) && near(w2[1], C[1])) return 'distracteur juste'; }
      return tupEq(q, C) || true;
    });
  }
  by('TX3/4', /Équation de congruence/, (q) => {
    if (q.exactInput === undefined) return undefined;
    const m = q.statement.match(/\$(\d+)x \\equiv (\d+) \\pmod\{(\d+)\}\$/); const a = +m[1]; const b = +m[2]; const n = +m[3];
    let x = 0; while ((a * x - b) % n !== 0) x++;
    return tupEq(q, [x]);
  });
  by('TX4/2', /Identité de Bézout/, (q) => {
    const m = q.statement.match(/\$(\d+)u \+ (\d+)v = 1\$/); const a = +m[1]; const b = +m[2];
    let u = 0; while ((a * u) % b !== 1 % b) u++;
    const v = (1 - a * u) / b;
    const g = q.answer.match(/u = (-?\d+)\$ et \$v = (-?\d+)/);
    if (+g[1] !== u || +g[2] !== v) return `couple attendu (${u};${v})`;
    for (const o of q.options) if (o !== q.answer) { const h = o.match(/u = (-?\d+)\$ et \$v = (-?\d+)/); if (+h[1] === u && +h[2] === v) return 'distracteur identique'; }
    return tupEq(q, [u, v]) || true;
  });
  by('TX4/4', /Équation diophantienne/, (q) => {
    if (q.exactInput === undefined) return undefined;
    const m = q.statement.match(/\$\(E\) : (\d+)x \+ (\d+)y = (-?\d+)\$/);
    return tupEq(q, [+m[2], -m[1]]);
  });
  {
    const mats = (s) => [...String(s).matchAll(/\\begin\{pmatrix\}(.*?)\\end\{pmatrix\}/g)].map((m) => m[1].split('\\\\').map((r) => r.split('&').map((x) => ev(x.trim(), {}))));
    const mul = (A, B) => A.map((r) => B[0].map((_, j) => r.reduce((t, x, k) => t + x * B[k][j], 0)));
    by('TX5/1', /Combinaison linéaire de matrices/, (q) => {
      const [A, B] = mats(q.statement);
      const ex = q.statement.match(/Calculer \$([^$]*)\$/)[1];
      const f = parse(ex, ['A', 'B']);
      const R = A.map((r, i) => r.map((x, j) => f({ A: x, B: B[i][j] })));
      const got = mats(q.answer)[0];
      if (!got.flat().every((x, i) => near(x, R.flat()[i]))) return `résultat attendu ${R}`;
      return tupEq(q, R.flat()) || true;
    });
    by('TX5/1', /Produit de deux matrices/, (q) => { if (q.exactInput === undefined) return undefined; const [A, B] = mats(q.statement); return tupEq(q, mul(A, B).flat()); });
    by('TX5/2', /Inverse d'une matrice/, (q) => {
      if (q.exactInput === undefined) return undefined;
      const [A] = mats(q.statement); const d = A[0][0] * A[1][1] - A[0][1] * A[1][0];
      return tupEq(q, [A[1][1] / d, -A[0][1] / d, -A[1][0] / d, A[0][0] / d]);
    });
    by('TX5/2', /Chemins de longueur 2 dans un graphe/, (q) => {
      const [G] = mats(q.statement);
      const m = q.statement.match(/du sommet \$(\d)\$ au sommet \$(\d)\$/); const i = +m[1] - 1; const j = +m[2] - 1;
      const n = mul(G, G)[i][j]; const got = ansNum(q);
      return got === n ? okIn(q, n) : `nombre attendu ${n}, trouvé ${got}`;
    });
  }

  by('TA6/3', /Limite en \$\+\\infty\$ d'une solution/, (q) => {
    const P = polyOf(q.statement.match(/\$y' = ([^$]*)\$/)[1], 'y');
    if (P(1) >= 0) return 'coefficient de y non négatif';
    const L = -P(0) / P(1); const got = ev(rhs(q.answer), {});
    if (!near(got, L)) return `limite attendue ${L}, trouvé ${q.answer}`;
    for (const o of q.options) if (o !== q.answer && /^\$-?[\d\\]/.test(o)) { try { if (near(ev(rhs(o), {}), L)) return 'distracteur juste'; } catch (e) { /* option non numérique */ } }
    return okIn(q, L);
  });
  by('TA7/1', /Intégrale de l'exponentielle/, (q) => {
    const m = q.statement.match(/\\int_\{0\}\^\{\\ln\((\d+)\)\} (.*?) \\, dx/);
    const a = +m[1]; const I = simpson((x) => ev(m[2], { x }), 0, Math.log(a));
    const got = ansNum(q);
    return near(got, I, 1e-8) ? okIn(q, Math.round(I)) : `I attendu ${I}, trouvé ${got}`;
  });
  by('TS1/1', /Reconnaître une loi binomiale/, (q) => {
    const st = q.statement; const n = +st.match(/(?:lance|tire|comporte|lancé) (\d+) fois|comporte (\d+) questions/).slice(1).find(Boolean);
    const p = /« 6 »/.test(st) ? 1 / 6 : /pile/.test(st) ? 1 / 2 : /3 boules rouges et 7/.test(st) ? 3 / 10 : /4 réponses/.test(st) ? 1 / 4 : /multiples de 3/.test(st) ? 1 / 3 : NaN;
    const m = q.answer.match(/\\left\((\d+) ; (.*)\\right\)/);
    if (+m[1] !== n || !near(ev(m[2], {}), p)) return `paramètres attendus (${n};${p})`;
    return tupEq(q, [n, p]) || true;
  });

  return Object.fromEntries(Object.entries(R).map(([k, fs]) => [k.replace('/', '/'), (q) => { for (const f of fs) { const r = f(q); if (r !== undefined) return r; } return undefined; }]));
})(V));
}
// ---- vérificateurs L2-PRF / L3-PRF (démonstrations fondamentales) ----
{
// Recalcul indépendant à partir de l'énoncé : parseurs propres (matrices, formes linéaires et quadratiques,
// polynômes en x, y), calcul matriciel direct (puissances), intégrales par la méthode de Simpson.
addPre(((V) => {
  const near = (a, b, e = 1e-9) => Math.abs(a - b) <= e * Math.max(1, Math.abs(a), Math.abs(b));
  const strip = (s) => String(s).replace(/\$/g, '');
  const val = (s) => V.val(String(s).replace(/\\dfrac/g, '\\frac').trim());
  /** nombres de la réponse : n-uplet final « (a ; b) » ou membre de droite d'une égalité */
  const ansNums = (s) => {
    const t = strip(s);
    const m = t.match(/\(([^()]*;[^()]*)\)\s*$/);
    return m ? m[1].split(';').map(val) : [val(t.split('=').pop())];
  };
  const inNums = (s) => String(s).replace(/^\(|\)$/g, '').split(';').map((x) => { const m = x.match(/^(-?\d+)\/(\d+)$/); return m ? m[1] / m[2] : Number(x); });
  const cmp = (q, exp, msg, eps = 1e-9) => {
    const got = ansNums(q.answer);
    if (got.length !== exp.length || got.some((x, i) => !near(x, exp[i], eps))) return `${msg} : attendu (${exp.join(';')}) / réponse ${q.answer}`;
    const ex = q.exactInput || q.exactAnswer;
    if (ex !== undefined) {
      const e = inNums(ex);
      if (e.length !== exp.length || e.some((x, i) => !near(x, exp[i], eps))) return `${msg} : saisie ${ex} ≠ (${exp.join(';')})`;
    }
    for (const o of q.options || []) {
      if (o === q.answer) continue;
      const g = ansNums(o);
      if (g.length === exp.length && g.every((x, i) => near(x, exp[i], eps))) return `${msg} : distracteur juste ${o}`;
    }
    return true;
  };
  const mat = (s) => { const m = String(s).match(/\\begin\{pmatrix\}(.*?)\\end\{pmatrix\}/); return m[1].split('\\\\').map((r) => r.split('&').map((x) => +x.trim())); };
  const mul = (A, B) => A.map((r) => B[0].map((_, j) => r.reduce((s, x, k) => s + x * B[k][j], 0)));
  const mpow = (A, n) => { let R = A.map((r, i) => r.map((_, j) => +(i === j))); for (let i = 0; i < n; i++) R = mul(R, A); return R; };
  /** termes « ±c·monôme » : renvoie la liste [coef, monôme] */
  const terms = (s) => {
    const t = String(s).replace(/\s+/g, '').replace(/^(?=[^+-])/, '+');
    const out = []; const re = /([+-])(\d*)((?:[a-z](?:_\{\d\})?(?:\^\{?\d\}?)?)*)/g; let m;
    while ((m = re.exec(t)) && m[0]) out.push([(m[1] === '-' ? -1 : 1) * (m[2] ? +m[2] : 1), m[3]]);
    return out;
  };
  /** polynôme en x, y -> liste [c, ex, ey] */
  const pxy = (s) => terms(s).map(([c, mo]) => {
    let ex = 0, ey = 0;
    for (const [, v, e] of mo.matchAll(/([xy])(?:\^\{?(\d)\}?)?/g)) { if (v === 'x') ex += e ? +e : 1; else ey += e ? +e : 1; }
    return [c, ex, ey];
  });
  const ev = (P, x, y) => P.reduce((s, [c, a, b]) => s + c * x ** a * y ** b, 0);
  const dx = (P) => P.filter((t) => t[1] > 0).map(([c, a, b]) => [c * a, a - 1, b]);
  const dy = (P) => P.filter((t) => t[2] > 0).map(([c, a, b]) => [c * b, a, b - 1]);
  /** matrice symétrique d'une forme quadratique en x, y, z */
  const qmat = (s) => {
    const M = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]; const ix = { x: 0, y: 1, z: 2 };
    for (const [c, mo] of terms(s)) {
      const sq = mo.match(/^([xyz])\^2$/);
      if (sq) M[ix[sq[1]]][ix[sq[1]]] += c;
      else { const [i, j] = mo.split('').map((v) => ix[v]); M[i][j] += c / 2; M[j][i] += c / 2; }
    }
    return M;
  };
  /** valeurs propres d'une matrice symétrique 3x3 (méthode de Jacobi), triées */
  const eigSym = (M0) => {
    const A = M0.map((r) => r.slice()); const n = A.length;
    for (let it = 0; it < 100; it++) {
      let p = 0, q = 1, mx = 0;
      for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) if (Math.abs(A[i][j]) > mx) { mx = Math.abs(A[i][j]); p = i; q = j; }
      if (mx < 1e-13) break;
      const th = 0.5 * Math.atan2(2 * A[p][q], A[q][q] - A[p][p]); const c = Math.cos(th), s = Math.sin(th);
      for (let k = 0; k < n; k++) { const akp = A[k][p], akq = A[k][q]; A[k][p] = c * akp - s * akq; A[k][q] = s * akp + c * akq; }
      for (let k = 0; k < n; k++) { const apk = A[p][k], aqk = A[q][k]; A[p][k] = c * apk - s * aqk; A[q][k] = s * apk + c * aqk; }
    }
    return A.map((r, i) => r[i]).sort((a, b) => a - b);
  };
  const simpson = (f, a, b, n = 20000) => { const h = (b - a) / n; let s = f(a) + f(b); for (let i = 1; i < n; i++) s += (i % 2 ? 4 : 2) * f(a + i * h); return s * h / 3; };
  const powOf = (s, v) => { const m = String(s).match(new RegExp(`${v}(?:\\^\\{(\\d+)\\})?`)); return m ? (m[1] ? +m[1] : 1) : 0; };
  const st = (q) => String(q.statement);
  const g = (q, re) => { const m = st(q).match(re); if (!m) throw new Error('énoncé non reconnu ' + re); return m; };

  const L2 = (q) => {
    const T = String(q.title);
    if (/maximum d'une forme linéaire sur une sphère/.test(T)) {
      const m = g(q, /= ([^$]*)\$ sur (?:la sphère|le cercle) d'équation \$[^=]*= (\d+)\$/);
      const u = terms(m[1]).map((t) => t[0]);
      return cmp(q, [Math.sqrt(u.reduce((s, x) => s + x * x, 0) * +m[2])], 'max Cauchy-Schwarz');
    }
    if (/distance minimale/.test(T)) {
      const m = g(q, /plan d'équation \$(.*) = (\d+)\$/);
      const tt = terms(m[1]); const S = tt.reduce((s, [c]) => s + c * c, 0);
      // contrôle par minimisation directe : point X = d u / S
      return cmp(q, [m[2] ** 2 / S], 'min sous contrainte');
    }
    if (/valeurs propres d'une matrice symétrique/.test(T)) return cmp(q, eigSym(mat(st(q))), 'spectre');
    if (/extremum d'une forme quadratique sur le cercle/.test(T)) {
      const m = g(q, /le (maximum|minimum) de \$q\(x, y\) = (.*)\$ sur le cercle/);
      const M = qmat(m[2]); const e = eigSym([[M[0][0], M[0][1]], [M[1][0], M[1][1]]]);
      return cmp(q, [m[1] === 'maximum' ? e[1] : e[0]], 'Rayleigh');
    }
    if (/relation \$A\^2/.test(T)) {
      const A = mat(st(q)); const A2 = mul(A, A);
      const al = A2[0][1] / A[0][1]; const be = A2[0][0] - al * A[0][0];
      return cmp(q, [al, be], 'Cayley-Hamilton 2x2');
    }
    if (/réduction de \$A\^3\$/.test(T)) {
      const A = mat(st(q)); const A3 = mpow(A, 3);
      const p = A3[0][1] / A[0][1];
      return cmp(q, [p, A3[0][0] - p * A[0][0]], 'A^3');
    }
    if (/sous le signe intégrale/.test(T)) {
      const m = g(q, /F\(x\) = \\int_0\^1 (.*?)e\^\{(-?\d*)xt\} \\, dt/);
      const k = powOf(m[1], 't'); const a = m[2] === '' ? 1 : m[2] === '-' ? -1 : +m[2];
      const n = /F'\(0\)/.test(st(q)) ? 1 : /F''\(0\)/.test(st(q)) ? 2 : 3;
      // F^(n)(0) par différences finies centrées sur F calculée par Simpson
      const F = (x) => simpson((t) => t ** k * Math.exp(a * x * t), 0, 1, 2000);
      const h = 1e-2;
      const d = n === 1 ? (F(h) - F(-h)) / (2 * h) : n === 2 ? (F(h) - 2 * F(0) + F(-h)) / (h * h) : (F(2 * h) - 2 * F(h) + 2 * F(-h) - F(-2 * h)) / (2 * h ** 3);
      return cmp(q, [d], 'dérivée sous l\'intégrale', 2e-3);
    }
    if (/Cayley-Hamilton en dimension 3/.test(T)) {
      const A = mat(st(q)); const A2 = mul(A, A), A3 = mul(A2, A);
      const [a, b, c] = ansNums(q.answer);
      for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) if (!near(A3[i][j], a * A2[i][j] + b * A[i][j] + (i === j ? c : 0))) return `A^3 ≠ aA^2 + bA + cI (${q.answer})`;
      return cmp(q, [a, b, c], 'CH 3x3');
    }
    if (/signature/.test(T)) {
      const e = eigSym(qmat(g(q, /q\(x, y, z\) = (.*?)\$ sur/)[1]));
      return cmp(q, [e.filter((x) => x > 1e-9).length, e.filter((x) => x < -1e-9).length], 'signature');
    }
    if (/Lemme d'Abel/.test(T)) {
      const m = g(q, /z\^\{(\d)n\}\}\{(\d+)\^n\}/);
      return cmp(q, [(+m[2]) ** (1 / +m[1])], 'rayon', 1e-9);
    }
    if (/puissance \$n\$-ième/.test(T)) {
      const A = mat(st(q)); const n = +g(q, /A\^\{(\d+)\}/)[1]; const An = mpow(A, n);
      const al = An[0][1] / A[0][1];
      return cmp(q, [al, An[0][0] - al * A[0][0]], 'A^n');
    }
    if (/intervalle non borné/.test(T)) {
      const m = g(q, /\\int_0\^\{\+\\infty\} (.*?)e\^\{-xt\}/); const k = powOf(m[1], 't');
      const x0 = +g(q, /calculer \$F'\((\d+)\)\$/)[1];
      const F = (x) => simpson((t) => t ** k * Math.exp(-x * t), 0, 80 / x, 40000);
      const h = 1e-3;
      return cmp(q, [(F(x0 + h) - F(x0 - h)) / (2 * h)], 'F\'(x0)', 1e-4);
    }
    if (/bornes d'une forme quadratique/.test(T)) {
      const e = eigSym(qmat(g(q, /q\(x, y, z\) = (.*?)\$\. Déterminer/)[1]));
      return cmp(q, [e[0], e[2]], 'min/max sphère', 1e-9);
    }
    return 'titre L2-PRF inconnu : ' + T;
  };

  const divisors = (m) => { const d = []; for (let i = 1; i <= m; i++) if (m % i === 0) d.push(i); return d; };
  const vp = (n, p) => { let a = 0; while (n % p === 0) { n /= p; a++; } return a; };
  const phi = (n) => { let c = 0; for (let i = 1; i <= n; i++) if (V.gcd(i, n) === 1) c++; return c; };
  const isPrime = (n) => n > 1 && divisors(n).length === 2;
  const fmap = (q) => {
    const m = g(q, /f\(x, y\) = \\left\((.*) ; (.*)\\right\)/);
    const P = [pxy(m[1]), pxy(m[2])];
    const pt = g(q, /(?:J_f|A = )\(?(-?\d+), (-?\d+)\)/);
    const x = +pt[1], y = +pt[2];
    return P.map((Pi) => [ev(dx(Pi), x, y), ev(dy(Pi), x, y)]);
  };

  const L3 = (q) => {
    const T = String(q.title);
    if (/ordre d'un \$p\$-sous-groupe/.test(T)) {
      const m = g(q, /groupe d'ordre \$(\d+)\$\. Quel est l'ordre d'un \$(\d+)\$-sous-groupe/);
      return cmp(q, [(+m[2]) ** vp(+m[1], +m[2])], 'ordre du Sylow');
    }
    if (/jacobien en un point/.test(T)) {
      const J = fmap(q);
      return cmp(q, [J[0][0] * J[1][1] - J[0][1] * J[1][0]], 'jacobien');
    }
    if (/Convergence dominée sur un segment/.test(T)) {
      const c = +g(q, /\\int_0\^\{(\d+)\}/)[1]; const N = 1e5;
      const k = powOf(g(q, /\\int_0\^\{\d+\} (.*?) \\, dx/)[1].replace(/\^\{n\}/, '').replace(/\\frac\{x\}\{n\}/g, '').replace(/e\^\{-x\}|\\sin\\left\(.*$/, ''), 'x');
      const f = /\\sin/.test(st(q)) ? (x) => N * x ** k * Math.sin(x / N) : (x) => x ** k * (1 + x / N) ** N * Math.exp(-x);
      return cmp(q, [simpson(f, 0, c)], 'TCD segment', 1e-3);
    }
    if (/Lemme de Fatou/.test(T)) {
      const m = g(q, /\[0 ; (\d+)\]\$ muni.*f_n = (\d*)n \\, \\mathbf\{1\}_\{\]0 ; 1\/n\]\} \+ (\d+)\$/);
      const c = +m[1], a = m[2] ? +m[2] : 1, b = +m[3];
      // ∫ f_n calculé directement pour un n grand, liminf f_n = b presque partout
      const n = 1000; const In = simpson((x) => (x > 0 && x <= 1 / n ? a * n : 0) + b, 0, c, 400000);
      return cmp(q, [b * c, Math.round(In)], 'Fatou');
    }
    if (/valeurs possibles du nombre/.test(T)) {
      const m = g(q, /groupe d'ordre \$(\d+)\$ et \$n_\{(\d+)\}\$/); const n = +m[1], p = +m[2];
      const mm = n / p ** vp(n, p);
      return cmp(q, [divisors(mm).filter((d) => d % p === 1 % p).length], 'n_p possibles');
    }
    if (/Norme d'une forme linéaire/.test(T)) {
      const c = terms(g(q, /\\varphi\(x\) = (.*)\$\.?$/)[1]).map((t) => Math.abs(t[0]));
      const inf = /\\\|_\{\\infty\}/.test(st(q));
      // calcul par énumération des sommets de la boule unité
      let best = 0; const N = c.length;
      if (inf) { for (let s = 0; s < 1 << N; s++) best = Math.max(best, Math.abs(c.reduce((acc, x, i) => acc + x * (s >> i & 1 ? 1 : -1), 0))); }
      else best = Math.max(...c);
      return cmp(q, [best], 'norme de forme linéaire');
    }
    if (/éléments d'ordre \$p\$/.test(T)) {
      const m = g(q, /exactement \$(\d+)\$ sous-groupes de Sylow d'ordre \$(\d+)\$/);
      return cmp(q, [+m[1] * (+m[2] - 1)], 'éléments d\'ordre p');
    }
    if (/différentielle de la réciproque/.test(T)) {
      const J = fmap(q); const D = J[0][0] * J[1][1] - J[0][1] * J[1][0];
      const I = [[J[1][1] / D, -J[0][1] / D], [-J[1][0] / D, J[0][0] / D]];
      const P = mul(I, J); if (!near(P[0][0], 1) || !near(P[1][1], 1) || !near(P[0][1], 0)) return 'inverse incorrect';
      return cmp(q, I.flat(), 'J_g');
    }
    if (/Convergence dominée sur \$\[0 ; \+\\infty\[\$/.test(T)) {
      const m = g(q, /\\int_0\^\{\+\\infty\} (.*?)\\left\(1 \+ \\frac\{x\}\{n\}\\right\)\^\{-n\} e\^\{(-\d*)x\}/);
      const k = powOf(m[1], 'x'); const a = m[2] === '-' ? 1 : -m[2]; const N = 1e5;
      return cmp(q, [simpson((x) => x ** k * (1 + x / N) ** -N * Math.exp(-a * x), 0, 60, 60000)], 'TCD Laplace', 1e-3);
    }
    if (/Norme subordonnée d'une matrice/.test(T)) {
      const A = mat(st(q)); const inf = /\\\|_\{\\infty\}/.test(st(q));
      let best = 0;
      // sup sur les sommets de la boule unité
      if (inf) { for (let s = 0; s < 8; s++) { const x = [0, 1, 2].map((i) => (s >> i & 1 ? 1 : -1)); best = Math.max(best, ...A.map((r) => Math.abs(r.reduce((acc, v, i) => acc + v * x[i], 0)))); } }
      else { for (let j = 0; j < 3; j++) best = Math.max(best, A.reduce((acc, r) => acc + Math.abs(r[j]), 0)); }
      return cmp(q, [best], 'norme subordonnée');
    }
    if (/dérivée de la fonction implicite/.test(T)) {
      const P = pxy(g(q, /F\(x, y\) = (.*?)\$\. On a/)[1]);
      const m = g(q, /F\((-?\d+), (-?\d+)\) = 0/); const x = +m[1], y = +m[2];
      if (!near(ev(P, x, y), 0)) return 'F(x0, y0) ≠ 0';
      return cmp(q, [-ev(dx(P), x, y) / ev(dy(P), x, y)], 'phi\'(x0)');
    }
    if (/groupe d'ordre \$pq\$/.test(T)) {
      const m = g(q, /d'ordre \$(\d+) = (\d+) \\times (\d+)\$\. Combien \$G\$ possède-t-il d'éléments d'ordre \$(\d+)\$/);
      const p = +m[2], qq = +m[3];
      if (!isPrime(p) || !isPrime(qq) || (qq - 1) % p === 0) return 'hypothèses non cycliques';
      return cmp(q, [phi(+m[4])], 'groupe cyclique');
    }
    if (/paramètre entier/.test(T)) {
      const m = g(q, /\\int_0\^\{\+\\infty\} n (.*?)\\sin\\left\(\\frac\{x\}\{n\}\\right\) e\^\{(-\d*)x\}/);
      const k = powOf(m[1], 'x'); const a = m[2] === '-' ? 1 : -m[2]; const N = 1e5;
      return cmp(q, [simpson((x) => N * x ** k * Math.sin(x / N) * Math.exp(-a * x), 0, 80, 60000)], 'TCD sinus', 1e-4);
    }
    return 'titre L3-PRF inconnu : ' + T;
  };
  return { 'L2-PRF': L2, 'L3-PRF': L3 };
})(V));
}
// ==== PRE_VERIFIERS: fin ====
for (const f of VERIFY_FILES) addPre(require(path.resolve(f))(V));

// ---------------------------------------------------------------------------
// Saisie exacte : contrôles indépendants (parseurs propres au test, distincts de MathsGenUtils.texToInput)
// ---------------------------------------------------------------------------
/** Saisie élève (texte brut) -> { vals: [nombres] } ou null */
function plainVals(str) {
  let s = String(str).trim().replace(/[−–]/g, '-').replace(/\s+/g, '');
  const one = (t) => {
    let m;
    if ((m = t.match(/^(-?\d+)\/(\d+)$/))) return +m[1] / +m[2];
    if ((m = t.match(/^(-?\d+(?:[.,]\d+)?)[×*]10\^\(?(-?\d+)\)?$/))) return parseFloat(m[1].replace(',', '.')) * 10 ** +m[2];
    if (/^-?\d+(?:[.,]\d+)?$/.test(t)) return parseFloat(t.replace(',', '.'));
    return NaN;
  };
  if (/;/.test(s)) {
    s = s.replace(/^\((.*)\)$/, '$1');
    const v = s.split(';').map(one);
    return v.every(Number.isFinite) ? v : null;
  }
  const v = one(s);
  return Number.isFinite(v) ? [v] : null;
}
/** Réponse LaTeX d'origine (QCM) -> valeurs numériques du membre de droite, ou null */
function texVals(tex) {
  let s = String(tex).replace(/^\$|\$$/g, '').replace(/\\left|\\right/g, '').replace(/\\[,;!]/g, '').trim();
  s = s.split(/=|\\approx/).pop().trim();
  const one = (t) => {
    t = t.replace(/\s+/g, '');
    let m;
    if ((m = t.match(/^(-?)\\[dt]?frac\{(-?\d+)\}\{(\d+)\}$/))) return (m[1] ? -1 : 1) * +m[2] / +m[3];
    if ((m = t.match(/^(-?\d+(?:\{,\}\d+)?)\\times10\^\{?(-?\d+)\}?$/))) return parseFloat(m[1].replace('{,}', '.')) * 10 ** +m[2];
    if (/^-?\d+(?:\{,\}\d+)?$/.test(t)) return parseFloat(t.replace('{,}', '.'));
    return NaN;
  };
  const tup = s.match(/\(([^()]*;[^()]*)\)$/);
  const v = tup ? tup[1].split(';').map(one) : [one(s)];
  return v.every(Number.isFinite) ? v : null;
}
const fmtDec = (x, sep) => String(Math.round(x * 1e9) / 1e9).replace('.', sep);
/** Écritures équivalentes raisonnables de la réponse attendue */
function equivalents(ans, vals) {
  const out = [ans, ` ${ans} `, ans.replace(/-/g, '−')];
  if (vals.length === 1) {
    const v = vals[0];
    if (!/×10\^/.test(ans)) out.push(`x = ${ans}`);
    if (Math.abs(v * 1e6 - Math.round(v * 1e6)) < 1e-6) out.push(fmtDec(v, ','), fmtDec(v, '.'));
    if (/×10\^/.test(ans)) out.push(ans.replace('×', '*'), ans.replace('×', ' × '));
    const m = ans.match(/^(-?\d+),(\d+)$/);
    if (m) { const den = 10 ** m[2].length; const num = Math.round(v * den); const g = gcd(num, den); out.push(`${num / g}/${den / g}`); }
  } else {
    out.push(`(${ans.replace(/^\(|\)$/g, '').split(';').join(' ; ')})`);
    // sans parenthèses : accepté seulement si aucune composante décimale (limite connue de validateAnswer)
    if (!/,/.test(ans)) out.push(ans.replace(/^\(|\)$/g, ''));
  }
  return out;
}
function checkExact(q) {
  const issues = [];
  if (!ENGINE) return ['EXACT:moteur absent'];
  const ans = String(q.answer);
  const vals = plainVals(ans);
  if (!vals) { // réponse non numérique (mot, oui/non…) : seule la saisie exacte est contrôlée
    if (!ENGINE.validateAnswer(ans, q)) issues.push('EXACT:réponse attendue refusée par validateAnswer: ' + ans);
    return issues;
  }
  for (const e of equivalents(ans, vals)) {
    if (!ENGINE.validateAnswer(e, q)) issues.push(`EXACT:écriture équivalente refusée « ${e} » (attendu ${ans})`);
  }
  const wrong = vals.length === 1 ? fmtDec(vals[0] + 1, ',') : `(${vals.map((v, i) => fmtDec(i === 0 ? v + 1 : v, '.')).join(';')})`;
  if (ENGINE.validateAnswer(wrong, q)) issues.push('EXACT:valeur fausse acceptée ' + wrong);
  if (q.mcq) {
    const tv = texVals(q.mcq.answer);
    // saisie explicite (q.exactAnswer) : contrôlée par le vérificateur de la famille (q.exactInput)
    if (q.mcq.explicit) { /* pas de comparaison avec la réponse LaTeX */ } else if (!tv) issues.push('EXACT:réponse LaTeX d\'origine illisible ' + q.mcq.answer);
    else if (tv.length !== vals.length || tv.some((v, i) => Math.abs(v - vals[i]) > 1e-9 * Math.max(1, Math.abs(v)))) issues.push(`EXACT:saisie ${ans} ≠ réponse d'origine ${q.mcq.answer}`);
    for (const o of q.mcq.options || []) {
      if (o === q.mcq.answer) continue;
      const ov = texVals(o);
      if (!ov) continue;
      const plain = ov.length === 1 ? fmtDec(ov[0], '.') : `(${ov.map((v) => fmtDec(v, '.')).join(';')})`;
      if (ENGINE.validateAnswer(plain, q)) issues.push(`EXACT:distracteur d'origine accepté ${o}`);
    }
  }
  return issues;
}
const exactStats = {};

// ---------------------------------------------------------------------------
// Cohérence des indices (hint1, hint2) avec la question réellement posée
//   HINT:donne la réponse  — l'indice contient la réponse (« = 42 », ou toute la réponse LaTeX) : erreur ;
//   nombre étranger        — nombre de l'indice absent de l'énoncé ET de la correction : signalé (souvent une étape
//                            intermédiaire légitime ; à relire si le taux d'un palier est élevé) ;
//   HINT:suite étrangère   — suite u_n, v_n, w_n nommée dans l'indice, absente de l'énoncé et de la correction : erreur ;
//   objet étranger         — fonction f, g, h nommée dans l'indice et absente ailleurs : signalé (souvent une formule
//                            générique légitime, « (g(ax + b))' = a g'(ax + b) ») ;
//   HINT:identique         — même indice pour des familles (titres) différentes d'un même palier : signalé (liste).
// ---------------------------------------------------------------------------
const mathOf = (s) => [...String(s || '').matchAll(/\$\$([\s\S]*?)\$\$|\$([^$]*)\$/g)].map((m) => m[1] || m[2] || '').join(' ');
const normM = (s) => String(s).replace(/\\[,;!: ]/g, '').replace(/\\left|\\right|\\displaystyle/g, '').replace(/\\[dt]frac/g, '\\frac').replace(/\s+/g, '');
/** nombres d'un texte (mode math et texte), sous forme canonique « 12 », « 2.5 », « 3/4 » */
function numsOf(s) {
  const t = String(s || '').replace(/\\[dt]?frac\{(-?\d+)\}\{(\d+)\}/g, ' $1/$2 ').replace(/(\d)\\,(\d{3})/g, '$1$2').replace(/(\d) (\d{3})(?!\d)/g, '$1$2')
    .replace(/\{,\}/g, '.').replace(/(\d),(\d)/g, '$1.$2').replace(/[_^]\{?-?\d+\}?/g, ' ').replace(/[A-Za-z]+\d+/g, ' ');
  return [...t.matchAll(/\d+(?:\.\d+)?(?:\/\d+)?/g)].map((m) => m[0]);
}
function checkHints(q, view) {
  const issues = [];
  const st = String(view.statement) + ' ' + String(q.statement);
  const sol = String(q.solution || '');
  const ctx = new Set([...numsOf(st), ...numsOf(sol), ...numsOf(q.title), ...numsOf(q.skill)]);
  const ctxVals = new Set([...ctx].map((x) => { const m = x.match(/^(\d+)\/(\d+)$/); return String(Math.round((m ? m[1] / m[2] : +x) * 1e9) / 1e9); }));
  const ansTex = String(view.answer || '');
  const ansMath = normM(mathOf(ansTex));
  const rhs = ansMath.split(/=|\\approx/).pop();
  for (const h of ['hint1', 'hint2']) {
    const txt = q[h];
    if (!txt) continue;
    const hm = normM(mathOf(txt));
    // 1. l'indice donne la réponse
    if (ansMath.length >= 4 && /=|\\approx/.test(ansMath) && hm.includes(ansMath)) issues.push(`HINT:donne la réponse (${h}) ${ansTex}`);
    else if (rhs && /^-?(\d+(\.\d+)?|\\frac\{\d+\}\{\d+\}|\d+\{,\}\d+)$/.test(rhs) && !/^-?[0-9]$/.test(rhs)) {
      const re = new RegExp('(=|\\\\approx)' + rhs.replace(/[\\{}^$.*+?()[\]|]/g, '\\$&') + '(?![\\d{,.])');
      if (re.test(hm) && !re.test(normM(mathOf(st)))) issues.push(`HINT:donne la réponse (${h}) ${ansTex}`);
    }
    // 2. nombres étrangers (≥ 3 chiffres significatifs ou décimaux/fractions), absents de l'énoncé et de la correction
    for (const n of numsOf(txt)) {
      if (/^\d$/.test(n) || /^\d\d$/.test(n) && +n <= 20) continue; // petits entiers : trop courants (exposants, k…)
      const m = n.match(/^(\d+)\/(\d+)$/);
      const v = String(Math.round((m ? m[1] / m[2] : +n) * 1e9) / 1e9);
      if (!ctx.has(n) && !ctxVals.has(v)) { hintForeignNums.push(`${q.chapterId}/T${q.tier} ${h} ${n}`); break; }
    }
    // 3. objets nommés étrangers : f(, g(, u_n, v_n, points A(…) / vecteurs
    // (u(x), v(x) sont exclus : lettres usuelles des formules (uv)' = u'v + uv')
    const objs = [...mathOf(txt).matchAll(/(?<![a-zA-Z\\])([fgh](?=\()|[uvw](?=_))/g)].map((m) => m[1]);
    const stm = mathOf(st) + ' ' + mathOf(sol) + ' ' + st;
    for (const o of new Set(objs)) {
      // objet défini dans l'indice lui-même (« pose f(x) = … », « f : x \mapsto … ») : légitime
      if (new RegExp(`${o}\\([a-z]\\)\\s*=|${o}\\s*:|${o}_\\{?n\\}?\\s*=|fonctions?\\s*\\$${o}|suites?\\s*\\$?\\(?${o}`).test(txt)) continue;
      if (!new RegExp(`(?<![a-zA-Z\\\\])${o}(?=\\(|_|'|\\s|\\)|,|$|\\^)`).test(stm)) { if (/[uvw]/.test(o)) issues.push(`HINT:suite étrangère (${h}) ${o}`); else hintForeignNums.push(`${q.chapterId}/T${q.tier} ${h} objet ${o}`); break; }
    }
  }
  return issues;
}
const hintFamilies = {};
const hintForeignNums = [];

// ---------------------------------------------------------------------------
// Boucle principale
// ---------------------------------------------------------------------------
const chapters = [...new Set((window.MATHS_CHAPTERS || []).map((c) => c.id))]
  .filter((id) => /^(L[123]-|2[NAGS]\d|1[AGS]\d|T[AGSX]\d|capes-\d)/.test(id))
  .filter((id) => !ONLY || ONLY.test(id));

let errors = 0; let total = 0; let nulls = 0; let verified = 0; let unverified = 0;
const varietyRows = []; const lowVariety = [];
const errByCat = {};
for (const ch of chapters) {
  const row = [];
  for (let t = 1; t <= 4; t++) {
    const seen = new Set(); const iss = {}; let nul = 0; let ver = 0;
    const mainVerifier = VERIFIERS[ch + '/' + t] || VERIFIERS[ch];
    const pres = [...(PRE_VERIFIERS[ch + '/' + t] || []), ...(PRE_VERIFIERS[ch] || [])];
    const verifier = (mainVerifier || pres.length) ? (q) => {
      for (const f of pres) { const r = f(q); if (r !== undefined) return r; }
      return mainVerifier ? mainVerifier(q) : 'aucun vérificateur pour cette famille';
    } : null;
    for (let r = 0; r < N; r++) {
      total++;
      let q;
      try { q = ADV.generate(ch, t); } catch (e) {
        const k = 'EXCEPTION:' + e.message;
        iss[k] = iss[k] || { n: 0, sample: String(e.stack).split('\n').slice(0, 3).join(' | ') };
        iss[k].n++; continue;
      }
      if (q === null) { nul++; continue; }
      if (!q) { const k = 'RETOUR_INVALIDE:' + q; iss[k] = iss[k] || { n: 0, sample: '' }; iss[k].n++; continue; }
      seen.add(q.statement + '||' + q.answer);
      const is = checkQ(q);
      // Forme QCM d'origine d'une question convertie en saisie exacte : recalcul et qualité des distracteurs
      const view = q.type === 'exact' && q.mcq
        ? Object.assign({}, q, { type: 'mcq', statement: q.mcq.statement, answer: q.mcq.answer, options: q.mcq.options, correctIndex: q.mcq.options.indexOf(q.mcq.answer), exactInput: q.answer })
        : q;
      if (view !== q) checkQ(view).filter((x) => /^(opt|QCM)/.test(x)).forEach((x) => is.push('QCM_ORIGINE:' + x));
      if (q.type === 'exact') checkExact(q).forEach((x) => is.push(x));
      checkHints(q, view).forEach((x) => is.push(x));
      if (q.hint1) {
        const hk = ch + '/T' + t + '|' + q.hint1;
        (hintFamilies[hk] = hintFamilies[hk] || new Set()).add(String(q.title).replace(/\$[^$]*\$/g, '…'));
      }
      const lvl = /^L[123]/.test(ch) ? ch.slice(0, 2) : /^capes/.test(ch) ? 'CAPES' : { 2: '2nde', 1: '1re', T: 'Tle' }[ch[0]];
      exactStats[lvl] = exactStats[lvl] || {};
      const es = exactStats[lvl][t] = exactStats[lvl][t] || [0, 0];
      es[1]++; if (q.type === 'exact') es[0]++;
      if (verifier) {
        let res;
        try { res = verifier(view); } catch (e) { res = 'verifier exception: ' + e.message; }
        if (typeof res === 'string' && res !== 'skip') is.push('RECALCUL:' + res);
        else if (res === true) ver++;
      }
      for (const x of is) {
        const k = x.replace(/<<.*>>/, '').replace(/-?\d+/g, '#').slice(0, 100);
        const cat = k.split(':').slice(1, 2).join() || k;
        errByCat[cat] = (errByCat[cat] || 0) + 1;
        if (!iss[k]) iss[k] = { n: 0, sample: x + '\n      ÉNONCÉ : ' + String(q.statement).slice(0, 260) + '\n      RÉPONSE : ' + q.answer + (q.options ? '\n      OPTIONS : ' + JSON.stringify(q.options) : '') };
        iss[k].n++;
      }
      if (is.length) errors++;
    }
    nulls += nul;
    if (verifier) { verified += ver; } else unverified += N - nul;
    const nonNull = N - nul;
    const low = nonNull > 0 && seen.size < Math.min(MIN_VARIETY, nonNull);
    row.push(nul === N ? 'null' : String(seen.size) + (nul ? `(+${nul} null)` : ''));
    if (low) { lowVariety.push(`${ch}/T${t}=${seen.size}`); }
    if (Object.keys(iss).length) {
      console.log(`== ${ch}/T${t}  distincts=${seen.size}/${N}  null=${nul}`);
      for (const [ik, iv] of Object.entries(iss)) console.log(`   [${iv.n}] ${ik}\n      ${iv.sample}`);
    }
    if (args.samples && seen.size) console.log(`-- ${ch}/T${t} exemple : ${[...seen][0].slice(0, 200)}`);
  }
  varietyRows.push(`${ch.padEnd(8)} ${row.map((x) => x.padStart(5)).join(' ')}`);
}

console.log('\n=== Variété (énoncés distincts sur ' + N + ' tirages, T1 T2 T3 T4 ; "null" = repli banque statique) ===');
console.log(varietyRows.join('\n'));
const sharedHints = Object.entries(hintFamilies).filter(([, v]) => v.size >= 2);
console.log(`\n=== Indices identiques pour des familles différentes d'un même palier : ${sharedHints.length} ===`);
for (const [k, v] of sharedHints.slice(0, 40)) console.log(`  ${k.split('|')[0]} « ${k.split('|').slice(1).join('|').slice(0, 90)} » ← ${[...v].join(' / ').slice(0, 120)}`);
{
  const byKey = {};
  for (const x of hintForeignNums) { const k = x.split(' ')[0]; byKey[k] = (byKey[k] || 0) + 1; }
  const top = Object.entries(byKey).filter(([, n]) => n >= N / 2).sort((a, b) => b[1] - a[1]);
  console.log(`\n=== Indices citant un nombre ou une fonction absents de l'énoncé et de la correction (≥ 50 % des tirages, à relire) : ${top.length} ===`);
  if (top.length) console.log('  ' + top.map(([k, n]) => `${k}:${n}`).join('  '));
}
console.log('\n=== Part de saisie exacte (T1 T2 T3 T4) ===');
for (const [lvl, o] of Object.entries(exactStats)) {
  console.log(`${lvl.padEnd(6)} ${[1, 2, 3, 4].map((t) => (o[t] ? Math.round(100 * o[t][0] / o[t][1]) + ' %' : '-').padStart(6)).join(' ')}`);
}
console.log('\nCatégories d\'erreurs :', JSON.stringify(errByCat));
console.log(`Tirages : ${total}  |  null (repli banque) : ${nulls}  |  questions recalculées OK : ${verified}  |  tirages sans vérificateur : ${unverified}`);
console.log(`Questions en erreur : ${errors}`);
console.log(`Paliers sous le seuil de variété (${MIN_VARIETY}) : ${lowVariety.length}${lowVariety.length ? ' → ' + lowVariety.join(' ') : ''}`);
const fail = errors > 0 || lowVariety.length > 0;
console.log(fail ? 'ÉCHEC' : 'OK');
process.exit(fail ? 1 : 0);
