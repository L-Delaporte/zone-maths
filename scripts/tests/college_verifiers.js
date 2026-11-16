/**
 * Vérificateurs indépendants des générateurs 5e, 4e et 3e (js/randomGenerators.js), utilisés par test_college_generators.js.
 * Chaque question d'une famille vérifiée porte `_v = { k: 'clé', ...paramètres }` ; VERIFIERS[k](v, q) recalcule la réponse
 * attendue à partir des seuls paramètres (sans réutiliser le code du générateur). Pour un QCM : texte de l'option correcte.
 */
'use strict';
const VERIFIERS = {};
/** Polynôme saisi (coefficients du plus haut degré au terme constant) : « 3x^2-5x+2 », sans espaces */
// Dernière opération d'une expression LaTeX (hors parenthèses) : 'somme', 'difference' ou 'produit'
const DERN_OP = (s) => {
  const t = String(s).replace(/\$/g, '').replace(/\s+/g, '');
  let depth = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === '(') depth++;
    else if (t[i] === ')') depth--;
    else if (depth === 0 && i > 0 && (t[i] === '+' || t[i] === '-')) return t[i] === '+' ? 'somme' : 'difference';
  }
  return 'produit';
};
const PSTR = (cs) => {
  const n = cs.length - 1; let out = '';
  cs.forEach((c, i) => {
    if (!c) return;
    const d = n - i, v = d === 0 ? '' : d === 1 ? 'x' : `x^${d}`;
    const a = Math.abs(c), body = d && a === 1 ? v : `${a}${v}`;
    out += c < 0 ? `-${body}` : `${out ? '+' : ''}${body}`;
  });
  return out || '0';
};

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
  '5N1.divdec': v => r6(v.a / v.b),
  '5N1.divdecq': v => `$${v.D} \\div ${v.d}$`,
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
  '5N3.pe': v => (v.w === 'e' ? Math.floor(v.n / v.d) : v.w === 'r' ? v.n % v.d : v.e * v.d + v.r),
  '5N3.ecr': v => (v.w === 'pct' ? r6(v.n * 100 / v.d) : v.w === 'dec' ? v.p / 100 : v.w === 'fr' ? fr(v.a, v.b) : r6(v.p * v.d / 100 - v.d)),
  '5N3.dq': v => fr(v.a * v.c + v.s * v.e * v.b, v.b * v.c),
  // ---- 5N4
  '5N4.pow': v => v.a ** v.n,
  '5N4.sq': v => v.c * v.c,
  '5N4.cbrt': v => Math.round(Math.cbrt(v.V)),
  '5N4.decp': v => r6((v.K / 10) ** v.n),
  '5N4.litt': v => v.a * v.x ** v.n + v.s * v.c,
  '5N4.par': v => (v.p ? (v.a * v.b) ** 2 : v.a * v.b * v.b) - v.c,
  '5N4.ccq': v => { const carre = Number.isInteger(Math.sqrt(v.n)), cube = Math.round(Math.cbrt(v.n)) ** 3 === v.n; return carre && cube ? 'À la fois un carré et un cube' : carre ? 'Un carré seulement' : cube ? 'Un cube seulement' : 'Ni un carré, ni un cube'; },
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
  '5N5.lin': v => r6((v.c - v.b) / v.a),
  '5N5.xdiv': v => r6(v.c * v.a),
  '5N5.nature': v => {
    let d = 0, op = null;
    for (const ch of v.e) {
      if (ch === '(') d++;
      else if (ch === ')') d--;
      else if (d === 0 && (ch === '+' || ch === '-')) op = ch;
    }
    return op === '+' ? 'Une somme' : op === '-' ? 'Une différence' : 'Un produit';
  },
  '5N5.fact': v => {
    let p = Math.abs(v.a), q = Math.abs(v.b);
    while (q) [p, q] = [q, p % q];
    const c = v.a / p, d = v.b / p;
    return `${p}(${c === 1 ? '' : c}x${d < 0 ? '-' : '+'}${Math.abs(d)})`;
  },
  '5N5.contre': v => {
    const f = v.vals.filter(x => x * x + v.p !== v.s * x);
    if (f.length !== 1) throw new Error(`${f.length} contre-exemple(s) parmi ${v.vals}`);
    return `$x = ${f[0]}$`;
  },
  '5N5.carres': v => {
    const f = v.pairs.filter(([u, w]) => !Number.isInteger(Math.sqrt(u * u + w * w)));
    if (f.length !== 1) throw new Error(`${f.length} contre-exemple(s)`);
    const [u, w] = f[0];
    return `$${u * u} + ${w * w} = ${u * u + w * w}$`;
  },
  '5N5.conj': v => {
    const run = x => (v.mode === 'prog' ? v.m * (x + v.a) - v.m * v.a : v.mode === 'cons' ? x + (x + 1) + (x + 2) : (v.m * x + v.m * v.a) - v.m * (x + v.a));
    const g = v.cand.filter(([u, w]) => v.xs.every(x => u * x + w === run(x)));
    if (g.length !== 1) throw new Error(`${g.length} conjecture(s) compatible(s)`);
    return g[0][2];
  },
  '5N5.prog': v => {
    const cx = v.m - v.dx, c0 = v.m * v.a - v.c;
    return cx === 0 ? c0 : `${cx}x${c0 ? (c0 > 0 ? '+' : '') + c0 : ''}`;
  },
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
  '5G4.cstr': v => {
    const [p, q, g] = [v.a, v.b, v.c].sort((x, y) => x - y), som = p + q;
    return som > g
      ? `Oui : les deux petites longueurs mises bout à bout ($${p} + ${q} = ${som}$ cm) dépassent la plus grande ($${g}$ cm)`
      : `Non : les deux petites longueurs mises bout à bout ($${p} + ${q} = ${som}$ cm) sont trop courtes pour relier les extrémités du grand côté ($${g}$ cm)`;
  },
  '5G4.codage': v => ({ hauteur: `$(${v.K}${v.H})$`, mediane: `$(${v.K}${v.I})$`, mediatrice: 'la droite $d$' })[v.ty],
  '5G4.hext': v => v.mode === 'saisie' ? r6(v.x + v.y) : v.mode === 'identifie' ? `$[${v.K}${v.H}]$` : `Sur la droite $(${v.L}${v.M})$, à l'extérieur du segment $[${v.L}${v.M}]$, du côté de $${v.L}$`,
  '5G4.just': v => ({ mediane: 'Elle passe par un sommet et par le milieu du côté opposé', hauteur: 'Elle passe par un sommet et est perpendiculaire au côté opposé', mediatrice: 'Elle est perpendiculaire au segment en son milieu', equidist: "Un point à égale distance des extrémités d'un segment appartient à la médiatrice de ce segment" })[v.ty],
  '5G4.lect': v => r6(v.mode === 'double' ? 2 * v.v : v.mode === 'demi' ? v.w / 2 : v.v),
  '5G4.arcs': v => {
    if (v.mode === 'rayon') return r6(v.L - v.r1);
    const s = v.r1 + v.r2;
    return s > v.L ? 'Les arcs se coupent : on obtient un triangle' : s < v.L ? "Les arcs ne se coupent pas : aucun triangle n'est possible" : 'Les arcs se touchent en un seul point du segment : les trois points sont alignés';
  },
  '5G4.medp': v => {
    if (v.mode === 'reciproque') return r6(2 * v.x);
    const T1 = `$${v.A}${v.B}${v.I}$`, T2 = `$${v.A}${v.C}${v.I}$`;
    if (v.mode === 'justif') return `Ils ont des bases de même longueur ($${v.B}${v.I} = ${v.I}${v.C}$) et la même hauteur, issue de $${v.A}$`;
    if (v.mode === 'etape') return `Les triangles ${T1} et ${T2} ont la même hauteur $h$, issue de $${v.A}$`;
    return `Les triangles ${T1} et ${T2} ont la même aire`;
  },
  '5G4.medd': v => r6(v.S / 4),
  // ---- 5G5
  '5G5.diag': v => (v.dbl ? 2 * v.d : v.d),
  '5G5.sup': v => 180 - v.a,
  '5G5.aire': v => v.b * v.h,
  '5G5.conv': v => r6(v.desc ? v.n * v.f / 10 : v.n / 10),
  '5G5.unit': v => v.b * v.f * v.h,
  '5G5.dal': v => v.b * v.h * 10000 / (v.c * v.c),
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
  '5G6.dA': v => v.r * v.r,
  '5G6.dF': v => (v.aire ? `$\\pi \\times ${v.r}^2$` : `$2 \\times \\pi \\times ${v.r}$`),
  '5G6.dD': v => (v.mode === 'exact_d' ? v.d * v.d / 4 : Math.round(Math.PI * v.d * v.d / 4 * 10) / 10),
  '5G6.cou': v => v.r2 * v.r2 - v.r1 * v.r1,
  '5G6.dR': v => Math.sqrt(v.n) * (v.rayon ? 1 : 2),
  '5G6.pR': v => ({ pave: 'Un pavé droit', cube: 'Un cube', prisme: 'Un prisme droit à base triangulaire', cylD: 'Un cylindre de révolution', cylC: 'Un cylindre de révolution' })[v.sol],
  '5G6.pQ': v => ['En pointillés', 'En vraie grandeur', 'Elles sont parallèles entre elles', 'Réduite', 'Deux segments parallèles', 'Un carré', 'Un parallélogramme', '3', 'Des ovales', 'La moitié arrière de la base du bas', 'Un disque en vraie grandeur', 'Un triangle en vraie grandeur', 'Sur la face avant et sur la face arrière'][v.i],
  '5G6.pF': v => (v.mode === 'fuyante' ? r6(v.P * v.c) : v.mode === 'reel' ? r6(v.X / v.c) : ({ pave: v.L, cube: v.P, cyl: v.r })[v.sol]),
  '5G6.pC': v => {
    const pave = v.solide === 'pave', c = pave ? (v.s > 0 ? 4 : 5) : (v.s > 0 ? 3 : 4);
    if (v.mode === 'sommet') return `$${v.noms[c]}$`;
    const E = pave ? (v.s > 0 ? [[0, 4], [4, 5], [4, 7]] : [[1, 5], [4, 5], [5, 6]]) : (v.s > 0 ? [[0, 3], [3, 4], [3, 5]] : [[1, 4], [3, 4], [4, 5]]);
    const n = E.map(([i, j]) => [v.noms[i], v.noms[j]].sort().join('')).sort();
    return `$[${n[0]}]$, $[${n[1]}]$ et $[${n[2]}]$`;
  },
  '5G6.pG': v => { const x = v.C[0] + v.H[0] - v.D[0], y = v.C[1] + v.H[1] - v.D[1]; return `$${Object.keys(v.pts).find(n => v.pts[n][0] === x && v.pts[n][1] === y)}$`; },
  '5G6.pV': v => { const P = r6(v.X / v.c); return v.sol === 'pave' ? v.L * v.H * P : v.sol === 'prisme' ? v.a * v.b / 2 * P : v.r * v.r * P; },
  // ---- 5D1
  '5D1.bar': v => { const T = v.vals.reduce((a, b) => a + b, 0); return v.m === 'eff' ? v.vals[v.i] : v.m === 'tot' ? T : Math.round(100 * v.vals[v.i] / T); },
  '5D1.moy': v => Math.round(v.L.reduce((a, b) => a + b, 0) / v.L.length * 10) / 10,
  '5D1.moyE': v => Math.round(v.vals.reduce((a, x, i) => a + x * v.eff[i], 0) / v.eff.reduce((a, b) => a + b, 0) * 10) / 10,
  '5D1.fm': v => v.n * (100 - v.p[0] - v.p[1] - v.p[2]) / 100,
  '5D1.nm': v => v.m * (v.L.length + 1) - v.L.reduce((a, b) => a + b, 0),
  '5D1.mg': v => Math.round((v.n1 * v.m1 + v.n2 * v.m2) / (v.n1 + v.n2) * 10) / 10,
  '5D1.car': v => {
    const y = v.ys;
    if (v.m === 'val') return y[v.i];
    if (v.m === 'ecart') return Math.abs(y[v.i] - y[v.j]);
    const r = y.slice(1).map((b, i) => b - y[i]), M = Math.max(...r);
    if (v.m === 'hausse') return M;
    if (v.m === 'periode') { const i = r.indexOf(M); return `Entre ${v.bt[i]} et ${v.bt[i + 1]}`; }
    const s = v.at[y.indexOf(Math.max(...y))];
    return s[0].toUpperCase() + s.slice(1);
  },
  '5D1.rep': v => /^comparer/.test(v.goal) ? 'Un diagramme en barres' : /évolution/.test(v.goal) ? 'Un graphique cartésien' : 'Un diagramme circulaire',
  '5D1.tf': v => {
    const C = i => String.fromCharCode(66 + i), r = `${C(0)}2:${C(v.n - 1)}2`;
    if (v.m === 'somme') return `=SOMME(${r})`;
    if (v.m === 'moyenne') return v.alt ? `=SOMME(${r})/${v.n}` : `=MOYENNE(${r})`;
    return `=${C(v.j)}2/${C(v.n)}2`;
  },
  '5D1.tv': v => { const T = v.L.reduce((a, b) => a + b, 0); return v.m === 'somme' ? T : v.m === 'moyenne' ? r6(T / v.L.length) : r6(v.L[v.j] / T); },
  '5D1.dec': v => r6(v.m + v.s * v.d),
  '5D1.tr': v => { const A = v.y0 + v.g * v.h, B = v.y0 + v.g * v.h * v.r; return `C'est faux : ${v.b} n'a que ${B - A} ${v.u} de plus que ${v.a}, car l'axe vertical ne part pas de 0.`; },
  '5D1.tp': v => { const S = v.p.reduce((a, b) => a + b, 0); return S === 100 ? 'Aucune erreur : la somme des pourcentages vaut bien 100 %.' : `Il y a une erreur : la somme des pourcentages vaut ${S} %, pas 100 %.`; },
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
  '5D2.cert': v => {
    if (!v.ev) return v.mot === 'certain' ? 1 : 0;
    const m = v.ev.match(/\$(\d+)\$/), s = m ? +m[1] : NaN; let c = 0;
    for (let x = 1; x <= v.n; x++) if (/inférieur ou égal/.test(v.ev) ? x <= s : /strictement supérieur/.test(v.ev) ? x > s : /entier|positif/.test(v.ev) ? true : x === s) c++;
    return fr(c, v.n);
  },
  '5D2.rest': v => fr(v.n - v.r - v.b, v.n),
  '5D2.tomb': v => (v.pctForm ? r6((v.tot - v.G) / v.tot * 100) : fr(v.tot - v.G, v.tot)),
  '5D2.pari': v => { let a = 0, b = 0; for (let i = 1; i <= v.n; i++) { if (i % v.kk === 0) a++; if (i > v.s) b++; } return a > b ? v.p1 : b > a ? v.p2 : 'Les deux ont autant de chances'; },
  '5D2.inter': v => { let c = 0; for (let x = v.a; x <= v.b; x++) if (x % v.m === 0) c++; return fr(c, v.b - v.a + 1); },
  '5D2.cmp': v => (v.a / v.n > v.b / v.m + 1e-12 ? 'Le sac A' : v.b / v.m > v.a / v.n + 1e-12 ? 'Le sac B' : 'Les deux sacs donnent la même probabilité'),
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
  '5P1.nuage': v => ({ origine: "Oui : les points sont pratiquement alignés avec l'origine du repère", decale: "Non : les points sont pratiquement alignés, mais sur une droite qui ne passe pas par l'origine", courbe: 'Non : les points ne sont pas alignés' })[v.cas],
  // ---- 5P2
  '5P2.f': v => v.a * v.x + v.b,
  '5P2.tab': v => (v.inv ? v.h[v.kk] : v.T[v.kk]),
  '5P2.img': v => v.pts.find(p => p[0] === v.x)[1],
  '5P2.ant': v => v.pts.filter(p => p[1] === v.y).map(p => p[0])[0],
  '5P2.max': v => v.pts.reduce((m, p) => (p[1] > m[1] ? p : m))[0],
  '5P2.nuage': v => v.kk * v.N2,
  '5P2.ctx': v => r6(v.p * v.n + v.f),
  '5P2.pt': v => `(${v.x};${v.y})`,
  '5P2.cmp': v => Math.abs(v.pA * v.n - v.fB - v.pB * v.n),
  '5P2.seuil': v => Math.floor(v.fB / (v.pA - v.pB)) + 1,
  '5P2.b': v => v.y1 - v.x1 * (v.y2 - v.y1) / (v.x2 - v.x1),
  // ---- 5A1
  '5A1.ord': () => 'B, D, A, E, C',
  '5A1.cnt': v => { let x = v.x0; for (let i = 0; i < v.n; i++) x += v.kk; return x; },
  '5A1.per': v => v.n * v.L,
  '5A1.pa': v => v.n * v.L,
  '5A1.2f': v => v.n1 * v.L1 + v.n2 * v.L2,
  '5A1.rep': v => 360 / v.a,
  '5A1.mul': v => { let x = v.x0; for (let i = 0; i < v.n; i++) x *= v.m; return x; },
  '5A1.err': v => `Remplacer ${v.wrong} par ${360 / v.n}`,
  '5A1.sum': v => { let i = 0, S = 0; for (let k = 0; k < v.n; k++) { i++; S += i; } return S; },
  '5A1.esc': v => v.n * (v.h + v.l),
  '5A1.simple': v => v.n * v.u,
  '5A1.apres': v => v.n * v.L + v.M,
  '5A1.frm': v => ({ 1: `$(x + ${v.a}) \\times ${v.b}$`, 2: `$x \\times ${v.b} + ${v.a}$`, 3: `$(x - ${v.a}) \\times ${v.b}$`, 4: `$x \\times ${v.b} - ${v.a}$` })[v.form],
  '5A1.inv': v => v.form === 1 ? (v.F + v.c) / v.b - v.a : (v.F / v.c - v.a) / v.b,
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
  '4A1.ordre': v => [0, 1, v.mulFirst ? 2 : 3, v.mulFirst ? 3 : 2, 4].map(i => v.L[i]).join(', '),
  // Simule chaque bloc proposé : un seul doit donner la valeur voulue
  '4A1.bloc': v => {
    const run = o => {
      const aj = o.match(/^ajouter (\d+)/);
      if (aj) return v.s0 + Number(aj[1]);
      const op = o.match(/\(score ([-+*]) (\d+)\)/);
      if (op) { const k = Number(op[2]); return op[1] === '+' ? v.s0 + k : op[1] === '-' ? v.s0 - k : v.s0 * k; }
      return Number(o.match(/à (\d+)$/)[1]);
    };
    const ok = v.opts.filter(o => run(o) === v.cible);
    return ok.length === 1 ? ok[0] : 'AMBIGU';
  },
  '4A1.chapeau': v => (v.ev === 't' ? `quand la touche [${v.key}] est pressée` : v.ev === 'l' ? 'quand ce lutin est cliqué' : 'quand drapeau cliqué'),
  '4A1.clavier': v => v.seq.reduce((x, c) => (c === 'A' ? x + v.g : v.mode === 'reset' ? 0 : x - v.p), v.s0),
  // Compare chaque condition proposée à la consigne autour du seuil : une seule doit convenir
  '4A1.cond': v => {
    const veut = x => (v.mode === 'gt' ? x > v.L : v.mode === 'lt' ? x < v.L : x === v.L);
    const vrai = (o, x) => { const [, c, s] = o.match(/N ([<>=]) (\d+)/); return c === '>' ? x > Number(s) : c === '<' ? x < Number(s) : x === Number(s); };
    const ok = v.opts.filter(o => { for (let x = v.L - 5; x <= v.L + 5; x++) if (vrai(o, x) !== veut(x)) return false; return true; });
    return ok.length === 1 ? ok[0] : 'AMBIGU';
  },
  '4A1.angle': v => String(360 / v.n),
  '4A1.corrige': v => (v.sc === 'init' ? 'Placer le bloc « mettre [S] à 0 » avant la boucle'
    : v.sc === 'emboit' ? `Écrire « mettre [R] à ((réponse + ${v.a}) * ${v.k2}) »`
      : v.sc === 'cond' ? `Remplacer la condition par (N > ${v.L})` : `Remplacer ${v.inter} par ${v.ext}`),
  '4A1.butee': v => v.seq.reduce((x, c) => Math.max(-v.B, Math.min(v.B, x + (c === 'D' ? v.d : -v.d))), v.x0),
  '4A1.clics': v => { let s = 0; for (let i = 1; i <= v.c; i++) s += i % v.k2 === 0 ? v.b : v.a; return s; },
  '4A1.ordreB': v => `${v.L[0]}, ${v.L[1]}, ${v.L[2]} [${v.L[3]}, ${v.L[4]}], ${v.L[5]}`,
  '4A1.script': v => `Programme ${v.bon}`,
  '4A1.seuil': v => { let x = v.x0, n = 0; while (!(x > v.L)) { x += v.p; n++; } return n; },
  // 4D1
  '4D1.etendue': v => Math.max(...v.a) - Math.min(...v.a),
  '4D1.med': v => { const s = [...v.a].sort((x, y) => x - y), n = s.length; return n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2; },
  '4D1.pond': v => Math.round(v.vals.reduce((s, x, i) => s + x * v.co[i], 0) / v.co.reduce((s, x) => s + x, 0) * 100) / 100,
  '4D1.medTab': v => { const f = []; v.v.forEach((x, i) => { for (let k = 0; k < v.e[i]; k++) f.push(x); }); const n = f.length; return n % 2 ? f[(n - 1) / 2] : (f[n / 2 - 1] + f[n / 2]) / 2; },
  '4D1.interp': v => Math.ceil(v.N / 2),
  '4D1.compEt': v => {
    const et = s => Math.max(...s) - Math.min(...s), eA = et(v.a), eB = et(v.b);
    const [reg, irr, p, g] = eA < eB ? ['Lina', 'Malo', eA, eB] : ['Malo', 'Lina', eB, eA];
    return `${reg}, car l'étendue de ses notes ($${p}$) est plus petite que celle de ${irr} ($${g}$) : ses notes sont moins dispersées.`;
  },
  '4D1.pieEff': v => v.d * v.N / 360,
  '4D1.pieAng': v => v.e * 360 / v.N,
  '4D1.pieInv': v => (v.total ? v.e * 360 / v.d : v.dj * v.e / v.d),
  '4D1.pieMoy': v => v.v.reduce((s, x, i) => s + x * v.d[i], 0) / 360,
  '4D1.pieManq': v => (360 - v.d.reduce((s, x) => s + x, 0)) * v.N / 360,
  '4D1.medBatAjout': v => { const f = [v.x, v.y]; v.v.forEach((x, i) => { for (let k = 0; k < v.e[i]; k++) f.push(x); }); f.sort((p, q) => p - q); const n = f.length; return n % 2 ? f[(n - 1) / 2] : (f[n / 2 - 1] + f[n / 2]) / 2; },
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
  '4D2.secteur': v => fr(v.ang, 360),
  '4D2.osselet': v => (v.mode === 'last' ? 100 - v.a - v.b - v.c : v.mode === 'contraire' ? 100 - v.a : v.a + v.b) / 100,
  '4D2.cibleRect': v => fr(v.mode === 'dedans' ? v.a * v.b : v.W * v.H - v.a * v.b, v.W * v.H),
  '4D2.roueFrac': v => fr(v.mode === 'dernier' ? v.N - v.p1 - v.p2 : v.mode === 'nonA' ? v.N - v.p1 : v.p1 + v.p2, v.N),
  '4D2.cibleDisque': v => fr(v.mode === 'centre' ? v.r * v.r : v.R * v.R - v.r * v.r, v.R * v.R),
  '4D2.osseletFreq': v => ({ une: { A: v.na, B: v.nb, C: v.nc, D: v.nd }[v.X], ni: v.nc + v.nd, ou: v.na + v.nc })[v.mode] / v.N,
  '4D2.dePipe': v => {
    const d = 5 + v.kk;
    if (v.mode === 'ordinaire') return fr(1, d);
    if (v.mode === 'speciale') return fr(v.kk, d);
    if (v.mode === 'nonSpeciale') return fr(5, d);
    let n = 0; for (let f = 1; f <= 6; f++) if (f % 2 === (v.mode === 'pair' ? 0 : 1)) n += f === v.j ? v.kk : 1;
    return fr(n, d);
  },
  '4D2.cibleAnneau': v => fr(v.mode === 'milieu' ? v.r2 * v.r2 - v.r1 * v.r1 : v.mode === 'ext' ? v.r3 * v.r3 - v.r2 * v.r2 : v.r2 * v.r2, v.r3 * v.r3),
  '4D2.rouePart': v => { const J = 100 - v.P * (1 + v.c1 + v.c2); return (v.mode === 'jaune' ? J : v.mode === 'nonRouge' ? 100 - v.c1 * v.P : v.c1 * v.P + J) / 100; },
  '4D2.attendu': v => v.N * v.a * v.b / (v.W * v.H),
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
  '4G2.egCas': v => ({ ccc: 'Le cas des trois côtés', cac: 'Le cas de l\'angle compris entre deux côtés', aca: 'Le cas du côté compris entre deux angles' })[v.kind],
  '4G2.egSuff': v => ({ ccc: 'Oui, d\'après le cas des trois côtés', cac: 'Oui, d\'après le cas de l\'angle compris entre deux côtés', aca: 'Oui, d\'après le cas du côté compris entre deux angles', ssa: 'Non, ces données ne permettent pas de l\'affirmer', aaa: 'Non, ces données ne permettent pas de l\'affirmer' })[v.kind],
  '4G2.egCote': v => v.val,
  '4G2.egIso': v => (v.sommet ? v.x / 2 : 90 - v.x),
  '4G2.egPerim': v => v.p + v.q + v.r,
  '4G2.egKite': v => 360 - v.a - 2 * v.b,
  '4G2.egPara': v => 180 - v.b,
  '4G2.cosAdj': v => `$[${v.R}${v.S}]$`,
  '4G2.cosForm': v => `$\\cos(\\widehat{${v.R}${v.S}${v.U}}) = \\dfrac{${v.R}${v.S}}{${v.S}${v.U}}$`,
  '4G2.cosVal': v => fr(v.adj, v.hyp),
  '4G2.cosAdjL': v => Math.round(10 * v.H * Math.cos(v.a * Math.PI / 180)) / 10,
  '4G2.cosAngle': v => Math.round(Math.acos(v.adj / v.hyp) * 180 / Math.PI),
  '4G2.cosCalc': v => `$${v.X} = ${v.H} \\times \\cos(${v.a}^\\circ)$`,
  '4G2.cosHyp': v => Math.round(10 * v.adj / Math.cos(v.a * Math.PI / 180)) / 10,
  '4G2.cosEmb': v => v.AD * v.AC / v.AB,
  '4G2.cosEchelle': v => Math.round(10 * v.L * Math.sin(v.a * Math.PI / 180)) / 10,
  '4G2.cosDiag': v => Math.round(Math.atan2(v.BC, v.AB) * 180 / Math.PI),
  '4G2.ij': v => v.bc / 2,
  '4G2.par': () => 'Elles sont parallèles',
  '4G2.aj': v => v.ac / 2,
  '4G2.perimAIJ': v => (v.ab + v.ac + v.bc) / 2,
  '4G2.rayonPyth': v => Math.hypot(v.a, v.b) / 2,
  '4G2.angle': v => v.ang,
  '4G2.varignon': v => v.d1 + v.d2,
  '4G2.angleO': v => 180 - 2 * v.x,
  '4G2.thMN': v => v.sm * v.bc / v.sb,
  '4G2.recQ': v => (v.sm * v.sc === v.sn * v.sb ? v.oui : v.non),
  '4G2.thInc': v => (v.petit ? v.ps * v.c / v.pb : v.pb * v.c / v.ps),
  '4G2.recDec': v => {
    const a = v.sm / v.sb, b = v.sn / v.sc, f = x => String(Math.round(x * 1e4) / 1e4).replace('.', '{,}');
    return Math.abs(a - b) < 1e-9 ? `Oui : les deux quotients valent $${f(a)}$` : `Non : les quotients valent $${f(a)}$ et $${f(b)}$`;
  },
  '4G2.thCote': v => v.sn * (v.sm + v.mb) / v.sm,
  '4G2.thReste': v => v.sc - v.sm * v.sc / v.sb,
  '4G2.thBase': v => v.sm * v.bc / (v.sm + v.mb),
  '4G2.recCible': v => v.sm * v.sc / v.sb,
  '4G2.recReste': v => v.sc - v.sm * v.sc / (v.sm + v.mb),
  '4G2.thPyth': v => v.sm * Math.hypot(v.sb, v.bc) / v.sb,
  '4G2.thTrap': v => (v.sb - v.sm) + v.bc + (v.sc - v.sm * v.sc / v.sb) + v.sm * v.bc / v.sb,
  '4G2.recMN': v => {
    const sb = v.sb === undefined ? v.sm + v.mb : v.sb, sc = v.sc === undefined ? v.sn + v.nc : v.sc;
    return Math.abs(v.sm * sc - v.sn * sb) < 1e-9 ? v.sm * v.bc / sb : NaN;
  },
  // 4G3
  '4G3.nom': v => v.s,
  '4G3.image': v => `(${v.C[0] - v.A[0] + v.B[0]};${v.C[1] - v.A[1] + v.B[1]})`,
  '4G3.para': v => (v.ask === 'CD' ? v.ab : v.ac),
  '4G3.angle': v => 180 - v.a - v.b,
  '4G3.compo': v => `(${v.M[0] + v.u[0] + v.v[0]};${v.M[1] + v.u[1] + v.v[1]})`,
  '4G3.aire': v => v.b * v.h / 2,
  '4G3.motifImage': v => {
    const ref = JSON.stringify(v.ref);
    const ok = v.figs.map((f, i) => (JSON.stringify(f) === ref ? `Figure ${i + 1}` : null)).filter(Boolean);
    if (ok.length !== 1) throw new Error(`${ok.length} figures identiques au motif`);
    return ok[0];
  },
  '4G3.friseDecal': v => (v.rang - 1) * v.p,
  '4G3.pointNomme': v => {
    const x = v.C[0] + v.B[0] - v.A[0], y = v.C[1] + v.B[1] - v.A[1];
    const ok = v.pts.filter(p => p.x === x && p.y === y);
    if (ok.length !== 1) throw new Error(`${ok.length} points à l'emplacement de l'image`);
    return `$${ok[0].n}$`;
  },
  '4G3.friseIntrus': v => {
    const ref = JSON.stringify(v.figs[0]);
    const ok = v.figs.map((f, i) => (JSON.stringify(f) !== ref ? i + 1 : 0)).filter(Boolean);
    if (ok.length !== 1) throw new Error(`${ok.length} motifs différents du premier`);
    return `Le motif ${ok[0]}`;
  },
  '4G3.pavageImage': v => {
    const coin = [[0, 0], [1, 0], [1, 1], [0, 1]];
    const f = coin[v.names.indexOf(v.from)], g = coin[v.names.indexOf(v.to)];
    const col = (v.n - 1) % v.cols + (g[0] - f[0]) * v.times;
    const row = Math.floor((v.n - 1) / v.cols) + (g[1] - f[1]) * v.times;
    if (col < 0 || col >= v.cols || row < 0 || row >= v.rows) throw new Error('image hors du pavage');
    return row * v.cols + col + 1;
  },
  '4G3.sommet': v => {
    const coin = [[0, 0], [1, 0], [1, 1], [0, 1]];
    const pos = l => coin[v.sommets.indexOf(l)];
    const x = pos(v.src)[0] + pos(v.to)[0] - pos(v.from)[0], y = pos(v.src)[1] + pos(v.to)[1] - pos(v.from)[1];
    const i = coin.findIndex(p => p[0] === x && p[1] === y);
    return i < 0 ? 'Aucun sommet' : `$${v.sommets[i]}$`;
  },
  '4G3.friseLong': v => (v.n - 1) * v.p + v.l,
  '4G3.deuxTrans': (v, q) => {
    const { P, R, U, S, E } = v.noms;
    const pos = { [P]: [0, 0], [R]: [1, 0], [U]: [1, 1], [S]: [0, 1] };
    const cible = pos[v.which === 'R' ? R : S];
    pos[E] = [1 + cible[0], 1 + cible[1]];
    if (v.ask === 'longueur') return 2 * (v.which === 'R' ? v.a : v.b);
    const ok = q.options.filter(o => {
      const m = o.match(/^\$(\w)\$ est le milieu de \$\[(\w)(\w)\]\$$/);
      if (!m) throw new Error(`option illisible : ${o}`);
      const [a, b, c] = [pos[m[1]], pos[m[2]], pos[m[3]]];
      return 2 * a[0] === b[0] + c[0] && 2 * a[1] === b[1] + c[1];
    });
    if (ok.length !== 1) throw new Error(`${ok.length} affirmations vraies`);
    return ok[0];
  },
  '4G3.friseNb': v => Math.floor((v.L - v.l) / v.p) + 1,
  '4G3.pavageNb': v => {
    if (v.L % v.a !== 0 || v.H % v.b !== 0) throw new Error('division non entière');
    return (v.L / v.a) * (v.H / v.b);
  },
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
  '4G4.repLire': v => {
    const p = { B: [v.L, 0, 0], C: [v.L, v.l, 0], D: [0, v.l, 0], E: [0, 0, v.h], F: [v.L, 0, v.h], G: [v.L, v.l, v.h], H: [0, v.l, v.h] }[v.n];
    const i = { abscisse: 0, 'ordonnée': 1, altitude: 2 }[v.ask];
    return i === undefined ? `(${p[0]};${p[1]};${p[2]})` : p[i];
  },
  '4G4.perspQ': v => v.good,
  '4G4.agrNat': v => (v.n > v.d ? 'Un agrandissement' : 'Une réduction'),
  '4G4.agrLong': v => v.L * v.n / v.d,
  '4G4.repMilieu': v => {
    const P = { A: [0, 0, 0], B: [v.L, 0, 0], C: [v.L, v.l, 0], D: [0, v.l, 0], E: [0, 0, v.h], F: [v.L, 0, v.h], G: [v.L, v.l, v.h], H: [0, v.l, v.h] };
    const m = [0, 1, 2].map(i => (P[v.a][i] + P[v.b][i]) / 2);
    return `(${m[0]};${m[1]};${m[2]})`;
  },
  '4G4.agrRapport': v => v.b / v.a,
  '4G4.agrAire': v => v.A * v.n * v.n / (v.d * v.d),
  '4G4.patAngle': v => 360 * v.r / v.g,
  '4G4.fuyante': v => (v.vert ? v.h : Math.round(v.l * v.c * 10) / 10),
  '4G4.patGAngle': v => Math.round(360 * v.r / Math.sqrt(v.r * v.r + v.h * v.h)),
  '4G4.patPyrAire': v => (v.late ? 2 * v.c * v.f : v.c * v.c + 2 * v.c * v.f),
  '4G4.agrVol': v => v.V * Math.pow(v.n, 3) / Math.pow(v.d, 3),
  '4G4.repVol': v => v.L * v.l * v.h / 3,
  '4G4.agrK': v => Math.cbrt(v.V2 / v.V1),
  '4G4.tronc': v => v.V - v.V * Math.pow(v.n, 3) / Math.pow(v.d, 3),
  '4G4.patInverse': v => v.r * v.r * v.h / 3,
  '4G4.repDiag': v => Math.sqrt(v.L * v.L + v.l * v.l + v.h * v.h),
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
  '4N2.quotEntiers': v => { const p = Math.max(v.p1, v.p2), N = v.i1 * 10 ** (p - v.p1), D = v.i2 * 10 ** (p - v.p2); return `$${N < 0 ? '-' : ''}\\frac{${Math.abs(N)}}{${D}}$`; },
  '4N2.comparer': v => { const tx = (n, d) => `${n < 0 ? '-' : ''}\\frac{${Math.abs(n)}}{${d}}`, a = v.n1 * v.d2, b = v.n2 * v.d1; return `$${tx(v.n1, v.d1)} ${a < b ? '<' : a > b ? '>' : '='} ${tx(v.n2, v.d2)}$`; },
  '4N2.decimal': v => { let d = v.d / g(v.n, v.d); while (d % 2 === 0) d /= 2; while (d % 5 === 0) d /= 5; return d === 1 ? 'Oui' : 'Non'; },
  '4N2.ranger': v => `$${[...v.f].sort((x, y) => x[0] * y[1] - y[0] * x[1]).map(([n, d]) => `${n < 0 ? '-' : ''}\\frac{${Math.abs(n)}}{${d}}`).join(' < ')}$`,
  '4N2.encadrer': v => Math.floor(v.n / v.d),
  '4N2.intercaler': (v, q) => {
    const val = o => { const m = /^\$(-?)\\frac\{(\d+)\}\{(\d+)\}\$$/.exec(o); if (!m) throw new Error('option illisible : ' + o); return (m[1] ? -1 : 1) * m[2] / m[3]; };
    const a = v.lo[0] / v.lo[1], b = v.hi[0] / v.hi[1];
    const ok = q.options.filter(o => val(o) > a + 1e-9 && val(o) < b - 1e-9);
    if (ok.length !== 1) throw new Error(`${ok.length} option(s) entre les bornes`);
    return ok[0];
  },
  '4N2.dixieme': v => Math.floor(10 * v.n / v.d) / 10,
  '4N2.premier': v => { const isP = n => { if (n < 2) return false; for (let d = 2; d * d <= n; d++) if (n % d === 0) return false; return true; }; const l = v.opts.filter(isP); return l.length === 1 ? `$${l[0]}$` : 'PLUSIEURS'; },
  '4N2.decomp': v => { const c = {}; let n = v.N; for (let d = 2; d <= n; d++) while (n % d === 0) { c[d] = (c[d] || 0) + 1; n /= d; } return '$' + Object.keys(c).map(Number).sort((a, b) => a - b).map(p => (c[p] === 1 ? String(p) : `${p}^${c[p]}`)).join(' \\times ') + '$'; },
  '4N2.ppfacteur': v => { for (let d = 2; d <= v.N; d++) if (v.N % d === 0) return d; return v.N; },
  '4N2.simplDecomp': v => fr(v.N, v.D),
  '4N2.diviseur': v => { const l = v.opts.filter(x => v.N % x === 0); return l.length === 1 ? `$${l[0]}$` : 'PLUSIEURS'; },
  '4N2.partage': v => g(v.a, v.b),
  '4N2.carre': v => { for (let k = 1; ; k++) { const r = Math.round(Math.sqrt(v.N * k)); if (r * r === v.N * k) return k; } },
  '4N2.partage3': v => (v.a + v.b + v.c) / g(g(v.a, v.b), v.c),
  // 4N3
  '4N3.prodA': v => v.e.reduce((s, x) => s + x, 0),
  '4N3.pp': v => v.n * v.m,
  '4N3.combi': v => (v.n + v.m) * v.p + v.q,
  '4N3.decal': v => Number((v.d * Math.pow(10, v.e)).toPrecision(12)),
  '4N3.sci': v => { const x = v.a * v.b * Math.pow(10, v.n + v.m); return Math.floor(Math.log10(x) + 1e-9); },
  '4N3.expo': v => Math.round(Math.log(v.val) / Math.log(v.b)),
  '4N3.eqProd': v => v.s - v.p,
  '4N3.eqPP': v => v.s / v.m,
  '4N3.estSci': (v, q) => { const c = q.options.filter(o => { const a = parseFloat(o.replace(/\$/g, '').replace('{,}', '.')); return a >= 1 && a < 10; }); if (c.length !== 1) throw new Error('options'); return c[0]; },
  '4N3.mantisse': v => +(v.x / Math.pow(10, Math.floor(Math.log10(v.x) + 1e-12))).toPrecision(12),
  '4N3.prefixe': v => ({ giga: 9, 'méga': 6, kilo: 3, milli: -3, micro: -6, nano: -9 })[v.p],
  // 4N4
  '4N4.estCarre': (v, q) => { const carres = q.options.filter(o => Number.isInteger(Math.sqrt(Number(o)))); return carres.length === 1 ? carres[0] : `${carres.length} carrés parfaits parmi les options`; },
  '4N4.racine': v => Math.sqrt(v.N),
  '4N4.encadrer': v => { let n = 0; while ((n + 1) * (n + 1) < v.N) n++; return n; },
  '4N4.carre': v => (v.what === 'côté' ? Math.sqrt(v.A) : 4 * Math.sqrt(v.A)),
  '4N4.compte': v => { let c = 0; for (let k = 0; k <= v.b; k++) if (k * k >= v.a && k * k <= v.b) c++; return c; },
  '4N4.dixieme': v => { let a = 0; while (((a + 1) / 10) ** 2 < v.N) a++; return a / 10; },
  '4N4.sommeAires': v => Math.sqrt(v.a + v.b),
  '4N4.eqCarre': v => Math.sqrt((v.d - v.c) / v.a),
  '4N4.coteExact': v => `$\\sqrt{${v.N}}$ cm`,
  '4N4.carrePrec': v => { let r = 0; while ((r + 1) * (r + 1) <= v.N) r++; return r * r; },
  '4N4.arrondi': v => Math.round(Math.sqrt(v.N) * 10) / 10,
  '4N4.comparer': v => (v.N > v.n * v.n ? `$\\sqrt{${v.N}} > ${v.n}$` : `$\\sqrt{${v.N}} < ${v.n}$`),
  '4N4.perimArrondi': v => Math.round(4 * Math.sqrt(v.N) * 10) / 10,
  '4N4.eqSimple': v => Math.sqrt(v.sq),
  '4N4.prodRac': v => Math.sqrt(v.a * v.b),
  '4N4.quotRac': v => Math.sqrt(v.a / v.b),
  // 4N5
  '4N5.reduire': v => PSTR([v.a + v.c, v.b + v.d]),
  '4N5.subst': v => v.a * v.x + v.b,
  '4N5.pense': v => (v.res - v.b) / v.m,
  '4N5.reduire2': v => PSTR([v.a + v.c, v.b + v.d, 0]),
  '4N5.perim': v => (v.Pm / 2 - v.e) / 2,
  '4N5.ages': v => (v.S - v.e) / 2,
  '4N5.tarifs': v => v.F / (v.pB - v.pA),
  '4N5.consec': v => (v.S - v.k2 * (v.k2 - 1) / 2) / v.k2,
  '4N5.struct': (v, q) => {
    const m = q.options.filter(o => DERN_OP(o) === v.cible);
    return m.length === 1 ? m[0] : 'INCOHERENT';
  },
  '4N5.structJust': v => (DERN_OP(v.E) === 'produit'
    ? '$E$ est un produit, car la dernière opération à effectuer est une multiplication.'
    : '$E$ est une somme, car la dernière opération à effectuer est une addition.'),
  '4N5.testEg': v => (v.d - v.b) / (v.a - v.c),
  '4N5.identite': v => {
    if (v.cas === 'id') {
      return [-3, 0, 1, 2, 7].every(x => v.f * (x + v.a) + v.b * x === v.q * x + v.r)
        ? 'C\'est une identité : en développant et en réduisant le membre de gauche, on obtient le membre de droite.' : 'INCOHERENT';
    }
    const L = x => v.a * x + v.b, R = x => v.c * x + v.d;
    if (L(v.s) !== R(v.s) || L(v.u) === R(v.u)) return 'INCOHERENT';
    return `Ce n'est pas une identité : pour $x = ${v.u}$, le membre de gauche vaut $${L(v.u)}$ et le membre de droite vaut $${R(v.u)}$.`;
  },
  '4N5.progRed': v => PSTR([v.f - v.m, v.s * v.f * v.a]),
  '4N5.progEq': v => (v.f - v.m === v.q ? v.f * v.a : 'INCOHERENT'),
  '4N5.identiteMoins': v => {
    const L = x => v.f * (x + v.a) - (v.b * x + v.c), R = x => v.q * x + v.r;
    return [-2, 0, 1, 3].every(x => L(x) === R(x))
      ? 'Oui : en développant et en réduisant le membre de gauche, on obtient exactement le membre de droite.'
      : `Non : pour $x = 0$, le membre de gauche vaut $${L(0)}$ et le membre de droite vaut $${R(0)}$.`;
  },
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
  '4P1.tableau': v => {
    const prop = v.x.every((x, i) => v.y[i] * v.x[0] === v.y[0] * x);
    if (prop) return 'Oui : on multiplie toujours par le même nombre pour passer de la première ligne à la deuxième.';
    return v.x.every((x, i) => v.y[i] - x === v.y[0] - v.x[0])
      ? 'Non : on ajoute toujours le même nombre, et les quotients ne sont pas égaux.'
      : 'Non : les quotients ne sont pas tous égaux, et on n\'ajoute pas non plus toujours le même nombre.';
  },
  '4P1.graphe': v => {
    const [a, b] = [v.pts[0], v.pts[v.pts.length - 1]];
    const cross = ([x, y]) => (b[0] - a[0]) * (y - a[1]) - (b[1] - a[1]) * (x - a[0]);
    if (!v.pts.every(p => Math.abs(cross(p)) < 1e-6)) return 'Non : les points ne sont pas alignés.';
    return Math.abs(cross([0, 0])) < 1e-6 ? 'Oui : les points sont alignés avec l\'origine du repère.' : 'Non : les points sont alignés, mais la droite ne passe pas par l\'origine.';
  },
  '4P1.grapheCoef': v => v.pts[1][1] / v.pts[1][0] * v.x0,
  '4P1.quatrieme': v => v.b * v.c / v.a,
  '4P1.energie': v => v.P * v.h / 1000,
  '4P1.produit': v => Math.round(v.a * v.b * 1e6) / 1e6,
  '4P1.quotient': v => Math.round(v.a / v.b * 1e6) / 1e6,
  '4P1.debitConv': v => Math.round((v.dir ? v.q * 1000 / 60 : v.q * 60 / 1000) * 1e6) / 1e6,
  '4P1.ohm': v => Math.round(v.U * v.I2 / v.I * 1e6) / 1e6,
  '4P1.arc': v => Math.round(v.l * v.b / v.a * 1e6) / 1e6,
  '4P1.m3s': v => Math.round(v.q * 60000),
  '4P1.energieCout': v => Math.round(v.P * v.h * v.n * v.c / 1000 * 1e6) / 1e6,
  '4P1.traficTot': v => v.n1 * v.d1 + v.n2 * v.d2,
  '4P1.arcPer': v => v.P * v.a / 360,
  // 4P2
  '4P2.lire': v => v.pts.find(p => p[0] === v.x)[1],
  '4P2.formule': v => PSTR([v.a, v.a * v.b]),
  '4P2.ante': v => v.pts.find(p => p[1] === v.y)[0],
  '4P2.inverse': v => (v.r + v.c) / v.a - v.b,
  '4P2.taxi': v => (v.ask === 'prix' ? Math.round((v.f + v.k2 * v.d) * 100) / 100 : v.d),
  '4P2.deux': v => (v.d - v.b) / (v.a - v.c),
  '4P2.interp': v => v.pts.slice(1).reduce((m, p, i) => {
    const q = v.pts[i];
    const compte = v.kind === 'arret' ? p[1] === q[1] : (p[1] >= v.s && q[1] >= v.s);
    return m + (compte ? p[0] - q[0] : 0);
  }, 0),
  '4P2.equivK': v => v.l * v.m * v.p - v.l * v.n,
  '4P2.equivQ': v => `« Multiplier par $${v.q}$ ; ${v.sub ? 'soustraire' : 'ajouter'} $${v.p * v.q}$. »`,
  '4P2.tarif': v => v.f / (v.pb - v.pa) + 1,
  '4P2.perim': v => (v.P - 2 * v.a) / 4,
  '4P2.point': v => {
    const ok = v.pts.filter(p => p.y === v.a * p.x + v.b);
    if (ok.length !== 1) throw new Error(`${ok.length} point(s) sur le graphique au lieu d'un`);
    return ok[0].n;
  },
  '4P2.malPlace': v => {
    const ko = v.pts.filter(p => p.y !== v.a * p.x + v.b);
    if (ko.length !== 1) throw new Error(`${ko.length} point(s) mal placé(s) au lieu d'un`);
    return ko[0].n;
  },
  '4P2.plImage': v => v.x * v.x + v.r - v.x0 * v.x0,
  '4P2.plAnte': v => { const a = (v.y1 - v.b) / v.x1; return (v.r - v.b) / a; },
  '4P2.plDeux': v => -Math.sqrt(v.r - (v.r0 - v.x0 * v.x0)),
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
// Sans « deg » : expression développée et réduite complète (somme des produits)
const fullPoly = (polys) => [4, 3, 2, 1, 0].map((d) => coefDeg(polys, d)).reduce((acc, c) => (acc.length || c ? acc.concat(c) : acc), []);
V['3N2.poly'] = v => (v.deg === undefined ? PSTR(fullPoly(v.P)) : `${coefDeg(v.P, v.deg)}`);
V['3N2.lin'] = v => PSTR([v.a + v.c, v.b + v.d]);
V['3N2.mono'] = v => PSTR([v.a * v.b, 0, 0]);
V['3N2.fill'] = v => PSTR(v.form === 2 ? [v.a * v.a, 0, -v.b * v.b] : [v.a * v.a, (v.form === 0 ? 2 : -2) * v.a * v.b, v.b * v.b]);
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
V['4N3.sciComplet'] = v => sciOf(v.x);
V['4N3.sciNorm'] = v => V['3N3.sci2'](v);
V['4N3.sciProd'] = v => { const [m, e] = sciOf(+(v.a * v.b).toFixed(9)).split('*10^'); return `${m}*10^${+e + v.n + v.m}`; };
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
  if (v.ask === 'both') {
    const [lo, hi] = val(r[0]) < val(r[1]) ? [r[0], r[1]] : [r[1], r[0]];
    return `(${F(lo[0], lo[1])};${F(hi[0], hi[1])})`;
  }
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
V['3Org2.hist'] = v => {
  const sum = a => a.reduce((x, y) => x + y, 0);
  if (v.ask === 'amp') return `${v.b[1] - v.b[0]}`;
  if (v.ask === 'eff') return `${v.effs[v.i]}`;
  if (v.ask === 'N') return `${sum(v.effs)}`;
  if (v.ask === 'pct') return `${r10(v.effs[v.i] * 100 / sum(v.effs))}`;
  if (v.ask === 'low') return `${sum(v.effs.filter((e, i) => v.b[i + 1] <= v.B))}`;
  if (v.ask === 'high') return `${sum(v.effs.filter((e, i) => v.b[i] >= v.B))}`;
  if (v.ask === 'pctHigh') return `${r10(sum(v.effs.filter((e, i) => v.b[i] >= v.B)) * 100 / sum(v.effs))}`;
  if (v.ask === 'miss') return `${v.N - sum(v.effs.filter((e, i) => i !== v.i))}`;
  if (v.ask === 'count') return `${v.L.filter(x => x >= v.lo && x < v.hi).length}`;
  if (v.ask === 'height') return `${r10(v.e / v.q)}`;
  return `${r10(v.e2 * v.h1 / v.e1)}`; // 'prop'
};

// ---------- Org3 ----------
V['3Org3.read'] = v => `${v.ask === 'a' ? v.a : v.b}`;
V['3Org3.lin'] = v => `${r10(v.q / v.p)}`;
V['3Org3.point'] = v => (v.a * v.x + v.b === v.y ? 'oui' : 'non');
V['3Org3.pct'] = v => `${r10(v.up ? 1 + v.p / 100 : 1 - v.p / 100)}`;
V['3Org3.taux'] = v => (v.ask === 'coef' ? `${r10(v.Vf / v.Vi)}` : `${r10((v.Vf - v.Vi) * 100 / v.Vi)}`);
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
V['3Org4.table'] = v => { let c = 0; for (const a of v.A) for (const b of v.B) { const x = v.op === 'somme' ? a + b : a * b; if (v.ev === 'eq' ? x === v.s : v.ev === 'ge' ? x >= v.s : x % 2 === 0) c++; } return F(c, v.A.length * v.B.length); };
V['3Org4.dice'] = v => { let c = 0; for (let i = 1; i <= 6; i++) for (let j = 1; j <= 6; j++) if (v.ev === 'eq' ? i + j === v.s : i === j) c++; return F(c, 36); };
V['3Org4.indep'] = v => F(v.fav, 12);
// Simulations : fréquence observée = effectif / nombre d'essais ; probabilité par dénombrement des faces
V['3Org4.simul2'] = v => `${+(v.m / v.N).toFixed(4)}`;
V['3Org4.simul3f'] = v => `${+(v.c / v.N).toFixed(4)}`;
V['3Org4.simul3p'] = v => { let c = 0; for (let x = 1; x <= v.faces; x++) if (v.cond === 'gt' ? x > v.seuil : v.cond === 'lt' ? x < v.seuil : x === v.seuil) c++; return F(c, v.faces); };
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
  'G1.recipCalcInv': v => v.MN * (v.AM + v.MB) / v.AM,
  'G1.perimInv': v => v.P * v.AB / v.AM,
  'G1.aireK': v => v.S * (v.AM / v.AB) ** 2,
  // ---------------- G2 Trigonométrie
  'G2.idCote': v => `[${{ opp: v.R + v.T, adj: v.R + v.A, hyp: v.A + v.T }[v.role]}]`,
  'G2.rapportVal': v => { const [n, d] = ({ cos: [v.adj, v.hyp], sin: [v.opp, v.hyp], tan: [v.opp, v.adj] })[v.fn]; const g = (a, b) => (b ? g(b, a % b) : a); const k = g(n, d); return `${n / k}/${d / k}`; },
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
  // ---------------- G2 bis Synthèse : choisir l'outil
  'G2bis.outil': v => {
    const OUT = { P: 'Le théorème de Pythagore', RP: 'La réciproque du théorème de Pythagore', T: 'Le théorème de Thalès', RT: 'La réciproque du théorème de Thalès', TR: 'La trigonométrie (cosinus, sinus ou tangente)' };
    if (v.want === 'rect') return OUT.RP;
    if (v.want === 'para') return OUT.RT;
    if (v.par) return OUT.T;
    if (v.rt && (v.want === 'angle' || v.data === 'coteAngle')) return OUT.TR;
    if (v.rt && v.data === 'cotes2' && v.want === 'longueur') return OUT.P;
    throw new Error('situation inconnue');
  },
  'G2bis.ratio': v => {
    const sides = v.want === 'angle' ? v.known : v.known.length === 1 ? [v.known[0], v.want] : null;
    if (!sides) return 'Le théorème de Pythagore';
    const has = x => sides.includes(x);
    const nom = has('adj') && has('hyp') ? 'Le cosinus' : has('opp') && has('hyp') ? 'Le sinus' : 'La tangente';
    return `${nom} de l'angle \\widehat{${v.R}${v.A}${v.T}}`;
  },
  'G2bis.ordre': v => ({ pyTh: 'Pythagore, puis Thalès', thPy: 'Thalès, puis Pythagore', trPy: 'Trigonométrie, puis Pythagore', rpTr: 'Réciproque de Pythagore, puis trigonométrie', rtTh: 'Réciproque de Thalès, puis Thalès' })[v.s],
  'G2bis.prop': v => r(v.a * v.c / v.b, 2),
  'G2bis.recipT': v => (v.AM * v.AC === v.AN * v.AB ? 'Oui, (MN) et (BC) sont parallèles' : 'Non, (MN) et (BC) ne sont pas parallèles'),
  'G2bis.pyTh': v => r(H(v.AB, v.AC) * v.AM / v.AB, 1),
  'G2bis.thPy': v => r(L(v.MN * v.AB / v.AM, v.AB), 1),
  'G2bis.trPy': v => r(H(v.d * Math.tan(rad(v.a)), v.c), 1),
  'G2bis.rpTr': v => Math.round(deg(Math.acos(v.adj / v.hyp))),
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
  'G5.vueNat': v => ({
    cyl: { face: 'Un rectangle', dessus: 'Un disque' }, cone: { face: 'Un triangle isocèle', dessus: 'Un disque' },
    pyr: { face: 'Un triangle isocèle', dessus: 'Un carré et ses deux diagonales' }, cube: { face: 'Un carré', dessus: 'Un carré' },
    pave: { face: 'Un rectangle', dessus: 'Un rectangle' }, prisme: { face: 'Un rectangle', dessus: 'Un triangle' }, boule: { face: 'Un disque' }
  })[v.s][v.vu],
  'G5.vueAire': v => (v.kind === 'comp' ? 2 * v.r * v.H + v.r * v.h : v.kind === 'cyl' ? 2 * v.r * v.h : v.kind === 'cone' ? v.r * v.h : v.c * v.h / 2),
  'G5.patronConeArc': v => r(2 * Math.PI * v.r, 1),
  'G5.patronConeAng': v => Math.round(360 * v.r / (v.g || H(v.r, v.h))),
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
  'G6.friseId': v => (v.kind === 'T' || Math.abs(v.a - v.b) % 2 === 0 ? 'Une translation' : v.kind === 'S' ? 'Une symétrie axiale' : 'Une rotation de $180^\\circ$ (demi-tour)'),
  'G6.friseImg': v => (v.kind === 'T' ? v.a + v.s : v.p + v.q - v.a),
  'G6.rosFig': v => { if (!v.hard) return 360 / v.n; let j = v.a; for (let i = 0; i < v.cr; i++) { j += v.anti ? 1 : -1; if (j > v.n) j = 1; if (j < 1) j = v.n; } return j; },
  'G6.pavImg': v => { const quadrant = ((v.q + v.d) % 4); return 4 * v.b + quadrant + 1; },
  'G6.pavId': v => {
    if (v.bA !== v.bB) return 'Une translation';
    const d = (v.qB - v.qA + 4) % 4;
    return d === 2 ? 'La symétrie de centre $O$' : `La rotation de centre $O$ et d'angle $90^\\circ$ dans le sens ${d === 1 ? 'anti-horaire' : 'horaire'}`;
  },
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
