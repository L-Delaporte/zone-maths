/**
 * Vérificateurs indépendants des générateurs 5e, 4e et 3e (js/randomGenerators.js), utilisés par test_college_generators.js.
 * Chaque question d'une famille vérifiée porte `_v = { k: 'clé', ...paramètres }` ; VERIFIERS[k](v, q) recalcule la réponse
 * attendue à partir des seuls paramètres (sans réutiliser le code du générateur). Pour un QCM : texte de l'option correcte.
 */
'use strict';
const VERIFIERS = {};

// ===================== 5e =====================
Object.assign(VERIFIERS, (function () {
  const module = { exports: {} };
// Vérificateurs indépendants des familles 5e (champ _v). Pour un QCM : texte de l'option correcte attendue.
const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
const fr = (n, d) => { if (d < 0) { n = -n; d = -d; } const g = gcd(n, d) || 1; return d / g === 1 ? String(n / g) : (n / g) + '/' + (d / g); };
const r6 = x => Math.round(x * 1e6) / 1e6;
module.exports = {
  // ---- 5N1
  '5N1.lin': v => r6(v.op === '+' ? v.a + v.b * v.c : v.a - v.b * v.c),
  '5N1.subpar': v => v.a - v.b - v.c,
  '5N1.trad': v => {
    const T = {
      prod_somme: [`${v.a} \\times (${v.b} + ${v.c})`, v.a * (v.b + v.c)],
      somme_prod: [`${v.a} + ${v.b} \\times ${v.c}`, v.a + v.b * v.c],
      diff_quot: [`${v.a} - ${v.b} \\div ${v.c}`, v.a - v.b / v.c],
      quot_somme: [`(${v.a} + ${v.b}) \\div ${v.c}`, (v.a + v.b) / v.c],
      triple_diff: [`3 \\times (${v.a} - ${v.b})`, 3 * (v.a - v.b)]
    }[v.id];
    return v.mode === 'tex' ? `$${T[0]}$` : r6(T[1]);
  },
  '5N1.frac': v => (v.f2 === 1 ? (v.a + v.b) / v.c : (v.a * v.b - v.c) / (v.d + v.e)),
  '5N1.pb': v => (v.v === 0 ? v.B - v.n1 * v.pA - v.n2 * v.pE : v.v === 1 ? v.n1 * v.pA + v.n1 * v.n2 : (v.n1 + v.pA) / v.n2),
  '5N1.pb4': v => (v.T + v.n * v.e - v.C) / v.n,
  '5N1.miss': v => (v.form === 1 ? v.res / v.a - v.b : (v.res - v.a) / v.b + v.c),
  '5N1.par': v => {
    const c = [[`(${v.a} + ${v.b}) \\times ${v.c} - ${v.d}`, (v.a + v.b) * v.c - v.d], [`${v.a} + ${v.b} \\times (${v.c} - ${v.d})`, v.a + v.b * (v.c - v.d)], [`(${v.a} + ${v.b}) \\times (${v.c} - ${v.d})`, (v.a + v.b) * (v.c - v.d)]].filter(x => x[1] === v.target);
    return c.length === 1 ? `$${c[0][0]}$` : 'AMBIGU';
  },
  // ---- 5N2
  '5N2.axis': v => r6(v.start + v.i * v.step),
  '5N2.minmax': v => (v.mx ? Math.max(...v.L) : Math.min(...v.L)),
  '5N2.coord': v => `(${v.x};${v.y})`,
  '5N2.pt': v => v.pts.filter(p => p.x === v.x && p.y === v.y).map(p => p.name)[0],
  '5N2.cnt': v => v.L.filter(x => x < v.kk).length,
  '5N2.temp': v => (v.v === 1 ? v.a - v.b : v.b - v.a),
  '5N2.sum': v => v.L.reduce((s, x) => s + x, 0),
  '5N2.compte': v => v.s - v.d1 - v.d2 + v.v,
  '5N2.trou': v => v.a - v.b,
  '5N2.magic': v => {
    const rows = [[0, 1, 2], [3, 4, 5], [6, 7, 8]], cols = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
    const full = rows.concat(cols).find(l => l.every(i => v.g[i] !== null));
    const S = full.reduce((s, i) => s + v.g[i], 0);
    const line = rows.concat(cols).find(l => l.includes(v.h1) && l.filter(i => v.g[i] === null).length === 1);
    return S - line.filter(i => i !== v.h1).reduce((s, i) => s + v.g[i], 0);
  },
  // ---- 5N3
  '5N3.droite': v => v.i / v.d,
  '5N3.enc': v => Math.floor(v.n / v.d),
  '5N3.cmp': v => { const l = v.a * v.D, r = v.c * v.b; return l < r ? '$<$' : l > r ? '$>$' : '$=$'; },
  '5N3.max2': v => Math.max(v.a / v.b, v.c / v.D),
  '5N3.max3': v => Math.max(...v.fr.map(f => f[0] / f[1])),
  '5N3.reste': v => fr(v.b * v.D - v.a * v.D - v.c * v.b, v.b * v.D),
  '5N3.budget': v => v.tot * (1 - v.a / v.b - v.c / v.D),
  '5N3.trou': v => v.s - v.a * v.D / v.b,
  '5N3.s3': v => fr(v.a * v.d2 * v.D + v.c * v.b * v.D - v.e * v.b * v.d2, v.b * v.d2 * v.D),
  // ---- 5N4
  '5N4.pow': v => v.a ** v.n,
  '5N4.cnt': v => v.n,
  '5N4.exp': v => Math.round(Math.log(v.v) / Math.log(v.a)),
  '5N4.sq': v => v.c * v.c,
  '5N4.side': v => Math.round(Math.sqrt(v.A)),
  '5N4.cube': v => v.a ** 3,
  '5N4.dbl': v => v.n0 * v.b ** v.n,
  '5N4.ssq': v => v.a ** 2 + v.b ** 2 - v.c ** 2,
  '5N4.enc': v => Math.floor(Math.sqrt(v.X)),
  '5N4.seuil': v => Math.floor(Math.log2(v.S)) + 1,
  '5N4.cubes': v => (v.a / v.b) ** 3,
  // ---- 5N5
  '5N5.s1': v => (v.v ? v.a * v.x : v.x + v.a),
  '5N5.conv': v => v.ans || `$${v.a} \\times x$`,
  '5N5.trou': v => (v.v === 1 ? v.b + v.a : v.b - v.a),
  '5N5.form': v => v.m * v.c,
  '5N5.ctx': v => v.p * v.n + v.f,
  '5N5.liste': v => (v.c - v.b) / v.a,
  '5N5.ab': v => v.p * v.a - v.q * v.b + v.a * v.b,
  '5N5.sq': v => v.a * v.x ** 2 + v.b * v.x - v.c,
  '5N5.lin': v => (v.c - v.b) / v.a,
  '5N5.two': v => (v.d - v.b) / (v.a - v.c),
  '5N5.inv': v => v.P / 2 - v.l,
  // ---- 5G1
  '5G1.axis': v => r6(v.start + v.i * v.step),
  '5G1.coord': v => `(${v.x};${v.y})`,
  '5G1.pt': v => v.pts.find(p => p.x === v.x && p.y === v.y).n,
  '5G1.dep': v => `(${v.x + v.dx};${v.y + v.dy})`,
  '5G1.rect': v => `(${v.x1};${v.y2})`,
  '5G1.dist': v => Math.abs(v.x2 - v.x1),
  '5G1.aire': v => Math.abs((v.x2 - v.x1) * (v.y2 - v.y1)),
  '5G1.para': v => `(${v.A[0] + v.C[0] - v.B[0]};${v.A[1] + v.C[1] - v.B[1]})`,
  '5G1.grad': v => r6(v.a + v.j * (v.b - v.a) / v.n),
  // ---- 5G2
  '5G2.lettre': v => { const C = ['H', 'I', 'N', 'O', 'S', 'X', 'Z']; return v.inv ? (C.includes(v.g) ? 'ERREUR' : v.g) : (C.includes(v.g) ? v.g : 'ERREUR'); },
  '5G2.mil': v => (v.v ? 2 * v.d : v.d),
  '5G2.fig': v => v.L.filter(f => /carré|rectangle|losange|parallélogramme|cercle|segment|hexagone/.test(f) && !/demi/.test(f)).length,
  '5G2.orig': v => `(${-v.x};${-v.y})`,
  '5G2.ctr': v => `(${2 * v.a - v.x};${2 * v.b - v.y})`,
  '5G2.mid': v => `(${(v.x + v.x2) / 2};${(v.y + v.y2) / 2})`,
  '5G2.ang': v => 180 - v.A - v.B,
  '5G2.chain': v => 2 * v.p - (2 * v.o - v.a),
  '5G2.para': v => r6(v.AC / 2 + v.BD / 2 + v.AB),
  // ---- 5G3
  '5G3.voc': v => {
    const [[P1, q1], [P2, q2]] = v.pr;
    if (P1 === P2) return Math.abs(q1 - q2) === 2 ? 'opposés par le sommet' : 'adjacents supplémentaires';
    if (q1 === q2) return 'correspondants';
    const top = P1 === 'A' ? q1 : q2, bot = P1 === 'A' ? q2 : q1;
    return (top === 3 && bot === 1) || (top === 4 && bot === 2) ? 'alternes-internes' : 'AUTRE';
  },
  '5G3.eq': v => (v.rel === 'eq' ? v.m : 180 - v.m),
  '5G3.par': v => { const n = v.ty === 'alt' ? 'alternes-internes' : 'correspondants'; return v.m1 === v.m2 ? `Oui : les angles ${n} sont de même mesure` : `Non : les angles ${n} n'ont pas la même mesure`; },
  '5G3.tri': v => 180 - v.al - v.ga,
  '5G3.iso': v => 180 - 2 * v.al,
  '5G3.zig': v => v.a + v.b,
  // ---- 5G4
  '5G4.id': v => v.d,
  '5G4.aire': v => r6(v.b * v.h / 2),
  '5G4.diam': v => r6(v.half ? v.r / 2 : 2 * v.r),
  '5G4.fig': v => ({ hauteur: 'la hauteur issue de A', mediane: 'la médiane issue de A', mediatrice: 'la médiatrice de [BC]' })[v.ty],
  '5G4.voc': (v, q) => {
    const side = `[${v.Q}${v.S}]`;
    if (v.mode === 'equi') { const m = q.statement.match(/point \$(\w)\$ vérifie/); return `$${m[1]}$ appartient à la médiatrice de $${side}$`; }
    const nom = { hauteur: `la hauteur issue de $${v.P}$`, mediane: `la médiane issue de $${v.P}$`, mediatrice: `la médiatrice de $${side}$` }[v.kind];
    const def = { hauteur: `la droite qui passe par $${v.P}$ et qui est perpendiculaire à $(${v.Q}${v.S})$`, mediane: `la droite qui passe par $${v.P}$ et par le milieu de $${side}$`, mediatrice: `la droite perpendiculaire à $${side}$ en son milieu` }[v.kind];
    return v.mode === 'def2nom' ? nom : def;
  },
  '5G4.comp': v => r6(v.L * v.l + v.L * v.h / 2),
  '5G4.comp2': v => r6(v.L * v.l - v.a * v.b / 2 - v.c * (v.l - v.a) / 2),
  '5G4.int': v => { let n = 0; for (let x = 1; x < v.a + v.b; x++) if (x < v.a + v.b && v.a < x + v.b && v.b < x + v.a) n++; return n; },
  '5G4.max': v => (v.dec ? 10 * (v.a + v.b) - 1 : v.a + v.b - 1),
  '5G4.med': v => r6(v.b * v.h / 4),
  // ---- 5G5
  '5G5.diag': v => (v.dbl ? 2 * v.d : v.d),
  '5G5.sup': v => 180 - v.a,
  '5G5.aire': v => v.b * v.h,
  '5G5.nat': v => ({ quelconque: 'Un parallélogramme (ni rectangle, ni losange)', rectangle: 'Un rectangle (non carré)', losange: 'Un losange (non carré)', 'carré': 'Un carré' })[v.ty],
  '5G5.pa': v => (v.P / 2 - v.a) * v.h,
  '5G5.los': v => (180 - v.a) / 2,
  // ---- 5G6
  '5G6.elt': v => ({ faces: v.n + 2, 'arêtes': 3 * v.n, sommets: 2 * v.n })[v.what],
  '5G6.cv': v => [v.x, v.x * 1000, v.x, v.x][v.v],
  '5G6.sol': v => v.ans || ['Un cylindre de révolution', 'Un prisme droit à base triangulaire', 'Un pavé droit', 'Une pyramide', 'Un cône de révolution'][v.k2],
  '5G6.pt': v => r6(v.a * v.b * v.h / 2),
  '5G6.cv2': v => r6([v.x * 1000, v.x * 100 / 1000, v.x * 1000][v.v]),
  '5G6.pat': v => v.a + v.b + v.c,
  '5G6.cyl': v => Math.round(Math.PI * v.r ** 2 * v.h),
  '5G6.cap': v => r6(v.L * v.l * v.h / 1000),
  '5G6.patc': v => Math.round(20 * Math.PI * v.r) / 10,
  '5G6.fill': v => Math.round(v.L * v.l * v.h / 1000 / v.deb * 10) / 10,
  '5G6.h': v => v.V / (v.a * v.b / 2),
  '5G6.cmp': v => Math.round(4 * v.r * v.r * v.h - Math.PI * v.r * v.r * v.h),
  // ---- 5D1
  '5D1.bar': v => { const T = v.vals.reduce((a, b) => a + b, 0); return v.m === 'eff' ? v.vals[v.i] : v.m === 'tot' ? T : Math.round(100 * v.vals[v.i] / T); },
  '5D1.moy': v => Math.round(v.L.reduce((a, b) => a + b, 0) / v.L.length * 10) / 10,
  '5D1.moyE': v => Math.round(v.vals.reduce((a, x, i) => a + x * v.eff[i], 0) / v.eff.reduce((a, b) => a + b, 0) * 10) / 10,
  '5D1.fm': v => v.n * (100 - v.p[0] - v.p[1] - v.p[2]) / 100,
  '5D1.nm': v => v.m * (v.L.length + 1) - v.L.reduce((a, b) => a + b, 0),
  '5D1.mg': v => Math.round((v.n1 * v.m1 + v.n2 * v.m2) / (v.n1 + v.n2) * 10) / 10,
  // ---- 5D2
  '5D2.ech': v => (/obtenir 7|boule verte/.test(v.ev) ? 'Impossible' : /inférieur à 7|tirer une boule rouge dans un sac qui ne/.test(v.ev) ? 'Certain' : /obtenir 6|unique/.test(v.ev) ? 'Peu probable' : /pile|pair/.test(v.ev) ? 'Une chance sur deux' : 'Très probable'),
  '5D2.ech2': v => { const p = v.fav / v.tot; return p === 0 ? 'Impossible' : p === 1 ? 'Certain' : p === 0.5 ? 'Une chance sur deux' : p <= 0.125 ? 'Peu probable' : p >= 0.875 ? 'Très probable' : 'AMBIGU'; },
  '5D2.de': v => { let c = 0; for (let x = 1; x <= v.n; x++) if ({ face: x === v.s, pair: x % 2 === 0, multiple: x % v.m === 0, sup_eg: x >= v.s, sup: x > v.s, inf_eg: x <= v.s }[v.ty]) c++; return fr(c, v.n); },
  '5D2.carte': v => {
    const neg = /^ne pas/.test(v.ev), e = v.ev.replace(/^(ne pas )?obtenir /, '');
    const f = /^une carte (rouge|noire)$/.test(e) ? v.n / 2 : /^un (cœur|carreau|pique|trèfle)$/.test(e) ? v.n / 4 : /^une? (as|roi|dame|valet)$/.test(e) ? 4
      : /^une figure/.test(e) ? 12 : /^une? (as|roi|dame|valet) (rouge|noire?)$/.test(e) ? 2 : /^(le |la |l')(as|roi|dame|valet) de (cœur|carreau|pique|trèfle)$/.test(e) ? 1 : NaN;
    return fr(neg ? v.n - f : f, v.n);
  },
  '5D2.iss': v => (v.v === 2 ? v.w.length : v.n),
  '5D2.urne': v => fr(v.not ? v.b + v.v : v.b, v.r + v.b + v.v),
  '5D2.mot': v => fr(v.w.split('').filter(c => /[AEIOUY]/.test(c)).length, v.w.length),
  '5D2.fav': v => { let c = 0; for (let i = v.s + 1; i <= v.n; i++) if (i % v.kk === 0) c++; return c; },
  '5D2.ctr': v => fr(v.d - v.a, v.d),
  '5D2.cmp': v => (v.a / v.n > v.b / v.m + 1e-12 ? 'Le sac A' : v.b / v.m > v.a / v.n + 1e-12 ? 'Le sac B' : 'Les deux sacs donnent la même probabilité'),
  '5D2.sum': v => r6(1 - v.p1 - v.p2),
  '5D2.add': v => (v.half ? v.b - v.r : 2 * v.b - v.r),
  '5D2.inv': v => v.fav / (v.na / v.nd),
  '5D2.two': v => { let c = 0; for (let i = 1; i <= v.n; i++) { const a = i % v.k1 === 0, b = i % v.k2 === 0; if (v.ou ? a || b : a && b) c++; } return fr(c, v.n); },
  // ---- 5P1
  '5P1.unit': v => r6(v.p * v.m),
  '5P1.lin': v => r6(v.ka / v.a * v.c),
  '5P1.pct': v => r6(v.Q * v.t / 100),
  '5P1.coef': v => r6(v.sx / v.x * v.y),
  '5P1.rec': v => { const q = v.ys.map((y, i) => y / v.xs[i]); const eq = q.every(x => Math.abs(x - q[0]) < 1e-9); return eq ? `Oui, car les quotients prix ÷ durée sont tous égaux à ${String(r6(q[0])).replace('.', ',')}` : 'Non, car les quotients prix ÷ durée ne sont pas tous égaux'; },
  '5P1.gr': v => v.kk * v.x,
  '5P1.ech': v => v.D / v.d,
  '5P1.evo': v => r6(Math.abs(v.P1 - v.P0) / v.P0 * 100),
  // ---- 5P2
  '5P2.f': v => v.a * v.x + v.b,
  '5P2.tab': v => (v.inv ? v.h[v.kk] : v.T[v.kk]),
  '5P2.img': v => v.pts.find(p => p[0] === v.x)[1],
  '5P2.ant': v => v.pts.filter(p => p[1] === v.y).map(p => p[0])[0],
  '5P2.max': v => v.pts.reduce((m, p) => (p[1] > m[1] ? p : m))[0],
  '5P2.ctx': v => r6(v.p * v.n + v.f),
  '5P2.pt': v => `(${v.x};${v.y})`,
  '5P2.cmp': v => Math.abs(v.pA * v.n - v.fB - v.pB * v.n),
  '5P2.seuil': v => Math.floor(v.fB / (v.pA - v.pB)) + 1,
  '5P2.b': v => v.y1 - v.x1 * (v.y2 - v.y1) / (v.x2 - v.x1),
  // ---- 5A1
  '5A1.ord': () => 'B, D, A, E, C',
  '5A1.cnt': v => { let x = v.x0; for (let i = 0; i < v.n; i++) x += v.kk; return x; },
  '5A1.per': v => v.n * v.L,
  '5A1.rep': v => 360 / v.a,
  '5A1.mul': v => { let x = v.x0; for (let i = 0; i < v.n; i++) x *= v.m; return x; },
  '5A1.err': v => `Remplacer ${v.wrong} par ${360 / v.n}`,
  '5A1.sum': v => { let i = 0, S = 0; for (let k = 0; k < v.n; k++) { i++; S += i; } return S; },
  '5A1.esc': v => v.n * (v.h + v.l),
};

  return module.exports;
})());

// ===================== 4e =====================
Object.assign(VERIFIERS, (function () {
  const module = { exports: {} };
// Vérificateurs indépendants des nouvelles familles de 4e (champ _v)
const g = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
const fr = (n, d) => { if (d < 0) { n = -n; d = -d; } const k = g(n, d); n /= k; d /= k; return d === 1 ? String(n) : n + '/' + d; };
module.exports = {
  // 4A1
  '4A1.affect': v => (v.a + v.b) * v.c,
  '4A1.si': v => (v.n > v.L ? v.n - v.p : v.n + v.m),
  '4A1.mod': v => (v.x % 2 === 0 ? v.x / 2 : 3 * v.x + 1),
  '4A1.rep': v => v.s0 + v.n * v.a,
  '4A1.somme': v => { let s = 0; for (let i = 1; i <= v.n; i++) s += i; return s; },
  '4A1.bug': v => (v.N + v.a) * v.k2 - (v.N + v.a * v.k2),
  '4A1.jusqua': v => { let x = v.x0, c = 0; while (!(x > v.L)) { x *= v.m; c++; } return v.ask === 'x' ? x : c; },
  '4A1.cinema': v => v.ages.reduce((s, a) => s + (a < 12 ? v.pe : a > 64 ? v.ps : v.pr), 0),
  // 4D1
  '4D1.etendue': v => Math.max(...v.a) - Math.min(...v.a),
  '4D1.med': v => { const s = [...v.a].sort((x, y) => x - y), n = s.length; return n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2; },
  '4D1.pond': v => Math.round(v.vals.reduce((s, x, i) => s + x * v.co[i], 0) / v.co.reduce((s, x) => s + x, 0) * 100) / 100,
  '4D1.medTab': v => { const f = []; v.v.forEach((x, i) => { for (let k = 0; k < v.e[i]; k++) f.push(x); }); const n = f.length; return n % 2 ? f[(n - 1) / 2] : (f[n / 2 - 1] + f[n / 2]) / 2; },
  '4D1.interp': v => Math.ceil(v.N / 2),
  '4D1.compEt': v => Math.abs((Math.max(...v.a) - Math.min(...v.a)) - (Math.max(...v.b) - Math.min(...v.b))),
  '4D1.manq': v => (v.M * (v.co[0] + v.co[1] + v.co[2]) - v.n1 * v.co[0] - v.n2 * v.co[1]) / v.co[2],
  '4D1.fusion': v => (v.g1 * v.m1 + v.g2 * v.m2) / (v.g1 + v.g2),
  '4D1.medAjout': v => { const s = [...v.a, v.x].sort((p, q) => p - q); return (s[3] + s[4]) / 2; },
  '4D1.freq': v => v.v.reduce((s, x, i) => s + x * v.f[i], 0) / 100,
  '4D1.ajoutMoy': v => (v.n * v.m + v.x) / (v.n + 1),
  // 4D2
  '4D2.derniere': v => (100 - v.a - v.b) / 100,
  '4D2.issues': v => v.N,
  '4D2.pct': v => 1 - v.p,
  '4D2.pp': v => { let c = 0; for (const a of [0, 1]) for (const b of [0, 1]) if ({ aa: a + b === 0, bb: a + b === 2, ab: a !== b, 'a+': a === 0 || b === 0, 'b+': a === 1 || b === 1, eq: a === b, ne: a !== b }[v.id]) c++; return fr(c, 4); },
  '4D2.pd': v => { let c = 0; for (let x = 1; x <= v.n; x++) if ({ pair: x % 2 === 0, impair: x % 2 === 1, multiple: x % v.m === 0, face: x === v.s, sup_eg: x >= v.s, inf_eg: x <= v.s }[v.ty]) c++; return fr(c, 2 * v.n); },
  '4D2.sum': v => (v.q === 'sum' ? '1' : fr(1, v.n)),
  '4D2.somme': v => { let c = 0; for (let i = 1; i <= 6; i++) for (let j = 1; j <= 6; j++) if ({ eq: i + j === v.s, ge: i + j >= v.s, le: i + j <= v.s, ecart: Math.abs(i - j) === v.s, double: i === j }[v.mode || 'eq']) c++; return fr(c, 36); },
  '4D2.auMoins': v => { // dénombrement direct des couples gagnants
    const ok = x => ({ le: x <= v.kk, ge: x >= v.n - v.kk + 1, face: x === v.j, pair: x % 2 === 0 })[v.ty || 'le'];
    let c = 0; for (let a = 1; a <= v.n; a++) for (let b = 1; b <= v.n; b++) if (ok(a) || ok(b)) c++;
    return fr(c, v.n * v.n);
  },
  '4D2.sansRemise': v => fr(v.r * (v.r - 1) + v.b * (v.b - 1), (v.r + v.b) * (v.r + v.b - 1)),
  '4D2.prodPair': v => { let c = 0; for (let i = 1; i <= v.n1; i++) for (let j = 1; j <= v.n2; j++) if ((i * j) % 2 === 0) c++; return fr(c, v.n1 * v.n2); },
  '4D2.urnes': v => fr(v.r1 * v.r2, (v.r1 + v.b1) * (v.r2 + v.b2)),
  // 4G1
  '4G1.carreHyp': v => v.a * v.a + v.b * v.b,
  '4G1.racine': v => Math.sqrt(v.s),
  '4G1.cote': v => Math.sqrt(v.h * v.h - v.a * v.a),
  '4G1.hypApprox': v => Math.round(Math.hypot(v.a, v.b) * 10) / 10,
  '4G1.diag': v => Math.hypot(v.L, v.l),
  '4G1.reciLong': v => Math.hypot(v.a, v.b),
  '4G1.coteApprox': v => Math.round(Math.sqrt(v.h * v.h - v.a * v.a) * 10) / 10,
  '4G1.perim': v => v.h + v.a + Math.sqrt(v.h * v.h - v.a * v.a),
  '4G1.equerre': v => Math.hypot(v.a, v.b),
  '4G1.deuxTri': v => Math.hypot(Math.hypot(v.a, v.b), v.e),
  '4G1.ecran': v => Math.round(Math.hypot(v.L, v.H)),
  '4G1.losange': v => 4 * Math.hypot(v.a, v.b),
  // 4G2
  '4G2.ij': v => v.bc / 2,
  '4G2.par': () => 'Elles sont parallèles',
  '4G2.aj': v => v.ac / 2,
  '4G2.perimAIJ': v => (v.ab + v.ac + v.bc) / 2,
  '4G2.rayonPyth': v => Math.hypot(v.a, v.b) / 2,
  '4G2.angle': v => v.ang,
  '4G2.varignon': v => v.d1 + v.d2,
  '4G2.angleO': v => 180 - 2 * v.x,
  // 4G3
  '4G3.nom': v => v.s,
  '4G3.image': v => `(${v.C[0] - v.A[0] + v.B[0]};${v.C[1] - v.A[1] + v.B[1]})`,
  '4G3.para': v => (v.ask === 'CD' ? v.ab : v.ac),
  '4G3.angle': v => 180 - v.a - v.b,
  '4G3.compo': v => `(${v.M[0] + v.u[0] + v.v[0]};${v.M[1] + v.u[1] + v.v[1]})`,
  '4G3.aire': v => v.b * v.h / 2,
  // 4G4
  '4G4.elements': v => (v.ask === 'arêtes' ? 2 * v.n : v.n + 1),
  '4G4.patron': v => v.good || 'Un disque et une portion de disque',
  '4G4.pyrB': v => v.B * v.h / 3,
  '4G4.pyrRect': v => v.L * v.l * v.h / 3,
  '4G4.coneD': v => v.r * v.r * v.h / 3,
  '4G4.coneArr': v => Math.round(Math.PI * v.r * v.r * v.h / 3),
  '4G4.pyrH': v => 3 * v.V / (v.c * v.c),
  '4G4.coneG': v => v.r * v.r * Math.sqrt(v.g * v.g - v.r * v.r) / 3,
  '4G4.pyrCube': v => Math.pow(v.c, 3) / 3,
  '4G4.verre': v => Math.round(Math.PI * v.r * v.r * v.h / 30),
  // 4N1
  '4N1.prodDec': v => v.a * v.b,
  '4N1.quotMots': v => v.n / v.d,
  '4N1.quotProd': v => (v.a * v.b) / v.c,
  '4N1.puis': v => { let p = 1; for (let i = 0; i < v.n; i++) p *= -v.a; return p; },
  '4N1.chaine': v => v.a - ((v.b * v.c) / v.d),
  '4N1.temp': v => v.T0 - v.b * v.n,
  '4N1.quotDiff': v => (v.a - v.b) / (v.c - v.d),
  '4N1.crochets': v => (v.a - v.b * (v.c - v.d)) / v.e,
  '4N1.moyTemp': v => v.vals.reduce((s, x) => s + x, 0) / v.vals.length,
  '4N1.subst': v => v.a * Math.pow(v.x, 2) - v.b * v.x + v.c,
  // 4N2
  '4N2.prodRel': v => fr(v.n1 * v.n2, v.d1 * v.d2),
  '4N2.fracDe': v => v.Qt * v.n / v.d,
  '4N2.divRel': v => fr(v.n1 * v.d2, v.d1 * v.n2),
  '4N2.inverse': v => fr(v.n, v.d),
  '4N2.fracFrac': v => fr(v.n1 * v.n2, v.d1 * v.d2),
  '4N2.chaineDiv': v => fr((v.a * v.d - v.c * v.b) * v.f, v.b * v.d * v.e),
  '4N2.reste': v => v.R / ((1 - v.a / v.b) * (1 - v.c / v.d)),
  '4N2.facteur': v => fr(v.c * v.b, v.d * v.a),
  '4N2.quatreOps': v => { const x = v.a / v.b - (v.c / v.d) * (v.e / v.f + v.g / v.h); return x; },
  // 4N3
  '4N3.prodA': v => v.e.reduce((s, x) => s + x, 0),
  '4N3.pp': v => v.n * v.m,
  '4N3.combi': v => (v.n + v.m) * v.p + v.q,
  '4N3.decal': v => Number((v.d * Math.pow(10, v.e)).toPrecision(12)),
  '4N3.sci': v => { const x = v.a * v.b * Math.pow(10, v.n + v.m); return Math.floor(Math.log10(x) + 1e-9); },
  '4N3.expo': v => Math.round(Math.log(v.val) / Math.log(v.b)),
  '4N3.eqProd': v => v.s - v.p,
  '4N3.eqPP': v => v.s / v.m,
  // 4N4
  '4N4.estCarre': v => (Number.isInteger(Math.sqrt(v.N)) ? 'Oui' : 'Non'),
  '4N4.racine': v => Math.sqrt(v.N),
  '4N4.encadrer': v => { let n = 0; while ((n + 1) * (n + 1) < v.N) n++; return n; },
  '4N4.carre': v => (v.what === 'côté' ? Math.sqrt(v.A) : 4 * Math.sqrt(v.A)),
  '4N4.compte': v => { let c = 0; for (let k = 0; k <= v.b; k++) if (k * k >= v.a && k * k <= v.b) c++; return c; },
  '4N4.dixieme': v => { let a = 0; while (((a + 1) / 10) ** 2 < v.N) a++; return a / 10; },
  '4N4.sommeAires': v => Math.sqrt(v.a + v.b),
  '4N4.eqCarre': v => Math.sqrt((v.d - v.c) / v.a),
  // 4N5
  '4N5.reduire': v => (v.ask === 'x' ? v.a + v.c : v.b + v.d),
  '4N5.subst': v => v.a * v.x + v.b,
  '4N5.pense': v => (v.res - v.b) / v.m,
  '4N5.reduire2': v => (v.ask === 'x2' ? v.a + v.c : v.b + v.d),
  '4N5.perim': v => (v.Pm / 2 - v.e) / 2,
  '4N5.ages': v => (v.S - v.e) / 2,
  '4N5.tarifs': v => v.F / (v.pB - v.pA),
  '4N5.consec': v => (v.S - v.k2 * (v.k2 - 1) / 2) / v.k2,
  // 4P1
  '4P1.coef': v => 1 + (v.up ? v.p : -v.p) / 100,
  '4P1.ratio': v => v.tot * v.parts[v.i] / v.parts.reduce((s, x) => s + x, 0),
  '4P1.applique': v => v.P * (100 + (v.up ? v.p : -v.p)) / 100,
  '4P1.succ': v => v.P * (100 + v.p1) * (100 - v.p2) / 10000,
  '4P1.taux': v => Math.round(Math.abs(v.N / v.P - 1) * 1000) / 10,
  '4P1.debit': v => v.V * v.m / v.rv,
  '4P1.avant': v => Math.round(v.P * 100 / (100 - v.p) * 100) / 100,
  '4P1.ratioTot': v => v.part / v.b * (v.a + v.b),
  '4P1.conv': v => v.v * 1000 / 3600,
  // 4P2
  '4P2.lire': v => v.pts.find(p => p[0] === v.x)[1],
  '4P2.formule': v => (v.ask === 'm' ? v.a : v.a * v.b),
  '4P2.ante': v => v.pts.find(p => p[1] === v.y)[0],
  '4P2.inverse': v => (v.r + v.c) / v.a - v.b,
  '4P2.taxi': v => (v.ask === 'prix' ? Math.round((v.f + v.k2 * v.d) * 100) / 100 : v.d),
  '4P2.deux': v => (v.d - v.b) / (v.a - v.c),
  '4P2.max': v => v.pts.reduce((m, p) => (p[1] > m[1] ? p : m))[0],
};

  return module.exports;
})());

// ===================== 3e — nombres, organisation des données, algorithmique =====================
Object.assign(VERIFIERS, (function () {
  const module = { exports: {} };
// Vérificateurs indépendants de la surcouche 3eA (recalcul de la réponse attendue à partir de _v)
const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
const F = (n, d) => { if (d < 0) { n = -n; d = -d; } const g = gcd(n, d) || 1; n /= g; d /= g; return d === 1 ? `${n}` : `${n}/${d}`; };
const isSq = n => n >= 0 && Number.isInteger(Math.sqrt(n));
const primes = n => { const f = []; for (let p = 2; p * p <= n; p++) while (n % p === 0) { f.push(p); n /= p; } if (n > 1) f.push(n); return f; };
const r10 = x => +(+x).toFixed(9);
const V = {};
module.exports = V;

// ---------- N1 ----------
V['3N1.rel1'] = v => `${v.form === 'sum' ? v.vals.reduce((a, b) => a + b, 0) : v.vals.reduce((a, b) => a * b, 1)}`;
V['3N1.nature'] = v => {
  if (v.form === 'pi') return 'un nombre non rationnel';
  let n, d;
  if (v.form === 'sqrt') { if (!isSq(v.n)) return 'un nombre non rationnel'; n = v.s * Math.sqrt(v.n); d = 1; } else { n = v.n; d = v.d; }
  const g = gcd(n, d); n /= g; d /= g;
  if (d === 1) return n >= 0 ? 'un entier naturel' : 'un entier relatif négatif';
  return primes(d).every(p => p === 2 || p === 5) ? 'un nombre décimal non entier' : 'un nombre rationnel non décimal';
};
V['3N1.simp'] = v => F(v.a, v.b);
V['3N1.rel2'] = v => {
  const { a, b, c, d } = v;
  if (v.form === 0) return `${a - b * (c - d)}`;
  if (v.form === 1) return `${(a + b) * c - d}`;
  return `${a * b - c / d}`;
};
V['3N1.add'] = v => F(v.a * v.d + v.c * v.b, v.b * v.d);
V['3N1.dec'] = v => `${r10(v.a / v.b)}`;
V['3N1.prio3'] = v => F((v.a * v.d - v.c * v.b) * v.f, v.b * v.d * v.e);
V['3N1.prob3'] = v => {
  const rest = [v.d1 - v.n1, v.d1];
  return v.ask === 'B' ? F(rest[0] * v.n2, rest[1] * v.d2) : F(rest[0] * (v.d2 - v.n2), rest[1] * v.d2);
};
V['3N1.vf3'] = v => {
  const n = v.a * v.d + v.c * v.b, d = v.b * v.d, g = gcd(n, d), q = d / g;
  const ok = v.claim === 'entier' ? q === 1 : primes(q).every(p => p === 2 || p === 5);
  return ok ? 'vrai' : 'faux';
};
V['3N1.prod3'] = v => F(v.fr.reduce((a, x) => a * x[0], 1), v.fr.reduce((a, x) => a * x[1], 1));
V['3N1.tank4'] = v => `${r10(v.C * v.p / v.q * (1 - v.r / v.s) + v.C * v.u / v.v)}`;
V['3N1.inv4'] = v => (v.form === 'mul' ? F(v.c * v.b, v.d * v.a) : F(v.c * v.b - v.a * v.d, v.b * v.d));
V['3N1.nest4'] = v => F(v.p * (v.q * v.r + 1) + v.r, v.q * v.r + 1);
V['3N1.mid4'] = v => F(v.a * v.d + v.c * v.b, 2 * v.b * v.d);

// ---------- N2 ----------
const pmul = (p, q) => { const r = new Array(p.length + q.length - 1).fill(0); p.forEach((x, i) => q.forEach((y, j) => { r[i + j] += x * y; })); return r; };
const coefDeg = (polys, deg) => { let s = 0; for (const [f, g] of polys) { const r = pmul(f, g); const idx = r.length - 1 - deg; if (idx >= 0 && idx < r.length) s += r[idx]; } return s; };
V['3N2.poly'] = v => `${coefDeg(v.P, v.deg)}`;
V['3N2.lin'] = v => `${v.deg ? v.a + v.c : v.b + v.d}`;
V['3N2.mono'] = v => `${v.a * v.b}`;
V['3N2.fill'] = v => `${v.form === 2 ? v.b * v.b : 2 * v.a * v.b}`;
V['3N2.mental'] = v => `${v.form === 0 ? (v.base + v.e) ** 2 : v.form === 1 ? (v.base - v.e) ** 2 : v.base ** 2 - v.e ** 2}`;
V['3N2.prog4'] = v => `${(v.R - v.a * v.a) / (2 * v.a)}`;
V['3N2.area4'] = v => `${(v.S - v.a * v.b) / (v.a + v.b)}`;

// ---------- N2bis ----------
// Écriture indépendante de mx + p (sans espaces : sameAns les ignore).
const lin = (m, p) => `${m === 1 ? '' : m === -1 ? '-' : m}x${p > 0 ? '+' + p : p < 0 ? p : ''}`;
V['3N2bis.fill1'] = v => `${v.k2}(${lin(v.a, v.b)})`;
V['3N2bis.gcd1'] = v => { const g = gcd(v.m, v.n); return `${g}(${lin(v.m / g, v.s * v.n / g)})`; };
V['3N2bis.mono2'] = v => { const g = gcd(v.m, v.n); return `${g}x(${lin(v.m / g, v.s * v.n / g)})`; };
V['3N2bis.check1'] = v => (v.err === 0 ? 'vrai' : 'faux');
V['3N2bis.sq2'] = v => { const mx = `${v.m === 1 ? '' : v.m}x`; return `(${mx}-${v.p})(${mx}+${v.p})`; };
V['3N2bis.mental'] = v => `${v.a * v.a - v.b * v.b}`;
V['3N2bis.fac3'] = v => `(${lin(v.a, v.b)})(${lin(v.c + v.e, v.d + v.f)})`;
V['3N2bis.diff3'] = v => `(${lin(1, v.a - v.b)})(${lin(1, v.a + v.b)})`;
V['3N2bis.hid'] = v => `(${lin(v.a, v.b)})(${lin(v.c, v.d + v.s)})`;
V['3N2bis.solve4'] = v => {
  // racines de (ax+b)^2 = (cx+d)^2 : ax+b = cx+d ou ax+b = -(cx+d)
  const r = [[v.d - v.b, v.a - v.c], [-(v.b + v.d), v.a + v.c]];
  const best = r[0][0] / r[0][1] >= r[1][0] / r[1][1] ? r[0] : r[1];
  return F(best[0], best[1]);
};
V['3N2bis.inv2'] = v => { const mx = `${v.m === 1 ? '' : v.m}x`; return `(${v.p}-${mx})(${v.p}+${mx})`; };
V['3N2bis.whole3'] = v => {
  // Coefficients du crochet recalculés à partir des termes de l'énoncé.
  let U, W;
  if (v.kind === 'sum' || v.kind === 'diff') { U = [v.c, v.d]; W = [v.e, v.f]; }
  else if (v.kind === 'one') { U = [v.c, v.d]; W = [0, 1]; }
  else { U = v.sqFirst ? [v.a, v.b] : [v.c, v.d]; W = v.sqFirst ? [v.c, v.d] : [v.a, v.b]; }
  const m = U[0] + v.s * W[0], p = U[1] + v.s * W[1];
  if (gcd(m, p) !== 1 || p === 0 || gcd(v.a, v.b) !== 1) return 'NON_COMPLETE';
  return `(${lin(v.a, v.b)})(${lin(m, p)})`;
};
V['3N2bis.brevet4'] = v => {
  // E = k·F² + l·F·G = F·(k·F + l·G) ; racines de F et du second facteur.
  const k = v.sqFirst ? 1 : v.s, l = v.sqFirst ? v.s : 1;
  const m = k * v.a + l * v.c, p = k * v.b + l * v.d;
  const r = [[-v.b, v.a], [-p, m]].sort((x, y) => x[0] / x[1] - y[0] / y[1]);
  return `(${F(r[0][0], r[0][1])};${F(r[1][0], r[1][1])})`;
};
V['3N2bis.hidden4'] = v => { // H = (x + sa)[(x − sa) + (cx + d)] = (x + sa)((1 + c)x + d − sa), nombre en facteur extrait
  const m = 1 + v.c, p = v.d - v.s * v.a, g = gcd(m, p);
  return `${g > 1 ? g : ''}(${lin(1, v.s * v.a)})(${lin(m / g, p / g)})`;
};

// ---------- N3 ----------
const sciOf = x => { const e = Math.floor(Math.log10(Math.abs(x)) + 1e-12); const m = +(x / Math.pow(10, e)).toFixed(9); return m >= 10 ? `${+(m / 10).toFixed(9)}*10^${e + 1}` : `${m}*10^${e}`; };
V['3N3.sci'] = v => sciOf(v.x);
V['3N3.sci2'] = v => { const s = sciOf(v.c); const [m, e] = s.split('*10^'); return `${m}*10^${+e + v.e}`; };
V['3N3.dec'] = v => `${r10(v.m * Math.pow(10, v.e))}`;
V['3N3.sign'] = v => `${v.form === 'par' ? Math.pow(-v.a, v.n) : -Math.pow(v.a, v.n)}`;
V['3N3.pref'] = v => `${v.m}*10^${v.pe}`;
V['3N3.rules'] = v => `${v.n * v.m + v.p - v.q}`;
V['3N3.ctx'] = v => `${Math.round(v.a / v.b)}`;
V['3N3.prod'] = v => { const s = sciOf(v.a * v.b); const [m, e] = s.split('*10^'); return `${m}*10^${+e + v.n + v.m}`; };
V['3N3.mixb'] = v => { const r = Math.round(Math.log(v.B) / Math.log(v.a)); return `${v.op === 'mul' ? v.n + r * v.m : v.n - r * v.m}`; };
V['3N3.comp'] = v => `${Math.round(v.a / v.b * Math.pow(10, v.n - v.m))}`;
V['3N3.eq'] = v => `${v.kind === 0 ? (v.e - v.b) / v.a : v.e - v.r * v.c}`;
V['3N3.data'] = v => `${Math.floor(v.C * 1000 / v.s + 1e-9)}`;

// ---------- N4 ----------
V['3N4.check'] = v => (v.a * v.x + v.b === v.c * v.x + v.d ? 'oui' : 'non');
V['3N4.lin'] = v => F(v.d - v.b, v.a - v.c);
V['3N4.sq1'] = v => `${v.k2 > 0 ? 2 : v.k2 === 0 ? 1 : 0}`;
V['3N4.pn'] = v => {
  const r = v.r.map(([n, d]) => [n, d]);
  const val = x => x[0] / x[1];
  if (v.ask === 'sum') return F(r[0][0] * r[1][1] + r[1][0] * r[0][1], r[0][1] * r[1][1]);
  const pick = (val(r[0]) < val(r[1])) === (v.ask === 'min') ? r[0] : r[1];
  return F(pick[0], pick[1]);
};
V['3N4.frac'] = v => F(v.m * v.d - v.n * v.b, v.a * v.n - v.c * v.m);
V['3N4.dev'] = v => F(v.b * v.c - v.a * v.a, 2 * v.a - v.b - v.c);
V['3N4.geo'] = v => F(v.b * v.b, v.a - 2 * v.b);

// ---------- N5 ----------
V['3N5.rest'] = v => `${v.a % v.b}`;
V['3N5.star'] = v => { for (let d = 0; d <= 9; d++) if ((v.a + v.c + d + v.e) % v.m === 0) return `${d}`; return 'x'; };
V['3N5.ndiv'] = v => { let n = 0; for (let d = 1; d <= v.N; d++) if (v.N % d === 0) n++; return `${n}`; };
V['3N5.exp'] = v => { let n = v.N, e = 0; while (n % v.p === 0) { n /= v.p; e++; } return `${e}`; };
V['3N5.smallp'] = v => { for (let d = 2; d <= v.N; d++) if (v.N % d === 0) return `${d}`; return 'x'; };
V['3N5.euclid'] = v => `${v.ask === 'q' ? Math.floor(v.a / v.b) : v.a % v.b}`;
V['3N5.pgcd'] = v => `${gcd(v.a, v.b)}`;
V['3N5.carre'] = v => { for (let k = 1; k <= v.N; k++) if (isSq(v.N * k)) return `${k}`; return 'x'; };
V['3N5.ppcm'] = v => { for (let m = Math.max(v.a, v.b); ; m++) if (m % v.a === 0 && m % v.b === 0) return `${m}`; };
V['3N5.share'] = v => `${(v.ask === 'A' ? v.A : v.B) / gcd(v.A, v.B)}`;
V['3N5.vf'] = v => ([0, 1, 4, 7, 8].includes(v.i) ? 'vrai' : 'faux');

// ---------- Org1 ----------
V['3Org1.tab'] = v => (v.mode === 'img' ? `${v.ys[v.xs.indexOf(v.x)]}` : `${v.xs[v.ys.indexOf(v.y)]}`);
V['3Org1.graph'] = v => (v.mode === 'img' ? `${v.pts.find(p => p[0] === v.x)[1]}` : `${v.pts.find(p => p[1] === v.y)[0]}`);
V['3Org1.vocab'] = v => `${v.kind === 0 ? v.a : v.b}`;
V['3Org1.poly'] = v => `${v.co[0] * v.x * v.x + v.co[1] * v.x + v.co[2]}`;
V['3Org1.count'] = v => { let n = 0; for (let i = 0; i + 1 < v.pts.length; i++) { const [a, b] = [v.pts[i][1], v.pts[i + 1][1]]; if (Math.min(a, b) < v.kk && v.kk < Math.max(a, b)) n++; } return `${n}`; };
V['3Org1.ctx'] = v => `${Math.round((v.P - v.b) / v.a)}`;
V['3Org1.prog'] = v => `${(v.m * v.x + v.a) ** 2}`;
V['3Org1.ant4'] = v => (-v.b / v.a < v.c ? F(-v.b, v.a) : `${v.c}`);
V['3Org1.comp'] = v => { const y = v.pts.find(p => p[0] === v.x)[1]; return `${v.pts.find(p => p[0] === y)[1]}`; };
V['3Org1.sym'] = v => `${v.L - v.r}`;

// ---------- Org2 ----------
const medianOf = arr => { const s = [...arr].sort((a, b) => a - b), n = s.length; return n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2; };
V['3Org2.freq'] = v => `${r10(v.e * 100 / v.N)}`;
V['3Org2.bar'] = v => (v.ask === 'N' ? `${v.effs.reduce((a, b) => a + b, 0)}` : `${v.labels[v.effs.indexOf(Math.max(...v.effs))]}`);
V['3Org2.med'] = v => `${medianOf(v.L)}`;
V['3Org2.wmean'] = v => `${r10(v.vals.reduce((a, x, i) => a + x * v.effs[i], 0) / v.effs.reduce((a, b) => a + b, 0))}`;
V['3Org2.medtab'] = v => { const s = []; v.vals.forEach((x, i) => { for (let k = 0; k < v.effs[i]; k++) s.push(x); }); return `${medianOf(s)}`; };
V['3Org2.addval'] = v => `${v.m2 * (v.n + 1) - v.n * v.m}`;
V['3Org2.interp'] = v => { const m = v.L.reduce((a, b) => a + b, 0) / v.L.length; return `${100 * v.L.filter(x => x > m).length / v.L.length}`; };
V['3Org2.merge'] = v => `${r10((v.a * v.ma + v.b * v.mb) / (v.a + v.b))}`;
V['3Org2.missing'] = v => { let S = 0, N = 0; v.vals.forEach((x, i) => { if (i !== v.j) { S += x * v.effs[i]; N += v.effs[i]; } }); return `${Math.round((v.m * N - S) / (v.vals[v.j] - v.m))}`; };
V['3Org2.vf'] = v => ([0, 4, 5].includes(v.i) ? 'vrai' : 'faux');

// ---------- Org3 ----------
V['3Org3.read'] = v => `${v.ask === 'a' ? v.a : v.b}`;
V['3Org3.lin'] = v => `${r10(v.q / v.p)}`;
V['3Org3.point'] = v => (v.a * v.x + v.b === v.y ? 'oui' : 'non');
V['3Org3.pct'] = v => `${r10(v.up ? 1 + v.p / 100 : 1 - v.p / 100)}`;
V['3Org3.tab'] = v => { const a = (v.ys[3] - v.ys[0]) / (v.xs[3] - v.xs[0]); return `${v.ys[0] - a * v.xs[0]}`; };
V['3Org3.expr'] = v => { const a = (v.y2 - v.y1) / (v.x2 - v.x1); return `${v.ask === 'a' ? a : v.y1 - a * v.x1}`; };
V['3Org3.gexpr'] = v => `${r10(v.a * v.X + v.b)}`;
V['3Org3.ctx'] = v => `${r10(v.ttc / 1.2)}`;
V['3Org3.inter'] = v => { const x = (v.d - v.b) / (v.a - v.c); return `${v.a * x + v.b}`; };
V['3Org3.tarif'] = v => { let n = 0; while (v.pA * n + v.ab >= v.pB * n) n++; return `${n}`; };
V['3Org3.para'] = v => `${v.q - v.a * v.p}`;

// ---------- Org4 ----------
V['3Org4.contr'] = v => `${r10(1 - v.p)}`;
V['3Org4.letters'] = v => { const nv = [...v.w].filter(c => 'AEIOUY'.includes(c)).length; return F(v.ask === 'voyelle' ? nv : v.w.length - nv, v.w.length); };
V['3Org4.wheel'] = v => { let c = 0; for (let x = 1; x <= v.n; x++) { const ok = v.ev === 'm3' ? x % 3 === 0 : v.ev === 'm4' ? x % 4 === 0 : v.ev === 'prime' ? (x > 1 && primes(x).length === 1) : x > v.kk; if (ok) c++; } return F(c, v.n); };
V['3Org4.missing'] = v => `${r10(1 - v.pr - v.pb)}`;
V['3Org4.number'] = v => `${v.N * v.p / v.q}`;
V['3Org4.freq'] = v => `${v.N / v.n}`;
V['3Org4.tree'] = v => `${r10(v.ask === 'AB' ? v.pA * v.pB_A : v.pA * v.pB_A + (1 - v.pA) * v.pB_nA)}`;
V['3Org4.dice'] = v => { let c = 0; for (let i = 1; i <= 6; i++) for (let j = 1; j <= 6; j++) if (v.ev === 'eq' ? i + j === v.s : i === j) c++; return F(c, 36); };
V['3Org4.indep'] = v => F(v.fav, 12);
V['3Org4.atleast'] = v => { const [a, b] = v.p; return F(b ** v.n - a ** v.n, b ** v.n); };
V['3Org4.add'] = v => { for (let x = 0; x < 1000; x++) if ((v.r + x) * v.q === v.p * (v.r + v.v + x)) return `${x}`; return 'x'; };
V['3Org4.game'] = v => { let c = 0; for (let i = 1; i <= 6; i++) for (let j = 1; j <= 6; j++) if ((v.op === 'sum' ? i + j : i * j) >= v.kk) c++; return F(c, 36); };

// ---------- Algo ----------
V['3Algo.tab1'] = v => `${v.op === '+' ? v.a * v.x + v.b : v.a * v.x - v.b}`;
V['3Algo.var1'] = v => { let a = v.a0; const b = a + v.k2; a = b * v.m; return `${v.out === 'a' ? a : b}`; };
V['3Algo.move'] = v => `${v.n * v.L}`;
V['3Algo.stretch'] = v => `${v.a * v.x * v.x + v.c}`;
V['3Algo.poly'] = v => `${360 / v.n}`;
V['3Algo.syr'] = v => { let n = v.n0; for (let i = 0; i < v.k2; i++) n = n % 2 ? 3 * n + 1 : n / 2; return `${n}`; };
V['3Algo.somme'] = v => { const s = v.vals.reduce((a, b) => a + b, 0); return `${v.fn === 'SOMME' ? s : r10(s / v.vals.length)}`; };
V['3Algo.suite'] = v => { let u = v.u0; for (let i = 1; i < v.r; i++) u = v.m * u + v.c; return `${u}`; };
V['3Algo.loop'] = v => { let s = 0, n = v.n0; for (let i = 0; i < v.k2; i++) { s += n; n += v.d; } return `${s}`; };
V['3Algo.while'] = v => { let n = 0; while (n * (n + 1) / 2 < v.N) n++; return `${n}`; };
V['3Algo.tabb'] = v => { let x = 0; while (v.pB * x <= v.ab + v.pA * x) x++; return `${x}`; };
V['3Algo.prog4'] = v => { for (let x = -100; x <= 100; x++) if ((x + v.a) ** 2 - x * x === v.R) return `${x}`; return 'x'; };

  return module.exports;
})());

// ===================== 3e — géométrie =====================
Object.assign(VERIFIERS, (function () {
  const module = { exports: {} };
// Vérificateurs indépendants de la surcouche 3eB (3e Géométrie G0–G7).
// Chaque fonction recalcule la réponse attendue à partir des paramètres _v (sans le code du générateur).
const r = (x, d) => Math.round(x * Math.pow(10, d) + 1e-9 * Math.sign(x)) / Math.pow(10, d);
const dec = x => String(+(+x).toFixed(6)).replace('.', ',');
const H = (a, b) => Math.sqrt(a * a + b * b);
const L = (c, a) => Math.sqrt(c * c - a * a);
const near = (a, b) => Math.abs(a - b) < 1e-6;
const rad = d => d * Math.PI / 180;
const deg = x => x * 180 / Math.PI;
const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
const frac = (n, d) => { const g = gcd(n, d); n /= g; d /= g; if (d < 0) { n = -n; d = -d; } return d === 1 ? String(n) : `${n}/${d}`; };

module.exports = {
  // ---------------- G0 Pythagore
  'G0.idHyp': v => `[${v.X}${v.Y}]`,
  'G0.egal': v => `${v.X}${v.Y}^2=${v.R}${v.X}^2+${v.R}${v.Y}^2`,
  'G0.hyp': v => r(H(v.a, v.b), v.d),
  'G0.cote': v => r(L(v.c, v.l), v.d),
  'G0.recip': v => {
    const ks = Object.keys(v.s).sort((a, b) => v.s[b] - v.s[a]);
    const big = ks[0]; const ok = near(v.s[big] ** 2, v.s[ks[1]] ** 2 + v.s[ks[2]] ** 2);
    if (!ok) return "Non, il n'est pas rectangle";
    const vert = v.V.find(x => !big.includes(x));
    return `Oui, il est rectangle en ${vert}`;
  },
  'G0.hauteur': v => L(v.AB, v.AH) + v.HC,
  'G0.perim': v => r(v.hyp + v.leg + L(v.hyp, v.leg), 2),
  'G0.raccourci': v => v.L + v.l - H(v.L, v.l),
  'G0.aireRect': v => r(v.L * L(v.d, v.L), 4),
  'G0.slide': v => r(L(v.L, v.d1) - L(v.L, v.d2), 2),
  'G0.recipAire': v => r(v.a * v.b / 2, 4),
  'G0.chaine': v => {
    const AC = H(v.AB, v.BC);
    return near(v.AD ** 2, AC * AC + v.CD ** 2) ? 'Oui, rectangle en C' : "Non, il n'est pas rectangle";
  },
  'G0.coneH': v => Math.round(Math.PI * v.r * v.r * L(v.g, v.r) / 3),
  // ---------------- G1 Thalès
  'G1.rapEmb': v => `\\frac{${v.A}${v.M}}{${v.A}${v.B}}=\\frac{${v.A}${v.N}}{${v.A}${v.C}}=\\frac{${v.M}${v.N}}{${v.B}${v.C}}`,
  'G1.rapEmb1': v => [`\\frac{${v.A}${v.M}}{${v.A}${v.B}}`, `\\frac{${v.A}${v.N}}{${v.A}${v.C}}`, `\\frac{${v.M}${v.N}}{${v.B}${v.C}}`][v.a],
  'G1.rapPap': ({ O = 'O', A = 'A', B = 'B', C = 'C', D = 'D' }) => `\\frac{${O}${A}}{${O}${B}}=\\frac{${O}${C}}{${O}${D}}=\\frac{${A}${C}}{${B}${D}}`,
  'G1.paral': v => (near(v.a1 / v.b1, v.a2 / v.b2) ? `Oui : (${v.X}${v.Z}) et (${v.Y}${v.W}) sont parallèles (réciproque du théorème de Thalès)` : `Non : (${v.X}${v.Z}) et (${v.Y}${v.W}) ne sont pas parallèles (contraposée du théorème de Thalès)`),
  'G1.coefK': v => v.AM / v.AB,
  'G1.NC': v => v.AC - v.AC * v.AM / v.AB,
  'G1.ombre': v => v.S / v.s * v.b,
  'G1.ANpar': v => v.AC * v.AM / v.AB,
  'G1.papSub': v => (v.AB - v.OA) * v.OC / v.OA,
  'G1.perimK': v => v.P * v.AM / v.AB,
  'G1.riviere': v => r(v.OB / v.OA * v.AC, 1),
  'G1.pythThales': v => r(H(v.AB, v.AC) * v.AM / v.AB, 1),
  'G1.recipCalc': v => v.BC * v.AM / (v.AM + v.MB),
  'G1.aireK': v => v.S * (v.AM / v.AB) ** 2,
  // ---------------- G2 Trigonométrie
  'G2.idCote': v => `[${{ opp: v.R + v.T, adj: v.R + v.A, hyp: v.A + v.T }[v.role]}]`,
  'G2.rapportVal': v => r(({ cos: v.adj / v.hyp, sin: v.opp / v.hyp, tan: v.opp / v.adj })[v.fn], 2),
  'G2.angleVal': v => Math.round(deg(({ cos: Math.acos, sin: Math.asin, tan: Math.atan })[v.fn](v.v))),
  'G2.longueur': v => {
    const a = rad(v.a), k = v.len;
    const m = { adjFromHyp: k * Math.cos(a), oppFromHyp: k * Math.sin(a), oppFromAdj: k * Math.tan(a), hypFromAdj: k / Math.cos(a), hypFromOpp: k / Math.sin(a), adjFromOpp: k / Math.tan(a) };
    return r(m[v.c], 1);
  },
  'G2.choix': v => `${{ cos: 'Le cosinus', sin: 'Le sinus', tan: 'La tangente' }[v.fn]} de l'angle \\widehat{${v.R}${v.A}${v.T}}`,
  'G2.angle2': v => Math.round(deg(({ cos: Math.acos, sin: Math.asin, tan: Math.atan })[v.fn](v.x / v.y))),
  'G2.elevation': v => r(v.d * Math.tan(rad(v.a)) + (v.e || 0), 1),
  'G2.echelle': v => r(v.L * Math.sin(rad(v.a)), 2),
  'G2.rampe': v => r(deg(Math.asin(v.h / v.L)), 1),
  'G2.hauteurTri': v => { const b = rad(v.b), c = rad(v.c); const AH = v.AB * Math.sin(b); return r(v.AB * Math.cos(b) + AH / Math.tan(c), 1); },
  'G2.cerf': v => r(v.h0 + v.L * Math.sin(rad(v.a)), 1),
  // ---------------- G3 Homothéties
  'G3.longImg': v => v.kk * v.AB,
  'G3.natureK': v => (v.kk === -1 ? 'Une symétrie centrale de centre O' : Math.abs(v.kk) > 1 ? 'Un agrandissement' : 'Une réduction'),
  'G3.lireK': v => (v.same ? 1 : -1) * v.OA2 / v.OA,
  'G3.distNeg': v => Math.abs(v.kk) * v.OM,
  'G3.abscisse': v => v.o + v.kk * (v.a - v.o),
  'G3.aire': v => (v.back ? v.A / (v.kk * v.kk) : v.A * v.kk * v.kk),
  'G3.vol': v => v.V * Math.abs(v.kk) ** 3,
  'G3.kFromArea': v => (v.neg ? -1 : 1) * Math.sqrt(v.A2 / v.A),
  'G3.coord': v => `(${v.xo + v.kk * (v.xa - v.xo)};${v.yo + v.kk * (v.ya - v.yo)})`,
  'G3.posK': v => (v.beyond ? (v.OA + v.AA) / v.OA : -(v.AA - v.OA) / v.OA),
  'G3.tronc': v => v.V * (1 - v.kk ** 3),
  'G3.maqVol': v => v.v * v.n ** 3 / 1e6,
  'G3.maqAire': v => v.Ar * 1e4 / (v.n * v.n),
  'G3.chain': v => v.A * (v.k1 * v.k2) ** 2,
  // ---------------- G4 Sphère, boule, repérage
  'G4.aireSph': v => 4 * v.R * v.R,
  'G4.volBoule': v => frac(4 * v.R ** 3, 3),
  'G4.vocab': v => ({ sphObj: 'une sphère', bouleObj: 'une boule', secS: 'un cercle', secB: 'un disque', espEx: 'une sphère', espLe: 'une boule', planEx: 'un cercle', planLe: 'un disque' })[v.i],
  'G4.lireGeo': v => `(${Math.abs(v.la)}° ${v.la > 0 ? 'N' : 'S'} ; ${Math.abs(v.lo)}° ${v.lo > 0 ? 'E' : 'O'})`,
  'G4.arrondi': v => Math.round(v.mode === 'aire' ? 4 * Math.PI * v.R ** 2 : 4 * Math.PI * v.R ** 3 / 3),
  'G4.sectionR': v => L(v.R, v.d),
  'G4.latDiff': v => Math.abs(v.l1 - v.l2),
  'G4.sectionAire': v => v.R ** 2 - v.d ** 2,
  'G4.sectionDist': v => L(v.R, v.r),
  'G4.litres': v => r(4 * Math.PI * (v.D / 2) ** 3 / 3 / 1000, 1),
  'G4.ratioR': v => (v.what === 'aire' ? v.kk ** 2 : v.kk ** 3),
  'G4.antipode': v => `(${Math.abs(v.la)}° ${v.la > 0 ? 'S' : 'N'} ; ${180 - Math.abs(v.lo)}° ${v.lo > 0 ? 'O' : 'E'})`,
  'G4.composite': v => v.R * v.R * v.h + 2 * v.R ** 3 / 3,
  'G4.meridien': v => (v.back ? v.d9 : 40000 * v.d9 / 360),
  'G4.tube': v => { const R = v.D / 2; return Math.round(Math.PI * R * R * v.n * v.D - v.n * 4 * Math.PI * R ** 3 / 3); },
  'G4.dome': v => Math.ceil(2 * Math.PI * v.R * v.R / v.c),
  'G4.parallele': v => Math.round(2 * Math.PI * 6400 * Math.cos(rad(v.la)) / 100) * 100,
  // ---------------- G5 Espace et sections
  'G5.natSection': v => ['Un rectangle', 'Un carré', 'Un disque de même rayon que la base', 'Un rectangle', 'Un disque, réduction de la base', 'Un carré, réduction de la base', 'Un cercle', 'Un rectangle', 'Un triangle superposable à la base', 'Un triangle, réduction de la base', 'Un disque', 'Un rectangle'][v.i],
  'G5.natNum': v => {
    if (v.kind === 'pave') { const d = { ABCD: [v.L, v.l], ABFE: [v.L, v.h], ADHE: [v.l, v.h] }[v.face]; return `Un rectangle de ${d[0]} cm sur ${d[1]} cm`; }
    return v.kind === 'cylA' ? `Un rectangle de ${2 * v.r} cm sur ${v.h} cm` : `Un disque de rayon ${v.r} cm`;
  },
  'G5.vol': v => ({ pave: v.a * v.b * v.c, prisme: v.a * v.b * v.c / 2, cyl: v.a * v.a * v.b, pyr: v.a * v.b * v.c / 3, cone: v.a * v.a * v.b / 3 })[v.kind],
  'G5.repere': v => { const p = { B: [v.L, 0, 0], C: [v.L, v.l, 0], D: [0, v.l, 0], E: [0, 0, v.h], F: [v.L, 0, v.h], G: [v.L, v.l, v.h], H: [0, v.l, v.h] }[v.n]; return `(${p.join(';')})`; },
  'G5.fas': v => (v.kind === 'prisme' ? { faces: v.n + 2, 'arêtes': 3 * v.n, sommets: 2 * v.n } : { faces: v.n + 1, 'arêtes': 2 * v.n, sommets: v.n + 1 })[v.what],
  'G5.secPave': v => ({ ABFE: v.L * v.h, BCGF: v.l * v.h, ABCD: v.L * v.l })[v.face],
  'G5.secCyl': v => (v.axe ? 2 * v.r * v.h : v.r * v.r),
  'G5.quelSommet': v => { const n = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].find(n => { const x = 'BCFG'.includes(n) ? v.L : 0, y = 'CDGH'.includes(n) ? v.l : 0, z = 'EFGH'.includes(n) ? v.h : 0; return x === v.x && y === v.y && z === v.z; }); return n; },
  'G5.patronCyl': v => r(2 * Math.PI * v.r, 1),
  'G5.maison': v => v.c ** 3 + v.c * v.c * v.h / 3,
  'G5.secRed': v => v.base * v.hp / v.H,
  'G5.secDiag': v => H(v.L, v.l) * v.h,
  'G5.coneCl': v => (v.u === 'mL' ? Math.round(Math.PI * v.r * v.r * v.h / 3) : r(Math.PI * v.r * v.r * v.h / 30, 1)),
  'G5.verre': v => r((v.V || 100) * v.kk ** 3, 1),
  'G5.aquarium': v => r(4 * Math.PI * v.r ** 3 / 3 / (v.L * v.l), 2),
  'G5.petitePyr': v => r(v.c * v.c * v.H / 3 * v.kk ** 3, 1),
  'G5.vide': v => 2 * (v.L ? v.L * v.l * v.h : v.c ** 3) / 3,
  // ---------------- G6 Rotations et transformations
  'G6.polyRot': v => 'ABCDEFGH'[((v.i + (v.anti ? v.m : -v.m)) % v.n + v.n) % v.n],
  'G6.conserv': v => v.v,
  'G6.rotCoord': v => {
    const dx = v.a - v.cx, dy = v.b - v.cy; let X, Y;
    if (v.ang === 180) { X = -dx; Y = -dy; } else { const t = (v.anti ? 1 : -1) * Math.PI / 2; X = Math.round(dx * Math.cos(t) - dy * Math.sin(t)); Y = Math.round(dx * Math.sin(t) + dy * Math.cos(t)); }
    return `(${v.cx + X};${v.cy + Y})`;
  },
  'G6.ident': v => (v.hard ? { rotA: "La rotation de centre O d'angle 90^\\circ dans le sens anti-horaire", rotH: "La rotation de centre O d'angle 90^\\circ dans le sens horaire", symC: 'La symétrie de centre O', symY: "La symétrie d'axe l'axe des ordonnées", symX: "La symétrie d'axe l'axe des abscisses", trans: 'Une translation' } : { trans: 'Une translation', symY: 'Une symétrie axiale', symC: 'Une symétrie centrale', rotA: "Une rotation d'angle 90^\\circ" })[v.kind],
  'G6.angleRot': v => 360 * v.m / v.n,
  'G6.AAp': v => r(2 * v.OA * Math.sin(rad(v.ang / 2)), 1),
  'G6.invTri': v => (v.what === 'hyp' ? H(v.a, v.b) : v.a * v.b / 2),
  'G6.compose': v => ((((v.s1 ? v.a1 : -v.a1) + (v.s2 ? v.a2 : -v.a2)) % 360) + 360) % 360,
  'G6.rosace': v => (v.back ? v.n : 360 / v.n),
  'G6.corde': v => r(2 * v.OA * Math.sin(rad(v.ang / 2)), 1),
  'G6.roue': v => { let j = v.kk - v.s; while (j <= 0) j += v.n; return j; },
  // ---------------- G7 Triangles semblables
  'G7.third': v => 180 - v.a - v.b,
  'G7.semAngles': v => { const s1 = [v.a, v.b, 180 - v.a - v.b].sort((x, y) => x - y), s2 = [v.g1, v.g2, 180 - v.g1 - v.g2].sort((x, y) => x - y); return s1.every((x, i) => x === s2[i]) ? 'Oui : leurs angles sont deux à deux de même mesure' : 'Non : leurs angles ne sont pas deux à deux de même mesure'; },
  'G7.homol': v => `[${[v.T2[v.perm[v.i]], v.T2[v.perm[v.j]]].sort().join('')}]`,
  'G7.coefK': v => v.b / v.a,
  'G7.calcSide': v => v.c * v.b / v.a,
  'G7.propSides': v => { const a = [...v.s1].sort((x, y) => x - y), b = [...v.s2].sort((x, y) => x - y); const q = b.map((x, i) => x / a[i]); return (near(q[0], q[1]) && near(q[1], q[2])) ? 'Oui : leurs côtés sont proportionnels' : 'Non : leurs côtés ne sont pas proportionnels'; },
  'G7.perim': v => v.P * v.b / v.a,
  'G7.anti': v => r(v.AD * v.AC / v.AB, 2),
  'G7.hauteurRect': v => r(v.AB * v.AB / v.BC, 2),
  'G7.aire': v => v.A * (v.b / v.a) ** 2,
  'G7.aireBack': v => v.a * Math.sqrt(v.A2 / v.A),
  'G7.miroir': v => r(v.he * v.d2 / v.d1, 2),
  'G7.rectSim': v => v.a * v.b / 2,
  'G7.xEq': v => v.c / (v.kk - 1),
  'G7.vol': v => v.V * v.kk ** 3,
  // @@VER_END
};

  return module.exports;
})());

module.exports = VERIFIERS;
