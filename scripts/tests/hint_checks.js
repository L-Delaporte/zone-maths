/**
 * Cohérence des indices avec la question réellement posée (utilisé par test_college_generators.js et test_6eme.js).
 *
 * hintIssues(q) renvoie les anomalies { kind, msg } :
 *  - INDICE_ABSENT          hint1 ou hint2 vide (hint1 = coup de pouce de méthode, hint2 = rappel de cours ciblé) ;
 *  - INDICE_DOUBLON         hint1 identique à hint2 ;
 *  - INDICE_NOMBRE_ETRANGER l'indice cite un nombre qui n'est ni dans l'énoncé, ni une constante usuelle, ni obtenu par une
 *                           opération (deux pour un résultat écrit après « = ») à partir de ceux-ci : indice d'une autre variante ;
 *  - INDICE_OBJET_ETRANGER  l'indice nomme un point / segment / polygone (AB, [EF], ABC…) absent de l'énoncé ;
 *  - INDICE_DONNE_REPONSE   l'indice contient la réponse attendue (nombre non présent dans l'énoncé, ou texte de l'option
 *                           correcte d'un QCM sans les autres options). Coïncidence assumée : q._hintLeakOk = true.
 * hintTemplate / familyKey servent à repérer un même indice partagé par des familles de questions différentes.
 */
'use strict';
const HINT_CONST = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '12', '24', '60', '90', '100', '180', '360', '1000', '3,14', '3600', '0,5', '1,5', '2,5']);
function hcPlain(s) {
  return String(s == null ? '' : s).replace(/<svg[\s\S]*?<\/svg>/g, m => ' ' + (m.match(/>([^<>]+)</g) || []).map(x => x.slice(1, -1)).join(' ') + ' ')
    .replace(/<[^>]*>/g, ' ').replace(/\\(?:dfrac|tfrac|frac)\{([^{}]*)\}\{([^{}]*)\}/g, ' $1 / $2 ')
    .replace(/\{,\}/g, ',').replace(/(\d)\s(?=\d{3}\b)/g, '$1').replace(/(\d)\\,(?=\d{3}\b)/g, '$1');
}
function hcNums(s) {
  const out = new Set();
  for (const m of hcPlain(s).matchAll(/(?<![\w,.])\d+(?:,\d+)?(?![\w])/g)) out.add(m[0].replace(/^0+(?=\d)/, ''));
  return out;
}
function hcNumsOrdered(s) {
  return [...hcPlain(s).matchAll(/(?<![\w,.])\d+(?:,\d+)?(?![\w])/g)].map(m => m[0].replace(/^0+(?=\d)/, ''));
}
// Nombres de l'indice avec un drapeau « résultat » (précédé de =, ≈ ou « soit ») : seuls les résultats peuvent être calculés
function hcNumsTagged(s) {
  const t = hcPlain(s).replace(/\\(approx|simeq)/g, '=').replace(/\\text\{([^{}]*)\}/g, ' $1 ').replace(/\\[a-zA-Z]+/g, ' ');
  return [...t.matchAll(/(?<![\w,.])\d+(?:,\d+)?(?![\w])/g)].map(m => {
    const before = t.slice(Math.max(0, m.index - 12), m.index).replace(/[\s$(){}\-−]+/g, '');
    return [m[0].replace(/^0+(?=\d)/, ''), /(=|≈|soit|vaut|donc|:)$/.test(before)];
  });
}
function hcDerivable(v, pool) {
  const eq = (a, b) => Math.abs(a - b) <= 1e-6 * Math.max(1, Math.abs(b)) || Math.abs(Math.round(a * 100) / 100 - b) < 1e-9 || Math.abs(Math.round(a * 10) / 10 - b) < 1e-9 || Math.abs(Math.round(a) - b) < 1e-9 && Math.abs(a - b) < 0.5 && !Number.isInteger(a);
  for (let i = 0; i < pool.length; i++) {
    const a = pool[i];
    if (eq(a * a, v) || eq(Math.sqrt(a), v) || eq(a * a * a, v) || eq(Math.abs(a), v)) return true;
    for (let j = 0; j < pool.length; j++) {
      const b = pool[j];
      if (eq(a + b, v) || eq(Math.abs(a - b), v) || eq(a * b, v) || (b !== 0 && eq(a / b, v))) return true;
    }
  }
  return false;
}
// Deux opérations enchaînées, ex. 2 × (57 + 45) − 5 (le résultat intermédiaire n'est pas écrit)
function hcDerivable2(v, pool) {
  const P = pool.slice(0, 40); const first = [];
  for (const a of P) for (const b of P) { first.push(a + b, a - b, a * b); if (b) first.push(a / b); }
  for (const x of first) if (Number.isFinite(x) && hcDerivable(v, [x, ...P].slice(0, 1).concat(P)) ) {
    for (const c of P) { if ([x + c, x - c, c - x, x * c, c ? x / c : NaN, x ? c / x : NaN].some(y => Math.abs(y - v) <= 1e-6 * Math.max(1, Math.abs(v)))) return true; }
  }
  return false;
}
// Noms de points / segments / polygones (au moins deux majuscules accolées : AB, [EF], ABC, EG^2) écrits en mode math
// dans l'indice. Pour l'énoncé (loose), on collecte toutes les majuscules isolées ou accolées, texte et figures compris.
function hcMathObjects(str, loose) {
  const out = new Set(); const src = String(str == null ? '' : str);
  if (loose) {
    const all = hcPlain(src).replace(/\\(text|mathrm|textbf|operatorname|mbox)\{([^{}]*)\}/g, ' $2 ').replace(/\\[a-zA-Z]+/g, ' ');
    for (const m of all.matchAll(/(?<![A-Za-zÀ-ÿ'’])([A-Z]{1,5})(?![a-zà-ÿ])/g)) for (const L of m[1]) out.add(L);
    for (const m of all.matchAll(/([A-Z])['’]/g)) out.add(m[1]);
    return [...out];
  }
  const chunks = (src.match(/\$\$[\s\S]*?\$\$|\$[^$]+\$/g) || []).map(c => c.replace(/^\$+|\$+$/g, ''));
  for (let c of chunks) {
    c = c.replace(/\\(text|mathrm|textbf|operatorname|mbox|mathcal|mathbb)\{[^{}]*\}/g, ' ').replace(/\\[a-zA-Z]+/g, ' ');
    for (const m of c.matchAll(/(?<![A-Za-z])([A-Z]{2,5})(?![a-zA-Z])/g)) for (const L of m[1]) out.add(L);
  }
  return [...out];
}
// Nombres « plausiblement présents » dans l'énoncé : nombres, leurs écritures sans zéros, ×/÷ 10/100/1000 (conversions)
function hcStatementNums(q) {
  const base = new Set([...hcNums(q.statement), ...hcNums(q.title), ...(q.options || []).flatMap(o => [...hcNums(o)])]);
  const out = new Set(base);
  for (const n of base) {
    const v = parseFloat(n.replace(',', '.'));
    if (!Number.isFinite(v)) continue;
    for (const f of [10, 100, 1000, 0.1, 0.01, 0.001, -1]) { const w = Math.round(v * f * 1e6) / 1e6; out.add(String(Math.abs(w)).replace('.', ',')); }
  }
  return out;
}
// Renvoie la liste des anomalies { kind, msg } d'une question
function hintIssues(q) {
  const res = [];
  const h1 = q.hint1 == null ? '' : String(q.hint1).trim();
  const h2 = q.hint2 == null ? '' : String(q.hint2).trim();
  if (!h1) res.push({ kind: 'INDICE_ABSENT', msg: 'hint1 vide' });
  if (!h2) res.push({ kind: 'INDICE_ABSENT', msg: 'hint2 vide' });
  if (h1 && h2 && h1 === h2) res.push({ kind: 'INDICE_DOUBLON', msg: 'hint1 = hint2' });
  const stNums = hcStatementNums(q);
  const stObjs = new Set([q.statement, q.title, ...(q.options || [])].flatMap(x => hcMathObjects(x, true)));
  // Réponse attendue
  let ans = q.type === 'mcq' && q.options && q.correctIndex >= 0 ? q.options[q.correctIndex] : q.answer;
  const ansPlain = hcPlain(ans).replace(/\$/g, '').replace(/\\[a-z]+/gi, ' ').trim();
  const ansNum = /^-?\d+(?:,\d+)?(?:\/\d+)?$/.test(ansPlain.replace(/\s/g, '')) ? ansPlain.replace(/\s/g, '').replace(/^-/, '') : null;
  for (const [f, h] of [['hint1', h1], ['hint2', h2]]) {
    if (!h) continue;
    // 1. nombres étrangers à l'énoncé : ni présents, ni obtenus par UNE opération à partir des nombres de l'énoncé,
    //    des constantes usuelles ou des nombres déjà écrits plus tôt dans l'indice (calcul intermédiaire légitime).
    //    Un tel nombre trahit un indice écrit pour une autre variante de la question.
    const pool = [...new Set([...stNums].filter(n => !/^0+$/.test(n)).concat([...HINT_CONST].filter(n => n !== '0')))].map(n => parseFloat(n.replace(',', '.'))).filter(Number.isFinite);
    const foreign = [];
    const stSums = (String(q.statement).match(/\$\$[\s\S]*?\$\$|\$[^$]+\$/g) || []).map(c => [...hcNums(c)].length > 2 ? hcNumsOrdered(c).reduce((x, y) => x + parseFloat(y.replace(',', '.')), 0) : NaN);
    for (const [n, isResult] of hcNumsTagged(h)) {
      const v = parseFloat(n.replace(',', '.'));
      if (stNums.has(n) || HINT_CONST.has(n) || pool.some(x => Math.abs(x - v) < 1e-9)) { pool.push(v); continue; }
      if (hcDerivable(v, pool) || (isResult && hcDerivable2(v, pool)) || stSums.some(x => Math.abs(x - v) < 1e-6)) pool.push(v); else foreign.push(n);
    }
    if (foreign.length) res.push({ kind: 'INDICE_NOMBRE_ETRANGER', msg: `${f} cite ${foreign.slice(0, 4).join(', ')} absent(s) de l'énoncé` });
    // 1 bis. objets étrangers : noms de points / segments / variables écrits en mode math dans l'indice mais absents de l'énoncé
    const objs = hcMathObjects(h).filter(o => !stObjs.has(o));
    if (objs.length) res.push({ kind: 'INDICE_OBJET_ETRANGER', msg: `${f} parle de ${objs.slice(0, 4).join(', ')} absent(s) de l'énoncé` });
    // 2. réponse livrée
    if (q._hintLeakOk) continue;
    if (ansNum && !stNums.has(ansNum.split('/')[0]) && ansNum.length >= 2) {
      const plain = hcPlain(h);
      const re = new RegExp('(?<![\\d,])' + ansNum.replace(/[/]/g, '\\s*/\\s*') + '(?![\\d]|,\\d)');
      if (re.test(plain)) res.push({ kind: 'INDICE_DONNE_REPONSE', msg: `${f} contient la réponse ${ansNum}` });
    } else if (!ansNum && ansPlain.length >= 6 && q.type === 'mcq' && hcPlain(h).replace(/\$/g, '').includes(ansPlain)
      && !(q.options || []).every(o => hcPlain(h).replace(/\$/g, '').includes(hcPlain(o).replace(/\$/g, '').replace(/\\[a-z]+/gi, ' ').trim()))) {
      res.push({ kind: 'INDICE_DONNE_REPONSE', msg: `${f} contient l'option correcte « ${ansPlain.slice(0, 40)} »` });
    }
  }
  return res;
}
// Normalisation d'un indice en « gabarit » (chiffres masqués) pour repérer les indices partagés entre familles
const hintTemplate = h => hcPlain(h).replace(/\d+(?:,\d+)?/g, '#').replace(/\s+/g, ' ').trim();
const familyKey = q => (q._v && q._v.k) || hcPlain(q.title || '').replace(/\$[^$]*\$/g, '').replace(/\d+(?:,\d+)?/g, '#').trim();
module.exports = { hintIssues, hintTemplate, familyKey };
