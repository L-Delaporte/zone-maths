/**
 * Épreuve anticipée de mathématiques de première : questions d'automatismes et exercices de la partie 2.
 *
 * Chargé à la demande avec le niveau 1ere (index.html, level-bundles), utilisé par js/flashQuizGenerator.js.
 * - automatismes() : 12 questions à réponse courte, sans QCM, sur la liste commune aux trois programmes
 *   (évolutions, calcul, fonctions, statistiques, probabilités).
 * - part2('sans-spe' | 'techno') : trois exercices indépendants, sur 14 points, propres à chaque parcours.
 *   La spécialité puise dans la banque de DS de première (MathsQuizGenerator.buildEaPart2).
 *
 * Tout se calcule sans calculatrice : les paramètres sont choisis pour des résultats exacts et simples.
 * Hors programme, donc absents : le discriminant (sans spécialité, voie technologique), la dérivation (sans spécialité),
 * les fréquences conditionnelles et marginales (sans spécialité). Le parcours sans spécialité note u(n) et non u_n.
 */
(function () {
  if (typeof window === 'undefined') return;

  // ---- Outils de calcul et d'écriture -------------------------------------------------------
  const R = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = (l) => l[Math.floor(Math.random() * l.length)];
  const shuffle = (l) => {
    const a = l.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const clean = (x) => Math.round(x * 1e8) / 1e8;
  /** Nombre en mode math, virgule française */
  const dec = (x) => String(clean(x)).replace('.', '{,}');
  /** Nombre dans un texte SVG */
  const plain = (x) => String(clean(x)).replace('.', ',').replace('-', '−');
  const pct = (t) => `${dec(t)}\\,\\%`;
  const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
  /** Fraction irréductible (ou entier) en mode math */
  const frac = (n, d) => {
    if (d < 0) { n = -n; d = -d; }
    const g = gcd(n, d) || 1;
    n /= g; d /= g;
    if (d === 1) return String(n);
    return `${n < 0 ? '-' : ''}\\dfrac{${Math.abs(n)}}{${d}}`;
  };
  /** Polynôme à partir de ses coefficients, du plus haut degré au terme constant */
  const poly = (coefs) => {
    const n = coefs.length - 1;
    let out = '';
    coefs.forEach((c, i) => {
      if (!c) return;
      const deg = n - i;
      const v = deg === 0 ? '' : deg === 1 ? 'x' : `x^${deg}`;
      const abs = Math.abs(c);
      const body = abs === 1 && v ? v : `${dec(abs)}${v}`;
      out += out ? ` ${c < 0 ? '-' : '+'} ${body}` : `${c < 0 ? '-' : ''}${body}`;
    });
    return out || '0';
  };
  /** Facteur x - r, entre parenthèses sauf pour x seul */
  const fac = (r) => (r === 0 ? 'x' : `(x ${r > 0 ? '-' : '+'} ${Math.abs(r)})`);
  const setOf = (vals) => `\\left\\{ ${vals.join(' ; ')} \\right\\}`;
  const OPS = { '<': '<', '<=': '\\leqslant', '>': '>', '>=': '\\geqslant' };
  const signWord = (t) => (t > 0 ? 'hausse' : 'baisse');

  // ---- Figures ------------------------------------------------------------------------------
  const INK = 'var(--text-main, #334155)';
  const GRID = 'var(--border-color, #cbd5e1)';
  const ACCENT = '#2563eb';
  const SOFT = 'rgba(37, 99, 235, 0.22)';

  const figure = (w, h, inner, label, maxW = 340) =>
    `<div class="geo-figure-wrapper" style="text-align:center; margin:0.6rem auto;">` +
    `<svg class="geo-svg-figure" role="img" aria-label="${label}" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" style="max-width:${maxW}px; width:100%; height:auto;" xmlns="http://www.w3.org/2000/svg">` +
    inner + `</svg></div>\n`;
  const T = (x, y, s, o = {}) =>
    `<text x="${x}" y="${y}" text-anchor="${o.anchor || 'middle'}" font-size="${o.size || 12}"${o.weight ? ` font-weight="${o.weight}"` : ''} fill="${o.fill || INK}">${s}</text>`;
  const L = (x1, y1, x2, y2, stroke = INK, w = 1) =>
    `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="${w}"/>`;
  const tip = (x, y, angle) =>
    `<polygon points="0,0 -8,-3.5 -8,3.5" transform="translate(${x} ${y}) rotate(${angle})" fill="${INK}"/>`;
  const dot = (x, y, fill = ACCENT, r = 3.2) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}"/>`;

  /** Repère quadrillé ; `draw(X, Y)` renvoie le contenu placé au-dessus */
  function plane(opt, draw) {
    const { xmin = -6, xmax = 6, ymin = -5, ymax = 5, u = 23, label = 'Repère' } = opt;
    const m = 18;
    const W = (xmax - xmin) * u + 2 * m;
    const H = (ymax - ymin) * u + 2 * m;
    const X = (x) => m + (x - xmin) * u;
    const Y = (y) => m + (ymax - y) * u;
    let s = '';
    for (let x = xmin; x <= xmax; x++) s += L(X(x), Y(ymin), X(x), Y(ymax), GRID);
    for (let y = ymin; y <= ymax; y++) s += L(X(xmin), Y(y), X(xmax), Y(y), GRID);
    s += L(X(xmin), Y(0), X(xmax) + 10, Y(0), INK, 1.5) + tip(X(xmax) + 12, Y(0), 0);
    s += L(X(0), Y(ymin), X(0), Y(ymax) - 10, INK, 1.5) + tip(X(0), Y(ymax) - 12, -90);
    for (let x = xmin; x <= xmax; x++) if (x) s += T(X(x), Y(0) + 13, plain(x), { size: 10 });
    for (let y = ymin; y <= ymax; y++) if (y) s += T(X(0) - 5, Y(y) + 3.5, plain(y), { size: 10, anchor: 'end' });
    s += T(X(0) - 6, Y(0) + 13, '0', { size: 10, anchor: 'end' });
    if (draw) s += draw(X, Y);
    return figure(W, H, s, label, 330);
  }

  /** Chemin d'une courbe qui passe par les nœuds et reste monotone entre deux nœuds consécutifs */
  function curvePath(nodes, X, Y) {
    const n = nodes.length;
    const dx = [], sl = [], m = [];
    for (let i = 0; i < n - 1; i++) {
      dx[i] = nodes[i + 1].x - nodes[i].x;
      sl[i] = (nodes[i + 1].y - nodes[i].y) / dx[i];
    }
    m[0] = sl[0];
    m[n - 1] = sl[n - 2];
    for (let i = 1; i < n - 1; i++) m[i] = sl[i - 1] * sl[i] <= 0 ? 0 : (2 * sl[i - 1] * sl[i]) / (sl[i - 1] + sl[i]);
    let d = `M ${X(nodes[0].x)} ${Y(nodes[0].y)}`;
    for (let i = 0; i < n - 1; i++) {
      const h = dx[i] / 3;
      d += ` C ${X(nodes[i].x + h)} ${Y(nodes[i].y + m[i] * h)} ${X(nodes[i + 1].x - h)} ${Y(nodes[i + 1].y - m[i + 1] * h)} ${X(nodes[i + 1].x)} ${Y(nodes[i + 1].y)}`;
    }
    return d;
  }

  /** Courbe sur [-6 ; 6] coupant la droite y = k en des abscisses entières, repérables sur le quadrillage */
  function curveFor(k) {
    const inner = pick([[-2, 2], [-3, 1], [-1, 3], [-2, 3], [-3, 2]]);
    const xs = [-6, inner[0], inner[1], 6];
    const up = Math.random() < 0.5;
    const high = () => k + R(1, 4 - Math.max(0, k));
    const low = () => k - R(1, 4 + Math.min(0, k));
    const ys = (up ? [low, high, low, high] : [high, low, high, low]).map((f) => f());
    const nodes = [{ x: xs[0], y: ys[0] }];
    const cuts = [];
    for (let i = 0; i < 3; i++) {
      const c = R(xs[i] + 1, xs[i + 1] - 1);
      nodes.push({ x: c, y: k });
      cuts.push(c);
      nodes.push({ x: xs[i + 1], y: ys[i + 1] });
    }
    return { nodes, cuts, first: ys[0] - k };
  }

  /** Ensemble des x où f(x) op k, pour une courbe de curveFor */
  function levelSet(curve, op) {
    const pts = [-6, ...curve.cuts, 6];
    const below = op === '<' || op === '<=';
    const strict = op === '<' || op === '>';
    const out = [];
    let s = Math.sign(curve.first);
    for (let j = 0; j < pts.length - 1; j++) {
      if (below ? s < 0 : s > 0) {
        const l = j === 0 ? '[' : strict ? ']' : '[';
        const r = j === pts.length - 2 ? ']' : strict ? '[' : ']';
        out.push(`${l}${pts[j]} ; ${pts[j + 1]}${r}`);
      }
      s = -s;
    }
    return out.join(' \\cup ');
  }

  const curveFigure = (curve, label) =>
    plane({ label }, (X, Y) => `<path d="${curvePath(curve.nodes, X, Y)}" fill="none" stroke="${ACCENT}" stroke-width="2.2"/>`);

  /** Droite y = mx + p tracée dans la fenêtre du repère */
  function lineFigure(m, p, label, withLine = true, marks = []) {
    const lim = 5;
    return plane({ xmin: -lim, xmax: lim, ymin: -lim, ymax: lim, label }, (X, Y) => {
      if (!withLine) return '';
      const inside = [];
      [-lim, lim].forEach((x) => { const y = m * x + p; if (y >= -lim && y <= lim) inside.push([x, y]); });
      if (m) [-lim, lim].forEach((y) => { const x = (y - p) / m; if (x > -lim && x < lim) inside.push([x, y]); });
      if (inside.length < 2) return '';
      const [a, b] = inside;
      return L(X(a[0]), Y(a[1]), X(b[0]), Y(b[1]), ACCENT, 2.2) + marks.map(([x, y]) => dot(X(x), Y(y))).join('');
    });
  }

  /**
   * Tableau de variations : `levels` place chaque valeur en haut ('h'), au milieu ('m') ou en bas ('l') ;
   * une valeur null n'est pas écrite (bornes infinies).
   */
  function varTable(xLabels, values, levels, name = 'f') {
    const n = xLabels.length;
    const W = 370, H = 118, left = 62, right = 22;
    const cw = (W - left - right) / (n - 1);
    const X = (i) => left + i * cw;
    const Yl = { h: 50, m: 77, l: 104 };
    let s = `<rect x="1" y="1" width="${W - 2}" height="${H - 2}" fill="none" stroke="${INK}"/>` + L(1, 30, W - 1, 30) + L(38, 1, 38, H - 1);
    s += T(20, 21, 'x', { weight: 700 }) + T(20, 79, `${name}(x)`, { size: 11, weight: 700 });
    xLabels.forEach((v, i) => { s += T(X(i), 21, v); });
    values.forEach((v, i) => { if (v !== null) s += T(X(i), Yl[levels[i]] + 4, plain(v)); });
    for (let i = 0; i < n - 1; i++) {
      const x1 = X(i) + 13, x2 = X(i + 1) - 13;
      const y1 = Yl[levels[i]] + (levels[i] === 'h' ? 5 : levels[i] === 'l' ? -9 : 0);
      const y2 = Yl[levels[i + 1]] + (levels[i + 1] === 'h' ? 5 : levels[i + 1] === 'l' ? -9 : 0);
      const angle = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
      s += L(x1, y1, x2, y2) + tip(x2, y2, angle);
    }
    return figure(W, H, s, 'Tableau de variations', 370);
  }

  /** Diagramme en barres, ou histogramme à classes de même amplitude si `hist` */
  function barsFigure(labels, values, step, hist, yName) {
    const W = 340, H = 196, left = 44, base = 158, top = 18;
    const maxV = Math.ceil(Math.max(...values) / step) * step;
    const Y = (v) => base - ((base - top) * v) / maxV;
    const n = labels.length;
    const cw = (W - left - 14) / n;
    let s = '';
    for (let v = 0; v <= maxV; v += step) s += L(left, Y(v), W - 8, Y(v), GRID) + T(left - 6, Y(v) + 4, plain(v), { size: 11, anchor: 'end' });
    values.forEach((v, i) => {
      const bw = hist ? cw : cw * 0.6;
      const bx = left + i * cw + (cw - bw) / 2;
      s += `<rect x="${bx}" y="${Y(v)}" width="${bw}" height="${base - Y(v)}" fill="${SOFT}" stroke="${ACCENT}" stroke-width="1.5"/>`;
      s += T(left + i * cw + cw / 2, base + 16, labels[i], { size: 11 });
    });
    s += L(left, base, W - 8, base, INK, 1.5) + L(left, top - 8, left, base, INK, 1.5);
    s += T(left - 36, 12, yName, { size: 11, anchor: 'start' });
    return figure(W, H, s, hist ? 'Histogramme' : 'Diagramme en barres', 340);
  }

  function pieFigure(parts, labels) {
    const W = 300, H = 190, cx = 150, cy = 95, r = 74;
    const pt = (a, rr = r) => [cx + rr * Math.cos(a), cy + rr * Math.sin(a)];
    const fills = ['rgba(37, 99, 235, 0.34)', 'rgba(234, 88, 12, 0.3)', 'rgba(22, 163, 74, 0.3)', 'rgba(147, 51, 234, 0.28)'];
    let a = -Math.PI / 2;
    let s = '';
    parts.forEach((p, i) => {
      const b = a + 2 * Math.PI * p;
      const [x1, y1] = pt(a), [x2, y2] = pt(b);
      s += `<path d="M ${cx} ${cy} L ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 ${p > 0.5 ? 1 : 0} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z" fill="${fills[i % fills.length]}" stroke="${INK}"/>`;
      const [tx, ty] = pt((a + b) / 2, r + 12);
      s += T(tx.toFixed(1), (ty + 4).toFixed(1), labels[i], { anchor: Math.cos((a + b) / 2) >= 0 ? 'start' : 'end' });
      a = b;
    });
    return figure(W, H, s, 'Diagramme circulaire', 300);
  }

  function boxFigure(v, a, b, step) {
    const W = 340, H = 92, left = 22, right = 22, ay = 66;
    const X = (x) => left + ((x - a) * (W - left - right)) / (b - a);
    let s = L(left, ay, W - right + 6, ay, INK, 1.5) + tip(W - right + 8, ay, 0);
    for (let x = a; x <= b; x += step) s += L(X(x), ay - 3, X(x), ay + 3) + T(X(x), ay + 17, plain(x), { size: 11 });
    const [min, q1, med, q3, max] = v;
    const top = 16, bot = 48, mid = 32;
    s += L(X(min), mid, X(q1), mid, ACCENT, 1.8) + L(X(q3), mid, X(max), mid, ACCENT, 1.8);
    s += L(X(min), top + 6, X(min), bot - 6, ACCENT, 1.8) + L(X(max), top + 6, X(max), bot - 6, ACCENT, 1.8);
    s += `<rect x="${X(q1)}" y="${top}" width="${X(q3) - X(q1)}" height="${bot - top}" fill="${SOFT}" stroke="${ACCENT}" stroke-width="1.8"/>`;
    s += L(X(med), top, X(med), bot, ACCENT, 2.6);
    return figure(W, H, s, 'Diagramme en boîte', 340);
  }

  const over = (e) => `${e}̄`;
  /** Arbre pondéré à deux niveaux */
  function treeFigure(A, B, pA, pBsA, pBsNA) {
    const W = 330, H = 186;
    const root = [14, 93], n1 = [130, 46], n2 = [130, 140];
    const leaves = [[262, 20], [262, 72], [262, 114], [262, 166]];
    const edge = (p, q, txt, side) => {
      const mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2;
      return L(p[0] + 8, p[1], q[0] - 10, q[1]) + T(mx, my + (side < 0 ? -6 : 15), txt, { size: 12, fill: ACCENT });
    };
    let s = edge(root, n1, plain(pA), -1) + edge(root, n2, plain(clean(1 - pA)), 1);
    s += edge(n1, leaves[0], plain(pBsA), -1) + edge(n1, leaves[1], plain(clean(1 - pBsA)), 1);
    s += edge(n2, leaves[2], plain(pBsNA), -1) + edge(n2, leaves[3], plain(clean(1 - pBsNA)), 1);
    s += T(n1[0], n1[1] + 5, A, { weight: 700 }) + T(n2[0], n2[1] + 5, over(A), { weight: 700 });
    s += T(leaves[0][0] + 6, leaves[0][1] + 5, B, { weight: 700 }) + T(leaves[1][0] + 6, leaves[1][1] + 5, over(B), { weight: 700 });
    s += T(leaves[2][0] + 6, leaves[2][1] + 5, B, { weight: 700 }) + T(leaves[3][0] + 6, leaves[3][1] + 5, over(B), { weight: 700 });
    return figure(W, H, s, 'Arbre pondéré', 330);
  }

  /** Nuage de points ; `extra` trace la droite d'ajustement et le point moyen (corrigé) */
  function scatterFigure(pts, xmax, ymin, ymax, ystep, xName, yName, extra) {
    const W = 340, H = 220, left = 46, base = 186, top = 20, right = 16;
    const X = (x) => left + (x * (W - left - right)) / xmax;
    const Y = (y) => base - ((y - ymin) * (base - top)) / (ymax - ymin);
    let s = '';
    for (let x = 0; x <= xmax; x++) s += L(X(x), Y(ymin), X(x), Y(ymax), GRID) + T(X(x), base + 15, plain(x), { size: 11 });
    for (let y = ymin; y <= ymax; y += ystep) s += L(X(0), Y(y), X(xmax), Y(y), GRID) + T(left - 6, Y(y) + 4, plain(y), { size: 11, anchor: 'end' });
    s += L(X(0), base, X(xmax) + 8, base, INK, 1.5) + tip(X(xmax) + 10, base, 0) + L(X(0), base, X(0), Y(ymax) - 8, INK, 1.5) + tip(X(0), Y(ymax) - 10, -90);
    s += T(W - 4, base - 6, xName, { size: 11, anchor: 'end' }) + T(left + 6, 12, yName, { size: 11, anchor: 'start' });
    if (extra) {
      const [a, b] = extra.line;
      const y = (x) => a * x + b;
      const xEnd = Math.min(xmax, (ymax - b) / a);
      s += L(X(0), Y(y(0)), X(xEnd), Y(y(xEnd)), ACCENT, 1.8);
      s += `<circle cx="${X(extra.G[0])}" cy="${Y(extra.G[1])}" r="4.5" fill="none" stroke="#dc2626" stroke-width="2"/>` + T(X(extra.G[0]) - 8, Y(extra.G[1]) - 10, 'G', { weight: 700, fill: '#dc2626' });
    }
    pts.forEach(([x, yv]) => { s += dot(X(x), Y(yv), INK, 3.4); });
    return figure(W, H, s, 'Nuage de points', 340);
  }

  // ---- Automatismes -------------------------------------------------------------------------
  /** Une question : énoncé court, réponse attendue, justification brève au corrigé */
  const Q = (skill, chapterId, statement, answer, why) => ({
    skill, chapterId, statement, answer, solution: `**Réponse :** ${answer}\n\n${why}`
  });

  const CM = (t) => dec((100 + t) / 100);

  const EVOLUTIONS = [
    function valeurFinale() {
      const up = Math.random() < 0.5;
      const t = pick([10, 20, 25, 30, 40, 50]);
      const v = pick([20, 40, 60, 80, 120, 160, 200, 240, 300, 400, 500]);
      const st = up ? t : -t;
      const f = clean((v * (100 + st)) / 100);
      return Q('Appliquer un taux d\'évolution', '2N5',
        `Un article coûte $${v}$ €. Son prix ${up ? 'augmente' : 'baisse'} de $${pct(t)}$. Quel est son nouveau prix ?`,
        `$${dec(f)}$ €`,
        `Le coefficient multiplicateur est $${CM(st)}$ et $${v} \\times ${CM(st)} = ${dec(f)}$.`);
    },
    function valeurInitiale() {
      const t = pick([25, 20, 50, 100, -20, -25, -50, 10, -10]);
      const v = pick([40, 60, 80, 100, 120, 200, 240, 300, 400]);
      const f = clean((v * (100 + t)) / 100);
      return Q('Retrouver une valeur initiale', '2N5',
        `Après une ${signWord(t)} de $${pct(Math.abs(t))}$, un loyer vaut $${dec(f)}$ €. Quel était ce loyer avant cette ${signWord(t)} ?`,
        `$${v}$ €`,
        `Le loyer initial, multiplié par $${CM(t)}$, donne $${dec(f)}$ : il vaut donc $${dec(f)} \\div ${CM(t)} = ${v}$ €.`);
    },
    function tauxEvolution() {
      let v0, t, v1;
      do {
        v0 = pick([20, 25, 40, 50, 80, 100, 200, 250, 400, 500]);
        t = pick([5, 10, 20, 25, 30, 40, 50, -10, -20, -25, -40, -50, -60]);
        v1 = (v0 * (100 + t)) / 100;
      } while (v1 !== Math.floor(v1));
      return Q('Calculer un taux d\'évolution', '2N5',
        `Le nombre d'abonnés d'un club passe de $${v0}$ à $${v1}$. Quel est le taux d'évolution de ce nombre, en pourcentage ?`,
        `$${t > 0 ? '+' : ''}${pct(t)}$ (${signWord(t)} de $${pct(Math.abs(t))}$)`,
        `$\\dfrac{${v1} - ${v0}}{${v0}} = ${dec(t / 100)}$, soit $${pct(t)}$.`);
    },
    function tauxGlobal() {
      const [a, b] = pick([[20, -10], [10, 10], [50, -20], [25, -20], [20, 20], [-10, -10], [-20, -20], [100, -50], [50, 50], [-50, 20], [-50, 10], [30, -10], [10, -10], [20, -50], [-20, 50], [50, -10], [40, -50], [25, 20]]);
      const c = clean(((100 + a) * (100 + b)) / 10000);
      const g = clean((c - 1) * 100);
      const phrase = (t) => `${t > 0 ? 'augmente' : 'baisse'} de $${pct(Math.abs(t))}$`;
      const res = g === 0 ? 'aucune évolution ($0\\,\\%$)' : `${signWord(g)} de $${pct(Math.abs(g))}$`;
      return Q('Taux équivalent à deux évolutions', '2N5',
        `Une grandeur ${phrase(a)}, puis ${phrase(b)}. Quelle est l'évolution globale, en pourcentage ?`,
        res,
        `Les coefficients multiplicateurs se multiplient : $${CM(a)} \\times ${CM(b)} = ${dec(c)}$. Les taux ne s'additionnent pas.`);
    },
    function tauxReciproque() {
      const [t, r] = pick([[25, -20], [100, -50], [-20, 25], [-50, 100], [-60, 150], [-75, 300], [60, -37.5], [300, -75], [400, -80], [-80, 400], [150, -60], [900, -90]]);
      return Q('Taux d\'évolution réciproque', '2N5',
        `Une grandeur a connu une ${signWord(t)} de $${pct(Math.abs(t))}$. Quelle évolution, en pourcentage, la ramène à sa valeur de départ ?`,
        `une ${signWord(r)} de $${pct(Math.abs(r))}$`,
        `Le coefficient réciproque est $\\dfrac{1}{${CM(t)}} = ${CM(r)}$, ce qui correspond à une ${signWord(r)} de $${pct(Math.abs(r))}$.`);
    },
    function coefficient() {
      const t = pick([3, 7, 12, 15, 35, 45, 60, -4, -7, -15, -30, -65]);
      if (Math.random() < 0.5) {
        return Q('Coefficient multiplicateur', '2N5',
          `Par quel nombre multiplie-t-on une quantité lorsqu'elle connaît une ${signWord(t)} de $${pct(Math.abs(t))}$ ?`,
          `$${CM(t)}$`,
          `$1 ${t > 0 ? '+' : '-'} \\dfrac{${Math.abs(t)}}{100} = ${CM(t)}$.`);
      }
      return Q('Coefficient multiplicateur', '2N5',
        `Multiplier une quantité par $${CM(t)}$ revient à lui appliquer quelle évolution, en pourcentage ?`,
        `une ${signWord(t)} de $${pct(Math.abs(t))}$`,
        `$${CM(t)} ${t > 0 ? '>' : '<'} 1$ et $${CM(t)} - 1 = ${dec(t / 100)}$.`);
    },
    function proportion() {
      const n = pick([20, 25, 40, 50, 200]);
      const t = pick([10, 20, 30, 35, 40, 60, 70, 80]);
      const k = (n * t) / 100;
      if (k !== Math.floor(k)) return tauxSimple();
      return Q('Calculer une proportion', '2N5',
        `Dans un groupe de $${n}$ personnes, $${k}$ pratiquent la natation. Quelle proportion du groupe cela représente-t-il, en pourcentage ?`,
        `$${pct(t)}$`,
        `$\\dfrac{${k}}{${n}} = ${dec(t / 100)}$, soit $${pct(t)}$.`);
    }
  ];
  function tauxSimple() {
    const t = pick([10, 20, 25, 50]);
    const v = pick([40, 80, 120, 200, 400]);
    const k = (v * t) / 100;
    return Q('Calculer une proportion', '2N5', `Calculer $${pct(t)}$ de $${v}$.`, `$${k}$`, `$${v} \\times ${dec(t / 100)} = ${k}$.`);
  }

  const CALCUL = [
    function produitNul() {
      let r1, a, b;
      do {
        r1 = R(-6, 6);
        a = pick([1, 1, 2, 3]);
        b = R(-6, 6);
      } while (b === 0 || b * r1 === -a * r1 * r1 || -b / a === r1);
      const r2n = -b, r2d = a;
      const list = [[r1, r1], [r2n / r2d, null]].sort((x, y) => x[0] - y[0]);
      const vals = list.map((v) => (v[1] !== null ? String(v[1]) : frac(r2n, r2d)));
      return Q('Équation produit nul', '2N4',
        `Résoudre dans $\\mathbb{R}$ l'équation $${fac(r1)}(${poly([a, b])}) = 0$.`,
        `$S = ${setOf(vals)}$`,
        `Un produit est nul si et seulement si l'un de ses facteurs est nul : $${fac(r1).replace(/[()]/g, '')} = 0$ ou $${poly([a, b])} = 0$, soit $x = ${r1}$ ou $x = ${frac(r2n, r2d)}$.`);
    },
    function premierDegre() {
      const x = R(-6, 6);
      const a = pick([2, 3, 4, 5]), c = a - pick([1, 2]);
      const b = R(-8, 8);
      const d = (a - c) * x + b;
      return Q('Équation du premier degré', '2N4',
        `Résoudre dans $\\mathbb{R}$ l'équation $${poly([a, b])} = ${poly([c, d])}$.`,
        `$S = ${setOf([String(x)])}$`,
        `En regroupant les termes en $x$ : $${poly([a - c, b - d])} = 0$, donc $x = ${x}$.`);
    },
    function signeAffine() {
      const a = pick([1, 2, 3, 4, -1, -2, -3, -4]);
      const r = R(-5, 5);
      const b = -a * r;
      const op = pick(['<', '<=', '>', '>=']);
      const gt = op[0] === '>';
      const closed = op.length === 2;
      const right = gt === (a > 0);
      const S = right ? `${closed ? '[' : ']'}${r} ; +\\infty[` : `]-\\infty ; ${r}${closed ? ']' : '['}`;
      return Q('Signe d\'une expression du premier degré', '2N4',
        `Résoudre dans $\\mathbb{R}$ l'inéquation $${poly([a, b])} ${OPS[op]} 0$.`,
        `$S = ${S}$`,
        `L'expression s'annule en $${r}$${a < 0 ? ' ; son coefficient directeur est négatif, elle change de signe de $+$ à $-$' : ' ; son coefficient directeur est positif, elle change de signe de $-$ à $+$'}.`);
    },
    function signeProduit() {
      let r1 = R(-5, 3);
      const r2 = r1 + R(1, 5);
      const neg = Math.random() < 0.35;
      const expr = neg ? `-${fac(r1)}${fac(r2)}` : `${fac(r1)}${fac(r2)}`;
      const op = pick(['<', '<=', '>', '>=']);
      const closed = op.length === 2;
      const wantPos = op[0] === '>';
      const outside = wantPos !== neg;
      const S = outside
        ? `]-\\infty ; ${r1}${closed ? ']' : '['} \\cup ${closed ? '[' : ']'}${r2} ; +\\infty[`
        : `${closed ? '[' : ']'}${r1} ; ${r2}${closed ? ']' : '['}`;
      return Q('Signe d\'une expression factorisée', '2N4',
        `Résoudre dans $\\mathbb{R}$ l'inéquation $${expr} ${OPS[op]} 0$.`,
        `$S = ${S}$`,
        `Les facteurs $${fac(r1).replace(/[()]/g, '')}$ et $${fac(r2).replace(/[()]/g, '')}$ sont de même signe en dehors de $[${r1} ; ${r2}]$ et de signes contraires entre $${r1}$ et $${r2}$${neg ? ' ; le signe $-$ placé devant inverse le tout' : ''}.`);
    },
    function developper() {
      const form = pick(['ab', 'carre', 'k']);
      if (form === 'carre') {
        const a = pick([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]);
        return Q('Développer une expression', '2N2',
          `Développer et réduire $(x ${a > 0 ? '+' : '-'} ${Math.abs(a)})^2$.`,
          `$${poly([1, 2 * a, a * a])}$`,
          `Identité remarquable : le double produit vaut $${dec(2 * a)}x$ et le carré du second terme vaut $${a * a}$.`);
      }
      if (form === 'k') {
        const k = pick([2, 3]);
        const a = R(-5, 5) || 2, b = R(-5, 5) || -3;
        return Q('Développer une expression', '2N2',
          `Développer et réduire $(${k}x ${a > 0 ? '+' : '-'} ${Math.abs(a)})(x ${b > 0 ? '+' : '-'} ${Math.abs(b)})$.`,
          `$${poly([k, k * b + a, a * b])}$`,
          `On obtient $${k}x^2 ${k * b < 0 ? '-' : '+'} ${Math.abs(k * b)}x ${a < 0 ? '-' : '+'} ${Math.abs(a) === 1 ? '' : Math.abs(a)}x ${a * b < 0 ? '-' : '+'} ${Math.abs(a * b)}$, que l'on réduit.`);
      }
      const a = R(-6, 6) || 1, b = R(-6, 6) || 4;
      return Q('Développer une expression', '2N2',
        `Développer et réduire $(x ${a > 0 ? '+' : '-'} ${Math.abs(a)})(x ${b > 0 ? '+' : '-'} ${Math.abs(b)})$.`,
        `$${poly([1, a + b, a * b])}$`,
        `On distribue chaque terme : le coefficient de $x$ vaut $${a + b}$ et le terme constant vaut $${a * b}$.`);
    },
    function factoriser() {
      const form = pick(['diff', 'diffk', 'commun', 'communk', 'carre']);
      const pos = (n) => `(x + ${n})`, neg = (n) => `(x - ${n})`;
      if (form === 'diff') {
        const a = R(2, 9);
        return Q('Factoriser une expression', '2N2', `Factoriser complètement $x^2 - ${a * a}$.`, `$${neg(a)}${pos(a)}$`, `On reconnaît $a^2 - b^2 = (a - b)(a + b)$ avec $a = x$ et $b = ${a}$.`);
      }
      if (form === 'diffk') {
        const [k, a] = pick([[2, 1], [2, 3], [2, 5], [3, 1], [3, 2], [3, 5], [5, 1], [5, 2], [5, 3]]);
        return Q('Factoriser une expression', '2N2', `Factoriser complètement $${k * k}x^2 - ${a * a}$.`, `$(${k}x - ${a})(${k}x + ${a})$`, `$${k * k}x^2 = (${k}x)^2$ et $${a * a} = ${a}^2$ : c'est une différence de deux carrés.`);
      }
      if (form === 'commun') {
        const b = pick([-7, -5, -3, 2, 4, 6, 9]);
        return Q('Factoriser une expression', '2N2', `Factoriser complètement $${poly([1, b, 0])}$.`, `$x(x ${b > 0 ? '+' : '-'} ${Math.abs(b)})$`, `$x$ est un facteur commun aux deux termes.`);
      }
      if (form === 'communk') {
        const k = pick([2, 3, 4, 5]), b = pick([-3, -2, 2, 3, 5]);
        return Q('Factoriser une expression', '2N2', `Factoriser complètement $${poly([k, k * b, 0])}$.`, `$${k}x(x ${b > 0 ? '+' : '-'} ${Math.abs(b)})$`, `$${k}x$ est un facteur commun aux deux termes.`);
      }
      const a = pick([-5, -4, -3, -2, 2, 3, 4, 5]);
      return Q('Factoriser une expression', '2N2', `Factoriser complètement $${poly([1, 2 * a, a * a])}$.`, `$(x ${a > 0 ? '+' : '-'} ${Math.abs(a)})^2$`, `On reconnaît le carré $(x ${a > 0 ? '+' : '-'} ${Math.abs(a)})^2$ : le double produit vaut bien $${dec(2 * a)}x$.`);
    },
    function reduire() {
      const k = pick([2, 3, 4]), b = R(-5, 5) || 2, c = R(1, 5), d = R(-6, 6);
      return Q('Réduire une expression', '2N2',
        `Réduire $${k}(x ${b > 0 ? '+' : '-'} ${Math.abs(b)}) - (${poly([c, d])})$.`,
        `$${poly([k - c, k * b - d])}$`,
        `On développe : $${poly([k, k * b])} ${c === 1 ? '- x' : `- ${c}x`} ${d > 0 ? `- ${d}` : d < 0 ? `+ ${-d}` : ''}$, puis on réduit.`);
    },
    function fractions() {
      const [a, b, c, d] = pick([[1, 2, 1, 3], [1, 2, 1, 4], [2, 3, 1, 6], [3, 4, 1, 8], [1, 3, 1, 6], [2, 5, 1, 10], [5, 6, 1, 3], [3, 2, 1, 4], [1, 4, 1, 6]]);
      const moins = Math.random() < 0.4 && a * d > c * b;
      const n = moins ? a * d - c * b : a * d + c * b;
      return Q('Calcul avec des fractions', '2N1',
        `Calculer et simplifier $\\dfrac{${a}}{${b}} ${moins ? '-' : '+'} \\dfrac{${c}}{${d}}$.`,
        `$${frac(n, b * d)}$`,
        `On réduit au même dénominateur, puis on simplifie.`);
    },
    function puissances() {
      const a = R(2, 6), b = R(1, 5), c = R(1, 4);
      return Q('Calcul avec des puissances', '2N1',
        `Écrire sous la forme d'une seule puissance de $10$ : $\\dfrac{10^{${a}} \\times 10^{${b}}}{10^{${c}}}$.`,
        `$10^{${a + b - c}}$`,
        `On ajoute les exposants pour le produit et on soustrait celui du dénominateur : $${a} + ${b} - ${c} = ${a + b - c}$.`);
    }
  ];

  const FONCTIONS = [
    function equationGraphique() {
      const k = R(-2, 2);
      const c = curveFor(k);
      return Q('Résoudre graphiquement une équation', '2A1',
        `La courbe ci-dessous représente une fonction $f$ définie sur $[-6 ; 6]$.\n${curveFigure(c, 'Courbe d\'une fonction f')}Résoudre graphiquement l'équation $f(x) = ${k}$.`,
        `$S = ${setOf(c.cuts.map(String))}$`,
        `Les solutions sont les abscisses des points de la courbe d'ordonnée $${k}$.`);
    },
    function inequationGraphique() {
      const k = R(-2, 2);
      const c = curveFor(k);
      const op = pick(['<', '<=', '>', '>=']);
      const below = op[0] === '<';
      return Q('Résoudre graphiquement une inéquation', '2A1',
        `La courbe ci-dessous représente une fonction $f$ définie sur $[-6 ; 6]$.\n${curveFigure(c, 'Courbe d\'une fonction f')}Résoudre graphiquement l'inéquation $f(x) ${OPS[op]} ${k}$.`,
        `$S = ${levelSet(c, op)}$`,
        `On cherche les abscisses des points de la courbe situés ${below ? 'sous' : 'au-dessus de'} la droite d'équation $y = ${k}$${op.length === 2 ? ', ou sur cette droite' : ''}.`);
    },
    function signeGraphique() {
      const c = curveFor(0);
      const op = pick(['<', '>']);
      return Q('Signe d\'une fonction à partir de sa courbe', '2A1',
        `La courbe ci-dessous représente une fonction $f$ définie sur $[-6 ; 6]$.\n${curveFigure(c, 'Courbe d\'une fonction f')}Sur quel ensemble a-t-on $f(x) ${op} 0$ ?`,
        `$${levelSet(c, op)}$`,
        `On lit où la courbe est ${op === '>' ? 'strictement au-dessus' : 'strictement au-dessous'} de l'axe des abscisses.`);
    },
    function signeTableau() {
      const a = R(-8, -5), z1 = a + R(1, 2), m = z1 + R(1, 3), z2 = m + R(1, 3), b = z2 + R(1, 2);
      const bump = Math.random() < 0.5;
      const sg = bump ? 1 : -1;
      const ya = -sg * R(1, 5), ym = sg * R(1, 6), yb = -sg * R(1, 5);
      const fig = varTable([a, z1, m, z2, b].map(plain), [ya, 0, ym, 0, yb], bump ? ['l', 'm', 'h', 'm', 'l'] : ['h', 'm', 'l', 'm', 'h']);
      const op = pick(['>=', '<=']);
      const inside = (op === '>=') === bump;
      const S = inside ? `[${z1} ; ${z2}]` : `[${a} ; ${z1}] \\cup [${z2} ; ${b}]`;
      return Q('Signe d\'une fonction à partir de son tableau de variations', '2A2',
        `Voici le tableau de variations d'une fonction $f$ définie sur $[${a} ; ${b}]$.\n${fig}Sur quel ensemble a-t-on $f(x) ${OPS[op]} 0$ ?`,
        `$${S}$`,
        `$f$ s'annule en $${z1}$ et en $${z2}$ et est strictement monotone sur chaque intervalle du tableau, ce qui donne son signe.`);
    },
    function lireEquationDroite() {
      const m = pick([1, -1, 2, -2, 0.5, -0.5, 1.5]);
      const p = R(-3, 3);
      const eq = `y = ${poly([m, p])}`;
      return Q('Lire l\'équation réduite d\'une droite', '2G3',
        `Donner l'équation réduite de la droite tracée ci-dessous.\n${lineFigure(m, p, 'Droite dans un repère')}`,
        `$${eq}$`,
        `L'ordonnée à l'origine se lit sur l'axe des ordonnées : $p = ${p}$. Quand $x$ augmente de $${Number.isInteger(m) ? 1 : 2}$, $y$ varie de $${dec(Number.isInteger(m) ? m : 2 * m)}$, donc $m = ${dec(m)}$.`);
    },
    function coefficientDirecteur() {
      let xa, ya, xb, yb;
      do { xa = R(-5, 5); xb = R(-5, 5); ya = R(-6, 6); yb = R(-6, 6); } while (xa === xb);
      return Q('Coefficient directeur d\'une droite', '2G3',
        `Calculer le coefficient directeur de la droite $(AB)$, avec $A(${xa} ; ${ya})$ et $B(${xb} ; ${yb})$.`,
        `$${frac(yb - ya, xb - xa)}$`,
        `$m = \\dfrac{y_B - y_A}{x_B - x_A} = \\dfrac{${yb - ya}}{${xb - xa}}$.`);
    },
    function tracerDroite() {
      const m = pick([1, -1, 2, -2, 0.5, -0.5]);
      const p = R(-3, 3);
      const x1 = 0, x2 = Number.isInteger(m) ? 1 : 2;
      const y2 = m * x2 + p;
      return Q('Tracer une droite', '2G3',
        `Tracer dans le repère ci-dessous la droite d'équation $y = ${poly([m, p])}$.\n${lineFigure(m, p, 'Repère vide', false)}`,
        `la droite passant par $(${x1} ; ${p})$ et $(${x2} ; ${dec(y2)})$`,
        `Pour $x = ${x1}$, $y = ${p}$ ; pour $x = ${x2}$, $y = ${dec(y2)}$.\n${lineFigure(m, p, 'Droite tracée', true, [[x1, p], [x2, y2]])}`);
    },
    function image() {
      const a = pick([1, 2, -1]), b = R(-4, 4), c = R(-5, 5), x = R(-3, 3) || 2;
      const v = a * x * x + b * x + c;
      return Q('Calculer une image', '2A1',
        `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = ${poly([a, b, c])}$. Calculer $f(${x})$.`,
        `$${v}$`,
        `On remplace $x$ par $${x < 0 ? `(${x})` : x}$, sans oublier que le carré se calcule avant le produit.`);
    }
  ];

  const STATISTIQUES = [
    function barres() {
      const noms = pick([['Bus', 'Vélo', 'Marche', 'Voiture'], ['Foot', 'Danse', 'Tennis', 'Judo'], ['Rouge', 'Bleu', 'Vert', 'Jaune']]);
      const tot = pick([20, 40, 50]);
      const step = tot === 20 ? 2 : tot === 40 ? 4 : 5;
      let v;
      do {
        const a = R(1, 5) * step, b = R(1, 5) * step, c = R(1, 5) * step;
        v = [a, b, c, tot - a - b - c];
      } while (v[3] <= 0);
      const i = R(0, 3);
      const t = (v[i] * 100) / tot;
      return Q('Lire un diagramme en barres', '2S1',
        `Le diagramme ci-dessous donne la répartition de $${tot}$ personnes.\n${barsFigure(noms, v, step, false, 'Effectif')}Quelle part du groupe représente la catégorie « ${noms[i]} », en pourcentage ?`,
        `$${pct(t)}$`,
        `L'effectif lu est $${v[i]}$, et $\\dfrac{${v[i]}}{${tot}} = ${dec(t / 100)}$.`);
    },
    function histogramme() {
      const a0 = pick([0, 10, 20]), w = pick([5, 10]);
      const v = shuffle([10, 20, 30, 40]);
      const labels = [0, 1, 2, 3].map((i) => `[${a0 + i * w} ; ${a0 + (i + 1) * w}[`);
      const total = 100;
      const i = R(0, 2);
      const s = v[i] + v[i + 1];
      return Q('Lire un histogramme', '2S1',
        `L'histogramme ci-dessous répartit $${total}$ valeurs en classes de même amplitude.\n${barsFigure(labels, v, 10, true, 'Effectif')}Combien de valeurs sont dans l'intervalle $[${a0 + i * w} ; ${a0 + (i + 2) * w}[$ ?`,
        `$${s}$`,
        `On additionne les effectifs des deux classes concernées : $${v[i]} + ${v[i + 1]} = ${s}$.`);
    },
    function circulaire() {
      const [p, lab] = pick([[[0.5, 0.25, 0.25], ['A', 'B', 'C']], [[0.25, 0.25, 0.25, 0.25], ['A', 'B', 'C', 'D']], [[0.5, 0.3, 0.2], ['A', 'B', 'C']], [[0.4, 0.4, 0.2], ['A', 'B', 'C']]]);
      const N = pick([200, 400, 1000]);
      const i = R(0, p.length - 1);
      const angle = clean(p[i] * 360);
      if (Math.random() < 0.5) {
        return Q('Passer des données au graphique', '2S1',
          `On veut représenter une série par un diagramme circulaire. Une catégorie représente $${pct(clean(p[i] * 100))}$ de l'effectif. Quelle est la mesure de l'angle de son secteur, en degrés ?`,
          `$${dec(angle)}^\\circ$`,
          `L'angle est proportionnel à la part : $${dec(p[i])} \\times 360 = ${dec(angle)}$.`);
      }
      return Q('Lire un diagramme circulaire', '2S1',
        `Ce diagramme circulaire répartit $${N}$ réponses ; chaque secteur porte la mesure de son angle.\n${pieFigure(p, lab.map((l, j) => `${l} : ${plain(clean(p[j] * 360))}°`))}Combien de réponses correspondent à la catégorie ${lab[i]} ?`,
        `$${clean(p[i] * N)}$`,
        `Le secteur mesure $${dec(angle)}^\\circ$ sur $360^\\circ$, soit une part de $${dec(p[i])}$, et $${dec(p[i])} \\times ${N} = ${clean(p[i] * N)}$.`);
    },
    function boite() {
      const min = 2 * R(1, 3), q1 = min + R(1, 4) * 2, med = q1 + R(1, 3) * 2, q3 = med + R(1, 3) * 2, max = q3 + R(1, 4) * 2;
      const kind = pick(['mediane', 'ei', 'q3', 'etendue']);
      const fig = boxFigure([min, q1, med, q3, max], 0, Math.ceil((max + 2) / 2) * 2, 2);
      const fin = {
        mediane: ['Quelle est la médiane de cette série ?', `$${med}$`, 'La médiane se lit sur le trait intérieur de la boîte.'],
        ei: ['Quel est l\'écart interquartile de cette série ?', `$${q3 - q1}$`, `$Q_3 - Q_1 = ${q3} - ${q1} = ${q3 - q1}$.`],
        q3: ['Au moins $75\\,\\%$ des valeurs sont inférieures ou égales à quel nombre, lu sur ce diagramme ?', `$${q3}$`, `C'est le troisième quartile, qui borne la boîte à droite.`],
        etendue: ['Quelle est l\'étendue de cette série ?', `$${max - min}$`, `$${max} - ${min} = ${max - min}$.`]
      }[kind];
      return Q('Lire un diagramme en boîte', '2S1',
        `Voici le diagramme en boîte d'une série statistique.\n${fig}${fin[0]}`, fin[1], fin[2]);
    },
    function moyenne() {
      const m = R(8, 14);
      const d = pick([[1, -1, 2, -2], [3, -1, -2, 0], [2, 2, -3, -1], [4, -2, -1, -1]]);
      const v = shuffle(d.map((e) => m + e));
      return Q('Calculer une moyenne', '2S1',
        `Calculer la moyenne de la série : $${v.join(' ; ')}$.`,
        `$${m}$`,
        `$\\dfrac{${v.join(' + ')}}{4} = \\dfrac{${4 * m}}{4} = ${m}$.`);
    },
    function moyennePonderee() {
      const [n1, n2, x1, x2, r] = pick([[3, 1, 12, 8, 11], [1, 1, 10, 14, 12], [2, 3, 15, 10, 12], [3, 2, 10, 15, 12], [1, 4, 5, 10, 9], [4, 1, 10, 5, 9]]);
      return Q('Calculer une moyenne pondérée', '2S1',
        `Un élève a obtenu $${x1}$ (coefficient $${n1}$) et $${x2}$ (coefficient $${n2}$). Quelle est sa moyenne ?`,
        `$${r}$`,
        `$\\dfrac{${n1} \\times ${x1} + ${n2} \\times ${x2}}{${n1 + n2}} = \\dfrac{${n1 * x1 + n2 * x2}}{${n1 + n2}} = ${r}$.`);
    },
    function interpreter() {
      const med = pick([1500, 1800, 2000, 2400]);
      return Q('Interpréter un indicateur', '2S1',
        `Dans une entreprise, le salaire médian est de $${med}$ €. Que signifie cette information ?`,
        `au moins la moitié des salariés gagnent $${med}$ € ou moins, et au moins la moitié gagnent $${med}$ € ou plus`,
        `La médiane partage la série ordonnée en deux groupes de même effectif. Elle ne dit rien de la moyenne.`);
    }
  ];

  const PROBABILITES = [
    function tableauCroise() {
      const N = 100;
      const a = pick([10, 15, 20, 30]), b = pick([10, 20, 30]), c = pick([5, 10, 15, 25]);
      const d = N - a - b - c;
      const kind = pick(['inter', 'cond', 'cond2']);
      const table = `| | Internes | Externes | Total |\n|:---:|:---:|:---:|:---:|\n| Sportifs | $${a}$ | $${b}$ | $${a + b}$ |\n| Non sportifs | $${c}$ | $${d}$ | $${c + d}$ |\n| Total | $${a + c}$ | $${b + d}$ | $${N}$ |\n\n`;
      const start = `Ce tableau répartit $${N}$ élèves. On en choisit un au hasard ; $S$ : « il est sportif », $I$ : « il est interne ».\n\n${table}`;
      if (kind === 'inter') {
        return Q('Probabilité à partir d\'un tableau croisé', '2S2', `${start}Calculer $P(S \\cap I)$.`, `$${frac(a, N)}$`, `Parmi $${N}$ élèves, $${a}$ sont à la fois sportifs et internes.`);
      }
      if (kind === 'cond') {
        return Q('Probabilité conditionnelle et tableau croisé', '1S1', `${start}Calculer $P_I(S)$.`, `$${frac(a, a + c)}$`, `On se restreint aux $${a + c}$ internes, dont $${a}$ sont sportifs.`);
      }
      return Q('Probabilité conditionnelle et tableau croisé', '1S1', `${start}Calculer $P_S(I)$.`, `$${frac(a, a + b)}$`, `On se restreint aux $${a + b}$ sportifs, dont $${a}$ sont internes.`);
    },
    function arbre() {
      const a = pick([0.2, 0.4, 0.5, 0.6]), b = pick([0.2, 0.3, 0.5, 0.7]), c = pick([0.1, 0.4, 0.5, 0.6]);
      const kind = pick(['inter', 'interB', 'totale']);
      const start = `On considère l'arbre pondéré ci-dessous.\n${treeFigure('A', 'B', a, b, c)}`;
      const nA = clean(1 - a), ab = clean(a * b), nab = clean(nA * c);
      if (kind === 'inter') {
        return Q('Arbre pondéré', '1S1', `${start}Calculer $P(A \\cap B)$.`, `$${dec(ab)}$`, `On multiplie les probabilités le long de la branche : $${dec(a)} \\times ${dec(b)} = ${dec(ab)}$.`);
      }
      if (kind === 'interB') {
        return Q('Arbre pondéré', '1S1', `${start}Calculer $P(\\overline{A} \\cap B)$.`, `$${dec(nab)}$`, `On multiplie les probabilités le long de la branche : $${dec(nA)} \\times ${dec(c)} = ${dec(nab)}$.`);
      }
      return Q('Arbre pondéré', '1S1', `${start}Calculer $P(B)$.`, `$${dec(clean(ab + nab))}$`, `On additionne les deux branches qui mènent à $B$ : $${dec(ab)} + ${dec(nab)} = ${dec(clean(ab + nab))}$.`);
    },
    function notation() {
      const t1 = pick([20, 30, 40]), t2 = pick([15, 25, 35]), t3 = pick([5, 10, 12]);
      const kind = pick([0, 1, 2]);
      const phr = [
        [`Parmi les élèves internes, $${pct(t1)}$ sont sportifs.`, `P_I(S) = ${dec(t1 / 100)}`],
        [`Parmi les élèves sportifs, $${pct(t2)}$ sont internes.`, `P_S(I) = ${dec(t2 / 100)}`],
        [`$${pct(t3)}$ des élèves sont à la fois internes et sportifs.`, `P(I \\cap S) = ${dec(t3 / 100)}`]
      ][kind];
      return Q('Distinguer intersection et probabilité conditionnelle', '1S1',
        `On choisit un élève au hasard ; $I$ : « il est interne », $S$ : « il est sportif ». Traduire par une égalité entre une probabilité et un nombre : « ${phr[0]} »`,
        `$${phr[1]}$`,
        kind === 2 ? `« À la fois » désigne une intersection, calculée sur tous les élèves.` : `« Parmi » désigne la population de référence : c'est l'événement placé en indice.`);
    }
  ];

  const AUTO_PLAN = [[EVOLUTIONS, 2], [CALCUL, 3], [FONCTIONS, 3], [STATISTIQUES, 2], [PROBABILITES, 2]];

  // ---- Exercices de la partie 2 -------------------------------------------------------------
  /** Écriture des termes : u(n) sans spécialité, u_n en voie technologique */
  const NOTA = {
    fn: { u: (i) => `u(${i})`, nom: 'u(n)' },
    idx: { u: (i) => `u_{${i}}`, nom: 'u_n' }
  };

  function exArithmetique(notation) {
    const N = NOTA[notation];
    const ctx = pick([
      { up: true, u0: [800, 1200, 1500, 2000], r: [50, 100, 150, 200], intro: (a, r) => `Une médiathèque compte $${a}$ abonnés en 2025. On estime que ce nombre augmente de $${r}$ abonnés chaque année.`, def: 'le nombre d\'abonnés en $2025 + n$', unite: 'abonnés', quand: 'En quelle année', suj: 'le nombre d\'abonnés dépassera-t-il', base: 2025 },
      { up: true, u0: [300, 400, 600], r: [20, 30, 40, 50], intro: (a, r) => `Une ville dispose de $${a}$ vélos en libre-service en 2025 et en ajoute $${r}$ chaque année.`, def: 'le nombre de vélos en $2025 + n$', unite: 'vélos', quand: 'En quelle année', suj: 'le nombre de vélos dépassera-t-il', base: 2025 },
      { up: false, u0: [2400, 3000, 3600], r: [100, 200, 300], intro: (a, r) => `Une cuve contient $${a}$ litres d'eau au début d'une sécheresse. Chaque jour, on y prélève $${r}$ litres.`, def: 'le volume d\'eau, en litres, après $n$ jours', unite: 'litres', quand: 'Au bout de combien de jours', suj: 'le volume deviendra-t-il inférieur à', base: null }
    ]);
    const a = pick(ctx.u0), r = pick(ctx.r);
    const s = ctx.up ? r : -r;
    const n4 = ctx.up ? R(5, 8) : R(3, 5);
    const seuilRang = ctx.up ? R(9, 14) : Math.floor(a / r) - R(1, 3);
    const S = a + s * seuilRang - s / 2;
    const v4 = a + s * n4;
    const quand = ctx.base ? `En quelle année ${ctx.suj} $${S}$ ?` : `${ctx.quand} ${ctx.suj} $${S}$ litres ?`;
    const statement = `${ctx.intro(a, r)} On note $${N.nom}$ ${ctx.def}.
1. Calculer $${N.u(1)}$ et $${N.u(2)}$.
2. Exprimer $${N.u('n+1')}$ en fonction de $${N.nom}$. Quelle est la nature de cette suite ? Préciser sa raison.
3. Exprimer $${N.nom}$ en fonction de $n$.
4. Calculer $${N.u(n4)}$ et interpréter ce résultat.
5. ${quand} Justifier en résolvant une inéquation.`;
    const ineq = ctx.up ? `${a} + ${r}n > ${S}` : `${a} - ${r}n < ${S}`;
    const sol = clean((S - a) / s);
    const conclusion = ctx.base ? `Le plus petit entier qui convient est $n = ${seuilRang}$, soit l'année $${ctx.base + seuilRang}$.` : `Le plus petit entier qui convient est $n = ${seuilRang}$, soit au bout de $${seuilRang}$ jours.`;
    const solution = `**1.** $${N.u(1)} = ${a} ${ctx.up ? '+' : '-'} ${r} = ${a + s}$ et $${N.u(2)} = ${a + s} ${ctx.up ? '+' : '-'} ${r} = ${a + 2 * s}$.

**2.** Pour tout entier naturel $n$, $${N.u('n+1')} = ${N.nom} ${ctx.up ? '+' : '-'} ${r}$. On passe d'un terme au suivant en ajoutant toujours le même nombre : la suite est arithmétique, de raison $${s}$ et de premier terme $${a}$.

**3.** Pour tout entier naturel $n$, $${N.nom} = ${a} ${ctx.up ? '+' : '-'} ${r}n$.

**4.** $${N.u(n4)} = ${a} ${ctx.up ? '+' : '-'} ${r} \\times ${n4} = ${v4}$. ${ctx.base ? `En $${ctx.base + n4}$, on prévoit $${v4}$ ${ctx.unite}.` : `Après $${n4}$ jours, il reste $${v4}$ litres.`}

**5.** On résout $${ineq}$. ${ctx.up ? `Cela équivaut à $${r}n > ${S - a}$` : `Cela équivaut à $${a - S} < ${r}n$`}, c'est-à-dire $n > ${dec(sol)}$. ${conclusion}`;
    return { title: 'Évolution à accroissements constants', chapterId: '1A6', statement, solution };
  }

  function exGeometrique(notation, avecTauxMoyen) {
    const N = NOTA[notation];
    const kind = pick(['capital', 'bacteries', 'decroissance']);
    if (kind === 'capital') {
      const a = pick([1000, 2000, 5000]);
      const t = pick([10, 20]);
      const q = (100 + t) / 100;
      const v1 = clean(a * q), v2 = clean(v1 * q), v3 = clean(v2 * q);
      const g = clean((q * q - 1) * 100);
      const moyen = pick([[1.21, 10], [1.44, 20], [1.69, 30]]);
      const statement = `On place un capital de $${a}$ € à intérêts composés, au taux annuel de $${pct(t)}$. On note $${N.nom}$ le capital, en euros, au bout de $n$ années, avec $${N.u(0)} = ${a}$.
1. Calculer $${N.u(1)}$ et $${N.u(2)}$.
2. Exprimer $${N.u('n+1')}$ en fonction de $${N.nom}$. Quelle est la nature de cette suite ? Préciser sa raison.
3. Exprimer $${N.nom}$ en fonction de $n$, puis calculer $${N.u(3)}$.
4. Quel est le taux d'évolution global du capital sur deux ans ?${avecTauxMoyen ? `
5. Un autre placement multiplie le capital par $${dec(moyen[0])}$ en deux ans. Quel est son taux annuel moyen ?` : `
5. Déterminer le sens de variation de cette suite.`}`;
      const solution = `**1.** $${N.u(1)} = ${a} \\times ${dec(q)} = ${dec(v1)}$ et $${N.u(2)} = ${dec(v1)} \\times ${dec(q)} = ${dec(v2)}$.

**2.** Pour tout entier naturel $n$, $${N.u('n+1')} = ${dec(q)} \\times ${N.nom}$ : chaque terme s'obtient en multipliant le précédent par le même nombre. La suite est géométrique, de raison $${dec(q)}$ et de premier terme $${a}$.

**3.** Pour tout entier naturel $n$, $${N.nom} = ${a} \\times ${dec(q)}^n$. Donc $${N.u(3)} = ${dec(v2)} \\times ${dec(q)} = ${dec(v3)}$.

**4.** Le coefficient global est $${dec(q)}^2 = ${dec(q * q)}$, soit une hausse de $${pct(g)}$. Ce n'est pas $2 \\times ${pct(t)}$, car les intérêts produisent eux-mêmes des intérêts.

**5.** ${avecTauxMoyen ? `Si $q$ est le coefficient annuel moyen, $q^2 = ${dec(moyen[0])}$, donc $q = ${dec(moyen[0])}^{1/2} = ${dec(1 + moyen[1] / 100)}$. Le taux annuel moyen est $${pct(moyen[1])}$.` : `Les termes sont strictement positifs et la raison $${dec(q)}$ est supérieure à $1$ : la suite est strictement croissante.`}`;
      return { title: 'Intérêts composés', chapterId: '1A6', statement, solution };
    }
    if (kind === 'bacteries') {
      const a = pick([100, 200, 500]);
      const n0 = R(5, 7);
      const S = a * (2 ** n0) - a * R(1, 3);
      const list = [];
      for (let i = 0; i <= n0; i++) list.push(`$${N.u(i)} = ${a * 2 ** i}$`);
      const statement = `Une culture contient $${a}$ bactéries à l'instant initial, et ce nombre double chaque heure. On note $${N.nom}$ le nombre de bactéries au bout de $n$ heures, avec $${N.u(0)} = ${a}$.
1. Calculer $${N.u(1)}$, $${N.u(2)}$ et $${N.u(3)}$.
2. Quelle est la nature de cette suite ? Préciser sa raison.
3. Exprimer $${N.nom}$ en fonction de $n$.
4. Déterminer le sens de variation de cette suite.
5. Au bout de combien d'heures entières le nombre de bactéries dépasse-t-il $${S}$ ? Justifier par des calculs.`;
      const solution = `**1.** $${N.u(1)} = ${2 * a}$, $${N.u(2)} = ${4 * a}$ et $${N.u(3)} = ${8 * a}$.

**2.** Pour tout entier naturel $n$, $${N.u('n+1')} = 2 \\times ${N.nom}$ : la suite est géométrique, de raison $2$ et de premier terme $${a}$.

**3.** Pour tout entier naturel $n$, $${N.nom} = ${a} \\times 2^n$.

**4.** Les termes sont strictement positifs et la raison $2$ est supérieure à $1$ : la suite est strictement croissante.

**5.** On calcule les termes successifs : ${list.join(', ')}. La suite étant croissante, le seuil de $${S}$ est dépassé pour la première fois au bout de $${n0}$ heures.`;
      return { title: 'Croissance d\'une population de bactéries', chapterId: '1A6', statement, solution };
    }
    const a = pick([1600, 3200, 6400]);
    const n0 = R(3, 5);
    const S = (a / 2 ** n0) + pick([10, 20, 30]);
    const list = [];
    for (let i = 0; i <= n0; i++) list.push(`$${N.u(i)} = ${a / 2 ** i}$`);
    const statement = `L'activité d'un échantillon radioactif vaut $${a}$ becquerels à l'instant initial et elle est divisée par $2$ à chaque période de $8$ jours. On note $${N.nom}$ l'activité après $n$ périodes, avec $${N.u(0)} = ${a}$.
1. Calculer $${N.u(1)}$ et $${N.u(2)}$.
2. Quelle est la nature de cette suite ? Préciser sa raison.
3. Exprimer $${N.nom}$ en fonction de $n$.
4. Déterminer le sens de variation de cette suite.
5. Au bout de combien de périodes l'activité devient-elle inférieure à $${S}$ becquerels ? Justifier par des calculs.`;
    const solution = `**1.** $${N.u(1)} = ${a / 2}$ et $${N.u(2)} = ${a / 4}$.

**2.** Pour tout entier naturel $n$, $${N.u('n+1')} = \\dfrac{1}{2} \\times ${N.nom}$ : la suite est géométrique, de raison $\\dfrac{1}{2}$ et de premier terme $${a}$.

**3.** Pour tout entier naturel $n$, $${N.nom} = ${a} \\times \\left(\\dfrac{1}{2}\\right)^n$.

**4.** Les termes sont strictement positifs et la raison $\\dfrac{1}{2}$ est comprise entre $0$ et $1$ : la suite est strictement décroissante.

**5.** On calcule les termes successifs : ${list.join(', ')}. La suite étant décroissante, l'activité passe sous $${S}$ becquerels au bout de $${n0}$ périodes, soit $${8 * n0}$ jours.`;
    return { title: 'Décroissance radioactive', chapterId: '1A6', statement, solution };
  }

  function exQuadratique() {
    const x1 = R(-4, 3), x2 = x1 + 2 * R(1, 4);
    const a = pick([1, -1, 2, -2]);
    const al = (x1 + x2) / 2;
    const be = a * (al - x1) * (al - x2);
    const coefA = a === 1 ? '' : a === -1 ? '-' : String(a);
    const f = `${coefA}${fac(x1)}${fac(x2)}`;
    const dressed = a > 0
      ? varTable(['−∞', plain(al), '+∞'], [null, be, null], ['h', 'l', 'h'])
      : varTable(['−∞', plain(al), '+∞'], [null, be, null], ['l', 'h', 'l']);
    const signExt = a > 0 ? 'positif' : 'négatif';
    const signInt = a > 0 ? 'négatif' : 'positif';
    // La seconde forme lit l'axe sur deux points de même ordonnée : il en faut deux distincts, donc x1 + x2 non nul.
    if (Math.random() < 0.5 || x1 + x2 === 0) {
      const statement = `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = ${f}$.
1. Résoudre l'équation $f(x) = 0$.
2. En déduire l'équation de l'axe de symétrie de la courbe de $f$, puis les coordonnées de son sommet.
3. Dresser le tableau de variations de $f$ sur $\\mathbb{R}$.
4. Déterminer le signe de $f(x)$ selon les valeurs de $x$.`;
      const solution = `**1.** Un produit est nul si et seulement si l'un de ses facteurs est nul : $S = ${setOf([x1, x2])}$.

**2.** La courbe est symétrique par rapport à la droite verticale passant par le milieu des deux racines : $x = \\dfrac{${x1} + ${x2 < 0 ? `(${x2})` : x2}}{2} = ${dec(al)}$. L'axe de symétrie a pour équation $x = ${dec(al)}$. De plus, $f(${dec(al)}) = ${dec(be)}$ : le sommet est le point de coordonnées $(${dec(al)} ; ${dec(be)})$.

**3.** Le coefficient de $x^2$ est ${a > 0 ? 'positif : $f$ est décroissante puis croissante' : 'négatif : $f$ est croissante puis décroissante'}.
${dressed}
**4.** $f(x)$ est du signe de ${a > 0 ? 'son coefficient $' + a + '$, donc positif,' : 'son coefficient $' + a + '$, donc négatif,'} en dehors de $[${x1} ; ${x2}]$, et ${signInt} sur $]${x1} ; ${x2}[$. Il est nul en $${x1}$ et en $${x2}$.`;
      return { title: 'Modèle quadratique sous forme factorisée', chapterId: '1A1', statement, solution };
    }
    const b = -(x1 + x2), c = x1 * x2;
    const g = poly([a, a * b, a * c]);
    const cv = a * c;
    const r = -b;
    const statement = `Soit $g$ la fonction définie sur $\\mathbb{R}$ par $g(x) = ${g}$.
1. Résoudre l'équation $g(x) = ${cv}$.
2. En déduire l'équation de l'axe de symétrie de la courbe de $g$.
3. Calculer les coordonnées du sommet de la courbe de $g$.
4. Vérifier que, pour tout réel $x$, $g(x) = ${f}$.
5. Dresser le tableau de variations de $g$ sur $\\mathbb{R}$ et préciser le signe de $g(x)$.`;
    const interm = `${a === 1 ? '' : a === -1 ? '-' : a}x(x ${b > 0 ? '+' : '-'} ${Math.abs(b)}) = 0`;
    const sols = [Math.min(0, r), Math.max(0, r)];
    const dev = poly([a, a * b, a * c]);
    const solution = `**1.** $g(x) = ${cv}$ équivaut à $${poly([a, a * b, 0])} = 0$, soit $${interm}$. Donc $S = ${setOf(sols)}$.

**2.** Deux points de la courbe de même ordonnée sont symétriques par rapport à l'axe : son équation est $x = ${dec(al)}$, milieu de $${sols[0]}$ et $${sols[1]}$.

**3.** $g(${dec(al)}) = ${dec(be)}$, donc le sommet a pour coordonnées $(${dec(al)} ; ${dec(be)})$.

**4.** En développant $${f}$, on obtient bien $${dev}$.

**5.** Le coefficient de $x^2$ est ${a > 0 ? 'positif' : 'négatif'}.
${dressed.replace('f(x)', 'g(x)')}
D'après la forme factorisée, $g(x)$ est ${signExt} en dehors de $[${x1} ; ${x2}]$, ${signInt} sur $]${x1} ; ${x2}[$, et nul en $${x1}$ et en $${x2}$.`;
    return { title: 'Second degré sans formule', chapterId: '1A1', statement, solution };
  }

  function exTest() {
    const [p, s, f] = pick([[10, 90, 10], [20, 90, 10], [10, 80, 20], [20, 80, 10], [10, 90, 5], [25, 80, 20], [5, 90, 10], [20, 95, 5]]);
    const tp = p * s, fp = (100 - p) * f, tot = tp + fp;
    const ctx = pick([
      { intro: `Une maladie touche $${pct(p)}$ d'une population. Un test de dépistage est positif pour $${pct(s)}$ des personnes malades et pour $${pct(f)}$ des personnes non malades. On choisit une personne au hasard ; on note $M$ l'événement « la personne est malade » et $T$ l'événement « le test est positif ».`, A: 'M', B: 'T', q4: 'Une personne a un test positif. Quelle est la probabilité qu\'elle soit réellement malade ?', com: 'Un test positif ne garantit pas la maladie : parmi les tests positifs, certains sont des faux positifs, d\'autant plus nombreux que la maladie est rare.' },
      { intro: `Dans une usine, $${pct(p)}$ des pièces sont défectueuses. Un contrôle automatique alerte pour $${pct(s)}$ des pièces défectueuses et pour $${pct(f)}$ des pièces correctes. On choisit une pièce au hasard ; on note $D$ l'événement « la pièce est défectueuse » et $T$ l'événement « le contrôle alerte ».`, A: 'D', B: 'T', q4: 'Le contrôle a alerté sur une pièce. Quelle est la probabilité qu\'elle soit défectueuse ?', com: 'Une alerte ne garantit pas le défaut : une partie des alertes concerne des pièces correctes.' }
    ]);
    const { A, B } = ctx;
    const statement = `${ctx.intro}
1. Représenter cette situation par un arbre pondéré.
2. Calculer $P(${A} \\cap ${B})$.
3. Montrer que $P(${B}) = ${dec(tot / 10000)}$.
4. ${ctx.q4} Donner le résultat sous forme de fraction irréductible.
5. Commenter ce résultat.`;
    const solution = `**1.**
${treeFigure(A, B, p / 100, s / 100, f / 100)}
**2.** $P(${A} \\cap ${B}) = ${dec(p / 100)} \\times ${dec(s / 100)} = ${dec(tp / 10000)}$.

**3.** $${B}$ est réalisé par les deux branches $${A} \\cap ${B}$ et $\\overline{${A}} \\cap ${B}$ : $P(${B}) = ${dec(tp / 10000)} + ${dec((100 - p) / 100)} \\times ${dec(f / 100)} = ${dec(tp / 10000)} + ${dec(fp / 10000)} = ${dec(tot / 10000)}$.

**4.** $P_{${B}}(${A}) = \\dfrac{P(${A} \\cap ${B})}{P(${B})} = \\dfrac{${dec(tp / 10000)}}{${dec(tot / 10000)}} = ${frac(tp, tot)}$.

**5.** ${ctx.com}`;
    return { title: 'Fiabilité d\'un test', chapterId: '1S1', statement, solution };
  }

  function exBernoulli() {
    const [n, pN] = pick([[3, 1], [3, 2], [3, 3], [3, 5], [4, 5]]);
    const qN = 10 - pN;
    const D = 10 ** n;
    const all = pN ** n / D, none = qN ** n / D, one = (n * pN * qN ** (n - 1)) / D;
    const p = dec(pN / 10), q = dec(qN / 10);
    const ctx = pick([
      `Un joueur lance $${n}$ fléchettes de manière indépendante. À chaque lancer, la probabilité qu'il atteigne la cible est $${p}$.`,
      `Un élève répond au hasard à $${n}$ questions indépendantes. Pour chacune, la probabilité que sa réponse soit juste est $${p}$.`
    ]);
    const statement = `${ctx}
1. ${n === 3 ? 'Représenter cette répétition d\'épreuves par un arbre pondéré.' : 'Expliquer pourquoi cette situation est une répétition d\'épreuves de Bernoulli indépendantes.'}
2. Calculer la probabilité que les $${n}$ épreuves soient toutes réussies.
3. Calculer la probabilité qu'aucune épreuve ne soit réussie.
4. En déduire la probabilité qu'au moins une épreuve soit réussie.
5. Calculer la probabilité qu'une seule épreuve exactement soit réussie.`;
    const solution = `**1.** ${n === 3 ? `L'arbre compte trois niveaux. À chaque nœud, une branche « réussite » de probabilité $${p}$ et une branche « échec » de probabilité $${q}$.` : `Il y a $4$ épreuves identiques et indépendantes, chacune à deux issues : réussite de probabilité $${p}$, échec de probabilité $${q}$.`}

**2.** Les épreuves étant indépendantes, on multiplie : $${p}^${n} = ${dec(all)}$.

**3.** $${q}^${n} = ${dec(none)}$.

**4.** C'est l'événement contraire de « aucune réussite » : $1 - ${dec(none)} = ${dec(clean(1 - none))}$.

**5.** La réussite unique peut avoir lieu à l'une des $${n}$ épreuves, avec la même probabilité à chaque fois : $${n} \\times ${p} \\times ${q}^${n - 1} = ${dec(one)}$.`;
    return { title: 'Répétition d\'épreuves de Bernoulli', chapterId: '1S1', statement, solution };
  }

  function exTableauCroise() {
    const indep = Math.random() < 0.5;
    let a, b, c, d, N;
    if (indep) {
      const k = pick([1, 3, 4]);
      const unit = pick([10, 20]);
      a = unit * pick([1, 2, 3]);
      b = unit * pick([1, 2]);
      c = k * a; d = k * b;
      N = a + b + c + d;
    } else {
      N = 200;
      a = pick([20, 30, 40]);
      b = pick([50, 60]);
      c = pick([10, 30]);
      d = N - a - b - c;
    }
    const RA = a + b, CB = a + c;
    const statement = `Dans un lycée de $${N}$ élèves, on s'intéresse à la pratique d'un instrument de musique et à l'inscription à la chorale. On choisit un élève au hasard, on note $A$ l'événement « l'élève joue d'un instrument » et $B$ l'événement « l'élève est inscrit à la chorale ».

| | Chorale | Pas de chorale | Total |
|:---:|:---:|:---:|:---:|
| Instrument | $${a}$ | | $${RA}$ |
| Pas d'instrument | | | |
| Total | $${CB}$ | | $${N}$ |

1. Recopier et compléter ce tableau.
2. Calculer $P(A)$ et $P(A \\cap B)$.
3. Calculer $P_A(B)$.
4. Calculer $P(B)$. Les événements $A$ et $B$ sont-ils indépendants ?`;
    const pA = frac(RA, N), pAB = frac(a, N), pBsA = frac(a, RA), pB = frac(CB, N);
    const same = a * N === RA * CB;
    const solution = `**1.**

| | Chorale | Pas de chorale | Total |
|:---:|:---:|:---:|:---:|
| Instrument | $${a}$ | $${b}$ | $${RA}$ |
| Pas d'instrument | $${c}$ | $${d}$ | $${c + d}$ |
| Total | $${CB}$ | $${b + d}$ | $${N}$ |

**2.** $P(A) = \\dfrac{${RA}}{${N}} = ${pA}$ et $P(A \\cap B) = \\dfrac{${a}}{${N}} = ${pAB}$.

**3.** $P_A(B) = \\dfrac{${a}}{${RA}} = ${pBsA}$.

**4.** $P(B) = \\dfrac{${CB}}{${N}} = ${pB}$. ${same ? `On a $P_A(B) = P(B)$ : les événements $A$ et $B$ sont indépendants.` : `On a $P_A(B) \\neq P(B)$ : les événements $A$ et $B$ ne sont pas indépendants.`}`;
    return { title: 'Tableau croisé et indépendance', chapterId: '1S1', statement, solution };
  }

  function exNuage() {
    const a = pick([2, 3, 4]), b = pick([3, 4, 5, 6]);
    const e = pick([[1, -1, 0, 1, -1], [-1, 0, 2, -1, 0], [0, 1, -1, -1, 1], [1, 0, -2, 0, 1]]);
    const xs = [1, 2, 3, 4, 5];
    const ys = xs.map((x, i) => a * x + b + e[i]);
    const yG = 3 * a + b;
    const x3 = pick([1.5, 2.5, 3.5]);
    const x4 = R(7, 8);
    const ctx = pick([
      { xn: 'Rang du mois', yn: 'Ventes', txt: 'Une boutique en ligne relève ses ventes mensuelles (en centaines d\'articles) sur cinq mois.', y: 'ventes, en centaines d\'articles', e: (v) => `$${dec(v)}$ centaines d'articles` },
      { xn: 'Rang de l\'année', yn: 'Adhérents', txt: 'Une association relève son nombre d\'adhérents (en dizaines) sur cinq années.', y: 'adhérents, en dizaines', e: (v) => `$${dec(v)}$ dizaines d'adhérents` }
    ]);
    const ymax = Math.ceil((a * x4 + b) / 10) * 10;
    const header = `| $x_i$ | ${xs.map((x) => `$${x}$`).join(' | ')} |\n|:---:|${xs.map(() => ':---:').join('|')}|\n| $y_i$ | ${ys.map((y) => `$${y}$`).join(' | ')} |\n\n`;
    const pts = xs.map((x, i) => [x, ys[i]]);
    const ystep = ymax > 40 ? 10 : 5;
    const statement = `${ctx.txt} On note $x_i$ le rang et $y_i$ la valeur relevée.

${header}${scatterFigure(pts, 9, 0, ymax, ystep, ctx.xn, ctx.yn)}
1. Calculer les coordonnées du point moyen $G$ de ce nuage.
2. On choisit comme ajustement affine la droite $D$ d'équation $y = ${poly([a, b])}$. Vérifier que $G$ appartient à $D$.
3. Estimer, à l'aide de cet ajustement, la valeur correspondant à $x = ${dec(x3)}$. S'agit-il d'une interpolation ou d'une extrapolation ?
4. Estimer la valeur correspondant à $x = ${x4}$. S'agit-il d'une interpolation ou d'une extrapolation ? Quelle prudence impose-t-elle ?`;
    const sum = ys.reduce((t, y) => t + y, 0);
    const solution = `**1.** $x_G = \\dfrac{1 + 2 + 3 + 4 + 5}{5} = 3$ et $y_G = \\dfrac{${ys.join(' + ')}}{5} = \\dfrac{${sum}}{5} = ${yG}$. Donc $G(3 ; ${yG})$.

**2.** $${a} \\times 3 ${b > 0 ? '+' : '-'} ${Math.abs(b)} = ${yG}$ : les coordonnées de $G$ vérifient l'équation de $D$.
${scatterFigure(pts, 9, 0, ymax, ystep, ctx.xn, ctx.yn, { line: [a, b], G: [3, yG] })}
**3.** $${a} \\times ${dec(x3)} + ${b} = ${dec(a * x3 + b)}$, soit ${ctx.e(a * x3 + b)}. La valeur $x = ${dec(x3)}$ est comprise entre les rangs observés : c'est une interpolation.

**4.** $${a} \\times ${x4} + ${b} = ${a * x4 + b}$, soit ${ctx.e(a * x4 + b)}. La valeur $x = ${x4}$ est en dehors des rangs observés : c'est une extrapolation. Elle suppose que la tendance se maintient, ce qui n'a rien de certain.`;
    return { title: 'Ajustement affine d\'un nuage de points', chapterId: '2S1', statement, solution };
  }

  function exAffine() {
    if (Math.random() < 0.3) {
      const deg = pick([10, 20, 25, 30, 35]);
      const fh = clean(1.8 * deg + 32);
      const f2 = pick([50, 68, 86, 104]);
      const c2 = clean((f2 - 32) / 1.8);
      const statement = `Pour convertir une température de degrés Celsius en degrés Fahrenheit, on utilise la fonction $F$ définie par $F(x) = 1{,}8x + 32$, où $x$ est la température en degrés Celsius.
1. Calculer $F(${deg})$ et interpréter ce résultat.
2. Quelle est la nature de la fonction $F$ ? Préciser son sens de variation.
3. Quelle température en degrés Celsius correspond à $${f2}$ degrés Fahrenheit ?
4. Pour quelle température les deux échelles indiquent-elles la même valeur ?`;
      const solution = `**1.** $F(${deg}) = 1{,}8 \\times ${deg} + 32 = ${dec(fh)}$ : $${deg}$ degrés Celsius correspondent à $${dec(fh)}$ degrés Fahrenheit.

**2.** $F$ est une fonction affine de coefficient directeur $1{,}8$. Il est positif, donc $F$ est strictement croissante sur $\\mathbb{R}$.

**3.** On résout $1{,}8x + 32 = ${f2}$ : $1{,}8x = ${f2 - 32}$, donc $x = ${f2 - 32} \\div 1{,}8 = ${dec(c2)}$ degrés Celsius.

**4.** On résout $1{,}8x + 32 = x$, soit $0{,}8x = -32$, donc $x = -40$. Les deux échelles coïncident à $-40$ degrés.`;
      return { title: 'Conversion de températures', chapterId: '2G3', statement, solution };
    }
    const p = pick([8, 10, 12]);
    const q = p - pick([3, 4, 5, 6]);
    const xs = pick([5, 6, 8, 10, 12]);
    const F = (p - q) * xs;
    const xt = xs - R(2, 3);
    const statement = `Une piscine propose deux tarifs. Tarif A : $${p}$ € par entrée. Tarif B : un abonnement annuel de $${F}$ €, puis $${q}$ € par entrée. On note $x$ le nombre d'entrées dans l'année, $f(x)$ le coût au tarif A et $g(x)$ le coût au tarif B.
1. Calculer le coût de $${xt}$ entrées avec chacun des deux tarifs.
2. Exprimer $f(x)$ et $g(x)$ en fonction de $x$.
3. Résoudre l'équation $f(x) = g(x)$.
4. Quel est le tarif le plus avantageux selon le nombre d'entrées ?`;
    const solution = `**1.** Au tarif A : $${p} \\times ${xt} = ${p * xt}$ €. Au tarif B : $${F} + ${q} \\times ${xt} = ${F + q * xt}$ €.

**2.** $f(x) = ${p}x$ et $g(x) = ${poly([q, F])}$.

**3.** $${p}x = ${poly([q, F])}$ équivaut à $${p - q}x = ${F}$, donc $x = ${xs}$.

**4.** $f(x) < g(x)$ équivaut à $x < ${xs}$. Le tarif A est le plus avantageux pour moins de $${xs}$ entrées, le tarif B pour plus de $${xs}$ entrées ; les deux coûtent le même prix pour $${xs}$ entrées.`;
    return { title: 'Comparer deux tarifs', chapterId: '2G3', statement, solution };
  }

  function exTangente() {
    const deg3 = Math.random() < 0.5;
    const a = pick([-1, 1, 2]);
    if (!deg3) {
      const s = pick([1, -1]);
      const x0 = R(-3, 3);
      const g = -2 * s * x0;
      const c = R(-4, 5);
      const f = poly([s, g, c]);
      const fa = s * a * a + g * a + c;
      const da = 2 * s * a + g;
      const yv = s * x0 * x0 + g * x0 + c;
      const statement = `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = ${f}$, et $\\mathcal{C}$ sa courbe représentative.
1. Calculer $f'(x)$.
2. Calculer $f(${a})$ et $f'(${a})$.
3. Déterminer l'équation réduite de la tangente à $\\mathcal{C}$ au point d'abscisse $${a}$.
4. En quel point de $\\mathcal{C}$ la tangente est-elle parallèle à l'axe des abscisses ?`;
      const eq = poly([da, fa - da * a]);
      const solution = `**1.** $f'(x) = ${poly([2 * s, g])}$.

**2.** $f(${a}) = ${fa}$ et $f'(${a}) = ${da}$.

**3.** La tangente a pour équation $y = f'(${a})(x - ${a < 0 ? `(${a})` : a}) + f(${a})$, soit $y = ${eq}$.

**4.** Il faut $f'(x) = 0$, soit $x = ${x0}$. Comme $f(${x0}) = ${yv}$, c'est le point de coordonnées $(${x0} ; ${yv})$.`;
      return { title: 'Nombre dérivé et tangente', chapterId: '1A2', statement, solution };
    }
    const b = pick([-3, 0, 3]), c = R(-4, 4), d = R(-3, 3);
    const f = poly([1, b, c, d]);
    const fa = a ** 3 + b * a * a + c * a + d;
    const da = 3 * a * a + 2 * b * a + c;
    const p0 = fa - da * a;
    const xB = a + 1;
    const onLine = Math.random() < 0.5;
    const yB = da * xB + p0 + (onLine ? 0 : pick([-2, 1, 3]));
    const statement = `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = ${f}$, et $\\mathcal{C}$ sa courbe représentative.
1. Calculer $f'(x)$.
2. Calculer $f(${a})$ et $f'(${a})$.
3. Déterminer l'équation réduite de la tangente à $\\mathcal{C}$ au point d'abscisse $${a}$.
4. Le point $B(${xB} ; ${yB})$ appartient-il à cette tangente ?`;
    const solution = `**1.** $f'(x) = ${poly([3, 2 * b, c])}$.

**2.** $f(${a}) = ${fa}$ et $f'(${a}) = ${da}$.

**3.** La tangente a pour équation $y = f'(${a})(x - ${a < 0 ? `(${a})` : a}) + f(${a})$, soit $y = ${poly([da, p0])}$.

**4.** Pour $x = ${xB}$, l'équation donne $y = ${da * xB + p0}$. ${onLine ? `C'est bien l'ordonnée de $B$ : le point appartient à la tangente.` : `L'ordonnée de $B$ vaut $${yB}$ : le point n'appartient pas à la tangente.`}`;
    return { title: 'Nombre dérivé et tangente', chapterId: '1A2', statement, solution };
  }

  function exEtudeCubique() {
    const [r, s] = pick([[-1, 1], [1, 3], [-2, 2], [0, 2], [-3, 1], [-1, 3], [0, 4], [-2, 0]]);
    const b = (-3 * (r + s)) / 2, c = 3 * r * s, d = R(-3, 5);
    const f = (x) => x ** 3 + b * x * x + c * x + d;
    const f0 = poly([1, b, c, d]);
    const A = r - 1, B = s + 1;
    const facD = `3${fac(r)}${fac(s)}`;
    const statement = `Soit $f$ la fonction définie sur $[${A} ; ${B}]$ par $f(x) = ${f0}$.
1. Calculer $f'(x)$.
2. Vérifier que, pour tout réel $x$ de $[${A} ; ${B}]$, $f'(x) = ${facD}$.
3. Étudier le signe de $f'(x)$ et dresser le tableau de variations de $f$ sur $[${A} ; ${B}]$.
4. Préciser les extremums locaux de $f$.`;
    const fig = varTable([A, r, s, B].map(plain), [f(A), f(r), f(s), f(B)], ['l', 'h', 'l', 'h']);
    const solution = `**1.** $f'(x) = ${poly([3, 2 * b, c])}$.

**2.** En développant : $${facD} = 3(${poly([1, -(r + s), r * s])}) = ${poly([3, 2 * b, c])}$.

**3.** $f'(x)$ s'annule en $${r}$ et $${s}$. Ce polynôme du second degré est positif en dehors de $]${r} ; ${s}[$ et négatif sur cet intervalle.
${fig}
**4.** $f$ admet un maximum local égal à $${f(r)}$, atteint en $${r}$, et un minimum local égal à $${f(s)}$, atteint en $${s}$.`;
    return { title: 'Étude d\'une fonction polynôme de degré 3', chapterId: '1A3', statement, solution };
  }

  function exVariable() {
    const [n1, n2] = pick([[1, 3], [2, 3], [1, 4], [2, 2]]);
    const n3 = 10 - n1 - n2;
    const g1 = pick([10, 8, 6]), g2 = pick([3, 2]), l = pick([1, 2]);
    const esp = (n1 * g1 + n2 * g2 - n3 * l) / 10;
    const fav = esp > 0 ? 'favorable au joueur' : esp < 0 ? 'défavorable au joueur' : 'équitable';
    const statement = `Une roue compte $10$ secteurs identiques : $${n1}$ ${n1 > 1 ? 'font' : 'fait'} gagner $${g1}$ €, $${n2}$ font gagner $${g2}$ € et les autres font perdre $${l}$ €. On note $X$ le gain algébrique du joueur après un lancer.
1. Quelles sont les valeurs prises par $X$ ?
2. Donner la loi de probabilité de $X$ sous la forme d'un tableau.
3. Calculer $P(X > 0)$.
4. Calculer l'espérance $E(X)$. Ce jeu est-il favorable au joueur ?`;
    const solution = `**1.** $X$ prend les valeurs $${-l}$, $${g2}$ et $${g1}$.

**2.**

| $x_i$ | $${-l}$ | $${g2}$ | $${g1}$ |
|:---:|:---:|:---:|:---:|
| $P(X = x_i)$ | $${dec(n3 / 10)}$ | $${dec(n2 / 10)}$ | $${dec(n1 / 10)}$ |

**3.** $P(X > 0) = ${dec(n2 / 10)} + ${dec(n1 / 10)} = ${dec((n1 + n2) / 10)}$.

**4.** $E(X) = ${-l} \\times ${dec(n3 / 10)} + ${g2} \\times ${dec(n2 / 10)} + ${g1} \\times ${dec(n1 / 10)} = ${dec(esp)}$. En moyenne, sur un grand nombre de lancers, le joueur ${esp > 0 ? `gagne $${dec(esp)}$ € par lancer` : esp < 0 ? `perd $${dec(-esp)}$ € par lancer` : 'ne gagne ni ne perd'} : le jeu est ${fav}.`;
    return { title: 'Variable aléatoire et espérance', chapterId: '1S2', statement, solution };
  }

  /** Trois emplacements par parcours : un exercice est tiré dans chacun */
  const PART2 = {
    'sans-spe': [
      [() => exArithmetique('fn'), exAffine],
      [() => exGeometrique('fn', true), exQuadratique],
      [exTest, exBernoulli, exTableauCroise, exNuage]
    ],
    techno: [
      [() => exArithmetique('idx'), () => exGeometrique('idx', false)],
      [exQuadratique, exTangente, exEtudeCubique],
      [exTest, exBernoulli, exNuage, exVariable]
    ]
  };

  window.MathsEaGenerators = {
    /** 12 questions à réponse courte, dans l'ordre des thèmes du programme */
    automatismes() {
      const out = [];
      AUTO_PLAN.forEach(([pool, n]) => {
        shuffle(pool).slice(0, n).forEach((gen) => {
          const q = gen();
          out.push(Object.assign(q, { tier: 1, id: `EA-auto-${gen.name}-${out.length}` }));
        });
      });
      return out;
    },

    /** Trois exercices sur 14 points : [{ title, chapterId, statement, solution, points, tier, id }] */
    part2(parcours) {
      const points = [5, 5, 4];
      return (PART2[parcours] || []).map((slot, i) => {
        const ex = pick(slot)();
        return Object.assign(ex, { points: points[i], tier: 2, id: `EA-${parcours}-${i + 1}` });
      });
    },

    /** Générateurs exposés pour les tests */
    _pools: { automatismes: AUTO_PLAN.map(([pool]) => pool), part2: PART2 }
  };
})();
