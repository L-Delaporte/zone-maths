# ARCHIVE : ne plus relancer, js/lyceeGenerators.js est la source de vérité
# -*- coding: utf-8 -*-
"""
Builder pour la classe de Seconde (13 chapitres : 2N1-2N4, 2A1-2A3, 2G1-2G3, 2S1-2S3)
Chaque chapitre a 4 paliers procéduraux dynamiques.
"""

def get_2nde_code():
    return '''
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
            { val: '-24/6', simp: '-4', ans: '$\\\\mathbb{Z}$', dist: ['$\\\\mathbb{N}$', '$\\\\mathbb{D}$', '$\\\\mathbb{Q}$'], exp: '-24/6 = -4 est un entier relatif négatif (non naturel).' },
            { val: '42/7', simp: '6', ans: '$\\\\mathbb{N}$', dist: ['$\\\\mathbb{Z}$', '$\\\\mathbb{D}$', '$\\\\mathbb{Q}$'], exp: '42/7 = 6 est un entier naturel positif.' },
            { val: '3/8', simp: '0{,}375', ans: '$\\\\mathbb{D}$', dist: ['$\\\\mathbb{N}$', '$\\\\mathbb{Z}$', '$\\\\mathbb{Q}$'], exp: '3/8 = 0,375 possède un nombre fini de chiffres après la virgule, c\\'est un nombre décimal.' },
            { val: '5/6', simp: '0{,}8333...', ans: '$\\\\mathbb{Q}$', dist: ['$\\\\mathbb{D}$', '$\\\\mathbb{Z}$', '$\\\\mathbb{R}$'], exp: '5/6 a un développement décimal infini périodique : c\\'est un rationnel non décimal.' },
            { val: '\\\\sqrt{49}', simp: '7', ans: '$\\\\mathbb{N}$', dist: ['$\\\\mathbb{Z}$', '$\\\\mathbb{Q}$', '$\\\\mathbb{R} \\\\setminus \\\\mathbb{Q}$'], exp: '\\\\sqrt{49} = 7 est un entier naturel.' },
            { val: '\\\\sqrt{7}', simp: 'irrationnel', ans: '$\\\\mathbb{R} \\\\setminus \\\\mathbb{Q}$', dist: ['$\\\\mathbb{Q}$', '$\\\\mathbb{D}$', '$\\\\mathbb{Z}$'], exp: '7 n\\'est pas un carré parfait, \\\\sqrt{7} est un nombre irrationnel.' }
          ];
          const pick = this.randChoice(sets);
          return this.makeMcq('2N1', 1, 'Ensemble de nombres fondamental',
            "Identifier le plus petit ensemble auquel appartient un réel",

            `Quel est le plus petit ensemble de nombres auquel appartient $A = ${pick.val}$ ?`,
            pick.ans, pick.dist,
            "Simplifie d\'abord le nombre sous sa forme la plus simple.",

            "Rappelle-toi la chaîne des inclusions : $\\\\mathbb{N} \\\\subset \\\\mathbb{Z} \\\\subset \\\\mathbb{D} \\\\subset \\\\mathbb{Q} \\\\subset \\\\mathbb{R}$.",

            `En simplifiant, $A = ${pick.simp}$. ${pick.exp} Le plus petit ensemble est donc ${pick.ans}.`
          );
        } else if (tier === 2) {
          const a = this.randInt(2, 7);
          const b = this.randChoice([2, 3, 5, 7]);
          const N = a * a * b;
          return this.makeMcq('2N1', 2, 'Simplification de radicaux',
            "Décomposer en facteurs premiers et extraire les carrés parfaits",

            `Écrire sous la forme $a\\\\sqrt{b}$ (avec $b$ entier le plus petit possible) : $\\\\sqrt{${N}}$.`,
            `$${a}\\\\sqrt{${b}}$`,
            [`$${a * 2}\\\\sqrt{${b}}$`, `$${b}\\\\sqrt{${a}}$`, `$${a * a}\\\\sqrt{${b}}$`],
            `Trouve le plus grand carré parfait qui divise ${N}.`,
            `Remarque que $${N} = ${a * a} \\\\times ${b} = ${a}^2 \\\\times ${b}$.`,
            `$\\\\sqrt{${N}} = \\\\sqrt{${a}^2 \\\\times ${b}} = \\\\sqrt{${a}^2} \\\\times \\\\sqrt{${b}} = ${a}\\\\sqrt{${b}}$.`
          );
        } else if (tier === 3) {
          const p = this.randChoice([16, 25, 40, 50, 80]);
          const num = this.randChoice([3, 7, 9, 11, 13]);
          return this.makeMcq('2N1', 3, 'Caractérisation des nombres décimaux',
            "Reconnaître un décimal par les facteurs de son dénominateur",

            `Laquelle des fractions suivantes appartient à l'ensemble des décimaux $\\\\mathbb{D}$ ?`,
            `$\\\\frac{${num}}{${p}}$`,
            [`$\\\\frac{${num}}{${p + 3}}$`, `$\\\\frac{${num}}{21}$`, `$\\\\frac{1}{6}$`],
            "Une fraction irréductible est décimale si et seulement si son dénominateur ne contient que 2 et 5 comme facteurs premiers.",

            `Décompose ${p} en produit de facteurs premiers : observe s\\'il n\\'y a que des 2 et des 5.`,
            `La fraction $\\\\frac{${num}}{${p}}$ est décimale car son dénominateur ${p} ne contient aucun facteur premier autre que 2 et 5. Les autres dénominateurs comportent des facteurs 3 ou 7.`
          );
        } else {
          return this.makeMcq('2N1', 4, 'Irrationalité de $\\\\sqrt{2}$',
            "Comprendre le raisonnement par l\'absurde d\'Euclide",

            "Dans la démonstration que $\\\\sqrt{2}$ est irrationnel par l\'absurde en posant $\\\\sqrt{2} = \\\\frac{p}{q}$ irréductible, quelle contradiction finale obtient-on ?",

            "$p$ et $q$ sont tous les deux pairs, ce qui contredit le fait que la fraction est irréductible.",

            [
              "On obtient que $2 = 0$, ce qui est absurde.",

              "$p$ est pair et $q$ est impair, ce qui est impossible pour une fraction.",

              "Le dénominateur $q$ est nul, ce qui est interdit."

            ],
            "On montre d\'abord que $p^2 = 2q^2$ donc $p$ est pair, puis en posant $p = 2k$ on prouve que $q$ est pair.",

            "Une fraction irréductible ne peut pas avoir deux termes pairs divisibles par 2.",

            "En prouvant que $p$ et $q$ sont tous deux divisibles par 2, on contredit l\'hypothèse initiale que $\\\\frac{p}{q}$ était une fraction irréductible. Donc $\\\\sqrt{2}$ est irrationnel."

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
          return this.makeMcq('2N2', 1, 'Développement : carré d\\'une somme',
            "Appliquer la formule $(u + v)^2 = u^2 + 2uv + v^2$",

            `Développer et réduire l'expression : $A = (${a}x + ${b})^2$.`,
            `$${a2}x^2 + ${twoab}x + ${b2}$`,
            [`$${a2}x^2 + ${b2}$`, `$${a}x^2 + ${twoab}x + ${b2}$`, `$${a2}x^2 - ${twoab}x + ${b2}$`],
            "Identité remarquable : $(u + v)^2 = u^2 + 2uv + v^2$.",

            `Ici $u = ${a}x$ et $v = ${b}$, donc le double produit vaut $2 \\\\times (${a}x) \\\\times ${b} = ${twoab}x$.`,
            `$(${a}x + ${b})^2 = (${a}x)^2 + 2 \\\\times ${a}x \\\\times ${b} + ${b}^2 = ${a2}x^2 + ${twoab}x + ${b2}$.`
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

            "Les doubles produits s\'annulent mutuellement.",

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
            "Associer inégalités et crochets d\'un intervalle",

            `À quel intervalle appartient le réel $x$ si : $${minVal} \\\\le x < ${maxVal}$ ?`,
            `$[${minVal} ; ${maxVal}[$`,
            [`$]${minVal} ; ${maxVal}]$`, `$]${minVal} ; ${maxVal}[$`, `$[${minVal} ; ${maxVal}]$`],
            "Une inégalité large $\\\\le$ donne un crochet fermé [, une inégalité stricte $<$ donne un crochet ouvert [.",

            `$x \\\\ge ${minVal}$ signifie que ${minVal} est inclus (crochet fermé).`,
            `L\\'inégalité $${minVal} \\\\le x < ${maxVal}$ correspond exactement à l\\'intervalle $[${minVal} ; ${maxVal}[$.`
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

            `Calcule d\\'abord la différence intérieure : ${x0} - ${c} = ${x0 - c}.`,
            `$|${x0} - ${c}| = |${x0 - c}| = ${d}$. Une distance est toujours positive ou nulle.`
          );
        } else if (tier === 3) {
          const minVal = c - r;
          const maxVal = c + r;
          return this.makeMcq('2N3', 3, 'Inéquation avec valeur absolue',
            "Résoudre géométriquement $|x - c| \\le r$",

            `Résoudre dans $\\\\mathbb{R}$ l'inéquation : $|x - ${c}| \\\\le ${r}$.`,
            `$S = [${minVal} ; ${maxVal}]$`,
            [`$S = ]${minVal} ; ${maxVal}[$`, `$S = [-${r} ; ${r}]$`, `$S = [${c} ; ${maxVal}]$`],
            "$|x - c| \\\\le r$ signifie que la distance entre $x$ et $c$ est au plus égale à $r$.",

            `Cela équivaut à la double inégalité : $-${r} \\\\le x - ${c} \\\\le ${r}$.`,
            `Ajoutons $${c}$ à chaque membre : $${c} - ${r} \\\\le x \\\\le ${c} + ${r} \\\\iff ${minVal} \\\\le x \\\\le ${maxVal}$, donc $S = [${minVal} ; ${maxVal}]$.`
          );
        } else {
          const a1 = c - r - 1;
          const b1 = c + 1;
          const a2 = c - 1;
          const b2 = c + r + 1;
          return this.makeMcq('2N3', 4, 'Intersection et réunion d\\'intervalles',
            "Déterminer l\'intersection $I \\cap J$",

            `Déterminer l'intersection : $[${a1} ; ${b1}] \\\\cap [${a2} ; ${b2}]$.`,
            `$[${a2} ; ${b1}]$`,
            [`$[${a1} ; ${b2}]$`, `$\\\\emptyset$`, `$]${a2} ; ${b1}[$`],
            "L\'intersection regroupe tous les réels qui sont à la fois dans le premier et dans le deuxième intervalle.",

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

            `Résoudre dans $\\\\mathbb{R}$ l'équation : $(${a}x ${signB})(x - ${d}) = 0$.`,
            `$S = \\\\{${this.simplifyFrac(-b, a)}, ${d}\\\\}$`,
            [`$S = \\\\{${this.simplifyFrac(b, a)}, ${-d}\\\\}$`, `$S = \\\\{${d}\\\\}$`, `$S = \\\\{${a}, ${b}\\\\}$`],
            "Un produit de facteurs est nul si et seulement si au moins l\'un de ses facteurs est nul.",

            `Résous séparément $${a}x ${signB} = 0$ et $x - ${d} = 0$.`,
            `Soit $${a}x = ${-b} \\\\implies x = ${this.simplifyFrac(-b, a)}$, soit $x = ${d}$. Donc $S = \\\\{${this.simplifyFrac(-b, a)}, ${d}\\\\}$.`
          );
        } else if (tier === 2) {
          const signB = b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`;
          return this.makeMcq('2N4', 2, 'Signe d\\'une fonction affine',
            "Résoudre l\'inéquation $ax + b > 0$",

            `Pour quelles valeurs de $x$ a-t-on : $${a}x ${signB} > 0$ ?`,
            `$x \\\\in ]${this.simplifyFrac(-b, a)} ; +\\\\infty[$`,
            [`$x \\\\in ]-\\\\infty ; ${this.simplifyFrac(-b, a)}[$`, `$x \\\\in ]${this.simplifyFrac(b, a)} ; +\\\\infty[$`, `$x > ${a}$`],
            `Isole $x$ : $${a}x > ${-b}$. Comme $${a} > 0$, diviser par $${a}$ ne change pas le sens de l\\'inégalité.`,
            `$x > \\\\frac{${-b}}{${a}}$.`,
            `$${a}x ${signB} > 0 \\\\iff ${a}x > ${-b} \\\\iff x > ${this.simplifyFrac(-b, a)}$, donc $x \\\\in ]${this.simplifyFrac(-b, a)} ; +\\\\infty[$.`
          );
        } else if (tier === 3) {
          const x1 = Math.min(-b, d);
          const x2 = Math.max(-b, d);
          return this.makeMcq('2N4', 3, 'Tableau de signes d\\'un produit',
            "Étudier le signe de $(x - x_1)(x - x_2) \\ge 0$",

            `Résoudre dans $\\\\mathbb{R}$ l'inéquation : $(x - ${x1})(x - ${x2}) \\\\ge 0$.`,
            `$S = ]-\\\\infty ; ${x1}] \\\\cup [${x2} ; +\\\\infty[$`,
            [`$S = [${x1} ; ${x2}]$`, `$S = ]-\\\\infty ; ${x1}[$`, `$S = [${x2} ; +\\\\infty[$`],
            "Dresse un tableau de signes : le produit de deux termes de même signe est positif.",

            `Le produit s\\'annule en $${x1}$ et $${x2}$.`,
            `Un trinôme avec coefficient de $x^2$ positif ($a = 1 > 0$) est positif à l\\'extérieur des racines : $S = ]-\\\\infty ; ${x1}] \\\\cup [${x2} ; +\\\\infty[$.`
          );
        } else {
          const c = this.randInt(1, 4);
          return this.makeMcq('2N4', 4, 'Inéquation rationnelle avec valeur interdite',
            "Dresser le tableau de signes d\'un quotient en excluant la valeur interdite",

            `Quel est l'ensemble des solutions de l'inéquation : $\\\\frac{x - ${d}}{x + ${c}} \\\\le 0$ ?`,
            `$S = ]-${c} ; ${d}]$`,
            [`$S = [-${c} ; ${d}]$`, `$S = ]-\\\\infty ; -${c}[ \\\\cup [${d} ; +\\\\infty[$`, `$S = ]-${c} ; ${d}[$`],
            "Attention au dénominateur ! Une valeur interdite ne peut JAMAIS être incluse dans l\'ensemble des solutions.",

            `Ici $x + ${c} \\\\neq 0 \\\\implies x \\\\neq -${c}$, donc le crochet en $-${c}$ doit être strictement OUVERT.`,
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
          return this.makeMcq('2A1', 1, 'Calcul d\\'image par une fonction',
            "Calculer $f(x_0)$ pour une fonction polynomiale",

            `Soit $f(x) = ${a}x^2 - ${b}$. Quelle est l'image de $${x0}$ par $f$ ?`,
            `$f(${x0}) = ${y0}$`,
            [`$f(${x0}) = ${y0 + 2 * a}$`, `$f(${x0}) = ${-y0}$`, `$f(${x0}) = ${a * x0 - b}$`],
            "Remplace la variable $x$ par la valeur donnée dans l\'expression de $f(x)$.",

            `Calcule d\\'abord le carré : $(${x0})^2 = ${x0 * x0}$, puis multiplie par $${a}$.`,
            `$f(${x0}) = ${a}(${x0})^2 - ${b} = ${a} \\\\times ${x0 * x0} - ${b} = ${y0}$.`
          );
        } else if (tier === 2) {
          const x0 = this.randInt(1, 5);
          const y0 = a * x0 + b;
          return this.makeMcq('2A1', 2, 'Recherche d\\'antécédent',
            "Résoudre $f(x) = k$ pour trouver l\'antécédent de $k$",

            `Soit la fonction affine $f(x) = ${a}x + ${b}$. Quel est l'antécédent de $${y0}$ par $f$ ?`,
            `$x = ${x0}$`,
            [`$x = ${-x0}$`, `$x = ${y0 * a + b}$`, `$x = ${x0 + 1}$`],
            "Chercher l\'antécédent de $y_0$ revient à résoudre l\'équation $f(x) = y_0$.",

            `Résous : $${a}x + ${b} = ${y0}$.`,
            `$${a}x + ${b} = ${y0} \\\\iff ${a}x = ${y0 - b} \\\\iff x = \\\\frac{${y0 - b}}{${a}} = ${x0}$.`
          );
        } else if (tier === 3) {
          const k = this.randInt(1, 8);
          return this.makeMcq('2A1', 3, 'Ensemble de définition avec dénominateur',
            "Déterminer le domaine de définition d\'une fonction rationnelle",

            `Quel est l'ensemble de définition de la fonction $f(x) = \\\\frac{2x + 1}{x - ${k}}$ ?`,
            `$\\\\mathcal{D}_f = \\\\mathbb{R} \\\\setminus \\\\{${k}\\\\}$`,
            [`$\\\\mathcal{D}_f = \\\\mathbb{R}$`, `$\\\\mathcal{D}_f = [${k} ; +\\\\infty[$`, `$\\\\mathcal{D}_f = \\\\mathbb{R} \\\\setminus \\\\{-${k}\\\\}$`],
            "Une fraction est définie si et seulement si son dénominateur est non nul.",

            `Résous $x - ${k} = 0$ pour trouver la valeur interdite.`,
            `Le dénominateur s\\'annule pour $x = ${k}$. La fonction est donc définie sur tous les réels sauf ${k} : $\\\\mathcal{D}_f = \\\\mathbb{R} \\\\setminus \\\\{${k}\\\\}$.`
          );
        } else {
          const k = this.randInt(1, 6);
          return this.makeMcq('2A1', 4, 'Ensemble de définition avec radical',
            "Déterminer le domaine de définition d\'une fonction racine carrée",

            `Quel est l'ensemble de définition de la fonction $g(x) = \\\\sqrt{${a}x - ${a * k}}$ ?`,
            `$\\\\mathcal{D}_g = [${k} ; +\\\\infty[$`,
            [`$\\\\mathcal{D}_g = ]${k} ; +\\\\infty[$`, `$\\\\mathcal{D}_g = ]-\\\\infty ; ${k}]$`, `$\\\\mathcal{D}_g = \\\\mathbb{R}$`],
            "La racine carrée n\'est définie que pour des valeurs positives ou nulles sous le radical.",

            `Résous l\\'inéquation $${a}x - ${a * k} \\\\ge 0$.`,
            `$${a}x - ${a * k} \\\\ge 0 \\\\iff ${a}x \\\\ge ${a * k} \\\\iff x \\\\ge ${k}$. L\\'ensemble de définition est donc $[${k} ; +\\\\infty[$.`
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
          return this.makeMcq('2A2', 1, 'Sens de variation d\\'une fonction affine',
            "Déterminer le sens de variation à partir du coefficient directeur",

            `Quel est le sens de variation de la fonction affine $f(x) = ${m}x ${p >= 0 ? '+ ' + p : '- ' + Math.abs(p)}$ sur $\\\\mathbb{R}$ ?`,
            isCroiss ? 'Strictement croissante car $m > 0$' : 'Strictement décroissante car $m < 0$',
            isCroiss
              ? ['Strictement décroissante car $m > 0$', 'Constante sur R', 'D\\'abord croissante puis décroissante']
              : ['Strictement croissante car $m < 0$', 'Constante sur R', 'D\\'abord décroissante puis croissante'],
            "Le sens de variation d\'une fonction affine $f(x) = mx + p$ dépend uniquement du signe de son coefficient directeur $m$.",

            `Ici le coefficient directeur est $m = ${m}$.`,
            `Comme $m = ${m} ${isCroiss ? '> 0' : '< 0'}$, la fonction $f$ est strictement ${isCroiss ? 'croissante' : 'décroissante'} sur $\\\\mathbb{R}$.`
          );
        } else if (tier === 2) {
          const isMin = a > 0;
          return this.makeMcq('2A2', 2, 'Extremum d\\'une parabole',
            "Déterminer le sommet et l\'extremum d\'une fonction du second degré",

            `Soit la fonction définie par sa forme canonique $f(x) = ${a}(x ${alpha >= 0 ? '- ' + alpha : '+ ' + Math.abs(alpha)})^2 + ${beta}$. Quel est son extremum sur $\\\\mathbb{R}$ ?`,
            `Un minimum égal à $${beta}$, atteint en $x = ${alpha}$`,
            [
              `Un maximum égal à $${beta}$, atteint en $x = ${alpha}$`,
              `Un minimum égal à $${alpha}$, atteint en $x = ${beta}$`,
              `Un extremum égal à $0$, atteint en $x = ${alpha}$`
            ],
            "Pour tout réel $x$, $(x - \\\\alpha)^2 \\\\ge 0$. Son minimum est 0 atteint en $x = \\\\alpha$.",

            `Comme $a = ${a} > 0$, la parabole est tournée vers le haut : elle admet un minimum.`,
            `Le carré étant toujours positif ou nul, $f(x) \\\\ge ${beta}$ pour tout $x$. Le minimum vaut $${beta}$ et il est atteint lorsque $x = ${alpha}$.`
          );
        } else if (tier === 3) {
          return this.makeMcq('2A2', 3, 'Comparaison d\\'images par une fonction monotone',
            "Utiliser la définition d\'une fonction croissante ou décroissante",

            "Soit $g$ une fonction strictement décroissante sur $[-5 ; 5]$. Comparer $g(-1)$ et $g(2)$.",

            "$g(-1) > g(2)$",

            ['$g(-1) < g(2)$', '$g(-1) = g(2)$', 'On ne peut pas savoir sans connaître la formule'],
            "Par définition, une fonction décroissante inverse l\'ordre des réels : si $a < b$ alors $f(a) > f(b)$.",

            "Compare d\'abord les antécédents : $-1 < 2$.",

            "Puisque $-1 < 2$ et que la fonction $g$ est strictement décroissante, les images sont rangées dans l\'ordre contraire : $g(-1) > g(2)$."

          );
        } else {
          return this.makeMcq('2A2', 4, 'Encadrement d\\'images sur un intervalle',
            "Encadrer les valeurs d\'une fonction monotone sur un segment",

            `Soit $f$ une fonction strictement croissante sur $[1 ; 6]$ avec $f(1) = -3$ et $f(6) = 10$. Quel est l'encadrement de $f(x)$ pour $x \\\\in [1 ; 6]$ ?`,
            `$-3 \\\\le f(x) \\\\le 10$`,
            [`$1 \\\\le f(x) \\\\le 6$`, `$-3 < f(x) < 10$`, `$f(x) \\\\ge 0$`],
            "Pour une fonction croissante, le minimum est l\'image de la borne inférieure et le maximum est l\'image de la borne supérieure.",

            "$x \\\\in [1 ; 6] \\\\iff 1 \\\\le x \\\\le 6 \\\\implies f(1) \\\\le f(x) \\\\le f(6)$.",

            "La fonction conservant l\'ordre, $1 \\\\le x \\\\le 6$ implique $f(1) \\\\le f(x) \\\\le f(6)$, c\'est-à-dire $-3 \\\\le f(x) \\\\le 10$."

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

            "Laquelle de ces affirmations est exacte concernant la fonction inverse $f(x) = \\\\frac{1}{x}$ ?",

            "Elle est impaire : sa courbe admet l\'origine $O$ comme centre de symétrie.",

            [
              "Elle est paire : sa courbe est symétrique par rapport à l\'axe des ordonnées.",

              "Elle est croissante sur $]-\\\\infty ; 0[$ et décroissante sur $]0 ; +\\\\infty[$.",

              "Elle est définie sur $\\\\mathbb{R}$ tout entier."

            ],
            "Calcule $f(-x)$ et compare-le avec $f(x)$.",

            `$f(-x) = \\\\frac{1}{-x} = -\\\\frac{1}{x} = -f(x)$.`,
            `Pour tout $x \\\\neq 0$, $f(-x) = -f(x)$, donc la fonction inverse est impaire. Sa courbe (l\\'hyperbole) admet l\\'origine du repère pour centre de symétrie.`
          );
        } else if (tier === 2) {
          const a = this.randChoice([9, 16, 25, 36, 49, 64]);
          const sq = Math.sqrt(a);
          return this.makeMcq('2A3', 2, 'Équation avec la fonction carré',
            "Résoudre dans R l\'équation $x^2 = a$",

            `Résoudre dans $\\\\mathbb{R}$ l'équation : $x^2 = ${a}$.`,
            `$S = \\\\{-${sq}, ${sq}\\\\}$`,
            [`$S = \\\\{${sq}\\\\}$`, `$S = \\\\{-${sq}\\\\}$`, `$S = \\\\{${a / 2}\\\\}$`],
            "Puisque $a > 0$, l\'équation $x^2 = a$ admet deux solutions réelles opposées : $-\\\\sqrt{a}$ et $\\\\sqrt{a}$.",

            `N\\'oublie pas la solution négative : $(-${sq})^2 = ${a}$ également !`,
            `$x^2 = ${a} \\\\iff x^2 - ${a} = 0 \\\\iff (x - ${sq})(x + ${sq}) = 0$, d\\'où $S = \\\\{-${sq}, ${sq}\\\\}$.`
          );
        } else if (tier === 3) {
          const k = this.randChoice([4, 9, 16, 25]);
          const r = Math.sqrt(k);
          return this.makeMcq('2A3', 3, 'Inéquation avec la fonction carré',
            "Résoudre graphiquement ou algébriquement $x^2 \\le k$",

            `Résoudre dans $\\\\mathbb{R}$ l'inéquation : $x^2 \\\\le ${k}$.`,
            `$S = [-${r} ; ${r}]$`,
            [`$S = [0 ; ${r}]$`, `$S = ]-\\\\infty ; ${r}]$`, `$S = ]-\\\\infty ; -${r}] \\\\cup [${r} ; +\\\\infty[$`],
            "La parabole $y = x^2$ est sous la droite horizontale $y = k$ entre ses deux points d\'intersection.",

            `Les bornes de l\\'intervalle sont $-\\\\sqrt{${k}} = -${r}$ et $\\\\sqrt{${k}} = ${r}$.`,
            `$x^2 \\\\le ${k} \\\\iff |x| \\\\le ${r} \\\\iff -${r} \\\\le x \\\\le ${r}$, donc $S = [-${r} ; ${r}]$.`
          );
        } else {
          return this.makeMcq('2A3', 4, 'Étude de parité algébrique',
            "Démontrer qu\'une fonction composée est paire ou impaire",

            "Soit la fonction définie par $f(x) = \\\\frac{x}{x^2 + 1}$. Quelle est la parité de $f$ ?",

            "Impaire, car $f(-x) = -f(x)$ pour tout réel $x$.",

            [
              "Paire, car $f(-x) = f(x)$ pour tout réel $x$.",

              "Ni paire ni impaire car il y a une fraction.",

              "Paire car le dénominateur contient $x^2$."

            ],
            "Remplace $x$ par $-x$ dans l\'expression et simplifie.",

            "$(-x)^2 = x^2$, donc le dénominateur ne change pas.",

            `$f(-x) = \\\\frac{-x}{(-x)^2 + 1} = \\\\frac{-x}{x^2 + 1} = -\\\\frac{x}{x^2 + 1} = -f(x)$. La fonction est donc impaire.`
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
          return this.makeMcq('2G1', 1, 'Coordonnées du milieu d\\'un segment',
            "Appliquer les formules $x_M = \\\\frac{x_A+x_B}{2}$ et $y_M = \\\\frac{y_A+y_B}{2}$",

            `Dans un repère, on donne $A(${xA} ; ${yA})$ et $B(${xB} ; ${yB})$. Quelles sont les coordonnées du milieu $M$ du segment $[AB]$ ?`,
            `$M(${xM} ; ${yM})$`,
            [`$M(${xB - xA} ; ${yB - yA})$`, `$M(${xM + 1} ; ${yM})$`, `$M(${xA + xB} ; ${yA + yB})$`],
            "La formule du milieu est la moyenne des abscisses et la moyenne des ordonnées.",

            `$x_M = \\\\frac{${xA} + ${xB}}{2}$ et $y_M = \\\\frac{${yA} + ${yB}}{2}$.`,
            `$x_M = \\\\frac{${xA} + ${xB}}{2} = ${xM}$ et $y_M = \\\\frac{${yA} + ${yB}}{2} = ${yM}$. Donc $M(${xM} ; ${yM})$.`
          );
        } else if (tier === 2) {
          const dist2 = dx * dx + dy * dy;
          const isSquare = Number.isInteger(Math.sqrt(dist2));
          const expected = isSquare ? `${Math.sqrt(dist2)}` : `\\\\sqrt{${dist2}}`;
          return this.makeMcq('2G1', 2, 'Distance entre deux points',
            "Appliquer la formule $AB = \\\\sqrt{(x_B-x_A)^2 + (y_B-y_A)^2}$ dans un repère orthonormé",

            `Dans un repère orthonormé, on donne $A(${xA} ; ${yA})$ et $B(${xB} ; ${yB})$. Calculer la longueur $AB$.`,
            `$AB = ${expected}$`,
            [`$AB = ${dx + dy}$`, `$AB = \\\\sqrt{${dx + dy}}$`, `$AB = ${expected === '5' ? '7' : '10'}$`],
            "Formule : $AB = \\\\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$.",

            `$x_B - x_A = ${dx}$ et $y_B - y_A = ${dy}$.`,
            `$AB = \\\\sqrt{(${dx})^2 + (${dy})^2} = \\\\sqrt{${dx * dx} + ${dy * dy}} = \\\\sqrt{${dist2}} = ${expected}$.`
          );
        } else if (tier === 3) {
          return this.makeMcq('2G1', 3, 'Nature d\\'un triangle',
            "Utiliser la réciproque du théorème de Pythagore avec les longueurs",

            `Soit un triangle $ABC$ dans un repère orthonormé tel que $AB^2 = 25$, $AC^2 = 20$ et $BC^2 = 5$. Quelle est la nature de $ABC$ ?`,
            "Rectangle en $C$",

            ['Rectangle en $A$', 'Rectangle en $B$', 'Équilatéral'],
            "Repère le plus grand côté et applique la réciproque du théorème de Pythagore.",

            "Vérifie si $AC^2 + BC^2 = AB^2$.",

            "Le plus grand côté est $[AB]$. On a $AC^2 + BC^2 = 20 + 5 = 25 = AB^2$. D\'après la réciproque du théorème de Pythagore, le triangle $ABC$ est rectangle en $C$."

          );
        } else {
          const xC = this.randInt(-3, 3);
          const yC = this.randInt(-3, 3);
          const xD = xA + xC - xB;
          const yD = yA + yC - yB;
          return this.makeMcq('2G1', 4, 'Quatrième sommet d\\'un parallélogramme',
            "Utiliser l\'égalité des milieux des diagonales",

            `Soient $A(${xA} ; ${yA})$, $B(${xB} ; ${yB})$ et $C(${xC} ; ${yC})$. Quelles sont les coordonnées du point $D$ tel que $ABCD$ soit un parallélogramme ?`,
            `$D(${xD} ; ${yD})$`,
            [`$D(${xD + 1} ; ${yD})$`, `$D(${xB + xC - xA} ; ${yB + yC - yA})$`, `$D(${xD} ; ${yD - 1})$`],
            "$ABCD$ est un parallélogramme si et seulement si ses diagonales $[AC]$ et $[BD]$ ont le même milieu.",

            `Le milieu de $[AC]$ a pour coordonnées $\\\\left(\\\\frac{x_A+x_C}{2} ; \\\\frac{y_A+y_C}{2}\\\\right)$. Égale-le à celui de $[BD]$.`,
            `On a $\\\\frac{x_B+x_D}{2} = \\\\frac{x_A+x_C}{2} \\\\implies x_D = x_A + x_C - x_B = ${xD}$ et de même $y_D = ${yD}$. Donc $D(${xD} ; ${yD})$.`
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
          return this.makeMcq('2G2', 1, 'Coordonnées d\\'un vecteur',
            "Calculer les coordonnées du vecteur $\\\\vec{AB}(x_B - x_A ; y_B - y_A)$",

            `Dans un repère, on donne $A(${xA} ; ${yA})$ et $B(${xB} ; ${yB})$. Quelles sont les coordonnées du vecteur $\\\\vec{AB}$ ?`,
            `$\\\\vec{AB}(${ux} ; ${uy})$`,
            [`$\\\\vec{AB}(${-ux} ; ${-uy})$`, `$\\\\vec{AB}(${xA + xB} ; ${yA + yB})$`, `$\\\\vec{AB}(${uy} ; ${ux})$`],
            "Formule : $\\\\vec{AB}(x_B - x_A ; y_B - y_A)$ (toujours extrémité moins origine).",

            `$x_B - x_A = ${xB} - (${xA})$ et $y_B - y_A = ${yB} - (${yA})$.`,
            `$\\\\vec{AB}(${xB} - (${xA}) ; ${yB} - (${yA})) = \\\\vec{AB}(${ux} ; ${uy})$.`
          );
        } else if (tier === 2) {
          const k = this.randChoice([2, 3, -2]);
          const vx = this.randInt(-3, 3);
          const vy = this.randInt(-3, 3);
          const rx = k * ux + vx;
          const ry = k * uy + vy;
          return this.makeMcq('2G2', 2, 'Combinaison linéaire de vecteurs',
            "Calculer les coordonnées de $k\\\\vec{u} + \\\\vec{v}$",

            `Soient les vecteurs $\\\\vec{u}(${ux} ; ${uy})$ et $\\\\vec{v}(${vx} ; ${vy})$. Quelles sont les coordonnées du vecteur $\\\\vec{w} = ${k}\\\\vec{u} + \\\\vec{v}$ ?`,
            `$\\\\vec{w}(${rx} ; ${ry})$`,
            [`$\\\\vec{w}(${rx + 1} ; ${ry})$`, `$\\\\vec{w}(${k * ux} ; ${k * uy})$`, `$\\\\vec{w}(${rx} ; ${ry - 2})$`],
            "Multiplie chaque coordonnée de $\\\\vec{u}$ par $k$, puis additionne celles de $\\\\vec{v}$.",

            `$x_w = ${k} \\\\times (${ux}) + (${vx})$ et $y_w = ${k} \\\\times (${uy}) + (${vy})$.`,
            `$x_w = ${k * ux} + ${vx} = ${rx}$ et $y_w = ${k * uy} + ${vy} = ${ry}$. D\\'où $\\\\vec{w}(${rx} ; ${ry})$.`
          );
        } else if (tier === 3) {
          const k = this.randChoice([2, -3, 4]);
          const vx = ux * k;
          const vy = uy * k;
          return this.makeMcq('2G2', 3, 'Critère de colinéarité et déterminant',
            "Utiliser la condition $\\\\det(\\\\vec{u}, \\\\vec{v}) = xy\' - yx\' = 0$",

            `Les vecteurs $\\\\vec{u}(${ux} ; ${uy})$ et $\\\\vec{v}(${vx} ; ${vy})$ sont-ils colinéaires ?`,
            `Oui, car $\\\\det(\\\\vec{u}, \\\\vec{v}) = (${ux})(${vy}) - (${uy})(${vx}) = 0$ (ou $\\\\vec{v} = ${k}\\\\vec{u}$)`,
            [
              `Non, car leurs coordonnées ne sont pas égales`,
              `Non, car leur produit scalaire est nul`,
              `Oui, uniquement si leurs normes sont égales`
            ],
            "Deux vecteurs sont colinéaires si et seulement si leur déterminant $xy\' - yx\'$ est nul.",

            `Calcule le déterminant : $(${ux}) \\\\times (${vy}) - (${uy}) \\\\times (${vx})$.`,
            `$\\\\det(\\\\vec{u}, \\\\vec{v}) = ${ux * vy} - (${uy * vx}) = 0$. Les vecteurs $\\\\vec{u}$ et $\\\\vec{v}$ sont donc colinéaires.`
          );
        } else {
          return this.makeMcq('2G2', 4, 'Alignement de trois points',
            "Démontrer l\'alignement de points grâce à la colinéarité",

            "Pour prouver que trois points distincts $A, B$ et $C$ sont alignés dans le plan, quelle condition vectorielle suffit-il de vérifier ?",

            "Les vecteurs $\\\\vec{AB}$ et $\\\\vec{AC}$ sont colinéaires (c\'est-à-dire $\\\\det(\\\\vec{AB}, \\\\vec{AC}) = 0$).",

            [
              "La longueur $AB$ est égale à la longueur $BC$.",

              "Les vecteurs $\\\\vec{AB}$ et $\\\\vec{BC}$ sont orthogonaux.",

              "Le milieu de $[AB]$ est confondu avec $C$."

            ],
            "Trois points sont alignés s\'ils appartiennent à la même droite.",

            "Deux vecteurs formés par ces trois points avec une origine commune doivent avoir la même direction.",

            "Les points $A, B, C$ sont alignés si et seulement si les vecteurs $\\\\vec{AB}$ et $\\\\vec{AC}$ ont la même direction, c\'est-à-dire sont colinéaires : $\\\\det(\\\\vec{AB}, \\\\vec{AC}) = 0$."

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
          return this.makeMcq('2G3', 1, 'Équation réduite d\\'une droite',
            "Identifier le coefficient directeur et l\'ordonnée à l\'origine",

            `Quelle est l'ordonnée à l'origine de la droite $d$ d'équation réduite $y = ${m}x ${p >= 0 ? '+ ' + p : '- ' + Math.abs(p)}$ ?`,
            `$p = ${p}$`,
            [`$m = ${m}$`, `$p = ${-p}$`, `$p = 0$`],
            "Dans l\'équation réduite $y = mx + p$, $m$ est le coefficient directeur et $p$ est l\'ordonnée à l\'origine.",

            "L\'ordonnée à l\'origine correspond à la valeur de $y$ lorsque $x = 0$.",

            `Pour $x = 0$, $y = ${m}(0) ${p >= 0 ? '+ ' + p : '- ' + Math.abs(p)} = ${p}$. L\\'ordonnée à l\\'origine est donc $p = ${p}$.`
          );
        } else if (tier === 2) {
          const a = this.randInt(1, 4);
          const b = this.randChoice([-3, -2, 2, 3]);
          const c = this.randInt(-5, 5);
          return this.makeMcq('2G3', 2, 'Vecteur directeur et équation cartésienne',
            "Associer le vecteur directeur $\\\\vec{u}(-b ; a)$ à l\'équation $ax + by + c = 0$",

            `Donner un vecteur directeur de la droite d'équation cartésienne : $${a}x ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}y ${c >= 0 ? '+ ' + c : '- ' + Math.abs(c)} = 0$.`,
            `$\\\\vec{u}(${-b} ; ${a})$`,
            [`$\\\\vec{u}(${a} ; ${b})$`, `$\\\\vec{u}(${b} ; ${a})$`, `$\\\\vec{u}(${a} ; ${-b})$`],
            "Toute droite d\'équation cartésienne $ax + by + c = 0$ admet pour vecteur directeur $\\\\vec{u}(-b ; a)$.",

            `Ici $a = ${a}$ et $b = ${b}$.`,
            `Le vecteur directeur est $\\\\vec{u}(-b ; a) = \\\\vec{u}(${-b} ; ${a})$.`
          );
        } else if (tier === 3) {
          const xA = this.randInt(-2, 3);
          const yA = m * xA + p;
          return this.makeMcq('2G3', 3, 'Appartenance d\\'un point à une droite',
            "Tester si les coordonnées d\'un point vérifient l\'équation",

            `Le point $A(${xA} ; ${yA})$ appartient-il à la droite d'équation $y = ${m}x ${p >= 0 ? '+ ' + p : '- ' + Math.abs(p)}$ ?`,
            `Oui, car $${m}(${xA}) ${p >= 0 ? '+ ' + p : '- ' + Math.abs(p)} = ${yA}$`,
            [
              `Non, car $A$ n\\'a pas pour abscisse 0`,
              `Non, car son ordonnée n\\'est pas égale à $${p}$`,
              `On ne peut pas savoir sans tracer la droite`
            ],
            "Un point appartient à une droite si et seulement si ses coordonnées vérifient l\'équation de la droite.",

            `Remplace $x$ par $${xA}$ dans le membre de droite et compare le résultat à $y_A = ${yA}$.`,
            `Pour $x = ${xA}$, on calcule $${m} \\\\times (${xA}) ${p >= 0 ? '+ ' + p : '- ' + Math.abs(p)} = ${m * xA + p} = ${yA}$. Les coordonnées de $A$ vérifient l\\'équation, donc $A \\\\in d$.`
          );
        } else {
          return this.makeMcq('2G3', 4, 'Position relative de deux droites',
            "Déterminer si deux droites sont sécantes ou parallèles",

            `Les droites $d_1 : y = 3x - 5$ et $d_2 : y = 3x + 2$ sont-elles :`,
            "Strictement parallèles, car elles ont le même coefficient directeur ($m = 3$) et des ordonnées à l\'origine distinctes.",

            [
              "Sécantes en un point unique",

              "Perpendiculaires",

              "Confondues"

            ],
            "Deux droites sont parallèles si et seulement si elles ont le même coefficient directeur.",

            "Observe les coefficients directeurs $m_1 = 3$ et $m_2 = 3$.",

            "Comme $m_1 = m_2 = 3$, les droites ont la même direction. Comme $-5 \\\\neq 2$, elles sont strictement parallèles."

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
          return this.makeMcq('2S1', 1, 'Moyenne d\\'une série statistique',
            "Calculer la moyenne simple d\'une série",

            `Calculer la moyenne de la série de notes : ${notes.join(' ; ')}.`,
            `$\\\\bar{x} = ${moy}$`,
            [`$\\\\bar{x} = ${moy + 1}$`, `$\\\\bar{x} = ${notes[1]}$`, `$\\\\bar{x} = ${moy - 1.5}$`],
            "La moyenne est la somme de toutes les valeurs divisée par l\'effectif total.",

            `Somme = $${notes.join(' + ')} = ${sum}$. Effectif total = ${notes.length}.`,
            `$\\\\bar{x} = \\\\frac{${sum}}{${notes.length}} = ${moy}$.`
          );
        } else if (tier === 2) {
          const vals = [2, 5, 7, 8, 11, 14, 19];
          return this.makeMcq('2S1', 2, 'Médiane d\\'une série ordonnée',
            "Déterminer la médiane d\'un effectif impair",

            "Quelle est la médiane de la série statistique ordonnée suivante : 2 ; 5 ; 7 ; 8 ; 11 ; 14 ; 19 ?",

            "8",

            ['7', '11', '9,4'],
            "La médiane partage la série ordonnée en deux groupes de même effectif.",

            "L\'effectif total est $N = 7$ (impair). La médiane est la $\\\\frac{7+1}{2} = 4$-ème valeur.",

            "La 4ème valeur de la série ordonnée est 8. Il y a 3 valeurs inférieures et 3 valeurs supérieures."

          );
        } else if (tier === 3) {
          return this.makeMcq('2S1', 3, 'Quartiles et dispersion',
            "Déterminer le premier quartile $Q_1$ d\'une série",

            "Pour une série statistique ordonnée de 12 valeurs, à quel rang correspond le premier quartile $Q_1$ ?",

            "Le rang 3 (car $\\\\frac{12}{4} = 3$)",

            ['Le rang 4', 'Le rang 2', 'La moyenne entre le rang 3 et le rang 4'],
            "$Q_1$ est la plus petite valeur de la série telle qu\'au moins 25% (un quart) des données lui soient inférieures ou égales.",

            `Calcule $\\\\frac{N}{4} = \\\\frac{12}{4} = 3$.`,
            `Puisque $\\\\frac{12}{4} = 3$ est un entier, le premier quartile $Q_1$ est la valeur située au 3ème rang de la série ordonnée.`
          );
        } else {
          return this.makeMcq('2S1', 4, 'Écart interquartile et étendue',
            "Interpréter les indicateurs de dispersion",

            "On considère une série avec $Q_1 = 8$, $Q_3 = 15$, $x_{\\\\min} = 3$ et $x_{\\\\max} = 22$. Quel est son écart interquartile ?",

            "$IQR = Q_3 - Q_1 = 7$",

            ['$IQR = 19$', '$IQR = 11,5$', '$IQR = 14$'],
            "L\'écart interquartile est défini par la différence entre le troisième et le premier quartile : $IQR = Q_3 - Q_1$.",

            "Attention à ne pas confondre avec l\'étendue ($x_{\\\\max} - x_{\\\\min}$).",

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
            "Appliquer la formule $P(\\\\bar{A}) = 1 - P(A)$",

            "Soit $A$ un événement tel que $P(A) = 0{,}35$. Quelle est la probabilité de son événement contraire $\\\\bar{A}$ ?",

            "$P(\\\\bar{A}) = 0{,}65$",

            ['$P(\\\\bar{A}) = 0{,}35$', '$P(\\\\bar{A}) = -0{,}35$', '$P(\\\\bar{A}) = 0{,}75$'],
            "La somme des probabilités d\'un événement et de son contraire vaut 1 : $P(A) + P(\\\\bar{A}) = 1$.",

            `$P(\\\\bar{A}) = 1 - 0{,}35$.`,
            `$P(\\\\bar{A}) = 1 - P(A) = 1 - 0{,}35 = 0{,}65$.`
          );
        } else if (tier === 2) {
          return this.makeMcq('2S2', 2, 'Formule de la réunion',
            "Calculer $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$",

            "On donne $P(A) = 0{,}5$, $P(B) = 0{,}4$ et $P(A \\\\cap B) = 0{,}2$. Calculer $P(A \\\\cup B)$.",

            "$P(A \\\\cup B) = 0{,}7$",

            ['$P(A \\\\cup B) = 0{,}9$', '$P(A \\\\cup B) = 0{,}3$', '$P(A \\\\cup B) = 0{,}5$'],
            "Formule fondamentale : $P(A \\\\cup B) = P(A) + P(B) - P(A \\\\cap B)$.",

            `Additionne $P(A)$ et $P(B)$, puis soustrais l\\'intersection pour ne pas la compter deux fois.`,
            `$P(A \\\\cup B) = 0{,}5 + 0{,}4 - 0{,}2 = 0{,}9 - 0{,}2 = 0{,}7$.`
          );
        } else if (tier === 3) {
          return this.makeMcq('2S2', 3, 'Événements incompatibles',
            "Reconnaître et utiliser l\'incompatibilité $A \\cap B = \\emptyset$",

            "Deux événements $A$ et $B$ sont dits incompatibles (ou disjoints) si :",

            "$A \\\\cap B = \\\\emptyset$ (donc $P(A \\\\cap B) = 0$)",

            [
              "$P(A) = P(B)$",

              "$P(A \\\\cup B) = 1$",

              "$P(A) \\\\times P(B) = 0$"

            ],
            "Incompatible signifie qu\'ils ne peuvent pas se réaliser en même temps.",

            "L\'intersection de deux événements incompatibles est l\'événement impossible.",

            "Deux événements sont incompatibles s\'ils n\'ont aucune issue commune : $A \\\\cap B = \\\\emptyset$, ce qui implique $P(A \\\\cap B) = 0$."

          );
        } else {
          return this.makeMcq('2S2', 4, 'Arbre de probabilités à deux épreuves',
            "Calculer la probabilité d\'un chemin dans un arbre",

            "On lance une pièce équilibrée puis un dé équilibré à 6 faces. Quelle est la probabilité d\'obtenir « Pile » et un « 6 » ?",

            "$\\frac{1}{12}$",

            ['$\\frac{1}{8}$', '$\\frac{2}{8}$', '$\\frac{7}{12}$'],
            "Sur un chemin dans un arbre, on multiplie les probabilités des branches.",

            `$P(\\\\text{Pile}) = \\\\frac{1}{2}$ et $P(6) = \\\\frac{1}{6}$.`,
            `Par indépendance des deux tirages, $P(\\\\text{Pile et } 6) = \\\\frac{1}{2} \\\\times \\\\frac{1}{6} = \\\\frac{1}{12}$.`
          );
        }
      }

      // ---------------------------------------------------------------------
      // 2S3 : Échantillonnage, fluctuation et algorithmique
      // ---------------------------------------------------------------------
      case '2S3': {
        if (tier === 1) {
          return this.makeMcq('2S3', 1, 'Intervalle de fluctuation au seuil de 95%',
            "Connaître la formule $\\\\left[p - \\\\frac{1}{\\\\sqrt{n}} ; p + \\\\frac{1}{\\\\sqrt{n}}\\\\right]$",

            "Dans les conditions $n \\\\ge 30$, $0{,}2 \\\\le p \\\\le 0{,}8$, quelle est la formule de l\'intervalle de fluctuation au seuil de 95% en Seconde ?",

            "$\\left[p - \\\\frac{1}{\\\\sqrt{n}} ; p + \\\\frac{1}{\\\\sqrt{n}}\\\\right]$",

            [
              "$\\left[p - \\\\frac{1}{n} ; p + \\\\frac{1}{n}\\\\right]$",

              "$\\left[p - 2\\\\sqrt{n} ; p + 2\\\\sqrt{n}\\\\right]$",

              "$\\left[0 ; 1\\\\right]$"

            ],
            "L\'amplitude dépend de l\'inverse de la racine carrée de la taille de l\'échantillon $n$.",

            "Le rayon de l\'intervalle au niveau seconde est $\\\\frac{1}{\\\\sqrt{n}}$.",

            "L\'intervalle de fluctuation à 95% est donné par $I = \\\\left[p - \\\\frac{1}{\\\\sqrt{n}} ; p + \\\\frac{1}{\\\\sqrt{n}}\\\\right]$."

          );
        } else if (tier === 2) {
          const n = 100;
          const p = 0.5;
          return this.makeMcq('2S3', 2, 'Calcul d\\'un intervalle de fluctuation',
            "Calculer numériquement les bornes de l\'intervalle",

            `Pour $p = 0{,}5$ et un échantillon de taille $n = 100$, quel est l'intervalle de fluctuation à 95% ?`,
            "$[0{,}40 ; 0{,}60]$",

            ['$[0{,}45 ; 0{,}55]$', '$[0{,}35 ; 0{,}65]$', '$[0{,}49 ; 0{,}51]$'],
            "Calcule $\\\\frac{1}{\\\\sqrt{n}} = \\\\frac{1}{\\\\sqrt{100}} = \\\\frac{1}{10} = 0{,}10$.",

            `Soustrait et ajoute $0{,}10$ à la proportion $p = 0{,}50$.`,
            `$\\\\frac{1}{\\\\sqrt{100}} = 0{,}10$. Les bornes sont donc $0{,}5 - 0{,}1 = 0{,}40$ et $0{,}5 + 0{,}1 = 0{,}60$, d\\'où $I = [0{,}40 ; 0{,}60]$.`
          );
        } else if (tier === 3) {
          return this.makeMcq('2S3', 3, 'Prise de décision sur un échantillon',
            "Rejeter ou accepter une hypothèse au seuil de 95%",

            "Une pièce est supposée équilibrée ($p = 0{,}5$). L\'intervalle de fluctuation à 95% pour $n = 100$ est $[0{,}40 ; 0{,}60]$. Sur 100 lancers, on observe 68 « Pile ». Que conclut-on ?",

            "La fréquence observée $f = 0{,}68 \\\\notin [0{,}40 ; 0{,}60]$ : on rejette l\'hypothèse que la pièce est équilibrée au risque de 5%.",

            [
              "On accepte que la pièce est équilibrée car 68 est proche de 50.",

              "On ne peut rien conclure avec seulement 100 lancers.",

              "La pièce est parfaitement équilibrée car $f > 0{,}5$."

            ],
            "Compare la fréquence observée $f = \\\\frac{68}{100}$ aux bornes de l\'intervalle de fluctuation.",

            "Si $f$ n\'est pas dans l\'intervalle, la variation n\'est pas imputable au seul hasard avec 95% de certitude.",

            "La fréquence $f = 0{,}68$ sort de l\'intervalle $[0{,}40 ; 0{,}60]$. On rejette donc l\'hypothèse d\'équilibre de la pièce au seuil de confiance de 95%."

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

            "Diviser par 100 donne la proportion d\'occurrences vraies (la fréquence empirique).",

            "Le script simule 100 épreuves de Bernoulli de paramètre $p = 0{,}5$, compte le nombre de succès (True = 1) et calcule la fréquence relative correspondante."

          );
        }
      }

      default:
        return this.generateDefaultLycee(chapterId, tier);
    }
  },
'''
