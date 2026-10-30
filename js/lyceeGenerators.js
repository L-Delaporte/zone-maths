/**
 * lyceeGenerators.js
 * Moteur procédural complet pour le Lycée : Seconde, Première Spé, Terminale Spé & Expertes.
 * 40 chapitres x 4 paliers ZPD = 160 générateurs avec variables aléatoires & corrections pas à pas.
 */

window.MathsLyceeGenerators = {
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

  gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
      const t = b;
      b = a % b;
      a = t;
    }
    return a || 1;
  },

  simplifyFrac(num, den) {
    if (den < 0) { num = -num; den = -den; }
    if (num === 0) return "0";
    const g = this.gcd(num, den);
    num /= g;
    den /= g;
    if (den === 1) return "" + num;
    return `\\frac{${num}}{${den}}`;
  },

  formatSign(val, withSpace = true) {
    if (val >= 0) return withSpace ? `+ ${val}` : `+${val}`;
    return withSpace ? `- ${Math.abs(val)}` : `-${Math.abs(val)}`;
  },

  makeMcq(chapterId, tier, title, skill, statement, correctAnswer, distractors, hint1, hint2, solution) {
    let uniqueDistractors = [...new Set(distractors.filter(d => d && d !== correctAnswer))];
    let fallbackOffset = 1;
    while (uniqueDistractors.length < 3) {
      let synthetic = null;
      const numMatch = correctAnswer.match(/-?\\d+(?:[.,]\\d+)?/);
      if (numMatch) {
        const val = parseFloat(numMatch[0].replace(',', '.'));
        const offset = fallbackOffset % 2 === 1 ? fallbackOffset : -fallbackOffset;
        const newVal = val + offset;
        synthetic = correctAnswer.replace(numMatch[0], String(newVal));
      }
      if (!synthetic || synthetic === correctAnswer || uniqueDistractors.includes(synthetic)) {
        synthetic = `$${fallbackOffset}$`;
      }
      if (!uniqueDistractors.includes(synthetic) && synthetic !== correctAnswer) {
        uniqueDistractors.push(synthetic);
      }
      fallbackOffset++;
      if (fallbackOffset > 10) break;
    }
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

  makeExact(chapterId, tier, title, skill, statement, answer, hint1, hint2, solution) {
    return {
      id: `${chapterId}-exact-${Date.now()}-${Math.floor(Math.random() * 100000)}`,
      chapterId,
      tier,
      type: "exact",
      title,
      skill,
      statement,
      answer,
      hint1,
      hint2,
      solution
    };
  },

  generate(chapterId, tier = 1) {
    const t = (tier >= 1 && tier <= 4) ? parseInt(tier, 10) : 1;
    if (chapterId.startsWith('2N') || chapterId.startsWith('2A') || chapterId.startsWith('2G') || chapterId.startsWith('2S')) {
      return this.generate2nde(chapterId, t);
    }
    if (chapterId.startsWith('1A') || chapterId.startsWith('1G') || chapterId.startsWith('1S')) {
      return this.generate1ere(chapterId, t);
    }
    if (chapterId.startsWith('TA') || chapterId.startsWith('TG') || chapterId.startsWith('TS') || chapterId.startsWith('TX')) {
      return this.generateTale(chapterId, t);
    }
    return null;
  },

  // =========================================================================
  // CLASSE DE SECONDE (13 chapitres)
  // =========================================================================
  generate2nde(chapterId, tier) {
    switch (chapterId) {
      // ---------------------------------------------------------------------
      // 2N1 : Ensembles de nombres, arithmétique et nombres réels
      // ---------------------------------------------------------------------
      case '2N1': {
        if (tier === 1) {
          const sets = [
            { val: '-24/6', simp: '-4', ans: '$\\mathbb{Z}$', dist: ['$\\mathbb{N}$', '$\\mathbb{D}$', '$\\mathbb{Q}$'], exp: '-24/6 = -4 est un entier relatif négatif (non naturel).' },
            { val: '42/7', simp: '6', ans: '$\\mathbb{N}$', dist: ['$\\mathbb{Z}$', '$\\mathbb{D}$', '$\\mathbb{Q}$'], exp: '42/7 = 6 est un entier naturel positif.' },
            { val: '3/8', simp: '0{,}375', ans: '$\\mathbb{D}$', dist: ['$\\mathbb{N}$', '$\\mathbb{Z}$', '$\\mathbb{Q}$'], exp: '3/8 = 0,375 possède un nombre fini de chiffres après la virgule, c\'est un nombre décimal.' },
            { val: '5/6', simp: '0{,}8333...', ans: '$\\mathbb{Q}$', dist: ['$\\mathbb{D}$', '$\\mathbb{Z}$', '$\\mathbb{R}$'], exp: '5/6 a un développement décimal infini périodique : c\'est un rationnel non décimal.' },
            { val: '\\sqrt{49}', simp: '7', ans: '$\\mathbb{N}$', dist: ['$\\mathbb{Z}$', '$\\mathbb{Q}$', '$\\mathbb{R} \\setminus \\mathbb{Q}$'], exp: '$\\sqrt{49} = 7$ est un entier naturel.' },
            { val: '\\sqrt{7}', simp: 'irrationnel', ans: '$\\mathbb{R} \\setminus \\mathbb{Q}$', dist: ['$\\mathbb{Q}$', '$\\mathbb{D}$', '$\\mathbb{Z}$'], exp: '7 n\'est pas un carré parfait, $\\sqrt{7}$ est un nombre irrationnel.' }
          ];
          const pick = this.randChoice(sets);
          return this.makeMcq('2N1', 1, 'Ensemble de nombres fondamental',
            "Identifier le plus petit ensemble auquel appartient un réel",

            `Quel est le plus petit ensemble de nombres auquel appartient $A = ${pick.val}$ ?`,
            pick.ans, pick.dist,
            "Simplifie d'abord le nombre sous sa forme la plus simple.",

            "Rappelle-toi la chaîne des inclusions : $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{D} \\subset \\mathbb{Q} \\subset \\mathbb{R}$.",

            `En simplifiant, $A = ${pick.simp}$. ${pick.exp} Le plus petit ensemble est donc ${pick.ans}.`
          );
        } else if (tier === 2) {
          const a = this.randInt(2, 7);
          const b = this.randChoice([2, 3, 5, 7]);
          const N = a * a * b;
          return this.makeMcq('2N1', 2, 'Simplification de radicaux',
            "Décomposer en facteurs premiers et extraire les carrés parfaits",

            `Écrire sous la forme $a\\sqrt{b}$ (avec $b$ entier le plus petit possible) : $\\sqrt{${N}}$.`,
            `$${a}\\sqrt{${b}}$`,
            [`$${a * 2}\\sqrt{${b}}$`, `$${b}\\sqrt{${a}}$`, `$${a * a}\\sqrt{${b}}$`],
            `Trouve le plus grand carré parfait qui divise ${N}.`,
            `Remarque que $${N} = ${a * a} \\times ${b} = ${a}^2 \\times ${b}$.`,
            `$\\sqrt{${N}} = \\sqrt{${a}^2 \\times ${b}} = \\sqrt{${a}^2} \\times \\sqrt{${b}} = ${a}\\sqrt{${b}}$.`
          );
        } else if (tier === 3) {
          const p = this.randChoice([16, 25, 40, 50, 80]);
          const num = this.randChoice([3, 7, 9, 11, 13]);
          return this.makeMcq('2N1', 3, 'Caractérisation des nombres décimaux',
            "Reconnaître un décimal par les facteurs de son dénominateur",

            `Laquelle des fractions suivantes appartient à l'ensemble des décimaux $\\mathbb{D}$ ?`,
            `$\\frac{${num}}{${p}}$`,
            [`$\\frac{${num}}{${p + 3}}$`, `$\\frac{${num}}{21}$`, `$\\frac{1}{6}$`],
            "Une fraction irréductible est décimale si et seulement si son dénominateur ne contient que 2 et 5 comme facteurs premiers.",

            `Décompose ${p} en produit de facteurs premiers : observe s\'il n\'y a que des 2 et des 5.`,
            `La fraction $\\frac{${num}}{${p}}$ est décimale car son dénominateur ${p} ne contient aucun facteur premier autre que 2 et 5. Les autres dénominateurs comportent des facteurs 3 ou 7.`
          );
        } else {
          return this.makeMcq('2N1', 4, 'Irrationalité de $\\sqrt{2}$',
            "Comprendre le raisonnement par l'absurde d'Euclide",

            "Dans la démonstration que $\\sqrt{2}$ est irrationnel par l'absurde en posant $\\sqrt{2} = \\frac{p}{q}$ irréductible, quelle contradiction finale obtient-on ?",

            "$p$ et $q$ sont tous les deux pairs, ce qui contredit le fait que la fraction est irréductible.",

            [
              "On obtient que $2 = 0$, ce qui est absurde.",

              "$p$ est pair et $q$ est impair, ce qui est impossible pour une fraction.",

              "Le dénominateur $q$ est nul, ce qui est interdit."

            ],
            "On montre d'abord que $p^2 = 2q^2$ donc $p$ est pair, puis en posant $p = 2k$ on prouve que $q$ est pair.",

            "Une fraction irréductible ne peut pas avoir deux termes pairs divisibles par 2.",

            "En prouvant que $p$ et $q$ sont tous deux divisibles par 2, on contredit l'hypothèse initiale que $\\frac{p}{q}$ était une fraction irréductible. Donc $\\sqrt{2}$ est irrationnel."

          );
        }
      }

      // ---------------------------------------------------------------------
      // 2N2 : Calcul littéral, identités remarquables et factorisation
      // ---------------------------------------------------------------------
      case '2N2': {
        const a = this.randInt(2, 5);
        const b = this.randInt(1, 6);
        if (tier === 1) {
          const a2 = a * a;
          const twoab = 2 * a * b;
          const b2 = b * b;
          return this.makeMcq('2N2', 1, 'Développement : carré d\'une somme',
            "Appliquer la formule $(u + v)^2 = u^2 + 2uv + v^2$",

            `Développer et réduire l'expression : $A = (${a}x + ${b})^2$.`,
            `$${a2}x^2 + ${twoab}x + ${b2}$`,
            [`$${a2}x^2 + ${b2}$`, `$${a}x^2 + ${twoab}x + ${b2}$`, `$${a2}x^2 - ${twoab}x + ${b2}$`],
            "Identité remarquable : $(u + v)^2 = u^2 + 2uv + v^2$.",

            `Ici $u = ${a}x$ et $v = ${b}$, donc le double produit vaut $2 \\times (${a}x) \\times ${b} = ${twoab}x$.`,
            `$(${a}x + ${b})^2 = (${a}x)^2 + 2 \\times ${a}x \\times ${b} + ${b}^2 = ${a2}x^2 + ${twoab}x + ${b2}$.`
          );
        } else if (tier === 2) {
          const a2 = a * a;
          const b2 = b * b;
          return this.makeMcq('2N2', 2, 'Différence de deux carrés',
            "Développer avec $(u - v)(u + v) = u^2 - v^2$",

            `Développer et réduire l'expression : $B = (${a}x - ${b})(${a}x + ${b})$.`,
            `$${a2}x^2 - ${b2}$`,
            [`$${a2}x^2 + ${b2}$`, `$${a2}x^2 - ${2 * a * b}x - ${b2}$`, `$${a}x^2 - ${b2}$`],
            "Formule : $(u - v)(u + v) = u^2 - v^2$.",

            "Les doubles produits s'annulent mutuellement.",

            `$B = (${a}x)^2 - (${b})^2 = ${a2}x^2 - ${b2}$.`
          );
        } else if (tier === 3) {
          const c = this.randInt(1, 4);
          const d = this.randInt(1, 4);
          return this.makeMcq('2N2', 3, 'Factorisation par facteur commun',
            "Identifier et factoriser un facteur commun polynomial",

            `Factoriser l'expression : $C = (${a}x + ${b})(x - ${c}) + (${a}x + ${b})(${d}x + 2)$.`,
            `$(${a}x + ${b})(${1 + d}x ${2 - c >= 0 ? '+ ' + (2 - c) : '- ' + Math.abs(2 - c)})$`,
            [
              `$(${a}x + ${b})(${d}x - ${c})$`,
              `$(${a}x - ${b})(${1 + d}x + ${c})$`,
              `$(${a * a}x + ${b * b})(${1 + d}x - ${c})$`
            ],
            `Le facteur commun visible est $(${a}x + ${b})$.`,
            "Mets en facteur : $(ax+b)[(x-c) + (dx+2)]$, puis réduis le crochet.",

            `$C = (${a}x + ${b})[(x - ${c}) + (${d}x + 2)] = (${a}x + ${b})(${1 + d}x ${2 - c >= 0 ? '+ ' + (2 - c) : '- ' + Math.abs(2 - c)})$.`
          );
        } else {
          const k = this.randInt(2, 6);
          const k2 = k * k;
          return this.makeMcq('2N2', 4, 'Factorisation du type $A^2 - B^2$',
            "Factoriser une différence de carrés avec une expression composée",

            `Factoriser l'expression : $D = (${a}x + ${b})^2 - ${k2}$.`,
            `$(${a}x ${b - k >= 0 ? '+ ' + (b - k) : '- ' + Math.abs(b - k)})(${a}x + ${b + k})$`,
            [
              `$(${a}x - ${k})(${a}x + ${k})$`,
              `$(${a}x + ${b - k2})(${a}x + ${b})$`,
              `$(${a}x + ${b + k})^2$`
            ],
            `Écris ${k2} sous la forme ${k}^2 et applique $u^2 - v^2 = (u - v)(u + v)$.`,
            `Ici $u = ${a}x + ${b}$ et $v = ${k}$.`,
            `$D = [(${a}x + ${b}) - ${k}][(${a}x + ${b}) + ${k}] = (${a}x ${b - k >= 0 ? '+ ' + (b - k) : '- ' + Math.abs(b - k)})(${a}x + ${b + k})$.`
          );
        }
      }

      // ---------------------------------------------------------------------
      // 2N3 : Ordre, intervalles et valeur absolue
      // ---------------------------------------------------------------------
      case '2N3': {
        const c = this.randInt(1, 5);
        const r = this.randInt(2, 6);
        if (tier === 1) {
          const minVal = c - r;
          const maxVal = c + r;
          return this.makeMcq('2N3', 1, 'Traduction encadrement en intervalle',
            "Associer inégalités et crochets d'un intervalle",

            `À quel intervalle appartient le réel $x$ si : $${minVal} \\le x < ${maxVal}$ ?`,
            `$[${minVal} ; ${maxVal}[$`,
            [`$]${minVal} ; ${maxVal}]$`, `$]${minVal} ; ${maxVal}[$`, `$[${minVal} ; ${maxVal}]$`],
            "Une inégalité large $\\le$ donne un crochet fermé [, une inégalité stricte $<$ donne un crochet ouvert [.",

            `$x \\ge ${minVal}$ signifie que ${minVal} est inclus (crochet fermé).`,
            `L\'inégalité $${minVal} \\le x < ${maxVal}$ correspond exactement à l\'intervalle $[${minVal} ; ${maxVal}[$.`
          );
        } else if (tier === 2) {
          const x0 = this.randInt(-6, 6);
          const d = Math.abs(x0 - c);
          return this.makeMcq('2N3', 2, 'Interprétation de la valeur absolue',
            "Calculer et interpréter la distance entre deux réels",

            `Calculer la valeur absolue : $|${x0} - ${c}|$.`,
            `$${d}$`,
            [`$${-d}$`, `$${x0 - c}$`, `$${d + 2}$`],
            "La valeur absolue $|a - b|$ représente la distance géométrique entre $a$ et $b$ sur la droite graduée.",

            `Calcule d\'abord la différence intérieure : ${x0} - ${c} = ${x0 - c}.`,
            `$|${x0} - ${c}| = |${x0 - c}| = ${d}$. Une distance est toujours positive ou nulle.`
          );
        } else if (tier === 3) {
          const minVal = c - r;
          const maxVal = c + r;
          return this.makeMcq('2N3', 3, 'Inéquation avec valeur absolue',
            "Résoudre géométriquement $|x - c| \\le r$",

            `Résoudre dans $\\mathbb{R}$ l'inéquation : $|x - ${c}| \\le ${r}$.`,
            `$S = [${minVal} ; ${maxVal}]$`,
            [`$S = ]${minVal} ; ${maxVal}[$`, `$S = [-${r} ; ${r}]$`, `$S = [${c} ; ${maxVal}]$`],
            "$|x - c| \\le r$ signifie que la distance entre $x$ et $c$ est au plus égale à $r$.",

            `Cela équivaut à la double inégalité : $-${r} \\le x - ${c} \\le ${r}$.`,
            `Ajoutons $${c}$ à chaque membre : $${c} - ${r} \\le x \\le ${c} + ${r} \\iff ${minVal} \\le x \\le ${maxVal}$, donc $S = [${minVal} ; ${maxVal}]$.`
          );
        } else {
          const a1 = c - r - 1;
          const b1 = c + 1;
          const a2 = c - 1;
          const b2 = c + r + 1;
          return this.makeMcq('2N3', 4, 'Intersection et réunion d\'intervalles',
            "Déterminer l'intersection $I \\cap J$",

            `Déterminer l'intersection : $[${a1} ; ${b1}] \\cap [${a2} ; ${b2}]$.`,
            `$[${a2} ; ${b1}]$`,
            [`$[${a1} ; ${b2}]$`, `$\\emptyset$`, `$]${a2} ; ${b1}[$`],
            "L'intersection regroupe tous les réels qui sont à la fois dans le premier et dans le deuxième intervalle.",

            `Trace les deux segments sur une droite graduée : la zone commune commence en ${a2} et finit en ${b1}.`,
            `La partie commune aux deux intervalles est le segment $[${a2} ; ${b1}]$.`
          );
        }
      }

      // ---------------------------------------------------------------------
      // 2N4 : Équations, inéquations du 1er degré et tableaux de signes
      // ---------------------------------------------------------------------
      case '2N4': {
        const a = this.randInt(2, 5);
        const b = this.randInt(-6, 6);
        const d = this.randInt(1, 6);
        if (tier === 1) {
          const signB = b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`;
          return this.makeMcq('2N4', 1, 'Équation produit-nul',
            "Résoudre une équation du type $(ax + b)(x - d) = 0$",

            `Résoudre dans $\\mathbb{R}$ l'équation : $(${a}x ${signB})(x - ${d}) = 0$.`,
            `$S = \\{${this.simplifyFrac(-b, a)}, ${d}\\}$`,
            [`$S = \\{${this.simplifyFrac(b, a)}, ${-d}\\}$`, `$S = \\{${d}\\}$`, `$S = \\{${a}, ${b}\\}$`],
            "Un produit de facteurs est nul si et seulement si au moins l'un de ses facteurs est nul.",

            `Résous séparément $${a}x ${signB} = 0$ et $x - ${d} = 0$.`,
            `Soit $${a}x = ${-b} \\implies x = ${this.simplifyFrac(-b, a)}$, soit $x = ${d}$. Donc $S = \\{${this.simplifyFrac(-b, a)}, ${d}\\}$.`
          );
        } else if (tier === 2) {
          const signB = b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`;
          return this.makeMcq('2N4', 2, 'Signe d\'une fonction affine',
            "Résoudre l'inéquation $ax + b > 0$",

            `Pour quelles valeurs de $x$ a-t-on : $${a}x ${signB} > 0$ ?`,
            `$x \\in ]${this.simplifyFrac(-b, a)} ; +\\infty[$`,
            [`$x \\in ]-\\infty ; ${this.simplifyFrac(-b, a)}[$`, `$x \\in ]${this.simplifyFrac(b, a)} ; +\\infty[$`, `$x > ${a}$`],
            `Isole $x$ : $${a}x > ${-b}$. Comme $${a} > 0$, diviser par $${a}$ ne change pas le sens de l\'inégalité.`,
            `$x > \\frac{${-b}}{${a}}$.`,
            `$${a}x ${signB} > 0 \\iff ${a}x > ${-b} \\iff x > ${this.simplifyFrac(-b, a)}$, donc $x \\in ]${this.simplifyFrac(-b, a)} ; +\\infty[$.`
          );
        } else if (tier === 3) {
          const x1 = Math.min(-b, d);
          const x2 = Math.max(-b, d);
          return this.makeMcq('2N4', 3, 'Tableau de signes d\'un produit',
            "Étudier le signe de $(x - x_1)(x - x_2) \\ge 0$",

            `Résoudre dans $\\mathbb{R}$ l'inéquation : $(x - ${x1})(x - ${x2}) \\ge 0$.`,
            `$S = ]-\\infty ; ${x1}] \\cup [${x2} ; +\\infty[$`,
            [`$S = [${x1} ; ${x2}]$`, `$S = ]-\\infty ; ${x1}[$`, `$S = [${x2} ; +\\infty[$`],
            "Dresse un tableau de signes : le produit de deux termes de même signe est positif.",

            `Le produit s\'annule en $${x1}$ et $${x2}$.`,
            `Un trinôme avec coefficient de $x^2$ positif ($a = 1 > 0$) est positif à l\'extérieur des racines : $S = ]-\\infty ; ${x1}] \\cup [${x2} ; +\\infty[$.`
          );
        } else {
          const c = this.randInt(1, 4);
          return this.makeMcq('2N4', 4, 'Inéquation rationnelle avec valeur interdite',
            "Dresser le tableau de signes d'un quotient en excluant la valeur interdite",

            `Quel est l'ensemble des solutions de l'inéquation : $\\frac{x - ${d}}{x + ${c}} \\le 0$ ?`,
            `$S = ]-${c} ; ${d}]$`,
            [`$S = [-${c} ; ${d}]$`, `$S = ]-\\infty ; -${c}[ \\cup [${d} ; +\\infty[$`, `$S = ]-${c} ; ${d}[$`],
            "Attention au dénominateur ! Une valeur interdite ne peut JAMAIS être incluse dans l'ensemble des solutions.",

            `Ici $x + ${c} \\neq 0 \\implies x \\neq -${c}$, donc le crochet en $-${c}$ doit être strictement OUVERT.`,
            `Le quotient est négatif entre les deux zéros $-${c}$ et $${d}$. Comme $-${c}$ est valeur interdite, on a $S = ]-${c} ; ${d}]$.`
          );
        }
      }

      // ---------------------------------------------------------------------
      // 2A1 : Notion générale de fonction, ensemble de définition et courbes
      // ---------------------------------------------------------------------
      case '2A1': {
        const a = this.randInt(2, 4);
        const b = this.randInt(1, 5);
        if (tier === 1) {
          const x0 = this.randInt(-3, 3);
          const y0 = a * x0 * x0 - b;
          return this.makeMcq('2A1', 1, 'Calcul d\'image par une fonction',
            "Calculer $f(x_0)$ pour une fonction polynomiale",

            `Soit $f(x) = ${a}x^2 - ${b}$. Quelle est l'image de $${x0}$ par $f$ ?`,
            `$f(${x0}) = ${y0}$`,
            [`$f(${x0}) = ${y0 + 2 * a}$`, `$f(${x0}) = ${-y0}$`, `$f(${x0}) = ${a * x0 - b}$`],
            "Remplace la variable $x$ par la valeur donnée dans l'expression de $f(x)$.",

            `Calcule d\'abord le carré : $(${x0})^2 = ${x0 * x0}$, puis multiplie par $${a}$.`,
            `$f(${x0}) = ${a}(${x0})^2 - ${b} = ${a} \\times ${x0 * x0} - ${b} = ${y0}$.`
          );
        } else if (tier === 2) {
          const x0 = this.randInt(1, 5);
          const y0 = a * x0 + b;
          return this.makeMcq('2A1', 2, 'Recherche d\'antécédent',
            "Résoudre $f(x) = k$ pour trouver l'antécédent de $k$",

            `Soit la fonction affine $f(x) = ${a}x + ${b}$. Quel est l'antécédent de $${y0}$ par $f$ ?`,
            `$x = ${x0}$`,
            [`$x = ${-x0}$`, `$x = ${y0 * a + b}$`, `$x = ${x0 + 1}$`],
            "Chercher l'antécédent de $y_0$ revient à résoudre l'équation $f(x) = y_0$.",

            `Résous : $${a}x + ${b} = ${y0}$.`,
            `$${a}x + ${b} = ${y0} \\iff ${a}x = ${y0 - b} \\iff x = \\frac{${y0 - b}}{${a}} = ${x0}$.`
          );
        } else if (tier === 3) {
          const k = this.randInt(1, 8);
          return this.makeMcq('2A1', 3, 'Ensemble de définition avec dénominateur',
            "Déterminer le domaine de définition d'une fonction rationnelle",

            `Quel est l'ensemble de définition de la fonction $f(x) = \\frac{2x + 1}{x - ${k}}$ ?`,
            `$\\mathcal{D}_f = \\mathbb{R} \\setminus \\{${k}\\}$`,
            [`$\\mathcal{D}_f = \\mathbb{R}$`, `$\\mathcal{D}_f = [${k} ; +\\infty[$`, `$\\mathcal{D}_f = \\mathbb{R} \\setminus \\{-${k}\\}$`],
            "Une fraction est définie si et seulement si son dénominateur est non nul.",

            `Résous $x - ${k} = 0$ pour trouver la valeur interdite.`,
            `Le dénominateur s\'annule pour $x = ${k}$. La fonction est donc définie sur tous les réels sauf ${k} : $\\mathcal{D}_f = \\mathbb{R} \\setminus \\{${k}\\}$.`
          );
        } else {
          const k = this.randInt(1, 6);
          return this.makeMcq('2A1', 4, 'Ensemble de définition avec radical',
            "Déterminer le domaine de définition d'une fonction racine carrée",

            `Quel est l'ensemble de définition de la fonction $g(x) = \\sqrt{${a}x - ${a * k}}$ ?`,
            `$\\mathcal{D}_g = [${k} ; +\\infty[$`,
            [`$\\mathcal{D}_g = ]${k} ; +\\infty[$`, `$\\mathcal{D}_g = ]-\\infty ; ${k}]$`, `$\\mathcal{D}_g = \\mathbb{R}$`],
            "La racine carrée n'est définie que pour des valeurs positives ou nulles sous le radical.",

            `Résous l\'inéquation $${a}x - ${a * k} \\ge 0$.`,
            `$${a}x - ${a * k} \\ge 0 \\iff ${a}x \\ge ${a * k} \\iff x \\ge ${k}$. L\'ensemble de définition est donc $[${k} ; +\\infty[$.`
          );
        }
      }

      // ---------------------------------------------------------------------
      // 2A2 : Variations et extremums d'une fonction
      // ---------------------------------------------------------------------
      case '2A2': {
        const a = this.randInt(1, 4);
        const alpha = this.randInt(-3, 3);
        const beta = this.randInt(-5, 5);
        if (tier === 1) {
          const m = this.randChoice([-3, -2, 2, 4]);
          const p = this.randInt(-4, 4);
          const isCroiss = m > 0;
          return this.makeMcq('2A2', 1, 'Sens de variation d\'une fonction affine',
            "Déterminer le sens de variation à partir du coefficient directeur",

            `Quel est le sens de variation de la fonction affine $f(x) = ${m}x ${p >= 0 ? '+ ' + p : '- ' + Math.abs(p)}$ sur $\\mathbb{R}$ ?`,
            isCroiss ? 'Strictement croissante car $m > 0$' : 'Strictement décroissante car $m < 0$',
            isCroiss
              ? ['Strictement décroissante car $m > 0$', 'Constante sur R', 'D\'abord croissante puis décroissante']
              : ['Strictement croissante car $m < 0$', 'Constante sur R', 'D\'abord décroissante puis croissante'],
            "Le sens de variation d'une fonction affine $f(x) = mx + p$ dépend uniquement du signe de son coefficient directeur $m$.",

            `Ici le coefficient directeur est $m = ${m}$.`,
            `Comme $m = ${m} ${isCroiss ? '> 0' : '< 0'}$, la fonction $f$ est strictement ${isCroiss ? 'croissante' : 'décroissante'} sur $\\mathbb{R}$.`
          );
        } else if (tier === 2) {
          const isMin = a > 0;
          return this.makeMcq('2A2', 2, 'Extremum d\'une parabole',
            "Déterminer le sommet et l'extremum d'une fonction du second degré",

            `Soit la fonction définie par sa forme canonique $f(x) = ${a}(x ${alpha >= 0 ? '- ' + alpha : '+ ' + Math.abs(alpha)})^2 + ${beta}$. Quel est son extremum sur $\\mathbb{R}$ ?`,
            `Un minimum égal à $${beta}$, atteint en $x = ${alpha}$`,
            [
              `Un maximum égal à $${beta}$, atteint en $x = ${alpha}$`,
              `Un minimum égal à $${alpha}$, atteint en $x = ${beta}$`,
              `Un extremum égal à $0$, atteint en $x = ${alpha}$`
            ],
            "Pour tout réel $x$, $(x - \\alpha)^2 \\ge 0$. Son minimum est 0 atteint en $x = \\alpha$.",

            `Comme $a = ${a} > 0$, la parabole est tournée vers le haut : elle admet un minimum.`,
            `Le carré étant toujours positif ou nul, $f(x) \\ge ${beta}$ pour tout $x$. Le minimum vaut $${beta}$ et il est atteint lorsque $x = ${alpha}$.`
          );
        } else if (tier === 3) {
          return this.makeMcq('2A2', 3, 'Comparaison d\'images par une fonction monotone',
            "Utiliser la définition d'une fonction croissante ou décroissante",

            "Soit $g$ une fonction strictement décroissante sur $[-5 ; 5]$. Comparer $g(-1)$ et $g(2)$.",

            "$g(-1) > g(2)$",

            ['$g(-1) < g(2)$', '$g(-1) = g(2)$', 'On ne peut pas savoir sans connaître la formule'],
            "Par définition, une fonction décroissante inverse l'ordre des réels : si $a < b$ alors $f(a) > f(b)$.",

            "Compare d'abord les antécédents : $-1 < 2$.",

            "Puisque $-1 < 2$ et que la fonction $g$ est strictement décroissante, les images sont rangées dans l'ordre contraire : $g(-1) > g(2)$."

          );
        } else {
          return this.makeMcq('2A2', 4, 'Encadrement d\'images sur un intervalle',
            "Encadrer les valeurs d'une fonction monotone sur un segment",

            `Soit $f$ une fonction strictement croissante sur $[1 ; 6]$ avec $f(1) = -3$ et $f(6) = 10$. Quel est l'encadrement de $f(x)$ pour $x \\in [1 ; 6]$ ?`,
            `$-3 \\le f(x) \\le 10$`,
            [`$1 \\le f(x) \\le 6$`, `$-3 < f(x) < 10$`, `$f(x) \\ge 0$`],
            "Pour une fonction croissante, le minimum est l'image de la borne inférieure et le maximum est l'image de la borne supérieure.",

            "$x \\in [1 ; 6] \\iff 1 \\le x \\le 6 \\implies f(1) \\le f(x) \\le f(6)$.",

            "La fonction conservant l'ordre, $1 \\le x \\le 6$ implique $f(1) \\le f(x) \\le f(6)$, c'est-à-dire $-3 \\le f(x) \\le 10$."

          );
        }
      }

      // ---------------------------------------------------------------------
      // 2A3 : Fonctions de référence (carré, inverse, racine carrée, cube)
      // ---------------------------------------------------------------------
      case '2A3': {
        if (tier === 1) {
          return this.makeMcq('2A3', 1, 'Parité des fonctions de référence',
            "Reconnaître les fonctions paires et impaires",

            "Laquelle de ces affirmations est exacte concernant la fonction inverse $f(x) = \\frac{1}{x}$ ?",

            "Elle est impaire : sa courbe admet l'origine $O$ comme centre de symétrie.",

            [
              "Elle est paire : sa courbe est symétrique par rapport à l'axe des ordonnées.",

              "Elle est croissante sur $]-\\infty ; 0[$ et décroissante sur $]0 ; +\\infty[$.",

              "Elle est définie sur $\\mathbb{R}$ tout entier."

            ],
            "Calcule $f(-x)$ et compare-le avec $f(x)$.",

            `$f(-x) = \\frac{1}{-x} = -\\frac{1}{x} = -f(x)$.`,
            `Pour tout $x \\neq 0$, $f(-x) = -f(x)$, donc la fonction inverse est impaire. Sa courbe (l\'hyperbole) admet l\'origine du repère pour centre de symétrie.`
          );
        } else if (tier === 2) {
          const a = this.randChoice([9, 16, 25, 36, 49, 64]);
          const sq = Math.sqrt(a);
          return this.makeMcq('2A3', 2, 'Équation avec la fonction carré',
            "Résoudre dans R l'équation $x^2 = a$",

            `Résoudre dans $\\mathbb{R}$ l'équation : $x^2 = ${a}$.`,
            `$S = \\{-${sq}, ${sq}\\}$`,
            [`$S = \\{${sq}\\}$`, `$S = \\{-${sq}\\}$`, `$S = \\{${a / 2}\\}$`],
            "Puisque $a > 0$, l'équation $x^2 = a$ admet deux solutions réelles opposées : $-\\sqrt{a}$ et $\\sqrt{a}$.",

            `N\'oublie pas la solution négative : $(-${sq})^2 = ${a}$ également !`,
            `$x^2 = ${a} \\iff x^2 - ${a} = 0 \\iff (x - ${sq})(x + ${sq}) = 0$, d\'où $S = \\{-${sq}, ${sq}\\}$.`
          );
        } else if (tier === 3) {
          const k = this.randChoice([4, 9, 16, 25]);
          const r = Math.sqrt(k);
          return this.makeMcq('2A3', 3, 'Inéquation avec la fonction carré',
            "Résoudre graphiquement ou algébriquement $x^2 \\le k$",

            `Résoudre dans $\\mathbb{R}$ l'inéquation : $x^2 \\le ${k}$.`,
            `$S = [-${r} ; ${r}]$`,
            [`$S = [0 ; ${r}]$`, `$S = ]-\\infty ; ${r}]$`, `$S = ]-\\infty ; -${r}] \\cup [${r} ; +\\infty[$`],
            "La parabole $y = x^2$ est sous la droite horizontale $y = k$ entre ses deux points d'intersection.",

            `Les bornes de l\'intervalle sont $-\\sqrt{${k}} = -${r}$ et $\\sqrt{${k}} = ${r}$.`,
            `$x^2 \\le ${k} \\iff |x| \\le ${r} \\iff -${r} \\le x \\le ${r}$, donc $S = [-${r} ; ${r}]$.`
          );
        } else {
          return this.makeMcq('2A3', 4, 'Étude de parité algébrique',
            "Démontrer qu'une fonction composée est paire ou impaire",

            "Soit la fonction définie par $f(x) = \\frac{x}{x^2 + 1}$. Quelle est la parité de $f$ ?",

            "Impaire, car $f(-x) = -f(x)$ pour tout réel $x$.",

            [
              "Paire, car $f(-x) = f(x)$ pour tout réel $x$.",

              "Ni paire ni impaire car il y a une fraction.",

              "Paire car le dénominateur contient $x^2$."

            ],
            "Remplace $x$ par $-x$ dans l'expression et simplifie.",

            "$(-x)^2 = x^2$, donc le dénominateur ne change pas.",

            `$f(-x) = \\frac{-x}{(-x)^2 + 1} = \\frac{-x}{x^2 + 1} = -\\frac{x}{x^2 + 1} = -f(x)$. La fonction est donc impaire.`
          );
        }
      }

      // ---------------------------------------------------------------------
      // 2G1 : Repérage cartésien, milieu d'un segment et distance dans le plan
      // ---------------------------------------------------------------------
      case '2G1': {
        const xA = this.randInt(-4, 4);
        const yA = this.randInt(-4, 4);
        const dx = this.randChoice([3, 4, 6]);
        const dy = this.randChoice([4, 3, 8]);
        const xB = xA + dx;
        const yB = yA + dy;
        if (tier === 1) {
          const xM = (xA + xB) / 2;
          const yM = (yA + yB) / 2;
          return this.makeMcq('2G1', 1, 'Coordonnées du milieu d\'un segment',
            "Appliquer les formules $x_M = \\frac{x_A+x_B}{2}$ et $y_M = \\frac{y_A+y_B}{2}$",

            `Dans un repère, on donne $A(${xA} ; ${yA})$ et $B(${xB} ; ${yB})$. Quelles sont les coordonnées du milieu $M$ du segment $[AB]$ ?`,
            `$M(${xM} ; ${yM})$`,
            [`$M(${xB - xA} ; ${yB - yA})$`, `$M(${xM + 1} ; ${yM})$`, `$M(${xA + xB} ; ${yA + yB})$`],
            "La formule du milieu est la moyenne des abscisses et la moyenne des ordonnées.",

            `$x_M = \\frac{${xA} + ${xB}}{2}$ et $y_M = \\frac{${yA} + ${yB}}{2}$.`,
            `$x_M = \\frac{${xA} + ${xB}}{2} = ${xM}$ et $y_M = \\frac{${yA} + ${yB}}{2} = ${yM}$. Donc $M(${xM} ; ${yM})$.`
          );
        } else if (tier === 2) {
          const dist2 = dx * dx + dy * dy;
          const isSquare = Number.isInteger(Math.sqrt(dist2));
          const expected = isSquare ? `${Math.sqrt(dist2)}` : `\\sqrt{${dist2}}`;
          return this.makeMcq('2G1', 2, 'Distance entre deux points',
            "Appliquer la formule $AB = \\sqrt{(x_B-x_A)^2 + (y_B-y_A)^2}$ dans un repère orthonormé",

            `Dans un repère orthonormé, on donne $A(${xA} ; ${yA})$ et $B(${xB} ; ${yB})$. Calculer la longueur $AB$.`,
            `$AB = ${expected}$`,
            [`$AB = ${dx + dy}$`, `$AB = \\sqrt{${dx + dy}}$`, `$AB = ${expected === '5' ? '7' : '10'}$`],
            "Formule : $AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$.",

            `$x_B - x_A = ${dx}$ et $y_B - y_A = ${dy}$.`,
            `$AB = \\sqrt{(${dx})^2 + (${dy})^2} = \\sqrt{${dx * dx} + ${dy * dy}} = \\sqrt{${dist2}} = ${expected}$.`
          );
        } else if (tier === 3) {
          return this.makeMcq('2G1', 3, 'Nature d\'un triangle',
            "Utiliser la réciproque du théorème de Pythagore avec les longueurs",

            `Soit un triangle $ABC$ dans un repère orthonormé tel que $AB^2 = 25$, $AC^2 = 20$ et $BC^2 = 5$. Quelle est la nature de $ABC$ ?`,
            "Rectangle en $C$",

            ['Rectangle en $A$', 'Rectangle en $B$', 'Équilatéral'],
            "Repère le plus grand côté et applique la réciproque du théorème de Pythagore.",

            "Vérifie si $AC^2 + BC^2 = AB^2$.",

            "Le plus grand côté est $[AB]$. On a $AC^2 + BC^2 = 20 + 5 = 25 = AB^2$. D'après la réciproque du théorème de Pythagore, le triangle $ABC$ est rectangle en $C$."

          );
        } else {
          const xC = this.randInt(-3, 3);
          const yC = this.randInt(-3, 3);
          const xD = xA + xC - xB;
          const yD = yA + yC - yB;
          return this.makeMcq('2G1', 4, 'Quatrième sommet d\'un parallélogramme',
            "Utiliser l'égalité des milieux des diagonales",

            `Soient $A(${xA} ; ${yA})$, $B(${xB} ; ${yB})$ et $C(${xC} ; ${yC})$. Quelles sont les coordonnées du point $D$ tel que $ABCD$ soit un parallélogramme ?`,
            `$D(${xD} ; ${yD})$`,
            [`$D(${xD + 1} ; ${yD})$`, `$D(${xB + xC - xA} ; ${yB + yC - yA})$`, `$D(${xD} ; ${yD - 1})$`],
            "$ABCD$ est un parallélogramme si et seulement si ses diagonales $[AC]$ et $[BD]$ ont le même milieu.",

            `Le milieu de $[AC]$ a pour coordonnées $\\left(\\frac{x_A+x_C}{2} ; \\frac{y_A+y_C}{2}\\right)$. Égale-le à celui de $[BD]$.`,
            `On a $\\frac{x_B+x_D}{2} = \\frac{x_A+x_C}{2} \\implies x_D = x_A + x_C - x_B = ${xD}$ et de même $y_D = ${yD}$. Donc $D(${xD} ; ${yD})$.`
          );
        }
      }

      // ---------------------------------------------------------------------
      // 2G2 : Vecteurs du plan, translation et déterminant (colinéarité)
      // ---------------------------------------------------------------------
      case '2G2': {
        const ux = this.randInt(-4, 5);
        const uy = this.randInt(-4, 5);
        if (tier === 1) {
          const xA = this.randInt(-3, 3);
          const yA = this.randInt(-3, 3);
          const xB = xA + ux;
          const yB = yA + uy;
          return this.makeMcq('2G2', 1, 'Coordonnées d\'un vecteur',
            "Calculer les coordonnées du vecteur $\\vec{AB}(x_B - x_A ; y_B - y_A)$",

            `Dans un repère, on donne $A(${xA} ; ${yA})$ et $B(${xB} ; ${yB})$. Quelles sont les coordonnées du vecteur $\\vec{AB}$ ?`,
            `$\\vec{AB}(${ux} ; ${uy})$`,
            [`$\\vec{AB}(${-ux} ; ${-uy})$`, `$\\vec{AB}(${xA + xB} ; ${yA + yB})$`, `$\\vec{AB}(${uy} ; ${ux})$`],
            "Formule : $\\vec{AB}(x_B - x_A ; y_B - y_A)$ (toujours extrémité moins origine).",

            `$x_B - x_A = ${xB} - (${xA})$ et $y_B - y_A = ${yB} - (${yA})$.`,
            `$\\vec{AB}(${xB} - (${xA}) ; ${yB} - (${yA})) = \\vec{AB}(${ux} ; ${uy})$.`
          );
        } else if (tier === 2) {
          const k = this.randChoice([2, 3, -2]);
          const vx = this.randInt(-3, 3);
          const vy = this.randInt(-3, 3);
          const rx = k * ux + vx;
          const ry = k * uy + vy;
          return this.makeMcq('2G2', 2, 'Combinaison linéaire de vecteurs',
            "Calculer les coordonnées de $k\\vec{u} + \\vec{v}$",

            `Soient les vecteurs $\\vec{u}(${ux} ; ${uy})$ et $\\vec{v}(${vx} ; ${vy})$. Quelles sont les coordonnées du vecteur $\\vec{w} = ${k}\\vec{u} + \\vec{v}$ ?`,
            `$\\vec{w}(${rx} ; ${ry})$`,
            [`$\\vec{w}(${rx + 1} ; ${ry})$`, `$\\vec{w}(${k * ux} ; ${k * uy})$`, `$\\vec{w}(${rx} ; ${ry - 2})$`],
            "Multiplie chaque coordonnée de $\\vec{u}$ par $k$, puis additionne celles de $\\vec{v}$.",

            `$x_w = ${k} \\times (${ux}) + (${vx})$ et $y_w = ${k} \\times (${uy}) + (${vy})$.`,
            `$x_w = ${k * ux} + ${vx} = ${rx}$ et $y_w = ${k * uy} + ${vy} = ${ry}$. D\'où $\\vec{w}(${rx} ; ${ry})$.`
          );
        } else if (tier === 3) {
          const k = this.randChoice([2, -3, 4]);
          const vx = ux * k;
          const vy = uy * k;
          return this.makeMcq('2G2', 3, 'Critère de colinéarité et déterminant',
            "Utiliser la condition $\\det(\\vec{u}, \\vec{v}) = xy' - yx' = 0$",

            `Les vecteurs $\\vec{u}(${ux} ; ${uy})$ et $\\vec{v}(${vx} ; ${vy})$ sont-ils colinéaires ?`,
            `Oui, car $\\det(\\vec{u}, \\vec{v}) = (${ux})(${vy}) - (${uy})(${vx}) = 0$ (ou $\\vec{v} = ${k}\\vec{u}$)`,
            [
              `Non, car leurs coordonnées ne sont pas égales`,
              `Non, car leur produit scalaire est nul`,
              `Oui, uniquement si leurs normes sont égales`
            ],
            "Deux vecteurs sont colinéaires si et seulement si leur déterminant $xy' - yx'$ est nul.",

            `Calcule le déterminant : $(${ux}) \\times (${vy}) - (${uy}) \\times (${vx})$.`,
            `$\\det(\\vec{u}, \\vec{v}) = ${ux * vy} - (${uy * vx}) = 0$. Les vecteurs $\\vec{u}$ et $\\vec{v}$ sont donc colinéaires.`
          );
        } else {
          return this.makeMcq('2G2', 4, 'Alignement de trois points',
            "Démontrer l'alignement de points grâce à la colinéarité",

            "Pour prouver que trois points distincts $A, B$ et $C$ sont alignés dans le plan, quelle condition vectorielle suffit-il de vérifier ?",

            "Les vecteurs $\\vec{AB}$ et $\\vec{AC}$ sont colinéaires (c'est-à-dire $\\det(\\vec{AB}, \\vec{AC}) = 0$).",

            [
              "La longueur $AB$ est égale à la longueur $BC$.",

              "Les vecteurs $\\vec{AB}$ et $\\vec{BC}$ sont orthogonaux.",

              "Le milieu de $[AB]$ est confondu avec $C$."

            ],
            "Trois points sont alignés s'ils appartiennent à la même droite.",

            "Deux vecteurs formés par ces trois points avec une origine commune doivent avoir la même direction.",

            "Les points $A, B, C$ sont alignés si et seulement si les vecteurs $\\vec{AB}$ et $\\vec{AC}$ ont la même direction, c'est-à-dire sont colinéaires : $\\det(\\vec{AB}, \\vec{AC}) = 0$."

          );
        }
      }

      // ---------------------------------------------------------------------
      // 2G3 : Droites du plan, équations cartésiennes et réduites
      // ---------------------------------------------------------------------
      case '2G3': {
        const m = this.randChoice([-3, -2, 1, 2, 4]);
        const p = this.randInt(-4, 5);
        if (tier === 1) {
          return this.makeMcq('2G3', 1, 'Équation réduite d\'une droite',
            "Identifier le coefficient directeur et l'ordonnée à l'origine",

            `Quelle est l'ordonnée à l'origine de la droite $d$ d'équation réduite $y = ${m}x ${p >= 0 ? '+ ' + p : '- ' + Math.abs(p)}$ ?`,
            `$p = ${p}$`,
            [`$m = ${m}$`, `$p = ${-p}$`, `$p = 0$`],
            "Dans l'équation réduite $y = mx + p$, $m$ est le coefficient directeur et $p$ est l'ordonnée à l'origine.",

            "L'ordonnée à l'origine correspond à la valeur de $y$ lorsque $x = 0$.",

            `Pour $x = 0$, $y = ${m}(0) ${p >= 0 ? '+ ' + p : '- ' + Math.abs(p)} = ${p}$. L\'ordonnée à l\'origine est donc $p = ${p}$.`
          );
        } else if (tier === 2) {
          const a = this.randInt(1, 4);
          const b = this.randChoice([-3, -2, 2, 3]);
          const c = this.randInt(-5, 5);
          return this.makeMcq('2G3', 2, 'Vecteur directeur et équation cartésienne',
            "Associer le vecteur directeur $\\vec{u}(-b ; a)$ à l'équation $ax + by + c = 0$",

            `Donner un vecteur directeur de la droite d'équation cartésienne : $${a}x ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}y ${c >= 0 ? '+ ' + c : '- ' + Math.abs(c)} = 0$.`,
            `$\\vec{u}(${-b} ; ${a})$`,
            [`$\\vec{u}(${a} ; ${b})$`, `$\\vec{u}(${b} ; ${a})$`, `$\\vec{u}(${a} ; ${-b})$`],
            "Toute droite d'équation cartésienne $ax + by + c = 0$ admet pour vecteur directeur $\\vec{u}(-b ; a)$.",

            `Ici $a = ${a}$ et $b = ${b}$.`,
            `Le vecteur directeur est $\\vec{u}(-b ; a) = \\vec{u}(${-b} ; ${a})$.`
          );
        } else if (tier === 3) {
          const xA = this.randInt(-2, 3);
          const yA = m * xA + p;
          return this.makeMcq('2G3', 3, 'Appartenance d\'un point à une droite',
            "Tester si les coordonnées d'un point vérifient l'équation",

            `Le point $A(${xA} ; ${yA})$ appartient-il à la droite d'équation $y = ${m}x ${p >= 0 ? '+ ' + p : '- ' + Math.abs(p)}$ ?`,
            `Oui, car $${m}(${xA}) ${p >= 0 ? '+ ' + p : '- ' + Math.abs(p)} = ${yA}$`,
            [
              `Non, car $A$ n\'a pas pour abscisse 0`,
              `Non, car son ordonnée n\'est pas égale à $${p}$`,
              `On ne peut pas savoir sans tracer la droite`
            ],
            "Un point appartient à une droite si et seulement si ses coordonnées vérifient l'équation de la droite.",

            `Remplace $x$ par $${xA}$ dans le membre de droite et compare le résultat à $y_A = ${yA}$.`,
            `Pour $x = ${xA}$, on calcule $${m} \\times (${xA}) ${p >= 0 ? '+ ' + p : '- ' + Math.abs(p)} = ${m * xA + p} = ${yA}$. Les coordonnées de $A$ vérifient l\'équation, donc $A \\in d$.`
          );
        } else {
          return this.makeMcq('2G3', 4, 'Position relative de deux droites',
            "Déterminer si deux droites sont sécantes ou parallèles",

            `Les droites $d_1 : y = 3x - 5$ et $d_2 : y = 3x + 2$ sont-elles :`,
            "Strictement parallèles, car elles ont le même coefficient directeur ($m = 3$) et des ordonnées à l'origine distinctes.",

            [
              "Sécantes en un point unique",

              "Perpendiculaires",

              "Confondues"

            ],
            "Deux droites sont parallèles si et seulement si elles ont le même coefficient directeur.",

            "Observe les coefficients directeurs $m_1 = 3$ et $m_2 = 3$.",

            "Comme $m_1 = m_2 = 3$, les droites ont la même direction. Comme $-5 \\neq 2$, elles sont strictement parallèles."

          );
        }
      }

      // ---------------------------------------------------------------------
      // 2S1 : Statistiques descriptives
      // ---------------------------------------------------------------------
      case '2S1': {
        if (tier === 1) {
          const notes = [this.randInt(8, 12), this.randInt(10, 14), this.randInt(12, 16), this.randInt(14, 18)];
          const sum = notes.reduce((a, b) => a + b, 0);
          const moy = Math.round((sum / notes.length) * 10) / 10;
          return this.makeMcq('2S1', 1, 'Moyenne d\'une série statistique',
            "Calculer la moyenne simple d'une série",

            `Calculer la moyenne de la série de notes : ${notes.join(' ; ')}.`,
            `$\\bar{x} = ${moy}$`,
            [`$\\bar{x} = ${moy + 1}$`, `$\\bar{x} = ${notes[1]}$`, `$\\bar{x} = ${moy - 1.5}$`],
            "La moyenne est la somme de toutes les valeurs divisée par l'effectif total.",

            `Somme = $${notes.join(' + ')} = ${sum}$. Effectif total = ${notes.length}.`,
            `$\\bar{x} = \\frac{${sum}}{${notes.length}} = ${moy}$.`
          );
        } else if (tier === 2) {
          const vals = [2, 5, 7, 8, 11, 14, 19];
          return this.makeMcq('2S1', 2, 'Médiane d\'une série ordonnée',
            "Déterminer la médiane d'un effectif impair",

            "Quelle est la médiane de la série statistique ordonnée suivante : 2 ; 5 ; 7 ; 8 ; 11 ; 14 ; 19 ?",

            "8",

            ['7', '11', '9,4'],
            "La médiane partage la série ordonnée en deux groupes de même effectif.",

            "L'effectif total est $N = 7$ (impair). La médiane est la $\\frac{7+1}{2} = 4$-ème valeur.",

            "La 4ème valeur de la série ordonnée est 8. Il y a 3 valeurs inférieures et 3 valeurs supérieures."

          );
        } else if (tier === 3) {
          return this.makeMcq('2S1', 3, 'Quartiles et dispersion',
            "Déterminer le premier quartile $Q_1$ d'une série",

            "Pour une série statistique ordonnée de 12 valeurs, à quel rang correspond le premier quartile $Q_1$ ?",

            "Le rang 3 (car $\\frac{12}{4} = 3$)",

            ['Le rang 4', 'Le rang 2', 'La moyenne entre le rang 3 et le rang 4'],
            "$Q_1$ est la plus petite valeur de la série telle qu'au moins 25% (un quart) des données lui soient inférieures ou égales.",

            `Calcule $\\frac{N}{4} = \\frac{12}{4} = 3$.`,
            `Puisque $\\frac{12}{4} = 3$ est un entier, le premier quartile $Q_1$ est la valeur située au 3ème rang de la série ordonnée.`
          );
        } else {
          return this.makeMcq('2S1', 4, 'Écart interquartile et étendue',
            "Interpréter les indicateurs de dispersion",

            "On considère une série avec $Q_1 = 8$, $Q_3 = 15$, $x_{\\min} = 3$ et $x_{\\max} = 22$. Quel est son écart interquartile ?",

            "$IQR = Q_3 - Q_1 = 7$",

            ['$IQR = 19$', '$IQR = 11,5$', '$IQR = 14$'],
            "L'écart interquartile est défini par la différence entre le troisième et le premier quartile : $IQR = Q_3 - Q_1$.",

            "Attention à ne pas confondre avec l'étendue ($x_{\\max} - x_{\\min}$).",

            `$IQR = Q_3 - Q_1 = 15 - 8 = 7$. Il mesure la dispersion des 50% de valeurs centrales.`
          );
        }
      }

      // ---------------------------------------------------------------------
      // 2S2 : Probabilités sur un ensemble fini
      // ---------------------------------------------------------------------
      case '2S2': {
        if (tier === 1) {
          return this.makeMcq('2S2', 1, 'Événement contraire',
            "Appliquer la formule $P(\\bar{A}) = 1 - P(A)$",

            "Soit $A$ un événement tel que $P(A) = 0{,}35$. Quelle est la probabilité de son événement contraire $\\bar{A}$ ?",

            "$P(\\bar{A}) = 0{,}65$",

            ['$P(\\bar{A}) = 0{,}35$', '$P(\\bar{A}) = -0{,}35$', '$P(\\bar{A}) = 0{,}75$'],
            "La somme des probabilités d'un événement et de son contraire vaut 1 : $P(A) + P(\\bar{A}) = 1$.",

            `$P(\\bar{A}) = 1 - 0{,}35$.`,
            `$P(\\bar{A}) = 1 - P(A) = 1 - 0{,}35 = 0{,}65$.`
          );
        } else if (tier === 2) {
          return this.makeMcq('2S2', 2, 'Formule de la réunion',
            "Calculer $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$",

            "On donne $P(A) = 0{,}5$, $P(B) = 0{,}4$ et $P(A \\cap B) = 0{,}2$. Calculer $P(A \\cup B)$.",

            "$P(A \\cup B) = 0{,}7$",

            ['$P(A \\cup B) = 0{,}9$', '$P(A \\cup B) = 0{,}3$', '$P(A \\cup B) = 0{,}5$'],
            "Formule fondamentale : $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.",

            `Additionne $P(A)$ et $P(B)$, puis soustrais l\'intersection pour ne pas la compter deux fois.`,
            `$P(A \\cup B) = 0{,}5 + 0{,}4 - 0{,}2 = 0{,}9 - 0{,}2 = 0{,}7$.`
          );
        } else if (tier === 3) {
          return this.makeMcq('2S2', 3, 'Événements incompatibles',
            "Reconnaître et utiliser l'incompatibilité $A \\cap B = \\emptyset$",

            "Deux événements $A$ et $B$ sont dits incompatibles (ou disjoints) si :",

            "$A \\cap B = \\emptyset$ (donc $P(A \\cap B) = 0$)",

            [
              "$P(A) = P(B)$",

              "$P(A \\cup B) = 1$",

              "$P(A) \\times P(B) = 0$"

            ],
            "Incompatible signifie qu'ils ne peuvent pas se réaliser en même temps.",

            "L'intersection de deux événements incompatibles est l'événement impossible.",

            "Deux événements sont incompatibles s'ils n'ont aucune issue commune : $A \\cap B = \\emptyset$, ce qui implique $P(A \\cap B) = 0$."

          );
        } else {
          return this.makeMcq('2S2', 4, 'Arbre de probabilités à deux épreuves',
            "Calculer la probabilité d'un chemin dans un arbre",

            "On lance une pièce équilibrée puis un dé équilibré à 6 faces. Quelle est la probabilité d'obtenir « Pile » et un « 6 » ?",

            "$\\frac{1}{12}$",

            ['$\\frac{1}{8}$', '$\\frac{2}{8}$', '$\\frac{7}{12}$'],
            "Sur un chemin dans un arbre, on multiplie les probabilités des branches.",

            `$P(\\text{Pile}) = \\frac{1}{2}$ et $P(6) = \\frac{1}{6}$.`,
            `Par indépendance des deux tirages, $P(\\text{Pile et } 6) = \\frac{1}{2} \\times \\frac{1}{6} = \\frac{1}{12}$.`
          );
        }
      }

      // ---------------------------------------------------------------------
      // 2S3 : Échantillonnage, fluctuation et algorithmique
      // ---------------------------------------------------------------------
      case '2S3': {
        if (tier === 1) {
          return this.makeMcq('2S3', 1, 'Intervalle de fluctuation au seuil de 95%',
            "Connaître la formule $\\left[p - \\frac{1}{\\sqrt{n}} ; p + \\frac{1}{\\sqrt{n}}\\right]$",

            "Dans les conditions $n \\ge 30$, $0{,}2 \\le p \\le 0{,}8$, quelle est la formule de l'intervalle de fluctuation au seuil de 95% en Seconde ?",

            "$\\left[p - \\frac{1}{\\sqrt{n}} ; p + \\frac{1}{\\sqrt{n}}\\right]$",

            [
              "$\\left[p - \\frac{1}{n} ; p + \\frac{1}{n}\\right]$",

              "$\\left[p - 2\\sqrt{n} ; p + 2\\sqrt{n}\\right]$",

              "$\\left[0 ; 1\\right]$"

            ],
            "L'amplitude dépend de l'inverse de la racine carrée de la taille de l'échantillon $n$.",

            "Le rayon de l'intervalle au niveau seconde est $\\frac{1}{\\sqrt{n}}$.",

            "L'intervalle de fluctuation à 95% est donné par $I = \\left[p - \\frac{1}{\\sqrt{n}} ; p + \\frac{1}{\\sqrt{n}}\\right]$."

          );
        } else if (tier === 2) {
          const n = 100;
          const p = 0.5;
          return this.makeMcq('2S3', 2, 'Calcul d\'un intervalle de fluctuation',
            "Calculer numériquement les bornes de l'intervalle",

            `Pour $p = 0{,}5$ et un échantillon de taille $n = 100$, quel est l'intervalle de fluctuation à 95% ?`,
            "$[0{,}40 ; 0{,}60]$",

            ['$[0{,}45 ; 0{,}55]$', '$[0{,}35 ; 0{,}65]$', '$[0{,}49 ; 0{,}51]$'],
            "Calcule $\\frac{1}{\\sqrt{n}} = \\frac{1}{\\sqrt{100}} = \\frac{1}{10} = 0{,}10$.",

            `Soustrait et ajoute $0{,}10$ à la proportion $p = 0{,}50$.`,
            `$\\frac{1}{\\sqrt{100}} = 0{,}10$. Les bornes sont donc $0{,}5 - 0{,}1 = 0{,}40$ et $0{,}5 + 0{,}1 = 0{,}60$, d\'où $I = [0{,}40 ; 0{,}60]$.`
          );
        } else if (tier === 3) {
          return this.makeMcq('2S3', 3, 'Prise de décision sur un échantillon',
            "Rejeter ou accepter une hypothèse au seuil de 95%",

            "Une pièce est supposée équilibrée ($p = 0{,}5$). L'intervalle de fluctuation à 95% pour $n = 100$ est $[0{,}40 ; 0{,}60]$. Sur 100 lancers, on observe 68 « Pile ». Que conclut-on ?",

            "La fréquence observée $f = 0{,}68 \\notin [0{,}40 ; 0{,}60]$ : on rejette l'hypothèse que la pièce est équilibrée au risque de 5%.",

            [
              "On accepte que la pièce est équilibrée car 68 est proche de 50.",

              "On ne peut rien conclure avec seulement 100 lancers.",

              "La pièce est parfaitement équilibrée car $f > 0{,}5$."

            ],
            "Compare la fréquence observée $f = \\frac{68}{100}$ aux bornes de l'intervalle de fluctuation.",

            "Si $f$ n'est pas dans l'intervalle, la variation n'est pas imputable au seul hasard avec 95% de certitude.",

            "La fréquence $f = 0{,}68$ sort de l'intervalle $[0{,}40 ; 0{,}60]$. On rejette donc l'hypothèse d'équilibre de la pièce au seuil de confiance de 95%."

          );
        } else {
          return this.makeMcq('2S3', 4, 'Algorithme Python de simulation',
            "Comprendre une boucle de simulation de tirages en Python",

            "En Python, que renvoie le code suivant : `sum([random.random() < 0.5 for i in range(100)]) / 100` ?",

            "La fréquence de succès observée sur un échantillon simulé de 100 tirages indépendants de probabilité 0,5.",

            [
              "Toujours exactement la valeur 0,5.",

              "La moyenne des nombres entiers entre 0 et 100.",

              "Une erreur de syntaxe car sum ne prend pas de booléens."

            ],
            "`random.random() < 0.5` renvoie True avec une probabilité de 50%, ce qui vaut 1 dans la somme.",

            "Diviser par 100 donne la proportion d'occurrences vraies (la fréquence empirique).",

            "Le script simule 100 épreuves de Bernoulli de paramètre $p = 0{,}5$, compte le nombre de succès (True = 1) et calcule la fréquence relative correspondante."

          );
        }
      }

      default:
        return this.generateDefaultLycee(chapterId, tier);
    }
  },

  // =========================================================================
  // CLASSE DE PREMIÈRE SPÉCIALITÉ (11 chapitres)
  // =========================================================================
  generate1ere(chapterId, tier) {
    switch (chapterId) {
      // ---------------------------------------------------------------------
      // 1A1 : Polynôme du second degré
      // ---------------------------------------------------------------------
      case '1A1': {
        const x1 = this.randInt(-4, 3);
        const diff = this.randInt(1, 5);
        const x2 = x1 + diff;
        const a = this.randChoice([1, -1, 2]);
        const b = -a * (x1 + x2);
        const c = a * x1 * x2;
        const delta = b * b - 4 * a * c;
        if (tier === 1) {
          return this.makeMcq('1A1', 1, 'Calcul du discriminant Delta',
            "Calculer Delta = b^2 - 4ac et déterminer le nombre de racines",

            `Calculer le discriminant $\\Delta$ du trinôme $P(x) = ${a === 1 ? '' : (a === -1 ? '-' : a)}x^2 ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}x ${c >= 0 ? '+ ' + c : '- ' + Math.abs(c)}$.`,
            `$\\Delta = ${delta}$ (donc 2 racines réelles distinctes)`,
            [`$\\Delta = ${delta + 8}$`, `$\\Delta = -${delta}$`, `$\\Delta = 0$`],
            "Formule : $\\Delta = b^2 - 4ac$.",

            `Ici $a = ${a}$, $b = ${b}$ et $c = ${c}$.`,
            `$\\Delta = (${b})^2 - 4(${a})(${c}) = ${b * b} - (${4 * a * c}) = ${delta} > 0$. Le trinôme admet donc deux racines réelles distinctes.`
          );
        } else if (tier === 2) {
          return this.makeMcq('1A1', 2, 'Racines réelles d\'un trinôme',
            "Calculer les racines à l'aide des formules quadratiques",

            `Résoudre dans $\\mathbb{R}$ l'équation : $x^2 ${-(x1 + x2) >= 0 ? '+ ' + -(x1 + x2) : '- ' + Math.abs(-(x1 + x2))}x ${x1 * x2 >= 0 ? '+ ' + (x1 * x2) : '- ' + Math.abs(x1 * x2)} = 0$.`,
            `$S = \\{${x1}, ${x2}\\}$`,
            [`$S = \\{${-x1}, ${-x2}\\}$`, `$S = \\{${x1 + 1}, ${x2 - 1}\\}$`, `$S = \\emptyset$`],
            "Les racines sont données par $x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$.",

            `Ici la somme des racines est $x_1 + x_2 = ${x1 + x2}$ et le produit est $x_1 x_2 = ${x1 * x2}$.`,
            `Le discriminant est strictement positif et les deux solutions réelles distinctes sont $x_1 = ${x1}$ et $x_2 = ${x2}$.`
          );
        } else if (tier === 3) {
          const alpha = this.randInt(-3, 3);
          const beta = this.randInt(-5, 5);
          return this.makeMcq('1A1', 3, 'Forme canonique d\'un trinôme',
            "Identifier les coordonnées du sommet de la parabole",

            `Donner les coordonnées du sommet $S$ de la parabole d'équation $y = 2(x ${alpha >= 0 ? '- ' + alpha : '+ ' + Math.abs(alpha)})^2 + ${beta}$.`,
            `$S(${alpha} ; ${beta})$`,
            [`$S(${-alpha} ; ${beta})$`, `$S(${alpha} ; ${-beta})$`, `$S(${beta} ; ${alpha})$`],
            "La forme canonique $a(x - \\alpha)^2 + \\beta$ a pour sommet $S(\\alpha ; \\beta)$.",

            "Attention au signe devant $\\alpha$ dans $(x - \\alpha)$.",

            `L\'expression s\'annule en $x = ${alpha}$, l\'ordonnée correspondante est $y = ${beta}$. Le sommet est donc $S(${alpha} ; ${beta})$.`
          );
        } else {
          const signStr = a > 0 ? 'positif' : 'négatif';
          return this.makeMcq('1A1', 4, 'Signe d\'un trinôme du second degré',
            "Règle du signe d'un trinôme : du signe de a à l'extérieur des racines",

            `Quel est le signe du trinôme $P(x) = (x - ${x1})(x - ${x2})$ pour $x \\in ]${x1} ; ${x2}[$ ?`,
            "Strictement négatif (du signe opposé de a)",

            ['Strictement positif', 'Nul', 'Toujours positif sur R'],
            "Un trinôme à deux racines réelles est du signe opposé de $a$ entre les racines.",

            `Ici le coefficient principal est $a = 1 > 0$, donc entre $${x1}$ et $${x2}$, le trinôme est strictement négatif.`,
            `Pour $x \\in ]${x1} ; ${x2}[$, les facteurs $(x - ${x1})$ et $(x - ${x2})$ ont des signes contraires, leur produit est donc strictement négatif.`
          );
        }
      }

      // ---------------------------------------------------------------------
      // 1A2 : Nombre dérivé, taux de variation et tangente à une courbe
      // ---------------------------------------------------------------------
      case '1A2': {
        const a = this.randInt(1, 4);
        const x0 = this.randInt(-2, 3);
        const fPrime = 2 * a * x0;
        const fX0 = a * x0 * x0;
        if (tier === 1) {
          return this.makeMcq('1A2', 1, 'Interprétation géométrique du nombre dérivé',
            "Associer nombre dérivé et coefficient directeur de la tangente",

            "Que représente géométriquement le nombre dérivé $f'(a)$ pour la courbe représentative $\\mathcal{C}_f$ ?",

            "Le coefficient directeur (la pente) de la droite tangente à la courbe au point d'abscisse $a$.",

            [
              "L'ordonnée à l'origine de la sécante.",

              "La longueur de la corde entre l'origine et le point.",

              "L'aire sous la courbe entre 0 et $a$."

            ],
            "Pense à la limite des sécantes quand le pas tend vers 0.",

            "La tangente est la position limite de la sécante.",

            "Par définition, $f'(a) = \\lim_{h \\to 0} \\frac{f(a+h)-f(a)}{h}$ est la pente (coefficient directeur) de la tangente à $\\mathcal{C}_f$ en $(a, f(a))$."

          );
        } else if (tier === 2) {
          return this.makeMcq('1A2', 2, 'Calcul du nombre dérivé pour la fonction carré',
            "Appliquer la dérivée $(x^2)' = 2x$",

            `Soit $f(x) = ${a}x^2$. Calculer le nombre dérivé $f\'(${x0})$.`,
            `$f\'(${x0}) = ${fPrime}$`,
            [`$f\'(${x0}) = ${fX0}$`, `$f\'(${x0}) = ${fPrime + 2}$`, `$f\'(${x0}) = ${a * x0}$`],
            "La fonction dérivée de $f(x) = a x^2$ est $f'(x) = 2ax$.",

            `Calcule $2 \\times ${a} \\times (${x0})$.`,
            `$f\'(x) = 2 \\times ${a}x = ${2 * a}x$. Donc $f\'(${x0}) = ${2 * a} \\times (${x0}) = ${fPrime}$.`
          );
        } else if (tier === 3) {
          const p = fX0 - fPrime * x0;
          return this.makeMcq('1A2', 3, 'Équation de la tangente',
            "Appliquer la formule $y = f'(a)(x - a) + f(a)$",

            `Déterminer l'équation de la tangente à $\\mathcal{C}_f$ au point d'abscisse $a = ${x0}$ sachant que $f(${x0}) = ${fX0}$ et $f\'(${x0}) = ${fPrime}$.`,
            `$y = ${fPrime}x ${p >= 0 ? '+ ' + p : '- ' + Math.abs(p)}$`,
            [`$y = ${fPrime}x + ${fX0}$`, `$y = ${fX0}x + ${fPrime}$`, `$y = ${fPrime}(x + ${x0}) - ${fX0}$`],
            "Formule fondamentale : $y = f'(a)(x - a) + f(a)$.",

            `Développe $y = ${fPrime}(x - (${x0})) + ${fX0}$.`,
            `$y = ${fPrime}(x - (${x0})) + ${fX0} = ${fPrime}x - (${fPrime * x0}) + ${fX0} = ${fPrime}x ${p >= 0 ? '+ ' + p : '- ' + Math.abs(p)}$.`
          );
        } else {
          return this.makeMcq('1A2', 4, 'Tangente horizontale et extremum',
            "Interpréter la condition $f'(x) = 0$",

            "La courbe d'une fonction dérivable $f$ admet une tangente horizontale au point d'abscisse $x_0$ si et seulement si :",

            "$f'(x_0) = 0$",

            ['$f(x_0) = 0$', '$f\'(x_0) = 1$', '$f(x_0) = x_0$'],
            "Une droite horizontale a un coefficient directeur nul ($m = 0$).",

            "Le coefficient directeur de la tangente est donné par le nombre dérivé.",

            "Une tangente horizontale est une droite d'équation $y = k$ de pente nulle. On a donc $f'(x_0) = 0$."

          );
        }
      }

      // ---------------------------------------------------------------------
      // 1A3 : Fonction dérivée, règles de dérivation et variations
      // ---------------------------------------------------------------------
      case '1A3': {
        const a = this.randInt(2, 5);
        const b = this.randInt(1, 6);
        if (tier === 1) {
          const n = this.randChoice([3, 4, 5]);
          return this.makeMcq('1A3', 1, 'Dérivation d\'un monôme',
            "Appliquer la règle de dérivation $(x^n)' = n x^{n-1}$",

            `Déterminer la fonction dérivée de $f(x) = ${a}x^${n}$.`,
            `$f\'(x) = ${a * n}x^${n - 1}$`,
            [`$f\'(x) = ${a}x^${n - 1}$`, `$f\'(x) = ${a * n}x^${n}$`, `$f\'(x) = \\frac{${a}}{${n}}x^${n + 1}$`],
            "Règle : $(c \\cdot x^n)' = c \\cdot n x^{n-1}$.",

            `Multiplie le coefficient $${a}$ par l\'exposant $${n}$, puis diminue l\'exposant de 1.`,
            `$f\'(x) = ${a} \\times ${n}x^{${n}-1} = ${a * n}x^${n - 1}$.`
          );
        } else if (tier === 2) {
          return this.makeMcq('1A3', 2, 'Dérivée d\'un produit $uv$',
            "Appliquer la formule $(uv)' = u\'v + uv\'$",

            `Déterminer la dérivée de $f(x) = (${a}x + ${b})e^x$.`,
            `$f\'(x) = (${a}x + ${a + b})e^x$`,
            [`$f\'(x) = ${a}e^x$`, `$f\'(x) = (${a}x + ${b})e^x$`, `$f\'(x) = (${a}x + ${b * a})e^x$`],
            "Pose $u(x) = ${a}x + ${b}$ et $v(x) = e^x$. Alors $(uv)' = u\'v + uv\'$.",

            `$u\'(x) = ${a}$ et $v\'(x) = e^x$. Factorise par $e^x$.`,
            `$f\'(x) = ${a} \\times e^x + (${a}x + ${b}) \\times e^x = [${a} + ${a}x + ${b}]e^x = (${a}x + ${a + b})e^x$.`
          );
        } else if (tier === 3) {
          return this.makeMcq('1A3', 3, 'Lien entre signe de la dérivée et variations',
            "Théorème fondamental de monotonie",

            "Si pour tout $x \\in ]1 ; 5[$, $f'(x) > 0$, que peut-on affirmer avec certitude ?",

            "La fonction $f$ est strictement croissante sur $]1 ; 5[$.",

            [
              "La fonction $f$ est positive sur $]1 ; 5[$.",

              "La fonction $f$ est strictement décroissante sur $]1 ; 5[$.",

              "La courbe de $f$ est située au-dessus de l'axe des abscisses."

            ],
            "Ne confonds pas le signe de $f(x)$ et le signe de sa dérivée $f'(x)$.",

            "Une dérivée positive indique que la pente des tangentes est ascendante.",

            "D'après le théorème de dérivation, si $f'(x) > 0$ sur un intervalle, alors la fonction $f$ y est strictement croissante."

          );
        } else {
          return this.makeMcq('1A3', 4, 'Extremum local et changement de signe de $f\'$',
            "Caractérisation d'un extremum local",

            "Une fonction $f$ admet un extremum local (maximum ou minimum) en $x_0$ si :",

            "$f'(x_0) = 0$ et $f'$ change de signe en $x_0$.",

            [
              "$f'(x_0) = 0$ sans que $f'$ change nécessairement de signe.",

              "$f(x_0) = 0$.",

              "$f'(x)$ est toujours constante."

            ],
            "Pense à la fonction cube $x \\mapsto x^3$ en 0 : sa dérivée $3x^2$ s'annule en 0 sans changer de signe, et il n'y a pas d'extremum !",

            "Il faut impérativement que la dérivée passe de positive à négative ou inversement.",

            "L'annulation seule ne suffit pas : pour avoir un extremum local, $f'$ doit s'annuler ET changer de signe en $x_0$."

          );
        }
      }

      // ---------------------------------------------------------------------
      // 1A4 : La fonction exponentielle : définition, propriétés et étude
      // ---------------------------------------------------------------------
      case '1A4': {
        const a = this.randInt(2, 5);
        const b = this.randInt(2, 6);
        if (tier === 1) {
          return this.makeMcq('1A4', 1, 'Propriétés algébriques de l\'exponentielle',
            "Simplifier des puissances d'exponentielles",

            `Simplifier l'expression : $A = \\frac{e^{${a}x} \\times e^{${b}x}}{e^{2x}}$.`,
            `$A = e^{${a + b - 2}x}$`,
            [`$A = e^{${a * b - 2}x}$`, `$A = e^{${a + b + 2}x}$`, `$A = e^{${(a + b) / 2}x}$`],
            "Propriétés : $e^u \\times e^v = e^{u+v}$ et $\\frac{e^u}{e^w} = e^{u-w}$.",

            `Additionne les exposants au numérateur : $(${a} + ${b})x = ${a + b}x$, puis soustrais $2x$.`,
            `$A = \\frac{e^{(${a}+${b})x}}{e^{2x}} = e^{(${a + b} - 2)x} = e^{${a + b - 2}x}$.`
          );
        } else if (tier === 2) {
          const k = this.randInt(2, 7);
          return this.makeMcq('1A4', 2, 'Dérivée de $e^{kx + b}$',
            "Appliquer la formule de dérivation $(e^{u})' = u\' e^u$",

            `Déterminer la dérivée de la fonction $f(x) = e^{${k}x - 1}$.`,
            `$f\'(x) = ${k}e^{${k}x - 1}$`,
            [`$f\'(x) = e^{${k}x - 1}$`, `$f\'(x) = ${k}x e^{${k}x - 1}$`, `$f\'(x) = \\frac{1}{${k}}e^{${k}x - 1}$`],
            "Formule : $(e^{ax+b})' = a e^{ax+b}$.",

            `Ici $u(x) = ${k}x - 1$, donc $u\'(x) = ${k}$.`,
            `D\'après la formule $(e^u)\' = u\' e^u$, on obtient $f\'(x) = ${k}e^{${k}x - 1}$.`
          );
        } else if (tier === 3) {
          const x0 = this.randInt(1, 5);
          return this.makeMcq('1A4', 3, 'Résolution d\'équations exponentielles',
            "Utiliser la stricte croissance : $e^X = e^Y \\iff X = Y$",

            `Résoudre dans $\\mathbb{R}$ l'équation : $e^{2x - 3} = e^{${2 * x0 - 3}}$.`,
            `$S = \\{${x0}\\}$`,
            [`$S = \\{${x0 + 1}\\}$`, `$S = \\{0, ${x0}\\}$`, `$S = \\emptyset$`],
            "La fonction exponentielle est strictement croissante sur $\\mathbb{R}$ : $e^A = e^B \\iff A = B$.",

            `Identifie les exposants : $2x - 3 = ${2 * x0 - 3}$.`,
            `$2x - 3 = ${2 * x0 - 3} \\iff 2x = ${2 * x0} \\iff x = ${x0}$. Donc $S = \\{${x0}\\}$.`
          );
        } else {
          return this.makeMcq('1A4', 4, 'Signe de la fonction exponentielle',
            "Stricte positivité : pour tout réel $x$, $e^x > 0$",

            "Pour quel ensemble de réels $x$ l'expression $e^x$ est-elle strictement positive ?",

            "Pour tout réel $x \\in \\mathbb{R}$",

            ['Uniquement pour $x > 0$', 'Uniquement pour $x \\ge 1$', 'Pour tout $x \\neq 0$'],
            "Rappelle-toi la courbe de l'exponentielle : elle est toujours strictement au-dessus de l'axe des abscisses.",

            "Même pour $x$ négatif (par exemple $x = -100$), $e^{-100} = \\frac{1}{e^{100}} > 0$.",

            "Pour tout réel $x \\in \\mathbb{R}$, $e^x > 0$. L'exponentielle ne s'annule jamais et ne devient jamais négative."

          );
        }
      }

      // ---------------------------------------------------------------------
      // 1A5 : Généralités sur les suites numériques et sens de variation
      // ---------------------------------------------------------------------
      case '1A5': {
        const u0 = this.randInt(1, 5);
        const r = this.randInt(2, 6);
        if (tier === 1) {
          const n = 3;
          const u3 = u0 + n * r;
          return this.makeMcq('1A5', 1, 'Calcul de termes d\'une suite explicite',
            "Calculer $u_n = f(n)$ pour une valeur donnée de $n$",

            `Soit la suite définie par $u_n = ${r}n + ${u0}$ pour tout $n \\in \\mathbb{N}$. Calculer le terme $u_3$.`,
            `$u_3 = ${u3}$`,
            [`$u_3 = ${u3 - r}$`, `$u_3 = ${u3 + 2}$`, `$u_3 = ${r * 3}$`],
            "Remplace l'indice $n$ par 3 dans la formule explicite.",

            `$u_3 = ${r} \\times 3 + ${u0}$.`,
            `$u_3 = ${r} \\times 3 + ${u0} = ${3 * r} + ${u0} = ${u3}$.`
          );
        } else if (tier === 2) {
          const u1 = 2 * u0 + 1;
          const u2 = 2 * u1 + 1;
          return this.makeMcq('1A5', 2, 'Suite définie par récurrence',
            "Calculer pas à pas les termes d'une suite récurrente",

            `Soit la suite définie par $u_0 = ${u0}$ et pour tout $n \\in \\mathbb{N}$, $u_{n+1} = 2u_n + 1$. Calculer $u_2$.`,
            `$u_2 = ${u2}$`,
            [`$u_2 = ${u1}$`, `$u_2 = ${u2 + 2}$`, `$u_2 = ${4 * u0 + 1}$`],
            "Calcule d'abord $u_1 = 2u_0 + 1$, puis utilise $u_1$ pour calculer $u_2 = 2u_1 + 1$.",

            `$u_1 = 2(${u0}) + 1 = ${u1}$.`,
            `$u_1 = 2(${u0}) + 1 = ${u1}$, puis $u_2 = 2(${u1}) + 1 = ${2 * u1} + 1 = ${u2}$.`
          );
        } else if (tier === 3) {
          return this.makeMcq('1A5', 3, 'Sens de variation par différence',
            "Étudier le signe de $u_{n+1} - u_n$",

            "Pour une suite $(u_n)$, on établit que pour tout $n \\in \\mathbb{N}$, $u_{n+1} - u_n = \\frac{3}{n + 1}$. Que peut-on en déduire ?",

            "La suite $(u_n)$ est strictement croissante.",

            [
              "La suite $(u_n)$ est strictement décroissante.",

              "La suite $(u_n)$ est constante.",

              "On ne peut rien conclure sans connaître $u_0$."

            ],
            "Observe le signe du quotient $\\frac{3}{n + 1}$ pour tout entier naturel $n \\ge 0$.",

            "Comme $n \\ge 0$, $n + 1 > 0$ donc le quotient est strictement positif.",

            "Puisque pour tout $n$, $u_{n+1} - u_n > 0$, chaque terme est strictement supérieur au précédent : la suite est strictement croissante."

          );
        } else {
          return this.makeMcq('1A5', 4, 'Suite majorée et bornée',
            "Comprendre les définitions de majorant et minorant",

            "On dit qu'une suite $(u_n)$ est majorée s'il existe un réel $M$ tel que :",

            "Pour tout $n \\in \\mathbb{N}$, $u_n \\le M$.",

            [
              "Pour au moins un $n \\in \\mathbb{N}$, $u_n \\le M$.",

              "Pour tout $n \\in \\mathbb{N}$, $u_n \\ge M$.",

              "$\\lim_{n \\to +\\infty} u_n = M$."

            ],
            "Un majorant est une barrière supérieure que la suite ne dépasse jamais.",

            "La propriété doit être vérifiée pour TOUS les indices $n$.",

            "Par définition, $(u_n)$ est majorée par $M$ si aucun terme de la suite ne dépasse $M$ : $\\forall n \\in \\mathbb{N}, u_n \\le M$."

          );
        }
      }

      // ---------------------------------------------------------------------
      // 1A6 : Suites arithmétiques et suites géométriques
      // ---------------------------------------------------------------------
      case '1A6': {
        const u0 = this.randInt(2, 6);
        const r = this.randInt(3, 7);
        const q = this.randChoice([2, 3]);
        if (tier === 1) {
          const n = 10;
          const u10 = u0 + n * r;
          return this.makeMcq('1A6', 1, 'Formule explicite suite arithmétique',
            "Appliquer la formule $u_n = u_0 + nr$",

            `Soit $(u_n)$ une suite arithmétique de premier terme $u_0 = ${u0}$ et de raison $r = ${r}$. Calculer $u_{10}$.`,
            `$u_{10} = ${u10}$`,
            [`$u_{10} = ${u0 + r * 9}$`, `$u_{10} = ${u0 * Math.pow(r, 2)}$`, `$u_{10} = ${u10 + 5}$`],
            "Formule fondamentale : $u_n = u_0 + n \\times r$.",

            `Remplace $n$ par 10 : $u_{10} = ${u0} + 10 \\times ${r}$.`,
            `$u_{10} = ${u0} + 10 \\times ${r} = ${u0} + ${10 * r} = ${u10}$.`
          );
        } else if (tier === 2) {
          const n = 4;
          const u4 = u0 * Math.pow(q, n);
          return this.makeMcq('1A6', 2, 'Formule explicite suite géométrique',
            "Appliquer la formule $u_n = u_0 \\times q^n$",

            `Soit $(v_n)$ une suite géométrique de premier terme $v_0 = ${u0}$ et de raison $q = ${q}$. Calculer $v_4$.`,
            `$v_4 = ${u4}$`,
            [`$v_4 = ${u0 * Math.pow(q, 3)}$`, `$v_4 = ${u0 + 4 * q}$`, `$v_4 = ${u4 * 2}$`],
            "Formule fondamentale : $v_n = v_0 \\times q^n$.",

            `Calcule d\'abord $q^4 = ${q}^4 = ${Math.pow(q, 4)}$, puis multiplie par $v_0 = ${u0}$.`,
            `$v_4 = ${u0} \\times ${q}^4 = ${u0} \\times ${Math.pow(q, 4)} = ${u4}$.`
          );
        } else if (tier === 3) {
          const n = 10;
          const S = (n * (n + 1)) / 2;
          return this.makeMcq('1A6', 3, 'Somme des premiers entiers naturels',
            "Appliquer la formule de Gauss $1 + 2 + ... + n = \\frac{n(n+1)}{2}$",

            `Calculer la somme : $S = 1 + 2 + 3 + \\dots + ${n}$.`,
            `$S = ${S}$`,
            [`$S = ${S - 5}$`, `$S = ${n * n}$`, `$S = ${S + 10}$`],
            "Formule historique de Gauss : $\\sum_{k=1}^n k = \\frac{n(n+1)}{2}$.",

            `Remplace $n$ par ${n} : $\\frac{${n} \\times (${n} + 1)}{2}$.`,
            `$S = \\frac{${n} \\times ${n + 1}}{2} = \\frac{${n * (n + 1)}}{2} = ${S}$.`
          );
        } else {
          return this.makeMcq('1A6', 4, 'Somme des termes d\'une suite géométrique',
            "Appliquer la formule $1 + q + q^2 + ... + q^n = \\frac{1 - q^{n+1}}{1 - q}$",

            "Quelle est l'expression simplifiée de la somme $S = 1 + q + q^2 + \\dots + q^n$ pour $q \\neq 1$ ?",

            "$\\frac{1 - q^{n+1}}{1 - q}$",

            ['$\\frac{1 - q^n}{1 - q}$', '$\\frac{q^{n+1} - 1}{q}$', '$\\frac{n(q+1)}{2}$'],
            "Pense au nombre total de termes : de l'exposant 0 à l'exposant $n$, il y a $n+1$ termes.",

            "L'exposant au numérateur est le nombre de termes, soit $n+1$.",

            "D'après la formule du cours, la somme des $n+1$ premiers termes d'une suite géométrique de raison $q \\neq 1$ est $\\frac{1 - q^{n+1}}{1 - q}$."

          );
        }
      }

      // ---------------------------------------------------------------------
      // 1G1 : Trigonométrie, cercle trigonométrique et fonctions sinus et cosinus
      // ---------------------------------------------------------------------
      case '1G1': {
        if (tier === 1) {
          const angles = [
            { angle: '\\frac{\\pi}{3}', cos: '\\frac{1}{2}', sin: '\\frac{\\sqrt{3}}{2}' },
            { angle: '\\frac{\\pi}{6}', cos: '\\frac{\\sqrt{3}}{2}', sin: '\\frac{1}{2}' },
            { angle: '\\frac{\\pi}{4}', cos: '\\frac{\\sqrt{2}}{2}', sin: '\\frac{\\sqrt{2}}{2}' },
            { angle: '\\pi', cos: '-1', sin: '0' }
          ];
          const pick = this.randChoice(angles);
          return this.makeMcq('1G1', 1, 'Valeurs remarquables du cercle trigonométrique',
            "Connaître les cosinus et sinus des angles fondamentaux",

            `Quelle est la valeur exacte de $\\cos\\left(${pick.angle}\\right)$ ?`,
            `$${pick.cos}$`,
            [`$${pick.sin}$`, `$0$`, `$-\\frac{1}{2}$`],
            "Rappelle-toi les valeurs sur le premier quadrant : $0, \\pi/6, \\pi/4, \\pi/3, \\pi/2$.",

            `Le cosinus correspond à l\'abscisse du point sur le cercle trigonométrique.`,
            `Sur le cercle trigonométrique, $\\cos\\left(${pick.angle}\\right) = ${pick.cos}$.`
          );
        } else if (tier === 2) {
          return this.makeMcq('1G1', 2, 'Relation fondamentale trigonométrique',
            "Appliquer $\\cos^2(x) + \\sin^2(x) = 1$",

            "Sachant que $x \\in [0 ; \\pi]$ et que $\\sin(x) = \\frac{3}{5}$, quelle est la valeur de $\\cos^2(x)$ ?",

            "$\\cos^2(x) = \\frac{16}{25}$",

            ['$\\cos^2(x) = \\frac{2}{5}$', '$\\cos^2(x) = \\frac{9}{25}$', '$\\cos^2(x) = 1$'],
            "Formule : $\\cos^2(x) + \\sin^2(x) = 1 \\iff \\cos^2(x) = 1 - \\sin^2(x)$.",

            `Calcule $\\sin^2(x) = \\left(\\frac{3}{5}\\right)^2 = \\frac{9}{25}$.`,
            `$\\cos^2(x) = 1 - \\left(\\frac{3}{5}\\right)^2 = 1 - \\frac{9}{25} = \\frac{16}{25}$.`
          );
        } else if (tier === 3) {
          return this.makeMcq('1G1', 3, 'Angles associés et symétries',
            "Formules de symétrie du cercle trigonométrique",

            "Pour tout réel $x$, laquelle de ces égalités est toujours vérifiée ?",

            "$\\cos(-x) = \\cos(x)$ et $\\sin(-x) = -\\sin(x)$",

            [
              "$\\cos(-x) = -\\cos(x)$ et $\\sin(-x) = \\sin(x)$",

              "$\\cos(x + \\pi) = \\cos(x)$",

              "$\\sin(x + \\pi) = \\sin(x)$"

            ],
            "La fonction cosinus est paire (symétrie par rapport à l'axe des abscisses), la fonction sinus est impaire.",

            "L'opposé $-x$ est le symétrique de $x$ par rapport à l'axe horizontal des cosinus.",

            "Par symétrie axiale par rapport à l'axe des abscisses, $\\cos(-x) = \\cos(x)$ et $\\sin(-x) = -\\sin(x)$."

          );
        } else {
          return this.makeMcq('1G1', 4, 'Résolution d\'équations trigonométriques',
            "Résoudre dans $[-\\pi ; \\pi]$ l'équation $\\cos(x) = \\cos(a)$",

            "Résoudre dans l'intervalle $[-\\pi ; \\pi]$ l'équation : $\\cos(x) = \\frac{1}{2}$.",

            "$S = \\left\\{-\\frac{\\pi}{3}, \\frac{\\pi}{3}\\right\\}$",

            [
              "$S = \\left\\{\\frac{\\pi}{3}\\right\\}$",

              "$S = \\left\\{-\\frac{\\pi}{6}, \\frac{\\pi}{6}\\right\\}$",

              "$S = \\left\\{\\frac{\\pi}{3}, \\frac{2\\pi}{3}\\right\\}$"

            ],
            "L'équation $\\cos(x) = \\cos(\\alpha)$ admet deux solutions opposées sur $[-\\pi ; \\pi]$ : $\\alpha$ et $-\\alpha$.",

            `Comme $\\cos(\\pi/3) = 1/2$, les deux solutions sont $\\pi/3$ et $-\\pi/3$.`,
            `Puisque la fonction cosinus est paire, $\\cos(-\\pi/3) = \\cos(\\pi/3) = 1/2$. Les deux solutions dans $[-\\pi ; \\pi]$ sont $-\\frac{\\pi}{3}$ et $\\frac{\\pi}{3}$.`
          );
        }
      }

      // ---------------------------------------------------------------------
      // 1G2 : Le produit scalaire dans le plan : définitions et propriétés
      // ---------------------------------------------------------------------
      case '1G2': {
        const x1 = this.randInt(-4, 4);
        const y1 = this.randInt(-4, 4);
        const x2 = this.randInt(-4, 4);
        const y2 = this.randInt(-4, 4);
        const dot = x1 * x2 + y1 * y2;
        if (tier === 1) {
          return this.makeMcq('1G2', 1, 'Expression analytique du produit scalaire',
            "Calculer $\\vec{u} \\cdot \\vec{v} = xx' + yy'$ dans une base orthonormée",

            `Dans un repère orthonormé, on donne $\\vec{u}(${x1} ; ${y1})$ et $\\vec{v}(${x2} ; ${y2})$. Calculer $\\vec{u} \\cdot \\vec{v}$.`,
            `$\\vec{u} \\cdot \\vec{v} = ${dot}$`,
            [`$\\vec{u} \\cdot \\vec{v} = ${dot + 3}$`, `$\\vec{u} \\cdot \\vec{v} = ${x1 * y2 - y1 * x2}$`, `$\\vec{u} \\cdot \\vec{v} = ${-dot}$`],
            "Formule analytique : $\\vec{u} \\cdot \\vec{v} = x x' + y y'$.",

            `Calcule $(${x1}) \\times (${x2}) + (${y1}) \\times (${y2})$.`,
            `$\\vec{u} \\cdot \\vec{v} = (${x1})(${x2}) + (${y1})(${y2}) = ${x1 * x2} + (${y1 * y2}) = ${dot}$.`
          );
        } else if (tier === 2) {
          const uNorm = this.randChoice([3, 4, 5]);
          const vNorm = this.randChoice([2, 6, 8]);
          const expectedDot = (uNorm * vNorm) / 2;
          return this.makeMcq('1G2', 2, 'Formule avec cosinus de l\'angle',
            "Appliquer $\\vec{u} \\cdot \\vec{v} = ||\\vec{u}|| \\times ||\\vec{v}|| \\times \\cos(\\theta)$",

            `Soient deux vecteurs de normes $\|\\vec{u}\| = ${uNorm}$ et $\|\\vec{v}\| = ${vNorm}$ formant un angle $\\theta = \\frac{\\pi}{3}$. Calculer $\\vec{u} \\cdot \\vec{v}$.`,
            `$\\vec{u} \\cdot \\vec{v} = ${expectedDot}$`,
            [`$\\vec{u} \\cdot \\vec{v} = ${uNorm * vNorm}$`, `$\\vec{u} \\cdot \\vec{v} = ${expectedDot * 2}$`, `$\\vec{u} \\cdot \\vec{v} = ${uNorm + vNorm}$`],
            "Formule : $\\vec{u} \\cdot \\vec{v} = \|\\vec{u}\| \\times \|\\vec{v}\| \\times \\cos(\\theta)$.",

            `Rappelle-toi que $\\cos(\\pi/3) = 1/2$.`,
            `$\\vec{u} \\cdot \\vec{v} = ${uNorm} \\times ${vNorm} \\times \\cos\\left(\\frac{\\pi}{3}\\right) = ${uNorm * vNorm} \\times \\frac{1}{2} = ${expectedDot}$.`
          );
        } else if (tier === 3) {
          return this.makeMcq('1G2', 3, 'Critère d\'orthogonalité',
            "Caractériser l'orthogonalité par la nullité du produit scalaire",

            "Deux vecteurs non nuls $\\vec{u}$ et $\\vec{v}$ sont orthogonaux si et seulement si :",

            "$\\vec{u} \\cdot \\vec{v} = 0$",

            ['$\\det(\\vec{u}, \\vec{v}) = 0$', '$\|\\vec{u}\| = \|\\vec{v}\|$', '$\\vec{u} \\cdot \\vec{v} = 1$'],
            "Pense à l'angle droit : $\\theta = \\pi/2$ et $\\cos(\\pi/2) = 0$.",

            "Deux vecteurs perpendiculaires ont une projection orthogonale nulle.",

            "L'angle entre les vecteurs est de 90° : comme $\\cos(\\pi/2) = 0$, la formule avec le cosinus donne immédiatement $\\vec{u} \\cdot \\vec{v} = 0$."

          );
        } else {
          return this.makeMcq('1G2', 4, 'Norme au carré et identités scalaires',
            "Appliquer l'identité $\|\\vec{u} + \\vec{v}\|^2 = \|\\vec{u}\|^2 + 2\\vec{u}\\cdot\\vec{v} + \|\\vec{v}\|^2$",

            "Sachant que $\|\\vec{u}\| = 3$, $\|\\vec{v}\| = 4$ et $\\vec{u} \\cdot \\vec{v} = 2$, calculer $\|\\vec{u} + \\vec{v}\|^2$.",

            "29",

            ['25', '27', '49'],
            "Identité remarquable vectorielle : $\|\\vec{u} + \\vec{v}\|^2 = \|\\vec{u}\|^2 + 2(\\vec{u} \\cdot \\vec{v}) + \|\\vec{v}\|^2$.",

            `$\|\\vec{u}\|^2 = 3^2 = 9$ et $\|\\vec{v}\|^2 = 4^2 = 16$.`,
            `$\|\\vec{u} + \\vec{v}\|^2 = 9 + 2(2) + 16 = 9 + 4 + 16 = 29$.`
          );
        }
      }

      // ---------------------------------------------------------------------
      // 1G3 : Applications du produit scalaire, formule d'Al-Kashi et droites
      // ---------------------------------------------------------------------
      case '1G3': {
        if (tier === 1) {
          return this.makeMcq('1G3', 1, 'Théorème d\'Al-Kashi (loi des cosinus)',
            "Connaître la formule d'Al-Kashi $a^2 = b^2 + c^2 - 2bc \\cos(A)$",

            "Dans un triangle quelconque $ABC$, quelle relation relie la longueur $BC = a$ aux deux autres côtés $b, c$ et à l'angle $\\hat{A}$ ?",

            "$a^2 = b^2 + c^2 - 2bc \\cos(\hat{A})$",

            [
              "$a^2 = b^2 + c^2 + 2bc \\cos(\hat{A})$",

              "$a^2 = b^2 + c^2 - 2bc \\sin(\hat{A})$",

              "$a = b + c - 2\\cos(\hat{A})$"

            ],
            "C'est la généralisation du théorème de Pythagore : si $\\hat{A} = 90^\\circ$, $\\cos(90^\\circ) = 0$ et on retrouve $a^2 = b^2 + c^2$.",

            "Le terme correctif de non-orthogonalité est $-2bc \\cos(\\hat{A})$.",

            "Le théorème d'Al-Kashi stipule que $BC^2 = AB^2 + AC^2 - 2 \\times AB \\times AC \\times \\cos(\\hat{A})$."

          );
        } else if (tier === 2) {
          const a = this.randInt(2, 5);
          const b = this.randChoice([-4, -3, 2, 3]);
          return this.makeMcq('1G3', 2, 'Vecteur normal à une droite',
            "Associer $\\vec{n}(a ; b)$ à l'équation cartésienne $ax + by + c = 0$",

            `Donner les coordonnées d'un vecteur normal $\\vec{n}$ à la droite d'équation $${a}x ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}y + 7 = 0$.`,
            `$\\vec{n}(${a} ; ${b})$`,
            [`$\\vec{n}(${-b} ; ${a})$`, `$\\vec{n}(${b} ; ${a})$`, `$\\vec{n}(${a} ; ${-b})$`],
            "Un vecteur normal $\\vec{n}(a ; b)$ a pour coordonnées directes les coefficients de $x$ et $y$ dans l'équation cartésienne.",

            `Ne confonds pas avec le vecteur directeur $\\vec{u}(-b ; a)$ !`,
            `Dans $ax + by + c = 0$, les coefficients $a$ et $b$ définissent un vecteur normal orthogonal à la droite : $\\vec{n}(a ; b) = \\vec{n}(${a} ; ${b})$.`
          );
        } else if (tier === 3) {
          return this.makeMcq('1G3', 3, 'Équation cartésienne de cercle de diamètre [AB]',
            "Caractérisation scalaire $\\vec{MA} \\cdot \\vec{MB} = 0$",

            "L'ensemble des points $M(x ; y)$ du plan vérifiant la condition $\\vec{MA} \\cdot \\vec{MB} = 0$ est :",

            "Le cercle de diamètre $[AB]$",

            ['La droite médiatrice de $[AB]$', 'Le segment $[AB]$', 'Le triangle rectangle $MAB$'],
            "Pense au théorème du collège : un triangle inscrit dans un demi-cercle dont un côté est le diamètre est rectangle.",

            "L'angle $\\widehat{AMB}$ est droit, ce qui traduit l'orthogonalité de $\\vec{MA}$ et $\\vec{MB}$.",

            "La condition $\\vec{MA} \\cdot \\vec{MB} = 0$ signifie que les vecteurs sont orthogonaux, c'est-à-dire que le triangle $MAB$ est rectangle en $M$. L'ensemble des points est le cercle de diamètre $[AB]$."

          );
        } else {
          return this.makeMcq('1G3', 4, 'Théorème de la médiane',
            "Appliquer la relation de la médiane",

            "Dans un triangle $ABC$ où $I$ est le milieu du côté $[BC]$, quelle égalité relie les longueurs ?",

            "$AB^2 + AC^2 = 2AI^2 + \\frac{BC^2}{2}$",

            [
              "$AB^2 + AC^2 = AI^2 + BC^2$",

              "$AB + AC = 2AI$",

              "$AB^2 + AC^2 = 2AI^2 - \\frac{BC^2}{2}$"

            ],
            "On démontre cette égalité en décomposant $\\vec{AB} = \\vec{AI} + \\vec{IB}$ et $\\vec{AC} = \\vec{AI} + \\vec{IC}$ avec $\\vec{IC} = -\\vec{IB}$.",

            "Les doubles produits s'annulent car $I$ est le milieu.",

            "C'est le théorème de la médiane : $AB^2 + AC^2 = 2AI^2 + \\frac{BC^2}{2}$."

          );
        }
      }

      // ---------------------------------------------------------------------
      // 1S1 : Probabilités conditionnelles et indépendance d'événements
      // ---------------------------------------------------------------------
      case '1S1': {
        if (tier === 1) {
          return this.makeMcq('1S1', 1, 'Définition de la probabilité conditionnelle',
            "Appliquer la formule $P_A(B) = \\frac{P(A \\cap B)}{P(A)}$",

            "Sachant que $P(A) = 0{,}4$ et $P(A \\cap B) = 0{,}12$, calculer la probabilité conditionnelle $P_A(B)$.",

            "$P_A(B) = 0{,}30$",

            ['$P_A(B) = 0{,}48$', '$P_A(B) = 0{,}048$', '$P_A(B) = 0{,}52$'],
            "Formule : $P_A(B) = \\frac{P(A \\cap B)}{P(A)}$.",

            `Effectue la division : $\\frac{0{,}12}{0{,}4}$.`,
            `$P_A(B) = \\frac{P(A \\cap B)}{P(A)} = \\frac{0{,}12}{0{,}40} = \\frac{12}{40} = 0{,}30$.`
          );
        } else if (tier === 2) {
          return this.makeMcq('1S1', 2, 'Formule des probabilités totales',
            "Appliquer $P(B) = P(A \\cap B) + P(\bar{A} \\cap B)$",

            "Une partition de l'univers est formée par $A$ et $\\bar{A}$ avec $P(A) = 0{,}3$. De plus $P_A(B) = 0{,}8$ et $P_{\\bar{A}}(B) = 0{,}2$. Calculer $P(B)$.",

            "$P(B) = 0{,}38$",

            ['$P(B) = 0{,}50$', '$P(B) = 0{,}24$', '$P(B) = 0{,}70$'],
            "Formule des probabilités totales : $P(B) = P(A) \\times P_A(B) + P(\\bar{A}) \\times P_{\\bar{A}}(B)$.",

            `$P(\\bar{A}) = 1 - 0{,}3 = 0{,}7$. Alors $0{,}3 \\times 0{,}8 + 0{,}7 \\times 0{,}2$.`,
            `$P(B) = (0{,}3 \\times 0{,}8) + (0{,}7 \\times 0{,}2) = 0{,}24 + 0{,}14 = 0{,}38$.`
          );
        } else if (tier === 3) {
          return this.makeMcq('1S1', 3, 'Test d\'indépendance de deux événements',
            "Vérifier si $P(A \\cap B) = P(A) \\times P(B)$",

            "On donne $P(A) = 0{,}5$, $P(B) = 0{,}6$ et $P(A \\cap B) = 0{,}3$. Les événements $A$ et $B$ sont-ils indépendants ?",

            "Oui, car $P(A) \\times P(B) = 0{,}5 \\times 0{,}6 = 0{,}30 = P(A \\cap B)$",

            [
              "Non, car $P(A \\cap B) \\neq 0$",

              "Non, car leurs probabilités ne sont pas égales",

              "On ne peut pas savoir sans connaître $P(A \\cup B)$"

            ],
            "Deux événements $A$ et $B$ sont indépendants si et seulement si $P(A \\cap B) = P(A) \\times P(B)$.",

            `Calcule le produit $P(A) \\times P(B)$ et compare-le à $P(A \\cap B)$.`,
            `On a $P(A) \\times P(B) = 0{,}5 \\times 0{,}6 = 0{,}30$. Comme cela est exactement égal à $P(A \\cap B)$, les événements $A$ et $B$ sont indépendants.`
          );
        } else {
          return this.makeMcq('1S1', 4, 'Formule de Bayes (inversion de conditionnement)',
            "Calculer $P_B(A) = \\frac{P(A \\cap B)}{P(B)}$",

            "Avec $P(A \\cap B) = 0{,}24$ et $P(B) = 0{,}38$, quelle est la valeur de $P_B(A)$ arrondie au centième ?",

            "$P_B(A) \\approx 0{,}63$",

            ['$P_B(A) \\approx 0{,}24$', '$P_B(A) \\approx 0{,}09$', '$P_B(A) \\approx 0{,}80$'],
            "Formule : $P_B(A) = \\frac{P(A \\cap B)}{P(B)}$.",

            `Divise $0{,}24$ par $0{,}38$.`,
            `$P_B(A) = \\frac{0{,}24}{0{,}38} = \\frac{24}{38} \\approx 0{,}6315... \\approx 0{,}63$.`
          );
        }
      }

      // ---------------------------------------------------------------------
      // 1S2 : Variables aléatoires réelles, espérance, variance et écart-type
      // ---------------------------------------------------------------------
      case '1S2': {
        if (tier === 1) {
          return this.makeMcq('1S2', 1, 'Loi de probabilité d\'une variable aléatoire',
            "Vérifier que la somme des probabilités est égale à 1",

            "Une variable aléatoire $X$ prend les valeurs 1, 2, 3 avec $P(X=1) = 0{,}2$ et $P(X=2) = 0{,}5$. Quelle est la valeur de $P(X=3)$ ?",

            "$P(X=3) = 0{,}3$",

            ['$P(X=3) = 0{,}7$', '$P(X=3) = 0{,}5$', '$P(X=3) = 0$'],
            "La somme de toutes les probabilités d'une loi discrète est égale à 1 : $\\sum P(X=x_i) = 1$.",

            `$P(X=3) = 1 - (0{,}2 + 0{,}5)$.`,
            `$P(X=3) = 1 - (0{,}2 + 0{,}5) = 1 - 0{,}7 = 0{,}3$.`
          );
        } else if (tier === 2) {
          const g = this.randInt(5, 10);
          const p = this.randInt(2, 4);
          const eX = 0.5 * g - 0.5 * p;
          return this.makeMcq('1S2', 2, 'Calcul de l\'espérance mathématique',
            "Appliquer la formule $E(X) = \\sum x_i P(X = x_i)$",

            `Une variable aléatoire $X$ vaut $+${g}$ avec une probabilité de $0{,}5$ et $-${p}$ avec une probabilité de $0{,}5$. Quelle est son espérance $E(X)$ ?`,
            `$E(X) = ${eX}$`,
            [`$E(X) = ${g - p}$`, `$E(X) = 0$`, `$E(X) = ${eX + 2}$`],
            "Formule : $E(X) = \\sum x_i P(X = x_i)$.",

            `Calcule $(${g}) \\times 0{,}5 + (-${p}) \\times 0{,}5$.`,
            `$E(X) = ${g} \\times 0{,}5 + (-${p}) \\times 0{,}5 = ${0.5 * g} - ${0.5 * p} = ${eX}$.`
          );
        } else if (tier === 3) {
          return this.makeMcq('1S2', 3, 'Notion de jeu équitable',
            "Interpréter $E(X) = 0$",

            "Un jeu de hasard modélisé par une variable de gain algébrique $X$ est dit équitable si et seulement si :",

            "Son espérance est nulle : $E(X) = 0$",

            ['Sa variance est nulle : $V(X) = 0$', 'La probabilité de gagner est de 0,5', '$P(X > 0) = P(X < 0)$'],
            "Un jeu est équitable si, en moyenne sur un grand nombre de parties, le gain moyen du joueur est nul.",

            "L'espérance mathématique traduit le gain moyen théorique à long terme.",

            "Par définition économique et probabiliste, un jeu est équitable si le gain moyen espéré par partie est nul : $E(X) = 0$."

          );
        } else {
          return this.makeMcq('1S2', 4, 'Variance et écart-type',
            "Connaître la relation entre écart-type et variance : $\\sigma(X) = \\sqrt{V(X)}$",

            "Sachant que la variance d'une variable aléatoire vaut $V(X) = 16$, quel est son écart-type $\\sigma(X)$ ?",

            "$\\sigma(X) = 4$",

            ['$\\sigma(X) = 256$', '$\\sigma(X) = 8$', '$\\sigma(X) = 16$'],
            "L'écart-type est la racine carrée de la variance : $\\sigma(X) = \\sqrt{V(X)}$.",

            `Calcule $\\sqrt{16}$.`,
            `$\\sigma(X) = \\sqrt{V(X)} = \\sqrt{16} = 4$. Il s\'exprime dans la même unité que la variable $X$.`
          );
        }
      }

      default:
        return this.generateDefaultLycee(chapterId, tier);
    }
  },

  // =========================================================================
  // CLASSE DE TERMINALE SPÉCIALITÉ & EXPERTES (16 chapitres)
  // =========================================================================
  generateTale(chapterId, tier) {
    switch (chapterId) {
      // ---------------------------------------------------------------------
      // TA1 : Le raisonnement par récurrence
      // ---------------------------------------------------------------------
      case 'TA1': {
        if (tier === 1) {
          return this.makeMcq('TA1', 1, 'Les étapes du raisonnement par récurrence',
            "Identifier les trois étapes fondamentales de la récurrence",

            "Quelles sont les trois étapes incontournables d'un raisonnement par récurrence pour prouver une propriété $P(n)$ pour tout $n \\ge n_0$ ?",

            "Initialisation, Hérédité, Conclusion.",

            [
              "Hypothèse, Calcul, Déduction.",

              "Conjecture, Dérivation, Intégration.",

              "Existence, Unicité, Réciproque."

            ],
            "On vérifie d'abord pour le premier rang (initialisation), puis on prouve la transmission au rang suivant (hérédité).",

            "La récurrence fonctionne comme une chute de dominos : le premier tombe, et chaque domino entraîne le suivant.",

            "Une démonstration par récurrence comporte rigoureusement : l'Initialisation (vérifier $P(n_0)$), l'Hérédité (supposer $P(k)$ vraie et montrer $P(k+1)$), puis la Conclusion."

          );
        } else if (tier === 2) {
          const u0 = this.randInt(1, 4);
          return this.makeMcq('TA1', 2, 'Initialisation d\'une récurrence',
            "Vérifier la propriété au rang initial $n_0 = 0$",

            `On considère la suite définie par $u_0 = ${u0}$ et $u_{n+1} = 2u_n + 1$. Pour démontrer par récurrence que $u_n > 0$ pour tout $n \\in \\mathbb{N}$, que vaut l'étape d'initialisation ?`,
            `Pour $n = 0$, $u_0 = ${u0} > 0$ : la propriété est vraie au rang initial.`,
            [
              `Pour $n = 1$, $u_1 = ${2 * u0 + 1} > 0$ uniquement.`,
              `On suppose que pour tout $n$, $u_n > 0$.`,
              `On calcule la limite de $u_n$ quand $n$ tend vers l\'infini.`
            ],
            "L'initialisation consiste à vérifier que la propriété est vraie pour la plus petite valeur de l'indice (ici $n_0 = 0$).",

            `Vérifie simplement la valeur de $u_0$.`,
            `Pour $n = 0$, on a $u_0 = ${u0}$. Comme $${u0} > 0$, la propriété $P(0)$ est vraie : l\'initialisation est validée.`
          );
        } else if (tier === 3) {
          return this.makeMcq('TA1', 3, 'Formulation de l\'hypothèse de récurrence',
            "Rédiger rigoureusement l'étape d'hérédité",

            "Dans l'étape d'hérédité pour une propriété $P(n)$, quelle est la supposition correcte ?",

            "On suppose que pour un entier $k \\ge n_0$ fixé, $P(k)$ est vraie, et on démontre que $P(k+1)$ est vraie.",

            [
              "On suppose que pour tout entier $n$, $P(n)$ est vraie.",

              "On démontre directement $P(k)$ sans rien supposer.",

              "On remplace $n$ par l'infini."

            ],
            "Attention à ne pas supposer ce qu'on veut démontrer pour tout $n$ (ce serait une pétition de principe).",

            "On fige un rang arbitraire $k$ et on montre la transmission au rang $k+1$.",

            "L'hérédité consiste à supposer $P(k)$ vraie pour un entier $k$ fixé (hypothèse de récurrence), puis à prouver sous cette hypothèse que $P(k+1)$ est encore vraie."

          );
        } else {
          return this.makeMcq('TA1', 4, 'Récurrence forte et pièges classiques',
            "Distinguer récurrence simple et hypothèse de transmission",

            "Pourquoi une récurrence dont l'hérédité est valide mais dont l'initialisation est fausse ne prouve-t-elle rien ?",

            "Parce que le mécanisme de transmission ne s'enclenche jamais si aucun premier domino ne tombe.",

            [
              "Parce que l'hérédité est alors automatiquement fausse.",

              "Parce qu'une propriété sans initialisation est toujours vraie pour $n \\ge 100$.",

              "Parce que la suite diverge nécessairement vers l'infini."

            ],
            "Pense à l'analogie des dominos.",

            "Même si chaque domino est capable de faire tomber le suivant, s'il n'y a pas de chiquenaude initiale, rien ne tombe.",

            "L'hérédité n'est qu'une implication conditionnelle ($P(k) \\implies P(k+1)$). Sans initialisation prouvant qu'un premier terme est vrai, la propriété peut être fausse pour tout $n$."

          );
        }
      }

      // ---------------------------------------------------------------------
      // TA2 : Limites de suites et théorèmes de convergence
      // ---------------------------------------------------------------------
      case 'TA2': {
        if (tier === 1) {
          const q = this.randChoice([0.2, 0.5, 0.75, 0.8]);
          return this.makeMcq('TA2', 1, 'Limite d\'une suite géométrique $q^n$',
            "Convergence de $q^n$ selon la valeur de $q$",

            `Quelle est la limite de la suite $u_n = (${q})^n$ lorsque $n \\to +\\infty$ ?`,
            "$\\lim_{n \\to +\\infty} u_n = 0$ car $|q| < 1$",

            [
              "$\\lim_{n \\to +\\infty} u_n = +\\infty$",

              "$\\lim_{n \\to +\\infty} u_n = 1$",

              "La suite n'admet aucune limite car elle oscille"

            ],
            "Si $-1 < q < 1$, alors $\\lim_{n \\to +\\infty} q^n = 0$.",

            `Ici $q = ${q}$, donc $|q| < 1$.`,
            `Comme $|q| = ${q} < 1$, les puissances successives deviennent de plus en plus petites et se rapprochent indéfiniment de 0 : $\\lim_{n \\to +\\infty} (${q})^n = 0$.`
          );
        } else if (tier === 2) {
          return this.makeMcq('TA2', 2, 'Théorème de convergence monotone',
            "Énoncer le théorème fondamental pour les suites croissantes majorées",

            "D'après le théorème de convergence monotone, toute suite réelle qui est à la fois croissante et majorée est :",

            "Convergente vers une limite finie $L \\le M$ (où $M$ est un majorant).",

            [
              "Divergente vers $+\\infty$.",

              "Nécessairement constante.",

              "Périodique à partir d'un certain rang."

            ],
            "Une suite qui monte mais qui est bloquée par un plafond ne peut pas s'échapper à l'infini.",

            "Elle converge nécessairement vers la borne supérieure de ses valeurs.",

            "Le théorème de convergence monotone garantit que toute suite croissante et majorée converge vers un réel fini $L$. Réciproquement, toute suite décroissante et minorée converge."

          );
        } else if (tier === 3) {
          return this.makeMcq('TA2', 3, 'Théorème d\'encadrement (des gendarmes)',
            "Appliquer le théorème des gendarmes",

            "Soient trois suites telles que pour tout $n \\ge 1$, $2 - \\frac{1}{n} \\le u_n \\le 2 + \\frac{1}{n^2}$. Quelle est la limite de $(u_n)$ ?",

            "$\\lim_{n \\to +\\infty} u_n = 2$",

            ['$\\lim_{n \\to +\\infty} u_n = 0$', '$\\lim_{n \\to +\\infty} u_n = +\\infty$', 'On ne peut pas conclure car $u_n$ est inconnue'],
            "Calcule la limite des deux suites encadrantes quand $n \\to +\\infty$.",

            "$\\lim_{n \\to +\\infty} (2 - 1/n) = 2$ et $\\lim_{n \\to +\\infty} (2 + 1/n^2) = 2$.",

            "Les deux suites qui encadrent $(u_n)$ convergent vers la même limite 2. D'après le théorème des gendarmes, $(u_n)$ converge également et sa limite est 2."

          );
        } else {
          return this.makeMcq('TA2', 4, 'Théorème de comparaison pour les limites infinies',
            "Appliquer si $u_n \\ge v_n$ et $v_n \\to +\\infty$ alors $u_n \\to +\\infty$",

            "Sachant que pour tout $n \\in \\mathbb{N}$, $u_n \\ge n^2 + 3$, quelle est la limite de $(u_n)$ ?",

            "$\\lim_{n \\to +\\infty} u_n = +\\infty$",

            ['$\\lim_{n \\to +\\infty} u_n = 3$', 'On ne peut pas conclure car il n\'y a pas de majorant', '$\\lim_{n \\to +\\infty} u_n = 0$'],
            "Si une suite est plus grande qu'une suite qui tend vers $+\\infty$, elle est poussée vers $+\\infty$.",

            "$\\lim_{n \\to +\\infty} (n^2 + 3) = +\\infty$.",

            "D'après le théorème de comparaison, comme $u_n \\ge n^2 + 3$ et $\\lim_{n \\to +\\infty} (n^2 + 3) = +\\infty$, on a $\\lim_{n \\to +\\infty} u_n = +\\infty$."

          );
        }
      }

      // ---------------------------------------------------------------------
      // TA3 : Limites de fonctions, continuité et TVI
      // ---------------------------------------------------------------------
      case 'TA3': {
        if (tier === 1) {
          const a = this.randInt(2, 5);
          return this.makeMcq('TA3', 1, 'Limite en l\'infini d\'une fonction rationnelle',
            "Règle des termes de plus haut degré",

            `Déterminer la limite : $\\lim_{x \\to +\\infty} \\frac{${a}x^2 + 3x - 1}{x^2 + 5}$.`,
            `$${a}$`,
            [`$+\\infty$`, `$0$`, `$${a * 2}$`],
            "En $+\\infty$, une fraction rationnelle a la même limite que le quotient de ses termes de plus haut degré.",

            `Simplifie $\\frac{${a}x^2}{x^2}$.`,
            `En factorisant par le terme dominant : $\\frac{${a}x^2 + 3x - 1}{x^2 + 5} \\sim \\frac{${a}x^2}{x^2} = ${a}$. La limite vaut donc ${a}.`
          );
        } else if (tier === 2) {
          return this.makeMcq('TA3', 2, 'Asymptote horizontale et verticale',
            "Reconnaître les équations d'asymptotes",

            "Si $\\lim_{x \\to 2^+} f(x) = +\\infty$ et $\\lim_{x \\to +\\infty} f(x) = -3$, quelles sont les asymptotes à la courbe ?",

            "La droite $x = 2$ (asymptote verticale) et la droite $y = -3$ (asymptote horizontale).",

            [
              "La droite $y = 2$ et la droite $x = -3$.",

              "Une asymptote oblique uniquement.",

              "La courbe n'admet aucune asymptote."

            ],
            "Quand $x \\to a$ donne l'infini : asymptote verticale $x = a$. Quand $x \\to \\infty$ donne un réel $b$ : asymptote horizontale $y = b$.",

            "Associe chaque variable : $x$ fixe donne $x = 2$, $y$ limite donne $y = -3$.",

            "Une limite infinie en un point fini donne l'asymptote verticale $x = 2$. Une limite finie à l'infini donne l'asymptote horizontale $y = -3$."

          );
        } else if (tier === 3) {
          return this.makeMcq('TA3', 3, 'Théorème des Valeurs Intermédiaires (TVI)',
            "Conditions d'application du TVI classique",

            "Pour affirmer que l'équation $f(x) = k$ admet au moins une solution sur $[a ; b]$, quelles sont les hypothèses du TVI ?",

            "$f$ est continue sur $[a ; b]$ et $k$ est compris entre $f(a)$ et $f(b)$.",

            [
              "$f$ est dérivable et positive sur $[a ; b]$.",

              "$f$ est strictement croissante sans condition de continuité.",

              "$f(a) = f(b) = k$."

            ],
            "Le TVI repose fondamentalement sur le fait de pouvoir tracer la courbe sans lever le crayon (continuité).",

            "La valeur cible $k$ doit être encadrée par les images des bornes.",

            "D'après le TVI, si $f$ est continue sur un segment $[a ; b]$ et si $k$ est compris entre $f(a)$ et $f(b)$, alors il existe au moins un réel $c \\in [a ; b]$ tel que $f(c) = k$."

          );
        } else {
          return this.makeMcq('TA3', 4, 'Corollaire du TVI (Théorème de la bijection)',
            "Assurer l'unicité de la solution",

            "Quelle condition supplémentaire doit-on ajouter au TVI pour garantir que la solution de $f(x) = k$ est UNIQUE sur $[a ; b]$ ?",

            "$f$ doit être strictement monotone (strictement croissante ou strictement décroissante) sur $[a ; b]$.",

            [
              "$f$ doit être positive sur $[a ; b]$.",

              "$f$ doit s'annuler en 0.",

              "La dérivée seconde doit être positive."

            ],
            "Si la fonction monte puis descend, elle peut traverser le niveau $k$ plusieurs fois.",

            "La stricte monotonie empêche la courbe de revenir sur une valeur déjà prise.",

            "D'après le corollaire du TVI (théorème de la bijection), la continuité garantit l'existence et la stricte monotonie garantit l'unicité de la solution."

          );
        }
      }

      // ---------------------------------------------------------------------
      // TA4 : Convexité, concavité et points d'inflexion
      // ---------------------------------------------------------------------
      case 'TA4': {
        if (tier === 1) {
          return this.makeMcq('TA4', 1, 'Caractérisation de la convexité par la dérivée seconde',
            "Lien entre signe de $f\'\'$ et convexité",

            "Une fonction deux fois dérivable $f$ est dite convexe sur un intervalle $I$ si et seulement si :",

            "Pour tout $x \\in I$, $f''(x) \\ge 0$ (sa courbe est située au-dessus de toutes ses tangentes).",

            [
              "Pour tout $x \\in I$, $f''(x) \\le 0$.",

              "Pour tout $x \\in I$, $f'(x) \\ge 0$.",

              "$f(x) \\ge 0$ sur $I$."

            ],
            "Convexe a la forme d'un bol tourné vers le haut : la dérivée première $f'$ est croissante.",

            "Une fonction dont la dérivée est croissante a une dérivée seconde positive.",

            "Une fonction est convexe si et seulement si sa dérivée seconde est positive ou nulle : $f\'\'(x) \\ge 0$. Sa courbe représentative reste toujours au-dessus de chacune de ses tangentes."

          );
        } else if (tier === 2) {
          const a = this.randInt(2, 6);
          return this.makeMcq('TA4', 2, 'Point d\'inflexion',
            "Caractérisation algébrique d'un point d'inflexion",

            "Un point $A(x_0 ; f(x_0))$ est un point d'inflexion de la courbe $\\mathcal{C}_f$ si et seulement si :",

            "La dérivée seconde $f''$ s'annule et change de signe en $x_0$.",

            [
              "La dérivée première $f'$ s'annule en $x_0$.",

              "$f(x_0) = 0$.",

              "La fonction $f$ atteint son maximum absolu en $x_0$."

            ],
            "Au point d'inflexion, la courbe traverse sa tangente en passant de concave à convexe (ou inversement).",

            "Ce changement de convexité se traduit par un changement de signe de $f\'\'$.",

            "Un point d'inflexion correspond à un changement de sens de courbure (la courbe traverse sa tangente), ce qui équivaut à l'annulation avec changement de signe de la dérivée seconde $f\'\'$."

          );
        } else if (tier === 3) {
          return this.makeMcq('TA4', 3, 'Convexité de l\'exponentielle',
            "Calcul de dérivée seconde pour la fonction exponentielle",

            "Quelle est la convexité de la fonction exponentielle $f(x) = e^x$ sur $\\mathbb{R}$ ?",

            "Strictement convexe sur $\\mathbb{R}$ tout entier car $f''(x) = e^x > 0$.",

            [
              "Strictement concave sur $\\mathbb{R}$.",

              "Concave sur $]-\\infty ; 0]$ et convexe sur $[0 ; +\\infty[$.",

              "Elle admet l'origine pour point d'inflexion."

            ],
            "Calcule $f\'(x) = e^x$ puis $f\'\'(x) = e^x$.",

            "L'exponentielle est strictement positive pour tout réel $x$.",

            "Comme $f\'\'(x) = e^x > 0$ pour tout $x \\in \\mathbb{R}$, la fonction exponentielle est strictement convexe sur $\\mathbb{R}$."

          );
        } else {
          const k = this.randInt(1, 4);
          return this.makeMcq('TA4', 4, 'Position relative courbe et tangente',
            "Déduire la position par la convexité",

            "Si une fonction $f$ est concave sur un intervalle $I$, comment se situe sa courbe par rapport à ses tangentes ?",

            "La courbe $\\mathcal{C}_f$ est entièrement située EN DESSOUS de toutes ses tangentes.",

            [
              "La courbe $\\mathcal{C}_f$ est entièrement située au-dessus de toutes ses tangentes.",

              "La courbe coupe chaque tangente en deux points distincts.",

              "La position dépend de la parité de la fonction."

            ],
            "Pour une fonction concave (comme la fonction logarithme ou une cloche), les tangentes chapeautent la courbe.",

            "Concave signifie que la dérivée seconde est négative.",

            "Par propriété de la concavité, la courbe d'une fonction concave se situe toujours en dessous de chacune de ses tangentes sur l'intervalle considéré."

          );
        }
      }

      // ---------------------------------------------------------------------
      // TA5 : La fonction logarithme népérien
      // ---------------------------------------------------------------------
      case 'TA5': {
        if (tier === 1) {
          return this.makeMcq('TA5', 1, 'Propriétés algébriques fondamentales de $\\ln$',
            "Relation fondamentale $\\ln(ab) = \\ln(a) + \\ln(b)$",

            "Pour tous réels $a > 0$ et $b > 0$, laquelle de ces égalités est la propriété caractéristique du logarithme ?",

            "$\\ln(a \\times b) = \\ln(a) + \\ln(b)$",

            ['$\\ln(a + b) = \\ln(a) \\times \\ln(b)$', '$\\ln(a \\times b) = \\ln(a) \\times \\ln(b)$', '$\\ln(a / b) = \\ln(a) / \\ln(b)$'],
            "Le logarithme népérien transforme les produits en sommes.",

            "C'est la bijection réciproque de l'exponentielle ($e^{x+y} = e^x e^y$).",

            "La relation fondamentale du logarithme est de transformer un produit en somme : $\\ln(ab) = \\ln(a) + \\ln(b)$. On a aussi $\\ln(a/b) = \\ln(a) - \\ln(b)$."

          );
        } else if (tier === 2) {
          const a = this.randInt(2, 5);
          return this.makeMcq('TA5', 2, 'Dérivée de la fonction $\\ln(u)$',
            "Appliquer la formule $(\\ln u)' = \\frac{u'}{u}$",

            `Déterminer la dérivée de $f(x) = \\ln(${a}x + 1)$ pour $x > -\\frac{1}{${a}}$.`,
            `$f\'(x) = \\frac{${a}}{${a}x + 1}$`,
            [`$f\'(x) = \\frac{1}{${a}x + 1}$`, `$f\'(x) = \\frac{${a}}{x}$`, `$f\'(x) = ${a}\\ln(${a}x + 1)$`],
            "Formule générale de dérivation : $(\\ln(u(x)))' = \\frac{u\'(x)}{u(x)}$.",

            `Ici $u(x) = ${a}x + 1$, donc $u\'(x) = ${a}$.`,
            `D\'après la formule $(\\ln u)\' = \\frac{u\'}{u}$, on obtient $f\'(x) = \\frac{${a}}{${a}x + 1}$.`
          );
        } else if (tier === 3) {
          return this.makeMcq('TA5', 3, 'Croissances comparées',
            "Connaître la limite fondamentale $\\lim_{x \\to +\\infty} \\frac{\\ln x}{x} = 0$",

            "Quelle est la limite : $\\lim_{x \\to +\\infty} \\frac{\\ln(x)}{x}$ ?",

            "0 (l'abscisse $x$ l'emporte sur $\\ln(x)$ en $+\\infty$)",

            ['$+\\infty$', '1', 'La limite n\'existe pas'],
            "Les puissances de $x$ croissent infiniment plus vite que le logarithme en $+\\infty$.",

            "C'est un théorème de croissances comparées au programme de Terminale.",

            "D'après le théorème des croissances comparées, les fonctions puissances l'emportent sur le logarithme népérien en $+\\infty$, d'où $\\lim_{x \\to +\\infty} \\frac{\\ln x}{x} = 0$."

          );
        } else {
          const x0 = this.randInt(2, 5);
          return this.makeMcq('TA5', 4, 'Résolution d\'équations avec $\\ln$',
            "Appliquer l'équivalence $\\ln(x) = k \\iff x = e^k$",

            `Résoudre dans $]0 ; +\\infty[$ l'équation : $\\ln(x) = ${x0}$.`,
            `$S = \\{e^{${x0}}\\}$`,
            [`$S = \\{${x0}\\}$`, `$S = \\{\\ln(${x0})\\}$`, `$S = \\{10^{${x0}}\\}$`],
            "La fonction exponentielle est la réciproque de la fonction logarithme : applique l'exponentielle de chaque côté.",

            `$e^{\\ln(x)} = x$.`,
            `$\\ln(x) = ${x0} \\iff e^{\\ln(x)} = e^{${x0}} \\iff x = e^{${x0}}$. Comme $e^{${x0}} > 0$, la solution est bien dans le domaine : $S = \\{e^{${x0}}\\}$.`
          );
        }
      }

      // ---------------------------------------------------------------------
      // TA6 : Primitives et équations différentielles linéaires
      // ---------------------------------------------------------------------
      case 'TA6': {
        const a = this.randChoice([2, 3, -2, -3]);
        const b = this.randInt(1, 6);
        if (tier === 1) {
          return this.makeMcq('TA6', 1, 'Solution de l\'équation $y\' = ay$',
            "Connaître la forme générale $y(x) = C e^{ax}$",

            `Quelles sont les solutions sur $\\mathbb{R}$ de l'équation différentielle $y\' = ${a}y$ ?`,
            `$y(x) = C e^{${a}x}$ avec $C \\in \\mathbb{R}$`,
            [`$y(x) = C e^{-${a}x}$`, `$y(x) = ${a}x + C$`, `$y(x) = C e^{x / ${Math.abs(a)}}$`],
            "Le cours stipule que les solutions de $y\' = ay$ sont de la forme $f(x) = C e^{ax}$ où $C$ est une constante réelle.",

            `Ici le coefficient est $a = ${a}$.`,
            `Les solutions de l\'équation $y\' = ${a}y$ sont exactement les fonctions $x \\mapsto C e^{${a}x}$, où $C$ est une constante réelle fixée par les conditions initiales.`
          );
        } else if (tier === 2) {
          const yp = -b / a;
          const ypStr = this.simplifyFrac(-b, a);
          return this.makeMcq('TA6', 2, 'Solution particulière constante de $y\' = ay + b$',
            "Déterminer la solution constante $y_0 = -b/a$",

            `Quelle est la solution constante (particulière) de l'équation différentielle $y\' = ${a}y ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}$ ?`,
            `$y_0 = ${ypStr}$`,
            [`$y_0 = ${this.simplifyFrac(b, a)}$`, `$y_0 = ${a}$`, `$y_0 = 0$`],
            "Une solution constante $y_0$ a une dérivée nulle : $y_0\' = 0$.",

            `Remplace $y\'$ par 0 : $0 = ${a}y_0 ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}$.`,
            `$0 = ${a}y_0 + (${b}) \\iff ${a}y_0 = ${-b} \\iff y_0 = ${ypStr}$.`
          );
        } else if (tier === 3) {
          const n = this.randChoice([2, 3, 4]);
          return this.makeMcq('TA6', 3, 'Primitive d\'une puissance $x^n$',
            "Appliquer la formule $\\int x^n dx = \\frac{x^{n+1}}{n+1}$",

            `Déterminer une primitive de $f(x) = x^${n}$ sur $\\mathbb{R}$.`,
            `$F(x) = \\frac{x^{${n + 1}}}{${n + 1}}$`,
            [`$F(x) = ${n}x^{${n - 1}}$`, `$F(x) = \\frac{x^{${n}}}{${n}}$`, `$F(x) = x^{${n + 1}}$`],
            "Pour dériver on multiplie par l'exposant et on le baisse de 1 ; pour intégrer on augmente l'exposant de 1 et on divise.",

            "Formule : une primitive de $x^n$ est $\\frac{x^{n+1}}{n+1}$.",

            `En augmentant la puissance de 1 : l\'exposant devient $${n + 1}$, d\'où $F(x) = \\frac{x^{${n + 1}}}{${n + 1}}$. En dérivant, on vérifie bien que $F\'(x) = x^${n}$.`
          );
        } else {
          return this.makeMcq('TA6', 4, 'Condition initiale pour une équation différentielle',
            "Déterminer la constante $C$ avec $y(0) = y_0$",

            `Soit l'équation $y\' = 3y$ avec la condition initiale $y(0) = 5$. Quelle est l'unique solution ?`,
            "$y(x) = 5e^{3x}$",

            ['$y(x) = 3e^{5x}$', '$y(x) = e^{3x} + 4$', '$y(x) = 5e^{-3x}$'],
            "La forme générale est $y(x) = C e^{3x}$. Remplace $x$ par 0 pour trouver $C$.",

            `$y(0) = C e^0 = C \\times 1 = C$. Comme $y(0) = 5$, on a $C = 5$.`,
            `La solution générale est $y(x) = C e^{3x}$. En $x = 0$, $y(0) = C e^0 = C = 5$. L\'unique solution vérifiant la condition initiale est donc $y(x) = 5e^{3x}$.`
          );
        }
      }

      // ---------------------------------------------------------------------
      // TA7 : Calcul intégral : intégrale, aire et intégration par parties
      // ---------------------------------------------------------------------
      case 'TA7': {
        if (tier === 1) {
          const b = this.randInt(2, 4);
          const intVal = (b * b * b) / 3;
          return this.makeMcq('TA7', 1, 'Calcul d\'une intégrale par primitive',
            "Appliquer $\\int_a^b f(x) dx = [F(x)]_a^b = F(b) - F(a)$",

            `Calculer l'intégrale : $I = \\int_0^{${b}} x^2 \\, dx$.`,
            `$I = \\frac{${b * b * b}}{3}$`,
            [`$I = ${b * b}$`, `$I = \\frac{${b * b}}{2}$`, `$I = ${b * b * b}$`],
            "Une primitive de $x^2$ est $F(x) = \\frac{x^3}{3}$.",

            `Calcule $F(${b}) - F(0) = \\frac{${b}^3}{3} - 0$.`,
            `$I = \\left[\\frac{x^3}{3}\\right]_0^{${b}} = \\frac{${b}^3}{3} - 0 = \\frac{${b * b * b}}{3}$.`
          );
        } else if (tier === 2) {
          return this.makeMcq('TA7', 2, 'Interprétation géométrique de l\'intégrale',
            "Lien entre intégrale d'une fonction positive et aire sous la courbe",

            "Si $f$ est une fonction continue et positive sur $[a ; b]$, que représente l'intégrale $\\int_a^b f(x) \\, dx$ ?",

            "L'aire (en unités d'aire) du domaine délimité par $\\mathcal{C}_f$, l'axe des abscisses et les droites $x = a$ et $x = b$.",

            [
              "Le périmètre de la courbe entre $a$ et $b$.",

              "Le coefficient directeur moyen de la tangente.",

              "La valeur maximale atteinte par $f$ sur $[a ; b]$."

            ],
            "C'est la définition géométrique historique de l'intégrale de Riemann.",

            "L'intégrale somme les aires des rectangles infinitésimaux de hauteur $f(x)$ et de largeur $dx$.",

            "Pour toute fonction continue et positive sur $[a ; b]$, l'intégrale $\\int_a^b f(x) \\, dx$ mesure exactement l'aire sous la courbe délimitée par l'axe des abscisses."

          );
        } else if (tier === 3) {
          return this.makeMcq('TA7', 3, 'Formule d\'intégration par parties (IPP)',
            "Connaître la formule $\\int u v' = [uv] - \\int u' v$",

            "Quelle est la formule d'intégration par parties pour deux fonctions $u$ et $v$ dérivables sur $[a ; b]$ ?",

            "$\\int_a^b u(x)v'(x) \\, dx = [u(x)v(x)]_a^b - \\int_a^b u'(x)v(x) \\, dx$",

            [
              "$\\int_a^b u(x)v'(x) \\, dx = [u'(x)v'(x)]_a^b + \\int_a^b u(x)v(x) \\, dx$",

              "$\\int_a^b u(x)v'(x) \\, dx = \\int_a^b u(x) \\, dx \\times \\int_a^b v'(x) \\, dx$",

              "$\\int_a^b u(x)v'(x) \\, dx = [u(x)]_a^b \\times [v(x)]_a^b$"

            ],
            "Cette formule provient de l'intégration de la dérivée d'un produit : $(uv)' = u\'v + uv\'$.",

            "En intégrant des deux côtés : $[uv]_a^b = \\int u\'v + \\int uv\'$.",

            "La formule d'IPP est issue de la dérivation d'un produit : $\\int_a^b uv\' = [uv]_a^b - \\int_a^b u\'v$."

          );
        } else {
          return this.makeMcq('TA7', 4, 'Valeur moyenne d\'une fonction',
            "Appliquer la formule $\\mu = \\frac{1}{b - a} \\int_a^b f(x) dx$",

            "Quelle est la formule de la valeur moyenne d'une fonction continue $f$ sur un intervalle $[a ; b]$ ($a < b$) ?",

            "$\\mu = \\frac{1}{b - a} \\int_a^b f(x) \\, dx$",

            ['$\\mu = \\frac{f(a) + f(b)}{2}$', '$\\mu = \\int_a^b f(x) \\, dx$', '$\\mu = \\frac{1}{2} \\int_a^b f(x) \\, dx$'],
            "La valeur moyenne correspond à la hauteur d'un rectangle qui aurait la même aire que le domaine sous la courbe.",

            "Aire du rectangle = $\\mu \\times (b - a) = \\int_a^b f(x) dx$.",

            "Par définition, la valeur moyenne de $f$ sur $[a ; b]$ est $\\mu = \\frac{1}{b - a} \\int_a^b f(x) dx$."

          );
        }
      }

      // ---------------------------------------------------------------------
      // TG1 : Vecteurs, droites et plans dans l'espace
      // ---------------------------------------------------------------------
      case 'TG1': {
        if (tier === 1) {
          const x0 = this.randInt(-3, 3);
          const y0 = this.randInt(-3, 3);
          const z0 = this.randInt(-3, 3);
          const a = this.randInt(1, 4);
          const b = this.randInt(-3, 3);
          const c = this.randInt(-3, 3);
          return this.makeMcq('TG1', 1, 'Représentation paramétrique de droite dans l\'espace',
            "Associer point et vecteur directeur dans un système paramétrique",

            `On considère la droite $D$ passant par $A(${x0} ; ${y0} ; ${z0})$ et de vecteur directeur $\\vec{u}(${a} ; ${b} ; ${c})$. Quel est son système paramétrique ?`,
            `$\\begin{cases} x = ${x0} ${a >= 0 ? '+ ' + a : '- ' + Math.abs(a)}t \\\\ y = ${y0} ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}t \\\\ z = ${z0} ${c >= 0 ? '+ ' + c : '- ' + Math.abs(c)}t \\end{cases}$ ($t \\in \\mathbb{R}$)`,
            [
              `$\\begin{cases} x = ${a} + ${x0}t \\\\ y = ${b} + ${y0}t \\\\ z = ${c} + ${z0}t \\end{cases}$`,
              `$${a}x + ${b}y + ${c}z = 0$`,
              `$\\begin{cases} x = ${x0}t \\\\ y = ${y0}t \\\\ z = ${z0}t \\end{cases}$`
            ],
            "Formule : $M(x, y, z) \\in D \\iff \\vec{AM} = t\\vec{u}$.",

            `Les coordonnées sont $x = x_A + t a$, $y = y_A + t b$, $z = z_A + t c$.`,
            `La représentation paramétrique s\'écrit en égalant $\\vec{AM} = t\\vec{u}$ composante par composante : $x = ${x0} + ${a}t$, $y = ${y0} + ${b}t$, $z = ${z0} + ${c}t$.`
          );
        } else if (tier === 2) {
          return this.makeMcq('TG1', 2, 'Coplanarité de trois vecteurs',
            "Caractériser la coplanarité par une combinaison linéaire",

            "Trois vecteurs $\\vec{u}, \\vec{v}$ et $\\vec{w}$ de l'espace sont dits coplanaires si et seulement si :",

            "L'un d'eux peut s'écrire comme combinaison linéaire des deux autres (ex: $\\vec{w} = a\\vec{u} + b\\vec{v}$).",

            [
              "Leurs normes sont toutes égales.",

              "Ils sont deux à deux orthogonaux.",

              "Ils ont la même direction."

            ],
            "Coplanaires signifie qu'ils peuvent être représentés dans un même plan géométrique.",

            "Deux vecteurs non colinéaires forment une base d'un plan ; le troisième doit appartenir à ce plan.",

            "Trois vecteurs sont coplanaires si et seulement si leurs directions sont parallèles à un même plan, ce qui équivaut à l'existence de réels $a, b$ tels que $\\vec{w} = a\\vec{u} + b\\vec{v}$."

          );
        } else if (tier === 3) {
          return this.makeMcq('TG1', 3, 'Positions relatives de deux droites dans l\'espace',
            "Cas particulier de l'espace : droites non coplanaires",

            "Contrairement au plan, dans l'espace deux droites qui n'ont aucun point d'intersection peuvent être :",

            "Soit parallèles, soit non coplanaires (gauchères).",

            ['Nécessairement parallèles', 'Nécessairement confondues', 'Toujours orthogonales'],
            "Pense à deux lignes de métro qui se croisent à des niveaux de profondeur différents : elles ne se touchent jamais et ne sont pas parallèles.",

            "Deux droites de l'espace sont coplanaires uniquement si elles sont sécantes ou parallèles.",

            "Dans l'espace à 3 dimensions, deux droites sans point commun peuvent être strictement parallèles OU non coplanaires (elles ne sont contenues dans aucun plan commun)."

          );
        } else {
          return this.makeMcq('TG1', 4, 'Droites orthogonales vs perpendiculaires',
            "Distinguer orthogonalité et perpendicularité dans l'espace",

            "Dans l'espace, quelle est la différence entre deux droites perpendiculaires et deux droites orthogonales ?",

            "Deux droites orthogonales ont des vecteurs directeurs orthogonaux ; elles sont perpendiculaires si et seulement si elles sont en outre sécantes.",

            [
              "Il n'y a aucune différence, ce sont deux termes synonymes.",

              "Deux droites perpendiculaires ne sont jamais sécantes.",

              "L'orthogonalité n'existe que pour les plans."

            ],
            "Deux droites peuvent avoir des directions perpendiculaires sans jamais se toucher (non sécantes).",

            "La perpendicularité exige un point de contact à angle droit.",

            "Deux droites sont dites orthogonales dès lors que leurs vecteurs directeurs ont un produit scalaire nul. Elles sont perpendiculaires si et seulement si elles sont en plus sécantes."

          );
        }
      }

      // ---------------------------------------------------------------------
      // TG2 : Produit scalaire dans l'espace et équations cartésiennes de plans
      // ---------------------------------------------------------------------
      case 'TG2': {
        const a = this.randInt(1, 4);
        const b = this.randInt(-3, 3);
        const c = this.randChoice([1, 2, 3]);
        const d = this.randInt(-5, 5);
        if (tier === 1) {
          return this.makeMcq('TG2', 1, 'Vecteur normal à un plan',
            "Identifier le vecteur normal à partir de l'équation cartésienne",

            `Donner un vecteur normal $\\vec{n}$ au plan d'équation cartésienne : $${a}x ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}y + ${c}z ${d >= 0 ? '+ ' + d : '- ' + Math.abs(d)} = 0$.`,
            `$\\vec{n}(${a} ; ${b} ; ${c})$`,
            [`$\\vec{n}(${-a} ; ${b} ; ${c})$`, `$\\vec{n}(${b} ; ${a} ; ${c})$`, `$\\vec{n}(${a} ; ${b} ; ${d})$`],
            "Dans l'espace, tout plan d'équation $ax + by + cz + d = 0$ admet pour vecteur normal orthogonal $\\vec{n}(a ; b ; c)$.",

            "Prends simplement les coefficients multiplicateurs de $x$, $y$ et $z$.",

            `Les coefficients de $x, y, z$ sont respectivement $a = ${a}$, $b = ${b}$, $c = ${c}$. Donc $\\vec{n}(${a} ; ${b} ; ${c})$.`
          );
        } else if (tier === 2) {
          const x1 = this.randInt(-2, 3);
          const y1 = this.randInt(-2, 3);
          const z1 = this.randInt(-2, 3);
          const dot = a * x1 + b * y1 + c * z1;
          return this.makeMcq('TG2', 2, 'Produit scalaire 3D analytique',
            "Calculer $\\vec{u} \\cdot \\vec{v} = xx' + yy' + zz'$",

            `Calculer le produit scalaire des vecteurs $\\vec{u}(${a} ; ${b} ; ${c})$ et $\\vec{v}(${x1} ; ${y1} ; ${z1})$.`,
            `$\\vec{u} \\cdot \\vec{v} = ${dot}$`,
            [`$\\vec{u} \\cdot \\vec{v} = ${dot + 2}$`, `$\\vec{u} \\cdot \\vec{v} = ${dot - 3}$`, `$\\vec{u} \\cdot \\vec{v} = ${dot !== 0 ? -dot : 4}$`, `$\\vec{u} \\cdot \\vec{v} = ${dot + 5}$`],
            "Formule analytique dans l'espace : $\\vec{u} \\cdot \\vec{v} = x x' + y y' + z z'$.",

            `$(${a})(${x1}) + (${b})(${y1}) + (${c})(${z1})$.`,
            `$\\vec{u} \\cdot \\vec{v} = ${a * x1} + (${b * y1}) + (${c * z1}) = ${dot}$.`
          );
        } else if (tier === 3) {
          return this.makeMcq('TG2', 3, 'Plans orthogonaux',
            "Caractériser l'orthogonalité de deux plans par leurs vecteurs normaux",

            "Deux plans $\\mathcal{P}_1$ et $\\mathcal{P}_2$ de vecteurs normaux respectifs $\\vec{n}_1$ et $\\vec{n}_2$ sont perpendiculaires si et seulement si :",

            "$\\vec{n}_1 \\cdot \\vec{n}_2 = 0$",

            ['$\\vec{n}_1$ et $\\vec{n}_2$ sont colinéaires', '$\\vec{n}_1 = \\vec{n}_2$', '$\\vec{n}_1 \\cdot \\vec{n}_2 = 1$'],
            "Deux plans forment un angle droit si et seulement si leurs directions normales sont orthogonales.",

            "L'orthogonalité de deux vecteurs se traduit par un produit scalaire nul.",

            "L'angle dièdre entre deux plans est égal à l'angle entre leurs vecteurs normaux. Ils sont perpendiculaires si et seulement si $\\vec{n}_1 \\cdot \\vec{n}_2 = 0$."

          );
        } else {
          return this.makeMcq('TG2', 4, 'Projeté orthogonal d\'un point sur un plan',
            "Distance d'un point à un plan",

            "Le projeté orthogonal d'un point $A$ sur un plan $\\mathcal{P}$ est :",

            "L'unique point $H \\in \\mathcal{P}$ tel que la droite $(AH)$ est orthogonale au plan $\\mathcal{P}$.",

            [
              "Le point du plan le plus éloigné de $A$.",

              "L'intersection du plan avec l'axe des abscisses.",

              "Le milieu du vecteur normal."

            ],
            "La distance minimale d'un point à un plan est atteinte le long de la direction normale.",

            "La droite reliant $A$ à son projeté doit avoir la direction du vecteur normal $\\vec{n}$.",

            "Par définition géométrique, le projeté orthogonal de $A$ sur $\\mathcal{P}$ est le point $H \\in \\mathcal{P}$ tel que le vecteur $\\vec{AH}$ est colinéaire au vecteur normal du plan."

          );
        }
      }

      // ---------------------------------------------------------------------
      // TS1 : Épreuves répétées, schéma de Bernoulli et loi binomiale
      // ---------------------------------------------------------------------
      case 'TS1': {
        if (tier === 1) {
          const n = 5;
          const k = 2;
          const coeff = 10;
          return this.makeMcq('TS1', 1, 'Coefficients binomiaux',
            "Calculer le coefficient binomial $\\binom{n}{k}$",

            `Calculer le coefficient binomial $\\binom{5}{2}$.`,
            `$\\binom{5}{2} = 10$`,
            [`$\\binom{5}{2} = 5$`, `$\\binom{5}{2} = 20$`, `$\\binom{5}{2} = 2$`],
            "Formule : $\\binom{n}{k} = \\frac{n!}{k!(n-k)!} = \\frac{n(n-1)...}{k!}$.",

            `$\\binom{5}{2} = \\frac{5 \\times 4}{2 \\times 1} = \\frac{20}{2} = 10$.`,
            `$\\binom{5}{2} = \\frac{5 \\times 4}{2 \\times 1} = 10$. C\'est le nombre de chemins à 2 succès dans un arbre à 5 épreuves.`
          );
        } else if (tier === 2) {
          return this.makeMcq('TS1', 2, 'Formule de la loi binomiale',
            "Connaître $P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$",

            "Soit $X$ une variable aléatoire suivant la loi binomiale $\\mathcal{B}(n, p)$. Quelle est la probabilité d'obtenir exactement $k$ succès ?",

            "$P(X = k) = \\binom{n}{k} p^k (1 - p)^{n - k}$",

            [
              "$P(X = k) = p^k (1 - p)^{n - k}$",

              "$P(X = k) = \\binom{n}{k} p^{n-k} (1 - p)^k$",

              "$P(X = k) = \\frac{p^k}{k!}$"

            ],
            "Chaque chemin menant à $k$ succès a pour probabilité $p^k (1-p)^{n-k}$, et il y a $\\binom{n}{k}$ chemins identiques.",

            "On multiplie le nombre de chemins par la probabilité d'un chemin.",

            "D'après la loi binomiale $\\mathcal{B}(n, p)$, la probabilité d'obtenir $k$ succès parmi $n$ tirages indépendants est $P(X = k) = \\binom{n}{k} p^k (1 - p)^{n - k}$."

          );
        } else if (tier === 3) {
          const n = this.randChoice([20, 50, 100]);
          const p = 0.2;
          const eX = n * p;
          return this.makeMcq('TS1', 3, 'Espérance d\'une loi binomiale',
            "Appliquer la formule $E(X) = np$",

            `Soit $X \\sim \\mathcal{B}(${n} ; 0{,}2)$. Quelle est l'espérance mathématique $E(X)$ ?`,
            `$E(X) = ${eX}$`,
            [`$E(X) = ${n * 0.8}$`, `$E(X) = 0{,}2$`, `$E(X) = ${eX * 2}$`],
            "Pour une loi binomiale $\\mathcal{B}(n, p)$, l'espérance est le produit $E(X) = n \\times p$.",

            `Calcule $${n} \\times 0{,}2$.`,
            `$E(X) = n \\times p = ${n} \\times 0{,}2 = ${eX}$. Cela représente le nombre moyen de succès espérés.`
          );
        } else {
          return this.makeMcq('TS1', 4, 'Variance d\'une loi binomiale',
            "Appliquer la formule $V(X) = np(1-p)$",

            "Quelle est la variance $V(X)$ d'une variable aléatoire $X \\sim \\mathcal{B}(n, p)$ ?",

            "$V(X) = np(1 - p)$",

            ['$V(X) = np$', '$V(X) = \\sqrt{np(1-p)}$', '$V(X) = n^2 p (1-p)$'],
            "La variance d'une épreuve de Bernoulli est $p(1-p)$. Par indépendance, on additionne les variances.",

            "L'écart-type serait la racine carrée $\\sigma(X) = \\sqrt{np(1-p)}$.",

            "Pour une variable aléatoire binomiale $X \\sim \\mathcal{B}(n, p)$, la variance vaut $V(X) = np(1 - p)$."

          );
        }
      }

      // ---------------------------------------------------------------------
      // TS2 : Sommes de variables aléatoires et loi des grands nombres
      // ---------------------------------------------------------------------
      case 'TS2': {
        if (tier === 1) {
          return this.makeMcq('TS2', 1, 'Linéarité de l\'espérance',
            "Appliquer $E(X + Y) = E(X) + E(Y)$",

            "Soient deux variables aléatoires $X$ et $Y$ définies sur le même univers avec $E(X) = 3$ et $E(Y) = 5$. Que vaut $E(X + Y)$ ?",

            "$E(X + Y) = 8$",

            ['$E(X + Y) = 15$', '$E(X + Y) = 2$', 'On ne peut pas savoir si elles ne sont pas indépendantes'],
            "L'espérance est TOUJOURS linéaire, que les variables soient indépendantes ou non !",

            "$E(X + Y) = E(X) + E(Y) = 3 + 5$.",

            "Par linéarité de l'espérance (propriété toujours vraie, même sans indépendance) : $E(X + Y) = E(X) + E(Y) = 3 + 5 = 8$."

          );
        } else if (tier === 2) {
          return this.makeMcq('TS2', 2, 'Variance de la somme de variables indépendantes',
            "Appliquer $V(X + Y) = V(X) + V(Y)$ pour des variables indépendantes",

            "Si $X$ et $Y$ sont deux variables aléatoires INDÉPENDANTES avec $V(X) = 4$ et $V(Y) = 9$, que vaut $V(X + Y)$ ?",

            "$V(X + Y) = 13$",

            ['$V(X + Y) = 5$', '$V(X + Y) = 36$', '$V(X + Y) = 25$'],
            "Pour des variables indépendantes, les variances s'additionnent : $V(X + Y) = V(X) + V(Y)$.",

            "Additionne simplement 4 et 9.",

            "L'indépendance assure que la covariance est nulle, d'où $V(X + Y) = V(X) + V(Y) = 4 + 9 = 13$."

          );
        } else if (tier === 3) {
          return this.makeMcq('TS2', 3, 'Inégalité de Bienaymé-Tchebychev',
            "Connaître $P(|X - E(X)| \\ge \\varepsilon) \\le \\frac{V(X)}{\\varepsilon^2}$",

            "Pour toute variable aléatoire $X$ d'espérance $\\mu$ et de variance $V$, quelle est l'inégalité de Bienaymé-Tchebychev pour tout $\\varepsilon > 0$ ?",

            "$P(|X - \\mu| \\ge \\varepsilon) \\le \\frac{V(X)}{\\varepsilon^2}$",

            [
              "$P(|X - \\mu| \\ge \\varepsilon) \\le \\frac{\\sigma(X)}{\\varepsilon}$",

              "$P(|X - \\mu| \\ge \\varepsilon) \\ge \\frac{V(X)}{\\varepsilon^2}$",

              "$P(|X - \\mu| \\le \\varepsilon) = 1$"

            ],
            "Cette inégalité borne la probabilité que la variable s'écarte de sa moyenne par sa variance.",

            "Le membre de droite est $\\frac{V(X)}{\\varepsilon^2}$.",

            "L'inégalité de Bienaymé-Tchebychev s'écrit : $P(|X - E(X)| \\ge \\varepsilon) \\le \\frac{V(X)}{\\varepsilon^2}$."

          );
        } else {
          return this.makeMcq('TS2', 4, 'Loi faible des grands nombres',
            "Comprendre la convergence de la moyenne empirique vers l'espérance",

            "Que stipule la loi des grands nombres pour une suite de variables indépendantes et de même loi d'espérance $\\mu$ ?",

            "La moyenne empirique $M_n = \\frac{1}{n} \\sum_{i=1}^n X_i$ converge en probabilité vers l'espérance théorique $\\mu$.",

            [
              "La somme $\\sum X_i$ reste constante et égale à $\\mu$.",

              "La variance devient infinie quand $n$ grandit.",

              "La moyenne empirique est toujours exactement égale à $\\mu$ dès que $n \\ge 30$."

            ],
            "Plus on répète une expérience aléatoire, plus la moyenne des résultats observés se rapproche de l'espérance mathématique.",

            "C'est le fondement de toutes les statistiques et des sondages.",

            "La loi des grands nombres garantit que pour tout $\\varepsilon > 0$, $\\lim_{n \\to +\\infty} P(|M_n - \\mu| \\ge \\varepsilon) = 0$. La moyenne empirique tend vers la valeur théorique $\\mu$."

          );
        }
      }

      // ---------------------------------------------------------------------
      // TX1 : Nombres complexes : forme algébrique et équations
      // ---------------------------------------------------------------------
      case 'TX1': {
        const a = this.randInt(1, 5);
        const b = this.randInt(1, 5);
        if (tier === 1) {
          return this.makeMcq('TX1', 1, 'Parties réelle et imaginaire',
            "Identifier $\\text{Re}(z)$ et $\\text{Im}(z)$ dans l'écriture $a + ib$",

            `Quelles sont les parties réelle et imaginaire du nombre complexe $z = ${a} - ${b}i$ ?`,
            `$\\text{Re}(z) = ${a}$ et $\\text{Im}(z) = -${b}$`,
            [`$\\text{Re}(z) = ${a}$ et $\\text{Im}(z) = -${b}i$`, `$\\text{Re}(z) = -${b}$ et $\\text{Im}(z) = ${a}$`, `$\\text{Re}(z) = ${a + b}$`],
            "La partie imaginaire est un nombre RÉEL (le coefficient devant $i$, sans inclure $i$).",

            `Le signe moins fait partie intégrante de la partie imaginaire.`,
            `Dans $z = a + ib$, on a $\\text{Re}(z) = a = ${a}$ et $\\text{Im}(z) = b = -${b}$.`
          );
        } else if (tier === 2) {
          const mod2 = a * a + b * b;
          return this.makeMcq('TX1', 2, 'Conjugué et module au carré',
            "Calculer le produit $z \\bar{z} = a^2 + b^2$",

            `Pour $z = ${a} + ${b}i$, que vaut le produit $z \\bar{z}$ ?`,
            `$z \\bar{z} = ${mod2}$`,
            [`$z \\bar{z} = ${a * a - b * b}$`, `$z \\bar{z} = ${a * a + b * b}i$`, `$z \\bar{z} = ${2 * a}$`],
            "Le conjugué est $\\bar{z} = a - ib$. Alors $(a + ib)(a - ib) = a^2 - (ib)^2 = a^2 + b^2$.",

            `Calcule $${a}^2 + ${b}^2 = ${a * a} + ${b * b}$.`,
            `$z \\bar{z} = (${a} + ${b}i)(${a} - ${b}i) = ${a}^2 - (${b}i)^2 = ${a * a} - (${b * b}(-1)) = ${a * a} + ${b * b} = ${mod2}$.`
          );
        } else if (tier === 3) {
          return this.makeMcq('TX1', 3, 'Inverse d\'un nombre complexe',
            "Écrire $\\frac{1}{z}$ sous forme algébrique en multipliant par le conjugué",

            "Sous quelle forme algébrique s'écrit l'inverse de $z = 1 + i$ ?",

            "$\\frac{1}{1 + i} = \\frac{1 - i}{2} = \\frac{1}{2} - \\frac{1}{2}i$",

            ['$1 - i$', '$\\frac{1}{2} + \\frac{1}{2}i$', '$-1 - i$'],
            "Multiplie le numérateur et le dénominateur par le conjugué $1 - i$.",

            "Au dénominateur : $(1+i)(1-i) = 1^2 - i^2 = 1 - (-1) = 2$.",

            `$\\frac{1}{1+i} = \\frac{1-i}{(1+i)(1-i)} = \\frac{1-i}{2} = \\frac{1}{2} - \\frac{1}{2}i$.`
          );
        } else {
          return this.makeMcq('TX1', 4, 'Équation du second degré à discriminant négatif',
            "Résoudre dans C l'équation $az^2 + bz + c = 0$ quand Delta < 0",

            "Résoudre dans $\\mathbb{C}$ l'équation : $z^2 + 4 = 0$.",

            "$S = \\{-2i, 2i\\}$",

            ['$S = \\{-2, 2\\}$', '$S = \\{2i\\}$', '$S = \\emptyset$'],
            "$z^2 = -4$. Dans $\\mathbb{C}$, $-1 = i^2$, donc $-4 = 4i^2 = (2i)^2$.",

            `Les deux racines sont $-2i$ et $2i$.`,
            `$z^2 = -4 \\iff z^2 = (2i)^2 \\iff z^2 - (2i)^2 = 0 \\iff (z - 2i)(z + 2i) = 0$, donc $S = \\{-2i, 2i\\}$.`
          );
        }
      }

      // ---------------------------------------------------------------------
      // TX2 : Nombres complexes et géométrie : trigonométrie et exponentielle
      // ---------------------------------------------------------------------
      case 'TX2': {
        if (tier === 1) {
          return this.makeMcq('TX2', 1, 'Formule d\'Euler et notation exponentielle',
            "Connaître $e^{i\\theta} = \\cos(\\theta) + i\\sin(\\theta)$",

            "Quelle est l'écriture trigonométrique de l'exponentielle imaginaire $e^{i\\theta}$ ?",

            "$e^{i\\theta} = \\cos(\\theta) + i\\sin(\\theta)$",

            ['$e^{i\\theta} = \\sin(\\theta) + i\\cos(\\theta)$', '$e^{i\\theta} = \\cos(\\theta) - i\\sin(\\theta)$', '$e^{i\\theta} = i\\theta$'],
            "C'est la célèbre formule d'Euler reliant l'analyse complexe et la trigonométrie.",

            "La partie réelle est $\\cos(\\theta)$ et la partie imaginaire est $\\sin(\\theta)$.",

            "Par définition d'Euler, $e^{i\\theta} = \\cos(\\theta) + i\\sin(\\theta)$."

          );
        } else if (tier === 2) {
          return this.makeMcq('TX2', 2, 'Module et argument d\'un complexe usuel',
            "Déterminer $r$ et $\\theta$ pour $1 + i$",

            "Quels sont le module et un argument du nombre complexe $z = 1 + i$ ?",

            "$|z| = \\sqrt{2}$ et $\\arg(z) = \\frac{\\pi}{4} \\ [2\\pi]$",

            ['$|z| = 2$ et $\\arg(z) = \\frac{\\pi}{4}$', '$|z| = \\sqrt{2}$ et $\\arg(z) = \\frac{\\pi}{2}$', '$|z| = 1$ et $\\arg(z) = 0$'],
            "Module : $|z| = \\sqrt{a^2 + b^2} = \\sqrt{1^2 + 1^2} = \\sqrt{2}$.",

            `Factorise par $\\sqrt{2}$ : $1+i = \\sqrt{2}\\left(\\frac{\\sqrt{2}}{2} + i\\frac{\\sqrt{2}}{2}\\right)$.`,
            `On a $|z| = \\sqrt{1+1} = \\sqrt{2}$ et $\\cos(\\theta) = \\sin(\\theta) = \\frac{\\sqrt{2}}{2}$, donc $\\theta = \\frac{\\pi}{4} \\ [2\\pi]$.`
          );
        } else if (tier === 3) {
          return this.makeMcq('TX2', 3, 'Formule de Moivre',
            "Appliquer $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$",

            "D'après la formule de Moivre, que vaut $(e^{i\\theta})^n$ pour tout $n \\in \\mathbb{Z}$ ?",

            "$\\cos(n\\theta) + i\\sin(n\\theta)$",

            ['$\\cos^n(\\theta) + i\\sin^n(\\theta)$', '$n(\\cos\\theta + i\\sin\\theta)$', '$e^{n + i\\theta}$'],
            "Les puissances d'exponentielles multiplient les arguments : $(e^{i\\theta})^n = e^{i n \\theta}$.",

            "Applique ensuite la formule d'Euler à l'angle $n\\theta$.",

            "La formule de Moivre stipule que $(e^{i\\theta})^n = e^{in\\theta} = \\cos(n\\theta) + i\\sin(n\\theta)$."

          );
        } else {
          return this.makeMcq('TX2', 4, 'Interprétation géométrique d\'un quotient complexe',
            "Lien entre angle de vecteurs et argument d'un quotient",

            "Dans le plan complexe, à quoi correspond géométriquement l'argument du quotient $\\frac{z_C - z_A}{z_B - z_A}$ ?",

            "À la mesure de l'angle orienté $(\\vec{AB}, \\vec{AC}) \\ [2\\pi]$.",

            [
              "À la distance $BC$.",

              "À la mesure de l'angle $(\\vec{AC}, \\vec{AB})$.",

              "Au produit scalaire $\\vec{AB} \\cdot \\vec{AC}$."

            ],
            "Rappelle-toi que $\\arg(z_C - z_A) = (\\vec{u}, \\vec{AC})$ et $\\arg(z_B - z_A) = (\\vec{u}, \\vec{AB})$.",

            "La différence des arguments donne $(\\vec{u}, \\vec{AC}) - (\\vec{u}, \\vec{AB}) = (\\vec{AB}, \\vec{AC})$ d'après la relation de Chasles.",

            "On a $\\arg\\left(\\frac{z_C - z_A}{z_B - z_A}\\right) = \\arg(z_C - z_A) - \\arg(z_B - z_A) = (\\vec{AB}, \\vec{AC}) \\ [2\\pi]$."

          );
        }
      }

      // ---------------------------------------------------------------------
      // TX3 : Arithmétique dans Z et congruences
      // ---------------------------------------------------------------------
      case 'TX3': {
        const n = this.randChoice([5, 7, 9]);
        const a = this.randInt(10, 30);
        const r = a % n;
        if (tier === 1) {
          return this.makeMcq('TX3', 1, 'Définition de la congruence modulo $n$',
            "Reconnaître que $a \\equiv b \\pmod n \\iff n$ divise $a - b$",

            `Quel est le reste de la division euclidienne de $${a}$ par $${n}$ (soit $${a} \\equiv r \\pmod{${n}}$ avec $0 \\le r < ${n}$) ?`,
            `$r = ${r}$`,
            [`$r = ${r + 1}$`, `$r = ${n - r}$`, `$r = 0$`],
            "Effectue la division euclidienne : $a = bq + r$ avec $0 \\le r < b$.",

            `$${a} = ${n} \\times ${Math.floor(a / n)} + ${r}$.`,
            `On a $${a} = ${n} \\times ${Math.floor(a / n)} + ${r}$ avec $0 \\le ${r} < ${n}$, donc $${a} \\equiv ${r} \\pmod{${n}}$.`
          );
        } else if (tier === 2) {
          return this.makeMcq('TX3', 2, 'Compatibilité des congruences avec les opérations',
            "Propriété fondamentale de l'addition et de la multiplication modulo $n$",

            "Si $a \\equiv b \\pmod n$ et $c \\equiv d \\pmod n$, alors :",

            "$a + c \\equiv b + d \\pmod n$ et $a \\times c \\equiv b \\times d \\pmod n$",

            [
              "Seule l'addition est compatible avec les congruences.",

              "Seule la multiplication est compatible avec les congruences.",

              "$a / c \\equiv b / d \\pmod n$ dans tous les cas."

            ],
            "Les congruences sont compatibles avec l'addition, la soustraction, la multiplication et les puissances entières.",

            "Attention : la division n'est généralement pas permise sans inversibilité.",

            "Les congruences forment un anneau quotient : elles sont entièrement compatibles avec l'addition et la multiplication."

          );
        } else if (tier === 3) {
          return this.makeMcq('TX3', 3, 'Petit théorème de Fermat',
            "Appliquer $a^{p-1} \\equiv 1 \\pmod p$ pour $p$ premier et $\gcd(a, p) = 1$",

            "Soit $p$ un nombre premier et $a$ un entier non divisible par $p$. Que vaut $a^{p-1} \\pmod p$ d'après le petit théorème de Fermat ?",

            "$a^{p-1} \\equiv 1 \\pmod p$",

            ['$a^{p-1} \\equiv 0 \\pmod p$', '$a^{p-1} \\equiv a \\pmod p$', '$a^{p-1} \\equiv p - 1 \\pmod p$'],
            "C'est le petit théorème de Fermat, fondamental pour les tests de primalité et le RSA.",

            "Sous forme équivalente pour tout entier : $a^p \\equiv a \\pmod p$.",

            "D'après le petit théorème de Fermat, si $p$ est premier et ne divise pas $a$, alors $a^{p-1} \\equiv 1 \\pmod p$."

          );
        } else {
          return this.makeMcq('TX3', 4, 'Chiffre des unités d\'une grande puissance',
            "Calculer modulo 10 à l'aide des congruences",

            "Quel est le chiffre des unités de $7^4$ dans son écriture décimale ?",

            "1 (car $7^4 = 2401 \\equiv 1 \\pmod{10}$)",

            ['7', '9', '3'],
            "Le chiffre des unités d'un entier est son reste modulo 10.",

            `$7^1 = 7$, $7^2 = 49 \\equiv 9$, $7^3 \\equiv 9 \\times 7 = 63 \\equiv 3$, $7^4 \\equiv 3 \\times 7 = 21 \\equiv 1 \\pmod{10}$.`,
            `On a $7^2 = 49 \\equiv -1 \\pmod{10}$, donc $7^4 = (7^2)^2 \\equiv (-1)^2 \\equiv 1 \\pmod{10}$. Le chiffre des unités est 1.`
          );
        }
      }

      // ---------------------------------------------------------------------
      // TX4 : Théorèmes de Bézout et de Gauss, chiffrement RSA
      // ---------------------------------------------------------------------
      case 'TX4': {
        if (tier === 1) {
          return this.makeMcq('TX4', 1, 'Théorème de Bézout',
            "Caractérisation de deux entiers premiers entre eux : $au + bv = 1$",

            "D'après le théorème de Bézout, deux entiers non nuls $a$ et $b$ sont premiers entre eux ($\\text{PGCD}(a, b) = 1$) si et seulement si :",

            "Il existe deux entiers relatifs $u$ et $v$ tels que $au + bv = 1$.",

            [
              "Il existe $u$ et $v$ tels que $au + bv = 0$.",

              "$a$ et $b$ sont tous les deux des nombres premiers.",

              "$a + b = 1$."

            ],
            "L'égalité $au + bv = 1$ est appelée identité de Bézout.",

            "Les coefficients $u$ et $v$ se calculent grâce à l'algorithme d'Euclide étendu.",

            "Le théorème de Bézout affirme que $\\text{PGCD}(a, b) = 1 \\iff \\exists u, v \\in \\mathbb{Z}, au + bv = 1$."

          );
        } else if (tier === 2) {
          return this.makeMcq('TX4', 2, 'Théorème de Gauss',
            "Énoncer le théorème de Gauss : si $a | bc$ et $\gcd(a, b) = 1$ alors $a | c$",

            "Soient $a, b, c$ trois entiers relatifs non nuls. Si $a$ divise le produit $bc$ et si $\\text{PGCD}(a, b) = 1$, que conclut le théorème de Gauss ?",

            "$a$ divise $c$",

            ['$a$ divise $b$', '$b$ divise $c$', '$a = c$'],
            "Comme $a$ ne partage aucun facteur avec $b$, il doit nécessairement diviser l'autre facteur $c$.",

            "On le démontre en multipliant l'identité de Bézout $au + bv = 1$ par $c$.",

            "D'après le théorème de Gauss, si $a$ divise un produit $bc$ et est premier avec $b$, alors $a$ divise nécessairement $c$."

          );
        } else if (tier === 3) {
          return this.makeMcq('TX4', 3, 'Corollaire du théorème de Gauss',
            "Divisibilité par un produit de nombres premiers entre eux",

            "Si un entier $n$ est divisible par 3 et par 4, est-il nécessairement divisible par 12 ?",

            "Oui, car 3 et 4 sont premiers entre eux (PGCD(3, 4) = 1).",

            [
              "Non, il pourrait être divisible par 7 uniquement.",

              "Oui, c'est vrai pour n'importe quelle paire d'entiers même s'ils ne sont pas premiers entre eux.",

              "Uniquement si $n$ est pair."

            ],
            "Si $a|n$ et $b|n$ avec $\\text{PGCD}(a, b) = 1$, alors le produit $ab$ divise $n$.",

            "Attention : si $\\text{PGCD}(a, b) \\neq 1$, ce n'est pas vrai (ex: divisible par 4 et par 6 n'implique pas 24).",

            "Puisque 3 et 4 sont premiers entre eux, d'après le corollaire du théorème de Gauss, leur produit $3 \\times 4 = 12$ divise $n$."

          );
        } else {
          return this.makeMcq('TX4', 4, 'Principe du chiffrement RSA',
            "Comprendre le rôle de la clé publique et de la clé privée en arithmétique",

            "Dans le protocole de chiffrement asymétrique RSA, sur quelle difficulté calculatoire repose la sécurité de la clé privée ?",

            "La difficulté algorithmique de factoriser un très grand nombre $N = pq$ en produit de deux nombres premiers géants.",

            [
              "L'impossibilité de calculer des congruences modulo $N$.",

              "La lenteur de l'algorithme d'Euclide.",

              "Le fait que $\\pi$ soit irrationnel."

            ],
            "Multiplier deux nombres premiers de 300 chiffres est instantané ; retrouver ces deux nombres à partir de leur produit prend des milliards d'années.",

            "C'est le principe de la fonction à sens unique avec trappe.",

            "La sécurité du RSA repose sur l'asymétrie de complexité : le produit $N = pq$ est facile à calculer mais la factorisation en facteurs premiers de grands entiers est intirable en temps raisonnable."

          );
        }
      }

      // ---------------------------------------------------------------------
      // TX5 : Calcul matriciel, graphes et chaînes de Markov
      // ---------------------------------------------------------------------
      case 'TX5': {
        if (tier === 1) {
          return this.makeMcq('TX5', 1, 'Produit de deux matrices carrées $2 \\times 2$',
            "Règle du produit ligne par colonne",

            "Soient $A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 3 \\end{pmatrix}$ et $B = \\begin{pmatrix} 2 & 1 \\\\ 1 & 0 \\end{pmatrix}$. Quel est le premier coefficient $(AB)_{1,1}$ ?",

            "$(AB)_{1,1} = 1 \\times 2 + 2 \\times 1 = 4$",

            ['$(AB)_{1,1} = 2$', '$(AB)_{1,1} = 1$', '$(AB)_{1,1} = 6$'],
            "Le coefficient $(AB)_{1,1}$ est le produit scalaire de la 1ère ligne de $A$ par la 1ère colonne de $B$.",

            `Ligne 1 de $A$ : $(1, 2)$ ; Colonne 1 de $B$ : $(2, 1)^T$.`,
            `$(AB)_{1,1} = 1 \\times 2 + 2 \\times 1 = 2 + 2 = 4$.`
          );
        } else if (tier === 2) {
          return this.makeMcq('TX5', 2, 'Inverse d\'une matrice $2 \\times 2$',
            "Condition d'inversibilité : déterminant non nul $\\det(M) \\neq 0$",

            "La matrice $M = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ est inversible si et seulement si :",

            "Son déterminant $\\det(M) = ad - bc \\neq 0$",

            ['$a + d \\neq 0$', 'Tous ses coefficients sont non nuls', '$ad - bc = 0$'],
            "L'inverse fait intervenir la division par le déterminant : $M^{-1} = \\frac{1}{ad-bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$.",

            "On ne peut jamais diviser par zéro.",

            "Une matrice carrée d'ordre 2 est inversible si et seulement si son déterminant est non nul : $\\det(M) = ad - bc \\neq 0$."

          );
        } else if (tier === 3) {
          return this.makeMcq('TX5', 3, 'Matrice de transition d\'une chaîne de Markov',
            "Propriété stochastique des lignes d'une matrice de transition",

            "Dans un graphe probabiliste, quelle est la propriété caractéristique fondamentale de la matrice de transition $P$ ?",

            "La somme des coefficients de chaque ligne est égale à 1.",

            [
              "La somme des coefficients de chaque colonne est égale à 1.",

              "La matrice est obligatoirement symétrique.",

              "Le déterminant vaut toujours 1."

            ],
            "Depuis un sommet donné, la somme des probabilités de toutes les sorties possibles vaut 1 (événement certain).",

            "Chaque ligne représente la distribution conditionnelle des transitions depuis un état.",

            "Puisque depuis chaque état la somme des probabilités de transition vers tous les états possibles vaut 1, la somme des termes de chaque ligne d'une matrice de transition stochastique vaut 1."

          );
        } else {
          return this.makeMcq('TX5', 4, 'État stable d\'une chaîne de Markov',
            "Résoudre le système $\\pi P = \\pi$ avec $\\sum \\pi_i = 1$",

            "L'état stable d'un graphe probabiliste de matrice de transition $P$ est la distribution de probabilité $\\pi$ vérifiant :",

            "$\\pi P = \\pi$ avec la condition $\\pi_1 + \\pi_2 + \dots = 1$",

            ['$P \\pi = 0$', '$\\pi P = 0$', '$\\pi = (1, 1, \dots)$'],
            "Un état stable ne change plus d'une étape à la suivante : la distribution après transition reste identique.",

            "Il faut toujours adjoindre la condition que les composantes forment une loi de probabilité (somme égale à 1).",

            "L'état stable $\\pi$ est le vecteur propre à gauche associé à la valeur propre 1 : il vérifie $\\pi P = \\pi$ et la somme de ses composantes est égale à 1."

          );
        }
      }

      default:
        return this.generateDefaultLycee(chapterId, tier);
    }
  },

  generateDefaultLycee(chapterId, tier) {
    const a = this.randInt(2, 6);
    const b = this.randInt(-5, 5);
    return this.makeMcq(chapterId, tier, "Question d'entraînement Lycée",
      "Résolution d'équations et calcul algébrique",
      `Soit la fonction affine $f(x) = ${a}x ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}$. Quelle est la racine de $f$ (valeur où $f(x) = 0$) ?`,
      `$x = ${this.simplifyFrac(-b, a)}$`,
      [`$x = ${this.simplifyFrac(b, a)}$`, `$x = ${a}$`, `$x = ${b}$`],
      "Résous l'équation du premier degré : ax + b = 0.",
      `$${a}x = ${-b} \\implies x = ${this.simplifyFrac(-b, a)}$.`,
      `$${a}x ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)} = 0 \\iff ${a}x = ${-b} \\iff x = ${this.simplifyFrac(-b, a)}$.`
    );
  }
};

// Branchement automatique sur MathsAdvancedGenerators
if (typeof window !== 'undefined' && window.MathsAdvancedGenerators) {
  window.MathsAdvancedGenerators.generateLycee2nde = function(ch, t) {
    return window.MathsLyceeGenerators.generate(ch, t);
  };
  window.MathsAdvancedGenerators.generateLycee1ere = function(ch, t) {
    return window.MathsLyceeGenerators.generate(ch, t);
  };
  window.MathsAdvancedGenerators.generateLyceeTale = function(ch, t) {
    return window.MathsLyceeGenerators.generate(ch, t);
  };
}
