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
      // Palier 2 : Injectivité d'une fonction
      const a = this.randChoice([2, 3, 4, 5]);
      const b = this.randChoice([1, 2, 3, 5]);
      const c = this.randChoice([1, 2]);
      const d = this.randChoice([1, 2, 3]);
      // det = -ad - bc != 0
      const expr = `f(x) = \\frac{${a}x + ${b}}{${c === 1 ? '' : c}x - ${d}}`;
      const domain = `\\mathbb{R} \\setminus \\{${d}${c > 1 ? '/' + c : ''}\\}`;
      return this.makeMcq(
        'L1-LOG', 2, "Injectivité d'une fonction homographique",
        "Appliquer formellement la définition de l'injectivité",
        `Soit $f : ${domain} \\to \\mathbb{R}$ définie par $${expr}$. L'application $f$ est-elle injective ?`,
        "Oui, car $\\forall x, x', f(x) = f(x') \\implies x = x'$",
        [
          "Non, car $f(0) = f(1)$",
          "Non, car le dénominateur s'annule",
          "Oui, car la fonction est bornée sur son domaine"
        ],
        "Pars de l'égalité $f(x) = f(x')$ et effectue le produit en croix.",
        "Vérifie si les termes en $x x'$ se simplifient.",
        `En posant $f(x) = f(x')$, le produit en croix donne $(${a}x + ${b})(${c}x' - ${d}) = (${a}x' + ${b})(${c}x - ${d})$. Les termes ${a*c}xx'$ s'annulent, ce qui conduit à $(${a*d + b*c})x = (${a*d + b*c})x'$, d'où $x = x'$. L'application est donc injective.`
      );
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
        `Tout entier admet un unique reste $r \\in \\{0, 1, \\dots, ${n-1}\\}$ modulo ${n}$. Il y a donc exactement $${n}$ classes d'équivalence disjointes, d'où $|\\mathbb{Z}/${n}\\mathbb{Z}| = ${n}$.`
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
      // Déterminant 2x2 et inversibilité
      const a = this.randInt(1, 5);
      const b = this.randInt(1, 4);
      const c = this.randInt(1, 4);
      const d = this.randInt(1, 6);
      const det = a * d - b * c;
      const isInv = det !== 0;
      return this.makeMcq(
        'L1-MAT', 1, "Déterminant 2x2 et condition d'inversibilité",
        "Calculer le déterminant d'une matrice 2x2 et tester son inversibilité",
        `Calculer le déterminant de la matrice $A = \\begin{pmatrix} ${a} & ${b} \\\\ ${c} & ${d} \\end{pmatrix}$. $A$ est-elle inversible ?`,
        `$\\det(A) = ${det}$, ${isInv ? 'inversible' : 'non inversible'}`,
        [
          `$\\det(A) = ${a * d + b * c}$, ${a * d + b * c !== 0 ? 'inversible' : 'non inversible'}`,
          `$\\det(A) = ${det + 2}$, inversible`,
          `$\\det(A) = ${-det}$, ${det === 0 ? 'inversible' : 'non inversible'}`
        ],
        "Formule du déterminant 2x2 : $\\det = ad - bc$.",
        "Une matrice carrée est inversible si et seulement si son déterminant est non nul.",
        `$\\det(A) = (${a})(${d}) - (${b})(${c}) = ${a * d} - ${b * c} = ${det}$. Comme $\\det(A) ${isInv ? '\\neq 0' : '= 0'}$, la matrice est ${isInv ? 'inversible' : 'non inversible'}.`
      );
    } else if (tier === 2) {
      // Produit matriciel 2x2
      const a1 = this.randInt(1, 3), b1 = this.randInt(0, 3);
      const c1 = this.randInt(0, 2), d1 = this.randInt(1, 3);
      const a2 = this.randInt(1, 3), b2 = this.randInt(0, 2);
      const c2 = this.randInt(0, 3), d2 = this.randInt(1, 2);

      const r11 = a1 * a2 + b1 * c2;
      const r12 = a1 * b2 + b1 * d2;
      const r21 = c1 * a2 + d1 * c2;
      const r22 = c1 * b2 + d1 * d2;

      return this.makeMcq(
        'L1-MAT', 2, "Produit matriciel 2x2",
        "Effectuer le produit ligne par colonne de matrices carrées",
        `Calculer le produit matriciel $AB$ où $A = \\begin{pmatrix} ${a1} & ${b1} \\\\ ${c1} & ${d1} \\end{pmatrix}$ et $B = \\begin{pmatrix} ${a2} & ${b2} \\\\ ${c2} & ${d2} \\end{pmatrix}$.`,
        `$\\begin{pmatrix} ${r11} & ${r12} \\\\ ${r21} & ${r22} \\end{pmatrix}$`,
        [
          `$\\begin{pmatrix} ${a1*a2} & ${b1*b2} \\\\ ${c1*c2} & ${d1*d2} \\end{pmatrix}$`,
          `$\\begin{pmatrix} ${r12} & ${r11} \\\\ ${r22} & ${r21} \\end{pmatrix}$`,
          `$\\begin{pmatrix} ${r11 + 1} & ${r12} \\\\ ${r21} & ${r22 - 1} \\end{pmatrix}$`
        ],
        "Règle ligne par colonne : le terme $c_{i,j}$ est le produit scalaire de la ligne $i$ de $A$ par la colonne $j$ de $B$.",
        "Attention : le produit matriciel n'est PAS le produit terme à terme !",
        `$c_{11} = ${a1}\\times${a2} + ${b1}\\times${c2} = ${r11}$, $c_{12} = ${a1}\\times${b2} + ${b1}\\times${d2} = ${r12}$, $c_{21} = ${c1}\\times${a2} + ${d1}\\times${c2} = ${r21}$, $c_{22} = ${c1}\\times${b2} + ${d1}\\times${d2} = ${r22}$.`
      );
    } else if (tier === 3) {
      // Trace et propriétés
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
      // Inverse par Gauss-Jordan
      const det = 1; // choisir matrice à déterminant 1
      const a = this.randChoice([2, 3]);
      const d = this.randChoice([2, 3]);
      const prod = a * d - 1; // bc = prod
      const b = prod;
      const c = 1;
      return this.makeMcq(
        'L1-MAT', 4, "Formule de la comatrice et inverse 2x2",
        "Calculer l'inverse explicite d'une matrice carrée 2x2",
        `Déterminer l'inverse de la matrice $A = \\begin{pmatrix} ${a} & ${b} \\\\ ${c} & ${d} \\end{pmatrix}$.`,
        `$A^{-1} = \\begin{pmatrix} ${d} & ${-b} \\\\ ${-c} & ${a} \\end{pmatrix}$`,
        [
          `$A^{-1} = \\begin{pmatrix} ${a} & ${-b} \\\\ ${-c} & ${d} \\end{pmatrix}$`,
          `$A^{-1} = \\begin{pmatrix} ${-d} & ${b} \\\\ ${c} & ${-a} \\end{pmatrix}$`,
          `$A^{-1} = \\begin{pmatrix} 1/${a} & 1/${b} \\\\ 1/${c} & 1/${d} \\end{pmatrix}$`
        ],
        "Pour une matrice 2x2, $A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$.",
        "Ici $\\det(A) = ad - bc = 1$.",
        `$\\det(A) = (${a})(${d}) - (${b})(${c}) = 1$. D'où $A^{-1} = \\frac{1}{1} \\begin{pmatrix} ${d} & ${-b} \\\\ ${-c} & ${a} \\end{pmatrix}$.`
      );
    }
  },

  generateL1_EV1(tier) {
    if (tier === 1) {
      // Sous-espace vectoriel
      const constant = this.randChoice([0, 1, -2, 3]);
      const isSev = constant === 0;
      const a = this.randInt(2, 5);
      const b = this.randInt(2, 4);
      return this.makeMcq(
        'L1-EV1', 1, "Caractérisation d'un sous-espace vectoriel (SEV)",
        "Vérifier si une partie contenant ou non le vecteur nul est un sous-espace vectoriel",
        `L'ensemble $F = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid ${a}x - ${b}y + z = ${constant}\\}$ est-il un sous-espace vectoriel de $\\mathbb{R}^3$ ?`,
        isSev ? "Oui, car c'est un hyperplan vectoriel ($0_{\\mathbb{R}^3} \\in F$ et stabilité par combinaison linéaire)" : "Non, car le vecteur nul $(0, 0, 0) \\notin F$",
        isSev ? [
          "Non, car il est de dimension 2",
          "Non, car il n'est pas borné",
          "Oui, uniquement pour $x, y, z > 0$"
        ] : [
          "Oui, car l'équation est linéaire",
          "Oui, car c'est un plan affine",
          "Non, car il contient une infinité de points"
        ],
        "Teste d'abord si le vecteur nul $(0, 0, 0)$ appartient à $F$.",
        `Évalue l'équation avec $x=0, y=0, z=0$ : ${a}(0) - ${b}(0) + 0 = 0 \\neq ${constant}$.`,
        isSev
          ? `Pour $x=y=z=0$, ${a}(0) - ${b}(0) + 0 = 0$, donc $0_{\\mathbb{R}^3} \\in F$. De plus, toute combinaison linéaire de solutions reste solution. $F$ est donc un SEV.`
          : `Le vecteur nul $(0, 0, 0)$ ne vérifie pas l'équation car $0 - 0 + 0 = 0 \\neq ${constant}$. $F$ ne contient pas $0_E$, ce n'est donc PAS un sous-espace vectoriel.`
      );
    } else if (tier === 2) {
      // Famille libre vs liée
      const k = this.randChoice([2, 3, -1]);
      const isLibe = this.randChoice([true, false]);
      const v1 = `(1, 0, 1)`;
      const v2 = `(0, 1, ${k})`;
      const v3 = isLibe ? `(1, 1, 0)` : `(1, 1, ${k + 1})`; // si lié : v3 = v1 + v2
      return this.makeMcq(
        'L1-EV1', 2, "Liberté d'une famille de vecteurs dans $\\mathbb{R}^3$",
        "Tester l'indépendance linéaire par échelonnement ou déterminant",
        `Dans $\\mathbb{R}^3$, la famille $\\mathcal{F} = \\{u = ${v1}, v = ${v2}, w = ${v3}\\}$ est-elle libre ou liée ?`,
        isLibe ? "Libre, car $\\det(u, v, w) \\neq 0$" : "Liée, car $w = u + v$",
        isLibe ? [
          "Liée, car ce sont 3 vecteurs",
          "Liée, car le déterminant vaut 0",
          "Ni libre ni liée"
        ] : [
          "Libre, car aucun vecteur n'est nul",
          "Libre, car la dimension est 3",
          "Génératrice sans être libre"
        ],
        "Forme la matrice des 3 vecteurs colonnes et calcule son déterminant.",
        "Si un vecteur est combinaison linéaire évidente des deux autres, la famille est liée.",
        isLibe
          ? `Le déterminant de la matrice des 3 vecteurs est non nul (valeur $\\neq 0$), donc les 3 vecteurs sont linéairement indépendants : la famille est libre.`
          : `On observe directement que $u + v = (1+0, 0+1, 1+${k}) = ${v3} = w$. Un vecteur est combinaison linéaire des deux autres, donc la famille est liée.`
      );
    } else if (tier === 3) {
      // Dimension d'un SEV
      const eqCount = this.randChoice([1, 2]);
      const dim = 3 - eqCount;
      return this.makeMcq(
        'L1-EV1', 3, "Dimension d'un sous-espace vectoriel défini par des équations",
        "Relier le nombre d'équations cartésiennes indépendantes à la dimension",
        eqCount === 1
          ? "Quelle est la dimension du sous-espace $F = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x + 2y - z = 0\\}$ ?"
          : "Quelle est la dimension du sous-espace $F = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x + y - z = 0 \\text{ et } x - y = 0\\}$ ?",
        `$\\dim(F) = ${dim}$`,
        [`$\\dim(F) = ${dim + 1}$`, `$\\dim(F) = ${dim === 1 ? 3 : 1}$`, "$\\dim(F) = 0$"],
        "Dans $\\mathbb{R}^n$, chaque équation cartésienne linéaire indépendante diminue la dimension de 1.",
        `Ici $n = 3$ et il y a ${eqCount} équation(s) indépendante(s).`,
        `D'après le théorème du rang appliqué aux formes linéaires, $\\dim(F) = 3 - ${eqCount} = ${dim}$.`
      );
    } else {
      // Formule de Grassmann
      const dimE = this.randInt(5, 7);
      const dimF = this.randInt(3, 4);
      const dimG = this.randInt(3, 4);
      const dimInter = this.randInt(1, 2);
      const dimSum = dimF + dimG - dimInter;
      return this.makeMcq(
        'L1-EV1', 4, "Formule de Grassmann",
        "Calculer la dimension d'une somme de sous-espaces",
        `Soient $F$ et $G$ deux sous-espaces vectoriels d'un espace $E$ avec $\\dim(F) = ${dimF}$, $\\dim(G) = ${dimG}$ et $\\dim(F \\cap G) = ${dimInter}$. Que vaut $\\dim(F + G)$ ?`,
        `$\\dim(F + G) = ${dimSum}$`,
        [
          `$\\dim(F + G) = ${dimF + dimG}$`,
          `$\\dim(F + G) = ${dimSum + 1}$`,
          `$\\dim(F + G) = ${Math.abs(dimF - dimG)}`
        ],
        "Formule de Grassmann : $\\dim(F + G) = \\dim(F) + \\dim(G) - \\dim(F \\cap G)$.",
        `Remplace par les valeurs numériques : ${dimF} + ${dimG} - ${dimInter}.`,
        `D'après la formule de Grassmann : $\\dim(F + G) = ${dimF} + ${dimG} - ${dimInter} = ${dimSum}$.`
      );
    }
  },

  generateL1_APP(tier) {
    if (tier === 1) {
      // Théorème du rang
      const dimE = this.randInt(4, 9);
      const dimKer = this.randInt(1, dimE - 2);
      const rg = dimE - dimKer;
      return this.makeMcq(
        'L1-APP', 1, "Théorème du rang pour une application linéaire",
        "Appliquer la relation $\\dim(E) = \\dim(\\ker f) + \\text{rg}(f)$",
        `Soit $f : E \\to F$ une application linéaire avec $\\dim(E) = ${dimE}$ et $\\dim(\\ker f) = ${dimKer}$. Que vaut le rang $\\text{rg}(f) = \\dim(\\text{Im} f)$ ?`,
        `$\\text{rg}(f) = ${rg}$`,
        [`$\\text{rg}(f) = ${dimE}$`, `$\\text{rg}(f) = ${rg + 1}$`, `$\\text{rg}(f) = ${dimKer}`],
        "Théorème du rang : la dimension de l'espace de départ $E$ est la somme de la dimension du noyau et du rang.",
        `$\\dim(E) = \\dim(\\ker f) + \\text{rg}(f) \\implies \\text{rg}(f) = ${dimE} - ${dimKer}$.`,
        `D'après le Théorème du Rang : $\\text{rg}(f) = \\dim(E) - \\dim(\\ker f) = ${dimE} - ${dimKer} = ${rg}$.`
      );
    } else if (tier === 2) {
      // Définition formelle de ker(f) et injectivité
      return this.makeMcq(
        'L1-APP', 2, "Définition formelle du Noyau et critère d'injectivité",
        "Caractériser le noyau $\\ker(f)$ et l'injectivité",
        "Pour une application linéaire $f \\in \\mathcal{L}(E, F)$, quelle est la définition ensembliste exacte du noyau $\\ker(f)$ et la condition nécessaire et suffisante pour que $f$ soit injective ?",
        "$\\ker(f) = \\{x \\in E \\mid f(x) = 0_F\\}$ et $f$ injective $\\iff \\ker(f) = \\{0_E\\}$",
        [
          "$\\ker(f) = \\{f(x) \\mid x \\in E\\}$ et $f$ injective $\\iff \\ker(f) = F$",
          "$\\ker(f) = \\{x \\in E \\mid f(x) = 0_F\\}$ et $f$ injective $\\iff \\ker(f) = \\emptyset$",
          "$\\ker(f) = \\{x \\in F \\mid f(x) = 0_E\\}$ et $f$ injective $\\iff \\text{rg}(f) = 0$"
        ],
        "Le noyau est l'ensemble des antécédents du vecteur nul de l'espace d'arrivée.",
        "Une application linéaire est injective si et seulement si son noyau est réduit au vecteur nul $\{0_E\}$.",
        "Par définition, $\\ker(f) = f^{-1}(\\{0_F\\}) = \\{x \\in E \\mid f(x) = 0_F\\}$. De plus, $f(x) = f(y) \\iff f(x - y) = 0_F \\iff x - y \\in \\ker(f)$, donc $f$ est injective $\\iff \\ker(f) = \\{0_E\\}$."
      );
    } else if (tier === 3) {
      // Matrice d'endomorphisme
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
        `$\\dim(\\mathbb{R}_{${deg}}[X]) = ${dimPoly}$, donc la matrice est carrée d'ordre ${dimPoly}$. Comme $D(X^k) = k X^{k-1}$, les éléments diagonaux sont tous nuls : elle est nilpotente et triangulaire supérieure stricte.`
      );
    } else {
      // Projecteur
      return this.makeMcq(
        'L1-APP', 4, "Caractérisation algébrique des projecteurs",
        "Identifier un projecteur par la relation $p^2 = p$ et la décomposition de l'espace",
        "Soit $p \\in \\mathcal{L}(E)$. Quelle relation algébrique caractérise le fait que $p$ est un projecteur, et quelle est la décomposition associée de $E$ ?",
        "$p^2 = p$ et $E = \\ker(p) \\oplus \\text{Im}(p)$",
        [
          "$p^2 = \\text{Id}_E$ et $E = \\ker(p) \\oplus \\text{Im}(p)$",
          "$p^2 = 0$ et $E = \\ker(p) + \\text{Im}(p)$",
          "$p^3 = p$ et $\\ker(p) = \\text{Im}(p)$"
        ],
        "Un projecteur vérifie $p \\circ p = p$ (idempotence).",
        "Pour tout $x \\in E$, $x = (x - p(x)) + p(x)$ avec $x - p(x) \\in \\ker(p)$ et $p(x) \\in \\text{Im}(p)$.",
        "Un endomorphisme est un projecteur ssi $p^2 = p$. On a alors immédiatement $E = \\ker(p) \\oplus \\text{Im}(p)$, la projection se faisant sur $\\text{Im}(p)$ parallèlement à $\\ker(p)$."
      );
    }
  },

  generateL1_CMP(tier) {
    if (tier === 1) {
      // Somme des racines n-ièmes de l'unité
      const n = this.randInt(3, 8);
      return this.makeMcq(
        'L1-CMP', 1, "Somme des racines n-ièmes de l'unité",
        "Calculer la somme des éléments du groupe $\\mathbb{U}_n$",
        `Pour $n = ${n}$, que vaut la somme des $${n}$ racines $${n}$-ièmes de l'unité : $S = \\sum_{k=0}^{${n-1}} e^{i \\frac{2k\\pi}{${n}}}$ ?`,
        "$0$",
        ["$1$", `$${n}$`, "$-1$"],
        "C'est la somme des termes d'une suite géométrique de raison $\\omega = e^{i 2\\pi / n} \\neq 1$.",
        "$\\sum_{k=0}^{n-1} \\omega^k = \\frac{1 - \\omega^n}{1 - \\omega}$.",
        `En posant $\\omega = e^{i \\frac{2\\pi}{${n}}}$, on a $\\omega \\neq 1$ et $\\omega^{${n}} = 1$. D'où $S = \\frac{1 - \\omega^{${n}}}{1 - \\omega} = \\frac{1 - 1}{1 - \\omega} = 0$.`
      );
    } else {
      // Factorisation ou division
      const a = this.randChoice([1, 4, 9, 16]);
      const sqrtA = Math.sqrt(a);
      return this.makeMcq(
        'L1-CMP', tier, "Factorisation dans $\\mathbb{C}[X]$ vs $\\mathbb{R}[X]$",
        "Factoriser un polynôme quadratique en facteurs irréductibles",
        `Quelle est la décomposition en facteurs irréductibles de $P(X) = X^2 + ${a}$ dans $\\mathbb{C}[X]$ ?`,
        `$(X - ${sqrtA}i)(X + ${sqrtA}i)$`,
        [
          `$(X - ${sqrtA})(X + ${sqrtA})$`,
          `$(X + ${sqrtA}i)^2$`,
          "Irreductible dans $\\mathbb{C}[X]$"
        ],
        "Dans $\\mathbb{C}$, tout polynôme est scindé (théorème de d'Alembert-Gauss).",
        `$X^2 + ${a} = X^2 - (${sqrtA}i)^2$.`,
        `$X^2 + ${a} = X^2 - (${sqrtA}i)^2 = (X - ${sqrtA}i)(X + ${sqrtA}i)$.`
      );
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
        `$\\det(${k} A) = 3`
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
      "Il existe une matrice orthogonale $P \\in O_n(\\mathbb{R})$ telle que $S = P D P^T$.",
      "Le Théorème Spectral affirme que toute matrice symétrique réelle possède un spectre entièrement réel et admet une décomposition orthogonale $S = P D P^T$ avec $P$ orthogonale."
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
      [`$[G : H] = ${cardG - cardH}$`, `$[G : H] = ${cardH}$`, `$[G : H] = ${cardG}`],
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
      "$T_x M = \\ker(df(x))$",
      [
        "$T_x M = \\text{Im}(df(x))$",
        "$T_x M = (\\ker(df(x)))^\\perp$",
        "$T_x M = \\nabla f(x)$"
      ],
      "Les vecteurs tangents annulent la dérivée le long des contraintes.",
      "La codimension est $k$, donc l'espace tangent est de dimension $n - k$.",
      "D'après le théorème des fonctions implicites, l'espace tangent à une sous-variété définie par une submersion $f$ est exactement le noyau de sa différentielle : $T_x M = \\ker(df(x))$."
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
      "Que garantit le Théorème Fondamental de la Programmation Linéaire pour un problème sous forme standard $\\max c^T x$ sous $Ax = b, x \\ge 0$ admettant un optimum ?",
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
      [`$x = ${b / a === Math.round(b / a) ? b / a : b + '/' + a}$`, `$x = ${a}$`, `$x = ${b}`],
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
