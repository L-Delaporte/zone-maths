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
  const rd = (x, d = 6) => U.round(x, d);
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
        // Exposants non nuls ; on écarte n = 0 (distracteur -n confondu) et a = b = 2 (a·b - c = n)
        let a, b, c, n;
        do {
          a = R(-9, 9); b = R(-9, 9); c = R(-6, 6); n = a + b - c;
        } while (a === 0 || b === 0 || c === 0 || n === 0 || a * b === a + b);
        const par = (x) => (x < 0 ? `(${x})` : `${x}`);
        return Q(id, t, 'Puissances de 10', 'Calculer avec les puissances de 10',
          `Le nombre $\\dfrac{10^{${a}} \\times 10^{${b}}}{10^{${c}}}$ s'écrit $10^{n}$. Que vaut $n$ ?`,
          `$${n}$`, [`$${a + b + c}$`, `$${a * b - c}$`, `$${-n}$`],
          '$10^{a} \\times 10^{b} = 10^{a+b}$ et $\\dfrac{10^{a}}{10^{c}} = 10^{a-c}$.',
          'Additionner les exposants du numérateur, puis soustraire celui du dénominateur.',
          `$n = ${a} + ${par(b)} - ${par(c)} = ${n}$.`, String(n));
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
      // On écarte les exposants 0 et 1 (écritures « × 10^0 », « × 10^1 » maladroites)
      let p, q2;
      do { p = R(-8, -3); q2 = R(2, 9); } while ([-1, 0, 1, 2].includes(p + q2));
      let m = a * b, e = p + q2;
      if (m >= 10) { m = rd(m / 10); e += 1; }
      return Q(id, t, 'Notation scientifique', 'Écrire un résultat en notation scientifique',
        `Un échantillon contient $${a} \\times 10^{${q2}}$ cellules, chacune de masse $${D(b)} \\times 10^{${p}}\\ \\mathrm{g}$. La masse totale s'écrit $m \\times 10^{e}\\ \\mathrm{g}$ en notation scientifique. Que vaut l'exposant $e$ ?`,
        `$${e}$`, [`$${p + q2}$` === `$${e}$` ? `$${e + 1}$` : `$${p + q2}$`, `$${p * q2}$`, `$${e - 2}$`],
        'Multiplier les nombres entre eux et les puissances de 10 entre elles.',
        `$${a} \\times ${D(b)} = ${D(a * b)}$ : en notation scientifique, la mantisse doit être comprise entre $1$ et $10$.`,
        `$${a} \\times ${D(b)} \\times 10^{${q2} + (${p})} = ${D(a * b)} \\times 10^{${p + q2}}${a * b >= 10 ? ` = ${D(m)} \\times 10^{${e}}` : ''}\\ \\mathrm{g}$, donc $e = ${e}$.`, String(e));
    },

    'sante-02'(t, id) {
      const k = t === 1 ? pick([0, 1, 4]) : t === 2 ? pick([0, 1, 2, 4]) : R(1, 3);
      if (k === 4) {
        // Nombre de comprimés (sécables) : dose prescrite / dosage d'un comprimé
        let dk, m, c, dose, n;
        do {
          dk = pick([5, 10, 15, 20, 25]); m = pick([10, 12, 16, 20, 24, 25, 30, 40, 50, 60]);
          c = pick([50, 100, 125, 200, 250, 500]); dose = dk * m; n = dose / c;
        } while (!Number.isInteger(2 * n) || n < 1 || n > 4);
        return Q(id, t, 'Nombre de comprimés', 'Calculer un nombre de comprimés à partir d\'une posologie en mg/kg',
          `Un patient de $${m}\\ \\mathrm{kg}$ doit recevoir $${dk}\\ \\mathrm{mg/kg}$ de principe actif par prise. Les comprimés, sécables, sont dosés à $${c}\\ \\mathrm{mg}$. Combien de comprimés faut-il lui donner par prise ?`,
          `$${D(n)}$`, distinct(n, [rd(c / dose, 2), dose / 100, n + 1, 2 * n, n / 2]).slice(0, 3).map((v) => `$${D(v)}$`),
          'Calculer d\'abord la dose à administrer, puis la diviser par le dosage d\'un comprimé.',
          `Dose à administrer : $${dk} \\times ${m} = ${dose}\\ \\mathrm{mg}$.`,
          `Dose $= ${dk} \\times ${m} = ${dose}\\ \\mathrm{mg}$, puis $\\dfrac{${dose}}{${c}} = ${D(n)}$ comprimé${n >= 2 ? 's' : ''}.`, inp(n), 'Saisir le nombre seul (par exemple 1,5 pour un comprimé et demi).');
      }
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
          // Distracteurs : concentration divisée par la dose (inversion), décalages d'un facteur 10 (conversion)
          `$${D(V)}$`, [`$${D(rd(c / dose, 2), 2)}$`, `$${D(V * 10)}$`, `$${D(V / 10)}$`],
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
      const k = t === 1 ? R(0, 1) : t === 2 ? R(0, 2) : R(1, 4);
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
      if (k === 4) {
        // Croissance bactérienne : plus petit entier n tel que (1 + r/100)^n >= m
        const r = pick([5, 8, 10, 12, 15, 20, 25]), m = pick([2, 3, 5, 10]), cq = rd(1 + r / 100);
        let n = 1;
        while (cq ** n < m) n++;
        const xr = Math.log(m) / Math.log(cq);
        return Q(id, t, 'Seuil de croissance bactérienne', 'Résoudre une inéquation $q^n \\geqslant m$ avec le logarithme',
          `Une population de bactéries augmente de $${r}\\,\\%$ par heure. Au bout de combien d'heures entières aura-t-elle été multipliée par $${m}$ pour la première fois ?`,
          `$${n}$`, [n - 1, n + 1, Math.round(100 * (m - 1) / r)].filter((v, i, a) => v !== n && a.indexOf(v) === i).map((v) => `$${v}$`),
          `Chaque heure, la population est multipliée par $${D(cq)}$ : on cherche le plus petit entier $n$ tel que $${D(cq)}^n \\geqslant ${m}$.`,
          `La fonction $\\ln$ est croissante : $n\\ln(${D(cq)}) \\geqslant \\ln(${m})$, avec $\\ln(${D(cq)}) > 0$.`,
          `$n \\geqslant \\dfrac{\\ln(${m})}{\\ln(${D(cq)})} \\approx ${D(xr, 2)}$, donc la population est multipliée par $${m}$ pour la première fois au bout de $${n}$ heures.`, String(n));
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
      const fam07 = t <= 2 ? pick(['doses', 'geo', 'arith']) : 'suite';
      if (fam07 === 'geo') {
        // Croissance bactérienne : suite géométrique u_n = u_0 q^n
        const [qg, N0] = pick([[2, pick([500, 1000, 2000, 3000, 5000])], [3, pick([200, 400, 500, 1000])], [1.5, pick([1600, 3200, 4800, 6400])]]);
        const ng = t === 1 ? pick([2, 3, 4]) : pick([4, 5, 6].filter((m) => qg !== 3 || m <= 5));
        const un = rd(N0 * qg ** ng);
        const hTxt = qg === 2 ? 'double' : qg === 3 ? 'triple' : `est multiplié par $1{,}5$`;
        return Q(id, t, 'Croissance bactérienne', 'Calculer un terme d\'une suite géométrique en contexte',
          `Dans une culture, le nombre de bactéries ${hTxt} toutes les heures. On note $u_n$ le nombre de bactéries au bout de $n$ heures, avec $u_0 = ${NB(N0)}$. Calculer $u_{${ng}}$.`,
          `$${NB(un)}$`, distinct(un, [rd(N0 * qg ** (ng - 1)), rd(N0 * qg ** (ng + 1)), rd(N0 * qg * ng), rd(N0 + qg * ng)]).slice(0, 3).map((v) => `$${NB(v)}$`),
          `La suite $(u_n)$ est géométrique de raison $${D(qg)}$ : $u_n = u_0 \\times ${D(qg)}^{n}$.`,
          `$u_{${ng}} = ${NB(N0)} \\times ${D(qg)}^{${ng}}$ ; calculer d'abord $${D(qg)}^{${ng}}$.`,
          `$u_{${ng}} = ${NB(N0)} \\times ${D(qg)}^{${ng}} = ${NB(N0)} \\times ${D(rd(qg ** ng), 6)} = ${NB(un)}$ bactéries.`, String(un), 'Saisir le nombre seul.');
      }
      if (fam07 === 'arith') {
        // Dose augmentée chaque semaine : suite arithmétique u_n = u_0 + n r
        const d0 = pick([5, 10, 20, 25, 50]), r = pick([2, 2.5, 5, 10]), na = t === 1 ? R(2, 6) : R(6, 12);
        const un = rd(d0 + na * r);
        return Q(id, t, 'Dose progressive', 'Calculer un terme d\'une suite arithmétique en contexte',
          `Un traitement débute à $${d0}\\ \\mathrm{mg}$ par jour, puis la dose quotidienne est augmentée de $${D(r)}\\ \\mathrm{mg}$ chaque semaine. On note $u_n$ la dose quotidienne (en mg) au bout de $n$ semaines, avec $u_0 = ${d0}$. Calculer $u_{${na}}$.`,
          `$${D(un)}$`, distinct(un, [rd(d0 + (na - 1) * r), rd(d0 + (na + 1) * r), rd(na * r), rd(d0 + r)]).slice(0, 3).map((v) => `$${D(v)}$`),
          `La suite $(u_n)$ est arithmétique de raison $${D(r)}$ : $u_n = u_0 + n\\,r$.`,
          `$u_{${na}} = ${d0} + ${na} \\times ${D(r)}$.`,
          `$u_{${na}} = ${d0} + ${na} \\times ${D(r)} = ${d0} + ${D(rd(na * r))} = ${D(un)}\\ \\mathrm{mg}$.`, inp(un), 'Saisir le nombre seul, en mg.');
      }
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
      const fam7 = pick(['lim', 'lim', 'epid', 'compar']);
      if (fam7 !== 'lim') return suitesSante(fam7, t, id);
      return Q(id, t, 'Quantité limite', 'Déterminer la limite d\'une suite arithmético-géométrique',
        `Un patient reçoit $${D(Dd)}\\ \\mathrm{mg}$ d'un médicament à intervalles réguliers. Entre deux prises, il reste $${D(100 * q)}\\,\\%$ de la quantité présente, si bien que la quantité juste après chaque prise vérifie $u_{n+1} = ${D(q)}\\,u_n + ${D(Dd)}$. Vers quelle valeur, en mg, la suite $(u_n)$ converge-t-elle ?`,
        `$${D(L)}$`, [`$${D(Dd / q)}$`, `$${D(Dd * (1 + q))}$`, `$${D(Dd)}$`],
        'La limite $\\ell$ vérifie $\\ell = q\\,\\ell + D$ (point fixe).',
        `Résoudre $\\ell = ${D(q)}\\,\\ell + ${D(Dd)}$, soit $${D(1 - q)}\\,\\ell = ${D(Dd)}$.`,
        `Comme $0 < ${D(q)} < 1$, la suite converge vers le point fixe $\\ell = \\dfrac{${D(Dd)}}{1 - ${D(q)}} = ${D(L)}\\ \\mathrm{mg}$.`, inp(L), 'Saisir le nombre seul, en mg.');
    },

    'sante-08'(t, id) {
      // Progression : lecture de l'arbre et intersections (palier 1), probabilités totales (palier 2), Bayes (paliers 3-4, VPN au palier 4).
      const fam = t === 1 ? pick(['inter', 'branche']) : t === 2 ? pick(['tot', 'tot', 'totneg', 'inter']) : t === 3 ? pick(['vpp', 'vpp', 'tot', 'totneg', 'vpn']) : pick(['vpp', 'vpn']);
      let p, se, sp;
      // VPN : on écarte les combinaisons où elle s'arrondirait à 1,000 au millième (réponse dégénérée)
      do {
        p = pick([0.01, 0.02, 0.05, 0.1, 0.2]); se = pick([0.9, 0.95, 0.98, 0.99]); sp = pick([0.9, 0.95, 0.97, 0.99]);
      } while (fam === 'vpn' && (1 - p) * sp / (p * (1 - se) + (1 - p) * sp) >= 0.9985);
      const pt = p * se + (1 - p) * (1 - sp);
      const intro = `Une maladie touche $${D(100 * p)}\\,\\%$ d'une population. Un test est positif chez $${D(100 * se)}\\,\\%$ des malades et négatif chez $${D(100 * sp)}\\,\\%$ des non-malades.`;
      /** Distracteurs distincts à l'affichage, différents de la réponse, strictement compris entre 0 et 1 */
      const opts6 = (ans, cands) => {
        const out = [];
        cands.forEach((v) => { const str = `$${D(v, 6)}$`; if (v > 0 && v < 1 && str !== `$${D(ans, 6)}$` && !out.includes(str)) out.push(str); });
        return out.slice(0, 3);
      };
      if (fam === 'branche') {
        // Lecture de l'arbre pondéré : probabilité portée par une branche (conditionnelle ou de premier niveau)
        const kind = pick(['fn', 'fp', 'nm']);
        const v = kind === 'fn' ? rd(1 - se) : kind === 'fp' ? rd(1 - sp) : rd(1 - p);
        const lab = kind === 'fn' ? 'P_M(\\overline{T})' : kind === 'fp' ? 'P_{\\overline{M}}(T)' : 'P(\\overline{M})';
        const q = kind === 'fn' ? 'qu\'une personne malade ait un test négatif' : kind === 'fp' ? 'qu\'une personne non malade ait un test positif' : 'qu\'une personne choisie au hasard ne soit pas malade';
        return Q(id, t, kind === 'nm' ? 'Lire l\'arbre : personne non malade' : kind === 'fn' ? 'Lire l\'arbre : faux négatif chez un malade' : 'Lire l\'arbre : faux positif chez un non-malade', 'Lire et compléter un arbre pondéré',
          `${intro} On représente la situation par un arbre pondéré, avec $M$ : « la personne est malade » et $T$ : « le test est positif ». Quelle est la probabilité ${q} ?`,
          `$${D(v, 6)}$`, kind === 'fn' ? opts6(v, [se, p * (1 - se), 1 - sp, sp, (1 - p) * (1 - se), p * se]) : kind === 'fp' ? opts6(v, [sp, (1 - p) * (1 - sp), 1 - se, se, p * (1 - sp), (1 - p) * sp]) : opts6(v, [p, (1 - p) * sp, sp, se, (1 - p) * (1 - sp), p * se]),
          'Sur un arbre pondéré, les probabilités des branches issues d\'un même nœud ont pour somme $1$.',
          kind === 'nm' ? `La première branche porte $P(M) = ${D(p)}$.` : kind === 'fn' ? `Après le nœud $M$, la branche $T$ porte $P_M(T) = ${D(se)}$.` : `Après le nœud $\\overline{M}$, la branche $\\overline{T}$ porte $P_{\\overline{M}}(\\overline{T}) = ${D(sp)}$.`,
          kind === 'nm' ? `$P(\\overline{M}) = 1 - ${D(p)} = ${D(v, 6)}$.`
            : kind === 'fn' ? `$${lab} = 1 - P_M(T) = 1 - ${D(se)} = ${D(v, 6)}$ : c'est une probabilité conditionnelle (sachant que la personne est malade), à ne pas confondre avec $P(M \\cap \\overline{T})$.`
              : `$${lab} = 1 - P_{\\overline{M}}(\\overline{T}) = 1 - ${D(sp)} = ${D(v, 6)}$ : c'est une probabilité conditionnelle (sachant que la personne n'est pas malade), à ne pas confondre avec $P(\\overline{M} \\cap T)$.`,
          inp(v, 6));
      }
      if (fam === 'inter') {
        const sick = Math.random() < 0.5, v = sick ? p * se : (1 - p) * (1 - sp);
        return Q(id, t, sick ? 'Malade et test positif' : 'Non malade et test positif', 'Calculer la probabilité d\'une intersection sur un arbre',
          `${intro} On choisit une personne au hasard. Quelle est la probabilité qu'elle soit ${sick ? 'malade' : 'non malade'} et que son test soit positif ? Donner la valeur exacte.`,
          // Distracteurs : probabilité conditionnelle seule, chemin voisin, branches mélangées
          `$${D(v, 6)}$`, sick ? opts6(v, [se, p * (1 - se), p * (1 - sp), (1 - p) * se, p]) : opts6(v, [1 - sp, (1 - p) * sp, p * (1 - sp), (1 - p) * (1 - se), 1 - p]),
          'Sur l\'arbre pondéré, la probabilité d\'un chemin est le produit des probabilités de ses branches.',
          sick ? `Le chemin passe par $M$ (probabilité $${D(p)}$), puis par $T$ sachant $M$ (probabilité $${D(se)}$).`
            : `Le chemin passe par $\\overline{M}$ (probabilité $${D(rd(1 - p))}$), puis par $T$ sachant $\\overline{M}$ (probabilité $1 - ${D(sp)} = ${D(rd(1 - sp))}$).`,
          sick ? `$P(M \\cap T) = ${D(p)} \\times ${D(se)} = ${D(v, 6)}$.` : `$P(\\overline{M} \\cap T) = ${D(rd(1 - p))} \\times ${D(rd(1 - sp))} = ${D(v, 6)}$ : ce sont les faux positifs.`,
          inp(v, 6));
      }
      if (fam === 'totneg') {
        const pn = p * (1 - se) + (1 - p) * sp;
        return Q(id, t, 'Probabilité d\'un test négatif', 'Utiliser la formule des probabilités totales',
          `${intro} On teste une personne au hasard. Quelle est la probabilité que le test soit négatif ? Donner la valeur exacte.`,
          // Distracteurs : un seul chemin, Sp seule, probabilité d'un test positif, chemin des faux négatifs seul
          `$${D(pn, 6)}$`, opts6(pn, [(1 - p) * sp, sp, 1 - pn, p * (1 - se), p * se + (1 - p) * (1 - se)]),
          'Distinguer deux cas : la personne est malade ou ne l\'est pas (arbre pondéré).',
          `$P(\\overline{T}) = P(M)\\,P_M(\\overline{T}) + P(\\overline{M})\\,P_{\\overline{M}}(\\overline{T})$, avec $P_M(\\overline{T}) = 1 - ${D(se)}$.`,
          `$P(\\overline{T}) = ${D(p)} \\times ${D(rd(1 - se))} + ${D(rd(1 - p))} \\times ${D(sp)} = ${D(pn, 6)}$ (on peut vérifier que $P(T) + P(\\overline{T}) = 1$).`, inp(pn, 6));
      }
      if (fam === 'vpn') {
        const pn = p * (1 - se) + (1 - p) * sp, vpn = (1 - p) * sp / pn;
        const F3 = (x) => rd(x, 3).toFixed(3).replace('.', '{,}');
        return Q(id, t, 'Valeur prédictive négative', 'Inverser un conditionnement (formule de Bayes)',
          `${intro} Le test d'une personne est négatif. Quelle est la probabilité qu'elle ne soit pas malade ? Arrondir au millième.`,
          // Distracteurs : P_M̄(T̄) au lieu de P_T̄(M̄), intersection, complément, P(T̄) ; filtrés à l'affichage (ni 0,000 ni 1,000, distincts)
          `$${F3(vpn)}$`, optsMil(vpn, [sp, (1 - p) * sp, 1 - vpn, pn], 0.002),
          'On cherche $P_{\\overline{T}}(\\overline{M})$, et non $P_{\\overline{M}}(\\overline{T})$.',
          `$P_{\\overline{T}}(\\overline{M}) = \\dfrac{P(\\overline{M} \\cap \\overline{T})}{P(\\overline{T})}$, avec $P(\\overline{T}) = ${D(p)} \\times ${D(rd(1 - se))} + ${D(rd(1 - p))} \\times ${D(sp)}$.`,
          `$P(\\overline{M} \\cap \\overline{T}) = ${D((1 - p) * sp, 6)}$ et $P(\\overline{T}) = ${D(pn, 6)}$, donc $P_{\\overline{T}}(\\overline{M}) \\approx ${F3(vpn)}$.${p <= 0.05 ? ' Quand la maladie est rare, un test négatif est très rassurant.' : ''}`, inp(vpn, 3));
      }
      if (fam === 'tot') {
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
        // Distracteurs : P_M(T) au lieu de P_T(M), intersection, complément, oubli de la prévalence (VPP à prévalence 1/2), écart de 0,1
        `$${D(vpp, 2)}$`, [se, p * se, 1 - vpp, se / (se + 1 - sp), vpp > 0.5 ? vpp - 0.1 : vpp + 0.1].map((v) => `$${D(v, 2)}$`)
          .filter((str, i, arr) => str !== `$${D(vpp, 2)}$` && str !== '$0$' && str !== '$1$' && arr.indexOf(str) === i).slice(0, 3),
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
      // P1 : médiane, moyenne, moyenne de deux groupes ; P2 : moyenne, deux groupes, changement d'unité
      const fam10 = t === 1 ? pick(['med', 'moy', 'grp']) : t === 2 ? pick(['moy', 'grp', 'aff']) : (Math.random() < 0.4 ? 'med' : 'moy');
      if (fam10 === 'grp') return groupMean(t, id);
      if (fam10 === 'aff') return tempAffine(t, id);
      if (fam10 === 'med') {
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

  /** Statistique descriptive (sante-10, pass-01) : changement d'unité °C → °F, transformation affine */
  function tempAffine(t, id) {
    const mC = rd(36 + R(5, 25) / 10, 1), s = pick([0.2, 0.3, 0.4, 0.5, 0.6, 0.8]);
    const askSd = Math.random() < 0.5;
    const mF = rd(1.8 * mC + 32, 2), sF = rd(1.8 * s, 2);
    const intro = `La température corporelle de patients d'un service a pour moyenne $${D(mC)}$ °C et pour écart type $${D(s)}$ °C. On convertit chaque température en degrés Fahrenheit par $F = 1{,}8\\,C + 32$.`;
    if (askSd) {
      return Q(id, t, 'Changement d\'unité : écart type', 'Connaître l\'effet d\'une transformation affine sur l\'écart type',
        `${intro} Quel est l'écart type des températures en °F ?`,
        `$${D(sF)}$`, distinct(sF, [rd(sF + 32, 2), s, rd(3.24 * s, 3)]).map((v) => `$${D(v)}$`),
        'Si $Y = aX + b$, alors $\\bar y = a\\,\\bar x + b$ et $s_Y = |a|\\,s_X$.',
        'Le décalage $+32$ déplace toutes les valeurs de la même quantité : il ne change pas la dispersion. Seul le coefficient $1{,}8$ agit.',
        `$s_F = 1{,}8 \\times ${D(s)} = ${D(sF)}$ °F : le $+32$ n'intervient pas dans l'écart type.`, inp(sF), 'Saisir le nombre seul, en °F.');
    }
    return Q(id, t, 'Changement d\'unité : moyenne', 'Connaître l\'effet d\'une transformation affine sur la moyenne',
      `${intro} Quelle est la température moyenne en °F ?`,
      `$${D(mF)}$`, distinct(mF, [rd(1.8 * mC, 2), rd(mC + 32, 2), rd(1.8 * (mC + 32), 2)]).map((v) => `$${D(v)}$`),
      'Si $Y = aX + b$, alors $\\bar y = a\\,\\bar x + b$ : on applique la même transformation à la moyenne.',
      `Calculer d'abord $1{,}8 \\times ${D(mC)} = ${D(rd(1.8 * mC, 2))}$.`,
      `$\\bar F = 1{,}8 \\times ${D(mC)} + 32 = ${D(rd(1.8 * mC, 2))} + 32 = ${D(mF)}$ °F.`, inp(mF), 'Saisir le nombre seul, en °F.');
  }

  /** Moyenne de deux groupes, pondérée par les effectifs (résultat décimal exact au dixième) */
  function groupMean(t, id) {
    let n1, n2, m1, m2, S, N, essai = 0;
    const [lab, unit, base] = pick([['la masse', 'kg', 70], ['la fréquence cardiaque', 'battements par minute', 72], ['la glycémie à jeun', 'mg/dL', 95]]);
    do {
      n1 = pick([10, 12, 15, 20, 25, 30, 40]); n2 = pick([10, 12, 15, 20, 25, 30, 40]);
      m1 = base + R(-12, 12); m2 = base + R(-12, 12);
      S = n1 * m1 + n2 * m2; N = n1 + n2; essai++;
    } while ((n1 === n2 || Math.abs(m1 - m2) < 4 || !Number.isInteger(rd(10 * S / N, 6))) && essai < 300);
    const ans = rd(S / N, 1);
    return Q(id, t, 'Moyenne de deux groupes', 'Calculer une moyenne pondérée par les effectifs',
      `Dans un premier service, ${lab} moyenne des $${n1}$ patients est de $${m1}$ ${unit} ; dans un second service, ${lab} moyenne des $${n2}$ patients est de $${m2}$ ${unit}. Quelle est ${lab} moyenne de l'ensemble des $${N}$ patients ?`,
      `$${D(ans)}$`, distinct(ans, [rd((m1 + m2) / 2, 1), rd((n2 * m1 + n1 * m2) / N, 1), rd(S / 2, 1)]).map((v) => `$${D(v)}$`),
      'La moyenne de l\'ensemble est la somme de toutes les valeurs divisée par l\'effectif total : on pondère chaque moyenne par l\'effectif de son groupe.',
      `Somme des valeurs : $${n1} \\times ${m1} + ${n2} \\times ${m2} = ${NB(S)}$.`,
      `$\\bar x = \\dfrac{${n1} \\times ${m1} + ${n2} \\times ${m2}}{${N}} = \\dfrac{${NB(S)}}{${N}} = ${D(ans)}$ ${unit}. Attention : la moyenne des deux moyennes, $${D(rd((m1 + m2) / 2, 1))}$, ne tient pas compte des effectifs.`, inp(ans, 1), `Saisir le nombre seul, en ${unit}.`);
  }

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
      const fam1 = t <= 2 ? pick(['moy', 'med', 'pond', 'grp', 'aff']) : 'var';
      if (fam1 === 'aff') return tempAffine(t, id);
      if (fam1 === 'grp') return groupMean(t, id);
      if (fam1 === 'med') {
        const nm = pick([6, 7, 8]);
        const ys = Array.from({ length: nm }, () => R(2, 15));
        const so = ys.slice().sort((x, y) => x - y);
        const med = nm % 2 ? so[(nm - 1) / 2] : (so[nm / 2 - 1] + so[nm / 2]) / 2;
        const moy = ys.reduce((s2, x) => s2 + x, 0) / nm;
        return Q(id, t, 'Médiane', 'Déterminer la médiane d\'une série',
          `Voici la durée d'hospitalisation (en jours) de ${nm} patients : $${ys.join(' ; ')}$. Quelle est la durée médiane ?`,
          `$${D(med)}$`, distinct(med, [rd(moy, 1), ys[Math.floor(nm / 2)], (so[0] + so[nm - 1]) / 2, so[Math.floor(nm / 2)] + 1]).slice(0, 3).map((v) => `$${D(v)}$`),
          'Ranger d\'abord les valeurs dans l\'ordre croissant.',
          nm % 2 ? `La série compte ${nm} valeurs : la médiane est la ${(nm + 1) / 2}e valeur de la série ordonnée.` : `La série compte ${nm} valeurs (nombre pair) : la médiane est la moyenne des ${nm / 2}e et ${nm / 2 + 1}e valeurs de la série ordonnée.`,
          `Série ordonnée : $${so.join(' ; ')}$. ${nm % 2 ? `La médiane est la ${(nm + 1) / 2}e valeur : $${med}$ jours.` : `La médiane est $\\dfrac{${so[nm / 2 - 1]} + ${so[nm / 2]}}{2} = ${D(med)}$ jours.`}`, inp(med));
      }
      if (fam1 === 'pond') {
        // Tableau d'effectifs : moyenne pondérée décimale exacte au dixième
        let vals, effs, Np, Sp, essai = 0;
        do {
          const v0 = R(1, 3);
          vals = [v0, v0 + R(1, 2), v0 + R(3, 4), v0 + R(5, 8)];
          effs = vals.map(() => R(2, 12));
          Np = effs.reduce((s2, x) => s2 + x, 0); Sp = vals.reduce((s2, v, i) => s2 + v * effs[i], 0); essai++;
        } while (!Number.isInteger(rd(10 * Sp / Np, 6)) && essai < 300);
        const ans = rd(Sp / Np, 1);
        return Q(id, t, 'Moyenne pondérée', 'Calculer une moyenne à partir d\'un tableau d\'effectifs',
          `Le tableau donne la durée d'hospitalisation (en jours) des patients d'un service : $$\\begin{array}{c|cccc} \\text{Durée (jours)} & ${vals.join(' & ')} \\\\ \\hline \\text{Effectif} & ${effs.join(' & ')} \\end{array}$$ Calculer la durée moyenne d'hospitalisation, arrondie au dixième si nécessaire.`,
          `$${D(ans)}$`, distinct(ans, [rd(vals.reduce((s2, v) => s2 + v, 0) / 4, 2), rd(Sp / 4, 1), rd(Np / 4, 2)]).map((v) => `$${D(v)}$`),
          'Chaque durée compte autant de fois que son effectif : $\\bar x = \\dfrac{\\sum n_i x_i}{\\sum n_i}$.',
          `Effectif total : $${Np}$ ; somme des produits $n_i x_i$ : $${vals.map((v, i) => `${effs[i]} \\times ${v}`).join(' + ')} = ${Sp}$.`,
          `$\\bar x = \\dfrac{${Sp}}{${Np}} = ${D(ans)}$ jours.`, inp(ans, 1));
      }
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
      // Paliers 3-4 : rapport de vraisemblance et valeurs prédictives à une autre prévalence (théorème de Bayes).
      const fam = t === 1 ? pick(['tab', 'count', 'prev']) : t === 2 ? pick(['tab', 'tab', 'count', 'prev'])
        : t === 3 ? pick(['tab', 'lr', 'bayes']) : pick(['tab', 'lr', 'lr', 'bayes', 'bayes', 'bayes']);
      const F3 = (x) => rd(x, 3).toFixed(3).replace('.', '{,}');
      const F2 = (x) => rd(x, 2).toFixed(2).replace('.', '{,}');
      /** Distracteurs distincts à l'affichage, différents de la réponse et compris entre 0 et 1 */
      // écart d'au moins 0,005 avec la réponse : deux options ne doivent pas se départager sur le dernier chiffre arrondi
      const opts3 = (ans, cands) => optsMil(ans, cands, 0.005);
      if (fam === 'count') {
        const N = pick([200, 300, 400, 500, 800, 1000, 1200]), sick = Math.random() < 0.5;
        const q = sick ? pick([0.8, 0.85, 0.88, 0.9, 0.92, 0.95]) : pick([0.9, 0.92, 0.95, 0.96, 0.98, 0.99]);
        const ans = Math.round(N * (1 - q));
        return Q(id, t, sick ? 'Faux négatifs attendus' : 'Faux positifs attendus', 'Exploiter la sensibilité ou la spécificité d\'un test',
          `Un test a une ${sick ? 'sensibilité' : 'spécificité'} de $${D(q)}$. On l'applique à $${NB(N)}$ personnes ${sick ? 'atteintes de la maladie' : 'indemnes de la maladie'}. Combien de ${sick ? 'faux négatifs' : 'faux positifs'} peut-on attendre ?`,
          // Distracteurs : effectif complémentaire (vrais positifs ou vrais négatifs), moitié, produit q(1 - q), décalage d'un facteur 10
          `$${NB(ans)}$`, distinct(ans, [Math.round(N * q), Math.round(N * (1 - q) / 2), Math.round(N * q * (1 - q)), Math.round(N * (1 - q) * 10), 2 * ans]).slice(0, 3).map((v) => `$${NB(v)}$`),
          sick ? 'La sensibilité est la proportion de tests positifs chez les malades.' : 'La spécificité est la proportion de tests négatifs chez les non-malades.',
          sick ? `Parmi les malades, la proportion de tests négatifs est $1 - Se = ${D(rd(1 - q))}$.` : `Parmi les non-malades, la proportion de tests positifs est $1 - Sp = ${D(rd(1 - q))}$.`,
          `$${NB(N)} \\times ${D(rd(1 - q))} = ${NB(ans)}$ ${sick ? 'faux négatifs' : 'faux positifs'} attendus.`, String(ans));
      }
      if (fam === 'prev') {
        const tb = table2x2(), tot = tb.VP + tb.FN + tb.FP + tb.VN, pv = (tb.VP + tb.FN) / tot;
        return Q(id, t, 'Prévalence dans l\'échantillon', 'Lire un tableau de contingence',
          `On a évalué un test diagnostique sur des patients dont le statut est connu :${tabTex(tb.VP, tb.FP, tb.FN, tb.VN, 'Test +', 'Test -', 'Malades', 'Non malades')}Calculer la proportion de malades dans cet échantillon, arrondie au millième.`,
          `$${F3(pv)}$`, opts3(pv, [(tb.VP + tb.FP) / tot, tb.VP / tot, (tb.VP + tb.FN) / (tb.FP + tb.VN), 1 - pv, (tb.VP + tb.FN) / (tb.VP + tb.FN + tb.FP)]),
          'La prévalence dans l\'échantillon est le nombre de malades divisé par l\'effectif total.',
          `Les malades forment la colonne « Malades » : $${tb.VP} + ${tb.FN} = ${tb.VP + tb.FN}$ sur $${tot}$ patients.`,
          `$\\dfrac{${tb.VP + tb.FN}}{${tot}} \\approx ${F3(pv)}$. Attention : $\\dfrac{VP + FP}{N}$ est la proportion de tests positifs, pas la prévalence.`, inp(pv, 3));
      }
      if (fam === 'lr') {
        const se = pick([0.8, 0.85, 0.9, 0.95]), sp = pick([0.8, 0.9, 0.95, 0.98]);
        const pos = Math.random() < 0.6;
        const lr = pos ? se / (1 - sp) : (1 - se) / sp;
        return Q(id, t, 'Rapport de vraisemblance', 'Calculer un rapport de vraisemblance',
          `Un test diagnostique a une sensibilité de $${D(se)}$ et une spécificité de $${D(sp)}$. Calculer son rapport de vraisemblance ${pos ? 'positif $RV^{+}$' : 'négatif $RV^{-}$'}, arrondi au centième.`,
          `$${F2(lr)}$`, (pos ? [se / sp, (1 - sp) / se, (1 - se) / sp, sp / (1 - se), se * (1 - sp)] : [se / (1 - sp), sp / (1 - se), (1 - sp) / (1 - se), (1 - se) * sp, sp / se])
            .map((v) => `$${F2(v)}$`).filter((str, i, arr) => str !== `$${F2(lr)}$` && arr.indexOf(str) === i).slice(0, 3),
          pos ? '$RV^{+} = \\dfrac{P(T^{+} \\mid M)}{P(T^{+} \\mid \\overline{M})}$ : probabilité d\'un test positif chez un malade, divisée par celle chez un non-malade.'
            : '$RV^{-} = \\dfrac{P(T^{-} \\mid M)}{P(T^{-} \\mid \\overline{M})}$ : probabilité d\'un test négatif chez un malade, divisée par celle chez un non-malade.',
          pos ? `Chez un non-malade, le test est positif avec la probabilité $1 - Sp = ${D(rd(1 - sp))}$.` : `Chez un malade, le test est négatif avec la probabilité $1 - Se = ${D(rd(1 - se))}$.`,
          pos ? `$RV^{+} = \\dfrac{Se}{1 - Sp} = \\dfrac{${D(se)}}{${D(rd(1 - sp))}} ${Math.abs(lr - rd(lr, 2)) < 1e-9 ? '=' : '\\approx'} ${F2(lr)}$ : un test positif est d'autant plus informatif que $RV^{+}$ est grand.`
            : `$RV^{-} = \\dfrac{1 - Se}{Sp} = \\dfrac{${D(rd(1 - se))}}{${D(sp)}} ${Math.abs(lr - rd(lr, 2)) < 1e-9 ? '=' : '\\approx'} ${F2(lr)}$ : un test négatif est d'autant plus rassurant que $RV^{-}$ est proche de $0$.`,
          inp(lr, 2));
      }
      if (fam === 'bayes') {
        const vpp = Math.random() < 0.65;
        let se, sp, p, a, b, c, e, ans;
        // On écarte les combinaisons dont la valeur prédictive s'arrondirait à 1,000 (réponse dégénérée)
        do {
          se = pick([0.8, 0.9, 0.95, 0.99]); sp = pick([0.9, 0.95, 0.98, 0.99]); p = pick([0.01, 0.02, 0.05, 0.1, 0.2]);
          a = se * p; b = (1 - sp) * (1 - p); c = sp * (1 - p); e = (1 - se) * p;
          ans = vpp ? a / (a + b) : c / (c + e);
        } while (ans >= 0.9985);
        return Q(id, t, vpp ? 'Valeur prédictive positive et prévalence' : 'Valeur prédictive négative et prévalence', 'Calculer une valeur prédictive à partir de la prévalence',
          `Un test de dépistage a une sensibilité de $${D(se)}$ et une spécificité de $${D(sp)}$. On l'applique dans une population où la prévalence de la maladie est $${D(p)}$. Calculer la valeur prédictive ${vpp ? 'positive' : 'négative'} du test dans cette population, arrondie au millième.`,
          // Distracteurs : confusion avec Se ou Sp, probabilité de l'intersection, oubli de la prévalence au dénominateur, complément
          `$${F3(ans)}$`, vpp ? opts3(ans, [se, a, a / (a + (1 - sp)), 1 - ans, se / (se + 1 - sp)]) : opts3(ans, [sp, c, c / (c + (1 - se)), 1 - ans, sp / (sp + 1 - se)]),
          vpp ? 'Écrire $VPP = P_{T^{+}}(M) = \\dfrac{P(M \\cap T^{+})}{P(T^{+})}$ et calculer $P(T^{+})$ par la formule des probabilités totales.'
            : 'Écrire $VPN = P_{T^{-}}(\\overline{M}) = \\dfrac{P(\\overline{M} \\cap T^{-})}{P(T^{-})}$ et calculer $P(T^{-})$ par la formule des probabilités totales.',
          vpp ? `$P(M \\cap T^{+}) = ${D(se)} \\times ${D(p)} = ${D(rd(a))}$ et $P(\\overline{M} \\cap T^{+}) = ${D(rd(1 - sp))} \\times ${D(rd(1 - p))}$.`
            : `$P(\\overline{M} \\cap T^{-}) = ${D(sp)} \\times ${D(rd(1 - p))} = ${D(rd(c))}$ et $P(M \\cap T^{-}) = ${D(rd(1 - se))} \\times ${D(p)}$.`,
          vpp ? `$VPP = \\dfrac{${D(rd(a))}}{${D(rd(a))} + ${D(rd(b))}} \\approx ${F3(ans)}$.${p <= 0.05 && ans < 0.5 ? ' À faible prévalence, la $VPP$ reste modeste, même avec un bon test : une bonne partie des tests positifs sont des faux positifs.' : ''}`
            : `$VPN = \\dfrac{${D(rd(c))}}{${D(rd(c))} + ${D(rd(e))}} \\approx ${F3(ans)}$.${p <= 0.05 && ans >= 0.99 ? ' À faible prévalence, la $VPN$ est très proche de $1$.' : ''}`,
          inp(ans, 3));
      }
      const { VP, FN, FP, VN } = table2x2();
      const which = t === 1 ? pick(['Se', 'Sp']) : t === 2 ? pick(['Se', 'Sp', 'VPP']) : pick(['VPP', 'VPN']);
      const val = { Se: VP / (VP + FN), Sp: VN / (VN + FP), VPP: VP / (VP + FP), VPN: VN / (VN + FN) };
      const nm = { Se: 'la sensibilité', Sp: 'la spécificité', VPP: 'la valeur prédictive positive', VPN: 'la valeur prédictive négative' };
      const fm = { Se: `\\dfrac{VP}{VP + FN} = \\dfrac{${VP}}{${VP + FN}}`, Sp: `\\dfrac{VN}{VN + FP} = \\dfrac{${VN}}{${VN + FP}}`,
        VPP: `\\dfrac{VP}{VP + FP} = \\dfrac{${VP}}{${VP + FP}}`, VPN: `\\dfrac{VN}{VN + FN} = \\dfrac{${VN}}{${VN + FN}}` };
      // Distracteurs : les trois autres indicateurs du tableau, puis, en cas de coïncidence, le complément et la lecture sur l'effectif total
      const others = opts3(val[which], [...Object.keys(val).filter((k) => k !== which).map((k) => val[k]), 1 - val[which], VP / (VP + FN + FP + VN), VN / (VP + FN + FP + VN)]);
      const ttl = { Se: 'Sensibilité d\'un test', Sp: 'Spécificité d\'un test', VPP: 'Valeur prédictive positive sur un tableau', VPN: 'Valeur prédictive négative sur un tableau' };
      return Q(id, t, ttl[which], 'Calculer sensibilité, spécificité et valeurs prédictives',
        `On a évalué un test diagnostique sur des patients dont le statut est connu :${tabTex(VP, FP, FN, VN, 'Test +', 'Test -', 'Malades', 'Non malades')}Calculer ${nm[which]} du test, arrondie au millième.`,
        `$${F3(val[which])}$`, others,
        which === 'Se' || which === 'Sp' ? 'Sensibilité et spécificité se lisent en colonne (selon le statut réel).' : 'Les valeurs prédictives se lisent en ligne (selon le résultat du test).',
        `${nm[which].charAt(0).toUpperCase() + nm[which].slice(1)} vaut $${fm[which].split(' = ')[0]}$.`,
        `$${fm[which]} \\approx ${F3(val[which])}$.`, inp(val[which], 3));
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
      // Arrondi au millième : on garde les trois décimales (0,050 et non 0,05).
      const F3 = (x) => rd(x, 3).toFixed(3).replace('.', '{,}');
      return Q(id, t, 'Loi de Poisson', 'Calculer une probabilité avec la loi de Poisson',
        `Le nombre d'admissions aux urgences pédiatriques entre 3 h et 4 h du matin suit la loi de Poisson de paramètre $\\lambda = ${D(lam)}$. Calculer la probabilité d'avoir exactement ${kk === 0 ? 'zéro admission' : kk === 1 ? 'une admission' : 'deux admissions'}, arrondie au millième.`,
        `$${F3(pr)}$`, [`$${F3(Math.exp(-lam) * lam ** (kk + 1) / (kk + 1))}$`, `$${F3(1 - pr)}$`, `$${F3(Math.exp(-1 / lam))}$`],
        '$P(X = k) = e^{-\\lambda}\\,\\dfrac{\\lambda^{k}}{k!}$.',
        `Ici $k = ${kk}$, donc $P(X = ${kk}) = e^{-${D(lam)}} \\times \\dfrac{${D(lam)}^{${kk}}}{${kk}!}$.`,
        `$P(X = ${kk}) = e^{-${D(lam)}} \\times \\dfrac{${D(lam)}^{${kk}}}{${fact}} \\approx ${F3(pr)}$.`, inp(pr, 3));
    },

    'pass-05'(t, id) {
      // Grandeur biologique avec unité et ordres de grandeur réalistes : [La…, une…, la…, unité, population, μ, écarts types possibles]
      const G = pick([
        ['La glycémie à jeun', 'une glycémie à jeun', 'la glycémie à jeun', 'g/L', 'des adultes d\'une population', 0.95, [0.08, 0.1]],
        ['La glycémie à jeun', 'une glycémie à jeun', 'la glycémie à jeun', 'mg/dL', 'des adultes d\'une population', 95, [8, 10]],
        ['La glycémie à jeun', 'une glycémie à jeun', 'la glycémie à jeun', 'mmol/L', 'des adultes d\'une population', 5, [0.25, 0.5]],
        ['La pression artérielle systolique', 'une pression artérielle systolique', 'la pression artérielle systolique', 'mmHg', 'des adultes d\'une population', 125, [10, 12, 15]],
        ['La fréquence cardiaque au repos', 'une fréquence cardiaque au repos', 'la fréquence cardiaque au repos', 'battements par minute', 'des adultes d\'une population', 70, [8, 10]],
        ['La cholestérolémie totale', 'une cholestérolémie totale', 'la cholestérolémie totale', 'g/L', 'des adultes d\'une population', 2, [0.2, 0.25]],
        ['La masse de naissance', 'une masse de naissance', 'la masse de naissance', 'g', 'des nouveau-nés d\'une maternité', 3300, [400, 500]]]);
      // Affichage local : espace fine des milliers (masses de naissance en grammes)
      const D = (v, d = 4) => U.dec(v, d).replace(/^-?\d+/, (m) => NB(m));
      const mu = G[5], s = pick(G[6]), U_ = G[3] === 'battements par minute' ? '\\text{ battements/min}' : `\\ \\mathrm{${G[3]}}`;
      const z = pick([-2.5, -2, -1.5, -1, -0.5, 0.5, 1, 1.5, 2, 2.5, 3]);
      const x = rd(mu + z * s);
      // Familles : centrer-réduire (paliers 1 à 3), intervalles usuels, probabilité avec Φ (paliers 2 à 4),
      // seuil à partir d'un quantile et écart type à retrouver (versions inverses, paliers 3-4).
      const fam = t === 1 ? pick(['cr', 'int', 'phi'])
        : t === 2 ? pick(['cr', 'int', 'phi', 'phi'])
          : t === 3 ? pick(['cr', 'int', 'phi', 'phi', 'seuil', 'seuil'])
            : pick(['int', 'phi', 'phi', 'seuil', 'seuil', 'sigma', 'sigma']);
      const F3 = (v) => rd(v, 3).toFixed(3).replace('.', '{,}');
      const ctx = `${G[0]} ${G[4]}, exprimée en ${G[3]}, suit la loi normale d'espérance $${D(mu)}$ et d'écart type $${D(s)}$.`;
      if (fam === 'phi') {
        const PHI = { 0.5: 0.691, 1: 0.841, 1.5: 0.933, 2: 0.977 };
        const zz = pick([0.5, 1, 1.5, 2]), ph = PHI[zz];
        const kind = t <= 2 ? pick(['sup', 'inf']) : pick(['sup', 'inf', 'sym']);
        const hi = rd(mu + zz * s), lo = rd(mu - zz * s);
        const ans = kind === 'sym' ? rd(2 * ph - 1) : rd(1 - ph);
        const ev = kind === 'sup' ? `X \\geqslant ${D(hi)}` : kind === 'inf' ? `X \\leqslant ${D(lo)}` : `${D(lo)} \\leqslant X \\leqslant ${D(hi)}`;
        return Q(id, t, 'Probabilité et loi normale', 'Calculer une probabilité avec la loi normale centrée réduite',
          `${ctx} On note $X$ ${G[2]} d'une personne tirée au hasard et $\\Phi$ la fonction de répartition de la loi normale centrée réduite ; on donne $\\Phi(${D(zz)}) \\approx ${D(ph)}$. Calculer $P(${ev})$, arrondie au millième.`,
          `$${F3(ans)}$`, kind === 'sym' ? [`$${F3(ph)}$`, `$${F3(1 - ph)}$`, `$${F3(2 * (1 - ph))}$`] : [`$${F3(ph)}$`, `$${F3(2 * ph - 1)}$`, `$${F3((1 - ph) / 2)}$`],
          'Centrer et réduire les bornes pour se ramener à $Z = \\dfrac{X - \\mu}{\\sigma}$, de loi $\\mathcal{N}(0\\,;\\,1)$.',
          kind === 'sym' ? `L'événement s'écrit $-${D(zz)} \\leqslant Z \\leqslant ${D(zz)}$ ; utiliser la symétrie : $P(Z \\leqslant -a) = 1 - \\Phi(a)$.`
            : `L'événement s'écrit $Z ${kind === 'sup' ? '\\geqslant' : '\\leqslant'} ${kind === 'sup' ? '' : '-'}${D(zz)}$.`,
          kind === 'sym' ? `$P(-${D(zz)} \\leqslant Z \\leqslant ${D(zz)}) = 2\\Phi(${D(zz)}) - 1 \\approx 2 \\times ${D(ph)} - 1 = ${F3(ans)}$.`
            : kind === 'sup' ? `$P(Z \\geqslant ${D(zz)}) = 1 - \\Phi(${D(zz)}) \\approx 1 - ${D(ph)} = ${F3(ans)}$.`
              : `Par symétrie, $P(Z \\leqslant -${D(zz)}) = 1 - \\Phi(${D(zz)}) \\approx 1 - ${D(ph)} = ${F3(ans)}$.`,
          inp(ans, 3));
      }
      if (fam === 'seuil') {
        const [q, zq, lab] = pick([[0.975, 1.96, '97{,}5'], [0.95, 1.645, '95'], [0.025, -1.96, '2{,}5'], [0.05, -1.645, '5']]);
        const zpos = Math.abs(zq), xe = mu + zq * s;
        // Précision adaptée à la grandeur : unité (masses en g), dixième (mmHg, mg/dL, battements/min), centième (g/L, mmol/L)
        const dp = s >= 100 ? 0 : s >= 5 ? 1 : 2, xs = rd(xe, dp);
        const FX = (v) => { const str = rd(v, dp).toFixed(dp); const [ip, fp] = str.split('.'); return NB(ip) + (fp ? `{,}${fp}` : ''); };
        const exact = Math.abs(xe - xs) < 1e-9;
        // Distracteurs : signe inversé, quantile confondu (1,645 au lieu de 1,96 ou l'inverse), probabilité prise pour un quantile
        const zAlt = (zpos === 1.96 ? 1.645 : 1.96) * Math.sign(zq);
        const opts = [];
        [mu - zq * s, mu + zAlt * s, mu + q * s, mu - zAlt * s].forEach((v) => { const str = `$${FX(v)}$`; if (str !== `$${FX(xs)}$` && !opts.includes(str)) opts.push(str); });
        return Q(id, t, 'Seuil d\'une loi normale', 'Déterminer un seuil à partir d\'un quantile de la loi normale',
          `${ctx} On cherche la valeur $a$ telle que $${lab}\\,\\%$ des personnes aient ${G[1]} inférieure ou égale à $a$. On donne $P(Z \\leqslant ${D(zpos)}) \\approx ${D(zpos === 1.96 ? 0.975 : 0.95)}$ pour $Z$ de loi $\\mathcal{N}(0\\,;\\,1)$. Calculer $a$, arrondi ${ARR(dp)}.`,
          `$${FX(xs)}$`, opts.slice(0, 3),
          'Écrire $P(X \\leqslant a) = P\\left(Z \\leqslant \\dfrac{a - \\mu}{\\sigma}\\right)$ et identifier le quantile de $Z$.',
          q < 0.5 ? `Par symétrie, $P(Z \\leqslant -${D(zpos)}) \\approx ${D(q)}$, donc $\\dfrac{a - ${D(mu)}}{${D(s)}} = -${D(zpos)}$.` : `$\\dfrac{a - ${D(mu)}}{${D(s)}} = ${D(zpos)}$.`,
          `$a = \\mu ${zq < 0 ? '-' : '+'} ${D(zpos)}\\sigma = ${D(mu)} ${zq < 0 ? '-' : '+'} ${D(zpos)} \\times ${D(s)} ${exact ? '=' : '\\approx'} ${FX(xs)}$.`,
          inp(xs, dp), `Saisir le nombre seul, arrondi ${ARR(dp)}.`);
      }
      if (fam === 'sigma') {
        const a = rd(mu + 1.96 * s), up = Math.random() < 0.5;
        return Q(id, t, 'Retrouver un écart type', 'Retrouver l\'écart type d\'une loi normale à partir d\'une probabilité',
          `${G[0]} ${G[4]}, exprimée en ${G[3]}, suit une loi normale d'espérance $${D(mu)}$, d'écart type $\\sigma$ inconnu. On sait que ${up ? `$2{,}5\\,\\%$ des personnes ont ${G[1]} supérieure à $${D(a)}${U_}$` : `$95\\,\\%$ des personnes ont ${G[1]} comprise entre $${D(rd(mu - 1.96 * s))}$ et $${D(a)}${U_}$`}. On donne $P(Z \\leqslant 1{,}96) \\approx 0{,}975$ pour $Z$ de loi $\\mathcal{N}(0\\,;\\,1)$. Calculer $\\sigma$.`,
          `$${D(s)}$`, [`$${D(rd((a - mu) * 1.96), 2)}$`, `$${D(rd((a - mu) / 1.645), 2)}$`, `$${D(rd(a - mu))}$`],
          'Traduire l\'information par une égalité $P(X \\leqslant a) = 0{,}975$, puis centrer et réduire.',
          `$P\\left(Z \\leqslant \\dfrac{${D(a)} - ${D(mu)}}{\\sigma}\\right) = 0{,}975$, donc $\\dfrac{${D(rd(a - mu))}}{\\sigma} = 1{,}96$.`,
          `$\\sigma = \\dfrac{${D(rd(a - mu))}}{1{,}96} = ${D(s)}$.`, inp(s));
      }
      if (fam === 'cr') {
        return Q(id, t, 'Centrer et réduire', 'Centrer et réduire une variable de loi normale',
          `${ctx} Calculer la valeur centrée réduite $z = \\dfrac{x - \\mu}{\\sigma}$ associée à $x = ${D(x)}${U_}$.`,
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
      // Affichage local : arrondi au millième avec trois décimales (0,110 et non 0,11), espace fine des milliers (1 600)
      const D = (v, d = 4) => (d === 3 ? rd(v, 3).toFixed(3).replace('.', '{,}') : U.dec(v, d)).replace(/^-?\d+/, (m) => NB(m));
      // (n, f) : on écarte les couples dont la demi-largeur ou une borne tombe à mi-chemin de deux millièmes,
      // pour que f ± (demi-largeur arrondie) coïncide avec la borne arrondie affichée.
      const midway = (x) => Math.abs(Math.abs(x * 1000) % 1 - 0.5) < 1e-6;
      let n, f, essai06 = 0;
      do {
        n = pick([100, 400, 625, 900, 1600, 2500]);
        f = pick([0.1, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.8]);
        const h0 = 1.96 * Math.sqrt(f * (1 - f) / n);
        if (!midway(h0) && !midway(f - h0) && !midway(f + h0)
          && rd(f - rd(h0, 3), 3) === rd(f - h0, 3) && rd(f + rd(h0, 3), 3) === rd(f + h0, 3)) break;
      } while (++essai06 < 200);
      const half = 1.96 * Math.sqrt(f * (1 - f) / n);
      const fam06 = t <= 2 ? pick(['prop', 'esm', 'icm']) : 'demi';
      if (fam06 === 'esm' || fam06 === 'icm') {
        // Moyenne, grand échantillon : erreur standard s / √n décimale exacte
        let nm, es, s;
        do {
          nm = pick([36, 49, 64, 100, 144, 400]); es = pick([0.5, 1, 1.5, 2, 2.5]); s = rd(es * Math.sqrt(nm));
        } while (!Number.isInteger(s));
        const [lab, unit, base] = pick([['la glycémie à jeun', 'mg/dL', 95], ['la pression artérielle systolique', 'mmHg', 128], ['le cholestérol total', 'mg/dL', 190], ['la fréquence cardiaque au repos', 'bpm', 70]]);
        const xb = base + R(-6, 6);
        const rn = Math.sqrt(nm);
        if (fam06 === 'esm') {
          return Q(id, t, 'Erreur standard d\'une moyenne', 'Calculer l\'erreur standard d\'une moyenne',
            `Sur un échantillon de $${nm}$ patients, ${lab} a pour moyenne $${xb}$ ${unit} et pour écart type $s = ${s}$ ${unit}. Calculer l'erreur standard de la moyenne, $ES = \\dfrac{s}{\\sqrt n}$.`,
            `$${D(es)}$`, distinct(es, [rd(s / nm, 4), rd(s * s / nm, 2), rd(s * rn)]).map((v) => `$${D(v)}$`),
            'L\'erreur standard de la moyenne est l\'écart type divisé par la racine carrée de l\'effectif.',
            `$\\sqrt{${nm}} = ${rn}$.`,
            `$ES = \\dfrac{${s}}{\\sqrt{${nm}}} = \\dfrac{${s}}{${rn}} = ${D(es)}$ ${unit}. Elle mesure la dispersion des moyennes d'échantillons, pas celle des individus ($s = ${s}$).`, inp(es), `Saisir le nombre seul, en ${unit}.`);
        }
        const lower = Math.random() < 0.5, sgn = lower ? -1 : 1, hw = rd(1.96 * es, 4);
        const ans = rd(xb + sgn * hw, 4);
        return Q(id, t, 'Intervalle de confiance d\'une moyenne', 'Calculer un intervalle de confiance d\'une moyenne (grand échantillon)',
          `Sur un échantillon de $${nm}$ patients, ${lab} a pour moyenne $\\bar x = ${xb}$ ${unit} et pour écart type $s = ${s}$ ${unit}. Calculer la borne ${lower ? 'inférieure' : 'supérieure'} de l'intervalle de confiance à $95\\,\\%$ de la moyenne, $\\left[\\bar x - 1{,}96\\dfrac{s}{\\sqrt n}\\,;\\,\\bar x + 1{,}96\\dfrac{s}{\\sqrt n}\\right]$.`,
          `$${D(ans)}$`, distinct(ans, [rd(xb - sgn * hw, 4), rd(xb + sgn * 1.96 * s, 4), rd(xb + sgn * es, 4)]).map((v) => `$${D(v)}$`),
          'Calculer d\'abord l\'erreur standard $\\dfrac{s}{\\sqrt n}$, puis la multiplier par $1{,}96$.',
          `$ES = \\dfrac{${s}}{\\sqrt{${nm}}} = ${D(es)}$.`,
          `$ES = \\dfrac{${s}}{${rn}} = ${D(es)}$, demi-largeur $1{,}96 \\times ${D(es)} = ${D(hw)}$, borne : $${xb} ${lower ? '-' : '+'} ${D(hw)} = ${D(ans)}$ ${unit}. L'échantillon est grand ($n \\geq 30$), la formule s'applique.`, inp(ans), `Saisir le nombre seul, en ${unit}.`);
      }
      if (t <= 2) {
        // Couples (f, n) pour lesquels l'erreur standard est un décimal exact, conditions nf >= 5 et n(1 - f) >= 5 vérifiées
        const [f2, n2] = pick([0.5, 0.2, 0.8, 0.1, 0.9, 0.36, 0.64].flatMap((p) =>
          [100, 400, 625, 1600, 2500].map((m) => [p, m])).filter(([p, m]) => Number.isInteger(rd(p * m)) && !(p === 0.5 && m === 1600))); // nf doit être un effectif entier ; (0,5 ; 1600) : borne à arrondir exactement à mi-chemin
        const se = rd(Math.sqrt(f2 * (1 - f2) / n2), 6);
        const hw = rd(1.96 * se, 6);
        const lower = Math.random() < 0.5;
        const sgn = lower ? -1 : 1;
        const ans = rd(f2 + sgn * hw, 6);
        const op = lower ? '-' : '+';
        const cond = `Conditions vérifiées : $nf = ${D(n2 * f2)}$ et $n(1 - f) = ${D(n2 * (1 - f2))}$ sont au moins égaux à $5$.`;
        const formule = `\\left[f - 1{,}96\\sqrt{\\dfrac{f(1-f)}{n}}\\,;\\,f + 1{,}96\\sqrt{\\dfrac{f(1-f)}{n}}\\right]`;
        if (t === 1) {
          return Q(id, t, 'Borne d\'un intervalle de confiance', 'Calculer un intervalle de confiance asymptotique d\'une proportion',
            `Dans un échantillon de $${NB(n2)}$ patients, la fréquence observée de guérison est $f = ${D(f2)}$ et l'erreur standard vaut $\\sqrt{\\dfrac{f(1-f)}{n}} = ${D(se, 6)}$. Calculer la borne ${lower ? 'inférieure' : 'supérieure'} de l'intervalle de confiance à $95\\,\\%$ de la proportion, $${formule}$, arrondie au millième.`,
            `$${D(ans, 3)}$`, [`$${D(f2 - sgn * hw, 3)}$`, `$${D(f2 + sgn * se, 3)}$`, `$${D(f2 + sgn * 2.58 * se, 3)}$`],
            'Multiplier l\'erreur standard par $1{,}96$, puis retrancher ou ajouter le résultat à $f$.',
            `$1{,}96 \\times ${D(se, 6)} = ${D(hw, 6)}$.`,
            `Demi-largeur : $1{,}96 \\times ${D(se, 6)} = ${D(hw, 6)}$. Borne : $${D(f2)} ${op} ${D(hw, 6)} \\approx ${D(ans, 3)}$. ${cond}`, inp(ans, 3));
        }
        return Q(id, t, 'Borne d\'un intervalle de confiance', 'Calculer un intervalle de confiance asymptotique d\'une proportion',
          `Dans un échantillon de $${NB(n2)}$ patients, la fréquence observée de guérison est $f = ${D(f2)}$. Calculer la borne ${lower ? 'inférieure' : 'supérieure'} de l'intervalle de confiance à $95\\,\\%$ de la proportion, $${formule}$, arrondie au millième.`,
          `$${D(ans, 3)}$`, [`$${D(f2 - sgn * hw, 3)}$`, `$${D(f2 + sgn * se, 3)}$`, `$${D(f2 + sgn * 1.96 * f2 * (1 - f2) / Math.sqrt(n2), 3)}$`],
          'Calculer d\'abord l\'erreur standard $\\sqrt{\\dfrac{f(1-f)}{n}}$, puis la multiplier par $1{,}96$.',
          `$f(1 - f) = ${D(f2 * (1 - f2))}$, donc $\\sqrt{\\dfrac{${D(f2 * (1 - f2))}}{${NB(n2)}}} = ${D(se, 6)}$.`,
          `Erreur standard : $${D(se, 6)}$. Demi-largeur : $1{,}96 \\times ${D(se, 6)} = ${D(hw, 6)}$. Borne : $${D(f2)} ${op} ${D(hw, 6)} \\approx ${D(ans, 3)}$. ${cond}`, inp(ans, 3));
      }
      return Q(id, t, 'Demi-largeur d\'un intervalle de confiance', 'Calculer un intervalle de confiance asymptotique d\'une proportion',
        `Dans un échantillon de $${NB(n)}$ patients, la fréquence observée d'un effet secondaire est $f = ${D(f)}$. Calculer la demi-largeur $1{,}96\\sqrt{\\dfrac{f(1-f)}{n}}$ de l'intervalle de confiance à $95\\,\\%$, arrondie au millième.`,
        `$${D(half, 3)}$`, [`$${D(1.96 * f * (1 - f) / Math.sqrt(n), 3)}$`, `$${D(1 / Math.sqrt(n), 3)}$`, `$${D(1.645 * Math.sqrt(f * (1 - f) / n), 3)}$`],
        '$f(1 - f)$ se calcule avant de diviser par $n$.',
        `$f(1 - f) = ${D(f * (1 - f))}$ et $\\sqrt{\\dfrac{${D(f * (1 - f))}}{${NB(n)}}} \\approx ${D(Math.sqrt(f * (1 - f) / n), 5)}$.`,
        `Demi-largeur $= 1{,}96 \\times ${D(Math.sqrt(f * (1 - f) / n), 5)} \\approx ${D(half, 3)}$ : l'intervalle est $[${D(f - half, 3)}\\,;\\,${D(f + half, 3)}]$.`, inp(half, 3));
    },

    'pass-07'(t, id) {
      // Erreur standard σ/√n différente de 1, pour que l'indice ne donne pas directement Z ; PAS de référence réaliste
      const [n, s] = pick([[25, 10], [25, 15], [36, 9], [36, 12], [36, 18], [49, 14], [49, 21], [64, 12], [64, 16], [100, 15], [100, 20], [100, 25]]);
      const se = s / Math.sqrt(n);
      const z = pick([-3, -2.5, -2, -1.5, -1, 1, 1.5, 2, 2.4, 3].filter((v) => Math.abs(v) !== se));
      const mu0 = pick([115, 120, 125, 130, 135, 140]);
      const xb = rd(mu0 + z * se);
      if (t >= 3 && Math.random() < 0.4) {
        const [lab, unit, base] = pick([['la pression artérielle systolique', 'mmHg', 130], ['la fréquence cardiaque de repos', 'bpm', 72], ['la glycémie à jeun', 'mg/dL', 98]]);
        if (t === 4 && Math.random() < 0.5) {
          // Student à variance commune : (n1, n2, variance 1, variance 2) avec variance commune et erreur standard exactes
          const [n1, n2, v1, v2, es2, seuil] = pick([
            [13, 13, 5, 8, 1, '2{,}06'], [13, 13, 4, 9, 1, '2{,}06'], [13, 13, 20, 32, 2, '2{,}06'], [13, 13, 16, 36, 2, '2{,}06'],
            [9, 9, 16, 20, 2, '2{,}12'], [9, 9, 12, 24, 2, '2{,}12'], [9, 9, 4, 5, 1, '2{,}12'],
            [10, 15, 38, 15, 2, '2{,}07'], [10, 15, 10, 33, 2, '2{,}07'],
            [6, 12, 27, 11, 2, '2{,}12'], [6, 12, 5, 21, 2, '2{,}12']
          ]);
          const ddl = n1 + n2 - 2;
          const s2 = rd(((n1 - 1) * v1 + (n2 - 1) * v2) / ddl);
          const ts = pick([-3, -2.5, -1.5, 1.5, 2.5, 3]);
          const diff = rd(ts * es2);
          const x2 = base;
          const x1 = rd(x2 + diff);
          const rej = Math.abs(ts) > parseFloat(seuil.replace('{,}', '.'));
          return Q(id, t, 'Test de Student sur deux moyennes', 'Comparer deux moyennes sur petits échantillons indépendants',
            `On compare ${lab} dans deux groupes indépendants : groupe $1$ ($n_1 = ${n1}$, moyenne $${D(x1)}$ ${unit}, variance $s_1^2 = ${v1}$) et groupe $2$ ($n_2 = ${n2}$, moyenne $${D(x2)}$ ${unit}, variance $s_2^2 = ${v2}$). On suppose les lois normales et les variances égales. Calculer la statistique $t$ du test de Student à variance commune, pour $H_0 : \\mu_1 = \\mu_2$.`,
            `$${D(ts)}$`, [`$${D(-ts)}$`, `$${D(diff / Math.sqrt(s2), 2)}$`, `$${D(diff / (Math.sqrt(v1 / n1) + Math.sqrt(v2 / n2)), 2)}$`],
            'Calculer d\'abord la variance commune $s^2 = \\dfrac{(n_1 - 1)s_1^2 + (n_2 - 1)s_2^2}{n_1 + n_2 - 2}$.',
            `$s^2 = \\dfrac{${n1 - 1} \\times ${v1} + ${n2 - 1} \\times ${v2}}{${ddl}} = ${D(s2)}$.`,
            `$s^2 = ${D(s2)}$ et $\\sqrt{s^2\\left(\\dfrac{1}{${n1}} + \\dfrac{1}{${n2}}\\right)} = ${es2}$, donc $t = \\dfrac{${D(x1)} - ${D(x2)}}{${es2}} = ${D(ts)}$. À $${ddl}$ degrés de liberté, le seuil bilatéral à $5\\,\\%$ est d'environ $${seuil}$ : la différence ${rej ? 'est' : 'n\'est pas'} significative.`, inp(ts));
        }
        // Grands échantillons : s1²/n1 = a², s2²/n2 = b², (a, b) pythagoricien, erreur standard exacte
        const [n1, n2] = pick([[100, 64], [36, 49], [64, 36], [100, 36], [49, 81], [36, 100], [81, 49], [64, 100]]);
        const [a, b] = pick([[0.6, 0.8], [0.8, 0.6], [1.2, 1.6], [1.6, 1.2], [1.5, 2], [0.9, 1.2]]);
        const s1 = rd(a * Math.sqrt(n1)), s2 = rd(b * Math.sqrt(n2));
        const es = rd(Math.sqrt(a * a + b * b));
        const zs = pick([-3, -2.5, -2.2, -1.8, -1.5, 1.2, 1.5, 1.8, 2, 2.2, 2.4, 2.5, 3]);
        const diff = rd(zs * es);
        const x2 = base;
        const x1 = rd(x2 + diff);
        const rej = Math.abs(zs) > 1.96;
        return Q(id, t, 'Comparaison de deux moyennes', 'Comparer deux moyennes sur grands échantillons indépendants',
          `On compare ${lab} dans deux groupes indépendants : groupe $1$ ($n_1 = ${n1}$, moyenne $${D(x1)}$ ${unit}, écart type $s_1 = ${D(s1)}$) et groupe $2$ ($n_2 = ${n2}$, moyenne $${D(x2)}$ ${unit}, écart type $s_2 = ${D(s2)}$). Calculer $Z = \\dfrac{\\bar x_1 - \\bar x_2}{\\sqrt{s_1^2 / n_1 + s_2^2 / n_2}}$.`,
          `$${D(zs)}$`, [`$${D(-zs)}$`, `$${D(diff / (a + b), 2)}$`, `$${D(diff / Math.sqrt(s1 * s1 + s2 * s2), 2)}$`],
          'Les groupes étant indépendants, on additionne les variances des deux moyennes avant de prendre la racine carrée.',
          `$\\dfrac{s_1^2}{n_1} + \\dfrac{s_2^2}{n_2} = ${D(rd(a * a))} + ${D(rd(b * b))} = ${D(rd(a * a + b * b))}$.`,
          `L'erreur standard de la différence vaut $\\sqrt{${D(rd(a * a + b * b))}} = ${D(es)}$, donc $Z = \\dfrac{${D(x1)} - ${D(x2)}}{${D(es)}} = ${D(zs)}$. Comme $|Z| = ${D(Math.abs(zs))}$ ${rej ? '>' : '<'} $1{,}96$, la différence ${rej ? 'est' : 'n\'est pas'} significative au risque $5\\,\\%$ en bilatéral.`, inp(zs));
      }
      const fam07p = t <= 2 ? pick(['stat', 'prop', 'seuil']) : 'stat';
      if (fam07p === 'prop') {
        // Comparaison d'une proportion à une référence : erreur standard sous H0 décimale exacte, n f entier
        const cas = [];
        [[0.5, 100, 0.05], [0.2, 100, 0.04], [0.1, 100, 0.03], [0.2, 400, 0.02], [0.5, 400, 0.025], [0.1, 900, 0.01], [0.4, 600, 0.02], [0.3, 2100, 0.01]].forEach(([p0, nn, es]) => {
          [-3, -2.5, -2, -1.5, -1, 1, 1.5, 2, 2.5, 3].forEach((zz) => {
            const k = rd(nn * (p0 + zz * es));
            if (Number.isInteger(k) && k > 0 && k < nn) cas.push([p0, nn, es, zz, k]);
          });
        });
        const [p0, nn, es, zz, k] = pick(cas);
        const fo = rd(k / nn);
        const [lab, ref] = pick([['ont présenté un effet indésirable', 'la fréquence habituelle de cet effet'], ['sont guéris à un mois', 'le taux de guérison habituel'], ['sont porteurs du germe', 'la prévalence de référence']]);
        return Q(id, t, 'Test sur une proportion', 'Calculer la statistique d\'un test de comparaison d\'une proportion à une référence',
          `Sur $${NB(nn)}$ patients, $${NB(k)}$ ${lab}. On teste $H_0 : p = ${D(p0)}$, où $${D(p0)}$ est ${ref}. Calculer $Z = \\dfrac{f - p_0}{\\sqrt{p_0(1 - p_0)/n}}$.`,
          `$${D(zz)}$`, distinct(zz, [-zz, rd((fo - p0) / Math.sqrt(fo * (1 - fo) / nn), 2), rd((fo - p0) / Math.sqrt(p0 * (1 - p0)), 3)]).map((v) => `$${D(v)}$`),
          'Calculer la fréquence observée $f = \\dfrac{k}{n}$, puis l\'erreur standard sous $H_0$, calculée avec $p_0$ et non avec $f$.',
          `$f = \\dfrac{${NB(k)}}{${NB(nn)}} = ${D(fo)}$ et $\\sqrt{\\dfrac{${D(p0)} \\times ${D(rd(1 - p0))}}{${NB(nn)}}} = ${D(es)}$.`,
          `$f = ${D(fo)}$, $ES = ${D(es)}$, donc $Z = \\dfrac{${D(fo)} - ${D(p0)}}{${D(es)}} = ${D(zz)}$. Conditions : $np_0 = ${D(rd(nn * p0))}$ et $n(1 - p_0) = ${D(rd(nn * (1 - p0)))}$ sont au moins égaux à $5$.`, inp(zz));
      }
      if (fam07p === 'seuil') {
        // Plus petite (ou plus grande) moyenne conduisant au rejet de H0 en bilatéral à 5 %
        const [ns, ss] = pick([[25, 5], [25, 10], [36, 9], [36, 12], [49, 7], [49, 14], [64, 4], [64, 12], [100, 15], [100, 25]]);
        const ess = rd(ss / Math.sqrt(ns)), up = Math.random() < 0.5;
        const mu0 = pick([115, 120, 125, 130, 135, 140]);
        const hw = rd(1.96 * ess, 4), ans = rd(mu0 + (up ? hw : -hw), 4);
        return Q(id, t, 'Seuil de rejet', 'Déterminer la région de rejet d\'un test bilatéral sur une moyenne',
          `On teste $H_0 : \\mu = ${mu0}$ (pression artérielle systolique, en mmHg) sur un échantillon de $${ns}$ patients, l'écart type étant supposé connu, $\\sigma = ${ss}$, au risque $5\\,\\%$ en bilatéral. On rejette $H_0$ lorsque $|Z| > 1{,}96$, avec $Z = \\dfrac{\\bar x - \\mu_0}{\\sigma / \\sqrt n}$. À partir de quelle valeur de $\\bar x$, ${up ? 'au-dessus' : 'au-dessous'} de $${mu0}$, rejette-t-on $H_0$ ?`,
          `$${D(ans)}$`, distinct(ans, [rd(mu0 + (up ? 1 : -1) * 1.96 * ss, 4), rd(mu0 + (up ? 1 : -1) * ess, 4), rd(mu0 + (up ? 1 : -1) * 1.96 * ss / ns, 4)]).map((v) => `$${D(v)}$`),
          `La limite de rejet correspond à $Z = ${up ? '' : '-'}1{,}96$ : $\\bar x = \\mu_0 ${up ? '+' : '-'} 1{,}96\\,\\dfrac{\\sigma}{\\sqrt n}$.`,
          `$\\dfrac{\\sigma}{\\sqrt n} = \\dfrac{${ss}}{${Math.sqrt(ns)}} = ${D(ess)}$.`,
          `$\\dfrac{\\sigma}{\\sqrt n} = ${D(ess)}$ et $1{,}96 \\times ${D(ess)} = ${D(hw)}$, donc on rejette $H_0$ dès que $\\bar x ${up ? '>' : '<'} ${mu0} ${up ? '+' : '-'} ${D(hw)} = ${D(ans)}$ mmHg.`, inp(ans), 'Saisir le nombre seul, en mmHg.');
      }
      if (t <= 2 || Math.random() < 0.5) {
        return Q(id, t, 'Statistique de test', 'Calculer la statistique d\'un test de comparaison d\'une moyenne à une norme',
          `Sur $${n}$ patients, la pression artérielle systolique moyenne vaut $\\bar x = ${D(xb)}$ mmHg. On teste $H_0 : \\mu = ${mu0}$, l'écart type étant supposé connu, $\\sigma = ${s}$. Calculer $Z = \\dfrac{\\bar x - \\mu_0}{\\sigma / \\sqrt n}$.`,
          `$${D(z)}$`, [`$${D(-z)}$`, `$${D((xb - mu0) / s, 3)}$`, `$${D((xb - mu0) / (s / n), 3)}$`],
          'Calculer d\'abord l\'erreur standard de la moyenne $\\sigma / \\sqrt n$, puis diviser l\'écart $\\bar x - \\mu_0$ par cette erreur standard.',
          `$\\dfrac{\\sigma}{\\sqrt n} = \\dfrac{${s}}{\\sqrt{${n}}} = \\dfrac{${s}}{${Math.sqrt(n)}} = ${D(se, 4)}$.`,
          `$\\dfrac{\\sigma}{\\sqrt n} = ${D(se, 4)}$ et $\\bar x - \\mu_0 = ${D(xb)} - ${mu0} = ${D(rd(xb - mu0))}$, donc $Z = \\dfrac{${D(rd(xb - mu0))}}{${D(se, 4)}} = ${D(z)}$.`, inp(z));
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
      if (t >= 2 && Math.random() < (t === 2 ? 0.25 : 0.35)) {
        // Essai thérapeutique : réduction absolue du risque (palier 2) puis nombre de sujets à traiter (paliers 3-4).
        const n = pick([200, 300, 400, 500]), rp = pick([0.1, 0.12, 0.15, 0.2, 0.25, 0.3]);
        const red = pick([0.02, 0.04, 0.05, 0.08, 0.1].filter((r) => r < rp));
        const eP = Math.round(rp * n), eT = Math.round((rp - red) * n);
        const nnt = Math.ceil(rd(1 / red));
        const intro = `Dans un essai randomisé, $${n}$ patients reçoivent le traitement et $${n}$ un placebo. Un événement grave survient chez $${eT}$ patients traités et chez $${eP}$ patients du groupe placebo.`;
        if (t === 2) {
          return Q(id, t, 'Réduction absolue du risque', 'Calculer une différence de risques',
            `${intro} Calculer la réduction absolue du risque, en points de pourcentage.`,
            `$${D(100 * red)}$`, [`$${D(100 * rd(1 - (rp - red) / rp), 1)}$`, `$${D(100 * rp)}$`, `$${D(eP - eT)}$`],
            'La réduction absolue du risque est la différence entre le risque sous placebo et le risque sous traitement.',
            `Risque sous placebo : $\\dfrac{${eP}}{${n}} = ${D(rp)}$ ; sous traitement : $\\dfrac{${eT}}{${n}}$.`,
            `$RAR = ${D(rp)} - ${D(rd(rp - red))} = ${D(red)}$, soit $${D(100 * red)}$ points de pourcentage.`, inp(100 * red), 'Saisir le nombre seul, en points de pourcentage.');
        }
        return Q(id, t, 'Nombre de sujets à traiter', 'Calculer et interpréter le nombre de sujets à traiter',
          `${intro} Combien faut-il traiter de patients, en moyenne, pour éviter un événement grave (nombre de sujets à traiter $NNT$, arrondi à l'entier supérieur) ?`,
          `$${nnt}$`, [`$${Math.ceil(rd(1 / rp))}$`, `$${D(100 * red)}$`, `$${Math.ceil(rd(rp / red))}$`],
          'Le nombre de sujets à traiter est l\'inverse de la réduction absolue du risque.',
          `Risque sous placebo : $${D(rp)}$ ; sous traitement : $${D(rd(rp - red))}$ ; la réduction absolue vaut $${D(red)}$.`,
          `$NNT = \\dfrac{1}{${D(red)}} ${Number.isInteger(rd(1 / red)) ? '=' : '\\approx'} ${D(1 / red, 2)}$, arrondi à l'entier supérieur : $${nnt}$ patients.`, String(nnt));
      }
      const a = R(15, 60), b = R(100, 300), c = R(5, 30), d = R(150, 400);
      const rr = (a / (a + b)) / (c / (c + d)), or = (a * d) / (b * c);
      if (t === 1 && Math.random() < 0.4) {
        const exp = Math.random() < 0.5, num = exp ? a : c, den = exp ? a + b : c + d, r = 100 * num / den;
        const F1 = (v) => rd(v, 1).toFixed(1).replace('.', '{,}');
        return Q(id, t, 'Risque dans un groupe', 'Calculer un risque (incidence cumulée)',
          `Dans une cohorte, on a suivi $${a + b}$ sujets exposés et $${c + d}$ sujets non exposés. À la fin du suivi, on relève :${tabTex(a, b, c, d, 'Exposés', 'Non exposés', 'Malades', 'Non malades')}Calculer le risque de maladie chez les sujets ${exp ? 'exposés' : 'non exposés'}, en pourcentage arrondi au dixième.`,
          `$${F1(r)}$`, [100 * num / (exp ? b : d), 100 * num / (a + c), 100 * (exp ? c / (c + d) : a / (a + b))].map((v) => `$${F1(v)}$`).filter((str, i, arr) => str !== `$${F1(r)}$` && arr.indexOf(str) === i),
          'Le risque est le nombre de nouveaux malades divisé par l\'effectif du groupe suivi.',
          `Les sujets ${exp ? 'exposés' : 'non exposés'} sont $${den}$, dont $${num}$ malades.`,
          `$\\dfrac{${num}}{${den}} \\approx ${D(num / den, 4)}$, soit environ $${F1(r)}\\,\\%$.`, inp(r, 1), 'Saisir le nombre seul, en pourcentage.');
      }
      const ccIntro = `Dans une étude cas-témoins, on a recruté $${a + c}$ cas et $${b + d}$ témoins, puis recherché leur exposition passée :${tabTex(a, b, c, d, 'Exposés', 'Non exposés', 'Cas', 'Témoins')}`;
      if (t >= 2 && Math.random() < 0.2) {
        // Quelle mesure le schéma d'étude autorise-t-il ?
        return Q(id, t, 'Mesure calculable', 'Choisir la mesure d\'association adaptée au schéma d\'étude',
          `${ccIntro}Quelle mesure peut-on estimer à partir de ce tableau ?`,
          `L'odds ratio : $OR \\approx ${D(or, 2)}$`,
          [`Le risque relatif : $RR \\approx ${D(rr, 2)}$`, `Le risque de maladie chez les exposés : environ $${D(100 * a / (a + b), 1)}\\,\\%$`, `La prévalence de la maladie : environ $${D(100 * (a + c) / (a + b + c + d), 1)}\\,\\%$`],
          'Repérer comment les sujets ont été recrutés : selon leur maladie ou selon leur exposition.',
          'Ici, la proportion de malades est fixée par le recrutement : elle ne reflète pas la population.',
          `Dans une étude cas-témoins, le nombre de cas et de témoins est choisi par l'investigateur : ni le risque, ni la prévalence, ni le $RR$ ne sont estimables. Seul l'odds ratio l'est : $OR = \\dfrac{${a} \\times ${d}}{${b} \\times ${c}} \\approx ${D(or, 2)}$.`, null);
      }
      const askOR = t >= 3 ? Math.random() < 0.6 : Math.random() < (t === 1 ? 0.45 : 0.3);
      const ans = askOR ? or : rr;
      const caseControl = askOR && Math.random() < 0.5;
      const intro = caseControl ? ccIntro
        : `Dans une cohorte, on a suivi $${a + b}$ sujets exposés et $${c + d}$ sujets non exposés. À la fin du suivi, on relève :${tabTex(a, b, c, d, 'Exposés', 'Non exposés', 'Malades', 'Non malades')}`;
      return Q(id, t, askOR ? 'Odds ratio' : 'Risque relatif', 'Calculer un risque relatif ou un odds ratio',
        `${intro}Calculer ${askOR ? 'l\'odds ratio $OR$ associé à l\'exposition' : 'le risque relatif $RR$ de la maladie chez les exposés'}, arrondi au centième.`,
        `$${D(ans, 2)}$`, [`$${D(askOR ? rr : or, 2)}$`, `$${D(1 / ans, 2)}$`, `$${D((a / b) / (c / (c + d)), 2)}$`],
        askOR ? '$OR = \\dfrac{a\\,d}{b\\,c}$ (rapport des cotes).' : '$RR = \\dfrac{\\text{risque chez les exposés}}{\\text{risque chez les non-exposés}}$.',
        askOR ? `$OR = \\dfrac{${a} \\times ${d}}{${b} \\times ${c}}$.` : `Risque chez les exposés : $\\dfrac{${a}}{${a + b}}$ ; chez les non-exposés : $\\dfrac{${c}}{${c + d}}$.`,
        askOR ? `$OR = \\dfrac{${a * d}}{${b * c}} \\approx ${D(or, 2)}$.${caseControl ? ' Dans une étude cas-témoins, seul l\'$OR$ est estimable, le $RR$ ne l\'est pas.' : ''}` : `$RR = \\dfrac{${a}/${a + b}}{${c}/${c + d}} \\approx ${D(rr, 2)}$.`, inp(ans, 2));
    },

    'pass-09'(t, id) {
      const k = t <= 2 ? pick([0, 2, 3]) : R(0, 1);
      if (k === 2) {
        // Somme ou différence : les incertitudes absolues s'ajoutent
        const diff = Math.random() < 0.5;
        const d1 = pick([0.1, 0.2, 0.5]), d2 = pick([0.1, 0.2, 0.3]);
        const m1 = rd(R(1200, 3000) / 10, 1), m2 = rd(R(150, 900) / 10, 1);
        const ans = rd(d1 + d2);
        const enonce = diff
          ? `La masse d'un prélèvement est obtenue par différence de deux pesées : $m = m_1 - m_2$, avec $m_1 = ${D(m1)} \\pm ${D(d1)}\\ \\mathrm{g}$ (flacon plein) et $m_2 = ${D(m2)} \\pm ${D(d2)}\\ \\mathrm{g}$ (flacon vide).`
          : `Un volume total est obtenu en ajoutant deux volumes mesurés : $V = V_1 + V_2$, avec $V_1 = ${D(m1)} \\pm ${D(d1)}\\ \\mathrm{mL}$ et $V_2 = ${D(m2)} \\pm ${D(d2)}\\ \\mathrm{mL}$.`;
        return Q(id, t, diff ? 'Incertitude sur une différence' : 'Incertitude sur une somme', 'Propager des incertitudes absolues (somme, différence)',
          `${enonce} Quelle est l'incertitude absolue sur $${diff ? 'm' : 'V'}$, en $\\mathrm{${diff ? 'g' : 'mL'}}$ ?`,
          `$${D(ans)}$`, distinct(ans, [rd(Math.abs(d1 - d2)), rd(Math.sqrt(d1 * d1 + d2 * d2), 3), rd(d1 * d2, 3), rd(Math.max(d1, d2))]).slice(0, 3).map((v) => `$${D(v)}$`),
          'Pour une somme ou une différence, ce sont les incertitudes **absolues** qui s\'ajoutent : $\\Delta(x \\pm y) = \\Delta x + \\Delta y$.',
          `${diff ? 'Même pour une différence, on ajoute' : 'On ajoute'} : $\\Delta ${diff ? 'm' : 'V'} = ${D(d1)} + ${D(d2)}$.`,
          `$\\Delta ${diff ? 'm' : 'V'} = ${D(d1)} + ${D(d2)} = ${D(ans)}\\ \\mathrm{${diff ? 'g' : 'mL'}}$${diff ? ' : une différence ne réduit pas l\'incertitude' : ''}.`, inp(ans), `Saisir le nombre seul, en ${diff ? 'g' : 'mL'}.`);
      }
      if (k === 3) {
        // Produit de puissances : les incertitudes relatives s'ajoutent, pondérées par la valeur absolue des exposants
        const [lab, formule, ex1, v1, ex2, v2] = pick([
          ['Le débit sanguin dans un vaisseau suit la loi de Poiseuille', 'Q = k\\,\\dfrac{r^4}{L}', 4, 'r', 1, 'L'],
          ['Le volume d\'une cellule sphérique vaut', 'V = \\dfrac{4}{3}\\pi r^3', 3, 'r', 0, ''],
          ['Le volume d\'un segment de vaisseau cylindrique vaut', 'V = \\pi r^2 h', 2, 'r', 1, 'h'],
          ['L\'énergie cinétique d\'un patient sur un tapis de course vaut', 'E = \\dfrac{1}{2} m v^2', 2, 'v', 1, 'm'],
          ['L\'aire d\'une section de vaisseau vaut', 'S = \\pi r^2', 2, 'r', 0, '']]);
        const r1 = pick([0.5, 1, 1.5, 2, 2.5]), r2 = ex2 ? pick([1, 2, 3]) : 0;
        const ans = rd(ex1 * r1 + ex2 * r2);
        const donnees = `$${v1}$ est mesuré à $${D(r1)}\\,\\%$ près${ex2 ? ` et $${v2}$ à $${D(r2)}\\,\\%$ près` : ''}`;
        return Q(id, t, 'Incertitude et puissance', 'Propager des incertitudes relatives avec une puissance',
          `${lab} $${formule}$ (constantes connues exactement). ${donnees.charAt(0).toUpperCase() + donnees.slice(1)}. Quelle est, au premier ordre, l'incertitude relative sur $${formule.split(' ')[0]}$, en $\\%$ ?`,
          `$${D(ans)}$`, distinct(ans, [rd(r1 + r2), rd(r1 ** ex1 + r2, 3), rd(ex1 * (r1 + r2)), rd(Math.abs(ex1 * r1 - r2))]).slice(0, 3).map((v) => `$${D(v)}$`),
          'Différentielle logarithmique : pour $f = k\\,x^a y^b$, $\\dfrac{\\Delta f}{f} = |a|\\dfrac{\\Delta x}{x} + |b|\\dfrac{\\Delta y}{y}$.',
          `L'exposant $${ex1}$ multiplie l'incertitude relative sur $${v1}$ : $${ex1} \\times ${D(r1)}\\,\\%$.`,
          `$\\dfrac{\\Delta ${formule.split(' ')[0]}}{${formule.split(' ')[0]}} = ${ex1} \\times ${D(r1)}\\,\\%${ex2 ? ` + ${D(r2)}\\,\\%` : ''} = ${D(ans)}\\,\\%$.`, inp(ans), 'Saisir le pourcentage sans le symbole %.');
      }
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
          `$${n * T}$ h $= ${n}$ demi-vie${n > 1 ? 's' : ''}.`,
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
    if (Math.random() < 0.5) return denombSante(t, id);
    const q = DEDICATED['sante-08'](Math.min(4, t + 1), id);
    if (q) { q.tier = t; q.chapterId = id; }
    return q;
  };

  // sante-11 : intégrales, valeur moyenne, aire sous la courbe des concentrations (AUC)
  DEDICATED['sante-11'] = function (t, id) {
    const k = t === 1 ? R(0, 1) : t === 2 ? R(0, 3) : R(2, 6);
    if (k === 0) {
      const a = pick([2, 4, 6, 8]), b0 = R(2, 7), B = R(2, 5);
      const v = a * B * B / 2 + b0 * B;
      return Q(id, t, 'Calcul d\'une intégrale', 'Calculer une intégrale à l\'aide d\'une primitive',
        `Calculer $\\displaystyle\\int_0^{${B}} (${a}x + ${b0})\\,\\mathrm{d}x$.`,
        `$${v}$`, [`$${a * B + b0}$`, `$${a * B * B + b0 * B}$`, `$${v - b0 * B}$`],
        `Une primitive de $${a}x + ${b0}$ est $F(x) = ${a / 2 === 1 ? '' : a / 2}x^2 + ${b0}x$.`,
        'L\'intégrale vaut $F(b) - F(a)$, avec ici $F(0) = 0$.',
        `$\\displaystyle\\int_0^{${B}} (${a}x + ${b0})\\,\\mathrm{d}x = \\left[${a / 2 === 1 ? '' : a / 2}x^2 + ${b0}x\\right]_0^{${B}} = ${a / 2 * B * B} + ${b0 * B} = ${v}$.`, String(v));
    }
    if (k === 1) {
      const a = pick([2, 4, 6, 10]), b0 = R(1, 9), B = pick([2, 4, 6]);
      const m = a * B / 2 + b0;
      const integ = a * B * B / 2 + b0 * B; // 10 fois l'intégrale de f sur [0 ; B]
      const coefT = a === 10 ? '' : D(a / 10);
      const primT = `${D(a / 20)}t^2 + ${D(b0 / 10)}t`;
      return Q(id, t, 'Valeur moyenne', 'Calculer la valeur moyenne d\'une fonction sur un intervalle',
        `La température (en °C, écart à $37$ °C) d'un patient est modélisée par $f(t) = ${coefT}t + ${D(b0 / 10)}$ pour $t \\in [0 ; ${B}]$ (en heures). Calculer la valeur moyenne de $f$ sur $[0 ; ${B}]$.`,
        `$${D(m / 10)}$`, [`$${D((a * B + b0) / 10)}$`, `$${D(m * B / 10)}$`, `$${D((a * B / 2) / 10)}$`],
        'La valeur moyenne de $f$ sur $[a ; b]$ est $\\dfrac{1}{b - a}\\displaystyle\\int_a^b f(t)\\,\\mathrm{d}t$.',
        `Une primitive de $f$ est $F(t) = ${primT}$.`,
        `$\\displaystyle\\int_0^{${B}} f(t)\\,\\mathrm{d}t = \\Big[${primT}\\Big]_0^{${B}} = ${D(integ / 10)}$, donc la valeur moyenne est $\\dfrac{${D(integ / 10)}}{${B}} = ${D(m / 10)}$.\nRemarque : pour une fonction affine, on retrouve la moyenne des valeurs aux bornes : $\\dfrac{f(0) + f(${B})}{2} = \\dfrac{${D(b0 / 10)} + ${D((a * B + b0) / 10)}}{2} = ${D(m / 10)}$.`, inp(m / 10));
    }
    if (k === 2) {
      const [C0, kk] = pick([[4, 0.5], [5, 0.25], [8, 0.4], [10, 0.2], [12, 0.25], [6, 0.5], [9, 0.3], [20, 0.4]]);
      const auc = rd(C0 / kk);
      return Q(id, t, 'Aire sous la courbe (AUC)', 'Calculer l\'aire sous la courbe d\'une concentration',
        `Après une injection intraveineuse, la concentration plasmatique d'un médicament est $C(t) = ${C0}e^{-${D(kk)}t}$ (en mg/L, $t$ en heures). On admet que l'aire sous la courbe totale est $\\displaystyle\\lim_{T \\to +\\infty} \\int_0^{T} C(t)\\,\\mathrm{d}t$. Calculer cette aire (en mg·h/L).`,
        `$${D(auc)}$`, [`$${D(C0 * kk)}$`, `$${D(C0 / kk / 2)}$`, `$${D(rd(C0 * Math.LN2 / kk, 2))}$`],
        `Une primitive de $e^{-kt}$ est $-\\dfrac{1}{k}e^{-kt}$.`,
        `$\\displaystyle\\int_0^{T} C(t)\\,\\mathrm{d}t = \\dfrac{${C0}}{${D(kk)}}\\left(1 - e^{-${D(kk)}T}\\right)$ ; faire tendre $T$ vers $+\\infty$.`,
        `$\\displaystyle\\int_0^{T} ${C0}e^{-${D(kk)}t}\\,\\mathrm{d}t = \\dfrac{${C0}}{${D(kk)}}\\left(1 - e^{-${D(kk)}T}\\right) \\xrightarrow[T \\to +\\infty]{} \\dfrac{${C0}}{${D(kk)}} = ${D(auc)}$ mg·h/L.`, inp(auc), 'Saisir le nombre seul.');
    }
    if (k === 3) {
      // méthode des trapèzes, pas de 1 h
      const ys = [R(4, 9) * 2]; for (let i = 1; i < 5; i++) ys.push(Math.max(1, ys[i - 1] - R(1, 3)));
      if ((ys[0] + ys[4]) % 2) ys[4] += 1;
      const area = (ys[0] + ys[4]) / 2 + ys[1] + ys[2] + ys[3];
      return Q(id, t, 'Méthode des trapèzes', 'Estimer une aire sous la courbe par la méthode des trapèzes',
        `On mesure la concentration d'un médicament (en mg/L) toutes les heures : $\\begin{array}{c|ccccc} t\\ (\\mathrm{h}) & 0 & 1 & 2 & 3 & 4 \\\\ \\hline C & ${ys.join(' & ')} \\end{array}$. Estimer l'aire sous la courbe entre $0$ et $4$ h par la méthode des trapèzes (en mg·h/L).`,
        `$${D(area)}$`, [`$${ys.reduce((s, y) => s + y, 0)}$`, `$${ys[0] + ys[1] + ys[2] + ys[3]}$`, `$${D(area + (ys[0] + ys[4]) / 2)}$`],
        'Chaque trapèze a une largeur de 1 h et une aire égale à la moyenne de ses deux hauteurs.',
        'Les mesures extrêmes comptent pour moitié, les mesures intermédiaires en entier.',
        `$\\mathcal{A} \\approx 1 \\times \\left(\\dfrac{${ys[0]} + ${ys[4]}}{2} + ${ys[1]} + ${ys[2]} + ${ys[3]}\\right) = ${D(area)}$ mg·h/L.`, inp(area));
    }
    if (k === 4) {
      // clairance = dose / AUC
      const [dose, auc] = pick([[500, 50], [400, 80], [600, 40], [250, 25], [1000, 125], [300, 60]]);
      const cl = dose / auc;
      return Q(id, t, 'Clairance', 'Exploiter une aire sous la courbe : clairance',
        `Après l'injection intraveineuse d'une dose de $${dose}$ mg, l'aire sous la courbe des concentrations vaut $${auc}$ mg·h/L. La clairance totale est $CL = \\dfrac{\\text{dose}}{\\text{AUC}}$. Calculer $CL$ en L/h.`,
        `$${D(cl)}$`, [`$${D(auc / dose)}$`, `$${dose * auc}$`, `$${D(cl * 10)}$`],
        'Appliquer la formule donnée avec des unités cohérentes.',
        'mg divisé par mg·h/L donne des L/h.',
        `$CL = \\dfrac{${dose}}{${auc}} = ${D(cl)}$ L/h.`, inp(cl), 'Saisir le nombre seul, en L/h.');
    }
    if (k === 6) {
      // biodisponibilité : F = AUC orale / AUC IV (même dose), puis CL = F × D / AUC
      if (Math.random() < 0.5) {
        const [aIV, aOr] = pick([[50, 40], [80, 60], [40, 24], [120, 90], [60, 30], [100, 70], [25, 20], [90, 54]]);
        const F = rd(aOr / aIV);
        return Q(id, t, 'Biodisponibilité', 'Calculer une biodisponibilité à partir de deux aires sous la courbe',
          `Un même patient reçoit la même dose d'un médicament, une fois par voie intraveineuse, une autre fois par voie orale. Les aires sous la courbe des concentrations valent $${aIV}$ mg·h/L par voie intraveineuse et $${aOr}$ mg·h/L par voie orale. Calculer la biodisponibilité $F$ du médicament par voie orale (nombre décimal entre $0$ et $1$).`,
          // Distracteurs dans ]0 ; 1[ : fraction perdue (1 - F), rapport à la somme des aires, moitié de F, écart des aires rapporté à l'aire orale
          `$${D(F)}$`, distinct(F, [rd(1 - F), rd(aOr / (aIV + aOr), 2), rd(F / 2, 2), rd((aIV - aOr) / aOr, 2), rd(F * F, 2), rd(aOr / 100, 2), rd(F > 0.5 ? F - 0.1 : F + 0.1, 2)]).filter((v) => v > 0 && v < 1).slice(0, 3).map((v) => `$${D(v)}$`),
          'La biodisponibilité est la fraction de la dose qui atteint la circulation générale : on compare les aires sous la courbe obtenues à dose égale par voie orale et par voie intraveineuse (pour laquelle $F = 1$).',
          `$F = \\dfrac{\\text{AUC}_{\\text{orale}}}{\\text{AUC}_{\\text{IV}}}$, avec $\\text{AUC}_{\\text{orale}} = ${aOr}$ et $\\text{AUC}_{\\text{IV}} = ${aIV}$.`,
          `$F = \\dfrac{${aOr}}{${aIV}} = ${D(F)}$ : seuls $${D(rd(F * 100))}\\,\\%$ de la dose prise par voie orale atteignent la circulation générale.`, inp(F), 'Saisir un nombre décimal.');
      }
      const [F, dose, auc] = pick([[0.8, 500, 40], [0.5, 400, 25], [0.6, 300, 36], [0.75, 400, 60], [0.9, 1000, 150], [0.4, 250, 20], [0.7, 600, 84]]);
      const cl = rd(F * dose / auc);
      return Q(id, t, 'Clairance et biodisponibilité', 'Calculer une clairance après une prise par voie orale',
        `Un patient prend par voie orale une dose de $${dose}$ mg d'un médicament dont la biodisponibilité est $F = ${D(F)}$. L'aire sous la courbe des concentrations vaut $${auc}$ mg·h/L. Calculer la clairance totale $CL$ en L/h.`,
        `$${D(cl)}$`, distinct(cl, [rd(dose / auc, 2), rd(dose / (F * auc), 2), rd(F * auc / dose, 3)]).slice(0, 3).map((v) => `$${D(v)}$`),
        'Par voie orale, seule la fraction $F$ de la dose atteint la circulation générale : la dose effective est $F \\times D$.',
        `$CL = \\dfrac{F \\times D}{\\text{AUC}}$, avec $F \\times D = ${D(F)} \\times ${dose} = ${D(rd(F * dose))}$ mg.`,
        `$CL = \\dfrac{${D(rd(F * dose))}}{${auc}} = ${D(cl)}$ L/h.`, inp(cl), 'Saisir le nombre seul, en L/h.');
    }
    // k === 5 : aire entre 0 et n demi-vies
    const n = R(1, 3), A = pick([8, 16, 24, 40, 80]);
    const part = rd(A * (1 - 2 ** -n));
    return Q(id, t, 'Aire et demi-vie', 'Calculer une intégrale d\'exponentielle et l\'interpréter',
      `La concentration d'un médicament est $C(t) = C_0e^{-kt}$, avec une demi-vie $T_{1/2} = \\dfrac{\\ln 2}{k}$, et l'aire totale sous la courbe vaut $\\dfrac{C_0}{k} = ${A}$ mg·h/L. Calculer l'aire sous la courbe entre $t = 0$ et $t = ${n === 1 ? 'T_{1/2}' : n + 'T_{1/2}'}$.`,
      `$${D(part)}$`, [`$${D(A / 2 ** n)}$`, `$${D(A * n / (n + 1))}$`, `$${D(A / 2)}$`].filter((x) => x !== `$${D(part)}$`),
      `$\\displaystyle\\int_0^{T} C_0e^{-kt}\\,\\mathrm{d}t = \\dfrac{C_0}{k}\\left(1 - e^{-kT}\\right)$.`,
      `Pour $T = ${n === 1 ? '' : n}T_{1/2}$, $e^{-kT} = 2^{-${n}}$.`,
      `$\\mathcal{A} = ${A}\\left(1 - \\dfrac{1}{${2 ** n}}\\right) = ${D(part)}$ mg·h/L : ${n === 1 ? 'la moitié' : 'l\'essentiel'} de l'exposition totale.`, inp(part));
  };

  // pass-11 : corrélation et régression linéaire
  DEDICATED['pass-11'] = function (t, id) {
    const k = t === 1 ? pick([0, 1, 6, 7]) : t === 2 ? R(0, 3) : R(2, 5);
    if (k === 6) {
      // Point moyen : moyenne des ordonnées (entière) d'un petit nuage
      let ys, ybm, essai = 0;
      const x0 = pick([1, 2, 5, 10]), dx = pick([1, 2, 5]);
      const xs = [0, 1, 2, 3, 4].map((i) => x0 + i * dx);
      const base = R(65, 85);
      do {
        // la fréquence cardiaque redescend après l'effort
        ys = xs.map((_, i) => base + 30 - 6 * i + R(-4, 4));
        ybm = ys.reduce((s2, y) => s2 + y, 0) / 5; essai++;
      } while (!Number.isInteger(ybm) && essai < 300);
      if (!Number.isInteger(ybm)) { ys[4] -= ys.reduce((s2, y) => s2 + y, 0) % 5; ybm = ys.reduce((s2, y) => s2 + y, 0) / 5; }
      const xbm = x0 + 2 * dx;
      const sy = ys.reduce((s2, y) => s2 + y, 0);
      return Q(id, t, 'Point moyen', 'Calculer les coordonnées du point moyen d\'un nuage',
        `On mesure la fréquence cardiaque $y$ (en battements par minute) d'un patient $x$ minutes après un effort : $$\\begin{array}{c|ccccc} x & ${xs.join(' & ')} \\\\ \\hline y & ${ys.join(' & ')} \\end{array}$$ Le point moyen du nuage est $G(\\bar x ; \\bar y)$, avec $\\bar x = ${xbm}$. Calculer $\\bar y$.`,
        `$${ybm}$`, distinct(ybm, [ys[2], rd((Math.min(...ys) + Math.max(...ys)) / 2, 1), rd(sy / 4, 2), xbm]).slice(0, 3).map((v) => `$${D(v)}$`),
        'Le point moyen a pour coordonnées la moyenne des abscisses et la moyenne des ordonnées.',
        `Somme des ordonnées : $${ys.join(' + ')} = ${sy}$.`,
        `$\\bar y = \\dfrac{${sy}}{5} = ${ybm}$, donc $G(${xbm} ; ${ybm})$. La droite de régression passe par ce point.`, String(ybm));
    }
    if (k === 7) {
      // Prédiction par la droite de régression
      const [ctx, a, b, xs0, ux, uy] = pick([
        ['la pression artérielle systolique $y$ (en mmHg) en fonction de l\'âge $x$ (en années)', pick([0.4, 0.5, 0.6, 0.8]), pick([95, 100, 105, 110]), [30, 35, 40, 45, 50, 55, 60, 65, 70], 'ans', 'mmHg'],
        // droite passant par (170 ; 70) : masses plausibles de 155 à 185 cm
        ((am) => ['la masse $y$ (en kg) en fonction de la taille $x$ (en cm)', am, rd(70 - 170 * am), [155, 160, 165, 175, 180, 185], 'cm', 'kg'])(pick([0.6, 0.8, 0.9, 1])),
        ['la baisse de glycémie $y$ (en mg/dL) en fonction de la dose $x$ (en mg)', pick([0.15, 0.2, 0.25, 1.2]), pick([2, 3, 4, 5]), [10, 20, 30, 40, 50], 'mg', 'mg/dL']]);
      const x1 = pick(xs0);
      const ans = rd(a * x1 + b, 4);
      return Q(id, t, 'Prédiction', 'Utiliser une droite de régression pour estimer une valeur',
        `Sur un échantillon de patients, la droite de régression de ${ctx} a pour équation $y = ${D(a)}\\,x ${b < 0 ? '-' : '+'} ${Math.abs(b)}$. Quelle valeur de $y$ cette droite prédit-elle pour $x = ${x1}$ ${ux} ?`,
        `$${D(ans)}$`, distinct(ans, [rd(a * x1, 4), rd(a + b * x1, 4), rd((x1 - b) / a, 2), rd(a * x1 - b, 4)]).slice(0, 3).map((v) => `$${D(v)}$`),
        'Il suffit de remplacer $x$ par la valeur donnée dans l\'équation de la droite.',
        `$y = ${D(a)} \\times ${x1} ${b < 0 ? '-' : '+'} ${Math.abs(b)}$, avec $${D(a)} \\times ${x1} = ${D(rd(a * x1, 4))}$.`,
        `$y = ${D(a)} \\times ${x1} ${b < 0 ? '-' : '+'} ${Math.abs(b)} = ${D(ans)}$ ${uy}. Ce n'est qu'une estimation : les patients se répartissent autour de la droite.`, inp(ans), `Saisir le nombre seul, en ${uy}.`);
    }
    if (k === 0 || k === 1) {
      const [vx, a] = pick([[2, 1.5], [4, 0.5], [5, 2], [2, -1.5], [4, 3], [10, 0.4], [5, -1.2], [8, 0.25], [4, -0.75], [6, 1.5], [3, 2.5], [12, -0.5], [9, 0.8], [16, 1.25]]);
      const cov = rd(a * vx), xb = R(2, 20), yb = R(10, 90);
      const b = rd(yb - a * xb);
      if (k === 0) {
        return Q(id, t, 'Pente de la droite de régression', 'Calculer la pente de la droite des moindres carrés',
          `Pour une série $(x_i ; y_i)$, on a $\\mathrm{cov}(x, y) = ${D(cov)}$ et $s_x^2 = ${vx}$ (variance de $x$). Quelle est la pente $a$ de la droite de régression de $y$ en $x$ ?`,
          `$${D(a)}$`, [`$${D(rd(vx / cov))}$`, `$${D(rd(cov * vx))}$`, `$${D(rd(cov / Math.sqrt(vx), 3))}$`].filter((x) => x !== `$${D(a)}$`),
          'La pente des moindres carrés est un quotient : covariance et variance de la variable explicative.',
          '$a = \\dfrac{\\mathrm{cov}(x, y)}{s_x^2}$.',
          `$a = \\dfrac{${D(cov)}}{${vx}} = ${D(a)}$.`, inp(a));
      }
      return Q(id, t, 'Ordonnée à l\'origine', 'Utiliser le point moyen pour déterminer la droite de régression',
        `La droite de régression de $y$ en $x$ a pour pente $a = ${D(a)}$, et le point moyen du nuage est $G(${xb} ; ${yb})$. Calculer l'ordonnée à l'origine $b$ de cette droite.`,
        `$${D(b)}$`, [`$${D(rd(yb + a * xb))}$`, `$${D(rd(xb - a * yb))}$`, `$${D(rd(yb / a))}$`],
        'La droite des moindres carrés passe toujours par le point moyen.',
        `Écrire $${yb} = ${D(a)} \\times ${xb} + b$.`,
        `$b = \\bar y - a\\bar x = ${yb} - ${a < 0 ? '(' + D(a) + ')' : D(a)} \\times ${xb} = ${D(b)}$.`, inp(b));
    }
    if (k === 2) {
      // [variable x (unité), variable y (unité), s_x, s_y, r] : ordres de grandeur réalistes
      const [vx, vy, sx, sy, r] = pick([
        ['l\'âge $x$ (en années)', 'la pression artérielle systolique $y$ (en mmHg)', 10, 12, 0.6],
        ['l\'âge $x$ (en années)', 'la pression artérielle systolique $y$ (en mmHg)', 12, 15, 0.75],
        ['l\'âge $x$ (en années)', 'la pression artérielle systolique $y$ (en mmHg)', 8, 16, 0.5],
        ['la durée hebdomadaire d\'activité physique $x$ (en heures)', 'la fréquence cardiaque au repos $y$ (en battements par minute)', 2, 8, -0.6],
        ['la durée hebdomadaire d\'activité physique $x$ (en heures)', 'la fréquence cardiaque au repos $y$ (en battements par minute)', 3, 10, -0.85],
        ['la durée hebdomadaire d\'activité physique $x$ (en heures)', 'la fréquence cardiaque au repos $y$ (en battements par minute)', 2.5, 6, -0.5],
        ['l\'indice de masse corporelle $x$ (en kg/m²)', 'la glycémie à jeun $y$ (en mg/dL)', 4, 12, 0.45],
        ['l\'indice de masse corporelle $x$ (en kg/m²)', 'la glycémie à jeun $y$ (en mg/dL)', 5, 15, 0.8],
        ['l\'indice de masse corporelle $x$ (en kg/m²)', 'la glycémie à jeun $y$ (en mg/dL)', 3, 10, 0.7]]);
      const cov = rd(r * sx * sy);
      return Q(id, t, 'Coefficient de corrélation', 'Calculer un coefficient de corrélation linéaire',
        `Sur un échantillon de patients, ${vx} et ${vy} ont pour écarts types $s_x = ${D(sx)}$ et $s_y = ${D(sy)}$, et $\\mathrm{cov}(x, y) = ${D(cov)}$. Calculer le coefficient de corrélation linéaire $r$.`,
        `$${D(r)}$`, [`$${D(-r)}$`, `$${D(rd(cov / (sx * sx), 3))}$`, `$${D(rd(r * r, 4))}$`],
        '$r$ est la covariance divisée par le produit des écarts types.',
        `$r = \\dfrac{\\mathrm{cov}(x, y)}{s_x s_y}$, ici $s_x s_y = ${D(rd(sx * sy))}$.`,
        `$r = \\dfrac{${D(cov)}}{${D(rd(sx * sy))}} = ${D(r)}$ : liaison linéaire ${r > 0 ? 'positive' : 'négative'} ${Math.abs(r) >= 0.8 ? 'forte' : 'modérée'}.`, inp(r));
    }
    if (k === 3) {
      const r = pick([0.9, -0.8, 0.7, 0.6, -0.5, 0.95, -0.3]);
      const r2 = rd(r * r * 100, 2);
      return Q(id, t, 'Coefficient de détermination', 'Interpréter le coefficient de détermination',
        `Le coefficient de corrélation entre la dose d'un traitement et la baisse de la glycémie vaut $r = ${D(r)}$. Quel pourcentage de la variance de la baisse de glycémie est expliqué par la régression linéaire sur la dose ?`,
        `$${D(r2)}\\,\\%$`, [`$${D(Math.abs(r) * 100)}\\,\\%$`, `$${D(100 - r2)}\\,\\%$`, `$${D(rd(Math.sqrt(Math.abs(r)) * 100, 1))}\\,\\%$`],
        'La part de variance expliquée est le coefficient de détermination.',
        'Le coefficient de détermination vaut $r^2$.',
        `$r^2 = (${D(r)})^2 = ${D(rd(r * r, 4))}$, soit **$${D(r2)}\\,\\%$** de la variance expliquée.`, inp(r2), 'Saisir le pourcentage sans le symbole %.');
    }
    if (k === 4) {
      // données brutes : x = 1..5, résidus orthogonaux
      const a = pick([-3, -2, 2, 3, 4]), yb = R(12, 30), s = R(0, 1);
      const e = [1, -2, 2, -2, 1].map((v) => v * s);
      const ys = [1, 2, 3, 4, 5].map((x, i) => yb + a * (x - 3) + e[i]);
      const askB = Math.random() < 0.5;
      const b = yb - 3 * a;
      const sxy = [1, 2, 3, 4, 5].reduce((acc, x, i) => acc + (x - 3) * (ys[i] - yb), 0);
      return Q(id, t, askB ? 'Droite des moindres carrés' : 'Pente à partir des données', 'Déterminer une droite de régression à partir des données',
        `On relève la masse $y$ (en g) d'une culture au jour $x$ : $\\begin{array}{c|ccccc} x & 1 & 2 & 3 & 4 & 5 \\\\ \\hline y & ${ys.join(' & ')} \\end{array}$. Déterminer ${askB ? 'l\'ordonnée à l\'origine $b$' : 'la pente $a$'} de la droite des moindres carrés $y = ax + b$.`,
        askB ? `$${b}$` : `$${a}$`, askB ? [`$${yb}$`, `$${yb + 3 * a}$`, `$${ys[0]}$`] : [`$${D(sxy / 5)}$`, `$${ys[4] - ys[3]}$`, `$${-a}$`],
        'Calculer d\'abord les moyennes $\\bar x$ et $\\bar y$.',
        '$a = \\dfrac{\\sum (x_i - \\bar x)(y_i - \\bar y)}{\\sum (x_i - \\bar x)^2}$, puis $b = \\bar y - a\\bar x$.',
        `$\\bar x = 3$, $\\bar y = ${yb}$, $\\sum (x_i - \\bar x)(y_i - \\bar y) = ${sxy}$, $\\sum (x_i - \\bar x)^2 = 10$, donc $a = ${a}$ et $b = ${yb} - ${a < 0 ? '(' + a + ')' : a} \\times 3 = ${b}$.`, String(askB ? b : a));
    }
    // k === 5 : interprétation (QCM seul)
    const ctx = pick([
      ['le nombre de cigognes et le nombre de naissances dans plusieurs communes', 'la taille des communes (facteur de confusion)'],
      ['la consommation de glaces et le nombre de noyades selon les mois', 'la température (facteur de confusion)'],
      ['le nombre de médecins et le nombre de décès dans plusieurs villes', 'la population des villes (facteur de confusion)'],
      ['la pointure et le score en lecture chez des enfants de 6 à 11 ans', 'l\'âge des enfants (facteur de confusion)']
    ]);
    const r = pick([0.82, 0.88, 0.91, 0.76]);
    return Q(id, t, 'Corrélation et causalité', 'Ne pas confondre corrélation et causalité',
      `Une étude trouve un coefficient de corrélation $r = ${D(r)}$ entre ${ctx[0]}. Quelle conclusion est correcte ?`,
      `La liaison linéaire est forte, mais elle peut s'expliquer par ${ctx[1]} : on ne peut pas conclure à une causalité.`,
      ['La première variable cause la seconde, puisque $r$ est proche de 1.',
        `$${D(r * 100)}\\,\\%$ des individus vérifient la relation.`,
        'La corrélation est faible, car $r$ est inférieur à 1.'],
      'Une corrélation mesure une liaison statistique, pas un mécanisme.',
      'Cherchez une troisième variable qui pourrait agir sur les deux.',
      `$r = ${D(r)}$ traduit une liaison linéaire forte, mais une étude observationnelle ne prouve pas la causalité : ${ctx[1]} peut expliquer la liaison.`, null);
  };

  // ===========================================================================
  // Familles en contexte de santé ajoutées lors de la correction de l'audit (contextes, notions du cours)
  // ===========================================================================
  const fact = (n) => (n <= 1 ? 1 : n * fact(n - 1));
  const Cnk = (n, k) => (k < 0 || k > n ? 0 : Math.round(fact(n) / (fact(k) * fact(n - k))));
  const Ank = (n, k) => Math.round(fact(n) / fact(n - k));
  /** Entier avec espace fine des milliers (mode math) */
  const NB = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '\\,');
  const gcdI = (a, b) => (b ? gcdI(b, a % b) : Math.abs(a) || 1);
  /** Fraction réduite : [LaTeX, saisie] */
  const FR = (a, b) => {
    const g = gcdI(a, b), n = a / g, d = b / g;
    return d === 1 ? [String(n), String(n)] : [`\\dfrac{${n}}{${d}}`, `${n}/${d}`];
  };
  /** Distracteurs numériques distincts de la réponse et entre eux */
  const distinct = (ans, list) => list.filter((v, i) => Number.isFinite(v) && Math.abs(v - ans) > 1e-9 && list.findIndex((w) => Math.abs(w - v) < 1e-9) === i);
  /**
   * Distracteurs de probabilité affichés au millième (0,xxx) : strictement compris entre 0 et 1 APRÈS arrondi
   * (ni « 0,000 » ni « 1,000 »), distincts à l'affichage, écartés d'au moins minGap de la réponse ;
   * complétés si besoin par la réponse décalée de ±0,05, ±0,1, ±0,02, ±0,2 (jamais de « probabilité » hors de ]0 ; 1[).
   */
  function optsMil(ans, cands, minGap) {
    const f3 = (x) => rd(x, 3).toFixed(3).replace('.', '{,}');
    const out = [], seen = new Set([f3(ans)]);
    const add = (v) => {
      if (out.length >= 3 || !Number.isFinite(v)) return;
      const r = rd(v, 3), str = f3(v);
      if (r > 0 && r < 1 && Math.abs(r - rd(ans, 3)) >= minGap - 1e-9 && !seen.has(str)) { seen.add(str); out.push(`$${str}$`); }
    };
    cands.forEach(add);
    [0.05, -0.05, 0.1, -0.1, 0.02, -0.02, 0.2, -0.2].forEach((d) => add(ans + d));
    return out;
  }

  /** pass-02 : dénombrement en contexte de santé */
  function denombSante(t, id) {
    const fam = t === 1 ? pick(['perm', 'adn', 'comb']) : t === 2 ? pick(['comb', 'arr', 'adn', 'perm'])
      : pick(['comb', 'arr', 'aumoins', 'aumoins', 'tubes', 'tubes']);
    if (fam === 'perm') {
      const n = R(4, 8), N = fact(n);
      return Q(id, t, 'Ordre de passage', 'Dénombrer des permutations',
        `$${n}$ patients attendent leur consultation. Combien d'ordres de passage différents le médecin peut-il choisir ?`,
        `$${NB(N)}$`, distinct(N, [fact(n - 1), n * n, n * (n + 1) / 2]).map((v) => `$${NB(v)}$`),
        `Un ordre de passage est une permutation des $${n}$ patients.`,
        `Il y a $${n}$ choix pour le premier patient, puis $${n - 1}$ pour le deuxième, et ainsi de suite.`,
        `$${n}! = ${Array.from({ length: n }, (_, i) => n - i).join(' \\times ')} = ${NB(N)}$ ordres de passage.`, String(N));
    }
    if (fam === 'adn') {
      const k = R(3, 7), N = 4 ** k;
      return Q(id, t, 'Séquences d\'ADN', 'Dénombrer des listes (p-uplets)',
        `Une séquence d'ADN est une suite de nucléotides, chacun portant l'une des quatre bases A, C, G ou T. Combien de séquences différentes de $${k}$ nucléotides existe-t-il ?`,
        `$${NB(N)}$`, distinct(N, [4 * k, k ** 4, 4 ** (k - 1), Cnk(k + 3, 3)]).slice(0, 3).map((v) => `$${NB(v)}$`),
        'Chaque position de la séquence se choisit indépendamment des autres, et une même base peut se répéter.',
        `Il y a $4$ choix pour chacune des $${k}$ positions.`,
        `On compte les $${k}$-uplets de l'ensemble $\\{A, C, G, T\\}$ : $4^{${k}} = ${NB(N)}$ séquences${k === 3 ? ' (ce sont les $64$ codons du code génétique)' : ''}.`, String(N));
    }
    if (fam === 'comb') {
      const n = R(8, 15), k = R(2, 4), N = Cnk(n, k);
      return Q(id, t, 'Groupe de patients', 'Dénombrer des combinaisons',
        `Pour un essai clinique, on doit choisir $${k}$ patients parmi $${n}$ volontaires, sans tenir compte de l'ordre du choix. Combien de groupes différents peut-on former ?`,
        `$${NB(N)}$`, distinct(N, [Ank(n, k), n * k, Cnk(n, k - 1), n ** k]).slice(0, 3).map((v) => `$${NB(v)}$`),
        `Un groupe est une partie à $${k}$ éléments d'un ensemble à $${n}$ éléments : l'ordre ne compte pas.`,
        `Calculer $\\dbinom{${n}}{${k}} = \\dfrac{${n}!}{${k}!\\,${n - k}!}$.`,
        `$\\dbinom{${n}}{${k}} = \\dfrac{${Array.from({ length: k }, (_, i) => n - i).join(' \\times ')}}{${Array.from({ length: k }, (_, i) => k - i).join(' \\times ')}} = ${NB(N)}$ groupes.`, String(N));
    }
    if (fam === 'arr') {
      const n = R(6, 12), k = pick([2, 3]), N = Ank(n, k);
      return Q(id, t, 'Tableau de garde', 'Dénombrer des arrangements',
        `Un service hospitalier compte $${n}$ internes. On désigne un interne de garde le samedi, un autre le dimanche${k === 3 ? ' et un troisième le lundi' : ''}, ${k === 3 ? 'les trois' : 'les deux'} internes étant différents. Combien de tableaux de garde sont possibles ?`,
        `$${NB(N)}$`, distinct(N, [Cnk(n, k), n ** k, n * k]).map((v) => `$${NB(v)}$`),
        `L'ordre compte (samedi, dimanche${k === 3 ? ', lundi' : ''}) et un interne ne peut pas être choisi deux fois : c'est un arrangement.`,
        `Il y a $${n}$ choix pour le samedi, puis $${n - 1}$ pour le dimanche${k === 3 ? `, puis $${n - 2}$ pour le lundi` : ''}.`,
        `$A_{${n}}^{${k}} = ${Array.from({ length: k }, (_, i) => n - i).join(' \\times ')} = ${NB(N)}$ tableaux de garde.`, String(N));
    }
    if (fam === 'aumoins') {
      const m = R(2, 5), i = R(4, 8), k = pick([2, 3]);
      const tot = Cnk(m + i, k), sans = Cnk(i, k), N = tot - sans;
      return Q(id, t, 'Au moins un médecin', 'Dénombrer en passant par le complémentaire',
        `Une équipe de $${k}$ soignants est choisie parmi $${m}$ médecins et $${i}$ infirmiers (l'ordre ne compte pas). Combien d'équipes comportent au moins un médecin ?`,
        `$${NB(N)}$`, distinct(N, [tot, sans, m * Cnk(m + i - 1, k - 1)]).map((v) => `$${NB(v)}$`),
        'Compter toutes les équipes, puis retirer celles qui ne comportent aucun médecin.',
        `Il y a $\\dbinom{${m + i}}{${k}}$ équipes en tout et $\\dbinom{${i}}{${k}}$ équipes formées uniquement d'infirmiers.`,
        `$\\dbinom{${m + i}}{${k}} - \\dbinom{${i}}{${k}} = ${tot} - ${sans} = ${N}$ équipes.`, String(N));
    }
    // tubes : probabilité par dénombrement (tirage simultané de deux tubes)
    const n = R(8, 15), c = R(2, 4), tot = Cnk(n, 2);
    const aucun = Math.random() < 0.5;
    const fav = aucun ? Cnk(n - c, 2) : c * (n - c);
    const [ansT, ansI] = FR(fav, tot);
    const alt = aucun ? [[(n - c) ** 2, n * n], [c * (n - c), tot], [tot - fav, tot]] : [[c * (n - c), n * n], [c, n], [tot - fav, tot]];
    const dis = alt.filter(([a, b]) => Math.abs(a / b - fav / tot) > 1e-9).map(([a, b]) => `$${FR(a, b)[0]}$`);
    return Q(id, t, 'Tubes contaminés', 'Calculer une probabilité par dénombrement',
      `Un lot de $${n}$ tubes de prélèvement contient $${c}$ tubes contaminés. On prélève simultanément et au hasard $2$ tubes. Quelle est la probabilité ${aucun ? 'qu\'aucun des deux tubes ne soit contaminé' : 'qu\'un seul des deux tubes soit contaminé'} ? Donner le résultat sous forme de fraction irréductible.`,
      `$${ansT}$`, dis,
      `Les $\\dbinom{${n}}{2}$ tirages possibles sont équiprobables : compter les tirages favorables.`,
      aucun ? `Les tirages favorables sont les paires choisies parmi les $${n - c}$ tubes sains.` : `Un tirage favorable associe un des $${c}$ tubes contaminés à un des $${n - c}$ tubes sains.`,
      `$\\dbinom{${n}}{2} = ${tot}$ tirages possibles et ${aucun ? `$\\dbinom{${n - c}}{2} = ${fav}$` : `$${c} \\times ${n - c} = ${fav}$`} tirages favorables, donc $p = \\dfrac{${fav}}{${tot}} = ${ansT}$.`, ansI,
      'Saisir la fraction irréductible, par exemple 7/15.');
  }

  /** sante-09 : loi binomiale en contexte de santé */
  const BIN_CTX = [
    { intro: 'Un traitement provoque un effet indésirable chez un patient avec la probabilité', pop: 'patients traités', succ: 'présentant un effet indésirable', ev: 'le patient présente un effet indésirable', one: 'patient présentant un effet indésirable', ps: [0.05, 0.1, 0.15, 0.2] },
    { intro: 'La probabilité qu\'un donneur de sang soit du groupe O est', pop: 'donneurs', succ: 'du groupe O', ev: 'le donneur est du groupe O', one: null, ps: [0.4, 0.45] },
    { intro: 'Un vaccin protège une personne vaccinée avec la probabilité', pop: 'personnes vaccinées', succ: 'effectivement protégées', ev: 'la personne est effectivement protégée', one: null, ps: [0.8, 0.9, 0.95] },
    { intro: 'Un test de dépistage donne un résultat faussement positif chez une personne saine avec la probabilité', pop: 'personnes saines testées', succ: 'ayant un résultat faussement positif', ev: 'le résultat de la personne est faussement positif', one: 'résultat faussement positif', ps: [0.02, 0.05, 0.1] }
  ];
  function binomSante(t, id) {
    const fam = t === 1 ? pick(['esp', 'esp', 'reco'])
      : t === 2 ? pick(['esp', 'var', 'pk', 'pk', 'reco'])
        : t === 3 ? pick(['pk', 'aumoins', 'aumoins', 'le1', 'var'])
          : pick(['aumoins', 'le1', 'le1', 'nmin', 'nmin']);
    // calculs de probabilités sur 5 à 10 tirages : succès peu fréquent (p < 0,5), sinon résultats arrondis à 0 ou 1
    const c = pick(fam === 'nmin' ? BIN_CTX.filter((x) => x.one) : ['pk', 'aumoins', 'le1'].includes(fam) ? BIN_CTX.filter((x) => x.ps[0] < 0.5) : BIN_CTX), p = pick(c.ps), q = rd(1 - p);
    const big = fam === 'esp' || fam === 'var' || fam === 'reco';
    const n = big ? pick([20, 40, 50, 60, 80, 100, 120, 150, 200]) : R(5, 10);
    const ctx = `${c.intro} $${D(p)}$. On choisit au hasard, de façon indépendante, $${n}$ ${c.pop} et on note $X$ le nombre de ${c.pop} ${c.succ}.`;
    const ctxN = `${c.intro} $${D(p)}$. On choisit au hasard, de façon indépendante, $n$ ${c.pop}.`;
    const B = `\\mathcal{B}(${n}\\,;\\,${D(p)})`;
    // Arrondi au millième : trois décimales affichées (0,010 et non 0,01)
    const F3 = (x) => rd(x, 3).toFixed(3).replace('.', '{,}');
    /** Distracteurs affichés au millième : distincts, différents de la réponse, ni nuls ni supérieurs à 1 */
    const opts = (ans, cands) => optsMil(ans, cands, 0.002);
    if (fam === 'reco') {
      return Q(id, t, 'Reconnaître une loi binomiale', 'Justifier qu\'une variable aléatoire suit une loi binomiale',
        `${ctx} Quelle est la loi de $X$ ?`,
        `$${B}$`, [`$\\mathcal{B}(${n}\\,;\\,${D(q)})$`, `$\\mathcal{B}(${D(p)}\\,;\\,${n})$`, `La loi uniforme sur $\\{0, 1, \\dots, ${n}\\}$`],
        'Repérer une épreuve à deux issues, répétée de façon identique et indépendante.',
        `Le succès est « ${c.ev} », de probabilité $${D(p)}$.`,
        `On répète $${n}$ fois, de façon indépendante, une épreuve de Bernoulli dont le succès est « ${c.ev} », de probabilité $${D(p)}$ : $X$ compte les succès, donc $X$ suit la loi $${B}$.`, null);
    }
    if (fam === 'esp' || fam === 'var') {
      const E = rd(n * p), V = rd(n * p * q);
      const isE = fam === 'esp';
      return Q(id, t, isE ? 'Espérance d\'une loi binomiale' : 'Variance d\'une loi binomiale', isE ? 'Calculer et interpréter l\'espérance d\'une loi binomiale' : 'Calculer la variance d\'une loi binomiale',
        `${ctx} Calculer ${isE ? 'l\'espérance $E(X)$' : 'la variance $V(X)$'}.`,
        `$${D(isE ? E : V)}$`, (isE ? distinct(E, [rd(n * q), V, rd(n * p * p)]) : distinct(V, [E, rd(n * p * p), rd(n * q)])).map((v) => `$${D(v)}$`),
        `$X$ suit la loi binomiale $${B}$.`,
        isE ? '$E(X) = np$.' : '$V(X) = np(1 - p)$.',
        isE ? `$E(X) = ${n} \\times ${D(p)} = ${D(E)}$ : sur un grand nombre de groupes de $${n}$ ${c.pop}, le nombre moyen de ${c.pop} ${c.succ} par groupe est $${D(E)}$.`
          : `$V(X) = ${n} \\times ${D(p)} \\times ${D(q)} = ${D(V)}$.`,
        inp(isE ? E : V));
    }
    if (fam === 'pk') {
      let k = R(0, 3), P = Cnk(n, k) * p ** k * q ** (n - k), guard = 0;
      while (P < 0.01 && guard++ < 20) { k = R(0, 3); P = Cnk(n, k) * p ** k * q ** (n - k); }
      const P3 = rd(P, 3);
      return Q(id, t, 'Probabilité d\'une loi binomiale', 'Calculer $P(X = k)$ pour une loi binomiale',
        `${ctx} Calculer $P(X = ${k})$, arrondie au millième.`,
        // Distracteurs : oubli du coefficient binomial, oubli de (1 - p)^(n - k), p et 1 - p échangés, P(X = k + 1), P(X = k - 1)
        `$${F3(P3)}$`, opts(P3, [p ** k * q ** (n - k), Cnk(n, k) * p ** k, Cnk(n, k) * q ** k * p ** (n - k), Cnk(n, k + 1) * p ** (k + 1) * q ** (n - k - 1), Cnk(n, k - 1) * p ** (k - 1) * q ** (n - k + 1), 1 - P3]),
        `$X$ suit la loi $${B}$ et $P(X = k) = \\dbinom{n}{k}p^k(1 - p)^{n - k}$.`,
        `Ici $\\dbinom{${n}}{${k}} = ${Cnk(n, k)}$.`,
        `$P(X = ${k}) = \\dbinom{${n}}{${k}} \\times ${D(p)}^{${k}} \\times ${D(q)}^{${n - k}} \\approx ${F3(P3)}$.`, inp(P3, 3));
    }
    if (fam === 'aumoins') {
      const P3 = rd(1 - q ** n, 3);
      return Q(id, t, 'Au moins un succès', 'Calculer la probabilité d\'au moins un succès',
        `${ctx} Calculer $P(X \\geqslant 1)$, arrondie au millième.`,
        `$${F3(P3)}$`, opts(P3, [q ** n, 1 - p ** n, n * p <= 1 ? n * p : n * p * q ** (n - 1), 1 - q ** (n - 1), 1 - q ** (n + 1), n * p * q ** (n - 1)]),
        'Passer par l\'événement contraire : $P(X \\geqslant 1) = 1 - P(X = 0)$.',
        `$P(X = 0) = ${D(q)}^{${n}}$.`,
        `$P(X \\geqslant 1) = 1 - ${D(q)}^{${n}} \\approx ${F3(P3)}$.`, inp(P3, 3));
    }
    if (fam === 'le1') {
      const p0 = q ** n, p1 = n * p * q ** (n - 1), P3 = rd(p0 + p1, 3);
      return Q(id, t, 'Au plus un succès', 'Calculer $P(X \\leqslant 1)$ pour une loi binomiale',
        `${ctx} Calculer $P(X \\leqslant 1)$, arrondie au millième.`,
        `$${F3(P3)}$`, opts(P3, [p1, p0, 1 - p0 - p1, q ** n + p * q ** (n - 1), 1 - p0]),
        '$P(X \\leqslant 1) = P(X = 0) + P(X = 1)$.',
        `$P(X = 0) = ${D(q)}^{${n}}$ et $P(X = 1) = ${n} \\times ${D(p)} \\times ${D(q)}^{${n - 1}}$.`,
        // Termes intermédiaires au dix-millième ; leur somme n'est affichée que si elle redonne l'arrondi au millième
        `$P(X \\leqslant 1) = ${D(q)}^{${n}} + ${n} \\times ${D(p)} \\times ${D(q)}^{${n - 1}} ${F3(rd(rd(p0, 4) + rd(p1, 4), 3)) === F3(P3) ? `\\approx ${rd(p0, 4).toFixed(4).replace('.', '{,}')} + ${rd(p1, 4).toFixed(4).replace('.', '{,}')} ` : ''}\\approx ${F3(P3)}$.`, inp(P3, 3));
    }
    // nmin : plus petit n tel que P(au moins un) >= s
    const s = pick([0.9, 0.95, 0.99]);
    let m = 1;
    while (1 - q ** m < s - 1e-12) m++;
    const xr = Math.log(1 - s) / Math.log(q);
    return Q(id, t, 'Effectif minimal', 'Déterminer un effectif minimal avec le logarithme',
      `${ctxN} Combien faut-il en considérer au minimum pour que la probabilité d'observer au moins un ${c.one} soit supérieure ou égale à $${D(s)}$ ?`,
      `$${m}$`, distinct(m, [m - 1, m + 1, Math.ceil(s / p)]).map((v) => `$${v}$`),
      `La probabilité d'au moins un ${c.one} parmi $n$ vaut $1 - ${D(q)}^n$.`,
      `Résoudre $${D(q)}^n \\leqslant ${D(rd(1 - s))}$ en appliquant $\\ln$, sans oublier que $\\ln(${D(q)}) < 0$.`,
      `$n\\ln(${D(q)}) \\leqslant \\ln(${D(rd(1 - s))})$ donne $n \\geqslant \\dfrac{\\ln(${D(rd(1 - s))})}{\\ln(${D(q)})} \\approx ${D(xr, 2)}$, donc $n = ${m}$.`, String(m));
  }

  /** sante-04 : exponentielle sans dérivée ni logarithme (croissance bactérienne, décroissance d'une concentration) */
  function expoSante(t, id) {
    const fam = t === 1 ? pick(['fac', 'var', 'conc']) : t === 2 ? pick(['conc', 'baisse', 'fac', 'eq'])
      : t === 3 ? pick(['ineq', 'eq', 'baisse', 'inj2']) : pick(['ineq', 'inj2', 'inj2', 'eq']);
    if (fam === 'fac') {
      const k = pick([0.1, 0.2, 0.3, 0.4, 0.5, 0.7]), N0 = pick([100, 200, 500, 1000, 2000]);
      const f = rd(Math.exp(k), 2);
      return Q(id, t, 'Facteur de croissance horaire', 'Interpréter $e^{k}$ comme un coefficient multiplicateur',
        `Le nombre de bactéries d'une culture est modélisé par $N(t) = ${NB(N0)}\\,e^{${D(k)}t}$, où $t$ est en heures. Par quel nombre la population est-elle multipliée chaque heure ? Arrondir au centième.`,
        `$${D(f)}$`, distinct(f, [rd(1 + k), rd(Math.E * k, 2), rd(Math.exp(2 * k), 2)]).map((v) => `$${D(v)}$`),
        'Comparer $N(t + 1)$ et $N(t)$ avec la propriété $e^{a + b} = e^a \\times e^b$.',
        `$N(t + 1) = ${NB(N0)}\\,e^{${D(k)}t} \\times e^{${D(k)}}$.`,
        `$N(t + 1) = N(t) \\times e^{${D(k)}}$ et $e^{${D(k)}} \\approx ${D(f)}$ : la population est multipliée par environ $${D(f)}$ chaque heure (hausse d'environ $${D(rd((f - 1) * 100, 0))}\\,\\%$).`, inp(f, 2));
    }
    if (fam === 'var') {
      const A = pick([5, 10, 20, 50, 80]), k = pick([0.1, 0.2, 0.3, 0.5]) * (Math.random() < 0.5 ? -1 : 1);
      const up = k > 0;
      return Q(id, t, 'Sens de variation de $t \\mapsto Ae^{kt}$', 'Déterminer le sens de variation et la valeur initiale de $t \\mapsto Ae^{kt}$',
        `On considère la fonction $f$ définie sur $[0 ; +\\infty[$ par $f(t) = ${A}\\,e^{${D(k)}t}$. Quelle affirmation est correcte ?`,
        `$f$ est ${up ? 'croissante' : 'décroissante'} et $f(0) = ${A}$.`,
        [`$f$ est ${up ? 'décroissante' : 'croissante'} et $f(0) = ${A}$.`, `$f$ est ${up ? 'croissante' : 'décroissante'} et $f(0) = 0$.`, `$f$ est ${up ? 'décroissante' : 'croissante'} et $f(0) = ${D(rd(A * Math.exp(k), 2))}$.`],
        'Pour $A > 0$, $t \\mapsto Ae^{kt}$ a le sens de variation donné par le signe de $k$.',
        '$e^0 = 1$.',
        `Ici $A = ${A} > 0$ et $k = ${D(k)} ${up ? '>' : '<'} 0$, donc $f$ est ${up ? 'croissante (modèle de croissance, par exemple bactérienne)' : 'décroissante (modèle de décroissance, par exemple d\'une concentration)'} ; $f(0) = ${A}e^0 = ${A}$.`, null);
    }
    if (fam === 'conc') {
      const C0 = pick([20, 40, 50, 80, 100]), k = pick([0.1, 0.15, 0.2, 0.25, 0.3]), h = R(2, 8);
      const C = rd(C0 * Math.exp(-k * h), 1);
      return Q(id, t, 'Concentration à un instant donné', 'Calculer une valeur d\'une fonction exponentielle',
        `Après une injection, la concentration d'un médicament dans le sang est modélisée par $C(t) = ${C0}\\,e^{-${D(k)}t}$ (en mg/L), $t$ étant le temps écoulé en heures. Calculer la concentration au bout de $${h}$ heures, arrondie au dixième.`,
        `$${D(C)}$`, distinct(C, [rd(C0 * Math.exp(-k), 1), rd(C0 * (1 - k) ** h, 1), rd(C0 * Math.exp(k * h), 1)]).map((v) => `$${D(v)}$`),
        `Remplacer $t$ par $${h}$ dans l'expression de $C(t)$.`,
        `$C(${h}) = ${C0}\\,e^{-${D(rd(k * h))}}$.`,
        `$C(${h}) = ${C0}\\,e^{-${D(k)} \\times ${h}} = ${C0}\\,e^{-${D(rd(k * h))}} \\approx ${D(C)}$ mg/L.`, inp(C, 1), 'Saisir le nombre seul, en mg/L.');
    }
    if (fam === 'baisse') {
      const k = pick([0.05, 0.1, 0.15, 0.2, 0.3, 0.4]), C0 = pick([20, 40, 50, 80]);
      const b = rd(100 * (1 - Math.exp(-k)), 1);
      return Q(id, t, 'Baisse horaire d\'une concentration', 'Traduire $e^{-k}$ en pourcentage de baisse',
        `La concentration d'un médicament est modélisée par $C(t) = ${C0}\\,e^{-${D(k)}t}$ (en mg/L, $t$ en heures). De quel pourcentage la concentration baisse-t-elle chaque heure ? Arrondir au dixième.`,
        `$${D(b)}\\,\\%$`, distinct(b, [rd(100 * k, 1), rd(100 * Math.exp(-k), 1), rd(100 * (Math.exp(k) - 1), 1)]).map((v) => `$${D(v)}\\,\\%$`),
        'Chaque heure, la concentration est multipliée par $e^{-k}$ ; un coefficient multiplicateur $c < 1$ correspond à une baisse de $(1 - c) \\times 100\\,\\%$.',
        `$C(t + 1) = C(t) \\times e^{-${D(k)}}$ et $e^{-${D(k)}} \\approx ${D(rd(Math.exp(-k), 4))}$.`,
        `$1 - e^{-${D(k)}} \\approx ${D(rd(1 - Math.exp(-k), 4))}$ : la concentration baisse d'environ $${D(b)}\\,\\%$ par heure.`, inp(b, 1), 'Saisir le pourcentage sans le symbole %.');
    }
    if (fam === 'eq') {
      let p, r;
      do { p = R(-3, 5); r = R(-3, 5); } while (p === r || p === 0 || r === 0);
      const x = R(-5, 6), qq = R(-6, 6), s = qq + (p - r) * x;
      const lin = (a, b) => `${a === 1 ? '' : a === -1 ? '-' : a}t${b === 0 ? '' : b > 0 ? ' + ' + b : ' - ' + -b}`;
      return Q(id, t, 'Équation avec l\'exponentielle', 'Résoudre une équation $e^{a} = e^{b}$',
        `Résoudre dans $\\mathbb{R}$ l'équation $e^{${lin(p, qq)}} = e^{${lin(r, s)}}$. Donner la solution.`,
        `$${x}$`, distinct(x, [-x, x + 1, x - 1]).map((v) => `$${v}$`),
        'La fonction exponentielle est strictement croissante : $e^a = e^b$ équivaut à $a = b$.',
        `On résout $${lin(p, qq)} = ${lin(r, s)}$.`,
        `$${lin(p, qq)} = ${lin(r, s)} \\iff ${p - r === 1 ? '' : `${p - r === -1 ? '-' : p - r}t = ${s - qq} \\iff `}t = ${x}$.`, String(x));
    }
    if (fam === 'ineq') {
      const a = pick([0.1, 0.2, 0.25, 0.4, 0.5]), tt = pick([4, 5, 6, 8, 10, 12, 15]), b = rd(a * tt), C0 = pick([20, 40, 50, 100]);
      return Q(id, t, 'Inéquation et seuil', 'Résoudre une inéquation $e^{a} \\leqslant e^{b}$',
        `La concentration d'un médicament est modélisée par $C(t) = ${C0}\\,e^{-${D(a)}t}$ (en mg/L, $t$ en heures). On admet que le médicament n'agit plus lorsque $C(t) \\leqslant ${C0}\\,e^{-${D(b)}}$. À partir de quel instant $t$, en heures, le médicament n'agit-il plus ?`,
        `$${tt}$`, distinct(tt, [rd(a * b), rd(b - a), rd(b + a)]).map((v) => `$${D(v)}$`),
        'Diviser par la constante positive, puis utiliser : $e^a \\leqslant e^b$ équivaut à $a \\leqslant b$.',
        `L'inéquation devient $e^{-${D(a)}t} \\leqslant e^{-${D(b)}}$, soit $-${D(a)}t \\leqslant -${D(b)}$.`,
        `$-${D(a)}t \\leqslant -${D(b)} \\iff t \\geqslant \\dfrac{${D(b)}}{${D(a)}} = ${tt}$ (on divise par un nombre négatif : le sens change). Le médicament n'agit plus à partir de $t = ${tt}$ h.`, String(tt));
    }
    // inj2 : deux injections identiques à T heures d'intervalle
    const C0 = pick([10, 20, 25, 40]), k = pick([0.1, 0.2, 0.25, 0.3]), T = pick([4, 6, 8, 12]);
    const C = rd(C0 * (1 + Math.exp(-k * T)), 1);
    return Q(id, t, 'Deux injections successives', 'Modéliser deux injections par une somme d\'exponentielles',
      `Une injection fait passer la concentration d'un médicament à $${C0}$ mg/L, puis la concentration est multipliée par $e^{-${D(k)}t}$ au bout de $t$ heures. On refait la même injection $${T}$ heures après la première (elle ajoute $${C0}$ mg/L). Calculer la concentration juste après la deuxième injection, arrondie au dixième.`,
      `$${D(C)}$`, distinct(C, [2 * C0, rd(C0 * Math.exp(-k * T), 1), rd(C0 * (1 + Math.exp(-k)), 1)]).map((v) => `$${D(v)}$`),
      `Calculer d'abord ce qu'il reste de la première injection au bout de $${T}$ heures.`,
      `Il reste $${C0}\\,e^{-${D(k)} \\times ${T}} = ${C0}\\,e^{-${D(rd(k * T))}}$ mg/L de la première injection.`,
      `$C = ${C0}\\,e^{-${D(rd(k * T))}} + ${C0} = ${C0}\\left(1 + e^{-${D(rd(k * T))}}\\right) \\approx ${D(C)}$ mg/L.`, inp(C, 1), 'Saisir le nombre seul, en mg/L.');
  }

  /** sante-07 : suites en contexte de santé (paliers 3-4) */
  function suitesSante(fam, t, id) {
    if (fam === 'epid') {
      const a = pick([3, 5, 8, 10, 12]), q = pick([2, 3]), n = q === 2 ? R(5, 9) : R(4, 7);
      const S = a * (q ** n - 1) / (q - 1);
      return Q(id, t, 'Cas cumulés d\'une épidémie', 'Calculer une somme de termes d\'une suite géométrique',
        `Au début d'une épidémie, on recense $${a}$ nouveaux cas la première semaine, puis le nombre de nouveaux cas est multiplié par $${q}$ chaque semaine. Combien de cas au total aura-t-on recensés au cours des $${n}$ premières semaines ?`,
        `$${NB(S)}$`, distinct(S, [a * q ** n, a * q ** (n - 1), a * (q ** (n + 1) - 1) / (q - 1)]).map((v) => `$${NB(v)}$`),
        `Les nombres de nouveaux cas forment une suite géométrique de premier terme $${a}$ et de raison $${q}$.`,
        `Somme de $${n}$ termes : $\\text{premier terme} \\times \\dfrac{1 - q^{${n}}}{1 - q}$.`,
        `$${a} \\times \\dfrac{${q}^{${n}} - 1}{${q} - 1} = ${a} \\times \\dfrac{${q ** n} - 1}{${q - 1}} = ${NB(S)}$ cas.`, String(S));
    }
    // compar : registre à croissance arithmétique contre croissance géométrique
    let A0, r, B0, p, n, u, v, guard = 0;
    do {
      A0 = pick([5000, 8000, 10000, 12000]); r = pick([200, 300, 400, 500]); B0 = pick([2000, 3000, 4000]); p = pick([5, 8, 10, 12]);
      n = 0;
      while (n < 80 && B0 * (1 + p / 100) ** n <= A0 + r * n) n++;
      u = (k) => A0 + r * k; v = (k) => B0 * (1 + p / 100) ** k;
    } while ((n < 3 || n > 40 || v(n) - u(n) < 1 || u(n - 1) - v(n - 1) < 1) && guard++ < 50);
    return Q(id, t, 'Comparer deux registres', 'Comparer une évolution arithmétique et une évolution géométrique',
      `Un registre de donneurs de moelle osseuse compte $${NB(A0)}$ inscrits et gagne $${r}$ inscrits par an. Un second registre compte $${NB(B0)}$ inscrits, et son nombre d'inscrits augmente de $${p}\\,\\%$ par an. Au bout de combien d'années entières le second registre comptera-t-il pour la première fois plus d'inscrits que le premier ?`,
      `$${n}$`, distinct(n, [n - 1, n + 1, Math.ceil((A0 - B0) / (B0 * p / 100 - r)) > 0 ? Math.ceil((A0 - B0) / (B0 * p / 100 - r)) : n + 2]).map((x) => `$${x}$`),
      `Écrire $u_n = ${NB(A0)} + ${r}n$ (suite arithmétique) et $v_n = ${NB(B0)} \\times ${D(1 + p / 100)}^n$ (suite géométrique).`,
      'Calculer les termes à la calculatrice (tableau de valeurs) et chercher le premier rang où $v_n > u_n$.',
      `$u_{${n - 1}} = ${NB(u(n - 1))}$ et $v_{${n - 1}} \\approx ${NB(Math.round(v(n - 1)))}$, donc $v_{${n - 1}} < u_{${n - 1}}$ ; $u_{${n}} = ${NB(u(n))}$ et $v_{${n}} \\approx ${NB(Math.round(v(n)))}$, donc $v_{${n}} > u_{${n}}$. Réponse : au bout de $${n}$ ans.`, String(n));
  }

  DEDICATED['sante-04'] = expoSante;
  DEDICATED['sante-09'] = binomSante;

  /**
   * Tirages repris du lycée : contextes de santé et notions conformes au cours du chapitre.
   * THEMES remplace temporairement des tables de contextes du générateur lycée (js/lyceeGenerators.js) ;
   * LYC_EXCLUDE écarte les familles hors cours ou sans lien avec la santé (titre + énoncé) ;
   * LYC_ONLY ne garde d'une source que certaines familles.
   */
  const THEMES = {
    'sante-03': {
      _2N5_CTX: [
        { s: 'Le nombre annuel de passages aux urgences d\'un hôpital', u: '', q: '', vd: [12000, 20000, 25000, 40000, 50000, 60000], down: 30, up: 40 },
        { s: 'Le nombre annuel de cas de grippe déclarés dans une région', u: '', q: '', vd: [2000, 4000, 5000, 8000, 12000, 20000], down: 95, up: 200 },
        { s: 'Le nombre annuel de cas de rougeole déclarés dans un pays', u: '', q: '', vd: [400, 500, 800, 1200, 2000, 2500], down: 95, up: 200 },
        { s: 'Le nombre annuel de cas de coqueluche déclarés dans un pays', u: '', q: '', vd: [200, 400, 500, 800, 1200], down: 95, up: 200 },
        { s: 'Le nombre de vaccinations réalisées dans une pharmacie', u: '', q: '', vd: [400, 500, 800, 1200, 2000], down: 60, up: 200 },
        { s: 'Le nombre de donneurs de sang d\'un département', u: '', q: '', vd: [4000, 5000, 8000, 12000, 20000], down: 30, up: 40 },
        { s: 'Le nombre annuel de naissances d\'une maternité', u: '', q: '', vd: [800, 1200, 2000, 2500, 4000], down: 30, up: 30 },
        { s: 'La consommation annuelle d\'antibiotiques d\'un hôpital', f: true, u: ' kg', q: ' (en kg)', vd: [200, 400, 500, 800, 1200], down: 40, up: 40 },
        { s: 'Le budget annuel de matériel médical d\'une clinique', u: ' €', q: ' (en euros)', vd: [5000, 8000, 12000, 20000, 25000, 40000, 50000], down: 40, up: 60 },
        { s: 'Le tarif d\'une consultation chez un spécialiste', u: ' €', q: ' (en euros)', vd: [40, 50, 60, 80, 120], down: 15, up: 25 },
        { s: 'Le prix d\'un tensiomètre électronique', u: ' €', q: ' (en euros)', vd: [40, 50, 60, 80, 120], down: 30, up: 30 }
      ],
      _2N5_PROP: [
        ['patients accueillis aux urgences d\'un hôpital', 'ont plus de 75 ans'], ['donneurs de sang d\'une collecte', 'sont du groupe O'],
        ['patients d\'un cabinet médical', 'sont vaccinés contre la grippe'], ['nouveau-nés d\'une maternité', 'sont nés par césarienne'],
        ['soignants d\'un hôpital', 'travaillent de nuit']],
      _2N5_PP: [
        ['des patients d\'un service de diabétologie ont un diabète de type 2', 'd\'entre eux sont traités par insuline', 'patients du service ont un diabète de type 2 traité par insuline'],
        ['des adultes d\'une ville fument', 'des fumeurs ont essayé d\'arrêter dans l\'année', 'adultes de la ville sont des fumeurs ayant essayé d\'arrêter dans l\'année'],
        ['des soignants d\'un hôpital sont infirmiers', 'des infirmiers travaillent de nuit', 'soignants sont des infirmiers travaillant de nuit'],
        ['des habitants d\'une commune ont plus de 65 ans', 'd\'entre eux sont vaccinés contre la grippe', 'habitants sont des personnes de plus de 65 ans vaccinées contre la grippe']]
    }
  };
  const LYC_EXCLUDE = {
    // dérivées : enseignées en sante-06 (reprises là par LYC_ONLY)
    'sante-04': /[Dd]érivée|dérivé|Étude d'une fonction|[Ee]xtremum/,
    // dérivées de ln et croissances comparées : hors cours ; intérêts composés : contexte sans lien avec la santé
    'sante-05': /[Dd]érivée|dérivé|Croissances comparées|intérêts composés|[Pp]lacement/,
    'sante-07': /abonnés|arbres|Somme géométrique en situation|Comparer deux évolutions/,
    'sante-09': /dé équilibré|pièce|[Uu]rne|QCM|€|jeu /,
    // intégration par parties : absente du cours sante-11
    'sante-11': /par parties/,
    'pass-02': /cartes|la main|restaurant|élèves|jetons|alphabet|anagramme|chaises|livres|identifiant|cadenas|QCM|dé équilibré|[Uu]rne|course|jury|association|filles|polygone|pièce|boules|entiers naturels|menu/,
    'pass-09': /intérêts composés|[Pp]lacement/
  };
  const LYC_ONLY = { 'sante-06': { '1A4': /[Dd]érivée|dérivé|Étude d'une fonction|[Ee]xtremum/ } };

  function lyceeDraw(chapterId, t, lycee) {
    const L = window.MathsLyceeGenerators, theme = L && THEMES[chapterId];
    const saved = {};
    if (theme) Object.keys(theme).forEach((k) => { saved[k] = L[k]; L[k] = theme[k]; });
    try {
      for (let essai = 0; essai < 30; essai++) {
        const src = pick(lycee);
        const srcTier = t >= 3 && Math.random() < 0.5 ? Math.min(4, t + 1) : t;
        let q = null;
        try {
          q = window.MathsAdvancedGenerators.generate(src, srcTier);
        } catch (e) {
          q = null;
        }
        if (!q || !q.statement) continue;
        const txt = `${q.title || ''} ${q.statement}`;
        const ex = LYC_EXCLUDE[chapterId], only = (LYC_ONLY[chapterId] || {})[src];
        if ((ex && ex.test(txt)) || (only && !only.test(txt))) continue;
        return q;
      }
      return null;
    } finally {
      if (theme) Object.keys(saved).forEach((k) => { L[k] = saved[k]; });
    }
  }

  /** Générateurs du lycée par chapitre */
  const SOURCES = {
    'sante-01': [], 'sante-02': [], 'sante-03': ['2N5'], 'sante-04': ['1A4'], 'sante-05': ['TA5'],
    'sante-06': ['1A3', 'TA8', '1A4'], 'sante-07': ['1A6'], 'sante-08': ['1S1', '2S2'], 'sante-09': ['TS1', '1S2'], 'sante-10': ['2S1'], 'sante-11': ['TA7'],
    'pass-01': ['2S1'], 'pass-02': ['TS3', '1S1'], 'pass-03': [], 'pass-04': ['TS1'], 'pass-05': [],
    'pass-06': [], 'pass-07': [], 'pass-08': [], 'pass-09': ['TA8', 'TA5'], 'pass-10': ['TA6'], 'pass-11': []
  };

  /** Probabilité de servir un exercice de la banque statique, par palier */
  const STATIC_SHARE = { 1: 0.15, 2: 0.2, 3: 0.4, 4: 0.55 };

  const api = {
    SANTE_SOURCES: SOURCES,
    /** Générateurs dédiés, réutilisés par le niveau Véto (js/vetoGenerators.js) */
    SANTE_DEDICATED: DEDICATED,

    _santeGenerate(chapterId, tier) {
      const t = Math.min(4, Math.max(1, parseInt(tier, 10) || 1));
      if (Math.random() < (STATIC_SHARE[t] || 0)) return null;
      const lycee = (SOURCES[chapterId] || []).filter(() => window.MathsAdvancedGenerators);
      const ded = DEDICATED[chapterId];
      // Générateur dédié en priorité (2 chances sur 3 s'il existe aussi une source lycée)
      let useDed = ded && (!lycee.length || Math.random() < 0.67);
      let q = null;
      try {
        if (useDed) q = ded(t, chapterId);
        else if (lycee.length) {
          q = lyceeDraw(chapterId, t, lycee);
          if (!q && ded) { useDed = true; q = ded(t, chapterId); }
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
