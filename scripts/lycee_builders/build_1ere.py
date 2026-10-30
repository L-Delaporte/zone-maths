# -*- coding: utf-8 -*-
"""
Builder pour la classe de Première Spécialité (11 chapitres : 1A1-1A6, 1G1-1G3, 1S1-1S2)
Chaque chapitre a 4 paliers procéduraux dynamiques.
"""

def get_1ere_code():
    return '''
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

            `Calculer le discriminant $\\\\Delta$ du trinôme $P(x) = ${a === 1 ? '' : (a === -1 ? '-' : a)}x^2 ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}x ${c >= 0 ? '+ ' + c : '- ' + Math.abs(c)}$.`,
            `$\\\\Delta = ${delta}$ (donc 2 racines réelles distinctes)`,
            [`$\\\\Delta = ${delta + 8}$`, `$\\\\Delta = -${delta}$`, `$\\\\Delta = 0$`],
            "Formule : $\\\\Delta = b^2 - 4ac$.",

            `Ici $a = ${a}$, $b = ${b}$ et $c = ${c}$.`,
            `$\\\\Delta = (${b})^2 - 4(${a})(${c}) = ${b * b} - (${4 * a * c}) = ${delta} > 0$. Le trinôme admet donc deux racines réelles distinctes.`
          );
        } else if (tier === 2) {
          return this.makeMcq('1A1', 2, 'Racines réelles d\\'un trinôme',
            "Calculer les racines à l\'aide des formules quadratiques",

            `Résoudre dans $\\\\mathbb{R}$ l'équation : $x^2 ${-(x1 + x2) >= 0 ? '+ ' + -(x1 + x2) : '- ' + Math.abs(-(x1 + x2))}x ${x1 * x2 >= 0 ? '+ ' + (x1 * x2) : '- ' + Math.abs(x1 * x2)} = 0$.`,
            `$S = \\\\{${x1}, ${x2}\\\\}$`,
            [`$S = \\\\{${-x1}, ${-x2}\\\\}$`, `$S = \\\\{${x1 + 1}, ${x2 - 1}\\\\}$`, `$S = \\\\emptyset$`],
            "Les racines sont données par $x = \\\\frac{-b \\\\pm \\\\sqrt{\\\\Delta}}{2a}$.",

            `Ici la somme des racines est $x_1 + x_2 = ${x1 + x2}$ et le produit est $x_1 x_2 = ${x1 * x2}$.`,
            `Le discriminant est strictement positif et les deux solutions réelles distinctes sont $x_1 = ${x1}$ et $x_2 = ${x2}$.`
          );
        } else if (tier === 3) {
          const alpha = this.randInt(-3, 3);
          const beta = this.randInt(-5, 5);
          return this.makeMcq('1A1', 3, 'Forme canonique d\\'un trinôme',
            "Identifier les coordonnées du sommet de la parabole",

            `Donner les coordonnées du sommet $S$ de la parabole d'équation $y = 2(x ${alpha >= 0 ? '- ' + alpha : '+ ' + Math.abs(alpha)})^2 + ${beta}$.`,
            `$S(${alpha} ; ${beta})$`,
            [`$S(${-alpha} ; ${beta})$`, `$S(${alpha} ; ${-beta})$`, `$S(${beta} ; ${alpha})$`],
            "La forme canonique $a(x - \\\\alpha)^2 + \\\\beta$ a pour sommet $S(\\\\alpha ; \\\\beta)$.",

            "Attention au signe devant $\\\\alpha$ dans $(x - \\\\alpha)$.",

            `L\\'expression s\\'annule en $x = ${alpha}$, l\\'ordonnée correspondante est $y = ${beta}$. Le sommet est donc $S(${alpha} ; ${beta})$.`
          );
        } else {
          const signStr = a > 0 ? 'positif' : 'négatif';
          return this.makeMcq('1A1', 4, 'Signe d\\'un trinôme du second degré',
            "Règle du signe d\'un trinôme : du signe de a à l\'extérieur des racines",

            `Quel est le signe du trinôme $P(x) = (x - ${x1})(x - ${x2})$ pour $x \\\\in ]${x1} ; ${x2}[$ ?`,
            "Strictement négatif (du signe opposé de a)",

            ['Strictement positif', 'Nul', 'Toujours positif sur R'],
            "Un trinôme à deux racines réelles est du signe opposé de $a$ entre les racines.",

            `Ici le coefficient principal est $a = 1 > 0$, donc entre $${x1}$ et $${x2}$, le trinôme est strictement négatif.`,
            `Pour $x \\\\in ]${x1} ; ${x2}[$, les facteurs $(x - ${x1})$ et $(x - ${x2})$ ont des signes contraires, leur produit est donc strictement négatif.`
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

            "Que représente géométriquement le nombre dérivé $f\'(a)$ pour la courbe représentative $\\\\mathcal{C}_f$ ?",

            "Le coefficient directeur (la pente) de la droite tangente à la courbe au point d\'abscisse $a$.",

            [
              "L\'ordonnée à l\'origine de la sécante.",

              "La longueur de la corde entre l\'origine et le point.",

              "L\'aire sous la courbe entre 0 et $a$."

            ],
            "Pense à la limite des sécantes quand le pas tend vers 0.",

            "La tangente est la position limite de la sécante.",

            "Par définition, $f\'(a) = \\\\lim_{h \\\\to 0} \\\\frac{f(a+h)-f(a)}{h}$ est la pente (coefficient directeur) de la tangente à $\\\\mathcal{C}_f$ en $(a, f(a))$."

          );
        } else if (tier === 2) {
          return this.makeMcq('1A2', 2, 'Calcul du nombre dérivé pour la fonction carré',
            "Appliquer la dérivée $(x^2)\' = 2x$",

            `Soit $f(x) = ${a}x^2$. Calculer le nombre dérivé $f\\'(${x0})$.`,
            `$f\\'(${x0}) = ${fPrime}$`,
            [`$f\\'(${x0}) = ${fX0}$`, `$f\\'(${x0}) = ${fPrime + 2}$`, `$f\\'(${x0}) = ${a * x0}$`],
            "La fonction dérivée de $f(x) = a x^2$ est $f\'(x) = 2ax$.",

            `Calcule $2 \\\\times ${a} \\\\times (${x0})$.`,
            `$f\\'(x) = 2 \\\\times ${a}x = ${2 * a}x$. Donc $f\\'(${x0}) = ${2 * a} \\\\times (${x0}) = ${fPrime}$.`
          );
        } else if (tier === 3) {
          const p = fX0 - fPrime * x0;
          return this.makeMcq('1A2', 3, 'Équation de la tangente',
            "Appliquer la formule $y = f\'(a)(x - a) + f(a)$",

            `Déterminer l'équation de la tangente à $\\\\mathcal{C}_f$ au point d'abscisse $a = ${x0}$ sachant que $f(${x0}) = ${fX0}$ et $f\\'(${x0}) = ${fPrime}$.`,
            `$y = ${fPrime}x ${p >= 0 ? '+ ' + p : '- ' + Math.abs(p)}$`,
            [`$y = ${fPrime}x + ${fX0}$`, `$y = ${fX0}x + ${fPrime}$`, `$y = ${fPrime}(x + ${x0}) - ${fX0}$`],
            "Formule fondamentale : $y = f\'(a)(x - a) + f(a)$.",

            `Développe $y = ${fPrime}(x - (${x0})) + ${fX0}$.`,
            `$y = ${fPrime}(x - (${x0})) + ${fX0} = ${fPrime}x - (${fPrime * x0}) + ${fX0} = ${fPrime}x ${p >= 0 ? '+ ' + p : '- ' + Math.abs(p)}$.`
          );
        } else {
          return this.makeMcq('1A2', 4, 'Tangente horizontale et extremum',
            "Interpréter la condition $f\'(x) = 0$",

            "La courbe d\'une fonction dérivable $f$ admet une tangente horizontale au point d\'abscisse $x_0$ si et seulement si :",

            "$f\'(x_0) = 0$",

            ['$f(x_0) = 0$', '$f\\'(x_0) = 1$', '$f(x_0) = x_0$'],
            "Une droite horizontale a un coefficient directeur nul ($m = 0$).",

            "Le coefficient directeur de la tangente est donné par le nombre dérivé.",

            "Une tangente horizontale est une droite d\'équation $y = k$ de pente nulle. On a donc $f\'(x_0) = 0$."

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
          return this.makeMcq('1A3', 1, 'Dérivation d\\'un monôme',
            "Appliquer la règle de dérivation $(x^n)\' = n x^{n-1}$",

            `Déterminer la fonction dérivée de $f(x) = ${a}x^${n}$.`,
            `$f\\'(x) = ${a * n}x^${n - 1}$`,
            [`$f\\'(x) = ${a}x^${n - 1}$`, `$f\\'(x) = ${a * n}x^${n}$`, `$f\\'(x) = \\\\frac{${a}}{${n}}x^${n + 1}$`],
            "Règle : $(c \\\\cdot x^n)\' = c \\\\cdot n x^{n-1}$.",

            `Multiplie le coefficient $${a}$ par l\\'exposant $${n}$, puis diminue l\\'exposant de 1.`,
            `$f\\'(x) = ${a} \\\\times ${n}x^{${n}-1} = ${a * n}x^${n - 1}$.`
          );
        } else if (tier === 2) {
          return this.makeMcq('1A3', 2, 'Dérivée d\\'un produit $uv$',
            "Appliquer la formule $(uv)\' = u\\'v + uv\\'$",

            `Déterminer la dérivée de $f(x) = (${a}x + ${b})e^x$.`,
            `$f\\'(x) = (${a}x + ${a + b})e^x$`,
            [`$f\\'(x) = ${a}e^x$`, `$f\\'(x) = (${a}x + ${b})e^x$`, `$f\\'(x) = (${a}x + ${b * a})e^x$`],
            "Pose $u(x) = ${a}x + ${b}$ et $v(x) = e^x$. Alors $(uv)\' = u\\'v + uv\\'$.",

            `$u\\'(x) = ${a}$ et $v\\'(x) = e^x$. Factorise par $e^x$.`,
            `$f\\'(x) = ${a} \\\\times e^x + (${a}x + ${b}) \\\\times e^x = [${a} + ${a}x + ${b}]e^x = (${a}x + ${a + b})e^x$.`
          );
        } else if (tier === 3) {
          return this.makeMcq('1A3', 3, 'Lien entre signe de la dérivée et variations',
            "Théorème fondamental de monotonie",

            "Si pour tout $x \\\\in ]1 ; 5[$, $f\'(x) > 0$, que peut-on affirmer avec certitude ?",

            "La fonction $f$ est strictement croissante sur $]1 ; 5[$.",

            [
              "La fonction $f$ est positive sur $]1 ; 5[$.",

              "La fonction $f$ est strictement décroissante sur $]1 ; 5[$.",

              "La courbe de $f$ est située au-dessus de l\'axe des abscisses."

            ],
            "Ne confonds pas le signe de $f(x)$ et le signe de sa dérivée $f\'(x)$.",

            "Une dérivée positive indique que la pente des tangentes est ascendante.",

            "D\'après le théorème de dérivation, si $f\'(x) > 0$ sur un intervalle, alors la fonction $f$ y est strictement croissante."

          );
        } else {
          return this.makeMcq('1A3', 4, 'Extremum local et changement de signe de $f\\\'$',
            "Caractérisation d\'un extremum local",

            "Une fonction $f$ admet un extremum local (maximum ou minimum) en $x_0$ si :",

            "$f\'(x_0) = 0$ et $f\'$ change de signe en $x_0$.",

            [
              "$f\'(x_0) = 0$ sans que $f\'$ change nécessairement de signe.",

              "$f(x_0) = 0$.",

              "$f\'(x)$ est toujours constante."

            ],
            "Pense à la fonction cube $x \\\\mapsto x^3$ en 0 : sa dérivée $3x^2$ s\'annule en 0 sans changer de signe, et il n\'y a pas d\'extremum !",

            "Il faut impérativement que la dérivée passe de positive à négative ou inversement.",

            "L\'annulation seule ne suffit pas : pour avoir un extremum local, $f\'$ doit s\'annuler ET changer de signe en $x_0$."

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
          return this.makeMcq('1A4', 1, 'Propriétés algébriques de l\\'exponentielle',
            "Simplifier des puissances d\'exponentielles",

            `Simplifier l'expression : $A = \\\\frac{e^{${a}x} \\\\times e^{${b}x}}{e^{2x}}$.`,
            `$A = e^{${a + b - 2}x}$`,
            [`$A = e^{${a * b - 2}x}$`, `$A = e^{${a + b + 2}x}$`, `$A = e^{${(a + b) / 2}x}$`],
            "Propriétés : $e^u \\\\times e^v = e^{u+v}$ et $\\\\frac{e^u}{e^w} = e^{u-w}$.",

            `Additionne les exposants au numérateur : $(${a} + ${b})x = ${a + b}x$, puis soustrais $2x$.`,
            `$A = \\\\frac{e^{(${a}+${b})x}}{e^{2x}} = e^{(${a + b} - 2)x} = e^{${a + b - 2}x}$.`
          );
        } else if (tier === 2) {
          const k = this.randInt(2, 7);
          return this.makeMcq('1A4', 2, 'Dérivée de $e^{kx + b}$',
            "Appliquer la formule de dérivation $(e^{u})\' = u\\' e^u$",

            `Déterminer la dérivée de la fonction $f(x) = e^{${k}x - 1}$.`,
            `$f\\'(x) = ${k}e^{${k}x - 1}$`,
            [`$f\\'(x) = e^{${k}x - 1}$`, `$f\\'(x) = ${k}x e^{${k}x - 1}$`, `$f\\'(x) = \\\\frac{1}{${k}}e^{${k}x - 1}$`],
            "Formule : $(e^{ax+b})\' = a e^{ax+b}$.",

            `Ici $u(x) = ${k}x - 1$, donc $u\\'(x) = ${k}$.`,
            `D\\'après la formule $(e^u)\\' = u\\\' e^u$, on obtient $f\\'(x) = ${k}e^{${k}x - 1}$.`
          );
        } else if (tier === 3) {
          const x0 = this.randInt(1, 5);
          return this.makeMcq('1A4', 3, 'Résolution d\\'équations exponentielles',
            "Utiliser la stricte croissance : $e^X = e^Y \\iff X = Y$",

            `Résoudre dans $\\\\mathbb{R}$ l'équation : $e^{2x - 3} = e^{${2 * x0 - 3}}$.`,
            `$S = \\\\{${x0}\\\\}$`,
            [`$S = \\\\{${x0 + 1}\\\\}$`, `$S = \\\\{0, ${x0}\\\\}$`, `$S = \\\\emptyset$`],
            "La fonction exponentielle est strictement croissante sur $\\\\mathbb{R}$ : $e^A = e^B \\\\iff A = B$.",

            `Identifie les exposants : $2x - 3 = ${2 * x0 - 3}$.`,
            `$2x - 3 = ${2 * x0 - 3} \\\\iff 2x = ${2 * x0} \\\\iff x = ${x0}$. Donc $S = \\\\{${x0}\\\\}$.`
          );
        } else {
          return this.makeMcq('1A4', 4, 'Signe de la fonction exponentielle',
            "Stricte positivité : pour tout réel $x$, $e^x > 0$",

            "Pour quel ensemble de réels $x$ l\'expression $e^x$ est-elle strictement positive ?",

            "Pour tout réel $x \\\\in \\\\mathbb{R}$",

            ['Uniquement pour $x > 0$', 'Uniquement pour $x \\\\ge 1$', 'Pour tout $x \\\\neq 0$'],
            "Rappelle-toi la courbe de l\'exponentielle : elle est toujours strictement au-dessus de l\'axe des abscisses.",

            "Même pour $x$ négatif (par exemple $x = -100$), $e^{-100} = \\\\frac{1}{e^{100}} > 0$.",

            "Pour tout réel $x \\\\in \\\\mathbb{R}$, $e^x > 0$. L\'exponentielle ne s\'annule jamais et ne devient jamais négative."

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
          return this.makeMcq('1A5', 1, 'Calcul de termes d\\'une suite explicite',
            "Calculer $u_n = f(n)$ pour une valeur donnée de $n$",

            `Soit la suite définie par $u_n = ${r}n + ${u0}$ pour tout $n \\\\in \\\\mathbb{N}$. Calculer le terme $u_3$.`,
            `$u_3 = ${u3}$`,
            [`$u_3 = ${u3 - r}$`, `$u_3 = ${u3 + 2}$`, `$u_3 = ${r * 3}$`],
            "Remplace l\'indice $n$ par 3 dans la formule explicite.",

            `$u_3 = ${r} \\\\times 3 + ${u0}$.`,
            `$u_3 = ${r} \\\\times 3 + ${u0} = ${3 * r} + ${u0} = ${u3}$.`
          );
        } else if (tier === 2) {
          const u1 = 2 * u0 + 1;
          const u2 = 2 * u1 + 1;
          return this.makeMcq('1A5', 2, 'Suite définie par récurrence',
            "Calculer pas à pas les termes d\'une suite récurrente",

            `Soit la suite définie par $u_0 = ${u0}$ et pour tout $n \\\\in \\\\mathbb{N}$, $u_{n+1} = 2u_n + 1$. Calculer $u_2$.`,
            `$u_2 = ${u2}$`,
            [`$u_2 = ${u1}$`, `$u_2 = ${u2 + 2}$`, `$u_2 = ${4 * u0 + 1}$`],
            "Calcule d\'abord $u_1 = 2u_0 + 1$, puis utilise $u_1$ pour calculer $u_2 = 2u_1 + 1$.",

            `$u_1 = 2(${u0}) + 1 = ${u1}$.`,
            `$u_1 = 2(${u0}) + 1 = ${u1}$, puis $u_2 = 2(${u1}) + 1 = ${2 * u1} + 1 = ${u2}$.`
          );
        } else if (tier === 3) {
          return this.makeMcq('1A5', 3, 'Sens de variation par différence',
            "Étudier le signe de $u_{n+1} - u_n$",

            "Pour une suite $(u_n)$, on établit que pour tout $n \\\\in \\\\mathbb{N}$, $u_{n+1} - u_n = \\\\frac{3}{n + 1}$. Que peut-on en déduire ?",

            "La suite $(u_n)$ est strictement croissante.",

            [
              "La suite $(u_n)$ est strictement décroissante.",

              "La suite $(u_n)$ est constante.",

              "On ne peut rien conclure sans connaître $u_0$."

            ],
            "Observe le signe du quotient $\\\\frac{3}{n + 1}$ pour tout entier naturel $n \\\\ge 0$.",

            "Comme $n \\\\ge 0$, $n + 1 > 0$ donc le quotient est strictement positif.",

            "Puisque pour tout $n$, $u_{n+1} - u_n > 0$, chaque terme est strictement supérieur au précédent : la suite est strictement croissante."

          );
        } else {
          return this.makeMcq('1A5', 4, 'Suite majorée et bornée',
            "Comprendre les définitions de majorant et minorant",

            "On dit qu\'une suite $(u_n)$ est majorée s\'il existe un réel $M$ tel que :",

            "Pour tout $n \\\\in \\\\mathbb{N}$, $u_n \\\\le M$.",

            [
              "Pour au moins un $n \\\\in \\\\mathbb{N}$, $u_n \\\\le M$.",

              "Pour tout $n \\\\in \\\\mathbb{N}$, $u_n \\\\ge M$.",

              "$\\\\lim_{n \\\\to +\\\\infty} u_n = M$."

            ],
            "Un majorant est une barrière supérieure que la suite ne dépasse jamais.",

            "La propriété doit être vérifiée pour TOUS les indices $n$.",

            "Par définition, $(u_n)$ est majorée par $M$ si aucun terme de la suite ne dépasse $M$ : $\\\\forall n \\\\in \\\\mathbb{N}, u_n \\\\le M$."

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
            "Formule fondamentale : $u_n = u_0 + n \\\\times r$.",

            `Remplace $n$ par 10 : $u_{10} = ${u0} + 10 \\\\times ${r}$.`,
            `$u_{10} = ${u0} + 10 \\\\times ${r} = ${u0} + ${10 * r} = ${u10}$.`
          );
        } else if (tier === 2) {
          const n = 4;
          const u4 = u0 * Math.pow(q, n);
          return this.makeMcq('1A6', 2, 'Formule explicite suite géométrique',
            "Appliquer la formule $u_n = u_0 \\times q^n$",

            `Soit $(v_n)$ une suite géométrique de premier terme $v_0 = ${u0}$ et de raison $q = ${q}$. Calculer $v_4$.`,
            `$v_4 = ${u4}$`,
            [`$v_4 = ${u0 * Math.pow(q, 3)}$`, `$v_4 = ${u0 + 4 * q}$`, `$v_4 = ${u4 * 2}$`],
            "Formule fondamentale : $v_n = v_0 \\\\times q^n$.",

            `Calcule d\\'abord $q^4 = ${q}^4 = ${Math.pow(q, 4)}$, puis multiplie par $v_0 = ${u0}$.`,
            `$v_4 = ${u0} \\\\times ${q}^4 = ${u0} \\\\times ${Math.pow(q, 4)} = ${u4}$.`
          );
        } else if (tier === 3) {
          const n = 10;
          const S = (n * (n + 1)) / 2;
          return this.makeMcq('1A6', 3, 'Somme des premiers entiers naturels',
            "Appliquer la formule de Gauss $1 + 2 + ... + n = \\frac{n(n+1)}{2}$",

            `Calculer la somme : $S = 1 + 2 + 3 + \\\\dots + ${n}$.`,
            `$S = ${S}$`,
            [`$S = ${S - 5}$`, `$S = ${n * n}$`, `$S = ${S + 10}$`],
            "Formule historique de Gauss : $\\\\sum_{k=1}^n k = \\\\frac{n(n+1)}{2}$.",

            `Remplace $n$ par ${n} : $\\\\frac{${n} \\\\times (${n} + 1)}{2}$.`,
            `$S = \\\\frac{${n} \\\\times ${n + 1}}{2} = \\\\frac{${n * (n + 1)}}{2} = ${S}$.`
          );
        } else {
          return this.makeMcq('1A6', 4, 'Somme des termes d\\'une suite géométrique',
            "Appliquer la formule $1 + q + q^2 + ... + q^n = \\frac{1 - q^{n+1}}{1 - q}$",

            "Quelle est l\'expression simplifiée de la somme $S = 1 + q + q^2 + \\\\dots + q^n$ pour $q \\\\neq 1$ ?",

            "$\\frac{1 - q^{n+1}}{1 - q}$",

            ['$\\frac{1 - q^n}{1 - q}$', '$\\frac{q^{n+1} - 1}{q}$', '$\\frac{n(q+1)}{2}$'],
            "Pense au nombre total de termes : de l\'exposant 0 à l\'exposant $n$, il y a $n+1$ termes.",

            "L\'exposant au numérateur est le nombre de termes, soit $n+1$.",

            "D\'après la formule du cours, la somme des $n+1$ premiers termes d\'une suite géométrique de raison $q \\\\neq 1$ est $\\\\frac{1 - q^{n+1}}{1 - q}$."

          );
        }
      }

      // ---------------------------------------------------------------------
      // 1G1 : Trigonométrie, cercle trigonométrique et fonctions sinus et cosinus
      // ---------------------------------------------------------------------
      case '1G1': {
        if (tier === 1) {
          const angles = [
            { angle: '\\\\frac{\\\\pi}{3}', cos: '\\\\frac{1}{2}', sin: '\\\\frac{\\\\sqrt{3}}{2}' },
            { angle: '\\\\frac{\\\\pi}{6}', cos: '\\\\frac{\\\\sqrt{3}}{2}', sin: '\\\\frac{1}{2}' },
            { angle: '\\\\frac{\\\\pi}{4}', cos: '\\\\frac{\\\\sqrt{2}}{2}', sin: '\\\\frac{\\\\sqrt{2}}{2}' },
            { angle: '\\\\pi', cos: '-1', sin: '0' }
          ];
          const pick = this.randChoice(angles);
          return this.makeMcq('1G1', 1, 'Valeurs remarquables du cercle trigonométrique',
            "Connaître les cosinus et sinus des angles fondamentaux",

            `Quelle est la valeur exacte de $\\\\cos\\\\left(${pick.angle}\\\\right)$ ?`,
            `$${pick.cos}$`,
            [`$${pick.sin}$`, `$0$`, `$-\\\\frac{1}{2}$`],
            "Rappelle-toi les valeurs sur le premier quadrant : $0, \\\\pi/6, \\\\pi/4, \\\\pi/3, \\\\pi/2$.",

            `Le cosinus correspond à l\\'abscisse du point sur le cercle trigonométrique.`,
            `Sur le cercle trigonométrique, $\\\\cos\\\\left(${pick.angle}\\\\right) = ${pick.cos}$.`
          );
        } else if (tier === 2) {
          return this.makeMcq('1G1', 2, 'Relation fondamentale trigonométrique',
            "Appliquer $\\\\cos^2(x) + \\\\sin^2(x) = 1$",

            "Sachant que $x \\\\in [0 ; \\\\pi]$ et que $\\\\sin(x) = \\\\frac{3}{5}$, quelle est la valeur de $\\\\cos^2(x)$ ?",

            "$\\cos^2(x) = \\frac{16}{25}$",

            ['$\\cos^2(x) = \\frac{2}{5}$', '$\\cos^2(x) = \\frac{9}{25}$', '$\\cos^2(x) = 1$'],
            "Formule : $\\\\cos^2(x) + \\\\sin^2(x) = 1 \\\\iff \\\\cos^2(x) = 1 - \\\\sin^2(x)$.",

            `Calcule $\\\\sin^2(x) = \\\\left(\\\\frac{3}{5}\\\\right)^2 = \\\\frac{9}{25}$.`,
            `$\\\\cos^2(x) = 1 - \\\\left(\\\\frac{3}{5}\\\\right)^2 = 1 - \\\\frac{9}{25} = \\\\frac{16}{25}$.`
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
            "La fonction cosinus est paire (symétrie par rapport à l\'axe des abscisses), la fonction sinus est impaire.",

            "L\'opposé $-x$ est le symétrique de $x$ par rapport à l\'axe horizontal des cosinus.",

            "Par symétrie axiale par rapport à l\'axe des abscisses, $\\\\cos(-x) = \\\\cos(x)$ et $\\\\sin(-x) = -\\\\sin(x)$."

          );
        } else {
          return this.makeMcq('1G1', 4, 'Résolution d\\'équations trigonométriques',
            "Résoudre dans $[-\\\\pi ; \\\\pi]$ l\'équation $\\\\cos(x) = \\\\cos(a)$",

            "Résoudre dans l\'intervalle $[-\\\\pi ; \\\\pi]$ l\'équation : $\\\\cos(x) = \\\\frac{1}{2}$.",

            "$S = \\left\\{-\\frac{\\pi}{3}, \\frac{\\pi}{3}\\right\\}$",

            [
              "$S = \\left\\{\\frac{\\pi}{3}\\right\\}$",

              "$S = \\left\\{-\\frac{\\pi}{6}, \\frac{\\pi}{6}\\right\\}$",

              "$S = \\left\\{\\frac{\\pi}{3}, \\frac{2\\pi}{3}\\right\\}$"

            ],
            "L\'équation $\\\\cos(x) = \\\\cos(\\\\alpha)$ admet deux solutions opposées sur $[-\\\\pi ; \\\\pi]$ : $\\\\alpha$ et $-\\\\alpha$.",

            `Comme $\\\\cos(\\\\pi/3) = 1/2$, les deux solutions sont $\\\\pi/3$ et $-\\\\pi/3$.`,
            `Puisque la fonction cosinus est paire, $\\\\cos(-\\\\pi/3) = \\\\cos(\\\\pi/3) = 1/2$. Les deux solutions dans $[-\\\\pi ; \\\\pi]$ sont $-\\\\frac{\\\\pi}{3}$ et $\\\\frac{\\\\pi}{3}$.`
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
            "Calculer $\\\\vec{u} \\\\cdot \\\\vec{v} = xx\' + yy\'$ dans une base orthonormée",

            `Dans un repère orthonormé, on donne $\\\\vec{u}(${x1} ; ${y1})$ et $\\\\vec{v}(${x2} ; ${y2})$. Calculer $\\\\vec{u} \\\\cdot \\\\vec{v}$.`,
            `$\\\\vec{u} \\\\cdot \\\\vec{v} = ${dot}$`,
            [`$\\\\vec{u} \\\\cdot \\\\vec{v} = ${dot + 3}$`, `$\\\\vec{u} \\\\cdot \\\\vec{v} = ${x1 * y2 - y1 * x2}$`, `$\\\\vec{u} \\\\cdot \\\\vec{v} = ${-dot}$`],
            "Formule analytique : $\\\\vec{u} \\\\cdot \\\\vec{v} = x x\' + y y\'$.",

            `Calcule $(${x1}) \\\\times (${x2}) + (${y1}) \\\\times (${y2})$.`,
            `$\\\\vec{u} \\\\cdot \\\\vec{v} = (${x1})(${x2}) + (${y1})(${y2}) = ${x1 * x2} + (${y1 * y2}) = ${dot}$.`
          );
        } else if (tier === 2) {
          const uNorm = this.randChoice([3, 4, 5]);
          const vNorm = this.randChoice([2, 6, 8]);
          const expectedDot = (uNorm * vNorm) / 2;
          return this.makeMcq('1G2', 2, 'Formule avec cosinus de l\\'angle',
            "Appliquer $\\\\vec{u} \\\\cdot \\\\vec{v} = ||\\\\vec{u}|| \\\\times ||\\\\vec{v}|| \\\\times \\\\cos(\\\\theta)$",

            `Soient deux vecteurs de normes $\\|\\\\vec{u}\\| = ${uNorm}$ et $\\|\\\\vec{v}\\| = ${vNorm}$ formant un angle $\\\\theta = \\\\frac{\\\\pi}{3}$. Calculer $\\\\vec{u} \\\\cdot \\\\vec{v}$.`,
            `$\\\\vec{u} \\\\cdot \\\\vec{v} = ${expectedDot}$`,
            [`$\\\\vec{u} \\\\cdot \\\\vec{v} = ${uNorm * vNorm}$`, `$\\\\vec{u} \\\\cdot \\\\vec{v} = ${expectedDot * 2}$`, `$\\\\vec{u} \\\\cdot \\\\vec{v} = ${uNorm + vNorm}$`],
            "Formule : $\\\\vec{u} \\\\cdot \\\\vec{v} = \\|\\\\vec{u}\\| \\\\times \\|\\\\vec{v}\\| \\\\times \\\\cos(\\\\theta)$.",

            `Rappelle-toi que $\\\\cos(\\\\pi/3) = 1/2$.`,
            `$\\\\vec{u} \\\\cdot \\\\vec{v} = ${uNorm} \\\\times ${vNorm} \\\\times \\\\cos\\\\left(\\\\frac{\\\\pi}{3}\\\\right) = ${uNorm * vNorm} \\\\times \\\\frac{1}{2} = ${expectedDot}$.`
          );
        } else if (tier === 3) {
          return this.makeMcq('1G2', 3, 'Critère d\\'orthogonalité',
            "Caractériser l\'orthogonalité par la nullité du produit scalaire",

            "Deux vecteurs non nuls $\\\\vec{u}$ et $\\\\vec{v}$ sont orthogonaux si et seulement si :",

            "$\\vec{u} \\cdot \\vec{v} = 0$",

            ['$\\det(\\vec{u}, \\vec{v}) = 0$', '$\\|\\vec{u}\\| = \\|\\vec{v}\\|$', '$\\vec{u} \\cdot \\vec{v} = 1$'],
            "Pense à l\'angle droit : $\\\\theta = \\\\pi/2$ et $\\\\cos(\\\\pi/2) = 0$.",

            "Deux vecteurs perpendiculaires ont une projection orthogonale nulle.",

            "L\'angle entre les vecteurs est de 90° : comme $\\\\cos(\\\\pi/2) = 0$, la formule avec le cosinus donne immédiatement $\\\\vec{u} \\\\cdot \\\\vec{v} = 0$."

          );
        } else {
          return this.makeMcq('1G2', 4, 'Norme au carré et identités scalaires',
            "Appliquer l\'identité $\\|\\\\vec{u} + \\\\vec{v}\\|^2 = \\|\\\\vec{u}\\|^2 + 2\\\\vec{u}\\\\cdot\\\\vec{v} + \\|\\\\vec{v}\\|^2$",

            "Sachant que $\\|\\\\vec{u}\\| = 3$, $\\|\\\\vec{v}\\| = 4$ et $\\\\vec{u} \\\\cdot \\\\vec{v} = 2$, calculer $\\|\\\\vec{u} + \\\\vec{v}\\|^2$.",

            "29",

            ['25', '27', '49'],
            "Identité remarquable vectorielle : $\\|\\\\vec{u} + \\\\vec{v}\\|^2 = \\|\\\\vec{u}\\|^2 + 2(\\\\vec{u} \\\\cdot \\\\vec{v}) + \\|\\\\vec{v}\\|^2$.",

            `$\\|\\\\vec{u}\\|^2 = 3^2 = 9$ et $\\|\\\\vec{v}\\|^2 = 4^2 = 16$.`,
            `$\\|\\\\vec{u} + \\\\vec{v}\\|^2 = 9 + 2(2) + 16 = 9 + 4 + 16 = 29$.`
          );
        }
      }

      // ---------------------------------------------------------------------
      // 1G3 : Applications du produit scalaire, formule d'Al-Kashi et droites
      // ---------------------------------------------------------------------
      case '1G3': {
        if (tier === 1) {
          return this.makeMcq('1G3', 1, 'Théorème d\\'Al-Kashi (loi des cosinus)',
            "Connaître la formule d\'Al-Kashi $a^2 = b^2 + c^2 - 2bc \\cos(A)$",

            "Dans un triangle quelconque $ABC$, quelle relation relie la longueur $BC = a$ aux deux autres côtés $b, c$ et à l\'angle $\\\\hat{A}$ ?",

            "$a^2 = b^2 + c^2 - 2bc \\cos(\\hat{A})$",

            [
              "$a^2 = b^2 + c^2 + 2bc \\cos(\\hat{A})$",

              "$a^2 = b^2 + c^2 - 2bc \\sin(\\hat{A})$",

              "$a = b + c - 2\\cos(\\hat{A})$"

            ],
            "C\'est la généralisation du théorème de Pythagore : si $\\\\hat{A} = 90^\\\\circ$, $\\\\cos(90^\\\\circ) = 0$ et on retrouve $a^2 = b^2 + c^2$.",

            "Le terme correctif de non-orthogonalité est $-2bc \\\\cos(\\\\hat{A})$.",

            "Le théorème d\'Al-Kashi stipule que $BC^2 = AB^2 + AC^2 - 2 \\\\times AB \\\\times AC \\\\times \\\\cos(\\\\hat{A})$."

          );
        } else if (tier === 2) {
          const a = this.randInt(2, 5);
          const b = this.randChoice([-4, -3, 2, 3]);
          return this.makeMcq('1G3', 2, 'Vecteur normal à une droite',
            "Associer $\\\\vec{n}(a ; b)$ à l\'équation cartésienne $ax + by + c = 0$",

            `Donner les coordonnées d'un vecteur normal $\\\\vec{n}$ à la droite d'équation $${a}x ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}y + 7 = 0$.`,
            `$\\\\vec{n}(${a} ; ${b})$`,
            [`$\\\\vec{n}(${-b} ; ${a})$`, `$\\\\vec{n}(${b} ; ${a})$`, `$\\\\vec{n}(${a} ; ${-b})$`],
            "Un vecteur normal $\\\\vec{n}(a ; b)$ a pour coordonnées directes les coefficients de $x$ et $y$ dans l\'équation cartésienne.",

            `Ne confonds pas avec le vecteur directeur $\\\\vec{u}(-b ; a)$ !`,
            `Dans $ax + by + c = 0$, les coefficients $a$ et $b$ définissent un vecteur normal orthogonal à la droite : $\\\\vec{n}(a ; b) = \\\\vec{n}(${a} ; ${b})$.`
          );
        } else if (tier === 3) {
          return this.makeMcq('1G3', 3, 'Équation cartésienne de cercle de diamètre [AB]',
            "Caractérisation scalaire $\\\\vec{MA} \\\\cdot \\\\vec{MB} = 0$",

            "L\'ensemble des points $M(x ; y)$ du plan vérifiant la condition $\\\\vec{MA} \\\\cdot \\\\vec{MB} = 0$ est :",

            "Le cercle de diamètre $[AB]$",

            ['La droite médiatrice de $[AB]$', 'Le segment $[AB]$', 'Le triangle rectangle $MAB$'],
            "Pense au théorème du collège : un triangle inscrit dans un demi-cercle dont un côté est le diamètre est rectangle.",

            "L\'angle $\\\\widehat{AMB}$ est droit, ce qui traduit l\'orthogonalité de $\\\\vec{MA}$ et $\\\\vec{MB}$.",

            "La condition $\\\\vec{MA} \\\\cdot \\\\vec{MB} = 0$ signifie que les vecteurs sont orthogonaux, c\'est-à-dire que le triangle $MAB$ est rectangle en $M$. L\'ensemble des points est le cercle de diamètre $[AB]$."

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
            "On démontre cette égalité en décomposant $\\\\vec{AB} = \\\\vec{AI} + \\\\vec{IB}$ et $\\\\vec{AC} = \\\\vec{AI} + \\\\vec{IC}$ avec $\\\\vec{IC} = -\\\\vec{IB}$.",

            "Les doubles produits s\'annulent car $I$ est le milieu.",

            "C\'est le théorème de la médiane : $AB^2 + AC^2 = 2AI^2 + \\\\frac{BC^2}{2}$."

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

            "Sachant que $P(A) = 0{,}4$ et $P(A \\\\cap B) = 0{,}12$, calculer la probabilité conditionnelle $P_A(B)$.",

            "$P_A(B) = 0{,}30$",

            ['$P_A(B) = 0{,}48$', '$P_A(B) = 0{,}048$', '$P_A(B) = 0{,}52$'],
            "Formule : $P_A(B) = \\\\frac{P(A \\\\cap B)}{P(A)}$.",

            `Effectue la division : $\\\\frac{0{,}12}{0{,}4}$.`,
            `$P_A(B) = \\\\frac{P(A \\\\cap B)}{P(A)} = \\\\frac{0{,}12}{0{,}40} = \\\\frac{12}{40} = 0{,}30$.`
          );
        } else if (tier === 2) {
          return this.makeMcq('1S1', 2, 'Formule des probabilités totales',
            "Appliquer $P(B) = P(A \\cap B) + P(\\bar{A} \\cap B)$",

            "Une partition de l\'univers est formée par $A$ et $\\\\bar{A}$ avec $P(A) = 0{,}3$. De plus $P_A(B) = 0{,}8$ et $P_{\\\\bar{A}}(B) = 0{,}2$. Calculer $P(B)$.",

            "$P(B) = 0{,}38$",

            ['$P(B) = 0{,}50$', '$P(B) = 0{,}24$', '$P(B) = 0{,}70$'],
            "Formule des probabilités totales : $P(B) = P(A) \\\\times P_A(B) + P(\\\\bar{A}) \\\\times P_{\\\\bar{A}}(B)$.",

            `$P(\\\\bar{A}) = 1 - 0{,}3 = 0{,}7$. Alors $0{,}3 \\\\times 0{,}8 + 0{,}7 \\\\times 0{,}2$.`,
            `$P(B) = (0{,}3 \\\\times 0{,}8) + (0{,}7 \\\\times 0{,}2) = 0{,}24 + 0{,}14 = 0{,}38$.`
          );
        } else if (tier === 3) {
          return this.makeMcq('1S1', 3, 'Test d\\'indépendance de deux événements',
            "Vérifier si $P(A \\cap B) = P(A) \\times P(B)$",

            "On donne $P(A) = 0{,}5$, $P(B) = 0{,}6$ et $P(A \\\\cap B) = 0{,}3$. Les événements $A$ et $B$ sont-ils indépendants ?",

            "Oui, car $P(A) \\times P(B) = 0{,}5 \\times 0{,}6 = 0{,}30 = P(A \\cap B)$",

            [
              "Non, car $P(A \\cap B) \\neq 0$",

              "Non, car leurs probabilités ne sont pas égales",

              "On ne peut pas savoir sans connaître $P(A \\cup B)$"

            ],
            "Deux événements $A$ et $B$ sont indépendants si et seulement si $P(A \\\\cap B) = P(A) \\\\times P(B)$.",

            `Calcule le produit $P(A) \\\\times P(B)$ et compare-le à $P(A \\\\cap B)$.`,
            `On a $P(A) \\\\times P(B) = 0{,}5 \\\\times 0{,}6 = 0{,}30$. Comme cela est exactement égal à $P(A \\\\cap B)$, les événements $A$ et $B$ sont indépendants.`
          );
        } else {
          return this.makeMcq('1S1', 4, 'Formule de Bayes (inversion de conditionnement)',
            "Calculer $P_B(A) = \\frac{P(A \\cap B)}{P(B)}$",

            "Avec $P(A \\\\cap B) = 0{,}24$ et $P(B) = 0{,}38$, quelle est la valeur de $P_B(A)$ arrondie au centième ?",

            "$P_B(A) \\approx 0{,}63$",

            ['$P_B(A) \\approx 0{,}24$', '$P_B(A) \\approx 0{,}09$', '$P_B(A) \\approx 0{,}80$'],
            "Formule : $P_B(A) = \\\\frac{P(A \\\\cap B)}{P(B)}$.",

            `Divise $0{,}24$ par $0{,}38$.`,
            `$P_B(A) = \\\\frac{0{,}24}{0{,}38} = \\\\frac{24}{38} \\\\approx 0{,}6315... \\\\approx 0{,}63$.`
          );
        }
      }

      // ---------------------------------------------------------------------
      // 1S2 : Variables aléatoires réelles, espérance, variance et écart-type
      // ---------------------------------------------------------------------
      case '1S2': {
        if (tier === 1) {
          return this.makeMcq('1S2', 1, 'Loi de probabilité d\\'une variable aléatoire',
            "Vérifier que la somme des probabilités est égale à 1",

            "Une variable aléatoire $X$ prend les valeurs 1, 2, 3 avec $P(X=1) = 0{,}2$ et $P(X=2) = 0{,}5$. Quelle est la valeur de $P(X=3)$ ?",

            "$P(X=3) = 0{,}3$",

            ['$P(X=3) = 0{,}7$', '$P(X=3) = 0{,}5$', '$P(X=3) = 0$'],
            "La somme de toutes les probabilités d\'une loi discrète est égale à 1 : $\\\\sum P(X=x_i) = 1$.",

            `$P(X=3) = 1 - (0{,}2 + 0{,}5)$.`,
            `$P(X=3) = 1 - (0{,}2 + 0{,}5) = 1 - 0{,}7 = 0{,}3$.`
          );
        } else if (tier === 2) {
          const g = this.randInt(5, 10);
          const p = this.randInt(2, 4);
          const eX = 0.5 * g - 0.5 * p;
          return this.makeMcq('1S2', 2, 'Calcul de l\\'espérance mathématique',
            "Appliquer la formule $E(X) = \\sum x_i P(X = x_i)$",

            `Une variable aléatoire $X$ vaut $+${g}$ avec une probabilité de $0{,}5$ et $-${p}$ avec une probabilité de $0{,}5$. Quelle est son espérance $E(X)$ ?`,
            `$E(X) = ${eX}$`,
            [`$E(X) = ${g - p}$`, `$E(X) = 0$`, `$E(X) = ${eX + 2}$`],
            "Formule : $E(X) = \\\\sum x_i P(X = x_i)$.",

            `Calcule $(${g}) \\\\times 0{,}5 + (-${p}) \\\\times 0{,}5$.`,
            `$E(X) = ${g} \\\\times 0{,}5 + (-${p}) \\\\times 0{,}5 = ${0.5 * g} - ${0.5 * p} = ${eX}$.`
          );
        } else if (tier === 3) {
          return this.makeMcq('1S2', 3, 'Notion de jeu équitable',
            "Interpréter $E(X) = 0$",

            "Un jeu de hasard modélisé par une variable de gain algébrique $X$ est dit équitable si et seulement si :",

            "Son espérance est nulle : $E(X) = 0$",

            ['Sa variance est nulle : $V(X) = 0$', 'La probabilité de gagner est de 0,5', '$P(X > 0) = P(X < 0)$'],
            "Un jeu est équitable si, en moyenne sur un grand nombre de parties, le gain moyen du joueur est nul.",

            "L\'espérance mathématique traduit le gain moyen théorique à long terme.",

            "Par définition économique et probabiliste, un jeu est équitable si le gain moyen espéré par partie est nul : $E(X) = 0$."

          );
        } else {
          return this.makeMcq('1S2', 4, 'Variance et écart-type',
            "Connaître la relation entre écart-type et variance : $\\sigma(X) = \\sqrt{V(X)}$",

            "Sachant que la variance d\'une variable aléatoire vaut $V(X) = 16$, quel est son écart-type $\\\\sigma(X)$ ?",

            "$\\sigma(X) = 4$",

            ['$\\sigma(X) = 256$', '$\\sigma(X) = 8$', '$\\sigma(X) = 16$'],
            "L\'écart-type est la racine carrée de la variance : $\\\\sigma(X) = \\\\sqrt{V(X)}$.",

            `Calcule $\\\\sqrt{16}$.`,
            `$\\\\sigma(X) = \\\\sqrt{V(X)} = \\\\sqrt{16} = 4$. Il s\\'exprime dans la même unité que la variable $X$.`
          );
        }
      }

      default:
        return this.generateDefaultLycee(chapterId, tier);
    }
  },
'''
