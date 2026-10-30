# -*- coding: utf-8 -*-
"""
Builder pour la classe de Terminale Spécialité & Expertes (16 chapitres : TA1-TA7, TG1-TG2, TS1-TS2, TX1-TX5)
Chaque chapitre a 4 paliers procéduraux dynamiques.
"""

def get_tale_code():
    return '''
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

            "Quelles sont les trois étapes incontournables d\'un raisonnement par récurrence pour prouver une propriété $P(n)$ pour tout $n \\\\ge n_0$ ?",

            "Initialisation, Hérédité, Conclusion.",

            [
              "Hypothèse, Calcul, Déduction.",

              "Conjecture, Dérivation, Intégration.",

              "Existence, Unicité, Réciproque."

            ],
            "On vérifie d\'abord pour le premier rang (initialisation), puis on prouve la transmission au rang suivant (hérédité).",

            "La récurrence fonctionne comme une chute de dominos : le premier tombe, et chaque domino entraîne le suivant.",

            "Une démonstration par récurrence comporte rigoureusement : l\'Initialisation (vérifier $P(n_0)$), l\'Hérédité (supposer $P(k)$ vraie et montrer $P(k+1)$), puis la Conclusion."

          );
        } else if (tier === 2) {
          const u0 = this.randInt(1, 4);
          return this.makeMcq('TA1', 2, 'Initialisation d\\'une récurrence',
            "Vérifier la propriété au rang initial $n_0 = 0$",

            `On considère la suite définie par $u_0 = ${u0}$ et $u_{n+1} = 2u_n + 1$. Pour démontrer par récurrence que $u_n > 0$ pour tout $n \\\\in \\\\mathbb{N}$, que vaut l'étape d'initialisation ?`,
            `Pour $n = 0$, $u_0 = ${u0} > 0$ : la propriété est vraie au rang initial.`,
            [
              `Pour $n = 1$, $u_1 = ${2 * u0 + 1} > 0$ uniquement.`,
              `On suppose que pour tout $n$, $u_n > 0$.`,
              `On calcule la limite de $u_n$ quand $n$ tend vers l\\'infini.`
            ],
            "L\'initialisation consiste à vérifier que la propriété est vraie pour la plus petite valeur de l\'indice (ici $n_0 = 0$).",

            `Vérifie simplement la valeur de $u_0$.`,
            `Pour $n = 0$, on a $u_0 = ${u0}$. Comme $${u0} > 0$, la propriété $P(0)$ est vraie : l\\'initialisation est validée.`
          );
        } else if (tier === 3) {
          return this.makeMcq('TA1', 3, 'Formulation de l\\'hypothèse de récurrence',
            "Rédiger rigoureusement l\'étape d\'hérédité",

            "Dans l\'étape d\'hérédité pour une propriété $P(n)$, quelle est la supposition correcte ?",

            "On suppose que pour un entier $k \\ge n_0$ fixé, $P(k)$ est vraie, et on démontre que $P(k+1)$ est vraie.",

            [
              "On suppose que pour tout entier $n$, $P(n)$ est vraie.",

              "On démontre directement $P(k)$ sans rien supposer.",

              "On remplace $n$ par l\'infini."

            ],
            "Attention à ne pas supposer ce qu\'on veut démontrer pour tout $n$ (ce serait une pétition de principe).",

            "On fige un rang arbitraire $k$ et on montre la transmission au rang $k+1$.",

            "L\'hérédité consiste à supposer $P(k)$ vraie pour un entier $k$ fixé (hypothèse de récurrence), puis à prouver sous cette hypothèse que $P(k+1)$ est encore vraie."

          );
        } else {
          return this.makeMcq('TA1', 4, 'Récurrence forte et pièges classiques',
            "Distinguer récurrence simple et hypothèse de transmission",

            "Pourquoi une récurrence dont l\'hérédité est valide mais dont l\'initialisation est fausse ne prouve-t-elle rien ?",

            "Parce que le mécanisme de transmission ne s\'enclenche jamais si aucun premier domino ne tombe.",

            [
              "Parce que l\'hérédité est alors automatiquement fausse.",

              "Parce qu\'une propriété sans initialisation est toujours vraie pour $n \\ge 100$.",

              "Parce que la suite diverge nécessairement vers l\'infini."

            ],
            "Pense à l\'analogie des dominos.",

            "Même si chaque domino est capable de faire tomber le suivant, s\'il n\'y a pas de chiquenaude initiale, rien ne tombe.",

            "L\'hérédité n\'est qu\'une implication conditionnelle ($P(k) \\\\implies P(k+1)$). Sans initialisation prouvant qu\'un premier terme est vrai, la propriété peut être fausse pour tout $n$."

          );
        }
      }

      // ---------------------------------------------------------------------
      // TA2 : Limites de suites et théorèmes de convergence
      // ---------------------------------------------------------------------
      case 'TA2': {
        if (tier === 1) {
          const q = this.randChoice([0.2, 0.5, 0.75, 0.8]);
          return this.makeMcq('TA2', 1, 'Limite d\\'une suite géométrique $q^n$',
            "Convergence de $q^n$ selon la valeur de $q$",

            `Quelle est la limite de la suite $u_n = (${q})^n$ lorsque $n \\\\to +\\\\infty$ ?`,
            "$\\lim_{n \\to +\\infty} u_n = 0$ car $|q| < 1$",

            [
              "$\\lim_{n \\to +\\infty} u_n = +\\infty$",

              "$\\lim_{n \\to +\\infty} u_n = 1$",

              "La suite n\'admet aucune limite car elle oscille"

            ],
            "Si $-1 < q < 1$, alors $\\\\lim_{n \\\\to +\\\\infty} q^n = 0$.",

            `Ici $q = ${q}$, donc $|q| < 1$.`,
            `Comme $|q| = ${q} < 1$, les puissances successives deviennent de plus en plus petites et se rapprochent indéfiniment de 0 : $\\\\lim_{n \\\\to +\\\\infty} (${q})^n = 0$.`
          );
        } else if (tier === 2) {
          return this.makeMcq('TA2', 2, 'Théorème de convergence monotone',
            "Énoncer le théorème fondamental pour les suites croissantes majorées",

            "D\'après le théorème de convergence monotone, toute suite réelle qui est à la fois croissante et majorée est :",

            "Convergente vers une limite finie $L \\le M$ (où $M$ est un majorant).",

            [
              "Divergente vers $+\\infty$.",

              "Nécessairement constante.",

              "Périodique à partir d\'un certain rang."

            ],
            "Une suite qui monte mais qui est bloquée par un plafond ne peut pas s\'échapper à l\'infini.",

            "Elle converge nécessairement vers la borne supérieure de ses valeurs.",

            "Le théorème de convergence monotone garantit que toute suite croissante et majorée converge vers un réel fini $L$. Réciproquement, toute suite décroissante et minorée converge."

          );
        } else if (tier === 3) {
          return this.makeMcq('TA2', 3, 'Théorème d\\'encadrement (des gendarmes)',
            "Appliquer le théorème des gendarmes",

            "Soient trois suites telles que pour tout $n \\\\ge 1$, $2 - \\\\frac{1}{n} \\\\le u_n \\\\le 2 + \\\\frac{1}{n^2}$. Quelle est la limite de $(u_n)$ ?",

            "$\\lim_{n \\to +\\infty} u_n = 2$",

            ['$\\lim_{n \\to +\\infty} u_n = 0$', '$\\lim_{n \\to +\\infty} u_n = +\\infty$', 'On ne peut pas conclure car $u_n$ est inconnue'],
            "Calcule la limite des deux suites encadrantes quand $n \\\\to +\\\\infty$.",

            "$\\\\lim_{n \\\\to +\\\\infty} (2 - 1/n) = 2$ et $\\\\lim_{n \\\\to +\\\\infty} (2 + 1/n^2) = 2$.",

            "Les deux suites qui encadrent $(u_n)$ convergent vers la même limite 2. D\'après le théorème des gendarmes, $(u_n)$ converge également et sa limite est 2."

          );
        } else {
          return this.makeMcq('TA2', 4, 'Théorème de comparaison pour les limites infinies',
            "Appliquer si $u_n \\ge v_n$ et $v_n \\to +\\infty$ alors $u_n \\to +\\infty$",

            "Sachant que pour tout $n \\\\in \\\\mathbb{N}$, $u_n \\\\ge n^2 + 3$, quelle est la limite de $(u_n)$ ?",

            "$\\lim_{n \\to +\\infty} u_n = +\\infty$",

            ['$\\lim_{n \\to +\\infty} u_n = 3$', 'On ne peut pas conclure car il n\\'y a pas de majorant', '$\\lim_{n \\to +\\infty} u_n = 0$'],
            "Si une suite est plus grande qu\'une suite qui tend vers $+\\\\infty$, elle est poussée vers $+\\\\infty$.",

            "$\\\\lim_{n \\\\to +\\\\infty} (n^2 + 3) = +\\\\infty$.",

            "D\'après le théorème de comparaison, comme $u_n \\\\ge n^2 + 3$ et $\\\\lim_{n \\\\to +\\\\infty} (n^2 + 3) = +\\\\infty$, on a $\\\\lim_{n \\\\to +\\\\infty} u_n = +\\\\infty$."

          );
        }
      }

      // ---------------------------------------------------------------------
      // TA3 : Limites de fonctions, continuité et TVI
      // ---------------------------------------------------------------------
      case 'TA3': {
        if (tier === 1) {
          const a = this.randInt(2, 5);
          return this.makeMcq('TA3', 1, 'Limite en l\\'infini d\\'une fonction rationnelle',
            "Règle des termes de plus haut degré",

            `Déterminer la limite : $\\\\lim_{x \\\\to +\\\\infty} \\\\frac{${a}x^2 + 3x - 1}{x^2 + 5}$.`,
            `$${a}$`,
            [`$+\\\\infty$`, `$0$`, `$${a * 2}$`],
            "En $+\\\\infty$, une fraction rationnelle a la même limite que le quotient de ses termes de plus haut degré.",

            `Simplifie $\\\\frac{${a}x^2}{x^2}$.`,
            `En factorisant par le terme dominant : $\\\\frac{${a}x^2 + 3x - 1}{x^2 + 5} \\\\sim \\\\frac{${a}x^2}{x^2} = ${a}$. La limite vaut donc ${a}.`
          );
        } else if (tier === 2) {
          return this.makeMcq('TA3', 2, 'Asymptote horizontale et verticale',
            "Reconnaître les équations d\'asymptotes",

            "Si $\\\\lim_{x \\\\to 2^+} f(x) = +\\\\infty$ et $\\\\lim_{x \\\\to +\\\\infty} f(x) = -3$, quelles sont les asymptotes à la courbe ?",

            "La droite $x = 2$ (asymptote verticale) et la droite $y = -3$ (asymptote horizontale).",

            [
              "La droite $y = 2$ et la droite $x = -3$.",

              "Une asymptote oblique uniquement.",

              "La courbe n\'admet aucune asymptote."

            ],
            "Quand $x \\\\to a$ donne l\'infini : asymptote verticale $x = a$. Quand $x \\\\to \\\\infty$ donne un réel $b$ : asymptote horizontale $y = b$.",

            "Associe chaque variable : $x$ fixe donne $x = 2$, $y$ limite donne $y = -3$.",

            "Une limite infinie en un point fini donne l\'asymptote verticale $x = 2$. Une limite finie à l\'infini donne l\'asymptote horizontale $y = -3$."

          );
        } else if (tier === 3) {
          return this.makeMcq('TA3', 3, 'Théorème des Valeurs Intermédiaires (TVI)',
            "Conditions d\'application du TVI classique",

            "Pour affirmer que l\'équation $f(x) = k$ admet au moins une solution sur $[a ; b]$, quelles sont les hypothèses du TVI ?",

            "$f$ est continue sur $[a ; b]$ et $k$ est compris entre $f(a)$ et $f(b)$.",

            [
              "$f$ est dérivable et positive sur $[a ; b]$.",

              "$f$ est strictement croissante sans condition de continuité.",

              "$f(a) = f(b) = k$."

            ],
            "Le TVI repose fondamentalement sur le fait de pouvoir tracer la courbe sans lever le crayon (continuité).",

            "La valeur cible $k$ doit être encadrée par les images des bornes.",

            "D\'après le TVI, si $f$ est continue sur un segment $[a ; b]$ et si $k$ est compris entre $f(a)$ et $f(b)$, alors il existe au moins un réel $c \\\\in [a ; b]$ tel que $f(c) = k$."

          );
        } else {
          return this.makeMcq('TA3', 4, 'Corollaire du TVI (Théorème de la bijection)',
            "Assurer l\'unicité de la solution",

            "Quelle condition supplémentaire doit-on ajouter au TVI pour garantir que la solution de $f(x) = k$ est UNIQUE sur $[a ; b]$ ?",

            "$f$ doit être strictement monotone (strictement croissante ou strictement décroissante) sur $[a ; b]$.",

            [
              "$f$ doit être positive sur $[a ; b]$.",

              "$f$ doit s\'annuler en 0.",

              "La dérivée seconde doit être positive."

            ],
            "Si la fonction monte puis descend, elle peut traverser le niveau $k$ plusieurs fois.",

            "La stricte monotonie empêche la courbe de revenir sur une valeur déjà prise.",

            "D\'après le corollaire du TVI (théorème de la bijection), la continuité garantit l\'existence et la stricte monotonie garantit l\'unicité de la solution."

          );
        }
      }

      // ---------------------------------------------------------------------
      // TA4 : Convexité, concavité et points d'inflexion
      // ---------------------------------------------------------------------
      case 'TA4': {
        if (tier === 1) {
          return this.makeMcq('TA4', 1, 'Caractérisation de la convexité par la dérivée seconde',
            "Lien entre signe de $f\\'\\'$ et convexité",

            "Une fonction deux fois dérivable $f$ est dite convexe sur un intervalle $I$ si et seulement si :",

            "Pour tout $x \\in I$, $f''(x) \\ge 0$ (sa courbe est située au-dessus de toutes ses tangentes).",

            [
              "Pour tout $x \\in I$, $f''(x) \\le 0$.",

              "Pour tout $x \\in I$, $f'(x) \\ge 0$.",

              "$f(x) \\ge 0$ sur $I$."

            ],
            "Convexe a la forme d\'un bol tourné vers le haut : la dérivée première $f\'$ est croissante.",

            "Une fonction dont la dérivée est croissante a une dérivée seconde positive.",

            "Une fonction est convexe si et seulement si sa dérivée seconde est positive ou nulle : $f\\'\\'(x) \\\\ge 0$. Sa courbe représentative reste toujours au-dessus de chacune de ses tangentes."

          );
        } else if (tier === 2) {
          const a = this.randInt(2, 6);
          return this.makeMcq('TA4', 2, 'Point d\\'inflexion',
            "Caractérisation algébrique d\'un point d\'inflexion",

            "Un point $A(x_0 ; f(x_0))$ est un point d\'inflexion de la courbe $\\\\mathcal{C}_f$ si et seulement si :",

            "La dérivée seconde $f''$ s\'annule et change de signe en $x_0$.",

            [
              "La dérivée première $f'$ s\'annule en $x_0$.",

              "$f(x_0) = 0$.",

              "La fonction $f$ atteint son maximum absolu en $x_0$."

            ],
            "Au point d\'inflexion, la courbe traverse sa tangente en passant de concave à convexe (ou inversement).",

            "Ce changement de convexité se traduit par un changement de signe de $f\\'\\'$.",

            "Un point d\'inflexion correspond à un changement de sens de courbure (la courbe traverse sa tangente), ce qui équivaut à l\'annulation avec changement de signe de la dérivée seconde $f\\'\\'$."

          );
        } else if (tier === 3) {
          return this.makeMcq('TA4', 3, 'Convexité de l\\'exponentielle',
            "Calcul de dérivée seconde pour la fonction exponentielle",

            "Quelle est la convexité de la fonction exponentielle $f(x) = e^x$ sur $\\\\mathbb{R}$ ?",

            "Strictement convexe sur $\\mathbb{R}$ tout entier car $f''(x) = e^x > 0$.",

            [
              "Strictement concave sur $\\mathbb{R}$.",

              "Concave sur $]-\\infty ; 0]$ et convexe sur $[0 ; +\\infty[$.",

              "Elle admet l\'origine pour point d\'inflexion."

            ],
            "Calcule $f\\'(x) = e^x$ puis $f\\'\\'(x) = e^x$.",

            "L\'exponentielle est strictement positive pour tout réel $x$.",

            "Comme $f\\'\\'(x) = e^x > 0$ pour tout $x \\\\in \\\\mathbb{R}$, la fonction exponentielle est strictement convexe sur $\\\\mathbb{R}$."

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

            "Par propriété de la concavité, la courbe d\'une fonction concave se situe toujours en dessous de chacune de ses tangentes sur l\'intervalle considéré."

          );
        }
      }

      // ---------------------------------------------------------------------
      // TA5 : La fonction logarithme népérien
      // ---------------------------------------------------------------------
      case 'TA5': {
        if (tier === 1) {
          return this.makeMcq('TA5', 1, 'Propriétés algébriques fondamentales de $\\\\ln$',
            "Relation fondamentale $\\\\ln(ab) = \\\\ln(a) + \\\\ln(b)$",

            "Pour tous réels $a > 0$ et $b > 0$, laquelle de ces égalités est la propriété caractéristique du logarithme ?",

            "$\\ln(a \\times b) = \\ln(a) + \\ln(b)$",

            ['$\\ln(a + b) = \\ln(a) \\times \\ln(b)$', '$\\ln(a \\times b) = \\ln(a) \\times \\ln(b)$', '$\\ln(a / b) = \\ln(a) / \\ln(b)$'],
            "Le logarithme népérien transforme les produits en sommes.",

            "C\'est la bijection réciproque de l\'exponentielle ($e^{x+y} = e^x e^y$).",

            "La relation fondamentale du logarithme est de transformer un produit en somme : $\\\\ln(ab) = \\\\ln(a) + \\\\ln(b)$. On a aussi $\\\\ln(a/b) = \\\\ln(a) - \\\\ln(b)$."

          );
        } else if (tier === 2) {
          const a = this.randInt(2, 5);
          return this.makeMcq('TA5', 2, 'Dérivée de la fonction $\\\\ln(u)$',
            "Appliquer la formule $(\\\\ln u)\' = \\\\frac{u\'}{u}$",

            `Déterminer la dérivée de $f(x) = \\\\ln(${a}x + 1)$ pour $x > -\\\\frac{1}{${a}}$.`,
            `$f\\'(x) = \\\\frac{${a}}{${a}x + 1}$`,
            [`$f\\'(x) = \\\\frac{1}{${a}x + 1}$`, `$f\\'(x) = \\\\frac{${a}}{x}$`, `$f\\'(x) = ${a}\\\\ln(${a}x + 1)$`],
            "Formule générale de dérivation : $(\\\\ln(u(x)))\' = \\\\frac{u\\'(x)}{u(x)}$.",

            `Ici $u(x) = ${a}x + 1$, donc $u\\'(x) = ${a}$.`,
            `D\\'après la formule $(\\\\ln u)\\' = \\\\frac{u\\\'}{u}$, on obtient $f\\'(x) = \\\\frac{${a}}{${a}x + 1}$.`
          );
        } else if (tier === 3) {
          return this.makeMcq('TA5', 3, 'Croissances comparées',
            "Connaître la limite fondamentale $\\\\lim_{x \\to +\\infty} \\\\frac{\\\\ln x}{x} = 0$",

            "Quelle est la limite : $\\\\lim_{x \\\\to +\\\\infty} \\\\frac{\\\\ln(x)}{x}$ ?",

            "0 (l\'abscisse $x$ l\'emporte sur $\\ln(x)$ en $+\\infty$)",

            ['$+\\infty$', '1', 'La limite n\\'existe pas'],
            "Les puissances de $x$ croissent infiniment plus vite que le logarithme en $+\\\\infty$.",

            "C\'est un théorème de croissances comparées au programme de Terminale.",

            "D\'après le théorème des croissances comparées, les fonctions puissances l\'emportent sur le logarithme népérien en $+\\\\infty$, d\'où $\\\\lim_{x \\\\to +\\\\infty} \\\\frac{\\\\ln x}{x} = 0$."

          );
        } else {
          const x0 = this.randInt(2, 5);
          return this.makeMcq('TA5', 4, 'Résolution d\\'équations avec $\\\\ln$',
            "Appliquer l\'équivalence $\\\\ln(x) = k \\iff x = e^k$",

            `Résoudre dans $]0 ; +\\\\infty[$ l'équation : $\\\\ln(x) = ${x0}$.`,
            `$S = \\\\{e^{${x0}}\\\\}$`,
            [`$S = \\\\{${x0}\\\\}$`, `$S = \\\\{\\\\ln(${x0})\\\\}$`, `$S = \\\\{10^{${x0}}\\\\}$`],
            "La fonction exponentielle est la réciproque de la fonction logarithme : applique l\'exponentielle de chaque côté.",

            `$e^{\\\\ln(x)} = x$.`,
            `$\\\\ln(x) = ${x0} \\\\iff e^{\\\\ln(x)} = e^{${x0}} \\\\iff x = e^{${x0}}$. Comme $e^{${x0}} > 0$, la solution est bien dans le domaine : $S = \\\\{e^{${x0}}\\\\}$.`
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
          return this.makeMcq('TA6', 1, 'Solution de l\\'équation $y\\\' = ay$',
            "Connaître la forme générale $y(x) = C e^{ax}$",

            `Quelles sont les solutions sur $\\\\mathbb{R}$ de l'équation différentielle $y\\' = ${a}y$ ?`,
            `$y(x) = C e^{${a}x}$ avec $C \\\\in \\\\mathbb{R}$`,
            [`$y(x) = C e^{-${a}x}$`, `$y(x) = ${a}x + C$`, `$y(x) = C e^{x / ${Math.abs(a)}}`],
            "Le cours stipule que les solutions de $y\\' = ay$ sont de la forme $f(x) = C e^{ax}$ où $C$ est une constante réelle.",

            `Ici le coefficient est $a = ${a}$.`,
            `Les solutions de l\\'équation $y\\\' = ${a}y$ sont exactement les fonctions $x \\\\mapsto C e^{${a}x}$, où $C$ est une constante réelle fixée par les conditions initiales.`
          );
        } else if (tier === 2) {
          const yp = -b / a;
          const ypStr = this.simplifyFrac(-b, a);
          return this.makeMcq('TA6', 2, 'Solution particulière constante de $y\\\' = ay + b$',
            "Déterminer la solution constante $y_0 = -b/a$",

            `Quelle est la solution constante (particulière) de l'équation différentielle $y\\' = ${a}y ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}$ ?`,
            `$y_0 = ${ypStr}$`,
            [`$y_0 = ${this.simplifyFrac(b, a)}$`, `$y_0 = ${a}$`, `$y_0 = 0$`],
            "Une solution constante $y_0$ a une dérivée nulle : $y_0\\' = 0$.",

            `Remplace $y\\\'$ par 0 : $0 = ${a}y_0 ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}$.`,
            `$0 = ${a}y_0 + (${b}) \\\\iff ${a}y_0 = ${-b} \\\\iff y_0 = ${ypStr}$.`
          );
        } else if (tier === 3) {
          const n = this.randChoice([2, 3, 4]);
          return this.makeMcq('TA6', 3, 'Primitive d\\'une puissance $x^n$',
            "Appliquer la formule $\\\\int x^n dx = \\\\frac{x^{n+1}}{n+1}$",

            `Déterminer une primitive de $f(x) = x^${n}$ sur $\\\\mathbb{R}$.`,
            `$F(x) = \\\\frac{x^{${n + 1}}}{${n + 1}}$`,
            [`$F(x) = ${n}x^{${n - 1}}$`, `$F(x) = \\\\frac{x^{${n}}}{${n}}$`, `$F(x) = x^{${n + 1}}$`],
            "Pour dériver on multiplie par l\'exposant et on le baisse de 1 ; pour intégrer on augmente l\'exposant de 1 et on divise.",

            "Formule : une primitive de $x^n$ est $\\\\frac{x^{n+1}}{n+1}$.",

            `En augmentant la puissance de 1 : l\\'exposant devient $${n + 1}$, d\\'où $F(x) = \\\\frac{x^{${n + 1}}}{${n + 1}}$. En dérivant, on vérifie bien que $F\\\'(x) = x^${n}$.`
          );
        } else {
          return this.makeMcq('TA6', 4, 'Condition initiale pour une équation différentielle',
            "Déterminer la constante $C$ avec $y(0) = y_0$",

            `Soit l'équation $y\\' = 3y$ avec la condition initiale $y(0) = 5$. Quelle est l'unique solution ?`,
            "$y(x) = 5e^{3x}$",

            ['$y(x) = 3e^{5x}$', '$y(x) = e^{3x} + 4$', '$y(x) = 5e^{-3x}$'],
            "La forme générale est $y(x) = C e^{3x}$. Remplace $x$ par 0 pour trouver $C$.",

            `$y(0) = C e^0 = C \\\\times 1 = C$. Comme $y(0) = 5$, on a $C = 5$.`,
            `La solution générale est $y(x) = C e^{3x}$. En $x = 0$, $y(0) = C e^0 = C = 5$. L\\'unique solution vérifiant la condition initiale est donc $y(x) = 5e^{3x}$.`
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
          return this.makeMcq('TA7', 1, 'Calcul d\\'une intégrale par primitive',
            "Appliquer $\\\\int_a^b f(x) dx = [F(x)]_a^b = F(b) - F(a)$",

            `Calculer l'intégrale : $I = \\\\int_0^{${b}} x^2 \\\\, dx$.`,
            `$I = \\\\frac{${b * b * b}}{3}$`,
            [`$I = ${b * b}$`, `$I = \\\\frac{${b * b}}{2}$`, `$I = ${b * b * b}$`],
            "Une primitive de $x^2$ est $F(x) = \\\\frac{x^3}{3}$.",

            `Calcule $F(${b}) - F(0) = \\\\frac{${b}^3}{3} - 0$.`,
            `$I = \\\\left[\\\\frac{x^3}{3}\\\\right]_0^{${b}} = \\\\frac{${b}^3}{3} - 0 = \\\\frac{${b * b * b}}{3}$.`
          );
        } else if (tier === 2) {
          return this.makeMcq('TA7', 2, 'Interprétation géométrique de l\\'intégrale',
            "Lien entre intégrale d\'une fonction positive et aire sous la courbe",

            "Si $f$ est une fonction continue et positive sur $[a ; b]$, que représente l\'intégrale $\\\\int_a^b f(x) \\\\, dx$ ?",

            "L\'aire (en unités d\'aire) du domaine délimité par $\\\\mathcal{C}_f$, l\'axe des abscisses et les droites $x = a$ et $x = b$.",

            [
              "Le périmètre de la courbe entre $a$ et $b$.",

              "Le coefficient directeur moyen de la tangente.",

              "La valeur maximale atteinte par $f$ sur $[a ; b]$."

            ],
            "C\'est la définition géométrique historique de l\'intégrale de Riemann.",

            "L\'intégrale somme les aires des rectangles infinitésimaux de hauteur $f(x)$ et de largeur $dx$.",

            "Pour toute fonction continue et positive sur $[a ; b]$, l\'intégrale $\\\\int_a^b f(x) \\\\, dx$ mesure exactement l\'aire sous la courbe délimitée par l\'axe des abscisses."

          );
        } else if (tier === 3) {
          return this.makeMcq('TA7', 3, 'Formule d\\'intégration par parties (IPP)',
            "Connaître la formule $\\\\int u v\' = [uv] - \\\\int u\' v$",

            "Quelle est la formule d\'intégration par parties pour deux fonctions $u$ et $v$ dérivables sur $[a ; b]$ ?",

            "$\\int_a^b u(x)v'(x) \\, dx = [u(x)v(x)]_a^b - \\int_a^b u'(x)v(x) \\, dx$",

            [
              "$\\int_a^b u(x)v'(x) \\, dx = [u'(x)v'(x)]_a^b + \\int_a^b u(x)v(x) \\, dx$",

              "$\\int_a^b u(x)v'(x) \\, dx = \\int_a^b u(x) \\, dx \\times \\int_a^b v'(x) \\, dx$",

              "$\\int_a^b u(x)v'(x) \\, dx = [u(x)]_a^b \\times [v(x)]_a^b$"

            ],
            "Cette formule provient de l\'intégration de la dérivée d\'un produit : $(uv)\' = u\\'v + uv\\'$.",

            "En intégrant des deux côtés : $[uv]_a^b = \\\\int u\\'v + \\\\int uv\\'$.",

            "La formule d\'IPP est issue de la dérivation d\'un produit : $\\\\int_a^b uv\\' = [uv]_a^b - \\\\int_a^b u\\'v$."

          );
        } else {
          return this.makeMcq('TA7', 4, 'Valeur moyenne d\\'une fonction',
            "Appliquer la formule $\\\\mu = \\\\frac{1}{b - a} \\\\int_a^b f(x) dx$",

            "Quelle est la formule de la valeur moyenne d\'une fonction continue $f$ sur un intervalle $[a ; b]$ ($a < b$) ?",

            "$\\mu = \\frac{1}{b - a} \\int_a^b f(x) \\, dx$",

            ['$\\mu = \\frac{f(a) + f(b)}{2}$', '$\\mu = \\int_a^b f(x) \\, dx$', '$\\mu = \\frac{1}{2} \\int_a^b f(x) \\, dx$'],
            "La valeur moyenne correspond à la hauteur d\'un rectangle qui aurait la même aire que le domaine sous la courbe.",

            "Aire du rectangle = $\\\\mu \\\\times (b - a) = \\\\int_a^b f(x) dx$.",

            "Par définition, la valeur moyenne de $f$ sur $[a ; b]$ est $\\\\mu = \\\\frac{1}{b - a} \\\\int_a^b f(x) dx$."

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
          return this.makeMcq('TG1', 1, 'Représentation paramétrique de droite dans l\\'espace',
            "Associer point et vecteur directeur dans un système paramétrique",

            `On considère la droite $D$ passant par $A(${x0} ; ${y0} ; ${z0})$ et de vecteur directeur $\\\\vec{u}(${a} ; ${b} ; ${c})$. Quel est son système paramétrique ?`,
            `$\\\\begin{cases} x = ${x0} ${a >= 0 ? '+ ' + a : '- ' + Math.abs(a)}t \\\\\\\\ y = ${y0} ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}t \\\\\\\\ z = ${z0} ${c >= 0 ? '+ ' + c : '- ' + Math.abs(c)}t \\\\end{cases}$ ($t \\\\in \\\\mathbb{R}$)`,
            [
              `$\\\\begin{cases} x = ${a} + ${x0}t \\\\\\\\ y = ${b} + ${y0}t \\\\\\\\ z = ${c} + ${z0}t \\\\end{cases}$`,
              `$${a}x + ${b}y + ${c}z = 0$`,
              `$\\\\begin{cases} x = ${x0}t \\\\\\\\ y = ${y0}t \\\\\\\\ z = ${z0}t \\\\end{cases}$`
            ],
            "Formule : $M(x, y, z) \\\\in D \\\\iff \\\\vec{AM} = t\\\\vec{u}$.",

            `Les coordonnées sont $x = x_A + t a$, $y = y_A + t b$, $z = z_A + t c$.`,
            `La représentation paramétrique s\\'écrit en égalant $\\\\vec{AM} = t\\\\vec{u}$ composante par composante : $x = ${x0} + ${a}t$, $y = ${y0} + ${b}t$, $z = ${z0} + ${c}t$.`
          );
        } else if (tier === 2) {
          return this.makeMcq('TG1', 2, 'Coplanarité de trois vecteurs',
            "Caractériser la coplanarité par une combinaison linéaire",

            "Trois vecteurs $\\\\vec{u}, \\\\vec{v}$ et $\\\\vec{w}$ de l\'espace sont dits coplanaires si et seulement si :",

            "L\'un d\'eux peut s\'écrire comme combinaison linéaire des deux autres (ex: $\\\\vec{w} = a\\\\vec{u} + b\\\\vec{v}$).",

            [
              "Leurs normes sont toutes égales.",

              "Ils sont deux à deux orthogonaux.",

              "Ils ont la même direction."

            ],
            "Coplanaires signifie qu\'ils peuvent être représentés dans un même plan géométrique.",

            "Deux vecteurs non colinéaires forment une base d\'un plan ; le troisième doit appartenir à ce plan.",

            "Trois vecteurs sont coplanaires si et seulement si leurs directions sont parallèles à un même plan, ce qui équivaut à l\'existence de réels $a, b$ tels que $\\\\vec{w} = a\\\\vec{u} + b\\\\vec{v}$."

          );
        } else if (tier === 3) {
          return this.makeMcq('TG1', 3, 'Positions relatives de deux droites dans l\\'espace',
            "Cas particulier de l\'espace : droites non coplanaires",

            "Contrairement au plan, dans l\'espace deux droites qui n\'ont aucun point d\'intersection peuvent être :",

            "Soit parallèles, soit non coplanaires (gauchères).",

            ['Nécessairement parallèles', 'Nécessairement confondues', 'Toujours orthogonales'],
            "Pense à deux lignes de métro qui se croisent à des niveaux de profondeur différents : elles ne se touchent jamais et ne sont pas parallèles.",

            "Deux droites de l\'espace sont coplanaires uniquement si elles sont sécantes ou parallèles.",

            "Dans l\'espace à 3 dimensions, deux droites sans point commun peuvent être strictement parallèles OU non coplanaires (elles ne sont contenues dans aucun plan commun)."

          );
        } else {
          return this.makeMcq('TG1', 4, 'Droites orthogonales vs perpendiculaires',
            "Distinguer orthogonalité et perpendicularité dans l\'espace",

            "Dans l\'espace, quelle est la différence entre deux droites perpendiculaires et deux droites orthogonales ?",

            "Deux droites orthogonales ont des vecteurs directeurs orthogonaux ; elles sont perpendiculaires si et seulement si elles sont en outre sécantes.",

            [
              "Il n\'y a aucune différence, ce sont deux termes synonymes.",

              "Deux droites perpendiculaires ne sont jamais sécantes.",

              "L\'orthogonalité n\'existe que pour les plans."

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
            "Identifier le vecteur normal à partir de l\'équation cartésienne",

            `Donner un vecteur normal $\\\\vec{n}$ au plan d'équation cartésienne : $${a}x ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}y + ${c}z ${d >= 0 ? '+ ' + d : '- ' + Math.abs(d)} = 0$.`,
            `$\\\\vec{n}(${a} ; ${b} ; ${c})$`,
            [`$\\\\vec{n}(${-a} ; ${b} ; ${c})$`, `$\\\\vec{n}(${b} ; ${a} ; ${c})$`, `$\\\\vec{n}(${a} ; ${b} ; ${d})$`],
            "Dans l\'espace, tout plan d\'équation $ax + by + cz + d = 0$ admet pour vecteur normal orthogonal $\\\\vec{n}(a ; b ; c)$.",

            "Prends simplement les coefficients multiplicateurs de $x$, $y$ et $z$.",

            `Les coefficients de $x, y, z$ sont respectivement $a = ${a}$, $b = ${b}$, $c = ${c}$. Donc $\\\\vec{n}(${a} ; ${b} ; ${c})$.`
          );
        } else if (tier === 2) {
          const x1 = this.randInt(-2, 3);
          const y1 = this.randInt(-2, 3);
          const z1 = this.randInt(-2, 3);
          const dot = a * x1 + b * y1 + c * z1;
          return this.makeMcq('TG2', 2, 'Produit scalaire 3D analytique',
            "Calculer $\\\\vec{u} \\\\cdot \\\\vec{v} = xx\' + yy\' + zz\'$",

            `Calculer le produit scalaire des vecteurs $\\\\vec{u}(${a} ; ${b} ; ${c})$ et $\\\\vec{v}(${x1} ; ${y1} ; ${z1})$.`,
            `$\\\\vec{u} \\\\cdot \\\\vec{v} = ${dot}$`,
            [`$\\\\vec{u} \\\\cdot \\\\vec{v} = ${dot + 2}$`, `$\\\\vec{u} \\\\cdot \\\\vec{v} = ${-dot}$`, `$\\\\vec{u} \\\\cdot \\\\vec{v} = ${a * x1 + b * y1}`],
            "Formule analytique dans l\'espace : $\\\\vec{u} \\\\cdot \\\\vec{v} = x x\' + y y\' + z z\'$.",

            `$(${a})(${x1}) + (${b})(${y1}) + (${c})(${z1})$.`,
            `$\\\\vec{u} \\\\cdot \\\\vec{v} = ${a * x1} + (${b * y1}) + (${c * z1}) = ${dot}$.`
          );
        } else if (tier === 3) {
          return this.makeMcq('TG2', 3, 'Plans orthogonaux',
            "Caractériser l\'orthogonalité de deux plans par leurs vecteurs normaux",

            "Deux plans $\\\\mathcal{P}_1$ et $\\\\mathcal{P}_2$ de vecteurs normaux respectifs $\\\\vec{n}_1$ et $\\\\vec{n}_2$ sont perpendiculaires si et seulement si :",

            "$\\vec{n}_1 \\cdot \\vec{n}_2 = 0$",

            ['$\\vec{n}_1$ et $\\vec{n}_2$ sont colinéaires', '$\\vec{n}_1 = \\vec{n}_2$', '$\\vec{n}_1 \\cdot \\vec{n}_2 = 1$'],
            "Deux plans forment un angle droit si et seulement si leurs directions normales sont orthogonales.",

            "L\'orthogonalité de deux vecteurs se traduit par un produit scalaire nul.",

            "L\'angle dièdre entre deux plans est égal à l\'angle entre leurs vecteurs normaux. Ils sont perpendiculaires si et seulement si $\\\\vec{n}_1 \\\\cdot \\\\vec{n}_2 = 0$."

          );
        } else {
          return this.makeMcq('TG2', 4, 'Projeté orthogonal d\\'un point sur un plan',
            "Distance d\'un point à un plan",

            "Le projeté orthogonal d\'un point $A$ sur un plan $\\\\mathcal{P}$ est :",

            "L\'unique point $H \\in \\mathcal{P}$ tel que la droite $(AH)$ est orthogonale au plan $\\mathcal{P}$.",

            [
              "Le point du plan le plus éloigné de $A$.",

              "L\'intersection du plan avec l\'axe des abscisses.",

              "Le milieu du vecteur normal."

            ],
            "La distance minimale d\'un point à un plan est atteinte le long de la direction normale.",

            "La droite reliant $A$ à son projeté doit avoir la direction du vecteur normal $\\\\vec{n}$.",

            "Par définition géométrique, le projeté orthogonal de $A$ sur $\\\\mathcal{P}$ est le point $H \\\\in \\\\mathcal{P}$ tel que le vecteur $\\\\vec{AH}$ est colinéaire au vecteur normal du plan."

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
            "Calculer le coefficient binomial $\\\\binom{n}{k}$",

            `Calculer le coefficient binomial $\\\\binom{5}{2}$.`,
            `$\\\\binom{5}{2} = 10$`,
            [`$\\\\binom{5}{2} = 5$`, `$\\\\binom{5}{2} = 20$`, `$\\\\binom{5}{2} = 2$`],
            "Formule : $\\\\binom{n}{k} = \\\\frac{n!}{k!(n-k)!} = \\\\frac{n(n-1)...}{k!}$.",

            `$\\\\binom{5}{2} = \\\\frac{5 \\\\times 4}{2 \\\\times 1} = \\\\frac{20}{2} = 10$.`,
            `$\\\\binom{5}{2} = \\\\frac{5 \\\\times 4}{2 \\\\times 1} = 10$. C\\'est le nombre de chemins à 2 succès dans un arbre à 5 épreuves.`
          );
        } else if (tier === 2) {
          return this.makeMcq('TS1', 2, 'Formule de la loi binomiale',
            "Connaître $P(X = k) = \\\\binom{n}{k} p^k (1-p)^{n-k}$",

            "Soit $X$ une variable aléatoire suivant la loi binomiale $\\\\mathcal{B}(n, p)$. Quelle est la probabilité d\'obtenir exactement $k$ succès ?",

            "$P(X = k) = \\binom{n}{k} p^k (1 - p)^{n - k}$",

            [
              "$P(X = k) = p^k (1 - p)^{n - k}$",

              "$P(X = k) = \\binom{n}{k} p^{n-k} (1 - p)^k$",

              "$P(X = k) = \\frac{p^k}{k!}$"

            ],
            "Chaque chemin menant à $k$ succès a pour probabilité $p^k (1-p)^{n-k}$, et il y a $\\\\binom{n}{k}$ chemins identiques.",

            "On multiplie le nombre de chemins par la probabilité d\'un chemin.",

            "D\'après la loi binomiale $\\\\mathcal{B}(n, p)$, la probabilité d\'obtenir $k$ succès parmi $n$ tirages indépendants est $P(X = k) = \\\\binom{n}{k} p^k (1 - p)^{n - k}$."

          );
        } else if (tier === 3) {
          const n = this.randChoice([20, 50, 100]);
          const p = 0.2;
          const eX = n * p;
          return this.makeMcq('TS1', 3, 'Espérance d\\'une loi binomiale',
            "Appliquer la formule $E(X) = np$",

            `Soit $X \\\\sim \\\\mathcal{B}(${n} ; 0{,}2)$. Quelle est l'espérance mathématique $E(X)$ ?`,
            `$E(X) = ${eX}$`,
            [`$E(X) = ${n * 0.8}$`, `$E(X) = 0{,}2$`, `$E(X) = ${eX * 2}$`],
            "Pour une loi binomiale $\\\\mathcal{B}(n, p)$, l\'espérance est le produit $E(X) = n \\\\times p$.",

            `Calcule $${n} \\\\times 0{,}2$.`,
            `$E(X) = n \\\\times p = ${n} \\\\times 0{,}2 = ${eX}$. Cela représente le nombre moyen de succès espérés.`
          );
        } else {
          return this.makeMcq('TS1', 4, 'Variance d\\'une loi binomiale',
            "Appliquer la formule $V(X) = np(1-p)$",

            "Quelle est la variance $V(X)$ d\'une variable aléatoire $X \\\\sim \\\\mathcal{B}(n, p)$ ?",

            "$V(X) = np(1 - p)$",

            ['$V(X) = np$', '$V(X) = \\sqrt{np(1-p)}$', '$V(X) = n^2 p (1-p)$'],
            "La variance d\'une épreuve de Bernoulli est $p(1-p)$. Par indépendance, on additionne les variances.",

            "L\'écart-type serait la racine carrée $\\\\sigma(X) = \\\\sqrt{np(1-p)}$.",

            "Pour une variable aléatoire binomiale $X \\\\sim \\\\mathcal{B}(n, p)$, la variance vaut $V(X) = np(1 - p)$."

          );
        }
      }

      // ---------------------------------------------------------------------
      // TS2 : Sommes de variables aléatoires et loi des grands nombres
      // ---------------------------------------------------------------------
      case 'TS2': {
        if (tier === 1) {
          return this.makeMcq('TS2', 1, 'Linéarité de l\\'espérance',
            "Appliquer $E(X + Y) = E(X) + E(Y)$",

            "Soient deux variables aléatoires $X$ et $Y$ définies sur le même univers avec $E(X) = 3$ et $E(Y) = 5$. Que vaut $E(X + Y)$ ?",

            "$E(X + Y) = 8$",

            ['$E(X + Y) = 15$', '$E(X + Y) = 2$', 'On ne peut pas savoir si elles ne sont pas indépendantes'],
            "L\'espérance est TOUJOURS linéaire, que les variables soient indépendantes ou non !",

            "$E(X + Y) = E(X) + E(Y) = 3 + 5$.",

            "Par linéarité de l\'espérance (propriété toujours vraie, même sans indépendance) : $E(X + Y) = E(X) + E(Y) = 3 + 5 = 8$."

          );
        } else if (tier === 2) {
          return this.makeMcq('TS2', 2, 'Variance de la somme de variables indépendantes',
            "Appliquer $V(X + Y) = V(X) + V(Y)$ pour des variables indépendantes",

            "Si $X$ et $Y$ sont deux variables aléatoires INDÉPENDANTES avec $V(X) = 4$ et $V(Y) = 9$, que vaut $V(X + Y)$ ?",

            "$V(X + Y) = 13$",

            ['$V(X + Y) = 5$', '$V(X + Y) = 36$', '$V(X + Y) = 25$'],
            "Pour des variables indépendantes, les variances s\'additionnent : $V(X + Y) = V(X) + V(Y)$.",

            "Additionne simplement 4 et 9.",

            "L\'indépendance assure que la covariance est nulle, d\'où $V(X + Y) = V(X) + V(Y) = 4 + 9 = 13$."

          );
        } else if (tier === 3) {
          return this.makeMcq('TS2', 3, 'Inégalité de Bienaymé-Tchebychev',
            "Connaître $P(|X - E(X)| \\ge \\varepsilon) \\le \\frac{V(X)}{\\varepsilon^2}$",

            "Pour toute variable aléatoire $X$ d\'espérance $\\\\mu$ et de variance $V$, quelle est l\'inégalité de Bienaymé-Tchebychev pour tout $\\\\varepsilon > 0$ ?",

            "$P(|X - \\mu| \\ge \\varepsilon) \\le \\frac{V(X)}{\\varepsilon^2}$",

            [
              "$P(|X - \\mu| \\ge \\varepsilon) \\le \\frac{\\sigma(X)}{\\varepsilon}$",

              "$P(|X - \\mu| \\ge \\varepsilon) \\ge \\frac{V(X)}{\\varepsilon^2}$",

              "$P(|X - \\mu| \\le \\varepsilon) = 1$"

            ],
            "Cette inégalité borne la probabilité que la variable s\'écarte de sa moyenne par sa variance.",

            "Le membre de droite est $\\\\frac{V(X)}{\\\\varepsilon^2}$.",

            "L\'inégalité de Bienaymé-Tchebychev s\'écrit : $P(|X - E(X)| \\\\ge \\\\varepsilon) \\\\le \\\\frac{V(X)}{\\\\varepsilon^2}$."

          );
        } else {
          return this.makeMcq('TS2', 4, 'Loi faible des grands nombres',
            "Comprendre la convergence de la moyenne empirique vers l\'espérance",

            "Que stipule la loi des grands nombres pour une suite de variables indépendantes et de même loi d\'espérance $\\\\mu$ ?",

            "La moyenne empirique $M_n = \\frac{1}{n} \\sum_{i=1}^n X_i$ converge en probabilité vers l\'espérance théorique $\\mu$.",

            [
              "La somme $\\sum X_i$ reste constante et égale à $\\mu$.",

              "La variance devient infinie quand $n$ grandit.",

              "La moyenne empirique est toujours exactement égale à $\\mu$ dès que $n \\ge 30$."

            ],
            "Plus on répète une expérience aléatoire, plus la moyenne des résultats observés se rapproche de l\'espérance mathématique.",

            "C\'est le fondement de toutes les statistiques et des sondages.",

            "La loi des grands nombres garantit que pour tout $\\\\varepsilon > 0$, $\\\\lim_{n \\\\to +\\\\infty} P(|M_n - \\\\mu| \\\\ge \\\\varepsilon) = 0$. La moyenne empirique tend vers la valeur théorique $\\\\mu$."

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
            "Identifier $\\\\text{Re}(z)$ et $\\\\text{Im}(z)$ dans l\'écriture $a + ib$",

            `Quelles sont les parties réelle et imaginaire du nombre complexe $z = ${a} - ${b}i$ ?`,
            `$\\\\text{Re}(z) = ${a}$ et $\\\\text{Im}(z) = -${b}$`,
            [`$\\\\text{Re}(z) = ${a}$ et $\\\\text{Im}(z) = -${b}i$`, `$\\\\text{Re}(z) = -${b}$ et $\\\\text{Im}(z) = ${a}$`, `$\\\\text{Re}(z) = ${a + b}$`],
            "La partie imaginaire est un nombre RÉEL (le coefficient devant $i$, sans inclure $i$).",

            `Le signe moins fait partie intégrante de la partie imaginaire.`,
            `Dans $z = a + ib$, on a $\\\\text{Re}(z) = a = ${a}$ et $\\\\text{Im}(z) = b = -${b}$.`
          );
        } else if (tier === 2) {
          const mod2 = a * a + b * b;
          return this.makeMcq('TX1', 2, 'Conjugué et module au carré',
            "Calculer le produit $z \\\\bar{z} = a^2 + b^2$",

            `Pour $z = ${a} + ${b}i$, que vaut le produit $z \\\\bar{z}$ ?`,
            `$z \\\\bar{z} = ${mod2}$`,
            [`$z \\\\bar{z} = ${a * a - b * b}$`, `$z \\\\bar{z} = ${a * a + b * b}i$`, `$z \\\\bar{z} = ${2 * a}$`],
            "Le conjugué est $\\\\bar{z} = a - ib$. Alors $(a + ib)(a - ib) = a^2 - (ib)^2 = a^2 + b^2$.",

            `Calcule $${a}^2 + ${b}^2 = ${a * a} + ${b * b}$.`,
            `$z \\\\bar{z} = (${a} + ${b}i)(${a} - ${b}i) = ${a}^2 - (${b}i)^2 = ${a * a} - (${b * b}(-1)) = ${a * a} + ${b * b} = ${mod2}$.`
          );
        } else if (tier === 3) {
          return this.makeMcq('TX1', 3, 'Inverse d\\'un nombre complexe',
            "Écrire $\\\\frac{1}{z}$ sous forme algébrique en multipliant par le conjugué",

            "Sous quelle forme algébrique s\'écrit l\'inverse de $z = 1 + i$ ?",

            "$\\frac{1}{1 + i} = \\frac{1 - i}{2} = \\frac{1}{2} - \\frac{1}{2}i$",

            ['$1 - i$', '$\\frac{1}{2} + \\frac{1}{2}i$', '$-1 - i$'],
            "Multiplie le numérateur et le dénominateur par le conjugué $1 - i$.",

            "Au dénominateur : $(1+i)(1-i) = 1^2 - i^2 = 1 - (-1) = 2$.",

            `$\\\\frac{1}{1+i} = \\\\frac{1-i}{(1+i)(1-i)} = \\\\frac{1-i}{2} = \\\\frac{1}{2} - \\\\frac{1}{2}i$.`
          );
        } else {
          return this.makeMcq('TX1', 4, 'Équation du second degré à discriminant négatif',
            "Résoudre dans C l\'équation $az^2 + bz + c = 0$ quand Delta < 0",

            "Résoudre dans $\\\\mathbb{C}$ l\'équation : $z^2 + 4 = 0$.",

            "$S = \\{-2i, 2i\\}$",

            ['$S = \\{-2, 2\\}$', '$S = \\{2i\\}$', '$S = \\emptyset$'],
            "$z^2 = -4$. Dans $\\\\mathbb{C}$, $-1 = i^2$, donc $-4 = 4i^2 = (2i)^2$.",

            `Les deux racines sont $-2i$ et $2i$.`,
            `$z^2 = -4 \\\\iff z^2 = (2i)^2 \\\\iff z^2 - (2i)^2 = 0 \\\\iff (z - 2i)(z + 2i) = 0$, donc $S = \\\\{-2i, 2i\\\\}$.`
          );
        }
      }

      // ---------------------------------------------------------------------
      // TX2 : Nombres complexes et géométrie : trigonométrie et exponentielle
      // ---------------------------------------------------------------------
      case 'TX2': {
        if (tier === 1) {
          return this.makeMcq('TX2', 1, 'Formule d\\'Euler et notation exponentielle',
            "Connaître $e^{i\\theta} = \\cos(\\theta) + i\\sin(\\theta)$",

            "Quelle est l\'écriture trigonométrique de l\'exponentielle imaginaire $e^{i\\\\theta}$ ?",

            "$e^{i\\theta} = \\cos(\\theta) + i\\sin(\\theta)$",

            ['$e^{i\\theta} = \\sin(\\theta) + i\\cos(\\theta)$', '$e^{i\\theta} = \\cos(\\theta) - i\\sin(\\theta)$', '$e^{i\\theta} = i\\theta$'],
            "C\'est la célèbre formule d\'Euler reliant l\'analyse complexe et la trigonométrie.",

            "La partie réelle est $\\\\cos(\\\\theta)$ et la partie imaginaire est $\\\\sin(\\\\theta)$.",

            "Par définition d\'Euler, $e^{i\\\\theta} = \\\\cos(\\\\theta) + i\\\\sin(\\\\theta)$."

          );
        } else if (tier === 2) {
          return this.makeMcq('TX2', 2, 'Module et argument d\\'un complexe usuel',
            "Déterminer $r$ et $\\\\theta$ pour $1 + i$",

            "Quels sont le module et un argument du nombre complexe $z = 1 + i$ ?",

            "$|z| = \\sqrt{2}$ et $\\arg(z) = \\frac{\\pi}{4} \\ [2\\pi]$",

            ['$|z| = 2$ et $\\arg(z) = \\frac{\\pi}{4}$', '$|z| = \\sqrt{2}$ et $\\arg(z) = \\frac{\\pi}{2}$', '$|z| = 1$ et $\\arg(z) = 0$'],
            "Module : $|z| = \\\\sqrt{a^2 + b^2} = \\\\sqrt{1^2 + 1^2} = \\\\sqrt{2}$.",

            `Factorise par $\\\\sqrt{2}$ : $1+i = \\\\sqrt{2}\\\\left(\\\\frac{\\\\sqrt{2}}{2} + i\\\\frac{\\\\sqrt{2}}{2}\\\\right)$.`,
            `On a $|z| = \\\\sqrt{1+1} = \\\\sqrt{2}$ et $\\\\cos(\\\\theta) = \\\\sin(\\\\theta) = \\\\frac{\\\\sqrt{2}}{2}$, donc $\\\\theta = \\\\frac{\\\\pi}{4} \\\\ [2\\\\pi]$.`
          );
        } else if (tier === 3) {
          return this.makeMcq('TX2', 3, 'Formule de Moivre',
            "Appliquer $(\\\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$",

            "D\'après la formule de Moivre, que vaut $(e^{i\\\\theta})^n$ pour tout $n \\\\in \\\\mathbb{Z}$ ?",

            "$\\cos(n\\theta) + i\\sin(n\\theta)$",

            ['$\\cos^n(\\theta) + i\\sin^n(\\theta)$', '$n(\\cos\\theta + i\\sin\\theta)$', '$e^{n + i\\theta}$'],
            "Les puissances d\'exponentielles multiplient les arguments : $(e^{i\\\\theta})^n = e^{i n \\\\theta}$.",

            "Applique ensuite la formule d\'Euler à l\'angle $n\\\\theta$.",

            "La formule de Moivre stipule que $(e^{i\\\\theta})^n = e^{in\\\\theta} = \\\\cos(n\\\\theta) + i\\\\sin(n\\\\theta)$."

          );
        } else {
          return this.makeMcq('TX2', 4, 'Interprétation géométrique d\\'un quotient complexe',
            "Lien entre angle de vecteurs et argument d\'un quotient",

            "Dans le plan complexe, à quoi correspond géométriquement l\'argument du quotient $\\\\frac{z_C - z_A}{z_B - z_A}$ ?",

            "À la mesure de l\'angle orienté $(\\vec{AB}, \\vec{AC}) \\ [2\\pi]$.",

            [
              "À la distance $BC$.",

              "À la mesure de l\'angle $(\\vec{AC}, \\vec{AB})$.",

              "Au produit scalaire $\\vec{AB} \\cdot \\vec{AC}$."

            ],
            "Rappelle-toi que $\\\\arg(z_C - z_A) = (\\\\vec{u}, \\\\vec{AC})$ et $\\\\arg(z_B - z_A) = (\\\\vec{u}, \\\\vec{AB})$.",

            "La différence des arguments donne $(\\\\vec{u}, \\\\vec{AC}) - (\\\\vec{u}, \\\\vec{AB}) = (\\\\vec{AB}, \\\\vec{AC})$ d\'après la relation de Chasles.",

            "On a $\\\\arg\\\\left(\\\\frac{z_C - z_A}{z_B - z_A}\\\\right) = \\\\arg(z_C - z_A) - \\\\arg(z_B - z_A) = (\\\\vec{AB}, \\\\vec{AC}) \\\\ [2\\\\pi]$."

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

            `Quel est le reste de la division euclidienne de $${a}$ par $${n}$ (soit $${a} \\\\equiv r \\\\pmod{${n}}$ avec $0 \\\\le r < ${n}$) ?`,
            `$r = ${r}$`,
            [`$r = ${r + 1}$`, `$r = ${n - r}$`, `$r = 0$`],
            "Effectue la division euclidienne : $a = bq + r$ avec $0 \\\\le r < b$.",

            `$${a} = ${n} \\\\times ${Math.floor(a / n)} + ${r}$.`,
            `On a $${a} = ${n} \\\\times ${Math.floor(a / n)} + ${r}$ avec $0 \\\\le ${r} < ${n}$, donc $${a} \\\\equiv ${r} \\\\pmod{${n}}$.`
          );
        } else if (tier === 2) {
          return this.makeMcq('TX3', 2, 'Compatibilité des congruences avec les opérations',
            "Propriété fondamentale de l\'addition et de la multiplication modulo $n$",

            "Si $a \\\\equiv b \\\\pmod n$ et $c \\\\equiv d \\\\pmod n$, alors :",

            "$a + c \\equiv b + d \\pmod n$ et $a \\times c \\equiv b \\times d \\pmod n$",

            [
              "Seule l\'addition est compatible avec les congruences.",

              "Seule la multiplication est compatible avec les congruences.",

              "$a / c \\equiv b / d \\pmod n$ dans tous les cas."

            ],
            "Les congruences sont compatibles avec l\'addition, la soustraction, la multiplication et les puissances entières.",

            "Attention : la division n\'est généralement pas permise sans inversibilité.",

            "Les congruences forment un anneau quotient : elles sont entièrement compatibles avec l\'addition et la multiplication."

          );
        } else if (tier === 3) {
          return this.makeMcq('TX3', 3, 'Petit théorème de Fermat',
            "Appliquer $a^{p-1} \\equiv 1 \\pmod p$ pour $p$ premier et $\\gcd(a, p) = 1$",

            "Soit $p$ un nombre premier et $a$ un entier non divisible par $p$. Que vaut $a^{p-1} \\\\pmod p$ d\'après le petit théorème de Fermat ?",

            "$a^{p-1} \\equiv 1 \\pmod p$",

            ['$a^{p-1} \\equiv 0 \\pmod p$', '$a^{p-1} \\equiv a \\pmod p$', '$a^{p-1} \\equiv p - 1 \\pmod p$'],
            "C\'est le petit théorème de Fermat, fondamental pour les tests de primalité et le RSA.",

            "Sous forme équivalente pour tout entier : $a^p \\\\equiv a \\\\pmod p$.",

            "D\'après le petit théorème de Fermat, si $p$ est premier et ne divise pas $a$, alors $a^{p-1} \\\\equiv 1 \\\\pmod p$."

          );
        } else {
          return this.makeMcq('TX3', 4, 'Chiffre des unités d\\'une grande puissance',
            "Calculer modulo 10 à l\'aide des congruences",

            "Quel est le chiffre des unités de $7^4$ dans son écriture décimale ?",

            "1 (car $7^4 = 2401 \\equiv 1 \\pmod{10}$)",

            ['7', '9', '3'],
            "Le chiffre des unités d\'un entier est son reste modulo 10.",

            `$7^1 = 7$, $7^2 = 49 \\\\equiv 9$, $7^3 \\\\equiv 9 \\\\times 7 = 63 \\\\equiv 3$, $7^4 \\\\equiv 3 \\\\times 7 = 21 \\\\equiv 1 \\\\pmod{10}$.`,
            `On a $7^2 = 49 \\\\equiv -1 \\\\pmod{10}$, donc $7^4 = (7^2)^2 \\\\equiv (-1)^2 \\\\equiv 1 \\\\pmod{10}$. Le chiffre des unités est 1.`
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

            "D\'après le théorème de Bézout, deux entiers non nuls $a$ et $b$ sont premiers entre eux ($\\\\text{PGCD}(a, b) = 1$) si et seulement si :",

            "Il existe deux entiers relatifs $u$ et $v$ tels que $au + bv = 1$.",

            [
              "Il existe $u$ et $v$ tels que $au + bv = 0$.",

              "$a$ et $b$ sont tous les deux des nombres premiers.",

              "$a + b = 1$."

            ],
            "L\'égalité $au + bv = 1$ est appelée identité de Bézout.",

            "Les coefficients $u$ et $v$ se calculent grâce à l\'algorithme d\'Euclide étendu.",

            "Le théorème de Bézout affirme que $\\\\text{PGCD}(a, b) = 1 \\\\iff \\\\exists u, v \\\\in \\\\mathbb{Z}, au + bv = 1$."

          );
        } else if (tier === 2) {
          return this.makeMcq('TX4', 2, 'Théorème de Gauss',
            "Énoncer le théorème de Gauss : si $a | bc$ et $\\gcd(a, b) = 1$ alors $a | c$",

            "Soient $a, b, c$ trois entiers relatifs non nuls. Si $a$ divise le produit $bc$ et si $\\\\text{PGCD}(a, b) = 1$, que conclut le théorème de Gauss ?",

            "$a$ divise $c$",

            ['$a$ divise $b$', '$b$ divise $c$', '$a = c$'],
            "Comme $a$ ne partage aucun facteur avec $b$, il doit nécessairement diviser l\'autre facteur $c$.",

            "On le démontre en multipliant l\'identité de Bézout $au + bv = 1$ par $c$.",

            "D\'après le théorème de Gauss, si $a$ divise un produit $bc$ et est premier avec $b$, alors $a$ divise nécessairement $c$."

          );
        } else if (tier === 3) {
          return this.makeMcq('TX4', 3, 'Corollaire du théorème de Gauss',
            "Divisibilité par un produit de nombres premiers entre eux",

            "Si un entier $n$ est divisible par 3 et par 4, est-il nécessairement divisible par 12 ?",

            "Oui, car 3 et 4 sont premiers entre eux (PGCD(3, 4) = 1).",

            [
              "Non, il pourrait être divisible par 7 uniquement.",

              "Oui, c\'est vrai pour n\'importe quelle paire d\'entiers même s\'ils ne sont pas premiers entre eux.",

              "Uniquement si $n$ est pair."

            ],
            "Si $a|n$ et $b|n$ avec $\\\\text{PGCD}(a, b) = 1$, alors le produit $ab$ divise $n$.",

            "Attention : si $\\\\text{PGCD}(a, b) \\\\neq 1$, ce n\'est pas vrai (ex: divisible par 4 et par 6 n\'implique pas 24).",

            "Puisque 3 et 4 sont premiers entre eux, d\'après le corollaire du théorème de Gauss, leur produit $3 \\\\times 4 = 12$ divise $n$."

          );
        } else {
          return this.makeMcq('TX4', 4, 'Principe du chiffrement RSA',
            "Comprendre le rôle de la clé publique et de la clé privée en arithmétique",

            "Dans le protocole de chiffrement asymétrique RSA, sur quelle difficulté calculatoire repose la sécurité de la clé privée ?",

            "La difficulté algorithmique de factoriser un très grand nombre $N = pq$ en produit de deux nombres premiers géants.",

            [
              "L\'impossibilité de calculer des congruences modulo $N$.",

              "La lenteur de l\'algorithme d\'Euclide.",

              "Le fait que $\\pi$ soit irrationnel."

            ],
            "Multiplier deux nombres premiers de 300 chiffres est instantané ; retrouver ces deux nombres à partir de leur produit prend des milliards d\'années.",

            "C\'est le principe de la fonction à sens unique avec trappe.",

            "La sécurité du RSA repose sur l\'asymétrie de complexité : le produit $N = pq$ est facile à calculer mais la factorisation en facteurs premiers de grands entiers est intirable en temps raisonnable."

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

            "Soient $A = \\\\begin{pmatrix} 1 & 2 \\\\\\\\ 0 & 3 \\\\end{pmatrix}$ et $B = \\\\begin{pmatrix} 2 & 1 \\\\\\\\ 1 & 0 \\\\end{pmatrix}$. Quel est le premier coefficient $(AB)_{1,1}$ ?",

            "$(AB)_{1,1} = 1 \\times 2 + 2 \\times 1 = 4$",

            ['$(AB)_{1,1} = 2$', '$(AB)_{1,1} = 1$', '$(AB)_{1,1} = 6$'],
            "Le coefficient $(AB)_{1,1}$ est le produit scalaire de la 1ère ligne de $A$ par la 1ère colonne de $B$.",

            `Ligne 1 de $A$ : $(1, 2)$ ; Colonne 1 de $B$ : $(2, 1)^T$.`,
            `$(AB)_{1,1} = 1 \\\\times 2 + 2 \\\\times 1 = 2 + 2 = 4$.`
          );
        } else if (tier === 2) {
          return this.makeMcq('TX5', 2, 'Inverse d\\'une matrice $2 \\times 2$',
            "Condition d\'inversibilité : déterminant non nul $\\\\det(M) \\neq 0$",

            "La matrice $M = \\\\begin{pmatrix} a & b \\\\\\\\ c & d \\\\end{pmatrix}$ est inversible si et seulement si :",

            "Son déterminant $\\det(M) = ad - bc \\neq 0$",

            ['$a + d \\neq 0$', 'Tous ses coefficients sont non nuls', '$ad - bc = 0$'],
            "L\'inverse fait intervenir la division par le déterminant : $M^{-1} = \\\\frac{1}{ad-bc} \\\\begin{pmatrix} d & -b \\\\\\\\ -c & a \\\\end{pmatrix}$.",

            "On ne peut jamais diviser par zéro.",

            "Une matrice carrée d\'ordre 2 est inversible si et seulement si son déterminant est non nul : $\\\\det(M) = ad - bc \\\\neq 0$."

          );
        } else if (tier === 3) {
          return this.makeMcq('TX5', 3, 'Matrice de transition d\\'une chaîne de Markov',
            "Propriété stochastique des lignes d\'une matrice de transition",

            "Dans un graphe probabiliste, quelle est la propriété caractéristique fondamentale de la matrice de transition $P$ ?",

            "La somme des coefficients de chaque ligne est égale à 1.",

            [
              "La somme des coefficients de chaque colonne est égale à 1.",

              "La matrice est obligatoirement symétrique.",

              "Le déterminant vaut toujours 1."

            ],
            "Depuis un sommet donné, la somme des probabilités de toutes les sorties possibles vaut 1 (événement certain).",

            "Chaque ligne représente la distribution conditionnelle des transitions depuis un état.",

            "Puisque depuis chaque état la somme des probabilités de transition vers tous les états possibles vaut 1, la somme des termes de chaque ligne d\'une matrice de transition stochastique vaut 1."

          );
        } else {
          return this.makeMcq('TX5', 4, 'État stable d\\'une chaîne de Markov',
            "Résoudre le système $\\pi P = \\pi$ avec $\\sum \\pi_i = 1$",

            "L\'état stable d\'un graphe probabiliste de matrice de transition $P$ est la distribution de probabilité $\\\\pi$ vérifiant :",

            "$\\pi P = \\pi$ avec la condition $\\pi_1 + \\pi_2 + \\dots = 1$",

            ['$P \\pi = 0$', '$\\pi P = 0$', '$\\pi = (1, 1, \\dots)$'],
            "Un état stable ne change plus d\'une étape à la suivante : la distribution après transition reste identique.",

            "Il faut toujours adjoindre la condition que les composantes forment une loi de probabilité (somme égale à 1).",

            "L\'état stable $\\\\pi$ est le vecteur propre à gauche associé à la valeur propre 1 : il vérifie $\\\\pi P = \\\\pi$ et la somme de ses composantes est égale à 1."

          );
        }
      }

      default:
        return this.generateDefaultLycee(chapterId, tier);
    }
  },
'''
