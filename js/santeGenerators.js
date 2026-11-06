/**
 * Exercices aléatoires des niveaux « Prépa santé » (sante-XX) et « PASS / L.AS » (pass-XX), cycle Concours.
 *
 * Chargé à la demande avec ces niveaux (index.html, level-bundles), APRÈS js/advancedGenerators.js et
 * js/lyceeGenerators.js. Chaque tirage provient :
 *  - d'un générateur dédié en contexte médical (dosages, dilutions, demi-vie, dépistage, biostatistique…) ;
 *  - ou d'un générateur du lycée couvrant la notion (MathsAdvancedGenerators.generate) ;
 *  - ou, avec une probabilité croissante avec le palier (STATIC_SHARE), de la banque statique
 *    (js/data/exercises_sante.js, js/data/exercises_pass.js) : la fonction renvoie alors null.
 */
(function () {
  if (typeof window === 'undefined' || !window.MathsGenerators || !window.MathsGenUtils) return;
  const U = window.MathsGenUtils;
  const R = (a, b) => U.randInt(a, b);
  const pick = (arr) => U.randChoice(arr);
  /** Arrondi numérique propre (évite 0.30000000000000004) */
  const rd = (x, d = 6) => Math.round(x * 10 ** d) / 10 ** d;
  /** Saisie attendue (point décimal) */
  const inp = (x, d = 6) => String(rd(x, d));
  const D = (x, d = 4) => U.dec(x, d);
  const ARR = (d) => (d === 0 ? 'à l\'unité' : d === 1 ? 'au dixième' : d === 2 ? 'au centième' : 'au millième');

  /** QCM convertible en saisie : exact = saisie attendue (null : QCM seul) */
  function Q(chapterId, tier, title, skill, statement, answer, distractors, h1, h2, sol, exact, instruction) {
    const q = U.makeMcq(chapterId, tier, title, skill, statement, answer, distractors, h1, h2, sol);
    if (exact === null) q.keepMcq = true;
    else if (exact !== undefined) {
      q.exactAnswer = exact;
      if (instruction) q.exactInstruction = instruction;
    }
    return U.applyExactPolicy(q, tier);
  }

  // ===========================================================================
  // PRÉPA SANTÉ
  // ===========================================================================
  const UNITS = [
    ['g', 'mg', 1000], ['mg', '\\mu g', 1000], ['L', 'mL', 1000], ['dL', 'mL', 100], ['kg', 'g', 1000], ['mL', '\\mu L', 1000]
  ];

  const DEDICATED = {
    'sante-01'(t, id) {
      const k = t <= 2 ? R(0, 2) : R(1, 3);
      if (k === 0) {
        const [big, small, f] = pick(UNITS);
        const v = pick([0.2, 0.25, 0.5, 1.2, 1.5, 2.5, 3.2, 0.05, 0.125, 4.8]);
        const down = Math.random() < 0.5;
        const val = down ? v : rd(v * f);
        const res = down ? rd(v * f) : v;
        const [from, to] = down ? [big, small] : [small, big];
        return Q(id, t, 'Conversion d\'unités', 'Convertir des unités de masse et de volume',
          `Convertir $${D(val)}\\ \\mathrm{${from}}$ en $\\mathrm{${to}}$.`,
          `$${D(res)}$`, [`$${D(down ? res / 100 : res * 100)}$`, `$${D(down ? res / 10 : res * 10)}$`, `$${D(down ? v / f : val * f)}$`],
          `$1\\ \\mathrm{${big}} = ${f}\\ \\mathrm{${small}}$.`,
          down ? `Passer à l'unité plus petite : on multiplie par $${f}$.` : `Passer à l'unité plus grande : on divise par $${f}$.`,
          `$${D(val)}\\ \\mathrm{${from}} = ${D(val)} ${down ? '\\times' : '\\div'} ${f} = ${D(res)}\\ \\mathrm{${to}}$.`,
          inp(res), `Saisir le nombre seul, en $\\mathrm{${to}}$.`);
      }
      if (k === 1) {
        const a = R(-9, 9), b = R(-9, 9), c = R(-6, 6);
        const n = a + b - c;
        return Q(id, t, 'Puissances de 10', 'Calculer avec les puissances de 10',
          `Le nombre $\\dfrac{10^{${a}} \\times 10^{${b}}}{10^{${c}}}$ s'écrit $10^{n}$. Que vaut $n$ ?`,
          `$${n}$`, [`$${a + b + c}$`, `$${a * b - c}$`, `$${-n}$`],
          '$10^{a} \\times 10^{b} = 10^{a+b}$ et $\\dfrac{10^{a}}{10^{c}} = 10^{a-c}$.',
          'Additionner les exposants du numérateur, puis soustraire celui du dénominateur.',
          `$n = (${a}) + (${b}) - (${c}) = ${n}$.`, String(n));
      }
      if (k === 2) {
        // Concentration massique
        const V = pick([100, 200, 250, 500]);
        const Cm = pick([2, 4, 5, 8, 9, 10, 20, 50]);
        const m = rd(Cm * V / 1000);
        return Q(id, t, 'Concentration massique', 'Calculer une concentration massique avec des unités cohérentes',
          `On dissout $${D(m)}\\ \\mathrm{g}$ de soluté dans de l'eau pour obtenir $${V}\\ \\mathrm{mL}$ de solution. Quelle est la concentration massique, en $\\mathrm{g/L}$ ?`,
          `$${D(Cm)}$`, [`$${D(m / V)}$`, `$${D(m * V)}$`, `$${D(Cm / 10)}$`],
          '$C_m = \\dfrac{m}{V}$, avec $V$ en litres.',
          `Convertir d'abord : $${V}\\ \\mathrm{mL} = ${D(V / 1000)}\\ \\mathrm{L}$.`,
          `$C_m = \\dfrac{${D(m)}}{${D(V / 1000)}} = ${D(Cm)}\\ \\mathrm{g/L}$.`, inp(Cm), 'Saisir le nombre seul, en g/L.');
      }
      // Notation scientifique d'un produit
      const a = pick([2, 3, 4, 5, 6]), b = pick([1.5, 2, 2.5, 3, 4]);
      const p = R(-8, -3), q2 = R(2, 9);
      let m = a * b, e = p + q2;
      if (m >= 10) { m = rd(m / 10); e += 1; }
      return Q(id, t, 'Notation scientifique', 'Écrire un résultat en notation scientifique',
        `Un échantillon contient $${a} \\times 10^{${q2}}$ cellules, chacune de masse $${D(b)} \\times 10^{${p}}\\ \\mathrm{g}$. La masse totale s'écrit $m \\times 10^{e}\\ \\mathrm{g}$ en notation scientifique. Que vaut l'exposant $e$ ?`,
        `$${e}$`, [`$${p + q2}$` === `$${e}$` ? `$${e + 1}$` : `$${p + q2}$`, `$${p * q2}$`, `$${e - 2}$`],
        'Multiplier les nombres entre eux et les puissances de 10 entre elles.',
        `$${a} \\times ${D(b)} = ${D(a * b)}$ : en notation scientifique, la mantisse doit être comprise entre $1$ et $10$.`,
        `$${a} \\times ${D(b)} \\times 10^{${q2} + (${p})} = ${D(a * b)} \\times 10^{${p + q2}} = ${D(m)} \\times 10^{${e}}\\ \\mathrm{g}$, donc $e = ${e}$.`, String(e));
    },

    'sante-02'(t, id) {
      const k = t === 1 ? R(0, 1) : t === 2 ? R(0, 2) : R(1, 3);
      if (k === 0) {
        const dk = pick([2, 5, 10, 15, 20, 25]), m = pick([12, 18, 20, 24, 30, 40, 60, 70]);
        const dose = dk * m;
        return Q(id, t, 'Posologie', 'Calculer une dose à partir d\'une posologie en mg/kg',
          `La posologie d'un médicament est de $${dk}\\ \\mathrm{mg/kg}$ par prise. Quelle dose, en $\\mathrm{mg}$, faut-il administrer à un patient de $${m}\\ \\mathrm{kg}$ ?`,
          `$${dose}$`, [`$${dk + m}$`, `$${D(m / dk)}$`, `$${dose * 10}$`],
          'La dose est proportionnelle à la masse du patient.',
          `Multiplier la posologie par la masse : $${dk} \\times ${m}$.`,
          `Dose $= ${dk}\\ \\mathrm{mg/kg} \\times ${m}\\ \\mathrm{kg} = ${dose}\\ \\mathrm{mg}$.`, String(dose), 'Saisir le nombre seul, en mg.');
      }
      if (k === 1) {
        const c = pick([2, 4, 5, 10, 20, 25, 50]), V = pick([1.5, 2, 2.5, 3, 4, 6, 7.5, 8]);
        const dose = rd(c * V);
        return Q(id, t, 'Volume à prélever', 'Calculer un volume à prélever à partir d\'une concentration',
          `Une solution injectable contient $${c}\\ \\mathrm{mg}$ de principe actif par $\\mathrm{mL}$. Quel volume, en $\\mathrm{mL}$, faut-il prélever pour administrer $${D(dose)}\\ \\mathrm{mg}$ ?`,
          `$${D(V)}$`, [`$${D(dose * c)}$`, `$${D(c / dose)}$`, `$${D(V * 10)}$`],
          'Volume $= \\dfrac{\\text{dose}}{\\text{concentration}}$.',
          `$V = \\dfrac{${D(dose)}}{${c}}$.`,
          `$V = \\dfrac{${D(dose)}\\ \\mathrm{mg}}{${c}\\ \\mathrm{mg/mL}} = ${D(V)}\\ \\mathrm{mL}$.`, inp(V), 'Saisir le nombre seul, en mL.');
      }
      if (k === 2) {
        // Dilution C1 V1 = C2 V2 : volume de solution mère
        const f = pick([2, 4, 5, 10, 20, 25]);
        const C2 = pick([0.5, 1, 2, 4, 5]), C1 = C2 * f;
        const V2 = pick([50, 100, 200, 250, 500]);
        const V1 = rd(V2 / f);
        return Q(id, t, 'Dilution', 'Utiliser la conservation de la quantité de soluté : $C_1V_1 = C_2V_2$',
          `On veut préparer $${V2}\\ \\mathrm{mL}$ d'une solution à $${D(C2)}\\ \\mathrm{g/L}$ à partir d'une solution mère à $${D(C1)}\\ \\mathrm{g/L}$. Quel volume de solution mère, en $\\mathrm{mL}$, faut-il prélever ?`,
          `$${D(V1)}$`, [`$${D(V2 * f)}$`, `$${D(V2 - V1)}$`, `$${D(C1 * C2)}$`],
          'Lors d\'une dilution, la masse de soluté se conserve : $C_1V_1 = C_2V_2$.',
          `$V_1 = \\dfrac{C_2 V_2}{C_1}$ ; le facteur de dilution vaut $\\dfrac{C_1}{C_2} = ${f}$.`,
          `$V_1 = \\dfrac{${D(C2)} \\times ${V2}}{${D(C1)}} = ${D(V1)}\\ \\mathrm{mL}$ (facteur de dilution $${f}$).`, inp(V1), 'Saisir le nombre seul, en mL.');
      }
      // Perfusion : débit en gouttes par minute (1 mL = 20 gouttes)
      const V = pick([250, 500, 1000]), h = pick([2, 4, 5, 8, 10, 12]);
      const gm = V * 20 / (h * 60);
      const ans = Math.round(gm);
      return Q(id, t, 'Débit de perfusion', 'Calculer un débit de perfusion',
        `On doit perfuser $${V}\\ \\mathrm{mL}$ en $${h}$ heures avec une tubulure où $1\\ \\mathrm{mL}$ correspond à $20$ gouttes. Quel débit, en gouttes par minute, faut-il régler ? Arrondir à l'unité.`,
        `$${ans}$`, [`$${Math.round(V / h)}$`, `$${Math.round(V / (h * 60))}$`, `$${Math.round(V * 20 / h)}$`],
        'Calculer d\'abord le nombre total de gouttes, puis la durée en minutes.',
        `Nombre de gouttes : $${V} \\times 20 = ${V * 20}$ ; durée : $${h} \\times 60 = ${h * 60}$ min.`,
        `Débit $= \\dfrac{${V * 20}}{${h * 60}} \\approx ${D(gm, 2)}$, soit environ $${ans}$ gouttes par minute.`, String(ans));
    },

    'sante-05'(t, id) {
      const k = t === 1 ? R(0, 1) : t === 2 ? R(0, 2) : R(1, 3);
      if (k === 0) {
        const T = pick([2, 3, 4, 5, 6, 8, 12]), n = R(2, 5);
        const m0 = pick([80, 160, 200, 320, 400, 640, 800]);
        const m = rd(m0 / 2 ** n);
        return Q(id, t, 'Demi-vie', 'Exploiter la demi-vie d\'un médicament',
          `Un médicament a une demi-vie d'élimination de $${T}$ heures. On administre $${m0}\\ \\mathrm{mg}$. Quelle quantité, en $\\mathrm{mg}$, reste-t-il dans l'organisme au bout de $${n * T}$ heures ?`,
          `$${D(m)}$`, [`$${D(m0 / (2 * n))}$`, `$${D(m0 - n * m0 / 4)}$`, `$${D(m * 2)}$`],
          'À chaque demi-vie, la quantité restante est divisée par $2$.',
          `$${n * T}$ heures correspondent à $${n}$ demi-vies.`,
          `$${n * T} = ${n} \\times ${T}$, donc la quantité est divisée par $2^{${n}} = ${2 ** n}$ : $\\dfrac{${m0}}{${2 ** n}} = ${D(m)}\\ \\mathrm{mg}$.`, inp(m), 'Saisir le nombre seul, en mg.');
      }
      if (k === 1) {
        const n = R(1, 13);
        return Q(id, t, 'pH', 'Calculer un pH à partir de la concentration en ions oxonium',
          `Une solution a une concentration en ions oxonium $[\\mathrm{H_3O^+}] = 10^{-${n}}\\ \\mathrm{mol/L}$. Quel est son pH, sachant que $\\mathrm{pH} = -\\log [\\mathrm{H_3O^+}]$ ?`,
          `$${n}$`, [`$${-n}$`, `$${14 - n === n ? n + 1 : 14 - n}$`, `$${D(Math.LN10 * n, 2)}$`],
          '$\\log(10^{a}) = a$.',
          `$-\\log(10^{-${n}}) = -(-${n})$.`,
          `$\\mathrm{pH} = -\\log(10^{-${n}}) = ${n}$.`, String(n));
      }
      if (k === 2) {
        const T = pick([2, 3, 4, 5, 6, 8, 10, 12]);
        const kk = Math.LN2 / T;
        return Q(id, t, 'Constante d\'élimination', 'Relier demi-vie et constante d\'élimination',
          `La concentration d'un médicament vérifie $C(t) = C_0\\,e^{-kt}$ ($t$ en heures) et sa demi-vie vaut $${T}$ h. Calculer $k$, en $\\mathrm{h^{-1}}$, arrondi au millième.`,
          `$${D(kk, 3)}$`, [`$${D(T / Math.LN2, 3)}$`, `$${D(1 / (2 * T), 3)}$`, `$${D(Math.LN2 * T, 3)}$`],
          'À $t = T_{1/2}$, on a $C(t) = \\dfrac{C_0}{2}$.',
          `$e^{-k T} = \\dfrac{1}{2}$ donne $kT = \\ln 2$.`,
          `$k = \\dfrac{\\ln 2}{${T}} \\approx ${D(kk, 3)}\\ \\mathrm{h^{-1}}$.`, inp(kk, 3));
      }
      // Durée pour atteindre une fraction
      const T = pick([2, 3, 4, 5, 6, 8]), p = pick([10, 20, 5]);
      const tt = T * Math.log(100 / p) / Math.LN2;
      return Q(id, t, 'Durée d\'élimination', 'Résoudre une équation avec le logarithme népérien',
        `La concentration d'un médicament vérifie $C(t) = C_0\\,e^{-kt}$ avec une demi-vie de $${T}$ h. Au bout de combien d'heures la concentration ne vaut-elle plus que $${p}\\,\\%$ de $C_0$ ? Arrondir au dixième.`,
        `$${D(tt, 1)}$`, [`$${D(T * 100 / p / 2, 1)}$`, `$${D(T * Math.log(p / 100) / -Math.LN2 / 2, 1)}$`, `$${D(tt + T, 1)}$`],
        `On cherche $t$ tel que $e^{-kt} = ${D(p / 100)}$, avec $k = \\dfrac{\\ln 2}{${T}}$.`,
        `Prendre le logarithme : $-kt = \\ln(${D(p / 100)})$.`,
        `$t = \\dfrac{\\ln(${100 / p})}{k} = ${T} \\times \\dfrac{\\ln(${100 / p})}{\\ln 2} \\approx ${D(tt, 1)}$ h.`, inp(tt, 1));
    },

    'sante-07'(t, id) {
      // Doses répétées : u_{n+1} = q u_n + D
      const q = pick([0.2, 0.25, 0.4, 0.5, 0.6, 0.75, 0.8]);
      const L = pick([100, 200, 400, 500, 1000]);
      const Dd = rd(L * (1 - q));
      if (t <= 2) {
        const u1 = rd(q * Dd + Dd), u2 = rd(q * u1 + Dd);
        const ask2 = t === 2;
        const ans = ask2 ? u2 : u1;
        return Q(id, t, 'Doses répétées', 'Calculer les premiers termes d\'une suite arithmético-géométrique',
          `Un patient reçoit $${D(Dd)}\\ \\mathrm{mg}$ d'un médicament toutes les $12$ heures. Entre deux prises, l'organisme élimine $${D(100 * (1 - q))}\\,\\%$ du médicament présent. On note $u_n$ la quantité (en mg) juste après la $(n+1)$-ième prise, avec $u_0 = ${D(Dd)}$. Calculer $u_{${ask2 ? 2 : 1}}$.`,
          `$${D(ans)}$`, [`$${D(ask2 ? 3 * Dd : 2 * Dd)}$`, `$${D(ask2 ? u1 * q : Dd * q)}$`, `$${D(ans + Dd * q)}$`],
          `Il reste $${D(100 * q)}\\,\\%$ du médicament avant chaque nouvelle prise : $u_{n+1} = ${D(q)}\\,u_n + ${D(Dd)}$.`,
          `$u_1 = ${D(q)} \\times ${D(Dd)} + ${D(Dd)}$.`,
          `$u_1 = ${D(q)} \\times ${D(Dd)} + ${D(Dd)} = ${D(u1)}$${ask2 ? `, puis $u_2 = ${D(q)} \\times ${D(u1)} + ${D(Dd)} = ${D(u2)}$` : ''}.`, inp(ans), 'Saisir le nombre seul, en mg.');
      }
      return Q(id, t, 'Quantité limite', 'Déterminer la limite d\'une suite arithmético-géométrique',
        `Un patient reçoit $${D(Dd)}\\ \\mathrm{mg}$ d'un médicament à intervalles réguliers. Entre deux prises, il reste $${D(100 * q)}\\,\\%$ de la quantité présente, si bien que la quantité juste après chaque prise vérifie $u_{n+1} = ${D(q)}\\,u_n + ${D(Dd)}$. Vers quelle valeur, en mg, la suite $(u_n)$ converge-t-elle ?`,
        `$${D(L)}$`, [`$${D(Dd / q)}$`, `$${D(Dd * (1 + q))}$`, `$${D(Dd)}$`],
        'La limite $\\ell$ vérifie $\\ell = q\\,\\ell + D$ (point fixe).',
        `Résoudre $\\ell = ${D(q)}\\,\\ell + ${D(Dd)}$, soit $${D(1 - q)}\\,\\ell = ${D(Dd)}$.`,
        `Comme $0 < ${D(q)} < 1$, la suite converge vers le point fixe $\\ell = \\dfrac{${D(Dd)}}{1 - ${D(q)}} = ${D(L)}\\ \\mathrm{mg}$.`, inp(L), 'Saisir le nombre seul, en mg.');
    },

    'sante-08'(t, id) {
      const p = pick([0.01, 0.02, 0.05, 0.1, 0.2]), se = pick([0.9, 0.95, 0.98, 0.99]), sp = pick([0.9, 0.95, 0.97, 0.99]);
      const pt = p * se + (1 - p) * (1 - sp);
      if (t <= 2) {
        return Q(id, t, 'Probabilité d\'un test positif', 'Utiliser la formule des probabilités totales',
          `Une maladie touche $${D(100 * p)}\\,\\%$ d'une population. Un test est positif chez $${D(100 * se)}\\,\\%$ des malades et négatif chez $${D(100 * sp)}\\,\\%$ des non-malades. On teste une personne au hasard. Quelle est la probabilité que le test soit positif ? Donner la valeur exacte.`,
          `$${D(pt, 6)}$`, [`$${D(p * se, 6)}$`, `$${D(se * sp, 6)}$`, `$${D(p * se + (1 - p) * sp, 6)}$`],
          'Distinguer deux cas : la personne est malade ou ne l\'est pas (arbre pondéré).',
          `$P(T) = P(M)\\,P_M(T) + P(\\overline{M})\\,P_{\\overline{M}}(T)$, avec $P_{\\overline{M}}(T) = 1 - ${D(sp)}$.`,
          `$P(T) = ${D(p)} \\times ${D(se)} + ${D(1 - p)} \\times ${D(1 - sp)} = ${D(pt, 6)}$.`, inp(pt, 6));
      }
      const vpp = p * se / pt;
      return Q(id, t, 'Valeur prédictive positive', 'Inverser un conditionnement (formule de Bayes)',
        `Une maladie touche $${D(100 * p)}\\,\\%$ d'une population. Un test est positif chez $${D(100 * se)}\\,\\%$ des malades et négatif chez $${D(100 * sp)}\\,\\%$ des non-malades. Le test d'une personne est positif. Quelle est la probabilité qu'elle soit malade ? Arrondir au centième.`,
        `$${D(vpp, 2)}$`, [`$${D(se, 2)}$` === `$${D(vpp, 2)}$` ? `$${D(vpp + 0.05, 2)}$` : `$${D(se, 2)}$`, `$${D(p * se, 2)}$` === `$${D(vpp, 2)}$` ? `$${D(vpp - 0.03, 2)}$` : `$${D(p * se, 2)}$`, `$${D(1 - vpp, 2)}$`],
        'On cherche $P_T(M)$, et non $P_M(T)$.',
        `$P_T(M) = \\dfrac{P(M \\cap T)}{P(T)}$, avec $P(T) = ${D(p)} \\times ${D(se)} + ${D(1 - p)} \\times ${D(1 - sp)}$.`,
        `$P(M \\cap T) = ${D(p * se, 6)}$ et $P(T) = ${D(pt, 6)}$, donc $P_T(M) = \\dfrac{${D(p * se, 6)}}{${D(pt, 6)}} \\approx ${D(vpp, 2)}$.${vpp < 0.5 ? ' Quand la maladie est rare, une part importante des tests positifs sont des faux positifs.' : ''}`, inp(vpp, 2));
    },

    'sante-10'(t, id) {
      const n = t <= 2 ? 5 : 7;
      const base = pick([60, 70, 80, 90, 120]);
      const xs = Array.from({ length: n }, () => base + R(-15, 15));
      const sorted = xs.slice().sort((a, b) => a - b);
      const med = sorted[(n - 1) / 2];
      const mean = xs.reduce((s, x) => s + x, 0) / n;
      const list = xs.join(' ; ');
      if (t === 1 || (t >= 3 && Math.random() < 0.4)) {
        return Q(id, t, 'Médiane', 'Déterminer la médiane d\'une série',
          `Voici les fréquences cardiaques au repos (en battements par minute) de ${n} patients : $${list}$. Quelle est la médiane de cette série ?`,
          `$${med}$`, [`$${xs[(n - 1) / 2]}$`, `$${D(mean, 2)}$`, `$${sorted[n - 1] - sorted[0]}$`],
          'Ranger d\'abord les valeurs dans l\'ordre croissant.',
          `La série compte ${n} valeurs : la médiane est la ${(n + 1) / 2}e valeur de la série ordonnée.`,
          `Série ordonnée : $${sorted.join(' ; ')}$. La médiane est $${med}$.`, String(med));
      }
      return Q(id, t, 'Moyenne', 'Calculer une moyenne',
        `Voici les fréquences cardiaques au repos (en battements par minute) de ${n} patients : $${list}$. Calculer la moyenne de cette série, arrondie au dixième.`,
        `$${D(mean, 1)}$`, [`$${D(med, 1)}$` === `$${D(mean, 1)}$` ? `$${D(mean + 1, 1)}$` : `$${D(med, 1)}$`, `$${D(mean * n / (n - 1), 1)}$`, `$${D((sorted[0] + sorted[n - 1]) / 2 + 0.3, 1)}$`],
        'Moyenne $= \\dfrac{\\text{somme des valeurs}}{\\text{effectif}}$.',
        `La somme des valeurs vaut $${xs.reduce((s, x) => s + x, 0)}$.`,
        `$\\bar x = \\dfrac{${xs.reduce((s, x) => s + x, 0)}}{${n}} \\approx ${D(mean, 1)}$.`, inp(mean, 1));
    }
  };

  // ===========================================================================
  // PASS / L.AS
  // ===========================================================================
  /** Table 2×2 de test diagnostique : VP, FN, FP, VN */
  function table2x2() {
    const VP = R(40, 95), FN = R(2, 20), FP = R(5, 60), VN = R(100, 400);
    return { VP, FN, FP, VN };
  }
  const tabTex = (a, b, c, d, r1, r2, c1, c2) =>
    `$$\\begin{array}{c|cc} & \\text{${c1}} & \\text{${c2}} \\\\ \\hline \\text{${r1}} & ${a} & ${b} \\\\ \\text{${r2}} & ${c} & ${d} \\end{array}$$`;

  Object.assign(DEDICATED, {
    'pass-01'(t, id) {
      const n = pick([5, 6, 8]);
      const m = pick([4, 5, 6, 10, 12]);
      // série d'écarts symétriques : moyenne entière, variance exacte
      const half = Array.from({ length: n / 2 | 0 }, () => R(1, 4));
      let devs = half.concat(half.map((x) => -x));
      if (n % 2) devs.push(0);
      devs = U.shuffleArray(devs);
      const xs = devs.map((d) => m + d);
      const mean = m;
      const v = devs.reduce((s, d) => s + d * d, 0) / n;
      const list = xs.join(' ; ');
      if (t <= 2) {
        return Q(id, t, 'Moyenne', 'Calculer la moyenne d\'une série',
          `Voici la durée d'hospitalisation (en jours) de ${n} patients : $${list}$. Quelle est la durée moyenne ?`,
          `$${mean}$`, [`$${D(xs.reduce((s, x) => s + x, 0) / (n - 1), 2)}$`, `$${mean + 1}$`, `$${D(v, 2)}$`],
          'Additionner les valeurs, puis diviser par l\'effectif.',
          `Somme des valeurs : $${xs.reduce((s, x) => s + x, 0)}$.`,
          `$\\bar x = \\dfrac{${xs.reduce((s, x) => s + x, 0)}}{${n}} = ${mean}$ jours.`, String(mean));
      }
      return Q(id, t, 'Variance', 'Calculer la variance d\'une série (variance de la série, divisée par $n$)',
        `Voici la durée d'hospitalisation (en jours) de ${n} patients : $${list}$. Leur moyenne vaut $${mean}$. Calculer la variance de cette série $V = \\dfrac{1}{n}\\sum (x_i - \\bar x)^2$. Donner la valeur exacte.`,
        `$${D(v, 4)}$`, [`$${D(v * n / (n - 1), 4)}$`, `$${D(Math.sqrt(v), 4)}$`, `$${D(v * n, 4)}$`],
        'Calculer chaque écart $x_i - \\bar x$, puis la moyenne de leurs carrés.',
        `Écarts : $${devs.join(' ; ')}$ ; somme des carrés : $${devs.reduce((s, d) => s + d * d, 0)}$.`,
        `$V = \\dfrac{${devs.reduce((s, d) => s + d * d, 0)}}{${n}} = ${D(v, 4)}$ (jours$^2$). Attention : l'estimateur sans biais divise par $n - 1$.`, inp(v, 4));
    },

    'pass-03'(t, id) {
      const { VP, FN, FP, VN } = table2x2();
      const which = t === 1 ? pick(['Se', 'Sp']) : t === 2 ? pick(['Se', 'Sp', 'VPP']) : pick(['VPP', 'VPN']);
      const val = { Se: VP / (VP + FN), Sp: VN / (VN + FP), VPP: VP / (VP + FP), VPN: VN / (VN + FN) };
      const nm = { Se: 'la sensibilité', Sp: 'la spécificité', VPP: 'la valeur prédictive positive', VPN: 'la valeur prédictive négative' };
      const fm = { Se: `\\dfrac{VP}{VP + FN} = \\dfrac{${VP}}{${VP + FN}}`, Sp: `\\dfrac{VN}{VN + FP} = \\dfrac{${VN}}{${VN + FP}}`,
        VPP: `\\dfrac{VP}{VP + FP} = \\dfrac{${VP}}{${VP + FP}}`, VPN: `\\dfrac{VN}{VN + FN} = \\dfrac{${VN}}{${VN + FN}}` };
      const others = Object.keys(val).filter((k) => k !== which).map((k) => `$${D(val[k], 3)}$`);
      return Q(id, t, 'Qualités d\'un test', 'Calculer sensibilité, spécificité et valeurs prédictives',
        `On a évalué un test diagnostique sur des patients dont le statut est connu :${tabTex(VP, FP, FN, VN, 'Test +', 'Test -', 'Malades', 'Non malades')}Calculer ${nm[which]} du test, arrondie au millième.`,
        `$${D(val[which], 3)}$`, others,
        which === 'Se' || which === 'Sp' ? 'Sensibilité et spécificité se lisent en colonne (selon le statut réel).' : 'Les valeurs prédictives se lisent en ligne (selon le résultat du test).',
        `${nm[which].charAt(0).toUpperCase() + nm[which].slice(1)} vaut $${fm[which].split(' = ')[0]}$.`,
        `$${fm[which]} \\approx ${D(val[which], 3)}$.`, inp(val[which], 3));
    },

    'pass-04'(t, id) {
      const k = t <= 2 ? R(0, 1) : R(1, 2);
      if (k === 0) {
        const n = pick([20, 50, 100, 200, 400]), p = pick([0.05, 0.1, 0.2, 0.25, 0.5]);
        const askV = t === 2 && Math.random() < 0.6;
        const ans = askV ? n * p * (1 - p) : n * p;
        return Q(id, t, askV ? 'Variance d\'une binomiale' : 'Espérance d\'une binomiale', 'Utiliser l\'espérance et la variance de la loi binomiale',
          `Chaque patient d'un service a une probabilité $${D(p)}$ de présenter un effet indésirable, indépendamment des autres. Sur $${n}$ patients, $X$ compte ceux qui le présentent. Calculer ${askV ? '$V(X)$' : '$E(X)$'}.`,
          `$${D(ans)}$`, askV ? [`$${D(n * p)}$`, `$${D(Math.sqrt(ans), 3)}$`, `$${D(n * p * p)}$`] : [`$${D(n * p * (1 - p))}$`, `$${D(n * (1 - p))}$`, `$${D(p)}$`],
          '$X$ suit la loi binomiale $\\mathcal{B}(n\\,;\\,p)$.',
          askV ? '$V(X) = np(1-p)$.' : '$E(X) = np$.',
          askV ? `$V(X) = ${n} \\times ${D(p)} \\times ${D(1 - p)} = ${D(ans)}$.` : `$E(X) = ${n} \\times ${D(p)} = ${D(ans)}$.`, inp(ans));
      }
      const lam = pick([0.5, 1, 1.5, 2, 2.5, 3, 4]);
      const kk = k === 1 ? 0 : pick([1, 2]);
      const fact = kk === 2 ? 2 : 1;
      const pr = Math.exp(-lam) * lam ** kk / fact;
      return Q(id, t, 'Loi de Poisson', 'Calculer une probabilité avec la loi de Poisson',
        `Le nombre d'admissions aux urgences pédiatriques entre 3 h et 4 h du matin suit la loi de Poisson de paramètre $\\lambda = ${D(lam)}$. Calculer la probabilité d'avoir exactement ${kk === 0 ? 'zéro admission' : kk === 1 ? 'une admission' : 'deux admissions'}, arrondie au millième.`,
        `$${D(pr, 3)}$`, [`$${D(Math.exp(-lam) * lam ** (kk + 1) / (kk + 1), 3)}$`, `$${D(1 - pr, 3)}$`, `$${D(Math.exp(-1 / lam), 3)}$`],
        '$P(X = k) = e^{-\\lambda}\\,\\dfrac{\\lambda^{k}}{k!}$.',
        `Ici $k = ${kk}$, donc $P(X = ${kk}) = e^{-${D(lam)}} \\times \\dfrac{${D(lam)}^{${kk}}}{${kk}!}$.`,
        `$P(X = ${kk}) = e^{-${D(lam)}} \\times \\dfrac{${D(lam)}^{${kk}}}{${fact}} \\approx ${D(pr, 3)}$.`, inp(pr, 3));
    },

    'pass-05'(t, id) {
      const mu = pick([70, 90, 100, 120, 140, 5]), s = mu === 5 ? pick([0.5, 0.25]) : pick([5, 8, 10, 12, 15, 20]);
      const z = pick([-2.5, -2, -1.5, -1, -0.5, 0.5, 1, 1.5, 2, 2.5, 3]);
      const x = rd(mu + z * s);
      if (t <= 2 || Math.random() < 0.5) {
        return Q(id, t, 'Centrer et réduire', 'Centrer et réduire une variable de loi normale',
          `La glycémie (en unités adaptées) d'une population suit la loi normale d'espérance $${D(mu)}$ et d'écart type $${D(s)}$. Calculer la valeur centrée réduite $z = \\dfrac{x - \\mu}{\\sigma}$ associée à $x = ${D(x)}$.`,
          `$${D(z)}$`, [`$${D(-z)}$`, `$${D(x - mu)}$`, `$${D((x - mu) / (s * s), 3)}$`],
          'On soustrait l\'espérance, puis on divise par l\'écart type.',
          `$z = \\dfrac{${D(x)} - ${D(mu)}}{${D(s)}}$.`,
          `$z = \\dfrac{${D(rd(x - mu))}}{${D(s)}} = ${D(z)}$.`, inp(z));
      }
      const k = pick([1, 2, 3]);
      const p = { 1: '0{,}68', 2: '0{,}95', 3: '0{,}997' }[k];
      return Q(id, t, 'Intervalles de la loi normale', 'Connaître les probabilités des intervalles $[\\mu - k\\sigma\\,;\\,\\mu + k\\sigma]$',
        `Une variable $X$ suit la loi normale $\\mathcal{N}(${D(mu)}\\,;\\,${D(s)}^2)$. Quelle est la valeur approchée de $P(${D(rd(mu - k * s))} \\leqslant X \\leqslant ${D(rd(mu + k * s))})$ ?`,
        `$${p}$`, ['$0{,}68$', '$0{,}95$', '$0{,}997$', '$0{,}5$'].filter((o) => o !== `$${p}$`),
        `Exprimer les bornes sous la forme $\\mu \\pm k\\sigma$.`,
        `$${D(rd(mu + k * s))} = ${D(mu)} + ${k} \\times ${D(s)}$.`,
        `L'intervalle est $[\\mu - ${k}\\sigma\\,;\\,\\mu + ${k}\\sigma]$, de probabilité environ $${p}$.`, null);
    },

    'pass-06'(t, id) {
      const n = pick([100, 400, 625, 900, 1600, 2500]);
      const f = pick([0.1, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.8]);
      const half = 1.96 * Math.sqrt(f * (1 - f) / n);
      if (t <= 2) {
        const n = pick([100, 400, 625, 1600, 2500]);
        const inf = f - 1 / Math.sqrt(n), sup = f + 1 / Math.sqrt(n);
        const lower = Math.random() < 0.5;
        const ans = lower ? inf : sup;
        return Q(id, t, 'Intervalle de confiance simplifié', 'Utiliser l\'intervalle de confiance $\\left[f - \\frac{1}{\\sqrt n}\\,;\\,f + \\frac{1}{\\sqrt n}\\right]$',
          `Dans un échantillon de $${n}$ patients, la fréquence observée de guérison est $f = ${D(f)}$. Calculer la borne ${lower ? 'inférieure' : 'supérieure'} de l'intervalle de confiance au niveau $95\\,\\%$ $\\left[f - \\dfrac{1}{\\sqrt n}\\,;\\,f + \\dfrac{1}{\\sqrt n}\\right]$.`,
          `$${D(ans)}$`, [`$${D(lower ? sup : inf)}$`, `$${D(lower ? f - 1 / n : f + 1 / n)}$`, `$${D(lower ? f - 2 / Math.sqrt(n) : f + 2 / Math.sqrt(n))}$`],
          `Calculer d'abord $\\sqrt{${n}}$.`,
          `$\\dfrac{1}{\\sqrt{${n}}} = ${D(1 / Math.sqrt(n))}$.`,
          `$${D(f)} ${lower ? '-' : '+'} ${D(1 / Math.sqrt(n))} = ${D(ans)}$.`, inp(ans));
      }
      return Q(id, t, 'Demi-largeur d\'un intervalle de confiance', 'Calculer un intervalle de confiance asymptotique d\'une proportion',
        `Dans un échantillon de $${n}$ patients, la fréquence observée d'un effet secondaire est $f = ${D(f)}$. Calculer la demi-largeur $1{,}96\\sqrt{\\dfrac{f(1-f)}{n}}$ de l'intervalle de confiance à $95\\,\\%$, arrondie au millième.`,
        `$${D(half, 3)}$`, [`$${D(1.96 * f * (1 - f) / Math.sqrt(n), 3)}$`, `$${D(1 / Math.sqrt(n), 3)}$`, `$${D(1.645 * Math.sqrt(f * (1 - f) / n), 3)}$`],
        '$f(1 - f)$ se calcule avant de diviser par $n$.',
        `$f(1 - f) = ${D(f * (1 - f))}$ et $\\sqrt{\\dfrac{${D(f * (1 - f))}}{${n}}} \\approx ${D(Math.sqrt(f * (1 - f) / n), 5)}$.`,
        `Demi-largeur $= 1{,}96 \\times ${D(Math.sqrt(f * (1 - f) / n), 5)} \\approx ${D(half, 3)}$ : l'intervalle est $[${D(f - half, 3)}\\,;\\,${D(f + half, 3)}]$.`, inp(half, 3));
    },

    'pass-07'(t, id) {
      const [n, s] = pick([[25, 5], [25, 10], [36, 6], [36, 12], [49, 7], [49, 14], [64, 8], [64, 16], [100, 10], [100, 20]]);
      const se = s / Math.sqrt(n);
      const z = pick([-3, -2.5, -2, -1.5, -1, 1, 1.5, 2, 2.4, 3]);
      const mu0 = pick([100, 120, 80, 140]);
      const xb = rd(mu0 + z * se);
      if (t <= 2 || Math.random() < 0.5) {
        return Q(id, t, 'Statistique de test', 'Calculer la statistique d\'un test de comparaison d\'une moyenne à une norme',
          `Sur $${n}$ patients, la pression artérielle systolique moyenne vaut $\\bar x = ${D(xb)}$ mmHg. On teste $H_0 : \\mu = ${mu0}$, l'écart type étant supposé connu, $\\sigma = ${s}$. Calculer $Z = \\dfrac{\\bar x - \\mu_0}{\\sigma / \\sqrt n}$.`,
          `$${D(z)}$`, [`$${D(-z)}$`, `$${D((xb - mu0) / s, 3)}$`, `$${D((xb - mu0) / (s / n), 3)}$`],
          `$\\sigma / \\sqrt n = ${s} / \\sqrt{${n}}$.`,
          `$\\sigma / \\sqrt{${n}} = ${D(se, 4)}$ et $\\bar x - \\mu_0 = ${D(rd(xb - mu0))}$.`,
          `$Z = \\dfrac{${D(rd(xb - mu0))}}{${D(se, 4)}} = ${D(z)}$.`, inp(z));
      }
      const rej = Math.abs(z) > 1.96;
      return Q(id, t, 'Conclusion d\'un test', 'Conclure un test bilatéral au risque $5\\,\\%$',
        `Pour un test bilatéral de $H_0 : \\mu = ${mu0}$ au risque $\\alpha = 5\\,\\%$, la statistique observée vaut $Z = ${D(z)}$, $Z$ suivant la loi normale centrée réduite sous $H_0$. Quelle est la conclusion ?`,
        rej ? 'On rejette $H_0$' : 'On ne rejette pas $H_0$',
        [rej ? 'On ne rejette pas $H_0$' : 'On rejette $H_0$', 'On accepte $H_1$ avec une probabilité de $95\\,\\%$', '$H_0$ est vraie avec une probabilité de $95\\,\\%$'],
        'Au risque $5\\,\\%$ en bilatéral, on compare $|Z|$ à $1{,}96$.',
        `$|Z| = ${D(Math.abs(z))}$ ${rej ? '>' : '<'} $1{,}96$.`,
        `$|Z| = ${D(Math.abs(z))}$ ${rej ? 'dépasse' : 'ne dépasse pas'} $1{,}96$ : ${rej ? 'on rejette $H_0$ au risque $5\\,\\%$ (différence significative)' : 'on ne rejette pas $H_0$ ; cela ne prouve pas que $H_0$ est vraie'}.`, null);
    },

    'pass-08'(t, id) {
      const a = R(15, 60), b = R(100, 300), c = R(5, 30), d = R(150, 400);
      const rr = (a / (a + b)) / (c / (c + d)), or = (a * d) / (b * c);
      const askOR = t >= 3 ? Math.random() < 0.6 : Math.random() < 0.3;
      const ans = askOR ? or : rr;
      return Q(id, t, askOR ? 'Odds ratio' : 'Risque relatif', 'Calculer un risque relatif ou un odds ratio',
        `Dans une étude, on relève :${tabTex(a, b, c, d, 'Exposés', 'Non exposés', 'Malades', 'Non malades')}Calculer ${askOR ? 'l\'odds ratio $OR$' : 'le risque relatif $RR$'} de la maladie chez les exposés, arrondi au centième.`,
        `$${D(ans, 2)}$`, [`$${D(askOR ? rr : or, 2)}$`, `$${D(1 / ans, 2)}$`, `$${D((a / b) / (c / (c + d)), 2)}$`],
        askOR ? '$OR = \\dfrac{a\\,d}{b\\,c}$ (rapport des cotes).' : '$RR = \\dfrac{\\text{risque chez les exposés}}{\\text{risque chez les non-exposés}}$.',
        askOR ? `$OR = \\dfrac{${a} \\times ${d}}{${b} \\times ${c}}$.` : `Risque chez les exposés : $\\dfrac{${a}}{${a + b}}$ ; chez les non-exposés : $\\dfrac{${c}}{${c + d}}$.`,
        askOR ? `$OR = \\dfrac{${a * d}}{${b * c}} \\approx ${D(or, 2)}$.` : `$RR = \\dfrac{${a}/${a + b}}{${c}/${c + d}} \\approx ${D(rr, 2)}$.`, inp(ans, 2));
    },

    'pass-09'(t, id) {
      const k = t <= 2 ? 0 : R(0, 1);
      if (k === 0) {
        const r1 = pick([1, 2, 3, 4, 5]), r2 = pick([0.5, 1, 1.5, 2, 2.5]);
        const quot = Math.random() < 0.5;
        const ans = rd(r1 + r2);
        return Q(id, t, 'Incertitude relative', 'Propager des incertitudes relatives (produit, quotient)',
          `Une grandeur est calculée par $G = ${quot ? '\\dfrac{a}{b}' : 'a \\times b'}$. Les incertitudes relatives valent $${D(r1)}\\,\\%$ sur $a$ et $${D(r2)}\\,\\%$ sur $b$. Quelle est, au premier ordre, l'incertitude relative sur $G$, en $\\%$ ?`,
          `$${D(ans)}$`, [`$${D(Math.abs(r1 - r2)) === D(ans) ? D(ans + 1) : D(Math.abs(r1 - r2))}$`, `$${D(r1 * r2)}$`, `$${D(Math.sqrt(r1 * r1 + r2 * r2), 2)}$`],
          'Différentielle logarithmique : $\\dfrac{\\mathrm{d}G}{G} = \\dfrac{\\mathrm{d}a}{a} ' + (quot ? '-' : '+') + ' \\dfrac{\\mathrm{d}b}{b}$.',
          'Au premier ordre, les incertitudes relatives s\'additionnent, pour un produit comme pour un quotient.',
          `$\\dfrac{\\Delta G}{G} = ${D(r1)}\\,\\% + ${D(r2)}\\,\\% = ${D(ans)}\\,\\%$.`, inp(ans), 'Saisir le pourcentage sans le symbole %.');
      }
      // IMC = m / h^2
      const rm = pick([0.5, 1, 2]), rh = pick([0.5, 1, 1.5]);
      const ans = rd(rm + 2 * rh);
      return Q(id, t, 'Incertitude sur l\'IMC', 'Propager des incertitudes relatives avec une puissance',
        `L'indice de masse corporelle vaut $\\mathrm{IMC} = \\dfrac{m}{h^2}$. La masse est mesurée à $${D(rm)}\\,\\%$ près et la taille à $${D(rh)}\\,\\%$ près. Quelle est, au premier ordre, l'incertitude relative sur l'IMC, en $\\%$ ?`,
        `$${D(ans)}$`, [`$${D(rm + rh)}$`, `$${D(rm + rh * rh)}$`, `$${D(Math.abs(rm - 2 * rh)) === D(ans) ? D(ans + 0.5) : D(Math.abs(rm - 2 * rh))}$`],
        '$\\ln(\\mathrm{IMC}) = \\ln m - 2\\ln h$.',
        'L\'exposant $2$ multiplie l\'incertitude relative sur $h$.',
        `$\\dfrac{\\Delta \\mathrm{IMC}}{\\mathrm{IMC}} = ${D(rm)}\\,\\% + 2 \\times ${D(rh)}\\,\\% = ${D(ans)}\\,\\%$.`, inp(ans), 'Saisir le pourcentage sans le symbole %.');
    },

    'pass-10'(t, id) {
      const k = t === 1 ? 0 : t === 2 ? R(0, 1) : R(1, 2);
      if (k === 0) {
        const T = pick([2, 3, 4, 6, 8]), n = R(1, 4), C0 = pick([16, 32, 40, 64, 80, 160]);
        const C = rd(C0 / 2 ** n);
        return Q(id, t, 'Décroissance exponentielle', 'Utiliser la solution de $C\' = -kC$',
          `Après une injection intraveineuse, la concentration plasmatique vérifie $C'(t) = -k\\,C(t)$, avec $C(0) = ${C0}\\ \\mathrm{mg/L}$ et une demi-vie de $${T}$ h. Que vaut $C(${n * T})$, en $\\mathrm{mg/L}$ ?`,
          `$${D(C)}$`, [`$${D(C0 / (2 * n))}$`, `$${D(C * 2)}$`, `$${D(C0 - n * T)}$`],
          'La solution est $C(t) = C_0\\,e^{-kt}$ : la concentration est divisée par $2$ à chaque demi-vie.',
          `$${n * T}$ h $= ${n}$ demi-vies.`,
          `$C(${n * T}) = \\dfrac{${C0}}{2^{${n}}} = ${D(C)}\\ \\mathrm{mg/L}$.`, inp(C), 'Saisir le nombre seul, en mg/L.');
      }
      if (k === 1) {
        // Perfusion continue : C' = R/V - k C  -> plateau R/(kV) ; donné sous forme y' = a y + b
        const kk = pick([0.1, 0.2, 0.25, 0.5]), b = pick([2, 3, 4, 5, 10]);
        const L = rd(b / kk);
        return Q(id, t, 'Concentration d\'équilibre', 'Déterminer la solution constante de $y\' = ay + b$',
          `Lors d'une perfusion continue, la concentration (en mg/L) vérifie $C'(t) = -${D(kk)}\\,C(t) + ${b}$. Vers quelle valeur la concentration tend-elle quand $t \\to +\\infty$ ?`,
          `$${D(L)}$`, [`$${D(b * kk)}$`, `$${D(kk / b, 3)}$`, `$${D(-L)}$`],
          'La solution générale de $y\' = ay + b$ est $y = K e^{at} - \\dfrac{b}{a}$.',
          `Ici $a = -${D(kk)} < 0$, donc $K e^{at} \\to 0$ ; la limite est la solution constante.`,
          `La solution constante vérifie $0 = -${D(kk)}\\,C + ${b}$, d'où $C = \\dfrac{${b}}{${D(kk)}} = ${D(L)}\\ \\mathrm{mg/L}$, limite de toutes les solutions.`, inp(L), 'Saisir le nombre seul, en mg/L.');
      }
      const kk = pick([0.1, 0.2, 0.25, 0.3, 0.5]), p = pick([10, 20, 25, 50]);
      const tt = Math.log(100 / p) / kk;
      return Q(id, t, 'Temps d\'élimination', 'Résoudre $e^{-kt} = p$ avec le logarithme',
        `La concentration d'un médicament vérifie $C(t) = C_0\\,e^{-${D(kk)}\\,t}$ ($t$ en heures). Au bout de combien d'heures ne reste-t-il que $${p}\\,\\%$ de la concentration initiale ? Arrondir au dixième.`,
        `$${D(tt, 1)}$`, [`$${D(Math.log(p / 100) / kk + 2 * tt, 1)}$`, `$${D((100 - p) / 100 / kk, 1)}$`, `$${D(Math.log(100 / p) * kk, 1)}$`],
        `On résout $e^{-${D(kk)}\\,t} = ${D(p / 100)}$.`,
        `$-${D(kk)}\\,t = \\ln(${D(p / 100)})$.`,
        `$t = \\dfrac{\\ln(${100 / p})}{${D(kk)}} \\approx ${D(tt, 1)}$ h.`, inp(tt, 1));
    }
  });

  // pass-02 : Bayes en contexte (réutilise sante-08, palier relevé)
  DEDICATED['pass-02'] = function (t, id) {
    const q = DEDICATED['sante-08'](t <= 1 ? 2 : 3, id);
    if (q) { q.tier = t; q.chapterId = id; }
    return q;
  };

  /** Générateurs du lycée par chapitre */
  const SOURCES = {
    'sante-01': [], 'sante-02': [], 'sante-03': ['2N5'], 'sante-04': ['1A4'], 'sante-05': ['TA5'],
    'sante-06': ['1A3', 'TA8'], 'sante-07': ['1A6'], 'sante-08': ['1S1', '2S2'], 'sante-09': ['TS1', '1S2'], 'sante-10': ['2S1'],
    'pass-01': ['2S1'], 'pass-02': ['TS3', '1S1'], 'pass-03': [], 'pass-04': ['TS1'], 'pass-05': [],
    'pass-06': [], 'pass-07': [], 'pass-08': [], 'pass-09': ['TA8', 'TA5'], 'pass-10': ['TA6']
  };

  /** Probabilité de servir un exercice de la banque statique, par palier */
  const STATIC_SHARE = { 1: 0.15, 2: 0.2, 3: 0.4, 4: 0.55 };

  const api = {
    SANTE_SOURCES: SOURCES,

    _santeGenerate(chapterId, tier) {
      const t = Math.min(4, Math.max(1, parseInt(tier, 10) || 1));
      if (Math.random() < (STATIC_SHARE[t] || 0)) return null;
      const lycee = (SOURCES[chapterId] || []).filter(() => window.MathsAdvancedGenerators);
      const ded = DEDICATED[chapterId];
      // Générateur dédié en priorité (2 chances sur 3 s'il existe aussi une source lycée)
      const useDed = ded && (!lycee.length || Math.random() < 0.67);
      let q = null;
      try {
        if (useDed) q = ded(t, chapterId);
        else if (lycee.length) {
          const src = pick(lycee);
          const srcTier = t >= 3 && Math.random() < 0.5 ? Math.min(4, t + 1) : t;
          q = window.MathsAdvancedGenerators.generate(src, srcTier);
        }
      } catch (e) {
        q = null;
      }
      if (!q || !q.statement) return null;
      q.chapterId = chapterId;
      q.tier = t;
      q.id = `${chapterId}-${useDed ? 'ded' : 'lyc'}-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
      return q;
    }
  };

  Object.keys(SOURCES).forEach((id) => {
    api['generate' + id] = function (tier) {
      return this._santeGenerate(id, tier);
    };
  });

  Object.assign(window.MathsGenerators, api);
})();
