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
 */
(function () {
  if (typeof window === 'undefined' || !window.MathsGenerators || !window.MathsGenUtils) return;
  const U = window.MathsGenUtils;
  const R = (a, b) => U.randInt(a, b);
  const pick = (arr) => U.randChoice(arr);
  const rd = (x, d = 6) => Math.round(x * 10 ** d) / 10 ** d;
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
    /** Équations différentielles autonomes : équilibres et stabilité */
    'veto-06'(t, id) {
      if (t <= 2 || Math.random() < 0.5) {
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
      const poly = `${c === 1 ? '' : c === -1 ? '-' : c}${fac(a)}${fac(b)}`;
      return Q(id, t, 'Stabilité d\'un équilibre', 'Étudier la stabilité des points d\'équilibre d\'une équation autonome',
        `On considère l'équation autonome $y' = f(y)$ avec $f(y) = ${poly}$. Ses points d'équilibre sont $${a}$ et $${b}$. Lequel est stable (les solutions partant près de lui s'en rapprochent) ?`,
        `$${askStable}$`, [`$${other}$`, 'Les deux', 'Aucun'],
        'Un équilibre $y^*$ est stable lorsque $f$ passe du signe $+$ au signe $-$ en $y^*$, c\'est-à-dire si $f\'(y^*) < 0$.',
        `Étudier le signe de $f$ : un polynôme du second degré de coefficient dominant $${c}$.`,
        `$f$ est du signe de $${c}$ à l'extérieur des racines et du signe contraire entre elles. ${c > 0 ? `Elle passe de $+$ à $-$ en $${a}$` : `Elle passe de $+$ à $-$ en $${b}$`} : l'équilibre $${askStable}$ est stable, $${other}$ est instable.`, null);
    },

    /** Variables à densité : uniforme, exponentielle, normalisation, Bienaymé-Tchebychev */
    'veto-12'(t, id) {
      const k = t === 1 ? R(0, 1) : R(0, 4);
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
        return Q(id, t, 'Loi uniforme : variance', 'Connaître la variance d\'une loi uniforme',
          `$X$ suit la loi uniforme sur $[${a} ; ${b}]$. Quelle est sa variance ? (Donner la valeur exacte.)`,
          `$${fracTex(L * L, 12)}$`,
          [`$\\dfrac{${L}}{12}$`, `$\\dfrac{${L * L}}{4}$`, `$${D(m)}$`],
          'La variance d\'une loi uniforme sur $[a ; b]$ ne dépend que de la longueur $b - a$.',
          '$V(X) = \\dfrac{(b - a)^2}{12}$.',
          `$V(X) = \\dfrac{${L}^2}{12} = \\dfrac{${L * L}}{12}$, soit environ $${D(v, 3)}$.`, fracInput(L * L, 12));
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
            `$E(X) = \\dfrac{1}{${D(lam)}} = ${D(1 / lam)}$ ans.`, inp(1 / lam));
        }
        const s = pick([1, 2, 3, 4, 5]);
        const ex = rd(lam * s);
        return Q(id, t, 'Loi exponentielle : probabilité', 'Calculer une probabilité avec la loi exponentielle',
          `$X$ suit la loi exponentielle de paramètre $\\lambda = ${D(lam)}$. Exprimer $P(X > ${s})$.`,
          `$e^{-${D(ex)}}$`, [`$1 - e^{-${D(ex)}}$`, `$${D(ex)}e^{-${D(ex)}}$`, `$e^{${D(ex)}}$`],
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

  function gcd(a, b) { return b ? gcd(b, a % b) : Math.abs(a); }
  function fracTex(p, q) { const g = gcd(p, q); return q / g === 1 ? String(p / g) : `\\dfrac{${p / g}}{${q / g}}`; }
  function fracInput(p, q) { const g = gcd(p, q); return q / g === 1 ? String(p / g) : `${p / g}/${q / g}`; }

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
      if (DEDICATED[chapterId]) pool.push(['ded', () => DEDICATED[chapterId](t, chapterId)], ['ded', () => DEDICATED[chapterId](t, chapterId)]);
      if (AG) {
        (src.sup || []).forEach((s) => pool.push(['sup', () => AG.generate(s, t)]));
        if (t <= 2) (src.lyc || []).forEach((s) => pool.push(['lyc', () => AG.generate(s, t + 1)]));
      }
      (src.sante || []).filter((s) => SD[s]).forEach((s) => pool.push(['ded', () => SD[s](Math.min(4, t + 1), chapterId)]));
      if (!pool.length) return null;
      const [kind, fn] = pick(pool);
      let q = null;
      try {
        q = fn();
      } catch (e) {
        q = null;
      }
      if (!q || !q.statement) return null;
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
