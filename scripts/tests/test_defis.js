#!/usr/bin/env node
/**
 * Vérifie la banque du « Défi de la semaine » (js/data/defis.js) :
 *   - format de chaque défi (champs, identifiants uniques, 12 défis par cycle) ;
 *   - KaTeX valide dans l'énoncé, l'indice et le corrigé ; conventions françaises ;
 *   - réponse affichée cohérente avec la valeur numérique, acceptée par le correcteur ;
 *   - valeur RECALCULÉE indépendamment (force brute ou calcul numérique) pour chaque défi ;
 *   - semaines ISO et tirage déterministe (même défi toute la semaine, rotation sur 12 semaines).
 *
 * Usage : node scripts/tests/test_defis.js
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..');
const ctx = { window: {}, console };
ctx.window.window = ctx.window;
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'js/data/defis.js'), 'utf8'), ctx, { filename: 'defis.js' });
const BANK = ctx.window.MATHS_DEFIS;
const U = ctx.window.MATHS_DEFIS_UTILS;

const kctx = {};
vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'vendor/katex/katex.min.js'), 'utf8'), kctx);
const katex = kctx.katex;

let errors = 0;
let checks = 0;
const fail = msg => { errors++; console.error('✖ ' + msg); };
const ok = (cond, msg) => { checks++; if (!cond) fail(msg); };
const close = (a, b) => Math.abs(a - b) < 1e-9 * Math.max(1, Math.abs(b));

// ---------------------------------------------------------------------------
// Recalcul indépendant de chaque réponse
// ---------------------------------------------------------------------------
const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);
const gcd = (a, b) => (b ? gcd(b, a % b) : a);
const binom = (n, k) => (k < 0 || k > n ? 0 : range(1, k).reduce((acc, i) => (acc * (n - k + i)) / i, 1));
const simpson = (f, a, b, n = 2000) => {
  const h = (b - a) / n;
  let s = f(a) + f(b);
  for (let i = 1; i < n; i++) s += f(a + i * h) * (i % 2 ? 4 : 2);
  return (s * h) / 3;
};
const det3 = m => m[0][0] * (m[1][1] * m[2][2] - m[1][2] * m[2][1]) - m[0][1] * (m[1][0] * m[2][2] - m[1][2] * m[2][0]) + m[0][2] * (m[1][0] * m[2][1] - m[1][1] * m[2][0]);
function rank(mat) {
  const m = mat.map(r => r.slice());
  let r = 0;
  for (let c = 0; c < m[0].length && r < m.length; c++) {
    const p = m.findIndex((row, i) => i >= r && Math.abs(row[c]) > 1e-12);
    if (p < 0) continue;
    [m[r], m[p]] = [m[p], m[r]];
    for (let i = 0; i < m.length; i++) if (i !== r) { const f = m[i][c] / m[r][c]; m[i] = m[i].map((v, j) => v - f * m[r][j]); }
    r++;
  }
  return r;
}

const VERIFY = {
  'college-01': () => range(1, 100).filter(n => n % 3 === 0 || n % 5 === 0).length,
  'college-02': () => range(-100, 100).find(x => (4 * x + 7) / 3 === 13),
  'college-03': () => { const l = range(1, 30).find(w => 2 * (w + 2 * w) === 30); return l * 2 * l; },
  'college-04': () => { const B = [6, 0], C = [0, 8], M = [(B[0] + C[0]) / 2, (B[1] + C[1]) / 2]; return Math.hypot(M[0], M[1]); },
  'college-05': () => Math.round(80 * 1.25 * 0.8 * 100) / 100,
  'college-06': () => { let n = 0; for (let i = 0; i < 10; i++) for (let j = i + 1; j < 10; j++) if (j - i !== 1 && j - i !== 9) n++; return n; },
  'college-07': () => range(2, 1000).find(n => n % 4 === 1 && n % 5 === 1 && n % 6 === 1),
  'college-08': () => { let f = 0; for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) if (a + b === 7) f++; return f / 36; },
  'college-09': () => { const a = range(1, 20).find(x => x ** 3 === 216); return 6 * a * a; },
  'college-10': () => 6 * 13 - 5 * 12,
  'college-11': () => range(100, 999).filter(n => String(n).split('').reduce((s, d) => s + +d, 0) === 5).length,
  'college-12': () => 1 / (1 / 12 + 1 / 6),

  'lycee-01': () => { const d = Math.sqrt(49 - 12), x1 = (7 - d) / 2, x2 = (7 + d) / 2; return x1 * x1 + x2 * x2; },
  'lycee-02': () => range(1, 99).filter(n => n % 2).reduce((s, n) => s + n, 0),
  'lycee-03': () => range(0, 9).reduce((s, n) => s + 3 * 2 ** n, 0),
  'lycee-04': () => { let m = Infinity; for (let i = 0; i <= 200000; i++) { const x = (2 * i) / 200000; m = Math.min(m, x ** 3 - 3 * x); } return m; },
  'lycee-05': () => { const balls = ['R', 'R', 'R', 'V', 'V']; let f = 0, t = 0; for (let i = 0; i < 5; i++) for (let j = 0; j < 5; j++) if (i !== j) { t++; if (balls[i] === balls[j]) f++; } return f / t; },
  'lycee-06': () => { const fn = x => Math.hypot(x - 1, -2) - Math.hypot(x - 5, -4); let a = -100, b = 100; for (let k = 0; k < 200; k++) { const m = (a + b) / 2; if (fn(a) * fn(m) <= 0) b = m; else a = m; } return Math.round(((a + b) / 2) * 1e9) / 1e9; },
  'lycee-07': () => Math.round(simpson(x => 3 * x * x + 1, 0, 2) * 1e9) / 1e9,
  'lycee-08': () => { const x = 1e9; return Math.round(((3 * x * x - x + 1) / (x * x + 4)) * 1e6) / 1e6; },
  'lycee-09': () => range(-50, 50).find(k => 2 * 3 + -1 * k === 0),
  'lycee-10': () => { let n = 0; for (let a = 0; a < 8; a++) for (let b = a + 1; b < 8; b++) for (let c = b + 1; c < 8; c++) n++; return n; },
  'lycee-11': () => range(16, 1000).find(x => Math.abs(Math.log(x) + Math.log(x - 15) - Math.log(100)) < 1e-12),
  'lycee-12': () => 3 * range(1, 20).find(k => 2 ** k === 32),

  'superieur-01': () => range(1, 20).reduce((s, k) => s + k * k, 0),
  'superieur-02': () => det3([[2, 1, 0], [1, 2, 1], [0, 1, 2]]),
  'superieur-03': () => { const x = 1e-4; return Math.round(((Math.expm1(x) - x) / (x * x)) * 1e4) / 1e4; },
  'superieur-04': () => Math.round(simpson(x => x * Math.exp(x), 0, 1) * 1e9) / 1e9,
  'superieur-05': () => Number((2n ** 100n) % 7n),
  'superieur-06': () => range(1, 360).filter(d => 360 % d === 0).length,
  'superieur-07': () => Math.round(range(1, 200).reduce((s, n) => s + n / 2 ** n, 0) * 1e9) / 1e9,
  'superieur-08': () => rank([[1, 2, 3], [4, 5, 6], [7, 8, 9]]),
  'superieur-09': () => gcd(1071, 462),
  'superieur-10': () => { const tr = 7, dt = 4 * 3 - 1 * 2; return (tr + Math.sqrt(tr * tr - 4 * dt)) / 2; },
  'superieur-11': () => Math.round(range(0, 10).reduce((s, k) => s + k * k * binom(10, k) * 0.3 ** k * 0.7 ** (10 - k), 0) * 1e9) / 1e9,
  'superieur-12': () => { let n = 0; for (let f = 0; f < 16; f++) { const img = new Set(range(0, 3).map(i => (f >> i) & 1)); if (img.size === 2) n++; } return n; }
};

// ---------------------------------------------------------------------------
// Format, KaTeX, conventions
// ---------------------------------------------------------------------------
function checkMath(label, text) {
  const s = String(text || '');
  const stripped = s.replace(/\$[^$\n]+?\$/g, '');
  ok(!/\$/.test(stripped), `${label} : « $ » orphelin`);
  for (const m of s.matchAll(/\$([^$\n]+?)\$/g)) {
    const tex = m[1];
    try {
      katex.renderToString(tex, { throwOnError: true });
      checks++;
    } catch (e) {
      fail(`${label} : KaTeX invalide « ${tex.slice(0, 60)} » (${e.message.slice(0, 80)})`);
    }
    ok(!/\d\.\d/.test(tex), `${label} : point décimal dans « ${tex} » (écrire {,})`);
  }
  ok(!/\d\.\d/.test(stripped), `${label} : point décimal hors formule`);
  ok(!/(^|[^\\])\\n(?![a-zA-Z])/.test(s), `${label} : « \\n » littéral`);
  ok(!/https?:\/\/|www\./i.test(s), `${label} : lien externe interdit`);
}

ok(BANK && typeof BANK === 'object', 'window.MATHS_DEFIS absent');
ok(U && typeof U.pick === 'function', 'window.MATHS_DEFIS_UTILS absent');
const ids = new Set();
let total = 0;
for (const cycle of U.CYCLES) {
  const list = BANK[cycle];
  ok(Array.isArray(list), `cycle ${cycle} absent`);
  if (!Array.isArray(list)) continue;
  ok(list.length >= 12, `${cycle} : ${list.length} défis (12 attendus au minimum)`);
  list.forEach((d, i) => {
    const label = `${cycle}#${i + 1} (${d && d.id})`;
    for (const k of ['id', 'title', 'level', 'theme', 'statement', 'answer', 'hint', 'solution']) {
      ok(typeof d[k] === 'string' && d[k].trim().length > 0, `${label} : champ « ${k} » manquant`);
    }
    ok(new RegExp(`^${cycle}-\\d{2}$`).test(d.id), `${label} : identifiant attendu « ${cycle}-NN »`);
    ok(!ids.has(d.id), `${label} : identifiant en double`);
    ids.add(d.id);
    ok(typeof d.value === 'number' && Number.isFinite(d.value), `${label} : value numérique manquante`);
    ok(d.solution.length >= 80, `${label} : corrigé trop court`);
    ok(!/\./.test(d.answer), `${label} : la réponse affichée doit utiliser la virgule décimale`);
    ok(close(U.parseAnswer(d.answer), d.value), `${label} : réponse affichée « ${d.answer} » ≠ value ${d.value}`);
    ok(U.isCorrect(d.answer, d), `${label} : le correcteur refuse la réponse attendue`);
    ok(U.isCorrect(d.unit ? `${d.answer} ${d.unit}` : ` ${d.answer} `, d), `${label} : le correcteur refuse la réponse suivie de l'unité`);
    ok(!U.isCorrect(String(d.value + 1), d), `${label} : le correcteur accepte une mauvaise réponse`);
    if (d.format !== undefined) ok(d.format === 'fraction', `${label} : format inconnu « ${d.format} »`);
    if (/\//.test(d.answer)) ok(d.format === 'fraction', `${label} : réponse fractionnaire sans format: 'fraction'`);
    const v = VERIFY[d.id];
    ok(typeof v === 'function', `${label} : aucun recalcul indépendant dans VERIFY`);
    if (typeof v === 'function') {
      const got = v();
      ok(typeof got === 'number' && Math.abs(got - d.value) < 1e-6 * Math.max(1, Math.abs(d.value)), `${label} : recalcul = ${got}, banque = ${d.value}`);
    }
    for (const k of ['statement', 'hint', 'solution']) checkMath(`${label} (${k})`, d[k]);
    ok(!/maths-et-tiques|mathsmentales|kwyk|labomep/i.test(JSON.stringify(d)), `${label} : mention d'un site tiers`);
    total++;
  });
}

// ---------------------------------------------------------------------------
// Correcteur de saisie
// ---------------------------------------------------------------------------
const P = U.parseAnswer.bind(U);
ok(P('4,5') === 4.5 && P('4.5') === 4.5 && P(' 4 , 5 ') === 4.5, 'parseAnswer : virgule décimale');
ok(P('2 500') === 2500 && P('2 500') === 2500, 'parseAnswer : espaces de milliers');
ok(close(P('1/6'), 1 / 6) && close(P('2/5'), 0.4), 'parseAnswer : fractions');
ok(P('−2') === -2 && P('-2') === -2, 'parseAnswer : signe moins');
ok(P('50 cm²') === 50 && P('80 €') === 80 && P('15h') === 15 && P('x = 20') === 20, 'parseAnswer : unité ou « x = »');
ok(Number.isNaN(P('')) && Number.isNaN(P('abc')) && Number.isNaN(P('1/0')) && Number.isNaN(P('3+4')), 'parseAnswer : saisies invalides');

// ---------------------------------------------------------------------------
// Semaines ISO et tirage déterministe
// ---------------------------------------------------------------------------
const W = (y, m, d) => U.isoWeek(new Date(y, m - 1, d));
const same = (a, b) => a.year === b.year && a.week === b.week;
ok(same(W(2026, 10, 31), { year: 2026, week: 44 }), 'isoWeek : 31/10/2026 → 2026-S44');
ok(same(W(2026, 1, 1), { year: 2026, week: 1 }), 'isoWeek : 1/1/2026 (jeudi) → 2026-S01');
ok(same(W(2027, 1, 1), { year: 2026, week: 53 }), 'isoWeek : 1/1/2027 (vendredi) → 2026-S53');
ok(same(W(2024, 12, 30), { year: 2025, week: 1 }), 'isoWeek : 30/12/2024 (lundi) → 2025-S01');
ok(same(W(2021, 1, 3), { year: 2020, week: 53 }), 'isoWeek : 3/1/2021 (dimanche) → 2020-S53');
ok(U.weekKey(2026, 4) === '2026-S04', 'weekKey : zéro initial');
ok(same(U.parseWeekKey('2026-S44'), { year: 2026, week: 44 }) && U.parseWeekKey('2026-S60') === null && U.parseWeekKey('n\'importe quoi') === null, 'parseWeekKey');
// Toute la semaine du lundi 26/10 au dimanche 1/11/2026 donne la même clé, donc le même défi
const keys = new Set(range(26, 32).map(d => { const w = U.isoWeek(new Date(2026, 9, d)); return U.weekKey(w.year, w.week); }));
ok(keys.size === 1, `isoWeek : une semaine du lundi au dimanche (${[...keys].join(', ')})`);
for (const cycle of U.CYCLES) {
  ok(U.pick(cycle, 2026, 44) === U.pick(cycle, 2026, 44), `${cycle} : tirage non déterministe`);
  const twelve = new Set(range(1, 12).map(w => U.pick(cycle, 2027, w).id));
  ok(twelve.size === Math.min(12, BANK[cycle].length), `${cycle} : 12 semaines consécutives → ${twelve.size} défis distincts`);
}

if (errors) {
  console.error(`\n✖ Défis de la semaine : ${errors} erreur(s) sur ${checks} vérifications`);
  process.exit(1);
}
const d44 = U.CYCLES.map(c => `${c} → ${U.pick(c, 2026, 44).id}`).join(', ');
console.log(`✔ Défis de la semaine : ${total} défis, ${checks} vérifications (semaine 2026-S44 : ${d44})`);
