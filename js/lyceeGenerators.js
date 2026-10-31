/**
 * lyceeGenerators.js
 * Moteur procédural complet pour le Lycée : Seconde, Première Spé, Terminale Spé & Expertes.
 * 47 chapitres x 4 paliers ZPD = 188 générateurs avec variables aléatoires & corrections pas à pas.
 * Chaque chapitre <id> a sa méthode gen_<id>(tier). Source de vérité : ce fichier
 * (les anciens scripts Python de scripts/legacy/lycee_builders/ sont archivés, ne plus les relancer).
 * Recalculs et contrôles : node scripts/tests/test_lycee_licence_generators.js
 */

window.MathsLyceeGenerators = {
  generate(chapterId, tier = 1) {
    const t = (tier >= 1 && tier <= 4) ? parseInt(tier, 10) : 1;
    // Générateurs par chapitre : gen_<id>(tier). Peuvent renvoyer null (repli banque statique).
    const fn = this['gen_' + chapterId];
    if (typeof fn === 'function') return fn.call(this, t);
    return null;
  },

  // =========================================================================
  // GÉNÉRATEURS PAR CHAPITRE (gen_<id>)
  // =========================================================================

  // ---- ly2nde ----
  // =========================================================================
  // Outils internes Seconde
  // =========================================================================
  /** n = a² × b avec b sans facteur carré -> [a, b] */
  _2nd_sqrtParts(n) {
    let a = 1;
    let b = n;
    for (let k = 2; k * k <= b; k++) {
      while (b % (k * k) === 0) { b /= k * k; a *= k; }
    }
    return [a, b];
  },

  /** √n simplifié en LaTeX : 12 -> "2\\sqrt{3}", 16 -> "4" */
  _2nd_sqrtTex(n) {
    const [a, b] = this._2nd_sqrtParts(n);
    if (b === 1) return String(a);
    return (a === 1 ? '' : a) + `\\sqrt{${b}}`;
  },

  /** Facteur affine entre parenthèses : (3x - 2) */
  _2nd_lin(a, b, v = 'x') {
    return `(${this.poly([[a, v], [b, '']])})`;
  },

  /** Intervalle : lc/rc booléens « fermé » ; a, b chaînes (ou nombres) ; '-\\infty' / '+\\infty' autorisés */
  _2nd_iv(lc, a, b, rc) {
    const as = String(a);
    const bs = String(b);
    const l = as.includes('infty') ? ']' : (lc ? '[' : ']');
    const r = bs.includes('infty') ? '[' : (rc ? ']' : '[');
    return `${l}${as} ; ${bs}${r}`;
  },

  /** Décomposition en facteurs premiers en LaTeX : 360 -> "2^3 \\times 3^2 \\times 5" */
  _2nd_factorTex(n) {
    const parts = [];
    let m = n;
    for (let p = 2; p * p <= m; p++) {
      let e = 0;
      while (m % p === 0) { m /= p; e++; }
      if (e) parts.push(e === 1 ? `${p}` : `${p}^${e}`);
    }
    if (m > 1) parts.push(`${m}`);
    return parts.join(' \\times ');
  },

  _2nd_primeFactors(n) {
    const out = [];
    let m = n;
    for (let p = 2; p * p <= m; p++) {
      while (m % p === 0) { m /= p; if (!out.includes(p)) out.push(p); }
    }
    if (m > 1 && !out.includes(m)) out.push(m);
    return out;
  },

  // =========================================================================
  // 2N1 : Ensembles de nombres, arithmétique et nombres réels
  // =========================================================================
  gen_2N1(tier) {
    const xq = this._lyX('2N1', tier, [1, 2, 0, 3][tier - 1]);
    if (xq) return xq;
    const NN = '$\\mathbb{N}$';
    const ZZ = '$\\mathbb{Z}$';
    const DD = '$\\mathbb{D}$';
    const QQ = '$\\mathbb{Q}$';
    const RQ = '$\\mathbb{R} \\setminus \\mathbb{Q}$';
    if (tier === 1) {
      const kind = this.randInt(0, 6);
      let expr;
      let simp;
      let ans;
      let exp;
      if (kind === 0) {
        const q = this.randInt(2, 9);
        const r = this.randInt(2, 12);
        expr = `${q * r} \\div ${q}`;
        simp = `${r}`;
        ans = NN;
        exp = `$${q * r} \\div ${q} = ${r}$ est un entier naturel.`;
      } else if (kind === 1) {
        const q = this.randInt(2, 9);
        const r = this.randInt(2, 12);
        expr = `-${q * r} \\div ${q}`;
        simp = `-${r}`;
        ans = ZZ;
        exp = `$-${q * r} \\div ${q} = -${r}$ est un entier relatif négatif, donc pas un entier naturel.`;
      } else if (kind === 2) {
        const d = this.randChoice([4, 8, 20, 25, 40, 16, 50]);
        let n = this.randInt(1, 3 * d);
        while (this.gcd(n, d) !== 1 || n % d === 0) n = this.randInt(1, 3 * d);
        const sign = this.randChoice([1, -1]);
        expr = (sign < 0 ? '-' : '') + `\\frac{${n}}{${d}}`;
        simp = this.dec(sign * n / d);
        ans = DD;
        exp = `$${expr} = ${simp}$ s'écrit avec un nombre fini de chiffres après la virgule : c'est un décimal non entier.`;
      } else if (kind === 3) {
        const d = this.randChoice([3, 6, 7, 9, 11, 12, 15]);
        let n = this.randInt(1, 3 * d);
        while (this.gcd(n, d) !== 1 || n % d === 0) n = this.randInt(1, 3 * d);
        expr = `\\frac{${n}}{${d}}`;
        simp = `\\frac{${n}}{${d}}`;
        ans = QQ;
        exp = `La fraction $\\frac{${n}}{${d}}$ est irréductible et son dénominateur $${d} = ${this._2nd_factorTex(d)}$ contient un facteur premier autre que 2 et 5 : son écriture décimale est illimitée périodique. C'est un rationnel non décimal.`;
      } else if (kind === 4) {
        const r = this.randInt(2, 15);
        expr = `\\sqrt{${r * r}}`;
        simp = `${r}`;
        ans = NN;
        exp = `$\\sqrt{${r * r}} = ${r}$ car $${r}^2 = ${r * r}$ : c'est un entier naturel.`;
      } else if (kind === 5) {
        const r = this.randInt(2, 12);
        expr = `-\\sqrt{${r * r}}`;
        simp = `-${r}`;
        ans = ZZ;
        exp = `$-\\sqrt{${r * r}} = -${r}$ est un entier relatif négatif.`;
      } else {
        let n = this.randInt(2, 60);
        while (Number.isInteger(Math.sqrt(n))) n = this.randInt(2, 60);
        expr = `\\sqrt{${n}}`;
        simp = `\\sqrt{${n}}`;
        ans = RQ;
        exp = `$${n}$ n'est pas un carré parfait, donc $\\sqrt{${n}}$ est irrationnel.`;
      }
      return this.makeMcq('2N1', 1, 'Plus petit ensemble de nombres',
        'Identifier le plus petit ensemble auquel appartient un réel',
        `Quel est le plus petit ensemble de nombres auquel appartient $A = ${expr}$ ?`,
        ans, [NN, ZZ, DD, QQ, RQ].filter((s) => s !== ans),
        "Simplifie d'abord le nombre sous sa forme la plus simple.",
        'Rappelle-toi la chaîne des inclusions : $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{D} \\subset \\mathbb{Q} \\subset \\mathbb{R}$.',
        `On a $A = ${simp}$. ${exp} Le plus petit ensemble est donc ${ans}.`
      );
    }
    if (tier === 2) {
      const b = this.randChoice([2, 3, 5, 6, 7, 10, 11, 13]);
      if (Math.random() < 0.55) {
        const a = this.randInt(2, 9);
        const N = a * a * b;
        return this._xa([`(${a};${b})`, 'Écrire le résultat sous la forme $a\\sqrt{b}$ et le saisir, par exemple 3√2 (touche √ ou « sqrt »), ou saisir le couple (a ; b), par exemple (3;2).', [this._xsq(a, b)]], '2N1', 2, 'Simplification de radicaux',
          'Extraire les carrés parfaits d\'une racine carrée',
          `Écrire sous la forme $a\\sqrt{b}$ (avec $a$ et $b$ entiers, $b$ le plus petit possible) : $\\sqrt{${N}}$.`,
          `$${a}\\sqrt{${b}}$`,
          [`$${2 * a}\\sqrt{${b}}$`, `$${b}\\sqrt{${a}}$`, `$${a * a}\\sqrt{${b}}$`, `$${a + 1}\\sqrt{${b}}$`, `$${b}\\sqrt{${a * a}}$`],
          `Cherche le plus grand carré parfait qui divise ${N}.`,
          `Remarque que $${N} = ${a * a} \\times ${b} = ${a}^2 \\times ${b}$.`,
          `$\\sqrt{${N}} = \\sqrt{${a}^2 \\times ${b}} = \\sqrt{${a}^2} \\times \\sqrt{${b}} = ${a}\\sqrt{${b}}$.`
        );
      }
      const p = this.randInt(1, 5);
      let q = this.randInt(2, 6);
      while (q === p) q = this.randInt(2, 6);
      const sg = this.randChoice([1, -1]);
      const r = p + sg * q;
      const res = r === 0 ? '0' : (r === 1 ? `\\sqrt{${b}}` : r === -1 ? `-\\sqrt{${b}}` : `${r}\\sqrt{${b}}`);
      const t1 = p === 1 ? `\\sqrt{${b}}` : `\\sqrt{${p * p * b}}`;
      const t2 = `\\sqrt{${q * q * b}}`;
      const s1 = p === 1 ? `\\sqrt{${b}}` : `${p}\\sqrt{${b}}`;
      const wrong = (k) => (k === 1 ? `$\\sqrt{${b}}$` : k === -1 ? `$-\\sqrt{${b}}$` : k === 0 ? null : `$${k}\\sqrt{${b}}$`);
      return this._xa([String(r), `Le résultat s'écrit $a\\sqrt{${b}}$ : saisir l'entier relatif $a$, ou directement $a\\sqrt{${b}}$ (touche √ ou « sqrt »).`, [this._xsq(r, b)]], '2N1', 2, 'Somme de radicaux',
        'Simplifier puis réduire une somme de racines carrées',
        `Écrire sous la forme $a\\sqrt{${b}}$ : $B = ${t1} ${sg > 0 ? '+' : '-'} ${t2}$.`,
        `$${res}$`,
        [`$\\sqrt{${p * p * b + sg * q * q * b > 0 ? p * p * b + sg * q * q * b : q * q * b - p * p * b}}$`, wrong(p * q), wrong(r + 1), wrong(r - 1), wrong(-r)],
        'Simplifie chaque racine séparément avant d\'additionner.',
        `$${t2} = \\sqrt{${q * q} \\times ${b}} = ${q}\\sqrt{${b}}$.`,
        `$${t2} = \\sqrt{${q * q} \\times ${b}} = ${q}\\sqrt{${b}}$, donc $B = ${s1} ${sg > 0 ? '+' : '-'} ${q}\\sqrt{${b}} = (${p} ${sg > 0 ? '+' : '-'} ${q})\\sqrt{${b}} = ${res}$. Attention : $\\sqrt{a} + \\sqrt{b} \\neq \\sqrt{a + b}$ en général.`
      );
    }
    if (tier === 3 || (tier === 4 && Math.random() < 0.2)) {
      // programme 2026 : caractérisation des décimaux en approfondissement (palier 4)
      const decDens = [8, 16, 20, 25, 32, 40, 50, 80, 125];
      const nonDecDens = [6, 12, 14, 15, 21, 24, 30, 35, 18, 22, 28, 45];
      const irr = (d) => {
        let n = this.randInt(1, 2 * d);
        while (this.gcd(n, d) !== 1) n = this.randInt(1, 2 * d);
        return n;
      };
      const findNot = Math.random() < 0.4;
      // findNot : trois décimaux, un seul non décimal
      const goodPool = findNot ? nonDecDens : decDens;
      const badPool = findNot ? decDens : nonDecDens;
      const dg = this.randChoice(goodPool);
      const ng = irr(dg);
      const bads = this.pickDistinct(badPool, 3).map((d) => [irr(d), d]);
      const fr = (n, d) => `$\\frac{${n}}{${d}}$`;
      const descr = (d) => `$${d} = ${this._2nd_factorTex(d)}$`;
      const badTxt = bads.slice(0, 3).map(([, d]) => descr(d)).join(', ');
      const sol = findNot
        ? `Toutes les fractions proposées sont irréductibles. Le dénominateur ${descr(dg)} contient un facteur premier autre que 2 et 5, donc $\\frac{${ng}}{${dg}}$ n'est pas décimal. Les autres dénominateurs (${badTxt}) ne contiennent que des facteurs 2 et 5.`
        : `Toutes les fractions proposées sont irréductibles. Le dénominateur ${descr(dg)} ne contient que les facteurs premiers 2 et 5, donc $\\frac{${ng}}{${dg}} = ${this.dec(ng / dg, 6)}$ est décimal. Les autres dénominateurs (${badTxt}) contiennent un facteur premier différent de 2 et de 5.`;
      return this.makeMcq('2N1', tier, 'Caractérisation des nombres décimaux',
        'Reconnaître un décimal par les facteurs premiers du dénominateur',
        findNot
          ? 'Laquelle des fractions irréductibles suivantes n\'est PAS un nombre décimal ?'
          : 'Laquelle des fractions irréductibles suivantes est un nombre décimal ?',
        fr(ng, dg), bads.map(([n, d]) => fr(n, d)),
        'Une fraction irréductible est décimale si et seulement si son dénominateur n\'a pas d\'autres facteurs premiers que 2 et 5.',
        'Décompose chaque dénominateur en produit de facteurs premiers.',
        sol
      );
    }
    // tier 4 : arithmétique et raisonnement
    const kind = this.randInt(0, 2);
    if (kind === 0) {
      const p = this.randChoice([2, 3, 5, 7, 11, 13]);
      return this.makeMcq('2N1', 4, `Irrationalité de $\\sqrt{${p}}$`,
        'Comprendre un raisonnement par l\'absurde',
        `On suppose par l'absurde que $\\sqrt{${p}} = \\frac{a}{b}$ avec $\\frac{a}{b}$ irréductible. On obtient $a^2 = ${p}b^2$. Quelle contradiction termine la démonstration ?`,
        `$a$ et $b$ sont tous deux multiples de ${p}, ce qui contredit l'irréductibilité de $\\frac{a}{b}$.`,
        [
          `$a^2 = ${p}b^2$ est impossible car $${p}b^2$ n'est jamais un carré d'entier.`,
          `$a$ est multiple de ${p} et $b$ ne l'est pas, ce qui est impossible.`,
          'On obtient $b = 0$, ce qui est interdit.',
          `$a$ et $b$ sont égaux, donc $\\sqrt{${p}} = 1$.`
        ],
        `Comme ${p} est premier et divise $a^2$, il divise $a$ : on écrit $a = ${p}k$.`,
        `En remplaçant : $${p * p}k^2 = ${p}b^2$, soit $b^2 = ${p}k^2$.`,
        `$a^2 = ${p}b^2$ donc ${p} divise $a^2$, et comme ${p} est premier, ${p} divise $a$. Avec $a = ${p}k$ : $${p * p}k^2 = ${p}b^2$, soit $b^2 = ${p}k^2$, donc ${p} divise aussi $b$. La fraction $\\frac{a}{b}$ serait simplifiable par ${p} : contradiction. Donc $\\sqrt{${p}}$ est irrationnel.`
      );
    }
    if (kind === 1) {
      // décomposition en facteurs premiers
      const primes = [2, 3, 5, 7, 11];
      let n = 1;
      const exps = {};
      const k = this.randInt(3, 5);
      for (let i = 0; i < k; i++) {
        const p = this.randChoice(primes.slice(0, 4));
        n *= p;
        exps[p] = (exps[p] || 0) + 1;
      }
      if (n < 30) { n *= 3; exps[3] = (exps[3] || 0) + 1; }
      const correct = `$${this._2nd_factorTex(n)}$`;
      const ps = Object.keys(exps).map(Number).sort((a, b) => a - b);
      const alt = (f) => '$' + ps.map((p) => { const e = f(p); return e === 1 ? `${p}` : `${p}^${e}`; }).join(' \\times ') + '$';
      const d1 = alt((p) => exps[p] + (p === ps[0] ? 1 : 0));
      const d2 = alt((p) => (exps[p] > 1 && p === ps[ps.length - 1] ? exps[p] - 1 : exps[p] + (p === ps[ps.length - 1] ? 1 : 0)));
      const d3 = ps.length > 1 ? alt((p) => exps[ps[ps.length - 1 - ps.indexOf(p)]]) : `$${ps[0] * ps[0]}^${exps[ps[0]]}$`;
      const d4 = alt((p) => (p === ps[0] && exps[p] > 1 ? exps[p] - 1 : exps[p] + 2 * (p === ps[0] ? 1 : 0)));
      return this._xa([`(${exps[2] || 0};${exps[3] || 0};${exps[5] || 0};${exps[7] || 0})`, 'Écrire la décomposition sous la forme $2^a \\times 3^b \\times 5^c \\times 7^d$ (exposants éventuellement nuls) et saisir (a ; b ; c ; d).'], '2N1', 4, 'Décomposition en facteurs premiers',
        'Décomposer un entier en produit de facteurs premiers',
        `Quelle est la décomposition en produit de facteurs premiers de $${n}$ ?`,
        correct, [d1, d2, d3, d4],
        'Divise successivement par 2, puis 3, puis 5, puis 7… tant que c\'est possible.',
        'Vérifie en recalculant le produit obtenu.',
        `Par divisions successives : $${n} = ${this._2nd_factorTex(n)}$.`
      );
    }
    // fraction irréductible grâce aux décompositions
    const common = this.randChoice([6, 10, 12, 14, 15, 18, 21, 30]);
    let a = this.randInt(2, 13);
    let b = this.randInt(2, 13);
    while (this.gcd(a, b) !== 1 || a === b) { a = this.randInt(2, 13); b = this.randInt(2, 13); }
    const A = a * common;
    const B = b * common;
    return this.makeMcq('2N1', 4, 'Fraction irréductible',
      'Simplifier une fraction à l\'aide des décompositions en facteurs premiers',
      `Écrire sous forme irréductible la fraction de $${A}$ par $${B}$, c'est-à-dire le quotient $${A} \\div ${B}$.`,
      `$\\frac{${a}}{${b}}$`,
      [`$${this.frac(b, a)}$`, `$${this.frac(2 * a, b)}$`, `$${this.frac(a + 1, b)}$`, `$${this.frac(a, b + 1)}$`, `$${this.frac(a, 2 * b)}$`, `$${this.frac(A, b)}$`, `$${this.frac(a + b, b)}$`, `$${this.frac(a, a + b)}$`, `$${this.frac(a * b, a + b)}$`].filter((o) => !/^\$-?\d+\$$/.test(o)),
      'Décompose le numérateur et le dénominateur en facteurs premiers.',
      `$${A} = ${this._2nd_factorTex(A)}$ et $${B} = ${this._2nd_factorTex(B)}$.`,
      `Le plus grand diviseur commun est $${common}$ : $${A} = ${common} \\times ${a}$ et $${B} = ${common} \\times ${b}$, donc $${A} \\div ${B} = \\frac{${a}}{${b}}$, irréductible car ${a} et ${b} n'ont pas de diviseur commun autre que 1.`
    );
  },

  // =========================================================================
  // 2N2 : Calcul littéral, identités remarquables et factorisation
  // =========================================================================
  gen_2N2(tier) {
    const xq = this._lyX('2N2', tier, [1, 2, 1, 2][tier - 1]);
    if (xq) return xq;
    const L = (a, b) => this._2nd_lin(a, b);
    if (tier === 1) {
      const a = this.randInt(1, 6);
      const b = this.randNonZero(-9, 9);
      const A = `${L(a, b)}^2`;
      const ans = this.polyX([a * a, 2 * a * b, b * b]);
      return this._xa([`(${a * a};${2 * a * b};${b * b})`, 'Écrire le résultat sous la forme $ax^2 + bx + c$ et saisir (a ; b ; c).'], '2N2', 1, b > 0 ? 'Développement : carré d\'une somme' : 'Développement : carré d\'une différence',
        b > 0 ? 'Appliquer $(u + v)^2 = u^2 + 2uv + v^2$' : 'Appliquer $(u - v)^2 = u^2 - 2uv + v^2$',
        `Développer et réduire l'expression : $A = ${A}$.`,
        `$${ans}$`,
        [`$${this.polyX([a * a, 0, b * b])}$`, `$${this.polyX([a * a, -2 * a * b, b * b])}$`, `$${this.polyX([a, 2 * a * b, b * b])}$`, `$${this.polyX([a * a, a * b, b * b])}$`, `$${this.polyX([a * a, 0, -b * b])}$`],
        b > 0 ? 'Identité remarquable : $(u + v)^2 = u^2 + 2uv + v^2$.' : 'Identité remarquable : $(u - v)^2 = u^2 - 2uv + v^2$.',
        `Ici $u = ${this.coefStr(a, 'x')}$ et $v = ${Math.abs(b)}$ : le double produit vaut $2 \\times ${a === 1 ? 'x' : `${a}x`} \\times ${Math.abs(b)} = ${this.coefStr(2 * a * Math.abs(b), 'x')}$.`,
        `$A = ${A} = ${a === 1 ? 'x^2' : `(${a}x)^2`} ${b > 0 ? '+' : '-'} 2 \\times ${a === 1 ? 'x' : `${a}x`} \\times ${Math.abs(b)} + ${Math.abs(b)}^2 = ${ans}$.`
      );
    }
    if (tier === 2) {
      if (Math.random() < 0.4) {
        const a = this.randInt(1, 7);
        const b = this.randInt(1, 9);
        const B = `${L(a, -b)}${L(a, b)}`;
        const ans = this.polyX([a * a, 0, -b * b]);
        return this._xa([`(${a * a};0;${-b * b})`, 'Écrire le résultat sous la forme $ax^2 + bx + c$ et saisir (a ; b ; c).'], '2N2', 2, 'Différence de deux carrés',
          'Développer avec $(u - v)(u + v) = u^2 - v^2$',
          `Développer et réduire l'expression : $B = ${B}$.`,
          `$${ans}$`,
          [`$${this.polyX([a * a, 0, b * b])}$`, `$${this.polyX([a * a, -2 * a * b, -b * b])}$`, `$${this.polyX([a, 0, -b * b])}$`, `$${this.polyX([a * a, -2 * a * b, b * b])}$`],
          'Formule : $(u - v)(u + v) = u^2 - v^2$.',
          'Les termes en $x$ s\'annulent.',
          `$B = ${a === 1 ? 'x^2' : `(${a}x)^2`} - ${b}^2 = ${ans}$.`
        );
      }
      const a = this.randNonZero(-5, 5);
      const b = this.randNonZero(-7, 7);
      const c = this.randNonZero(-5, 5);
      const d = this.randNonZero(-7, 7);
      const B = `${L(a, b)}${L(c, d)}`;
      const ans = this.polyX([a * c, a * d + b * c, b * d]);
      return this._xa([`(${a * c};${a * d + b * c};${b * d})`, 'Écrire le résultat sous la forme $ax^2 + bx + c$ et saisir (a ; b ; c).'], '2N2', 2, 'Double distributivité',
        'Développer un produit de deux facteurs affines',
        `Développer et réduire l'expression : $B = ${B}$.`,
        `$${ans}$`,
        [`$${this.polyX([a * c, 0, b * d])}$`, `$${this.polyX([a * c, a * d - b * c, b * d])}$`, `$${this.polyX([a * c, a * d + b * c, -b * d])}$`, `$${this.polyX([a + c, a * d + b * c, b * d])}$`, `$${this.polyX([a * c, a * b + c * d, b * d])}$`, `$${this.polyX([a * c, 2 * a * d, b * d])}$`, `$${this.polyX([-a * c, a * d + b * c, b * d])}$`, `$${this.polyX([a * c, a * d + b * c, b + d])}$`].filter((o) => !/^\$-?\d+\$$/.test(o)),
        'Chaque terme du premier facteur multiplie chaque terme du second.',
        `$B = ${this.coefStr(a, 'x')} \\times ${this.paren(this.coefStr(c, 'x'))} + ${this.coefStr(a, 'x').replace(/^/, '')} \\times ${this.paren(d)} + ${this.paren(b)} \\times ${this.paren(this.coefStr(c, 'x'))} + ${this.paren(b)} \\times ${this.paren(d)}$.`.replace(/\+ -/g, '+ (-').replace(/\(-([^)]*?) \\times/g, '(-$1) \\times'),
        `$B = ${this.poly([[a * c, 'x^2'], [a * d, 'x'], [b * c, 'x'], [b * d, '']])} = ${ans}$.`
      );
    }
    if (tier === 3) {
      const a = this.randInt(1, 5);
      const b = this.randNonZero(-7, 7);
      const c = this.randInt(1, 4);
      const d = this.randNonZero(-6, 6);
      const e = this.randInt(1, 4);
      const f = this.randNonZero(-6, 6);
      const minus = Math.random() < 0.45;
      const F = L(a, b);
      const inner = minus ? [c - e, d - f] : [c + e, d + f];
      if (inner[0] === 0 || inner[1] === 0) return this.gen_2N2(3);
      const C = `${F}${L(c, d)} ${minus ? '-' : '+'} ${F}${L(e, f)}`;
      const ans = `${F}${L(inner[0], inner[1])}`;
      const wrongMinus = minus ? `${F}${L(c - e, d + f)}` : `${F}${L(c + e, d - f)}`;
      return this._xa([`(${inner[0]};${inner[1]})`, `Le résultat s'écrit $${F}(cx + d)$ : saisir (c ; d).`], '2N2', 3, 'Factorisation par un facteur commun',
        'Identifier et mettre en facteur une expression commune',
        `Factoriser l'expression : $C = ${C}$.`,
        `$${ans}$`,
        [`$${wrongMinus}$`, `$${F}${L(c * e, d * f)}$`, `$${L(a, -b)}${L(inner[0], inner[1])}$`, `$${F}^2${L(inner[0], inner[1])}$`, `$${F}${L(inner[0], -inner[1])}$`],
        `Le facteur commun est $${F}$.`,
        minus ? 'Attention au signe « - » devant le second produit : il change tous les signes du second facteur.' : 'Mets en facteur, puis réduis le crochet.',
        `$C = ${F}[${this.poly([[c, 'x'], [d, '']])} ${minus ? `- (${this.poly([[e, 'x'], [f, '']])})` : `+ ${this.poly([[e, 'x'], [f, '']])}`}] = ${ans}$.`.replace(/\+ -/g, '- ')
      );
    }
    // tier 4 : factorisation par identité remarquable u² - v²
    const a = this.randInt(1, 4);
    const b = this.randNonZero(-6, 6);
    if (Math.random() < 0.5) {
      const k = this.randInt(1, 7);
      const D = `${L(a, b)}^2 - ${k * k}`;
      const ans = `${L(a, b - k)}${L(a, b + k)}`;
      return this._xa([`(${b - k};${b + k})`, `Le résultat s'écrit $(${this.coefStr(a, 'x')} + m)(${this.coefStr(a, 'x')} + n)$ avec $m < n$ : saisir (m ; n).`], '2N2', 4, 'Factorisation : différence de deux carrés',
        'Reconnaître $u^2 - v^2 = (u - v)(u + v)$ avec $u$ composé',
        `Factoriser l'expression : $D = ${D}$.`,
        `$${ans}$`,
        [`$${L(a, -k)}${L(a, k)}$`, `$${L(a, b - k * k)}${L(a, b)}$`, `$${L(a, b + k)}^2$`, `$${L(a, b - k)}^2$`, `$${L(a, -b - k)}${L(a, -b + k)}$`],
        `Écris $${k * k} = ${k}^2$ et applique $u^2 - v^2 = (u - v)(u + v)$.`,
        `Ici $u = ${this.poly([[a, 'x'], [b, '']])}$ et $v = ${k}$.`,
        `$D = [${L(a, b)} - ${k}][${L(a, b)} + ${k}] = ${ans}$.`
      );
    }
    let c = this.randInt(1, 4);
    while (c === a) c = this.randInt(1, 4);
    const d = this.randNonZero(-6, 6);
    if (b === d && a === c) return this.gen_2N2(4);
    const D = `${L(a, b)}^2 - ${L(c, d)}^2`;
    const f1 = [a - c, b - d];
    const f2 = [a + c, b + d];
    const ans = `${L(f1[0], f1[1])}${L(f2[0], f2[1])}`;
    return this._xa([`(${a - c};${b - d};${a + c};${b + d})`, 'Le résultat s\'écrit $(px + q)(rx + s)$, où $px + q = u - v$ et $rx + s = u + v$ : saisir (p ; q ; r ; s).'], '2N2', 4, 'Factorisation : différence de deux carrés',
      'Factoriser $u^2 - v^2$ avec deux expressions affines',
      `Factoriser l'expression : $D = ${D}$.`,
      `$${ans}$`,
      [`$${L(a - c, b + d)}${L(a + c, b - d)}$`, `$${L(f1[0], f1[1])}^2$`, `$${L(a - c, b - d)}${L(a - c, b + d)}$`, `$${L(a + c, b + d)}^2$`, `$${L(a * a - c * c, b * b - d * d)}$`],
      'Applique $u^2 - v^2 = (u - v)(u + v)$ sans développer.',
      `Ici $u = ${this.poly([[a, 'x'], [b, '']])}$ et $v = ${this.poly([[c, 'x'], [d, '']])}$ ; attention aux parenthèses dans $u - v$.`,
      `$D = [${L(a, b)} - ${L(c, d)}][${L(a, b)} + ${L(c, d)}] = ${ans}$.`
    );
  },

  // =========================================================================
  // 2N3 : Ordre, intervalles et valeur absolue
  // =========================================================================
  gen_2N3(tier) {
    const xq = this._lyX('2N3', tier, [1, 3, 1, 2][tier - 1]);
    if (xq) return xq;
    const iv = (lc, a, b, rc) => this._2nd_iv(lc, a, b, rc);
    if (tier === 1) {
      const a = this.randInt(-9, 6);
      const b = a + this.randInt(1, 9);
      const kind = this.randInt(0, 5);
      let ineq;
      let ans;
      let d;
      if (kind <= 3) {
        const lc = kind % 2 === 0;
        const rc = kind >= 2;
        ineq = `${a} ${lc ? '\\le' : '<'} x ${rc ? '\\le' : '<'} ${b}`;
        ans = iv(lc, a, b, rc);
        d = [iv(!lc, a, b, rc), iv(lc, a, b, !rc), iv(!lc, a, b, !rc), iv(lc, b, a, rc)];
      } else if (kind === 4) {
        const lc = Math.random() < 0.5;
        ineq = `x ${lc ? '\\ge' : '>'} ${a}`;
        ans = iv(lc, a, '+\\infty', false);
        d = [iv(!lc, a, '+\\infty', false), iv(false, '-\\infty', a, lc), iv(false, '-\\infty', a, !lc)];
      } else {
        const rc = Math.random() < 0.5;
        ineq = `x ${rc ? '\\le' : '<'} ${b}`;
        ans = iv(false, '-\\infty', b, rc);
        d = [iv(false, '-\\infty', b, !rc), iv(rc, b, '+\\infty', false), iv(!rc, b, '+\\infty', false)];
      }
      return this.makeMcq('2N3', 1, 'Traduire une inégalité en intervalle',
        'Associer inégalités et crochets d\'un intervalle',
        `À quel intervalle appartient le réel $x$ si $${ineq}$ ?`,
        `$${ans}$`, d.map((s) => `$${s}$`),
        'Une inégalité large ($\\le$, $\\ge$) donne un crochet fermé ; une inégalité stricte ($<$, $>$) donne un crochet ouvert.',
        'Du côté de l\'infini, le crochet est toujours ouvert.',
        `$${ineq} \\iff x \\in ${ans}$.`
      );
    }
    if (tier === 2) {
      const kind = this.randInt(0, 2);
      if (kind === 0) {
        const a = this.randNonZero(-12, 12);
        let b = this.randNonZero(-12, 12);
        while (b === a) b = this.randNonZero(-12, 12);
        const dist = Math.abs(a - b);
        return this.makeMcq('2N3', 2, 'Distance entre deux réels',
          'Calculer $|a - b|$ comme une distance sur la droite graduée',
          `Calculer la distance entre les réels $${a}$ et $${b}$, c'est-à-dire $|${a} - ${this.paren(b)}|$.`,
          `$${dist}$`,
          [`$${Math.abs(a + b) === dist ? dist + 2 : Math.abs(a + b)}$`, `$${a - b === dist ? -dist : a - b}$`, `$${Math.abs(a) + Math.abs(b) === dist ? dist + 1 : Math.abs(a) + Math.abs(b)}$`, `$${dist + 1}$`],
          'La distance entre $a$ et $b$ vaut $|a - b|$, toujours positive.',
          `Calcule d'abord la différence $${a} - ${this.paren(b)}$, puis prends sa valeur absolue.`,
          `$|${a} - ${this.paren(b)}| = |${a - b}| = ${dist}$.`
        );
      }
      const c = this.randNonZero(-8, 8);
      const r = this.randInt(1, 9);
      const absx = `|x ${this.formatSign(-c)}|`;
      if (kind === 1) {
        const large = Math.random() < 0.5;
        const ans = iv(large, c - r, c + r, large);
        return this.makeMcq('2N3', 2, 'Valeur absolue et intervalle',
          'Interpréter $|x - c| \\le r$ comme une distance au centre $c$',
          `Quel est l'ensemble des réels $x$ tels que $${absx} ${large ? '\\le' : '<'} ${r}$ ?`,
          `$${ans}$`,
          [`$${iv(large, -c - r, -c + r, large)}$`, `$${iv(large, c - r, c + r, large).replace(/^./, large ? ']' : '[').replace(/.$/, large ? '[' : ']')}$`, `$${iv(large, -r, r, large)}$`, `$${iv(large, c, c + r, large)}$`],
          `$${absx}$ est la distance entre $x$ et $${c}$.`,
          `Les réels à distance ${large ? 'au plus' : 'strictement inférieure à'} ${r} de $${c}$ forment un intervalle centré en $${c}$.`,
          `$${absx} ${large ? '\\le' : '<'} ${r} \\iff ${c - r} ${large ? '\\le' : '<'} x ${large ? '\\le' : '<'} ${c + r}$, donc $x \\in ${ans}$.`
        );
      }
      const ans = `S = \\{${c - r} ; ${c + r}\\}`;
      return this._xa([`(${c - r};${c + r})`, 'Saisir les deux solutions dans l\'ordre croissant : (x1 ; x2).'], '2N3', 2, 'Équation avec valeur absolue',
        'Résoudre $|x - c| = r$ par la distance',
        `Résoudre dans $\\mathbb{R}$ l'équation $${absx} = ${r}$.`,
        `$${ans}$`,
        [`$S = \\{${-c - r} ; ${-c + r}\\}$`, `$S = \\{${c + r}\\}$`, `$S = \\{${-r} ; ${r}\\}$`, `$S = ${iv(true, c - r, c + r, true)}$`],
        `$${absx} = ${r}$ signifie que la distance entre $x$ et $${c}$ vaut ${r}.`,
        `Place-toi en $${c}$ et avance ou recule de ${r}.`,
        `Les deux réels à distance ${r} de $${c}$ sont $${c} - ${r} = ${c - r}$ et $${c} + ${r} = ${c + r}$. Donc $${ans}$.`
      );
    }
    if (tier === 3) {
      const c = this.randNonZero(-7, 7);
      const r = this.randInt(1, 8);
      const absx = `|x ${this.formatSign(-c)}|`;
      const large = Math.random() < 0.5;
      const op = large ? '\\ge' : '>';
      const ans = `${iv(false, '-\\infty', c - r, large)} \\cup ${iv(large, c + r, '+\\infty', false)}`;
      return this.makeMcq('2N3', 3, 'Inéquation avec valeur absolue',
        'Résoudre $|x - c| > r$ : réunion de deux intervalles',
        `Quel est l'ensemble des solutions de l'inéquation $${absx} ${op} ${r}$ ?`,
        `$${ans}$`,
        [`$${iv(large, c - r, c + r, large)}$`, `$${iv(false, '-\\infty', -c - r, large)} \\cup ${iv(large, -c + r, '+\\infty', false)}$`, `$${iv(false, '-\\infty', c - r, !large)} \\cup ${iv(!large, c + r, '+\\infty', false)}$`, `$${iv(large, c + r, '+\\infty', false)}$`],
        `$${absx}$ est la distance entre $x$ et $${c}$.`,
        `On cherche les réels ${large ? 'à distance au moins' : 'à distance strictement supérieure à'} ${r} de $${c}$ : ils sont « à l'extérieur ».`,
        `$${absx} ${op} ${r} \\iff x ${large ? '\\le' : '<'} ${c - r}$ ou $x ${op} ${c + r}$. Donc $S = ${ans}$.`
      );
    }
    // tier 4 : intersection / réunion d'intervalles
    const a = this.randInt(-9, 2);
    const c = a + this.randInt(1, 5);
    const b = c + this.randInt(1, 5);
    const d = b + this.randInt(1, 6);
    const l1 = Math.random() < 0.5;
    const r1 = Math.random() < 0.5;
    const l2 = Math.random() < 0.5;
    const r2 = Math.random() < 0.5;
    const infinite = Math.random() < 0.3;
    let I;
    let J;
    let inter;
    let union;
    if (infinite) {
      I = iv(false, '-\\infty', b, r1);
      J = iv(l2, c, '+\\infty', false);
      inter = iv(l2, c, b, r1);
      union = '\\mathbb{R}';
    } else {
      I = iv(l1, a, b, r1);
      J = iv(l2, c, d, r2);
      inter = iv(l2, c, b, r1);
      union = iv(l1, a, d, r2);
    }
    const askInter = Math.random() < 0.55;
    const ans = askInter ? inter : union;
    const dist = askInter
      ? [iv(!l2, c, b, !r1), union, iv(l2, c, b, !r1), iv(!l2, c, b, r1), infinite ? '\\emptyset' : iv(l1, a, c, !l2)]
      : [inter, infinite ? iv(false, '-\\infty', c, !l2) + ' \\cup ' + iv(r1 ? false : true, b, '+\\infty', false) : iv(!l1, a, d, !r2), infinite ? iv(l2, c, b, r1).replace(/./, ']') : iv(l1, a, d, !r2), infinite ? '\\emptyset' : iv(!l1, a, d, r2)];
    return this.makeMcq('2N3', 4, askInter ? 'Intersection d\'intervalles' : 'Réunion d\'intervalles',
      'Déterminer intersection et réunion d\'intervalles',
      `On donne $I = ${I}$ et $J = ${J}$. Déterminer $I ${askInter ? '\\cap' : '\\cup'} J$.`,
      `$${ans}$`, dist.map((s) => `$${s}$`),
      'Représente les deux intervalles sur une même droite graduée.',
      askInter ? 'L\'intersection contient les réels appartenant aux DEUX intervalles à la fois.' : 'La réunion contient les réels appartenant à AU MOINS un des deux intervalles.',
      `Sur la droite graduée, $I = ${I}$ et $J = ${J}$ se chevauchent entre $${c}$ et $${b}$. Donc $I ${askInter ? '\\cap' : '\\cup'} J = ${ans}$.`
    );
  },

  // =========================================================================
  // 2N4 : Équations, inéquations du premier degré et tableaux de signes
  // =========================================================================
  gen_2N4(tier) {
    const xq = this._lyX('2N4', tier, [1, 2, 1, 1][tier - 1]);
    if (xq) return xq;
    const L = (a, b) => this._2nd_lin(a, b);
    const iv = (lc, a, b, rc) => this._2nd_iv(lc, a, b, rc);
    if (tier === 1) {
      const kind = this.randInt(0, 3);
      let a = this.randInt(1, 5);
      let b = this.randNonZero(-9, 9);
      let c = this.randInt(1, 4);
      let d = this.randNonZero(-9, 9);
      if (kind === 0) { a = 1; c = this.randInt(1, 3); }
      let expr;
      if (kind === 3) {
        expr = `${this.coefStr(a, 'x')}${L(c, d)}`;
        b = 0;
      } else {
        expr = `${L(a, b)}${L(c, d)}`;
      }
      const r1 = -b / a;
      const r2 = -d / c;
      const roots = [[-b, a], [-d, c]].sort((u, v) => u[0] / u[1] - v[0] / v[1]);
      const same = Math.abs(r1 - r2) < 1e-12;
      const S = same ? `S = \\{${this.frac(roots[0][0], roots[0][1])}\\}` : `S = \\{${this.frac(roots[0][0], roots[0][1])} ; ${this.frac(roots[1][0], roots[1][1])}\\}`;
      const wrong = [
        same ? `S = \\{${this.frac(roots[0][0], roots[0][1])} ; ${this.frac(-roots[0][0], roots[0][1])}\\}` : `S = \\{${this.frac(-roots[0][0], roots[0][1])} ; ${this.frac(-roots[1][0], roots[1][1])}\\}`,
        b === 0 ? `S = \\{${d}\\}` : `S = \\{${b} ; ${d}\\}`,
        `S = \\{${this.frac(-a, b === 0 ? 1 : b)} ; ${this.frac(-c, d)}\\}`,
        same ? '\\emptyset' : `S = \\{${this.frac(roots[0][0], roots[0][1])}\\}`,
        `S = \\{${this.frac(-b, 1)} ; ${this.frac(-d, 1)}\\}`
      ];
      return this._xa(same ? null : [`(${this._xf(roots[0][0], roots[0][1])};${this._xf(roots[1][0], roots[1][1])})`, 'Saisir les deux solutions dans l\'ordre croissant : (x1 ; x2).'], '2N4', 1, 'Équation produit nul',
        'Appliquer : un produit est nul si et seulement si l\'un de ses facteurs est nul',
        `Résoudre dans $\\mathbb{R}$ l'équation : $${expr} = 0$.`,
        `$${S}$`, wrong.map((s) => `$${s}$`),
        'Un produit de facteurs est nul si et seulement si au moins un des facteurs est nul.',
        'Résous séparément chaque équation du premier degré.',
        `$${expr} = 0 \\iff ${kind === 3 ? this.coefStr(a, 'x') : this.poly([[a, 'x'], [b, '']])} = 0$ ou $${this.poly([[c, 'x'], [d, '']])} = 0$, soit $x = ${this.frac(-b, a)}$ ou $x = ${this.frac(-d, c)}$.${same ? ' Les deux facteurs ont la même racine : il n\'y a qu\'une seule solution.' : ''} Donc $${S}$.`
      );
    }
    if (tier === 2) {
      if (Math.random() < 0.5) {
        const a = this.randNonZero(-6, 6);
        const b = this.randNonZero(-9, 9);
        const pos = Math.random() < 0.5;
        const large = Math.random() < 0.5;
        const r = this.frac(-b, a);
        const sym = pos ? (large ? '\\ge' : '>') : (large ? '\\le' : '<');
        // ax + b sym 0
        const goRight = (a > 0) === pos;
        const ans = goRight ? iv(large, r, '+\\infty', false) : iv(false, '-\\infty', r, large);
        const opp = goRight ? iv(false, '-\\infty', r, large) : iv(large, r, '+\\infty', false);
        const flip = goRight ? iv(!large, r, '+\\infty', false) : iv(false, '-\\infty', r, !large);
        const r2 = this.frac(b, a);
        return this.makeMcq('2N4', 2, 'Inéquation du premier degré',
          'Résoudre $ax + b > 0$ en tenant compte du signe de $a$',
          `Résoudre dans $\\mathbb{R}$ l'inéquation $${this.poly([[a, 'x'], [b, '']])} ${sym} 0$.`,
          `$S = ${ans}$`,
          [`$S = ${opp}$`, `$S = ${flip}$`, `$S = ${goRight ? iv(large, r2, '+\\infty', false) : iv(false, '-\\infty', r2, large)}$`, `$S = ${goRight ? iv(false, '-\\infty', r2, large) : iv(large, r2, '+\\infty', false)}$`],
          'Isole $x$ ; si tu divises par un nombre négatif, l\'inégalité change de sens.',
          `On obtient $${this.coefStr(a, 'x')} ${sym} ${-b}$ puis on divise par $${a}$${a < 0 ? ' (négatif : on change le sens)' : ''}.`,
          `$${this.poly([[a, 'x'], [b, '']])} ${sym} 0 \\iff ${this.coefStr(a, 'x')} ${sym} ${-b} \\iff x ${goRight ? (large ? '\\ge' : '>') : (large ? '\\le' : '<')} ${r}$. Donc $S = ${ans}$.`
        );
      }
      // ax + b < cx + d
      const a = this.randNonZero(-6, 6);
      let c = this.randNonZero(-6, 6);
      while (c === a) c = this.randNonZero(-6, 6);
      const b = this.randInt(-9, 9);
      const d = this.randInt(-9, 9);
      const k = a - c;
      const m = d - b;
      const r = this.frac(m, k);
      const strict = Math.random() < 0.5;
      const sym = strict ? '<' : '\\le';
      const goLeft = k > 0; // kx sym m
      const ans = goLeft ? iv(false, '-\\infty', r, !strict) : iv(!strict, r, '+\\infty', false);
      return this.makeMcq('2N4', 2, 'Inéquation du premier degré',
        'Regrouper les termes en $x$ puis isoler $x$',
        `Résoudre dans $\\mathbb{R}$ l'inéquation $${this.poly([[a, 'x'], [b, '']])} ${sym} ${this.poly([[c, 'x'], [d, '']])}$.`,
        `$S = ${ans}$`,
        [`$S = ${goLeft ? iv(!strict, r, '+\\infty', false) : iv(false, '-\\infty', r, !strict)}$`, `$S = ${goLeft ? iv(false, '-\\infty', r, strict) : iv(strict, r, '+\\infty', false)}$`, `$S = ${goLeft ? iv(false, '-\\infty', this.frac(-m, k), !strict) : iv(!strict, this.frac(-m, k), '+\\infty', false)}$`, `$S = ${goLeft ? iv(false, '-\\infty', this.frac(m, a + c === 0 ? 1 : a + c), !strict) : iv(!strict, this.frac(m, a + c === 0 ? 1 : a + c), '+\\infty', false)}$`],
        'Regroupe les $x$ dans un membre et les constantes dans l\'autre.',
        `On obtient $${this.coefStr(k, 'x')} ${sym} ${m}$.${k < 0 ? ' On divise par un nombre négatif : le sens change.' : ''}`,
        `$${this.poly([[a, 'x'], [b, '']])} ${sym} ${this.poly([[c, 'x'], [d, '']])} \\iff ${this.coefStr(k, 'x')} ${sym} ${m} \\iff x ${goLeft ? sym : (strict ? '>' : '\\ge')} ${r}$. Donc $S = ${ans}$.`
      );
    }
    if (tier === 3) {
      // signe d'un produit (ax+b)(cx+d)
      const a = this.randNonZero(-4, 4);
      const c = this.randNonZero(-4, 4);
      let r1 = this.randInt(-6, 6);
      let r2 = this.randInt(-6, 6);
      while (r2 === r1) r2 = this.randInt(-6, 6);
      const b = -a * r1;
      const d = -c * r2;
      const lo = Math.min(r1, r2);
      const hi = Math.max(r1, r2);
      const lead = a * c; // signe à l'extérieur des racines = signe de ac
      const wantNeg = Math.random() < 0.5;
      const large = Math.random() < 0.5;
      const sym = wantNeg ? (large ? '\\le' : '<') : (large ? '\\ge' : '>');
      const inside = (lead > 0) === wantNeg; // solutions entre les racines
      const inS = iv(large, lo, hi, large);
      const outS = `${iv(false, '-\\infty', lo, large)} \\cup ${iv(large, hi, '+\\infty', false)}`;
      const ans = inside ? inS : outS;
      const expr = `${L(a, b)}${L(c, d)}`;
      return this.makeMcq('2N4', 3, 'Tableau de signes d\'un produit',
        'Résoudre une inéquation produit à l\'aide d\'un tableau de signes',
        `Résoudre dans $\\mathbb{R}$ l'inéquation $${expr} ${sym} 0$.`,
        `$S = ${ans}$`,
        [`$S = ${inside ? outS : inS}$`, `$S = ${inside ? iv(!large, lo, hi, !large) : `${iv(false, '-\\infty', lo, !large)} \\cup ${iv(!large, hi, '+\\infty', false)}`}$`, `$S = ${iv(large, -hi, -lo, large)}$`, `$S = ${iv(false, '-\\infty', lo, large)}$`],
        'Étudie le signe de chaque facteur, puis applique la règle des signes dans un tableau.',
        `Les facteurs s'annulent en $x = ${r1}$ et $x = ${r2}$.`,
        `$${this.poly([[a, 'x'], [b, '']])}$ s'annule en $${r1}$ et est ${a > 0 ? 'positif' : 'négatif'} à sa droite ; $${this.poly([[c, 'x'], [d, '']])}$ s'annule en $${r2}$ et est ${c > 0 ? 'positif' : 'négatif'} à sa droite. Le produit est donc ${lead > 0 ? 'positif' : 'négatif'} à l'extérieur de $[${lo} ; ${hi}]$ et ${lead > 0 ? 'négatif' : 'positif'} entre $${lo}$ et $${hi}$. Ainsi $S = ${ans}$.`
      );
    }
    // tier 4 : inéquation quotient
    const a = this.randNonZero(-3, 3);
    const c = this.randNonZero(-3, 3);
    let r1 = this.randInt(-6, 6);
    let r2 = this.randInt(-6, 6);
    while (r2 === r1) r2 = this.randInt(-6, 6);
    const b = -a * r1;
    const d = -c * r2; // r2 valeur interdite
    const lo = Math.min(r1, r2);
    const hi = Math.max(r1, r2);
    const lead = a * c;
    const wantNeg = Math.random() < 0.5;
    const large = Math.random() < 0.5;
    const sym = wantNeg ? (large ? '\\le' : '<') : (large ? '\\ge' : '>');
    const inside = (lead > 0) === wantNeg;
    // côté fermé seulement en r1 (numérateur), jamais en r2
    const cl = (x) => large && x === r1;
    const inS = iv(cl(lo), lo, hi, cl(hi));
    const outS = `${iv(false, '-\\infty', lo, cl(lo))} \\cup ${iv(cl(hi), hi, '+\\infty', false)}`;
    const ans = inside ? inS : outS;
    const expr = `\\dfrac{${this.poly([[a, 'x'], [b, '']])}}{${this.poly([[c, 'x'], [d, '']])}}`;
    return this.makeMcq('2N4', 4, 'Inéquation quotient avec valeur interdite',
      'Résoudre une inéquation quotient (tableau de signes, valeur interdite)',
      `Résoudre dans $\\mathbb{R}$ l'inéquation $${expr} ${sym} 0$.`,
      `$S = ${ans}$`,
      [`$S = ${inside ? outS : inS}$`, `$S = ${inside ? iv(large, lo, hi, large) : `${iv(false, '-\\infty', lo, large)} \\cup ${iv(large, hi, '+\\infty', false)}`}$`, `$S = ${inside ? iv(!cl(lo) && lo !== r2, lo, hi, !cl(hi) && hi !== r2) : `${iv(false, '-\\infty', lo, !cl(lo) && lo !== r2)} \\cup ${iv(!cl(hi) && hi !== r2, hi, '+\\infty', false)}`}$`, `$S = ${iv(false, '-\\infty', r1, large)}$`],
      'Un quotient a le même signe qu\'un produit, mais le dénominateur ne doit pas s\'annuler.',
      `La valeur interdite est $x = ${r2}$ : le crochet y est toujours ouvert.`,
      `Le numérateur s'annule en $${r1}$ et le dénominateur en $${r2}$ (valeur interdite). Le quotient est ${lead > 0 ? 'positif' : 'négatif'} à l'extérieur de ces deux valeurs et ${lead > 0 ? 'négatif' : 'positif'} entre elles. ${large ? `On inclut $${r1}$ (le quotient y est nul) mais jamais $${r2}$.` : 'Inégalité stricte : aucune borne n\'est incluse.'} Donc $S = ${ans}$.`
    );
  },

  // =========================================================================
  // 2A1 : Notion de fonction, ensemble de définition
  // =========================================================================
  gen_2A1(tier) {
    const xq = this._lyX('2A1', tier, [2, 2, 3, 1][tier - 1]);
    if (xq) return xq;
    const iv = (lc, a, b, rc) => this._2nd_iv(lc, a, b, rc);
    if (tier === 1) {
      const kind = this.randInt(0, 2);
      if (kind <= 1) {
        const a = this.randNonZero(-4, 4);
        const b = this.randInt(-6, 6);
        const c = this.randInt(-9, 9);
        const x0 = this.randNonZero(-5, 5);
        const f = this.polyX([a, b, c]);
        const v = a * x0 * x0 + b * x0 + c;
        const e1 = -a * x0 * x0 + b * x0 + c;
        const e2 = a * 2 * x0 + b * x0 + c;
        const e3 = a * x0 * x0 - b * x0 + c;
        return this.makeMcq('2A1', 1, 'Calcul d\'image',
          'Calculer l\'image d\'un nombre par une fonction polynôme',
          `Soit $f(x) = ${f}$. Quelle est l'image de $${x0}$ par $f$ ?`,
          `$f(${x0}) = ${v}$`,
          [`$f(${x0}) = ${e1}$`, `$f(${x0}) = ${e2}$`, `$f(${x0}) = ${e3}$`, `$f(${x0}) = ${v + 2}$`, `$f(${x0}) = ${-v}$`],
          'Remplace chaque $x$ par la valeur, entre parenthèses si elle est négative.',
          `Attention : $${this.paren(x0)}^2 = ${this.paren(x0)} \\times ${this.paren(x0)}$ est positif.`,
          `$f(${x0}) = ${this.poly([[a, `\\times ${this.paren(x0)}^2`], [b, `\\times ${this.paren(x0)}`], [c, '']]).replace(/^-\\times/, '-1 \\times').replace(/^\\times /, '')} = ${v}$.`
        );
      }
      const a = this.randNonZero(-4, 4);
      const b = this.randInt(-6, 6);
      const c = this.randInt(1, 3);
      const d = this.randNonZero(-6, 6);
      if (a * d === b * c) return this.gen_2A1(1);
      let x0 = this.randInt(-5, 5);
      while (c * x0 + d === 0) x0 = this.randInt(-5, 5);
      const num = a * x0 + b;
      const den = c * x0 + d;
      const f = `\\dfrac{${this.poly([[a, 'x'], [b, '']])}}{${this.poly([[c, 'x'], [d, '']])}}`;
      const ans = this.frac(num, den);
      return this.makeMcq('2A1', 1, 'Calcul d\'image',
        'Calculer l\'image d\'un nombre par une fonction rationnelle',
        `Soit $f(x) = ${f}$. Quelle est l'image de $${x0}$ par $f$ ?`,
        `$f(${x0}) = ${ans}$`,
        [`$f(${x0}) = ${this.frac(den, num === 0 ? 7 : num)}$`, `$f(${x0}) = ${this.frac(-num, den)}$`, `$f(${x0}) = ${this.frac(num + 1, den)}$`, `$f(${x0}) = ${this.frac(a * x0 - b, den)}$`],
        'Calcule séparément le numérateur et le dénominateur.',
        `Numérateur : $${num}$ ; dénominateur : $${den}$.`,
        `$f(${x0}) = \\dfrac{${num}}{${den}}${this.frac(num, den) === `${num}` ? '' : ''} = ${ans}$.`.replace(`\\dfrac{${num}}{${den}} = `, (den === 1 || this.gcd(num, den) !== 1 || den < 0) ? `${num} \\div ${this.paren(den)} = ` : `\\dfrac{${num}}{${den}} = `)
      );
    }
    if (tier === 2) {
      if (Math.random() < 0.5) {
        const a = this.randNonZero(-6, 6);
        const b = this.randNonZero(-9, 9);
        const y = this.randInt(-12, 12);
        const ans = this.frac(y - b, a);
        return this.makeMcq('2A1', 2, 'Recherche d\'antécédent',
          'Résoudre $f(x) = y$ pour une fonction affine',
          `Soit $f(x) = ${this.poly([[a, 'x'], [b, '']])}$. Déterminer l'antécédent de $${y}$ par $f$.`,
          `$x = ${ans}$`,
          [`$x = ${this.frac(y + b, a)}$`, `$x = ${a * y + b}$`, `$x = ${this.frac(b - y, a)}$`, `$x = ${this.frac(y, a)}$`, `$x = ${this.frac(a, y - b || 1)}$`, `$x = ${y - b}$`],
          'Un antécédent de $y$ est un nombre $x$ tel que $f(x) = y$.',
          `Résous l'équation $${this.poly([[a, 'x'], [b, '']])} = ${y}$.`,
          `$${this.poly([[a, 'x'], [b, '']])} = ${y} \\iff ${this.coefStr(a, 'x')} = ${y - b} \\iff x = ${ans}$.`
        );
      }
      const k = this.randInt(-9, 9);
      const caseKind = this.randInt(0, 3);
      let y;
      let ans;
      let sol;
      if (caseKind === 0) {
        y = k - this.randInt(1, 9);
        ans = 'Aucun antécédent';
        sol = `$x^2 = ${y - k}$ est impossible car un carré est positif : $${y}$ n'a aucun antécédent.`;
      } else if (caseKind === 1) {
        y = k;
        ans = '$0$ (un seul antécédent)';
        sol = `$x^2 = 0 \\iff x = 0$ : un seul antécédent.`;
      } else {
        const r = this.randInt(1, 9);
        y = k + r * r;
        ans = `$${-r}$ et $${r}$`;
        sol = `$x^2 = ${r * r} \\iff x = -${r}$ ou $x = ${r}$.`;
      }
      const f = this.poly([[1, 'x^2'], [k, '']]);
      const dist = ['Aucun antécédent', '$0$ (un seul antécédent)', `$${Math.abs(y - k) || 2}$ uniquement`, `$${-(Math.abs(y - k) || 2)}$ et $${Math.abs(y - k) || 2}$`, 'Une infinité d\'antécédents'].filter((s) => s !== ans);
      return this.makeMcq('2A1', 2, 'Antécédents par une fonction carré',
        'Résoudre $f(x) = y$ avec $f(x) = x^2 + k$',
        `Soit $f(x) = ${f}$. Quel(s) antécédent(s) le nombre $${y}$ admet-il par $f$ ?`,
        ans, dist,
        `Résous $${f} = ${y}$, c'est-à-dire $x^2 = ${y - k}$.`,
        'Un carré est toujours positif ou nul.',
        k === 0 ? sol : `$${f} = ${y} \\iff x^2 = ${y - k}$. ${sol}`
      );
    }
    if (tier === 3) {
      const kind = this.randInt(0, 2);
      if (kind === 0) {
        const a = this.randNonZero(-5, 5);
        const b = this.randNonZero(-9, 9);
        const n = this.randNonZero(-9, 9);
        const v = this.frac(-b, a);
        return this.makeMcq('2A1', 3, 'Ensemble de définition (quotient)',
          'Exclure les valeurs qui annulent un dénominateur',
          `Quel est l'ensemble de définition de la fonction $f(x) = \\dfrac{${n}}{${this.poly([[a, 'x'], [b, '']])}}$ ?`,
          `$\\mathbb{R} \\setminus \\left\\{${v}\\right\\}$`,
          [`$\\mathbb{R} \\setminus \\left\\{${this.frac(b, a)}\\right\\}$`, '$\\mathbb{R}$', `$${iv(false, v, '+\\infty', false)}$`, `$\\mathbb{R} \\setminus \\left\\{${this.frac(-a, b)}\\right\\}$`],
          'On ne peut pas diviser par 0.',
          `Résous $${this.poly([[a, 'x'], [b, '']])} = 0$.`,
          `$${this.poly([[a, 'x'], [b, '']])} = 0 \\iff x = ${v}$. Donc $\\mathcal{D}_f = \\mathbb{R} \\setminus \\left\\{${v}\\right\\}$.`
        );
      }
      if (kind === 1) {
        const k = this.randInt(1, 9);
        const ans = `\\mathbb{R} \\setminus \\{-${k} ; ${k}\\}`;
        return this.makeMcq('2A1', 3, 'Ensemble de définition (quotient)',
          'Exclure les valeurs qui annulent un dénominateur',
          `Quel est l'ensemble de définition de la fonction $f(x) = \\dfrac{1}{x^2 - ${k * k}}$ ?`,
          `$${ans}$`,
          [`$\\mathbb{R} \\setminus \\{${k}\\}$`, `$\\mathbb{R} \\setminus \\{${k * k}\\}$`, '$\\mathbb{R}$', `$${iv(false, -k, k, false)}$`],
          'Le dénominateur ne doit pas être nul.',
          `$x^2 - ${k * k} = 0 \\iff x^2 = ${k * k}$.`,
          `$x^2 = ${k * k} \\iff x = -${k}$ ou $x = ${k}$. Donc $\\mathcal{D}_f = ${ans}$.`
        );
      }
      let p = this.randInt(-7, 7);
      let q = this.randInt(-7, 7);
      while (q === p) q = this.randInt(-7, 7);
      if (p > q) [p, q] = [q, p];
      const ans = `\\mathbb{R} \\setminus \\{${p} ; ${q}\\}`;
      const den = `${this._2nd_lin(1, -p)}${this._2nd_lin(1, -q)}`;
      return this.makeMcq('2A1', 3, 'Ensemble de définition (quotient)',
        'Exclure les valeurs qui annulent un dénominateur',
        `Quel est l'ensemble de définition de la fonction $f(x) = \\dfrac{x}{${den}}$ ?`,
        `$${ans}$`,
        [`$\\mathbb{R} \\setminus \\{${-p} ; ${-q}\\}$`, '$\\mathbb{R}$', `$\\mathbb{R} \\setminus \\{0\\}$`, `$${iv(false, p, q, false)}$`, `$\\mathbb{R} \\setminus \\{0 ; ${p} ; ${q}\\}$`],
        'Le dénominateur est un produit : il est nul si l\'un des facteurs est nul.',
        'Équation produit nul.',
        `$${den} = 0 \\iff x = ${p}$ ou $x = ${q}$. Donc $\\mathcal{D}_f = ${ans}$.`
      );
    }
    // tier 4 : racine carrée
    const a = this.randNonZero(-5, 5);
    const b = this.randNonZero(-9, 9);
    const inv = Math.random() < 0.4; // 1/√(ax+b) : inégalité stricte
    const v = this.frac(-b, a);
    const ans = a > 0 ? iv(!inv, v, '+\\infty', false) : iv(false, '-\\infty', v, !inv);
    const other = a > 0 ? iv(false, '-\\infty', v, !inv) : iv(!inv, v, '+\\infty', false);
    const lin = this.poly([[a, 'x'], [b, '']]);
    const f = inv ? `\\dfrac{1}{\\sqrt{${lin}}}` : `\\sqrt{${lin}}`;
    return this.makeMcq('2A1', 4, 'Ensemble de définition (racine carrée)',
      'Résoudre une inéquation pour déterminer un ensemble de définition',
      `Quel est l'ensemble de définition de la fonction $f(x) = ${f}$ ?`,
      `$${ans}$`,
      [`$${other}$`, `$${a > 0 ? iv(inv, v, '+\\infty', false) : iv(false, '-\\infty', v, inv)}$`, `$${a > 0 ? iv(!inv, this.frac(b, a), '+\\infty', false) : iv(false, '-\\infty', this.frac(b, a), !inv)}$`, '$\\mathbb{R}$'],
      inv ? 'La racine carrée doit être définie ET non nulle (elle est au dénominateur).' : 'On ne peut prendre la racine carrée que d\'un nombre positif ou nul.',
      `Résous $${lin} ${inv ? '>' : '\\ge'} 0$${a < 0 ? ' (attention, on divise par un négatif)' : ''}.`,
      `$${lin} ${inv ? '>' : '\\ge'} 0 \\iff x ${a > 0 ? (inv ? '>' : '\\ge') : (inv ? '<' : '\\le')} ${v}$. Donc $\\mathcal{D}_f = ${ans}$.`
    );
  },

  // =========================================================================
  // 2A2 : Variations et extremums
  // =========================================================================
  gen_2A2(tier) {
    const xq = this._lyX('2A2', tier, [1, 1, 1, 1][tier - 1]);
    if (xq) return xq;
    if (tier === 1) {
      const a = this.randNonZero(-9, 9);
      const b = this.randInt(-9, 9);
      const form = this.randInt(0, 2);
      const f = form === 0 ? this.poly([[a, 'x'], [b, '']]) : form === 1 ? this.poly([[b, ''], [a, 'x']]) : `${this.poly([[a, 'x']])}${b ? ' ' + this.formatSign(b) : ''}`;
      const ans = a > 0 ? 'Strictement croissante sur $\\mathbb{R}$' : 'Strictement décroissante sur $\\mathbb{R}$';
      return this._xa('keep', '2A2', 1, 'Sens de variation d\'une fonction affine',
        'Lier le signe du coefficient directeur au sens de variation',
        `Quel est le sens de variation de la fonction affine $f(x) = ${f}$ ?`,
        ans,
        [a > 0 ? 'Strictement décroissante sur $\\mathbb{R}$' : 'Strictement croissante sur $\\mathbb{R}$', 'Constante sur $\\mathbb{R}$', `Croissante puis décroissante, avec un changement en $x = ${this.frac(-b, a)}$`],
        'Pour $f(x) = mx + p$, le sens de variation dépend du signe de $m$.',
        `Ici le coefficient directeur est $m = ${a}$.`,
        `Le coefficient directeur $m = ${a}$ est ${a > 0 ? 'positif' : 'négatif'}, donc $f$ est strictement ${a > 0 ? 'croissante' : 'décroissante'} sur $\\mathbb{R}$.`
      );
    }
    if (tier === 2) {
      const a = this.randNonZero(-4, 4);
      const al = this.randInt(-6, 6);
      const be = this.randInt(-9, 9);
      const developed = Math.random() < 0.5;
      const f = developed ? this.polyX([a, -2 * a * al, a * al * al + be]) : `${a === 1 ? '' : a === -1 ? '-' : a}${al === 0 ? 'x^2' : `${this._2nd_lin(1, -al)}^2`} ${be ? this.formatSign(be) : ''}`.trim();
      const kind = a > 0 ? 'minimum' : 'maximum';
      const ans = `${kind === 'minimum' ? 'Minimum' : 'Maximum'} $${be}$ atteint en $x = ${al}$`;
      return this._xa([`(${al};${be})`, 'Saisir (α ; β), où α est la valeur de $x$ en laquelle l\'extremum est atteint et β la valeur de cet extremum.'], '2A2', 2, 'Extremum d\'une fonction du second degré',
        developed ? 'Utiliser $\\alpha = -\\frac{b}{2a}$ pour trouver l\'extremum' : 'Lire l\'extremum sur la forme $a(x - \\alpha)^2 + \\beta$',
        `Soit $f(x) = ${f}$ définie sur $\\mathbb{R}$. Quel est l'extremum de $f$ ?`,
        ans,
        [`${kind === 'minimum' ? 'Maximum' : 'Minimum'} $${be}$ atteint en $x = ${al}$`, `${kind === 'minimum' ? 'Minimum' : 'Maximum'} $${al}$ atteint en $x = ${be}$`, `${kind === 'minimum' ? 'Minimum' : 'Maximum'} $${be}$ atteint en $x = ${-al === al ? al + 1 : -al}$`, `${kind === 'minimum' ? 'Minimum' : 'Maximum'} $${developed ? a * al * al + be : be + a}$ atteint en $x = ${developed ? 0 : al + 1}$`],
        developed ? 'L\'abscisse du sommet est $\\alpha = -\\frac{b}{2a}$.' : 'Sous la forme $a(x - \\alpha)^2 + \\beta$, le sommet est $S(\\alpha ; \\beta)$.',
        `Le coefficient de $x^2$ est $${a}$ : ${a > 0 ? 'la parabole est tournée vers le haut (minimum)' : 'la parabole est tournée vers le bas (maximum)'}.`,
        developed
          ? `$\\alpha = -\\dfrac{b}{2a} = ${al}$ et $f(${al}) = ${be}$. Comme $a = ${a} ${a > 0 ? '> 0' : '< 0'}$, $f$ admet un ${kind} égal à $${be}$, atteint en $x = ${al}$.`
          : `Le sommet est $S(${al} ; ${be})$ et $a = ${a} ${a > 0 ? '> 0' : '< 0'}$ : $f$ admet un ${kind} égal à $${be}$, atteint en $x = ${al}$.`
      );
    }
    if (tier === 3) {
      const kind = this.randInt(0, 4);
      let fTex;
      let interval;
      let u;
      let v;
      let incr;
      let fu;
      let fv;
      if (kind === 0) {
        fTex = 'x^2';
        u = -this.randInt(2, 9);
        v = u + this.randInt(1, -u - 1 > 0 ? -u - 1 : 1);
        if (v >= 0) v = -1;
        interval = ']-\\infty ; 0]';
        incr = false;
        fu = `${this.paren(u)}^2`;
        fv = `${this.paren(v)}^2`;
      } else if (kind === 1) {
        fTex = '\\dfrac{1}{x}';
        u = this.randInt(2, 8);
        v = u + this.randInt(1, 6);
        interval = ']0 ; +\\infty[';
        incr = false;
        fu = `\\frac{1}{${u}}`;
        fv = `\\frac{1}{${v}}`;
      } else if (kind === 2) {
        fTex = '\\sqrt{x}';
        u = this.randInt(0, 30);
        v = u + this.randInt(1, 20);
        interval = '[0 ; +\\infty[';
        incr = true;
        fu = `\\sqrt{${u}}`;
        fv = `\\sqrt{${v}}`;
      } else if (kind === 3) {
        fTex = 'x^3';
        u = this.randInt(-9, 5);
        v = u + this.randInt(1, 6);
        interval = '\\mathbb{R}';
        incr = true;
        fu = `${this.paren(u)}^3`;
        fv = `${this.paren(v)}^3`;
      } else {
        u = this.randInt(1, 9);
        v = u + this.randInt(1, 9);
        fTex = 'x^2';
        interval = '[0 ; +\\infty[';
        incr = true;
        fu = `${u}^2`;
        fv = `${v}^2`;
      }
      const ans = incr ? `$${fu} < ${fv}$` : `$${fu} > ${fv}$`;
      return this.makeMcq('2A2', 3, 'Comparer des images par la monotonie',
        'Utiliser le sens de variation d\'une fonction de référence pour comparer',
        `Sans calculatrice, en utilisant le sens de variation de la fonction $x \\mapsto ${fTex}$ sur $${interval}$, comparer $${fu}$ et $${fv}$.`,
        ans,
        [incr ? `$${fu} > ${fv}$` : `$${fu} < ${fv}$`, `$${fu} = ${fv}$`, 'On ne peut pas comparer sans calculatrice'],
        `Quel est le sens de variation de $x \\mapsto ${fTex}$ sur $${interval}$ ?`,
        `Compare d'abord $${u}$ et $${v}$ : on a $${u} < ${v}$.`,
        `La fonction $x \\mapsto ${fTex}$ est strictement ${incr ? 'croissante' : 'décroissante'} sur $${interval}$ ; elle ${incr ? 'conserve' : 'renverse'} l'ordre. Comme $${u} < ${v}$, on obtient ${ans}.`
      );
    }
    // tier 4 : encadrement d'images
    const kind = this.randInt(0, 3);
    let fTex;
    let a;
    let b;
    let lo;
    let hi;
    let expl;
    if (kind === 0) {
      a = -this.randInt(1, 6);
      b = this.randInt(1, 6);
      fTex = 'x^2';
      lo = 0;
      hi = Math.max(a * a, b * b);
      expl = `La fonction carré est décroissante sur $[${a} ; 0]$ puis croissante sur $[0 ; ${b}]$ : son minimum est $0$ (atteint en 0) et son maximum est $\\max(${this.paren(a)}^2 ; ${b}^2) = ${hi}$.`;
    } else if (kind === 1) {
      a = this.randInt(1, 6);
      b = a + this.randInt(1, 6);
      fTex = 'x^2';
      lo = a * a;
      hi = b * b;
      expl = `La fonction carré est croissante sur $[0 ; +\\infty[$ : $${a}^2 \\le x^2 \\le ${b}^2$.`;
    } else if (kind === 2) {
      a = this.randInt(1, 5);
      b = a + this.randInt(1, 5);
      fTex = '\\dfrac{1}{x}';
      lo = this.frac(1, b);
      hi = this.frac(1, a);
      expl = `La fonction inverse est décroissante sur $]0 ; +\\infty[$ : elle renverse l'ordre, donc $\\frac{1}{${b}} \\le \\frac{1}{x} \\le ${a === 1 ? '1' : `\\frac{1}{${a}}`}$.`;
    } else {
      const m = this.randNonZero(-5, 5);
      const p = this.randInt(-6, 6);
      a = this.randInt(-5, 2);
      b = a + this.randInt(1, 6);
      fTex = this.poly([[m, 'x'], [p, '']]);
      const fa = m * a + p;
      const fb = m * b + p;
      lo = Math.min(fa, fb);
      hi = Math.max(fa, fb);
      expl = `$f$ est affine de coefficient $${m}$, donc ${m > 0 ? 'croissante' : 'décroissante'} : $f(${a}) = ${fa}$ et $f(${b}) = ${fb}$.`;
    }
    const ans = `$${lo} \\le f(x) \\le ${hi}$`;
    const wrong = kind === 0
      ? [`$${a * a} \\le f(x) \\le ${b * b}$`, `$${Math.min(a * a, b * b)} \\le f(x) \\le ${hi}$`, `$0 \\le f(x) \\le ${Math.min(a * a, b * b)}$`]
      : kind === 1
        ? [`$${2 * a} \\le f(x) \\le ${2 * b}$`, `$${a} \\le f(x) \\le ${b * b}$`, `$${b * b} \\le f(x) \\le ${a * a}$`.replace(/\$(\d+) \\le f\(x\) \\le (\d+)\$/, '$$0 \\le f(x) \\le $2$')]
        : kind === 2
          ? [`$${hi} \\le f(x) \\le ${lo}$`, `$${a} \\le f(x) \\le ${b}$`, `$${this.frac(1, a + b)} \\le f(x) \\le ${hi}$`]
          : [`$${hi} \\le f(x) \\le ${lo}$`, `$${lo - 1} \\le f(x) \\le ${hi + 1}$`, `$${Math.min(a, b)} \\le f(x) \\le ${Math.max(a, b)}$`];
    return this._xa([kind === 2 ? `(${this._xf(1, b)};${this._xf(1, a)})` : `(${lo};${hi})`, 'Saisir (m ; M) tels que $m \\le f(x) \\le M$ soit le meilleur encadrement.'], '2A2', 4, 'Encadrement d\'images',
      'Déduire un encadrement de $f(x)$ des variations de $f$',
      `Soit $f(x) = ${fTex}$. Sachant que $x \\in [${a} ; ${b}]$, quel est le meilleur encadrement de $f(x)$ ?`,
      ans, wrong,
      'Utilise le sens de variation de $f$ sur l\'intervalle (attention s\'il change de sens).',
      kind === 0 ? 'L\'intervalle contient 0 : la fonction carré n\'y est pas monotone.' : 'Une fonction décroissante renverse l\'ordre.',
      `${expl} Donc ${ans}.`
    );
  },

  // =========================================================================
  // 2A3 : Fonctions de référence
  // =========================================================================
  gen_2A3(tier) {
    const xq = this._lyX('2A3', tier, [4, 3, 3, 0][tier - 1]);
    if (xq) return xq;
    const iv = (lc, a, b, rc) => this._2nd_iv(lc, a, b, rc);
    if (tier === 1) {
      const kind = this.randInt(0, 3);
      if (kind === 0) {
        let p = this.randInt(1, 9);
        const q = this.randInt(2, 7);
        while (this.gcd(p, q) !== 1) p = this.randInt(1, 9);
        const s = this.randChoice([1, -1]);
        const x = (s < 0 ? '-' : '') + `\\frac{${p}}{${q}}`;
        return this.makeMcq('2A3', 1, 'Image par la fonction carré',
          'Calculer le carré d\'une fraction',
          `Calculer l'image de $${x}$ par la fonction carré.`,
          `$${this.frac(p * p, q * q)}$`,
          [`$${this.frac(-p * p, q * q)}$`, `$${this.frac(p * p, q)}$`, `$${this.frac(2 * p, q)}$`, `$${this.frac(p, q * q)}$`, `$${this.frac(2 * p, 2 * q + 1)}$`].filter((o) => !/^\$-?\d+\$$/.test(o)),
          'Le carré d\'un nombre est toujours positif.',
          '$\\left(\\frac{a}{b}\\right)^2 = \\frac{a^2}{b^2}$.',
          `$\\left(${x}\\right)^2 = \\frac{${p * p}}{${q * q}}$.`.replace(`\\frac{${p * p}}{${q * q}}`, this.frac(p * p, q * q))
        );
      }
      if (kind === 1) {
        const x = this.randNonZero(-5, 5);
        return this.makeMcq('2A3', 1, 'Image par la fonction cube',
          'Calculer le cube d\'un entier relatif',
          `Calculer l'image de $${x}$ par la fonction cube $x \\mapsto x^3$.`,
          `$${x ** 3}$`,
          [`$${-(x ** 3)}$`, `$${3 * x}$`, `$${x * x}$`, `$${x ** 3 + x}$`],
          'Le cube d\'un nombre a le même signe que ce nombre.',
          `$${this.paren(x)}^3 = ${this.paren(x)} \\times ${this.paren(x)} \\times ${this.paren(x)}$.`,
          `$${this.paren(x)}^3 = ${x ** 3}$.`
        );
      }
      if (kind === 2) {
        let p = this.randInt(1, 9);
        let q = this.randInt(2, 9);
        while (this.gcd(p, q) !== 1 || p === q) { p = this.randInt(1, 9); q = this.randInt(2, 9); }
        const s = this.randChoice([1, -1]);
        const x = this.frac(s * p, q);
        return this.makeMcq('2A3', 1, 'Image par la fonction inverse',
          'Calculer l\'inverse d\'un nombre',
          `Calculer l'image de $${x}$ par la fonction inverse $x \\mapsto \\frac{1}{x}$.`,
          `$${this.frac(s * q, p)}$`,
          [`$${this.frac(-s * q, p)}$`, `$${this.frac(-s * p, q)}$`, `$${this.frac(s * p * p, q * q)}$`, `$${this.frac(s * (q + 1), p)}$`, `$${this.frac(s * q, p + 1)}$`, `$${this.frac(s * q * q, p * p)}$`].filter((o) => !/^\$-?\d+\$$/.test(o) || /^\$-?\d+\$$/.test(`$${this.frac(s * q, p)}$`)),
          'L\'inverse de $\\frac{a}{b}$ est $\\frac{b}{a}$, de même signe.',
          'Ne confonds pas inverse et opposé.',
          `$\\frac{1}{${x}} = ${this.frac(s * q, p)}$.`
        );
      }
      const r = this.randInt(2, 15);
      let k = this.randInt(2, 9);
      while (k === r) k = this.randInt(2, 9);
      return this.makeMcq('2A3', 1, 'Image par la fonction racine carrée',
        'Calculer une racine carrée exacte',
        `Calculer l'image de $${r * r * k * k}$ par la fonction racine carrée.`,
        `$${r * k}$`,
        [`$${(r * r * k * k) / 2}$`.replace(/\./, '{,}'), `$${-r * k}$`, `$${r * k + 1}$`, `$${r + k}$`],
        'Cherche le nombre positif dont le carré vaut ce nombre.',
        `$${r * r * k * k} = ${r * r} \\times ${k * k}$.`,
        `$\\sqrt{${r * r * k * k}} = \\sqrt{${r * r}} \\times \\sqrt{${k * k}} = ${r} \\times ${k} = ${r * k}$.`
      );
    }
    if (tier === 2) {
      const kind = this.randInt(0, 2);
      if (kind === 0) {
        const sub = this.randInt(0, 3);
        let k;
        let ans;
        let sol;
        if (sub === 0) { k = -this.randInt(1, 20); ans = 'S = \\emptyset'; sol = `Un carré est toujours positif ou nul, donc $x^2 = ${k}$ n'a pas de solution.`; }
        else if (sub === 1) { const r = this.randInt(1, 12); k = r * r; ans = `S = \\{-${r} ; ${r}\\}`; sol = `$x^2 = ${k} \\iff x = -\\sqrt{${k}}$ ou $x = \\sqrt{${k}}$, soit $x = -${r}$ ou $x = ${r}$.`; }
        else { k = this.randChoice([2, 3, 5, 6, 7, 8, 12, 18, 20, 27, 28, 32, 45, 50]); const t = this._2nd_sqrtTex(k); ans = `S = \\{-${t} ; ${t}\\}`; sol = `$x^2 = ${k} \\iff x = -\\sqrt{${k}}$ ou $x = \\sqrt{${k}}$${t !== `\\sqrt{${k}}` ? `, avec $\\sqrt{${k}} = ${t}$` : ''}.`; }
        const t = k > 0 ? this._2nd_sqrtTex(k) : this._2nd_sqrtTex(-k);
        return this._xa(sub === 1 ? [`(${-Math.sqrt(k)};${Math.sqrt(k)})`, 'Saisir les deux solutions dans l\'ordre croissant : (x1 ; x2).'] : null, '2A3', 2, 'Équation $x^2 = k$',
          'Résoudre une équation avec la fonction carré',
          `Résoudre dans $\\mathbb{R}$ l'équation $x^2 = ${k}$.`,
          `$${ans}$`,
          [`$S = \\{${t}\\}$`, `$S = \\{-${t} ; ${t}\\}$`, '$S = \\emptyset$', `$S = \\{${this.frac(k, 2)}\\}$`, `$S = \\{-${this.frac(Math.abs(k), 2)} ; ${this.frac(Math.abs(k), 2)}\\}$`, `$S = \\{-${Math.abs(k)} ; ${Math.abs(k)}\\}$`],
          'Si $k > 0$, l\'équation $x^2 = k$ a deux solutions opposées ; si $k < 0$, aucune.',
          'Pense aux deux solutions, positive et négative.',
          `${sol} Donc $${ans}$.`
        );
      }
      if (kind === 1) {
        const x = this.randNonZero(-5, 5);
        const k = x ** 3;
        return this._xa([String(x)], '2A3', 2, 'Équation $x^3 = k$',
          'Résoudre une équation avec la fonction cube',
          `Résoudre dans $\\mathbb{R}$ l'équation $x^3 = ${k}$.`,
          `$S = \\{${x}\\}$`,
          [`$S = \\{-${Math.abs(x)} ; ${Math.abs(x)}\\}$`, `$S = \\{${-x}\\}$`, '$S = \\emptyset$', `$S = \\{${this.frac(k, 3)}\\}$`],
          'La fonction cube est strictement croissante sur $\\mathbb{R}$ : chaque réel a un unique antécédent.',
          `Cherche le nombre dont le cube vaut $${k}$.`,
          `$${this.paren(x)}^3 = ${k}$ et la fonction cube est strictement croissante, donc l'unique solution est $${x}$ : $S = \\{${x}\\}$.`
        );
      }
      let p = this.randNonZero(-9, 9);
      let q = this.randInt(1, 9);
      while (this.gcd(p, q) !== 1) { p = this.randNonZero(-9, 9); q = this.randInt(1, 9); }
      const k = this.frac(p, q);
      return this._xa([this._xf(q, p)], '2A3', 2, 'Équation $\\frac{1}{x} = k$',
        'Résoudre une équation avec la fonction inverse',
        `Résoudre dans $\\mathbb{R}^*$ l'équation $\\dfrac{1}{x} = ${k}$.`,
        `$S = \\left\\{${this.frac(q, p)}\\right\\}$`,
        [`$S = \\left\\{${this.frac(-p, q)}\\right\\}$`, `$S = \\left\\{${this.frac(-q, p)}\\right\\}$`, '$S = \\emptyset$', `$S = \\left\\{${k}\\right\\}$`],
        'La fonction inverse est sa propre réciproque.',
        'Si $\\frac{1}{x} = k$ avec $k \\neq 0$, alors $x$ est l\'inverse de $k$.',
        `$\\frac{1}{x} = ${k} \\iff x = ${this.frac(q, p)}$, donc $S = \\left\\{${this.frac(q, p)}\\right\\}$.`
      );
    }
    if (tier === 3) {
      const kind = this.randInt(0, 2);
      if (kind === 0) {
        const r = this.randInt(1, 9);
        const k = r * r;
        const less = Math.random() < 0.5;
        const large = Math.random() < 0.5;
        const sym = less ? (large ? '\\le' : '<') : (large ? '\\ge' : '>');
        const inS = iv(large, -r, r, large);
        const outS = `${iv(false, '-\\infty', -r, large)} \\cup ${iv(large, r, '+\\infty', false)}`;
        const ans = less ? inS : outS;
        return this.makeMcq('2A3', 3, 'Inéquation avec la fonction carré',
          'Résoudre $x^2 < k$ ou $x^2 > k$ à l\'aide de la parabole',
          `Résoudre dans $\\mathbb{R}$ l'inéquation $x^2 ${sym} ${k}$.`,
          `$S = ${ans}$`,
          [`$S = ${less ? outS : inS}$`, `$S = ${less ? iv(false, '-\\infty', r, large) : iv(large, r, '+\\infty', false)}$`, `$S = ${less ? iv(large, -k, k, large) : `${iv(false, '-\\infty', -k, large)} \\cup ${iv(large, k, '+\\infty', false)}`}$`, `$S = ${less ? iv(!large, -r, r, !large) : `${iv(false, '-\\infty', -r, !large)} \\cup ${iv(!large, r, '+\\infty', false)}`}$`],
          `Trace la parabole $y = x^2$ et la droite $y = ${k}$.`,
          `$x^2 = ${k}$ pour $x = -${r}$ et $x = ${r}$.`,
          `La parabole est ${less ? 'en dessous' : 'au-dessus'} de la droite $y = ${k}$ ${less ? 'entre' : 'à l\'extérieur de'} $-${r}$ et $${r}$. Donc $S = ${ans}$.`
        );
      }
      if (kind === 1) {
        const k = this.randInt(1, 12);
        const large = Math.random() < 0.5;
        const ans = iv(true, 0, k * k, large);
        return this.makeMcq('2A3', 3, 'Inéquation avec la fonction racine carrée',
          'Résoudre $\\sqrt{x} \\le k$ en tenant compte de l\'ensemble de définition',
          `Résoudre dans $[0 ; +\\infty[$ l'inéquation $\\sqrt{x} ${large ? '\\le' : '<'} ${k}$.`,
          `$S = ${ans}$`,
          [`$S = ${iv(false, '-\\infty', k * k, large)}$`, `$S = ${iv(true, 0, k, large)}$`, `$S = ${iv(true, 0, 2 * k, large)}$`, `$S = ${iv(true, 0, k * k, !large)}$`],
          'La fonction racine carrée est strictement croissante sur $[0 ; +\\infty[$.',
          'N\'oublie pas que $x$ doit être positif ou nul.',
          `Sur $[0 ; +\\infty[$, $\\sqrt{x} ${large ? '\\le' : '<'} ${k} \\iff x ${large ? '\\le' : '<'} ${k}^2 = ${k * k}$. Donc $S = ${ans}$.`
        );
      }
      let p = this.randInt(1, 9);
      let q = this.randInt(1, 6);
      while (this.gcd(p, q) !== 1) { p = this.randInt(1, 9); q = this.randInt(1, 6); }
      const k = this.frac(p, q);
      const inv = this.frac(q, p);
      const ans = `${iv(false, '-\\infty', 0, false)} \\cup ${iv(false, inv, '+\\infty', false)}`;
      return this.makeMcq('2A3', 3, 'Inéquation avec la fonction inverse',
        'Résoudre $\\frac{1}{x} < k$ en distinguant le signe de $x$',
        `Résoudre dans $\\mathbb{R}^*$ l'inéquation $\\dfrac{1}{x} < ${k}$.`,
        `$S = ${ans}$`,
        [`$S = ${iv(false, inv, '+\\infty', false)}$`, `$S = ${iv(false, 0, inv, false)}$`, `$S = ${iv(false, '-\\infty', inv, false)}$`, `$S = ${iv(false, '-\\infty', 0, false)} \\cup ${iv(false, k, '+\\infty', false)}$`],
        'Si $x < 0$, alors $\\frac{1}{x} < 0$ : l\'inégalité est automatiquement vraie.',
        'Si $x > 0$, la fonction inverse est décroissante sur $]0 ; +\\infty[$.',
        `Pour $x < 0$ : $\\frac{1}{x} < 0 < ${k}$, toujours vrai. Pour $x > 0$ : $\\frac{1}{x} < ${k} \\iff x > ${inv}$. Donc $S = ${ans}$.`
      );
    }
    return null; // palier 4 : familles ajoutées (_LYX) ; la parité relève de la 1re (1A3)
  },

  // =========================================================================
  // 2G1 : Repérage, milieu, distance
  // =========================================================================
  gen_2G1(tier) {
    const xq = this._lyX('2G1', tier, [1, 1, 1, 2][tier - 1]);
    if (xq) return xq;
    const pt = (n, x, y) => `${n}(${x} ; ${y})`;
    if (tier === 1) {
      const x1 = this.randNonZero(-9, 9);
      const y1 = this.randNonZero(-9, 9);
      const x2 = this.randNonZero(-9, 9);
      const y2 = this.randNonZero(-9, 9);
      if (x1 === x2 && y1 === y2) return this.gen_2G1(1);
      const mx = this.dec((x1 + x2) / 2);
      const my = this.dec((y1 + y2) / 2);
      return this.makeMcq('2G1', 1, 'Coordonnées du milieu',
        'Appliquer la formule du milieu d\'un segment',
        `Dans un repère, on donne $${pt('A', x1, y1)}$ et $${pt('B', x2, y2)}$. Quelles sont les coordonnées du milieu $I$ de $[AB]$ ?`,
        `$I(${mx} ; ${my})$`,
        [`$I(${this.dec((x2 - x1) / 2)} ; ${this.dec((y2 - y1) / 2)})$`, `$I(${x1 + x2} ; ${y1 + y2})$`, `$I(${my} ; ${mx})$`, `$I(${this.dec((x1 + y1) / 2)} ; ${this.dec((x2 + y2) / 2)})$`],
        'Le milieu a pour coordonnées les moyennes des coordonnées des extrémités.',
        '$x_I = \\frac{x_A + x_B}{2}$ et $y_I = \\frac{y_A + y_B}{2}$.',
        `$x_I = \\frac{${x1} + ${this.paren(x2)}}{2} = ${mx}$ et $y_I = \\frac{${y1} + ${this.paren(y2)}}{2} = ${my}$.`
          .replace(/\\frac\{([^}]*)\}\{2\}/g, '($1) \\div 2')
      );
    }
    if (tier === 2) {
      const x1 = this.randInt(-8, 8);
      const y1 = this.randInt(-8, 8);
      const dx = this.randNonZero(-7, 7);
      const dy = this.randInt(-7, 7);
      const x2 = x1 + dx;
      const y2 = y1 + dy;
      const d2 = dx * dx + dy * dy;
      const t = this._2nd_sqrtTex(d2);
      const ansTex = t === `\\sqrt{${d2}}` ? `\\sqrt{${d2}}` : (Number.isInteger(Math.sqrt(d2)) ? t : `\\sqrt{${d2}} = ${t}`);
      const s2 = Math.abs(dx) + Math.abs(dy);
      return this.makeMcq('2G1', 2, 'Distance entre deux points',
        'Calculer une distance dans un repère orthonormé',
        `Dans un repère orthonormé, on donne $${pt('A', x1, y1)}$ et $${pt('B', x2, y2)}$. Calculer la distance $AB$ (forme simplifiée).`,
        `$AB = ${ansTex}$`,
        [`$AB = ${this._2nd_sqrtTex(Math.abs(dx * dx - dy * dy) || 3)}$`, `$AB = ${s2}$`, `$AB = ${d2}$`, `$AB = ${this._2nd_sqrtTex((x1 + x2) ** 2 + (y1 + y2) ** 2 || 5)}$`].map((s) => (s === `$AB = ${ansTex}$` ? `$AB = ${d2 + 1}$` : s)),
        'Formule : $AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$.',
        `$x_B - x_A = ${dx}$ et $y_B - y_A = ${dy}$.`,
        `$AB = \\sqrt{${this.paren(dx)}^2 + ${this.paren(dy)}^2} = \\sqrt{${dx * dx} + ${dy * dy}} = ${ansTex}$.`
      );
    }
    if (tier === 3) {
      // nature d'un triangle
      const type = this.randInt(0, 3);
      const A = [this.randInt(-5, 5), this.randInt(-5, 5)];
      let B;
      let C;
      const p = this.randNonZero(-4, 4);
      const q = this.randNonZero(-4, 4);
      if (type === 0) { // rectangle (non isocèle)
        let k = this.randChoice([2, 3, -2, -3]);
        B = [A[0] + p, A[1] + q];
        C = [A[0] - k * q, A[1] + k * p];
      } else if (type === 1) { // rectangle isocèle
        B = [A[0] + p, A[1] + q];
        C = [A[0] - q, A[1] + p];
      } else if (type === 2) { // isocèle non rectangle : C symétrique de B par rapport à une droite passant par A
        B = [A[0] + p, A[1] + q];
        C = [A[0] - p, A[1] + q];
        if (q === 0 || p === 0 || Math.abs(p) === Math.abs(q)) return this.gen_2G1(3);
      } else {
        B = [A[0] + p, A[1] + q];
        C = [A[0] + this.randNonZero(-5, 5), A[1] + this.randNonZero(-5, 5)];
      }
      const P = { A, B, C };
      const d2 = (U, W) => (P[U][0] - P[W][0]) ** 2 + (P[U][1] - P[W][1]) ** 2;
      const AB = d2('A', 'B');
      const AC = d2('A', 'C');
      const BC = d2('B', 'C');
      if (!AB || !AC || !BC) return this.gen_2G1(3);
      // colinéarité
      if ((B[0] - A[0]) * (C[1] - A[1]) - (B[1] - A[1]) * (C[0] - A[0]) === 0) return this.gen_2G1(3);
      const right = AB + AC === BC ? 'A' : AB + BC === AC ? 'B' : AC + BC === AB ? 'C' : null;
      const iso = AB === AC ? 'A' : AB === BC ? 'B' : AC === BC ? 'C' : null;
      if (AB === AC && AC === BC) return this.gen_2G1(3);
      let ans;
      if (right && iso) ans = `Rectangle et isocèle en ${right}`;
      else if (right) ans = `Rectangle en ${right} (non isocèle)`;
      else if (iso) ans = `Isocèle en ${iso} (non rectangle)`;
      else ans = 'Ni rectangle ni isocèle';
      if (type === 3 && ans !== 'Ni rectangle ni isocèle' && Math.random() < 0.5) return this.gen_2G1(3);
      const v = right || iso || 'A';
      const others = ['A', 'B', 'C'].filter((x) => x !== v);
      const pool = [`Rectangle et isocèle en ${v}`, `Rectangle en ${v} (non isocèle)`, `Isocèle en ${v} (non rectangle)`, 'Ni rectangle ni isocèle', `Rectangle en ${others[0]} (non isocèle)`, 'Équilatéral'];
      return this.makeMcq('2G1', 3, 'Nature d\'un triangle',
        'Utiliser les distances et la réciproque du théorème de Pythagore',
        `Dans un repère orthonormé, on donne $${pt('A', A[0], A[1])}$, $${pt('B', B[0], B[1])}$ et $${pt('C', C[0], C[1])}$. Quelle est la nature du triangle $ABC$ ?`,
        ans, pool.filter((s) => s !== ans),
        'Calcule $AB^2$, $AC^2$ et $BC^2$.',
        'Compare les longueurs (isocèle) et teste l\'égalité de Pythagore (rectangle).',
        `$AB^2 = ${AB}$, $AC^2 = ${AC}$ et $BC^2 = ${BC}$. ${right ? `On a $${right === 'A' ? 'AB^2 + AC^2 = BC^2' : right === 'B' ? 'AB^2 + BC^2 = AC^2' : 'AC^2 + BC^2 = AB^2'}$ : le triangle est rectangle en ${right} (réciproque de Pythagore).` : 'Aucune égalité de Pythagore n\'est vérifiée : le triangle n\'est pas rectangle.'} ${iso ? `Deux côtés issus de ${iso} ont la même longueur : il est isocèle en ${iso}.` : 'Les trois longueurs sont différentes : il n\'est pas isocèle.'}`
      );
    }
    // tier 4
    const A = [this.randNonZero(-7, 7), this.randNonZero(-7, 7)];
    const B = [this.randNonZero(-7, 7), this.randNonZero(-7, 7)];
    const C = [this.randNonZero(-7, 7), this.randNonZero(-7, 7)];
    if ((B[0] - A[0]) * (C[1] - A[1]) - (B[1] - A[1]) * (C[0] - A[0]) === 0) return this.gen_2G1(4);
    if (Math.random() < 0.6) {
      const D = [A[0] - B[0] + C[0], A[1] - B[1] + C[1]];
      return this.makeMcq('2G1', 4, 'Quatrième sommet d\'un parallélogramme',
        'Utiliser le milieu commun des diagonales',
        `On donne $${pt('A', A[0], A[1])}$, $${pt('B', B[0], B[1])}$ et $${pt('C', C[0], C[1])}$. Quelles sont les coordonnées du point $D$ tel que $ABCD$ soit un parallélogramme ?`,
        `$D(${D[0]} ; ${D[1]})$`,
        [`$D(${A[0] + B[0] - C[0]} ; ${A[1] + B[1] - C[1]})$`, `$D(${B[0] + C[0] - A[0]} ; ${B[1] + C[1] - A[1]})$`, `$D(${C[0] - A[0] + B[0]} ; ${C[1] - A[1] - B[1]})$`, `$D(${-D[0]} ; ${-D[1]})$`],
        '$ABCD$ est un parallélogramme si et seulement si $[AC]$ et $[BD]$ ont le même milieu.',
        'Calcule le milieu $I$ de $[AC]$, puis $D$ est le symétrique de $B$ par rapport à $I$.',
        `Le milieu de $[AC]$ est $I(${this.dec((A[0] + C[0]) / 2)} ; ${this.dec((A[1] + C[1]) / 2)})$. C'est aussi le milieu de $[BD]$, donc $x_D = 2x_I - x_B = ${D[0]}$ et $y_D = 2y_I - y_B = ${D[1]}$. Ainsi $D(${D[0]} ; ${D[1]})$.`
      );
    }
    const S = [2 * B[0] - A[0], 2 * B[1] - A[1]];
    return this.makeMcq('2G1', 4, 'Symétrique d\'un point',
      'Utiliser la formule du milieu « à l\'envers »',
      `On donne $${pt('A', A[0], A[1])}$ et $${pt('B', B[0], B[1])}$. Quelles sont les coordonnées du point $A'$, symétrique de $A$ par rapport à $B$ ?`,
      `$A'(${S[0]} ; ${S[1]})$`,
      [`$A'(${this.dec((A[0] + B[0]) / 2)} ; ${this.dec((A[1] + B[1]) / 2)})$`, `$A'(${2 * A[0] - B[0]} ; ${2 * A[1] - B[1]})$`, `$A'(${B[0] - A[0]} ; ${B[1] - A[1]})$`, `$A'(${-A[0]} ; ${-A[1]})$`],
      '$B$ est le milieu de $[AA\']$.',
      '$x_B = \\frac{x_A + x_{A\'}}{2}$ donc $x_{A\'} = 2x_B - x_A$.',
      `$x_{A'} = 2 \\times ${this.paren(B[0])} - ${this.paren(A[0])} = ${S[0]}$ et $y_{A'} = 2 \\times ${this.paren(B[1])} - ${this.paren(A[1])} = ${S[1]}$.`
    );
  },

  // =========================================================================
  // 2G2 : Vecteurs, colinéarité
  // =========================================================================
  gen_2G2(tier) {
    const xq = this._lyX('2G2', tier, [1, 1, 1, 1][tier - 1]);
    if (xq) return xq;
    const vec = (n, x, y) => `\\vec{${n}}\\begin{pmatrix} ${x} \\\\ ${y} \\end{pmatrix}`;
    const pt = (n, x, y) => `${n}(${x} ; ${y})`;
    if (tier === 1) {
      const A = [this.randNonZero(-9, 9), this.randNonZero(-9, 9)];
      const B = [this.randNonZero(-9, 9), this.randNonZero(-9, 9)];
      if (A[0] === B[0] && A[1] === B[1]) return this.gen_2G2(1);
      const ov = (x, y) => `\\overrightarrow{AB}\\begin{pmatrix} ${x} \\\\ ${y} \\end{pmatrix}`;
      return this._xa([`(${B[0] - A[0]};${B[1] - A[1]})`, 'Saisir les coordonnées sous la forme (x ; y).'], '2G2', 1, 'Coordonnées d\'un vecteur',
        'Calculer les coordonnées de $\\overrightarrow{AB}$',
        `On donne $${pt('A', A[0], A[1])}$ et $${pt('B', B[0], B[1])}$. Quelles sont les coordonnées du vecteur $\\overrightarrow{AB}$ ?`,
        `$${ov(B[0] - A[0], B[1] - A[1])}$`,
        [`$${ov(A[0] - B[0], A[1] - B[1])}$`, `$${ov(A[0] + B[0], A[1] + B[1])}$`, `$${ov(B[1] - A[1], B[0] - A[0])}$`, `$${ov(B[0] - A[0], A[1] - B[1])}$`],
        '$\\overrightarrow{AB}\\begin{pmatrix} x_B - x_A \\\\ y_B - y_A \\end{pmatrix}$ : « arrivée moins départ ».',
        'Attention aux signes avec les nombres négatifs.',
        `$x_B - x_A = ${B[0]} - ${this.paren(A[0])} = ${B[0] - A[0]}$ et $y_B - y_A = ${B[1]} - ${this.paren(A[1])} = ${B[1] - A[1]}$.`
      );
    }
    if (tier === 2) {
      const u = [this.randInt(-6, 6), this.randInt(-6, 6)];
      const v = [this.randInt(-6, 6), this.randInt(-6, 6)];
      const k = this.randNonZero(-4, 4);
      const m = this.randNonZero(-4, 4);
      const w = [k * u[0] + m * v[0], k * u[1] + m * v[1]];
      const comb = this.poly([[k, '\\vec{u}'], [m, '\\vec{v}']]);
      const W = (x, y) => `\\vec{w}\\begin{pmatrix} ${x} \\\\ ${y} \\end{pmatrix}`;
      return this._xa([`(${w[0]};${w[1]})`, 'Saisir les coordonnées sous la forme (x ; y).'], '2G2', 2, 'Combinaison linéaire de vecteurs',
        'Calculer les coordonnées de $k\\vec{u} + m\\vec{v}$',
        `On donne $${vec('u', u[0], u[1])}$ et $${vec('v', v[0], v[1])}$. Quelles sont les coordonnées de $\\vec{w} = ${comb}$ ?`,
        `$${W(w[0], w[1])}$`,
        [`$${W(k * u[0] - m * v[0], k * u[1] - m * v[1])}$`, `$${W(u[0] + v[0], u[1] + v[1])}$`, `$${W(k * u[0] + m * v[1], k * u[1] + m * v[0])}$`, `$${W(k * u[0] + v[0], k * u[1] + v[1])}$`, `$${W(w[0] + 1, w[1] - 1)}$`],
        'On calcule coordonnée par coordonnée.',
        `Abscisse : $${k} \\times ${this.paren(u[0])} + ${this.paren(m)} \\times ${this.paren(v[0])}$.`,
        `$x_w = ${k} \\times ${this.paren(u[0])} + ${this.paren(m)} \\times ${this.paren(v[0])} = ${w[0]}$ et $y_w = ${k} \\times ${this.paren(u[1])} + ${this.paren(m)} \\times ${this.paren(v[1])} = ${w[1]}$.`
      );
    }
    if (tier === 3) {
      const a = this.randNonZero(-6, 6);
      const b = this.randNonZero(-6, 6);
      const t = this.randNonZero(-3, 3);
      if (Math.random() < 0.5) {
        // trouver m tel que u(a;b) et v(c;m) colinéaires
        const c = a * t;
        const mAns = b * t;
        return this.makeMcq('2G2', 3, 'Colinéarité et déterminant',
          'Utiliser $\\det(\\vec{u}, \\vec{v}) = xy\' - yx\' = 0$',
          `On donne $${vec('u', a, b)}$ et $\\vec{v}\\begin{pmatrix} ${c} \\\\ m \\end{pmatrix}$. Pour quelle valeur de $m$ les vecteurs $\\vec{u}$ et $\\vec{v}$ sont-ils colinéaires ?`,
          `$m = ${mAns}$`,
          [`$m = ${this.frac(a * c, b)}$`, `$m = ${-mAns}$`, `$m = ${this.frac(b, c)}$`, `$m = ${mAns + b}$`],
          'Deux vecteurs sont colinéaires si et seulement si leur déterminant est nul.',
          `$\\det(\\vec{u}, \\vec{v}) = ${this.paren(a)} \\times m - ${this.paren(b)} \\times ${this.paren(c)}$.`,
          `$${this.coefStr(a, 'm')} - ${this.paren(b)} \\times ${this.paren(c)} = 0 \\iff ${this.coefStr(a, 'm')} = ${b * c} \\iff m = ${mAns}$.`
        );
      }
      const c = this.randNonZero(-6, 6);
      const d = Math.random() < 0.5 ? b * c / a : this.randNonZero(-6, 6);
      if (!Number.isInteger(d)) return this.gen_2G2(3);
      const det = a * d - b * c;
      const ans = det === 0 ? 'Oui, car $\\det(\\vec{u}, \\vec{v}) = 0$' : `Non, car $\\det(\\vec{u}, \\vec{v}) = ${det} \\neq 0$`;
      return this.makeMcq('2G2', 3, 'Colinéarité et déterminant',
        'Tester la colinéarité de deux vecteurs',
        `Les vecteurs $${vec('u', a, b)}$ et $${vec('v', c, d)}$ sont-ils colinéaires ?`,
        ans,
        [det === 0 ? `Non, car $\\det(\\vec{u}, \\vec{v}) = ${2 * a * d} \\neq 0$` : 'Oui, car $\\det(\\vec{u}, \\vec{v}) = 0$', `${det === 0 ? 'Non' : 'Oui'}, car $${a * c + b * d === 0 ? 'xx\' + yy\' = 0' : `xx' + yy' = ${a * c + b * d}`}$`, `${det === 0 ? 'Non' : 'Oui'}, car leurs coordonnées sont ${det === 0 ? 'différentes' : 'non nulles'}`],
        '$\\det(\\vec{u}, \\vec{v}) = xy\' - yx\'$.',
        `Calcule $${this.paren(a)} \\times ${this.paren(d)} - ${this.paren(b)} \\times ${this.paren(c)}$.`,
        `$\\det(\\vec{u}, \\vec{v}) = ${this.paren(a)} \\times ${this.paren(d)} - ${this.paren(b)} \\times ${this.paren(c)} = ${a * d} - ${this.paren(b * c)} = ${det}$. ${det === 0 ? 'Le déterminant est nul : les vecteurs sont colinéaires.' : 'Le déterminant est non nul : les vecteurs ne sont pas colinéaires.'}`
      );
    }
    // tier 4 : alignement
    const A = [this.randInt(-6, 6), this.randInt(-6, 6)];
    const u = [this.randNonZero(-4, 4), this.randInt(-4, 4)];
    const B = [A[0] + u[0], A[1] + u[1]];
    const t = this.randChoice([-2, -1, 2, 3]);
    const aligned = Math.random() < 0.5;
    const C = [A[0] + t * u[0], A[1] + t * u[1] + (aligned ? 0 : this.randChoice([-1, 1, 2]))];
    const AB = [B[0] - A[0], B[1] - A[1]];
    const AC = [C[0] - A[0], C[1] - A[1]];
    if (!AB[0] || !AB[1] || !AC[0] || !AC[1]) return this.gen_2G2(4);
    const det = AB[0] * AC[1] - AB[1] * AC[0];
    const ans = det === 0 ? `Oui : $\\det(\\overrightarrow{AB}, \\overrightarrow{AC}) = 0$` : `Non : $\\det(\\overrightarrow{AB}, \\overrightarrow{AC}) = ${det} \\neq 0$`;
    return this.makeMcq('2G2', 4, 'Alignement de trois points',
      'Démontrer un alignement par la colinéarité de deux vecteurs',
      `Les points $${pt('A', A[0], A[1])}$, $${pt('B', B[0], B[1])}$ et $${pt('C', C[0], C[1])}$ sont-ils alignés ?`,
      ans,
      [det === 0 ? `Non : $\\det(\\overrightarrow{AB}, \\overrightarrow{AC}) = ${Math.abs(AB[0] * AC[1]) + Math.abs(AB[1] * AC[0]) || 1} \\neq 0$` : 'Oui : $\\det(\\overrightarrow{AB}, \\overrightarrow{AC}) = 0$', `${det === 0 ? 'Non' : 'Oui'} : $AB = AC$`, `${det === 0 ? 'Non' : 'Oui'} : les abscisses de $A$, $B$ et $C$ sont ${det === 0 ? 'distinctes' : 'entières'}`],
      'Trois points $A$, $B$, $C$ sont alignés si et seulement si $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ sont colinéaires.',
      `$\\overrightarrow{AB}\\begin{pmatrix} ${AB[0]} \\\\ ${AB[1]} \\end{pmatrix}$ et $\\overrightarrow{AC}\\begin{pmatrix} ${AC[0]} \\\\ ${AC[1]} \\end{pmatrix}$.`,
      `$\\det(\\overrightarrow{AB}, \\overrightarrow{AC}) = ${this.paren(AB[0])} \\times ${this.paren(AC[1])} - ${this.paren(AB[1])} \\times ${this.paren(AC[0])} = ${det}$. ${det === 0 ? 'Les vecteurs sont colinéaires : $A$, $B$ et $C$ sont alignés.' : 'Les vecteurs ne sont pas colinéaires : les points ne sont pas alignés.'}`
    );
  },

  // =========================================================================
  // 2G3 : Droites du plan
  // =========================================================================
  gen_2G3(tier) {
    const xq = this._lyX('2G3', tier, [1, 2, 1, 1][tier - 1]);
    if (xq) return xq;
    const pt = (n, x, y) => `${n}(${x} ; ${y})`;
    const red = (m, p) => `y = ${this.poly([[m, 'x'], [p, '']])}`;
    const cart = (a, b, c) => `${this.poly([[a, 'x'], [b, 'y'], [c, '']])} = 0`;
    if (tier === 1) {
      // coefficient directeur mNum/mDen, ordonnée à l'origine pN/mDen
      let mDen = 1;
      let mNum = this.randNonZero(-4, 4);
      if (Math.random() < 0.35) {
        mDen = this.randChoice([2, 3]);
        mNum = this.randNonZero(-5, 5);
        if (this.gcd(mNum, mDen) !== 1) return this.gen_2G3(1);
      }
      const x1 = this.randNonZero(-6, 6);
      const y1 = this.randNonZero(-6, 6);
      const k = this.randNonZero(-3, 3);
      const x2 = x1 + k * mDen;
      const y2 = y1 + k * mNum;
      const mT = this.frac(mNum, mDen);
      const pN = y1 * mDen - mNum * x1;
      const pT = this.frac(pN, mDen);
      const eq = (m, pp) => `y = ${this.poly([[m, 'x'], [pp, '']])}`;
      const ans = eq(mT, pT);
      const cands = [
        eq(this.frac(mDen, mNum), pT),
        eq(mT, this.frac(-pN, mDen)),
        eq(this.frac(-mNum, mDen), pT),
        eq(mT, String(y1)),
        eq(mT, this.frac(pN + mDen, mDen)),
        eq(this.frac(-mNum, mDen), this.frac(y1 * mDen + mNum * x1, mDen))
      ];
      const slope = `\\frac{y_B - y_A}{x_B - x_A} = ${(y2 - y1)} \\div ${this.paren(x2 - x1)} = ${mT}`;
      return this._xa([`(${this._xf(mNum, mDen)};${this._xf(pN, mDen)})`, 'Saisir (m ; p) pour $y = mx + p$, par exemple (-2/3;5).'], '2G3', 1, 'Équation réduite d\'une droite',
        'Calculer le coefficient directeur puis l\'ordonnée à l\'origine',
        `Déterminer l'équation réduite de la droite $(AB)$ avec $${pt('A', x1, y1)}$ et $${pt('B', x2, y2)}$.`,
        `$${ans}$`, cands.map((c) => `$${c}$`),
        'Coefficient directeur : $m = \\frac{y_B - y_A}{x_B - x_A}$.',
        'Puis l\'ordonnée à l\'origine : $p = y_A - m x_A$.',
        `$m = ${slope}$. Puis $p = y_A - m x_A = ${y1} - ${this.paren(mT)} \\times ${this.paren(x1)} = ${pT}$. Donc $(AB) : ${ans}$.`
      );
    }
    if (tier === 2) {
      if (Math.random() < 0.5) {
        const A = [this.randInt(-6, 6), this.randInt(-6, 6)];
        const u = [this.randNonZero(-5, 5), this.randNonZero(-5, 5)];
        if (this.gcd(u[0], u[1]) !== 1) return this.gen_2G3(2);
        // direction (-b ; a) = u => a = u1, b = -u0
        const a = u[1];
        const b = -u[0];
        const c = -(a * A[0] + b * A[1]);
        const ans = cart(a, b, c);
        return this.makeMcq('2G3', 2, 'Équation cartésienne d\'une droite',
          'Utiliser un vecteur directeur $\\vec{u}(-b ; a)$',
          `Déterminer une équation cartésienne de la droite passant par $${pt('A', A[0], A[1])}$ et de vecteur directeur $\\vec{u}\\begin{pmatrix} ${u[0]} \\\\ ${u[1]} \\end{pmatrix}$.`,
          `$${ans}$`,
          [`$${cart(u[0], u[1], -(u[0] * A[0] + u[1] * A[1]))}$`, `$${cart(a, b, -c === c ? c + 1 : -c)}$`, `$${cart(a, -b, -(a * A[0] - b * A[1]))}$`, `$${cart(u[1], u[0], -(u[1] * A[0] + u[0] * A[1]))}$`],
          'Un vecteur directeur de $ax + by + c = 0$ est $\\vec{u}(-b ; a)$.',
          `Avec $\\vec{u}(${u[0]} ; ${u[1]})$ on prend $a = ${a}$ et $b = ${b}$, puis on trouve $c$ avec $A$.`,
          `$-b = ${u[0]}$ et $a = ${u[1]}$ donnent $${cart(a, b, 0).replace(' = 0', '')} + c = 0$. Comme $A$ est sur la droite : $${this.paren(a)} \\times ${this.paren(A[0])} + ${this.paren(b)} \\times ${this.paren(A[1])} + c = 0$, d'où $c = ${c}$. Une équation est $${ans}$.`.replace(/\$0 \+ c = 0\$/, '$c = 0$')
        );
      }
      const a = this.randNonZero(-6, 6);
      const b = this.randNonZero(-6, 6);
      const c = this.randInt(-9, 9);
      if (this.gcd(a, b) !== 1) return this.gen_2G3(2);
      const U = (x, y) => `\\vec{u}\\begin{pmatrix} ${x} \\\\ ${y} \\end{pmatrix}`;
      return this.makeMcq('2G3', 2, 'Vecteur directeur d\'une droite',
        'Lire un vecteur directeur sur une équation cartésienne',
        `Lequel des vecteurs suivants est un vecteur directeur de la droite $d : ${cart(a, b, c)}$ ?`,
        `$${U(-b, a)}$`,
        [`$${U(a, b)}$`, `$${U(b, a)}$`, `$${U(a, -b)}$`, `$${U(-a, b)}$`].filter((s) => {
          const m = s.match(/(-?\d+) \\\\ (-?\d+)/);
          return (+m[1]) * a + (+m[2]) * b !== 0; // exclut les vecteurs colinéaires à (-b ; a)
        }),
        'Pour $ax + by + c = 0$, un vecteur directeur est $\\vec{u}(-b ; a)$.',
        `Ici $a = ${a}$ et $b = ${b}$.`,
        `Un vecteur directeur est $\\vec{u}(-b ; a) = ${U(-b, a)}$. On vérifie : un point $M(x ; y)$ de $d$ translaté par $\\vec{u}$ reste sur $d$ car $a(-b) + b \\times a = 0$.`
      );
    }
    if (tier === 3) {
      const m = this.randNonZero(-4, 4);
      const p = this.randInt(-6, 6);
      const xs = this.pickDistinct([-4, -3, -2, -1, 1, 2, 3, 4], 4);
      const good = [xs[0], m * xs[0] + p];
      const bad = xs.slice(1).map((x, i) => [x, m * x + p + [1, -2, 3][i]]);
      const bad2 = [good[1], good[0]];
      const cands = [...bad, bad2].filter(([x, y]) => y !== m * x + p);
      return this.makeMcq('2G3', 3, 'Appartenance d\'un point à une droite',
        'Vérifier si les coordonnées d\'un point satisfont une équation',
        `Lequel des points suivants appartient à la droite $d : ${red(m, p)}$ ?`,
        `$M(${good[0]} ; ${good[1]})$`,
        cands.map(([x, y]) => `$M(${x} ; ${y})$`),
        'Un point appartient à la droite si ses coordonnées vérifient l\'équation.',
        'Remplace $x$ par l\'abscisse et compare le résultat à l\'ordonnée.',
        `Pour $x = ${good[0]}$ : $${this.coefStr(m, `\\times ${this.paren(good[0])}`).replace(/^\\times /, '').replace(/^-\\times /, '-')} ${this.formatSign(p)} = ${good[1]}$, c'est bien l'ordonnée de $M$. Pour les autres points, l'égalité n'est pas vérifiée.`.replace(/ \+ 0 = /, ' = ')
      );
    }
    // tier 4 : position relative
    const kind = this.randInt(0, 2);
    const a1 = this.randNonZero(-4, 4);
    const b1 = this.randNonZero(-4, 4);
    if (this.gcd(a1, b1) !== 1) return this.gen_2G3(4);
    const X = this.randInt(-4, 4);
    const Y = this.randInt(-4, 4);
    const c1 = -(a1 * X + b1 * Y);
    let a2;
    let b2;
    let c2;
    let ans;
    let sol;
    if (kind === 0) { // sécantes en (X;Y)
      a2 = this.randNonZero(-4, 4);
      b2 = this.randNonZero(-4, 4);
      if (a1 * b2 - a2 * b1 === 0) return this.gen_2G3(4);
      c2 = -(a2 * X + b2 * Y);
      ans = `Sécantes en $(${X} ; ${Y})$`;
      sol = `$\\det = ${this.paren(a1)} \\times ${this.paren(b2)} - ${this.paren(a2)} \\times ${this.paren(b1)} = ${a1 * b2 - a2 * b1} \\neq 0$ : les droites sont sécantes. On résout le système et on obtient le point $(${X} ; ${Y})$ (on vérifie qu'il est sur les deux droites).`;
    } else {
      const k = this.randChoice([-3, -2, 2, 3]);
      a2 = k * a1;
      b2 = k * b1;
      c2 = kind === 1 ? k * c1 : k * c1 + this.randChoice([-3, -1, 1, 2, 5]);
      ans = kind === 1 ? 'Confondues' : 'Strictement parallèles';
      sol = `Les coefficients de $x$ et $y$ de $d_2$ sont ceux de $d_1$ multipliés par $${k}$ : les vecteurs directeurs sont colinéaires (déterminant nul), les droites sont parallèles. ${kind === 1 ? `Le terme constant est aussi multiplié par $${k}$ : les équations sont équivalentes, les droites sont confondues.` : `Le terme constant n'est pas multiplié par $${k}$ : aucun point commun, les droites sont strictement parallèles.`}`;
    }
    const pool = [`Sécantes en $(${X} ; ${Y})$`, 'Confondues', 'Strictement parallèles', `Sécantes en $(${Y} ; ${X})$`, `Sécantes en $(${-X} ; ${-Y})$`, 'Perpendiculaires', `Sécantes en $(${X + 1} ; ${Y - 1})$`];
    return this.makeMcq('2G3', 4, 'Position relative de deux droites',
      'Comparer deux droites par leurs équations cartésiennes',
      `Quelle est la position relative des droites $d_1 : ${cart(a1, b1, c1)}$ et $d_2 : ${cart(a2, b2, c2)}$ ?`,
      ans, pool.filter((s) => s !== ans && !(kind === 0 && s === 'Perpendiculaires' && a1 * a2 + b1 * b2 === 0) && !(X === Y && s.includes(`(${Y} ; ${X})`)) && !(X === 0 && Y === 0 && s.includes(`(${-X} ; ${-Y})`))),
      'Calcule le déterminant $ab\' - a\'b$ des coefficients.',
      'Déterminant nul : parallèles (strictement ou confondues). Sinon sécantes.',
      sol
    );
  },

  // =========================================================================
  // 2S1 : Statistiques descriptives
  // =========================================================================
  gen_2S1(tier) {
    const xq = this._lyX('2S1', tier, [2, 1, 1, 3][tier - 1]);
    if (xq) return xq;
    const fmtMean = (num, den) => {
      const v = num / den;
      if (this.isDecimal(v, 2)) return { rel: '=', txt: this.dec(v, 2), exact: true };
      return { rel: '\\approx', txt: this.dec(v, 2), exact: false };
    };
    if (tier === 1) {
      if (Math.random() < 0.55) {
        const n = this.randInt(4, 7);
        const notes = Array.from({ length: n }, () => this.randInt(4, 20));
        const sum = notes.reduce((a, b) => a + b, 0);
        const m = fmtMean(sum, n);
        const med = [...notes].sort((a, b) => a - b);
        return this.makeMcq('2S1', 1, 'Moyenne d\'une série',
          'Calculer la moyenne d\'une série de valeurs',
          `Calculer la moyenne de la série de notes suivante : ${notes.join(' ; ')}${m.exact ? '' : ' (arrondir au centième)'}.`,
          `$\\bar{x} ${m.rel} ${m.txt}$`,
          [`$\\bar{x} ${fmtMean(sum, n - 1).rel} ${fmtMean(sum, n - 1).txt}$`, `$\\bar{x} = ${sum}$`, `$\\bar{x} ${fmtMean(sum + 10, n).rel} ${fmtMean(sum + 10, n).txt}$`, `$\\bar{x} = ${this.dec((med[0] + med[n - 1]) / 2)}$`],
          'La moyenne est la somme des valeurs divisée par l\'effectif total.',
          `Somme : $${notes.join(' + ')} = ${sum}$ ; effectif : $${n}$.`,
          `$\\bar{x} = \\frac{${sum}}{${n}} ${m.rel} ${m.txt}$.`.replace(`\\frac{${sum}}{${n}}`, this.gcd(sum, n) === 1 ? `\\frac{${sum}}{${n}}` : `${sum} \\div ${n}`)
        );
      }
      // moyenne pondérée (tableau d'effectifs)
      const k = this.randInt(3, 4);
      const vals = this.pickDistinct([5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18], k).sort((a, b) => a - b);
      const eff = vals.map(() => this.randInt(1, 8));
      const N = eff.reduce((a, b) => a + b, 0);
      const S = vals.reduce((s, v, i) => s + v * eff[i], 0);
      const m = fmtMean(S, N);
      const simple = vals.reduce((a, b) => a + b, 0);
      const ms = fmtMean(simple, k);
      return this.makeMcq('2S1', 1, 'Moyenne pondérée',
        'Calculer une moyenne à partir d\'un tableau d\'effectifs',
        `Dans une classe, on relève les notes suivantes (valeur : effectif) : ${vals.map((v, i) => `${v} : ${eff[i]}`).join(' ; ')}. Calculer la moyenne${m.exact ? '' : ' (arrondir au centième)'}.`,
        `$\\bar{x} ${m.rel} ${m.txt}$`,
        [`$\\bar{x} ${ms.rel} ${ms.txt}$`, `$\\bar{x} ${fmtMean(S, k).rel} ${fmtMean(S, k).txt}$`, `$\\bar{x} ${fmtMean(S, N + 1).rel} ${fmtMean(S, N + 1).txt}$`],
        'Chaque valeur est multipliée par son effectif.',
        `L'effectif total est $${N}$.`,
        `$\\bar{x} = \\frac{${vals.map((v, i) => `${eff[i]} \\times ${v}`).join(' + ')}}{${N}} = \\frac{${S}}{${N}} ${m.rel} ${m.txt}$.`.replace(`\\frac{${S}}{${N}}`, this.gcd(S, N) === 1 && N > 1 ? `\\frac{${S}}{${N}}` : `${S} \\div ${N}`)
      );
    }
    if (tier === 2) {
      const n = this.randInt(5, 10);
      const vals = Array.from({ length: n }, () => this.randInt(1, 30));
      const s = [...vals].sort((a, b) => a - b);
      const med = n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2;
      const medT = this.dec(med);
      const mean = vals.reduce((a, b) => a + b, 0) / n;
      const wrongUnsorted = n % 2 ? vals[(n - 1) / 2] : (vals[n / 2 - 1] + vals[n / 2]) / 2;
      return this.makeMcq('2S1', 2, 'Médiane d\'une série',
        'Ordonner la série puis déterminer la médiane',
        `Déterminer la médiane de la série : ${vals.join(' ; ')}.`,
        `$Me = ${medT}$`,
        [`$Me = ${this.dec(wrongUnsorted)}$`, `$Me = ${this.dec(mean, 2)}$`, `$Me = ${n % 2 ? this.dec((s[(n - 1) / 2] + s[(n + 1) / 2]) / 2) : s[n / 2]}$`, `$Me = ${this.dec((s[0] + s[n - 1]) / 2)}$`, `$Me = ${n % 2 ? s[(n + 1) / 2] : s[n / 2 - 1]}$`],
        'Commence par ranger les valeurs dans l\'ordre croissant.',
        n % 2 ? `L'effectif $${n}$ est impair : la médiane est la valeur de rang $${(n + 1) / 2}$.` : `L'effectif $${n}$ est pair : la médiane est la moyenne des valeurs de rangs $${n / 2}$ et $${n / 2 + 1}$.`,
        `Série ordonnée : ${s.join(' ; ')}. ${n % 2 ? `La valeur de rang $${(n + 1) / 2}$ est $${medT}$.` : `Les valeurs de rangs $${n / 2}$ et $${n / 2 + 1}$ sont $${s[n / 2 - 1]}$ et $${s[n / 2]}$, d'où $Me = ${medT}$.`}`
      );
    }
    if (tier === 3) {
      const n = this.randInt(8, 15);
      const vals = Array.from({ length: n }, () => this.randInt(1, 40));
      const s = [...vals].sort((a, b) => a - b);
      const r1 = Math.ceil(n / 4);
      const r3 = Math.ceil((3 * n) / 4);
      const q1 = s[r1 - 1];
      const q3 = s[r3 - 1];
      const ask = this.randInt(0, 2);
      const label = ask === 0 ? 'Q_1' : ask === 1 ? 'Q_3' : 'Q_3 - Q_1';
      const val = ask === 0 ? q1 : ask === 1 ? q3 : q3 - q1;
      const w = ask === 0 ? [s[r1], s[r1 - 2] !== undefined ? s[r1 - 2] : s[r1 + 1], q3, this.dec((s[Math.floor(n / 4) - 1] + s[Math.floor(n / 4)]) / 2)]
        : ask === 1 ? [s[r3], s[r3 - 2], q1, this.dec((s[Math.floor(3 * n / 4) - 1] + s[Math.floor(3 * n / 4)]) / 2)]
          : [s[n - 1] - s[0], q3 + q1, s[r3] - s[r1 - 1], (s[r3 - 2] - s[r1])];
      return this.makeMcq('2S1', 3, 'Quartiles',
        'Déterminer les quartiles d\'une série',
        `On considère la série de ${n} valeurs : ${vals.join(' ; ')}. Déterminer $${label}$.`,
        `$${label} = ${val}$`,
        w.map((x) => `$${label} = ${x}$`),
        '$Q_1$ est la plus petite valeur telle qu\'au moins 25 % des valeurs lui soient inférieures ou égales (de même $Q_3$ avec 75 %).',
        `Rang de $Q_1$ : $\\frac{${n}}{4}$ arrondi à l'entier supérieur, soit ${r1} ; rang de $Q_3$ : ${r3}.`.replace(`\\frac{${n}}{4}`, this.gcd(n, 4) === 1 ? `\\frac{${n}}{4}` : `${n} \\div 4`),
        `Série ordonnée : ${s.join(' ; ')}. $Q_1$ est la valeur de rang ${r1} : $Q_1 = ${q1}$ ; $Q_3$ est la valeur de rang ${r3} : $Q_3 = ${q3}$.${ask === 2 ? ` Écart interquartile : $Q_3 - Q_1 = ${q3 - q1}$.` : ''}`
      );
    }
    // tier 4
    const kind = this.randInt(0, 2);
    if (kind === 0) {
      const n1 = this.randInt(10, 30);
      const n2 = this.randInt(10, 30);
      const m1 = this.randInt(8, 16);
      const m2 = this.randInt(8, 16);
      if (m1 === m2) return this.gen_2S1(4);
      const m = fmtMean(n1 * m1 + n2 * m2, n1 + n2);
      const naive = fmtMean(m1 + m2, 2);
      return this.makeMcq('2S1', 4, 'Moyenne de deux groupes',
        'Combiner des moyennes avec des effectifs différents',
        `Un groupe A de ${n1} élèves a une moyenne de ${m1}, un groupe B de ${n2} élèves a une moyenne de ${m2}. Quelle est la moyenne de l'ensemble des ${n1 + n2} élèves${m.exact ? '' : ' (arrondie au centième)'} ?`,
        `$\\bar{x} ${m.rel} ${m.txt}$`,
        [`$\\bar{x} ${naive.rel} ${naive.txt}$`, `$\\bar{x} ${fmtMean(n2 * m1 + n1 * m2, n1 + n2).rel} ${fmtMean(n2 * m1 + n1 * m2, n1 + n2).txt}$`, `$\\bar{x} = ${m1 + m2}$`],
        'La moyenne globale n\'est pas la moyenne des deux moyennes si les effectifs diffèrent.',
        'Calcule la somme totale des notes de chaque groupe.',
        `Somme totale : $${n1} \\times ${m1} + ${n2} \\times ${m2} = ${n1 * m1 + n2 * m2}$ pour ${n1 + n2} élèves, donc $\\bar{x} ${m.rel} ${m.txt}$.`
      );
    }
    if (kind === 1) {
      const n = this.randInt(5, 8);
      const vals = Array.from({ length: n }, () => this.randInt(2, 20));
      const S = vals.reduce((a, b) => a + b, 0);
      const k = this.randNonZero(-5, 5);
      const mult = Math.random() < 0.5;
      const c = mult ? this.randChoice([2, 3, 10]) : k;
      const m = fmtMean(S, n);
      const newM = mult ? fmtMean(S * c, n) : fmtMean(S + c * n, n);
      const transform = mult ? `on multiplie toutes les valeurs par ${c}` : `on ${c > 0 ? 'ajoute' : 'retranche'} ${Math.abs(c)} ${c > 0 ? 'à' : 'de'} toutes les valeurs`;
      return this.makeMcq('2S1', 4, 'Transformation d\'une série',
        'Effet d\'une transformation affine sur la moyenne et l\'étendue',
        `La série ${vals.join(' ; ')} a pour moyenne $${m.txt}$${m.exact ? '' : ' environ'} et pour étendue $${Math.max(...vals) - Math.min(...vals)}$. Si ${transform}, que deviennent la moyenne et l'étendue ?`,
        `Moyenne $${newM.rel === '=' ? '' : '\\approx '}${newM.txt}$, étendue $${(Math.max(...vals) - Math.min(...vals)) * (mult ? c : 1)}$`,
        [`Moyenne $${newM.rel === '=' ? '' : '\\approx '}${newM.txt}$, étendue $${(Math.max(...vals) - Math.min(...vals)) * (mult ? 1 : 1) + (mult ? 0 : c)}$`, `Moyenne $${m.rel === '=' ? '' : '\\approx '}${m.txt}$, étendue $${(Math.max(...vals) - Math.min(...vals)) * (mult ? c : 1)}$`, `Moyenne $${mult ? fmtMean(S + c * n, n).txt : fmtMean(S * 2, n).txt}$, étendue $${(Math.max(...vals) - Math.min(...vals)) * 2}$`],
        mult ? 'Multiplier toutes les valeurs par $k$ multiplie la moyenne et l\'étendue par $k$.' : 'Ajouter une constante à toutes les valeurs décale la moyenne mais ne change pas les écarts.',
        'L\'étendue est la différence entre la plus grande et la plus petite valeur.',
        mult
          ? `Toutes les valeurs sont multipliées par ${c} : la moyenne et l'étendue aussi. Nouvelle moyenne : $${c} \\times ${m.txt}${m.exact ? '' : '...'}$, soit ${newM.rel === '=' ? '' : 'environ '}$${newM.txt}$ ; nouvelle étendue : $${(Math.max(...vals) - Math.min(...vals)) * c}$.`
          : `Toutes les valeurs sont décalées de $${c}$ : la moyenne aussi (nouvelle moyenne ${newM.rel === '=' ? '' : 'environ '}$${newM.txt}$), mais les écarts entre valeurs, donc l'étendue, ne changent pas.`
      );
    }
    const q1 = this.randInt(6, 12);
    const q3 = q1 + this.randInt(3, 10);
    const mn = q1 - this.randInt(1, 5);
    const mx = q3 + this.randInt(1, 8);
    const askE = Math.random() < 0.5;
    const ans = askE ? `$${mx - mn}$` : `$${q3 - q1}$`;
    return this.makeMcq('2S1', 4, askE ? 'Étendue' : 'Écart interquartile',
      'Distinguer les indicateurs de dispersion',
      `Une série a pour minimum $${mn}$, premier quartile $Q_1 = ${q1}$, troisième quartile $Q_3 = ${q3}$ et maximum $${mx}$. ${askE ? 'Quelle est son étendue' : 'Quel est son écart interquartile'} ?`,
      ans,
      [`$${askE ? q3 - q1 : mx - mn}$`, `$${q3 + q1}$`, `$${mx - q1}$`, `$${q3 - mn}$`].filter((s) => s !== ans),
      askE ? 'L\'étendue est « maximum moins minimum ».' : 'L\'écart interquartile est $Q_3 - Q_1$.',
      askE ? 'Elle mesure la dispersion de toute la série.' : 'Il mesure la dispersion des 50 % de valeurs centrales.',
      askE ? `Étendue $= ${mx} - ${mn} = ${mx - mn}$.` : `$Q_3 - Q_1 = ${q3} - ${q1} = ${q3 - q1}$.`
    );
  },

  // =========================================================================
  // 2S2 : Probabilités
  // =========================================================================
  gen_2S2(tier) {
    const xq = this._lyX('2S2', tier, [2, 2, 2, 1][tier - 1]);
    if (xq) return xq;
    const P = (x) => this.dec(x / 100, 2);
    if (tier === 1) {
      if (Math.random() < 0.5) {
        const p = this.randInt(1, 99);
        if (p === 50) return this.gen_2S2(1);
        return this.makeMcq('2S2', 1, 'Événement contraire',
          'Appliquer $P(\\bar{A}) = 1 - P(A)$',
          `Soit $A$ un événement tel que $P(A) = ${P(p)}$. Calculer $P(\\bar{A})$.`,
          `$P(\\bar{A}) = ${P(100 - p)}$`,
          [`$P(\\bar{A}) = ${P(p)}$`, `$P(\\bar{A}) = -${P(p)}$`, `$P(\\bar{A}) = ${P(100 - p + 10 > 100 ? 100 - p - 10 : 100 - p + 10)}$`, `$P(\\bar{A}) = ${this.dec(1 / (p / 100), 2)}$`],
          'Un événement et son contraire ont des probabilités de somme 1.',
          `$P(\\bar{A}) = 1 - ${P(p)}$.`,
          `$P(\\bar{A}) = 1 - P(A) = 1 - ${P(p)} = ${P(100 - p)}$.`
        );
      }
      const r = this.randInt(1, 12);
      const b = this.randInt(1, 12);
      const v = this.randInt(0, 8);
      const tot = r + b + v;
      const col = this.randChoice(['rouge', 'bleue']);
      const k = col === 'rouge' ? r : b;
      return this.makeMcq('2S2', 1, 'Équiprobabilité',
        'Calculer une probabilité dans une situation d\'équiprobabilité',
        `Une urne contient ${r} boule${r > 1 ? 's' : ''} rouge${r > 1 ? 's' : ''}, ${b} boule${b > 1 ? 's' : ''} bleue${b > 1 ? 's' : ''}${v ? ` et ${v} boule${v > 1 ? 's' : ''} verte${v > 1 ? 's' : ''}` : ''}, indiscernables au toucher. On tire une boule au hasard. Quelle est la probabilité qu'elle soit ${col} ?`,
        `$${this.frac(k, tot)}$`,
        [`$${this.frac(k, tot - k || 1)}$`, `$${this.frac(tot - k, tot)}$`, `$${this.frac(1, tot)}$`, `$${this.frac(k + 1, tot + 1)}$`, `$${this.frac(k, tot + 1)}$`, `$${this.frac(k, 2 * tot)}$`].filter((o) => !/^\$-?\d+\$$/.test(o)),
        'En situation d\'équiprobabilité : $P(A) = \\frac{\\text{nombre d\'issues favorables}}{\\text{nombre total d\'issues}}$.',
        `Il y a ${tot} boules au total.`,
        `$P = \\frac{${k}}{${tot}}${this.frac(k, tot) === `\\frac{${k}}{${tot}}` ? '' : ` = ${this.frac(k, tot)}`}$.`.replace(`\\frac{${k}}{${tot}} = `, this.frac(k, tot) === `\\frac{${k}}{${tot}}` ? `\\frac{${k}}{${tot}}` : `${k} \\div ${tot} = `)
      );
    }
    if (tier === 2) {
      const pa = this.randInt(10, 70);
      const pb = this.randInt(10, 70);
      const pab = this.randInt(1, Math.min(pa, pb) - 1);
      if (pa + pb - pab > 100) return this.gen_2S2(2);
      const pu = pa + pb - pab;
      if (Math.random() < 0.5) {
        return this.makeMcq('2S2', 2, 'Probabilité d\'une réunion',
          'Calculer $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$',
          `On donne $P(A) = ${P(pa)}$, $P(B) = ${P(pb)}$ et $P(A \\cap B) = ${P(pab)}$. Calculer $P(A \\cup B)$.`,
          `$P(A \\cup B) = ${P(pu)}$`,
          [`$P(A \\cup B) = ${P(pa + pb)}$`, `$P(A \\cup B) = ${P(pa + pb + pab)}$`, `$P(A \\cup B) = ${P(Math.abs(pa - pb) + pab)}$`, `$P(A \\cup B) = ${P(pab)}$`].filter((s) => !s.includes('= 1{,}') && !/= [2-9]/.test(s)),
          'Formule : $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.',
          'On retire l\'intersection pour ne pas la compter deux fois.',
          `$P(A \\cup B) = ${P(pa)} + ${P(pb)} - ${P(pab)} = ${P(pu)}$.`
        );
      }
      return this.makeMcq('2S2', 2, 'Probabilité d\'une intersection',
        'Utiliser la formule de la réunion pour trouver $P(A \\cap B)$',
        `On donne $P(A) = ${P(pa)}$, $P(B) = ${P(pb)}$ et $P(A \\cup B) = ${P(pu)}$. Calculer $P(A \\cap B)$.`,
        `$P(A \\cap B) = ${P(pab)}$`,
        [`$P(A \\cap B) = ${P(pa + pb + pu > 100 ? Math.abs(pu - pa) : pa + pb - pu + 5)}$`, `$P(A \\cap B) = ${P(Math.round(pa * pb / 100))}$`, `$P(A \\cap B) = ${P(Math.abs(pu - pb) === pab ? pab + 3 : Math.abs(pu - pb))}$`, `$P(A \\cap B) = ${P(pab + 10)}$`],
        'Écris $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$ et isole $P(A \\cap B)$.',
        '$P(A \\cap B) = P(A) + P(B) - P(A \\cup B)$.',
        `$P(A \\cap B) = ${P(pa)} + ${P(pb)} - ${P(pu)} = ${P(pab)}$.`
      );
    }
    if (tier === 3) {
      const n = this.randChoice([6, 8, 10, 12, 20]);
      const m = this.randChoice([2, 3, 4, 5]);
      const k = this.randInt(2, n - 1);
      const A = [];
      const B = [];
      for (let i = 1; i <= n; i++) { if (i % m === 0) A.push(i); if (i >= k) B.push(i); }
      const inter = A.filter((x) => B.includes(x)).length;
      const union = A.length + B.length - inter;
      const ask = this.randInt(0, 1);
      const num = ask ? union : inter;
      const lab = ask ? 'A \\cup B' : 'A \\cap B';
      return this.makeMcq('2S2', 3, ask ? 'Réunion d\'événements' : 'Intersection d\'événements',
        'Décrire des événements par leurs issues et dénombrer',
        `On lance un dé équilibré à ${n} faces numérotées de 1 à ${n}. On note $A$ : « obtenir un multiple de ${m} » et $B$ : « obtenir un nombre supérieur ou égal à ${k} ». Calculer $P(${lab})$.`,
        `$P(${lab}) = ${this.frac(num, n)}$`,
        [`$P(${lab}) = ${this.frac(ask ? A.length + B.length : inter + 1, n)}$`, `$P(${lab}) = ${this.frac(ask ? inter : union, n)}$`, `$P(${lab}) = ${this.frac(A.length * B.length, n * n)}$`, `$P(${lab}) = ${this.frac(num + 1, n)}$`, `$P(${lab}) = ${this.frac(A.length, n)}$`, `$P(${lab}) = ${this.frac(B.length, n)}$`, `$P(${lab}) = ${this.frac(Math.max(num - 1, 1), n)}$`],
        'Écris la liste des issues de $A$, de $B$, puis de l\'événement demandé.',
        `$A = \\{${A.join(' ; ')}\\}$ et $B = \\{${B.join(' ; ')}\\}$.`,
        `$${lab} = \\{${(ask ? [...new Set([...A, ...B])].sort((x, y) => x - y) : A.filter((x) => B.includes(x))).join(' ; ')}\\}$ contient ${num} issue${num > 1 ? 's' : ''} sur ${n} équiprobables, donc $P(${lab}) = ${this.frac(num, n)}$.`.replace('\\{\\}', '\\emptyset')
      );
    }
    // tier 4 : deux tirages
    const r = this.randInt(2, 7);
    const b = this.randInt(2, 7);
    const T = r + b;
    const remise = Math.random() < 0.5;
    const ask = this.randInt(0, 2);
    let num;
    let den;
    let lab;
    let sol;
    if (remise) {
      den = T * T;
      if (ask === 0) { num = r * r; lab = 'obtenir deux boules rouges'; sol = `$\\frac{${r}}{${T}} \\times \\frac{${r}}{${T}}$`; }
      else if (ask === 1) { num = r * r + b * b; lab = 'obtenir deux boules de la même couleur'; sol = `$\\frac{${r}}{${T}} \\times \\frac{${r}}{${T}} + \\frac{${b}}{${T}} \\times \\frac{${b}}{${T}}$`; }
      else { num = 2 * r * b; lab = 'obtenir exactement une boule rouge'; sol = `$\\frac{${r}}{${T}} \\times \\frac{${b}}{${T}} + \\frac{${b}}{${T}} \\times \\frac{${r}}{${T}}$`; }
    } else {
      den = T * (T - 1);
      if (ask === 0) { num = r * (r - 1); lab = 'obtenir deux boules rouges'; sol = `$\\frac{${r}}{${T}} \\times \\frac{${r - 1}}{${T - 1}}$`; }
      else if (ask === 1) { num = r * (r - 1) + b * (b - 1); lab = 'obtenir deux boules de la même couleur'; sol = `$\\frac{${r}}{${T}} \\times \\frac{${r - 1}}{${T - 1}} + \\frac{${b}}{${T}} \\times \\frac{${b - 1}}{${T - 1}}$`; }
      else { num = 2 * r * b; lab = 'obtenir exactement une boule rouge'; sol = `$\\frac{${r}}{${T}} \\times \\frac{${b}}{${T - 1}} + \\frac{${b}}{${T}} \\times \\frac{${r}}{${T - 1}}$`; }
    }
    sol = sol.replace(/\\frac\{(\d+)\}\{(\d+)\}/g, (m0, x, y) => this.frac(+x, +y));
    const altDen = remise ? T * (T - 1) : T * T;
    const altNum = remise ? (ask === 0 ? r * (r - 1) : ask === 1 ? r * (r - 1) + b * (b - 1) : 2 * r * b) : (ask === 0 ? r * r : ask === 1 ? r * r + b * b : 2 * r * b);
    return this.makeMcq('2S2', 4, 'Arbre à deux épreuves',
      'Calculer une probabilité avec un arbre (tirages successifs)',
      `Une urne contient ${r} boules rouges et ${b} boules bleues. On tire successivement deux boules ${remise ? 'avec remise' : 'sans remise'}. Quelle est la probabilité d'${lab} ?`,
      `$${this.frac(num, den)}$`,
      [`$${this.frac(altNum, altDen)}$`, `$${this.frac(ask === 2 ? r * b : num + T, den)}$`, `$${this.frac(ask === 0 ? 2 * r : ask === 1 ? r + b - 1 : r, T)}$`, `$${this.frac(den - num, den)}$`, `$${this.frac(num, den + T)}$`, `$${this.frac(r, T)}$`, `$${this.frac(num + 1, den)}$`].filter((o) => !/^\$-?\d+\$$/.test(o)),
      'Sur un chemin de l\'arbre, on multiplie les probabilités ; on additionne les chemins menant à l\'événement.',
      remise ? 'Avec remise, la composition de l\'urne ne change pas au second tirage.' : 'Sans remise, il reste une boule de moins au second tirage.',
      `$P = ${sol.replace(/^\$|\$$/g, '')} = ${this.frac(num, den)}$.`
    );
  },

  // =========================================================================
  // 2S3 : Échantillonnage et fluctuation
  // =========================================================================
  gen_2S3(tier) {
    // Programme 2026 : simulation, fréquence observée, loi des grands nombres (version vulgarisée) ;
    // l'intervalle de fluctuation [p - 1/√n ; p + 1/√n] n'est plus au programme de seconde.
    const T = '2S3';
    const P = (lines) => this._2S4_py(lines);
    const D = (x, k = 4) => this.dec(x, k);
    if (tier === 1) {
      const kind = this.randInt(0, 2);
      if (kind === 0) {
        const n = this.randChoice([20, 25, 40, 50, 80, 100, 200, 250, 500]);
        const k = this.randInt(1, n - 1);
        const ctx = this.randChoice([['une pièce', '« Pile »'], ['un dé à six faces', 'un « 6 »'], ['une punaise', '« pointe en haut »'], ['un dé à quatre faces', 'un « 1 »']]);
        return this.makeExact(T, 1, 'Fréquence observée',
          'Calculer une fréquence observée sur un échantillon',
          `On lance $${n}$ fois ${ctx[0]} et on obtient $${k}$ fois ${ctx[1]}. Quelle est la fréquence observée de ${ctx[1]} ?`,
          this._xd(k / n),
          'La fréquence observée est le quotient de l\'effectif par le nombre total de lancers.',
          `Calcule $${k} \\div ${n}$ et donne le résultat sous forme décimale.`,
          `$f = ${k} \\div ${n} = ${D(k / n)}$.`,
          { instruction: 'Saisir un nombre décimal, par exemple 0,34.' });
      }
      if (kind === 1) {
        const n = this.randChoice([50, 100, 200, 400, 500, 1000]);
        const k = this.randInt(1, n - 1);
        const f = k / n;
        return this.makeExact(T, 1, 'Effectif à partir d\'une fréquence',
          'Relier fréquence observée et effectif',
          `Sur un échantillon de $${n}$ tirages, la fréquence observée de succès est $f = ${D(f)}$. Combien de succès a-t-on obtenus ?`,
          String(k),
          '$f = \\dfrac{\\text{nombre de succès}}{\\text{nombre de tirages}}$.',
          `Multiplie la fréquence par $${n}$.`,
          `Nombre de succès $= f \\times n = ${D(f)} \\times ${n} = ${k}$.`,
          { instruction: 'Saisir un nombre entier.' });
      }
      const a = this.randInt(0, 5);
      const b = a + this.randInt(3, 19);
      const ask = this.randInt(0, 1);
      return this.makeExact(T, 1, 'La fonction randint',
        'Comprendre l\'instruction randint de Python',
        `En Python, après \`from random import randint\`, l'instruction \`randint(${a}, ${b})\` renvoie un entier choisi au hasard (de façon équiprobable) entre ${a} et ${b}, bornes comprises. ${ask === 0 ? 'Combien de valeurs différentes peut-elle renvoyer ?' : `Quelle est la probabilité qu'elle renvoie ${b} ?`}`,
        ask === 0 ? String(b - a + 1) : `1/${b - a + 1}`,
        `Les deux bornes ${a} et ${b} sont des valeurs possibles.`,
        ask === 0 ? `Compte les entiers de ${a} à ${b}.` : 'Les valeurs possibles sont équiprobables.',
        `Les valeurs possibles sont les entiers de ${a} à ${b} : il y en a $${b} - ${a} + 1 = ${b - a + 1}$.${ask === 1 ? ` Elles sont équiprobables, donc la probabilité d'obtenir ${b} est $\\dfrac{1}{${b - a + 1}}$.` : ''}`,
        { instruction: ask === 0 ? 'Saisir un nombre entier.' : 'Saisir une fraction, par exemple 1/8.' });
    }
    if (tier === 2) {
      const kind = this.randInt(0, 2);
      if (kind <= 1) {
        const faces = this.randChoice([4, 6, 8, 10, 12, 20]);
        const n = this.randChoice([1000, 10000, 100000]);
        const cond = this.randInt(0, 3);
        const k = this.randInt(2, faces - 1);
        let test; let fav; let desc;
        if (cond === 0) { test = `randint(1, ${faces}) <= ${k}`; fav = k; desc = `un résultat inférieur ou égal à ${k}`; }
        else if (cond === 1) { test = `randint(1, ${faces}) >= ${k}`; fav = faces - k + 1; desc = `un résultat supérieur ou égal à ${k}`; }
        else if (cond === 2) { test = `randint(1, ${faces}) % 2 == 0`; fav = faces / 2; desc = 'un résultat pair'; }
        else { test = `randint(1, ${faces}) == ${k}`; fav = 1; desc = `le résultat ${k}`; }
        if (kind === 1) {
          return this.makeMcq(T, 2, 'Lire un programme de simulation',
            'Comprendre et analyser un script Python de simulation',
            `On considère le programme Python suivant :${P(['from random import randint', 'c = 0', `for i in range(${n}):`, `    if ${test}:`, '        c = c + 1', `print(c / ${n})`])}Que représente le nombre affiché ?`,
            `La fréquence de ${desc} sur ${n} lancers simulés d'un dé à ${faces} faces`,
            [`Le nombre de fois où l'on a obtenu ${desc} sur ${n} lancers`, `La probabilité exacte d'obtenir ${desc}`, `Le nombre de lancers nécessaires pour obtenir ${desc}`],
            '`c` compte les répétitions où la condition du `if` est vraie.',
            `Le programme divise ce compteur par ${n} avant de l'afficher.`,
            `La boucle simule ${n} lancers d'un dé équilibré à ${faces} faces ; \`c\` compte les lancers donnant ${desc}. Le programme affiche \`c / ${n}\` : c'est une fréquence observée, qui varie d'une exécution à l'autre (ce n'est pas la probabilité exacte, dont elle se rapproche quand le nombre de lancers est grand).`
          );
        }
        return this.makeExact(T, 2, 'Probabilité estimée par une simulation',
          'Interpréter une simulation à l\'aide de la loi des grands nombres',
          `On exécute le programme Python suivant :${P(['from random import randint', 'c = 0', `for i in range(${n}):`, `    if ${test}:`, '        c = c + 1', `print(c / ${n})`])}D'après la loi des grands nombres, de quelle valeur exacte le nombre affiché est-il proche ?`,
          this._xf(fav, faces),
          `\`randint(1, ${faces})\` simule le lancer d'un dé équilibré à ${faces} faces.`,
          `Compte les faces qui rendent la condition vraie : ${desc}.`,
          `La condition est vraie pour ${fav} face${fav > 1 ? 's' : ''} sur ${faces} équiprobables : sa probabilité vaut $${this.frac(fav, faces)}$. Pour ${n} répétitions, la fréquence affichée est, sauf exception, proche de $${this.frac(fav, faces)}$.`,
          { instruction: 'Saisir une fraction irréductible, par exemple 3/8.' });
      }
      const n = this.randChoice([50, 100, 200]);
      const fs = Array.from({ length: 5 }, () => this.randInt(Math.round(0.2 * n), Math.round(0.8 * n)));
      const tot = fs.reduce((s, x) => s + x, 0);
      return this.makeExact(T, 2, 'Regrouper des échantillons',
        'Calculer une fréquence observée sur plusieurs échantillons',
        `Cinq élèves simulent chacun $${n}$ lancers d'une pièce truquée et obtiennent respectivement $${fs.join('$, $')}$ fois « Pile ». Quelle est la fréquence de « Pile » observée sur l'ensemble des $${5 * n}$ lancers ?`,
        this._xd(tot / (5 * n)),
        'Regroupe les cinq échantillons en un seul.',
        `Additionne les nombres de « Pile » et divise par $${5 * n}$.`,
        `Nombre total de « Pile » : $${fs.join(' + ')} = ${tot}$. Fréquence : $\\dfrac{${tot}}{${5 * n}} = ${D(tot / (5 * n))}$. Sur un échantillon plus grand, la fréquence observée fluctue en général moins.`,
        { instruction: 'Saisir un nombre décimal, par exemple 0,415.' });
    }
    if (tier === 3) {
      const kind = this.randInt(0, 2);
      if (kind === 0) {
        const s = this.randInt(2, 12);
        let fav = 0;
        for (let i = 1; i <= 6; i++) for (let j = 1; j <= 6; j++) if (i + j === s) fav++;
        const n = this.randChoice([10000, 100000]);
        return this.makeExact(T, 3, 'Somme de deux dés simulée',
          'Simuler une expérience à deux épreuves et interpréter la fréquence',
          `On exécute le programme suivant :${P(['from random import randint', 'c = 0', `for i in range(${n}):`, '    s = randint(1, 6) + randint(1, 6)', `    if s == ${s}:`, '        c = c + 1', `print(c / ${n})`])}De quelle valeur exacte le nombre affiché est-il proche ?`,
          this._xf(fav, 36),
          'Le programme simule le lancer de deux dés équilibrés et la somme des résultats.',
          `Dans un tableau à double entrée $6 \\times 6$, compte les cases de somme ${s}.`,
          `Il y a $36$ couples équiprobables ; ${fav} donnent la somme ${s}. La probabilité vaut $${this.frac(fav, 36)}$ et, d'après la loi des grands nombres, la fréquence affichée en est proche.`,
          { instruction: 'Saisir une fraction irréductible, par exemple 1/12.' });
      }
      if (kind === 1) {
        const n = this.randChoice([50, 100, 200, 500]);
        const p = this.randInt(2, 8) / 10;
        let k = Math.round(n * p) + this.randNonZero(-Math.round(n / 10), Math.round(n / 10));
        k = Math.max(1, Math.min(n - 1, k));
        const f = k / n;
        return this.makeExact(T, 3, 'Écart entre fréquence et probabilité',
          'Mesurer l\'écart entre une fréquence observée et une probabilité',
          `On simule $${n}$ fois une expérience dont la probabilité de succès est $p = ${D(p)}$ et on obtient $${k}$ succès. Calculer l'écart $|f - p|$ entre la fréquence observée $f$ et $p$.`,
          this._xd(Math.abs(f - p)),
          `Calcule d'abord $f = ${k} \\div ${n}$.`,
          'L\'écart est la distance entre les deux nombres : il est positif.',
          `$f = ${k} \\div ${n} = ${D(f)}$, donc $|f - p| = |${D(f)} - ${D(p)}| = ${D(Math.abs(f - p))}$.`,
          { instruction: 'Saisir un nombre décimal, par exemple 0,03.' });
      }
      const p = this.randChoice([0.25, 0.3, 0.4, 0.5, 0.6, 0.7]);
      const sizes = [10, 100, 1000, 10000];
      const fr = sizes.map((s, i) => {
        const spread = [0.2, 0.06, 0.02, 0.005][i];
        let f = Math.round((p + (Math.random() < 0.5 ? -1 : 1) * spread * (0.6 + 0.4 * Math.random())) * s) / s;
        if (Math.abs(f - p) < 1e-9) f = p + 1 / s;
        return f;
      });
      const order = this.shuffleArray([0, 1, 2, 3]);
      return this.makeMcq(T, 3, 'Loi des grands nombres',
        'Interpréter la variabilité d\'un échantillon selon sa taille',
        `Une expérience a une probabilité de succès inconnue $p$. Quatre simulations donnent : ${order.map((i) => `échantillon de taille $${sizes[i] === 10000 ? '10\\,000' : sizes[i]}$ : $f = ${D(fr[i])}$`).join(' ; ')}. Quelle est la meilleure estimation de $p$ ?`,
        `$${D(fr[3])}$, obtenue sur l'échantillon de taille $10\\,000$`,
        [`$${D(fr[0])}$, obtenue sur l'échantillon de taille $10$`, `$${D((fr[0] + fr[1] + fr[2] + fr[3]) / 4)}$, moyenne simple des quatre fréquences`, `$${D(fr[1])}$, obtenue sur l'échantillon de taille $100$`],
        'Plus l\'échantillon est grand, plus la fréquence observée est, en général, proche de la probabilité.',
        'Une moyenne simple donnerait le même poids à un échantillon de 10 et à un échantillon de 10 000.',
        `D'après la loi des grands nombres, lorsque $n$ est grand, sauf exception, la fréquence observée est proche de la probabilité. L'échantillon de taille $10\\,000$ fournit donc la meilleure estimation : $p \\approx ${D(fr[3])}$.`
      );
    }
    // tier 4
    const kind = this.randInt(0, 2);
    if (kind === 0) {
      const n = this.randChoice([100, 400]);
      const p = this.randChoice([0.3, 0.4, 0.5, 0.6]);
      const e = n === 100 ? 0.1 : 0.05;
      const fs = Array.from({ length: 12 }, () => Math.round((p + (Math.random() * 2 - 1) * e * 1.6) * n) / n);
      const inside = fs.filter((f) => Math.abs(f - p) <= e + 1e-9).length;
      if (fs.some((f) => Math.abs(Math.abs(f - p) - e) < 1e-9)) return this.gen_2S3(4);
      return this.makeExact(T, 4, 'Fluctuation d\'échantillonnage',
        'Observer la fluctuation des fréquences d\'un échantillon à l\'autre',
        `On simule 12 échantillons de taille $${n}$ d'une expérience de probabilité de succès $p = ${D(p)}$. Les fréquences observées sont : $${fs.map((f) => D(f)).join('$ ; $')}$. Combien de ces fréquences sont à une distance au plus $${D(e)}$ de $p$ ?`,
        String(inside),
        `Une fréquence $f$ convient si $|f - ${D(p)}| \\le ${D(e)}$.`,
        `Autrement dit, si $f$ appartient à $[${D(p - e)} ; ${D(p + e)}]$.`,
        `On garde les fréquences de $[${D(p - e)} ; ${D(p + e)}]$ : il y en a $${inside}$ sur $12$. Les autres illustrent la fluctuation d'échantillonnage : un échantillon peut s'écarter nettement de $p$.`,
        { instruction: 'Saisir un nombre entier.' });
    }
    if (kind === 1) {
      const n = this.randChoice([20, 50, 100, 200]);
      const N = this.randChoice([10, 30, 50, 100]);
      const p = this.randInt(1, 9) / 10;
      const ask = this.randInt(0, 1);
      return this.makeExact(T, 4, 'Programme simulant des échantillons',
        'Analyser un programme qui simule plusieurs échantillons',
        `On considère le programme suivant :${P(['from random import random', '', 'def frequence(n):', '    c = 0', '    for i in range(n):', `        if random() < ${String(p)}:`, '            c = c + 1', '    return c / n', '', `L = [frequence(${n}) for k in range(${N})]`])}${ask === 0 ? 'Combien d\'éléments contient la liste `L` ?' : 'Combien de fois la fonction `random()` est-elle appelée au total ?'}`,
        String(ask === 0 ? N : n * N),
        '`frequence(n)` simule un échantillon de taille `n` et renvoie la fréquence de succès.',
        ask === 0 ? 'La liste est construite en compréhension : un élément par valeur de `k`.' : `Chaque appel de \`frequence(${n})\` appelle \`random()\` ${n} fois.`,
        ask === 0 ? `\`k\` parcourt \`range(${N})\`, soit ${N} valeurs : \`L\` contient ${N} fréquences, une par échantillon de taille ${n}.` : `\`frequence(${n})\` est appelée ${N} fois et effectue chaque fois ${n} tirages : au total $${N} \\times ${n} = ${n * N}$ appels à \`random()\`.`,
        { instruction: 'Saisir un nombre entier.' });
    }
    const n1 = this.randChoice([10, 20, 25]);
    const n2 = this.randChoice([1000, 2500, 10000]);
    return this.makeMcq(T, 4, 'Taille de l\'échantillon et fluctuation',
      'Interpréter la variabilité d\'un échantillon à l\'aide de la loi des grands nombres',
      `On simule de nombreux échantillons de taille $${n1}$, puis de nombreux échantillons de taille $${n2}$, d'une même expérience de probabilité de succès $p$. Quelle affirmation est correcte ?`,
      `Les fréquences des échantillons de taille $${n2}$ sont en général plus proches de $p$ que celles des échantillons de taille $${n1}$`,
      [`Les fréquences des échantillons de taille $${n2}$ sont toutes égales à $p$`, `Les fréquences des échantillons de taille $${n1}$ sont en général plus proches de $p$`, 'La taille de l\'échantillon n\'a aucune influence sur la fluctuation'],
      'Pense à la loi des grands nombres.',
      'La fluctuation diminue quand la taille de l\'échantillon augmente, mais ne disparaît pas.',
      `D'après la loi des grands nombres, lorsque $n$ est grand, sauf exception, la fréquence observée est proche de $p$. Les échantillons de taille $${n2}$ fluctuent donc beaucoup moins que ceux de taille $${n1}$, sans que leurs fréquences soient pour autant exactement égales à $p$.`
    );
  },

  // =========================================================================
  // 2N5 : Proportions, pourcentages et évolutions
  // =========================================================================
  /** Pourcentage en LaTeX (sans $) : 12.5 -> "12{,}5\\,\\%" */
  _2N5_pct(x, d = 2) {
    return `${this.dec(x, d)}\\,\\%`;
  },

  /** Évolution en toutes lettres : 12 -> « Une hausse de $12\,\%$ », -4 -> « Une baisse de $4\,\%$ » */
  _2N5_evo(x, d = 2) {
    const r = Math.round(x * 10 ** d) / 10 ** d;
    if (r === 0) return 'Aucune évolution';
    return r > 0 ? `Une hausse de $${this._2N5_pct(r, d)}$` : `Une baisse de $${this._2N5_pct(-r, d)}$`;
  },

  /** Verbe d'évolution : « augmente de $12\,\%$ » / « diminue de $8\,\%$ » */
  _2N5_verb(t) {
    return t > 0 ? `augmente de $${this._2N5_pct(t)}$` : `diminue de $${this._2N5_pct(-t)}$`;
  },

  /** Taux entier t (en %) non nul tel que v × t / 100 soit entier */
  _2N5_rate(v, lo, hi) {
    let t = 0;
    let guard = 0;
    while ((t === 0 || (v * t) % 100 !== 0) && guard < 500) { t = this.randInt(lo, hi); guard++; }
    return t === 0 || (v * t) % 100 !== 0 ? (lo < 0 ? -50 : 50) : t;
  },

  /** Nombre (≤ 2 décimales) avec espace fine des milliers : 12500 -> "12\\,500", 1234.5 -> "1\\,234{,}5" */
  _2N5_int(x) {
    const [i, d] = this.dec(x, 2).split('{,}');
    const g = i.replace(/\B(?=(\d{3})+(?!\d))/g, '\\,');
    return d ? `${g}{,}${d}` : g;
  },

  gen_2N5(tier) {
    const T = '2N5';
    const I = (n) => this._2N5_int(n);
    const D = (x) => this.dec(x, 2);
    const P = (x, d) => this._2N5_pct(x, d);
    const EV = (x, d) => this._2N5_evo(x, d);
    const TX = 'Saisir le taux en pourcentage, sans le symbole %, précédé du signe « - » pour une baisse (par exemple -12,5).';
    const PC = 'Saisir le pourcentage sans le symbole % (par exemple 12,5).';
    const R2 = (x) => this._xd(Math.round(x * 100) / 100, 2);
    const things = ['Le prix d\'un vélo', 'Le loyer d\'un appartement', 'Le nombre d\'abonnés d\'un club', 'La production d\'une usine',
      'La consommation d\'eau d\'une famille', 'Le prix d\'un abonnement', 'Le nombre de visiteurs d\'un musée', 'Le chiffre d\'affaires d\'une boutique'];
    if (tier === 1) {
      const kind = this.randInt(0, 2);
      if (kind === 0) {
        const up = Math.random() < 0.5;
        const t = up ? this.randInt(1, 120) : this.randInt(1, 95);
        const s = up ? t : -t;
        const cm = 1 + s / 100;
        const what = this.randChoice(things);
        return this.makeMcq(T, 1, 'Coefficient multiplicateur',
          'Associer un taux d\'évolution à son coefficient multiplicateur',
          `${what} ${this._2N5_verb(s)}. Par quel nombre cette grandeur est-elle multipliée ?`,
          `$${this.dec(cm)}$`,
          [`$${this.dec(t / 100)}$`, `$${this.dec(1 - s / 100)}$`, `$${this.dec(1 + s / 1000)}$`, `$${this.dec(t)}$`],
          up ? 'Augmenter de $t\\,\\%$ revient à multiplier par $1 + \\frac{t}{100}$.' : 'Diminuer de $t\\,\\%$ revient à multiplier par $1 - \\frac{t}{100}$.',
          `Le taux d'évolution est $t = ${this.dec(s / 100)}$.`,
          `Le taux d'évolution vaut $t = ${this.dec(s / 100)}$, donc le coefficient multiplicateur est $CM = 1 + t = 1 ${up ? '+' : '-'} ${this.dec(t / 100)} = ${this.dec(cm)}$.`
        );
      }
      if (kind === 1) {
        let s = 0;
        while (s === 0) s = this.randInt(-90, 160);
        const cm = 1 + s / 100;
        const what = this.randChoice(things);
        return this._xa([String(s), TX], T, 1, 'Taux à partir du coefficient',
          'Retrouver le taux d\'évolution à partir du coefficient multiplicateur',
          `On a multiplié ${what.charAt(0).toLowerCase() + what.slice(1)} par $${this.dec(cm)}$. Quelle évolution cette grandeur a-t-elle subie ?`,
          EV(s),
          [EV(-s), EV(100 * cm), EV(-100 * cm), EV(s > 0 ? -(100 - s) : 100 + s)],
          'Le coefficient multiplicateur vaut $CM = 1 + t$.',
          `Calcule $t = CM - 1 = ${this.dec(cm)} - 1$.`,
          `$t = CM - 1 = ${this.dec(cm)} - 1 = ${this.dec(s / 100)}$, soit ${s > 0 ? 'une hausse' : 'une baisse'} de $${P(Math.abs(s))}$.`
        );
      }
      const N = this.randChoice([200, 250, 400, 500, 600, 800, 1000, 1200, 1250, 1500, 2000, 2500]);
      let k = this.randInt(2, 95);
      while ((k * N) % 100 !== 0) k = this.randInt(2, 95);
      const nA = (k * N) / 100;
      const ctx = this.randChoice([
        ['élèves d\'un lycée', 'sont internes'], ['adhérents d\'une association sportive', 'pratiquent la natation'],
        ['salariés d\'une entreprise', 'travaillent à temps partiel'], ['spectateurs d\'un festival', 'ont moins de 25 ans'],
        ['habitants d\'un village', 'utilisent les transports en commun']]);
      if (Math.random() < 0.5) {
        return this._xa([String(k), PC], T, 1, 'Calcul d\'une proportion',
          'Calculer la proportion d\'une sous-population',
          `Parmi les $${I(N)}$ ${ctx[0]}, $${I(nA)}$ ${ctx[1]}. Quelle est la proportion, en pourcentage, de ceux qui ${ctx[1]} ?`,
          `$${P(k)}$`,
          [`$${P(100 - k)}$`, `$${P(N / nA, 2)}$`, `$${P(nA / 10)}$`, `$${P(k / 10)}$`],
          'La proportion est $p = \\frac{n_A}{n_E}$.',
          `Divise $${I(nA)}$ par $${I(N)}$, puis multiplie par $100$.`,
          `$p = ${I(nA)} \\div ${I(N)} = ${this.dec(k / 100)}$, soit $${P(k)}$.`
        );
      }
      return this.makeMcq(T, 1, 'Effectif à partir d\'une proportion',
        'Calculer un effectif connaissant une proportion',
        `Parmi les $${I(N)}$ ${ctx[0]}, $${P(k)}$ ${ctx[1]}. Combien sont-ils ?`,
        `$${D(nA)}$`,
        [`$${D(N - nA)}$`, `$${D(N / k)}$`, `$${D(N + nA)}$`, `$${D(k * N / 1000)}$`],
        'L\'effectif est $n_A = p \\times n_E$.',
        `Calcule $${this.dec(k / 100)} \\times ${I(N)}$.`,
        `$n_A = ${this.dec(k / 100)} \\times ${I(N)} = ${I(nA)}$.`
      );
    }
    if (tier === 2) {
      const kind = this.randInt(0, 2);
      const VD = this.randChoice([20, 25, 40, 50, 60, 80, 120, 150, 160, 200, 240, 250, 300, 400, 500, 800, 1200, 2000]);
      const t = this._2N5_rate(VD, -60, 80);
      const VA = (VD * (100 + t)) / 100;
      const what = this.randChoice(things);
      if (kind === 0) {
        const sg = (x) => (x > 0 ? '+' : '-') + P(Math.abs(x));
        return this._xa([String(t), TX], T, 2, 'Taux d\'évolution',
          'Calculer un taux d\'évolution entre deux valeurs',
          `${what} passe de $${I(VD)}$ à $${I(VA)}$. Quel est le taux d'évolution ?`,
          `$${sg(t)}$`,
          [`$${sg(-t)}$`, `$${sg(Math.round(((VA - VD) / VA) * 10000) / 100)}$`, `$${sg(VA - VD)}$`, `$${sg(100 + t)}$`],
          'Le taux d\'évolution est $t = \\frac{V_A - V_D}{V_D}$.',
          `Ici $V_D = ${I(VD)}$ et $V_A - V_D = ${I(VA - VD)}$.`,
          `$t = \\frac{${I(VA)} - ${I(VD)}}{${I(VD)}} = \\frac{${I(VA - VD)}}{${I(VD)}} = ${this.dec(t / 100)}$, soit $${sg(t)}$ : ${t > 0 ? 'une hausse' : 'une baisse'} de $${P(Math.abs(t))}$.`
        );
      }
      if (kind === 1) {
        return this.makeMcq(T, 2, 'Valeur après évolution',
          'Appliquer un taux d\'évolution à une valeur',
          `${what} valait $${I(VD)}$, puis ${this._2N5_verb(t).replace('augmente', 'a augmenté').replace('diminue', 'a diminué')}. Quelle est sa nouvelle valeur ?`,
          `$${D(VA)}$`,
          [`$${D(VD + t)}$`, `$${D((VD * Math.abs(t)) / 100)}$`, `$${D((VD * (100 - t)) / 100)}$`, `$${D(VD * (1 + t / 10))}$`],
          'On multiplie la valeur de départ par le coefficient $CM = 1 + t$.',
          `$CM = ${this.dec(1 + t / 100)}$.`,
          `$V_A = ${I(VD)} \\times ${this.dec(1 + t / 100)} = ${I(VA)}$.`
        );
      }
      return this.makeMcq(T, 2, 'Valeur avant évolution',
        'Retrouver une valeur initiale en divisant par le coefficient multiplicateur',
        `Après avoir ${t > 0 ? 'augmenté' : 'diminué'} de $${P(Math.abs(t))}$, ${what.charAt(0).toLowerCase() + what.slice(1)} vaut $${I(VA)}$. Quelle était sa valeur initiale ?`,
        `$${D(VD)}$`,
        [`$${D((VA * (100 - t)) / 100)}$`, `$${D((VA * (100 + t)) / 100)}$`, `$${D(VA - t)}$`, `$${D(VA + t)}$`],
        'On a $V_A = V_D \\times CM$, donc $V_D = \\frac{V_A}{CM}$.',
        `$CM = ${this.dec(1 + t / 100)}$ : divise $${I(VA)}$ par ce coefficient.`,
        `$V_D = \\frac{${I(VA)}}{${this.dec(1 + t / 100)}} = ${I(VD)}$. Appliquer le taux opposé ($${I(VA)} \\times ${this.dec(1 - t / 100)}$) serait une erreur.`
      );
    }
    if (tier === 3) {
      if (Math.random() < 0.55) {
        let t1 = 0; let t2 = 0;
        while (t1 === 0 || t2 === 0 || (100 + t1) * (100 + t2) === 10000) {
          t1 = this.randInt(-12, 16) * 5;
          t2 = this.randInt(-12, 16) * 5;
          if (Math.random() < 0.4) t2 = this.randInt(-40, 60);
        }
        const tg = ((100 + t1) * (100 + t2) - 10000) / 100;
        const what = this.randChoice(things);
        const cm1 = this.dec(1 + t1 / 100); const cm2 = this.dec(1 + t2 / 100);
        return this._xa([R2(tg), TX], T, 3, 'Évolutions successives',
          'Calculer le taux global de deux évolutions successives',
          `${what} ${this._2N5_verb(t1)} une première année, puis ${this._2N5_verb(t2)} l'année suivante. Quelle est l'évolution globale sur les deux années ?`,
          EV(tg),
          [EV(t1 + t2), EV(-tg), EV(t1 + t2 - (t1 * t2) / 100), EV(t1 * t2 / 100)],
          'On multiplie les coefficients multiplicateurs (les pourcentages ne s\'additionnent pas).',
          `$CM_1 = ${cm1}$ et $CM_2 = ${cm2}$.`,
          `$CM = ${cm1} \\times ${cm2} = ${this.dec(1 + tg / 100, 6)}$, donc $t = CM - 1 = ${this.dec(tg / 100, 6)}$ : ${tg > 0 ? 'une hausse' : 'une baisse'} globale de $${P(Math.abs(tg))}$.`
        );
      }
      const p1 = this.randInt(2, 19) * 5;
      const p2 = this.randInt(1, 19) * 5;
      const ctx = this.randChoice([
        ['des élèves d\'un lycée sont en filière générale', 'd\'entre eux suivent la spécialité physique-chimie', 'élèves du lycée suivent cette spécialité'],
        ['des salariés d\'une entreprise sont cadres', 'des cadres sont des femmes', 'salariés sont des femmes cadres'],
        ['des adhérents d\'un club pratiquent la compétition', 'des compétiteurs ont moins de 18 ans', 'adhérents sont des compétiteurs de moins de 18 ans'],
        ['des foyers d\'une ville possèdent une voiture', 'de ces foyers possèdent une voiture électrique', 'foyers de la ville possèdent une voiture électrique']]);
      const p = (p1 * p2) / 100;
      return this._xa([R2(p), PC], T, 3, 'Proportion de proportion',
        'Calculer une proportion de proportion',
        `$${P(p1)}$ ${ctx[0]} et $${P(p2)}$ ${ctx[1]}. Quelle proportion des ${ctx[2]} ?`,
        `$${P(p)}$`,
        [`$${P(p1 + p2)}$`, `$${P(Math.abs(p1 - p2))}$`, `$${P((p1 + p2) / 2)}$`, `$${P(100 - p)}$`],
        'Une proportion d\'une proportion se calcule par un produit.',
        `Calcule $${this.dec(p2 / 100)} \\times ${this.dec(p1 / 100)}$.`,
        `$p = ${this.dec(p2 / 100)} \\times ${this.dec(p1 / 100)} = ${this.dec(p / 100)}$, soit $${P(p)}$.`
      );
    }
    // tier 4
    const kind = this.randInt(0, 2);
    if (kind === 0) {
      let t = 0;
      while (t === 0) t = this.randInt(-80, 150);
      const tr = (100 / (100 + t) - 1) * 100;
      const what = this.randChoice(things);
      const exact = this.isDecimal(tr, 2);
      return this._xa([R2(tr), TX], T, 4, 'Évolution réciproque',
        'Déterminer le taux d\'évolution réciproque',
        `${what} ${this._2N5_verb(t)}. Quelle évolution permettrait de revenir à la valeur initiale${exact ? '' : ' (taux arrondi à $0{,}01\\,\\%$ près)'} ?`,
        EV(tr),
        [EV(-t), EV(-tr), EV(t === 100 ? -t / 4 : (-t / (100 - t)) * 100), EV(tr * 2)],
        'Le coefficient réciproque est l\'inverse du coefficient multiplicateur.',
        `$CM = ${this.dec(1 + t / 100)}$, donc $CM' = \\frac{1}{${this.dec(1 + t / 100)}}$.`,
        `$CM' = \\frac{1}{${this.dec(1 + t / 100)}} ${exact ? '=' : '\\approx'} ${this.dec(1 + tr / 100, 6)}$, donc $t' = CM' - 1 ${exact ? '=' : '\\approx'} ${this.dec(tr / 100, 6)}$ : ${tr > 0 ? 'une hausse' : 'une baisse'} de $${P(Math.abs(tr))}$${exact ? '' : ' environ'}.`
      );
    }
    if (kind === 1) {
      const t = this.randChoice([1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12, 15]) * (Math.random() < 0.7 ? 1 : -1);
      const n = this.randInt(2, 6);
      const cm = 1 + t / 100;
      const tg = (cm ** n - 1) * 100;
      const ex = this.isDecimal(cm ** n, 6);
      const what = this.randChoice(things);
      return this._xa([R2(tg), TX], T, 4, 'Évolutions identiques répétées',
        'Calculer le taux global de plusieurs évolutions identiques',
        `${what} ${this._2N5_verb(t)} chaque année pendant $${n}$ ans. Quelle est l'évolution globale sur ces $${n}$ années (taux arrondi à $0{,}01\\,\\%$ près) ?`,
        EV(tg),
        [EV(n * t), EV((cm ** (n - 1) - 1) * 100), EV((cm ** (n + 1) - 1) * 100), EV(-tg)],
        `$${n}$ évolutions de même coefficient $CM$ donnent le coefficient global $CM^{${n}}$.`,
        `$CM = ${this.dec(cm)}$ ; calcule $${this.dec(cm)}^{${n}}$.`,
        `$CM_{\\text{global}} = ${this.dec(cm)}^{${n}} ${ex ? '=' : '\\approx'} ${this.dec(cm ** n, 6)}$, donc $t ${ex ? '=' : '\\approx'} ${this.dec(tg / 100, 6)}$ : ${tg > 0 ? 'une hausse' : 'une baisse'} ${ex ? 'de' : 'd\'environ'} $${P(Math.abs(tg))}$ (et non $${P(Math.abs(n * t))}$).`
      );
    }
    let t1 = 0; let t2 = 0;
    while (t1 === 0 || t2 === 0 || (100 + t1) * (100 + t2) === 10000) {
      t1 = this.randInt(-8, 12) * 5;
      t2 = this.randInt(-8, 12) * 5;
    }
    const tg = ((100 + t1) * (100 + t2) - 10000) / 100;
    const what = this.randChoice(things);
    return this._xa([String(t2), TX], T, 4, 'Second taux d\'évolution',
      'Déterminer un taux connaissant le taux global',
      `${what} ${this._2N5_verb(t1)} une première année. Sur les deux années, l'évolution globale est ${tg > 0 ? 'une hausse' : 'une baisse'} de $${P(Math.abs(tg))}$. Quelle a été l'évolution la deuxième année ?`,
      EV(t2),
      [EV(tg - t1), EV(-t2), EV(t1 - tg), EV(tg + t1)],
      'Le coefficient global est le produit des coefficients : $CM = CM_1 \\times CM_2$.',
      `$CM_2 = \\frac{CM}{CM_1} = \\frac{${this.dec(1 + tg / 100, 6)}}{${this.dec(1 + t1 / 100)}}$.`,
      `$CM = ${this.dec(1 + tg / 100, 6)}$ et $CM_1 = ${this.dec(1 + t1 / 100)}$, donc $CM_2 = \\frac{${this.dec(1 + tg / 100, 6)}}{${this.dec(1 + t1 / 100)}} = ${this.dec(1 + t2 / 100)}$ : ${t2 > 0 ? 'une hausse' : 'une baisse'} de $${P(Math.abs(t2))}$.`
    );
  },

  // =========================================================================
  // 2S4 : Algorithmique et programmation (Python) — Seconde
  // =========================================================================
  /** Bloc de code Python (rendu par MathsRenderer.markdownToHtml) */
  _2S4_py(lines) {
    return '\n```python\n' + lines.join('\n') + '\n```\n';
  },

  /** Réponse numérique en mode math ($-3$, $2{,}5$) */
  _2S4_n(v) {
    return `$${Number.isInteger(v) ? v : this.dec(v, 6)}$`;
  },

  gen_2S4(tier) {
    const T = '2S4';
    const P = (l) => this._2S4_py(l);
    const N = (v) => this._2S4_n(v);
    if (tier === 1) {
      const fam = this.randInt(0, 3);
      if (fam === 0) {
        // Suite d'affectations
        const pool = [
          ['a = a + b', (s) => { s.a = s.a + s.b; }],
          ['b = a - b', (s) => { s.b = s.a - s.b; }],
          ['a = 2 * a', (s) => { s.a = 2 * s.a; }],
          ['b = b + 3', (s) => { s.b = s.b + 3; }],
          ['a = a * b', (s) => { s.a = s.a * s.b; }],
          ['b = a + 1', (s) => { s.b = s.a + 1; }],
          ['a = b - a', (s) => { s.a = s.b - s.a; }],
          ['b = 3 * b - a', (s) => { s.b = 3 * s.b - s.a; }]
        ];
        const a0 = this.randInt(1, 9);
        const b0 = this.randInt(1, 9);
        const ops = this.pickDistinct(pool, 3);
        const v = this.randChoice(['a', 'b']);
        const s = { a: a0, b: b0 };
        const trace = [];
        ops.forEach(([txt, f]) => { f(s); trace.push(`après \`${txt}\` : \`a = ${s.a}\`, \`b = ${s.b}\``); });
        // Erreur typique : utiliser les valeurs initiales à chaque ligne
        const naive = { a: a0, b: b0 };
        ops.forEach(([, f]) => { const c = { a: a0, b: b0 }; f(c); if (c.a !== a0) naive.a = c.a; if (c.b !== b0) naive.b = c.b; });
        const other = v === 'a' ? 'b' : 'a';
        const prev = { a: a0, b: b0 };
        ops.slice(0, 2).forEach(([, f]) => f(prev));
        return this.makeMcq(T, 1, 'Suite d\'affectations',
          'Exécuter pas à pas une suite d\'affectations',
          `Qu'affiche le programme Python suivant ?${P([`a = ${a0}`, `b = ${b0}`, ...ops.map((o) => o[0]), `print(${v})`])}`,
          N(s[v]),
          [N(naive[v]), N(s[other]), N(prev[v]), N(s[v] + 1)],
          'Les instructions s\'exécutent de haut en bas : chaque affectation utilise les valeurs **actuelles** des variables.',
          'Tiens à jour un tableau des valeurs de `a` et `b` après chaque ligne.',
          `Au départ \`a = ${a0}\` et \`b = ${b0}\`. ${trace.join(' ; ').replace(/^a/, 'A')}. Le programme affiche donc ${N(s[v])}.`
        );
      }
      if (fam === 1) {
        // Échange de deux variables
        const x = this.randInt(1, 20);
        let y = this.randInt(1, 20);
        while (y === x) y = this.randInt(1, 20);
        const kind = this.randInt(0, 2);
        const code = kind === 0 ? ['a = b', 'b = a'] : kind === 1 ? ['c = a', 'a = b', 'b = c'] : ['a, b = b, a'];
        const res = kind === 0 ? [y, y] : [y, x];
        const fmt = (p, q) => `« ${p} ${q} »`;
        const ans = fmt(res[0], res[1]);
        return this.makeMcq(T, 1, 'Échanger deux variables',
          'Comprendre l\'échange du contenu de deux variables',
          `Qu'affiche le programme Python suivant ?${P([`a = ${x}`, `b = ${y}`, ...code, 'print(a, b)'])}`,
          ans,
          [fmt(y, x), fmt(x, y), fmt(y, y), fmt(x, x)],
          '`print(a, b)` affiche les deux valeurs séparées par une espace.',
          kind === 0 ? 'Après `a = b`, l\'ancienne valeur de `a` est perdue.' : 'Suis le contenu de chaque variable ligne par ligne.',
          kind === 0
            ? `\`a = b\` donne \`a = ${y}\` : l'ancienne valeur ${x} est écrasée. Puis \`b = a\` donne \`b = ${y}\`. Affichage : ${ans}. Pour échanger, il faut une variable auxiliaire ou l'affectation simultanée \`a, b = b, a\`.`
            : kind === 1
              ? `\`c = a\` sauvegarde ${x}, \`a = b\` donne \`a = ${y}\`, puis \`b = c\` donne \`b = ${x}\` : les valeurs sont échangées. Affichage : ${ans}.`
              : `L'affectation simultanée évalue d'abord le membre de droite \`(${y}, ${x})\`, puis l'affecte à \`(a, b)\` : les valeurs sont échangées. Affichage : ${ans}.`
        );
      }
      if (fam === 2) {
        // Instruction conditionnelle
        const x = this.randInt(2, 30);
        const k = this.randInt(5, 25);
        const conds = [
          [`x % 2 == 0`, (z) => z % 2 === 0, `${x} est-il pair`],
          [`x % 3 == 0`, (z) => z % 3 === 0, `${x} est-il multiple de 3`],
          [`x > ${k}`, (z) => z > k, `${x} > ${k}`],
          [`x >= ${k}`, (z) => z >= k, `${x} \\ge ${k}`]
        ];
        const bodies = [
          [['y = x // 2', (z) => Math.floor(z / 2)], ['y = 3 * x + 1', (z) => 3 * z + 1]],
          [[`y = x - ${k}`, (z) => z - k], [`y = ${k} - x`, (z) => k - z]],
          [['y = 2 * x', (z) => 2 * z], ['y = x + 10', (z) => z + 10]]
        ];
        const [ct, cf] = this.randChoice(conds);
        const [[t1, f1], [t2, f2]] = this.randChoice(bodies);
        const ok = cf(x);
        const y = ok ? f1(x) : f2(x);
        return this.makeMcq(T, 1, 'Instruction conditionnelle',
          'Exécuter une instruction conditionnelle if … else',
          `Qu'affiche le programme Python suivant ?${P([`x = ${x}`, `if ${ct}:`, `    ${t1}`, 'else:', `    ${t2}`, 'print(y)'])}`,
          N(y),
          [N(ok ? f2(x) : f1(x)), N(y + 1), N(x)],
          `Commence par tester la condition \`${ct}\` avec \`x = ${x}\`.`,
          'Seul le bloc correspondant au résultat du test est exécuté.',
          `Avec \`x = ${x}\`, la condition \`${ct}\` est ${ok ? 'vraie' : 'fausse'} : on exécute \`${ok ? t1 : t2}\`, d'où \`y = ${y}\`. Le programme affiche ${N(y)}.`
        );
      }
      // Division euclidienne et division décimale
      const b = this.randChoice([2, 3, 4, 5, 6, 7, 8, 9]);
      const a = this.randInt(b + 1, 99);
      if (a % b === 0 || Math.random() < 0.5) {
        const q = Math.floor(a / b);
        const r = a % b;
        const ans = `« ${q} ${r} »`;
        return this._xa([`(${q};${r})`, 'Saisir les deux nombres affichés, dans l\'ordre, sous la forme (a ; b).'], T, 1, 'Quotient et reste en Python',
          'Utiliser les opérateurs // et %',
          `Qu'affiche l'instruction Python suivante ?${P([`print(${a} // ${b}, ${a} % ${b})`])}`,
          ans,
          [`« ${r} ${q} »`, `« ${q + 1} ${r} »`, `« ${this.decText(a / b, 6).replace(',', '.')} ${r} »`, `« ${q} ${b - r} »`],
          '`//` donne le quotient entier et `%` le reste de la division euclidienne.',
          `Écris ${a} sous la forme ${b} × q + r avec 0 ≤ r < ${b}.`,
          `${r ? `$${a} = ${b} \\times ${q} + ${r}$ avec $0 \\le ${r} < ${b}$` : `$${a} = ${b} \\times ${q}$`} : le quotient est ${q} et le reste ${r}. Affichage : ${ans}.`
        );
      }
      const bb = this.randChoice([2, 4, 5, 8]);
      let aa = this.randInt(3, 60);
      while (aa % bb === 0) aa = this.randInt(3, 60);
      return this.makeMcq(T, 1, 'Division décimale en Python',
        'Distinguer / et //',
        `Qu'affiche l'instruction Python suivante ?${P([`print(${aa} / ${bb})`])}`,
        N(aa / bb),
        [N(Math.floor(aa / bb)), N(aa % bb), N(Math.floor(aa / bb) + (aa % bb) / 10), N(bb / 10 + Math.floor(aa / bb))],
        'En Python, `/` est la division décimale (le résultat est un flottant).',
        '`//` serait la division entière : ce n\'est pas l\'opérateur utilisé ici.',
        `\`${aa} / ${bb}\` est la division décimale : $${aa} \\div ${bb} = ${this.dec(aa / bb, 6)}$. Python affiche ${this.decText(aa / bb, 6).replace(',', '.')}, c'est-à-dire ${N(aa / bb)}.`
      );
    }
    if (tier === 2) {
      const fam = this.randInt(0, 2);
      if (fam === 0) {
        // Somme avec une boucle bornée
        const forms = [
          ['i', (i) => i, '$i$'],
          ['i * i', (i) => i * i, '$i^2$'],
          ['2 * i + 1', (i) => 2 * i + 1, '$2i + 1$']
        ];
        const [ft, ff, fm] = this.randChoice(forms);
        const kind = this.randInt(0, 2);
        let a; let b; let st = 1; let rng;
        if (kind === 0) { a = 0; b = this.randInt(4, 9); rng = `range(${b})`; } else if (kind === 1) { a = this.randInt(1, 5); b = a + this.randInt(3, 6); rng = `range(${a}, ${b})`; } else { a = this.randInt(0, 3); st = this.randChoice([2, 3]); b = a + st * this.randInt(3, 5) + this.randInt(0, 1); rng = `range(${a}, ${b}, ${st})`; }
        const vals = [];
        for (let i = a; i < b; i += st) vals.push(i);
        const s = vals.reduce((acc, i) => acc + ff(i), 0);
        const withEnd = vals[vals.length - 1] + st === b ? s + ff(b) : s + ff(vals[vals.length - 1] + st);
        return this.makeMcq(T, 2, 'Somme avec une boucle for',
          'Exécuter une boucle bornée et un accumulateur',
          `Qu'affiche le programme Python suivant ?${P(['s = 0', `for i in ${rng}:`, `    s = s + ${ft}`, 'print(s)'])}`,
          N(s),
          [N(withEnd), N(s - ff(vals[0]) + (vals[0] === 0 ? ff(b) : 0)), N(s - ff(vals[vals.length - 1])), N(vals.length)],
          `\`${rng}\` parcourt les entiers ${vals.length > 1 ? `${vals[0]}, ${vals[1]}, …` : vals[0]} **sans atteindre** ${b}.`,
          `La variable \`i\` prend les valeurs ${vals.join(', ')}.`,
          `\`i\` prend successivement les valeurs ${vals.join(', ')} (la borne ${b} est exclue). On ajoute à chaque tour ${fm} : $s = ${vals.map(ff).join(' + ')} = ${s}$. Le programme affiche ${N(s)}.`
        );
      }
      if (fam === 1) {
        // Suite définie par récurrence (itérations)
        const forms = [
          ['x = 2 * x - 3', (x) => 2 * x - 3],
          ['x = 3 * x + 1', (x) => 3 * x + 1],
          ['x = x * x - 2', (x) => x * x - 2],
          ['x = 10 - 2 * x', (x) => 10 - 2 * x],
          ['x = x + 2 * k', null]
        ];
        const idx = this.randInt(0, forms.length - 1);
        const [ft] = forms[idx];
        const n = idx === 2 ? this.randInt(2, 3) : this.randInt(3, 6);
        const x0 = idx === 2 ? this.randInt(-2, 3) : this.randInt(-5, 9);
        const xs = [x0];
        for (let k = 0; k < n + 1; k++) {
          const x = xs[xs.length - 1];
          xs.push(idx === 4 ? x + 2 * k : forms[idx][1](x));
        }
        const ans = xs[n];
        return this.makeMcq(T, 2, 'Itérer une affectation',
          'Exécuter une boucle bornée qui met à jour une variable',
          `Qu'affiche le programme Python suivant ?${P([`x = ${x0}`, `for k in range(${n}):`, `    ${ft}`, 'print(x)'])}`,
          N(ans),
          [N(xs[n - 1]), N(xs[n + 1]), N(ans + 2)],
          `La boucle s'exécute exactement ${n} fois (pour \`k\` = 0, 1, …, ${n - 1}).`,
          'Note la valeur de `x` après chaque tour.',
          `Valeurs successives de \`x\` : ${xs.slice(0, n + 1).join(' → ')}. Après ${n} tours, le programme affiche ${N(ans)}.`
        );
      }
      // Compteur avec condition
      const N0 = this.randInt(20, 80);
      const k = this.randChoice([3, 4, 5, 6, 7]);
      let m = this.randChoice([2, 3, 4, 5]);
      while (m === k) m = this.randChoice([2, 3, 4, 5]);
      const kind = this.randInt(0, 2);
      const cond = kind === 0 ? `i % ${k} == 0` : kind === 1 ? `i % ${k} == 0 or i % ${m} == 0` : `i % ${k} == 0 and i % ${m} != 0`;
      const test = (i) => (kind === 0 ? i % k === 0 : kind === 1 ? (i % k === 0 || i % m === 0) : (i % k === 0 && i % m !== 0));
      let c = 0; let cIncl = 0;
      for (let i = 1; i < N0; i++) if (test(i)) c++;
      cIncl = c + (test(N0) ? 1 : 0);
      let cAnd = 0;
      for (let i = 1; i < N0; i++) if (kind === 1 ? (i % k === 0 && i % m === 0) : kind === 2 ? i % k === 0 : (i % k !== 0)) cAnd++;
      return this.makeMcq(T, 2, 'Compter avec une boucle',
        'Combiner boucle bornée et instruction conditionnelle',
        `Qu'affiche le programme Python suivant ?${P(['c = 0', `for i in range(1, ${N0}):`, `    if ${cond}:`, '        c = c + 1', 'print(c)'])}`,
        N(c),
        [N(cIncl === c ? c + 1 : cIncl), N(cAnd), N(c - 1)],
        `\`range(1, ${N0})\` parcourt les entiers de 1 à ${N0 - 1}.`,
        `\`c\` compte les entiers \`i\` pour lesquels \`${cond}\` est vrai.`,
        `On compte les entiers de 1 à ${N0 - 1} vérifiant \`${cond}\`${kind === 0 ? ` (les multiples de ${k})` : kind === 1 ? ` (multiples de ${k} ou de ${m})` : ` (multiples de ${k} qui ne sont pas multiples de ${m})`} : il y en a ${c}. Le programme affiche ${N(c)}.`
      );
    }
    if (tier === 3) {
      const fam = this.randInt(0, 3);
      if (fam === 0) {
        // Seuil : boucle while
        const geo = Math.random() < 0.5;
        const u0 = this.randInt(1, 9);
        const q = geo ? this.randChoice([2, 3]) : this.randInt(3, 12);
        const S = geo ? this.randInt(30, 900) : this.randInt(40, 150);
        let u = u0; let n = 0; const tr = [`(${n} ; ${u})`];
        while (u < S) { u = geo ? q * u : u + q; n++; tr.push(`(${n} ; ${u})`); }
        const askU = Math.random() < 0.4;
        const prevU = geo ? u / q : u - q;
        return this.makeMcq(T, 3, 'Boucle non bornée (seuil)',
          'Exécuter une boucle while',
          `Qu'affiche le programme Python suivant ?${P([`u = ${u0}`, 'n = 0', `while u < ${S}:`, `    u = ${geo ? `${q} * u` : `u + ${q}`}`, '    n = n + 1', `print(${askU ? 'u' : 'n'})`])}`,
          N(askU ? u : n),
          askU ? [N(prevU), N(S), N(geo ? q * u : u + q)] : [N(n - 1), N(n + 1), N(u)],
          `La boucle continue **tant que** \`u < ${S}\` ; elle s'arrête dès que \`u\` atteint ou dépasse ${S}.`,
          'Dresse la liste des couples (`n` ; `u`) tour après tour.',
          `Couples (\`n\` ; \`u\`) successifs : ${tr.join(', ')}. Pour \`u = ${u}\`, la condition \`u < ${S}\` est fausse : la boucle s'arrête avec \`n = ${n}\` et \`u = ${u}\`. Le programme affiche ${N(askU ? u : n)}.`
        );
      }
      if (fam === 1) {
        // Somme des chiffres / nombre de chiffres
        const x = this.randInt(100, 99999);
        const digits = String(x).split('').map(Number);
        const sumDig = digits.reduce((a, b) => a + b, 0);
        if (Math.random() < 0.5) {
          return this.makeMcq(T, 3, 'Somme des chiffres',
            'Utiliser // et % dans une boucle while',
            `Qu'affiche le programme Python suivant ?${P([`x = ${x}`, 's = 0', 'while x > 0:', '    s = s + x % 10', '    x = x // 10', 'print(s)'])}`,
            N(sumDig),
            [N(digits.length), N(sumDig - digits[0]), N(x % 10), N(sumDig + 1)],
            '`x % 10` est le chiffre des unités de `x` et `x // 10` supprime ce chiffre.',
            'À chaque tour, on ajoute à `s` le dernier chiffre de `x`.',
            `La boucle ajoute successivement les chiffres ${digits.slice().reverse().join(', ')} puis \`x\` devient 0 : \`s = ${digits.slice().reverse().join(' + ')} = ${sumDig}\`. Le programme affiche ${N(sumDig)}.`
          );
        }
        const b = this.randChoice([2, 3, 10]);
        let y = x; let c = 0; const tr = [y];
        while (y >= b) { y = Math.floor(y / b); c++; tr.push(y); }
        return this.makeMcq(T, 3, 'Divisions successives',
          'Compter les tours d\'une boucle while',
          `Qu'affiche le programme Python suivant ?${P([`x = ${x}`, 'c = 0', `while x >= ${b}:`, `    x = x // ${b}`, '    c = c + 1', 'print(c)'])}`,
          N(c),
          [N(c + 1), N(c - 1), N(y)],
          `À chaque tour, \`x\` est remplacé par le quotient entier de \`x\` par ${b}.`,
          `La boucle s'arrête dès que \`x < ${b}\`.`,
          `Valeurs successives de \`x\` : ${tr.join(' → ')}. Il y a eu ${c} tours de boucle : le programme affiche ${N(c)}.`
        );
      }
      if (fam === 2) {
        // Somme d'entiers jusqu'à un seuil
        const S = this.randInt(20, 300);
        const sq = Math.random() < 0.5;
        let s = 0; let k = 0;
        while (s < S) { k++; s += sq ? 2 * k - 1 : k; }
        const askS = Math.random() < 0.4;
        return this.makeMcq(T, 3, 'Accumuler jusqu\'à un seuil',
          'Exécuter une boucle while avec accumulateur',
          `Qu'affiche le programme Python suivant ?${P(['s = 0', 'k = 0', `while s < ${S}:`, '    k = k + 1', `    s = s + ${sq ? '2 * k - 1' : 'k'}`, `print(${askS ? 's' : 'k'})`])}`,
          N(askS ? s : k),
          askS ? [N(s - (sq ? 2 * k - 1 : k)), N(S), N(s + (sq ? 2 * k + 1 : k + 1))] : [N(k - 1), N(k + 1), N(s)],
          sq ? 'Remarque : $1 + 3 + 5 + \\dots + (2k - 1) = k^2$.' : 'Remarque : $1 + 2 + \\dots + k = \\frac{k(k + 1)}{2}$.',
          `Cherche le premier \`k\` pour lequel \`s\` atteint ou dépasse ${S}.`,
          `Après le tour où \`k\` vaut $k$, on a \`s\` $= ${sq ? 'k^2' : '\\frac{k(k + 1)}{2}'}$. ${k > 1 ? `Pour \`k = ${k - 1}\`, \`s = ${sq ? (k - 1) ** 2 : (k - 1) * k / 2}\` < ${S} ; ` : ''}pour \`k = ${k}\`, \`s = ${s}\` ≥ ${S} : la boucle s'arrête. Le programme affiche ${N(askS ? s : k)}.`
        );
      }
      // Suite de Syracuse
      const x0 = this.randInt(3, 40);
      let x = x0; let n = 0; const tr = [x];
      while (x !== 1) { x = x % 2 === 0 ? x / 2 : 3 * x + 1; n++; tr.push(x); }
      const mx = Math.max(...tr);
      return this.makeMcq(T, 3, 'Suite de Syracuse',
        'Combiner boucle while et instruction conditionnelle',
        `Qu'affiche le programme Python suivant ?${P([`x = ${x0}`, 'n = 0', 'while x != 1:', '    if x % 2 == 0:', '        x = x // 2', '    else:', '        x = 3 * x + 1', '    n = n + 1', 'print(n)'])}`,
        N(n),
        [N(n + 1), N(n - 1), N(mx)],
        'Si `x` est pair on le divise par 2, sinon on le remplace par 3x + 1.',
        '`n` compte le nombre de tours effectués avant d\'atteindre 1.',
        `Valeurs successives de \`x\` : ${tr.join(' → ')}. Il faut ${n} tours pour atteindre 1 : le programme affiche ${N(n)}.`
      );
    }
    // tier 4 : fonctions
    const fam = this.randInt(0, 4);
    if (fam === 0) {
      const a = this.randNonZero(-4, 4);
      const b = this.randInt(-6, 6);
      const c = this.randInt(-9, 9);
      const v = this.randNonZero(-5, 5);
      const f = (x) => a * x * x + b * x + c;
      const terms = [`${a === 1 ? '' : a === -1 ? '-' : a + ' * '}x ** 2`];
      if (b) terms.push(`${b > 0 ? '+' : '-'} ${Math.abs(b) === 1 ? '' : Math.abs(b) + ' * '}x`);
      if (c) terms.push(`${c > 0 ? '+' : '-'} ${Math.abs(c)}`);
      return this.makeMcq(T, 4, 'Appeler une fonction',
        'Calculer la valeur renvoyée par une fonction Python',
        `Qu'affiche le programme Python suivant ?${P(['def f(x):', `    return ${terms.join(' ')}`, '', `print(f(${v}))`])}`,
        N(f(v)),
        [N(a * 2 * v + b * v + c), N(-a * v * v + b * v + c), N(a * v * v - b * v + c), N(f(v) + 1)],
        '`x ** 2` signifie $x^2$ en Python.',
        `Remplace \`x\` par ${v} dans l'expression renvoyée.`,
        `\`f(${v})\` renvoie $${a} \\times ${this.paren(v)}^2${b ? ` ${b < 0 ? '-' : '+'} ${Math.abs(b)} \\times ${this.paren(v)}` : ''}${c ? ` ${c < 0 ? '-' : '+'} ${Math.abs(c)}` : ''} = ${f(v)}$ (la puissance est calculée avant la multiplication). Le programme affiche ${N(f(v))}.`
      );
    }
    if (fam === 1) {
      // Fonction définie par morceaux
      const K = this.randInt(-2, 4);
      const a = this.randNonZero(-3, 4);
      const b = this.randInt(-5, 5);
      const c = this.randInt(0, 9);
      const f = (x) => (x < K ? a * x + b : x * x - c);
      const u = this.randInt(K - 5, K - 1);
      const w = this.randInt(K, K + 4);
      const lin = `${a === 1 ? '' : a === -1 ? '-' : a + ' * '}x${b ? ` ${b > 0 ? '+' : '-'} ${Math.abs(b)}` : ''}`;
      const ans = f(u) + f(w);
      const swapped = (a * w + b) + (u * u - c);
      return this.makeMcq(T, 4, 'Fonction avec test',
        'Exécuter une fonction contenant une instruction conditionnelle',
        `Qu'affiche le programme Python suivant ?${P(['def f(x):', `    if x < ${K}:`, `        return ${lin}`, '    else:', `        return x * x${c ? ` - ${c}` : ''}`, '', `print(f(${u}) + f(${w}))`])}`,
        N(ans),
        [N(swapped), N(2 * f(u)), N(2 * f(w)), N(ans + 1)],
        `Pour chaque appel, teste d'abord si l'argument est strictement inférieur à ${K}.`,
        'Calcule séparément les deux valeurs renvoyées, puis additionne-les.',
        `${u} < ${K}, donc \`f(${u})\` renvoie ${N(f(u))} (première branche) ; ${w} ≥ ${K}, donc \`f(${w})\` renvoie $${this.paren(w)}^2${c ? ` - ${c}` : ''} = ${f(w)}$ (seconde branche). Le programme affiche la somme de ces deux valeurs : ${N(ans)}.`
      );
    }
    if (fam === 2) {
      // Fonction avec boucle
      const forms = [
        ['k', (k) => k, '$1 + 2 + \\dots + n$'],
        ['k * k', (k) => k * k, '$1^2 + 2^2 + \\dots + n^2$'],
        ['2 * k - 1', (k) => 2 * k - 1, 'la somme des $n$ premiers entiers impairs'],
        ['k ** 3', (k) => k ** 3, '$1^3 + 2^3 + \\dots + n^3$']
      ];
      const [ft, ff, fm] = this.randChoice(forms);
      const n = this.randInt(3, 9);
      let s = 0; for (let k = 1; k <= n; k++) s += ff(k);
      return this.makeMcq(T, 4, 'Fonction et boucle bornée',
        'Calculer la valeur renvoyée par une fonction contenant une boucle',
        `Qu'affiche le programme Python suivant ?${P(['def somme(n):', '    s = 0', '    for k in range(1, n + 1):', `        s = s + ${ft}`, '    return s', '', `print(somme(${n}))`])}`,
        N(s),
        [N(s - ff(n)), N(s + ff(n + 1)), N(ff(n))],
        `\`range(1, n + 1)\` parcourt les entiers de 1 à $n$ inclus.`,
        `La fonction calcule ${fm}.`,
        `\`somme(${n})\` calcule $${Array.from({ length: n }, (_, i) => ff(i + 1)).join(' + ')} = ${s}$. Le programme affiche ${N(s)}.`
      );
    }
    if (fam === 3) {
      // Fonction renvoyant une chaîne
      const sets = [[16, 14, 12, 10], [15, 13, 11, 9], [17, 14, 12, 10]];
      const th = this.randChoice(sets);
      const labels = ['Excellent', 'Très bien', 'Bien', 'Assez bien', 'Insuffisant'];
      const note = this.randInt(5, 20);
      const idx = note >= th[0] ? 0 : note >= th[1] ? 1 : note >= th[2] ? 2 : note >= th[3] ? 3 : 4;
      const op = Math.random() < 0.5 ? '>=' : '>';
      const idx2 = op === '>=' ? idx : (note > th[0] ? 0 : note > th[1] ? 1 : note > th[2] ? 2 : note > th[3] ? 3 : 4);
      const ans = `« ${labels[idx2]} »`;
      return this.makeMcq(T, 4, 'Fonction et tests en cascade',
        'Exécuter une instruction if … elif … else',
        `Qu'affiche le programme Python suivant ?${P(['def appreciation(note):', `    if note ${op} ${th[0]}:`, `        return "${labels[0]}"`, `    elif note ${op} ${th[1]}:`, `        return "${labels[1]}"`, `    elif note ${op} ${th[2]}:`, `        return "${labels[2]}"`, `    elif note ${op} ${th[3]}:`, `        return "${labels[3]}"`, '    else:', `        return "${labels[4]}"`, '', `print(appreciation(${note}))`])}`,
        ans,
        labels.filter((l, i) => i !== idx2).map((l) => `« ${l} »`),
        'Les conditions sont testées dans l\'ordre ; dès qu\'une est vraie, `return` termine la fonction.',
        `Attention à l'opérateur \`${op}\` : ${op === '>=' ? 'l\'égalité est acceptée' : 'l\'inégalité est stricte'}.`,
        `Avec \`note = ${note}\`, ${idx2 === 0 ? `le premier test \`note ${op} ${th[0]}\` est vrai` : `les tests ${th.slice(0, idx2).map((t) => `\`note ${op} ${t}\``).join(', ')} sont faux${idx2 < 4 ? ` et \`note ${op} ${th[idx2]}\` est vrai` : ''}`} : la fonction renvoie ${ans}.`
      );
    }
    // Fonction parcourant une liste
    const L = Array.from({ length: this.randInt(5, 7) }, () => this.randInt(-9, 30));
    const isMin = Math.random() < 0.5;
    const r = isMin ? Math.min(...L) : Math.max(...L);
    const other = isMin ? Math.max(...L) : Math.min(...L);
    return this.makeMcq(T, 4, 'Parcourir une liste',
      'Comprendre une fonction qui parcourt une liste',
      `Qu'affiche le programme Python suivant ?${P(['def mystere(L):', '    m = L[0]', '    for x in L:', `        if x ${isMin ? '<' : '>'} m:`, '            m = x', '    return m', '', `print(mystere([${L.join(', ')}]))`])}`,
      N(r),
      [N(other), N(L[0]), N(L[L.length - 1]), N(L.reduce((a, b) => a + b, 0))],
      '`m` contient la meilleure valeur rencontrée jusqu\'ici.',
      `\`m\` est remplacé chaque fois qu'on rencontre un élément ${isMin ? 'plus petit' : 'plus grand'}.`,
      `La fonction renvoie le ${isMin ? 'minimum' : 'maximum'} de la liste : ${N(r)}. Valeurs successives de \`m\` : ${(() => { let m = L[0]; const t = [m]; L.forEach((x) => { if (isMin ? x < m : x > m) { m = x; t.push(m); } }); return t.join(' → '); })()}.`
    );
  },

  // =========================================================================
  // Familles complémentaires Seconde et Première (audit du 31/10/2026, programmes BO du 2 avril 2026)
  // _lyX(ch, tier, nOld) tire une famille ajoutée avec un poids proportionnel à leur nombre
  // (nOld = nombre de familles historiques du palier ; 0 = familles ajoutées seules).
  // =========================================================================
  _lyX(ch, tier, nOld) {
    const names = ((this._LYX || {})[ch] || {})[tier];
    if (!names || !names.length) return null;
    if (nOld > 0 && Math.random() >= names.length / (names.length + nOld)) return null;
    return this[this.randChoice(names)](tier);
  },

  /**
   * makeMcq + pilotage de la saisie exacte : ex = [saisie, consigne, autres saisies acceptées] ou 'keep'
   * (QCM conceptuel). Les autres saisies (ex. « 3π/4 » quand on demande k pour kπ) sont jugées par
   * MathsAdaptiveEngine.validateAnswer avec les mêmes règles que la saisie principale.
   */
  _xa(ex, ...args) {
    const q = this.makeMcq(...args);
    if (ex === 'keep') q.keepMcq = true;
    else if (ex) {
      const v = this.numValue(`$${String(ex[0]).replace(/^(-?\d+)\/(\d+)$/, '\\frac{$1}{$2}').replace(',', '{,}')}$`);
      const clash = v !== null && (q.options || []).some((o) => {
        if (o === q.answer) return false;
        const r = window.MathsGenUtils.texToInput(o);
        const ov = r ? this.numValue(`$${r.input.replace(/^(-?\d+)\/(\d+)$/, '\\frac{$1}{$2}').replace(',', '{,}')}$`) : null;
        return ov !== null && Math.abs(ov - v) < 1e-4;
      });
      if (!clash) {
        q.exactAnswer = ex[0];
        if (ex[1]) q.exactInstruction = ex[1];
        if (ex[2] && ex[2].length) q.acceptedAnswers = ex[2];
      }
    }
    return q;
  },

  _LYX: {
    '2N1': { 1: ['_x2N1mult', '_x2N1enc'], 2: ['_x2N1pow'], 3: ['_x2N1dec', '_x2N1par', '_x2N1card'], 4: ['_x2N1lots'] },
    '2N2': { 1: ['_x2N2dev'], 2: ['_x2N2fac'], 3: ['_x2N2den'], 4: ['_x2N2form'] },
    '2N3': { 1: ['_x2N3ent', '_x2N3sig'], 2: ['_x2N3cr', '_x2N3cmp', '_x2N3sig'], 3: ['_x2N3sqrt', '_x2N3cr'], 4: ['_x2N3cnt'] },
    '2N4': { 1: ['_x2N4lin', '_x2N4sq', '_x2N4inv'], 2: ['_x2N4quo', '_x2N4ent', '_x2N4iso'], 3: ['_x2N4cnt', '_x2N4quo'], 4: ['_x2N4mod'] },
    '2A1': { 2: ['_x2A1pt'], 3: ['_x2A1int', '_x2A1vi'], 4: ['_x2A1mod'] },
    '2A2': { 1: ['_x2A2tab', '_x2A2aff'], 2: ['_x2A2tab'], 3: ['_x2A2opt'], 4: ['_x2A2opt'] },
    '2A3': { 1: ['_x2A3abs'], 3: ['_x2A3sq', '_x2A3abs'], 4: ['_x2A3sqrt', '_x2A3sq', '_x2A3abs'] },
    '2G1': { 2: ['_x2G1pyt'], 3: ['_x2G1cc'], 4: ['_x2G1eq'] },
    '2G2': { 1: ['_x2G2B'], 2: ['_x2G2det', '_x2G2norm'], 3: ['_x2G2k'], 4: ['_x2G2al'] },
    '2G3': { 1: ['_x2G3m'], 2: ['_x2G3pente', '_x2G3red'], 3: ['_x2G3ord', '_x2G3ax'], 4: ['_x2G3int', '_x2G3par'] },
    '2S1': { 2: ['_x2S1cls', '_x2S1add'], 3: ['_x2S1var', '_x2S1cm', '_x2S1fc'], 4: ['_x2S1need', '_x2S1var', '_x2S1fc'] },
    '2S2': { 1: ['_x2S2loi'], 2: ['_x2S2tc'], 3: ['_x2S2arb', '_x2S2tc'], 4: ['_x2S2tp'] },
    '1A1': { 2: ['_x1A1fac'], 3: ['_x1A1det', '_x1A1sgn'], 4: ['_x1A1evid', '_x1A1sp'] },
    '1A2': { 2: ['_x1A2app', '_x1A2vit'], 3: ['_x1A2lim', '_x1A2cm'] },
    '1A3': { 2: ['_x1A3xn'], 3: ['_x1A3pt', '_x1A3par'] },
    '1A4': { 2: ['_x1A4dec'], 3: ['_x1A4mod'], 4: ['_x1A4ext'] },
    '1A5': { 3: ['_x1A5var'], 4: ['_x1A5lim'] },
    '1A6': { 2: ['_x1A6gen'] },
    '1G1': { 2: ['_x1G1arc'], 4: ['_x1G1arc', '_x1G1sum'] },
    '1S1': { 3: ['_x1S1bern'], 4: ['_x1S1bern'] },
    '1S2': { 1: ['_x1S2cum'], 2: ['_x1S2jeu'], 3: ['_x1S2kh'], 4: ['_x1S2sd'] },
    '1G3': { 4: ['_x1G3proj'] }
  },

  /** Saisie brute d'une fraction réduite : (6, 1) -> "6", (-6, 8) -> "-3/4" */
  _xf(n, d = 1) {
    if (d < 0) { n = -n; d = -d; }
    const g = this.gcd(Math.abs(n), d) || 1;
    n /= g; d /= g;
    return d === 1 ? String(n) : `${n}/${d}`;
  },

  /** Multiple de π en texte brut (saisie exacte) : _xpi('3/4') -> "3π/4", _xpi('-1') -> "-π", _xpi('0') -> "0" */
  _xpi(k) {
    const m = String(k).match(/^(-?)(\d+)(?:\/(\d+))?$/);
    if (!m) return null;
    if (m[2] === '0') return '0';
    return `${m[1]}${m[2] === '1' ? '' : m[2]}π${m[3] ? '/' + m[3] : ''}`;
  },

  /** k√m en texte brut (saisie exacte) : _xsq(3, 2) -> "3√2", _xsq(-1, 5) -> "-√5", _xsq(4, 1) -> "4" */
  _xsq(k, m) {
    if (m === 1 || k === 0) return String(k);
    return `${k === 1 ? '' : k === -1 ? '-' : k}√${m}`;
  },

  /** Saisie brute d'un décimal : 2.5 -> "2,5" */
  _xd(x, k = 4) {
    return this.decText(x, k);
  },

  /** Tableau Markdown (rendu par MathsRenderer) */
  _xtab(head, rows) {
    const line = (r) => `| ${r.join(' | ')} |`;
    return `\n\n${line(head)}\n|${head.map(() => ':---:').join('|')}|\n${rows.map(line).join('\n')}\n\n`;
  },

  // ---- 2N1 ----
  _x2N1mult() {
    const a = this.randInt(3, 19);
    let b = this.randInt(40, 500);
    while (b % a === 0) b = this.randInt(40, 500);
    const q = Math.floor(b / a);
    const r = b - a * q;
    return this.makeExact('2N1', 1, 'Plus grand multiple inférieur à un entier',
      'Utiliser la division euclidienne pour trouver un multiple',
      `Quel est le plus grand multiple de $${a}$ inférieur ou égal à $${b}$ ?`,
      String(a * q),
      'Un multiple de $a$ s\'écrit $k \\times a$ avec $k$ entier.',
      `Effectue la division euclidienne de $${b}$ par $${a}$ et garde le quotient entier.`,
      `Division euclidienne : $${b} = ${a} \\times ${q} + ${r}$ avec $0 \\le ${r} < ${a}$. Le multiple suivant, $${a} \\times ${q + 1} = ${a * (q + 1)}$, dépasse $${b}$. Le plus grand multiple de $${a}$ inférieur ou égal à $${b}$ est donc $${a} \\times ${q} = ${a * q}$.`,
      { instruction: 'Saisir un nombre entier.' });
  },

  _x2N1enc() {
    const d = this.randChoice([3, 6, 7, 9, 11, 12, 13]);
    let n = this.randInt(d + 1, 9 * d);
    while (this.gcd(n, d) !== 1) n = this.randInt(d + 1, 9 * d);
    const k = this.randChoice([1, 2]);
    const A = Math.floor((n * 10 ** k) / d);
    const a = A / 10 ** k;
    const b = (A + 1) / 10 ** k;
    const fr = `\\frac{${n}}{${d}}`;
    const amp = k === 1 ? '0{,}1' : '0{,}01';
    return this.makeExact('2N1', 1, 'Encadrement décimal d\'un rationnel',
      'Encadrer un réel par deux décimaux d\'amplitude donnée',
      `On encadre $${fr}$ par deux décimaux d'amplitude $${amp}$ : $a \\le ${fr} < a + ${amp}$, où $a$ s'écrit avec ${k === 1 ? 'un chiffre' : 'deux chiffres'} après la virgule. Donner $a$.`,
      this._xd(a),
      'Calcule l\'écriture décimale du quotient (division posée).',
      `Garde ${k === 1 ? 'un chiffre' : 'deux chiffres'} après la virgule, sans arrondir : c'est une troncature.`,
      `$${fr} = ${this.dec(n / d, 6)}\\ldots$ (écriture décimale illimitée). Donc $${this.dec(a)} \\le ${fr} < ${this.dec(b)}$ et $a = ${this.dec(a)}$.`,
      { instruction: 'Saisir un nombre décimal, par exemple 2,35.' });
  },

  _x2N1pow() {
    const base = this.randChoice([2, 3, 5, 10]);
    const kind = this.randInt(0, 1);
    let st; let n; let h2; let sol;
    if (kind === 0) {
      const a = this.randNonZero(-6, 9);
      const b = this.randNonZero(-6, 9);
      const c = this.randNonZero(-6, 9);
      n = a + b - c;
      st = `\\dfrac{${base}^{${a}} \\times ${base}^{${b}}}{${base}^{${c}}}`;
      h2 = `Calcule l'exposant $${a} + ${this.paren(b)} - ${this.paren(c)}$.`;
      sol = `$A = \\dfrac{${base}^{${a + b}}}{${base}^{${c}}} = ${base}^{${a + b} - ${this.paren(c)}} = ${base}^{${n}}$, donc $n = ${n}$.`;
    } else {
      const a = this.randNonZero(-4, 5);
      const b = this.randInt(2, 4);
      const c = this.randNonZero(-6, 6);
      n = a * b + c;
      st = `\\left(${base}^{${a}}\\right)^{${b}} \\times ${base}^{${c}}`;
      h2 = `Calcule l'exposant $${a} \\times ${b} + ${this.paren(c)}$.`;
      sol = `$A = ${base}^{${a * b}} \\times ${base}^{${c}} = ${base}^{${a * b} + ${this.paren(c)}} = ${base}^{${n}}$, donc $n = ${n}$.`;
    }
    return this.makeExact('2N1', 2, 'Calcul sur les puissances',
      'Appliquer les règles de calcul sur les puissances entières relatives',
      `Écrire $A = ${st}$ sous la forme $${base}^n$, avec $n$ entier relatif. Donner $n$.`,
      String(n),
      kind === 0 ? '$a^m \\times a^p = a^{m + p}$ et $\\dfrac{a^m}{a^p} = a^{m - p}$.' : '$(a^m)^p = a^{m \\times p}$ et $a^m \\times a^p = a^{m + p}$.',
      h2, sol, { instruction: 'Saisir l\'entier relatif $n$.' });
  },

  _x2N1dec() {
    const i = this.randInt(0, 4);
    const j = this.randInt(0, 3);
    const d = 2 ** i * 5 ** j;
    if (d === 1) return this._x2N1dec();
    let n = this.randInt(1, 4 * d);
    while (this.gcd(n, d) !== 1 || n % d === 0) n = this.randInt(1, 4 * d);
    const k = Math.max(i, j);
    const mult = 10 ** k / d;
    return this.makeExact('2N1', 3, 'Écriture décimale d\'un nombre décimal',
      'Passer d\'une écriture fractionnaire à l\'écriture décimale',
      `La fraction $\\dfrac{${n}}{${d}}$ est irréductible et ${this._2nd_factorTex(d) === String(d) ? `$${d}$ est premier` : `$${d} = ${this._2nd_factorTex(d)}$`}. Justifier que c'est un nombre décimal et donner son écriture décimale.`,
      this._xd(n / d, 6),
      'Le dénominateur n\'a pas d\'autres facteurs premiers que 2 et 5.',
      `Multiplie le numérateur et le dénominateur par $${mult}$ pour obtenir le dénominateur $${10 ** k}$.`,
      `$\\dfrac{${n}}{${d}} = \\dfrac{${n} \\times ${mult}}{${d} \\times ${mult}} = \\dfrac{${n * mult}}{${10 ** k}} = ${this.dec(n / d, 6)}$ : c'est un nombre décimal.`,
      { instruction: 'Saisir l\'écriture décimale, par exemple 0,375.' });
  },

  _x2N1par() {
    const k = this.randInt(3, 40);
    const n = 2 * k + 1;
    const m = 2 * k * k + 2 * k;
    return this.makeExact('2N1', 3, 'Carré d\'un nombre impair',
      'Démontrer que le carré d\'un nombre impair est impair',
      `Un entier impair s'écrit $n = 2k + 1$ avec $k$ entier ; alors $n^2 = 2m + 1$ avec $m = 2k^2 + 2k$ entier, ce qui prouve que $n^2$ est impair. Pour $n = ${n}$, que vaut $m$ ?`,
      String(m),
      `Commence par trouver $k$ tel que $${n} = 2k + 1$.`,
      '$n^2 = (2k + 1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$.',
      `$${n} = 2 \\times ${k} + 1$, donc $k = ${k}$ et $m = 2 \\times ${k}^2 + 2 \\times ${k} = ${m}$. Vérification : $${n}^2 = ${n * n} = 2 \\times ${m} + 1$.`,
      { instruction: 'Saisir un nombre entier.' });
  },

  _x2N1lots() {
    const g = this.randChoice([6, 8, 9, 10, 12, 14, 15, 18, 21, 24]);
    let a = this.randInt(2, 11);
    let b = this.randInt(2, 11);
    while (this.gcd(a, b) !== 1 || a === b) { a = this.randInt(2, 11); b = this.randInt(2, 11); }
    const A = g * a;
    const B = g * b;
    const ctx = this.randChoice([['roses', 'tulipes', 'bouquets'], ['stylos', 'cahiers', 'lots'], ['croissants', 'pains au chocolat', 'plateaux']]);
    return this.makeExact('2N1', 4, 'Problème de partage (plus grand diviseur commun)',
      'Modéliser un problème à l\'aide des diviseurs communs',
      `On dispose de $${A}$ ${ctx[0]} et $${B}$ ${ctx[1]}. On veut composer le plus grand nombre possible de ${ctx[2]} identiques en utilisant tous les ${ctx[0]} et tous les ${ctx[1]}. Combien de ${ctx[2]} peut-on composer ?`,
      String(g),
      `Le nombre de ${ctx[2]} doit diviser à la fois $${A}$ et $${B}$.`,
      'Décompose les deux nombres en produits de facteurs premiers et repère les facteurs communs.',
      `$${A} = ${this._2nd_factorTex(A)}$ et $${B} = ${this._2nd_factorTex(B)}$. Le plus grand diviseur commun est $${g}$ : on compose $${g}$ ${ctx[2]}, chacun avec $${a}$ ${ctx[0]} et $${b}$ ${ctx[1]}.`,
      { instruction: 'Saisir un nombre entier.' });
  },

  // ---- 2N2 ----
  _x2N2dev() {
    const k = this.randNonZero(-5, 6);
    const a = this.randNonZero(-5, 5);
    const b = this.randNonZero(-7, 7);
    const m = this.randInt(1, 5);
    const c = this.randNonZero(-5, 5);
    const d = this.randNonZero(-7, 7);
    const A = k * a - m * c;
    const B = k * b - m * d;
    if (A === 0) return this._x2N2dev();
    const e = `${k === 1 ? '' : k === -1 ? '-' : k}${this._2nd_lin(a, b)} - ${m === 1 ? '' : m}${this._2nd_lin(c, d)}`;
    return this.makeExact('2N2', 1, 'Développer et réduire',
      'Distribuer un facteur et un signe « - » devant une parenthèse',
      `Développer et réduire $E = ${e}$. Le résultat s'écrit $ax + b$ : saisir $(a ; b)$.`,
      `(${A};${B})`,
      'Distribue chaque facteur sur la parenthèse qui le suit.',
      'Le signe « - » devant la seconde parenthèse change le signe de chacun de ses termes.',
      `$E = ${this.poly([[k * a, 'x'], [k * b, '']])} ${m === 1 ? '-' : `- ${m} \\times`} (${this.poly([[c, 'x'], [d, '']])})$ $= ${this.poly([[k * a, 'x'], [k * b, '']])} ${this.poly([[-m * c, 'x'], [-m * d, '']]).replace(/^(?!-)/, '+ ').replace(/^-/, '- ')} = ${this.poly([[A, 'x'], [B, '']])}$. Donc $(a ; b) = (${A} ; ${B})$.`,
      { instruction: 'Saisir (a ; b), par exemple (3;-2).' });
  },

  _x2N2fac() {
    const g = this.randInt(1, 6);
    let p = this.randInt(1, 6);
    let q = this.randNonZero(-9, 9);
    while (this.gcd(p, Math.abs(q)) !== 1) { p = this.randInt(1, 6); q = this.randNonZero(-9, 9); }
    const a = g * p;
    const b = g * q;
    return this.makeExact('2N2', 2, 'Factoriser $ax^2 + bx$',
      'Mettre en facteur le plus grand facteur commun',
      `Factoriser $F = ${this.polyX([a, b, 0])}$ sous la forme $kx(px + q)$, avec $k$ entier positif le plus grand possible. Saisir $(k ; p ; q)$.`,
      `(${g};${p};${q})`,
      'Les deux termes contiennent le facteur $x$.',
      `Cherche aussi le plus grand diviseur commun de $${a}$ et $${Math.abs(b)}$.`,
      `$${this.polyX([a, b, 0])} = ${g === 1 ? '' : g}x \\times ${this.coefStr(p, 'x')} ${q > 0 ? '+' : '-'} ${g === 1 ? '' : g}x \\times ${Math.abs(q)} = ${g === 1 ? '' : g}x${this._2nd_lin(p, q)}$. Donc $(k ; p ; q) = (${g} ; ${p} ; ${q})$.`,
      { instruction: 'Saisir (k ; p ; q), par exemple (2;3;-1).' });
  },

  _x2N2den() {
    const p = this.randNonZero(-7, 7);
    const a = this.randNonZero(-9, 9);
    const b = this.randNonZero(-6, 6);
    const lin = this.poly([[1, 'x'], [p, '']]);
    const minus = b < 0;
    const m = b;
    const n = a + b * p;
    return this.makeExact('2N2', 3, 'Réduire au même dénominateur',
      'Écrire une somme sous la forme d\'un seul quotient',
      `Pour $x \\neq ${-p}$, écrire $B = \\dfrac{${a}}{${lin}} ${minus ? '-' : '+'} ${Math.abs(b)}$ sous la forme $\\dfrac{mx + n}{${lin}}$. Saisir $(m ; n)$.`,
      `(${m};${n})`,
      `Écris $${Math.abs(b)} = \\dfrac{${Math.abs(b)}(${lin})}{${lin}}$.`,
      'Additionne (ou soustrais) les numérateurs une fois le dénominateur commun obtenu.',
      `$B = \\dfrac{${a}}{${lin}} ${minus ? '-' : '+'} \\dfrac{${Math.abs(b)}(${lin})}{${lin}} = \\dfrac{${a} ${minus ? '-' : '+'} (${this.poly([[Math.abs(b), 'x'], [Math.abs(b) * p, '']])})}{${lin}} = \\dfrac{${this.poly([[m, 'x'], [n, '']])}}{${lin}}$. Donc $(m ; n) = (${m} ; ${n})$.`,
      { instruction: 'Saisir (m ; n), par exemple (2;-5).' });
  },

  _x2N2form() {
    const al = this.randNonZero(-6, 6);
    let k = this.randInt(1, 7);
    while (k === Math.abs(al)) k = this.randInt(1, 7);
    const dev = this.polyX([1, -2 * al, al * al - k * k]);
    const can = `${this._2nd_lin(1, -al)}^2 - ${k * k}`;
    const fac = `${this._2nd_lin(1, -al - k)}${this._2nd_lin(1, -al + k)}`;
    const ask = this.randInt(0, 2);
    const q = ['Calculer $f(0)$.', 'Résoudre $f(x) = 0$.', `Calculer $f(${al})$.`][ask];
    const ans = [String(al * al - k * k), `(${al - k};${al + k})`, String(-k * k)][ask];
    const form = ['développée', 'factorisée', 'canonique'][ask];
    const sol = [
      `Avec la forme développée, $f(0)$ est le terme constant : $f(0) = ${al * al - k * k}$.`,
      `Avec la forme factorisée : $f(x) = 0 \\iff x ${this.formatSign(-al - k)} = 0$ ou $x ${this.formatSign(-al + k)} = 0$, soit $x = ${al + k}$ ou $x = ${al - k}$.`,
      `Avec la forme canonique : $f(${al}) = (${al} - ${this.paren(al)})^2 - ${k * k} = 0 - ${k * k} = ${-k * k}$.`
    ][ask];
    return this.makeExact('2N2', 4, 'Choisir la forme adaptée',
      'Choisir la forme développée, factorisée ou canonique selon la question',
      `On admet que, pour tout réel $x$ : $f(x) = ${dev} = ${can} = ${fac}$. En choisissant la forme la plus adaptée, ${q.charAt(0).toLowerCase() + q.slice(1)}`,
      ans,
      'Chaque forme est adaptée à un type de question.',
      `Ici, la forme ${form} donne la réponse presque sans calcul.`,
      sol,
      { instruction: ask === 1 ? 'Saisir les deux solutions dans l\'ordre croissant : (x1 ; x2).' : 'Saisir un nombre entier.' });
  },

  // ---- 2N3 ----
  _x2N3ent() {
    const a = this.randInt(-9, 5);
    const b = a + this.randInt(2, 9);
    const lc = Math.random() < 0.5;
    const rc = Math.random() < 0.5;
    let cnt = 0;
    for (let x = a; x <= b; x++) if ((x > a || lc) && (x < b || rc)) cnt++;
    const I = this._2nd_iv(lc, a, b, rc);
    return this.makeExact('2N3', 1, 'Entiers d\'un intervalle',
      'Déterminer si un nombre appartient à un intervalle',
      `Combien de nombres entiers relatifs appartiennent à l'intervalle $I = ${I}$ ?`,
      String(cnt),
      'Un crochet tourné vers l\'intérieur inclut la borne, un crochet tourné vers l\'extérieur l\'exclut.',
      `Liste les entiers de $${a}$ à $${b}$, puis retire les bornes exclues.`,
      `De $${a}$ à $${b}$ il y a $${b - a + 1}$ entiers. ${lc ? `$${a}$ est inclus` : `$${a}$ est exclu`} et ${rc ? `$${b}$ est inclus` : `$${b}$ est exclu`}, donc $I$ contient $${cnt}$ entiers.`,
      { instruction: 'Saisir un nombre entier.' });
  },

  _x2N3cr(tier) {
    const a = this.randInt(-9, 6);
    const b = a + (tier >= 3 ? this.randInt(1, 11) : 2 * this.randInt(1, 6));
    const c = (a + b) / 2;
    const r = (b - a) / 2;
    const large = Math.random() < 0.6;
    const I = this._2nd_iv(large, a, b, large);
    return this.makeExact('2N3', tier, 'Centre et rayon d\'un intervalle',
      'Caractériser un intervalle par $|x - c| \\le r$',
      `Déterminer les réels $c$ et $r$ tels que : $x \\in ${I} \\iff |x - c| ${large ? '\\le' : '<'} r$. Saisir $(c ; r)$.`,
      `(${this._xd(c)};${this._xd(r)})`,
      '$|x - c|$ est la distance entre $x$ et $c$ : $c$ est le centre de l\'intervalle.',
      'Le centre est la moyenne des bornes ; le rayon est la moitié de la longueur.',
      `$c = \\dfrac{${a} + ${this.paren(b)}}{2} = ${this.dec(c)}$ et $r = \\dfrac{${b} - ${this.paren(a)}}{2} = ${this.dec(r)}$. On a bien $${I} = ${large ? '[' : ']'}${this.dec(c)} - ${this.dec(r)} ; ${this.dec(c)} + ${this.dec(r)}${large ? ']' : '['}$ (bornes ${large ? 'incluses' : 'exclues'}).`,
      { instruction: 'Saisir (c ; r), par exemple (1,5;4).' });
  },

  _x2N3sqrt() {
    let N = this.randInt(2, 99);
    while (Number.isInteger(Math.sqrt(N))) N = this.randInt(2, 99);
    let k = Math.floor(Math.sqrt(N * 100));
    while (k * k > N * 100) k--;
    while ((k + 1) * (k + 1) <= N * 100) k++;
    const e = Math.floor(Math.sqrt(N));
    return this.makeExact('2N3', 3, 'Encadrement d\'une racine carrée (balayage)',
      'Encadrer $\\sqrt{N}$ d\'amplitude $0{,}1$ en comparant des carrés',
      `On cherche le décimal $a$, avec un chiffre après la virgule, tel que $a \\le \\sqrt{${N}} < a + 0{,}1$. Donner $a$.`,
      this._xd(k / 10),
      `Commence par encadrer $\\sqrt{${N}}$ entre deux entiers consécutifs.`,
      `Pour $a \\ge 0$ : $a \\le \\sqrt{${N}} \\iff a^2 \\le ${N}$. Teste $${e}{,}1$, $${e}{,}2$, … (balayage).`,
      `$${e}^2 = ${e * e} \\le ${N} < ${(e + 1) ** 2} = ${e + 1}^2$. Puis $${this.dec(k / 10)}^2 = ${this.dec((k * k) / 100)} \\le ${N} < ${this.dec(((k + 1) * (k + 1)) / 100)} = ${this.dec((k + 1) / 10)}^2$, donc $${this.dec(k / 10)} \\le \\sqrt{${N}} < ${this.dec((k + 1) / 10)}$ et $a = ${this.dec(k / 10)}$.`,
      { instruction: 'Saisir un nombre décimal, par exemple 4,7.' });
  },

  _x2N3cnt() {
    const a = this.randInt(-9, 0);
    const c = a + this.randInt(1, 5);
    const b = c + this.randInt(1, 6);
    const d = b + this.randInt(1, 6);
    const [l1, r1, l2, r2] = [0, 0, 0, 0].map(() => Math.random() < 0.5);
    const askInter = Math.random() < 0.6;
    const inI = (x) => (x > a || (x === a && l1)) && (x < b || (x === b && r1));
    const inJ = (x) => (x > c || (x === c && l2)) && (x < d || (x === d && r2));
    let cnt = 0;
    for (let x = a; x <= d; x++) if (askInter ? inI(x) && inJ(x) : inI(x) || inJ(x)) cnt++;
    const I = this._2nd_iv(l1, a, b, r1);
    const J = this._2nd_iv(l2, c, d, r2);
    const res = askInter ? this._2nd_iv(l2, c, b, r1) : this._2nd_iv(l1, a, d, r2);
    return this.makeExact('2N3', 4, askInter ? 'Entiers d\'une intersection d\'intervalles' : 'Entiers d\'une réunion d\'intervalles',
      'Déterminer intersection et réunion d\'intervalles',
      `On donne $I = ${I}$ et $J = ${J}$. Combien de nombres entiers appartiennent à $I ${askInter ? '\\cap' : '\\cup'} J$ ?`,
      String(cnt),
      askInter ? 'Un réel est dans $I \\cap J$ s\'il est à la fois dans $I$ et dans $J$.' : 'Un réel est dans $I \\cup J$ s\'il est dans $I$ ou dans $J$ (au moins l\'un des deux).',
      `Écris d'abord $I ${askInter ? '\\cap' : '\\cup'} J$ sous forme d'intervalle, puis compte ses entiers.`,
      `Sur une droite graduée : $I ${askInter ? '\\cap' : '\\cup'} J = ${res}$. Cet intervalle contient $${cnt}$ entiers.`,
      { instruction: 'Saisir un nombre entier.' });
  },

  // ---- 2N4 ----
  _x2N4lin() {
    const a = this.randNonZero(-7, 7);
    let c = this.randNonZero(-7, 7);
    while (c === a) c = this.randNonZero(-7, 7);
    const b = this.randInt(-12, 12);
    const d = this.randInt(-12, 12);
    if (b === d) return this._x2N4lin();
    return this.makeExact('2N4', 1, 'Équation du premier degré',
      'Résoudre $ax + b = cx + d$',
      `Résoudre dans $\\mathbb{R}$ l'équation $${this.poly([[a, 'x'], [b, '']])} = ${this.poly([[c, 'x'], [d, '']])}$.`,
      this._xf(d - b, a - c),
      'Regroupe les termes en $x$ dans un membre et les constantes dans l\'autre.',
      `Tu dois obtenir une équation de la forme $${this.coefStr(a - c, 'x')} = ${d - b}$.`,
      `$${this.poly([[a, 'x'], [b, '']])} = ${this.poly([[c, 'x'], [d, '']])} \\iff ${this.coefStr(a - c, 'x')} = ${d - b} \\iff x = ${this.frac(d - b, a - c)}$.`);
  },

  _x2N4quo(tier) {
    const a = this.randNonZero(-5, 5);
    const b = this.randInt(-9, 9);
    const c = this.randInt(1, 4);
    const d = this.randNonZero(-9, 9);
    const k = this.randNonZero(-4, 4);
    if (a === k * c || a * d === b * c) return this._x2N4quo(tier);
    const xn = k * d - b;
    const xd = a - k * c;
    if (c * xn + d * xd === 0) return this._x2N4quo(tier);
    const num = this.poly([[a, 'x'], [b, '']]);
    const den = this.poly([[c, 'x'], [d, '']]);
    return this.makeExact('2N4', tier, 'Équation quotient',
      'Résoudre $\\frac{A(x)}{B(x)} = k$ en tenant compte de la valeur interdite',
      `Résoudre l'équation $\\dfrac{${num}}{${den}} = ${k}$.`,
      this._xf(xn, xd),
      `Valeur interdite : $${den} \\neq 0$, soit $x \\neq ${this.frac(-d, c)}$.`,
      `Pour $x \\neq ${this.frac(-d, c)}$, l'équation équivaut à $${num} = ${k}(${den})$.`,
      `Pour $x \\neq ${this.frac(-d, c)}$ : $${num} = ${this.poly([[k * c, 'x'], [k * d, '']])} \\iff ${this.coefStr(xd, 'x')} = ${xn} \\iff x = ${this.frac(xn, xd)}$. Cette valeur n'est pas la valeur interdite : c'est l'unique solution.`);
  },

  _x2N4ent() {
    const a = this.randNonZero(-6, 6);
    let c = this.randNonZero(-6, 6);
    while (c === a) c = this.randNonZero(-6, 6);
    const b = this.randInt(-15, 15);
    const d = this.randInt(-15, 15);
    const strict = Math.random() < 0.5;
    const sym = strict ? '>' : '\\ge';
    const ok = (x) => (strict ? a * x + b > c * x + d : a * x + b >= c * x + d);
    // solutions : x > m/k (k > 0) ou x < m/k (k < 0)
    const k = a - c;
    const m = d - b;
    const wantMin = k > 0;
    let best = null;
    for (let x = -60; x <= 60; x++) if (ok(x)) { if (wantMin && best === null) best = x; if (!wantMin) best = x; }
    return this.makeExact('2N4', 2, 'Entier solution d\'une inéquation',
      'Résoudre une inéquation du premier degré et l\'exploiter',
      `Déterminer le ${wantMin ? 'plus petit' : 'plus grand'} nombre entier solution de l'inéquation $${this.poly([[a, 'x'], [b, '']])} ${sym} ${this.poly([[c, 'x'], [d, '']])}$.`,
      String(best),
      'Résous d\'abord l\'inéquation : regroupe les $x$ dans un membre.',
      `On obtient $${this.coefStr(k, 'x')} ${sym} ${m}$ ; attention si tu divises par un nombre négatif.`,
      `$${this.poly([[a, 'x'], [b, '']])} ${sym} ${this.poly([[c, 'x'], [d, '']])} \\iff ${this.coefStr(k, 'x')} ${sym} ${m} \\iff x ${k > 0 ? sym : (strict ? '<' : '\\le')} ${this.frac(m, k)}$${k < 0 ? ' (division par un négatif : le sens change)' : ''}. Le ${wantMin ? 'plus petit' : 'plus grand'} entier qui convient est $${best}$.`,
      { instruction: 'Saisir un nombre entier.' });
  },

  _x2N4cnt() {
    let r1 = this.randInt(-7, 7);
    let r2 = this.randInt(-7, 7);
    while (Math.abs(r2 - r1) < 2) r2 = this.randInt(-7, 7);
    if (r1 > r2) [r1, r2] = [r2, r1];
    const a = this.randChoice([1, -1, 2, -2]);
    const c = this.randChoice([1, -1, 3]);
    const f = (x) => (a * x - a * r1) * (c * x - c * r2);
    const neg = a * c > 0; // produit négatif entre les racines
    const large = Math.random() < 0.5;
    const sym = neg ? (large ? '\\le' : '<') : (large ? '\\ge' : '>');
    const ok = (x) => (neg ? (large ? f(x) <= 0 : f(x) < 0) : (large ? f(x) >= 0 : f(x) > 0));
    let cnt = 0;
    for (let x = r1 - 2; x <= r2 + 2; x++) if (ok(x)) cnt++;
    const e = `${this._2nd_lin(a, -a * r1)}${this._2nd_lin(c, -c * r2)}`;
    return this.makeExact('2N4', 3, 'Entiers solutions d\'une inéquation produit',
      'Résoudre une inéquation produit à l\'aide d\'un tableau de signes',
      `Combien de nombres entiers sont solutions de l'inéquation $${e} ${sym} 0$ ?`,
      String(cnt),
      'Dresse le tableau de signes du produit.',
      `Les facteurs s'annulent en $${r1}$ et $${r2}$.`,
      `Le produit est du signe de $${a * c}$ à l'extérieur des racines, donc ${neg ? 'négatif' : 'positif'} entre $${r1}$ et $${r2}$. L'ensemble des solutions est $${this._2nd_iv(large, r1, r2, large)}$, qui contient $${cnt}$ entiers.`,
      { instruction: 'Saisir un nombre entier.' });
  },

  _x2N4mod() {
    const ctx = this.randChoice([['une salle de sport', 'séances'], ['un cinéma', 'places'], ['une piscine', 'entrées'], ['une médiathèque', 'locations']]);
    const q = this.randInt(7, 15);
    const p = q - this.randInt(2, 5);
    const F = this.randInt(15, 90);
    const n0 = Math.floor(F / (q - p)) + 1;
    return this.makeExact('2N4', 4, 'Modéliser par une inéquation',
      'Modéliser un problème par une inéquation du premier degré',
      `Pour ${ctx[0]}, deux tarifs sont proposés. Tarif A : abonnement de $${F}$ € puis $${p}$ € par ${ctx[1].slice(0, -1)}. Tarif B : $${q}$ € par ${ctx[1].slice(0, -1)}, sans abonnement. À partir de combien de ${ctx[1]} le tarif A est-il strictement plus avantageux ?`,
      String(n0),
      `Pour $n$ ${ctx[1]}, le tarif A coûte $${F} + ${p}n$ et le tarif B coûte $${q}n$.`,
      `Résous l'inéquation $${F} + ${p}n < ${q}n$ avec $n$ entier.`,
      `$${F} + ${p}n < ${q}n \\iff ${F} < ${q - p}n \\iff n > ${this.frac(F, q - p)}$${Number.isInteger(F / (q - p)) ? '' : ` $\\approx ${this.dec(F / (q - p), 2)}$`}. Le plus petit entier qui convient est $${n0}$ : à partir de $${n0}$ ${ctx[1]}, le tarif A est plus avantageux.`,
      { instruction: 'Saisir un nombre entier.' });
  },

  // ---- 2A1 ----
  _x2A1pt() {
    const x0 = this.randNonZero(-4, 4);
    const c = this.randInt(-8, 8);
    const a = this.randNonZero(-4, 4);
    const y0 = a * x0 * x0 + c;
    return this.makeExact('2A1', 2, 'Point d\'une courbe et paramètre',
      'Exploiter l\'équation $y = f(x)$ d\'une courbe',
      `Soit $f(x) = ax^2 ${this.formatSign(c)}$, où $a$ est un réel. Déterminer $a$ pour que le point $A(${x0} ; ${y0})$ appartienne à la courbe représentative de $f$.`.replace(' + 0$', '$'),
      String(a),
      '$A$ appartient à la courbe si et seulement si $y_A = f(x_A)$.',
      `Écris l'égalité $f(${x0}) = ${y0}$ et résous-la.`,
      `$f(${x0}) = a \\times ${this.paren(x0)}^2 ${this.formatSign(c)} = ${this.coefStr(x0 * x0, 'a')} ${this.formatSign(c)}$. L'équation $${this.coefStr(x0 * x0, 'a')} ${this.formatSign(c)} = ${y0}$ donne $${this.coefStr(x0 * x0, 'a')} = ${y0 - c}$, soit $a = ${a}$.`.replace(/ \+ 0/g, ''),
      { instruction: 'Saisir la valeur de $a$.' });
  },

  _x2A1int() {
    const a = this.randNonZero(-5, 5);
    let c = this.randNonZero(-5, 5);
    while (c === a) c = this.randNonZero(-5, 5);
    const X = this.randInt(-5, 5);
    const Y = this.randInt(-8, 8);
    const b = Y - a * X;
    const d = Y - c * X;
    return this.makeExact('2A1', 3, 'Intersection de deux courbes',
      'Résoudre algébriquement $f(x) = g(x)$',
      `Soit $f(x) = ${this.poly([[a, 'x'], [b, '']])}$ et $g(x) = ${this.poly([[c, 'x'], [d, '']])}$. Déterminer les coordonnées du point d'intersection des courbes de $f$ et $g$.`,
      `(${X};${Y})`,
      'L\'abscisse du point d\'intersection est la solution de $f(x) = g(x)$.',
      `Résous $${this.poly([[a, 'x'], [b, '']])} = ${this.poly([[c, 'x'], [d, '']])}$, puis calcule l'ordonnée.`,
      `$f(x) = g(x) \\iff ${this.coefStr(a - c, 'x')} = ${d - b} \\iff x = ${X}$. Puis $f(${X}) = ${Y}$ (et $g(${X}) = ${Y}$). Le point d'intersection est $(${X} ; ${Y})$.`,
      { instruction: 'Saisir les coordonnées sous la forme (x ; y).' });
  },

  _x2A1vi() {
    const a = this.randNonZero(-6, 6);
    const b = this.randNonZero(-12, 12);
    const p = this.randNonZero(-9, 9);
    const q = this.randInt(-9, 9);
    const lin = this.poly([[a, 'x'], [b, '']]);
    return this.makeExact('2A1', 3, 'Valeur interdite',
      'Déterminer l\'ensemble de définition d\'une fonction rationnelle',
      `Soit $f(x) = \\dfrac{${this.poly([[p, 'x'], [q, '']]) || '0'}}{${lin}}$. Quel est le seul réel qui n'a pas d'image par $f$ ?`,
      this._xf(-b, a),
      'On ne peut pas diviser par 0.',
      `Résous l'équation $${lin} = 0$.`,
      `$${lin} = 0 \\iff x = ${this.frac(-b, a)}$. Ce réel n'a pas d'image : $\\mathcal{D}_f = \\mathbb{R} \\setminus \\left\\{${this.frac(-b, a)}\\right\\}$.`);
  },

  _x2A1mod() {
    const P = 2 * this.randInt(6, 30);
    const h = P / 2;
    const x0 = this.randInt(1, h - 1);
    const ask = this.randInt(0, 1);
    return this.makeExact('2A1', 4, 'Modéliser par une fonction',
      'Modéliser une situation par une fonction et son ensemble de définition',
      `Un rectangle a un périmètre de $${P}$ cm. On note $x$ la longueur d'un de ses côtés (en cm) et $A(x)$ son aire. On admet que $A(x) = x(${h} - x)$. ${ask === 0 ? `Calculer $A(${x0})$.` : 'L\'ensemble de définition de $A$ est un intervalle $]0 ; b[$. Donner $b$.'}`,
      ask === 0 ? String(x0 * (h - x0)) : String(h),
      ask === 0 ? 'Remplace $x$ par la valeur donnée.' : 'Les deux côtés du rectangle doivent avoir une longueur strictement positive.',
      ask === 0 ? `L'autre côté mesure $${h} - ${x0}$ cm.` : `Le demi-périmètre vaut $${h}$ cm : l'autre côté mesure $${h} - x$.`,
      ask === 0 ? `$A(${x0}) = ${x0} \\times (${h} - ${x0}) = ${x0} \\times ${h - x0} = ${x0 * (h - x0)}$ cm².` : `On doit avoir $x > 0$ et $${h} - x > 0$, soit $0 < x < ${h}$. Donc $\\mathcal{D}_A = ]0 ; ${h}[$ et $b = ${h}$.`,
      { instruction: 'Saisir un nombre entier.' });
  },

  // ---- 2A2 ----
  _x2A2tab(tier) {
    const xs = [this.randInt(-6, -3)];
    for (let i = 0; i < 3; i++) xs.push(xs[i] + this.randInt(1, 4));
    const up = Math.random() < 0.5;
    const v = [this.randInt(-6, 6)];
    for (let i = 1; i < 4; i++) v.push(v[i - 1] + (((i % 2 === 1) === up) ? 1 : -1) * this.randInt(1, 7));
    const desc = [0, 1, 2].map((i) => `${((i % 2 === 0) === up) ? 'croissante' : 'décroissante'} sur $[${xs[i]} ; ${xs[i + 1]}]$`).join(', ');
    const vals = xs.map((x, i) => `$f(${x}) = ${v[i]}$`).join(', ');
    const sub = tier >= 2 && Math.random() < 0.6;
    const lo = sub ? 1 : 0;
    const hi = 3;
    const askMax = Math.random() < 0.5;
    const seg = v.slice(lo, hi + 1);
    const res = askMax ? Math.max(...seg) : Math.min(...seg);
    return this.makeExact('2A2', tier, 'Extremum à partir des variations',
      'Exploiter un tableau de variations pour trouver un extremum',
      `Une fonction $f$ est définie sur $[${xs[0]} ; ${xs[3]}]$. Elle est ${desc}, avec ${vals}. Quel est le ${askMax ? 'maximum' : 'minimum'} de $f$ sur $[${xs[lo]} ; ${xs[hi]}]$ ?`,
      String(res),
      'Dresse le tableau de variations : les extremums sont atteints aux bornes ou aux changements de sens.',
      `Compare les valeurs de $f$ aux points $${xs.slice(lo).join('$, $')}$.`,
      `Sur $[${xs[lo]} ; ${xs[hi]}]$, les valeurs candidates sont ${xs.slice(lo).map((x, i) => `$f(${x}) = ${v[lo + i]}$`).join(', ')}. Le ${askMax ? 'maximum' : 'minimum'} est $${res}$.`,
      { instruction: 'Saisir un nombre entier.' });
  },

  _x2A2aff() {
    const m = this.randNonZero(-5, 5);
    const p = this.randInt(-9, 9);
    const a = this.randInt(-6, 2);
    const b = a + this.randInt(1, 6);
    const askMax = Math.random() < 0.5;
    const fa = m * a + p;
    const fb = m * b + p;
    const res = askMax ? Math.max(fa, fb) : Math.min(fa, fb);
    const at = res === fa ? a : b;
    return this.makeExact('2A2', 1, 'Extremum d\'une fonction affine',
      'Relier sens de variation et extremum d\'une fonction affine',
      `Soit $f(x) = ${this.poly([[m, 'x'], [p, '']])}$ définie sur $[${a} ; ${b}]$. Quel est le ${askMax ? 'maximum' : 'minimum'} de $f$ sur cet intervalle ?`,
      String(res),
      'Une fonction affine est monotone : son extremum est atteint à une borne.',
      `Le coefficient directeur est $${m}$ : $f$ est ${m > 0 ? 'croissante' : 'décroissante'}.`,
      `$f$ est ${m > 0 ? 'croissante' : 'décroissante'} ($m = ${m}$). $f(${a}) = ${fa}$ et $f(${b}) = ${fb}$ : le ${askMax ? 'maximum' : 'minimum'} est $${res}$, atteint en $x = ${at}$.`,
      { instruction: 'Saisir un nombre entier.' });
  },

  _x2A2opt(tier) {
    if (tier <= 3) {
      const P = 4 * this.randInt(3, 25);
      const c = P / 4;
      const ask = this.randInt(0, 1);
      return this.makeExact('2A2', tier, 'Problème d\'optimisation',
        'Déterminer un maximum à l\'aide de la forme canonique',
        `Un rectangle a un périmètre de $${P}$ m. On note $x$ la longueur d'un côté ; son aire est $A(x) = x(${P / 2} - x) = -(x - ${c})^2 + ${c * c}$ pour $x \\in ]0 ; ${P / 2}[$. ${ask === 0 ? 'Quelle est l\'aire maximale (en m²) ?' : 'Pour quelle valeur de $x$ l\'aire est-elle maximale ?'}`,
        String(ask === 0 ? c * c : c),
        'Un carré $-(x - c)^2$ est toujours négatif ou nul.',
        `$A(x) \\le ${c * c}$ pour tout $x$ : cherche quand l'égalité a lieu.`,
        `$-(x - ${c})^2 \\le 0$, donc $A(x) \\le ${c * c}$, avec égalité pour $x = ${c}$. L'aire maximale est $${c * c}$ m², atteinte pour $x = ${c}$ (le rectangle est un carré).`,
        { instruction: ask === 0 ? 'Saisir un nombre entier.' : 'Saisir la valeur de $x$.' });
    }
    const L = 4 * this.randInt(5, 30);
    const y = L / 4;
    const xL = L / 2;
    const ask = this.randInt(0, 1);
    return this.makeExact('2A2', 4, 'Problème d\'optimisation (enclos)',
      'Modéliser et optimiser à l\'aide du sens de variation',
      `On dispose de $${L}$ m de grillage pour clôturer un enclos rectangulaire le long d'un mur (le côté le long du mur n'est pas grillagé). On note $y$ la longueur des deux côtés perpendiculaires au mur : le troisième côté mesure $${L} - 2y$ et l'aire vaut $A(y) = y(${L} - 2y)$. ${ask === 0 ? 'Quelle est l\'aire maximale de l\'enclos (en m²) ?' : 'Pour quelle valeur de $y$ l\'aire est-elle maximale ?'}`,
      ask === 0 ? this._xd(y * xL) : this._xd(y),
      '$A$ est une fonction polynôme du second degré : son extremum est atteint au milieu de ses racines.',
      `$A(y) = 0$ pour $y = 0$ et $y = ${this.dec(L / 2)}$.`,
      `$A(y) = -2y^2 + ${L}y$ : coefficient de $y^2$ négatif, donc un maximum atteint pour $y = \\dfrac{0 + ${this.dec(L / 2)}}{2} = ${this.dec(y)}$. Le côté parallèle au mur mesure $${L} - 2 \\times ${this.dec(y)} = ${this.dec(xL)}$ m et l'aire maximale vaut $${this.dec(y)} \\times ${this.dec(xL)} = ${this.dec(y * xL)}$ m².`,
      { instruction: 'Saisir la valeur (entier ou décimal).' });
  },

  // ---- 2A3 ----
  _x2A3sq(tier) {
    const a = this.randNonZero(-6, 6);
    const r = this.randInt(1, 8);
    const lin = this.poly([[1, 'x'], [-a, '']]);
    if (tier <= 3) {
      return this.makeExact('2A3', tier, 'Équation $(x - a)^2 = k$',
        'Résoudre une équation avec la fonction carré',
        `Résoudre dans $\\mathbb{R}$ l'équation $(${lin})^2 = ${r * r}$.`,
        `(${a - r};${a + r})`,
        'L\'équation $X^2 = k$ (avec $k > 0$) a deux solutions : $X = -\\sqrt{k}$ et $X = \\sqrt{k}$.',
        `Pose $X = ${lin}$ et résous $X^2 = ${r * r}$.`,
        `$(${lin})^2 = ${r * r} \\iff ${lin} = -${r}$ ou $${lin} = ${r}$, soit $x = ${a - r}$ ou $x = ${a + r}$.`,
        { instruction: 'Saisir les deux solutions dans l\'ordre croissant : (x1 ; x2).' });
    }
    const less = Math.random() < 0.5;
    const large = Math.random() < 0.5;
    const sym = less ? (large ? '\\le' : '<') : (large ? '\\ge' : '>');
    const S = less ? this._2nd_iv(large, a - r, a + r, large) : `${this._2nd_iv(false, '-\\infty', a - r, large)} \\cup ${this._2nd_iv(large, a + r, '+\\infty', false)}`;
    return this.makeExact('2A3', 4, 'Inéquation $(x - a)^2 \\le k$',
      'Résoudre une inéquation avec la fonction carré',
      `L'ensemble des solutions de l'inéquation $(${lin})^2 ${sym} ${r * r}$ est ${less ? 'un intervalle' : 'la réunion de deux intervalles'} dont les bornes finies sont $m < M$. Saisir $(m ; M)$.`,
      `(${a - r};${a + r})`,
      `Pose $X = ${lin}$ : résous d'abord $X^2 ${sym} ${r * r}$ avec la parabole $y = X^2$.`,
      `$X^2 ${sym} ${r * r}$ équivaut à ${less ? `$-${r} ${large ? '\\le' : '<'} X ${large ? '\\le' : '<'} ${r}$` : `$X ${large ? '\\le' : '<'} -${r}$ ou $X ${large ? '\\ge' : '>'} ${r}$`}.`,
      `On revient à $x = X ${this.formatSign(a)}$ : $S = ${S}$. Les bornes sont $${a - r}$ et $${a + r}$.`,
      { instruction: 'Saisir (m ; M), par exemple (-3;5).' });
  },

  _x2A3sqrt() {
    const a = this.randNonZero(-5, 5);
    const k = this.randInt(1, 7);
    const b = this.randInt(-9, 9);
    const lin = this.poly([[a, 'x'], [b, '']]);
    return this.makeExact('2A3', 4, 'Équation $\\sqrt{ax + b} = k$',
      'Résoudre une équation avec la fonction racine carrée',
      `Résoudre l'équation $\\sqrt{${lin}} = ${k}$.`,
      this._xf(k * k - b, a),
      'Pour $k \\ge 0$ : $\\sqrt{X} = k \\iff X = k^2$.',
      `Résous $${lin} = ${k * k}$.`,
      `Comme $${k} \\ge 0$ : $\\sqrt{${lin}} = ${k} \\iff ${lin} = ${k * k} \\iff ${this.coefStr(a, 'x')} = ${k * k - b} \\iff x = ${this.frac(k * k - b, a)}$. (Pour cette valeur, $${lin} = ${k * k} \\ge 0$.)`);
  },

  // ---- 2G1 ----
  _x2G1pyt() {
    const [p, q, h] = this.randChoice([[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15], [12, 16, 20], [7, 24, 25]]);
    const sw = Math.random() < 0.5;
    const dx = (sw ? p : q) * this.randChoice([1, -1]);
    const dy = (sw ? q : p) * this.randChoice([1, -1]);
    const A = [this.randInt(-9, 9), this.randInt(-9, 9)];
    const B = [A[0] + dx, A[1] + dy];
    return this.makeExact('2G1', 2, 'Distance entière entre deux points',
      'Calculer une distance dans un repère orthonormé',
      `Dans un repère orthonormé, on donne $A(${A[0]} ; ${A[1]})$ et $B(${B[0]} ; ${B[1]})$. Calculer la distance $AB$.`,
      String(h),
      'Formule : $AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$.',
      'Calcule d\'abord les différences des abscisses et des ordonnées.',
      `$x_B - x_A = ${dx}$ et $y_B - y_A = ${dy}$, donc $AB = \\sqrt{${this.paren(dx)}^2 + ${this.paren(dy)}^2} = \\sqrt{${dx * dx} + ${dy * dy}} = \\sqrt{${h * h}} = ${h}$.`,
      { instruction: 'Saisir la distance (nombre entier).' });
  },

  _x2G1cc() {
    const A = [this.randInt(-5, 5), this.randInt(-5, 5)];
    const p = this.randNonZero(-4, 4);
    const q = this.randNonZero(-4, 4);
    const k = this.randChoice([1, 2, -2, 3]);
    const B = [A[0] + p, A[1] + q];
    const C = [A[0] - k * q, A[1] + k * p];
    const I = [(B[0] + C[0]) / 2, (B[1] + C[1]) / 2];
    return this.makeExact('2G1', 3, 'Centre du cercle circonscrit (triangle rectangle)',
      'Démontrer qu\'un triangle est rectangle et utiliser le milieu de l\'hypoténuse',
      `On donne $A(${A[0]} ; ${A[1]})$, $B(${B[0]} ; ${B[1]})$ et $C(${C[0]} ; ${C[1]})$ dans un repère orthonormé. On admet que le triangle $ABC$ est rectangle en $A$. Déterminer les coordonnées du centre $K$ de son cercle circonscrit.`,
      `(${this._xd(I[0])};${this._xd(I[1])})`,
      'Le cercle circonscrit à un triangle rectangle a pour diamètre l\'hypoténuse.',
      'Le centre est donc le milieu de $[BC]$.',
      `Vérification : $AB^2 + AC^2 = ${p * p + q * q} + ${k * k * (p * p + q * q)} = ${(1 + k * k) * (p * p + q * q)} = BC^2$. Le centre $K$ est le milieu de l'hypoténuse $[BC]$ : $x_K = \\dfrac{${B[0]} + ${this.paren(C[0])}}{2} = ${this.dec(I[0])}$ et $y_K = \\dfrac{${B[1]} + ${this.paren(C[1])}}{2} = ${this.dec(I[1])}$.`,
      { instruction: 'Saisir les coordonnées sous la forme (x ; y), par exemple (1,5;-2).' });
  },

  _x2G1eq() {
    const A = [this.randInt(-6, 6), this.randInt(-6, 6)];
    const B = [this.randInt(-6, 6), this.randInt(-6, 6)];
    if (A[0] === B[0]) return this._x2G1eq();
    const num = B[0] ** 2 + B[1] ** 2 - A[0] ** 2 - A[1] ** 2;
    const den = 2 * (B[0] - A[0]);
    return this.makeExact('2G1', 4, 'Point équidistant sur un axe',
      'Traduire une égalité de distances par une équation',
      `Dans un repère orthonormé, on donne $A(${A[0]} ; ${A[1]})$ et $B(${B[0]} ; ${B[1]})$. Déterminer l'abscisse $x$ du point $M(x ; 0)$ de l'axe des abscisses tel que $MA = MB$.`,
      this._xf(num, den),
      '$MA = MB \\iff MA^2 = MB^2$ (distances positives).',
      'Écris $MA^2 = MB^2$ avec la formule de la distance, puis développe : les termes en $x^2$ se simplifient.',
      `$MA^2 = MB^2 \\iff x^2 ${this.formatSign(-2 * A[0])}x + ${A[0] ** 2 + A[1] ** 2} = x^2 ${this.formatSign(-2 * B[0])}x + ${B[0] ** 2 + B[1] ** 2} \\iff ${this.coefStr(2 * (B[0] - A[0]), 'x')} = ${num} \\iff x = ${this.frac(num, den)}$.`.replace(/\+ -/g, '- ').replace(/ \+ 0x/g, '').replace(/ - 0x/g, '').replace(/ \+ 0 =/g, ' =').replace(/ \+ 0\$/g, '$'));
  },

  // ---- 2G2 ----
  _x2G2B() {
    const A = [this.randInt(-8, 8), this.randInt(-8, 8)];
    const u = [this.randNonZero(-7, 7), this.randNonZero(-7, 7)];
    const B = [A[0] + u[0], A[1] + u[1]];
    return this.makeExact('2G2', 1, 'Extrémité d\'un vecteur',
      'Utiliser les coordonnées de $\\overrightarrow{AB}$',
      `On donne $A(${A[0]} ; ${A[1]})$ et $\\overrightarrow{AB}\\begin{pmatrix} ${u[0]} \\\\ ${u[1]} \\end{pmatrix}$. Déterminer les coordonnées du point $B$.`,
      `(${B[0]};${B[1]})`,
      '$\\overrightarrow{AB}\\begin{pmatrix} x_B - x_A \\\\ y_B - y_A \\end{pmatrix}$.',
      'Donc $x_B = x_A + x_{\\overrightarrow{AB}}$ (de même pour les ordonnées).',
      `$x_B = ${A[0]} + ${this.paren(u[0])} = ${B[0]}$ et $y_B = ${A[1]} + ${this.paren(u[1])} = ${B[1]}$, donc $B(${B[0]} ; ${B[1]})$.`,
      { instruction: 'Saisir les coordonnées sous la forme (x ; y).' });
  },

  _x2G2det() {
    const u = [this.randNonZero(-7, 7), this.randNonZero(-7, 7)];
    const v = [this.randNonZero(-7, 7), this.randNonZero(-7, 7)];
    const det = u[0] * v[1] - u[1] * v[0];
    return this.makeExact('2G2', 2, 'Calcul d\'un déterminant',
      'Calculer le déterminant de deux vecteurs',
      `On donne $\\vec{u}\\begin{pmatrix} ${u[0]} \\\\ ${u[1]} \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix} ${v[0]} \\\\ ${v[1]} \\end{pmatrix}$ dans une base orthonormée. Calculer $\\det(\\vec{u}, \\vec{v})$.`,
      String(det),
      '$\\det(\\vec{u}, \\vec{v}) = xy\' - yx\'$ pour $\\vec{u}(x ; y)$ et $\\vec{v}(x\' ; y\')$.',
      'Attention à l\'ordre des produits et aux signes.',
      `$\\det(\\vec{u}, \\vec{v}) = ${this.paren(u[0])} \\times ${this.paren(v[1])} - ${this.paren(u[1])} \\times ${this.paren(v[0])} = ${u[0] * v[1]} - ${this.paren(u[1] * v[0])} = ${det}$.${det === 0 ? ' Les vecteurs sont colinéaires.' : ''}`);
  },

  _x2G2norm() {
    const [p, q, h] = this.randChoice([[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 6, 10], [12, 9, 15], [4, 3, 5], [15, 8, 17]]);
    const u = [p * this.randChoice([1, -1]), q * this.randChoice([1, -1])];
    return this.makeExact('2G2', 2, 'Norme d\'un vecteur',
      'Calculer la norme d\'un vecteur en base orthonormée',
      `Dans une base orthonormée, on donne $\\vec{u}\\begin{pmatrix} ${u[0]} \\\\ ${u[1]} \\end{pmatrix}$. Calculer $\\|\\vec{u}\\|$.`,
      String(h),
      '$\\|\\vec{u}\\| = \\sqrt{x^2 + y^2}$.',
      'Un carré est toujours positif.',
      `$\\|\\vec{u}\\| = \\sqrt{${this.paren(u[0])}^2 + ${this.paren(u[1])}^2} = \\sqrt{${p * p} + ${q * q}} = \\sqrt{${h * h}} = ${h}$.`,
      { instruction: 'Saisir un nombre entier.' });
  },

  _x2G2k() {
    const u = [this.randNonZero(-6, 6), this.randNonZero(-6, 6)];
    const kn = this.randNonZero(-6, 6);
    const kd = this.randChoice([1, 1, 2, 3]);
    if (this.gcd(Math.abs(kn), kd) !== 1) return this._x2G2k();
    if (!Number.isInteger((u[0] * kn) / kd) || !Number.isInteger((u[1] * kn) / kd)) return this._x2G2k();
    const w = [(u[0] * kn) / kd, (u[1] * kn) / kd];
    return this.makeExact('2G2', 3, 'Coefficient de colinéarité',
      'Exprimer un vecteur comme multiple d\'un vecteur colinéaire',
      `On donne $\\vec{u}\\begin{pmatrix} ${u[0]} \\\\ ${u[1]} \\end{pmatrix}$ et $\\vec{w}\\begin{pmatrix} ${w[0]} \\\\ ${w[1]} \\end{pmatrix}$. On admet que $\\vec{w}$ et $\\vec{u}$ sont colinéaires. Déterminer le réel $k$ tel que $\\vec{w} = k\\vec{u}$.`,
      this._xf(kn, kd),
      '$\\vec{w} = k\\vec{u}$ signifie que chaque coordonnée de $\\vec{w}$ est $k$ fois celle de $\\vec{u}$.',
      `Résous $${w[0]} = k \\times ${this.paren(u[0])}$.`,
      `$k = ${w[0]} \\div ${this.paren(u[0])} = ${this.frac(kn, kd)}$ ; on vérifie avec les ordonnées : $${this.frac(kn, kd)} \\times ${this.paren(u[1])} = ${w[1]}$.`);
  },

  _x2G2al() {
    const A = [this.randInt(-6, 6), this.randInt(-6, 6)];
    const B = [this.randInt(-6, 6), this.randInt(-6, 6)];
    if (B[0] === A[0] || B[1] === A[1]) return this._x2G2al();
    let xC = this.randInt(-8, 8);
    while (xC === A[0]) xC = this.randInt(-8, 8);
    // y_C - y_A = (y_B - y_A)/(x_B - x_A) * (x_C - x_A)
    const num = A[1] * (B[0] - A[0]) + (B[1] - A[1]) * (xC - A[0]);
    const den = B[0] - A[0];
    return this.makeExact('2G2', 4, 'Point aligné avec deux autres',
      'Utiliser le déterminant pour établir un alignement',
      `On donne $A(${A[0]} ; ${A[1]})$, $B(${B[0]} ; ${B[1]})$ et $C(${xC} ; y)$. Déterminer $y$ pour que les points $A$, $B$ et $C$ soient alignés.`,
      this._xf(num, den),
      '$A$, $B$, $C$ alignés $\\iff \\det(\\overrightarrow{AB}, \\overrightarrow{AC}) = 0$.',
      `$\\overrightarrow{AB}\\begin{pmatrix} ${B[0] - A[0]} \\\\ ${B[1] - A[1]} \\end{pmatrix}$ et $\\overrightarrow{AC}\\begin{pmatrix} ${xC - A[0]} \\\\ y ${this.formatSign(-A[1])} \\end{pmatrix}$.`.replace(' + 0 ', ' '),
      `$\\det(\\overrightarrow{AB}, \\overrightarrow{AC}) = ${B[0] - A[0] === 1 ? '' : B[0] - A[0] === -1 ? '-' : this.paren(B[0] - A[0])}(y ${this.formatSign(-A[1])}) - ${this.paren(B[1] - A[1])} \\times ${this.paren(xC - A[0])} = 0 \\iff y = ${this.frac(num, den)}$.`.replace(/\(y \+ 0\)/, 'y'));
  },

  // ---- 2G3 ----
  _x2G3m() {
    const A = [this.randInt(-7, 7), this.randInt(-7, 7)];
    const B = [this.randInt(-7, 7), this.randInt(-7, 7)];
    if (A[0] === B[0]) return this._x2G3m();
    return this.makeExact('2G3', 1, 'Coefficient directeur',
      'Calculer le coefficient directeur d\'une droite passant par deux points',
      `Déterminer le coefficient directeur $m$ de la droite $(AB)$, avec $A(${A[0]} ; ${A[1]})$ et $B(${B[0]} ; ${B[1]})$.`,
      this._xf(B[1] - A[1], B[0] - A[0]),
      '$m = \\dfrac{y_B - y_A}{x_B - x_A}$.',
      'Calcule séparément la différence des ordonnées et celle des abscisses.',
      `$m = \\dfrac{${B[1]} - ${this.paren(A[1])}}{${B[0]} - ${this.paren(A[0])}} = ${B[1] - A[1]} \\div ${this.paren(B[0] - A[0])} = ${this.frac(B[1] - A[1], B[0] - A[0])}$.`);
  },

  _x2G3pente() {
    const a = this.randNonZero(-6, 6);
    const b = this.randNonZero(-6, 6);
    const c = this.randInt(-9, 9);
    const eq = `${this.poly([[a, 'x'], [b, 'y'], [c, '']])} = 0`;
    return this.makeExact('2G3', 2, 'Équation cartésienne vers équation réduite',
      'Passer d\'une équation cartésienne à l\'équation réduite',
      `La droite $d$ a pour équation cartésienne $${eq}$. Son équation réduite s'écrit $y = mx + p$ : saisir $(m ; p)$.`,
      `(${this._xf(-a, b)};${this._xf(-c, b)})`,
      'Isole $y$ dans l\'équation.',
      `On obtient $${this.coefStr(b, 'y')} = ${this.poly([[-a, 'x'], [-c, '']])}$, puis on divise par $${b}$.`,
      `$${eq} \\iff ${this.coefStr(b, 'y')} = ${this.poly([[-a, 'x'], [-c, '']])} \\iff y = ${this.poly([[this.frac(-a, b), 'x'], [this.frac(-c, b), '']])}$. Donc $m = ${this.frac(-a, b)}$ et $p = ${this.frac(-c, b)}$.`,
      { instruction: 'Saisir (m ; p), par exemple (-2/3;5).' });
  },

  _x2G3red() {
    const A = [this.randNonZero(-6, 6), this.randInt(-6, 6)];
    const m = this.randNonZero(-5, 5);
    const p = A[1] - m * A[0];
    return this.makeExact('2G3', 2, 'Droite par un point et sa pente',
      'Déterminer l\'équation réduite connaissant un point et la pente',
      `Déterminer l'équation réduite $y = mx + p$ de la droite de pente $${m}$ passant par $A(${A[0]} ; ${A[1]})$. Saisir $(m ; p)$.`,
      `(${m};${p})`,
      'La pente donne directement $m$.',
      '$A$ est sur la droite : $y_A = m x_A + p$.',
      `$m = ${m}$ et $${A[1]} = ${m} \\times ${this.paren(A[0])} + p$, d'où $p = ${A[1]} - ${this.paren(m * A[0])} = ${p}$. Donc $y = ${this.poly([[m, 'x'], [p, '']])}$.`,
      { instruction: 'Saisir (m ; p), par exemple (3;-1).' });
  },

  _x2G3ord() {
    const a = this.randNonZero(-6, 6);
    const b = this.randNonZero(-6, 6);
    const c = this.randInt(-9, 9);
    const x0 = this.randInt(-6, 6);
    const eq = `${this.poly([[a, 'x'], [b, 'y'], [c, '']])} = 0`;
    return this.makeExact('2G3', 3, 'Point d\'une droite d\'abscisse donnée',
      'Calculer les coordonnées d\'un point d\'une droite',
      `Le point $M$ d'abscisse $${x0}$ appartient à la droite $d : ${eq}$. Calculer son ordonnée.`,
      this._xf(-a * x0 - c, b),
      'Les coordonnées de $M$ vérifient l\'équation de la droite.',
      `Remplace $x$ par $${x0}$ et résous l'équation d'inconnue $y$.`,
      `$${this.paren(a)} \\times ${this.paren(x0)} ${this.poly([[b, 'y'], [c, '']]).replace(/^(?!-)/, '+ ').replace(/^-/, '- ')} = 0 \\iff ${this.coefStr(b, 'y')} = ${-a * x0 - c}${b === 1 ? '' : ` \\iff y = ${this.frac(-a * x0 - c, b)}`}$.`);
  },

  _x2G3ax() {
    const m = this.randNonZero(-6, 6);
    const p = this.randNonZero(-9, 9);
    return this.makeExact('2G3', 3, 'Intersection avec l\'axe des abscisses',
      'Calculer les coordonnées d\'un point d\'intersection',
      `La droite $d : y = ${this.poly([[m, 'x'], [p, '']])}$ coupe l'axe des abscisses en un point $E$. Calculer l'abscisse de $E$.`,
      this._xf(-p, m),
      'Un point de l\'axe des abscisses a une ordonnée nulle.',
      `Résous $${this.poly([[m, 'x'], [p, '']])} = 0$.`,
      `$${this.poly([[m, 'x'], [p, '']])} = 0 \\iff x = ${this.frac(-p, m)}$, donc $E\\left(${this.frac(-p, m)} ; 0\\right)$.`);
  },

  _x2G3int() {
    const m1 = this.randNonZero(-5, 5);
    let m2 = this.randNonZero(-5, 5);
    while (m2 === m1) m2 = this.randNonZero(-5, 5);
    const X = this.randInt(-5, 5);
    const Y = this.randInt(-9, 9);
    const p1 = Y - m1 * X;
    const p2 = Y - m2 * X;
    return this.makeExact('2G3', 4, 'Point d\'intersection de deux droites',
      'Calculer les coordonnées du point d\'intersection de deux droites sécantes',
      `Les droites $d_1 : y = ${this.poly([[m1, 'x'], [p1, '']])}$ et $d_2 : y = ${this.poly([[m2, 'x'], [p2, '']])}$ sont sécantes (pentes différentes). Déterminer les coordonnées de leur point d'intersection.`,
      `(${X};${Y})`,
      'Le point d\'intersection vérifie les deux équations à la fois.',
      `Résous $${this.poly([[m1, 'x'], [p1, '']])} = ${this.poly([[m2, 'x'], [p2, '']])}$.`,
      `$${this.poly([[m1, 'x'], [p1, '']])} = ${this.poly([[m2, 'x'], [p2, '']])} \\iff ${this.coefStr(m1 - m2, 'x')} = ${p2 - p1} \\iff x = ${X}$, puis $y = ${m1} \\times ${this.paren(X)} ${this.formatSign(p1)} = ${Y}$. Le point d'intersection est $(${X} ; ${Y})$.`.replace(' + 0 = ', ' = '),
      { instruction: 'Saisir les coordonnées sous la forme (x ; y).' });
  },

  _x2G3par() {
    const a = this.randChoice([2, 3, -2, 1, -1]);
    const b = this.randNonZero(-5, 5);
    const s = this.randNonZero(-6, 6);
    const c = this.randInt(-6, 6);
    const e = this.randInt(-6, 6);
    const slope = this.poly([[a, 'k'], [b, '']]);
    return this.makeExact('2G3', 4, 'Droites parallèles et paramètre',
      'Déterminer si deux droites sont parallèles',
      `Pour un réel $k$, on considère $d_1 : y = (${slope})x ${this.formatSign(c)}$ et $d_2 : y = ${this.poly([[s, 'x'], [e, '']])}$. Pour quelle valeur de $k$ les droites $d_1$ et $d_2$ sont-elles parallèles ?`.replace(' + 0$', '$'),
      this._xf(s - b, a),
      'Deux droites non verticales sont parallèles si et seulement si elles ont la même pente.',
      `Résous $${slope} = ${s}$.`,
      `$d_1 \\parallel d_2 \\iff ${slope} = ${s} \\iff ${this.coefStr(a, 'k')} = ${s - b} \\iff k = ${this.frac(s - b, a)}$.`);
  },

  // ---- 2S1 ----
  _x2S1cls() {
    const h = this.randChoice([2, 4, 5, 10, 20]);
    const a0 = h * this.randInt(0, 5);
    const k = this.randInt(3, 5);
    const eff = Array.from({ length: k }, () => this.randInt(2, 15));
    const N = eff.reduce((s, x) => s + x, 0);
    const cen = eff.map((_, i) => a0 + h * i + h / 2);
    const S = cen.reduce((s, c, i) => s + c * eff[i], 0);
    const m = S / N;
    const exact = this.isDecimal(m, 2);
    const rows = eff.map((e, i) => [`$[${a0 + h * i} ; ${a0 + h * (i + 1)}[$`, `$${e}$`]);
    return this.makeExact('2S1', 2, 'Moyenne de données regroupées en classes',
      'Calculer une moyenne pondérée à l\'aide des centres des classes',
      `On a regroupé les valeurs d'une série en classes de même amplitude :${this._xtab(['Classe', 'Effectif'], rows)}En supposant la répartition uniforme dans chaque classe, calculer la moyenne de la série${exact ? '' : ' (arrondir au centième)'}.`,
      this._xd(m, 2),
      'Chaque classe est représentée par son centre.',
      `Le centre de $[${a0} ; ${a0 + h}[$ est $${this.dec(a0 + h / 2)}$ ; l'effectif total est $${N}$.`,
      `$\\bar{x} = \\dfrac{${cen.map((c, i) => `${eff[i]} \\times ${this.dec(c)}`).join(' + ')}}{${N}} = \\dfrac{${this.dec(S)}}{${N}} ${exact ? '=' : '\\approx'} ${this.dec(m, 2)}$.`,
      { instruction: exact ? 'Saisir la moyenne (entier ou décimal).' : 'Saisir la valeur arrondie au centième, par exemple 12,35.' });
  },

  _x2S1add() {
    const n = this.randInt(4, 24);
    const m = this.randInt(8, 15);
    const v = this.randInt(1, 20);
    if (v === m) return this._x2S1add();
    const nm = (n * m + v) / (n + 1);
    const exact = this.isDecimal(nm, 2);
    return this.makeExact('2S1', 2, 'Ajout d\'une valeur à une série',
      'Étudier l\'influence de l\'ajout d\'une valeur sur la moyenne',
      `Une série de $${n}$ notes a pour moyenne $${m}$. On ajoute la note $${v}$. Quelle est la nouvelle moyenne${exact ? '' : ' (arrondie au centième)'} ?`,
      this._xd(nm, 2),
      'Retrouve d\'abord la somme des notes à partir de la moyenne.',
      `La somme des $${n}$ notes vaut $${n} \\times ${m}$.`,
      `Somme initiale : $${n} \\times ${m} = ${n * m}$. Nouvelle somme : $${n * m} + ${v} = ${n * m + v}$ pour $${n + 1}$ notes, donc $\\bar{x} = \\dfrac{${n * m + v}}{${n + 1}}${exact ? ' =' : ' \\approx'} ${this.dec(nm, 2)}$. La moyenne ${v > m ? 'augmente' : 'diminue'} car la note ajoutée est ${v > m ? 'supérieure' : 'inférieure'} à l'ancienne moyenne.`,
      { instruction: exact ? 'Saisir la moyenne (entier ou décimal).' : 'Saisir la valeur arrondie au centième, par exemple 12,35.' });
  },

  _x2S1var(tier) {
    const n = this.randInt(4, 6);
    const vals = Array.from({ length: n }, () => this.randInt(2, 18));
    const S = vals.reduce((s, x) => s + x, 0);
    const m = S / n;
    const V = vals.reduce((s, x) => s + (x - m) ** 2, 0) / n;
    if (V === 0) return this._x2S1var(tier);
    const askSd = tier >= 4 || Math.random() < 0.4;
    const vEx = this.isDecimal(V, 2);
    if (!askSd && !vEx) return this._x2S1var(tier);
    const sd = Math.sqrt(V);
    const res = askSd ? sd : V;
    return this.makeExact('2S1', tier, askSd ? 'Écart type d\'une série' : 'Variance d\'une série',
      'Calculer un indicateur de dispersion : variance et écart type',
      `On considère la série : ${vals.join(' ; ')}. Calculer ${askSd ? 'son écart type $\\sigma$ (arrondir au centième)' : 'sa variance $V$'}.`,
      this._xd(res, 2),
      'Calcule d\'abord la moyenne $\\bar{x}$ de la série.',
      '$V$ est la moyenne des carrés des écarts à la moyenne, et $\\sigma = \\sqrt{V}$.',
      `$\\bar{x} = \\dfrac{${S}}{${n}} = ${this.dec(m, 4)}$. $V = \\dfrac{${vals.map((x) => `(${x} - ${this.dec(m, 4)})^2`).join(' + ')}}{${n}} ${vEx ? '=' : '\\approx'} ${this.dec(V, 4)}$.${askSd ? ` Donc $\\sigma = \\sqrt{V} \\approx ${this.dec(sd, 2)}$.` : ''}`,
      { instruction: askSd ? 'Saisir la valeur arrondie au centième, par exemple 3,47.' : 'Saisir la valeur exacte (entier ou décimal).' });
  },

  _x2S1cm() {
    const h = this.randChoice([5, 10, 20, 50]);
    const a0 = h * this.randInt(0, 6);
    const k = this.randInt(4, 6);
    const eff = Array.from({ length: k }, () => this.randInt(2, 20));
    const N = eff.reduce((s, x) => s + x, 0);
    let cum = 0;
    let idx = -1;
    for (let i = 0; i < k; i++) {
      cum += eff[i];
      if (cum === N / 2) return this._x2S1cm();
      if (idx < 0 && cum > N / 2) idx = i;
    }
    const rows = eff.map((e, i) => [`$[${a0 + h * i} ; ${a0 + h * (i + 1)}[$`, `$${e}$`]);
    let c2 = 0;
    const cums = eff.map((e) => (c2 += e));
    return this.makeExact('2S1', 3, 'Classe médiane',
      'Déterminer la classe médiane à partir des effectifs cumulés',
      `On donne la répartition d'une série en classes :${this._xtab(['Classe', 'Effectif'], rows)}La classe médiane est $[a ; b[$. Donner $a$.`,
      String(a0 + h * idx),
      'La classe médiane contient la valeur située au milieu de la série ordonnée.',
      `Calcule les effectifs cumulés croissants et compare-les à la moitié de l'effectif total $${N}$.`,
      `Effectif total : $${N}$, moitié : $${this.dec(N / 2)}$. Effectifs cumulés : $${cums.join(' ; ')}$. Le premier effectif cumulé qui dépasse $${this.dec(N / 2)}$ est $${cums[idx]}$, celui de la classe $[${a0 + h * idx} ; ${a0 + h * (idx + 1)}[$ : c'est la classe médiane, et $a = ${a0 + h * idx}$.`,
      { instruction: 'Saisir un nombre entier.' });
  },

  _x2S1need() {
    const n = this.randInt(3, 7);
    const target = this.randInt(9, 15);
    const x = this.randInt(4, 20);
    const S = target * (n + 1) - x;
    const m = S / n;
    const ex = this.isDecimal(m, 2);
    return this.makeExact('2S1', 4, 'Note nécessaire pour une moyenne',
      'Exploiter la définition de la moyenne pour résoudre un problème',
      `Après $${n}$ devoirs de même coefficient, la moyenne d'un élève est $${ex ? '' : '\\approx '}${this.dec(m, 2)}$${ex ? '' : ` (la somme de ses notes vaut exactement $${S}$)`}. Quelle note doit-il obtenir au devoir suivant pour que sa moyenne soit exactement $${target}$ ?`,
      String(x),
      `Avec $${n + 1}$ devoirs, la somme des notes doit valoir $${n + 1} \\times ${target}$.`,
      'La note cherchée est la différence entre la somme visée et la somme actuelle.',
      `Somme actuelle : $${ex ? `${n} \\times ${this.dec(m, 2)} = ` : ''}${S}$. Somme visée : $${n + 1} \\times ${target} = ${(n + 1) * target}$. Note nécessaire : $${(n + 1) * target} - ${S} = ${x}$.`,
      { instruction: 'Saisir un nombre (entier ou décimal).' });
  },

  // ---- 2S2 ----
  _x2S2loi() {
    const k = this.randInt(3, 5);
    let ps;
    do {
      ps = Array.from({ length: k - 1 }, () => this.randInt(1, 40));
    } while (ps.reduce((s, x) => s + x, 0) >= 95);
    const last = 100 - ps.reduce((s, x) => s + x, 0);
    const issues = ['A', 'B', 'C', 'D', 'E'].slice(0, k).map((x) => `$${x}$`);
    const rows = [['Issue', ...issues], ['Probabilité', ...ps.map((p) => `$${this.dec(p / 100)}$`), '$p$']];
    return this.makeExact('2S2', 1, 'Probabilité d\'une issue manquante',
      'Savoir que la somme des probabilités des issues vaut 1',
      `Une expérience aléatoire a ${k} issues dont les probabilités sont données dans le tableau :${this._xtab(rows[0], [rows[1].slice(1)].map((r) => [rows[1][0], ...r]))}Calculer $p$.`,
      this._xd(last / 100),
      'La somme des probabilités de toutes les issues vaut 1.',
      `Additionne les probabilités connues, puis complète jusqu'à 1.`,
      `$p = 1 - (${ps.map((x) => this.dec(x / 100)).join(' + ')}) = 1 - ${this.dec((100 - last) / 100)} = ${this.dec(last / 100)}$.`,
      { instruction: 'Saisir un nombre décimal, par exemple 0,15.' });
  },

  _x2S2tc(tier) {
    const ctx = this.randChoice([
      ['élèves d\'un lycée', 'demi-pensionnaire', 'externe', 'fille', 'garçon', 'F', 'D'],
      ['salariés d\'une entreprise', 'cadre', 'non cadre', 'femme', 'homme', 'F', 'C'],
      ['clients d\'un magasin', 'ayant la carte de fidélité', 'sans carte', 'ayant acheté en ligne', 'ayant acheté en boutique', 'L', 'C']]);
    const a = this.randInt(10, 90); const b = this.randInt(10, 90);
    const c = this.randInt(10, 90); const d = this.randInt(10, 90);
    const N = a + b + c + d;
    // lignes : ctx[3] / ctx[4] ; colonnes : ctx[1] / ctx[2]
    const rows = [[`**${ctx[3]}**`, `$${a}$`, `$${b}$`, `$${a + b}$`], [`**${ctx[4]}**`, `$${c}$`, `$${d}$`, `$${c + d}$`], ['**Total**', `$${a + c}$`, `$${b + d}$`, `$${N}$`]];
    const Ev1 = ctx[5]; const Ev2 = ctx[6];
    const ask = tier >= 3 ? this.randInt(1, 2) : this.randInt(0, 2);
    let lab; let num; let den; let expl;
    if (ask === 0) { lab = `P(${Ev1} \\cap ${Ev2})`; num = a; den = N; expl = `Il y a $${a}$ individus à la fois « ${ctx[3]} » et « ${ctx[1]} » sur $${N}$.`; }
    else if (ask === 1) { lab = `P_{${Ev1}}(${Ev2})`; num = a; den = a + b; expl = `Parmi les $${a + b}$ individus « ${ctx[3]} », $${a}$ sont « ${ctx[1]} ».`; }
    else { lab = `P_{${Ev2}}(${Ev1})`; num = a; den = a + c; expl = `Parmi les $${a + c}$ individus « ${ctx[1]} », $${a}$ sont « ${ctx[3]} ».`; }
    return this.makeExact('2S2', tier, 'Tableau croisé et probabilité conditionnelle',
      'Calculer une probabilité (conditionnelle) à partir d\'un tableau croisé d\'effectifs',
      `On a interrogé des ${ctx[0]} :${this._xtab(['', ctx[1], ctx[2], 'Total'], rows)}On choisit une personne au hasard. On note $${Ev1}$ : « ${ctx[3]} » et $${Ev2}$ : « ${ctx[1]} ». Calculer $${lab}$.`,
      this._xf(num, den),
      ask === 0 ? 'Une intersection correspond à une case du tableau, rapportée à l\'effectif total.' : `$P_A(B) = \\dfrac{\\text{Card}(A \\cap B)}{\\text{Card}(A)}$ : on se restreint à la sous-population $${ask === 1 ? Ev1 : Ev2}$.`,
      ask === 0 ? 'Repère la case à l\'intersection de la ligne et de la colonne.' : `Repère l'effectif total de la ${ask === 1 ? 'ligne' : 'colonne'} correspondant à l'événement qui conditionne.`,
      `${expl} Donc $${lab} = \\dfrac{${num}}{${den}}${this.frac(num, den) === `\\frac{${num}}{${den}}` ? '' : ` = ${this.frac(num, den)}`}$.`,
      { instruction: 'Saisir une fraction irréductible, par exemple 7/12.' });
  },

  _x2S2arb() {
    const pA = this.randInt(1, 9) / 10;
    const pBA = this.randInt(1, 19) / 20;
    const pBnA = this.randInt(1, 19) / 20;
    const ask = this.randInt(0, 1);
    const res = ask === 0 ? pA * pBA : (1 - pA) * pBnA;
    return this.makeExact('2S2', 3, 'Arbre pondéré : probabilité d\'un chemin',
      'Multiplier les probabilités le long d\'un chemin d\'un arbre pondéré',
      `On donne $P(A) = ${this.dec(pA)}$, $P_A(B) = ${this.dec(pBA)}$ et $P_{\\bar{A}}(B) = ${this.dec(pBnA)}$. Calculer $P(${ask === 0 ? 'A' : '\\bar{A}'} \\cap B)$.`,
      this._xd(res, 6),
      'La probabilité d\'un chemin est le produit des probabilités portées par ses branches.',
      ask === 0 ? '$P(A \\cap B) = P(A) \\times P_A(B)$.' : `Commence par $P(\\bar{A}) = 1 - ${this.dec(pA)}$.`,
      ask === 0 ? `$P(A \\cap B) = P(A) \\times P_A(B) = ${this.dec(pA)} \\times ${this.dec(pBA)} = ${this.dec(res, 6)}$.` : `$P(\\bar{A}) = 1 - ${this.dec(pA)} = ${this.dec(1 - pA)}$, puis $P(\\bar{A} \\cap B) = P(\\bar{A}) \\times P_{\\bar{A}}(B) = ${this.dec(1 - pA)} \\times ${this.dec(pBnA)} = ${this.dec(res, 6)}$.`,
      { instruction: 'Saisir un nombre décimal, par exemple 0,225.' });
  },

  _x2S2tp() {
    const N = 10000;
    const prev = this.randChoice([1, 2, 4, 5, 8, 10]);
    const se = this.randChoice([80, 90, 95, 98]);
    const sp = this.randChoice([90, 95, 98, 99]);
    const M = (N * prev) / 100;
    const VP = (M * se) / 100;
    const FP = ((N - M) * (100 - sp)) / 100;
    const ask = this.randInt(0, 1);
    const num = ask === 0 ? VP : FP;
    const den = VP + FP;
    return this.makeExact('2S2', 4, 'Test de dépistage : faux positifs',
      'Distinguer $P_A(B)$ et $P_B(A)$ dans une situation de dépistage',
      `Une maladie touche $${prev}\\,\\%$ d'une population. Un test est positif chez $${se}\\,\\%$ des malades (sensibilité) et négatif chez $${sp}\\,\\%$ des non-malades (spécificité). Sur un échantillon de $10\\,000$ personnes représentatif, on choisit au hasard une personne dont le test est positif. Quelle est la probabilité qu'elle ${ask === 0 ? 'soit malade' : 'ne soit pas malade (faux positif)'} ?`,
      this._xf(num, den),
      'Construis le tableau croisé des effectifs : malades / non malades, test positif / négatif.',
      'On cherche une probabilité sachant « test positif » : on se restreint aux personnes testées positives.',
      `Malades : $${M}$, dont $${VP}$ testés positifs. Non malades : $${N - M}$, dont $${FP}$ testés positifs (faux positifs). Total des positifs : $${den}$. Donc $P_{T}(${ask === 0 ? 'M' : '\\bar{M}'}) = \\dfrac{${num}}{${den}} = ${this.frac(num, den)}$${ask === 0 ? ` $\\approx ${this.dec(num / den, 3)}$ : bien moins que la sensibilité $P_M(T) = ${this.dec(se / 100)}$` : ''}.`,
      { instruction: 'Saisir une fraction irréductible, par exemple 19/68.' });
  },

  // ---- lyTA ----
  // Réécrit les options purement mathématiques « $X$ » d'un QCM de limite en « $<lhs> = X$ »
  _TA_lim(q, lhs) {
    const w = (o) => (/^\$[^$]*\$$/.test(o) ? `$${lhs} = ${o.slice(1, -1)}$` : o);
    const opts = q.options.map(w);
    q.options = opts;
    q.choices = opts;
    q.answer = w(q.answer);
    q.correctIndex = opts.indexOf(q.answer);
    return q;
  },

  // ---------------------------------------------------------------------
  // TA1 : Le raisonnement par récurrence
  // ---------------------------------------------------------------------
  gen_TA1(tier) {
    const T = 'TA1';
    // A × b^e + L (écriture propre)
    const cf = (A, b, e, L) => {
      const head = A === 1 ? `${b}^{${e}}` : A === -1 ? `-${b}^{${e}}` : `${A} \\times ${b}^{${e}}`;
      return L === 0 ? head : `${head} ${this.formatSign(L)}`;
    };
    if (tier === 1) {
      if (Math.random() < 0.5) {
        const u0 = this.randInt(-3, 5);
        const b = this.randInt(2, 4);
        const c = this.randNonZero(-5, 5);
        const k = this.randChoice([2, 3]);
        const u = [u0];
        for (let i = 0; i < 4; i++) u.push(b * u[i] + c);
        const steps = [];
        for (let i = 1; i <= k; i++) steps.push(`$u_${i} = ${b} \\times ${this.paren(u[i - 1])} ${this.formatSign(c)} = ${u[i]}$`);
        return this.makeMcq(T, 1, "Premiers termes d'une suite définie par récurrence",
          'Calculer des termes successifs avant de conjecturer une propriété',
          `Soit la suite $(u_n)$ définie par $u_0 = ${u0}$ et, pour tout $n \\in \\mathbb{N}$, $u_{n+1} = ${this.poly([[b, 'u_n'], [c, '']])}$. Avant de démontrer une propriété par récurrence, on calcule les premiers termes. Que vaut $u_${k}$ ?`,
          `$u_${k} = ${u[k]}$`,
          [`$u_${k} = ${u[k - 1]}$`, `$u_${k} = ${u[k + 1]}$`, `$u_${k} = ${u[k] + c}$`, `$u_${k} = ${b ** k * u0}$`, `$u_${k} = ${u[k] - b}$`],
          'Applique la relation de récurrence en partant de $u_0$, un rang après l\'autre.',
          `Commence par $u_1 = ${b} \\times ${this.paren(u0)} ${this.formatSign(c)}$.`,
          `On calcule de proche en proche : ${steps.join(', ')}.`
        );
      }
      const p = this.randInt(2, 5);
      const q = this.randInt(-3, 3);
      const m = this.randInt(4, 9);
      const S = p * m * (m + 1) / 2 + q * m;
      const term = this.poly([[p, 'k'], [q, '']]);
      return this.makeMcq(T, 1, "Contrôle numérique d'une formule de somme",
        'Calculer une somme pour initialiser ou contrôler une formule démontrée par récurrence',
        `Pour tout entier $n \\ge 1$, on pose $S_n = \\sum_{k=1}^{n} (${term})$. Que vaut $S_{${m}}$ ?`,
        `$S_{${m}} = ${S}$`,
        [`$S_{${m}} = ${S - (p * m + q)}$`, `$S_{${m}} = ${S + p * (m + 1) + q}$`, `$S_{${m}} = ${p * m * m + q * m}$`, `$S_{${m}} = ${p * m * (m + 1) + q * m}$`],
        `Utilise $\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}$ et la linéarité de la somme.`,
        `$S_n = ${p} \\times \\frac{n(n+1)}{2} ${q ? this.formatSign(q) + ' \\times n' : ''}$.`,
        `$S_{${m}} = ${p} \\times \\frac{${m} \\times ${m + 1}}{2} ${q ? this.formatSign(q) + ' \\times ' + m : ''} = ${p * m * (m + 1) / 2} ${q ? this.formatSign(q * m) : ''} = ${S}$.`.replace(/ +\$/, '$')
      );
    }
    if (tier === 2) {
      if (Math.random() < 0.55) {
        const b = this.randInt(2, 5);
        const L = this.randInt(-4, 4);
        const A = this.randNonZero(-3, 4);
        const c = L * (1 - b);
        const u0 = A + L;
        const rec = this.poly([[b, 'u_n'], [c, '']]);
        const ans = cf(A, b, 'n', L);
        const ds = [cf(A, b, 'n+1', L), cf(A, b + 1, 'n', L), cf(A + 1, b, 'n', L)];
        if (L !== 0) ds.push(cf(A, b, 'n', -L));
        if (c !== L) ds.push(cf(A, b, 'n', c));
        if (u0 !== A && u0 !== 0) ds.push(cf(u0, b, 'n', L));
        const hk = L === 0
          ? `u_{k+1} = ${b} \\times (${cf(A, b, 'k', 0)}) = ${cf(A, b, 'k+1', 0)}`
          : `u_{k+1} = ${b}(${cf(A, b, 'k', L)}) ${this.formatSign(c)} = ${cf(A, b, 'k+1', b * L)} ${this.formatSign(c)} = ${cf(A, b, 'k+1', L)}`;
        return this._Tx(this.makeMcq(T, 2, "Conjecturer puis démontrer une formule explicite",
          'Vérifier une formule explicite au rang initial et sa transmission (hérédité)',
          `Soit $(u_n)$ définie par $u_0 = ${u0}$ et, pour tout $n \\in \\mathbb{N}$, $u_{n+1} = ${rec}$. Quelle formule explicite peut-on démontrer par récurrence ?`,
          `$u_n = ${ans}$`,
          ds.map((d) => `$u_n = ${d}$`),
          'Une formule correcte doit déjà donner la bonne valeur de $u_0$ (initialisation).',
          'Pour l\'hérédité, suppose la formule vraie au rang $k$ et calcule $u_{k+1}$ avec la relation de récurrence.',
          `Initialisation : $${cf(A, b, '0', L)} = ${u0} = u_0$. Hérédité : si $u_k = ${cf(A, b, 'k', L)}$, alors $${hk}$. Par récurrence, $u_n = ${ans}$ pour tout $n$.`
        ), [A, b, L], 'La formule s\'écrit $u_n = \\alpha \\times \\beta^{n} + \\gamma$ : saisir (α ; β ; γ).');
      }
      const a = this.randInt(2, 9);
      const B = a + 1;
      const ans = this.poly([[a * B, 'k'], [B, '']]);
      return this._Tx(this.makeMcq(T, 2, "Hérédité de l'inégalité de Bernoulli",
        "Rédiger l'étape d'hérédité d'une inégalité",
        `On démontre par récurrence que, pour tout $n \\in \\mathbb{N}$, $${B}^{n} \\ge 1 + ${a}n$. Pour l'hérédité, on suppose $${B}^{k} \\ge 1 + ${a}k$ pour un entier $k$ fixé, puis on multiplie les deux membres par $${B} > 0$. Quelle minoration de $${B}^{k+1}$ obtient-on ?`,
        `$${B}^{k+1} \\ge ${ans}$`,
        [this.poly([[a, 'k'], [B, '']]), this.poly([[a * B, 'k'], [1, '']]), this.poly([[B, 'k'], [a, '']]), this.poly([[a * B, 'k'], [a, '']])].map((d) => `$${B}^{k+1} \\ge ${d}$`),
        'Multiplier une inégalité par un réel strictement positif conserve son sens.',
        `Développe $${B}(1 + ${a}k)$.`,
        `$${B}^{k+1} = ${B} \\times ${B}^{k} \\ge ${B}(1 + ${a}k) = ${ans}$. Comme $${ans} \\ge 1 + ${a}(k+1)$ (car $${a * B}k + ${B} - (1 + ${a}k + ${a}) = ${a * a}k \\ge 0$), la propriété est vraie au rang $k+1$.`
      ), [a * B, B], 'Le minorant obtenu s\'écrit $\\alpha k + \\beta$ : saisir (α ; β).');
    }
    if (tier === 3) {
      const r3 = Math.random();
      if (r3 < 0.3) {
        // Rang à partir duquel une inégalité b^n > pn + q est vraie (initialisation, puis hérédité)
        let b; let p; let q; let n0;
        do {
          b = this.randChoice([2, 2, 3]); p = this.randInt(2, b === 2 ? 12 : 20); q = this.randInt(0, 12);
          n0 = 60; while (n0 > 0 && b ** (n0 - 1) > p * (n0 - 1) + q) n0--;
        } while (n0 < 2 || n0 > 7);
        const v = (n) => `$${b}^{${n}} = ${b ** n}$ et $${p} \\times ${n}${q ? ' + ' + q : ''} = ${p * n + q}$`;
        return this._Tx(this.makeMcq(T, 3, 'Initialisation : rang de départ d\'une récurrence',
          'Déterminer le rang à partir duquel une propriété est vraie, puis la démontrer par récurrence',
          `On note $P(n)$ la propriété « $${b}^{n} > ${this.poly([[p, 'n'], [q, '']])}$ ». On admet l'hérédité : pour tout entier $k \\ge 1$, si $P(k)$ est vraie alors $P(k+1)$ l'est aussi. Déterminer le plus petit entier naturel $n_0$ tel que $P(n)$ soit vraie pour tout entier $n \\ge n_0$.`,
          `$n_0 = ${n0}$`,
          [`$n_0 = ${n0 - 1}$`, `$n_0 = ${n0 + 1}$`, `$n_0 = ${n0 + 2}$`, `$n_0 = ${Math.max(0, n0 - 2) === n0 - 1 ? n0 + 3 : Math.max(0, n0 - 2)}$`],
          `Compare $${b}^{n}$ et $${this.poly([[p, 'n'], [q, '']])}$ pour $n = 1, 2, 3, \\dots$ jusqu'à ce que l'inégalité devienne vraie.`,
          `Hérédité : $${b}^{k+1} = ${b} \\times ${b}^{k} > ${b}(${this.poly([[p, 'k'], [q, '']])})$, et ce nombre dépasse $${this.poly([[p, 'k'], [p + q, '']])}$ dès que $k \\ge 1$.`,
          `Pour $n = ${n0 - 1}$ : ${v(n0 - 1)}, l'inégalité est fausse. Pour $n = ${n0}$ : ${v(n0)}, elle est vraie (initialisation au rang $${n0}$). Par l'hérédité admise, $P(n)$ est vraie pour tout $n \\ge ${n0}$, et $${n0}$ est le plus petit rang possible puisque $P(${n0 - 1})$ est fausse : $n_0 = ${n0}$.`
        ), n0, 'Saisir un nombre entier.');
      }
      if (r3 < 0.65) {
        const a = this.randInt(3, 12);
        const d = a - 1;
        return this._Tx(this.makeMcq(T, 3, 'Récurrence et divisibilité',
          "Rédiger l'hérédité d'une propriété de divisibilité",
          `On veut démontrer par récurrence que, pour tout $n \\in \\mathbb{N}$, $${a}^{n} - 1$ est divisible par $${d}$. Hérédité : on suppose $${a}^{k} - 1 = ${d}m$ avec $m$ entier. Quelle écriture de $${a}^{k+1} - 1$ permet de conclure ?`,
          `$${a}^{k+1} - 1 = ${d}(${a}m + 1)$`,
          [`$${a}^{k+1} - 1 = ${d}(m + 1)$`, `$${a}^{k+1} - 1 = ${d}(${a}m + ${a})$`, `$${a}^{k+1} - 1 = ${a}(${d}m + 1)$`, `$${a}^{k+1} - 1 = ${d}(${a}m - 1)$`],
          `Écris $${a}^{k+1} - 1 = ${a} \\times ${a}^{k} - 1$ et remplace $${a}^{k}$ par $${d}m + 1$.`,
          `Remplace $${a}^{k}$ par $${d}m + 1$, développe, puis factorise par $${d}$.`,
          `$${a}^{k+1} - 1 = ${a}(${d}m + 1) - 1 = ${a * d}m + ${d} = ${d}(${a}m + 1)$ avec $${a}m + 1$ entier : $${a}^{k+1} - 1$ est divisible par $${d}$. Initialisation : $${a}^{0} - 1 = 0$ est divisible par $${d}$.`
        ), [a, 1], `L'écriture cherchée est de la forme $${a}^{k+1} - 1 = ${d}(\\alpha m + \\beta)$ : saisir (α ; β).`);
      }
      const d = this.randInt(2, 6);
      const t = this.randInt(1, 3);
      const a = 1 + d * t;
      const s = this.randInt(1, 3);
      const c = d * s - 1;
      const ct = c * t;
      return this._Tx(this.makeMcq(T, 3, 'Récurrence et divisibilité',
        "Rédiger l'hérédité d'une propriété de divisibilité",
        `On veut démontrer par récurrence que, pour tout $n \\in \\mathbb{N}$, $${a}^{n} + ${c}$ est divisible par $${d}$. Hérédité : on suppose $${a}^{k} + ${c} = ${d}m$ avec $m$ entier. Quelle écriture de $${a}^{k+1} + ${c}$ permet de conclure ?`,
        `$${a}^{k+1} + ${c} = ${d}(${a}m - ${ct})$`,
        [`$${a}^{k+1} + ${c} = ${d}(${a}m + ${ct})$`, `$${a}^{k+1} + ${c} = ${d}(${a}m - ${c})$`, `$${a}^{k+1} + ${c} = ${a}(${d}m - ${ct})$`, `$${a}^{k+1} + ${c} = ${d}(m - ${ct})$`],
        `Écris $${a}^{k+1} = ${a} \\times ${a}^{k}$ et remplace $${a}^{k}$ par $${d}m - ${c}$.`,
        `Remplace $${a}^{k}$ par $${d}m - ${c}$, développe, puis factorise par $${d}$.`,
        `Initialisation : $${a}^{0} + ${c} = ${c + 1} = ${d} \\times ${s}$. Hérédité : $${a}^{k+1} + ${c} = ${a}(${d}m - ${c}) + ${c} = ${a * d}m - ${c * (a - 1)} = ${d}(${a}m - ${ct})$, multiple de $${d}$.`
      ), [a, -ct], `L'écriture cherchée est de la forme $${a}^{k+1} + ${c} = ${d}(\\alpha m + \\beta)$ : saisir (α ; β).`);
    }
    // tier 4
    if (Math.random() < 0.5) {
      const a0 = this.randInt(-3, 5);
      const p = this.randChoice([2, 4, 6]);
      const q = this.randInt(-4, 4);
      const h = p / 2;
      const ans = this.poly([[h, 'n^2'], [q - h, 'n'], [a0, '']]);
      const ds = [this.poly([[h, 'n^2'], [q, 'n'], [a0, '']]), this.poly([[p, 'n^2'], [q - p, 'n'], [a0, '']]),
        this.poly([[h, 'n^2'], [q + h, 'n'], [a0, '']]), this.poly([[h, 'n^2'], [q - h, 'n'], [a0 + 1, '']])];
      const inc = this.poly([[p, 'k'], [q, '']]);
      const nxt = this.poly([[h, 'k^2'], [q + h, 'k'], [a0 + q, '']]);
      return this._Tx(this.makeMcq(T, 4, 'Formule explicite d\'une suite à accroissements affines',
        'Conjecturer une formule et la démontrer par récurrence',
        `Soit $(u_n)$ définie par $u_0 = ${a0}$ et, pour tout $n \\in \\mathbb{N}$, $u_{n+1} = ${this.poly([[1, 'u_n'], [p, 'n'], [q, '']])}$. Quelle formule explicite, démontrable par récurrence, est vérifiée par $u_n$ ?`,
        `$u_n = ${ans}$`,
        ds.map((d) => `$u_n = ${d}$`),
        `Calcule $u_1$, $u_2$, $u_3$ : les écarts successifs $${this.poly([[p, 'n'], [q, '']])}$ sont affines, donc on cherche $u_n$ sous la forme $\\alpha n^2 + \\beta n + \\gamma$.`,
        `Hérédité : si $u_k$ vérifie la formule, calcule $u_k + ${inc}$ et compare à la formule au rang $k+1$.`,
        `Initialisation : la formule donne $${a0}$ pour $n = 0$. Hérédité : si $u_k = ${this.poly([[h, 'k^2'], [q - h, 'k'], [a0, '']])}$, alors $u_{k+1} = u_k ${inc.startsWith('-') ? '- ' + inc.slice(1) : '+ ' + inc} = ${nxt}$, qui est bien le développement de $${this.poly([[h, '(k+1)^2'], [q - h, '(k+1)'], [a0, '']])}$. Donc $u_n = ${ans}$ pour tout $n$.`
      ), [h, q - h, a0], 'La formule s\'écrit $u_n = \\alpha n^2 + \\beta n + \\gamma$ : saisir (α ; β ; γ).');
    }
    const a = this.randInt(1, 5);
    const b = this.randInt(1, 4);
    const u0 = a === 1 ? '1' : `\\frac{1}{${a}}`;
    const den = (bb, aa) => this.poly([[bb, 'n'], [aa, '']]);
    const ds = [`\\frac{1}{${den(b + 1, a)}}`, `\\frac{1}{${this.poly([[b, 'n^2'], [a, '']])}}`, `\\frac{n}{${den(b, a)}}`];
    if (a !== b) ds.push(`\\frac{1}{${den(a, b)}}`);
    return this._Tx(this.makeMcq(T, 4, 'Formule explicite d\'une suite homographique',
      'Conjecturer une formule et la démontrer par récurrence',
      `Soit $(u_n)$ définie par $u_0 = ${u0}$ et, pour tout $n \\in \\mathbb{N}$, $u_{n+1} = \\frac{u_n}{1 + ${this.coefStr(b, 'u_n')}}$. Quelle formule, démontrable par récurrence, donne $u_n$ ?`,
      `$u_n = \\frac{1}{${den(b, a)}}$`,
      ds.map((d) => `$u_n = ${d}$`),
      'Calcule $u_1$ et $u_2$ sous forme de fractions et observe les dénominateurs.',
      `Conjecture $u_k = \\frac{1}{\\alpha k + \\beta}$ ; pour l'hérédité, simplifie $\\frac{u_k}{1 + ${this.coefStr(b, 'u_k')}}$ en multipliant numérateur et dénominateur par $\\alpha k + \\beta$.`,
      `Initialisation : $${a === 1 ? '1' : `\\frac{1}{${a}}`} = u_0$. Hérédité : $u_{k+1} = \\frac{1}{${den(b, a).replace('n', 'k')} + ${b}} = \\frac{1}{${den(b, a).replace('n', '(k+1)')}}$. Donc $u_n = \\frac{1}{${den(b, a)}}$ pour tout $n$.`
    ), [b, a], 'La formule s\'écrit $u_n = \\frac{1}{\\alpha n + \\beta}$ : saisir (α ; β).');
  },

  // ---------------------------------------------------------------------
  // TA2 : Limites de suites
  // ---------------------------------------------------------------------
  gen_TA2(tier) {
    return this._TA_lim(this._TA2(tier), '\\lim u_n');
  },

  _TA2(tier) {
    const T = 'TA2';
    const PI = '$+\\infty$';
    const MI = '$-\\infty$';
    const inf = (s) => (s > 0 ? PI : MI);
    if (tier === 1) {
      const f = this.randInt(1, 3);
      if (f === 1) {
        const a = this.randNonZero(-6, 6);
        const c = this.randInt(1, 6);
        const b = this.randInt(-7, 7);
        const d = this.randInt(1, 7);
        const lim = this.frac(a, c);
        return this.makeMcq(T, 1, "Limite d'un quotient de polynômes en $n$",
          'Lever une indétermination en factorisant par le terme de plus haut degré',
          `Déterminer la limite de la suite définie pour tout $n \\in \\mathbb{N}$ par $u_n = \\frac{${this.poly([[a, 'n'], [b, '']])}}{${this.poly([[c, 'n'], [d, '']])}}$.`,
          `$${lim}$`,
          [`$${this.frac(b, d)}$`, '$0$', inf(a), `$${this.frac(c, a)}$`, `$${a}$`],
          'Factorise numérateur et dénominateur par $n$.',
          `Pour $n \\ge 1$ : $u_n = \\frac{${a} ${this.formatSign(b)}/n}{${c} ${this.formatSign(d)}/n}$.`.replace(/ \+ 0\/n| - 0\/n/g, ''),
          `Pour $n \\ge 1$, $u_n = \\frac{n(${this.poly([[a, ''], [`\\frac{${Math.abs(b)}}{n}`, '']]).replace('+ \\frac', b < 0 ? '- \\frac' : '+ \\frac')})}{n(${this.poly([[c, ''], [`\\frac{${d}}{n}`, '']])})}$. Les termes en $\\frac{1}{n}$ tendent vers $0$, donc $\\lim u_n = ${lim}$.`.replace(/ [+-] \\frac\{0\}\{n\}/, '')
        );
      }
      if (f === 2) {
        const Q = this.randChoice([['0{,}5', 0.5], ['0{,}2', 0.2], ['0{,}9', 0.9], ['-0{,}5', -0.5], ['\\frac{1}{3}', 1 / 3], ['\\frac{2}{3}', 2 / 3], ['-\\frac{3}{4}', -0.75], ['2', 2], ['3', 3], ['1{,}5', 1.5]]);
        const k = this.randNonZero(-5, 5);
        const L = this.randInt(-6, 6);
        const head = (k === 1 ? '' : k === -1 ? '-' : `${k} \\times `) + `\\left(${Q[0]}\\right)^{n}`;
        const expr = L === 0 ? head : `${head} ${this.formatSign(L)}`;
        const conv = Math.abs(Q[1]) < 1;
        const ans = conv ? `$${L}$` : inf(k);
        return this.makeMcq(T, 1, "Limite d'une suite géométrique",
          'Utiliser la limite de $q^n$ selon la valeur de $q$',
          `Déterminer la limite de la suite définie pour tout $n \\in \\mathbb{N}$ par $u_n = ${expr}$.`,
          ans,
          ['$0$', PI, MI, `$${L + k}$`, `$${k}$`, "La suite n'a pas de limite"].filter((x) => x !== ans),
          'Si $-1 < q < 1$, $q^n \\to 0$ ; si $q > 1$, $q^n \\to +\\infty$.',
          `Ici $q = ${Q[0]}$.`,
          conv ? `Comme $-1 < ${Q[0]} < 1$, $\\left(${Q[0]}\\right)^{n} \\to 0$, donc $\\lim u_n = ${L}$.`
            : `Comme $${Q[0]} > 1$, $\\left(${Q[0]}\\right)^{n} \\to +\\infty$ ; le coefficient $${k}$ étant ${k > 0 ? 'positif' : 'négatif'}, $\\lim u_n = ${k > 0 ? '+' : '-'}\\infty$.`
        );
      }
      const a = this.randNonZero(-5, 5);
      const b = this.randInt(-9, 9);
      const c = this.randInt(-9, 9);
      const deg = this.randChoice([2, 3]);
      const expr = this.poly([[a, `n^${deg}`], [b, 'n'], [c, '']]);
      return this.makeMcq(T, 1, "Limite d'une suite polynomiale",
        'Utiliser le terme de plus haut degré',
        `Déterminer la limite de la suite définie par $u_n = ${expr}$.`,
        inf(a),
        [inf(-a), '$0$', `$${c}$`, `$${a}$`],
        'Une suite polynomiale en $n$ a la limite de son terme de plus haut degré.',
        `Factorise par $n^${deg}$.`,
        `$u_n = n^${deg}\\left(${this.poly([[a, ''], [b ? (b < 0 ? '-' : '') + `\\frac{${Math.abs(b)}}{n^${deg - 1}}` : 0, ''], [c ? (c < 0 ? '-' : '') + `\\frac{${Math.abs(c)}}{n^${deg}}` : 0, '']])}\\right)$ et la parenthèse tend vers $${a}$, donc $\\lim u_n = ${a > 0 ? '+' : '-'}\\infty$.`.replace('n^1}', 'n}')
      );
    }
    if (tier === 2) {
      const f = this.randInt(1, 3);
      if (f === 1) {
        const L = this.randInt(-5, 5);
        const a = this.randInt(1, 6);
        const b = this.randInt(1, 6);
        const lo = this.poly([[L, ''], [`-\\frac{${a}}{n}`, '']]);
        const hi = this.poly([[L, ''], [`\\frac{${b}}{n^2}`, '']]);
        return this.makeMcq(T, 2, 'Théorème des gendarmes',
          "Déterminer une limite par encadrement",
          `Soit une suite $(u_n)$ telle que, pour tout $n \\ge 1$, $${lo} \\le u_n \\le ${hi}$. Quelle est la limite de $(u_n)$ ?`,
          `$${L}$`,
          [`$${L - a}$`, `$${L + b}$`, '$0$', PI, "On ne peut pas conclure"],
          'Cherche les limites des deux suites qui encadrent $u_n$.',
          `$\\frac{${a}}{n} \\to 0$ et $\\frac{${b}}{n^2} \\to 0$.`,
          `Les deux suites encadrantes tendent vers $${L}$. D'après le théorème des gendarmes, $(u_n)$ converge et $\\lim u_n = ${L}$.`
        );
      }
      if (f === 2) {
        const a = this.randNonZero(-6, 6);
        const b = this.randInt(1, 6);
        const osc = this.randChoice(['\\cos(n)', '\\sin(n)', '(-1)^n']);
        const lim = this.frac(a, b);
        return this.makeMcq(T, 2, 'Théorème des gendarmes',
          'Encadrer un terme oscillant borné',
          `Soit $(u_n)$ définie pour tout $n \\ge 1$ par $u_n = \\frac{${this.coefStr(a, 'n')} + ${osc}}{${this.coefStr(b, 'n')}}$. Quelle est sa limite ?`,
          `$${lim}$`,
          ['$0$', `$${this.frac(a + 1, b)}$`, `$${this.frac(b, a)}$`, PI, "La suite n'a pas de limite"],
          `Encadre $${osc}$ entre $-1$ et $1$.`,
          `Pour $n \\ge 1$ : $\\frac{${this.coefStr(a, 'n')} - 1}{${this.coefStr(b, 'n')}} \\le u_n \\le \\frac{${this.coefStr(a, 'n')} + 1}{${this.coefStr(b, 'n')}}$.`,
          `Les deux suites encadrantes valent $${lim} \\mp \\frac{1}{${this.coefStr(b, 'n')}}$ et tendent vers $${lim}$. Par le théorème des gendarmes, $\\lim u_n = ${lim}$.`
        );
      }
      const a = this.randInt(1, 6);
      const b = this.randInt(-9, 9);
      const up = Math.random() < 0.5;
      const rhs = up ? this.poly([[a, this.randChoice(['n', 'n^2', '\\sqrt{n}'])], [b, '']]) : this.poly([[-a, this.randChoice(['n', 'n^2', '\\sqrt{n}'])], [b, '']]);
      return this.makeMcq(T, 2, 'Théorème de comparaison',
        'Déduire une limite infinie par comparaison',
        `Soit une suite $(u_n)$ telle que, pour tout $n \\in \\mathbb{N}$, $u_n ${up ? '\\ge' : '\\le'} ${rhs}$. Que peut-on dire de la limite de $(u_n)$ ?`,
        up ? PI : MI,
        [up ? MI : PI, '$0$', `$${b}$`, 'On ne peut pas conclure'],
        `Quelle est la limite de $${rhs}$ ?`,
        up ? 'Une suite minorée par une suite qui tend vers $+\\infty$ tend vers $+\\infty$.' : 'Une suite majorée par une suite qui tend vers $-\\infty$ tend vers $-\\infty$.',
        `$\\lim (${rhs}) = ${up ? '+' : '-'}\\infty$ ; par comparaison, $\\lim u_n = ${up ? '+' : '-'}\\infty$.`
      );
    }
    if (tier === 3) {
      const f = this.randInt(1, 3);
      if (f === 1) {
        const p = this.randInt(1, 3);
        const a = this.randNonZero(-9, 9);
        const lim = this.frac(a, 2 * p);
        return this.makeMcq(T, 3, 'Forme indéterminée et quantité conjuguée',
          'Lever une indétermination « $\\infty - \\infty$ » avec la quantité conjuguée',
          `Déterminer la limite de $u_n = \\sqrt{${this.poly([[p * p, 'n^2'], [a, 'n']])}} - ${this.coefStr(p, 'n')}$ (définie pour $n$ assez grand).`,
          `$${lim}$`,
          ['$0$', PI, `$${this.frac(a, p)}$`, `$${a}$`, `$${this.frac(a, 4 * p)}$`],
          'Multiplie et divise par la quantité conjuguée.',
          `$u_n = \\frac{${this.coefStr(a, 'n')}}{\\sqrt{${this.poly([[p * p, 'n^2'], [a, 'n']])}} + ${this.coefStr(p, 'n')}}$.`,
          `Avec la quantité conjuguée, $u_n = \\frac{${this.coefStr(a, 'n')}}{\\sqrt{${this.poly([[p * p, 'n^2'], [a, 'n']])}} + ${this.coefStr(p, 'n')}} = \\frac{${a}}{\\sqrt{${this.poly([[p * p, ''], [`\\frac{${Math.abs(a)}}{n}`, '']]).replace('+ \\frac', a < 0 ? '- \\frac' : '+ \\frac')}} + ${p}}$, qui tend vers $${lim}$.`.replace('\\frac{-', '-\\frac{')
        );
      }
      if (f === 2) {
        const a = this.randInt(3, 7);
        const b = this.randInt(2, a - 1);
        const p = this.randInt(1, 5);
        const q = this.randInt(1, 5);
        const c = this.randInt(1, 9);
        const t = (k, base) => (k === 1 ? `${base}^{n}` : `${k} \\times ${base}^{n}`);
        const lim = this.frac(p, q);
        return this.makeMcq(T, 3, 'Quotient de suites géométriques',
          'Factoriser par la puissance dominante',
          `Déterminer la limite de $u_n = \\frac{${t(p, a)} + ${b}^{n}}{${t(q, a)} + ${c}}$.`,
          `$${lim}$`,
          ['$0$', PI, `$${this.frac(p + 1, q)}$`, `$${this.frac(q, p)}$`, '$1$'],
          `Factorise numérateur et dénominateur par $${a}^{n}$.`,
          `$\\left(${this.frac(b, a)}\\right)^{n} \\to 0$ et $\\frac{${c}}{${a}^{n}} \\to 0$.`,
          `$u_n = \\frac{${p} + \\left(${this.frac(b, a)}\\right)^{n}}{${q} + \\frac{${c}}{${a}^{n}}}$ et comme $0 < ${this.frac(b, a)} < 1$, $\\lim u_n = ${lim}$.`
        );
      }
      const a = this.randNonZero(-5, 5);
      const b = this.randInt(1, 9) * (a > 0 ? 1 : -1);
      const c = this.randInt(-9, 9);
      return this.makeMcq(T, 3, 'Forme indéterminée « $\\infty - \\infty$ »',
        'Lever une indétermination en factorisant par le terme dominant',
        `Déterminer la limite de $u_n = ${this.poly([[a, 'n^3'], [-b, 'n^2'], [c, 'n']])}$.`,
        inf(a),
        [inf(-a), '$0$', `$${a - b}$`, 'Forme indéterminée : la suite n\'a pas de limite'],
        'Les termes ont des limites de signes contraires : factorise par $n^3$.',
        `$u_n = n^3\\left(${this.poly([[a, ''], [(b > 0 ? '-' : '') + `\\frac{${Math.abs(b)}}{n}`, ''], [c ? (c < 0 ? '-' : '') + `\\frac{${Math.abs(c)}}{n^2}` : 0, '']])}\\right)$.`,
        `La parenthèse tend vers $${a}$ et $n^3 \\to +\\infty$, donc $\\lim u_n = ${a > 0 ? '+' : '-'}\\infty$.`
      );
    }
    // tier 4
    if (Math.random() < 0.6) {
      const [p, s] = this.randChoice([[1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [2, 5], [3, 5], [4, 5]]);
      const t = this.randNonZero(-3, 3);
      const L = s * t;
      const r = t * (s - p);
      let u0 = this.randInt(-5, 5);
      if (u0 === L) u0 = L + 1;
      const q = `\\frac{${p}}{${s}}`;
      return this.makeMcq(T, 4, 'Suite arithmético-géométrique',
        'Utiliser une suite auxiliaire géométrique pour obtenir une limite',
        `Soit $(u_n)$ définie par $u_0 = ${u0}$ et $u_{n+1} = ${this.poly([[q, 'u_n'], [r, '']])}$. On pose $v_n = u_n ${this.formatSign(-L)}$. Sachant que $(v_n)$ est géométrique, quelle est la limite de $(u_n)$ ?`,
        `$${L}$`,
        [`$${r}$`, '$0$', `$${this.frac(r * s, s + p)}$`, `$${u0}$`, PI],
        'Le point fixe $\\ell$ vérifie $\\ell = ' + this.poly([[q, '\\ell'], [r, '']]) + '$.',
        `$(v_n)$ est géométrique de raison $${q}$, avec $-1 < ${q} < 1$.`,
        `$v_{n+1} = u_{n+1} ${this.formatSign(-L)} = ${q}(u_n ${this.formatSign(-L)}) = ${q}v_n$. Comme $0 < ${q} < 1$, $v_n \\to 0$ donc $u_n = v_n ${this.formatSign(L)} \\to ${L}$.`
      );
    }
    const a = this.randInt(1, 5);
    const L = this.randInt(a + 1, a + 5);
    const b = L * L - a * L;
    const other = a - L;
    return this.makeMcq(T, 4, 'Limite d\'une suite récurrente $u_{n+1} = f(u_n)$',
      'Utiliser la continuité de $f$ pour déterminer la limite (point fixe)',
      `Soit $(u_n)$ définie par $u_0 = 0$ et $u_{n+1} = \\sqrt{${this.poly([[a, 'u_n'], [b, '']])}}$. On admet que $(u_n)$ est croissante et majorée, donc convergente vers un réel $\\ell \\ge 0$. Que vaut $\\ell$ ?`,
      `$${L}$`,
      [`$${other}$`, `$${b}$`, `$\\sqrt{${b}}$`, `$${L + 1}$`],
      `Par continuité, $\\ell = \\sqrt{${this.poly([[a, '\\ell'], [b, '']])}}$.`,
      `Élève au carré : $\\ell^2 - ${this.coefStr(a, '\\ell')} - ${b} = 0$, puis garde la solution positive.`,
      `$\\ell^2 = ${this.poly([[a, '\\ell'], [b, '']])}$ donne $(\\ell - ${L})(\\ell ${this.formatSign(-other)}) = 0$, soit $\\ell = ${L}$ ou $\\ell = ${other}$. Comme $\\ell \\ge 0$, $\\ell = ${L}$.`
    );
  },

  // ---------------------------------------------------------------------
  // TA3 : Limites de fonctions, continuité, TVI
  // ---------------------------------------------------------------------
  gen_TA3(tier) {
    const T = 'TA3';
    const PI = '$+\\infty$';
    const MI = '$-\\infty$';
    if (tier === 1) {
      const f = this.randInt(1, 4);
      const toPlus = Math.random() < 0.5;
      const dir = toPlus ? '+\\infty' : '-\\infty';
      const sgn = toPlus ? 1 : -1;
      let num; let den; let ans; let sol;
      const a = this.randNonZero(-6, 6);
      const d = this.randInt(1, 5);
      const b = this.randInt(-6, 6);
      const c = this.randInt(-6, 6);
      const e = this.randInt(1, 6);
      if (f === 1) {
        num = this.poly([[a, 'x^2'], [b, 'x'], [c, '']]);
        den = this.poly([[d, 'x^2'], [e, '']]);
        ans = `$${this.frac(a, d)}$`;
        sol = `En factorisant numérateur et dénominateur par $x^2$, $f(x)$ a même limite que le rapport des coefficients dominants : la limite vaut $${this.frac(a, d)}$.`;
      } else if (f === 2) {
        num = this.poly([[a, 'x'], [b, '']]);
        den = this.poly([[d, 'x^2'], [e, '']]);
        ans = '$0$';
        sol = `Le degré du numérateur est inférieur à celui du dénominateur : $f(x)$ se comporte comme $\\frac{${this.coefStr(a, 'x')}}{${this.coefStr(d, 'x^2')}}$, qui tend vers $0$.`;
      } else if (f === 3) {
        num = this.poly([[a, 'x^2'], [b, '']]);
        den = this.poly([[d, 'x'], [e, '']]);
        const s = Math.sign(a) * sgn;
        ans = s > 0 ? PI : MI;
        sol = `Pour $x$ assez grand en valeur absolue, $f(x)$ se comporte comme $\\frac{${this.coefStr(a, 'x^2')}}{${this.coefStr(d, 'x')}} = ${this.poly([[this.frac(a, d), 'x']])}$, qui tend vers $${s > 0 ? '+' : '-'}\\infty$ en $${dir}$.`;
      } else {
        const expr = this.poly([[a, 'x^3'], [b, 'x^2'], [c, '']]);
        const s = Math.sign(a) * sgn;
        return this._TA_lim(this.makeMcq(T, 1, "Limite d'une fonction polynôme à l'infini",
          'Utiliser le terme de plus haut degré',
          `Soit $f(x) = ${expr}$. Déterminer $\\lim_{x \\to ${dir}} f(x)$.`,
          s > 0 ? PI : MI,
          [s > 0 ? MI : PI, '$0$', `$${a}$`, `$${c}$`],
          'Une fonction polynôme a la même limite à l\'infini que son terme de plus haut degré.',
          `Étudie $\\lim_{x \\to ${dir}} ${this.coefStr(a, 'x^3')}$.`,
          `$\\lim_{x \\to ${dir}} f(x) = \\lim_{x \\to ${dir}} ${this.coefStr(a, 'x^3')} = ${s > 0 ? '+' : '-'}\\infty$.`
        ), `\\lim_{x \\to ${dir}} f(x)`);
      }
      return this._TA_lim(this.makeMcq(T, 1, "Limite d'une fonction rationnelle à l'infini",
        'Comparer les termes de plus haut degré',
        `Soit $f(x) = \\frac{${num}}{${den}}$. Déterminer $\\lim_{x \\to ${dir}} f(x)$.`,
        ans,
        [PI, MI, '$0$', `$${this.frac(a, d)}$`, `$${this.frac(c || b || 1, e)}$`, `$${a}$`].filter((x) => x !== ans),
        'Factorise numérateur et dénominateur par leur terme de plus haut degré.',
        'Compare les degrés du numérateur et du dénominateur.',
        sol
      ), `\\lim_{x \\to ${dir}} f(x)`);
    }
    if (tier === 2) {
      const a = this.randNonZero(-5, 5);
      const c = this.randNonZero(-5, 5);
      let b = this.randInt(-8, 8);
      if (a * c + b === 0) b += 1;
      const N = a * c + b;
      const fx = `\\frac{${this.poly([[a, 'x'], [b, '']])}}{${this.poly([[1, 'x'], [-c, '']])}}`;
      const r2 = Math.random();
      if (r2 < 0.3) {
        // Forme « 0/0 » levée par factorisation : (x - c)(x - r) / (x - c)
        let r = this.randInt(-6, 6); if (r === c) r += 1;
        const num = this.poly([[1, 'x^2'], [-(c + r), 'x'], [c * r, '']]);
        const L0 = c - r;
        return this._TA_lim(this.makeMcq(T, 2, 'Limite en un point : forme indéterminée levée par factorisation',
          'Lever une indétermination en factorisant',
          `Déterminer $\\ell = \\lim_{x \\to ${c}} \\frac{${num}}{${this.poly([[1, 'x'], [-c, '']])}}$.`,
          `$${L0}$`,
          ['$0$', '$+\\infty$', `$${c + r}$`, `$${c * r}$`, `$${2 * c - r + (2 * c - r === L0 ? 1 : 0)}$`].filter((x) => x !== `$${L0}$`),
          `Le numérateur et le dénominateur s'annulent tous les deux en $${c}$ : c'est une forme indéterminée.`,
          `$${c}$ est racine du numérateur : factorise-le par $${this.poly([[1, 'x'], [-c, '']])}$.`,
          `Pour $x \\neq ${c}$, $${num} = (${this.poly([[1, 'x'], [-c, '']])})(${this.poly([[1, 'x'], [-r, '']])})$, donc la fraction vaut $${this.poly([[1, 'x'], [-r, '']])}$. Ainsi $\\ell = ${c} ${this.formatSign(-r)} = ${L0}$.`.replace(' + 0 = ', ' = ').replace(' - 0 = ', ' = ')
        ), '\\ell');
      }
      if (r2 < 0.65) {
        const right = Math.random() < 0.5;
        const s = Math.sign(N) * (right ? 1 : -1);
        return this._TA_lim(this.makeMcq(T, 2, 'Limite en un point : asymptote verticale',
          'Étudier le signe du dénominateur pour une limite « $\\frac{k}{0}$ »',
          `Soit $f(x) = ${fx}$ définie pour $x \\neq ${c}$. Déterminer la limite de $f(x)$ quand $x$ tend vers $${c}$ avec $x ${right ? '>' : '<'} ${c}$.`,
          s > 0 ? PI : MI,
          [s > 0 ? MI : PI, '$0$', `$${a}$`, `$${N}$`],
          `Le numérateur tend vers $${a} \\times ${this.paren(c)}${b ? ' ' + this.formatSign(b) : ''} = ${N}$.`,
          `Quand $x \\to ${c}$ avec $x ${right ? '>' : '<'} ${c}$, le dénominateur tend vers $0$ en restant ${right ? 'positif' : 'négatif'}.`,
          `Le numérateur tend vers $${N}$ et le dénominateur vers $0^{${right ? '+' : '-'}}$ : par quotient, la limite est $${s > 0 ? '+' : '-'}\\infty$. La droite d'équation $x = ${c}$ est asymptote verticale.`
        ), `\\lim_{x \\to ${c}^{${right ? '+' : '-'}}} f(x)`);
      }
      return this._Tx(this.makeMcq(T, 2, 'Asymptotes d\'une fonction homographique',
        'Interpréter graphiquement des limites',
        `Soit $f(x) = ${fx}$ définie pour $x \\neq ${c}$. Quelles sont les asymptotes à la courbe de $f$ ?`,
        `$x = ${c}$ et $y = ${a}$`,
        [`$x = ${a}$ et $y = ${c}$`, `$x = ${-c}$ et $y = ${a}$`, `$x = ${c}$ et $y = ${b}$`, `$x = ${c}$ et $y = 0$`],
        'Une asymptote horizontale provient d\'une limite finie en $\\pm\\infty$ ; une verticale, d\'une limite infinie en un point.',
        `Calcule $\\lim_{x \\to \\pm\\infty} f(x)$ puis étudie $f$ au voisinage de $${c}$.`,
        `$\\lim_{x \\to \\pm\\infty} f(x) = ${a}$ (rapport des termes de plus haut degré) : asymptote horizontale $y = ${a}$. En $${c}$, le numérateur tend vers $${N} \\neq 0$ et le dénominateur vers $0$ : asymptote verticale $x = ${c}$.`
      ), [c, a], 'Les asymptotes ont pour équations $x = p$ (verticale) et $y = q$ (horizontale) : saisir (p ; q).');
    }
    if (tier === 3) {
      if (Math.random() < 0.55) {
        const p = this.randInt(1, 5);
        const k = this.randInt(-3, 2);
        const F = (x) => x ** 3 + p * x;
        const qmin = -F(k + 1) + 1;
        const qmax = -F(k) - 1;
        const q = this.randInt(qmin, qmax);
        const f = (x) => F(x) + q;
        const expr = this.poly([[1, 'x^3'], [p, 'x'], [q, '']]);
        const I = (m) => `$[${m} ; ${m + 1}]$`;
        return this._Tx(this.makeMcq(T, 3, 'Théorème des valeurs intermédiaires',
          'Localiser une solution grâce au corollaire du TVI',
          `Soit $f(x) = ${expr}$ sur $\\mathbb{R}$. La fonction $f$ est continue et strictement croissante, et l'équation $f(x) = 0$ admet une unique solution $\\alpha$. Dans quel intervalle se trouve $\\alpha$ ?`,
          I(k),
          [I(k - 1), I(k + 1), I(k + 2), I(k - 2)],
          'Calcule $f(m)$ pour quelques entiers $m$ et cherche deux entiers consécutifs où $f$ change de signe.',
          `$f(0) = ${f(0)}$ ${f(0) > 0 ? '> 0 : la solution est négative ; calcule $f(-1)$, $f(-2)$…' : '< 0 : la solution est positive ; calcule $f(1)$, $f(2)$…'}`,
          `$f$ est continue et strictement croissante sur $[${k} ; ${k + 1}]$, avec $f(${k}) = ${f(k)} < 0$ et $f(${k + 1}) = ${f(k + 1)} > 0$. D'après le corollaire du TVI, $\\alpha \\in [${k} ; ${k + 1}]$.`
        ), k, 'L\'intervalle cherché est de la forme $[m ; m + 1]$ avec $m$ entier : saisir l\'entier $m$.');
      }
      const a = this.randInt(1, 2);
      const q = this.randInt(-5, 5);
      const max = 2 * a ** 3 + q;
      const min = -2 * a ** 3 + q;
      const m = this.randChoice([this.randInt(min - 5, max + 5), max, min, this.randInt(min + 1, max - 1)]);
      const n = m > max || m < min ? 1 : (m === max || m === min ? 2 : 3);
      const expr = this.poly([[1, 'x^3'], [-3 * a * a, 'x'], [q, '']]);
      return this.makeMcq(T, 3, 'Nombre de solutions d\'une équation',
        'Combiner tableau de variations et corollaire du TVI',
        `Soit $f(x) = ${expr}$. On sait que $f$ est croissante sur $]-\\infty ; ${-a}]$, décroissante sur $[${-a} ; ${a}]$, croissante sur $[${a} ; +\\infty[$, avec $f(${-a}) = ${max}$ et $f(${a}) = ${min}$. Combien de solutions réelles l'équation $f(x) = ${m}$ admet-elle ?`,
        `$${n}$`,
        ['$0$', '$1$', '$2$', '$3$'].filter((x) => x !== `$${n}$`),
        'Sur chaque intervalle de monotonie, compare $' + m + '$ aux valeurs extrêmes de $f$.',
        '$\\lim_{x \\to -\\infty} f(x) = -\\infty$ et $\\lim_{x \\to +\\infty} f(x) = +\\infty$.',
        n === 3 ? `Comme $${min} < ${m} < ${max}$, le corollaire du TVI donne une solution sur chacun des trois intervalles de monotonie : $3$ solutions.`
          : n === 2 ? `$${m}$ est une valeur extrême de $f$ : elle est atteinte en un point où $f'$ s'annule, et une seule autre fois sur l'intervalle de monotonie opposé : $2$ solutions.`
            : `$${m}$ est ${m > max ? 'strictement supérieur au maximum local' : 'strictement inférieur au minimum local'} : une seule branche strictement monotone atteint $${m}$, d'où $1$ solution.`
      );
    }
    // tier 4
    const f = this.randInt(1, 3);
    if (f === 1) {
      const a = this.randNonZero(-4, 4);
      const b = this.randInt(-6, 6);
      const c = this.randInt(-3, 3);
      const k = a * c + b - c * c;
      return this.makeMcq(T, 4, 'Continuité d\'une fonction définie par morceaux',
        'Déterminer un paramètre pour assurer la continuité',
        `Soit $f$ définie sur $\\mathbb{R}$ par $f(x) = ${this.poly([[a, 'x'], [b, '']])}$ si $x < ${c}$ et $f(x) = x^2 + k$ si $x \\ge ${c}$, où $k$ est un réel. Pour quelle valeur de $k$ la fonction $f$ est-elle continue sur $\\mathbb{R}$ ?`,
        `$k = ${k}$`,
        [`$k = ${a * c + b}$`, `$k = ${a * c + b + c * c}$`, `$k = ${k + 1}$`, `$k = ${-k}$`, `$k = ${b}$`],
        `Il suffit d'étudier la continuité en $${c}$.`,
        `Écris l'égalité $\\lim_{x \\to ${c}, \\, x < ${c}} f(x) = f(${c})$.`,
        `À gauche : $${a} \\times ${this.paren(c)}${b ? ' ' + this.formatSign(b) : ''} = ${a * c + b}$. En $${c}$ : $f(${c}) = ${c * c} + k$. Continuité : $${c * c} + k = ${a * c + b}$, soit $k = ${k}$.`
      );
    }
    if (f === 2) {
      const a = this.randNonZero(-5, 5);
      const b = this.randInt(1, 5);
      const useLn = Math.random() < 0.4 && a > 0;
      const top = useLn ? `\\ln(1 + ${this.coefStr(a, 'x')})` : `e^{${this.coefStr(a, 'x')}} - 1`;
      const lim = this.frac(a, b);
      return this._TA_lim(this.makeMcq(T, 4, 'Limite et nombre dérivé',
        'Reconnaître un taux d\'accroissement',
        `Déterminer $\\ell = \\lim_{x \\to 0} \\frac{${top}}{${this.coefStr(b, 'x')}}$.`,
        `$${lim}$`,
        ['$0$', '$1$', PI, `$${this.frac(b, a)}$`, `$${a}$`],
        useLn ? 'Rappel : $\\lim_{h \\to 0} \\frac{\\ln(1 + h)}{h} = 1$.' : 'Rappel : $\\lim_{h \\to 0} \\frac{e^{h} - 1}{h} = 1$ (nombre dérivé de $\\exp$ en $0$).',
        `Pose $h = ${this.coefStr(a, 'x')}$.`,
        `$\\frac{${top}}{${this.coefStr(b, 'x')}} = ${lim === '1' ? '' : (lim === '-1' ? '-' : lim + ' \\times ')}\\frac{${top}}{${this.coefStr(a, 'x')}}$ et la seconde fraction tend vers $1$ : la limite vaut $${lim}$.`
      ), '\\ell');
    }
    const a = this.randNonZero(-6, 6);
    const c = this.randInt(1, 5);
    const b = this.randInt(-5, 5);
    const d = this.randInt(1, 6);
    const lim = this.frac(a, c);
    const ans = lim === '1' ? '$e$' : `$e^{${lim}}$`;
    const ds = [PI, '$1$', '$0$', `$${lim}$`];
    if (this.frac(b, d) !== lim) ds.push(this.frac(b, d) === '1' ? '$e$' : this.frac(b, d) === '0' ? '$1$' : `$e^{${this.frac(b, d)}}$`);
    return this._TA_lim(this.makeMcq(T, 4, 'Limite d\'une fonction composée',
      'Composer des limites',
      `Déterminer $\\ell = \\lim_{x \\to +\\infty} e^{\\frac{${this.poly([[a, 'x'], [b, '']])}}{${this.poly([[c, 'x'], [d, '']])}}}$.`,
      ans, ds,
      'Calcule d\'abord la limite de l\'exposant.',
      'Utilise ensuite la continuité de la fonction exponentielle.',
      `$\\lim_{x \\to +\\infty} \\frac{${this.poly([[a, 'x'], [b, '']])}}{${this.poly([[c, 'x'], [d, '']])}} = ${lim}$ ; par composition avec $\\exp$, continue, la limite vaut ${ans}.`
    ), '\\ell');
  },

  // ---------------------------------------------------------------------
  // TA4 : Convexité
  // ---------------------------------------------------------------------
  gen_TA4(tier) {
    const T = 'TA4';
    if (tier === 1) {
      const r1 = Math.random();
      if (r1 < 0.3) {
        // Valeur de f'' en un point et convexité locale
        const a = this.randNonZero(-3, 3); const b = this.randInt(-5, 5); const c = this.randInt(-6, 6); const d = this.randInt(-5, 5);
        const x0 = this.randInt(-3, 3);
        const f = this.poly([[a, 'x^3'], [b, 'x^2'], [c, 'x'], [d, '']]);
        const f2 = this.poly([[6 * a, 'x'], [2 * b, '']]);
        const v = 6 * a * x0 + 2 * b;
        const v1 = 3 * a * x0 * x0 + 2 * b * x0 + c;
        return this.makeMcq(T, 1, 'Dérivée seconde en un point et convexité',
          'Calculer $f\'\'(a)$ et interpréter son signe',
          `Soit $f(x) = ${f}$. Calculer $f''(${x0})$ ; son signe indique si $f$ est convexe ou concave au voisinage de $${x0}$.`,
          `$f''(${x0}) = ${v}$`,
          [v1, 3 * a * x0 + 2 * b, 6 * a * x0 + b, -v, v + 2 * b].filter((x) => x !== v).map((x) => `$f''(${x0}) = ${x}$`),
          'Dérive deux fois, puis remplace $x$ par la valeur demandée.',
          `$f'(x) = ${this.poly([[3 * a, 'x^2'], [2 * b, 'x'], [c, '']])}$.`,
          `$f'(x) = ${this.poly([[3 * a, 'x^2'], [2 * b, 'x'], [c, '']])}$ et $f''(x) = ${f2}$, donc $f''(${x0}) = ${6 * a} \\times ${this.paren(x0)}${b ? ' ' + this.formatSign(2 * b) : ''} = ${v}$. ` +
            (v > 0 ? `Comme $f''(${x0}) > 0$ et que $f''$ est continue, $f$ est convexe au voisinage de $${x0}$.` : v < 0 ? `Comme $f''(${x0}) < 0$ et que $f''$ est continue, $f$ est concave au voisinage de $${x0}$.` : `$f''(${x0}) = 0$ : on ne peut pas conclure sans étudier le signe de $f''$ autour de $${x0}$.`)
        );
      }
      if (r1 < 0.65) {
        const a = this.randNonZero(-4, 4); const b = this.randInt(-6, 6); const c = this.randInt(-9, 9); const d = this.randInt(-9, 9);
        const f = this.poly([[a, 'x^3'], [b, 'x^2'], [c, 'x'], [d, '']]);
        const f1 = this.poly([[3 * a, 'x^2'], [2 * b, 'x'], [c, '']]);
        const ans = this.poly([[6 * a, 'x'], [2 * b, '']]);
        return this._Tx(this.makeMcq(T, 1, 'Calcul d\'une dérivée seconde',
          'Dériver deux fois une fonction polynôme',
          `Soit $f(x) = ${f}$. Déterminer $f''(x)$.`,
          `$f''(x) = ${ans}$`,
          [`$f''(x) = ${f1}$`, `$f''(x) = ${this.poly([[3 * a, 'x'], [2 * b, '']])}$`, `$f''(x) = ${this.poly([[6 * a, 'x'], [b, '']])}$`, `$f''(x) = ${this.poly([[6 * a, 'x^2'], [2 * b, 'x']])}$`],
          'Dérive une première fois, puis dérive $f\'$.',
          `$f'(x) = ${f1}$.`,
          `$f'(x) = ${f1}$, puis $f''(x) = ${ans}$.`
        ), [6 * a, 2 * b], 'On écrit $f\'\'(x) = \\alpha x + \\beta$ : saisir (α ; β).');
      }
      const a = this.randNonZero(-3, 3); const b = this.randInt(-5, 5); const c = this.randNonZero(-6, 6);
      const f = this.poly([[a, 'x^4'], [b, 'x^3'], [c, 'x^2']]);
      const ans = this.poly([[12 * a, 'x^2'], [6 * b, 'x'], [2 * c, '']]);
      return this._Tx(this.makeMcq(T, 1, 'Calcul d\'une dérivée seconde',
        'Dériver deux fois une fonction polynôme',
        `Soit $f(x) = ${f}$. Déterminer $f''(x)$.`,
        `$f''(x) = ${ans}$`,
        [`$f''(x) = ${this.poly([[4 * a, 'x^3'], [3 * b, 'x^2'], [2 * c, 'x']])}$`, `$f''(x) = ${this.poly([[12 * a, 'x^2'], [6 * b, 'x'], [c, '']])}$`, `$f''(x) = ${this.poly([[4 * a, 'x^2'], [3 * b, 'x'], [2 * c, '']])}$`, `$f''(x) = ${this.poly([[12 * a, 'x^3'], [6 * b, 'x^2'], [2 * c, 'x']])}$`],
        'Dérive une première fois, puis dérive $f\'$.',
        `$f'(x) = ${this.poly([[4 * a, 'x^3'], [3 * b, 'x^2'], [2 * c, 'x']])}$.`,
        `$f'(x) = ${this.poly([[4 * a, 'x^3'], [3 * b, 'x^2'], [2 * c, 'x']])}$, puis $f''(x) = ${ans}$.`
      ), [12 * a, 6 * b, 2 * c], 'On écrit $f\'\'(x) = \\alpha x^2 + \\beta x + \\gamma$ : saisir (α ; β ; γ).');
    }
    if (tier === 2) {
      const a = this.randNonZero(-3, 3); const b = this.randNonZero(-6, 6); const c = this.randInt(-9, 9); const d = this.randInt(-9, 9);
      const f = this.poly([[a, 'x^3'], [b, 'x^2'], [c, 'x'], [d, '']]);
      const f2 = this.poly([[6 * a, 'x'], [2 * b, '']]);
      const x0 = this.frac(-b, 3 * a);
      if (Math.random() < 0.5) {
        return this.makeMcq(T, 2, 'Point d\'inflexion d\'une cubique',
          'Chercher où la dérivée seconde s\'annule en changeant de signe',
          `Soit $f(x) = ${f}$. Quelle est l'abscisse du point d'inflexion de sa courbe ?`,
          `$x = ${x0}$`,
          [`$x = ${this.frac(b, 3 * a)}$`, `$x = ${this.frac(-b, a)}$`, `$x = ${this.frac(-b, 6 * a)}$`, `$x = ${this.frac(-2 * b, 3 * a)}$`, `$x = ${this.frac(-c, 2 * b)}$`],
          'Un point d\'inflexion correspond à un changement de signe de $f\'\'$.',
          `$f''(x) = ${f2}$.`,
          `$f''(x) = ${f2}$ s'annule en changeant de signe pour $x = ${x0}$ : c'est l'abscisse du point d'inflexion.`
        );
      }
      const convR = `$[${x0} ; +\\infty[$`; const convL = `$]-\\infty ; ${x0}]$`;
      const ans = a > 0 ? convR : convL;
      const wrong = this.frac(b, 3 * a);
      return this.makeMcq(T, 2, 'Intervalle de convexité',
        'Étudier le signe de la dérivée seconde',
        `Soit $f(x) = ${f}$. Sur quel intervalle $f$ est-elle convexe ?`,
        ans,
        [a > 0 ? convL : convR, `$[${wrong} ; +\\infty[$`, `$]-\\infty ; ${wrong}]$`, '$\\mathbb{R}$'],
        '$f$ est convexe là où $f\'\' \\ge 0$.',
        `$f''(x) = ${f2}$.`,
        `$f''(x) = ${f2} \\ge 0 \\iff x ${a > 0 ? '\\ge' : '\\le'} ${x0}$. Donc $f$ est convexe sur ${ans.replace(/\$/g, '$')}.`
      );
    }
    if (tier === 3) {
      if (Math.random() < 0.6) {
        const b = this.randNonZero(-3, 3); const a = this.randInt(-6, 6);
        const f = `(${this.poly([[b, 'x'], [a, '']])})e^{x}`;
        const f2 = `(${this.poly([[b, 'x'], [a + 2 * b, '']])})e^{x}`;
        const x0 = this.frac(-(a + 2 * b), b);
        if (Math.random() < 0.5) {
          return this.makeMcq(T, 3, 'Point d\'inflexion avec l\'exponentielle',
            'Calculer $f\'\'$ pour un produit et étudier son signe',
            `Soit $f(x) = ${f}$ sur $\\mathbb{R}$. Quelle est l'abscisse du point d'inflexion de sa courbe ?`,
            `$x = ${x0}$`,
            [`$x = ${this.frac(-a, b)}$`, `$x = ${this.frac(-(a + b), b)}$`, `$x = ${this.frac(a + 2 * b, b)}$`, `$x = ${this.frac(-(a + 3 * b), b)}$`],
            'Dérive deux fois le produit $u \\times e^{x}$.',
            `$f'(x) = (${this.poly([[b, 'x'], [a + b, '']])})e^{x}$.`,
            `$f''(x) = ${f2}$. Comme $e^{x} > 0$, $f''$ s'annule en changeant de signe en $x = ${x0}$.`
          );
        }
        const ans = b > 0 ? `$[${x0} ; +\\infty[$` : `$]-\\infty ; ${x0}]$`;
        return this.makeMcq(T, 3, 'Convexité avec l\'exponentielle',
          'Étudier le signe de $f\'\'$ pour un produit',
          `Soit $f(x) = ${f}$ sur $\\mathbb{R}$. Sur quel intervalle $f$ est-elle convexe ?`,
          ans,
          [b > 0 ? `$]-\\infty ; ${x0}]$` : `$[${x0} ; +\\infty[$`, `$[${this.frac(-a, b)} ; +\\infty[$`, `$]-\\infty ; ${this.frac(-a, b)}]$`, '$\\mathbb{R}$'],
          '$f$ est convexe là où $f\'\' \\ge 0$.',
          `$f''(x) = ${f2}$ et $e^{x} > 0$.`,
          `$f''(x) = ${f2}$ est du signe de $${this.poly([[b, 'x'], [a + 2 * b, '']])}$, positif pour $x ${b > 0 ? '\\ge' : '\\le'} ${x0}$ : $f$ est convexe sur ${ans}.`
        );
      }
      const a = this.randInt(1, 5);
      return this.makeMcq(T, 3, 'Point d\'inflexion avec l\'exponentielle',
        'Résoudre $f\'\'(x) = 0$ avec le logarithme',
        `Soit $f(x) = e^{x} - ${this.coefStr(a, 'x^2')}$ sur $\\mathbb{R}$. Quelle est l'abscisse du point d'inflexion de sa courbe ?`,
        `$x = \\ln(${2 * a})$`,
        [`$x = \\ln(${a + 2 * a})$`, `$x = ${2 * a}$`, `$x = e^{${2 * a}}$`, `$x = \\frac{\\ln(${2 * a})}{2}$`],
        '$f\'\'(x) = e^{x} - ' + 2 * a + '$.',
        `Résous $e^{x} = ${2 * a}$.`,
        `$f''(x) = e^{x} - ${2 * a}$ s'annule en changeant de signe (fonction strictement croissante) pour $x = \\ln(${2 * a})$.`
      );
    }
    // tier 4
    const f = this.randInt(1, 4);
    if (f === 4) {
      // Tangente au point d'inflexion d'une cubique (elle traverse la courbe)
      const a = this.randChoice([-2, -1, 1, 2]); const x0 = this.randInt(-3, 3); const m = this.randInt(-5, 5); const y0 = this.randInt(-5, 5);
      const fx = this.poly([[a, 'x^3'], [-3 * a * x0, 'x^2'], [3 * a * x0 * x0 + m, 'x'], [-a * x0 ** 3 - m * x0 + y0, '']]);
      const p = y0 - m * x0;
      const Y = (mm, pp) => `$y = ${this.poly([[mm, 'x'], [pp, '']]) || '0'}$`;
      const ans = Y(m, p);
      const f0 = -a * x0 ** 3 - m * x0 + y0; const d0 = 3 * a * x0 * x0 + m;
      const tw = m === 0 ? String(y0) : `${m === 1 ? '' : m === -1 ? '-' : m}${x0 === 0 ? 'x' : `(x ${this.formatSign(-x0)})`}${y0 ? ' ' + this.formatSign(y0) : ''}`;
      return this._Tx(this.makeMcq(T, 4, 'Tangente au point d\'inflexion d\'une cubique',
        'Déterminer un point d\'inflexion et la tangente qui y traverse la courbe',
        `Soit $f(x) = ${fx}$. Déterminer l'équation réduite de la tangente à la courbe de $f$ en son point d'inflexion.`,
        ans,
        [Y(m, y0), Y(m, y0 + m * x0), Y(d0, f0), Y(-m, y0 + m * x0), Y(m, p + 1), Y(m, p - 1), Y(m + 1, p), Y(-m, p - 1)].filter((x, i, arr) => x !== ans && arr.indexOf(x) === i),
        'Le point d\'inflexion est l\'endroit où $f\'\'$ s\'annule en changeant de signe.',
        `$f''(x) = ${this.poly([[6 * a, 'x'], [-6 * a * x0, '']])}$ ; calcule ensuite $f$ et $f'$ en ce point et utilise $y = f'(a)(x - a) + f(a)$.`,
        `$f'(x) = ${this.poly([[3 * a, 'x^2'], [-6 * a * x0, 'x'], [d0, '']])}$ et $f''(x) = ${this.poly([[6 * a, 'x'], [-6 * a * x0, '']])}$, qui s'annule en changeant de signe en $x = ${x0}$ : c'est l'abscisse du point d'inflexion. $f(${x0}) = ${y0}$ et $f'(${x0}) = ${m}$, donc la tangente a pour équation $y = ${tw}$, soit ${ans}. Au point d'inflexion, la courbe traverse cette tangente.`
      ), [m, p], 'L\'équation réduite s\'écrit $y = mx + p$ : saisir (m ; p).');
    }
    if (f === 1) {
      const a = this.randInt(-2, 3);
      const E = a === 1 ? 'e' : `e^{${a}}`;
      const tan = (s) => (a === 0 ? this.poly([[1, 'x'], [s, '']]) : a === 1 && s === 0 ? 'e\\,x' : `${E}(${this.poly([[1, 'x'], [s, '']])})`);
      const ans = `$e^{x} \\ge ${tan(1 - a)}$`;
      return this.makeMcq(T, 4, 'Convexité et position par rapport à une tangente',
        'Utiliser la convexité pour établir une inégalité',
        `La fonction exponentielle est convexe sur $\\mathbb{R}$. Quelle inégalité, valable pour tout réel $x$, obtient-on avec sa tangente au point d'abscisse $${a}$ ?`,
        ans,
        [`$e^{x} \\le ${tan(1 - a)}$`, `$e^{x} \\ge ${tan(1 + a)}$`, `$e^{x} \\ge ${tan(-a)}$`.replace('e^{x} \\ge 0', 'e^{x} \\ge 0'), `$e^{x} \\le ${tan(-a)}$`],
        'La courbe d\'une fonction convexe est au-dessus de toutes ses tangentes.',
        a === 0 ? 'Tangente en $0$ : $y = \\exp\'(0) \\times x + \\exp(0) = x + 1$.' : `Tangente en $${a}$ : $y = ${E}(${this.poly([[1, 'x'], [-a, '']])}) + ${E}$, car $\\exp'(${a}) = \\exp(${a}) = ${E}$.`,
        `La tangente en $${a}$ a pour équation $y = ${tan(1 - a)}$. Par convexité, $e^{x} \\ge ${tan(1 - a)}$ pour tout réel $x$.`
      );
    }
    if (f === 2) {
      const a = this.randInt(2, 6);
      const tg = `\\frac{x}{${a}} + \\ln(${a}) - 1`;
      return this.makeMcq(T, 4, 'Concavité du logarithme et tangente',
        'Utiliser la concavité pour établir une inégalité',
        `La fonction $\\ln$ est concave sur $]0 ; +\\infty[$. Quelle inégalité, valable pour tout $x > 0$, obtient-on avec sa tangente au point d'abscisse $${a}$ ?`,
        `$\\ln(x) \\le ${tg}$`,
        [`$\\ln(x) \\ge ${tg}$`, `$\\ln(x) \\le \\frac{x}{${a}} - \\ln(${a}) + 1$`, `$\\ln(x) \\le ${a}x + \\ln(${a}) - ${a * a}$`, `$\\ln(x) \\ge \\frac{x}{${a}} - 1$`],
        'La courbe d\'une fonction concave est en dessous de ses tangentes.',
        `$\\ln'(${a}) = \\frac{1}{${a}}$ : la tangente est $y = \\frac{1}{${a}}(x - ${a}) + \\ln(${a})$.`,
        `Tangente en $${a}$ : $y = \\frac{1}{${a}}(x - ${a}) + \\ln(${a}) = ${tg}$. Par concavité, $\\ln(x) \\le ${tg}$ pour tout $x > 0$.`
      );
    }
    const k = this.randInt(1, 4);
    const c = this.randInt(-9, 9);
    return this._Tx(this.makeMcq(T, 4, 'Points d\'inflexion d\'une fonction de degré 4',
      'Étudier le signe d\'une dérivée seconde du second degré',
      `Soit $f(x) = ${this.poly([[1, 'x^4'], [-6 * k * k, 'x^2'], [c, '']])}$. Quelles sont les abscisses des points d'inflexion de sa courbe ?`,
      `$x = ${-k}$ et $x = ${k}$`,
      [`$x = ${-k * k}$ et $x = ${k * k}$`, '$x = 0$ uniquement', `$x = ${-k}$, $x = 0$ et $x = ${k}$`, `$x = ${-2 * k}$ et $x = ${2 * k}$`].filter((x) => x !== `$x = ${-k}$ et $x = ${k}$`),
      'Calcule $f\'\'$ et étudie son signe.',
      `$f''(x) = ${this.poly([[12, 'x^2'], [-12 * k * k, '']])} = 12(x - ${k})(x + ${k})$.`,
      `$f''(x) = 12(x^2 - ${k * k})$ s'annule en changeant de signe en $x = ${-k}$ et $x = ${k}$ : la courbe a deux points d'inflexion.`
    ), [-k, k], 'Saisir les abscisses dans l\'ordre croissant sous la forme (x₁ ; x₂).');
  },

  // ---------------------------------------------------------------------
  // TA5 : Logarithme népérien
  // ---------------------------------------------------------------------
  gen_TA5(tier) {
    const T = 'TA5';
    if (tier === 1) {
      if (Math.random() < 0.55) {
        const p = this.randChoice([2, 3, 5]);
        let e1; let e2; let e3; let k;
        do { e1 = this.randInt(2, 5); e2 = this.randInt(1, 3); e3 = this.randInt(2, 5); k = e1 + e2 - e3; } while (k === 0 || e3 === e1 || e3 === e2 || p ** e3 > 300 || p ** e1 > 300);
        const L = `\\ln(${p})`;
        const A = `\\ln(${p ** e1}) + \\ln(${p ** e2}) - \\ln(${p ** e3})`;
        return this._Tx(this.makeMcq(T, 1, 'Propriétés algébriques du logarithme',
          'Utiliser $\\ln(ab) = \\ln(a) + \\ln(b)$ et $\\ln(a^n) = n\\ln(a)$',
          `Écrire $A = ${A}$ sous la forme $k\\ln(${p})$.`,
          `$A = ${this.coefStr(k, L)}$`,
          [`$A = ${this.coefStr(e1 + e2 + e3, L)}$`, `$A = ${this.coefStr(e1 * e2 - e3 || 7, L)}$`, `$A = ${this.coefStr(k + 1, L)}$`, `$A = ${this.coefStr(-k, L)}$`],
          `Écris chaque nombre comme une puissance de $${p}$.`,
          [e1, e2, e3].filter((e) => e > 1).map((e) => `$${p ** e} = ${p}^{${e}}$`).join(', ') + '.',
          `$A = ${e1}\\ln(${p}) + ${e2}\\ln(${p}) - ${e3}\\ln(${p}) = ${this.coefStr(k, L)}$.`.replace(/(^|[^0-9])1\\ln/g, '$1\\ln')
        ), k, 'Saisir l\'entier $k$.');
      }
      const a = this.randInt(2, 6);
      const k = this.randChoice([2, 3]);
      const m = this.randNonZero(-5, 5);
      const val = a ** k - m;
      return this.makeMcq(T, 1, 'Logarithme et exponentielle',
        'Utiliser $e^{\\ln(a)} = a$ et $\\ln(e^{b}) = b$',
        `Calculer $B = e^{${k}\\ln(${a})} - \\ln(${this.pow('e', m)})$.`,
        `$B = ${val}$`,
        [`$B = ${k * a - m}$`, `$B = ${a ** k + m}$`, `$B = ${k * a + m}$`, `$B = ${a - m}$`],
        `$${k}\\ln(${a}) = \\ln(${a}^{${k}})$.`,
        `$e^{\\ln(x)} = x$ pour $x > 0$ et $\\ln(e^{y}) = y$.`,
        `$e^{${k}\\ln(${a})} = e^{\\ln(${a ** k})} = ${a ** k}$ et $\\ln(${this.pow('e', m)}) = ${m}$, donc $B = ${a ** k} ${this.formatSign(-m)} = ${val}$.`
      );
    }
    if (tier === 2) {
      const r2 = Math.random();
      if (r2 < 0.34) {
        // ln(x) = k ln(a) ± ln(b) : regrouper avant d'utiliser l'injectivité de ln
        const a = this.randInt(2, 5); const k = this.randChoice([2, 3]); const b = this.randInt(2, 7);
        const plus = Math.random() < 0.5;
        if (!plus && b === a) return this.gen_TA5(2);
        const num = plus ? a ** k * b : a ** k; const den = plus ? 1 : b;
        const sol = this.frac(num, den);
        const ds = [this.frac(k * a + (plus ? b : -b), 1), this.frac(plus ? a ** k + b : a ** k - b, 1), this.frac(plus ? k * a * b : k * a, plus ? 1 : b), this.frac(plus ? a * b : a, plus ? 1 : b)]
          .filter((d) => d !== sol && !/^-|^0$/.test(d));
        return this.makeMcq(T, 2, 'Équation $\\ln(x) = \\ln(c)$',
          'Regrouper des logarithmes puis utiliser $\\ln(x) = \\ln(c) \\iff x = c$',
          `Résoudre dans $]0 ; +\\infty[$ l'équation $\\ln(x) = ${k}\\ln(${a}) ${plus ? '+' : '-'} \\ln(${b})$.`,
          `$x = ${sol}$`,
          ds.map((d) => `$x = ${d}$`),
          `Écris le membre de droite comme un seul logarithme : $${k}\\ln(${a}) = \\ln(${a}^{${k}})$.`,
          plus ? '$\\ln(a) + \\ln(b) = \\ln(ab)$.' : '$\\ln(a) - \\ln(b) = \\ln\\left(\\frac{a}{b}\\right)$.',
          `$${k}\\ln(${a}) ${plus ? '+' : '-'} \\ln(${b}) = \\ln(${a ** k}) ${plus ? '+' : '-'} \\ln(${b}) = ${plus ? `\\ln(${a ** k} \\times ${b}) = ` : this.gcd(a ** k, b) === 1 ? '' : `\\ln(${a ** k} \\div ${b}) = `}\\ln\\left(${sol}\\right)$. Comme $\\ln$ est strictement croissante sur $]0 ; +\\infty[$, l'équation équivaut à $x = ${sol}$, qui est bien strictement positif.`
        );
      }
      if (r2 < 0.67) {
        const x0 = this.randInt(-3, 5);
        const [a, c] = this.pickDistinct([1, 2, 3, 4, 5], 2);
        const valid = Math.random() < 0.75;
        const v = valid ? this.randInt(1, 9) : -this.randInt(1, 6);
        const b = v - a * x0;
        const d = v - c * x0;
        const ans = valid ? `$S = \\{${x0}\\}$` : '$S = \\emptyset$';
        return this._Tx(this.makeMcq(T, 2, 'Équation avec logarithmes',
          'Résoudre $\\ln(u) = \\ln(v)$ en tenant compte du domaine',
          `Résoudre dans $\\mathbb{R}$ l'équation $\\ln(${this.poly([[a, 'x'], [b, '']])}) = \\ln(${this.poly([[c, 'x'], [d, '']])})$.`,
          ans,
          [valid ? '$S = \\emptyset$' : `$S = \\{${x0}\\}$`, `$S = \\{${-x0 === x0 ? x0 + 1 : -x0}\\}$`, `$S = \\{${v}\\}$`, `$S = \\{${x0 + 1}\\}$`],
          'Les deux logarithmes doivent être définis : les expressions doivent être strictement positives.',
          '$\\ln$ est strictement croissante, donc $\\ln(u) = \\ln(v) \\iff u = v$ (avec $u > 0$).',
          `$${this.poly([[a, 'x'], [b, '']])} = ${this.poly([[c, 'x'], [d, '']])} \\iff x = ${x0}$. Pour $x = ${x0}$, les deux expressions valent $${v}$${valid ? ', strictement positif : la solution convient. $S = \\{' + x0 + '\\}$.' : ' : elles ne sont pas strictement positives, donc la valeur est exclue. $S = \\emptyset$.'}`
        ), valid ? x0 : 'aucune', 'Saisir la solution, ou « aucune » si l\'équation n\'a pas de solution.');
      }
      const a = this.randInt(1, 6); const r = this.randInt(1, 6); const b = r * (r + a);
      return this._Tx(this.makeMcq(T, 2, 'Équation avec logarithmes',
        'Résoudre $\\ln(u) + \\ln(v) = \\ln(w)$ sans oublier le domaine',
        `Résoudre dans $]0 ; +\\infty[$ l'équation $\\ln(x) + \\ln(x + ${a}) = \\ln(${b})$.`,
        `$S = \\{${r}\\}$`,
        [`$S = \\{${-r - a} ; ${r}\\}$`, `$S = \\{${-r - a}\\}$`, '$S = \\emptyset$', `$S = \\{${b}\\}$`],
        'Sur $]0 ; +\\infty[$, $\\ln(x) + \\ln(x + ' + a + ') = \\ln(x(x + ' + a + '))$.',
        `Résous $x^2 + ${this.coefStr(a, 'x')} - ${b} = 0$ puis vérifie le domaine.`,
        `L'équation équivaut à $x(x + ${a}) = ${b}$, soit $(x - ${r})(x + ${r + a}) = 0$. Seule $x = ${r} > 0$ convient : $S = \\{${r}\\}$.`
      ), r, 'Saisir la solution, ou « aucune » si l\'équation n\'a pas de solution.');
    }
    if (tier === 3) {
      const f = this.randInt(1, 3);
      if (f === 1) {
        const a = this.randInt(1, 5); const b = this.randInt(1, 9);
        const u = this.poly([[a, 'x^2'], [b, '']]);
        return this._Tx(this.makeMcq(T, 3, 'Dérivée de $\\ln(u)$',
          'Appliquer $(\\ln u)\' = \\frac{u\'}{u}$',
          `Soit $f(x) = \\ln(${u})$ sur $\\mathbb{R}$. Déterminer $f'(x)$.`,
          `$f'(x) = \\frac{${this.coefStr(2 * a, 'x')}}{${u}}$`,
          [`$f'(x) = \\frac{1}{${u}}$`, `$f'(x) = \\frac{${this.coefStr(a, 'x')}}{${u}}$`, `$f'(x) = \\ln(${this.coefStr(2 * a, 'x')})$`, `$f'(x) = \\frac{${u}}{${this.coefStr(2 * a, 'x')}}$`],
          'Pour $u > 0$ dérivable, $(\\ln u)\' = \\frac{u\'}{u}$.',
          `Ici $u(x) = ${u}$ et $u'(x) = ${this.coefStr(2 * a, 'x')}$.`,
          `$f'(x) = \\frac{u'(x)}{u(x)} = \\frac{${this.coefStr(2 * a, 'x')}}{${u}}$.`
        ), 2 * a, `On écrit $f'(x) = \\frac{kx}{${u}}$ : saisir $k$.`);
      }
      if (f === 2) {
        const a = this.randNonZero(-4, 4); const b = this.randNonZero(-6, 6);
        const lin = this.poly([[a, 'x'], [b, '']]);
        const ans = `${this.coefStr(a, '\\ln(x)')} + \\frac{${lin}}{x}`;
        return this._Tx(this.makeMcq(T, 3, 'Dérivée d\'un produit avec $\\ln$',
          'Appliquer $(uv)\' = u\'v + uv\'$',
          `Soit $f(x) = (${lin})\\ln(x)$ sur $]0 ; +\\infty[$. Déterminer $f'(x)$.`,
          `$f'(x) = ${ans}$`,
          [`$f'(x) = \\frac{${a}}{x}$`, `$f'(x) = ${this.coefStr(a, '\\ln(x)')}$`, `$f'(x) = ${this.coefStr(a, '\\ln(x)')} + \\frac{1}{x}$`, `$f'(x) = \\frac{${lin}}{x}$`],
          'Produit : $(uv)\' = u\'v + uv\'$.',
          `$u(x) = ${lin}$, $v(x) = \\ln(x)$.`,
          `$f'(x) = ${a} \\times \\ln(x) + (${lin}) \\times \\frac{1}{x} = ${ans}$.`
        ), [a, a, b], 'On écrit $f\'(x) = \\alpha\\ln(x) + \\beta + \\frac{\\gamma}{x}$ : saisir (α ; β ; γ).');
      }
      const a = this.randInt(1, 6);
      const num = this.poly([[a, ''], [-a, '\\ln(x)']]);
      return this._Tx(this.makeMcq(T, 3, 'Dérivée d\'un quotient avec $\\ln$',
        'Appliquer $\\left(\\frac{u}{v}\\right)\' = \\frac{u\'v - uv\'}{v^2}$',
        `Soit $f(x) = \\frac{${this.coefStr(a, '\\ln(x)')}}{x}$ sur $]0 ; +\\infty[$. Déterminer $f'(x)$.`,
        `$f'(x) = \\frac{${num}}{x^2}`.concat('$'),
        [`$f'(x) = \\frac{${a}}{x^2}$`, `$f'(x) = \\frac{${this.poly([[a, ''], [a, '\\ln(x)']])}}{x^2}$`, `$f'(x) = \\frac{${this.poly([[a, '\\ln(x)'], [-a, '']])}}{x^2}$`, `$f'(x) = \\frac{${a}}{x}$`],
        'Quotient : $\\left(\\frac{u}{v}\\right)\' = \\frac{u\'v - uv\'}{v^2}$.',
        `$u(x) = ${this.coefStr(a, '\\ln(x)')}$, $u'(x) = \\frac{${a}}{x}$, $v(x) = x$.`,
        `$f'(x) = \\frac{\\frac{${a}}{x} \\times x - ${this.coefStr(a, '\\ln(x)')}}{x^2} = \\frac{${num}}{x^2}$.`
      ), [a, -a], 'On écrit $f\'(x) = \\frac{\\alpha + \\beta\\ln(x)}{x^2}$ : saisir (α ; β).');
    }
    // tier 4
    const f = this.randInt(1, 3);
    if (f === 1) {
      const Q = this.randChoice([['0{,}8', 0.8], ['0{,}9', 0.9], ['0{,}95', 0.95], ['0{,}85', 0.85], ['0{,}7', 0.7], ['0{,}6', 0.6]]);
      const S = this.randChoice([['0{,}01', 0.01], ['0{,}05', 0.05], ['0{,}001', 0.001], ['0{,}1', 0.1]]);
      let n = 0; while (Q[1] ** n >= S[1]) n++;
      return this.makeMcq(T, 4, 'Seuil et logarithme',
        'Résoudre une inéquation $q^n < s$ avec le logarithme',
        `Déterminer le plus petit entier naturel $n$ tel que $(${Q[0]})^n < ${S[0]}$.`,
        `$n = ${n}$`,
        [`$n = ${n - 1}$`, `$n = ${n + 1}$`, `$n = ${n + 2}$`, `$n = ${Math.max(1, Math.round(n / 2))}$`],
        'Applique $\\ln$, strictement croissante, aux deux membres.',
        `Attention : $\\ln(${Q[0]}) < 0$, le sens de l'inégalité change quand on divise.`,
        `$(${Q[0]})^n < ${S[0]} \\iff n\\ln(${Q[0]}) < \\ln(${S[0]}) \\iff n > \\frac{\\ln(${S[0]})}{\\ln(${Q[0]})} \\approx ${this.dec(Math.log(S[1]) / Math.log(Q[1]), 2)}$. Le plus petit entier est $n = ${n}$.`
      );
    }
    if (f === 2) {
      const t = this.randChoice([2, 3, 4, 5, 6, 8]); const k = this.randChoice([2, 3]);
      const q = 1 + t / 100;
      let n = 0; while (q ** n < k) n++;
      return this._Tx(this.makeMcq(T, 4, 'Placement à intérêts composés',
        'Déterminer un seuil avec le logarithme',
        `Un capital est placé à intérêts composés au taux annuel de $${t}\\,\\%$. Au bout de combien d'années (nombre entier minimal) aura-t-il au moins été multiplié par $${k}$ ?`,
        `$${n}$ ans`,
        [`$${n - 1}$ ans`, `$${n + 1}$ ans`, `$${Math.ceil(100 * (k - 1) / t)}$ ans`, `$${Math.ceil(n / 2)}$ ans`].filter((x) => x !== `$${n}$ ans`),
        `Le capital est multiplié par $${this.dec(q)}$ chaque année.`,
        `Résous $${this.dec(q)}^n \\ge ${k}$ avec le logarithme.`,
        `$${this.dec(q)}^n \\ge ${k} \\iff n \\ge \\frac{\\ln(${k})}{\\ln(${this.dec(q)})} \\approx ${this.dec(Math.log(k) / Math.log(q), 2)}$. Il faut donc $${n}$ ans.`
      ), n, 'Saisir un nombre entier d\'années.');
    }
    const g = this.randInt(1, 4);
    const a = this.randInt(1, 5); const b = this.randInt(1, 5); const p = this.randInt(1, 3);
    let expr; let to; let ans; let sol;
    if (g === 1) { expr = `\\frac{\\ln(x)}{${this.pow('x', p)}}`; to = '+\\infty'; ans = '$0$'; sol = `Par croissances comparées, $\\lim_{x \\to +\\infty} \\frac{\\ln(x)}{${this.pow('x', p)}} = 0$.`; }
    else if (g === 2) { expr = `${this.coefStr(a, 'x')} - ${this.coefStr(b, '\\ln(x)')}`; to = '+\\infty'; ans = '$+\\infty$'; sol = `On factorise : $x\\left(${a} - ${b}\\frac{\\ln(x)}{x}\\right)$ ; comme $\\frac{\\ln(x)}{x} \\to 0$, la parenthèse tend vers $${a}$, donc la limite est $+\\infty$.`.replace(` - 1\\frac`, ' - \\frac'); }
    else if (g === 3) { expr = `${this.pow('x', p)}\\ln(x)`; to = '0^{+}'; ans = '$0$'; sol = `Par croissances comparées, $\\lim_{x \\to 0^{+}} ${this.pow('x', p)}\\ln(x) = 0$.`; }
    else { expr = `x\\ln\\left(1 + \\frac{${a}}{x}\\right)`; to = '+\\infty'; ans = `$${a}$`; sol = `Avec $h = \\frac{${a}}{x} \\to 0$ : $x\\ln(1 + h) = ${a} \\times \\frac{\\ln(1 + h)}{h} \\to ${a} \\times 1 = ${a}$.`; }
    return this._TA_lim(this.makeMcq(T, 4, 'Croissances comparées',
      'Lever une indétermination avec les croissances comparées',
      `Déterminer $\\ell = \\lim_{x \\to ${to}} ${g === 2 ? '(' + expr + ')' : expr}$.`,
      ans,
      ['$0$', '$+\\infty$', '$-\\infty$', '$1$', `$${a + 1}$`].filter((x) => x !== ans),
      'Les puissances de $x$ l\'emportent sur le logarithme.',
      g === 4 ? 'Pense à $\\lim_{h \\to 0} \\frac{\\ln(1 + h)}{h} = 1$.' : 'Identifie la forme indéterminée puis factorise.',
      sol
    ), '\\ell');
  },

  // ---------------------------------------------------------------------
  // TA6 : Primitives et équations différentielles
  // ---------------------------------------------------------------------
  gen_TA6(tier) {
    const T = 'TA6';
    const ex = (k, v = 'x') => `e^{${this.coefStr(k, v)}}`;
    if (tier === 1) {
      if (Math.random() < 0.5) {
        const a = this.randNonZero(-6, 6); const b = this.randNonZero(-6, 6); const c = this.randInt(-7, 7);
        const f = this.poly([[a, 'x^2'], [b, 'x'], [c, '']]);
        const F = this.poly([[this.frac(a, 3), 'x^3'], [this.frac(b, 2), 'x^2'], [c, 'x']]);
        return this._Tx(this.makeMcq(T, 1, 'Primitive d\'une fonction polynôme',
          'Utiliser les primitives de $x^n$',
          `Soit $f(x) = ${f}$. Déterminer la primitive $F$ de $f$ sur $\\mathbb{R}$ qui vérifie $F(0) = 0$.`,
          `$F(x) = ${F}$`,
          [`$F(x) = ${this.poly([[2 * a, 'x'], [b, '']])}$`, `$F(x) = ${this.poly([[a, 'x^3'], [b, 'x^2'], [c, 'x']])}$`, `$F(x) = ${this.poly([[this.frac(a, 2), 'x^3'], [b, 'x^2'], [c, 'x']])}$`, `$F(x) = ${this.poly([[this.frac(a, 3), 'x^3'], [b, 'x^2'], [c, 'x']])}$`],
          'Une primitive de $x^n$ est $\\frac{x^{n+1}}{n+1}$.',
          'Vérifie en dérivant : on doit retrouver $f$.',
          `On prend une primitive de chaque terme ($x^n$ a pour primitive $\\frac{x^{n+1}}{n+1}$), sans constante puisque $F(0) = 0$ : $F(x) = ${F}$, et on vérifie que $F'(x) = ${f} = f(x)$.`
        ), [this._Tq(a, 3), this._Tq(b, 2), c], 'On écrit $F(x) = \\alpha x^3 + \\beta x^2 + \\gamma x$ : saisir (α ; β ; γ).');
      }
      const a = this.randNonZero(-6, 6);
      const k = this.randChoice([-4, -3, -2, -1, 2, 3, 4]);
      const k2 = k === -1 ? -2 : k + 1;
      const F = this.poly([[this.frac(a, k), ex(k)]]);
      return this._Tx(this.makeMcq(T, 1, 'Primitive de $e^{kx}$',
        'Utiliser une primitive de $e^{kx}$',
        `Soit $f(x) = ${this.poly([[a, ex(k)]])}$. Déterminer une primitive $F$ de $f$ sur $\\mathbb{R}$.`,
        `$F(x) = ${F}$`,
        [`$F(x) = ${this.poly([[a * k, ex(k)]])}$`, `$F(x) = ${this.poly([[a, ex(k)]])}$`, `$F(x) = ${this.poly([[this.frac(a, k2), ex(k2)]])}$`, `$F(x) = ${this.poly([[this.frac(a, k), ex(k)], [this.frac(a, k), 'x']])}$`],
        'Une primitive de $e^{kx}$ est $\\frac{1}{k}e^{kx}$ pour $k \\neq 0$.',
        'Vérifie en dérivant.',
        `Comme $(${ex(k)})' = ${this.coefStr(k, ex(k))}$, on a $F'(x) = ${this.frac(a, k)} \\times ${this.paren(k)} \\times ${ex(k)} = ${this.poly([[a, ex(k)]])} = f(x)$.`
      ), this._Tq(a, k), `Une primitive s'écrit $F(x) = \\lambda ${ex(k)}$ : saisir $\\lambda$.`);
    }
    if (tier === 2) {
      if (Math.random() < 0.5) {
        const a = this.randNonZero(-5, 5); const b = this.randNonZero(-9, 9);
        const y0 = this.frac(-b, a);
        return this._Tx(this.makeMcq(T, 2, 'Solution constante de $y\' = ay + b$',
          'Chercher une solution particulière constante',
          `Quelle est la solution constante de l'équation différentielle $y' = ${this.poly([[a, 'y'], [b, '']])}$ ?`,
          `$y = ${y0}$`,
          [`$y = ${this.frac(b, a)}$`, `$y = ${this.frac(-a, b)}$`, `$y = ${b}$`, `$y = ${-b}$`, `$y = ${a}$`],
          'Une fonction constante a une dérivée nulle.',
          `Résous $0 = ${this.poly([[a, 'y'], [b, '']])}$.`,
          `Si $y$ est constante, $y' = 0$ donc $${this.poly([[a, 'y'], [b, '']])} = 0$, soit $y = ${y0}$.`
        ), this._Tq(-b, a), 'Saisir la valeur de la constante (entier ou fraction irréductible).');
      }
      const a = this.randNonZero(-4, 4); const y0 = this.randNonZero(-5, 6);
      const ans = this.poly([[y0, ex(a)]]);
      const ds = [this.poly([[y0, ex(-a)]]), this.poly([[y0 * a, ex(a)]]), this.poly([[1, ex(a)], [y0 - 1, '']]), this.poly([[a, ex(y0)]]), this.poly([[y0, ex(a === -1 ? -2 : a + 1)]]), this.poly([[y0 + 1, ex(a)]]), this.poly([[y0, ex(a)], [a, '']])];
      return this._Tx(this.makeMcq(T, 2, 'Équation $y\' = ay$ avec condition initiale',
        'Résoudre $y\' = ay$ et utiliser une condition initiale',
        `Déterminer la solution $y$ de l'équation différentielle $y' = ${this.coefStr(a, 'y')}$ vérifiant $y(0) = ${y0}$.`,
        `$y(x) = ${ans}$`,
        ds.map((d) => `$y(x) = ${d}$`),
        'Les solutions de $y\' = ay$ sont les fonctions $x \\mapsto Ce^{ax}$.',
        'Détermine $C$ avec $y(0)$.',
        `$y(x) = C${ex(a)}$ et $y(0) = C = ${y0}$, donc $y(x) = ${ans}$.`
      ), [y0, a], 'La solution s\'écrit $y(x) = Ce^{kx}$ : saisir (C ; k).');
    }
    if (tier === 3) {
      if (Math.random() < 0.35) {
        // comportement à l'infini d'une solution de y' = -ky + b (k > 0)
        const k = this.randInt(1, 5); const b = this.randNonZero(-12, 12); const c = this.randInt(-6, 6);
        const L = this.frac(b, k);
        if (L === String(c)) return this.gen_TA6(3);
        const eqn = `y' = ${this.poly([[-k, 'y'], [b, '']])}`;
        return this.makeMcq(T, 3, 'Limite en $+\\infty$ d\'une solution de $y\' = ay + b$',
          'Résoudre $y\' = ay + b$ et étudier le comportement de la solution en $+\\infty$',
          `Soit $y$ la solution de l'équation différentielle $${eqn}$ vérifiant $y(0) = ${c}$. Déterminer $\\lim_{x \\to +\\infty} y(x)$.`,
          `$${L}$`,
          (b % k === 0 ? [`$${c}$`, '$0$', '$+\\infty$', `$${this.frac(-b, k)}$`, `$${b}$`]
            : [`$${this.frac(-b, k)}$`, `$${this.frac(b, k + 1)}$`, `$${this.frac(b, 2 * k)}$`, `$${this.frac(c * k - b, k)}$`, '$+\\infty$'].filter((x) => !/^\$-?\d+\$$/.test(x)))
            .filter((x, i, arr) => x !== `$${L}$` && arr.indexOf(x) === i),
          `Les solutions s'écrivent $y(x) = Ce^{${-k === -1 ? '-' : -k}x} + d$ où $d$ est la solution constante.`,
          `Comme $${-k} < 0$, $e^{${-k === -1 ? '-' : -k}x}$ tend vers $0$ en $+\\infty$.`,
          `La solution constante vérifie $0 = ${this.poly([[-k, 'd'], [b, '']])}$, soit $d = ${L}$. Donc $y(x) = Ce^{${-k === -1 ? '-' : -k}x} ${b / k < 0 ? '-' : '+'} ${this.frac(Math.abs(b), k)}$ avec $C = ${c} ${b / k < 0 ? '+' : '-'} ${this.frac(Math.abs(b), k)}$ (condition initiale). Comme $e^{${-k === -1 ? '-' : -k}x} \\to 0$, $\\lim_{x \\to +\\infty} y(x) = ${L}$, quelle que soit la condition initiale.`
        );
      }
      const a = this.randNonZero(-4, 4); const m = this.randNonZero(-5, 5); const b = -a * m;
      let c = this.randInt(-5, 6); if (c === m) c = m + 1;
      const K = c - m;
      const ans = this.poly([[K, ex(a)], [m, '']]);
      const form = Math.random() < 0.5;
      const eq = form ? `y' = ${this.poly([[a, 'y'], [b, '']])}` : `${this.poly([[1, "y'"], [-a, 'y']])} = ${b}`;
      const ds = [this.poly([[c, ex(a)], [m, '']]), this.poly([[K, ex(a)], [-m, '']]), this.poly([[c + m, ex(a)], [-m, '']]), this.poly([[K, ex(-a)], [m, '']])];
      return this._Tx(this.makeMcq(T, 3, 'Équation $y\' = ay + b$ avec condition initiale',
        'Résoudre une équation différentielle linéaire du premier ordre',
        `Déterminer la solution de l'équation différentielle $${eq}$ vérifiant $y(0) = ${c}$.`,
        `$y(x) = ${ans}$`,
        ds.map((d) => `$y(x) = ${d}$`),
        'Les solutions sont de la forme $y(x) = Ce^{ax} - \\frac{b}{a}$.',
        `La solution constante est $y = ${m}$.`,
        `${form ? '' : `L'équation s'écrit $y' = ${this.poly([[a, 'y'], [b, '']])}$. `}Les solutions sont $y(x) = ${this.poly([['C', ex(a)], [m, '']])}$. Avec $y(0) = C ${this.formatSign(m)} = ${c}$, on trouve $C = ${K}$, d'où $y(x) = ${ans}$.`
      ), [K, a, m], 'La solution s\'écrit $y(x) = Ce^{kx} + d$ : saisir (C ; k ; d).');
    }
    // tier 4
    const f = this.randInt(1, 3);
    if (f === 1) {
      const k = this.randNonZero(-4, 4); const al = this.randNonZero(-4, 4); const be = this.randInt(-4, 4);
      const m = -k * al; const p = al - k * be;
      const ans = this.poly([[al, 'x'], [be, '']]);
      return this._Tx(this.makeMcq(T, 4, 'Solution particulière affine',
        'Chercher une solution particulière d\'une forme donnée',
        `On considère l'équation différentielle $y' = ${this.poly([[k, 'y'], [m, 'x'], [p, '']])}$. Quelle fonction affine $x \\mapsto \\alpha x + \\beta$ en est solution ?`,
        `$y = ${ans}$`,
        [`$y = ${this.poly([[-al, 'x'], [be, '']])}$`, `$y = ${this.poly([[al, 'x'], [-be, '']])}$`, `$y = ${this.poly([[m, 'x'], [p, '']])}$`, `$y = ${this.poly([[al, 'x'], [be + 1, '']])}$`, `$y = ${this.poly([[al + 1, 'x'], [be, '']])}$`, `$y = ${this.poly([[al, 'x'], [be - 2, '']])}$`],
        'Remplace $y$ par $\\alpha x + \\beta$ et $y\'$ par $\\alpha$.',
        'Identifie les coefficients de $x$ et les termes constants.',
        `En remplaçant, $\\alpha = ${this.poly([[k, '\\alpha x'], [k, '\\beta'], [m, 'x'], [p, '']])}$ pour tout $x$, d'où $${this.poly([[k, '\\alpha'], [m, '']])} = 0$ et $\\alpha = ${this.poly([[k, '\\beta'], [p, '']])}$. On obtient $\\alpha = ${al}$ et $\\beta = ${be}$ : $y = ${ans}$.`
      ), [al, be], 'Saisir le couple (α ; β).');
    }
    if (f === 2) {
      const k = this.randNonZero(-3, 3); const b = this.randInt(-4, 4);
      let c = this.randInt(1, 9); while (b * b >= 4 * c) c++;
      const den = this.poly([[1, 'x^2'], [b, 'x'], [c, '']]);
      const num = this.poly([[2 * k, 'x'], [k * b, '']]);
      const ans = this.coefStr(k, `\\ln(${den})`);
      return this._Tx(this.makeMcq(T, 4, 'Primitive de la forme $\\frac{u\'}{u}$',
        'Reconnaître une forme $\\frac{u\'}{u}$',
        `Soit $f(x) = \\frac{${num}}{${den}}$ sur $\\mathbb{R}$. Déterminer une primitive $F$ de $f$ sur $\\mathbb{R}$.`,
        `$F(x) = ${ans}$`,
        [`$F(x) = ${this.coefStr(2 * k, `\\ln(${den})`)}$`, `$F(x) = \\frac{${k}}{${den}}$`.replace('\\frac{1}{', '\\frac{1}{'), `$F(x) = ${this.coefStr(-k, `\\ln(${den})`)}$`, `$F(x) = \\ln(${num.replace(/^-/, '')})$`].map((s) => s.replace(/\\frac\{-(\d+)\}/, '-\\frac{$1}')),
        `Le numérateur est-il proportionnel à la dérivée de $${den}$ ?`,
        `$(${den})' = ${this.poly([[2, 'x'], [b, '']])}$ et $${den} > 0$ sur $\\mathbb{R}$.`,
        `$f = ${k === 1 ? '' : k === -1 ? '-' : k + ' \\times '}\\frac{u'}{u}$ avec $u(x) = ${den} > 0$, donc $F(x) = ${ans}$ est une primitive de $f$.`
      ), k, `Une primitive s'écrit $F(x) = \\lambda\\ln(${den})$ : saisir $\\lambda$.`);
    }
    const k = this.randNonZero(-6, 6); const a = this.randNonZero(-3, 3);
    const E = ex(a, 'x^2');
    const ans = this.poly([[this.frac(k, 2 * a), E]]);
    return this._Tx(this.makeMcq(T, 4, 'Primitive de la forme $u\'e^{u}$',
      'Reconnaître une forme $u\'e^{u}$',
      `Soit $f(x) = ${this.poly([[k, 'x' + E]])}$ sur $\\mathbb{R}$. Déterminer une primitive $F$ de $f$ sur $\\mathbb{R}$.`,
      `$F(x) = ${ans}$`,
      [this.poly([[k, E]]), this.poly([[2 * a * k, E]]), this.poly([[this.frac(k, 2), 'x^2' + E]]), this.poly([[this.frac(k, a), E]])].map((d) => `$F(x) = ${d}$`),
      'Une primitive de $u\'e^{u}$ est $e^{u}$.',
      `Ici $u(x) = ${this.coefStr(a, 'x^2')}$ et $u'(x) = ${this.coefStr(2 * a, 'x')}$.`,
      `$f(x) = ${this.frac(k, 2 * a) === '1' ? '' : this.frac(k, 2 * a) === '-1' ? '-' : this.frac(k, 2 * a) + ' \\times '}(${this.coefStr(2 * a, 'x')})${E}$, donc $F(x) = ${ans}$ (on vérifie $F' = f$).`
    ), this._Tq(k, 2 * a), `Une primitive s'écrit $F(x) = \\lambda ${E}$ : saisir $\\lambda$.`);
  },

  // ---------------------------------------------------------------------
  // TA7 : Calcul intégral
  // ---------------------------------------------------------------------
  gen_TA7(tier) {
    const T = 'TA7';
    if (tier === 1) {
      const r1 = Math.random();
      if (r1 < 0.3) {
        // ∫_0^{ln a} k e^x dx = k(a - 1)
        const a = this.randInt(2, 9); const k = this.randChoice([1, 1, 2, 3, -2]);
        const I = k * (a - 1);
        return this.makeMcq(T, 1, 'Intégrale de l\'exponentielle',
          'Utiliser la primitive $e^{x}$ de $e^{x}$ et $e^{\\ln(a)} = a$',
          `Calculer $I = \\int_{0}^{\\ln(${a})} ${this.coefStr(k, 'e^{x}')} \\, dx$.`,
          `$I = ${I}$`,
          [k * a, k * (a + 1), k * (Math.round(Math.exp(a)) - 1), -I, k * (a - 2)].filter((x, i, arr) => x !== I && arr.indexOf(x) === i).map((x) => `$I = ${x}$`),
          `Une primitive de $${this.coefStr(k, 'e^{x}')}$ est $${this.coefStr(k, 'e^{x}')}$.`,
          `$e^{\\ln(${a})} = ${a}$ et $e^{0} = 1$.`,
          `$I = \\left[${this.coefStr(k, 'e^{x}')}\\right]_{0}^{\\ln(${a})} = ${k === 1 ? '' : k === -1 ? '-' : k}(e^{\\ln(${a})} - e^{0}) = ${k === 1 ? '' : k === -1 ? '-' : k}(${a} - 1) = ${I}$.`
        );
      }
      if (r1 < 0.65) {
        const c = this.randNonZero(-4, 4); const b = this.randInt(1, 6);
        const I = c * b ** 3;
        return this.makeMcq(T, 1, 'Calcul d\'une intégrale par primitive',
          'Calculer $\\int_a^b f(x)\\,dx = F(b) - F(a)$',
          `Calculer l'intégrale $I = \\int_{0}^{${b}} ${this.coefStr(c, 'x^2')} \\, dx$.`,
          `$I = ${this.frac(I, 3)}$`,
          [`$I = ${c * b * b}$`, `$I = ${I}$`, `$I = ${this.frac(I, 2)}$`, `$I = ${2 * c * b}$`, `$I = ${this.frac(c * b * b, 3)}$`, `$I = ${this.frac(I, 6)}$`, `$I = ${this.frac(I + 3 * c, 3)}$`, `$I = ${-c * b * b * b}$`],
          `Une primitive de $${this.coefStr(c, 'x^2')}$ est $${this.coefStr(this.frac(c, 3), 'x^3')}$.`,
          'Applique $I = F(b) - F(0)$.',
          `$I = \\left[${this.coefStr(this.frac(c, 3), 'x^3')}\\right]_{0}^{${b}} = ${this.frac(c, 3) === '1' ? '' : this.frac(c, 3) === '-1' ? '-' : this.frac(c, 3) + ' \\times '}${b}^{3} = ${this.frac(I, 3)}$.`
        );
      }
      const m = this.randNonZero(-5, 5); const p = this.randInt(-6, 6);
      const lo = this.randInt(-3, 2); const hi = this.randInt(lo + 1, 5);
      const num = m * (hi * hi - lo * lo) + 2 * p * (hi - lo);
      const F = this.poly([[this.frac(m, 2), 'x^2'], [p, 'x']]);
      return this.makeMcq(T, 1, 'Calcul d\'une intégrale par primitive',
        'Calculer $\\int_a^b f(x)\\,dx = F(b) - F(a)$',
        `Calculer l'intégrale $I = \\int_{${lo}}^{${hi}} (${this.poly([[m, 'x'], [p, '']])}) \\, dx$.`,
        `$I = ${this.frac(num, 2)}$`,
        [`$I = ${this.frac(m * hi * hi + 2 * p * hi, 2)}$`, `$I = ${m * (hi - lo)}$`, `$I = ${this.frac(m * (hi * hi + lo * lo) + 2 * p * (hi - lo), 2)}$`, `$I = ${m * (hi * hi - lo * lo) + p * (hi - lo)}$`, `$I = ${this.frac(num + 2, 2)}$`, `$I = ${this.frac(-num, 2)}$`, `$I = ${this.frac(num - 2, 2)}$`],
        `Une primitive de la fonction intégrée est $F : x \\mapsto ${F}$.`,
        `Calcule $F(${hi}) - F(${lo})$.`,
        `$I = \\left[${F}\\right]_{${lo}}^{${hi}} = F(${hi}) - F(${lo})${m * lo * lo + 2 * p * lo === 0 ? '' : ` = ${this.frac(m * hi * hi + 2 * p * hi, 2)} - ${this.paren(this.frac(m * lo * lo + 2 * p * lo, 2))}`} = ${this.frac(num, 2)}$.`
      );
    }
    if (tier === 2) {
      const f = this.randInt(1, 3);
      if (f === 1) {
        const k = this.randNonZero(-4, 4);
        const ek = k === 1 ? 'e' : `e^{${k}}`;
        const ans = k === 1 ? 'e - 1' : k === -1 ? '1 - e^{-1}' : k > 0 ? `\\frac{${ek} - 1}{${k}}` : `\\frac{1 - ${ek}}{${-k}}`;
        return this._Tx(this.makeMcq(T, 2, 'Intégrale d\'une exponentielle',
          'Utiliser une primitive de $e^{kx}$',
          `Calculer $I = \\int_{0}^{1} e^{${this.coefStr(k, 'x')}} \\, dx$.`,
          `$I = ${ans}$`,
          [`$I = ${ek} - 1$`.replace('$I = e - 1$', '$I = e + 1$'), `$I = ${Math.abs(k) === 1 ? ek : `\\frac{${ek}}{${Math.abs(k)}}`}$`, `$I = ${k === 1 ? '1 - e' : k > 0 ? `${k}(${ek} - 1)` : k === -1 ? '2(1 - e^{-1})' : `${-k}(1 - ${ek})`}$`, `$I = ${ek} + 1$`, `$I = 1 - ${ek}$`.replace('$I = 1 - e$', '$I = 2 - e$')],
          `Une primitive de $e^{kx}$ est $\\frac{1}{k}e^{kx}$.`,
          `$I = \\left[${this.poly([[this.frac(1, k), `e^{${this.coefStr(k, 'x')}}`]])}\\right]_{0}^{1}$.`,
          `$I = ${k === 1 ? '' : (k === -1 ? '-' : this.frac(1, k)) + '('}${ek} - e^{0}${k === 1 ? '' : ')'} = ${ans}$.`
        ), [this._Tq(1, k), this._Tq(-1, k)], `On écrit $I = \\alpha ${ek} + \\beta$ avec $\\alpha$, $\\beta$ rationnels : saisir (α ; β).`);
      }
      if (f === 2) {
        const a = this.randInt(2, 9); const c = this.randInt(1, 5);
        const ans = this.coefStr(c, `\\ln(${a})`);
        return this._Tx(this.makeMcq(T, 2, 'Intégrale de $\\frac{1}{x}$',
          'Utiliser la primitive $\\ln$ de $\\frac{1}{x}$ sur $]0 ; +\\infty[$',
          `Calculer $I = \\int_{1}^{${a}} \\frac{${c}}{x} \\, dx$.`,
          `$I = ${ans}$`,
          [`$I = ${this.frac(c, a)}$`, `$I = ${this.poly([[c, `\\ln(${a})`], [-c, '']])}$`, `$I = ${this.frac(c * (a * a - 1), 2 * a * a)}$`, `$I = ${this.coefStr(c, `\\ln(${a + 1})`)}$`],
          'Une primitive de $\\frac{1}{x}$ sur $]0 ; +\\infty[$ est $\\ln(x)$.',
          '$\\ln(1) = 0$.',
          `$I = \\left[${this.coefStr(c, '\\ln(x)')}\\right]_{1}^{${a}} = ${this.coefStr(c, `\\ln(${a})`)} - ${this.coefStr(c, '\\ln(1)')} = ${ans}$.`
        ), c, `On écrit $I = \\lambda\\ln(${a})$ : saisir $\\lambda$.`);
      }
      const b = this.randInt(1, 6); const p = this.randInt(-5, 5);
      const mu = this.frac(b * b + 3 * p, 3);
      return this.makeMcq(T, 2, 'Valeur moyenne d\'une fonction',
        'Calculer $\\mu = \\frac{1}{b - a}\\int_a^b f(x)\\,dx$',
        `Calculer la valeur moyenne $\\mu$ de la fonction $f(x) = ${this.poly([[1, 'x^2'], [p, '']])}$ sur l'intervalle $[0 ; ${b}]$.`,
        `$\\mu = ${mu}$`,
        [`$\\mu = ${this.frac(b ** 3 + 3 * p * b, 3)}$`, `$\\mu = ${this.frac(b * b + 2 * p, 2)}$`, `$\\mu = ${b * b + p}$`, `$\\mu = ${this.frac(b * b + 3 * p, 6)}$`],
        'La valeur moyenne est $\\mu = \\frac{1}{b - a}\\int_a^b f(x)\\,dx$.',
        `Une primitive de $f$ est $${this.poly([['\\frac{1}{3}', 'x^3'], [p, 'x']])}$.`,
        `$\\int_{0}^{${b}} f(x)\\,dx = ${this.frac(b ** 3 + 3 * p * b, 3)}$, donc $\\mu = \\frac{1}{${b}} \\times ${this.paren(this.frac(b ** 3 + 3 * p * b, 3))} = ${mu}$.`.replace('\\frac{1}{1} \\times ', '')
      );
    }
    if (tier === 3) {
      if (Math.random() < 0.6) {
        const r1 = this.randInt(-3, 2); const r2 = this.randInt(r1 + 1, 4);
        const g = this.poly([[r1 + r2, 'x'], [-r1 * r2, '']]);
        const A = this.frac((r2 - r1) ** 3, 6);
        return this.makeMcq(T, 3, 'Aire entre deux courbes',
          'Calculer $\\int_a^b (g - f)$ quand $g \\ge f$',
          `Soient $f(x) = x^2$ et $g(x) = ${g}$. Ces courbes se coupent en $x = ${r1}$ et $x = ${r2}$, et $g \\ge f$ entre ces deux valeurs. Calculer l'aire $\\mathcal{A}$ (en unités d'aire) du domaine compris entre les deux courbes.`,
          `$\\mathcal{A} = ${A}$`,
          [`$\\mathcal{A} = ${this.frac((r2 - r1) ** 3, 3)}$`, `$\\mathcal{A} = ${this.frac((r2 - r1) ** 3, 2)}$`, `$\\mathcal{A} = ${this.frac(r2 ** 3 - r1 ** 3, 3)}$`, `$\\mathcal{A} = ${(r2 - r1) ** 2}$`, `$\\mathcal{A} = ${this.frac((r2 - r1) ** 3, 12)}$`, `$\\mathcal{A} = ${this.frac((r2 - r1) ** 3 + 6, 6)}$`, `$\\mathcal{A} = ${(r2 - r1) ** 3}$`],
          '$\\mathcal{A} = \\int_{a}^{b} (g(x) - f(x))\\,dx$.',
          `$g(x) - f(x) = -(x - ${this.paren(r1)})(x - ${this.paren(r2)})$.`.replace(/x - \((-\d+)\)/g, (m0, v) => `x + ${-v}`).replace('x - 0', 'x'),
          `$\\mathcal{A} = \\int_{${r1}}^{${r2}} (${this.poly([[-1, 'x^2'], [r1 + r2, 'x'], [-r1 * r2, '']])})\\,dx = ${A}$.`
        );
      }
      const s = this.randInt(1, 4); const c = this.randInt(1, 3);
      const A = this.frac(4 * c * s ** 3, 3);
      return this.makeMcq(T, 3, 'Aire sous une parabole',
        'Calculer une aire avec une intégrale',
        `Calculer l'aire $\\mathcal{A}$ (en unités d'aire) du domaine compris entre l'axe des abscisses et la courbe de $f(x) = ${this.poly([[-c, 'x^2'], [c * s * s, '']])}$ pour $x \\in [${-s} ; ${s}]$.`,
        `$\\mathcal{A} = ${A}$`,
        [`$\\mathcal{A} = ${this.frac(2 * c * s ** 3, 3)}$`, `$\\mathcal{A} = ${2 * c * s ** 3}$`, `$\\mathcal{A} = ${this.frac(8 * c * s ** 3, 3)}$`, `$\\mathcal{A} = ${this.frac(4 * c * s ** 3, 3) === '0' ? 1 : c * s ** 3}$`],
        '$f \\ge 0$ sur l\'intervalle : l\'aire est l\'intégrale de $f$.',
        `Une primitive de $f$ est $${this.poly([[this.frac(-c, 3), 'x^3'], [c * s * s, 'x']])}$.`,
        `$\\mathcal{A} = \\int_{${-s}}^{${s}} (${this.poly([[-c, 'x^2'], [c * s * s, '']])})\\,dx = \\left[${this.poly([[this.frac(-c, 3), 'x^3'], [c * s * s, 'x']])}\\right]_{${-s}}^{${s}} = ${A}$.`
      );
    }
    // tier 4 : intégration par parties ; propriétés de l'intégrale
    const f = this.randInt(0, 3);
    if (f === 0) {
      const a = this.randInt(-3, 1); const b = a + this.randInt(1, 3); const c = b + this.randInt(1, 3);
      const p = this.randNonZero(-6, 6); const qv = this.randNonZero(-6, 6); const r = this.randNonZero(-6, 6);
      const al = this.randChoice([-3, -2, 2, 3, 4]); const be = this.randChoice([-2, -1, 1, 2, 3]);
      const rev = Math.random() < 0.5; // intégrale donnée avec les bornes inversées
      const qq = rev ? -qv : qv; // \int_b^c f
      const I = al * (p + qq) + be * r;
      const lin = this.poly([[al, 'f(x)'], [be, 'g(x)']]);
      return this.makeMcq(T, 4, 'Linéarité et relation de Chasles',
        'Combiner linéarité, relation de Chasles et inversion des bornes',
        `Les fonctions $f$ et $g$ sont continues sur $\\mathbb{R}$ et vérifient $\\int_{${a}}^{${b}} f(x)\\,dx = ${p}$, $\\int_{${rev ? c : b}}^{${rev ? b : c}} f(x)\\,dx = ${qv}$ et $\\int_{${a}}^{${c}} g(x)\\,dx = ${r}$. Calculer $I = \\int_{${a}}^{${c}} (${lin})\\,dx$.`,
        `$I = ${I}$`,
        [al * (p - qq) + be * r, al * (p + qq) - be * r, al * p + be * r, al * (p + qv) + be * r + (rev ? 0 : 2 * al), (al + be) * (p + qq + r)].filter((x) => x !== I).map((x) => `$I = ${x}$`),
        'Utilise la linéarité : $\\int (\\alpha f + \\beta g) = \\alpha\\int f + \\beta\\int g$.',
        `Relation de Chasles : $\\int_{${a}}^{${c}} f = \\int_{${a}}^{${b}} f + \\int_{${b}}^{${c}} f$${rev ? ', et $\\int_{' + b + '}^{' + c + '} f = -\\int_{' + c + '}^{' + b + '} f$' : ''}.`,
        `${rev ? `En inversant les bornes, $\\int_{${b}}^{${c}} f(x)\\,dx = ${qq}$. ` : ''}Par la relation de Chasles, $\\int_{${a}}^{${c}} f(x)\\,dx = ${p} ${this.formatSign(qq)} = ${p + qq}$. Par linéarité, $I = ${al} \\times ${this.paren(p + qq)} ${be < 0 ? '-' : '+'} ${Math.abs(be) === 1 ? '' : Math.abs(be) + ' \\times '}${this.paren(r)} = ${I}$.`
      );
    }
    if (f === 1) {
      const b = this.randInt(-4, 5); const m = this.randInt(1, 3);
      const lin = this.poly([[m, 'x'], [b, '']]);
      const ans = this.poly([[b, 'e'], [m - b, '']]);
      return this._Tx(this.makeMcq(T, 4, 'Intégration par parties',
        'Appliquer $\\int_a^b uv\' = [uv]_a^b - \\int_a^b u\'v$',
        `Calculer $I = \\int_{0}^{1} (${lin})e^{x} \\, dx$.`,
        `$I = ${ans}$`,
        [this.poly([[m + b, 'e'], [-b, '']]), this.poly([[b, 'e'], [-b, '']]), this.poly([[m + b, 'e'], [-b - m, '']]), this.poly([[b - m, 'e'], [2 * m - b, '']]), this.poly([[b + 1, 'e'], [m - b, '']])].map((d) => `$I = ${d}$`),
        `Pose $u(x) = ${lin}$ et $v'(x) = e^{x}$.`,
        `$u'(x) = ${m}$ et $v(x) = e^{x}$.`,
        `$I = \\left[(${lin})e^{x}\\right]_{0}^{1} - \\int_{0}^{1} ${this.coefStr(m, 'e^{x}')}\\,dx = ${this.poly([[m + b, 'e'], [-b, '']])} - ${m === 1 ? '' : m}(e - 1) = ${ans}$.`
      ), [b, m - b], 'On écrit $I = \\alpha e + \\beta$ : saisir (α ; β).');
    }
    if (f === 2) {
      const a = this.randInt(2, 6);
      const ans = this.poly([[a, `\\ln(${a})`], [1 - a, '']]);
      return this._Tx(this.makeMcq(T, 4, 'Intégration par parties',
        'Calculer $\\int \\ln(x)\\,dx$ par parties',
        `Calculer $I = \\int_{1}^{${a}} \\ln(x) \\, dx$.`,
        `$I = ${ans}$`,
        [this.poly([[a, `\\ln(${a})`], [-a, '']]), this.poly([[a, `\\ln(${a})`]]), this.frac(1, a), this.poly([[a, `\\ln(${a})`], [a - 1, '']])].map((d) => `$I = ${d}$`),
        'Pose $u(x) = \\ln(x)$ et $v\'(x) = 1$.',
        '$u\'(x) = \\frac{1}{x}$ et $v(x) = x$.',
        `$I = \\left[x\\ln(x)\\right]_{1}^{${a}} - \\int_{1}^{${a}} 1\\,dx = ${a}\\ln(${a}) - (${a} - 1) = ${ans}$.`
      ), [a, 1 - a], `On écrit $I = \\alpha\\ln(${a}) + \\beta$ : saisir (α ; β).`);
    }
    const a = this.randInt(2, 5);
    const ans = this.poly([[a - 1, `e^{${a}}`], [1, '']]);
    return this._Tx(this.makeMcq(T, 4, 'Intégration par parties',
      'Appliquer $\\int_a^b uv\' = [uv]_a^b - \\int_a^b u\'v$',
      `Calculer $I = \\int_{0}^{${a}} xe^{x} \\, dx$.`,
      `$I = ${ans}$`,
      [this.poly([[a, `e^{${a}}`]]), this.poly([[a - 1, `e^{${a}}`]]), this.poly([[a + 1, `e^{${a}}`], [-1, '']]), this.poly([[a, `e^{${a}}`], [-1, '']])].map((d) => `$I = ${d}$`),
      'Pose $u(x) = x$ et $v\'(x) = e^{x}$.',
      '$u\'(x) = 1$ et $v(x) = e^{x}$.',
      `$I = \\left[xe^{x}\\right]_{0}^{${a}} - \\int_{0}^{${a}} e^{x}\\,dx = ${a}e^{${a}} - (e^{${a}} - 1) = ${ans}$.`
    ), [a - 1, 1], `On écrit $I = \\alpha e^{${a}} + \\beta$ : saisir (α ; β).`);
  },

  // ---------------------------------------------------------------------
  // TA8 : Compléments sur la dérivation (composées, dérivée seconde)
  // ---------------------------------------------------------------------
  /** Coefficient devant une expression (parenthèse, e^{…}, \\sqrt…) : 1 -> '', -1 -> '-' */
  _TA8_k(c, e) { return c === 1 ? e : c === -1 ? `-${e}` : `${c}${e}`; },
  /** Fraction « c / den » avec signe devant : _TA8_fr(-3, 'x + 1') -> -\\frac{3}{x + 1} */
  _TA8_fr(c, num, den) { return `${c < 0 ? '-' : ''}\\frac{${num}}{${den}}`; },

  gen_TA8(tier) {
    const T = 'TA8';
    const L = (a, b) => this.poly([[a, 'x'], [b, '']]);
    const Q = (a, p, q) => this.poly([[a, 'x^2'], [p, 'x'], [q, '']]);
    const K = (c, e) => this._TA8_k(c, e);
    const F = (s) => `$f'(x) = ${s}$`;
    const F2 = (s) => `$f''(x) = ${s}$`;
    const ex = (arg) => `e^{${arg}}`;
    if (tier === 1) {
      const fam = this.randInt(0, 4);
      const a = this.randNonZero(-5, 5); const b = this.randNonZero(-7, 7);
      const u = L(a, b);
      if (fam === 0) {
        const n = this.randInt(2, 5);
        const P = (e) => this.pow(`(${u})`, e);
        return this._Tx(this.makeMcq(T, 1, 'Dérivée de $(ax + b)^n$', 'Dériver $x \\mapsto g(ax + b)$',
          `Soit $f(x) = (${u})^{${n}}$ sur $\\mathbb{R}$. Déterminer $f'(x)$.`,
          F(K(n * a, P(n - 1))),
          [F(K(n, P(n - 1))), F(K(n * a, P(n))), F(K(a, P(n - 1))), F(K((n - 1) * a, P(n - 1))), F(K(n * a * a, P(n - 1)))],
          'Utilise $(u^n)\' = n u\' u^{n-1}$ avec $u(x) = ax + b$.',
          `Ici $u(x) = ${u}$ et $u'(x) = ${a}$.`,
          `$f'(x) = ${n} \\times ${this.paren(a)} \\times ${P(n - 1)} = ${K(n * a, P(n - 1))}$.`),
          [n * a, n - 1], `On écrit $f'(x) = k(${u})^{m}$ : saisir (k ; m).`);
      }
      if (fam === 1) {
        const c = this.randChoice([1, 1, 2, 3, -2]);
        return this._Tx(this.makeMcq(T, 1, 'Dérivée de $e^{ax + b}$', 'Dériver $x \\mapsto e^{u(x)}$',
          `Soit $f(x) = ${K(c, ex(u))}$ sur $\\mathbb{R}$. Déterminer $f'(x)$.`,
          F(K(c * a, ex(u))),
          [F(K(c, ex(u))), F(K(c * b, ex(u))), F(`${K(c, `(${u})`)}${ex(L(a, b - 1))}`), F(K(c * a, ex(L(a, b - 1)))), F(K(c * a, ex('x')))],
          'Utilise $(e^u)\' = u\' e^u$.',
          `Ici $u(x) = ${u}$ et $u'(x) = ${a}$.`,
          `$f'(x) = ${c === 1 ? '' : `${this.paren(c)} \\times `}${this.paren(a)} \\times ${ex(u)} = ${K(c * a, ex(u))}$.`),
          c * a, `On écrit $f'(x) = k${ex(u)}$ : saisir $k$.`);
      }
      if (fam === 2) {
        const sq = `\\sqrt{${u}}`;
        const ans = a % 2 === 0 ? this._TA8_fr(a, Math.abs(a / 2), sq) : this._TA8_fr(a, Math.abs(a), `2${sq}`);
        return this._Tx(this.makeMcq(T, 1, 'Dérivée de $\\sqrt{ax + b}$', 'Dériver $x \\mapsto \\sqrt{u(x)}$',
          `Soit $f(x) = ${sq}$, définie et dérivable sur l'intervalle où $${u} > 0$. Déterminer $f'(x)$.`,
          F(ans),
          [F(`\\frac{1}{2${sq}}`), F(this._TA8_fr(a, Math.abs(a), sq)), F(`${K(a, sq)}`), F(this._TA8_fr(-a, Math.abs(a), `2${sq}`)), F(`\\frac{${u}}{2${sq}}`)],
          'Utilise $(\\sqrt{u})\' = \\frac{u\'}{2\\sqrt{u}}$.',
          `Ici $u'(x) = ${a}$.`,
          `$f'(x) = \\frac{u'(x)}{2\\sqrt{u(x)}}$ avec $u(x) = ${u}$ et $u'(x) = ${a}$, d'où $f'(x) = ${ans}$.`),
          this._Tq(a, 2), `On écrit $f'(x) = \\frac{k}{${sq}}$ : saisir $k$ (entier ou fraction).`);
      }
      if (fam === 3) {
        const ans = this._TA8_fr(-a, Math.abs(a), `(${u})^2`);
        return this._Tx(this.makeMcq(T, 1, 'Dérivée de $\\frac{1}{ax + b}$', 'Dériver $x \\mapsto \\frac{1}{u(x)}$',
          `Soit $f(x) = \\frac{1}{${u}}$, définie et dérivable sur un intervalle où $${u} \\neq 0$. Déterminer $f'(x)$.`,
          F(ans),
          [F(this._TA8_fr(a, Math.abs(a), `(${u})^2`)), F(`-\\frac{1}{(${u})^2}`), F(this._TA8_fr(-a, Math.abs(a), u)), F(`-\\frac{1}{${u}}`)],
          'Utilise $\\left(\\frac{1}{u}\\right)\' = -\\frac{u\'}{u^2}$.',
          `Ici $u'(x) = ${a}$.`,
          `$f'(x) = -\\frac{u'(x)}{u(x)^2}$ avec $u(x) = ${u}$ et $u'(x) = ${a}$, d'où $f'(x) = ${ans}$.`),
          -a, `On écrit $f'(x) = \\frac{k}{(${u})^2}$ : saisir $k$.`);
      }
      const ans = this._TA8_fr(a, Math.abs(a), u);
      return this._Tx(this.makeMcq(T, 1, 'Dérivée de $\\ln(ax + b)$', 'Dériver $x \\mapsto \\ln(u(x))$',
        `Soit $f(x) = \\ln(${u})$, définie et dérivable sur l'intervalle où $${u} > 0$. Déterminer $f'(x)$.`,
        F(ans),
        [F(`\\frac{1}{${u}}`), F(this._TA8_fr(-a, Math.abs(a), u)), F(this._TA8_fr(a, Math.abs(a), `(${u})^2`)), F(`${a}\\ln(${u})`)],
        'Utilise $(\\ln u)\' = \\frac{u\'}{u}$.',
        `Ici $u'(x) = ${a}$.`,
        `$f'(x) = \\frac{u'(x)}{u(x)} = ${ans}$.`),
        a, `On écrit $f'(x) = \\frac{k}{${u}}$ : saisir $k$.`);
    }
    if (tier === 2) {
      const fam = this.randInt(0, 4);
      if (fam === 0) {
        const p = this.randNonZero(-6, 6); const q = this.randNonZero(-9, 9); const n = this.randInt(2, 4);
        const u = Q(1, p, q); const du = L(2, p);
        const P = (e) => this.pow(`(${u})`, e);
        return this._Tx(this.makeMcq(T, 2, 'Dérivée de $u^n$', 'Dériver une puissance d\'une fonction',
          `Soit $f(x) = (${u})^{${n}}$ sur $\\mathbb{R}$. Déterminer $f'(x)$.`,
          F(`${n}(${du})${P(n - 1)}`),
          [F(`${n}${P(n - 1)}`), F(`(${du})${P(n - 1)}`), F(`${n}(${du})${P(n)}`), F(`${n}${this.pow(`(${du})`, n - 1)}`), F(`${n - 1}(${du})${P(n - 1)}`)],
          'Utilise $(u^n)\' = n\\,u\'\\,u^{n-1}$.',
          `Ici $u(x) = ${u}$ et $u'(x) = ${du}$.`,
          `$f'(x) = ${n} \\times (${du}) \\times ${P(n - 1)} = ${n}(${du})${P(n - 1)}$.`),
          [2 * n, n * p, n - 1], `On écrit $f'(x) = (\\alpha x + \\beta)(${u})^{m}$ : saisir (α ; β ; m).`);
      }
      if (fam === 1) {
        const a = this.randNonZero(-3, 3); const b = this.randNonZero(-5, 5);
        const u = Q(a, b, 0); const du = L(2 * a, b);
        return this._Tx(this.makeMcq(T, 2, 'Dérivée de $e^{u}$', 'Dériver $x \\mapsto e^{u(x)}$',
          `Soit $f(x) = ${ex(u)}$ sur $\\mathbb{R}$. Déterminer $f'(x)$.`,
          F(`(${du})${ex(u)}`),
          [F(ex(u)), F(`(${u})${ex(L(2 * a, b))}`), F(`(${L(a, b)})${ex(u)}`), F(`(${du})${ex(du)}`), F(`(${du})${ex(Q(a, b, -1))}`)],
          'Utilise $(e^u)\' = u\'\\,e^u$.',
          `Ici $u(x) = ${u}$ et $u'(x) = ${du}$.`,
          `$f'(x) = u'(x)e^{u(x)} = (${du})${ex(u)}$.`),
          [2 * a, b], `On écrit $f'(x) = (\\alpha x + \\beta)${ex(u)}$ : saisir (α ; β).`);
      }
      if (fam === 2) {
        const a = this.randInt(1, 4); const c = this.randInt(1, 9);
        const u = Q(a, 0, c); const sq = `\\sqrt{${u}}`;
        return this._Tx(this.makeMcq(T, 2, 'Dérivée de $\\sqrt{u}$', 'Dériver $x \\mapsto \\sqrt{u(x)}$',
          `Soit $f(x) = ${sq}$ sur $\\mathbb{R}$. Déterminer $f'(x)$.`,
          F(`\\frac{${this.coefStr(a, 'x')}}{${sq}}`),
          [F(`\\frac{${this.coefStr(2 * a, 'x')}}{${sq}}`), F(`\\frac{1}{2${sq}}`), F(`\\frac{${this.coefStr(a, 'x')}}{2${sq}}`), F(`${this.coefStr(2 * a, 'x')}${sq}`), F(`\\frac{${this.coefStr(2 * a, 'x')}}{${u}}`)],
          'Utilise $(\\sqrt{u})\' = \\frac{u\'}{2\\sqrt{u}}$.',
          `Ici $u(x) = ${u} > 0$ et $u'(x) = ${this.coefStr(2 * a, 'x')}$.`,
          `$f'(x) = \\frac{${this.coefStr(2 * a, 'x')}}{2${sq}} = \\frac{${this.coefStr(a, 'x')}}{${sq}}$.`),
          a, `On écrit $f'(x) = \\frac{kx}{${sq}}$ : saisir $k$.`);
      }
      if (fam === 3) {
        const a = this.randInt(1, 5); const c = this.randInt(1, 9);
        const u = Q(a, 0, c);
        return this._Tx(this.makeMcq(T, 2, 'Dérivée de $\\ln(u)$', 'Dériver $x \\mapsto \\ln(u(x))$',
          `Soit $f(x) = \\ln(${u})$ sur $\\mathbb{R}$. Déterminer $f'(x)$.`,
          F(`\\frac{${this.coefStr(2 * a, 'x')}}{${u}}`),
          [F(`\\frac{1}{${u}}`), F(`\\frac{${this.coefStr(a, 'x')}}{${u}}`), F(`\\frac{${this.coefStr(2 * a, 'x')}}{(${u})^2}`), F(`${this.coefStr(2 * a, 'x')}\\ln(${u})`)],
          'Utilise $(\\ln u)\' = \\frac{u\'}{u}$, valable car $u > 0$.',
          `Ici $u(x) = ${u}$ et $u'(x) = ${this.coefStr(2 * a, 'x')}$.`,
          `$f'(x) = \\frac{u'(x)}{u(x)} = \\frac{${this.coefStr(2 * a, 'x')}}{${u}}$.`),
          2 * a, `On écrit $f'(x) = \\frac{kx}{${u}}$ : saisir $k$.`);
      }
      const p = this.randNonZero(-6, 6); const qq = Math.floor(p * p / 4) + this.randInt(1, 8);
      const u = Q(1, p, qq); const du = L(2, p);
      return this._Tx(this.makeMcq(T, 2, 'Dérivée de $\\frac{1}{u}$', 'Dériver l\'inverse d\'une fonction',
        `Soit $f(x) = \\frac{1}{${u}}$ sur $\\mathbb{R}$ (le dénominateur ne s'annule pas). Déterminer $f'(x)$.`,
        F(`-\\frac{${du}}{(${u})^2}`),
        [F(`\\frac{${du}}{(${u})^2}`), F(`-\\frac{1}{(${u})^2}`), F(`-\\frac{${du}}{${u}}`), F(`\\frac{1}{${du}}`)],
        'Utilise $\\left(\\frac{1}{u}\\right)\' = -\\frac{u\'}{u^2}$.',
        `Ici $u'(x) = ${du}$.`,
        `$f'(x) = -\\frac{u'(x)}{u(x)^2} = -\\frac{${du}}{(${u})^2}$.`),
        [-2, -p], `On écrit $f'(x) = \\frac{\\alpha x + \\beta}{(${u})^2}$ : saisir (α ; β).`);
    }
    if (tier === 3) {
      const fam = this.randInt(0, 4);
      if (fam === 0 || fam === 3) {
        const a = this.randNonZero(-3, 3); const b = this.randNonZero(-5, 5); const n = this.randInt(3, 5);
        const u = L(a, b);
        const P = (e) => this.pow(`(${u})`, e);
        if (fam === 0) {
          return this._Tx(this.makeMcq(T, 3, 'Dérivée seconde de $(ax + b)^n$', 'Calculer une dérivée seconde',
            `Soit $f(x) = (${u})^{${n}}$ sur $\\mathbb{R}$. Déterminer $f''(x)$.`,
            F2(K(n * (n - 1) * a * a, P(n - 2))),
            [F2(K(n * (n - 1), P(n - 2))), F2(K(n * a, P(n - 1))), F2(K(n * (n - 1) * a, P(n - 2))), F2(K(n * n * a * a, P(n - 2))), F2(K(n * (n - 1) * a * a, P(n - 1)))],
            'Calcule d\'abord $f\'(x)$, puis dérive à nouveau.',
            `$f'(x) = ${K(n * a, P(n - 1))}$.`,
            `$f'(x) = ${K(n * a, P(n - 1))}$, puis $f''(x) = ${n * a} \\times ${n - 1} \\times ${this.paren(a)} \\times ${P(n - 2)} = ${K(n * (n - 1) * a * a, P(n - 2))}$.`),
            [n * (n - 1) * a * a, n - 2], `On écrit $f''(x) = k(${u})^{m}$ : saisir (k ; m).`);
        }
        let x0; let w;
        do { x0 = this.randInt(-3, 3); w = a * x0 + b; } while (Math.abs(w) > 3 || (n - 2 > 1 && w === 0));
        const v = n * (n - 1) * a * a * w ** (n - 2);
        const A = (val) => `$f''(${x0}) = ${val}$`;
        return this.makeMcq(T, 3, 'Valeur d\'une dérivée seconde', 'Calculer $f\'\'(a)$',
          `Soit $f(x) = (${u})^{${n}}$ sur $\\mathbb{R}$. Calculer $f''(${x0})$.`,
          A(v),
          [A(n * a * w ** (n - 1)), A(n * (n - 1) * w ** (n - 2)), A(n * (n - 1) * a * w ** (n - 2)), A(w ** n), A(-v)],
          'Exprime $f\'\'(x)$, puis remplace $x$ par la valeur demandée.',
          'Dérive deux fois avec $(u^n)\' = n\\,u\'\\,u^{n-1}$, où $u\'$ est constant.',
          `$f'(x) = ${K(n * a, P(n - 1))}$ et $f''(x) = ${K(n * (n - 1) * a * a, P(n - 2))}$. En $x = ${x0}$ : $${a} \\times ${this.paren(x0)} ${this.formatSign(b)} = ${w}$, donc $f''(${x0}) = ${n * (n - 1) * a * a} \\times ${this.pow(this.paren(w), n - 2)} = ${v}$.`);
      }
      if (fam === 1) {
        const a = this.randNonZero(-3, 3);
        const e = ex(this.coefStr(a, 'x^2'));
        return this._Tx(this.makeMcq(T, 3, 'Dérivée seconde de $e^{ax^2}$', 'Dériver deux fois une composée',
          `Soit $f(x) = ${e}$ sur $\\mathbb{R}$. Déterminer $f''(x)$.`,
          F2(`(${this.poly([[4 * a * a, 'x^2'], [2 * a, '']])})${e}`),
          [F2(`${this.coefStr(2 * a, 'x')}${e}`), F2(`(${this.poly([[4 * a * a, 'x^2'], [2 * a, 'x']])})${e}`), F2(`(${this.poly([[2 * a * a, 'x^2'], [2 * a, '']])})${e}`), F2(`${4 * a * a}x^2${e}`), F2(`(${this.poly([[4 * a * a, 'x^2'], [-2 * a, '']])})${e}`)],
          'Calcule $f\'(x)$ avec $(e^u)\' = u\'e^u$, puis dérive le produit obtenu.',
          `$f'(x) = ${this.coefStr(2 * a, 'x')}${e}$.`,
          `$f'(x) = ${this.coefStr(2 * a, 'x')}${e}$. Avec $(uv)' = u'v + uv'$ : $f''(x) = ${K(2 * a, e)} + (${this.coefStr(2 * a, 'x')})^2${e} = (${this.poly([[4 * a * a, 'x^2'], [2 * a, '']])})${e}$.`),
          [4 * a * a, 0, 2 * a], `On écrit $f''(x) = (\\alpha x^2 + \\beta x + \\gamma)${e}$ : saisir (α ; β ; γ).`);
      }
      if (fam === 2) {
        const k = this.randNonZero(-4, 4);
        const e = ex(this.coefStr(k, 'x'));
        return this._Tx(this.makeMcq(T, 3, 'Dérivée seconde de $xe^{kx}$', 'Dériver deux fois un produit avec une composée',
          `Soit $f(x) = x${e}$ sur $\\mathbb{R}$. Déterminer $f''(x)$.`,
          F2(`(${this.poly([[k * k, 'x'], [2 * k, '']])})${e}`),
          [F2(`(${this.poly([[k, 'x'], [1, '']])})${e}`), F2(`(${this.poly([[k * k, 'x'], [k, '']])})${e}`), F2(`${this.coefStr(k * k, 'x')}${e}`), F2(`(${this.poly([[k * k, 'x'], [2, '']])})${e}`), F2(`(${this.poly([[k, 'x'], [2 * k, '']])})${e}`)],
          'Dérive le produit $x \\times e^{kx}$ en utilisant $(e^{kx})\' = ke^{kx}$.',
          `$f'(x) = (${this.poly([[k, 'x'], [1, '']])})${e}$.`,
          `$f'(x) = ${e} ${k > 0 ? '+' : '-'} ${this.coefStr(Math.abs(k), 'x')}${e} = (${this.poly([[k, 'x'], [1, '']])})${e}$, puis $f''(x) = ${K(k, e)} ${k > 0 ? '+' : '-'} ${K(Math.abs(k), `(${this.poly([[k, 'x'], [1, '']])})`)}${e} = (${this.poly([[k * k, 'x'], [2 * k, '']])})${e}$.`),
          [k * k, 2 * k], `On écrit $f''(x) = (\\alpha x + \\beta)${e}$ : saisir (α ; β).`);
      }
      const a = this.randInt(1, 4); const b = this.randNonZero(-6, 6);
      const u = L(a, b); const sq = `\\sqrt{${u}}`;
      const ans = a % 2 === 0 ? `-\\frac{${a * a / 4}}{(${u})${sq}}` : `-\\frac{${a * a}}{4(${u})${sq}}`;
      const d1 = a % 2 === 0 ? `\\frac{${a / 2}}{${sq}}` : `\\frac{${a}}{2${sq}}`;
      return this._Tx(this.makeMcq(T, 3, 'Dérivée seconde de $\\sqrt{ax + b}$', 'Dériver deux fois une racine composée',
        `Soit $f(x) = ${sq}$, définie sur l'intervalle où $${u} > 0$. Déterminer $f''(x)$.`,
        F2(ans),
        [F2(a % 2 === 0 ? `\\frac{${a * a / 4}}{(${u})${sq}}` : `\\frac{${a * a}}{4(${u})${sq}}`), F2(`-\\frac{${a}}{(${u})${sq}}`), F2(`-\\frac{${a * a}}{2${sq}}`), F2(`-\\frac{1}{4(${u})${sq}}`), F2(`-\\frac{${a * a}}{2(${u})${sq}}`)],
        `On a $f'(x) = ${d1}$ : dérive cette expression de la forme $\\frac{k}{\\sqrt{u}}$.`,
        '$\\left(\\frac{1}{\\sqrt{u}}\\right)\' = -\\frac{u\'}{2u\\sqrt{u}}$.',
        `$f'(x) = ${d1}$, puis $f''(x) = ${a % 2 === 0 ? (a === 2 ? '' : `${a / 2} \\times `) : `\\frac{${a}}{2} \\times `}\\left(-\\frac{${a}}{2(${u})${sq}}\\right) = ${ans}$.`),
        this._Tq(-a * a, 4), `On écrit $f''(x) = \\frac{k}{(${u})${sq}}$ : saisir $k$ (entier ou fraction).`);
    }
    // tier 4
    const fam = this.randInt(0, 3);
    if (fam === 0) {
      const a = this.randChoice([-3, -2, -1, 1, 2, 3, 4, 5]); const s = this.randInt(1, 5); const x0 = this.randInt(-4, 6);
      const b = s * s - a * x0;
      if (b === 0) return this.gen_TA8(4);
      const u = L(a, b);
      const m = this.frac(a, 2 * s); const p = this.frac(2 * s * s - a * x0, 2 * s);
      const y = (mm, pp) => `$y = ${this.poly([[mm, 'x'], [pp, '']])}$`;
      return this._Tx(this.makeMcq(T, 4, 'Tangente à la courbe d\'une racine composée', 'Utiliser $(\\sqrt{u})\'$ pour une équation de tangente',
        `Soit $f(x) = \\sqrt{${u}}$. Déterminer l'équation réduite de la tangente à la courbe de $f$ au point d'abscisse $${x0}$.`,
        y(m, p),
        [y(this.frac(a, s), this.frac(s * s - a * x0, s)), y(m, String(s)), y(this.frac(1, 2 * s), this.frac(2 * s * s - x0, 2 * s)), y(this.frac(a, 2 * s), this.frac(2 * s * s + a * x0, 2 * s))],
        'La tangente en $a$ a pour équation $y = f\'(a)(x - a) + f(a)$.',
        `$f(${x0}) = \\sqrt{${s * s}} = ${s}$ et $f'(x) = \\frac{${a}}{2\\sqrt{${u}}}$.`,
        `$f(${x0}) = ${s}$ et $f'(${x0}) = \\frac{${a}}{2 \\times ${s}} = ${m}$. Donc $y = ${m === '1' ? '' : m === '-1' ? '-' : m}${x0 === 0 ? 'x' : `(x ${this.formatSign(-x0)})`} + ${s}$, soit ${y(m, p)}.`),
        [this._Tq(a, 2 * s), this._Tq(2 * s * s - a * x0, 2 * s)], 'L\'équation réduite s\'écrit $y = mx + p$ : saisir (m ; p).');
    }
    if (fam === 1) {
      const a = this.randNonZero(-4, 4); const x0 = this.randNonZero(-4, 4);
      const b = -a * x0;
      const u = L(a, b);
      const y = (mm, pp) => `$y = ${this.poly([[mm, 'x'], [pp, '']])}$`;
      return this._Tx(this.makeMcq(T, 4, 'Tangente à la courbe de $e^{ax + b}$', 'Utiliser $(e^u)\'$ pour une équation de tangente',
        `Soit $f(x) = ${ex(u)}$. Déterminer l'équation réduite de la tangente à la courbe de $f$ au point d'abscisse $${x0}$.`,
        y(a, 1 - a * x0),
        [y(a, 1), y(1, 1 - x0), y(a, 1 + a * x0), y(a, -a * x0), y(-a, 1 + a * x0)],
        `Il faut $f(${x0})$ et $f'(${x0})$, puis l'équation $y = f'(${x0})(x ${this.formatSign(-x0)}) + f(${x0})$.`,
        `$${a} \\times ${this.paren(x0)} ${this.formatSign(b)} = 0$, donc $f(${x0}) = e^0 = 1$.`,
        `$f'(x) = ${K(a, ex(u))}$, donc $f'(${x0}) = ${a}$ et $f(${x0}) = 1$. La tangente : $y = ${K(a, `(x ${this.formatSign(-x0)})`)} + 1$, soit ${y(a, 1 - a * x0)}.`),
        [a, 1 - a * x0], 'L\'équation réduite s\'écrit $y = mx + p$ : saisir (m ; p).');
    }
    if (fam === 2) {
      const p = this.randNonZero(-8, 8);
      const form = this.randInt(0, 3);
      let f; let up;
      if (form === 0) { f = ex(Q(1, p, 0)); up = true; } else if (form === 1) { f = ex(Q(-1, p, 0)); up = false; } else {
        const q = Math.floor(p * p / 4) + this.randInt(1, 6);
        f = form === 2 ? `\\ln(${Q(1, p, q)})` : `\\sqrt{${Q(1, p, q)}}`; up = true;
      }
      const c = up ? this.frac(-p, 2) : this.frac(p, 2);
      const mc = up ? this.frac(p, 2) : this.frac(-p, 2);
      const R = (v) => `$[${v} ; +\\infty[$`; const Lf = (v) => `$]-\\infty ; ${v}]$`;
      const ans = up ? R(c) : Lf(c);
      const du = up ? L(2, p) : L(-2, p);
      return this.makeMcq(T, 4, 'Variations d\'une fonction composée', 'Étudier le signe de la dérivée d\'une composée',
        `Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = ${f}$. Sur quel intervalle $f$ est-elle croissante ?`,
        ans,
        [up ? Lf(c) : R(c), R(mc), Lf(mc), '$\\mathbb{R}$'],
        'Dérive la composée, puis étudie le signe de $f\'(x)$ : seul le facteur $u\'(x)$ peut changer de signe.',
        `Le signe de $f'(x)$ est celui de $${du}$.`,
        `$f'(x)$ est le produit de $${du}$ par un facteur strictement positif. Or $${du} \\ge 0 \\iff x ${up ? '\\ge' : '\\le'} ${c}$. Donc $f$ est croissante sur ${ans}.`);
    }
    const a = this.randNonZero(-3, 3); const b = this.randNonZero(-9, 9); const c = this.randInt(-9, 9); const d = this.randInt(-9, 9);
    const f = this.poly([[a, 'x^3'], [b, 'x^2'], [c, 'x'], [d, '']]);
    const f2 = this.poly([[6 * a, 'x'], [2 * b, '']]);
    const x0 = this.frac(-b, 3 * a);
    const R = (v) => `$[${v} ; +\\infty[$`; const Lf = (v) => `$]-\\infty ; ${v}]$`;
    const ans = a > 0 ? R(x0) : Lf(x0);
    return this.makeMcq(T, 4, 'Dérivée seconde et variations de $f\'$', 'Lire les variations de $f\'$ sur le signe de $f\'\'$',
      `Soit $f(x) = ${f}$ sur $\\mathbb{R}$. Sur quel intervalle la fonction dérivée $f'$ est-elle croissante ?`,
      ans,
      [a > 0 ? Lf(x0) : R(x0), R(this.frac(b, 3 * a)), Lf(this.frac(b, 3 * a)), R(this.frac(-b, a)), '$\\mathbb{R}$'],
      '$f\'\'$ est la dérivée de $f\'$ : $f\'$ est croissante là où $f\'\' \\ge 0$.',
      `$f'(x) = ${this.poly([[3 * a, 'x^2'], [2 * b, 'x'], [c, '']])}$ et $f''(x) = ${f2}$.`,
      `$f''(x) = ${f2} \\ge 0 \\iff x ${a > 0 ? '\\ge' : '\\le'} ${x0}$. Donc $f'$ est croissante sur ${ans} (et $f$ y est convexe, voir le chapitre TA4).`);
  },

  // ---------------------------------------------------------------------
  // TA9 : Fonctions sinus et cosinus
  // ---------------------------------------------------------------------
  /** Multiple de π : _TA9_pi(5, 6) -> \\frac{5\\pi}{6} ; _TA9_pi(-12, 12) -> -\\pi */
  _TA9_pi(p, q) {
    if (p === 0) return '0';
    const g = this.gcd(p, q);
    p /= g; q /= g;
    if (q < 0) { p = -p; q = -q; }
    const sg = p < 0 ? '-' : '';
    const nu = Math.abs(p) === 1 ? '\\pi' : `${Math.abs(p)}\\pi`;
    return q === 1 ? sg + nu : `${sg}\\frac{${nu}}{${q}}`;
  },
  /** Valeurs remarquables de sinus et cosinus */
  _TA9_vals(withOnes = true) {
    const v = [['0', 0], ['\\frac{1}{2}', 0.5], ['-\\frac{1}{2}', -0.5], ['\\frac{\\sqrt{2}}{2}', Math.SQRT2 / 2], ['-\\frac{\\sqrt{2}}{2}', -Math.SQRT2 / 2],
      ['\\frac{\\sqrt{3}}{2}', Math.sqrt(3) / 2], ['-\\frac{\\sqrt{3}}{2}', -Math.sqrt(3) / 2]];
    return withOnes ? v.concat([['1', 1], ['-1', -1]]) : v;
  },
  /** Intervalles d'étude (bornes en unités de π/12) */
  _TA9_ivs() {
    return [
      { tex: '[0 ; 2\\pi[', lo: 0, hi: 24, lc: true, rc: false },
      { tex: ']-\\pi ; \\pi]', lo: -12, hi: 12, lc: false, rc: true },
      { tex: '[0 ; \\pi]', lo: 0, hi: 12, lc: true, rc: true },
      { tex: '\\left[-\\frac{\\pi}{2} ; \\frac{\\pi}{2}\\right]', lo: -6, hi: 6, lc: true, rc: true },
      { tex: '[-\\pi ; 0]', lo: -12, hi: 0, lc: true, rc: true },
      { tex: '[\\pi ; 3\\pi]', lo: 12, hi: 36, lc: true, rc: true },
      { tex: '[0 ; 2\\pi]', lo: 0, hi: 24, lc: true, rc: true }
    ];
  },
  /** Solutions (en unités de π/12) de trig(x) = v dans l'intervalle I */
  _TA9_solve(fn, v, I) {
    const out = [];
    for (let k = I.lo; k <= I.hi; k++) {
      if ((k === I.lo && !I.lc) || (k === I.hi && !I.rc)) continue;
      if (Math.abs(fn(k * Math.PI / 12) - v) < 1e-9) out.push(k);
    }
    return out;
  },
  _TA9_set(ks) {
    return ks.length ? `S = \\left\\{${ks.map((k) => this._TA9_pi(k, 12)).join(' ; ')}\\right\\}` : 'S = \\emptyset';
  },
  /** Ensemble des x de I (unités π/12) tels que pred(x) ; g s'annule exactement aux points de rupture. Renvoie le LaTeX. */
  _TA9_ineq(pred, g, I) {
    const bps = [I.lo];
    for (let k = I.lo + 1; k < I.hi; k++) if (Math.abs(g(k * Math.PI / 12)) < 1e-9) bps.push(k);
    bps.push(I.hi);
    const X = (k) => k * Math.PI / 12;
    const inc = (k) => !((k === I.lo && !I.lc) || (k === I.hi && !I.rc)) && pred(X(k));
    const pieces = [];
    let cur = null;
    for (let i = 0; i + 1 < bps.length; i++) {
      const a = bps[i]; const b = bps[i + 1];
      const on = pred(X((a + b) / 2));
      if (on) {
        if (cur && cur.b === a && inc(a)) cur.b = b;
        else { if (cur) pieces.push(cur); cur = { a, b }; }
      } else if (cur) { pieces.push(cur); cur = null; }
    }
    if (cur) pieces.push(cur);
    if (!pieces.length) return 'S = \\emptyset';
    return 'S = ' + pieces.map((p) => `${inc(p.a) ? '[' : ']'}${this._TA9_pi(p.a, 12)} ; ${this._TA9_pi(p.b, 12)}${inc(p.b) ? ']' : '['}`).join(' \\cup ');
  },

  gen_TA9(tier) {
    const T = 'TA9';
    const L = (a, b) => this.poly([[a, 'x'], [b, '']]);
    const K = (c, e) => (c === 1 ? e : c === -1 ? `-${e}` : `${c}${e}`);
    const F = (s) => `$f'(x) = ${s}$`;
    const sin = Math.sin; const cos = Math.cos;
    if (tier === 1) {
      const r = Math.random();
      if (r < 0.5) {
        const b = this.randInt(-5, 5); const a = b === 0 ? this.randInt(1, 5) : this.randNonZero(-5, 5); const k = this.randChoice([1, 1, 2, 3, -1, -2, 4]);
        const arg = L(a, b);
        const isSin = Math.random() < 0.5;
        const S = `\\sin(${arg})`; const Cs = `\\cos(${arg})`;
        const f = K(k, isSin ? S : Cs);
        const ans = isSin ? K(k * a, Cs) : K(-k * a, S);
        return this._Tx(this.makeMcq(T, 1, `Dérivée de $${isSin ? '\\sin' : '\\cos'}(ax + b)$`, 'Dériver $x \\mapsto \\sin(ax + b)$ et $x \\mapsto \\cos(ax + b)$',
          `Soit $f(x) = ${f}$ sur $\\mathbb{R}$. Déterminer $f'(x)$.`,
          F(ans),
          isSin ? [F(K(-k * a, Cs)), F(K(k, Cs)), F(K(k * a, S)), F(K(-k, Cs)), F(K(k * a, `\\cos(${a === 1 ? 'x' : a === -1 ? '-x' : `${a}x`})`)), F(K(-k * a, S))]
            : [F(K(k * a, S)), F(K(-k, S)), F(K(-k * a, Cs)), F(K(k, S)), F(K(-k * a, `\\sin(${a === 1 ? 'x' : a === -1 ? '-x' : `${a}x`})`)), F(K(k * a, Cs))],
          '$\\sin\' = \\cos$, $\\cos\' = -\\sin$, et la dérivée de $x \\mapsto \\varphi(ax + b)$ est $x \\mapsto a\\,\\varphi\'(ax + b)$.',
          `Ici la fonction intérieure $${arg}$ a pour dérivée $${a}$.`,
          `$f'(x) = ${k === 1 ? '' : `${this.paren(k)} \\times `}${this.paren(a)} \\times ${isSin ? Cs : `(-${S})`} = ${ans}$.`),
          isSin ? [0, k * a] : [-k * a, 0], `On écrit $f'(x) = \\alpha\\sin(${arg}) + \\beta\\cos(${arg})$ : saisir (α ; β).`);
      }
      if (r < 0.75) {
        const a = this.randInt(2, 6); const b = this.randInt(-4, 4); const k = this.randChoice([1, 2, 3, -1, 5]);
        const isSin = Math.random() < 0.5;
        const f = K(k, `\\${isSin ? 'sin' : 'cos'}(${L(a, b)})`);
        const A = (p, q) => `$T = ${this._TA9_pi(p, q)}$`;
        return this._Tx(this.makeMcq(T, 1, 'Période d\'une fonction trigonométrique', 'Déterminer la période de $x \\mapsto \\sin(ax + b)$',
          `Soit $f(x) = ${f}$ sur $\\mathbb{R}$. Quelle est la plus petite période $T > 0$ de la fonction $f$ ?`,
          A(2, a),
          [A(1, a), A(2, 1), A(2 * a, 1), A(4, a), A(a, 2)],
          '$\\sin$ et $\\cos$ sont $2\\pi$-périodiques.',
          `$f(x + T) = f(x)$ pour tout $x$ dès que $${a}T$ est un multiple de $2\\pi$.`,
          `Pour tout réel $x$, $${a}\\left(x + \\frac{2\\pi}{${a}}\\right)${b === 0 ? '' : ` ${this.formatSign(b)}`} = ${L(a, b)} + 2\\pi$, donc $f\\left(x + \\frac{2\\pi}{${a}}\\right) = f(x)$. La plus petite période est $T = ${this._TA9_pi(2, a)}$.`),
          this._Tq(2, a), 'On écrit $T = k\\pi$ : saisir $k$ (entier ou fraction).');
      }
      const fam = this.randChoice([['x\\sin(x)', 0], ['x\\cos(x)', 1], ['x^2\\cos(x)', 0], ['x^2\\sin(x)', 1], ['\\sin(x)\\cos(x)', 1], ['\\cos(x) + x^2', 0],
        ['\\sin(x) + x', 1], ['\\sin(x) + \\cos(x)', 2], ['x + \\cos(x)', 2], ['\\cos(2x) - 3', 0], ['\\sin(3x)', 1], ['x^3\\cos(x)', 1], ['\\cos(x - 1)', 2], ['x\\sin(x) + 1', 0], ['\\sin(x) - 2', 2]]);
      const k = this.randChoice([1, 2, 3, 5, -1, -4]);
      const f = K(k, fam[0]);
      const labs = ['La fonction $f$ est paire', 'La fonction $f$ est impaire', 'La fonction $f$ n\'est ni paire ni impaire', 'La fonction $f$ est à la fois paire et impaire'];
      return this.makeMcq(T, 1, 'Parité et fonctions trigonométriques', 'Utiliser la parité de $\\sin$ et $\\cos$',
        `Soit $f(x) = ${f}$ sur $\\mathbb{R}$. Que peut-on dire de la parité de $f$ ?`,
        labs[fam[1]], labs.filter((_, i) => i !== fam[1]),
        '$\\cos(-x) = \\cos(x)$ (cosinus est paire) et $\\sin(-x) = -\\sin(x)$ (sinus est impaire).',
        'Calcule $f(-x)$ et compare-le à $f(x)$ et à $-f(x)$.',
        fam[1] === 0 ? 'Pour tout réel $x$, on vérifie que $f(-x) = f(x)$ : $f$ est paire (sa courbe est symétrique par rapport à l\'axe des ordonnées).'
          : fam[1] === 1 ? 'Pour tout réel $x$, on vérifie que $f(-x) = -f(x)$ : $f$ est impaire (sa courbe est symétrique par rapport à l\'origine).'
            : 'On trouve un réel $x$ (par exemple $x = \\frac{\\pi}{2}$ ou $x = 1$) tel que $f(-x) \\neq f(x)$ et $f(-x) \\neq -f(x)$ : $f$ n\'est ni paire ni impaire.');
    }
    if (tier === 2) {
      if (Math.random() < 0.4) {
        const a = this.randNonZero(-4, 4); const b = this.randInt(-5, 5);
        const u = L(a, b); const isSin = Math.random() < 0.5;
        const S = '\\sin(x)'; const Cs = '\\cos(x)';
        const prod = (c, e) => (u === 'x' ? `x${e}` : u === '-x' ? `-x${e}` : `(${u})${e}`);
        const f = prod(1, isSin ? S : Cs);
        const cl = (t) => t.replace('+ -', '- ').replace('- -', '+ ');
        const ans = isSin ? `${K(a, S)} + ${prod(1, Cs)}` : `${K(a, Cs)} - ${prod(1, S)}`;
        const w1 = isSin ? `${K(a, S)} - ${prod(1, Cs)}` : `${K(a, Cs)} + ${prod(1, S)}`;
        const w2 = isSin ? K(a, Cs) : K(-a, S);
        const w3 = isSin ? `${K(a, Cs)} + ${prod(1, S)}` : `${K(-a, S)} + ${prod(1, Cs)}`;
        const w4 = isSin ? prod(1, Cs) : (prod(1, S).startsWith('-') ? prod(1, S).slice(1) : `-${prod(1, S)}`);
        return this._Tx(this.makeMcq(T, 2, 'Dérivée d\'un produit avec sinus ou cosinus', 'Dériver $u \\times \\sin$ ou $u \\times \\cos$',
          `Soit $f(x) = ${f}$ sur $\\mathbb{R}$. Déterminer $f'(x)$.`,
          cl(F(ans)), [F(w1), F(w2), F(w3), F(w4)].map(cl),
          'Utilise $(uv)\' = u\'v + uv\'$.',
          `Ici $u(x) = ${u}$, $u'(x) = ${a}$ et $v(x) = ${isSin ? S : Cs}$, $v'(x) = ${isSin ? Cs : `-${S}`}$.`,
          `$f'(x) = ${a} \\times ${isSin ? S : Cs} + ${u === 'x' ? 'x' : `(${u})`} \\times ${isSin ? Cs : `(-${S})`} = ${cl(ans)}$.`),
          isSin ? [0, a, a, b] : [-a, -b, 0, a], 'On écrit $f\'(x) = (\\alpha x + \\beta)\\sin(x) + (\\gamma x + \\delta)\\cos(x)$ : saisir (α ; β ; γ ; δ).');
      }
      const isSin = Math.random() < 0.5;
      const fn = isSin ? sin : cos;
      const [vt, v] = this.randChoice(this._TA9_vals());
      const I = this._TA9_ivs()[0];
      const sol = this._TA9_solve(fn, v, I);
      const wrongs = [this._TA9_set(this._TA9_solve(fn, -v, I)), this._TA9_set(this._TA9_solve(isSin ? cos : sin, v, I)), this._TA9_set(sol.slice(0, 1)),
        this._TA9_set(sol.map((k) => -k).sort((x, y) => x - y)), this._TA9_set(this._TA9_solve(fn, v, { lo: -12, hi: 12, lc: false, rc: true }))].map((s) => `$${s}$`);
      return this._Tx(this.makeMcq(T, 2, `Équation $\\${isSin ? 'sin' : 'cos'}(x) = a$ sur $[0 ; 2\\pi[$`, 'Résoudre une équation trigonométrique sur un intervalle',
        `Résoudre dans l'intervalle $I = ${I.tex}$ l'équation $\\${isSin ? 'sin' : 'cos'}(x) = ${vt}$.`,
        `$${this._TA9_set(sol)}$`, wrongs,
        `Repère sur le cercle trigonométrique les points ${isSin ? 'd\'ordonnée' : 'd\'abscisse'} $${vt}$.`,
        isSin ? 'Si $\\alpha$ est solution, $\\pi - \\alpha$ l\'est aussi (à $2\\pi$ près).' : 'Si $\\alpha$ est solution, $-\\alpha$ l\'est aussi (à $2\\pi$ près).',
        sol.length ? `Les solutions dans $I$ sont les réels de $I$ associés aux points du cercle ${isSin ? 'd\'ordonnée' : 'd\'abscisse'} $${vt}$ : $${this._TA9_set(sol)}$.` : `Aucun réel de $I$ ne convient : $S = \\emptyset$.`),
        ...this._TA9_exact(sol));
    }
    if (tier === 3) {
      const r = Math.random();
      if (r < 0.4) {
        const isSin = Math.random() < 0.5;
        const fn = isSin ? sin : cos;
        const [vt, v] = this.randChoice(this._TA9_vals());
        const ivs = this._TA9_ivs();
        const I = this.randChoice(ivs.slice(1, 6));
        const sol = this._TA9_solve(fn, v, I);
        const wrongs = [this._TA9_set(this._TA9_solve(fn, v, ivs[0])), this._TA9_set(this._TA9_solve(fn, -v, I)), this._TA9_set(this._TA9_solve(isSin ? cos : sin, v, I)),
          this._TA9_set(sol.slice(0, 1)), this._TA9_set(sol.map((k) => -k).sort((x, y) => x - y)), this._TA9_set(this._TA9_solve(fn, v, { lo: I.lo - 12, hi: I.hi + 12, lc: true, rc: true }))]
          .filter((s) => s !== this._TA9_set(sol)).map((s) => `$${s}$`);
        return this._Tx(this.makeMcq(T, 3, `Équation $\\${isSin ? 'sin' : 'cos'}(x) = a$ sur un intervalle`, 'Résoudre une équation trigonométrique sur un intervalle donné',
          `Résoudre dans l'intervalle $I = ${I.tex}$ l'équation $\\${isSin ? 'sin' : 'cos'}(x) = ${vt}$.`,
          `$${this._TA9_set(sol)}$`, wrongs,
          'Commence par les solutions dans $[0 ; 2\\pi[$, puis ajoute ou retire des multiples de $2\\pi$ pour revenir dans $I$.',
          `Attention aux bornes de $I = ${I.tex}$.`,
          sol.length ? `On cherche les réels de $I$ dont l'image sur le cercle trigonométrique a ${isSin ? 'pour ordonnée' : 'pour abscisse'} $${vt}$ ; en tenant compte de la $2\\pi$-périodicité et des bornes : $${this._TA9_set(sol)}$.`
            : `Les solutions de l'équation sont, à $2\\pi$ près, en dehors de $I = ${I.tex}$ : $S = \\emptyset$.`),
          ...this._TA9_exact(sol));
      }
      if (r < 0.65) {
        const a = this.randNonZero(-7, 7); const b = this.randInt(1, 6);
        const num = `\\sin(${this.coefStr(a, 'x')})`;
        const A = (p, q) => `$\\ell = ${this.frac(p, q)}$`;
        return this.makeMcq(T, 3, 'Limite de référence $\\frac{\\sin(x)}{x}$', 'Utiliser $\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1$',
          `Déterminer $\\ell = \\lim_{x \\to 0} \\frac{${num}}{${this.coefStr(b, 'x')}}$.`,
          A(a, b),
          [A(b, a), A(1, b), A(0, 1), A(a * b, 1), A(-a, b), A(a, 1)],
          '$\\lim_{X \\to 0} \\frac{\\sin(X)}{X} = 1$ (c\'est le nombre dérivé de $\\sin$ en $0$).',
          `Fais apparaître $\\frac{\\sin(X)}{X}$ avec $X = ${this.coefStr(a, 'x')}$ : multiplie et divise par $${a}$.`,
          `Pour $x \\neq 0$, $\\frac{${num}}{${this.coefStr(b, 'x')}} = ${this.frac(a, b)} \\times \\frac{\\sin(X)}{X}$ avec $X = ${this.coefStr(a, 'x')}$ qui tend vers $0$. Donc $\\ell = ${this.frac(a, b)} \\times 1 = ${this.frac(a, b)}$.`.replace(/1 \\times \\frac/, '\\frac').replace(/= 1 \\times 1 = 1\$/, '= 1$'));
      }
      const kind = this.randInt(0, 3);
      const k = this.randChoice([1, 2, 3, -1, -2]); const c = this.randInt(2, 5);
      let f; let ans; let ws; let h; let lam; let form;
      if (kind === 0) {
        const e = `e^{${K(k, '\\sin(x)')}}`;
        f = e; lam = k; form = `\\lambda\\cos(x)${e}`; ans = `${K(k, '\\cos(x)')}${e}`; ws = [`\\cos(x)${e}`, `${K(-k, '\\cos(x)')}${e}`, `${K(k, '\\sin(x)')}${e}`, `e^{${K(k, '\\cos(x)')}}`]; h = '$(e^u)\' = u\'e^u$ avec $u(x) = ' + K(k, '\\sin(x)') + '$.';
      } else if (kind === 1) {
        const kx = this.coefStr(k, 'x^2');
        f = `\\cos(${kx})`; lam = -2 * k; form = `\\lambda x\\sin(${kx})`; ans = `${this.coefStr(-2 * k, 'x')}\\sin(${kx})`; ws = [`-\\sin(${kx})`, `${this.coefStr(2 * k, 'x')}\\sin(${kx})`, `${this.coefStr(-2 * k, 'x')}\\cos(${kx})`, `${this.coefStr(-k, 'x')}\\sin(${kx})`]; h = '$(\\cos(u))\' = -u\'\\sin(u)$.';
      } else if (kind === 2) {
        f = `\\ln(${c} + \\cos(x))`; lam = -1; form = `\\frac{\\lambda\\sin(x)}{${c} + \\cos(x)}`; ans = `-\\frac{\\sin(x)}{${c} + \\cos(x)}`; ws = [`\\frac{\\sin(x)}{${c} + \\cos(x)}`, `\\frac{1}{${c} + \\cos(x)}`, `-\\frac{\\cos(x)}{${c} + \\cos(x)}`, `-\\frac{\\sin(x)}{(${c} + \\cos(x))^2}`]; h = `$(\\ln(u))' = \\frac{u'}{u}$, avec $u(x) = ${c} + \\cos(x) > 0$.`;
      } else {
        f = `\\sqrt{${c} + \\sin(x)}`; lam = '1/2'; form = `\\frac{\\lambda\\cos(x)}{\\sqrt{${c} + \\sin(x)}}`; ans = `\\frac{\\cos(x)}{2\\sqrt{${c} + \\sin(x)}}`; ws = [`\\frac{\\cos(x)}{\\sqrt{${c} + \\sin(x)}}`, `-\\frac{\\cos(x)}{2\\sqrt{${c} + \\sin(x)}}`, `\\frac{1}{2\\sqrt{${c} + \\sin(x)}}`, `\\frac{\\sin(x)}{2\\sqrt{${c} + \\sin(x)}}`]; h = `$(\\sqrt{u})' = \\frac{u'}{2\\sqrt{u}}$, avec $u(x) = ${c} + \\sin(x) > 0$.`;
      }
      return this._Tx(this.makeMcq(T, 3, 'Dérivée d\'une composée trigonométrique', 'Dériver une composée faisant intervenir $\\sin$ ou $\\cos$',
        `Soit $f(x) = ${f}$ sur $\\mathbb{R}$. Déterminer $f'(x)$.`,
        F(ans), ws.map(F),
        'Repère la fonction intérieure $u$ et utilise $(g \\circ u)\' = u\' \\times g\'(u)$.',
        h,
        `En appliquant la formule de dérivation d'une composée : $f'(x) = ${ans}$.`),
        lam, `On écrit $f'(x) = ${form}$ : saisir $\\lambda$ (entier ou fraction).`);
    }
    // tier 4
    const ivs = this._TA9_ivs();
    const r4 = Math.random();
    if (r4 < 0.3) {
      // Nombre de solutions de trig(kx) = v sur [0 ; 2π[ : périodicité
      const k = this.randInt(2, 4);
      const isSin = Math.random() < 0.5;
      const [vt, v] = this.randChoice(this._TA9_vals().filter((e) => e[1] !== 0 || !isSin));
      const ext = Math.abs(v) === 1;
      const n = ext ? k : 2 * k;
      const fn = `\\${isSin ? 'sin' : 'cos'}(${k}x)`;
      return this.makeMcq(T, 4, 'Nombre de solutions d\'une équation trigonométrique',
        'Utiliser la périodicité pour dénombrer les solutions',
        `Combien l'équation $${fn} = ${vt}$ admet-elle de solutions dans l'intervalle $[0 ; 2\\pi[$ ?`,
        `$${n}$`,
        [n === 2 ? 4 : 2, ext ? 2 * k : k, n + 1, 2 * k + 2].filter((x, i, arr) => x !== n && arr.indexOf(x) === i).map((x) => `$${x}$`),
        `Pose $X = ${k}x$ : quand $x$ parcourt $[0 ; 2\\pi[$, $X$ parcourt $[0 ; ${2 * k}\\pi[$.`,
        `Sur un intervalle de longueur $2\\pi$, l'équation $\\${isSin ? 'sin' : 'cos'}(X) = ${vt}$ a ${ext ? 'une seule solution' : 'deux solutions'}.`,
        `Avec $X = ${k}x$, il s'agit de résoudre $\\${isSin ? 'sin' : 'cos'}(X) = ${vt}$ pour $X \\in [0 ; ${2 * k}\\pi[$, intervalle formé de $${k}$ périodes. Sur chaque période, ${ext ? `$${vt}$ est une valeur extrême : une seule solution` : `il y a exactement deux solutions (points du cercle ${isSin ? 'd\'ordonnée' : 'd\'abscisse'} $${vt}$)`}. D'où $${k} \\times ${ext ? 1 : 2} = ${n}$ solutions pour $x$.`
      );
    }
    if (r4 < 0.72) {
      const isSin = Math.random() < 0.5;
      const fn = isSin ? sin : cos;
      const [vt, v] = this.randChoice(this._TA9_vals(false).filter((e) => !isSin || e[1] !== 0));
      const op = this.randChoice(['\\ge', '\\le', '>', '<']);
      const I = this.randChoice([ivs[0], ivs[1]]);
      const cmp = { '\\ge': (x, y) => x >= y - 1e-12, '\\le': (x, y) => x <= y + 1e-12, '>': (x, y) => x > y + 1e-12, '<': (x, y) => x < y - 1e-12 };
      const anti = { '\\ge': '<', '\\le': '>', '>': '\\le', '<': '\\ge' };
      const flipS = { '\\ge': '>', '\\le': '<', '>': '\\ge', '<': '\\le' };
      const S = (f2, w, o, J = I) => `$${this._TA9_ineq((x) => cmp[o](f2(x), w), (x) => f2(x) - w, J)}$`;
      const ans = S(fn, v, op);
      return this.makeMcq(T, 4, `Inéquation trigonométrique`, 'Résoudre une inéquation $\\cos(x) \\ge a$ ou $\\sin(x) \\le a$ sur un intervalle',
        `Résoudre dans l'intervalle $I = ${I.tex}$ l'inéquation $\\${isSin ? 'sin' : 'cos'}(x) ${op} ${vt}$.`,
        ans,
        [S(fn, v, anti[op]), S(fn, -v, op), S(isSin ? cos : sin, v, op), S(fn, v, flipS[op]), S(fn, v, op, I === ivs[0] ? ivs[1] : ivs[0])],
        `Résous d'abord l'équation $\\${isSin ? 'sin' : 'cos'}(x) = ${vt}$ dans $I$.`,
        `Sur le cercle trigonométrique, repère les points ${isSin ? 'dont l\'ordonnée' : 'dont l\'abscisse'} est ${{ '\\ge': 'supérieure ou égale', '\\le': 'inférieure ou égale', '>': 'strictement supérieure', '<': 'strictement inférieure' }[op]} à $${vt}$.`,
        `Les solutions de $\\${isSin ? 'sin' : 'cos'}(x) = ${vt}$ dans $I$ sont les bornes des intervalles cherchés : $${this._TA9_set(this._TA9_solve(fn, v, I))}$. En lisant le cercle trigonométrique (ou la courbe de $\\${isSin ? 'sin' : 'cos'}$ sur $I$), on obtient ${ans}${/^\$S = [\]\[]/.test(ans) && /[<>]/.test(op) ? ' (bornes exclues car l\'inégalité est stricte)' : ''}.`);
    }
    const [ct, c] = this.randChoice([['', 1], ['\\sqrt{2}', Math.SQRT2], ['\\sqrt{3}', Math.sqrt(3)]]);
    const kind = this.randInt(0, 3);
    const half = { 1: '\\frac{1}{2}', [Math.SQRT2]: '\\frac{\\sqrt{2}}{2}', [Math.sqrt(3)]: '\\frac{\\sqrt{3}}{2}' }[c];
    // f(x) = c x ± 2 sin/cos ; f'(x) = c ± 2 (cos/-sin)
    const defs = [
      { f: `${ct}x - 2\\sin(x)`, d: `${ct || 1} - 2\\cos(x)`, g: (x) => c - 2 * cos(x), eq: `\\cos(x) \\le ${half}` },
      { f: `${ct}x + 2\\sin(x)`, d: `${ct || 1} + 2\\cos(x)`, g: (x) => c + 2 * cos(x), eq: `\\cos(x) \\ge -${half}` },
      { f: `${ct}x + 2\\cos(x)`, d: `${ct || 1} - 2\\sin(x)`, g: (x) => c - 2 * sin(x), eq: `\\sin(x) \\le ${half}` },
      { f: `${ct}x - 2\\cos(x)`, d: `${ct || 1} + 2\\sin(x)`, g: (x) => c + 2 * sin(x), eq: `\\sin(x) \\ge -${half}` }
    ];
    const D = defs[kind];
    const I = this.randChoice([ivs[6], ivs[1]]);
    const S = (g, J = I) => `$${this._TA9_ineq((x) => g(x) >= -1e-12, g, J)}$`;
    return this.makeMcq(T, 4, 'Signe de la dérivée et variations', 'Étudier le signe d\'une dérivée trigonométrique',
      `Soit $f(x) = ${D.f}$ sur $I = ${I.tex}$. Déterminer l'ensemble $S$ des réels $x$ de $I$ tels que $f'(x) \\ge 0$ (ce qui donne les intervalles sur lesquels $f$ est croissante).`,
      S(D.g),
      [S((x) => -D.g(x)), S(defs[kind ^ 1].g), S(defs[kind ^ 2].g), S(defs[kind ^ 3].g)],
      'Dérive : $\\sin\' = \\cos$ et $\\cos\' = -\\sin$.',
      `$f'(x) = ${D.d}$, et $f'(x) \\ge 0 \\iff ${D.eq}$.`,
      `$f'(x) = ${D.d}$. Or $f'(x) \\ge 0 \\iff ${D.eq}$. En lisant le cercle trigonométrique sur $I = ${I.tex}$, on obtient ${S(D.g)}.`);
  },

  // ---- lyTGSX ----
  // =========================================================================
  // Outils communs TG / TS / TX
  // =========================================================================
  _TGSX_vec(v) {
    return `(${v.join(' ; ')})`;
  },

  _TGSX_dot(u, v) {
    return u.reduce((s, x, i) => s + x * v[i], 0);
  },

  _TGSX_cross(u, v) {
    return [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]];
  },

  _TGSX_colin(u, v) {
    return this._TGSX_cross(u, v).every((x) => x === 0);
  },

  _TGSX_randVec(min = -3, max = 3) {
    let v;
    do { v = [this.randInt(min, max), this.randInt(min, max), this.randInt(min, max)]; } while (v.every((x) => x === 0));
    return v;
  },

  /** Racine simplifiée : 50 -> "5\\sqrt{2}", 16 -> "4" */
  _TGSX_sqrt(n) {
    if (n === 0) return '0';
    let k = 1; let m = n;
    for (let d = 2; d * d <= m; d++) { while (m % (d * d) === 0) { m /= d * d; k *= d; } }
    if (m === 1) return String(k);
    return (k === 1 ? '' : k) + `\\sqrt{${m}}`;
  },

  /** Complexe a + bi bien formaté (a, b entiers ou chaînes LaTeX) */
  _TGSX_cplx(a, b) {
    return this.poly([[a, ''], [b, 'i']]);
  },

  /** Angle k*pi/m réduit dans ]-pi ; pi] -> chaîne LaTeX */
  _TGSX_angle(k, m) {
    const g = this.gcd(k, m); k /= g; m /= g;
    if (m < 0) { k = -k; m = -m; }
    k = ((k % (2 * m)) + 2 * m) % (2 * m);
    if (k > m) k -= 2 * m;
    const g2 = this.gcd(k, m); k /= g2; m /= g2;
    if (k === 0) return '0';
    if (m === 1) return k === 1 ? '\\pi' : '-\\pi';
    const ak = Math.abs(k);
    return (k < 0 ? '-' : '') + `\\frac{${ak === 1 ? '' : ak}\\pi}{${m}}`;
  },

  _TGSX_mat(M) {
    return `\\begin{pmatrix} ${M.map((r) => r.join(' & ')).join(' \\\\ ')} \\end{pmatrix}`;
  },

  _TGSX_cases(P, u, v = 't') {
    return `\\begin{cases} x = ${this.poly([[P[0], ''], [u[0], v]])} \\\\ y = ${this.poly([[P[1], ''], [u[1], v]])} \\\\ z = ${this.poly([[P[2], ''], [u[2], v]])} \\end{cases}`;
  },

  _TGSX_binom(n, k) {
    let r = 1;
    for (let i = 1; i <= k; i++) r = r * (n - k + i) / i;
    return Math.round(r);
  },

  _TGSX_modpow(a, e, n) {
    let r = 1; a = ((a % n) + n) % n;
    for (let i = 0; i < e; i++) r = (r * a) % n;
    return r;
  },

  /** Somme de produits "a \\times b + c \\times d" en omettant les produits nuls ; le signe du 1er facteur est fusionné */
  _TGSX_sp(pairs) {
    let out = '';
    for (const [x, y] of pairs) {
      if (x === 0 || y === 0) continue;
      const t = `${Math.abs(x)} \\times ${this.paren(y)}`;
      out += out ? (x < 0 ? ' - ' : ' + ') + t : (x < 0 ? '-' : '') + t;
    }
    return out || '0';
  },

  /** "x - x0" sans « - 0 » */
  _TGSX_minus(v, x0) {
    return x0 === 0 ? v : `${v} - ${this.paren(x0)}`;
  },

  /** Division euclidienne a = b × q + r sans « + 0 » */
  _TGSX_eucl(a, b, q, r) {
    return `${a} = ${b} \\times ${this.paren(q)}${r ? ' + ' + r : ''}`;
  },

  /** Retire les options entières « nues » quand la réponse n'est pas un entier */
  _TGSX_noInt(arr) {
    return arr.filter((x) => !/^\$-?\d+\$$/.test(x));
  },

  _TGSX_egcd(a, b) {
    if (b === 0) return [a, 1, 0];
    const [g, x, y] = this._TGSX_egcd(b, a % b);
    return [g, y, x - Math.floor(a / b) * y];
  },

  // =========================================================================
  // TG1 : Vecteurs, droites et plans dans l'espace
  // =========================================================================
  gen_TG1(tier) {
    const V = (v) => this._TGSX_vec(v);
    if (tier === 1) {
      const A = [this.randInt(-4, 4), this.randInt(-4, 4), this.randInt(-4, 4)];
      let u;
      do { u = this._TGSX_randVec(-4, 4); } while (u.filter((x) => x !== 0).length < 2);
      const onLine = (P) => this._TGSX_colin([P[0] - A[0], P[1] - A[1], P[2] - A[2]], u);
      const fam = this.randInt(1, 3);
      if (fam === 1) {
        const ans = `$${this._TGSX_cases(A, u)}$`;
        const cands = [];
        if (!(this._TGSX_colin(A, u) && onLine(u))) cands.push(`$${this._TGSX_cases(u, A)}$`);
        const i = u.findIndex((x) => x !== 0);
        const u2 = [...u]; u2[i] = -u2[i];
        if (!this._TGSX_colin(u2, u)) cands.push(`$${this._TGSX_cases(A, u2)}$`);
        const P3 = [A[1], A[0], A[2]];
        if (!onLine(P3)) cands.push(`$${this._TGSX_cases(P3, u)}$`);
        const P4 = [-A[0], -A[1], -A[2]];
        if (!onLine(P4)) cands.push(`$${this._TGSX_cases(P4, u)}$`);
        const u5 = [u[1], u[0], u[2]];
        if (!this._TGSX_colin(u5, u)) cands.push(`$${this._TGSX_cases(A, u5)}$`);
        cands.push(`$${this.poly([[u[0], 'x'], [u[1], 'y'], [u[2], 'z']])} = 0$`);
        return this.makeMcq('TG1', 1, 'Représentation paramétrique d\'une droite de l\'espace',
          "Écrire une représentation paramétrique à partir d'un point et d'un vecteur directeur",
          `Dans un repère de l'espace, on considère la droite $D$ passant par $A${V(A)}$ et de vecteur directeur $\\vec{u}${V(u)}$. Laquelle de ces écritures est une représentation paramétrique de $D$ (avec $t \\in \\mathbb{R}$) ?`,
          ans, cands,
          "$M(x ; y ; z) \\in D$ si et seulement s'il existe un réel $t$ tel que $\\vec{AM} = t\\vec{u}$.",
          "Les termes constants sont les coordonnées de $A$, les coefficients de $t$ celles de $\\vec{u}$.",
          `$\\vec{AM} = t\\vec{u}$ donne $x - x_A = t x_u$, etc. D'où ${ans} avec $t \\in \\mathbb{R}$.`
        );
      }
      if (fam === 2) {
        const t0 = this.randChoice([-3, -2, -1, 2, 3]);
        const P = A.map((x, i) => x + t0 * u[i]);
        const cands = [
          V(A.map((x, i) => x - t0 * u[i])),
          V(u.map((x, i) => x + t0 * A[i])),
          V(A.map((x, i) => x + (t0 + 1) * u[i])),
          V(A.map((x, i) => t0 * x + u[i]))
        ].map((s) => `$M${s}$`);
        return this.makeMcq('TG1', 1, 'Point d\'une droite de paramètre donné',
          "Calculer les coordonnées d'un point à partir d'une représentation paramétrique",
          `La droite $D$ admet pour représentation paramétrique $${this._TGSX_cases(A, u)}$, $t \\in \\mathbb{R}$. Quelles sont les coordonnées du point $M$ de $D$ de paramètre $t = ${t0}$ ?`,
          `$M${V(P)}$`, cands,
          "Remplace $t$ par sa valeur dans chacune des trois équations.",
          `Calcule par exemple $y = ${this.poly([[A[1], ''], [u[1], 't']])}$ pour $t = ${t0}$.`,
          `Avec $t = ${t0}$ : ` + ['x', 'y', 'z'].map((c, i) => (u[i] === 0 ? `$${c} = ${P[i]}$` : `$${c} = ${(A[i] === 0 ? '' : A[i] + ' + ') + this.paren(u[i]) + ' \\times ' + this.paren(t0)} = ${P[i]}$`)).join(', ') + `. Donc $M${V(P)}$.`
        );
      }
      // fam 3 : vecteur AB et milieu
      const B = [this.randInt(-5, 5), this.randInt(-5, 5), this.randInt(-5, 5)];
      if (B.every((x, i) => x === A[i])) B[0] += 1;
      const AB = B.map((x, i) => x - A[i]);
      return this.makeMcq('TG1', 1, 'Coordonnées d\'un vecteur de l\'espace',
        "Calculer $\\vec{AB}(x_B - x_A ; y_B - y_A ; z_B - z_A)$",
        `Dans un repère de l'espace, on donne $A${V(A)}$ et $B${V(B)}$. Quelles sont les coordonnées du vecteur $\\vec{AB}$ ?`,
        `$\\vec{AB}${V(AB)}$`,
        [`$\\vec{AB}${V(AB.map((x) => -x))}$`, `$\\vec{AB}${V(A.map((x, i) => x + B[i]))}$`, `$\\vec{AB}${V([AB[0], AB[1], -AB[2]])}$`, `$\\vec{AB}${V([AB[1], AB[0], AB[2]])}$`],
        "On soustrait les coordonnées de l'origine $A$ à celles de l'extrémité $B$.",
        "$\\vec{AB}(x_B - x_A ; y_B - y_A ; z_B - z_A)$.",
        `$\\vec{AB}(${[0, 1, 2].map((i) => this._TGSX_minus(String(B[i]), A[i])).join(' ; ')})$, soit $\\vec{AB}${V(AB)}$.`
      );
    }
    if (tier === 2) {
      const r2 = Math.random();
      if (r2 < 0.34) {
        // point défini par une égalité vectorielle AM = k AB
        const [kn, kd] = this.randChoice([[1, 2], [1, 3], [2, 3], [3, 2], [-1, 2], [2, 1], [-1, 1], [3, 4]]);
        const A = [this.randInt(-4, 4), this.randInt(-4, 4), this.randInt(-4, 4)];
        let AB;
        do { AB = [this.randInt(-2, 2) * kd, this.randInt(-2, 2) * kd, this.randInt(-2, 2) * kd]; } while (AB.filter((x) => x !== 0).length < 2);
        const B = A.map((x, i) => x + AB[i]);
        const M = A.map((x, i) => x + kn * AB[i] / kd);
        const kt = kd === 1 ? (kn === 1 ? '' : kn === -1 ? '-' : String(kn)) : this.frac(kn, kd);
        const Ms = (P) => `$M${V(P)}$`;
        return this.makeMcq('TG1', 2, 'Point défini par une égalité vectorielle',
          'Traduire une égalité vectorielle en coordonnées',
          `Dans un repère de l'espace, on donne $A${V(A)}$ et $B${V(B)}$. Déterminer les coordonnées du point $M$ tel que $\\vec{AM} = ${kt}\\vec{AB}$.`,
          Ms(M),
          [B.map((x, i) => x + kn * AB[i] / kd), A.map((x, i) => kn * AB[i] / kd + 0 * x), A.map((x, i) => x - kn * AB[i] / kd), B.map((x, i) => x - kn * AB[i] / kd)]
            .filter((P) => P.some((x, i) => x !== M[i])).map(Ms),
          'Calcule d\'abord les coordonnées de $\\vec{AB}$.',
          `$\\vec{AM} = ${kt}\\vec{AB}$ s'écrit $x_M - x_A = ${kt === '-' ? '-' : kt + ' \\times '}(x_B - x_A)$, et de même pour $y$ et $z$.`,
          `$\\vec{AB}${V(AB)}$, donc $\\vec{AM}${V(AB.map((x) => kn * x / kd))}$ et $M = A + \\vec{AM}$ : $M${V(M)}$.`
        );
      }
      if (r2 < 0.67) {
        // paramètre de colinéarité
        let u;
        do { u = this._TGSX_randVec(-4, 4); } while (u.some((x) => x === 0));
        const k = this.randChoice([-3, -2, 2, 3]);
        const pos = this.randInt(0, 2);
        const v = u.map((x) => k * x);
        const m = v[pos];
        const vs = v.map((x, i) => (i === pos ? 'm' : String(x)));
        return this.makeMcq('TG1', 2, 'Vecteurs colinéaires de l\'espace',
          "Déterminer un paramètre pour que deux vecteurs soient colinéaires",
          `On donne $\\vec{u}${V(u)}$ et $\\vec{v}(${vs.join(' ; ')})$. Pour quelle valeur du réel $m$ les vecteurs $\\vec{u}$ et $\\vec{v}$ sont-ils colinéaires ?`,
          `$m = ${m}$`,
          [`$m = ${u[pos]}$`, `$m = ${-m}$`, `$m = ${m + k}$`, `$m = ${k}$`],
          "Deux vecteurs sont colinéaires s'il existe un réel $k$ tel que $\\vec{v} = k\\vec{u}$.",
          "Détermine $k$ grâce aux coordonnées connues, puis déduis $m$.",
          `Les coordonnées connues donnent $k = ${k}$ (par exemple $${v[(pos + 1) % 3]} = ${k} \\times ${this.paren(u[(pos + 1) % 3])}$). Il faut donc $m = ${k} \\times ${this.paren(u[pos])} = ${m}$.`
        );
      }
      // alignement de trois points
      const A = [this.randInt(-3, 3), this.randInt(-3, 3), this.randInt(-3, 3)];
      let AB;
      do { AB = this._TGSX_randVec(-3, 3); } while (AB.filter((x) => x !== 0).length < 2);
      const B = A.map((x, i) => x + AB[i]);
      const aligned = this.randInt(0, 1) === 1;
      const k = this.randChoice([-2, -1, 2, 3]);
      let AC = AB.map((x) => k * x);
      if (!aligned) {
        const i = this.randInt(0, 2);
        AC = [...AC]; AC[i] += this.randChoice([-1, 1]);
        if (this._TGSX_colin(AC, AB)) AC[(i + 1) % 3] += 1;
      }
      const C = A.map((x, i) => x + AC[i]);
      const no = 'Non, les vecteurs $\\vec{AB}$ et $\\vec{AC}$ ne sont pas colinéaires';
      const yes = (kk) => `Oui, car $\\vec{AC} = ${this.coefStr(kk, '\\vec{AB}')}$`;
      const ans = aligned ? yes(k) : no;
      const others = [-2, -1, 2, 3, -3].filter((x) => !aligned || x !== k).map(yes);
      if (aligned) others.unshift(no);
      return this.makeMcq('TG1', 2, 'Alignement de trois points de l\'espace',
        "Tester la colinéarité de $\\vec{AB}$ et $\\vec{AC}$",
        `On donne $A${V(A)}$, $B${V(B)}$ et $C${V(C)}$. Les points $A$, $B$ et $C$ sont-ils alignés ?`,
        ans, others.slice(0, 4),
        "Calcule les coordonnées de $\\vec{AB}$ et de $\\vec{AC}$.",
        "Cherche un réel $k$ tel que $\\vec{AC} = k\\vec{AB}$ pour les trois coordonnées à la fois.",
        `$\\vec{AB}${V(AB)}$ et $\\vec{AC}${V(AC)}$. ` + (aligned
          ? `On constate que $\\vec{AC} = ${this.coefStr(k, '\\vec{AB}')}$ : les vecteurs sont colinéaires et les points $A$, $B$, $C$ sont alignés.`
          : 'Aucun réel $k$ ne vérifie $\\vec{AC} = k\\vec{AB}$ pour les trois coordonnées : les points ne sont pas alignés.')
      );
    }
    if (tier === 3) {
      if (Math.random() < 0.45) {
        // intersection d'une droite et d'un plan de coordonnées
        const i = this.randInt(0, 2);
        const names = ['(yOz)', '(xOz)', '(xOy)']; const vn = ['x', 'y', 'z'];
        let u;
        do { u = this._TGSX_randVec(-3, 3); } while (u[i] === 0 || u.filter((x) => x !== 0).length < 2);
        const t0 = this.randNonZero(-3, 3);
        const A = [this.randInt(-4, 4), this.randInt(-4, 4), this.randInt(-4, 4)];
        A[i] = -t0 * u[i];
        const P = A.map((x, j) => x + t0 * u[j]);
        const Is = (Q) => `$I${V(Q)}$`;
        const ds = [A.map((x, j) => x - t0 * u[j]), A.map((x, j) => (j === i ? 0 : x)), A.map((x, j) => x + (t0 + 1) * u[j]), u.map((x, j) => x + t0 * A[j])]
          .filter((Q) => Q.some((x, j) => x !== P[j]));
        return this.makeMcq('TG1', 3, 'Intersection d\'une droite et d\'un plan de coordonnées',
          'Utiliser une représentation paramétrique pour trouver un point d\'intersection',
          `La droite $D$ admet pour représentation paramétrique $${this._TGSX_cases(A, u)}$, $t \\in \\mathbb{R}$. Déterminer les coordonnées du point d'intersection $I$ de $D$ avec le plan ${names[i]} d'équation $${vn[i]} = 0$.`,
          Is(P), ds.map(Is),
          `Un point de $D$ appartient au plan ${names[i]} lorsque sa coordonnée $${vn[i]}$ est nulle.`,
          `Résous $${this.poly([[A[i], ''], [u[i], 't']])} = 0$ pour trouver le paramètre $t$.`,
          `$${this.poly([[A[i], ''], [u[i], 't']])} = 0 \\iff t = ${t0}$. En remplaçant $t$ par $${t0}$ dans la représentation paramétrique, on obtient $I${V(P)}$.`
        );
      }
      let u; let v;
      do { u = this._TGSX_randVec(-2, 3); v = this._TGSX_randVec(-2, 3); } while (this._TGSX_colin(u, v));
      const al = this.randChoice([-3, -2, -1, 1, 2, 3]);
      let be;
      do { be = this.randChoice([-3, -2, -1, 1, 2, 3]); } while (be === al);
      const w = u.map((x, i) => al * x + be * v[i]);
      const comb = (a, b) => `$\\vec{w} = ${this.poly([[a, '\\vec{u}'], [b, '\\vec{v}']])}$`;
      return this._Tx(this.makeMcq('TG1', 3, 'Décomposition d\'un vecteur : coplanarité',
        "Exprimer un vecteur comme combinaison linéaire de deux autres",
        `On donne $\\vec{u}${V(u)}$, $\\vec{v}${V(v)}$ et $\\vec{w}${V(w)}$. Les vecteurs $\\vec{u}$ et $\\vec{v}$ ne sont pas colinéaires. Trouver les réels $a$ et $b$ tels que $\\vec{w} = a\\vec{u} + b\\vec{v}$ (ce qui prouve que $\\vec{u}$, $\\vec{v}$, $\\vec{w}$ sont coplanaires).`,
        comb(al, be),
        [comb(be, al), comb(-al, be), comb(al, -be), comb(al + 1, be), comb(al, be - 1)],
        "Écris le système de trois équations à deux inconnues $a$ et $b$.",
        "Résous avec deux équations, puis vérifie la troisième.",
        `On cherche $a$, $b$ tels que $${w[0]} = ${this.poly([[u[0], 'a'], [v[0], 'b']])}$, $${w[1]} = ${this.poly([[u[1], 'a'], [v[1], 'b']])}$ et $${w[2]} = ${this.poly([[u[2], 'a'], [v[2], 'b']])}$. On trouve $a = ${al}$ et $b = ${be}$, qui vérifient les trois équations : ${comb(al, be)}. Les trois vecteurs sont donc coplanaires.`
      ), [al, be], 'Saisir le couple (a ; b).');
    }
    // tier 4 : positions relatives de deux droites ; coplanarité avec paramètre
    if (Math.random() < 0.4) {
      let u; let v; let i; let det;
      do {
        u = this._TGSX_randVec(-3, 3); v = this._TGSX_randVec(-3, 3); i = this.randInt(0, 2);
        const [j, k] = [0, 1, 2].filter((x) => x !== i);
        det = u[j] * v[k] - u[k] * v[j];
      } while (this._TGSX_colin(u, v) || det === 0);
      const al = this.randNonZero(-3, 3); const be = this.randNonZero(-3, 3);
      const w = u.map((x, j) => al * x + be * v[j]);
      const ws = w.map((x, j) => (j === i ? 'm' : String(x)));
      const [j, k] = [0, 1, 2].filter((x) => x !== i);
      const c = ['x', 'y', 'z'];
      return this.makeMcq('TG1', 4, 'Coplanarité de trois vecteurs : paramètre',
        'Déterminer un paramètre pour que trois vecteurs soient coplanaires',
        `On donne $\\vec{u}${V(u)}$, $\\vec{v}${V(v)}$ et $\\vec{w}(${ws.join(' ; ')})$, où $m$ est un réel. Les vecteurs $\\vec{u}$ et $\\vec{v}$ ne sont pas colinéaires. Pour quelle valeur de $m$ les vecteurs $\\vec{u}$, $\\vec{v}$ et $\\vec{w}$ sont-ils coplanaires ?`,
        `$m = ${w[i]}$`,
        [al * u[i] - be * v[i], be * u[i] + al * v[i], -w[i], w[i] + 1].filter((x, n, arr) => x !== w[i] && arr.indexOf(x) === n).map((x) => `$m = ${x}$`),
        'Les trois vecteurs sont coplanaires si et seulement s\'il existe des réels $a$ et $b$ tels que $\\vec{w} = a\\vec{u} + b\\vec{v}$.',
        `Détermine $a$ et $b$ avec les coordonnées $${c[j]}$ et $${c[k]}$, puis calcule $m$.`,
        `Le système $${w[j]} = ${this.poly([[u[j], 'a'], [v[j], 'b']])}$, $${w[k]} = ${this.poly([[u[k], 'a'], [v[k], 'b']])}$ a pour unique solution $a = ${al}$, $b = ${be}$. La coordonnée $${c[i]}$ impose alors $m = ${al} \\times ${this.paren(u[i])} + ${this.paren(be)} \\times ${this.paren(v[i])} = ${w[i]}$.`
      );
    }
    let u;
    do { u = this._TGSX_randVec(-2, 3); } while (u.filter((x) => x !== 0).length < 2);
    const kind = this.randChoice(['sec', 'sec', 'par', 'gau']);
    const P = [this.randInt(-3, 3), this.randInt(-3, 3), this.randInt(-3, 3)];
    let v; let A; let B;
    const t0 = this.randChoice([-2, -1, 1, 2]);
    const s0 = this.randChoice([-2, -1, 1, 2]);
    if (kind === 'par') {
      const kp = this.randChoice([-1, 2, -2]);
      v = u.map((x) => kp * x);
      A = P;
      let w;
      do { w = this._TGSX_randVec(-2, 2); } while (this._TGSX_colin(w, u));
      B = A.map((x, i) => x + w[i]);
    } else {
      do { v = this._TGSX_randVec(-2, 3); } while (this._TGSX_colin(u, v) || v.filter((x) => x !== 0).length < 2);
      A = P.map((x, i) => x - t0 * u[i]);
      if (kind === 'sec') {
        B = P.map((x, i) => x - s0 * v[i]);
      } else {
        let w;
        do { w = this._TGSX_randVec(-2, 2); } while (this._TGSX_dot(this._TGSX_cross(u, v), w) === 0);
        B = P.map((x, i) => x - s0 * v[i] + w[i]);
      }
    }
    const SEC = (Q) => `Elles sont sécantes en $I${V(Q)}$`;
    const PAR = 'Elles sont strictement parallèles';
    const GAU = 'Elles sont non coplanaires';
    const CONF = 'Elles sont confondues';
    const ans = kind === 'sec' ? SEC(P) : kind === 'par' ? PAR : GAU;
    const wrongP = P.map((x, i) => x + (i === 0 ? 1 : 0));
    const dists = [SEC(kind === 'sec' ? wrongP : A), PAR, GAU, CONF].filter((d) => d !== ans);
    let sol;
    if (kind === 'par') {
      sol = `Les vecteurs directeurs $${this._TGSX_vec(u)}$ et $${this._TGSX_vec(v)}$ sont colinéaires : les droites sont parallèles. Le point $B${V(B)}$ de $D_2$ n'appartient pas à $D_1$ (le système $\\vec{AB} = t\\vec{u}$ n'a pas de solution), donc elles sont strictement parallèles.`;
    } else if (kind === 'sec') {
      sol = `Les vecteurs directeurs ne sont pas colinéaires. On résout le système obtenu en égalant les coordonnées : on trouve $t = ${t0}$ et $s = ${s0}$, qui vérifient les trois équations. Les droites sont sécantes en $I${V(P)}$.`;
    } else {
      sol = 'Les vecteurs directeurs ne sont pas colinéaires, donc les droites ne sont pas parallèles. En égalant les coordonnées, les deux premières équations donnent un unique couple $(t ; s)$ qui ne vérifie pas la troisième : les droites n\'ont aucun point commun. Elles ne sont ni parallèles ni sécantes : elles sont non coplanaires.';
    }
    return this.makeMcq('TG1', 4, 'Position relative de deux droites de l\'espace',
      "Étudier parallélisme et intersection de deux droites données par des représentations paramétriques",
      `On considère les droites $D_1 : ${this._TGSX_cases(A, u, 't')}$ ($t \\in \\mathbb{R}$) et $D_2 : ${this._TGSX_cases(B, v, 's')}$ ($s \\in \\mathbb{R}$). Quelle est leur position relative ?`,
      ans, dists,
      "Compare d'abord les vecteurs directeurs : sont-ils colinéaires ?",
      "S'ils ne le sont pas, résous le système $x_1(t) = x_2(s)$, $y_1(t) = y_2(s)$, $z_1(t) = z_2(s)$.",
      sol
    );
  },

  // =========================================================================
  // TG2 : Produit scalaire dans l'espace et plans
  // =========================================================================
  gen_TG2(tier) {
    const V = (v) => this._TGSX_vec(v);
    const planEq = (n, d) => `${this.poly([[n[0], 'x'], [n[1], 'y'], [n[2], 'z'], [d, '']])} = 0`;
    if (tier === 1) {
      let n;
      do { n = this._TGSX_randVec(-5, 5); } while (n.filter((x) => x !== 0).length < 2);
      const d = this.randInt(-9, 9);
      const r1 = Math.random();
      if (r1 < 0.33) {
        // coordonnée manquante d'un point du plan
        const i = [0, 1, 2].filter((j) => n[j] !== 0)[this.randInt(0, n.filter((x) => x !== 0).length - 1)];
        const P = [this.randInt(-4, 4), this.randInt(-4, 4), this.randInt(-4, 4)];
        P[i] = 0;
        const rest = this._TGSX_dot(n, P) + d;
        const m = this.frac(-rest, n[i]);
        const Ps = P.map((x, j) => (j === i ? 'm' : String(x)));
        const vn = ['x', 'y', 'z'];
        return this.makeMcq('TG2', 1, 'Coordonnée manquante d\'un point d\'un plan',
          'Utiliser une équation cartésienne pour compléter les coordonnées d\'un point',
          `Le point $M(${Ps.join(' ; ')})$ appartient au plan $\\mathcal{P}$ d'équation $${planEq(n, d)}$. Déterminer $m$.`,
          `$m = ${m}$`,
          [this.frac(rest, n[i]), this.frac(-rest + 2 * d, n[i]), String(-rest), this.frac(-rest, n[i]) === String(-rest) ? String(rest) : this.frac(-rest - 1, n[i])].filter((x, j, arr) => x !== m && arr.indexOf(x) === j).map((x) => `$m = ${x}$`),
          'Un point appartient au plan si et seulement si ses coordonnées vérifient l\'équation.',
          `Remplace $x$, $y$, $z$ par les coordonnées de $M$ (avec $${vn[i]} = m$) et résous l'équation d'inconnue $m$.`,
          `En remplaçant : $${this.poly([[n[i], 'm'], [rest, '']])} = 0$, donc $m = ${m}$.`
        );
      }
      if (r1 < 0.66) {
        const cands = [[n[1], n[0], n[2]], [n[0], n[1], d], [n[0] + 1, n[1], n[2]], [-n[0], n[1], n[2]], [n[2], n[1], n[0]]]
          .filter((c) => !c.every((x) => x === 0) && !this._TGSX_colin(c, n)).map((c) => `$\\vec{n}${V(c)}$`);
        return this.makeMcq('TG2', 1, 'Vecteur normal à un plan',
          "Lire un vecteur normal sur une équation cartésienne",
          `Quel vecteur normal au plan $\\mathcal{P}$ d'équation $${planEq(n, d)}$ lit-on directement sur cette équation ?`,
          `$\\vec{n}${V(n)}$`, cands,
          "Un plan d'équation $ax + by + cz + d = 0$ admet $\\vec{n}(a ; b ; c)$ comme vecteur normal.",
          "Lis les coefficients de $x$, $y$ et $z$ (un coefficient absent vaut $0$).",
          `Les coefficients de $x$, $y$, $z$ sont $${n[0]}$, $${n[1]}$ et $${n[2]}$ : $\\vec{n}${V(n)}$ est normal à $\\mathcal{P}$.`
        );
      }
      // point appartenant au plan
      const val = (P) => this._TGSX_dot(n, P) + d;
      let P;
      let guard = 0;
      do {
        P = [this.randInt(-4, 4), this.randInt(-4, 4), this.randInt(-4, 4)];
        const i = n.findIndex((x) => Math.abs(x) === 1);
        if (i >= 0) { P[i] = 0; P[i] = -(this._TGSX_dot(n, P) + d) * n[i]; }
        guard++;
      } while (val(P) !== 0 && guard < 50);
      if (val(P) !== 0) {
        // vecteur normal sans coefficient ±1 : on force n[0] = 1
        n[0] = 1; P[0] = 0; P[0] = -(this._TGSX_dot(n, P) + d);
      }
      const cands = [];
      for (let k = 0; k < 80 && cands.length < 4; k++) {
        const Q = P.map((x) => x + this.randInt(-2, 2));
        if (val(Q) !== 0) cands.push(`$${V(Q).replace(/^/, 'M')}$`);
      }
      return this.makeMcq('TG2', 1, 'Point appartenant à un plan',
        "Vérifier qu'un point appartient à un plan par substitution",
        `Lequel de ces points appartient au plan $\\mathcal{P}$ d'équation $${planEq(n, d)}$ ?`,
        `$M${V(P)}$`, cands,
        "Remplace $x$, $y$, $z$ par les coordonnées du point.",
        "Le point appartient au plan si et seulement si on obtient $0$.",
        `$${this._TGSX_sp([[n[0], P[0]], [n[1], P[1]], [n[2], P[2]]])}${d ? ' ' + this.formatSign(d) : ''} = 0$ : le point $M${V(P)}$ appartient à $\\mathcal{P}$.`
      );
    }
    if (tier === 2) {
      const fam = this.randInt(1, 3);
      const u = this._TGSX_randVec(-4, 4);
      if (fam === 1) {
        const v = this._TGSX_randVec(-4, 4);
        const dot = this._TGSX_dot(u, v);
        return this.makeMcq('TG2', 2, 'Produit scalaire dans un repère orthonormé',
          "Calculer $\\vec{u} \\cdot \\vec{v} = xx' + yy' + zz'$",
          `Dans un repère orthonormé, calculer $\\vec{u} \\cdot \\vec{v}$ pour $\\vec{u}${V(u)}$ et $\\vec{v}${V(v)}$.`,
          `$\\vec{u} \\cdot \\vec{v} = ${dot}$`,
          [`$\\vec{u} \\cdot \\vec{v} = ${-dot}$`, `$\\vec{u} \\cdot \\vec{v} = ${u[0] * v[0] + u[1] * v[1] - u[2] * v[2]}$`, `$\\vec{u} \\cdot \\vec{v} = ${u[0] + v[0] + u[1] + v[1] + u[2] + v[2]}$`, `$\\vec{u} \\cdot \\vec{v} = ${dot + 2}$`, `$\\vec{u} \\cdot \\vec{v} = ${dot - 3}$`],
          "Formule : $\\vec{u} \\cdot \\vec{v} = xx' + yy' + zz'$.",
          "Attention aux signes des produits.",
          `$\\vec{u} \\cdot \\vec{v} = ${this._TGSX_sp([[u[0], v[0]], [u[1], v[1]], [u[2], v[2]]])} = ${dot}$.`
        );
      }
      if (fam === 2) {
        const c = this.randChoice([-2, -1, 1, 2]);
        const uu = [u[0] || this.randNonZero(-4, 4), u[1], c];
        let x; let y;
        do { x = this.randInt(-4, 4); y = this.randInt(-4, 4); } while (uu[0] * x + uu[1] * y === 0);
        const s = uu[0] * x + uu[1] * y;
        const m = this.frac(-s, c);
        return this.makeMcq('TG2', 2, 'Vecteurs orthogonaux',
          "Traduire l'orthogonalité par un produit scalaire nul",
          `Dans un repère orthonormé, on donne $\\vec{u}${V(uu)}$ et $\\vec{v}(${x} ; ${y} ; m)$. Pour quelle valeur de $m$ les vecteurs sont-ils orthogonaux ?`,
          `$m = ${m}$`,
          [`$m = ${this.frac(s, c)}$`, `$m = ${this.frac(-s, -c + (c === 1 ? 2 : 1))}$`, `$m = ${this.frac(-s + 1, c)}$`, `$m = ${s}$`],
          "$\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0$.",
          "Écris le produit scalaire en fonction de $m$ et résous l'équation du premier degré.",
          `$\\vec{u} \\cdot \\vec{v} = ${this._TGSX_sp([[uu[0], x], [uu[1], y]]).replace(/^0$/, '')}${(uu[0] * x || uu[1] * y) ? (c < 0 ? ' - ' : ' + ') + this.coefStr(Math.abs(c), 'm') : this.coefStr(c, 'm')} = ${this.poly([[s, ''], [c, 'm']])}$. Il est nul pour $m = ${m}$.`
        );
      }
      const n2 = u[0] ** 2 + u[1] ** 2 + u[2] ** 2;
      const r = this._TGSX_sqrt(n2);
      return this.makeMcq('TG2', 2, 'Norme d\'un vecteur de l\'espace',
        "Calculer $\\|\\vec{u}\\| = \\sqrt{x^2 + y^2 + z^2}$ en repère orthonormé",
        `Dans un repère orthonormé, calculer la norme du vecteur $\\vec{u}${V(u)}$.`,
        `$\\|\\vec{u}\\| = ${r}$`,
        [`$\\|\\vec{u}\\| = ${n2}$`, `$\\|\\vec{u}\\| = ${this._TGSX_sqrt(Math.abs(u[0] + u[1] + u[2]) || 7)}$`, `$\\|\\vec{u}\\| = ${Math.abs(u[0]) + Math.abs(u[1]) + Math.abs(u[2])}$`, `$\\|\\vec{u}\\| = ${this._TGSX_sqrt(n2 + 1)}$`],
        "$\\|\\vec{u}\\| = \\sqrt{x^2 + y^2 + z^2}$.",
        "Simplifie la racine si possible.",
        `$\\|\\vec{u}\\| = \\sqrt{${u.map((x) => this.paren(x) + '^2').join(' + ')}} = \\sqrt{${n2}}${r === `\\sqrt{${n2}}` ? '' : ' = ' + r}$.`
      );
    }
    if (tier === 3) {
      if (this.randInt(0, 1) === 0) {
        let n;
        do { n = this._TGSX_randVec(-4, 4); } while (n.filter((x) => x !== 0).length < 2);
        let A;
        do { A = [this.randInt(-4, 4), this.randInt(-4, 4), this.randInt(-4, 4)]; } while (this._TGSX_dot(n, A) === 0);
        const d = -this._TGSX_dot(n, A);
        const eq = (dd) => `$${planEq(n, dd)}$`;
        const cands = [eq(-d), eq(d + 1), `$${planEq(A, -this._TGSX_dot(A, n))}$`, `$${planEq(n, 0)}$`, eq(d - 2)]
          .filter((c) => c !== eq(d));
        return this._Tx(this.makeMcq('TG2', 3, 'Équation cartésienne d\'un plan',
          "Déterminer l'équation d'un plan connaissant un point et un vecteur normal",
          `Déterminer une équation cartésienne du plan $\\mathcal{P}$ passant par $A${V(A)}$ et de vecteur normal $\\vec{n}${V(n)}$.`,
          eq(d), cands,
          "Le plan a une équation de la forme $ax + by + cz + d = 0$ où $(a ; b ; c)$ sont les coordonnées de $\\vec{n}$.",
          "Détermine $d$ en écrivant que $A$ appartient au plan.",
          `$\\mathcal{P} : ${this.poly([[n[0], 'x'], [n[1], 'y'], [n[2], 'z']])} + d = 0$. Comme $A \\in \\mathcal{P}$ : $${this._TGSX_dot(n, A)} + d = 0$, donc $d = ${d}$. D'où ${eq(d)}.`
        ), d, `Avec $\\vec{n}$ comme vecteur normal, l'équation s'écrit $${this.poly([[n[0], 'x'], [n[1], 'y'], [n[2], 'z']])} + d = 0$ : saisir $d$.`);
      }
      // position relative de deux plans
      let n1;
      do { n1 = this._TGSX_randVec(-3, 3); } while (n1.filter((x) => x !== 0).length < 2);
      const d1 = this.randInt(-6, 6);
      const kind = this.randChoice(['perp', 'par', 'sec', 'conf']);
      let n2; let d2;
      const k = this.randChoice([-2, 2, 3]);
      if (kind === 'par' || kind === 'conf') {
        n2 = n1.map((x) => k * x);
        d2 = kind === 'conf' ? k * d1 : k * d1 + this.randChoice([-3, -1, 1, 2]);
      } else if (kind === 'perp') {
        let r;
        do { r = this._TGSX_randVec(-2, 2); n2 = this._TGSX_cross(n1, r); } while (n2.every((x) => x === 0));
        const g = n2.reduce((a, b) => this.gcd(a, b), 0);
        n2 = n2.map((x) => x / g);
        d2 = this.randInt(-6, 6);
      } else {
        do { n2 = this._TGSX_randVec(-3, 3); } while (this._TGSX_colin(n1, n2) || this._TGSX_dot(n1, n2) === 0);
        d2 = this.randInt(-6, 6);
      }
      const L = { perp: 'Ils sont perpendiculaires', par: 'Ils sont strictement parallèles', sec: 'Ils sont sécants mais non perpendiculaires', conf: 'Ils sont confondus' };
      const dot = this._TGSX_dot(n1, n2);
      const sol = (kind === 'par' || kind === 'conf')
        ? `$\\vec{n_2} = ${k}\\vec{n_1}$ : les vecteurs normaux sont colinéaires, donc les plans sont parallèles. ` + (kind === 'conf' ? `De plus, l'équation de $\\mathcal{P}_2$ est celle de $\\mathcal{P}_1$ multipliée par $${k}$ : les plans sont confondus.` : `Mais l'équation de $\\mathcal{P}_2$ n'est pas celle de $\\mathcal{P}_1$ multipliée par $${k}$ (terme constant différent) : ils sont strictement parallèles.`)
        : `Les vecteurs normaux $\\vec{n_1}${V(n1)}$ et $\\vec{n_2}${V(n2)}$ ne sont pas colinéaires : les plans sont sécants. De plus $\\vec{n_1} \\cdot \\vec{n_2} = ${dot}$` + (dot === 0 ? ' : ils sont perpendiculaires.' : ' $\\neq 0$ : ils ne sont pas perpendiculaires.');
      return this.makeMcq('TG2', 3, 'Position relative de deux plans',
        "Comparer les vecteurs normaux de deux plans",
        `On considère les plans $\\mathcal{P}_1 : ${planEq(n1, d1)}$ et $\\mathcal{P}_2 : ${planEq(n2, d2)}$. Quelle est leur position relative ?`,
        L[kind], Object.keys(L).filter((x) => x !== kind).map((x) => L[x]),
        "Lis un vecteur normal de chaque plan.",
        "Vecteurs normaux colinéaires : plans parallèles ; produit scalaire nul : plans perpendiculaires.",
        sol
      );
    }
    // tier 4 : projeté orthogonal d'un point sur un plan
    let n;
    do { n = this._TGSX_randVec(-2, 2); } while (n.filter((x) => x !== 0).length < 2);
    const H = [this.randInt(-3, 3), this.randInt(-3, 3), this.randInt(-3, 3)];
    const t = this.randChoice([-2, -1, 1, 2]);
    const A = H.map((x, i) => x + t * n[i]);
    const d = -this._TGSX_dot(n, H);
    const nn = this._TGSX_dot(n, n);
    if (this.randInt(0, 1) === 0) {
      const Hs = (P) => `$H${V(P)}$`;
      return this.makeMcq('TG2', 4, 'Projeté orthogonal d\'un point sur un plan',
        "Utiliser la droite orthogonale au plan passant par le point",
        `Dans un repère orthonormé, on considère le plan $\\mathcal{P} : ${planEq(n, d)}$ et le point $A${V(A)}$. Déterminer les coordonnées du projeté orthogonal $H$ de $A$ sur $\\mathcal{P}$.`,
        Hs(H),
        [Hs(H.map((x, i) => x - t * n[i])), Hs(A.map((x, i) => x + n[i] * t)), Hs(H.map((x, i) => x + n[i])), Hs(A.map((x, i) => (i === 0 ? x : x - t * n[i])))],
        "$H$ est l'intersection de $\\mathcal{P}$ et de la droite passant par $A$ de vecteur directeur $\\vec{n}$, normal au plan.",
        "Écris $H(x_A + k a ; y_A + k b ; z_A + k c)$ puis injecte dans l'équation du plan pour trouver $k$.",
        `La droite $(AH)$ a pour représentation $${this._TGSX_cases(A, n, 'k')}$. En injectant dans l'équation de $\\mathcal{P}$ : $${this._TGSX_dot(n, A) + d} + ${nn}k = 0$, donc $k = ${-t}$. D'où $H${V(H)}$.`
      );
    }
    const dist = this._TGSX_sqrt(t * t * nn);
    return this.makeMcq('TG2', 4, 'Distance d\'un point à un plan',
      "Calculer la distance $AH$ où $H$ est le projeté orthogonal de $A$",
      `Dans un repère orthonormé, on considère le plan $\\mathcal{P} : ${planEq(n, d)}$ et le point $A${V(A)}$. En déterminant le projeté orthogonal $H$ de $A$ sur $\\mathcal{P}$, calculer la distance $AH$ de $A$ au plan.`,
      `$AH = ${dist}$`,
      [`$AH = ${t * t * nn}$`, `$AH = ${this._TGSX_sqrt(Math.abs(t) === 1 ? 2 * nn : nn)}$`, `$AH = ${this._TGSX_sqrt(t * t * nn + 1)}$`, `$AH = ${Math.abs(t * (Math.abs(n[0]) + Math.abs(n[1]) + Math.abs(n[2])))}$`, `$AH = ${Math.abs(this._TGSX_dot(n, A) + d)}$`],
      "Le projeté $H$ s'obtient avec la droite passant par $A$ dirigée par $\\vec{n}$.",
      "Puis $AH = \\|\\vec{AH}\\|$.",
      `En paramétrant la droite $(AH)$ par $A + k\\vec{n}$ et en injectant dans l'équation du plan, on obtient $k = ${-t}$, d'où $H${V(H)}$ et $\\vec{AH}${V(n.map((x) => -t * x))}$. Ainsi $AH = \\sqrt{${t * t * nn}} = ${dist}$.`
    );
  },

  // =========================================================================
  // TS1 : Schéma de Bernoulli et loi binomiale
  // =========================================================================
  gen_TS1(tier) {
    const P = (x) => this.dec(x);
    if (tier === 1 && Math.random() < 0.35) {
      // reconnaître une loi binomiale : paramètres (n ; p)
      const ctx = this.randChoice([
        [(n) => `On lance ${n} fois un dé équilibré à six faces et on note $X$ le nombre de « 6 » obtenus.`, 1, 6],
        [(n) => `On lance ${n} fois une pièce équilibrée et on note $X$ le nombre de « pile » obtenus.`, 1, 2],
        [(n) => `Une urne contient 3 boules rouges et 7 boules noires. On tire ${n} fois une boule avec remise et on note $X$ le nombre de boules rouges obtenues.`, 3, 10],
        [(n) => `Un QCM comporte ${n} questions indépendantes ayant chacune 4 réponses dont une seule juste. Un candidat répond au hasard ; $X$ est le nombre de bonnes réponses.`, 1, 4],
        [(n) => `Un dé équilibré à six faces est lancé ${n} fois ; $X$ compte le nombre de résultats multiples de 3.`, 1, 3]
      ]);
      const n = this.randInt(5, 20);
      const p = this.frac(ctx[1], ctx[2]);
      const pp = (a, b) => `$\\mathcal{B}\\left(${a} ; ${b}\\right)$`;
      return this._Tx(this.makeMcq('TS1', 1, 'Reconnaître une loi binomiale',
        'Identifier un schéma de Bernoulli et les paramètres de la loi binomiale',
        `${ctx[0](n)} Cette variable aléatoire suit une loi binomiale. Quels sont ses paramètres $n$ et $p$ ?`,
        pp(n, p),
        [pp(n, this.frac(ctx[2] - ctx[1], ctx[2])), pp(p, n), pp(n + 1, p), pp(ctx[2], this.frac(1, n))].filter((x, i, arr) => x !== pp(n, p) && arr.indexOf(x) === i),
        'On répète des épreuves de Bernoulli identiques et indépendantes : $n$ est le nombre de répétitions.',
        '$p$ est la probabilité du succès lors d\'une seule épreuve.',
        `Chaque épreuve n'a que deux issues (succès / échec), on la répète $${n}$ fois de façon identique et indépendante, et $X$ compte les succès. Le succès a pour probabilité $${p}$ à chaque épreuve, donc $X$ suit la loi ${pp(n, p)}.`
      ), [n, this._Tq(ctx[1], ctx[2])], 'Saisir le couple (n ; p), $p$ sous forme de fraction irréductible.');
    }
    if (tier === 1) {
      const n = this.randInt(4, 10);
      const k = this.randInt(2, n - 2);
      const c = this._TGSX_binom(n, k);
      const fact = (m) => { let r = 1; for (let i = 2; i <= m; i++) r *= i; return r; };
      const B = (v) => `$\\binom{${n}}{${k}} = ${v}$`;
      const num = Array.from({ length: k }, (_, i) => n - i).join(' \\times ');
      const den = Array.from({ length: k }, (_, i) => k - i).join(' \\times ');
      const ctx = this.randInt(0, 1) === 0
        ? `Calculer le coefficient binomial $\\binom{${n}}{${k}}$.`
        : `On répète ${n} fois de façon indépendante une épreuve de Bernoulli. Combien de chemins de l'arbre comportent exactement ${k} succès ? (On donnera la valeur de $\\binom{${n}}{${k}}$.)`;
      return this.makeMcq('TS1', 1, 'Coefficients binomiaux',
        "Calculer $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$",
        ctx, B(c),
        [B(fact(n) / fact(n - k)), B(n * k), B(c + n), B(this._TGSX_binom(n, k - 1) === c ? c * 2 : this._TGSX_binom(n, k - 1))],
        "$\\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!}$.",
        `$\\binom{${n}}{${k}} = \\frac{${num}}{${den}}$.`,
        `$\\binom{${n}}{${k}} = \\frac{${num}}{${den}} = ${c}$.`
      );
    }
    if (tier === 2) {
      let n; let k; let p; let val;
      do {
        n = this.randInt(3, 6); k = this.randInt(0, n); p = this.randInt(1, 9) / 10;
        val = this._TGSX_binom(n, k) * p ** k * (1 - p) ** (n - k);
      } while (val < 0.01);
      const fmt = (x) => (this.isDecimal(x, 3) ? `= ${this.dec(x, 3)}` : `\\approx ${this.dec(x, 3)}`);
      const A = (x) => `$P(X = ${k}) ${fmt(x)}$`;
      const c = this._TGSX_binom(n, k);
      const q = 1 - p;
      const cands = [p ** k * q ** (n - k), c * p ** (n - k) * q ** k, c * p ** k, c * q ** (n - k), 1 - val,
        k + 1 <= n ? this._TGSX_binom(n, k + 1) * p ** (k + 1) * q ** (n - k - 1) : null,
        k >= 1 ? this._TGSX_binom(n, k - 1) * p ** (k - 1) * q ** (n - k + 1) : null, p * k / n, val / 2]
        .filter((x) => x !== null && x > 0.0005 && x < 0.9995 && this.dec(x, 3) !== this.dec(val, 3)).map(A);
      return this.makeMcq('TS1', 2, 'Probabilité avec la loi binomiale',
        "Appliquer $P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$",
        `La variable aléatoire $X$ suit la loi binomiale $\\mathcal{B}(${n} ; ${P(p)})$. Calculer $P(X = ${k})$ (valeur exacte, ou arrondie au millième).`,
        A(val), cands,
        "$P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$.",
        `Ici $\\binom{${n}}{${k}} = ${c}$, $p = ${P(p)}$ et $1 - p = ${P(1 - p)}$.`,
        `$P(X = ${k}) = \\binom{${n}}{${k}} \\times ${P(p)}^{${k}} \\times ${P(1 - p)}^{${n - k}} = ${c} \\times ${P(p)}^{${k}} \\times ${P(1 - p)}^{${n - k}} ${fmt(val)}$.`.replace(/\^\{1\}/g, '').replace(/ \\times [0-9{},]+\^\{0\}/g, '')
      );
    }
    if (tier === 3) {
      const n = this.randChoice([10, 12, 15, 20, 24, 25, 30, 40, 50, 60, 75, 80, 100, 120, 150, 200]);
      const p = this.randChoice([0.1, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.75, 0.8, 0.9]);
      const E = n * p; const Va = n * p * (1 - p);
      const ask = this.randChoice(['E', 'V', 'V']);
      if (ask === 'E') {
        return this.makeMcq('TS1', 3, 'Espérance d\'une loi binomiale',
          "Appliquer $E(X) = np$",
          `La variable aléatoire $X$ suit la loi binomiale $\\mathcal{B}(${n} ; ${P(p)})$. Calculer $E(X)$.`,
          `$E(X) = ${P(E)}$`,
          [`$E(X) = ${P(n * (1 - p))}$`, `$E(X) = ${P(Va)}$`, `$E(X) = ${P(E + 1)}$`, `$E(X) = ${P(n * p * p)}$`, `$E(X) = ${P(n / 2)}$`],
          "Pour $X \\sim \\mathcal{B}(n ; p)$, $E(X) = np$.",
          `Calcule $${n} \\times ${P(p)}$.`,
          `$E(X) = np = ${n} \\times ${P(p)} = ${P(E)}$ : sur un grand nombre de répétitions, on obtient en moyenne ${this.decText(E)} succès.`
        );
      }
      return this.makeMcq('TS1', 3, 'Variance d\'une loi binomiale',
        "Appliquer $V(X) = np(1-p)$",
        `La variable aléatoire $X$ suit la loi binomiale $\\mathcal{B}(${n} ; ${P(p)})$. Calculer $V(X)$.`,
        `$V(X) = ${P(Va)}$`,
        [`$V(X) = ${P(E)}$`, `$V(X) = ${P(n * p * p)}$`, `$V(X) = ${P(n * n * p * (1 - p))}$`, `$V(X) = ${P(Va + 1)}$`],
        "Pour $X \\sim \\mathcal{B}(n ; p)$, $V(X) = np(1-p)$.",
        `Calcule $${n} \\times ${P(p)} \\times ${P(1 - p)}$.`,
        `$V(X) = np(1-p) = ${n} \\times ${P(p)} \\times ${P(1 - p)} = ${P(Va)}$ (et $\\sigma(X) = \\sqrt{V(X)}$).`
      );
    }
    // tier 4
    const fam = this.randInt(1, 3);
    if (fam === 1) {
      const p = this.randChoice([0.02, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3]);
      const s = this.randChoice([0.9, 0.95, 0.99]);
      let n = 1;
      while (1 - (1 - p) ** n < s - 1e-12) n++;
      return this.makeMcq('TS1', 4, 'Nombre minimal de répétitions',
        "Résoudre $1 - (1-p)^n \\ge s$ à l'aide du logarithme",
        `On répète de façon indépendante une épreuve dont la probabilité de succès est $${P(p)}$. Quel nombre minimal $n$ de répétitions faut-il pour que la probabilité d'obtenir au moins un succès soit supérieure ou égale à $${P(s)}$ ?`,
        `$n = ${n}$`,
        [`$n = ${n - 1}$`, `$n = ${n + 1}$`, `$n = ${Math.max(2, Math.round(s / p))}$`, `$n = ${Math.ceil(Math.log(s) / Math.log(1 - p))}$`],
        "Si $X \\sim \\mathcal{B}(n ; p)$, $P(X \\ge 1) = 1 - P(X = 0) = 1 - (1-p)^n$.",
        `Résous $${P(1 - p)}^n \\le ${P(1 - s)}$ en appliquant $\\ln$ (attention : $\\ln(${P(1 - p)}) < 0$).`,
        `$P(X \\ge 1) = 1 - ${P(1 - p)}^n \\ge ${P(s)} \\iff ${P(1 - p)}^n \\le ${P(1 - s)} \\iff n \\ge \\frac{\\ln(${P(1 - s)})}{\\ln(${P(1 - p)})} \\approx ${this.dec(Math.log(1 - s) / Math.log(1 - p), 2)}$. Le plus petit entier convenable est $n = ${n}$.`
      );
    }
    const n = this.randInt(4, 12);
    const p = this.randChoice([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7]);
    const q = 1 - p;
    const fmt = (x) => (this.isDecimal(x, 3) ? `= ${this.dec(x, 3)}` : `\\approx ${this.dec(x, 3)}`);
    if (fam === 2) {
      const val = 1 - q ** n;
      const A = (x) => `$P(X \\ge 1) ${fmt(x)}$`;
      return this._Tx(this.makeMcq('TS1', 4, 'Probabilité d\'au moins un succès',
        "Passer par l'événement contraire $\\{X = 0\\}$",
        `$X$ suit la loi binomiale $\\mathcal{B}(${n} ; ${P(p)})$. Calculer $P(X \\ge 1)$ (valeur exacte ou arrondie au millième).`,
        A(val),
        [q ** n, 1 - p ** n, n * p * q ** (n - 1), 1 - q ** n - n * p * q ** (n - 1), n * p, 1 - q * n / 10].filter((x) => x > 0.0005 && x < 0.9995).map(A).filter((s) => s !== A(val)),
        "L'événement contraire de $\\{X \\ge 1\\}$ est $\\{X = 0\\}$.",
        `$P(X = 0) = ${P(q)}^{${n}}$.`,
        `$P(X \\ge 1) = 1 - P(X = 0) = 1 - ${P(q)}^{${n}} ${fmt(val)}$.`
      ), this.dec(val, 3).replace('{,}', ','), 'Saisir la valeur exacte, ou arrondie au millième (virgule décimale).');
    }
    const val = q ** n + n * p * q ** (n - 1);
    const A = (x) => `$P(X \\le 1) ${fmt(x)}$`;
    return this._Tx(this.makeMcq('TS1', 4, 'Probabilité cumulée',
      "Calculer $P(X \\le 1) = P(X = 0) + P(X = 1)$",
      `$X$ suit la loi binomiale $\\mathcal{B}(${n} ; ${P(p)})$. Calculer $P(X \\le 1)$ (valeur exacte ou arrondie au millième).`,
      A(val),
      [A(q ** n), A(n * p * q ** (n - 1)), A(1 - val), A(q ** n + p * q ** (n - 1))].filter((s) => s !== A(val)),
      "$P(X \\le 1) = P(X = 0) + P(X = 1)$.",
      `$P(X = 1) = \\binom{${n}}{1} \\times ${P(p)} \\times ${P(q)}^{${n - 1}}$.`,
      `$P(X \\le 1) = ${P(q)}^{${n}} + ${n} \\times ${P(p)} \\times ${P(q)}^{${n - 1}} ${fmt(val)}$.`
    ), this.dec(val, 3).replace('{,}', ','), 'Saisir la valeur exacte, ou arrondie au millième (virgule décimale).');
  },

  // =========================================================================
  // TS2 : Sommes de variables aléatoires, concentration, grands nombres
  // =========================================================================
  gen_TS2(tier) {
    const D = (x) => this.dec(x);
    if (tier === 1) {
      const EX = this.randInt(-5, 12) + this.randChoice([0, 0, 0.5]);
      const EY = this.randInt(-4, 10);
      const a = this.randChoice([-3, -2, 2, 3, 4, 5]);
      const b = this.randInt(-9, 9);
      if (this.randInt(0, 1) === 0) {
        const r = a * EX + b;
        return this.makeMcq('TS2', 1, 'Linéarité de l\'espérance',
          "Appliquer $E(aX + b) = aE(X) + b$",
          `Une variable aléatoire $X$ vérifie $E(X) = ${D(EX)}$. Calculer $E(${this.poly([[a, 'X'], [b, '']])})$.`,
          `$E(${this.poly([[a, 'X'], [b, '']])}) = ${D(r)}$`,
          [r - b, a * EX, EX + b, a * (EX + b), r + 2 * b].filter((x) => x !== r).map((x) => `$E(${this.poly([[a, 'X'], [b, '']])}) = ${D(x)}$`),
          "L'espérance est linéaire : $E(aX + b) = aE(X) + b$.",
          `Calcule $${a} \\times ${this.paren(D(EX))} ${this.formatSign(b)}$.`.replace(' + 0$', '$').replace(' - 0$', '$'),
          `$E(${this.poly([[a, 'X'], [b, '']])}) = ${this.poly([[a, 'E(X)'], [b, '']])} = ${a} \\times ${this.paren(D(EX))}${b ? ' ' + this.formatSign(b) : ''} = ${D(r)}$.`
        );
      }
      const c = this.randChoice([-2, -1, 2, 3]);
      const r = a * EX + c * EY;
      const expr = this.poly([[a, 'X'], [c, 'Y']]);
      return this.makeMcq('TS2', 1, 'Espérance d\'une combinaison de variables',
        "Appliquer $E(aX + cY) = aE(X) + cE(Y)$ (sans hypothèse d'indépendance)",
        `Deux variables aléatoires $X$ et $Y$, définies sur le même univers, vérifient $E(X) = ${D(EX)}$ et $E(Y) = ${EY}$. Calculer $E(${expr})$.`,
        `$E(${expr}) = ${D(r)}$`,
        [EX + EY, a * EX - c * EY, a * c * EX * EY, r + 1].filter((x) => x !== r).map((x) => `$E(${expr}) = ${D(x)}$`).concat(['On ne peut pas conclure sans savoir si $X$ et $Y$ sont indépendantes']),
        "La linéarité de l'espérance est toujours vraie, même sans indépendance.",
        `Par linéarité, $E(${expr})$ s'écrit $${this.poly([[a, 'E(X)'], [c, 'E(Y)']])}$.`,
        `$E(${expr}) = ${this.poly([[a, 'E(X)'], [c, 'E(Y)']])} = ${a} \\times ${this.paren(D(EX))} + ${this.paren(c)} \\times ${this.paren(EY)} = ${D(r)}$.`
      );
    }
    if (tier === 2) {
      const VX = this.randInt(1, 12);
      const VY = this.randInt(1, 12);
      const a = this.randChoice([-3, -2, 2, 3, 4]);
      const b = this.randInt(-9, 9);
      if (this.randInt(0, 1) === 0) {
        const r = a * a * VX;
        const ex = this.poly([[a, 'X'], [b, '']]);
        return this.makeMcq('TS2', 2, 'Variance d\'une transformation affine',
          "Appliquer $V(aX + b) = a^2 V(X)$",
          `Une variable aléatoire $X$ a pour variance $V(X) = ${VX}$. Calculer $V(${ex})$.`,
          `$V(${ex}) = ${r}$`,
          [a * VX, a * VX + b, r + b, Math.abs(a) * VX].filter((x) => x !== r).map((x) => `$V(${ex}) = ${x}$`),
          "Une translation ne change pas la dispersion ; un facteur $a$ multiplie la variance par $a^2$.",
          "$V(aX + b) = a^2 V(X)$.",
          `$V(${ex}) = ${this.paren(a)}^2 \\times ${VX} = ${r}$.`
        );
      }
      const c = this.randChoice([-2, -1, 1, 2, 3]);
      const r = a * a * VX + c * c * VY;
      const ex = this.poly([[a, 'X'], [c, 'Y']]);
      return this.makeMcq('TS2', 2, 'Variance d\'une somme de variables indépendantes',
        "Appliquer $V(aX + cY) = a^2V(X) + c^2V(Y)$ pour $X$, $Y$ indépendantes",
        `$X$ et $Y$ sont deux variables aléatoires indépendantes telles que $V(X) = ${VX}$ et $V(Y) = ${VY}$. Calculer $V(${ex})$.`,
        `$V(${ex}) = ${r}$`,
        [a * VX + c * VY, a * a * VX - c * c * VY, VX + VY, (a + c) ** 2 * (VX + VY), r + 1].filter((x) => x !== r).map((x) => `$V(${ex}) = ${x}$`),
        "Pour des variables indépendantes, les variances s'additionnent, les coefficients sont élevés au carré.",
        "Même avec un signe moins, la variance s'ajoute.",
        `Par indépendance : $V(${ex}) = ${this.paren(a)}^2 V(X) + ${this.paren(c)}^2 V(Y) = ${a * a} \\times ${VX} + ${c * c} \\times ${VY} = ${r}$.`
      );
    }
    if (tier === 3) {
      let mu; let Va; let delta;
      do { mu = this.randInt(5, 60); Va = this.randInt(2, 40); delta = this.randInt(2, 12); } while (Va >= delta * delta);
      if (this.randInt(0, 1) === 0) {
        const b = this.frac(Va, delta * delta);
        return this.makeMcq('TS2', 3, 'Inégalité de Bienaymé-Tchebychev',
          "Majorer $P(|X - E(X)| \\ge \\delta)$ par $\\frac{V(X)}{\\delta^2}$",
          `Une variable aléatoire $X$ vérifie $E(X) = ${mu}$ et $V(X) = ${Va}$. Quel majorant de $P(|X - ${mu}| \\ge ${delta})$ donne l'inégalité de Bienaymé-Tchebychev ?`,
          `$${b}$`,
          this._TGSX_noInt([`$${this.frac(Va, delta)}$`, `$${this.frac(delta * delta - Va, delta * delta)}$`, `$${this.frac(Va * Va, delta * delta)}$`, `$${this.frac(delta, Va + delta)}$`, `$${this.frac(Va, 2 * delta)}$`, `$${this.frac(Va + 1, delta * delta)}$`, `$${this.frac(Va, delta * delta + 1)}$`]),
          "$P(|X - E(X)| \\ge \\delta) \\le \\frac{V(X)}{\\delta^2}$.",
          `Ici $\\delta = ${delta}$ donc $\\delta^2 = ${delta * delta}$.`,
          `D'après l'inégalité de Bienaymé-Tchebychev : $P(|X - ${mu}| \\ge ${delta}) \\le \\frac{V(X)}{\\delta^2} = \\frac{${Va}}{${delta}^2} = ${b}$.`
        );
      }
      const lo = mu - delta; const hi = mu + delta;
      const b = this.frac(delta * delta - Va, delta * delta);
      return this._Tx(this.makeMcq('TS2', 3, 'Minoration par Bienaymé-Tchebychev',
        "Minorer la probabilité d'un intervalle centré sur l'espérance",
        `Une variable aléatoire $X$ vérifie $E(X) = ${mu}$ et $V(X) = ${Va}$. Quelle minoration de $P(${lo} < X < ${hi})$ donne l'inégalité de Bienaymé-Tchebychev ?`,
        `$P(${lo} < X < ${hi}) \\ge ${b}$`,
        [`$P(${lo} < X < ${hi}) \\ge ${this.frac(Va, delta * delta)}$`, `$P(${lo} < X < ${hi}) \\le ${this.frac(Va, delta * delta)}$`, `$P(${lo} < X < ${hi}) \\ge ${this.frac(Math.max(1, delta - 1), delta)}$`, `$P(${lo} < X < ${hi}) \\ge ${this.frac(2 * delta * delta - Va, 2 * delta * delta)}$`],
        `L'événement $\\{${lo} < X < ${hi}\\}$ est le contraire de $\\{|X - ${mu}| \\ge ${delta}\\}$.`,
        "$P(|X - E(X)| \\ge \\delta) \\le \\frac{V(X)}{\\delta^2}$.",
        `$P(${lo} < X < ${hi}) = 1 - P(|X - ${mu}| \\ge ${delta}) \\ge 1 - \\frac{${Va}}{${delta}^2} = ${b}$.`
      ), this._Tq(delta * delta - Va, delta * delta), 'Saisir le minorant sous forme de fraction irréductible.');
    }
    // tier 4 : moyenne empirique, inégalité de concentration
    const v = this.randChoice([1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 16, 20, 25]);
    const dl = this.randChoice([1, 2, 5]); // delta = dl / 10
    const al = this.randChoice([1, 5, 10]); // alpha = al / 100
    if (this.randInt(0, 2) === 0) {
      const nn = this.randChoice([10, 20, 25, 50, 100, 200, 400]);
      const A = (x) => `$V(M_n) = ${D(x)}$`;
      return this.makeMcq('TS2', 4, 'Variance de la moyenne empirique',
        "Appliquer $V(M_n) = \\frac{V(X)}{n}$",
        `$X_1, \\dots, X_n$ sont $n = ${nn}$ variables aléatoires indépendantes de même loi, de variance $${v}$. On note $M_n = \\frac{X_1 + \\dots + X_n}{n}$ la moyenne empirique. Calculer $V(M_n)$.`,
        A(v / nn), [A(v), A(v * nn), A(v / (nn * nn)), A(v / Math.sqrt(nn))],
        "$V(X_1 + \\dots + X_n) = nV(X)$ par indépendance, et $V(aY) = a^2V(Y)$.",
        "$V(M_n) = \\frac{1}{n^2} \\times nV(X)$.",
        `$V(M_n) = \\frac{1}{n^2} \\times n V(X) = \\frac{V(X)}{n} = \\frac{${v}}{${nn}} = ${D(v / nn)}$.`.replace(`\\frac{${v}}{${nn}}`, this.frac(v, nn))
      );
    }
    const num = v * 100 * 100; const den = al * dl * dl;
    const n = Math.ceil(num / den);
    return this.makeMcq('TS2', 4, 'Inégalité de concentration : taille d\'échantillon',
      "Trouver $n$ tel que $\\frac{V(X)}{n\\delta^2} \\le \\alpha$",
      `$X_1, \\dots, X_n$ sont indépendantes, de même loi d'espérance $\\mu$ et de variance $${v}$, et $M_n$ est leur moyenne. À l'aide de l'inégalité de concentration, déterminer le plus petit entier $n$ garantissant $P(|M_n - \\mu| \\ge ${D(dl / 10)}) \\le ${D(al / 100)}$.`,
      `$n = ${n}$`,
      [`$n = ${Math.ceil(v * 100 * 10 / (al * dl))}$`, `$n = ${Math.ceil(v * 100 / (dl * dl))}$`, `$n = ${n * 2}$`, `$n = ${Math.ceil(Math.sqrt(num / den))}$`],
      "Inégalité de concentration : $P(|M_n - \\mu| \\ge \\delta) \\le \\frac{V(X)}{n\\delta^2}$.",
      "Il suffit que $\\frac{V(X)}{n\\delta^2} \\le \\alpha$, soit $n \\ge \\frac{V(X)}{\\alpha\\delta^2}$.",
      `On veut $\\frac{${v}}{n \\times ${D(dl / 10)}^2} \\le ${D(al / 100)}$, soit $n \\ge \\frac{${v}}{${D(al / 100)} \\times ${D(dl * dl / 100)}} ${Number.isInteger(num / den) ? '=' : '\\approx'} ${D(num / den, 2)}$. Le plus petit entier est $n = ${n}$.`
    );
  },

  // =========================================================================
  // TX1 : Nombres complexes, forme algébrique
  // =========================================================================
  gen_TX1(tier) {
    const C = (a, b) => this._TGSX_cplx(a, b);
    const CI = 'Écrire le résultat sous la forme $a + ib$ ($a$ et $b$ réels) et saisir le couple (a ; b).';
    if (tier === 1) {
      const a = this.randNonZero(-9, 9); const b = this.randNonZero(-9, 9);
      const fam = this.randInt(1, 3);
      if (fam === 1) {
        const R = (x, y) => `$\\text{Re}(z) = ${x}$ et $\\text{Im}(z) = ${y}$`;
        return this._Tx(this.makeMcq('TX1', 1, 'Parties réelle et imaginaire',
          "Identifier $\\text{Re}(z)$ et $\\text{Im}(z)$ dans l'écriture $a + ib$",
          `Quelles sont la partie réelle et la partie imaginaire du nombre complexe $z = ${C(a, b)}$ ?`,
          R(a, b), [R(a, this.coefStr(b, 'i')), R(b, a), R(a, -b), R(-a, b)],
          "La partie imaginaire est un nombre réel : le coefficient de $i$, sans le $i$.",
          "Le signe fait partie de la partie imaginaire.",
          `$z = ${C(a, b)}$ s'écrit $a + ib$ avec $a = ${a}$ et $b = ${b}$ : $\\text{Re}(z) = ${a}$ et $\\text{Im}(z) = ${b}$.`
        ), [a, b], 'Saisir le couple (Re(z) ; Im(z)).');
      }
      const c = this.randNonZero(-9, 9); const d = this.randNonZero(-9, 9);
      if (fam === 2) {
        const op = this.randChoice(['+', '-']);
        const s = op === '+' ? 1 : -1;
        const r = C(a + s * c, b + s * d);
        return this._Tx(this.makeMcq('TX1', 1, op === '+' ? 'Somme de nombres complexes' : 'Différence de nombres complexes',
          "Additionner parties réelles et parties imaginaires séparément",
          `On pose $z_1 = ${C(a, b)}$ et $z_2 = ${C(c, d)}$. Écrire $z_1 ${op} z_2$ sous forme algébrique.`,
          `$${r}$`,
          this._TGSX_noInt([`$${C(a - s * c, b - s * d)}$`, `$${C(a + s * c, b - s * d)}$`, `$${C(a + s * d, b + s * c)}$`, `$${C(a * c, b * d)}$`, `$${C(-(a + s * c), b + s * d)}$`, `$${C(a + s * c, -(b + s * d))}$`]),
          op === '+' ? '$(a + ib) + (c + id) = (a + c) + i(b + d)$.' : '$(a + ib) - (c + id) = (a - c) + i(b - d)$.',
          "Regroupe les parties réelles d'un côté, les parties imaginaires de l'autre.",
          `$z_1 ${op} z_2 = (${a} ${op} ${this.paren(c)}) + (${b} ${op} ${this.paren(d)})i = ${r}$.`
        ), [a + s * c, b + s * d], CI);
      }
      return this._Tx(this.makeMcq('TX1', 1, 'Conjugué d\'un nombre complexe',
        "Écrire $\\bar{z} = a - ib$",
        `Quel est le conjugué $\\bar{z}$ du nombre complexe $z = ${C(a, b)}$ ?`,
        `$\\bar{z} = ${C(a, -b)}$`,
        [`$\\bar{z} = ${C(-a, b)}$`, `$\\bar{z} = ${C(-a, -b)}$`, `$\\bar{z} = ${C(b, a)}$`],
        "Le conjugué de $a + ib$ est $a - ib$.",
        "Seul le signe de la partie imaginaire change.",
        `$\\bar{z} = \\overline{${C(a, b)}} = ${C(a, -b)}$.`
      ), [a, -b], CI);
    }
    if (tier === 2) {
      const a = this.randNonZero(-6, 6); const b = this.randNonZero(-6, 6);
      const fam = this.randInt(1, 3);
      if (fam === 1) {
        const c = this.randNonZero(-6, 6); const d = this.randNonZero(-6, 6);
        const re = a * c - b * d; const im = a * d + b * c;
        return this._Tx(this.makeMcq('TX1', 2, 'Produit de deux nombres complexes',
          "Développer en utilisant $i^2 = -1$",
          `Écrire sous forme algébrique le produit $(${C(a, b)})(${C(c, d)})$.`,
          `$${C(re, im)}$`,
          (im === 0 ? (x) => x : (x) => this._TGSX_noInt(x))([`$${C(a * c + b * d, im)}$`, `$${C(a * c, b * d)}$`, `$${C(re, a * d - b * c)}$`, `$${C(-re, im)}$`, `$${C(re, -im)}$`, `$${C(im, re)}$`]),
          "Développe comme d'habitude puis remplace $i^2$ par $-1$.",
          `Le terme $(${this.coefStr(b, 'i')}) \\times (${this.coefStr(d, 'i')}) = ${this.coefStr(b * d, 'i^2')} = ${-b * d}$.`,
          `$(${C(a, b)})(${C(c, d)}) = ${this.poly([[a * c, ''], [a * d, 'i'], [b * c, 'i'], [b * d, 'i^2']])} = ${C(re, im)}$.`
        ), [re, im], CI);
      }
      if (fam === 2) {
        const m = a * a + b * b;
        return this.makeMcq('TX1', 2, 'Produit d\'un complexe par son conjugué',
          "Calculer $z\\bar{z} = a^2 + b^2$",
          `Pour $z = ${C(a, b)}$, calculer $z\\bar{z}$.`,
          `$z\\bar{z} = ${m}$`,
          [`$z\\bar{z} = ${a * a - b * b}$`, `$z\\bar{z} = ${C(a * a, b * b)}$`, `$z\\bar{z} = ${2 * a}$`, `$z\\bar{z} = ${m + 2 * a * b}$`],
          "$(a + ib)(a - ib) = a^2 - (ib)^2 = a^2 + b^2$.",
          "Le résultat est toujours un réel positif.",
          `$z\\bar{z} = (${C(a, b)})(${C(a, -b)}) = ${this.paren(a)}^2 + ${this.paren(b)}^2 = ${m}$.`
        );
      }
      const re = a * a - b * b; const im = 2 * a * b;
      return this._Tx(this.makeMcq('TX1', 2, 'Carré d\'un nombre complexe',
        "Développer $(a + ib)^2 = a^2 - b^2 + 2abi$",
        `Écrire $z^2$ sous forme algébrique pour $z = ${C(a, b)}$.`,
        `$z^2 = ${C(re, im)}$`,
        [`$z^2 = ${C(a * a + b * b, im)}$`, `$z^2 = ${C(a * a, b * b)}$`, `$z^2 = ${C(re, a * b)}$`, `$z^2 = ${C(re, -im)}$`],
        "Identité remarquable avec $i^2 = -1$.",
        `$(${this.coefStr(b, 'i')})^2 = ${-b * b}$.`,
        `$z^2 = ${this.paren(a)}^2 + 2 \\times ${this.paren(a)} \\times (${this.coefStr(b, 'i')}) + (${this.coefStr(b, 'i')})^2 = ${a * a} ${this.formatSign(im)}i - ${b * b} = ${C(re, im)}$.`
      ), [re, im], CI);
    }
    if (tier === 3) {
      if (this.randInt(0, 1) === 0) {
        // quotient exact
        const c = this.randNonZero(-4, 4); const d = this.randNonZero(-4, 4);
        const p = this.randInt(-5, 5); const q = this.randNonZero(-5, 5);
        const a = p * c - q * d; const b = p * d + q * c; // z1 = w z2
        const m = c * c + d * d;
        return this._Tx(this.makeMcq('TX1', 3, 'Quotient de deux nombres complexes',
          "Multiplier numérateur et dénominateur par le conjugué du dénominateur",
          `Écrire sous forme algébrique $\\frac{${C(a, b)}}{${C(c, d)}}$.`,
          `$${C(p, q)}$`,
          this._TGSX_noInt([`$${C(p, -q)}$`, `$${C(q, p)}$`, `$${C(-p, q)}$`, `$${C(p + 1, q)}$`, `$${C(p, q + 1)}$`, `$${C(-p, -q)}$`, `$${C(p + 1, -q)}$`, `$${C(p - 1, q)}$`, `$${C(2 * p + 1, 2 * q)}$`].filter((x) => x !== `$${C(p, q)}$`)),
          `Multiplie en haut et en bas par $\\overline{${C(c, d)}} = ${C(c, -d)}$.`,
          `Au dénominateur : $(${C(c, d)})(${C(c, -d)}) = ${m}$.`,
          `$\\frac{${C(a, b)}}{${C(c, d)}} = \\frac{(${C(a, b)})(${C(c, -d)})}{${m}} = \\frac{${C(p * m, q * m)}}{${m}} = ${C(p, q)}$.`
        ), [p, q], CI);
      }
      const a = this.randNonZero(-5, 5); const b = this.randNonZero(-5, 5);
      const m = a * a + b * b;
      const F = (x, y) => `$${this.poly([[this.frac(x, m), ''], [this.frac(y, m), 'i']])}$`;
      const Fm = (x, y, mm) => `$${this.poly([[this.frac(x, mm), ''], [this.frac(y, mm), 'i']])}$`;
      return this._Tx(this.makeMcq('TX1', 3, 'Inverse d\'un nombre complexe',
        "Écrire $\\frac{1}{z}$ sous forme algébrique",
        `Écrire sous forme algébrique l'inverse de $z = ${C(a, b)}$.`,
        F(a, -b), [F(a, b), F(-a, b), `$${C(a, -b)}$`, Fm(a, -b, Math.abs(a * a - b * b) || m + 1)],
        "Multiplie numérateur et dénominateur par le conjugué $\\bar{z}$.",
        `$z\\bar{z} = ${this.paren(a)}^2 + ${this.paren(b)}^2 = ${m}$.`,
        `$\\frac{1}{z} = \\frac{\\bar{z}}{z\\bar{z}} = \\frac{${C(a, -b)}}{${m}} = ${F(a, -b).slice(1, -1)}$.`
      ), [this._Tq(a, m), this._Tq(-b, m)], CI);
    }
    // tier 4 : équation avec conjugué ; équation du second degré à discriminant négatif
    if (Math.random() < 0.45) {
      const k = this.randChoice([-3, -2, 2, 3, 4]);
      const x = this.randInt(-5, 5); const y = this.randNonZero(-5, 5);
      const A = (1 + k) * x; const B = (1 - k) * y;
      const ans = `$z = ${C(x, y)}$`;
      return this._Tx(this.makeMcq('TX1', 4, 'Équation avec le conjugué',
        'Résoudre une équation en posant $z = x + iy$',
        `Résoudre dans $\\mathbb{C}$ l'équation $z ${k < 0 ? '-' : '+'} ${Math.abs(k)}\\bar{z} = ${C(A, B)}$.`,
        ans,
        [`$z = ${C(x, -y)}$`, `$z = ${C(this.frac(A, 1 - k) === String(x) ? x + 1 : this.frac(A, 1 - k), this.frac(B, 1 + k) === String(y) ? y + 1 : this.frac(B, 1 + k))}$`, `$z = ${C(-x, y)}$`, `$z = ${C(x + 1, y)}$`].filter((o, i, arr) => o !== ans && arr.indexOf(o) === i),
        'Pose $z = x + iy$ avec $x$, $y$ réels ; alors $\\bar{z} = x - iy$.',
        'Identifie les parties réelles et les parties imaginaires des deux membres.',
        `Avec $z = x + iy$ : $z ${k < 0 ? '-' : '+'} ${Math.abs(k)}\\bar{z} = ${this.coefStr(1 + k, 'x')} + i(${this.coefStr(1 - k, 'y')})$ : partie réelle $${this.coefStr(1 + k, 'x')}$, partie imaginaire $${this.coefStr(1 - k, 'y')}$. Par identification, $${this.coefStr(1 + k, 'x')} = ${A}$ et $${this.coefStr(1 - k, 'y')} = ${B}$, d'où $x = ${x}$ et $y = ${y}$ : ${ans}.`
      ), [x, y], CI);
    }
    const p = this.randInt(-5, 5); const q = this.randInt(1, 5);
    const k = this.randChoice([1, 1, 1, 2, 3]);
    const A = k; const B = -2 * p * k; const Cc = k * (p * p + q * q);
    const delta = B * B - 4 * A * Cc;
    const S = (x, y) => `$S = \\{${C(x, -y)} ; ${C(x, y)}\\}$`;
    const eq = this.poly([[A, 'z^2'], [B, 'z'], [Cc, '']]);
    return this._Tx(this.makeMcq('TX1', 4, 'Équation du second degré dans $\\mathbb{C}$',
      "Résoudre $az^2 + bz + c = 0$ quand $\\Delta < 0$",
      `Résoudre dans $\\mathbb{C}$ l'équation $${eq} = 0$.`,
      S(p, q),
      [S(-p, q), S(p, 2 * q), `$S = \\{${p - q} ; ${p + q}\\}$`, '$S = \\emptyset$', S(p, q + 1)],
      "Calcule $\\Delta = b^2 - 4ac$ ; s'il est négatif, les solutions sont $\\frac{-b \\pm i\\sqrt{-\\Delta}}{2a}$.",
      `Ici $\\Delta = ${delta}$, donc $\\sqrt{-\\Delta} = ${Math.sqrt(-delta)}$.`,
      `$\\Delta = ${this.paren(B)}^2 - 4 \\times ${A} \\times ${Cc} = ${delta} < 0$. Les solutions sont conjuguées : $z = \\frac{${-B} \\pm ${Math.sqrt(-delta)}i}{${2 * A}}$, soit $z_1 = ${C(p, -q)}$ et $z_2 = ${C(p, q)}$.`
    ), [p, q], 'Les solutions s\'écrivent $p - iq$ et $p + iq$ avec $q > 0$ : saisir (p ; q).');
  },

  // =========================================================================
  // TX2 : Forme trigonométrique / exponentielle, géométrie
  // =========================================================================
  gen_TX2(tier) {
    const C = (a, b) => this._TGSX_cplx(a, b);
    const ang = (k, m) => this._TGSX_angle(k, m);
    const EI = 'On écrit le résultat $re^{i\\theta}$ avec $r > 0$ et $\\theta \\in ]-\\pi ; \\pi]$ : saisir le couple (r ; θ), par exemple (2;-π/3) (touche π ou « pi »), ou le couple (r ; θ/π), en fractions si besoin.';
    // saisie acceptée avec π : (r ; θ)
    const EIacc = (r, th) => [`(${r};${this._xpi(th)})`];
    // argument k*pi/m ramené dans ]-pi ; pi], divisé par pi (texte brut)
    const argPi = (k, m) => { let kk = ((k % (2 * m)) + 2 * m) % (2 * m); if (kk > m) kk -= 2 * m; return this._Tq(kk, m); };
    // r e^{i theta} avec signe moins sorti : e^{-i\frac{\pi}{3}}
    const expo = (r, k, m) => {
      const t = ang(k, m);
      const rs = r === '1' || r === 1 ? '' : String(r);
      if (t === '0') return rs || '1';
      const arg = t.startsWith('-') ? `-i${t.slice(1)}` : `i${t}`;
      return `${rs}e^{${arg}}`;
    };
    // valeur exacte de lam * c où c = s * n * sqrt(q) / 2
    const exact = (lam, s, n, q) => {
      if (n === 0 || s === 0) return 0;
      const a = lam * s * n; // a * sqrt(q) / 2
      if (q === 1) return this.frac(a, 2);
      if (a % 2 === 0) { const b = a / 2; return (b === 1 ? '' : b === -1 ? '-' : String(b)) + `\\sqrt{${q}}`; }
      return (a < 0 ? '-' : '') + `\\frac{${Math.abs(a) === 1 ? '' : Math.abs(a)}\\sqrt{${q}}}{2}`;
    };
    // cos et sin d'un angle remarquable sous la forme [s, n, q]
    const trig = (k, m) => {
      const t = (k / m) * Math.PI;
      const enc = (v) => {
        const c = [[0, 1], [1, 1], [1, 2], [1, 3], [2, 1]].find(([n, q]) => Math.abs(Math.abs(v) - n * Math.sqrt(q) / 2) < 1e-9);
        return [Math.sign(Math.round(v * 1e9)), c[0], c[1]];
      };
      return [enc(Math.cos(t)), enc(Math.sin(t))];
    };
    const remarkable = () => {
      const m = this.randChoice([2, 3, 4, 6]);
      let k;
      do { k = this.randInt(-m + 1, m - 1); } while (k === 0 || this.gcd(k, m) !== 1);
      return [k, m];
    };
    if (tier === 1) {
      if (this.randInt(0, 1) === 0) {
        const T = this.randChoice([[3, 4], [5, 12], [6, 8], [8, 15], [1, 1], [1, 2], [2, 3], [1, 3], [2, 2], [3, 3], [2, 4], [1, 7], [4, 4], [2, 5]]);
        const a = T[0] * this.randChoice([-1, 1]); const b = T[1] * this.randChoice([-1, 1]);
        const [x, y] = this.randInt(0, 1) ? [a, b] : [b, a];
        const m2 = x * x + y * y;
        const r = this._TGSX_sqrt(m2);
        let kq = 1; let mq = m2;
        for (let dd = 2; dd * dd <= mq; dd++) while (mq % (dd * dd) === 0) { mq /= dd * dd; kq *= dd; }
        const qMod = this.makeMcq('TX2', 1, 'Module d\'un nombre complexe',
          "Calculer $|a + ib| = \\sqrt{a^2 + b^2}$",
          `Calculer le module du nombre complexe $z = ${C(x, y)}$.`,
          `$|z| = ${r}$`,
          [`$|z| = ${m2}$`, `$|z| = ${Math.abs(x) + Math.abs(y)}$`, `$|z| = ${this._TGSX_sqrt(Math.abs(x * x - y * y) || 3)}$`, `$|z| = ${this._TGSX_sqrt(m2 + 1)}$`, `$|z| = ${this._TGSX_sqrt(m2 + 2)}$`],
          "$|a + ib| = \\sqrt{a^2 + b^2}$.",
          "Simplifie la racine carrée si possible.",
          `$|z| = \\sqrt{${this.paren(x)}^2 + ${this.paren(y)}^2} = \\sqrt{${m2}}${r === `\\sqrt{${m2}}` ? '' : ' = ' + r}$.`
        );
        return mq === 1 ? qMod : this._Tx(qMod, [kq, mq], 'On écrit $|z| = k\\sqrt{m}$ avec $k$, $m$ entiers et $m$ le plus petit possible : saisir $k\\sqrt{m}$, par exemple 3√2 (touche √ ou « sqrt »), ou le couple (k ; m).', [this._xsq(kq, mq)]);
      }
      // forme exponentielle -> algébrique
      const r = this.randInt(1, 6);
      const [k, m] = remarkable();
      const [c, s] = trig(k, m);
      const Z = (cc, ss) => `$z = ${this.poly([[exact(r, ...cc), ''], [exact(r, ...ss), 'i']])}$`;
      const neg = (v) => [-v[0], v[1], v[2]];
      const ans = Z(c, s);
      const cands = [Z(s, c), Z(neg(c), s), Z(c, neg(s)), Z(neg(c), neg(s)), Z([1, 2, 1], s), Z(c, [1, 2, 1])].filter((x) => x !== ans);
      const t = ang(k, m);
      return this.makeMcq('TX2', 1, 'De la forme exponentielle à la forme algébrique',
        "Utiliser $re^{i\\theta} = r\\cos\\theta + ir\\sin\\theta$",
        `Écrire sous forme algébrique $z = ${expo(r, k, m)}$.`,
        ans, cands,
        "$re^{i\\theta} = r(\\cos\\theta + i\\sin\\theta)$.",
        `Utilise les valeurs remarquables de $\\cos\\left(${t}\\right)$ et $\\sin\\left(${t}\\right)$.`,
        `$z = ${r === 1 ? '' : r}\\left(\\cos\\left(${t}\\right) + i\\sin\\left(${t}\\right)\\right) = ${ans.slice(5, -1)}$.`
      );
    }
    if (tier === 2) {
      // algébrique -> exponentielle
      const [k, m] = remarkable();
      const [c, s] = trig(k, m);
      const lam = this.randInt(1, 4);
      // module choisi pour des coordonnées simples
      const R = m === 4 ? lam * Math.SQRT2 : (m === 2 ? lam : 2 * lam);
      const rr = m === 4 ? (lam === 1 ? '\\sqrt{2}' : `${lam}\\sqrt{2}`) : String(m === 2 ? lam : 2 * lam);
      const val = (v) => exact(m === 4 ? lam * 2 : (m === 2 ? lam : 2 * lam), v[0], v[1], v[2]);
      // pour m = 4 : R * sqrt(2)/2 = lam  -> exact(2lam, s, 1, 2) donnerait lam*sqrt2 ; on corrige
      const coord = (v) => (m === 4 ? (v[0] * lam) : val(v));
      const z = this.poly([[coord(c), ''], [coord(s), 'i']]);
      void R;
      const A = (r, kk, mm) => `$z = ${expo(r, kk, mm)}$`;
      const ans = A(rr, k, m);
      const cands = [A(rr, -k, m), A(rr, m - k, m), A(rr, k + m, m), A(m === 4 ? 2 * lam : lam * 4, k, m), A(rr, 2 * k + (k % 2 === 0 ? 1 : 0), 2 * m)].filter((x) => x !== ans);
      const q2 = this.makeMcq('TX2', 2, 'Forme exponentielle d\'un nombre complexe',
        "Déterminer le module et un argument",
        `Écrire sous forme exponentielle le nombre complexe $z = ${z}$.`,
        ans, cands,
        "Calcule $|z|$, puis cherche $\\theta$ tel que $\\cos\\theta = \\frac{a}{|z|}$ et $\\sin\\theta = \\frac{b}{|z|}$.",
        "Repère le quadrant grâce aux signes de la partie réelle et de la partie imaginaire.",
        `$|z| = ${rr}$, puis $\\cos\\theta = ${exact(1, ...c) === 0 ? '0' : exact(1, ...c)}$ et $\\sin\\theta = ${exact(1, ...s) === 0 ? '0' : exact(1, ...s)}$, donc $\\theta = ${ang(k, m)}$ (modulo $2\\pi$). Ainsi ${ans}.`
      );
      return m === 4 ? q2 : this._Tx(q2, [m === 2 ? lam : 2 * lam, argPi(k, m)], EI, EIacc(m === 2 ? lam : 2 * lam, argPi(k, m)));
    }
    if (tier === 3) {
      const ms = [2, 3, 4, 6];
      if (this.randInt(0, 1) === 0) {
        const m = this.randChoice(ms); let k;
        do { k = this.randInt(-m + 1, m); } while (k === 0);
        const r = this.randChoice([1, 1, 2, 3]);
        let n;
        do { n = this.randInt(2, r === 3 ? 4 : 6); } while ((n * k) % (2 * m) === 0);
        const base = expo(r, k, m);
        const A = (R, kk, mm) => `$z^{${n}} = ${expo(R, kk, mm)}$`;
        const ans = A(r ** n, n * k, m);
        const cands = [A(r * n, n * k, m), A(r ** n, k, m), A(r ** n, n * k + m, m), A(r ** n, k + n, m), A(r ** n, -n * k, m), A(r ** n + 1, n * k, m)].filter((x) => x !== ans && !/= \d+\$$/.test(x));
        return this._Tx(this.makeMcq('TX2', 3, 'Puissance d\'un nombre complexe (formule de Moivre)',
          "Appliquer $(re^{i\\theta})^n = r^n e^{in\\theta}$",
          `On pose $z = ${base}$. Écrire $z^{${n}}$ sous forme exponentielle, avec un argument dans $]-\\pi ; \\pi]$.`,
          ans, cands,
          "$(re^{i\\theta})^n = r^n e^{in\\theta}$.",
          "Ramène l'argument dans $]-\\pi ; \\pi]$ en retirant un multiple de $2\\pi$.",
          `$z^{${n}} = ${r === 1 ? '' : r + '^{' + n + '}'}e^{i \\times ${n} \\times ${ang(k, m) === '\\pi' ? '\\pi' : '\\left(' + ang(k, m) + '\\right)'}}$, et $${n} \\times ${ang(k, m) === '\\pi' ? '\\pi' : '\\left(' + ang(k, m) + '\\right)'} \\equiv ${ang(n * k, m)} \\pmod{2\\pi}$. Donc ${ans}.`.replace(/\$z\^\{(\d+)\} = /, '$z^{$1} = ')
        ), [r ** n, argPi(n * k, m)], EI, EIacc(r ** n, argPi(n * k, m)));
      }
      const m1 = this.randChoice(ms); const m2 = this.randChoice(ms);
      const k1 = this.randNonZero(-m1 + 1, m1 - 1) || 1; const k2 = this.randNonZero(-m2 + 1, m2 - 1) || 1;
      const r1 = this.randInt(1, 5); const r2 = this.randInt(1, 5);
      const div = this.randInt(0, 1) === 1;
      const L = this.lcm(m1, m2);
      const kk1 = k1 * (L / m1); const kk2 = k2 * (L / m2);
      const kr = div ? kk1 - kk2 : kk1 + kk2;
      const modS = div ? this.frac(r1, r2) : String(r1 * r2);
      const A = (R, kk) => `$${div ? '\\frac{z_1}{z_2}' : 'z_1 z_2'} = ${expo(R, kk, L)}$`;
      const ans = A(modS, kr);
      const cands = [A(modS, div ? kk1 + kk2 : kk1 - kk2), A(div ? String(r1 * r2) : String(r1 + r2), kr), A(modS, div ? kk2 - kk1 : kk1 * kk2), A(div ? this.frac(r2, r1) : String(r1 * r2 + 1), kr), A(modS, kr + L), A(div ? this.frac(r1 + 1, r2) : String(2 * r1 * r2), kr), A(div ? this.frac(3 * r1, r2) : String(r1 * r2 + 2), kr), A(div ? this.frac(r1 + 2, r2) : String(3 * r1 * r2), kr)].filter((x) => x !== ans);
      return this._Tx(this.makeMcq('TX2', 3, div ? 'Quotient en forme exponentielle' : 'Produit en forme exponentielle',
        "Multiplier les modules, additionner les arguments",
        `On pose $z_1 = ${expo(r1, k1, m1)}$ et $z_2 = ${expo(r2, k2, m2)}$. Écrire $${div ? '\\frac{z_1}{z_2}' : 'z_1 z_2'}$ sous forme exponentielle (argument dans $]-\\pi ; \\pi]$).`,
        ans, cands,
        div ? "$\\frac{re^{i\\alpha}}{r'e^{i\\beta}} = \\frac{r}{r'}e^{i(\\alpha - \\beta)}$." : "$re^{i\\alpha} \\times r'e^{i\\beta} = rr'e^{i(\\alpha + \\beta)}$.",
        "Mets les arguments au même dénominateur.",
        `Module : $${div ? `\\frac{|z_1|}{|z_2|} = ${modS}` : `${r1} \\times ${r2} = ${modS}`}$. Argument : $${ang(k1, m1)} ${div ? '-' : '+'} ${/^-/.test(ang(k2, m2)) ? '\\left(' + ang(k2, m2) + '\\right)' : ang(k2, m2)} \\equiv ${ang(kr, L)} \\pmod{2\\pi}$. Donc ${ans}.`
      ), [div ? this._Tq(r1, r2) : r1 * r2, argPi(kr, L)], EI, EIacc(div ? this._Tq(r1, r2) : r1 * r2, argPi(kr, L)));
    }
    // tier 4 : nature d'un triangle ; construction d'un triangle rectangle isocèle
    if (Math.random() < 0.45) {
      const A0 = [this.randInt(-4, 4), this.randInt(-4, 4)];
      let w0;
      do { w0 = [this.randInt(-4, 4), this.randInt(-4, 4)]; } while (w0[0] === 0 && w0[1] === 0);
      const B0 = [A0[0] + w0[0], A0[1] + w0[1]];
      const s = this.randChoice([1, -1]); // rotation de +pi/2 (s = 1) ou -pi/2
      const AC0 = [-s * w0[1], s * w0[0]];
      const C0 = [A0[0] + AC0[0], A0[1] + AC0[1]];
      const Z = (P) => `$z_C = ${C(P[0], P[1])}$`;
      const ans = Z(C0);
      return this._Tx(this.makeMcq('TX2', 4, 'Construction d\'un triangle rectangle isocèle',
        'Traduire une rotation d\'angle $\\pm\\frac{\\pi}{2}$ par une multiplication par $\\pm i$',
        `Dans le plan complexe, on donne les points $A$ et $B$ d'affixes $z_A = ${C(A0[0], A0[1])}$ et $z_B = ${C(B0[0], B0[1])}$. Déterminer l'affixe $z_C$ du point $C$ tel que $AC = AB$ et $(\\vec{AB}, \\vec{AC}) = ${s > 0 ? '' : '-'}\\frac{\\pi}{2}$ (le triangle $ABC$ est alors rectangle isocèle en $A$).`,
        ans,
        [[A0[0] - AC0[0], A0[1] - AC0[1]], [B0[0] + AC0[0], B0[1] + AC0[1]], [A0[0] + AC0[1], A0[1] + AC0[0]], [AC0[0], AC0[1]]]
          .filter((P) => P[0] !== C0[0] || P[1] !== C0[1]).map(Z).filter((o, i, arr) => arr.indexOf(o) === i),
        `Les conditions signifient que $\\frac{z_C - z_A}{z_B - z_A} = e^{${s > 0 ? '' : '-'}i\\frac{\\pi}{2}} = ${s > 0 ? 'i' : '-i'}$.`,
        `Calcule $z_B - z_A$, multiplie par $${s > 0 ? 'i' : '-i'}$, puis ajoute $z_A$.`,
        `$z_B - z_A = ${C(w0[0], w0[1])}$ et $z_C - z_A = ${s > 0 ? 'i' : '-i'}(${C(w0[0], w0[1])}) = ${C(AC0[0], AC0[1])}$, donc ${ans}.`
      ), C0, 'Écrire le résultat sous la forme $a + ib$ ($a$ et $b$ réels) et saisir le couple (a ; b).');
    }
    const zA = [this.randInt(-4, 4), this.randInt(-4, 4)];
    let w;
    do { w = [this.randInt(-3, 3), this.randInt(-3, 3)]; } while (w[0] === 0 && w[1] === 0);
    const kind = this.randChoice(['rectiso', 'rect', 'align', 'iso']);
    let q; // quotient q = (zC - zA)/(zB - zA), stocké [re, im] entiers sauf iso
    let AC;
    if (kind === 'rectiso') { q = [0, this.randChoice([-1, 1])]; }
    else if (kind === 'rect') { q = [0, this.randChoice([-3, -2, 2, 3])]; }
    else if (kind === 'align') { q = [this.randChoice([-2, -1, 2, 3]), 0]; }
    if (kind === 'iso') {
      // q = (3 + 4i)/5 ou variantes : on prend AB = 5w
      const [a, b] = this.randChoice([[3, 4], [4, 3], [3, -4], [4, -3]]);
      w = [5 * w[0], 5 * w[1]];
      const ww = [w[0] / 5, w[1] / 5];
      AC = [ww[0] * a - ww[1] * b, ww[0] * b + ww[1] * a];
      q = [a, b];
    } else {
      AC = [w[0] * q[0] - w[1] * q[1], w[0] * q[1] + w[1] * q[0]];
    }
    const zB = [zA[0] + w[0], zA[1] + w[1]];
    const zC = [zA[0] + AC[0], zA[1] + AC[1]];
    const qs = kind === 'iso' ? this.poly([[`\\frac{${q[0]}}{5}`, ''], [q[1] < 0 ? `-\\frac{${-q[1]}}{5}` : `\\frac{${q[1]}}{5}`, 'i']]) : C(q[0], q[1]);
    const L = {
      rectiso: 'Le triangle $ABC$ est rectangle isocèle en $A$',
      rect: 'Le triangle $ABC$ est rectangle en $A$, mais pas isocèle',
      align: 'Les points $A$, $B$ et $C$ sont alignés',
      iso: 'Le triangle $ABC$ est isocèle en $A$, mais pas rectangle'
    };
    const just = {
      rectiso: `$|q| = 1$ donc $AC = AB$, et $q$ est imaginaire pur donc $(\\vec{AB}, \\vec{AC}) = \\pm\\frac{\\pi}{2}$`,
      rect: `$q$ est imaginaire pur donc $(\\vec{AB}, \\vec{AC}) = \\pm\\frac{\\pi}{2}$, mais $|q| = ${Math.abs(q[1])} \\neq 1$ donc $AC \\neq AB$`,
      align: `$q$ est réel donc $\\vec{AC}$ et $\\vec{AB}$ sont colinéaires`,
      iso: `$|q| = \\sqrt{\\frac{9}{25} + \\frac{16}{25}} = 1$ donc $AC = AB$, mais $q$ n'est pas imaginaire pur`
    };
    return this.makeMcq('TX2', 4, 'Nature d\'un triangle avec les nombres complexes',
      "Interpréter module et argument de $\\frac{z_C - z_A}{z_B - z_A}$",
      `Dans le plan complexe, on considère les points $A$, $B$, $C$ d'affixes $z_A = ${C(zA[0], zA[1])}$, $z_B = ${C(zB[0], zB[1])}$ et $z_C = ${C(zC[0], zC[1])}$. En calculant $q = \\frac{z_C - z_A}{z_B - z_A}$, déterminer la nature de la figure $ABC$.`,
      L[kind], Object.keys(L).filter((x) => x !== kind).map((x) => L[x]),
      "$\\left|\\frac{z_C - z_A}{z_B - z_A}\\right| = \\frac{AC}{AB}$ et $\\arg\\left(\\frac{z_C - z_A}{z_B - z_A}\\right) = (\\vec{AB}, \\vec{AC})$.",
      `$z_B - z_A = ${C(w[0], w[1])}$ et $z_C - z_A = ${C(AC[0], AC[1])}$.`,
      `$q = \\frac{${C(AC[0], AC[1]).replace(/^(-?\d+)$/, '($1)')}}{${C(w[0], w[1]).replace(/^(-?\d+)$/, '($1)')}} = ${qs}$ : ${just[kind]}. ${L[kind]}.`
    );
  },

  // =========================================================================
  // TX3 : Divisibilité et congruences
  // =========================================================================
  gen_TX3(tier) {
    if (tier === 1) {
      const n = this.randInt(3, 13);
      const a = this.randChoice([this.randInt(15, 250), this.randInt(15, 250), -this.randInt(5, 80)]);
      const r = ((a % n) + n) % n;
      const qq = (a - r) / n;
      return this.makeMcq('TX3', 1, 'Reste et congruence modulo $n$',
        "Déterminer le reste $r$ tel que $a \\equiv r \\pmod{n}$ avec $0 \\le r < n$",
        `Déterminer l'entier $r$ tel que $${a} \\equiv r \\pmod{${n}}$ et $0 \\le r < ${n}$.`,
        `$r = ${r}$`,
        [`$r = ${Math.abs(a) % n}$`, `$r = ${n - r}$`, `$r = ${(r + 1) % n}$`, `$r = ${Math.abs(qq) % n}$`, `$r = ${(r + 2) % n}$`],
        "Effectue la division euclidienne $a = nq + r$ avec $0 \\le r < n$.",
        a < 0 ? "Pour un entier négatif, le quotient est négatif et le reste reste positif." : `Cherche le plus grand multiple de ${n} inférieur ou égal à ${a}.`,
        `$${this._TGSX_eucl(a, n, qq, r)}$ avec $0 \\le ${r} < ${n}$, donc $${a} \\equiv ${r} \\pmod{${n}}$.`
      );
    }
    if (tier === 2) {
      const n = this.randInt(4, 12);
      let a; let b; let c;
      do { a = this.randInt(20, 400); b = this.randInt(20, 400); c = this.randInt(1, 60); } while (a % n === 0 || b % n === 0 || c % n === 0);
      const ra = a % n; const rb = b % n; const rc = c % n;
      if (this.randInt(0, 1) === 0) {
        const r = (ra * rb + rc) % n;
        return this.makeMcq('TX3', 2, 'Compatibilité des congruences avec les opérations',
          "Remplacer chaque nombre par son reste avant de calculer",
          `Sans calculer le produit, déterminer le reste de la division euclidienne de $${a} \\times ${b} + ${c}$ par $${n}$.`,
          `$${r}$`,
          [`$${(ra + rb + rc) % n}$`, `$${(ra * rb) % n}$`, `$${(r + 1) % n}$`, `$${(ra * rb * rc) % n}$`, `$${(r + n - 1) % n}$`],
          "Les congruences sont compatibles avec l'addition et la multiplication.",
          `$${a} \\equiv ${ra}$, $${b} \\equiv ${rb}$ et $${c} \\equiv ${rc} \\pmod{${n}}$.`,
          `$${a} \\times ${b} + ${c} \\equiv ${ra} \\times ${rb} + ${rc} = ${ra * rb + rc} \\equiv ${r} \\pmod{${n}}$. Le reste est $${r}$.`
        );
      }
      const k = this.randInt(2, 4);
      let aa = a;
      while (aa % n <= 1 || aa % n === n - 1) aa++;
      const rA = aa % n;
      const r = this._TGSX_modpow(aa, k, n);
      return this.makeMcq('TX3', 2, 'Puissance et congruence',
        "Utiliser $a \\equiv b \\pmod{n} \\Rightarrow a^k \\equiv b^k \\pmod{n}$",
        `Déterminer le reste de la division euclidienne de $${aa}^{${k}}$ par $${n}$.`,
        `$${r}$`,
        [`$${(rA * k) % n}$`, `$${rA}$`, `$${(r + 1) % n}$`, `$${(r + n - 1) % n}$`, `$${(rA + k) % n}$`],
        "Remplace d'abord la base par son reste modulo $n$.",
        `$${aa} \\equiv ${rA} \\pmod{${n}}$.`,
        `$${aa}^{${k}} \\equiv ${rA}^{${k}} = ${rA ** k} \\equiv ${r} \\pmod{${n}}$. Le reste est $${r}$.`
      );
    }
    if (tier === 3) {
      const n = this.randChoice([5, 7, 9, 11, 13]);
      let a;
      do { a = this.randInt(2, 30); } while (this.gcd(a, n) !== 1 || a % n === 1);
      const ra = a % n;
      let d = 1; while (this._TGSX_modpow(ra, d, n) !== 1) d++;
      const N = this.randInt(40, 2030);
      const rest = N % d;
      const r = this._TGSX_modpow(ra, rest, n);
      const prime = n !== 9;
      return this.makeMcq('TX3', 3, 'Reste d\'une grande puissance',
        "Chercher une puissance congrue à 1 puis utiliser la division euclidienne de l'exposant",
        `Déterminer le reste de la division euclidienne de $${a}^{${N}}$ par $${n}$.`,
        `$${r}$`,
        [`$${(r + 1) % n}$`, `$${this._TGSX_modpow(ra, N % n, n)}$`, `$${(ra * N) % n}$`, `$${(r + n - 2) % n}$`, `$${this._TGSX_modpow(ra, (rest + 1) % d, n)}$`],
        `Calcule les puissances successives de $${ra}$ modulo $${n}$ jusqu'à obtenir $1$.` + (prime ? ` (Le petit théorème de Fermat assure $${ra}^{${n - 1}} \\equiv 1$.)` : ''),
        `On trouve $${a}^{${d}} \\equiv 1 \\pmod{${n}}$ : effectue la division euclidienne de l'exposant $${N}$ par $${d}$.`.replace(`^{1}`, ''),
        (a === ra ? '' : `$${a} \\equiv ${ra} \\pmod{${n}}$ et `) + `$${this.pow(String(ra), d)} \\equiv 1 \\pmod{${n}}$. Or $${this._TGSX_eucl(N, d, Math.floor(N / d), rest)}$, donc $${a}^{${N}} = \\left(${this.pow(String(a), d)}\\right)^{${Math.floor(N / d)}}${rest ? ' \\times ' + this.pow(String(a), rest) : ''} \\equiv ${rest ? this.pow(String(ra), rest) : '1'}${rest > 1 ? ' \\equiv ' + r : ''} \\pmod{${n}}$.`
      );
    }
    // tier 4
    if (this.randInt(0, 1) === 0) {
      const n = this.randChoice([5, 7, 8, 9, 11, 12, 13, 15, 17]);
      let a;
      do { a = this.randInt(2, n - 1); } while (this.gcd(a, n) !== 1);
      const b = this.randInt(1, n - 1);
      let inv = 1; while ((a * inv) % n !== 1) inv++;
      const x = (inv * b) % n;
      return this._Tx(this.makeMcq('TX3', 4, 'Équation de congruence',
        "Résoudre $ax \\equiv b \\pmod{n}$ grâce à un inverse modulo $n$",
        `Résoudre dans $\\mathbb{Z}$ l'équation $${a}x \\equiv ${b} \\pmod{${n}}$.`,
        `$x \\equiv ${x} \\pmod{${n}}$`,
        [`$x \\equiv ${(b * a) % n} \\pmod{${n}}$`, `$x \\equiv ${(x + 1) % n} \\pmod{${n}}$`, `$x \\equiv ${inv} \\pmod{${n}}$`, `$x \\equiv ${(n - x) % n} \\pmod{${n}}$`, `$x \\equiv ${b} \\pmod{${n}}$`],
        `Cherche un entier $u$ tel que $${a}u \\equiv 1 \\pmod{${n}}$.`,
        `$${a} \\times ${inv} = ${a * inv} \\equiv 1 \\pmod{${n}}$.`,
        `Comme $${a} \\times ${inv} \\equiv 1 \\pmod{${n}}$, en multipliant par $${inv}$ : $${a}x \\equiv ${b} \\iff x \\equiv ${inv} \\times ${b} = ${inv * b} \\equiv ${x} \\pmod{${n}}$. Les solutions sont les entiers $x = ${x} + ${n}k$, $k \\in \\mathbb{Z}$.`.replace(/x = 0 \+ /, 'x = ')
      ), x, `Les solutions s'écrivent $x \\equiv x_0 \\pmod{${n}}$ avec $0 \\le x_0 < ${n}$ : saisir l'entier $x_0$.`);
    }
    const a = this.randChoice([2, 3, 7, 8, 12, 13, 17, 22, 27, 33, 37, 43, 47, 53, 57, 63, 67, 73, 77, 83, 87, 93, 97]);
    const N = this.randInt(20, 2030);
    const u = a % 10;
    let d = 1; while (this._TGSX_modpow(u, d + 4, 10) !== this._TGSX_modpow(u, 4, 10) || d < 1) d++;
    // cycle des derniers chiffres de u : longueur d (1, 2 ou 4), valable pour exposants >= 1
    const e = ((N - 1) % d) + 1;
    const r = this._TGSX_modpow(u, e, 10);
    const cyc = Array.from({ length: d }, (_, i) => this._TGSX_modpow(u, i + 1, 10));
    return this.makeMcq('TX3', 4, 'Chiffre des unités d\'une grande puissance',
      "Travailler modulo 10 avec un cycle de restes",
      `Quel est le chiffre des unités de $${a}^{${N}}$ ?`,
      `$${r}$`,
      [...new Set([0, 1, 3, 7, 9, 2, 4, 6, 8, 5].filter((x) => x !== r))].slice(0, 6).map((x) => `$${x}$`).slice(0, 3).concat([`$${this._TGSX_modpow(u, (N % d) + 1, 10)}$`]),
      "Le chiffre des unités est le reste modulo 10.",
      `Les puissances successives de $${a}$ se terminent par : ${cyc.join(', ')}, puis le cycle recommence (période $${d}$).`,
      `$${a}^{k}$ modulo 10 suit le cycle ${cyc.join(', ')} de période $${d}$. Comme $${N} = ${d} \\times ${Math.floor((N - e) / d)} + ${e}$, $${a}^{${N}} \\equiv ${u}^{${e}} \\equiv ${r} \\pmod{10}$ : le chiffre des unités est ${r}.`.replace(/\^\{1\}/g, '')
    );
  },

  // =========================================================================
  // TX4 : PGCD, Bézout, Gauss, nombres premiers, RSA
  // =========================================================================
  gen_TX4(tier) {
    if (tier === 1) {
      const g = this.randChoice([2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 17, 18, 21, 24]);
      let x; let y;
      do { x = this.randInt(2, 25); y = this.randInt(2, 25); } while (x === y || this.gcd(x, y) !== 1);
      const a = g * x; const b = g * y;
      const steps = []; let p = Math.max(a, b); let q = Math.min(a, b);
      while (q) { steps.push(this._TGSX_eucl(p, q, Math.floor(p / q), p % q)); [p, q] = [q, p % q]; }
      return this.makeMcq('TX4', 1, 'PGCD par l\'algorithme d\'Euclide',
        "Appliquer l'algorithme d'Euclide",
        `Déterminer $\\text{PGCD}(${a} ; ${b})$.`,
        `$${g}$`,
        [`$${2 * g}$`, `$${g % 2 === 0 ? g / 2 : g + 1}$`, `$${x}$`, `$${y}$`, `$${g * x * y}$`],
        "Algorithme d'Euclide : $\\text{PGCD}(a ; b) = \\text{PGCD}(b ; r)$ où $r$ est le reste de $a$ par $b$.",
        "Le PGCD est le dernier reste non nul.",
        `$${steps.join('$ ; $')}$. Le dernier reste non nul est $${g}$, donc $\\text{PGCD}(${a} ; ${b}) = ${g}$.`
      );
    }
    if (tier === 2) {
      let a; let b;
      do { a = this.randInt(5, 60); b = this.randInt(5, 60); } while (a === b || this.gcd(a, b) !== 1);
      const [, u0] = this._TGSX_egcd(a, b);
      const u = ((u0 % b) + b) % b; const v = (1 - a * u) / b; // unique couple avec 0 <= u < b
      const pair = (x, y) => `$u = ${x}$ et $v = ${y}$`;
      const cands = [[-u, -v], [v, u], [u + 1, v], [u, v - 1], [u - b, v + a], [-u, v]]
        .filter(([x, y]) => !(x === u && y === v)).map(([x, y]) => pair(x, y));
      return this._Tx(this.makeMcq('TX4', 2, 'Identité de Bézout',
        "Trouver des coefficients de Bézout avec l'algorithme d'Euclide étendu",
        `Les entiers $${a}$ et $${b}$ sont premiers entre eux. Déterminer l'unique couple d'entiers $(u ; v)$ tel que $${a}u + ${b}v = 1$ et $0 \\le u < ${b}$.`,
        pair(u, v), cands,
        "Remonte les étapes de l'algorithme d'Euclide pour écrire $1$ comme combinaison de $" + a + "$ et $" + b + "$.",
        `Si $(u ; v)$ convient, $(u + ${b}k ; v - ${a}k)$ aussi : choisis $k$ pour que $0 \\le u < ${b}$.`,
        `L'algorithme d'Euclide étendu donne un couple de Bézout ; en ajoutant le multiple de $${b}$ convenable à $u$, on obtient $u = ${u}$ et $v = ${v}$. Vérification : $${a} \\times ${this.paren(u)} + ${b} \\times ${this.paren(v)} = ${a * u} ${this.formatSign(b * v)} = 1$, et $0 \\le ${u} < ${b}$.`
      ), [u, v], 'Saisir le couple (u ; v).');
    }
    if (tier === 3) {
      const ps = [2, 3, 5, 7, 11];
      let e; let N;
      do {
        e = ps.map(() => this.randInt(0, 3));
        e[3] = Math.min(e[3], 1); e[4] = Math.min(e[4], 1);
        N = ps.reduce((acc, p, i) => acc * p ** e[i], 1);
      } while (N < 30 || N > 5000 || e.filter((x) => x > 0).length < 2);
      const dec = (ee) => ps.map((p, i) => (ee[i] === 0 ? null : (ee[i] === 1 ? `${p}` : `${p}^{${ee[i]}}`))).filter(Boolean).join(' \\times ');
      if (this.randInt(0, 1) === 0) {
        const wrong = (f) => { const ee = [...e]; f(ee); return `$${N} = ${dec(ee)}$`; };
        const i = e.findIndex((x) => x > 0);
        const j = e.findIndex((x, k) => x > 0 && k !== i);
        return this.makeMcq('TX4', 3, 'Décomposition en facteurs premiers',
          "Décomposer un entier en produit de facteurs premiers",
          `Quelle est la décomposition en produit de facteurs premiers de $${N}$ ?`,
          `$${N} = ${dec(e)}$`,
          [wrong((ee) => { ee[i] += 1; ee[j] -= 1; }), wrong((ee) => { ee[i] += 1; }), wrong((ee) => { ee[j] = ee[j] + 1; ee[i] = Math.max(0, ee[i] - 1); }), `$${N} = ${dec(e).replace(/\b4\b/, '2^{2}')}$`.includes('2^{2}') ? `$${N} = ${dec(e).replace(/2\^\{2\}/, '4')}$` : wrong((ee) => { ee[0] += 2; })],
          "Divise successivement par les nombres premiers $2, 3, 5, 7, 11\\dots$",
          "Un facteur comme $4$, $6$ ou $9$ n'est pas premier.",
          `Par divisions successives, $${N} = ${dec(e)}$ : tous les facteurs sont premiers.`
        );
      }
      const nd = e.reduce((acc, x) => acc * (x + 1), 1);
      return this.makeMcq('TX4', 3, 'Nombre de diviseurs positifs',
        "Utiliser la décomposition en facteurs premiers",
        `Sachant que $${N} = ${dec(e)}$, combien $${N}$ a-t-il de diviseurs positifs ?`,
        `$${nd}$`,
        [`$${e.reduce((acc, x) => acc * (x || 1), 1)}$`, `$${e.reduce((acc, x) => acc + x, 0) + 1}$`, `$${nd - 1}$`, `$${nd + 2}$`, `$${2 * nd}$`],
        "Un diviseur positif s'écrit avec les mêmes facteurs premiers, chacun avec un exposant compris entre $0$ et son exposant dans $N$.",
        "Pour un facteur $p^k$, il y a $k + 1$ choix d'exposant.",
        `Le nombre de diviseurs est $${e.filter((x) => x > 0).map((x) => `(${x} + 1)`).join(' \\times ')} = ${nd}$.`
      );
    }
    // tier 4
    if (this.randInt(0, 1) === 0) {
      let a; let b;
      do { a = this.randInt(2, 15); b = this.randInt(2, 15); } while (a === b || this.gcd(a, b) !== 1);
      const x0 = this.randNonZero(-6, 6); const y0 = this.randNonZero(-6, 6);
      const c = a * x0 + b * y0;
      if (c === 0) return this.gen_TX4(4);
      const S = (p, q) => `$x = ${this.poly([[x0, ''], [p, 'k']])}$ et $y = ${this.poly([[y0, ''], [q, 'k']])}$, $k \\in \\mathbb{Z}$`;
      return this._Tx(this.makeMcq('TX4', 4, 'Équation diophantienne $ax + by = c$',
        "Utiliser une solution particulière et le théorème de Gauss",
        `On considère l'équation $(E) : ${a}x + ${b}y = ${c}$, d'inconnues entières. Le couple $(${x0} ; ${y0})$ en est une solution particulière. Quelles sont toutes les solutions de $(E)$ ?`,
        S(b, -a), [S(a, -b), S(b, a), S(-a, b), S(a * b, -a * b)],
        `Soustrais membre à membre : $${a}(${this.poly([[1, 'x'], [-x0, '']])}) = ${b}(${this.poly([[y0, ''], [-1, 'y']])})$.`,
        `Comme $\\text{PGCD}(${a} ; ${b}) = 1$, le théorème de Gauss donne : $${b}$ divise $${this.poly([[1, 'x'], [-x0, '']])}$.`,
        `Si $(x ; y)$ est solution, $${a}(${this.poly([[1, 'x'], [-x0, '']])}) = ${b}(${this.poly([[y0, ''], [-1, 'y']])})$. Par le théorème de Gauss ($${a}$ et $${b}$ premiers entre eux), $${this.poly([[1, 'x'], [-x0, '']])} = ${b}k$, puis $y = ${this.poly([[y0, ''], [-a, 'k']])}$. Réciproquement ces couples conviennent : ${S(b, -a)}.`
      ), [b, -a], `Les solutions s'écrivent $x = ${x0} + pk$, $y = ${y0} + qk$ ($k \\in \\mathbb{Z}$) avec $p > 0$ : saisir (p ; q).`.replace(/\+ -/g, '- '));
    }
    const primes = [3, 5, 7, 11, 13, 17];
    const [p, q] = this.pickDistinct(primes, 2);
    const n = p * q; const phi = (p - 1) * (q - 1);
    const es = [3, 5, 7, 11, 13, 17, 19, 23].filter((e) => e < phi && this.gcd(e, phi) === 1);
    let e; let d;
    let guard = 0;
    do {
      e = this.randChoice(es);
      d = 1; while ((e * d) % phi !== 1) d++;
      guard++;
    } while (d === e && guard < 20);
    return this.makeMcq('TX4', 4, 'Chiffrement RSA : clé privée',
      "Calculer l'inverse de $e$ modulo $(p-1)(q-1)$",
      `Dans un système RSA « jouet », on choisit $p = ${p}$, $q = ${q}$, donc $n = ${n}$, et la clé publique $e = ${e}$. Déterminer la clé privée $d$, avec $0 < d < (p - 1)(q - 1)$ et $ed \\equiv 1 \\pmod{(p - 1)(q - 1)}$.`,
      `$d = ${d}$`,
      [`$d = ${phi - d}$`, `$d = ${(d + 1) % phi}$`, `$d = ${e}$`, `$d = ${phi}$`, `$d = ${n % phi === 0 ? d + 2 : n % phi}$`].filter((x) => x !== `$d = ${d}$`),
      `Calcule $(p - 1)(q - 1) = ${phi}$.`,
      `Cherche $d$ tel que $${e}d \\equiv 1 \\pmod{${phi}}$ (algorithme d'Euclide étendu).`,
      `$(p - 1)(q - 1) = ${p - 1} \\times ${q - 1} = ${phi}$ et $${e} \\times ${d} = ${e * d} = ${phi} \\times ${(e * d - 1) / phi} + 1$, donc $d = ${d}$. La sécurité du RSA repose sur le fait que factoriser un très grand $n = pq$ est impraticable en temps raisonnable.`
    );
  },

  // =========================================================================
  // TX5 : Matrices, graphes, chaînes de Markov
  // =========================================================================
  gen_TX5(tier) {
    const M = (A) => this._TGSX_mat(A);
    const mul = (A, B) => A.map((r) => B[0].map((_, j) => r.reduce((s, x, k) => s + x * B[k][j], 0)));
    const rnd = () => [[this.randInt(-3, 4), this.randInt(-3, 4)], [this.randInt(-3, 4), this.randInt(-3, 4)]];
    const MI = 'Saisir les coefficients ligne par ligne : (a ; b ; c ; d) pour la matrice $\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$.';
    if (tier === 1) {
      if (Math.random() < 0.4) {
        // combinaison linéaire de matrices
        const A = rnd(); const B = rnd();
        const al = this.randChoice([-3, -2, 2, 3]); const be = this.randChoice([-2, -1, 1, 2, 3]);
        const R = A.map((r, i) => r.map((x, j) => al * x + be * B[i][j]));
        const ex = this.poly([[al, 'A'], [be, 'B']]);
        const pR = M(R);
        const cands = [A.map((r, i) => r.map((x, j) => al * x - be * B[i][j])), A.map((r, i) => r.map((x, j) => al * x + B[i][j])), A.map((r, i) => r.map((x, j) => x + be * B[i][j])), R.map((r, i) => r.map((x, j) => (i === 0 && j === 0 ? x + 1 : x)))]
          .map(M).filter((x, i, arr) => x !== pR && arr.indexOf(x) === i).map((x) => `$${ex} = ${x}$`);
        return this._Tx(this.makeMcq('TX5', 1, 'Combinaison linéaire de matrices',
          'Additionner des matrices et les multiplier par un réel',
          `On donne $A = ${M(A)}$ et $B = ${M(B)}$. Calculer $${ex}$.`,
          `$${ex} = ${pR}$`, cands,
          'On calcule coefficient par coefficient.',
          `Le coefficient en position $(1, 1)$ vaut $${this._TGSX_sp([[al, A[0][0]], [be, B[0][0]]])}$.`,
          `Chaque coefficient de $${ex}$ s'obtient à partir des coefficients de même position : $${ex} = ${pR}$.`
        ), [R[0][0], R[0][1], R[1][0], R[1][1]], MI);
      }
      const A = rnd(); const B = rnd();
      const AB = mul(A, B); const BA = mul(B, A);
      const had = A.map((r, i) => r.map((x, j) => x * B[i][j]));
      const tw = [[AB[0][0], AB[1][0]], [AB[0][1], AB[1][1]]];
      const pAB = M(AB);
      const cands = [M(BA), M(had), M(tw), M([[AB[0][0] + 1, AB[0][1]], [AB[1][0], AB[1][1]]])].filter((x) => x !== pAB).map((x) => `$AB = ${x}$`);
      return this._Tx(this.makeMcq('TX5', 1, 'Produit de deux matrices carrées d\'ordre 2',
        "Multiplier ligne par colonne",
        `On donne $A = ${M(A)}$ et $B = ${M(B)}$. Calculer $AB$.`,
        `$AB = ${pAB}$`, cands,
        "Le coefficient $(AB)_{i,j}$ est le produit de la ligne $i$ de $A$ par la colonne $j$ de $B$.",
        "Attention : en général $AB \\neq BA$.",
        `$(AB)_{1,1} = ${this._TGSX_sp([[A[0][0], B[0][0]], [A[0][1], B[1][0]]])} = ${AB[0][0]}$, et de même pour les autres coefficients : $AB = ${pAB}$.`
      ), [AB[0][0], AB[0][1], AB[1][0], AB[1][1]], MI);
    }
    if (tier === 2) {
      const r2 = Math.random();
      if (r2 < 0.3) {
        // chemins de longueur 2 dans un graphe orienté (matrice d'adjacence)
        let G;
        do { G = [0, 1, 2].map(() => [0, 1, 2].map(() => (Math.random() < 0.5 ? 1 : 0))); } while (G.flat().reduce((s, x) => s + x, 0) < 4);
        const G2 = G.map((r) => [0, 1, 2].map((j) => r.reduce((s, x, k) => s + x * G[k][j], 0)));
        let i; let j;
        do { i = this.randInt(0, 2); j = this.randInt(0, 2); } while (G2[i][j] === 0 && Math.random() < 0.8);
        const n = G2[i][j];
        const M3 = (X) => `\\begin{pmatrix} ${X.map((r) => r.join(' & ')).join(' \\\\ ')} \\end{pmatrix}`;
        const via = [0, 1, 2].filter((k) => G[i][k] && G[k][j]).map((k) => `$${i + 1} \\to ${k + 1} \\to ${j + 1}$`);
        return this.makeMcq('TX5', 2, 'Chemins de longueur 2 dans un graphe',
          'Interpréter les coefficients de $M^2$ pour une matrice d\'adjacence',
          `Un graphe orienté de sommets $1$, $2$, $3$ a pour matrice d'adjacence $M = ${M3(G)}$ (le coefficient $(i, j)$ vaut $1$ s'il existe une arête de $i$ vers $j$). Combien existe-t-il de chemins de longueur $2$ allant du sommet $${i + 1}$ au sommet $${j + 1}$ ?`,
          `$${n}$`,
          [n + 1, G[i][j], n + 2, n === 0 ? 3 : n - 1].filter((x, k, arr) => x !== n && arr.indexOf(x) === k).map((x) => `$${x}$`),
          'Le nombre de chemins de longueur $2$ de $i$ vers $j$ est le coefficient $(i, j)$ de $M^2$.',
          `Calcule le produit de la ligne $${i + 1}$ de $M$ par la colonne $${j + 1}$ de $M$.`,
          `Le coefficient $(${i + 1}, ${j + 1})$ de $M^2$ vaut $${G[i].map((x, k) => `${x} \\times ${G[k][j]}`).join(' + ')} = ${n}$. ${n ? `Les chemins sont : ${via.join(', ')}.` : 'Aucun sommet intermédiaire ne convient.'}`
        );
      }
      if (r2 < 0.65) {
        let A; let det;
        do { A = rnd(); det = A[0][0] * A[1][1] - A[0][1] * A[1][0]; } while (det === 0 || Math.abs(det) > 6);
        const adj = [[A[1][1], -A[0][1]], [-A[1][0], A[0][0]]];
        const pre = (dd) => (dd === 1 ? '' : dd === -1 ? '-' : (dd < 0 ? '-' : '') + `\\frac{1}{${Math.abs(dd)}}`);
        const ans = `$A^{-1} = ${pre(det)}${M(adj)}$`;
        const cands = [`$A^{-1} = ${pre(-det)}${M(adj)}$`, `$A^{-1} = ${pre(det)}${M([[A[1][1], A[0][1]], [A[1][0], A[0][0]]])}$`, `$A^{-1} = ${pre(det)}${M([[A[0][0], -A[0][1]], [-A[1][0], A[1][1]]])}$`, `$A^{-1} = ${pre(det === 1 ? 2 : 1)}${M(adj)}$`].filter((x) => x !== ans);
        return this._Tx(this.makeMcq('TX5', 2, 'Inverse d\'une matrice carrée d\'ordre 2',
          "Utiliser $\\det(A) = ad - bc$ et $A^{-1} = \\frac{1}{ad - bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$",
          `On donne $A = ${M(A)}$. Justifier que $A$ est inversible et déterminer $A^{-1}$.`,
          ans, cands,
          "$A$ est inversible si et seulement si $\\det(A) = ad - bc \\neq 0$.",
          "On échange les coefficients diagonaux et on change le signe des deux autres.",
          `$\\det(A) = ${this._TGSX_sp([[A[0][0], A[1][1]], [-A[0][1], A[1][0]]])} = ${det} \\neq 0$, donc $A$ est inversible et ${ans.slice(1, -1).replace(/^/, '$')}$.`
        ), adj.flat().map((x) => this._Tq(x, det)), MI.replace('Saisir les coefficients', 'Saisir les coefficients de $A^{-1}$ (entiers ou fractions)'));
      }
      let b; let c; let d; let m;
      do { b = this.randNonZero(-5, 5); c = this.randNonZero(-5, 5); d = this.randChoice([-3, -2, -1, 1, 2, 3]); } while ((b * c) % d !== 0);
      m = (b * c) / d;
      return this.makeMcq('TX5', 2, 'Matrice non inversible',
        "Résoudre $\\det(A) = 0$",
        `Pour quelle valeur du réel $m$ la matrice $A = ${M([['m', b], [c, d]])}$ n'est-elle pas inversible ?`,
        `$m = ${m}$`,
        [`$m = ${-m}$`, `$m = ${b + c - d}$`, `$m = ${b * c * d}$`, `$m = ${m + 1}$`],
        "$A$ n'est pas inversible si et seulement si $\\det(A) = 0$.",
        `$\\det(A) = ${this.poly([[d, 'm'], [-b * c, '']])}$.`,
        `$\\det(A) = ${this.coefStr(d, 'm')} - ${this.paren(b)} \\times ${this.paren(c)} = ${this.poly([[d, 'm'], [-b * c, '']])}$, qui s'annule pour $m = ${m}$.`
      );
    }
    // chaînes de Markov à deux états
    let a; let b;
    do { a = this.randInt(1, 9); b = this.randInt(1, 9); } while (a === b);
    const P = [[this.dec((10 - a) / 10), this.dec(a / 10)], [this.dec(b / 10), this.dec((10 - b) / 10)]];
    const ctx = `Une chaîne de Markov à deux états $A$ et $B$ a pour matrice de transition $P = ${M(P)}$ (l'état $A$ correspond à la première ligne).`;
    if (tier === 3) {
      const x = this.randInt(0, 10); // pi0 = (x/10 ; 1 - x/10), en centièmes
      const p1 = (x * (10 - a) + (10 - x) * b); // en centièmes
      const D = (c) => this.dec(c / 100);
      const R = (u) => `$\\pi_1 = (${D(u)} ; ${D(100 - u)})$`;
      const alt = x * (10 - a) + (10 - x) * (10 - b);
      return this.makeMcq('TX5', 3, 'Évolution d\'une chaîne de Markov',
        "Calculer $\\pi_1 = \\pi_0 P$",
        `${ctx} La loi initiale est $\\pi_0 = (${this.dec(x / 10)} ; ${this.dec(1 - x / 10)})$. Déterminer la loi $\\pi_1$ après une étape.`,
        R(p1),
        [R(x * (10 - a) + (10 - x) * a), R(100 - p1), R(alt <= 100 ? alt : (alt % 100)), R(Math.min(100, p1 + 10))].filter((s) => s !== R(p1)),
        "La loi après une étape est le produit du vecteur ligne $\\pi_0$ par la matrice $P$.",
        "La première composante est $\\pi_0(A) \\times p_{AA} + \\pi_0(B) \\times p_{BA}$.",
        `$\\pi_1 = \\pi_0 P$ : $\\pi_1(A) = ${this.dec(x / 10)} \\times ${P[0][0]} + ${this.dec(1 - x / 10)} \\times ${P[1][0]} = ${D(p1)}$ et $\\pi_1(B) = 1 - ${D(p1)} = ${D(100 - p1)}$.`
      );
    }
    const pa = this.frac(b, a + b); const pb = this.frac(a, a + b);
    const R = (u, v) => `$\\pi = \\left(${u} ; ${v}\\right)$`;
    return this.makeMcq('TX5', 4, 'État stable d\'une chaîne de Markov',
      "Résoudre $\\pi P = \\pi$ avec $\\pi_1 + \\pi_2 = 1$",
      `${ctx} Déterminer l'état stable $\\pi = (x ; y)$, c'est-à-dire la loi vérifiant $\\pi P = \\pi$ et $x + y = 1$.`,
      R(pa, pb),
      [R(pb, pa), R('\\frac{1}{2}', '\\frac{1}{2}'), R(this.frac(10 - a, 20 - a - b), this.frac(10 - b, 20 - a - b)), R(this.frac(a, 10), this.frac(10 - a, 10)), R(this.frac(b, 10), this.frac(10 - b, 10)), R(this.frac(b + 1, a + b + 1), this.frac(a, a + b + 1))].filter((s) => s !== R(pa, pb)),
      "L'équation $\\pi P = \\pi$ donne $x = " + `${P[0][0]}x + ${P[1][0]}y$.`,
      "Utilise ensuite $y = 1 - x$.",
      `$\\pi P = \\pi$ donne $${P[0][1]}x = ${P[1][0]}y$. Avec $x + y = 1$ : $${P[0][1]}x = ${P[1][0]}(1 - x)$, d'où $x = \\frac{${P[1][0]}}{${P[0][1]} + ${P[1][0]}} = ${pa}$ et $y = ${pb}$. Donc ${R(pa, pb)}.`
    );
  },

  // ---------------------------------------------------------------------
  // TS3 : Dénombrement et combinatoire
  // ---------------------------------------------------------------------
  _TS3_fact(n) { let r = 1; for (let i = 2; i <= n; i++) r *= i; return r; },
  _TS3_A(n, k) { let r = 1; for (let i = 0; i < k; i++) r *= n - i; return r; },
  _TS3_C(n, k) {
    if (k < 0 || k > n) return 0;
    let r = 1;
    for (let i = 1; i <= k; i++) r = r * (n - k + i) / i;
    return Math.round(r);
  },
  /** Entier avec espaces fines de milliers : 2598960 -> "2\\,598\\,960" */
  _TS3_n(v) { return String(v).replace(/\B(?=(\d{3})+(?!\d))/g, '\\,'); },
  /** QCM dont la réponse est « $N = valeur$ » ; distracteurs entiers positifs distincts de la valeur */
  _TS3_mcq(tier, title, skill, statement, val, wrongs, h1, h2, sol) {
    const F = (x) => `$N = ${this._TS3_n(x)}$`;
    const ws = [...new Set(wrongs.filter((w) => Number.isInteger(w) && w > 0 && w !== val))].map(F);
    return this.makeMcq('TS3', tier, title, skill, statement, F(val), ws, h1, h2, sol);
  },

  gen_TS3(tier) {
    const fa = (n) => this._TS3_fact(n);
    const A = (n, k) => this._TS3_A(n, k);
    const C = (n, k) => this._TS3_C(n, k);
    const N = (v) => this._TS3_n(v);
    const pw = (n, k) => n ** k;
    const sg = (i, t) => (i > 1 ? t : { as: 'as', rois: 'roi', 'cœurs': 'cœur', piques: 'pique', 'boules rouges': 'boule rouge' }[t]);
    if (tier === 1) {
      const fam = this.randInt(0, 3);
      if (fam === 0) {
        const n = this.randInt(2, 10);
        const k = this.randInt(2, 5);
        const ctx = this.randChoice([
          `Avec un alphabet de ${n} lettres, on forme des mots de ${k} lettres (ayant un sens ou non), une même lettre pouvant être répétée.`,
          `Un cadenas possède des molettes portant chacune ${n} symboles ; il comporte ${k} molettes, et un code est la liste des symboles affichés (répétitions possibles).`,
          `Chaque question d'un QCM propose ${n} réponses dont on coche exactement une ; le QCM comporte ${k} questions et l'on s'intéresse aux grilles de réponses possibles.`
        ]);
        return this._TS3_mcq(1, 'Listes avec répétition (k-uplets)', 'Dénombrer des $k$-uplets : $n^k$',
          `${ctx} Déterminer le nombre $N$ de possibilités.`,
          pw(n, k), [pw(k, n), A(n, k), C(n, k), n * k, pw(n, k - 1)],
          'Chaque position se choisit indépendamment des autres, parmi les mêmes possibilités.',
          `Il y a ${n} choix pour chacune des ${k} positions : principe multiplicatif.`,
          `On dénombre des ${k}-uplets d'un ensemble à ${n} éléments : $N = ${n}^{${k}} = ${N(pw(n, k))}$.`);
      }
      if (fam === 1) {
        const n = this.randInt(4, 9);
        const ctx = this.randChoice([
          `De combien de façons peut-on ranger ${n} livres distincts côte à côte sur une étagère ?`,
          `${n} élèves passent un oral l'un après l'autre. Combien d'ordres de passage sont possibles ?`,
          `${n} personnes s'assoient sur ${n} chaises alignées. Combien de placements sont possibles ?`
        ]);
        return this._TS3_mcq(1, 'Permutations', 'Dénombrer les permutations : $n!$',
          `${ctx} On note $N$ ce nombre.`,
          fa(n), [pw(n, n), fa(n - 1), n * (n - 1), fa(n + 1), pw(n, 2)],
          'On ordonne tous les éléments : c\'est une permutation.',
          `$N = ${n}! = ${Array.from({ length: n }, (_, i) => n - i).join(' \\times ')}$.`,
          `Il y a ${n} choix pour la première place, ${n - 1} pour la deuxième, etc. : $N = ${n}! = ${N(fa(n))}$.`);
      }
      if (fam === 2) {
        const n = this.randInt(6, 20);
        const k = this.randInt(2, 4);
        const ctx = this.randChoice([
          `Une association de ${n} membres élit un bureau de ${k} personnes occupant des postes tous différents.`,
          `Une course oppose ${n} concurrents ; on s'intéresse au classement des ${k} premiers (sans ex æquo).`,
          `Parmi ${n} candidats, un jury attribue ${k} prix différents (premier prix, deuxième prix, etc.), chaque candidat recevant au plus un prix.`
        ]);
        return this._TS3_mcq(1, 'Arrangements', 'Dénombrer des arrangements : $\\frac{n!}{(n-k)!}$',
          `${ctx} Déterminer le nombre $N$ de résultats possibles.`,
          A(n, k), [C(n, k), pw(n, k), n * k, A(n, k - 1), A(n, k + 1)],
          'L\'ordre compte et il n\'y a pas de répétition : c\'est un arrangement.',
          `$N = ${Array.from({ length: k }, (_, i) => n - i).join(' \\times ')}$.`,
          `On choisit successivement ${k} personnes distinctes parmi ${n}, l'ordre comptant : $N = \\frac{${n}!}{${n - k}!} = ${Array.from({ length: k }, (_, i) => n - i).join(' \\times ')} = ${N(A(n, k))}$.`);
      }
      const n = this.randInt(8, 35);
      const k = this.randInt(2, 4);
      const ctx = this.randChoice([
        `Une classe de ${n} élèves désigne ${k} représentants, sans distinction de rôle.`,
        `Un restaurant propose ${n} desserts ; un menu dégustation en comporte ${k} différents (l'ordre de service n'importe pas).`,
        `Dans un sac de ${n} jetons tous différents, on prend une poignée de ${k} jetons.`
      ]);
      return this._TS3_mcq(1, 'Combinaisons', 'Dénombrer des combinaisons : $\\binom{n}{k}$',
        `${ctx} Déterminer le nombre $N$ de choix possibles.`,
        C(n, k), [A(n, k), pw(n, k), n * k, C(n, k - 1), C(n, k + 1)],
        'L\'ordre ne compte pas et il n\'y a pas de répétition : c\'est une combinaison.',
        `$N = \\binom{${n}}{${k}} = \\frac{${Array.from({ length: k }, (_, i) => n - i).join(' \\times ')}}{${k}!}$.`,
        `On choisit une partie à ${k} éléments d'un ensemble à ${n} éléments : $N = \\binom{${n}}{${k}} = \\frac{${Array.from({ length: k }, (_, i) => n - i).join(' \\times ')}}{${Array.from({ length: k }, (_, i) => k - i).join(' \\times ')}} = ${N(C(n, k))}$.`);
    }
    if (tier === 2) {
      const fam = this.randInt(0, 3);
      if (fam === 0) {
        const word = this.randChoice(['MATHS', 'CHIEN', 'PIANO', 'FLEUR', 'NOMBRE', 'POMME', 'LYCEE', 'BANANE', 'ANANAS', 'CALCUL', 'PAPILLON', 'ELEVE', 'RADAR', 'COLLEGE', 'ALGEBRE', 'TOMATE', 'CERISE', 'VECTEUR']);
        const cnt = {};
        for (const ch of word) cnt[ch] = (cnt[ch] || 0) + 1;
        const reps = Object.entries(cnt).filter(([, m]) => m > 1);
        const den = reps.reduce((p, [, m]) => p * fa(m), 1);
        const val = fa(word.length) / den;
        const denTex = reps.map(([, m]) => `${m}!`).join(' \\times ');
        const sol = reps.length
          ? `Le mot a ${word.length} lettres ; ${reps.map(([c, m]) => `la lettre ${c} apparaît ${m} fois`).join(', ')}. Permuter des lettres identiques ne change pas le mot, d'où $N = \\frac{${word.length}!}{${denTex}} = \\frac{${N(fa(word.length))}}{${den}} = ${N(val)}$.`
          : `Les ${word.length} lettres sont distinctes : $N = ${word.length}! = ${N(val)}$.`;
        return this._TS3_mcq(2, 'Anagrammes', 'Dénombrer les permutations d\'un mot',
          `Déterminer le nombre $N$ d'anagrammes (ayant un sens ou non, le mot lui-même compris) du mot « ${word} ».`,
          val, [fa(word.length), pw(word.length, word.length), fa(word.length - 1), val * 2, fa(Object.keys(cnt).length)],
          'Commence par compter les permutations des lettres comme si elles étaient toutes distinctes.',
          'Divise ensuite par le nombre de façons de permuter entre elles les lettres répétées.',
          sol);
      }
      if (fam === 1) {
        const n = this.randInt(5, 12);
        const k = this.randInt(2, 4);
        const mode = this.randInt(0, 2);
        const val = mode === 0 ? pw(n, k) : mode === 1 ? A(n, k) : C(n, k);
        const how = ['successivement et avec remise', 'successivement et sans remise', 'simultanément'][mode];
        const what = mode === 2 ? 'tirages (ensembles de boules) possibles' : 'tirages (listes ordonnées de numéros) possibles';
        const sol = mode === 0 ? `Avec remise, chaque tirage offre ${n} possibilités : $N = ${n}^{${k}} = ${N(val)}$ ($${k}$-uplets).`
          : mode === 1 ? `Sans remise et dans l'ordre : arrangements, $N = ${Array.from({ length: k }, (_, i) => n - i).join(' \\times ')} = ${N(val)}$.`
            : `Simultanément, l'ordre ne compte pas : $N = \\binom{${n}}{${k}} = ${N(val)}$.`;
        return this._TS3_mcq(2, 'Tirages dans une urne', 'Choisir le bon modèle de dénombrement',
          `Une urne contient ${n} boules numérotées de 1 à ${n}. On tire ${how} ${k} boules. Déterminer le nombre $N$ de ${what}.`,
          val, [pw(n, k), A(n, k), C(n, k), pw(k, n), n * k],
          'Demande-toi si l\'ordre compte et si les répétitions sont possibles.',
          'Avec remise : $n^k$ ; sans remise et ordonné : $\\frac{n!}{(n-k)!}$ ; simultané : $\\binom{n}{k}$.',
          sol);
      }
      if (fam === 2) {
        const n = this.randInt(5, 14);
        const k = this.randInt(1, n - 2);
        const a = C(n, k); const b = C(n, k + 1);
        return this._TS3_mcq(2, 'Relation de Pascal', 'Utiliser $\\binom{n}{k} + \\binom{n}{k+1} = \\binom{n+1}{k+1}$',
          `On donne $\\binom{${n}}{${k}} = ${N(a)}$ et $\\binom{${n}}{${k + 1}} = ${N(b)}$. Déterminer $N = \\binom{${n + 1}}{${k + 1}}$.`,
          a + b, [a * b, Math.abs(b - a), C(n + 1, k), 2 * b, a + b + 1],
          'Pense au triangle de Pascal : chaque coefficient est la somme des deux coefficients situés au-dessus.',
          `$\\binom{${n + 1}}{${k + 1}} = \\binom{${n}}{${k}} + \\binom{${n}}{${k + 1}}$.`,
          `Par la relation de Pascal, $N = ${N(a)} + ${N(b)} = ${N(a + b)}$.`);
      }
      const n = this.randInt(3, 12);
      const mode = this.randInt(0, 2);
      const k = this.randInt(2, n - 1);
      const val = mode === 0 ? pw(2, n) : mode === 1 ? pw(2, n) - 1 : C(n, k);
      const what = mode === 0 ? 'parties de $E$ (y compris l\'ensemble vide et $E$ lui-même)' : mode === 1 ? 'parties non vides de $E$' : `parties de $E$ à ${k} éléments`;
      return this._TS3_mcq(2, 'Parties d\'un ensemble', 'Dénombrer les parties d\'un ensemble fini',
        `Un ensemble $E$ possède ${n} éléments. Déterminer le nombre $N$ de ${what}.`,
        val, [pw(2, n), pw(2, n) - 1, pw(n, 2), C(n, k), 2 * n, fa(n)],
        'Pour former une partie, chaque élément est soit pris, soit laissé.',
        mode === 2 ? 'Une partie à $k$ éléments est une combinaison.' : `Il y a $2^{${n}}$ parties au total.`,
        mode === 0 ? `Chaque élément est pris ou non : $N = 2^{${n}} = ${N(val)}$.` : mode === 1 ? `Il y a $2^{${n}} = ${N(val + 1)}$ parties, dont une seule est vide : $N = ${N(val)}$.` : `$N = \\binom{${n}}{${k}} = ${N(val)}$.`);
    }
    if (tier === 3) {
      const fam = this.randInt(0, 3);
      if (fam === 0) {
        const k = this.randInt(3, 5);
        const f = this.randInt(k, 12); const g = this.randInt(k + 1, 12);
        const mode = this.randInt(0, 2);
        let val; let what; let sol;
        if (mode === 0) {
          const i = this.randInt(1, Math.min(k - 1, f));
          val = C(f, i) * C(g, k - i);
          what = `exactement ${i} fille${i > 1 ? 's' : ''}`;
          sol = `On choisit les ${i} fille${i > 1 ? 's' : ''} parmi ${f} puis les ${k - i} garçon${k - i > 1 ? 's' : ''} parmi ${g} : $N = \\binom{${f}}{${i}} \\times \\binom{${g}}{${k - i}} = ${C(f, i)} \\times ${C(g, k - i)} = ${N(val)}$.`;
        } else if (mode === 1) {
          val = C(f + g, k) - C(g, k);
          what = 'au moins une fille';
          sol = `On passe par le contraire « aucune fille » : $N = \\binom{${f + g}}{${k}} - \\binom{${g}}{${k}} = ${N(C(f + g, k))} - ${N(C(g, k))} = ${N(val)}$.`;
        } else {
          val = C(g, k) + f * C(g, k - 1);
          what = 'au plus une fille';
          sol = `Aucune fille : $\\binom{${g}}{${k}} = ${N(C(g, k))}$ ; exactement une fille : $${f} \\times \\binom{${g}}{${k - 1}} = ${N(f * C(g, k - 1))}$. Cas disjoints : $N = ${N(val)}$.`;
        }
        return this._TS3_mcq(3, 'Délégation avec contrainte', 'Combiner principe multiplicatif, additif et complémentaire',
          `Un groupe est formé de ${f} filles et ${g} garçons. On choisit une délégation de ${k} personnes (sans rôle particulier). Déterminer le nombre $N$ de délégations comprenant ${what}.`,
          val, [C(f + g, k), C(f + g, k) - C(g, k), C(g, k) + f * C(g, k - 1), C(f, 1) * C(g, k - 1), A(f + g, k), C(f, 2) * C(g, k - 2) || 0],
          'Découpe le problème : choix des filles, puis choix des garçons.',
          mode === 1 ? 'Le contraire de « au moins une fille » est « aucune fille ».' : 'Utilise le principe multiplicatif pour chaque cas, puis additionne les cas disjoints.',
          sol);
      }
      if (fam === 1) {
        const deck = this.randChoice([[32, 4, 'as'], [52, 4, 'rois'], [32, 8, 'cœurs'], [52, 13, 'piques']]);
        const [D, a, type] = deck;
        const k = this.randInt(3, 5);
        const i = this.randInt(1, Math.min(3, k - 1));
        const val = C(a, i) * C(D - a, k - i);
        return this._TS3_mcq(3, 'Mains de cartes', 'Dénombrer des mains avec une condition',
          `Un jeu de ${D} cartes contient ${a} ${type}. On tire simultanément ${k} cartes. Déterminer le nombre $N$ de mains contenant exactement ${i} ${sg(i, type)}.`,
          val, [C(D, k), C(a, i), C(a, i) + C(D - a, k - i), C(a, i) * C(D, k - i), A(a, i) * A(D - a, k - i), C(a, i) * C(D - a, k)],
          'Une main est une partie de l\'ensemble des cartes : l\'ordre ne compte pas.',
          `Choisis ${i} ${sg(i, type)} parmi ${a}, puis ${k - i > 1 ? `les ${k - i} autres cartes` : 'la dernière carte'} parmi les ${D - a} restantes.`,
          `$N = \\binom{${a}}{${i}} \\times \\binom{${D - a}}{${k - i}} = ${N(C(a, i))} \\times ${N(C(D - a, k - i))} = ${N(val)}$.`);
      }
      if (fam === 2) {
        const l = this.randInt(1, 3); const c = this.randInt(1, 4);
        const distinct = Math.random() < 0.5;
        const val = (distinct ? A(26, l) : pw(26, l)) * pw(10, c);
        return this._TS3_mcq(3, 'Codes mixtes', 'Appliquer le principe multiplicatif à des codes',
          `Un identifiant est formé de ${l} lettre${l > 1 ? 's' : ''} (choisie${l > 1 ? 's' : ''} dans l'alphabet de 26 lettres) suivie${l > 1 ? 's' : ''} de ${c} chiffre${c > 1 ? 's' : ''} (de 0 à 9). ${distinct && l > 1 ? 'Les lettres sont deux à deux distinctes, les chiffres peuvent se répéter.' : 'Les répétitions sont autorisées.'} Déterminer le nombre $N$ d'identifiants possibles.`,
          val, [pw(26, l) * pw(10, c), A(26, l) * pw(10, c), A(26, l) * A(10, c), pw(26, l) + pw(10, c), pw(36, l + c), C(26, l) * pw(10, c)],
          'Les choix des lettres et des chiffres sont successifs : on multiplie.',
          distinct && l > 1 ? 'Pour les lettres distinctes : $26 \\times 25 \\times \\dots$' : 'Chaque position offre 26 (lettre) ou 10 (chiffre) possibilités.',
          `$N = ${distinct && l > 1 ? Array.from({ length: l }, (_, i) => 26 - i).join(' \\times ') : (l > 1 ? `26^{${l}}` : '26')} \\times ${c > 1 ? `10^{${c}}` : '10'} = ${N(val)}$.`);
      }
      const k = this.randInt(2, 6);
      const ev = Math.random() < 0.5;
      const val = ev ? 9 * A(9, k - 1) : 9 * pw(10, k - 1);
      return this._TS3_mcq(3, 'Nombres entiers et chiffres', 'Dénombrer avec une contrainte sur la première position',
        `On considère les entiers naturels qui s'écrivent avec exactement ${k} chiffres (le premier chiffre n'est donc pas 0). Déterminer le nombre $N$ de ces entiers ${ev ? 'dont les chiffres sont deux à deux distincts' : '(sans autre contrainte)'}.`,
        val, [9 * A(9, k - 1), 9 * pw(10, k - 1), A(10, k), pw(10, k), 9 * pw(9, k - 1)],
        'Traite d\'abord le premier chiffre, qui ne peut pas être 0.',
        ev ? 'Le premier chiffre : 9 choix ; ensuite il reste 9, puis 8, … chiffres disponibles.' : 'Le premier chiffre : 9 choix ; chacun des autres : 10 choix.',
        ev ? `$N = 9 \\times ${Array.from({ length: k - 1 }, (_, i) => 9 - i).join(' \\times ')} = ${N(val)}$.` : `$N = 9 \\times ${k - 1 > 1 ? `10^{${k - 1}}` : '10'} = ${N(val)}$.`);
    }
    // tier 4
    const fam = this.randInt(0, 4);
    if (fam === 0) {
      const deck = this.randChoice([[32, 4, 'as'], [52, 4, 'rois'], [32, 8, 'cœurs'], [52, 13, 'piques'], [10, 4, 'boules rouges'], [12, 5, 'boules rouges']]);
      const [D, a, type] = deck;
      const k = this.randInt(2, 4);
      const i = this.randInt(1, Math.min(2, k));
      const fav = C(a, i) * C(D - a, k - i); const tot = C(D, k);
      const Fr = (x, y) => `$${this.frac(x, y)}$`;
      return this.makeMcq('TS3', 4, 'Probabilité par dénombrement', 'Calculer une probabilité dans une situation d\'équiprobabilité',
        `Un ${D <= 12 ? 'sac' : 'jeu'} de ${D} ${D <= 12 ? 'boules' : 'cartes'} contient ${a} ${type}. On tire simultanément et au hasard ${k} ${D <= 12 ? 'boules' : 'cartes'}. Quelle est la probabilité d'obtenir exactement ${i} ${sg(i, type)} ?`,
        Fr(fav, tot),
        [[C(a, i), tot], [a, D], [fav, A(D, k)], [C(D - a, k), tot], [tot - fav, tot], [i, k]].filter(([x, y]) => x > 0 && x < y).map(([x, y]) => Fr(x, y)),
        'Équiprobabilité : $P = \\frac{\\text{nombre de cas favorables}}{\\text{nombre de cas possibles}}$.',
        `Cas possibles : $\\binom{${D}}{${k}} = ${N(tot)}$.`,
        `Cas possibles : $\\binom{${D}}{${k}} = ${N(tot)}$. Cas favorables : $\\binom{${a}}{${i}} \\times \\binom{${D - a}}{${k - i}} = ${N(fav)}$. Donc $P = \\frac{${N(fav)}}{${N(tot)}}${this.gcd(fav, tot) > 1 ? ' = ' + this.frac(fav, tot) : ''}$.`);
    }
    if (fam === 1) {
      const a = this.randInt(2, 7); const b = this.randInt(2, 7);
      return this._TS3_mcq(4, 'Chemins dans un quadrillage', 'Modéliser un chemin par une combinaison',
        `Dans un repère, on va du point $O(0 ; 0)$ au point $B(${a} ; ${b})$ en se déplaçant uniquement d'une unité vers la droite ou d'une unité vers le haut. Déterminer le nombre $N$ de chemins possibles.`,
        C(a + b, a), [pw(2, a + b), a * b, A(a + b, a), fa(a + b), C(a + b, a) * 2],
        `Un chemin compte ${a + b} pas au total, dont ${a} vers la droite.`,
        `Un chemin est déterminé par le choix des positions des ${a} pas vers la droite parmi les ${a + b} pas.`,
        `$N = \\binom{${a + b}}{${a}} = ${N(C(a + b, a))}$.`);
    }
    if (fam === 2) {
      const n = this.randInt(5, 30);
      const diag = Math.random() < 0.5;
      const val = diag ? n * (n - 3) / 2 : C(n, 2);
      return this._TS3_mcq(4, diag ? 'Diagonales d\'un polygone' : 'Poignées de main', 'Modéliser par des paires (combinaisons de 2 éléments)',
        diag ? `Un polygone convexe possède ${n} sommets. Déterminer le nombre $N$ de ses diagonales.`
          : `Lors d'une réunion de ${n} personnes, chacune serre une fois la main de chacune des autres. Déterminer le nombre $N$ de poignées de main échangées.`,
        val, [C(n, 2), n * (n - 3) / 2, n * (n - 1), n * n, C(n, 2) + n],
        diag ? 'Un segment joignant deux sommets correspond à une paire de sommets, sans ordre.' : 'Une poignée de main correspond à une paire de personnes, sans ordre.',
        diag ? `Parmi les $\\binom{${n}}{2}$ segments joignant deux sommets, ${n} sont des côtés.` : `Il s'agit de $\\binom{${n}}{2}$.`,
        diag ? `$N = \\binom{${n}}{2} - ${n} = ${C(n, 2)} - ${n} = ${val}$.` : `$N = \\binom{${n}}{2} = \\frac{${n} \\times ${n - 1}}{2} = ${val}$.`);
    }
    if (fam === 3) {
      const n = this.randChoice([6, 8, 10]);
      const k = this.randInt(2, 4);
      const fav = A(n, k); const tot = pw(n, k);
      const Fr = (x, y) => `$${this.frac(x, y)}$`;
      return this.makeMcq('TS3', 4, 'Probabilité et listes', 'Comparer arrangements et $k$-uplets',
        `On lance ${k} fois un dé équilibré à ${n} faces numérotées de 1 à ${n} et on note la liste des résultats. Quelle est la probabilité que les ${k} résultats soient deux à deux distincts ?`,
        Fr(fav, tot),
        [Fr(C(n, k), tot), Fr(fav, tot * 2), Fr(tot - fav, tot), Fr(1, fa(k)), Fr(n - k, n)],
        `Il y a $${n}^{${k}}$ listes équiprobables.`,
        `Les listes sans répétition sont des arrangements : $${Array.from({ length: k }, (_, i) => n - i).join(' \\times ')}$.`,
        `$P = \\frac{${Array.from({ length: k }, (_, i) => n - i).join(' \\times ')}}{${n}^{${k}}} = \\frac{${fav}}{${tot}}${this.gcd(fav, tot) > 1 ? ` = ${this.frac(fav, tot)}` : ''}$.`);
    }
    const n = this.randInt(4, 14);
    const val = pw(2, n) - 1 - n;
    return this._TS3_mcq(4, 'Parties d\'au moins deux éléments', 'Utiliser $\\sum \\binom{n}{k} = 2^n$',
      `Un ensemble $E$ possède ${n} éléments. Déterminer le nombre $N$ de parties de $E$ comportant au moins deux éléments.`,
      val, [pw(2, n), pw(2, n) - 1, pw(2, n) - n, C(n, 2), pw(2, n) - 2],
      'Compte toutes les parties, puis retire celles qui ont 0 ou 1 élément.',
      `Il y a $2^{${n}}$ parties, dont $\\binom{${n}}{0} = 1$ à 0 élément et $\\binom{${n}}{1} = ${n}$ à 1 élément.`,
      `$N = 2^{${n}} - 1 - ${n} = ${N(pw(2, n))} - ${n + 1} = ${N(val)}$.`);
  },

  // =========================================================================
  // TS4 : Algorithmique et programmation (Python) — Terminale spécialité
  // =========================================================================
  _TS4_py(lines) {
    return '\n```python\n' + lines.join('\n') + '\n```\n';
  },

  _TS4_n(v) {
    return `$${Number.isInteger(v) ? v : this.dec(v, 6)}$`;
  },

  /** Affichage Python d'un nombre : entier (isF = false) ou flottant (1.0, 2.6875) */
  _TS4_pyr(v, isF) {
    if (!isF) return String(v);
    return Number.isInteger(v) ? v + '.0' : String(v);
  },

  /** Écart minimal entre des valeurs et un seuil (évite les cas limites d'arrondi) */
  _TS4_safe(vals, S) {
    return vals.every((v) => Math.abs(v - S) > 1e-7 * Math.max(1, Math.abs(S)));
  },

  gen_TS4(tier) {
    const T = 'TS4';
    const P = (l) => this._TS4_py(l);
    const N = (v) => this._TS4_n(v);
    if (tier === 1) {
      const fam = this.randInt(0, 3);
      if (fam === 0) {
        // Affectation simultanée (suites récurrentes d'ordre 2)
        const forms = [
          ['a + b', (a, b) => a + b],
          ['a + 2 * b', (a, b) => a + 2 * b],
          ['b - a', (a, b) => b - a],
          ['2 * a + b', (a, b) => 2 * a + b],
          ['3 * b - 2 * a', (a, b) => 3 * b - 2 * a]
        ];
        const [ft, ff] = this.randChoice(forms);
        const A = this.randInt(0, 4);
        const B = this.randInt(1, 5);
        const n = this.randInt(3, 6);
        const st = [[A, B]];
        for (let k = 0; k < n + 1; k++) { const [a, b] = st[k]; st.push([b, ff(a, b)]); }
        const which = this.randChoice(['a', 'b']);
        const w = which === 'a' ? 0 : 1;
        const val = st[n][w];
        // Erreur typique : affectations successives au lieu de simultanées
        let a = A; let b = B;
        for (let k = 0; k < n; k++) { a = b; b = ff(a, b); }
        const seq = which === 'a' ? a : b;
        return this.makeMcq(T, 1, 'Affectation simultanée',
          'Exécuter une affectation simultanée dans une boucle',
          `Qu'affiche le programme Python suivant ?${P([`a, b = ${A}, ${B}`, `for k in range(${n}):`, `    a, b = b, ${ft}`, `print(${which})`])}`,
          N(val),
          [N(st[n][1 - w]), N(st[n - 1][w]), N(st[n + 1][w]), N(seq)],
          'Dans `a, b = b, …`, le membre de droite est entièrement évalué **avant** les affectations.',
          `Note le couple (\`a\` ; \`b\`) après chacun des ${n} tours.`,
          `Couples (\`a\` ; \`b\`) successifs : ${st.slice(0, n + 1).map(([x, y]) => `(${x} ; ${y})`).join(' → ')}. Le programme affiche ${N(val)}.`
        );
      }
      if (fam === 1) {
        // Compréhension avec filtre et fonctions de liste
        const n0 = this.randInt(10, 30);
        const d = this.randChoice([2, 3, 4, 5]);
        const r = this.randInt(0, d - 1);
        const sq = Math.random() < 0.5;
        const L = [];
        for (let k = 1; k < n0; k++) if (k % d === r) L.push(sq ? k * k : 2 * k);
        if (L.length < 3) return this.gen_TS4(1);
        const ask = this.randInt(0, 2);
        const expr = ['len(L)', 'sum(L)', 'max(L) - min(L)'][ask];
        const val = [L.length, L.reduce((x, y) => x + y, 0), Math.max(...L) - Math.min(...L)][ask];
        const L2 = [];
        for (let k = 1; k <= n0; k++) if (k % d === r) L2.push(sq ? k * k : 2 * k);
        const v2 = [L2.length, L2.reduce((x, y) => x + y, 0), Math.max(...L2) - Math.min(...L2)][ask];
        return this.makeMcq(T, 1, 'Liste en compréhension filtrée',
          'Construire une liste en compréhension avec condition',
          `Qu'affiche le programme Python suivant ?${P([`L = [${sq ? 'k * k' : '2 * k'} for k in range(1, ${n0}) if k % ${d} == ${r}]`, `print(${expr})`])}`,
          N(val),
          [N(v2 === val ? val + (sq ? 1 : 2) : v2), N(val - (ask === 0 ? 1 : L[L.length - 1])), N(ask === 1 ? L.length : val + L[0])],
          `On garde les entiers $k$ de 1 à ${n0 - 1} dont le reste dans la division par ${d} vaut ${r}.`,
          '`sum`, `max`, `min` et `len` s\'appliquent directement à une liste.',
          `\`L = [${L.join(', ')}]\`, donc \`${expr}\` vaut ${N(val)}.`
        );
      }
      if (fam === 2) {
        // Moyenne d'une liste
        const len = this.randChoice([4, 5, 8]);
        let L; let s;
        do { L = Array.from({ length: len }, () => this.randInt(0, 20)); s = L.reduce((x, y) => x + y, 0); } while (s % len === 0);
        return this.makeMcq(T, 1, 'Fonction moyenne',
          'Écrire une fonction parcourant une liste',
          `Qu'affiche le programme Python suivant ?${P(['def moyenne(L):', '    s = 0', '    for x in L:', '        s = s + x', '    return s / len(L)', '', `print(moyenne([${L.join(', ')}]))`])}`,
          N(s / len),
          [N(Math.floor(s / len)), N(s), N(s / (len - 1)), N(s / (len + 1))],
          '`len(L)` est le nombre d\'éléments de la liste.',
          'La division `/` donne un résultat décimal.',
          `La somme des éléments vaut $${s}$ et la liste en contient $${len}$ : \`moyenne\` renvoie $\\frac{${s}}{${len}} = ${this.dec(s / len, 6)}$.`.replace(`\\frac{${s}}{${len}}`, this.gcd(s, len) > 1 ? `${s} \\div ${len}` : `\\frac{${s}}{${len}}`)
        );
      }
      // Recherche d'un élément
      const L = this.pickDistinct(Array.from({ length: 30 }, (_, i) => i + 1), this.randInt(5, 8));
      const absent = Math.random() < 0.25;
      let v;
      if (absent) { v = this.randInt(1, 30); while (L.includes(v)) v = this.randInt(1, 30); } else v = this.randChoice(L);
      const i = L.indexOf(v);
      return this.makeMcq(T, 1, 'Recherche dans une liste',
        'Comprendre une recherche séquentielle',
        `Qu'affiche le programme Python suivant ?${P(['def position(L, v):', '    for i in range(len(L)):', '        if L[i] == v:', '            return i', '    return -1', '', `print(position([${L.join(', ')}], ${v}))`])}`,
        N(i),
        absent ? [N(L.length), N(0), N(L.length - 1)] : [N(i + 1), N(-1), N(v)],
        'La fonction renvoie le premier indice où `v` apparaît ; les indices commencent à 0.',
        '`return -1` n\'est exécuté que si la boucle se termine sans trouver `v`.',
        absent ? `${v} n'apparaît pas dans la liste : la boucle se termine et la fonction renvoie $-1$.` : `${v} est l'élément n° ${i + 1} de la liste, d'indice ${i} : la fonction renvoie ${N(i)}.`
      );
    }
    if (tier === 2) {
      const fam = this.randInt(0, 2);
      if (fam === 0) {
        // Suite convergente et précision
        const a = this.randChoice([0.5, 0.8, 0.9, -0.5, 0.25, 0.75]);
        const l = this.randInt(1, 10);
        const b = Math.round(l * (1 - a) * 100) / 100;
        const u0 = l + this.randNonZero(-20, 20);
        const eps = this.randChoice([0.1, 0.01, 0.001]);
        let u = u0; let n = 0; const errs = [Math.abs(u - l)];
        while (Math.abs(u - l) > eps) { u = a * u + b; n++; errs.push(Math.abs(u - l)); }
        if (!this._TS4_safe(errs, eps) || n < 2) return this.gen_TS4(2);
        const k = Math.round(-Math.log10(eps));
        return this.makeMcq(T, 2, 'Approcher une limite',
          'Déterminer un rang à partir duquel une suite approche sa limite',
          `La suite définie par $u_0 = ${u0}$ et $u_{n+1} = ${this.dec(a)}u_n + ${this.dec(b)}$ converge vers $${l}$. Qu'affiche le programme suivant ?${P([`u = ${u0}`, 'n = 0', `while abs(u - ${l}) > ${eps}:`, `    u = ${a} * u + ${b}`, '    n = n + 1', 'print(n)'])}`,
          N(n),
          [N(n - 1), N(n + 1), N(n + k)],
          `On a $u_n - ${l} = (u_0 - ${l}) \\times (${this.dec(a)})^n$.`,
          `Cherche le premier $n$ tel que $|u_n - ${l}| \\le 10^{-${k}}$.`,
          `$|u_n - ${l}| = ${Math.abs(u0 - l)} \\times ${this.dec(Math.abs(a))}^n$. Pour $n = ${n - 1}$, on obtient environ $${this.dec(errs[n - 1], 6)}$, encore strictement supérieur à $${this.dec(eps)}$ ; pour $n = ${n}$, environ $${this.dec(errs[n], 6)}$. Le programme affiche ${N(n)}.`
        );
      }
      if (fam === 1) {
        // Seuil pour une somme de flottants
        const kinds = [
          ['1 / n', (k) => 1 / k, [1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.25, 3.5, 4], 'la somme $1 + \\frac{1}{2} + \\dots + \\frac{1}{n}$ (série harmonique, qui tend vers $+\\infty$)'],
          ['1 / n ** 2', (k) => 1 / (k * k), [1.2, 1.25, 1.3, 1.35, 1.4, 1.45, 1.5, 1.55, 1.6], 'la somme $1 + \\frac{1}{4} + \\dots + \\frac{1}{n^2}$ (qui converge vers $\\frac{\\pi^2}{6} \\approx 1{,}645$)'],
          ['1 / 2 ** n', (k) => 1 / 2 ** k, [0.6, 0.7, 0.8, 0.9, 0.95, 0.99, 0.999], 'la somme $\\frac{1}{2} + \\frac{1}{4} + \\dots + \\frac{1}{2^n} = 1 - \\frac{1}{2^n}$']
        ];
        const [ft, ff, Ss, desc] = this.randChoice(kinds);
        const S = this.randChoice(Ss);
        let s = 0; let n = 0; const ss = [];
        while (s < S) { n++; s += ff(n); ss.push(s); }
        if (!this._TS4_safe(ss, S) || n < 2) return this.gen_TS4(2);
        return this.makeMcq(T, 2, 'Seuil pour une somme',
          'Programmer une recherche de seuil pour une somme',
          `Qu'affiche le programme Python suivant ?${P(['s = 0', 'n = 0', `while s < ${S}:`, '    n = n + 1', `    s = s + ${ft}`, 'print(n)'])}`,
          N(n),
          [N(n - 1), N(n + 1), N(2 * n)],
          `Après le tour où \`n\` vaut $n$, \`s\` contient ${desc}.`,
          `Cherche le premier $n$ pour lequel \`s\` atteint ${String(S).replace('.', ',')}.`,
          `Pour $n = ${n - 1}$, la somme vaut environ $${this.dec(ss[n - 2], 4)}$, inférieure à $${this.dec(S)}$ ; pour $n = ${n}$, elle vaut environ $${this.dec(ss[n - 1], 4)}$. Le programme affiche ${N(n)}.`
        );
      }
      // Fonction de seuil pour une somme de termes géométriques
      const q = this.randChoice([2, 3, 5]);
      const u0 = this.randInt(1, 5);
      const A = this.randChoice([100, 200, 500, 1000, 2000, 5000, 10000, 100000]);
      let n = 0; let u = u0; let s = u0; const ss = [s];
      while (s < A) { n++; u = q * u; s = s + u; ss.push(s); }
      if (n < 2) return this.gen_TS4(2);
      return this.makeMcq(T, 2, 'Fonction de seuil',
        'Écrire une fonction de seuil pour une somme',
        `Qu'affiche le programme Python suivant ?${P(['def rang(A):', '    n = 0', `    u = ${u0}`, '    s = u', '    while s < A:', '        n = n + 1', `        u = ${q} * u`, '        s = s + u', '    return n', '', `print(rang(${A}))`])}`,
        N(n),
        [N(n - 1), N(n + 1), N(s)],
        `\`s\` contient $u_0 + u_1 + \\dots + u_n$ avec $u_k = ${u0} \\times ${q}^k$.`,
        `La fonction renvoie le premier $n$ tel que cette somme atteigne ${A}.`,
        `Sommes successives : ${ss.join(' ; ')}. La première supérieure ou égale à ${A} est obtenue pour $n = ${n}$ : le programme affiche ${N(n)}.`
      );
    }
    if (tier === 3) {
      // Dichotomie
      const kinds = [
        ['x ** 2', (x) => x * x, 'x^2'],
        ['x ** 3', (x) => x * x * x, 'x^3'],
        ['x ** 3 + x', (x) => x * x * x + x, 'x^3 + x']
      ];
      const [ft, ff, fm] = this.randChoice(kinds);
      let c; let a0;
      for (;;) {
        c = this.randInt(2, 40);
        a0 = 0; while (ff(a0 + 1) <= c) a0++;
        if (ff(a0) !== c && ff(a0 + 1) !== c) break;
      }
      const f = (x) => ff(x) - c;
      const fam = this.randInt(0, 2);
      const head = ['def f(x):', `    return ${ft} - ${c}`, ''];
      const body = ['    m = (a + b) / 2', '    if f(a) * f(m) <= 0:', '        b = m', '    else:', '        a = m'];
      const rootTex = ft === 'x ** 2' ? `\\sqrt{${c}}` : ft === 'x ** 3' ? `\\sqrt[3]{${c}}` : '\\alpha';
      const where = `La fonction $f : x \\mapsto ${fm} - ${c}$ est continue et strictement croissante sur $[0 ; +\\infty[$ ; elle s'annule en un unique réel $${rootTex}$${ft === 'x ** 3 + x' ? ' (on note $\\alpha$ ce réel)' : ''}.`;
      const run = (a, b, steps) => {
        let aF = false; let bF = false; const tr = [];
        for (let k = 0; k < steps; k++) {
          const m = (a + b) / 2;
          if (f(a) * f(m) <= 0) { b = m; bF = true; } else { a = m; aF = true; }
          tr.push([a, b, aF, bF]);
        }
        return { a, b, aF, bF, tr };
      };
      const pr = (v, isF) => this._TS4_pyr(v, isF);
      if (fam === 0) {
        const Nst = this.randInt(2, 4);
        const r = run(a0, a0 + 1, Nst);
        const show = (o) => `« ${pr(o.a, o.aF)} ${pr(o.b, o.bF)} »`;
        const prev = run(a0, a0 + 1, Nst - 1);
        const next = run(a0, a0 + 1, Nst + 1);
        // Erreur typique : test inversé
        let wa = a0; let wb = a0 + 1; let waF = false; let wbF = false;
        for (let k = 0; k < Nst; k++) { const m = (wa + wb) / 2; if (f(wa) * f(m) <= 0) { wa = m; waF = true; } else { wb = m; wbF = true; } }
        return this._Tx(this.makeMcq(T, 3, 'Dichotomie : encadrement',
          'Exécuter un algorithme de dichotomie',
          `${where} Qu'affiche le programme suivant ?${P([...head, `a = ${a0}`, `b = ${a0 + 1}`, `for k in range(${Nst}):`, ...body, 'print(a, b)'])}`,
          show(r),
          [show(prev), show(next), `« ${pr(wa, waF)} ${pr(wb, wbF)} »`, `« ${pr(r.a, true)} ${pr(r.b + (r.b - r.a), true)} »`],
          'À chaque étape, on garde la moitié de l\'intervalle sur laquelle $f$ change de signe : `f(a) * f(m) <= 0` signifie que la solution est dans $[a ; m]$.',
          `Calcule $f$ au milieu de l'intervalle à chacune des ${Nst} étapes.`,
          `$f(${a0}) = ${f(a0)} < 0$ et $f(${a0 + 1}) = ${f(a0 + 1)} > 0$. Intervalles successifs : ${r.tr.map(([x, y]) => `$[${this.dec(x, 6)} ; ${this.dec(y, 6)}]$`).join(', ')}. Le programme affiche ${show(r)} (un nombre resté entier s'affiche sans « .0 »), d'où $${this.dec(r.a, 6)} \\le ${rootTex} \\le ${this.dec(r.b, 6)}$.`
        ), [this.dec(r.a, 6).replace('{,}', ','), this.dec(r.b, 6).replace('{,}', ',')], 'Saisir les deux nombres affichés sous la forme (a ; b), avec la virgule décimale.');
      }
      const w = this.randChoice([1, 2]);
      const lo = w === 2 && a0 > 0 && Math.random() < 0.5 ? a0 - 1 : a0;
      const hi = lo + w;
      const e = this.randChoice([0.2, 0.1, 0.05, 0.01, 0.001]);
      let n = 0; let width = w;
      while (width > e) { width /= 2; n++; }
      if (fam === 1) {
        return this.makeMcq(T, 3, 'Dichotomie : nombre d\'étapes',
          'Déterminer le nombre d\'étapes d\'une dichotomie',
          `${where} Qu'affiche le programme suivant ?${P([...head, `a = ${lo}`, `b = ${hi}`, 'n = 0', `while b - a > ${e}:`, ...body, '    n = n + 1', 'print(n)'])}`,
          N(n),
          [N(n - 1), N(n + 1), N(Math.round(w / e))],
          'À chaque tour, la longueur de l\'intervalle $[a ; b]$ est divisée par 2.',
          `Après $n$ tours, $b - a = \\frac{${w}}{2^n}$ : cherche le premier $n$ tel que $\\frac{${w}}{2^n} \\le ${this.dec(e)}$.`,
          `Après $n$ tours, $b - a = \\frac{${w}}{2^n}$. Or $\\frac{${w}}{2^{${n - 1}}} = ${this.dec(w / 2 ** (n - 1), 6)} > ${this.dec(e)}$ et $\\frac{${w}}{2^{${n}}} = ${this.dec(w / 2 ** n, 6)} \\le ${this.dec(e)}$. Le programme affiche ${N(n)}.`
        );
      }
      const Nst = this.randInt(3, 6);
      const amp = w / 2 ** Nst;
      return this.makeMcq(T, 3, 'Dichotomie : précision',
        'Relier le nombre d\'étapes et la précision d\'une dichotomie',
        `${where} Qu'affiche le programme suivant ?${P([...head, `a = ${lo}`, `b = ${hi}`, `for k in range(${Nst}):`, ...body, 'print(b - a)'])}`,
        N(amp),
        [N(w / 2 ** (Nst - 1)), N(w / 2 ** (Nst + 1)), N(w / (2 * Nst))],
        'À chaque étape, la longueur de l\'intervalle est divisée par 2, quel que soit le cas du test.',
        `La longueur initiale est ${w}.`,
        `Après ${Nst} étapes, $b - a = \\frac{${w}}{2^{${Nst}}} = ${this.dec(amp, 6)}$ : le programme affiche ${N(amp)}.`
      );
    }
    // tier 4 : méthode de Monte-Carlo
    const configs = [
      ['x ** 2', 1, 1, [1, 3], 'x^2'], ['x ** 2', 2, 4, [8, 3], 'x^2'], ['x ** 2', 3, 9, [9, 1], 'x^2'],
      ['x ** 3', 1, 1, [1, 4], 'x^3'], ['x ** 3', 2, 8, [4, 1], 'x^3'],
      ['x', 1, 1, [1, 2], 'x'], ['x', 3, 3, [9, 2], 'x'],
      ['1 - x ** 2', 1, 1, [2, 3], '1 - x^2'], ['x * (2 - x)', 2, 1, [4, 3], 'x(2 - x)'],
      ['sqrt(x)', 1, 1, [2, 3], '\\sqrt{x}'], ['sqrt(x)', 4, 2, [16, 3], '\\sqrt{x}'],
      ['4 * x * (1 - x)', 1, 1, [2, 3], '4x(1 - x)'], ['disque', 1, 1, null, '']
    ];
    const [ft, A, M, I, fm] = this.randChoice(configs);
    const disk = ft === 'disque';
    const scaled = Math.random() < 0.5;
    const K = A * M;
    const nSim = this.randChoice([1000, 10000, 100000]);
    const code = [disk ? 'from random import random' : (ft.includes('sqrt') ? 'from random import random\nfrom math import sqrt' : 'from random import random'), '', 'def monte_carlo(n):', '    c = 0', '    for i in range(n):', `        x = ${A === 1 ? '' : A + ' * '}random()`, `        y = ${M === 1 ? '' : M + ' * '}random()`, `        if ${disk ? 'x ** 2 + y ** 2 <= 1' : `y <= ${ft}`}:`, '            c = c + 1', `    return ${scaled && K !== 1 ? K + ' * ' : (scaled && disk ? '4 * ' : '')}c / n`, '', `print(monte_carlo(${nSim}))`];
    let ans; let ds; let expl;
    if (disk) {
      if (scaled) {
        ans = '$\\pi$';
        ds = ['$\\frac{\\pi}{4}$', '$2\\pi$', '$\\frac{\\pi}{2}$', '$\\frac{3}{4}$'];
        expl = 'La proportion de points tombant dans le quart de disque est proche de son aire $\\frac{\\pi}{4}$ ; le programme renvoie $4 \\times \\frac{c}{n}$, proche de $\\pi$.';
      } else {
        ans = '$\\frac{\\pi}{4}$';
        ds = ['$\\pi$', '$1 - \\frac{\\pi}{4}$', '$\\frac{\\pi}{2}$', '$\\frac{1}{2}$'];
        expl = 'Le point $(x ; y)$ est choisi uniformément dans le carré $[0 ; 1]^2$ d\'aire 1 ; la condition $x^2 + y^2 \\le 1$ décrit un quart de disque de rayon 1, d\'aire $\\frac{\\pi}{4}$. La proportion $\\frac{c}{n}$ est donc proche de $\\frac{\\pi}{4}$.';
      }
    } else {
      const val = scaled ? I : [I[0], I[1] * K];
      ans = `$${this.frac(val[0], val[1])}$`;
      const other = scaled ? [I[0], I[1] * K] : I;
      ds = [`$${this.frac(other[0], other[1])}$`, `$${this.frac(val[1] - val[0], val[1])}$`, `$${this.frac(val[0] * 2, val[1])}$`, `$${this.frac(val[0] * 3, val[1] * 4)}$`];
      if (scaled) ds[1] = `$${this.frac(K * I[1] - I[0], I[1])}$`;
      const area = `\\int_0^{${A}} ${fm.includes(' ') ? `(${fm})` : fm} \\, \\mathrm{d}x = ${this.frac(I[0], I[1])}`;
      expl = `Le point $(x ; y)$ est choisi uniformément dans le rectangle $[0 ; ${A}] \\times [0 ; ${M}]$ d'aire ${K}, et la condition $y \\le ${fm}$ décrit le domaine sous la courbe, d'aire $${area}$. La proportion $\\frac{c}{n}$ est donc proche de $\\frac{${this.frac(I[0], I[1])}}{${K}}${K === 1 ? '' : ` = ${this.frac(I[0], I[1] * K)}`}$${scaled && K !== 1 ? `, et le programme renvoie ${K} fois cette proportion, proche de $${this.frac(I[0], I[1])}$` : ''}.`;
      if (K === 1) expl = expl.replace(`$\\frac{${this.frac(I[0], I[1])}}{1}$`, `$${this.frac(I[0], I[1])}$`);
    }
    // Les distracteurs « entiers nus » ne sont gardés que si la réponse est elle-même un entier
    ds = ds.filter((o) => /^\$-?\d+\$$/.test(ans) || !/^\$-?\d+\$$/.test(o));
    return this.makeMcq(T, 4, 'Méthode de Monte-Carlo',
      'Interpréter une méthode de Monte-Carlo',
      `On exécute le programme suivant, où \`random()\` renvoie un nombre aléatoire de $[0 ; 1[$.${P(code)}Autour de quelle valeur le nombre affiché fluctue-t-il ?`,
      ans,
      ds,
      'Chaque point $(x ; y)$ est tiré au hasard uniformément dans un rectangle : la probabilité que la condition soit vraie est le quotient de deux aires.',
      'Identifie le domaine décrit par la condition du `if`, puis calcule son aire.',
      `${expl} D'après la loi des grands nombres, la valeur affichée fluctue autour de ${ans}, avec des écarts d'autant plus faibles que n est grand.`
    );
  },

  // ---- ly1ere ----
  // =========================================================================
  // PREMIÈRE SPÉCIALITÉ (11 chapitres) — helpers privés
  // =========================================================================

  /** n = k²·m avec m sans facteur carré -> [k, m] */
  _1re_rad(n) {
    let k = 1;
    let m = n;
    for (let d = 2; d * d <= m; d++) {
      while (m % (d * d) === 0) { m /= d * d; k *= d; }
    }
    return [k, m];
  },

  /** Racine carrée simplifiée : 12 -> "2\\sqrt{3}", 16 -> "4" */
  _1re_sqrt(n) {
    if (n === 0) return '0';
    const [k, m] = this._1re_rad(n);
    if (m === 1) return String(k);
    return (k === 1 ? '' : k) + `\\sqrt{${m}}`;
  },

  /** (num·√r)/den réduit, signe devant */
  _1re_radFrac(num, den, r = 1) {
    if (num === 0) return '0';
    const [k, m] = this._1re_rad(r);
    num *= k;
    if (den < 0) { num = -num; den = -den; }
    const g = this.gcd(num, den);
    num /= g;
    den /= g;
    const sgn = num < 0 ? '-' : '';
    const a = Math.abs(num);
    const top = m === 1 ? String(a) : (a === 1 ? '' : a) + `\\sqrt{${m}}`;
    return den === 1 ? sgn + top : `${sgn}\\frac{${top}}{${den}}`;
  },

  /** p·π/d réduit : (3,4) -> "\\frac{3\\pi}{4}", (-1,1) -> "-\\pi" */
  _1re_pi(p, d) {
    if (p === 0) return '0';
    if (d < 0) { p = -p; d = -d; }
    const g = this.gcd(p, d);
    p /= g;
    d /= g;
    const sgn = p < 0 ? '-' : '';
    const a = Math.abs(p);
    const top = (a === 1 ? '' : a) + '\\pi';
    return d === 1 ? sgn + top : `${sgn}\\frac{${top}}{${d}}`;
  },

  /** Ensemble fini : liste de [valeur numérique, LaTeX] -> "\\{a ; b\\}" trié, sans doublon */
  _1re_set(items) {
    const seen = new Map();
    for (const [v, s] of items) {
      const key = Math.round(v * 1e9);
      if (!seen.has(key)) seen.set(key, [v, s]);
    }
    const arr = [...seen.values()].sort((x, y) => x[0] - y[0]);
    if (!arr.length) return '\\emptyset';
    return `\\{${arr.map((x) => x[1]).join(' ; ')}\\}`;
  },

  /** Forme canonique a(x - α)² + β */
  _1re_canon(a, al, be) {
    const lead = a === 1 ? '' : a === -1 ? '-' : String(a);
    const sq = al === 0 ? 'x^2' : `(x ${this.formatSign(-al)})^2`;
    return `${lead}${sq}${be === 0 ? '' : ' ' + this.formatSign(be)}`;
  },

  /** Intervalle : bornes LaTeX (null = infini) */
  _1re_iv(lo, hi, loClosed, hiClosed) {
    const L = lo === null ? ']-\\infty' : (loClosed ? '[' : ']') + lo;
    const H = hi === null ? '+\\infty[' : hi + (hiClosed ? ']' : '[');
    return `${L} ; ${H}`;
  },

  /** " + 5" / " - 5" ou "" si nul (terme additif optionnel) */
  _1re_sg(v) {
    return v === 0 ? '' : ' ' + this.formatSign(v);
  },

  /** poly() acceptant des coefficients chaînes entières ("3", "-0") */
  _1re_poly(terms) {
    return this.poly(terms.map(([c, m]) => [typeof c === 'string' && /^-?\d+$/.test(c) ? Number(c) : c, m]));
  },

  /** Facteur d'un produit affiché : parenthèses si négatif ou nul (évite « + 0 × … ») */
  _1re_pz(v) {
    return v <= 0 ? `(${v})` : String(v);
  },

  /** Probabilité exprimée en centièmes -> "0{,}35" */
  _1re_p(c) {
    return this.dec(c / 100);
  },

  // =========================================================================
  // Familles complémentaires Première (audit du 31/10/2026) — registre _LYX, tirage par _lyX
  // =========================================================================
  // ---- 1A1 ----
  _x1A1fac() {
    const a = this.randChoice([1, -1, 2, -2, 3, -3]);
    const r1 = this.randInt(-7, 5);
    const r2 = r1 + this.randInt(1, 7);
    return this.makeExact('1A1', 2, 'Factoriser un trinôme',
      'Factoriser un trinôme à l\'aide de ses racines',
      `Factoriser $f(x) = ${this.polyX([a, -a * (r1 + r2), a * r1 * r2])}$ sous la forme $a(x - x_1)(x - x_2)$ avec $x_1 < x_2$. Saisir $(a ; x_1 ; x_2)$.`,
      `(${a};${r1};${r2})`,
      'Calcule le discriminant pour trouver les racines du trinôme.',
      `Le coefficient $a$ est celui de $x^2$ ; les racines sont les solutions de $f(x) = 0$.`,
      `$\\Delta = ${(a * (r1 + r2)) ** 2 - 4 * a * a * r1 * r2} = ${(a * (r2 - r1)) ** 2}$, donc $x_1 = ${r1}$ et $x_2 = ${r2}$. Ainsi $f(x) = ${a === 1 ? '' : a === -1 ? '-' : a}(x ${this.formatSign(-r1)})(x ${this.formatSign(-r2)})$.`.replace(/\(x \+ 0\)|\(x - 0\)/g, 'x'),
      { instruction: 'Saisir (a ; x1 ; x2), par exemple (2;-3;1).' });
  },

  _x1A1det() {
    const r1 = this.randInt(-6, 3);
    const r2 = r1 + this.randInt(1, 6);
    let x0 = this.randInt(-4, 6);
    while (x0 === r1 || x0 === r2) x0 = this.randInt(-4, 6);
    const a = this.randNonZero(-3, 3);
    const y0 = a * (x0 - r1) * (x0 - r2);
    return this.makeExact('1A1', 3, 'Trinôme connaissant ses racines',
      'Déterminer une fonction polynôme du second degré s\'annulant en deux réels donnés',
      `La fonction polynôme du second degré $f$ s'annule en $${r1}$ et en $${r2}$, et $f(${x0}) = ${y0}$. Écrire $f(x) = ax^2 + bx + c$ et saisir $(a ; b ; c)$.`,
      `(${a};${-a * (r1 + r2)};${a * r1 * r2})`,
      `$f$ s'écrit $f(x) = a(x - x_1)(x - x_2)$ avec $x_1 = ${r1}$ et $x_2 = ${r2}$.`,
      `Utilise $f(${x0}) = ${y0}$ pour trouver $a$, puis développe.`,
      `$f(x) = a(x ${this.formatSign(-r1)})(x ${this.formatSign(-r2)})$ et $f(${x0}) = a \\times ${this.paren(x0 - r1)} \\times ${this.paren(x0 - r2)} = ${this.coefStr((x0 - r1) * (x0 - r2), 'a')} = ${y0}$, d'où $a = ${a}$. En développant : $f(x) = ${this.polyX([a, -a * (r1 + r2), a * r1 * r2])}$.`.replace(/\(x \+ 0\)|\(x - 0\)/g, 'x'),
      { instruction: 'Saisir (a ; b ; c), par exemple (2;-1;-6).' });
  },

  _x1A1evid() {
    const a = this.randChoice([1, 2, 3, -1, -2, 4]);
    const one = this.randChoice([1, -1]);
    let r = this.randNonZero(-9, 9);
    if (r === one) r = one * 3;
    const q = this.randChoice([1, 1, 2, 3]);
    // racines : one et r/q
    const A = a * q; const B = -a * (q * one + r); const C = a * one * r;
    return this.makeExact('1A1', 4, 'Racine évidente',
      'Factoriser en repérant une racine évidente et le produit des racines',
      `On remarque que $${one}$ est une racine évidente de $f(x) = ${this.polyX([A, B, C])}$. Déterminer l'autre racine.`,
      this._xf(r, q),
      'Le produit des racines d\'un trinôme $ax^2 + bx + c$ vaut $\\frac{c}{a}$.',
      `Vérifie d'abord que $f(${one}) = 0$, puis utilise $x_1 x_2 = ${this.frac(C, A)}$.`,
      `$f(${one}) = ${this.poly([[A, ''], [B * one, ''], [C, '']])} = 0$. Le produit des racines vaut $\\frac{c}{a} = ${this.frac(C, A)}$, donc l'autre racine est $${this.frac(C, A)} \\div ${this.paren(one)} = ${this.frac(r, q)}$.`,
      { instruction: 'Saisir la valeur exacte (entier ou fraction).' });
  },

  // ---- 1A2 ----
  _x1A2app() {
    const fa = this.randInt(-9, 9);
    const dfa = this.randNonZero(-8, 8);
    const a = this.randInt(-3, 5);
    const h = this.randChoice([0.1, -0.1, 0.01, 0.02, -0.05, 0.2]);
    const v = fa + dfa * h;
    return this.makeExact('1A2', 2, 'Approximation affine',
      'Calculer une valeur approchée de $f(a + h)$ par $f(a) + f\'(a)h$',
      `Une fonction $f$ dérivable vérifie $f(${a}) = ${fa}$ et $f'(${a}) = ${dfa}$. Donner la valeur approchée de $f(${this.dec(a + h)})$ obtenue avec l'approximation affine $f(a + h) \\approx f(a) + f'(a)h$.`,
      this._xd(v),
      'Repère $a$ et $h$ : $a + h$ doit valoir le nombre demandé.',
      `Ici $h$ est l'écart entre $${this.dec(a + h)}$ et $${a}$.`,
      `$h = ${this.dec(h)}$, donc $f(${this.dec(a + h)}) \\approx ${fa} + ${this.paren(dfa)} \\times ${this.paren(this.dec(h))} = ${this.dec(v)}$. La tangente en $${a}$ approche la courbe au voisinage de $${a}$.`,
      { instruction: 'Saisir la valeur approchée (nombre décimal).' });
  },

  _x1A2vit() {
    const a = this.randChoice([0.5, 1, 2, 3, 4.9, 5]);
    const b = this.randInt(0, 12);
    const t0 = this.randInt(1, 6);
    const v = 2 * a * t0 + b;
    return this.makeExact('1A2', 2, 'Vitesse instantanée',
      'Interpréter le nombre dérivé comme une vitesse instantanée',
      `Un mobile parcourt la distance $d(t) = ${this.poly([[this.dec(a), 't^2'], [b, 't']])}$ (en mètres) au bout de $t$ secondes. Sa vitesse instantanée à l'instant $t$ est $d'(t)$. Calculer sa vitesse à l'instant $t = ${t0}$ s (en m/s).`,
      this._xd(v),
      'La vitesse instantanée est le nombre dérivé de la distance par rapport au temps.',
      '$(t^2)\' = 2t$ et $(t)\' = 1$.',
      `$d'(t) = ${this.poly([[this.dec(2 * a), 't'], [b, '']])}$, donc $d'(${t0}) = ${this.dec(2 * a)} \\times ${t0}${b ? ` + ${b}` : ''} = ${this.dec(v)}$ m/s.`,
      { instruction: 'Saisir un nombre (entier ou décimal).' });
  },

  _x1A2lim() {
    const c = this.randNonZero(-4, 4);
    const d = this.randInt(-6, 6);
    const a = this.randInt(-3, 4);
    return this.makeExact('1A2', 3, 'Nombre dérivé comme limite',
      'Calculer un taux de variation et déterminer le nombre dérivé comme limite',
      `Soit $f(x) = ${this.polyX([c, d, 0])}$ et $h \\neq 0$. Le taux de variation $\\dfrac{f(${a} + h) - f(${a})}{h}$ s'écrit $\\alpha h + \\beta$. Saisir $(\\alpha ; \\beta)$ ; quelle est alors la limite quand $h$ tend vers $0$ ?`,
      `(${c};${2 * c * a + d})`,
      `Développe $f(${a} + h)$ en utilisant $(${a} + h)^2 = ${a * a} + ${2 * a}h + h^2$.`.replace('+ 0h + ', '+ ').replace('+ -', '- '),
      'Simplifie par $h$ : le terme constant restant est la limite, c\'est-à-dire le nombre dérivé.',
      `$f(${a} + h) - f(${a}) = ${this.poly([[c, 'h^2'], [2 * c * a + d, 'h']])}$, donc le taux vaut $${this.poly([[c, 'h'], [2 * c * a + d, '']])}$ : $\\alpha = ${c}$, $\\beta = ${2 * c * a + d}$. Quand $h$ tend vers $0$, il tend vers $${2 * c * a + d} = f'(${a})$.`,
      { instruction: 'Saisir (α ; β), par exemple (3;-2).' });
  },

  // ---- 1A3 ----
  _x1A3xn() {
    const a = this.randNonZero(-6, 6);
    const n = this.randInt(1, 4);
    const k = -n * a;
    return this.makeExact('1A3', 2, 'Dérivée de $x^n$ avec $n$ entier négatif',
      'Dériver $x \\mapsto x^n$ pour $n \\in \\mathbb{Z}$',
      `Pour $x \\neq 0$, on pose $f(x) = ${a < 0 ? '-' : ''}\\dfrac{${Math.abs(a)}}{${this.pow('x', n)}}$. On a $f'(x) = \\dfrac{k}{x^p}$ : saisir $(k ; p)$.`,
      `(${k};${n + 1})`,
      `Écris $f(x) = ${a === 1 ? '' : a === -1 ? '-' : a}x^{${-n}}$.`,
      '$(x^m)\' = mx^{m-1}$ reste vraie pour $m$ entier négatif.',
      `$f(x) = ${a === 1 ? '' : a === -1 ? '-' : a}x^{${-n}}$, donc $f'(x) = ${a} \\times (${-n})x^{${-n - 1}} = ${this.coefStr(k, `x^{${-n - 1}}`)} = \\dfrac{${k}}{x^{${n + 1}}}$.`,
      { instruction: 'Saisir (k ; p), par exemple (-6;3).' });
  },

  _x1A3pt() {
    const a = this.randNonZero(-4, 4);
    const b = this.randInt(-5, 5);
    const c = this.randNonZero(-3, 3);
    const d = this.randNonZero(-6, 6);
    const x0 = this.randNonZero(-3, 3);
    if (a * x0 + b === 0 || c * x0 * x0 + d === 0) return this._x1A3pt();
    const v = a * (c * x0 * x0 + d) + (a * x0 + b) * 2 * c * x0;
    return this.makeExact('1A3', 3, 'Nombre dérivé d\'un produit',
      'Dériver un produit puis calculer un nombre dérivé',
      `Soit $f(x) = (${this.polyX([a, b])})(${this.polyX([c, 0, d])})$. Calculer $f'(${x0})$.`,
      String(v),
      `Pose $u(x) = ${this.polyX([a, b])}$ et $v(x) = ${this.polyX([c, 0, d])}$ : $f' = u'v + uv'$.`,
      `$u'(x) = ${a}$ et $v'(x) = ${this.coefStr(2 * c, 'x')}$.`,
      `$f'(x) = ${a}(${this.polyX([c, 0, d])}) + (${this.polyX([a, b])}) \\times ${this.coefStr(2 * c, 'x')}$. En $x = ${x0}$ : $u(${x0}) = ${a * x0 + b}$, $v(${x0}) = ${c * x0 * x0 + d}$, $v'(${x0}) = ${2 * c * x0}$, donc $f'(${x0}) = ${a} \\times ${this.paren(c * x0 * x0 + d)} + ${this.paren(a * x0 + b)} \\times ${this.paren(2 * c * x0)} = ${v}$.`);
  },

  _x1A3par() {
    const a = this.randNonZero(-5, 5);
    const b = this.randNonZero(-6, 6);
    const kind = this.randInt(0, 3);
    let f; let ans; let sol;
    if (kind === 0) { f = this.poly([[a, 'x^4'], [b, 'x^2']]); ans = 'Paire'; sol = `$f(-x) = ${this.poly([[a, '(-x)^4'], [b, '(-x)^2']])} = f(x)$ : $f$ est paire, sa courbe est symétrique par rapport à l'axe des ordonnées.`; }
    else if (kind === 1) { f = this.poly([[a, 'x^3'], [b, 'x']]); ans = 'Impaire'; sol = `$f(-x) = ${this.poly([[a, '(-x)^3'], [b, '(-x)']])} = ${this.poly([[-a, 'x^3'], [-b, 'x']])} = -f(x)$ : $f$ est impaire, sa courbe est symétrique par rapport à l'origine.`; }
    else if (kind === 2) { f = `${this.coefStr(a, 'x')}\\sqrt{x^2 + ${Math.abs(b)}}`; ans = 'Impaire'; sol = `$\\sqrt{(-x)^2 + ${Math.abs(b)}} = \\sqrt{x^2 + ${Math.abs(b)}}$, donc $f(-x) = -f(x)$ : $f$ est impaire.`; }
    else { f = this.poly([[a, 'x^2'], [b, 'x'], [1, '']]); ans = 'Ni paire ni impaire'; sol = `$f(1) = ${a + b + 1}$ et $f(-1) = ${a - b + 1}$ : on n'a ni $f(-1) = f(1)$ ni $f(-1) = -f(1)$, donc $f$ n'est ni paire ni impaire.`; }
    if (kind === 3 && (a - b + 1 === a + b + 1 || a - b + 1 === -(a + b + 1))) return this._x1A3par();
    return this._xa('keep', '1A3', 3, 'Parité d\'une fonction',
      'Reconnaître une fonction paire ou impaire et la symétrie de sa courbe',
      `La fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = ${f}$ est-elle paire, impaire, ou ni l'un ni l'autre ?`,
      ans, ['Paire', 'Impaire', 'Ni paire ni impaire', 'Paire et impaire'].filter((s) => s !== ans),
      'Calcule $f(-x)$ et compare-le à $f(x)$ et à $-f(x)$.',
      'Paire : $f(-x) = f(x)$ (symétrie par rapport à l\'axe des ordonnées) ; impaire : $f(-x) = -f(x)$ (symétrie par rapport à l\'origine).',
      sol);
  },

  // ---- 1A4 ----
  _x1A4ext() {
    const a = this.randNonZero(-4, 4);
    const b = this.randInt(-6, 6);
    const k = this.randChoice([1, 1, 2, -1, -2, 3]);
    // f(x) = (ax + b)e^{kx} ; f'(x) = (akx + a + bk)e^{kx} ; annulation en -(a + bk)/(ak)
    return this.makeExact('1A4', 4, 'Abscisse de l\'extremum de $(ax + b)e^{kx}$',
      'Étudier le signe de la dérivée d\'une fonction $(ax + b)e^{kx}$',
      `Soit $f(x) = (${this.polyX([a, b])})${k === 1 ? 'e^{x}' : `e^{${this.coefStr(k, 'x')}}`}$ sur $\\mathbb{R}$. La fonction $f$ admet un extremum : en quelle abscisse ?`,
      this._xf(-(a + b * k), a * k),
      'Dérive avec $(uv)\' = u\'v + uv\'$ et $(e^{kx})\' = ke^{kx}$.',
      'Comme $e^{kx} > 0$, $f\'(x)$ a le signe d\'une expression affine : cherche où elle s\'annule.',
      `$f'(x) = ${this.coefStr(a, `e^{${this.coefStr(k, 'x')}}`)} + (${this.polyX([a, b])}) \\times ${k === 1 ? '' : this.paren(k)}e^{${this.coefStr(k, 'x')}} = (${this.polyX([a * k, a + b * k])})e^{${this.coefStr(k, 'x')}}$. Elle s'annule en changeant de signe pour $x = ${this.frac(-(a + b * k), a * k)}$ : c'est l'abscisse de l'extremum.`.replace(/e\^\{x\}/g, 'e^{x}'),
      { instruction: 'Saisir la valeur exacte (entier ou fraction).' });
  },

  _x1A4mod() {
    const N0 = this.randChoice([100, 200, 500, 1000, 2000]);
    const t = this.randChoice([2, 5, 10, 20, -10, -20, -5]);
    const n = this.randInt(2, 5);
    const q = 1 + t / 100;
    const v = Math.round(N0 * q ** n * 100) / 100;
    return this.makeExact('1A4', 3, 'Croissance exponentielle discrète',
      'Modéliser une évolution à taux constant (lien avec les suites géométriques)',
      `Une population de $${N0}$ individus ${t > 0 ? 'augmente' : 'diminue'} de $${Math.abs(t)}\\,\\%$ par an. On modélise son effectif après $n$ années par $N(n) = ${N0} \\times ${this.dec(q)}^n$. Calculer $N(${n})$ (arrondir au centième).`,
      this._xd(v, 2),
      `${t > 0 ? 'Augmenter' : 'Diminuer'} de $${Math.abs(t)}\\,\\%$ revient à multiplier par $${this.dec(q)}$.`,
      `Calcule $${this.dec(q)}^{${n}}$ puis multiplie par $${N0}$.`,
      `$N(${n}) = ${N0} \\times ${this.dec(q)}^{${n}} \\approx ${this.dec(v, 2)}$. La suite $(N(n))$ est géométrique de raison $${this.dec(q)}$ : c'est une évolution exponentielle.`,
      { instruction: 'Saisir la valeur arrondie au centième, par exemple 1102,5.' });
  },

  // ---- 1A5 ----
  _x1A5var() {
    const k = this.randInt(4, 15);
    const c = this.randInt(-5, 5);
    // u_n = n^2 - k n + c ; u_{n+1} - u_n = 2n + 1 - k >= 0 <=> n >= (k - 1)/2
    const n0 = Math.ceil((k - 1) / 2);
    return this.makeExact('1A5', 3, 'Rang à partir duquel une suite croît',
      'Étudier le sens de variation d\'une suite par le signe de $u_{n+1} - u_n$',
      `Soit $u_n = ${this.polyX([1, -k, c], 'n')}$ pour tout $n \\in \\mathbb{N}$. À partir de quel rang $n_0$ a-t-on $u_{n+1} \\ge u_n$ pour tout $n \\ge n_0$ ? Donner le plus petit $n_0$.`,
      String(n0),
      'Calcule $u_{n+1} - u_n$ en fonction de $n$.',
      '$(n + 1)^2 - n^2 = 2n + 1$.',
      `$u_{n+1} - u_n = 2n + 1 - ${k} = ${this.polyX([2, 1 - k], 'n')}$, positif ou nul si et seulement si $n \\ge ${this.frac(k - 1, 2)}$. Le plus petit entier qui convient est $n_0 = ${n0}$.`,
      { instruction: 'Saisir un nombre entier.' });
  },

  _x1A5lim() {
    const k = this.randInt(-9, 9);
    const c = this.randInt(1, 9);
    const p = this.randInt(1, 3);
    const sg = this.randChoice([1, -1]);
    return this.makeExact('1A5', 4, 'Conjecturer une limite',
      'Conjecturer la limite éventuelle d\'une suite',
      `Soit $u_n = ${k} ${sg > 0 ? '+' : '-'} \\dfrac{${c}}{${p === 1 ? 'n + 1' : `n^${p} + 1`}}$ pour tout $n \\in \\mathbb{N}$. En calculant des termes de rang élevé, conjecturer la limite de $(u_n)$.`,
      String(k),
      `Que devient $\\dfrac{${c}}{${p === 1 ? 'n + 1' : `n^${p} + 1`}}$ quand $n$ devient très grand ?`,
      'Calcule par exemple $u_{100}$ et $u_{1000}$.',
      `Quand $n$ devient grand, le dénominateur devient très grand, donc $\\dfrac{${c}}{${p === 1 ? 'n + 1' : `n^${p} + 1`}}$ se rapproche de $0$ : par exemple $u_{1000} \\approx ${this.dec(k + sg * c / (1000 ** p + 1), 6)}$. On conjecture que $(u_n)$ tend vers $${k}$.`,
      { instruction: 'Saisir la valeur de la limite.' });
  },

  // ---- 1A6 ----
  _x1A6gen() {
    const geo = Math.random() < 0.5;
    const p = this.randInt(1, 5);
    if (!geo) {
      const r = this.randNonZero(-7, 7);
      const u0 = this.randInt(-10, 15);
      const up = u0 + p * r;
      return this.makeExact('1A6', 2, 'Terme général d\'une suite arithmétique',
        'Exprimer $u_n$ en fonction de $n$',
        `$(u_n)$ est arithmétique de raison $${r}$ et $u_{${p}} = ${up}$. On a $u_n = a + bn$ pour tout $n$ : saisir $(a ; b)$.`,
        `(${u0};${r})`,
        '$u_n = u_0 + nr$.',
        `Calcule d'abord $u_0 = u_{${p}} - ${p} \\times r$.`,
        `$u_0 = ${up} - ${p} \\times ${this.paren(r)} = ${u0}$, donc $u_n = ${this.poly([[u0, ''], [r, 'n']])}$ : $(a ; b) = (${u0} ; ${r})$.`,
        { instruction: 'Saisir (a ; b), par exemple (5;-3).' });
    }
    const q = this.randChoice([2, 3, -2, 0.5]);
    const v0 = this.randChoice([1, 2, 3, 4, 5, 6, 8]) * (q === 0.5 ? 2 ** p : 1);
    const vp = v0 * q ** p;
    return this.makeExact('1A6', 2, 'Terme général d\'une suite géométrique',
      'Exprimer $v_n$ en fonction de $n$',
      `$(v_n)$ est géométrique de raison $${this.dec(q)}$ et $v_{${p}} = ${this.dec(vp)}$. On a $v_n = a \\times b^n$ pour tout $n$ : saisir $(a ; b)$.`,
      `(${this._xd(v0)};${this._xd(q)})`,
      '$v_n = v_0 \\times q^n$.',
      `Calcule $v_0 = \\dfrac{v_{${p}}}{${this.pow('q', p)}}$.`,
      `$v_0 = ${this.dec(vp)} \\div ${p === 1 ? this.paren(this.dec(q)) : `${this.paren(this.dec(q))}^{${p}}`} = ${this.dec(vp)} \\div ${this.paren(this.dec(q ** p))} = ${this.dec(v0)}$, donc $v_n = ${this.dec(v0)} \\times ${this.paren(this.dec(q))}^n$.`,
      { instruction: 'Saisir (a ; b), par exemple (3;2) ou (4;0,5).' });
  },

  // ---- 1G1 ----
  _x1G1arc(tier) {
    const R = this.randInt(2, 12);
    const d = this.randChoice([2, 3, 4, 6, 12]);
    let p = this.randInt(1, 2 * d - 1);
    while (this.gcd(p, d) !== 1) p = this.randInt(1, 2 * d - 1);
    const th = this._1re_pi(p, d);
    if (tier <= 2) {
      return this.makeExact('1G1', tier, 'Longueur d\'un arc',
        'Utiliser le radian : longueur d\'arc $L = R\\theta$',
        `Sur un cercle de rayon $${R}$ cm, un arc intercepte un angle au centre de $${th}$ rad. Sa longueur s'écrit $k\\pi$ cm : saisir $k$.`,
        this._xf(R * p, d),
        'Un angle de 1 radian intercepte un arc de longueur égale au rayon.',
        'La longueur de l\'arc est proportionnelle à l\'angle : $L = R \\times \\theta$.',
        `$L = ${R} \\times ${th} = ${this._1re_pi(R * p, d)}$ cm, donc $k = ${this.frac(R * p, d)}$.`,
        { instruction: 'Saisir $k$ (entier ou fraction), par exemple 5/3.' });
    }
    return this.makeExact('1G1', tier, 'Angle interceptant un arc',
      'Utiliser le radian : $\\theta = \\frac{L}{R}$',
      `Sur un cercle de rayon $${R}$ cm, un arc a pour longueur $${this._1re_pi(R * p, d)}$ cm. L'angle au centre qui l'intercepte mesure $k\\pi$ rad : saisir $k$.`,
      this._xf(p, d),
      '$L = R \\times \\theta$ avec $\\theta$ en radians.',
      `Divise la longueur par le rayon $${R}$.`,
      `$\\theta = \\dfrac{L}{R} = ${this._1re_pi(R * p, d)} \\div ${R} = ${th}$ rad, donc $k = ${this.frac(p, d)}$.`,
      { instruction: 'Saisir $k$ (entier ou fraction), par exemple 3/4.' });
  },

  _x1G1sum() {
    // angles dont le cosinus / sinus est rationnel
    const cosA = [[0, 1, 1], [1, 3, 0.5], [1, 2, 0], [2, 3, -0.5], [1, 1, -1], [4, 3, -0.5], [-1, 3, 0.5], [-2, 3, -0.5]];
    const sinA = [[1, 6, 0.5], [1, 2, 1], [5, 6, 0.5], [7, 6, -0.5], [-1, 6, -0.5], [-1, 2, -1], [3, 2, -1], [11, 6, -0.5]];
    const [p1, d1, c1] = this.randChoice(cosA);
    const [p2, d2, s2] = this.randChoice(sinA);
    let p3; let d3; let c3;
    do { [p3, d3, c3] = this.randChoice(cosA); } while ((p3 === p1 && d3 === d1) || c3 === 0);
    const k = this.randChoice([2, 3, 4]);
    const tot = c1 + k * s2 - c3;
    const A1 = this._1re_pi(p1, d1); const A2 = this._1re_pi(p2, d2); const A3 = this._1re_pi(p3, d3);
    const ex = (v) => this._1G1_exact(v);
    return this.makeExact('1G1', 4, 'Calcul avec des valeurs remarquables',
      'Lire sur le cercle trigonométrique les cosinus et sinus de valeurs remarquables',
      `Calculer la valeur exacte de $A = \\cos\\left(${A1}\\right) + ${k}\\sin\\left(${A2}\\right) - \\cos\\left(${A3}\\right)$.`,
      this._xf(Math.round(tot * 2), 2),
      'Place chacun des trois points sur le cercle trigonométrique.',
      'Le cosinus est l\'abscisse du point associé, le sinus son ordonnée ; ramène-toi si besoin à $]-\\pi ; \\pi]$.',
      `$\\cos\\left(${A1}\\right) = ${ex(c1)}$, $\\sin\\left(${A2}\\right) = ${ex(s2)}$ et $\\cos\\left(${A3}\\right) = ${ex(c3)}$. Donc $A = ${ex(c1)} + ${k} \\times ${this.paren(ex(s2))} - ${this.paren(ex(c3))} = ${this.frac(Math.round(tot * 2), 2)}$.`,
      { instruction: 'Saisir la valeur exacte (entier ou fraction), par exemple -3/2.' });
  },

  // ---- 1S1 ----
  _x1S1bern(tier) {
    const n = tier >= 4 ? this.randInt(3, 4) : this.randInt(2, 3);
    const p = this.randChoice([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]);
    const ask = this.randInt(0, 2);
    const C = (m, k) => { let r = 1; for (let i = 0; i < k; i++) r = r * (m - i) / (i + 1); return r; };
    let k; let res; let lab; let sol;
    if (ask === 0) { k = n; res = p ** n; lab = `obtenir ${n} succès`; sol = `Un seul chemin de l'arbre : $P = ${this.dec(p)}^{${n}} = ${this.dec(res, 6)}$.`; }
    else if (ask === 1) { k = 0; res = 1 - (1 - p) ** n; lab = 'obtenir au moins un succès'; sol = `L'événement contraire est « aucun succès », de probabilité $${this.dec(1 - p)}^{${n}} = ${this.dec((1 - p) ** n, 6)}$. Donc $P = 1 - ${this.dec((1 - p) ** n, 6)} = ${this.dec(res, 6)}$.`; }
    else { k = this.randInt(1, n - 1); res = C(n, k) * p ** k * (1 - p) ** (n - k); lab = `obtenir exactement ${k} succès`; sol = `Dans l'arbre, $${C(n, k)}$ chemins comportent exactement ${k} succès ; chacun a pour probabilité $${this.dec(p)}^{${k}} \\times ${this.dec(1 - p)}^{${n - k}}$. Donc $P = ${C(n, k)} \\times ${this.dec(p ** k, 6)} \\times ${this.dec((1 - p) ** (n - k), 6)} = ${this.dec(res, 6)}$.`; }
    return this.makeExact('1S1', tier, 'Répétition d\'épreuves de Bernoulli',
      'Représenter par un arbre la répétition d\'épreuves de Bernoulli indépendantes',
      `On répète $${n}$ fois, de façon indépendante, une épreuve de Bernoulli dont la probabilité de succès est $${this.dec(p)}$. Calculer la probabilité d'${lab}.`,
      this._xd(res, 6),
      `Construis l'arbre à $${n}$ niveaux : chaque branche « succès » porte $${this.dec(p)}$, chaque branche « échec » porte $${this.dec(1 - p)}$.`,
      ask === 1 ? 'Passe par l\'événement contraire.' : 'Multiplie les probabilités le long d\'un chemin, puis additionne les chemins favorables.',
      sol,
      { instruction: 'Saisir la valeur exacte (nombre décimal), par exemple 0,384.' });
  },

  // ---- 1S2 ----
  _x1S2cum(tier) {
    const k = this.randInt(4, 5);
    const xs = this.pickDistinct([-5, -3, -2, -1, 0, 1, 2, 3, 4, 5, 8, 10], k).sort((u, v) => u - v);
    let ps;
    do {
      ps = Array.from({ length: k - 1 }, () => this.randInt(1, 6) * 5);
      ps.push(100 - ps.reduce((s, x) => s + x, 0));
    } while (ps[k - 1] < 5 || ps[k - 1] > 40);
    const a = xs[this.randInt(1, k - 2)];
    const op = this.randChoice(['\\le', '<', '>', '\\ge']);
    const ok = (x) => (op === '\\le' ? x <= a : op === '<' ? x < a : op === '>' ? x > a : x >= a);
    const res = xs.reduce((s, x, i) => s + (ok(x) ? ps[i] : 0), 0) / 100;
    return this.makeExact('1S2', tier, 'Probabilité d\'un événement $\\{X \\le a\\}$',
      'Interpréter et calculer $P(X \\le a)$ à partir de la loi de $X$',
      `La loi de probabilité d'une variable aléatoire $X$ est donnée par le tableau :${this._xtab(['$x_i$', ...xs.map((x) => `$${x}$`)], [['$P(X = x_i)$', ...ps.map((p) => `$${this.dec(p / 100)}$`)]])}Calculer $P(X ${op} ${a})$.`,
      this._xd(res),
      `L'événement $\\{X ${op} ${a}\\}$ est réalisé pour certaines valeurs $x_i$ seulement.`,
      `Repère les valeurs $x_i$ telles que $x_i ${op} ${a}$${op === '<' || op === '>' ? ` (attention : $${a}$ est exclu)` : ` (attention : $${a}$ est inclus)`}, puis additionne leurs probabilités.`,
      `Les valeurs qui conviennent sont $${xs.filter(ok).join('$, $')}$. Donc $P(X ${op} ${a}) = ${xs.map((x, i) => (ok(x) ? this.dec(ps[i] / 100) : null)).filter((v) => v !== null).join(' + ')} = ${this.dec(res)}$.`,
      { instruction: 'Saisir un nombre décimal, par exemple 0,45.' });
  },

  _x1S2jeu() {
    const faces = 6;
    const win = this.randInt(1, 3); // faces gagnantes
    const g = this.randInt(2, 10);
    const m = this.randInt(1, 4);
    const ask = this.randInt(0, 1);
    const pw = this.frac(win, faces);
    return this.makeExact('1S2', 2, 'Loi d\'un gain',
      'Modéliser un jeu par une variable aléatoire et déterminer sa loi',
      `On lance un dé équilibré à 6 faces. Si l'on obtient ${win === 1 ? 'un 6' : win === 2 ? 'un 5 ou un 6' : 'un 4, un 5 ou un 6'}, on gagne $${g}$ € ; sinon on perd $${m}$ €. On note $X$ le gain algébrique. ${ask === 0 ? `Calculer $P(X = ${g})$.` : `Calculer $P(X = -${m})$.`}`,
      ask === 0 ? this._xf(win, faces) : this._xf(faces - win, faces),
      'Les six faces sont équiprobables.',
      ask === 0 ? 'Compte les faces qui font gagner.' : 'Compte les faces qui font perdre.',
      `$X$ prend les valeurs $${g}$ et $-${m}$. $P(X = ${g}) = ${pw}$ et $P(X = -${m}) = ${this.frac(faces - win, faces)}$ (la somme vaut 1).`,
      { instruction: 'Saisir une fraction irréductible, par exemple 1/3.' });
  },

  _x1S2sd() {
    // loi à deux ou trois valeurs, variance décimale
    const xs = this.pickDistinct([-4, -2, -1, 0, 1, 2, 3, 5, 6], 3).sort((u, v) => u - v);
    let ps;
    do { ps = [this.randInt(1, 8), this.randInt(1, 8)].map((x) => x * 10); } while (ps[0] + ps[1] >= 100);
    ps.push(100 - ps[0] - ps[1]);
    const E = xs.reduce((s, x, i) => s + x * ps[i], 0) / 100;
    const Vv = xs.reduce((s, x, i) => s + (x - E) ** 2 * ps[i], 0) / 100;
    if (Vv === 0) return this._x1S2sd();
    return this.makeExact('1S2', 4, 'Écart type d\'une variable aléatoire',
      'Calculer l\'écart type $\\sigma(X) = \\sqrt{V(X)}$',
      `La loi de $X$ est donnée par :${this._xtab(['$x_i$', ...xs.map((x) => `$${x}$`)], [['$P(X = x_i)$', ...ps.map((p) => `$${this.dec(p / 100)}$`)]])}Calculer l'écart type $\\sigma(X)$, arrondi au centième.`,
      this._xd(Math.round(Math.sqrt(Vv) * 100) / 100, 2),
      'Calcule d\'abord l\'espérance $E(X)$.',
      '$V(X) = \\sum p_i (x_i - E(X))^2$ (ou $E(X^2) - E(X)^2$), puis $\\sigma(X) = \\sqrt{V(X)}$.',
      `$E(X) = ${xs.map((x, i) => `${this.dec(ps[i] / 100)} \\times ${this.paren(x)}`).join(' + ')} = ${this.dec(E)}$. $V(X) = ${this.dec(Vv, 6)}$, donc $\\sigma(X) = \\sqrt{${this.dec(Vv, 6)}} \\approx ${this.dec(Math.sqrt(Vv), 2)}$.`,
      { instruction: 'Saisir la valeur arrondie au centième, par exemple 1,73.' });
  },

  // ---- compléments demandés (alignement BO 2026) ----
  _x2N1card() {
    const N = this.randInt(20, 60);
    let a = this.randInt(2, 7);
    let b = this.randInt(2, 9);
    while (b === a || this.lcm(a, b) > N) { a = this.randInt(2, 7); b = this.randInt(2, 9); }
    if (a > b) [a, b] = [b, a];
    const l = this.lcm(a, b);
    const ca = Math.floor(N / a); const cb = Math.floor(N / b); const ci = Math.floor(N / l);
    const askU = Math.random() < 0.5;
    return this.makeExact('2N1', 3, askU ? 'Cardinal d\'une réunion' : 'Cardinal d\'une intersection',
      'Dénombrer les multiples d\'un entier dans un ensemble fini',
      `On note $E$ l'ensemble des entiers de $1$ à $${N}$, $A$ l'ensemble des multiples de $${a}$ de $E$ et $B$ celui des multiples de $${b}$ de $E$. Déterminer $\\text{Card}(A ${askU ? '\\cup' : '\\cap'} B)$.`,
      String(askU ? ca + cb - ci : ci),
      `Un entier est dans $A \\cap B$ s'il est multiple à la fois de $${a}$ et de $${b}$.`,
      askU ? '$\\text{Card}(A \\cup B) = \\text{Card}(A) + \\text{Card}(B) - \\text{Card}(A \\cap B)$.' : `Cherche le plus petit multiple commun de $${a}$ et $${b}$.`,
      `$\\text{Card}(A) = ${ca}$ et $\\text{Card}(B) = ${cb}$ (quotients entiers de $${N}$ par $${a}$ et $${b}$). Les éléments de $A \\cap B$ sont les multiples de $${l}$ : il y en a $${ci}$.${askU ? ` Donc $\\text{Card}(A \\cup B) = ${ca} + ${cb} - ${ci} = ${ca + cb - ci}$.` : ''}`,
      { instruction: 'Saisir un nombre entier.' });
  },

  _x2N3sig(tier) {
    const e = this.randInt(-3, 4);
    const m = this.randInt(100000, 999999);
    const x = m * 10 ** (e - 5);
    const k = this.randChoice([2, 3]);
    const ord = e;
    const mr = Math.round(m / 10 ** (6 - k)) * 10 ** (6 - k);
    const r = e <= 5 ? mr / 10 ** (5 - e) : mr * 10 ** (e - 5);
    const D = Math.max(0, -(ord - k + 1));
    const ctx = this.randChoice(['une masse (en g)', 'une longueur (en m)', 'une durée (en s)', 'un volume (en L)']);
    return this.makeExact('2N3', tier, 'Arrondi et chiffres significatifs',
      'Arrondir en donnant un nombre de chiffres significatifs adapté',
      `Un calcul donne ${ctx} : $${Number.isInteger(Math.round(x * 1e9) / 1e9) ? this._2N5_int(Math.round(x)) : this.dec(x, 9)}$. Arrondir ce résultat à ${k} chiffres significatifs.`,
      this._xd(r, D),
      'Les chiffres significatifs se comptent à partir du premier chiffre non nul.',
      `Repère le ${k === 2 ? 'deuxième' : 'troisième'} chiffre significatif, puis regarde le suivant pour arrondir.`,
      `Les ${k} premiers chiffres significatifs, après arrondi, donnent $${this.dec(r, D)}$.`,
      { instruction: 'Saisir la valeur arrondie (virgule décimale), par exemple 0,0347.' });
  },

  _x2N3cmp() {
    const quot = Math.random() < 0.5;
    if (!quot) {
      const [a, b, c, d] = [this.randInt(1, 12), this.randInt(2, 12), this.randInt(1, 12), this.randInt(2, 12)];
      if (a * d === b * c || this.gcd(a, b) !== 1 || this.gcd(c, d) !== 1) return this._x2N3cmp();
      return this.makeExact('2N3', 2, 'Comparer par la différence',
        'Comparer deux nombres en étudiant le signe de leur différence',
        `On pose $A = \\dfrac{${a}}{${b}}$ et $B = \\dfrac{${c}}{${d}}$. Calculer $A - B$ (fraction irréductible) ; on en déduira lequel est le plus grand.`,
        this._xf(a * d - b * c, b * d),
        'Réduis les deux fractions au même dénominateur.',
        'Le signe de $A - B$ indique lequel des deux nombres est le plus grand.',
        `$A - B = \\dfrac{${a * d} - ${b * c}}{${b * d}} = ${this.frac(a * d - b * c, b * d)}$, ${a * d - b * c > 0 ? 'positif : $A > B$' : 'négatif : $A < B$'}.`,
        { instruction: 'Saisir une fraction irréductible, par exemple -7/12.' });
    }
    const B = this.randChoice([20, 25, 40, 50, 80, 120, 150, 200]);
    const r = this.randChoice([0.5, 0.75, 1.2, 1.25, 1.5, 2, 2.5, 3, 0.8, 0.4]);
    const A = B * r;
    if (!Number.isInteger(A)) return this._x2N3cmp();
    const ctx = this.randChoice(['Le prix d\'un vélo électrique', 'La population d\'une ville', 'La distance d\'un trajet']);
    return this.makeExact('2N3', 2, 'Comparer par le quotient',
      'Comparer deux quantités positives par leur rapport',
      `${ctx} vaut $A = ${A}$ et celle d'une référence vaut $B = ${B}$. Calculer le rapport $\\dfrac{A}{B}$.`,
      this._xd(r),
      'Pour deux nombres strictement positifs, on compare leur quotient à 1.',
      `Calcule $${A} \\div ${B}$.`,
      `$\\dfrac{A}{B} = ${A} \\div ${B} = ${this.dec(r)}$ : ${r > 1 ? `$A$ vaut ${this.dec(r)} fois $B$, donc $A > B$` : r < 1 ? `$A$ ne représente que $${this.dec(r)}$ fois $B$, donc $A < B$` : '$A = B$'}.`,
      { instruction: 'Saisir un nombre décimal, par exemple 1,25.' });
  },

  _x2N4sq() {
    const r = this.randInt(1, 15);
    return this.makeExact('2N4', 1, 'Équation $x^2 = a$',
      'Résoudre une équation du type $x^2 = a$',
      `Résoudre dans $\\mathbb{R}$ l'équation $x^2 = ${r * r}$.`,
      `(${-r};${r})`,
      'Si $a > 0$, l\'équation $x^2 = a$ a deux solutions opposées.',
      `Cherche les nombres dont le carré vaut $${r * r}$.`,
      `$x^2 = ${r * r} \\iff x = -\\sqrt{${r * r}}$ ou $x = \\sqrt{${r * r}}$, soit $x = -${r}$ ou $x = ${r}$.`,
      { instruction: 'Saisir les deux solutions dans l\'ordre croissant : (x1 ; x2).' });
  },

  _x2N4inv() {
    const a = this.randNonZero(-12, 12);
    const b = this.randNonZero(-9, 9);
    return this.makeExact('2N4', 1, 'Équation $\\frac{a}{x} = b$',
      'Résoudre une équation du type $\\frac{a}{x} = b$',
      `Résoudre dans $\\mathbb{R}^*$ l'équation $\\dfrac{${a}}{x} = ${b}$.`,
      this._xf(a, b),
      'Pour $x \\neq 0$, multiplie les deux membres par $x$.',
      `On obtient $${this.coefStr(b, 'x')} = ${a}$.`,
      `Pour $x \\neq 0$ : $\\dfrac{${a}}{x} = ${b} \\iff ${a} = ${this.coefStr(b, 'x')} \\iff x = ${this.frac(a, b)}$.`);
  },

  _x2N4iso() {
    if (Math.random() < 0.5) {
      const a = this.randNonZero(-6, 6);
      const b = this.randNonZero(-6, 6);
      const c = this.randInt(-12, 12);
      return this.makeExact('2N4', 2, 'Isoler une variable',
        'Exprimer une variable en fonction d\'une autre dans $ax + by = c$',
        `On considère la relation $${this.poly([[a, 'x'], [b, 'y']])} = ${c}$. Exprimer $y$ en fonction de $x$ sous la forme $y = mx + p$ et saisir $(m ; p)$.`,
        `(${this._xf(-a, b)};${this._xf(c, b)})`,
        'Fais passer le terme en $x$ dans l\'autre membre.',
        `Divise ensuite les deux membres par $${b}$.`,
        `$${this.poly([[a, 'x'], [b, 'y']])} = ${c} \\iff ${this.coefStr(b, 'y')} = ${this.poly([[-a, 'x'], [c, '']])} \\iff y = ${this.poly([[this.frac(-a, b), 'x'], [this.frac(c, b), '']])}$.`,
        { instruction: 'Saisir (m ; p), par exemple (-2/3;4).' });
    }
    const f = this.randChoice([
      ['U = R \\times I', 'R', 'U', 'I', 'V', 'A', 'Ω'], ['d = v \\times t', 'v', 'd', 't', 'km', 'h', 'km/h'], ['P = U \\times I', 'I', 'P', 'U', 'W', 'V', 'A']]);
    const y = this.randChoice([2, 4, 5, 8, 10, 0.5, 2.5]);
    const res = this.randInt(2, 60);
    const x = res * y;
    return this.makeExact('2N4', 2, 'Isoler une variable dans une formule',
      'Exprimer une variable en fonction des autres et faire une application numérique',
      `On a la relation $${f[0]}$. Exprimer $${f[1]}$ en fonction de $${f[2]}$ et $${f[3]}$, puis calculer $${f[1]}$ (en ${f[6]}) pour $${f[2]} = ${this.dec(x)}$ ${f[4]} et $${f[3]} = ${this.dec(y)}$ ${f[5]}.`,
      String(res),
      `Divise les deux membres par $${f[3]}$ (non nul).`,
      `$${f[1]} = \\dfrac{${f[2]}}{${f[3]}}$.`,
      `$${f[1]} = \\dfrac{${f[2]}}{${f[3]}} = \\dfrac{${this.dec(x)}}{${this.dec(y)}} = ${res}$ ${f[6]}.`,
      { instruction: 'Saisir un nombre.' });
  },

  _x2A3abs(tier) {
    if (tier <= 2) {
      const a = this.randNonZero(-15, 15);
      const b = this.randNonZero(-15, 15);
      return this.makeExact('2A3', tier, 'Fonction valeur absolue',
        'Connaître la fonction valeur absolue',
        `Soit $f$ la fonction valeur absolue : $f(x) = |x|$. Calculer $f(${a}) - f(${b})$.`,
        String(Math.abs(a) - Math.abs(b)),
        '$|x| = x$ si $x \\ge 0$ et $|x| = -x$ si $x < 0$.',
        'Calcule séparément chaque image : elles sont positives ou nulles.',
        `$f(${a}) = |${a}| = ${Math.abs(a)}$ et $f(${b}) = |${b}| = ${Math.abs(b)}$, donc $f(${a}) - f(${b}) = ${Math.abs(a)} - ${Math.abs(b)} = ${Math.abs(a) - Math.abs(b)}$.`);
    }
    if (tier === 3) {
      const k = this.randInt(1, 12);
      const large = Math.random() < 0.5;
      return this.makeExact('2A3', 3, 'Inéquation avec la fonction valeur absolue',
        'Résoudre $|x| \\le k$ à l\'aide de la courbe de la fonction valeur absolue',
        `L'ensemble des solutions de l'inéquation $|x| ${large ? '\\le' : '<'} ${k}$ est un intervalle de bornes $m < M$. Saisir $(m ; M)$.`,
        `(${-k};${k})`,
        'La courbe de $x \\mapsto |x|$ est formée de deux demi-droites symétriques par rapport à l\'axe des ordonnées.',
        `$|x|$ est la distance de $x$ à $0$ : cherche les réels à distance ${large ? 'au plus' : 'strictement inférieure à'} ${k} de $0$.`,
        `$|x| ${large ? '\\le' : '<'} ${k} \\iff -${k} ${large ? '\\le' : '<'} x ${large ? '\\le' : '<'} ${k}$ : $S = ${this._2nd_iv(large, -k, k, large)}$, bornes $-${k}$ et $${k}$.`,
        { instruction: 'Saisir (m ; M), par exemple (-4;4).' });
    }
    const a = this.randInt(-8, -1);
    const b = this.randInt(1, 8);
    const M = Math.max(-a, b);
    return this.makeExact('2A3', 4, 'Extremums de la fonction valeur absolue',
      'Utiliser les variations de la fonction valeur absolue',
      `Soit $f(x) = |x|$ sur l'intervalle $[${a} ; ${b}]$. Donner le minimum $m$ et le maximum $M$ de $f$ sur cet intervalle : saisir $(m ; M)$.`,
      `(0;${M})`,
      'La fonction valeur absolue est décroissante sur $]-\\infty ; 0]$ et croissante sur $[0 ; +\\infty[$.',
      `L'intervalle contient $0$ : compare $f(${a})$ et $f(${b})$ pour le maximum.`,
      `$f$ est décroissante sur $[${a} ; 0]$ puis croissante sur $[0 ; ${b}]$ : son minimum est $f(0) = 0$ et son maximum est le plus grand de $f(${a}) = ${-a}$ et $f(${b}) = ${b}$, soit $${M}$.`,
      { instruction: 'Saisir (m ; M), par exemple (0;7).' });
  },

  _x2S1fc(tier) {
    const ctx = this.randChoice([
      ['élèves', 'pratiquent un sport', 'ne pratiquent pas de sport', 'Seconde', 'Première'],
      ['salariés', 'télétravaillent', 'ne télétravaillent pas', 'Cadres', 'Non-cadres'],
      ['spectateurs', 'sont venus en train', 'sont venus autrement', 'Moins de 30 ans', '30 ans et plus']]);
    const a = this.randInt(5, 60); const b = this.randInt(5, 60);
    const c = this.randInt(5, 60); const d = this.randInt(5, 60);
    const N = a + b + c + d;
    const rows = [[`**${ctx[3]}**`, `$${a}$`, `$${b}$`, `$${a + b}$`], [`**${ctx[4]}**`, `$${c}$`, `$${d}$`, `$${c + d}$`], ['**Total**', `$${a + c}$`, `$${b + d}$`, `$${N}$`]];
    const ask = this.randInt(0, 2);
    let q; let num; let den;
    if (ask === 0) { q = `la fréquence marginale des ${ctx[0]} qui ${ctx[1]}`; num = a + c; den = N; }
    else if (ask === 1) { q = `la fréquence des ${ctx[0]} qui ${ctx[1]} parmi les « ${ctx[3]} »`; num = a; den = a + b; }
    else { q = `la fréquence des « ${ctx[4]} » parmi les ${ctx[0]} qui ${ctx[1]}`; num = c; den = a + c; }
    return this.makeExact('2S1', tier, ask === 0 ? 'Fréquence marginale' : 'Fréquence conditionnelle',
      'Calculer des fréquences marginales et conditionnelles dans un tableau croisé',
      `Le tableau croisé suivant répartit des ${ctx[0]} selon deux caractères :${this._xtab(['', ctx[1], ctx[2], 'Total'], rows)}Calculer ${q} (fraction irréductible).`,
      this._xf(num, den),
      ask === 0 ? 'Une fréquence marginale se calcule sur l\'effectif total, à partir d\'une marge (total de ligne ou de colonne).' : 'Une fréquence conditionnelle se calcule à l\'intérieur d\'une sous-population : son effectif est le dénominateur.',
      ask === 0 ? 'Utilise le total de la colonne concernée.' : `Repère d'abord l'effectif de la sous-population de référence.`,
      `${ask === 0 ? `Total de la colonne : $${num}$ sur $${den}$` : `Sous-population de référence : $${den}$ individus, dont $${num}$ conviennent`}. Fréquence : $\\dfrac{${num}}{${den}}${this.frac(num, den) === `\\frac{${num}}{${den}}` ? '' : ` = ${this.frac(num, den)}`}$ $\\approx ${this.dec(num / den, 3)}$.`,
      { instruction: 'Saisir une fraction irréductible, par exemple 7/20.' });
  },

  _x1A1sgn() {
    const a = this.randChoice([1, -1, 2, -2, 3, -3]);
    const r1 = this.randInt(-7, 4);
    const r2 = r1 + this.randInt(1, 7);
    const sym = a > 0 ? '<' : '>';
    return this.makeExact('1A1', 3, 'Signe d\'un trinôme sous forme factorisée',
      'Étudier le signe d\'une fonction polynôme du second degré donnée sous forme factorisée',
      `Soit $f(x) = ${a === 1 ? '' : a === -1 ? '-' : a}(x ${this.formatSign(-r1)})(x ${this.formatSign(-r2)})$. L'ensemble des solutions de $f(x) ${sym} 0$ est un intervalle $]m ; M[$ : saisir $(m ; M)$.`.replace(/\(x [+-] 0\)/g, 'x'),
      `(${r1};${r2})`,
      'Un trinôme est du signe de $a$ à l\'extérieur de ses racines et du signe contraire entre elles.',
      `Les racines se lisent sur la forme factorisée ; ici $a = ${a}$.`,
      `Les racines sont $${r1}$ et $${r2}$ et $a = ${a} ${a > 0 ? '> 0' : '< 0'}$ : $f(x)$ est ${a > 0 ? 'négatif' : 'positif'} strictement entre les racines. Donc $S = ]${r1} ; ${r2}[$.`,
      { instruction: 'Saisir (m ; M), par exemple (-2;5).' });
  },

  _x1A1sp() {
    const r1 = this.randInt(-9, 8);
    const r2 = r1 + this.randInt(1, 9);
    if (r1 === 0 || r2 === 0) return this._x1A1sp();
    const S = r1 + r2; const P = r1 * r2;
    return this.makeExact('1A1', 4, 'Deux nombres de somme et produit donnés',
      'Déterminer deux nombres connaissant leur somme et leur produit',
      `Déterminer les deux réels dont la somme vaut $${S}$ et le produit vaut $${P}$.`,
      `(${r1};${r2})`,
      'Ces deux nombres sont les racines du trinôme $x^2 - sx + p$.',
      `Résous $${this.polyX([1, -S, P])} = 0$.`,
      `Ce sont les racines de $${this.polyX([1, -S, P])}$ : $\\Delta = ${S * S - 4 * P} = ${r2 - r1}^2$, d'où $x_1 = ${r1}$ et $x_2 = ${r2}$. Vérification : $${r1} + ${this.paren(r2)} = ${S}$ et $${r1} \\times ${this.paren(r2)} = ${P}$.`,
      { instruction: 'Saisir les deux nombres dans l\'ordre croissant : (x1 ; x2).' });
  },

  _x1A2cm() {
    const a = this.randChoice([0.01, 0.02, 0.05, 0.1, 0.5]);
    const b = this.randInt(2, 30);
    const c = this.randInt(100, 2000);
    const q0 = this.randChoice([10, 20, 40, 50, 100, 200]);
    const v = 2 * a * q0 + b;
    return this.makeExact('1A2', 3, 'Coût marginal',
      'Interpréter le nombre dérivé en contexte : coût marginal',
      `Le coût de production de $q$ objets est $C(q) = ${this.dec(a)}q^2 + ${b}q + ${c}$ (en euros). On assimile le coût marginal au nombre dérivé $C'(q)$. Calculer le coût marginal pour $q = ${q0}$.`,
      this._xd(v),
      'Le coût marginal est le nombre dérivé de la fonction coût.',
      '$(q^2)\' = 2q$ et $(q)\' = 1$ ; la dérivée d\'une constante est nulle.',
      `$C'(q) = ${this.poly([[this.dec(2 * a), 'q'], [b, '']])}$, donc $C'(${q0}) = ${this.dec(2 * a)} \\times ${q0} + ${b} = ${this.dec(v)}$ € : produire un objet de plus coûte environ $${this.dec(v)}$ €.`,
      { instruction: 'Saisir un nombre (entier ou décimal).' });
  },

  _x1A4dec() {
    const N0 = this.randChoice([50, 80, 100, 200, 500, 1000]);
    const k = this.randChoice([0.1, 0.2, 0.25, 0.5, 0.05, 2, 3]);
    return this.makeExact('1A4', 2, 'Décroissance exponentielle $e^{-kt}$',
      'Dériver une fonction $t \\mapsto Ae^{-kt}$',
      `La quantité d'un médicament dans le sang est modélisée par $Q(t) = ${N0}e^{-${this.dec(k)}t}$ (en mg, $t$ en heures). Calculer $Q'(0)$, vitesse d'évolution de la quantité à l'instant $t = 0$ (en mg/h).`,
      this._xd(-k * N0),
      'Pour tout réel $a$, la dérivée de $t \\mapsto e^{at}$ est $t \\mapsto ae^{at}$.',
      `Ici $a = -${this.dec(k)}$ et $e^0 = 1$.`,
      `$Q'(t) = ${N0} \\times (-${this.dec(k)})e^{-${this.dec(k)}t} = ${this.dec(-k * N0)}e^{-${this.dec(k)}t}$, donc $Q'(0) = ${this.dec(-k * N0)}$ : la quantité diminue (fonction décroissante).`,
      { instruction: 'Saisir un nombre (avec son signe).' });
  },

  _x1G3proj() {
    const [a, b] = this.randChoice([[1, 0], [0, 1], [1, 1], [1, -1], [1, 2], [2, 1], [3, 4], [1, 3], [2, -1]]);
    const xA = this.randInt(-6, 6); const yA = this.randInt(-6, 6);
    let c;
    do { c = this.randInt(-10, 10); } while (a * xA + b * yA + c === 0);
    const n2 = a * a + b * b;
    const t = a * xA + b * yA + c; // H = A - t/n2 (a ; b)
    const H = [[xA * n2 - t * a, n2], [yA * n2 - t * b, n2]];
    const eq = `${this.poly([[a, 'x'], [b, 'y'], [c, '']])} = 0`;
    return this.makeExact('1G3', 4, 'Projeté orthogonal d\'un point sur une droite',
      'Déterminer les coordonnées du projeté orthogonal d\'un point sur une droite',
      `Dans un repère orthonormé, on donne $A(${xA} ; ${yA})$ et la droite $D : ${eq}$. Déterminer les coordonnées du projeté orthogonal $H$ de $A$ sur $D$.`,
      `(${this._xf(H[0][0], H[0][1])};${this._xf(H[1][0], H[1][1])})`,
      `$\\vec{n}(${a} ; ${b})$ est normal à $D$ : $\\overrightarrow{AH}$ est colinéaire à $\\vec{n}$.`,
      `Écris $H(${this.poly([[xA, ''], [a, 't']])} ; ${this.poly([[yA, ''], [b, 't']])})$ et exprime que $H \\in D$.`.replace(/\(0 ; /, '(0 ; ').replace(/H\( ;/, 'H(0 ;'),
      `$H = A + t\\vec{n}$ avec $H \\in D$ : en remplaçant $x$ par $${this.poly([[xA, ''], [a, 't']])}$ et $y$ par $${this.poly([[yA, ''], [b, 't']])}$ dans l'équation de $D$, on obtient $${this.coefStr(n2, 't')} = ${-t}$, soit $t = ${this.frac(-t, n2)}$. Donc $H\\left(${this.frac(H[0][0], H[0][1])} ; ${this.frac(H[1][0], H[1][1])}\\right)$.`,
      { instruction: 'Saisir les coordonnées sous la forme (x ; y), par exemple (3/5;-1).' });
  },

  _x1S2kh() {
    const E = this.randNonZero(-30, 40) / 10;
    const Vv = this.randInt(1, 60) / 10;
    const m2 = Math.round((Vv + E * E) * 100) / 100;
    return this.makeExact('1S2', 3, 'Formule de König-Huygens',
      'Calculer une variance avec $V(X) = E(X^2) - E(X)^2$',
      `Pour une variable aléatoire $X$, on sait que $E(X) = ${this.dec(E)}$ et $E(X^2) = ${this.dec(m2)}$. Calculer $V(X)$.`,
      this._xd(m2 - E * E),
      'Formule de König-Huygens : $V(X) = E(X^2) - \\left(E(X)\\right)^2$.',
      `Calcule d'abord $\\left(E(X)\\right)^2 = ${this.paren(this.dec(E))}^2$.`,
      `$V(X) = ${this.dec(m2)} - ${this.paren(this.dec(E))}^2 = ${this.dec(m2)} - ${this.dec(E * E)} = ${this.dec(m2 - E * E)}$.`,
      { instruction: 'Saisir un nombre décimal.' });
  },

  // =========================================================================
  // 1A1 : Polynôme du second degré
  // =========================================================================
  gen_1A1(tier) {
    const xq = this._lyX('1A1', tier, [2, 1, 3, 3][tier - 1]);
    if (xq) return xq;
    const P = (a, b, c) => this.polyX([a, b, c]);
    if (tier === 1) {
      if (this.randInt(0, 1) === 0) {
        const a = this.randChoice([1, -1, 2, -2, 3, -3, 4, 5]);
        const b = this.randInt(-9, 9);
        const c = this.randNonZero(-9, 9);
        const d = b * b - 4 * a * c;
        return this.makeMcq('1A1', 1, 'Calcul du discriminant',
          "Calculer $\\Delta = b^2 - 4ac$",
          `Calculer le discriminant $\\Delta$ du trinôme $P(x) = ${P(a, b, c)}$.`,
          `$\\Delta = ${d}$`,
          [`$\\Delta = ${b * b + 4 * a * c}$`, `$\\Delta = ${-b * b - 4 * a * c}$`, `$\\Delta = ${b * b - 2 * a * c}$`, `$\\Delta = ${b - 4 * a * c}$`, `$\\Delta = ${4 * a * c - b * b}$`],
          "Identifie $a$, $b$ et $c$, puis applique $\\Delta = b^2 - 4ac$.",
          `Ici $a = ${a}$, $b = ${b}$ et $c = ${c}$. Attention aux signes !`,
          `$\\Delta = ${this.paren(b)}^2 - 4 \\times ${this.paren(a)} \\times ${this.paren(c)} = ${b * b} ${this.formatSign(-4 * a * c)} = ${d}$.`
        );
      }
      // nombre de solutions
      const cas = this.randInt(0, 2);
      let a; let b; let c;
      if (cas === 0) {
        do { a = this.randChoice([1, -1, 2, -2, 3]); b = this.randInt(-8, 8); c = this.randNonZero(-8, 8); } while (b * b - 4 * a * c <= 0);
      } else if (cas === 1) {
        a = this.randChoice([1, -1, 2, -2, 3, 4]);
        const r = this.randNonZero(-5, 5);
        b = -2 * a * r;
        c = a * r * r;
      } else {
        do { a = this.randChoice([1, -1, 2, -2, 3]); b = this.randInt(-6, 6); c = this.randNonZero(-9, 9); } while (b * b - 4 * a * c >= 0);
      }
      const d = b * b - 4 * a * c;
      const labels = ['Deux solutions réelles distinctes', 'Une seule solution réelle (racine double)', 'Aucune solution réelle', 'Une infinité de solutions réelles'];
      const ans = d > 0 ? labels[0] : d === 0 ? labels[1] : labels[2];
      return this._xa([String(d > 0 ? 2 : d === 0 ? 1 : 0), 'Saisir le nombre de solutions réelles (0, 1 ou 2).'], '1A1', 1, 'Nombre de solutions d\'une équation du second degré',
        "Utiliser le signe du discriminant",
        `Combien de solutions réelles l'équation $${P(a, b, c)} = 0$ admet-elle ?`,
        ans, labels.filter((l) => l !== ans),
        "Calcule le discriminant $\\Delta = b^2 - 4ac$ et étudie son signe.",
        `Ici $a = ${a}$, $b = ${b}$ et $c = ${c}$.`,
        `$\\Delta = ${this.paren(b)}^2 - 4 \\times ${this.paren(a)} \\times ${this.paren(c)} = ${d}$. ${d > 0 ? 'Comme $\\Delta > 0$, l\'équation admet deux solutions réelles distinctes.' : d === 0 ? 'Comme $\\Delta = 0$, l\'équation admet une unique solution (racine double).' : 'Comme $\\Delta < 0$, l\'équation n\'admet aucune solution réelle.'}`
      );
    }
    if (tier === 2) {
      const cas = this.randChoice([0, 0, 0, 1, 2]);
      let A; let B; let C; let sol; let wrong; let expl;
      let exA = null;
      if (cas === 0) {
        // k(x - r1)(qx - p)
        const q = this.randChoice([1, 1, 2, 3]);
        const k = q === 1 ? this.randChoice([1, -1, 2, -2]) : this.randChoice([1, -1]);
        const r1 = this.randInt(-6, 6);
        let p;
        do { p = this.randInt(-9, 9); } while (p === r1 * q || (q > 1 && p % q === 0));
        A = k * q; B = -k * (p + q * r1); C = k * p * r1;
        const r2s = this.frac(p, q);
        exA = r1 < p / q ? `(${r1};${this._xf(p, q)})` : `(${this._xf(p, q)};${r1})`;
        sol = this.randChoice([0]) === 0 ? `$S = ${this._1re_set([[r1, String(r1)], [p / q, r2s]])}$` : '';
        wrong = [
          `$S = ${this._1re_set([[-r1, String(-r1)], [-p / q, this.frac(-p, q)]])}$`,
          `$S = ${this._1re_set([[r1, String(r1)]])}$`,
          `$S = ${this._1re_set([[p, String(p)], [r1, String(r1)]])}$`,
          '$S = \\emptyset$'
        ];
        const D = B * B - 4 * A * C;
        expl = `$\\Delta = ${this.paren(B)}^2 - 4 \\times ${this.paren(A)} \\times ${this.paren(C)} = ${D} > 0$, donc deux solutions : $x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$ avec $\\sqrt{\\Delta} = ${Math.round(Math.sqrt(D))}$, ce qui donne $x_1 = ${String(r1)}$ et $x_2 = ${r2s}$. Donc ${sol}.`;
      } else if (cas === 1) {
        const k = this.randChoice([1, -1, 2, -2, 3]);
        const r = this.randNonZero(-6, 6);
        A = k; B = -2 * k * r; C = k * r * r;
        sol = `$S = \\{${r}\\}$`;
        wrong = [`$S = \\{${-r}\\}$`, `$S = \\{${Math.min(r, -r)} ; ${Math.max(r, -r)}\\}$`, '$S = \\emptyset$', `$S = \\{${r} ; ${2 * r}\\}$`];
        expl = `$\\Delta = ${this.paren(B)}^2 - 4 \\times ${this.paren(A)} \\times ${this.paren(C)} = 0$ : l'équation admet une unique solution $x_0 = -\\frac{b}{2a} = ${r}$. Donc ${sol}.`;
      } else {
        const k = this.randChoice([1, -1, 2, -2]);
        const h = this.randInt(-4, 4);
        const m = k * this.randInt(1, 6);
        A = k; B = -2 * k * h; C = k * h * h + m;
        sol = '$S = \\emptyset$';
        wrong = [`$S = \\{${h}\\}$`, `$S = \\{${Math.min(h - 1, h + 1)} ; ${h + 1}\\}$`, `$S = \\{${-h - 2} ; ${-h + 2}\\}$`, '$S = \\mathbb{R}$'];
        const D = B * B - 4 * A * C;
        expl = `$\\Delta = ${this.paren(B)}^2 - 4 \\times ${this.paren(A)} \\times ${this.paren(C)} = ${D} < 0$ : l'équation n'a aucune solution réelle, ${sol}.`;
      }
      return this._xa(exA ? [exA, 'Saisir les deux solutions dans l\'ordre croissant : (x1 ; x2).'] : null, '1A1', 2, 'Résolution d\'une équation du second degré',
        "Calculer $\\Delta$ puis les racines $\\frac{-b \\pm \\sqrt{\\Delta}}{2a}$",
        `Résoudre dans $\\mathbb{R}$ l'équation : $${P(A, B, C)} = 0$.`,
        sol, wrong,
        "Calcule d'abord le discriminant $\\Delta = b^2 - 4ac$.",
        "Si $\\Delta > 0$ : $x_{1,2} = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$ ; si $\\Delta = 0$ : $x_0 = -\\frac{b}{2a}$ ; si $\\Delta < 0$ : pas de solution réelle.",
        expl
      );
    }
    if (tier === 3) {
      const a = this.randChoice([1, -1, 2, -2, 3, -3]);
      const al = this.randInt(-5, 5);
      let be = this.randInt(-9, 9);
      if (al === 0 && be === 0) be = 3;
      const b = -2 * a * al;
      const c = a * al * al + be;
      const fx = P(a, b, c);
      const fam = this.randInt(0, 2);
      const inner = this.polyX([1, -2 * al, 0]);
      const sol = `On met $${a}$ en facteur dans les termes en $x$ et on complète le carré : $f(x) = ${a === 1 ? '' : a === -1 ? '-' : a}\\left(${inner}\\right) ${this.formatSign(c)}$ et $${inner} = (x ${this.formatSign(-al)})^2 - ${al * al}$, donc $f(x) = ${a === 1 ? '' : a === -1 ? '-' : a}(x ${this.formatSign(-al)})^2 ${this.formatSign(-a * al * al)} ${this.formatSign(c)} = ${this._1re_canon(a, al, be)}$ : $\\alpha = ${al}$ et $\\beta = ${be}$.`.replace(/\(x [+-] 0\)\^2 - 0/, 'x^2').replace(/\(x [+-] 0\)/g, 'x').replace(/ \+ 0(?![\d{,])/g, '').replace(/ - 0(?![\d{,])/g, '');
      if (fam === 0) {
        return this._xa([`(${a};${al};${be})`, 'Écrire $f(x) = a(x - \\alpha)^2 + \\beta$ et saisir (a ; α ; β).'], '1A1', 3, 'Forme canonique d\'un trinôme',
          "Écrire un trinôme sous la forme $a(x - \\alpha)^2 + \\beta$",
          `Quelle est la forme canonique de $f(x) = ${fx}$ ?`,
          `$f(x) = ${this._1re_canon(a, al, be)}$`,
          [`$f(x) = ${this._1re_canon(a, -al, be)}$`, `$f(x) = ${this._1re_canon(a, al, -be)}$`, `$f(x) = ${this._1re_canon(a, -al, c)}$`, `$f(x) = ${this._1re_canon(a, al, be + a)}$`, `$f(x) = ${this._1re_canon(-a, al, be)}$`],
          "Mets $a$ en facteur dans les termes en $x$, puis complète le carré : $x^2 + kx = \\left(x + \\frac{k}{2}\\right)^2 - \\frac{k^2}{4}$.",
          `Ici $a = ${a}$ et $b = ${b}$.`,
          `${sol} Donc $f(x) = ${this._1re_canon(a, al, be)}$.`
        );
      }
      if (fam === 1) {
        return this.makeMcq('1A1', 3, 'Sommet d\'une parabole',
          "Déterminer le sommet $S(\\alpha ; \\beta)$ de la parabole",
          `Quelles sont les coordonnées du sommet $S$ de la parabole d'équation $y = ${fx}$ ?`,
          `$S(${al} ; ${be})$`,
          [`$S(${-al} ; ${be})$`, `$S(${al} ; ${c})$`, `$S(${be} ; ${al})$`, `$S(${-al} ; ${-be})$`, `$S(${al} ; ${-be})$`],
          "L'abscisse du sommet est $\\alpha = -\\frac{b}{2a}$.",
          "L'ordonnée du sommet est $\\beta = f(\\alpha)$.",
          `${sol} Le sommet est $S(${al} ; ${be})$.`
        );
      }
      const typ = a > 0 ? 'minimum' : 'maximum';
      const other = a > 0 ? 'maximum' : 'minimum';
      return this.makeMcq('1A1', 3, 'Extremum d\'une fonction polynôme du second degré',
        "Relier signe de $a$, sommet et extremum",
        `Soit $f(x) = ${fx}$ définie sur $\\mathbb{R}$. Quelle affirmation est exacte ?`,
        `$f$ admet un ${typ} égal à $${be}$, atteint en $x = ${al}$`,
        [`$f$ admet un ${other} égal à $${be}$, atteint en $x = ${al}$`, `$f$ admet un ${typ} égal à $${al}$, atteint en $x = ${be}$`, `$f$ admet un ${typ} égal à $${c}$, atteint en $x = 0$`, `$f$ admet un ${typ} égal à $${be}$, atteint en $x = ${-al}$`],
        "Le sommet de la parabole donne l'extremum.",
        `Le coefficient $a = ${a}$ est ${a > 0 ? 'positif : parabole tournée vers le haut' : 'négatif : parabole tournée vers le bas'}.`,
        `${sol} Comme $a ${a > 0 ? '> 0' : '< 0'}$, $f$ admet un ${typ} égal à $${be}$, atteint en $x = ${al}$.`
      );
    }
    // tier 4
    const fam = this.randInt(0, 2);
    if (fam === 0) {
      const a = this.randChoice([1, -1, 2, -2, 3]);
      const r1 = this.randInt(-6, 4);
      const r2 = r1 + this.randInt(1, 6);
      const ops = [['>', false, true], ['<', false, false], ['\\ge', true, true], ['\\le', true, false]];
      const [op, closed, wantPos] = this.randChoice(ops);
      // sur l'extérieur le trinôme a le signe de a
      const outside = (a > 0) === wantPos;
      const ext = `$S = ${this._1re_iv(null, r1, false, closed)} \\cup ${this._1re_iv(r2, null, closed, false)}$`;
      const inn = `$S = ${this._1re_iv(r1, r2, closed, closed)}$`;
      const extO = `$S = ${this._1re_iv(null, r1, false, !closed)} \\cup ${this._1re_iv(r2, null, !closed, false)}$`;
      const innO = `$S = ${this._1re_iv(r1, r2, !closed, !closed)}$`;
      const ans = outside ? ext : inn;
      const B = -a * (r1 + r2);
      const C = a * r1 * r2;
      return this.makeMcq('1A1', 4, 'Inéquation du second degré',
        "Résoudre une inéquation à l'aide du signe d'un trinôme",
        `Résoudre dans $\\mathbb{R}$ l'inéquation : $${P(a, B, C)} ${op} 0$.`,
        ans, [outside ? inn : ext, outside ? innO : extO, outside ? extO : innO, `$S = ${this._1re_iv(-r2, -r1, closed, closed)}$`],
        "Cherche les racines du trinôme, puis applique la règle : signe de $a$ à l'extérieur des racines.",
        `Les racines sont $${r1}$ et $${r2}$ ; ici $a = ${a}$.`,
        `$\\Delta = ${B * B - 4 * a * C} > 0$ et les racines sont $x_1 = ${r1}$, $x_2 = ${r2}$. Le trinôme est du signe de $a = ${a}$ à l'extérieur des racines et du signe contraire entre elles. On cherche où il est ${wantPos ? 'positif' : 'négatif'} (${closed ? 'au sens large, racines incluses' : 'strictement, racines exclues'}) : ${ans}.`
      );
    }
    if (fam === 1) {
      const a = this.randInt(1, 4);
      const t = this.randInt(1, 4);
      const c = a * t * t;
      const m = 2 * a * t;
      return this._xa([`(${-m};${m})`, 'Saisir les deux valeurs de $m$ dans l\'ordre croissant : (m1 ; m2).'], '1A1', 4, 'Trinôme à paramètre',
        "Traduire « une unique solution » par $\\Delta = 0$",
        `Pour quelles valeurs du réel $m$ l'équation $${this.coefStr(a, 'x^2')} + mx + ${c} = 0$ admet-elle une unique solution ?`,
        `$m = ${-m}$ ou $m = ${m}$`,
        [`$m = ${m}$ uniquement`, `$m = ${-2 * t}$ ou $m = ${2 * t}$`, `$m = ${-4 * a * c}$ ou $m = ${4 * a * c}$`, `$m = ${-t}$ ou $m = ${t}$`],
        "L'équation admet une unique solution si et seulement si $\\Delta = 0$.",
        `$\\Delta = m^2 - 4 \\times ${a} \\times ${c} = m^2 - ${4 * a * c}$.`,
        `$\\Delta = m^2 - ${4 * a * c} = 0 \\iff m^2 = ${m * m} \\iff m = ${-m}$ ou $m = ${m}$.`
      );
    }
    const r1 = this.randNonZero(-6, 6);
    let r2;
    do { r2 = this.randNonZero(-7, 7); } while (r2 === r1);
    const B = -(r1 + r2);
    const C = r1 * r2;
    return this.makeMcq('1A1', 4, 'Somme et produit des racines',
      "Utiliser le produit des racines $x_1 x_2 = \\frac{c}{a}$",
      `On sait que $${r1}$ est une racine du trinôme $P(x) = ${P(1, B, C)}$. Quelle est l'autre racine ?`,
      `$x_2 = ${r2}$`,
      [`$x_2 = ${-r2}$`, `$x_2 = ${-r1}$`, `$x_2 = ${C}$`, `$x_2 = ${r2 + 1}$`],
      "Le produit des racines d'un trinôme $ax^2 + bx + c$ vaut $\\frac{c}{a}$.",
      `Ici le produit des racines vaut $${C}$ et l'une d'elles est $${r1}$.`,
      `$x_1 x_2 = \\frac{c}{a} = ${C}$, donc $x_2 = ${C} \\div ${this.paren(r1)} = ${r2}$. Vérification : $x_1 + x_2 = ${r1 + r2} = -\\frac{b}{a}$.`
    );
  },

  // =========================================================================
  // 1A2 : Nombre dérivé, taux de variation et tangente
  // =========================================================================
  /** Fonction usuelle aléatoire pour 1A2 : { s, f, df } */
  _1A2_func(kinds) {
    const kind = this.randChoice(kinds || ['quad', 'quad', 'inv', 'cube']);
    if (kind === 'quad') {
      const a = this.randNonZero(-3, 4);
      const b = this.randInt(-6, 6);
      const c = this.randInt(-6, 6);
      return { kind, s: this.polyX([a, b, c]), f: (x) => a * x * x + b * x + c, df: (x) => 2 * a * x + b, dfs: this.polyX([2 * a, b]) };
    }
    if (kind === 'cube') {
      const a = this.randChoice([1, -1, 2]);
      const b = this.randInt(-4, 4);
      const c = this.randInt(-5, 5);
      return { kind, s: this.polyX([a, 0, b, c]), f: (x) => a * x ** 3 + b * x + c, df: (x) => 3 * a * x * x + b, dfs: this.polyX([3 * a, 0, b]) };
    }
    const k = this.randChoice([1, 2, 3, 4, 6, -2, -3]);
    return { kind, s: `${k < 0 ? '-' : ''}\\frac{${Math.abs(k)}}{x}`, k, f: (x) => k / x, df: (x) => -k / (x * x), dfs: `${k > 0 ? '-' : ''}\\frac{${Math.abs(k)}}{x^2}` };
  },

  gen_1A2(tier) {
    const xq = this._lyX('1A2', tier, [3, 2, 1, 3][tier - 1]);
    if (xq) return xq;
    if (tier === 1) {
      const fam = this.randInt(0, 2);
      if (fam === 0) {
        const a = this.randNonZero(-3, 3);
        const b = this.randInt(-5, 5);
        const c = this.randInt(-5, 5);
        const x0 = this.randInt(-3, 3);
        const h = this.randInt(1, 3);
        const f = (x) => a * x * x + b * x + c;
        const tau = (f(x0 + h) - f(x0)) / h;
        return this.makeMcq('1A2', 1, 'Taux de variation entre deux valeurs',
          "Calculer $\\frac{f(b) - f(a)}{b - a}$",
          `Soit $f(x) = ${this.polyX([a, b, c])}$. Calculer le taux de variation de $f$ entre $${x0}$ et $${x0 + h}$.`,
          `$${tau}$`,
          [`$${f(x0 + h) - f(x0)}$`, `$${-tau}$`, `$${2 * a * x0 + b}$`, `$${tau + h}$`, `$${f(x0 + h) + f(x0)}$`],
          "Le taux de variation de $f$ entre $a$ et $b$ est $\\frac{f(b) - f(a)}{b - a}$.",
          `Calcule d'abord les images $f(${x0})$ et $f(${x0 + h})$.`,
          `$\\frac{f(${x0 + h}) - f(${x0})}{${x0 + h} - ${this.paren(x0)}} = \\frac{${f(x0 + h)} - ${this.paren(f(x0))}}{${h}} = ${tau}$.`
        );
      }
      if (fam === 1) {
        const x0 = this.randInt(-3, 3);
        const y0 = this.randInt(-4, 4);
        let dx = this.randNonZero(-4, 4);
        const dy = this.randNonZero(-6, 6);
        const x1 = x0 + dx;
        const y1 = y0 + dy;
        const m = this.frac(dy, dx);
        return this.makeMcq('1A2', 1, 'Nombre dérivé et pente de la tangente',
          "Lire $f'(a)$ comme coefficient directeur de la tangente",
          `La tangente à la courbe $\\mathcal{C}_f$ au point $A(${x0} ; ${y0})$ passe par le point $B(${x1} ; ${y1})$. Que vaut $f'(${x0})$ ?`,
          `$f'(${x0}) = ${m}$`,
          [`$f'(${x0}) = ${this.frac(dx, dy)}$`, `$f'(${x0}) = ${this.frac(-dy, dx)}$`, `$f'(${x0}) = ${y0}$`, `$f'(${x0}) = ${this.frac(y1, x1 === 0 ? 1 : x1)}$`],
          "$f'(a)$ est le coefficient directeur de la tangente au point d'abscisse $a$.",
          "Coefficient directeur de $(AB)$ : $\\frac{y_B - y_A}{x_B - x_A}$.",
          `$f'(${x0}) = \\frac{y_B - y_A}{x_B - x_A} = \\frac{${y1} - ${this.paren(y0)}}{${x1} - ${this.paren(x0)}} = ${m}$.`
        );
      }
      const x0 = this.randInt(-4, 4);
      const m = this.randNonZero(-5, 5);
      const p = this.randInt(-6, 6);
      const fx0 = m * x0 + p;
      return this._xa([`(${fx0};${m})`, `Saisir (f(${x0}) ; f'(${x0})).`], '1A2', 1, 'Lecture de la tangente',
        "Lire $f(a)$ et $f'(a)$ sur l'équation de la tangente",
        `La tangente à $\\mathcal{C}_f$ au point d'abscisse $${x0}$ a pour équation $y = ${this.poly([[m, 'x'], [p, '']])}$. Que valent $f(${x0})$ et $f'(${x0})$ ?`,
        `$f(${x0}) = ${fx0}$ et $f'(${x0}) = ${m}$`,
        [`$f(${x0}) = ${m}$ et $f'(${x0}) = ${fx0}$`, `$f(${x0}) = ${p}$ et $f'(${x0}) = ${m}$`, `$f(${x0}) = ${fx0}$ et $f'(${x0}) = ${p}$`, `$f(${x0}) = ${p}$ et $f'(${x0}) = ${x0}$`],
        "La tangente passe par le point $(a ; f(a))$ et a pour coefficient directeur $f'(a)$.",
        `Calcule l'ordonnée du point de la tangente d'abscisse $${x0}$.`,
        `Le coefficient directeur de la tangente est $f'(${x0}) = ${m}$ et le point de contact a pour ordonnée $f(${x0}) = ${m} \\times ${this.paren(x0)}${this._1re_sg(p)} = ${fx0}$.`
      );
    }
    if (tier === 2) {
      const F = this._1A2_func(['quad', 'quad', 'inv', 'cube', 'sqrt']);
      if (F.kind === 'sqrt' || F.s === undefined) {
        const k = this.randInt(1, 6);
        const x0 = k * k;
        return this.makeMcq('1A2', 2, 'Nombre dérivé de la fonction racine carrée',
          "Utiliser $(\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}$",
          `Soit $f(x) = \\sqrt{x}$. Calculer $f'(${x0})$.`,
          `$f'(${x0}) = ${this.frac(1, 2 * k)}$`,
          [`$f'(${x0}) = ${this.frac(1, k)}$`, `$f'(${x0}) = ${2 * k}$`, `$f'(${x0}) = ${this.frac(1, 2 * x0)}$`, `$f'(${x0}) = ${k}$`],
          "Pour $x > 0$, $(\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}$.",
          `$\\sqrt{${x0}} = ${k}$.`,
          `$f'(${x0}) = \\frac{1}{2\\sqrt{${x0}}} = \\frac{1}{2 \\times ${k}} = ${this.frac(1, 2 * k)}$.`
        );
      }
      let x0 = this.randInt(-3, 3);
      if (F.kind === 'inv' && x0 === 0) x0 = this.randChoice([1, 2, -1, -2, 3]);
      const v = F.df(x0);
      const vs = F.kind === 'inv' ? this.frac(-F.k, x0 * x0) : String(v);
      const wrong = F.kind === 'inv'
        ? [this.frac(F.k, x0 * x0), this.frac(F.k, x0), this.frac(-F.k, x0), this.frac(-F.k, 2 * x0)]
        : [String(F.f(x0)), String(-v), String(v + 2), String(F.df(x0 + 1))];
      return this.makeMcq('1A2', 2, 'Calcul d\'un nombre dérivé',
        "Calculer $f'(a)$ avec les dérivées usuelles",
        `Soit $f(x) = ${F.s}$. Calculer le nombre dérivé $f'(${x0})$.`,
        `$f'(${x0}) = ${vs}$`,
        wrong.map((w) => `$f'(${x0}) = ${w}$`),
        F.kind === 'inv' ? "Pour $x \\neq 0$, $\\left(\\frac{1}{x}\\right)' = -\\frac{1}{x^2}$." : "Dérivées usuelles : $(x^n)' = nx^{n-1}$ et $(ax + b)' = a$.",
        `$f'(x) = ${F.dfs}$.`,
        `$f'(x) = ${F.dfs}$, donc $f'(${x0}) = ${vs}$.`
      );
    }
    if (tier === 3) {
      const F = this._1A2_func();
      let x0 = this.randInt(-3, 3);
      if (F.kind === 'inv' && x0 === 0) x0 = this.randChoice([1, 2, -1, -2]);
      let m; let p; let ms; let ps; let fx0s;
      if (F.kind === 'inv') {
        m = [-F.k, x0 * x0];
        p = [2 * F.k, x0];
        ms = this.frac(m[0], m[1]);
        ps = this.frac(p[0], p[1]);
        fx0s = this.frac(F.k, x0);
      } else {
        m = F.df(x0); p = F.f(x0) - m * x0;
        ms = String(m); ps = String(p); fx0s = String(F.f(x0));
      }
      const eq = (a, b) => `$y = ${this._1re_poly([[a, 'x'], [b, '']])}$`;
      const wrongP = F.kind === 'inv' ? this.frac(F.k, x0) : String(F.f(x0));
      const wrongP2 = F.kind === 'inv' ? this.frac(-2 * F.k, x0) : String(F.f(x0) + m * x0);
      return this._xa([F.kind === 'inv' ? `(${this._xf(m[0], m[1])};${this._xf(p[0], p[1])})` : `(${m};${p})`, 'Saisir (m ; p) pour $y = mx + p$.'], '1A2', 3, 'Équation de la tangente',
        "Appliquer $y = f'(a)(x - a) + f(a)$",
        `Soit $f(x) = ${F.s}$. Déterminer l'équation réduite de la tangente à $\\mathcal{C}_f$ au point d'abscisse $${x0}$.`,
        eq(ms, ps),
        [eq(ms, wrongP), eq(wrongP, ms), eq(ms, wrongP2), eq(F.kind === 'inv' ? this.frac(F.k, x0 * x0) : String(-m), ps), F.kind === 'inv' ? eq(ms, this.frac(-2 * F.k, x0)) : eq(String(m), String(p + 1)), F.kind === 'inv' ? eq(this.frac(-F.k, x0), ps) : eq(String(m + 1), String(p))],
        "Formule : $y = f'(a)(x - a) + f(a)$.",
        `$f'(x) = ${F.dfs}$ ; calcule $f(${x0})$ et $f'(${x0})$.`,
        `$f(${x0}) = ${fx0s}$ et $f'(${x0}) = ${ms}$. Donc $y = ${this.paren(ms)} \\times ${x0 === 0 ? 'x' : `\\left(x - ${this.paren(x0)}\\right)`}${fx0s === '0' ? '' : ' + ' + this.paren(fx0s)}$, soit ${eq(ms, ps)}.`
      );
    }
    // tier 4
    const fam = this.randInt(0, 2);
    if (fam === 0) {
      const a = this.randNonZero(-3, 3);
      const b = this.randInt(-6, 6);
      const c = this.randInt(-5, 5);
      let m;
      do { m = this.randInt(-6, 6); } while (m === b);
      const xs = this.frac(m - b, 2 * a);
      return this.makeMcq('1A2', 4, 'Tangente parallèle à une droite donnée',
        "Traduire le parallélisme par l'égalité des coefficients directeurs",
        `Soit $f(x) = ${this.polyX([a, b, c])}$. En quel point d'abscisse la tangente à $\\mathcal{C}_f$ est-elle parallèle à la droite d'équation $y = ${this.poly([[m, 'x'], [this.randInt(-5, 5), '']])}$ ?`,
        `$x = ${xs}$`,
        [`$x = ${this.frac(m + b, 2 * a)}$`, `$x = ${this.frac(m - b, a)}$`, `$x = ${this.frac(b - m, 2 * a)}$`, `$x = ${this.frac(m, 2 * a)}$`, `$x = ${this.frac(m - b + 1, 2 * a)}$`, `$x = ${this.frac(2 * (m - b), a)}$`],
        "Deux droites sont parallèles si et seulement si elles ont le même coefficient directeur.",
        `Résous $f'(x) = ${m}$ avec $f'(x) = ${this.polyX([2 * a, b])}$.`,
        `$f'(x) = ${this.polyX([2 * a, b])}$. $f'(x) = ${m} \\iff ${2 * a}x = ${m - b} \\iff x = ${xs}$.`
      );
    }
    if (fam === 1) {
      // f(x) = 2x³ + px² + qx + r avec f'(x) = 6(x - r1)(x - r2)
      const r1 = this.randInt(-4, 2);
      const r2 = r1 + this.randInt(1, 4);
      const p = -3 * (r1 + r2);
      const q = 6 * r1 * r2;
      const r = this.randInt(-5, 5);
      return this._xa([`(${r1};${r2})`, 'Saisir les deux abscisses dans l\'ordre croissant : (x1 ; x2).'], '1A2', 4, 'Tangentes horizontales',
        "Résoudre $f'(x) = 0$",
        `Soit $f(x) = ${this.polyX([2, p, q, r])}$. En quels points d'abscisse la courbe $\\mathcal{C}_f$ admet-elle une tangente horizontale ?`,
        `$x = ${r1}$ et $x = ${r2}$`,
        [`$x = ${-r2}$ et $x = ${-r1}$`, `$x = ${r1}$ uniquement`, `$x = ${r1 + r2}$ et $x = ${r1 * r2}$`, `$x = ${r1 - 1}$ et $x = ${r2 + 1}$`],
        "Une tangente est horizontale lorsque son coefficient directeur $f'(a)$ est nul.",
        `$f'(x) = ${this.polyX([6, 2 * p, q])}$ ; factorise par 6.`,
        `$f'(x) = ${this.polyX([6, 2 * p, q])} = 6(${this.polyX([1, -(r1 + r2), r1 * r2])})$. Ce trinôme a pour racines $${r1}$ et $${r2}$ (somme $${r1 + r2}$, produit $${r1 * r2}$). Les tangentes horizontales sont aux points d'abscisses $${r1}$ et $${r2}$.`
      );
    }
    const a = this.randNonZero(-2, 2);
    const b = this.randInt(-4, 4);
    const c = this.randInt(-4, 4);
    let x0; let m;
    do { x0 = this.randInt(-3, 3); m = 2 * a * x0 + b; } while (m === 0);
    const fx0 = a * x0 * x0 + b * x0 + c;
    const xi = this.frac(m * x0 - fx0, m);
    return this.makeMcq('1A2', 4, 'Intersection d\'une tangente avec l\'axe des abscisses',
      "Écrire la tangente puis résoudre $y = 0$",
      `Soit $f(x) = ${this.polyX([a, b, c])}$ et $T$ la tangente à $\\mathcal{C}_f$ au point d'abscisse $${x0}$. En quelle abscisse $T$ coupe-t-elle l'axe des abscisses ?`,
      `$x = ${xi}$`,
      [`$x = ${this.frac(m * x0 + fx0, m)}$`, `$x = ${this.frac(fx0, m)}$`, `$x = ${this.frac(-fx0, m)}$`, `$x = ${this.frac(m * x0 - fx0, -m)}$`, `$x = ${this.frac(m * x0 - fx0 + m, m)}$`, `$x = ${this.frac(m * x0 - fx0 - m, m)}$`, `$x = ${this.frac(m, m * x0 - fx0 === 0 ? 1 : m * x0 - fx0)}$`],
      "Commence par l'équation $y = f'(a)(x - a) + f(a)$.",
      `$f(${x0}) = ${fx0}$ et $f'(${x0}) = ${m}$.`,
      `$T : y = ${this.poly([[m, 'x'], [fx0 - m * x0, '']])}$. $y = 0 \\iff ${this.coefStr(m, 'x')} = ${m * x0 - fx0} \\iff x = ${xi}$.`
    );
  },

  // =========================================================================
  // 1A3 : Fonction dérivée et variations
  // =========================================================================
  gen_1A3(tier) {
    const xq = this._lyX('1A3', tier, [2, 4, 2, 2][tier - 1]);
    if (xq) return xq;
    if (tier === 1) {
      if (this.randInt(0, 2) === 0) {
        const a = this.randNonZero(-6, 7);
        const n = this.randInt(3, 7);
        const b = this.randInt(-5, 5);
        const fs = this.poly([[a, `x^${n}`], [b, 'x']]);
        const ds = this.poly([[a * n, this.pow('x', n - 1)], [b, '']]);
        return this._xa([`(${a * n};${b})`, `Écrire $f'(x) = px^{${n - 1}} + q$ et saisir (p ; q).`], '1A3', 1, 'Dérivée d\'une fonction polynôme',
          "Appliquer $(x^n)' = nx^{n-1}$",
          `Déterminer la dérivée de $f(x) = ${fs}$.`,
          `$f'(x) = ${ds}$`,
          [`$f'(x) = ${this.poly([[a, this.pow('x', n - 1)], [b, '']])}$`, `$f'(x) = ${this.poly([[a * n, `x^${n}`], [b, '']])}$`, `$f'(x) = ${this.poly([[a * n, this.pow('x', n - 1)], [b, 'x']])}$`, `$f'(x) = ${this.poly([[a * (n - 1), this.pow('x', n - 1)], [b, '']])}$`, `$f'(x) = ${this.poly([[-a * n, this.pow('x', n - 1)], [b, '']])}$`, `$f'(x) = ${this.poly([[a * (n + 1), this.pow('x', n - 1)], [b, '']])}$`],
          "$(x^n)' = nx^{n-1}$ et $(kx)' = k$.",
          `Multiplie le coefficient par l'exposant ${n}, puis diminue l'exposant de 1.`,
          `$f'(x) = ${a} \\times ${n}${this.pow('x', n - 1)}${b === 0 ? '' : ' ' + this.formatSign(b)} = ${ds}$.`
        );
      }
      const a = this.randNonZero(-4, 4);
      const b = this.randInt(-6, 6);
      const c = this.randInt(-9, 9);
      const d = this.randInt(-9, 9);
      const fs = this.polyX([a, b, c, d]);
      const ds = this.polyX([3 * a, 2 * b, c]);
      return this._xa([`(${3 * a};${2 * b};${c})`, 'Écrire $f\'(x) = ax^2 + bx + c$ et saisir (a ; b ; c).'], '1A3', 1, 'Dérivée d\'une fonction polynôme',
        "Dériver terme à terme un polynôme",
        `Déterminer la dérivée de $f(x) = ${fs}$.`,
        `$f'(x) = ${ds}$`,
        [`$f'(x) = ${this.polyX([3 * a, 2 * b, c, d])}$`, `$f'(x) = ${this.polyX([3 * a, b, c])}$`, `$f'(x) = ${this.polyX([a, b, c])}$`, `$f'(x) = ${this.polyX([3 * a, 2 * b, 0])}$`, `$f'(x) = ${this.polyX([-3 * a, 2 * b, c])}$`, `$f'(x) = ${this.polyX([2 * a, b, c])}$`],
        "La dérivée d'une somme est la somme des dérivées ; la dérivée d'une constante est nulle.",
        "$(x^3)' = 3x^2$, $(x^2)' = 2x$, $(x)' = 1$.",
        `$f'(x) = ${a} \\times 3x^2 ${this.formatSign(b)} \\times 2x ${this.formatSign(c)} = ${ds}$.`.replace(/[+-] 0 \\times 2x /, '').replace(/ [+-] 0 = /, ' = ')
      );
    }
    if (tier === 2) {
      const fam = this.randInt(0, 3);
      if (fam === 0) {
        const a = this.randNonZero(-4, 5);
        const b = this.randNonZero(-6, 6);
        const c = this.randNonZero(-4, 5);
        const d = this.randNonZero(-6, 6);
        const ds = this.polyX([2 * a * c, a * d + b * c]);
        return this._xa([`(${2 * a * c};${a * d + b * c})`, 'Écrire $f\'(x) = mx + p$ et saisir (m ; p).'], '1A3', 2, 'Dérivée d\'un produit',
          "Appliquer $(uv)' = u'v + uv'$",
          `Déterminer la dérivée de $f(x) = (${this.polyX([a, b])})(${this.polyX([c, d])})$.`,
          `$f'(x) = ${ds}$`,
          [`$f'(x) = ${a * c}$`, `$f'(x) = ${this.polyX([a * c, a * d + b * c])}$`, `$f'(x) = ${this.polyX([2 * a * c, a * d - b * c])}$`, `$f'(x) = ${this.polyX([2 * a * c, b * d])}$`],
          "Pose $u(x) = " + this.polyX([a, b]) + "$ et $v(x) = " + this.polyX([c, d]) + "$.",
          `$u'(x) = ${a}$ et $v'(x) = ${c}$.`,
          `$f'(x) = u'v + uv' = ${a}(${this.polyX([c, d])}) ${c > 0 ? '+' : '-'} ${Math.abs(c) === 1 ? '' : Math.abs(c)}(${this.polyX([a, b])}) = ${ds}$.`
        );
      }
      if (fam === 1) {
        let a; let b; let c; let d;
        do { a = this.randNonZero(-4, 4); b = this.randInt(-5, 5); c = this.randChoice([1, 1, 2, -1]); d = this.randNonZero(-5, 5); } while (a * d - b * c === 0);
        const N = a * d - b * c;
        const den = `(${this.polyX([c, d])})^2`;
        const ans = `${N < 0 ? '-' : ''}\\frac{${Math.abs(N)}}{${den}}`;
        const wr = (n) => `$f'(x) = ${n < 0 ? '-' : ''}\\frac{${Math.abs(n)}}{${den}}$`;
        return this._xa([String(N), `On a $f'(x) = \\dfrac{k}{${den}}$ : saisir $k$.`], '1A3', 2, 'Dérivée d\'un quotient',
          "Appliquer $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$",
          `Déterminer la dérivée de $f(x) = \\frac{${this.polyX([a, b])}}{${this.polyX([c, d])}}$ sur son ensemble de définition.`,
          `$f'(x) = ${ans}$`,
          [wr(-N), wr(a * d + b * c), wr(a * d), `$f'(x) = \\frac{${this.polyX([a, b])}}{${den}}`.replace(/$/, '$')],
          "Pose $u(x) = " + this.polyX([a, b]) + "$ et $v(x) = " + this.polyX([c, d]) + "$.",
          `$u'(x) = ${a}$ et $v'(x) = ${c}$ ; développe le numérateur $u'v - uv'$.`,
          `$f'(x) = \\frac{${a}(${this.polyX([c, d])}) - ${this.paren(c)}(${this.polyX([a, b])})}{${den}} = ${ans}$.`
        );
      }
      if (fam === 2) {
        const a = this.randNonZero(-4, 4);
        const b = this.randNonZero(-6, 6);
        const k = this.randChoice([1, 2, 3, 5, -1, -2]);
        const N = -k * a;
        const den = `(${this.polyX([a, b])})^2`;
        const mk = (n) => `$f'(x) = ${n < 0 ? '-' : ''}\\frac{${Math.abs(n)}}{${den}}$`;
        return this._xa([String(N), `On a $f'(x) = \\dfrac{k}{${den}}$ : saisir $k$.`], '1A3', 2, 'Dérivée de l\'inverse d\'une fonction',
          "Appliquer $\\left(\\frac{1}{v}\\right)' = -\\frac{v'}{v^2}$",
          `Déterminer la dérivée de $f(x) = ${k < 0 ? '-' : ''}\\frac{${Math.abs(k)}}{${this.polyX([a, b])}}$.`,
          mk(N),
          [mk(-N), mk(k), `$f'(x) = ${N < 0 ? '-' : ''}\\frac{${Math.abs(N)}}{${this.polyX([a, b])}}$`, mk(N * 2)],
          "$\\left(\\frac{k}{v}\\right)' = -\\frac{k v'}{v^2}$.",
          `Ici $v(x) = ${this.polyX([a, b])}$ et $v'(x) = ${a}$.`,
          `$f'(x) = -\\frac{${this.paren(k)} \\times ${this.paren(a)}}{${den}} = ${mk(N).slice(9, -1)}$.`
        );
      }
      const a = this.randNonZero(-3, 4);
      const b = this.randNonZero(-6, 6);
      const top = this.polyX([3 * a, b]);
      return this._xa([`(${3 * a};${b})`, 'Écrire $f\'(x) = \\dfrac{mx + p}{2\\sqrt{x}}$ et saisir (m ; p).'], '1A3', 2, 'Dérivée d\'un produit avec la racine carrée',
        "Appliquer $(uv)' = u'v + uv'$ avec $(\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}$",
        `Déterminer la dérivée sur $]0 ; +\\infty[$ de $f(x) = (${this.polyX([a, b])})\\sqrt{x}$.`,
        `$f'(x) = \\frac{${top}}{2\\sqrt{x}}$`,
        [`$f'(x) = \\frac{${a}}{2\\sqrt{x}}$`, `$f'(x) = \\frac{${this.polyX([2 * a, b])}}{2\\sqrt{x}}$`, `$f'(x) = \\frac{${this.polyX([3 * a, -b])}}{2\\sqrt{x}}$`, `$f'(x) = ${this.coefStr(a, '\\sqrt{x}')}`.replace(/$/, '$')],
        "Pose $u(x) = " + this.polyX([a, b]) + "$ et $v(x) = \\sqrt{x}$.",
        "Mets tout au même dénominateur $2\\sqrt{x}$ en utilisant $\\sqrt{x} \\times \\sqrt{x} = x$.",
        `$f'(x) = ${a}\\sqrt{x} + \\frac{${this.polyX([a, b])}}{2\\sqrt{x}} = \\frac{${2 * a}x + ${this.polyX([a, b])}}{2\\sqrt{x}} = \\frac{${top}}{2\\sqrt{x}}$.`.replace('+ -', '- ')
      );
    }
    if (tier === 3) {
      if (this.randInt(0, 2) === 0) {
        const a = this.randNonZero(-3, 3);
        const al = this.randInt(-5, 5);
        const b = -2 * a * al;
        const c = this.randInt(-6, 6);
        const wantInc = this.randInt(0, 1) === 1;
        const right = (a > 0) === wantInc;
        const ans = right ? `$[${al} ; +\\infty[$` : `$]-\\infty ; ${al}]$`;
        return this.makeMcq('1A3', 3, 'Variations d\'une fonction polynôme du second degré',
          "Étudier le signe de $f'(x)$",
          `Soit $f(x) = ${this.polyX([a, b, c])}$. Sur quel intervalle $f$ est-elle ${wantInc ? 'croissante' : 'décroissante'} ?`,
          ans,
          [right ? `$]-\\infty ; ${al}]$` : `$[${al} ; +\\infty[$`, `$[${-al} ; +\\infty[$`, `$]-\\infty ; ${-al}]$`, `$[${c} ; +\\infty[$`],
          "Calcule $f'(x)$ puis étudie son signe.",
          `$f'(x) = ${this.polyX([2 * a, b])}$ s'annule en $x = ${al}$.`,
          `$f'(x) = ${this.polyX([2 * a, b])}$ est ${a > 0 ? 'négative puis positive' : 'positive puis négative'} (elle change de signe en $${al}$). Donc $f$ est ${wantInc ? 'croissante' : 'décroissante'} sur ${ans}.`
        );
      }
      const s = this.randChoice([1, -1]);
      const r1 = this.randInt(-4, 2);
      const r2 = r1 + this.randInt(1, 5);
      const A = 2 * s;
      const B = -3 * s * (r1 + r2);
      const C = 6 * s * r1 * r2;
      const D = this.randInt(-6, 6);
      const wantInc = this.randInt(0, 1) === 1;
      // f' = 6s(x - r1)(x - r2) : positive à l'extérieur si s > 0
      const insideInc = s < 0;
      const inside = `$[${r1} ; ${r2}]$`;
      const outside = `$]-\\infty ; ${r1}]$ et sur $[${r2} ; +\\infty[$`;
      const ans = (wantInc === insideInc) ? inside : outside;
      return this.makeMcq('1A3', 3, 'Variations d\'une fonction polynôme de degré 3',
        "Factoriser $f'(x)$ et dresser son tableau de signes",
        `Soit $f(x) = ${this.polyX([A, B, C, D])}$. ${wantInc ? 'Où' : 'Où'} la fonction $f$ est-elle ${wantInc ? 'croissante' : 'décroissante'} ?`,
        `Sur ${ans}`,
        [`Sur ${ans === inside ? outside : inside}`, `Sur $[${-r2} ; ${-r1}]$`, `Sur $]-\\infty ; ${-r2}]$ et sur $[${-r1} ; +\\infty[$`, `Sur $[${r1 + r2} ; ${r1 * r2 > r1 + r2 ? r1 * r2 : r1 + r2 + 1}]$`],
        "Calcule $f'(x)$, puis cherche ses racines.",
        `$f'(x) = ${this.polyX([3 * A, 2 * B, C])} = ${6 * s}(x ${this.formatSign(-r1)})(x ${this.formatSign(-r2)})$.`.replace('(x + 0)', 'x').replace('(x - 0)', 'x'),
        `$f'(x) = ${6 * s}(x ${this.formatSign(-r1)})(x ${this.formatSign(-r2)})$ s'annule en $${r1}$ et $${r2}$ ; elle est du signe de $${6 * s}$ à l'extérieur des racines. Donc $f$ est ${wantInc ? 'croissante' : 'décroissante'} sur ${ans}.`.replace('(x + 0)', 'x').replace('(x - 0)', 'x')
      );
    }
    // tier 4
    if (this.randInt(0, 2) > 0) {
      const s = this.randChoice([1, -1]);
      const r1 = this.randInt(-3, 2);
      const r2 = r1 + this.randInt(1, 4);
      const A = 2 * s;
      const B = -3 * s * (r1 + r2);
      const C = 6 * s * r1 * r2;
      const D = this.randInt(-6, 6);
      const f = (x) => A * x ** 3 + B * x * x + C * x + D;
      const wantMax = this.randInt(0, 1) === 1;
      // s > 0 : max en r1, min en r2
      const xe = (wantMax === (s > 0)) ? r1 : r2;
      const xo = xe === r1 ? r2 : r1;
      const typ = wantMax ? 'maximum' : 'minimum';
      return this._xa([`(${xe};${f(xe)})`, 'Saisir (x ; y) : abscisse où l\'extremum est atteint, puis sa valeur.'], '1A3', 4, 'Extremum local d\'une fonction polynôme',
        "Repérer un changement de signe de $f'$",
        `Soit $f(x) = ${this.polyX([A, B, C, D])}$ définie sur $\\mathbb{R}$. Quel est le ${typ} local de $f$ ?`,
        `$${f(xe)}$, atteint en $x = ${xe}$`,
        [`$${f(xo)}$, atteint en $x = ${xo}$`, `$${f(xe) + 1}$, atteint en $x = ${xe}$`, `$${xe}$, atteint en $x = ${f(xe)}$`, `$${f(-xe)}$, atteint en $x = ${-xe}$`],
        "Un extremum local est atteint là où $f'$ s'annule en changeant de signe.",
        `$f'(x) = ${6 * s}(x ${this.formatSign(-r1)})(x ${this.formatSign(-r2)})$.`.replace('(x + 0)', 'x').replace('(x - 0)', 'x'),
        `$f'$ s'annule en $${r1}$ et $${r2}$. ${wantMax ? 'Elle passe du positif au négatif' : 'Elle passe du négatif au positif'} en $${xe}$ : $f$ y admet un ${typ} local égal à $f(${xe}) = ${f(xe)}$.`
      );
    }
    const a = this.randInt(1, 5);
    const t = this.randInt(1, 6);
    const b = a * t * t;
    return this._xa([`(${t};${2 * a * t})`, 'Saisir (x ; m) : abscisse où le minimum est atteint, puis la valeur $m$ du minimum.'], '1A3', 4, 'Optimisation sur $]0 ; +\\infty[$',
      "Étudier les variations pour trouver un minimum",
      `Soit $f(x) = ${this.coefStr(a, 'x')} + \\frac{${b}}{x}$ sur $]0 ; +\\infty[$. Quel est le minimum de $f$ ?`,
      `$${2 * a * t}$, atteint en $x = ${t}$`,
      [`$${a * t + b}$, atteint en $x = 1$`, `$${a * t}$, atteint en $x = ${t}$`, `$${2 * a * t}$, atteint en $x = ${t * t}$`, `$${a + b}$, atteint en $x = 1$`],
      "Calcule $f'(x)$ et mets-la au même dénominateur.",
      `$f'(x) = ${a} - \\frac{${b}}{x^2} = \\frac{${this.coefStr(a, 'x^2')} - ${b}}{x^2}$.`,
      `$f'(x) = \\frac{${this.coefStr(a, 'x^2')} - ${b}}{x^2}$ est négative sur $]0 ; ${t}]$ et positive sur $[${t} ; +\\infty[$. Le minimum est $f(${t}) = ${a * t} + ${b / t} = ${2 * a * t}$.`
    );
  },

  // =========================================================================
  // 1A4 : Fonction exponentielle
  // =========================================================================
  _1A4_exp(k) {
    // exposant kx proprement écrit
    return k === 0 ? '1' : `e^{${this.coefStr(k, 'x')}}`;
  },

  gen_1A4(tier) {
    const xq = this._lyX('1A4', tier, [3, 3, 3, 3][tier - 1]);
    if (xq) return xq;
    if (tier === 1) {
      const fam = this.randInt(0, 2);
      if (fam === 0) {
        const a = this.randNonZero(-5, 6);
        const b = this.randNonZero(-5, 6);
        let c = this.randNonZero(-4, 5);
        const k = a + b - c;
        return this._xa(k === 1 ? null : [String(k), 'Le résultat s\'écrit $e^{kx}$ : saisir $k$.'], '1A4', 1, 'Propriétés algébriques de l\'exponentielle',
          "Utiliser $e^a e^b = e^{a+b}$ et $\\frac{e^a}{e^b} = e^{a-b}$",
          `Simplifier l'expression : $A = \\frac{${this._1A4_exp(a)} \\times ${this._1A4_exp(b)}}{${this._1A4_exp(c)}}$.`,
          `$A = ${this._1A4_exp(k)}$`,
          [`$A = ${this._1A4_exp(a * b - c)}$`, `$A = ${this._1A4_exp(a + b + c)}$`, `$A = ${this._1A4_exp(a - b - c)}$`, `$A = ${this._1A4_exp(c - a - b)}$`, `$A = ${this._1A4_exp(k + 1)}$`, `$A = ${this._1A4_exp(k - 1)}$`],
          "$e^u \\times e^v = e^{u+v}$ et $\\frac{e^u}{e^w} = e^{u-w}$.",
          `Additionne les exposants du numérateur puis soustrais celui du dénominateur.`,
          `$A = e^{${this.coefStr(a, 'x')} ${this.formatSign(b).replace(/(\d+)$/, '$1x').replace(/^([+-]) 1x$/, '$1 x')} ${this.formatSign(-c).replace(/(\d+)$/, '$1x').replace(/^([+-]) 1x$/, '$1 x')}} = ${this._1A4_exp(k)}$.`
        );
      }
      if (fam === 1) {
        const a = this.randNonZero(-4, 4);
        const n = this.randInt(2, 4);
        const b = this.randNonZero(-5, 5);
        const k = a * n + b;
        return this._xa(k === 1 ? null : [String(k), 'Le résultat s\'écrit $e^{kx}$ : saisir $k$.'], '1A4', 1, 'Puissance d\'une exponentielle',
          "Utiliser $(e^a)^n = e^{na}$",
          `Simplifier l'expression : $B = \\left(${this._1A4_exp(a)}\\right)^${n} \\times ${this._1A4_exp(b)}$.`,
          `$B = ${this._1A4_exp(k)}$`,
          [`$B = ${this._1A4_exp(a + n + b)}$`, `$B = ${this._1A4_exp(a * n * b)}$`, `$B = ${this._1A4_exp(a ** n + b)}$`, `$B = ${this._1A4_exp(a * n - b)}$`, `$B = ${this._1A4_exp(k + 1)}$`, `$B = ${this._1A4_exp(k - 1)}$`],
          "$(e^a)^n = e^{na}$.",
          `$\\left(${this._1A4_exp(a)}\\right)^${n} = ${this._1A4_exp(a * n)}$.`,
          `$B = ${this._1A4_exp(a * n)} \\times ${this._1A4_exp(b)} = ${this._1A4_exp(k)}$.`
        );
      }
      const a = this.randInt(2, 9);
      const b = this.randNonZero(-6, 6);
      const c = this.randInt(2, 7);
      const k = a + b - c;
      const E = (n) => (n === 0 ? '1' : n === 1 ? 'e' : `e^{${n}}`);
      return this._xa(k === 1 ? null : [String(k), 'Le résultat s\'écrit $e^{n}$ : saisir $n$.'], '1A4', 1, 'Calcul avec des puissances de $e$',
        "Utiliser $e^a e^b = e^{a+b}$ et $\\frac{e^a}{e^b} = e^{a-b}$",
        `Écrire sous la forme d'une seule puissance de $e$ : $C = \\frac{${E(a)} \\times ${E(b)}}{${E(c)}}$.`,
        `$C = ${E(k)}$`,
        [`$C = ${E(a * b - c)}$`, `$C = ${E(a + b + c)}$`, `$C = ${E(a * b === c ? k + 2 : Math.round(a * b / c) === a * b / c ? a * b / c : k - 1)}$`, `$C = ${E(-k)}$`],
        "$e^a \\times e^b = e^{a+b}$ et $\\frac{e^a}{e^b} = e^{a-b}$.",
        `Calcule l'exposant $${a} ${this.formatSign(b)} - ${c}$.`,
        `$C = e^{${a} ${this.formatSign(b)} - ${c}} = ${E(k)}$.`
      );
    }
    if (tier === 2) {
      const fam = this.randInt(0, 2);
      if (fam === 0) {
        const k = this.randNonZero(-6, 7);
        const m = 0;
        const ex = this.poly([[k, 'x'], [m, '']]);
        const ans = `$f'(x) = ${this.coefStr(k, `e^{${ex}}`)}$`;
        return this._xa([String(k), `On a $f'(x) = c\\,e^{${ex}}$ : saisir $c$.`], '1A4', 2, 'Dérivée de $e^{kx}$',
          "Appliquer $(e^{kx})' = ke^{kx}$",
          `Déterminer la dérivée de la fonction $f(x) = e^{${ex}}$.`,
          ans,
          [`$f'(x) = e^{${ex}}$`, `$f'(x) = ${this.coefStr(k, 'x')}e^{${ex}}$`, `$f'(x) = ${this.coefStr(m, `e^{${ex}}`)}$`, `$f'(x) = ${this.coefStr(k, `e^{${this.poly([[k, 'x'], [m - 1, '']])}}`)}$`],
          "Pour tout réel $k$, $(e^{kx})' = k e^{kx}$.",
          `Ici le coefficient de $x$ dans l'exposant est $k = ${k}$.`,
          `D'après $(e^{kx})' = ke^{kx}$ avec $k = ${k}$ : ${ans}.`
        );
      }
      if (fam === 1) {
        const a = this.randNonZero(-4, 5);
        const b = this.randInt(-6, 6);
        const ans = `$f'(x) = (${this.polyX([a, a + b])})e^{x}$`;
        return this._xa([`(${a};${a + b})`, 'Écrire $f\'(x) = (mx + p)e^{x}$ et saisir (m ; p).'], '1A4', 2, 'Dérivée d\'un produit avec $e^x$',
          "Appliquer $(uv)' = u'v + uv'$",
          `Déterminer la dérivée de $f(x) = (${this.polyX([a, b])})e^{x}$.`,
          ans,
          [`$f'(x) = ${this.coefStr(a, 'e^{x}')}$`, `$f'(x) = (${this.polyX([a, b])})e^{x}$`, `$f'(x) = (${this.polyX([a, b - a])})e^{x}$`, `$f'(x) = (${this.polyX([a, a * b])})e^{x}$`],
          "Pose $u(x) = " + this.polyX([a, b]) + "$ et $v(x) = e^x$.",
          `$u'(x) = ${a}$ et $v'(x) = e^x$ ; factorise par $e^x$.`,
          `$f'(x) = ${this.coefStr(a, 'e^{x}')} + (${this.polyX([a, b])})e^{x} = (${this.polyX([a, a + b])})e^{x}$.`
        );
      }
      const a = this.randNonZero(-3, 4);
      const b = this.randInt(-5, 5);
      const k = this.randChoice([-3, -2, -1, 2, 3]);
      const ek = `e^{${this.coefStr(k, 'x')}}`;
      const ans = `$f'(x) = (${this.polyX([a * k, a + b * k])})${ek}$`;
      return this._xa([`(${a * k};${a + b * k})`, `Écrire $f'(x) = (mx + p)${ek}$ et saisir (m ; p).`], '1A4', 2, 'Dérivée de $(ax + b)e^{kx}$',
        "Combiner produit et $(e^{kx})' = ke^{kx}$",
        `Déterminer la dérivée de $f(x) = (${this.polyX([a, b])})${ek}$.`,
        ans,
        [`$f'(x) = (${this.polyX([a * k, a + b])})${ek}$`, `$f'(x) = ${this.coefStr(a * k, ek)}$`, `$f'(x) = (${this.polyX([a, a + b * k])})${ek}$`, `$f'(x) = (${this.polyX([a * k, b * k - a])})${ek}$`],
        `Pose $u(x) = ${this.polyX([a, b])}$ et $v(x) = ${ek}$, donc $v'(x) = ${this.coefStr(k, ek)}$.`,
        "Factorise par l'exponentielle.",
        `$f'(x) = ${this.coefStr(a, ek)} + (${this.polyX([a, b])}) \\times ${this.paren(k)}${ek} = (${this.polyX([a * k, a + b * k])})${ek}$.`
      );
    }
    if (tier === 3) {
      const fam = this.randInt(0, 2);
      let a; let b; let c; let d;
      do { a = this.randNonZero(-4, 4); c = this.randInt(-4, 4); } while (a === c);
      b = this.randInt(-6, 6);
      d = this.randInt(-6, 6);
      const L = this.poly([[a, 'x'], [b, '']]);
      if (fam === 0) {
        const R = this.poly([[c, 'x'], [d, '']]);
        const xs = this.frac(d - b, a - c);
        return this._xa([this._xf(d - b, a - c)], '1A4', 3, 'Équation avec des exponentielles',
          "Utiliser $e^A = e^B \\iff A = B$",
          `Résoudre dans $\\mathbb{R}$ l'équation : $e^{${L}} = ${this.pow('e', R)}$.`,
          `$S = \\{${xs}\\}$`,
          [`$S = \\{${this.frac(d + b, a - c)}\\}$`, `$S = \\{${this.frac(d - b, a + c === 0 ? 1 : a + c)}\\}$`, '$S = \\emptyset$', `$S = \\{${this.frac(b - d, a - c)}\\}$`, `$S = \\{${this.frac(d - b + 1, a - c)}\\}$`, `$S = \\{${this.frac(d - b - 1, a - c)}\\}$`],
          "La fonction exponentielle est strictement croissante : $e^A = e^B \\iff A = B$.",
          `Résous l'équation du premier degré $${L} = ${R}$.`,
          `$e^{${L}} = ${this.pow('e', R)} \\iff ${L} = ${R} \\iff ${this.coefStr(a - c, 'x')} = ${d - b} \\iff x = ${xs}$.`
        );
      }
      if (fam === 1) {
        const xs = this.frac(-b, a);
        const k = this.randChoice([1, 1, 2, 3]);
        const lhs = k === 1 ? `e^{${L}} = 1` : `${k}e^{${L}} = ${k}`;
        return this._xa([this._xf(-b, a)], '1A4', 3, 'Équation $e^{u(x)} = 1$',
          "Utiliser $e^A = 1 \\iff A = 0$",
          `Résoudre dans $\\mathbb{R}$ l'équation : $${lhs}$.`,
          `$S = \\{${xs}\\}$`,
          [`$S = \\{${this.frac(b, a)}\\}$`, `$S = \\{${this.frac(1 - b, a)}\\}$`, '$S = \\emptyset$', `$S = \\{${this.frac(-a, b === 0 ? 1 : b)}\\}$`],
          "$e^A = 1 = e^0 \\iff A = 0$.",
          `Résous $${L} = 0$.`,
          `$${lhs} \\iff e^{${L}} = e^{0} \\iff ${L} = 0 \\iff x = ${xs}$.`
        );
      }
      // inéquation e^{ax+b} > e^{cx+d}
      const R = this.poly([[c, 'x'], [d, '']]);
      const op = this.randChoice(['>', '<', '\\ge', '\\le']);
      const closed = op === '\\ge' || op === '\\le';
      const greater = op === '>' || op === '\\ge';
      const k = a - c;
      const xs = this.frac(d - b, k);
      const right = greater === (k > 0); // x > xs
      const ans = right ? `$S = ${this._1re_iv(xs, null, closed, false)}$` : `$S = ${this._1re_iv(null, xs, false, closed)}$`;
      const opp = right ? `$S = ${this._1re_iv(null, xs, false, closed)}$` : `$S = ${this._1re_iv(xs, null, closed, false)}$`;
      return this.makeMcq('1A4', 3, 'Inéquation avec des exponentielles',
        "Utiliser $e^A < e^B \\iff A < B$",
        `Résoudre dans $\\mathbb{R}$ l'inéquation : $e^{${L}} ${op} ${this.pow('e', R)}$.`,
        ans,
        [opp, right ? `$S = ${this._1re_iv(xs, null, !closed, false)}$` : `$S = ${this._1re_iv(null, xs, false, !closed)}$`, `$S = ${this._1re_iv(this.frac(b - d, k), null, closed, false)}$`, `$S = ${this._1re_iv(null, this.frac(b - d, k), false, closed)}$`],
        "La fonction exponentielle est strictement croissante : elle conserve l'ordre.",
        `Résous l'inéquation $${L} ${op} ${R}$ ; attention si tu divises par un nombre négatif.`,
        `$e^{${L}} ${op} ${this.pow('e', R)} \\iff ${L} ${op} ${R} \\iff ${this.coefStr(k, 'x')} ${op} ${d - b}$. ${k < 0 ? 'On divise par $' + k + ' < 0$ : le sens de l\'inégalité change. ' : ''}Donc ${ans}.`
      );
    }
    // tier 4
    const fam = this.randInt(0, 2);
    if (fam === 0) {
      const a = this.randNonZero(-3, 3);
      const b = this.randInt(-5, 5);
      const xe = this.frac(-(a + b), a);
      const typ = a > 0 ? 'minimum' : 'maximum';
      const oth = a > 0 ? 'maximum' : 'minimum';
      return this.makeMcq('1A4', 4, 'Étude d\'une fonction $(ax + b)e^x$',
        "Étudier le signe de $f'(x)$ sachant que $e^x > 0$",
        `Soit $f(x) = (${this.polyX([a, b])})e^{x}$ sur $\\mathbb{R}$. Quelle affirmation est exacte ?`,
        `$f$ admet un ${typ} en $x = ${xe}$`,
        [`$f$ admet un ${oth} en $x = ${xe}$`, `$f$ admet un ${typ} en $x = ${this.frac(-b, a)}$`, `$f$ admet un ${typ} en $x = ${this.frac(a + b, a)}$`, `$f$ est strictement monotone sur $\\mathbb{R}$`],
        "Dérive avec $(uv)' = u'v + uv'$ puis factorise par $e^x$.",
        `$f'(x) = (${this.polyX([a, a + b])})e^{x}$, du signe de $${this.polyX([a, a + b])}$.`,
        `$f'(x) = (${this.polyX([a, a + b])})e^{x}$. Comme $e^x > 0$, $f'(x)$ a le signe de $${this.polyX([a, a + b])}$, qui s'annule en $${xe}$ en passant ${a > 0 ? 'du négatif au positif' : 'du positif au négatif'}. Donc $f$ admet un ${typ} en $x = ${xe}$.`
      );
    }
    if (fam === 1) {
      const k = this.randChoice([-4, -3, -2, -1, 1, 2, 3, 4]);
      const c = this.randChoice([1, 2, 3, -1, -2]);
      const ek = `e^{${this.coefStr(k, 'x')}}`;
      const xe = this.frac(-1, k);
      const typ = (c * k < 0) ? 'maximum' : 'minimum';
      const oth = typ === 'maximum' ? 'minimum' : 'maximum';
      return this.makeMcq('1A4', 4, 'Extremum d\'une fonction $cxe^{kx}$',
        "Étudier le signe de $f'(x)$ sachant que $e^{kx} > 0$",
        `Soit $f(x) = ${this.coefStr(c, 'x')}${ek}$ sur $\\mathbb{R}$. Quelle affirmation est exacte ?`,
        `$f$ admet un ${typ} en $x = ${xe}$`,
        [`$f$ admet un ${oth} en $x = ${xe}$`, `$f$ admet un ${typ} en $x = ${this.frac(1, k)}$`, `$f$ admet un ${typ} en $x = ${k}$`, `$f$ admet un ${typ} en $x = 0$`],
        "$f'(x) = u'v + uv'$ avec $u(x) = " + this.coefStr(c, 'x') + "$.",
        `$f'(x) = ${c === 1 ? '' : c === -1 ? '-' : c}(${this.polyX([k, 1])})${ek}$.`,
        `$f'(x) = ${this.poly([[c, ek], [c * k, 'x' + ek]])} = ${c === 1 ? '' : c === -1 ? '-' : c}(${this.polyX([k, 1])})${ek}$, qui s'annule en $x = ${xe}$ en changeant de signe. Le coefficient de $x$ dans $f'(x)/e^{${this.coefStr(k, 'x')}}$ vaut $${c * k}$, donc $f'$ passe ${c * k > 0 ? 'du négatif au positif' : 'du positif au négatif'} : $f$ admet un ${typ} en $x = ${xe}$.`.replace('(x)/e', '(x) / e')
      );
    }
    const a = this.randNonZero(-4, 4);
    const b = this.randNonZero(-6, 6);
    const r = this.frac(-b, a);
    const pos = a > 0;
    const ans = pos ? `$${this._1re_iv(r, null, true, false)}$` : `$${this._1re_iv(null, r, false, true)}$`;
    const opp = pos ? `$${this._1re_iv(null, r, false, true)}$` : `$${this._1re_iv(r, null, true, false)}$`;
    return this.makeMcq('1A4', 4, 'Signe d\'une expression avec exponentielle',
      "Utiliser $e^x > 0$ pour tout réel $x$",
      `Sur quel ensemble la fonction $f(x) = (${this.polyX([a, b])})e^{x}$ est-elle positive ou nulle ?`,
      ans,
      [opp, `$${this._1re_iv(this.frac(b, a), null, true, false)}$`, '$\\mathbb{R}$', `$${this._1re_iv(null, this.frac(b, a), false, true)}$`],
      "Pour tout réel $x$, $e^x > 0$ : le signe de $f(x)$ est celui de l'autre facteur.",
      `Étudie le signe de $${this.polyX([a, b])}$.`,
      `$e^x > 0$, donc $f(x) \\ge 0 \\iff ${this.polyX([a, b])} \\ge 0 \\iff x ${pos ? '\\ge' : '\\le'} ${r}$${pos ? '' : ' (on divise par un nombre négatif)'}. L'ensemble cherché est ${ans}.`
    );
  },

  // =========================================================================
  // 1A5 : Généralités sur les suites
  // =========================================================================
  gen_1A5(tier) {
    const xq = this._lyX('1A5', tier, [3, 2, 3, 2][tier - 1]);
    if (xq) return xq;
    if (tier === 1) {
      const fam = this.randInt(0, 2);
      const k = this.randInt(2, 6);
      if (fam === 0) {
        const a = this.randNonZero(-3, 3);
        const b = this.randInt(-6, 6);
        const c = this.randInt(-9, 9);
        const v = a * k * k + b * k + c;
        return this.makeMcq('1A5', 1, 'Calcul d\'un terme d\'une suite explicite',
          "Remplacer $n$ par sa valeur dans $u_n = f(n)$",
          `Soit la suite définie pour tout $n \\in \\mathbb{N}$ par $u_n = ${this.polyX([a, b, c], 'n')}$. Calculer $u_{${k}}$.`,
          `$u_{${k}} = ${v}$`,
          [`$u_{${k}} = ${a * (k - 1) ** 2 + b * (k - 1) + c}$`, `$u_{${k}} = ${a * (k + 1) ** 2 + b * (k + 1) + c}$`, `$u_{${k}} = ${2 * a * k + b * k + c}$`, `$u_{${k}} = ${v + 1}$`],
          "Remplace $n$ par l'indice demandé.",
          `Calcule $${a} \\times ${k}^2${b === 0 ? '' : ' ' + this.formatSign(b) + ' \\times ' + k}${this._1re_sg(c)}$ en respectant les priorités.`,
          `$u_{${k}} = ${a} \\times ${k * k}${b === 0 ? '' : ' ' + this.formatSign(b) + ' \\times ' + k}${this._1re_sg(c)} = ${v}$.`
        );
      }
      if (fam === 1) {
        const a = this.randNonZero(-4, 5);
        const b = this.randInt(-6, 6);
        const c = this.randInt(1, 4);
        const vs = this.frac(a * k + b, k + c);
        return this.makeMcq('1A5', 1, 'Calcul d\'un terme d\'une suite explicite',
          "Remplacer $n$ par sa valeur dans $u_n = f(n)$",
          `Soit la suite définie pour tout $n \\in \\mathbb{N}$ par $u_n = \\frac{${this.polyX([a, b], 'n')}}{n + ${c}}$. Calculer $u_{${k}}$.`,
          `$u_{${k}} = ${vs}$`,
          [`$u_{${k}} = ${this.frac(a * (k + 1) + b, k + 1 + c)}$`, `$u_{${k}} = ${this.frac(a * k + b, k)}$`, `$u_{${k}} = ${this.frac(a * k - b, k + c)}$`, `$u_{${k}} = ${this.frac(a * (k - 1) + b, k - 1 + c)}$`],
          "Remplace $n$ par l'indice demandé et simplifie la fraction.",
          `$u_{${k}} = \\frac{${a} \\times ${k}${this._1re_sg(b)}}{${k} + ${c}}$.`,
          `$u_{${k}} = (${a * k + b}) \\div ${k + c} = ${vs}$.`
        );
      }
      const c = this.randNonZero(-3, 5);
      const q = this.randChoice([2, 3]);
      const b = this.randInt(-5, 5);
      const v = c * q ** k + b;
      return this.makeMcq('1A5', 1, 'Calcul d\'un terme d\'une suite explicite',
        "Remplacer $n$ par sa valeur dans $u_n = f(n)$",
        `Soit la suite définie pour tout $n \\in \\mathbb{N}$ par $u_n = ${c === 1 ? '' : c === -1 ? '-' : c + ' \\times '}${q}^n${this._1re_sg(b)}$. Calculer $u_{${k}}$.`,
        `$u_{${k}} = ${v}$`,
        [`$u_{${k}} = ${c * q * k + b}$`, `$u_{${k}} = ${(c * q) ** k + b}$`, `$u_{${k}} = ${c * q ** (k - 1) + b}$`, `$u_{${k}} = ${c * q ** (k + 1) + b}$`],
        "Remplace $n$ par l'indice demandé ; la puissance est prioritaire sur la multiplication.",
        c === 1 && b === 0 ? `$${q}^${k}$ est le produit de $${k}$ facteurs égaux à $${q}$.` : `$${q}^${k} = ${q ** k}$.`,
        `$u_{${k}} = ${c} \\times ${q}^${k} ${this.formatSign(b)} = ${c} \\times ${q ** k} ${this.formatSign(b)} = ${v}$.`.replace(' + 0 =', ' =').replace(' + 0 =', ' =')
      );
    }
    if (tier === 2) {
      const fam = this.randInt(0, 1);
      if (fam === 0) {
        const a = this.randChoice([2, 3, -1, -2, 2]);
        const b = this.randNonZero(-5, 5);
        const u0 = this.randInt(-4, 5);
        const N = this.randInt(2, 3);
        const t = [u0];
        for (let i = 0; i < N; i++) t.push(a * t[i] + b);
        const rec = this.poly([[a, 'u_n'], [b, '']]);
        return this.makeMcq('1A5', 2, 'Suite définie par récurrence',
          "Calculer les termes de proche en proche",
          `Soit la suite définie par $u_0 = ${u0}$ et, pour tout $n \\in \\mathbb{N}$, $u_{n+1} = ${rec}$. Calculer $u_${N}$.`,
          `$u_${N} = ${t[N]}$`,
          [`$u_${N} = ${t[N - 1]}$`, `$u_${N} = ${a * N * u0 + b}$`, `$u_${N} = ${a * t[N - 1] - b}$`, `$u_${N} = ${t[N] + a}$`, `$u_${N} = ${a ** N * u0 + b}$`],
          "Calcule d'abord $u_1$, puis utilise-le pour obtenir le terme suivant.",
          `Commence par $u_1 = ${a} \\times ${this.paren(u0)} ${this.formatSign(b)}$.`,
          t.slice(1).map((v, i) => `$u_${i + 1} = ${a} \\times ${this.paren(t[i])} ${this.formatSign(b)} = ${v}$`).join(', ') + '.'
        );
      }
      const u0 = this.randInt(-3, 5);
      const c = this.randInt(-3, 3);
      const N = this.randInt(3, 4);
      const t = [u0];
      for (let i = 0; i < N; i++) t.push(t[i] + 2 * i + c);
      const rec = this.poly([[1, 'u_n'], [2, 'n'], [c, '']]);
      return this.makeMcq('1A5', 2, 'Suite récurrente dépendant de $n$',
        "Calculer les termes de proche en proche",
        `Soit la suite définie par $u_0 = ${u0}$ et, pour tout $n \\in \\mathbb{N}$, $u_{n+1} = ${rec}$. Calculer $u_${N}$.`,
        `$u_${N} = ${t[N]}$`,
        [`$u_${N} = ${t[N - 1]}$`, `$u_${N} = ${t[N] + 2}$`, `$u_${N} = ${u0 + N * c}$`, `$u_${N} = ${t[N] - 2 * N}$`],
        "Attention : à chaque étape, $n$ prend la valeur de l'indice du terme précédent.",
        `$u_1 = u_0 + 2 \\times 0 ${this.formatSign(c)} = ${t[1]}$.`.replace(' + 0 =', ' ='),
        t.slice(1).map((v, i) => `$u_${i + 1} = ${t[i]} + 2 \\times ${i} ${this.formatSign(c)} = ${v}$`.replace(' + 0 =', ' =')).join(', ') + '.'
      );
    }
    if (tier === 3) {
      const fam = this.randInt(0, 2);
      if (fam === 0) {
        const a = this.randNonZero(-3, 3);
        const b = this.randInt(-6, 6);
        const c = this.randInt(-5, 5);
        const ans = this.polyX([2 * a, a + b], 'n');
        return this._xa([`(${2 * a};${a + b})`, 'Écrire $u_{n+1} - u_n = pn + q$ et saisir (p ; q).'], '1A5', 3, 'Différence de deux termes consécutifs',
          "Calculer $u_{n+1} - u_n$",
          `Soit $u_n = ${this.polyX([a, b, c], 'n')}$ pour tout $n \\in \\mathbb{N}$. Exprimer $u_{n+1} - u_n$ en fonction de $n$.`,
          `$u_{n+1} - u_n = ${ans}$`,
          [`$u_{n+1} - u_n = ${this.polyX([2 * a, b], 'n')}$`, `$u_{n+1} - u_n = ${this.polyX([a, a + b], 'n')}$`, `$u_{n+1} - u_n = ${this.polyX([2 * a, a + b + c], 'n')}$`, `$u_{n+1} - u_n = ${this.polyX([2 * a, b - a], 'n')}$`],
          "Écris $u_{n+1}$ en remplaçant $n$ par $n + 1$, puis développe.",
          "$(n + 1)^2 = n^2 + 2n + 1$.",
          `$u_{n+1} = ${a}(n + 1)^2 ${this.formatSign(b)}(n + 1) ${this.formatSign(c)}$ ; après développement et soustraction, $u_{n+1} - u_n = ${a}(2n + 1) ${this.formatSign(b)} = ${ans}$.`.replace(/ \+ 0\(n \+ 1\)| - 0\(n \+ 1\)/, '').replace(/ [+-] 0\$ ;/, '$ ;').replace(/ \+ 0 = /, ' = ')
        );
      }
      if (fam === 1) {
        const sgn = this.randChoice([1, -1]);
        const k = this.randInt(1, 5);
        const c = this.randInt(1, 6);
        const add = sgn > 0 ? `${this.coefStr(k, 'n^2')} + ${c}` : `\\frac{${c}}{n + ${k}}`;
        const rec = sgn > 0 ? `u_n + ${add}` : `u_n - ${add}`;
        const ans = sgn > 0 ? 'Strictement croissante' : 'Strictement décroissante';
        const u0 = this.randInt(-5, 5);
        return this.makeMcq('1A5', 3, 'Sens de variation d\'une suite récurrente',
          "Étudier le signe de $u_{n+1} - u_n$",
          `Soit $(u_n)$ définie par $u_0 = ${u0}$ et $u_{n+1} = ${rec}$ pour tout $n \\in \\mathbb{N}$. Quel est le sens de variation de $(u_n)$ ?`,
          ans,
          [sgn > 0 ? 'Strictement décroissante' : 'Strictement croissante', 'Constante', 'Ni croissante ni décroissante', 'Cela dépend de la valeur de $u_0$'],
          "Calcule $u_{n+1} - u_n$ et étudie son signe.",
          `$u_{n+1} - u_n = ${sgn > 0 ? add : '-' + add}$.`,
          `Pour tout $n \\in \\mathbb{N}$, $u_{n+1} - u_n = ${sgn > 0 ? add : '-' + add}$, qui est strictement ${sgn > 0 ? 'positif' : 'négatif'}. La suite est donc ${ans.toLowerCase()}, quelle que soit la valeur de $u_0$.`
        );
      }
      const c = this.randInt(1, 9);
      const q = this.randChoice([2, 3, 5, 0.5, 0.8, 0.9, 1.5, 0.25]);
      const ans = q > 1 ? 'Strictement croissante' : 'Strictement décroissante';
      return this.makeMcq('1A5', 3, 'Sens de variation par le quotient',
        "Comparer $\\frac{u_{n+1}}{u_n}$ à 1 pour une suite à termes strictement positifs",
        `Soit $u_n = ${c} \\times ${this.dec(q)}^n$ pour tout $n \\in \\mathbb{N}$. Quel est le sens de variation de $(u_n)$ ?`,
        ans,
        [q > 1 ? 'Strictement décroissante' : 'Strictement croissante', 'Constante', 'Ni croissante ni décroissante'],
        "Les termes sont strictement positifs : compare $\\frac{u_{n+1}}{u_n}$ à 1.",
        `$\\frac{u_{n+1}}{u_n} = ${this.dec(q)}$.`,
        `Pour tout $n$, $u_n > 0$ et $\\frac{u_{n+1}}{u_n} = ${this.dec(q)} ${q > 1 ? '>' : '<'} 1$, donc $u_{n+1} ${q > 1 ? '>' : '<'} u_n$ : la suite est ${ans.toLowerCase()}.`
      );
    }
    // tier 4 (« suite majorée / minorée » : hors programme 2026, retirée)
    const fam = this.randInt(0, 1);
    if (fam === 0) {
      const u0 = this.randInt(1, 9);
      const q = this.randChoice([2, 3]);
      const S = this.randInt(50, 5000);
      let n = 0;
      while (u0 * q ** n <= S) n++;
      return this.makeMcq('1A5', 4, 'Recherche d\'un seuil',
        "Déterminer le plus petit rang $n$ tel que $u_n > S$",
        `Soit $u_n = ${u0} \\times ${q}^n$ pour tout $n \\in \\mathbb{N}$. Quel est le plus petit entier $n$ tel que $u_n > ${S}$ ?`,
        `$n = ${n}$`,
        [`$n = ${n - 1}$`, `$n = ${n + 1}$`, `$n = ${n + 2}$`, `$n = ${Math.max(0, n - 2)}$`],
        "Calcule les termes successifs (ou utilise un algorithme de seuil).",
        `$u_{${n - 1}} = ${u0 * q ** (n - 1)}$.`,
        `$u_{${n - 1}} = ${u0 * q ** (n - 1)} \\le ${S}$ et $u_{${n}} = ${u0 * q ** n} > ${S}$. La suite étant croissante, le plus petit rang est $n = ${n}$.`
      );
    }
    if (fam === 1) {
      const u0 = this.randInt(100, 300);
      const r = this.randInt(3, 9);
      const S = this.randInt(0, u0 - 10);
      let n = 0;
      while (u0 - r * n >= S) n++;
      return this.makeMcq('1A5', 4, 'Recherche d\'un seuil',
        "Déterminer le plus petit rang $n$ tel que $u_n < S$",
        `Soit $u_n = ${u0} - ${r}n$ pour tout $n \\in \\mathbb{N}$. Quel est le plus petit entier $n$ tel que $u_n < ${S}$ ?`,
        `$n = ${n}$`,
        [`$n = ${n - 1}$`, `$n = ${n + 1}$`, `$n = ${n + 2}$`, `$n = ${Math.floor((u0 - S) / r) - 1 === n ? n - 2 : Math.floor((u0 - S) / r) - 1}$`],
        "Résous l'inéquation $u_n < S$ dans $\\mathbb{N}$.",
        `$${u0} - ${r}n < ${S} \\iff n > ${this.frac(u0 - S, r)}$.`,
        `$${u0} - ${r}n < ${S} \\iff ${r}n > ${u0 - S} \\iff n > ${this.frac(u0 - S, r)}$. Le plus petit entier qui convient est $n = ${n}$ (vérification : $u_{${n}} = ${u0 - r * n}$ et $u_{${n - 1}} = ${u0 - r * (n - 1)}$).`
      );
    }
    return null;
  },

  // =========================================================================
  // 1A6 : Suites arithmétiques et géométriques
  // =========================================================================
  gen_1A6(tier) {
    const xq = this._lyX('1A6', tier, [2, 2, 3, 4][tier - 1]);
    if (xq) return xq;
    if (tier === 1) {
      if (this.randInt(0, 1) === 0) {
        const start = this.randInt(0, 1);
        const u = this.randInt(-10, 15);
        const r = this.randNonZero(-6, 8);
        const n = this.randInt(5, 30);
        const v = u + (n - start) * r;
        return this.makeMcq('1A6', 1, 'Terme d\'une suite arithmétique',
          "Appliquer $u_n = u_p + (n - p)r$",
          `Soit $(u_n)$ une suite arithmétique de premier terme $u_${start} = ${u}$ et de raison $r = ${r}$. Calculer $u_{${n}}$.`,
          `$u_{${n}} = ${v}$`,
          [`$u_{${n}} = ${u + (n - start - 1) * r}$`, `$u_{${n}} = ${u + (n - start + 1) * r}$`, `$u_{${n}} = ${u * r + n}$`, `$u_{${n}} = ${v + r * 2}$`],
          start === 0 ? "$u_n = u_0 + nr$." : "$u_n = u_1 + (n - 1)r$.",
          `Il y a $${n - start}$ « pas » de $u_${start}$ à $u_{${n}}$.`,
          `$u_{${n}} = u_${start} + ${n - start} \\times r = ${u} ${this.formatSign(r * (n - start))} = ${v}$.`
        );
      }
      const v0 = this.randChoice([1, 2, 3, 5, -2, -1, 4]);
      const q = this.randChoice([2, 3, -2, -3, 2]);
      const n = this.randInt(3, q === 2 || q === -2 ? 8 : 5);
      const v = v0 * q ** n;
      return this.makeMcq('1A6', 1, 'Terme d\'une suite géométrique',
        "Appliquer $v_n = v_0 \\times q^n$",
        `Soit $(v_n)$ une suite géométrique de premier terme $v_0 = ${v0}$ et de raison $q = ${q}$. Calculer $v_${n}$.`,
        `$v_${n} = ${v}$`,
        [`$v_${n} = ${v0 * q ** (n - 1)}$`, `$v_${n} = ${v0 + n * q}$`, `$v_${n} = ${v0 * q * n}$`, `$v_${n} = ${-v}$`, `$v_${n} = ${v0 * q ** (n + 1)}$`],
        "$v_n = v_0 \\times q^n$.",
        `Calcule d'abord la puissance $${this.paren(q)}^${n}$, puis multiplie par $v_0$.`,
        `$v_${n} = ${v0} \\times ${this.paren(q)}^${n} = ${v0} \\times ${this.paren(q ** n)} = ${v}$.`
      );
    }
    if (tier === 2) {
      if (this.randInt(0, 1) === 0) {
        const p = this.randInt(1, 6);
        const k = this.randInt(2, 8);
        const qn = p + k;
        const r = this.randNonZero(-7, 7);
        const up = this.randNonZero(-20, 20);
        const uq = up + k * r;
        const u0 = up - p * r;
        return this._xa([`(${r};${u0})`, 'Saisir (r ; u0).'], '1A6', 2, 'Raison d\'une suite arithmétique',
          "Utiliser $u_q - u_p = (q - p)r$",
          `$(u_n)$ est une suite arithmétique telle que $u_{${p}} = ${up}$ et $u_{${qn}} = ${uq}$. Déterminer sa raison $r$ et son premier terme $u_0$.`,
          `$r = ${r}$ et $u_0 = ${u0}$`,
          [`$r = ${-r}$ et $u_0 = ${up + p * r}$`, `$r = ${this.frac(uq - up, qn)}$ et $u_0 = ${up}$`, `$r = ${r}$ et $u_0 = ${up}$`, `$r = ${r}$ et $u_0 = ${u0 + r}$`],
          "Entre $u_p$ et $u_q$, on ajoute $(q - p)$ fois la raison.",
          `$u_{${qn}} - u_{${p}} = ${k}r$.`,
          `$${k}r = ${uq} - ${this.paren(up)} = ${uq - up}$, donc $r = ${r}$. Puis $u_0 = u_{${p}} - ${this.coefStr(p, 'r')} = ${up} ${this.formatSign(-p * r)} = ${u0}$.`
        );
      }
      const q = this.randChoice([2, 3, 4, 5]);
      const p = this.randInt(1, 4);
      const v0 = this.randChoice([1, 2, 3, 5]);
      const vp = v0 * q ** p;
      const vp2 = vp * q * q;
      return this._xa([`(${q};${v0})`, 'Saisir (q ; v0).'], '1A6', 2, 'Raison d\'une suite géométrique',
        "Utiliser $v_{p+2} = v_p \\times q^2$",
        `$(v_n)$ est une suite géométrique de raison $q > 0$ telle que $v_{${p}} = ${vp}$ et $v_{${p + 2}} = ${vp2}$. Déterminer $q$ et $v_0$.`,
        `$q = ${q}$ et $v_0 = ${v0}$`,
        [`$q = ${q * q}$ et $v_0 = ${this.frac(vp, q * q)}$`, `$q = ${(vp2 - vp) / 2}$ et $v_0 = ${vp - p * (vp2 - vp) / 2}$`, `$q = ${q}$ et $v_0 = ${vp}$`, `$q = ${q}$ et $v_0 = ${v0 * q}$`],
        "$v_{p+2} = v_p \\times q^2$.",
        `$q^2 = ${vp2} \\div ${vp} = ${q * q}$.`,
        `$q^2 = \\frac{v_{${p + 2}}}{v_{${p}}} = ${vp2} \\div ${vp} = ${q * q}$ et $q > 0$, donc $q = ${q}$. Puis $v_0 = \\frac{v_{${p}}}{${this.pow('q', p)}} = ${vp} \\div ${q ** p} = ${v0}$.`
      );
    }
    if (tier === 3) {
      const fam = this.randInt(0, 2);
      if (fam === 0) {
        const n = this.randInt(10, 120);
        const S = n * (n + 1) / 2;
        return this.makeMcq('1A6', 3, 'Somme des premiers entiers',
          "Appliquer $1 + 2 + \\dots + n = \\frac{n(n+1)}{2}$",
          `Calculer la somme $S = 1 + 2 + 3 + \\dots + ${n}$.`,
          `$S = ${S}$`,
          [`$S = ${n * n}$`, `$S = ${n * (n - 1) / 2}$`, `$S = ${n * (n + 1)}$`, `$S = ${(n + 1) * (n + 2) / 2}$`],
          "$1 + 2 + \\dots + n = \\frac{n(n+1)}{2}$.",
          `Ici $n = ${n}$.`,
          `$S = \\frac{${n} \\times ${n + 1}}{2} = ${S}$.`
        );
      }
      if (fam === 1) {
        const u0 = this.randInt(-10, 20);
        const r = this.randNonZero(-5, 6);
        const n = this.randInt(8, 30);
        const un = u0 + n * r;
        const S = (n + 1) * (u0 + un) / 2;
        return this.makeMcq('1A6', 3, 'Somme de termes consécutifs d\'une suite arithmétique',
          "Somme = nombre de termes × (premier + dernier) / 2",
          `$(u_n)$ est arithmétique de premier terme $u_0 = ${u0}$ et de raison $${r}$. Calculer $S = u_0 + u_1 + \\dots + u_{${n}}$.`,
          `$S = ${S}$`,
          [`$S = ${this.dec(n * (u0 + un) / 2)}$`, `$S = ${(n + 1) * (u0 + un)}$`, `$S = ${(n + 1) * u0 + n * r}$`, `$S = ${this.dec((n + 2) * (u0 + un + r) / 2)}$`],
          "$S = (\\text{nombre de termes}) \\times \\frac{\\text{premier} + \\text{dernier}}{2}$.",
          `Il y a $${n + 1}$ termes ; calcule d'abord le dernier, $u_{${n}}$.`,
          `$u_{${n}} = ${u0} ${this.formatSign(n * r)} = ${un}$, donc $S = ${n + 1} \\times \\frac{${u0} ${this.formatSign(un)}}{2} = ${this.dec(S)}$.`
        );
      }
      const q = this.randChoice([2, 3]);
      const v0 = this.randChoice([1, 2, 3, 5]);
      const n = this.randInt(4, q === 2 ? 10 : 7);
      const S = v0 * (q ** (n + 1) - 1) / (q - 1);
      return this.makeMcq('1A6', 3, 'Somme de termes d\'une suite géométrique',
        "Appliquer $1 + q + \\dots + q^n = \\frac{1 - q^{n+1}}{1 - q}$",
        `$(v_n)$ est géométrique de premier terme $v_0 = ${v0}$ et de raison $${q}$. Calculer $S = v_0 + v_1 + \\dots + v_{${n}}$.`,
        `$S = ${S}$`,
        [`$S = ${v0 * (q ** n - 1) / (q - 1)}$`, `$S = ${v0 * q ** n}$`, `$S = ${v0 * (q ** (n + 1) - 1)}$`, `$S = ${v0 * (q ** (n + 2) - 1) / (q - 1)}$`],
        "$v_0 + \\dots + v_n = v_0 \\times \\frac{1 - q^{n+1}}{1 - q}$ : il y a $n + 1$ termes.",
        `Ici $q^{${n + 1}} = ${q ** (n + 1)}$.`,
        `$S = ${v0} \\times \\frac{1 - ${q}^{${n + 1}}}{1 - ${q}} = ${v0} \\times ${(q ** (n + 1) - 1) / (q - 1)} = ${S}$.`
      );
    }
    // tier 4
    const fam = this.randInt(0, 2);
    if (fam === 0) {
      const C0 = this.randInt(5, 40) * 100;
      const t = this.randChoice([2, 3, 4, 5, 10, -5, -10, -20]);
      const n = this.randInt(3, 10);
      const q = 1 + t / 100;
      const val = C0 * q ** n;
      const exact = this.isDecimal(val, 2);
      const fmt = (x) => this.dec(x, 2);
      const sym = exact ? '=' : '\\approx';
      return this.makeMcq('1A6', 4, 'Évolutions en pourcentage et suite géométrique',
        "Modéliser une évolution de $t\\,\\%$ par une suite géométrique de raison $1 + \\frac{t}{100}$",
        `Une quantité vaut $${C0}$ au départ et ${t > 0 ? 'augmente' : 'diminue'} de $${Math.abs(t)}\\,\\%$ chaque année. Quelle est sa valeur au bout de $${n}$ ans (arrondie au centième) ?`,
        `$C_{${n}} ${sym} ${fmt(val)}$`,
        [`$C_{${n}} ${sym} ${fmt(C0 * (1 + n * t / 100))}$`, `$C_{${n}} ${sym} ${fmt(C0 * q ** (n - 1))}$`, `$C_{${n}} ${sym} ${fmt(C0 * (1 - t / 100) ** n)}$`, `$C_{${n}} ${sym} ${fmt(C0 * q ** (n + 1))}$`],
        `${t > 0 ? 'Augmenter' : 'Diminuer'} de $${Math.abs(t)}\\,\\%$ revient à multiplier par $${this.dec(q)}$.`,
        `$C_n = ${C0} \\times ${this.dec(q)}^n$.`,
        `$(C_n)$ est géométrique de raison $${this.dec(q)}$ : $C_{${n}} = ${C0} \\times ${this.dec(q)}^{${n}} ${sym} ${fmt(val)}$.`
      );
    }
    if (fam === 1) {
      const a = this.randChoice([2, 3, -1, -2, 4]);
      const b = this.randNonZero(-9, 9);
      const l = this.frac(b, 1 - a);
      return this.makeMcq('1A6', 4, 'Suite arithmético-géométrique',
        "Trouver la constante $\\ell$ telle que $v_n = u_n - \\ell$ soit géométrique",
        `Soit $u_{n+1} = ${this.poly([[a, 'u_n'], [b, '']])}$. Pour quelle valeur de $\\ell$ la suite $v_n = u_n - \\ell$ est-elle géométrique de raison $${a}$ ?`,
        `$\\ell = ${l}$`,
        [`$\\ell = ${this.frac(-b, 1 - a)}$`, `$\\ell = ${this.frac(b, a)}$`, a === -1 ? `$\\ell = ${2 * b}$` : `$\\ell = ${this.frac(b, 1 + a)}$`, `$\\ell = ${b}$`],
        "$\\ell$ est le point fixe : $\\ell = a\\ell + b$.",
        `Résous l'équation du premier degré d'inconnue $\\ell$ obtenue en remplaçant $u_n$ et $u_{n+1}$ par $\\ell$.`,
        `$v_{n+1} = u_{n+1} - \\ell = ${this.poly([[a, 'u_n'], [b, '']])} - \\ell$. Pour avoir $v_{n+1} = ${this.coefStr(a, 'v_n')} = ${this.coefStr(a, 'u_n')} - ${this.paren(a)}\\ell$, il faut $\\ell = ${this.poly([[a, '\\ell'], [b, '']])}$, soit $${this.coefStr(1 - a, '\\ell')} = ${b}$ et $\\ell = ${l}$.`
      );
    }
    if (this.randInt(0, 1) === 0) {
      const c = this.randChoice([2, 3, 5, -2, 4]);
      const q = this.randChoice([2, 3, -2, 5]);
      const k = this.randInt(1, 2);
      return this.makeMcq('1A6', 4, 'Reconnaître une suite géométrique',
        "Calculer $\\frac{u_{n+1}}{u_n}$ et $u_0$",
        `Soit $u_n = ${c} \\times ${this.paren(q)}^{n + ${k}}$ pour tout $n \\in \\mathbb{N}$. Quelle affirmation est exacte ?`,
        `$(u_n)$ est géométrique de raison $${q}$ et de premier terme $u_0 = ${c * q ** k}$`,
        [`$(u_n)$ est géométrique de raison $${q}$ et de premier terme $u_0 = ${c}$`, `$(u_n)$ est géométrique de raison $${c}$ et de premier terme $u_0 = ${q ** k}$`, `$(u_n)$ est arithmétique de raison $${q}$`, `$(u_n)$ est géométrique de raison $${q + k}$ et de premier terme $u_0 = ${c * q ** k}$`],
        "Calcule $\\frac{u_{n+1}}{u_n}$.",
        `$u_{n+1} = ${c} \\times ${this.paren(q)}^{n + ${k + 1}}$.`,
        `$\\frac{u_{n+1}}{u_n} = ${this.paren(q)}$ pour tout $n$ : la suite est géométrique de raison $${q}$, et $u_0 = ${c} \\times ${this.pow(this.paren(q), k)} = ${c * q ** k}$.`
      );
    }
    const a = this.randInt(2, 15);
    const r = this.randNonZero(-6, 6);
    return this.makeMcq('1A6', 4, 'Reconnaître une suite arithmétique',
      "Calculer $u_{n+1} - u_n$",
      `Soit $u_n = ${this.poly([[a, ''], [r, 'n']])}$ pour tout $n \\in \\mathbb{N}$. Quelle affirmation est exacte ?`,
      `$(u_n)$ est arithmétique de raison $${r}$ et de premier terme $u_0 = ${a}$`,
      [`$(u_n)$ est arithmétique de raison $${a}$ et de premier terme $u_0 = ${r}$`, `$(u_n)$ est géométrique de raison $${r}$`, `$(u_n)$ est arithmétique de raison $${r}$ et de premier terme $u_0 = ${a + r}$`, `$(u_n)$ est arithmétique de raison $${-r}$ et de premier terme $u_0 = ${a}$`],
      "Calcule $u_{n+1} - u_n$.",
      "Si cette différence est constante, la suite est arithmétique.",
      `$u_{n+1} - u_n = ${r}$ pour tout $n$ : la suite est arithmétique de raison $${r}$ et $u_0 = ${a}$.`
    );
  },

  // =========================================================================
  // 1G1 : Trigonométrie
  // =========================================================================
  /** Valeur exacte LaTeX d'un cosinus/sinus remarquable (valeur numérique v) */
  _1G1_exact(v) {
    const table = [[0, '0'], [0.5, '\\frac{1}{2}'], [Math.SQRT2 / 2, '\\frac{\\sqrt{2}}{2}'], [Math.sqrt(3) / 2, '\\frac{\\sqrt{3}}{2}'], [1, '1']];
    for (const [x, s] of table) {
      if (Math.abs(Math.abs(v) - x) < 1e-9) return (v < 0 && x !== 0 ? '-' : '') + s;
    }
    return null;
  },

  _1G1_triples: [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [20, 21, 29], [9, 40, 41]],

  gen_1G1(tier) {
    const xq = this._lyX('1G1', tier, [1, 2, 2, 0][tier - 1]);
    if (xq) return xq;
    const ALL = ['0', '\\frac{1}{2}', '-\\frac{1}{2}', '\\frac{\\sqrt{2}}{2}', '-\\frac{\\sqrt{2}}{2}', '\\frac{\\sqrt{3}}{2}', '-\\frac{\\sqrt{3}}{2}', '1', '-1'];
    if (tier === 1) {
      const d = this.randChoice([1, 2, 3, 4, 6]);
      let p;
      do { p = this.randInt(-2 * d, 2 * d); } while (this.gcd(p, d) !== 1 && p !== 0 || (d === 1 && Math.abs(p) > 2));
      if (p === 0 && d !== 1) p = 1;
      const fn = this.randChoice(['cos', 'sin']);
      const ang = p * Math.PI / d;
      const v = fn === 'cos' ? Math.cos(ang) : Math.sin(ang);
      const ex = this._1G1_exact(v);
      const other = this._1G1_exact(fn === 'cos' ? Math.sin(ang) : Math.cos(ang));
      const opp = this._1G1_exact(-v);
      const A = this._1re_pi(p, d);
      const wrong = [other, opp, ...this.shuffleArray(ALL)].filter((w) => w !== ex).slice(0, 5);
      return this.makeMcq('1G1', 1, 'Valeurs remarquables du cercle trigonométrique',
        "Lire le cosinus et le sinus d'un angle remarquable sur le cercle trigonométrique",
        `Quelle est la valeur exacte de $\\${fn}\\left(${A}\\right)$ ?`,
        `$\\${fn}\\left(${A}\\right) = ${ex}$`,
        wrong.map((w) => `$\\${fn}\\left(${A}\\right) = ${w}$`),
        "Place le point associé sur le cercle trigonométrique (en te ramenant si besoin à $]-\\pi ; \\pi]$).",
        `Le ${fn === 'cos' ? 'cosinus est l\'abscisse' : 'sinus est l\'ordonnée'} du point du cercle associé au réel $${A}$.`,
        `Le point du cercle trigonométrique associé à $${A}$ a pour coordonnées $\\left(${this._1G1_exact(Math.cos(ang))} ; ${this._1G1_exact(Math.sin(ang))}\\right)$. Donc $\\${fn}\\left(${A}\\right) = ${ex}$.`
      );
    }
    if (tier === 2) {
      if (this.randInt(0, 2) === 0) {
        const toRad = this.randInt(0, 1) === 1;
        let deg;
        do { deg = this.randInt(-24, 24) * 15; } while (deg === 0);
        const r = this._1re_pi(deg, 180);
        if (toRad) {
          return this._xa([this._xf(deg, 180), 'Le résultat s\'écrit $k\\pi$ rad : saisir la mesure, par exemple 3π/4 (touche π ou « pi »), ou seulement $k$ (entier ou fraction).', [this._xpi(this._xf(deg, 180))]], '1G1', 2, 'Conversion degrés-radians',
            "Utiliser la proportionnalité $180^\\circ \\leftrightarrow \\pi$ rad",
            `Convertir $${deg}^\\circ$ en radians.`,
            `$${r}$ rad`,
            [`$${this._1re_pi(deg, 360)}$ rad`, `$${this._1re_pi(deg, 90)}$ rad`, `$${this._1re_pi(180, deg)}$ rad`, `$${this._1re_pi(-deg, 180)}$ rad`],
            "$180^\\circ$ correspondent à $\\pi$ radians.",
            `Calcule $${deg} \\times \\frac{\\pi}{180}$.`,
            `$${deg}^\\circ = ${deg} \\times \\frac{\\pi}{180} = ${r}$ rad.`
          );
        }
        return this._xa([String(deg), 'Saisir la mesure en degrés (nombre seul).'], '1G1', 2, 'Conversion radians-degrés',
          "Utiliser la proportionnalité $\\pi$ rad $\\leftrightarrow 180^\\circ$",
          `Convertir $${r}$ rad en degrés.`,
          `$${deg}^\\circ$`,
          [`$${deg / 2}^\\circ$`, `$${2 * deg}^\\circ$`, `$${-deg}^\\circ$`, `$${deg + 180}^\\circ$`].map((s) => s.replace('.5', '{,}5')),
          "$\\pi$ radians correspondent à $180^\\circ$.",
          "Remplace $\\pi$ par $180^\\circ$.",
          `$${r}$ rad $= ${deg}^\\circ$ (on remplace $\\pi$ par $180^\\circ$).`
        );
      }
      const [p, q, r] = this.randChoice(this._1G1_triples);
      const [s1, s2] = this.randInt(0, 1) ? [p, q] : [q, p];
      const given = this.randChoice(['sin', 'cos']);
      const quad = this.randChoice([0, 1, 2, 3]); // [0;π/2], [π/2;π], [-π;-π/2], [-π/2;0]
      const intervals = ['\\left[0 ; \\frac{\\pi}{2}\\right]', '\\left[\\frac{\\pi}{2} ; \\pi\\right]', '\\left[-\\pi ; -\\frac{\\pi}{2}\\right]', '\\left[-\\frac{\\pi}{2} ; 0\\right]'];
      const cosSign = quad === 0 || quad === 3 ? 1 : -1;
      const sinSign = quad <= 1 ? 1 : -1;
      const gv = (given === 'sin' ? sinSign : cosSign) * s1;
      const ask = given === 'sin' ? 'cos' : 'sin';
      const av = (ask === 'cos' ? cosSign : sinSign) * s2;
      const sq = r * r - s1 * s1;
      return this.makeMcq('1G1', 2, 'Relation $\\cos^2 x + \\sin^2 x = 1$',
        "Calculer un cosinus (ou un sinus) connaissant l'autre et le quadrant",
        `Sachant que $x \\in ${intervals[quad]}$ et que $\\${given}(x) = ${this.frac(gv, r)}$, calculer $\\${ask}(x)$.`,
        `$\\${ask}(x) = ${this.frac(av, r)}$`,
        [`$\\${ask}(x) = ${this.frac(-av, r)}$`, `$\\${ask}(x) = ${this.frac(sq, r * r)}$`, `$\\${ask}(x) = ${this.frac(r - Math.abs(gv), r)}$`, `$\\${ask}(x) = ${this.frac(gv, r)}$`],
        "$\\cos^2(x) + \\sin^2(x) = 1$.",
        `Le signe de $\\${ask}(x)$ se lit sur le cercle trigonométrique selon l'intervalle donné.`,
        `$\\${ask}^2(x) = 1 - \\left(${this.frac(gv, r)}\\right)^2 = ${this.frac(sq, r * r)}$, donc $\\${ask}(x) = \\pm ${this.frac(s2, r)}$. Sur $${intervals[quad]}$, $\\${ask}(x)$ est ${(ask === 'cos' ? cosSign : sinSign) > 0 ? 'positif' : 'négatif'}, donc $\\${ask}(x) = ${this.frac(av, r)}$.`
      );
    }
    if (tier === 3) {
      if (this.randInt(0, 1) === 0) {
        const d = this.randChoice([2, 3, 4, 6]);
        let p;
        do { p = this.randInt(-12 * d, 12 * d); } while (this.gcd(p, d) !== 1 || Math.abs(p) <= d);
        // mesure principale dans ]-π ; π]
        let m = ((p % (2 * d)) + 2 * d) % (2 * d);
        if (m > d) m -= 2 * d;
        return this._xa([this._xf(m, d), 'Le réel cherché s\'écrit $k\\pi$ : le saisir, par exemple -π/3 (touche π ou « pi »), ou saisir seulement $k$ (entier ou fraction).', [this._xpi(this._xf(m, d))]], '1G1', 3, 'Réel associé dans $]-\\pi ; \\pi]$',
          "Utiliser l'enroulement de la droite sur le cercle : $x$ et $x + 2k\\pi$ ont le même point image",
          `Quel est le réel de $]-\\pi ; \\pi]$ associé au même point du cercle trigonométrique que le réel $${this._1re_pi(p, d)}$ ?`,
          `$${this._1re_pi(m, d)}$`,
          [`$${this._1re_pi(-m, d)}$`, `$${this._1re_pi(m + (m > 0 ? -d : d), d)}$`, `$${this._1re_pi(m + 2 * d, d)}$`, `$${this._1re_pi(m - 2 * d, d)}$`, `$${this._1re_pi(d - m, d)}$`],
          "Deux réels qui diffèrent d'un multiple de $2\\pi$ ont le même point image sur le cercle trigonométrique.",
          `Écris $2\\pi = \\frac{${2 * d}\\pi}{${d}}$, puis retranche ou ajoute ce multiple autant de fois que nécessaire.`,
          `$${this._1re_pi(p, d)} = ${this._1re_pi(m, d)} ${(p - m) / (2 * d) > 0 ? '+' : '-'} ${Math.abs((p - m) / (2 * d)) === 1 ? '' : Math.abs((p - m) / (2 * d)) + ' \\times '}2\\pi$ et $${this._1re_pi(m, d)} \\in ]-\\pi ; \\pi]$ : les deux réels ont le même point image, et $${this._1re_pi(m, d)}$ est le réel cherché.`
        );
      }
      const [p, q, r] = this.randChoice(this._1G1_triples);
      const cs = this.randChoice([1, -1]) * p;
      const sn = this.randChoice([1, -1]) * q;
      const exprs = [
        ['\\cos(\\pi - x)', -cs], ['\\cos(\\pi + x)', -cs], ['\\sin(\\pi - x)', sn], ['\\sin(\\pi + x)', -sn],
        ['\\cos(-x)', cs], ['\\sin(-x)', -sn], ['\\cos\\left(\\frac{\\pi}{2} - x\\right)', sn], ['\\sin\\left(\\frac{\\pi}{2} - x\\right)', cs],
        ['\\cos\\left(\\frac{\\pi}{2} + x\\right)', -sn], ['\\sin\\left(\\frac{\\pi}{2} + x\\right)', cs]
      ];
      const [e1, v1] = this.randChoice(exprs);
      let e2; let v2;
      do { [e2, v2] = this.randChoice(exprs); } while (e2 === e1);
      const tot = v1 + v2;
      return this.makeMcq('1G1', 3, 'Angles associés',
        "Utiliser les formules des angles associés",
        `On sait que $\\cos(x) = ${this.frac(cs, r)}$ et $\\sin(x) = ${this.frac(sn, r)}$. Calculer $A = ${e1} + ${e2}$.`,
        `$A = ${this.frac(tot, r)}$`,
        [`$A = ${this.frac(-tot, r)}$`, `$A = ${this.frac(v1 - v2, r)}$`, `$A = ${this.frac(-v1 + v2, r)}$`, `$A = ${this.frac(Math.abs(v1) + Math.abs(v2), r)}$`, `$A = ${this.frac(2 * v1, r)}$`, `$A = ${this.frac(2 * v2, r)}$`, `$A = ${this.frac(-2 * v1, r)}$`, `$A = ${this.frac(p + q, r)}$`, `$A = ${this.frac(-p - q, r)}$`],
        "Visualise les symétries sur le cercle trigonométrique.",
        "$\\cos(\\pi - x) = -\\cos(x)$, $\\sin(\\pi - x) = \\sin(x)$, $\\cos\\left(\\frac{\\pi}{2} - x\\right) = \\sin(x)$…",
        `$${e1} = ${this.frac(v1, r)}$ et $${e2} = ${this.frac(v2, r)}$, donc $A = ${this.frac(tot, r)}$.`
      );
    }
    return null; // palier 4 : familles ajoutées (_LYX) ; équations trigonométriques hors programme de 1re
  },

  // =========================================================================
  // 1G2 : Produit scalaire
  // =========================================================================
  gen_1G2(tier) {
    const V = (x, y) => `(${x} ; ${y})`;
    if (tier === 1) {
      if (this.randInt(0, 1) === 0) {
        const x1 = this.randNonZero(-6, 6); const y1 = this.randInt(-6, 6);
        const x2 = this.randInt(-6, 6); const y2 = this.randNonZero(-6, 6);
        const dot = x1 * x2 + y1 * y2;
        return this.makeMcq('1G2', 1, 'Produit scalaire en repère orthonormé',
          "Calculer $\\vec{u} \\cdot \\vec{v} = xx' + yy'$",
          `Dans un repère orthonormé, on donne $\\vec{u}${V(x1, y1)}$ et $\\vec{v}${V(x2, y2)}$. Calculer $\\vec{u} \\cdot \\vec{v}$.`,
          `$\\vec{u} \\cdot \\vec{v} = ${dot}$`,
          [`$\\vec{u} \\cdot \\vec{v} = ${x1 * y2 - y1 * x2}$`, `$\\vec{u} \\cdot \\vec{v} = ${x1 * y1 + x2 * y2}$`, `$\\vec{u} \\cdot \\vec{v} = ${-dot}$`, `$\\vec{u} \\cdot \\vec{v} = ${x1 * x2 - y1 * y2}$`, `$\\vec{u} \\cdot \\vec{v} = ${dot + 1}$`],
          "Dans un repère orthonormé : $\\vec{u} \\cdot \\vec{v} = xx' + yy'$.",
          `Calcule $${this.paren(x1)} \\times ${this.paren(x2)} + ${this._1re_pz(y1)} \\times ${this.paren(y2)}$.`,
          `$\\vec{u} \\cdot \\vec{v} = ${this.paren(x1)} \\times ${this.paren(x2)} + ${this._1re_pz(y1)} \\times ${this.paren(y2)} = ${x1 * x2} + ${this._1re_pz(y1 * y2)} = ${dot}$.`
        );
      }
      const A = [this.randInt(-5, 5), this.randInt(-5, 5)];
      const B = [this.randInt(-5, 5), this.randInt(-5, 5)];
      const C = [this.randInt(-5, 5), this.randInt(-5, 5)];
      if (B[0] === A[0] && B[1] === A[1]) B[0] += 2;
      if (C[0] === A[0] && C[1] === A[1]) C[1] += 3;
      const u = [B[0] - A[0], B[1] - A[1]];
      const v = [C[0] - A[0], C[1] - A[1]];
      const dot = u[0] * v[0] + u[1] * v[1];
      return this.makeMcq('1G2', 1, 'Produit scalaire à partir de points',
        "Calculer les coordonnées des vecteurs puis $xx' + yy'$",
        `Dans un repère orthonormé, on donne $A${V(A[0], A[1])}$, $B${V(B[0], B[1])}$ et $C${V(C[0], C[1])}$. Calculer $\\overrightarrow{AB} \\cdot \\overrightarrow{AC}$.`,
        `$\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = ${dot}$`,
        [(B[0] + A[0]) * (C[0] + A[0]) + (B[1] + A[1]) * (C[1] + A[1]), -dot, u[0] * v[1] - u[1] * v[0], B[0] * C[0] + B[1] * C[1], dot + 2].map((w) => `$\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = ${w}$`),
        "$\\overrightarrow{AB}(x_B - x_A ; y_B - y_A)$.",
        `$\\overrightarrow{AB}${V(u[0], u[1])}$ et $\\overrightarrow{AC}${V(v[0], v[1])}$.`,
        `$\\overrightarrow{AB}${V(u[0], u[1])}$, $\\overrightarrow{AC}${V(v[0], v[1])}$, donc $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = ${this.paren(u[0])} \\times ${this.paren(v[0])} + ${this._1re_pz(u[1])} \\times ${this.paren(v[1])} = ${dot}$.`
      );
    }
    if (tier === 2) {
      if (this.randInt(0, 1) === 0) {
        const a = this.randInt(2, 9); const b = this.randInt(2, 9);
        // angle : [p, d, cosNum, cosDen, rad]
        const angs = [[1, 3, 1, 2, 1], [2, 3, -1, 2, 1], [1, 4, 1, 2, 2], [3, 4, -1, 2, 2], [1, 6, 1, 2, 3], [5, 6, -1, 2, 3], [1, 2, 0, 1, 1], [0, 1, 1, 1, 1], [1, 1, -1, 1, 1]];
        const [p, d, cn, cd, rr] = this.randChoice(angs);
        const ans = this._1re_radFrac(a * b * cn, cd, rr);
        const theta = p === 0 ? '0' : this._1re_pi(p, d);
        const cosS = cn === 0 ? '0' : this._1re_radFrac(cn, cd, rr);
        return this.makeMcq('1G2', 2, 'Produit scalaire avec normes et angle',
          "Appliquer $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\cos(\\vec{u}, \\vec{v})$",
          `On donne $\\|\\vec{u}\\| = ${a}$, $\\|\\vec{v}\\| = ${b}$ et $(\\vec{u}, \\vec{v}) = ${theta}$. Calculer $\\vec{u} \\cdot \\vec{v}$.`,
          `$\\vec{u} \\cdot \\vec{v} = ${ans}$`,
          [`$\\vec{u} \\cdot \\vec{v} = ${a * b}$`, `$\\vec{u} \\cdot \\vec{v} = ${this._1re_radFrac(-a * b * cn, cd, rr)}$`, `$\\vec{u} \\cdot \\vec{v} = ${this._1re_radFrac(a * b * (cn === 0 ? 1 : cn), cd * 2, rr === 1 ? 3 : 1)}$`, `$\\vec{u} \\cdot \\vec{v} = ${a + b}$`, `$\\vec{u} \\cdot \\vec{v} = ${this._1re_radFrac(a * b, 2, rr === 3 ? 1 : 3)}$`],
          "$\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\cos(\\theta)$.",
          `$\\cos\\left(${theta}\\right) = ${cosS}$.`,
          `$\\vec{u} \\cdot \\vec{v} = ${a} \\times ${b} \\times \\cos\\left(${theta}\\right) = ${a * b} \\times ${this.paren(cosS)} = ${ans}$.`
        );
      }
      const a = this.randNonZero(-6, 6); const b = this.randNonZero(-6, 6); const c = this.randNonZero(-6, 6);
      const m = this.frac(-a * b, c);
      return this.makeMcq('1G2', 2, 'Orthogonalité et paramètre',
        "Traduire l'orthogonalité par $\\vec{u} \\cdot \\vec{v} = 0$",
        `Dans un repère orthonormé, on donne $\\vec{u}${V(a, 'm')}$ et $\\vec{v}${V(b, c)}$. Pour quelle valeur de $m$ les vecteurs sont-ils orthogonaux ?`,
        `$m = ${m}$`,
        [`$m = ${this.frac(a * b, c)}$`, `$m = ${this.frac(-a * c, b)}$`, `$m = ${this.frac(-c, a * b)}$`, `$m = ${this.frac(a * c, b)}$`],
        "$\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0$.",
        `$\\vec{u} \\cdot \\vec{v} = ${a} \\times ${this.paren(b)} + m \\times ${this.paren(c)}$.`,
        `$\\vec{u} \\cdot \\vec{v} = ${a * b} ${c > 0 ? '+' : '-'} ${this.coefStr(Math.abs(c), 'm')} = 0 \\iff ${this.coefStr(c, 'm')} = ${-a * b} \\iff m = ${m}$.`
      );
    }
    if (tier === 3) {
      const fam = this.randInt(0, 2);
      if (fam === 0) {
        const ab = this.randInt(2, 12); const ah = this.randInt(1, 10);
        const same = this.randInt(0, 1) === 1;
        const val = (same ? 1 : -1) * ab * ah;
        return this.makeMcq('1G2', 3, 'Produit scalaire et projection orthogonale',
          "Utiliser $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = \\overrightarrow{AB} \\cdot \\overrightarrow{AH}$",
          `$H$ est le projeté orthogonal de $C$ sur la droite $(AB)$. On sait que $AB = ${ab}$, $AH = ${ah}$ et que ${same ? '$H$ appartient à la demi-droite $[AB)$' : '$A$ est situé entre $H$ et $B$'}. Calculer $\\overrightarrow{AB} \\cdot \\overrightarrow{AC}$.`,
          `$${val}$`,
          [`$${-val}$`, `$${ab + ah}$`, `$${ab * ab}$`, `$${ab * ah * 2}$`],
          "Le produit scalaire ne change pas si on remplace $C$ par son projeté orthogonal $H$ sur $(AB)$.",
          `${same ? 'Les vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{AH}$ sont de même sens.' : 'Les vecteurs $\\overrightarrow{AB}$ et $\\overrightarrow{AH}$ sont de sens contraires.'}`,
          `$\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = \\overrightarrow{AB} \\cdot \\overrightarrow{AH} = ${same ? '' : '-'}AB \\times AH = ${val}$.`
        );
      }
      if (fam === 1) {
        const nu = this.randInt(2, 8); const nv = this.randInt(2, 8);
        const dot = this.randInt(-nu * nv + 1, nu * nv - 1);
        const plus = this.randInt(0, 1) === 1;
        const s2 = nu * nu + nv * nv + (plus ? 2 : -2) * dot;
        if (s2 === nu * nu || s2 === nv * nv) return this.gen_1G2(3);
        const target = this.randInt(0, 1) === 1;
        if (target) {
          return this.makeMcq('1G2', 3, 'Norme d\'une somme et produit scalaire',
            `Développer $\\|\\vec{u} ${plus ? '+' : '-'} \\vec{v}\\|^2$`,
            `On sait que $\\|\\vec{u}\\| = ${nu}$, $\\|\\vec{v}\\| = ${nv}$ et $\\vec{u} \\cdot \\vec{v} = ${dot}$. Calculer $\\|\\vec{u} ${plus ? '+' : '-'} \\vec{v}\\|^2$.`,
            `$${s2}$`,
            [`$${nu * nu + nv * nv}$`, `$${nu * nu + nv * nv + (plus ? -2 : 2) * dot}$`, `$${(nu + nv) ** 2}$`, `$${nu * nu + nv * nv + (plus ? 1 : -1) * dot}$`],
            `$\\|\\vec{u} ${plus ? '+' : '-'} \\vec{v}\\|^2 = \\|\\vec{u}\\|^2 ${plus ? '+' : '-'} 2\\vec{u} \\cdot \\vec{v} + \\|\\vec{v}\\|^2$.`,
            `$\\|\\vec{u}\\|^2 = ${nu * nu}$ et $\\|\\vec{v}\\|^2 = ${nv * nv}$.`,
            `$\\|\\vec{u} ${plus ? '+' : '-'} \\vec{v}\\|^2 = ${nu * nu} ${plus ? '+' : '-'} 2 \\times ${this.paren(dot)} + ${nv * nv} = ${s2}$.`
          );
        }
        return this.makeMcq('1G2', 3, 'Produit scalaire par polarisation',
          "Utiliser $\\vec{u} \\cdot \\vec{v} = \\frac{1}{2}\\left(\\|\\vec{u} + \\vec{v}\\|^2 - \\|\\vec{u}\\|^2 - \\|\\vec{v}\\|^2\\right)$",
          `On sait que $\\|\\vec{u}\\| = ${nu}$, $\\|\\vec{v}\\| = ${nv}$ et $\\|\\vec{u} ${plus ? '+' : '-'} \\vec{v}\\|^2 = ${s2}$. Calculer $\\vec{u} \\cdot \\vec{v}$.`,
          `$\\vec{u} \\cdot \\vec{v} = ${dot}$`,
          [`$\\vec{u} \\cdot \\vec{v} = ${-dot}$`, `$\\vec{u} \\cdot \\vec{v} = ${2 * dot}$`, `$\\vec{u} \\cdot \\vec{v} = ${s2 - nu * nu - nv * nv}$`, `$\\vec{u} \\cdot \\vec{v} = ${s2 - nu - nv}$`],
          `Développe $\\|\\vec{u} ${plus ? '+' : '-'} \\vec{v}\\|^2$.`,
          `$\\|\\vec{u} ${plus ? '+' : '-'} \\vec{v}\\|^2 = \\|\\vec{u}\\|^2 ${plus ? '+' : '-'} 2\\vec{u} \\cdot \\vec{v} + \\|\\vec{v}\\|^2$.`,
          `$${s2} = ${nu * nu} ${plus ? '+' : '-'} 2\\vec{u} \\cdot \\vec{v} + ${nv * nv}$, donc $${plus ? '' : '-'}2\\vec{u} \\cdot \\vec{v} = ${s2 - nu * nu - nv * nv}$ et $\\vec{u} \\cdot \\vec{v} = ${dot}$.`
        );
      }
      const nu = this.randInt(1, 5); const nv = this.randInt(1, 5); const d = this.randInt(-6, 6);
      const a = this.randNonZero(-3, 3); const b = this.randNonZero(-3, 3); const c = this.randNonZero(-3, 3); const e = this.randNonZero(-3, 3);
      const val = a * c * nu * nu + (a * e + b * c) * d + b * e * nv * nv;
      const L = this.poly([[a, '\\vec{u}'], [b, '\\vec{v}']]);
      const Rr = this.poly([[c, '\\vec{u}'], [e, '\\vec{v}']]);
      return this.makeMcq('1G2', 3, 'Bilinéarité du produit scalaire',
        "Développer un produit scalaire par bilinéarité",
        `On sait que $\\|\\vec{u}\\| = ${nu}$, $\\|\\vec{v}\\| = ${nv}$ et $\\vec{u} \\cdot \\vec{v} = ${d}$. Calculer $(${L}) \\cdot (${Rr})$.`,
        `$${val}$`,
        [`$${a * c * nu * nu + b * e * nv * nv}$`, `$${a * c * nu + (a * e + b * c) * d + b * e * nv}$`, `$${a * c * nu * nu + (a * e - b * c) * d + b * e * nv * nv}$`, `$${-val}$`, `$${val + d}$`],
        "Développe comme un produit, avec $\\vec{u} \\cdot \\vec{u} = \\|\\vec{u}\\|^2$ et $\\vec{u} \\cdot \\vec{v} = \\vec{v} \\cdot \\vec{u}$.",
        `$(${L}) \\cdot (${Rr}) = ${this.poly([[a * c, '\\|\\vec{u}\\|^2'], [a * e + b * c, '\\,\\vec{u} \\cdot \\vec{v}'], [b * e, '\\|\\vec{v}\\|^2']])}$.`,
        `$(${L}) \\cdot (${Rr}) = ${a * c} \\times ${nu * nu}${a * e + b * c === 0 ? '' : ' ' + this.formatSign(a * e + b * c) + ' \\times ' + this.paren(d)} ${this.formatSign(b * e)} \\times ${nv * nv} = ${val}$.`
      );
    }
    // tier 4
    if (this.randInt(0, 1) === 0) {
      const pairs = [[[1, 0], [1, 1], 1, 4], [[1, 0], [0, 1], 1, 2], [[1, 0], [-1, 1], 3, 4], [[2, 1], [1, 3], 1, 4], [[1, 2], [-1, 3], 1, 4], [[3, 1], [1, 2], 1, 4], [[1, 0], [-1, 0], 1, 1], [[2, 1], [-1, 2], 1, 2], [[2, 1], [-3, 1], 3, 4], [[1, 1], [-1, 0], 3, 4], [[1, 1], [1, 0], 1, 4]];
      let [u, v, p, d] = this.randChoice(pairs);
      const ku = this.randInt(1, 3); const kv = this.randInt(1, 3);
      const rot = this.randInt(0, 3);
      const R = (w) => { let [x, y] = w; for (let i = 0; i < rot; i++) [x, y] = [-y, x]; return [x, y]; };
      u = R(u).map((t) => t * ku); v = R(v).map((t) => t * kv);
      if (this.randInt(0, 1)) [u, v] = [v, u];
      const dot = u[0] * v[0] + u[1] * v[1];
      const n2u = u[0] ** 2 + u[1] ** 2; const n2v = v[0] ** 2 + v[1] ** 2;
      const ang = this._1re_pi(p, d);
      return this._xa([this._xf(p, d), 'La mesure s\'écrit $k\\pi$ avec $0 \\le k \\le 1$ : la saisir, par exemple 3π/4 (touche π ou « pi »), ou saisir seulement $k$ (par exemple 3/4).', [this._xpi(this._xf(p, d))]], '1G2', 4, 'Angle entre deux vecteurs',
        "Calculer $\\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u} \\cdot \\vec{v}}{\\|\\vec{u}\\| \\times \\|\\vec{v}\\|}$",
        `Dans un repère orthonormé, on donne $\\vec{u}${V(u[0], u[1])}$ et $\\vec{v}${V(v[0], v[1])}$. Quelle est la mesure dans $[0 ; \\pi]$ de l'angle géométrique entre $\\vec{u}$ et $\\vec{v}$ ?`,
        `$${ang}$`,
        ['\\frac{\\pi}{4}', '\\frac{\\pi}{2}', '\\frac{3\\pi}{4}', '\\frac{\\pi}{3}', '\\frac{2\\pi}{3}', '\\frac{\\pi}{6}', '\\pi'].filter((s) => s !== ang).map((s) => `$${s}$`),
        "Calcule le produit scalaire et les normes.",
        `$\\vec{u} \\cdot \\vec{v} = ${dot}$, $\\|\\vec{u}\\| = ${this._1re_sqrt(n2u)}$ et $\\|\\vec{v}\\| = ${this._1re_sqrt(n2v)}$.`,
        `$\\cos\\theta = \\frac{\\vec{u} \\cdot \\vec{v}}{\\|\\vec{u}\\| \\times \\|\\vec{v}\\|} = \\frac{${dot}}{${this._1re_sqrt(n2u)} \\times ${this._1re_sqrt(n2v)}} = ${this._1G1_exact(dot / Math.sqrt(n2u * n2v))}$, donc $\\theta = ${ang}$.`
      );
    }
    const a = this.randInt(2, 9);
    const fig = this.randInt(0, 3);
    if (fig === 0) {
      const asks = [['\\overrightarrow{AB} \\cdot \\overrightarrow{AC}', a * a, 'Le projeté de $C$ sur $(AB)$ est $B$.'], ['\\overrightarrow{AB} \\cdot \\overrightarrow{AD}', 0, 'Les côtés $[AB]$ et $[AD]$ sont perpendiculaires.'], ['\\overrightarrow{AC} \\cdot \\overrightarrow{BD}', 0, 'Les diagonales d\'un carré sont perpendiculaires.'], ['\\overrightarrow{AB} \\cdot \\overrightarrow{CD}', -a * a, '$\\overrightarrow{CD} = -\\overrightarrow{AB}$.'], ['\\overrightarrow{AC} \\cdot \\overrightarrow{AC}', 2 * a * a, '$AC^2 = 2a^2$ (diagonale du carré).']];
      const [e, v, why] = this.randChoice(asks);
      return this.makeMcq('1G2', 4, 'Produit scalaire dans un carré',
        "Choisir la bonne méthode (projection, orthogonalité, colinéarité)",
        `$ABCD$ est un carré de côté $${a}$. Calculer $${e}$.`,
        `$${e} = ${v}$`,
        [a * a, -a * a, 0, 2 * a * a, a, 2 * a].filter((w) => w !== v).map((w) => `$${e} = ${w}$`),
        "Place $A$ à l'origine d'un repère orthonormé, avec $B(" + a + " ; 0)$ et $D(0 ; " + a + ")$.",
        why,
        `Avec $A(0 ; 0)$, $B(${a} ; 0)$, $C(${a} ; ${a})$, $D(0 ; ${a})$ : ${why} Donc $${e} = ${v}$.`
      );
    }
    if (fig === 1) {
      const asks = [['\\overrightarrow{AB} \\cdot \\overrightarrow{AC}', a * a, 2], ['\\overrightarrow{AB} \\cdot \\overrightarrow{BC}', -a * a, 2], ['\\overrightarrow{BA} \\cdot \\overrightarrow{BC}', a * a, 2]];
      const [e, n, dd] = this.randChoice(asks);
      const v = this.frac(n, dd);
      return this.makeMcq('1G2', 4, 'Produit scalaire dans un triangle équilatéral',
        "Utiliser $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\cos(\\vec{u}, \\vec{v})$",
        `$ABC$ est un triangle équilatéral de côté $${a}$. Calculer $${e}$.`,
        `$${e} = ${v}$`,
        [this.frac(-n, dd), String(a * a), this._1re_radFrac(a * a, 2, 3), '0', this.frac(n, 4)].map((w) => `$${e} = ${w}$`),
        "Les angles d'un triangle équilatéral mesurent $\\frac{\\pi}{3}$.",
        n < 0 ? "Attention : l'angle entre $\\overrightarrow{AB}$ et $\\overrightarrow{BC}$ vaut $\\frac{2\\pi}{3}$ (mets les vecteurs bout à bout depuis la même origine)." : "$\\cos\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}$.",
        `$${e} = ${a} \\times ${a} \\times \\cos\\left(${n < 0 ? '\\frac{2\\pi}{3}' : '\\frac{\\pi}{3}'}\\right) = ${a * a} \\times ${n < 0 ? '\\left(-\\frac{1}{2}\\right)' : '\\frac{1}{2}'} = ${v}$.`
      );
    }
    let L = this.randInt(2, 9); let l = this.randInt(1, 8);
    if (L === l) L++;
    const asks = [['\\overrightarrow{AB} \\cdot \\overrightarrow{AC}', L * L, `Le projeté de $C$ sur $(AB)$ est $B$, donc $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = AB^2 = ${L * L}$.`], ['\\overrightarrow{AD} \\cdot \\overrightarrow{AC}', l * l, `Le projeté de $C$ sur $(AD)$ est $D$, donc $\\overrightarrow{AD} \\cdot \\overrightarrow{AC} = AD^2 = ${l * l}$.`], ['\\overrightarrow{AC} \\cdot \\overrightarrow{BD}', l * l - L * L, `En repère : $\\overrightarrow{AC}(${L} ; ${l})$ et $\\overrightarrow{BD}(${-L} ; ${l})$, donc $\\overrightarrow{AC} \\cdot \\overrightarrow{BD} = ${-L * L} + ${l * l} = ${l * l - L * L}$.`]];
    const [e, v, sol] = this.randChoice(asks);
    return this.makeMcq('1G2', 4, 'Produit scalaire dans un rectangle',
      "Choisir la bonne méthode (projection ou coordonnées)",
      `$ABCD$ est un rectangle tel que $AB = ${L}$ et $AD = ${l}$. Calculer $${e}$.`,
      `$${e} = ${v}$`,
      [L * L, l * l, L * l, L * L - l * l, L * L + l * l, 0].filter((w) => w !== v).map((w) => `$${e} = ${w}$`),
      "Utilise un projeté orthogonal ou un repère orthonormé d'origine $A$.",
      `Prends $A(0 ; 0)$, $B(${L} ; 0)$, $C(${L} ; ${l})$ et $D(0 ; ${l})$.`,
      sol
    );
  },

  // =========================================================================
  // 1G3 : Applications du produit scalaire
  // =========================================================================
  gen_1G3(tier) {
    const xq = this._lyX('1G3', tier, [2, 2, 3, 2][tier - 1]);
    if (xq) return xq;
    if (tier === 1) {
      if (this.randInt(0, 1) === 0) {
        const b = this.randInt(2, 10); const c = this.randInt(2, 10);
        const obtuse = this.randInt(0, 1) === 1;
        const a2 = b * b + c * c + (obtuse ? 1 : -1) * b * c;
        return this._xa([String(a2), 'Saisir la valeur exacte de $BC^2$.'], '1G3', 1, 'Formule d\'Al-Kashi : calcul d\'une longueur',
          "Appliquer $BC^2 = AB^2 + AC^2 - 2 \\times AB \\times AC \\times \\cos\\widehat{A}$",
          `Dans un triangle $ABC$, $AB = ${c}$, $AC = ${b}$ et $\\widehat{BAC} = ${obtuse ? 120 : 60}^\\circ$. Calculer la longueur $BC$.`,
          `$BC = ${this._1re_sqrt(a2)}$`,
          [`$BC = ${this._1re_sqrt(b * b + c * c + (obtuse ? -1 : 1) * b * c)}$`, `$BC = ${this._1re_sqrt(b * b + c * c)}$`, `$BC = ${b + c}$`, `$BC = ${this._1re_sqrt(a2 + b * c)}$`],
          "Formule d'Al-Kashi : $BC^2 = AB^2 + AC^2 - 2 \\times AB \\times AC \\times \\cos\\widehat{A}$.",
          `$\\cos(${obtuse ? 120 : 60}^\\circ) = ${obtuse ? '-' : ''}\\frac{1}{2}$.`,
          `$BC^2 = ${c * c} + ${b * b} - 2 \\times ${c} \\times ${b} \\times ${obtuse ? '\\left(-\\frac{1}{2}\\right)' : '\\frac{1}{2}'} = ${a2}$, donc $BC = \\sqrt{${a2}}${this._1re_sqrt(a2) === `\\sqrt{${a2}}` ? '' : ' = ' + this._1re_sqrt(a2)}$.`
        );
      }
      let a; let b; let c;
      do { a = this.randInt(3, 12); b = this.randInt(3, 12); c = this.randInt(3, 12); } while (a >= b + c || b >= a + c || c >= a + b);
      const num = b * b + c * c - a * a;
      const cs = this.frac(num, 2 * b * c);
      return this.makeMcq('1G3', 1, 'Formule d\'Al-Kashi : cosinus d\'un angle',
        "Isoler $\\cos\\widehat{A}$ dans la formule d'Al-Kashi",
        `Dans un triangle $ABC$, $BC = ${a}$, $AC = ${b}$ et $AB = ${c}$. Calculer $\\cos\\widehat{BAC}$.`,
        `$\\cos\\widehat{BAC} = ${cs}$`,
        [`$\\cos\\widehat{BAC} = ${this.frac(-num, 2 * b * c)}$`, `$\\cos\\widehat{BAC} = ${this.frac(a * a + b * b - c * c, 2 * a * b)}$`, `$\\cos\\widehat{BAC} = ${this.frac(num, b * c)}$`, `$\\cos\\widehat{BAC} = ${this.frac(b * b + c * c + a * a, 2 * b * c)}$`],
        "$BC^2 = AB^2 + AC^2 - 2 \\times AB \\times AC \\times \\cos\\widehat{A}$.",
        "Isole $\\cos\\widehat{A} = \\frac{AB^2 + AC^2 - BC^2}{2 \\times AB \\times AC}$.",
        `$\\cos\\widehat{BAC} = \\frac{${c}^2 + ${b}^2 - ${a}^2}{2 \\times ${c} \\times ${b}} = ${cs}$.`
      );
    }
    if (tier === 2) {
      const a = this.randNonZero(-6, 6); const b = this.randNonZero(-6, 6);
      if (this.randInt(0, 1) === 0) {
        const c = this.randInt(-9, 9);
        return this.makeMcq('1G3', 2, 'Vecteur normal à une droite',
          "Lire un vecteur normal $\\vec{n}(a ; b)$ sur l'équation $ax + by + c = 0$",
          `Parmi les vecteurs suivants, lequel est un vecteur normal à la droite d'équation $${this.poly([[a, 'x'], [b, 'y'], [c, '']])} = 0$ ?`,
          `$\\vec{n}(${a} ; ${b})$`,
          [`$\\vec{n}(${-b} ; ${a})$`, `$\\vec{n}(${b} ; ${a})$`, `$\\vec{n}(${a} ; ${-b})$`, `$\\vec{n}(${b} ; ${-a})$`],
          "Une droite d'équation $ax + by + c = 0$ admet $\\vec{n}(a ; b)$ comme vecteur normal.",
          "Ne confonds pas avec le vecteur directeur $\\vec{u}(-b ; a)$.",
          `Un vecteur normal est $\\vec{n}(${a} ; ${b})$ (coefficients de $x$ et de $y$). Les vecteurs $(${-b} ; ${a})$ et $(${b} ; ${-a})$ sont directeurs.`
        );
      }
      const xA = this.randInt(-5, 5); const yA = this.randInt(-5, 5);
      const c = -(a * xA + b * yA);
      const eq = (cc) => `$${this.poly([[a, 'x'], [b, 'y'], [cc, '']])} = 0$`;
      return this._xa([`(${a};${b};${c})`, 'Avec le vecteur normal $\\vec{n}$ donné, l\'équation s\'écrit $ax + by + c = 0$ : saisir (a ; b ; c).'], '1G3', 2, 'Équation d\'une droite de vecteur normal donné',
        "Utiliser $\\overrightarrow{AM} \\cdot \\vec{n} = 0$",
        `Déterminer une équation cartésienne de la droite passant par $A(${xA} ; ${yA})$ et de vecteur normal $\\vec{n}(${a} ; ${b})$.`,
        eq(c),
        [eq(-c), `$${this.poly([[-b, 'x'], [a, 'y'], [b * xA - a * yA, '']])} = 0$`, eq(c + 1), `$${this.poly([[a, 'x'], [b, 'y']])} = ${-c === 0 ? 1 : -c + 1}$`].filter(Boolean),
        "$M(x ; y)$ appartient à la droite si et seulement si $\\overrightarrow{AM} \\cdot \\vec{n} = 0$.",
        `$\\overrightarrow{AM}(x ${this.formatSign(-xA)} ; y ${this.formatSign(-yA)})$.`.replace(/x \+ 0|x - 0/, 'x').replace(/y \+ 0|y - 0/, 'y'),
        `$\\overrightarrow{AM} \\cdot \\vec{n} = ${this.poly([[a, xA === 0 ? 'x' : `(x - ${this.paren(xA)})`], [b, yA === 0 ? 'y' : `(y - ${this.paren(yA)})`]])} = 0 \\iff ${eq(c).slice(1, -1)}$.`
      );
    }
    if (tier === 3) {
      const fam = this.randInt(0, 2);
      const h = this.randInt(-6, 6); const k = this.randInt(-6, 6); const r = this.randInt(1, 8);
      const sq = (v, t) => (t === 0 ? `${v}^2` : `(${v} ${this.formatSign(-t)})^2`);
      if (fam === 0) {
        const e = (hh, kk, rr) => `$${sq('x', hh)} + ${sq('y', kk)} = ${rr}$`;
        return this._xa([`(${h};${k};${r * r})`, 'L\'équation s\'écrit $(x - a)^2 + (y - b)^2 = R$ : saisir (a ; b ; R).'], '1G3', 3, 'Équation d\'un cercle',
          "Écrire $(x - x_\\Omega)^2 + (y - y_\\Omega)^2 = r^2$",
          `Quelle est une équation du cercle de centre $\\Omega(${h} ; ${k})$ et de rayon $${r}$ ?`,
          e(h, k, r * r),
          [e(-h, -k, r * r), e(h, k, r), e(k, h, r * r), e(h, k, 2 * r)],
          "$M(x ; y)$ est sur le cercle si et seulement si $\\Omega M^2 = r^2$.",
          `Le rayon vaut $${r}$ : le membre de droite est $r^2$, et non $r$.`,
          `$\\Omega M^2 = r^2 \\iff ${e(h, k, r * r).slice(1, -1)}$.`
        );
      }
      if (fam === 1) {
        const D = -2 * h; const E = -2 * k; const F = h * h + k * k - r * r;
        return this._xa([`(${h};${k};${r})`, 'Saisir (a ; b ; r), où $\\Omega(a ; b)$ est le centre et $r$ le rayon.'], '1G3', 3, 'Centre et rayon d\'un cercle',
          "Retrouver la forme $(x - a)^2 + (y - b)^2 = r^2$ en complétant les carrés",
          `L'ensemble des points $M(x ; y)$ tels que $${this.poly([[1, 'x^2'], [1, 'y^2'], [D, 'x'], [E, 'y'], [F, '']])} = 0$ est un cercle. Quels sont son centre et son rayon ?`,
          `$\\Omega(${h} ; ${k})$ et $r = ${r}$`,
          [`$\\Omega(${-h} ; ${-k})$ et $r = ${r}$`, `$\\Omega(${h} ; ${k})$ et $r = ${r * r}$`, `$\\Omega(${D} ; ${E})$ et $r = ${r}$`, `$\\Omega(${-h} ; ${-k})$ et $r = ${this._1re_sqrt(Math.abs(F)) }$`],
          "Complète les carrés : $x^2 - 2ax = (x - a)^2 - a^2$.",
          h !== 0 ? `$${this.poly([[1, 'x^2'], [D, 'x']])} = ${sq('x', h)} - ${h * h}$.` : k !== 0 ? `$${this.poly([[1, 'y^2'], [E, 'y']])} = ${sq('y', k)} - ${k * k}$.` : 'Ici il n\'y a pas de terme du premier degré.',
          `On obtient $${sq('x', h)} + ${sq('y', k)} = ${r * r}$ : centre $\\Omega(${h} ; ${k})$, rayon $\\sqrt{${r * r}} = ${r}$.`
        );
      }
      // cercle de diamètre [AB]
      let A; let B;
      do {
        A = [this.randInt(-6, 6), this.randInt(-6, 6)];
        B = [this.randInt(-6, 6), this.randInt(-6, 6)];
      } while ((A[0] + B[0]) % 2 !== 0 || (A[1] + B[1]) % 2 !== 0 || (A[0] === B[0] && A[1] === B[1]));
      const cx = (A[0] + B[0]) / 2; const cy = (A[1] + B[1]) / 2;
      const r2 = ((B[0] - A[0]) ** 2 + (B[1] - A[1]) ** 2) / 4;
      const e = (hh, kk, rr) => `$${sq('x', hh)} + ${sq('y', kk)} = ${rr}$`;
      return this._xa([`(${cx};${cy};${r2})`, 'L\'équation s\'écrit $(x - a)^2 + (y - b)^2 = R$ : saisir (a ; b ; R).'], '1G3', 3, 'Cercle de diamètre $[AB]$',
        "Utiliser $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = 0$ ou le milieu de $[AB]$",
        `Soit $A(${A[0]} ; ${A[1]})$ et $B(${B[0]} ; ${B[1]})$. Quelle est une équation du cercle de diamètre $[AB]$ ?`,
        e(cx, cy, r2),
        [e(cx, cy, 4 * r2), e(-cx, -cy, r2), e(cx, cy, Math.round(Math.sqrt(r2)) ** 2 === r2 ? Math.sqrt(r2) : 2 * r2), e(B[0] - A[0], B[1] - A[1], r2)],
        "Le centre est le milieu de $[AB]$ et le rayon vaut $\\frac{AB}{2}$.",
        `Le milieu de $[AB]$ est $I(${cx} ; ${cy})$.`,
        `$I(${cx} ; ${cy})$ et $AB^2 = ${4 * r2}$, donc $r^2 = \\frac{AB^2}{4} = ${r2}$. Équation : ${e(cx, cy, r2)}.`
      );
    }
    // tier 4 (distance d'un point à une droite : remplacée par le projeté orthogonal, _x1G3proj)
    const fam = this.randInt(1, 2);
    if (fam === 1) {
      let AB; let AC; let BC;
      do { AB = this.randInt(2, 10); AC = this.randInt(2, 10); BC = 2 * this.randInt(1, 8); } while (AB >= AC + BC || AC >= AB + BC || BC >= AB + AC);
      const ai2 = (AB * AB + AC * AC) / 2 - BC * BC / 4;
      const ai2s = this.isDecimal(ai2) ? this.dec(ai2) : this.frac(2 * (AB * AB + AC * AC) - BC * BC, 4);
      return this.makeMcq('1G3', 4, 'Théorème de la médiane',
        "Utiliser $AB^2 + AC^2 = 2AI^2 + \\frac{BC^2}{2}$",
        `Dans un triangle $ABC$, $AB = ${AB}$, $AC = ${AC}$ et $BC = ${BC}$. On note $I$ le milieu de $[BC]$. Calculer $AI^2$.`,
        `$AI^2 = ${ai2s}$`,
        [`$AI^2 = ${this.dec((AB * AB + AC * AC) / 2 + BC * BC / 4)}$`, `$AI^2 = ${this.dec(AB * AB + AC * AC - BC * BC / 2)}$`, `$AI^2 = ${this.dec((AB * AB + AC * AC - BC * BC) / 2)}$`, `$AI^2 = ${this.dec(ai2 + 1)}$`],
        "Théorème de la médiane : $AB^2 + AC^2 = 2AI^2 + \\frac{BC^2}{2}$.",
        `$\\frac{BC^2}{2} = ${BC * BC / 2}$.`,
        `$2AI^2 = AB^2 + AC^2 - \\frac{BC^2}{2} = ${AB * AB} + ${AC * AC} - ${BC * BC / 2} = ${AB * AB + AC * AC - BC * BC / 2}$, donc $AI^2 = ${ai2s}$.`
      );
    }
    const tri = this.randChoice([[7, 3, 8, 60], [7, 5, 8, 60], [13, 7, 15, 60], [13, 8, 15, 60], [7, 3, 5, 120], [19, 5, 16, 120], [14, 6, 10, 120], [13, 7, 8, 120]]);
    const k = this.randInt(1, 3);
    const [a, b, c, ang] = tri.map((t, i) => (i < 3 ? t * k : t));
    return this._xa([String(ang), 'Saisir la mesure en degrés (nombre seul).'], '1G3', 4, 'Mesure d\'un angle avec Al-Kashi',
      "Calculer $\\cos\\widehat{A}$ puis reconnaître l'angle",
      `Dans un triangle $ABC$, $BC = ${a}$, $AC = ${b}$ et $AB = ${c}$. Quelle est la mesure de l'angle $\\widehat{BAC}$ ?`,
      `$${ang}^\\circ$`,
      ['$30^\\circ$', '$45^\\circ$', '$60^\\circ$', '$90^\\circ$', '$120^\\circ$', '$150^\\circ$'].filter((s) => s !== `$${ang}^\\circ$`),
      "$\\cos\\widehat{A} = \\frac{AB^2 + AC^2 - BC^2}{2 \\times AB \\times AC}$.",
      `$AB^2 + AC^2 - BC^2 = ${c * c + b * b - a * a}$.`,
      `$\\cos\\widehat{BAC} = \\frac{${c * c} + ${b * b} - ${a * a}}{2 \\times ${c} \\times ${b}} = ${this.frac(c * c + b * b - a * a, 2 * b * c)}$, donc $\\widehat{BAC} = ${ang}^\\circ$.`
    );
  },

  // =========================================================================
  // 1S1 : Probabilités conditionnelles
  // =========================================================================
  gen_1S1(tier) {
    const xq = this._lyX('1S1', tier, [2, 1, 2, 2][tier - 1]);
    if (xq) return xq;
    const p = (c) => this._1re_p(c); // centièmes
    if (tier === 1) {
      const pa = this.randInt(2, 8) * 10;
      const pab = this.randInt(1, 9) * 10; // P_A(B) en %
      const inter = pa * pab / 100; // en centièmes
      const inv = this.randInt(0, 1) === 1;
      const P = (x) => this.dec(x / 100);
      if (!inv) {
        return this.makeMcq('1S1', 1, 'Calcul d\'une probabilité conditionnelle',
          "Appliquer $P_A(B) = \\frac{P(A \\cap B)}{P(A)}$",
          `On donne $P(A) = ${P(pa)}$ et $P(A \\cap B) = ${P(inter)}$. Calculer $P_A(B)$.`,
          `$P_A(B) = ${P(pab)}$`,
          [`$P_A(B) = ${P(pa * inter / 100)}$`, `$P_A(B) = ${P(100 - pab)}$`, `$P_A(B) = ${P(pa - inter)}$`, `$P_A(B) = ${P(pa + inter > 100 ? 100 - inter : pa + inter)}$`],
          "$P_A(B) = \\frac{P(A \\cap B)}{P(A)}$.",
          `Divise $${P(inter)}$ par $${P(pa)}$.`,
          `$P_A(B) = \\frac{${P(inter)}}{${P(pa)}} = ${P(pab)}$.`
        );
      }
      return this.makeMcq('1S1', 1, 'Probabilité d\'une intersection',
        "Appliquer $P(A \\cap B) = P(A) \\times P_A(B)$",
        `On donne $P(A) = ${P(pa)}$ et $P_A(B) = ${P(pab)}$. Calculer $P(A \\cap B)$.`,
        `$P(A \\cap B) = ${P(inter)}$`,
        [`$P(A \\cap B) = ${P(pa + pab > 100 ? Math.abs(pa - pab) : pa + pab)}$`, `$P(A \\cap B) = ${P(Math.round(pab * 100 / pa) > 100 ? 100 - inter / 2 : Math.round(pab * 100 / pa))}$`, `$P(A \\cap B) = ${P(pab)}$`, `$P(A \\cap B) = ${P((100 - pa) * pab / 100)}$`],
        "$P(A \\cap B) = P(A) \\times P_A(B)$.",
        `Multiplie $${P(pa)}$ par $${P(pab)}$.`,
        `$P(A \\cap B) = ${P(pa)} \\times ${P(pab)} = ${P(inter)}$.`
      );
    }
    if (tier === 2) {
      const pa = this.randInt(1, 9) * 10;
      const b1 = this.randInt(1, 19) * 5;
      const b2 = this.randInt(1, 19) * 5;
      const pb = (pa * b1 + (100 - pa) * b2) / 100; // en centièmes
      const P = (x) => this.dec(x / 100);
      return this.makeMcq('1S1', 2, 'Formule des probabilités totales',
        "Appliquer $P(B) = P(A) P_A(B) + P(\\overline{A}) P_{\\overline{A}}(B)$",
        `On donne $P(A) = ${P(pa)}$, $P_A(B) = ${P(b1)}$ et $P_{\\overline{A}}(B) = ${P(b2)}$. Calculer $P(B)$.`,
        `$P(B) = ${P(pb)}$`,
        [`$P(B) = ${P((b1 + b2) / 2)}$`, `$P(B) = ${P(pa * b1 / 100)}$`, `$P(B) = ${P((pa * b1 + pa * b2) / 100)}$`, `$P(B) = ${P((pa * b2 + (100 - pa) * b1) / 100)}$`, `$P(B) = ${P(b1 * b2 / 100)}$`],
        "$A$ et $\\overline{A}$ forment une partition de l'univers : utilise un arbre pondéré.",
        "Calcule $P(\\overline{A}) = 1 - P(A)$, puis additionne les produits des probabilités le long des deux chemins menant à $B$.",
        `$P(B) = ${P(pa)} \\times ${P(b1)} + ${P(100 - pa)} \\times ${P(b2)} = ${P(pa * b1 / 100)} + ${P((100 - pa) * b2 / 100)} = ${P(pb)}$.`
      );
    }
    if (tier === 3) {
      const P = (x) => this.dec(x / 100);
      if (this.randInt(0, 1) === 0) {
        const pa = this.randInt(1, 9) * 10;
        const pb = this.randInt(1, 9) * 10;
        const indep = this.randInt(0, 1) === 1;
        let inter = pa * pb / 100;
        if (!indep) {
          const shift = this.randChoice([-10, -5, 5, 10]);
          inter = Math.min(Math.min(pa, pb), Math.max(1, inter + shift));
          if (Math.abs(inter - pa * pb / 100) < 1e-9) inter = inter >= 3 ? inter - 2 : inter + 2;
        }
        const yes = `Oui, car $P(A) \\times P(B) = ${P(pa * pb / 100)} = P(A \\cap B)$`;
        const no = `Non, car $P(A) \\times P(B) = ${P(pa * pb / 100)} \\neq P(A \\cap B)$`;
        return this.makeMcq('1S1', 3, 'Indépendance de deux événements',
          "Comparer $P(A \\cap B)$ et $P(A) \\times P(B)$",
          `On donne $P(A) = ${P(pa)}$, $P(B) = ${P(pb)}$ et $P(A \\cap B) = ${P(inter)}$. Les événements $A$ et $B$ sont-ils indépendants ?`,
          indep ? yes : no,
          [indep ? no : yes, 'Non, car $P(A \\cap B) \\neq 0$', 'Oui, car $P(A \\cap B) \\neq 0$', 'On ne peut pas conclure sans $P(A \\cup B)$'],
          "$A$ et $B$ sont indépendants si et seulement si $P(A \\cap B) = P(A) \\times P(B)$.",
          `Calcule $${P(pa)} \\times ${P(pb)}$.`,
          `$P(A) \\times P(B) = ${P(pa)} \\times ${P(pb)} = ${P(pa * pb / 100)}$ ${indep ? '$=$' : '$\\neq$'} $P(A \\cap B) = ${P(inter)}$ : les événements ${indep ? 'sont' : 'ne sont pas'} indépendants.`
        );
      }
      const pa = this.randInt(1, 9) * 10;
      const pb = this.randInt(1, 9) * 10;
      const u = pa + pb - pa * pb / 100;
      return this.makeMcq('1S1', 3, 'Réunion de deux événements indépendants',
        "Utiliser $P(A \\cup B) = P(A) + P(B) - P(A)P(B)$ si $A$ et $B$ sont indépendants",
        `$A$ et $B$ sont deux événements indépendants avec $P(A) = ${P(pa)}$ et $P(B) = ${P(pb)}$. Calculer $P(A \\cup B)$.`,
        `$P(A \\cup B) = ${P(u)}$`,
        [`$P(A \\cup B) = ${P(pa * pb / 100)}$`, `$P(A \\cup B) = ${P(pa + pb > 100 ? pa + pb - 100 : pa + pb)}$`, `$P(A \\cup B) = ${P(100 - pa * pb / 100)}$`, `$P(A \\cup B) = ${P(u - pa * pb / 100 > 0 ? u - pa * pb / 100 : u / 2)}$`],
        "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.",
        "Par indépendance, $P(A \\cap B) = P(A) \\times P(B)$.",
        `$P(A \\cap B) = ${P(pa)} \\times ${P(pb)} = ${P(pa * pb / 100)}$, donc $P(A \\cup B) = ${P(pa)} + ${P(pb)} - ${P(pa * pb / 100)} = ${P(u)}$.`
      );
    }
    // tier 4 : inversion du conditionnement
    if (this.randInt(0, 1) === 0) {
      const pa = this.randInt(1, 9) * 10;
      const b1 = this.randInt(1, 19) * 5;
      const b2 = this.randInt(1, 19) * 5;
      const num = pa * b1; // /10000
      const den = pa * b1 + (100 - pa) * b2;
      const v = num / den;
      const exact = this.isDecimal(v, 2);
      const sym = exact ? '=' : '\\approx';
      const P = (x) => this.dec(x / 100);
      const r2 = (x) => this.dec(Math.round(x * 100) / 100);
      return this.makeMcq('1S1', 4, 'Inversion du conditionnement (Bayes)',
        "Calculer $P_B(A) = \\frac{P(A \\cap B)}{P(B)}$",
        `On donne $P(A) = ${P(pa)}$, $P_A(B) = ${P(b1)}$ et $P_{\\overline{A}}(B) = ${P(b2)}$. Calculer $P_B(A)$ (arrondie au centième).`,
        `$P_B(A) ${sym} ${r2(v)}$`,
        [`$P_B(A) ${sym} ${r2(b1 / 100)}$`, `$P_B(A) ${sym} ${r2(num / 10000)}$`, `$P_B(A) ${sym} ${r2(1 - v)}$`, `$P_B(A) ${sym} ${r2(den / 10000)}$`, `$P_B(A) ${sym} ${r2(Math.min(0.99, v + 0.1))}$`],
        "Calcule d'abord $P(A \\cap B)$ puis $P(B)$ par la formule des probabilités totales.",
        "$P(A \\cap B) = P(A) \\times P_A(B)$ et $P(B) = P(A \\cap B) + P(\\overline{A}) \\times P_{\\overline{A}}(B)$.",
        `$P(A \\cap B) = ${this.dec(num / 10000)}$ et $P(B) = ${this.dec(num / 10000)} + ${P(100 - pa)} \\times ${P(b2)} = ${this.dec(den / 10000)}$. Donc $P_B(A) = \\frac{${this.dec(num / 10000)}}{${this.dec(den / 10000)}} ${sym} ${r2(v)}$.`
      );
    }
    const nAB = this.randInt(5, 60); const nAnB = this.randInt(5, 60); const nnAB = this.randInt(5, 60); const nnAnB = this.randInt(5, 60);
    const ask = this.randInt(0, 2);
    const N = nAB + nAnB + nnAB + nnAnB;
    const cases = [
      ['P_B(A)', nAB, nAB + nnAB, `parmi les $${nAB + nnAB}$ individus de $B$, $${nAB}$ sont dans $A$`],
      ['P_A(B)', nAB, nAB + nAnB, `parmi les $${nAB + nAnB}$ individus de $A$, $${nAB}$ sont dans $B$`],
      ['P_{\\overline{B}}(A)', nAnB, nAnB + nnAnB, `parmi les $${nAnB + nnAnB}$ individus de $\\overline{B}$, $${nAnB}$ sont dans $A$`]
    ];
    const [lab, n, d, why] = cases[ask];
    return this.makeMcq('1S1', 4, 'Probabilité conditionnelle et tableau d\'effectifs',
      "Restreindre l'univers à l'événement conditionnant",
      `Dans une population de $${N}$ personnes, on note $A$ et $B$ deux caractères. Effectifs : $${nAB}$ ont $A$ et $B$, $${nAnB}$ ont $A$ sans $B$, $${nnAB}$ ont $B$ sans $A$, et $${nnAnB}$ n'ont ni $A$ ni $B$. On choisit une personne au hasard. Calculer $${lab}$.`,
      `$${lab} = ${this.frac(n, d)}$`,
      [`$${lab} = ${this.frac(n, N)}$`, `$${lab} = ${this.frac(n, N - d === 0 ? 1 : N - d)}$`, `$${lab} = ${this.frac(d - n, d)}$`, `$${lab} = ${this.frac(d, N)}$`, `$${lab} = ${this.frac(n, d + 1)}$`, `$${lab} = ${this.frac(n + 1, d + 1)}$`],
      "On restreint l'univers aux individus vérifiant la condition.",
      "Divise l'effectif de l'intersection par l'effectif de l'événement conditionnant.",
      `${why.charAt(0).toUpperCase() + why.slice(1)}, donc $${lab} = ${this.frac(n, d)}$.`
    );
  },

  // =========================================================================
  // 1S2 : Variables aléatoires
  // =========================================================================
  /** Loi aléatoire : k valeurs distinctes et probabilités en centièmes (somme 100) */
  _1S2_law(k, step = 5) {
    const vals = this.pickDistinct([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 8, 10], k).sort((a, b) => a - b);
    const units = 100 / step;
    let cuts;
    do {
      cuts = this.pickDistinct([...Array(units - 1).keys()].map((i) => i + 1), k - 1).sort((a, b) => a - b);
    } while (false);
    const pr = [];
    let prev = 0;
    for (const c of [...cuts, units]) { pr.push((c - prev) * step); prev = c; }
    return { vals, pr };
  },

  _1S2_lawText(vals, pr, hideIdx = -1) {
    return vals.map((v, i) => `$P(X = ${v}) = ${i === hideIdx ? 'p' : this._1re_p(pr[i])}$`).join(', ');
  },

  gen_1S2(tier) {
    const xq = this._lyX('1S2', tier, [1, 1, 2, 1][tier - 1]);
    if (xq) return xq;
    const P = (c) => this._1re_p(c);
    if (tier === 1) {
      const k = this.randInt(3, 4);
      const { vals, pr } = this._1S2_law(k);
      const h = this.randInt(0, k - 1);
      const s = 100 - pr[h];
      return this.makeMcq('1S2', 1, 'Loi de probabilité : probabilité manquante',
        "Utiliser que la somme des probabilités vaut 1",
        `Une variable aléatoire $X$ prend les valeurs ${vals.map((v) => `$${v}$`).join(', ')} avec ${this._1S2_lawText(vals, pr, h)}. Que vaut $p$ ?`,
        `$p = ${P(pr[h])}$`,
        [`$p = ${P(s)}$`, `$p = ${P(Math.max(5, pr[h] - 10))}$`, `$p = ${P(Math.min(95, pr[h] + 10))}$`, `$p = ${P(Math.round(100 / k))}$`],
        "La somme des probabilités d'une loi vaut 1.",
        `Les probabilités connues ont pour somme $${P(s)}$.`,
        `$p = 1 - ${P(s)} = ${P(pr[h])}$.`
      );
    }
    if (tier === 2) {
      const k = this.randInt(3, 4);
      const { vals, pr } = this._1S2_law(k);
      const E = vals.reduce((a, v, i) => a + v * pr[i], 0); // centièmes
      return this.makeMcq('1S2', 2, 'Calcul de l\'espérance',
        "Appliquer $E(X) = \\sum x_i P(X = x_i)$",
        `Une variable aléatoire $X$ suit la loi : ${this._1S2_lawText(vals, pr)}. Calculer $E(X)$.`,
        `$E(X) = ${P(E)}$`,
        [`$E(X) = ${this.dec(vals.reduce((a, v) => a + v, 0) / k, 2)}$`, `$E(X) = ${P(-E)}$`, `$E(X) = ${P(E + 50)}$`, `$E(X) = ${P(vals.reduce((a, v, i) => a + Math.abs(v) * pr[i], 0))}$`, `$E(X) = ${P(E - 30)}$`],
        "$E(X) = x_1 P(X = x_1) + x_2 P(X = x_2) + \\dots$",
        "Fais la somme des produits valeur × probabilité.",
        `$E(X) = ${vals.map((v, i) => `${this.paren(v)} \\times ${P(pr[i])}`).join(' + ')} = ${P(E)}$.`
      );
    }
    if (tier === 3) {
      if (this.randInt(0, 1) === 0) {
        const a = this.randNonZero(-5, 5); const b = this.randInt(-9, 9);
        const E = this.randInt(-30, 30) / 10;
        const Y = this.poly([[a, 'X'], [b, '']]);
        return this.makeMcq('1S2', 3, 'Espérance de $aX + b$',
            "Utiliser la linéarité $E(aX + b) = aE(X) + b$",
            `On sait que $E(X) = ${this.dec(E)}$. On pose $Y = ${Y}$. Calculer $E(Y)$.`,
            `$E(Y) = ${this.dec(a * E + b)}$`,
            [`$E(Y) = ${this.dec(a * E)}$`, `$E(Y) = ${this.dec(a * a * E + b)}$`, `$E(Y) = ${this.dec(a * E - b)}$`, `$E(Y) = ${this.dec(a * (E + b))}$`],
            "$E(aX + b) = aE(X) + b$.",
            `Ici $a = ${a}$ et $b = ${b}$.`,
            `$E(Y) = ${a} \\times ${this.paren(this.dec(E))}${this._1re_sg(b)} = ${this.dec(a * E + b)}$.`
          );
      }
      // jeu : mise équitable
      const k = 3;
      const { vals, pr } = this._1S2_law(k, 10);
      const gains = vals.map((v) => Math.abs(v) * this.randChoice([1, 2, 5]) + this.randInt(0, 3));
      const G = gains.reduce((a, g, i) => a + g * pr[i], 0); // centièmes
      return this.makeMcq('1S2', 3, 'Jeu équitable',
        "Un jeu est équitable si l'espérance du gain algébrique est nulle",
        `Un jeu rapporte ${gains.map((g, i) => `$${g}$ € avec la probabilité $${P(pr[i])}$`).join(', ')}. Quelle mise $m$ (en euros) faut-il demander pour que le jeu soit équitable ?`,
        `$m = ${P(G)}$`,
        [`$m = ${this.dec(gains.reduce((a, g) => a + g, 0) / k, 2)}$`, `$m = ${P(G + 100)}$`, `$m = ${P(G / 2)}$`, `$m = ${Math.max(...gains)}$`, `$m = ${P(Math.max(0, G - 50))}$`],
        "Le gain algébrique est $X - m$ ; le jeu est équitable si $E(X - m) = 0$.",
        "$E(X - m) = E(X) - m$.",
        `$E(X) = ${gains.map((g, i) => `${g} \\times ${P(pr[i])}`).join(' + ')} = ${P(G)}$. Le jeu est équitable si $E(X) - m = 0$, soit $m = ${P(G)}$ €.`
      );
    }
    // tier 4 : variance
    const k = this.randInt(2, 3);
    const { vals, pr } = this._1S2_law(k, k === 2 ? 10 : 10);
    const E = vals.reduce((a, v, i) => a + v * pr[i], 0) / 100;
    const E2 = vals.reduce((a, v, i) => a + v * v * pr[i], 0) / 100;
    const Vv = E2 - E * E;
    const askSigma = false;
    return this.makeMcq('1S2', 4, 'Calcul de la variance',
      "Utiliser $V(X) = E(X^2) - E(X)^2$ (formule de König-Huygens)",
      `Une variable aléatoire $X$ suit la loi : ${this._1S2_lawText(vals, pr)}. Calculer $V(X)$.`,
      `$V(X) = ${this.dec(Vv)}$`,
      [`$V(X) = ${this.dec(E2)}$`, `$V(X) = ${this.dec(E2 + E * E)}$`, `$V(X) = ${this.dec(Math.sqrt(Math.abs(Vv)))}`.replace(/$/, '$'), `$V(X) = ${this.dec(Vv + 1)}$`, `$V(X) = ${this.dec(E2 - E)}$`],
      "Calcule $E(X)$ puis $E(X^2) = \\sum x_i^2 P(X = x_i)$.",
      "Calcule $E(X)$ et $E(X^2)$, puis retranche $E(X)^2$ à $E(X^2)$.",
      `$E(X) = ${this.dec(E)}$, $E(X^2) = ${vals.map((v, i) => `${this.paren(v)}^2 \\times ${P(pr[i])}`).join(' + ')} = ${this.dec(E2)}$. Donc $V(X) = ${this.dec(E2)} - ${this.paren(this.dec(E))}^2 = ${this.dec(Vv)}$${askSigma ? '' : ''}.`
    );
  },

  // =========================================================================
  // 1S3 : Algorithmique et programmation (Python) — Première spécialité
  // =========================================================================
  _1S3_py(lines) {
    return '\n```python\n' + lines.join('\n') + '\n```\n';
  },

  _1S3_n(v) {
    return `$${Number.isInteger(v) ? v : this.dec(v, 6)}$`;
  },

  /** Affichage Python d'une liste d'entiers, entre guillemets : « [1, 4, 9] » */
  _1S3_list(L) {
    return `« [${L.join(', ')}] »`;
  },

  /** Affichage Python d'un flottant : 1.0, 2.25 */
  _1S3_pyf(v) {
    return Number.isInteger(v) ? v + '.0' : String(v);
  },

  /** Écart relatif minimal entre les termes calculés et un seuil (évite les cas limites d'arrondi) */
  _1S3_safe(vals, S) {
    return vals.every((v) => Math.abs(v - S) > 1e-6 * Math.max(1, Math.abs(S)));
  },

  gen_1S3(tier) {
    const T = '1S3';
    const P = (l) => this._1S3_py(l);
    const N = (v) => this._1S3_n(v);
    const LS = (L) => this._1S3_list(L);
    if (tier === 1) {
      const fam = this.randInt(0, 2);
      if (fam === 0) {
        // Manipulations de base d'une liste
        const L = Array.from({ length: this.randInt(4, 6) }, () => this.randInt(0, 20));
        const code = [`L = [${L.join(', ')}]`];
        const M = L.slice();
        const ops = [];
        if (Math.random() < 0.7) { const v = this.randInt(1, 30); code.push(`L.append(${v})`); M.push(v); ops.push(`\`L.append(${v})\` ajoute ${v} à la fin`); }
        if (Math.random() < 0.6) { const i = this.randInt(0, M.length - 1); const w = this.randInt(0, 40); code.push(`L[${i}] = ${w}`); M[i] = w; ops.push(`\`L[${i}] = ${w}\` remplace l'élément d'indice ${i}`); }
        const ask = this.randInt(0, 3);
        let expr; let val; let ds;
        if (ask === 0) { const k = this.randInt(1, M.length - 2); expr = `L[${k}]`; val = M[k]; ds = [M[k - 1], M[k + 1], k]; } else if (ask === 1) { expr = 'L[-1]'; val = M[M.length - 1]; ds = [M[0], M[M.length - 2], M.length]; } else if (ask === 2) { expr = 'len(L)'; val = M.length; ds = [M.length - 1, M.length + 1, M[M.length - 1]]; } else { expr = 'L[len(L) - 2]'; val = M[M.length - 2]; ds = [M[M.length - 1], M[M.length - 3], M.length - 2]; }
        return this.makeMcq(T, 1, 'Indices et longueur d\'une liste',
          'Manipuler les indices, append et len',
          `Qu'affiche le programme Python suivant ?${P([...code, `print(${expr})`])}`,
          N(val),
          ds.map(N),
          'Les indices d\'une liste commencent à 0 ; `L[-1]` est le dernier élément.',
          '`len(L)` est le nombre d\'éléments de la liste.',
          `${ops.length ? ops.join(', puis ') + '. ' : ''}La liste vaut alors \`[${M.join(', ')}]\`. \`${expr}\` vaut ${N(val)}.`
        );
      }
      if (fam === 1) {
        // Listes en compréhension
        const forms = [
          ['k ** 2', (k) => k * k],
          ['2 * k + 1', (k) => 2 * k + 1],
          ['3 * k - 2', (k) => 3 * k - 2],
          ['k * (k + 1)', (k) => k * (k + 1)],
          ['10 - k', (k) => 10 - k]
        ];
        const [ft, ff] = this.randChoice(forms);
        const a = this.randInt(0, 4);
        const b = a + this.randInt(3, 6);
        const rng = a === 0 ? `range(${b})` : `range(${a}, ${b})`;
        const L = [];
        for (let k = a; k < b; k++) L.push(ff(k));
        const ask = this.randInt(0, 2);
        let expr; let ans; let ds;
        if (ask === 0) {
          const i = this.randInt(1, L.length - 1);
          expr = `L[${i}]`; ans = N(L[i]);
          ds = [N(ff(i)), N(L[i - 1]), N(ff(a + i + 1))];
          if (a === 0) ds[0] = N(ff(i + 2));
        } else if (ask === 1) {
          expr = 'len(L)'; ans = N(L.length); ds = [N(b - a + 1), N(b), N(L[L.length - 1])];
        } else {
          expr = 'L'; ans = LS(L);
          ds = [LS([...L, ff(b)]), LS(L.slice(1).concat([ff(b)])), LS(L.map((_, i) => ff(i + (a === 0 ? 1 : 0))))];
        }
        return this.makeMcq(T, 1, 'Liste en compréhension',
          'Construire une liste en compréhension',
          `Qu'affiche le programme Python suivant ?${P([`L = [${ft} for k in ${rng}]`, `print(${expr})`])}`,
          ans,
          ds,
          `\`${rng}\` parcourt les entiers de ${a} à ${b - 1}.`,
          `L'élément d'indice $i$ est obtenu pour \`k = ${a} + i\`.`,
          `Pour \`k\` allant de ${a} à ${b - 1}, on calcule \`${ft}\` : \`L = [${L.join(', ')}]\` (${L.length} éléments). Donc \`${expr}\` vaut ${ans}.`
        );
      }
      // Liste filtrée
      const n0 = this.randInt(15, 60);
      const d = this.randChoice([3, 4, 5, 6, 7]);
      const L = [];
      for (let k = 1; k < n0; k++) if (k % d === 0) L.push(k);
      if (L.length < 2) return this.gen_1S3(1);
      const ask = this.randInt(0, 2);
      const sum = L.reduce((x, y) => x + y, 0);
      const expr = ['len(L)', 'sum(L)', 'L[-1]'][ask];
      const val = [L.length, sum, L[L.length - 1]][ask];
      const withEnd = n0 % d === 0 ? [L.length + 1, sum + n0, n0][ask] : [L.length - 1, sum - L[L.length - 1], L[L.length - 2]][ask];
      return this.makeMcq(T, 1, 'Liste filtrée',
        'Construire une liste en compréhension avec une condition',
        `Qu'affiche le programme Python suivant ?${P([`L = [k for k in range(1, ${n0}) if k % ${d} == 0]`, `print(${expr})`])}`,
        N(val),
        [N(withEnd), N(Math.floor(n0 / d) + 1), N(val + d), N(L[0])],
        `La liste contient les entiers $k$ de 1 à ${n0 - 1} qui sont multiples de ${d}.`,
        '`sum(L)` est la somme des éléments, `L[-1]` le dernier élément.',
        `\`L = [${L.join(', ')}]\`. Donc \`${expr}\` vaut ${N(val)}.`
      );
    }
    if (tier === 2) {
      const fam = this.randInt(0, 3);
      if (fam === 0) {
        // Suite récurrente
        const a = this.randChoice([2, 3, -1, -2]);
        const b = this.randInt(-5, 5);
        const u0 = this.randInt(-3, 6);
        const n = this.randInt(3, 6);
        const dep = Math.random() < 0.3;
        const step = (u, k) => (dep ? u + 2 * k + 1 : a * u + b);
        const us = [u0];
        for (let k = 0; k <= n; k++) us.push(step(us[k], k));
        const rhs = dep ? 'u + 2 * k + 1' : `${a === -1 ? '-u' : `${a} * u`}${b ? ` ${b > 0 ? '+' : '-'} ${Math.abs(b)}` : ''}`;
        return this.makeMcq(T, 2, 'Calculer un terme d\'une suite',
          'Calculer un terme d\'une suite récurrente avec une boucle',
          `On considère le programme Python suivant.${P([`u = ${u0}`, `for k in range(${n}):`, `    u = ${rhs}`, 'print(u)'])}Quelle valeur affiche-t-il ?`,
          N(us[n]),
          [N(us[n - 1]), N(us[n + 1]), N(us[n] + 1)],
          `La boucle est exécutée ${n} fois : à la fin, \`u\` contient le terme $u_{${n}}$.`,
          'Calcule les termes successifs à partir de $u_0$.',
          `On obtient successivement $u_0 = ${u0}$${us.slice(1, n + 1).map((v, i) => `, $u_{${i + 1}} = ${v}$`).join('')}. Le programme affiche ${N(us[n])}.`
        );
      }
      if (fam === 1) {
        // Somme de termes
        const geo = Math.random() < 0.5;
        const u0 = this.randInt(1, 6);
        const r = geo ? this.randChoice([2, 3]) : this.randInt(-3, 5) || 2;
        const n = this.randInt(4, 7);
        const us = [u0];
        for (let k = 1; k <= n + 1; k++) us.push(geo ? us[k - 1] * r : us[k - 1] + r);
        if (us.slice(0, n).includes(0)) return this.gen_1S3(2);
        const s = us.slice(0, n).reduce((x, y) => x + y, 0);
        return this.makeMcq(T, 2, 'Somme de termes d\'une suite',
          'Calculer une somme de termes avec un accumulateur',
          `Qu'affiche le programme Python suivant ?${P(['s = 0', `u = ${u0}`, `for k in range(${n}):`, '    s = s + u', `    u = ${geo ? `${r} * u` : `u ${r < 0 ? '-' : '+'} ${Math.abs(r)}`}`, 'print(s)'])}`,
          N(s),
          [N(s + us[n]), N(s - u0), N(us[n]), N(us[n - 1])],
          `La boucle ajoute ${n} termes à \`s\`, en commençant par $u_0 = ${u0}$.`,
          'L\'ajout à `s` a lieu **avant** le calcul du terme suivant.',
          `\`s\` reçoit $u_0 + u_1 + \\dots + u_{${n - 1}}$ = $${us.slice(0, n).map((v) => this.paren(v)).join(' + ')} = ${s}$. Le programme affiche ${N(s)}.`
        );
      }
      if (fam === 2) {
        // Liste des premiers termes
        const a = this.randChoice([2, 3, -2]);
        const b = this.randInt(-4, 4);
        const u0 = this.randInt(-2, 5);
        const n = 3;
        const us = [u0];
        for (let k = 0; k < n + 1; k++) us.push(a * us[k] + b);
        const rhs = `${a} * L[k]${b ? ` ${b > 0 ? '+' : '-'} ${Math.abs(b)}` : ''}`;
        const wrong = [u0];
        for (let k = 0; k < n; k++) wrong.push(a * (wrong[k] + b));
        return this._xa([`(${us.slice(0, 4).join(';')})`, 'Saisir les quatre éléments de la liste affichée sous la forme (a ; b ; c ; d).'], T, 2, 'Liste des premiers termes',
          'Stocker les termes d\'une suite dans une liste',
          `Qu'affiche le programme Python suivant ?${P([`L = [${u0}]`, `for k in range(${n}):`, `    L.append(${rhs})`, 'print(L)'])}`,
          LS(us.slice(0, n + 1)),
          [LS(us.slice(1, n + 1)), LS(us.slice(0, n + 2)), LS(wrong), LS(us.slice(0, n))],
          '`L[k]` est le terme d\'indice $k$ ; `append` ajoute le terme suivant à la fin de la liste.',
          `La liste finale contient ${n + 1} termes : $u_0$ à $u_{${n}}$.`,
          `$u_0 = ${u0}$ puis $u_{k+1} = ${a}u_k ${this.formatSign(b).replace('+ 0', '')}$${b ? '' : ''} : ${us.slice(1, n + 1).map((v, i) => `$u_{${i + 1}} = ${v}$`).join(', ')}. Le programme affiche ${LS(us.slice(0, n + 1))}.`
        );
      }
      // Suite explicite (fonction)
      const a = this.randNonZero(-3, 3);
      const b = this.randInt(-5, 5);
      const c = this.randInt(-6, 6);
      const m = this.randInt(1, 8);
      const u = (n) => a * n * n + b * n + c;
      const terms = [`${a === 1 ? '' : a === -1 ? '-' : a + ' * '}n ** 2`];
      if (b) terms.push(`${b > 0 ? '+' : '-'} ${Math.abs(b) === 1 ? '' : Math.abs(b) + ' * '}n`);
      if (c) terms.push(`${c > 0 ? '+' : '-'} ${Math.abs(c)}`);
      const d = u(m + 1) - u(m);
      return this.makeMcq(T, 2, 'Suite définie explicitement',
        'Calculer avec une suite définie par une fonction Python',
        `Qu'affiche le programme Python suivant ?${P(['def u(n):', `    return ${terms.join(' ')}`, '', `print(u(${m + 1}) - u(${m}))`])}`,
        N(d),
        [N(u(m + 1)), N(u(m)), N(-d), N(a + b)],
        `\`u(n)\` renvoie $u_n = ${this.polyX([a, b, c], 'n')}$.`,
        `Calcule $u_{${m + 1}}$ et $u_{${m}}$ séparément.`,
        `$u_{${m + 1}} = ${u(m + 1)}$ et $u_{${m}} = ${u(m)}$, donc le programme affiche ${u(m) === 0 ? N(d) : `$${u(m + 1)} - ${this.paren(u(m))} = ${d}$`}.`
      );
    }
    if (tier === 3) {
      const fam = this.randInt(0, 3);
      if (fam === 0) {
        // Seuil pour une suite géométrique
        const grow = Math.random() < 0.55;
        const u0 = this.randChoice([100, 200, 500, 1000, 1500, 2000, 5000]);
        const q = grow ? this.randChoice([1.02, 1.03, 1.05, 1.1, 1.2, 1.25, 1.5]) : this.randChoice([0.5, 0.75, 0.8, 0.9, 0.95]);
        const mult = grow ? this.randChoice([1.5, 2, 3, 5]) : this.randChoice([0.5, 0.2, 0.1, 0.25]);
        const S = Math.round(u0 * mult);
        let u = u0; let n = 0; const vals = [u];
        while (grow ? u < S : u > S) { u = u * q; n++; vals.push(u); }
        if (!this._1S3_safe(vals, S) || n < 2) return this.gen_1S3(3);
        const qT = String(q);
        const lin = Math.ceil(Math.abs(S - u0) / (u0 * Math.abs(q - 1)) - 1e-9);
        return this.makeMcq(T, 3, 'Algorithme de seuil',
          'Déterminer un seuil avec une boucle while',
          `Une quantité vaut ${u0} à l'instant 0 et est multipliée par $${this.dec(q)}$ à chaque étape. Qu'affiche le programme suivant ?${P([`u = ${u0}`, 'n = 0', `while u ${grow ? '<' : '>'} ${S}:`, `    u = u * ${qT}`, '    n = n + 1', 'print(n)'])}`,
          N(n),
          [N(n - 1), N(n + 1), N(lin === n ? n + 2 : lin)],
          `On a $u_n = ${u0} \\times ${this.dec(q)}^n$ ; la boucle s'arrête au premier $n$ tel que $u_n ${grow ? '\\ge' : '\\le'} ${S}$.`,
          'Calcule quelques termes à la calculatrice autour du seuil.',
          `$u_{${n - 1}} \\approx ${this.dec(vals[n - 1], 2)}$, ${grow ? 'strictement inférieur' : 'strictement supérieur'} à ${S}, et $u_{${n}} \\approx ${this.dec(vals[n], 2)}$, ${grow ? 'supérieur ou égal' : 'inférieur ou égal'} à ${S} : la boucle s'arrête pour $n = ${n}$. Le programme affiche ${N(n)}.`
        );
      }
      if (fam === 1) {
        // Suite arithmético-géométrique et seuil
        const a = this.randChoice([0.5, 0.8, 0.9, 0.6, 0.75]);
        const l = this.randInt(2, 20);
        const b = Math.round(l * (1 - a) * 100) / 100;
        const down = Math.random() < 0.5;
        const u0 = down ? l + this.randInt(5, 40) : l - this.randInt(5, 40);
        const eps = this.randChoice([1, 0.5, 0.1, 0.01]);
        const S = down ? l + eps : l - eps;
        let u = u0; let n = 0; const vals = [u];
        while (down ? u > S : u < S) { u = a * u + b; n++; vals.push(u); }
        if (!this._1S3_safe(vals, S) || n < 2 || n > 200) return this.gen_1S3(3);
        const ST = String(Math.round(S * 100) / 100);
        return this.makeMcq(T, 3, 'Seuil pour une suite arithmético-géométrique',
          'Interpréter et exécuter un algorithme de seuil',
          `On considère la suite définie par $u_0 = ${u0}$ et $u_{n+1} = ${this.dec(a)}u_n + ${this.dec(b)}$, qui converge vers $${l}$. Qu'affiche le programme suivant ?${P([`u = ${u0}`, 'n = 0', `while u ${down ? '>' : '<'} ${ST}:`, `    u = ${a} * u + ${b}`, '    n = n + 1', 'print(n)'])}`,
          N(n),
          [N(n - 1), N(n + 1), N(n + 2)],
          `On a $u_n - ${l} = (u_0 - ${l}) \\times ${this.dec(a)}^n$.`,
          `La boucle s'arrête au premier $n$ tel que $u_n ${down ? '\\le' : '\\ge'} ${this.dec(S)}$.`,
          `$u_n = ${l} ${down ? '+' : '-'} ${Math.abs(u0 - l)} \\times ${this.dec(a)}^n$. On cherche le premier $n$ tel que $${Math.abs(u0 - l)} \\times ${this.dec(a)}^n \\le ${this.dec(eps)}$ : $u_{${n - 1}} \\approx ${this.dec(vals[n - 1], 4)}$ et $u_{${n}} \\approx ${this.dec(vals[n], 4)}$. Le programme affiche ${N(n)}.`
        );
      }
      if (fam === 2) {
        // Seuil pour une somme
        const forms = [
          ['n ** 2', (k) => k * k, '$1^2 + 2^2 + \\dots + n^2$'],
          ['2 ** n', (k) => 2 ** k, '$2^1 + 2^2 + \\dots + 2^n$'],
          ['3 * n', (k) => 3 * k, '$3 \\times (1 + 2 + \\dots + n)$'],
          ['n ** 3', (k) => k ** 3, '$1^3 + 2^3 + \\dots + n^3$']
        ];
        const [ft, ff, fm] = this.randChoice(forms);
        const S = this.randInt(50, 2000);
        let s = 0; let n = 0; const ss = [];
        while (s < S) { n++; s += ff(n); ss.push(s); }
        if (n < 3) return this.gen_1S3(3);
        return this.makeMcq(T, 3, 'Seuil pour une somme',
          'Programmer une recherche de seuil pour une somme',
          `Qu'affiche le programme Python suivant ?${P(['s = 0', 'n = 0', `while s < ${S}:`, '    n = n + 1', `    s = s + ${ft}`, 'print(n)'])}`,
          N(n),
          [N(n - 1), N(n + 1), N(s)],
          `Après le tour où \`n\` prend la valeur $n$, \`s\` vaut ${fm}.`,
          `Cherche le premier $n$ pour lequel cette somme atteint ${S}.`,
          `Pour $n = ${n - 1}$, la somme vaut $${ss[n - 2]}$, inférieure à $${S}$ ; pour $n = ${n}$, elle vaut $${s}$, supérieure ou égale à $${S}$. Le programme affiche ${N(n)}.`
        );
      }
      // Fonction seuil
      const q = this.randChoice([2, 3]);
      const c = this.randInt(0, 3);
      const u0 = this.randInt(c + 2, c + 6);
      const A = this.randChoice([100, 500, 1000, 5000, 10000, 50000, 100000]);
      let u = u0; let n = 0; const vals = [u];
      while (u <= A) { u = q * u - c; n++; vals.push(u); }
      return this.makeMcq(T, 3, 'Fonction seuil',
        'Écrire et utiliser une fonction de seuil',
        `Qu'affiche le programme Python suivant ?${P(['def seuil(A):', `    u = ${u0}`, '    n = 0', '    while u <= A:', `        u = ${q} * u${c ? ` - ${c}` : ''}`, '        n = n + 1', '    return n', '', `print(seuil(${A}))`])}`,
        N(n),
        [N(n - 1), N(n + 1), N(u)],
        `La fonction renvoie le premier rang $n$ tel que $u_n > ${A}$.`,
        'Calcule les termes successifs jusqu\'à dépasser le seuil.',
        `Termes successifs : ${vals.join(' ; ')}. Le premier terme strictement supérieur à ${A} est $u_{${n}} = ${u}$ : le programme affiche ${N(n)}.`
      );
    }
    // tier 4 : simulation et approximation
    const fam = this.randInt(0, 2);
    if (fam === 0) {
      // Fréquence simulée -> probabilité
      const F = this.randChoice([4, 6, 8, 10]);
      const two = Math.random() < 0.6;
      let cond; let test;
      if (!two) {
        const k = this.randInt(2, F);
        const opts = [
          [`a >= ${k}`, (a) => a >= k],
          ['a % 2 == 0', (a) => a % 2 === 0],
          [`a == 1 or a == ${F}`, (a) => a === 1 || a === F],
          [`a * a > ${k * 2}`, (a) => a * a > 2 * k],
          [`a % 3 == 0`, (a) => a % 3 === 0]
        ];
        [cond, test] = this.randChoice(opts);
      } else {
        const s = this.randInt(3, 2 * F - 1);
        const m = this.randInt(2, F * F - 1);
        const opts = [
          [`a + b == ${s}`, (a, b) => a + b === s],
          [`a + b >= ${s}`, (a, b) => a + b >= s],
          ['a == b', (a, b) => a === b],
          [`a * b > ${m}`, (a, b) => a * b > m],
          ['a > b', (a, b) => a > b]
        ];
        [cond, test] = this.randChoice(opts);
      }
      let fav = 0; let tot = 0;
      for (let a = 1; a <= F; a++) for (let b = 1; b <= (two ? F : 1); b++) { tot++; if (test(a, b)) fav++; }
      if (fav === 0 || fav === tot) return this.gen_1S3(4);
      const Nsim = this.randChoice([1000, 10000, 100000]);
      const code = ['from random import randint', '', 'def experience():', `    a = randint(1, ${F})`];
      if (two) code.push(`    b = randint(1, ${F})`);
      code.push(`    if ${cond}:`, '        return 1', '    return 0', '', 'def frequence(N):', '    c = 0', '    for i in range(N):', '        c = c + experience()', '    return c / N', '', `print(frequence(${Nsim}))`);
      const p = this.frac(fav, tot);
      return this.makeMcq(T, 4, 'Simulation et fréquence',
        'Interpréter un programme de simulation',
        `On ${two ? `lance deux dés équilibrés à ${F} faces` : `lance un dé équilibré à ${F} faces`} et on simule l'expérience avec le programme suivant.${P(code)}Autour de quelle valeur la valeur affichée fluctue-t-elle d'une exécution à l'autre ?`,
        `$${p}$`,
        [`$${this.frac(tot - fav, tot)}$`, `$${this.frac(fav + 1, tot)}$`, `$${this.frac(1, F)}$`, `$${this.frac(fav, two ? 2 * F : F + 1)}$`, `$${this.frac(fav - 1, tot)}$`].filter((o) => !/^\$-?\d+\$$/.test(o)),
        '`frequence(N)` renvoie la fréquence de l\'événement « la condition est vraie » sur N répétitions.',
        `Pour N grand, la fréquence est proche de la probabilité de l'événement : compte les issues favorables parmi les ${tot} issues équiprobables.`,
        `Il y a ${tot} issues équiprobables${two ? ' (couples `(a, b)`)' : ''}, dont ${fav} vérifient \`${cond}\`. La probabilité vaut $\\frac{${fav}}{${tot}}${this.gcd(fav, tot) > 1 ? ` = ${p}` : ''}$. D'après la loi des grands nombres, la fréquence affichée fluctue autour de $${p}$.`
      );
    }
    if (fam === 1) {
      // Gain moyen
      const g1 = this.randInt(5, 20);
      const k = this.randInt(3, 5);
      const g2 = this.randInt(1, 4);
      const c = this.randInt(1, 6);
      const E = this.frac(g1 + (6 - k) * g2 - (k - 1) * c, 6);
      const Ev = (g1 + (6 - k) * g2 - (k - 1) * c) / 6;
      const Nsim = this.randChoice([1000, 10000, 100000]);
      return this.makeMcq(T, 4, 'Simulation d\'un gain',
        'Relier moyenne simulée et espérance',
        `Un jeu consiste à lancer un dé équilibré à 6 faces. On simule ${Nsim} parties avec le programme suivant.${P(['from random import randint', '', 'def gain():', '    d = randint(1, 6)', '    if d == 6:', `        return ${g1}`, `    elif d >= ${k}:`, `        return ${g2}`, '    else:', `        return -${c}`, '', 'def moyenne(N):', '    s = 0', '    for i in range(N):', '        s = s + gain()', '    return s / N', '', `print(moyenne(${Nsim}))`])}Autour de quelle valeur la valeur affichée fluctue-t-elle ?`,
        `$${E}$`,
        [`$${this.frac(g1 + g2 - c, 3)}$`, `$${this.frac(g1 + (5 - k) * g2 - k * c, 6)}$`, `$${this.frac(g1 + (6 - k) * g2 + (k - 1) * c, 6)}$`, `$${this.frac(g1 + (6 - k) * g2, 6)}$`].filter((o) => Number.isInteger(Ev) || !/^\$-?\d+\$$/.test(o)),
        'La moyenne des gains sur un grand nombre de parties est proche de l\'espérance du gain.',
        `Gain ${g1} pour la face 6, ${g2} pour les faces ${k} à 5, $-${c}$ pour les faces 1 à ${k - 1}.`,
        `$E(G) = \\frac{${g1} + ${6 - k} \\times ${g2} - ${k - 1} \\times ${c}}{6} = ${E}$ (chaque face a la probabilité $\\frac{1}{6}$). Pour ${Nsim} parties, la moyenne affichée est proche de $${E}$ (loi des grands nombres).`
      );
    }
    // Balayage
    const p = this.randChoice([0.5, 0.25, 0.125]);
    const cube = Math.random() < 0.35;
    let A = cube ? this.randInt(3, 60) : this.randInt(2, 90);
    while (cube ? Number.isInteger(Math.round(Math.cbrt(A) * 1e9) / 1e9) : Number.isInteger(Math.sqrt(A))) A++;
    const f = (x) => (cube ? x * x * x : x * x);
    let x = 0;
    while (f(x) < A) x = x + p;
    const both = Number.isInteger(x) || Math.random() < 0.5;
    const pf = (v) => this._1S3_pyf(v);
    const expr = cube ? 'x * x * x' : 'x * x';
    return this.makeMcq(T, 4, 'Méthode par balayage',
      'Approcher une racine par balayage',
      `Qu'affiche le programme Python suivant ?${P(['x = 0', `while ${expr} < ${A}:`, `    x = x + ${p}`, both ? `print(x - ${p}, x)` : 'print(x)'])}`,
      both ? `« ${pf(x - p)} ${pf(x)} »` : N(x),
      both ? [`« ${pf(x)} ${pf(x + p)} »`, `« ${pf(x - 2 * p)} ${pf(x - p)} »`, `« 0 ${pf(x)} »`] : [N(x - p), N(x + p), N(Math.round(x / p) * p === x ? x - 2 * p : x + 2 * p)],
      `\`x\` augmente de ${p} tant que $x^${cube ? 3 : 2} < ${A}$.`,
      `Le programme s'arrête au premier multiple de ${p} dont le ${cube ? 'cube' : 'carré'} atteint ${A} : il encadre $${cube ? `\\sqrt[3]{${A}}` : `\\sqrt{${A}}`}$.`,
      `$${this.dec(x - p, 4)}^${cube ? 3 : 2} = ${this.dec(f(x - p), 6)} < ${A}$ et $${this.dec(x, 4)}^${cube ? 3 : 2} = ${this.dec(f(x), 6)} \\ge ${A}$ : la boucle s'arrête avec \`x = ${pf(x)}\`. On en déduit $${this.dec(x - p, 4)} < ${cube ? `\\sqrt[3]{${A}}` : `\\sqrt{${A}}`} \\le ${this.dec(x, 4)}$. Affichage : ${both ? `« ${pf(x - p)} ${pf(x)} »` : N(x)}.`
    );
  },
  // ---- Helpers de saisie exacte (Terminale) ----
  /** Fraction en texte brut réduite (saisie exacte) : _Tq(6, -4) -> "-3/2", _Tq(4, 2) -> "2" */
  _Tq(n, d = 1) {
    if (d < 0) { n = -n; d = -d; }
    if (n === 0) return '0';
    const g = this.gcd(n, d);
    return d / g === 1 ? String(n / g) : `${n / g}/${d / g}`;
  },

  /** Saisie exacte explicite d'un QCM : n-uplet (tableau) ou valeur, avec consigne */
  _Tx(q, ans, instruction, accepted) {
    q.exactAnswer = Array.isArray(ans) ? `(${ans.join(';')})` : String(ans);
    if (instruction) q.exactInstruction = instruction;
    if (accepted && accepted.length) q.acceptedAnswers = accepted;
    return q;
  },

  /** Saisie des solutions d'une équation trigonométrique (unités π/12) : quotients par π, ordre croissant */
  _TA9_exact(ks) {
    const ins = 'Saisir les solutions dans l\'ordre croissant, entre parenthèses et séparées par « ; » s\'il y en a plusieurs, par exemple (π/6;5π/6) (touche π ou « pi ») ; on peut aussi saisir leurs quotients par $\\pi$, par exemple (1/6;5/6). Une seule solution : la saisir seule ; aucune : saisir « aucune ».';
    if (!ks.length) return ['aucune', ins];
    const v = ks.map((k) => this._Tq(k, 12));
    const p = v.map((x) => this._xpi(x));
    return [v.length === 1 ? v[0] : v, ins, [p.length === 1 ? p[0] : `(${p.join(';')})`]];
  },

};

// Helpers partagés : implémentation unique dans advancedGenerators.js (window.MathsGenUtils).
// Délégation paresseuse (résolue à l'appel) : fonctionne quel que soit l'ordre de chargement.
['randInt', 'randNonZero', 'randChoice', 'shuffleArray', 'pickDistinct', 'gcd', 'lcm', 'frac', 'simplifyFrac',
  'dec', 'decText', 'isDecimal', 'formatSign', 'paren', 'poly', 'polyX', 'coefStr', 'pow', 'numValue',
  'normOption', 'makeMcq', 'makeExact'].forEach((name) => {
  window.MathsLyceeGenerators[name] = function (...args) {
    return window.MathsGenUtils[name](...args);
  };
});

// Branchement : MathsAdvancedGenerators.generate() délègue les chapitres de lycée à
// MathsLyceeGenerators.generate() via generateLycee() (résolution à l'appel, aucun pont à installer).
