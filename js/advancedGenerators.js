/**
 * advancedGenerators.js
 * Moteur de génération dynamique et paramétrique pour le Lycée et l'Université (Licence L1, L2, L3).
 * Assure un renouvellement infini de questions avec tirage aléatoire de coefficients, fonctions,
 * matrices, assertions et paramètres mathématiques lors des devoirs blancs et sessions d'entraînement.
 */

window.MathsAdvancedGenerators = {
  randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  randChoice(arr) {
    if (!arr || !arr.length) return null;
    return arr[Math.floor(Math.random() * arr.length)];
  },

  shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  },

  makeMcq(chapterId, tier, title, skill, statement, correctAnswer, distractors, hint1, hint2, solution) {
    // Éliminer les doublons éventuels parmi les options
    const uniqueDistractors = [...new Set(distractors.filter(d => d !== correctAnswer))];
    const pickedDistractors = this.shuffleArray(uniqueDistractors).slice(0, 3);
    const allOptions = this.shuffleArray([correctAnswer, ...pickedDistractors]);
    const correctIndex = allOptions.indexOf(correctAnswer);

    return {
      id: `${chapterId}-gen-${Date.now()}-${Math.floor(Math.random() * 100000)}`,
      chapterId,
      tier,
      type: "mcq",
      title,
      skill,
      statement,
      options: allOptions,
      choices: allOptions,
      correctIndex,
      answer: correctAnswer,
      hint1,
      hint2,
      solution
    };
  },

  /**
   * Point d'entrée principal : tente de générer une question procédurale pour le chapitre et le palier
   */
  generate(chapterId, tier = 1) {
    const t = (tier >= 1 && tier <= 4) ? parseInt(tier, 10) : 1;

    switch (chapterId) {
      // =========================================================================
      // LICENCE 1 (11 modules)
      // =========================================================================
      case 'L1-LOG': return this.generateL1_LOG(t);
      case 'L1-CMP': return this.generateL1_CMP(t);
      case 'L1-MAT': return this.generateL1_MAT(t);
      case 'L1-EV1': return this.generateL1_EV1(t);
      case 'L1-APP': return this.generateL1_APP(t);
      case 'L1-REL': return this.generateL1_REL(t);
      case 'L1-SUI': return this.generateL1_SUI(t);
      case 'L1-CNT': return this.generateL1_CNT(t);
      case 'L1-TAY': return this.generateL1_TAY(t);
      case 'L1-INT': return this.generateL1_INT(t);
      case 'L1-GEO': return this.generateL1_GEO(t);

      // =========================================================================
      // LICENCE 2 (15 modules)
      // =========================================================================
      case 'L2-RED1': return this.generateL2_RED1(t);
      case 'L2-PRE':  return this.generateL2_PRE(t);
      case 'L2-SER':  return this.generateL2_SER(t);
      case 'L2-CAL':  return this.generateL2_CAL(t);
      case 'L2-DET':  return this.generateL2_DET(t);
      case 'L2-RED2': return this.generateL2_RED2(t);
      case 'L2-DUA':  return this.generateL2_DUA(t);
      case 'L2-SYM':  return this.generateL2_SYM(t);
      case 'L2-RIE':  return this.generateL2_RIE(t);
      case 'L2-ING':  return this.generateL2_ING(t);
      case 'L2-EDO':  return this.generateL2_EDO(t);
      case 'L2-PAR':  return this.generateL2_PAR(t);
      case 'L2-MUL':  return this.generateL2_MUL(t);
      case 'L2-CRB':  return this.generateL2_CRB(t);
      case 'L2-PRB':  return this.generateL2_PRB(t);

      // =========================================================================
      // LICENCE 3 (15 modules)
      // =========================================================================
      case 'L3-GRP1': return this.generateL3_GRP1(t);
      case 'L3-MET':  return this.generateL3_MET(t);
      case 'L3-CMP':  return this.generateL3_CMP(t);
      case 'L3-MES':  return this.generateL3_MES(t);
      case 'L3-GRP2': return this.generateL3_GRP2(t);
      case 'L3-ANN':  return this.generateL3_ANN(t);
      case 'L3-BAN':  return this.generateL3_BAN(t);
      case 'L3-SDF':  return this.generateL3_SDF(t);
      case 'L3-SER':  return this.generateL3_SER(t);
      case 'L3-FOU':  return this.generateL3_FOU(t);
      case 'L3-GPR':  return this.generateL3_GPR(t);
      case 'L3-GDF':  return this.generateL3_GDF(t);
      case 'L3-NUM':  return this.generateL3_NUM(t);
      case 'L3-PROG': return this.generateL3_PROG(t);
      case 'L3-PRC':  return this.generateL3_PRC(t);

      // =========================================================================
      // LYCÉE : 2NDE, 1ÈRE, TERMINALE
      // =========================================================================
      default:
        if (chapterId.startsWith('2N') || chapterId.startsWith('2G') || chapterId.startsWith('2F') || chapterId.startsWith('2S') || chapterId.startsWith('2A')) {
          return this.generateLycee2nde(chapterId, t);
        }
        if (chapterId.startsWith('1A') || chapterId.startsWith('1G') || chapterId.startsWith('1F') || chapterId.startsWith('1P')) {
          return this.generateLycee1ere(chapterId, t);
        }
        if (chapterId.startsWith('TA') || chapterId.startsWith('TG') || chapterId.startsWith('TP') || chapterId.startsWith('TO')) {
          return this.generateLyceeTale(chapterId, t);
        }
        return null;
    }
  },

  // =========================================================================
  // IMPLÉMENTATION DES GÉNÉRATEURS L1
  // =========================================================================

  generateL1_LOG(tier) {
    if (tier === 1) {
      // Palier 1 : Négation d'une assertion quantifiée
      const variants = [
        {
          stmt: "$\\forall x \\in \\mathbb{R}, \\exists y \\in \\mathbb{R}, x + y > 0$",
          ans: "$\\exists x \\in \\mathbb{R}, \\forall y \\in \\mathbb{R}, x + y \\le 0$",
          dists: [
            "$\\forall x \\in \\mathbb{R}, \\forall y \\in \\mathbb{R}, x + y \\le 0$",
            "$\\exists x \\in \\mathbb{R}, \\exists y \\in \\mathbb{R}, x + y \\le 0$",
            "$\\exists y \\in \\mathbb{R}, \\forall x \\in \\mathbb{R}, x + y \\le 0$"
          ],
          exp: "La négation échange $\\forall$ et $\\exists$ et inverse l'inégalité stricte en inégalité large."
        },
        {
          stmt: "$\\exists x \\in \\mathbb{R}, \\forall y \\in \\mathbb{R}, x \\le y^2$",
          ans: "$\\forall x \\in \\mathbb{R}, \\exists y \\in \\mathbb{R}, x > y^2$",
          dists: [
            "$\\exists x \\in \\mathbb{R}, \\exists y \\in \\mathbb{R}, x > y^2$",
            "$\\forall x \\in \\mathbb{R}, \\forall y \\in \\mathbb{R}, x > y^2$",
            "$\\forall y \\in \\mathbb{R}, \\exists x \\in \\mathbb{R}, x \\ge y^2$"
          ],
          exp: "$\\neg(\\exists x, \\forall y, P(x, y)) \\iff \\forall x, \\exists y, \\neg P(x, y)$ avec $\\neg(x \\le y^2) \\iff x > y^2$."
        },
        {
          stmt: "$\\forall \\varepsilon > 0, \\exists \\eta > 0, |x - x_0| < \\eta \\implies |f(x) - f(x_0)| < \\varepsilon$",
          ans: "$\\exists \\varepsilon > 0, \\forall \\eta > 0, |x - x_0| < \\eta \\text{ et } |f(x) - f(x_0)| \\ge \\varepsilon$",
          dists: [
            "$\\exists \\varepsilon > 0, \\exists \\eta > 0, |x - x_0| \\ge \\eta \\implies |f(x) - f(x_0)| \\ge \\varepsilon$",
            "$\\forall \\varepsilon > 0, \\forall \\eta > 0, |x - x_0| < \\eta \\text{ et } |f(x) - f(x_0)| \\ge \\varepsilon$",
            "$\\exists \\varepsilon > 0, \\forall \\eta > 0, |x - x_0| \\ge \\eta \\text{ ou } |f(x) - f(x_0)| < \\varepsilon$"
          ],
          exp: "La négation de $P \\implies Q$ est $P \\text{ et } \\neg Q$."
        },
        {
          stmt: "$\\forall n \\in \\mathbb{N}, \\exists p \\ge n, p \\text{ est premier}$",
          ans: "$\\exists n \\in \\mathbb{N}, \\forall p \\ge n, p \\text{ n'est pas premier}$",
          dists: [
            "$\\exists n \\in \\mathbb{N}, \\exists p \\ge n, p \\text{ n'est pas premier}$",
            "$\\forall n \\in \\mathbb{N}, \\forall p \\ge n, p \\text{ n'est pas premier}$",
            "$\\exists p \\in \\mathbb{N}, \\forall n \\ge p, p \\text{ est premier}$"
          ],
          exp: "Échange des quantificateurs et négation de la proposition finale."
        },
        {
          stmt: "$\\exists M > 0, \\forall x \\in E, \\|f(x)\\| \\le M \\|x\\|$",
          ans: "$\\forall M > 0, \\exists x \\in E, \\|f(x)\\| > M \\|x\\|$",
          dists: [
            "$\\forall M > 0, \\forall x \\in E, \\|f(x)\\| > M \\|x\\|$",
            "$\\exists M > 0, \\exists x \\in E, \\|f(x)\\| > M \\|x\\|$",
            "$\\forall M \\le 0, \\exists x \\in E, \\|f(x)\\| > M \\|x\\|$"
          ],
          exp: "Négation standard d'une assertion bornée $\\exists M, \\forall x$."
        }
      ];
      const pick = this.randChoice(variants);
      return this.makeMcq(
        'L1-LOG', 1, "Négation d'une assertion quantifiée",
        "Manipuler les quantificateurs universel et existentiel",
        `Quelle est la négation logique exacte de l'assertion : « ${pick.stmt} » ?`,
        pick.ans, pick.dists,
        "La négation inverse les quantificateurs et la condition terminale.",
        "$\\neg(\\forall x, P(x)) \\iff \\exists x, \\neg P(x)$.",
        `La négation est : ${pick.ans}. ${pick.exp}`
      );
    } else if (tier === 2) {
      // Palier 2 : Injectivité, Surjectivité et Bijectivité (diversité des familles de fonctions)
      const problemKind = this.randChoice([
        'inj_false_quad',    // f: R -> R, f(x) = x^2 - a^2 (non injective)
        'inj_false_poly',    // f: R -> R, f(x) = x^2 - 2kx (non injective)
        'inj_false_abs',     // f: R -> R, f(x) = |x - c| (non injective)
        'inj_true_affine',   // f: R -> R, f(x) = ax + b (injective)
        'inj_true_quad_pos', // f: [0, +inf[ -> R, f(x) = x^2 + c (injective)
        'inj_true_exp',      // f: R -> R, f(x) = exp(kx + 1) (injective)
        'inj_true_homo',     // f: R \ {d} -> R, f(x) = (ax+b)/(cx-d) (injective)
        'surj_false_quad',   // f: R -> R, f(x) = x^2 + c (non surjective)
        'surj_false_exp',    // f: R -> R, f(x) = exp(x) (non surjective)
        'surj_false_homo',   // f: R \ {1} -> R, f(x) = (ax+b)/(x-1) (non surjective)
        'surj_false_trig',   // f: R -> R, f(x) = cos(x) (non surjective)
        'surj_true_affine',  // f: R -> R, f(x) = ax + b (surjective)
        'surj_true_exp_pos', // f: R -> ]0, +inf[, f(x) = exp(x) (surjective)
        'surj_true_cube',    // f: R -> R, f(x) = x^3 - c (surjective)
        'bij_affine',        // f: R -> R, f(x) = ax + b (bijective)
        'bij_false_quad'     // f: R -> R, f(x) = x^2 (ni injective ni surjective)
      ]);

      if (problemKind === 'inj_false_quad') {
        const a = this.randChoice([2, 3, 4, 5]);
        const a2 = a * a;
        return this.makeMcq(
          'L1-LOG', 2, "Injectivité d'un polynôme du second degré",
          "Démontrer la non-injectivité à l'aide d'un contre-exemple",
          `Soit l'application $f : \\mathbb{R} \\to \\mathbb{R}$ définie par $f(x) = x^2 - ${a2}$. L'application $f$ est-elle injective ?`,
          `Non, car $f(-${a}) = f(${a}) = 0$ avec $-${a} \\neq ${a}$`,
          [
            `Oui, car $\\forall x \\in \\mathbb{R}, f(x) \\ge -${a2}$`,
            `Non, car la fonction ne s'annule pas sur $\\mathbb{R}$`,
            `Oui, car tout réel admet au moins un antécédent`
          ],
          "Rappel : $f$ est injective si $\\forall x, x' \\in \\mathbb{R}, f(x) = f(x') \\implies x = x'$.",
          `Calcule les images de $${a}$ et de $-${a}$ par $f$.`,
          `Pour prouver qu'une application n'est pas injective, il suffit d'exhiber deux antécédents distincts ayant la même image (contre-exemple). Ici, $f(-${a}) = (-${a})^2 - ${a2} = 0$ et $f(${a}) = ${a}^2 - ${a2} = 0$. Comme $-${a} \\neq ${a}$ et $f(-${a}) = f(${a})$, l'application $f$ n'est pas injective.`
        );
      } else if (problemKind === 'inj_false_poly') {
        const k = this.randChoice([1, 2, 3]);
        const twoK = 2 * k;
        return this.makeMcq(
          'L1-LOG', 2, "Injectivité d'une fonction polynomiale",
          "Rechercher deux antécédents distincts pour une même image",
          `Soit l'application $f : \\mathbb{R} \\to \\mathbb{R}$ définie par $f(x) = x^2 - ${twoK}x$. L'application $f$ est-elle injective ?`,
          `Non, car $f(0) = f(${twoK}) = 0$ avec $0 \\neq ${twoK}$`,
          [
            `Oui, car pour tout $x \\neq x'$, $f(x) \\neq f(x')$`,
            `Oui, car le discriminant $\\Delta > 0$`,
            `Non, car la dérivée ne s'annule jamais`
          ],
          "Résous l'équation $f(x) = 0$ pour chercher plusieurs antécédents de $0$.",
          `Factorise par $x$ : $x(x - ${twoK}) = 0$.`,
          `On a $f(x) = x(x - ${twoK})$. Les réels $0$ et $${twoK}$ sont deux antécédents distincts de $0$ ($f(0) = f(${twoK}) = 0$). Comme $0 \\neq ${twoK}$, l'application n'est pas injective.`
        );
      } else if (problemKind === 'inj_false_abs') {
        const c = this.randChoice([1, 2, 3, 4]);
        const x1 = c - 1;
        const x2 = c + 1;
        return this.makeMcq(
          'L1-LOG', 2, "Injectivité et valeur absolue",
          "Tester l'injectivité d'une fonction avec valeur absolue",
          `Soit l'application $f : \\mathbb{R} \\to \\mathbb{R}$ définie par $f(x) = |x - ${c}|$. L'application $f$ est-elle injective ?`,
          `Non, car $f(${x1}) = f(${x2}) = 1$ avec $${x1} \\neq ${x2}$`,
          [
            `Oui, car une valeur absolue est toujours positive ou nulle`,
            `Oui, car $f(x) = 0 \\implies x = ${c}$`,
            `Non, car $f$ n'est pas dérivable en $x = ${c}$`
          ],
          `Évalue la fonction $f$ pour deux réels situés symétriquement par rapport à ${c}.`,
          `Compare les valeurs de $f(${x1})$ et $f(${x2})$.`,
          `On a $f(${x1}) = |${x1} - ${c}| = |-1| = 1$ et $f(${x2}) = |${x2} - ${c}| = |1| = 1$. Deux éléments distincts (${x1} et ${x2}) ont la même image $1$ : l'application n'est donc pas injective.`
        );
      } else if (problemKind === 'inj_true_affine') {
        const a = this.randChoice([2, 3, 4, 5]);
        const b = this.randChoice([-5, -3, 1, 3, 7]);
        const sign = b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`;
        return this.makeMcq(
          'L1-LOG', 2, "Injectivité d'une fonction affine",
          "Appliquer la définition formelle de l'injectivité",
          `Soit l'application $f : \\mathbb{R} \\to \\mathbb{R}$ définie par $f(x) = ${a}x ${sign}$. L'application $f$ est-elle injective ?`,
          `Oui, car $\\forall x, x' \\in \\mathbb{R}, f(x) = f(x') \\implies ${a}x = ${a}x' \\implies x = x'$`,
          [
            `Non, car $f(0) = ${b}$`,
            `Non, car sa droite représentative coupe les axes de coordonnées`,
            `Oui, car elle ne prend que des valeurs positives`
          ],
          "Pars de l'égalité $f(x) = f(x')$ et résous en isolant $x$ et $x'$.",
          `Simplifie la constante des deux côtés, puis divise par le coefficient directeur $${a} \\neq 0$.`,
          `Soient $x, x' \\in \\mathbb{R}$ tels que $f(x) = f(x')$. Alors $${a}x ${sign} = ${a}x' ${sign} \\iff ${a}x = ${a}x'$. Comme $${a} \\neq 0$, on obtient directement $x = x'$. L'application est donc injective.`
        );
      } else if (problemKind === 'inj_true_quad_pos') {
        const c = this.randChoice([1, 2, 4]);
        return this.makeMcq(
          'L1-LOG', 2, "Injectivité sur un domaine restreint",
          "Vérifier l'injectivité en tenant compte de l'ensemble de départ",
          `Soit l'application $f : [0, +\\infty[ \\to \\mathbb{R}$ définie par $f(x) = x^2 + ${c}$. L'application $f$ est-elle injective ?`,
          `Oui, car sur $[0, +\\infty[$, $x^2 + ${c} = x'^2 + ${c} \\implies x^2 = x'^2 \\implies x = x'$`,
          [
            `Non, car $f(-1) = f(1)$`,
            `Non, car $f(x) \\ge ${c}$ pour tout $x$`,
            `Non, car la dérivée s'annule en $x = 0$`
          ],
          "Attention à l'ensemble de départ : les antécédents doivent appartenir à $[0, +\\infty[$ !",
          "Sur $\\mathbb{R}_+$, deux réels qui ont le même carré sont nécessairement égaux.",
          `Soient $x, x' \\in [0, +\\infty[$ tels que $f(x) = f(x')$. Alors $x^2 + ${c} = x'^2 + ${c} \\iff x^2 = x'^2$. Comme $x \\ge 0$ et $x' \\ge 0$, la seule solution est $x = x'$ (la solution négative $-x'$ n'appartient pas au domaine $[0, +\\infty[$). L'application est donc injective sur son domaine de définition.`
        );
      } else if (problemKind === 'inj_true_exp') {
        const k = this.randChoice([2, 3]);
        return this.makeMcq(
          'L1-LOG', 2, "Injectivité de la fonction exponentielle",
          "Exploiter la stricte monotonie pour établir l'injectivité",
          `Soit l'application $f : \\mathbb{R} \\to \\mathbb{R}$ définie par $f(x) = e^{${k}x + 1}$. L'application $f$ est-elle injective ?`,
          `Oui, car $e^{${k}x+1} = e^{${k}x'+1} \\implies ${k}x+1 = ${k}x'+1 \\implies x = x'$`,
          [
            `Non, car $e^x > 0$ pour tout réel $x$`,
            `Non, car $f(0) = e \\neq 0$`,
            `Oui, car l'image réciproque de $\\mathbb{R}$ est vide`
          ],
          "Applique la fonction logarithme népérien $\\ln$ de part et d'autre de l'égalité $f(x) = f(x')$.",
          "La fonction exponentielle est strictement croissante sur $\\mathbb{R}$.",
          `Soient $x, x' \\in \\mathbb{R}$ tels que $f(x) = f(x')$. Alors $e^{${k}x+1} = e^{${k}x'+1}$. En appliquant $\\ln$ (strictement croissante sur $\\mathbb{R}_+^*$) : $${k}x+1 = ${k}x'+1 \\iff ${k}x = ${k}x' \\iff x = x'$. L'application est donc injective.`
        );
      } else if (problemKind === 'inj_true_homo') {
        const a = this.randChoice([2, 3, 5]);
        const b = this.randChoice([1, 2, 4]);
        const d = this.randChoice([1, 2, 3]);
        const expr = `f(x) = \\frac{${a}x + ${b}}{x - ${d}}`;
        return this.makeMcq(
          'L1-LOG', 2, "Injectivité d'une fonction rationnelle",
          "Démontrer l'injectivité par produit en croix",
          `Soit l'application $f : \\mathbb{R} \\setminus \\{${d}\\} \\to \\mathbb{R}$ définie par $${expr}$. L'application $f$ est-elle injective ?`,
          `Oui, car $f(x) = f(x') \\implies (${a}x + ${b})(x' - ${d}) = (${a}x' + ${b})(x - ${d}) \\implies x = x'$`,
          [
            `Non, car le dénominateur s'annule en $x = ${d}$`,
            `Non, car $f(0) = -${b}/${d}$`,
            `Oui, car la fonction est bornée sur son domaine`
          ],
          "Pars de l'égalité $f(x) = f(x')$ et effectue le produit en croix.",
          "Développe et simplifie les termes de plus haut degré $xx'$.",
          `En posant $f(x) = f(x')$, le produit en croix donne $(${a}x + ${b})(x' - ${d}) = (${a}x' + ${b})(x - ${d})$. En développant : $${a}xx' - ${a*d}x + ${b}x' - ${b*d} = ${a}xx' - ${a*d}x' + ${b}x - ${b*d}$. Les termes $${a}xx'$ et $-${b*d}$ s'annulent : $(${a*d + b})x' = (${a*d + b})x$. Comme $${a*d + b} \\neq 0$, on obtient $x = x'$. L'application est donc injective.`
        );
      } else if (problemKind === 'surj_false_quad') {
        const c = this.randChoice([0, 1, 2]);
        const y0 = c - 1;
        const expr = c === 0 ? 'x^2' : `x^2 + ${c}`;
        return this.makeMcq(
          'L1-LOG', 2, "Surjectivité d'un polynôme du second degré",
          "Identifier un élément de l'ensemble d'arrivée sans antécédent",
          `Soit l'application $f : \\mathbb{R} \\to \\mathbb{R}$ définie par $f(x) = ${expr}$. L'application $f$ est-elle surjective ?`,
          `Non, car le réel $${y0}$ n'admet aucun antécédent par $f$ dans $\\mathbb{R}$`,
          [
            `Oui, car $f(0) = ${c}$`,
            `Oui, car l'ensemble de départ est $\\mathbb{R}$ tout entier`,
            `Non, car la fonction n'est pas continue`
          ],
          "Rappel : $f : E \\to F$ est surjective si $\\forall y \\in F, \\exists x \\in E, y = f(x)$.",
          `Regarde les valeurs possibles de $x^2$ : un carré dans $\\mathbb{R}$ est toujours positif ou nul.`,
          `Pour tout $x \\in \\mathbb{R}$, $x^2 \\ge 0$, donc $f(x) \\ge ${c}$. L'équation $f(x) = ${y0}$ équivaut à $x^2 = ${y0 - c} < 0$, ce qui n'admet aucune solution réelle. Le réel $${y0} \\in \\mathbb{R}$ n'a donc aucun antécédent par $f$. L'application n'est pas surjective.`
        );
      } else if (problemKind === 'surj_false_exp') {
        return this.makeMcq(
          'L1-LOG', 2, "Surjectivité de la fonction exponentielle",
          "Comparer l'image de la fonction à l'ensemble d'arrivée",
          "Soit l'application $f : \\mathbb{R} \\to \\mathbb{R}$ définie par $f(x) = e^x$. L'application $f$ est-elle surjective ?",
          "Non, car aucun réel négatif ou nul (par exemple $-1$) n'a d'antécédent dans $\\mathbb{R}$",
          [
            "Oui, car pour tout réel $y > 0$, $\\ln(y)$ est un antécédent",
            "Oui, car la fonction exponentielle est strictement croissante",
            "Non, car $f(0) = 1 \\neq 0$"
          ],
          "Vérifie si tous les éléments de l'ensemble d'arrivée $\\mathbb{R}$ peuvent être atteints par $e^x$.",
          "Quel est le signe de $e^x$ pour n'importe quel réel $x$ ?",
          "L'ensemble d'arrivée spécifié est $\\mathbb{R}$. Or pour tout $x \\in \\mathbb{R}$, $e^x > 0$. Les réels $y \\le 0$ (comme $y = -1$) ne possèdent aucun antécédent dans $\\mathbb{R}$ car l'équation $e^x = -1$ n'a pas de solution. L'ensemble image est $f(\\mathbb{R}) = ]0, +\\infty[ \\neq \\mathbb{R}$, donc $f$ n'est pas surjective."
        );
      } else if (problemKind === 'surj_false_homo') {
        const a = this.randChoice([2, 3, 4]);
        const b = this.randChoice([1, 3, 5]);
        return this.makeMcq(
          'L1-LOG', 2, "Surjectivité d'une fonction homographique",
          "Trouver la valeur interdite de l'ensemble image",
          `Soit l'application $f : \\mathbb{R} \\setminus \\{1\\} \\to \\mathbb{R}$ définie par $f(x) = \\frac{${a}x + ${b}}{x - 1}$. L'application $f$ est-elle surjective ?`,
          `Non, car le réel $${a}$ n'admet aucun antécédent par $f$ dans $\\mathbb{R} \\setminus \\{1\\}$`,
          [
            "Oui, car la fonction est injective",
            "Oui, car le numérateur ne s'annule pas en $1$",
            "Non, car $1$ n'appartient pas à l'ensemble de départ"
          ],
          `Tente de résoudre l'équation $f(x) = ${a}$ pour trouver un antécédent éventuel.`,
          `Que devient l'égalité en multipliant par $(x - 1)$ ?`,
          `Pour tout $x \\neq 1$, $f(x) = ${a} \\iff \\frac{${a}x + ${b}}{x - 1} = ${a} \\iff ${a}x + ${b} = ${a}x - ${a} \\iff ${b} = -${a}$. Comme $${b} \\neq -${a}$, cette équation n'a aucune solution. Ainsi le réel $${a} \\in \\mathbb{R}$ n'admet aucun antécédent par $f$. L'image de $f$ est $\\mathbb{R} \\setminus \\{${a}\\}$, donc $f$ n'est pas surjective de $\\mathbb{R} \\setminus \\{1\\}$ dans $\\mathbb{R}$.`
        );
      } else if (problemKind === 'surj_false_trig') {
        return this.makeMcq(
          'L1-LOG', 2, "Surjectivité d'une fonction trigonométrique",
          "Déterminer si l'ensemble image recouvre le codomaine",
          "Soit l'application $f : \\mathbb{R} \\to \\mathbb{R}$ définie par $f(x) = \\cos(x)$. L'application $f$ est-elle surjective ?",
          "Non, car tout réel strictement supérieur à $1$ (par exemple $2$) n'a aucun antécédent",
          [
            "Oui, car la fonction cosinus est périodique de période $2\\pi$",
            "Oui, car $\\cos(0) = 1$",
            "Non, car la fonction cosinus est paire"
          ],
          "Quelles sont les bornes de la fonction cosinus sur $\\mathbb{R}$ ?",
          "L'image de $\\mathbb{R}$ par la fonction cosinus est le segment $[-1, 1]$.",
          "Pour tout $x \\in \\mathbb{R}$, on a $-1 \\le \\cos(x) \\le 1$. L'ensemble d'arrivée est $\\mathbb{R}$. Un élément tel que $y = 2$ n'a aucun antécédent réel car l'équation $\\cos(x) = 2$ n'admet aucune solution dans $\\mathbb{R}$. L'application n'est donc pas surjective."
        );
      } else if (problemKind === 'surj_true_affine') {
        const a = this.randChoice([2, 3, 4, 5]);
        const b = this.randChoice([-4, -2, 3, 5]);
        const sign = b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`;
        const invSign = b >= 0 ? `- ${b}` : `+ ${Math.abs(b)}`;
        return this.makeMcq(
          'L1-LOG', 2, "Surjectivité d'une application affine",
          "Résoudre formellement l'équation $y = f(x)$",
          `Soit l'application $f : \\mathbb{R} \\to \\mathbb{R}$ définie par $f(x) = ${a}x ${sign}$. L'application $f$ est-elle surjective ?`,
          `Oui, car pour tout $y \\in \\mathbb{R}$, $x = \\frac{y ${invSign}}{${a}} \\in \\mathbb{R}$ est un antécédent de $y$`,
          [
            "Non, car la fonction n'est pas bornée",
            "Oui, mais uniquement pour les réels $y > 0$",
            `Non, car $f(0) = ${b} \\neq 0$`
          ],
          "Soit $y \\in \\mathbb{R}$. Résous l'équation $y = f(x)$ d'inconnue $x$.",
          `Isole $x$ : $${a}x = y ${invSign}$.`,
          `Soit $y \\in \\mathbb{R}$ quelconque. On résout $y = ${a}x ${sign} \\iff ${a}x = y ${invSign} \\iff x = \\frac{y ${invSign}}{${a}}$. Comme $${a} \\neq 0$, ce réel $x$ existe toujours et appartient bien à l'ensemble de départ $\\mathbb{R}$. Tout réel de l'ensemble d'arrivée admet donc au moins un antécédent : $f$ est surjective.`
        );
      } else if (problemKind === 'surj_true_exp_pos') {
        return this.makeMcq(
          'L1-LOG', 2, "Surjectivité sur un codomaine restreint",
          "Calculer un antécédent explicite selon le codomaine",
          "Soit l'application $f : \\mathbb{R} \\to ]0, +\\infty[$ définie par $f(x) = e^x$. L'application $f$ est-elle surjective ?",
          "Oui, car tout réel $y \\in ]0, +\\infty[$ admet pour antécédent $x = \\ln(y) \\in \\mathbb{R}$",
          [
            "Non, car $-1$ n'a pas d'antécédent",
            "Non, car la fonction exponentielle ne s'annule jamais",
            "Oui, uniquement pour $y \\ge 1$"
          ],
          "Prends garde à l'ensemble d'arrivée : il s'agit ici de $]0, +\\infty[$, et non de $\\mathbb{R}$ !",
          "Pour tout $y > 0$, quelle fonction permet de résoudre $e^x = y$ ?",
          "L'ensemble d'arrivée est $]0, +\\infty[$. Pour tout $y \\in ]0, +\\infty[$, l'équation $e^x = y$ admet pour unique solution $x = \\ln(y)$. Comme la fonction $\\ln$ est définie sur tout $]0, +\\infty[$, tout élément de l'ensemble d'arrivée possède un antécédent bien défini dans $\\mathbb{R}$. L'application est donc surjective."
        );
      } else if (problemKind === 'surj_true_cube') {
        const c = this.randChoice([1, 2, 7]);
        return this.makeMcq(
          'L1-LOG', 2, "Surjectivité de la fonction cube",
          "Justifier l'existence d'antécédents sur $\\mathbb{R}$ tout entier",
          `Soit l'application $f : \\mathbb{R} \\to \\mathbb{R}$ définie par $f(x) = x^3 - ${c}$. L'application $f$ est-elle surjective ?`,
          `Oui, car tout réel $y \\in \\mathbb{R}$ admet pour antécédent $x = \\sqrt[3]{y + ${c}} \\in \\mathbb{R}$`,
          [
            "Non, car un cube ne peut pas être strictement négatif",
            "Non, car la dérivée de $f$ s'annule en $0$",
            `Oui, uniquement pour les réels $y \\ge ${c}$`
          ],
          `Soit $y \\in \\mathbb{R}$. Résous l'équation $y = x^3 - ${c}$ d'inconnue $x$.`,
          "La fonction racine cubique est définie sur $\\mathbb{R}$ tout entier (y compris pour les réels négatifs).",
          `Soit $y \\in \\mathbb{R}$. L'équation $x^3 - ${c} = y$ équivaut à $x^3 = y + ${c}$. Tout réel admet une unique racine cubique dans $\\mathbb{R}$ : $x = \\sqrt[3]{y + ${c}}$. Ce réel $x$ existe toujours dans $\\mathbb{R}$. Tout élément de l'ensemble d'arrivée admet donc au moins un antécédent : $f$ est surjective.`
        );
      } else if (problemKind === 'bij_affine') {
        const a = this.randChoice([2, 3, 5]);
        const b = this.randChoice([-3, 1, 4]);
        const sign = b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`;
        const invSign = b >= 0 ? `- ${b}` : `+ ${Math.abs(b)}`;
        return this.makeMcq(
          'L1-LOG', 2, "Bijectivité d'une application",
          "Vérifier conjointement l'injectivité et la surjectivité",
          `Soit l'application $f : \\mathbb{R} \\to \\mathbb{R}$ définie par $f(x) = ${a}x ${sign}$. L'application $f$ est-elle bijective ?`,
          "Oui, car elle est à la fois injective et surjective (chaque réel admet un unique antécédent)",
          [
            "Non, car elle est injective mais non surjective",
            "Non, car elle est surjective mais non injective",
            `Non, car $f(0) = ${b} \\neq 0$`
          ],
          "Une application est bijective si et seulement si tout élément du codomaine admet exactement un antécédent.",
          "Vérifie si l'équation $f(x) = y$ possède une unique solution pour tout $y \\in \\mathbb{R}$.",
          `Pour tout $y \\in \\mathbb{R}$, l'équation $${a}x ${sign} = y$ admet pour unique solution $x = \\frac{y ${invSign}}{${a}} \\in \\mathbb{R}$. Comme tout élément de l'ensemble d'arrivée admet un unique antécédent dans l'ensemble de départ, l'application $f$ est bijective.`
        );
      } else {
        // bij_false_quad
        return this.makeMcq(
          'L1-LOG', 2, "Bijectivité et contre-exemples",
          "Tester les conditions d'injectivité et de surjectivité",
          "Soit l'application $f : \\mathbb{R} \\to \\mathbb{R}$ définie par $f(x) = x^2$. L'application $f$ est-elle bijective ?",
          "Non, car elle n'est ni injective (ex: $f(-1) = f(1)$) ni surjective ($-1$ n'a pas d'antécédent)",
          [
            "Oui, car $\\forall x \\in \\mathbb{R}, f(x) \\ge 0$",
            "Elle est injective mais non surjective",
            "Elle est surjective mais non injective"
          ],
          "Vérifie l'injectivité avec $1$ et $-1$, et vérifie la surjectivité avec $-1$.",
          "Pour être bijective, l'application doit satisfaire les deux propriétés simultanément.",
          "D'une part, $f(-1) = 1$ et $f(1) = 1$ avec $-1 \\neq 1$, donc $f$ n'est pas injective. D'autre part, pour $y = -1$, l'équation $x^2 = -1$ n'a aucune solution réelle, donc $f$ n'est pas surjective. Comme elle n'est ni injective ni surjective, elle n'est pas bijective."
        );
      }
    } else if (tier === 3) {
      // Palier 3 : Relation d'équivalence et ensemble quotient
      const n = this.randChoice([3, 4, 5, 6, 7, 8, 9, 11]);
      return this.makeMcq(
        'L1-LOG', 3, "Relation d'équivalence et ensemble quotient",
        "Calculer le cardinal d'un ensemble quotient fini",
        `Sur $\\mathbb{Z}$, la relation $x \\mathcal{R} y \\iff x \\equiv y \\pmod{${n}}$ est une relation d'équivalence. Combien y a-t-il d'éléments dans le quotient $\\mathbb{Z}/${n}\\mathbb{Z}$ ?`,
        `$${n}$`,
        [`$${n - 1}$`, "Une infinité", "$1$"],
        `Le reste de la division euclidienne par ${n} ne prend qu'un nombre fini de valeurs.`,
        `Les classes sont $\\bar{0}, \\bar{1}, \\dots, \\overline{${n-1}}$.`,
        `Tout entier admet un unique reste $r \\in \\{0, 1, \\dots, ${n-1}\\}$ modulo ${n}. Il y a donc exactement ${n} classes d'équivalence disjointes, d'où $|\\mathbb{Z}/${n}\\mathbb{Z}| = ${n}$.`
      );
    } else {
      // Palier 4 : Image réciproque et intersection / union ensembliste
      const variant = this.randChoice([
        {
          q: "Que vaut l'image réciproque de l'intersection : $f^{-1}(A \\cap B)$ ?",
          ans: "$f^{-1}(A) \\cap f^{-1}(B)$",
          dists: ["$f^{-1}(A) \\cup f^{-1}(B)$", "$f^{-1}(A) \\setminus f^{-1}(B)$", "$\\emptyset$"],
          exp: "$x \\in f^{-1}(A \\cap B) \\iff f(x) \\in A \\text{ et } f(x) \\in B \\iff x \\in f^{-1}(A) \\cap f^{-1}(B)$."
        },
        {
          q: "Que vaut l'image réciproque de la réunion : $f^{-1}(A \\cup B)$ ?",
          ans: "$f^{-1}(A) \\cup f^{-1}(B)$",
          dists: ["$f^{-1}(A) \\cap f^{-1}(B)$", "$f(A) \\cup f(B)$", "$A \\cup B$"],
          exp: "$x \\in f^{-1}(A \\cup B) \\iff f(x) \\in A \\text{ ou } f(x) \\in B \\iff x \\in f^{-1}(A) \\cup f^{-1}(B)$."
        },
        {
          q: "Que vaut l'image réciproque du complémentaire : $f^{-1}(F \\setminus B)$ pour $B \\subset F$ ?",
          ans: "$E \\setminus f^{-1}(B)$",
          dists: ["$f^{-1}(F) \\setminus B$", "$E \\cap f(B)$", "$\\emptyset$"],
          exp: "$x \\in f^{-1}(F \\setminus B) \\iff f(x) \\notin B \\iff x \\notin f^{-1}(B) \\iff x \\in E \\setminus f^{-1}(B)$."
        }
      ]);
      return this.makeMcq(
        'L1-LOG', 4, "Image réciproque et opérations ensemblistes",
        "Démontrer des identités ensemblistes formelles",
        `Soit $f : E \\to F$ une application, et $A, B \\subset F$. ${variant.q}`,
        variant.ans, variant.dists,
        "Reviens à la définition formelle de l'image réciproque $x \\in f^{-1}(S) \\iff f(x) \\in S$.",
        "Applique les connecteurs logiques « et » / « ou » sur les appartenances.",
        variant.exp
      );
    }
  },

  generateL1_MAT(tier) {
    if (tier === 1) {
      // Palier 1 : Inversibilité, Déterminant, et Inversion de matrices (2x2 et 3x3 avec det != 1)
      const variant = this.randChoice(['inv_2x2_det_varie', 'inv_2x2_det_varie', 'inv_3x3_diag', 'inv_3x3_triang', 'det_2x2', 'param_lambda', 'triang_3x3']);

      if (variant === 'inv_2x2_det_varie') {
        // Demande explicite : Calculer l'inverse avec déterminants variés non réduits à 1
        const cases = [
          { a: 3, b: 1, c: 4, d: 2, det: 2, detStr: "\\frac{1}{2}", invFull: "\\frac{1}{2} \\begin{pmatrix} 2 & -1 \\\\ -4 & 3 \\end{pmatrix}" },
          { a: 1, b: 2, c: 2, d: 2, det: -2, detStr: "-\\frac{1}{2}", invFull: "-\\frac{1}{2} \\begin{pmatrix} 2 & -2 \\\\ -2 & 1 \\end{pmatrix}" },
          { a: 4, b: 1, c: 1, d: 1, det: 3, detStr: "\\frac{1}{3}", invFull: "\\frac{1}{3} \\begin{pmatrix} 1 & -1 \\\\ -1 & 4 \\end{pmatrix}" },
          { a: 2, b: 3, c: 1, d: 1, det: -1, detStr: "-", invFull: "\\begin{pmatrix} -1 & 3 \\\\ 1 & -2 \\end{pmatrix}" },
          { a: 2, b: 1, c: 1, d: 3, det: 5, detStr: "\\frac{1}{5}", invFull: "\\frac{1}{5} \\begin{pmatrix} 3 & -1 \\\\ -1 & 2 \\end{pmatrix}" },
          { a: 3, b: 2, c: 1, d: 2, det: 4, detStr: "\\frac{1}{4}", invFull: "\\frac{1}{4} \\begin{pmatrix} 2 & -2 \\\\ -1 & 3 \\end{pmatrix}" }
        ];
        const item = this.randChoice(cases);
        const correctStr = `$A^{-1} = ${item.invFull}$`;
        const distractors = [
          `$A^{-1} = \\begin{pmatrix} ${item.d} & ${-item.b} \\\\ ${-item.c} & ${item.a} \\end{pmatrix}$`,
          `$A^{-1} = ${item.detStr} \\begin{pmatrix} ${item.a} & ${-item.b} \\\\ ${-item.c} & ${item.d} \\end{pmatrix}$`,
          `$A^{-1} = ${item.detStr} \\begin{pmatrix} ${item.d} & ${item.b} \\\\ ${item.c} & ${item.a} \\end{pmatrix}$`,
          `$A^{-1} = \\frac{1}{${item.det === -1 ? 1 : item.det + 1}} \\begin{pmatrix} ${item.d} & ${-item.b} \\\\ ${-item.c} & ${item.a} \\end{pmatrix}$`
        ];
        return this.makeMcq(
          'L1-MAT', 1, "Calcul de l'inverse d'une matrice 2x2",
          "Calculer l'inverse par la formule explicite $A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$",
          `Calculer l'inverse de la matrice $A = \\begin{pmatrix} ${item.a} & ${item.b} \\\\ ${item.c} & ${item.d} \\end{pmatrix}$.`,
          correctStr,
          distractors,
          "Formule générale 2x2 : $A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$.",
          `Calcule d'abord le déterminant : $\\det(A) = (${item.a})(${item.d}) - (${item.b})(${item.c}) = ${item.det}$.`,
          `On a $\\det(A) = ${item.a} \\times ${item.d} - ${item.b} \\times ${item.c} = ${item.det} \\neq 0$. Par la formule de la comatrice en dimension 2, $A^{-1} = \\frac{1}{${item.det}} \\begin{pmatrix} ${item.d} & ${-item.b} \\\\ ${-item.c} & ${item.a} \\end{pmatrix} = ${item.invFull}$.`
        );
      } else if (variant === 'inv_3x3_diag') {
        // Demande explicite : Inversion sur des matrices 3x3 (matrice diagonale)
        const d1 = this.randChoice([2, 3, 4, -2]);
        const d2 = this.randChoice([2, 3, 5, -1]);
        const d3 = this.randChoice([3, 4, 2, -3]);
        const s1 = d1 < 0 ? `-\\frac{1}{${Math.abs(d1)}}` : `\\frac{1}{${d1}}`;
        const s2 = d2 === -1 ? `-1` : (d2 < 0 ? `-\\frac{1}{${Math.abs(d2)}}` : `\\frac{1}{${d2}}`);
        const s3 = d3 < 0 ? `-\\frac{1}{${Math.abs(d3)}}` : `\\frac{1}{${d3}}`;

        const correctStr = `$D^{-1} = \\begin{pmatrix} ${s1} & 0 & 0 \\\\ 0 & ${s2} & 0 \\\\ 0 & 0 & ${s3} \\end{pmatrix}$`;
        const distractors = [
          `$D^{-1} = \\begin{pmatrix} -${d1} & 0 & 0 \\\\ 0 & -${d2} & 0 \\\\ 0 & 0 & -${d3} \\end{pmatrix}$`,
          `$D^{-1} = \\frac{1}{${d1*d2*d3}} \\begin{pmatrix} ${d1} & 0 & 0 \\\\ 0 & ${d2} & 0 \\\\ 0 & 0 & ${d3} \\end{pmatrix}$`,
          `$D^{-1} = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$`,
          `$D^{-1} = \\begin{pmatrix} 0 & 0 & ${s1} \\\\ 0 & ${s2} & 0 \\\\ ${s3} & 0 & 0 \\end{pmatrix}$`
        ];
        return this.makeMcq(
          'L1-MAT', 1, "Inverse d'une matrice diagonale 3x3",
          "Inverser une matrice diagonale en prenant l'inverse de chaque pivot diagonal",
          `Déterminer l'inverse de la matrice diagonale $D = \\begin{pmatrix} ${d1} & 0 & 0 \\\\ 0 & ${d2} & 0 \\\\ 0 & 0 & ${d3} \\end{pmatrix}$.`,
          correctStr,
          distractors,
          "Pour une matrice diagonale inversible, l'inverse est la matrice diagonale des inverses des coefficients.",
          "Chaque terme diagonal $d_i$ donne $1/d_i$ dans la matrice inverse.",
          `Une matrice diagonale est inversible ssi aucun élément diagonal n'est nul. Son inverse est obtenue en remplaçant chaque coefficient diagonal $d_{ii}$ par $\\frac{1}{d_{ii}}$. D'où $D^{-1} = \\begin{pmatrix} ${s1} & 0 & 0 \\\\ 0 & ${s2} & 0 \\\\ 0 & 0 & ${s3} \\end{pmatrix}$.`
        );
      } else if (variant === 'inv_3x3_triang') {
        // Demande explicite : Inverse d'une matrice triangulaire 3x3 par Gauss-Jordan
        const a = this.randChoice([1, 2, 3]);
        const b = this.randChoice([1, 2, -1]);
        const prod = a * b;
        const correctStr = `$T^{-1} = \\begin{pmatrix} 1 & ${-a} & ${prod} \\\\ 0 & 1 & ${-b} \\\\ 0 & 0 & 1 \\end{pmatrix}$`;
        const distractors = [
          `$T^{-1} = \\begin{pmatrix} 1 & ${-a} & 0 \\\\ 0 & 1 & ${-b} \\\\ 0 & 0 & 1 \\end{pmatrix}$`,
          `$T^{-1} = \\begin{pmatrix} 1 & ${a} & ${-prod} \\\\ 0 & 1 & ${b} \\\\ 0 & 0 & 1 \\end{pmatrix}$`,
          `$T^{-1} = \\begin{pmatrix} 1 & ${-b} & ${prod} \\\\ 0 & 1 & ${-a} \\\\ 0 & 0 & 1 \\end{pmatrix}$`,
          `$T^{-1} = \\begin{pmatrix} -1 & ${-a} & ${prod} \\\\ 0 & -1 & ${-b} \\\\ 0 & 0 & -1 \\end{pmatrix}$`
        ];
        return this.makeMcq(
          'L1-MAT', 1, "Inverse d'une matrice triangulaire unipotente 3x3",
          "Calculer l'inverse par élimination de Gauss-Jordan $(T \\mid I_3)$",
          `Calculer l'inverse de la matrice triangulaire $T = \\begin{pmatrix} 1 & ${a} & 0 \\\\ 0 & 1 & ${b} \\\\ 0 & 0 & 1 \\end{pmatrix}$.`,
          correctStr,
          distractors,
          "Applique les opérations élémentaires sur les lignes : $L_2 \\leftarrow L_2 - b L_3$ puis $L_1 \\leftarrow L_1 - a L_2$.",
          "Attention au terme en position (1,3) qui résulte de l'élimination : $-a(-b) = ab$.",
          `Par l'algorithme de Gauss-Jordan sur $(T \\mid I_3)$ : $L_2 \\leftarrow L_2 - ${b}L_3$ donne en position $(2,3)$ de l'inverse $-${b}$. Puis $L_1 \\leftarrow L_1 - ${a}L_2$ produit le coefficient $(-${a})(-${b}) = ${prod}$ en position $(1, 3)$. D'où $T^{-1} = \\begin{pmatrix} 1 & ${-a} & ${prod} \\\\ 0 & 1 & ${-b} \\\\ 0 & 0 & 1 \\end{pmatrix}$.`
        );
      } else if (variant === 'det_2x2') {
        // Déterminant 2x2 et inversibilité : 50% inversible, 50% non inversible
        const wantInvertible = this.randChoice([true, false]);
        let a, b, c, d, det;

        if (wantInvertible) {
          a = this.randInt(1, 5);
          b = this.randInt(1, 4);
          c = this.randInt(1, 4);
          d = this.randInt(1, 6);
          while (a * d - b * c === 0) {
            d = this.randInt(1, 6);
          }
          det = a * d - b * c;
        } else {
          const k = this.randChoice([2, 3, -1, -2]);
          const base1 = this.randInt(1, 4);
          const base2 = this.randInt(1, 4);
          if (this.randChoice([true, false])) {
            a = base1; b = base2; c = k * base1; d = k * base2;
          } else {
            a = base1; c = base2; b = k * base1; d = k * base2;
          }
          det = 0;
        }

        const isInv = (det !== 0);
        const correctStr = `$\\det(A) = ${det}$, ${isInv ? 'inversible' : 'non inversible'}`;
        const distractors = [];

        if (isInv) {
          distractors.push(`$\\det(A) = ${det}$, non inversible`);
          const detPlus = a * d + b * c;
          distractors.push(`$\\det(A) = ${detPlus}$, inversible`);
          distractors.push(`$\\det(A) = ${-det}$, inversible`);
          distractors.push(`$\\det(A) = 0$, non inversible`);
          distractors.push(`$\\det(A) = ${a * d}$, inversible`);
        } else {
          distractors.push(`$\\det(A) = 0$, inversible`);
          const detPlus = Math.abs(a * d) + Math.abs(b * c);
          distractors.push(`$\\det(A) = ${detPlus}$, inversible`);
          const prodDiag = Math.abs(a * d) || 4;
          distractors.push(`$\\det(A) = ${prodDiag}$, inversible`);
          distractors.push(`$\\det(A) = ${prodDiag}$, non inversible`);
          distractors.push(`$\\det(A) = ${prodDiag + 2}$, inversible`);
        }

        const justification = isInv
          ? `$\\det(A) = (${a})(${d}) - (${b})(${c}) = ${a * d} - ${b * c} = ${det}$. Comme $\\det(A) \\neq 0$, la matrice est inversible.`
          : `$\\det(A) = (${a})(${d}) - (${b})(${c}) = ${a * d} - ${b * c} = 0$. Comme son déterminant est nul (les lignes ou colonnes sont liées), la matrice n'est pas inversible.`;

        return this.makeMcq(
          'L1-MAT', 1, "Déterminant 2x2 et condition d'inversibilité",
          "Calculer le déterminant d'une matrice 2x2 et tester son inversibilité",
          `Calculer le déterminant de la matrice $A = \\begin{pmatrix} ${a} & ${b} \\\\ ${c} & ${d} \\end{pmatrix}$. $A$ est-elle inversible ?`,
          correctStr,
          distractors,
          "Formule du déterminant 2x2 : $\\det = ad - bc$.",
          "Une matrice carrée est inversible si et seulement si son déterminant est non nul.",
          justification
        );
      } else if (variant === 'param_lambda') {
        const dVal = this.randChoice([2, 3, 4]);
        const l0 = this.randChoice([-3, -2, -1, 1, 2, 3, 4]);
        const bVal = l0 * dVal;
        return this.makeMcq(
          'L1-MAT', 1, "Paramètre d'inversibilité d'une matrice 2x2",
          "Trouver les valeurs d'un paramètre annulant le déterminant",
          `Pour quelle valeur du réel $\\lambda$ la matrice $A = \\begin{pmatrix} \\lambda & ${bVal} \\\\ 1 & ${dVal} \\end{pmatrix}$ n'est-elle PAS inversible ?`,
          `$\\lambda = ${l0}$`,
          [
            `$\\lambda = ${-l0}$`,
            "$\\lambda = 0$",
            `$\\lambda = ${l0 + 2}$`,
            `$\\lambda = ${l0 - 1}$`
          ],
          "Une matrice est non inversible si et seulement si son déterminant est nul : $\\det(A) = 0$.",
          `$\\det(A) = \\lambda \\times (${dVal}) - (${bVal}) \\times 1 = ${dVal}\\lambda - ${bVal} = 0$.`,
          `On calcule le déterminant : $\\det(A) = \\lambda(${dVal}) - ${bVal} = ${dVal}\\lambda - ${bVal}$. La matrice est non inversible ssi $\\det(A) = 0 \\iff ${dVal}\\lambda = ${bVal} \\iff \\lambda = ${l0}$.`
        );
      } else {
        const isNullPivot = this.randChoice([true, false]);
        const d1 = this.randInt(1, 4);
        const d2 = isNullPivot ? 0 : this.randInt(1, 3);
        const d3 = this.randInt(1, 4);
        const det3 = d1 * d2 * d3;
        const isInv3 = det3 !== 0;
        const b12 = this.randInt(-3, 3);
        const b13 = this.randInt(-3, 3);
        const b23 = this.randInt(-3, 3);

        const correctStr = `$\\det(T) = ${det3}$, ${isInv3 ? 'inversible' : 'non inversible'}`;
        const distractors = [
          `$\\det(T) = ${det3}$, ${isInv3 ? 'non inversible' : 'inversible'}`,
          `$\\det(T) = ${det3 === 0 ? 12 : 0}$, ${det3 === 0 ? 'inversible' : 'non inversible'}`,
          `$\\det(T) = ${d1 + d2 + d3 + 2}$, ${d1 + d2 + d3 + 2 !== 0 ? 'inversible' : 'non inversible'}`,
          `$\\det(T) = ${d1 * d3 + (d2 || 1)}$, inversible`,
          `$\\det(T) = ${(d1 || 1) * (d2 || 2)}$, ${isInv3 ? 'inversible' : 'non inversible'}`
        ];

        return this.makeMcq(
          'L1-MAT', 1, "Déterminant d'une matrice triangulaire 3x3",
          "Calculer le déterminant d'une matrice triangulaire comme produit des pivots",
          `Calculer le déterminant de la matrice triangulaire supérieure $T = \\begin{pmatrix} ${d1} & ${b12} & ${b13} \\\\ 0 & ${d2} & ${b23} \\\\ 0 & 0 & ${d3} \\end{pmatrix}$. $T$ est-elle inversible ?`,
          correctStr,
          distractors,
          "Le déterminant d'une matrice triangulaire est le produit de ses éléments diagonaux.",
          "$\\det(T) = d_1 \\times d_2 \\times d_3$.",
          `Pour une matrice triangulaire, le déterminant est le produit des termes diagonaux : $\\det(T) = (${d1}) \\times (${d2}) \\times (${d3}) = ${det3}$. Comme le déterminant est ${isInv3 ? 'non nul, la matrice est inversible' : 'nul, la matrice n\'est pas inversible'}.`
        );
      }
    } else if (tier === 2) {
      // Palier 2 : Multiplication dans les deux sens (AB et BA), matrices 3x3 et matrices non carrées
      const p2Variant = this.randChoice(['prod_2x2_sens', 'prod_3x3', 'prod_non_carre_calcul', 'prod_non_carre_taille', 'prod_mat_vect']);

      if (p2Variant === 'prod_2x2_sens') {
        // Demande explicite : Produit dans les 2 sens AB et BA (non-commutativité)
        const a1 = this.randChoice([1, 2]);
        const b1 = this.randChoice([2, 3]);
        const c1 = this.randChoice([0, 1]);
        const d1 = this.randChoice([1, 2]);

        const a2 = this.randChoice([2, 1]);
        const b2 = this.randChoice([0, 1]);
        const c2 = this.randChoice([1, 3]);
        const d2 = this.randChoice([2, 1]);

        // Calcul de AB
        const ab11 = a1 * a2 + b1 * c2;
        const ab12 = a1 * b2 + b1 * d2;
        const ab21 = c1 * a2 + d1 * c2;
        const ab22 = c1 * b2 + d1 * d2;

        // Calcul de BA
        const ba11 = a2 * a1 + b2 * c1;
        const ba12 = a2 * b1 + b2 * d1;
        const ba21 = c2 * a1 + d2 * c1;
        const ba22 = c2 * b1 + d2 * d1;

        const askBA = this.randChoice([true, false]);
        const targetName = askBA ? "BA" : "AB";
        const otherName = askBA ? "AB" : "BA";
        const ansR11 = askBA ? ba11 : ab11;
        const ansR12 = askBA ? ba12 : ab12;
        const ansR21 = askBA ? ba21 : ab21;
        const ansR22 = askBA ? ba22 : ab22;

        const wrongR11 = askBA ? ab11 : ba11;
        const wrongR12 = askBA ? ab12 : ba12;
        const wrongR21 = askBA ? ab21 : ba21;
        const wrongR22 = askBA ? ab22 : ba22;

        return this.makeMcq(
          'L1-MAT', 2, `Multiplication matricielle non commutative ($${targetName}$)`,
          "Calculer un produit matriciel dans un ordre précis et constater la non-commutativité",
          `Soient $A = \\begin{pmatrix} ${a1} & ${b1} \\\\ ${c1} & ${d1} \\end{pmatrix}$ et $B = \\begin{pmatrix} ${a2} & ${b2} \\\\ ${c2} & ${d2} \\end{pmatrix}$. Calculer le produit $${targetName}$ (attention à l'ordre des facteurs !) :`,
          `$${targetName} = \\begin{pmatrix} ${ansR11} & ${ansR12} \\\\ ${ansR21} & ${ansR22} \\end{pmatrix}$`,
          [
            `$${targetName} = \\begin{pmatrix} ${wrongR11} & ${wrongR12} \\\\ ${wrongR21} & ${wrongR22} \\end{pmatrix}$`, // Piège classique : produit dans l'autre sens
            `$${targetName} = \\begin{pmatrix} ${a1*a2} & ${b1*b2} \\\\ ${c1*c2} & ${d1*d2} \\end{pmatrix}$`, // Produit terme à terme faux
            `$${targetName} = \\begin{pmatrix} ${ansR12} & ${ansR11} \\\\ ${ansR22} & ${ansR21} \\end{pmatrix}$`
          ],
          `Attention à l'ordre des facteurs : pour $${targetName}$, la matrice ${askBA ? 'B' : 'A'} est à gauche et ${askBA ? 'A' : 'B'} est à droite.`,
          "Règle ligne par colonne : chaque coefficient est le produit scalaire d'une ligne de la matrice de gauche par une colonne de la matrice de droite.",
          `En calculant ligne par colonne pour $${targetName}$ : on trouve $\\begin{pmatrix} ${ansR11} & ${ansR12} \\\\ ${ansR21} & ${ansR22} \\end{pmatrix}$. Note bien que $${otherName} = \\begin{pmatrix} ${wrongR11} & ${wrongR12} \\\\ ${wrongR21} & ${wrongR22} \\end{pmatrix} \\neq ${targetName}$, illustrant la non-commutativité du produit matriciel.`
        );
      } else if (p2Variant === 'prod_3x3') {
        // Demande explicite : Produit de matrices 3x3
        const A = [[1, 0, 2], [0, 1, 1], [1, 0, 1]];
        const B = [[2, 1, 0], [1, 0, 1], [0, 2, 1]];
        // AB = [[2, 5, 2], [1, 2, 2], [2, 1, 1]]
        // L1: 1*2+0+2*0=2, 1*1+0+2*2=5, 1*0+0+2*1=2
        // L2: 0*2+1*1+1*0=1, 0*1+1*0+1*2=2, 0*0+1*1+1*1=2
        // L3: 1*2+0+1*0=2, 1*1+0+1*2=3, 1*0+0+1*1=1 -> [2, 3, 1]
        return this.makeMcq(
          'L1-MAT', 2, "Produit de matrices carrées 3x3",
          "Calculer le produit de deux matrices carrées d'ordre 3",
          "Calculer le produit matriciel $AB$ où $A = \\begin{pmatrix} 1 & 0 & 2 \\\\ 0 & 1 & 1 \\\\ 1 & 0 & 1 \\end{pmatrix}$ et $B = \\begin{pmatrix} 2 & 1 & 0 \\\\ 1 & 0 & 1 \\\\ 0 & 2 & 1 \\end{pmatrix}$.",
          "$AB = \\begin{pmatrix} 2 & 5 & 2 \\\\ 1 & 2 & 2 \\\\ 2 & 3 & 1 \\end{pmatrix}$",
          [
            "$AB = \\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 0 & 1 \\end{pmatrix}$",
            "$AB = \\begin{pmatrix} 5 & 2 & 2 \\\\ 2 & 1 & 2 \\\\ 3 & 2 & 1 \\end{pmatrix}$",
            "$AB = \\begin{pmatrix} 3 & 1 & 2 \\\\ 1 & 1 & 2 \\\\ 1 & 2 & 2 \\end{pmatrix}$"
          ],
          "Applique la règle ligne par colonne : le coefficient $c_{ij} = \\sum_{k=1}^3 a_{ik} b_{kj}$.",
          "Ligne 1 de A par Colonne 2 de B : $1 \\times 1 + 0 \\times 0 + 2 \\times 2 = 5$.",
          "On calcule chaque coefficient : $c_{11} = 1(2)+0(1)+2(0)=2$, $c_{12} = 1(1)+0(0)+2(2)=5$, $c_{13} = 1(0)+0(1)+2(1)=2$ ; $c_{21} = 0(2)+1(1)+1(0)=1$, $c_{22} = 0(1)+1(0)+1(2)=2$, $c_{23} = 0(0)+1(1)+1(1)=2$ ; $c_{31} = 1(2)+0(1)+1(0)=2$, $c_{32} = 1(1)+0(0)+1(2)=3$, $c_{33} = 1(0)+0(1)+1(1)=1$."
        );
      } else if (p2Variant === 'prod_non_carre_calcul') {
        // Demande explicite : Produit sur des matrices non carrées (2x3 par 3x2 -> 2x2)
        return this.makeMcq(
          'L1-MAT', 2, "Produit de matrices rectangulaires non carrées",
          "Calculer le produit d'une matrice 2x3 par une matrice 3x2",
          "Calculer le produit matriciel $AB$ où $A = \\begin{pmatrix} 1 & 2 & 0 \\\\ 0 & 1 & 3 \\end{pmatrix} \\in \\mathcal{M}_{2,3}(\\mathbb{R})$ et $B = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\\\ 1 & 0 \\end{pmatrix} \\in \\mathcal{M}_{3,2}(\\mathbb{R})$.",
          "$AB = \\begin{pmatrix} 2 & 5 \\\\ 3 & 2 \\end{pmatrix}$",
          [
            "$AB = \\begin{pmatrix} 2 & 3 \\\\ 5 & 2 \\end{pmatrix}$",
            "$AB = \\begin{pmatrix} 2 & 1 & 0 \\\\ 0 & 2 & 0 \\end{pmatrix}$",
            "$AB = \\begin{pmatrix} 3 & 5 \\\\ 2 & 2 \\end{pmatrix}$"
          ],
          "Une matrice de taille $(2 \\times 3)$ multipliée par une matrice de taille $(3 \\times 2)$ donne une matrice $(2 \\times 2)$.",
          "Ligne 1 de A par Colonne 2 de B : $1(1) + 2(2) + 0(0) = 5$.",
          "Le produit $AB$ est de format $(2 \\times 2)$ : $c_{11} = 1(2)+2(0)+0(1) = 2$, $c_{12} = 1(1)+2(2)+0(0) = 5$, $c_{21} = 0(2)+1(0)+3(1) = 3$, $c_{22} = 0(1)+1(2)+3(0) = 2$. D'où $AB = \\begin{pmatrix} 2 & 5 \\\\ 3 & 2 \\end{pmatrix}$."
        );
      } else if (p2Variant === 'prod_non_carre_taille') {
        // Format et compatibilité de matrices rectangulaires
        return this.makeMcq(
          'L1-MAT', 2, "Compatibilité et format des produits matriciels",
          "Déterminer si un produit matriciel est défini et sa taille résultante",
          "Soient deux matrices $A \\in \\mathcal{M}_{3,4}(\\mathbb{R})$ et $B \\in \\mathcal{M}_{4,2}(\\mathbb{R})$. Quel produit est bien défini et quelle est sa taille ?",
          "$AB$ est défini et appartient à $\\mathcal{M}_{3,2}(\\mathbb{R})$ ; $BA$ n'est pas défini",
          [
            "Les deux produits $AB$ et $BA$ sont bien définis et sont carrés",
            "$BA$ est défini et appartient à $\\mathcal{M}_{4,4}(\\mathbb{R})$ ; $AB$ n'est pas défini",
            "$AB$ est défini et appartient à $\\mathcal{M}_{4,3}(\\mathbb{R})$"
          ],
          "Pour que le produit $MN$ soit défini, le nombre de colonnes de $M$ doit être égal au nombre de lignes de $N$.",
          "Si $M \\in \\mathcal{M}_{n,p}$ et $N \\in \\mathcal{M}_{p,q}$, alors $MN \\in \\mathcal{M}_{n,q}$.",
          "Pour $AB$, $A$ a 4 colonnes et $B$ a 4 lignes : le produit est bien défini et sa taille est $(3 \\times 2)$. Pour $BA$, $B$ a 2 colonnes et $A$ a 3 lignes : $2 \\neq 3$, donc $BA$ n'est pas défini."
        );
      } else {
        // Produit matrice 3x2 par vecteur 2x1 -> vecteur 3x1
        const a = this.randChoice([1, 2]);
        const b = this.randChoice([2, 3]);
        const c = this.randChoice([0, 1]);
        const d = this.randChoice([2, 1]);
        const e = this.randChoice([3, 1]);
        const f = this.randChoice([1, 0]);

        const x = 2, y = -1;
        const r1 = a * x + b * y;
        const r2 = c * x + d * y;
        const r3 = e * x + f * y;

        return this.makeMcq(
          'L1-MAT', 2, "Produit matrice-vecteur (format rectangulaire)",
          "Multiplier une matrice $3 \\times 2$ par un vecteur colonne $2 \\times 1$",
          `Calculer le vecteur $AX$ où $A = \\begin{pmatrix} ${a} & ${b} \\\\ ${c} & ${d} \\\\ ${e} & ${f} \\end{pmatrix}$ et $X = \\begin{pmatrix} ${x} \\\\ ${y} \\end{pmatrix}$ :`,
          `$AX = \\begin{pmatrix} ${r1} \\\\ ${r2} \\\\ ${r3} \\end{pmatrix}$`,
          [
            `$AX = \\begin{pmatrix} ${r1 + 2} \\\\ ${r2} \\\\ ${r3 - 1} \\end{pmatrix}$`,
            `$AX = \\begin{pmatrix} ${r2} \\\\ ${r1} \\\\ ${r3} \\end{pmatrix}$`,
            `$AX = \\begin{pmatrix} ${a*x} & ${b*y} \\\\ ${c*x} & ${d*y} \\end{pmatrix}$`
          ],
          "Chaque ligne de $A$ est multipliée par le vecteur colonne $X$.",
          `$(3 \\times 2) \\times (2 \\times 1) = (3 \\times 1)$.`,
          `On effectue le produit ligne par colonne : ligne 1 : $${a}(${x}) + ${b}(${y}) = ${r1}$, ligne 2 : $${c}(${x}) + ${d}(${y}) = ${r2}$, ligne 3 : $${e}(${x}) + ${f}(${y}) = ${r3}$. D'où $AX = \\begin{pmatrix} ${r1} \\\\ ${r2} \\\\ ${r3} \\end{pmatrix}$.`
        );
      }
    } else if (tier === 3) {
      // Palier 3 : Variété de questions (Pivot de Gauss, Puissances, Trace, Transposition, Rang)
      const p3Variant = this.randChoice(['systeme_3x3_echelonne', 'puissance_nilpotente', 'puissance_diagonale', 'transposition_symetrie', 'trace_commutateur', 'rang_echelonnee']);

      if (p3Variant === 'systeme_3x3_echelonne') {
        // Résolution d'un système triangulaire échelonné 3x3 par substitution remontante
        const z = this.randChoice([2, 3, -1]);
        const y = this.randChoice([1, 2, -2]);
        const x = this.randChoice([1, 3, 2]);

        const eq3 = 2 * z;
        const eq2 = y + 2 * z;
        const eq1 = x + 2 * y - z;

        return this.makeMcq(
          'L1-MAT', 3, "Résolution d'un système échelonné (Substitution remontante)",
          "Résoudre un système linéaire triangulaire par remontée des pivots",
          `Résoudre le système linéaire échelonné suivant dans $\\mathbb{R}^3$ :\n$$\\begin{cases} x + 2y - z = ${eq1} \\\\ y + 2z = ${eq2} \\\\ 2z = ${eq3} \\end{cases}$$`,
          `$(x, y, z) = (${x}, ${y}, ${z})$`,
          [
            `$(x, y, z) = (${y}, ${x}, ${z})$`,
            `$(x, y, z) = (${x + 1}, ${y}, ${z - 1})$`,
            `$(x, y, z) = (${x}, ${-y}, ${z})$`
          ],
          "Résous d'abord la dernière équation pour trouver $z$, puis remonte vers $y$ puis $x$.",
          `$2z = ${eq3} \\implies z = ${z}$. Puis $y + 2(${z}) = ${eq2} \\implies y = ${y}$.`,
          `1. Dernière ligne : $2z = ${eq3} \\implies z = ${z}$.\n2. Deuxième ligne : $y + 2(${z}) = ${eq2} \\implies y = ${eq2} - ${2*z} = ${y}$.\n3. Première ligne : $x + 2(${y}) - (${z}) = ${eq1} \\implies x = ${eq1} - ${2*y} + ${z} = ${x}$. Conclusion : $(x, y, z) = (${x}, ${y}, ${z})$.`
        );
      } else if (p3Variant === 'puissance_nilpotente') {
        const a = this.randChoice([2, 3, -1]);
        return this.makeMcq(
          'L1-MAT', 3, "Puissance n-ième d'une matrice triangulaire unipotente",
          "Calculer $A^n$ par décomposition $A = I_2 + N$ avec matrice nilpotente",
          `Soit $A = \\begin{pmatrix} 1 & ${a} \\\\ 0 & 1 \\end{pmatrix}$. Pour tout entier $n \\ge 1$, que vaut la puissance $A^n$ ?`,
          `$A^n = \\begin{pmatrix} 1 & ${a}n \\\\ 0 & 1 \\end{pmatrix}$`,
          [
            `$A^n = \\begin{pmatrix} 1 & ${a}^n \\\\ 0 & 1 \\end{pmatrix}$`,
            `$A^n = \\begin{pmatrix} n & ${a}n \\\\ 0 & n \\end{pmatrix}$`,
            `$A^n = \\begin{pmatrix} 1 & n \\\\ 0 & 1 \\end{pmatrix}$`
          ],
          "Décompose $A = I_2 + N$ où $N = \\begin{pmatrix} 0 & a \\\\ 0 & 0 \\end{pmatrix}$ et calcule $N^2$.",
          "Comme $I_2$ et $N$ commutent et $N^2 = 0$, la formule du binôme se réduit à $A^n = I_2 + nN$.",
          `On écrit $A = I_2 + N$ avec $N = \\begin{pmatrix} 0 & ${a} \\\\ 0 & 0 \\end{pmatrix}$. On a $N^2 = \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$. Comme $I_2 N = N I_2$, par le binôme de Newton : $A^n = (I_2 + N)^n = I_2 + nN + 0 = \\begin{pmatrix} 1 & ${a}n \\\\ 0 & 1 \\end{pmatrix}$.`
        );
      } else if (p3Variant === 'puissance_diagonale') {
        const a = this.randChoice([2, 3]);
        const b = this.randChoice([4, 5]);
        return this.makeMcq(
          'L1-MAT', 3, "Puissance n-ième d'une matrice diagonale",
          "Élever une matrice diagonale à la puissance n",
          `Pour la matrice diagonale $D = \\begin{pmatrix} ${a} & 0 \\\\ 0 & ${b} \\end{pmatrix}$, quelle est l'expression de $D^n$ pour tout $n \\in \\mathbb{N}^*$ ?`,
          `$D^n = \\begin{pmatrix} ${a}^n & 0 \\\\ 0 & ${b}^n \\end{pmatrix}$`,
          [
            `$D^n = \\begin{pmatrix} ${a}n & 0 \\\\ 0 & ${b}n \\end{pmatrix}$`,
            `$D^n = (${a*b})^n \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$`,
            `$D^n = \\begin{pmatrix} ${a}^n & n \\\\ 0 & ${b}^n \\end{pmatrix}$`
          ],
          "Le produit de matrices diagonales s'effectue terme à terme sur la diagonale.",
          "Par récurrence immédiate, chaque terme diagonal est élevé à la puissance $n$.",
          `Pour toute matrice diagonale, le produit matriciel conserve la structure diagonale : $D^n = \\begin{pmatrix} ${a}^n & 0 \\\\ 0 & ${b}^n \\end{pmatrix}$.`
        );
      } else if (p3Variant === 'transposition_symetrie') {
        return this.makeMcq(
          'L1-MAT', 3, "Propriétés de la transposition et matrices symétriques",
          "Reconnaître qu'une matrice de la forme ${}^t A A$ est toujours symétrique",
          "Pour toute matrice rectangulaire $A \\in \\mathcal{M}_{n,p}(\\mathbb{R})$, quelle affirmation est TOUJOURS vraie ?",
          "La matrice ${}^t A A$ est carrée d'ordre $p$ et symétrique",
          [
            "La matrice $A \\, {}^t A$ est égale à ${}^t A A$",
            "La matrice ${}^t A A$ est antisymétrique",
            "La transposée vérifie ${}^t(AB) = {}^t A \\, {}^t B$"
          ],
          "Calcule la transposée de ${}^t A A$ en appliquant ${}^t(MN) = {}^t N \\, {}^t M$.",
          "${}^t({}^t A A) = {}^t A \\, {}^t({}^t A) = {}^t A A$.",
          "On a ${}^t A \\in \\mathcal{M}_{p,n}$ et $A \\in \\mathcal{M}_{n,p}$, donc le produit ${}^t A A$ est carré de taille $p \\times p$. De plus, ${}^t({}^t A A) = {}^t A \\, {}^t({}^t A) = {}^t A A$. La matrice est donc symétrique."
        );
      } else if (p3Variant === 'trace_commutateur') {
        const a = this.randInt(2, 6);
        const d = this.randInt(-4, 4);
        const tr = a + d;
        return this.makeMcq(
          'L1-MAT', 3, "Trace d'une matrice et invariance par produit commuté",
          "Utiliser la linéarité et la cyclicité de la trace",
          `Soit $A = \\begin{pmatrix} ${a} & 5 \\\\ 3 & ${d} \\end{pmatrix}$. Que vaut $\\text{Tr}(A)$, et que peut-on affirmer sur $\\text{Tr}(AB - BA)$ pour toute matrice $B \\in \\mathcal{M}_2(\\mathbb{R})$ ?`,
          `$\\text{Tr}(A) = ${tr}$ et $\\text{Tr}(AB - BA) = 0$`,
          [
            `$\\text{Tr}(A) = ${tr}$ et $\\text{Tr}(AB - BA) = 2$`,
            `$\\text{Tr}(A) = ${a * d - 15}$ et $\\text{Tr}(AB - BA) = 0$`,
            `$\\text{Tr}(A) = ${tr + 1}$ et $\\text{Tr}(AB - BA) \\neq 0$`
          ],
          "La trace est la somme des coefficients diagonaux.",
          "Rappelle-toi de la propriété fondamentale : $\\text{Tr}(AB) = \\text{Tr}(BA)$.",
          `$\\text{Tr}(A) = ${a} + (${d}) = ${tr}$. Par linéarité et commutativité sous la trace : $\\text{Tr}(AB - BA) = \\text{Tr}(AB) - \\text{Tr}(BA) = 0$.`
        );
      } else {
        return this.makeMcq(
          'L1-MAT', 3, "Rang d'une matrice échelonnée en lignes",
          "Déterminer le rang à partir du nombre de pivots non nuls",
          "Quel est le rang dans $\\mathbb{R}$ de la matrice échelonnée $M = \\begin{pmatrix} 2 & 1 & -1 & 3 \\\\ 0 & 3 & 4 & 1 \\\\ 0 & 0 & 0 & 5 \\\\ 0 & 0 & 0 & 0 \\end{pmatrix}$ ?",
          "$\\text{rg}(M) = 3$",
          [
            "$\\text{rg}(M) = 4$",
            "$\\text{rg}(M) = 2$",
            "$\\text{rg}(M) = 1$"
          ],
          "Le rang d'une matrice échelonnée en lignes est égal au nombre de ses lignes non nulles (ou nombre de pivots).",
          "Compte les pivots non nuls : 2 sur la ligne 1, 3 sur la ligne 2, 5 sur la ligne 3.",
          "La matrice possède 3 pivots non nuls (sur les trois premières lignes). La quatrième ligne est entièrement nulle. Le rang de la matrice est donc égal à 3."
        );
      }
    } else {
      // Palier 4 : Grand Bilan Universitaire (Inversion 3x3 Gauss-Jordan, Inverse det != 1, Polynôme annulateur, Système avec paramètre m, Binôme de Newton)
      const p4Variant = this.randChoice(['bilan_inverse_3x3_gauss', 'bilan_inverse_2x2_det', 'bilan_polynome_annulateur', 'bilan_systeme_parametre', 'bilan_puissance_binome']);

      if (p4Variant === 'bilan_inverse_3x3_gauss') {
        // Inversion 3x3 complète par Gauss-Jordan
        return this.makeMcq(
          'L1-MAT', 4, "Inversion complète d'une matrice 3x3 (Gauss-Jordan)",
          "Appliquer l'algorithme complet de Gauss-Jordan $(A \\mid I_3) \\to (I_3 \\mid A^{-1})$",
          "Quelle est la matrice inverse de $A = \\begin{pmatrix} 1 & 0 & 0 \\\\ 2 & 1 & 0 \\\\ 1 & 1 & 1 \\end{pmatrix}$ obtenue par élimination de Gauss-Jordan ?",
          "$A^{-1} = \\begin{pmatrix} 1 & 0 & 0 \\\\ -2 & 1 & 0 \\\\ 1 & -1 & 1 \\end{pmatrix}$",
          [
            "$A^{-1} = \\begin{pmatrix} 1 & 0 & 0 \\\\ 2 & 1 & 0 \\\\ 1 & 1 & 1 \\end{pmatrix}$",
            "$A^{-1} = \\begin{pmatrix} 1 & 0 & 0 \\\\ -2 & 1 & 0 \\\\ -1 & -1 & 1 \\end{pmatrix}$",
            "$A^{-1} = \\begin{pmatrix} 1 & -2 & 1 \\\\ 0 & 1 & -1 \\\\ 0 & 0 & 1 \\end{pmatrix}$"
          ],
          "Applique les opérations élémentaires : $L_2 \\leftarrow L_2 - 2L_1$, puis $L_3 \\leftarrow L_3 - L_1$, puis $L_3 \\leftarrow L_3 - L_2$.",
          "Sur la partie droite $I_3$, $L_3 \\leftarrow (L_3 - L_1) - (L_2 - 2L_1) = L_3 - L_2 + L_1$.",
          "On forme $(A \\mid I_3)$. Opérations élémentaires :\n1. $L_2 \\leftarrow L_2 - 2L_1 \\implies$ ligne 2 de droite : $(-2, 1, 0)$.\n2. $L_3 \\leftarrow L_3 - L_1 \\implies$ ligne 3 de droite devient $(-1, 0, 1)$.\n3. $L_3 \\leftarrow L_3 - L_2 \\implies$ ligne 3 de droite devient $(-1 - (-2), 0 - 1, 1) = (1, -1, 1)$.\nD'où $A^{-1} = \\begin{pmatrix} 1 & 0 & 0 \\\\ -2 & 1 & 0 \\\\ 1 & -1 & 1 \\end{pmatrix}$."
        );
      } else if (p4Variant === 'bilan_inverse_2x2_det') {
        return this.makeMcq(
          'L1-MAT', 4, "Inversion 2x2 avec déterminant non unitaire",
          "Calculer l'inverse avec un déterminant non égal à 1",
          "Déterminer l'inverse de la matrice $A = \\begin{pmatrix} 5 & 3 \\\\ 3 & 2 \\end{pmatrix}$ et de la matrice $B = \\begin{pmatrix} 2 & 1 \\\\ 4 & 5 \\end{pmatrix}$ : que vaut $\\det(B)$ et $B^{-1}$ ?",
          "$\\det(B) = 6$ et $B^{-1} = \\frac{1}{6} \\begin{pmatrix} 5 & -1 \\\\ -4 & 2 \\end{pmatrix}$",
          [
            "$\\det(B) = 6$ et $B^{-1} = \\begin{pmatrix} 5 & -1 \\\\ -4 & 2 \\end{pmatrix}$",
            "$\\det(B) = -6$ et $B^{-1} = -\\frac{1}{6} \\begin{pmatrix} 2 & -1 \\\\ -4 & 5 \\end{pmatrix}$",
            "$\\det(B) = 14$ et $B^{-1} = \\frac{1}{14} \\begin{pmatrix} 5 & -1 \\\\ -4 & 2 \\end{pmatrix}$"
          ],
          "$\\det(B) = 2(5) - 1(4) = 6$.",
          "$B^{-1} = \\frac{1}{\\det(B)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$.",
          "Pour la matrice $B$ : $\\det(B) = 2 \\times 5 - 1 \\times 4 = 10 - 4 = 6 \\neq 0$. L'inverse est donc $B^{-1} = \\frac{1}{6} \\begin{pmatrix} 5 & -1 \\\\ -4 & 2 \\end{pmatrix}$."
        );
      } else if (p4Variant === 'bilan_polynome_annulateur') {
        return this.makeMcq(
          'L1-MAT', 4, "Inverse matriciel via un polynôme annulateur",
          "Déduire l'inversibilité et l'expression de l'inverse à partir d'une relation polynomiale",
          "Soit $A \\in \\mathcal{M}_n(\\mathbb{R})$ vérifiant la relation matricielle $A^2 - 4A + 3I_n = 0$. Prouver que $A$ est inversible et donner son inverse :",
          "$A$ est inversible et $A^{-1} = \\frac{1}{3}(4I_n - A)$",
          [
            "$A$ est inversible et $A^{-1} = 4I_n - A$",
            "$A$ n'est pas nécessairement inversible",
            "$A$ est inversible et $A^{-1} = \\frac{1}{3}(A - 4I_n)$"
          ],
          "Isole la matrice identité : $A^2 - 4A = -3I_n \\iff A(4I_n - A) = 3I_n$.",
          "Divise par 3 pour obtenir $A B = I_n$, alors $A^{-1} = B$.",
          "On factorise par $A$ : $A^2 - 4A = -3I_n \\iff A(A - 4I_n) = -3I_n \\iff A \\left[\\frac{1}{3}(4I_n - A)\\right] = I_n$. Par définition de l'inverse, $A$ est inversible et son inverse est $A^{-1} = \\frac{1}{3}(4I_n - A)$."
        );
      } else if (p4Variant === 'bilan_systeme_parametre') {
        const m0 = this.randChoice([2, 3]);
        const m0sq = m0 * m0;
        return this.makeMcq(
          'L1-MAT', 4, "Système linéaire avec paramètre (Système de Cramer)",
          "Déterminer les conditions sur un paramètre pour l'existence et l'unicité de la solution",
          `Pour quelles valeurs du paramètre réel $m$ le système linéaire $\\begin{cases} mx + ${m0}y = 1 \\\\ ${m0}x + my = 3 \\end{cases}$ admet-il une unique solution dans $\\mathbb{R}^2$ ?`,
          `$m \\in \\mathbb{R} \\setminus \\{-${m0}, ${m0}\\}$`,
          [
            `$m = ${m0}$ uniquement`,
            `$m \\in \\mathbb{R} \\setminus \\{0\\}$`,
            `$m = -${m0}$ uniquement`
          ],
          "Un système carré admet une unique solution ssi le déterminant de sa matrice est non nul (système de Cramer).",
          `$\\det(A_m) = m^2 - (${m0})^2 = m^2 - ${m0sq}$.`,
          `Le déterminant de la matrice associée est $\\det(A_m) = m \\times m - ${m0} \\times ${m0} = m^2 - ${m0sq}$. Le système est de Cramer (solution unique) si et seulement si $\\det(A_m) \\neq 0 \\iff m^2 \\neq ${m0sq} \\iff m \\neq \\pm ${m0}$. D'où $m \\in \\mathbb{R} \\setminus \\{-${m0}, ${m0}\\}$.`
        );
      } else {
        return this.makeMcq(
          'L1-MAT', 4, "Puissance n-ième par le binôme de Newton",
          "Calculer $A^n$ par décomposition $A = \\lambda I + N$ avec matrice nilpotente",
          "Soit $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}$. Quelle est l'expression de $A^n$ pour tout $n \\ge 1$ ?",
          "$A^n = \\begin{pmatrix} 2^n & n 2^{n-1} \\\\ 0 & 2^n \\end{pmatrix}$",
          [
            "$A^n = \\begin{pmatrix} 2^n & 1 \\\\ 0 & 2^n \\end{pmatrix}$",
            "$A^n = \\begin{pmatrix} 2^n & n \\\\ 0 & 2^n \\end{pmatrix}$",
            "$A^n = \\begin{pmatrix} 2^n & 2^{n-1} \\\\ 0 & 2^n \\end{pmatrix}$"
          ],
          "Décompose $A = 2I_2 + N$ avec $N = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$. Remarque que $N^2 = 0$.",
          "Applique le binôme de Newton : $(2I_2 + N)^n = \\sum_{k=0}^n \\binom{n}{k} (2I_2)^{n-k} N^k = 2^n I_2 + n 2^{n-1} N$.",
          "Comme $2I_2$ et $N$ commutent et $N^2 = 0$, la formule du binôme donne directement $A^n = (2I_2 + N)^n = \\binom{n}{0} 2^n I_2 + \\binom{n}{1} 2^{n-1} N = 2^n I_2 + n 2^{n-1} N = \\begin{pmatrix} 2^n & n 2^{n-1} \\\\ 0 & 2^n \\end{pmatrix}$."
        );
      }
    }
  },

  generateL1_EV1(tier) {
    if (tier === 1) {
      // Palier 1 : Sous-espaces vectoriels (SEV) - Varier les types d'ensembles
      const p1Variant = this.randChoice(['affine_non_sev', 'hyperplan_sev', 'cone_quadratique', 'quadrant_positif', 'systeme_homogene', 'espace_fonctions']);

      if (p1Variant === 'affine_non_sev') {
        const a = this.randChoice([2, 3, 4]);
        const b = this.randChoice([1, 2, 5]);
        const c = this.randChoice([1, 3]);
        const d = this.randChoice([1, 2, -3, 4]);
        return this.makeMcq(
          'L1-EV1', 1, "Caractérisation d'un SEV : Plan affine ne passant pas par l'origine",
          "Tester l'appartenance du vecteur nul $0_E$",
          `L'ensemble $F = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid ${a}x - ${b}y + ${c}z = ${d}\\}$ est-il un sous-espace vectoriel de $\\mathbb{R}^3$ ?`,
          "Non, car le vecteur nul $(0, 0, 0) \\notin F$",
          [
            "Oui, car l'équation est de degré 1",
            "Oui, car c'est un plan de dimension 2",
            "Non, car il contient une infinité de points"
          ],
          "La première condition nécessaire pour qu'une partie soit un sous-espace vectoriel est de contenir le vecteur nul $0_E$.",
          `Teste avec $(0, 0, 0)$ : $${a}(0) - ${b}(0) + ${c}(0) = 0 \\neq ${d}$.`,
          `Pour $x=y=z=0$, le premier membre vaut $0$, alors que le second membre vaut $${d} \\neq 0$. Ainsi, $(0, 0, 0) \\notin F$. La condition nécessaire $0_E \\in F$ n'étant pas satisfaite, $F$ n'est PAS un sous-espace vectoriel.`
        );
      } else if (p1Variant === 'hyperplan_sev') {
        const a = this.randChoice([2, 3, 5]);
        const b = this.randChoice([1, 4]);
        const c = this.randChoice([2, 3]);
        return this.makeMcq(
          'L1-EV1', 1, "Caractérisation d'un SEV : Hyperplan vectoriel",
          "Démontrer qu'une équation linéaire homogène définit un sous-espace vectoriel",
          `L'ensemble $F = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid ${a}x - ${b}y + ${c}z = 0\\}$ est-il un sous-espace vectoriel de $\\mathbb{R}^3$ ?`,
          "Oui, car c'est le noyau d'une forme linéaire non nulle (hyperplan vectoriel)",
          [
            "Non, car il ne contient que des vecteurs à composantes entières",
            "Non, car il est de dimension 2 et non 3",
            "Oui, mais uniquement pour des scalaires positifs"
          ],
          "Vérifie les 3 conditions : $0_E \\in F$, stabilité par addition et par multiplication par un scalaire.",
          "Remarque que $F = \\text{Ker}(\\phi)$ où $\\phi(x, y, z) = " + a + "x - " + b + "y + " + c + "z$ est une forme linéaire.",
          `1. Pour $(0,0,0)$ : $${a}(0) - ${b}(0) + ${c}(0) = 0$, donc $0_{\\mathbb{R}^3} \\in F$.\n2. Pour tous $u, v \\in F$ et $\\lambda, \\mu \\in \\mathbb{R}$, par linéarité de l'équation, $\\lambda u + \\mu v \\in F$.\n$F$ est le noyau de la forme linéaire non nulle $\\phi : (x,y,z) \\mapsto ${a}x - ${b}y + ${c}z$. C'est donc un sous-espace vectoriel (hyperplan de dimension 2) de $\\mathbb{R}^3$.`
        );
      } else if (p1Variant === 'cone_quadratique') {
        return this.makeMcq(
          'L1-EV1', 1, "Caractérisation d'un SEV : Condition quadratique",
          "Tester la stabilité par addition sur un cône ou une réunion de droites",
          "L'ensemble $F = \\{(x, y) \\in \\mathbb{R}^2 \\mid x^2 - y^2 = 0\\}$ est-il un sous-espace vectoriel de $\\mathbb{R}^2$ ?",
          "Non, car $F$ n'est pas stable par addition (bien qu'il contienne $(0, 0)$)",
          [
            "Oui, car $(0, 0) \\in F$",
            "Oui, car $x^2 - y^2 = (x - y)(x + y)$ est un produit de facteurs linéaires",
            "Non, car $(0, 0) \\notin F$"
          ],
          "Vérifie si la somme de deux éléments de $F$ reste toujours dans $F$.",
          "Prends $u = (1, 1) \\in F$ et $v = (1, -1) \\in F$. Calcule $u + v$.",
          "$F$ est la réunion des deux droites $y = x$ et $y = -x$. On a $(0, 0) \\in F$. Cependant, pour $u = (1, 1) \\in F$ et $v = (1, -1) \\in F$, la somme $u + v = (2, 0)$ ne vérifie pas $2^2 - 0^2 = 0$ ($4 \\neq 0$). $F$ n'est pas stable par addition, ce n'est donc PAS un sous-espace vectoriel."
        );
      } else if (p1Variant === 'quadrant_positif') {
        return this.makeMcq(
          'L1-EV1', 1, "Caractérisation d'un SEV : Inégalités et scalaires négatifs",
          "Tester la stabilité par multiplication par un scalaire réel quelconque",
          "L'ensemble $F = \\{(x, y) \\in \\mathbb{R}^2 \\mid x \\ge 0 \\text{ et } y \\ge 0\\}$ est-il un sous-espace vectoriel de $\\mathbb{R}^2$ ?",
          "Non, car $F$ n'est pas stable par multiplication par un scalaire négatif",
          [
            "Oui, car il contient l'origine $(0, 0)$ et est stable par addition",
            "Non, car $(0, 0) \\notin F$",
            "Oui, c'est un sous-espace vectoriel fermé"
          ],
          "Un sous-espace vectoriel sur $\\mathbb{R}$ doit être stable par produit par TOUT scalaire $\\lambda \\in \\mathbb{R}$, positif ou négatif.",
          "Prends $u = (1, 1) \\in F$ et multiplie par $\\lambda = -1$.",
          "Bien que $(0, 0) \\in F$ et que $F$ soit stable par addition, pour $u = (1, 1) \\in F$ et le scalaire $\\lambda = -1 \\in \\mathbb{R}$, le vecteur $(-1) \\cdot u = (-1, -1) \\notin F$. $F$ n'est pas stable par multiplication externe, ce n'est donc PAS un SEV."
        );
      } else if (p1Variant === 'systeme_homogene') {
        return this.makeMcq(
          'L1-EV1', 1, "Caractérisation d'un SEV : Intersection de deux hyperplans",
          "Reconnaître l'ensemble des solutions d'un système linéaire homogène",
          "L'ensemble $F = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x - 2y = 0 \\text{ et } y + 3z = 0\\}$ est-il un sous-espace vectoriel de $\\mathbb{R}^3$ ?",
          "Oui, car c'est l'intersection de deux sous-espaces vectoriels (droite vectorielle)",
          [
            "Non, car il y a deux équations pour trois inconnues",
            "Non, car une droite n'est jamais un sous-espace vectoriel",
            "Oui, mais uniquement si on ajoute la condition $x + y + z = 0$"
          ],
          "L'intersection de deux sous-espaces vectoriels est TOUJOURS un sous-espace vectoriel.",
          "Chaque équation linéaire sans second membre définit un SEV de dimension 2 (plan vectoriel).",
          "Chaque équation $x - 2y = 0$ et $y + 3z = 0$ définit un plan vectoriel passant par l'origine. L'ensemble des solutions communes est l'intersection de ces deux sous-espaces vectoriels, c'est donc un sous-espace vectoriel (une droite vectorielle de dimension 1 dans $\\mathbb{R}^3$)."
        );
      } else {
        return this.makeMcq(
          'L1-EV1', 1, "Caractérisation d'un SEV : Espace de fonctions dérivables",
          "Vérifier qu'une condition d'annulation de dérivée définit un SEV",
          "Soit $E = \\mathcal{C}^1(\\mathbb{R}, \\mathbb{R})$ l'espace vectoriel des fonctions de classe $\\mathcal{C}^1$. L'ensemble $F = \\{f \\in E \\mid f'(0) = 0\\}$ est-il un sous-espace vectoriel de $E$ ?",
          "Oui, car la fonction nulle vérifie $0'(0) = 0$ et la dérivation est linéaire",
          [
            "Non, car une fonction dérivable n'est pas un vecteur",
            "Non, car il manque la condition $f(0) = 0$",
            "Oui, mais seulement pour les fonctions polynomiales"
          ],
          "Vérifie si la fonction nulle est dans $F$, puis si $(\\lambda f + \\mu g)'(0) = 0$.",
          "La linéarité de l'opération de dérivation garantit la stabilité par combinaison linéaire.",
          "La fonction nulle vérifie bien $0'(0) = 0$. De plus, pour toutes fonctions $f, g \\in F$ et scalaires $\\lambda, \\mu \\in \\mathbb{R}$ : $(\\lambda f + \\mu g)'(0) = \\lambda f'(0) + \\mu g'(0) = \\lambda(0) + \\mu(0) = 0$. Donc $\\lambda f + \\mu g \\in F$. $F$ est le noyau de la forme linéaire $f \\mapsto f'(0)$, c'est donc un SEV de $E$."
        );
      }
    } else if (tier === 2) {
      // Palier 2 : Familles libres et liées, familles génératrices et matrices associées (MOINS DE ZÉROS)
      // L'utilisateur a explicitement demandé : "varie plus les valeurs dans les matrices et dans les familles avec moins de vecteurs contenant des 0"
      const p2Variant = this.randChoice(['famille_r3_sans_zero_liee', 'famille_r3_sans_zero_libre', 'famille_4_vecteurs_r3', 'famille_r2_sans_zero', 'rang_matrice_sans_zero']);

      if (p2Variant === 'famille_r3_sans_zero_liee') {
        // Famille liée de 3 vecteurs dans R^3 SANS AUCUN ZÉRO
        const tripletsLies = [
          { u: "(1, 2, -1)", v: "(2, -1, 3)", w: "(3, 1, 2)", rel: "w = u + v" },
          { u: "(2, 1, 3)", v: "(1, 3, -2)", w: "(3, 4, 1)", rel: "w = u + v" },
          { u: "(1, -2, 3)", v: "(3, 1, -1)", w: "(4, -1, 2)", rel: "w = u + v" },
          { u: "(2, -1, 2)", v: "(1, 3, 1)", w: "(3, 2, 3)", rel: "w = u + v" },
          { u: "(1, 1, 2)", v: "(2, -1, 1)", w: "(3, 0, 3)", rel: "w = u + v" } // non retenu car 0
        ].filter(t => !t.u.includes('0') && !t.v.includes('0') && !t.w.includes('0'));

        const choice = this.randChoice(tripletsLies);
        return this.makeMcq(
          'L1-EV1', 2, "Liberté d'une famille de vecteurs sans composante nulle dans $\\mathbb{R}^3$",
          "Détecter une dépendance linéaire sans composante nulle",
          `Dans $\\mathbb{R}^3$, la famille $\\mathcal{F} = \\{u = ${choice.u}, v = ${choice.v}, w = ${choice.w}\\}$ est-elle libre ou liée ?`,
          `Liée, car $${choice.rel}$ (combinaison linéaire non triviale)`,
          [
            "Libre, car aucun des vecteurs ne contient de coordonnée nulle",
            "Libre, car le déterminant de la famille vaut 1",
            "Génératrice de $\\mathbb{R}^3$ car elle comporte 3 vecteurs"
          ],
          "Vérifie si l'un des vecteurs est somme ou combinaison linéaire des deux autres.",
          `Additionne les composantes de $u$ et $v$ : $${choice.u} + ${choice.v}$.`,
          `On constate directement que pour chaque coordonnée, $u + v = ${choice.w} = w$. Comme $u + v - w = 0_{\\mathbb{R}^3}$ avec des coefficients non tous nuls $(1, 1, -1)$, les vecteurs sont linéairement dépendants : la famille $\\mathcal{F}$ est donc liée (et son déterminant est nul).`
        );
      } else if (p2Variant === 'famille_r3_sans_zero_libre') {
        // Famille libre de 3 vecteurs dans R^3 SANS AUCUN ZÉRO
        const tripletsLibres = [
          { u: "(1, 1, 2)", v: "(2, -1, 1)", w: "(1, 3, 1)", det: "9" },
          { u: "(1, 2, 1)", v: "(2, 1, -1)", w: "(1, -1, 2)", det: "-12" },
          { u: "(2, 1, 1)", v: "(1, 2, -1)", w: "(-1, 1, 2)", det: "12" },
          { u: "(1, -1, 2)", v: "(2, 1, 1)", w: "(3, 2, -1)", det: "-6" },
          { u: "(1, 2, 3)", v: "(2, 1, 1)", w: "(1, 1, 1)", det: "-1" }
        ];

        const choice = this.randChoice(tripletsLibres);
        return this.makeMcq(
          'L1-EV1', 2, "Base de $\\mathbb{R}^3$ et liberté sans composante nulle",
          "Calculer le déterminant d'une famille de 3 vecteurs dans $\\mathbb{R}^3$",
          `Dans $\\mathbb{R}^3$, la famille $\\mathcal{F} = \\{u = ${choice.u}, v = ${choice.v}, w = ${choice.w}\\}$ forme-t-elle une base de $\\mathbb{R}^3$ ?`,
          `Oui, c'est une famille libre (car $\\det(u, v, w) = ${choice.det} \\neq 0$) de 3 vecteurs dans un espace de dimension 3`,
          [
            "Non, car 3 vecteurs ne peuvent jamais engendrer $\\mathbb{R}^3$",
            `Non, elle est liée car $\\det(u, v, w) = 0$`,
            "Génératrice mais non libre"
          ],
          "Forme la matrice des coordonnées colonnes et calcule son déterminant.",
          "Dans un espace de dimension $n$, toute famille libre de $n$ vecteurs est une base.",
          `On calcule le déterminant de la matrice formée par ces trois vecteurs colonnes : $\\det(u, v, w) = ${choice.det} \\neq 0$. Les vecteurs sont linéairement indépendants : la famille est libre. Comme $\\text{Card}(\\mathcal{F}) = 3 = \\dim(\\mathbb{R}^3)$, c'est une base de $\\mathbb{R}^3$.`
        );
      } else if (p2Variant === 'famille_4_vecteurs_r3') {
        const u1 = "(1, 2, -1)";
        const u2 = "(2, 1, 3)";
        const u3 = "(3, -2, 1)";
        const u4 = "(1, 3, 2)";
        return this.makeMcq(
          'L1-EV1', 2, "Théorème du cardinal : Famille de 4 vecteurs dans $\\mathbb{R}^3$",
          "Appliquer le théorème stipulant que toute famille de plus de $n$ vecteurs dans $\\mathbb{R}^n$ est liée",
          `Soit la famille de 4 vecteurs $\\mathcal{F} = \\{${u1}, ${u2}, ${u3}, ${u4}\\}$ dans $\\mathbb{R}^3$. Sans aucun calcul, que peut-on affirmer sur la liberté de $\\mathcal{F}$ ?`,
          "Elle est obligatoirement liée, car $\\text{Card}(\\mathcal{F}) = 4 > \\dim(\\mathbb{R}^3) = 3$",
          [
            "Elle est libre car tous les vecteurs sont non nuls et distincts",
            "Elle peut être libre ou liée selon les coefficients",
            "C'est une base de $\\mathbb{R}^3$"
          ],
          "Compare le nombre de vecteurs dans la famille au cardinal maximal d'une famille libre dans $\\mathbb{R}^3$.",
          "Dans un espace vectoriel de dimension finie $n$, toute famille contenant strictement plus de $n$ vecteurs est liée.",
          "La dimension de $\\mathbb{R}^3$ est 3. Le nombre de vecteurs dans une famille libre ne peut jamais dépasser la dimension de l'espace. Comme $\\text{Card}(\\mathcal{F}) = 4 > 3$, la famille $\\mathcal{F}$ est nécessairement liée."
        );
      } else if (p2Variant === 'famille_r2_sans_zero') {
        const isLibre = this.randChoice([true, false]);
        let u, v, detVal, justif;
        if (isLibre) {
          const a = this.randChoice([2, 3]);
          const b = this.randChoice([1, -2]);
          const c = this.randChoice([1, 2]);
          const d = this.randChoice([4, 5]);
          u = `(${a}, ${b})`;
          v = `(${c}, ${d})`;
          const det = a * d - b * c;
          detVal = det;
          justif = `Libre et forme une base de $\\mathbb{R}^2$ car $\\det(u, v) = ${det} \\neq 0$`;
        } else {
          const a = this.randChoice([2, 3]);
          const b = this.randChoice([1, -2]);
          const k = this.randChoice([-2, 2, -3]);
          u = `(${a}, ${b})`;
          v = `(${a * k}, ${b * k})`;
          detVal = 0;
          justif = `Liée car les deux vecteurs sont colinéaires ($v = ${k}u$)`;
        }
        return this.makeMcq(
          'L1-EV1', 2, "Liberté de deux vecteurs dans $\\mathbb{R}^2$ sans coordonnées nulles",
          "Tester la colinéarité et le déterminant dans $\\mathbb{R}^2$",
          `Dans $\\mathbb{R}^2$, la famille $\\mathcal{F} = \\{u = ${u}, v = ${v}\\}$ est-elle libre ou liée ?`,
          justif,
          isLibre ? [
            "Liée, car $u$ et $v$ ne contiennent aucun zéro",
            "Liée, car le produit scalaire est non nul",
            "Génératrice sans être libre"
          ] : [
            "Libre, car aucun des vecteurs n'est nul",
            "Libre, car ils appartiennent au plan $\\mathbb{R}^2$",
            "Base orthonormée de $\\mathbb{R}^2$"
          ],
          "Dans $\\mathbb{R}^2$, deux vecteurs sont liés si et seulement s'ils sont colinéaires (l'un multiple de l'autre).",
          "Calcule le déterminant $ad - bc$.",
          isLibre
            ? `Le déterminant est $\\det(u, v) = ${detVal} \\neq 0$. Les vecteurs ne sont pas colinéaires : la famille est libre. Comme $\\text{Card} = 2 = \\dim(\\mathbb{R}^2)$, c'est une base.`
            : `On a directement $v = ${u} \\times k$, donc les deux vecteurs sont colinéaires : $\\det(u, v) = 0$. La famille est donc liée.`
        );
      } else {
        // Rang d'une matrice 3x3 sans aucun zéro
        return this.makeMcq(
          'L1-EV1', 2, "Rang d'une matrice $3 \\times 3$ sans coefficients nuls",
          "Déterminer le rang par combinaison de lignes",
          "Quel est le rang dans $\\mathbb{R}$ de la matrice sans aucun zéro $M = \\begin{pmatrix} 1 & 2 & 1 \\\\ 2 & 1 & 3 \\\\ 3 & 3 & 4 \\end{pmatrix}$ ?",
          "$\\text{rg}(M) = 2$ car la ligne 3 est égale à $L_1 + L_2$",
          [
            "$\\text{rg}(M) = 3$ car tous les coefficients sont non nuls",
            "$\\text{rg}(M) = 1$",
            "$\\text{rg}(M) = 0$"
          ],
          "Observe les lignes : y a-t-il une relation linéaire directe entre elles ?",
          "$L_1 + L_2 = (1+2, 2+1, 1+3) = (3, 3, 4) = L_3$.",
          "On remarque immédiatement que $L_3 = L_1 + L_2$. La troisième ligne est donc superflue. Comme $L_1$ et $L_2$ ne sont pas proportionnelles, le sous-espace engendré par les lignes est de dimension 2. Ainsi, $\\text{rg}(M) = 2$."
        );
      }
    } else if (tier === 3) {
      // Palier 3 : Bases, Dimension et Sous-espaces supplémentaires (Grande variété de questions)
      // L'utilisateur a explicitement demandé : "Palier 3 varie plus les questions"
      const p3Variant = this.randChoice(['base_hyperplan', 'base_droite_inter', 'supplementaire_somme_directe', 'dimension_vect_poly', 'intersection_plans_distincts']);

      if (p3Variant === 'base_hyperplan') {
        const a = this.randChoice([2, 3]);
        const b = this.randChoice([1, -1]);
        return this.makeMcq(
          'L1-EV1', 3, "Base et dimension d'un plan vectoriel de $\\mathbb{R}^3$",
          "Déterminer une base et la dimension d'un sous-espace défini par une équation",
          `Quelle est la dimension et une base du sous-espace $F = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x - ${a}y + z = 0\\}$ ?`,
          `$\\dim(F) = 2$, de base $\\mathcal{B} = \\{(${a}, 1, 0), (-1, 0, 1)\\}$`,
          [
            `$\\dim(F) = 1$, de base $\\mathcal{B} = \\{(1, -${a}, 1)\\}$`,
            `$\\dim(F) = 3$, de base canonique de $\\mathbb{R}^3$`,
            `$\\dim(F) = 2$, de base $\\mathcal{B} = \\{(1, 1, 1), (0, 0, 0)\\}$`
          ],
          "Exprime l'une des variables en fonction des deux autres : $x = " + a + "y - z$.",
          "Décompose le vecteur générique $(x, y, z) = y(" + a + ", 1, 0) + z(-1, 0, 1)$.",
          `Tout vecteur de $F$ vérifie $x = ${a}y - z$. Ainsi $(x, y, z) = (${a}y - z, y, z) = y(${a}, 1, 0) + z(-1, 0, 1)$. Les deux vecteurs générateurs ne sont pas colinéaires, ils forment une famille libre. Donc $\\dim(F) = 2$ et $\\mathcal{B} = \\{(${a}, 1, 0), (-1, 0, 1)\\}$ est une base de $F$.`
        );
      } else if (p3Variant === 'base_droite_inter') {
        return this.makeMcq(
          'L1-EV1', 3, "Dimension d'une intersection de deux plans indépendants",
          "Résoudre un système homogène de deux équations dans $\\mathbb{R}^3$",
          "Quelle est la dimension et un vecteur directeur de la droite $D = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x + y - z = 0 \\text{ et } 2x - y + z = 0\\}$ ?",
          "$\\dim(D) = 1$, dirigée par le vecteur $(0, 1, 1)$",
          [
            "$\\dim(D) = 2$, engendrée par deux plans",
            "$\\dim(D) = 1$, dirigée par $(1, 1, 1)$",
            "$\\dim(D) = 0$, réduite au singleton $\{(0, 0, 0)\}$"
          ],
          "Additionne les deux équations pour éliminer $y$ et $z$ : $(x+y-z) + (2x-y+z) = 3x = 0$.",
          "En déduire $x = 0$, puis $y = z$.",
          "En sommant les deux équations, on obtient $3x = 0 \\implies x = 0$. En injectant $x=0$ dans la première équation, il vient $y = z$. Ainsi tout vecteur s'écrit $(0, y, y) = y(0, 1, 1)$. L'espace $D$ est la droite vectorielle $\\text{Vect}((0, 1, 1))$, de dimension $3 - 2 = 1$."
        );
      } else if (p3Variant === 'supplementaire_somme_directe') {
        return this.makeMcq(
          'L1-EV1', 3, "Sous-espaces supplémentaires et somme directe dans $\\mathbb{R}^3$",
          "Vérifier la condition $F \\oplus D = \\mathbb{R}^3$ via $\\dim F + \\dim D = 3$ et $F \\cap D = \\{0\\}$",
          "Soit le plan vectoriel $F = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x + y + z = 0\\}$. Pour quelle droite vectorielle $D = \\text{Vect}(u)$ a-t-on $F \\oplus D = \\mathbb{R}^3$ ?",
          "Pour $u = (1, 1, 1)$, car $(1, 1, 1) \\notin F$",
          [
            "Pour $u = (1, -1, 0)$, car $(1, -1, 0) \\in F$",
            "Pour $u = (2, -1, -1)$, car $2 + (-1) + (-1) = 0$",
            "Pour aucun vecteur, car un plan n'a pas de supplémentaire"
          ],
          "Pour qu'une droite $D = \\text{Vect}(u)$ soit supplémentaire d'un plan $F$ dans $\\mathbb{R}^3$, il faut et suffit que $u \\notin F$.",
          "Teste les équations : $1 + 1 + 1 = 3 \\neq 0$, donc $(1, 1, 1) \\notin F$.",
          "Comme $\\dim(F) = 2$ et $\\dim(D) = 1$, $\\dim(F) + \\dim(D) = 3 = \\dim(\\mathbb{R}^3)$. Pour que la somme soit directe, il faut et suffit que $F \\cap D = \\{0\\}$, ce qui équivaut à ce que le vecteur directeur $u$ n'appartienne pas à $F$. Pour $u = (1, 1, 1)$, $1+1+1 = 3 \\neq 0$, donc $u \\notin F$. Ainsi $F \\oplus \\text{Vect}((1, 1, 1)) = \\mathbb{R}^3$."
        );
      } else if (p3Variant === 'dimension_vect_poly') {
        return this.makeMcq(
          'L1-EV1', 3, "Dimension d'un sous-espace de polynômes $\\mathbb{R}_n[X]$",
          "Calculer la dimension d'un sous-espace engendré par des polynômes",
          "Dans l'espace $\\mathbb{R}_2[X]$, quelle est la dimension du sous-espace $G = \\text{Vect}(X^2 - 1, \\, X + 1, \\, X^2 + X)$ ?",
          "$\\dim(G) = 2$, car $X^2 + X = (X^2 - 1) + (X + 1)$",
          [
            "$\\dim(G) = 3$, car il y a 3 polynômes non nuls",
            "$\\dim(G) = 1$",
            "$\\dim(G) = 4$"
          ],
          "Examine si l'un des polynômes est combinaison linéaire des deux autres.",
          "$(X^2 - 1) + (X + 1) = X^2 + X$.",
          "On observe que le troisième polynôme est la somme exacte des deux premiers : $(X^2 - 1) + (X + 1) = X^2 + X$. La famille est liée. Les deux premiers polynômes $X^2 - 1$ et $X + 1$ ne sont pas proportionnels (degrés différents 2 et 1), ils forment donc une famille libre. D'où $\\dim(G) = 2$."
        );
      } else {
        return this.makeMcq(
          'L1-EV1', 3, "Intersection de deux plans vectoriels distincts",
          "Relier la formule de Grassmann à l'intersection de sous-espaces",
          "Soient $P_1$ et $P_2$ deux plans vectoriels distincts de $\\mathbb{R}^3$. Quelle est la dimension de leur intersection $P_1 \\cap P_2$ ?",
          "$\\dim(P_1 \\cap P_2) = 1$ (droite vectorielle)",
          [
            "$\\dim(P_1 \\cap P_2) = 0$ (réduite au vecteur nul)",
            "$\\dim(P_1 \\cap P_2) = 2$",
            "$\\dim(P_1 \\cap P_2) = 3$"
          ],
          "Utilise la formule de Grassmann : $\\dim(P_1 \\cap P_2) = \\dim(P_1) + \\dim(P_2) - \\dim(P_1 + P_2)$.",
          "Comme $P_1 \\neq P_2$ et $P_1 \\subset P_1 + P_2 \\subset \\mathbb{R}^3$, $\\dim(P_1 + P_2) = 3$.",
          "Comme les plans sont distincts, la somme $P_1 + P_2$ contient strictement un plan, donc $\\dim(P_1 + P_2) = 3$. D'après la formule de Grassmann : $\\dim(P_1 \\cap P_2) = 2 + 2 - 3 = 1$. L'intersection de deux plans vectoriels distincts dans $\\mathbb{R}^3$ est toujours une droite vectorielle."
        );
      }
    } else {
      // Palier 4 : Grassmann, Hyperplans, Sommes directes et Espaces de matrices (Bilan universitaire approfondi)
      // L'utilisateur a explicitement demandé : "idem pour le palier 4"
      const p4Variant = this.randChoice(['grassmann_r4', 'hyperplans_inter_codim', 'matrices_sym_antisym', 'somme_directe_3_sev', 'degres_echelonnes']);

      if (p4Variant === 'grassmann_r4') {
        return this.makeMcq(
          'L1-EV1', 4, "Formule de Grassmann dans $\\mathbb{R}^4$",
          "Déterminer la dimension d'une intersection de deux hyperplans dans $\\mathbb{R}^4$",
          "Soient $F$ et $G$ deux sous-espaces vectoriels distincts de dimension 3 dans $\\mathbb{R}^4$. Que vaut la dimension de $F \\cap G$ ?",
          "$\\dim(F \\cap G) = 2$",
          [
            "$\\dim(F \\cap G) = 3$",
            "$\\dim(F \\cap G) = 1$",
            "$\\dim(F \\cap G) = 0$"
          ],
          "Applique Grassmann : $\\dim(F \\cap G) = \\dim(F) + \\dim(G) - \\dim(F + G)$.",
          "Comme $F \\neq G$ et $\\dim(F) = 3$, la somme $F + G$ est de dimension strictement supérieure à 3, donc $\\dim(F + G) = 4$.",
          "Puisque $F \\neq G$ et $\\dim(F) = 3$, l'espace somme $F + G$ contient strictement $F$, donc $\\dim(F + G) > 3$. Comme $F + G \\subset \\mathbb{R}^4$, on a nécessairement $\\dim(F + G) = 4$. D'après la formule de Grassmann : $\\dim(F \\cap G) = 3 + 3 - 4 = 2$."
        );
      } else if (p4Variant === 'hyperplans_inter_codim') {
        return this.makeMcq(
          'L1-EV1', 4, "Intersection de deux hyperplans distincts en dimension $n$",
          "Généraliser la codimension d'un hyperplan vectoriel",
          "Soit $E$ un espace vectoriel de dimension finie $n \\ge 3$. Si $H_1$ et $H_2$ sont deux hyperplans distincts de $E$, quelle est la dimension de $H_1 \\cap H_2$ ?",
          "$\\dim(H_1 \\cap H_2) = n - 2$",
          [
            "$\\dim(H_1 \\cap H_2) = n - 1$",
            "$\\dim(H_1 \\cap H_2) = 1$",
            "$\\dim(H_1 \\cap H_2) = 0$"
          ],
          "Par définition, un hyperplan dans un espace de dimension $n$ a pour dimension $n - 1$.",
          "Applique la formule de Grassmann avec $\\dim(H_1 + H_2) = n$.",
          "Un hyperplan a pour dimension $n - 1$. Comme $H_1 \\neq H_2$, la somme $H_1 + H_2$ est un sous-espace contenant strictement $H_1$, donc $\\dim(H_1 + H_2) = n$. Par la formule de Grassmann : $\\dim(H_1 \\cap H_2) = (n - 1) + (n - 1) - n = n - 2$."
        );
      } else if (p4Variant === 'matrices_sym_antisym') {
        return this.makeMcq(
          'L1-EV1', 4, "Somme directe des matrices symétriques et antisymétriques",
          "Démontrer que $\\mathcal{M}_n(\\mathbb{R}) = \\mathcal{S}_n(\\mathbb{R}) \\oplus \\mathcal{A}_n(\\mathbb{R})$",
          "Dans $\\mathcal{M}_n(\\mathbb{R})$, quelles sont les dimensions respectives de l'espace des matrices symétriques $\\mathcal{S}_n(\\mathbb{R})$ et antisymétriques $\\mathcal{A}_n(\\mathbb{R})$ ?",
          "$\\dim \\mathcal{S}_n = \\frac{n(n+1)}{2}$ et $\\dim \\mathcal{A}_n = \\frac{n(n-1)}{2}$, avec $\\mathcal{S}_n \\oplus \\mathcal{A}_n = \\mathcal{M}_n(\\mathbb{R})$",
          [
            "$\\dim \\mathcal{S}_n = n^2 - n$ et $\\dim \\mathcal{A}_n = n$",
            "$\\dim \\mathcal{S}_n = \\frac{n^2}{2}$ et $\\dim \\mathcal{A}_n = \\frac{n^2}{2}$",
            "$\\dim \\mathcal{S}_n = n$ et $\\dim \\mathcal{A}_n = n - 1$"
          ],
          "Une matrice symétrique est déterminée par ses éléments diagonaux ($n$) et ses éléments strictement au-dessus ($\\frac{n(n-1)}{2}$).",
          "Pour une matrice antisymétrique, la diagonale est obligatoirement nulle.",
          "Pour une matrice symétrique, on choisit librement la diagonale ($n$ valeurs) et la partie triangulaire supérieure stricte ($\\frac{n(n-1)}{2}$), soit $n + \\frac{n(n-1)}{2} = \\frac{n(n+1)}{2}$. Pour une matrice antisymétrique, la diagonale est nulle et il reste $\\frac{n(n-1)}{2}$ coefficients. La somme de leurs dimensions vaut bien $\\frac{n(n+1)}{2} + \\frac{n(n-1)}{2} = n^2 = \\dim \\mathcal{M}_n(\\mathbb{R})$ et $\\mathcal{S}_n \\cap \\mathcal{A}_n = \\{0\\}$."
        );
      } else if (p4Variant === 'somme_directe_3_sev') {
        return this.makeMcq(
          'L1-EV1', 4, "Somme directe de 3 sous-espaces vectoriels",
          "Comprendre le piège classique des intersections deux à deux",
          "Soient $F_1, F_2, F_3$ trois sous-espaces vectoriels d'un espace $E$. Laquelle des conditions suivantes garantit que la somme $F_1 + F_2 + F_3$ est directe ?",
          "$\\forall (x_1, x_2, x_3) \\in F_1 \\times F_2 \\times F_3, \\quad x_1 + x_2 + x_3 = 0 \\implies x_1 = x_2 = x_3 = 0$",
          [
            "$F_1 \\cap F_2 = \\{0\\}$, $F_2 \\cap F_3 = \\{0\\}$ et $F_1 \\cap F_3 = \\{0\\}$ (intersection deux à deux nulle)",
            "$F_1 \\cap F_2 \\cap F_3 = \\{0\\}$",
            "$\\dim(F_1) + \\dim(F_2) + \\dim(F_3) = \\dim(E)$ sans condition sur l'intersection"
          ],
          "Attention : pour 3 sous-espaces ou plus, la nullité des intersections deux à deux $F_i \\cap F_j = \\{0\\}$ est INSUFFISANTE !",
          "Pense à trois droites coplanaires distinctes dans le plan : elles se coupent deux à deux en $\{0\}$, mais leur somme n'est pas directe car leur somme est de dimension 2 et non $1+1+1=3$.",
          "La condition $F_i \\cap F_j = \\{0\\}$ est un piège classique : 3 droites coplanaires distinctes dans $\\mathbb{R}^2$ ont des intersections deux à deux réduites à $\{0\}$, mais leur somme n'est pas directe. La seule condition nécessaire et suffisante est l'unicité de la décomposition du vecteur nul : $x_1 + x_2 + x_3 = 0 \\implies x_1 = x_2 = x_3 = 0$."
        );
      } else {
        return this.makeMcq(
          'L1-EV1', 4, "Base de polynômes à degrés échelonnés",
          "Justifier la liberté d'une famille de polynômes de degrés distincts",
          "Soit $\\mathcal{P} = (P_0, P_1, \\dots, P_n)$ une famille de polynômes non nuls de $\\mathbb{R}_n[X]$ tels que $\\deg(P_k) = k$ pour tout $k \\in \\{0, 1, \\dots, n\\}$. Que peut-on affirmer ?",
          "$\\mathcal{P}$ est toujours libre, et forme une base de $\\mathbb{R}_n[X]$",
          [
            "$\\mathcal{P}$ est toujours liée si $n \\ge 2$",
            "$\\mathcal{P}$ est génératrice mais peut être liée selon les coefficients",
            "$\\mathcal{P}$ est une base uniquement si tous les polynômes sont unitaires"
          ],
          "Considère une combinaison linéaire nulle $\\sum_{k=0}^n \\lambda_k P_k = 0$ et examine le terme de plus haut degré.",
          "Si les $\\lambda_k$ n'étaient pas tous nuls, le terme de degré maximal ne pourrait pas s'annuler.",
          "Soit $\\sum_{k=0}^n \\lambda_k P_k = 0$. Si les coefficients n'étaient pas tous nuls, soit $m = \\max\\{k \\mid \\lambda_k \\neq 0\\}$. Alors $\\deg\\left(\\sum_{k=0}^n \\lambda_k P_k\\right) = \\deg(\\lambda_m P_m) = m$, ce qui contredit que la somme est le polynôme nul. La famille est donc libre. Comme elle compte $n+1$ polynômes et que $\\dim \\mathbb{R}_n[X] = n+1$, c'est une base."
        );
      }
    }
  },

  generateL1_APP(tier) {
    if (tier === 1) {
      // Palier 1 : Applications linéaires avec exemples CONCRETS
      // L'utilisateur a explicitement demandé : "L1-05 Palier 1 varie davantage les questions avec des questions avec des exemples concrets"
      const p1Variant = this.randChoice(['image_vecteur_concret', 'image_polynome_concret', 'projection_concrete', 'test_non_linearite_concret', 'theoreme_rang_concret']);

      if (p1Variant === 'image_vecteur_concret') {
        const a = this.randChoice([2, 3]);
        const b = this.randChoice([1, -2, -3]);
        const c = this.randChoice([1, -1, 4]);
        const d = this.randChoice([2, 5]);
        const x = this.randChoice([1, 2, -1]);
        const y = this.randChoice([2, -2, 3]);
        const fx = a * x + b * y;
        const fy = c * x + d * y;

        return this.makeMcq(
          'L1-APP', 1, "Calcul concret de l'image d'un vecteur par une application linéaire",
          "Évaluer une application linéaire définie sur $\\mathbb{R}^2$",
          `Soit $f : \\mathbb{R}^2 \\to \\mathbb{R}^2$ définie par $f(x, y) = (${a}x + (${b})y, \\, ${c}x + ${d}y)$. Quelle est l'image du vecteur $u = (${x}, ${y})$ par $f$ ?`,
          `$f(${x}, ${y}) = (${fx}, ${fy})$`,
          [
            `$f(${x}, ${y}) = (${fx + 1}, ${fy - 1})$`,
            `$f(${x}, ${y}) = (${fy}, ${fx})$`,
            `$f(${x}, ${y}) = (${a * x}, ${d * y})$`
          ],
          `Remplace $x$ par ${x} et $y$ par ${y} dans chaque composante de la formule.`,
          `Première composante : ${a}(${x}) + (${b})(${y}) = ${fx}. Seconde composante : ${c}(${x}) + ${d}(${y}) = ${fy}.`,
          `On applique directement la formule : $f(${x}, ${y}) = (${a} \\times (${x}) + (${b}) \\times (${y}), \\, ${c} \\times (${x}) + ${d} \\times (${y})) = (${fx}, ${fy})$.`
        );
      } else if (p1Variant === 'image_polynome_concret') {
        const a = this.randChoice([2, 3, 4]);
        const b = this.randChoice([3, 5, -4]);
        const c = this.randChoice([1, 2, -7]);
        return this.makeMcq(
          'L1-APP', 1, "Application de dérivation concrète sur $\\mathbb{R}_2[X]$",
          "Calculer l'image d'un polynôme par l'opérateur de dérivation linéaire",
          `Soit l'application de dérivation $D : \\mathbb{R}_2[X] \\to \\mathbb{R}_1[X]$ définie par $D(P) = P'$. Quelle est l'image du polynôme $P(X) = ${a}X^2 + (${b})X + (${c})$ ?`,
          `$D(P) = ${2 * a}X + (${b})$`,
          [
            `$D(P) = ${a}X + (${b})$`,
            `$D(P) = ${2 * a}X^2 + (${b})X$`,
            `$D(P) = ${2 * a}X + (${b}) + (${c})$`
          ],
          "Dérive terme à terme : $(a X^2)' = 2a X$, $(b X)' = b$, et $(c)' = 0$.",
          `$(X^2)' = 2X$, donc $(${a}X^2)' = ${2 * a}X$.`,
          `Par linéarité de la dérivation : $D(${a}X^2 + (${b})X + (${c})) = ${a}(2X) + (${b})(1) + 0 = ${2 * a}X + (${b})$.`
        );
      } else if (p1Variant === 'projection_concrete') {
        const x = this.randChoice([3, 5, -4]);
        const y = this.randChoice([2, -6, 7]);
        return this.makeMcq(
          'L1-APP', 1, "Projecteur géométrique concret sur l'axe des abscisses",
          "Identifier l'action et les propriétés d'un projecteur dans le plan",
          `Soit $p : \\mathbb{R}^2 \\to \\mathbb{R}^2$ définie par $p(x, y) = (x, 0)$ (projection sur l'axe $(Ox)$ parallèlement à $(Oy)$). Que vaut $p(${x}, ${y})$ et quelle relation caractérise cette projection ?`,
          `$p(${x}, ${y}) = (${x}, 0)$ et $p \\circ p = p$`,
          [
            `$p(${x}, ${y}) = (0, ${y})$ et $p \\circ p = 0$`,
            `$p(${x}, ${y}) = (${x}, 0)$ et $p \\circ p = \\text{Id}$`,
            `$p(${x}, ${y}) = (${x}, ${y})$ et $p$ est bijective`
          ],
          "La projection sur l'axe des abscisses annule la coordonnée $y$ et conserve $x$.",
          "Calculer $p(p(x, y)) = p(x, 0) = (x, 0) = p(x, y)$ prouve l'idempotence $p^2 = p$.",
          `$p(${x}, ${y}) = (${x}, 0)$. De plus, en réappliquant $p$, $p(p(x, y)) = p(x, 0) = (x, 0) = p(x, y)$, d'où $p \\circ p = p$ : $p$ est bien un projecteur vectoriel.`
        );
      } else if (p1Variant === 'test_non_linearite_concret') {
        return this.makeMcq(
          'L1-APP', 1, "Détection concrète de non-linéarité",
          "Repérer les pièges de non-linéarité (termes constants, produits de variables)",
          "Parmi les applications suivantes de $\\mathbb{R}^2$ dans $\\mathbb{R}$, laquelle n'est PAS linéaire ?",
          "$f(x, y) = 2x - 3y + 1$ (car $f(0, 0) = 1 \\neq 0$)",
          [
            "$g(x, y) = 3x - 5y$",
            "$h(x, y) = -x + 4y$",
            "$k(x, y) = 7x$"
          ],
          "Pour toute application linéaire, l'image du vecteur nul DOIT être le vecteur nul ($f(0_E) = 0_F$).",
          "Calcule $f(0, 0)$ pour chaque fonction.",
          "Pour que $f$ soit linéaire, il est indispensable que $f(0, 0) = 0$. Or ici, $f(0, 0) = 2(0) - 3(0) + 1 = 1 \\neq 0$. $f$ est une fonction affine mais PAS linéaire."
        );
      } else {
        const dimE = this.randChoice([4, 5]);
        const dimF = 3;
        const dimKer = this.randChoice([1, 2]);
        const rg = dimE - dimKer;
        const isSurj = rg === dimF;
        const surjText = isSurj ? "est surjective (car rang = 3)" : "n'est pas surjective (car rang < 3)";
        const surjExpl = isSurj ? "Comme $\\text{rg}(f) = 3$, $f$ est bien surjective." : "Comme $\\text{rg}(f) < 3$, $f$ n'est pas surjective.";
        return this.makeMcq(
          'L1-APP', 1, "Théorème du rang appliqué à un exemple concret",
          "Calculer le rang et déterminer la surjectivité",
          `Soit une application linéaire $f : \\mathbb{R}^{${dimE}} \\to \\mathbb{R}^{${dimF}}$ telle que $\\dim(\\text{Ker} f) = ${dimKer}$. Que vaut $\\text{rg}(f)$ et $f$ est-elle surjective ?`,
          `$\\text{rg}(f) = ${rg}$ et $f$ ${surjText}`,
          [
            `$\\text{rg}(f) = ${dimE}$ et $f$ est bijective`,
            `$\\text{rg}(f) = ${dimKer}$ et $f$ est injective`,
            `$\\text{rg}(f) = ${rg + 1}$ et $f$ n'est pas surjective`
          ],
          "Applique le théorème du rang : $\\dim(E) = \\dim(\\text{Ker} f) + \\text{rg}(f)$.",
          `Ici $\\dim(E) = ${dimE}$, donc $\\text{rg}(f) = ${dimE} - ${dimKer} = ${rg}$. Compare au dimensionnement de l'espace d'arrivée $\\mathbb{R}^{${dimF}}$.`,
          `D'après le Théorème du Rang : $\\text{rg}(f) = \\dim(\\mathbb{R}^{${dimE}}) - \\dim(\\text{Ker} f) = ${dimE} - ${dimKer} = ${rg}$. L'application est surjective si et seulement si $\\text{rg}(f) = \\dim(\\mathbb{R}^{${dimF}}) = ${dimF}$. ${surjExpl}`
        );
      }
    } else if (tier === 2) {
      // Palier 2 : Noyau, Image, Injectivité et Surjectivité sur des APPLICATIONS CONCRÈTES
      // L'utilisateur a explicitement demandé : "en donnant des applications concrètes où il faut donner le noyau, déterminer si elle est injective, déterminer l'image / rang et déterminer si elle est surjective."
      const p2Variant = this.randChoice(['concret_r3_r2_noyau_surj', 'concret_r2_r3_noyau_inj', 'concret_r2_r2_endomorphisme_lie', 'concret_r2_r2_isomorphisme', 'concret_derivation_r2_poly']);

      if (p2Variant === 'concret_r3_r2_noyau_surj') {
        return this.makeMcq(
          'L1-APP', 2, "Noyau, image et surjectivité concrète : $\\mathbb{R}^3 \\to \\mathbb{R}^2$",
          "Déterminer explicitement le noyau et déduire le rang et la surjectivité",
          "Soit l'application linéaire $f : \\mathbb{R}^3 \\to \\mathbb{R}^2$ définie par $f(x, y, z) = (x + y, \\, y - z)$. Quel est son noyau $\\text{Ker}(f)$, et $f$ est-elle injective ou surjective ?",
          "$\\text{Ker}(f) = \\text{Vect}((-1, 1, 1))$ : $f$ n'est pas injective, mais elle est surjective (rang = 2)",
          [
            "$\\text{Ker}(f) = \\{(0, 0, 0)\\}$ : $f$ est injective et surjective (isomorphisme)",
            "$\\text{Ker}(f) = \\text{Vect}((1, 1, 1))$ : $f$ est injective mais non surjective",
            "$\\text{Ker}(f) = \\mathbb{R}^3$ : $f$ est l'application nulle"
          ],
          "Résous le système linéaire homogène définissant le noyau : $x + y = 0$ et $y - z = 0$.",
          "En déduire $x = -y$ et $z = y$. Exprime le vecteur sous la forme $y(-1, 1, 1)$.",
          "On cherche les $(x, y, z)$ tels que $f(x, y, z) = (0, 0)$ :\n$\\begin{cases} x + y = 0 \\\\ y - z = 0 \\end{cases} \\iff \\begin{cases} x = -y \\\\ z = y \\end{cases}$. Ainsi $(x, y, z) = (-y, y, y) = y(-1, 1, 1)$. Donc $\\text{Ker}(f) = \\text{Vect}((-1, 1, 1))$ (droite de dimension 1). Comme $\\text{Ker}(f) \\neq \\{0\\}$, $f$ n'est pas injective. Par le théorème du rang, $\\text{rg}(f) = 3 - 1 = 2 = \\dim(\\mathbb{R}^2)$, donc $f$ est surjective."
        );
      } else if (p2Variant === 'concret_r2_r3_noyau_inj') {
        return this.makeMcq(
          'L1-APP', 2, "Noyau, image et injectivité concrète : $\\mathbb{R}^2 \\to \\mathbb{R}^3$",
          "Calculer le noyau, prouver l'injectivité et déterminer l'image",
          "Soit l'application linéaire $g : \\mathbb{R}^2 \\to \\mathbb{R}^3$ définie par $g(x, y) = (x, \\, y, \\, x + y)$. Quel est son noyau $\\text{Ker}(g)$, et $g$ est-elle injective ou surjective ?",
          "$\\text{Ker}(g) = \\{(0, 0)\\}$ : $g$ est injective mais n'est pas surjective (rang = 2 < 3)",
          [
            "$\\text{Ker}(g) = \\text{Vect}((1, -1))$ : $g$ n'est pas injective mais est surjective",
            "$\\text{Ker}(g) = \\{(0, 0)\\}$ : $g$ est bijective (isomorphisme)",
            "$\\text{Ker}(g) = \\mathbb{R}^2$ : le rang vaut 0"
          ],
          "Résous $g(x, y) = (0, 0, 0) \\implies x = 0$ et $y = 0$.",
          "Le rang vaut $\\dim(\\mathbb{R}^2) - \\dim(\\text{Ker} g) = 2 - 0 = 2$. Compare à la dimension de $\\mathbb{R}^3$.",
          "$g(x, y) = (0, 0, 0) \\iff x = 0, y = 0, x+y = 0 \\iff (x, y) = (0, 0)$. Le noyau est réduit au vecteur nul : $\\text{Ker}(g) = \\{(0, 0)\\}$, donc $g$ est injective. Par le théorème du rang, $\\text{rg}(g) = 2 - 0 = 2$. L'espace d'arrivée $\\mathbb{R}^3$ est de dimension 3, donc $\\text{rg}(g) < 3$ : $g$ n'est pas surjective."
        );
      } else if (p2Variant === 'concret_r2_r2_endomorphisme_lie') {
        return this.makeMcq(
          'L1-APP', 2, "Noyau et image d'un endomorphisme non injectif de $\\mathbb{R}^2$",
          "Déterminer le noyau d'un endomorphisme de rang 1",
          "Soit l'endomorphisme $h : \\mathbb{R}^2 \\to \\mathbb{R}^2$ défini par $h(x, y) = (x - 2y, \\, -2x + 4y)$. Quel est son noyau et sa dimension ?",
          "$\\text{Ker}(h) = \\text{Vect}((2, 1))$, de dimension 1 (donc $h$ n'est ni injective ni surjective)",
          [
            "$\\text{Ker}(h) = \\{(0, 0)\\}$, de dimension 0 ($h$ est un automorphisme)",
            "$\\text{Ker}(h) = \\text{Vect}((1, -2))$, de dimension 1",
            "$\\text{Ker}(h) = \\mathbb{R}^2$, de dimension 2"
          ],
          "Résous $x - 2y = 0$ et $-2x + 4y = 0$.",
          "Les deux équations sont proportionnelles ($L_2 = -2L_1$). On en déduit $x = 2y$.",
          "$h(x, y) = (0, 0) \\iff x - 2y = 0 \\iff x = 2y$. Ainsi $(x, y) = (2y, y) = y(2, 1)$. Le noyau est la droite vectorielle $\\text{Vect}((2, 1))$, de dimension 1. Comme $\\dim(\\text{Ker} h) = 1 > 0$, $h$ n'est pas injective. Par le théorème du rang, $\\text{rg}(h) = 2 - 1 = 1 < 2$, donc $h$ n'est pas non plus surjective."
        );
      } else if (p2Variant === 'concret_r2_r2_isomorphisme') {
        return this.makeMcq(
          'L1-APP', 2, "Isomorphisme concret dans $\\mathbb{R}^2$",
          "Vérifier qu'un déterminant non nul confère l'injectivité et la surjectivité",
          "Soit l'application linéaire $f : \\mathbb{R}^2 \\to \\mathbb{R}^2$ définie par $f(x, y) = (2x + y, \\, x + 3y)$. Quelle est la nature de $f$ ?",
          "$f$ est un isomorphisme (bijective) car $\\text{Ker}(f) = \\{(0, 0)\\}$ et $\\text{rg}(f) = 2$",
          [
            "$f$ n'est ni injective ni surjective",
            "$f$ est seulement injective mais non surjective",
            "$f$ est un projecteur car $f \\circ f = f$"
          ],
          "La matrice associée dans la base canonique est $A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 3 \\end{pmatrix}$. Calcule son déterminant.",
          "$\\det(A) = 2 \\times 3 - 1 \\times 1 = 5 \\neq 0$.",
          "Le système $f(x, y) = (0, 0)$ admet pour matrice $A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 3 \\end{pmatrix}$. Son déterminant est $\\det(A) = 6 - 1 = 5 \\neq 0$. La matrice est donc inversible : le système n'admet que la solution triviale $(x, y) = (0, 0)$. Ainsi $\\text{Ker}(f) = \\{(0, 0)\\}$ (injective) et $\\text{rg}(f) = 2$ (surjective). En dimension finie, c'est un automorphisme (isomorphisme de $\\mathbb{R}^2$ dans lui-même)."
        );
      } else {
        return this.makeMcq(
          'L1-APP', 2, "Noyau et image de la dérivation dans $\\mathbb{R}_2[X]$",
          "Déterminer noyau et image pour un opérateur polynomial concret",
          "Soit l'endomorphisme de dérivation $D : \\mathbb{R}_2[X] \\to \\mathbb{R}_2[X]$ défini par $D(P) = P'$. Quel est son noyau $\\text{Ker}(D)$ et son image $\\text{Im}(D)$ ?",
          "$\\text{Ker}(D) = \\mathbb{R}_0[X] = \\text{Vect}(1)$ et $\\text{Im}(D) = \\mathbb{R}_1[X] = \\text{Vect}(1, X)$",
          [
            "$\\text{Ker}(D) = \\{0\\}$ et $\\text{Im}(D) = \\mathbb{R}_2[X]$ (automorphisme)",
            "$\\text{Ker}(D) = \\text{Vect}(X)$ et $\\text{Im}(D) = \\text{Vect}(X^2)$",
            "$\\text{Ker}(D) = \\mathbb{R}_1[X]$ et $\\text{Im}(D) = \\mathbb{R}_0[X]$"
          ],
          "Quels sont les polynômes dont la dérivée est le polynôme nul ?",
          "Ce sont les polynômes constants : $\\text{Ker}(D) = \\mathbb{R}_0[X]$.",
          "$P' = 0 \\iff P$ est constant, c'est-à-dire $P \\in \\mathbb{R}_0[X] = \\text{Vect}(1)$. Donc $\\dim(\\text{Ker} D) = 1$ : $D$ n'est pas injectif. De plus, la dérivée d'un polynôme de degré $\\le 2$ est un polynôme de degré $\\le 1$, donc $\\text{Im}(D) = \\mathbb{R}_1[X] = \\text{Vect}(1, X)$, de dimension $\\text{rg}(D) = 2 < 3$. $D$ n'est donc pas non plus surjectif."
        );
      }
    } else if (tier === 3) {
      // Palier 3 : Matrice d'endomorphisme, changements de base et rang
      const deg = this.randChoice([2, 3]);
      const dimPoly = deg + 1;
      return this.makeMcq(
        'L1-APP', 3, "Représentation matricielle de la dérivation dans $\\mathbb{R}_n[X]$",
        "Construire la matrice d'un endomorphisme dans la base canonique",
        `Dans l'espace $\\mathbb{R}_{${deg}}[X]$ muni de la base canonique $(1, X${deg === 3 ? ', X^2, X^3' : ', X^2'})$, quelle est la taille de la matrice représentative de l'opérateur de dérivation $D : P \\mapsto P'$ ?`,
        `Taille $${dimPoly} \\times ${dimPoly}$, triangulaire supérieure stricte`,
        [
          `Taille $${deg} \\times ${deg}$, inversible`,
          `Taille $${dimPoly} \\times ${dimPoly}$, diagonale`,
          `Taille $${deg} \\times ${dimPoly}$, inversible`
        ],
        `La dimension de $\\mathbb{R}_n[X]$ est $n + 1$.`,
        `Comme $\\deg(P') < \\deg(P)$, $D$ est un endomorphisme nilpotent.`,
        `$\\dim(\\mathbb{R}_{${deg}}[X]) = ${dimPoly}$, donc la matrice est carrée d'ordre $${dimPoly}$. Comme $D(X^k) = k X^{k-1}$, les éléments diagonaux sont tous nuls : elle est nilpotente et triangulaire supérieure stricte.`
      );
    } else {
      // Palier 4 : Projecteurs, Symétries, Isomorphismes et Bilans avancés
      const p4Variant = this.randChoice(['carac_projecteur', 'carac_symetrie', 'equivalence_dim_finie', 'nilpotent_indice']);

      if (p4Variant === 'carac_projecteur') {
        return this.makeMcq(
          'L1-APP', 4, "Caractérisation algébrique des projecteurs",
          "Identifier un projecteur par la relation $p^2 = p$ et la décomposition de l'espace",
          "Soit $p \\in \\mathcal{L}(E)$. Quelle relation algébrique caractérise le fait que $p$ est un projecteur, et quelle est la décomposition associée de $E$ ?",
          "$p^2 = p$ et $E = \\text{Ker}(p) \\oplus \\text{Im}(p)$",
          [
            "$p^2 = \\text{Id}_E$ et $E = \\text{Ker}(p) \\oplus \\text{Im}(p)$",
            "$p^2 = 0$ et $E = \\text{Ker}(p) + \\text{Im}(p)$",
            "$p^3 = p$ et $\\text{Ker}(p) = \\text{Im}(p)$"
          ],
          "Un projecteur vérifie $p \\circ p = p$ (idempotence).",
          "Pour tout $x \\in E$, $x = (x - p(x)) + p(x)$ avec $x - p(x) \\in \\text{Ker}(p)$ et $p(x) \\in \\text{Im}(p)$.",
          "Un endomorphisme est un projecteur ssi $p^2 = p$. On a alors immédiatement $E = \\text{Ker}(p) \\oplus \\text{Im}(p)$, la projection se faisant sur $\\text{Im}(p)$ parallèlement à $\\text{Ker}(p)$."
        );
      } else if (p4Variant === 'carac_symetrie') {
        return this.makeMcq(
          'L1-APP', 4, "Caractérisation algébrique des symétries vectorielles",
          "Identifier une symétrie par la relation $s^2 = \\text{Id}$ et ses espaces propres",
          "Soit $s \\in \\mathcal{L}(E)$. Quelle relation algébrique caractérise une symétrie vectorielle, et quelle est la décomposition associée de $E$ ?",
          "$s^2 = \\text{Id}_E$ et $E = \\text{Ker}(s - \\text{Id}) \\oplus \\text{Ker}(s + \\text{Id})$",
          [
            "$s^2 = -\\text{Id}_E$ et $E = \\text{Ker}(s) \\oplus \\text{Im}(s)$",
            "$s^2 = s$ et $E = \\text{Ker}(s) \\oplus \\text{Im}(s)$",
            "$s = -s$ et $\\text{Ker}(s) = E$"
          ],
          "Une symétrie est une involution : $s \\circ s = \\text{Id}_E$.",
          "Décompose $x = \\frac{x + s(x)}{2} + \\frac{x - s(x)}{2}$.",
          "Une symétrie vérifie $s^2 = \\text{Id}_E$. Les valeurs propres possibles sont $+1$ et $-1$. Pour tout $x \\in E$, $x = \\frac{x + s(x)}{2} + \\frac{x - s(x)}{2}$ avec le premier terme invariant par $s$ (espace des points fixes $\\text{Ker}(s - \\text{Id})$) et le second inversé par $s$ ($\\text{Ker}(s + \\text{Id})$). La somme est directe."
        );
      } else if (p4Variant === 'equivalence_dim_finie') {
        return this.makeMcq(
          'L1-APP', 4, "Équivalences fondamentales en dimension finie",
          "Maîtriser le théorème reliant injectivité, surjectivité et bijectivité",
          "Soit $E$ un espace vectoriel de dimension FINIE $n$, et $f \\in \\mathcal{L}(E)$ un endomorphisme. Laquelle des équivalences est TOUJOURS vraie ?",
          "$f \\text{ est injectif} \\iff f \\text{ est surjectif} \\iff f \\text{ est bijectif}$",
          [
            "$f \\text{ injectif} \\implies f = \\text{Id}_E$",
            "L'équivalence entre injectivité et surjectivité reste vraie même en dimension infinie",
            "$f \\text{ surjectif} \\implies \\text{Ker}(f) = E$"
          ],
          "Utilise le théorème du rang : $\\dim(E) = \\dim(\\text{Ker} f) + \\text{rg}(f)$.",
          "Si $\\text{Ker}(f) = \\{0\\}$, alors $\\text{rg}(f) = \\dim(E)$, donc $f$ est surjectif.",
          "D'après le Théorème du Rang : $\\dim(E) = \\dim(\\text{Ker} f) + \\text{rg}(f)$. Comme l'espace de départ et d'arrivée ont la même dimension finie : $\\text{Ker}(f) = \\{0\\} \\iff \\text{rg}(f) = \\dim(E)$. L'injectivité et la surjectivité sont donc strictement équivalentes en dimension finie. Attention : ceci est faux en dimension infinie (ex: la dérivation des polynômes est surjective mais non injective)."
        );
      } else {
        return this.makeMcq(
          'L1-APP', 4, "Endomorphisme nilpotent et indice de nilpotence",
          "Démontrer la liberté de la famille générée par une puissance d'endomorphisme",
          "Soit $u \\in \\mathcal{L}(E)$ avec $\\dim(E) = n$. S'il existe un vecteur $x_0 \\in E$ tel que $u^{n-1}(x_0) \\neq 0$ et $u^n = 0$, que peut-on affirmer ?",
          "La famille $(x_0, u(x_0), u^2(x_0), \\dots, u^{n-1}(x_0))$ est libre et forme une base de $E$",
          [
            "La famille est liée car $u^n = 0$",
            "$u$ est un isomorphisme de $E$",
            "La dimension de $\\text{Ker}(u)$ est obligatoirement égale à $n$"
          ],
          "Applique $u^{n-1}$ à une combinaison linéaire nulle $\\sum_{k=0}^{n-1} \\lambda_k u^k(x_0) = 0$ pour isoler le premier coefficient.",
          "En composant successivement par les puissances de $u$, on montre que tous les coefficients sont nuls.",
          "Soit $\\sum_{k=0}^{n-1} \\lambda_k u^k(x_0) = 0$. En composant par $u^{n-1}$, tous les termes avec $k \\ge 1$ s'annulent ($u^n = 0$), et il reste $\\lambda_0 u^{n-1}(x_0) = 0$, donc $\\lambda_0 = 0$. Par récurrence, tous les coefficients sont nuls. La famille de $n$ vecteurs est libre dans un espace de dimension $n$, c'est donc une base de $E$."
        );
      }
    }
  },

  generateL1_CMP(tier) {
    if (tier === 1) {
      // Palier 1 : Racines n-ièmes de l'unité (calculs explicites, ensemble U_n, somme, produit)
      const variant = this.randChoice(['u5', 'u4_alg', 'u3_alg', 'u6_exp', 'sum_without_1', 'prod_all', 'sum_all']);
      if (variant === 'u5') {
        // Demande explicite : donner les racines 5-ièmes de l'unité
        return this.makeMcq(
          'L1-CMP', 1, "Racines 5-ièmes de l'unité (groupe $\\mathbb{U}_5$)",
          "Déterminer les racines n-ièmes de l'unité dans $\\mathbb{C}$",
          "Quelles sont les 5 racines 5-ièmes de l'unité dans $\\mathbb{C}$ (éléments du sous-groupe $\\mathbb{U}_5$) ?",
          "$\\left\\{ e^{i \\frac{2k\\pi}{5}} \\;\\middle|\\; k \\in \\{0, 1, 2, 3, 4\\} \\right\\}$",
          [
            "$\\left\\{ e^{i \\frac{k\\pi}{5}} \\;\\middle|\\; k \\in \\{0, 1, 2, 3, 4\\} \\right\\}$",
            "$\\left\\{ e^{i \\frac{2k\\pi}{5}} \\;\\middle|\\; k \\in \\{1, 2, 3, 4, 5\\} \\right\\} \\cup \\{0\\}$",
            "$\\{1, -1, i, -i, 0\\}$"
          ],
          "Les racines $n$-ièmes de l'unité sont les solutions de l'équation $z^n = 1$.",
          "Elles s'écrivent sous forme exponentielle $\\omega_k = e^{i \\frac{2k\\pi}{n}}$ pour $k \\in \\{0, 1, \\dots, n-1\\}$.",
          "L'équation $z^5 = 1$ admet dans $\\mathbb{C}$ exactement 5 solutions distinctes données par $\\omega_k = e^{i \\frac{2k\\pi}{5}}$ pour $k \\in \\{0, 1, 2, 3, 4\\}$. Elles forment les sommets d'un pentagone régulier inscrit dans le cercle trigonométrique."
        );
      } else if (variant === 'u4_alg') {
        return this.makeMcq(
          'L1-CMP', 1, "Racines 4-ièmes de l'unité sous forme algébrique",
          "Calculer les éléments du groupe $\\mathbb{U}_4$",
          "Quel est l'ensemble $\\mathbb{U}_4$ des racines 4-ièmes de l'unité sous forme algébrique ?",
          "$\\{1, i, -1, -i\\}$",
          [
            "$\\{1, -1\\}$",
            "$\\{1, i, -1\\}$",
            "$\\{1, i, -1, -i, 0\\}$"
          ],
          "Résous l'équation $z^4 = 1$ en factorisant $z^4 - 1 = (z^2 - 1)(z^2 + 1)$.",
          "$z^2 = 1 \\implies z = \\pm 1$ et $z^2 = -1 \\implies z = \\pm i$.",
          "On a $z^4 - 1 = (z^2 - 1)(z^2 + 1) = (z - 1)(z + 1)(z - i)(z + i)$. Les 4 racines sont donc $1, i, -1, -i$."
        );
      } else if (variant === 'u3_alg') {
        return this.makeMcq(
          'L1-CMP', 1, "Racines cubiques de l'unité et nombre j",
          "Calculer les racines 3-ièmes de l'unité",
          "Quelles sont les trois racines cubiques de l'unité (groupe $\\mathbb{U}_3$) sous forme algébrique, avec $j = e^{i \\frac{2\\pi}{3}}$ ?",
          "$\\left\\{1, -\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}, -\\frac{1}{2} - i\\frac{\\sqrt{3}}{2}\\right\\}$",
          [
            "$\\left\\{1, \\frac{1}{2} + i\\frac{\\sqrt{3}}{2}, \\frac{1}{2} - i\\frac{\\sqrt{3}}{2}\\right\\}$",
            "$\\{1, -1, i\\}$",
            "$\\left\\{-1, -\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}, -\\frac{1}{2} - i\\frac{\\sqrt{3}}{2}\\right\\}$"
          ],
          "Factorise $z^3 - 1 = (z - 1)(z^2 + z + 1)$.",
          "Résous l'équation du second degré $z^2 + z + 1 = 0$ de discriminant $\\Delta = -3$.",
          "Les racines de $z^3 = 1$ sont $1$, $j = e^{i \\frac{2\\pi}{3}} = -\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$ et $j^2 = \\bar{j} = -\\frac{1}{2} - i\\frac{\\sqrt{3}}{2}$."
        );
      } else if (variant === 'u6_exp') {
        return this.makeMcq(
          'L1-CMP', 1, "Racines 6-ièmes de l'unité",
          "Déterminer les éléments du groupe $\\mathbb{U}_6$",
          "Quelles sont les 6 racines 6-ièmes de l'unité dans $\\mathbb{C}$ sous forme exponentielle ?",
          "$\\left\\{ e^{i \\frac{k\\pi}{3}} \\;\\middle|\\; k \\in \\{0, 1, 2, 3, 4, 5\\} \\right\\}$",
          [
            "$\\left\\{ e^{i \\frac{2k\\pi}{3}} \\;\\middle|\\; k \\in \\{0, 1, 2\\} \\right\\}$",
            "$\\left\\{ e^{i \\frac{k\\pi}{6}} \\;\\middle|\\; k \\in \\{0, 1, 2, 3, 4, 5\\} \\right\\}$",
            "$\\{1, -1, i, -i, j, j^2\\}$"
          ],
          "Applique la formule générale $\\omega_k = e^{i \\frac{2k\\pi}{n}}$ pour $n = 6$.",
          "Remarque que $\\frac{2k\\pi}{6} = \\frac{k\\pi}{3}$.",
          "Pour $n = 6$, les racines sont $\\omega_k = e^{i \\frac{2k\\pi}{6}} = e^{i \\frac{k\\pi}{3}}$ pour $k \\in \\{0, 1, 2, 3, 4, 5\\}$."
        );
      } else if (variant === 'sum_without_1') {
        const n = this.randInt(3, 8);
        return this.makeMcq(
          'L1-CMP', 1, "Somme des racines n-ièmes privées de 1",
          "Calculer une somme géométrique sur $\\mathbb{U}_n$",
          `Pour $n = ${n}$, que vaut la somme des racines $${n}$-ièmes de l'unité différentes de 1 : $S' = \\sum_{k=1}^{${n-1}} e^{i \\frac{2k\\pi}{${n}}}$ ?`,
          "$-1$",
          ["$0$", "$1$", `$${n-1}$`],
          "La somme de toutes les racines $n$-ièmes (y compris pour $k=0$) est nulle.",
          "Ici, la somme commence à $k=1$, donc le terme pour $k=0$ ($e^0 = 1$) est retiré.",
          `On a $\\sum_{k=0}^{${n-1}} e^{i \\frac{2k\\pi}{${n}}} = 0 \\iff 1 + \\sum_{k=1}^{${n-1}} e^{i \\frac{2k\\pi}{${n}}} = 0 \\iff S' = -1$.`
        );
      } else if (variant === 'prod_all') {
        const n = this.randChoice([3, 4, 5, 6, 7]);
        const prod = (n % 2 === 0) ? -1 : 1;
        return this.makeMcq(
          'L1-CMP', 1, "Produit des racines n-ièmes de l'unité",
          "Propriétés multiplicatives de $\\mathbb{U}_n$",
          `Pour $n = ${n}$, que vaut le produit des $${n}$ racines $${n}$-ièmes de l'unité : $P = \\prod_{k=0}^{${n-1}} e^{i \\frac{2k\\pi}{${n}}}$ ?`,
          `$${prod}$`,
          [`$${-prod}$`, "$0$", `$${n}$`],
          "Additionne les exposants dans le produit d'exponentielles.",
          "$\\sum_{k=0}^{n-1} k = \\frac{n(n-1)}{2}$.",
          `Le produit vaut $P = e^{i \\frac{2\\pi}{${n}} \\sum_{k=0}^{${n-1}} k} = e^{i \\frac{2\\pi}{${n}} \\frac{${n}(${n-1})}{2}} = e^{i (${n-1})\\pi} = (-1)^{${n-1}} = ${prod}$.`
        );
      } else {
        const n = this.randInt(3, 8);
        return this.makeMcq(
          'L1-CMP', 1, "Somme totale des racines n-ièmes de l'unité",
          "Calculer la somme des éléments du groupe $\\mathbb{U}_n$",
          `Pour $n = ${n}$, que vaut la somme totale des $${n}$ racines $${n}$-ièmes de l'unité : $S = \\sum_{k=0}^{${n-1}} e^{i \\frac{2k\\pi}{${n}}}$ ?`,
          "$0$",
          ["$1$", `$${n}$`, "$-1$"],
          "C'est la somme des termes d'une suite géométrique de raison $\\omega = e^{i 2\\pi / n} \\neq 1$.",
          "$\\sum_{k=0}^{n-1} \\omega^k = \\frac{1 - \\omega^n}{1 - \\omega}$.",
          `En posant $\\omega = e^{i \\frac{2\\pi}{${n}}}$, on a $\\omega \\neq 1$ et $\\omega^{${n}} = 1$. D'où $S = \\frac{1 - \\omega^{${n}}}{1 - \\omega} = \\frac{1 - 1}{1 - \\omega} = 0$.`
        );
      }
    } else if (tier === 2) {
      // Palier 2 : Variété de styles de polynômes (degrés 2 et 3) avec racines doubles et caractérisation
      const style = this.randChoice(['quad_double_root', 'deg3_double_root', 'charac_double_root', 'deg3_simple_roots', 'quad_complex']);
      if (style === 'quad_double_root') {
        const a = this.randChoice([-4, -3, -2, 2, 3, 4, 5]);
        const b = -2 * a;
        const c = a * a;
        const signB = b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`;
        const factor = (a > 0) ? `(X - ${a})^2` : `(X + ${Math.abs(a)})^2`;
        const wrongFactor = (a > 0) ? `(X - ${a})(X + ${a})` : `(X + ${Math.abs(a)})(X - ${Math.abs(a)})`;
        return this.makeMcq(
          'L1-CMP', 2, "Polynôme du second degré à racine double",
          "Identifier une racine double et factoriser un carré parfait",
          `Quelle est la factorisation dans $\\mathbb{R}[X]$ du polynôme $P(X) = X^2 ${signB}X + ${c}$, et quelle est la multiplicité de sa racine ?`,
          `$${factor}$ ; $${a}$ est une racine double (multiplicité 2)`,
          [
            `$${wrongFactor}$ ; deux racines simples distinctes`,
            `$${factor}$ ; $${a}$ est une racine simple`,
            "Irréductible dans $\\mathbb{R}[X]$"
          ],
          "Calcule le discriminant $\\Delta = b^2 - 4ac$ du trinôme.",
          "Si $\\Delta = 0$, le polynôme admet une unique racine réelle de multiplicité 2.",
          `Le discriminant est $\\Delta = (${b})^2 - 4(1)(${c}) = ${b*b} - ${4*c} = 0$. Il y a donc une unique racine réelle $x_0 = -\\frac{b}{2a} = ${a}$, qui est de multiplicité 2 (racine double). Le polynôme se factorise en $${factor}$.`
        );
      } else if (style === 'deg3_double_root') {
        const cases = [
          { a: 1, b: -2, poly: "X^3 - 3X + 2", factor: "(X - 1)^2 (X + 2)", doubleRoot: 1, simpleRoot: -2, testDeriv: "P(1) = 0 \\text{ et } P'(1) = 3(1)^2 - 3 = 0" },
          { a: -1, b: 2, poly: "X^3 - 3X - 2", factor: "(X + 1)^2 (X - 2)", doubleRoot: -1, simpleRoot: 2, testDeriv: "P(-1) = 0 \\text{ et } P'(-1) = 3(-1)^2 - 3 = 0" },
          { a: 2, b: -1, poly: "X^3 - 3X^2 + 4", factor: "(X - 2)^2 (X + 1)", doubleRoot: 2, simpleRoot: -1, testDeriv: "P(2) = 0 \\text{ et } P'(2) = 3(4) - 6(2) = 0" },
          { a: -2, b: 1, poly: "X^3 + 3X^2 - 4", factor: "(X + 2)^2 (X - 1)", doubleRoot: -2, simpleRoot: 1, testDeriv: "P(-2) = 0 \\text{ et } P'(-2) = 3(4) + 6(-2) = 0" },
          { a: 3, b: 1, poly: "X^3 - 7X^2 + 15X - 9", factor: "(X - 3)^2 (X - 1)", doubleRoot: 3, simpleRoot: 1, testDeriv: "P(3) = 0 \\text{ et } P'(3) = 3(9) - 14(3) + 15 = 0" }
        ];
        const c = this.randChoice(cases);
        return this.makeMcq(
          'L1-CMP', 2, "Polynôme de degré 3 avec racine double",
          "Détecter une racine double dans un polynôme de degré 3",
          `Déterminer les racines et la factorisation dans $\\mathbb{R}[X]$ du polynôme de degré 3 : $P(X) = ${c.poly}$.`,
          `$${c.factor}$ avec $${c.doubleRoot}$ racine double et $${c.simpleRoot}$ racine simple`,
          [
            `$(X - ${c.doubleRoot})(X - ${c.simpleRoot})^2$ avec $${c.simpleRoot}$ racine double`,
            `$(X - ${c.doubleRoot})(X + ${c.doubleRoot})(X - ${c.simpleRoot})$`,
            `$(X - ${c.doubleRoot})^3$`
          ],
          `Cherche d'abord une racine évidente parmi les diviseurs du terme constant (teste $x = ${c.doubleRoot}$), puis calcule la dérivée $P'(${c.doubleRoot})$.`,
          "Une racine $a$ est au moins double si $P(a) = 0$ et $P'(a) = 0$. Effectue ensuite la division euclidienne de $P(X)$ par $(X - a)^2$.",
          `On a $${c.testDeriv}$, ce qui prouve que $${c.doubleRoot}$ est une racine au moins double. En divisant $P(X)$ par $(X - ${c.doubleRoot})^2$, on trouve le quotient $X - (${c.simpleRoot})$, d'où la factorisation $P(X) = ${c.factor}$.`
        );
      } else if (style === 'charac_double_root') {
        return this.makeMcq(
          'L1-CMP', 2, "Caractérisation différentielle d'une racine double",
          "Reconnaître les conditions sur les dérivées pour une racine double",
          "Soit $P \\in \\mathbb{K}[X]$ et $a \\in \\mathbb{K}$. Quelle condition nécessaire et suffisante caractérise le fait que $a$ soit une racine de multiplicité exactement 2 (racine double) de $P$ ?",
          "$P(a) = 0$, $P'(a) = 0$ et $P''(a) \\neq 0$",
          [
            "$P(a) = 0$ et $P'(a) = 0$ seulement",
            "$P(a) = 0$ et $P''(a) = 0$",
            "$P'(a) = 0$ et $P''(a) \\neq 0$"
          ],
          "Pense au développement de Taylor du polynôme $P$ en $a$ : $P(X) = \\sum_{k=0}^n \\frac{P^{(k)}(a)}{k!} (X - a)^k$.",
          "Pour que $(X - a)^2$ divise $P$ sans que $(X - a)^3$ ne le divise, les deux premiers termes doivent s'annuler mais pas le troisième.",
          "D'après la formule de Taylor pour les polynômes, $(X - a)^2$ factorise $P$ avec multiplicité exacte 2 si et seulement si $P(a) = 0$, $P'(a) = 0$ et $P''(a) \\neq 0$."
        );
      } else if (style === 'deg3_simple_roots') {
        const r1 = this.randChoice([1, 2]);
        const r2 = r1 + 1;
        const r3 = -(r1 + r2);
        const p = -(r1 * r2 + r1 * r3 + r2 * r3);
        const q = r1 * r2 * r3;
        const polyStr = `X^3 - ${p}X ${q >= 0 ? '- ' + q : '+ ' + Math.abs(q)}`;
        return this.makeMcq(
          'L1-CMP', 2, "Factorisation d'un polynôme de degré 3 scindé",
          "Factoriser un polynôme de degré 3 à racines entières",
          `Factoriser dans $\\mathbb{R}[X]$ le polynôme $P(X) = ${polyStr}$, sachant que $${r1}$ est une racine évidente.`,
          `$(X - ${r1})(X - ${r2})(X + ${Math.abs(r3)})$`,
          [
            `$(X - ${r1})^2 (X - ${r2})$`,
            `$(X - ${r1})(X^2 + ${p})$`,
            `$(X + ${r1})(X + ${r2})(X - ${Math.abs(r3)})$`
          ],
          `Effectue la division euclidienne de $P(X)$ par $X - ${r1}$.`,
          "Puis factorise le quotient du second degré obtenu à l'aide de son discriminant.",
          `La division euclidienne de $P(X)$ par $X - ${r1}$ donne $P(X) = (X - ${r1})(X^2 + ${r1}X - ${r2 * Math.abs(r3)})$. Les racines du quotient sont $${r2}$ et $${r3}$, d'où $P(X) = (X - ${r1})(X - ${r2})(X + ${Math.abs(r3)})$.`
        );
      } else {
        const a = this.randChoice([1, 4, 9, 16, 25]);
        const sqrtA = Math.sqrt(a);
        return this.makeMcq(
          'L1-CMP', 2, "Factorisation dans $\\mathbb{C}[X]$ vs $\\mathbb{R}[X]$",
          "Factoriser un polynôme quadratique sans racine réelle",
          `Quelle est la décomposition en facteurs irréductibles de $P(X) = X^2 + ${a}$ dans $\\mathbb{C}[X]$ ?`,
          `$(X - ${sqrtA}i)(X + ${sqrtA}i)$`,
          [
            `$(X - ${sqrtA})(X + ${sqrtA})$`,
            `$(X + ${sqrtA}i)^2$`,
            "Irréductible dans $\\mathbb{C}[X]$"
          ],
          "Dans $\\mathbb{C}$, tout polynôme est scindé (théorème de d'Alembert-Gauss).",
          `$X^2 + ${a} = X^2 - (${sqrtA}i)^2$.`,
          `Dans $\\mathbb{R}[X]$, $X^2 + ${a}$ est irréductible car $\\Delta = -4(${a}) < 0$. Dans $\\mathbb{C}[X]$, il se scinde en $X^2 - (${sqrtA}i)^2 = (X - ${sqrtA}i)(X + ${sqrtA}i)$.`
        );
      }
    } else if (tier === 3) {
      // Palier 3 : Polynômes de degré supérieur à 2 avec racines doubles, complétion du carré et DES
      const p3Variant = this.randChoice(['td_deg3_double', 'td_deg4_bicarre', 'td_deg4_double_double', 'td_deg4_sophie_germain', 'td_deg6', 'td_des_pole_double']);
      if (p3Variant === 'td_deg3_double') {
        const deg3DoubleCases = [
          {
            poly: "X^3 - 5X^2 + 3X + 9",
            doubleRoot: 3,
            simpleRoot: -1,
            factor: "(X - 3)^2 (X + 1)",
            distractors: [
              "$(X - 3)(X + 1)^2$",
              "$(X + 3)^2 (X - 1)$",
              "$(X - 3)(X^2 - 2X - 3)$"
            ],
            hint1: "Calcule la dérivée $P'(X) = 3X^2 - 10X + 3$ et teste la racine candidate $X = 3$ dans $P$ et $P'$.",
            hint2: "Comme $P(3) = 0$ et $P'(3) = 0$, $3$ est racine au moins double : effectue la division euclidienne de $P(X)$ par $(X - 3)^2 = X^2 - 6X + 9$.",
            sol: "On teste $X = 3$ : $P(3) = 27 - 45 + 9 + 9 = 0$. Dérivée : $P'(X) = 3X^2 - 10X + 3 \\implies P'(3) = 27 - 30 + 3 = 0$. Donc $3$ est une racine au moins double. La division euclidienne de $P(X)$ par $(X - 3)^2 = X^2 - 6X + 9$ donne le quotient $X + 1$. D'où $P(X) = (X - 3)^2 (X + 1)$."
          },
          {
            poly: "X^3 - 4X^2 + 5X - 2",
            doubleRoot: 1,
            simpleRoot: 2,
            factor: "(X - 1)^2 (X - 2)",
            distractors: [
              "$(X - 1)(X - 2)^2$",
              "$(X + 1)^2 (X + 2)$",
              "$(X - 1)^3$"
            ],
            hint1: "Calcule la dérivée $P'(X) = 3X^2 - 8X + 5$ et teste la racine candidate $X = 1$ dans $P$ et $P'$.",
            hint2: "Comme $P(1) = 0$ et $P'(1) = 0$, $1$ est racine au moins double : effectue la division de $P(X)$ par $(X - 1)^2 = X^2 - 2X + 1$.",
            sol: "On teste $X = 1$ : $P(1) = 1 - 4 + 5 - 2 = 0$. Dérivée : $P'(X) = 3X^2 - 8X + 5 \\implies P'(1) = 3 - 8 + 5 = 0$. Donc $1$ est racine double. La division par $(X - 1)^2 = X^2 - 2X + 1$ donne pour quotient $X - 2$. D'où $P(X) = (X - 1)^2 (X - 2)$."
          },
          {
            poly: "X^3 - X^2 - X + 1",
            doubleRoot: 1,
            simpleRoot: -1,
            factor: "(X - 1)^2 (X + 1)",
            distractors: [
              "$(X - 1)(X + 1)^2$",
              "$(X^2 - 1)(X + 1)$",
              "$(X - 1)^3$"
            ],
            hint1: "Calcule la dérivée $P'(X) = 3X^2 - 2X - 1$ et teste $X = 1$.",
            hint2: "Puisque $P(1) = 0$ et $P'(1) = 0$, divise par $(X - 1)^2 = X^2 - 2X + 1$.",
            sol: "On a $P(1) = 0$ et $P'(1) = 3 - 2 - 1 = 0$, donc $1$ est racine double. De plus $P(X) = X^2(X - 1) - (X - 1) = (X - 1)(X^2 - 1) = (X - 1)^2 (X + 1)$."
          },
          {
            poly: "X^3 + 4X^2 - 3X - 18",
            doubleRoot: -3,
            simpleRoot: 2,
            factor: "(X + 3)^2 (X - 2)",
            distractors: [
              "$(X + 3)(X - 2)^2$",
              "$(X - 3)^2 (X + 2)$",
              "$(X + 3)(X^2 + X - 6)$"
            ],
            hint1: "Calcule la dérivée $P'(X) = 3X^2 + 8X - 3$ et teste la racine candidate $X = -3$ dans $P$ et $P'$.",
            hint2: "Comme $P(-3) = 0$ et $P'(-3) = 0$, divise par $(X + 3)^2 = X^2 + 6X + 9$.",
            sol: "On a $P(-3) = -27 + 36 + 9 - 18 = 0$ et $P'(-3) = 27 - 24 - 3 = 0$, donc $-3$ est racine double. La division de $P(X)$ par $(X + 3)^2 = X^2 + 6X + 9$ donne le quotient $X - 2$. D'où $P(X) = (X + 3)^2 (X - 2)$."
          },
          {
            poly: "X^3 - X^2 - 8X + 12",
            doubleRoot: 2,
            simpleRoot: -3,
            factor: "(X - 2)^2 (X + 3)",
            distractors: [
              "$(X - 2)(X + 3)^2$",
              "$(X + 2)^2 (X - 3)$",
              "$(X - 2)^3$"
            ],
            hint1: "Calcule la dérivée $P'(X) = 3X^2 - 2X - 8$ et teste la racine $X = 2$ dans $P$ et $P'$.",
            hint2: "Comme $P(2) = 0$ et $P'(2) = 0$, divise $P(X)$ par $(X - 2)^2 = X^2 - 4X + 4$.",
            sol: "On a $P(2) = 8 - 4 - 16 + 12 = 0$ et $P'(2) = 12 - 4 - 8 = 0$, donc $2$ est racine double. La division de $P(X)$ par $(X - 2)^2 = X^2 - 4X + 4$ donne $X + 3$. D'où $P(X) = (X - 2)^2 (X + 3)$."
          },
          {
            poly: "X^3 + 5X^2 + 8X + 4",
            doubleRoot: -2,
            simpleRoot: -1,
            factor: "(X + 2)^2 (X + 1)",
            distractors: [
              "$(X + 2)(X + 1)^2$",
              "$(X - 2)^2 (X - 1)$",
              "$(X + 2)^3$"
            ],
            hint1: "Calcule la dérivée $P'(X) = 3X^2 + 10X + 8$ et teste $X = -2$ dans $P$ et $P'$.",
            hint2: "Comme $P(-2) = 0$ et $P'(-2) = 0$, divise par $(X + 2)^2 = X^2 + 4X + 4$.",
            sol: "On a $P(-2) = -8 + 20 - 16 + 4 = 0$ et $P'(-2) = 12 - 20 + 8 = 0$, donc $-2$ est racine double. La division par $(X + 2)^2$ donne $X + 1$. D'où $P(X) = (X + 2)^2 (X + 1)$."
          }
        ];
        const c = this.randChoice(deg3DoubleCases);
        return this.makeMcq(
          'L1-CMP', 3, "Factorisation de degré 3 à racine double",
          "Détecter une racine double et factoriser un polynôme de degré 3",
          `Factoriser dans $\\mathbb{R}[X]$ le polynôme $P(X) = ${c.poly}$ :`,
          `$${c.factor}$`,
          c.distractors,
          c.hint1,
          c.hint2,
          c.sol
        );
      } else if (p3Variant === 'td_deg4_bicarre') {
        const deg4BicarreCases = [
          {
            poly: "X^4 - 16",
            root: 2,
            sqRoot: 4,
            distractors: [
              "Dans $\\mathbb{R}[X]$ : $(X - 2)^2 (X + 2)^2$ ; Dans $\\mathbb{C}[X]$ : $(X - 2)^4$",
              "Dans $\\mathbb{R}[X]$ : $(X^2 - 4)^2$ ; Dans $\\mathbb{C}[X]$ : $(X - 2)(X + 2)(X^2 + 4)$",
              "Dans $\\mathbb{R}[X]$ : $(X - 4)(X + 4)(X^2 + 4)$ ; Dans $\\mathbb{C}[X]$ : $(X - 4)(X + 4)(X - 4i)(X + 4i)$"
            ]
          },
          {
            poly: "X^4 - 1",
            root: 1,
            sqRoot: 1,
            distractors: [
              "Dans $\\mathbb{R}[X]$ : $(X - 1)^2 (X + 1)^2$ ; Dans $\\mathbb{C}[X]$ : $(X - 1)^4$",
              "Dans $\\mathbb{R}[X]$ : $(X^2 - 1)^2$ ; Dans $\\mathbb{C}[X]$ : $(X - 1)(X + 1)(X^2 + 1)$",
              "Dans $\\mathbb{R}[X]$ : $(X - 1)(X + 1)(X^2 - 1)$ ; Dans $\\mathbb{C}[X]$ : $(X - 1)^2 (X + 1)^2$"
            ]
          },
          {
            poly: "X^4 - 81",
            root: 3,
            sqRoot: 9,
            distractors: [
              "Dans $\\mathbb{R}[X]$ : $(X - 3)^2 (X + 3)^2$ ; Dans $\\mathbb{C}[X]$ : $(X - 3)^4$",
              "Dans $\\mathbb{R}[X]$ : $(X^2 - 9)^2$ ; Dans $\\mathbb{C}[X]$ : $(X - 3)(X + 3)(X^2 + 9)$",
              "Dans $\\mathbb{R}[X]$ : $(X - 9)(X + 9)(X^2 + 9)$ ; Dans $\\mathbb{C}[X]$ : $(X - 9)(X + 9)(X - 9i)(X + 9i)$"
            ]
          },
          {
            poly: "X^4 - 256",
            root: 4,
            sqRoot: 16,
            distractors: [
              "Dans $\\mathbb{R}[X]$ : $(X - 4)^2 (X + 4)^2$ ; Dans $\\mathbb{C}[X]$ : $(X - 4)^4$",
              "Dans $\\mathbb{R}[X]$ : $(X^2 - 16)^2$ ; Dans $\\mathbb{C}[X]$ : $(X - 4)(X + 4)(X^2 + 16)$",
              "Dans $\\mathbb{R}[X]$ : $(X - 16)(X + 16)(X^2 + 16)$ ; Dans $\\mathbb{C}[X]$ : $(X - 16)(X + 16)(X - 16i)(X + 16i)$"
            ]
          },
          {
            poly: "X^4 - 625",
            root: 5,
            sqRoot: 25,
            distractors: [
              "Dans $\\mathbb{R}[X]$ : $(X - 5)^2 (X + 5)^2$ ; Dans $\\mathbb{C}[X]$ : $(X - 5)^4$",
              "Dans $\\mathbb{R}[X]$ : $(X^2 - 25)^2$ ; Dans $\\mathbb{C}[X]$ : $(X - 5)(X + 5)(X^2 + 25)$",
              "Dans $\\mathbb{R}[X]$ : $(X - 25)(X + 25)(X^2 + 25)$ ; Dans $\\mathbb{C}[X]$ : $(X - 25)(X + 25)(X - 25i)(X + 25i)$"
            ]
          }
        ];
        const c = this.randChoice(deg4BicarreCases);
        const realSol = `(X - ${c.root})(X + ${c.root})(X^2 + ${c.sqRoot})`;
        const cplxSol = `(X - ${c.root})(X + ${c.root})(X - ${c.root}i)(X + ${c.root}i)`;
        return this.makeMcq(
          'L1-CMP', 3, "Factorisation de degré 4 dans $\\mathbb{R}[X]$ et $\\mathbb{C}[X]$",
          "Comparer la factorisation en irréductibles dans $\\mathbb{R}[X]$ et $\\mathbb{C}[X]$",
          `Quelle est la décomposition en facteurs irréductibles de $P(X) = ${c.poly}$ dans $\\mathbb{R}[X]$ et dans $\\mathbb{C}[X]$ ?`,
          `Dans $\\mathbb{R}[X]$ : $${realSol}$ ; Dans $\\mathbb{C}[X]$ : $${cplxSol}$`,
          c.distractors,
          `Remarque que $${c.poly} = (X^2)^2 - ${c.sqRoot}^2$, puis applique la différence de deux carrés : $(X^2 - ${c.sqRoot})(X^2 + ${c.sqRoot})$.`,
          `Dans $\\mathbb{R}[X]$, factorise $X^2 - ${c.sqRoot} = (X - ${c.root})(X + ${c.root})$ et conserve $X^2 + ${c.sqRoot}$ qui est irréductible ($\\Delta < 0$). Dans $\\mathbb{C}[X]$, factorise $X^2 + ${c.sqRoot} = (X - ${c.root}i)(X + ${c.root}i)$.`,
          `$${c.poly} = (X^2 - ${c.sqRoot})(X^2 + ${c.sqRoot}) = ${realSol}$. Le facteur $X^2 + ${c.sqRoot}$ n'a aucune racine réelle ($\\Delta = -4(${c.sqRoot}) < 0$), donc il est irréductible dans $\\mathbb{R}[X]$. Dans $\\mathbb{C}[X]$, il se factorise en $(X - ${c.root}i)(X + ${c.root}i)$.`
        );
      } else if (p3Variant === 'td_deg4_double_double') {
        const deg4DoubleDoubleCases = [
          {
            poly: "X^4 - 2X^2 + 1",
            root: 1,
            factor: "(X - 1)^2 (X + 1)^2",
            distractors: [
              "$(X^2 - 1)^2$ (deux racines simples)",
              "$(X - 1)^4$ (une unique racine d'ordre 4)",
              "$(X - 1)(X + 1)(X^2 + 1)$ (racines simples)"
            ]
          },
          {
            poly: "X^4 - 8X^2 + 16",
            root: 2,
            factor: "(X - 2)^2 (X + 2)^2",
            distractors: [
              "$(X^2 - 4)^2$ (deux racines simples)",
              "$(X - 2)^4$ (une unique racine d'ordre 4)",
              "$(X - 2)(X + 2)(X^2 + 4)$ (racines simples)"
            ]
          },
          {
            poly: "X^4 - 18X^2 + 81",
            root: 3,
            factor: "(X - 3)^2 (X + 3)^2",
            distractors: [
              "$(X^2 - 9)^2$ (deux racines simples)",
              "$(X - 3)^4$ (une unique racine d'ordre 4)",
              "$(X - 3)(X + 3)(X^2 + 9)$ (racines simples)"
            ]
          },
          {
            poly: "X^4 - 32X^2 + 256",
            root: 4,
            factor: "(X - 4)^2 (X + 4)^2",
            distractors: [
              "$(X^2 - 16)^2$ (deux racines simples)",
              "$(X - 4)^4$ (une unique racine d'ordre 4)",
              "$(X - 4)(X + 4)(X^2 + 16)$ (racines simples)"
            ]
          },
          {
            poly: "X^4 - 50X^2 + 625",
            root: 5,
            factor: "(X - 5)^2 (X + 5)^2",
            distractors: [
              "$(X^2 - 25)^2$ (deux racines simples)",
              "$(X - 5)^4$ (une unique racine d'ordre 4)",
              "$(X - 5)(X + 5)(X^2 + 25)$ (racines simples)"
            ]
          }
        ];
        const c = this.randChoice(deg4DoubleDoubleCases);
        return this.makeMcq(
          'L1-CMP', 3, "Polynôme de degré 4 à racines doubles multiples",
          "Identifier des racines doubles dans un polynôme de degré 4",
          `Factoriser le polynôme $P(X) = ${c.poly}$ dans $\\mathbb{R}[X]$ et préciser la multiplicité de ses racines :`,
          `$${c.factor}$ (deux racines doubles : $${c.root}$ et $-${c.root}$)`,
          c.distractors,
          "Reconnais une identité remarquable de la forme $(X^2 - a^2)^2$.",
          "Factorise ensuite la différence de carrés à l'intérieur de la puissance.",
          `On reconnaît $${c.poly} = (X^2 - ${c.root * c.root})^2 = [(X - ${c.root})(X + ${c.root})]^2 = ${c.factor}$. Les racines $${c.root}$ et $-${c.root}$ sont donc toutes les deux des racines de multiplicité 2 (racines doubles).`
        );
      } else if (p3Variant === 'td_deg4_sophie_germain') {
        const sophieGermainCases = [
          {
            poly: "X^4 + X^2 + 1",
            completion: "X^4 + X^2 + 1 = (X^4 + 2X^2 + 1) - X^2 = (X^2 + 1)^2 - X^2",
            ans: "$(X^2 - X + 1)(X^2 + X + 1)$",
            distractors: [
              "$(X^2 + 1)^2$",
              "$(X^2 + X - 1)(X^2 - X - 1)$",
              "Irréductible dans $\\mathbb{R}[X]$"
            ],
            hint1: "Complète le carré en écrivant : $X^4 + X^2 + 1 = (X^4 + 2X^2 + 1) - X^2 = (X^2 + 1)^2 - X^2$.",
            hint2: "Applique ensuite l'identité remarquable $A^2 - B^2 = (A - B)(A + B)$ avec $A = X^2 + 1$ et $B = X$, puis vérifie que les discriminants $\\Delta$ des deux trinômes sont strictement négatifs.",
            sol: "On écrit $X^4 + X^2 + 1 = (X^2 + 1)^2 - X^2 = (X^2 + 1 - X)(X^2 + 1 + X) = (X^2 - X + 1)(X^2 + X + 1)$. Pour les deux trinômes, le discriminant est $\\Delta = 1 - 4 = -3 < 0$, ce qui garantit leur irréductibilité dans $\\mathbb{R}[X]$."
          },
          {
            poly: "X^4 + 4",
            completion: "X^4 + 4 = (X^4 + 4X^2 + 4) - 4X^2 = (X^2 + 2)^2 - (2X)^2",
            ans: "$(X^2 - 2X + 2)(X^2 + 2X + 2)$",
            distractors: [
              "$(X^2 + 2)^2$",
              "$(X^2 - 2)(X^2 + 2)$",
              "Irréductible dans $\\mathbb{R}[X]$"
            ],
            hint1: "Complète le carré en écrivant : $X^4 + 4 = (X^4 + 4X^2 + 4) - 4X^2 = (X^2 + 2)^2 - (2X)^2$.",
            hint2: "Applique l'identité remarquable $A^2 - B^2 = (A - B)(A + B)$ avec $A = X^2 + 2$ et $B = 2X$, puis vérifie que les discriminants $\\Delta$ sont strictement négatifs.",
            sol: "On applique l'identité de Sophie Germain : $X^4 + 4 = (X^2 + 2)^2 - (2X)^2 = (X^2 - 2X + 2)(X^2 + 2X + 2)$. Pour chaque trinôme, $\\Delta = 4 - 8 = -4 < 0$, donc ils sont tous deux irréductibles dans $\\mathbb{R}[X]$."
          },
          {
            poly: "X^4 + 64",
            completion: "X^4 + 64 = (X^4 + 16X^2 + 64) - 16X^2 = (X^2 + 8)^2 - (4X)^2",
            ans: "$(X^2 - 4X + 8)(X^2 + 4X + 8)$",
            distractors: [
              "$(X^2 + 8)^2$",
              "$(X^2 - 8)(X^2 + 8)$",
              "Irréductible dans $\\mathbb{R}[X]$"
            ],
            hint1: "Complète le carré en écrivant : $X^4 + 64 = (X^4 + 16X^2 + 64) - 16X^2 = (X^2 + 8)^2 - (4X)^2$.",
            hint2: "Applique $A^2 - B^2 = (A - B)(A + B)$ avec $A = X^2 + 8$ et $B = 4X$, puis vérifie que les discriminants $\\Delta$ sont strictement négatifs.",
            sol: "On écrit $X^4 + 64 = (X^2 + 8)^2 - (4X)^2 = (X^2 - 4X + 8)(X^2 + 4X + 8)$. Les deux facteurs du second degré ont pour discriminant $\\Delta = 16 - 32 = -16 < 0$, donc ils sont irréductibles dans $\\mathbb{R}[X]$."
          },
          {
            poly: "X^4 + 4X^2 + 16",
            completion: "X^4 + 4X^2 + 16 = (X^4 + 8X^2 + 16) - 4X^2 = (X^2 + 4)^2 - (2X)^2",
            ans: "$(X^2 - 2X + 4)(X^2 + 2X + 4)$",
            distractors: [
              "$(X^2 + 4)^2$",
              "$(X^2 + 2X - 4)(X^2 - 2X - 4)$",
              "Irréductible dans $\\mathbb{R}[X]$"
            ],
            hint1: "Complète le carré en écrivant : $X^4 + 4X^2 + 16 = (X^4 + 8X^2 + 16) - 4X^2 = (X^2 + 4)^2 - (2X)^2$.",
            hint2: "Applique $A^2 - B^2 = (A - B)(A + B)$ avec $A = X^2 + 4$ et $B = 2X$, puis étudie le signe des discriminants.",
            sol: "On complète le carré : $X^4 + 4X^2 + 16 = (X^2 + 4)^2 - 4X^2 = (X^2 - 2X + 4)(X^2 + 2X + 4)$. Le discriminant de chacun des deux trinômes est $\\Delta = 4 - 16 = -12 < 0$, donc ils sont irréductibles dans $\\mathbb{R}[X]$."
          },
          {
            poly: "X^4 + 2X^2 + 9",
            completion: "X^4 + 2X^2 + 9 = (X^4 + 6X^2 + 9) - 4X^2 = (X^2 + 3)^2 - (2X)^2",
            ans: "$(X^2 - 2X + 3)(X^2 + 2X + 3)$",
            distractors: [
              "$(X^2 + 3)^2$",
              "$(X^2 + 2X - 3)(X^2 - 2X - 3)$",
              "Irréductible dans $\\mathbb{R}[X]$"
            ],
            hint1: "Complète le carré en écrivant : $X^4 + 2X^2 + 9 = (X^4 + 6X^2 + 9) - 4X^2 = (X^2 + 3)^2 - (2X)^2$.",
            hint2: "Applique $A^2 - B^2 = (A - B)(A + B)$ avec $A = X^2 + 3$ et $B = 2X$.",
            sol: "On a $X^4 + 2X^2 + 9 = (X^2 + 3)^2 - (2X)^2 = (X^2 - 2X + 3)(X^2 + 2X + 3)$. Les deux facteurs ont $\\Delta = 4 - 12 = -8 < 0$, ce qui assure leur irréductibilité dans $\\mathbb{R}[X]$."
          },
          {
            poly: "X^4 + 5X^2 + 9",
            completion: "X^4 + 5X^2 + 9 = (X^4 + 6X^2 + 9) - X^2 = (X^2 + 3)^2 - X^2",
            ans: "$(X^2 - X + 3)(X^2 + X + 3)$",
            distractors: [
              "$(X^2 + 3)^2$",
              "$(X^2 + X - 3)(X^2 - X - 3)$",
              "Irréductible dans $\\mathbb{R}[X]$"
            ],
            hint1: "Complète le carré en écrivant : $X^4 + 5X^2 + 9 = (X^4 + 6X^2 + 9) - X^2 = (X^2 + 3)^2 - X^2$.",
            hint2: "Applique $A^2 - B^2 = (A - B)(A + B)$ avec $A = X^2 + 3$ et $B = X$.",
            sol: "On a $X^4 + 5X^2 + 9 = (X^2 + 3)^2 - X^2 = (X^2 - X + 3)(X^2 + X + 3)$. Pour les deux trinômes, $\\Delta = 1 - 12 = -11 < 0$, donc ils sont irréductibles dans $\\mathbb{R}[X]$."
          },
          {
            poly: "X^4 - X^2 + 16",
            completion: "X^4 - X^2 + 16 = (X^4 + 8X^2 + 16) - 9X^2 = (X^2 + 4)^2 - (3X)^2",
            ans: "$(X^2 - 3X + 4)(X^2 + 3X + 4)$",
            distractors: [
              "$(X^2 + 4)^2$",
              "$(X^2 + 3X - 4)(X^2 - 3X - 4)$",
              "Irréductible dans $\\mathbb{R}[X]$"
            ],
            hint1: "Complète le carré en écrivant : $X^4 - X^2 + 16 = (X^4 + 8X^2 + 16) - 9X^2 = (X^2 + 4)^2 - (3X)^2$.",
            hint2: "Applique $A^2 - B^2 = (A - B)(A + B)$ avec $A = X^2 + 4$ et $B = 3X$.",
            sol: "On a $X^4 - X^2 + 16 = (X^2 + 4)^2 - (3X)^2 = (X^2 - 3X + 4)(X^2 + 3X + 4)$. Pour les deux trinômes, $\\Delta = 9 - 16 = -7 < 0$, ils sont donc irréductibles dans $\\mathbb{R}[X]$."
          },
          {
            poly: "X^4 + 7X^2 + 16",
            completion: "X^4 + 7X^2 + 16 = (X^4 + 8X^2 + 16) - X^2 = (X^2 + 4)^2 - X^2",
            ans: "$(X^2 - X + 4)(X^2 + X + 4)$",
            distractors: [
              "$(X^2 + 4)^2$",
              "$(X^2 + X - 4)(X^2 - X - 4)$",
              "Irréductible dans $\\mathbb{R}[X]$"
            ],
            hint1: "Complète le carré en écrivant : $X^4 + 7X^2 + 16 = (X^4 + 8X^2 + 16) - X^2 = (X^2 + 4)^2 - X^2$.",
            hint2: "Applique $A^2 - B^2 = (A - B)(A + B)$ avec $A = X^2 + 4$ et $B = X$.",
            sol: "On a $X^4 + 7X^2 + 16 = (X^2 + 4)^2 - X^2 = (X^2 - X + 4)(X^2 + X + 4)$. Pour les deux trinômes, $\\Delta = 1 - 16 = -15 < 0$, ils sont donc irréductibles dans $\\mathbb{R}[X]$."
          },
          {
            poly: "X^4 + 1",
            completion: "X^4 + 1 = (X^4 + 2X^2 + 1) - 2X^2 = (X^2 + 1)^2 - (\\sqrt{2}X)^2",
            ans: "$(X^2 - \\sqrt{2}X + 1)(X^2 + \\sqrt{2}X + 1)$",
            distractors: [
              "$(X^2 + 1)^2$",
              "$(X^2 - 1)^2$",
              "Irréductible dans $\\mathbb{R}[X]$"
            ],
            hint1: "Complète le carré en écrivant : $X^4 + 1 = (X^4 + 2X^2 + 1) - 2X^2 = (X^2 + 1)^2 - (\\sqrt{2}X)^2$.",
            hint2: "Applique $A^2 - B^2 = (A - B)(A + B)$ avec $A = X^2 + 1$ et $B = \\sqrt{2}X$, puis vérifie que les discriminants sont strictement négatifs.",
            sol: "On a $X^4 + 1 = (X^2 + 1)^2 - 2X^2 = (X^2 - \\sqrt{2}X + 1)(X^2 + \\sqrt{2}X + 1)$. Pour ces deux trinômes, $\\Delta = (-\\sqrt{2})^2 - 4(1)(1) = 2 - 4 = -2 < 0$, ils sont donc irréductibles dans $\\mathbb{R}[X]$."
          }
        ];
        const c = this.randChoice(sophieGermainCases);
        return this.makeMcq(
          'L1-CMP', 3, "Factorisation dans R[X] d'un polynôme de degré 4 sans racine réelle",
          "Factoriser par la méthode de complétion du carré",
          `Quelle est la factorisation en produit de polynômes irréductibles dans $\\mathbb{R}[X]$ du polynôme $Q(X) = ${c.poly}$ ?`,
          c.ans,
          c.distractors,
          c.hint1,
          c.hint2,
          c.sol
        );
      } else if (p3Variant === 'td_deg6') {
        const deg6Cases = [
          {
            poly: "X^6 - 9X^3 + 8",
            yTrinome: "Y^2 - 9Y + 8 = (Y - 1)(Y - 8)",
            ans: "$(X - 1)(X^2 + X + 1)(X - 2)(X^2 + 2X + 4)$",
            distractors: [
              "$(X^3 - 1)(X^3 - 8)$",
              "$(X - 1)^3 (X - 2)^3$",
              "$(X - 1)(X + 1)(X - 2)(X + 2)(X^2 + 1)$"
            ],
            hint1: "Effectue le changement de variable $Y = X^3$ pour factoriser le trinôme $Y^2 - 9Y + 8 = (Y - 1)(Y - 8)$.",
            hint2: "Réinjecte $Y = X^3$, puis factorise $X^3 - 1$ et $X^3 - 8$ à l'aide de l'identité $A^3 - B^3 = (A - B)(A^2 + AB + B^2)$.",
            sol: "En posant $Y = X^3$, le polynôme devient $Y^2 - 9Y + 8 = (Y - 1)(Y - 8) = (X^3 - 1)(X^3 - 8)$. Or $X^3 - 1 = (X - 1)(X^2 + X + 1)$ et $X^3 - 8 = (X - 2)(X^2 + 2X + 4)$. Comme $\\Delta_1 = 1 - 4 = -3 < 0$ et $\\Delta_2 = 4 - 16 = -12 < 0$, les deux facteurs de degré 2 sont irréductibles dans $\\mathbb{R}[X]$."
          },
          {
            poly: "X^6 - 28X^3 + 27",
            yTrinome: "Y^2 - 28Y + 27 = (Y - 1)(Y - 27)",
            ans: "$(X - 1)(X^2 + X + 1)(X - 3)(X^2 + 3X + 9)$",
            distractors: [
              "$(X^3 - 1)(X^3 - 27)$",
              "$(X - 1)^3 (X - 3)^3$",
              "$(X - 1)(X + 1)(X - 3)(X + 3)(X^2 + 1)$"
            ],
            hint1: "Effectue le changement de variable $Y = X^3$ pour factoriser le trinôme $Y^2 - 28Y + 27 = (Y - 1)(Y - 27)$.",
            hint2: "Factorise $X^3 - 1$ et $X^3 - 27 = X^3 - 3^3$ avec $A^3 - B^3 = (A - B)(A^2 + AB + B^2)$.",
            sol: "En posant $Y = X^3$, on a $Y^2 - 28Y + 27 = (Y - 1)(Y - 27) = (X^3 - 1)(X^3 - 27)$. Avec l'identité cubique : $X^3 - 1 = (X - 1)(X^2 + X + 1)$ et $X^3 - 27 = (X - 3)(X^2 + 3X + 9)$. Les discriminants sont $\\Delta_1 = 1 - 4 = -3 < 0$ et $\\Delta_2 = 9 - 36 = -27 < 0$, donc ces deux facteurs quadratiques sont irréductibles dans $\\mathbb{R}[X]$."
          },
          {
            poly: "X^6 - 35X^3 + 216",
            yTrinome: "Y^2 - 35Y + 216 = (Y - 8)(Y - 27)",
            ans: "$(X - 2)(X^2 + 2X + 4)(X - 3)(X^2 + 3X + 9)$",
            distractors: [
              "$(X^3 - 8)(X^3 - 27)$",
              "$(X - 2)^3 (X - 3)^3$",
              "$(X - 2)(X + 2)(X - 3)(X + 3)(X^2 + 4)$"
            ],
            hint1: "Effectue le changement de variable $Y = X^3$ : les racines de $Y^2 - 35Y + 216$ sont $8$ et $27$.",
            hint2: "Factorise $X^3 - 8 = X^3 - 2^3$ et $X^3 - 27 = X^3 - 3^3$ avec $A^3 - B^3$.",
            sol: "En posant $Y = X^3$, le trinôme est $(Y - 8)(Y - 27) = (X^3 - 8)(X^3 - 27)$. Or $X^3 - 8 = (X - 2)(X^2 + 2X + 4)$ et $X^3 - 27 = (X - 3)(X^2 + 3X + 9)$. Les deux trinômes ont des discriminants négatifs ($-12$ et $-27$), ils sont donc irréductibles dans $\\mathbb{R}[X]$."
          },
          {
            poly: "X^6 - 65X^3 + 64",
            yTrinome: "Y^2 - 65Y + 64 = (Y - 1)(Y - 64)",
            ans: "$(X - 1)(X^2 + X + 1)(X - 4)(X^2 + 4X + 16)$",
            distractors: [
              "$(X^3 - 1)(X^3 - 64)$",
              "$(X - 1)^3 (X - 4)^3$",
              "$(X - 1)(X + 1)(X - 4)(X + 4)(X^2 + 1)$"
            ],
            hint1: "Pose $Y = X^3$ pour obtenir $Y^2 - 65Y + 64 = (Y - 1)(Y - 64)$.",
            hint2: "Factorise ensuite $X^3 - 1$ et $X^3 - 64 = X^3 - 4^3$.",
            sol: "En posant $Y = X^3$, le polynôme devient $(Y - 1)(Y - 64) = (X^3 - 1)(X^3 - 64) = (X - 1)(X^2 + X + 1)(X - 4)(X^2 + 4X + 16)$. Les deux facteurs de degré 2 sont irréductibles dans $\\mathbb{R}[X]$ car leurs discriminants respectifs sont $-3 < 0$ et $-48 < 0$."
          },
          {
            poly: "X^6 - 7X^3 - 8",
            yTrinome: "Y^2 - 7Y - 8 = (Y + 1)(Y - 8)",
            ans: "$(X + 1)(X^2 - X + 1)(X - 2)(X^2 + 2X + 4)$",
            distractors: [
              "$(X^3 + 1)(X^3 - 8)$",
              "$(X + 1)^3 (X - 2)^3$",
              "$(X - 1)(X^2 + X + 1)(X + 2)(X^2 - 2X + 4)$"
            ],
            hint1: "Pose $Y = X^3$ : les racines de $Y^2 - 7Y - 8$ sont $-1$ et $8$.",
            hint2: "Factorise $X^3 + 1 = (X + 1)(X^2 - X + 1)$ et $X^3 - 8 = (X - 2)(X^2 + 2X + 4)$.",
            sol: "En posant $Y = X^3$, on a $Y^2 - 7Y - 8 = (Y + 1)(Y - 8) = (X^3 + 1)(X^3 - 8)$. Avec la somme et différence de cubes : $X^3 + 1 = (X + 1)(X^2 - X + 1)$ et $X^3 - 8 = (X - 2)(X^2 + 2X + 4)$. Les deux trinômes sont irréductibles dans $\\mathbb{R}[X]$ (discriminants $-3$ et $-12$)."
          }
        ];
        const c = this.randChoice(deg6Cases);
        return this.makeMcq(
          'L1-CMP', 3, "Factorisation d'un polynôme de degré 6 dans $\\mathbb{R}[X]$",
          "Factoriser un polynôme réductible de degré 6 par changement de variable",
          `Quelle est la factorisation en produit de polynômes irréductibles dans $\\mathbb{R}[X]$ du polynôme $P(X) = ${c.poly}$ ?`,
          c.ans,
          c.distractors,
          c.hint1,
          c.hint2,
          c.sol
        );
      } else {
        const desPoleDoubleCases = [
          {
            fraction: "\\frac{1}{(X - 1)(X + 1)^2}",
            ans: "$\\frac{a}{X - 1} + \\frac{b}{(X + 1)^2} + \\frac{c}{X + 1}$",
            distractors: [
              "$\\frac{a}{X - 1} + \\frac{b}{(X + 1)^2}$",
              "$\\frac{a}{X - 1} + \\frac{bX + c}{(X + 1)^2}$",
              "$\\frac{a}{X - 1} + \\frac{b}{X + 1}$"
            ],
            poleSimple: "1",
            poleDouble: "-1"
          },
          {
            fraction: "\\frac{1}{(X - 2)(X + 3)^2}",
            ans: "$\\frac{a}{X - 2} + \\frac{b}{(X + 3)^2} + \\frac{c}{X + 3}$",
            distractors: [
              "$\\frac{a}{X - 2} + \\frac{b}{(X + 3)^2}$",
              "$\\frac{a}{X - 2} + \\frac{bX + c}{(X + 3)^2}$",
              "$\\frac{a}{X - 2} + \\frac{b}{X + 3}$"
            ],
            poleSimple: "2",
            poleDouble: "-3"
          },
          {
            fraction: "\\frac{X}{(X + 2)(X - 1)^2}",
            ans: "$\\frac{a}{X + 2} + \\frac{b}{(X - 1)^2} + \\frac{c}{X - 1}$",
            distractors: [
              "$\\frac{a}{X + 2} + \\frac{b}{(X - 1)^2}$",
              "$\\frac{a}{X + 2} + \\frac{bX + c}{(X - 1)^2}$",
              "$\\frac{a}{X + 2} + \\frac{b}{X - 1}$"
            ],
            poleSimple: "-2",
            poleDouble: "1"
          },
          {
            fraction: "\\frac{1}{(X + 4)(X - 3)^2}",
            ans: "$\\frac{a}{X + 4} + \\frac{b}{(X - 3)^2} + \\frac{c}{X - 3}$",
            distractors: [
              "$\\frac{a}{X + 4} + \\frac{b}{(X - 3)^2}$",
              "$\\frac{a}{X + 4} + \\frac{bX + c}{(X - 3)^2}$",
              "$\\frac{a}{X + 4} + \\frac{b}{X - 3}$"
            ],
            poleSimple: "-4",
            poleDouble: "3"
          },
          {
            fraction: "\\frac{2X + 1}{X^2(X - 1)}",
            ans: "$\\frac{a}{X^2} + \\frac{b}{X} + \\frac{c}{X - 1}$",
            distractors: [
              "$\\frac{a}{X^2} + \\frac{b}{X - 1}$",
              "$\\frac{aX + b}{X^2} + \\frac{c}{X - 1}$",
              "$\\frac{a}{X} + \\frac{b}{X - 1}$"
            ],
            poleSimple: "1",
            poleDouble: "0"
          }
        ];
        const c = this.randChoice(desPoleDoubleCases);
        return this.makeMcq(
          'L1-CMP', 3, "Décomposition en éléments simples avec pôle double",
          "Identifier la forme de la DES pour un dénominateur à racine multiple",
          `Quelle est la forme générale théorique de la décomposition en éléments simples dans $\\mathbb{R}(X)$ de $F(X) = ${c.fraction}$ ?`,
          c.ans,
          c.distractors,
          `Le pôle $${c.poleDouble}$ est de multiplicité 2 (pôle double).`,
          "Chaque pôle multiple de multiplicité $m$ génère une somme de fractions $\\sum_{k=1}^m \\frac{\\alpha_k}{(X - a)^k}$.",
          `Le dénominateur admet le pôle simple $${c.poleSimple}$ et le pôle double $${c.poleDouble}$. D'après le théorème fondamental de décomposition en éléments simples, le pôle double contribue par deux termes successifs. D'où la forme $${c.ans.replace(/\\$/g, '')}$.`
        );
      }
    } else {
      // Palier 4 : Niveau Rigueur & Examen universitaire
      const p4Variant = this.randChoice(['td_deg6_racine_double_i', 'td_division_carre', 'td_pgcd_racines_multiples', 'td_des_partie_entiere', 'taylor_multiplicite']);
      if (p4Variant === 'td_deg6_racine_double_i') {
        const deg6ComplexDoubleCases = [
          {
            poly: "X^6 + X^5 + 3X^4 + 2X^3 + 3X^2 + X + 1",
            factor: "(X^2 + 1)^2 (X^2 + X + 1)",
            quotient: "X^2 + X + 1",
            delta: "1 - 4 = -3 < 0",
            distractors: [
              "$(X^2 + 1)(X^4 + X^3 + 2X^2 + X + 1)$",
              "$(X^2 + 1)^3$",
              "$(X^2 + 1)^2 (X - 1)(X + 1)$"
            ]
          },
          {
            poly: "X^6 - X^5 + 3X^4 - 2X^3 + 3X^2 - X + 1",
            factor: "(X^2 + 1)^2 (X^2 - X + 1)",
            quotient: "X^2 - X + 1",
            delta: "1 - 4 = -3 < 0",
            distractors: [
              "$(X^2 + 1)(X^4 - X^3 + 2X^2 - X + 1)$",
              "$(X^2 + 1)^3$",
              "$(X^2 + 1)^2 (X - 1)^2$"
            ]
          },
          {
            poly: "X^6 + 2X^5 + 4X^4 + 4X^3 + 5X^2 + 2X + 2",
            factor: "(X^2 + 1)^2 (X^2 + 2X + 2)",
            quotient: "X^2 + 2X + 2",
            delta: "4 - 8 = -4 < 0",
            distractors: [
              "$(X^2 + 1)(X^4 + 2X^3 + 3X^2 + 2X + 2)$",
              "$(X^2 + 1)^2 (X + 1)^2$",
              "$(X^2 + 1)^3$"
            ]
          }
        ];
        const c = this.randChoice(deg6ComplexDoubleCases);
        return this.makeMcq(
          'L1-CMP', 4, "Polynôme de degré 6 admettant $i$ comme racine double",
          "Factoriser un polynôme réel connaissant une racine double complexe",
          `Soit le polynôme $P(X) = ${c.poly} \\in \\mathbb{R}[X]$. Sachant que $i$ est racine double de $P$, quelle est sa factorisation en irréductibles dans $\\mathbb{R}[X]$ ?`,
          `$${c.factor}$`,
          c.distractors,
          "Comme $P$ est à coefficients réels, si $i$ est racine double, alors son conjugué $-i$ est également racine double.",
          "Le produit $(X - i)^2 (X + i)^2 = [(X - i)(X + i)]^2 = (X^2 + 1)^2 = X^4 + 2X^2 + 1$ divise donc $P(X)$ dans $\\mathbb{R}[X]$. Effectue la division euclidienne.",
          `Comme $P \\in \\mathbb{R}[X]$, la conjugaison assure que $-i$ est également racine double de $P$. Ainsi, le polynôme $[(X - i)(X + i)]^2 = (X^2 + 1)^2 = X^4 + 2X^2 + 1$ divise $P(X)$. La division euclidienne de $P(X)$ par $X^4 + 2X^2 + 1$ donne pour quotient $${c.quotient}$. Ce trinôme ayant $\\Delta = ${c.delta}$, il est irréductible dans $\\mathbb{R}[X]$. D'où $P(X) = ${c.factor}$.`
        );
      } else if (p4Variant === 'td_division_carre') {
        const n = this.randChoice([3, 4, 5, 6, 'n']);
        let correctAns = "";
        let distractors = [];
        let solDetail = "";
        let nStr = "";
        if (n === 'n') {
          nStr = 'n';
          correctAns = "$nX - (n - 1)$";
          distractors = [
            "$nX + (n - 1)$",
            "$nX + 1$",
            "$n(X - 1)^2$"
          ];
          solDetail = "Comme $\\deg((X - 1)^2) = 2$, le reste est de la forme $R(X) = aX + b$. On a $X^n = Q(X)(X - 1)^2 + aX + b$. En évaluant en $X = 1$ : $1 = a + b$. En dérivant : $n X^{n-1} = Q'(X)(X - 1)^2 + 2Q(X)(X - 1) + a$, d'où en $X = 1$ : $a = n$. On en déduit $b = 1 - n = -(n - 1)$, soit $R(X) = nX - (n - 1)$.";
        } else {
          const numN = Number(n);
          nStr = `${numN}`;
          const c = numN - 1;
          correctAns = `$${numN}X - ${c}$`;
          distractors = [
            `$${numN}X + ${c}$`,
            `$${numN}X + 1$`,
            `$${c}X - ${numN}$`
          ];
          solDetail = `Comme $\\deg((X - 1)^2) = 2$, le reste est de la forme $R(X) = aX + b$. On a $X^{${numN}} = Q(X)(X - 1)^2 + aX + b$. En évaluant en $X = 1$ : $1 = a + b$. En dérivant : $${numN} X^{${numN - 1}} = Q'(X)(X - 1)^2 + 2Q(X)(X - 1) + a$, d'où en $X = 1$ : $a = ${numN}$. On en déduit $b = 1 - ${numN} = -${c}$, soit $R(X) = ${numN}X - ${c}$.`;
        }
        return this.makeMcq(
          'L1-CMP', 4, "Reste de division euclidienne par un carré $(X - 1)^2$",
          "Calculer le reste par dérivation ou formule de Taylor",
          `Quel est le reste de la division euclidienne de $A(X) = X^{${nStr}}$ par $B(X) = (X - 1)^2$ dans $\\mathbb{R}[X]$ ?`,
          correctAns,
          distractors,
          "Le diviseur $B(X) = (X - 1)^2$ étant de degré 2, le reste $R(X)$ est de degré inférieur ou égal à 1, donc de la forme $R(X) = aX + b$.",
          `Écris l'égalité euclidienne $X^{${nStr}} = Q(X)(X - 1)^2 + aX + b$. Évalue cette égalité puis sa dérivée en $X = 1$ pour déterminer $a$ et $b$.`,
          solDetail
        );
      } else if (p4Variant === 'td_pgcd_racines_multiples') {
        const pgcdCases = [
          {
            poly: "X^3 - 3X + 2",
            pgcd: "X - 1",
            root: "1",
            deriv: "3X^2 - 3 = 3(X - 1)(X + 1)",
            distractors: [
              "$\\text{pgcd}(P, P') = 1$ ; $P$ ne possède aucune racine multiple",
              "$\\text{pgcd}(P, P') = X + 1$ ; $-1$ est racine double de $P$",
              "$\\text{pgcd}(P, P') = (X - 1)^2$ ; $1$ est racine triple de $P$"
            ]
          },
          {
            poly: "X^3 - 3X - 2",
            pgcd: "X + 1",
            root: "-1",
            deriv: "3X^2 - 3 = 3(X - 1)(X + 1)",
            distractors: [
              "$\\text{pgcd}(P, P') = 1$ ; $P$ ne possède aucune racine multiple",
              "$\\text{pgcd}(P, P') = X - 1$ ; $1$ est racine double de $P$",
              "$\\text{pgcd}(P, P') = (X + 1)^2$ ; $-1$ est racine triple de $P$"
            ]
          },
          {
            poly: "X^3 - 12X + 16",
            pgcd: "X - 2",
            root: "2",
            deriv: "3X^2 - 12 = 3(X - 2)(X + 2)",
            distractors: [
              "$\\text{pgcd}(P, P') = 1$ ; $P$ ne possède aucune racine multiple",
              "$\\text{pgcd}(P, P') = X + 2$ ; $-2$ est racine double de $P$",
              "$\\text{pgcd}(P, P') = (X - 2)^2$ ; $2$ est racine triple de $P$"
            ]
          },
          {
            poly: "X^3 - 12X - 16",
            pgcd: "X + 2",
            root: "-2",
            deriv: "3X^2 - 12 = 3(X - 2)(X + 2)",
            distractors: [
              "$\\text{pgcd}(P, P') = 1$ ; $P$ ne possède aucune racine multiple",
              "$\\text{pgcd}(P, P') = X - 2$ ; $2$ est racine double de $P$",
              "$\\text{pgcd}(P, P') = (X + 2)^2$ ; $-2$ est racine triple de $P$"
            ]
          },
          {
            poly: "X^3 - 7X^2 + 15X - 9",
            pgcd: "X - 3",
            root: "3",
            deriv: "3X^2 - 14X + 15 = (X - 3)(3X - 5)",
            distractors: [
              "$\\text{pgcd}(P, P') = 1$ ; $P$ ne possède aucune racine multiple",
              "$\\text{pgcd}(P, P') = 3X - 5$ ; $5/3$ est racine double de $P$",
              "$\\text{pgcd}(P, P') = (X - 3)^2$ ; $3$ est racine triple de $P$"
            ]
          }
        ];
        const c = this.randChoice(pgcdCases);
        return this.makeMcq(
          'L1-CMP', 4, "Détection des racines multiples par le PGCD(P, P')",
          "Relier les racines multiples au PGCD du polynôme et de sa dérivée",
          `Calculer $\\text{pgcd}(P, P')$ pour $P(X) = ${c.poly}$. Qu'en déduit-on rigoureusement sur les racines multiples de $P$ ?`,
          `$\\text{pgcd}(P, P') = ${c.pgcd}$ ; $${c.root}$ est racine double de $P$`,
          c.distractors,
          `Dérive $P$ : $P'(X) = ${c.deriv}$.`,
          "Applique le théorème : les racines de $\\text{pgcd}(P, P')$ sont les racines multiples de $P$, avec multiplicité diminuée de 1.",
          `On a $P'(X) = ${c.deriv}$. En évaluant les racines candidates dans $P$, le seul facteur unitaire commun annulant $P$ et $P'$ est $\\text{pgcd}(P, P') = ${c.pgcd}$. La racine $${c.root}$ est donc de multiplicité $1 + 1 = 2$ (racine double) pour $P$.`
        );
      } else if (p4Variant === 'td_des_partie_entiere') {
        const desEntiereCases = [
          {
            frac: "\\frac{X^3 + 2}{(X - 1)^2 (X + 2)}",
            e: "1",
            alpha: "1",
            evalStep: "\\lim_{X \\to 1} (X - 1)^2 G(X) = \\left[\\frac{X^3 + 2}{X + 2}\\right]_{X=1} = \\frac{1 + 2}{1 + 2} = 1",
            distractors: [
              "$E(X) = 0$ et $\\alpha = 1$",
              "$E(X) = 1$ et $\\alpha = 3$",
              "$E(X) = X$ et $\\alpha = 2$"
            ]
          },
          {
            frac: "\\frac{2X^3 + 4}{(X - 1)^2 (X + 1)}",
            e: "2",
            alpha: "3",
            evalStep: "\\lim_{X \\to 1} (X - 1)^2 G(X) = \\left[\\frac{2X^3 + 4}{X + 1}\\right]_{X=1} = \\frac{2 + 4}{1 + 1} = 3",
            distractors: [
              "$E(X) = 2$ et $\\alpha = 1$",
              "$E(X) = 0$ et $\\alpha = 3$",
              "$E(X) = 2X$ et $\\alpha = 3$"
            ]
          },
          {
            frac: "\\frac{X^3 + 5}{(X - 2)^2 (X + 1)}",
            e: "1",
            alpha: "\\frac{13}{3}",
            evalStep: "\\lim_{X \\to 2} (X - 2)^2 G(X) = \\left[\\frac{X^3 + 5}{X + 1}\\right]_{X=2} = \\frac{8 + 5}{2 + 1} = \\frac{13}{3}",
            distractors: [
              "$E(X) = 1$ et $\\alpha = 13$",
              "$E(X) = 0$ et $\\alpha = \\frac{13}{3}$",
              "$E(X) = 1$ et $\\alpha = 1$"
            ]
          }
        ];
        const c = this.randChoice(desEntiereCases);
        return this.makeMcq(
          'L1-CMP', 4, "DES avec partie entière et pôle double",
          "Déterminer la partie entière et le coefficient dominant d'un pôle double",
          `Pour la fraction rationnelle $G(X) = ${c.frac}$, quelle est sa partie entière $E(X)$ et le coefficient $\\alpha$ du terme dominant au pôle double ?`,
          `$E(X) = ${c.e}$ et $\\alpha = ${c.alpha}$`,
          c.distractors,
          `Le numérateur et le dénominateur sont tous deux de degré 3 : la partie entière est le quotient des coefficients dominants $E(X) = ${c.e}$.`,
          "Pour isoler $\\alpha$, multiplie $G(X)$ par le facteur au carré du pôle puis évalue l'expression en la racine correspondante.",
          `Comme le degré du numérateur égale celui du dénominateur (degré 3), la partie entière est la constante $E(X) = ${c.e}$. Pour $\\alpha$, on calcule $${c.evalStep}$. D'où $E(X) = ${c.e}$ et $\\alpha = ${c.alpha}$.`
        );
      } else {
        const n = this.randChoice([3, 4, 5]);
        return this.makeMcq(
          'L1-CMP', 4, "Ordre de multiplicité via les dérivées successives",
          "Appliquer la caractérisation de Taylor pour les racines multiples",
          `Pour le polynôme $P(X) = X^{${n}} - ${n}X + ${n - 1}$, quel est l'ordre de multiplicité exact de la racine $x_0 = 1$ ?`,
          "Racine de multiplicité 2 (racine double)",
          [
            "Racine simple (multiplicité 1)",
            `Racine de multiplicité ${n}`,
            "1 n'est pas racine de ce polynôme"
          ],
          "Calcule $P(1)$, $P'(1)$ et $P''(1)$.",
          "La multiplicité est $m$ si $P(1) = \\dots = P^{(m-1)}(1) = 0$ et $P^{(m)}(1) \\neq 0$.",
          `$P(1) = 1 - ${n} + ${n-1} = 0$. $P'(X) = ${n}X^{${n-1}} - ${n} \\implies P'(1) = ${n} - ${n} = 0$. $P''(X) = ${n}(${n-1})X^{${n-2}} \\implies P''(1) = ${n*(n-1)} \\neq 0$. Par la caractérisation de Taylor, $1$ est une racine de multiplicité exactement 2 (racine double).`
        );
      }
    }
  },

  generateL1_REL(tier) {
    const n = this.randInt(3, 7);
    return this.makeMcq(
      'L1-REL', tier, "Borne supérieure et ensembles bornés",
      "Déterminer la borne supérieure d'un ensemble de réels",
      `Déterminer la borne supérieure de la partie $A = \\left\\{ 1 - \\frac{1}{n} \\;\\middle|\\; n \\in \\mathbb{N}^* \\right\\}$ dans $\\mathbb{R}$.`,
      "$\\sup(A) = 1$",
      ["$\\sup(A) = 0$", "$\\sup(A) = 2$", "$\\sup(A) = +\\infty$"],
      "Pour tout $n \\ge 1$, $1 - 1/n < 1$.",
      "Quand $n \\to +\\infty$, $1 - 1/n \\to 1$.",
      "1 est un majorant de $A$, et c'est la limite d'une suite d'éléments de $A$. Par la caractérisation de la borne supérieure, $\\sup(A) = 1$."
    );
  },

  generateL1_SUI(tier) {
    return this.makeMcq(
      'L1-SUI', tier, "Suites réelles et critères fondamentaux",
      "Appliquer les théorèmes fondamentaux de convergence séquentielle",
      "Lequel des énoncés suivants est une formulation exacte du Théorème de Bolzano-Weierstrass dans $\\mathbb{R}$ ?",
      "Toute suite réelle bornée admet au moins une sous-suite convergente",
      [
        "Toute suite réelle convergente est monotone",
        "Toute suite réelle bornée est convergente",
        "Toute suite de Cauchy est non bornée"
      ],
      "Ce théorème garantit l'existence d'une valeur d'adhérence pour les suites bornées.",
      "Une suite comme $u_n = (-1)^n$ est bornée mais ne converge pas elle-même.",
      "Le Théorème de Bolzano-Weierstrass énonce que de toute suite réelle bornée, on peut extraire une sous-suite convergente."
    );
  },

  generateL1_CNT(tier) {
    return this.makeMcq(
      'L1-CNT', tier, "Théorème de Rolle et Accroissements Finis",
      "Vérifier les hypothèses du théorème de Rolle",
      "Soit $f : [a, b] \\to \\mathbb{R}$ continue sur $[a, b]$, dérivable sur $]a, b[$ telle que $f(a) = f(b)$. Que garantit le Théorème de Rolle ?",
      "Il existe $c \\in ]a, b[$ tel que $f'(c) = 0$",
      [
        "Pour tout $x \\in ]a, b[$, $f'(x) = 0$",
        "Il existe $c \\in [a, b]$ tel que $f(c) = 0$",
        "$f$ est obligatoirement constante sur $[a, b]$"
      ],
      "Rolle garantit l'existence d'une tangente horizontale à la courbe.",
      "L'extremum est atteint à l'intérieur de l'intervalle si la fonction n'est pas constante.",
      "Le Théorème de Rolle garantit l'existence d'au moins un point $c \\in ]a, b[$ où la dérivée s'annule : $f'(c) = 0$."
    );
  },

  generateL1_TAY(tier) {
    return this.makeMcq(
      'L1-TAY', tier, "Développements limités usuels en 0",
      "Restituer le développement limité de $\\cos(x)$ à l'ordre 4",
      "Quel est le développement limité en 0 à l'ordre 4 de la fonction $\\cos(x)$ ?",
      "$\\cos(x) = 1 - \\frac{x^2}{2} + \\frac{x^4}{24} + o(x^4)$",
      [
        "$\\cos(x) = 1 - x + \\frac{x^2}{2} - \\frac{x^3}{6} + o(x^4)$",
        "$\\cos(x) = x - \\frac{x^3}{6} + o(x^4)$",
        "$\\cos(x) = 1 - \\frac{x^2}{2} + \\frac{x^4}{4} + o(x^4)$"
      ],
      "La fonction cosinus est paire, son DL ne comporte que des puissances paires.",
      "Les coefficients sont alternés : $(-1)^k / (2k)!$.",
      "Comme $\\cos$ est paire, $\\cos(x) = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} + o(x^4) = 1 - \\frac{x^2}{2} + \\frac{x^4}{24} + o(x^4)$."
    );
  },

  generateL1_INT(tier) {
    const a = this.randInt(2, 5);
    return this.makeMcq(
      'L1-INT', tier, "Intégration par parties",
      "Calculer une intégrale de la forme $\\int x e^{ax} dx$",
      `Calculer la primitive $\\int x e^{${a}x} \\, dx$ par intégration par parties.`,
      `$\\frac{x e^{${a}x}}{${a}} - \\frac{e^{${a}x}}{${a * a}} + C$`,
      [
        `$\\frac{x^2 e^{${a}x}}{2} + C$`,
        `$\\frac{x e^{${a}x}}{${a}} + \\frac{e^{${a}x}}{${a}} + C$`,
        `$x e^{${a}x} - e^{${a}x} + C$`
      ],
      "Pose $u(x) = x$ (donc $u'(x) = 1$) et $v'(x) = e^{ax}$ (donc $v(x) = \\frac{1}{a} e^{ax}$).",
      "Formule : $\\int u v' = u v - \\int u' v$.",
      `Par IPP : $\\int x e^{${a}x} dx = \\frac{x e^{${a}x}}{${a}} - \\int \\frac{e^{${a}x}}{${a}} dx = \\frac{x e^{${a}x}}{${a}} - \\frac{e^{${a}x}}{${a * a}} + C$.`
    );
  },

  generateL1_GEO(tier) {
    return this.makeMcq(
      'L1-GEO', tier, "Repère de Frenet et courbure",
      "Définir le vecteur tangent unitaire et la courbure",
      "Pour un arc paramétré régulier de classe $\\mathcal{C}^2$ paramétré par l'abscisse curviligne $s$, que vaut la dérivée $\\frac{d\\vec{T}}{ds}$ du vecteur tangent unitaire ?",
      "$\\frac{d\\vec{T}}{ds} = \\gamma \\vec{N}$ (où $\\gamma$ est la courbure)",
      [
        "$\\frac{d\\vec{T}}{ds} = \\vec{0}$",
        "$\\frac{d\\vec{T}}{ds} = -\\vec{T}$",
        "$\\frac{d\\vec{T}}{ds} = \\tau \\vec{B}$"
      ],
      "C'est la première formule de Frenet.",
      "La variation de la direction du vecteur vitesse définit la courbure $\\gamma$.",
      "D'après les formules de Frenet, $\\frac{d\\vec{T}}{ds} = \\gamma \\vec{N}$, où $\\gamma$ est la courbure algébrique et $\\vec{N}$ la normale unitaire."
    );
  },

  // =========================================================================
  // IMPLÉMENTATION DES GÉNÉRATEURS L2
  // =========================================================================

  generateL2_RED1(tier) {
    const l1 = this.randInt(1, 4);
    const l2 = this.randInt(5, 8);
    const tr = l1 + l2;
    const det = l1 * l2;
    return this.makeMcq(
      'L2-RED1', tier, "Valeurs propres et polynôme caractéristique 2x2",
      "Déterminer les valeurs propres d'une matrice carrée",
      `Soit une matrice $A \\in \\mathcal{M}_2(\\mathbb{R})$ de trace $\\text{Tr}(A) = ${tr}$ et de déterminant $\\det(A) = ${det}$. Quelles sont ses valeurs propres ?`,
      `$\\lambda_1 = ${l1}$ et $\\lambda_2 = ${l2}$`,
      [
        `$\\lambda_1 = ${l1 + 1}$ et $\\lambda_2 = ${l2 - 1}$`,
        `$\\lambda_1 = ${-l1}$ et $\\lambda_2 = ${-l2}$`,
        "Aucune valeur propre réelle"
      ],
      "Le polynôme caractéristique en dimension 2 s'écrit $\\chi_A(X) = X^2 - \\text{Tr}(A)X + \\det(A)$.",
      `Résous l'équation $X^2 - ${tr}X + ${det} = 0$.`,
      `$\\chi_A(X) = X^2 - ${tr}X + ${det} = (X - ${l1})(X - ${l2})$. Les valeurs propres sont donc ${l1}$ et ${l2}$. Comme elles sont distinctes, la matrice est diagonalisable.`
    );
  },

  generateL2_PRE(tier) {
    return this.makeMcq(
      'L2-PRE', tier, "Inégalité de Cauchy-Schwarz",
      "Énoncer l'inégalité de Cauchy-Schwarz et son cas d'égalité",
      "Dans un espace préhilbertien réel $(E, \\langle \\cdot, \\cdot \\rangle)$, quelle est l'inégalité de Cauchy-Schwarz et sa condition d'égalité ?",
      "$|\\langle x, y \\rangle| \\le \\|x\\| \\|y\\|$, avec égalité ssi $(x, y)$ est liée",
      [
        "$|\\langle x, y \\rangle| \\ge \\|x\\| \\|y\\|$, avec égalité ssi $x \\perp y$",
        "$\\langle x, y \\rangle^2 \\le \\|x\\|^2 - \\|y\\|^2$",
        "$\\|x + y\\| \\le |\\langle x, y \\rangle|$"
      ],
      "Le produit scalaire est majoré par le produit des normes.",
      "L'égalité correspond à la colinéarité des deux vecteurs.",
      "L'inégalité fondamentale de Cauchy-Schwarz énonce que $|\\langle x, y \\rangle| \\le \\|x\\| \\|y\\|$, avec égalité si et seulement si $x$ et $y$ sont colinéaires (famille liée)."
    );
  },

  generateL2_SER(tier) {
    const a = this.randChoice([2, 3, 4]);
    return this.makeMcq(
      'L2-SER', tier, "Séries numériques et Règle de d'Alembert",
      "Déterminer la nature d'une série par le critère de d'Alembert",
      `Quelle est la nature de la série numérique $\\sum_{n=1}^\\infty \\frac{${a}^n}{n!}$ ?`,
      "Convergente, car $\\lim_{n \\to \\infty} \\frac{u_{n+1}}{u_n} = 0 < 1$",
      [
        "Divergente grossièrement",
        "Divergente par comparaison aux séries de Riemann",
        "Semi-convergente"
      ],
      "Calcule le rapport $\\frac{u_{n+1}}{u_n}$ avec $u_n = \\frac{a^n}{n!}$.",
      "Rappelle-toi que $(n+1)! = (n+1) n!$.",
      `$\\frac{u_{n+1}}{u_n} = \\frac{${a}^{n+1}}{(n+1)!} \\times \\frac{n!}{${a}^n} = \\frac{${a}}{n+1} \\xrightarrow[n \\to \\infty]{} 0$. Comme la limite est strictement inférieure à 1, la série converge (vers $e^{${a}} - 1$).`
    );
  },

  generateL2_CAL(tier) {
    const a = this.randInt(2, 4);
    const b = this.randInt(2, 5);
    return this.makeMcq(
      'L2-CAL', tier, "Théorème de Schwarz et dérivées partielles croisées",
      "Appliquer le théorème de Schwarz aux fonctions de classe C2",
      `Pour $f(x, y) = x^${a} y^${b}$, que vaut $\\frac{\\partial^2 f}{\\partial x \\partial y} - \\frac{\\partial^2 f}{\\partial y \\partial x}$ ?`,
      "$0$, car $f$ est de classe $\\mathcal{C}^2$",
      [`$${a * b}$`, `$x y$`, "Indéfini sans point précis"],
      "Vérifie la régularité de la fonction polynomiale $f$.",
      "Théorème de Schwarz : pour une fonction $\\mathcal{C}^2$, l'ordre des dérivations n'importe pas.",
      `La fonction polynomiale $f$ est de classe $\\mathcal{C}^\\infty$ sur $\\mathbb{R}^2$. D'après le Théorème de Schwarz, les dérivées partielles croisées sont égales, donc leur différence vaut 0.`
    );
  },

  generateL2_DET(tier) {
    const n = this.randInt(3, 5);
    const k = this.randInt(2, 4);
    return this.makeMcq(
      'L2-DET', tier, "Déterminant et dilatation d'une matrice nxn",
      "Calculer le déterminant d'une matrice multipliée par un scalaire",
      `Soit $A \\in \\mathcal{M}_{${n}}(\\mathbb{R})$ avec $\\det(A) = 3$. Que vaut $\\det(${k} A)$ ?`,
      `$\\det(${k} A) = ${Math.pow(k, n) * 3}$`,
      [
        `$\\det(${k} A) = ${k * 3}$`,
        `$\\det(${k} A) = ${Math.pow(k, n)}$`,
        `$\\det(${k} A) = 3$`
      ],
      "Le déterminant est une forme $n$-linéaire par rapport aux colonnes.",
      `$\\det(\\lambda A) = \\lambda^n \\det(A)$ pour une matrice d'ordre $n$.`,
      `En dimension ${n}$, chaque ligne (ou colonne) est multipliée par ${k}$, donc $\\det(${k} A) = ${k}^{${n}} \\det(A) = ${Math.pow(k, n)} \\times 3 = ${Math.pow(k, n) * 3}$.`
    );
  },

  generateL2_RED2(tier) {
    return this.makeMcq(
      'L2-RED2', tier, "Théorème de Cayley-Hamilton et polynôme minimal",
      "Caractériser le polynôme annulateur",
      "Que stipule le Théorème de Cayley-Hamilton pour toute matrice carrée $A \\in \\mathcal{M}_n(\\mathbb{K})$ de polynôme caractéristique $\\chi_A(X)$ ?",
      "$\\chi_A(A) = 0$ (toute matrice carrée annule son polynôme caractéristique)",
      [
        "$\\chi_A(A) = \\text{Id}_n$",
        "$\\chi_A(X)$ est toujours irréductible",
        "Le polynôme minimal est égal à $\\chi_A(X)^2$"
      ],
      "Une matrice annule son propre polynôme caractéristique.",
      "Le polynôme minimal $\\mu_A(X)$ divise $\\chi_A(X)$.",
      "Le Théorème de Cayley-Hamilton établit que $\\chi_A(A) = 0_{\\mathcal{M}_n}$. En particulier, le polynôme minimal $\\mu_A$ divise le polynôme caractéristique $\\chi_A$."
    );
  },

  generateL2_DUA(tier) {
    return this.makeMcq(
      'L2-DUA', tier, "Base duale et coordonnées",
      "Définir la base duale associée à une base",
      "Soit $\\mathcal{B} = (e_1, \\dots, e_n)$ une base de $E$. Quelle est la définition de la base duale $\\mathcal{B}^* = (e_1^*, \\dots, e_n^*)$ de $E^*$ ?",
      "$e_i^*(e_j) = \\delta_{ij}$ (symbole de Kronecker)",
      [
        "$e_i^*(e_j) = 1$ pour tout $i, j$",
        "$e_i^*(e_j) = e_i \\cdot e_j$",
        "$e_i^* = e_i^{-1}$"
      ],
      "Chaque forme $e_i^*$ vaut 1 sur $e_i$ et 0 sur les autres vecteurs de base.",
      "$\\delta_{ij} = 1$ si $i=j$, 0 sinon.",
      "Par définition de la base duale, les formes coordonnées vérifient $e_i^*(e_j) = 1$ si $i = j$ et $0$ si $i \\neq j$."
    );
  },

  generateL2_SYM(tier) {
    return this.makeMcq(
      'L2-SYM', tier, "Théorème Spectral pour les matrices symétriques réelles",
      "Énoncer les propriétés spectrales des matrices symétriques réelles",
      "Que garantit le Théorème Spectral pour toute matrice symétrique réelle $S \\in \\mathcal{S}_n(\\mathbb{R})$ ?",
      "Toutes ses valeurs propres sont réelles et elle est diagonalisable dans une base orthonormée",
      [
        "Elle admet au moins une valeur propre complexe non réelle",
        "Elle est inversible",
        "Son déterminant est toujours strictement positif"
      ],
      "Les sous-espaces propres d'une matrice symétrique réelle sont orthogonaux deux à deux.",
      "Il existe une matrice orthogonale $P \\in O_n(\\mathbb{R})$ telle que $S = P D \\,{}^t P$.",
      "Le Théorème Spectral affirme que toute matrice symétrique réelle possède un spectre entièrement réel et admet une décomposition orthogonale $S = P D \\,{}^t P$ avec $P$ orthogonale."
    );
  },

  generateL2_RIE(tier) {
    const alpha = this.randChoice([1, 2, 0.5, 3]);
    const isConv = alpha > 1;
    return this.makeMcq(
      'L2-RIE', tier, "Intégrales de Riemann impropres",
      "Tester la convergence de l'intégrale de Riemann sur [1, +infty[",
      `Quelle est la nature de l'intégrale impropre $\\int_1^{+\\infty} \\frac{1}{t^{${alpha}}} \\, dt$ ?`,
      isConv ? `Convergente, car $\\alpha = ${alpha} > 1$` : `Divergente, car $\\alpha = ${alpha} \\le 1$`,
      isConv ? [
        "Divergente vers $+\\infty$",
        "Semi-convergente",
        "Convergente uniquement si $\\alpha \\ge 2$"
      ] : [
        "Convergente vers $\\pi$",
        "Convergente car la fonction tend vers 0",
        "Semi-convergente"
      ],
      "Règle des intégrales de Riemann : $\\int_1^\\infty \\frac{1}{t^\\alpha} dt$ converge ssi $\\alpha > 1$.",
      `Ici $\\alpha = ${alpha}$. Compare à 1.`,
      `D'après le critère de Riemann à l'infini, l'intégrale converge si et seulement si $\\alpha > 1$. Comme $\\alpha = ${alpha}$, l'intégrale est ${isConv ? 'convergente' : 'divergente'}.`
    );
  },

  generateL2_ING(tier) {
    return this.makeMcq(
      'L2-ING', tier, "Dérivation sous le signe intégral (Règle de Leibniz)",
      "Appliquer les hypothèses de dérivation d'intégrale à paramètre",
      "Pour dériver une intégrale à paramètre $F(x) = \\int_a^b f(x, t) dt$ par rapport à $x$, quelle hypothèse majeure assure que $F'(x) = \\int_a^b \\frac{\\partial f}{\\partial x}(x, t) dt$ sur un intervalle non borné ?",
      "L'hypothèse de domination : $\\left|\\frac{\\partial f}{\\partial x}(x, t)\\right| \\le g(t)$ avec $g$ intégrable",
      [
        "La stricte positivité de $f(x, t)$",
        "Le caractère polynomial de $f$",
        "La convergence uniforme de $f$ vers 0"
      ],
      "Le théorème de dérivation sous l'intégrale requiert une fonction chapeau intégrable indépendante de $x$.",
      "C'est l'analogue continu du Théorème de Convergence Dominée.",
      "Le théorème de Leibniz sur un intervalle quelconque nécessite que $\\frac{\\partial f}{\\partial x}$ soit dominée par une fonction $g(t) \\in L^1$ indépendante de $x$ pour justifier l'interversion dérivation / intégration."
    );
  },

  generateL2_EDO(tier) {
    const a = this.randInt(2, 5);
    return this.makeMcq(
      'L2-EDO', tier, "Équation différentielle linéaire du premier ordre",
      "Résoudre une EDO linéaire homogène $y' + a y = 0$",
      `Quelles sont les solutions réelles de l'équation différentielle $y'(t) + ${a} y(t) = 0$ ?`,
      `$y(t) = C e^{-${a} t}$ avec $C \\in \\mathbb{R}$`,
      [
        `$y(t) = C e^{${a} t}$`,
        `$y(t) = -${a} t + C$`,
        `$y(t) = C \\cos(${a} t)$`
      ],
      "La solution d'une équation $y' + a y = 0$ est de la forme $C e^{-A(t)}$ où $A$ est une primitive de $a$.",
      "Une primitive de la constante a est at.",
      `L'équation caractéristique est $r + ${a} = 0 \\implies r = -${a}$. Les solutions sur $\\mathbb{R}$ sont de la forme $y(t) = C e^{-${a} t}$.`
    );
  },

  generateL2_PAR(tier) {
    return this.makeMcq(
      'L2-PAR', tier, "Séries entières et rayon de convergence",
      "Calculer le rayon de convergence de la série géométrique",
      "Quel est le rayon de convergence $R$ de la série entière $\\sum_{n=0}^\\infty z^n$ ?",
      "$R = 1$",
      ["$R = +\\infty$", "$R = 0$", "$R = 2$"],
      "La série géométrique converge si et seulement si $|z| < 1$.",
      "Règle de d'Alembert : $\\lim |a_{n+1}/a_n| = 1$.",
      "La série géométrique $\\sum z^n$ converge absolument pour $|z| < 1$ et diverge grossièrement pour $|z| \\ge 1$. Son rayon de convergence est donc $R = 1$."
    );
  },

  generateL2_MUL(tier) {
    const a = this.randInt(1, 3);
    const b = this.randInt(1, 4);
    const res = a * b;
    return this.makeMcq(
      'L2-MUL', tier, "Intégrale double sur un rectangle et Théorème de Fubini",
      "Calculer une intégrale double à variables séparables",
      `Calculer l'intégrale double $I = \\iint_{[0, ${a}] \\times [0, ${b}]} 1 \\, dx dy$.`,
      `$I = ${res}$ (aire du rectangle)`,
      [`$I = ${a + b}$`, `$I = ${2 * (a + b)}$`, `$I = ${res / 2}$`],
      "Par le théorème de Fubini, $I = \\left(\\int_0^a dx\\right) \\times \\left(\\int_0^b dy\\right)$.",
      "L'intégrale de la constante 1 sur un domaine plan donne l'aire du domaine.",
      `$I = \\int_0^{${a}} dx \\times \\int_0^{${b}} dy = ${a} \\times ${b} = ${res}$.`
    );
  },

  generateL2_CRB(tier) {
    return this.makeMcq(
      'L2-CRB', tier, "Vecteur tangent et abscisse curviligne",
      "Relier vecteur tangent et abscisse curviligne",
      "Pour une courbe paramétrée $\\gamma(t)$ de classe $\\mathcal{C}^1$ régulière, comment s'exprime la vitesse scalaire $\\frac{ds}{dt}$ par rapport au vecteur vitesse $\\gamma'(t)$ ?",
      "$\\frac{ds}{dt} = \\|\\gamma'(t)\\|$",
      [
        "$\\frac{ds}{dt} = \\gamma'(t) \\cdot \\gamma''(t)$",
        "$\\frac{ds}{dt} = 1$",
        "$\\frac{ds}{dt} = \\det(\\gamma'(t), \\gamma''(t))$"
      ],
      "La vitesse scalaire est la norme euclidienne du vecteur dérivée.",
      "L'abscisse curviligne est définie par $s(t) = \\int_{t_0}^t \\|\\gamma'(u)\\| du$.",
      "Par définition de l'abscisse curviligne, $\\frac{ds}{dt} = \\|\\gamma'(t)\\|$, et le vecteur tangent unitaire est $\\vec{T} = \\frac{\\gamma'(t)}{\\|\\gamma'(t)\\|}$."
    );
  },

  generateL2_PRB(tier) {
    const p = this.randChoice([0.2, 0.3, 0.4, 0.5]);
    const n = this.randInt(5, 10);
    const exp = Math.round(n * p * 10) / 10;
    return this.makeMcq(
      'L2-PRB', tier, "Espérance d'une loi binomiale",
      "Calculer l'espérance mathématique d'une variable binomiale",
      `Soit $X \\sim \\mathcal{B}(${n}, ${p})$. Quelle est l'espérance mathématique $\\mathbb{E}[X]$ ?`,
      `$\\mathbb{E}[X] = ${exp}$`,
      [`$\\mathbb{E}[X] = ${n}$`, `$\\mathbb{E}[X] = ${p}$`, `$\\mathbb{E}[X] = ${Math.round(n * p * (1 - p) * 10) / 10}$`],
      "Pour une loi binomiale $\\mathcal{B}(n, p)$, l'espérance vaut $n \\times p$.",
      `Calcul : $n \\times p = ${n} \\times ${p}$.`,
      `D'après la formule de l'espérance d'une loi binomiale, $\\mathbb{E}[X] = n p = ${n} \\times ${p} = ${exp}$.`
    );
  },

  // =========================================================================
  // IMPLÉMENTATION DES GÉNÉRATEURS L3
  // =========================================================================

  generateL3_GRP1(tier) {
    const cardG = this.randChoice([12, 18, 20, 24, 30]);
    const cardH = this.randChoice([2, 3, 4, 6]);
    if (cardG % cardH !== 0) return this.generateL3_GRP1(tier);
    const index = cardG / cardH;
    return this.makeMcq(
      'L3-GRP1', tier, "Théorème de Lagrange pour les groupes finis",
      "Relier l'ordre d'un groupe, l'ordre d'un sous-groupe et son indice",
      `Soit $G$ un groupe fini d'ordre $|G| = ${cardG}$ et $H \\le G$ un sous-groupe d'ordre $|H| = ${cardH}$. Quel est l'indice $[G : H]$ de $H$ dans $G$ ?`,
      `$[G : H] = ${index}$`,
      [`$[G : H] = ${cardG - cardH}$`, `$[G : H] = ${cardH}$`, `$[G : H] = ${cardG}$`],
      "Théorème de Lagrange : $|G| = |H| \\times [G : H]$.",
      `Divise l'ordre du groupe par l'ordre du sous-groupe : ${cardG} / ${cardH}.`,
      `D'après le Théorème de Lagrange, pour tout sous-groupe $H$ d'un groupe fini $G$, on a $|G| = |H| \\times [G : H]$, d'où $[G : H] = \\frac{|G|}{|H|} = \\frac{${cardG}}{${cardH}} = ${index}$.`
    );
  },

  generateL3_MET(tier) {
    return this.makeMcq(
      'L3-MET', tier, "Topologie des espaces métriques et caractérisation de la continuité",
      "Caractériser globalement une application continue par les ouverts",
      "Dans les espaces métriques, quelle est la caractérisation topologique globale d'une application continue $f : E \\to F$ ?",
      "L'image réciproque de tout ouvert de $F$ est un ouvert de $E$",
      [
        "L'image directe de tout ouvert de $E$ est un ouvert de $F$",
        "L'image de toute boule est une boule",
        "Pour tout fermé $A$ de $E$, $f(A)$ est fermé"
      ],
      "Pense à la définition par préimage : $U$ ouvert $\\implies f^{-1}(U)$ ouvert.",
      "L'image directe d'un ouvert n'est pas forcément un ouvert.",
      "Une application $f$ est continue si et seulement si pour tout ouvert $V$ de $F$, son image réciproque $f^{-1}(V)$ est un ouvert de $E$."
    );
  },

  generateL3_CMP(tier) {
    return this.makeMcq(
      'L3-CMP', tier, "Théorème de Heine-Borel en dimension finie",
      "Caractériser la compacité dans $\\mathbb{R}^n$",
      "Dans $\\mathbb{R}^n$ muni de sa norme euclidienne usuelle, quelle condition nécessaire et suffisante caractérise les parties compactes ?",
      "Être fermée et bornée",
      [
        "Être ouverte et bornée",
        "Être simplement connexe",
        "Être convexe"
      ],
      "Théorème de Heine-Borel-Lebesgue en dimension finie.",
      "Attention : ce résultat est faux en dimension infinie (Théorème de Riesz).",
      "D'après le théorème de Heine-Borel, dans $\\mathbb{R}^n$ (et dans tout espace vectoriel normé de dimension finie), une partie est compacte si et seulement si elle est fermée et bornée."
    );
  },

  generateL3_MES(tier) {
    return this.makeMcq(
      'L3-MES', tier, "Théorème de Convergence Dominée de Lebesgue",
      "Énoncer les hypothèses du Théorème de Convergence Dominée",
      "Quelles sont les conditions nécessaires pour appliquer le Théorème de Convergence Dominée (TCD) à une suite $(f_n)$ convergeant simplement vers $f$ presque partout ?",
      "L'existence d'une fonction intégrable $g \\in L^1$ telle que $|f_n| \\le g$ presque partout pour tout $n$",
      [
        "La monotonie de la suite $(f_n)$",
        "La convergence uniforme de $(f_n)$ sur tout compact",
        "La positivité stricte de $f$"
      ],
      "Le TCD exige une domination indépendante de $n$ par une fonction intégrable.",
      "Si la suite est croissante positive sans domination, c'est le théorème de Beppo Levi.",
      "Le Théorème de Convergence Dominée assure que si $f_n \\to f$ p.p. et qu'il existe $g \\in L^1(\\mu)$ telle que $|f_n| \\le g$ p.p., alors $f \\in L^1$ et $\\lim \\int f_n d\\mu = \\int f d\\mu$."
    );
  },

  generateL3_GRP2(tier) {
    const cardG = this.randChoice([24, 36, 48, 60]);
    const cardStab = this.randChoice([2, 3, 4, 6]);
    const cardOrb = cardG / cardStab;
    return this.makeMcq(
      'L3-GRP2', tier, "Théorème Orbite-Stabilisateur",
      "Calculer le cardinal d'une orbite à partir de l'ordre du groupe et du stabilisateur",
      `Soit un groupe fini $G$ d'ordre $|G| = ${cardG}$ agissant sur un ensemble $X$. Pour un point $x \\in X$, son stabilisateur est d'ordre $|G_x| = ${cardStab}$. Quel est le cardinal de l'orbite $\\mathcal{O}_x = G \\cdot x$ ?`,
      `$|\\mathcal{O}_x| = ${cardOrb}$`,
      [`$|\\mathcal{O}_x| = ${cardStab}$`, `$|\\mathcal{O}_x| = ${cardG - cardStab}$`, `$|\\mathcal{O}_x| = 1$`],
      "Théorème Orbite-Stabilisateur : $|\mathcal{O}_x| = [G : G_x] = |G| / |G_x|$.",
      `Divise $|G|$ par $|G_x|$ : ${cardG} / ${cardStab}.`,
      `D'après le Théorème fondamental Orbite-Stabilisateur, le cardinal de l'orbite est égal à l'indice du stabilisateur : $|\\mathcal{O}_x| = \\frac{|G|}{|G_x|} = \\frac{${cardG}}{${cardStab}} = ${cardOrb}$.`
    );
  },

  generateL3_ANN(tier) {
    return this.makeMcq(
      'L3-ANN', tier, "Idéaux premiers vs idéaux maximaux",
      "Caractériser les idéaux par la nature du quotient",
      "Dans un anneau commutatif unitaire $A$, à quelle condition sur le quotient $A/M$ un idéal propre $M$ est-il maximal ?",
      "$A/M$ est un corps",
      [
        "$A/M$ est un anneau intègre sans être un corps",
        "$A/M = \\{0\\}$",
        "$A/M$ est principal"
      ],
      "Un idéal est premier ssi le quotient est intègre ; il est maximal ssi le quotient est un corps.",
      "Tout corps est intègre, donc tout idéal maximal est premier.",
      "Dans un anneau commutatif unitaire, un idéal $M$ est maximal si et seulement si l'anneau quotient $A/M$ est un corps."
    );
  },

  generateL3_BAN(tier) {
    return this.makeMcq(
      'L3-BAN', tier, "Théorème du point fixe de Banach-Picard",
      "Identifier les hypothèses du théorème de point fixe",
      "Quelles sont les hypothèses du Théorème du Point Fixe de Banach-Picard pour une application $f : X \\to X$ ?",
      "$X$ est un espace métrique complet non vide et $f$ est strictement contractante",
      [
        "$X$ est compact et $f$ est dérivable",
        "$X$ est un espace vectoriel normé de dimension finie et $f$ est linéaire",
        "$X$ est connexe et $f$ est bornée"
      ],
      "L'espace doit être complet pour assurer la convergence de la suite récurrente.",
      "L'application doit être $k$-lipschitzienne avec $k < 1$.",
      "Le Théorème de Picard assure l'existence et l'unicité du point fixe dès lors que $(X, d)$ est complet et que $f$ est une contraction stricte ($d(f(x), f(y)) \\le k d(x, y)$ avec $k \\in [0, 1[$)."
    );
  },

  generateL3_SDF(tier) {
    return this.makeMcq(
      'L3-SDF', tier, "Hiérarchie des modes de convergence des séries de fonctions",
      "Distinguer convergence normale, uniforme et simple",
      "Pour une série de fonctions $\\sum u_n$, quelle est la hiérarchie correcte entre les modes de convergence ?",
      "Convergence normale $\\implies$ Convergence uniforme $\\implies$ Convergence simple",
      [
        "Convergence simple $\\implies$ Convergence uniforme $\\implies$ Convergence normale",
        "Convergence uniforme $\\implies$ Convergence normale $\\implies$ Convergence simple",
        "Convergence normale $\\iff$ Convergence uniforme"
      ],
      "La convergence normale ($\sum \\|u_n\\|_\\infty < \\infty$) est le critère le plus fort.",
      "La réciproque est fausse en général (ex. séries alternées).",
      "La convergence normale entraîne la convergence uniforme (par le critère de Cauchy uniforme), qui elle-même entraîne trivialement la convergence simple."
    );
  },

  generateL3_SER(tier) {
    const a = this.randInt(2, 6);
    return this.makeMcq(
      'L3-SER', tier, "Rayon de convergence d'une série entière",
      "Calculer le rayon de convergence par la règle de d'Alembert",
      `Quel est le rayon de convergence de la série entière $\\sum_{n=0}^\\infty (${a})^n z^n$ ?`,
      `$R = \\frac{1}{${a}}$`,
      [`$R = ${a}$`, "$R = +\\infty$", "$R = 1$"],
      "Applique la règle de d'Alembert : $\\lim |a_{n+1}/a_n| = a$, donc $R = 1/a$.",
      `$|${a} z|^n < 1 \\iff |z| < 1/${a}$.`,
      `La série est une série géométrique en (${a}z). Elle converge si et seulement si $|${a} z| < 1 \\iff |z| < \\frac{1}{${a}}$. Le rayon de convergence est donc $R = 1/${a}$.`
    );
  },

  generateL3_FOU(tier) {
    return this.makeMcq(
      'L3-FOU', tier, "Théorème de Dirichlet pour les séries de Fourier",
      "Identifier la limite ponctuelle de la série de Fourier",
      "Soit $f$ une fonction $2\\pi$-périodique de classe $\\mathcal{C}^1$ par morceaux. Vers quelle valeur converge sa série de Fourier en tout point $t$ selon le Théorème de Dirichlet ?",
      "$\\frac{f(t^+) + f(t^-)}{2}$ (la demi-somme des limites à gauche et à droite)",
      [
        "$f(t)$ obligatoirement en tout point",
        "$0$",
        "$\\frac{1}{2\\pi} \\int_{-\\pi}^\\pi f(u) du$"
      ],
      "En un point de discontinuité de première espèce, la somme converge vers le milieu du saut.",
      "Si $f$ est continue en $t$, cette demi-somme vaut exactement $f(t)$.",
      "D'après le Théorème de Dirichlet, pour toute fonction périodique régulière par morceaux, la série de Fourier converge ponctuellement vers la valeur moyenne du saut : $\\frac{f(t^+) + f(t^-)}{2}$."
    );
  },

  generateL3_GPR(tier) {
    return this.makeMcq(
      'L3-GPR', tier, "Birapport et division harmonique",
      "Définir la division harmonique de quatre points",
      "Que vaut le birapport $[A, B, C, D]$ lorsque les quatre points $(A, B, C, D)$ forment une division harmonique ?",
      "$[A, B, C, D] = -1$",
      ["$[A, B, C, D] = 1$", "$[A, B, C, D] = 0$", "$[A, B, C, D] = 2$"],
      "La division harmonique correspond à un birapport égal à $-1$.",
      "Noté $(A, B ; C, D) = -1$.",
      "Par définition, quatre points alignés sont en division harmonique si et seulement si leur birapport vaut $-1$."
    );
  },

  generateL3_GDF(tier) {
    return this.makeMcq(
      'L3-GDF', tier, "Espace tangent à une sous-variété implicite",
      "Déterminer l'espace tangent par le noyau de la différentielle",
      "Pour une sous-variété $M = f^{-1}(\\{0\\}) \\subset \\mathbb{R}^n$ définie par une submersion $f : \\mathbb{R}^n \\to \\mathbb{R}^k$, comment s'exprime l'espace tangent $T_x M$ en tout point $x \\in M$ ?",
      "$T_x M = \\text{Ker}(df(x))$",
      [
        "$T_x M = \\text{Im}(df(x))$",
        "$T_x M = (\\text{Ker}(df(x)))^\\perp$",
        "$T_x M = \\nabla f(x)$"
      ],
      "Les vecteurs tangents annulent la dérivée le long des contraintes.",
      "La codimension est $k$, donc l'espace tangent est de dimension $n - k$.",
      "D'après le théorème des fonctions implicites, l'espace tangent à une sous-variété définie par une submersion $f$ est exactement le noyau de sa différentielle : $T_x M = \\text{Ker}(df(x))$."
    );
  },

  generateL3_NUM(tier) {
    return this.makeMcq(
      'L3-NUM', tier, "Méthode de Newton-Raphson et ordre de convergence",
      "Identifier l'ordre de convergence de la méthode de Newton",
      "Quel est l'ordre de convergence locale de la méthode de Newton pour une racine simple $r$ d'une fonction de classe $\\mathcal{C}^2$ ?",
      "Ordre 2 (convergence quadratique : $|x_{k+1} - r| \\le C |x_k - r|^2$)",
      [
        "Ordre 1 (convergence linéaire)",
        "Ordre 3 (convergence cubique)",
        "Convergence exponentielle sans ordre fini"
      ],
      "Le nombre de décimales exactes double approximativement à chaque itération.",
      "Si la racine était multiple, l'ordre chuterait à 1.",
      "Pour une racine simple d'une fonction $\\mathcal{C}^2$, la dérivée en $r$ est non nulle et la méthode de Newton converge de façon quadratique (ordre 2)."
    );
  },

  generateL3_PROG(tier) {
    return this.makeMcq(
      'L3-PROG', tier, "Théorème Fondamental de la Programmation Linéaire",
      "Localiser les solutions optimales d'un programme linéaire",
      "Que garantit le Théorème Fondamental de la Programmation Linéaire pour un problème sous forme standard $\\max {}^t c x$ sous $Ax = b, x \\ge 0$ admettant un optimum ?",
      "L'optimum est atteint en au moins un point extrême (sommet ou solution de base admissible)",
      [
        "L'optimum est toujours strictement à l'intérieur du polyèdre",
        "L'ensemble des solutions optimales est obligatoirement un singleton",
        "Le problème dual a une valeur strictement supérieure"
      ],
      "La fonction objectif linéaire atteint son maximum sur la frontière, plus précisément sur un sommet.",
      "C'est ce qui justifie que l'algorithme du simplexe explore uniquement les sommets.",
      "Une fonctionnelle linéaire sur un polyèdre convexe fermé borné atteint son extremum sur au moins un sommet (solution de base admissible)."
    );
  },

  generateL3_PRC(tier) {
    return this.makeMcq(
      'L3-PRC', tier, "Théorème Central Limite (TCL)",
      "Formuler la convergence en loi du Théorème Central Limite",
      "Soit $(X_n)$ une suite de v.a. i.i.d. d'espérance $\\mu$ et de variance $\\sigma^2 > 0$. Quelle est la loi limite de la variable centrée réduite $Z_n = \\sqrt{n}\\left(\\frac{\\bar{X}_n - \\mu}{\\sigma}\\right)$ ?",
      "La loi normale standard $\\mathcal{N}(0, 1)$ en loi",
      [
        "La loi uniforme $\\mathcal{U}([0, 1])$",
        "La loi de Cauchy",
        "Une constante certaine $\\mu$"
      ],
      "La somme normalisée de variables indépendantes converge vers la courbe en cloche de Gauss.",
      "Convergence en loi : pour tout $t$, $\\mathbb{P}(Z_n \\le t) \\to \\Phi(t)$.",
      "Le Théorème Central Limite de Lindeberg-Lévy affirme que $Z_n \\xrightarrow{\\mathcal{L}} \\mathcal{N}(0, 1)$ lorsque $n \\to \\infty$."
    );
  },

  // =========================================================================
  // IMPLÉMENTATION DES GÉNÉRATEURS LYCÉE (2NDE, 1ÈRE, TALE)
  // =========================================================================

  generateLycee2nde(chapterId, tier) {
    if (typeof window !== 'undefined' && window.MATHS_EXERCISES && window.MATHS_EXERCISES[chapterId] && window.MATHS_EXERCISES[chapterId].length) {
      const exos = window.MATHS_EXERCISES[chapterId];
      const matchTier = exos.filter(e => e.tier === tier);
      const pool = matchTier.length ? matchTier : exos;
      return this.mutateExercise(this.randChoice(pool), tier);
    }
    const a = this.randInt(2, 6);
    const b = this.randInt(-5, 5);
    return this.makeMcq(
      chapterId, tier, "Fonctions affines et résolution d'équations",
      "Déterminer les propriétés d'une fonction affine",
      `Soit la fonction affine $f(x) = ${a}x ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}$. Quelle est la racine de $f$ (valeur où $f(x) = 0$) ?`,
      `$x = ${-b / a === Math.round(-b / a) ? -b / a : -b + '/' + a}$`,
      [`$x = ${b / a === Math.round(b / a) ? b / a : b + '/' + a}$`, `$x = ${a}$`, `$x = ${b}$`],
      "Résous l'équation du premier degré : ax + b = 0.",
      `$${a}x = ${-b} \\implies x = ${-b}/${a}$.`,
      `$${a}x ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)} = 0 \\iff ${a}x = ${-b} \\iff x = ${-b / a === Math.round(-b / a) ? -b / a : -b + '/' + a}$.`
    );
  },

  generateLycee1ere(chapterId, tier) {
    if (typeof window !== 'undefined' && window.MATHS_EXERCISES && window.MATHS_EXERCISES[chapterId] && window.MATHS_EXERCISES[chapterId].length) {
      const exos = window.MATHS_EXERCISES[chapterId];
      const matchTier = exos.filter(e => e.tier === tier);
      const pool = matchTier.length ? matchTier : exos;
      return this.mutateExercise(this.randChoice(pool), tier);
    }
    const a = 1;
    const x1 = this.randInt(-4, 4);
    const x2 = this.randInt(x1 + 1, 6);
    const b = -(x1 + x2);
    const c = x1 * x2;
    const delta = b * b - 4 * a * c;
    return this.makeMcq(
      chapterId, tier, "Discriminant et racines d'un trinôme du second degré",
      "Calculer $\\Delta$ et les racines réelles d'un polynôme de degré 2",
      `Résoudre dans $\\mathbb{R}$ l'équation du second degré : $x^2 ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}x ${c >= 0 ? '+ ' + c : '- ' + Math.abs(c)} = 0$.`,
      `$S = \\{${x1}, ${x2}\\}$ (car $\\Delta = ${delta} > 0$)`,
      [
        `$S = \\{${-x1}, ${-x2}\\}$`,
        `$S = \\emptyset$ (aucun $\\Delta > 0$)`,
        `$S = \\{${x1 + 1}, ${x2 - 1}\\}$`
      ],
      "Calcule le discriminant $\\Delta = b^2 - 4ac$.",
      "Les racines sont données par $x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$.",
      `$\\Delta = (${b})^2 - 4(1)(${c}) = ${b*b} - ${4*c} = ${delta} > 0$. Les deux racines distinctes sont $x_1 = ${x1}$ et $x_2 = ${x2}$.`
    );
  },

  generateLyceeTale(chapterId, tier) {
    if (typeof window !== 'undefined' && window.MATHS_EXERCISES && window.MATHS_EXERCISES[chapterId] && window.MATHS_EXERCISES[chapterId].length) {
      const exos = window.MATHS_EXERCISES[chapterId];
      const matchTier = exos.filter(e => e.tier === tier);
      const pool = matchTier.length ? matchTier : exos;
      return this.mutateExercise(this.randChoice(pool), tier);
    }
    const a = this.randInt(2, 5);
    return this.makeMcq(
      chapterId, tier, "Dérivée de la fonction exponentielle composée",
      "Calculer la dérivée de $e^{u(x)}$",
      `Déterminer la fonction dérivée de $f(x) = e^{${a}x^2 + 1}$ sur $\\mathbb{R}$.`,
      `$f'(x) = ${2 * a}x e^{${a}x^2 + 1}$`,
      [
        `$f'(x) = e^{${a}x^2 + 1}$`,
        `$f'(x) = ${a}x e^{${a}x^2 + 1}$`,
        `$f'(x) = ${2 * a}x e^{${2 * a}x}$`
      ],
      "Formule de dérivation d'une exponentielle composée : $(e^u)' = u' e^u$.",
      `Ici $u(x) = ${a}x^2 + 1$, donc $u'(x) = ${2 * a}x$.`,
      `D'après la formule $(e^u)' = u' e^u$ avec $u(x) = ${a}x^2 + 1$ et $u'(x) = ${2 * a}x$, on obtient $f'(x) = ${2 * a}x e^{${a}x^2 + 1}$.`
    );
  },

  /**
   * Mutateur universel pour tout exercice statique n'ayant pas de générateur dédié
   */
  mutateExercise(base, tier) {
    if (!base) return null;
    const exo = JSON.parse(JSON.stringify(base));

    // Si l'exercice possède des variantes enregistrées, en tirer une au sort
    if (exo.variants && Array.isArray(exo.variants) && exo.variants.length > 0) {
      const allChoices = [exo, ...exo.variants];
      const selected = this.randChoice(allChoices);
      Object.assign(exo, selected);
    }

    exo.id = `${exo.id || 'exo'}-dyn-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
    exo.tier = tier || exo.tier || 1;

    // Mélanger les choix pour les QCM
    if (exo.type === 'mcq' && Array.isArray(exo.options) && exo.options.length > 1) {
      const correctText = exo.answer || (exo.correctIndex !== undefined ? exo.options[exo.correctIndex] : exo.options[0]);
      const shuffled = this.shuffleArray(exo.options);
      exo.options = shuffled;
      exo.choices = shuffled;
      exo.correctIndex = shuffled.indexOf(correctText);
      exo.answer = correctText;
    }

    return exo;
  }
};
