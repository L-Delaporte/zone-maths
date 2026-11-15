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
  'js/data/data_2nde.js', 'js/data/data_1ere.js', 'js/data/data_1tc.js', 'js/data/data_1techno.js', 'js/data/data_terminale.js',
  'js/data/data_l1.js', 'js/data/data_l2.js', 'js/data/data_l3.js', 'js/data/data_capes.js', 'js/data/data_proofs.js',
  'js/generatorsCore.js', 'js/advancedGenerators.js', 'js/lyceeGenerators.js', 'js/premiereVoiesGenerators.js', 'js/adaptiveEngine.js'
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

// ---------------------------------------------------------------------------
// Formes complètes recalculées (développée, équation réduite, canonique) : écriture indépendante des générateurs
// ---------------------------------------------------------------------------
/** flottant -> fraction irréductible [n, d] (d <= 1000) ; erreur si aucune fraction ne convient */
function ratOf(c, tol = 1e-7) {
  for (let d = 1; d <= 1000; d++) {
    const n = Math.round(c * d);
    if (Math.abs(n / d - c) <= tol * Math.max(1, Math.abs(c))) { const g = gcd(n, d) || 1; return [n / g, d / g]; }
  }
  throw new Error('coefficient non rationnel ' + c);
}
/** forme développée réduite en texte brut, coefficients (flottants) du plus haut degré au terme constant */
function plainPoly(cs, v = 'x') {
  let out = '';
  cs.forEach((c, i) => {
    const [n, d] = ratOf(c);
    if (!n) return;
    const deg = cs.length - 1 - i;
    const mono = deg === 0 ? '' : deg === 1 ? v : `${v}^${deg}`;
    const abs = Math.abs(n);
    out += (n < 0 ? '-' : out ? '+' : '') + (d !== 1 ? `${abs}/${d}` : mono && abs === 1 ? '' : abs) + mono;
  });
  return out || '0';
}
/** forme canonique a(x - α)² + β (texte brut) du trinôme ax² + bx + c */
function canonOf(a, b, c) {
  const al = -b / (2 * a); const be = c - b * b / (4 * a);
  const [an] = ratOf(a); const [aln, ald] = ratOf(al); const [ben, bed] = ratOf(be);
  const fr = (n, d) => (d === 1 ? String(Math.abs(n)) : `${Math.abs(n)}/${d}`);
  const lead = an === 1 ? '' : an === -1 ? '-' : String(an);
  const sq = aln === 0 ? 'x^2' : `(x${aln > 0 ? '-' : '+'}${fr(aln, ald)})^2`;
  return `${lead}${sq}${ben === 0 ? '' : (ben > 0 ? '+' : '-') + fr(ben, bed)}`;
}
const FORM_CHECKERS = { developpement: 'checkDeveloppement', factorisation: 'checkFactorisation', equationDroite: 'checkEquationDroite', canonique: 'checkCanonique' };
/**
 * Saisie d'une forme complète recalculée `exp` : answerType attendu, saisie (exactInput ou réponse native) et
 * réponse LaTeX du QCM équivalentes à `exp` au sens du correcteur du moteur, dans les deux sens.
 * Renvoie true si tout est cohérent, sinon un message.
 */
function formCheck(q, kind, exp) {
  const chk = FORM_CHECKERS[kind];
  const both = (a) => ENGINE[chk](a, exp).correct === true && ENGINE[chk](exp, a).correct === true;
  const a = q.exactInput !== undefined ? q.exactInput : q.type === 'exact' ? q.answer : null;
  if (a !== null) {
    if (q.answerType !== kind) return `answerType ${q.answerType} au lieu de ${kind}`;
    if (!both(a)) return `saisie ${a} ≠ forme recalculée ${exp}`;
  }
  if (q.type === 'mcq' && !both(String(q.answer).replace(/^\$|\$$/g, ''))) return `réponse QCM ${q.answer} ≠ forme recalculée ${exp}`;
  return true;
}
/** équation réduite recalculée y = mx + p (m, p flottants rationnels) */
const lineForm = (q, m, p) => formCheck(q, 'equationDroite', `y=${plainPoly([m, p])}`);
/** valeur numérique approchée (dérivée numérique, extrapolation) -> rationnel le plus simple à tol près */
const snap = (c, tol = 1e-6) => { const [n, d] = ratOf(c, tol); return n / d; };

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
    o.forEach((x) => { if (/^\$-?\d+\$$/.test(String(x).trim()) && !/^\$-?\d+(\\,\d{3})*(\{,\}\d+)?\$$/.test(String(q.answer).trim())) issues.push('QCM:distracteur synthétique nu ' + x); });
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
    // Ensembles de nombres vus comme réunions de « types » : 0 entier naturel, 1 entier négatif, 2 décimal non entier,
    // 3 rationnel non décimal, 4 irrationnel.
    const SETS = { '\\mathbb{N}': [0], '\\mathbb{Z}': [0, 1], '\\mathbb{D}': [0, 1, 2], '\\mathbb{Q}': [0, 1, 2, 3], '\\mathbb{R}': [0, 1, 2, 3, 4], '\\mathbb{R} \\setminus \\mathbb{Q}': [4], '\\varnothing': [] };
    const setOf = (t) => { const k = t.trim().replace(/^\((.*)\)$/, '$1').trim(); if (!(k in SETS)) throw new Error('ensemble inconnu ' + t); return SETS[k]; };
    const same = (x, y) => x.length === y.length && x.every((e) => y.includes(e));
    const one = (pred) => { const good = q.options.filter(pred); return (good.length === 1 && good[0] === q.answer) || `bonnes options : ${good.length}`; };
    if (/^Intersection et réunion d'ensembles/.test(q.title)) {
      const m = q.statement.match(/égal \$(.*) (\\cap|\\cup) (.*)\$ \?/);
      const A = setOf(m[1]); const B = setOf(m[3]);
      const res = m[2] === '\\cap' ? A.filter((e) => B.includes(e)) : [...new Set([...A, ...B])];
      return one((o) => same(setOf(o.replace(/\$/g, '')), res));
    }
    if (/^Appartenance et inclusion/.test(q.title)) {
      const m = q.statement.match(/aux nombres \$(.*?)\$ et \$(.*?)\$ et aux ensembles/);
      const type = (t) => {
        let r;
        if (t === '\\pi') return 4;
        if ((r = t.match(/^(-?)\\sqrt\{(\d+)\}$/))) { const s = Math.round(Math.sqrt(+r[2])); return s * s === +r[2] ? (r[1] && s ? 1 : 0) : 4; }
        if ((r = t.match(/^(-?)(\d+)$/))) return r[1] && +r[2] ? 1 : 0;
        if ((r = t.match(/^(-?)\\frac\{(\d+)\}\{(\d+)\}$/))) {
          const g = gcd(+r[2], +r[3]); const n = +r[2] / g; const d = +r[3] / g;
          if (d === 1) return r[1] && n ? 1 : 0;
          return primes(d).every((p) => p === 2 || p === 5) ? 2 : 3;
        }
        throw new Error('nombre non reconnu ' + t);
      };
      const nb = { [m[1]]: type(m[1]), [m[2]]: type(m[2]) };
      const truth = (o) => {
        const t = o.replace(/^\$|\$$/g, '');
        let r;
        if ((r = t.match(/^(.*) \\subset (.*)$/))) { const A = setOf(r[1]); const B = setOf(r[2]); return A.every((e) => B.includes(e)); }
        if ((r = t.match(/^(.*) \\(in|notin) (.*)$/))) { if (!(r[1] in nb)) throw new Error('nombre absent de l\'énoncé ' + r[1]); const v = setOf(r[3]).includes(nb[r[1]]); return r[2] === 'in' ? v : !v; }
        throw new Error('affirmation non reconnue ' + t);
      };
      return one(truth);
    }
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
    if (/Irrationalité|Un quotient|Rédiger une démonstration|Contraposée/.test(q.title)) return 'skip';
    if (/Décomposition/.test(q.title)) {
      const n = +q.statement.match(/de \$(\d+)\$/)[1];
      const fac = q.answer.replace(/\$/g, '').split('\\times').map((x) => x.trim().split('^').map(Number));
      const prod = fac.reduce((acc, [p, e]) => acc * p ** (e || 1), 1);
      return (prod === n && fac.every(([p]) => isPrime(p))) || 'décomposition fausse';
    }
    const m = q.statement.match(/\\frac\{(\d+)\}\{(\d+)\}/);
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
  // prédicat d'une inégalité simple ou avec valeur absolue (« |x - c| < r »)
  const ineqAbs = (e) => {
    const m = e.trim().match(/^\|x ([+-]) (\d+)\| (\\le|<|\\ge|>) (\d+)$/);
    if (!m) return ineqPred(e);
    const c = m[1] === '-' ? +m[2] : -m[2];
    return (x) => cmp(m[3])(Math.abs(x - c), +m[4]);
  };
  const intervalOp = (q) => {
    const I = parseSet(q.statement.match(/I = (.*?)\$/)[1]);
    const J = parseSet(q.statement.match(/J = (.*?)\$/)[1]);
    const inter = /\\cap J/.test(q.statement);
    return sameSet((x) => (inter ? I.has(x) && J.has(x) : I.has(x) || J.has(x)), q.answer, [...I.pts, ...J.pts]);
  };
  R['2N3/2'] = (q) => {
    if (/Déterminer \$I \\c(ap|up) J\$/.test(q.statement)) return intervalOp(q);
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
    const both = q.statement.match(/à la fois \$(.*?)\$ et \$(.*?)\$/);
    if (both) {
      const p1 = ineqAbs(both[1]); const p2 = ineqAbs(both[2]);
      if (/Combien de nombres entiers/.test(q.statement)) {
        let n = 0; for (let k = -1000; k <= 1000; k++) if (p1(k) && p2(k)) n++;
        return n === +q.answer || `${n} entiers attendus`;
      }
      return sameSet((x) => p1(x) && p2(x), q.answer);
    }
    return intervalOp(q);
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
    const C = { rouge: 'R', bleue: 'B' };
    const seq = q.statement.match(/une boule (rouge|bleue) au premier tirage, puis une boule (rouge|bleue) au second/);
    const least = q.statement.match(/au moins une boule (rouge|bleue)/);
    const two = q.statement.match(/deux boules (rouges|bleues)/);
    const cond = q.statement.match(/Sachant que la première boule tirée est (rouge|bleue), quelle est la probabilité que la seconde soit (rouge|bleue)/);
    let fav = 0; let tot = 0;
    for (let i = 0; i < T; i++) for (let j = 0; j < T; j++) {
      if (!remise && i === j) continue;
      if (cond) { if (balls[i] !== C[cond[1]]) continue; tot++; if (balls[j] === C[cond[2]]) fav++; continue; }
      tot++;
      const x = balls[i]; const y = balls[j];
      const nR = (x === 'R') + (y === 'R');
      let ok;
      if (seq) ok = x === C[seq[1]] && y === C[seq[2]];
      else if (least) ok = x === C[least[1]] || y === C[least[1]];
      else if (/même couleur/.test(q.statement)) ok = x === y;
      else if (two) ok = x === y && x === (two[1] === 'rouges' ? 'R' : 'B');
      else ok = nR === 1;
      if (ok) fav++;
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
  // ---------- lecture d'une figure : courbe tracée (chemin bleu) dans un repère gradué ----------
  const pathPts = (d) => { // extrémités des segments M/C (points exacts de la courbe), en pixels
    const nums = d.replace(/[MC]/g, ' ').trim().split(/\s+/).map(Number); const P = [[nums[0], nums[1]]];
    for (let i = 2; i + 5 < nums.length + 0; i += 6) P.push([nums[i + 4], nums[i + 5]]);
    return P;
  };
  const figCurve = (st) => {
    const tv = (t) => +t.replace('−', '-');
    const xt = [...st.matchAll(/<text x="([\d.]+)" y="[\d.]+" text-anchor="middle" font-size="10"[^>]*>([−\d]+)<\/text>/g)].map((m) => [+m[1], tv(m[2])]);
    const yt = [...st.matchAll(/<text x="[\d.]+" y="([\d.]+)" text-anchor="end" font-size="10"[^>]*>([−\d]+)<\/text>/g)].map((m) => [+m[1] - 3.5, tv(m[2])]).filter((t) => t[1] !== 0);
    if (xt.length < 2 || yt.length < 2) throw new Error('graduations illisibles');
    const lin = (T) => { const [a, b] = [T[0], T[T.length - 1]]; const k = (b[0] - a[0]) / (b[1] - a[1]); return (px) => a[1] + (px - a[0]) / k; };
    const fx = lin(xt); const fy = lin(yt);
    const d = mathIn(st, /<path d="([^"]+)" fill="none" stroke="#2563eb"/)[1];
    return pathPts(d).map(([u, v]) => [Math.round(fx(u) * 1000) / 1000, fy(v)]);
  };
  const ivOf = (o) => { const m = strip(o).match(/^\[(-?\d+) ; (-?\d+)\]$/); return m ? [+m[1], +m[2]] : null; };
  const TOL = 2e-3;
  // propriétés lues sur les échantillons (pas régulier) entre p et q
  const inIv = (P, p, q) => P.filter(([x]) => x >= p - 1e-9 && x <= q + 1e-9);
  const convexOn = (P, p, q, sgn) => { const S = inIv(P, p, q); for (let i = 1; i + 1 < S.length; i++) if (sgn * (S[i + 1][1] - 2 * S[i][1] + S[i - 1][1]) < -TOL) return false; return S.length >= 3; };
  const signOn = (P, p, q, sgn) => inIv(P, p, q).every(([, y]) => sgn * y >= -TOL);
  const monoOn = (P, p, q, sgn) => { const S = inIv(P, p, q); for (let i = 0; i + 1 < S.length; i++) if (sgn * (S[i + 1][1] - S[i][1]) < -TOL) return false; return true; };
  const signChanges = (P) => { const out = []; const nz = P.filter(([, y]) => Math.abs(y) > TOL); for (let i = 0; i + 1 < nz.length; i++) if (Math.sign(nz[i][1]) !== Math.sign(nz[i + 1][1])) { const z = P.find(([x, y]) => x > nz[i][0] - 1e-9 && x < nz[i + 1][0] + 1e-9 && Math.abs(y) <= TOL); out.push(z ? z[0] : (nz[i][0] + nz[i + 1][0]) / 2); } return out; };
  const extrema = (P) => { const out = []; for (let i = 1; i + 1 < P.length; i++) { const a = P[i][1] - P[i - 1][1]; const b = P[i + 1][1] - P[i][1]; if (a * b < 0 && Math.abs(a) > 1e-6 && Math.abs(b) > 1e-6) out.push(P[i][0]); } return out; };
  const sameNums = (a, b) => a.length === b.length && a.every((v, i) => near(v, b[i], 1e-6));
  const ansNums = (q) => [...strip(q.answer).matchAll(/-?\d+/g)].map((m) => +m[0]);
  function ta4Figure(q) {
    const st = q.statement; const t = q.title;
    if (/Esquisser l'allure/.test(t)) {
      const sg = [...mathIn(st, /\| signe de \$f''\(x\)\$ \|(.*)\|/)[1].matchAll(/\$([+-])\$/g)].map((m) => m[1]);
      const up = /↗/.test(mathIn(st, /\| variations de \$f\$ \|(.*)\|/)[1]); if (/↗/.test(st) && /↘/.test(st)) return 'variations mixtes';
      const want = [up, sg[0] === '+', sg[1] === '+'];
      const panels = st.split('<rect ').slice(1).map((seg) => {
        const name = mathIn(seg, />([A-D])<\/text>/)[1];
        const P = pathPts(mathIn(seg, /<path d="([^"]+)"/)[1]).map(([u, v]) => [u, -v]); // ordonnées vers le haut
        const mid = P[Math.floor(P.length / 2)][0];
        const inc = P[P.length - 1][1] > P[0][1];
        return { name, props: [inc, convexOn(P, -Infinity, mid, 1), convexOn(P, mid, Infinity, 1)], props2: [convexOn(P, -Infinity, mid, -1), convexOn(P, mid, Infinity, -1)] };
      });
      const ok = panels.filter((p) => p.props[0] === want[0] && (want[1] ? p.props[1] : p.props2[0]) && (want[2] ? p.props[2] : p.props2[1]));
      return ok.length === 1 && q.answer === `Courbe ${ok[0].name}` ? true : `allure : ${ok.map((p) => p.name)} (réponse ${q.answer})`;
    }
    const P = figCurve(st);
    const ask = (st.match(/\$f\$ est-elle (convexe|concave) \?/) || [])[1];
    const sgn = ask === 'concave' ? -1 : 1;
    if (/Lire la convexité sur la courbe de \$f\$/.test(t)) return onlyAnswer(q, (o) => { const I = ivOf(o); return I && convexOn(P, I[0], I[1], sgn); });
    if (/Lire la convexité sur la courbe de \$f''\$/.test(t)) return onlyAnswer(q, (o) => { const I = ivOf(o); return I && signOn(P, I[0], I[1], sgn); });
    if (/Lire la convexité sur la courbe de \$f'\$/.test(t)) return onlyAnswer(q, (o) => { const I = ivOf(o); return I && monoOn(P, I[0], I[1], sgn); });
    if (/Points d'inflexion lus sur la courbe de \$f''\$/.test(t)) return sameNums(ansNums(q), signChanges(P)) || `inflexions ${signChanges(P)}`;
    if (/Points d'inflexion lus sur la courbe de \$f'\$/.test(t)) return sameNums(ansNums(q), extrema(P)) || `inflexions ${extrema(P)}`;
    if (/Annulation de \$f''\$ sans changement/.test(t)) {
      const z = signChanges(P);
      const exp = z.length === 0 ? 'Aucun' : z.length === 1 ? `Un seul, d'abscisse $x = ${z[0]}$` : null;
      return q.answer === exp || `attendu ${exp ?? z}`;
    }
    return 'famille TA4 (figure) non reconnue';
  }

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
      // n plus grand quand l'expression contient \sqrt{n} (convergence en 1/\sqrt{n})
      const n = /\^\{n\}/.test(ex) ? 300 : /\\sqrt\{n\}/.test(ex) ? 1e12 : 1e6;
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
      if (/<svg/.test(st)) return ta4Figure(q);
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
      if (/translation/.test(q.title)) {
        const P = vec(S, 'M'); const u = vec(S, '\\vec{u}'); const N = vec(A, "M'");
        return eq(N, P.map((x, i) => x + u[i])) || 'image fausse';
      }
      if (/Coordonnées d'un vecteur/.test(q.title)) {
        const P = vec(S, 'A'); const B = vec(S, 'B'); const w = vec(A, '\\overrightarrow{AB}');
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
        const k = A.match(/= (-?\d*)\\overrightarrow/)[1];
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
      if (/Formules de polarisation/.test(q.title)) {
        const nv = (lbl) => { const m = S.match(new RegExp('\\\\\\|' + lbl + '\\\\\\| = (\\d+)\\$')); return m ? +m[1] : null; };
        const a = nv('\\\\vec\\{u\\}'); const b = nv('\\\\vec\\{v\\}');
        const sP = nv('\\\\vec\\{u\\} \\+ \\\\vec\\{v\\}'); const sM = nv('\\\\vec\\{u\\} - \\\\vec\\{v\\}');
        let exp;
        if (sP !== null && sM !== null) exp = (sP * sP - sM * sM) / 4;
        else if (a !== null && b !== null && sP !== null) exp = (sP * sP - a * a - b * b) / 2;
        else if (a !== null && b !== null && sM !== null) exp = (a * a + b * b - sM * sM) / 2;
        else return 'données de polarisation illisibles';
        const t = String(A).replace(/\$/g, '').split('= ').pop().trim();
        const fr = t.match(/^(-?)\\d?frac\{(\d+)\}\{(\d+)\}$/) || t.match(/^(-?)(\d+)\/(\d+)$/);
        const val = fr ? (fr[1] ? -1 : 1) * fr[2] / fr[3] : parseFloat(t.replace('{,}', '.').replace(',', '.'));
        return V.near(val, exp) || `produit scalaire attendu ${exp}`;
      }
      if (/Plan médiateur d'un segment/.test(q.title)) {
        const P = vec(S, 'A'); const Q = vec(S, 'B'); const AB = [0, 1, 2].map((i) => Q[i] - P[i]);
        const ok = q.options.filter((o) => { const p = plane('équation ' + o); return colin(p.slice(0, 3), AB) && V.near(p[0] * (P[0] + Q[0]) / 2 + p[1] * (P[1] + Q[1]) / 2 + p[2] * (P[2] + Q[2]) / 2 + p[3], 0); });
        return (ok.length === 1 && ok[0] === A) || `options justes : ${ok.length}`;
      }
      if (/Position relative de deux droites/.test(q.title)) {
        const D = casesV(S); if (D.length !== 2 || D.flat().some((c) => !c)) return 'représentations illisibles';
        const [Pa, u] = [D[0].map((c) => c[0]), D[0].map((c) => c[1])]; const [Pb, w] = [D[1].map((c) => c[0]), D[1].map((c) => c[1])];
        if (colin(u, w)) return 'droites parallèles inattendues';
        const ortho = dot(u, w) === 0; const copl = dot(cross(u, w), [0, 1, 2].map((i) => Pb[i] - Pa[i])) === 0;
        const exp = copl ? (ortho ? 'Elles sont orthogonales et sécantes (donc perpendiculaires)' : 'Elles sont sécantes et non orthogonales') : (ortho ? 'Elles sont orthogonales et non coplanaires' : 'Elles sont non coplanaires et non orthogonales');
        return A === exp || `attendu « ${exp} »`;
      }
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
      // valeur numérique d'une réponse : « ... = v$ », fraction a/b saisie ou nombre décimal
      const numTxt = (t) => { t = String(t).trim(); const fr = t.match(/^(-?)\\d?frac\{(\d+)\}\{(\d+)\}$/) || t.match(/^(-?)(\d+)\/(\d+)$/); return fr ? (fr[1] ? -1 : 1) * fr[2] / fr[3] : parseFloat(t.replace('{,}', '.').replace(',', '.')); };
      const ansVal = (a) => { const m = String(a).match(/= (.*)\$/); return numTxt(m ? m[1] : a); };
      if (/Retrouver les paramètres d'une loi binomiale/.test(q.title)) {
        const m = S.match(/E\(X\) = ([\d{},]+)\$ et \$V\(X\) = ([\d{},]+)\$/); const E = dval(m[1]); const Vx = dval(m[2]);
        const pp = 1 - Vx / E; const nn = E / pp;
        const r = String(A).replace(/\$/g, '').replace(/^\(n ; p\) = /, '').match(/^\((\d+) ?; ?([\d{},./]+)\)$/);
        if (!r) return 'format (n ; p)';
        const pa = numTxt(r[2]);
        return (+r[1] === Math.round(nn) && V.near(nn, Math.round(nn)) && V.near(pa, pp)) || '(n ; p) faux';
      }
      if (/Variance d'une loi binomiale en situation/.test(q.title)) {
        const ctx = [[/nombre de « 6 »/, 1 / 6], [/« pile »/, 1 / 2], [/(\d+) boules rouges et (\d+) boules noires/, null], [/chacune (\d+) réponses dont une seule juste/, null], [/multiples de 3/, 1 / 3]];
        let pp = null;
        for (const [re, v] of ctx) { const m = S.match(re); if (m) { pp = v !== null ? v : m.length === 3 ? +m[1] / (+m[1] + +m[2]) : 1 / +m[1]; break; } }
        const nn = +(S.match(/(\d+) (?:fois|questions)/) || [])[1];
        if (pp === null || !nn) return 'situation non reconnue';
        return V.near(ansVal(A), nn * pp * (1 - pp)) || 'V fausse';
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
      if (/Intervalle/.test(q.title)) {
        const lo = dval(S.match(/\\le a\) > ([\d{},]+)\$/)[1]); const hi = dval(S.match(/P\(X \\le b\) \\ge ([\d{},]+)\$/)[1]);
        const m = A.match(/\[(\d+) ; (\d+)\]/); const a = +m[1]; const b = +m[2];
        const cum = (k) => { let s = 0; for (let i = 0; i <= k; i++) s += binom(n, i) * p ** i * (1 - p) ** (n - i); return s; };
        return (cum(a - 1) <= lo && cum(a) > lo && cum(b - 1) < hi && cum(b) >= hi) || 'intervalle faux';
      }
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
      if (/Forme trigonométrique/.test(q.title)) {
        const w = cplx(S.match(/z = (.*)\$\.$/)[1]);
        const m = A.match(/z = (.*?)(?:\\left\()?\\cos\\left\((.*?)\\right\) \+ i\\sin\\left\((.*?)\\right\)(?:\\right\))?\$/);
        if (!m || m[2] !== m[3]) return 'forme trigonométrique mal écrite';
        const r = m[1] === '' ? 1 : num(m[1]); const t = angle(m[2]);
        if (!inPi(t) && t !== 0) return 'argument hors intervalle';
        return (V.near(r, Math.hypot(w[0], w[1])) && V.near(Math.atan2(w[1], w[0]) / Math.PI, t)) || 'forme trigonométrique fausse';
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
      if (/trois états/.test(q.title)) {
        const P3 = N(mats(S)[0]);
        if (P3.length !== 3 || P3.some((l) => l.length !== 3 || l.some((x) => x < 0) || Math.abs(l[0] + l[1] + l[2] - 1) > 1e-9)) return 'matrice non stochastique';
        if (/Évolution/.test(q.title)) {
          const m = S.match(/\\pi_0 = \(([\d{},]+) ; ([\d{},]+) ; ([\d{},]+)\)/);
          const p0 = [m[1], m[2], m[3]].map((x) => dval(x));
          if (!V.near(p0[0] + p0[1] + p0[2], 1)) return 'pi0 non loi';
          const r = A.match(/\(([\d{},]+) ; ([\d{},]+) ; ([\d{},]+)\)/);
          return [0, 1, 2].every((j) => V.near(dval(r[j + 1]), p0[0] * P3[0][j] + p0[1] * P3[1][j] + p0[2] * P3[2][j])) || 'pi1 faux';
        }
        const r = A.match(/\\left\((.*) ; (.*) ; (.*)\\right\)/);
        const v = [r[1], r[2], r[3]].map((x) => V.val(x));
        if (!V.near(v[0] + v[1] + v[2], 1)) return 'somme différente de 1';
        return [0, 1, 2].every((j) => V.near(v[0] * P3[0][j] + v[1] * P3[1][j] + v[2] * P3[2][j], v[j])) || 'distribution invariante fausse';
      }
      const P = N(mats(S)[0]);
      if (Math.abs(P[0][0] + P[0][1] - 1) > 1e-9 || Math.abs(P[1][0] + P[1][1] - 1) > 1e-9) return 'matrice non stochastique';
      if (/Évolution/.test(q.title)) {
        const m = S.match(/\\pi_0 = \(([\d{},]+) ; ([\d{},]+)\)/); const x = dval(m[1]); const y = dval(m[2]);
        if (!V.near(x + y, 1)) return 'pi0 non loi';
        const r = A.match(/\(([\d{},]+) ; ([\d{},]+)\)/);
        return (V.near(dval(r[1]), x * P[0][0] + y * P[1][0]) && V.near(dval(r[2]), x * P[0][1] + y * P[1][1])) || 'pi1 faux';
      }
      if (/Distribution invariante/.test(q.title)) {
        const r = A.match(/\\left\((.*) ; (.*)\\right\)/); const x = V.val(r[1]); const y = V.val(r[2]);
        return (V.near(x + y, 1) && V.near(x * P[0][0] + y * P[1][0], x)) || 'distribution invariante fausse';
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
    if (/Contraposée d'une implication/.test(T(q))) {
      const m = st.match(/« si (.*?), alors (.*?) » \?/);
      if (!m) return 'implication illisible';
      const TXT = { 'le trinôme ne s\'annule jamais': 'le trinôme s\'annule au moins une fois', 'le trinôme change de signe sur $\\mathbb{R}$': 'le trinôme ne change pas de signe sur $\\mathbb{R}$', 'le trinôme admet deux racines réelles distinctes': 'le trinôme n\'admet pas deux racines réelles distinctes', '$a$ et $c$ sont de signes contraires': '$a$ et $c$ ne sont pas de signes contraires' };
      const non = (p) => TXT[p] || p.replace(/ > /, ' \\le ').replace(/ < /, ' \\ge ').replace(/ = /, ' \\neq ');
      const exp = `Si ${non(m[2])}, alors ${non(m[1])}.`;
      return A === exp || `contraposée ${A} ≠ ${exp}`;
    }
    if (/Raisonnement par contraposée/.test(T(q))) {
      const c = +(st.match(/T\(x\) = x\^2 [+-] \d*x? ?([+-]) (\d+)\$/) || []).slice(1).join('').replace('+', '');
      if (!Number.isFinite(c) || c === 0) return 'coefficient c illisible';
      return (c < 0 ? /au moins une racine/ : /ne permet pas/).test(A) || 'conclusion fausse';
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
    if (/^Nombre dérivé en \$0\$/.test(T(q))) {
      const m = st.match(/f\(x\) = (-?\d*)e\^\{(-?\d*)x\}(?: ([+-]) (\d*)x)?\$/);
      const co = (s) => (s === '' ? 1 : s === '-' ? -1 : +s);
      const d = m[3] ? (m[3] === '-' ? -1 : 1) * co(m[4]) : 0;
      return near(co(m[1]) * co(m[2]) + d, num(rhs(A))) || 'nombre dérivé faux';
    }
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
    if (/limite conjecturée et seuil/.test(T(q))) {
      // Recalcul indépendant : limite par évaluation à un rang très élevé, puis plus petit n0 tel que |u_n - ℓ| < 10^(-m)
      const e = st.match(/u_n = ([^$]+)\$/)[1].replace(/\\dfrac/g, '\\frac');
      const l = Math.round(ev(e, { n: 1e7 }));
      const p = +st.match(/10\^\{-(\d+)\}/)[1];
      let n0 = 0;
      // marge relative : à l'égalité exacte (écart = 10^(-m)), l'arrondi flottant ne doit pas faire passer l'inégalité stricte
      while (n0 < 1e6 && !(Math.abs(ev(e, { n: n0 }) - l) < 10 ** -p * (1 - 1e-9))) n0++;
      const r = String(A).replace(/\$/g, '').match(/^\((-?\d+);(\d+)\)$/);
      return (!!r && +r[1] === l && +r[2] === n0) || `attendu (${l};${n0})`;
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
    if (/Somme géométrique en situation/.test(T(q))) {
      const m = st.match(/plante \$(\d+)\$ arbres .* \$(\d+)\$ fois plus .* en \$(\d+)\$ ans/);
      let s = 0; for (let k = 0; k < +m[3]; k++) s += m[1] * m[2] ** k;
      return s === +rhs(A) || 'somme en situation fausse';
    }
    if (/recherche d'un seuil/.test(T(q))) {
      const m = st.match(/compte \$(\d+)\$ abonnés et en gagne \$(\d+)\$ .* compte \$(\d+)\$ abonnés .* de \$(\d+)\\,\\%\$/);
      let n = 0; while (m[3] * (1 + m[4] / 100) ** n <= +m[1] + n * m[2]) n++;
      return n === +rhs(A) || 'seuil faux';
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
      return near(num(rhs(A)), b * b + c * c - 2 * b * c * Math.cos(ang * Math.PI / 180), 1e-9) || 'longueur fausse';
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
    if (/Al-Kashi en deux temps/.test(T(q))) {
      // Recalcul indépendant par coordonnées : A(0,0), B(c,0), C(b cos A, b sin A)
      const c = g(/AB = (\d+)/); const b = g(/AC = (\d+)/); const ang = g(/= (\d+)\^\\circ/) * Math.PI / 180;
      const P = { A: [0, 0], B: [c, 0], C: [b * Math.cos(ang), b * Math.sin(ang)] };
      const V = /\\cos\\widehat\{ABC\}/.test(st) ? 'B' : 'C'; const W = V === 'B' ? 'C' : 'B';
      const u = [P.A[0] - P[V][0], P.A[1] - P[V][1]]; const w = [P[W][0] - P[V][0], P[W][1] - P[V][1]];
      const cosV = (u[0] * w[0] + u[1] * w[1]) / (Math.hypot(...u) * Math.hypot(...w));
      const r = String(A).match(/^(-?\d+)(?:\/(\d+))?$/);
      return (!!r && near(+r[1] / (r[2] ? +r[2] : 1), cosV)) || `cosinus attendu ${cosV}`;
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
  /** matrice symétrique d'une forme quadratique écrite en x, y (, z) */
  const symOfForm = (s) => {
    const v = /z/.test(s) ? ['x', 'y', 'z'] : ['x', 'y']; const n = v.length; const M = v.map(() => v.map(() => 0));
    for (const m of s.replace(/\s+/g, '').matchAll(/([+-]?)(\d*)([xyz])(\^2|[xyz])?/g)) {
      const k = (m[1] === '-' ? -1 : 1) * (m[2] ? +m[2] : 1); const i = v.indexOf(m[3]);
      if (m[4] === '^2' || m[4] === undefined) { if (m[4] === undefined) throw new Error('terme linéaire ' + m[0]); M[i][i] += k; }
      else { const j = v.indexOf(m[4]); M[i][j] += k / 2; M[j][i] += k / 2; }
    }
    return n ? M : M;
  };
  /** valeurs propres d'une matrice symétrique (Jacobi) */
  const symEig = (M0) => {
    const A = M0.map((r) => r.slice()); const n = A.length;
    for (let it = 0; it < 100; it++) {
      let p = 0, r = 1, mx = 0;
      for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) if (Math.abs(A[i][j]) > mx) { mx = Math.abs(A[i][j]); p = i; r = j; }
      if (mx < 1e-13) break;
      const th = 0.5 * Math.atan2(2 * A[p][r], A[r][r] - A[p][p]); const c = Math.cos(th), s = Math.sin(th);
      for (let k = 0; k < n; k++) { const x = A[k][p], y = A[k][r]; A[k][p] = c * x - s * y; A[k][r] = s * x + c * y; }
      for (let k = 0; k < n; k++) { const x = A[p][k], y = A[r][k]; A[p][k] = c * x - s * y; A[r][k] = s * x + c * y; }
    }
    return A.map((r, i) => r[i]);
  };
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

  const RIEpoly = (q) => {
    const m = q.statement.match(/\\int_\{(-?\d+)\}\^\{(-?\d+)\} \\left\((.*?)\\right\)/); const P = V.poly(m[3], 'x');
    const f = (x) => Object.entries(P).reduce((s, [d, c]) => s + c * x ** d, 0);
    return ok(close(simpson(f, +m[1], +m[2], 20), ((t) => (/^-?\d+\/\d+$/.test(t) ? t.split("/")[0] / t.split("/")[1] : val(t)))(rhs(q.answer)), 1e-9), 'intégrale polynôme');
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
      const m = expr.replace(/\\,\{\}\^\{t\}B$/, "B^{T}").match(/^(-?\d*)A(?:\^\{(-?\d+)\})?B(?:\^\{(T|2)\})?$/);
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
      const S = q.statement; const t = q.title;
      if (/Spectre d'une matrice symétrique/.test(t)) {
        const M = mats(S)[0]; const um = S.match(/u = \((-?\d+), (-?\d+), (-?\d+)\)/);
        let exp;
        if (um) {
          const u = um.slice(1).map(Number); const a = M[0][0] - u[0] * u[0];
          if (!M.every((r, i) => r.every((x, j) => x === (i === j ? a : 0) + u[i] * u[j]))) return 'S ≠ aI + u tu';
          exp = [a, a, a + u.reduce((s, x) => s + x * x, 0)].sort((x, y) => x - y);
        } else exp = symEig(M).sort((x, y) => x - y);
        const got = (q.answer.match(/\(([^()]*)\)\$?$/) || [])[1];
        if (!got) return 'réponse illisible';
        const g = got.split(';').map((x) => val(x));
        return ok(g.length === 3 && g.every((x, i) => close(x, exp[i])), 'spectre aI + u tu : attendu ' + exp);
      }
      const Q = symOfForm(S.match(/q\((?:x, y(?:, z)?)\) = (.*?)\$/)[1]);
      const ls = symEig(Q);
      if (/Extremum/.test(t)) return ok(close(val(rhs(q.answer)), /maximale/.test(S) ? Math.max(...ls) : Math.min(...ls)), 'extremum forme quadratique');
      const p = ls.filter((x) => x > 1e-9).length; const n = ls.filter((x) => x < -1e-9).length;
      const m = q.answer.match(/= \((\d), (\d)\)/); return ok(m && +m[1] === p && +m[2] === n, 'signature');
    },
    'L2-SYM/4': (q) => {
      const S = q.statement; const t = q.title;
      if (/Extremum/.test(t)) {
        const ls = symEig(symOfForm(S.match(/q\(x, y, z\) = (.*?)\$/)[1]));
        return ok(close(val(rhs(q.answer)), /maximale/.test(S) ? Math.max(...ls) : Math.min(...ls)), 'extremum sur la sphère');
      }
      const M = mats(S)[0];
      if (/Rotation de l'espace|Isométrie de l'espace/.test(t)) {
        const MtM = mul(M[0].map((_, j) => M.map((r) => r[j])), M);
        if (!MtM.every((r, i) => r.every((x, j) => close(x, i === j ? 1 : 0)))) return 'matrice non orthogonale';
        const d = det(M); const tr = M[0][0] + M[1][1] + M[2][2];
        if (/Rotation/.test(t)) return ok(d === 1 && close(val(rhs(q.answer)), (tr - 1) / 2), 'cos de la rotation');
        if (d !== -1) return 'det ≠ -1';
        const c = (tr + 1) / 2; // Tr = 2cos θ - 1
        if (close(c, 1)) return ok(/^La réflexion par rapport à un plan/.test(q.answer), 'réflexion attendue');
        const th = Math.acos(Math.max(-1, Math.min(1, c)));
        const am = q.answer.match(/antirotation d'angle \$\\pm(.*?)\$/);
        const fm = am && am[1].match(/^\\frac\{(\d*)\\pi\}\{(\d+)\}$/);
        const ang = fm ? (fm[1] ? +fm[1] : 1) * Math.PI / +fm[2] : am && am[1] === '\\pi' ? Math.PI : NaN;
        return ok(close(ang, th), 'antirotation d\'angle ' + th);
      }
      const tr = M[0][0] + M[1][1] + M[2][2];
      const c2 = M[0][0] * M[1][1] - M[0][1] * M[1][0] + M[0][0] * M[2][2] - M[0][2] * M[2][0] + M[1][1] * M[2][2] - M[1][2] * M[2][1];
      const d = det(M); const coefs = [1, -tr, c2, -d].filter((x) => x !== 0);
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
      if (/\\int_/.test(q.statement)) return RIEpoly(q);
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
      let sm;
      if ((sm = q.statement.match(/\\sum_\{k=1\}\^\{n\} \\frac\{1\}\{(\d*)n \+ (\d*)k\}/))) {
        const a = sm[1] ? +sm[1] : 1, b = sm[2] ? +sm[2] : 1; // somme -> intégrale de 1/(a + bx) sur [0 ; 1]
        const L = Math.log((a + b) / a) / b;
        const t = rhs(q.answer).replace(/\\left|\\right/g, '').replace(/\s+/g, '').replace(/\\frac\{(\d+)\}\{(\d+)\}/g, '($1/$2)')
          .replace(/\\ln\(/g, 'Math.log(').replace(/\\ln(\d+)/g, 'Math.log($1)').replace(/\)(?=[M(])/g, ')*');
        if (!/^[-\d()/*.+Mathlog]*$/.test(t)) return 'réponse illisible ' + t;
        return ok(close(Function('return ' + t)(), L), 'somme de Riemann 1/(an + bk)');
      }
      return RIEpoly(q);
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
      const m = q.statement.match(/\[0(?:,| ;) (\d+)\] \\times \[0(?:,| ;) (\d+)\]\} (.*?) \\, dx/); const a = +m[1], b = +m[2];
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
      const m = q.statement.match(/\((\d+)\\cos t, \d+\\sin t, (\d+)t\)\$ pour \$t \\in \[0(?:,| ;) (\d*)\\pi\]/); const a = +m[1], b = +m[2], T = (m[3] ? +m[3] : 1) * Math.PI;
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
      if ((m = q.statement.match(/y = (.*?)\$ en son sommet/))) { const P = V.poly(m[1], 'x'); return ok(close(2 * P[2], k), 'courbure parabole'); }
      return 'famille non reconnue';
    },
    'L2-CRB/4': (q) => {
      const m = q.statement.match(/\\gamma\(t\) = \((.*?), (.*?)\)\$/); const X = V.poly(m[1], 't'), Y = V.poly(m[2], 't');
      const x1 = X[1] || 0, x2 = 2 * (X[2] || 0), y1 = Y[1] || 0, y2 = 2 * (Y[2] || 0);
      return ok(close((x1 * y2 - y1 * x2) / Math.hypot(x1, y1) ** 3, val(rhs(q.answer))), 'courbure plane');
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
      const fv = (t) => { t = String(t).replace(/\$/g, '').trim(); return /^-?\d+\/\d+$/.test(t) ? t.split('/')[0] / t.split('/')[1] : val(t); };
      const S = q.statement; let m;
      if ((m = S.match(/Calculer \$P\(X > (\d+) \\mid X > (\d+)\)\$/))) return ok(close((1 - p) ** (m[1] - m[2]), fv(rhs(q.answer)), 1e-9), 'absence de mémoire');
      if (/Calculer \$E\(X\^2\)\$/.test(S)) return ok(close(E2, fv(rhs(q.answer)), 1e-6), 'moment d\'ordre 2');
      if (/Calculer \$E\(Y\)\$ et \$V\(Y\)\$/.test(S)) {
        if (!/Y = X - 1/.test(S)) return 'Y non reconnue';
        const am = q.answer.match(/^\$E\(Y\) = (.*?)\$ et \$V\(Y\) = (.*?)\$/) || [null, ...q.answer.replace(/^\(|\)$/g, '').split(';')];
        return ok(close(fv(am[1]), E - 1, 1e-6) && close(fv(am[2]), E2 - E * E, 1e-6), 'nombre d\'échecs : attendu ' + [E - 1, E2 - E * E]);
      }
      const exp = /V\(X\)/.test(q.answer) ? E2 - E * E : E; return ok(close(exp, fv(rhs(q.answer)), 1e-6), 'géométrique');
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
        return ok(ivComma(strip(q.answer)) === exp && +a < +b && +b < +c && +c < +d && +d < +e, 'topologie');
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
      if (/compacte \?/.test(S)) return 'skip';
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
        const ans = q.answer.replace(/y_/g, 'u_'); // variables duales notées y depuis l'audit
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
        if (/[uy]_\{(\d)\}\^\*/.test(q.answer)) {
          const i = +q.answer.match(/[uy]_\{(\d)\}\^\*/)[1] - 1;
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
      if ((m = S.match(/\\iint_\{\[0(?:,| ;) (\d+)\] \\times \[0(?:,| ;) (\d+)\]\} (.*?) \\, dx/))) {
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
        if (q.exactInput !== undefined && String(q.exactInput).replace(/\s+/g, '') !== `(${mu};${v})`) return 'saisie affine gauss ' + q.exactInput;
        return ok(mu === a * +m[1] + b && v === a * a * +m[2], 'affine gauss');
      }
      if ((m = S.match(/X \\sim \\mathcal\{N\}\((-?\d+), (\d+)\)\$ et \$Y \\sim \\mathcal\{N\}\((-?\d+), (\d+)\)\$ indépendantes .*loi de \$X ([+-]) Y\$/))) {
        const [mu, v] = law(q.answer); const sg = m[5] === '-' ? -1 : 1;
        if (q.exactInput !== undefined && String(q.exactInput).replace(/\s+/g, '') !== `(${mu};${v})`) return 'saisie somme gauss ' + q.exactInput;
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
  const intv = (s) => { const m = strip(s).match(/^([\[\]])(-?\d+) ; (-?\d+)([\[\]])$/); return m ? [m[1], +m[2], +m[3], m[4]] : null; };

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
      // argument affiché simplifié : nπ (p = 2), 2nπ/3 (p = 3), nπ/2 (p = 4), nπ/3 (p = 6)
      const ma = S.match(/\\cos\\left\((.*?)\\right\)/)[1];
      const p = { 'n\\pi': 2, '\\frac{2n\\pi}{3}': 3, '\\frac{n\\pi}{2}': 4, '\\frac{n\\pi}{3}': 6 }[ma];
      if (!p) return 'argument du cosinus non reconnu : ' + ma;
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
      m = S.match(/f\(x\) = (.*?)\$ sur \$\[(.*?) ; (.*?)\]\$/);
      const p = P(m[1]); const lo = ev(m[2]); const hi = ev(m[3]);
      if (!near(evalP(p, lo), evalP(p, hi))) return 'f(a) != f(b)';
      const c = -(p[1] || 0) / (2 * p[2]);
      return (near(ansVal(q), c) && c > lo && c < hi) || 'c attendu ' + c;
    }
    if (/Hypothèses du théorème de Rolle/.test(t)) {
      m = S.match(/\|(.*?)\|\$ sur \$\[(-?\d+) ; (-?\d+)\]/);
      const p = P(m[1]); const c = -(p[0] || 0); const a = +m[2]; const b = +m[3];
      return (Math.abs(a - c) === Math.abs(b - c) && /ne s'applique pas/.test(q.answer)) || 'Rolle |x - c|';
    }
    if (/^Théorème des accroissements finis$/.test(t)) {
      m = S.match(/f\(x\) = (.*?)\$ sur \$\[(-?\d+) ; (-?\d+)\]\$/);
      const p = P(m[1]); const a = +m[2]; const b = +m[3];
      const slope = (evalP(p, b) - evalP(p, a)) / (b - a);
      const c = (slope - (p[1] || 0)) / (2 * p[2]);
      return near(ansVal(q), c) || 'c attendu ' + c;
    }
    if (/Accroissements finis pour \$x\^3\$/.test(t)) {
      const k = +S.match(/\[0 ; (\d+)\]/)[1];
      return near(ansVal(q), k / Math.sqrt(3)) || 'c attendu ' + k / Math.sqrt(3);
    }
    if (/Accroissements finis pour \$1\/x\$/.test(t)) {
      m = S.match(/\[(\d+) ; (\d+)\]/);
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
      m = S.match(/f\(x\) = x\^(\d)\$ sur \$I = \[(-?\d+) ; (-?\d+)\]/);
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
      m = S.match(/f\(\[(-?\d+) ; (-?\d+)\]\)/);
      const a = +m[1]; const b = +m[2];
      let lo = Infinity; let hi = -Infinity; for (let i = 0; i <= 10000; i++) { const x = a + ((b - a) * i) / 10000; lo = Math.min(lo, x * x); hi = Math.max(hi, x * x); }
      return strip(q.answer) === `[${Math.round(lo)} ; ${Math.round(hi)}]` || 'image directe';
    }
    if (/Image réciproque d'un intervalle|valeurs négatives/.test(t)) {
      m = S.match(/f\^\{-1\}\(\[(-?\d+) ; (-?\d+)\]\)/);
      const c = +m[1]; const d = +m[2];
      const inSet = (x) => x * x >= c && x * x <= d;
      const parts = strip(q.answer).split(' \\cup ').map((s) => s.match(/\[(-?\d+) ; (-?\d+)\]/).slice(1).map(Number));
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
    const A = () => { const mm = S.match(/A = (\]|\[)(-?\d+) ; (-?\d+)(\]|\[)/); return mm; };
    if (/somme de parties/.test(t)) {
      const a = S.match(/A = \](-?\d+) ; (-?\d+)\]/); const b = S.match(/B = \[(-?\d+) ; (-?\d+)\[/);
      const sup = /supérieure/.test(t);
      const v = sup ? +a[2] + +b[2] : +a[1] + +b[1];
      return (+q.answer.match(/= (-?\d+)/)[1] === v && /pas atteint/.test(q.answer)) || 'sup/inf somme';
    }
    if (/Bornes de \$-A\$/.test(t)) {
      const a = S.match(/A = \](-?\d+) ; (-?\d+)\]/);
      const r = q.answer.match(/inf\(-A\) = (-?\d+)\$ et \$\\sup\(-A\) = (-?\d+)/);
      return (+r[1] === -a[2] && +r[2] === -a[1]) || 'bornes -A';
    }
    if (/lambda A/.test(t)) {
      const a = S.match(/A = \](-?\d+) ; (-?\d+)\]/); const l = +S.match(/et \$(-?\d+)A =/)[1];
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
      m = S.match(/I = ([\[\]])(-?\d+) ; (-?\d+)([\[\]])/); const a = +m[2]; const b = +m[3]; const lc = m[1] === '['; const rc = m[4] === ']';
      const exp = /borne supérieure/.test(S) ? (rc ? `$\\sup(I) = ${b}$ et $\\max(I) = ${b}$` : `$\\sup(I) = ${b}$ et $\\max(I)$ n'existe pas`) : (lc ? `$\\inf(I) = ${a}$ et $\\min(I) = ${a}$` : `$\\inf(I) = ${a}$ et $\\min(I)$ n'existe pas`);
      return (q.answer === exp && !q.options.some((o, i) => i !== q.correctIndex && o === exp)) || 'intervalle';
    }
    if (/emboîtés$|Réunion d'une famille/.test(t) && /bigcap|bigcup/.test(S)) {
      // test d'appartenance numérique
      const inner = S.match(/\\(bigcap|bigcup)_\{n \\ge 1\} \\left([\[\]])(.*?) ; (.*?)\\right([\[\]])\$/);
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
  const R2 = (x) => Math.sign(x) * Math.round(Math.abs(x) * 100) / 100;
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
        const tr = (-100 * t) / (100 + t); // forme exacte, sans erreur d'arrondi binaire
        const R2e = (x) => (Math.sign(x) * Math.round(Math.abs(x) * 100 + 1e-7)) / 100; // arrondi au plus proche, demi loin de 0
        if (/arrondi/.test(s) === (Math.abs(R2e(tr) - tr) < 1e-9)) return 'mention d\'arrondi incohérente';
        return close(evo(a), R2e(tr), 1e-6) || 'taux réciproque faux';
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
      case 'Valeur initiale après deux évolutions': {
        const [t1, t2] = verbs(s); const VA = num(s.match(/vaut alors \$(.*?)\$/)[1]);
        return close(num(a) * (1 + t1 / 100) * (1 + t2 / 100), VA, 1e-9) || 'valeur de départ fausse';
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
    return { run, evalExpr, code, checkOut, nv, repr, F, isF };
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
  /** Questions d'écriture : applique chaque option au programme de l'énoncé et compare à l'affichage annoncé. */
  const indentOf = (l) => l.match(/^ */)[0].length;
  const findLine = (ls, txt) => {
    const i = ls.findIndex((l) => l.trim() === txt);
    if (i < 0) throw new Error('ligne introuvable : ' + txt);
    return i;
  };
  const applyOption = (src, opt) => {
    const o = String(opt);
    if (src.includes('___')) {
      const m = o.match(/^`(.+)`$/) || o.match(/^\$(.+)\$$/);
      return src.replace('___', m ? m[1] : o);
    }
    const ls = src.split('\n');
    const loopAt = () => ls.findIndex((l) => /^\s*(for|while) /.test(l));
    const endOfBlock = (i) => { let j = i + 1; while (j < ls.length && ls[j].trim() && indentOf(ls[j]) > indentOf(ls[i])) j++; return j; };
    let m;
    if ((m = o.match(/^Remplacer `(.+?)` par `(.+)`$/))) {
      const i = findLine(ls, m[1]);
      ls[i] = ' '.repeat(indentOf(ls[i])) + m[2];
    } else if ((m = o.match(/^Placer `(.+)` (avant|après) la boucle$/))) {
      const [line] = ls.splice(findLine(ls, m[1]), 1);
      const i = loopAt();
      ls.splice(m[2] === 'avant' ? i : endOfBlock(i), 0, ' '.repeat(indentOf(ls[i])) + line.trim());
    } else if ((m = o.match(/^Décaler `(.+)` d'un niveau vers la gauche$/))) {
      const i = findLine(ls, m[1]);
      ls[i] = ls[i].slice(4);
    } else if ((m = o.match(/^Ajouter `(.+)` dans la boucle$/))) {
      const i = loopAt();
      ls.splice(i + 1, 0, ' '.repeat(indentOf(ls[i]) + 4) + m[1]);
    } else throw new Error('option illisible : ' + o);
    return ls.join('\n');
  };
  const writeCheck = (q) => {
    const src = PY.code(q.statement);
    const m = String(q.statement).match(/doit afficher (\$[^$]*\$|« .*? »)/);
    if (!m) return 'affichage attendu introuvable';
    const gives = (c) => { try { return PY.checkOut(m[1], PY.run(c).out) === true; } catch (e) { return false; } };
    if (!src.includes('___') && gives(src)) return 'le programme à corriger donne déjà le bon affichage';
    let good;
    try { good = gives(applyOption(src, q.answer)); } catch (e) { return String(e.message); }
    if (!good) return 'la réponse ' + q.answer + ' ne donne pas ' + m[1];
    const opts = q.options || (q.mcq && q.mcq.options) || [];
    const right = q.mcq && q.mcq.answer !== undefined ? q.mcq.answer : q.answer;
    for (const o of opts) {
      if (o === right) continue;
      if (gives(applyOption(src, o))) return 'distracteur également correct : ' + o;
    }
    return true;
  };
  const typeCheck = (q) => {
    const x = PY.run(PY.code(q.statement)).globals.x;
    const t = typeof x === 'boolean' ? 'bool' : typeof x === 'string' ? 'str' : PY.isF(x) ? 'float' : 'int';
    return q.answer === '`' + t + '`' || `type ${t}, réponse ${q.answer}`;
  };
  const check2S4 = (q) => {
    const st = String(q.statement);
    if (!st.includes('```python')) return (q.options || []).includes(q.answer) || 'réponse absente des options';
    if (q.title === 'Déterminer un type') return typeCheck(q);
    return /___|correction faut-il/.test(st) ? writeCheck(q) : runCheck(q);
  };
  return { '2S4/1': check2S4, '2S4/2': check2S4, '2S4/3': check2S4, '2S4/4': check2S4 };
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
  /** Programmes à compléter : on substitue chaque proposition au trou, on exécute, et une seule doit donner le résultat attendu. */
  const fillCheck = (q) => {
    const PY = V.py;
    const s = q.statement;
    const code = PY.code(s);
    if (!code.includes('_____')) return 'trou absent du programme';
    const opts = q.options.map((o) => o.replace(/`/g, ''));
    const output = (o, hooks) => { try { return PY.run(code.replace('_____', o), hooks).out.join('\n'); } catch (e) { return null; } };
    const num = (re) => { const m = s.match(re); if (!m) throw new Error('énoncé non reconnu : ' + re); return m; };
    let right;
    if (/^Compléter (une liste|une construction)/.test(q.title)) {
      const want = '[' + num(/affiche la liste `\[(.*?)\]`/)[1] + ']';
      right = (o) => output(o) === want;
    } else if (q.title === 'Traduire un algorithme en Python' || q.title === 'Compléter le nombre de tours') {
      const nat = q.title.startsWith('Traduire');
      const m = nat ? num(/u ← (-?\d+)\nPour k allant de 1 à (\d+)\n {4}u ← (\d+) × u ([+-]) (\d+)/) : num(/u_0 = (-?\d+)\$ et \$u_\{n\+1\} = (\d+)u_n ([+-]) (\d+)\$.*affiche \$u_\{(\d+)\}\$/s);
      const [u0, n, a, sg, b] = nat ? [+m[1], +m[2], +m[3], m[4], +m[5]] : [+m[1], +m[5], +m[2], m[3], +m[4]];
      let u = u0;
      for (let k = 0; k < n; k++) u = a * u + (sg === '+' ? b : -b);
      right = (o) => output(o) === String(u);
    } else if (q.title === 'Compléter un accumulateur') {
      const m = num(/u_0 = (\d+)\$ et \$u_\{n\+1\} = (?:(\d+)u_n|u_n \+ (\d+))\$.*u_\{(\d+)\}\$\./s);
      let u = +m[1]; let t = 0;
      for (let k = 0; k <= +m[4]; k++) { t += u; u = m[2] ? +m[2] * u : u + +m[3]; }
      right = (o) => output(o) === String(t);
    } else if (q.title === 'Compléter la condition d\'un seuil') {
      const m = num(/u_0 = (\d+)\$ et \$u_\{n\+1\} = (?:(\d+)u_n|\\frac\{u_n\}\{2\})\$.*tel que \$u_n (>|\\ge|<|\\le) (\d+)\$/s);
      const A = +m[4]; const stop = { '>': (x) => x > A, '\\ge': (x) => x >= A, '<': (x) => x < A, '\\le': (x) => x <= A }[m[3]];
      let u = +m[1]; let n = 0;
      while (!stop(u)) { u = m[2] ? +m[2] * u : u / 2; n++; }
      right = (o) => output(o) === String(n);
    } else if (q.title === 'Traduire un algorithme de seuil') {
      const m = num(/u ← (\d+)\nn ← 0\nTant que u ([<>]) (\d+)\n {4}u ← (?:(\d+) × u|u \/ 2)/);
      const A = +m[3]; const go = m[2] === '<' ? (x) => x < A : (x) => x > A;
      let u = +m[1]; let n = 0;
      while (go(u)) { u = m[4] ? +m[4] * u : u / 2; n++; }
      right = (o) => output(o) === String(n);
    } else if (q.title === 'Compléter une évolution en pourcentage') {
      const m = num(/vaut (\d+) au départ et (augmente|diminue) de \$(\d+)\\,\\%\$.*à (\d+)\./s);
      const c = (m[2] === 'augmente' ? 100 + +m[3] : 100 - +m[3]) / 100; const A = +m[4];
      let u = +m[1]; let n = 0;
      while (m[2] === 'augmente' ? u < A : u > A) { u *= c; n++; }
      right = (o) => { const r = output(o); return r !== null && Math.abs(+r - n) < 1e-9; };
    } else if (q.title === 'Compléter un balayage') {
      const m = num(/\\sqrt(\[3\])?\{(\d+)\}\$ entre deux multiples consécutifs de \$([\d{},]+)\$/);
      const p = parseFloat(m[3].replace('{,}', '.')); const e = m[1] ? 3 : 2;
      let x = 0; while (x ** e < +m[2]) x += p;
      right = (o) => { const r = output(o); return r !== null && r.split(' ').map(Number).join() === [x - p, x].join(); };
    } else if (q.title === 'Compléter une simulation' || q.title === 'Compléter un test sur deux dés') {
      const two = /randint[^\n]*\n[^\n]*randint/.test(code);
      const F = +code.match(/randint\(1, (\d+)\)/)[1];
      const table = (o) => {
        const res = [];
        for (let a = 1; a <= F; a++) for (let b = 1; b <= (two ? F : 1); b++) {
          const seq = two ? [a, b] : [a]; let i = 0;
          const block = code.replace('_____', o).split('\n').filter((l) => !/^print|^from/.test(l)).join('\n') + '\nprint(experience())';
          try { res.push(PY.run(block, { randint: () => seq[i++] }).out[0] === '1' ? 1 : 0); } catch (e) { return null; }
        }
        return res;
      };
      if (q.title === 'Compléter une simulation') {
        const want = V.val(num(/probabilité \$(.*?)\$/)[1]);
        right = (o) => { const t = table(o); return t !== null && Math.abs(t.reduce((x, y) => x + y, 0) / t.length - want) < 1e-9; };
      } else {
        const sum = s.match(/somme des deux résultats vaut (\d+)/); const least = s.match(/au moins égale à (\d+)/);
        const ref = sum ? (a, b) => a + b === +sum[1] : least ? (a, b) => a + b >= +least[1] : /sont égaux/.test(s) ? (a, b) => a === b : (a) => a % 2 === 0;
        const want = []; for (let a = 1; a <= F; a++) for (let b = 1; b <= F; b++) want.push(ref(a, b) ? 1 : 0);
        right = (o) => { const t = table(o); return t !== null && t.join() === want.join(); };
      }
    } else return 'famille de programme à compléter inconnue : ' + q.title;
    const ok = opts.filter(right);
    if (ok.length !== 1) return `${ok.length} proposition(s) correcte(s) : ${ok.join(' | ')}`;
    return ok[0] === opts[q.correctIndex] || `la bonne proposition est ${ok[0]}, marquée ${opts[q.correctIndex]}`;
  };
  const withFill = (f) => (q) => (/^(Compléter|Traduire)/.test(q.title) ? fillCheck(q) : f(q));
  return { '1S3/1': withFill(runCheck), '1S3/2': withFill(runCheck), '1S3/3': withFill(runCheck), '1S3/4': withFill(any) };
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
    if (/[Ll]imite/.test(q.title)) {
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

// ---- recalculs 1TC1-1TC3 (Première, tronc commun : pourcentages, information chiffrée, probabilités conditionnelles) ----
{
// Chaque famille est reconnue par son titre ; l'énoncé (forme QCM d'origine) est relu et la réponse recalculée.
// Les intitulés des populations des tableaux croisés sont lus dans le registre _1TC2_TAB (libellés seulement).
Object.assign(VERIFIERS, ((V) => {
  const num = (s) => {
    let t = String(s).replace(/\$/g, '').replace(/\\,\\%/g, '').replace(/\\,/g, '').replace(/\s+/g, '').replace(/^\+/, '');
    const m = t.match(/^(-?)\\[dt]?frac\{(\d+)\}\{(\d+)\}$/);
    if (m) return (m[1] ? -1 : 1) * m[2] / m[3];
    t = t.replace('{,}', '.');
    return /^-?\d+(\.\d+)?$/.test(t) ? parseFloat(t) : NaN;
  };
  const close = (a, b, e = 1e-9) => Number.isFinite(a) && Math.abs(a - b) <= e * Math.max(1, Math.abs(b));
  const grab = (s, re) => { const m = s.match(re); if (!m) throw new Error('énoncé non reconnu : ' + re); return m; };
  const pcts = (s) => [...s.matchAll(/\$([+-]?[\d{},\\]+?)\\,\\%\$/g)].map((m) => num(m[1]));
  const verbs = (s) => [...s.matchAll(/(augmente|baisse|augmenté|baissé) de \$(.*?)\\,\\%\$/g)].map((m) => (/^augment/.test(m[1]) ? 1 : -1) * num(m[2]));
  /** taux affiché arrondi au plus à 3 décimales : tolérance d'arrondi */
  const okR = (a, v, what) => (Number.isFinite(a) && Math.abs(a - v) <= 0.0051) || `${what} : attendu ${v}, lu ${a}`;
  const okX = (a, v, what) => close(a, v, 1e-9) || `${what} : attendu ${v}, lu ${a}`;
  /** distracteurs : aucun égal à la réponse (valeur numérique) */
  const noDup = (q) => {
    const a = num(q.answer); if (!Number.isFinite(a) || !q.options) return true;
    const bad = q.options.filter((o) => o !== q.answer && close(num(o), a, 1e-12));
    return bad.length ? 'distracteur égal à la réponse : ' + bad[0] : true;
  };
  const both = (r, q) => (r === true ? noDup(q) : r);
  /** lignes d'un tableau markdown -> cellules (sans $) */
  const rows = (s) => s.split('\n').filter((l) => /^\|/.test(l) && !/^\|:?-/.test(l)).map((l) => l.split('|').slice(1, -1).map((c) => c.trim().replace(/\$/g, '')));
  const PVG = window.MathsPremiereVoiesGenerators || {};
  const TAB = PVG._1TC2_TAB || [];
  /** effectifs du tableau croisé 2x2 et résolution des libellés « des X » */
  const cross = (s) => {
    const R = rows(s); const C = TAB.find((c) => R[0] && R[0][1] === c.cols[0] && R[1][0] === c.rows[0]);
    if (!C) throw new Error('contexte de tableau non reconnu');
    const n = [[num(R[1][1]), num(R[1][2])], [num(R[2][1]), num(R[2][2])]];
    return { C, n };
  };
  const lab = (C, x) => {
    if (x === C.u) return { k: 'all' };
    for (let i = 0; i < 2; i++) { if (C.r[i] === x) return { k: 'r', i }; if (C.c[i] === x) return { k: 'c', i }; }
    throw new Error('libellé inconnu : ' + x);
  };
  const ctxOf = (s) => { const C = TAB.find((c) => s.includes(c.pop)); if (!C) throw new Error('contexte non reconnu'); return C; };
  /** fréquence (en %) des X parmi les Y à partir d'un tableau n[i][j] (i = ligne, j = colonne) */
  const freq = (n, X, Y) => {
    const tot = (L) => (L.k === 'all' ? n[0][0] + n[0][1] + n[1][0] + n[1][1] : L.k === 'r' ? n[L.i][0] + n[L.i][1] : n[0][L.i] + n[1][L.i]);
    let inter;
    if (Y.k === 'all') inter = tot(X);
    else if (X.k === Y.k) throw new Error('fréquence non croisée');
    else inter = X.k === 'r' ? n[X.i][Y.i] : n[Y.i][X.i];
    return 100 * inter / tot(Y);
  };
  const line = (s) => { const m = grab(s, /y = (-?[\d{},]+)x ([+-]) ([\d{},]+)/); return { a: num(m[1]), b: (m[2] === '-' ? -1 : 1) * num(m[3]) }; };
  const y0 = (s) => +grab(s, /\(\$x = 0\$ en (\d{4})\)/)[1];
  const serie = (s) => {
    const R = rows(s); const xr = R.find((r) => /^Rang/.test(r[0])) || R[0]; const yr = R.find((r) => r[0] === 'y') || R[1];
    return { xs: xr.slice(1).map(num), ys: yr.slice(1).map((v) => (v === 'm' ? null : num(v))) };
  };
  const mean = (a) => a.reduce((s, v) => s + v, 0) / a.length;

  const t1 = (q) => {
    const s = q.statement; const a = num(q.answer);
    switch (q.title) {
      case 'Coefficient multiplicateur': return okX(a, 1 + verbs(s)[0] / 100, 'coefficient');
      case 'Pourcentage d\'une quantité': { const m = grab(s, /Calculer \$(.*?)\\,\\%\$ de \$(.*?)\$/); return okX(a, num(m[1]) * num(m[2]) / 100, 'pourcentage'); }
      case 'Proportion d\'une proportion': { const [p1, p2] = pcts(s); return okX(a, p1 * p2 / 100, 'proportion'); }
      case 'Retrouver la valeur initiale': { const t = (/hausse/.test(s) ? 1 : -1) * pcts(s)[0]; const V1 = num(grab(s, /vaut \$(.*?)\$/)[1]); return okR(a, V1 / (1 + t / 100), 'valeur initiale'); }
      case 'Taux d\'évolution entre deux valeurs': { const m = grab(s, /passe de \$(.*?)\$ à \$(.*?)\$/); return okR(a, 100 * (num(m[2]) - num(m[1])) / num(m[1]), 'taux'); }
      case 'Valeur après évolution': return okR(a, num(grab(s, /valait \$(.*?)\$/)[1]) * (1 + verbs(s)[0] / 100), 'valeur finale');
      case 'Évolutions successives': { const [u, v] = verbs(s); return okR(a, 100 * ((1 + u / 100) * (1 + v / 100) - 1), 'taux global'); }
      case 'Évolution réciproque': return okR(a, 100 * (1 / (1 + verbs(s)[0] / 100) - 1), 'taux réciproque');
      case 'Évolution répétée': { const n = +grab(s, /pendant \$(\d+)\$ ans/)[1]; return okR(a, 100 * ((1 + verbs(s)[0] / 100) ** n - 1), 'taux global'); }
      case 'Trois évolutions successives': { const [u, v, w] = pcts(s); return okX(a, 100 * ((1 + u / 100) * (1 + v / 100) * (1 + w / 100) - 1), 'taux global'); }
      case 'Évolution à compléter': { const u = verbs(s)[0]; const g = pcts(s)[1]; return okR(a, 100 * ((1 + g / 100) / (1 + u / 100) - 1), 'taux à compléter'); }
      case 'Proportion dans une sous-population': { const [p1, p2] = pcts(s); return okR(a, 100 * p2 / p1, 'proportion'); }
      default: return undefined;
    }
  };

  const t2 = (q) => {
    const s = q.statement; const a = num(q.answer);
    switch (q.title) {
      case 'Fréquence conditionnelle':
      case 'Fréquence parmi une colonne':
      case 'Fréquence marginale': {
        const { C, n } = cross(s);
        const m = grab(s, /fréquence des (.+?) (?:parmi les|dans l'ensemble des) (.+?) \?/);
        return okR(a, freq(n, lab(C, m[1]), lab(C, m[2])), 'fréquence');
      }
      case 'Point moyen d\'un nuage': {
        const R = rows(s); const xs = R[0].slice(1).map(num); const ys = R[1].slice(1).map(num);
        const m = grab(q.answer, /G\((.*?) ; (.*?)\)/);
        return (close(num(m[1]), mean(xs)) && close(num(m[2]), mean(ys))) || `point moyen : attendu (${mean(xs)} ; ${mean(ys)})`;
      }
      case 'Interpolation ou extrapolation ?': {
        const m = grab(s, /de (\d{4}) à (\d{4})\. .*? en (\d{4})\./);
        const inside = +m[3] >= +m[1] && +m[3] <= +m[2];
        return (inside ? /^Une interpolation, car/ : /^Une extrapolation, car .* en dehors/).test(q.answer) || 'nature de l\'estimation fausse';
      }
      case 'Interpréter un ajustement affine': {
        const { a: k } = line(s);
        const ok = q.answer.includes(k > 0 ? 'augmente' : 'diminue') && q.answer.includes(`$${String(Math.abs(k)).replace('.', '{,}')}$`) && !/\\%/.test(q.answer) && /par an/.test(q.answer);
        return ok || 'interprétation du coefficient directeur fausse';
      }
      case 'Estimation par interpolation': {
        const { a: k, b } = line(s); const Y = +[...s.matchAll(/en (\d{4})\./g)].pop()[1];
        return okX(a, k * (Y - y0(s)) + b, 'estimation');
      }
      case 'Valeur manquante et point moyen': {
        const { ys } = serie(s); const yg = num(grab(s, /G\(.*? ; (.*?)\)/)[1]);
        return okX(a, ys.length * yg - ys.reduce((t, v) => t + (v || 0), 0), 'valeur manquante');
      }
      case 'Droite passant par le point moyen': {
        const { xs, ys } = serie(s); const k = num(grab(s, /coefficient directeur \$(.*?)\$/)[1]);
        return okR(a, mean(ys) - k * mean(xs), 'ordonnée à l\'origine');
      }
      case 'Ajustement et donnée manquante': {
        const { xs, ys } = serie(s); const { a: k, b } = line(s);
        return okR(a, ys.length * (k * mean(xs) + b) - ys.reduce((t, v) => t + (v || 0), 0), 'donnée manquante');
      }
      case 'Seuil par extrapolation': {
        const { a: k, b } = line(s); const up = /dépassera/.test(s);
        const S = num(grab(s, /(?:dépassera-t-(?:il|elle)|inférieure? à) \$(.*?)\$/)[1]);
        let x = 0; while (x < 500 && !(up ? k * x + b > S + 1e-12 : k * x + b < S - 1e-12)) x++;
        return okX(a, y0(s) + x, 'année seuil');
      }
      case 'Retourner une fréquence conditionnelle': {
        const C = ctxOf(s); const N = num(grab(s, /porte sur \$(.*?)\$/)[1]); const [p, f1, f2] = pcts(s);
        const n1 = N * p / 100; const n = [[n1 * f1 / 100, n1 * (100 - f1) / 100], [(N - n1) * f2 / 100, (N - n1) * (100 - f2) / 100]];
        const m = grab(s, /fréquence des (.+?) parmi les (.+?) \?/);
        return okR(a, freq(n, lab(C, m[1]), lab(C, m[2])), 'fréquence');
      }
      case 'Reconstituer un tableau croisé': {
        const C = ctxOf(s); const d = [...s.matchAll(/\$([\d\\,]+)\$ sont des/g)].map((m) => num(m[1]));
        const N = num(grab(s, /porte sur \$(.*?)\$/)[1]); const p = pcts(s)[0];
        const [n1, k1] = d; const n00 = k1 * p / 100;
        const n = [[n00, n1 - n00], [k1 - n00, N - n1 - k1 + n00]];
        const m = grab(s, /fréquence des (.+?) parmi les (.+?) \?/);
        return okR(a, freq(n, lab(C, m[1]), lab(C, m[2])), 'fréquence');
      }
      case 'Prévision et valeur observée': {
        const { a: k, b } = line(s); const m = grab(s, /En (\d{4}), la valeur observée est \$(.*?)\$/);
        const yh = k * (+m[1] - y0(s)) + b; const yo = num(m[2]);
        return okR(a, 100 * (yh - yo) / yo, 'écart relatif');
      }
      default: return undefined;
    }
  };

  // ---- 1TC3 ----
  const C3 = (n, k) => { let r = 1; for (let i = 1; i <= k; i++) r = r * (n - k + i) / i; return r; };
  /** probabilité de succès d'une épreuve de Bernoulli lue dans l'énoncé */
  const pBer = (s) => {
    let m = s.match(/comporte \$(\d+)\$ secteurs/); if (m) return 1 / +m[1];
    if (/dé équilibré à six faces/.test(s)) return 1 / 6;
    if (/pièce de monnaie équilibrée/.test(s)) return 1 / 2;
    m = grab(s, /probabilité de \$(.*?)\$/); return num(m[1]);
  };
  const arbre = (s) => { const [a, b, c] = pcts(s); return { a: a / 100, b: b / 100, c: c / 100 }; };
  const pv = (s, k) => { const m = s.match(new RegExp('\\$' + k + ' = (.*?)\\$')); return m ? num(m[1]) : NaN; };
  const inProb = (q) => {
    if (!q.options) return true;
    const bad = q.options.filter((o) => { const v = num(o); return Number.isFinite(v) && !(v > 0 && v < 1); });
    return bad.length ? 'distracteur hors de ]0 ; 1[ : ' + bad[0] : true;
  };
  const t3 = (q) => {
    const s = q.statement; const a = num(q.answer);
    const P = (r) => { const x = r === true ? inProb(q) : r; return x; };
    switch (q.title) {
      case 'Choisir la bonne notation': {
        const m = grab(s, /la probabilité (.+?) \?$/)[1];
        const C = (PVG._1TC3_ARB || []).find((c) => s.includes(c.pop)); if (!C) return 'contexte non reconnu';
        const k = [C.qAB, C.qBA, C.qAsB].indexOf(m); if (k < 0) return 'phrase non reconnue';
        return q.answer === ['$P(A \\cap B)$', '$P_A(B)$', '$P_B(A)$'][k] || 'notation fausse';
      }
      case 'Probabilité d\'une intersection': { const { a: x, b } = arbre(s); return P(okX(a, x * b, 'P(A∩B)')); }
      case 'Branches complémentaires': {
        const { a: x, b, c } = arbre(s); const w = grab(s, /Déterminer \$(.*?)\$\./)[1];
        const v = { 'P(\\overline{A})': 1 - x, 'P_A(\\overline{B})': 1 - b, 'P_{\\overline{A}}(\\overline{B})': 1 - c, 'P_{\\overline{A}}(B)': c }[w];
        return v === undefined ? 'skip' : P(okX(a, v, w));
      }
      case 'Deux épreuves indépendantes':
      case 'Trois épreuves indépendantes': {
        const p = pBer(s); const n = q.title[0] === 'D' ? 2 : 3;
        let v;
        if (/aucune|ne soit réalisé/.test(s)) v = (1 - p) ** n;
        else if (/aux deux|aux trois|à chacune/.test(s)) v = p ** n;
        else return 'skip';
        return P(okX(a, v, 'probabilité'));
      }
      case 'Calcul de $P_A(B)$': return P(okX(a, pv(s, 'P\\(A \\\\cap B\\)') / pv(s, 'P\\(A\\)'), 'P_A(B)'));
      case 'Probabilité conditionnelle et tableau': {
        const { n } = cross(s); const w = grab(s, /Calculer \$(.*?)\$\./)[1];
        const v = { 'P_A(B)': n[0][0] / (n[0][0] + n[0][1]), 'P_B(A)': n[0][0] / (n[0][0] + n[1][0]), 'P(A \\cap B)': n[0][0] / (n[0][0] + n[0][1] + n[1][0] + n[1][1]) }[w];
        return v === undefined ? 'skip' : P(okX(a, v, w));
      }
      case 'Formule des probabilités totales': { const { a: x, b, c } = arbre(s); return P(okX(a, x * b + (1 - x) * c, 'P(B)')); }
      case 'Retourner un arbre': { const { a: x, b, c } = arbre(s); return P(okX(a, x * b / (x * b + (1 - x) * c), 'P_B(A)')); }
      case 'Événements indépendants ?': {
        const pa = pv(s, 'P\\(A\\)'); const pb = pv(s, 'P\\(B\\)'); const pab = pv(s, 'P\\(A \\\\cap B\\)');
        const ind = close(pa * pb, pab, 1e-12);
        return (ind ? /^Oui, car \$P\(A\) \\times P\(B\) = /.test(q.answer) : /^Non, car \$P\(A\) \\times P\(B\) \\neq/.test(q.answer)) || 'conclusion sur l\'indépendance fausse';
      }
      case 'Au moins un succès': { const p = pBer(s); const n = +grab(s, /On répète \$(\d+)\$ fois/)[1]; return P(okX(a, 1 - (1 - p) ** n, 'au moins un succès')); }
      case 'Exactement $k$ succès sur trois épreuves':
      case 'Exactement $k$ succès sur quatre épreuves': {
        const p = pBer(s); const n = +grab(s, /On répète \$(\d+)\$ fois/)[1];
        const k = { une: 1, deux: 2, trois: 3 }[grab(s, /exactement (une|deux|trois) fois/)[1]];
        return P(okX(a, C3(n, k) * p ** k * (1 - p) ** (n - k), 'exactement k succès'));
      }
      case 'Nombre minimal de répétitions': {
        const p = pBer(s); const S = num(grab(s, /supérieure ou égale à \$(.*?)\$/)[1]);
        let n = 1; while (n < 200 && 1 - (1 - p) ** n < S - 1e-12) n++;
        return okX(a, n, 'nombre de répétitions');
      }
      case 'Test de dépistage': {
        const [m, se, sp] = pcts(s); const VP = m * se; const FP = (100 - m) * (100 - sp);
        const v = /ne soit pas malade/.test(s) ? FP / (VP + FP) : VP / (VP + FP);
        return P(okX(a, v, 'probabilité a posteriori'));
      }
      case 'Retrouver une probabilité conditionnelle': {
        const pa = pv(s, 'P\\(A\\)'); const pab = pv(s, 'P_A\\(B\\)'); const pb = pv(s, 'P\\(B\\)');
        return P(okX(a, (pb - pa * pab) / (1 - pa), 'P_Ā(B)'));
      }
      default: return undefined;
    }
  };
  const wrap = (f) => (q) => { const r = f(q); return r === undefined ? 'famille 1TC non reconnue : ' + q.title : both(r, q); };
  return { '1TC1': wrap(t1), '1TC2': wrap(t2), '1TC3': wrap(t3) };
})(V));
}

// ---- recalculs 1T5, 1T6, 1T7 (Première technologique) ----
{
Object.assign(VERIFIERS, ((V) => {
  const NUM = '-?\\d+(?:\\{,\\}\\d+)?';
  const num = (s) => parseFloat(String(s).replace(/\{,\}/g, '.').replace(/\\,/g, ''));
  const near = (a, b) => Math.abs(a - b) < 1e-6 * Math.max(1, Math.abs(a), Math.abs(b));
  const strip = (s) => String(s).replace(/^\$|\$$/g, '');
  /** coefficients {deg: c} -> fonction */
  const pf = (P) => (x) => Object.entries(P).reduce((s, [d, c]) => s + c * x ** +d, 0);
  const der = (P) => { const o = {}; for (const [d, c] of Object.entries(P)) if (+d > 0) o[+d - 1] = (o[+d - 1] || 0) + c * +d; return o; };
  const polyEq = (P, Q) => { const ks = new Set([...Object.keys(P), ...Object.keys(Q)]); return [...ks].every((k) => near(P[k] || 0, Q[k] || 0)); };
  const getPoly = (st, name, v = 'x') => { const m = st.match(new RegExp(`${name}\\(${v}\\) = ([^$]+)\\$`)); return m ? V.poly(m[1], v) : null; };
  /** valeur finale d'une option : membre de droite du dernier « = », unités retirées */
  const optVal = (o) => { let s = strip(String(o).replace(/\$ m\/s$|\s*m\/s$/, '').replace(/\$$/, '').replace(/^\$/, '')); const i = s.lastIndexOf('='); if (i >= 0) s = s.slice(i + 1); return V.val(s.trim()); };
  /** droite « y = mx + p » -> [m, p] */
  const lineOf = (o) => { const m = strip(o).match(/y = (.+)$/); if (!m) return null; const P = V.poly(m[1]); return P ? [P[1] || 0, P[0] || 0] : null; };
  const checkVal = (q, expected) => {
    const v = /^\d{4}$/.test(String(q.answer).trim()) ? +q.answer : optVal(q.answer);
    if (!near(v, expected)) return `attendu ${expected}, réponse ${q.answer}`;
    const dup = (q.options || []).find((o) => o !== q.answer && near(/^\d{4}$/.test(String(o).trim()) ? +o : optVal(o), expected));
    return dup ? 'distracteur égal à la réponse : ' + dup : true;
  };
  const checkLine = (q, m, p) => {
    const L = lineOf(q.answer);
    if (!L || !near(L[0], m) || !near(L[1], p)) return `attendu y = ${m}x + ${p}, réponse ${q.answer}`;
    const dup = (q.options || []).find((o) => { if (o === q.answer) return false; const K = lineOf(o); return K && near(K[0], m) && near(K[1], p); });
    return dup ? 'distracteur égal à la réponse : ' + dup : true;
  };
  const checkPair = (q, a, b) => {
    const m = strip(q.answer).match(new RegExp(`\\((${NUM}) ; (${NUM})\\)`));
    if (!m || !near(num(m[1]), a) || !near(num(m[2]), b)) return `attendu (${a} ; ${b}), réponse ${q.answer}`;
    return true;
  };
  /** lignes d'un tableau Markdown : [[cellules]] */
  const rows = (st) => st.split('\n').filter((l) => /^\|/.test(l) && !/^\|:?-/.test(l)).map((l) => l.split('|').slice(1, -1).map((c) => c.trim()));
  const cells = (r) => r.slice(1).map((c) => (c === '$m$' || c === '$p$' ? null : num(strip(c))));
  const mean = (a) => a.reduce((s, x) => s + x, 0) / a.length;
  const fnum = (st, re) => { const m = st.match(re); return m ? num(m[1]) : NaN; };

  // ------------------------------------------------------------------ 1T5
  const T5 = (q) => {
    const st = q.statement; const t = q.title;
    const f = getPoly(st, 'f');
    if (t === 'Dérivée d\'une fonction polynôme') {
      const A = V.poly(strip(q.answer).replace(/^f'\(x\) = /, ''));
      return A && polyEq(A, der(f)) ? true : `dérivée attendue ${JSON.stringify(der(f))}, réponse ${q.answer}`;
    }
    if (t === 'Nombre dérivé en un point') return checkVal(q, pf(der(f))(fnum(st, /Calculer \$f'\((-?\d+)\)\$/)));
    if (t === 'Nombre dérivé et tangente') {
      const A = st.match(new RegExp(`A\\((${NUM}) ; (${NUM})\\)`)); const B = st.match(new RegExp(`B\\((${NUM}) ; (${NUM})\\)`));
      return checkVal(q, (num(B[2]) - num(A[2])) / (num(B[1]) - num(A[1])));
    }
    if (t === 'Équation réduite d\'une tangente' || t === 'Tangente à une courbe de degré 3') {
      const a = fnum(st, /point d'abscisse \$(-?\d+)\$/); const m = pf(der(f))(a);
      return checkLine(q, m, pf(f)(a) - m * a);
    }
    if (t === 'Vitesse instantanée') {
      const d = getPoly(st, 'd', 't'); const t0 = fnum(st, /l'instant \$t = (\d+)\$/);
      return checkVal(q, pf(der(d))(t0));
    }
    if (t === 'Sens de variation et signe de la dérivée') {
      const s = -f[1] / (2 * f[2]); const up = /croissante \?/.test(st) && !/décroissante \?/.test(st);
      const inc = f[2] > 0 ? `[${s} ; +\\infty[` : `]-\\infty ; ${s}]`; const dec = f[2] > 0 ? `]-\\infty ; ${s}]` : `[${s} ; +\\infty[`;
      return strip(q.answer) === (up ? inc : dec) ? true : `attendu ${up ? inc : dec}, réponse ${q.answer}`;
    }
    if (t === 'Extremum d\'une fonction du second degré') return checkVal(q, pf(f)(-f[1] / (2 * f[2])));
    if (t === 'Extremum local d\'un polynôme de degré 3' || t === 'Bénéfice maximal') {
      const P = f || getPoly(st, 'B'); const D = der(P); const a = D[2]; const b = D[1] || 0; const c = D[0] || 0;
      const disc = b * b - 4 * a * c; if (disc <= 0) return 'dérivée sans deux racines';
      const r = [(-b - Math.sqrt(disc)) / (2 * a), (-b + Math.sqrt(disc)) / (2 * a)].sort((u, v) => u - v);
      // l'expression factorisée admise doit être égale à la dérivée
      const fm = st.match(/'\(x\) = (-?\d*)((?:\(x [+-] \d+\)|x)+)\$/);
      if (fm) {
        const k = fm[1] === '' ? 1 : fm[1] === '-' ? -1 : +fm[1];
        const roots = [...fm[2].matchAll(/\(x ([+-]) (\d+)\)|x/g)].map((m) => (m[1] ? (m[1] === '-' ? +m[2] : -m[2]) : 0)).sort((u, v) => u - v);
        if (!near(k, a) || !near(roots[0], r[0]) || !near(roots[1], r[1])) return 'forme factorisée de la dérivée incorrecte';
      }
      if (t === 'Bénéfice maximal') {
        const L = fnum(st, /x \\leqslant (\d+)\$/); const cand = [0, L, ...r.filter((x) => x > 0 && x < L)];
        return checkVal(q, Math.max(...cand.map(pf(P))));
      }
      const wantMax = /maximum local/.test(st);
      const xmax = a > 0 ? r[0] : r[1]; const xmin = a > 0 ? r[1] : r[0];
      return checkVal(q, pf(P)(wantMax ? xmax : xmin));
    }
    if (/^Boîte de volume maximal/.test(t)) {
      const L = fnum(st, /carton de \$(\d+)\$ cm/); const Vf = (x) => x * (L - 2 * x) ** 2;
      // vérifie la dérivée admise et l'expression développée
      const P = getPoly(st.replace(/V\(x\) = x\([^)]*\)\^2 = /, 'V(x) = '), 'V');
      if (!P || !near(pf(P)(1.7), Vf(1.7))) return 'expression développée de V incorrecte';
      let best = 0; let xb = 0; for (let i = 1; i < 6000; i++) { const x = (L / 2) * i / 6000; if (Vf(x) > best) { best = Vf(x); xb = x; } }
      const xs = Math.round(xb * 100) / 100;
      return /dimension/.test(t) ? checkVal(q, xs) : checkVal(q, Vf(xs));
    }
    if (t === 'Tangente parallèle à une droite') {
      const m = V.poly(st.match(/droite d'équation \$y = ([^$]+)\$/)[1])[1] || 0;
      const a = (m - (f[1] || 0)) / (2 * f[2]);
      return checkLine(q, m, pf(f)(a) - m * a);
    }
    return 'famille 1T5 non reconnue : ' + t;
  };

  // ------------------------------------------------------------------ 1T6
  const eqOf = (s) => { const P = V.poly(s); return [P[1] || 0, P[0] || 0]; };
  const T6 = (q) => {
    const st = q.statement; const t = q.title;
    const eqm = st.match(/(?:d'équation|a pour équation) \$y = ([^$]+)\$/); const E = eqm ? eqOf(eqm[1]) : null;
    const Y0 = fnum(st, /\(\$x = 1\$ pour (\d{4})/) || fnum(st, /rang \$1\$ pour (\d{4})/) || fnum(st, /de (\d{4}) \(rang \$1\$\)/);
    const R = rows(st);
    if (t === 'Point moyen d\'un nuage') { const xs = cells(R[0]); const ys = cells(R[1]); return checkPair(q, mean(xs), mean(ys)); }
    if (t === 'Estimation par interpolation') { const x0 = fnum(st, new RegExp(`pour \\$x = (${NUM})\\$`)); return checkVal(q, E[0] * x0 + E[1]); }
    if (t === 'Interpréter le coefficient directeur') { const k = fnum(st, /augmente de \$(\d+)\$/); return checkVal(q, k * E[0]); }
    if (t === 'Extrapolation') { const yr = fnum(st, /en (\d{4})\.$/); return checkVal(q, E[0] * (yr - Y0 + 1) + E[1]); }
    if (t === 'Valeur observée et valeur estimée') {
      const yr = fnum(st, /En (\d{4}), la valeur/); const obs = fnum(st, new RegExp(`observée était \\$(${NUM})\\$`));
      return checkVal(q, obs - (E[0] * (yr - Y0 + 1) + E[1]));
    }
    if (t === 'Droite passant par le point moyen') {
      const G = st.match(new RegExp(`G\\((${NUM}) ; (${NUM})\\)`)); const a = fnum(st, new RegExp(`coefficient directeur \\$(${NUM})\\$`));
      return checkVal(q, num(G[2]) - a * num(G[1]));
    }
    if (t === 'Année de franchissement d\'un seuil') {
      const S = fnum(st, new RegExp(`(?:dépasse|passe sous) \\$(${NUM})\\$`)); const up = /dépasse \$/.test(st);
      let x = 1; while (up ? !(E[0] * x + E[1] > S + 1e-9) : !(E[0] * x + E[1] < S - 1e-9)) x++;
      return checkVal(q, Y0 + x - 1);
    }
    if (t === 'Comparer deux ajustements') {
      const es = [...st.matchAll(/\$y = ([^$]+)\$/g)].map((m) => eqOf(m[1]));
      let x = 1; while (!(es[0][0] * x + es[0][1] > es[1][0] * x + es[1][1] + 1e-9)) x++;
      return checkVal(q, Y0 + x - 1);
    }
    const xs = cells(R[0]); const ys = cells(R[1]);
    if (t === 'Donnée manquante et point moyen') {
      const ym = num(st.match(new RegExp(`G\\(3 ; (${NUM})\\)`))[1]);
      return checkVal(q, 5 * ym - ys.filter((y) => y !== null).reduce((s, y) => s + y, 0));
    }
    const xm = mean(xs); const ym = mean(ys);
    if (t === 'Ajustement par une droite passant par G') {
      const M = st.match(new RegExp(`M_\\d\\((${NUM}) ; (${NUM})\\)`)); const m = (num(M[2]) - ym) / (num(M[1]) - xm);
      return checkLine(q, m, ym - m * xm);
    }
    const yr = fnum(st, /prévoir pour (\d{4})/); const x = yr - Y0 + 1;
    if (t === 'De la série à la prévision') { const a = fnum(st, new RegExp(`coefficient directeur \\$(${NUM})\\$`)); return checkVal(q, a * x + ym - a * xm); }
    if (t === 'Ajustement au jugé et prévision') { const m = (ym - ys[0]) / (xm - xs[0]); return checkVal(q, m * x + ym - m * xm); }
    return 'famille 1T6 non reconnue : ' + t;
  };

  // ------------------------------------------------------------------ 1T7
  const T7 = (q) => {
    const st = q.statement; const t = q.title;
    const g = (re) => fnum(st, new RegExp(re + ` = (${NUM})`));
    const pA = g('\\$P\\(A\\)'); const qA = g('\\$P_A\\(B\\)'); const qN = g('\\$P_\\{\\\\overline\\{A\\}\\}\\(B\\)');
    const pB = g('\\$P\\(B\\)'); const pAB = g('\\$P\\(A \\\\cap B\\)');
    if (t === 'Probabilité conditionnelle') return checkVal(q, pAB / pA);
    if (t === 'Probabilité d\'une intersection') return checkVal(q, pA * qA);
    if (t === 'Formule des probabilités totales') return checkVal(q, pA * qA + (1 - pA) * qN);
    if (t === 'Probabilité conditionnelle « inversée »') return checkVal(q, pA * qA / (pA * qA + (1 - pA) * qN));
    if (t === 'Retrouver une probabilité conditionnelle') return checkVal(q, (pB - pA * qA) / (1 - pA));
    if (t === 'Évènements indépendants') {
      const indep = near(pAB, pA * pB);
      return /^Oui, car \$P_A\(B\) = P\(B\)\$$/.test(q.answer) === indep && (indep || /^Non, car \$P_A\(B\) \\neq P\(B\)\$$/.test(q.answer)) ? true : `indépendance ${indep}, réponse ${q.answer}`;
    }
    if (t === 'Évènement associé à une variable aléatoire' || t === 'Espérance d\'un gain') {
      const R = rows(st); const xs = cells(R[0]); let ps = cells(R[1]);
      const miss = ps.indexOf(null); if (miss >= 0) ps[miss] = 1 - ps.filter((p) => p !== null).reduce((s, p) => s + p, 0);
      if (!near(ps.reduce((s, p) => s + p, 0), 1) || ps.some((p) => p < -1e-9)) return 'loi de probabilité invalide';
      if (t === 'Espérance d\'un gain') return checkVal(q, xs.reduce((s, x, i) => s + x * ps[i], 0));
      const m = st.match(new RegExp(`P\\(X \\\\(leqslant|geqslant) (${NUM})\\)\\$\\.$`));
      const a = num(m[2]); const le = m[1] === 'leqslant';
      return checkVal(q, xs.reduce((s, x, i) => s + ((le ? x <= a : x >= a) ? ps[i] : 0), 0));
    }
    const p = fnum(st, new RegExp(`avec la probabilité \\$(${NUM})\\$`));
    const n = fnum(st, /On considère \$(\d)\$/);
    const C = (k) => { let r = 1; for (let i = 0; i < k; i++) r = r * (n - i) / (i + 1); return r; };
    const B = (k) => C(k) * p ** k * (1 - p) ** (n - k);
    if (t === 'Répétition d\'épreuves de Bernoulli') return checkVal(q, B(fnum(st, /soit égal à \$(\d)\$/)));
    if (t === 'Au moins un succès') return checkVal(q, 1 - B(0));
    if (t === 'Au moins deux succès sur trois') return checkVal(q, B(2) + B(3));
    if (t === 'Jeu équitable') {
      const lots = [...st.matchAll(new RegExp(`\\$(\\d+)\\$ € avec la probabilité \\$(${NUM})\\$`, 'g'))].map((m) => num(m[1]) * num(m[2]));
      return checkVal(q, lots.reduce((s, x) => s + x, 0));
    }
    if (t === 'Taille d\'échantillon et dispersion') {
      const n0 = fnum(st, /taille \$(\d+)\$/); const k = fnum(st, /par \$(\d+)\$ \?/);
      return checkVal(q, n0 * k * k);
    }
    if (t === 'Fluctuation d\'échantillonnage') {
      const pp = fnum(st, new RegExp(`p = (${NUM})\\$`)); const s = fnum(st, new RegExp(`s = (${NUM})\\$`));
      return checkPair(q, pp - 2 * s, pp + 2 * s);
    }
    return 'famille 1T7 non reconnue : ' + t;
  };
  const out = {};
  for (let k = 1; k <= 4; k++) { out['1T5/' + k] = T5; out['1T6/' + k] = T6; out['1T7/' + k] = T7; }
  return out;
})(V));
}

// Vérificateurs prioritaires (familles ajoutées, saisies exactes natives) : clé 'CH/T' ou 'CH' ; une valeur
// undefined renvoyée signifie « famille non reconnue ici » et passe la main au vérificateur principal.
const PRE_VERIFIERS = {};
const addPre = (obj) => { for (const [k, f] of Object.entries(obj)) (PRE_VERIFIERS[k] = PRE_VERIFIERS[k] || []).push(f); };
// ==== PRE_VERIFIERS: blocs intégrés ====
// ---- vérificateurs prioritaires : troisième gabarit des paliers de Terminale (corrections partielles du 15/11/2026) ----
{
// Recalcul indépendant de chaque famille _x… ajoutée le 15/11/2026 à partir de l'énoncé seul,
// et de la saisie de d pour « Plan médiateur d'un segment ». Un titre non listé renvoie undefined.
addPre(((V) => {
  const close = (a, b, e = 1e-6) => Math.abs(a - b) < e * Math.max(1, Math.abs(a), Math.abs(b));
  const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
  const ansOf = (q) => String(q.exactInput !== undefined ? q.exactInput : q.answer).replace(/\s+/g, '');
  /** saisie simple : entier, fraction, décimal, k√n */
  const pv = (s) => {
    const m = String(s).replace(/\s+/g, '').replace(',', '.').match(/^(-?)(\d+(?:\.\d+)?)?(√(\d+))?(?:\/(\d+))?$/);
    if (!m || (!m[2] && !m[3])) return NaN;
    return (m[1] ? -1 : 1) * (m[2] ? +m[2] : 1) * (m[4] ? Math.sqrt(+m[4]) : 1) / (m[5] ? +m[5] : 1);
  };
  const cmp = (q, v, what) => close(pv(ansOf(q)), v) || `${what} : attendu ${v}, lu ${ansOf(q)}`;
  const tup = (q) => ansOf(q).replace(/^\(|\)$/g, '').split(';').map(pv);
  const cmpT = (q, vs, what) => {
    const a = tup(q);
    return (a.length === vs.length && a.every((x, i) => close(x, vs[i]))) || `${what} : attendu (${vs.join(';')}), lu ${ansOf(q)}`;
  };
  const grab = (st, re) => { const m = st.match(re); if (!m) throw new Error('motif absent ' + re); return m; };
  const num = (s) => { const v = V.val(String(s).trim()); if (Number.isNaN(v)) throw new Error('nombre illisible ' + s); return v; };
  const co = (s) => (s === '' || s === '+' ? 1 : s === '-' ? -1 : +s);
  const pol = (s, v) => { const c = V.poly(String(s).replace(/\\,/g, ''), v); if (!c) throw new Error('polynôme illisible ' + s); return c; };
  const pval = (c, x) => Object.entries(c).reduce((a, [d, k]) => a + k * x ** d, 0);
  /** expression LaTeX en x (fractions, puissances, e^{…}, sin, cos, π) -> fonction */
  const fn = (tex) => {
    let s = String(tex).replace(/\\left|\\right|\\,|\\displaystyle/g, '').replace(/\s+/g, '').replace(/\{,\}/g, '.');
    s = s.replace(/\\pi/g, 'P').replace(/\\sin/g, 'S').replace(/\\cos/g, 'C');
    for (let k = 0; k < 6; k++) s = s.replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '(($1)/($2))').replace(/e\^\{([^{}]*)\}/g, 'E($1)');
    s = s.replace(/([\dxP)])(?=[(xESCP])/g, '$1*');
    // puissances : base x ou groupe parenthésé, exposant {…} ou chiffre
    for (let g = 0; g < 10 && s.includes('^'); g++) {
      const i = s.indexOf('^');
      let e; let end;
      if (s[i + 1] === '{') { end = s.indexOf('}', i); e = s.slice(i + 2, end); end++; } else { e = s[i + 1]; end = i + 2; }
      let st = i - 1;
      if (s[st] === ')') { let dpt = 0; for (; st >= 0; st--) { if (s[st] === ')') dpt++; if (s[st] === '(') { dpt--; if (!dpt) break; } } }
      s = s.slice(0, st) + 'W(' + s.slice(st, i) + ',' + e + ')' + s.slice(end);
    }
    if (/[^\dx.+\-*/(),EPSCW]/.test(s)) throw new Error('expression illisible ' + tex);
    const f = new Function('x', 'E', 'S', 'C', 'P', 'W', 'return ' + s + ';');
    return (x) => f(x, Math.exp, Math.sin, Math.cos, Math.PI, Math.pow);
  };
  const simpson = (f, a, b) => { const n = 2000; const h = (b - a) / n; let s = f(a) + f(b); for (let i = 1; i < n; i++) s += (i % 2 ? 4 : 2) * f(a + i * h); return s * h / 3; };
  const vec = (s) => s.split(';').map((x) => num(x));
  const pt = (st, name) => vec(grab(st, new RegExp(`${name}\\(([^()]*;[^()]*;[^()]*)\\)`))[1]);
  /** représentation paramétrique \begin{cases} x = … \\ y = … \\ z = … \end{cases} -> { A, u } */
  const cases = (st) => {
    const body = grab(st, /\\begin\{cases\}(.*?)\\end\{cases\}/)[1];
    const rows = body.split('\\\\').map((r) => pol(r.replace(/^\s*[xyz]\s*=\s*/, ''), 't'));
    return { A: rows.map((c) => c[0] || 0), u: rows.map((c) => c[1] || 0) };
  };
  const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  const st = (q) => q.statement;
  const F = {};

  // ---- TA1 ----
  F['Initialisation d\'une formule conjecturée'] = (q) => {
    const S = st(q);
    const n0 = +grab(S, /u_(\d+) = /)[1]; const u0 = num(grab(S, /u_\d+ = (-?\d+)\$/)[1]);
    const inc = pol(grab(S, /u_\{n\+1\} = u_n (.*?)\$/)[1], 'n');
    const form = pol(grab(S, /u_n = (.*?) \+ c\$/)[1], 'n');
    const c = pv(ansOf(q));
    let u = u0;
    for (let n = n0; n < n0 + 6; n++) {
      if (!close(u, pval(form, n) + c)) return `u_${n} = ${u} ne vérifie pas la formule avec c = ${c}`;
      u += pval(inc, n);
    }
    return true;
  };
  F['Hérédité d\'une formule de somme'] = (q) => {
    const S = st(q);
    const term = pol(grab(S, /\\sum_\{k=1\}\^\{n\} \((.*?)\)\$/)[1], 'k');
    const claim = pol(grab(S, /que \$S_n = (.*?)\$/)[1], 'n');
    let s = 0;
    for (let n = 1; n <= 6; n++) { s += pval(term, n); if (!close(s, pval(claim, n))) return `formule annoncée fausse au rang ${n}`; }
    const A = claim[2] || 0; const B = claim[1] || 0;
    return cmpT(q, [2 * A + B, A + B], 'coefficients de S_{n+1}');
  };
  F['Majoration par récurrence : choix du majorant'] = (q) => {
    const S = st(q);
    const u0 = num(grab(S, /u_0 = (-?\d+)\$/)[1]);
    const g = grab(S, /u_\{n\+1\} = \\frac\{(\d+)\}\{(\d+)\}u_n ([+-]) (\d+)\$/);
    const r = g[1] / g[2]; const b = (g[3] === '-' ? -1 : 1) * g[4];
    return cmp(q, Math.max(u0, b / (1 - r)), 'plus petit majorant');
  };
  F['Formule explicite d\'une suite définie par un quotient'] = (q) => {
    const S = st(q);
    const u1 = num(grab(S, /u_1 = (-?\d+)\$/)[1]); const k = +grab(S, /\\frac\{n \+ (\d+)\}\{n\}/)[1];
    const c = tup(q);
    let u = u1;
    for (let n = 1; n <= 7; n++) {
      const f = c.reduce((a, x, i) => a + x * n ** (c.length - i), 0);
      if (!close(u, f)) return `u_${n} = ${u}, formule saisie : ${f}`;
      u *= (n + k) / n;
    }
    return true;
  };
  // ---- TA2 ----
  F['Théorème de comparaison : rang d\'un seuil'] = (q) => {
    const S = st(q);
    const c = pol(grab(S, /u_n \\ge (.*?)\$\. Quel/)[1], 'n');
    const A = num(grab(S, /\\ge (-?\d+)\$ pour/)[1]);
    let N = 0; while (pval(c, N) < A) N++;
    return cmp(q, N, 'rang');
  };
  F['Limite d\'une somme géométrique'] = (q) => {
    const g = grab(st(q), /\\sum_\{k=(\d+)\}\^\{n\} (-?\d*)\\left\((.*?)\\right\)\^k/);
    const r = num(g[3]); const a = co(g[2]);
    if (!(Math.abs(r) < 1)) return 'raison hors de ]-1 ; 1[';
    return cmp(q, a * r ** +g[1] / (1 - r), 'limite');
  };
  // ---- TA3 ----
  const lim = (q, X) => {
    const S = st(q); const f = fn(grab(S, /f\(x\) = (.*?)\$\. Déterminer/)[1]);
    const plus = /x \\to \+\\infty/.test(S);
    return cmp(q, f(plus ? X : -X), 'limite');
  };
  F['Limite avec l\'exponentielle et la fonction inverse'] = (q) => lim(q, 1e9);
  F['Limite d\'un quotient d\'exponentielles'] = (q) => lim(q, 60);
  // ---- TA4 ----
  F['Cubique de point d\'inflexion donné'] = (q) => {
    const S = st(q);
    const k = co(grab(S, /f\(x\) = (-?\d*)x\^3/)[1]); const x0 = num(grab(S, /abscisse \$(-?[^$]+)\$/)[1]);
    return cmp(q, -3 * k * x0, 'coefficient a');
  };
  F['Condition de convexité d\'un polynôme de degré 4'] = (q) => {
    const g = grab(st(q), /f\(x\) = (-?\d*)x\^4 ([+-]) (\d*)x\^3 \+ bx\^2/);
    const a = co(g[1]); const p = (g[2] === '-' ? -1 : 1) * co(g[3]);
    // f''(x) = 12a x² + 6p x + 2b : discriminant 36p² - 96ab <= 0
    return cmp(q, 3 * p * p / (8 * a), 'plus petite valeur de b');
  };
  // ---- TA5 ----
  F['Ensemble de définition avec le logarithme'] = (q) => {
    const c = pol(grab(st(q), /\\ln\(([^)]*)\)/)[1], 'x');
    return cmp(q, -(c[0] || 0) / c[1], 'borne alpha');
  };
  F['Inéquation avec logarithmes'] = (q) => {
    const g = grab(st(q), /\\ln\(([^)]*)\) (<|>|\\le|\\ge) \\ln\(([^)]*)\)/);
    const L = pol(g[1], 'x'); const R = pol(g[3], 'x');
    const truth = (x) => {
      const l = pval(L, x); const r = pval(R, x);
      if (l <= 0 || r <= 0) return false;
      return g[2] === '<' ? l < r : g[2] === '>' ? l > r : g[2] === '\\le' ? l <= r : l >= r;
    };
    // saisie « ]7/2;+∞[ » ou, en QCM, réponse LaTeX « $\left]\frac{7}{2} ; +\infty\right[$ »
    const iv = ansOf(q).replace(/\$|\\left|\\right/g, '').replace(/\\infty/g, '∞').replace(/(-?)\\frac\{(\d+)\}\{(\d+)\}/g, '$1$2/$3');
    const m = iv.match(/^([[\]])(.+);(.+)([[\]])$/);
    if (!m) return 'intervalle illisible ' + ansOf(q);
    const lo = /∞/.test(m[2]) ? -Infinity : pv(m[2]); const hi = /∞/.test(m[3]) ? Infinity : pv(m[3]);
    const inI = (x) => (x > lo || (m[1] === '[' && x === lo)) && (x < hi || (m[4] === ']' && x === hi));
    for (let x = -40.0137; x < 40; x += 0.0491) {
      if (Math.abs(x - lo) < 1e-6 || Math.abs(x - hi) < 1e-6) continue;
      if (truth(x) !== inI(x)) return `ensemble faux en x = ${x}`;
    }
    return true;
  };
  // ---- TA6 ----
  F['Primitive prenant une valeur donnée'] = (q) => {
    const S = st(q);
    const c = pol(grab(S, /f\(x\) = (.*?)\$ et/)[1], 'x');
    const g = grab(S, /F\((-?\d+)\) = (-?\d+)\$/); const x2 = +grab(S, /Calculer \$F\((-?\d+)\)\$/)[1];
    const P = (x) => Object.entries(c).reduce((a, [d, k]) => a + k * x ** (+d + 1) / (+d + 1), 0);
    return cmp(q, +g[2] + P(x2) - P(+g[1]), 'valeur de F');
  };
  F['Équation différentielle vérifiée par une fonction'] = (q) => {
    const g = grab(st(q), /f\(x\) = (-?\d*)e\^\{(-?\d*)x\} ([+-]) (\d+)\$/);
    const k = co(g[2]); const m = (g[3] === '-' ? -1 : 1) * g[4];
    // f' = kAe^{kx} = k(f - m)
    return cmpT(q, [k, -k * m], '(a;b)');
  };
  F['Nombre dérivé d\'une solution sans résoudre l\'équation'] = (q) => {
    const S = st(q);
    const c = pol(grab(S, /y' = (.*?)\$/)[1], 'y'); const a = c[1]; const b = c[0] || 0;
    if (/Sans résoudre l'équation, calculer \$f'/.test(S)) return cmp(q, a * num(grab(S, /f\(-?\d+\) = (-?\d+)\$/)[1]) + b, "f'(x0)");
    const s = num(grab(S, /coefficient directeur \$(-?\d+)\$/)[1]);
    return cmp(q, (s - b) / a, 'f(x0)');
  };
  // ---- TA7 ----
  F['Intégrale par la relation de Chasles'] = (q) => {
    const S = st(q);
    const known = [...S.matchAll(/\\int_\{(-?\d+)\}\^\{(-?\d+)\} f\(x\)\\,\\mathrm\{d\}x = (-?\d+)\$/g)].map((m) => [+m[1], +m[2], +m[3]]);
    const ask = grab(S, /Calculer \$\\int_\{(-?\d+)\}\^\{(-?\d+)\}/);
    // primitive G définie aux bornes : G(b) - G(a) = valeur, propagation depuis la première borne
    const G = { [known[0][0]]: 0 };
    for (let it = 0; it < 4; it++) for (const [a, b, v] of known) { if (a in G && !(b in G)) G[b] = G[a] + v; else if (b in G && !(a in G)) G[a] = G[b] - v; }
    if (!(ask[1] in G) || !(ask[2] in G)) return 'bornes non reliées';
    return cmp(q, G[ask[2]] - G[ask[1]], 'intégrale');
  };
  const integ = (q) => {
    const g = grab(st(q), /\\int_\{(.*?)\}\^\{(.*?)\} (.*?)\\,\\mathrm\{d\}x/);
    return cmp(q, simpson(fn(g[3]), fn(g[1])(0), fn(g[2])(0)), 'intégrale');
  };
  F['Intégrale d\'une fonction trigonométrique'] = integ;
  F['Intégrale d\'une fonction de la forme $u\'u^n$'] = integ;
  // ---- TG1 ----
  F['Appartenance d\'un point à une droite : coordonnée manquante'] = (q) => {
    const S = st(q); const { A, u } = cases(S);
    const M = grab(S, /M\(([^()]*)\)/)[1].split(';').map((x) => x.trim());
    let t = null;
    for (let i = 0; i < 3; i++) {
      if (M[i] === 'm') continue;
      const v = num(M[i]);
      if (u[i] === 0) { if (v !== A[i]) return 'point hors de la droite'; continue; }
      const ti = (v - A[i]) / u[i];
      if (t !== null && !close(t, ti)) return 'coordonnées incohérentes';
      t = ti;
    }
    const i = M.indexOf('m');
    return cmp(q, A[i] + t * u[i], 'coordonnée manquante');
  };
  F['Point d\'un plan défini par un point et deux vecteurs : coordonnée manquante'] = (q) => {
    const S = st(q); const A = pt(S, 'A'); const u = vec(grab(S, /\\vec\{u\}\(([^()]*)\)/)[1]); const v = vec(grab(S, /\\vec\{v\}\(([^()]*)\)/)[1]);
    const g = grab(S, /M\((-?\d+) ; (-?\d+) ; m\)/); const dx = g[1] - A[0]; const dy = g[2] - A[1];
    const det = u[0] * v[1] - u[1] * v[0];
    if (!det) return 'système non inversible';
    const s = (dx * v[1] - dy * v[0]) / det; const t = (u[0] * dy - u[1] * dx) / det;
    return cmp(q, A[2] + s * u[2] + t * v[2], 'cote de M');
  };
  // ---- TG2 ----
  const plane = (s) => {
    const c = { x: 0, y: 0, z: 0, '': 0 };
    const str = String(s).replace(/\s+/g, '');
    let pos = 0;
    for (const m of str.matchAll(/([+-]?)(\d*)([xyz]?)/g)) {
      if (m[0] === '') continue;
      if (m.index !== pos) throw new Error('plan illisible ' + s);
      pos = m.index + m[0].length;
      c[m[3]] += (m[1] === '-' ? -1 : 1) * (m[2] ? +m[2] : 1);
    }
    return c;
  };
  F['Intersection d\'une droite et d\'un plan'] = (q) => {
    const S = st(q); const P = plane(grab(S, /\\mathcal\{P\} : (.*?) = 0\$/)[1]); const { A, u } = cases(S);
    const n = [P.x, P.y, P.z]; const nu = dot(n, u);
    if (!nu) return 'droite parallèle au plan';
    const t = -(dot(n, A) + P['']) / nu;
    return cmpT(q, A.map((x, i) => x + t * u[i]), 'point d\'intersection');
  };
  F['Projeté orthogonal d\'un point sur une droite'] = (q) => {
    const S = st(q); const { A, u } = cases(S); const M = pt(S, 'M');
    const t = dot(M.map((x, i) => x - A[i]), u) / dot(u, u);
    return cmpT(q, A.map((x, i) => x + t * u[i]), 'projeté');
  };
  F['Plan médiateur d\'un segment'] = (q) => {
    if (q.exactInput === undefined) return undefined;
    const S = st(q); const A = pt(S, 'A'); const B = pt(S, 'B');
    let n = B.map((x, i) => x - A[i]); const g = n.reduce((a, b) => gcd(a, b));
    const sg = n.find((x) => x !== 0) > 0 ? 1 : -1; n = n.map((x) => (sg * x) / g);
    const I = A.map((x, i) => (x + B[i]) / 2);
    return cmp(q, -dot(n, I), 'constante d');
  };
  // ---- TS2 ----
  F['Espérance d\'une somme de variables de même loi'] = (q) => {
    const S = st(q); const law = [...S.matchAll(/P\(X = (-?\d+)\) = ([\d{},]+)\$/g)].map((m) => [+m[1], num(m[2])]);
    if (!close(law.reduce((a, l) => a + l[1], 0), 1)) return 'loi non normalisée';
    const n = +grab(S, /On joue \$(\d+)\$ parties/)[1];
    return cmp(q, n * law.reduce((a, l) => a + l[0] * l[1], 0), 'E(S)');
  };
  F['Écart type d\'une somme de variables indépendantes de même loi'] = (q) => {
    const S = st(q); const n = +grab(S, /X_\{(\d+)\}\$ sont/)[1]; const s = num(grab(S, /écart type \$([\d{},]+)\$/)[1]);
    return cmp(q, Math.sqrt(n) * s, 'sigma(S)');
  };
  F['Choisir l\'écart dans l\'inégalité de Bienaymé-Tchebychev'] = (q) => {
    const S = st(q); const v = num(grab(S, /pour variance \$([\d{},]+)\$/)[1]); const p = num(grab(S, /\\ge ([\d{},]+)\$ \?/)[1]);
    return cmp(q, Math.sqrt(v / (1 - p)), 'delta');
  };
  F['Majorant donné par l\'inégalité de concentration'] = (q) => {
    const S = st(q); const n = +grab(S, /X_\{(\d+)\}\$ sont/)[1]; const v = num(grab(S, /de variance \$([\d{},]+)\$/)[1]);
    const d = num(grab(S, /\\ge ([\d{},]+)\)\$/)[1]);
    return cmp(q, v / (n * d * d), 'majorant');
  };
  // ---- TS4 / TX5 (rituels) ----
  F['Méthode de Monte-Carlo : estimation de $\\pi$'] = (q) => {
    const S = st(q); const N = +grab(S, /tire \$(\d+)\$ points/)[1]; const k = +grab(S, /; \$(\d+)\$ d'entre eux/)[1];
    return cmp(q, 4 * k / N, 'estimation de pi');
  };
  F['Probabilité d\'une trajectoire donnée'] = (q) => {
    const S = st(q);
    const P = grab(S, /\\begin\{pmatrix\}(.*?)\\end\{pmatrix\}/)[1].split('\\\\').map((r) => r.split('&').map(num));
    if (P.some((r) => !close(r[0] + r[1], 1))) return 'matrice non stochastique';
    const path = grab(S, /trajectoire \$(.*?)\$/)[1].split('\\to').map((x) => 'AB'.indexOf(x.trim()));
    if (path[0] !== 'AB'.indexOf(grab(S, /Partant de \$([AB])\$/)[1])) return 'départ incohérent';
    let p = 1; for (let i = 1; i < path.length; i++) p *= P[path[i - 1]][path[i]];
    return cmp(q, p, 'probabilité');
  };
  // ---- TX1 ----
  F['Condition pour qu\'un complexe soit réel ou imaginaire pur'] = (q) => {
    const S = st(q); const g = grab(S, /z = \((-?\d+) \+ mi\)\(([^)]*)\)/);
    const a = +g[1]; const w = g[2].replace(/\s+/g, '');
    const m2 = w.match(/^(?:(-?\d+)(?=[+-]))?([+-]?\d*)i$/); if (!m2) return 'complexe illisible ' + w;
    const c = m2[1] ? +m2[1] : 0; const d = co(m2[2]);
    // (a + mi)(c + di) = (ac - dm) + (ad + cm)i
    return /est-il réel/.test(S) ? cmp(q, -a * d / c, 'm') : cmp(q, a * c / d, 'm');
  };
  F['Polynôme à coefficients réels de racine complexe donnée'] = (q) => {
    const w = grab(st(q), /z_0 = ([^$]*)\$/)[1].replace(/\s+/g, '');
    const m = w.match(/^(?:(-?\d+)(?=[+-]))?([+-]?\d*)i$/); if (!m) return 'complexe illisible ' + w;
    const p = m[1] ? +m[1] : 0; const r = co(m[2]);
    return cmpT(q, [-2 * p, p * p + r * r], '(b;c)');
  };

  const run = (q) => (Object.prototype.hasOwnProperty.call(F, q.title) ? F[q.title](q) : undefined);
  const out = {};
  for (const k of ['TA1/1', 'TA1/2', 'TA1/3', 'TA1/4', 'TA2/2', 'TA2/4', 'TA3/1', 'TA3/3', 'TA4/2', 'TA4/4', 'TA5/1', 'TA5/2',
    'TA6/1', 'TA6/2', 'TA6/3', 'TA7/1', 'TA7/3', 'TA7/4', 'TG1/3', 'TG1/4', 'TG2/3', 'TG2/4',
    'TS2/1', 'TS2/2', 'TS2/3', 'TS2/4', 'TX1/3', 'TX1/4', 'TS4/4', 'TX5/4']) out[k] = run;
  return out;
})(V));
}
// ---- vérificateurs prioritaires : familles complémentaires lycée (audit du 09/11/2026, constat transversal-02) ----
{
// Recalculs indépendants des familles _x… du registre _LYX ajoutées pour avoir au moins trois gabarits par palier,
// et de la saisie d'intervalle de « Étude d'une fonction (ax + b)e^x ». Chaque fonction relit l'énoncé ;
// un titre non listé renvoie undefined (la main passe aux autres vérificateurs).
addPre(((V) => {
  const PI = Math.PI;
  const close = (a, b, e = 1e-6) => Math.abs(a - b) < e * Math.max(1, Math.abs(a), Math.abs(b));
  const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
  const binom = (n, k) => { let r = 1; for (let i = 1; i <= k; i++) r = r * (n - k + i) / i; return Math.round(r); };
  const modpow = (a, e, m) => { let r = 1n; let b = BigInt(a) % BigInt(m); let x = BigInt(e); const M = BigInt(m); while (x > 0n) { if (x & 1n) r = (r * b) % M; b = (b * b) % M; x >>= 1n; } return Number(r); };
  const ansOf = (q) => String(q.exactInput !== undefined ? q.exactInput : q.answer).replace(/\s+/g, '');
  /** saisie simple : entier, fraction, décimal, k√n, kπ/m */
  const pv = (s) => {
    const m = String(s).replace(/\s+/g, '').replace(',', '.').match(/^(-?)(\d+(?:\.\d+)?)?(√(\d+)|π)?(?:\/(\d+))?$/);
    if (!m || (!m[2] && !m[3])) return NaN;
    return (m[1] ? -1 : 1) * (m[2] ? +m[2] : 1) * (m[4] ? Math.sqrt(+m[4]) : m[3] ? PI : 1) / (m[5] ? +m[5] : 1);
  };
  const pvx = (s) => { const v = pv(s); return Number.isNaN(v) ? num(s) : v; };
  const cmp = (q, v, what) => close(pv(ansOf(q)), v) || `${what} : attendu ${v}, lu ${ansOf(q)}`;
  const num = (s) => V.val(String(s).trim());
  const grab = (st, re) => { const m = st.match(re); if (!m) throw new Error('motif absent ' + re); return m; };
  const pts = (st) => { const o = {}; for (const m of st.matchAll(/([A-Z])\((-?\d+) ; (-?\d+)\)/g)) o[m[1]] = [+m[2], +m[3]]; return o; };
  const mat = (tex) => tex.replace(/\\begin\{pmatrix\}|\\end\{pmatrix\}/g, '').split('\\\\').map((r) => r.split('&').map((x) => num(x)));
  const MAT = /\\begin\{pmatrix\}.*?\\end\{pmatrix\}/;
  /** expression en x : somme de termes c × (x^k | x | \sqrt{x} | \frac{c}{x} | constante) */
  const fx = (s) => {
    const terms = String(s).replace(/\s+/g, '').replace(/(?!^)([+-])/g, ' $1').split(' ');
    const fs = terms.map((t) => {
      let m;
      if ((m = t.match(/^([+-]?)(\d*)\\frac\{(\d+)\}\{x\}$/))) { const c = (m[1] === '-' ? -1 : 1) * (m[2] ? +m[2] : 1) * m[3]; return (x) => c / x; }
      if ((m = t.match(/^([+-]?)(\d*)\\sqrt\{x\}$/))) { const c = (m[1] === '-' ? -1 : 1) * (m[2] ? +m[2] : 1); return (x) => c * Math.sqrt(x); }
      if ((m = t.match(/^([+-]?)(\d*)x(?:\^\{?(\d+)\}?)?$/))) { const c = (m[1] === '-' ? -1 : 1) * (m[2] ? +m[2] : 1); const k = m[3] ? +m[3] : 1; return (x) => c * x ** k; }
      if ((m = t.match(/^([+-]?)(\d+)$/))) { const c = (m[1] === '-' ? -1 : 1) * m[2]; return () => c; }
      throw new Error('terme illisible ' + t);
    });
    return (x) => fs.reduce((a, f) => a + f(x), 0);
  };
  const der = (f, x) => (f(x + 1e-5) - f(x - 1e-5)) / 2e-5;
  const polyN = (s) => { const c = V.poly(s, 'n'); if (!c) throw new Error('polynôme illisible ' + s); return (n) => Object.entries(c).reduce((a, [d, k]) => a + k * n ** d, 0); };
  /** complexe a + bi, avec éventuellement \sqrt{3} */
  const cx = (s) => {
    s = String(s).replace(/\s+/g, '');
    if (s === '0') return [0, 0];
    let re = 0; let im = 0;
    for (const t of s.replace(/(?!^)([+-])/g, ' $1').split(' ')) {
      const m = t.match(/^([+-]?)(\d*)(\\sqrt\{(\d+)\})?(i?)$/);
      if (!m || (!m[2] && !m[3] && !m[5])) throw new Error('complexe illisible ' + s);
      const c = (m[1] === '-' ? -1 : 1) * (m[2] ? +m[2] : 1) * (m[4] ? Math.sqrt(+m[4]) : 1);
      if (m[5]) im += c; else re += c;
    }
    return [re, im];
  };
  /** angle LaTeX : 0, \pi, -\pi, \frac{k\pi}{m}, -\frac{\pi}{m} */
  const ang = (t) => {
    const m = String(t).replace(/\s+/g, '').match(/^(-?)(?:\\frac\{(\d*)\\pi\}\{(\d+)\}|(\d*)\\pi|(0))$/);
    if (!m) throw new Error('angle illisible ' + t);
    if (m[5]) return 0;
    return (m[1] ? -1 : 1) * (m[3] ? (m[2] ? +m[2] : 1) / +m[3] : (m[4] ? +m[4] : 1)) * PI;
  };
  /** égalité d'angles modulo 2π, la saisie étant dans ]-π ; π] */
  const sameAng = (q, v, th) => {
    if (!(v > -PI + 1e-9 && v <= PI + 1e-9)) return `angle saisi hors de ]-π ; π] : ${ansOf(q)}`;
    const d = ((v - th) % (2 * PI) + 2 * PI) % (2 * PI);
    return (d < 1e-7 || 2 * PI - d < 1e-7) || `angle faux : attendu ${th}, lu ${ansOf(q)}`;
  };
  const st = (q) => q.statement;
  const F = {};

  // ---- 2G1 ----
  F['Périmètre d\'un triangle dans un repère'] = (q) => {
    const P = pts(st(q)); const d = (U, W) => Math.hypot(W[0] - U[0], W[1] - U[1]);
    return cmp(q, d(P.A, P.B) + d(P.A, P.C) + d(P.B, P.C), 'périmètre');
  };
  F['Aire d\'un triangle rectangle dans un repère'] = (q) => {
    const P = pts(st(q)); const u = [P.B[0] - P.A[0], P.B[1] - P.A[1]]; const w = [P.C[0] - P.A[0], P.C[1] - P.A[1]];
    if (u[0] * w[0] + u[1] * w[1] !== 0) return 'triangle non rectangle en A';
    return cmp(q, Math.abs(u[0] * w[1] - u[1] * w[0]) / 2, 'aire');
  };
  // ---- 1A3 ----
  const nder = (q) => { const f = fx(grab(st(q), /f\(x\) = ([^$]+)\$/)[1]); const x0 = +grab(st(q), /f'\((-?\d+)\)/)[1]; return cmp(q, der(f, x0), 'nombre dérivé'); };
  F['Nombre dérivé d\'une fonction de référence'] = nder;
  F['Dérivée d\'une somme de fonctions de référence'] = nder;
  F['Démontrer une inégalité par l\'étude des variations'] = (q) => {
    const f = fx(grab(st(q), /f\(x\) = ([^$]+)\$ pour/)[1]);
    let m = Infinity; for (let i = 0; i <= 20000; i++) m = Math.min(m, f(i / 1000));
    return cmp(q, m, 'minimum');
  };
  // ---- 1A4 : intervalle de croissance de (ax + b)e^x ----
  F['Étude d\'une fonction $(ax + b)e^x$'] = (q) => {
    if (!/plus grand intervalle sur lequel \$f\$ est croissante/.test(st(q))) return undefined;
    const c = V.poly(grab(st(q), /f\(x\) = \(([^)]+)\)e\^\{x\}/)[1]);
    const a = c[1] || 0; const b = c[0] || 0;
    const xe = -(a + b) / a;
    const m = ansOf(q).replace(/\$/g, '').match(/^([[\]])(.+);(.+)([[\]])$/);
    if (!m) return 'intervalle illisible ' + ansOf(q);
    const lo = /∞|infty/.test(m[2]) ? -Infinity : pvx(m[2]); const hi = /∞|infty/.test(m[3]) ? Infinity : pvx(m[3]);
    const ok = a > 0 ? (close(lo, xe) && hi === Infinity && m[1] === '[') : (lo === -Infinity && close(hi, xe) && m[4] === ']');
    return ok || `intervalle faux (racine de f' : ${xe})`;
  };
  F['Extremum d\'une fonction $cxe^{kx}$'] = (q) => {
    if (!/plus grand intervalle sur lequel \$f\$ est décroissante/.test(st(q))) return undefined;
    const g = grab(st(q), /f\(x\) = (-?\d*)xe\^\{(-?\d*)x\}/);
    const co = (s) => (s === '' ? 1 : s === '-' ? -1 : +s);
    const c = co(g[1]); const k = co(g[2]); const xe = -1 / k;
    // f'(x) = c(1 + kx)e^{kx} est négative ou nulle à droite de -1/k si ck < 0, à gauche sinon
    const m = ansOf(q).replace(/\$/g, '').match(/^([[\]])(.+);(.+)([[\]])$/);
    if (!m) return 'intervalle illisible ' + ansOf(q);
    const lo = /∞|infty/.test(m[2]) ? -Infinity : pvx(m[2]); const hi = /∞|infty/.test(m[3]) ? Infinity : pvx(m[3]);
    const ok = c * k < 0 ? (close(lo, xe) && hi === Infinity && m[1] === '[') : (lo === -Infinity && close(hi, xe) && m[4] === ']');
    return ok || `intervalle faux (racine de f' : ${xe})`;
  };
  // ---- 1A5 ----
  F['Rang d\'un terme d\'une suite explicite'] = (q) => {
    const u = polyN(grab(st(q), /u_n = ([^$]+)\$/)[1]); const v = +grab(st(q), /u_n = (-?\d+)\$ \?/)[1];
    const sol = []; for (let n = 0; n <= 1000; n++) if (u(n) === v) sol.push(n);
    return (sol.length === 1 && cmp(q, sol[0], 'rang') === true) || `rang : solutions ${sol.join(',')}`;
  };
  F['Somme des premiers termes d\'une suite'] = (q) => {
    const u = polyN(grab(st(q), /u_n = ([^$]+)\$/)[1]); const p = +grab(st(q), /\\dots \+ u_\{(\d+)\}/)[1];
    let s = 0; for (let n = 0; n <= p; n++) s += u(n);
    return cmp(q, s, 'somme');
  };
  F['Retrouver un terme précédent'] = (q) => {
    const m = grab(st(q), /u_\{n\+1\} = (-?\d*)u_n(?: ([+-]) (\d+))?\$/);
    const a = m[1] === '-' ? -1 : m[1] === '' ? 1 : +m[1]; const b = m[2] ? (m[2] === '-' ? -1 : 1) * m[3] : 0;
    const u2 = +grab(st(q), /u_2 = (-?\d+)\$/)[1];
    const sol = []; for (let u0 = -1000; u0 <= 1000; u0++) if (a * (a * u0 + b) + b === u2) sol.push(u0);
    return (sol.length === 1 && cmp(q, sol[0], 'u_0') === true) || `u_0 : solutions ${sol.join(',')}`;
  };
  F['Plus petit terme d\'une suite'] = (q) => {
    const u = polyN(grab(st(q), /u_n = ([^$]+)\$/)[1]);
    let m = Infinity; for (let n = 0; n <= 500; n++) m = Math.min(m, u(n));
    return cmp(q, m, 'plus petit terme');
  };
  // ---- 1G1 ----
  F['Fraction de tour et radian'] = (q) => {
    const m = grab(st(q), /direct, (un|\d+) (tiers|quarts?|sixièmes?|huitièmes?|douzièmes?) de tour/);
    const k = { tiers: 3, quart: 4, sixième: 6, huitième: 8, douzième: 12 }[m[2].replace(/s$/, '').replace(/^tier$/, 'tiers')];
    const n = m[1] === 'un' ? 1 : +m[1];
    const v = pv(ansOf(q));
    return (v >= 0 && v < 2 * PI && close(v, 2 * PI * n / k)) || `réel faux : attendu ${2 * PI * n / k}`;
  };
  F['Cosinus et sinus dans un triangle rectangle'] = (q) => {
    const BC = +grab(st(q), /BC = (\d+)\$/)[1]; const t = ang(grab(st(q), /\\widehat\{ABC\} = ([^$]+?) ?\$/)[1]);
    const side = grab(st(q), /valeur exacte de \$(AC|AB)\$/)[1];
    return cmp(q, BC * (side === 'AC' ? Math.sin(t) : Math.cos(t)), side);
  };
  F['Angles associés à partir de $\\cos x$ et $\\sin x$'] = (q) => {
    const m = grab(st(q), /\\cos x = ([^$]+)\$ et \$\\sin x = ([^$]+)\$/);
    const c = num(m[1]); const s = num(m[2]);
    if (!close(c * c + s * s, 1)) return 'cos² + sin² ≠ 1';
    const x = Math.atan2(s, c);
    const e = grab(st(q), /Calculer \$(.+)\$\./)[1].replace(/\\left|\\right|\s+/g, '');
    const m2 = e.match(/^\\(cos|sin)\((.+)\)$/);
    if (!m2) return 'expression illisible ' + e;
    const arg = { '-x': -x, '\\pi-x': PI - x, '\\pi+x': PI + x, '\\frac{\\pi}{2}-x': PI / 2 - x, '\\frac{\\pi}{2}+x': PI / 2 + x }[m2[2]];
    if (arg === undefined) return 'argument illisible ' + m2[2];
    return cmp(q, Math[m2[1]](arg), 'angle associé');
  };
  F['Méthode d\'Archimède : polygone régulier inscrit'] = (q) => {
    const n = +grab(st(q), /\((\d) côtés\)/)[1]; const R = +grab(st(q), /rayon \$(\d+)\$/)[1];
    return cmp(q, 2 * n * R * Math.sin(PI / n), 'périmètre');
  };
  // ---- 1S1 ----
  F['Compléter un arbre pondéré'] = (q) => {
    const S = st(q); const g = (re) => { const m = S.match(re); return m ? num(m[1]) : NaN; };
    const lab = grab(S, /Calculer \$(.+)\$\./)[1];
    const v = { 'P(\\overline{A})': 1 - g(/P\(A\) = ([^$]+)\$/), 'P_A(\\overline{B})': 1 - g(/P_A\(B\) = ([^$]+)\$/), 'P_{\\overline{A}}(\\overline{B})': 1 - g(/P_\{\\overline\{A\}\}\(B\) = ([^$]+)\$/) }[lab];
    return v === undefined ? 'probabilité demandée illisible ' + lab : cmp(q, v, lab);
  };
  F['Retrouver une probabilité conditionnelle'] = (q) => {
    const S = st(q); const pa = num(grab(S, /P\(A\) = ([^$]+)\$/)[1]); const pab = num(grab(S, /P_A\(B\) = ([^$]+)\$/)[1]); const pb = num(grab(S, /P\(B\) = ([^$]+)\$/)[1]);
    const v = (pb - pa * pab) / (1 - pa);
    return (v >= 0 && v <= 1 && cmp(q, v, 'P_Abar(B)') === true) || `P_Abar(B) : attendu ${v}`;
  };
  F['Probabilités totales avec trois événements'] = (q) => {
    const p = [...st(q).matchAll(/\$(\d+)\\,\\%\$/g)].map((m) => +m[1] / 100);
    if (p.length !== 5) return 'pourcentages illisibles';
    const p3 = 1 - p[0] - p[1];
    return cmp(q, p[0] * p[2] + p[1] * p[3] + p3 * p[4], 'P(D)');
  };
  // ---- TS1 ----
  F['Espérance d\'une loi binomiale'] = (q) => cmp(q, +grab(st(q), /On répète \$(\d+)\$ fois/)[1] * num(grab(st(q), /succès est \$([^$]+)\$/)[1]), 'E(X)');
  F['Probabilité de n\'obtenir que des succès ou aucun'] = (q) => {
    const m = grab(st(q), /\\mathcal\{B\}\((\d+) ; ([^)]+)\)/); const n = +m[1]; const p = num(m[2]); const k = +grab(st(q), /P\(X = (\d+)\)\$\./)[1];
    return cmp(q, binom(n, k) * p ** k * (1 - p) ** (n - k), 'P(X = k)');
  };
  F['Relation de Pascal'] = (q) => {
    const g = [...st(q).matchAll(/\\binom\{(\d+)\}\{(\d+)\} = (\d+)/g)];
    if (g.length !== 2 || g.some((m) => binom(+m[1], +m[2]) !== +m[3])) return 'coefficients binomiaux donnés faux';
    const m = grab(st(q), /En déduire \$\\binom\{(\d+)\}\{(\d+)\}\$/);
    return cmp(q, binom(+m[1], +m[2]), 'coefficient binomial');
  };
  F['Écart type d\'une loi binomiale'] = (q) => {
    const n = +grab(st(q), /\$(\d+)\$ (?:questions|fois|appels)/)[1]; const p = num(grab(st(q), /probabilité \$([^$]+)\$/)[1]);
    return cmp(q, Math.sqrt(n * p * (1 - p)), 'écart type');
  };
  // ---- TS4 ----
  F['Simulation d\'une loi binomiale : moyenne'] = (q) => { const m = grab(st(q), /print\(moyenne\((\d+), (\d+), ([\d.]+)\)\)/); return cmp(q, +m[2] * +m[3], 'moyenne'); };
  F['Planche de Galton'] = (q) => { const m = grab(st(q), /galton\((\d+)\)` renvoie (\d+)/); return cmp(q, binom(+m[1], +m[2]) / 2 ** +m[1], 'probabilité'); };
  // ---- TX2 ----
  F['Argument d\'un nombre complexe'] = (q) => { const [a, b] = cx(grab(st(q), /z = ([^$]+)\$/)[1]); return sameAng(q, pv(ansOf(q)), Math.atan2(b, a)); };
  F['Conjugué, opposé et produit par $i$ en forme exponentielle'] = (q) => {
    const m = grab(st(q), /Soit \$z = (\d+)(?:e\^\{(-?)i(.+?)\})?\$\./);
    const r = +m[1]; const th = m[3] ? (m[2] ? -1 : 1) * ang(m[3]) : 0;
    const w = grab(st(q), /Écrire \$(.+?)\$ sous/)[1];
    const tw = { '\\overline{z}': -th, '-z': th + PI, iz: th + PI / 2 }[w];
    if (tw === undefined) return 'opération illisible ' + w;
    const a = ansOf(q).match(/^\((\d+);(.+)\)$/);
    if (!a) return 'couple illisible ' + ansOf(q);
    if (+a[1] !== r) return 'module faux';
    return sameAng(q, pv(a[2]) * PI, tw);
  };
  F['Angle orienté et nombres complexes'] = (q) => {
    const m = grab(st(q), /a = ([^$]+)\$, \$b = ([^$]+)\$ et \$c = ([^$]+)\$/);
    const [A, B, C] = [m[1], m[2], m[3]].map(cx);
    const u = [B[0] - A[0], B[1] - A[1]]; const w = [C[0] - A[0], C[1] - A[1]];
    // arg(w / u) = arg(w · conj(u))
    return sameAng(q, pv(ansOf(q)), Math.atan2(w[1] * u[0] - w[0] * u[1], w[0] * u[0] + w[1] * u[1]));
  };
  // ---- TX3 ----
  F['Quotient d\'une division euclidienne dans $\\mathbb{Z}$'] = (q) => { const m = grab(st(q), /division euclidienne de \$(-?\d+)\$ par \$(\d+)\$/); return cmp(q, Math.floor(+m[1] / +m[2]), 'quotient'); };
  F['Critère de divisibilité : chiffre manquant'] = (q) => {
    const N = grab(st(q), /\\overline\{([\dc]+)\}/)[1]; const d = /divisible par \$9\$/.test(st(q)) ? 9 : 3;
    const c = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter((x) => +N.replace('c', x) % d === 0);
    if (/plus grand/.test(st(q))) return cmp(q, c[c.length - 1], 'chiffre');
    if (/plus petit/.test(st(q))) return cmp(q, c[0], 'chiffre');
    return (c.length === 1 && cmp(q, c[0], 'chiffre') === true) || `chiffres possibles : ${c.join(',')}`;
  };
  F['Reste d\'une expression en $n$'] = (q) => {
    const m = grab(st(q), /n \\equiv (\d+) \\pmod\{(\d+)\}/); const r = +m[1]; const M = +m[2];
    const P = polyN(grab(st(q), /division euclidienne de \$([^$]+)\$ par/)[1]);
    // vérification sur plusieurs représentants de la classe de r
    const res = [r, r + M, r + 7 * M].map((n) => ((P(n) % M) + M) % M);
    return (res.every((x) => x === res[0]) && cmp(q, res[0], 'reste') === true) || `reste : attendu ${res[0]}`;
  };
  F['Petit théorème de Fermat'] = (q) => { const m = grab(st(q), /de \$(\d+)\^\{(\d+)\}\$ par \$(\d+)\$/); return cmp(q, modpow(+m[1], +m[2], +m[3]), 'reste'); };
  F['Période des restes des puissances'] = (q) => {
    const m = grab(st(q), /tel que \$(\d+)\^k \\equiv 1 \\pmod\{(\d+)\}\$/); const a = +m[1]; const M = +m[2];
    let k = 1; while (modpow(a, k, M) !== 1 && k < 1000) k++;
    return cmp(q, k, 'ordre');
  };
  F['Système de congruences'] = (q) => {
    const c = [...st(q).matchAll(/x \\equiv (\d+) \\pmod\{(\d+)\}/g)].map((m) => [+m[1], +m[2]]);
    let x = 0; while (!c.every(([r, M]) => x % M === r) && x < 10000) x++;
    return cmp(q, x, 'plus petit x');
  };
  // ---- TX4 ----
  F['Plus petit diviseur premier'] = (q) => { const N = +grab(st(q), /diviseur premier de \$(\d+)\$/)[1]; let d = 2; while (N % d) d++; return cmp(q, d, 'diviseur'); };
  F['Diviseurs communs de deux entiers'] = (q) => {
    const m = grab(st(q), /entiers \$(\d+)\$ et \$(\d+)\$ ont-ils/); let n = 0;
    for (let d = 1; d <= +m[1]; d++) if (+m[1] % d === 0 && +m[2] % d === 0) n++;
    return cmp(q, n, 'nombre de diviseurs communs');
  };
  F['Théorème de Gauss'] = (q) => { const m = grab(st(q), /tel que \$(\d+)\$ divise \$(\d+)n\$/); let n = 1; while ((+m[2] * n) % +m[1]) n++; return cmp(q, n, 'n'); };
  F['PGCD de deux expressions en $n$'] = (q) => {
    const m = grab(st(q), /PGCD\}?\(([^;]+) ; ([^)]+)\)/); const P1 = polyN(m[1]); const P2 = polyN(m[2]);
    let best = 0; for (let n = 0; n <= 2000; n++) best = Math.max(best, gcd(P1(n), P2(n)));
    return cmp(q, best, 'PGCD maximal');
  };
  F['Rendre un entier carré parfait'] = (q) => {
    const N = +grab(st(q), /tel que \$(\d+)k\$/)[1]; let k = 1;
    while (Math.round(Math.sqrt(N * k)) ** 2 !== N * k) k++;
    return cmp(q, k, 'k');
  };
  F['Inverse modulo $n$'] = (q) => {
    const m = grab(st(q), /tel que \$(\d+)u \\equiv 1 \\pmod\{(\d+)\}/); let u = 0;
    while ((+m[1] * u) % +m[2] !== 1 && u < +m[2]) u++;
    return cmp(q, u, 'inverse');
  };
  // ---- TX5 ----
  F['Graphe et matrice d\'adjacence'] = (q) => {
    const M = mat(grab(st(q), MAT)[0]);
    if (M.some((r, i) => r.some((x, j) => x !== M[j][i] || (i === j && x !== 0)))) return 'matrice non symétrique';
    const v = st(q).match(/degré du sommet \$([A-E])\$/);
    if (v) return cmp(q, M['ABCDE'.indexOf(v[1])].reduce((a, x) => a + x, 0), 'degré');
    return cmp(q, M.flat().reduce((a, x) => a + x, 0) / 2, 'arêtes');
  };
  F['Suite de matrices $U_{n+1} = AU_n + C$'] = (q) => {
    const S = st(q);
    const A = mat(grab(S, /A = (\\begin\{pmatrix\}.*?\\end\{pmatrix\})/)[1]); const C = mat(grab(S, /C = (\\begin\{pmatrix\}.*?\\end\{pmatrix\})/)[1]).flat();
    let U = mat(grab(S, /U_0 = (\\begin\{pmatrix\}.*?\\end\{pmatrix\})/)[1]).flat();
    for (let k = 0; k < 2; k++) U = [A[0][0] * U[0] + A[0][1] * U[1] + C[0], A[1][0] * U[0] + A[1][1] * U[1] + C[1]];
    return ansOf(q) === `(${U[0]};${U[1]})` || `U_2 : attendu (${U[0]};${U[1]})`;
  };
  F['Probabilité après deux transitions'] = (q) => {
    const S = st(q); const P = mat(grab(S, /P = (\\begin\{pmatrix\}.*?\\end\{pmatrix\})/)[1]);
    if (P.some((r) => !close(r[0] + r[1], 1))) return 'matrice non stochastique';
    const i = 'AB'.indexOf(grab(S, /dans l'état \$([AB])\$\. Quelle/)[1]); const j = 'AB'.indexOf(grab(S, /dans l'état \$([AB])\$ après/)[1]);
    return cmp(q, P[i][0] * P[0][j] + P[i][1] * P[1][j], 'coefficient de P²');
  };

  const run = (q) => (Object.prototype.hasOwnProperty.call(F, q.title) ? F[q.title](q) : undefined);
  const out = {};
  for (const k of ['2G1/2', '2G1/3', '1A3/1', '1A3/4', '1A4/4', '1A5/1', '1A5/2', '1A5/4', '1G1/1', '1G1/3', '1G1/4', '1S1/1', '1S1/2',
    'TS1/1', 'TS1/2', 'TS1/3', 'TS4/4', 'TX2/1', 'TX2/2', 'TX2/4', 'TX3/1', 'TX3/2', 'TX3/3', 'TX3/4',
    'TX4/1', 'TX4/2', 'TX4/3', 'TX4/4', 'TX5/1', 'TX5/3', 'TX5/4']) out[k] = run;
  return out;
})(V));
}
// ---- vérificateurs prioritaires CAPES ----
{
// Recalculs indépendants — CAPES (gen_capes_01 … gen_capes_15). Chaque fonction relit l'énoncé.
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
    // Variables séparables : y' = a t y², y(0) = y0 ⇒ 1/y = 1/y0 − a t²/2
    if (/variables séparables : valeur exacte/.test(q.title)) {
      m = s.match(/\$y' = (-?\d+)\\,t\\,y\^2\$ telle que \$y\(0\) = ([^$]*)\$\. Calculer \$y\((\d+)\)\$/);
      const a = +m[1]; const y0 = tv(m[2]); const t1 = +m[3];
      const D = 1 / y0 - (a * t1 * t1) / 2;
      if (D * (1 / y0) <= 0) return '1/y s\'annule sur [0 ; t1]';
      return expect(q, 1 / D);
    }
    if (/Variables séparables : intervalle maximal/.test(q.title)) {
      m = s.match(/\$y' = (-?\d+)\\,t\\,y\^2\$ telle que \$y\(0\) = ([^$]*)\$/);
      const a = +m[1]; const y0 = tv(m[2]);
      if (a * y0 <= 0) return 'pas d\'explosion en temps fini';
      return expect(q, Math.sqrt(2 / (a * y0)));
    }
    if (/Variables séparables : équation avec exponentielle/.test(q.title)) {
      m = s.match(/\$y' = (-?\d+)\\,t\\,e\^\{-y\}\$ telle que \$y\(0\) = \\ln (\d+)\$\. Calculer \$e\^\{y\((\d+)\)\}\$/);
      const a = +m[1]; const c = +m[2]; const t1 = +m[3];
      const v = c + (a * t1 * t1) / 2;
      if (v <= 0) return 'e^y non positif';
      return expect(q, v);
    }
    if (/Équation logistique/.test(q.title)) {
      m = s.match(/y\\left\(1 - \\frac\{y\}\{(\d+)\}\\right\)\$ avec \$y\(0\) = (\d+)\$/);
      const K = +m[1]; const y0 = +m[2];
      const qq = K / y0 - 1;
      if (!Number.isInteger(qq) || qq <= 1) return 'q non entier ou ≤ 1';
      return expect(q, qq);
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
    if (/Polynôme caractéristique d'une matrice/.test(q.title)) {
      const A = mat2(s); const [p, c] = vals(q);
      return (close(p, -(A[0] + A[3])) && close(c, A[0] * A[3] - A[1] * A[2])) || 'χ_A incorrect';
    }
    if (/Trace et déterminant d'une matrice diagonalisable/.test(q.title)) {
      const m = s.match(/sont \$(-?\d+)\$, \$(-?\d+)\$ et \$(-?\d+)\$/).slice(1).map(Number);
      const [tr, det] = vals(q);
      return (close(tr, m[0] + m[1] + m[2]) && close(det, m[0] * m[1] * m[2])) || 'trace ou déterminant incorrect';
    }
    if (/Valeur propre associée à un vecteur/.test(q.title)) {
      const A = mat2(s); const m = s.match(/X = \\begin\{pmatrix\} (-?\d+) \\\\ (-?\d+) \\end\{pmatrix\}/);
      const x = +m[1]; const y = +m[2]; const l = vals(q)[0];
      return ((x !== 0 || y !== 0) && close(A[0] * x + A[1] * y, l * x) && close(A[2] * x + A[3] * y, l * y)) || 'AX ≠ λX';
    }
    if (/Spectre d'un polynôme de matrice/.test(q.title)) {
      const A = mat2(s); let B = mul2(A, A);
      for (const t of s.match(/B = A\^2 (.*?)\$/)[1].replace(/\s+/g, '').matchAll(/([+-])(\d*)(A|I_2)/g)) {
        const c = (t[1] === '-' ? -1 : 1) * (t[2] === '' ? 1 : +t[2]);
        const U = t[3] === 'A' ? A : [1, 0, 0, 1];
        B = B.map((v, i) => v + c * U[i]);
      }
      const [m1, m2] = vals(q);
      return (m1 <= m2 && close(m1 + m2, B[0] + B[3]) && close(m1 * m2, B[0] * B[3] - B[1] * B[2])) || 'spectre de B incorrect';
    }
    if (/Paramètre et diagonalisabilité/.test(q.title)) {
      const m = s.match(/\\begin\{pmatrix\} (-?\d+) & (-?\d+) & (-?\d+) \\\\ 0 & (-?\d+) & t \\\\ 0 & 0 & (-?\d+) \\end\{pmatrix\}/);
      const [l, x, y, mu, l3] = m.slice(1).map(Number); const t = vals(q)[0];
      return (l === l3 && l !== mu && close(x * t, y * (mu - l))) || 'rang de A - λI différent de 1';
    }
    if (/Degré du polynôme minimal/.test(q.title)) {
      const m = s.match(/\\begin\{pmatrix\} (-?\d+) & (-?\d+) & 0 \\\\ 0 & (-?\d+) & 0 \\\\ 0 & 0 & (-?\d+) \\end\{pmatrix\}/);
      const [l, u, l2, mu] = m.slice(1).map(Number);
      const A = [[l, u, 0], [0, l2, 0], [0, 0, mu]];
      const mul3 = (P, Q) => P.map((r) => [0, 1, 2].map((j) => r[0] * Q[0][j] + r[1] * Q[1][j] + r[2] * Q[2][j]));
      let P = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
      const rows = [];
      for (let i = 0; i < 4; i++) { rows.push(P.flat()); P = mul3(P, A); }
      let r = 0;
      for (let c = 0; c < 9 && r < rows.length; c++) {
        const p = rows.findIndex((row, i) => i >= r && Math.abs(row[c]) > 1e-9);
        if (p < 0) continue;
        [rows[r], rows[p]] = [rows[p], rows[r]];
        for (let i = 0; i < rows.length; i++) if (i !== r) { const f = rows[i][c] / rows[r][c]; rows[i] = rows[i].map((v, j) => v - f * rows[r][j]); }
        r++;
      }
      return expect(q, r);
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
    const coefOf = (t) => (t === '' ? 1 : t === '-' ? -1 : +t);
    if (/Théorème de Dirichlet/.test(q.title)) {
      const m = s.match(/f\(x\) = (-?\d+)\$ sur \$\]-\\pi ; 0\[\$, \$f\(x\) = (-?\d+)\$ sur \$\]0 ; \\pi\[/);
      const al = +m[1]; const be = +m[2]; const x0 = s.match(/x_0 = (.*?)\$/)[1];
      const e = x0 === '0' || x0 === '\\pi' ? (al + be) / 2 : x0.startsWith('-') ? al : be;
      return close(vals(q)[0], e) || `attendu ${e}`;
    }
    if (/Coefficient \$a_0\$/.test(q.title)) {
      const m = s.match(/f\(x\) = (.*?)\$/)[1].replace(/\s+/g, '');
      const terms = [...m.matchAll(/([+-]?)(\d*)(\\cos\((\d*)x\)|\\sin\((\d*)x\))?/g)].filter((t) => t[0]).map((t) => {
        const c = (t[1] === '-' ? -1 : 1) * (t[2] === '' ? 1 : +t[2]);
        if (!t[3]) return () => c;
        const w = t[4] === undefined ? (t[5] === '' ? 1 : +t[5]) : (t[4] === '' ? 1 : +t[4]);
        return t[3].startsWith('\\cos') ? (x) => c * Math.cos(w * x) : (x) => c * Math.sin(w * x);
      });
      const I = integ((x) => terms.reduce((S, g) => S + g(x), 0), -Math.PI, Math.PI) / Math.PI;
      return Math.abs(I - vals(q)[0]) < 1e-5 || `intégrale numérique ${I}`;
    }
    if (/fonction créneau/.test(q.title)) {
      const al = +s.match(/f\(x\) = (-?\d+)\$ sur \$\]0/)[1]; const n = +s.match(/b_\{(\d+)\}/)[1];
      const I = 2 * integ((x) => al * Math.sin(n * x), 0, Math.PI) / Math.PI;
      return Math.abs(I - vals(q)[0] / Math.PI) < 1e-5 || `intégrale numérique ${I}`;
    }
    if (/de \$\|x\|\$/.test(q.title)) {
      const al = coefOf(s.match(/f\(x\) = (-?\d*)\|x\|\$/)[1]); const n = +s.match(/a_\{(\d+)\}/)[1];
      const I = integ((x) => al * Math.abs(x) * Math.cos(n * x), -Math.PI, Math.PI) / Math.PI;
      return Math.abs(I - vals(q)[0] / Math.PI) < 1e-5 || `intégrale numérique ${I}`;
    }
    if (/Coefficient exponentiel/.test(q.title)) {
      const al = coefOf(s.match(/f\(x\) = (-?\d*)x\$/)[1]); const n = +s.match(/c_\{(\d+)\}/)[1];
      const I = -integ((x) => al * x * Math.sin(n * x), -Math.PI, Math.PI) / (2 * Math.PI);
      return Math.abs(I - vals(q)[0]) < 1e-5 || `partie imaginaire numérique ${I}`;
    }
    if (/arc de parabole/.test(q.title)) {
      const be = coefOf(s.match(/f\(x\) = (-?\d*)x\(\\pi - x\)\$/)[1]); const n = +s.match(/b_\{(\d+)\}/)[1];
      const I = 2 * integ((x) => be * x * (Math.PI - x) * Math.sin(n * x), 0, Math.PI) / Math.PI;
      return Math.abs(I - vals(q)[0] / Math.PI) < 1e-5 || `intégrale numérique ${I}`;
    }
    if (/Étape de Parseval/.test(q.title)) {
      const m = s.match(/f\(x\) = (-?\d*)x\^2 ([+-]) (\d+)\$/);
      const al = coefOf(m[1]); const ga = (m[2] === '-' ? -1 : 1) * +m[3];
      const f = (x) => al * x * x + ga;
      const mean = integ(f, -Math.PI, Math.PI) / (2 * Math.PI);
      const K = 2 * (integ((x) => f(x) ** 2, -Math.PI, Math.PI) / (2 * Math.PI) - mean * mean) / Math.PI ** 4;
      return Math.abs(K - vals(q)[0]) < 1e-5 || `K numérique ${K}`;
    }
    if (/Somme d'une série/.test(q.title)) {
      const m = s.match(/\\sum_\{n \\ge (\d)\} \\frac\{(\d*)((?:\(-1\)\^\{?n(?:\+1)?\}?)?)\}\{(.*?)\} = r\\,\\pi(?:\^\{(\d)\})?/);
      const n0 = +m[1]; const k = m[2] === '' ? 1 : +m[2]; const sg = m[3]; const body = m[4];
      const odd = /2n\+1/.test(body); const ex = body.match(/\^(\d)/); const e = ex ? +ex[1] : 1;
      const num = (n) => (sg === '' ? 1 : /\+1/.test(sg) ? (n % 2 ? 1 : -1) : (n % 2 ? -1 : 1));
      const den = (n) => (odd ? 2 * n + 1 : n) ** e;
      let S = 0;
      for (let n = n0; n < 2e5; n++) S += num(n) / den(n);
      const r = vals(q)[0] * Math.PI ** (m[5] ? +m[5] : 1);
      return Math.abs(k * S - r) < 1e-3 || `somme numérique ${k * S}, r π^p = ${r}`;
    }
    return undefined;
  };
  R['capes-04'] = (q) => {
    const s = st(q);
    let m;
    // durée de vie de deux composants exponentiels indépendants (série : min, parallèle : max)
    if ((m = s.match(/paramètres \$\\lambda = (\\frac\{\d+\}\{\d+\}|\d+)\$ et \$\\mu = (\\frac\{\d+\}\{\d+\}|\d+)\$.*montage en (série|parallèle).*Calculer \$E\(T\)\$/))) {
      const l = tv(m[1]); const mu = tv(m[2]);
      const v = m[3] === 'série' ? 1 / (l + mu) : 1 / l + 1 / mu - 1 / (l + mu);
      return Math.abs(v - vals(q)[0]) < 1e-9 || `valeur ${v}`;
    }
    // score G = a X - b (n - X), X binomiale
    if ((m = s.match(/contient \$(\d+)\$ boules? blanches? et \$(\d+)\$ boules? noires?\. On effectue \$(\d+)\$ tirages successifs avec remise\. Chaque boule blanche tirée rapporte (\d+) points?, chaque boule noire tirée en fait perdre (\d+) points?\..*Calculer \$(E|V)\(G\)\$/))) {
      const p = +m[1] / (+m[1] + +m[2]); const n = +m[3]; const a = +m[4]; const b = +m[5];
      let E = 0; let E2 = 0;
      for (let k = 0; k <= n; k++) { let c = 1; for (let i = 0; i < k; i++) c = (c * (n - i)) / (i + 1); const pk = c * p ** k * (1 - p) ** (n - k); const g = a * k - b * (n - k); E += pk * g; E2 += pk * g * g; }
      const v = m[6] === 'E' ? E : E2 - E * E;
      return Math.abs(v - vals(q)[0]) < 1e-7 * Math.max(1, Math.abs(v)) || `valeur ${v}`;
    }
    const numI = (f, a, b, N = 200000) => { let S = 0; const h = (b - a) / N; for (let i = 0; i < N; i++) S += f(a + (i + 0.5) * h); return S * h; };
    if ((m = s.match(/loi uniforme sur \$\[(-?\d+) ; (-?\d+)\]\$\. Calculer \$(E\(X\)|V\(X\)|P\((-?\d+) \\le X \\le (-?\d+)\))\$/))) {
      const a = +m[1]; const b = +m[2]; const dens = 1 / (b - a);
      let v;
      if (m[4] !== undefined) v = numI(() => dens, +m[4], +m[5]);
      else { const E = numI((t) => t * dens, a, b); v = m[3] === 'E(X)' ? E : numI((t) => t * t * dens, a, b) - E * E; }
      return Math.abs(v - vals(q)[0]) < 1e-6 || `valeur ${v}`;
    }
    if ((m = s.match(/exponentielle de paramètre \$\\lambda = (\\frac\{\d+\}\{\d+\}|\d+)\$\. Calculer \$(E\(X\)|V\(X\)|E\(X\^2\))\$/))) {
      const l = tv(m[1]); const f = (t) => l * Math.exp(-l * t); const T = 60 / l;
      const E = numI((t) => t * f(t), 0, T, 400000); const E2 = numI((t) => t * t * f(t), 0, T, 400000);
      const v = m[2] === 'E(X)' ? E : m[2] === 'E(X^2)' ? E2 : E2 - E * E;
      return Math.abs(v - vals(q)[0]) < 1e-5 * Math.max(1, Math.abs(v)) || `valeur ${v}`;
    }
    if ((m = s.match(/P\(X > 1\) = (\\frac\{\d+\}\{\d+\}|\d+)\$\. Calculer \$P\(X > (\d+)(?: \\mid X > (\d+))?\)\$/))) {
      const l = -Math.log(tv(m[1])); const tail = (t) => Math.exp(-l * t);
      const v = m[3] ? tail(+m[2]) / tail(+m[3]) : tail(+m[2]);
      return Math.abs(v - vals(q)[0]) < 1e-9 || `valeur ${v}`;
    }
    if ((m = s.match(/f\(t\) = c\\,t(?:\^\{(\d+)\})?\$ sur \$\[0 ; (\d+)\]\$/))) {
      const p = m[1] ? +m[1] : 1; const A = +m[2];
      const c = 1 / numI((t) => t ** p, 0, A);
      const v = numI((t) => t * c * t ** p, 0, A);
      return Math.abs(v - vals(q)[0]) < 1e-6 || `valeur ${v}`;
    }
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
    if ((m = s.match(/plus petit entier naturel \$\\alpha\$ pour lequel \$\\displaystyle \\int_1\^\{\+\\infty\} \\frac\{t(?:\^\{(\d+)\})?\}\{1 \+ t\^\{\\alpha\}\}/))) {
      // critère : t^(k - alpha) intégrable en +infini si et seulement si k - alpha < -1 (alpha > 0)
      const k = m[1] ? +m[1] : 1; let a = 0;
      while (!(a > 0 && k - a < -1)) a++;
      return expect(q, a);
    }
    if ((m = s.match(/plus grand entier naturel \$\\alpha\$ pour lequel \$\\displaystyle \\int_0\^1 \\frac\{\\sin(?:\^\{(\d+)\})? t\}\{t\^\{\\alpha\}\}/))) {
      // critère : t^(k - alpha) intégrable en 0 si et seulement si k - alpha > -1
      const k = m[1] ? +m[1] : 1; let a = 0;
      while (k - (a + 1) > -1) a++;
      return expect(q, a);
    }
    if ((m = s.match(/\\int_0\^1 \\frac\{(-?)(\d+)\}\{t\^\{1\/(\d+)\}\}\\,dt/))) {
      // substitution t = u^q : c * q * integrale de u^(q-2) sur [0 ; 1]
      const c = (m[1] ? -1 : 1) * +m[2]; const qq = +m[3];
      const v = c * qq * integ((u) => u ** (qq - 2), 0, 1);
      return Math.abs(v - vals(q)[0]) < 1e-6 * Math.max(1, Math.abs(v)) || `intégrale ${v}`;
    }
    if ((m = s.match(/\\int_(0|1)\^\{\+\\infty\} \\frac\{(-?)(\d+)\}\{(t|\(1 \+ t\))\^\{(\d+)\}\}\\,dt/))) {
      // substitution u = 1/x sur ]0 ; 1] : l'intégrale devient bornée
      const c = (m[2] ? -1 : 1) * +m[3]; const p = +m[5];
      const v = c * integ((u) => u ** (p - 2), 0, 1);
      return Math.abs(v - vals(q)[0]) < 1e-6 * Math.max(1, Math.abs(v)) || `intégrale ${v}`;
    }
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
    let dm;
    if ((dm = s.match(/Dans \$\\mathcal\{S\}_\{(\d+)\}\$, on considère \$\\sigma = ((?:\([\d\\;]+\))+)\$.*\\\\ ([\d &]+) \\end\{pmatrix\}\$\. Déterminer \$\(\\tau \\circ \\sigma \\circ \\tau\^\{-1\}\)\((\d+)\)\$/))) {
      const n = +dm[1]; const sg = [...Array(n + 1).keys()];
      for (const c of dm[2].match(/\(([^)]*)\)/g)) { const e = c.slice(1, -1).split(/\D+/).map(Number); e.forEach((x, i) => { sg[x] = e[(i + 1) % e.length]; }); }
      const ta = [0, ...dm[3].split('&').map((x) => +x)]; const tinv = []; ta.forEach((y, x) => { tinv[y] = x; });
      return expect(q, ta[sg[tinv[+dm[4]]]]);
    }
    if ((dm = s.match(/Combien d'éléments d'ordre \$(\d+)\$ le groupe \$\\mathcal\{S\}_\{(\d+)\}\$ contient-il/))) {
      // énumération des permutations et calcul de l'ordre (ppcm des longueurs de cycles)
      const k = +dm[1]; const n = +dm[2]; let c = 0;
      const g = (a, b) => (b ? g(b, a % b) : a);
      const rec = (p, used) => {
        if (p.length === n) { const seen = []; let o = 1; for (let i = 0; i < n; i++) { if (seen[i]) continue; let L = 0; let j = i; while (!seen[j]) { seen[j] = 1; j = p[j]; L++; } o = (o * L) / g(o, L); } if (o === k) c++; return; }
        for (let v = 0; v < n; v++) if (!used[v]) { used[v] = 1; p.push(v); rec(p, used); p.pop(); used[v] = 0; }
      };
      rec([], []);
      return expect(q, c);
    }
    if ((dm = s.match(/diédral \$D_\{(\d+)\}\$/))) {
      // énumération de D_n : (k, e) représente r^k s^e
      const n = +dm[1]; const els = [];
      for (let e = 0; e < 2; e++) for (let k = 0; k < n; k++) els.push([k, e]);
      const mul = (a, b) => [(((a[0] + (a[1] ? -b[0] : b[0])) % n) + n) % n, (a[1] + b[1]) % 2];
      const eq = (a, b) => a[0] === b[0] && a[1] === b[1];
      const id = [0, 0];
      const order = (x) => { let o = 1; let c = x; while (!eq(c, id)) { c = mul(c, x); o++; } return o; };
      const inv = (x) => els.find((y) => eq(mul(x, y), id));
      let dd;
      if ((dd = s.match(/l'ordre de \$r(?:\^\{(\d+)\})?(s?)\$/))) return expect(q, order([dd[1] ? +dd[1] : 1, dd[2] ? 1 : 0]));
      if (/d'éléments d'ordre \$2\$/.test(s)) return expect(q, els.filter((x) => order(x) === 2).length);
      if (/cardinal du centre/.test(s)) return expect(q, els.filter((x) => els.every((y) => eq(mul(x, y), mul(y, x)))).length);
      if (/classes de conjugaison/.test(s)) {
        const seen = new Set(); let c = 0;
        els.forEach((x) => { if (seen.has(x.join())) return; c++; els.forEach((g) => seen.add(mul(mul(g, x), inv(g)).join())); });
        return expect(q, c);
      }
      return 'famille diédrale non reconnue';
    }
    if ((dm = s.match(/numérote de \$1\$ à \$(\d+)\$, dans le sens direct, les sommets/))) {
      const n = +dm[1];
      const p = [...Array(n).keys()].map((k) => (/symétrie axiale/.test(s) ? ((n - k) % n) : (k + 1) % n));
      let sgn = 1;
      for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) if (p[i] > p[j]) sgn = -sgn;
      return expect(q, sgn);
    }
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
  // ---- Leçons 11 à 15 (thèmes du secondaire) ----
  /** "3 - 2i", "-i", "4", "2i" -> [re, im] */
  const cxp = (s) => {
    s = s.replace(/\s+/g, '');
    if (!s.endsWith('i')) return [+s, 0];
    const body = s.slice(0, -1);
    const idx = Math.max(body.lastIndexOf('+'), body.lastIndexOf('-'));
    const re = idx > 0 ? +body.slice(0, idx) : 0;
    const ims = idx > 0 ? body.slice(idx) : body;
    const im = ims === '' || ims === '+' ? 1 : ims === '-' ? -1 : +ims;
    return [re, im];
  };
  /** "0{,}35" -> 0.35 */
  const dn = (s) => +s.replace('{,}', '.');
  /** coefficients d'une combinaison linéaire « 2x - y + 3z - 4 » selon les variables données */
  const lin = (expr, vars) => {
    const t = expr.replace(/\s+/g, '');
    const c = {}; for (const v of vars.concat([''])) c[v] = 0;
    for (const m of t.matchAll(/([+-]?)(\d*)([a-z]?)/g)) {
      if (m[0] === '') continue;
      const v = m[3]; const k = m[2] === '' ? 1 : +m[2];
      c[v] += (m[1] === '-' ? -1 : 1) * k;
    }
    return c;
  };
  const binom = (n, k) => (k < 0 || k > n ? 0 : Math.round(fact(n) / (fact(k) * fact(n - k))));
  R['capes-11'] = (q) => {
    const s = st(q);
    let m;
    if ((m = s.match(/\\vec\{u\}\((-?\d+) ; (-?\d+)\)\$ et \$\\vec\{v\}\((-?\d+) ; (-?\d+)\)\$\. Calculer/))) return expect(q, +m[1] * +m[3] + +m[2] * +m[4]);
    if ((m = s.match(/\\vec\{u\}\((-?\d+) ; m\)\$ et \$\\vec\{v\}\((-?\d+) ; (-?\d+)\)/))) {
      const x = vals(q)[0]; return close(+m[1] * +m[3] - x * +m[2], 0) || 'déterminant non nul';
    }
    if ((m = s.match(/AB = (\d+)\$, \$AC = (\d+)\$ et \$\\widehat\{BAC\} = (\d+)°/))) {
      const b = +m[1]; const c = +m[2]; const a = +m[3] * Math.PI / 180;
      return expect(q, Math.round(b * b + c * c - 2 * b * c * Math.cos(a)));
    }
    if ((m = s.match(/\\\|\\vec\{u\}\\\| = (\d+)\$, \$\\\|\\vec\{v\}\\\| = (\d+)\$ et \$\\\|\\vec\{u\} \+ \\vec\{v\}\\\| = (\d+)/))) {
      return expect(q, (m[3] ** 2 - m[1] ** 2 - m[2] ** 2) / 2);
    }
    if ((m = s.match(/A\((-?\d+) ; (-?\d+)\)\$ et \$B\((-?\d+) ; (-?\d+)\)\$\. Le cercle/))) {
      const [x1, y1, x2, y2] = m.slice(1, 5).map(Number);
      const [p, qq, r] = vals(q);
      // le centre et le rayon doivent correspondre, et A, B doivent vérifier l'équation
      const on = (x, y) => close(x * x + y * y + p * x + qq * y + r, 0);
      const cx = (x1 + x2) / 2; const cy = (y1 + y2) / 2;
      return (on(x1, y1) && on(x2, y2) && close(-p / 2, cx) && close(-qq / 2, cy)) || 'équation incorrecte';
    }
    if ((m = s.match(/la droite \$d\$ d'équation \$(.+?) = 0\$ et le point \$M\((-?\d+) ; (-?\d+)\)/))) {
      const c = lin(m[1], ['x', 'y']); const x0 = +m[2]; const y0 = +m[3];
      return expect(q, (c.x * x0 + c.y * y0 + c['']) ** 2 / (c.x ** 2 + c.y ** 2));
    }
    if ((m = s.match(/plan \$\\mathcal\{P\}\$ d'équation \$(.+?) = 0\$ et le point \$M\((-?\d+) ; (-?\d+) ; (-?\d+)\)/))) {
      const c = lin(m[1], ['x', 'y', 'z']); const P = m.slice(2, 5).map(Number);
      return expect(q, (c.x * P[0] + c.y * P[1] + c.z * P[2] + c['']) ** 2 / (c.x ** 2 + c.y ** 2 + c.z ** 2));
    }
    if ((m = s.match(/\$x = (.+?)\$, \$y = (.+?)\$, \$z = (.+?)\$ \(\$t.*?pour équation \$(.+?) = 0\$/))) {
      const par = [1, 2, 3].map((i) => lin(m[i], ['t']));
      const pl = lin(m[4], ['x', 'y', 'z']);
      const I = vals(q);
      if (I.length !== 3) return 'triplet attendu';
      if (!close(pl.x * I[0] + pl.y * I[1] + pl.z * I[2] + pl[''], 0)) return 'I hors du plan';
      // I sur la droite : même paramètre pour les trois coordonnées
      let tt = null;
      for (let i = 0; i < 3; i++) {
        if (par[i].t === 0) { if (!close(I[i], par[i][''])) return 'I hors de la droite'; continue; }
        const ti = (I[i] - par[i]['']) / par[i].t;
        if (tt === null) tt = ti; else if (!close(tt, ti)) return 'I hors de la droite';
      }
      return true;
    }
    return undefined;
  };
  R['capes-12'] = (q) => {
    const s = st(q);
    let m;
    const mul = (a, b) => [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
    const div = (a, b) => { const d = b[0] ** 2 + b[1] ** 2; return [(a[0] * b[0] + a[1] * b[1]) / d, (a[1] * b[0] - a[0] * b[1]) / d]; };
    if ((m = s.match(/On pose \$z = (.+?)\$ et \$w = (.+?)\$\. Écrire \$zw\$/))) return expect(q, ...mul(cxp(m[1]), cxp(m[2])));
    if ((m = s.match(/module du nombre complexe \$z = (.+?)\$/))) { const z = cxp(m[1]); return expect(q, Math.hypot(z[0], z[1])); }
    if ((m = s.match(/\$a = (.+?)\$, \$b = (.+?)\$ et \$c = (.+?)\$\. Écrire/))) {
      const a = cxp(m[1]); const b = cxp(m[2]); const c = cxp(m[3]);
      return expect(q, ...div([c[0] - a[0], c[1] - a[1]], [b[0] - a[0], b[1] - a[1]]));
    }
    if ((m = s.match(/Écrire \$\\frac\{(.+?)\}\{(.+?)\}\$ sous forme/))) return expect(q, ...div(cxp(m[1]), cxp(m[2])));
    if ((m = s.match(/tel que \$z ([+-]) (\d+)\\bar\{z\} = (.+?)\$/))) {
      const k = (m[1] === '-' ? -1 : 1) * +m[2]; const rhs = cxp(m[3]); const [x, y] = vals(q);
      return (close(x + k * x, rhs[0]) && close(y - k * y, rhs[1])) || 'équation non vérifiée';
    }
    if ((m = s.match(/L'équation \$(.+?) = 0\$ admet deux solutions complexes/))) {
      const c = lin(m[1].replace(/z\^2/, 'w'), ['w', 'z']);
      const [al, be] = vals(q);
      if (!(be > 0)) return 'beta doit être positif';
      const z = [al, be]; const z2 = mul(z, z);
      return (close(c.w * z2[0] + c.z * al + c[''], 0) && close(c.w * z2[1] + c.z * be, 0)) || 'pas racine';
    }
    if ((m = s.match(/Écrire \$\(1 ([+-]) i\)\^\{(\d+)\}\$/))) {
      const b = [1, m[1] === '-' ? -1 : 1]; let z = [1, 0];
      for (let k = 0; k < +m[2]; k++) z = mul(z, b);
      return expect(q, ...z);
    }
    if ((m = s.match(/\\omega = (.+?)\$ et d'angle \$(.+?)\$\. Le point \$M\$ a pour affixe \$(.+?)\$/))) {
      const w = cxp(m[1]); const th = m[2] === '\\pi' ? Math.PI : m[2] === '\\frac{\\pi}{2}' ? Math.PI / 2 : -Math.PI / 2;
      const z = cxp(m[3]);
      const r = mul([Math.round(Math.cos(th)), Math.round(Math.sin(th))], [z[0] - w[0], z[1] - w[1]]);
      return expect(q, w[0] + r[0], w[1] + r[1]);
    }
    return undefined;
  };
  R['capes-13'] = (q) => {
    const s = st(q);
    let m;
    if ((m = s.match(/\$P\(A\) = ([\d{},]+)\$ et \$P\(A \\cap B\) = ([\d{},]+)\$/))) return expect(q, dn(m[2]) / dn(m[1]));
    if ((m = s.match(/\$P\(A\) = ([\d{},]+)\$ et \$P_A\(B\) = ([\d{},]+)\$\. Calculer/))) return expect(q, dn(m[1]) * dn(m[2]));
    if ((m = s.match(/\$P\(A\) = ([\d{},]+)\$, \$P_A\(B\) = ([\d{},]+)\$ et \$P_\{\\bar\{A\}\}\(B\) = ([\d{},]+)\$/))) {
      const a = dn(m[1]); return expect(q, a * dn(m[2]) + (1 - a) * dn(m[3]));
    }
    if ((m = s.match(/indépendants tels que \$P\(A\) = ([\d{},]+)\$ et \$P\(B\) = ([\d{},]+)\$/))) {
      const a = dn(m[1]); const b = dn(m[2]); return expect(q, 1 - (1 - a) * (1 - b));
    }
    if ((m = s.match(/touche \$(\d+)\$ % .*? positif chez \$(\d+)\$ % des malades et chez \$(\d+)\$ %/))) {
      const p = m[1] / 100; const se = m[2] / 100; const fp = m[3] / 100;
      return expect(q, p * se / (p * se + (1 - p) * fp));
    }
    if ((m = s.match(/contient \$(\d+)\$ boules rouges et \$(\d+)\$ boules noires/))) {
      const r = +m[1]; const n = +m[2]; const N = r + n;
      // énumération des couples ordonnés de boules distinctes
      let fav = 0; let tot = 0;
      for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) if (i !== j) { tot++; if ((i < r) === (j < r)) fav++; }
      return expect(q, fav / tot);
    }
    if ((m = s.match(/gagne une partie avec probabilité \$([\d{},]+)\$.*?supérieure ou égale à \$([\d{},]+)\$/))) {
      const p = dn(m[1]); const sl = dn(m[2]);
      const n = vals(q)[0];
      const ok = (k) => 1 - (1 - p) ** k >= sl - 1e-12;
      return (ok(n) && !ok(n - 1)) || 'pas le n minimal';
    }
    if ((m = s.match(/reste abonné le mois suivant avec probabilité \$([\d{},]+)\$, .*? avec probabilité \$([\d{},]+)\$/))) {
      const r = dn(m[1]); const a = dn(m[2]);
      let p = 0.3; for (let k = 0; k < 5000; k++) p = r * p + a * (1 - p);
      return Math.abs(p - vals(q)[0]) < 1e-9 || `limite ${p}`;
    }
    return undefined;
  };
  R['capes-14'] = (q) => {
    const s = st(q);
    let m;
    const nums = (t) => t.split(';').map(Number);
    if ((m = s.match(/les valeurs \$([\d ;]+)\$ ont respectivement les effectifs \$([\d ;]+)\$/))) {
      const x = nums(m[1]); const n = nums(m[2]); const N = n.reduce((a, b) => a + b, 0);
      return expect(q, x.reduce((a, v, i) => a + v * n[i], 0) / N);
    }
    if ((m = s.match(/médiane de la série : \$([\d ;]+)\$/))) {
      const x = nums(m[1]).sort((a, b) => a - b); const med = vals(q)[0];
      const le = x.filter((v) => v <= med).length; const ge = x.filter((v) => v >= med).length;
      const n = x.length;
      const conv = n % 2 ? x[(n - 1) / 2] : (x[n / 2 - 1] + x[n / 2]) / 2;
      return (le >= n / 2 && ge >= n / 2 && close(med, conv)) || 'médiane incorrecte';
    }
    if ((m = s.match(/variance \$V\$ de la série : \$([\d ;]+)\$/))) {
      const x = nums(m[1]); const n = x.length; const mo = x.reduce((a, b) => a + b, 0) / n;
      return expect(q, x.reduce((a, v) => a + (v - mo) ** 2, 0) / n);
    }
    if ((m = s.match(/moyenne \$(\d+)\$ et pour écart type \$(\d+)\$\. On transforme chaque valeur \$x\$ en \$y = (-?\d+)x ([+-]) (\d+)\$/))) {
      const mo = +m[1]; const sd = +m[2]; const a = +m[3]; const b = (m[4] === '-' ? -1 : 1) * +m[5];
      // simulation : série symétrique {mo - sd, mo + sd}
      const ys = [mo - sd, mo + sd].map((x) => a * x + b);
      const my = (ys[0] + ys[1]) / 2; const sy = Math.sqrt(((ys[0] - my) ** 2 + (ys[1] - my) ** 2) / 2);
      return expect(q, my, sy);
    }
    if ((m = s.match(/les notes \$([\d ;]+)\$ et il lui reste un devoir\..*?de ses \$(\d+)\$ notes soit exactement \$(\d+)\$/))) {
      const x = nums(m[1]); const n = +m[2]; const M = +m[3];
      if (x.length !== n - 1) return 'nombre de notes incohérent';
      const ok = []; for (let v = 0; v <= 20; v++) if ((x.reduce((a, b) => a + b, 0) + v) * 1 === n * M) ok.push(v); // notes sur 20
      return (ok.length === 1 && expect(q, ok[0])) || 'aucune note sur 20 ne convient';
    }
    if ((m = s.match(/groupe de \$(\d+)\$ élèves a obtenu une moyenne de \$(\d+)\$, un autre groupe de \$(\d+)\$ élèves une moyenne de \$(\d+)\$/))) {
      return expect(q, (m[1] * m[2] + m[3] * m[4]) / (+m[1] + +m[3]));
    }
    if ((m = s.match(/\\bar\{x\} = (\d+)\$, \$\\bar\{y\} = (\d+)\$, \$V_x = (\d+)\$ et \$\\mathrm\{cov\}\(x, y\) = (-?\d+)\$/))) {
      const a = m[4] / m[3]; return expect(q, a, m[2] - a * m[1]);
    }
    if ((m = s.match(/\$x\$ prend les valeurs \$([\d ;]+)\$ et \$y\$ les valeurs correspondantes \$([-\d ;]+)\$/))) {
      const x = nums(m[1]); const y = nums(m[2]);
      const [a, b] = vals(q);
      // le couple doit annuler les dérivées partielles de S(a, b)
      const ga = x.reduce((acc, v, i) => acc + v * (y[i] - a * v - b), 0);
      const gb = x.reduce((acc, v, i) => acc + (y[i] - a * v - b), 0);
      return (close(ga, 0) && close(gb, 0)) || 'pas le minimum des moindres carrés';
    }
    return undefined;
  };
  R['capes-15'] = (q) => {
    const s = st(q);
    let m;
    if ((m = s.match(/formé de \$(\d+)\$ symboles choisis parmi \$(\d+)\$ symboles/))) return expect(q, (+m[2]) ** +m[1]);
    if ((m = s.match(/parties de \$E = \\\{1, 2, \\dots, (\d+)\\\}\$ contiennent l'élément \$1\$( mais pas l'élément \$2\$)?/)) || (m = s.match(/l'ensemble \$E = \\\{1, 2, \\dots, (\d+)\\\}\$ possède-t-il de parties/))) {
      // énumération des parties par masques binaires (bit 0 : élément 1, bit 1 : élément 2)
      const n = +m[1]; const with1 = /contiennent l'élément/.test(s); const no2 = !!m[2]; let c = 0;
      for (let mask = 0; mask < (1 << n); mask++) if ((!with1 || mask & 1) && (!no2 || !(mask & 2))) c++;
      return expect(q, c);
    }
    if ((m = s.match(/\$(\d+)\$ concurrents .*? des \$(\d+)\$ premiers/))) return expect(q, fact(+m[1]) / fact(+m[1] - +m[2]));
    if ((m = s.match(/groupe de \$(\d+)\$ personnes parmi \$(\d+)\$/))) {
      // énumération des parties par masques binaires
      const n = +m[2]; const k = +m[1]; let c = 0;
      for (let mask = 0; mask < (1 << n); mask++) { let b = 0; for (let x = mask; x; x &= x - 1) b++; if (b === k) c++; }
      return expect(q, c);
    }
    if ((m = s.match(/compte \$(\d+)\$ femmes et \$(\d+)\$ hommes\. Combien de comités de \$(\d+)\$ personnes comportant exactement \$(\d+)\$/))) {
      return expect(q, binom(+m[1], +m[4]) * binom(+m[2], m[3] - m[4]));
    }
    if ((m = s.match(/le mot ([A-Z]+) possède/))) {
      // énumération des permutations distinctes
      const w = m[1].split('').sort(); const seen = new Set();
      const rec = (pre, rest) => { if (!rest.length) { seen.add(pre); return; } for (let i = 0; i < rest.length; i++) { if (i && rest[i] === rest[i - 1]) continue; rec(pre + rest[i], rest.slice(0, i).concat(rest.slice(i + 1))); } };
      if (w.length <= 9) rec('', w);
      return expect(q, seen.size);
    }
    if ((m = s.match(/au point \$\((\d+) ; (\d+)\)\$ par des pas unitaires/))) {
      const p = +m[1]; const r = +m[2];
      const N = Array.from({ length: p + 1 }, () => Array(r + 1).fill(0));
      for (let i = 0; i <= p; i++) for (let j = 0; j <= r; j++) N[i][j] = i === 0 || j === 0 ? 1 : N[i - 1][j] + N[i][j - 1];
      return expect(q, N[p][r]);
    }
    if ((m = s.match(/coefficient de \$x\^\{(\d+)\}\$ dans le développement de \$\((-?\d*)x ([+-]) (\d+)\)\^\{(\d+)\}\$/))) {
      const k = +m[1]; const a = m[2] === '' ? 1 : m[2] === '-' ? -1 : +m[2]; const b = (m[3] === '-' ? -1 : 1) * +m[4]; const n = +m[5];
      // développement effectif du polynôme
      let P = [1];
      for (let i = 0; i < n; i++) { const Q = Array(P.length + 1).fill(0); P.forEach((c, d) => { Q[d] += c * b; Q[d + 1] += c * a; }); P = Q; }
      return expect(q, P[k]);
    }
    if ((m = s.match(/compte \$(\d+)\$ filles et \$(\d+)\$ garçons\. Combien de groupes de \$(\d+)\$ élèves comportant au moins une fille/))) {
      const f = +m[1]; const h = +m[2]; const k = +m[3]; let c = 0;
      for (let j = 1; j <= Math.min(f, k); j++) c += binom(f, j) * binom(h, k - j);
      return expect(q, c);
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
      return lineForm(q, mm, snap(p, 1e-4));
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
    if (/barycentre/.test(S)) {
      const w = [...S.matchAll(/\(([ABC]), (-?\d+)\)/g)].map((x) => +x[2]);
      const ws = w.reduce((s, x) => s + x, 0);
      const ans = strip(q.answer).replace(/^\$|\$$/g, '').replace(/\\left|\\right/g, '').replace(/^(G|\\lambda\s*=)\s*/, '').replace(/^\(|\)$/g, '').trim();
      if (/overrightarrow\{AG\} = \\lambda/.test(S)) {
        const lam = w[1] / ws; // AG = (b/(a+b)) AB
        if (!close(texNum(ans), lam)) return 'lambda attendu ' + lam;
        return chkIn(q, [lam]);
      }
      const P = [...S.matchAll(/([ABC])\((-?\d+) ; (-?\d+)\)/g)].map((x) => [+x[2], +x[3]]);
      if (P.length !== w.length || !ws) return 'barycentre : énoncé illisible';
      const G = [0, 1].map((k) => w.reduce((s, wi, i) => s + wi * P[i][k], 0) / ws);
      const got = pair(ans);
      if (!(close(got[0], G[0]) && close(got[1], G[1]))) return 'barycentre attendu ' + G;
      return chkIn(q, G);
    }
    if (/^(Orthogonalité de deux vecteurs|Centre d'une conique)$/.test(q.title)) return undefined; // familles du lot partiels-sup-a, vérifiées plus bas
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
      return formCheck(q, 'developpement', plainPoly(tgt, 'X'));
    }
    if (/degré 3 scindé/.test(t) && q.exactInput !== undefined) {
      const co = V.poly(S.match(/P\(X\) = (.*?)\$/)[1], 'X');
      const roots = []; for (let x = -20; x <= 20; x++) if (peval(co, x) === 0) roots.push(x);
      if (roots.length !== 3) return 'racines entières attendues';
      // saisie de la factorisation complète (racines triées), vérifiée par le correcteur du moteur
      const exp = roots.map((r) => (r === 0 ? 'X' : r > 0 ? `(X-${r})` : `(X+${-r})`)).join('');
      return formCheck(q, 'factorisation', exp);
    }
    if (/degré 3 (avec|à) racine double/.test(t) && q.exactInput !== undefined) {
      const co = V.poly(S.match(/P\(X\) = (.*?)\$/)[1], 'X');
      const dco = {}; for (const [d, c] of Object.entries(co)) if (+d > 0) dco[+d - 1] = c * +d;
      let dbl = null; let sim = null;
      for (let x = -20; x <= 20; x++) if (peval(co, x) === 0) { if (peval(dco, x) === 0) dbl = x; else sim = x; }
      if (dbl === null || sim === null) return 'racine double et racine simple entières attendues';
      const fx = (r) => (r === 0 ? 'X' : r > 0 ? `(X-${r})` : `(X+${-r})`);
      const exp = `${fx(dbl)}^2${fx(sim)}`;
      // la réponse QCM du palier 2 précise les racines en texte : seule la saisie est confrontée au correcteur
      if (q.answerType !== 'factorisation') return 'answerType ' + q.answerType + ' au lieu de factorisation';
      const both = (a) => ENGINE.checkFactorisation(a, exp).correct === true && ENGINE.checkFactorisation(exp, a).correct === true;
      return both(q.exactInput) || `saisie ${q.exactInput} ≠ forme recalculée ${exp}`;
    }
    if (/PGCD de deux polynômes/.test(t)) {
      m = S.match(/P\(X\) = (.*?)\$ et \$Q\(X\) = (.*?)\$/);
      const P1 = V.poly(m[1], 'X'); const Q1 = V.poly(m[2], 'X');
      const com = []; for (let x = -20; x <= 20; x++) if (peval(P1, x) === 0 && peval(Q1, x) === 0) com.push(x);
      if (com.length !== 2) return 'racines communes';
      const g = V.poly(q.answer.match(/= (.*)\$/)[1], 'X');
      const exp = [-(com[0] + com[1]), com[0] * com[1]];
      if ((g[2] || 0) !== 1 || (g[1] || 0) !== exp[0] || (g[0] || 0) !== exp[1]) return 'pgcd faux';
      return formCheck(q, 'developpement', plainPoly([1, ...exp], 'X'));
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
      return formCheck(q, 'developpement', plainPoly([al, be], 'X'));
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
      return formCheck(q, 'developpement', plainPoly(co, 'X'));
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
    else if (/dérivation concrète/.test(t)) { const p = V.poly(strip(A).replace(/^D\(P\) = /, ''), 'X'); const r = formCheck(q, 'developpement', plainPoly([p[1] || 0, p[0] || 0], 'X')); return r === true ? undefined : r; }
    else if (/Théorème du rang (appliqué|: Dimension)/.test(t)) exp = [+A.match(/rg\}\(f\) = (\d+)/)[1]];
    else if (/Matrice d'un endomorphisme dans la base canonique|Matrice de passage entre deux bases/.test(t)) exp = pmats(A)[0].flat();
    else if (/Liberté de deux vecteurs|et liberté sans composante/.test(t)) exp = [+A.match(/\\det\(u, v(?:, w)?\) = (-?\d+)/)[1]];
    else if (/^Rang d'une matrice \$3/.test(t)) exp = [+A.match(/rg\}\(M\) = (\d)/)[1]];
    else if (/Nombre de racines réelles/.test(t)) exp = [/^Trois/.test(A) ? 3 : /^Deux/.test(A) ? 2 : 1];
    else if (/Nombre de classes|modulo n sur un ensemble fini/.test(t)) exp = [+A.match(/^\$(\d+)\$/)[1]];
    else if (/Image directe d'un intervalle/.test(t)) { m = A.match(/\[(-?\d+) ; (-?\d+)\]/); exp = [+m[1], +m[2]]; }
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
    const m = +st(q).match(/sur \$\[0(?:,| ;) (\d+)\]\$/)[1]; const f = fn(st(q).match(/de \$f\(x\) = ([^$]*)\$/)[1]);
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
  // Équations à variables séparables (section 7 du cours)
  const sepVal = (s) => { const t = String(s).trim(); const m = t.match(/^(-?)\\frac\{(\d+)\}\{(\d+)\}$/); return m ? (m[1] ? -1 : 1) * m[2] / m[3] : +t; };
  const sepCoef = (s) => (s === '' || s === undefined ? 1 : s === '-' ? -1 : +s);
  const sepY2 = (s) => { const m = s.match(/y' = (-?\d*)(t\^2|t)?(?:\\,)?y\^2\$, \$y\(0\) = ([^$]*)\$/); return m ? { c: sepCoef(m[1]), p: m[2] === 't' ? 1 : m[2] === 't^2' ? 2 : 0, y0: sepVal(m[3]) } : null; };
  F["Solutions constantes d'une équation à variables séparables"] = (q) => {
    const fact = st(q).match(/\\,([^$]*)\$ \?/)[1];
    const roots = [...fact.matchAll(/\(y ([+-]) (\d+)\)/g)].map((m) => (m[1] === '-' ? +m[2] : -m[2]));
    if (/^y/.test(fact)) roots.push(0);
    const got = [...q.answer.matchAll(/y = (-?\d+)/g)].map((m) => +m[1]);
    const key = (v) => v.slice().sort((x, y) => x - y).join();
    return roots.length === 2 && key(roots) === key(got) ? true : 'solutions constantes';
  };
  F['Problème de Cauchy à variables séparables'] = (q) => {
    const A = q.answer.replace(/\$/g, '');
    const e = st(q).match(/y' = (-?\d*)e\^\{-y\}\$, \$y\(0\) = (?:\\ln (\d+)|0)\$/);
    if (e) {
      const k = sepCoef(e[1]), m = e[2] ? +e[2] : 1;
      const mm = A.match(/\\ln\((-?\d*)t \+ (\d+)\)$/);
      return mm && sepCoef(mm[1]) === k && +mm[2] === m ? true : 'Cauchy exponentiel faux';
    }
    const P = sepY2(st(q)); if (!P) return 'parse';
    const mm = A.match(/\\frac\{1\}\{(-?\d+) ([+-]) (\d*)t(?:\^(\d))?\}$/); if (!mm) return 'parse ' + A;
    const coef = (mm[2] === '-' ? -1 : 1) * (mm[3] === '' ? 1 : +mm[3]), n = mm[4] ? +mm[4] : 1;
    return near(1 / +mm[1], P.y0) && n === P.p + 1 && near(coef, -P.c / (P.p + 1)) ? true : 'Cauchy y^2 faux';
  };
  F["Intervalle maximal d'une solution"] = (q) => {
    const P = sepY2(st(q)); if (!P) return 'parse';
    const s = P.c * P.y0; let lo = -Infinity, hi = Infinity;
    if (P.p === 0) { if (s > 0) hi = 1 / s; else lo = 1 / s; } else if (s > 0) { hi = Math.sqrt(2 / s); lo = -hi; }
    if (/mathbb\{R\}/.test(q.answer)) return lo === -Infinity && hi === Infinity ? true : 'intervalle';
    const m = q.answer.match(/^\$\](.*) ; (.*)\[\$$/); if (!m) return 'parse ' + q.answer;
    const u = m[1] === '-\\infty' ? -Infinity : sepVal(m[1]), v = m[2] === '+\\infty' ? Infinity : sepVal(m[2]);
    const eq = (x, y) => x === y || near(x, y);
    return eq(u, lo) && eq(v, hi) ? true : 'intervalle';
  };
  F['Équation logistique'] = (q) => {
    const m = st(q).match(/y' = y\((\d+) - (\d*)y\)\$, \$y\(0\) = (\d+)\$/); if (!m) return 'parse';
    const a = +m[1], b = m[2] === '' ? 1 : +m[2], y0 = +m[3];
    return cmpT(q, [a / b, (a - b * y0) / (b * y0)], 'logistique');
  };
  const ode1 = (s) => { const m = s.match(/\$y' (?:([+-]) (\d*)y) = (-?\d+)\$/); return { a: (m[1] === '-' ? -1 : 1) * (m[2] ? +m[2] : 1), b: +m[3] }; };
  // palier 2, forme saisie : « problème de Cauchy αy' + βy = γ, y(0) = y0 », réponse (k ; C ; D) ; la forme QCM « solution générale » relève de R['L2-EDO/2']
  F["Équation linéaire d'ordre 1 à second membre constant"] = (q) => {
    const m = st(q).match(/problème de Cauchy \$(-?\d*)y' ([+-]) (\d*)y = (-?\d+)\$, \$y\(0\) = (-?\d+)\$/); if (!m) return undefined;
    const al = m[1] === '' ? 1 : m[1] === '-' ? -1 : +m[1], be = (m[2] === '-' ? -1 : 1) * (m[3] ? +m[3] : 1), ga = +m[4], y0 = +m[5];
    // saisie « (-7/2;-1/7;1/7) » : fractions a/b lues directement
    const fr = (x) => { const p = x.trim().split('/'); return p.length === 2 ? +p[0] / +p[1] : +p[0]; };
    const tm = strip(q.answer).match(/^\((.*)\)$/); if (!tm) return 'parse ' + q.answer;
    const [k, C, D] = tm[1].split(';').map(fr);
    const y = (t) => C * Math.exp(k * t) + D, yp = (t) => k * C * Math.exp(k * t);
    if (!near(y(0), y0) || ![0, 0.3, 1].every((t) => near(al * yp(t) + be * y(t), ga))) return 'ordre 1 normalisé faux';
    return [k, C, D].every((x, i) => near(x, [-be / al, y0 - ga / be, ga / be][i])) ? true : 'ordre 1 normalisé : ' + q.answer;
  };
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
    const m = st(q).match(/\[0(?:,| ;) (\d+)\] \\times \[0(?:,| ;) (\d+)\]\} \((.*?)\)/); const c = lin(m[3], 'xy');
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
    const R = +(st(q).match(/\\gamma\(t\) = \((\d*)\(t/)[1] || 1); const e = st(q).match(/\[0(?:,| ;) (\d*)\\pi\]/)[1]; const T = (e ? +e : 1) * Math.PI;
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
  F["Symétrie d'un arc paramétré"] = (q) => {
    const m = st(q).match(/M\(t\) = \((.*?), (.*?)\)\$/); const pair = (s) => /\\cos/.test(s);
    const px = pair(m[1]), py = pair(m[2]);
    const exp = px && py ? /Aucune/ : px ? /axe \$\(Ox\)/ : py ? /axe \$\(Oy\)/ : /centre/;
    return exp.test(q.answer) || 'symétrie de l\'arc';
  };
  F["Asymptote oblique d'un arc paramétré"] = (q) => {
    const m = st(q).match(/,\\ (-?\d*)t(?: ([+-]) (\d+))? [+-] \\frac/);
    const a = m[1] === '' ? 1 : m[1] === '-' ? -1 : +m[1]; const b = m[3] ? (m[2] === '-' ? -1 : 1) * +m[3] : 0;
    return cmpT(q, [a, b], 'asymptote oblique');
  };
  F["Longueur d'une courbe polaire"] = (q) => {
    const m = st(q).match(/r\(\\theta\) = (\d*)(\(1 \+ \\cos|\\cos|\\sin\^3)/); const c = +(m[1] || 1);
    const r = m[2][0] === '(' ? (t) => c * (1 + Math.cos(t)) : m[2] === '\\cos' ? (t) => c * Math.cos(t) : (t) => c * Math.sin(t / 3) ** 3;
    const [a, b] = m[2][0] === '(' ? [0, 2 * Math.PI] : m[2] === '\\cos' ? [-Math.PI / 2, Math.PI / 2] : [0, 3 * Math.PI];
    const L = simp((t) => Math.hypot(r(t), der(r, t)), a, b, 20000);
    const s = q.answer.replace(/\$/g, '').replace(/^.*=\s*/, ''); const coef = s.replace(/\\pi|π/, '').trim();
    const got = (coef === '' ? 1 : fv(coef)) * (/\\pi|π/.test(s) ? Math.PI : 1);
    return Math.abs(got - L) < 1e-5 || `longueur polaire: attendu ≈ ${L} / réponse ${q.answer}`;
  };
  F['Tangente à une ligne de niveau'] = (q) => {
    const co = { 'x^2': 0, xy: 0, 'y^2': 0 };
    for (const t of st(q).match(/f\(x, y\) = (.*?)\$/)[1].replace(/\s+/g, '').matchAll(/([+-]?)(\d*)(x\^2|xy|y\^2)/g)) co[t[3]] = (t[1] === '-' ? -1 : 1) * (t[2] ? +t[2] : 1);
    const pt = st(q).match(/au point \$\((-?\d+), (-?\d+)\)\$/); const x = +pt[1], y = +pt[2];
    return cmpA(q, -(2 * co['x^2'] * x + co.xy * y) / (co.xy * x + 2 * co['y^2'] * y), 'pente ligne de niveau');
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
    const m = st(q).match(/\[0(?:,| ;) (\d+)\] \\times \[0(?:,| ;) (\d+)\]/); const a = +m[1], b = +m[2]; const one = /\\\|_\{1\}/.test(st(q));
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
  // Familles L3-CMP et L3-GDF ajoutées : recalculs indépendants de la solution affichée
  const texJs = (t) => String(t).replace(/\\,/g, '').replace(/\\left|\\right/g, '').replace(/\(([^()]*)\)\^(\d)/g, 'Math.pow(($1),$2)').replace(/\|([xyz])\|/g, 'Math.abs($1)').replace(/([xyz])\^(\d)/g, '($1**$2)').replace(/(\d)([xyz(M])/g, '$1*$2').replace(/([xyz)])(?=[xyz(M])/g, '$1*');
  const texF = (t) => new Function('x', 'y', 'z', 'return ' + texJs(t));
  const entier = (v, msg) => { const r = Math.round(v); if (Math.abs(v - r) > 1e-3) throw new Error(msg + ' non entier : ' + v); return r; };
  F["Composantes connexes d'une réunion d'intervalles"] = (q) => {
    const ivs = st(q).match(/A = (.*?)\$ de/)[1].split(' \\cup ').map((t) => { const m = t.trim().match(/^([[\]])(-?\d+) ; (-?\d+)([[\]])$/); return { lc: m[1] === '[', s: +m[2], e: +m[3], rc: m[4] === ']' }; });
    const inA = (x) => ivs.some((I) => (x > I.s && x < I.e) || (x === I.s && I.lc) || (x === I.e && I.rc));
    let c = 0, prev = false;
    for (let i = -120; i <= 200; i++) { const cur = inA(i / 4); if (cur && !prev) c++; prev = cur; }
    return cmpN(q, c, 'composantes');
  };
  F["Composantes connexes d'une partie de $\\mathbb{R}$ définie par un polynôme"] = (q) => {
    const m = st(q).match(/P\(x\) = (.*?)\$\. Combien .*P\(x\) (>|<|\\neq|\\geq) 0/); const P = texF(m[1]);
    const inA = (x) => { const v = P(x); return m[2] === '>' ? v > 0 : m[2] === '<' ? v < 0 : m[2] === '\\neq' ? v !== 0 : v >= 0; };
    let c = 0, prev = false;
    for (let i = -40; i <= 40; i++) { const cur = inA(i / 4); if (cur && !prev) c++; prev = cur; }
    return cmpN(q, c, 'composantes');
  };
  F["Composantes connexes d'une partie de $\\mathbb{R}^2$ ou $\\mathbb{R}^3$"] = (q) => {
    const set = st(q).match(/A = (.*?)\$(?:, où| possède)/)[1];
    if (set.includes('\\setminus')) return cmpN(q, 1, 'plan privé de points');
    const dim = set.includes('(x, y, z)') ? 3 : 2;
    const clauses = set.match(/ : (.*)\\\}$/)[1].split(',\\ ').map((c) => { const m = c.match(/^(.*?) (>|<|\\neq) (.*)$/); const L = texF(m[1]), R = texF(m[3]); return { f: (x, y, z) => L(x, y, z) - R(x, y, z), op: m[2] }; });
    const B = dim === 2 ? 30 : 10, h = dim === 2 ? 0.25 : 0.5, n = Math.round((2 * B) / h);
    const co = (i) => -B + h / 2 + i * h, N = dim === 2 ? n * n : n * n * n, sig = new Array(N).fill(null);
    for (let id = 0; id < N; id++) {
      const i = id % n, j = Math.floor(id / n) % n, k = dim === 3 ? Math.floor(id / (n * n)) : 0;
      let s = '', dedans = true;
      for (const c of clauses) {
        const v = c.f(co(i), co(j), dim === 3 ? co(k) : 0);
        if (c.op === '>' ? !(v > 0) : c.op === '<' ? !(v < 0) : v === 0) { dedans = false; break; }
        if (c.op === '\\neq') s += v > 0 ? '+' : '-';
      }
      if (dedans) sig[id] = s;
    }
    const pas = dim === 2 ? [1, n] : [1, n, n * n];
    const vu = new Uint8Array(N);
    let c = 0;
    for (let d = 0; d < N; d++) {
      if (sig[d] === null || vu[d]) continue;
      c++; vu[d] = 1;
      const pile = [d];
      while (pile.length) {
        const u = pile.pop();
        const coord = [u % n, Math.floor(u / n) % n, Math.floor(u / (n * n))];
        pas.forEach((p, a) => {
          for (const e of [-1, 1]) {
            if (coord[a] + e < 0 || coord[a] + e >= n) continue;
            const v = u + e * p;
            if (!vu[v] && sig[v] === sig[u]) { vu[v] = 1; pile.push(v); }
          }
        });
      }
    }
    return cmpN(q, c, 'composantes (grille)');
  };
  F["Image continue d'un compact connexe de $\\mathbb{R}^2$"] = (q) => {
    const R = Math.sqrt(+st(q).match(/x\^2 \+ y\^2 (?:\\le|=) (\d+)\\\}/)[1]); const f = texF(st(q).match(/f\(x, y\) = (.*?)\$/)[1]);
    let lo = Infinity, hi = -Infinity;
    for (let i = 0; i < 40000; i++) { const t = (i * 2 * Math.PI) / 40000, v = f(R * Math.cos(t), R * Math.sin(t)); lo = Math.min(lo, v); hi = Math.max(hi, v); }
    return cmpT(q, [entier(lo, 'min'), entier(hi, 'max')], 'image');
  };
  F['Équivalence des normes : meilleures constantes'] = (q) => {
    const N = texF(st(q).match(/N\(x, y\) = (.*?)\$/)[1]); let lo = Infinity, hi = -Infinity;
    for (let i = 0; i <= 2000; i++) { const t = -1 + i / 1000; for (const v of [N(1, t), N(t, 1)]) { lo = Math.min(lo, v); hi = Math.max(hi, v); } }
    return cmpT(q, [entier(lo, 'alpha'), entier(hi, 'beta')], 'normes');
  };
  F["Distance d'un point à un compact"] = (q) => {
    const m = st(q).match(/centre \$C\((-?\d+), (-?\d+)\)\$ et de rayon \$(\d+)\$, et \$P\((-?\d+), (-?\d+)\)\$/);
    return cmpN(q, Math.max(0, Math.hypot(m[4] - m[1], m[5] - m[2]) - m[3]), 'distance point-disque');
  };
  F['Distance entre deux compacts'] = (q) => {
    const m = st(q).match(/centre \$\((-?\d+), (-?\d+)\)\$ et de rayon \$(\d+)\$, et \$K_2\$ le disque fermé de centre \$\((-?\d+), (-?\d+)\)\$ et de rayon \$(\d+)\$/);
    return cmpN(q, Math.max(0, Math.hypot(m[4] - m[1], m[5] - m[2]) - m[3] - m[6]), 'distance disques');
  };
  F["Dimension d'une sous-variété"] = (q) => {
    const S = st(q); let m;
    if ((m = S.match(/SL_\{(\d+)\}/))) return cmpN(q, m[1] * m[1] - 1, 'dim SL');
    if ((m = S.match(/O_\{(\d+)\}/))) return cmpN(q, (m[1] * (m[1] - 1)) / 2, 'dim O');
    if ((m = S.match(/f : \\mathbb\{R\}\^\{(\d+)\} \\to/))) return cmpN(q, +m[1], 'dim graphe');
    const n = +S.match(/\\mathbb\{R\}\^\{(\d+)\}/)[1];
    return cmpN(q, /\\text\{ et \}/.test(S) ? n - 2 : n - 1, 'dim');
  };
  F['Plan tangent à une surface de niveau'] = (q) => {
    const S = st(q), p = S.match(/p = \((-?\d+) ; (-?\d+) ; (-?\d+)\)/).slice(1).map(Number);
    const m = S.match(/surface d'équation \$(.*?) = (-?\d+)\$/), g = texF(m[1]), e = 1e-5;
    if (Math.abs(g(...p) - +m[2]) > 1e-9) return 'le point n\'est pas sur la surface';
    const D = [0, 1, 2].map((i) => { const a = [...p], b = [...p]; a[i] += e; b[i] -= e; return (g(...a) - g(...b)) / (2 * e); });
    const bon = (o) => {
      const [l, r] = String(o).replace(/\$/g, '').split(' = '), L = texF(l), c0 = L(0, 0, 0);
      const v = [L(1, 0, 0) - c0, L(0, 1, 0) - c0, L(0, 0, 1) - c0];
      const croix = [v[1] * D[2] - v[2] * D[1], v[2] * D[0] - v[0] * D[2], v[0] * D[1] - v[1] * D[0]];
      return croix.every((x) => Math.abs(x) < 1e-3) && Math.abs(L(...p) - +r) < 1e-9;
    };
    const justes = (q.options || [q.answer]).filter(bon);
    return justes.length === 1 && justes[0] === q.answer ? true : `plan tangent : ${justes.length} option(s) juste(s)`;
  };
  F['Extrema liés'] = (q) => {
    const S = st(q); let m;
    if ((m = S.match(/f\(x, y\) = (.*?)\$ sur le cercle d'équation \$x\^2 \+ y\^2 = (\d+)\$/))) {
      const f = texF(m[1]), R = Math.sqrt(+m[2]); let lo = Infinity, hi = -Infinity;
      for (let i = 0; i < 40000; i++) { const t = (i * 2 * Math.PI) / 40000, v = f(R * Math.cos(t), R * Math.sin(t)); lo = Math.min(lo, v); hi = Math.max(hi, v); }
      return cmpN(q, entier(/maximum/.test(S) ? hi : lo, 'extremum'), 'extremum cercle');
    }
    if ((m = S.match(/droite d'équation \$(.*?) = (-?\d+)\$/))) {
      const L = texF(m[1]), a = L(1, 0, 0), b = L(0, 1, 0), d = +m[2];
      let best = Infinity; const n = Math.hypot(a, b);
      for (let i = -200000; i <= 200000; i++) { const t = i / 10000; const x = (d * a) / (n * n) - (t * b) / n, y = (d * b) / (n * n) + (t * a) / n; best = Math.min(best, x * x + y * y); }
      return cmpA(q, best, 'minimum droite', 1e-6);
    }
    const s = +S.match(/x \+ y \+ z = (\d+)/)[1]; let best = 0;
    for (let i = 0; i <= 600; i++) for (let j = 0; j <= 600 - i; j++) { const x = (i * s) / 600, y = (j * s) / 600; best = Math.max(best, x * y * (s - x - y)); }
    return cmpA(q, best, 'maximum produit', 1e-3);
  };
  F['Formule de Green-Riemann'] = (q) => {
    const S = st(q), m = S.match(/\\omega = \((.*?)\)\\,dx \+ \((.*?)\)\\,dy/), P = texF(m[1]), Q = texF(m[2]), sens = /sens direct/.test(S) ? 1 : -1;
    const r = S.match(/\[0 ; (\d+)\] \\times \[0 ; (\d+)\]/), R = S.match(/rayon \$(\d+)\$/);
    let pts;
    if (r) pts = [[0, 0], [+r[1], 0], [+r[1], +r[2]], [0, +r[2]], [0, 0]];
    else { pts = []; const n = 40000; for (let i = 0; i <= n; i++) { const t = (2 * Math.PI * i) / n; pts.push([+R[1] * Math.cos(t), +R[1] * Math.sin(t)]); } }
    let I = 0;
    for (let i = 0; i + 1 < pts.length; i++) { const [x0, y0] = pts[i], [x1, y1] = pts[i + 1], xm = (x0 + x1) / 2, ym = (y0 + y1) / 2; I += P(xm, ym) * (x1 - x0) + Q(xm, ym) * (y1 - y0); }
    I *= sens;
    const a = String(q.answer).replace(/\$/g, '');
    const v = /\\pi/.test(a) ? (a === '\\pi' ? 1 : a === '-\\pi' ? -1 : +a.replace('\\pi', '')) * Math.PI : num(q.answer);
    return Math.abs(v - I) <= 1e-6 * Math.max(1, Math.abs(I)) ? true : `Green-Riemann : attendu ≈ ${I} / réponse ${q.answer}`;
  };
  F["Différentielle extérieure d'une 1-forme"] = (q) => {
    const S = st(q), m = S.match(/\\omega = \((.*?)\)\\,dx \+ \((.*?)\)\\,dy/), P = texF(m[1]), Q = texF(m[2]), pt = S.match(/h\((-?\d+), (-?\d+)\) \?/), x = +pt[1], y = +pt[2], e = 1e-4;
    return cmpN(q, entier((Q(x + e, y) - Q(x - e, y)) / (2 * e) - (P(x, y + e) - P(x, y - e)) / (2 * e), 'h'), 'd omega');
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
  const gprLin2 = (s) => { const r = { x: 0, y: 0, c: 0 }; for (const m of s.replace(/\s+/g, '').matchAll(/([+-]?)(\d*)([xy]?)/g)) { if (!m[0]) continue; const v = (m[1] === '-' ? -1 : 1) * (m[2] === '' ? 1 : +m[2]); r[m[3] || 'c'] += v; } return r; };
  const gprT = (q, e, m) => cmpT({ ...q, answer: String(q.answer).replace(/\\left|\\right/g, '') }, e, m);
  const gprFxy2 = (q) => { const m = st(q).match(/f\(x ; y\) = \\left\((.*?) ; (.*?)\\right\)/); return [gprLin2(m[1]), gprLin2(m[2])]; };
  F["Centre d'une homothétie donnée en coordonnées"] = (q) => { const [u, v] = gprFxy2(q); if (u.x !== v.y || u.y !== 0 || v.x !== 0) return 'expression'; return gprT(q, [u.c / (1 - u.x), v.c / (1 - u.x)], 'centre'); };
  F["Point fixe d'une application affine"] = (q) => { const [u, v] = gprFxy2(q); const D = (u.x - 1) * (v.y - 1) - u.y * v.x; if (!D) return 'déterminant nul'; return gprT(q, [(-u.c * (v.y - 1) + u.y * v.c) / D, (-(u.x - 1) * v.c + v.x * u.c) / D], 'point fixe'); };
  F["Image d'une droite par une inversion"] = (q) => { const m = st(q).match(/puissance \$k = (\d+)\$, et \$D\$ la droite d'équation \$([xy]) = (-?\d+)\$/); const c = +m[1] / (2 * +m[3]); return gprT(q, m[2] === 'x' ? [c, 0] : [0, c], 'centre'); };
  F["Ordre d'une rotation du groupe diédral"] = (q) => { const m = st(q).match(/D_\{(\d+)\}.*r\^\{(\d+)\}\$ \?/); const n = +m[1], k = +m[2]; return cmpN(q, n / gcd(n, k), 'ordre'); };
  F["Éléments d'ordre 2 du groupe diédral"] = (q) => { const n = +st(q).match(/D_\{(\d+)\}/)[1]; let e = n; for (let k = 1; k < n; k++) if ((2 * k) % n === 0) e++; return cmpN(q, e, 'involutions'); };
  F["Coloriages d'un polygone à isométrie près"] = (q) => {
    const n = { 'triangle équilatéral': 3, 'carré': 4, 'pentagone régulier': 5, 'hexagone régulier': 6 }[st(q).match(/sommets d'un (.*?) avec/)[1]]; const c = +st(q).match(/avec \$(\d+)\$ couleurs/)[1];
    const seen = new Set(); const total = c ** n;
    const dec = (i) => { const a = []; for (let j = 0; j < n; j++) { a.push(i % c); i = Math.floor(i / c); } return a; };
    let orb = 0;
    for (let i = 0; i < total; i++) { if (seen.has(i)) continue; orb++; const a = dec(i); for (let r = 0; r < n; r++) for (const sgn of [1, -1]) { let w = 0, p = 1; for (let j = 0; j < n; j++) { w += a[(((r + sgn * j) % n) + n) % n] * p; p *= c; } seen.add(w); } }
    return cmpN(q, orb, 'orbites');
  };
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
  F["Aire d'un morceau de surface"] = (q) => { const [a, b] = lin(st(q).match(/plan \$z = ([^$]*)\$/)[1], 'xy'); const m = st(q).match(/\[0(?:,| ;) (\d+)\] \\times \[0(?:,| ;) (\d+)\]/); return cmpA(q, +m[1] * +m[2] * Math.sqrt(1 + a * a + b * b), 'aire'); };
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

  // Analyse numérique (L3-NUM) : interpolation, quadrature, Newton, Euler, gradient
  F['Méthode de Newton : une itération'] = (q) => {
    const m = st(q).match(/f\(x\) = x\^(\d) - (\d+)\$.*x_0 = (\d+)\$/);
    const [n, a, x] = [+m[1], +m[2], +m[3]];
    return cmpA(q, x - (x ** n - a) / (n * x ** (n - 1)), 'Newton');
  };
  F["Schéma d'Euler explicite : deux pas"] = (q) => {
    const m = st(q).match(/y' = ([^$]*)\$, \$y\(0\) = (-?\d+)\$.*h = ([^$]*)\$/);
    const g = fn(m[1], 'y'); const h = val(m[3]); let y = +m[2];
    y += h * g(y); y += h * g(y);
    return cmpA(q, y, 'Euler');
  };
  F["Polynôme d'interpolation de Lagrange"] = (q) => {
    const m = st(q).match(/P\((-?\d+)\) = (-?\d+)\$, \$P\((-?\d+)\) = (-?\d+)\$ et \$P\((-?\d+)\) = (-?\d+)\$\. Calculer \$P\((-?\d+)\)/).slice(1).map(Number);
    const [x0, y0, x1, y1, x2, y2, t] = m;
    const f01 = (y1 - y0) / (x1 - x0), f12 = (y2 - y1) / (x2 - x1), f012 = (f12 - f01) / (x2 - x0);
    return cmpA(q, y0 + f01 * (t - x0) + f012 * (t - x0) * (t - x1), 'Lagrange');
  };
  F['Méthode composite des trapèzes'] = (q) => {
    const m = st(q).match(/int_\{(-?\d+)\}\^\{(-?\d+)\}.*f\(x\) = ([^$]*)\$ et le pas \$h = ([^$]*)\$/);
    const [a, b] = [+m[1], +m[2]]; const g = fn(m[3]); const h = fv(m[4]); const N = Math.round((b - a) / h);
    let s = (g(a) + g(b)) / 2; for (let i = 1; i < N; i++) s += g(a + i * h);
    return cmpA(q, s * h, 'trapèzes');
  };
  F['Formule de Simpson'] = (q) => {
    const m = st(q).match(/int_\{(-?\d+)\}\^\{(-?\d+)\}.*f\(x\) = ([^$]*)\$\./);
    const [a, b] = [+m[1], +m[2]]; const g = fn(m[3]);
    return cmpA(q, simp(g, a, b, 200), 'Simpson (valeur exacte pour un degré 3)');
  };
  F["Différence divisée d'ordre 2"] = (q) => {
    const m = st(q).match(/f\((-?\d+)\) = (-?\d+)\$, \$f\((-?\d+)\) = (-?\d+)\$ et \$f\((-?\d+)\) = (-?\d+)\$/).slice(1).map(Number);
    const x = [m[0], m[2], m[4]], y = [m[1], m[3], m[5]];
    let s = 0; for (let i = 0; i < 3; i++) { let p = 1; for (let j = 0; j < 3; j++) if (j !== i) p *= x[i] - x[j]; s += y[i] / p; }
    return cmpA(q, s, 'différence divisée');
  };
  F['Méthode des trapèzes : nombre de sous-intervalles'] = (q) => {
    const m = st(q).match(/\[0 ; (\d+)\]\$ avec \$\|f''\| \\le (\d+)\$.*10\^\{-(\d+)\}/);
    const [L, M, k] = [+m[1], +m[2], +m[3]]; const N = num(q.answer); const K = L ** 3 * M * 10 ** k;
    return 12 * N * N >= K && 12 * (N - 1) ** 2 < K ? true : `N minimal faux : ${q.answer}`;
  };
  F['Méthode du gradient : pas et convergence'] = (q) => {
    const m = st(q).match(/pmatrix\} (-?\d+) & (-?\d+) \\\\ (-?\d+) & (-?\d+) \\end/).slice(1).map(Number);
    if (m[1] !== m[2] || m[0] !== m[3] || Math.abs(m[1]) >= m[0]) return 'matrice non SDP';
    const lmin = m[0] - Math.abs(m[1]), lmax = m[0] + Math.abs(m[1]);
    if (/qui minimise/.test(st(q))) return cmpA(q, 2 / (lmin + lmax), 'pas optimal');
    if (/meilleur pas fixe/.test(st(q))) { const a = 2 / (lmin + lmax); return cmpA(q, Math.max(Math.abs(1 - a * lmin), Math.abs(1 - a * lmax)), 'facteur optimal'); }
    return cmpA(q, 2 / lmax, 'borne du pas');
  };
  // Statistique et vecteurs gaussiens (L3-PRC)
  F['Risque quadratique de la moyenne empirique'] = (q) => {
    const n = +st(q).match(/X_\{(\d+)\}/)[1], v = +st(q).match(/sigma\^2 = (\d+)\$/)[1];
    return cmpA(q, v / n, 'risque');
  };
  F["Biais d'un estimateur"] = (q) => {
    const m = +st(q).match(/mu = (-?\d+)\$/)[1], c = fv(st(q).match(/T = ([^$]*?)\\,\\bar/)[1]);
    return cmpA(q, (c - 1) * m, 'biais');
  };
  F["Demi-largeur d'un intervalle de confiance"] = (q) => {
    const n = +st(q).match(/n = (\d+)\$/)[1], s = +st(q).match(/sigma = (\d+)\$/)[1];
    return cmpA(q, 1.96 * s / Math.sqrt(n), 'demi-largeur', 1e-5);
  };
  F['Test bilatéral sur une moyenne'] = (q) => {
    const n = +st(q).match(/n = (\d+)\$/)[1], s = +st(q).match(/sigma = (\d+)\$/)[1], x = val(st(q).match(/bar\{x\} = ([^$]*)\$/)[1]), m0 = +st(q).match(/H_0 : \\mu = (\d+)\$/)[1];
    const z = Math.sqrt(n) * (x - m0) / s;
    const a = String(q.answer); const zA = val(a.match(/z = ([^$]*)\$/)[1]);
    if (Math.abs(zA - z) > 1e-6) return `z faux : ${a} (attendu ${z})`;
    const rej = !/ne rejette pas/.test(a);
    return rej === (Math.abs(z) > 1.96) ? true : `décision fausse : ${a}`;
  };
  F['Décorréler deux composantes gaussiennes'] = (q) => {
    const m = st(q).match(/Var\}\(X\) = (\d+)\$, \$\\text\{Var\}\(Y\) = (\d+)\$ et \$\\text\{Cov\}\(X, Y\) = (-?\d+)\$/).slice(1).map(Number);
    if (m[2] ** 2 >= m[0] * m[1]) return 'matrice de covariance impossible';
    return cmpA(q, m[2] / m[0], 'coefficient');
  };
  F['Intervalle de confiance sur une proportion'] = (q) => {
    const n = +st(q).match(/n = (\d+)\$/)[1], p = val(st(q).match(/hat\{p\} = ([^$]*)\$/)[1]);
    return cmpA(q, 1.96 * Math.sqrt(p * (1 - p) / n), 'proportion', 1e-5);
  };
  F['Estimateur du maximum de vraisemblance'] = (q) => {
    const n = +st(q).match(/n = (\d+)\$/)[1], S = +st(q).match(/x_i = (\d+)\$/)[1];
    return cmpA(q, /exponentielle/.test(st(q)) ? n / S : S / n, 'EMV');
  };

  // ---------------------------------------------------------------- L3 : familles ajoutées par l'audit pédagogique
  F['Système de congruences et théorème des restes chinois'] = (q) => {
    const N = +st(q).match(/\\\{0, \\dots, (\d+)\\\}/)[1];
    const cs = [...st(q).matchAll(/\\equiv (\d+) \\pmod\{(\d+)\}/g)].map((m) => [+m[1], +m[2]]);
    const sols = []; for (let x = 0; x <= N; x++) if (cs.every(([a, m]) => x % m === a % m)) sols.push(x);
    if (sols.length !== 1) return 'solution non unique : ' + sols;
    return cmpN(q, sols[0], 'restes chinois');
  };
  F["Solution maximale d'un problème de Cauchy"] = (q) => {
    const m = st(q).match(/y' = (-?\d*)y\^2\$, \$y\(0\) = (-?\d+)\$/);
    const a = m[1] === '' ? 1 : m[1] === '-' ? -1 : +m[1]; const b = +m[2];
    // y(t) = b / (1 - a b t) : explosion en t* = 1/(ab)
    const A = strip(q.answer).trim();
    if (b === 0) return A === '\\mathbb{R}' || 'R attendu';
    const iv = A.match(/^\](.*) ; (.*)\[$/); if (!iv) return 'intervalle illisible ' + A;
    const bd = (s) => (s === '-\\infty' ? -Infinity : s === '+\\infty' ? Infinity : val(s));
    const ts = 1 / (a * b); const exp = ts > 0 ? [-Infinity, ts] : [ts, Infinity];
    const got = [bd(iv[1]), bd(iv[2])];
    return (got.every((g, i) => (Number.isFinite(exp[i]) ? near(g, exp[i]) : g === exp[i]))) || `solution maximale : attendu ]${exp.join(' ; ')}[`;
  };
  F['Rayon de convergence (Cauchy-Hadamard)'] = (q) => {
    const c = st(q).match(/\\sum_\{n \\geq 1\} (.*?) z\^n\$/)[1].replace(/\\left|\\right/g, '').replace(/^n(\^\{\d+\})? (\\times )?/, ''); // le facteur polynomial ne change pas le rayon
    const m = c.match(/^\(?(\\frac\{\d+\}\{\d+\}|\d+)\)?\^n$/); if (!m) return 'coefficient non reconnu ' + c;
    return cmpN(q, 1 / val(m[1]), 'rayon'); // |a_n|^{1/n} = a
  };
  F["Différentielle extérieure d'une 1-forme"] = (q) => {
    const m = st(q).match(/\\omega = \((.*?)\)\\,dx \+ \((.*?)\)\\,dy\$.*h\((-?\d+), (-?\d+)\)/);
    const x0 = +m[3], y0 = +m[4];
    const at = (tex, x, y) => fn(tex.replace(/y/g, `(${y})`), 'x')(x);
    // dérivée à 5 points : exacte (aux arrondis près) pour les polynômes de degré au plus 4
    const h = 1e-2; const d5 = (g) => (-g(2 * h) + 8 * g(h) - 8 * g(-h) + g(-2 * h)) / (12 * h);
    const dQdx = d5((e) => at(m[2], x0 + e, y0));
    const dPdy = d5((e) => at(m[1], x0, y0 + e));
    return cmpA(q, dQdx - dPdy, 'dω', 1e-5);
  };
  F["Factorisation LU d'une matrice 3×3"] = (q) => {
    const A = mats(st(q))[0]; const n = 3; const L = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]; const U = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) U[i][j] = A[i][j] - [...Array(i).keys()].reduce((s, k) => s + L[i][k] * U[k][j], 0);
      for (let j = i + 1; j < n; j++) L[j][i] = (A[j][i] - [...Array(i).keys()].reduce((s, k) => s + L[j][k] * U[k][i], 0)) / U[i][i];
    }
    const w = st(q).match(/coefficient \$(u|\\ell)_\{(\d)(\d)\}\$/); const M = w[1] === 'u' ? U : L;
    return cmpN(q, M[+w[2] - 1][+w[3] - 1], 'LU 3x3');
  };
  F['Méthode de Gauss-Seidel sur un système 3×3'] = (q) => {
    const rows = st(q).match(/\\begin\{cases\} (.*?) \\end\{cases\}/)[1].split(' \\\\ ').map((r) => { const [l, b] = r.split(' = '); return [lin(l, 'xyz'), val(b)]; });
    const x = [0, 0, 0];
    for (let i = 0; i < 3; i++) { const [a, b] = rows[i]; x[i] = (b - a.reduce((s, c, j) => (j === i ? s : s + c * x[j]), 0)) / a[i]; }
    const w = st(q).match(/Que vaut \$([xyz])\^\{\(1\)\}\$/);
    return w ? cmpN(q, x['xyz'.indexOf(w[1])], 'Gauss-Seidel') : cmpT(q, x, 'Gauss-Seidel');
  };
  F['Factorisation de Cholesky 3×3'] = (q) => {
    const A = mats(st(q))[0]; const L = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    for (let j = 0; j < 3; j++) {
      L[j][j] = Math.sqrt(A[j][j] - [...Array(j).keys()].reduce((s, k) => s + L[j][k] ** 2, 0));
      for (let i = j + 1; i < 3; i++) L[i][j] = (A[i][j] - [...Array(j).keys()].reduce((s, k) => s + L[i][k] * L[j][k], 0)) / L[j][j];
    }
    const r = /troisième ligne/.test(st(q)) ? 2 : /deuxième ligne/.test(st(q)) ? 1 : -1;
    if (r < 0) return 'ligne demandée non reconnue';
    return cmpT(q, L[r].slice(0, r + 1), 'Cholesky');
  };
  /** programme linéaire « max Z = … sous …, x_1, x_2 ≥ 0 » en base des écarts ; premier pivot de Dantzig */
  const simplex1 = (s) => {
    const c = lin(s.match(/\\max\\, Z = (.*?) sous/)[1].replace(/x_1/g, 'a').replace(/x_2/g, 'b'), 'ab');
    const rows = [...s.split(' sous ')[1].matchAll(/\$([^$]*?) \\le (\d+)\$/g)].map((m) => [lin(m[1].replace(/x_1/g, 'a').replace(/x_2/g, 'b'), 'ab'), +m[2]]);
    const e = c[0] >= c[1] ? 0 : 1; // Dantzig : plus grand coût positif
    let r = -1, best = Infinity;
    rows.forEach(([a, b], i) => { if (a[e] > 0 && b / a[e] < best - 1e-12) { best = b / a[e]; r = i; } });
    return { c, rows, e, r, Z: c[e] * best };
  };
  F['Simplexe : premier pivot'] = (q) => {
    const P = simplex1(st(q)); const m = strip(q.answer).match(/^s_(\d) sort et Z = (.*)$/);
    if (!m) return 'réponse illisible';
    return (+m[1] === P.r + 1 && near(val(m[2]), P.Z)) || `pivot : attendu s_${P.r + 1}, Z = ${P.Z}`;
  };
  F['Simplexe : coût réduit après un pivot'] = (q) => {
    const P = simplex1(st(q)); const o = 1 - P.e; const a = P.rows[P.r][0];
    const cb = P.c[o] - P.c[P.e] * a[o] / a[P.e];
    const m = q.answer.match(/^\$\\bar\{c\}_\{x_(\d)\} = (.*?)\$ : (.*)$/); if (!m) return 'réponse illisible';
    if (+m[1] !== o + 1 || !near(val(m[2]), cb)) return `coût réduit attendu ${cb}`;
    if (cb > 1e-12) return /n'est pas optimale, \$x_\d\$ entre/.test(m[3]) || 'conclusion : non optimale attendue';
    const z = m[3].match(/optimale, avec \$Z\^\{\\ast\} = (.*?)\$/);
    return (z && near(val(z[1]), P.Z)) || 'conclusion : optimum ' + P.Z;
  };
  F['Inégalité de Markov'] = (q) => {
    const m = st(q).match(/f\(x\) = (\d+)\\,e\^\{-(\d*)\|x\|\}\$.*\\\{f \\geq (\d+)\\\}/);
    const c = +m[1], a = m[2] ? +m[2] : 1, t = +m[3];
    return cmpA(q, simp((x) => 2 * c * Math.exp(-a * x), 0, 60 / a, 20000) / t, 'Markov');
  };
  F['Convergence dominée : hypothèse en défaut'] = (q) => {
    const s = st(q); let m; let I;
    if ((m = s.match(/f_n = (\d+)\\,\\mathbf\{1\}_\{\[n ; n \+ (\d+)\]\}/))) I = (n) => +m[1] * +m[2];
    else if ((m = s.match(/f_n = (\d*)n\\,\\mathbf\{1\}_\{\]0 ; \\frac\{1\}\{n\}\]\}/))) I = (n) => (m[1] ? +m[1] : 1) * n * (1 / n);
    else if ((m = s.match(/f_n = (\d*)n\^2\\,\\mathbf\{1\}_\{\]0 ; \\frac\{1\}\{n\}\]\}/))) I = (n) => (m[1] ? +m[1] : 1) * n;
    else return 'suite non reconnue';
    const L = I(1e6); const A = rhs(q.answer);
    if (L > 1e5) return A === '+\\infty' || 'limite +∞ attendue';
    return cmpN(q, I(1e6), 'conv dominée en défaut');
  };
  F['Lemme de Fatou'] = (q) => {
    const m = st(q).match(/f_n = (?:(\d+)\\,)?\\mathbf\{1\}_\{\[0 ; (\d+)\]\}\$ si \$n\$ est pair et \$f_n = (?:(\d+)\\,)?\\mathbf\{1\}_\{\[0 ; (\d+)\]\}\$ si \$n\$ est impair/);
    const [c1, a1, c2, a2] = m.slice(1).map((v) => (v === undefined ? 1 : +v));
    const intLiminf = Math.min(c1, c2) * Math.min(a1, a2); const liminfInt = Math.min(c1 * a1, c2 * a2);
    const am = q.answer.match(/liminf f_n \\, d\\lambda = (\d+)\$ et \$\\liminf \\int f_n \\, d\\lambda = (\d+)\$/);
    return (am && +am[1] === intLiminf && +am[2] === liminfInt) || `Fatou : attendu ${intLiminf} et ${liminfInt}`;
  };
  F["Loi uniforme continue : moment d'ordre 2"] = (q) => {
    const m = st(q).match(/loi uniforme sur \$\[(-?\d+) ; (-?\d+)\]\$/); const a = +m[1], b = +m[2];
    return cmpN(q, (a * a + a * b + b * b) / 3, 'E(X²) uniforme');
  };
  F['Loi exponentielle : absence de mémoire'] = (q) => {
    const l = +st(q).match(/\\lambda = (\d+)\$/)[1]; const m = st(q).match(/P\(X > (\d+) \\mid X > (\d+)\)/);
    const k = l * (m[1] - m[2]); const A = strip(q.answer).trim();
    return A === `e^{-${k}}` || `e^{-${k}} attendu`;
  };
  F['Minimum de deux lois exponentielles indépendantes'] = (q) => {
    const ls = [...st(q).matchAll(/\\mathcal\{E\}\((\d+)\)/g)].map((m) => +m[1]);
    if (!/Que vaut \$E\(T\)\$/.test(st(q))) return 'question non reconnue';
    return cmpN(q, 1 / (ls[0] + ls[1]), 'E(min)');
  };
  F["Vecteur gaussien : variance d'une combinaison linéaire"] = (q) => {
    const S = mats(st(q))[0]; const c = lin(st(q).match(/\\text\{Var\}\((.*?)\)\$/)[1], 'XY');
    return cmpN(q, c[0] ** 2 * S[0][0] + 2 * c[0] * c[1] * S[0][1] + c[1] ** 2 * S[1][1], 'Var gaussienne');
  };
  // ---------------------------------------------------------------- familles L3 ajoutées (saisie native, recalcul par énumération ou calcul numérique)
  const xbN = (s) => { const t = String(s).trim().replace(/\{,\}/g, '.').replace(',', '.'); const m = t.match(/^(-?\d+)\/(\d+)$/); return m ? m[1] / m[2] : (/^-?\d+(\.\d+)?$/.test(t) ? parseFloat(t) : NaN); };
  const xbT = (s) => { const m = String(s).trim().match(/^\((.*)\)$/); return m ? m[1].split(';').map(xbN) : null; };
  const xbOK = (q, exp, msg, tol = 1e-9) => (near(xbN(q.answer), exp, tol) ? true : `${msg}: attendu ${exp} / réponse ${q.answer}`);
  const xbOKT = (q, exp, msg, tol = 1e-9) => { const g = xbT(q.answer); return g && g.length === exp.length && g.every((x, i) => near(x, exp[i], tol)) ? true : `${msg}: attendu (${exp.join(';')}) / réponse ${q.answer}`; };
  const xbLin = (s, vars) => { // « 2x + 3y - 4 » -> { x: 2, y: 3, '': -4 } ; null si l'expression n'est pas affine
    const t = String(s).replace(/\s+/g, ''); const o = { '': 0 }; for (const v of vars) o[v] = 0;
    const re = new RegExp(`([+-]?)(\\d*)([${vars}]?)`, 'y'); let i = 0;
    while (i < t.length) {
      re.lastIndex = i; const m = re.exec(t);
      if (!m || !m[0] || (!m[2] && !m[3])) return null;
      const sg = m[1] === '-' ? -1 : 1;
      if (m[3]) o[m[3]] += sg * (m[2] ? +m[2] : 1); else o[''] += sg * +m[2];
      i = re.lastIndex;
    }
    return o;
  };
  const xbTrig = (s) => { // « -4 - \cos t + 2\sin(2t) » -> fonction de t
    const t = String(s).replace(/\s+/g, ''); const terms = []; const re = /([+-]?)(\d*)(?:\\(cos|sin)(?:t|\((\d+)t\)))?/y; let i = 0;
    while (i < t.length) {
      re.lastIndex = i; const m = re.exec(t);
      if (!m || !m[0] || (!m[2] && !m[3])) return null;
      terms.push([(m[1] === '-' ? -1 : 1) * (m[2] ? +m[2] : 1), m[3], m[4] ? +m[4] : 1]); i = re.lastIndex;
    }
    return (x) => terms.reduce((acc, [c, fn, k]) => acc + c * (fn ? Math[fn](k * x) : 1), 0);
  };
  const xbInt = (f, a, b, N = 4096) => { let s = 0; const h = (b - a) / N; for (let i = 0; i < N; i++) s += f(a + (i + 0.5) * h); return s * h; };
  F['Nombre de sous-groupes de $\\mathbb{Z}/n\\mathbb{Z}$'] = (q) => {
    const n = +st(q).match(/\(\\mathbb\{Z\}\/(\d+)\\mathbb\{Z\}, \+\)/)[1];
    const subs = new Set();
    for (let a = 0; a < n; a++) { const H = []; let x = 0; do { H.push(x); x = (x + a) % n; } while (x !== 0); subs.add(H.sort((u, v) => u - v).join(',')); }
    return xbOK(q, subs.size, 'sous-groupes');
  };
  F['Ordre d\'un élément de $(\\mathbb{Z}/n\\mathbb{Z})^\\times$'] = (q) => {
    const m = st(q).match(/\(\\mathbb\{Z\}\/(\d+)\\mathbb\{Z\}\)\^\\times\$, déterminer l'ordre de la classe \$\\bar\{(\d+)\}\$/);
    const n = +m[1]; const a = +m[2]; let k = 1; let x = a % n;
    while (x !== 1) { x = (x * a) % n; k++; if (k > n) return 'élément non inversible'; }
    return xbOK(q, k, 'ordre');
  };
  F['Morphismes entre groupes cycliques'] = (q) => {
    const m = st(q).match(/de \$\(\\mathbb\{Z\}\/(\d+)\\mathbb\{Z\}, \+\)\$ dans \$\(\\mathbb\{Z\}\/(\d+)\\mathbb\{Z\}, \+\)\$/);
    const s = +m[1]; const n = +m[2]; let c = 0;
    for (let y = 0; y < n; y++) if ((s * y) % n === 0) c++; // image de 1 d'ordre divisant s
    return xbOK(q, c, 'morphismes');
  };
  F['Éléments d\'ordre divisant $k$ dans un produit'] = (q) => {
    const m = st(q).match(/G = \\mathbb\{Z\}\/(\d+)\\mathbb\{Z\} \\times \\mathbb\{Z\}\/(\d+)\\mathbb\{Z\}\$, combien d'éléments \$x\$ vérifient \$(\d+)x = 0\$/);
    const a = +m[1]; const b = +m[2]; const k = +m[3]; let c = 0;
    for (let x = 0; x < a; x++) for (let y = 0; y < b; y++) if ((k * x) % a === 0 && (k * y) % b === 0) c++;
    return xbOK(q, c, 'k-torsion');
  };
  F['Sylow : nombre d\'éléments d\'ordre $p$'] = (q) => {
    const m = st(q).match(/groupe d'ordre \$(\d+) = (\d+) \\times (\d+)\$\. On suppose que \$G\$ possède exactement \$(\d+)\$ sous-groupes de Sylow d'ordre \$(\d+)\$/);
    const N = +m[1]; const p = +m[2]; const r = +m[3]; const np = +m[4];
    const isP = (x) => x > 1 && Array.from({ length: x - 2 }, (_, i) => i + 2).every((d) => x % d);
    if (N !== p * r || +m[5] !== p || !isP(p) || r % p === 0) return 'données de Sylow incohérentes';
    if (np % p !== 1 || r % np !== 0) return `n_p = ${np} incompatible avec Sylow`;
    return xbOK(q, np * (p - 1), 'éléments d\'ordre p'); // sous-groupes d'ordre p d'intersection triviale
  };
  F['Reste d\'une puissance modulo un nombre premier'] = (q) => {
    const m = st(q).match(/de \$(\d+)\^\{(\d+)\}\$ par \$(\d+)\$/);
    const a = +m[1]; const e = +m[2]; const p = +m[3]; let v = 1;
    for (let i = 0; i < e; i++) v = (v * a) % p;
    return xbOK(q, v, 'reste');
  };
  F['Éléments nilpotents de $\\mathbb{Z}/n\\mathbb{Z}$'] = (q) => {
    const n = +st(q).match(/\\mathbb\{Z\}\/(\d+)\\mathbb\{Z\}\$ possède-t-il d'éléments nilpotents/)[1]; let c = 0;
    for (let a = 0; a < n; a++) { let x = 1; for (let k = 0; k < n; k++) x = (x * a) % n; if (x === 0) c++; }
    return xbOK(q, c, 'nilpotents');
  };
  F['Inversibles d\'un quotient $\\mathbb{F}_p[X]/(P)$'] = (q) => {
    const S = st(q); const p = +S.match(/\\mathbb\{F\}_\{(\d+)\}\[X\]/)[1];
    const P = S.match(/on pose \$P = X\^2(.*?)\$\. Combien/); const L = P && xbLin(P[1], 'X');
    if (!L) return 'polynôme non reconnu';
    const md = (x) => ((x % p) + p) % p; let c = 0;
    const mul = (u1, v1, u2, v2) => [md(u1 * u2 - v1 * v2 * L['']), md(u1 * v2 + u2 * v1 - v1 * v2 * L.X)]; // X^2 = -bX - c
    for (let u = 0; u < p; u++) for (let v = 0; v < p; v++) {
      let inv = false; for (let u2 = 0; u2 < p && !inv; u2++) for (let v2 = 0; v2 < p; v2++) { const [r0, r1] = mul(u, v, u2, v2); if (r0 === 1 && r1 === 0) { inv = true; break; } }
      if (inv) c++;
    }
    return xbOK(q, c, 'inversibles');
  };
  F['Norme $\\|\\cdot\\|_1$ d\'une fonction affine'] = (q) => {
    const L = xbLin(st(q).match(/pour \$f\(t\) = ([^$]*)\$/)[1], 't');
    if (!L) return 'fonction non reconnue';
    return xbOK(q, xbInt((t) => Math.abs(L.t * t + L['']), 0, 1, 200000), 'norme 1', 1e-7);
  };
  F['Distance d\'un point à une boule fermée'] = (q) => {
    const m = st(q).match(/norme \$\\\|\\cdot\\\|_\{(\\infty|1)\}\$, on note \$B\$ la boule fermée de centre \$A\((-?\d+) ; (-?\d+)\)\$ et de rayon \$(\d+)\$\. Calculer la distance \$d\(M, B\)\$ du point \$M\((-?\d+) ; (-?\d+)\)\$/);
    const nrm = m[1] === '1' ? (u, v) => Math.abs(u) + Math.abs(v) : (u, v) => Math.max(Math.abs(u), Math.abs(v));
    const A = [+m[2], +m[3]]; const r = +m[4]; const M = [+m[5], +m[6]];
    let best = nrm(M[0] - A[0], M[1] - A[1]) <= r ? 0 : Infinity;
    for (let k = 0; k < 200000 && best > 0; k++) { // points du bord de la boule
      const th = 2 * Math.PI * k / 200000; const u = Math.cos(th); const v = Math.sin(th); const s = r / nrm(u, v);
      best = Math.min(best, nrm(M[0] - A[0] - s * u, M[1] - A[1] - s * v));
    }
    return xbOK(q, best, 'distance à la boule', 1e-3);
  };
  F['Distance $p$-adique entre deux entiers'] = (q) => {
    const S = st(q); const p = +S.match(/distance \$(\d+)\$-adique/)[1]; const m = S.match(/Calculer \$d_\{\d+\}\((-?\d+), (-?\d+)\)\$/);
    let d = Math.abs(+m[1] - +m[2]); if (!d) return xbOK(q, 0, 'distance p-adique');
    let v = 0; while (d % p === 0) { d /= p; v++; }
    return xbOK(q, p ** -v, 'distance p-adique');
  };
  F['Point fixe d\'une contraction affine du plan'] = (q) => {
    const m = st(q).match(/F\(x, y\) = \\left\(\\frac\{([^}]*)\}\{(\d+)\} ; \\frac\{([^}]*)\}\{(\d+)\}\\right\)/);
    const L1 = xbLin(m[1], 'xy'); const L2 = xbLin(m[3], 'xy'); const d1 = +m[2]; const d2 = +m[4];
    if (!L1 || !L2) return 'application non reconnue';
    if ((Math.abs(L1.x) + Math.abs(L1.y)) / d1 >= 1 || (Math.abs(L2.x) + Math.abs(L2.y)) / d2 >= 1) return 'F non contractante pour la norme infinie';
    let x = 0; let y = 0;
    for (let k = 0; k < 400; k++) [x, y] = [(L1.x * x + L1.y * y + L1['']) / d1, (L2.x * x + L2.y * y + L2['']) / d2];
    return xbOKT(q, [x, y], 'point fixe', 1e-7);
  };
  F['Estimation a posteriori de l\'erreur'] = (q) => {
    const S = st(q); const k = S.match(/application \$\\frac\{(\d+)\}\{(\d+)\}\$-contractante/); const x = S.match(/x_\{\d+\} = ([\d{},]+)\$ et \$x_\{\d+\} = ([\d{},]+)\$/);
    if (!/^\d+(,\d+)?$/.test(String(q.answer).trim())) return `réponse non décimale : ${q.answer}`;
    const kk = k[1] / k[2];
    return xbOK(q, kk / (1 - kk) * Math.abs(xbN(x[2]) - xbN(x[1])), 'a posteriori', 1e-7);
  };
  F['Nombre de Lebesgue d\'un recouvrement'] = (q) => {
    const S = st(q); const K = S.match(/K = \[(-?\d+) ; (-?\d+)\]\$/).map(Number);
    const U = [...S.matchAll(/U_\d = \\left\]([-\d]+) ; ([-\d]+)\\right\[/g)].map((m) => [+m[1], +m[2]]);
    // g(s) : longueur maximale d'une partie [s ; s + d] de K contenue dans un U_i
    const g = (s) => Math.max(...U.map(([a, b]) => (a < s && s < b ? (b > K[2] ? Infinity : b - s) : -Infinity)));
    const pts = []; for (let i = 0; i <= (K[2] - K[1]) * 1000; i++) pts.push(K[1] + i / 1000);
    for (const [a, b] of U) pts.push(a, b);
    let inf = Infinity; for (const s of pts) if (s >= K[1] && s <= K[2]) inf = Math.min(inf, g(s));
    if (inf === -Infinity) return 'K non recouvert';
    return xbOK(q, inf, 'nombre de Lebesgue', 1e-6);
  };
  F['Extremums sur un carré compact'] = (q) => {
    const S = st(q); const m = S.match(/K = \[(-?\d+) ; (\d+)\]\^2\$ et \$f\(x, y\) = (.*?)\$\. Justifier/);
    const c = +m[2]; const cen = (v) => { const r = m[3].match(new RegExp(`\\(${v} ([+-]) (\\d+)\\)\\^2`)); return r ? (r[1] === '-' ? +r[2] : -r[2]) : (m[3].includes(`${v}^2`) ? 0 : NaN); };
    const p = cen('x'); const pq = cen('y'); if (Number.isNaN(p) || Number.isNaN(pq) || +m[1] !== -c) return 'fonction non reconnue';
    let M = -Infinity; let mi = Infinity;
    for (let i = -100 * c; i <= 100 * c; i++) for (let j = -100 * c; j <= 100 * c; j++) { const v = (i / 100 - p) ** 2 + (j / 100 - pq) ** 2; M = Math.max(M, v); mi = Math.min(mi, v); }
    return xbOKT(q, [M, mi], 'extremums', 1e-9);
  };
  F['Rang à partir duquel l\'écart uniforme est petit'] = (q) => {
    const S = st(q); const m = S.match(/f_n\(x\) = \\frac\{(\d*)\\(?:cos|sin)\(nx\)\}\{n \+ (\d+)\}\$/); const e = S.match(/\\leq 0\{,\}(\d+)\$/);
    const a = m[1] ? +m[1] : 1; const b = +m[2]; const num = +e[1]; const den = 10 ** e[1].length;
    let n = 1; while (a * den > num * (n + b)) n++; // sup |f_n| = a / (n + b) <= num / den
    return xbOK(q, n, 'rang');
  };
  F['Limite des intégrales sans convergence uniforme'] = (q) => {
    const m = st(q).match(/f_n\(x\) = (\d+)\\,n(\^2)?\\,x\(1 - x(\^2)?\)\^n/);
    const c = +m[1]; const e = m[2] ? 2 : 1; const sq = m[3] ? 2 : 1;
    const I = (n) => xbInt((x) => c * n ** e * x * (1 - x ** sq) ** n, 0, 1, 400000);
    return xbOK(q, 2 * I(2000) - I(1000), 'limite des intégrales', 1e-4); // extrapolation de Richardson
  };
  F['Dérivation terme à terme d\'une série trigonométrique'] = (q) => {
    const m = st(q).match(/\\frac\{(\d*)\\(cos|sin)\(nx\)\}\{(\d+)\^n\}/);
    const a = m[1] ? +m[1] : 1; const fn = m[2]; const r = +m[3];
    const Sx = (x) => { let s = 0; for (let n = 1; n < 200; n++) s += a * Math[fn](n * x) / r ** n; return s; };
    const h = 1e-3;
    const exp = fn === 'sin' ? (Sx(h) - Sx(-h)) / (2 * h) : (Sx(h) - 2 * Sx(0) + Sx(-h)) / (h * h);
    return xbOK(q, exp, 'dérivée de S en 0', 1e-4);
  };
  F['Somme d\'une série entière géométrique'] = (q) => {
    const m = st(q).match(/\\frac\{x\^n\}\{(\d+)\^n\}\$\..*?calculer \$f\((-?\d+)\)\$/);
    const a = +m[1]; const b = +m[2]; let s = 0; for (let n = 0; n < 5000; n++) s += (b / a) ** n;
    const R = 1 / Math.pow(1 / a ** 2000, 1 / 2000); // Cauchy-Hadamard sur |1/a^n|^(1/n)
    return xbOKT(q, [R, s], 'rayon et somme', 1e-7);
  };
  F['Somme de $\\sum n x^n$ par dérivation'] = (q) => {
    const m = st(q).match(/n\\left\((-?)\\frac\{(\d+)\}\{(\d+)\}\\right\)\^n/);
    const x = (m[1] ? -1 : 1) * m[2] / m[3]; let s = 0; for (let n = 1; n < 20000; n++) s += n * x ** n;
    return xbOK(q, s, 'somme de n x^n', 1e-8);
  };
  F['Équation différentielle résolue par série entière'] = (q) => {
    const m = st(q).match(/y' = (-?\d+)y\$, \$y\(0\) = (-?\d+)\$.*?Calculer \$c_\{(\d+)\}\$/);
    const a = +m[1]; const b = +m[2]; const k = +m[3];
    // c_k = y^(k)(0) / k!, avec y^(k) = a^k y obtenu en dérivant l'équation
    let d = b; let f = 1; for (let i = 1; i <= k; i++) { d *= a; f *= i; }
    return xbOK(q, d / f, 'coefficient c_k');
  };
  F['Rayon de convergence d\'une série à coefficients binomiaux'] = (q) => {
    const m = st(q).match(/\\binom\{(\d)n\}\{n\} (?:(\d+)\^n )?z\^n/);
    const k = +m[1]; const a = m[2] ? +m[2] : 1; const n = 200000;
    let lg = 0; for (let i = 1; i <= n; i++) lg += Math.log((k - 1) * n + i) - Math.log(i); // log binom(kn, n)
    return xbOK(q, 1 / (a * Math.exp(lg / n)), 'rayon (Cauchy-Hadamard)', 1e-3);
  };
  F['Coefficients de Fourier d\'une fonction transformée'] = (q) => {
    const S = st(q); const m = S.match(/a_\{(\d+)\}\(f\) = (-?\d+)\$ et \$b_\{\d+\}\(f\) = (-?\d+)\$/); const gm = S.match(/On pose \$g\(t\) = (.*?)\$\. Donner/);
    const n = +m[1]; const A = +m[2]; const B = +m[3];
    const f = (t) => 0.7 + A * Math.cos(n * t) + B * Math.sin(n * t) + 1.3 * Math.cos((n + 1) * t) - 0.4 * Math.sin((n + 2) * t);
    let g;
    if (gm[1] === 'f(t + \\pi)') g = (t) => f(t + Math.PI);
    else if (gm[1] === 'f(-t)') g = (t) => f(-t);
    else { const r = gm[1].match(/^(-?\d*)f\(t\) ([+-]) (\d+)$/); if (!r) return 'transformée non reconnue'; const c = r[1] === '-' ? -1 : (r[1] ? +r[1] : 1); const d = (r[2] === '-' ? -1 : 1) * r[3]; g = (t) => c * f(t) + d; }
    const an = xbInt((t) => g(t) * Math.cos(n * t), -Math.PI, Math.PI) / Math.PI; const bn = xbInt((t) => g(t) * Math.sin(n * t), -Math.PI, Math.PI) / Math.PI;
    return xbOKT(q, [an, bn], 'coefficients de g', 1e-7);
  };
  F['Produit scalaire de deux polynômes trigonométriques'] = (q) => {
    const m = st(q).match(/pour \$f\(t\) = (.*?)\$ et \$g\(t\) = (.*?)\$\./);
    const f = xbTrig(m[1]); const g = xbTrig(m[2]); if (!f || !g) return 'polynôme trigonométrique non reconnu';
    return xbOK(q, xbInt((t) => f(t) * g(t), 0, 2 * Math.PI) / (2 * Math.PI), 'produit scalaire', 1e-8);
  };
  F['Coefficients de Fourier de la dérivée'] = (q) => {
    const m = st(q).match(/a_\{(\d+)\}\(f\) = (-?\d+)\$ et \$b_\{\d+\}\(f\) = (-?\d+)\$/);
    const n = +m[1]; const A = +m[2]; const B = +m[3]; const h = 1e-5;
    const f = (t) => 0.5 + A * Math.cos(n * t) + B * Math.sin(n * t) + 0.9 * Math.sin((n + 1) * t);
    const fp = (t) => (f(t + h) - f(t - h)) / (2 * h);
    const an = xbInt((t) => fp(t) * Math.cos(n * t), -Math.PI, Math.PI) / Math.PI; const bn = xbInt((t) => fp(t) * Math.sin(n * t), -Math.PI, Math.PI) / Math.PI;
    return xbOKT(q, [an, bn], 'coefficients de f\'', 1e-5);
  };
  F['Homographie de la droite projective'] = (q) => {
    const S = st(q); const m = S.match(/h\(z\) = \\frac\{(.*?)\}\{(.*?)\}\$/); const t = +S.match(/\(h\((-?\d+)\) ; h\(\\infty\) ; z_0\)/)[1];
    const N = xbLin(m[1], 'z'); const D = xbLin(m[2], 'z'); if (!N || !D) return 'homographie non reconnue';
    const h = (z) => (N.z * z + N['']) / (D.z * z + D['']); const got = xbT(q.answer);
    if (!got || got.length !== 3) return `réponse non reconnue : ${q.answer}`;
    if (Math.abs(D.z * got[2] + D['']) > 1e-9) return `z_0 = ${got[2]} n'annule pas le dénominateur`;
    return xbOKT(q, [h(t), h(1e9), got[2]], 'homographie', 1e-6);
  };
  F['Variables d\'écart en un point'] = (q) => {
    const S = st(q); const m = S.match(/Les contraintes \$(.*?) \\leq (\d+)\$, \$(.*?) \\leq (\d+)\$/); const P = S.match(/au point \$\(x ; y\) = \((-?\d+) ; (-?\d+)\)\$/);
    const L1 = xbLin(m[1], 'xy'); const L2 = xbLin(m[3], 'xy'); const x = +P[1]; const y = +P[2];
    return xbOKT(q, [m[2] - (L1.x * x + L1.y * y), m[4] - (L2.x * x + L2.y * y)], 'variables d\'écart');
  };
  F['Écart de dualité'] = (q) => {
    const S = st(q).replace(/x_1/g, 'u').replace(/x_2/g, 'v');
    const m = S.match(/maximiser \$(.*?)\$ sous \$(.*?) \\leq (\d+)\$, \$(.*?) \\leq (\d+)\$/);
    const x = S.match(/point \$x = \((\d+), (\d+)\)\$/).slice(1).map(Number); const y = S.match(/\$y = \((\d+), (\d+)\)\$/).slice(1).map(Number);
    const c = xbLin(m[1], 'uv'); const A1 = xbLin(m[2], 'uv'); const A2 = xbLin(m[4], 'uv'); const b = [+m[3], +m[5]];
    if (A1.u * x[0] + A1.v * x[1] > b[0] || A2.u * x[0] + A2.v * x[1] > b[1]) return 'x non admissible';
    if (A1.u * y[0] + A2.u * y[1] < c.u || A1.v * y[0] + A2.v * y[1] < c.v) return 'y non admissible pour le dual';
    return xbOK(q, b[0] * y[0] + b[1] * y[1] - (c.u * x[0] + c.v * x[1]), 'écart de dualité');
  };
  F['Mesure d\'un ensemble défini par une inégalité'] = (q) => {
    const m = st(q).match(/A = \\\{x \\in \[(-?\d+) ; (-?\d+)\] : x\^2(.*?) \\leq 0\\\}/);
    const L = xbLin(m[3], 'x'); if (!L) return 'trinôme non reconnu';
    const a = +m[1]; const b = +m[2]; const N = 1000000; const h = (b - a) / N; let c = 0;
    for (let i = 0; i < N; i++) { const x = a + (i + 0.5) * h; if (x * x + L.x * x + L[''] <= 0) c++; }
    return xbOK(q, c * h, 'mesure', 1e-5);
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
    'Somme de multiples': (q, s) => { const m = mat(s, /\$([\d +]+) = K \\times (\d+)\$/); return cmp(q, m[1].split('+').reduce((t, x) => t + +x, 0) / +m[2]); },
    'Produit de deux entiers impairs': (q, s) => { const m = mat(s, /Pour \$n = (\d+)\$ et \$n' = (\d+)\$/); return cmp(q, (+m[1] * +m[2] - 1) / 2); },
    'Somme de deux entiers impairs': (q, s) => { const m = mat(s, /Pour \$a = (\d+)\$ et \$b = (\d+)\$/); return cmp(q, (+m[1] + +m[2]) / 2); },
    'Problème de partage (plus grand diviseur commun)': (q, s) => { const m = mat(s, /dispose de \$(\d+)\$ .* et \$(\d+)\$ /); return cmp(q, gcd(+m[1], +m[2])); },
    'Décomposition en facteurs premiers': (q, s) => {
      if (inp(q) === null) return undefined;
      let n = +mat(s, /premiers de \$(\d+)\$/)[1]; const e = [2, 3, 5, 7].map((p) => { let k = 0; while (n % p === 0) { n /= p; k++; } return k; });
      if (n !== 1) return 'facteur premier > 7';
      return cmp(q, e);
    }
  };

  // ---------------------------------------------------------------- formes complètes (factorisée / développée)
  /** forme développée et réduite (texte brut) recalculée à partir des coefficients [c0, c1, c2] */
  const devStr = (cs) => {
    let out = '';
    for (let d = cs.length - 1; d >= 0; d--) {
      const c = cs[d];
      if (!c) continue;
      const m = d === 0 ? '' : d === 1 ? 'x' : `x^${d}`;
      const abs = Math.abs(c);
      out += (c < 0 ? '-' : out ? '+' : '') + (m && abs === 1 ? '' : abs) + m;
    }
    return out || '0';
  };
  /** factorisation complète (texte brut) d'un trinôme à racines rationnelles : k*(q1*x-p1)*(q2*x-p2) */
  const facStr = ([c0, c1, c2]) => {
    if (!c2) throw new Error('pas de degré 2');
    const D = c1 * c1 - 4 * c2 * c0; const r = Math.round(Math.sqrt(D));
    if (D < 0 || r * r !== D) throw new Error('racines non rationnelles');
    let k = c2; const fs = [];
    for (const sg of [-1, 1]) {
      let num = -c1 + sg * r; let den = 2 * c2;
      if (den < 0) { num = -num; den = -den; }
      const g = gcd(num, den) || 1; num /= g; den /= g;
      k /= den;
      fs.push(`(${den}*x${-num >= 0 ? '+' : ''}${-num})`);
    }
    if (!Number.isInteger(k)) throw new Error('coefficient non entier');
    return `${k}*${fs.join('*')}`;
  };
  const roundAll = (cs) => cs.map((c) => { const r = Math.round(c); if (Math.abs(r - c) > 1e-7) throw new Error('coefficient non entier ' + c); return r; });
  /**
   * Saisie d'une forme complète : la réponse (saisie convertie ou native, et réponse LaTeX du QCM) doit être
   * équivalente à la forme recalculée au sens de checkFactorisation / checkDeveloppement, dans les deux sens.
   */
  const fullForm = (kind, cs) => (q) => {
    const exp = kind === 'factorisation' ? facStr(cs) : devStr(cs);
    const chk = kind === 'factorisation' ? 'checkFactorisation' : 'checkDeveloppement';
    const both = (a) => ENGINE[chk](a, exp).correct === true && ENGINE[chk](exp, a).correct === true;
    const a = inp(q);
    if (a !== null) {
      if (q.answerType !== kind) return `answerType ${q.answerType} au lieu de ${kind}`;
      if (!both(a)) return `saisie ${a} ≠ forme recalculée ${exp}`;
    }
    if (q.type === 'mcq' && !both(q.answer)) return `réponse QCM ${q.answer} ≠ forme recalculée ${exp}`;
    return true;
  };

  // ---------------------------------------------------------------- 2N2
  const exprOf = (s, name) => mat(s, new RegExp(`\\$${name} = (.*?)\\$`))[1];
  const n2N2 = {
    'Développer et réduire': (q, s) => { const [c0, c1, c2] = roundAll(quad(exprOf(s, 'E'))); if (c2) return 'pas affine'; return fullForm('developpement', [c0, c1])(q); },
    'Factoriser $ax^2 + bx$': (q, s) => fullForm('factorisation', roundAll(quad(exprOf(s, 'F'))))(q),
    'Réduire au même dénominateur': (q, s) => { const m = mat(s, /\$B = (.*?)\$ sous la forme \$\\dfrac\{mx \+ n\}\{(.*?)\}\$/); const f = fx(m[1]); const g = fx(m[2]); const a = pv(inp(q)); return same(f, (x) => (a[0] * x + a[1]) / g(x)) || 'quotient faux'; },
    'Choisir la forme adaptée': (q, s) => {
      const dev = mat(s, /f\(x\) = (.*?) = /)[1]; const [c0, c1, c2] = quad(dev);
      if (/Calculer \$f\(0\)\$|calculer \$f\(0\)\$/.test(s)) return cmp(q, c0);
      if (/ésoudre \$f\(x\) = 0\$/.test(s)) { const D = c1 * c1 - 4 * c2 * c0; const r = [(-c1 - Math.sqrt(D)) / (2 * c2), (-c1 + Math.sqrt(D)) / (2 * c2)].sort((u, v) => u - v); return cmp(q, r); }
      const a = +mat(s, /alculer \$f\((-?\d+)\)\$/)[1]; return cmp(q, c0 + c1 * a + c2 * a * a);
    }
  };
  const polyCheck = (exprName) => (q, s) => fullForm('developpement', roundAll(quad(exprOf(s, exprName))))(q);
  n2N2['Développement : carré d\'une somme'] = polyCheck('A');
  n2N2['Développement : carré d\'une différence'] = polyCheck('A');
  n2N2['Différence de deux carrés'] = polyCheck('B');
  n2N2['Double distributivité'] = polyCheck('B');
  n2N2['Factorisation par un facteur commun'] = (q, s) => fullForm('factorisation', roundAll(quad(exprOf(s, 'C'))))(q);
  n2N2['Factorisation : différence de deux carrés'] = (q, s) => fullForm('factorisation', roundAll(quad(exprOf(s, 'D'))))(q);
  n2N2['Factorisation : carré parfait'] = (q, s) => fullForm('factorisation', roundAll(quad(exprOf(s, 'C'))))(q);

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
  // Lectures graphiques sur une courbe tracée (figure SVG) : la réponse se lit sur le dessin, pas de formule f(x) à recalculer
  const figSkip = (q, s) => (/<svg|geo-figure-wrapper/.test(s) ? 'skip' : undefined);
  const nFig = {
    'Lire une image sur une courbe': figSkip,
    'Lire un antécédent sur une courbe': figSkip,
    'Lire des antécédents sur une courbe': figSkip,
    'Résoudre graphiquement une équation $f(x) = k$': figSkip,
    'Résoudre graphiquement $f(x) = g(x)$': figSkip,
    'Lire un extremum sur une courbe': figSkip,
    'Extremum sur une partie de l\'intervalle': (q, s) => figSkip(q, s) || n2A2['Extremum à partir des variations'](q, s), // variante sans figure : variations données en texte
    'Lire le sens de variation sur une courbe': figSkip,
    'Passer de la courbe au tableau de variations': figSkip
  };
  const n2A1 = {
    ...nFig,
    'Point d\'une courbe et paramètre': (q, s) => { const m = mat(s, /f\(x\) = ax\^2 ?([+-] \d+)?\$/); const c = m[1] ? +m[1].replace(' ', '') : 0; const [x0, y0] = pt(s, 'A'); return cmp(q, (y0 - c) / (x0 * x0)); },
    'Intersection de deux courbes': (q, s) => { const f = lin(mat(s, /f\(x\) = (.*?)\$/)[1]); const g = lin(mat(s, /g\(x\) = (.*?)\$/)[1]); const x = (g[0] - f[0]) / (f[1] - g[1]); return cmp(q, [x, f[0] + f[1] * x]); },
    'Valeur interdite': (q, s) => { const [d0, d1] = lin(mat(s, /\\dfrac\{.*?\}\{(.*?)\}\$/)[1]); return cmp(q, -d0 / d1); },
    'Modéliser par une fonction': (q, s) => { const h = +mat(s, /A\(x\) = x\((\d+) - x\)/)[1]; if (/Donner \$b\$/.test(s)) return cmp(q, h); const x0 = +mat(s, /Calculer \$A\((\d+)\)\$/)[1]; return cmp(q, x0 * (h - x0)); }
  };
  const n2A2 = {
    ...nFig,
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
    'Extremum d\'une fonction écrite avec un carré': (q, s) => { if (inp(q) === null) return undefined; const [c0, c1, c2] = quad(mat(s, /f\(x\) = (.*?)\$ définie/)[1]); const al = -c1 / (2 * c2); return cmp(q, [al, c0 + c1 * al + c2 * al * al]); },
    'Encadrement d\'images': (q, s) => {
      if (inp(q) === null) return undefined;
      const f = fx(mat(s, /f\(x\) = (.*?)\$/)[1]); const m = mat(s, /x \\in \[(-?\d+) ; (-?\d+)\]/); const a = +m[1]; const b = +m[2];
      const ys = []; for (let k = 0; k <= 4000; k++) ys.push(f(a + (b - a) * k / 4000)); if (a < 0 && b > 0) ys.push(f(0));
      return cmp(q, [Math.min(...ys), Math.max(...ys)], 1e-6);
    }
  };
  const sqEq = (q, s) => { const m = mat(s, /\(x ([+-]) (\d+)\)\^2 (=|\\le|<|\\ge|>) (\d+)\$/); const a = m[1] === '-' ? +m[2] : -m[2]; const r = Math.sqrt(+m[4]); return cmp(q, [a - r, a + r]); };
  // Lecture graphique sur les courbes de référence : tout est recalculé à partir de l'énoncé, sur une grille de points
  const refFn = (s) => (/x \\mapsto x\^2/.test(s) ? (x) => x * x : /x \\mapsto \|x\|/.test(s) ? (x) => Math.abs(x) : /x \\mapsto \\frac\{1\}\{x\}/.test(s) ? (x) => 1 / x : null);
  const ivIn = (o, x) => String(o).replace(/\$/g, '').split('\\cup').some((p) => {
    const m = p.trim().match(/^([[\]])(.+) ; (.+)([[\]])$/);
    if (!m) return false;
    const lo = /infty/.test(m[2]) ? -Infinity : +m[2];
    const hi = /infty/.test(m[3]) ? Infinity : +m[3];
    return (m[1] === '[' ? x >= lo : x > lo) && (m[4] === ']' ? x <= hi : x < hi);
  });
  const gridOn = (o) => { const xs = []; for (let x = -8; x <= 8; x += 0.25) if (x !== 0 || !/^\]0/.test(o)) { if (ivIn(o, x)) xs.push(x); } return xs; };
  const onlyGood = (q, good) => { const ok = q.options.filter(good); return ok.length === 1 && ok[0] === q.answer ? true : `options justes : ${ok.join(' | ')}, réponse ${q.answer}`; };
  const sameSolutions = (q, sols) => (sols.length ? cmp(q, sols) : inp(q) === 'aucune' ? true : `attendu aucune, saisie ${inp(q)}`);
  /** saisie « [-3;-1[∪]2;3] » (bornes entières ou fractions) -> appartenance de x */
  const ivInp = (t, x) => String(t).replace(/\s+/g, '').split(/∪|U/).some((p) => {
    const m = p.match(/^([[\]])([^;]+);([^;]+)([[\]])$/);
    if (!m) return false;
    const v = (b) => (/inf/.test(b) ? (b[0] === '-' ? -Infinity : Infinity) : b.includes('/') ? +b.split('/')[0] / +b.split('/')[1] : +b.replace(',', '.'));
    const lo = v(m[2]), hi = v(m[3]);
    return (m[1] === '[' ? x >= lo : x > lo) && (m[4] === ']' ? x <= hi : x < hi);
  });
  const ineqG = (q, s, f) => {
    const m = mat(s, /sur \$([[\]][^$]+)\$ de l'inéquation \$.*? (\\le|<|\\ge|>) ([^$]+)\$/);
    const test = { '\\le': (a, b) => a <= b, '<': (a, b) => a < b, '\\ge': (a, b) => a >= b, '>': (a, b) => a > b }[m[2]];
    const xs = gridOn(m[1]);
    const inS = (x) => test(f(x), evalTex(m[3], { x }));
    const r = onlyGood(q, (o) => xs.every((x) => ivIn(o, x) === inS(x)));
    if (r !== true || inp(q) === null) return r;
    return xs.every((x) => ivInp(inp(q), x) === inS(x)) ? true : `saisie ${inp(q)} incorrecte`;
  };
  const n2A3G = {
    'Reconnaître une courbe de référence': (q, s) => {
      const e = /en forme de U/.test(s) ? 'x^2' : /en forme de V/.test(s) ? '|x|' : /deux branches/.test(s) ? '\\frac{1}{x}' : null;
      return q.answer === `$x \\mapsto ${e}$` ? true : `réponse ${q.answer}`;
    },
    'Sens de variation lu sur une courbe de référence': (q, s) => {
      const f = refFn(s);
      const up = !/décroissante/.test(s);
      return onlyGood(q, (o) => { const xs = gridOn(o); return xs.length > 0 && xs.every((x) => Number.isFinite(f(x))) && xs.slice(1).every((x, i) => (up ? f(x) > f(xs[i]) : f(x) < f(xs[i]))); });
    },
    'Lire une image sur une courbe de référence': (q, s) => cmp(q, refFn(s)(+mat(s, /l'image de \$(-?\d+)\$/)[1])),
    'Résoudre graphiquement $f(x) = k$ (fonction de référence)': (q, s) => {
      const f = refFn(s);
      const k = nv(mat(s, /l'équation \$.*? = ([^$]+)\$\.?$/m)[1]);
      const sols = [];
      for (let x = -5; x <= 5; x += 0.25) if (Math.abs(f(x) - k) < 1e-9) sols.push(x);
      return sameSolutions(q, sols);
    },
    'Résoudre graphiquement une inéquation $f(x) \\le k$': (q, s) => ineqG(q, s, refFn(s)),
    'Résoudre graphiquement $x^2 = mx + p$': (q, s) => {
      const r = mat(s, /l'équation \$x\^2 = ([^$]+)\$/)[1];
      const sols = [];
      for (let x = -4; x <= 4; x++) if (Math.abs(x * x - evalTex(r, { x })) < 1e-9) sols.push(x);
      return sameSolutions(q, sols);
    },
    'Résoudre graphiquement $x^2 \\le mx + p$': (q, s) => ineqG(q, s, (x) => x * x)
  };
  const n2A3 = {
    ...n2A3G,
    'Équation $(x - a)^2 = k$': sqEq,
    'Inéquation $(x - a)^2 \\le k$': sqEq,
    'Extremums d\'une fonction avec valeur absolue': (q, s) => {
      const m = mat(s, /f\(x\) = \|x ([+-]) (\d+)\|(?: ([+-]) (\d+))?\$ sur l'intervalle \$\[(-?\d+) ; (-?\d+)\]\$/);
      const c = m[1] === '-' ? +m[2] : -m[2]; const d = m[3] ? (m[3] === '-' ? -m[4] : +m[4]) : 0;
      const a = +m[5]; const b = +m[6];
      const lo = a <= c && c <= b ? 0 : Math.min(Math.abs(a - c), Math.abs(b - c));
      return cmp(q, [lo + d, Math.max(Math.abs(a - c), Math.abs(b - c)) + d]);
    },
    'Équation $\\sqrt{ax + b} = k$': (q, s) => { const m = mat(s, /\\sqrt\{(.*?)\} = (\d+)\$/); const [c0, c1] = lin(m[1]); return cmp(q, (+m[2] * +m[2] - c0) / c1); },
    'Équation $x^2 = k$': (q, s) => { if (inp(q) === null) return undefined; const k = +mat(s, /x\^2 = (-?\d+)\$/)[1]; return cmp(q, [-Math.sqrt(k), Math.sqrt(k)]); },
    'Équation $x^3 = k$': (q, s) => { if (inp(q) === null) return undefined; const k = +mat(s, /x\^3 = (-?\d+)\$/)[1]; return cmp(q, Math.cbrt(k)); },
    'Équation $\\frac{1}{x} = k$': (q, s) => { if (inp(q) === null) return undefined; const k = nv(mat(s, /\\dfrac\{1\}\{x\} = (.*?)\$/)[1]); return cmp(q, 1 / k); }
  };

  // ---------------------------------------------------------------- 2G1, 2G2, 2G3
  const n2G1 = {
    'Longueur d\'un segment parallèle à un axe': (q, s) => { const A = pt(s, 'A'); const B = pt(s, 'B'); if (A[0] !== B[0] && A[1] !== B[1]) return 'segment non parallèle à un axe'; return cmp(q, Math.hypot(B[0] - A[0], B[1] - A[1])); },
    'Distance d\'un point à un axe': (q, s) => { const A = pt(s, 'A'); const ax = mat(s, /l'axe des (abscisses|ordonnées)/)[1]; return cmp(q, Math.abs(ax === 'ordonnées' ? A[0] : A[1])); },
    'Distance entière entre deux points': (q, s) => { const A = pt(s, 'A'); const B = pt(s, 'B'); return cmp(q, Math.hypot(B[0] - A[0], B[1] - A[1])); },
    'Centre du cercle circonscrit (triangle rectangle)': (q, s) => { const P = ['A', 'B', 'C'].map((n) => pt(s, n)); const r = [0, 1, 2].find((i) => { const [U, V] = [P[(i + 1) % 3], P[(i + 2) % 3]]; return (U[0] - P[i][0]) * (V[0] - P[i][0]) + (U[1] - P[i][1]) * (V[1] - P[i][1]) === 0; }); if (r === undefined) return 'triangle non rectangle'; const [U, V] = [P[(r + 1) % 3], P[(r + 2) % 3]]; return cmp(q, [(U[0] + V[0]) / 2, (U[1] + V[1]) / 2]); },
    'Point équidistant sur un axe': (q, s) => { const A = pt(s, 'A'); const B = pt(s, 'B'); const x = pv(inp(q))[0]; return near(Math.hypot(x - A[0], A[1]), Math.hypot(x - B[0], B[1])) || 'MA ≠ MB'; }
  };
  // Flèches tracées dans les figures : déplacement (dx ; dy) en pixels, ordonnées vers le haut
  const figArrows = (q) => { const o = {}; for (const m of q.statement.matchAll(/<g data-name="(\w+)"><line x1="([-\d.]+)" y1="([-\d.]+)" x2="([-\d.]+)" y2="([-\d.]+)"/g)) o[m[1]] = [+m[4] - +m[2], +m[3] - +m[5]]; return o; };
  const sameV = (a, b) => near(a[0], b[0]) && near(a[1], b[1]);
  // Combinaison de vecteurs \overrightarrow{XY} évaluée sur des points P
  const evalV = (t, P) => { const r = [0, 0]; for (const m of t.matchAll(/([+-]?)\s*(?:\\frac\{(\d+)\}\{(\d+)\}|(\d*))\\overrightarrow\{(.)(.)\}/g)) { const c = (m[1] === '-' ? -1 : 1) * (m[2] ? m[2] / m[3] : m[4] ? +m[4] : 1); r[0] += c * (P[m[6]][0] - P[m[5]][0]); r[1] += c * (P[m[6]][1] - P[m[5]][1]); } return r; };
  const randP = () => { const o = {}; for (const c of 'ABCDEFGHIJKLMNPQRSTU') o[c] = [Math.random() * 40 - 20, Math.random() * 40 - 20]; return o; };
  // Exactement une option juste, et c'est celle de la réponse
  const onlyOne = (q, isTrue) => { const good = q.options.filter(isTrue); if (good.length !== 1) return `${good.length} options justes`; return good[0] === q.options[q.correctIndex] || 'la réponse n\'est pas l\'option juste'; };
  const n2G2 = {
    'Somme de deux vecteurs sur un quadrillage': (q) => { const F = figArrows(q); if (!F.u || !F.v) return 'u ou v absent de la figure'; const w = [F.u[0] + F.v[0], F.u[1] + F.v[1]]; return onlyOne(q, (o) => { const m = o.match(/\{(.)(.)\}/); return !!F[m[1] + m[2]] && sameV(F[m[1] + m[2]], w); }); },
    'Représentant d\'un vecteur': (q) => { const F = figArrows(q); if (!F.u) return 'vecteur u absent de la figure'; return onlyOne(q, (o) => { const m = o.match(/\{(.)(.)\}/); return sameV(F[m[1] + m[2]], F.u); }); },
    'Lire les coordonnées d\'un vecteur': (q) => { const d = figArrows(q).AB; return cmp(q, [d[0] / 24, d[1] / 24]); },
    'Produit d\'un vecteur par un réel': (q) => { const { u, v } = figArrows(q); const k = (u[0] * v[0] + u[1] * v[1]) / (u[0] * u[0] + u[1] * u[1]); if (!sameV([k * u[0], k * u[1]], v)) return 'u et v non colinéaires'; return cmp(q, k); },
    'Relation de Chasles': (q) => { const t = q.statement.match(/Chasles : \$(.*?)\$/)[1]; const P = randP(); const E = evalV(t, P); return onlyOne(q, (o) => sameV(evalV(o, P), E)); },
    'Vecteurs et parallélogramme': (q) => { const L = q.statement.match(/\$(\w{4})\$ est un parallélogramme/)[1]; const P = randP(); P[L[2]] = [P[L[1]][0] + P[L[3]][0] - P[L[0]][0], P[L[1]][1] + P[L[3]][1] - P[L[0]][1]]; const E = evalV(q.statement.match(/(?:représentant de|Quel vecteur est égal à) \$(.*?)\$/)[1], P); return onlyOne(q, (o) => sameV(evalV(o, P), E)); },
    'Caractérisation vectorielle du milieu': (q) => { const m = q.statement.match(/\$(\w)\$ est le milieu du segment \$\[(\w)(\w)\]\$/); const P = randP(); P[m[1]] = [(P[m[2]][0] + P[m[3]][0]) / 2, (P[m[2]][1] + P[m[3]][1]) / 2]; return onlyOne(q, (o) => { const [g, d] = o.split('='); return sameV(evalV(g, P), evalV(d, P)); }); },
    'Symétrique par égalité de vecteurs': (q, s) => { const A = pt(s, 'A'); const I = pt(s, 'I'); return cmp(q, [2 * I[0] - A[0], 2 * I[1] - A[1]]); },
    'Quatrième sommet par égalité de vecteurs': (q, s) => { const A = pt(s, 'A'); const B = pt(s, 'B'); const C = pt(s, 'C'); return cmp(q, [A[0] + C[0] - B[0], A[1] + C[1] - B[1]]); },
    'Décomposer un vecteur dans un parallélogramme': (q) => { const s = q.statement; const L = s.match(/\$(\w{4})\$ est un parallélogramme/)[1]; const P = { [L[0]]: [0, 0], [L[1]]: [1, 0], [L[2]]: [1, 1], [L[3]]: [0, 1] }; const m = s.match(/segment \$\[(\w)(\w)\]\$ tel que \$\\overrightarrow\{\w+\} = \\frac\{(\d+)\}\{(\d+)\}/); const k = m[3] / m[4]; const X = P[m[1]]; const Y = P[m[2]]; const E = [X[0] + k * (Y[0] - X[0]), X[1] + k * (Y[1] - X[1])]; const O = P[s.match(/tels que \$\\overrightarrow\{(\w)E\}/)[1]]; return cmp(q, [E[0] - O[0], E[1] - O[1]]); },
    'Extrémité d\'un vecteur': (q, s) => { const A = pt(s, 'A'); const u = vec(s, '\\\\overrightarrow\\{AB\\}'); return cmp(q, [A[0] + u[0], A[1] + u[1]]); },
    'Coordonnées d\'un vecteur': (q, s) => { if (inp(q) === null) return undefined; const A = pt(s, 'A'); const B = pt(s, 'B'); return cmp(q, [B[0] - A[0], B[1] - A[1]]); },
    'Combinaison linéaire de vecteurs': (q, s) => { if (inp(q) === null) return undefined; const u = vec(s, '\\\\vec\\{u\\}'); const v = vec(s, '\\\\vec\\{v\\}'); const m = mat(s, /\\vec\{w\} = (-?\d*)\\vec\{u\} ([+-]) (\d*)\\vec\{v\}/); const k = m[1] === '' ? 1 : m[1] === '-' ? -1 : +m[1]; const l = (m[2] === '-' ? -1 : 1) * (m[3] === '' ? 1 : +m[3]); return cmp(q, [k * u[0] + l * v[0], k * u[1] + l * v[1]]); },
    'Calcul d\'un déterminant': (q, s) => { const u = vec(s, '\\\\vec\\{u\\}'); const v = vec(s, '\\\\vec\\{v\\}'); return cmp(q, u[0] * v[1] - u[1] * v[0]); },
    'Norme d\'un vecteur': (q, s) => { const u = vec(s, '\\\\vec\\{u\\}'); return cmp(q, Math.hypot(u[0], u[1])); },
    'Coefficient de colinéarité': (q, s) => { const u = vec(s, '\\\\vec\\{u\\}'); const w = vec(s, '\\\\vec\\{w\\}'); const k = w[0] / u[0]; if (!near(w[1], k * u[1])) return 'non colinéaires'; return cmp(q, k); },
    'Point aligné avec deux autres': (q, s) => { const A = pt(s, 'A'); const B = pt(s, 'B'); const xC = +mat(s, /C\((-?\d+) ; y\)/)[1]; const y = pv(inp(q))[0]; return near((B[0] - A[0]) * (y - A[1]) - (B[1] - A[1]) * (xC - A[0]), 0) || 'non alignés'; }
  };
  const cart = (tex) => { const F = (x, y) => evalTex(tex, { x, y }); const c = F(0, 0); return [F(1, 0) - c, F(0, 1) - c, c]; };
  const ptOf = (o) => { const m = o.match(/\((-?\d+) ; (-?\d+)\)/); return [+m[1], +m[2]]; };
  const n2G3 = {
    'Appartenance d\'un point à une droite': (q, s) => { const [c0, c1] = lin(mat(s, /d : y = (.*?)\$/)[1]); return onlyOne(q, (o) => { const M = ptOf(o); return near(c0 + c1 * M[0], M[1]); }); },
    'Équation cartésienne d\'une droite': (q, s) => { const A = pt(s, 'A'); const u = vec(s, '\\\\vec\\{u\\}'); return onlyOne(q, (o) => { const [l, r] = o.replace(/\$/g, '').split(' = '); const [a, b, c0] = cart(l); const c = c0 - Number(r); return (a !== 0 || b !== 0) && near(a * A[0] + b * A[1] + c, 0) && near(a * u[0] + b * u[1], 0); }); },
    'Vecteur directeur d\'une droite': (q, s) => { const [a, b] = cart(mat(s, /d : (.*?) = 0\$/)[1]); return onlyOne(q, (o) => { const v = vec(o, '\\\\vec\\{u\\}'); return (v[0] !== 0 || v[1] !== 0) && near(a * v[0] + b * v[1], 0); }); },
    'Coefficient directeur': (q, s) => { const A = pt(s, 'A'); const B = pt(s, 'B'); return cmp(q, (B[1] - A[1]) / (B[0] - A[0])); },
    'Équation réduite d\'une droite': (q, s) => { const A = pt(s, 'A'); const B = pt(s, 'B'); const m = (B[1] - A[1]) / (B[0] - A[0]); return lineForm(q, m, A[1] - m * A[0]); },
    'Équation cartésienne vers équation réduite': (q, s) => { const [a, b, c] = cart(mat(s, /équation cartésienne \$(.*?) = 0\$/)[1]); return lineForm(q, -a / b, -c / b); },
    'Droite par un point et sa pente': (q, s) => { const m = +mat(s, /de pente \$(-?\d+)\$/)[1]; const A = pt(s, 'A'); return lineForm(q, m, A[1] - m * A[0]); },
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
  n2S1['Lire un histogramme'] = (q, s) => {
    const R = [...s.matchAll(/Classe \[(\d+) ; (\d+)\[ : effectif (\d+)/g)].map((m) => [+m[1], +m[2], +m[3]]);
    if (R.length < 4) throw new Error('données histogramme');
    const N = R.reduce((t, r) => t + r[2], 0);
    let m;
    if (/effectif total de la série/.test(s)) return cmp(q, N);
    if ((m = s.match(/effectif de la classe \$\[(\d+) ;/))) return cmp(q, R.find((r) => r[0] === +m[1])[2]);
    if ((m = s.match(/fréquence de la classe \$\[(\d+) ;/))) return cmp(q, R.find((r) => r[0] === +m[1])[2] / N);
    if ((m = s.match(/appartiennent à l'intervalle \$\[(\d+) ; (\d+)\[/))) return cmp(q, R.filter((r) => r[0] >= +m[1] && r[1] <= +m[2]).reduce((t, r) => t + r[2], 0));
    return cmp(q, round2(R.reduce((t, r) => t + (r[0] + r[1]) / 2 * r[2], 0) / N));
  };
  n2S1['Lire un polygone des fréquences cumulées'] = (q, s) => {
    const P = [...s.matchAll(/\((\d+) ; (\d+) %\)/g)].map((m) => [+m[1], +m[2]]);
    if (P.length < 5 || P[0][1] !== 0 || P[P.length - 1][1] !== 100) throw new Error('données polygone');
    const at = (x) => P.find((p) => p[0] === x)[1];
    const N = (s.match(/effectif total \$(\d+)\$/) || [])[1];
    let m;
    if ((m = s.match(/Combien de valeurs de la série sont strictement inférieures à \$(\d+)\$/))) return cmp(q, N * at(+m[1]) / 100);
    if ((m = s.match(/Combien de valeurs de la série sont supérieures ou égales à \$(\d+)\$/))) return cmp(q, N * (100 - at(+m[1])) / 100);
    if ((m = s.match(/Combien de valeurs appartiennent à la classe \$\[(\d+) ; (\d+)\[/))) return cmp(q, N * (at(+m[2]) - at(+m[1])) / 100);
    if ((m = s.match(/strictement inférieur à \$(\d+)\$/))) return cmp(q, at(+m[1]));
    if ((m = s.match(/supérieur ou égal à \$(\d+)\$/))) return cmp(q, 100 - at(+m[1]));
    if ((m = s.match(/appartient à l'intervalle \$\[(\d+) ; (\d+)\[/))) return cmp(q, at(+m[2]) - at(+m[1]));
    const i = P.findIndex((p) => p[1] > 50);
    if (/classe médiane est \$\[a ; b\[/.test(s)) return cmp(q, P[i - 1][0]);
    return cmp(q, P[i - 1][0] + (P[i][0] - P[i - 1][0]) * (50 - P[i - 1][1]) / (P[i][1] - P[i - 1][1]));
  };
  n2S1['Comparer deux séries'] = (q, s) => {
    if (new Set(q.options).size !== 4) return 'options non distinctes';
    const expected = (a, b, smaller, names, tie) => (a === b ? tie : (a < b) === smaller ? names[0] : names[1]);
    const names = [...s.matchAll(/\*\*((?:Classe|Machine|Ville|Athlète) [AB])\*\*/g)].map((m) => m[1]);
    let m; let exp;
    if ((m = s.match(/Écart type \|/))) {
      const v = [...s.matchAll(/\| \*\*[^*]+\*\* \| \$[\d{},]+\$ \| \$([\d{},]+)\$ \|/g)].map((x) => nv(x[1]));
      exp = expected(v[0], v[1], true, names, 'Les deux séries sont aussi homogènes');
    } else if (/\$Q_3\$ \|/.test(s)) {
      const v = [...s.matchAll(/\| \*\*[^*]+\*\* \| \$(\d+)\$ \| \$(\d+)\$ \| \$(\d+)\$ \|/g)].map((x) => +x[3] - +x[1]);
      exp = expected(v[0], v[1], true, names, 'Les deux séries ont le même écart interquartile');
    } else if (/Diagrammes en boîte/.test(s)) {
      const B = [...s.matchAll(/([A-Za-zè]+ [AB]) : minimum (\d+), Q1 (\d+), médiane (\d+), Q3 (\d+), maximum (\d+)/g)].map((x) => [x[1], ...x.slice(2).map(Number)]);
      if (B.length !== 2) throw new Error('boîtes');
      const L = [B[0][0], B[1][0]]; const TIE = 'La même valeur pour les deux séries';
      if (/moyenne la plus élevée/.test(s)) exp = 'On ne peut pas répondre avec ce diagramme';
      else if (/médiane la plus élevée/.test(s)) exp = expected(B[0][3], B[1][3], false, L, TIE);
      else if (/écart interquartile/.test(s)) exp = expected(B[0][4] - B[0][2], B[1][4] - B[1][2], true, L, TIE);
      else exp = expected(B[0][5] - B[0][1], B[1][5] - B[1][1], false, L, TIE);
    } else {
      const S = ['A', 'B'].map((n) => mat(s, new RegExp(`série ${n} : ([\\d ;]+)`))[1].split(';').map(Number));
      const [m0, m1] = S.map((a) => a.reduce((t, x) => t + x, 0) / a.length);
      if (m0 !== m1) throw new Error('moyennes différentes');
      const [v0, v1] = S.map((a) => a.reduce((t, x) => t + (x - m0) ** 2, 0));
      exp = v0 < v1 ? 'Série A' : 'Série B';
    }
    return q.answer === exp ? true : `attendu ${exp}, réponse ${q.answer}`;
  };
  n2S1['Nature d\'une variable statistique'] = (q, s) => {
    const kind = (o) => (/mention|satisfaction|vêtement|étiquette|piste|ceinture/i.test(o) ? 'ordinale' : /nombre|centimètres|kilogrammes|minutes|Celsius/i.test(o) ? 'quantitative' : 'nominale');
    mat(s, /deux variables statistiques : « (.*?) » et « (.*?) »/);
    const lab = (o) => o.replace(/^qualitative /, '');
    const ok = q.options.filter((o) => { const m = mat(o, /^« (.*?) » est (.*?) et « (.*?) » est (.*)$/); return kind(m[1]) === lab(m[2]) && kind(m[3]) === lab(m[4]); });
    if (q.options.length !== 4 || ok.length !== 1) return `${ok.length} options justes`;
    return q.answer === ok[0] ? true : `attendu ${ok[0]}`;
  };
  n2S1['Tableau croisé depuis un fichier'] = (q, s) => {
    const L = mat(s, /\n```\n([\s\S]*?)\n```\n/)[1].split('\n').map((l) => l.split(';'));
    const c1 = mat(s, /(\w+), \w+ = ligne\.strip\(\)\.split/)[1];
    let m;
    if ((m = s.match(/if \w+ == "([^"]+)":\n\s+nA = nA \+ 1\n\s+if \w+ == "([^"]+)":/))) {
      const A = L.filter((l) => l[0] === m[1]);
      return cmp(q, A.filter((l) => l[1] === m[2]).length / A.length);
    }
    m = mat(s, new RegExp(`if ${c1} == "([^"]+)" (and not \\(|and |or )\\w+ == "([^"]+)"`));
    const f = m[2] === 'and ' ? (l) => l[0] === m[1] && l[1] === m[3] : m[2] === 'or ' ? (l) => l[0] === m[1] || l[1] === m[3] : (l) => l[0] === m[1] && l[1] !== m[3];
    return cmp(q, L.filter(f).length);
  };
  const n2S2 = {
    'Probabilité d\'une issue manquante': (q, s) => { const ps = [...s.matchAll(/\| \$(0\{,\}\d+)\$/g)].map((m) => nv(m[1])); return cmp(q, 1 - ps.reduce((a, b) => a + b, 0)); },
    'Tableau croisé à compléter': (q, s) => {
      // tableau 2 × 2 + totaux, cases manquantes complétées par les sommes
      const R = [...s.matchAll(/\| \*\*[^*]+\*\* \|((?: \$[^$]*\$ \|){3})/g)].map((m) => [...m[1].matchAll(/\$([^$]*)\$/g)].map((c) => (/^\d+$/.test(c[1]) ? +c[1] : null)));
      if (R.length !== 3) return 'tableau illisible';
      for (let k = 0; k < 6; k++) {
        for (const r of R) { if (r[2] === null && r[0] !== null && r[1] !== null) r[2] = r[0] + r[1]; else if (r[0] === null && r[1] !== null && r[2] !== null) r[0] = r[2] - r[1]; else if (r[1] === null && r[0] !== null && r[2] !== null) r[1] = r[2] - r[0]; }
        for (let j = 0; j < 3; j++) { const [a, b, t] = [R[0][j], R[1][j], R[2][j]]; if (t === null && a !== null && b !== null) R[2][j] = a + b; else if (a === null && b !== null && t !== null) R[0][j] = t - b; else if (b === null && a !== null && t !== null) R[1][j] = t - a; }
      }
      if (R.flat().some((x) => x === null || x < 0)) return 'tableau incomplétable';
      const ev = mat(s, /On note \$(\w)\$ : « .*? » et \$(\w)\$ : « .*? »/); const L = ev[1]; const C = ev[2];
      const m = mat(s, /Calculer \$P_\{\\overline\{(\w)\}\}\((\w)\)\$/);
      if (m[1] === C && m[2] === L) return cmp(q, R[0][1] / R[2][1]); // P(L | non C)
      if (m[1] === L && m[2] === C) return cmp(q, R[1][0] / R[1][2]); // P(C | non L)
      return 'événements inattendus';
    },
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
    'Test de dépistage : faux négatifs': (q, s) => { const m = mat(s, /touche \$(\d+)\\,\\%\$.*chez \$(\d+)\\,\\%\$ des malades.*chez \$(\d+)\\,\\%\$ des non-malades/); const p = +m[1] / 100; const se = +m[2] / 100; const sp = +m[3] / 100; const fn = p * (1 - se); const vn = (1 - p) * sp; if (!/test est négatif\. .*soit malade \(faux négatif\)/.test(s)) return 'question inattendue'; return cmp(q, fn / (fn + vn)); },
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
    'Programme simulant des échantillons': (q, s) => {
      if (/Que représente/.test(s)) { const ok = q.options.filter((o) => /^Le nombre d'échantillons/.test(o)); return ok.length === 1 && q.answer === ok[0] ? true : 'option juste'; }
      const m = mat(s, /for k in range\((\d+)\):\n\s+if abs\(frequence\((\d+)\)/);
      return cmp(q, /Combien d'échantillons/.test(s) ? +m[1] : +m[1] * +m[2]);
    },
    'Lire un programme de simulation': (q, s) => {
      const m = mat(s, /for i in range\((\d+)\):\n\s+if randint\(1, (\d+)\)/);
      const fr = q.options.filter((o) => /^La fréquence d/.test(o));
      if (fr.length !== 1 || q.answer !== fr[0]) return 'réponse';
      return (q.answer.includes(`sur ${m[1]} lancers`) && q.answer.includes(`dé à ${m[2]} faces`)) || 'réponse : nombre de lancers ou de faces faux';
    },
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
  const absBounds = (I, c, r, strict) => (I.lc !== strict && I.rc !== strict && near(I.a, c - r) && near(I.b, c + r) ? true : 'intervalle faux');
  Object.assign(n2N3, {
    'Traduire un intervalle par une valeur absolue': (q, s) => { const I = iv(mat(s, /intervalle \$(.*?)\$/)[1]); const m = mat(q.answer, /\|x(?: ([+-]) (\d+))?\| (\\le|<) (\d+)/); const c = m[1] ? (m[1] === '-' ? +m[2] : -m[2]) : 0; return absBounds(I, c, +m[4], m[3] === '<'); },
    'Tolérance et valeur absolue': (q, s) => { const m = mat(s, /\|[LmD] - ([\d{},]+)\| \\le ([\d{},]+)\$/); return absBounds(iv(q.answer.replace(/\$/g, '')), nv(m[1]), nv(m[2]), false); },
    'Inéquation avec valeur absolue': (q, s) => { const m = mat(s, /\|(-?\d+) - x\| (\\le|<) (\d+)\$/); return absBounds(iv(q.answer.replace(/\$/g, '')), +m[1], +m[3], m[2] === '<'); },
    'Pour aller plus loin : inéquation avec valeur absolue': (q, s) => {
      const m = mat(s, /\|x ([+-]) (\d+)\| (\\ge|>) (\d+)\$/); const a = mat(q.answer, /\]-\\infty ; (-?\d+)([\[\]]) \\cup ([\[\]])(-?\d+) ; \+\\infty\[/);
      const c = m[1] === '-' ? +m[2] : -m[2]; const r = +m[4]; const large = m[3] === '\\ge';
      return +a[1] === c - r && +a[4] === c + r && (a[2] === ']') === large && (a[3] === '[') === large ? true : 'réunion fausse';
    },
    'Somme d\'inégalités': (q, s) => {
      const m = mat(s, /\$(-?\d+) (\\le|<) x \2 (-?\d+)\$ et \$(-?\d+) \2 y \2 (-?\d+)\$.*\$m \2 x ([+-]) (\d*)y \2 n\$/);
      const [a, b, c, d] = [+m[1], +m[3], +m[4], +m[5]]; const k = m[7] ? +m[7] : 1;
      return cmp(q, m[6] === '-' ? [a - d, b - c] : [a + k * c, b + k * d]);
    },
    'Arrondi et chiffres significatifs': (q, s) => { const x = nv(mat(s, /: \$(.*?)\$\. Arrondir/)[1].replace(/\\,/g, '')); const k = +mat(s, /à (\d) chiffres/)[1]; const o = Math.floor(Math.log10(x) + 1e-12); const st = Math.pow(10, o - k + 1); return cmp(q, Math.round(x / st) * st, 1e-9); },
    'Comparer par la différence': (q, s) => { const m = mat(s, /A = \\dfrac\{(\d+)\}\{(\d+)\}\$ et \$B = \\dfrac\{(\d+)\}\{(\d+)\}/); return cmp(q, +m[1] / +m[2] - +m[3] / +m[4]); },
    'Comparer par le quotient': (q, s) => { const m = mat(s, /\$A = (\d+)\$ .* \$B = (\d+)\$/); return cmp(q, +m[1] / +m[2]); }
  });
  Object.assign(n2N4, {
    'Équation $x^2 = a$': (q, s) => { const a = +mat(s, /x\^2 = (\d+)\$/)[1]; return cmp(q, [-Math.sqrt(a), Math.sqrt(a)]); },
    'Équation $\\frac{a}{x} = b$': (q, s) => { const m = mat(s, /\\dfrac\{(-?\d+)\}\{x\} = (-?\d+)\$/); return cmp(q, +m[1] / +m[2]); },
    'Isoler une variable': (q, s) => { const m = mat(s, /relation \$(.*?) = (-?\d+)\$/); const [a, b] = cart(m[1]); return lineForm(q, -a / b, +m[2] / b); },
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
  /** Racines réelles triées d'une fonction polynôme de degré 2 donnée par son évaluateur (null : aucune) */
  const roots2 = (f) => {
    const c0 = f(0); const c2 = (f(1) + f(-1)) / 2 - c0; const c1 = (f(1) - f(-1)) / 2;
    if (Math.abs(c2) < 1e-12) throw new Error('pas du second degré');
    const D = c1 * c1 - 4 * c2 * c0;
    if (D < -1e-9) return null;
    if (Math.abs(D) < 1e-9) return [-c1 / (2 * c2)];
    const r = Math.sqrt(D);
    return [(-c1 - r) / (2 * c2), (-c1 + r) / (2 * c2)].sort((u, v) => u - v);
  };
  const n1A1 = {
    'Racines lues sur la forme factorisée': (q, s) => { const rs = roots2(fx(mat(s, /f\(x\) = (.*?)\$\. Déterminer/)[1])); if (!rs) return 'aucune racine'; return cmp(q, rs.length === 1 ? rs[0] : rs); },
    'Équation du second degré incomplète': (q, s) => {
      const m = mat(s, /l'équation \$(.*) = (-?\d+)\$\./); const L = fx(m[1]); const rs = roots2((x) => L(x) - +m[2]);
      if (!rs) return /^aucune$/i.test(String(inp(q))) || `attendu aucune, saisie ${inp(q)}`;
      return cmp(q, rs.length === 1 ? rs[0] : rs);
    },
    'Factoriser un trinôme': (q, s) => fullForm('factorisation', roundAll(quad(mat(s, /f\(x\) = (.*?)\$ à l'aide/)[1])))(q),
    'Trinôme connaissant ses racines': (q, s) => { const m = mat(s, /s'annule en \$(-?\d+)\$ et en \$(-?\d+)\$, et \$f\((-?\d+)\) = (-?\d+)\$/); const [r1, r2, x0, y0] = m.slice(1).map(Number); const a = y0 / ((x0 - r1) * (x0 - r2)); return fullForm('developpement', roundAll([a * r1 * r2, -a * (r1 + r2), a]))(q); },
    'Signe d\'un trinôme sous forme factorisée': (q, s) => { const m = mat(s, /f\(x\) = (.*?)\$\. L'ensemble des solutions de \$f\(x\) (<|>) 0\$/); const f = fx(m[1]); const xs = []; for (let x = -20; x <= 20; x += 0.5) if (m[2] === '<' ? f(x) < 0 : f(x) > 0) xs.push(x); return cmp(q, [xs[0] - 0.5, xs[xs.length - 1] + 0.5]); },
    'Deux nombres de somme et produit donnés': (q, s) => { const m = mat(s, /somme vaut \$(-?\d+)\$ et le produit vaut \$(-?\d+)\$/); const S = +m[1]; const P = +m[2]; const D = Math.sqrt(S * S - 4 * P); return cmp(q, [(S - D) / 2, (S + D) / 2]); },
    'Racine évidente': (q, s) => { const m = mat(s, /que \$(-?\d+)\$ est une racine évidente de \$f\(x\) = (.*?)\$/); const [c0, c1, c2] = quad(m[2]); const one = +m[1]; if (!near(c2 * one * one + c1 * one + c0, 0)) return 'pas racine'; return cmp(q, c0 / c2 / one); },
    'Nombre de solutions d\'une équation du second degré': viaAns((a) => (/Deux/.test(a) ? 2 : /seule/.test(a) ? 1 : /Aucune/.test(a) ? 0 : NaN)),
    'Résolution d\'une équation du second degré': numsAns,
    'Forme canonique d\'un trinôme': (q, s) => { const [c0, c1, c2] = roundAll(quad(mat(s, /forme canonique de \$f\(x\) = (.*?)\$/)[1])); return formCheck(q, 'canonique', canonOf(c2, c1, c0)); },
    'Trinôme à paramètre': numsAns
  };
  const n1A2 = {
    'Approximation affine': (q, s) => { const m = mat(s, /f\((-?\d+)\) = (-?\d+)\$ et \$f'\(-?\d+\) = (-?\d+)\$.*de \$f\((.*?)\)\$/); return cmp(q, +m[2] + +m[3] * (nv(m[4]) - +m[1])); },
    'Vitesse instantanée': (q, s) => { const d = mat(s, /d\(t\) = (.*?)\$/)[1]; const t0 = +mat(s, /instant \$t = (\d+)\$/)[1]; const f = (t) => evalTex(d, { t }); return cmp(q, (f(t0 + 1e-6) - f(t0 - 1e-6)) / 2e-6, 1e-5); },
    'Nombre dérivé comme limite': (q, s) => { const f = fx(mat(s, /f\(x\) = (.*?)\$ et/)[1]); const a = +mat(s, /\\dfrac\{f\((-?\d+) \+ h\)/)[1]; const t = (h) => (f(a + h) - f(a)) / h; const beta = t(1e-6); const alpha = t(1) - t(0.5) ? (t(1) - t(0.5)) / 0.5 : 0; return cmp(q, [alpha, beta], 1e-4); },
    'Coût marginal': (q, s) => { const C = mat(s, /C\(q\) = (.*?)\$/)[1]; const q0 = +mat(s, /pour \$q = (\d+)\$/)[1]; const f = (x) => evalTex(C, { q: x }); return cmp(q, (f(q0 + 1e-4) - f(q0 - 1e-4)) / 2e-4, 1e-5); },
    'Lecture de la tangente': numsAns,
    'Équation de la tangente': (q, s) => { const f = fx(mat(s, /Soit \$f\(x\) = (.*?)\$\./)[1]); const x0 = +mat(s, /abscisse \$(-?\d+)\$/)[1]; const m = snap((f(x0 + 1e-5) - f(x0 - 1e-5)) / 2e-5); return lineForm(q, m, snap(f(x0) - m * x0)); },
    'Tangentes horizontales': numsAns
  };
  const n1A3 = {
    'Dérivée de $x^n$ avec $n$ entier négatif': (q, s) => { const f = fx(mat(s, /f\(x\) = (.*?)\$\. On a/)[1]); const [k, p] = pv(inp(q)); return [0.7, 1.3, 2.1].every((x) => near((f(x + 1e-6) - f(x - 1e-6)) / 2e-6, k / Math.pow(x, p), 1e-4)) || 'dérivée fausse'; },
    'Nombre dérivé d\'un produit': (q, s) => { const f = fx(mat(s, /f\(x\) = (.*?)\$\. Calculer/)[1]); const x0 = +mat(s, /f'\((-?\d+)\)/)[1]; return cmp(q, (f(x0 + 1e-6) - f(x0 - 1e-6)) / 2e-6, 1e-5); },
    'Parité d\'une fonction': (q, s) => { const f = fx(mat(s, /f\(x\) = (.*?)\$ est-elle/)[1]); const xs = [0.5, 1.3, 2.7]; const even = xs.every((x) => near(f(-x), f(x))); const odd = xs.every((x) => near(f(-x), -f(x))); const exp = even ? 'Paire' : odd ? 'Impaire' : 'Ni paire ni impaire'; return q.answer === exp || `attendu ${exp}`; },
    'Dérivée d\'un produit': (q, s) => derivForm(mat(s, /f\(x\) = (.*?)\$\./)[1], 1)(q),
    'Dérivée d\'un quotient': viaAns((a) => { const m = rhs(a).match(/(-?)\\frac\{(\d+)\}/); return (m[1] ? -1 : 1) * +m[2]; }),
    'Dérivée de l\'inverse d\'une fonction': viaAns((a) => { const m = rhs(a).match(/(-?)\\frac\{(\d+)\}/); return (m[1] ? -1 : 1) * +m[2]; }),
    'Dérivée d\'un produit avec la racine carrée': viaAns((a) => { const [c0, c1] = lin(rhs(a).match(/\\frac\{(.*?)\}\{2\\sqrt\{x\}\}/)[1]); return [c1, c0]; }),
    'Extremum local d\'une fonction polynôme': viaAns((a) => { const n = ansNums(a); return [n[1], n[0]]; }),
    'Optimisation sur $]0 ; +\\infty[$': viaAns((a) => { const n = ansNums(a); return [n[1], n[0]]; })
  };
  /** Dérivée (ordre k) saisie sous forme développée : answerType, forme réduite, et égalité avec la dérivée numérique de f */
  const derivForm = (fTex, k) => (q) => {
    const a = inp(q);
    if (a === null) return undefined;
    if (q.answerType !== 'developpement') return `answerType ${q.answerType} au lieu de developpement`;
    if (ENGINE.checkDeveloppement(a, a).correct !== true) return `saisie non réduite ${a}`;
    const P = ENGINE.parsePolyExpr(a).poly; const g = (x) => P.reduce((t, c, d) => t + c * Math.pow(x, d), 0);
    const f = fx(fTex); const h = 1e-3;
    const d1 = (fn) => (x) => (fn(x + h) - fn(x - h)) / (2 * h);
    const D = k === 1 ? d1(f) : d1(d1(f));
    return [0.4, -0.9, 1.3].every((x) => near(D(x), g(x), 1e-3 * Math.max(1, Math.abs(g(x))))) || `f${"'".repeat(k)} ≠ saisie ${a}`;
  };
  n1A3['Dérivée d\'une fonction polynôme'] = (q, s) => derivForm(mat(s, /f\(x\) = (.*?)\$\./)[1], 1)(q);
  const ek = (t) => { t = t.replace(/\s/g, ''); let m; if (t === '1') return 0; if (t === 'e') return 1; if ((m = t.match(/^e\^\{(-?\d*)x?\}$/))) return m[1] === '' ? 1 : m[1] === '-' ? -1 : +m[1]; return NaN; };
  const n1A4 = {
    'Décroissance exponentielle $e^{-kt}$': (q, s) => { const m = mat(s, /Q\(t\) = (\d+)e\^\{-(.*?)t\}/); return cmp(q, -nv(m[2]) * +m[1]); },
    'Croissance exponentielle discrète': (q, s) => { const m = mat(s, /N\(n\) = (\d+) \\times (.*?)\^n\$\. Calculer \$N\((\d+)\)/); return cmp(q, Math.round(+m[1] * Math.pow(nv(m[2]), +m[3]) * 100) / 100); },
    'Abscisse de l\'extremum de $(ax + b)e^{kx}$': (q, s) => { const m = mat(s, /f\(x\) = \((.*?)\)e\^\{(-?\d*)x\}\$/); const [b, a] = lin(m[1]); const k = m[2] === '' ? 1 : m[2] === '-' ? -1 : +m[2]; return cmp(q, -(a + b * k) / (a * k)); },
    'Propriétés algébriques de l\'exponentielle': viaAns((a) => ek(rhs(a))),
    'Puissance d\'une exponentielle': viaAns((a) => ek(rhs(a))),
    'Calcul avec des puissances de $e$': viaAns((a) => { const t = rhs(a).trim(); const m = t.match(/^e\^\{(-?\d+)\}$/); return t === 'e' ? 1 : t === '1' ? 0 : +m[1]; }),
    'Nombre dérivé en $0$ avec $e^{kx}$': viaAns((a) => +rhs(a)),
    'Dérivée d\'un produit avec $e^x$': viaAns((a) => { const [c0, c1] = lin(rhs(a).match(/\((.*?)\)e\^/)[1]); return [c1, c0]; }),
    'Dérivée de $(ax + b)e^{kx}$': viaAns((a) => { const [c0, c1] = lin(rhs(a).match(/\((.*?)\)e\^/)[1]); return [c1, c0]; }),
    'Équation avec des exponentielles': numsAns,
    'Équation $e^{u(x)} = 1$': numsAns
  };
  const n1A5 = {
    'Rang à partir duquel une suite croît': (q, s) => { const f = (n) => evalTex(mat(s, /u_n = (.*?)\$ pour/)[1], { n }); let n0 = 0; for (let n = 60; n >= 0; n--) { if (f(n + 1) < f(n)) { n0 = n + 1; break; } } return cmp(q, n0); },
    'Conjecturer une limite': (q, s) => { const f = (n) => evalTex(mat(s, /u_n = (.*?)\$ pour/)[1], { n }); return cmp(q, Math.round(f(1e7))); },
    'Différence de deux termes consécutifs': (q, s) => { const u = (n) => evalTex(mat(s, /Soit \$u_n = (.*?)\$ pour/)[1], { n }); const d = (n) => u(n + 1) - u(n); return formCheck(q, 'developpement', plainPoly([d(1) - d(0), d(0)], 'n')); }
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
  /** Triangle ABC à partir de ses côtés : A(0 ; 0), B(c ; 0), C au-dessus de (AB) */
  const triXY = (s) => {
    const m = mat(s, /AB = (\d+)\$, \$AC = (\d+)\$ et \$BC = (\d+)\$/); const c = +m[1]; const b = +m[2]; const a = +m[3];
    if (a >= b + c || b >= a + c || c >= a + b) throw new Error('triangle impossible');
    const x = (c * c + b * b - a * a) / (2 * c);
    return { a, b, c, P: { A: [0, 0], B: [c, 0], C: [x, Math.sqrt(b * b - x * x)] } };
  };
  const n1G2 = {
    'Angle entre deux vecteurs': viaAns((a) => piv(rhs(a))),
    'Produit scalaire de vecteurs colinéaires': (q, s) => {
      const m = mat(s, /AB = (\d+)\$ et \$AC = (\d+)\$ ; de plus, (.*?)\. Calculer \$\\overrightarrow\{(AB|BA)\} \\cdot \\overrightarrow\{AC\}/);
      const xB = +m[1]; const xC = /demi-droite \$\[AB\)\$/.test(m[3]) ? +m[2] : /segment \$\[BC\]\$/.test(m[3]) ? -m[2] : NaN;
      return cmp(q, (m[4] === 'AB' ? xB : -xB) * xC);
    },
    'Produit scalaire à partir des longueurs': (q, s) => {
      const { P } = triXY(s);
      const m = mat(s, /\\overrightarrow\{([A-C])([A-C])\} \\cdot \\overrightarrow\{([A-C])([A-C])\}/);
      const u = [P[m[2]][0] - P[m[1]][0], P[m[2]][1] - P[m[1]][1]]; const w = [P[m[4]][0] - P[m[3]][0], P[m[4]][1] - P[m[3]][1]];
      return cmp(q, u[0] * w[0] + u[1] * w[1]);
    }
  };
  const circ = (a) => { const t = rhs(a); const L = String(a).replace(/^\$/, '').split('=')[0]; const F = (x, y) => evalTex(L, { x, y }); const h = -(F(1, 0) - F(-1, 0)) / 4; const k = -(F(0, 1) - F(0, -1)) / 4; return [h, k, nv(t)]; };
  const n1G3 = {
    'Cosinus d\'un angle à partir des trois côtés': (q, s) => { const { a, b, c } = triXY(s); return cmp(q, (b * b + c * c - a * a) / (2 * b * c)); },
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
    'Loi de probabilité à partir d\'une urne': (q, s) => {
      const m = mat(s, /contient \$(\d+)\$ boules? rouges?, \$(\d+)\$ boules? vertes? et \$(\d+)\$ boules? bleues?,/); const n = [+m[1], +m[2], +m[3]];
      const gain = (col) => { const g = mat(s, new RegExp(`Une boule ${col} (?:rapporte \\$(\\d+)\\$ euros|fait perdre \\$(\\d+)\\$ euros|ne rapporte rien)\\.`)); return g[1] ? +g[1] : g[2] ? -g[2] : 0; };
      const g = ['rouge', 'verte', 'bleue'].map(gain); const v = +mat(s, /Calculer \$P\(X = (-?\d+)\)\$/)[1];
      return cmp(q, n.reduce((t, k, i) => t + (g[i] === v ? k : 0), 0) / (n[0] + n[1] + n[2]));
    },
    'Espérance : valeur manquante': (q, s) => {
      const cells = (re) => mat(s, re)[1].split('|').map((c) => c.trim().replace(/^\$|\$$/g, '')).filter((c) => c !== '');
      const xs = cells(/\| \$x_i\$ \|(.*)\|\n/); const ps = cells(/\| \$P\(X = x_i\)\$ \|(.*)\|/).map(nv);
      if (!near(ps.reduce((t, p) => t + p, 0), 1)) return 'loi : somme différente de 1';
      const E = nv(mat(s, /E\(X\) = (.*?)\$/)[1]); const k = xs.indexOf('a');
      return cmp(q, (E - xs.reduce((t, x, i) => t + (i === k ? 0 : +x * ps[i]), 0)) / ps[k]);
    },
    'Probabilité d\'un événement $\\{X \\le a\\}$': (q, s) => { const [xs, ps] = law(s); const m = mat(s, /Calculer \$P\(X (\\le|<|>|\\ge) (-?\d+)\)\$/); const a = +m[2]; return cmp(q, xs.reduce((t, x, i) => t + (rel[m[1]](x, a) ? ps[i] : 0), 0)); },
    'Loi d\'un gain': (q, s) => { const w = /un 6 ;|un 6,|obtient un 6/.test(s) && !/un 5/.test(s) ? 1 : /un 4/.test(s) ? 3 : 2; return cmp(q, /P\(X = -/.test(s) ? (6 - w) / 6 : w / 6); },
    'Écart type d\'une variable aléatoire': (q, s) => { const [xs, ps] = law(s); const E = xs.reduce((t, x, i) => t + x * ps[i], 0); const Vv = xs.reduce((t, x, i) => t + (x - E) ** 2 * ps[i], 0); return cmp(q, Math.round(Math.sqrt(Vv) * 100) / 100); },
    'Formule de König-Huygens': (q, s) => { const m = mat(s, /E\(X\) = (.*?)\$ et \$E\(X\^2\) = (.*?)\$/); return cmp(q, nv(m[2]) - nv(m[1]) ** 2); }
  };
  // troisième gabarit des paliers restés à deux (vérification du 15/11/2026)
  n2N2['Factorisation : différence des carrés de deux binômes'] = (q, s) => fullForm('factorisation', roundAll(quad(exprOf(s, 'F'))))(q);
  n2N4['Entiers solutions d\'une inéquation quotient'] = (q, s) => {
    const m = mat(s, /\$\\dfrac\{(.*?)\}\{(.*?)\} (\\le|<|\\ge|>) 0\$/); const N = fx(m[1]); const D = fx(m[2]);
    return cmp(q, countInt((x) => !near(D(x), 0) && rel[m[3]](N(x) / D(x), 0)));
  };
  n2G3['Coefficient directeur et équation cartésienne'] = (q, s) => { const [a, b] = cart(mat(s, /équation cartésienne \$(.*?) = 0\$/)[1]); return cmp(q, -a / b); };
  n1S2['Rendre un jeu équitable'] = (q, s) => {
    const m = mat(s, /partagée en \$(\d+)\$ secteurs.*dont \$(\d+)\$.*coûte \$(\d+)\$ €/); const n = +m[1]; const k = +m[2]; const mise = +m[3];
    return cmp(q, mise * n / k);
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
  reg('1A5', [1, 2, 3, 4], n1A5); reg('1A6', [1, 2, 3, 4], n1A6); reg('1G1', [1, 2, 3, 4], n1G1); reg('1G2', [1, 2, 4], n1G2);
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
  by('TA1/4', /accroissements affines/, (q) => {
    // u_0 et u_{n+1} = u_n + pn + q lus dans l'énoncé : u_n = αn² + βn + γ recalculée sur u_0, u_1, u_2
    const m = q.statement.match(/u_0 = (-?\d+)\$.*u_\{n\+1\} = u_n \+ (\d+)n(?: ([+-]) (\d+))?\$/);
    const u0 = +m[1]; const p = +m[2]; const c = m[3] ? (m[3] === '-' ? -1 : 1) * +m[4] : 0;
    const u1 = u0 + c; const u2 = u1 + p + c;
    const al = (u2 - 2 * u1 + u0) / 2; const be = u1 - u0 - al;
    const r = formCheck(q, 'developpement', plainPoly([al, be, u0], 'n'));
    return r === true ? undefined : r;
  });
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
    if (q.answerType !== 'developpement') return `answerType ${q.answerType} au lieu de developpement`;
    const want = [2 * P(2), 6 * P(3), 12 * P(4)];
    const u = ENGINE.parsePolyExpr(q.exactInput);
    if (!u || ENGINE.checkDeveloppement(q.exactInput, q.exactInput).correct !== true) return `saisie non réduite ${q.exactInput}`;
    return want.every((w, d) => near(w, u.poly[d] || 0)) && u.poly.length <= 3 ? undefined : `f'' attendu ${want.join(';')}, saisie ${q.exactInput}`;
  });
  by('TA4/4', /Tangente au point d'inflexion d'une cubique/, (q) => {
    const P = polyOf(q.statement.match(/f\(x\) = ([^$]*)\$/)[1]);
    const x0 = -P(2) / (3 * P(3));
    const f = (x) => P(3) * x ** 3 + P(2) * x * x + P(1) * x + P(0);
    const d = (x) => 3 * P(3) * x * x + 2 * P(2) * x + P(1);
    const m = d(x0); const p = f(x0) - m * x0;
    const A = V.poly(rhs(q.answer), 'x');
    if (!A || !near(A[1] || 0, m) || !near(A[0] || 0, p)) return `tangente attendue y = ${m}x + ${p}, trouvé ${q.answer}`;
    return lineForm(q, m, p);
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
    return formCheck(q, 'developpement', plainPoly([P(2) / 3, P(1) / 2, P(0), 0]));
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
      // tangente recalculée sur f (énoncé) : dérivée numérique en x0, coefficients rationnels
      const f = parse(q.statement.match(/Soit \$f\(x\) = (.*?)\$\./)[1], ['x']); const x0 = +q.statement.match(/abscisse \$(-?\d+)\$/)[1];
      const F = (x) => f({ x }); const m = snap((F(x0 + 1e-5) - F(x0 - 1e-5)) / 2e-5);
      const r = lineForm(q, m, snap(F(x0) - m * x0));
      return r === true ? undefined : r;
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
    const ks = q.statement.match(/\\overrightarrow\{AM\} = (.*?)\\overrightarrow\{AB\}/)[1]; const k = ks === '' ? 1 : ks === '-' ? -1 : ev(ks, {});
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
// ---- vérificateurs prioritaires CAPES : gabarits supplémentaires (une tâche distincte de plus par palier) ----
{
addPre((() => {
  const withTierKeys = (o) => { o['capes-08/1'] = o['capes-08']; o['capes-14/4'] = o['capes-14']; return o; }; // passent avant le bloc CAPES général
  const close = (a, b, eps = 1e-7) => Math.abs(a - b) <= eps * Math.max(1, Math.abs(a), Math.abs(b));
  const vals = (q) => String(q.answer).replace(/\s+/g, '').replace(/^\(|\)$/g, '').split(';').map((t) => { const m = t.match(/^(-?\d+)\/(\d+)$/); return m ? +m[1] / +m[2] : parseFloat(t); });
  const expect = (q, ...exp) => { const g = vals(q); return (g.length === exp.length && g.every((v, i) => close(v, exp[i]))) || `attendu (${exp.join(' ; ')}), obtenu ${q.answer}`; };
  const co = (t) => (t === '' ? 1 : t === '-' ? -1 : +t);
  const simpson = (f, a, b, n = 20000) => { const h = (b - a) / n; let s = f(a) + f(b); for (let i = 1; i < n; i++) s += f(a + i * h) * (i % 2 ? 4 : 2); return s * h / 3; };
  const dot = (u, v) => u.reduce((s, x, i) => s + x * v[i], 0);
  const list = (t) => t.split(';').map((x) => +x);
  const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
  const tv = (s) => { s = s.trim(); const m = s.match(/^(-?)\\frac\{(\d+)\}\{(\d+)\}$/); return m ? (m[1] ? -1 : 1) * m[2] / m[3] : +s; };
  const poly2 = (s) => {
    const t = s.replace(/\s+/g, ''); const c = [0, 0, 0];
    for (const m of t.matchAll(/([+-]?\d*)(x(?:\^2)?)?/g)) {
      if (m[0] === '') continue;
      if (!m[2]) c[2] += +m[1]; else c[m[2] === 'x' ? 1 : 0] += m[1] === '' || m[1] === '+' ? 1 : m[1] === '-' ? -1 : +m[1];
    }
    return c;
  };
  return withTierKeys({
    'capes-05': (q) => {
      const s = String(q.statement); let m;
      if (/norme au carré/.test(q.title)) {
        m = s.match(/\\\|x\\\| = (\d+)\$, \$\\\|y\\\| = (\d+)\$ et \$\\langle x, y\\rangle = (-?\d+)\$\. Calculer \$\\\|(-?\d*)x ([+-]) (\d*)y\\\|\^2/);
        const [nx, ny, ps] = [+m[1], +m[2], +m[3]];
        if (Math.abs(ps) > nx * ny) return 'Cauchy-Schwarz violée';
        const al = co(m[4]); const be = (m[5] === '-' ? -1 : 1) * co(m[6]);
        const X = [nx, 0]; const yx = ps / nx; const Y = [yx, Math.sqrt(Math.max(0, ny * ny - yx * yx))];
        const Z = X.map((v, i) => al * v + be * Y[i]);
        return expect(q, dot(Z, Z));
      }
      if (/deux fonctions affines/.test(q.title)) {
        m = s.match(/f\(t\) = (-?\d*)t ([+-]) (\d+)\$ et \$g\(t\) = (-?\d*)t \+ m/);
        const a = co(m[1]); const b = (m[2] === '-' ? -1 : 1) * +m[3]; const c = co(m[4]); const mv = vals(q)[0];
        return Math.abs(simpson((t) => (a * t + b) * (c * t + mv), 0, 1, 200)) < 1e-9 || 'fonctions non orthogonales';
      }
      if (/Distance à un plan/.test(q.title)) {
        m = [...s.matchAll(/= \((-?\d+ ; -?\d+ ; -?\d+)\)/g)].map((u) => list(u[1]));
        const [e1, e2, w] = m;
        if (dot(e1, e2) !== 0) return 'base non orthogonale';
        const n = [e1[1] * e2[2] - e1[2] * e2[1], e1[2] * e2[0] - e1[0] * e2[2], e1[0] * e2[1] - e1[1] * e2[0]];
        return expect(q, dot(w, n) ** 2 / dot(n, n));
      }
      if (/Minimum d'une intégrale/.test(q.title)) {
        m = s.match(/\\left\((-?\d*)t\^\{(\d+)\} - at - b/);
        const c = co(m[1]); const k = +m[2];
        // équations normales a/2 + b = B, a/3 + b/2 = A, résolues par Cramer
        const A = c / (k + 2); const B = c / (k + 1);
        const a = 12 * (A - B / 2); const b = 12 * (B / 3 - A / 2);
        return expect(q, simpson((t) => (c * t ** k - a * t - b) ** 2, 0, 1, 4000));
      }
      return undefined;
    },
    'capes-06': (q) => {
      const s = String(q.statement); let m;
      if (/Wallis/.test(q.title)) {
        m = s.match(/\\int_0\^\{\\pi\/2\} (\d*)\\(sin|cos)\^\{(\d+)\} t/);
        const c = co(m[1]); const f = m[2] === 'sin' ? Math.sin : Math.cos; const e = +m[3];
        return expect(q, simpson((t) => c * f(t) ** e, 0, Math.PI / 2, 4000));
      }
      if (/Intégrale oscillante/.test(q.title)) {
        m = s.match(/calculer \$\\displaystyle \\int_0\^\{\+\\infty\} t\\,e\^\{-(\d*)t\}\\(sin|cos)\((\d*)t\)/);
        const a = co(m[1]); const f = m[2] === 'sin' ? Math.sin : Math.cos; const b = co(m[3]);
        return expect(q, simpson((t) => t * Math.exp(-a * t) * f(b * t), 0, 60 / a, 40000));
      }
      return undefined;
    },
    'capes-07': (q) => {
      if (!/composée de permutations/.test(q.title)) return undefined;
      const s = String(q.statement);
      const rows = [...s.matchAll(/\\\\ ([\d &]+) \\end\{pmatrix\}/g)].map((m) => m[1].split('&').map((x) => +x));
      const k = +s.match(/\\circ \\tau\)\((\d+)\)/)[1];
      const [sg, ta] = rows;
      if (new Set(sg).size !== sg.length || new Set(ta).size !== ta.length) return 'pas des permutations';
      return expect(q, sg[ta[k - 1] - 1]);
    },
    'capes-08': (q) => {
      const s = String(q.statement); let m;
      if (/produit par une exponentielle/.test(q.title)) {
        m = s.match(/f\(x\) = (?:\(x ([+-]) (\d+)\)|x)e\^\{(-?\d*)x\}/);
        const b = m[1] ? (m[1] === '-' ? -1 : 1) * +m[2] : 0; const a = co(m[3]); const x0 = vals(q)[0];
        // f'' normalisée par l'exponentielle, par différences finies
        const dd = (x) => { const h = 1e-3; const g = (u) => (u + b) * Math.exp(a * (u - x)); return (g(x + h) + g(x - h) - 2 * g(x)) / (h * h); };
        return (Math.abs(dd(x0)) < 1e-3 && dd(x0 - 0.5) < 0 && dd(x0 + 0.5) > 0) || 'pas de changement concave vers convexe en x0';
      }
      if (/Tangente minorante/.test(q.title)) {
        const [al, b, c] = poly2(s.match(/f\(x\) = ([^$]+)\$/)[1]);
        const x0 = +s.match(/abscisse \$(-?\d+)\$/)[1];
        const f = (x) => al * x * x + b * x + c; const h = 1e-4; const d = (f(x0 + h) - f(x0 - h)) / (2 * h);
        const [mm, p] = vals(q);
        if (!close(mm, d, 1e-5) || !close(mm * x0 + p, f(x0))) return 'pas la tangente';
        for (let x = -8; x <= 8; x += 0.5) if (f(x) < mm * x + p - 1e-9) return 'courbe sous la tangente';
        return true;
      }
      if (/Jensen pour la racine/.test(q.title)) {
        const n = (s.match(/\\sqrt/g) || []).length; const S = +s.match(/de somme \$(\d+)\$/)[1];
        return expect(q, n * Math.sqrt(S / n));
      }
      if (/somme de quotients/.test(q.title)) {
        const ns = [...s.matchAll(/\\frac\{(\d+)\}\{[xyz]\}/g)].map((u) => +u[1]);
        const S = +s.match(/= (\d+)\$\./)[1]; const rs = ns.map(Math.sqrt); const T = rs.reduce((u, v) => u + v, 0);
        const val = (xs) => ns.reduce((u, v, i) => u + v / xs[i], 0);
        const best = rs.map((r) => r * S / T);
        for (let i = 0; i < 200; i++) {
          const w = ns.map(() => 0.01 + Math.random()); const W = w.reduce((u, v) => u + v, 0);
          if (val(w.map((v) => v * S / W)) < val(best) - 1e-9) return 'minimum dépassé';
        }
        return expect(q, val(best));
      }
      return undefined;
    },
    'capes-09': (q) => {
      const s = String(q.statement); let m;
      if (/Écriture décimale périodique/.test(q.title)) {
        const b = s.match(/\\overline\{(\d+)\}/)[1];
        const A = String(q.answer).match(/^(\d+)\/(\d+)$/);
        if (A && gcd(+A[1], +A[2]) !== 1) return 'fraction réductible';
        return expect(q, parseFloat('0.' + b.repeat(6)));
      }
      if (/Seuil de convergence/.test(q.title)) {
        m = s.match(/u_n = \\frac\{n(?:\^\{(\d+)\})? \+ \d+\}\{n\^\{\\alpha\} \+ \d+\}/);
        return expect(q, (m[1] ? +m[1] : 1) + 2);
      }
      if (/Produit de Cauchy/.test(q.title)) {
        m = s.match(/avec \$a = ([^$]+)\$ et \$b = ([^$]+)\$/);
        const a = tv(m[1]); const b = tv(m[2]); let S = 0;
        for (let n = 0; n <= 120; n++) { let cn = 0; for (let k = 0; k <= n; k++) cn += a ** k * b ** (n - k); S += cn; }
        return expect(q, S);
      }
      if (/Somme double/.test(q.title)) {
        m = s.match(/\\frac\{(\d*)(p?)\}\{(\d+)\^q\}/);
        const c = co(m[1]); const w = m[2] === 'p'; const M = +m[3]; let S = 0;
        for (let Q = 1; Q <= 400; Q++) for (let p = 1; p <= Q; p++) S += (w ? c * p : c) / M ** Q;
        return expect(q, S);
      }
      return undefined;
    },
    'capes-10': (q) => {
      const s = String(q.statement); let m;
      if (/Nombre de diviseurs/.test(q.title)) {
        const n = +s.match(/l'entier \$(\d+)\$/)[1]; let c = 0;
        for (let d = 1; d <= n; d++) if (n % d === 0) c++;
        return expect(q, c);
      }
      if (/petit théorème de Fermat/.test(q.title)) {
        m = s.match(/\$(\d+)\^\{(\d+)\}\$ par \$(\d+)\$/);
        let r = 1; for (let i = 0; i < +m[2]; i++) r = (r * +m[1]) % +m[3];
        return expect(q, r);
      }
      if (/équation diophantienne/.test(q.title)) {
        m = s.match(/\$(\d+)x \+ (\d+)y = (\d+)\$/);
        const [a, b, c] = [+m[1], +m[2], +m[3]]; let cnt = 0;
        for (let x = 0; a * x <= c; x++) if ((c - a * x) % b === 0) cnt++;
        return expect(q, cnt);
      }
      return undefined;
    },
    'capes-14': (q) => {
      if (!/Coefficient de détermination/.test(q.title)) return undefined;
      const m = String(q.statement).match(/\$x\$ prend les valeurs \$([\d ;]+)\$ et \$y\$ les valeurs correspondantes \$([-\d ;]+)\$/);
      const x = list(m[1]); const y = list(m[2]); const n = x.length;
      const mx = x.reduce((u, v) => u + v, 0) / n; const my = y.reduce((u, v) => u + v, 0) / n;
      const c = x.reduce((u, v, i) => u + (v - mx) * (y[i] - my), 0);
      const vx = x.reduce((u, v) => u + (v - mx) ** 2, 0); const vy = y.reduce((u, v) => u + (v - my) ** 2, 0);
      return expect(q, c * c / (vx * vy));
    },
  });
})());
}
// ---- vérificateurs prioritaires : familles à saisie ajoutées au supérieur (part de QCM, audit 2026-11) ----
{
addPre((() => {
  const close = (a, b) => Math.abs(a - b) <= 1e-9 * Math.max(1, Math.abs(a), Math.abs(b));
  // valeur d'une réponse LaTeX : entier, fraction, multiple rationnel de π ou π² (membre de droite)
  const tval = (s) => {
    s = String(s).replace(/^\$|\$$/g, '').split('= ').pop().replace(/\s+/g, '');
    let m;
    if ((m = s.match(/^(-?)\\frac\{(\d*)(\\pi(?:\^(\d))?)?\}\{(\d+)\}$/))) return (m[1] ? -1 : 1) * (m[2] ? +m[2] : 1) * (m[3] ? Math.PI ** (m[4] ? +m[4] : 1) : 1) / +m[5];
    if ((m = s.match(/^(-?)(\d*)(\\pi(?:\^(\d))?)?$/)) && (m[2] || m[3])) return (m[1] ? -1 : 1) * (m[2] ? +m[2] : 1) * (m[3] ? Math.PI ** (m[4] ? +m[4] : 1) : 1);
    return NaN;
  };
  // valeur d'une saisie : entier, a/b, kπ^p/d
  const ival = (s) => {
    const m = String(s).replace(/\s+/g, '').match(/^(-?)(\d*)(π(?:\^(\d))?)?(?:\/(\d+))?$/);
    if (!m || !(m[2] || m[3])) return NaN;
    return (m[1] ? -1 : 1) * (m[2] ? +m[2] : 1) * (m[3] ? Math.PI ** (m[4] ? +m[4] : 1) : 1) / (m[5] ? +m[5] : 1);
  };
  const expect = (q, v, tol) => {
    const near = (a) => (tol ? Math.abs(a - v) <= tol * Math.max(1, Math.abs(v)) : close(a, v));
    if (!near(tval(q.answer))) return `réponse ${q.answer} au lieu de ${v}`;
    if (q.exactInput !== undefined && !near(ival(q.exactInput))) return `saisie ${q.exactInput} au lieu de ${v}`;
    return true;
  };
  // forme linéaire « -3x - 4y », « 2y + 1 » : coefficients des lettres et constante
  const lin = (s) => {
    const r = { c: 0 };
    for (const t of String(s).replace(/\s+/g, '').match(/[+-]?[^+-]+/g)) {
      const m = t.match(/^([+-]?)(\d*)([a-z]?)$/);
      const v = (m[1] === '-' ? -1 : 1) * (m[2] ? +m[2] : 1);
      if (m[3]) r[m[3]] = (r[m[3]] || 0) + v; else r.c += v;
    }
    return r;
  };
  const isPrime = (v) => { if (v < 2) return false; for (let d = 2; d * d <= v; d++) if (v % d === 0) return false; return true; };
  const B = BigInt;
  const factB = (n) => { let r = B(1); for (let i = 2; i <= n; i++) r *= B(i); return r; };
  return {
    'L1-PRF': (q) => {
      const S = q.statement; let m;
      if ((m = S.match(/le nombre \$P\(n\) = (.*?)\$ est premier/))) {
        const L = lin(m[1].replace('n^2', 'q')); // q : coefficient de n², ici 1
        const P = (n) => (L.q || 0) * n * n + (L.n || 0) * n + L.c;
        let n = 0; while (isPrime(P(n))) n++;
        return expect(q, n);
      }
      if ((m = S.match(/l'inégalité \$(.*?)\$ pour tout entier \$n \\geq n_0\$/))) {
        const [g, d] = m[1].split(' > ');
        const side = (t, n) => {
          let k;
          if (t === 'n!') return factB(n);
          if ((k = t.match(/^(\d+)\^n$/))) return B(+k[1]) ** B(n);
          if ((k = t.match(/^n\^(\d+)$/))) return B(n) ** B(+k[1]);
          if ((k = t.match(/^(\d+)n$/))) return B(+k[1] * n);
          throw new Error('membre non reconnu ' + t);
        };
        let last = 0;
        for (let n = 1; n <= 200; n++) if (!(side(g, n) > side(d, n))) last = n;
        return expect(q, last + 1);
      }
      if ((m = S.match(/Pour \$f\(x\) = \(x ([+-]) (\d+)\)\^(\d+)\$, calculer \$([gh])\((-?\d+)\)\$/))) {
        const a = (m[1] === '-' ? -1 : 1) * +m[2]; const p = +m[3]; const x = +m[5];
        const f = (t) => (t + a) ** p;
        return expect(q, m[4] === 'g' ? (f(x) + f(-x)) / 2 : (f(x) - f(-x)) / 2);
      }
      if ((m = S.match(/u_n = \\frac\{(.*?)\}\{n \+ 1\}\$ pour \$n \\in \\mathbb\{N\}\$, qui tend vers \$(-?\d+)\$\. Pour \$\\varepsilon = \\frac\{(\d+)\}\{(\d+)\}\$/))) {
        const L = lin(m[1]); const l = +m[2]; const p = +m[3]; const r = +m[4];
        // |u_n - l| <= p/r  <=>  r |(a n + c) - l (n + 1)| <= p (n + 1) (calcul entier)
        let last = -1;
        for (let n = 0; n <= 100000; n++) if (r * Math.abs((L.n || 0) * n + L.c - l * (n + 1)) > p * (n + 1)) last = n;
        return expect(q, last + 1);
      }
      // L1-PRF n'a pas de vérificateur principal : les familles de raisonnement (QCM) restent non vérifiées
      return 'skip';
    },
    'L1-TAY/1': (q) => {
      const m = q.statement.match(/^Soit \$f\(x\) = (.*?)\$\. À l'aide du développement limité de \$f\$ en \$0\$, calculer \$f\^\{\((\d)\)\}\(0\)\$/);
      if (!m) return undefined;
      const k = +m[2]; const co = (s) => (s === '' ? 1 : s === '-' ? -1 : +s); let mm; let v;
      const fk = (j) => (j <= 1 ? 1 : j * fk(j - 1));
      // dérivées successives en 0, formules fermées
      if ((mm = m[1].match(/^e\^\{(-?\d*)x\}$/))) v = co(mm[1]) ** k;
      else if ((mm = m[1].match(/^\\sin\((-?\d*)x\)$/))) v = co(mm[1]) ** k * Math.round(Math.sin((k * Math.PI) / 2));
      else if ((mm = m[1].match(/^\\cos\((-?\d*)x\)$/))) v = co(mm[1]) ** k * Math.round(Math.cos((k * Math.PI) / 2));
      else if ((mm = m[1].match(/^\\ln\(1 ([+-]) (\d*)x\)$/))) { const a = (mm[1] === '-' ? -1 : 1) * co(mm[2]); v = (-1) ** (k - 1) * fk(k - 1) * a ** k; }
      else if ((mm = m[1].match(/^\\dfrac\{1\}\{1 ([+-]) (\d*)x\}$/))) { const a = (mm[1] === '-' ? 1 : -1) * co(mm[2]); v = fk(k) * a ** k; }
      else return 'fonction non reconnue ' + m[1];
      return expect(q, v);
    },
    'L1-TAY/3': (q) => {
      const m = q.statement.match(/^Soit \$f\(x\) = (.*?)\$\. Déterminer un équivalent de \$f\$ en \$0\$ de la forme/);
      if (!m) return undefined;
      const co = (s) => (s === '' ? 1 : s === '-' ? -1 : +s); let mm; let f;
      if ((mm = m[1].match(/^\\sin\((\d*)x\) - (\d*)x\\cos\((\d*)x\)$/))) { const a = co(mm[1]); const b = co(mm[3]); f = (x) => Math.sin(a * x) - a * x * Math.cos(b * x); }
      else if ((mm = m[1].match(/^e\^\{(-?\d*)x\} - 1 - \\ln\(1 ([+-]) (\d*)x\)$/))) { const a = co(mm[1]); const a2 = (mm[2] === '-' ? -1 : 1) * co(mm[3]); f = (x) => Math.exp(a * x) - 1 - Math.log1p(a2 * x); }
      else if ((mm = m[1].match(/^\\cos\((\d*)x\) - \\dfrac\{1\}\{1 \+ (\d*)x\^2\}$/))) { const a = co(mm[1]); const b = co(mm[2]); f = (x) => Math.cos(a * x) - 1 / (1 + b * x * x); }
      else return 'fonction non reconnue ' + m[1];
      const t = String(q.answer).match(/\\sim\} (-?)(\\frac\{\d+\}\{\d+\}|\d*)x\^(\d)\$$/);
      if (!t) return 'réponse non lue ' + q.answer;
      const c = (t[1] ? -1 : 1) * (t[2] === '' ? 1 : tval(t[2])); const p = +t[3];
      // f(h)/h^p -> c, extrapolation de Richardson pour éliminer le terme d'ordre h
      const g = (h) => f(h) / h ** p;
      const lim = 2 * g(5e-4) - g(1e-3);
      if (Math.abs(lim - c) > 1e-3 * Math.max(1, Math.abs(c))) return `équivalent ${c} x^${p} au lieu de ${lim}`;
      if (q.exactInput !== undefined) {
        const s = String(q.exactInput).replace(/^\(|\)$/g, '').split(';');
        if (s.length !== 2 || !close(ival(s[0]), c) || +s[1] !== p) return 'saisie ' + q.exactInput;
      }
      return true;
    },
    'L3-MET/4': (q) => {
      const m = q.statement.match(/norme \$\\\|\\cdot\\\|_(\\infty|1)\$, on considère la droite \$D : (.*?) = (-?\d+)\$ et le point \$P = \((-?\d+) ; (-?\d+)\)\$/);
      if (!m) return undefined;
      const L = lin(m[2]); const a = L.x; const b = L.y; const c = +m[3]; const x0 = +m[4]; const y0 = +m[5];
      const N = m[1] === '1' ? (u, v) => Math.abs(u) + Math.abs(v) : (u, v) => Math.max(Math.abs(u), Math.abs(v));
      // M = (t, (c - a t)/b) : la norme de M - P est convexe et affine par morceaux en t ;
      // son minimum est atteint en un point où u = 0, v = 0 ou |u| = |v|
      const v = (t) => (c - a * t) / b - y0;
      const ts = [x0, (c - b * y0) / a, (c - b * y0 + b * x0) / (a + b), (c - b * y0 - b * x0) / (a - b)].filter(Number.isFinite);
      const best = Math.min(...ts.map((t) => N(t - x0, v(t))));
      return expect(q, best);
    },
    'L3-BAN/4': (q) => {
      const m = q.statement.match(/problème de Cauchy \$y' = (.*?)\$, \$y\(0\) = (-?\d+)\$\..*Calculer \$y_(\d)\(1\)\$/);
      if (!m) return undefined;
      const L = lin(m[1]); const a = L.y; const c = L.c; const b = +m[2]; const k = +m[3];
      // itérées calculées par quadrature (trapèzes) sur une grille fine
      const Npts = 4000; const h = 1 / Npts;
      let y = new Array(Npts + 1).fill(b);
      for (let it = 0; it < k; it++) {
        const ny = [b]; let acc = 0;
        for (let i = 1; i <= Npts; i++) { acc += (h * (a * y[i - 1] + c + a * y[i] + c)) / 2; ny.push(b + acc); }
        y = ny;
      }
      return expect(q, y[Npts], 1e-5);
    },
    'L3-SDF/3': (q) => {
      const m = q.statement.match(/on pose \$f_n\(x\) = \\frac\{(\d*)(x\(1 - x\)|x)\}\{(\d+)\^n(\(1 \+ x\^2\))?\}\$ pour \$n \\geq 1\$\. Calculer \$\\sum_\{n=1\}\^\{\+\\infty\} \\\|f_n\\\|_\\infty\$/);
      if (!m) return undefined;
      const k = m[1] ? +m[1] : 1; const c = +m[3];
      const g = m[2] === 'x' ? (x) => x / (1 + x * x) : (x) => x * (1 - x);
      const [lo, hi] = m[2] === 'x' ? [-50, 50] : [0, 1];
      let sup = 0; for (let i = 0; i <= 200000; i++) sup = Math.max(sup, Math.abs(g(lo + ((hi - lo) * i) / 200000)));
      let s = 0; for (let n = 1; n <= 80; n++) s += (k * sup) / c ** n;
      return expect(q, s, 1e-6);
    },
    'L3-FOU/4': (q) => {
      const m = q.statement.match(/calculer \$S = \\sum_\{n \\geq ([01])\} \\frac\{(\d*)(\(-1\)\^\{n\+1\}|\(-1\)\^n)?\}\{(n\^2|\(2n\+1\)\^2|2n\+1)\}\$/);
      if (!m) return undefined;
      const n0 = +m[1]; const c = m[2] ? +m[2] : 1; const sg = m[3];
      const den = { 'n^2': (n) => n * n, '(2n+1)^2': (n) => (2 * n + 1) ** 2, '2n+1': (n) => 2 * n + 1 }[m[4]];
      const term = (n) => (sg === '(-1)^n' ? (-1) ** n : sg ? (-1) ** (n + 1) : 1) / den(n);
      const NN = 400000; let s = 0; let prev = 0;
      for (let n = n0; n <= NN; n++) { prev = s; s += term(n); }
      // série alternée : moyenne des deux dernières sommes partielles ; série positive : reste ~ 1/N (n²) ou 1/(4N) ((2n+1)²)
      const tot = sg ? (s + prev) / 2 : s + (m[4] === 'n^2' ? 1 / NN : 1 / (4 * NN));
      return expect(q, c * tot, 1e-7);
    }
  };
})());
}
// ---- vérificateurs 1TC4 / 1TC5 / 1TC6 (Première tronc commun : suites arithmétiques, paraboles, suites géométriques) ----
{
addPre(((V) => {
  // ---- 1TC4 / 1TC5 / 1TC6 : recalcul indépendant à partir de l'énoncé (forme QCM d'origine) ----
  const NB = '(-?[\\d\\\\,{}]+)';
  const num = (s) => parseFloat(String(s).replace(/\\,/g, '').replace(/\{,\}/g, '.').replace(/,/g, '.').replace(/\s/g, ''));
  const near = (a, b) => Math.abs(a - b) <= 1e-6 * Math.max(1, Math.abs(b));
  const rhs = (s) => String(s).replace(/\$/g, '').replace(/\\,\\%/g, '').split('=').pop().trim();
  /** réponse numérique attendue v : contrôle de la réponse affichée et de la saisie */
  const ok = (q, v) => {
    const a = num(rhs(q.answer));
    if (!near(a, v)) return `réponse ${q.answer} au lieu de ${v}`;
    if (q.exactInput !== undefined && !near(num(q.exactInput), v)) return `saisie ${q.exactInput} au lieu de ${v}`;
    return true;
  };
  const okText = (q, cond, msg) => (cond ? true : `${msg} (réponse : ${q.answer})`);
  /** forme factorisée « -0{,}5x(x - 2) », « 2(x + 3)(x - 5) » -> { a, roots } */
  const fact = (s) => {
    const t = String(s).replace(/\$/g, '').replace(/\s+/g, '');
    const m = t.match(/^(-?)([\d{},]*)(x?)((?:\(x[+-][\d{},]+\))+)$/);
    if (!m) return null;
    const a = (m[1] ? -1 : 1) * (m[2] ? num(m[2]) : 1);
    const roots = m[3] ? [0] : [];
    for (const f of m[4].matchAll(/\(x([+-])([\d{},]+)\)/g)) roots.push(f[1] === '-' ? num(f[2]) : -num(f[2]));
    return roots.length === 2 ? { a, roots } : null;
  };
  const fval = (F, x) => F.a * (x - F.roots[0]) * (x - F.roots[1]);
  /** ensemble LaTeX (réunion d'intervalles) -> fonction d'appartenance */
  const setOf = (s) => {
    const t = String(s).replace(/\$/g, '').replace(/^S=/, '').replace(/\s+/g, '').replace(/^S=/, '');
    const parts = t.split('\\cup');
    const iv = [];
    for (const p of parts) {
      const m = p.match(/^\\left([\[\]])(-\\infty|-?[\d{},]+);(\+\\infty|-?[\d{},]+)\\right([\[\]])$/);
      if (!m) return null;
      const lo = /infty/.test(m[2]) ? -Infinity : num(m[2]); const hi = /infty/.test(m[3]) ? Infinity : num(m[3]);
      iv.push({ lo, hi, lc: m[1] === '[', rc: m[4] === ']' });
    }
    return (x) => iv.some((I) => (x > I.lo || (I.lc && x === I.lo)) && (x < I.hi || (I.rc && x === I.hi)));
  };
  /** compare l'ensemble de la réponse au prédicat sur des points tests (bornes, voisinages, milieu) */
  const sameSet = (q, pred, pts) => {
    const mem = setOf(q.answer);
    if (!mem) return `ensemble illisible : ${q.answer}`;
    for (const x of pts) if (mem(x) !== pred(x)) return `ensemble faux en x = ${x} (${q.answer})`;
    return true;
  };
  const testPts = (r) => { const out = []; for (const x of r) out.push(x, x - 0.5, x + 0.5, x - 1e-3, x + 1e-3); out.push((r[0] + r[r.length - 1]) / 2, -1e3, 1e3); return out; };

  const ch4 = (q) => {
    const S = q.statement; let m;
    if ((m = S.match(new RegExp(`de premier terme \\$u\\(0\\) = ${NB}\\$ et de raison \\$${NB}\\$\\. Calculer \\$u\\((\\d+)\\)\\$`)))) return ok(q, num(m[1]) + +m[3] * num(m[2]));
    if ((m = S.match(new RegExp(`\\$u\\((\\d+)\\) = ${NB}\\$ et \\$u\\((\\d+)\\) = ${NB}\\$\\. (?:Calculer \\$u\\((\\d+)\\)\\$|Quelle est sa raison)`)))) {
      const r = (num(m[4]) - num(m[2])) / (m[3] - m[1]);
      return ok(q, m[5] ? num(m[2]) + (m[5] - m[1]) * r : r);
    }
    if ((m = S.match(/définie par \$u\(0\) = (-?\d+)\$ et, pour tout entier naturel \$n\$, \$u\(n\+1\) = u\(n\) ([+-]) (\d+)\$/))) return okText(q, /décroissante/.test(q.answer) === (m[2] === '-') && /croissante/.test(q.answer), 'sens de variation');
    if ((m = S.match(/la fonction affine \$f\$ définie sur \$\\mathbb\{R\}\$ par \$f\(x\) = (.*?)\$/))) {
      const P = V.poly(m[1]); if (!P) return 'expression illisible';
      return okText(q, /décroissante/.test(q.answer) === (P[1] < 0) && /croissante/.test(q.answer), 'sens de variation');
    }
    if (/Quelle relation vérifie la suite/.test(S)) {
      const R = num((S.match(/\$([\d\\,{}]+)\$ (?:nouveaux|€ chaque|cm par|L chaque|m par)/) || [])[1]);
      const down = /prélève|diminue/.test(S);
      return okText(q, new RegExp(`u\\(n\\+1\\) = u\\(n\\) ${down ? '-' : '\\+'} `).test(q.answer) && near(num(q.answer.replace(/\$/g, '').split(/[+-] /).pop()), R), 'relation de récurrence');
    }
    if ((m = S.match(new RegExp(`de sorte que \\$u\\(1\\) = ${NB}\\$\\. .*?\\$(\\d+)\\$e `)))) {
      const r = num(S.match(new RegExp(`ensuite \\$${NB}\\$`))[1]);
      return ok(q, num(m[1]) + (m[2] - 1) * r);
    }
    if ((m = S.match(new RegExp(`On sait que \\$f\\(${NB}\\) = ${NB}\\$ et \\$f\\(${NB}\\) = ${NB}\\$\\. Déterminer l'expression`)))) {
      const a = (num(m[4]) - num(m[2])) / (num(m[3]) - num(m[1])); const b = num(m[2]) - a * num(m[1]);
      const P = V.poly(rhs(q.answer)); if (!P) return 'réponse illisible';
      if (!near(P[1] || 0, a) || !near(P[0] || 0, b)) return `f(x) = ${q.answer} au lieu de ${a}x + ${b}`;
      if (q.exactInput !== undefined) { const Q = V.poly(String(q.exactInput).replace(/,/g, '{,}')); if (!Q || !near(Q[1] || 0, a) || !near(Q[0] || 0, b)) return `saisie ${q.exactInput}`; }
      return true;
    }
    if ((m = S.match(new RegExp(`(?:avec|ouvre avec|dispose de|mesure|contient|moyenne de) \\$${NB}\\$.*?\\$${NB}\\$ (?:nouveaux|€ chaque|cm par|L chaque|m par).*?(?:dépassera-t-(?:il|elle)|passera-t-(?:il|elle) sous) \\$${NB}\\$`)))) {
      const u0 = num(m[1]); const r = num(m[2]); const Sx = num(m[3]); const down = /prélève|diminue/.test(S);
      let n = 0; while (down ? u0 - r * n >= Sx : u0 + r * n <= Sx) n++;
      return ok(q, n);
    }
    if ((m = S.match(new RegExp(`sans abonnement, \\$${NB}\\$ € par .*?carte annuelle à \\$${NB}\\$ €, \\$${NB}\\$ € par`)))) {
      const a1 = num(m[1]); const b2 = num(m[2]); const a2 = num(m[3]);
      let n = 0; while (!(a2 * n + b2 < a1 * n - 1e-9)) n++;
      return ok(q, n);
    }
    if ((m = S.match(new RegExp(`compte \\$${NB}\\$ \\S+ et gagne \\$(\\d+)\\$ \\S+ par an ; .*? B compte \\$${NB}\\$ \\S+ et (gagne|perd) \\$(\\d+)\\$`)))) {
      const A0 = num(m[1]); const ra = +m[2]; const B0 = num(m[3]); const rb = (m[4] === 'perd' ? -1 : 1) * m[5];
      let n = 0; while (A0 + ra * n <= B0 + rb * n) n++;
      return ok(q, 2026 + n);
    }
    if ((m = S.match(new RegExp(`En 2026, .*?\\$${NB}\\$ (?:tonnes|bornes).*?(baissent|augmente|installe) ensuite (?:de )?\\$${NB}\\$.*?(?:passeront-elles sous|dépassera-t-elle|plus de) \\$${NB}\\$`)))) {
      const u1 = num(m[1]); const r = num(m[3]); const Sx = num(m[4]); const down = m[2] === 'baissent';
      let n = 1; while (down ? u1 - r * (n - 1) >= Sx : u1 + r * (n - 1) <= Sx) n++;
      return ok(q, 2025 + n);
    }
    // interpolation affine : deux couples (x ; y) puis antécédent
    let pts = null; let Y = null;
    if ((m = S.match(new RegExp(`température de \\$${NB}\\$ °C à \\$${NB}\\$ m d'altitude et de \\$${NB}\\$ °C à \\$${NB}\\$ m.*?de \\$${NB}\\$ °C selon`)))) { pts = [[m[2], m[1]], [m[4], m[3]]]; Y = m[5]; }
    else if ((m = S.match(new RegExp(`course de taxi de \\$${NB}\\$ km coûte \\$${NB}\\$ € et une course de \\$${NB}\\$ km coûte \\$${NB}\\$ €.*?pour \\$${NB}\\$ €`)))) { pts = [[m[1], m[2]], [m[3], m[4]]]; Y = m[5]; }
    else if ((m = S.match(new RegExp(`ressort mesure \\$${NB}\\$ cm lorsqu'on y suspend \\$${NB}\\$ kg et \\$${NB}\\$ cm avec \\$${NB}\\$ kg.*?mesure \\$${NB}\\$ cm \\?`)))) { pts = [[m[2], m[1]], [m[4], m[3]]]; Y = m[5]; }
    if (pts) {
      const [[x1, y1], [x2, y2]] = pts.map((p) => p.map(num));
      const a = (y2 - y1) / (x2 - x1); const b = y1 - a * x1;
      return ok(q, (num(Y) - b) / a);
    }
    return undefined;
  };

  const ch5 = (q) => {
    const S = q.statement; let m;
    const fm = S.match(/\$[fhB]\(x\) = (.*?)\$/);
    const F = fm ? fact(fm[1]) : null;
    if (F && /solutions de l'équation \$f\(x\) = 0\$/.test(S)) {
      const r = [...F.roots].sort((a, b) => a - b);
      const got = [...String(q.answer).matchAll(/\$(-?\d+)\$/g)].map((x) => +x[1]);
      return okText(q, got.length === 2 && got[0] === r[0] && got[1] === r[1], 'racines');
    }
    if (F && (m = S.match(/Calculer \$f\((-?\d+)\)\$/))) return ok(q, fval(F, +m[1]));
    if (F && /abscisse du sommet/.test(S)) return ok(q, (F.roots[0] + F.roots[1]) / 2);
    if (F && /coordonnées du sommet/.test(S)) {
      const al = (F.roots[0] + F.roots[1]) / 2; const be = fval(F, al);
      const mm = String(q.answer).match(/\\left\((.*?) ; (.*?)\\right\)/);
      if (!mm || !near(num(mm[1]), al) || !near(num(mm[2]), be)) return `sommet ${q.answer} au lieu de (${al} ; ${be})`;
      if (q.exactInput !== undefined) { const e = String(q.exactInput).replace(/[()\s]/g, '').split(';'); if (!near(num(e[0]), al) || !near(num(e[1]), be)) return `saisie ${q.exactInput}`; }
      return true;
    }
    if (F && /a-t-on \$f\(x\) \\geqslant 0\$/.test(S)) return sameSet(q, (x) => fval(F, x) >= -1e-12, testPts(F.roots));
    if (F && /est-elle croissante/.test(S)) { const al = (F.roots[0] + F.roots[1]) / 2; return sameSet(q, (x) => (F.a > 0 ? x >= al : x <= al), testPts([al])); }
    if ((m = S.match(/l'inéquation \$(.*?) (\\geqslant|\\leqslant|>|<) 0\$/))) {
      const G = fact(m[1]); if (!G) return 'expression illisible';
      const op = m[2];
      const pred = (x) => { const v = fval(G, x); return op === '>' ? v > 1e-12 : op === '<' ? v < -1e-12 : op === '\\geqslant' ? v >= -1e-12 : v <= 1e-12; };
      return sameSet(q, pred, testPts(G.roots));
    }
    if (F && /Elle admet un (?:minimum|maximum)/.test(S)) {
      const al = (F.roots[0] + F.roots[1]) / 2;
      if ((F.a > 0) !== /minimum/.test(S)) return 'nature de l\'extremum';
      return ok(q, fval(F, al));
    }
    if (F && /hauteur maximale/.test(S)) return ok(q, fval(F, (F.roots[0] + F.roots[1]) / 2));
    if (F && /bénéfice est-il positif ou nul/.test(S)) return sameSet(q, (x) => x >= 0 && x <= 100 && fval(F, x) >= -1e-12, [...testPts(F.roots), 0, 100, -0.5, 100.5]);
    if ((m = S.match(/\$f\(x\) = (-?[\d{},]*)x\^2(?: ([+-]) ([\d{},]*)x)?(?: ([+-]) ([\d{},]+))?\$\. En résolvant/))) {
      const a = (m[1] === '-' ? -1 : m[1] === '' ? 1 : num(m[1]));
      const b = m[2] ? (m[2] === '-' ? -1 : 1) * (m[3] ? num(m[3]) : 1) : 0;
      return ok(q, -b / (2 * a));
    }
    if ((m = S.match(/s'écrit \$f\(x\) = a(.*?)\$, et sa parabole passe par le point de coordonnées \$\\left\((-?[\d{},]+) ; (-?[\d{},]+)\\right\)\$/))) {
      const G = fact(m[1]); if (!G) return 'expression illisible';
      return ok(q, num(m[3]) / fval(G, num(m[2])));
    }
    if ((m = S.match(/aux points d'abscisses \$(-?\d+)\$ et \$(-?\d+)\$, et son sommet a pour ordonnée \$(-?[\d{},]+)\$/))) {
      const x1 = +m[1]; const x2 = +m[2]; const al = (x1 + x2) / 2; const a = num(m[3]) / ((al - x1) * (al - x2));
      const G = fact(rhs(q.answer));
      if (!G || !near(G.a, a) || [...G.roots].sort((p, r) => p - r).join() !== [x1, x2].sort((p, r) => p - r).join()) return `forme ${q.answer} (a attendu ${a})`;
      return true;
    }
    if ((m = S.match(/Une parabole tournée vers le (haut|bas) coupe l'axe des abscisses aux points d'abscisses \$(-?\d+)\$ et \$(-?\d+)\$/))) {
      const G = fact(rhs(q.answer));
      return okText(q, G && (G.a > 0) === (m[1] === 'haut') && [...G.roots].sort((p, r) => p - r).join() === [+m[2], +m[3]].sort((p, r) => p - r).join(), 'expression de la parabole');
    }
    if ((m = S.match(/par \$f\(x\) = (.*?)\$ est une parabole/))) {
      const P = V.poly(m[1]); if (!P) return 'expression illisible';
      const mm = String(q.answer).match(/\\left\(0 ; (-?\d+)\\right\)/);
      return okText(q, /haut/.test(q.answer) === (P[2] > 0) && mm && +mm[1] === (P[0] || 0), 'allure de la parabole');
    }
    if ((m = S.match(/l'aire de l'enclos est \$A\(x\) = x\((\d+) - (2?)x\)\$/))) {
      const L = +m[1]; const k = m[2] ? 2 : 1;
      return ok(q, (L / (2 * k)) * (L - k * L / (2 * k)));
    }
    return undefined;
  };

  const ch6 = (q) => {
    const S = q.statement; let m;
    const tx = S.match(/(augmente|diminue) de \$([\d{},]+)\\,\\%\$/);
    if (tx && /Quelle est sa raison \$q\$/.test(S)) return ok(q, 1 + (tx[1] === 'augmente' ? 1 : -1) * num(tx[2]) / 100);
    if (tx && /Quelle relation vérifie/.test(S)) {
      const c = 1 + (tx[1] === 'augmente' ? 1 : -1) * num(tx[2]) / 100;
      const mm = String(q.answer).match(/u\(n\+1\) = ([\d{},]+)\\,u\(n\)/);
      return okText(q, mm && near(num(mm[1]), c), 'relation de récurrence');
    }
    if ((m = S.match(new RegExp(`de premier terme \\$u\\(0\\) = ${NB}\\$ et de raison \\$${NB}\\$\\. (?:Calculer \\$u\\((\\d+)\\)\\$|Quel est son sens)`)))) {
      if (!m[3]) return okText(q, /décroissante/.test(q.answer) === (num(m[2]) < 1), 'sens de variation');
      return ok(q, num(m[1]) * num(m[2]) ** +m[3]);
    }
    if ((m = S.match(/par \$f\(x\) = (?:(\d+) \\times )?([\d{},]+)\^x\$\. Quel est son sens/))) return okText(q, /décroissante/.test(q.answer) === (num(m[2]) < 1), 'sens de variation');
    if ((m = S.match(new RegExp(`vaut \\$${NB}\\$ \\S+ au départ et (augmente|diminue) de \\$(\\d+)\\\\,\\\\%\\$ par an\\. .*? au bout de \\$(\\d+)\\$ ans`)))) return ok(q, num(m[1]) * (1 + (m[2] === 'augmente' ? 1 : -1) * m[3] / 100) ** +m[4]);
    if ((m = S.match(new RegExp(`avec \\$u\\((\\d+)\\) = ${NB}\\$ et \\$u\\((\\d+)\\) = ${NB}\\$\\. Quel taux`)))) return ok(q, (num(m[4]) / num(m[2]) - 1) * 100);
    if ((m = S.match(new RegExp(`raison \\$${NB}\\$, et \\$u\\((\\d+)\\) = ${NB}\\$\\. Calculer \\$u\\(0\\)\\$`)))) return ok(q, num(m[3]) / num(m[1]) ** +m[2]);
    if ((m = S.match(/la valeur exacte de \$(.*)\$\.$/)) && !/frac\{1\}/.test(m[1])) {
      const t = m[1]; let mm; let e;
      if ((mm = t.match(/^(\d+)\^\{([\d{},]+)\} \\times (\d+)\^\{([\d{},]+)\}$/))) e = num(mm[2]) + num(mm[4]);
      else if ((mm = t.match(/^\\frac\{(\d+)\^\{([\d{},]+)\}\}\{(\d+)\^\{([\d{},]+)\}\}$/))) e = num(mm[2]) - num(mm[4]);
      else if ((mm = t.match(/^\\left\((\d+)\^\{([\d{},]+)\}\\right\)\^\{(\d+)\}$/))) e = num(mm[2]) * +mm[3];
      if (!mm) return 'expression illisible';
      return ok(q, (+mm[1]) ** e);
    }
    if ((m = S.match(/la valeur exacte de \$([\d\\,{}]+)\^\{\\frac\{1\}\{(\d+)\}\}\$/)) || (m = S.match(/tel que \$x\^\{(\d+)\} = ([\d\\,{}]+)\$/))) {
      const [b, n] = /tel que/.test(S) ? [num(m[2]), +m[1]] : [num(m[1]), +m[2]];
      return ok(q, Math.round(b ** (1 / n) * 1e6) / 1e6);
    }
    if ((m = S.match(/En \$(\d+)\$ ans, .*? a (augmenté|diminué) de \$([\d{},]+)\\,\\%\$/))) {
      return ok(q, Math.round(((1 + (m[2] === 'augmenté' ? 1 : -1) * num(m[3]) / 100) ** (1 / m[1]) - 1) * 1e8) / 1e6);
    }
    if ((m = S.match(new RegExp(`(double toutes les heures|multiplié par \\$3\\$ chaque jour|divisée par \\$2\\$ chaque année).*?\\$${NB}\\$.*?\\$${NB}\\$`)))) {
      const q0 = /double/.test(m[1]) ? 2 : /par \$3/.test(m[1]) ? 3 : 0.5; const u0 = num(m[2]); const Sx = num(m[3]);
      let n = 0; while (q0 < 1 ? u0 * q0 ** n >= Sx : u0 * q0 ** n <= Sx) n++;
      return ok(q, n);
    }
    if ((m = S.match(new RegExp(`par \\$f\\(x\\) = ${NB} \\\\times ${NB}\\^x\\$\\. Calculer, sans calculatrice, \\$f\\(${NB}\\)\\$`)))) return ok(q, Math.round(num(m[1]) * num(m[2]) ** num(m[3]) * 1e6) / 1e6);
    if ((m = S.match(new RegExp(`vaut \\$${NB}\\$ \\S+\\. Modèle A : elle augmente de \\$${NB}\\$ \\S+ chaque année\\. Modèle B : elle augmente de \\$(\\d+)\\\\,\\\\%\\$ chaque année\\. Au bout de \\$(\\d+)\\$ ans`)))) {
      const P0 = num(m[1]); const n = +m[4];
      return ok(q, Math.round((P0 * (1 + m[3] / 100) ** n - (P0 + n * num(m[2]))) * 1e6) / 1e6);
    }
    if ((m = S.match(new RegExp(`comptait \\$${NB}\\$ donateurs en (\\d+) et \\$${NB}\\$ en (\\d+)\\..*?prévoir en (\\d+)`)))) {
      const V0 = num(m[1]); const Vn = num(m[3]); const n = m[4] - m[2]; const k = m[5] - m[4];
      return ok(q, Math.round(Vn * (Vn / V0) ** (k / n) * 1e6) / 1e6);
    }
    if ((m = S.match(/divisée par \$2\$ toutes les \$(\d+)\$ heures\. On en injecte \$(\d+)\$ mg\..*?reste-t-il \$([\d{},]+)\$ mg/))) return ok(q, Math.round(+m[1] * Math.log2(+m[2] / num(m[3])) * 1e6) / 1e6);
    if ((m = S.match(/a (augmenté|baissé) de \$(\d+)\\,\\%\$ la première année, puis (augmenté|baissé) de \$(\d+)\\,\\%\$ la deuxième/))) {
      const G = (1 + (m[1] === 'augmenté' ? 1 : -1) * m[2] / 100) * (1 + (m[3] === 'augmenté' ? 1 : -1) * m[4] / 100);
      return ok(q, Math.round((Math.sqrt(G) - 1) * 1e8) / 1e6);
    }
    return undefined;
  };
  const wrap = (f) => (q) => { const r = f(q); return r === undefined ? 'famille non reconnue par le vérificateur 1TC' : r; };
  return { '1TC4': wrap(ch4), '1TC5': wrap(ch5), '1TC6': wrap(ch6) };
})(V));
addPre(((V) => {
  // ---- L1 / L2-DUA : familles complémentaires (lot partiels-sup-a), recalcul indépendant à partir de l'énoncé ----
  const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
  const fr = (n, d) => { if (d < 0) { n = -n; d = -d; } const g = gcd(Math.abs(n), d) || 1; return d / g === 1 ? String(n / g) : `${n / g}/${d / g}`; };
  const st = (q) => String(q.statement).split('\n\n*')[0];
  const ans = (q) => String(q.type === 'exact' ? q.answer : (q.exactAnswer !== undefined ? q.exactAnswer : q.answer)).replace(/\s/g, '');
  const eqA = (q, want) => (ans(q) === want ? true : `réponse ${ans(q)} au lieu de ${want}`);
  const val = (s) => { const m = String(s).match(/^(-?\d+)(?:\/(\d+))?$/); return m ? +m[1] / (m[2] ? +m[2] : 1) : NaN; };
  const near = (q, v, tol) => { const a = val(ans(q)); return Math.abs(a - v) <= (tol || 1e-6) * Math.max(1, Math.abs(v)) ? true : `réponse ${ans(q)} (≈ ${a}) au lieu de ≈ ${v}`; };
  const tup = (s) => String(s).replace(/[()\s$]/g, '').split(';').map(Number);
  /** coefficients d'une expression linéaire « 2x - y + 3 » ; clé '' pour la constante */
  const lin = (s) => {
    const t = String(s).replace(/\s+/g, '').replace(/\\,/g, '').replace(/\\/g, '');
    const out = {};
    for (const term of t.replace(/^(?=[^+-])/, '+').match(/[+-][^+-]+/g) || []) {
      const m = term.match(/^([+-])(\d*)(.*)$/);
      const sg = m[1] === '-' ? -1 : 1;
      const c = sg * (m[2] === '' ? 1 : +m[2]);
      out[m[3]] = (out[m[3]] || 0) + c;
    }
    return out;
  };
  const det3 = (a, b, c) => a[0] * (b[1] * c[2] - b[2] * c[1]) - a[1] * (b[0] * c[2] - b[2] * c[0]) + a[2] * (b[0] * c[1] - b[1] * c[0]);

  // logique propositionnelle : ¬ > ∧ > ∨ > ⇒ > ⇔ (⇒ associatif à droite)
  const evalProp = (tex, env) => {
    const toks = tex.replace(/\\neg/g, ' ! ').replace(/\\wedge/g, ' & ').replace(/\\vee/g, ' | ').replace(/\\Leftrightarrow/g, ' = ').replace(/\\Rightarrow/g, ' > ').replace(/([()])/g, ' $1 ').trim().split(/\s+/);
    let i = 0;
    const prim = () => { const t = toks[i++]; if (t === '!') return !prim(); if (t === '(') { const v = iff(); i++; return v; } return env[t]; };
    const and = () => { let v = prim(); while (toks[i] === '&') { i++; const w = prim(); v = v && w; } return v; };
    const or = () => { let v = and(); while (toks[i] === '|') { i++; const w = and(); v = v || w; } return v; };
    const imp = () => { const v = or(); if (toks[i] === '>') { i++; const w = imp(); return !v || w; } return v; };
    const iff = () => { let v = imp(); while (toks[i] === '=') { i++; const w = imp(); v = v === w; } return v; };
    return iff();
  };

  const LOG = (q) => {
    const S = st(q); let m;
    if (q.title === 'Table de vérité : nombre de valuations vraies') {
      m = S.match(/\$P = (.*?)\$, où/);
      let n = 0;
      for (const p of [false, true]) for (const qq of [false, true]) for (const r of [false, true]) if (evalProp(m[1], { p, q: qq, r })) n++;
      return eqA(q, String(n));
    }
    if (q.title === 'Rang à partir duquel une assertion est vraie') {
      m = S.match(/« \$(.*?)\$ »/)[1];
      let L, R, mm;
      const fact = (n) => { let r = 1n; for (let i = 2n; i <= n; i++) r *= i; return r; };
      if ((mm = m.match(/^(\d)\^n > (\d+)n$/))) { L = (n) => BigInt(mm[1]) ** n; R = (n) => BigInt(mm[2]) * n; }
      else if ((mm = m.match(/^(\d)\^n > n\^(\d)$/))) { L = (n) => BigInt(mm[1]) ** n; R = (n) => n ** BigInt(mm[2]); }
      else if ((mm = m.match(/^n! > (\d)\^n$/))) { L = fact; R = (n) => BigInt(mm[1]) ** n; }
      else return 'assertion non reconnue';
      let N = 1n;
      for (let n = 1n; n <= 400n; n++) if (L(n) <= R(n)) N = n + 1n;
      return eqA(q, String(N));
    }
    if (q.title === 'Nombre de couples d\'une relation d\'équivalence') {
      m = S.match(/\\dots, (\d+)\\\}.*?\\pmod\{(\d+)\}/);
      const N = +m[1], k = +m[2];
      let n = 0;
      for (let x = 1; x <= N; x++) for (let y = 1; y <= N; y++) if ((x - y) % k === 0) n++;
      return eqA(q, String(n));
    }
    if (q.title === 'Nombre de majorants pour la divisibilité') {
      m = S.match(/\\dots, (\d+)\\\}[\s\S]*?partie \$\\\{(\d+), (\d+)\\\}/);
      const N = +m[1], a = +m[2], b = +m[3];
      let n = 0;
      for (let y = 1; y <= N; y++) if (y % a === 0 && y % b === 0) n++;
      return eqA(q, String(n));
    }
    return undefined;
  };

  const EV1 = (q) => {
    const S = st(q);
    const T = (name) => S.match(new RegExp(`\\$${name} = \\(([^)]*)\\)\\$`))[1].split(' ; ');
    if (q.title === 'Paramètre rendant une famille liée') {
      const u = T('u').map(Number), v = T('v').map(Number), w = T('w');
      const at = (mv) => det3(u, v, w.map((x) => (x === 'm' ? mv : +x)));
      const d0 = at(0), d1 = at(1);
      if (d1 === d0) return 'déterminant indépendant de m';
      const r = -d0 / (d1 - d0);
      return near(q, r);
    }
    if (q.title === 'Coordonnées d\'un vecteur dans une base') {
      const u = T('u').map(Number), v = T('v').map(Number), w = T('w').map(Number);
      const D = u[0] * v[1] - u[1] * v[0];
      const al = (w[0] * v[1] - w[1] * v[0]) / D, be = (u[0] * w[1] - u[1] * w[0]) / D;
      return eqA(q, `(${al};${be})`);
    }
    return undefined;
  };

  const APP = (q) => {
    const S = st(q); let m;
    if (q.title === 'Paramètre rendant un endomorphisme non injectif') {
      m = S.match(/f\(x, y\) = \((.*?), \\ (.*?)\)\$/);
      const r0 = lin(m[1]), r1 = lin(m[2]);
      const a = r0.x || 0, b = r0.y || 0, c = r1.x || 0;
      if (r1.my !== 1) return 'second terme non reconnu';
      return near(q, (b * c) / a);
    }
    if (q.title === 'Image d\'un vecteur par une composée') {
      const F = S.match(/f\(x, y\) = \((.*?), \\ (.*?)\)\$/), G = S.match(/g\(x, y\) = \((.*?), \\ (.*?)\)\$/);
      const v = S.match(/\(g \\circ f\)\(([^)]*)\)/)[1].split(' ; ').map(Number);
      const ap = (M, x) => { const r0 = lin(M[1]), r1 = lin(M[2]); return [(r0.x || 0) * x[0] + (r0.y || 0) * x[1], (r1.x || 0) * x[0] + (r1.y || 0) * x[1]]; };
      const r = ap(G, ap(F, v));
      return eqA(q, `(${r[0]};${r[1]})`);
    }
    return undefined;
  };

  const REL = (q) => {
    const S = st(q); let m;
    if (q.title === 'Bornes d\'un ensemble défini par une inéquation') {
      if ((m = S.match(/\\mid \|(.*?)\| (<|\\leq) (\d+)\\\}/))) {
        const l = lin(m[1]); const c = -(l[''] || 0), r = +m[3];
        return eqA(q, `(${c - r};${c + r})`);
      }
      m = S.match(/\\mid (.*?) (<|\\leq) 0\\\}/);
      const l = lin(m[1]); const p = l.x || 0, c0 = l[''] || 0;
      const D = Math.sqrt(p * p - 4 * c0);
      return eqA(q, `(${(-p - D) / 2};${(-p + D) / 2})`);
    }
    if (q.title === 'Bornes de l\'ensemble des distances à un point') {
      m = S.match(/\\\{\|(.*?)\| \\mid x \\in \[(-?\d+) ; (-?\d+)\]\\\}/);
      const c = -(lin(m[1])[''] || 0), a = +m[2], b = +m[3];
      let lo = Infinity, hi = -Infinity;
      for (let x = a; x <= b + 1e-9; x += 0.25) { const d = Math.abs(x - c); lo = Math.min(lo, d); hi = Math.max(hi, d); }
      return eqA(q, `(${lo};${hi})`);
    }
    if (q.title === 'Bornes d\'un produit de parties') {
      m = S.match(/A = \[(-?\d+) ; (-?\d+)\]\$, \$B = \[(-?\d+) ; (-?\d+)\]/);
      let lo = Infinity, hi = -Infinity;
      for (let x = +m[1]; x <= +m[2] + 1e-9; x += 0.5) for (let y = +m[3]; y <= +m[4] + 1e-9; y += 0.5) { lo = Math.min(lo, x * y); hi = Math.max(hi, x * y); }
      return eqA(q, `(${lo};${hi})`);
    }
    return undefined;
  };

  const SUI = (q) => {
    const S = st(q); let m;
    if (q.title === 'Théorème d\'encadrement') {
      m = S.match(/\\dfrac\{(-?\d*)n ([+-]) (\d*)(\\cos n|\\sin n|\(-1\)\^n|\\cos\(n\^2\))\}\{(\d*)n \+ (\d+)\}/);
      const a = m[1] === '' ? 1 : m[1] === '-' ? -1 : +m[1], b = (m[2] === '-' ? -1 : 1) * (m[3] === '' ? 1 : +m[3]), c = m[5] === '' ? 1 : +m[5], d = +m[6];
      const n = 1e7, o = { '\\cos n': Math.cos(n), '\\sin n': Math.sin(n), '(-1)^n': 1, '\\cos(n^2)': Math.cos(n * n) }[m[4]];
      const u = (a * n + b * o) / (c * n + d);
      return near(q, u, 1e-5);
    }
    if (q.title === 'Suite récurrente linéaire d\'ordre 2') {
      const u0 = +S.match(/u_0 = (-?\d+)/)[1], u1 = +S.match(/u_1 = (-?\d+)/)[1];
      const rec = lin(S.match(/u_\{n\+2\} = (.*?)\$/)[1].replace(/u_\{n\+1\}/g, 'U').replace(/u_n/g, 'W'));
      const s = rec.U || 0, p = -(rec.W || 0);
      const D = Math.sqrt(s * s - 4 * p), r1 = (s - D) / 2, r2 = (s + D) / 2;
      const mu = (u1 - r1 * u0) / (r2 - r1), la = u0 - mu;
      const seq = [u0, u1];
      for (let n = 2; n <= 6; n++) seq.push(s * seq[n - 1] - p * seq[n - 2]);
      if (seq.some((x, n) => Math.abs(la * r1 ** n + mu * r2 ** n - x) > 1e-6)) return 'formule explicite incohérente';
      return eqA(q, `(${Math.round(la)};${Math.round(mu)})`);
    }
    return undefined;
  };

  const CNT = (q) => {
    const S = st(q); let m;
    if (q.title === 'Fonctions hyperboliques en ln a') {
      m = S.match(/\\(cosh|sinh|tanh)\(\\ln (\d+)\)/);
      return near(q, Math[m[1]](Math.log(+m[2])), 1e-9);
    }
    if (q.title === 'Règle de L\'Hôpital') {
      const k = (s) => (s === '' ? 1 : +s);
      const x = 1e-6;
      if ((m = S.match(/\\dfrac\{e\^\{(\d*)x\} - 1\}\{\\sin\((\d*)x\)\}/))) return near(q, (Math.exp(k(m[1]) * x) - 1) / Math.sin(k(m[2]) * x), 1e-4);
      if ((m = S.match(/\\dfrac\{\\ln\(1 \+ (\d*)x\)\}\{e\^\{(\d*)x\} - 1\}/))) return near(q, Math.log1p(k(m[1]) * x) / Math.expm1(k(m[2]) * x), 1e-4);
      if ((m = S.match(/\\dfrac\{1 - \\cos\((\d*)x\)\}\{x\^2\}/))) { const a = k(m[1]), y = 1e-3; return near(q, 2 * Math.sin(a * y / 2) ** 2 / (y * y), 1e-4); }
      return 'limite non reconnue';
    }
    if (q.title === 'Dérivée d\'une fonction réciproque') {
      const P = lin(S.match(/f\(x\) = (.*?)\$/)[1]);
      const y0 = +S.match(/\(f\^\{-1\}\)'\((-?\d+)\)/)[1];
      const f = (x) => Object.entries(P).reduce((s, [k, c]) => s + c * (k === '' ? 1 : k === 'x' ? x : x ** +k.split('^')[1]), 0);
      let lo = -100, hi = 100;
      for (let i = 0; i < 200; i++) { const mid = (lo + hi) / 2; if (f(mid) < y0) lo = mid; else hi = mid; }
      const h = 1e-5, d = (f(lo + h) - f(lo - h)) / (2 * h);
      return near(q, 1 / d, 1e-5);
    }
    return undefined;
  };

  const TAY = (q) => {
    const S = st(q); let m;
    if (q.title === 'Formule de Taylor pour un polynôme') {
      const P = lin(S.match(/P\(x\) = (.*?)\$/)[1]);
      const c = [P[''] || 0, P.x || 0, P['x^2'] || 0, P['x^3'] || 0];
      const x0 = -(lin(S.match(/b_k \(x (.*?)\)\^k/)[1])[''] || 0);
      const k = +S.match(/Calculer \$b_(\d)\$/)[1];
      // division synthétique répétée : coefficients en (x - x0)
      let a = c.slice(); const b = [];
      for (let t = 0; t <= 3; t++) { const qd = []; let r = 0; for (let j = a.length - 1; j >= 0; j--) { r = r * x0 + a[j]; qd.unshift(r); } b.push(qd.shift()); a = qd; }
      return eqA(q, String(b[k]));
    }
    if (q.title === 'Développement limité d\'un quotient') {
      m = S.match(/\\dfrac\{(.*?)\}\{(.*?)\}/);
      const a = lin(m[1]).x || 0, b = lin(m[2]).x || 0;
      const inv = [1, -b, b * b];
      return eqA(q, String(inv[2] + a * inv[1]));
    }
    if (q.title === 'Forme indéterminée $1^{\\infty}$') {
      if ((m = S.match(/\\left\(1 ([+-]) \\frac\{(\d+)\}\{x\}\\right\)\^\{(\d*)x\}/))) {
        const a = (m[1] === '-' ? -1 : 1) * +m[2], b = m[3] === '' ? 1 : +m[3], x = 1e8;
        return near(q, b * x * Math.log1p(a / x), 1e-5);
      }
      m = S.match(/\\left\((.*?)\\right\)\^\{\\frac\{1\}\{(\d*)x\}\}/);
      const a = lin(m[1]).x, b = m[2] === '' ? 1 : +m[2], x = 1e-8;
      return near(q, Math.log1p(a * x) / (b * x), 1e-5);
    }
    return undefined;
  };

  const INT = (q) => {
    if (q.title !== 'Intégrale d\'une valeur absolue (Chasles)') return undefined;
    const m = st(q).match(/\\int_\{(-?\d+)\}\^\{(-?\d+)\} \|(.*?)\|/);
    const p = +m[1], r = +m[2], c = -(lin(m[3])[''] || 0), n = 200000;
    let s = 0;
    for (let i = 0; i < n; i++) { const x = p + (i + 0.5) * (r - p) / n; s += Math.abs(x - c); }
    return near(q, s * (r - p) / n, 1e-6);
  };

  const GEO = (q) => {
    const S = st(q); let m;
    if (q.title === 'Orthogonalité de deux vecteurs') {
      m = S.match(/\\vec\{u\}\\,\((-?\d+) ; (-?\d+)\)\$ et \$\\vec\{v\}\\,\(m ([+-]) (\d+) ; (-?\d+)\)/);
      const a = +m[1], b = +m[2], d = (m[3] === '-' ? -1 : 1) * +m[4], c = +m[5];
      return near(q, -(b * c) / a - d);
    }
    if (q.title === 'Centre d\'une conique') {
      const P = lin(S.match(/d'équation \$(.*?) = 0\$/)[1]);
      return eqA(q, `(${-(P.x || 0) / (2 * P['x^2'])};${-(P.y || 0) / (2 * P['y^2'])})`);
    }
    return undefined;
  };

  const DUA = (q) => {
    const S = st(q); let m;
    if (q.title === 'Transposée : composée d\'une forme linéaire') {
      m = S.match(/u\(x, y\) = \((.*?), \\ (.*?)\)\$/);
      const r0 = lin(m[1]), r1 = lin(m[2]), ph = lin(S.match(/\\varphi\(x, y\) = (.*?)\$/)[1]);
      const al = ph.x || 0, be = ph.y || 0;
      return eqA(q, `(${al * (r0.x || 0) + be * (r1.x || 0)};${al * (r0.y || 0) + be * (r1.y || 0)})`);
    }
    if (q.title === 'Équation cartésienne d\'un plan vectoriel') {
      const u = S.match(/u = \(([^)]*)\)/)[1].split(' ; ').map(Number), v = S.match(/v = \(([^)]*)\)/)[1].split(' ; ').map(Number);
      const n = [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]];
      if (n[2] === 0) return 'plan sans forme normalisée';
      return eqA(q, `(${fr(n[0], n[2])};${fr(n[1], n[2])})`);
    }
    if (q.title === 'Dimension d\'un sous-espace défini par des équations') {
      const eqs = S.match(/\\begin\{cases\} (.*?) \\end\{cases\}/)[1].split(' \\\\ ').map((e) => lin(e.replace(/ = 0$/, '')));
      const M = eqs.map((e) => ['x', 'y', 'z', 't'].map((k) => e[k] || 0));
      let rk = 0;
      for (let c = 0; c < 4 && rk < 3; c++) {
        const p = M.findIndex((r, i) => i >= rk && r[c] !== 0);
        if (p < 0) continue;
        [M[rk], M[p]] = [M[p], M[rk]];
        for (let i = 0; i < 3; i++) if (i !== rk) { const f = M[i][c], g = M[rk][c]; for (let j = 0; j < 4; j++) M[i][j] = M[i][j] * g - f * M[rk][j]; }
        rk++;
      }
      return eqA(q, String(4 - rk));
    }
    return undefined;
  };

  const PRF = (q) => {
    const S = st(q); let m;
    if (q.title === 'Disjonction de cas : restes d\'une puissance') {
      m = S.match(/\$n\^(\d)\$ par \$(\d+)\$/);
      const e = +m[1], k = +m[2], R = new Set();
      for (let n = -60; n <= 60; n++) R.add((((n ** e) % k) + k) % k);
      return eqA(q, String(R.size));
    }
    if (q.title === 'Principe des tiroirs') {
      m = S.match(/au moins \$(\d+)\$ ayant le même reste dans la division euclidienne par \$(\d+)\$/);
      const mm = +m[1], k = +m[2];
      // plus grand ensemble sans mm entiers de même reste : (mm - 1) par reste
      return eqA(q, String(k * (mm - 1) + 1));
    }
    if (q.title === 'Analyse-synthèse : équation fonctionnelle affine') {
      m = S.match(/f\(x \+ (\d+)\) ([+-]) (\d*)f\(x\) = (.*?)\$/);
      const s = +m[1], t = (m[2] === '-' ? -1 : 1) * (m[3] === '' ? 1 : +m[3]), R = lin(m[4]);
      const p = (R.x || 0) / (1 + t), qq = ((R[''] || 0) - s * p) / (1 + t);
      const f = (x) => p * x + qq;
      if ([0, 1, 2.5].some((x) => Math.abs(f(x + s) + t * f(x) - ((R.x || 0) * x + (R[''] || 0))) > 1e-9)) return 'synthèse en échec';
      return eqA(q, `(${p};${qq})`);
    }
    if (q.title === 'Inégalité de Cauchy-Schwarz : cas d\'égalité') {
      const r2 = +S.match(/x\^2 \+ y\^2 = (\d+)/)[1], L = lin(S.match(/, l'inégalité de Cauchy-Schwarz montre que \$(.*?) \\leq/)[1]);
      const a = L.x || 0, b = L.y || 0, n = Math.sqrt(a * a + b * b), r = Math.sqrt(r2);
      const want = [r * a / n, r * b / n];
      const got = ans(q).replace(/[()]/g, '').split(';').map(val);
      if (got.length !== 2 || got.some((g, i) => Math.abs(g - want[i]) > 1e-9)) return `réponse ${ans(q)} au lieu de (${want.join(';')})`;
      if (Math.abs(a * want[0] + b * want[1] - +S.match(/\\leq (\d+)\$/)[1]) > 1e-9) return 'maximum annoncé incohérent';
      return true;
    }
    return undefined;
  };

  return { 'L1-LOG': LOG, 'L1-EV1': EV1, 'L1-APP': APP, 'L1-REL': REL, 'L1-SUI': SUI, 'L1-CNT': CNT, 'L1-TAY': TAY, 'L1-INT': INT, 'L1-GEO': GEO, 'L2-DUA': DUA, 'L1-PRF': PRF };
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
/** Écritures équivalentes raisonnables de la réponse attendue, parmi celles que la consigne autorise */
function equivalents(ans, vals, statement) {
  const form = ENGINE._requiredForm(statement);
  const out = [ans, ` ${ans} `, ans.replace(/-/g, '−')];
  if (vals.length === 1) {
    const v = vals[0];
    if (!/×10\^/.test(ans)) out.push(`x = ${ans}`);
    const decimalAllowed = !form.scientific && !form.power10 && !(form.fraction && ans.includes('/'));
    if (decimalAllowed && Math.abs(v * 1e6 - Math.round(v * 1e6)) < 1e-6) out.push(fmtDec(v, ','), fmtDec(v, '.'));
    if (/×10\^/.test(ans)) out.push(ans.replace('×', '*'), ans.replace('×', ' × '));
    const m = ans.match(/^(-?\d+),(\d+)$/);
    if (m && !form.decimal) { const den = 10 ** m[2].length; const num = Math.round(v * den); const g = gcd(num, den); out.push(`${num / g}/${den / g}`); }
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
  if (FORM_CHECKERS[q.answerType]) {
    // saisie d'une forme complète : acceptée (avec espaces, signe ×), écriture équivalente (termes dans l'ordre
    // croissant des degrés) acceptée pour une forme développée ou une équation réduite, forme développée refusée
    // pour une factorisation ou une forme canonique, valeur fausse refusée (la valeur exacte est recalculée par
    // le vérificateur de la famille)
    const kind = q.answerType;
    if (!ENGINE.validateAnswer(ans, q)) issues.push('EXACT:forme attendue refusée: ' + ans);
    const body = kind === 'equationDroite' ? ans.replace(/^\s*y\s*=/, '') : ans;
    const P = ENGINE.parsePolyExpr(body);
    if (!P) return issues.concat('EXACT:forme attendue illisible par parsePolyExpr: ' + ans);
    const v = P.variable || 'x';
    const term = ([n, d], deg) => `${n < 0 ? '-' : '+'}${d !== 1 ? `${Math.abs(n)}/${d}` : Math.abs(n)}${deg ? v : ''}${deg > 1 ? '^' + deg : ''}`;
    const terms = P.rpoly.map((c, deg) => [c, deg]).filter(([c]) => c[0]);
    const desc = terms.slice().reverse().map(([c, deg]) => term(c, deg)).join('').replace(/^\+/, '') || '0';
    const asc = terms.map(([c, deg]) => term(c, deg)).join('').replace(/^\+/, '') || '0';
    const wrong = `${desc}+1`;
    if (kind === 'factorisation' && ENGINE.validateAnswer(desc, q)) issues.push(`EXACT:forme développée ${desc} acceptée pour une factorisation`);
    if (kind === 'canonique' && (P.rpoly[1] || [0])[0] !== 0 && ENGINE.validateAnswer(desc, q)) issues.push(`EXACT:forme développée ${desc} acceptée pour une forme canonique`);
    if (kind === 'developpement' || kind === 'equationDroite') {
      for (const e of [desc, asc]) if (!ENGINE.validateAnswer(e, q)) issues.push(`EXACT:écriture équivalente refusée ${e}`);
      if (kind === 'equationDroite' && !ENGINE.validateAnswer(`y = ${asc}`, q)) issues.push(`EXACT:écriture équivalente refusée y = ${asc}`);
      // fraction non simplifiée : conseil, pas validée
      const fr = terms.find(([c]) => c[1] !== 1);
      if (fr) {
        const unsimp = terms.slice().reverse().map(([c, deg]) => (c === fr[0] ? term([2 * c[0], 2 * c[1]], deg) : term(c, deg))).join('').replace(/^\+/, '');
        if (ENGINE.validateAnswer(unsimp, q)) issues.push(`EXACT:fraction non simplifiée acceptée ${unsimp}`);
      }
    }
    if (kind === 'canonique') {
      const m = ans.match(/^(.*\^2)([+-]\d+(?:\/\d+)?)$/);
      const re = m ? `${m[2]}${m[1].startsWith('-') ? '' : '+'}${m[1]}`.replace(/^\+/, '') : null;
      if (re && !ENGINE.validateAnswer(re, q)) issues.push(`EXACT:forme canonique réordonnée refusée ${re}`);
      if (ENGINE.validateAnswer(`${ans}+1`, q)) issues.push(`EXACT:valeur fausse acceptée ${ans}+1`);
    } else if (ENGINE.validateAnswer(wrong, q)) issues.push(`EXACT:valeur fausse acceptée ${wrong}`);
    return issues;
  }
  const vals = plainVals(ans);
  if (!vals) { // réponse non numérique (mot, oui/non…) : seule la saisie exacte est contrôlée
    if (!ENGINE.validateAnswer(ans, q)) issues.push('EXACT:réponse attendue refusée par validateAnswer: ' + ans);
    return issues;
  }
  for (const e of equivalents(ans, vals, q.statement)) {
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
/** [a ; b] -> [a, b] (intervalles et pavés), pour les vérificateurs écrits avant l'audit */
function ivComma(s) { return String(s).replace(/([[\]])([^[\]$;]*?) ; ([^[\]$;]*?)([[\]])/g, '$1$2, $3$4'); }
const hintFamilies = {};
const hintForeignNums = [];

// ---------------------------------------------------------------------------
// Boucle principale
// ---------------------------------------------------------------------------
const chapters = [...new Set((window.MATHS_CHAPTERS || []).map((c) => c.id))]
  .filter((id) => /^(L[123]-|2[NAGS]\d|1[AGS]\d|1TC?\d|T[AGSX]\d|capes-\d)/.test(id))
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
        // L3 : l'audit a adopté la notation française des intervalles [a ; b] ; les vérificateurs L3
        // écrits pour [a, b] relisent l'énoncé ramené à cette forme (le contenu affiché n'est pas modifié).
        if (res !== true && res !== 'skip' && /^L3-/.test(ch) && ivComma(view.statement) !== view.statement) {
          let r2; try { r2 = verifier(Object.assign({}, view, { statement: ivComma(view.statement) })); } catch (e) { r2 = undefined; }
          if (r2 === true) res = true;
        }
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
