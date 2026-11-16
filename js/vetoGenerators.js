/**
 * Exercices aléatoires du niveau « Véto : prépa BCPST » (veto-XX), cycle Concours.
 *
 * Chargé à la demande avec ce niveau (index.html, level-bundles), APRÈS js/advancedGenerators.js,
 * js/lyceeGenerators.js et js/santeGenerators.js. Chaque tirage provient :
 *  - d'un générateur Licence ou CAPES couvrant la notion (MathsAdvancedGenerators.generate), à tous les paliers ;
 *  - d'un générateur de terminale (paliers 1 et 2 seulement, palier relevé d'un cran) ;
 *  - d'un générateur dédié (équations autonomes, lois à densité, régression…) ;
 *  - ou, avec une probabilité croissante avec le palier (STATIC_SHARE), de la banque statique
 *    (js/data/exercises_veto.js et js/data/exercises_veto_b.js) : la fonction renvoie alors null.
 * Les tirages de Licence, CAPES et terminale ne sont retenus que si leur titre figure dans la liste blanche
 * AUTORISES du chapitre, établie d'après le programme BCPST (notions de Licence ou de CAPES hors programme écartées).
 */
(function () {
  if (typeof window === 'undefined' || !window.MathsGenerators || !window.MathsGenUtils) return;
  const U = window.MathsGenUtils;
  const R = (a, b) => U.randInt(a, b);
  const pick = (arr) => U.randChoice(arr);
  const rd = (x, d = 6) => U.round(x, d);
  const inp = (x, d = 6) => String(rd(x, d));
  const D = (x, d = 4) => U.dec(x, d);

  function Q(chapterId, tier, title, skill, statement, answer, distractors, h1, h2, sol, exact, instruction) {
    const q = U.makeMcq(chapterId, tier, title, skill, statement, answer, distractors, h1, h2, sol);
    if (exact === null) q.keepMcq = true;
    else if (exact !== undefined) {
      q.exactAnswer = exact;
      if (instruction) q.exactInstruction = instruction;
    }
    return U.applyExactPolicy(q, tier);
  }

  const DEDICATED = {
    /** Partie entière, bornes, injection et surjection (fonctions définies plus bas) */
    'veto-01'(t, id) { return veto01Dedie(t, id); },
    /** Parité d'une fonction, logarithme décimal */
    'veto-04'(t, id) { return veto04Dedie(t, id); },
    /** a cos x + b sin x, notations arccos et arcsin, multiplicité, factorisation dans C[X], racines conjuguées */
    'veto-02'(t, id) {
      const TRIP = [[3, 4, 5], [4, 3, 5], [5, 12, 13], [12, 5, 13], [6, 8, 10], [8, 6, 10], [8, 15, 17], [15, 8, 17]];
      const sq = (x) => (x < 0 ? `(${x})^{2}` : `${x}^{2}`);
      const trig = (a, b) => U.poly([[a, '\\cos x'], [b, '\\sin x']]);
      // multiple rationnel de pi, n/d
      const piTex = (n, d) => {
        if (n === 0) return '0';
        const g = gcd(Math.abs(n), d), p = Math.abs(n) / g, q = d / g, s = n < 0 ? '-' : '';
        const num = p === 1 ? '\\pi' : `${p}\\pi`;
        return q === 1 ? s + num : `${s}\\dfrac{${num}}{${q}}`;
      };
      const fam = {
        amplitude() {
          const [x, y, r] = pick(TRIP), a = x * pick([1, -1]), b = y * pick([1, -1]);
          return Q(id, t, 'Transformer $a\\cos x + b\\sin x$', 'Mettre $a\\cos x + b\\sin x$ sous la forme $r\\cos(x - \\varphi)$',
            `Déterminer le réel $r > 0$ tel que, pour un réel $\\varphi$ bien choisi, $${trig(a, b)} = r\\cos(x - \\varphi)$ pour tout réel $x$.`,
            `$${r}$`, [`$${x * x + y * y}$`, `$${x + y}$`, `$${Math.abs(x - y)}$`],
            'Développe $r\\cos(x - \\varphi)$ et identifie les coefficients de $\\cos x$ et de $\\sin x$.',
            `On obtient $r\\cos\\varphi = ${a}$ et $r\\sin\\varphi = ${b}$ : élève au carré et additionne.`,
            `$r\\cos\\varphi = ${a}$ et $r\\sin\\varphi = ${b}$, donc $r^{2} = ${sq(a)} + ${sq(b)} = ${x * x + y * y}$ et, comme $r > 0$, $r = ${r}$.`, String(r));
        },
        phase() {
          const [m1, m2, base, d, c0, s0] = pick([
            ['\\sqrt{3}', '1', 'r2', 6, '\\dfrac{\\sqrt{3}}{2}', '\\dfrac{1}{2}'],
            ['1', '\\sqrt{3}', 'r2', 3, '\\dfrac{1}{2}', '\\dfrac{\\sqrt{3}}{2}'],
            ['1', '1', 'rs', 4, '\\dfrac{\\sqrt{2}}{2}', '\\dfrac{\\sqrt{2}}{2}']
          ]);
          const sx = pick([1, -1]), sy = pick([1, -1]), k = pick([1, 2, 3]);
          const mag = (m) => (k === 1 ? m : m === '1' ? String(k) : `${k}${m}`);
          const coef = (m, s) => (s < 0 ? '-' : '') + mag(m);
          const a2 = (m) => (m === '1' ? k * k : 3 * k * k);
          const rTex = base === 'r2' ? String(2 * k) : (k === 1 ? '\\sqrt{2}' : `${k}\\sqrt{2}`);
          const n = sy * (sx > 0 ? 1 : d - 1);
          const norm = (u) => (u > d ? u - 2 * d : u <= -d ? u + 2 * d : u);
          const ans = piTex(n, d);
          const sgn = (s, x) => (s < 0 ? '-' : '') + x;
          return Q(id, t, 'Angle dans $r\\cos(x - \\varphi)$', 'Mettre $a\\cos x + b\\sin x$ sous la forme $r\\cos(x - \\varphi)$',
            `On écrit $${U.poly([[coef(m1, sx), '\\cos x'], [coef(m2, sy), '\\sin x']])} = r\\cos(x - \\varphi)$ avec $r > 0$ et $\\varphi \\in \\,]-\\pi ; \\pi]$. Quelle est la valeur de $\\varphi$ ?`,
            `$${ans}$`, [`$${piTex(-n, d)}$`, `$${piTex(norm(d - n), d)}$`, `$${piTex(norm(n - d), d)}$`],
            'On a $r = \\sqrt{a^{2} + b^{2}}$, $\\cos\\varphi = \\dfrac{a}{r}$ et $\\sin\\varphi = \\dfrac{b}{r}$.',
            `Ici $r = ${rTex}$ ; les signes de $\\cos\\varphi$ et de $\\sin\\varphi$ indiquent le quart de cercle.`,
            `$r = \\sqrt{${a2(m1)} + ${a2(m2)}} = ${rTex}$, $\\cos\\varphi = ${sgn(sx, c0)}$ et $\\sin\\varphi = ${sgn(sy, s0)}$, donc $\\varphi = ${ans}$.`, null);
        },
        compte() {
          const [x, y, r] = pick(TRIP), a = x * pick([1, -1]), b = y * pick([1, -1]);
          const c = pick([r, -r, R(1, r - 1), -R(1, r - 1), r + R(1, 3), -(r + R(1, 3))]);
          const nb = Math.abs(c) > r ? 0 : Math.abs(c) === r ? 1 : 2;
          const sf = (p, q) => (p < 0 ? '-' : '') + fracTex(Math.abs(p), q);
          const concl = nb === 0 ? `$\\left|${sf(c, r)}\\right| > 1$ : il n'y a aucune solution.`
            : nb === 1 ? `Le cosinus ne prend la valeur $${sf(c, r)}$ qu'une fois par période : $x - \\varphi$ prend une seule valeur modulo $2\\pi$, d'où une seule solution.`
              : `$\\left|${sf(c, r)}\\right| < 1$ : le cosinus prend cette valeur deux fois par période, d'où deux solutions.`;
          return Q(id, t, 'Nombre de solutions de $a\\cos x + b\\sin x = c$', 'Résoudre une équation $a\\cos x + b\\sin x = c$',
            `Combien l'équation $${trig(a, b)} = ${c}$ a-t-elle de solutions dans $[0 ; 2\\pi[$ ?`,
            `$${nb}$`, [0, 1, 2, 4].filter((v) => v !== nb).map((v) => `$${v}$`),
            'Écris le membre de gauche sous la forme $r\\cos(x - \\varphi)$ avec $r = \\sqrt{a^{2} + b^{2}}$.',
            `On a $r = ${r}$ : compare la valeur absolue du second membre à $r$.`,
            `$r = \\sqrt{${sq(a)} + ${sq(b)}} = ${r}$, donc l'équation équivaut à $\\cos(x - \\varphi) = ${sf(c, r)}$. Quand $x$ décrit $[0 ; 2\\pi[$, $x - \\varphi$ décrit un intervalle de longueur $2\\pi$. ${concl}`, String(nb));
        },
        arc() {
          const isCos = Math.random() < 0.5;
          const list = isCos
            ? [['1', 0, 1], ['\\dfrac{\\sqrt{3}}{2}', 1, 6], ['\\dfrac{\\sqrt{2}}{2}', 1, 4], ['\\dfrac{1}{2}', 1, 3], ['0', 1, 2], ['-\\dfrac{1}{2}', 2, 3], ['-\\dfrac{\\sqrt{2}}{2}', 3, 4], ['-\\dfrac{\\sqrt{3}}{2}', 5, 6], ['-1', 1, 1]]
            : [['-1', -1, 2], ['-\\dfrac{\\sqrt{3}}{2}', -1, 3], ['-\\dfrac{\\sqrt{2}}{2}', -1, 4], ['-\\dfrac{1}{2}', -1, 6], ['0', 0, 1], ['\\dfrac{1}{2}', 1, 6], ['\\dfrac{\\sqrt{2}}{2}', 1, 4], ['\\dfrac{\\sqrt{3}}{2}', 1, 3], ['1', 1, 2]];
          const [y, n, d] = pick(list);
          const f = isCos ? '\\arccos' : '\\arcsin', fn = isCos ? '\\cos' : '\\sin';
          const itv = isCos ? '[0 ; \\pi]' : '\\left[-\\dfrac{\\pi}{2} ; \\dfrac{\\pi}{2}\\right]';
          const ans = piTex(n, d);
          const others = U.shuffleArray(list.filter((e) => e[1] / e[2] !== n / d)).map((e) => `$${piTex(e[1], e[2])}$`);
          const dist = (n !== 0 ? [`$${piTex(-n, d)}$`] : []).concat(others.filter((o) => o !== `$${piTex(-n, d)}$`)).slice(0, 3);
          return Q(id, t, `Valeur de $${f}$`, `Utiliser la notation $${f}$`,
            `Quelle est la valeur de $${f}\\left(${y}\\right)$ ?`,
            `$${ans}$`, dist,
            `$${f}\\,y$ est l'unique réel de $${itv}$ dont le ${isCos ? 'cosinus' : 'sinus'} vaut $y$.`,
            `Cherche parmi les angles remarquables de $${itv}$ celui qui convient.`,
            `$${fn}\\left(${ans}\\right) = ${y}$ et $${ans} \\in ${itv}$, donc $${f}\\left(${y}\\right) = ${ans}$.`, null);
        },
        ecriture() {
          const [p, q] = pick([[1, 3], [2, 3], [1, 4], [3, 4], [1, 5], [2, 5], [3, 5], [4, 5], [2, 7], [5, 7]]);
          const neg = Math.random() < 0.5, isCos = Math.random() < 0.5;
          const yTex = `${neg ? '-' : ''}\\dfrac{${p}}{${q}}`;
          const A = `${isCos ? '\\arccos' : '\\arcsin'}\\left(${yTex}\\right)`;
          const set = (...e) => `$\\left\\{${e.join(' ; ')}\\right\\}$`;
          let good, dist, h2, sol;
          if (isCos) {
            good = set(A, `2\\pi - ${A}`);
            dist = [set(A, `\\pi - ${A}`), set(A, `-${A}`), set(A)];
            h2 = 'La seconde famille est $-\\arccos y$ à $2\\pi$ près : ajoute la bonne période pour revenir dans $[0 ; 2\\pi[$.';
            sol = `$a = ${A} \\in [0 ; \\pi]$ convient, et $-a + 2k\\pi$ n'appartient à $[0 ; 2\\pi[$ que pour $k = 1$. Solutions : $a$ et $2\\pi - a$.`;
          } else if (!neg) {
            good = set(A, `\\pi - ${A}`);
            dist = [set(A, `-${A}`), set(A, `2\\pi - ${A}`), set(A)];
            h2 = 'Les deux familles sont $\\arcsin y$ et $\\pi - \\arcsin y$ à $2\\pi$ près : regarde lesquelles tombent dans $[0 ; 2\\pi[$.';
            sol = `$a = ${A} \\in \\left]0 ; \\dfrac{\\pi}{2}\\right[$ : les solutions dans $[0 ; 2\\pi[$ sont $a$ et $\\pi - a$.`;
          } else {
            good = set(`\\pi - ${A}`, `2\\pi + ${A}`);
            dist = [set(A, `\\pi - ${A}`), set(`-${A}`, `\\pi + ${A}`), set(`2\\pi + ${A}`)];
            h2 = 'Ici $\\arcsin y$ est négatif : ajoute la bonne période pour revenir dans $[0 ; 2\\pi[$.';
            sol = `$a = ${A} \\in \\left]-\\dfrac{\\pi}{2} ; 0\\right[$ n'appartient pas à $[0 ; 2\\pi[$ ; les solutions sont $\\pi - a$ et $2\\pi + a$.`;
          }
          return Q(id, t, 'Écrire des solutions avec arccos ou arcsin', 'Résoudre une équation trigonométrique à l\'aide de arccos ou arcsin',
            `Quel est l'ensemble des solutions de $${isCos ? '\\cos' : '\\sin'} x = ${yTex}$ dans $[0 ; 2\\pi[$ ?`,
            good, dist,
            isCos ? '$\\cos x = y$ équivaut à $x \\equiv \\arccos y \\ [2\\pi]$ ou $x \\equiv -\\arccos y \\ [2\\pi]$.'
              : '$\\sin x = y$ équivaut à $x \\equiv \\arcsin y \\ [2\\pi]$ ou $x \\equiv \\pi - \\arcsin y \\ [2\\pi]$.',
            h2, sol, null);
        },
        multiplicite() {
          const s = R(1, 5), m = R(1, 3), n = R(1, 3);
          let r; do { r = R(-5, 5); } while (r === 0);
          const trin = s === 1 ? 'X^{2} + 1' : `X^{2} + ${s * s}`;
          const lin = U.poly([[1, 'X'], [-r, '']]);
          const pw = (b, e) => (e === 1 ? `(${b})` : `(${b})^{${e}}`);
          const P = `${pw(trin, m)}${pw(lin, n)}`;
          const is = s === 1 ? 'i' : `${s}i`;
          const fact = `(X - ${is})${m > 1 ? `^{${m}}` : ''}(X + ${is})${m > 1 ? `^{${m}}` : ''}${pw(lin, n)}`;
          const k = R(0, 3);
          const ask = [`Quel est l'ordre de multiplicité de la racine $${is}$ de $P$ ?`, `Quel est l'ordre de multiplicité de la racine $${r}$ de $P$ ?`,
            'Quel est le plus petit entier $d$ tel que $P \\in \\mathbb{C}_{d}[X]$ ?', 'Combien $P$ a-t-il de racines complexes distinctes ?'][k];
          const val = [m, n, 2 * m + n, 3][k];
          const fin = [`La racine $${is}$ est d'ordre $${m}$.`, `La racine $${r}$ est d'ordre $${n}$.`,
            `$\\deg P = 2 \\times ${m} + ${n} = ${2 * m + n}$, donc le plus petit entier est $${2 * m + n}$.`, `Les racines distinctes sont $${is}$, $-${is}$ et $${r}$ : il y en a $3$.`][k];
          return Q(id, t, 'Racines et multiplicité dans $\\mathbb{C}[X]$', 'Déterminer les racines et leur multiplicité',
            `Soit $P = ${P}$. ${ask}`,
            `$${val}$`, [`$${val + 1}$`, `$${val + 2}$`, `$${val + 3}$`, `$${val > 1 ? val - 1 : val + 4}$`],
            `Factorise $${trin}$ dans $\\mathbb{C}[X]$.`,
            `On a $${trin} = (X - ${is})(X + ${is})$ : réécris $P$ comme produit de facteurs du premier degré.`,
            `$P = ${fact}$. ${fin}`, String(val));
        },
        factorisation() {
          let a; do { a = R(-4, 4); } while (a === 0);
          const p = R(-2, 2), q = R(1, 3), sum = p * p + q * q;
          const P = U.polyX([1, -2 * p - a, sum + 2 * p * a, -a * sum], 'X');
          const trin = U.polyX([1, -2 * p, sum], 'X');
          const rac = (u, v) => `(${U.poly([[1, 'X'], [-u, ''], [-v, 'i']])})`;
          const lin = (u) => `(${U.poly([[1, 'X'], [-u, '']])})`;
          const opt = (u, v, w) => `$${lin(u)}${rac(v, w)}${rac(v, -w)}$`;
          const donne = t <= 2;
          return Q(id, t, 'Factorisation dans $\\mathbb{C}[X]$', 'Factoriser un polynôme dans $\\mathbb{C}[X]$',
            `Quelle est la factorisation complète de $P = ${P}$ dans $\\mathbb{C}[X]$${donne ? `, sachant que $${a}$ est racine de $P$` : ''} ?`,
            opt(a, p, q), [opt(-a, p, q), opt(a, p, q + 1), opt(a, p + 1, q)],
            donne ? `Écris $P = ${lin(a)}Q$ avec $Q$ de degré 2 et détermine $Q$ par identification des coefficients.`
              : 'Cherche une racine évidente parmi les diviseurs entiers du terme constant, puis écris $P = (X - a)Q$ et identifie $Q$.',
            'Résous $Q = 0$ dans $\\mathbb{C}$ à l\'aide du discriminant : les racines sont conjuguées.',
            `$P = ${lin(a)}(${trin})$. Le trinôme a pour discriminant $\\Delta = ${-4 * q * q} < 0$, donc ses racines sont $${U.poly([[p, ''], [q, 'i']])}$ et $${U.poly([[p, ''], [-q, 'i']])}$. D'où $P = ${lin(a)}${rac(p, q)}${rac(p, -q)}$.`, null);
        },
        conjugue() {
          const p = pick([0, 0, 1, -1, 2, -2]), q = R(1, 3), s = p * p + q * q;
          let r; do { r = R(-5, 5); } while (r === 0);
          const K = -r * s * s;
          const z = U.poly([[p, ''], [q, 'i']]);
          const zb = U.poly([[p, ''], [-q, 'i']]);
          const trin = U.polyX([1, -2 * p, s], 'X');
          return Q(id, t, 'Racine double et racines conjuguées', 'Exploiter les racines conjuguées d\'un polynôme réel',
            `Soit $P$ un polynôme unitaire (coefficient dominant égal à 1) à coefficients réels, de degré 5, dont $${z}$ est racine double, et tel que $P(0) = ${K}$. Quelle est la racine réelle de $P$ ?`,
            `$${r}$`, [`$${-r}$`, `$${K}$`, `$${r + 1}$`, `$${r - 1}$`, `$${2 * r}$`],
            `$P$ est à coefficients réels : que dire de $${zb}$ et de sa multiplicité ?`,
            'Deux racines doubles comptent pour 4 racines : il reste une racine $r$, à déterminer avec la valeur de $P(0)$.',
            `$P$ est réel, donc $${zb}$ est aussi racine double. $P$ étant unitaire de degré 5, $P = (${trin})^{2}(X - r)$, car $(X - z)(X - \\overline{z}) = ${trin}$. Alors $P(0) = ${s}^{2} \\times (-r) = ${K}$, donc $r = ${r}$.`, String(r));
        }
      };
      const parPalier = {
        1: ['amplitude', 'arc', 'multiplicite'],
        2: ['amplitude', 'arc', 'ecriture', 'factorisation', 'multiplicite'],
        3: ['phase', 'compte', 'ecriture', 'factorisation', 'conjugue'],
        4: ['phase', 'compte', 'factorisation', 'conjugue']
      };
      return fam[pick(parPalier[t])]();
    },

    /** Intégrales généralisées : la nature se démontre par une primitive, puis comparaison ou équivalent de fonctions positives */
    'veto-05'(t, id) {
      const expo = (e, q) => (q === 1 ? String(e) : `${e}/${q}`);
      const pw = (n) => (n === 1 ? 'x' : `x^{${n}}`);
      const cf = (tex) => (tex === '1' ? '' : tex);
      if (t === 1 || (t === 2 && Math.random() < 0.5)) {
        const inf = t === 1;
        const [p, q] = inf
          ? pick([[2, 1], [3, 1], [4, 1], [5, 1], [3, 2], [5, 2], [7, 2], [4, 3], [5, 3], [7, 3], [5, 4], [7, 4]])
          : pick([[1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [1, 5], [2, 5], [3, 5], [4, 5]]);
        const c = R(1, 3), e = inf ? p - q : q - p;
        const v = fracTex(c * q, e);
        const dx = `${c === 1 ? '' : c + '\\,'}dx`;
        const a = expo(p, q);
        const borne = inf ? '$A > 1$' : '$\\varepsilon \\in ]0 ; 1[$';
        const seg = inf ? `\\displaystyle\\int_1^A \\dfrac{${dx}}{x^{${a}}}` : `\\displaystyle\\int_{\\varepsilon}^1 \\dfrac{${dx}}{x^{${a}}}`;
        const lim = inf ? 'A \\to +\\infty' : '\\varepsilon \\to 0^+';
        const I = inf ? `\\displaystyle\\int_1^{+\\infty} \\dfrac{${dx}}{x^{${a}}}` : `\\displaystyle\\int_0^1 \\dfrac{${dx}}{x^{${a}}}`;
        const reste = inf ? `A^{-${expo(e, q)}}` : `\\varepsilon^{${expo(e, q)}}`;
        const prim = inf ? `-${cf(fracTex(q, e))}x^{-${expo(e, q)}}` : `${cf(fracTex(q, e))}x^{${expo(e, q)}}`;
        return Q(id, t, inf ? 'Convergence en $+\\infty$ par une primitive' : 'Convergence en 0 par une primitive',
          'Démontrer la nature d\'une intégrale généralisée à l\'aide d\'une primitive',
          `Pour ${borne}, calculer $${seg}$, puis sa limite quand $${lim}$. Que vaut $${I}$ ?`,
          `$${v}$`,
          ['L\'intégrale diverge', `$${fracTex(c * q, p)}$`, `$${fracTex(c * e, q)}$`, inf ? `$${fracTex(c * p, e)}$` : `$${fracTex(c * q, e + q)}$`],
          inf ? 'Calculer l\'intégrale sur $[1 ; A]$ à l\'aide d\'une primitive de la puissance, puis passer à la limite.' : 'Calculer l\'intégrale sur $[\\varepsilon ; 1]$ à l\'aide d\'une primitive de la puissance, puis passer à la limite.',
          `Une primitive de $x^{-${a}}$ sur $]0 ; +\\infty[$ est $${prim}$.`,
          `Pour ${borne} : $${seg} = ${cf(v)}\\left(1 - ${reste}\\right)$. Comme $${reste} \\to 0$ quand $${lim}$, la limite est finie : l'intégrale converge et vaut $${v}$.`,
          fracInput(c * q, e));
      }
      if (t === 2) {
        const zero = Math.random() < 0.5;
        if (zero) {
          const n = R(2, 5), c = R(1, 3);
          const dx = `${c === 1 ? '' : c + '\\,'}dx`;
          return Q(id, t, 'Divergence en 0 par une primitive', 'Démontrer la nature d\'une intégrale généralisée à l\'aide d\'une primitive',
            `Quelle est la nature de $\\displaystyle\\int_0^1 \\dfrac{${dx}}{${pw(n)}}$ ?`,
            'L\'intégrale diverge',
            [`L'intégrale converge et vaut $${fracTex(c, n - 1)}$`, `L'intégrale converge et vaut $${fracTex(c, n)}$`, 'L\'intégrale vaut $0$'],
            'Calculer l\'intégrale sur $[\\varepsilon ; 1]$ à l\'aide d\'une primitive, puis faire tendre $\\varepsilon$ vers $0^+$.',
            `Une primitive de $x^{-${n}}$ sur $]0 ; +\\infty[$ est $-${cf(fracTex(1, n - 1))}x^{-${n - 1}}$.`,
            `Pour $\\varepsilon \\in ]0 ; 1[$ : $\\displaystyle\\int_{\\varepsilon}^1 \\dfrac{${dx}}{${pw(n)}} = ${cf(fracTex(c, n - 1))}\\left(\\varepsilon^{-${n - 1}} - 1\\right) \\to +\\infty$ quand $\\varepsilon \\to 0^+$ : l'intégrale diverge.`, null);
        }
        const [p, q] = pick([[1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [2, 5], [3, 5]]);
        const c = R(1, 3), e = q - p, a = expo(p, q);
        const dx = `${c === 1 ? '' : c + '\\,'}dx`;
        return Q(id, t, 'Divergence en $+\\infty$ par une primitive', 'Démontrer la nature d\'une intégrale généralisée à l\'aide d\'une primitive',
          `Quelle est la nature de $\\displaystyle\\int_1^{+\\infty} \\dfrac{${dx}}{x^{${a}}}$ ?`,
          'L\'intégrale diverge',
          [`L'intégrale converge et vaut $${fracTex(c * q, e)}$`, `L'intégrale converge et vaut $${fracTex(c * e, q)}$`, 'L\'intégrale converge car l\'intégrande tend vers $0$'],
          'Calculer l\'intégrale sur $[1 ; A]$ à l\'aide d\'une primitive, puis faire tendre $A$ vers $+\\infty$.',
          `Une primitive de $x^{-${a}}$ sur $]0 ; +\\infty[$ est $${cf(fracTex(q, e))}x^{${expo(e, q)}}$.`,
          `Pour $A > 1$ : $\\displaystyle\\int_1^A \\dfrac{${dx}}{x^{${a}}} = ${cf(fracTex(c * q, e))}\\left(A^{${expo(e, q)}} - 1\\right) \\to +\\infty$ quand $A \\to +\\infty$ : l'intégrale diverge.`, null);
      }
      if (t === 3) {
        const a = R(0, 3), c = R(1, 5);
        const num = a === 0 ? '1' : pw(a);
        if (Math.random() < 0.65) {
          const d = R(2, 5);
          const dn = d - 1;
          return Q(id, t, 'Comparaison : démontrer la nature de la majorante', 'Conclure par comparaison après avoir calculé une primitive',
            `On veut établir la convergence de $\\displaystyle\\int_1^{+\\infty} f(x)\\,dx$ avec $f(x) = \\dfrac{${num}}{${pw(a + d)} + ${c}}$. Pour $x \\geq 1$, on a $0 \\leq f(x) \\leq \\dfrac{1}{${pw(d)}}$.\nCalculer $\\displaystyle\\lim_{A \\to +\\infty} \\int_1^A \\dfrac{dx}{${pw(d)}}$.`,
            `$${fracTex(1, dn)}$`,
            [`$${fracTex(1, d)}$`, `$${dn}$`, `$${d}$`, `$${fracTex(1, d + 1)}$`],
            'Calculer l\'intégrale sur $[1 ; A]$ à l\'aide d\'une primitive de la puissance.',
            `Une primitive de $x^{-${d}}$ sur $[1 ; +\\infty[$ est $-${cf(fracTex(1, dn))}x^{-${dn}}$.`,
            `$\\displaystyle\\int_1^A \\dfrac{dx}{${pw(d)}} = ${cf(fracTex(1, dn))}\\left(1 - A^{-${dn}}\\right) \\to ${fracTex(1, dn)}$. Cette limite est finie : l'intégrale de la majorante converge, donc, par comparaison de fonctions positives, $\\displaystyle\\int_1^{+\\infty} f(x)\\,dx$ converge.`,
            fracInput(1, dn));
        }
        return Q(id, t, 'Comparaison : divergence', 'Conclure à la divergence par comparaison',
          `Quelle est la nature de $\\displaystyle\\int_1^{+\\infty} f(x)\\,dx$ avec $f(x) = \\dfrac{${num}}{${pw(a + 1)} + ${c}}$ ?`,
          `Elle diverge : $f(x) \\geq \\dfrac{1}{${1 + c}x}$ pour $x \\geq 1$ et $\\displaystyle\\int_1^A \\dfrac{dx}{x} = \\ln A \\to +\\infty$`,
          ['Elle converge car $f(x) \\to 0$ en $+\\infty$',
            'Elle converge : $f(x) \\leq \\dfrac{1}{x}$ pour $x \\geq 1$ et $\\displaystyle\\int_1^A \\dfrac{dx}{x}$ a une limite finie',
            'Elle diverge car $f$ n\'est pas continue sur $[1 ; +\\infty[$'],
          'Minorer $f$ par une fonction positive dont on sait calculer l\'intégrale sur $[1 ; A]$.',
          `Pour $x \\geq 1$, on a $${pw(a + 1)} + ${c} \\leq ${1 + c}${pw(a + 1)}$.`,
          `Pour $x \\geq 1$ : $${pw(a + 1)} + ${c} \\leq ${1 + c}${pw(a + 1)}$, donc $f(x) \\geq \\dfrac{1}{${1 + c}x} \\geq 0$. Or $\\displaystyle\\int_1^A \\dfrac{dx}{${1 + c}x} = \\dfrac{\\ln A}{${1 + c}} \\to +\\infty$ : par comparaison de fonctions positives, l'intégrale diverge.`, null);
      }
      const a = R(1, 3), d = R(1, 4), c = R(1, 5), e = R(1, 5);
      if (d >= 2 && Math.random() < 0.75) {
        // Saisie exacte : équivalent k/x^d de f, puis limite de l'intégrale de cette référence sur [1 ; A]
        const p = R(1, 3), q = R(1, 4), g0 = gcd(p, q), P = p / g0, Qd = q / g0, dn = d - 1;
        const co = (k, s) => `${k === 1 ? '' : k}${s}`;
        const nT = co(p, pw(a)), dT = co(q, pw(a + d));
        const eqv = `\\dfrac{${P}}{${co(Qd, pw(d))}}`;
        const ans = fracTex(P, Qd * dn);
        return Q(id, t, 'Équivalent : démontrer la nature de la référence', 'Conclure par équivalence après avoir calculé une primitive',
          `On étudie $\\displaystyle\\int_1^{+\\infty} f(x)\\,dx$ avec $f(x) = \\dfrac{${co(p, pw(a))} + ${e}}{${co(q, pw(a + d))} + ${c}}$.\nDéterminer l'équivalent $g(x) = \\dfrac{k}{x^{\\alpha}}$ de $f(x)$ en $+\\infty$, puis calculer $\\displaystyle\\lim_{A \\to +\\infty} \\int_1^A g(x)\\,dx$.`,
          `$${ans}$`,
          [`$${fracTex(P, Qd * d)}$`, `$${fracTex(1, dn)}$`, `$${fracTex(P, Qd)}$`, `$${fracTex(P * dn, Qd)}$`],
          'Garder le terme dominant du numérateur et celui du dénominateur pour obtenir $g$, puis intégrer $g$ sur $[1 ; A]$ à l\'aide d\'une primitive de la puissance.',
          `En $+\\infty$, le numérateur est équivalent à $${nT}$ et le dénominateur à $${dT}$ : simplifie leur quotient.`,
          `En $+\\infty$ : $f(x) \\sim \\dfrac{${nT}}{${dT}} = ${eqv} = g(x)$, et $f$ et $g$ sont positives sur $[1 ; +\\infty[$. Pour $A > 1$ : $\\displaystyle\\int_1^A ${eqv}\\,dx = ${cf(fracTex(P, Qd * dn))}\\left(1 - A^{-${dn}}\\right) \\to ${ans}$. Cette limite est finie : l'intégrale de la référence converge, donc, par équivalence de fonctions positives, $\\displaystyle\\int_1^{+\\infty} f(x)\\,dx$ converge.`,
          fracInput(P, Qd * dn));
      }
      const div = d === 1;
      const calc = div
        ? '$\\displaystyle\\int_1^A \\dfrac{dx}{x} = \\ln A \\to +\\infty$'
        : `$\\displaystyle\\int_1^A \\dfrac{dx}{${pw(d)}} = ${cf(fracTex(1, d - 1))}\\left(1 - A^{-${d - 1}}\\right) \\to ${fracTex(1, d - 1)}$`;
      const eqv = `\\dfrac{1}{${pw(d)}}`;
      const good = div
        ? `Elle diverge : $f(x) \\sim ${eqv}$ en $+\\infty$ et $\\displaystyle\\int_1^A \\dfrac{dx}{x} \\to +\\infty$`
        : `Elle converge : $f(x) \\sim ${eqv}$ en $+\\infty$ et $\\displaystyle\\int_1^A \\dfrac{dx}{${pw(d)}}$ a une limite finie`;
      const wrong = div
        ? [`Elle converge : $f(x) \\sim ${eqv}$ en $+\\infty$ et $\\displaystyle\\int_1^A \\dfrac{dx}{x}$ a une limite finie`, 'Elle converge car $f(x) \\to 0$ en $+\\infty$']
        : [`Elle diverge : $f(x) \\sim ${eqv}$ en $+\\infty$ et $\\displaystyle\\int_1^A \\dfrac{dx}{${pw(d)}} \\to +\\infty$`, 'Elle diverge car le numérateur tend vers $+\\infty$'];
      return Q(id, t, 'Équivalent : démontrer la nature de la référence', 'Conclure par équivalence après avoir calculé une primitive',
        `Quelle est la nature de $\\displaystyle\\int_1^{+\\infty} f(x)\\,dx$ avec $f(x) = \\dfrac{${pw(a)} + ${e}}{${pw(a + d)} + ${c}}$ ?`,
        good,
        [...wrong, 'On ne peut pas conclure sans primitive de $f$'],
        '$f$ est continue et positive sur $[1 ; +\\infty[$ : chercher un équivalent simple en $+\\infty$.',
        `Garder les termes dominants, puis calculer $\\displaystyle\\int_1^A \\dfrac{dx}{${pw(d)}}$ avec une primitive.`,
        `$f(x) \\sim ${eqv}$ en $+\\infty$, et ces fonctions sont positives. Or ${calc}. Par équivalence, ${div ? 'l\'intégrale diverge' : 'l\'intégrale converge'}.`, null);
    },

    /** Équations autonomes (études guidées : logistique, Gompertz, signe de F) et méthode d'Euler */
    'veto-06'(t, id) {
      const fam = pick(t <= 2 ? ['logi', 'logi', 'gomp', 'euler', 'euler'] : ['logi', 'stab', 'stab', 'gomp', 'euler']);
      if (fam === 'gomp') {
        const r = pick([0.1, 0.2, 0.4, 0.5, 0.8]), K = pick([100, 200, 500, 1000, 5000]);
        const quot = `\\dfrac{${K}}{N}`;
        if (t <= 2) {
          return Q(id, t, 'Modèle de Gompertz : équilibre', 'Déterminer l\'équilibre d\'un modèle de Gompertz',
            `Un effectif $N > 0$ suit le modèle de Gompertz $N' = ${D(r)}\\,N\\ln\\left(${quot}\\right)$. Quel est son point d'équilibre sur $]0 ; +\\infty[$ ?`,
            `$${K}$`, [`$\\dfrac{${K}}{e}$`, `$${K / 2}$`, `$${D(r)}$`],
            'Un point d\'équilibre annule le second membre.',
            `Puisque $N > 0$, il faut résoudre $\\ln\\left(${quot}\\right) = 0$.`,
            `$\\ln\\left(${quot}\\right) = 0 \\iff ${quot} = 1 \\iff N = ${K}$ : l'équilibre est $${K}$.`, String(K));
        }
        if (t === 3) {
          return Q(id, t, 'Modèle de Gompertz : vitesse maximale', 'Étudier la vitesse de croissance dans un modèle de Gompertz',
            `Un effectif suit $N' = \\varphi(N)$ avec $\\varphi(N) = ${D(r)}\\,N\\ln\\left(${quot}\\right)$ sur $]0 ; +\\infty[$. On admet que $\\varphi'(N) = ${D(r)}\\left(\\ln\\left(${quot}\\right) - 1\\right)$.\nPour quelle valeur de $N$ la vitesse de croissance est-elle maximale ?`,
            `$\\dfrac{${K}}{e}$`, [`$${K / 2}$`, `$${K}$`, `$\\dfrac{${K}}{e^{2}}$`],
            'Chercher où $\\varphi\'$ s\'annule, puis étudier son signe.',
            `Résoudre $\\ln\\left(${quot}\\right) = 1$.`,
            `$\\varphi'(N) > 0 \\iff \\ln\\left(${quot}\\right) > 1 \\iff N < \\dfrac{${K}}{e}$ : $\\varphi$ croît puis décroît, donc elle est maximale pour $N = \\dfrac{${K}}{e}$.`, null);
        }
        const m = R(1, 6), j = R(1, 3), s = pick([1, -1]);
        const sfrac = (p, q) => (p < 0 ? '-' : '') + fracTex(Math.abs(p), q);
        const z0 = s * m, den = 2 ** j;
        return Q(id, t, 'Modèle de Gompertz : étude guidée', 'Résoudre un modèle de Gompertz à l\'aide d\'une fonction auxiliaire',
          `Un effectif vérifie $N' = (\\ln 2)\\,N\\ln\\left(${quot}\\right)$, avec $N(0) = ${K}\\,e^{${z0}}$. On pose $z = \\ln\\left(\\dfrac{N}{${K}}\\right)$.\nÉtablir que $z' = -(\\ln 2)z$, puis calculer $z(${j})$.`,
          `$${sfrac(z0, den)}$`, [`$${z0}$`, `$${sfrac(-z0, den)}$`, `$${sfrac(z0, 2 * den)}$`, `$${z0 * den}$`],
          'Dériver $z$ : on a $z\' = \\dfrac{N\'}{N}$ ; exprimer ensuite le second membre à l\'aide de $z$.',
          `Les solutions de $z' = -(\\ln 2)z$ sont $z(t) = z(0)e^{-t\\ln 2}$, avec $z(0) = ${z0}$.`,
          `$z' = \\dfrac{N'}{N} = (\\ln 2)\\ln\\left(${quot}\\right) = -(\\ln 2)z$, donc $z(t) = z(0) \\times 2^{-t}$ avec $z(0) = ${z0}$. D'où $z(${j}) = \\dfrac{${z0}}{${den}} = ${sfrac(z0, den)}$. Comme $z(t) \\to 0$, $N(t) \\to ${K}$.`,
          fracInput(z0, den));
      }
      if (fam === 'euler') {
        if (t >= 3 && Math.random() < 0.4) {
          const r = R(1, 3), K = pick([10, 20, 50, 100]);
          return Q(id, t, 'Programmer la méthode d\'Euler', 'Programmer la méthode d\'Euler',
            `On souhaite programmer la méthode d'Euler $y_{n+1} = y_n + h\\,F(y_n)$ pour l'équation $y' = ${r === 1 ? '' : r}y\\left(1 - \\dfrac{y}{${K}}\\right)$.\n\`\`\`python\ndef F(y):\n    return ${r === 1 ? '' : r + ' * '}y * (1 - y / ${K})\n\ndef euler(y0, h, n):\n    y = y0\n    for k in range(n):\n        # ligne à compléter\n    return y\n\`\`\`\nQuelle ligne faut-il écrire dans la boucle ?`,
            '`y = y + h * F(y)`', ['`y = h * F(y)`', '`y = y + F(y)`', '`y = y + h * y`'],
            'Traduire la relation de récurrence : la nouvelle valeur dépend de l\'ancienne, du pas et de $F$.',
            'À droite du signe `=`, `y` désigne la valeur $y_n$.',
            'Dans la boucle, `y` vaut $y_n$ avant l\'affectation et $y_{n+1}$ après. La relation s\'écrit donc `y = y + h * F(y)`.', null);
        }
        const twoSteps = t === 2 || t === 4;
        const h = pick(t <= 2 ? [0.1, 0.2, 0.5] : [0.1, 0.2, 0.25, 0.5]);
        let F, Fx, Ftex, y0;
        if (t <= 2) {
          // 1 + a*h = 0 ferait tomber y_1 exactement sur l'équilibre (y_2 = y_1 : pas de deuxième pas à calculer)
          const a = pick([-2, -1, 1, 2, 3].filter((v) => rd(1 + v * h, 8) !== 0)), b = R(-3, 3);
          do { y0 = R(0, 4); } while (a * y0 + b === 0);
          Fx = (y) => a * y + b;
          F = (y) => rd(Fx(y), 8);
          const ay = a === 1 ? 'y' : a === -1 ? '-y' : `${a}y`;
          Ftex = b === 0 ? ay : `${ay} ${b < 0 ? '- ' + -b : '+ ' + b}`;
        } else {
          const r = pick([0.5, 1, 2]), K = pick([10, 20, 50, 100]);
          y0 = K / pick([2, 4, 5, 10]);
          Fx = (y) => r * y * (1 - y / K);
          F = (y) => rd(Fx(y), 8);
          Ftex = `${r === 1 ? '' : D(r) + '\\,'}y\\left(1 - \\dfrac{y}{${K}}\\right)`;
        }
        const f0 = F(y0), y1 = rd(y0 + h * f0, 8), f1 = F(y1), y2 = rd(y1 + h * f1, 8);
        // Valeurs non arrondies : « = » seulement si l'écriture décimale affichée est exacte, « ≈ » sinon
        const f0x = Fx(y0), y1x = y0 + h * f0x, f1x = Fx(y1x), y2x = y1x + h * f1x;
        const eg = (x, d) => (Math.abs(x - rd(x, d)) < 1e-10 ? '=' : '\\approx');
        const rounded = t >= 3 && twoSteps;
        const shown = (x) => D(rounded ? rd(x, 2) : x, rounded ? 2 : 6);
        const facteur = (x, d) => (x < 0 ? `(${D(x, d)})` : D(x, d));
        const ans = twoSteps ? y2 : y1;
        const stmt = `On approche la solution de $y' = F(y)$, avec $F(y) = ${Ftex}$ et $y(0) = ${D(y0)}$, par la méthode d'Euler de pas $h = ${D(h)}$, rappelée ici : $y_{n+1} = y_n + h\\,F(y_n)$, $y_0 = ${D(y0)}$.\nCalculer $y_{${twoSteps ? 2 : 1}}$${rounded ? ' (arrondir au centième)' : ''}.`;
        const dis = twoSteps
          ? [`$${shown(y1)}$`, `$${shown(y0 + 2 * h * f0)}$`, `$${shown(y1 + f1)}$`, `$${shown(y0 + f0 + f1)}$`]
          : [`$${shown(y0 + f0)}$`, `$${shown(h * f0)}$`, `$${shown(y0 - h * f0)}$`];
        const sol = twoSteps
          ? `$F(${D(y0)}) ${eg(f0x, 6)} ${D(f0, 6)}$, donc $y_1 = ${D(y0)} + ${D(h)} \\times ${facteur(f0, 6)} ${eg(y1x, 6)} ${D(y1, 6)}$. Puis $F(${D(y1, 6)}) ${eg(f1x, 8)} ${D(f1, 8)}$, donc $y_2 ${eg(f1x, 8)} ${D(y1, 6)} + ${D(h)} \\times ${facteur(f1, 8)} ${eg(y2x, 8)} ${D(y2, 8)}$${rounded ? `, soit environ $${shown(y2)}$` : ''}.`
          : `$F(${D(y0)}) ${eg(f0x, 6)} ${D(f0, 6)}$, donc $y_1 = ${D(y0)} + ${D(h)} \\times ${facteur(f0, 6)} ${eg(y1x, 6)} ${D(y1, 6)}$.`;
        return Q(id, t, 'Méthode d\'Euler', 'Appliquer la méthode d\'Euler',
          stmt, `$${shown(ans)}$`, dis,
          'Appliquer $y_{n+1} = y_n + h\\,F(y_n)$ en partant de $y_0$.',
          twoSteps ? `Le premier pas donne $y_1 = ${D(y1, 6)}$ ; recommencer à partir de cette valeur.` : `Calculer d'abord $F(${D(y0)}) = ${D(f0, 6)}$.`,
          sol, inp(rounded ? rd(ans, 2) : ans, 6), rounded ? undefined : 'Saisir la valeur décimale exacte (virgule décimale), par exemple 3,14.');
      }
      if (fam === 'logi') {
        const r = pick([0.2, 0.5, 0.8, 1.2, 2]), K = pick([100, 200, 500, 1000, 5000]);
        const askK = Math.random() < 0.5;
        if (askK) {
          return Q(id, t, 'Modèle logistique : équilibres', 'Déterminer les points d\'équilibre d\'une équation autonome',
            `Une population de bactéries (en milliers) vérifie $y' = ${D(r)}\\,y\\left(1 - \\dfrac{y}{${K}}\\right)$. Quel est le point d'équilibre non nul de cette équation ?`,
            `$${K}$`, [`$${D(r)}$`, `$${K / 2}$`, `$${D(rd(K * r))}$`],
            'Un point d\'équilibre est une valeur $y^*$ telle que $f(y^*) = 0$, la fonction constante $y^*$ étant alors solution.',
            'Le produit est nul si et seulement si l\'un des facteurs est nul.',
            `$${D(r)}\\,y\\left(1 - \\dfrac{y}{${K}}\\right) = 0 \\iff y = 0$ ou $y = ${K}$ : l'équilibre non nul est la capacité d'accueil $K = ${K}$.`, String(K));
        }
        const y0 = pick([K / 10, K / 5, K / 4]);
        const v = rd(r * y0 * (1 - y0 / K));
        return Q(id, t, 'Modèle logistique : vitesse de croissance', 'Exploiter une équation différentielle autonome',
          `Une population (en milliers d'individus) vérifie $y' = ${D(r)}\\,y\\left(1 - \\dfrac{y}{${K}}\\right)$. Quelle est sa vitesse de croissance $y'$ lorsque $y = ${D(y0)}$ ?`,
          `$${D(v)}$`, [`$${D(rd(r * y0))}$`, `$${D(rd(r * (1 - y0 / K)))}$`, `$${D(rd(r * y0 * y0 / K))}$`],
          'Remplacer $y$ par sa valeur dans le second membre.',
          `Calculer d'abord $1 - \\dfrac{${D(y0)}}{${K}} = ${D(rd(1 - y0 / K))}$.`,
          `$y' = ${D(r)} \\times ${D(y0)} \\times ${D(rd(1 - y0 / K))} = ${D(v)}$ milliers d'individus par unité de temps.`, inp(v));
      }
      // stabilité : y' = c (y - a)(y - b), a < b
      const a = R(-4, 2), b = a + R(1, 5), c = pick([1, 2, -1, -2, 3]);
      const askStable = c > 0 ? a : b; // f' (a) = c(a - b) < 0 si c > 0
      const other = askStable === a ? b : a;
      const fac = (r) => (r === 0 ? 'y' : `(y ${r < 0 ? '+ ' + -r : '- ' + r})`);
      const [fa1, fa2] = b === 0 ? [fac(b), fac(a)] : [fac(a), fac(b)];
      const poly = `${c === 1 ? '' : c === -1 ? '-' : c}${fa1}${fa2}`;
      const outs = c > 0 ? 'positive' : 'négative', ins = c > 0 ? 'négative' : 'positive';
      return Q(id, t, 'Stabilité d\'un équilibre', 'Étudier la stabilité des points d\'équilibre d\'une équation autonome',
        `On considère l'équation autonome $y' = f(y)$ avec $f(y) = ${poly}$. Ses points d'équilibre sont $${a}$ et $${b}$. On admet qu'une solution croît là où $f > 0$ et décroît là où $f < 0$. Lequel de ces équilibres est stable (les solutions partant près de lui s'en rapprochent) ?`,
        `$${askStable}$`, [`$${other}$`, 'Les deux', 'Aucun'],
        'Étudier le signe de $f$ de part et d\'autre de chaque équilibre : les solutions se rapprochent d\'un équilibre si elles croissent juste en dessous et décroissent juste au-dessus.',
        `$f$ est un polynôme du second degré de coefficient dominant $${c}$ : il a le signe de ce coefficient à l'extérieur de ses racines.`,
        `$f$ est ${outs} à l'extérieur de $[${a} ; ${b}]$ et ${ins} sur $]${a} ; ${b}[$. Juste en dessous de $${askStable}$, $f > 0$ et les solutions croissent ; juste au-dessus, $f < 0$ et elles décroissent : elles se rapprochent de $${askStable}$, qui est stable. Autour de $${other}$, elles s'en éloignent : $${other}$ est instable.`, null);
    },

    /** Géométrie de R^n : cas d'égalité de l'inégalité triangulaire (palier 2), projection orthogonale sur un sous-espace de dimension 2 et distance (palier 3) */
    'veto-10'(t, id) {
      const dot = (u, v) => u.reduce((s, x, i) => s + x * v[i], 0);
      const tup = (v) => `(${v.join(', ')})`;
      const cf = (k, s) => (k === 1 ? s : k === -1 ? `-${s}` : `${k}${s}`);
      const combo = (k, l) => `${cf(k, 'a')} ${l < 0 ? '-' : '+'} ${cf(Math.abs(l), 'b')}`;
      const nz = () => pick([-4, -3, -2, -1, 1, 2, 3, 4]);

      if (t === 2) {
        const x = [nz(), nz(), nz()];
        const l = pick([2, 3, 4, 5]);
        const lx = x.map((c) => l * c);
        if (R(0, 1) === 0) {
          const flip = lx.map((c, i) => (i === 1 ? -c : c));
          const orth = [x[1], -x[0], 0];
          return Q(id, t, 'Cas d\'égalité de l\'inégalité triangulaire', 'Connaître le cas d\'égalité de l\'inégalité triangulaire',
            `Dans $\\mathbb{R}^{3}$ muni du produit scalaire usuel, on pose $x = ${tup(x)}$. Pour lequel de ces vecteurs $y$ a-t-on $\\|x + y\\| = \\|x\\| + \\|y\\|$ ?`,
            `$y = ${tup(lx)}$`,
            [`$y = ${tup(lx.map((c) => -c))}$`, `$y = ${tup(orth)}$`, `$y = ${tup(flip)}$`],
            'Pour $x \\neq 0$, l\'égalité a lieu si et seulement si $y = \\lambda x$ avec $\\lambda \\geq 0$.',
            'Écarte les vecteurs non colinéaires à $x$, puis regarde le signe du coefficient de colinéarité.',
            `$${tup(lx)} = ${l}x$ avec $${l} > 0$, donc $\\|x + y\\| = ${l + 1}\\|x\\| = \\|x\\| + \\|y\\|$. Pour $y = ${-l}x$, on a $\\|x + y\\| = ${l === 2 ? '' : l - 1}\\|x\\|$, alors que $\\|x\\| + \\|y\\| = ${l + 1}\\|x\\|$ : colinéaires de sens contraires, il n'y a pas égalité. Les deux autres vecteurs ne sont pas colinéaires à $x$.`, null);
        }
        const ans = lx[2];
        const dist = [...new Set([-ans, x[2], ans + l, ans - l, ans + 1, ans - 1].filter((v) => v !== ans))].slice(0, 3);
        return Q(id, t, 'Égalité dans l\'inégalité triangulaire', 'Utiliser le cas d\'égalité de l\'inégalité triangulaire',
          `Dans $\\mathbb{R}^{3}$ muni du produit scalaire usuel, on pose $x = ${tup(x)}$ et $y = (${lx[0]}, ${lx[1]}, m)$. Pour quelle valeur du réel $m$ a-t-on $\\|x + y\\| = \\|x\\| + \\|y\\|$ ?`,
          `$m = ${ans}$`, dist.map((v) => `$m = ${v}$`),
          'L\'égalité impose $y = \\lambda x$ avec $\\lambda \\geq 0$.',
          `La première coordonnée donne $\\lambda = \\dfrac{${lx[0]}}{${x[0]}}$.`,
          `L'égalité a lieu si et seulement si $y = \\lambda x$ avec $\\lambda \\geq 0$ (car $x \\neq 0$). Les deux premières coordonnées donnent $\\lambda = ${l} > 0$, donc $m = ${l} \\times ${x[2] < 0 ? `(${x[2]})` : x[2]} = ${ans}$.`, String(ans));
      }

      if (t !== 3) return null;

      /** Vecteurs entiers non nuls de [-m ; m]^n orthogonaux à tous les vecteurs de vs */
      const orthoDe = (vs, n, m) => {
        const res = [];
        const rec = (p) => {
          if (p.length === n) { if (p.some((c) => c) && vs.every((u) => dot(p, u) === 0)) res.push(p); return; }
          for (let c = -m; c <= m; c++) rec(p.concat(c));
        };
        rec([]);
        return res;
      };
      const coords = (n, m) => Array.from({ length: n }, () => R(-m, m));
      const independants = (u, v) => u.some((_, i) => u.some((_, j) => u[i] * v[j] !== u[j] * v[i]));
      const lin = (k, l, a, b) => a.map((c, i) => k * c + l * b[i]);

      const variante = R(0, 2); // 0 : base orthogonale, 1 : base quelconque, 2 : distance
      const orthogonale = variante === 0 || (variante === 2 && R(0, 1) === 0);
      const n = orthogonale ? 4 : pick([3, 4]);
      let a, b, w;
      for (;;) {
        a = coords(n, 2);
        if (a.filter((c) => c).length < 2) continue;
        if (orthogonale) {
          const cand = orthoDe([a], n, 2).filter((v) => v.filter((c) => c).length >= 2);
          if (!cand.length) continue;
          b = pick(cand);
        } else {
          b = coords(n, 2);
          if (b.filter((c) => c).length < 2 || !independants(a, b) || dot(a, b) === 0) continue;
        }
        const perp = orthoDe([a, b], n, 3);
        if (!perp.length) continue;
        w = pick(perp);
        break;
      }
      const k = pick([-2, -1, 1, 2]), l = pick([-2, -1, 1, 2]);
      const p = lin(k, l, a, b);
      const v = p.map((c, i) => c + w[i]);
      const aa = dot(a, a), bb = dot(b, b), ab = dot(a, b), va = dot(v, a), vb = dot(v, b);
      const cadre = `Dans $\\mathbb{R}^{${n}}$ muni du produit scalaire usuel, on pose $a = ${tup(a)}$, $b = ${tup(b)}$, $v = ${tup(v)}$ et $F = \\mathrm{Vect}(a, b)$.`;
      const verif = `On vérifie que $v - p_F(v) = ${tup(w)}$ est orthogonal à $a$ et à $b$.`;
      const methodeOrtho = `Comme $\\langle a, b \\rangle = 0$, on a $p_F(v) = \\dfrac{\\langle v, a \\rangle}{\\|a\\|^{2}}a + \\dfrac{\\langle v, b \\rangle}{\\|b\\|^{2}}b$.`;
      const calculOrtho = `$\\langle v, a \\rangle = ${va}$, $\\|a\\|^{2} = ${aa}$, $\\langle v, b \\rangle = ${vb}$ et $\\|b\\|^{2} = ${bb}$, donc $p_F(v) = ${combo(k, l)} = ${tup(p)}$.`;
      const systeme = `$\\begin{cases} ${cf(aa, '\\alpha')} ${ab < 0 ? '-' : '+'} ${cf(Math.abs(ab), '\\beta')} = ${va} \\\\ ${cf(ab, '\\alpha')} + ${cf(bb, '\\beta')} = ${vb} \\end{cases}$`;
      const calculSyst = `En écrivant $p_F(v) = \\alpha a + \\beta b$, les conditions $\\langle v - p_F(v), a \\rangle = 0$ et $\\langle v - p_F(v), b \\rangle = 0$ donnent ${systeme}, de solution $\\alpha = ${k}$, $\\beta = ${l}$. Donc $p_F(v) = ${combo(k, l)} = ${tup(p)}$.`;

      if (variante === 2) {
        const N = dot(w, w);
        const rad = (m) => {
          let c = 1, s = m;
          for (let f = 2; f * f <= s; f++) while (s % (f * f) === 0) { s /= f * f; c *= f; }
          if (s === 1) return { tex: String(c), inp: String(c) };
          return { tex: `${c === 1 ? '' : c}\\sqrt{${s}}`, inp: `${c === 1 ? '' : c}sqrt(${s})` };
        };
        const ans = rad(N);
        const vals = [[Math.sqrt(dot(v, v)), rad(dot(v, v)).tex], [Math.sqrt(dot(p, p)), rad(dot(p, p)).tex], [N, String(N)], [Math.sqrt(N + 1), rad(N + 1).tex], [Math.sqrt(N + 2), rad(N + 2).tex], [Math.sqrt(N) + 1, `${rad(N).tex} + 1`]];
        const vus = [Math.sqrt(N).toFixed(6)];
        const dist = [];
        vals.forEach(([x, tex]) => { const c = x.toFixed(6); if (!vus.includes(c)) { vus.push(c); dist.push(`$${tex}$`); } });
        return Q(id, t, 'Distance à un sous-espace de dimension 2', 'Calculer la distance d\'un vecteur à un sous-espace',
          `${cadre} Calculer la distance de $v$ à $F$ (valeur exacte).`,
          `$${ans.tex}$`, dist.slice(0, 3),
          'La distance de $v$ à $F$ est la norme de $v - p_F(v)$, où $p_F(v)$ est le projeté orthogonal de $v$ sur $F$.',
          orthogonale ? methodeOrtho : `Écris $p_F(v) = \\alpha a + \\beta b$ : on trouve le système ${systeme}.`,
          `${orthogonale ? calculOrtho : calculSyst} Alors $v - p_F(v) = ${tup(w)}$ et $d(v, F) = \\sqrt{${N}} = ${ans.tex}$.`, ans.inp, 'Écrire la valeur exacte, par exemple 2sqrt(3).');
      }

      const coordStr = n === 4 ? '(x;y;z;t)' : '(x;y;z)';
      const instr = `Saisir les coordonnées de p(v) sous la forme ${coordStr}.`;
      const num = (u) => u.map((c) => c.toFixed(6)).join('|');
      const cands = [[w, tup(w)], [lin(k, -l, a, b), tup(lin(k, -l, a, b))], [p.map((c) => -c), tup(p.map((c) => -c))]];
      if (orthogonale) cands.unshift([lin(va, vb, a, b), tup(lin(va, vb, a, b))]);
      else {
        const d = aa * bb;
        const nums = a.map((c, i) => va * c * bb + vb * b[i] * aa);
        const ft = (x) => (x < 0 ? `-${fracTex(-x, d)}` : fracTex(x, d));
        cands.unshift([nums.map((x) => x / d), `(${nums.map(ft).join(', ')})`]);
      }
      cands.push([p.map((c, i) => (i === 0 ? c + 1 : c)), tup(p.map((c, i) => (i === 0 ? c + 1 : c)))]);
      const vus = [num(p)];
      const dist = [];
      cands.forEach(([u, tex]) => { if (!vus.includes(num(u))) { vus.push(num(u)); dist.push(`$p_F(v) = ${tex}$`); } });
      const entree = `(${p.join(';')})`;
      if (orthogonale) {
        return Q(id, t, 'Projection sur un sous-espace de dimension 2', 'Projeter orthogonalement sur un sous-espace muni d\'une base orthogonale',
          `${cadre} On remarque que $\\langle a, b \\rangle = 0$. Calculer le projeté orthogonal $p_F(v)$ de $v$ sur $F$.`,
          `$p_F(v) = ${tup(p)}$`, dist.slice(0, 3),
          methodeOrtho,
          `$\\langle v, a \\rangle = ${va}$ et $\\|a\\|^{2} = ${aa}$ ; fais le même calcul avec $b$.`,
          `${calculOrtho} ${verif}`, entree, instr);
      }
      return Q(id, t, 'Projection sur un plan de base non orthogonale', 'Projeter orthogonalement à l\'aide d\'un système',
        `${cadre} On note que $\\langle a, b \\rangle = ${ab} \\neq 0$. Calculer le projeté orthogonal $p_F(v)$ de $v$ sur $F$.`,
        `$p_F(v) = ${tup(p)}$`, dist.slice(0, 3),
        'Écris $p_F(v) = \\alpha a + \\beta b$ et impose que $v - p_F(v)$ soit orthogonal à $a$ et à $b$.',
        `Ces deux conditions donnent le système ${systeme}.`,
        `${calculSyst} ${verif}`, entree, instr);
    },

    /** Deux variables : dérivée de t ↦ f(x(t), y(t)) en contexte, nature d'un point critique par le signe de la différence */
    'veto-07'(t, id) {
      if (t >= 3 && Math.random() < 0.5) return veto07Extremum(t, id);
      return veto07Trajectoire(t, id);
    },

    /**
     * Variables à densité et théorèmes limites, différenciés par palier :
     * 1 lois usuelles ; 2 calculs de méthode ; 3 TCL, Moivre-Laplace, intervalle ;
     * 4 problèmes : tests de conformité (moyenne, proportion), dimensionnement, somme de variables.
     * Les risques de première et de deuxième espèce et la puissance sont hors programme.
     */
    'veto-12'(t, id) {
      // Valeurs de Φ(u) données dans l'énoncé, arrondies à 10^-4
      const PHI = [[0.5, 0.6915], [0.75, 0.7734], [1, 0.8413], [1.25, 0.8944], [1.5, 0.9332], [2, 0.9772], [2.5, 0.9938]];
      const AR4 = 'Saisir la valeur arrondie à $10^{-4}$.';
      const E = (x) => String(x).replace(/\B(?=(\d{3})+(?!\d))/g, '\\,');
      const PHI_TXT = (u, phi) => `$\\Phi(${D(u)}) \\approx ${D(phi)}$`;
      // Événement autour de la moyenne : Φ(u), 1 - Φ(u) ou 2Φ(u) - 1, avec les confusions classiques en distracteurs
      const evenement = (moy, ecart, u, phi) => {
        const sup = rd(moy + u * ecart), inf = rd(moy - u * ecart), type = R(0, 2);
        const val = [phi, rd(1 - phi, 4), rd(2 * phi - 1, 4)];
        const v = val[type];
        return {
          val: v,
          autres: val.filter((_, i) => i !== type).concat([rd(2 * (1 - phi), 4)]).map((x) => `$${D(x)}$`),
          txt: (X) => [`P(${X} \\leq ${E(D(sup))})`, `P(${X} \\geq ${E(D(sup))})`, `P(${E(D(inf))} \\leq ${X} \\leq ${E(D(sup))})`][type],
          z: [`P(Z \\leq ${D(u)})`, `P(Z \\geq ${D(u)})`, `P(-${D(u)} \\leq Z \\leq ${D(u)})`][type],
          fin: [`\\Phi(${D(u)})`, `1 - \\Phi(${D(u)})`, `2\\Phi(${D(u)}) - 1`][type] + ` \\approx ${D(v)}`
        };
      };
      const uPour = (pas, mult) => pick(PHI.filter(([x]) => Number.isInteger(rd(x * pas * mult, 6))));
      const COUPLES = [[6, 6], [12, 6], [15, 6], [8, 8], [16, 8], [20, 8], [10, 10], [20, 10], [25, 10], [30, 10], [12, 12], [24, 12], [30, 12], [15, 15], [30, 15], [20, 20], [40, 20]];
      const MESURES = ['la masse (en g) d\'un rongeur', 'la concentration (en mg/L) d\'un métabolite sanguin', 'la longueur (en mm) d\'une larve', 'la masse (en g) d\'un poussin'];
      const GRANDEURS = ['de la masse (en g) d\'un poussin', 'de la concentration (en mg/L) d\'un métabolite sanguin', 'de la longueur (en mm) d\'une larve', 'de la masse (en g) d\'un rongeur'];
      const CARACTERES = ['porteur d\'un parasite', 'vacciné', 'porteur du caractère étudié'];
      const CARACTERES_PL = ['porteurs d\'un parasite', 'vaccinés', 'porteurs du caractère étudié'];
      // Données d'un test de conformité dont la statistique observée vaut exactement z
      const donneesTest = (zs) => {
        const r = pick([6, 8, 10, 12, 15, 20]), m0 = pick([40, 60, 120, 150, 200, 300]);
        // Écart type au plus égal à la moitié de la moyenne : ordre de grandeur plausible pour une mesure biologique
        const q = pick([0.5, 1, 2, 2.5, 5].filter((x) => x * r <= m0 / 2));
        const z = rd(pick(zs) * pick([1, -1])), s = rd(q * r), xb = rd(m0 + z * q);
        const enonce = `Dans une population de référence, l'espérance ${pick(GRANDEURS)} vaut $m_0 = ${D(m0)}$. Sur un échantillon de $n = ${r * r}$ individus d'un élevage, on observe une moyenne $\\overline{x} = ${D(xb)}$ et un écart type empirique $s = ${D(s)}$. On teste $H_0 : m = m_0$ contre $H_1 : m \\neq m_0$.`;
        return { q, r, n: r * r, s, xb, m0, z, a: rd(Math.abs(z)), enonce };
      };
      const calculT = (d) => `$t_n = \\dfrac{${D(d.xb)} - ${D(d.m0)}}{${D(d.s)} / ${d.r}}$, avec $\\dfrac{${D(d.s)}}{\\sqrt{${d.n}}} = ${D(d.q)}$, donc $t_n = ${D(d.z)}$`;
      const fam = {
        centrer() {
          const mu = pick([50, 80, 120, 200, 400]), si = pick([2, 4, 8, 10, 20]), [u, phi] = pick(PHI);
          const e = evenement(mu, si, u, phi);
          return Q(id, t, 'Loi normale : centrer et réduire', 'Calculer une probabilité avec une loi normale',
            `Une mesure biologique $X$ suit la loi normale $\\mathcal{N}(${mu}, ${si * si})$ (espérance $${mu}$, variance $${si * si}$). On donne ${PHI_TXT(u, phi)}, où $\\Phi$ est la fonction de répartition de $\\mathcal{N}(0, 1)$. Calculer $${e.txt('X')}$, arrondie à $10^{-4}$.`,
            `$${D(e.val)}$`, e.autres,
            'Centre et réduis : $Z = \\dfrac{X - \\mu}{\\sigma}$ suit $\\mathcal{N}(0, 1)$, où $\\sigma$ est la racine carrée de la variance.',
            `Ici $\\sigma = ${si}$ : traduis l'événement à l'aide de $Z$.`,
            `$\\sigma = ${si}$ et $Z = \\dfrac{X - ${mu}}{${si}}$, donc $${e.txt('X')} = ${e.z} = ${e.fin}$.`, inp(e.val, 4), AR4);
        },
        mediane() {
          const lam = pick([0.05, 0.1, 0.2, 0.25, 0.5, 2]), m = rd(Math.LN2 / lam, 2);
          return Q(id, t, 'Médiane d\'une loi exponentielle', 'Calculer une médiane avec la loi exponentielle',
            `La durée de séjour $T$ (en jours) d'un animal sur un site suit la loi exponentielle de paramètre $\\lambda = ${D(lam)}$. Déterminer la médiane de $T$, c'est-à-dire le réel $m$ tel que $P(T \\leq m) = \\dfrac{1}{2}$, arrondie au centième.`,
            `$${D(m)}$`, [`$${D(rd(1 / lam, 2))}$`, `$${D(rd(2 / lam, 2))}$`, `$${D(rd(Math.LN2 * lam, 2))}$`],
            'Écris $F(m) = \\dfrac{1}{2}$ avec $F(x) = 1 - e^{-\\lambda x}$.',
            'Cette équation donne $e^{-\\lambda m} = \\dfrac{1}{2}$ : applique le logarithme.',
            `$1 - e^{-\\lambda m} = \\dfrac{1}{2} \\iff m = \\dfrac{\\ln 2}{\\lambda} = \\dfrac{\\ln 2}{${D(lam)}} \\approx ${D(m)}$ ${m < 2 ? 'jour' : 'jours'}.`, inp(m, 2), 'Saisir la valeur arrondie au centième.');
        },
        sommeNormales() {
          const [a, b, s] = pick([[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15], [12, 16, 20]]);
          const m1 = pick([20, 40, 60, 100]), m2 = pick([30, 50, 80, 150]);
          const [u, phi] = uPour(s, 1);
          const e = evenement(m1 + m2, s, u, phi);
          return Q(id, t, 'Somme de lois normales indépendantes', 'Utiliser la stabilité de la loi normale par somme',
            `Les masses $X$ et $Y$ de deux organes sont indépendantes, avec $X \\sim \\mathcal{N}(${m1}, ${a * a})$ et $Y \\sim \\mathcal{N}(${m2}, ${b * b})$. On donne ${PHI_TXT(u, phi)}. Calculer $${e.txt('X + Y')}$, arrondie à $10^{-4}$.`,
            `$${D(e.val)}$`, e.autres,
            'Une somme de deux lois normales indépendantes suit une loi normale : additionne les espérances et les variances.',
            `Ici $X + Y$ a pour espérance $${m1 + m2}$ : calcule sa variance, puis son écart type.`,
            `$X + Y \\sim \\mathcal{N}(${m1 + m2}, ${s * s})$, d'écart type $${s}$. Avec $Z = \\dfrac{X + Y - ${m1 + m2}}{${s}}$, on obtient $${e.txt('X + Y')} = ${e.z} = ${e.fin}$.`, inp(e.val, 4), AR4);
        },
        tailleBienayme() {
          const eps = pick([0.1, 0.05, 0.04, 0.02]), del = pick([0.1, 0.05, 0.2, 0.25]);
          const ceil = (x) => Math.ceil(rd(x, 6));
          const nm = ceil(1 / (4 * eps * eps * del));
          return Q(id, t, 'Taille d\'échantillon par Bienaymé-Tchebychev', 'Dimensionner un échantillon',
            `On estime la proportion $p$ d'animaux porteurs d'un caractère par la fréquence $F_n$ observée sur $n$ animaux. À l'aide de l'inégalité de Bienaymé-Tchebychev et de la majoration $p(1 - p) \\leq \\dfrac{1}{4}$, déterminer le plus petit entier $n$ qui garantit $P(|F_n - p| \\geq ${D(eps)}) \\leq ${D(del)}$.`,
            `$${E(nm)}$`, [`$${E(ceil(1 / (eps * eps * del)))}$`, `$${E(ceil(1 / (2 * eps * eps * del)))}$`, `$${E(ceil(1 / (4 * eps * del)))}$`],
            'Calcule $V(F_n)$ en fonction de $n$, puis applique l\'inégalité de Bienaymé-Tchebychev.',
            '$V(F_n) = \\dfrac{p(1 - p)}{n} \\leq \\dfrac{1}{4n}$ : il reste à majorer par la probabilité demandée.',
            `$P(|F_n - p| \\geq ${D(eps)}) \\leq \\dfrac{1}{4n \\times ${D(rd(eps * eps, 6), 6)}}$. Il suffit que ce majorant soit au plus $${D(del)}$, soit $n \\geq \\dfrac{1}{4 \\times ${D(rd(eps * eps, 6), 6)} \\times ${D(del)}}$, d'où $n = ${E(nm)}$.`, String(nm));
        },
        tcl() {
          const [si, r] = pick(COUPLES), s = rd(si / r), m = pick([120, 150, 200, 250, 300, 400]), n = r * r;
          const [u, phi] = uPour(s, 10);
          const e = evenement(m, s, u, phi);
          return Q(id, t, 'Théorème central limite', 'Approcher la loi d\'une moyenne empirique',
            `On mesure ${pick(MESURES)} sur $n = ${n}$ individus. Les mesures sont indépendantes, de même loi (non supposée normale), d'espérance $${m}$ et d'écart type $${si}$. On note $\\overline{X}_n$ leur moyenne. On donne ${PHI_TXT(u, phi)}. À l'aide du théorème central limite, donner une valeur approchée de $${e.txt('\\overline{X}_n')}$, arrondie à $10^{-4}$.`,
            `$${D(e.val)}$`, e.autres,
            'Le théorème central limite permet d\'approcher la loi de $\\dfrac{\\overline{X}_n - m}{\\sigma / \\sqrt{n}}$ par $\\mathcal{N}(0, 1)$.',
            `Ici $\\dfrac{\\sigma}{\\sqrt{n}} = \\dfrac{${si}}{${r}}$ : traduis l'événement sur la variable centrée réduite.`,
            `$\\dfrac{\\sigma}{\\sqrt{n}} = ${D(s)}$, donc $Z = ${s === 1 ? `\\overline{X}_n - ${m}` : `\\dfrac{\\overline{X}_n - ${m}}{${D(s)}}`}$ suit approximativement $\\mathcal{N}(0, 1)$ et $${e.txt('\\overline{X}_n')} \\approx ${e.z} = ${e.fin}$.`, inp(e.val, 4), AR4);
        },
        moivre() {
          const [n, p, sd] = pick([[100, 0.5, 5], [400, 0.5, 10], [144, 0.5, 6], [196, 0.5, 7], [900, 0.5, 15], [100, 0.2, 4], [225, 0.2, 6], [400, 0.2, 8], [625, 0.2, 10], [100, 0.1, 3], [400, 0.1, 6], [900, 0.1, 9]]);
          const mu = rd(n * p), [u, phi] = uPour(sd, 1), e = evenement(mu, sd, u, phi);
          return Q(id, t, 'Théorème de Moivre-Laplace', 'Approcher une loi binomiale par une loi normale',
            `Dans un élevage, chaque animal est ${pick(CARACTERES)} avec la probabilité $p = ${D(p)}$, indépendamment des autres. On note $X$ le nombre de ces animaux parmi $n = ${n}$. On donne ${PHI_TXT(u, phi)}. À l'aide du théorème de Moivre-Laplace (approximation par une loi normale, sans correction de continuité), donner une valeur approchée de $${e.txt('X')}$, arrondie à $10^{-4}$.`,
            `$${D(e.val)}$`, e.autres,
            'Le théorème de Moivre-Laplace permet d\'approcher la loi de $\\dfrac{X - np}{\\sqrt{np(1 - p)}}$ par $\\mathcal{N}(0, 1)$.',
            `Ici $np = ${D(mu)}$ : calcule $np(1 - p)$ et son écart type, puis traduis l'événement.`,
            `$X \\sim \\mathcal{B}(${n}, ${D(p)})$, avec $np = ${D(mu)}$ et $\\sqrt{np(1 - p)} = ${sd}$. Avec $Z = \\dfrac{X - ${D(mu)}}{${sd}}$, on obtient $${e.txt('X')} \\approx ${e.z} = ${e.fin}$.`, inp(e.val, 4), AR4);
        },
        intervalle() {
          const r = pick([6, 7, 8, 10, 12, 15, 20]), n = r * r, xb = pick([45, 60, 120, 180, 350, 412]);
          const q = pick([0.5, 1, 2, 2.5, 4, 5].filter((x) => x * r <= xb / 2)), s = rd(q * r);
          const h = rd(1.96 * q), sup = rd(xb + h), inf = rd(xb - h);
          const ask = pick(['sup', 'inf', 'h']);
          const dist = [rd(1.96 * s), q, rd(1.96 * q / r, 2)];
          const conv = (v) => (ask === 'sup' ? rd(xb + v, 2) : ask === 'inf' ? rd(xb - v, 2) : v);
          const lib = { sup: 'la borne supérieure', inf: 'la borne inférieure', h: 'la demi-largeur' }[ask];
          const v = ask === 'sup' ? sup : ask === 'inf' ? inf : h;
          return Q(id, t, 'Intervalle pour une espérance', 'Encadrer une espérance grâce au théorème central limite',
            `Sur $n = ${n}$ animaux, on observe pour ${pick(MESURES)} une moyenne $\\overline{x} = ${xb}$ et un écart type empirique $s = ${D(s)}$. L'espérance $m$ est inconnue. À l'aide de la seconde forme du théorème central limite et de $P(|Z| \\leq 1{,}96) \\approx 0{,}95$ pour $Z \\sim \\mathcal{N}(0, 1)$, déterminer ${lib} de l'intervalle de confiance asymptotique de $m$ au niveau $95\\,\\%$.`,
            `$${D(v)}$`, dist.map((x) => `$${D(conv(x))}$`),
            'La seconde forme du théorème central limite remplace $\\sigma$ par $S_n$ : l\'intervalle est centré en $\\overline{x}$.',
            `La demi-largeur est $1{,}96\\,\\dfrac{s}{\\sqrt{n}}$, avec $\\sqrt{n} = ${r}$.`,
            `$1{,}96 \\times \\dfrac{${D(s)}}{${r}} = 1{,}96 \\times ${D(q)} = ${D(h)}$. L'intervalle est $[${D(inf)} ; ${D(sup)}]$, donc ${lib} vaut $${D(v)}$.`, inp(v, 4));
        },
        testMoyenne() {
          if (Math.random() < 0.4) {
            const d = donneesTest([0.6, 1.2, 1.5, 1.8, 2.2, 2.5, 3, 3.5]);
            return Q(id, t, 'Test de conformité : statistique', 'Calculer la statistique d\'un test de conformité à la moyenne',
              `${d.enonce} Calculer la valeur observée $t_n$ de la statistique $T_n = \\dfrac{\\overline{X}_n - m_0}{S_n / \\sqrt{n}}$.`,
              `$${D(d.z)}$`, [`$${D(-d.z)}$`, `$${D(rd(d.z / d.r, 2))}$`, `$${D(rd(d.z * d.r))}$`],
              'Remplace $\\overline{X}_n$ et $S_n$ par leurs valeurs observées dans la statistique.',
              `Le dénominateur vaut $\\dfrac{${D(d.s)}}{\\sqrt{${d.n}}}$, avec $\\sqrt{${d.n}} = ${d.r}$.`,
              `${calculT(d)}.`, inp(d.z, 4));
          }
          const d = donneesTest(Math.random() < 0.5 ? [2.2, 2.5, 3, 3.5] : [0.6, 1.2, 1.5, 1.8]);
          const rej = d.a > 1.96, a = D(d.a);
          const ok = rej ? `On rejette $H_0$ au seuil de 5 % : $|t_n| = ${a} > 1{,}96$.` : `On ne rejette pas $H_0$ au seuil de 5 % : $|t_n| = ${a} \\leq 1{,}96$.`;
          const autres = rej
            ? [`On ne rejette pas $H_0$ au seuil de 5 % : $|t_n| = ${a} \\leq 1{,}96$.`, `On ne rejette pas $H_0$ : $|t_n| = ${D(rd(d.a / d.r, 2))} \\leq 1{,}96$.`, 'On a démontré que $m = m_0$.']
            : [`On rejette $H_0$ au seuil de 5 % : $|t_n| = ${D(rd(d.a * d.r))} > 1{,}96$.`, 'On rejette $H_0$, car $\\overline{x} \\neq m_0$.', 'On a démontré que $m = m_0$.'];
          return Q(id, t, 'Test de conformité à la moyenne', 'Conclure un test de conformité à la moyenne',
            `${d.enonce} Pour $Z \\sim \\mathcal{N}(0, 1)$, on a $P(|Z| \\leq 1{,}96) \\approx 0{,}95$. Quelle est la conclusion du test au seuil de 5 % ?`,
            ok, autres,
            'Sous $H_0$, $T_n = \\dfrac{\\overline{X}_n - m_0}{S_n / \\sqrt{n}}$ suit approximativement $\\mathcal{N}(0, 1)$ : calcule sa valeur observée.',
            `Le dénominateur vaut $\\dfrac{${D(d.s)}}{${d.r}}$ ; compare ensuite $|t_n|$ à $1{,}96$.`,
            `${calculT(d)}. ${rej ? `Comme $|t_n| > 1{,}96$, on rejette $H_0$ au seuil de 5 %.` : `Comme $|t_n| \\leq 1{,}96$, on ne rejette pas $H_0$ au seuil de 5 %, ce qui ne prouve pas que $m = m_0$.`}`, null);
        },
        testSeuils() {
          const groupe = pick([[1.2, 1.5, 1.8], [2.1, 2.2, 2.4, 2.5], [2.7, 2.8, 3, 3.2, 3.5]]);
          const d = donneesTest(groupe), a = d.a;
          const R5 = 'On rejette $H_0$ au seuil de 5 % et au seuil de 1 %.', R51 = 'On rejette $H_0$ au seuil de 5 %, mais pas au seuil de 1 %.';
          const R1 = 'On rejette $H_0$ au seuil de 1 %, mais pas au seuil de 5 %.', R0 = 'On ne rejette $H_0$ à aucun de ces deux seuils.';
          const ok = a > 2.58 ? R5 : a > 1.96 ? R51 : R0;
          return Q(id, t, 'Test de conformité : deux seuils', 'Comparer les conclusions d\'un test selon le seuil',
            `${d.enonce} Pour $Z \\sim \\mathcal{N}(0, 1)$, on a $P(|Z| \\leq 1{,}96) \\approx 0{,}95$ et $P(|Z| \\leq 2{,}58) \\approx 0{,}99$. Quelle est la conclusion du test ?`,
            ok, [R5, R51, R1, R0].filter((x) => x !== ok),
            'Calcule la valeur observée $t_n$ de $T_n = \\dfrac{\\overline{X}_n - m_0}{S_n / \\sqrt{n}}$.',
            'Compare $|t_n|$ à $1{,}96$ pour le seuil de 5 %, puis à $2{,}58$ pour le seuil de 1 %.',
            `${calculT(d)}, d'où $|t_n| = ${D(a)}$. ${a > 2.58 ? `Comme $|t_n| > 2{,}58 > 1{,}96$, on rejette $H_0$ aux deux seuils.` : a > 1.96 ? `Comme $1{,}96 < |t_n| \\leq 2{,}58$, on rejette $H_0$ au seuil de 5 %, mais pas au seuil de 1 %.` : `Comme $|t_n| \\leq 1{,}96 < 2{,}58$, on ne rejette $H_0$ à aucun des deux seuils.`}`, null);
        },
        testProportion() {
          const n = pick([100, 400, 1600, 2500, 10000]), r = Math.sqrt(n), d = rd(0.98 / r), p0 = pick([0.1, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6]);
          const carac = pick(CARACTERES_PL);
          const hyp = `On teste $H_0 : p = p_0$ contre $H_1 : p \\neq p_0$, avec $p_0 = ${D(p0)}$, où $p$ est la proportion d'animaux ${carac} dans une population`;
          const majo = 'Comme l\'écart type empirique d\'une proportion vérifie $S_n = \\sqrt{F_n(1 - F_n)} \\leq \\dfrac{1}{2}$, on applique le test par majoration de l\'écart type.';
          const h1 = 'Pour une proportion, $S_n \\leq \\dfrac{1}{2}$ : au seuil de 5 %, le rejet a lieu quand $|f - p_0|$ dépasse $1{,}96 \\times \\dfrac{1/2}{\\sqrt{n}}$.';
          if (Math.random() < 0.4) {
            return Q(id, t, 'Test sur une proportion : valeur critique', 'Déterminer la règle de décision d\'un test sur une proportion',
              `${hyp}, sur un échantillon de $n = ${E(n)}$ animaux. ${majo} Déterminer le réel $d$ tel qu'on rejette $H_0$ au seuil de 5 % lorsque $|f - ${D(p0)}| > d$ ($f$ est la fréquence observée, et $P(|Z| \\leq 1{,}96) \\approx 0{,}95$ pour $Z \\sim \\mathcal{N}(0, 1)$).`,
              `$${D(d, 6)}$`, [`$${D(rd(1.96 / r), 6)}$`, `$${D(rd(0.5 / r), 6)}$`, `$${D(rd(0.98 / n, 8), 8)}$`],
              h1,
              `Ici $\\sqrt{n} = ${r}$ : remplace dans cette expression.`,
              `$d = 1{,}96 \\times \\dfrac{1/2}{\\sqrt{${E(n)}}} = \\dfrac{0{,}98}{${r}} = ${D(d, 6)}$.`, inp(d, 6));
          }
          const facteur = pick([0.5, 0.7, 1.4, 1.6, 2]), sens = pick([1, -1]);
          let k = Math.round(n * (p0 + sens * facteur * d));
          if (k <= 0 || k >= n) k = Math.round(n * (p0 - sens * facteur * d));
          // n divise 10^6 pour chaque taille retenue : f et l'écart s'écrivent exactement avec six décimales
          const f = rd(k / n, 6), ec = rd(Math.abs(f - p0), 6), rej = ec > d;
          const okT = rej ? `On rejette $H_0$ au seuil de 5 % : $|f - ${D(p0)}| = ${D(ec, 6)} > ${D(d, 6)}$.` : `On ne rejette pas $H_0$ au seuil de 5 % : $|f - ${D(p0)}| = ${D(ec, 6)} \\leq ${D(d, 6)}$.`;
          const autres = rej
            ? [`On ne rejette pas $H_0$ au seuil de 5 % : $|f - ${D(p0)}| = ${D(ec, 6)} \\leq ${D(d, 6)}$.`, 'On a démontré que $p \\neq p_0$ avec certitude.', `On ne rejette pas $H_0$, car $f$ et $${D(p0)}$ sont des proportions.`]
            : [`On rejette $H_0$ au seuil de 5 % : $|f - ${D(p0)}| = ${D(ec, 6)} > ${D(d, 6)}$.`, `On rejette $H_0$, car $f \\neq ${D(p0)}$.`, `On a démontré que $p = ${D(p0)}$.`];
          return Q(id, t, 'Test de conformité d\'une proportion', 'Conclure un test sur une proportion par majoration de l\'écart type',
            `${hyp}. Sur $n = ${E(n)}$ animaux observés, $${E(k)}$ sont ${carac}. ${majo} On a $P(|Z| \\leq 1{,}96) \\approx 0{,}95$ pour $Z \\sim \\mathcal{N}(0, 1)$. Quelle est la conclusion du test au seuil de 5 % ?`,
            okT, autres,
            h1,
            `Calcule la fréquence observée $f = \\dfrac{${E(k)}}{${E(n)}}$, puis compare $|f - ${D(p0)}|$ à la borne.`,
            `$f = ${D(f, 6)}$ et $|f - ${D(p0)}| = ${D(ec, 6)}$. La borne vaut $\\dfrac{0{,}98}{\\sqrt{${E(n)}}} = ${D(d, 6)}$. ${rej ? 'L\'écart dépasse cette borne : on rejette $H_0$ au seuil de 5 %.' : 'L\'écart ne dépasse pas cette borne : on ne rejette pas $H_0$ au seuil de 5 %, ce qui ne prouve pas que $p = p_0$.'}`, null);
        },
        tailleProportion() {
          const e = pick([0.1, 0.05, 0.04, 0.03, 0.025, 0.02, 0.015, 0.01]);
          const ceil = (x) => Math.ceil(rd(x, 6));
          const nm = ceil((0.98 / e) ** 2);
          const borne = (0.98 / e) ** 2, relBorne = Math.abs(borne - rd(borne, 2)) < 1e-6 ? '=' : '\\approx';
          return Q(id, t, 'Taille d\'échantillon pour une proportion', 'Dimensionner un échantillon grâce au théorème de Moivre-Laplace',
            `On souhaite estimer une proportion $p$ par la fréquence observée $f$ sur $n$ animaux. Par majoration de l'écart type ($S_n \\leq \\dfrac{1}{2}$), la demi-largeur de l'intervalle au niveau $95\\,\\%$ est au plus $1{,}96 \\times \\dfrac{1/2}{\\sqrt{n}}$. Déterminer le plus petit entier $n$ pour lequel cette demi-largeur vaut au plus $${D(e)}$.`,
            `$${E(nm)}$`, [`$${E(ceil((1.96 / e) ** 2))}$`, `$${E(ceil(0.98 / e))}$`, `$${E(ceil((0.5 / e) ** 2))}$`],
            'Écris l\'inéquation $\\dfrac{0{,}98}{\\sqrt{n}} \\leq e$, puis isole $\\sqrt{n}$.',
            `Élève au carré l'inégalité $\\sqrt{n} \\geq \\dfrac{0{,}98}{${D(e)}}$, puis arrondis à l'entier supérieur.`,
            `$\\dfrac{0{,}98}{\\sqrt{n}} \\leq ${D(e)} \\iff n \\geq \\left(\\dfrac{0{,}98}{${D(e)}}\\right)^{2} ${relBorne} ${E(D(rd(borne, 2), 2))}$, d'où $n = ${E(nm)}$.`, String(nm));
        },
        tclSomme() {
          const [si, r] = pick([[20, 10], [30, 10], [25, 8], [40, 6], [15, 12], [30, 12], [50, 6], [20, 15], [10, 20], [25, 12]]);
          const n = r * r, m = pick([200, 250, 300, 400, 500]), tot = n * m, se = si * r, [u, phi] = uPour(se, 1);
          const intro = `Dans un élevage de $n = ${n}$ animaux, les consommations journalières (en g) sont indépendantes, de même loi, d'espérance $${m}$ et d'écart type $${si}$. On note $S$ la consommation totale.`;
          if (Math.random() < 0.5) {
            const e = evenement(tot, se, u, phi);
            return Q(id, t, 'Théorème central limite : consommation totale', 'Approcher la loi d\'une somme de variables indépendantes',
              `${intro} On donne ${PHI_TXT(u, phi)}. À l'aide du théorème central limite, donner une valeur approchée de $${e.txt('S')}$, arrondie à $10^{-4}$.`,
              `$${D(e.val)}$`, e.autres,
              'Exprime l\'espérance et la variance de la somme $S$ de ces variables indépendantes.',
              `Ici $E(S) = ${E(tot)}$ : détermine l'écart type de $S$, qui est $\\sigma\\sqrt{n}$.`,
              `$E(S) = ${n} \\times ${m} = ${E(tot)}$ et l'écart type de $S$ vaut $${si}\\sqrt{${n}} = ${se}$. Avec $Z = \\dfrac{S - ${E(tot)}}{${se}}$, on obtient $${e.txt('S')} \\approx ${e.z} = ${e.fin}$.`, inp(e.val, 4), AR4);
          }
          const c = rd(tot + u * se);
          return Q(id, t, 'Théorème central limite : prévoir un stock', 'Déterminer un seuil à l\'aide du théorème central limite',
            `${intro} On donne ${PHI_TXT(u, phi)}. À l'aide du théorème central limite, déterminer le plus petit stock $c$ (en g) tel que $P(S \\leq c)$ soit approximativement au moins égale à $${D(phi)}$.`,
            `$${E(c)}$`, [`$${E(rd(tot + u * si))}$`, `$${E(tot)}$`, `$${E(rd(tot + u * si * n))}$`],
            'Exprime $P(S \\leq c)$ à l\'aide de la variable centrée réduite de $S$.',
            `L'écart type de $S$ vaut $${si}\\sqrt{${n}}$ ; il faut $\\dfrac{c - E(S)}{\\sigma\\sqrt{n}}$ égal à $${D(u)}$.`,
            `$E(S) = ${E(tot)}$ et l'écart type de $S$ vaut $${se}$. On cherche $\\dfrac{c - ${E(tot)}}{${se}} = ${D(u)}$, soit $c = ${E(tot)} + ${D(u)} \\times ${se} = ${E(c)}$ g.`, String(c));
        },
        minExpo() {
          const [a, b] = pick([[0.1, 0.1], [0.1, 0.4], [0.2, 0.3], [0.2, 0.2], [0.5, 0.5], [0.1, 0.15], [1, 1], [0.4, 0.6], [0.25, 0.25], [0.05, 0.15], [0.3, 0.7]]);
          const s = rd(a + b), v = rd(1 / s);
          const taux = (c) => (c === 1 ? 't' : `${D(c)}t`);
          return Q(id, t, 'Minimum de deux lois exponentielles', 'Étudier le minimum de variables indépendantes',
            `Deux causes indépendantes peuvent mettre fin à la présence d'un animal sur un site : les durées associées (en années) suivent les lois $\\mathcal{E}(${D(a)})$ et $\\mathcal{E}(${D(b)})$. On note $T$ le minimum de ces deux durées. Calculer $E(T)$.`,
            `$${D(v)}$`, [`$${D(rd(1 / a + 1 / b))}$`, `$${D(rd(2 / s))}$`, `$${D(rd(1 / (2 * s)))}$`],
            'Pour $t \\geq 0$, $P(T > t) = P(T_1 > t)P(T_2 > t)$ par indépendance.',
            `Ce produit vaut $e^{-${taux(s)}}$ : reconnais la loi de $T$.`,
            `$P(T > t) = e^{-${taux(a)}}e^{-${taux(b)}} = e^{-${taux(s)}}$ pour $t \\geq 0$, donc $T \\sim \\mathcal{E}(${D(s)})$ et $E(T) = \\dfrac{1}{${D(s)}} = ${D(v)}$.`, inp(v));
        }
      };
      const parPalier = {
        1: [0, 1, 2],
        2: [0, 1, 2, 3, 4, 'centrer'],
        3: ['tcl', 'tcl', 'moivre', 'moivre', 'intervalle', 'sommeNormales', 'mediane', 'tailleBienayme'],
        4: ['testMoyenne', 'testMoyenne', 'testSeuils', 'testProportion', 'testProportion', 'tailleProportion', 'tclSomme', 'minExpo']
      };
      const k = pick(parPalier[t]);
      if (typeof k === 'string') return fam[k]();
      if (k === 0) {
        const a = R(0, 6), b = a + pick([2, 4, 6, 10]);
        const askV = t >= 2 && Math.random() < 0.5;
        const m = (a + b) / 2, v = rd((b - a) ** 2 / 12);
        if (!askV) {
          return Q(id, t, 'Loi uniforme : espérance', 'Connaître l\'espérance d\'une loi uniforme',
            `La durée (en minutes) d'une intervention suit la loi uniforme sur $[${a} ; ${b}]$. Quelle est son espérance ?`,
            `$${D(m)}$`, [`$${D(b - a)}$`, `$${D((b - a) / 2)}$`, `$${D(b)}$`],
            'L\'espérance d\'une loi uniforme est le milieu de l\'intervalle.',
            `$E(X) = \\dfrac{a + b}{2}$ avec $a = ${a}$ et $b = ${b}$.`,
            `$E(X) = \\dfrac{${a} + ${b}}{2} = ${D(m)}$ minutes.`, inp(m));
        }
        const L = b - a;
        // Distracteurs de valeurs deux à deux distinctes et distinctes de L²/12
        const candV = [[L / 12, `$${fracTex(L, 12)}$`], [L * L / 4, `$${fracTex(L * L, 4)}$`], [m, `$${D(m)}$`], [L * L, `$${L * L}$`], [L * L / 6, `$${fracTex(L * L, 6)}$`]];
        const vus = [L * L / 12], disV = [];
        candV.forEach(([x, tx]) => { if (disV.length < 3 && !vus.some((y) => Math.abs(x - y) < 1e-9)) { vus.push(x); disV.push(tx); } });
        return Q(id, t, 'Loi uniforme : variance', 'Utiliser la variance d\'une loi uniforme (formule rappelée)',
          `$X$ suit la loi uniforme sur $[${a} ; ${b}]$. On rappelle que la variance d'une loi uniforme sur $[a ; b]$ vaut $\\dfrac{(b - a)^2}{12}$. Quelle est la variance de $X$ ? (Donner la valeur exacte.)`,
          `$${fracTex(L * L, 12)}$`,
          disV,
          'Applique la formule rappelée : la variance ne dépend que de la longueur $b - a$ de l\'intervalle.',
          `Ici $b - a = ${L}$ : élève cette longueur au carré, puis divise par $12$.`,
          `$V(X) = \\dfrac{${L}^2}{12} = \\dfrac{${L * L}}{12} = ${fracTex(L * L, 12)}$${(L * L) % 12 === 0 ? '' : `, soit environ $${D(v, 3)}$`}.`, fracInput(L * L, 12));
      }
      if (k === 1) {
        const lam = pick([0.5, 0.25, 0.2, 0.1, 2, 0.05]);
        const askE = Math.random() < 0.5;
        if (askE) {
          return Q(id, t, 'Loi exponentielle : espérance', 'Connaître l\'espérance d\'une loi exponentielle',
            `La durée de vie (en années) d'un appareil d'analyse suit la loi exponentielle de paramètre $\\lambda = ${D(lam)}$. Quelle est sa durée de vie moyenne ?`,
            `$${D(1 / lam)}$`, [`$${D(lam)}$`, `$${D(1 / lam ** 2)}$`, `$${D(rd(Math.LN2 / lam, 2))}$`],
            'L\'espérance d\'une loi exponentielle est l\'inverse de son paramètre.',
            '$E(X) = \\dfrac{1}{\\lambda}$.',
            `$E(X) = \\dfrac{1}{${D(lam)}} = ${D(1 / lam)}$ : la durée de vie moyenne est de $${D(1 / lam)}$ ${1 / lam < 2 ? 'an' : 'ans'}.`, inp(1 / lam));
        }
        const s = pick([1, 2, 3, 4, 5]);
        const ex = rd(lam * s);
        return Q(id, t, 'Loi exponentielle : probabilité', 'Calculer une probabilité avec la loi exponentielle',
          `$X$ suit la loi exponentielle de paramètre $\\lambda = ${D(lam)}$. Exprimer $P(X > ${s})$.`,
          `$e^{-${D(ex)}}$`, [`$1 - e^{-${D(ex)}}$`, `$${D(lam)}e^{-${D(ex)}}$`, `$e^{${D(ex)}}$`],
          'La fonction de répartition d\'une loi exponentielle est $F(x) = 1 - e^{-\\lambda x}$ pour $x \\geq 0$.',
          '$P(X > s) = 1 - F(s)$.',
          `$P(X > ${s}) = e^{-\\lambda \\times ${s}} = e^{-${D(ex)}}$.`, null);
      }
      if (k === 2) {
        const n = R(1, 5);
        return Q(id, t, 'Normalisation d\'une densité', 'Vérifier qu\'une fonction est une densité',
          `Pour quelle valeur de $c$ la fonction $f$ définie par $f(x) = c\\,x^{${n}}$ sur $[0 ; 1]$ et $f(x) = 0$ ailleurs est-elle une densité de probabilité ?`,
          `$${n + 1}$`, [`$${n}$`, `$\\dfrac{1}{${n + 1}}$`, `$${n + 2}$`],
          'Une densité est positive et d\'intégrale égale à 1 sur $\\mathbb{R}$.',
          `$\\displaystyle\\int_0^1 x^{${n}}\\,\\mathrm{d}x = \\dfrac{1}{${n + 1}}$.`,
          `$\\displaystyle\\int_0^1 c\\,x^{${n}}\\,\\mathrm{d}x = \\dfrac{c}{${n + 1}} = 1 \\iff c = ${n + 1}$.`, String(n + 1));
      }
      if (k === 3) {
        const [v, eps] = pick([[4, 5], [9, 4], [16, 5], [25, 10], [1, 2], [2, 4], [9, 5], [16, 10], [4, 10], [3, 2]]);
        const bnd = rd(v / (eps * eps));
        return Q(id, t, 'Inégalité de Bienaymé-Tchebychev', 'Majorer une probabilité par l\'inégalité de Bienaymé-Tchebychev',
          `Une variable aléatoire $X$ a pour espérance $m$ et pour variance $${v}$. Quel majorant de $P(|X - m| \\geq ${eps})$ donne l'inégalité de Bienaymé-Tchebychev ?`,
          `$${D(bnd)}$`, [`$${D(rd(Math.sqrt(v) / eps))}$`, `$${D(rd(v / eps))}$`, `$${D(rd(1 - bnd))}$`],
          'L\'inégalité fait intervenir la variance et le carré de l\'écart.',
          '$P(|X - m| \\geq \\varepsilon) \\leq \\dfrac{V(X)}{\\varepsilon^2}$.',
          `$P(|X - m| \\geq ${eps}) \\leq \\dfrac{${v}}{${eps}^2} = ${D(bnd)}$.`, fracInput(v, eps * eps));
      }
      // k === 4 : loi faible des grands nombres / moyenne empirique
      const p = pick([0.1, 0.2, 0.3, 0.5]), n = pick([100, 400, 1000, 2500]);
      const vm = rd(p * (1 - p) / n, 8);
      return Q(id, t, 'Variance d\'une moyenne empirique', 'Calculer la variance d\'une moyenne de variables indépendantes',
        `Dans un élevage, chaque animal est porteur d'un parasite avec probabilité $p = ${D(p)}$, indépendamment des autres. On note $\\overline{X}_n$ la proportion de porteurs parmi $n = ${n}$ animaux. Calculer $V(\\overline{X}_n)$.`,
        `$${D(vm, 8)}$`, [`$${D(rd(p * (1 - p)), 4)}$`, `$${D(rd(p * (1 - p) / Math.sqrt(n), 8), 8)}$`, `$${D(rd(n * p * (1 - p)), 4)}$`],
        'La variance d\'une moyenne de $n$ variables indépendantes de même loi est la variance commune divisée par $n$.',
        `Chaque indicatrice suit une loi de Bernoulli de variance $p(1 - p) = ${D(rd(p * (1 - p)))}$.`,
        `$V(\\overline{X}_n) = \\dfrac{p(1 - p)}{n} = \\dfrac{${D(rd(p * (1 - p)))}}{${n}} = ${D(vm, 8)}$ : elle tend vers 0, d'où la loi faible des grands nombres.`, inp(vm, 8));
    }
  };

  const FORMULE_CHAINE = 'Pour $g(t) = f(x(t), y(t))$ : $g\'(t) = x\'(t)\\,\\partial_1 f(x(t), y(t)) + y\'(t)\\,\\partial_2 f(x(t), y(t))$.';
  const nz = (a, b) => U.randNonZero(a, b);
  const afine = (c0, c1) => `${c0} + ${c1 === 1 ? '' : c1}t`;

  /** Dérivée d'une grandeur dont les deux variables dépendent du temps, en contexte (un gabarit par palier) */
  function veto07Trajectoire(t, id) {
    const skill = 'Dériver $t \\mapsto f(x(t), y(t))$';
    if (t === 1) {
      const c = pick([
        { f: 'B', nom: 'La biomasse $B$ d\'un étang', x: 'T', xn: 'la température $T$', y: 'N', yn: 'la concentration en nutriments $N$' },
        { f: 'P', nom: 'Le taux de photosynthèse $P$ d\'une plante', x: 'L', xn: 'l\'éclairement $L$', y: 'C', yn: 'la concentration en dioxyde de carbone $C$' },
        { f: 'R', nom: 'Le taux de reproduction $R$ d\'une population d\'insectes', x: 'T', xn: 'la température $T$', y: 'H', yn: 'l\'humidité $H$' }
      ]);
      const x0 = R(10, 30), y0 = R(1, 9), p = nz(-6, 6), q = nz(-6, 6), u = nz(-4, 4), v = nz(-4, 4);
      const ans = u * p + v * q;
      const partial = (w) => `\\dfrac{\\partial ${c.f}}{\\partial ${w}}(${x0}, ${y0})`;
      return Q(id, t, 'Grandeur dépendant de deux variables du temps', skill,
        `${c.nom} dépend de ${c.xn} et de ${c.yn}, qui varient au cours du temps $t$. On pose $g(t) = ${c.f}(${c.x}(t), ${c.y}(t))$.\nÀ l'instant $t_0$ : $${c.x}(t_0) = ${x0}$, $${c.y}(t_0) = ${y0}$, $${c.x}'(t_0) = ${u}$, $${c.y}'(t_0) = ${v}$, $${partial(c.x)} = ${p}$ et $${partial(c.y)} = ${q}$.\nCalculer $g'(t_0)$.`,
        `$${ans}$`, [`$${p + q}$`, `$${u * p}$`, `$${v * q}$`, `$${u * p - v * q}$`, `$${u * q + v * p}$`],
        FORMULE_CHAINE,
        `Le premier terme vaut $${U.paren(u)} \\times ${U.paren(p)} = ${u * p}$ ; calculer le second avec la variation de $${c.y}$.`,
        `$g'(t_0) = ${U.paren(u)} \\times ${U.paren(p)} + ${U.paren(v)} \\times ${U.paren(q)} = ${ans}$.`);
    }
    if (t === 2) {
      const k = pick([0.5, 0.6, 0.7, 0.75, 0.8]), L0 = R(4, 10), l0 = R(2, 6), a = R(1, 3), b = R(1, 2), t0 = R(1, 5);
      const L = L0 + a * t0, l = l0 + b * t0, ans = rd(k * (a * l + b * L));
      return Q(id, t, 'Surface d\'une feuille en croissance', skill,
        `La surface d'une feuille (en cm²) est estimée par $S(L, \\ell) = ${D(k)}\\,L\\,\\ell$, où la longueur $L$ et la largeur $\\ell$ (en cm) dépendent du temps $t$ (en jours) : $L(t) = ${afine(L0, a)}$ et $\\ell(t) = ${afine(l0, b)}$. On pose $g(t) = S(L(t), \\ell(t))$.\nCalculer $g'(${t0})$ (en cm² par jour).`,
        `$${D(ans)}$`, [`$${D(rd(k * (a + b)))}$`, `$${D(rd(k * a * l))}$`, `$${D(rd(k * b * L))}$`, `$${D(a * l + b * L)}$`],
        FORMULE_CHAINE,
        `$\\partial_1 S(L, \\ell) = ${D(k)}\\,\\ell$ et $\\partial_2 S(L, \\ell) = ${D(k)}\\,L$ ; à l'instant $t = ${t0}$, $L = ${L}$ et $\\ell = ${l}$.`,
        `$L(${t0}) = ${L}$, $\\ell(${t0}) = ${l}$, $L'(${t0}) = ${a}$ et $\\ell'(${t0}) = ${b}$. Donc $g'(${t0}) = ${a} \\times ${D(k)} \\times ${l} + ${b} \\times ${D(k)} \\times ${L} = ${D(rd(a * k * l))} + ${D(rd(b * k * L))} = ${D(ans)}$ cm² par jour.`);
    }
    if (t === 3) {
      // On écarte les tirages où g'(t0) est entier (en particulier nul) : l'énoncé demande une fraction irréductible
      let m0, a, V0, b, t0, m, V, num, den;
      do {
        m0 = R(2, 12); a = R(1, 5); V0 = R(2, 6); b = R(1, 3); t0 = R(1, 4);
        m = m0 + a * t0; V = V0 + b * t0; num = a * V - b * m; den = V * V;
      } while (num % den === 0);
      const F = (p, q) => `$${U.frac(p, q, { d: true })}$`;
      return Q(id, t, 'Concentration dépendant du temps', skill,
        `La concentration d'un produit dans une cuve est $C(m, V) = \\dfrac{m}{V}$ (en mg/L), où la masse $m$ (en mg) et le volume $V$ (en L) dépendent du temps $t$ (en heures) : $m(t) = ${afine(m0, a)}$ et $V(t) = ${afine(V0, b)}$. On pose $g(t) = C(m(t), V(t))$.\nCalculer $g'(${t0})$ (en mg/L par heure), sous forme de fraction irréductible.`,
        F(num, den), [F(a, V), F(a * V + b * m, den), F(-b * m, den), F(num, V)],
        FORMULE_CHAINE,
        `$\\partial_1 C(m, V) = \\dfrac{1}{V}$ et $\\partial_2 C(m, V) = -\\dfrac{m}{V^{2}}$ ; à l'instant $t = ${t0}$, $m = ${m}$ et $V = ${V}$.`,
        `$m(${t0}) = ${m}$, $V(${t0}) = ${V}$, $m'(${t0}) = ${a}$ et $V'(${t0}) = ${b}$. Donc $g'(${t0}) = ${a} \\times \\dfrac{1}{${V}} + ${b} \\times \\left(-\\dfrac{${m}}{${den}}\\right) = \\dfrac{${a * V} - ${b * m}}{${den}} = ${U.frac(num, den, { d: true })}$.`);
    }
    const T0 = pick([10, 15, 20, 25]), N0 = R(2, 8), u = nz(-3, 3);
    const v = (n) => U.frac(n, 2 * T0, { d: true });
    const X = (s) => `$${s}$`;
    return Q(id, t, 'Maintenir une grandeur stationnaire', 'Exploiter $g\'(t_0) = 0$ pour $g(t) = f(x(t), y(t))$',
      `La biomasse d'un étang est modélisée par $B(T, N) = T N^{2}$, où la température $T$ et la concentration en nutriments $N$ dépendent du temps. On pose $g(t) = B(T(t), N(t))$.\nÀ l'instant $t_0$ : $T(t_0) = ${T0}$, $N(t_0) = ${N0}$ et $T'(t_0) = ${u}$.\nDéterminer la valeur de $N'(t_0)$ pour laquelle $g'(t_0) = 0$.`,
      X(v(-N0 * u)), [X(v(N0 * u)), X(U.frac(-u, 2 * T0, { d: true })), X(U.frac(-2 * T0 * u, N0, { d: true })), X(U.frac(-N0 * u, T0, { d: true }))],
      FORMULE_CHAINE,
      `$\\partial_1 B(T, N) = N^{2}$ et $\\partial_2 B(T, N) = 2TN$ : écrire $g'(t_0) = 0$ au point $(${T0}, ${N0})$.`,
      `$g'(t_0) = T'(t_0) \\times ${N0}^{2} + N'(t_0) \\times 2 \\times ${T0} \\times ${N0} = ${u * N0 * N0} + ${2 * T0 * N0}\\,N'(t_0)$. Cette quantité est nulle si et seulement si $N'(t_0) = ${v(-N0 * u)}$.`);
  }

  /**
   * Extremums sans la condition suffisante rt − s², hors programme BCPST : on conclut par le signe de
   * f(a + h, b + k) − f(a, b). Palier 3 : nature du point critique d'un trinôme ; palier 4 : valeur d'un extremum local.
   */
  function veto07Extremum(t, id) {
    const skill = 'Étudier le signe de $f(a + h, b + k) - f(a, b)$ en un point critique';
    if (t <= 3) {
      let a, b, c;
      do { a = nz(-3, 3); b = R(-4, 4); c = nz(-3, 3); } while (4 * a * c - b * b === 0);
      const x0 = R(-3, 3), y0 = R(-3, 3), d = -(2 * a * x0 + b * y0), e = -(b * x0 + 2 * c * y0), Dt = 4 * a * c - b * b;
      const kind = Dt > 0 ? (a > 0 ? 'min' : 'max') : 'col';
      const S = { min: 'Un minimum local', max: 'Un maximum local', col: 'Un point col (ni minimum ni maximum local)', nc: 'On ne peut pas conclure' };
      const str = U.poly([[a, 'x^2'], [b, 'xy'], [c, 'y^2'], [d, 'x'], [e, 'y']]);
      const diff = U.poly([[a, 'h^2'], [b, 'hk'], [c, 'k^2']]);
      const alpha = U.frac(b, 2 * a), beta = U.frac(Dt, 4 * a);
      const canon = b === 0 ? diff : U.poly([[a, `\\left(${U.poly([[1, 'h'], [alpha, 'k']])}\\right)^2`], [beta, 'k^2']]);
      let concl;
      if (kind === 'col') {
        concl = b === 0
          ? `Pour $k = 0$ et $h \\neq 0$, elle vaut $${U.coefStr(a, 'h^2')}$ ; pour $h = 0$ et $k \\neq 0$, elle vaut $${U.coefStr(c, 'k^2')}$. Ces valeurs sont de signes contraires : c'est un point col.`
          : `Pour $k = 0$ et $h \\neq 0$, elle vaut $${U.coefStr(a, 'h^2')}$ ; pour $k \\neq 0$ et $h = ${U.coefStr(U.frac(-b, 2 * a), 'k')}$, elle vaut $${U.coefStr(beta, 'k^2')}$. Ces valeurs sont de signes contraires : c'est un point col.`;
      } else if (kind === 'min') {
        concl = 'Les deux coefficients sont strictement positifs, donc la différence est positive ou nulle pour tout $(h, k)$ : c\'est un minimum local (et même global).';
      } else {
        concl = 'Les deux coefficients sont strictement négatifs, donc la différence est négative ou nulle pour tout $(h, k)$ : c\'est un maximum local (et même global).';
      }
      return Q(id, t, 'Nature d\'un point critique', skill,
        `La fonction $f(x, y) = ${str}$ admet un unique point critique $(${x0}, ${y0})$. En étudiant le signe de $f(${x0} + h, ${y0} + k) - f(${x0}, ${y0})$, déterminer sa nature.`,
        S[kind], Object.keys(S).filter((key) => key !== kind).map((key) => S[key]),
        'Le point étant critique, les termes de degré 1 en $(h, k)$ disparaissent dans la différence ; il reste les termes de degré 2.',
        `La différence vaut $${diff}$ : ${b === 0 ? 'comparer les signes des deux coefficients' : 'la mettre sous forme canonique en $h$ pour étudier son signe'}.`,
        `$f(${x0} + h, ${y0} + k) - f(${x0}, ${y0}) = ${diff}${b === 0 ? '' : ` = ${canon}`}$. ${concl}`, null);
    }
    const a = R(1, 3), b = R(-3, 3), s = pick([1, 1, -1]);
    const f = U.poly([[1, 'x^3'], [-3 * a * a, 'x'], [s, 'y^2'], [-2 * b * s, 'y']]);
    const isMin = s === 1, xs = isMin ? a : -a, xo = -xs;
    const val = xs ** 3 - 3 * a * a * xs + s * (b * b - 2 * b * b);
    const lab = isMin ? 'minimum' : 'maximum';
    const diffAt = (x) => U.poly([[3 * x, 'h^2'], [1, 'h^3'], [s, 'k^2']]);
    const facteur = (x) => (x > 0 ? `${3 * x} + h` : `h - ${-3 * x}`);
    const signeLoc = isMin
      ? `$h^{2}(${facteur(xs)}) + k^{2} \\geq 0$ dès que $h > ${-3 * a}$ : minimum local`
      : `$h^{2}(${facteur(xs)}) - k^{2} \\leq 0$ dès que $h < ${3 * a}$ : maximum local`;
    const ky = U.poly([[2 * s, 'y'], [-2 * b * s, '']]);
    return Q(id, t, 'Valeur d\'un extremum local', skill,
      `La fonction $f(x, y) = ${f}$ admet deux points critiques, dont un seul est un extremum local (un ${lab}). Calculer la valeur de ce ${lab} local.`,
      `$\\text{${lab}} = ${val}$`,
      [-(xs ** 3) + 3 * a * a * xs + s * (b * b - 2 * b * b), val - s * b * b, -val, xs ** 3 - 3 * a * a * xs].filter((x) => x !== val).map((x) => `$\\text{${lab}} = ${x}$`),
      'Résoudre $\\nabla f = (0, 0)$ : les deux équations sont découplées.',
      `Les points critiques sont $(${a}, ${b})$ et $(${-a}, ${b})$ : étudier en chacun le signe de $f(a + h, b + k) - f(a, b)$.`,
      `$\\partial_1 f = 3x^2 - ${3 * a * a} = 0$ donne $x = \\pm ${a}$ et $\\partial_2 f = ${ky} = 0$ donne $y = ${b}$.\nEn $(${xs}, ${b})$, la différence vaut $${diffAt(xs)}$, soit ${signeLoc}.\nEn $(${xo}, ${b})$, elle vaut $${diffAt(xo)}$ : avec $h = 0$ et $k \\neq 0$, elle est du signe de $${s > 0 ? 'k^{2}' : '-k^{2}'}$ ; avec $k = 0$ et $h$ petit non nul, elle vaut $h^{2}(${facteur(xo)})$, de signe contraire : point col.\nValeur : $f(${xs}, ${b}) = ${val}$.`);
  }

  function gcd(a, b) { return b ? gcd(b, a % b) : Math.abs(a); }
  function fracTex(p, q) { const g = gcd(p, q); return q / g === 1 ? String(p / g) : `\\dfrac{${p / g}}{${q / g}}`; }
  function fracInput(p, q) { const g = gcd(p, q); return q / g === 1 ? String(p / g) : `${p / g}/${q / g}`; }

  /** Nature d'une série par équivalent, avec les seules séries de référence du programme : Σ1/n² et Σ1/n */
  function natureSerieReference(t, id) {
    const d = pick([0, 1, 1, 2, 2, 3]);
    const a = R(d === 0 ? 1 : 0, 3);
    const b = a + d, c = R(1, 6);
    const pw = (e) => (e === 1 ? 'n' : `n^{${e}}`);
    const numer = a === 0 ? '1' : pw(a);
    const eq = d === 0 ? '1' : `\\frac{1}{${pw(d)}}`;
    const conv = `Converge : $u_n \\sim ${eq}$, à comparer à $\\sum \\frac{1}{n^{2}}$`;
    const div = `Diverge : $u_n \\sim ${eq}$, à comparer à $\\sum \\frac{1}{n}$`;
    const gross = 'Diverge grossièrement : $u_n$ ne tend pas vers $0$';
    const fake = 'Converge car $u_n \\to 0$';
    const answer = d === 0 ? gross : d === 1 ? div : conv;
    const distractors = d === 0 ? [conv, fake, 'Diverge car $u_n \\to 0$ et la série harmonique diverge']
      : d === 1 ? [conv, gross, fake] : [div, gross, fake];
    const equiv = `$u_n \\sim ${a === 0 ? eq : `\\frac{${numer}}{${pw(b)}} = ${eq}`}$, terme positif.`;
    const sol = d === 0 ? '$u_n \\to 1 \\neq 0$ : la série diverge grossièrement.'
      : d === 1 ? `${equiv} La série harmonique $\\sum \\frac{1}{n}$ diverge, donc $\\sum u_n$ diverge (comparaison par équivalents).`
        : d === 2 ? `${equiv} La série $\\sum \\frac{1}{n^{2}}$ converge, donc $\\sum u_n$ converge (comparaison par équivalents).`
          : `${equiv} Pour $n \\geq 1$, $\\frac{1}{n^{3}} \\leq \\frac{1}{n^{2}}$ et $\\sum \\frac{1}{n^{2}}$ converge : $\\sum \\frac{1}{n^{3}}$ converge par comparaison, donc $\\sum u_n$ converge (comparaison par équivalents).`;
    return Q(id, t, 'Nature d\'une série à termes positifs', 'Comparer à une série de référence par équivalent',
      `Quelle est la nature de la série $\\sum_{n \\geq 1} u_n$ avec $u_n = \\frac{${numer}}{${pw(b)} + ${c}}$ ?`,
      answer, distractors,
      'Cherche un équivalent simple de $u_n$ quand $n \\to +\\infty$.',
      'Deux séries à termes positifs de termes généraux équivalents ont même nature : compare aux séries de référence $\\sum \\frac{1}{n^{2}}$ (convergente) et $\\sum \\frac{1}{n}$ (divergente).',
      sol, null);
  }

  /** Majoration rétablie à partir de l'égalité des accroissements finis (l'inégalité est exclue du programme) */
  function majorationParEgalite(t, id) {
    const n = pick([2, 3]);
    const a = R(-4, 2), b = a + R(1, 4);
    const m = Math.max(Math.abs(a), Math.abs(b));
    const M = n === 2 ? 2 * m : 3 * m * m;
    const Mv = (v) => `$M = ${v}$`;
    const fp = n === 2 ? '2x' : '3x^{2}';
    return Q(id, t, 'Majoration par l\'égalité des accroissements finis', 'Rétablir une majoration à partir de l\'égalité des accroissements finis',
      `Soit $f(x) = x^{${n}}$ sur $I = [${a} ; ${b}]$. Pour $x \\neq y$ dans $I$, l'égalité des accroissements finis fournit un réel $c$ entre $x$ et $y$ tel que $f(x) - f(y) = f'(c)(x - y)$. Quelle est la plus petite constante $M$ telle que $|f'(c)| \\leq M$ pour tout $c \\in I$ ?`,
      Mv(M),
      [Mv(n === 2 ? 2 * Math.min(Math.abs(a), Math.abs(b)) + 1 : 3 * Math.min(a * a, b * b) + 1), Mv(Math.abs(b ** n - a ** n)), Mv(n * m), Mv(M + n), Mv(m ** n)],
      `$f'(x) = ${fp}$ : cherche le maximum de $|f'|$ sur $[${a} ; ${b}]$.`,
      `$|f'|$ est maximal à l'extrémité de plus grande valeur absolue, ici $${Math.abs(a) >= Math.abs(b) ? a : b}$.`,
      `$f'(x) = ${fp}$, donc le maximum de $|f'|$ sur $I$ vaut $${n === 2 ? `2 \\times ${m}` : `3 \\times ${m}^{2}`} = ${M}$. Pour $x \\neq y$ dans $I$, le réel $c$ de l'égalité, situé entre $x$ et $y$, appartient à $I$, donc $|f(x) - f(y)| = |f'(c)|\\,|x - y| \\leq ${M}\\,|x - y|$ : la majoration est rétablie à partir de l'égalité.`,
      String(M));
  }

  /** Matrice d'ordre 3 (sans délimiteurs $) */
  const pm3 = (M) => `\\begin{pmatrix} ${M.map((r) => r.join(' & ')).join(' \\\\ ')} \\end{pmatrix}`;
  /** Opération L_i ← L_i − kL_j (null si k = 0) */
  const opL = (i, k, j) => (k === 0 ? null : `$L_${i} \\leftarrow L_${i} ${k > 0 ? '-' : '+'} ${Math.abs(k) === 1 ? '' : Math.abs(k)}L_${j}$`);

  /** veto-08 : rang et inversibilité d'une matrice triangulaire 3x3 (le programme limite le déterminant au format 2x2) */
  function triangulaireRang(t, id) {
    const zero = pick([-1, -1, -1, 0, 1, 2]);
    const d = [0, 1, 2].map((k) => (k === zero ? 0 : nz(-4, 4)));
    const o = [R(-3, 3), R(-3, 3), R(-3, 3)];
    const M = [[d[0], o[0], o[1]], [0, d[1], o[2]], [0, 0, d[2]]];
    const inv = zero < 0;
    const opt = (r, i) => `Rang $${r}$ : $T$ ${i ? 'est inversible' : 'n\'est pas inversible'}`;
    const sol = inv
      ? `$T$ est échelonnée et ses coefficients diagonaux $${d[0]}$, $${d[1]}$ et $${d[2]}$ sont ses trois pivots, tous non nuls : $T$ est de rang $3$, donc **inversible**.`
      : zero === 2
        ? `$T$ est échelonnée ; sa dernière ligne est nulle et les deux autres ont des pivots non nuls ($${d[0]}$ et $${d[1]}$) : $T$ est de rang $2$, donc **non inversible**.`
        : zero === 1
          ? `Les lignes $L_2 = (0, 0, ${o[2]})$ et $L_3 = (0, 0, ${d[2]})$ sont colinéaires, avec $L_3 \\neq 0$, et $L_1$ n'est pas colinéaire à $L_3$ (son premier coefficient vaut $${d[0]} \\neq 0$). Le rang de $T$ est donc celui de $(L_1, L_3)$ : $T$ est de rang $2$, donc **non inversible**.`
          : `La première colonne de $T$ est nulle : les trois lignes appartiennent à $\\text{Vect}\\big((0, 1, 0), (0, 0, 1)\\big)$, de dimension $2$, donc le rang est au plus $2$. Les lignes $L_2 = (0, ${d[1]}, ${o[2]})$ et $L_3 = (0, 0, ${d[2]})$ ne sont pas colinéaires : $T$ est de rang $2$, donc **non inversible**.`;
    return Q(id, t, 'Rang et inversibilité d\'une matrice triangulaire 3x3', 'Lire le rang d\'une matrice triangulaire sur ses pivots',
      `Déterminer le rang de la matrice $T = ${pm3(M)}$. $T$ est-elle inversible ?`,
      opt(inv ? 3 : 2, inv),
      [[3, true], [3, false], [2, true], [2, false], [1, false]].filter(([r, i]) => !(r === (inv ? 3 : 2) && i === inv)).map(([r, i]) => opt(r, i)),
      'Le rang se lit sur une forme échelonnée ; une matrice triangulaire est inversible si et seulement si ses coefficients diagonaux sont tous non nuls.',
      `Les coefficients diagonaux de $T$ sont $${d[0]}$, $${d[1]}$ et $${d[2]}$ : regarde s'ils sont tous non nuls.`,
      sol, null);
  }

  /** veto-09 : trace et déterminant d'une matrice diagonalisable d'ordre 2 (déterminant limité au format 2x2) */
  function traceDetDiag2(t, id) {
    let a, b;
    do { a = R(-5, 6); b = R(-5, 6); } while (a >= b);
    const s = a + b, p = a * b;
    const C = (x, y) => `$(${x} ; ${y})$`;
    return Q(id, t, 'Trace et déterminant d\'une matrice diagonalisable', 'Relier la trace et le déterminant aux valeurs propres',
      `Soit $A \\in \\mathcal{M}_2(\\mathbb{R})$ une matrice diagonalisable dont les valeurs propres sont $${a}$ et $${b}$. Donner $(\\operatorname{tr}(A) ; \\det(A))$.`,
      C(s, p), [C(-s, p), C(s, -p), C(p, s), C(s, p + 1)],
      '$A$ est semblable à la matrice diagonale de ses valeurs propres ; la trace et le déterminant sont invariants par similitude.',
      `La trace est la somme des valeurs propres : ici $\\operatorname{tr}(A) = ${s}$.`,
      a === 0 || b === 0
        // une valeur propre nulle : pas d'écriture « -1 + 0 » ni « (-1) × 0 »
        ? `$A = PDP^{-1}$ avec $D = \\begin{pmatrix} ${a} & 0 \\\\ 0 & ${b} \\end{pmatrix}$, donc $\\operatorname{tr}(A) = \\operatorname{tr}(D) = ${s}$ (somme des valeurs propres, dont l'une est nulle) et $\\det(A) = \\det(D) = 0$, puisque $0$ est valeur propre : $A$ n'est pas inversible.`
        : `$A = PDP^{-1}$ avec $D = \\begin{pmatrix} ${a} & 0 \\\\ 0 & ${b} \\end{pmatrix}$, donc $\\operatorname{tr}(A) = \\operatorname{tr}(D) = ${a} + ${U.paren(b)} = ${s}$ et $\\det(A) = \\det(D) = ${U.paren(a)} \\times ${U.paren(b)} = ${p}$.`,
      `(${s};${p})`, 'Saisir le couple (trace ; déterminant), par exemple (2;-6).');
  }

  /** veto-09 : famille de trois vecteurs de R^3, base ou non, décidée par le pivot de Gauss (sans déterminant 3x3) */
  function basePivot3(t, id) {
    const lie = Math.random() < 0.4;
    let T, l21, l31, l32;
    do {
      T = [[1, R(-3, 3), R(-3, 3)], [0, nz(-3, 3), R(-3, 3)], [0, 0, lie ? 0 : nz(-3, 3)]];
      l21 = R(-2, 2); l31 = R(-2, 2); l32 = R(-2, 2);
    } while ((l21 === 0 && l31 === 0 && l32 === 0) || (T[0][2] === 0 && T[1][2] === 0 && T[2][2] === 0));
    const M = [T[0], T[1].map((x, j) => x + l21 * T[0][j]), T[2].map((x, j) => x + l31 * T[0][j] + l32 * T[1][j])];
    const inter = [T[0], T[1], T[2].map((x, j) => x + l32 * T[1][j])];
    const col = (j) => `(${M.map((r) => r[j]).join(', ')})`;
    const ops = [opL(2, l21, 1), opL(3, l31, 1)].filter(Boolean);
    const ops1 = ops.join(' et ');
    const op2 = opL(3, l32, 2);
    const etapes = ops1
      ? `${ops1} ${ops.length > 1 ? 'donnent' : 'donne'} $${pm3(inter)}$${op2 ? `, puis ${op2} donne $${pm3(T)}$` : ''}`
      : `Les coefficients sous le premier pivot sont déjà nuls ; ${op2} donne $${pm3(T)}$`;
    const oui = 'Oui : la matrice échelonnée a trois pivots non nuls, la famille est libre';
    const non = 'Non : la matrice échelonnée a une ligne nulle, la famille est liée';
    return Q(id, t, 'Base de $\\mathbb{R}^3$ par le pivot de Gauss', 'Échelonner pour décider si une famille de trois vecteurs est une base',
      `Dans $\\mathbb{R}^3$, la famille $\\mathcal{F} = (u, v, w)$ avec $u = ${col(0)}$, $v = ${col(1)}$ et $w = ${col(2)}$ est-elle une base de $\\mathbb{R}^3$ ?`,
      lie ? non : oui,
      [lie ? oui : non, 'Non, car trois vecteurs ne peuvent jamais engendrer $\\mathbb{R}^3$', 'Elle est génératrice de $\\mathbb{R}^3$ mais non libre'],
      'Trois vecteurs de $\\mathbb{R}^3$ forment une base si et seulement si la famille est libre, c\'est-à-dire si la matrice dont ils sont les colonnes est de rang $3$.',
      `Échelonne la matrice dont les colonnes sont $u$, $v$, $w$ : commence par ${ops1 || op2}, puis compte les pivots non nuls.`,
      `La matrice dont les colonnes sont $u$, $v$, $w$ est $${pm3(M)}$. ${etapes}.\n` + (lie
        ? 'La dernière ligne est nulle : deux pivots seulement, la matrice est de rang $2$. La famille est liée : **ce n\'est pas une base** de $\\mathbb{R}^3$.'
        : `Trois pivots non nuls ($1$, $${T[1][1]}$ et $${T[2][2]}$) : la matrice est de rang $3$ et la famille est libre. Comme elle compte $3 = \\dim \\mathbb{R}^3$ vecteurs, **c'est une base** de $\\mathbb{R}^3$.`),
      null);
  }

  /** Remplace un fragment dans tous les textes d'un tirage (énoncé, options, indices, corrigé) */
  function remplacer(q, de, vers) {
    ['statement', 'answer', 'hint1', 'hint2', 'solution'].forEach((k) => { if (typeof q[k] === 'string') q[k] = q[k].replace(de, vers); });
    ['options', 'choices'].forEach((k) => { if (Array.isArray(q[k])) q[k] = q[k].map((o) => (typeof o === 'string' ? o.replace(de, vers) : o)); });
    return q;
  }

  /** Ajoute une phrase à l'énoncé, avant la consigne de saisie en italique quand il y en a une */
  function rappelAvantConsigne(q, phrase) {
    const m = q.statement.match(/\n\n\*[^*]*\*$/);
    q.statement = m ? `${q.statement.slice(0, m.index)}\n${phrase}${m[0]}` : `${q.statement}\n${phrase}`;
    return q;
  }

  /**
   * Retouches de gabarits de Licence conformes sur le fond, mais dont le corrigé ou un distracteur invoque
   * un déterminant d'ordre 3 ou le polynôme caractéristique, hors programme BCPST (titre exact du gabarit).
   */
  const RETOUCHES = {
    // Programme BCPST : les séries géométriques dérivées sum n q^(n-1) et sum n(n-1) q^(n-2) sont des résultats
    // du cours ; la dérivation terme à terme d'une série entière n'est pas au programme.
    'veto-03': {
      'Série $\\sum n^2 x^n$': (q) => {
        q.skill = 'Utiliser les séries géométriques dérivées du cours';
        q.hint1 = 'Pour $|x| < 1$, le cours donne $\\sum_{n \\ge 1} n x^{n-1} = \\frac{1}{(1 - x)^2}$ et $\\sum_{n \\ge 2} n(n - 1) x^{n-2} = \\frac{2}{(1 - x)^3}$.';
        q.hint2 = 'Écris $n^2 = n(n - 1) + n$ : $\\sum_{n \\ge 1} n^2x^n = x^2\\sum_{n \\ge 2} n(n - 1)x^{n-2} + x\\sum_{n \\ge 1} nx^{n-1}$, puis remplace $x$ par sa valeur.';
        q.solution = 'D\'après le cours, avec $n^2 = n(n - 1) + n$ : $\\sum_{n \\ge 1} n^2x^n = \\frac{2x^2}{(1 - x)^3} + \\frac{x}{(1 - x)^2} = \\frac{x(1 + x)}{(1 - x)^3}$ pour $|x| < 1$. ' + q.solution;
        return q;
      },
      'Série dérivée d\'une série géométrique': (q) => {
        q.skill = 'Utiliser la série géométrique dérivée $\\sum n x^{n-1}$ du cours';
        q.hint1 = 'Pour $|x| < 1$, le cours donne la somme de la série géométrique dérivée $\\sum_{n \\geq 1} n x^{n-1}$ : fais-la apparaître.';
        return q;
      },
      'Séries dérivées de la série géométrique': (q) => {
        q.skill = 'Utiliser les séries géométriques dérivées du cours';
        q.hint1 = 'Pour $|x| < 1$, le cours donne $\\sum_{n \\ge 1} n x^{n-1} = \\frac{1}{(1 - x)^2}$ et $\\sum_{n \\ge 2} n(n - 1) x^{n-2} = \\frac{2}{(1 - x)^3}$ : fais apparaître ces sommes, puis multiplie par une puissance de $x$.';
        remplacer(q, '$\\sum n^2x^n = \\frac{x(1 + x)}{(1 - x)^3}$.', 'Écris $n^2 = n(n - 1) + n$ : $\\sum_{n \\ge 1} n^2x^n = x^2\\sum_{n \\ge 2} n(n - 1)x^{n-2} + x\\sum_{n \\ge 1} nx^{n-1}$.');
        remplacer(q, 'Dans le disque de convergence, ', 'Pour $|x| < 1$, d\'après le cours, ');
        return remplacer(q, ' et, en dérivant de nouveau, $\\sum_{n\\ge1} n^2x^n = \\frac{x(1+x)}{(1-x)^3}$', ' et, avec $n^2 = n(n - 1) + n$, $\\sum_{n\\ge1} n^2x^n = \\frac{2x^2}{(1-x)^3} + \\frac{x}{(1-x)^2} = \\frac{x(1+x)}{(1-x)^3}$');
      }
    },
    // veto-10 : la formule de la distance d'un point à une droite ou à un plan n'est pas un attendu du programme BCPST ; l'énoncé la rappelle
    'veto-10': {
      'Distance d\'un point à une droite': (q) => {
        return rappelAvantConsigne(q, 'On rappelle que, dans un repère orthonormé du plan, la distance du point $M(x_0 ; y_0)$ à la droite d\'équation $ax + by + c = 0$ est $\\dfrac{|ax_0 + by_0 + c|}{\\sqrt{a^2 + b^2}}$.');
      },
      'Distance d\'un point à un plan': (q) => {
        return rappelAvantConsigne(q, 'On rappelle que, dans un repère orthonormé de l\'espace, la distance du point $M(x_0 ; y_0 ; z_0)$ au plan d\'équation $ax + by + cz + d = 0$ est $\\dfrac{|ax_0 + by_0 + cz_0 + d|}{\\sqrt{a^2 + b^2 + c^2}}$.');
      }
    },
    'veto-11': {
      'Espérance d\'une loi géométrique': (q) => remplacer(q, 'On peut dériver la série géométrique $\\sum x^k = \\frac{1}{1 - x}$.', 'Ce résultat du cours repose sur la série géométrique dérivée : $\\sum_{k \\ge 1} k x^{k-1} = \\frac{1}{(1 - x)^2}$ pour $|x| < 1$.'),
      'Variance d\'une loi géométrique': (q) => remplacer(q, 'On peut dériver la série géométrique $\\sum x^k = \\frac{1}{1 - x}$.', 'Ce résultat du cours repose sur les séries géométriques dérivées $\\sum_{k \\ge 1} k x^{k-1}$ et $\\sum_{k \\ge 2} k(k - 1) x^{k-2}$, pour $|x| < 1$.')
    },
    'veto-08': {
      'Rang d\'une matrice selon un paramètre': (q) => remplacer(q, /Ainsi \$\\det\(M\) = [^$]*\$ : /, 'Les trois pivots sont donc non nuls si et seulement si le dernier l\'est : ')
    },
    'veto-09': {
      'Liberté d\'une famille de vecteurs sans composante nulle dans $\\mathbb{R}^3$': (q) => remplacer(remplacer(q, 'Libre, car le déterminant de la famille vaut 1', 'Libre, car les vecteurs sont deux à deux non colinéaires'), ' (et son déterminant est nul)', ''),
      'Dimension d\'un sous-espace engendré': (q) => remplacer(q, /Le déterminant de \$\(u, v, w\)\$ vaut \$-?\d+ \\neq 0\$ : la famille est libre/, 'En échelonnant par le pivot de Gauss la matrice dont les colonnes sont $u$, $v$, $w$, on obtient trois pivots non nuls : la famille est de rang $3$ et libre'),
      'Valeurs propres d\'une matrice triangulaire': (q) => {
        remplacer(q, /\$XI_3 - A\$ est triangulaire (?:inférieure|supérieure)\./, '$\\lambda$ est valeur propre de $A$ si et seulement si $A - \\lambda I_3$ n\'est pas inversible.');
        remplacer(q, 'Le déterminant d\'une matrice triangulaire est le produit de ses coefficients diagonaux.', '$A - \\lambda I_3$ est triangulaire : elle est inversible si et seulement si ses coefficients diagonaux sont tous non nuls.');
        return remplacer(q, /\$\\chi_A\(X\) = [^$]*\$ : les valeurs propres/, '$A - \\lambda I_3$ n\'est pas inversible si et seulement si $\\lambda$ est égal à l\'un des coefficients diagonaux : les valeurs propres');
      }
    }
  };

  /**
   * veto-09 : le polynôme caractéristique n'est pas au programme BCPST. En dimension 2, λ est valeur propre de A
   * si et seulement si A − λI₂ n'est pas inversible, c'est-à-dire det(A − λI₂) = 0 ; det(A − λI₂) = det(λI₂ − A)
   * en dimension 2, donc les coefficients et les réponses des gabarits sont inchangés.
   */
  function sansChi(q) {
    const DET = '\\det(A - \\lambda I_2)';
    // Remplace l'indéterminée X par λ, sans toucher aux commandes LaTeX (pas de lookbehind, non pris en charge partout)
    const enLambda = (c) => c.replace(/(\\[A-Za-z]+)|X(?![A-Za-z])/g, (m, cmd) => (cmd ? m : '\\lambda '));
    const math = (s) => s.replace(/\$([^$]*)\$/g, (m, c) => {
      if (/^X\^2[^$]*= 0$/.test(c)) return `$${enLambda(c)}$`;
      if (!/\\chi_A/.test(c) || c === '\\chi_A') return m;
      const r = enLambda(c.replace(/\\chi_A\(X\) = \\det\(XI_2 - A\)/g, DET).replace(/\\chi_A\(X\)/g, DET));
      return `$${r}$`;
    });
    const texte = (s) => (typeof s !== 'string' ? s : math(s)
      .replace(/\$\\chi_A\$/g, `le polynôme $${DET}$`)
      .replace(/Polynôme caractéristique/g, `Polynôme $${DET}$`)
      .replace(/le polynôme caractéristique/g, `le polynôme $${DET}$`)
      .replace(/polynôme caractéristique/g, `polynôme $${DET}$`));
    ['title', 'skill', 'statement', 'answer', 'hint1', 'hint2', 'solution'].forEach((k) => { q[k] = texte(q[k]); });
    ['options', 'choices'].forEach((k) => { if (Array.isArray(q[k])) q[k] = q[k].map(texte); });
    if (!/\\det\(A - \\lambda I_2\)/.test(q.statement)) q.statement = `On rappelle que $\\lambda$ est valeur propre de $A$ si et seulement si $${DET} = 0$.\n` + q.statement;
    return q;
  }
  ['Polynôme caractéristique d\'une matrice 2x2', 'Polynôme caractéristique d\'une matrice 2×2', 'Valeurs propres d\'une matrice 2×2',
    'Valeurs propres d\'une matrice 2x2', 'Valeurs propres et polynôme caractéristique 2x2', 'Spectre d\'un polynôme en A',
    'Critère de diagonalisabilité', 'Trace d\'une puissance par diagonalisation'].forEach((t) => { RETOUCHES['veto-09'][t] = sansChi; });

  /** Fraction p/q (q > 0) réduite, signe placé devant */
  function fracS(p, q) { return p < 0 ? `-${fracTex(-p, q)}` : fracTex(p, q); }
  /** Écriture décimale d'un réel en mode math (virgule) */
  const virg = (x) => D(x, 6);

  /** veto-01 : partie entière, bornes d'une partie de R, injection et surjection (notions du programme BCPST absentes des gabarits de Licence) */
  function veto01Dedie(t, id) {
    const FAM = {
      1: ['partieEntiere', 'injSurj'],
      2: ['partieEntiere', 'equationPE', 'multiples', 'bornes', 'injSurj'],
      3: ['equationPE', 'multiples', 'bornes', 'injSurj'],
      4: ['bornes', 'multiples']
    };
    const fam = pick(FAM[t] || FAM[2]);
    const H1PE = 'Par définition, $\\lfloor x \\rfloor$ est l\'unique entier $n$ tel que $n \\leq x < n + 1$.';

    if (fam === 'partieEntiere') {
      const v = t === 1 ? pick(['frac', 'dec']) : pick(['frac', 'dec', 'rac']);
      let x, xTex, h2, just;
      if (v === 'frac') {
        let p, q;
        do { q = R(3, 9); p = R(-60, 60); } while (p % q === 0 || Math.abs(p) < q);
        const g = gcd(p, q); p /= g; q /= g;
        x = p / q; xTex = fracS(p, q);
        const f = Math.floor(x);
        h2 = `Encadre $${p}$ entre deux multiples consécutifs de $${q}$.`;
        const par = (z) => (z < 0 ? `(${z})` : String(z));
        just = `$${par(f)} \\times ${q} = ${f * q} \\leq ${p} < ${(f + 1) * q} = ${par(f + 1)} \\times ${q}$, donc en divisant par $${q} > 0$ : $${f} \\leq ${xTex} < ${f + 1}$.`;
      } else if (v === 'dec') {
        const s = pick([1, -1]);
        x = rd(s * (R(1, 12) + R(1, 9) / 10)); xTex = virg(x);
        const f = Math.floor(x);
        h2 = s < 0 ? 'Pour un réel négatif non entier, la partie entière ne s\'obtient pas en effaçant les décimales : par exemple $\\lfloor -0{,}5 \\rfloor = -1$, car $-1 \\leq -0{,}5 < 0$.' : 'Repère les deux entiers consécutifs entre lesquels se trouve ce nombre.';
        just = `$${f} \\leq ${xTex} < ${f + 1}$.`;
      } else {
        let n;
        do { n = R(5, 150); } while (Number.isInteger(Math.sqrt(n)));
        const k = Math.floor(Math.sqrt(n)), s = pick([1, -1]);
        x = s * Math.sqrt(n); xTex = `${s < 0 ? '-' : ''}\\sqrt{${n}}`;
        h2 = `Encadre $${n}$ entre deux carrés d'entiers consécutifs.`;
        const enc = `$${k}^{2} = ${k * k} < ${n} < ${(k + 1) ** 2} = ${k + 1}^{2}$, donc $${k} < \\sqrt{${n}} < ${k + 1}$`;
        just = s > 0 ? `${enc}.` : `${enc}, puis $${-k - 1} < -\\sqrt{${n}} < ${-k}$.`;
      }
      const f = Math.floor(x);
      return Q(id, t, 'Partie entière d\'un réel', 'Calculer la partie entière d\'un réel',
        `Calculer la partie entière $\\left\\lfloor ${xTex} \\right\\rfloor$.`,
        `$${f}$`, [`$${f + 1}$`, `$${f - 1}$`, `$${Math.trunc(x) === f ? f + 2 : Math.trunc(x)}$`, `$${-f}$`],
        H1PE, h2,
        `${just}\nL'entier $${f}$ vérifie $${f} \\leq ${xTex} < ${f} + 1$ : par définition, $\\left\\lfloor ${xTex} \\right\\rfloor = ${f}$.`,
        String(f));
    }

    if (fam === 'equationPE') {
      const a = R(2, 5) * (t >= 3 && Math.random() < 0.5 ? -1 : 1), b = R(-5, 5), m = R(-4, 8);
      const axb = U.poly([[a, 'x'], [b, '']]);
      const itv = (lo, hi, g, d) => `$x \\in \\left${g}${lo} ; ${hi}\\right${d}$`;
      let ans, dis, etape;
      if (a > 0) {
        const lo = fracS(m - b, a), hi = fracS(m + 1 - b, a);
        ans = itv(lo, hi, '[', '[');
        dis = [itv(lo, hi, '[', ']'), itv(lo, hi, ']', ']'), itv(fracS(m + b, a), fracS(m + 1 + b, a), '[', '['), itv(lo, fracS(m - b + a, a), '[', '[')];
        etape = `${b === 0 ? '' : `$${m - b} \\leq ${a}x < ${m + 1 - b}$, puis, `}en divisant par $${a} > 0$ : $${lo} \\leq x < ${hi}$.`;
      } else {
        const lo = fracS(b - m - 1, -a), hi = fracS(b - m, -a);
        ans = itv(lo, hi, ']', ']');
        dis = [itv(lo, hi, '[', '['), itv(fracS(m - b, -a), fracS(m + 1 - b, -a), '[', '['), itv(lo, hi, '[', ']'), itv(fracS(-m - 1 - b, -a), fracS(-m - b, -a), ']', ']')];
        etape = `$${m - b} \\leq ${a}x < ${m + 1 - b}$, puis, en divisant par $${a} < 0$, ce qui change le sens des inégalités : $${lo} < x \\leq ${hi}$.`;
      }
      return Q(id, t, 'Équation avec une partie entière', 'Résoudre une équation faisant intervenir la partie entière',
        `Résoudre dans $\\mathbb{R}$ l'équation $\\lfloor ${axb} \\rfloor = ${m}$.`,
        ans, dis,
        `${H1PE} Traduis l'équation par un encadrement de $${axb}$.`,
        `L'équation équivaut à $${m} \\leq ${axb} < ${m + 1}$.`,
        `Comme $${m}$ est un entier, $\\lfloor ${axb} \\rfloor = ${m} \\iff ${m} \\leq ${axb} < ${m + 1}$, c'est-à-dire ${etape}\nL'ensemble des solutions est donc ${ans.replace('x \\in ', '')}.`,
        null);
    }

    if (fam === 'multiples') {
      const v = t === 2 ? 'simple' : t === 3 ? pick(['simple', 'entre']) : pick(['entre', 'union']);
      const H1 = 'Les multiples de $d$ compris entre $1$ et $N$ sont $d, 2d, \\ldots, kd$, où $k$ est le plus grand entier tel que $kd \\leq N$ : exprime $k$ avec une partie entière.';
      if (v === 'simple') {
        const d = R(3, 13); let N;
        do { N = R(100, 999); } while (N % d === 0);
        const k = Math.floor(N / d);
        return Q(id, t, 'Compter des multiples', 'Dénombrer des multiples à l\'aide de la partie entière',
          `Les $${N}$ souris d'un élevage sont numérotées de $1$ à $${N}$. On contrôle celles dont le numéro est un multiple de $${d}$. Combien de souris sont contrôlées ?`,
          `$${k}$`, [`$${k + 1}$`, `$${k - 1}$`, `$${Math.round(N / d)}$`, `$${N - k}$`],
          H1, `Il s'agit du plus grand entier $k$ tel que $k \\leq \\dfrac{${N}}{${d}}$.`,
          `Les multiples de $${d}$ compris entre $1$ et $${N}$ sont les nombres $${d}k$, où $k$ est un entier tel que $k \\geq 1$ et $${d}k \\leq ${N}$, c'est-à-dire $k \\leq \\dfrac{${N}}{${d}}$. Le nombre de multiples est donc $\\left\\lfloor \\dfrac{${N}}{${d}} \\right\\rfloor = ${k}$, car $${d} \\times ${k} = ${d * k} \\leq ${N} < ${d * (k + 1)} = ${d} \\times ${k + 1}$.\n**${k} souris** sont contrôlées.`,
          String(k));
      }
      if (v === 'entre') {
        const d = R(3, 12), A = R(50, 300), B = A + R(100, 600);
        const kB = Math.floor(B / d), kA = Math.floor((A - 1) / d), n = kB - kA;
        return Q(id, t, 'Multiples dans un intervalle d\'entiers', 'Dénombrer des multiples à l\'aide de la partie entière',
          `Combien y a-t-il de multiples de $${d}$ parmi les entiers compris entre $${A}$ et $${B}$ (inclus) ?`,
          `$${n}$`, [`$${n + 1}$`, `$${n - 1}$`, `$${Math.floor((B - A) / d)}$`, `$${kB}$`],
          `${H1} Compte ensuite les multiples de $${d}$ entre $1$ et $${B}$, puis retire ceux compris entre $1$ et $${A - 1}$.`,
          `Entre $1$ et $${B}$, il y a $\\left\\lfloor \\dfrac{${B}}{${d}} \\right\\rfloor$ multiples de $${d}$ ; entre $1$ et $${A - 1}$, il y en a $\\left\\lfloor \\dfrac{${A - 1}}{${d}} \\right\\rfloor$.`,
          `Entre $1$ et $${B}$ : $\\left\\lfloor \\dfrac{${B}}{${d}} \\right\\rfloor = ${kB}$ multiples de $${d}$. Entre $1$ et $${A - 1}$ : $\\left\\lfloor \\dfrac{${A - 1}}{${d}} \\right\\rfloor = ${kA}$. Les multiples compris entre $${A}$ et $${B}$ sont donc au nombre de $${kB} - ${kA} = ${n}$.`,
          String(n));
      }
      const [d1, d2] = pick([[2, 3], [2, 5], [3, 4], [3, 5], [4, 5], [2, 7], [3, 7], [5, 7]]);
      const N = R(200, 2000), p = d1 * d2;
      const n1 = Math.floor(N / d1), n2 = Math.floor(N / d2), n12 = Math.floor(N / p), n = n1 + n2 - n12;
      return Q(id, t, 'Multiples de l\'un ou de l\'autre', 'Dénombrer une réunion avec la partie entière',
        `Combien d'entiers compris entre $1$ et $${N}$ sont multiples de $${d1}$ ou de $${d2}$ ?`,
        `$${n}$`, [`$${n1 + n2}$`, `$${n1 + n2 - 2 * n12}$`, `$${n1 * n2 === n ? n + 1 : n - 1}$`, `$${n + n12}$`],
        'Utilise le cardinal d\'une réunion, $\\text{Card}(A \\cup B) = \\text{Card}(A) + \\text{Card}(B) - \\text{Card}(A \\cap B)$, et compte chaque ensemble de multiples avec une partie entière.',
        `Un entier est multiple de $${d1}$ et de $${d2}$ si et seulement s'il est multiple de $${p}$.`,
        `Soit $A$ (resp. $B$) l'ensemble des multiples de $${d1}$ (resp. $${d2}$) entre $1$ et $${N}$. $\\text{Card}(A) = \\left\\lfloor \\dfrac{${N}}{${d1}} \\right\\rfloor = ${n1}$, $\\text{Card}(B) = \\left\\lfloor \\dfrac{${N}}{${d2}} \\right\\rfloor = ${n2}$ et $A \\cap B$ est l'ensemble des multiples de $${p}$ : $\\text{Card}(A \\cap B) = \\left\\lfloor \\dfrac{${N}}{${p}} \\right\\rfloor = ${n12}$.\nDonc $\\text{Card}(A \\cup B) = ${n1} + ${n2} - ${n12} = ${n}$.`,
        String(n));
    }

    if (fam === 'bornes') {
      const v = t === 2 ? pick(['moins', 'plus', 'itv']) : t === 3 ? pick(['moins', 'plus', 'homo']) : pick(['homo', 'alterne']);
      let ens, quoi, val, atteinte, autre, h2, sol;
      if (v === 'moins' || v === 'plus') {
        const a = R(-5, 6), b = R(1, 6), s = v === 'moins' ? -1 : 1;
        ens = `A = \\left\\{${a === 0 ? (s < 0 ? '-' : '') : `${a} ${s < 0 ? '-' : '+'} `}\\dfrac{${b}}{n} : n \\in \\mathbb{N}^{*}\\right\\}`;
        const un = `u_n = ${a === 0 ? (s < 0 ? '-' : '') : `${a} ${s < 0 ? '-' : '+'} `}\\dfrac{${b}}{n}`;
        const ext = a + s * b;
        quoi = pick(['sup', 'inf']);
        const croiss = s < 0 ? 'croissante' : 'décroissante';
        h2 = `La suite $(u_n)$ définie par $${un}$ est ${croiss} et tend vers $${a}$.`;
        if ((quoi === 'sup') === (s < 0)) { val = a; atteinte = false; autre = ext; } else { val = ext; atteinte = true; autre = a; }
        sol = `Posons $${un}$ pour $n \\geq 1$ : $n \\mapsto \\dfrac{${b}}{n}$ est décroissante, donc $(u_n)$ est ${croiss}, de premier terme $u_1 = ${ext}$ et de limite $${a}$. `
          + (s < 0
            ? `Ainsi $${ext} \\leq u_n < ${a}$ pour tout $n$. `
            : `Ainsi $${a} < u_n \\leq ${ext}$ pour tout $n$. `)
          + (atteinte
            ? `$${ext} = u_1$ appartient à $A$ et ${quoi === 'sup' ? 'majore' : 'minore'} $A$ : c'est le ${quoi === 'sup' ? 'plus grand' : 'plus petit'} élément, donc $\\${quoi} A = ${ext}$, atteinte.`
            : `$${a}$ ${quoi === 'sup' ? 'majore' : 'minore'} $A$ ; pour tout $\\varepsilon > 0$, il existe $n$ tel que $u_n ${quoi === 'sup' ? '>' : '<'} ${a} ${quoi === 'sup' ? '-' : '+'} \\varepsilon$ (car $u_n \\to ${a}$), donc aucun ${quoi === 'sup' ? 'majorant' : 'minorant'} n'est ${quoi === 'sup' ? 'plus petit' : 'plus grand'} que $${a}$ : $\\${quoi} A = ${a}$. Elle n'est pas atteinte, car $u_n \\neq ${a}$ pour tout $n$.`);
      } else if (v === 'itv') {
        const a = R(-6, 2), b = a + R(2, 7);
        ens = `A = [${a} ; ${b}[`;
        quoi = pick(['sup', 'inf']);
        if (quoi === 'sup') { val = b; atteinte = false; autre = a; } else { val = a; atteinte = true; autre = b; }
        h2 = quoi === 'sup' ? `$${b}$ majore $A$ ; un réel $M < ${b}$ peut-il majorer $A$ ?` : `$${a}$ appartient-il à $A$ ?`;
        sol = quoi === 'sup'
          ? `$${b}$ majore $A$. Si $M < ${b}$, le réel $\\max\\left(${a}, \\dfrac{M + ${b}}{2}\\right)$ appartient à $A$ et dépasse $M$, donc $M$ ne majore pas $A$ : $\\sup A = ${b}$. Elle n'est pas atteinte, car $${b} \\notin A$ ; $A$ n'a pas de plus grand élément.`
          : `$${a}$ minore $A$ et appartient à $A$ : c'est le plus petit élément de $A$, donc $\\inf A = ${a}$, atteinte.`;
      } else if (v === 'homo') {
        let p, q;
        do { p = R(-4, 6); q = R(-6, 8); } while (p === q);
        const croiss = q < p;
        ens = `A = \\left\\{\\dfrac{${U.poly([[p, 'n'], [q, '']]) || '0'}}{n + 1} : n \\in \\mathbb{N}\\right\\}`;
        const c = q - p;
        const un = `u_n = ${p === 0 ? '' : `${p} ${c < 0 ? '-' : '+'} `}${p === 0 && c < 0 ? '-' : ''}\\dfrac{${Math.abs(c)}}{n + 1}`;
        quoi = pick(['sup', 'inf']);
        h2 = `Écris $\\dfrac{${U.poly([[p, 'n'], [q, '']]) || '0'}}{n + 1}$ sous la forme $${p} + \\dfrac{c}{n + 1}$ et étudie le sens de variation.`;
        // croissante : min q (n = 0), sup p non atteinte ; décroissante : max q, inf p non atteinte
        if ((quoi === 'inf') === croiss) { val = q; atteinte = true; autre = p; } else { val = p; atteinte = false; autre = q; }
        sol = `Pour $n \\in \\mathbb{N}$, $${un}$. La suite $(u_n)$ est ${croiss ? 'croissante' : 'décroissante'}, de premier terme $u_0 = ${q}$ et de limite $${p}$ : `
          + (croiss ? `$${q} \\leq u_n < ${p}$` : `$${p} < u_n \\leq ${q}$`) + ' pour tout $n$. '
          + (atteinte
            ? `$${q} = u_0$ appartient à $A$ et ${quoi === 'sup' ? 'majore' : 'minore'} $A$ : c'est le ${quoi === 'sup' ? 'plus grand' : 'plus petit'} élément, donc $\\${quoi} A = ${q}$, atteinte.`
            : `$${p}$ ${quoi === 'sup' ? 'majore' : 'minore'} $A$, et comme $u_n \\to ${p}$, aucun réel ${quoi === 'sup' ? 'strictement inférieur' : 'strictement supérieur'} à $${p}$ ne ${quoi === 'sup' ? 'majore' : 'minore'} $A$ : $\\${quoi} A = ${p}$. Elle n'est pas atteinte, car $u_n \\neq ${p}$ pour tout $n$.`);
      } else {
        const a = R(1, 4), b = R(1, Math.min(5, 4 * a - 1));
        ens = `A = \\left\\{${a === 1 ? '' : a}(-1)^{n} + \\dfrac{${b}}{n} : n \\in \\mathbb{N}^{*}\\right\\}`;
        quoi = pick(['sup', 'inf']);
        const maxi = fracS(2 * a + b, 2);
        if (quoi === 'sup') { val = maxi; atteinte = true; autre = a; } else { val = -a; atteinte = false; autre = b - a; }
        h2 = 'Sépare les rangs pairs et les rangs impairs, puis étudie chacune des deux sous-suites.';
        sol = `Pour $n = 2p$ pair, $u_{2p} = ${a} + \\dfrac{${b}}{2p}$ décroît de $u_2 = ${maxi}$ vers $${a}$. Pour $n = 2p + 1$ impair, $u_{2p+1} = ${-a} + \\dfrac{${b}}{2p + 1}$ décroît de $u_1 = ${b - a}$ vers $${-a}$, en restant strictement supérieur à $${-a}$. `
          + `Comme $${b - a} < ${maxi}$, on a $${-a} < u_n \\leq ${maxi}$ pour tout $n \\geq 1$. `
          + (quoi === 'sup'
            ? `$${maxi} = u_2$ appartient à $A$ et le majore : $\\sup A = ${maxi}$, atteinte (plus grand élément).`
            : `$${-a}$ minore $A$, et comme $u_{2p+1} \\to ${-a}$, aucun réel strictement supérieur à $${-a}$ ne minore $A$ : $\\inf A = ${-a}$. Elle n'est pas atteinte.`);
      }
      const B = quoi === 'sup' ? '\\sup' : '\\inf';
      const opt = (x, att) => `$${B} A = ${x}$, ${att ? 'atteinte' : 'non atteinte'}`;
      const pas = quoi === 'sup' ? '$A$ n\'est pas majorée' : '$A$ n\'est pas minorée';
      return Q(id, t, quoi === 'sup' ? 'Borne supérieure d\'une partie de R' : 'Borne inférieure d\'une partie de R', 'Déterminer une borne et dire si elle est atteinte',
        `On considère $${ens}$. Déterminer $${B} A$ et préciser si elle est atteinte (c'est-à-dire si elle appartient à $A$).`,
        opt(val, atteinte), [opt(val, !atteinte), opt(autre, !atteinte), opt(autre, atteinte), pas],
        `${quoi === 'sup' ? 'La borne supérieure est le plus petit des majorants' : 'La borne inférieure est le plus grand des minorants'} ; elle est atteinte si elle appartient à $A$. Pour un ensemble de valeurs d'une suite, étudie son sens de variation et sa limite.`,
        h2, sol, null);
    }

    // injSurj
    const a = pick([-5, -4, -3, -2, 2, 3, 4, 5]), b = R(-6, 6), c = R(1, 6);
    const P = '[0 ; +\\infty[', Rr = '\\mathbb{R}';
    const affine = U.poly([[a, 'x'], [b, '']]);
    const CAS = [
      ['x^{2}', Rr, Rr, 'ni', 'Compare $f(-1)$ et $f(1)$, puis cherche un antécédent de $-1$.', '$f(-1) = f(1) = 1$ : $f$ n\'est pas injective. Un carré est positif, donc $-1$ n\'a pas d\'antécédent : $f$ n\'est pas surjective.'],
      ['x^{2}', Rr, P, 'surj', 'Compare $f(-1)$ et $f(1)$ ; pour $y \\geq 0$, pense à $\\sqrt{y}$.', '$f(-1) = f(1)$ : $f$ n\'est pas injective. Tout $y \\geq 0$ s\'écrit $y = (\\sqrt{y})^{2}$ : $f$ est surjective.'],
      ['x^{2}', P, Rr, 'inj', 'Étudie la monotonie de $f$ sur $[0 ; +\\infty[$, puis cherche un antécédent de $-1$.', '$f$ est strictement croissante sur $[0 ; +\\infty[$, donc injective. $-1$ n\'a pas d\'antécédent (un carré est positif) : $f$ n\'est pas surjective.'],
      ['x^{2}', P, P, 'bij', 'Pour $y \\geq 0$, combien de réels $x \\geq 0$ vérifient $x^{2} = y$ ?', 'Pour tout $y \\geq 0$, l\'équation $x^{2} = y$ a une unique solution $x \\geq 0$, à savoir $\\sqrt{y}$ : $f$ est bijective, de réciproque $y \\mapsto \\sqrt{y}$.'],
      ['e^{x}', Rr, Rr, 'inj', 'Étudie la monotonie de $\\exp$, puis cherche un antécédent de $-1$.', '$\\exp$ est strictement croissante, donc injective. Comme $e^{x} > 0$, $-1$ n\'a pas d\'antécédent : $f$ n\'est pas surjective.'],
      ['e^{x}', Rr, ']0 ; +\\infty[', 'bij', 'Pour $y > 0$, résous $e^{x} = y$.', 'Pour tout $y > 0$, l\'équation $e^{x} = y$ a pour unique solution $x = \\ln y$ : $f$ est bijective, de réciproque $\\ln$.'],
      ['\\ln x', ']0 ; +\\infty[', Rr, 'bij', 'Pour $y \\in \\mathbb{R}$, résous $\\ln x = y$.', 'Pour tout réel $y$, l\'équation $\\ln x = y$ a pour unique solution $x = e^{y}$ : $f$ est bijective, de réciproque $\\exp$.'],
      ['x^{3}', Rr, Rr, 'bij', 'Étudie la monotonie, la continuité et les limites de $f$ en $-\\infty$ et en $+\\infty$.', '$f$ est continue et strictement croissante sur $\\mathbb{R}$, de limites $-\\infty$ et $+\\infty$ : d\'après le théorème de la bijection, $f$ est une bijection de $\\mathbb{R}$ sur $\\mathbb{R}$.'],
      [affine, Rr, Rr, 'bij', `Pour $y \\in \\mathbb{R}$, résous $${affine} = y$.`, `Pour tout réel $y$, l'équation $${affine} = y$ a pour unique solution $x = \\dfrac{${b === 0 ? 'y' : `y ${b < 0 ? '+' : '-'} ${Math.abs(b)}`}}{${a}}$ : $f$ est bijective.`],
      ['\\dfrac{1}{x}', ']0 ; +\\infty[', Rr, 'inj', 'Étudie la monotonie de $f$ sur $]0 ; +\\infty[$, puis le signe de ses valeurs.', '$f$ est strictement décroissante sur $]0 ; +\\infty[$, donc injective. Ses valeurs sont strictement positives, donc $-1$ n\'a pas d\'antécédent : $f$ n\'est pas surjective.'],
      ['\\dfrac{1}{x}', '\\mathbb{R}^{*}', '\\mathbb{R}^{*}', 'bij', 'Pour $y \\neq 0$, résous $\\dfrac{1}{x} = y$.', 'Pour tout $y \\neq 0$, l\'équation $\\dfrac{1}{x} = y$ a pour unique solution $x = \\dfrac{1}{y}$ : $f$ est bijective et elle est sa propre réciproque.'],
      ['|x|', Rr, Rr, 'ni', 'Compare $f(-1)$ et $f(1)$, puis cherche un antécédent de $-1$.', '$f(-1) = f(1) = 1$ : $f$ n\'est pas injective. Une valeur absolue est positive, donc $-1$ n\'a pas d\'antécédent : $f$ n\'est pas surjective.'],
      ['|x|', Rr, P, 'surj', 'Compare $f(-1)$ et $f(1)$ ; pour $y \\geq 0$, cherche un antécédent.', '$f(-1) = f(1)$ : $f$ n\'est pas injective. Tout $y \\geq 0$ vérifie $|y| = y$ : $f$ est surjective.'],
      ['\\cos x', Rr, '[-1 ; 1]', 'surj', 'Compare $f(0)$ et $f(2\\pi)$ ; quelles valeurs prend $\\cos$ sur $[0 ; \\pi]$ ?', '$\\cos 0 = \\cos 2\\pi$ : $f$ n\'est pas injective. $\\cos$ est continue sur $[0 ; \\pi]$, avec $\\cos 0 = 1$ et $\\cos \\pi = -1$ : par le théorème des valeurs intermédiaires, tout $y \\in [-1 ; 1]$ a un antécédent, donc $f$ est surjective.'],
      ['\\cos x', '[0 ; \\pi]', '[-1 ; 1]', 'bij', 'Étudie la monotonie et la continuité de $\\cos$ sur $[0 ; \\pi]$.', '$\\cos$ est continue et strictement décroissante sur $[0 ; \\pi]$, avec $\\cos 0 = 1$ et $\\cos \\pi = -1$ : d\'après le théorème de la bijection, $f$ est bijective, de réciproque $\\arccos$.'],
      ['\\sin x', '\\left[-\\dfrac{\\pi}{2} ; \\dfrac{\\pi}{2}\\right]', '[-1 ; 1]', 'bij', 'Étudie la monotonie et la continuité de $\\sin$ sur $\\left[-\\dfrac{\\pi}{2} ; \\dfrac{\\pi}{2}\\right]$.', '$\\sin$ est continue et strictement croissante sur $\\left[-\\dfrac{\\pi}{2} ; \\dfrac{\\pi}{2}\\right]$, de $-1$ à $1$ : d\'après le théorème de la bijection, $f$ est bijective, de réciproque $\\arcsin$.'],
      ['\\sin x', Rr, Rr, 'ni', 'Compare $f(0)$ et $f(\\pi)$, puis cherche un antécédent de $2$.', '$\\sin 0 = \\sin \\pi = 0$ : $f$ n\'est pas injective. $|\\sin x| \\leq 1$, donc $2$ n\'a pas d\'antécédent : $f$ n\'est pas surjective.'],
      [`x^{2} + ${c}`, Rr, `[${c} ; +\\infty[`, 'surj', `Compare $f(-1)$ et $f(1)$ ; pour $y \\geq ${c}$, pense à $\\sqrt{y - ${c}}$.`, `$f(-1) = f(1)$ : $f$ n'est pas injective. Pour $y \\geq ${c}$, $f\\left(\\sqrt{y - ${c}}\\right) = y$ : $f$ est surjective.`],
      [`x^{2} + ${c}`, P, `[${c} ; +\\infty[`, 'bij', `Pour $y \\geq ${c}$, combien de réels $x \\geq 0$ vérifient $x^{2} + ${c} = y$ ?`, `Pour tout $y \\geq ${c}$, l'équation $x^{2} + ${c} = y$ a une unique solution $x \\geq 0$, à savoir $\\sqrt{y - ${c}}$ : $f$ est bijective.`],
      [`e^{x} + ${c}`, Rr, Rr, 'inj', `Étudie la monotonie de $f$, puis cherche un antécédent de $${c}$.`, `$f$ est strictement croissante, donc injective. Comme $e^{x} > 0$, $f(x) > ${c}$ : $${c}$ n'a pas d'antécédent, et $f$ n'est pas surjective.`]
    ];
    const [expr, E, F, nat, h2, sol] = pick(CAS);
    const NAT = { inj: 'Injective mais non surjective', surj: 'Surjective mais non injective', bij: 'Bijective', ni: 'Ni injective ni surjective' };
    return Q(id, t, 'Injection, surjection, bijection', 'Reconnaître une application injective, surjective ou bijective',
      `On considère l'application $f : ${E} \\to ${F}$, $x \\mapsto ${expr}$. Cette application est :`,
      NAT[nat], Object.keys(NAT).filter((k) => k !== nat).map((k) => NAT[k]),
      'Injective : deux éléments distincts de l\'ensemble de départ ont des images distinctes. Surjective : tout élément de l\'ensemble d\'arrivée a au moins un antécédent. La réponse dépend des ensembles de départ et d\'arrivée.',
      h2, `${sol}\nConclusion : ${NAT[nat].toLowerCase()}.`, null);
  }

  /** Puissance de 10 écrite en décimal (1 000, 0,01…) */
  function pow10Tex(n) {
    if (n < 0) return `0{,}${'0'.repeat(-n - 1)}1`;
    const s = '1' + '0'.repeat(n);
    return s.length >= 5 ? s.replace(/\B(?=(\d{3})+$)/g, '\\,') : s;
  }

  /** veto-04 : parité d'une fonction et logarithme décimal (fonctions usuelles du programme BCPST) */
  function veto04Dedie(t, id) {
    const fam = t === 3 ? 'parite' : pick(['parite', 'log10']);
    if (fam === 'parite') {
      const k = R(2, 5), m = R(1, 6), c = R(1, 9);
      const Rr = '\\mathbb{R}';
      // [expression, ensemble de définition, nature, indice 2, corrigé]
      const CAS1 = [
        [`${k}x^{4} - ${m}x^{2} + ${c}`, Rr, 'paire', '$(-x)^{4} = x^{4}$ et $(-x)^{2} = x^{2}$.', `$f(-x) = ${k}(-x)^{4} - ${m}(-x)^{2} + ${c} = ${k}x^{4} - ${m}x^{2} + ${c} = f(x)$.`],
        [`${k}x^{3} - ${m}x`, Rr, 'impaire', '$(-x)^{3} = -x^{3}$.', `$f(-x) = ${k}(-x)^{3} - ${m}(-x) = -${k}x^{3} + ${m}x = -f(x)$.`],
        [`x^{3} + ${k}x^{2}`, Rr, 'ni', 'Calcule $f(1)$ et $f(-1)$.', `$f(1) = ${1 + k}$ et $f(-1) = ${k - 1}$ : $f(-1) \\neq f(1)$ et $f(-1) \\neq -f(1) = ${-1 - k}$.`],
        [`e^{${k}x}`, Rr, 'ni', 'Calcule $f(1)$ et $f(-1)$, et pense au signe de l\'exponentielle.', `$f(-1) = e^{-${k}} \\neq e^{${k}} = f(1)$, et $f(-1) > 0 > -f(1)$, donc $f(-1) \\neq -f(1)$.`],
        [`\\cos(${k}x) + x^{2}`, Rr, 'paire', '$\\cos$ est paire.', `$f(-x) = \\cos(-${k}x) + (-x)^{2} = \\cos(${k}x) + x^{2} = f(x)$.`],
        ['x^{2}\\sin x', Rr, 'impaire', '$\\sin$ est impaire.', '$f(-x) = (-x)^{2}\\sin(-x) = -x^{2}\\sin x = -f(x)$.'],
        [`\\dfrac{x}{x^{2} + ${k}}`, Rr, 'impaire', `$(-x)^{2} + ${k} = x^{2} + ${k}$.`, `$f(-x) = \\dfrac{-x}{(-x)^{2} + ${k}} = -\\dfrac{x}{x^{2} + ${k}} = -f(x)$.`],
        [`|x| - ${k}`, Rr, 'paire', '$|-x| = |x|$.', `$f(-x) = |-x| - ${k} = |x| - ${k} = f(x)$.`],
        ['\\sqrt{x}', '[0 ; +\\infty[', 'ni', 'L\'ensemble de définition est-il symétrique par rapport à $0$ ?', '$1$ appartient à l\'ensemble de définition mais pas $-1$ : $[0 ; +\\infty[$ n\'est pas symétrique par rapport à $0$, donc la question de la parité ne se pose pas.'],
        [`(x - ${k})^{2}`, Rr, 'ni', `Calcule $f(${k})$ et $f(-${k})$.`, `$f(${k}) = 0$ et $f(-${k}) = ${4 * k * k}$ : $f(-${k}) \\neq f(${k})$ et $f(-${k}) \\neq -f(${k}) = 0$.`]
      ];
      const CAS2 = [
        [`xe^{-${k}x^{2}}`, Rr, 'impaire', '$(-x)^{2} = x^{2}$.', `$f(-x) = (-x)e^{-${k}(-x)^{2}} = -xe^{-${k}x^{2}} = -f(x)$.`],
        [`e^{-${k}x^{2}}`, Rr, 'paire', '$(-x)^{2} = x^{2}$.', `$f(-x) = e^{-${k}(-x)^{2}} = e^{-${k}x^{2}} = f(x)$.`],
        [`\\ln(1 + ${k}x^{2})`, Rr, 'paire', '$(-x)^{2} = x^{2}$.', `$f(-x) = \\ln(1 + ${k}(-x)^{2}) = \\ln(1 + ${k}x^{2}) = f(x)$.`],
        ['x|x|', Rr, 'impaire', '$|-x| = |x|$.', '$f(-x) = (-x)|-x| = -x|x| = -f(x)$.'],
        [`\\dfrac{1}{x - ${k}}`, `\\mathbb{R} \\setminus \\{${k}\\}`, 'ni', 'L\'ensemble de définition est-il symétrique par rapport à $0$ ?', `$-${k}$ appartient à l'ensemble de définition mais pas $${k}$ : il n'est pas symétrique par rapport à $0$.`],
        [`x^{3} + ${k}`, Rr, 'ni', 'Calcule $f(0)$, puis compare $f(1)$ et $f(-1)$.', `Une fonction impaire définie en $0$ vérifie $f(0) = -f(0)$, soit $f(0) = 0$ ; or $f(0) = ${k}$. De plus $f(1) = ${1 + k} \\neq ${k - 1} = f(-1)$.`]
      ];
      const CAS3 = [
        [`\\ln\\left(\\dfrac{${k} + x}{${k} - x}\\right)`, `]-${k} ; ${k}[`, 'impaire', '$\\ln\\dfrac{1}{u} = -\\ln u$.', `$]-${k} ; ${k}[$ est symétrique par rapport à $0$ et $f(-x) = \\ln\\left(\\dfrac{${k} - x}{${k} + x}\\right) = -\\ln\\left(\\dfrac{${k} + x}{${k} - x}\\right) = -f(x)$.`],
        [`e^{${k}x} - e^{-${k}x}`, Rr, 'impaire', 'Calcule $f(-x)$ en remplaçant $x$ par $-x$ dans chaque exponentielle.', `$f(-x) = e^{-${k}x} - e^{${k}x} = -\\left(e^{${k}x} - e^{-${k}x}\\right) = -f(x)$.`],
        [`e^{${k}x} + e^{-${k}x}`, Rr, 'paire', 'Calcule $f(-x)$ en remplaçant $x$ par $-x$ dans chaque exponentielle.', `$f(-x) = e^{-${k}x} + e^{${k}x} = f(x)$.`],
        ['\\cos^{2} x + \\sin^{2} x - 1', Rr, 'les2', 'Simplifie l\'expression de $f(x)$.', '$\\cos^{2} x + \\sin^{2} x = 1$, donc $f$ est la fonction nulle : $f(-x) = 0 = f(x)$ et $f(-x) = 0 = -f(x)$.'],
        [`x\\sin(${k}x)`, Rr, 'paire', '$\\sin$ est impaire.', `$f(-x) = (-x)\\sin(-${k}x) = (-x)(-\\sin(${k}x)) = x\\sin(${k}x) = f(x)$.`],
        ['\\ln|x|', '\\mathbb{R}^{*}', 'paire', '$|-x| = |x|$.', '$\\mathbb{R}^{*}$ est symétrique par rapport à $0$ et $f(-x) = \\ln|-x| = \\ln|x| = f(x)$.']
      ];
      const pool = t === 1 ? CAS1 : t === 2 ? CAS1.concat(CAS2) : CAS2.concat(CAS3);
      const [expr, dom, nat, h2, calc] = pick(pool);
      const NAT = { paire: 'Paire', impaire: 'Impaire', ni: 'Ni paire ni impaire', les2: 'À la fois paire et impaire' };
      const concl = { paire: '$f$ est paire : sa courbe est symétrique par rapport à l\'axe des ordonnées.', impaire: '$f$ est impaire : sa courbe est symétrique par rapport à l\'origine.', ni: '$f$ n\'est ni paire ni impaire.', les2: '$f$ est à la fois paire et impaire (c\'est la seule fonction définie sur $\\mathbb{R}$ dans ce cas).' };
      const symDom = dom === Rr ? 'L\'ensemble de définition $\\mathbb{R}$ est symétrique par rapport à $0$. ' : '';
      return Q(id, t, 'Parité d\'une fonction', 'Étudier la parité d\'une fonction',
        `Soit $f$ la fonction définie sur $${dom}$ par $f(x) = ${expr}$. La fonction $f$ est :`,
        NAT[nat], Object.keys(NAT).filter((x) => x !== nat).map((x) => NAT[x]),
        'Vérifie d\'abord que l\'ensemble de définition est symétrique par rapport à $0$, puis calcule $f(-x)$ et compare-le à $f(x)$ et à $-f(x)$.',
        h2, `${symDom}${calc}\nAinsi ${concl[nat]}`, null);
    }

    const v = pick(t === 1 ? ['produit', 'pH', 'equation'] : ['produit', 'racine', 'pH', 'equation', 'log2']);
    const H1 = 'Utilise $\\log(xy) = \\log x + \\log y$ et $\\log 10^{n} = n$ pour tout entier $n$.';
    if (v === 'produit') {
      let m, n;
      do { m = R(-3, 5); n = R(-3, 4); } while (m === 0 || n === 0 || m === n);
      const quot = Math.random() < 0.5, r = quot ? m - n : m + n;
      const expr = quot ? `\\log\\left(\\dfrac{${pow10Tex(m)}}{${pow10Tex(n)}}\\right)` : `\\log(${pow10Tex(m)} \\times ${pow10Tex(n)})`;
      return Q(id, t, 'Calcul avec le logarithme décimal', 'Calculer avec le logarithme décimal',
        `Calculer $${expr}$.`,
        `$${r}$`, [`$${quot ? m + n : m - n}$`, `$${m * n}$`, `$${-r}$`, `$${r + 1}$`],
        quot ? 'Utilise $\\log\\dfrac{x}{y} = \\log x - \\log y$ et $\\log 10^{n} = n$ pour tout entier $n$.' : H1,
        `$${pow10Tex(m)} = 10^{${m}}$ et $${pow10Tex(n)} = 10^{${n}}$.`,
        `$${pow10Tex(m)} = 10^{${m}}$ et $${pow10Tex(n)} = 10^{${n}}$, donc $${expr} = \\log 10^{${quot ? `${m} - ${n < 0 ? `(${n})` : n}` : `${m} + ${n < 0 ? `(${n})` : n}`}} = ${r}$.`,
        String(r));
    }
    if (v === 'racine') {
      const m = pick([1, 3, 5, 7, -1, -3]);
      return Q(id, t, 'Logarithme décimal d\'une racine', 'Calculer avec le logarithme décimal',
        `Calculer $\\log\\sqrt{${pow10Tex(m)}}$.`,
        `$${fracS(m, 2)}$`, [`$${m}$`, `$${fracS(-m, 2)}$`, `$${2 * m}$`, `$${(m + 1) / 2}$`],
        'Écris le nombre sous la forme $10^{r}$, avec $r$ rationnel, puis utilise $\\log 10^{r} = r$.',
        `$\\sqrt{${pow10Tex(m)}} = \\left(10^{${m}}\\right)^{1/2}$.`,
        `$\\sqrt{${pow10Tex(m)}} = \\left(10^{${m}}\\right)^{1/2} = 10^{${m}/2}$, donc $\\log\\sqrt{${pow10Tex(m)}} = ${fracS(m, 2)}$.`,
        `${m}/2`);
    }
    if (v === 'pH') {
      const k = R(2, 6), mult = Math.random() < 0.5, j = R(1, mult ? Math.min(3, k - 1) : 3);
      const pH2 = mult ? k - j : k + j;
      return Q(id, t, 'pH et logarithme décimal', 'Utiliser le logarithme décimal en situation',
        `Le pH d'une solution vaut $\\text{pH} = -\\log c$, où $c$ est la concentration en ions oxonium (en mol/L). Une solution a une concentration $c = 10^{-${k}}$ mol/L. On ${mult ? 'multiplie' : 'divise'} cette concentration par $${pow10Tex(j)}$. Quel est le nouveau pH ?`,
        `$${pH2}$`, [`$${mult ? k + j : k - j}$`, `$${k}$`, `$${pH2 + 1}$`, `$${pH2 - 1}$`],
        'Calcule d\'abord le pH initial, puis utilise $\\log(xy) = \\log x + \\log y$.',
        `La nouvelle concentration vaut $10^{-${k}} ${mult ? '\\times' : '\\div'} ${j === 1 ? '10' : `10^{${j}}`} = 10^{${mult ? -k + j : -k - j}}$ mol/L.`,
        `Le pH initial vaut $-\\log 10^{-${k}} = ${k}$. La nouvelle concentration vaut $10^{-${k}} ${mult ? '\\times' : '\\div'} ${j === 1 ? '10' : `10^{${j}}`} = 10^{${mult ? -k + j : -k - j}}$ mol/L, donc le nouveau pH vaut $-\\log 10^{${mult ? -k + j : -k - j}} = ${pH2}$ : ${mult ? 'il diminue' : 'il augmente'} de $${j}$.`,
        String(pH2));
    }
    if (v === 'equation') {
      const k = pick([-3, -2, -1, 2, 3, 4]);
      return Q(id, t, 'Équation avec le logarithme décimal', 'Résoudre une équation avec le logarithme décimal',
        `Résoudre dans $]0 ; +\\infty[$ l'équation $\\log x = ${k}$.`,
        `$x = ${pow10Tex(k)}$`, [`$x = ${pow10Tex(-k)}$`, `$x = ${10 * k}$`, `$x = e^{${k}}$`, `$x = ${pow10Tex(k + (k > 0 ? 1 : -1))}$`],
        'Pour tout réel $k$, $\\log x = k \\iff x = 10^{k}$.',
        `La fonction $\\log$ est strictement croissante sur $]0 ; +\\infty[$ et $\\log 10^{${k}} = ${k}$.`,
        `$\\log$ est strictement croissante, donc injective, et $\\log 10^{${k}} = ${k}$ : l'unique solution est $x = 10^{${k}} = ${pow10Tex(k)}$.`,
        k < 0 ? `0,${'0'.repeat(-k - 1)}1` : String(10 ** k));
    }
    const n = pick([-3, -2, -1, 1, 2, 3, 4]);
    const nb = n < 0 ? `0{,}${'0'.repeat(-n - 1)}2` : (2 * 10 ** n >= 10000 ? String(2 * 10 ** n).replace(/\B(?=(\d{3})+$)/g, '\\,') : String(2 * 10 ** n));
    const val = n + 0.301;
    return Q(id, t, 'Valeur approchée d\'un logarithme décimal', 'Calculer avec le logarithme décimal',
      `On donne $\\log 2 \\approx 0{,}301$. Donner une valeur approchée de $\\log ${nb}$.`,
      `$${D(val)}$`, [`$${D(n - 0.301)}$`, `$${D(n + 0.699)}$`, `$${D(-val)}$`, `$${D(n + 0.602)}$`],
      'Écris le nombre sous la forme $2 \\times 10^{n}$ avec $n$ entier, puis utilise $\\log(xy) = \\log x + \\log y$.',
      `$${nb} = 2 \\times 10^{${n}}$.`,
      `$${nb} = 2 \\times 10^{${n}}$, donc $\\log ${nb} = \\log 2 + \\log 10^{${n}} \\approx 0{,}301 ${n < 0 ? '-' : '+'} ${Math.abs(n)} = ${D(val)}$.`,
      null);
  }

  /** Gabarits de Licence hors programme BCPST, remplacés au niveau véto par un exercice conforme (titre exact du gabarit) */
  const REMPLACES = {
    'veto-03': { 'Nature d\'une série à termes positifs': natureSerieReference },
    'veto-04': { 'Inégalité des accroissements finis': majorationParEgalite },
    // veto-08 et veto-09 : le programme BCPST limite le déterminant de matrice au format 2x2
    'veto-08': { 'Déterminant d\'une matrice triangulaire 3x3': triangulaireRang },
    'veto-09': { 'Trace et déterminant d\'une matrice diagonalisable': traceDetDiag2, 'Base de $\\mathbb{R}^3$ et liberté sans composante nulle': basePivot3 },
    // veto-07 : ces deux tirages de Licence concluent par rt − s², condition suffisante hors programme BCPST
    'veto-07': { 'Nature d\'un point critique': veto07Extremum, 'Valeur d\'un extremum local': veto07Extremum }
  };

  /** Générateurs existants par chapitre : Licence / CAPES (tous paliers) et terminale (paliers 1-2) */
  const SOURCES = {
    'veto-01': { sup: ['L1-LOG', 'capes-15'], lyc: ['TA1', 'TS3'] },
    'veto-02': { sup: ['L1-CMP', 'capes-12'], lyc: ['TX1', 'TX2'] },
    'veto-03': { sup: ['L1-SUI', 'L2-SER', 'capes-09'], lyc: ['TA2'] },
    'veto-04': { sup: ['L1-CNT', 'L1-TAY', 'capes-08'], lyc: ['TA3', 'TA4', 'TA8'] },
    'veto-05': { sup: ['L1-INT', 'L2-ING', 'capes-06'], lyc: ['TA7'] },
    'veto-06': { sup: ['L2-EDO', 'capes-01'], lyc: ['TA6'] },
    'veto-07': { sup: ['L2-CAL'], lyc: [] },
    'veto-08': { sup: ['L1-MAT'], lyc: ['TX5'] },
    'veto-09': { sup: ['L1-EV1', 'L1-APP', 'L2-RED1', 'capes-02'], lyc: [] },
    'veto-10': { sup: ['L1-GEO', 'L2-PRE', 'capes-11'], lyc: ['TG1', 'TG2'] },
    'veto-11': { sup: ['L2-PRB', 'capes-04', 'capes-13'], lyc: ['TS1'] },
    'veto-12': { sup: [], lyc: ['TS2'] },
    'veto-13': { sup: ['capes-14'], lyc: ['2S1'], sante: ['pass-11', 'pass-01'] }
  };

  /**
   * Notions exclues du programme BCPST : ces tirages, légitimes en Licence ou au CAPES, sont écartés et retirés.
   * veto-02 : division euclidienne (et pgcd), factorisation dans R[X], multiplicité par les dérivées.
   * veto-04 : convexité d'un polynôme de degré 4 (convexité non citée au programme).
   */
  const EXCLUDED = {
    'veto-04': /Convexité d'un polynôme de degré 4/,
    'veto-02': /division euclidienne|\bdivision\b[^.]*polyn|\bpgcd\b|irréductible|factoris[\s\S]*\\mathbb\{R\}\[X\]|\\mathbb\{R\}\[X\][\s\S]*factoris|P'\(|P''\(|P\^\{\(|dérivée|Taylor/i,
    // veto-05 : gabarits de Licence reposant sur un critère de Riemann admis ou sur un critère hors programme (la nature des intégrales de puissances se démontre à chaque usage)
    'veto-05': /^(?:Équivalent de Riemann|Intégrale de Riemann de référence|Seuil de convergence|Intégrale impropre en une borne finie|Nature d'une intégrale généralisée|Convergence aux deux bornes|Intégrales de Bertrand)/,
    // veto-06 : gabarits de Licence reposant sur la théorie générale (solution maximale, unicité), alors que le programme traite les équations non linéaires sur des exemples guidés
    'veto-06': /solution maximale|intervalle maximal|unicité(?![a-zà-ÿ])/i,
    // veto-09 : déterminant d'un endomorphisme de R^n (n ≥ 3) et projecteurs ou symétries quelconques, qui reposent sur les supplémentaires (exclus)
    // veto-08 et veto-09 : polynôme annulateur (Cayley-Hamilton), polynôme minimal, sommes de sous-espaces et supplémentaires, exclus du programme BCPST
    'veto-08': /^Inverse matriciel via un polynôme annulateur|Cayley|polynôme annulateur/i,
    'veto-09': /^(?:Symétrie vectorielle : trace et déterminant|Projecteur : trace et rang|Polynôme annulateur et puissances|Degré du polynôme minimal|Sous-espaces supplémentaires|Somme directe|Formule de Grassmann|Caractérisation algébrique des projecteurs|Caractérisation algébrique des symétries)|Cayley|polynôme annulateur|polynôme minimal|supplémentaire|somme directe|Grassmann/i,
    // veto-10 : algorithmes d'orthonormalisation
    'veto-10': /Gram-Schmidt|orthonormalis/i
  };

  /**
   * Liste blanche des gabarits de Licence, CAPES et terminale (titre exact), appliquée après REMPLACES et aux seuls
   * tirages de ces générateurs. En sont exclus : relations d'équivalence et d'ordre, bornes pour l'inclusion ou la
   * divisibilité, image réciproque (veto-01) ; racines n-ièmes, racines carrées complexes, second degré à coefficients
   * complexes, géométrie par les complexes, décomposition en éléments simples (veto-02) ; limites supérieure et
   * inférieure, valeurs d'adhérence, produit de Cauchy, règles de Cauchy et de d'Alembert, séries alternées, critère
   * de Riemann, familles sommables (veto-03) ; convexité, inflexion et inégalités de convexité (veto-04) ; intégrales
   * de Bertrand, fonction Gamma, dérivation sous l'intégrale (veto-05) ; exponentielle de matrice, systèmes
   * différentiels (veto-06) ; dérivée directionnelle, multiplicateurs de Lagrange, hessienne, jacobienne, plan
   * tangent (veto-07) ; coniques, déterminant de Gram, produits scalaires autres que le produit usuel (veto-10) ;
   * fonctions génératrices (veto-11). Sans liste (veto-08, veto-09, veto-12, veto-13) : tout gabarit est accepté.
   */
  const AUTORISES = {
    'veto-01': [
      'Anagrammes', 'Au moins un élément d\'une catégorie', 'Bijection réciproque d\'une homographie', 'Bijectivité d\'une application',
      'Bijectivité et contre-exemples', 'Cardinal du complémentaire d\'une réunion', 'Cardinal d\'une réunion', 'Chemins dans un quadrillage',
      'Choix d\'un comité (combinaisons)', 'Classements et arrangements', 'Codes mixtes', 'Coefficient d\'un développement',
      'Comité avec contrainte', 'Conjecturer puis démontrer une formule explicite', 'Délégation avec contrainte',
      'Hérédité de l\'inégalité de Bernoulli', 'Image directe d\'un intervalle', 'Initialisation : rang de départ d\'une récurrence',
      'Injectivité de la fonction exponentielle', 'Injectivité d\'une fonction affine', 'Injectivité d\'une fonction polynomiale',
      'Injectivité d\'une fonction rationnelle', 'Injectivité d\'un polynôme du second degré', 'Injectivité et valeur absolue',
      'Injectivité sur un domaine restreint', 'Listes sans répétition (arrangements)', 'Lois de De Morgan sur un exemple', 'Mains de cartes',
      'Négation d\'une assertion quantifiée', 'Nombre d\'applications entre ensembles finis', 'Nombre de combinaisons', 'Nombre de k-uplets',
      'Nombre de listes avec répétitions', 'Nombre de parties à p éléments', 'Nombre de parties d\'un ensemble fini',
      'Nombre d\'injections entre ensembles finis', 'Nombres entiers et chiffres', 'Opérations ensemblistes sur un ensemble fini',
      'Parties contenant deux éléments donnés', 'Parties contenant un élément donné', 'Parties de cardinal pair', 'Parties d\'un ensemble',
      'Parties évitant un élément donné', 'Récurrence et divisibilité', 'Relation de Pascal', 'Somme binomiale',
      'Surjections sur un ensemble à deux éléments', 'Surjectivité de la fonction cube', 'Surjectivité de la fonction exponentielle',
      'Surjectivité d\'une application affine', 'Surjectivité d\'une fonction homographique', 'Surjectivité d\'une fonction trigonométrique',
      'Surjectivité d\'un polynôme du second degré', 'Surjectivité sur un codomaine restreint', 'Tirages dans une urne'
    ],
    'veto-02': [
      'Carré d\'un nombre complexe', 'Équation avec conjugué', 'Équation du second degré à discriminant négatif',
      'Forme algébrique d\'une puissance', 'Forme exponentielle d\'un nombre complexe', 'Forme trigonométrique d\'un nombre complexe',
      'Inverse d\'un nombre complexe', 'Produit de deux nombres complexes', 'Produit d\'un complexe par son conjugué',
      'Produit en forme exponentielle', 'Puissance d\'un nombre complexe', 'Puissance d\'un nombre complexe (formule de Moivre)',
      'Quotient de deux nombres complexes', 'Quotient en forme exponentielle'
    ],
    'veto-03': [
      'Définition $\\varepsilon$-$N$ de la limite', 'Écriture décimale périodique et série géométrique',
      'Forme indéterminée « $\\infty - \\infty$ »', 'Forme indéterminée et quantité conjuguée', 'Limite d\'une suite géométrique',
      'Limite d\'une suite rationnelle', 'Quotient de suites géométriques', 'Rang explicite de convergence', 'Série $\\sum n^2 x^n$',
      'Série dérivée d\'une série géométrique', 'Séries dérivées de la série géométrique', 'Série télescopique', 'Série télescopique d\'ordre 2',
      'Série télescopique simple', 'Somme d\'une série géométrique', 'Sous-suites paires et impaires', 'Suite arithmético-géométrique',
      'Suite récurrente $u_{n+1} = f(u_n)$', 'Théorème de comparaison', 'Théorème des gendarmes'
    ],
    'veto-04': [
      'Accroissements finis pour $1/x$', 'Accroissements finis pour $x^3$', 'Asymptote oblique par développement asymptotique',
      'Asymptotes d\'une fonction homographique', 'Calcul de limite par développement limité',
      'Composée d\'une fonction trigonométrique et de sa réciproque', 'Dérivée de $e^{u}$', 'Dérivée de $\\frac{1}{u}$', 'Dérivée de $\\ln(u)$',
      'Dérivée de $\\sqrt{u}$', 'Dérivée de $u^n$', 'Dérivée seconde de $(ax + b)^n$', 'Dérivée seconde de $e^{ax^2}$',
      'Dérivée seconde de $\\sqrt{ax + b}$', 'Dérivée seconde de $xe^{kx}$', 'Développement limité usuel en 0', 'DL de $(1 + x)^\\alpha$',
      'DL d\'une fonction composée', 'Esquisser l\'allure d\'une courbe à partir d\'un tableau', 'Hypothèses du théorème de Rolle',
      'Limite en un point : asymptote verticale', 'Limite en un point : forme indéterminée levée par factorisation',
      'Minimum d\'une somme de quotients', 'Minimum sous contrainte par Cauchy-Schwarz', 'Nombre de racines réelles d\'un polynôme de degré 3',
      'Nombre de solutions d\'une équation', 'Produit de développements limités', 'Prolongement par continuité et limites usuelles',
      'Tangente et position relative par DL', 'Théorème de Rolle sur un trinôme', 'Théorème des accroissements finis',
      'Théorème des valeurs intermédiaires', 'Valeur d\'une dérivée seconde', 'Valeurs exactes des fonctions trigonométriques réciproques'
    ],
    'veto-05': [
      'Aire entre deux courbes', 'Aire sous une parabole', 'Changement de variable $u = x^2 + c$',
      'Intégrale de $\\frac{1}{x}$', 'Intégrale de polynôme × exponentielle', 'Intégrale de type Bêta',
      'Intégrale de type gaussien (puissance impaire)', 'Intégrale d\'une exponentielle', 'Intégrale d\'une fonction trigonométrique',
      'Intégrale d\'un polynôme', 'Intégrale généralisée avec exponentielle', 'Intégrale généralisée en une borne finie',
      'Intégrale généralisée sur un intervalle non borné', 'Intégrale impropre d\'une puissance', 'Intégrales de Wallis', 'Intégration par parties',
      'Intégration par parties avec un logarithme', 'Limite d\'une somme de Riemann', 'Primitive de la forme $u\'u^n$', 'Somme de Riemann',
      'Somme de Riemann et arctangente', 'Somme de Riemann et exponentielle', 'Somme de Riemann et logarithme', 'Valeur moyenne d\'une fonction'
    ],
    'veto-06': [
      'Équation $y\' = ay$ avec condition initiale', 'Équation $y\' = ay + b$ avec condition initiale',
      'Équation caractéristique d\'une EDO d\'ordre 2', 'Équation linéaire d\'ordre 1 à second membre constant',
      'Équation linéaire d\'ordre 2 à coefficients constants', 'Équation linéaire homogène d\'ordre 1',
      'Équation logistique : temps de demi-saturation', 'Limite en $+\\infty$ d\'une solution de $y\' = ay + b$', 'Oscillateur forcé hors résonance',
      'Problème de Cauchy d\'ordre 1 à second membre constant', 'Problème de Cauchy d\'ordre 2', 'Racines caractéristiques complexes',
      'Résonance d\'un oscillateur non amorti', 'Second membre exponentiel (ordre 2)', 'Second membre résonant (racine simple)',
      'Solution constante de $y\' + ay = b$', 'Solution constante de $y\' = ay + b$', 'Solution particulière constante (ordre 2)',
      'Solution particulière polynomiale', 'Solutions constantes d\'une équation à variables séparables'
    ],
    'veto-07': [
      'Dérivée d\'une fonction composée', 'Dérivée partielle croisée', 'Gradient d\'une fonction de deux variables',
      'Point critique d\'une fonction de deux variables', 'Tangente à une ligne de niveau'
    ],
    'veto-10': [
      'Alignement de trois points de l\'espace',
      'Cercle de diamètre donné', 'Cercle donné par une équation cartésienne', 'Condition de colinéarité',
      'Décomposition d\'un vecteur : coplanarité', 'Distance à une droite vectorielle', 'Distance à un plan vectoriel',
      'Distance d\'un point à une droite', 'Distance d\'un point à un plan', 'Équation cartésienne d\'un plan',
      'Équation d\'une droite de vecteur normal donné', 'Formule d\'Al-Kashi', 'Formules de polarisation',
      'Intersection d\'une droite et d\'un plan', 'Intersection d\'une droite et d\'un plan de coordonnées', 'Norme d\'un vecteur de l\'espace',
      'Norme euclidienne', 'Orthogonalité dans $\\mathbb{R}^3$ euclidien', 'Plan médiateur d\'un segment',
      'Point défini par une égalité vectorielle', 'Position relative de deux droites',
      'Position relative de deux plans', 'Produit scalaire dans un repère orthonormé', 'Produit scalaire en repère orthonormé',
      'Produit scalaire et normes', 'Projection orthogonale sur une droite', 'Projection orthogonale sur un plan',
      'Projeté orthogonal sur une droite', 'Vecteurs colinéaires de l\'espace', 'Vecteurs orthogonaux'
    ],
    'veto-11': [
      'Au moins un succès', 'Calcul d\'une probabilité conditionnelle', 'Densité à normaliser et espérance', 'Deux tirages sans remise',
      'Espérance d\'une loi binomiale', 'Espérance d\'une loi exponentielle', 'Espérance d\'une loi géométrique',
      'Espérance d\'une loi uniforme continue', 'Espérance d\'une variable aléatoire discrète', 'État stable d\'un système à deux états',
      'Événements indépendants', 'Formule de Bayes', 'Formule des probabilités totales', 'Loi binomiale : espérance et variance',
      'Loi conditionnelle pour des variables de Poisson', 'Loi du minimum de deux variables géométriques', 'Loi exponentielle et absence de mémoire',
      'Loi géométrique : absence de mémoire', 'Loi géométrique : moment d\'ordre 2', 'Moment d\'ordre 2 d\'une loi de Poisson',
      'Moment d\'ordre 2 d\'une loi exponentielle', 'Moment factoriel d\'une loi de Poisson', 'Nombre d\'échecs avant le premier succès',
      'Probabilité avec la loi binomiale', 'Probabilité pour une loi géométrique', 'Probabilité pour une loi uniforme continue',
      'Probabilités composées', 'Problème du collectionneur', 'Queue d\'une loi géométrique', 'Retrouver les paramètres d\'une loi binomiale',
      'Somme de variables de Poisson indépendantes', 'Taille d\'échantillon par Bienaymé-Tchebychev', 'Variance d\'une combinaison avec covariance',
      'Variance d\'une combinaison de variables de Poisson', 'Variance d\'une loi binomiale', 'Variance d\'une loi binomiale en situation',
      'Variance d\'une loi exponentielle', 'Variance d\'une loi géométrique', 'Variance d\'une loi uniforme continue',
      'Variance d\'une transformée affine (Poisson)'
    ]
  };
  const AUTORISES_SET = {};
  Object.keys(AUTORISES).forEach((c) => { AUTORISES_SET[c] = new Set(AUTORISES[c]); });

  /** Paliers couverts par un générateur dédié partiel (par défaut : tous) */
  const DEDICATED_TIERS = { 'veto-10': [2, 3], 'veto-04': [1, 2, 3] };

  /** Poids du générateur dédié dans le tirage (2 par défaut) : veto-07 garde une part égale pour les générateurs de Licence */
  const DED_WEIGHT = { 'veto-07': 1, 'veto-01': 1 };

  /** Probabilité de servir un exercice de la banque statique, par palier */
  const STATIC_SHARE = { 1: 0.15, 2: 0.2, 3: 0.35, 4: 0.5 };

  const api = {
    VETO_SOURCES: SOURCES,

    _vetoGenerate(chapterId, tier) {
      const t = Math.min(4, Math.max(1, parseInt(tier, 10) || 1));
      if (Math.random() < (STATIC_SHARE[t] || 0)) return null;
      const src = SOURCES[chapterId] || {};
      const AG = window.MathsAdvancedGenerators;
      const SD = window.MathsGenerators.SANTE_DEDICATED || {};
      const pool = [];
      if (DEDICATED[chapterId] && (!DEDICATED_TIERS[chapterId] || DEDICATED_TIERS[chapterId].includes(t))) {
        const poids = DED_WEIGHT[chapterId] || 2;
        for (let i = 0; i < poids; i++) pool.push(['ded', () => DEDICATED[chapterId](t, chapterId)]);
      }
      if (AG) {
        (src.sup || []).forEach((s) => pool.push(['sup', () => AG.generate(s, t)]));
        if (t <= 2) (src.lyc || []).forEach((s) => pool.push(['lyc', () => AG.generate(s, t + 1)]));
      }
      (src.sante || []).filter((s) => SD[s]).forEach((s) => pool.push(['ded', () => SD[s](Math.min(4, t + 1), chapterId)]));
      if (!pool.length) return null;
      const exclu = EXCLUDED[chapterId];
      let kind, q = null;
      for (let essai = 0; essai < 40; essai++) {
        const [k, fn] = pick(pool);
        kind = k;
        try {
          q = fn();
        } catch (e) {
          q = null;
        }
        if (!q || !q.statement) return null;
        const remplace = REMPLACES[chapterId] && REMPLACES[chapterId][q.title];
        if (remplace) {
          q = remplace(t, chapterId);
          kind = 'ded';
          break;
        }
        if ((k === 'sup' || k === 'lyc') && AUTORISES_SET[chapterId] && !AUTORISES_SET[chapterId].has(q.title)) {
          q = null;
          continue;
        }
        if (!exclu || !exclu.test([q.title, q.skill, q.statement, q.hint1, q.hint2, q.solution].concat(q.options || []).join(' '))) break;
        q = null;
      }
      if (!q) return null;
      const retouche = kind !== 'ded' && RETOUCHES[chapterId] && RETOUCHES[chapterId][q.title];
      if (retouche) q = retouche(q);
      q.chapterId = chapterId;
      q.tier = t;
      q.id = `${chapterId}-${kind}-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
      return q;
    }
  };

  Object.keys(SOURCES).forEach((id) => {
    api['generate' + id] = function (tier) {
      return this._vetoGenerate(id, tier);
    };
  });

  Object.assign(window.MathsGenerators, api);
})();
