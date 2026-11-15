/**
 * Données pédagogiques officielles de la classe de 4ème (Cycle 4, 2ème année)
 * Conforme aux programmes officiels de l'Éducation nationale
 * Enrichi avec les fiches de cours, méthodes, pièges et évaluations réelles d'archives
 */

window.MATHS_COURSES_4E = {
  "4N1": {
    "title": "4N1 : Opérations sur les nombres relatifs (règle des signes)",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Multiplier deux nombres relatifs en appliquant rigoureusement la règle des signes.",
      "Diviser deux nombres relatifs.",
      "Déterminer le signe d'un produit de plusieurs facteurs selon la parité du nombre de facteurs négatifs.",
      "Distinguer l'opposé d'un nombre de son inverse.",
      "Effectuer des enchaînements d'opérations avec relatifs en respectant les priorités opératoires."
    ],
    "keyPoints": [
      {
        "title": "1. Règle des signes pour la multiplication et la division",
        "content": "• Le produit (ou quotient) de deux nombres de **même signe** est **toujours POSITIF (+)** :\n$$(+4) \\times (+5) = +20 \\quad \\text{et} \\quad (-4) \\times (-5) = +20$$\n$$\\frac{-18}{-3} = +6$$\n• Le produit (ou quotient) de deux nombres de **signes différents** est **toujours NÉGATIF (-)** :\n$$(+6) \\times (-3) = -18 \\quad \\text{et} \\quad \\frac{-35}{+7} = -5$$\n**Justification à partir de l'opposé.** On sait que $(-4) \\times 5 = -20$. Avec la distributivité, admise pour les nombres relatifs :\n$$(-4) \\times (-5) + (-4) \\times 5 = (-4) \\times [(-5) + 5] = (-4) \\times 0 = 0$$\nLa somme de $(-4) \\times (-5)$ et de $-20$ vaut $0$ : ces deux nombres sont **opposés**, donc $(-4) \\times (-5) = +20$.\n**On admet** que ces règles sont vraies pour tous les nombres relatifs, entiers ou décimaux : par exemple, $(-0{,}5) \\times (-4) = +2$.\n**Pour un quotient**, on revient à un produit : $\\frac{-18}{-3}$ est le nombre qui, multiplié par $-3$, donne $-18$ ; c'est $+6$."
      },
      {
        "title": "2. Produit de plusieurs facteurs relatifs",
        "content": "Dans un produit comportant plusieurs facteurs non nuls :\n• Si le nombre de facteurs négatifs est **PAIR**, alors le produit est **POSITIF**.\n• Si le nombre de facteurs négatifs est **IMPAIR**, alors le produit est **NÉGATIF**.\n*Exemples* :\n- $(-2) \\times (-3) \\times (-5) = -30$ (3 facteurs négatifs, impair $\\implies -$).\n- $(-1) \\times (-2) \\times (-3) \\times (-4) = +24$ (4 facteurs négatifs, pair $\\implies +$).\n- Tout produit contenant le facteur $0$ est immédiatement égal à $0$ !"
      },
      {
        "title": "3. Opposé d'un nombre vs Inverse d'un nombre",
        "content": "Ne jamais confondre ces deux notions fondamentales !\n• **Opposé** : Deux nombres sont opposés si leur **somme est égale à 0** ($a + (-a) = 0$).\n  - L'opposé de $5$ est $-5$ ; l'opposé de $-\\frac{2}{3}$ est $+\\frac{2}{3}$.\n• **Inverse** : Deux nombres sont inverses l'un de l'autre si leur **produit est égal à 1** ($a \\times \\frac{1}{a} = 1$, pour $a \\neq 0$).\n  - L'inverse de $a$ est $\\frac{1}{a}$ ; l'inverse de $\\frac{a}{b}$ est $\\frac{b}{a}$.\n  - L'inverse conserve le signe : l'inverse de $-\\frac{3}{7}$ est $-\\frac{7}{3}$.\n  - **0 est le seul nombre qui ne possède aucun inverse** !"
      },
      {
        "title": "4. Carré d'un relatif et priorités opératoires",
        "content": "Attention aux parenthèses lors du calcul d'un carré :\n• $(-5)^2 = (-5) \\times (-5) = +25$ : le carré porte sur $(-5)$, le résultat est positif.\n• $-5^2 = -(5 \\times 5) = -25$ : le carré ne porte que sur 5, le signe $-$ reste devant.\n• **Ordre des calculs** : d'abord les parenthèses, puis les puissances, puis les multiplications et divisions (de gauche à droite), et enfin les additions et soustractions (de gauche à droite).\n• **Rappel (5e)** : soustraire un nombre, c'est ajouter son opposé : $3 - (-8) = 3 + 8 = 11$."
      },
      {
        "title": "À retenir",
        "content": "• Produit ou quotient de deux nombres de **même signe** : positif ; de **signes contraires** : négatif.\n• Produit de plusieurs facteurs : positif si le nombre de facteurs négatifs est **pair**, négatif s'il est **impair**.\n• $(-a)^2 = a^2$ mais $-a^2 = -(a^2)$.\n• Opposé : la somme vaut $0$. Inverse : le produit vaut $1$ ($0$ n'a pas d'inverse).\n• On ne divise jamais par $0$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer une expression combinée avec relatifs",
        "example": "Calculer $A = -7 + 4 \\times (-5) - \\frac{-24}{-6} + (-3)^2$.",
        "steps": [
          "**Étape 1 (Priorités - Carré et parenthèses)** : $(-3)^2 = +9$.",
          "**Étape 2 (Multiplications et divisions)** : $4 \\times (-5) = -20$ et $\\frac{-24}{-6} = +4$.",
          "**Étape 3 (Réécriture)** : $A = -7 + (-20) - (+4) + 9$.",
          "**Étape 4 (Règle des gains et pertes)** : $A = -7 - 20 - 4 + 9 = -31 + 9 = -22$."
        ]
      },
      {
        "title": "Méthode : Prévoir le signe puis calculer un quotient de produits",
        "example": "Calculer $B = \\dfrac{(-6) \\times 5 \\times (-2)}{(-4) \\times 3}$.",
        "steps": [
          "**Étape 1 (Signe)** : on compte les facteurs négatifs, au numérateur et au dénominateur : $-6$, $-2$ et $-4$, soit **3** facteurs négatifs (nombre impair). Le résultat est donc **négatif**.",
          "**Étape 2 (Distance à zéro)** : on calcule sans les signes : $\\dfrac{6 \\times 5 \\times 2}{4 \\times 3} = \\dfrac{60}{12} = 5$.",
          "**Étape 3 (Conclusion)** : $B = -5$.",
          "**Vérification** : $(-6) \\times 5 \\times (-2) = +60$ et $(-4) \\times 3 = -12$, donc $B = \\dfrac{60}{-12} = -5$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas confondre addition et multiplication : $(-4) + (-3) = -7$ (perte de 4 puis perte de 3), alors que $(-4) \\times (-3) = +12$ !",
      "⚠️ Ne pas confondre $(-6)^2 = +36$ et $-6^2 = -36$. Sans parenthèse, la puissance s'applique avant le signe moins.",
      "⚠️ Ne pas confondre opposé et inverse : l'inverse de $-4$ est $-\\frac{1}{4} = -0{,}25$ et NON $+4$.",
      "⚠️ La règle des signes du produit ne s'applique pas à l'addition : $(-3) + (-5) = -8$ (et non $+8$)."
    ],
    "flashcards": [
      {
        "q": "Quel est le résultat de $(-7) \\times (-8)$ ?",
        "a": "$+56$ (le produit de deux nombres de même signe est toujours positif)."
      },
      {
        "q": "Quel est le signe de $(-2) \\times (-3) \\times (-5) \\times 4 \\times (-7)$ ?",
        "a": "Positif, car il y a 4 facteurs négatifs et 4 est un nombre pair."
      },
      {
        "q": "Quel est l'inverse de $-\\frac{5}{9}$ ?",
        "a": "$-\\frac{9}{5}$ (l'inverse échange numérateur et dénominateur en conservant le signe négatif)."
      },
      {
        "q": "Combien vaut $-4^2$ ?",
        "a": "$-16$, car la puissance 2 ne porte que sur le 4 : $-(4 \\times 4) = -16$ (alors que $(-4)^2 = +16$)."
      },
      {
        "q": "Quel est le seul nombre qui n'a pas d'inverse ?",
        "a": "C'est **0**, car la division par 0 est impossible et aucun nombre multiplié par 0 ne peut donner 1."
      },
      {
        "q": "Calculer $\\dfrac{-48}{-6}$.",
        "a": "$+8$ (quotient de deux nombres de même signe)."
      },
      {
        "q": "Calculer $3 - 4 \\times (-2)$.",
        "a": "$3 - (-8) = 3 + 8 = 11$ (la multiplication est prioritaire)."
      }
    ]
  },
  "4N2": {
    "title": "4N2 : Fractions et nombres rationnels : 4 opérations",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Calculer le produit de fractions de nombres relatifs en décomposant avant de calculer.",
      "Connaître la définition de l'inverse d'une fraction non nulle.",
      "Diviser deux fractions en multipliant par l'inverse du diviseur.",
      "Additionner et soustraire des fractions en trouvant le dénominateur commun.",
      "Respecter les priorités opératoires dans les expressions fractionnaires.",
      "Savoir qu'un nombre rationnel est un quotient de deux entiers relatifs et qu'un quotient de décimaux n'est pas toujours décimal.",
      "Comparer, ranger et encadrer des nombres rationnels.",
      "Justifier la règle du produit de deux fractions à partir de la définition du quotient.",
      "Connaître et reconnaître les nombres premiers inférieurs à 100.",
      "Décomposer un entier en produit de facteurs premiers.",
      "Utiliser cette décomposition pour simplifier une fraction et résoudre un problème de partage."
    ],
    "keyPoints": [
      {
        "title": "1. Nombres rationnels",
        "content": "• Un **nombre rationnel** est un nombre qui peut s'écrire comme le **quotient de deux entiers relatifs** : $\\dfrac{a}{b}$, avec $a$ et $b$ entiers relatifs et $b \\neq 0$.\n• Rappel (**définition du quotient**) : $\\dfrac{a}{b}$ est le nombre qui, multiplié par $b$, donne $a$ : $\\dfrac{a}{b} \\times b = a$.\n• Exemples de rationnels : $\\dfrac{-3}{7}$ ; $5 = \\dfrac{5}{1}$ ; $-0{,}25 = \\dfrac{-25}{100}$. Tout nombre entier et tout nombre décimal est rationnel.\n• Un quotient de nombres décimaux s'écrit comme un quotient d'entiers : on multiplie son numérateur et son dénominateur par une même puissance de $10$.\n$$\\frac{1{,}2}{0{,}7} = \\frac{1{,}2 \\times 10}{0{,}7 \\times 10} = \\frac{12}{7}$$\n• **Attention** : un quotient de nombres décimaux **n'est pas toujours un nombre décimal**. Dans la division de $1$ par $3$, le reste vaut toujours $1$ : elle ne s'arrête jamais ($1 \\div 3 = 0{,}3333\\ldots$). Le rationnel $\\dfrac{1}{3}$ n'est donc pas un nombre décimal : $0{,}33$ n'en est qu'une valeur approchée, car $0{,}33 \\times 3 = 0{,}99 \\neq 1$.\n• Pour savoir si un quotient est décimal, on le simplifie, puis on cherche à l'écrire avec un dénominateur $10$, $100$, $1\\,000$… ou on effectue la division : $\\dfrac{6}{15} = \\dfrac{2}{5} = \\dfrac{4}{10} = 0{,}4$ est décimal, alors que $\\dfrac{5}{6}$ ne l'est pas.\n• **Pour aller plus loin** : une fraction qu'on ne peut plus simplifier est décimale seulement si son dénominateur n'a pas d'autre facteur premier que $2$ et $5$."
      },
      {
        "title": "2. Multiplication de fractions",
        "content": "On multiplie les numérateurs entre eux et les dénominateurs entre eux :\n$$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d} \\quad (b \\neq 0, d \\neq 0)$$\n**Conseil** : on détermine d'abord le signe, puis on **décompose les nombres en produits de facteurs pour simplifier avant d'effectuer les multiplications**.\n$$\\begin{aligned} \\frac{-15}{14} \\times \\frac{21}{-25} &= +\\frac{15 \\times 21}{14 \\times 25} \\\\ &= \\frac{(3 \\times 5) \\times (3 \\times 7)}{(2 \\times 7) \\times (5 \\times 5)} \\\\ &= \\frac{9}{10} \\end{aligned}$$\n**Démonstration de la règle.** Par définition du quotient, $\\dfrac{a}{b} \\times b = a$ et $\\dfrac{c}{d} \\times d = c$. L'ordre des facteurs d'un produit n'a pas d'importance, donc :\n$$\\left(\\frac{a}{b} \\times \\frac{c}{d}\\right) \\times (b \\times d) = \\left(\\frac{a}{b} \\times b\\right) \\times \\left(\\frac{c}{d} \\times d\\right) = a \\times c$$\nLe nombre $\\dfrac{a}{b} \\times \\dfrac{c}{d}$ est donc celui qui, multiplié par $b \\times d$, donne $a \\times c$ : par définition du quotient, c'est $\\dfrac{a \\times c}{b \\times d}$."
      },
      {
        "title": "3. Inverse d'un nombre relatif non nul",
        "content": "Deux nombres relatifs non nuls sont dits **inverses** si leur produit est égal à 1 :\n$$x \\times \\frac{1}{x} = 1$$\n• L'inverse de l'entier $a$ ($a \\neq 0$) est $\\frac{1}{a}$.\n• L'inverse de la fraction $\\frac{a}{b}$ ($a \\neq 0, b \\neq 0$) est la fraction $\\frac{b}{a}$.\n• L'inverse conserve le signe : l'inverse de $-\\frac{4}{11}$ est $-\\frac{11}{4}$.\n• **Pourquoi ?** D'après la règle du produit, $\\dfrac{a}{b} \\times \\dfrac{b}{a} = \\dfrac{a \\times b}{b \\times a} = 1$."
      },
      {
        "title": "4. Division de fractions",
        "content": "Diviser par un nombre non nul revient à **multiplier par son inverse** :\n$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{a \\times d}{b \\times c} \\quad (b, c, d \\neq 0)$$\nÉcriture sous forme de grand trait de fraction :\n$$\\frac{\\frac{a}{b}}{\\frac{c}{d}} = \\frac{a}{b} \\times \\frac{d}{c}$$\n**Justification** : le quotient de $\\dfrac{a}{b}$ par $\\dfrac{c}{d}$ est le nombre qui, multiplié par $\\dfrac{c}{d}$, donne $\\dfrac{a}{b}$. Or :\n$$\\left(\\frac{a}{b} \\times \\frac{d}{c}\\right) \\times \\frac{c}{d} = \\frac{a}{b} \\times \\left(\\frac{d}{c} \\times \\frac{c}{d}\\right) = \\frac{a}{b} \\times 1 = \\frac{a}{b}$$"
      },
      {
        "title": "5. Addition et soustraction : réduire au même dénominateur",
        "content": "• Si les dénominateurs sont **égaux**, on additionne (ou soustrait) les numérateurs et on garde le dénominateur :\n$$\\frac{a}{d} + \\frac{b}{d} = \\frac{a+b}{d} \\qquad \\frac{a}{d} - \\frac{b}{d} = \\frac{a-b}{d}$$\n• Sinon, on **réduit d'abord au même dénominateur**, de préférence le plus petit multiple commun des dénominateurs :\n$$\\begin{aligned} \\frac{5}{6} - \\frac{7}{4} &= \\frac{5 \\times 2}{6 \\times 2} - \\frac{7 \\times 3}{4 \\times 3} \\\\ &= \\frac{10}{12} - \\frac{21}{12} \\\\ &= \\frac{-11}{12} = -\\frac{11}{12} \\end{aligned}$$\n• Dans le cas général : $\\dfrac{a}{b} + \\dfrac{c}{d} = \\dfrac{a \\times d + c \\times b}{b \\times d}$ (puis on simplifie si possible)."
      },
      {
        "title": "6. Comparer, ranger, encadrer des nombres rationnels",
        "content": "• Si deux fractions ont le **même dénominateur positif**, la plus grande est celle qui a le plus grand numérateur :\n$$\\frac{3}{7} < \\frac{5}{7} \\qquad \\text{et} \\qquad \\frac{-5}{7} < \\frac{-3}{7}$$\n• Sinon, on les écrit d'abord avec un **même dénominateur positif**, puis on compare les numérateurs. Pour $\\dfrac{5}{6}$ et $\\dfrac{7}{9}$, le dénominateur $18$ convient :\n$$\\frac{5}{6} = \\frac{15}{18} \\qquad \\text{et} \\qquad \\frac{7}{9} = \\frac{14}{18} \\qquad \\text{donc} \\qquad \\frac{7}{9} < \\frac{5}{6}$$\n• **Nombres négatifs** : un nombre négatif est plus petit qu'un nombre positif ; entre deux nombres négatifs, le plus petit est celui qui a la plus grande distance à zéro. Comme $\\dfrac{7}{9} < \\dfrac{5}{6}$, on a $-\\dfrac{5}{6} < -\\dfrac{7}{9}$.\n• **Ranger** plusieurs nombres : on les écrit tous avec le même dénominateur, puis on les range selon leurs numérateurs :\n$$-\\frac{1}{2} < \\frac{1}{3} < \\frac{3}{4} \\qquad \\text{car} \\qquad -\\frac{6}{12} < \\frac{4}{12} < \\frac{9}{12}$$\n• **Encadrer** entre deux entiers consécutifs : on effectue la division euclidienne. Comme $17 = 3 \\times 5 + 2$, on a $\\dfrac{17}{5} = 3 + \\dfrac{2}{5}$, avec $0 < \\dfrac{2}{5} < 1$, donc :\n$$3 < \\frac{17}{5} < 4 \\qquad \\text{et} \\qquad -4 < -\\frac{17}{5} < -3$$\n• On peut aussi encadrer par des décimaux : $0{,}66 < \\dfrac{2}{3} < 0{,}67$, car $0{,}66 \\times 3 = 1{,}98$ est inférieur à $2$ et $0{,}67 \\times 3 = 2{,}01$ est supérieur à $2$."
      },
      {
        "title": "7. Nombres premiers",
        "content": "• Un **nombre premier** est un entier naturel qui a **exactement deux diviseurs** : $1$ et lui-même.\n• $1$ n'est pas premier (il n'a qu'un seul diviseur) et $0$ non plus. $2$ est le seul nombre premier pair.\n• Les **nombres premiers inférieurs à $100$** sont au nombre de $25$ :\n$$2,\\ 3,\\ 5,\\ 7,\\ 11,\\ 13,\\ 17,\\ 19,\\ 23,\\ 29,\\ 31,\\ 37,\\ 41,\\ 43,\\ 47,\\ 53,\\ 59,\\ 61,\\ 67,\\ 71,\\ 73,\\ 79,\\ 83,\\ 89,\\ 97$$\n• **Pour savoir si un entier inférieur à $100$ est premier**, on teste s'il est divisible par $2$, $3$, $5$ ou $7$. S'il n'est divisible par aucun d'eux (et s'il n'est pas l'un d'eux), il est premier. En effet, s'il s'écrivait $a \\times b$ avec $a$ et $b$ au moins égaux à $11$, il serait au moins égal à $11 \\times 11 = 121$.\n• *Exemples* : $91 = 7 \\times 13$ n'est pas premier ; $89$ n'est divisible ni par $2$, ni par $3$, ni par $5$, ni par $7$ : il est premier."
      },
      {
        "title": "8. Décomposer un entier en produit de facteurs premiers",
        "content": "• Tout entier supérieur ou égal à $2$ s'écrit comme un **produit de facteurs premiers**. Cette écriture est **unique**, à l'ordre des facteurs près (propriété admise).\n• **Méthode** : on divise par le plus petit nombre premier possible, puis on recommence avec le quotient, jusqu'à ce qu'il ne reste qu'un nombre premier.\n$$\\begin{aligned} 252 &= 2 \\times 126 \\\\ &= 2 \\times 2 \\times 63 \\\\ &= 2 \\times 2 \\times 3 \\times 21 \\\\ &= 2 \\times 2 \\times 3 \\times 3 \\times 7 \\end{aligned}$$\nDonc $252 = 2^2 \\times 3^2 \\times 7$.\n• **Attention** : $252 = 4 \\times 63$ est un produit juste, mais ce n'est pas la décomposition en facteurs premiers, car $4$ et $63$ ne sont pas premiers."
      },
      {
        "title": "9. Utiliser la décomposition : simplifier, partager",
        "content": "• **Simplifier une fraction** : on décompose le numérateur et le dénominateur, puis on divise par les facteurs communs.\n$$\\frac{126}{210} = \\frac{2 \\times 3 \\times 3 \\times 7}{2 \\times 3 \\times 5 \\times 7} = \\frac{3}{5}$$\n• **Résoudre un problème de partage** : *on veut répartir $168$ crayons et $252$ gommes dans le plus grand nombre possible de lots identiques, sans qu'il reste rien.* Le nombre de lots doit diviser à la fois $168$ et $252$.\n$$168 = 2^3 \\times 3 \\times 7 \\qquad 252 = 2^2 \\times 3^2 \\times 7$$\nLe plus grand nombre qui divise les deux est le produit des facteurs premiers communs, chacun pris avec le **plus petit** exposant : $2^2 \\times 3 \\times 7 = 84$.\nOn peut donc faire $84$ lots, contenant chacun $168 \\div 84 = 2$ crayons et $252 \\div 84 = 3$ gommes."
      },
      {
        "title": "À retenir",
        "content": "• Un **nombre premier** a exactement deux diviseurs : $1$ et lui-même. La décomposition en produit de facteurs premiers sert à simplifier une fraction et à trouver des diviseurs communs.\n• Un **nombre rationnel** est un quotient de deux entiers relatifs ; il n'est pas toujours décimal.\n• Multiplier : numérateurs entre eux, dénominateurs entre eux (en simplifiant avant).\n• Diviser par $\\dfrac{c}{d}$ (non nul), c'est multiplier par $\\dfrac{d}{c}$.\n• Additionner, soustraire ou comparer : avec un **dénominateur commun**.\n• « Prendre une fraction de » se traduit par une **multiplication**.\n• On simplifie le résultat dès que c'est possible.\n• **Pour aller plus loin** : une fraction qu'on ne peut plus simplifier est dite **irréductible** ; cette forme est travaillée en 3e."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Enchaînement d'opérations avec fractions",
        "example": "Calculer $B = \\frac{2}{3} - \\frac{5}{3} \\times \\frac{6}{25}$ et simplifier le résultat si possible.",
        "steps": [
          "**Étape 1 (Priorité)** : La multiplication est prioritaire sur la soustraction.",
          "**Étape 2 (Simplification du produit)** : $\\frac{5 \\times 6}{3 \\times 25} = \\frac{5 \\times (3 \\times 2)}{3 \\times (5 \\times 5)} = \\frac{2}{5}$.",
          "**Étape 3 (Mise au même dénominateur)** : $B = \\frac{2}{3} - \\frac{2}{5} = \\frac{2 \\times 5}{3 \\times 5} - \\frac{2 \\times 3}{5 \\times 3} = \\frac{10}{15} - \\frac{6}{15}$.",
          "**Étape 4 (Calcul et conclusion)** : $B = \\frac{10 - 6}{15} = \\frac{4}{15}$ (on ne peut pas simplifier davantage)."
        ]
      },
      {
        "title": "Méthode : Calculer un quotient de fractions",
        "example": "Calculer $C = \\left(\\dfrac{2}{3} - \\dfrac{1}{4}\\right) \\div \\dfrac{5}{6}$ et simplifier le résultat si possible.",
        "steps": [
          "**Étape 1 (Parenthèses d'abord)** : $\\dfrac{2}{3} - \\dfrac{1}{4} = \\dfrac{8}{12} - \\dfrac{3}{12} = \\dfrac{5}{12}$.",
          "**Étape 2 (Diviser = multiplier par l'inverse)** : $C = \\dfrac{5}{12} \\div \\dfrac{5}{6} = \\dfrac{5}{12} \\times \\dfrac{6}{5}$.",
          "**Étape 3 (Simplifier avant de multiplier)** : $C = \\dfrac{5 \\times 6}{(2 \\times 6) \\times 5} = \\dfrac{1}{2}$."
        ]
      },
      {
        "title": "Méthode : Résoudre un problème de « fraction d'une fraction »",
        "example": "Léa dépense $\\dfrac{2}{5}$ de son argent de poche pour un livre, puis $\\dfrac{1}{3}$ **du reste** pour une place de cinéma. Quelle fraction de son argent de poche lui reste-t-il ?",
        "steps": [
          "**Étape 1 (Reste après le livre)** : $1 - \\dfrac{2}{5} = \\dfrac{5}{5} - \\dfrac{2}{5} = \\dfrac{3}{5}$.",
          "**Étape 2 (« $\\frac{1}{3}$ du reste » = un produit)** : $\\dfrac{1}{3} \\times \\dfrac{3}{5} = \\dfrac{3}{15} = \\dfrac{1}{5}$ de l'argent de poche est dépensé au cinéma.",
          "**Étape 3 (Reste final)** : $\\dfrac{3}{5} - \\dfrac{1}{5} = \\dfrac{2}{5}$.",
          "**Conclusion** : il lui reste $\\dfrac{2}{5}$ de son argent de poche. (Avec 30 € : livre 12 €, cinéma 6 €, reste 12 €, et $\\frac{2}{5} \\times 30 = 12$.)"
        ]
      },
      {
        "title": "Méthode : Simplifier une fraction grâce aux facteurs premiers",
        "example": "Simplifier $\\dfrac{150}{330}$.",
        "steps": [
          "**Étape 1 (Décomposer)** : $150 = 2 \\times 3 \\times 5^2$ et $330 = 2 \\times 3 \\times 5 \\times 11$.",
          "**Étape 2 (Repérer les facteurs communs)** : $2$, $3$ et $5$ sont communs aux deux écritures.",
          "**Étape 3 (Diviser par ces facteurs)** : $\\dfrac{150}{330} = \\dfrac{2 \\times 3 \\times 5 \\times 5}{2 \\times 3 \\times 5 \\times 11} = \\dfrac{5}{11}$.",
          "**Vérification** : $5 \\times 330 = 1\\,650$ et $11 \\times 150 = 1\\,650$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne jamais additionner les dénominateurs : $\\frac{2}{5} + \\frac{1}{5} = \\frac{3}{5}$ et NON $\\frac{3}{10}$ !",
      "⚠️ Lors d'une division, n'inverser QUE la deuxième fraction (le diviseur) : $\\frac{3}{4} \\div \\frac{5}{7} = \\frac{3}{4} \\times \\frac{7}{5}$.",
      "⚠️ Pas de simplification « en croix » à travers un signe $\\div$ : on transforme d'abord la division en multiplication par l'inverse, puis on simplifie.",
      "⚠️ Entre deux nombres négatifs, le plus petit est celui qui a la plus grande distance à zéro : $-\\frac{5}{6} < -\\frac{7}{9}$ alors que $\\frac{5}{6} > \\frac{7}{9}$.",
      "⚠️ $\\frac{1}{3}$ n'est pas égal à $0{,}33$ : $0{,}33$ n'en est qu'une valeur approchée.",
      "⚠️ $1$ n'est pas un nombre premier : il n'a qu'un seul diviseur.",
      "⚠️ Un nombre impair n'est pas forcément premier : $51 = 3 \\times 17$ et $91 = 7 \\times 13$.",
      "⚠️ Dans une décomposition en facteurs premiers, tous les facteurs doivent être premiers : $60 = 4 \\times 15$ n'en est pas une, mais $60 = 2^2 \\times 3 \\times 5$ en est une."
    ],
    "flashcards": [
      {
        "q": "Quelle est la règle pour diviser par une fraction non nulle ?",
        "a": "Diviser par une fraction revient à **multiplier par son inverse** : $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$."
      },
      {
        "q": "Quel est l'inverse du nombre $-7$ ?",
        "a": "$-\\frac{1}{7}$ (l'inverse conserve le signe négatif car $(-7) \\times (-\\frac{1}{7}) = 1$)."
      },
      {
        "q": "Calculer de tête : $\\frac{3}{4} \\times \\frac{4}{9}$.",
        "a": "$\\frac{1}{3}$ (on simplifie par 4 au numérateur et au dénominateur, et $\\frac{3}{9} = \\frac{1}{3}$)."
      },
      {
        "q": "Qu'est-ce qu'un nombre rationnel ?",
        "a": "Un nombre qui peut s'écrire comme le quotient de deux entiers relatifs : $\\frac{a}{b}$ avec $b \\neq 0$."
      },
      {
        "q": "$\\frac{1}{3}$ est-il un nombre décimal ?",
        "a": "Non : dans la division de $1$ par $3$, le reste vaut toujours $1$, la division ne s'arrête jamais. C'est un nombre rationnel non décimal."
      },
      {
        "q": "Comment comparer $\\frac{5}{6}$ et $\\frac{7}{9}$ ?",
        "a": "On les écrit avec un même dénominateur : $\\frac{5}{6} = \\frac{15}{18}$ et $\\frac{7}{9} = \\frac{14}{18}$, donc $\\frac{7}{9} < \\frac{5}{6}$."
      },
      {
        "q": "Que vaut $\\frac{5}{8} - \\frac{3}{8}$ après simplification ?",
        "a": "$\\frac{2}{8} = \\frac{1}{4}$ (on soustrait les numérateurs et on simplifie par 2)."
      },
      {
        "q": "Quelle opération effectue-t-on en premier dans $\\frac{1}{2} + \\frac{3}{4} \\times \\frac{2}{5}$ ?",
        "a": "La multiplication $\\frac{3}{4} \\times \\frac{2}{5}$ est prioritaire sur l'addition."
      },
      {
        "q": "Calculer $\\dfrac{3}{4} \\div \\dfrac{9}{8}$.",
        "a": "$\\dfrac{3}{4} \\times \\dfrac{8}{9} = \\dfrac{24}{36} = \\dfrac{2}{3}$."
      },
      {
        "q": "Calculer $\\dfrac{1}{6} + \\dfrac{3}{4}$.",
        "a": "$\\dfrac{2}{12} + \\dfrac{9}{12} = \\dfrac{11}{12}$ (dénominateur commun 12)."
      },
      {
        "q": "Qu'est-ce qu'un nombre premier ?",
        "a": "Un entier naturel qui a exactement deux diviseurs : $1$ et lui-même. Par exemple $2$, $13$ ou $97$. $1$ n'est pas premier."
      },
      {
        "q": "$57$ est-il un nombre premier ?",
        "a": "Non : $57 = 3 \\times 19$ (la somme de ses chiffres, $12$, est un multiple de $3$)."
      },
      {
        "q": "Décomposer $60$ en produit de facteurs premiers.",
        "a": "$60 = 2 \\times 2 \\times 3 \\times 5 = 2^2 \\times 3 \\times 5$."
      },
      {
        "q": "Comment simplifier une fraction avec des facteurs premiers ?",
        "a": "On décompose le numérateur et le dénominateur, puis on divise par les facteurs communs : $\\dfrac{12}{30} = \\dfrac{2 \\times 2 \\times 3}{2 \\times 3 \\times 5} = \\dfrac{2}{5}$."
      }
    ]
  },
  "4N3": {
    "title": "4N3 : Puissances d'un nombre et puissances de 10",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Définir $a^n$ pour un exposant entier positif, et $10^{-n}$ pour les exposants négatifs ($10^{-n} = 1/10^n$).",
      "Connaître les conventions fondamentales : $a^0 = 1$, $a^1 = a$, $0^n = 0$, $1^n = 1$.",
      "Simplifier un produit de puissances d'un même nombre en revenant à l'écriture développée.",
      "Manipuler les puissances de 10 et les écritures décimales.",
      "Écrire un nombre en notation scientifique et maîtriser les préfixes métriques (nano à téra).",
      "Pour aller plus loin (non exigible en 4e) : exposant négatif d'un nombre quelconque et formules générales sur les puissances."
    ],
    "keyPoints": [
      {
        "title": "1. Définition et cas particuliers",
        "content": "Soit $a$ un nombre relatif et $n$ un entier positif non nul :\n$$a^n = \\underbrace{a \\times a \\times \\dots \\times a}_{n \\text{ facteurs}} \\quad (a \\text{ est la base, } n \\text{ est l'exposant})$$\n• $a^1 = a$ et par convention, pour tout $a \\neq 0$, $a^0 = 1$ (ex: $2026^0 = 1$).\n• $0^n = 0$ ($n > 0$) et $1^n = 1$.\n• Les exposants négatifs sont étudiés avec les puissances de 10 (voir la partie 3)."
      },
      {
        "title": "2. Produits de puissances : on compte les facteurs",
        "content": "**Pour un même nombre, avec des exposants positifs**, on ne retient pas de formule : on revient à la définition et on compte les facteurs.\n$$2^3 \\times 2^2 = \\underbrace{2 \\times 2 \\times 2}_{3 \\text{ facteurs}} \\times \\underbrace{2 \\times 2}_{2 \\text{ facteurs}} = 2^5$$\nDe même, pour un quotient, on simplifie les facteurs communs : $\\dfrac{7^5}{7^2} = \\dfrac{7 \\times 7 \\times 7 \\times 7 \\times 7}{7 \\times 7} = 7 \\times 7 \\times 7 = 7^3$.\n\n**Pour les puissances de 10**, ce raisonnement donne des règles à connaître, valables aussi avec des exposants négatifs (voir la partie 3), pour $m$ et $n$ entiers relatifs :\n• $10^m \\times 10^n = 10^{m+n}$\n• $\\dfrac{10^m}{10^n} = 10^{m-n}$\n• $(10^m)^n = 10^{m \\times n}$\n\n*Exemple* : $10^5 \\times 10^{-2} = 10^{5 + (-2)} = 10^3$ et $\\dfrac{10^4}{10^{-3}} = 10^{4 - (-3)} = 10^7$."
      },
      {
        "title": "3. Puissances de 10",
        "content": "• Pour $n > 0$ : $10^n = 1\\underbrace{00\\dots0}_{n \\text{ zéros}}$ ($10^3 = 1\\,000$ ; $10^6 = 1\\,000\\,000$).\n• Pour $n > 0$ : $10^{-n} = \\frac{1}{10^n} = \\underbrace{0{,}00\\dots0}_{n \\text{ zéros au total}}1$ ($10^{-1} = 0{,}1$ ; $10^{-3} = 0{,}001$).\n• Multiplier par $10^n$ décale la virgule de $n$ rangs vers la droite.\n• Multiplier par $10^{-n}$ décale la virgule de $n$ rangs vers la gauche."
      },
      {
        "title": "4. Notation scientifique et préfixes métriques",
        "content": "La **notation scientifique** d'un nombre s'écrit sous la forme unique :\n$$a \\times 10^n \\quad \\text{avec } a \\text{ décimal, } 1 \\le a < 10 \\text{ (au signe près) et } n \\text{ entier relatif}$$\n*Préfixes à connaître par cœur* :\n• Téra (T) = $10^{12}$ | Giga (G) = $10^9$ | Méga (M) = $10^6$ | Kilo (k) = $10^3$\n• milli (m) = $10^{-3}$ | micro ($\\mu$) = $10^{-6}$ | nano (n) = $10^{-9}$"
      },
      {
        "title": "5. Pour aller plus loin : exposants négatifs et formules générales (non exigibles en 4e)",
        "content": "Ces résultats ne sont pas exigibles en 4e.\n• Pour $a \\neq 0$ et $n$ entier positif, $a^{-n}$ est l'inverse de $a^n$ :\n$$a^{-n} = \\frac{1}{a^n} \\quad \\text{Exemple : } 5^{-2} = \\frac{1}{5^2} = \\frac{1}{25} = 0{,}04$$\n• Pour $m$ et $n$ entiers relatifs, et $a$ et $b$ nombres non nuls :\n1. Produit : $a^m \\times a^n = a^{m+n}$\n2. Quotient : $\\frac{a^m}{a^n} = a^{m-n}$\n3. Puissance de puissance : $(a^m)^n = a^{m \\times n}$\n4. Produit de bases : $(a \\times b)^n = a^n \\times b^n$\n5. Quotient de bases : $\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$"
      },
      {
        "title": "À retenir",
        "content": "• $a^n$ : produit de $n$ facteurs égaux à $a$ ; $a^0 = 1$ ($a \\neq 0$) et $10^{-n} = \\dfrac{1}{10^n}$.\n• Pour un produit de puissances d'un même nombre, on compte les facteurs : $3^2 \\times 3^4 = 3^6$.\n• $10^n \\times 10^p = 10^{n+p}$ ; $\\dfrac{10^n}{10^p} = 10^{n-p}$ ; $(10^n)^p = 10^{n \\times p}$.\n• $10^{-n}$ est un nombre **positif** : $10^{-2} = 0{,}01$.\n• Notation scientifique : $a \\times 10^n$ avec un seul chiffre non nul avant la virgule ($1 \\le a < 10$ pour un nombre positif)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Écrire un nombre en notation scientifique",
        "example": "Écrire $A = 45\\,800\\,000$ et $B = 0{,}000\\,32$ en notation scientifique.",
        "steps": [
          "**Pour A ($45\\,800\\,000$)** : On place la virgule après le premier chiffre non nul : $4{,}58$. On compte le décalage de la virgule vers la gauche (+7 rangs) $\\implies A = 4{,}58 \\times 10^7$.",
          "**Pour B ($0{,}000\\,32$)** : On place la virgule après le 3 : $3{,}2$. On compte le décalage vers la droite (4 rangs) $\\implies B = 3{,}2 \\times 10^{-4}$."
        ]
      },
      {
        "title": "Méthode : Calculer avec des puissances de 10 et donner l'écriture scientifique",
        "example": "Calculer $D = \\dfrac{3 \\times 10^4 \\times 8 \\times 10^{-6}}{6 \\times 10^{-3}}$ et donner le résultat en notation scientifique puis en écriture décimale.",
        "steps": [
          "**Étape 1 (Regrouper)** : on sépare les nombres et les puissances de 10 : $D = \\dfrac{3 \\times 8}{6} \\times \\dfrac{10^4 \\times 10^{-6}}{10^{-3}}$.",
          "**Étape 2 (Nombres)** : $\\dfrac{3 \\times 8}{6} = \\dfrac{24}{6} = 4$.",
          "**Étape 3 (Puissances de 10)** : $\\dfrac{10^{4 + (-6)}}{10^{-3}} = \\dfrac{10^{-2}}{10^{-3}} = 10^{-2 - (-3)} = 10^1$.",
          "**Étape 4 (Conclusion)** : $D = 4 \\times 10^1$ (notation scientifique, car $1 \\le 4 < 10$), soit $D = 40$."
        ]
      },
      {
        "title": "Méthode : Utiliser les préfixes et comparer des ordres de grandeur",
        "example": "Un virus mesure $120$ nm et une bactérie $2\\ \\mu$m. Exprimer ces longueurs en mètres en notation scientifique, puis dire combien de fois la bactérie est plus longue que le virus.",
        "steps": [
          "**Étape 1 (Virus)** : $1$ nm $= 10^{-9}$ m, donc $120$ nm $= 120 \\times 10^{-9}$ m $= 1{,}2 \\times 10^2 \\times 10^{-9}$ m $= 1{,}2 \\times 10^{-7}$ m.",
          "**Étape 2 (Bactérie)** : $1\\ \\mu$m $= 10^{-6}$ m, donc $2\\ \\mu$m $= 2 \\times 10^{-6}$ m.",
          "**Étape 3 (Comparer)** : $\\dfrac{2 \\times 10^{-6}}{1{,}2 \\times 10^{-7}} = \\dfrac{2}{1{,}2} \\times 10^{-6 - (-7)} = \\dfrac{2}{1{,}2} \\times 10 \\approx 16{,}7$.",
          "**Conclusion** : la bactérie est environ 17 fois plus longue que le virus."
        ]
      }
    ],
    "traps": [
      "⚠️ $2^3 \\neq 6$ ! $2^3 = 2 \\times 2 \\times 2 = 8$. Ne jamais multiplier la base par l'exposant !",
      "⚠️ $10^{-3}$ n'est PAS un nombre négatif ! $10^{-3} = \\frac{1}{10^3} = 0{,}001 > 0$. Un exposant négatif indique un inverse, pas un signe négatif.",
      "⚠️ Dans la notation scientifique $a \\times 10^n$, $a$ doit être strictement inférieur à 10 : $34 \\times 10^5$ n'est pas scientifique, il faut écrire $3{,}4 \\times 10^6$.",
      "⚠️ Dans un **produit** de puissances de 10, on additionne les exposants ; pour une somme, on ne peut pas : $10^2 + 10^3 = 1\\,100$, ce n'est pas $10^5$."
    ],
    "flashcards": [
      {
        "q": "Combien vaut $7^0$ ?",
        "a": "$1$ (tout nombre non nul élevé à la puissance 0 est égal à 1)."
      },
      {
        "q": "Quelle est l'écriture fractionnaire de $10^{-3}$ ?",
        "a": "$\\frac{1}{10^3} = \\frac{1}{1\\,000}$, soit $0{,}001$."
      },
      {
        "q": "Simplifier $5^4 \\times 5^3$.",
        "a": "$5^7$ : on compte les facteurs égaux à $5$, il y en a $4 + 3 = 7$."
      },
      {
        "q": "Quelle est la notation scientifique de $0{,}0052$ ?",
        "a": "$5{,}2 \\times 10^{-3}$ (car on décale la virgule de 3 rangs vers la droite pour avoir $1 \\le 5{,}2 < 10$)."
      },
      {
        "q": "À quelle puissance de 10 correspond le préfixe « micro » ($\\mu$) ?",
        "a": "$10^{-6}$ (un millionième d'unité)."
      },
      {
        "q": "Simplifier $10^{-4} \\times 10^{6}$.",
        "a": "$10^{-4 + 6} = 10^2$."
      },
      {
        "q": "Écrire $0{,}000\\,7$ en notation scientifique.",
        "a": "$7 \\times 10^{-4}$."
      }
    ]
  },
  "4N4": {
    "title": "4N4 : Racines carrées et carrés parfaits",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Connaître la définition de la racine carrée d'un nombre positif : $\\sqrt{a} \\ge 0$ et $(\\sqrt{a})^2 = a$.",
      "Mémoriser par cœur les 13 carrés parfaits des entiers de 0 à 12 (0 à 144).",
      "Comprendre pourquoi la racine carrée d'un nombre strictement négatif n'existe pas.",
      "Encadrer une racine carrée entre deux entiers consécutifs sans calculatrice.",
      "Distinguer rigoureusement valeur exacte avec radical et valeur arrondie au dixième ou centième.",
      "Pour aller plus loin (non exigible en 4e) : résoudre $x^2 = a$, calculer un produit ou un quotient de racines carrées."
    ],
    "keyPoints": [
      {
        "title": "1. Définition de la racine carrée",
        "content": "Soit $a$ un nombre positif ou nul ($a \\ge 0$) :\nLa **racine carrée de $a$**, notée $\\sqrt{a}$, est le **nombre positif** dont le carré est égal à $a$ :\n$$(\\sqrt{a})^2 = a \\quad \\text{et} \\quad \\sqrt{a^2} = a \\quad (\\text{pour } a \\ge 0)$$\n*Exemple* : Le nombre positif dont le carré est 49 est 7, donc $\\sqrt{49} = 7$.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 220 160\" width=\"220\" height=\"160\" style=\"max-width:220px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Carré d'aire 49 cm carrés et de côté 7 cm\">\n  <rect x=\"55\" y=\"15\" width=\"110\" height=\"110\" fill=\"rgba(37, 99, 235, 0.08)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2\" />\n  <text x=\"110\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Aire = 49 cm²</text>\n  <text x=\"110\" y=\"86\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-muted, #64748b)\">donc côté = √49</text>\n  <text x=\"110\" y=\"148\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">côté = √49 = 7 cm</text>\n</svg>\n</div>\n"
      },
      {
        "title": "2. Les carrés parfaits de 0 à 12 à connaître par cœur",
        "content": "• $0^2 = 0 \\implies \\sqrt{0} = 0$\n• $1^2 = 1 \\implies \\sqrt{1} = 1$\n• $2^2 = 4 \\implies \\sqrt{4} = 2$\n• $3^2 = 9 \\implies \\sqrt{9} = 3$\n• $4^2 = 16 \\implies \\sqrt{16} = 4$\n• $5^2 = 25 \\implies \\sqrt{25} = 5$\n• $6^2 = 36 \\implies \\sqrt{36} = 6$\n• $7^2 = 49 \\implies \\sqrt{49} = 7$\n• $8^2 = 64 \\implies \\sqrt{64} = 8$\n• $9^2 = 81 \\implies \\sqrt{81} = 9$\n• $10^2 = 100 \\implies \\sqrt{100} = 10$\n• $11^2 = 121 \\implies \\sqrt{121} = 11$\n• $12^2 = 144 \\implies \\sqrt{144} = 12$"
      },
      {
        "title": "3. Règle d'existence : pas de racine de nombre négatif",
        "content": "D'après la règle des signes, le carré de tout nombre relatif est **toujours positif ou nul** :\n$$(+5)^2 = 25 \\quad \\text{et} \\quad (-5)^2 = 25$$\nAinsi, il est **impossible** de trouver un nombre dont le carré est $-25$ :\n$$\\sqrt{-25} \\quad \\text{n'existe pas : aucun nombre n'a un carré négatif !}$$"
      },
      {
        "title": "4. Encadrement et valeur exacte vs arrondie",
        "content": "Si l'entier $a$ n'est **pas** un carré parfait, $\\sqrt{a}$ n'est pas un nombre décimal (on ne peut pas l'écrire exactement avec une virgule) : on donne alors sa valeur exacte ou une valeur arrondie.\n• **Valeur exacte** : on conserve le symbole radical, par exemple $\\sqrt{40}$ cm.\n• **Valeur arrondie** : obtenue avec la touche $\\sqrt{}$ de la calculatrice, par exemple $\\sqrt{40} \\approx 6{,}32$ cm.\n• **Encadrement sans calculatrice** : Comme $36 < 40 < 49$, alors $\\sqrt{36} < \\sqrt{40} < \\sqrt{49}$, soit $6 < \\sqrt{40} < 7$."
      },
      {
        "title": "5. Pour aller plus loin : équation x² = a, produit et quotient de racines (non exigibles en 4e)",
        "content": "Ces résultats ne sont pas exigibles en 4e.\n• **Équation $x^2 = a$** (étudiée en 3e) : si $a > 0$, elle a deux solutions, $\\sqrt{a}$ et $-\\sqrt{a}$ (par exemple, $x^2 = 49$ a pour solutions $7$ et $-7$) ; si $a = 0$, la seule solution est $0$ ; si $a < 0$, elle n'a pas de solution.\n• **Produit** : pour $a \\ge 0$ et $b \\ge 0$, $\\sqrt{a} \\times \\sqrt{b} = \\sqrt{a \\times b}$, par exemple $\\sqrt{2} \\times \\sqrt{8} = \\sqrt{16} = 4$.\n• **Quotient** : pour $a \\ge 0$ et $b > 0$, $\\dfrac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\dfrac{a}{b}}$, par exemple $\\dfrac{\\sqrt{50}}{\\sqrt{2}} = \\sqrt{25} = 5$."
      },
      {
        "title": "À retenir",
        "content": "• Pour $a \\ge 0$, $\\sqrt{a}$ est le nombre **positif** dont le carré vaut $a$ : $(\\sqrt{a})^2 = a$.\n• Carrés parfaits à connaître : $1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144$.\n• $\\sqrt{a}$ n'existe pas si $a < 0$.\n• Pour encadrer $\\sqrt{a}$ : on encadre $a$ par deux carrés parfaits consécutifs.\n• Valeur exacte : $\\sqrt{30}$ ; valeur approchée : $\\sqrt{30} \\approx 5{,}5$ (avec le signe $\\approx$)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Encadrer une racine carrée entre deux entiers consécutifs",
        "example": "Encadrer $\\sqrt{75}$ entre deux entiers consécutifs.",
        "steps": [
          "**Étape 1 (Trouver les carrés parfaits)** : On cherche les carrés parfaits encadrant $75$ :\n$8^2 = 64$ et $9^2 = 81$, donc $64 < 75 < 81$.",
          "**Étape 2 (Passer aux racines)** : On applique la racine carrée en conservant l'ordre :\n$\\sqrt{64} < \\sqrt{75} < \\sqrt{81}$.",
          "**Étape 3 (Conclusion)** : $8 < \\sqrt{75} < 9$."
        ]
      },
      {
        "title": "Méthode : Encadrer une racine carrée au dixième et l'arrondir",
        "example": "Un carré a une aire de $30$ cm². Donner la valeur exacte de son côté, un encadrement au dixième, puis l'arrondi au dixième.",
        "steps": [
          "**Étape 1 (Valeur exacte)** : le côté $c$ vérifie $c^2 = 30$ et $c > 0$, donc $c = \\sqrt{30}$ cm.",
          "**Étape 2 (Encadrement à l'unité)** : $5^2 = 25 < 30 < 36 = 6^2$, donc $5 < \\sqrt{30} < 6$.",
          "**Étape 3 (Encadrement au dixième)** : on teste les carrés des dixièmes : $5{,}4^2 = 29{,}16 < 30$ et $5{,}5^2 = 30{,}25 > 30$, donc $5{,}4 < \\sqrt{30} < 5{,}5$.",
          "**Étape 4 (Arrondi)** : la calculatrice donne $\\sqrt{30} \\approx 5{,}477$, donc $c \\approx 5{,}5$ cm au dixième près."
        ]
      }
    ],
    "traps": [
      "⚠️ $\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$ ! Contre-exemple : $\\sqrt{9 + 16} = \\sqrt{25} = 5$, alors que $\\sqrt{9} + \\sqrt{16} = 3 + 4 = 7$ !",
      "⚠️ $\\sqrt{a}$ est TOUJOURS positif ou nul par définition : $\\sqrt{25} = 5$ et non $-5$.",
      "⚠️ Écrire $\\sqrt{-9} = -3$ est une erreur grave : la racine carrée d'un nombre négatif n'a aucun sens au collège."
    ],
    "flashcards": [
      {
        "q": "Quelle est la valeur de $\\sqrt{81}$ ?",
        "a": "$9$, car $9 \\ge 0$ et $9^2 = 81$."
      },
      {
        "q": "Pourquoi $\\sqrt{-16}$ n'existe-t-il pas ?",
        "a": "Parce que le carré de n'importe quel nombre est toujours positif (règle des signes) : aucun nombre au carré ne donne $-16$."
      },
      {
        "q": "Entre quels entiers consécutifs se situe $\\sqrt{50}$ ?",
        "a": "Entre $7$ et $8$, car $7^2 = 49 < 50 < 64 = 8^2$."
      },
      {
        "q": "Quelle est la valeur exacte du côté d'un carré d'aire 13 cm² ?",
        "a": "$\\sqrt{13}$ cm (c'est la valeur exacte ; $3{,}61$ cm n'est qu'une valeur arrondie)."
      },
      {
        "q": "Que vaut $(\\sqrt{37})^2$ ?",
        "a": "$37$ (la racine carrée et le carré s'annulent pour tout nombre positif)."
      },
      {
        "q": "Que vaut $\\sqrt{144}$ ?",
        "a": "$12$, car $12^2 = 144$."
      },
      {
        "q": "Encadrer $\\sqrt{20}$ entre deux entiers consécutifs.",
        "a": "$4 < \\sqrt{20} < 5$, car $16 < 20 < 25$."
      }
    ]
  },
  "4N5": {
    "title": "4N5 : Calcul littéral et résolution d'équations du premier degré",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Développer une expression littérale à l'aide de la distributivité simple : $k(a+b) = ka+kb$.",
      "Reconnaître si une expression est une somme ou un produit.",
      "Factoriser une expression simple en mettant en évidence un facteur commun.",
      "Supprimer des parenthèses précédées d'un signe $+$ ou d'un signe $-$.",
      "Réduire une expression littérale en regroupant les termes par familles de même puissance.",
      "Tester si une égalité est vraie pour une valeur donnée, et savoir qu'une égalité vraie pour une valeur n'est pas forcément une identité.",
      "Résoudre une équation du premier degré de type $ax+b = c$ ou $ax+b = cx+d$ et vérifier la solution trouvée."
    ],
    "keyPoints": [
      {
        "title": "1. Vocabulaire du calcul littéral et des équations",
        "content": "• **Expression littérale** : expression contenant des nombres et des lettres désignant des variables ou inconnues.\n• **Variable** : lettre qui peut prendre différentes valeurs, par exemple le nombre de départ d'un programme de calcul.\n• **Inconnue** : lettre qui cache un nombre dont on cherche la valeur.\n• **Équation** : égalité comportant une ou plusieurs inconnues (ex: $5x - 3 = 2x + 9$).\n• **Résoudre une équation** : trouver toutes les valeurs de l'inconnue qui rendent l'égalité vraie.\n• **Solution** : valeur numérique de l'inconnue qui vérifie l'égalité.\n• **Vérification** : calcul séparé de chaque membre en remplaçant l'inconnue par la solution trouvée.\n• **Identité** : égalité vraie pour **toutes** les valeurs de la lettre (ex : $2(x + 3) = 2x + 6$)."
      },
      {
        "title": "2. Structure d'une expression : somme ou produit",
        "content": "Pour savoir si une expression est une somme ou un produit, on cherche la **dernière opération** à effectuer en respectant les priorités.\n• $5x + 3$ : on calcule d'abord $5 \\times x$, puis on ajoute $3$. La dernière opération est une addition : c'est une **somme**.\n• $3(x + 2)$ : on calcule d'abord la parenthèse, puis on multiplie par $3$. La dernière opération est une multiplication : c'est un **produit**.\n• $4(x + 1) + 3$ : la dernière opération est l'addition de $3$. C'est une **somme**, même si elle contient un produit.\n• $5x - 3$ : la dernière opération est une soustraction, c'est une **différence**. Une différence est une somme de nombres relatifs, car $5x - 3 = 5x + (-3)$.\n\n**Développer**, c'est transformer un produit en somme. **Factoriser**, c'est transformer une somme en produit."
      },
      {
        "title": "3. Distributivité simple et suppression de parenthèses",
        "content": "• **Distributivité simple** : transformer un produit en somme ou différence :\n$$k(a + b) = k \\times a + k \\times b = ka + kb$$\n$$k(a - b) = k \\times a - k \\times b = ka - kb$$\n• **Suppression de parenthèses** :\n  - Précédées d'un signe $+$ : on supprime les parenthèses sans rien changer : $a + (b - c) = a + b - c$.\n  - Précédées d'un signe $-$ : **on change TOUS les signes à l'intérieur** : $a - (b - c) = a - b + c$.\n• **Factoriser** (sens inverse) : $6x + 9 = 3 \\times 2x + 3 \\times 3 = 3(2x + 3)$."
      },
      {
        "title": "4. Réduction d'une expression littérale",
        "content": "Réduire, c'est regrouper les termes possédant la même lettre affectée du même exposant (par familles) :\n$$E = 3x^2 + 5x - 7 + 2x^2 - 8x + 12$$\n$$E = (3x^2 + 2x^2) + (5x - 8x) + (-7 + 12) = 5x^2 - 3x + 5$$"
      },
      {
        "title": "5. Tester une égalité : valeur, identité, contre-exemple",
        "content": "**Tester une égalité pour une valeur**, c'est remplacer la lettre par cette valeur dans **chaque membre séparément**, puis comparer les deux résultats. Pour $4x - 3 = 2x + 5$ :\n• pour $x = 4$ : à gauche $4 \\times 4 - 3 = 13$, à droite $2 \\times 4 + 5 = 13$. Les résultats sont égaux : l'égalité est **vraie** pour $x = 4$.\n• pour $x = 3$ : à gauche $4 \\times 3 - 3 = 9$, à droite $2 \\times 3 + 5 = 11$. Les résultats sont différents : l'égalité est **fausse** pour $x = 3$.\n\n**Une égalité vraie pour une valeur n'est pas forcément une identité.** Une identité est vraie pour **toutes** les valeurs de la lettre.\n• $x + x = x^2$ est vraie pour $x = 2$ (car $2 + 2 = 4$ et $2^2 = 4$), mais fausse pour $x = 3$ (car $3 + 3 = 6$ et $3^2 = 9$). Ce n'est donc **pas** une identité : $x = 3$ est un **contre-exemple**. Un seul contre-exemple suffit pour le prouver.\n• $2(x + 3) = 2x + 6$ est une identité. Pour le prouver, quelques essais ne suffisent pas : on **transforme** un membre par le calcul (ici en développant) jusqu'à obtenir l'autre membre.\n\n**Programmes de calcul équivalents** : deux programmes sont équivalents s'ils donnent le même résultat pour n'importe quel nombre de départ. On traduit chacun par une expression, puis on montre que l'égalité de ces expressions est une identité.\n• Programme A : choisir un nombre $x$, lui ajouter $3$, multiplier le résultat par $4$, soustraire le double du nombre de départ. On obtient $4(x + 3) - 2x = 4x + 12 - 2x = 2x + 12$.\n• Programme B : choisir un nombre $x$, le multiplier par $2$, ajouter $12$. On obtient $2x + 12$.\nLes deux expressions sont égales pour toute valeur de $x$ : les programmes sont équivalents."
      },
      {
        "title": "6. Résolution pas-à-pas d'une équation : ajouter ou soustraire aux deux membres",
        "content": "Pour résoudre $ax + b = cx + d$ :\n1. **Séparer les familles** : ajouter ou soustraire un même terme **aux deux membres** pour rassembler les termes en $x$ d'un côté (souvent à gauche) et les nombres constants de l'autre côté (à droite).\n2. **Réduire** les deux membres pour obtenir une forme $Ax = B$.\n3. **Isoler l'inconnue** en divisant **les deux membres** par le coefficient $A$ devant $x$, s'il n'est pas nul : $x = \\frac{B}{A}$.\n\n*Pourquoi ça marche ?* On peut **ajouter ou soustraire** un même nombre aux deux membres, et **multiplier ou diviser** les deux membres par un même nombre **non nul** : l'égalité reste vraie.\n\n**Attention aux coefficients :** dans $3x + 5 = 11$, on soustrait $5$ aux deux membres pour obtenir $3x = 6$. Pour finir, on divise les deux membres par $3$, ce qui donne $x = 2$ : le $3$ ne devient pas $-3$."
      },
      {
        "title": "Pour aller plus loin : double distributivité",
        "content": "*Cette partie va au-delà de ce qui est attendu en 4e : la double distributivité s'étudie en 3e.*\n\nPour développer un produit de deux sommes, chaque terme de la première parenthèse multiplie chaque terme de la seconde :\n$$(a + b)(c + d) = ac + ad + bc + bd$$\nUn carré se développe de la même façon, en l'écrivant comme un produit de deux parenthèses identiques :\n$$(x + 3)^2 = (x + 3)(x + 3) = x^2 + 3x + 3x + 9 = x^2 + 6x + 9$$"
      },
      {
        "title": "À retenir",
        "content": "• Somme ou produit : c'est la **dernière opération** à effectuer qui le dit.\n• Développer : $k(a + b) = ka + kb$.\n• Un signe $-$ devant une parenthèse change le signe de **tous** les termes qu'elle contient.\n• Réduire : on regroupe les termes en $x^2$, en $x$, puis les nombres.\n• Une égalité vraie pour une valeur n'est pas forcément une identité : un seul contre-exemple suffit pour le prouver.\n• Résoudre : on isole $x$ en effectuant la même opération sur les deux membres, puis on **vérifie** la solution.\n• Problème : choisir l'inconnue, écrire l'équation, résoudre, vérifier, conclure par une phrase."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Résoudre une équation du type $ax + b = cx + d$",
        "example": "Résoudre l'équation $7x - 4 = 2x + 11$ avec vérification.",
        "steps": [
          "**Étape 1 (Regroupement des termes en x)** : On soustrait $2x$ des deux côtés : $7x - 2x - 4 = 11 \\implies 5x - 4 = 11$.",
          "**Étape 2 (Regroupement des constantes)** : On ajoute $4$ des deux côtés : $5x = 11 + 4 = 15$.",
          "**Étape 3 (Division par le coefficient)** : On divise par $5$ : $x = \\frac{15}{5} = 3$.",
          "**Étape 4 (Vérification)** :\n• Membre de gauche : $7 \\times 3 - 4 = 21 - 4 = 17$.\n• Membre de droite : $2 \\times 3 + 11 = 6 + 11 = 17$.\nL'égalité est vérifiée : la solution est bien $x = 3$."
        ]
      },
      {
        "title": "Méthode : Montrer qu'une égalité est, ou n'est pas, une identité",
        "example": "Les égalités $3(x + 2) = 3x + 2$ et $5(x - 1) + 2x = 7x - 5$ sont-elles des identités ?",
        "steps": [
          "**Étape 1 (Chercher un contre-exemple)** : pour $3(x + 2) = 3x + 2$, on essaie $x = 0$. À gauche : $3 \\times (0 + 2) = 6$. À droite : $3 \\times 0 + 2 = 2$. Comme $6 \\neq 2$, $x = 0$ est un contre-exemple : ce n'est **pas** une identité.",
          "**Étape 2 (Transformer un membre)** : pour la seconde égalité, on développe puis on réduit le membre de gauche : $5(x - 1) + 2x = 5x - 5 + 2x = 7x - 5$.",
          "**Étape 3 (Conclure)** : on obtient exactement le membre de droite, quelle que soit la valeur de $x$ : c'est une **identité**."
        ]
      },
      {
        "title": "Méthode : Mettre un problème en équation",
        "example": "La somme de trois nombres entiers consécutifs est égale à 84. Quels sont ces nombres ?",
        "steps": [
          "**Étape 1 (Choix de l'inconnue)** : on note $n$ le plus petit des trois nombres ; les suivants sont $n + 1$ et $n + 2$.",
          "**Étape 2 (Mise en équation)** : $n + (n + 1) + (n + 2) = 84$, soit $3n + 3 = 84$.",
          "**Étape 3 (Résolution)** : $3n = 84 - 3 = 81$, donc $n = \\dfrac{81}{3} = 27$.",
          "**Étape 4 (Vérification et conclusion)** : $27 + 28 + 29 = 84$. Les trois nombres sont 27, 28 et 29."
        ]
      },
      {
        "title": "Pour aller plus loin — Méthode : Développer et réduire avec la double distributivité",
        "example": "Développer et réduire $E = (2x + 3)(x - 4)$, puis vérifier avec $x = 1$.",
        "steps": [
          "**Étape 1 (Distribuer)** : $E = 2x \\times x + 2x \\times (-4) + 3 \\times x + 3 \\times (-4)$.",
          "**Étape 2 (Calculer chaque produit)** : $E = 2x^2 - 8x + 3x - 12$.",
          "**Étape 3 (Réduire)** : $E = 2x^2 - 5x - 12$.",
          "**Vérification** pour $x = 1$ : forme de départ $(2 + 3)(1 - 4) = 5 \\times (-3) = -15$ ; forme développée $2 - 5 - 12 = -15$. Les résultats concordent."
        ]
      }
    ],
    "traps": [
      "⚠️ Se tromper d'opération : dans $3x + 5 = 11$, on soustrait $5$ aux deux membres, ce qui donne $3x = 11 - 5 = 6$, pas $11 + 5$. Puis on divise les deux membres par $3$ : $x = 6 \\div 3$, et non $6 - 3$ !",
      "⚠️ Dans un signe $-$ devant une parenthèse, oublier de changer le 2e terme : $5 - (2x - 3) = 5 - 2x + 3$ et NON $5 - 2x - 3$ !",
      "⚠️ Ne pas confondre $3x$ (multiplication $3 \\times x$) et $3+x$ (addition).",
      "⚠️ Croire qu'une expression est un produit parce qu'elle contient une multiplication : $2x + 5$ est une somme, car la dernière opération à effectuer est l'addition.",
      "⚠️ Conclure qu'une égalité est une identité parce qu'elle est vraie pour une ou deux valeurs : il faut le prouver par le calcul. À l'inverse, un seul contre-exemple suffit pour montrer que ce n'en est pas une."
    ],
    "flashcards": [
      {
        "q": "Que donne le développement de $-4(2x - 5)$ ?",
        "a": "$-8x + 20$ (car $(-4) \\times 2x = -8x$ et $(-4) \\times (-5) = +20$)."
      },
      {
        "q": "Comment simplifier l'expression $-(3x - 7)$ ?",
        "a": "$-3x + 7$ (le signe $-$ devant la parenthèse inverse le signe de chaque terme)."
      },
      {
        "q": "Résoudre l'équation $4x = -20$.",
        "a": "$x = \\frac{-20}{4} = -5$."
      },
      {
        "q": "Résoudre l'équation $x - 8 = -3$.",
        "a": "$x = -3 + 8 = 5$."
      },
      {
        "q": "Comment vérifie-t-on qu'un nombre est solution d'une équation ?",
        "a": "On remplace l'inconnue par ce nombre dans chaque membre séparément et on vérifie si les deux résultats sont égaux."
      },
      {
        "q": "Pour aller plus loin : développer $(x + 2)(x + 5)$.",
        "a": "$x^2 + 5x + 2x + 10 = x^2 + 7x + 10$."
      },
      {
        "q": "Résoudre $3(x - 2) = 5x + 4$.",
        "a": "$3x - 6 = 5x + 4 \\iff -2x = 10 \\iff x = -5$ (vérification : $3 \\times (-7) = -21$ et $5 \\times (-5) + 4 = -21$)."
      },
      {
        "q": "L'expression $3(x + 4)$ est-elle une somme ou un produit ?",
        "a": "Un produit : la dernière opération à effectuer est la multiplication par $3$."
      },
      {
        "q": "Qu'est-ce qu'une identité ?",
        "a": "Une égalité vraie pour toutes les valeurs de la lettre, par exemple $2(x + 3) = 2x + 6$."
      },
      {
        "q": "Une égalité vraie pour $x = 2$ est-elle forcément une identité ?",
        "a": "Non. Par exemple, $x + x = x^2$ est vraie pour $x = 2$, mais fausse pour $x = 3$ : $x = 3$ est un contre-exemple."
      }
    ]
  },
  "4G1": {
    "title": "4G1 : Théorème de Pythagore, réciproque et contraposée",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Identifier l'hypoténuse comme le plus grand côté face à l'angle droit.",
      "Appliquer le théorème de Pythagore direct pour calculer la longueur de l'hypoténuse.",
      "Appliquer le théorème de Pythagore direct pour calculer la longueur d'un côté de l'angle droit.",
      "Rédiger rigoureusement la réciproque du théorème de Pythagore pour démontrer qu'un triangle est rectangle.",
      "Pour aller plus loin (non exigible en 4e) : rédiger la contraposée pour démontrer qu'un triangle n'est pas rectangle."
    ],
    "keyPoints": [
      {
        "title": "1. Le Théorème direct de Pythagore (Calcul de longueurs)",
        "content": "Dans un **triangle rectangle**, le carré de la longueur de l'hypoténuse est égal à la somme des carrés des longueurs des deux autres côtés :\n$$\\text{Si } ABC \\text{ est rectangle en } A, \\quad \\text{alors } BC^2 = AB^2 + AC^2$$\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 280 160\" width=\"280\" height=\"160\" style=\"max-width:280px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"50,130 230,130 50,25\" fill=\"rgba(59, 130, 246, 0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <path d=\"M 50 116 L 64 116 L 64 130\" fill=\"none\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <text x=\"35\" y=\"142\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n    <text x=\"238\" y=\"142\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n    <text x=\"35\" y=\"22\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n    <text x=\"145\" y=\"70\" transform=\"rotate(-30 145 70)\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--primary, #2563eb)\">Hypoténuse [BC]</text>\n    <text x=\"140\" y=\"148\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" fill=\"var(--text-muted, #64748b)\">côté [AB]</text>\n    <text x=\"18\" y=\"80\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" fill=\"var(--text-muted, #64748b)\">côté [AC]</text>\n  </svg>\n</div>\n\n• **Calculer l'hypoténuse** : $BC = \\sqrt{AB^2 + AC^2}$.\n• **Calculer un côté de l'angle droit** : $AB^2 = BC^2 - AC^2 \\implies AB = \\sqrt{BC^2 - AC^2}$.\n\n*Pourquoi ce théorème est-il vrai ?* Une démonstration par découpage est donnée à la section 5."
      },
      {
        "title": "2. Réciproque du théorème de Pythagore (Prouver qu'un triangle est rectangle)",
        "content": "**Réciproque (admise)**. Soit $[BC]$ le **plus grand côté** d'un triangle $ABC$ :\n$$\\text{Si } BC^2 = AB^2 + AC^2, \\quad \\text{alors le triangle } ABC \\text{ est rectangle en } A.$$\n*Méthode de rédaction* : On calcule $BC^2$ d'un côté, et $AB^2 + AC^2$ de l'autre côté **séparément** sans jamais poser l'égalité au départ !"
      },
      {
        "title": "3. Pour aller plus loin : contraposée du théorème de Pythagore (prouver qu'un triangle n'est pas rectangle)",
        "content": "Soit $[BC]$ le plus grand côté d'un triangle $ABC$ :\n$$\\text{Si } BC^2 \\neq AB^2 + AC^2, \\quad \\text{alors le triangle } ABC \\text{ N'EST PAS rectangle.}$$\n(On dit alors : d'après la contraposée du théorème de Pythagore).\n\n*Pourquoi ?* Si le triangle était rectangle, son hypoténuse serait son plus grand côté $[BC]$, et le théorème de Pythagore donnerait $BC^2 = AB^2 + AC^2$. Or cette égalité est fausse : le triangle n'est donc pas rectangle."
      },
      {
        "title": "4. Valeur exacte vs Valeur arrondie",
        "content": "• La **valeur exacte** conserve le symbole radical : $BC = \\sqrt{61}$ cm.\n• La **valeur arrondie** est donnée avec le symbole $\\approx$ selon la précision demandée (au dixième près : $BC \\approx 7{,}8$ cm).\n• Ne jamais arrondir au cours des étapes intermédiaires de calcul !"
      },
      {
        "title": "5. Pourquoi le théorème est vrai : démonstration par découpage",
        "content": "On part d'un triangle rectangle dont les côtés de l'angle droit mesurent $a$ et $b$ et dont l'hypoténuse mesure $c$. On construit **deux carrés identiques**, de côté $a + b$, et on place dans chacun **quatre copies** de ce triangle, de deux façons différentes.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\"><svg class=\"geo-svg-figure\" viewBox=\"0 0 340 165\" width=\"340\" height=\"165\" style=\"max-width:340px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Deux carrés de côté a + b découpés de deux façons avec quatre triangles rectangles identiques\"><polygon points=\"30,24 75,24 30,99\" fill=\"rgba(59, 130, 246, 0.18)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\" stroke-linejoin=\"round\" /><polygon points=\"75,24 150,24 150,69\" fill=\"rgba(59, 130, 246, 0.18)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\" stroke-linejoin=\"round\" /><polygon points=\"150,69 150,144 105,144\" fill=\"rgba(59, 130, 246, 0.18)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\" stroke-linejoin=\"round\" /><polygon points=\"105,144 30,144 30,99\" fill=\"rgba(59, 130, 246, 0.18)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\" stroke-linejoin=\"round\" /><polygon points=\"75,24 150,69 105,144 30,99\" fill=\"rgba(234, 88, 12, 0.18)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\" stroke-linejoin=\"round\" /><text x=\"52.5\" y=\"18\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"600\" font-style=\"italic\" fill=\"var(--text-main, #0f172a)\">a</text><text x=\"112.5\" y=\"18\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"600\" font-style=\"italic\" fill=\"var(--text-main, #0f172a)\">b</text><text x=\"159\" y=\"50.5\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"600\" font-style=\"italic\" fill=\"var(--text-main, #0f172a)\">a</text><text x=\"159\" y=\"110.5\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"600\" font-style=\"italic\" fill=\"var(--text-main, #0f172a)\">b</text><text x=\"127.5\" y=\"159\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"600\" font-style=\"italic\" fill=\"var(--text-main, #0f172a)\">a</text><text x=\"67.5\" y=\"159\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"600\" font-style=\"italic\" fill=\"var(--text-main, #0f172a)\">b</text><text x=\"21\" y=\"65.5\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"600\" font-style=\"italic\" fill=\"var(--text-main, #0f172a)\">b</text><text x=\"21\" y=\"125.5\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"600\" font-style=\"italic\" fill=\"var(--text-main, #0f172a)\">a</text><text x=\"106\" y=\"61\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"600\" font-style=\"italic\" fill=\"var(--primary, #2563eb)\">c</text><text x=\"90\" y=\"92\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"17\" font-weight=\"700\" font-style=\"italic\" fill=\"var(--text-main, #0f172a)\">c²</text><polygon points=\"190,24 235,24 235,69 190,69\" fill=\"rgba(234, 88, 12, 0.18)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\" stroke-linejoin=\"round\" /><polygon points=\"235,69 310,69 310,144 235,144\" fill=\"rgba(234, 88, 12, 0.18)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\" stroke-linejoin=\"round\" /><polygon points=\"235,24 310,24 235,69\" fill=\"rgba(59, 130, 246, 0.18)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\" stroke-linejoin=\"round\" /><polygon points=\"310,24 310,69 235,69\" fill=\"rgba(59, 130, 246, 0.18)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\" stroke-linejoin=\"round\" /><polygon points=\"190,69 235,69 190,144\" fill=\"rgba(59, 130, 246, 0.18)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\" stroke-linejoin=\"round\" /><polygon points=\"235,69 235,144 190,144\" fill=\"rgba(59, 130, 246, 0.18)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\" stroke-linejoin=\"round\" /><text x=\"212.5\" y=\"18\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"600\" font-style=\"italic\" fill=\"var(--text-main, #0f172a)\">a</text><text x=\"272.5\" y=\"18\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"600\" font-style=\"italic\" fill=\"var(--text-main, #0f172a)\">b</text><text x=\"181\" y=\"50.5\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"600\" font-style=\"italic\" fill=\"var(--text-main, #0f172a)\">a</text><text x=\"181\" y=\"110.5\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"600\" font-style=\"italic\" fill=\"var(--text-main, #0f172a)\">b</text><text x=\"212.5\" y=\"52.5\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"16\" font-weight=\"700\" font-style=\"italic\" fill=\"var(--text-main, #0f172a)\">a²</text><text x=\"272.5\" y=\"112.5\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"17\" font-weight=\"700\" font-style=\"italic\" fill=\"var(--text-main, #0f172a)\">b²</text></svg></div>\n\n• **Dans le carré de gauche**, les quatre triangles occupent les coins. Il reste au centre un quadrilatère dont les quatre côtés mesurent $c$. Ses angles sont droits : en chaque sommet, trois angles forment un angle plat de $180^\\circ$ ; deux d'entre eux sont les deux angles aigus du triangle rectangle, dont la somme vaut $90^\\circ$ ; le troisième vaut donc $180^\\circ - 90^\\circ = 90^\\circ$. Ce quadrilatère est un carré, d'aire $c^2$.\n• **Dans le carré de droite**, les quatre triangles forment deux rectangles de côtés $a$ et $b$. Il reste deux carrés : l'un de côté $a$, d'aire $a^2$, l'autre de côté $b$, d'aire $b^2$.\n\nLes deux grands carrés ont la même aire et on retire de chacun les quatre mêmes triangles : ce qui reste a donc la même aire. Ainsi $c^2 = a^2 + b^2$ : le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés."
      },
      {
        "title": "À retenir",
        "content": "• L'**hypoténuse** est le côté opposé à l'angle droit ; c'est le plus long côté.\n• **Théorème** (on sait que le triangle est rectangle) : on calcule une longueur.\n• **Réciproque** (on connaît les trois longueurs, égalité vérifiée) : le triangle est rectangle.\n• **Pour aller plus loin** : si l'égalité est fausse, le triangle n'est pas rectangle (**contraposée**).\n• On calcule toujours séparément le carré du plus grand côté et la somme des deux autres carrés."
      }
    ],
    "methods": [
      {
        "title": "Modèle de rédaction : Calculer l'hypoténuse (Théorème direct)",
        "example": "Soit un triangle ABC rectangle en A tel que AB = 6 cm et AC = 8 cm. Calculer la longueur de l'hypoténuse BC.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.8rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 260 140\" width=\"260\" height=\"140\" style=\"max-width:260px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"45,115 215,115 45,25\" fill=\"rgba(37, 99, 235, 0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <path d=\"M 45 103 L 57 103 L 57 115\" fill=\"none\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <text x=\"32\" y=\"126\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n    <text x=\"222\" y=\"126\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n    <text x=\"32\" y=\"22\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n    <text x=\"130\" y=\"132\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">AB = 6 cm</text>\n    <text x=\"18\" y=\"72\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">AC = 8 cm</text>\n    <text x=\"138\" y=\"62\" transform=\"rotate(-28 138 62)\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">BC = ? (10 cm)</text>\n  </svg>\n</div>",
        "steps": [
          "**1. Énoncer les hypothèses** : Dans le triangle $ABC$ rectangle en $A$,",
          "**2. Citer le théorème** : d'après le **théorème de Pythagore** :",
          "**3. Écrire l'égalité** : $BC^2 = AB^2 + AC^2$",
          "**4. Remplacer et calculer** : $BC^2 = 6^2 + 8^2 = 36 + 64 = 100$",
          "**5. Conclure avec la racine carrée** : Comme une longueur est positive ($BC > 0$) :\n$BC = \\sqrt{100} = 10\\text{ cm}$."
        ]
      },
      {
        "title": "Modèle de rédaction : Calculer un côté de l'angle droit (Théorème direct)",
        "example": "Soit un triangle DEF rectangle en E tel que DE = 6 cm et DF = 10 cm. Calculer la longueur EF.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.8rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 260 140\" width=\"260\" height=\"140\" style=\"max-width:260px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"45,115 205,115 45,35\" fill=\"rgba(37, 99, 235, 0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <path d=\"M 45 103 L 57 103 L 57 115\" fill=\"none\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <text x=\"32\" y=\"126\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">E</text>\n    <text x=\"212\" y=\"126\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">F</text>\n    <text x=\"32\" y=\"30\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">D</text>\n    <text x=\"18\" y=\"78\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">DE = 6 cm</text>\n    <text x=\"135\" y=\"68\" transform=\"rotate(-27 135 68)\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">Hypoténuse DF = 10 cm</text>\n    <text x=\"125\" y=\"132\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">EF = ? (8 cm)</text>\n  </svg>\n</div>",
        "steps": [
          "**1. Énoncer les hypothèses** : Dans le triangle $DEF$ rectangle en $E$,",
          "**2. Citer le théorème** : d'après le **théorème de Pythagore** :",
          "**3. Écrire l'égalité** : $DF^2 = DE^2 + EF^2$",
          "**4. Isoler le côté cherché et calculer** : $EF^2 = DF^2 - DE^2 = 10^2 - 6^2 = 100 - 36 = 64$",
          "**5. Conclure avec la racine carrée** : Comme une longueur est positive ($EF > 0$) :\n$EF = \\sqrt{64} = 8\\text{ cm}$."
        ]
      },
      {
        "title": "Modèle de rédaction : Réciproque de Pythagore (Démontrer qu'un triangle est rectangle)",
        "example": "Soit un triangle RST tel que RS = 4,5 cm, ST = 6 cm et RT = 7,5 cm. Le triangle RST est-il rectangle ?\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.8rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 260 140\" width=\"260\" height=\"140\" style=\"max-width:260px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"45,115 205,115 45,35\" fill=\"rgba(16, 185, 129, 0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <path d=\"M 45 103 L 57 103 L 57 115\" fill=\"none\" stroke=\"#d97706\" stroke-width=\"1.8\" stroke-dasharray=\"3 2\" />\n    <text x=\"62\" y=\"108\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#d97706\">?</text>\n    <text x=\"32\" y=\"126\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">S</text>\n    <text x=\"212\" y=\"126\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">T</text>\n    <text x=\"32\" y=\"30\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">R</text>\n    <text x=\"125\" y=\"132\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">ST = 6 cm</text>\n    <text x=\"18\" y=\"78\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">RS = 4,5 cm</text>\n    <text x=\"135\" y=\"68\" transform=\"rotate(-27 135 68)\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#10b981\">RT = 7,5 cm (plus grand)</text>\n  </svg>\n</div>",
        "steps": [
          "**1. Identifier le plus grand côté** : Dans le triangle $RST$, le plus grand côté est $[RT]$.",
          "**2. Calculer séparément** :\n• D'une part : $RT^2 = 7{,}5^2 = 56{,}25$.\n• D'autre part : $RS^2 + ST^2 = 4{,}5^2 + 6^2 = 20{,}25 + 36 = 56{,}25$.",
          "**3. Conclure rigoureusement** : On constate que $RT^2 = RS^2 + ST^2$. D'après la **réciproque du théorème de Pythagore**, le triangle $RST$ est rectangle en $S$."
        ]
      },
      {
        "title": "Pour aller plus loin : modèle de rédaction de la contraposée de Pythagore (démontrer qu'un triangle n'est pas rectangle)",
        "example": "Soit un triangle KLM tel que KL = 5 cm, LM = 7 cm et KM = 9 cm. Le triangle KLM est-il rectangle ?\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.8rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 260 140\" width=\"260\" height=\"140\" style=\"max-width:260px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"45,115 205,115 48,38\" fill=\"rgba(220, 38, 38, 0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <path d=\"M 45 103 A 12 12 0 0 1 57 115\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"3 2\" />\n    <text x=\"54\" y=\"106\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">≠ 90° ?</text>\n    <text x=\"32\" y=\"126\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">L</text>\n    <text x=\"212\" y=\"126\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">M</text>\n    <text x=\"38\" y=\"32\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">K</text>\n    <text x=\"18\" y=\"78\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">KL = 5 cm</text>\n    <text x=\"125\" y=\"132\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">LM = 7 cm</text>\n    <text x=\"135\" y=\"68\" transform=\"rotate(-26 135 68)\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#d97706\">KM = 9 cm (plus grand)</text>\n  </svg>\n</div>",
        "steps": [
          "**1. Identifier le plus grand côté** : Dans le triangle $KLM$, le plus grand côté est $[KM]$.",
          "**2. Calculer séparément** :\n• D'une part : $KM^2 = 9^2 = 81$.\n• D'autre part : $KL^2 + LM^2 = 5^2 + 7^2 = 25 + 49 = 74$.",
          "**3. Conclure rigoureusement** : On constate que $KM^2 \\neq KL^2 + LM^2$. D'après la **contraposée du théorème de Pythagore**, le triangle $KLM$ **n'est pas rectangle**."
        ]
      }
    ],
    "traps": [
      "⚠️ Poser l'égalité dès la 1re ligne dans la réciproque : écrire d'emblée $RT^2 = RS^2 + ST^2$ est faux tant qu'on ne l'a pas calculé !",
      "⚠️ Pour calculer un côté de l'angle droit, il faut SOUSTRAIRE les carrés et non les additionner : $AB^2 = BC^2 - AC^2$.",
      "⚠️ Oublier d'extraire la racine carrée $\\sqrt{}$ à la fin : $BC^2 = 25 \\implies BC = 5$, pas $25$ !",
      "⚠️ Appliquer le théorème de Pythagore dans un triangle dont on ne sait pas qu'il est rectangle : il faut d'abord le justifier (codage, énoncé, réciproque)."
    ],
    "flashcards": [
      {
        "q": "Comment nomme-t-on le côté opposé à l'angle droit dans un triangle rectangle ?",
        "a": "L'**hypoténuse** (c'est toujours le plus grand côté du triangle rectangle)."
      },
      {
        "q": "Si un triangle $EFG$ est rectangle en $E$, quelle est l'égalité de Pythagore ?",
        "a": "$FG^2 = EF^2 + EG^2$ (l'hypoténuse est le côté $[FG]$ face à l'angle droit $E$)."
      },
      {
        "q": "À quoi sert la réciproque du théorème de Pythagore ?",
        "a": "Elle sert à **démontrer qu'un triangle est rectangle** quand on connaît les longueurs de ses 3 côtés."
      },
      {
        "q": "Dans un triangle rectangle, l'hypoténuse mesure 10 cm et un côté mesure 6 cm. Que vaut le 3e côté ?",
        "a": "8 cm, car $10^2 - 6^2 = 100 - 36 = 64$ et $\\sqrt{64} = 8$ cm."
      },
      {
        "q": "Pour aller plus loin : que conclut-on si le carré du plus grand côté n'est pas égal à la somme des carrés des deux autres ?",
        "a": "D'après la **contraposée du théorème de Pythagore**, le triangle **n'est pas rectangle**."
      },
      {
        "q": "Un triangle a pour côtés 5 cm, 12 cm et 13 cm. Est-il rectangle ?",
        "a": "Oui : $13^2 = 169$ et $5^2 + 12^2 = 25 + 144 = 169$ ; d'après la réciproque du théorème de Pythagore, il est rectangle (l'angle droit est opposé au côté de 13 cm)."
      }
    ]
  },
  "4G2": {
    "title": "4G2 : Triangle rectangle, cercle circonscrit et droite des milieux",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Utiliser le théorème de Thalès dans un triangle (triangles emboîtés) pour calculer une longueur.",
      "Utiliser la réciproque du théorème de Thalès (triangles emboîtés) pour démontrer que deux droites sont parallèles.",
      "Démontrer que deux triangles sont égaux à l'aide d'un cas d'égalité, puis en déduire des égalités de longueurs ou d'angles.",
      "Connaître le cosinus d'un angle aigu dans un triangle rectangle et savoir que sa valeur ne dépend que de l'angle.",
      "Utiliser le cosinus pour calculer une longueur ou la mesure d'un angle.",
      "Pour aller plus loin (non exigible en 4e) : caractériser le triangle rectangle par son cercle circonscrit (l'un de ses côtés est un diamètre du cercle).",
      "Pour aller plus loin (non exigible en 4e) : calculer la longueur de la médiane issue de l'angle droit, qui mesure la moitié de l'hypoténuse.",
      "Pour aller plus loin (non exigible en 4e) : appliquer le 1er théorème de la droite des milieux pour prouver un parallélisme.",
      "Pour aller plus loin (non exigible en 4e) : appliquer le 2e théorème de la droite des milieux pour calculer une longueur ($IJ = BC / 2$).",
      "Pour aller plus loin (non exigible en 4e) : appliquer la réciproque de la droite des milieux pour prouver qu'un point est le milieu d'un segment."
    ],
    "keyPoints": [
      {
        "title": "1. Théorème de Thalès (triangles emboîtés)",
        "content": "**Théorème de Thalès (admis)**. Dans un triangle $ABC$, si $M \\in [AB]$, $N \\in [AC]$ et si les droites $(MN)$ et $(BC)$ sont **parallèles**, alors le triangle $AMN$ est une réduction du triangle $ABC$ et :\n$$\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC}$$\nLe théorème de la droite des milieux (section 9, pour aller plus loin) en est le cas particulier où ces trois rapports valent $\\dfrac{1}{2}$.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 300 200\" width=\"300\" height=\"200\" style=\"max-width:300px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Triangle ABC avec M sur [AB], N sur [AC] et (MN) parallèle à (BC)\">\n  <polygon points=\"150,20 40,170 260,170\" fill=\"rgba(37, 99, 235, 0.06)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n  <line x1=\"106\" y1=\"80\" x2=\"194\" y2=\"80\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2.5\" />\n  <line x1=\"40\" y1=\"170\" x2=\"260\" y2=\"170\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2.5\" />\n  <circle cx=\"106\" cy=\"80\" r=\"3\" fill=\"var(--primary, #2563eb)\" /><circle cx=\"194\" cy=\"80\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <text x=\"150\" y=\"14\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n  <text x=\"28\" y=\"184\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text><text x=\"262\" y=\"184\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n  <text x=\"92\" y=\"80\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">M</text><text x=\"200\" y=\"80\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">N</text>\n  <text x=\"150\" y=\"74\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">(MN) // (BC)</text>\n</svg>\n</div>\n"
      },
      {
        "title": "2. Réciproque du théorème de Thalès (triangles emboîtés)",
        "content": "Cette fois, on ne sait pas si les droites sont parallèles : on veut le **démontrer** à partir de longueurs.\n\n**Réciproque du théorème de Thalès (admise)**. Dans un triangle $ABC$, si $M \\in [AB]$, $N \\in [AC]$ et si\n$$\\frac{AM}{AB} = \\frac{AN}{AC}$$\nalors les droites $(MN)$ et $(BC)$ sont **parallèles**.\n\n• Comme $M$ et $N$ sont sur les côtés du triangle, les points $A$, $M$, $B$ d'une part et $A$, $N$, $C$ d'autre part sont bien alignés dans le même ordre : cette condition est indispensable.\n• On calcule les deux quotients **séparément**, puis on les compare. Le quotient $\\dfrac{MN}{BC}$ n'entre pas dans cette vérification.\n• Si les deux quotients sont **différents**, les droites $(MN)$ et $(BC)$ ne sont pas parallèles : si elles l'étaient, le théorème de Thalès donnerait l'égalité de ces quotients.\n\nLe 1er théorème de la droite des milieux en est le cas particulier où les deux quotients valent $\\dfrac{1}{2}$."
      },
      {
        "title": "3. Triangles égaux et cas d'égalité",
        "content": "Deux triangles sont **égaux** lorsqu'ils sont superposables : leurs côtés ont deux à deux la même longueur et leurs angles deux à deux la même mesure. Les sommets qui se correspondent sont dits **homologues**, de même que les côtés et les angles qui se correspondent. Dire que $ABC$ et $DEF$ sont égaux, dans l'ordre des sommets homologues, signifie :\n$$AB = DE, \\quad BC = EF, \\quad AC = DF, \\quad \\widehat{A} = \\widehat{D}, \\quad \\widehat{B} = \\widehat{E}, \\quad \\widehat{C} = \\widehat{F}$$\nPour démontrer que deux triangles sont égaux, il n'est pas nécessaire de vérifier ces six égalités : **trois suffisent, à condition d'être bien choisies**. Ce sont les **cas d'égalité** (admis) :\n• **Cas 1 : trois côtés.** Si deux triangles ont leurs trois côtés respectivement de même longueur, alors ils sont égaux.\n• **Cas 2 : un angle compris entre deux côtés.** Si deux triangles ont un angle de même mesure **compris** entre deux côtés respectivement de même longueur, alors ils sont égaux.\n• **Cas 3 : un côté compris entre deux angles.** Si deux triangles ont un côté de même longueur **compris** entre deux angles respectivement de même mesure, alors ils sont égaux.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\"><svg class=\"geo-svg-figure\" viewBox=\"0 0 340 356\" width=\"340\" height=\"356\" style=\"max-width:340px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Trois paires de triangles ABC et DEF, codées selon les trois cas d'égalité : trois côtés de même longueur ; un angle de même mesure compris entre deux côtés de même longueur ; un côté de même longueur compris entre deux angles de même mesure.\"><text x=\"170\" y=\"26\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"var(--text-main, #334155)\">Cas 1 : trois côtés</text><polygon points=\"58,50 30,96 142,96\" fill=\"rgba(59,130,246,0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\"/><line x1=\"38.9\" y1=\"69.9\" x2=\"49.1\" y2=\"76.1\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><line x1=\"83.5\" y1=\"102\" x2=\"83.5\" y2=\"90\" stroke=\"#2563eb\" stroke-width=\"1.8\"/><line x1=\"88.5\" y1=\"102\" x2=\"88.5\" y2=\"90\" stroke=\"#2563eb\" stroke-width=\"1.8\"/><line x1=\"92.7\" y1=\"75.9\" x2=\"98.5\" y2=\"65.3\" stroke=\"#059669\" stroke-width=\"1.8\"/><line x1=\"97.1\" y1=\"78.3\" x2=\"102.9\" y2=\"67.7\" stroke=\"#059669\" stroke-width=\"1.8\"/><line x1=\"101.5\" y1=\"80.7\" x2=\"107.3\" y2=\"70.1\" stroke=\"#059669\" stroke-width=\"1.8\"/><text x=\"52.3\" y=\"44.6\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"var(--text-main, #334155)\">A</text><text x=\"19.5\" y=\"103.4\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"var(--text-main, #334155)\">B</text><text x=\"152.7\" y=\"102.5\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"var(--text-main, #334155)\">C</text><polygon points=\"211.4,56.7 194.2,107.7 303.5,83.2\" fill=\"rgba(59,130,246,0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\"/><line x1=\"197.1\" y1=\"80.3\" x2=\"208.5\" y2=\"84.1\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><line x1=\"247.7\" y1=\"101.9\" x2=\"245.1\" y2=\"90.2\" stroke=\"#2563eb\" stroke-width=\"1.8\"/><line x1=\"252.6\" y1=\"100.8\" x2=\"249.9\" y2=\"89.1\" stroke=\"#2563eb\" stroke-width=\"1.8\"/><line x1=\"251\" y1=\"74.3\" x2=\"254.3\" y2=\"62.8\" stroke=\"#059669\" stroke-width=\"1.8\"/><line x1=\"255.8\" y1=\"75.7\" x2=\"259.1\" y2=\"64.2\" stroke=\"#059669\" stroke-width=\"1.8\"/><line x1=\"260.6\" y1=\"77.1\" x2=\"263.9\" y2=\"65.6\" stroke=\"#059669\" stroke-width=\"1.8\"/><text x=\"203.8\" y=\"52.8\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"var(--text-main, #334155)\">D</text><text x=\"184.7\" y=\"117.3\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"var(--text-main, #334155)\">E</text><text x=\"314.5\" y=\"87.4\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"var(--text-main, #334155)\">F</text><text x=\"170\" y=\"144\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"var(--text-main, #334155)\">Cas 2 : un angle compris entre deux côtés</text><polygon points=\"58,168 30,214 142,214\" fill=\"rgba(59,130,246,0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\"/><line x1=\"38.9\" y1=\"187.9\" x2=\"49.1\" y2=\"194.1\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><line x1=\"94.9\" y1=\"195.1\" x2=\"100.7\" y2=\"184.5\" stroke=\"#2563eb\" stroke-width=\"1.8\"/><line x1=\"99.3\" y1=\"197.5\" x2=\"105.1\" y2=\"186.9\" stroke=\"#2563eb\" stroke-width=\"1.8\"/><path d=\"M 50.2 180.8 A 15 15 0 0 0 71.2 175.2\" fill=\"none\" stroke=\"#059669\" stroke-width=\"2\"/><text x=\"52.3\" y=\"162.6\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"var(--text-main, #334155)\">A</text><text x=\"19.5\" y=\"221.4\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"var(--text-main, #334155)\">B</text><text x=\"152.7\" y=\"220.5\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"var(--text-main, #334155)\">C</text><polygon points=\"211.4,174.7 194.2,225.7 303.5,201.2\" fill=\"rgba(59,130,246,0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\"/><line x1=\"197.1\" y1=\"198.3\" x2=\"208.5\" y2=\"202.1\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><line x1=\"253.4\" y1=\"193\" x2=\"256.7\" y2=\"181.5\" stroke=\"#2563eb\" stroke-width=\"1.8\"/><line x1=\"258.2\" y1=\"194.4\" x2=\"261.5\" y2=\"182.9\" stroke=\"#2563eb\" stroke-width=\"1.8\"/><path d=\"M 206.6 188.9 A 15 15 0 0 0 225.8 178.8\" fill=\"none\" stroke=\"#059669\" stroke-width=\"2\"/><text x=\"203.8\" y=\"170.8\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"var(--text-main, #334155)\">D</text><text x=\"184.7\" y=\"235.3\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"var(--text-main, #334155)\">E</text><text x=\"314.5\" y=\"205.4\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"var(--text-main, #334155)\">F</text><text x=\"170\" y=\"262\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"var(--text-main, #334155)\">Cas 3 : un côté compris entre deux angles</text><polygon points=\"58,286 30,332 142,332\" fill=\"rgba(59,130,246,0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\"/><line x1=\"86\" y1=\"338\" x2=\"86\" y2=\"326\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><path d=\"M 37.8 319.2 A 15 15 0 0 1 45 332\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/><path d=\"M 119.2 319.5 A 26 26 0 0 0 116 332\" fill=\"none\" stroke=\"#059669\" stroke-width=\"2\"/><text x=\"52.3\" y=\"280.6\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"var(--text-main, #334155)\">A</text><text x=\"19.5\" y=\"339.4\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"var(--text-main, #334155)\">B</text><text x=\"152.7\" y=\"338.5\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"var(--text-main, #334155)\">C</text><polygon points=\"211.4,292.7 194.2,343.7 303.5,319.2\" fill=\"rgba(59,130,246,0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\"/><line x1=\"250.1\" y1=\"337.3\" x2=\"247.5\" y2=\"325.6\" stroke=\"#dc2626\" stroke-width=\"1.8\"/><path d=\"M 199 329.5 A 15 15 0 0 1 208.8 340.4\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2\"/><path d=\"M 278.5 312 A 26 26 0 0 0 278.1 324.9\" fill=\"none\" stroke=\"#059669\" stroke-width=\"2\"/><text x=\"203.8\" y=\"288.8\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"var(--text-main, #334155)\">D</text><text x=\"184.7\" y=\"353.3\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"var(--text-main, #334155)\">E</text><text x=\"314.5\" y=\"323.4\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"var(--text-main, #334155)\">F</text></svg></div>\n\n**Lien avec les constructions** : ces trois cas sont exactement les données qui permettent de construire un triangle de façon unique, à sa position près : ses trois longueurs ; deux longueurs et l'angle qu'elles forment ; une longueur et les deux angles placés à ses extrémités.\n\n**Une fois deux triangles reconnus égaux**, on en déduit les égalités qu'on ne connaissait pas : les côtés homologues ont la même longueur et les angles homologues la même mesure.\n\n**Ce qui ne suffit pas** :\n• Trois angles de même mesure : un triangle et son agrandissement ont les mêmes angles, sans être égaux.\n• Deux côtés de même longueur et un angle de même mesure qui **n'est pas compris** entre eux : on peut parfois construire deux triangles différents avec ces données.\n\n*Remarque* : si deux triangles ont deux angles de même mesure, leurs troisièmes angles ont aussi la même mesure, car la somme des angles d'un triangle vaut $180^\\circ$. Un côté de même longueur et deux angles de même mesure, placés de la même façon dans les deux triangles, permettent donc de se ramener au cas 3."
      },
      {
        "title": "4. Cosinus d'un angle aigu",
        "content": "Dans un triangle rectangle, on nomme les côtés **par rapport à un angle aigu** :\n• l'**hypoténuse** est le côté opposé à l'angle droit ;\n• le **côté adjacent** à l'angle est l'autre côté qui forme cet angle ;\n• le **côté opposé** à l'angle est celui qui ne touche pas son sommet.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:12px 0;\"><svg class=\"geo-svg-figure\" viewBox=\"0 0 340 180\" width=\"340\" height=\"180\" style=\"max-width:340px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Triangle ABC rectangle en B : par rapport à l'angle en A, AB est le côté adjacent, BC le côté opposé et AC l'hypoténuse\"><polygon points=\"40,140 230,140 230,40\" fill=\"rgba(59, 130, 246, 0.05)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" /><line x1=\"40\" y1=\"140\" x2=\"230\" y2=\"140\" stroke=\"#2563eb\" stroke-width=\"3\" stroke-linecap=\"round\" /><line x1=\"40\" y1=\"140\" x2=\"230\" y2=\"40\" stroke=\"#ef4444\" stroke-width=\"3\" stroke-linecap=\"round\" /><path d=\"M 218,140 L 218,128 L 230,128\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" /><path d=\"M 72,140 A 32 32 0 0 0 68.3,125.1\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"2\" /><text x=\"24\" y=\"156\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text><text x=\"236\" y=\"156\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text><text x=\"236\" y=\"36\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text><text x=\"135\" y=\"160\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#2563eb\">côté adjacent</text><text x=\"238\" y=\"96\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">côté opposé</text><text x=\"120\" y=\"78\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#ef4444\">hypoténuse</text></svg></div>\n\n**Définition.** Dans un triangle rectangle, le **cosinus** d'un angle aigu est le quotient de la longueur du côté adjacent à cet angle par la longueur de l'hypoténuse :\n$$\\cos(\\widehat{BAC}) = \\frac{\\text{côté adjacent à } \\widehat{BAC}}{\\text{hypoténuse}} = \\frac{AB}{AC}$$\n• C'est un quotient de deux longueurs : il n'a pas d'unité.\n• L'hypoténuse est le plus grand côté, donc le cosinus d'un angle aigu est toujours compris entre $0$ et $1$.\n• Tu retrouveras le cosinus en 3e, avec le sinus et la tangente."
      },
      {
        "title": "5. Le cosinus ne dépend que de l'angle",
        "content": "On considère un triangle $ABC$ rectangle en $B$, un point $D$ de $[AB]$ et un point $E$ de $[AC]$ tels que le triangle $ADE$ soit rectangle en $D$. Les deux triangles ont le même angle en $A$.\n• Les droites $(DE)$ et $(BC)$ sont perpendiculaires à la même droite $(AB)$ : elles sont donc **parallèles**.\n• D'après le théorème de Thalès dans le triangle $ABC$ :\n$$\\frac{AD}{AB} = \\frac{AE}{AC}$$\n• Par produit en croix, $AD \\times AC = AE \\times AB$. En divisant les deux membres par $AE \\times AC$, on obtient :\n$$\\frac{AD}{AE} = \\frac{AB}{AC}$$\nLe quotient « côté adjacent sur hypoténuse » est donc le même dans les deux triangles. Il ne dépend pas de la taille du triangle, **seulement de la mesure de l'angle** : c'est pour cela que la calculatrice peut donner le cosinus d'un angle."
      },
      {
        "title": "6. Calculer avec le cosinus",
        "content": "• Avant tout calcul, vérifie que la calculatrice est en **mode degré**.\n• La touche $\\cos$ donne une valeur approchée du cosinus d'un angle connu ; elle sert à calculer une **longueur**.\n• La touche $\\cos^{-1}$ (ou Arccos) donne l'angle dont on connaît le cosinus ; elle sert à calculer un **angle**.\n• On écrit la valeur du cosinus sous forme de **fraction exacte** quand on connaît les deux longueurs. Seuls les longueurs et les angles obtenus à la fin sont arrondis."
      },
      {
        "title": "7. Pour aller plus loin : triangle rectangle et cercle circonscrit (non exigible en 4e)",
        "content": "• **Propriété directe** : Si un triangle est rectangle, alors son cercle circonscrit a pour **diamètre son hypoténuse** (son centre est le milieu de l'hypoténuse).\n• **Réciproque** : Si un triangle est inscrit dans un cercle de diamètre l'un de ses côtés, alors ce triangle est **rectangle** et ce diamètre est son hypoténuse.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 280 180\" width=\"280\" height=\"180\" style=\"max-width:280px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle cx=\"140\" cy=\"105\" r=\"65\" fill=\"rgba(37, 99, 235, 0.04)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" stroke-dasharray=\"4 3\" />\n    <polygon points=\"75,105 205,105 115,45\" fill=\"rgba(37, 99, 235, 0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <path d=\"M 108.3 55 L 118.3 61.6 L 125 51.7\" fill=\"none\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <line x1=\"75\" y1=\"105\" x2=\"205\" y2=\"105\" stroke=\"#dc2626\" stroke-width=\"2.2\" />\n    <line x1=\"115\" y1=\"45\" x2=\"140\" y2=\"105\" stroke=\"#10b981\" stroke-width=\"1.8\" stroke-dasharray=\"3 3\" />\n    <circle cx=\"140\" cy=\"105\" r=\"3.5\" fill=\"#dc2626\" />\n    <text x=\"137\" y=\"122\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">O</text>\n    <text x=\"60\" y=\"110\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n    <text x=\"212\" y=\"110\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n    <text x=\"110\" y=\"38\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n    <text x=\"140\" y=\"145\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">Hypoténuse [BC] = Diamètre</text>\n    <text x=\"140\" y=\"162\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"var(--text-muted, #64748b)\">Centre O = Milieu de [BC]</text>\n  </svg>\n</div>"
      },
      {
        "title": "8. Pour aller plus loin : médiane issue de l'angle droit (non exigible en 4e)",
        "content": "Dans un triangle rectangle, la longueur de la médiane issue du sommet de l'angle droit est égale à la **moitié de la longueur de l'hypoténuse** :\n$$\\text{Si } ABC \\text{ est rectangle en } A \\text{ et } M \\text{ est le milieu de } [BC], \\quad \\text{alors } AM = \\frac{BC}{2} = MB = MC$$\nLe point $M$ est le centre du cercle circonscrit, donc $MA = MB = MC = \\text{rayon}$.\n\n**Réciproque** : si, dans un triangle, la médiane issue d'un sommet mesure la moitié du côté opposé, alors ce triangle est rectangle en ce sommet.\n*Pourquoi ?* Si $M$ est le milieu de $[BC]$ et si $AM = \\dfrac{BC}{2}$, alors $MA = MB = MC$ : le point $A$ est sur le cercle de diamètre $[BC]$, donc le triangle $ABC$ est rectangle en $A$ (réciproque vue à la section 7).\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 280 150\" width=\"280\" height=\"150\" style=\"max-width:280px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"50,115 220,115 50,30\" fill=\"rgba(16, 185, 129, 0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <path d=\"M 50 103 L 62 103 L 62 115\" fill=\"none\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <line x1=\"50\" y1=\"30\" x2=\"135\" y2=\"115\" stroke=\"#10b981\" stroke-width=\"2.2\" />\n    <circle cx=\"135\" cy=\"115\" r=\"3\" fill=\"#10b981\" />\n    <text x=\"130\" y=\"132\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#10b981\">M</text>\n    <text x=\"35\" y=\"122\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n    <text x=\"226\" y=\"122\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n    <text x=\"35\" y=\"28\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n    <line x1=\"88\" y1=\"112\" x2=\"92\" y2=\"118\" stroke=\"#10b981\" stroke-width=\"1.8\" />\n    <line x1=\"93\" y1=\"112\" x2=\"97\" y2=\"118\" stroke=\"#10b981\" stroke-width=\"1.8\" />\n    <line x1=\"173\" y1=\"112\" x2=\"177\" y2=\"118\" stroke=\"#10b981\" stroke-width=\"1.8\" />\n    <line x1=\"178\" y1=\"112\" x2=\"182\" y2=\"118\" stroke=\"#10b981\" stroke-width=\"1.8\" />\n    <line x1=\"90\" y1=\"70\" x2=\"96\" y2=\"74\" stroke=\"#10b981\" stroke-width=\"1.8\" />\n    <line x1=\"93\" y1=\"66\" x2=\"99\" y2=\"70\" stroke=\"#10b981\" stroke-width=\"1.8\" />\n    <text x=\"108\" y=\"65\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#10b981\">AM = BC / 2</text>\n  </svg>\n</div>"
      },
      {
        "title": "9. Pour aller plus loin : les deux théorèmes de la droite des milieux (non exigibles en 4e)",
        "content": "Dans un triangle quelconque $ABC$ où $I$ est le milieu de $[AB]$ et $J$ le milieu de $[AC]$ :\n• **Théorème 1 (Parallélisme)** : La droite $(IJ)$ passant par les milieux de deux côtés est **parallèle** au troisième côté : $(IJ) // (BC)$.\n• **Théorème 2 (Longueur)** : La longueur du segment reliant les milieux mesure la **moitié** du 3e côté :\n$$IJ = \\frac{BC}{2} \\quad (\\text{ou } BC = 2 \\times IJ)$$\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 280 160\" width=\"280\" height=\"160\" style=\"max-width:280px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"140,25 45,135 235,135\" fill=\"rgba(37, 99, 235, 0.06)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <line x1=\"92.5\" y1=\"80\" x2=\"187.5\" y2=\"80\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2.2\" />\n    <circle cx=\"92.5\" cy=\"80\" r=\"3.5\" fill=\"var(--primary, #2563eb)\" />\n    <circle cx=\"187.5\" cy=\"80\" r=\"3.5\" fill=\"var(--primary, #2563eb)\" />\n    <text x=\"75\" y=\"84\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">I</text>\n    <text x=\"194\" y=\"84\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">J</text>\n    <text x=\"136\" y=\"18\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n    <text x=\"30\" y=\"145\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n    <text x=\"242\" y=\"145\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n    <line x1=\"114\" y1=\"50\" x2=\"120\" y2=\"55\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.5\" />\n    <line x1=\"66\" y1=\"105\" x2=\"72\" y2=\"110\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.5\" />\n    <line x1=\"161\" y1=\"50\" x2=\"167\" y2=\"55\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.5\" />\n    <line x1=\"164\" y1=\"47\" x2=\"170\" y2=\"52\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.5\" />\n    <line x1=\"209\" y1=\"105\" x2=\"215\" y2=\"110\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.5\" />\n    <line x1=\"212\" y1=\"102\" x2=\"218\" y2=\"107\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.5\" />\n    <text x=\"140\" y=\"72\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">(IJ) // (BC)</text>\n    <text x=\"140\" y=\"152\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#10b981\">IJ = BC / 2</text>\n  </svg>\n</div>"
      },
      {
        "title": "10. Pour aller plus loin : réciproque de la droite des milieux (non exigible en 4e)",
        "content": "Dans un triangle $ABC$, si une droite passe par le **milieu d'un côté** $[AB]$ et est **parallèle** à un deuxième côté $(BC)$, alors elle **coupe le troisième côté $[AC]$ en son milieu**."
      },
      {
        "title": "À retenir",
        "content": "• Thalès dans un triangle : avec $(MN) // (BC)$, $\\dfrac{AM}{AB} = \\dfrac{AN}{AC} = \\dfrac{MN}{BC}$.\n• Réciproque de Thalès : si $\\dfrac{AM}{AB} = \\dfrac{AN}{AC}$ (quotients calculés séparément), alors $(MN) // (BC)$.\n• Deux triangles sont égaux s'ils ont trois côtés de même longueur, ou un angle égal compris entre deux côtés égaux, ou un côté égal compris entre deux angles égaux ; on en déduit l'égalité de leurs autres éléments homologues.\n• **Cosinus** : dans un triangle rectangle, $\\cos(\\text{angle aigu}) = \\dfrac{\\text{côté adjacent}}{\\text{hypoténuse}}$. Sa valeur ne dépend que de la mesure de l'angle.\n• **Pour aller plus loin** : si un triangle est rectangle, son hypoténuse est un diamètre de son cercle circonscrit. Réciproquement, si un côté d'un triangle est un diamètre de son cercle circonscrit, ce triangle est rectangle et ce côté est son hypoténuse.\n• **Pour aller plus loin** : médiane issue de l'angle droit = moitié de l'hypoténuse. Réciproquement, si la médiane issue d'un sommet mesure la moitié du côté opposé, le triangle est rectangle en ce sommet.\n• **Pour aller plus loin** : milieux de deux côtés, la droite qui les joint est parallèle au 3e côté et le segment mesure sa moitié."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer des longueurs avec le théorème de Thalès",
        "example": "Dans un triangle $ABC$, $M \\in [AB]$, $N \\in [AC]$ et $(MN) // (BC)$, avec $AM = 3$ cm, $AB = 7{,}5$ cm, $AN = 2$ cm et $BC = 6$ cm. Calculer $AC$ et $MN$.",
        "steps": [
          "**Étape 1 (Hypothèses)** : dans le triangle $ABC$, $M \\in [AB]$, $N \\in [AC]$ et $(MN) // (BC)$.",
          "**Étape 2 (Théorème)** : d'après le théorème de Thalès, $\\dfrac{AM}{AB} = \\dfrac{AN}{AC} = \\dfrac{MN}{BC}$, soit $\\dfrac{3}{7{,}5} = \\dfrac{2}{AC} = \\dfrac{MN}{6}$.",
          "**Étape 3 (Calcul de AC)** : par produit en croix, $AC = \\dfrac{2 \\times 7{,}5}{3} = \\dfrac{15}{3} = 5$ cm.",
          "**Étape 4 (Calcul de MN)** : $MN = \\dfrac{3 \\times 6}{7{,}5} = \\dfrac{18}{7{,}5} = 2{,}4$ cm."
        ]
      },
      {
        "title": "Méthode : Démontrer que deux droites sont parallèles avec la réciproque de Thalès",
        "example": "Dans un triangle $ABC$, $M \\in [AB]$ et $N \\in [AC]$, avec $AM = 4$ cm, $AB = 10$ cm, $AN = 6$ cm et $AC = 15$ cm. Les droites $(MN)$ et $(BC)$ sont-elles parallèles ?",
        "steps": [
          "**Étape 1 (Hypothèses)** : dans le triangle $ABC$, $M \\in [AB]$ et $N \\in [AC]$.",
          "**Étape 2 (Calculer séparément)** : $\\dfrac{AM}{AB} = \\dfrac{4}{10} = 0{,}4$ et $\\dfrac{AN}{AC} = \\dfrac{6}{15} = 0{,}4$.",
          "**Étape 3 (Comparer)** : les deux quotients sont égaux, donc $\\dfrac{AM}{AB} = \\dfrac{AN}{AC}$.",
          "**Étape 4 (Conclure)** : d'après la réciproque du théorème de Thalès, les droites $(MN)$ et $(BC)$ sont parallèles."
        ]
      },
      {
        "title": "Méthode : Démontrer que deux triangles sont égaux, puis en déduire une égalité",
        "example": "Les segments $[AB]$ et $[CD]$ se coupent en leur milieu $O$. Démontrer que les triangles $AOC$ et $BOD$ sont égaux, puis que $AC = BD$.",
        "steps": [
          "**Étape 1 (Associer les sommets)** : on compare les triangles $AOC$ et $BOD$, dans cet ordre : $A$ correspond à $B$, $O$ à $O$ et $C$ à $D$.",
          "**Étape 2 (Rassembler les égalités)** : $O$ est le milieu de $[AB]$, donc $OA = OB$. $O$ est le milieu de $[CD]$, donc $OC = OD$. Les angles $\\widehat{AOC}$ et $\\widehat{BOD}$ sont opposés par le sommet, donc ils ont la même mesure.",
          "**Étape 3 (Citer le cas)** : l'angle en $O$ est compris entre les côtés $[OA]$ et $[OC]$ dans le premier triangle, entre $[OB]$ et $[OD]$ dans le second. D'après le cas d'égalité « un angle compris entre deux côtés », les triangles $AOC$ et $BOD$ sont égaux.",
          "**Étape 4 (Conclure)** : les côtés $[AC]$ et $[BD]$ sont homologues, donc $AC = BD$."
        ]
      },
      {
        "title": "Méthode : Calculer une longueur avec le cosinus",
        "example": "Le triangle $ABC$ est rectangle en $B$, avec $AC = 10$ cm et $\\widehat{BAC} = 30^\\circ$. Calculer $AB$, arrondi au dixième.",
        "steps": [
          "**Étape 1 (Repérer les côtés)** : par rapport à l'angle $\\widehat{BAC}$, $[AC]$ est l'hypoténuse et $[AB]$ le côté adjacent.",
          "**Étape 2 (Écrire le cosinus)** : $\\cos(\\widehat{BAC}) = \\dfrac{AB}{AC}$, soit $\\cos(30^\\circ) = \\dfrac{AB}{10}$.",
          "**Étape 3 (Isoler la longueur)** : $AB = 10 \\times \\cos(30^\\circ)$.",
          "**Étape 4 (Calculer en mode degré)** : $AB \\approx 8{,}7$ cm."
        ]
      },
      {
        "title": "Méthode : Calculer un angle avec le cosinus",
        "example": "Le triangle $EFG$ est rectangle en $F$, avec $EF = 6$ cm et $EG = 9$ cm. Calculer $\\widehat{FEG}$, arrondi au degré.",
        "steps": [
          "**Étape 1 (Repérer les côtés)** : par rapport à l'angle $\\widehat{FEG}$, $[EG]$ est l'hypoténuse et $[EF]$ le côté adjacent.",
          "**Étape 2 (Valeur exacte)** : $\\cos(\\widehat{FEG}) = \\dfrac{EF}{EG} = \\dfrac{6}{9} = \\dfrac{2}{3}$.",
          "**Étape 3 (Calculatrice)** : avec la touche $\\cos^{-1}$, en mode degré, on obtient $\\widehat{FEG} \\approx 48^\\circ$."
        ]
      },
      {
        "title": "Pour aller plus loin : démontrer qu'un triangle est rectangle grâce au cercle",
        "example": "$[BC]$ est un diamètre d'un cercle de centre $O$ et de rayon $5$ cm. $A$ est un point du cercle tel que $AB = 6$ cm. Démontrer que $ABC$ est rectangle puis calculer $AC$.",
        "steps": [
          "**Étape 1 (Nature du triangle)** : le triangle $ABC$ est inscrit dans le cercle de diamètre $[BC]$. Or, si un triangle est inscrit dans un cercle ayant pour diamètre l'un de ses côtés, il est rectangle : $ABC$ est **rectangle en $A$**.",
          "**Étape 2 (Hypoténuse)** : $BC = 2 \\times 5 = 10$ cm.",
          "**Étape 3 (Pythagore)** : dans le triangle $ABC$ rectangle en $A$, $BC^2 = AB^2 + AC^2$, donc $AC^2 = 10^2 - 6^2 = 100 - 36 = 64$.",
          "**Étape 4 (Conclusion)** : $AC = \\sqrt{64} = 8$ cm."
        ]
      },
      {
        "title": "Pour aller plus loin : démontrer un parallélisme et calculer une longueur avec les milieux",
        "example": "Soit un triangle ABC avec AB = 8 cm, AC = 10 cm, BC = 12 cm. I milieu de [AB] et J milieu de [AC]. Démontrer que (IJ) // (BC) et calculer IJ.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.8rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 270 150\" width=\"270\" height=\"150\" style=\"max-width:270px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"135,25 40,125 230,125\" fill=\"rgba(37, 99, 235, 0.06)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <line x1=\"87.5\" y1=\"75\" x2=\"182.5\" y2=\"75\" stroke=\"#dc2626\" stroke-width=\"2.2\" />\n    <circle cx=\"87.5\" cy=\"75\" r=\"3.5\" fill=\"#dc2626\" />\n    <circle cx=\"182.5\" cy=\"75\" r=\"3.5\" fill=\"#dc2626\" />\n    <text x=\"70\" y=\"78\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">I</text>\n    <text x=\"190\" y=\"78\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">J</text>\n    <text x=\"131\" y=\"18\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n    <text x=\"26\" y=\"132\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n    <text x=\"236\" y=\"132\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n    <text x=\"135\" y=\"68\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">IJ = ? (6 cm)</text>\n    <text x=\"135\" y=\"142\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">BC = 12 cm</text>\n  </svg>\n</div>",
        "steps": [
          "**Étape 1 (Parallélisme)** : Dans le triangle $ABC$, $I$ est le milieu de $[AB]$ et $J$ est le milieu de $[AC]$. D'après le 1er théorème de la droite des milieux, la droite $(IJ)$ est parallèle à $(BC)$.",
          "**Étape 2 (Longueur)** : D'après le 2e théorème de la droite des milieux, le segment $[IJ]$ mesure la moitié de $[BC]$ : $IJ = \\frac{BC}{2} = \\frac{12}{2} = 6$ cm."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans les rapports de Thalès, les longueurs du petit triangle $AMN$ vont au numérateur et celles du grand triangle $ABC$ au dénominateur, partout.",
      "⚠️ Pour la réciproque de Thalès, on calcule $\\dfrac{AM}{AB}$ et $\\dfrac{AN}{AC}$ séparément, sans poser leur égalité au départ : on ne sait pas encore s'ils sont égaux.",
      "⚠️ Le théorème de Thalès **suppose** le parallélisme et sert à calculer une longueur ; sa réciproque **démontre** le parallélisme à partir de longueurs. Ne pas citer l'un à la place de l'autre.",
      "⚠️ Trois angles de même mesure ne prouvent pas que deux triangles sont égaux : un triangle et son agrandissement ont les mêmes angles.",
      "⚠️ Le cosinus d'un angle aigu ne s'écrit que dans un triangle **rectangle**, et l'hypoténuse est toujours au dénominateur.",
      "⚠️ Le côté adjacent dépend de l'angle choisi : dans un même triangle rectangle, les deux angles aigus n'ont pas le même côté adjacent.",
      "⚠️ Arrondir une valeur intermédiaire de cosinus fausse le résultat : garde la valeur complète à la calculatrice et n'arrondis que la longueur ou l'angle final.",
      "⚠️ Dans les cas 2 et 3, l'élément cité doit être **compris** : l'angle entre les deux côtés (cas 2), le côté entre les deux angles (cas 3).",
      "⚠️ Pour déduire une égalité de deux triangles égaux, il faut comparer des éléments **homologues** : on associe d'abord les sommets, sans se fier à l'allure de la figure.",
      "⚠️ Ne pas confondre médiane (qui relie un sommet au milieu opposé) et hauteur (qui est perpendiculaire au côté opposé).",
      "⚠️ (Pour aller plus loin) Pour appliquer la droite des milieux, il faut que les points soient EXPLICITEMENT des milieux (ou démontrés comme tels)."
    ],
    "flashcards": [
      {
        "q": "Dans un triangle rectangle, que vaut le cosinus d'un angle aigu ?",
        "a": "Le quotient $\\dfrac{\\text{côté adjacent à l'angle}}{\\text{hypoténuse}}$."
      },
      {
        "q": "$ABC$ est rectangle en $B$. Quel est le côté adjacent à l'angle $\\widehat{BAC}$ ?",
        "a": "$[AB]$ : il forme l'angle en $A$ et ce n'est pas l'hypoténuse."
      },
      {
        "q": "$ABC$ est rectangle en $B$ avec $AB = 3$ et $AC = 5$. Donner la valeur exacte de $\\cos(\\widehat{BAC})$.",
        "a": "$\\cos(\\widehat{BAC}) = \\dfrac{AB}{AC} = \\dfrac{3}{5}$."
      },
      {
        "q": "Pourquoi le cosinus d'un angle ne dépend-il pas de la taille du triangle rectangle ?",
        "a": "Grâce au théorème de Thalès : dans deux triangles rectangles emboîtés ayant le même angle aigu, le quotient côté adjacent sur hypoténuse est le même."
      },
      {
        "q": "Pour aller plus loin : où se trouve le centre du cercle circonscrit à un triangle rectangle ?",
        "a": "Au **milieu de son hypoténuse**."
      },
      {
        "q": "Pour aller plus loin : dans un triangle rectangle d'hypoténuse 14 cm, quelle est la longueur de la médiane issue de l'angle droit ?",
        "a": "$7$ cm (la moitié de l'hypoténuse : $\\frac{14}{2} = 7$ cm)."
      },
      {
        "q": "Pour aller plus loin : que peut-on dire de la droite passant par les milieux de deux côtés d'un triangle ?",
        "a": "Elle est **parallèle au troisième côté** du triangle (1er théorème de la droite des milieux)."
      },
      {
        "q": "Pour aller plus loin : si la base d'un triangle mesure 15 cm, quelle est la longueur du segment joignant les milieux des deux autres côtés ?",
        "a": "$7{,}5$ cm ($15 \\div 2 = 7{,}5$ cm)."
      },
      {
        "q": "Pour aller plus loin : si un triangle est inscrit dans un cercle ayant pour diamètre un de ses côtés, quelle est la nature de ce triangle ?",
        "a": "C'est un **triangle rectangle**."
      },
      {
        "q": "$(MN) // (BC)$, $AM = 2$, $AB = 6$ et $BC = 9$. Combien mesure $MN$ ?",
        "a": "$MN = \\dfrac{2 \\times 9}{6} = 3$ (Thalès : $\\dfrac{AM}{AB} = \\dfrac{MN}{BC}$)."
      },
      {
        "q": "$M \\in [AB]$, $N \\in [AC]$, $AM = 3$, $AB = 12$, $AN = 2$ et $AC = 8$. Les droites $(MN)$ et $(BC)$ sont-elles parallèles ?",
        "a": "**Oui** : $\\dfrac{3}{12} = 0{,}25$ et $\\dfrac{2}{8} = 0{,}25$, donc $(MN) // (BC)$ d'après la réciproque du théorème de Thalès."
      },
      {
        "q": "Pour démontrer que deux droites sont parallèles à partir de longueurs, utilise-t-on le théorème de Thalès ou sa réciproque ?",
        "a": "Sa **réciproque** : on compare $\\dfrac{AM}{AB}$ et $\\dfrac{AN}{AC}$. Le théorème direct suppose le parallélisme et sert à calculer une longueur."
      },
      {
        "q": "Quels sont les trois cas d'égalité des triangles ?",
        "a": "Trois côtés respectivement égaux ; un angle égal compris entre deux côtés respectivement égaux ; un côté égal compris entre deux angles respectivement égaux."
      },
      {
        "q": "Deux triangles ont leurs trois angles de mêmes mesures. Sont-ils forcément égaux ?",
        "a": "**Non** : un triangle et son agrandissement ont les mêmes angles sans être superposables."
      },
      {
        "q": "Les triangles $ABC$ et $DEF$ sont égaux, dans l'ordre des sommets homologues. À quel côté $[BC]$ est-il égal ?",
        "a": "À $[EF]$ : $B$ correspond à $E$ et $C$ à $F$, donc $BC = EF$."
      },
      {
        "q": "Que signifie « angle compris entre deux côtés » ?",
        "a": "C'est l'angle dont le sommet est l'extrémité commune de ces deux côtés."
      }
    ]
  },
  "4G3": {
    "title": "4G3 : Translations et transformations du plan",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Décrire une translation par son effet : un glissement rectiligne, sans rotation ni déformation, donné par un point et son image.",
      "Savoir que, lors d'une translation, tous les points se déplacent dans la même direction, dans le même sens et de la même longueur.",
      "Utiliser le lien avec le parallélogramme : si la translation qui transforme $A$ en $B$ transforme $C$ en $D$, alors $ABDC$ est un parallélogramme.",
      "Construire l'image d'un point, d'un segment et d'une figure par une translation.",
      "Utiliser les propriétés d'invariance et de conservation : longueurs, angles, parallélisme et aires.",
      "Reconnaître et construire des frises et des pavages obtenus par translation d'un motif."
    ],
    "keyPoints": [
      {
        "title": "1. La translation : un glissement",
        "content": "Une translation fait « glisser » une figure sans la faire tourner ni la déformer.\nOn décrit ce glissement en donnant **un point et son image** : on parle de « la translation qui transforme $A$ en $B$ ». Tous les points de la figure se déplacent alors comme le point $A$ :\n• dans la même **direction** : celle de la droite $(AB)$ (les trajectoires sont parallèles) ;\n• dans le même **sens** : de $A$ vers $B$ ;\n• de la même **longueur** : la longueur $AB$.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 300 150\" width=\"300\" height=\"150\" style=\"max-width:300px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <defs>\n      <marker id=\"arrow-trans\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n        <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#8b5cf6\" />\n      </marker>\n    </defs>\n    <polygon points=\"40,95 80,95 60,45\" fill=\"rgba(139, 92, 246, 0.12)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" stroke-linejoin=\"round\" />\n    <text x=\"32\" y=\"108\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n    <text x=\"82\" y=\"108\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n    <text x=\"56\" y=\"38\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n    <line x1=\"40\" y1=\"95\" x2=\"150\" y2=\"80\" stroke=\"#8b5cf6\" stroke-width=\"1.8\" stroke-dasharray=\"4 3\" marker-end=\"url(#arrow-trans)\" />\n    <line x1=\"80\" y1=\"95\" x2=\"190\" y2=\"80\" stroke=\"#8b5cf6\" stroke-width=\"1.8\" stroke-dasharray=\"4 3\" marker-end=\"url(#arrow-trans)\" />\n    <line x1=\"60\" y1=\"45\" x2=\"170\" y2=\"30\" stroke=\"#8b5cf6\" stroke-width=\"1.8\" stroke-dasharray=\"4 3\" marker-end=\"url(#arrow-trans)\" />\n    <polygon points=\"150,80 190,80 170,30\" fill=\"rgba(139, 92, 246, 0.25)\" stroke=\"#8b5cf6\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <text x=\"146\" y=\"94\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#8b5cf6\">A'</text>\n    <text x=\"194\" y=\"94\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#8b5cf6\">B'</text>\n    <text x=\"166\" y=\"22\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#8b5cf6\">C'</text>\n    <rect x=\"30\" y=\"120\" width=\"240\" height=\"24\" rx=\"6\" fill=\"rgba(139, 92, 246, 0.08)\" stroke=\"#8b5cf6\" stroke-width=\"1\" />\n    <text x=\"150\" y=\"136\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#8b5cf6\">Glissement : même direction, même sens, même distance</text>\n  </svg>\n</div>\n\n**Pour aller plus loin** : on rencontre aussi l'expression « translation de vecteur $\\overrightarrow{AB}$ ». C'est seulement une autre façon de nommer la translation qui transforme $A$ en $B$ : aucune connaissance sur les vecteurs n'est attendue en 4e."
      },
      {
        "title": "2. Lien fondamental avec le parallélogramme",
        "content": "**Propriété** : si la translation qui transforme $A$ en $B$ transforme le point $M$ en $M'$, alors :\n$$\\text{le quadrilatère } ABM'M \\text{ est un PARALLÉLOGRAMME}$$\n(il est aplati si $M$ est sur la droite $(AB)$).\n*(Les diagonales $[AM']$ et $[BM]$ ont le même milieu, et les côtés opposés $[AB]$ et $[MM']$ sont parallèles et de même longueur)*.\nEn pratique, on s'en sert dans les deux sens : pour construire l'image de $M$, on trace le parallélogramme $ABM'M$ ; et dans un parallélogramme $ABM'M$, on lit que le glissement de $A$ vers $B$ est aussi celui de $M$ vers $M'$.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 280 160\" width=\"280\" height=\"160\" style=\"max-width:280px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <defs>\n      <marker id=\"arrow-parall\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n        <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"var(--primary, #2563eb)\" />\n      </marker>\n    </defs>\n    <polygon points=\"45,75 145,45 175,105 75,135\" fill=\"rgba(37, 99, 235, 0.06)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <line x1=\"45\" y1=\"75\" x2=\"145\" y2=\"45\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2.5\" marker-end=\"url(#arrow-parall)\" />\n    <line x1=\"75\" y1=\"135\" x2=\"175\" y2=\"105\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2.5\" marker-end=\"url(#arrow-parall)\" />\n    <line x1=\"45\" y1=\"75\" x2=\"175\" y2=\"105\" stroke=\"#d97706\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\" />\n    <line x1=\"145\" y1=\"45\" x2=\"75\" y2=\"135\" stroke=\"#d97706\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\" />\n    <circle cx=\"110\" cy=\"90\" r=\"3\" fill=\"#d97706\" />\n    <text x=\"32\" y=\"78\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n    <text x=\"148\" y=\"40\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n    <text x=\"60\" y=\"145\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">M</text>\n    <text x=\"182\" y=\"110\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">M'</text>\n    <text x=\"110\" y=\"82\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#d97706\">O</text>\n    <text x=\"140\" y=\"152\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">ABM'M est un parallélogramme</text>\n  </svg>\n</div>"
      },
      {
        "title": "3. Propriétés de conservation",
        "content": "La translation conserve toutes les caractéristiques géométriques des figures :\n• **Longueurs** : l'image d'un segment $[AB]$ est un segment $[A'B']$ de même longueur ($A'B' = AB$).\n• **Angles** : la mesure des angles est rigoureusement conservée.\n• **Aires et périmètres** : la figure image a exactement la même aire et le même périmètre.\n• **Parallélisme et alignement** : l'image d'une droite est une droite qui lui est parallèle."
      },
      {
        "title": "4. Rappel comparatif des transformations du plan",
        "content": "• **Symétrie axiale** : effet miroir par pliage le long d'une droite (axe).\n• **Symétrie centrale** : demi-tour de $180^\\circ$ autour d'un point (centre, qui est le milieu).\n• **Translation** : glissement selon une direction, un sens et une distance sans rotation."
      },
      {
        "title": "5. Frises et pavages",
        "content": "En répétant un **motif** par translation, on obtient des figures régulières. Les motifs sont tous **superposables** au motif de départ et gardent la même orientation : ils ne sont ni tournés, ni retournés, ni agrandis.\n• **Frise** : bande obtenue en répétant un motif dans une seule direction. Ici, on passe d'un motif au suivant par **une même translation** : le motif $2$ est l'image du motif $1$, le motif $3$ est l'image du motif $2$, et ainsi de suite.\n• **Pavage** : recouvrement du plan par des motifs, **sans trou ni chevauchement**. Pour paver par translation, on utilise **deux translations de directions différentes** : l'une remplit une rangée, l'autre fait passer à la rangée suivante.\n• Tout parallélogramme permet de paver le plan : dans un parallélogramme $ABCD$, la translation qui transforme $A$ en $B$ accole un parallélogramme le long de $[BC]$, et celle qui transforme $A$ en $D$ en accole un le long de $[DC]$.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 300 196\" width=\"300\" height=\"196\" style=\"max-width:300px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"En haut, une frise : un motif répété cinq fois par une même translation. En bas, un pavage de parallélogrammes obtenu avec deux translations.\">\n    <defs>\n      <marker id=\"arrow-frise-4g3\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n        <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#d97706\" />\n      </marker>\n    </defs>\n    <line x1=\"20\" y1=\"12\" x2=\"78\" y2=\"12\" stroke=\"#d97706\" stroke-width=\"1.6\" marker-end=\"url(#arrow-frise-4g3)\" />\n    <line x1=\"80\" y1=\"12\" x2=\"138\" y2=\"12\" stroke=\"#d97706\" stroke-width=\"1.6\" marker-end=\"url(#arrow-frise-4g3)\" />\n    <line x1=\"140\" y1=\"12\" x2=\"198\" y2=\"12\" stroke=\"#d97706\" stroke-width=\"1.6\" marker-end=\"url(#arrow-frise-4g3)\" />\n    <line x1=\"200\" y1=\"12\" x2=\"258\" y2=\"12\" stroke=\"#d97706\" stroke-width=\"1.6\" marker-end=\"url(#arrow-frise-4g3)\" />\n    <polygon points=\"20,62 20,22 50,22 50,36 32,36 32,62\" fill=\"rgba(37, 99, 235, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" stroke-linejoin=\"round\" />\n    <polygon points=\"80,62 80,22 110,22 110,36 92,36 92,62\" fill=\"rgba(139, 92, 246, 0.15)\" stroke=\"#8b5cf6\" stroke-width=\"1.6\" stroke-linejoin=\"round\" />\n    <polygon points=\"140,62 140,22 170,22 170,36 152,36 152,62\" fill=\"rgba(139, 92, 246, 0.15)\" stroke=\"#8b5cf6\" stroke-width=\"1.6\" stroke-linejoin=\"round\" />\n    <polygon points=\"200,62 200,22 230,22 230,36 212,36 212,62\" fill=\"rgba(139, 92, 246, 0.15)\" stroke=\"#8b5cf6\" stroke-width=\"1.6\" stroke-linejoin=\"round\" />\n    <polygon points=\"260,62 260,22 290,22 290,36 272,36 272,62\" fill=\"rgba(139, 92, 246, 0.15)\" stroke=\"#8b5cf6\" stroke-width=\"1.6\" stroke-linejoin=\"round\" />\n    <text x=\"35\" y=\"76\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">1</text>\n    <text x=\"95\" y=\"76\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">2</text>\n    <text x=\"155\" y=\"76\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">3</text>\n    <text x=\"215\" y=\"76\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">4</text>\n    <text x=\"275\" y=\"76\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">5</text>\n    <text x=\"150\" y=\"92\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"var(--text-muted, #64748b)\">Frise : le même glissement, répété</text>\n    <polygon points=\"35,165 85,165 105,135 55,135\" fill=\"rgba(37, 99, 235, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.6\" stroke-linejoin=\"round\" />\n    <polygon points=\"85,165 135,165 155,135 105,135\" fill=\"rgba(139, 92, 246, 0.15)\" stroke=\"#8b5cf6\" stroke-width=\"1.4\" stroke-linejoin=\"round\" />\n    <polygon points=\"135,165 185,165 205,135 155,135\" fill=\"rgba(139, 92, 246, 0.15)\" stroke=\"#8b5cf6\" stroke-width=\"1.4\" stroke-linejoin=\"round\" />\n    <polygon points=\"185,165 235,165 255,135 205,135\" fill=\"rgba(139, 92, 246, 0.15)\" stroke=\"#8b5cf6\" stroke-width=\"1.4\" stroke-linejoin=\"round\" />\n    <polygon points=\"55,135 105,135 125,105 75,105\" fill=\"rgba(139, 92, 246, 0.15)\" stroke=\"#8b5cf6\" stroke-width=\"1.4\" stroke-linejoin=\"round\" />\n    <polygon points=\"105,135 155,135 175,105 125,105\" fill=\"rgba(139, 92, 246, 0.15)\" stroke=\"#8b5cf6\" stroke-width=\"1.4\" stroke-linejoin=\"round\" />\n    <polygon points=\"155,135 205,135 225,105 175,105\" fill=\"rgba(139, 92, 246, 0.15)\" stroke=\"#8b5cf6\" stroke-width=\"1.4\" stroke-linejoin=\"round\" />\n    <polygon points=\"205,135 255,135 275,105 225,105\" fill=\"rgba(139, 92, 246, 0.15)\" stroke=\"#8b5cf6\" stroke-width=\"1.4\" stroke-linejoin=\"round\" />\n    <line x1=\"35\" y1=\"165\" x2=\"83\" y2=\"165\" stroke=\"#d97706\" stroke-width=\"2\" marker-end=\"url(#arrow-frise-4g3)\" />\n    <line x1=\"35\" y1=\"165\" x2=\"54\" y2=\"137\" stroke=\"#d97706\" stroke-width=\"2\" marker-end=\"url(#arrow-frise-4g3)\" />\n    <text x=\"150\" y=\"186\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"var(--text-muted, #64748b)\">Pavage : deux glissements, sans trou ni chevauchement</text>\n  </svg>\n</div>"
      },
      {
        "title": "À retenir",
        "content": "• Une translation est un **glissement** : tous les points se déplacent dans la même direction, dans le même sens et de la même longueur (par exemple « de $A$ vers $B$ »).\n• Si $M'$ est l'image de $M$ par la translation qui transforme $A$ en $B$, alors $ABM'M$ est un parallélogramme (éventuellement aplati).\n• La translation conserve longueurs, angles, aires, alignement et parallélisme.\n• Sur quadrillage : on compte les carreaux du déplacement et on l'applique à chaque point.\n• **Frise** : un motif répété par une même translation. **Pavage** : le plan recouvert sans trou ni chevauchement, par exemple avec deux translations de directions différentes."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Construire l'image d'un point par translation à la règle et au compas",
        "example": "Construire le point D, image de C par la translation qui transforme A en B.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.8rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 280 150\" width=\"280\" height=\"150\" style=\"max-width:280px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <line x1=\"45\" y1=\"80\" x2=\"145\" y2=\"50\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2.2\" />\n    <line x1=\"45\" y1=\"80\" x2=\"70\" y2=\"130\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.5\" />\n    <path d=\"M 160 90 A 25 25 0 0 1 180 110\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n    <path d=\"M 160 110 A 25 25 0 0 1 180 90\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"1.8\" />\n    <polygon points=\"45,80 145,50 170,100 70,130\" fill=\"none\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\" />\n    <circle cx=\"170\" cy=\"100\" r=\"3.5\" fill=\"#dc2626\" />\n    <text x=\"32\" y=\"82\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n    <text x=\"148\" y=\"45\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n    <text x=\"55\" y=\"138\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n    <text x=\"178\" y=\"105\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">D</text>\n    <text x=\"140\" y=\"145\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"var(--text-muted, #64748b)\">D est à l'opposé de A par rapport à (BC)</text>\n  </svg>\n</div>",
        "steps": [
          "**Étape 1 (Analyse)** : On sait que $ABDC$ doit être un parallélogramme.",
          "**Étape 2 (Au compas)** : Prendre l'écartement $AB$, piquer sur $C$ et tracer un premier arc de cercle.",
          "**Étape 3** : Prendre l'écartement $AC$, piquer sur $B$ et tracer un deuxième arc de cercle coupant le premier.",
          "**Étape 4 (Point image)** : Les deux arcs complets se coupent en général en deux points. Le point $D$ recherché est celui qui est situé de l'autre côté de la droite $(BC)$ par rapport à $A$ : ainsi $ABDC$ est un parallélogramme non croisé."
        ]
      },
      {
        "title": "Méthode : Construire l'image d'une figure sur un quadrillage",
        "example": "Sur le quadrillage, construire l'image du triangle $PQR$ par la translation qui transforme $A$ en $B$.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 240 180\" width=\"240\" height=\"180\" style=\"max-width:300px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Translation sur quadrillage : 3 carreaux vers la droite et 2 vers le haut\">\n  <defs><marker id=\"arr4g3\" markerWidth=\"8\" markerHeight=\"8\" refX=\"7\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#f59e0b\" /></marker></defs>\n  <line x1=\"10\" y1=\"10\" x2=\"10\" y2=\"170\" stroke=\"#cbd5e1\" stroke-width=\"1\" /><line x1=\"30\" y1=\"10\" x2=\"30\" y2=\"170\" stroke=\"#cbd5e1\" stroke-width=\"1\" /><line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"170\" stroke=\"#cbd5e1\" stroke-width=\"1\" /><line x1=\"70\" y1=\"10\" x2=\"70\" y2=\"170\" stroke=\"#cbd5e1\" stroke-width=\"1\" /><line x1=\"90\" y1=\"10\" x2=\"90\" y2=\"170\" stroke=\"#cbd5e1\" stroke-width=\"1\" /><line x1=\"110\" y1=\"10\" x2=\"110\" y2=\"170\" stroke=\"#cbd5e1\" stroke-width=\"1\" /><line x1=\"130\" y1=\"10\" x2=\"130\" y2=\"170\" stroke=\"#cbd5e1\" stroke-width=\"1\" /><line x1=\"150\" y1=\"10\" x2=\"150\" y2=\"170\" stroke=\"#cbd5e1\" stroke-width=\"1\" /><line x1=\"170\" y1=\"10\" x2=\"170\" y2=\"170\" stroke=\"#cbd5e1\" stroke-width=\"1\" /><line x1=\"190\" y1=\"10\" x2=\"190\" y2=\"170\" stroke=\"#cbd5e1\" stroke-width=\"1\" /><line x1=\"210\" y1=\"10\" x2=\"210\" y2=\"170\" stroke=\"#cbd5e1\" stroke-width=\"1\" /><line x1=\"230\" y1=\"10\" x2=\"230\" y2=\"170\" stroke=\"#cbd5e1\" stroke-width=\"1\" /><line x1=\"10\" y1=\"10\" x2=\"230\" y2=\"10\" stroke=\"#cbd5e1\" stroke-width=\"1\" /><line x1=\"10\" y1=\"30\" x2=\"230\" y2=\"30\" stroke=\"#cbd5e1\" stroke-width=\"1\" /><line x1=\"10\" y1=\"50\" x2=\"230\" y2=\"50\" stroke=\"#cbd5e1\" stroke-width=\"1\" /><line x1=\"10\" y1=\"70\" x2=\"230\" y2=\"70\" stroke=\"#cbd5e1\" stroke-width=\"1\" /><line x1=\"10\" y1=\"90\" x2=\"230\" y2=\"90\" stroke=\"#cbd5e1\" stroke-width=\"1\" /><line x1=\"10\" y1=\"110\" x2=\"230\" y2=\"110\" stroke=\"#cbd5e1\" stroke-width=\"1\" /><line x1=\"10\" y1=\"130\" x2=\"230\" y2=\"130\" stroke=\"#cbd5e1\" stroke-width=\"1\" /><line x1=\"10\" y1=\"150\" x2=\"230\" y2=\"150\" stroke=\"#cbd5e1\" stroke-width=\"1\" /><line x1=\"10\" y1=\"170\" x2=\"230\" y2=\"170\" stroke=\"#cbd5e1\" stroke-width=\"1\" />\n  <polygon points=\"30,150 90,150 30,110\" fill=\"rgba(37, 99, 235, 0.10)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2\" />\n  <polygon points=\"90,110 150,110 90,70\" fill=\"rgba(16, 185, 129, 0.12)\" stroke=\"#10b981\" stroke-width=\"2\" />\n  <line x1=\"150\" y1=\"50\" x2=\"206\" y2=\"13\" stroke=\"#f59e0b\" stroke-width=\"2.5\" marker-end=\"url(#arr4g3)\" />\n  <text x=\"140\" y=\"48\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text><text x=\"212\" y=\"22\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n  <text x=\"22\" y=\"166\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">P</text><text x=\"92\" y=\"166\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Q</text><text x=\"18\" y=\"108\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">R</text>\n  <text x=\"82\" y=\"126\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#047857\">P'</text><text x=\"152\" y=\"126\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#047857\">Q'</text><text x=\"78\" y=\"68\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#047857\">R'</text>\n</svg>\n</div>\n",
        "steps": [
          "**Étape 1 (Lire le déplacement)** : pour aller de $A$ à $B$, on avance de **3 carreaux vers la droite** et de **2 carreaux vers le haut**.",
          "**Étape 2 (Images des sommets)** : on applique ce même déplacement à chaque sommet : $P \\to P'$, $Q \\to Q'$, $R \\to R'$ (3 carreaux à droite, 2 vers le haut).",
          "**Étape 3 (Tracer)** : on relie $P'$, $Q'$ et $R'$. Le triangle $P'Q'R'$ est superposable à $PQR$, sans rotation.",
          "**Contrôle** : $PP'Q'Q$ est un parallélogramme : $[PP']$, $[QQ']$ et $[RR']$ sont parallèles à $[AB]$ et de même longueur."
        ]
      },
      {
        "title": "Méthode : Reconnaître une translation dans un parallélogramme",
        "example": "$ABCD$ est un parallélogramme. Quelle est l'image de $A$ par la translation qui transforme $D$ en $C$ ?",
        "steps": [
          "**Étape 1 (Traduire)** : d'après le lien entre translation et parallélogramme, on cherche le point $M'$ tel que $DCM'A$ soit un parallélogramme.",
          "**Étape 2 (Utiliser la figure)** : $ABCD$ est un parallélogramme, donc $DCBA$ (le même, lu dans l'autre sens) aussi.",
          "**Étape 3 (Conclure)** : $M' = B$. L'image de $A$ est $B$ : le glissement de $D$ vers $C$ et celui de $A$ vers $B$ ont même direction, même sens et même longueur."
        ]
      },
      {
        "title": "Méthode : Construire une frise ou un pavage par translation",
        "example": "Sur un quadrillage, $ABCD$ est un parallélogramme dont le côté $[AB]$ mesure $5$ carreaux. Construire une frise de $4$ parallélogrammes, puis un pavage.",
        "steps": [
          "**Étape 1 (Choisir le glissement)** : pour la frise, on prend la translation qui transforme $A$ en $B$. Elle transforme $D$ en $C$ : le parallélogramme image s'accole à $ABCD$ le long de $[BC]$, sans trou ni chevauchement.",
          "**Étape 2 (Répéter)** : on recommence à partir du dernier motif obtenu, avec le **même** glissement. Chaque motif avance de $5$ carreaux : le motif $4$ est à $3 \\times 5 = 15$ carreaux du motif $1$.",
          "**Étape 3 (Passer au pavage)** : on applique à toute la rangée la translation qui transforme $A$ en $D$ : la nouvelle rangée s'accole le long de la première. On répète autant de fois qu'il le faut.",
          "**Contrôle** : tous les motifs sont superposables et ont la même orientation, et il ne reste ni trou ni chevauchement."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas confondre **direction** (une droite ou une orientation dans l'espace, ex: horizontale) et **sens** (vers la droite ou vers la gauche).",
      "⚠️ Attention à l'ordre des lettres dans le parallélogramme : si la translation envoie $A$ en $B$ et $C$ en $D$, le parallélogramme est $ABDC$ (et non $ABCD$) !",
      "⚠️ Faire tourner la figure ou changer sa taille : l'image par une translation a exactement la même orientation et les mêmes dimensions.",
      "⚠️ Dans une frise obtenue par translation, tous les motifs ont la même orientation : un motif tourné ou retourné n'est pas l'image du précédent par cette translation.",
      "⚠️ Entre le motif $1$ et le motif $5$ d'une frise, il n'y a que $4$ glissements : on compte les intervalles, pas les motifs."
    ],
    "flashcards": [
      {
        "q": "Comment se déplacent les points lors de la translation qui transforme $A$ en $B$ ?",
        "a": "Tous de la même façon : même **direction** (celle de $(AB)$), même **sens** (de $A$ vers $B$) et même **longueur** ($AB$)."
      },
      {
        "q": "Si $B$ est l'image de $A$ par la translation qui envoie $C$ en $D$, quel quadrilatère est un parallélogramme ?",
        "a": "Le quadrilatère **$CDBA$** (les segments $[CD]$ et $[AB]$ sont parallèles, de même sens et même longueur)."
      },
      {
        "q": "Quelle est l'image d'une droite $(d)$ par une translation ?",
        "a": "Une droite $(d')$ qui est **parallèle** à $(d)$."
      },
      {
        "q": "Une translation modifie-t-elle l'aire d'un polygone ?",
        "a": "Non, la translation **conserve les aires** (la figure transformée est superposable à la figure initiale)."
      },
      {
        "q": "Quelle transformation correspond à une rotation d'un demi-tour (180°) ?",
        "a": "La **symétrie centrale**."
      },
      {
        "q": "Sur quadrillage, une translation déplace $A$ de 4 carreaux à gauche et 1 vers le bas. Que fait-elle sur un autre point $M$ ?",
        "a": "Elle déplace aussi $M$ de 4 carreaux à gauche et 1 vers le bas : tous les points glissent de la même façon."
      },
      {
        "q": "Qu'est-ce qu'une frise obtenue par translation ?",
        "a": "Une bande où un **motif** est répété par une **même translation** : tous les motifs sont superposables et gardent la même orientation."
      },
      {
        "q": "Qu'est-ce qu'un pavage ?",
        "a": "Un recouvrement du plan par des motifs, **sans trou ni chevauchement**. On peut l'obtenir avec deux translations de directions différentes."
      }
    ]
  },
  "4G4": {
    "title": "4G4 : Espace : pyramides, cônes de révolution et volumes",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Identifier et décrire les composants d'une pyramide (sommet principal, base, faces latérales, hauteur).",
      "Identifier le tétraèdre comme une pyramide à base triangulaire.",
      "Décrire un cône de révolution obtenu par rotation d'un triangle rectangle.",
      "Calculer le volume d'une pyramide et d'un cône avec la formule $V = \\frac{1}{3} \\times \\text{Base} \\times h$.",
      "Calculer l'angle du secteur circulaire formant le patron d'un cône de révolution.",
      "Construire le patron d'une pyramide et d'un cône de révolution.",
      "Déterminer le rapport d'un agrandissement ou d'une réduction, et construire l'image d'une figure.",
      "Appliquer les coefficients d'agrandissement et de réduction aux longueurs, aires et volumes.",
      "Se repérer dans un pavé droit : abscisse, ordonnée et altitude.",
      "Représenter une pyramide et un cône de révolution en perspective cavalière."
    ],
    "keyPoints": [
      {
        "title": "1. Vocabulaire : pyramide et cône de révolution",
        "content": "• **Pyramide** : Solide formé d'une base polygonale et de faces latérales triangulaires ayant un sommet commun appelé **sommet principal**.\n• **Tétraèdre** : Pyramide dont la base est un triangle (elle possède 4 faces triangulaires).\n• **Hauteur d'une pyramide** : Segment issu du sommet principal perpendiculaire au plan de la base.\n• **Cône de révolution** : Solide engendré par la rotation d'un triangle rectangle autour de l'un des côtés de son angle droit.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 300 170\" width=\"300\" height=\"170\" style=\"max-width:300px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <!-- Pyramide -->\n    <g>\n      <polygon points=\"25,120 85,135 125,120 75,25\" fill=\"rgba(37, 99, 235, 0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" stroke-linejoin=\"round\" />\n      <line x1=\"25\" y1=\"120\" x2=\"75\" y2=\"25\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <line x1=\"85\" y1=\"135\" x2=\"75\" y2=\"25\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <line x1=\"125\" y1=\"120\" x2=\"75\" y2=\"25\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <line x1=\"25\" y1=\"120\" x2=\"65\" y2=\"105\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\" />\n      <line x1=\"125\" y1=\"120\" x2=\"65\" y2=\"105\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\" />\n      <line x1=\"75\" y1=\"25\" x2=\"65\" y2=\"105\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\" />\n      <line x1=\"75\" y1=\"25\" x2=\"75\" y2=\"120\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"3 3\" />\n      <path d=\"M 75 112 L 81 112 L 81 120\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.2\" />\n      <text x=\"72\" y=\"18\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">S</text>\n      <text x=\"79\" y=\"80\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#dc2626\">h</text>\n      <text x=\"75\" y=\"152\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">Pyramide</text>\n    </g>\n    <!-- Cône -->\n    <g>\n      <line x1=\"215\" y1=\"25\" x2=\"170\" y2=\"125\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <line x1=\"215\" y1=\"25\" x2=\"260\" y2=\"125\" stroke=\"#8b5cf6\" stroke-width=\"2\" />\n      <path d=\"M 170 125 A 45 12 0 0 0 260 125\" fill=\"rgba(139, 92, 246, 0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <path d=\"M 170 125 A 45 12 0 0 1 260 125\" fill=\"none\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\" />\n      <line x1=\"215\" y1=\"25\" x2=\"215\" y2=\"125\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"3 3\" />\n      <line x1=\"215\" y1=\"125\" x2=\"260\" y2=\"125\" stroke=\"#10b981\" stroke-width=\"1.8\" />\n      <path d=\"M 215 117 L 221 117 L 221 125\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.2\" />\n      <text x=\"212\" y=\"18\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">S</text>\n      <text x=\"206\" y=\"80\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#dc2626\">h</text>\n      <text x=\"235\" y=\"120\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#10b981\">r</text>\n      <text x=\"245\" y=\"75\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#8b5cf6\">g</text>\n      <text x=\"215\" y=\"152\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#8b5cf6\">Cône</text>\n    </g>\n  </svg>\n</div>"
      },
      {
        "title": "2. Volume d'une pyramide et d'un cône",
        "content": "Pour toute pyramide et tout cône de révolution, le volume est égal au tiers du produit de l'aire de la base par la hauteur :\n$$V = \\frac{\\text{Aire de la base} \\times \\text{hauteur}}{3} = \\frac{1}{3} \\times \\mathcal{B} \\times h$$\n• Pyramide à base carrée de côté $c$ : $V = \\frac{c^2 \\times h}{3}$\n• Pyramide à base rectangulaire ($L \\times l$) : $V = \\frac{L \\times l \\times h}{3}$\n• Cône de révolution de rayon $r$ : $V = \\frac{\\pi \\times r^2 \\times h}{3}$"
      },
      {
        "title": "3. Patrons d'une pyramide et d'un cône",
        "content": "**Patron d'une pyramide** : il est formé de la base et d'un triangle par face latérale, soit autant de triangles que la base a de côtés. Chaque triangle s'appuie sur un côté de la base. Deux triangles voisins doivent avoir un côté de même longueur, car ces deux côtés se recollent pour former une arête latérale.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 280 240\" width=\"280\" height=\"240\" style=\"max-width:280px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Patron d'une pyramide à base carrée : un carré et quatre triangles isocèles posés sur ses côtés\">\n    <polygon points=\"110,150 170,150 170,90 110,90\" fill=\"rgba(16, 185, 129, 0.12)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" stroke-linejoin=\"round\" />\n    <polygon points=\"110,90 170,90 140,25\" fill=\"rgba(37, 99, 235, 0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" stroke-linejoin=\"round\" />\n    <polygon points=\"170,90 170,150 235,120\" fill=\"rgba(37, 99, 235, 0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" stroke-linejoin=\"round\" />\n    <polygon points=\"170,150 110,150 140,215\" fill=\"rgba(37, 99, 235, 0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" stroke-linejoin=\"round\" />\n    <polygon points=\"110,150 110,90 45,120\" fill=\"rgba(37, 99, 235, 0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" stroke-linejoin=\"round\" />\n    <g font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #334155)\">\n      <text x=\"118\" y=\"145\" >A</text>\n      <text x=\"155\" y=\"145\">B</text>\n      <text x=\"155\" y=\"104\">C</text>\n      <text x=\"118\" y=\"104\">D</text>\n      <text x=\"136\" y=\"20\">S</text>\n      <text x=\"240\" y=\"124\">S</text>\n      <text x=\"136\" y=\"230\">S</text>\n      <text x=\"32\" y=\"124\">S</text>\n    </g>\n  </svg>\n</div>\n\n**Pour le construire**, trace la base en vraie grandeur. Puis, sur chaque côté de la base, place le sommet du triangle au compas : on reporte depuis chaque extrémité du côté la longueur de l'arête latérale correspondante, et le point d'intersection des deux arcs est le sommet du triangle.\n\n**Patron d'un cône de révolution** : il est composé d'un disque de base (rayon $r$) et d'un secteur de disque (rayon égal à la **génératrice** $g$).\nLa longueur de l'arc du secteur est égale au périmètre du disque de base ($2\\pi r$), car cet arc s'enroule exactement autour de la base.\nCet arc est une portion d'un cercle de rayon $g$, de périmètre $2\\pi g$, et la longueur d'un arc est proportionnelle à son angle au centre $\\alpha$. On a donc $\\dfrac{\\alpha}{360^\\circ} = \\dfrac{2\\pi r}{2\\pi g} = \\dfrac{r}{g}$, soit :\n$$\\alpha = 360^\\circ \\times \\frac{r}{g} \\quad (\\text{où } g \\text{ est la génératrice})$$\nPour une **génératrice $g$ fixée**, l'angle $\\alpha$ est donc proportionnel au rayon $r$. Si $g$ change aussi, ce n'est plus vrai : on reprend la formule.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 280 150\" width=\"280\" height=\"150\" style=\"max-width:280px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <!-- Disque de base -->\n    <circle cx=\"60\" cy=\"80\" r=\"35\" fill=\"rgba(16, 185, 129, 0.08)\" stroke=\"#10b981\" stroke-width=\"1.8\" />\n    <line x1=\"60\" y1=\"80\" x2=\"95\" y2=\"80\" stroke=\"#10b981\" stroke-width=\"1.8\" />\n    <circle cx=\"60\" cy=\"80\" r=\"2.5\" fill=\"#10b981\" />\n    <text x=\"75\" y=\"74\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#10b981\">r</text>\n    <text x=\"60\" y=\"130\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"#10b981\">Disque de base</text>\n    <!-- Secteur angulaire -->\n    <path d=\"M 190 25 L 140 105 A 95 95 0 0 0 240 105 Z\" fill=\"rgba(139, 92, 246, 0.1)\" stroke=\"#8b5cf6\" stroke-width=\"1.8\" />\n    <path d=\"M 175 48 A 25 25 0 0 0 205 48\" fill=\"none\" stroke=\"#d97706\" stroke-width=\"1.8\" />\n    <text x=\"190\" y=\"58\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#d97706\">α</text>\n    <text x=\"152\" y=\"60\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#8b5cf6\">g</text>\n    <text x=\"190\" y=\"133\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#8b5cf6\">Arc = 2πr</text>\n    <text x=\"190\" y=\"147\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"#8b5cf6\">Secteur circulaire</text>\n  </svg>\n</div>\n\n**Pour le construire** : calcule $\\alpha$, trace au compas un arc de rayon $g$, marque l'angle $\\alpha$ au rapporteur, puis trace un cercle de rayon $r$ qui touche l'arc en un seul point."
      },
      {
        "title": "4. Effets d'un agrandissement ou d'une réduction de rapport k",
        "content": "Dans un **agrandissement** ou une **réduction**, toutes les dimensions d'une figure ou d'un solide sont multipliées par un même nombre $k > 0$, appelé **rapport**. La forme et les angles ne changent pas.\n• Pour trouver le rapport : $k = \\dfrac{\\text{longueur sur l'image}}{\\text{longueur correspondante au départ}}$.\n• Si $k > 1$, c'est un **agrandissement** ; si $0 < k < 1$, c'est une **réduction**.\n• Les **longueurs** sont multipliées par $k$.\n• Les **aires** sont multipliées par $k^2$.\n• Les **volumes** sont multipliés par $k^3$.\n\n**Pour construire l'image d'une figure**, on multiplie chaque longueur par $k$ et on reproduit les mêmes angles.\n*(Exemple : un carré de côté $3$ cm agrandi avec $k=2$ devient un carré de côté $6$ cm ; son aire passe de $9$ cm² à $36$ cm², elle est multipliée par $2^2 = 4$.)*\n*(Exemple : si on double les dimensions d'une pyramide ($k=2$), son volume est multiplié par $2^3 = 8$ !)*"
      },
      {
        "title": "5. Se repérer dans un pavé droit",
        "content": "Pour repérer un point d'un pavé droit $ABCDEFGH$, on choisit un sommet comme **origine**, ici $A$, et les trois arêtes qui en partent comme axes :\n• l'axe des **abscisses** est porté par $(AB)$ ;\n• l'axe des **ordonnées** est porté par $(AD)$ ;\n• l'axe des **altitudes** est porté par $(AE)$.\n\nUn point est repéré par trois nombres, toujours dans cet ordre : $(\\text{abscisse} ; \\text{ordonnée} ; \\text{altitude})$.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 310 195\" width=\"310\" height=\"195\" style=\"max-width:310px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Pavé droit ABCDEFGH en perspective cavalière, avec les axes portés par les arêtes issues de A\">\n    <polygon points=\"60,170 220,170 220,80 60,80\" fill=\"rgba(37, 99, 235, 0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.6\" stroke-linejoin=\"round\" />\n    <polygon points=\"220,170 280,125 280,35 220,80\" fill=\"rgba(37, 99, 235, 0.05)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.6\" stroke-linejoin=\"round\" />\n    <polygon points=\"60,80 220,80 280,35 120,35\" fill=\"rgba(37, 99, 235, 0.05)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.6\" stroke-linejoin=\"round\" />\n    <line x1=\"120\" y1=\"125\" x2=\"280\" y2=\"125\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.3\" stroke-dasharray=\"5 4\" />\n    <line x1=\"120\" y1=\"125\" x2=\"120\" y2=\"35\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.3\" stroke-dasharray=\"5 4\" />\n    <line x1=\"60\" y1=\"170\" x2=\"220\" y2=\"170\" stroke=\"#2563eb\" stroke-width=\"2.6\" />\n    <polygon points=\"220,170 211,165.5 211,174.5\" fill=\"#2563eb\" />\n    <line x1=\"60\" y1=\"170\" x2=\"120\" y2=\"125\" stroke=\"#10b981\" stroke-width=\"2.6\" stroke-dasharray=\"5 4\" />\n    <polygon points=\"120,125 115.2,133.6 110.4,127.2\" fill=\"#10b981\" />\n    <line x1=\"60\" y1=\"170\" x2=\"60\" y2=\"80\" stroke=\"#d97706\" stroke-width=\"2.6\" />\n    <polygon points=\"60,80 55.5,89 64.5,89\" fill=\"#d97706\" />\n    <g font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #334155)\">\n      <text x=\"49\" y=\"182\">A</text>\n      <text x=\"224\" y=\"184\">B</text>\n      <text x=\"286\" y=\"133\">C</text>\n      <text x=\"125\" y=\"139\">D</text>\n      <text x=\"47\" y=\"76\">E</text>\n      <text x=\"208\" y=\"75\">F</text>\n      <text x=\"285\" y=\"32\">G</text>\n      <text x=\"108\" y=\"30\">H</text>\n    </g>\n    <g font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\">\n      <text x=\"140\" y=\"186\" text-anchor=\"middle\" fill=\"#2563eb\">abscisses</text>\n      <text x=\"116\" y=\"117\" text-anchor=\"end\" fill=\"#10b981\">ordonnées</text>\n      <text x=\"54\" y=\"128\" text-anchor=\"end\" fill=\"#d97706\">altitudes</text>\n    </g>\n  </svg>\n</div>\n\nPour trouver les coordonnées d'un point, on part de $A$ et on regarde de combien il faut avancer le long de chaque axe.\n*(Exemple : si $AB = 6$, $AD = 4$ et $AE = 3$, alors $A(0 ; 0 ; 0)$, $B(6 ; 0 ; 0)$, $D(0 ; 4 ; 0)$, $E(0 ; 0 ; 3)$, $C(6 ; 4 ; 0)$ et $G(6 ; 4 ; 3)$.)*"
      },
      {
        "title": "6. Représenter une pyramide et un cône en perspective cavalière",
        "content": "En perspective cavalière (voir la 5e), une face avant verticale est dessinée en vraie grandeur. Les fuyantes sont parallèles entre elles, inclinées et réduites, et les arêtes cachées sont en pointillés.\n\n**Pour une pyramide à base carrée ou rectangulaire** posée sur un plan horizontal et dont le sommet est à la verticale du centre de la base :\n1. Dessine la base : elle est horizontale, donc elle apparaît comme un **parallélogramme** ;\n2. Trace ses diagonales pour placer le centre de la base ;\n3. À partir de ce centre, trace la hauteur **verticale**, en vraie grandeur : on obtient le sommet ;\n4. Relie le sommet aux quatre sommets de la base, avec des pointillés pour les arêtes cachées.\n\n**Pour un cône de révolution** :\n1. Dessine la base comme un **ovale aplati** dont la largeur est le diamètre en vraie grandeur ; la moitié arrière est en pointillés ;\n2. À partir du centre, trace la hauteur verticale en vraie grandeur ;\n3. Relie le sommet aux deux extrémités de l'ovale : ce sont deux génératrices.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 480 205\" width=\"480\" height=\"205\" style=\"max-width:480px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Une pyramide à base carrée et un cône de révolution dessinés en perspective cavalière, les traits cachés en pointillés\">\n    <polygon points=\"60,170 220,170 170,40\" fill=\"rgba(37, 99, 235, 0.08)\" stroke=\"none\" />\n    <polygon points=\"220,170 280,125 170,40\" fill=\"rgba(37, 99, 235, 0.05)\" stroke=\"none\" />\n    <g stroke=\"var(--text-main, #334155)\" stroke-width=\"1.7\" stroke-linecap=\"round\">\n      <line x1=\"60\" y1=\"170\" x2=\"220\" y2=\"170\" />\n      <line x1=\"220\" y1=\"170\" x2=\"280\" y2=\"125\" />\n      <line x1=\"170\" y1=\"40\" x2=\"60\" y2=\"170\" />\n      <line x1=\"170\" y1=\"40\" x2=\"220\" y2=\"170\" />\n      <line x1=\"170\" y1=\"40\" x2=\"280\" y2=\"125\" />\n    </g>\n    <g stroke=\"var(--text-main, #334155)\" stroke-width=\"1.3\" stroke-dasharray=\"5 4\">\n      <line x1=\"60\" y1=\"170\" x2=\"120\" y2=\"125\" />\n      <line x1=\"120\" y1=\"125\" x2=\"280\" y2=\"125\" />\n      <line x1=\"170\" y1=\"40\" x2=\"120\" y2=\"125\" />\n    </g>\n    <g stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1\" stroke-dasharray=\"2 3\">\n      <line x1=\"60\" y1=\"170\" x2=\"280\" y2=\"125\" />\n      <line x1=\"220\" y1=\"170\" x2=\"120\" y2=\"125\" />\n    </g>\n    <line x1=\"170\" y1=\"40\" x2=\"170\" y2=\"147.5\" stroke=\"#d97706\" stroke-width=\"1.7\" stroke-dasharray=\"5 4\" />\n    <circle cx=\"170\" cy=\"147.5\" r=\"2.4\" fill=\"#d97706\" />\n    <ellipse cx=\"390\" cy=\"160\" rx=\"60\" ry=\"18\" fill=\"rgba(139, 92, 246, 0.08)\" stroke=\"none\" />\n    <polygon points=\"330,160 450,160 390,40\" fill=\"rgba(139, 92, 246, 0.08)\" stroke=\"none\" />\n    <path d=\"M 330 160 A 60 18 0 0 0 450 160\" fill=\"none\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.7\" />\n    <path d=\"M 330 160 A 60 18 0 0 1 450 160\" fill=\"none\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.3\" stroke-dasharray=\"5 4\" />\n    <line x1=\"390\" y1=\"40\" x2=\"330\" y2=\"160\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.7\" stroke-linecap=\"round\" />\n    <line x1=\"390\" y1=\"40\" x2=\"450\" y2=\"160\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.7\" stroke-linecap=\"round\" />\n    <line x1=\"390\" y1=\"40\" x2=\"390\" y2=\"160\" stroke=\"#d97706\" stroke-width=\"1.7\" stroke-dasharray=\"5 4\" />\n    <circle cx=\"390\" cy=\"160\" r=\"2.4\" fill=\"#d97706\" />\n    <g font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #334155)\">\n      <text x=\"166\" y=\"33\">S</text>\n      <text x=\"49\" y=\"182\">A</text>\n      <text x=\"224\" y=\"184\">B</text>\n      <text x=\"286\" y=\"131\">C</text>\n      <text x=\"108\" y=\"122\">D</text>\n      <text x=\"386\" y=\"33\">S</text>\n      <text x=\"396\" y=\"157\">O</text>\n    </g>\n    <g font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"var(--text-muted, #64748b)\" text-anchor=\"middle\">\n      <text x=\"170\" y=\"200\">Pyramide à base carrée</text>\n      <text x=\"390\" y=\"200\">Cône de révolution</text>\n    </g>\n  </svg>\n</div>\n\n**Attention** : sur un dessin en perspective, les longueurs des fuyantes sont réduites et les angles droits de la base ne se voient plus. On ne mesure jamais sur le dessin : on utilise les dimensions de l'énoncé."
      },
      {
        "title": "À retenir",
        "content": "• Pyramide et cône : $V = \\dfrac{\\text{aire de la base} \\times \\text{hauteur}}{3}$.\n• Cône : base = disque, donc $V = \\dfrac{\\pi r^2 h}{3}$.\n• La hauteur est **perpendiculaire** à la base ; ne pas la confondre avec une arête ou la génératrice.\n• Dans un cône, hauteur, rayon et génératrice forment un triangle rectangle (Pythagore).\n• Patron d'un cône : le secteur a pour rayon la génératrice et pour angle $\\alpha = 360^\\circ \\times \\dfrac{r}{g}$.\n• Rapport $k$ : les longueurs sont multipliées par $k$, les aires par $k^2$ et les volumes par $k^3$.\n• Dans un pavé droit, un point a pour coordonnées $(\\text{abscisse} ; \\text{ordonnée} ; \\text{altitude})$.\n• En perspective cavalière, la base horizontale d'une pyramide est un parallélogramme, celle d'un cône un ovale, et la hauteur reste verticale.\n• $1$ L $= 1$ dm³ $= 1\\,000$ cm³."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer le volume d'un cône de révolution",
        "example": "Calculer le volume d'un cône de rayon de base r = 3 cm et de hauteur h = 7 cm (au cm³ près).\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.8rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 200 140\" width=\"200\" height=\"140\" style=\"max-width:200px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <line x1=\"100\" y1=\"20\" x2=\"60\" y2=\"110\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"100\" y1=\"20\" x2=\"140\" y2=\"110\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <path d=\"M 60 110 A 40 10 0 0 0 140 110\" fill=\"rgba(37, 99, 235, 0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <path d=\"M 60 110 A 40 10 0 0 1 140 110\" fill=\"none\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.5\" stroke-dasharray=\"3 3\" />\n    <line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"110\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"3 3\" />\n    <line x1=\"100\" y1=\"110\" x2=\"140\" y2=\"110\" stroke=\"#10b981\" stroke-width=\"2\" />\n    <path d=\"M 100 102 L 106 102 L 106 110\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.2\" />\n    <text x=\"84\" y=\"65\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">h = 7 cm</text>\n    <text x=\"112\" y=\"124\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#10b981\">r = 3 cm</text>\n  </svg>\n</div>",
        "steps": [
          "**Étape 1 (Aire de la base)** : $\\mathcal{B} = \\pi \\times r^2 = \\pi \\times 3^2 = 9\\pi \\text{ cm}^2$.",
          "**Étape 2 (Formule du volume)** : $V = \\frac{\\mathcal{B} \\times h}{3} = \\frac{9\\pi \\times 7}{3}$.",
          "**Étape 3 (Simplification et valeur exacte)** : $\\frac{9 \\times 7}{3}\\pi = 3 \\times 7\\pi = 21\\pi \\text{ cm}^3$.",
          "**Étape 4 (Valeur arrondie)** : $V \\approx 21 \\times 3{,}14159 \\approx 66 \\text{ cm}^3$."
        ]
      },
      {
        "title": "Méthode : Calculer le volume d'une pyramide",
        "example": "Une pyramide a pour base un rectangle de $6$ cm sur $4$ cm et pour hauteur $9$ cm. Calculer son volume, puis le convertir en litres.",
        "steps": [
          "**Étape 1 (Aire de la base)** : $\\mathcal{B} = 6 \\times 4 = 24$ cm².",
          "**Étape 2 (Formule)** : $V = \\dfrac{\\mathcal{B} \\times h}{3} = \\dfrac{24 \\times 9}{3} = \\dfrac{216}{3} = 72$ cm³.",
          "**Étape 3 (Conversion)** : $1$ L $= 1$ dm³ $= 1\\,000$ cm³, donc $V = 0{,}072$ L."
        ]
      },
      {
        "title": "Méthode : Trouver la hauteur d'un cône avec Pythagore, puis son volume",
        "example": "Un cône de révolution a pour rayon de base $r = 5$ cm et pour génératrice $g = 13$ cm. Calculer sa hauteur puis son volume (valeur exacte, puis arrondi au cm³).",
        "steps": [
          "**Étape 1 (Triangle rectangle)** : la hauteur $[SO]$, le rayon $[OA]$ et la génératrice $[SA]$ forment un triangle $SOA$ rectangle en $O$.",
          "**Étape 2 (Pythagore)** : $SA^2 = SO^2 + OA^2$, donc $SO^2 = 13^2 - 5^2 = 169 - 25 = 144$ et $h = SO = \\sqrt{144} = 12$ cm.",
          "**Étape 3 (Volume)** : $V = \\dfrac{\\pi \\times r^2 \\times h}{3} = \\dfrac{\\pi \\times 25 \\times 12}{3} = 100\\pi$ cm³.",
          "**Étape 4 (Arrondi)** : $V \\approx 314$ cm³."
        ]
      },
      {
        "title": "Méthode : Construire le patron d'un cône de révolution",
        "example": "Construire le patron d'un cône de révolution de rayon $r = 2$ cm et de génératrice $g = 6$ cm.",
        "steps": [
          "**Étape 1 (Angle du secteur)** : $\\alpha = 360^\\circ \\times \\dfrac{2}{6} = 120^\\circ$.",
          "**Étape 2 (Secteur)** : au compas, trace un arc de cercle de rayon $6$ cm ; au rapporteur, marque au centre un angle de $120^\\circ$ et trace les deux rayons.",
          "**Étape 3 (Disque)** : trace un cercle de rayon $2$ cm qui touche l'arc en un seul point.",
          "**Étape 4 (Vérification)** : l'arc mesure $\\dfrac{120}{360} \\times 2\\pi \\times 6 = 4\\pi$ cm et le périmètre du disque vaut $2\\pi \\times 2 = 4\\pi$ cm. Les deux longueurs sont égales : le patron se referme."
        ]
      },
      {
        "title": "Méthode : Construire le patron d'une pyramide",
        "example": "Construire le patron d'une pyramide à base carrée de côté $4$ cm, dont les quatre arêtes latérales mesurent $5$ cm.",
        "steps": [
          "**Étape 1 (Base)** : trace un carré $ABCD$ de côté $4$ cm.",
          "**Étape 2 (Premier triangle)** : sur le côté $[AB]$, à l'extérieur du carré, trace au compas deux arcs de rayon $5$ cm centrés en $A$ et en $B$. Leur point d'intersection est le sommet du triangle.",
          "**Étape 3 (Autres triangles)** : recommence sur $[BC]$, $[CD]$ et $[DA]$, toujours à l'extérieur du carré.",
          "**Étape 4 (Vérification)** : on compte $1$ carré et $4$ triangles. Les côtés qui se recollent ont tous la même longueur, $5$ cm."
        ]
      },
      {
        "title": "Méthode : Lire les coordonnées d'un point dans un pavé droit",
        "example": "Dans le pavé droit $ABCDEFGH$, on prend $A$ comme origine, avec les abscisses sur $(AB)$, les ordonnées sur $(AD)$ et les altitudes sur $(AE)$. On a $AB = 5$, $AD = 3$ et $AE = 2$. Donner les coordonnées de $G$, puis celles du milieu $M$ de $[EG]$.",
        "steps": [
          "**Étape 1 (Le point $G$)** : pour aller de $A$ à $G$, on avance de $5$ le long de $(AB)$, de $3$ le long de $(AD)$ et on monte de $2$. Donc $G(5 ; 3 ; 2)$.",
          "**Étape 2 (Le point $E$)** : $E$ est à la verticale de $A$, donc $E(0 ; 0 ; 2)$.",
          "**Étape 3 (Le milieu)** : $M$ est sur la face du haut, donc son altitude est $2$. Il est à mi-chemin entre $E$ et $G$ : abscisse $\\dfrac{0 + 5}{2} = 2{,}5$ et ordonnée $\\dfrac{0 + 3}{2} = 1{,}5$.",
          "**Étape 4 (Conclusion)** : $M(2{,}5 ; 1{,}5 ; 2)$."
        ]
      },
      {
        "title": "Méthode : Trouver un rapport et l'utiliser",
        "example": "Une pyramide a une base d'aire $12$ cm², une hauteur de $10$ cm et un volume de $40$ cm³. On la réduit pour que sa hauteur mesure $5$ cm. Déterminer le rapport, l'aire de la nouvelle base et le nouveau volume.",
        "steps": [
          "**Étape 1 (Rapport)** : $k = \\dfrac{5}{10} = \\dfrac{1}{2}$, et $k < 1$ : c'est bien une réduction.",
          "**Étape 2 (Aire)** : les aires sont multipliées par $k^2$ : $12 \\times \\left(\\dfrac{1}{2}\\right)^2 = 12 \\times \\dfrac{1}{4} = 3$ cm².",
          "**Étape 3 (Volume)** : les volumes sont multipliés par $k^3$ : $40 \\times \\left(\\dfrac{1}{2}\\right)^3 = 40 \\times \\dfrac{1}{8} = 5$ cm³.",
          "**Étape 4 (Vérification)** : avec la formule, $V = \\dfrac{3 \\times 5}{3} = 5$ cm³ : on retrouve le même résultat."
        ]
      }
    ],
    "traps": [
      "⚠️ Oublier de diviser par 3 dans la formule du volume d'une pyramide ou d'un cône : un cylindre contient 3 cônes de même base et même hauteur !",
      "⚠️ Ne pas confondre la hauteur $h$ (perpendiculaire du sommet à la base) et la génératrice $g$ ou l'arête latérale (qui est oblique).",
      "⚠️ Mélanger les unités : toutes les longueurs doivent être dans la même unité avant de calculer un volume.",
      "⚠️ Multiplier une aire ou un volume directement par $k$ : une aire est multipliée par $k^2$, un volume par $k^3$.",
      "⚠️ Prendre le rayon de la base comme rayon du secteur : dans le patron d'un cône, le rayon du secteur est la **génératrice** $g$.",
      "⚠️ Donner les coordonnées dans le désordre : l'ordre est toujours abscisse, ordonnée, altitude.",
      "⚠️ Mesurer sur une figure en perspective : les fuyantes sont réduites et une base carrée y apparaît comme un parallélogramme."
    ],
    "flashcards": [
      {
        "q": "Quelle est la formule générale du volume d'une pyramide ou d'un cône ?",
        "a": "$$V = \\frac{\\text{Aire de la base} \\times \\text{hauteur}}{3}$$"
      },
      {
        "q": "Qu'est-ce qu'un tétraèdre ?",
        "a": "Une **pyramide à base triangulaire** (qui possède 4 faces triangulaires au total)."
      },
      {
        "q": "Si on multiplie toutes les longueurs d'un solide par 3, par combien son volume est-il multiplié ?",
        "a": "Par $3^3 = 27$ !"
      },
      {
        "q": "Quelle est la formule du volume d'un cône de rayon r et de hauteur h ?",
        "a": "$$V = \\frac{\\pi r^2 h}{3}$$"
      },
      {
        "q": "Comment calcule-t-on l'angle au centre $\\alpha$ du patron d'un cône ?",
        "a": "$$\\alpha = 360^\\circ \\times \\frac{r}{g} \\quad (r = \\text{rayon}, g = \\text{génératrice})$$"
      },
      {
        "q": "Dans un pavé droit repéré, dans quel ordre donne-t-on les coordonnées d'un point ?",
        "a": "$(\\text{abscisse} ; \\text{ordonnée} ; \\text{altitude})$."
      },
      {
        "q": "Comment dessine-t-on en perspective cavalière la base carrée d'une pyramide posée sur une table ?",
        "a": "Par un **parallélogramme** : la base est horizontale, et ses fuyantes sont inclinées et réduites."
      },
      {
        "q": "Quel est le rayon du secteur circulaire dans le patron d'un cône ?",
        "a": "La **génératrice** $g$ du cône (et non le rayon de la base)."
      },
      {
        "q": "Comment reconnaît-on une réduction à partir du rapport $k$ ?",
        "a": "C'est une réduction quand $0 < k < 1$, et un agrandissement quand $k > 1$."
      },
      {
        "q": "Volume d'une pyramide de base carrée de côté 3 cm et de hauteur 5 cm ?",
        "a": "$V = \\dfrac{3^2 \\times 5}{3} = 15$ cm³."
      },
      {
        "q": "Combien de cm³ dans 1 litre ?",
        "a": "$1\\,000$ cm³ (car $1$ L $= 1$ dm³)."
      }
    ]
  },
  "4D1": {
    "title": "4D1 : Statistiques : moyenne pondérée, médiane et étendue",
    "domain": "Organisation et Gestion de Données",
    "objectives": [
      "Calculer la moyenne simple d'une série de données.",
      "Réviser (notion de 5e) : calculer la moyenne pondérée par des effectifs ou des coefficients.",
      "Déterminer la médiane d'une série statistique ordonnée (effectif total pair et impair).",
      "Déterminer la médiane d'une série à partir d'un tableau d'effectifs ou d'un diagramme en bâtons (effectif total inférieur ou égal à 30).",
      "Lire et construire un diagramme circulaire (angle d'un secteur proportionnel à l'effectif).",
      "Pour aller plus loin (programme de 3e) : calculer l'étendue d'une série comme mesure de dispersion.",
      "Interpréter et comparer deux séries statistiques à l'aide de ces indicateurs."
    ],
    "keyPoints": [
      {
        "title": "1. Moyenne simple et moyenne pondérée (révision de 5e)",
        "content": "• **Moyenne simple** : somme de toutes les valeurs divisée par le nombre total de valeurs :\n$$\\bar{x} = \\frac{\\text{Somme des valeurs}}{N}$$\n• **Moyenne pondérée** : chaque valeur $x_i$ est affectée d'un effectif (ou coefficient) $n_i$ :\n$$\\bar{x} = \\frac{n_1 x_1 + n_2 x_2 + \\dots + n_p x_p}{n_1 + n_2 + \\dots + n_p} = \\frac{\\sum n_i x_i}{N_{\\text{total}}}$$"
      },
      {
        "title": "2. Médiane d'une série statistique",
        "content": "La **médiane** d'une série rangée par ordre croissant est un nombre qui la partage en deux groupes de même effectif (à une valeur près) :\n• au moins 50 % des valeurs sont inférieures ou égales à la médiane ;\n• au moins 50 % des valeurs sont supérieures ou égales à la médiane.\n**Condition préalable** : il faut toujours commencer par **ranger les valeurs par ordre croissant**.\nContrairement à la moyenne, la médiane n'est presque pas influencée par une valeur extrême."
      },
      {
        "title": "3. Méthode de calcul de la médiane selon la parité de l'effectif total N",
        "content": "• **Si N est IMPAIR** ($N = 2p + 1$) : La médiane est la valeur située exactement au milieu, de rang $\\frac{N+1}{2}$.\n  - Exemple : $N = 9$ valeurs ordonnées $\\implies \\frac{9+1}{2} = 5$ème valeur.\n• **Si N est PAIR** ($N = 2p$) : La médiane est la demi-somme des deux valeurs centrales, de rang $\\frac{N}{2}$ et $\\frac{N}{2} + 1$.\n  - Exemple : $N = 10$ valeurs ordonnées $\\implies$ moyenne entre la 5e et la 6e valeur."
      },
      {
        "title": "4. Médiane à partir d'un tableau d'effectifs ou d'un diagramme en bâtons",
        "content": "Dans un tableau d'effectifs ou sur un diagramme en bâtons, chaque valeur compte autant de fois que l'indique son effectif (la hauteur de son bâton). Les valeurs étant lues dans l'ordre croissant, on procède ainsi :\n• on calcule l'**effectif total** $N$ en additionnant les effectifs ;\n• on en déduit le ou les **rangs** de la médiane, comme au paragraphe 3 ;\n• on calcule les **effectifs cumulés** : chacun indique le dernier rang occupé par la valeur correspondante ;\n• on lit la ou les valeurs situées à ces rangs.\nQuand $N$ est pair, les deux valeurs centrales peuvent appartenir à deux bâtons différents : la médiane est alors leur moyenne, et ce n'est pas forcément une valeur de la série."
      },
      {
        "title": "5. Diagrammes circulaires",
        "content": "Un **diagramme circulaire** représente la répartition d'une série par des secteurs d'un même disque. L'angle de chaque secteur est **proportionnel** à l'effectif qu'il représente, le disque entier ($360^\\circ$) correspondant à l'effectif total :\n$$\\text{Angle du secteur} = \\dfrac{\\text{effectif du secteur}}{\\text{effectif total}} \\times 360^\\circ = \\text{fréquence} \\times 360^\\circ$$\n• **Construire** : on calcule l'angle de chaque secteur, on vérifie que la somme des angles vaut $360^\\circ$, puis on trace les secteurs au rapporteur.\n• **Lire** : l'effectif représenté par un secteur vaut $\\dfrac{\\text{angle}}{360} \\times \\text{effectif total}$. Par exemple, sur $40$ personnes, un secteur de $90^\\circ$ représente $\\dfrac{90}{360} \\times 40 = 10$ personnes.\n• Un demi-disque ($180^\\circ$) représente la moitié de l'effectif total, un quart de disque ($90^\\circ$) en représente le quart."
      },
      {
        "title": "6. Pour aller plus loin : étendue d'une série (étudiée en 3e)",
        "content": "L'**étendue** d'une série statistique est la différence entre la plus grande valeur et la plus petite valeur de la série :\n$$\\text{Étendue} = \\text{Valeur maximale} - \\text{Valeur minimale}$$\nElle mesure la dispersion des données : plus l'étendue est grande, plus la série est étalée."
      },
      {
        "title": "À retenir",
        "content": "• Moyenne pondérée : $\\dfrac{\\text{somme des (valeur} \\times \\text{effectif ou coefficient)}}{\\text{somme des effectifs ou coefficients}}$.\n• Médiane : on **range** la série ; $N$ impair : valeur de rang $\\dfrac{N+1}{2}$ ; $N$ pair : moyenne des valeurs de rangs $\\dfrac{N}{2}$ et $\\dfrac{N}{2} + 1$.\n• Tableau ou diagramme en bâtons : les **effectifs cumulés** donnent le ou les rangs de la médiane.\n• Diagramme circulaire : angle du secteur = fréquence $\\times 360^\\circ$ ; la somme des angles vaut $360^\\circ$.\n• Moyenne et médiane sont des indicateurs de **position**.\n• **Pour aller plus loin** : étendue = maximum − minimum ; elle mesure la **dispersion**."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Déterminer la médiane d'une série de notes",
        "example": "Voici les notes obtenues par un élève : 14, 8, 12, 16, 9, 11, 15. Déterminer la médiane.",
        "steps": [
          "**Étape 1 (Ordonner la série)** : $8 \\le 9 \\le 11 \\le 12 \\le 14 \\le 15 \\le 16$.",
          "**Étape 2 (Compter l'effectif)** : Il y a $N = 7$ valeurs (nombre impair).",
          "**Étape 3 (Identifier le rang)** : $\\frac{7+1}{2} = 4$ème valeur.",
          "**Étape 4 (Conclusion)** : La 4e valeur est 12. La note médiane est donc **12** (3 notes sont $\\le 12$ et 3 notes sont $\\ge 12$)."
        ]
      },
      {
        "title": "Méthode : Calculer une moyenne pondérée par des coefficients",
        "example": "Sam a obtenu $12$ (coefficient 2), $15$ (coefficient 3) et $9$ (coefficient 1). Calculer sa moyenne.",
        "steps": [
          "**Étape 1 (Produits)** : $12 \\times 2 = 24$ ; $15 \\times 3 = 45$ ; $9 \\times 1 = 9$.",
          "**Étape 2 (Somme des produits)** : $24 + 45 + 9 = 78$.",
          "**Étape 3 (Somme des coefficients)** : $2 + 3 + 1 = 6$.",
          "**Étape 4 (Moyenne)** : $\\bar{x} = \\dfrac{78}{6} = 13$. (Sans coefficients, on aurait trouvé $\\dfrac{12 + 15 + 9}{3} = 12$.)"
        ]
      },
      {
        "title": "Méthode : Médiane d'une série d'effectif pair et comparaison avec la moyenne",
        "example": "Temps de trajet (en minutes) de 8 élèves : $15 ; 7 ; 20 ; 9 ; 3 ; 13 ; 7 ; 12$. Déterminer la médiane et la moyenne. (**Pour aller plus loin** : déterminer aussi l'étendue.)",
        "steps": [
          "**Étape 1 (Ranger)** : $3 ; 7 ; 7 ; 9 ; 12 ; 13 ; 15 ; 20$ ($N = 8$, pair).",
          "**Étape 2 (Médiane)** : les valeurs centrales sont la 4e et la 5e : $9$ et $12$. Médiane $= \\dfrac{9 + 12}{2} = 10{,}5$ min.",
          "**Étape 3 (Moyenne)** : $\\dfrac{3 + 7 + 7 + 9 + 12 + 13 + 15 + 20}{8} = \\dfrac{86}{8} = 10{,}75$ min.",
          "**Étape 4, pour aller plus loin (Étendue)** : $20 - 3 = 17$ min.",
          "**Interprétation** : au moins la moitié des élèves mettent 10,5 minutes ou moins ; les temps sont assez dispersés (17 min d'écart entre extrêmes)."
        ]
      },
      {
        "title": "Méthode : Lire la médiane sur un diagramme en bâtons",
        "example": "Le diagramme en bâtons ci-dessous donne le nombre de frères et sœurs des élèves d'une classe. Déterminer la médiane de cette série.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.8rem auto; max-width:380px;\"><svg class=\"geo-svg-figure\" viewBox=\"0 0 400 280\" width=\"400\" height=\"280\" style=\"width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Diagramme en bâtons. 0 : effectif 5 ; 1 : effectif 7 ; 2 : effectif 6 ; 3 : effectif 4 ; 4 : effectif 2.\"><line x1=\"50\" y1=\"224.0\" x2=\"380\" y2=\"224.0\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"42\" y=\"229.0\" font-family=\"system-ui, sans-serif\" font-weight=\"500\" fill=\"currentColor\" font-size=\"14\" text-anchor=\"end\">0</text><line x1=\"50\" y1=\"196.3\" x2=\"380\" y2=\"196.3\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"42\" y=\"201.3\" font-family=\"system-ui, sans-serif\" font-weight=\"500\" fill=\"currentColor\" font-size=\"14\" text-anchor=\"end\">1</text><line x1=\"50\" y1=\"168.6\" x2=\"380\" y2=\"168.6\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"42\" y=\"173.6\" font-family=\"system-ui, sans-serif\" font-weight=\"500\" fill=\"currentColor\" font-size=\"14\" text-anchor=\"end\">2</text><line x1=\"50\" y1=\"140.9\" x2=\"380\" y2=\"140.9\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"42\" y=\"145.9\" font-family=\"system-ui, sans-serif\" font-weight=\"500\" fill=\"currentColor\" font-size=\"14\" text-anchor=\"end\">3</text><line x1=\"50\" y1=\"113.1\" x2=\"380\" y2=\"113.1\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"42\" y=\"118.1\" font-family=\"system-ui, sans-serif\" font-weight=\"500\" fill=\"currentColor\" font-size=\"14\" text-anchor=\"end\">4</text><line x1=\"50\" y1=\"85.4\" x2=\"380\" y2=\"85.4\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"42\" y=\"90.4\" font-family=\"system-ui, sans-serif\" font-weight=\"500\" fill=\"currentColor\" font-size=\"14\" text-anchor=\"end\">5</text><line x1=\"50\" y1=\"57.7\" x2=\"380\" y2=\"57.7\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"42\" y=\"62.7\" font-family=\"system-ui, sans-serif\" font-weight=\"500\" fill=\"currentColor\" font-size=\"14\" text-anchor=\"end\">6</text><line x1=\"50\" y1=\"30.0\" x2=\"380\" y2=\"30.0\" stroke=\"currentColor\" stroke-opacity=\"0.18\" stroke-width=\"1\" /><text x=\"42\" y=\"35.0\" font-family=\"system-ui, sans-serif\" font-weight=\"500\" fill=\"currentColor\" font-size=\"14\" text-anchor=\"end\">7</text><line x1=\"50\" y1=\"224\" x2=\"380\" y2=\"224\" stroke=\"currentColor\" stroke-width=\"1.6\" /><line x1=\"50\" y1=\"224\" x2=\"50\" y2=\"20\" stroke=\"currentColor\" stroke-width=\"1.6\" /><line x1=\"80.0\" y1=\"224\" x2=\"80.0\" y2=\"85.4\" stroke=\"#2563eb\" stroke-width=\"7\" /><text x=\"80.0\" y=\"246\" font-family=\"system-ui, sans-serif\" font-weight=\"500\" fill=\"currentColor\" font-size=\"14\" text-anchor=\"middle\">0</text><line x1=\"147.5\" y1=\"224\" x2=\"147.5\" y2=\"30.0\" stroke=\"#2563eb\" stroke-width=\"7\" /><text x=\"147.5\" y=\"246\" font-family=\"system-ui, sans-serif\" font-weight=\"500\" fill=\"currentColor\" font-size=\"14\" text-anchor=\"middle\">1</text><line x1=\"215.0\" y1=\"224\" x2=\"215.0\" y2=\"57.7\" stroke=\"#2563eb\" stroke-width=\"7\" /><text x=\"215.0\" y=\"246\" font-family=\"system-ui, sans-serif\" font-weight=\"500\" fill=\"currentColor\" font-size=\"14\" text-anchor=\"middle\">2</text><line x1=\"282.5\" y1=\"224\" x2=\"282.5\" y2=\"113.1\" stroke=\"#2563eb\" stroke-width=\"7\" /><text x=\"282.5\" y=\"246\" font-family=\"system-ui, sans-serif\" font-weight=\"500\" fill=\"currentColor\" font-size=\"14\" text-anchor=\"middle\">3</text><line x1=\"350.0\" y1=\"224\" x2=\"350.0\" y2=\"168.6\" stroke=\"#2563eb\" stroke-width=\"7\" /><text x=\"350.0\" y=\"246\" font-family=\"system-ui, sans-serif\" font-weight=\"500\" fill=\"currentColor\" font-size=\"14\" text-anchor=\"middle\">4</text><text x=\"44\" y=\"15\" font-family=\"system-ui, sans-serif\" font-weight=\"500\" fill=\"currentColor\" font-size=\"14\" text-anchor=\"start\">Effectif</text><text x=\"215\" y=\"272\" font-family=\"system-ui, sans-serif\" font-weight=\"500\" fill=\"currentColor\" font-size=\"14\" text-anchor=\"middle\">Nombre de frères et sœurs</text></svg></div>",
        "steps": [
          "**Étape 1 (Effectif total)** : $N = 5 + 7 + 6 + 4 + 2 = 24$, nombre pair.",
          "**Étape 2 (Rangs centraux)** : la médiane est la moyenne de la 12e et de la 13e valeur.",
          "**Étape 3 (Effectifs cumulés)** : $5$ ; $12$ ; $18$ ; $22$ ; $24$. La valeur $1$ occupe donc les rangs 6 à 12 et la valeur $2$ les rangs 13 à 18.",
          "**Étape 4 (Conclusion)** : la 12e valeur est $1$ et la 13e est $2$, donc la médiane est $\\dfrac{1 + 2}{2} = 1{,}5$. La moitié des élèves ont au plus 1 frère ou sœur, l'autre moitié en ont au moins 2."
        ]
      },
      {
        "title": "Méthode : Construire un diagramme circulaire",
        "example": "Sur les $24$ élèves d'une classe, $12$ viennent en bus, $4$ à vélo et $8$ à pied. Représenter cette répartition par un diagramme circulaire.",
        "steps": [
          "**Étape 1 (Proportionnalité)** : $24$ élèves correspondent à $360^\\circ$, donc un élève correspond à $\\dfrac{360}{24} = 15^\\circ$.",
          "**Étape 2 (Angles)** : Bus : $12 \\times 15 = 180^\\circ$ ; Vélo : $4 \\times 15 = 60^\\circ$ ; À pied : $8 \\times 15 = 120^\\circ$.",
          "**Étape 3 (Vérification)** : $180 + 60 + 120 = 360$ : la somme des angles est bien $360^\\circ$.",
          "**Étape 4 (Tracé)** : on trace un disque et un rayon, puis on reporte les angles au rapporteur, secteur après secteur, et on indique ce que représente chacun.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.8rem auto; max-width:380px;\"><svg class=\"geo-svg-figure\" viewBox=\"0 0 440 230\" width=\"440\" height=\"230\" style=\"width:100%; height:auto; display:block; margin:0 auto; color:var(--text-main, #1e293b);\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Diagramme circulaire. Bus : 180° ; Vélo : 60° ; À pied : 120°.\"><path d=\"M 220 115 L 220.00 30.00 A 85 85 0 0 1 220.00 200.00 Z\" fill=\"#2563eb\" fill-opacity=\"0.7\" stroke=\"currentColor\" stroke-width=\"1.2\" /><path d=\"M 220 115 L 220.00 200.00 A 85 85 0 0 1 146.39 157.50 Z\" fill=\"#f59e0b\" fill-opacity=\"0.7\" stroke=\"currentColor\" stroke-width=\"1.2\" /><path d=\"M 220 115 L 146.39 157.50 A 85 85 0 0 1 220.00 30.00 Z\" fill=\"#10b981\" fill-opacity=\"0.7\" stroke=\"currentColor\" stroke-width=\"1.2\" /><text x=\"315.0\" y=\"120.0\" font-family=\"system-ui, sans-serif\" font-weight=\"500\" fill=\"currentColor\" font-size=\"14\" text-anchor=\"start\">Bus : 180°</text><text x=\"172.5\" y=\"202.3\" font-family=\"system-ui, sans-serif\" font-weight=\"500\" fill=\"currentColor\" font-size=\"14\" text-anchor=\"end\">Vélo : 60°</text><text x=\"137.7\" y=\"72.5\" font-family=\"system-ui, sans-serif\" font-weight=\"500\" fill=\"currentColor\" font-size=\"14\" text-anchor=\"end\">À pied : 120°</text></svg></div>"
        ]
      }
    ],
    "traps": [
      "⚠️ Chercher la médiane sans avoir au préalable rangé les valeurs dans l'ordre croissant !",
      "⚠️ Dans une moyenne avec coefficients, diviser par le nombre de matières au lieu de diviser par la **somme des coefficients** !",
      "⚠️ Pour une série de 8 valeurs, la médiane n'est pas la 4e valeur : c'est la moyenne de la 4e et de la 5e.",
      "⚠️ Sur un diagramme en bâtons, le bâton le plus haut indique la valeur la **plus fréquente**, pas la médiane : il faut cumuler les effectifs jusqu'au rang central.",
      "⚠️ Dans un diagramme circulaire, un angle n'est pas un pourcentage : 25 % de l'effectif total correspond à un secteur de $90^\\circ$, pas de $25^\\circ$."
    ],
    "flashcards": [
      {
        "q": "(Pour aller plus loin) Comment calcule-t-on l'étendue d'une série statistique ?",
        "a": "$$\\text{Étendue} = \\text{Valeur maximale} - \\text{Valeur minimale}$$"
      },
      {
        "q": "Quelle est la première étape obligatoire pour déterminer une médiane ?",
        "a": "Ranger impérativement les valeurs de la série **par ordre croissant**."
      },
      {
        "q": "Dans une série de 11 valeurs rangées, quel est le rang de la médiane ?",
        "a": "Le 6e rang (car $\\frac{11+1}{2} = 6$, il y a 5 valeurs avant et 5 valeurs après)."
      },
      {
        "q": "La médiane d'une série est 13. Que cela signifie-t-il ?",
        "a": "Cela signifie qu'au moins la moitié (50%) des données sont inférieures ou égales à 13, et au moins la moitié sont supérieures ou égales à 13."
      },
      {
        "q": "(Pour aller plus loin) Calculer l'étendue de la série : 4 ; 12 ; 7 ; 19 ; 3.",
        "a": "$19 - 3 = 16$."
      },
      {
        "q": "Médiane de la série $2 ; 5 ; 8 ; 10$ ?",
        "a": "$\\dfrac{5 + 8}{2} = 6{,}5$."
      },
      {
        "q": "Moyenne de $10$ (coefficient 3) et $14$ (coefficient 1) ?",
        "a": "$\\dfrac{30 + 14}{4} = \\dfrac{44}{4} = 11$."
      },
      {
        "q": "Dans un diagramme circulaire, comment calcule-t-on l'angle d'un secteur ?",
        "a": "$$\\text{Angle} = \\dfrac{\\text{effectif du secteur}}{\\text{effectif total}} \\times 360^\\circ$$"
      },
      {
        "q": "Dans un diagramme circulaire représentant $20$ élèves, un secteur a un angle de $90^\\circ$. Combien d'élèves représente-t-il ?",
        "a": "$\\dfrac{90}{360} \\times 20 = 5$ élèves."
      },
      {
        "q": "Comment trouver la médiane à partir d'un diagramme en bâtons ?",
        "a": "On calcule l'effectif total $N$, on en déduit le ou les rangs centraux, puis on **cumule les effectifs** jusqu'à atteindre ces rangs."
      }
    ]
  },
  "4D2": {
    "title": "4D2 : Probabilités : événements contraires et 2 épreuves",
    "domain": "Organisation et Gestion de Données",
    "objectives": [
      "Maîtriser le vocabulaire : expérience aléatoire, issue, événement, événement élémentaire, certain, impossible.",
      "Calculer la probabilité d'un événement en situation d'équiprobabilité : $P(A) = \\frac{\\text{issues favorables}}{\\text{issues possibles}}$.",
      "Définir l'événement contraire $\\bar{A}$ (« non A ») et appliquer la formule fondamentale $P(\\bar{A}) = 1 - P(A)$.",
      "Calculer des probabilités dans des situations simples qui ne sont pas forcément équiprobables : roue à secteurs inégaux, cible (rapport d'aires), osselet.",
      "Comprendre le lien entre fréquence observée et probabilité lorsque l'on répète une expérience un grand nombre de fois.",
      "Pour aller plus loin : représenter une expérience aléatoire à deux épreuves successives indépendantes à l'aide d'un arbre pondéré ou d'un tableau à double entrée.",
      "Pour aller plus loin : calculer des probabilités composées."
    ],
    "keyPoints": [
      {
        "title": "1. Vocabulaire fondamental des probabilités",
        "content": "• **Expérience aléatoire** : Expérience dont on connaît toutes les issues possibles, mais dont le résultat ne peut pas être prévu avec certitude à l'avance (ex: jet de dé, pile ou face).\n• **Issue** : chacun des résultats possibles de l'expérience (ex : un dé à six faces a 6 issues : 1, 2, 3, 4, 5 et 6).\n• **Événement** : ensemble d'issues, décrit par une phrase. Il est **réalisé** lorsque le résultat obtenu est l'une de ces issues, appelées **issues favorables** (ex : « obtenir un nombre pair » est réalisé par les issues 2, 4 et 6).\n• **Événement élémentaire** : événement formé d'une seule issue (ex : « obtenir 5 »).\n• **Événement impossible** : Événement qui ne peut jamais se produire, sa probabilité vaut $0$ ($P = 0$).\n• **Événement certain** : Événement qui se produit à coup sûr, sa probabilité vaut $1$ ($P = 1$).\n• **Propriété** : Pour tout événement $A$, la probabilité est un nombre compris entre 0 et 1 : $$0 \\le P(A) \\le 1$$"
      },
      {
        "title": "2. Équiprobabilité",
        "content": "Lorsque chaque issue a exactement la même chance de se produire (dés équilibrés, boules indiscernables au toucher, pièces bien équilibrées), on dit qu'il y a **équiprobabilité** :\n$$P(A) = \\frac{\\text{Nombre d'issues favorables à } A}{\\text{Nombre total d'issues possibles}}$$"
      },
      {
        "title": "3. Événement contraire $\\bar{A}$",
        "content": "L'**événement contraire** d'un événement $A$, noté $\\bar{A}$ (ou « non A »), est l'ensemble de toutes les issues qui n'appartiennent pas à $A$.\n$$\\text{Probabilité de l'événement contraire : } P(\\bar{A}) = 1 - P(A) \\quad \\iff \\quad P(A) + P(\\bar{A}) = 1$$\n*Exemple* : Si la probabilité de tirer une bille rouge est $P(R) = 0{,}35$, alors la probabilité de ne pas tirer de bille rouge est $P(\\bar{R}) = 1 - 0{,}35 = 0{,}65$."
      },
      {
        "title": "4. Situations qui ne sont pas forcément équiprobables",
        "content": "Les issues d'une expérience n'ont pas toujours la même chance de se produire : compter « issues favorables sur issues possibles » ne convient plus. Deux règles restent toujours vraies :\n• La somme des probabilités de **toutes les issues** vaut $1$.\n• La probabilité d'un événement est la **somme des probabilités des issues** qui le réalisent.\n\n**Roue à secteurs inégaux.** La probabilité de s'arrêter sur un secteur est $\\dfrac{\\text{angle du secteur}}{360^\\circ}$.\n*Exemple* : une roue bien équilibrée a trois secteurs de $90^\\circ$, $120^\\circ$ et $150^\\circ$. Leurs probabilités sont $\\dfrac{90}{360} = \\dfrac{1}{4}$, $\\dfrac{120}{360} = \\dfrac{1}{3}$ et $\\dfrac{150}{360} = \\dfrac{5}{12}$ ; leur somme vaut bien $\\dfrac{3}{12} + \\dfrac{4}{12} + \\dfrac{5}{12} = 1$.\n\n**Cible et aires.** Si une fléchette atteint la cible en un point pris au hasard, $P(\\text{zone}) = \\dfrac{\\text{aire de la zone}}{\\text{aire totale de la cible}}$.\n*Exemple* : dans une cible carrée de côté 10 cm, une zone carrée de côté 4 cm a pour probabilité $\\dfrac{4 \\times 4}{10 \\times 10} = \\dfrac{16}{100} = 0{,}16$. Pour une cible ronde, le facteur $\\pi$ se simplifie : un disque central de rayon 3 cm dans une cible de rayon 10 cm donne $\\dfrac{\\pi \\times 3^2}{\\pi \\times 10^2} = \\dfrac{9}{100}$.\n\n**Osselet.** Un osselet peut retomber sur quatre faces de formes différentes, donc non équiprobables. On ne peut pas calculer leurs probabilités par un raisonnement : on les **estime** par les fréquences observées sur un grand nombre de lancers (voir la section 5).\n\n**Somme de deux dés.** Les sommes possibles vont de $2$ à $12$, mais elles ne sont pas équiprobables : $2$ n'est obtenue que par le couple $(1 ; 1)$, alors que $7$ est obtenue par six couples."
      },
      {
        "title": "5. Fréquence et probabilité",
        "content": "Si on répète une expérience aléatoire **un très grand nombre de fois**, la **fréquence** d'apparition d'un événement se rapproche de sa **probabilité**.\n*Exemple* : en lançant un dé équilibré 6 000 fois, on obtient le 6 environ 1 000 fois : la fréquence est proche de $\\dfrac{1}{6} \\approx 0{,}17$. Sur 12 lancers seulement, elle peut en être très éloignée."
      },
      {
        "title": "Pour aller plus loin : expériences aléatoires à deux épreuves",
        "content": "*Cette partie va au-delà de ce qui est attendu en 4e : les expériences à deux épreuves s'étudient en 3e avec un tableau à double entrée, et l'arbre n'est pas exigé au collège.*\n\nPour modéliser deux tirages successifs ou le lancer simultané de deux objets :\n• **Le tableau à double entrée** : très efficace quand le nombre d'issues est fini et identique pour chaque épreuve.\n• **L'arbre pondéré** : sur chaque branche on inscrit la probabilité de l'issue correspondante.\n• La somme des probabilités des branches issues d'un même nœud est **toujours égale à 1**.\n• **Règle du produit** : la probabilité d'une issue (un chemin de l'arbre) est le **produit** des probabilités rencontrées sur ce chemin.\n• **Somme des chemins** : la probabilité d'un événement est la **somme** des probabilités des chemins qui le réalisent.\n\n*Pourquoi le produit ?* Une urne contient 2 boules rouges $R_1$, $R_2$ et 1 boule verte $V$. On tire une boule, on la remet, puis on en tire une seconde. Il y a $3 \\times 3 = 9$ couples équiprobables, dont $2 \\times 2 = 4$ formés de deux rouges. Donc $P(R ; R) = \\dfrac{4}{9}$, ce qui est bien $\\dfrac{2}{3} \\times \\dfrac{2}{3}$.\n*Pourquoi la somme ?* « Une rouge et une verte » est réalisé par les chemins $(R ; V)$ et $(V ; R)$, chacun de probabilité $\\dfrac{2}{3} \\times \\dfrac{1}{3} = \\dfrac{2}{9}$, soit $\\dfrac{2}{9} + \\dfrac{2}{9} = \\dfrac{4}{9}$. Le dénombrement le confirme : $(R_1 ; V)$, $(R_2 ; V)$, $(V ; R_1)$ et $(V ; R_2)$, soit 4 couples sur 9."
      },
      {
        "title": "À retenir",
        "content": "• $0 \\le P(A) \\le 1$ ; événement impossible : $0$ ; événement certain : $1$.\n• Équiprobabilité : $P(A) = \\dfrac{\\text{nombre d'issues favorables}}{\\text{nombre d'issues possibles}}$.\n• $P(\\bar{A}) = 1 - P(A)$ : très utile pour « au moins un ».\n• Sans équiprobabilité : la somme des probabilités de toutes les issues vaut $1$ ; roue : angle sur $360^\\circ$ ; cible : aire de la zone sur aire totale ; osselet : estimation par les fréquences.\n• Sur un grand nombre d'essais, la fréquence observée se rapproche de la probabilité.\n• Pour aller plus loin : pour deux épreuves, on liste toutes les issues avec un **arbre** ou un **tableau** ; la probabilité d'un chemin est le **produit** des probabilités de ses branches."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer la probabilité d'un événement avec l'événement contraire",
        "example": "Dans une tombola de 500 tickets, 15 tickets sont gagnants. Quelle est la probabilité de ne rien gagner ?",
        "steps": [
          "**Étape 1 (Probabilité de l'événement direct)** : Soit $G$ l'événement « Gagner un lot ». $P(G) = \\frac{15}{500} = \\frac{3}{100} = 0{,}03$.",
          "**Étape 2 (Appliquer l'événement contraire)** : L'événement « Ne rien gagner » est l'événement contraire $\\bar{G}$.",
          "**Étape 3 (Calcul)** : $P(\\bar{G}) = 1 - P(G) = 1 - 0{,}03 = 0{,}97$ (soit 97 % de chance de ne rien gagner)."
        ]
      },
      {
        "title": "Méthode : Probabilité sur une roue à secteurs inégaux",
        "example": "Une roue bien équilibrée est partagée en un secteur bleu de $60^\\circ$, un secteur rouge de $120^\\circ$ et un secteur vert de $180^\\circ$. On gagne si la roue s'arrête sur le rouge ou sur le vert. Quelle est la probabilité de gagner ?",
        "steps": [
          "**Étape 1 (Pas d'équiprobabilité)** : les trois secteurs n'ont pas la même taille, on ne peut donc pas dire « une chance sur 3 ». La probabilité de chaque secteur est le quotient de son angle par $360^\\circ$.",
          "**Étape 2 (Probabilité de chaque secteur)** : $P(\\text{bleu}) = \\dfrac{60}{360} = \\dfrac{1}{6}$, $P(\\text{rouge}) = \\dfrac{120}{360} = \\dfrac{1}{3}$, $P(\\text{vert}) = \\dfrac{180}{360} = \\dfrac{1}{2}$. Vérification : $\\dfrac{1}{6} + \\dfrac{2}{6} + \\dfrac{3}{6} = 1$.",
          "**Étape 3 (Événement)** : en notant $G$ l'événement « rouge ou vert », $P(G) = \\dfrac{1}{3} + \\dfrac{1}{2} = \\dfrac{5}{6}$. Le contraire donne le même résultat : $P(G) = 1 - \\dfrac{1}{6} = \\dfrac{5}{6}$."
        ]
      },
      {
        "title": "Méthode : Calculer une probabilité avec des aires (cible)",
        "example": "Une cible carrée de côté 20 cm contient une zone bleue carrée de côté 6 cm. Une fléchette atteint la cible en un point pris au hasard. Quelle est la probabilité d'atteindre la zone bleue ?\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 240 230\" width=\"240\" height=\"230\" style=\"max-width:240px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Cible carrée de côté 20 cm contenant une zone bleue carrée de côté 6 cm\">\n  <rect x=\"30\" y=\"20\" width=\"180\" height=\"180\" fill=\"none\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.6\" />\n  <rect x=\"93\" y=\"83\" width=\"54\" height=\"54\" fill=\"var(--primary, #2563eb)\" fill-opacity=\"0.35\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.6\" />\n  <text x=\"120\" y=\"218\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">20 cm</text>\n  <text x=\"120\" y=\"76\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">6 cm</text>\n</svg>\n</div>\n",
        "steps": [
          "**Étape 1 (Aires)** : aire de la zone bleue : $6 \\times 6 = 36$ cm² ; aire de la cible : $20 \\times 20 = 400$ cm².",
          "**Étape 2 (Probabilité)** : le point d'impact étant pris au hasard, la probabilité est le quotient des aires : $P(\\text{bleue}) = \\dfrac{36}{400} = \\dfrac{9}{100} = 0{,}09$.",
          "**Étape 3 (Événement contraire)** : la probabilité de ne pas atteindre la zone bleue est $1 - 0{,}09 = 0{,}91$."
        ]
      },
      {
        "title": "Pour aller plus loin — Méthode : Utiliser un tableau à double entrée (deux dés)",
        "example": "On lance deux dés équilibrés à six faces et on additionne les résultats. Quelle est la probabilité d'obtenir une somme égale à 7 ?",
        "steps": [
          "**Étape 1 (Issues)** : chaque dé a 6 faces, il y a $6 \\times 6 = 36$ issues équiprobables, que l'on présente dans un tableau (dé 1 en ligne, dé 2 en colonne, somme dans les cases).",
          "**Étape 2 (Issues favorables)** : la somme vaut 7 pour $(1 ; 6)$, $(2 ; 5)$, $(3 ; 4)$, $(4 ; 3)$, $(5 ; 2)$, $(6 ; 1)$ : **6 issues** (une diagonale du tableau).",
          "**Étape 3 (Probabilité)** : en notant $S$ l'événement « la somme vaut 7 », $P(S) = \\dfrac{6}{36} = \\dfrac{1}{6}$."
        ]
      },
      {
        "title": "Pour aller plus loin — Méthode : Utiliser un arbre et l'événement contraire",
        "example": "On lance deux fois une pièce équilibrée. Quelle est la probabilité d'obtenir **au moins une fois** Pile ?\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 330 200\" width=\"330\" height=\"200\" style=\"max-width:330px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Arbre de deux lancers d'une pièce : quatre issues de probabilité un quart\">\n  <line x1=\"20\" y1=\"100\" x2=\"100\" y2=\"50\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.6\" /><line x1=\"20\" y1=\"100\" x2=\"100\" y2=\"150\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.6\" />\n  <line x1=\"120\" y1=\"50\" x2=\"200\" y2=\"25\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.6\" /><line x1=\"120\" y1=\"50\" x2=\"200\" y2=\"75\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.6\" /><line x1=\"120\" y1=\"150\" x2=\"200\" y2=\"125\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.6\" /><line x1=\"120\" y1=\"150\" x2=\"200\" y2=\"175\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.6\" />\n  <circle cx=\"20\" cy=\"100\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <text x=\"110\" y=\"55\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">P</text><text x=\"110\" y=\"155\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">F</text>\n  <text x=\"210\" y=\"30\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">P</text><text x=\"210\" y=\"80\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">F</text><text x=\"210\" y=\"130\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">P</text><text x=\"210\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">F</text>\n  <text x=\"52\" y=\"66\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">1/2</text><text x=\"52\" y=\"146\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">1/2</text>\n  <text x=\"152\" y=\"30\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">1/2</text><text x=\"152\" y=\"76\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">1/2</text><text x=\"152\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">1/2</text><text x=\"152\" y=\"176\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">1/2</text>\n  <text x=\"240\" y=\"30\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">(P ; P) : 1/4</text><text x=\"240\" y=\"80\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">(P ; F) : 1/4</text><text x=\"240\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">(F ; P) : 1/4</text><text x=\"240\" y=\"180\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">(F ; F) : 1/4</text>\n</svg>\n</div>\n",
        "steps": [
          "**Étape 1 (Arbre)** : l'arbre fait apparaître 4 issues équiprobables : $(P ; P)$, $(P ; F)$, $(F ; P)$, $(F ; F)$, chacune de probabilité $\\dfrac{1}{4}$.",
          "**Étape 2 (Événement contraire)** : le contraire de « au moins une fois Pile » est « aucun Pile », c'est-à-dire $(F ; F)$, de probabilité $\\dfrac{1}{4}$.",
          "**Étape 3 (Conclusion)** : en notant $A$ l'événement « au moins un Pile », $P(A) = 1 - P(\\bar{A}) = 1 - \\dfrac{1}{4} = \\dfrac{3}{4}$. (Vérification : 3 issues favorables sur 4.)"
        ]
      }
    ],
    "traps": [
      "⚠️ Trouver une probabilité supérieure à 1 ou strictement négative (une probabilité est TOUJOURS comprise entre 0 et 1).",
      "⚠️ Oublier que la somme des probabilités de toutes les issues d'une expérience aléatoire doit être rigoureusement égale à 1.",
      "⚠️ Pour deux dés, les sommes ne sont pas équiprobables : 7 est bien plus probable que 2 (une seule issue $(1 ; 1)$ donne 2).",
      "⚠️ Une roue à trois secteurs de tailles différentes ne donne pas « une chance sur 3 » à chaque couleur : avoir 3 issues ne signifie pas qu'elles sont équiprobables."
    ],
    "flashcards": [
      {
        "q": "Si $P(A) = 0{,}42$, que vaut la probabilité de l'événement contraire $\\bar{A}$ ?",
        "a": "$P(\\bar{A}) = 1 - 0{,}42 = 0{,}58$."
      },
      {
        "q": "Que vaut la somme des probabilités de toutes les issues possibles d'une expérience aléatoire ?",
        "a": "Elle est **toujours égale à 1**."
      },
      {
        "q": "Quelle est la probabilité d'un événement impossible ?",
        "a": "$0$ (zéro chance de se produire)."
      },
      {
        "q": "Dans un sac contenant 4 billes bleues et 6 billes vertes, quelle est la probabilité de tirer une bille bleue ?",
        "a": "$P = \\frac{4}{4+6} = \\frac{4}{10} = 0{,}4$ (ou $\\frac{2}{5}$)."
      },
      {
        "q": "Quelle est la différence entre une issue et un événement ?",
        "a": "Une **issue** est un résultat possible de l'expérience. Un **événement** est un ensemble d'issues, par exemple « obtenir un nombre pair » (2, 4 et 6). S'il ne contient qu'une seule issue, il est dit **élémentaire**."
      },
      {
        "q": "Sur une cible atteinte en un point pris au hasard, comment calcule-t-on la probabilité d'atteindre une zone ?",
        "a": "$P = \\dfrac{\\text{aire de la zone}}{\\text{aire totale de la cible}}$."
      },
      {
        "q": "Une roue bien équilibrée possède un secteur de $72^\\circ$. Quelle est la probabilité de s'y arrêter ?",
        "a": "$\\dfrac{72}{360} = \\dfrac{1}{5}$ (angle du secteur divisé par $360^\\circ$)."
      },
      {
        "q": "Pour aller plus loin : que vaut la somme des probabilités des branches partant d'un même nœud dans un arbre pondéré ?",
        "a": "Elle vaut **toujours 1**."
      },
      {
        "q": "Pour aller plus loin : on lance deux dés. Probabilité d'obtenir un double ?",
        "a": "$\\dfrac{6}{36} = \\dfrac{1}{6}$ (les doubles forment la diagonale du tableau)."
      },
      {
        "q": "Pour aller plus loin : on lance deux fois une pièce. Probabilité d'obtenir deux Face ?",
        "a": "$\\dfrac{1}{4}$ (une issue sur quatre)."
      }
    ]
  },
  "4P1": {
    "title": "4P1 : Proportionnalité, ratios et pourcentages",
    "domain": "Organisation et Gestion de Données",
    "objectives": [
      "Reconnaître une situation de proportionnalité (tableau, graphique) et calculer une quatrième proportionnelle par la procédure de son choix (passage à l'unité, coefficient, linéarité, produit en croix).",
      "Partager une quantité selon un ratio donné $a : b$ ou $a : b : c$.",
      "Appliquer un pourcentage, calculer une proportion en pourcentage, calculer une hausse ou une baisse.",
      "Calculer une vitesse moyenne ($v = d/t$) et convertir les durées (heures décimales $\\leftrightarrow$ heures et minutes).",
      "Utiliser des grandeurs quotients (vitesse, débit, masse volumique, concentration) et produits (énergie, trafic), et effectuer des conversions d'unités composées.",
      "Lire une formule comme une relation de proportionnalité (loi d'Ohm, longueur d'un arc de cercle).",
      "Pour aller plus loin : coefficient multiplicateur d'une évolution et évolutions successives (notion étudiée en 3e)."
    ],
    "keyPoints": [
      {
        "title": "1. Reconnaître la proportionnalité et calculer une quatrième proportionnelle",
        "content": "Deux grandeurs sont **proportionnelles** lorsqu'on passe de l'une à l'autre en multipliant toujours par un même nombre, le **coefficient de proportionnalité**.\n• **Dans un tableau** : les quotients $\\dfrac{\\text{ligne 2}}{\\text{ligne 1}}$ sont tous égaux.\n• **Sur un graphique** : les points sont alignés **avec l'origine** du repère. Une droite qui ne passe pas par l'origine, ou une courbe, ne traduit pas une proportionnalité.\n\n**Calculer une quatrième proportionnelle** : on choisit la procédure la plus commode. Exemple : $4$ m de tissu coûtent $18$ € ; combien coûtent $6$ m ?\n• **Passage à l'unité** : $1$ m coûte $18 \\div 4 = 4{,}5$ €, donc $6$ m coûtent $6 \\times 4{,}5 = 27$ €.\n• **Coefficient de proportionnalité** : le prix s'obtient en multipliant la longueur par $4{,}5$, donc $6 \\times 4{,}5 = 27$ €.\n• **Linéarité** : $6 = 4 + 2$ et $2$ m coûtent la moitié du prix de $4$ m, soit $9$ € ; donc $6$ m coûtent $18 + 9 = 27$ €.\n• **Produit en croix** :\n$$\\begin{array}{|c|c|} \\hline a & c \\\\ \\hline b & d \\\\ \\hline \\end{array} \\iff a \\times d = b \\times c \\quad \\implies \\quad d = \\frac{b \\times c}{a}$$\nIci $a = 4$, $b = 18$, $c = 6$, donc $d = \\frac{18 \\times 6}{4} = 27$ €.\n*Pourquoi ça marche ?* Les quotients sont égaux : $\\frac{b}{a} = \\frac{d}{c}$. En multipliant les deux membres par $a \\times c$, on obtient $b \\times c = a \\times d$."
      },
      {
        "title": "2. Partage selon un ratio",
        "content": "Deux nombres $x$ et $y$ sont dans le **ratio $a : b$** si $\\frac{x}{a} = \\frac{y}{b}$.\n*Méthode pratique* :\n1. Calculer le nombre total de « parts » : $a + b$.\n2. Calculer la valeur d'une seule part : $\\text{Valeur d'une part} = \\frac{\\text{Quantité totale}}{a + b}$.\n3. Multiplier par le nombre de parts de chacun."
      },
      {
        "title": "3. Pourcentages",
        "content": "• **Prendre $t$ % d'une quantité** : on multiplie cette quantité par $\\frac{t}{100}$. Exemple : $20$ % de $85$ €, c'est $85 \\times \\frac{20}{100} = 17$ €.\n• **Exprimer une proportion en pourcentage** : on écrit la fraction partie sur total, puis on la multiplie par $100$. Exemple : $12$ élèves sur $30$, c'est $\\frac{12}{30} \\times 100 = 40$ %.\n• **Calculer une hausse ou une baisse** : on calcule le montant de la variation, puis on l'ajoute ou on le retire. Exemple : un jean à $85$ € soldé à $-20$ % coûte $85 - 17 = 68$ €."
      },
      {
        "title": "4. Vitesse moyenne et conversion des unités",
        "content": "La **vitesse moyenne** $v$ est une grandeur quotient égale à la distance $d$ divisée par le temps $t$ :\n$$v = \\frac{d}{t} \\quad \\iff \\quad d = v \\times t \\quad \\iff \\quad t = \\frac{d}{v}$$\n**Attention capitale aux unités de temps** :\n• $0{,}5$ h = $30$ min (la moitié d'une heure) | $0{,}25$ h = $15$ min | $0{,}75$ h = $45$ min.\n• Pour convertir des minutes en heures décimales : **diviser par 60** ($36$ min = $\\frac{36}{60} = 0{,}6$ h).\n• Pour convertir des heures décimales en minutes : **multiplier la partie décimale par 60** ($2{,}4$ h = $2$ h $+ 0{,}4 \\times 60$ min = $2$ h $24$ min)."
      },
      {
        "title": "5. Grandeurs composées : quotients, produits et conversions",
        "content": "Une **grandeur quotient** s'obtient en divisant deux grandeurs, une **grandeur produit** en les multipliant. On garde les unités.\n• **Grandeurs quotients** : vitesse (km/h, m/s), débit (L/min, m³/s), masse volumique (g/cm³), concentration (g/L), prix unitaire (€/kg). Trois d'entre elles reviennent souvent :\n  - **Débit** $= \\dfrac{\\text{volume}}{\\text{durée}}$. Un robinet qui verse $45$ L en $5$ min a un débit de $\\dfrac{45}{5} = 9$ L/min.\n  - **Masse volumique** $= \\dfrac{\\text{masse}}{\\text{volume}}$. Un objet de $135$ g et de $50$ cm³ a une masse volumique de $\\dfrac{135}{50} = 2{,}7$ g/cm³.\n  - **Concentration** $= \\dfrac{\\text{masse dissoute}}{\\text{volume de solution}}$. Avec $60$ g de sel dissous dans $2$ L de solution, la concentration est de $\\dfrac{60}{2} = 30$ g/L.\n  Comme pour la vitesse, chaque relation se retourne : masse $=$ concentration $\\times$ volume, volume $= \\dfrac{\\text{masse}}{\\text{concentration}}$. Quand la concentration est fixée, la masse dissoute est **proportionnelle** au volume de solution ; de même pour le volume versé et la durée à débit constant, ou pour la masse et le volume d'un même matériau.\n• **Grandeurs produits** : l'énergie (en kWh) est le produit d'une puissance (en kW) par une durée (en h) : un radiateur de $2$ kW qui fonctionne $3$ h consomme $2 \\times 3 = 6$ kWh. Le trafic (en passagers-kilomètres) est le produit d'un nombre de passagers par une distance : $40$ passagers sur $150$ km, c'est $40 \\times 150 = 6\\,000$ passagers-kilomètres.\n• **Conversions d'unités composées** : on convertit chaque unité séparément.\n  - $72$ km/h : en une heure, on parcourt $72\\,000$ m en $3\\,600$ s, donc $\\frac{72\\,000}{3\\,600} = 20$ m/s.\n  - $1$ m³/s $= 1\\,000$ L/s $= 1\\,000 \\times 60$ L/min $= 60\\,000$ L/min."
      },
      {
        "title": "6. Formules et proportionnalité",
        "content": "Une formule du type $y = k \\times x$, où $k$ est un nombre fixé, traduit une **proportionnalité** entre $x$ et $y$, de coefficient $k$.\n• **Loi d'Ohm** : $U = R \\times I$. Pour un conducteur ohmique de résistance $R$ fixée, la tension $U$ est proportionnelle à l'intensité $I$.\n• **Longueur d'un cercle** : $L = 2\\pi \\times r$. La longueur est proportionnelle au rayon $r$, de coefficient $2\\pi$.\n• **Longueur d'un arc de cercle** : sur un cercle donné, elle est proportionnelle à l'angle au centre $\\alpha$. Un tour complet correspond à $360^\\circ$, donc $\\ell = \\frac{\\alpha}{360} \\times 2\\pi r$.\n• **Distance à vitesse constante** : $d = v \\times t$. La distance est proportionnelle à la durée."
      },
      {
        "title": "7. Pour aller plus loin : coefficients multiplicateurs (notion étudiée en 3e)",
        "content": "• **Augmenter de $t$ %** revient à multiplier par $(1 + \\frac{t}{100})$ :\n  - Une augmentation de 20 % correspond au coefficient $1 + 0{,}20 = 1{,}20$.\n• **Diminuer de $t$ %** revient à multiplier par $(1 - \\frac{t}{100})$ :\n  - Une réduction de 15 % correspond au coefficient $1 - 0{,}15 = 0{,}85$.\n• **Évolutions successives** : on multiplie les coefficients ; on n'additionne pas les pourcentages.\n• **Revenir en arrière** : pour retrouver la valeur de départ, on **divise** par le coefficient."
      },
      {
        "title": "À retenir",
        "content": "• Proportionnalité : on passe d'une grandeur à l'autre en multipliant toujours par le même nombre. Sur un graphique, les points sont alignés avec l'origine du repère.\n• Quatrième proportionnelle : au choix, passage à l'unité, coefficient, linéarité ou produit en croix.\n• Ratio $a : b$ : partager en $a + b$ parts égales.\n• Prendre $t\\ \\%$ d'une quantité : la multiplier par $\\dfrac{t}{100}$.\n• $v = \\dfrac{d}{t}$ avec des durées en heures décimales ($15$ min $= 0{,}25$ h).\n• Grandeurs composées : quotients (vitesse, débit, masse volumique, concentration) et produits (énergie, trafic) ; pour convertir, on traite chaque unité séparément.\n• Une formule $y = k \\times x$, avec $k$ fixé, traduit une proportionnalité.\n• Pour aller plus loin : hausse de $t\\ \\%$ : $\\times \\left(1 + \\dfrac{t}{100}\\right)$ ; baisse de $t\\ \\%$ : $\\times \\left(1 - \\dfrac{t}{100}\\right)$ ; pour revenir en arrière, on **divise** par le coefficient."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer une quatrième proportionnelle par la procédure de son choix",
        "example": "$4$ m de tissu coûtent $18$ €. Combien coûtent $6$ m de ce tissu ?",
        "steps": [
          "**Passage à l'unité** : $1$ m coûte $18 \\div 4 = 4{,}5$ €, donc $6$ m coûtent $6 \\times 4{,}5 = 27$ €.",
          "**Linéarité** : $6 = 4 + 2$ ; $2$ m coûtent $18 \\div 2 = 9$ €, donc $6$ m coûtent $18 + 9 = 27$ €.",
          "**Produit en croix** : $\\dfrac{18 \\times 6}{4} = \\dfrac{108}{4} = 27$ €.",
          "**Bilan** : toutes les procédures donnent $27$ € ; on choisit celle qui rend les calculs les plus simples."
        ]
      },
      {
        "title": "Méthode : Reconnaître une situation de proportionnalité sur un graphique",
        "example": "On dispose du graphique d'une grandeur en fonction d'une autre. Traduit-il une situation de proportionnalité ?",
        "steps": [
          "**Étape 1 (alignement)** : on regarde si les points sont alignés, c'est-à-dire si la ligne tracée est une droite. Sinon, il n'y a pas proportionnalité.",
          "**Étape 2 (origine)** : on regarde si cette droite passe par l'origine du repère. Sinon, il n'y a pas proportionnalité.",
          "**Conclusion** : il y a proportionnalité seulement si les deux conditions sont réunies."
        ]
      },
      {
        "title": "Méthode : Partager une somme selon un ratio",
        "example": "Partager 150 € entre Arthur et Zoé selon le ratio 2 : 3.",
        "steps": [
          "**Étape 1 (Nombre total de parts)** : $2 + 3 = 5$ parts au total.",
          "**Étape 2 (Valeur d'une part)** : $\\frac{150}{5} = 30$ € par part.",
          "**Étape 3 (Part d'Arthur)** : $2 \\times 30 = 60$ €.",
          "**Étape 4 (Part de Zoé)** : $3 \\times 30 = 90$ €.",
          "**Vérification** : $60 + 90 = 150$ €."
        ]
      },
      {
        "title": "Pour aller plus loin — Méthode : Appliquer un pourcentage d'évolution et retrouver une valeur initiale",
        "example": "a) Un jean à $85$ € est soldé à $-20\\ \\%$. Quel est son nouveau prix ? b) Après une hausse de $25\\ \\%$, un abonnement coûte $150$ €. Quel était son prix avant la hausse ?",
        "steps": [
          "**a) Coefficient** : baisser de $20\\ \\%$ revient à multiplier par $1 - 0{,}20 = 0{,}8$.",
          "**a) Calcul** : $85 \\times 0{,}8 = 68$. Le jean coûte $68$ €.",
          "**b) Coefficient** : augmenter de $25\\ \\%$ revient à multiplier par $1{,}25$ : prix initial $\\times 1{,}25 = 150$.",
          "**b) Calcul** : prix initial $= \\dfrac{150}{1{,}25} = 120$. L'abonnement coûtait $120$ €. (Vérification : $120 \\times 1{,}25 = 150$.)"
        ]
      },
      {
        "title": "Méthode : Calculer une distance ou une durée avec la vitesse",
        "example": "a) Une voiture roule à $75$ km/h de moyenne pendant $2$ h $24$ min. Quelle distance parcourt-elle ? b) Combien de temps faut-il à un cycliste roulant à $18$ km/h pour parcourir $12$ km ?",
        "steps": [
          "**a) Durée en heures décimales** : $24$ min $= \\dfrac{24}{60}$ h $= 0{,}4$ h, donc $2$ h $24$ min $= 2{,}4$ h.",
          "**a) Distance** : $d = v \\times t = 75 \\times 2{,}4 = 180$ km.",
          "**b) Durée** : $t = \\dfrac{d}{v} = \\dfrac{12}{18} = \\dfrac{2}{3}$ h.",
          "**b) Conversion** : $\\dfrac{2}{3} \\times 60 = 40$ min."
        ]
      },
      {
        "title": "Méthode : Effectuer une conversion d'unités composées",
        "example": "Exprimer un débit de $0{,}25$ m³/s en L/min.",
        "steps": [
          "**Étape 1 (volume)** : $0{,}25$ m³ $= 250$ L, donc $0{,}25$ m³/s $= 250$ L/s.",
          "**Étape 2 (durée)** : en $1$ min, soit $60$ s, il s'écoule $250 \\times 60 = 15\\,000$ L.",
          "**Conclusion** : $0{,}25$ m³/s $= 15\\,000$ L/min."
        ]
      },
      {
        "title": "Méthode : Calculer une concentration et s'en servir",
        "example": "On dissout $90$ g de sel dans de l'eau pour obtenir $3$ L d'eau salée. a) Quelle est la concentration en sel de cette solution ? b) Quelle masse de sel faut-il pour préparer $5$ L d'eau salée de même concentration ? c) Quel volume de cette eau salée peut-on préparer avec $240$ g de sel ?",
        "steps": [
          "**a) Quotient** : concentration $= \\dfrac{90 \\text{ g}}{3 \\text{ L}} = 30$ g/L.",
          "**b) Produit** : à concentration fixée, la masse est proportionnelle au volume : masse $= 30 \\times 5 = 150$ g.",
          "**c) Quotient inversé** : volume $= \\dfrac{240}{30} = 8$ L.",
          "**Vérification** : $30$ g/L $\\times$ $8$ L $= 240$ g ; les unités s'accordent : des g/L multipliés par des L donnent des g."
        ]
      }
    ],
    "traps": [
      "⚠️ Écrire que $1{,}5$ heure équivaut à 1 h 50 min ! $1{,}5$ heure, c'est $1$ h et une demi-heure, soit **1 h 30 min** !",
      "⚠️ Pour aller plus loin : penser qu'une hausse de 20 % suivie d'une baisse de 20 % redonne le prix initial : $100 \\times 1{,}20 = 120$, puis $120 \\times 0{,}80 = 96$ € (perte de 4 %) !",
      "⚠️ Pour aller plus loin : pour retrouver un prix avant une hausse de 25 %, on divise par 1,25 ; retirer 25 % du nouveau prix donne un résultat faux ($150 \\times 0{,}75 = 112{,}5$ et non 120).",
      "⚠️ Croire qu'une droite suffit : pour traduire une proportionnalité, elle doit aussi **passer par l'origine** du repère.",
      "⚠️ Écrire que $72$ km/h valent $72\\,000$ m/s : il faut aussi convertir les heures en secondes ($72$ km/h $= 20$ m/s)."
    ],
    "flashcards": [
      {
        "q": "Combien de parts au total pour partager une recette selon le ratio 3 : 5 : 2 ?",
        "a": "$3 + 5 + 2 = 10$ parts au total."
      },
      {
        "q": "(Pour aller plus loin) Par quel nombre multiplie-t-on pour appliquer une réduction de 30 % ?",
        "a": "Par $1 - 0{,}30 = 0{,}70$."
      },
      {
        "q": "Combien de minutes durent 1,25 heure ?",
        "a": "1 h 15 min (car $0{,}25 \\times 60 = 15$ min)."
      },
      {
        "q": "Une voiture parcourt 180 km en 2h15min. Quelle est sa vitesse moyenne ?",
        "a": "$80$ km/h ($2\\text{ h } 15\\text{ min} = 2{,}25\\text{ h}$, et $v = \\frac{180}{2{,}25} = 80$ km/h)."
      },
      {
        "q": "(Pour aller plus loin) Par quel coefficient multiplicateur traduit-on une augmentation de 8 % ?",
        "a": "$1 + 0{,}08 = 1{,}08$."
      },
      {
        "q": "Un prix de $40$ € augmente de $15\\ \\%$. Nouveau prix ?",
        "a": "$15\\ \\%$ de $40$ €, c'est $40 \\times \\frac{15}{100} = 6$ € ; nouveau prix : $40 + 6 = 46$ €."
      },
      {
        "q": "Convertir $0{,}2$ h en minutes.",
        "a": "$0{,}2 \\times 60 = 12$ min."
      },
      {
        "q": "Convertir $3$ m³/s en L/min.",
        "a": "$3$ m³/s $= 3\\,000$ L/s $= 3\\,000 \\times 60$ L/min $= 180\\,000$ L/min."
      },
      {
        "q": "Quelle énergie consomme un appareil de $2$ kW qui fonctionne $3$ h ?",
        "a": "$2 \\times 3 = 6$ kWh (énergie = puissance × durée)."
      },
      {
        "q": "À quelle condition un graphique traduit-il une situation de proportionnalité ?",
        "a": "Les points doivent être alignés avec l'origine du repère."
      },
      {
        "q": "Dans la loi d'Ohm $U = R \\times I$, quel est le coefficient de proportionnalité entre $I$ et $U$ ?",
        "a": "La résistance $R$."
      },
      {
        "q": "Comment calcule-t-on une concentration en g/L ?",
        "a": "On divise la masse dissoute (en g) par le volume de la solution (en L)."
      },
      {
        "q": "Une eau salée a une concentration de $30$ g/L. Quelle masse de sel contiennent $4$ L ?",
        "a": "$30 \\times 4 = 120$ g."
      },
      {
        "q": "Un objet de $270$ g a un volume de $100$ cm³. Quelle est sa masse volumique ?",
        "a": "$\\dfrac{270}{100} = 2{,}7$ g/cm³."
      },
      {
        "q": "Un robinet verse $36$ L en $4$ min. Quel est son débit ?",
        "a": "$\\dfrac{36}{4} = 9$ L/min."
      }
    ]
  },
  "4P2": {
    "title": "4P2 : Notion de fonction et programmes de calcul",
    "domain": "Organisation et Gestion de Données",
    "objectives": [
      "Comprendre qu'une grandeur peut dépendre d'une autre : à chaque valeur de départ correspond une seule valeur obtenue.",
      "Distinguer la valeur de départ (souvent notée $x$) de la valeur obtenue (souvent notée $y$), sur une formule, un tableau ou un graphique.",
      "Traduire un programme de calcul pas à pas par une expression littérale, et reconnaître deux programmes équivalents.",
      "Calculer une valeur obtenue à partir d'une formule, retrouver une valeur de départ, et dresser un tableau de valeurs.",
      "Construire le graphique d'une formule dans un repère à partir d'un tableau de valeurs, puis l'interpréter.",
      "Pour aller plus loin (programme de 3e) : notation $f(x)$, image et antécédent."
    ],
    "keyPoints": [
      {
        "title": "1. Une grandeur qui dépend d'une autre",
        "content": "Une grandeur **dépend** d'une autre lorsque la valeur de la première permet d'obtenir celle de la seconde : le prix payé dépend du volume de carburant, le périmètre d'un carré dépend de la longueur de son côté. On dit aussi que le prix est donné **en fonction** du volume.\n• La **valeur de départ** est celle que l'on choisit ; on la note souvent $x$.\n• La **valeur obtenue** est celle que l'on calcule ou que l'on lit ; on la note souvent $y$.\nÀ **une** valeur de départ correspond **une seule** valeur obtenue. En revanche, une même valeur obtenue peut provenir de plusieurs valeurs de départ, ou d'aucune : avec la formule $y = x^2$, on obtient $y = 9$ pour $x = 3$ comme pour $x = -3$, et on n'obtient jamais $y = -1$.\nCette dépendance peut être donnée par une **formule**, par un **tableau de valeurs** ou par un **graphique**."
      },
      {
        "title": "2. Traduction d'un programme de calcul par une formule",
        "content": "Soit le programme de calcul :\n1. Choisir un nombre $x$.\n2. Ajouter 3 $\\implies x + 3$.\n3. Multiplier le résultat par 2 $\\implies 2(x + 3)$.\n4. Soustraire 5 $\\implies 2(x + 3) - 5 = 2x + 6 - 5 = 2x + 1$.\nEn notant $y$ le résultat obtenu, ce programme se traduit par la formule : $$y = 2x + 1$$\n**Programmes équivalents** : deux programmes sont équivalents s'ils donnent le même résultat pour **n'importe quel** nombre de départ. Pour le prouver, on traduit chacun par une expression en $x$, on développe, on réduit et on compare."
      },
      {
        "title": "3. Tableau de valeurs",
        "content": "Un tableau de valeurs regroupe des valeurs de départ $x$ sur la 1re ligne et les valeurs obtenues $y$ sur la 2e ligne :\n$$\\begin{array}{|c|c|c|c|c|} \\hline x & -2 & 0 & 1 & 3 \\\\ \\hline y = 2x+1 & -3 & 1 & 3 & 7 \\\\ \\hline \\end{array}$$"
      },
      {
        "title": "4. Représentation graphique dans un repère",
        "content": "La représentation graphique d'une formule est l'ensemble des points de coordonnées $(x ; y)$ dans un repère orthogonal :\n• L'axe des abscisses (axe horizontal) porte les **valeurs de départ $x$**.\n• L'axe des ordonnées (axe vertical) porte les **valeurs obtenues $y$**.\n• Pour une formule du type $y = ax + b$, les points sont **alignés** : la représentation graphique est une **droite**.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 200 240\" width=\"200\" height=\"240\" style=\"max-width:240px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Droite représentant y = 2x − 1 : pour x = 2 on lit y = 3, et on obtient y = −3 pour x = −1\">\n  <line x1=\"20\" y1=\"20\" x2=\"20\" y2=\"220\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"220\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"60\" y1=\"20\" x2=\"60\" y2=\"220\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"80\" y1=\"20\" x2=\"80\" y2=\"220\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"220\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"120\" y1=\"20\" x2=\"120\" y2=\"220\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"140\" y1=\"20\" x2=\"140\" y2=\"220\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"160\" y1=\"20\" x2=\"160\" y2=\"220\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"20\" y1=\"20\" x2=\"160\" y2=\"20\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"20\" y1=\"40\" x2=\"160\" y2=\"40\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"20\" y1=\"60\" x2=\"160\" y2=\"60\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"20\" y1=\"80\" x2=\"160\" y2=\"80\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"20\" y1=\"100\" x2=\"160\" y2=\"100\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"20\" y1=\"120\" x2=\"160\" y2=\"120\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"20\" y1=\"140\" x2=\"160\" y2=\"140\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"20\" y1=\"160\" x2=\"160\" y2=\"160\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"20\" y1=\"180\" x2=\"160\" y2=\"180\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"20\" y1=\"200\" x2=\"160\" y2=\"200\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"20\" y1=\"220\" x2=\"160\" y2=\"220\" stroke=\"#e2e8f0\" stroke-width=\"1\" />\n  <line x1=\"20\" y1=\"120\" x2=\"165\" y2=\"120\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\" />\n  <line x1=\"80\" y1=\"225\" x2=\"80\" y2=\"15\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\" />\n  <line x1=\"40\" y1=\"220\" x2=\"140\" y2=\"20\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2.5\" />\n  <polyline points=\"120,120 120,60 80,60\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-dasharray=\"5 4\" />\n  <polyline points=\"80,180 60,180 60,120\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2\" stroke-dasharray=\"5 4\" />\n  <text x=\"100\" y=\"133\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"var(--text-muted, #64748b)\">1</text><text x=\"120\" y=\"133\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#b45309\">2</text>\n  <text x=\"60\" y=\"112\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#047857\">−1</text>\n  <text x=\"74\" y=\"104\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"var(--text-muted, #64748b)\">1</text><text x=\"74\" y=\"64\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#b45309\">3</text><text x=\"85\" y=\"184\" text-anchor=\"start\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#047857\">−3</text>\n  <text x=\"126\" y=\"92\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">y = 2x − 1</text>\n</svg>\n</div>\n"
      },
      {
        "title": "5. Pour aller plus loin : notation f(x), image et antécédent (étudiés en 3e)",
        "content": "**Pour aller plus loin.** En 3e, on appellera **fonction** le procédé qui associe à chaque valeur de départ $x$ une seule valeur obtenue, notée $f(x)$ ; on écrit $f : x \\longmapsto f(x)$.\n• $f(x)$ est **l'image** de $x$ par $f$ : elle est unique.\n• $x$ est **un antécédent** de $f(x)$ par $f$ : un nombre peut avoir plusieurs antécédents, ou aucun. On ne dit « l'antécédent » que si l'on a établi qu'il n'y en a qu'un.\nExemple : avec $f(x) = x^2$, on a $f(3) = 9$ et $f(-3) = 9$ : $9$ est l'image de $3$, et $3$ et $-3$ sont deux antécédents de $9$."
      },
      {
        "title": "À retenir",
        "content": "• À chaque valeur de départ correspond **une seule** valeur obtenue.\n• Valeur de départ connue : on la remplace dans la formule. Valeur obtenue connue : on retrouve une valeur de départ en résolvant une équation.\n• Sur le graphique : l'axe **horizontal** (abscisses) porte les valeurs de départ, l'axe **vertical** (ordonnées) les valeurs obtenues.\n• Pour construire un graphique : tableau de valeurs, points placés, puis tracé.\n• Un programme de calcul se traduit par une expression ; pour prouver une propriété « pour tout nombre », on utilise le calcul littéral."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer une valeur obtenue et retrouver une valeur de départ",
        "example": "On donne la formule $y = 3x - 5$. Calculer $y$ pour $x = 4$, puis trouver $x$ pour que $y = 16$.",
        "steps": [
          "**Calculer $y$ pour $x = 4$** : on remplace $x$ par $4$ dans la formule : $y = 3 \\times 4 - 5 = 12 - 5 = 7$. Pour $x = 4$, on obtient $y = 7$.",
          "**Retrouver $x$ pour $y = 16$** : on résout l'équation $3x - 5 = 16$ :\n$3x = 16 + 5 = 21 \\implies x = \\frac{21}{3} = 7$.\nOn obtient $y = 16$ pour $x = 7$."
        ]
      },
      {
        "title": "Méthode : Lire des valeurs sur un graphique",
        "example": "On a représenté ci-dessus la formule $y = 2x - 1$. Lire la valeur de $y$ pour $x = 2$, puis la valeur de $x$ pour laquelle $y = -3$, et vérifier par le calcul.",
        "steps": [
          "**Valeur de $y$ pour $x = 2$** : on part de $2$ sur l'axe des abscisses, on monte jusqu'à la droite, puis on lit l'ordonnée : $y = 3$ (pointillés orange).",
          "**Valeur de $x$ pour $y = -3$** : on part de $-3$ sur l'axe des ordonnées, on va horizontalement jusqu'à la droite, puis on lit l'abscisse : $x = -1$ (pointillés verts).",
          "**Vérification** : $2 \\times 2 - 1 = 3$ et $2 \\times (-1) - 1 = -3$."
        ]
      },
      {
        "title": "Méthode : Construire le graphique d'une formule",
        "example": "Construire le graphique de la formule $y = 2x - 1$ pour $x$ compris entre $-1$ et $2$.",
        "steps": [
          "**Tableau de valeurs** : on choisit quelques valeurs de $x$ et on calcule $y$. Pour $x = -1$ : $y = -3$. Pour $x = 0$ : $y = -1$. Pour $x = 2$ : $y = 3$.",
          "**Placer les points** : dans un repère, on place les points de coordonnées $(-1 ; -3)$, $(0 ; -1)$ et $(2 ; 3)$, la valeur de $x$ sur l'axe horizontal et celle de $y$ sur l'axe vertical.",
          "**Tracer** : les points sont alignés, on trace à la règle la droite qui passe par ces points (figure ci-dessus). Pour une formule qui ne donne pas une droite, comme $y = x^2$, on place davantage de points et on les relie par une courbe régulière."
        ]
      },
      {
        "title": "Méthode : Prouver que deux programmes sont équivalents",
        "example": "Programme A : « Choisir un nombre ; ajouter 2 ; multiplier le résultat par 6. » Programme B : « Choisir un nombre ; multiplier par 3 ; ajouter 6 ; multiplier le résultat par 2. » Ces programmes sont-ils équivalents ?",
        "steps": [
          "**Traduction** : avec le nombre $x$, A donne $6(x + 2)$ et B donne $2(3x + 6)$.",
          "**Développement** : $6(x + 2) = 6x + 12$ et $2(3x + 6) = 6x + 12$.",
          "**Conclusion** : les deux expressions sont identiques, donc pour tout nombre $x$ les deux programmes donnent le même résultat : ils sont **équivalents**."
        ]
      },
      {
        "title": "Méthode : Prouver une conjecture sur un programme de calcul",
        "example": "Programme : « Choisir un nombre. Lui ajouter 4. Multiplier le résultat par le nombre de départ. Soustraire le carré du nombre de départ. » Tester avec 3, puis prouver que le résultat est toujours le quadruple du nombre de départ.",
        "steps": [
          "**Test avec 3** : $3 + 4 = 7$ ; $7 \\times 3 = 21$ ; $21 - 3^2 = 21 - 9 = 12$, et $12 = 4 \\times 3$.",
          "**Traduction algébrique** : avec le nombre $x$, on obtient $(x + 4) \\times x - x^2$.",
          "**Développement** : $(x + 4)x - x^2 = x^2 + 4x - x^2 = 4x$.",
          "**Conclusion** : pour tout nombre $x$, le résultat est $4x$, le quadruple du nombre de départ. Un test sur des exemples ne suffit pas : c'est le calcul littéral qui le **prouve**."
        ]
      },
      {
        "title": "Pour aller plus loin — Méthode : Calculer une image et chercher les antécédents",
        "example": "Soit la fonction $f$ définie par $f(x) = 3x - 5$. Calculer l'image de $4$, puis chercher les antécédents de $16$.",
        "steps": [
          "**Image de 4** : on remplace $x$ par $4$ : $f(4) = 3 \\times 4 - 5 = 12 - 5 = 7$. L'image de $4$ est $7$.",
          "**Antécédents de 16** : on résout l'équation $f(x) = 16$, c'est-à-dire $3x - 5 = 16$ : on obtient $3x = 21$, puis $x = \\frac{21}{3} = 7$. L'équation a une seule solution : $16$ a donc un seul antécédent, le nombre $7$."
        ]
      }
    ],
    "traps": [
      "⚠️ Confondre valeur de départ et valeur obtenue : « Calculer $y$ pour $x = 5$ » veut dire remplacer $x$ par 5 dans la formule, alors que « Trouver $x$ pour que $y = 5$ » veut dire résoudre une équation !",
      "⚠️ Oublier les parenthèses en remplaçant $x$ par un nombre négatif dans un carré : pour $y = x^2$ et $x = -3$, on a $y = (-3)^2 = 9$ et NON $-3^2 = -9$.",
      "⚠️ Inverser les coordonnées en plaçant un point : la valeur de départ $x$ se lit sur l'axe horizontal, la valeur obtenue $y$ sur l'axe vertical.",
      "⚠️ Croire qu'un programme de calcul est prouvé parce qu'il marche sur deux ou trois exemples : seule l'expression littérale le prouve pour tout nombre."
    ],
    "flashcards": [
      {
        "q": "(Pour aller plus loin) On sait que $f(3) = 11$. Quel nombre est l'image, et quel nombre est un antécédent ?",
        "a": "$11$ est l'**image** de $3$, et $3$ est **un antécédent** de $11$."
      },
      {
        "q": "Avec la formule $y = 3x - 4$, quelle valeur obtient-on pour $x = -2$ ?",
        "a": "$y = 3 \\times (-2) - 4 = -6 - 4 = -10$."
      },
      {
        "q": "Sur quel axe d'un repère lit-on les valeurs de départ ?",
        "a": "Sur l'**axe des abscisses** (axe horizontal)."
      },
      {
        "q": "Une même valeur de départ peut-elle donner deux valeurs obtenues différentes ?",
        "a": "**Non** : à une valeur de départ correspond une seule valeur obtenue."
      },
      {
        "q": "Avec la formule $y = 5x - 15$, pour quelle valeur de $x$ obtient-on $y = 0$ ?",
        "a": "$x = 3$, car $5x - 15 = 0 \\implies 5x = 15 \\implies x = 3$."
      },
      {
        "q": "(Pour aller plus loin) Le point $(4 ; 7)$ appartient à la courbe de $f$. Que peut-on dire ?",
        "a": "$f(4) = 7$ : $7$ est l'image de $4$ et $4$ est un antécédent de $7$."
      },
      {
        "q": "Comment construire le graphique de la formule $y = 2x + 1$ ?",
        "a": "On calcule quelques couples $(x ; y)$ dans un tableau de valeurs, on place les points correspondants dans un repère, puis on trace la droite qui passe par ces points."
      },
      {
        "q": "Comment prouver que deux programmes de calcul sont équivalents ?",
        "a": "On traduit chaque programme par une expression en $x$, on développe et on réduit : les deux expressions doivent être identiques. Un test sur quelques nombres ne suffit pas."
      }
    ]
  },
  "4A1": {
    "title": "4A1 : Algorithmique : conditions et variables Scratch",
    "domain": "Algorithmique et Programmation",
    "objectives": [
      "Créer, nommer et initialiser une variable informatique dans Scratch.",
      "Distinguer l'affectation (« mettre la variable à ... ») de l'incrémentation (« ajouter ... à la variable »).",
      "Programmer des structures conditionnelles « Si [condition] alors ... Sinon ... ».",
      "Utiliser les capteurs de saisie (« demander ... et attendre ») et le bloc « réponse ».",
      "Analyser et prévoir le comportement d'un script pas à pas avec un tableau de suivi des variables.",
      "Déclencher un script par un événement : drapeau, touche pressée, clic sur un lutin.",
      "Compléter, remettre en ordre, puis écrire soi-même un script répondant à une consigne."
    ],
    "keyPoints": [
      {
        "title": "1. Les Variables dans Scratch",
        "content": "Une variable est une case mémoire étiquetée qui stocke une valeur (un nombre ou un texte) pouvant changer au cours de l'exécution du programme.\n• **« mettre [Score] à 0 »** : écrase la valeur précédente et stocke 0 (initialisation).\n• **« ajouter 1 à [Score] »** : prend l'ancienne valeur du score et lui ajoute 1 (incrémentation : $x \\leftarrow x + 1$).\n*Exemple* : si Score vaut 5, « ajouter 2 à Score » donne 7. « mettre Score à 2 » donnerait 2 !"
      },
      {
        "title": "2. Structures conditionnelles « Si ... alors ... sinon »",
        "content": "Le bloc conditionnel teste une condition booléenne (Vraie ou Fausse) :\n• Si la condition est VRAIE, le programme exécute le premier bloc d'instructions.\n• Si la condition est FAUSSE, le programme exécute le bloc situé sous le « sinon ».\n*Opérateurs de comparaison fréquents* : `<` (inférieur strict), `>` (supérieur strict), `=` (égal)."
      },
      {
        "title": "3. Interaction utilisateur : Demander et Réponse",
        "content": "• Le bloc **« demander [Quel est ton âge ?] et attendre »** affiche une boîte de saisie à l'écran et met le programme en pause jusqu'à validation par l'utilisateur.\n• Le bloc bleu ciel **« réponse »** contient la valeur tapée par l'utilisateur. On la stocke généralement immédiatement dans une variable dédiée : « mettre [Age] à (réponse) »."
      },
      {
        "title": "4. Répétitions et tracés géométriques",
        "content": "Pour tracer un polygone régulier à $N$ côtés égaux avec le stylo de Scratch :\n• On répète $N$ fois : « avancer de côté » puis « tourner de $(360 / N)$ degrés ».\n• Pour un triangle équilatéral ($N=3$) : tourner de $\\frac{360}{3} = 120^\\circ$.\n• Pour un carré ($N=4$) : tourner de $\\frac{360}{4} = 90^\\circ$.\n• Pour un hexagone ($N=6$) : tourner de $\\frac{360}{6} = 60^\\circ$."
      },
      {
        "title": "5. Déclencher un script : les événements",
        "content": "Un script ne s'exécute pas tout seul : il commence par un bloc **« quand … »** qui indique l'**événement** qui le lance.\n• **« quand drapeau cliqué »** : au lancement du programme.\n• **« quand la touche [espace] est pressée »** : à chaque appui sur la touche choisie (une lettre, une flèche, la barre d'espace…).\n• **« quand ce lutin est cliqué »** : à chaque clic sur le lutin (appelé « sprite » dans certaines versions de Scratch).\nUn programme peut contenir plusieurs scripts, chacun lancé par son propre événement.\n*Exemple* : « quand drapeau cliqué : mettre [Score] à 0 » ne s'exécute qu'une fois, au lancement ; « quand ce lutin est cliqué : ajouter 1 à [Score] » s'exécute à chaque clic. Le score s'accumule donc clic après clic."
      },
      {
        "title": "6. Compléter, remettre en ordre, écrire un script",
        "content": "Pour construire un script à partir d'une consigne, on place les blocs dans cet ordre :\n• **Événement** : le bloc « quand … », tout en haut.\n• **Initialisation** : les variables reçoivent leur valeur de départ, une seule fois, hors de toute boucle.\n• **Traitement** : calculs, conditions, boucles. Seul ce qui doit être répété va à l'intérieur de la boucle.\n• **Résultat** : le lutin ne dit le résultat qu'à la fin.\nLe bloc « réponse » n'a de valeur qu'après le bloc « demander … et attendre ».\n**Ordre des calculs** : dans Scratch, la multiplication s'écrit `*` et les blocs d'opération s'emboîtent. C'est l'emboîtement qui fixe l'ordre des calculs : le bloc le plus à l'intérieur est calculé en premier.\n*Exemple* : `((réponse + 5) * 2)` calcule d'abord la somme, puis le produit ; `(réponse + (5 * 2))` calcule d'abord le produit."
      },
      {
        "title": "Pour aller plus loin : la boucle « répéter jusqu'à ce que »",
        "content": "Cette boucle est travaillée en 3e.\nQuand on ne connaît pas à l'avance le nombre de tours, on utilise le bloc **« répéter jusqu'à ce que (condition) »** : la condition est testée avant chaque tour. Tant qu'elle est fausse, les instructions de la boucle sont exécutées ; dès qu'elle est vraie, la boucle s'arrête.\n*Exemple* : si $x$ part de $4$ et qu'on ajoute $3$ à $x$ à chaque tour de « répéter jusqu'à ce que (x > 10) », alors $x$ prend les valeurs $7$, $10$, puis $13$. La condition $13 > 10$ est vraie : la boucle s'arrête après $3$ tours."
      },
      {
        "title": "À retenir",
        "content": "• Une **variable** stocke une valeur ; « mettre à » remplace la valeur, « ajouter à » la modifie.\n• « si … alors … sinon … » : un seul des deux blocs est exécuté.\n• « répéter $n$ fois » : nombre de tours connu.\n• Un script démarre par un **événement** : drapeau, touche pressée ou clic sur le lutin.\n• Ordre d'un script : événement, initialisations, traitement, résultat. Le bloc d'opération le plus à l'intérieur est calculé en premier.\n• Polygone régulier à $N$ côtés : tourner de $\\dfrac{360^\\circ}{N}$ à chaque sommet.\n• Pour prévoir un script : un **tableau de suivi** des variables, ligne par ligne.\n• **Pour aller plus loin** : « répéter jusqu'à ce que » arrête la boucle quand la condition devient vraie."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Suivre pas à pas l'évolution d'une variable dans un script",
        "example": "Soit le script : mettre [x] à 5 ; ajouter 3 à [x] ; mettre [y] à 2 * x ; si y > 15 alors ajouter 1 à [x] sinon ajouter 2 à [y]. Quelles sont les valeurs finales ?",
        "steps": [
          "**Ligne 1** : $x = 5$.",
          "**Ligne 2** : $x = 5 + 3 = 8$.",
          "**Ligne 3** : $y = 2 \\times 8 = 16$.",
          "**Ligne 4 (Test conditionnel)** : Est-ce que $y > 15$ ? Oui car $16 > 15$ (VRAI).",
          "**Ligne 5 (Exécution bloc 'alors')** : $x = 8 + 1 = 9$. Le bloc 'sinon' est ignoré.",
          "**Valeurs finales** : $x = 9$ et $y = 16$."
        ]
      },
      {
        "title": "Méthode : Suivre une boucle « répéter » avec un tableau de suivi",
        "example": "Script : « mettre n à 1 ; mettre S à 0 ; répéter 4 fois : ajouter n à S, puis ajouter 2 à n ». Quelles sont les valeurs finales de S et de n ?",
        "steps": [
          "**Avant la boucle** : $n = 1$ et $S = 0$.",
          "**Tour 1** : $S = 0 + 1 = 1$ ; $n = 1 + 2 = 3$.",
          "**Tour 2** : $S = 1 + 3 = 4$ ; $n = 5$.",
          "**Tour 3** : $S = 4 + 5 = 9$ ; $n = 7$.",
          "**Tour 4** : $S = 9 + 7 = 16$ ; $n = 9$.",
          "**Conclusion** : $S = 16$ et $n = 9$. Le script additionne les 4 premiers nombres impairs ($1 + 3 + 5 + 7 = 16 = 4^2$)."
        ]
      },
      {
        "title": "Méthode : Écrire ou remettre en ordre un script à partir d'une consigne",
        "example": "Consigne : au lancement, score vaut 0 ; à chaque clic sur le lutin, score augmente de 5 ; quand score dépasse strictement 20, le lutin dit « Gagné ! ». Écrire le programme.",
        "steps": [
          "**Repérer les événements** : le lancement et le clic sur le lutin. Il faut donc deux scripts.",
          "**Script 1** : « quand drapeau cliqué », puis « mettre [score] à 0 ». L'initialisation n'est faite qu'une fois.",
          "**Script 2** : « quand ce lutin est cliqué », puis « ajouter 5 à [score] ».",
          "**Ajouter le test** à la suite, dans le script 2 : « si (score > 20) alors dire [Gagné !] ».",
          "**Vérifier à la main** : après 4 clics, score vaut $4 \\times 5 = 20$ et le lutin ne dit rien, car $20 > 20$ est faux. Au 5e clic, score vaut $25$ et le lutin dit « Gagné ! »."
        ]
      }
    ],
    "traps": [
      "⚠️ Confondre « mettre ma variable à 1 » (qui fixe la valeur à 1) et « ajouter 1 à ma variable » (qui incrémente la valeur existante de 1).",
      "⚠️ Dans les tracés géométriques, l'angle de rotation du lutin est l'angle **extérieur** ($360^\\circ / N$) et NON l'angle intérieur du polygone (ex: pour un triangle équilatéral, l'angle intérieur vaut $60^\\circ$, mais le lutin doit tourner de $180 - 60 = 120^\\circ$) !",
      "⚠️ Oublier d'initialiser une variable avant une boucle : sans « mettre S à 0 », S garde la valeur de l'exécution précédente.",
      "⚠️ Placer « mettre [Score] à 0 » dans un script lancé par un clic ou par une touche : le score repart de 0 à chaque déclenchement. L'initialisation se place sous « quand drapeau cliqué »."
    ],
    "flashcards": [
      {
        "q": "Quelle est la différence entre « mettre x à 10 » et « ajouter 10 à x » ?",
        "a": "« Mettre à 10 » donne la valeur 10 à $x$. « Ajouter 10 » additionne 10 à la valeur déjà contenue dans $x$."
      },
      {
        "q": "De quel angle doit tourner le lutin pour tracer un hexagone régulier (6 côtés) ?",
        "a": "$$360^\\circ \\div 6 = 60^\\circ$$"
      },
      {
        "q": "Où est stockée la saisie de l'utilisateur après le bloc « demander ... et attendre » ?",
        "a": "Dans la bulle de capteur bleue **« réponse »**."
      },
      {
        "q": "Si x = 7, que vaut x après l'instruction : Si x < 5 alors ajouter 2 à x sinon mettre x à 20 ?",
        "a": "$x = 20$ (car la condition $7 < 5$ est fausse, donc on exécute la branche 'sinon')."
      },
      {
        "q": "Pour aller plus loin : quelle boucle utilise-t-on quand on ne connaît pas à l'avance le nombre d'itérations ?",
        "a": "La boucle conditionnelle **« répéter jusqu'à ce que (condition) »**."
      },
      {
        "q": "Pour aller plus loin : combien de fois le corps de la boucle « répéter jusqu'à ce que (x > 10) » est-il exécuté si x part de 4 et qu'on ajoute 3 à x à chaque tour ?",
        "a": "3 fois : x passe à 7, puis 10, puis 13 ; on s'arrête car 13 > 10."
      },
      {
        "q": "Quel bloc placer en haut d'un script pour qu'il démarre à chaque appui sur la barre d'espace ?",
        "a": "Le bloc **« quand la touche [espace] est pressée »**."
      },
      {
        "q": "Dans un jeu où chaque clic sur le lutin ajoute 1 point, où placer « mettre [score] à 0 » ?",
        "a": "Sous **« quand drapeau cliqué »** : l'initialisation ne se fait qu'une fois. Sous « quand ce lutin est cliqué », le score repartirait de 0 à chaque clic."
      },
      {
        "q": "Quelle opération est calculée en premier dans le bloc ((réponse + 3) * 2) ?",
        "a": "La somme **réponse + 3** : le bloc le plus à l'intérieur est calculé en premier. Le résultat est ensuite multiplié par 2."
      }
    ]
  }
};

window.MATHS_EXERCISES_4E = {
  "4N1": [
    {
      "id": "4N1-1",
      "chapterId": "4N1",
      "tier": 1,
      "title": "Multiplication de deux relatifs",
      "statement": "Calculer le produit suivant :\n$$A = (-6) \\times (+7)$$",
      "type": "exact",
      "answer": "-42",
      "hint1": "Les deux nombres ont des signes différents : le résultat est négatif.",
      "hint2": "Calcule $-(6 \\times 7)$.",
      "solution": "Le produit de deux nombres de signes contraires est négatif :\n$$A = -(6 \\times 7) = -42$$",
      "skill": "Calculer"
    },
    {
      "id": "4N1-2",
      "chapterId": "4N1",
      "tier": 2,
      "title": "Produit de deux nombres négatifs",
      "statement": "Calculer le produit suivant :\n$$B = (-8) \\times (-9)$$",
      "type": "exact",
      "answer": "72",
      "hint1": "Les deux facteurs sont de même signe : le produit est positif.",
      "hint2": "Deux nombres négatifs ont un produit positif : $8 \\times 9$.",
      "solution": "Le produit de deux nombres négatifs est strictement positif :\n$$B = + (8 \\times 9) = 72$$",
      "skill": "Calculer"
    },
    {
      "id": "4N1-3",
      "chapterId": "4N1",
      "tier": 3,
      "title": "Enchaînement avec division et priorités",
      "statement": "Calculer la valeur numérique de l'expression suivante :\n$$C = \\frac{(-24) + (-16)}{-8} - 3 \\times (-5)$$",
      "type": "exact",
      "answer": "20",
      "hint1": "Respecte les priorités : traite d'abord la fraction (numérateur, puis division), ensuite le produit, et termine par la soustraction.",
      "hint2": "Dans la fraction, le numérateur et le dénominateur sont tous les deux négatifs : quel est le signe du quotient ? À la fin, souviens-toi que soustraire un nombre revient à ajouter son opposé.",
      "solution": "$$C = \\frac{(-24) + (-16)}{-8} - 3 \\times (-5) = \\frac{-40}{-8} - (-15) = 5 + 15 = 20$$",
      "skill": "Calculer"
    },
    {
      "id": "4N1-4",
      "chapterId": "4N1",
      "tier": 4,
      "title": "Défi : Chaîne complexe de relatifs avec puissances et quotient",
      "statement": "Calculer la valeur exacte de l'expression suivante :\n$$D = \\frac{(-4) \\times (-6) \\times (-5)}{(-2) \\times 15} - (-3)^2 \\times (-1)^5$$",
      "type": "exact",
      "answer": "13",
      "hint1": "Traite séparément les deux morceaux de l'expression : la fraction d'un côté, le produit de puissances de l'autre.",
      "hint2": "Compte les facteurs négatifs au numérateur et au dénominateur pour trouver le signe de la fraction. Pour les puissances d'un nombre négatif, regarde la parité de l'exposant.",
      "solution": "$$D = \\frac{(-4) \\times (-6) \\times (-5)}{(-2) \\times 15} - (-3)^2 \\times (-1)^5 = \\frac{-120}{-30} - 9 \\times (-1) = 4 - (-9) = 4 + 9 = 13$$",
      "skill": "Calculer"
    }
  ],
  "4N2": [
    {
      "id": "4N2-1",
      "chapterId": "4N2",
      "tier": 1,
      "title": "Produit de deux fractions",
      "statement": "Calculer et simplifier si possible :\n$$P = \\frac{3}{5} \\times \\frac{10}{7}$$",
      "type": "exact",
      "answer": "6/7",
      "acceptUnreduced": true,
      "hint1": "Multiplie les numérateurs entre eux et les dénominateurs entre eux.",
      "hint2": "Remarque que $10 = 5 \\times 2$, tu peux simplifier par 5 avant de multiplier.",
      "solution": "$$P = \\frac{3 \\times (5 \\times 2)}{5 \\times 7} = \\frac{3 \\times 2}{7} = \\frac{6}{7}$$",
      "skill": "Calculer"
    },
    {
      "id": "4N2-2",
      "chapterId": "4N2",
      "tier": 2,
      "title": "Division de deux fractions",
      "statement": "Calculer et simplifier si possible :\n$$Q = \\frac{4}{9} \\div \\frac{2}{3}$$",
      "type": "exact",
      "answer": "2/3",
      "acceptUnreduced": true,
      "hint1": "Diviser par une fraction revient à multiplier par son inverse : $\\frac{4}{9} \\times \\frac{3}{2}$.",
      "hint2": "Avant de multiplier, décompose $4 = 2 \\times 2$ et $9 = 3 \\times 3$ : repère les facteurs communs au numérateur et au dénominateur.",
      "solution": "$$Q = \\frac{4}{9} \\times \\frac{3}{2} = \\frac{12}{18} = \\frac{2}{3}$$",
      "skill": "Calculer"
    },
    {
      "id": "4N2-3",
      "chapterId": "4N2",
      "tier": 3,
      "title": "Priorités et 4 opérations sur les fractions",
      "statement": "Calculer et simplifier si possible :\n$$R = \\frac{2}{3} + \\frac{5}{6} \\times \\frac{4}{15}$$",
      "type": "exact",
      "answer": "8/9",
      "acceptUnreduced": true,
      "hint1": "La multiplication est prioritaire : calcule d'abord $\\frac{5}{6} \\times \\frac{4}{15}$.",
      "hint2": "Multiplie les numérateurs entre eux et les dénominateurs entre eux, puis simplifie. Réduis ensuite les deux fractions au même dénominateur avant d'additionner.",
      "solution": "1. Produit : $\\frac{5}{6} \\times \\frac{4}{15} = \\frac{2}{9}$.\n2. Somme : $\\frac{2}{3} + \\frac{2}{9} = \\frac{6}{9} + \\frac{2}{9} = \\frac{8}{9}$.",
      "skill": "Calculer"
    },
    {
      "id": "4N2-4",
      "chapterId": "4N2",
      "tier": 4,
      "title": "Défi : Fraction à étages complexe (Quotient composé)",
      "statement": "Calculer et simplifier si possible la valeur exacte de :\n$$F = \\frac{\\frac{2}{3} - \\frac{1}{4}}{\\frac{5}{6} + \\frac{1}{2}}$$",
      "type": "exact",
      "answer": "5/16",
      "acceptUnreduced": true,
      "hint1": "Calcule séparément le numérateur et le dénominateur de la grande fraction, en réduisant chaque fois au même dénominateur. Tu obtiens un quotient de deux fractions.",
      "hint2": "Diviser par une fraction, c'est multiplier par son inverse. Pense à simplifier le résultat.",
      "solution": "On calcule d'abord les deux expressions de la fraction à étages, puis on conserve le quotient entier :\n$$F = \\frac{\\frac{2}{3} - \\frac{1}{4}}{\\frac{5}{6} + \\frac{1}{2}} = \\frac{\\frac{8}{12} - \\frac{3}{12}}{\\frac{5}{6} + \\frac{3}{6}} = \\frac{\\frac{5}{12}}{\\frac{8}{6}} = \\frac{5}{12} \\div \\frac{4}{3} = \\frac{5}{12} \\times \\frac{3}{4} = \\frac{15}{48} = \\frac{5}{16}.$$",
      "skill": "Calculer"
    },
    {
      "id": "4N2-5",
      "chapterId": "4N2",
      "tier": 1,
      "title": "Reconnaître un nombre premier",
      "statement": "Parmi les nombres suivants, **lequel est un nombre premier ?**",
      "type": "mcq",
      "options": [
        "$51$",
        "$57$",
        "$73$",
        "$91$"
      ],
      "correctIndex": 2,
      "answer": "$73$",
      "hint1": "Pour chaque nombre, cherche un diviseur autre que 1 et lui-même, en essayant les nombres premiers dans l'ordre croissant.",
      "hint2": "Utilise le critère de divisibilité par 3 (la somme des chiffres). Si un nombre résiste à ce critère, essaie aussi la division par 7.",
      "solution": "$51 = 3 \\times 17$, $57 = 3 \\times 19$ et $91 = 7 \\times 13$ ne sont pas premiers.\n$73$ n'est divisible ni par $2$, ni par $3$, ni par $5$, ni par $7$ ; comme il est inférieur à $100$, il est **premier**.",
      "skill": "Raisonner"
    },
    {
      "id": "4N2-6",
      "chapterId": "4N2",
      "tier": 2,
      "title": "Décomposition en produit de facteurs premiers",
      "statement": "Quelle est la **décomposition en produit de facteurs premiers** de $180$ ?",
      "type": "mcq",
      "options": [
        "$2 \\times 3^2 \\times 5$",
        "$2^2 \\times 3^2 \\times 5$",
        "$2^3 \\times 3 \\times 5$",
        "$2^2 \\times 3 \\times 5$"
      ],
      "correctIndex": 1,
      "answer": "$2^2 \\times 3^2 \\times 5$",
      "hint1": "Divise $180$ par le plus petit nombre premier possible, puis recommence avec le quotient obtenu.",
      "hint2": "$180 = 2 \\times 90$ et $90 = 2 \\times 45$ : continue la décomposition de $45$, puis compare avec les propositions.",
      "solution": "$$180 = 2 \\times 90 = 2 \\times 2 \\times 45 = 2 \\times 2 \\times 3 \\times 15 = 2 \\times 2 \\times 3 \\times 3 \\times 5$$\nDonc $180 = 2^2 \\times 3^2 \\times 5$.\nToutes les propositions ne contiennent que des facteurs premiers, mais les trois autres ne donnent pas $180$ : $2 \\times 3^2 \\times 5 = 90$, $2^3 \\times 3 \\times 5 = 120$ et $2^2 \\times 3 \\times 5 = 60$.",
      "skill": "Calculer"
    },
    {
      "id": "4N2-7",
      "chapterId": "4N2",
      "tier": 3,
      "title": "Simplifier une fraction par décomposition",
      "statement": "En décomposant le numérateur et le dénominateur en produits de facteurs premiers, simplifier le plus possible :\n$$\\frac{150}{270}$$",
      "type": "exact",
      "answer": "5/9",
      "hint1": "Décompose $150$ et $270$ en produits de facteurs premiers, puis divise par les facteurs communs.",
      "hint2": "$150 = 2 \\times 3 \\times 5^2$. Fais de même pour $270$ en commençant par diviser par $2$, puis repère les facteurs présents dans les deux écritures.",
      "solution": "$150 = 2 \\times 3 \\times 5 \\times 5$ et $270 = 2 \\times 3 \\times 3 \\times 3 \\times 5$.\n$$\\frac{150}{270} = \\frac{2 \\times 3 \\times 5 \\times 5}{2 \\times 3 \\times 3 \\times 3 \\times 5} = \\frac{5}{3 \\times 3} = \\frac{5}{9}$$",
      "skill": "Calculer"
    },
    {
      "id": "4N2-8",
      "chapterId": "4N2",
      "tier": 4,
      "title": "Défi : le plus grand nombre de sachets",
      "statement": "Pour une kermesse, on répartit $180$ bonbons et $126$ sucettes dans des sachets identiques, sans qu'il reste de bonbons ni de sucettes.\n\n**Quel est le plus grand nombre de sachets que l'on peut préparer ?**",
      "type": "exact",
      "answer": "18",
      "hint1": "Le nombre de sachets doit diviser à la fois $180$ et $126$ : décompose ces deux nombres en facteurs premiers.",
      "hint2": "Le plus grand diviseur commun s'obtient en multipliant les facteurs premiers communs, chacun avec le plus petit exposant.",
      "solution": "$180 = 2^2 \\times 3^2 \\times 5$ et $126 = 2 \\times 3^2 \\times 7$.\nLes facteurs premiers communs sont $2$ et $3$. Avec le plus petit exposant de chacun :\n$$2 \\times 3^2 = 18$$\nOn peut préparer au maximum **18 sachets**, contenant chacun $180 \\div 18 = 10$ bonbons et $126 \\div 18 = 7$ sucettes.",
      "skill": "Résoudre"
    }
  ],
  "4N3": [
    {
      "id": "4N3-1",
      "chapterId": "4N3",
      "tier": 1,
      "title": "Écriture décimale d'une puissance de 10",
      "statement": "Donner l'écriture décimale du nombre suivant :\n$$N = 10^4$$",
      "type": "exact",
      "answer": "10000",
      "hint1": "L'exposant indique le nombre de facteurs 10 : $10^4 = 10 \\times 10 \\times 10 \\times 10$.",
      "hint2": "Chaque facteur 10 ajoute un zéro : écris le chiffre 1 suivi du nombre de zéros indiqué par l'exposant.",
      "solution": "$$10^4 = 10\\,000$$",
      "skill": "Calculer"
    },
    {
      "id": "4N3-2",
      "chapterId": "4N3",
      "tier": 2,
      "title": "Règles de calcul sur les puissances de 10",
      "statement": "Écrire sous la forme $10^n$ :\n$$P = \\frac{10^5 \\times 10^{-2}}{10^7}$$\n**Donner la valeur de l'exposant $n$.**",
      "type": "exact",
      "answer": "-4",
      "hint1": "Garde toute la fraction dans le calcul : $P = \\frac{10^5 \\times 10^{-2}}{10^7} = \\frac{10^{5 - 2}}{10^7} = \\frac{10^3}{10^7}$.",
      "hint2": "Pour un quotient de puissances de 10 : $\\frac{10^a}{10^b} = 10^{a - b}$. Applique cette règle à $\\frac{10^3}{10^7}$.",
      "solution": "$$P = \\frac{10^3}{10^7} = 10^{3 - 7} = 10^{-4} \\implies n = -4$$",
      "skill": "Calculer"
    },
    {
      "id": "4N3-3",
      "chapterId": "4N3",
      "tier": 3,
      "title": "Notation scientifique d'un grand nombre",
      "statement": "La distance moyenne Terre-Soleil est d'environ $149\\,600\\,000\\text{ km}$.\nSon écriture scientifique s'écrit $1{,}496 \\times 10^k$.\n**Donner la valeur de l'entier $k$.**",
      "type": "exact",
      "answer": "8",
      "hint1": "Compte le nombre de crans vers la gauche pour passer de $149\\,600\\,000$ à $1{,}496$.",
      "hint2": "La virgule, placée après le dernier chiffre de $149\\,600\\,000$, doit venir juste après le premier chiffre. Chaque cran compte pour une puissance de 10.",
      "solution": "$$149\\,600\\,000 = 1{,}496 \\times 10^8 \\implies k = 8$$",
      "skill": "Calculer"
    },
    {
      "id": "4N3-4",
      "chapterId": "4N3",
      "tier": 4,
      "title": "Défi : Grand quotient de puissances (Notation scientifique)",
      "statement": "On donne l'expression suivante :\n$$C = \\frac{4 \\times 10^7 \\times 15 \\times 10^{-3}}{6 \\times (10^2)^3}$$\nL'écriture scientifique de $C$ est de la forme $a \\times 10^k$ avec $1 \\le a < 10$.\n**Donner la valeur de l'exposant $k$.**",
      "type": "exact",
      "answer": "-1",
      "hint1": "Regroupe d'un côté les nombres, de l'autre les puissances de 10. Commence par écrire $(10^2)^3$ sous la forme d'une seule puissance de 10.",
      "hint2": "Utilise $10^m \\times 10^n = 10^{m+n}$ puis $\\frac{10^m}{10^n} = 10^{m-n}$. Attention : si le nombre devant la puissance de 10 n'est pas compris entre 1 et 10, il faut encore ajuster l'exposant.",
      "solution": "$$C = \\frac{60 \\times 10^4}{6 \\times 10^6} = 10 \\times 10^{-2} = 1 \\times 10^{-1} \\implies k = -1$$",
      "skill": "Calculer"
    }
  ],
  "4N4": [
    {
      "id": "4N4-1",
      "chapterId": "4N4",
      "tier": 1,
      "title": "Carré d'un entier remarquable",
      "statement": "Calculer le carré du nombre 12 :\n$$C = 12^2$$",
      "type": "exact",
      "answer": "144",
      "hint1": "Le carré d'un nombre, c'est ce nombre multiplié par lui-même.",
      "hint2": "$12^2 = 12 \\times 12$. Pour calculer, décompose : $12 \\times 10 + 12 \\times 2$.",
      "solution": "$$12^2 = 12 \\times 12 = 144$$",
      "skill": "Calculer"
    },
    {
      "id": "4N4-2",
      "chapterId": "4N4",
      "tier": 2,
      "title": "Racine carrée exacte",
      "statement": "Calculer la racine carrée exacte suivante :\n$$R = \\sqrt{81}$$",
      "type": "exact",
      "answer": "9",
      "hint1": "Trouve le nombre positif dont le carré vaut 81.",
      "hint2": "Récite les carrés des entiers : $7^2 = 49$, $8^2 = 64$… continue jusqu'à $81$.",
      "solution": "Comme $9^2 = 81$, on a $\\sqrt{81} = 9$.",
      "skill": "Calculer"
    },
    {
      "id": "4N4-3",
      "chapterId": "4N4",
      "tier": 3,
      "title": "Somme et différence de racines carrées",
      "statement": "Calculer la valeur exacte de l'expression :\n$$S = \\sqrt{64} + \\sqrt{36} - \\sqrt{25}$$",
      "type": "exact",
      "answer": "9",
      "hint1": "Calcule séparément chaque racine carrée : quel nombre positif a pour carré 64 ? 36 ? 25 ?",
      "hint2": "Une fois chaque racine remplacée par un entier, il ne reste que des additions et des soustractions : effectue-les de gauche à droite.",
      "solution": "$$S = 8 + 6 - 5 = 9$$",
      "skill": "Calculer"
    },
    {
      "id": "4N4-4",
      "chapterId": "4N4",
      "tier": 4,
      "title": "Défi : Opérations combinées sous le radical et priorités",
      "statement": "Calculer la valeur exacte du nombre :\n$$E = \\sqrt{10^2 - 8^2} + \\sqrt{144} - 2\\sqrt{49}$$",
      "type": "exact",
      "answer": "4",
      "hint1": "Une racine carrée ne se distribue pas sur une différence : calcule d'abord tout ce qui se trouve sous la première racine, puis prends sa racine.",
      "hint2": "L'écriture $2\\sqrt{49}$ signifie $2 \\times \\sqrt{49}$. Remplace chaque racine par sa valeur entière, puis termine le calcul de gauche à droite.",
      "solution": "1. Premier terme : $\\sqrt{100 - 64} = \\sqrt{36} = 6$.\n2. Deuxième terme : $\\sqrt{144} = 12$.\n3. Troisième terme : $2 \\times 7 = 14$.\n4. Total : $E = 6 + 12 - 14 = 4$.",
      "skill": "Calculer"
    }
  ],
  "4N5": [
    {
      "id": "4N5-1",
      "chapterId": "4N5",
      "tier": 1,
      "title": "Résoudre une équation simple",
      "statement": "Résoudre l'équation suivante :\n$$3x + 5 = 26$$",
      "type": "exact",
      "answer": "7",
      "hint1": "Isole le terme en $x$ : quelle opération, faite des deux côtés de l'égalité, fait disparaître le $+ 5$ ?",
      "hint2": "Il reste une égalité de la forme $3x = \\ldots$ : divise les deux membres par le coefficient de $x$.",
      "solution": "$$3x = 26 - 5 \\implies 3x = 21 \\implies x = \\frac{21}{3} = 7$$",
      "skill": "Résoudre"
    },
    {
      "id": "4N5-2",
      "chapterId": "4N5",
      "tier": 2,
      "title": "Équation avec des x des deux côtés",
      "statement": "Résoudre l'équation suivante :\n$$7x - 5 = 2x + 15$$",
      "type": "exact",
      "answer": "4",
      "hint1": "Regroupe les termes en $x$ d'un même côté de l'égalité et les nombres de l'autre, en faisant chaque fois la même opération dans les deux membres.",
      "hint2": "Commence par soustraire $2x$ aux deux membres, puis élimine le nombre qui accompagne le terme en $x$. Il restera à diviser par le coefficient de $x$.",
      "solution": "$$7x - 2x = 15 + 5 \\implies 5x = 20 \\implies x = \\frac{20}{5} = 4$$",
      "skill": "Résoudre"
    },
    {
      "id": "4N5-3",
      "chapterId": "4N5",
      "tier": 3,
      "title": "Équation avec parenthèses et distributivité",
      "statement": "Résoudre l'équation :\n$$2(3x - 1) - 4(x + 2) = 6$$",
      "type": "exact",
      "answer": "8",
      "hint1": "Développe chaque produit avec la distributivité. Attention au signe $-$ placé devant $4(x + 2)$ : il change les signes des deux termes obtenus.",
      "hint2": "Réduis le membre de gauche en regroupant les termes en $x$ et les nombres. Résous ensuite l'équation obtenue : isole le terme en $x$, puis divise par son coefficient.",
      "solution": "1. Développement : $6x - 2 - 4x - 8 = 6$.\n2. Réduction : $2x - 10 = 6$.\n3. Résolution : $2x = 16 \\implies x = 8$.",
      "skill": "Résoudre"
    },
    {
      "id": "4N5-4",
      "chapterId": "4N5",
      "tier": 4,
      "title": "Pour aller plus loin : double distributivité $(ax + b)(cx + d)$",
      "statement": "**Pour aller plus loin** (notion étudiée en 3e).\nDévelopper et réduire l'expression :\n$$E = (3x - 4)(2x + 5)$$\n**Quel est le coefficient du terme en $x$ (le terme du 1er degré) ?**",
      "type": "exact",
      "answer": "7",
      "hint1": "Double distributivité : $3x \\times 2x + 3x \\times 5 - 4 \\times 2x - 4 \\times 5$.",
      "hint2": "Les termes du 1er degré sont $3x \\times 5$ et $-4 \\times 2x$ : réduis leur somme.",
      "solution": "$$E = 6x^2 + 15x - 8x - 20 = 6x^2 + 7x - 20$$\nLe coefficient de $x$ est donc 7.",
      "skill": "Calculer"
    }
  ],
  "4G1": [
    {
      "id": "4G1-1",
      "chapterId": "4G1",
      "tier": 1,
      "title": "Calcul de l'hypoténuse",
      "statement": "<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:12px 0;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 270 175\" width=\"270\" height=\"175\" style=\"max-width:270px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n  <polygon points=\"50,135 220,135 50,35\" fill=\"rgba(59, 130, 246, 0.05)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n  <line x1=\"220\" y1=\"135\" x2=\"50\" y2=\"35\" stroke=\"#ef4444\" stroke-width=\"2.6\" stroke-linecap=\"round\" />\n  <path d=\"M 50,123 L 62,123 L 62,135\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n  <text x=\"34\" y=\"152\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n  <text x=\"236\" y=\"140\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n  <text x=\"50\" y=\"22\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n  <g class=\"geo-pill\">\n      <rect x=\"113\" y=\"143\" width=\"44\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"135\" y=\"158.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">6 cm</text>\n    </g>\n  <g class=\"geo-pill\">\n      <rect x=\"6\" y=\"74\" width=\"44\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"28\" y=\"89.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">8 cm</text>\n    </g>\n  <g class=\"geo-pill\">\n      <rect x=\"126\" y=\"64\" width=\"44\" height=\"22\" rx=\"5\" fill=\"#fee2e2\" stroke=\"#ef4444\" stroke-width=\"1.8\" />\n      <text x=\"148\" y=\"79.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">? cm</text>\n    </g>\n</svg>\n</div>\n\nSoit $ABC$ un triangle rectangle en $A$ tel que $AB = 6\\text{ cm}$ et $AC = 8\\text{ cm}$.\nCalculer la longueur de l'hypoténuse $[BC]$.",
      "type": "exact",
      "answer": "10",
      "hint1": "$[BC]$ est le côté opposé à l'angle droit : c'est l'hypoténuse. Le théorème de Pythagore relie les trois côtés.",
      "hint2": "Écris $BC^2 = AB^2 + AC^2$, remplace les longueurs par leurs valeurs, puis cherche le nombre positif qui a pour carré le résultat obtenu.",
      "solution": "Le triangle $ABC$ est rectangle en $A$. D'après le théorème de Pythagore :\n$$BC^2 = AB^2 + AC^2 = 6^2 + 8^2 = 36 + 64 = 100$$\nComme $BC > 0$, $BC = \\sqrt{100} = 10\\text{ cm}$.",
      "skill": "Calculer"
    },
    {
      "id": "4G1-2",
      "chapterId": "4G1",
      "tier": 2,
      "title": "Calcul d'un côté de l'angle droit",
      "statement": "<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:12px 0;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 270 175\" width=\"270\" height=\"175\" style=\"max-width:270px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n  <polygon points=\"220,135 50,135 220,35\" fill=\"rgba(59, 130, 246, 0.05)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n  <line x1=\"220\" y1=\"135\" x2=\"220\" y2=\"35\" stroke=\"#ef4444\" stroke-width=\"2.6\" stroke-linecap=\"round\" />\n  <path d=\"M 220,123 L 208,123 L 208,135\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n  <text x=\"236\" y=\"152\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">D</text>\n  <text x=\"34\" y=\"140\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">E</text>\n  <text x=\"220\" y=\"22\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">F</text>\n  <g class=\"geo-pill\">\n      <rect x=\"113\" y=\"143\" width=\"44\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"135\" y=\"158.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">5 cm</text>\n    </g>\n  <g class=\"geo-pill\">\n      <rect x=\"220\" y=\"74\" width=\"44\" height=\"22\" rx=\"5\" fill=\"#fee2e2\" stroke=\"#ef4444\" stroke-width=\"1.8\" />\n      <text x=\"242\" y=\"89.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">? cm</text>\n    </g>\n  <g class=\"geo-pill\">\n      <rect x=\"96\" y=\"64\" width=\"51.5\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"122\" y=\"79.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">13 cm</text>\n    </g>\n</svg>\n</div>\n\nSoit $DEF$ un triangle rectangle en $D$ tel que l'hypoténuse $EF = 13\\text{ cm}$ et $DE = 5\\text{ cm}$.\nCalculer la longueur du côté $[DF]$.",
      "type": "exact",
      "answer": "12",
      "hint1": "Attention, on cherche un côté de l'angle droit, pas l'hypoténuse : repère d'abord l'hypoténuse de ce triangle.",
      "hint2": "Écris l'égalité de Pythagore, puis isole $DF^2$ : il faut soustraire le carré du côté connu au carré de l'hypoténuse. Termine par une racine carrée.",
      "solution": "Le triangle $DEF$ est rectangle en $D$. D'après le théorème de Pythagore :\n$$EF^2 = DE^2 + DF^2 \\implies DF^2 = EF^2 - DE^2 = 13^2 - 5^2 = 169 - 25 = 144$$\nComme $DF > 0$, $DF = \\sqrt{144} = 12\\text{ cm}$.",
      "skill": "Calculer"
    },
    {
      "id": "4G1-3",
      "chapterId": "4G1",
      "tier": 3,
      "title": "Réciproque du théorème de Pythagore",
      "statement": "<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:12px 0;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 270 175\" width=\"270\" height=\"175\" style=\"max-width:270px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n  <polygon points=\"50,135 220,135 50,35\" fill=\"rgba(59, 130, 246, 0.05)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n  <text x=\"34\" y=\"152\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">M</text>\n  <text x=\"236\" y=\"140\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">N</text>\n  <text x=\"50\" y=\"22\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">P</text>\n  <g class=\"geo-pill\">\n      <rect x=\"113\" y=\"143\" width=\"44\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"135\" y=\"158.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">9 cm</text>\n    </g>\n  <g class=\"geo-pill\">\n      <rect x=\"2\" y=\"74\" width=\"51.5\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"28\" y=\"89.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">12 cm</text>\n    </g>\n  <g class=\"geo-pill\">\n      <rect x=\"122\" y=\"64\" width=\"51.5\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"148\" y=\"79.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">15 cm</text>\n    </g>\n</svg>\n</div>\n\nUn triangle $MNP$ a pour dimensions : $MN = 9\\text{ cm}$, $MP = 12\\text{ cm}$ et $NP = 15\\text{ cm}$.\n**Ce triangle est-il rectangle ?**",
      "type": "mcq",
      "options": [
        "Oui, il est rectangle en $N$, car $NP^2 = MN^2 + MP^2$",
        "Non, car $NP \\neq MN + MP$",
        "Oui, il est rectangle en $M$, car $NP^2 = MN^2 + MP^2$",
        "On ne peut pas conclure sans mesurer les angles"
      ],
      "correctIndex": 2,
      "answer": "Oui, il est rectangle en $M$, car $NP^2 = MN^2 + MP^2$",
      "hint1": "Repère le plus grand côté. Calcule séparément son carré d'une part, et la somme des carrés des deux autres côtés d'autre part.",
      "hint2": "Compare les deux résultats. S'ils sont égaux, la réciproque du théorème de Pythagore s'applique : l'angle droit se trouve alors en face du plus grand côté.",
      "solution": "Le plus long côté est $[NP]$ :\n$$NP^2 = 15^2 = 225$$\nD'autre part :\n$$MN^2 + MP^2 = 9^2 + 12^2 = 81 + 144 = 225$$\nComme $NP^2 = MN^2 + MP^2$, d'après la réciproque du théorème de Pythagore, le triangle $MNP$ est **rectangle en $M$**.",
      "skill": "Raisonner"
    },
    {
      "id": "4G1-4",
      "chapterId": "4G1",
      "tier": 4,
      "title": "Défi : Modélisation géométrique (Échelle et mur)",
      "statement": "<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:12px 0;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 280 180\" width=\"280\" height=\"180\" style=\"max-width:270px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"20\" y1=\"145\" x2=\"265\" y2=\"145\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2.5\" />\n  <path d=\"M 30,145 L 20,155 M 70,145 L 60,155 M 110,145 L 100,155 M 150,145 L 140,155 M 190,145 L 180,155 M 230,145 L 220,155\" stroke=\"#94a3b8\" stroke-width=\"1.2\" />\n  <line x1=\"210\" y1=\"20\" x2=\"210\" y2=\"145\" stroke=\"#64748b\" stroke-width=\"4\" stroke-linecap=\"round\" />\n  <path d=\"M 210,133 L 198,133 L 198,145\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.6\" />\n  <line x1=\"164\" y1=\"145\" x2=\"210\" y2=\"35\" stroke=\"#b45309\" stroke-width=\"2.6\" stroke-linecap=\"round\" />\n  <line x1=\"165.1\" y1=\"127\" x2=\"176.1\" y2=\"131.6\" stroke=\"#d97706\" stroke-width=\"1.8\" />\n  <line x1=\"171.6\" y1=\"111.3\" x2=\"182.6\" y2=\"115.9\" stroke=\"#d97706\" stroke-width=\"1.8\" />\n  <line x1=\"178.2\" y1=\"95.6\" x2=\"189.2\" y2=\"100.2\" stroke=\"#d97706\" stroke-width=\"1.8\" />\n  <line x1=\"184.8\" y1=\"79.8\" x2=\"195.8\" y2=\"84.4\" stroke=\"#d97706\" stroke-width=\"1.8\" />\n  <line x1=\"191.4\" y1=\"64.1\" x2=\"202.4\" y2=\"68.7\" stroke=\"#d97706\" stroke-width=\"1.8\" />\n  <line x1=\"197.9\" y1=\"48.4\" x2=\"208.9\" y2=\"53\" stroke=\"#d97706\" stroke-width=\"1.8\" />\n  <g class=\"geo-pill\">\n      <rect x=\"103\" y=\"69\" width=\"74\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"140\" y=\"84.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">L = 6,5 m</text>\n    </g>\n  <g class=\"geo-pill\">\n      <rect x=\"150\" y=\"152\" width=\"74\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"187\" y=\"167.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">d = 2,5 m</text>\n    </g>\n  <g class=\"geo-pill\">\n      <rect x=\"205\" y=\"79\" width=\"66.5\" height=\"22\" rx=\"5\" fill=\"#fee2e2\" stroke=\"#ef4444\" stroke-width=\"1.8\" />\n      <text x=\"238\" y=\"94.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">h = ? m</text>\n    </g>\n</svg>\n</div>\n\nUne échelle de longueur $L = 6{,}5\\text{ m}$ est posée contre un mur vertical. Le pied de l'échelle est situé à une distance $d = 2{,}5\\text{ m}$ du bas du mur.\n**À quelle hauteur $h$ sur le mur le sommet de l'échelle parvient-il (en mètres) ?**",
      "type": "exact",
      "answer": "6",
      "hint1": "Le mur et le sol sont perpendiculaires : le triangle est rectangle et son hypoténuse est l'échelle.",
      "hint2": "D'après le théorème de Pythagore : $h^2 = L^2 - d^2$. Calcule les deux carrés.",
      "solution": "Le mur et le sol étant perpendiculaires, le triangle est rectangle et son hypoténuse est l'échelle. D'après le théorème de Pythagore :\n$$h^2 = L^2 - d^2 = 6{,}5^2 - 2{,}5^2 = 42{,}25 - 6{,}25 = 36$$\nUne longueur étant positive : $h = \\sqrt{36} = 6\\text{ m}$.",
      "skill": "Résoudre"
    },
    {
      "id": "4G1-5",
      "chapterId": "4G1",
      "tier": 3,
      "title": "Pour aller plus loin : contraposée du théorème de Pythagore",
      "statement": "**Pour aller plus loin** (contraposée, non exigible en 4e).\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:12px 0;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 270 175\" width=\"270\" height=\"175\" style=\"max-width:270px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n  <polygon points=\"50,135 220,135 50,35\" fill=\"rgba(59, 130, 246, 0.05)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n  <text x=\"34\" y=\"152\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">S</text>\n  <text x=\"236\" y=\"140\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">R</text>\n  <text x=\"50\" y=\"22\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">T</text>\n  <g class=\"geo-pill\">\n      <rect x=\"113\" y=\"143\" width=\"44\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"135\" y=\"158.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">7 cm</text>\n    </g>\n  <g class=\"geo-pill\">\n      <rect x=\"6\" y=\"74\" width=\"44\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"28\" y=\"89.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">9 cm</text>\n    </g>\n  <g class=\"geo-pill\">\n      <rect x=\"122\" y=\"64\" width=\"51.5\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"148\" y=\"79.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">12 cm</text>\n    </g>\n</svg>\n</div>\n\nUn triangle $RST$ a pour dimensions : $RS = 7\\text{ cm}$, $ST = 9\\text{ cm}$ et $RT = 12\\text{ cm}$.\n**Ce triangle est-il rectangle ?**",
      "type": "mcq",
      "options": [
        "Oui, il est rectangle en $S$, car $[RT]$ est le plus grand côté",
        "Non, il n'est pas rectangle, car $RT^2 \\neq RS^2 + ST^2$",
        "Oui, il est rectangle en $S$, car $RT^2$ est proche de $RS^2 + ST^2$",
        "On ne peut pas conclure sans mesurer les angles"
      ],
      "correctIndex": 1,
      "answer": "Non, il n'est pas rectangle, car $RT^2 \\neq RS^2 + ST^2$",
      "hint1": "Le plus long côté est $[RT] = 12\\text{ cm}$. Calcule $RT^2$ d'une part, et $RS^2 + ST^2$ d'autre part.",
      "hint2": "Effectue les deux calculs séparément, puis compare-les. S'ils sont différents, que permet de conclure la contraposée du théorème de Pythagore ?",
      "solution": "Dans le triangle $RST$, le plus long côté est $[RT]$ :\n1. D'une part : $$RT^2 = 12^2 = 144$$\n2. D'autre part : $$RS^2 + ST^2 = 7^2 + 9^2 = 49 + 81 = 130$$\n3. On constate que $RT^2 \\neq RS^2 + ST^2$ ($144 \\neq 130$).\nPar conséquent, d'après la **contraposée du théorème de Pythagore**, le triangle $RST$ **n'est pas rectangle**.",
      "skill": "Raisonner"
    },
    {
      "id": "4G1-6",
      "chapterId": "4G1",
      "tier": 4,
      "title": "Défi : Longueur d'une échelle nécessaire (Calcul de l'hypoténuse)",
      "statement": "<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:12px 0;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 280 180\" width=\"280\" height=\"180\" style=\"max-width:270px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"20\" y1=\"145\" x2=\"265\" y2=\"145\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2.5\" />\n  <path d=\"M 30,145 L 20,155 M 70,145 L 60,155 M 110,145 L 100,155 M 150,145 L 140,155 M 190,145 L 180,155 M 230,145 L 220,155\" stroke=\"#94a3b8\" stroke-width=\"1.2\" />\n  <line x1=\"210\" y1=\"20\" x2=\"210\" y2=\"145\" stroke=\"#64748b\" stroke-width=\"4\" stroke-linecap=\"round\" />\n  <path d=\"M 210,133 L 198,133 L 198,145\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.6\" />\n  <line x1=\"164\" y1=\"145\" x2=\"210\" y2=\"35\" stroke=\"#ef4444\" stroke-width=\"2.6\" stroke-linecap=\"round\" />\n  <line x1=\"165.1\" y1=\"127\" x2=\"176.1\" y2=\"131.6\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n  <line x1=\"171.6\" y1=\"111.3\" x2=\"182.6\" y2=\"115.9\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n  <line x1=\"178.2\" y1=\"95.6\" x2=\"189.2\" y2=\"100.2\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n  <line x1=\"184.8\" y1=\"79.8\" x2=\"195.8\" y2=\"84.4\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n  <line x1=\"191.4\" y1=\"64.1\" x2=\"202.4\" y2=\"68.7\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n  <line x1=\"197.9\" y1=\"48.4\" x2=\"208.9\" y2=\"53\" stroke=\"#dc2626\" stroke-width=\"1.8\" />\n  <g class=\"geo-pill\">\n      <rect x=\"103\" y=\"69\" width=\"74\" height=\"22\" rx=\"5\" fill=\"#fee2e2\" stroke=\"#ef4444\" stroke-width=\"1.8\" />\n      <text x=\"140\" y=\"84.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">L = ? m</text>\n    </g>\n  <g class=\"geo-pill\">\n      <rect x=\"150\" y=\"152\" width=\"74\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"187\" y=\"167.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">d = 5 m</text>\n    </g>\n  <g class=\"geo-pill\">\n      <rect x=\"205\" y=\"79\" width=\"66.5\" height=\"22\" rx=\"5\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"238\" y=\"94.5\" text-anchor=\"middle\" font-family=\"system-ui, -apple-system, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">h = 12 m</text>\n    </g>\n</svg>\n</div>\n\nPour atteindre une hauteur $h = 12\\text{ m}$ sur un mur vertical, on place le pied d'une échelle à une distance $d = 5\\text{ m}$ de la base du mur.\n**Quelle doit être la longueur $L$ de l'échelle pour atteindre cette hauteur (en mètres) ?**",
      "type": "exact",
      "answer": "13",
      "hint1": "Le mur vertical et le sol horizontal sont perpendiculaires : l'échelle correspond à l'hypoténuse.",
      "hint2": "D'après le théorème de Pythagore, $L^2 = d^2 + h^2$ : calcule cette somme de carrés, puis cherche le nombre positif qui a pour carré le résultat.",
      "solution": "Dans le triangle rectangle formé par le mur vertical, le sol horizontal et l'échelle (qui correspond à l'hypoténuse) :\n$$L^2 = d^2 + h^2$$\n$$L^2 = 5^2 + 12^2 = 25 + 144 = 169$$\nComme une longueur est positive ($L > 0$) :\n$$L = \\sqrt{169} = 13\\text{ m}$$",
      "skill": "Résoudre"
    }
  ],
  "4G4": [
    {
      "id": "4G4-1",
      "chapterId": "4G4",
      "tier": 1,
      "title": "Volume d'une pyramide à base carrée",
      "statement": "Une pyramide a pour base un carré de côté $c = 6\\text{ cm}$ et pour hauteur $h = 5\\text{ cm}$.\nCalculer son volume en $\\text{cm}^3$.",
      "type": "exact",
      "answer": "60",
      "hint1": "Le volume d'une pyramide est le tiers du produit de l'aire de la base par la hauteur.",
      "hint2": "Calcule d'abord l'aire du carré de côté $6$. Multiplie-la par la hauteur, sans oublier de diviser par $3$.",
      "solution": "$$\\mathcal{V} = \\frac{6^2 \\times 5}{3} = \\frac{36 \\times 5}{3} = \\frac{180}{3} = 60\\text{ cm}^3$$",
      "skill": "Calculer"
    },
    {
      "id": "4G4-2",
      "chapterId": "4G4",
      "tier": 2,
      "title": "Angle du secteur dans le patron d'un cône",
      "statement": "Un cône de révolution a pour rayon de base $r = 3\\text{ cm}$ et pour génératrice $g = 9\\text{ cm}$.\nCalculer, en degrés, l'angle au centre du secteur circulaire de son patron.",
      "type": "exact",
      "answer": "120",
      "hint1": "L'arc du secteur a la même longueur que le périmètre de la base, ce qui donne $\\alpha = 360^\\circ \\times \\dfrac{r}{g}$.",
      "hint2": "Ici, le quotient $\\dfrac{r}{g}$ vaut $\\dfrac{3}{9}$ : simplifie-le, puis multiplie par $360$.",
      "solution": "$$\\alpha = 360^\\circ \\times \\frac{3}{9} = 360^\\circ \\times \\frac{1}{3} = 120^\\circ$$",
      "skill": "Calculer"
    },
    {
      "id": "4G4-3",
      "chapterId": "4G4",
      "tier": 3,
      "title": "Volume d'un cône de révolution",
      "statement": "Un cône de révolution a un rayon de base $R = 6\\text{ cm}$ et une hauteur $h = 9\\text{ cm}$.\nDonner la valeur exacte de son volume sous la forme $n\\pi\\text{ cm}^3$ (saisir le nombre $n$).",
      "type": "exact",
      "answer": "108",
      "hint1": "Volume d'un cône : $\\mathcal{V} = \\frac{1}{3}\\pi R^2 h$.",
      "hint2": "Ici $R^2 = 6^2 = 36$ : remplace $R^2$ et $h$ dans la formule, puis simplifie par $3$ avant de multiplier.",
      "solution": "$$\\mathcal{V} = \\frac{36 \\times 9}{3}\\pi = 108\\pi\\text{ cm}^3$$",
      "skill": "Calculer"
    },
    {
      "id": "4G4-4",
      "chapterId": "4G4",
      "tier": 4,
      "title": "Défi : Retrouver un cône à partir de son patron",
      "statement": "Le patron d'un cône de révolution est formé d'un disque et d'un secteur circulaire de rayon $g = 15\\text{ cm}$ et d'angle $216^\\circ$.\n\n**Déterminer la valeur exacte du volume de ce cône sous la forme $n\\pi\\text{ cm}^3$ (saisir le nombre $n$).**",
      "type": "exact",
      "answer": "324",
      "hint1": "Commence par le rayon de la base : l'angle du secteur donne $\\dfrac{\\alpha}{360^\\circ} = \\dfrac{r}{g}$. La hauteur s'obtient ensuite avec Pythagore.",
      "hint2": "Le rayon, la hauteur et la génératrice forment un triangle rectangle dont l'hypoténuse est $g$ : $h^2 = g^2 - r^2$. Termine avec $\\mathcal{V} = \\frac{1}{3}\\pi r^2 h$.",
      "solution": "1. Rayon : $\\dfrac{r}{15} = \\dfrac{216}{360} = \\dfrac{3}{5}$, donc $r = \\dfrac{3 \\times 15}{5} = 9\\text{ cm}$.\n2. Hauteur (Pythagore) : $h^2 = 15^2 - 9^2 = 225 - 81 = 144$, donc $h = 12\\text{ cm}$.\n3. Volume : $\\mathcal{V} = \\dfrac{\\pi \\times 9^2 \\times 12}{3} = \\dfrac{81 \\times 12}{3}\\pi = 324\\pi\\text{ cm}^3$.",
      "skill": "Résoudre"
    },
    {
      "id": "4G4-5",
      "chapterId": "4G4",
      "tier": 1,
      "title": "Coordonnées d'un sommet d'un pavé droit",
      "statement": "<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:12px 0;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 310 195\" width=\"310\" height=\"195\" style=\"max-width:310px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Pavé droit ABCDEFGH en perspective cavalière\">\n  <polygon points=\"60,170 220,170 220,80 60,80\" fill=\"rgba(37, 99, 235, 0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.6\" stroke-linejoin=\"round\" />\n  <polygon points=\"220,170 280,125 280,35 220,80\" fill=\"rgba(37, 99, 235, 0.05)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.6\" stroke-linejoin=\"round\" />\n  <polygon points=\"60,80 220,80 280,35 120,35\" fill=\"rgba(37, 99, 235, 0.05)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.6\" stroke-linejoin=\"round\" />\n  <g stroke=\"var(--text-main, #334155)\" stroke-width=\"1.3\" stroke-dasharray=\"5 4\">\n    <line x1=\"60\" y1=\"170\" x2=\"120\" y2=\"125\" />\n    <line x1=\"120\" y1=\"125\" x2=\"280\" y2=\"125\" />\n    <line x1=\"120\" y1=\"125\" x2=\"120\" y2=\"35\" />\n  </g>\n  <g font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #334155)\">\n    <text x=\"49\" y=\"182\">A</text>\n    <text x=\"224\" y=\"184\">B</text>\n    <text x=\"286\" y=\"133\">C</text>\n    <text x=\"125\" y=\"139\">D</text>\n    <text x=\"47\" y=\"76\">E</text>\n    <text x=\"208\" y=\"75\">F</text>\n    <text x=\"285\" y=\"32\">G</text>\n    <text x=\"108\" y=\"30\">H</text>\n  </g>\n</svg>\n</div>\nDans le pavé droit $ABCDEFGH$, on prend $A$ comme origine, avec les abscisses sur $(AB)$, les ordonnées sur $(AD)$ et les altitudes sur $(AE)$. On donne $AB = 6$, $AD = 4$ et $AE = 3$.\n\nDonner les coordonnées du point $G$ dans l'ordre (abscisse ; ordonnée ; altitude), en les séparant par des points-virgules.",
      "type": "exact",
      "answer": "(6;4;3)",
      "hint1": "Pars de $A$ et regarde de combien il faut avancer le long de chaque axe pour arriver en $G$.",
      "hint2": "$G$ est le sommet du haut situé à l'opposé de $A$ : son abscisse est la longueur $AB$, puis pense à l'ordonnée et à l'altitude de la même façon.",
      "solution": "Pour aller de $A$ à $G$, on avance de $AB = 6$ le long de $(AB)$, de $AD = 4$ le long de $(AD)$, et on monte de $AE = 3$. Donc $G(6 ; 4 ; 3)$.",
      "skill": "Représenter"
    },
    {
      "id": "4G4-6",
      "chapterId": "4G4",
      "tier": 2,
      "title": "Base d'une pyramide en perspective cavalière",
      "statement": "Une pyramide à base carrée est posée sur une table. On la dessine en perspective cavalière.\nComment sa base apparaît-elle sur le dessin ?",
      "type": "mcq",
      "options": [
        "Un parallélogramme",
        "Un carré",
        "Un cercle aplati",
        "Un triangle"
      ],
      "correctIndex": 0,
      "answer": "Un parallélogramme",
      "hint1": "La base est horizontale : seules les faces verticales placées à l'avant sont dessinées en vraie grandeur.",
      "hint2": "Deux côtés de la base suivent les fuyantes, inclinées et réduites. Demande-toi si les côtés restent parallèles deux à deux et si les angles droits sont encore visibles.",
      "solution": "La base est horizontale. Ses deux côtés orientés vers l'arrière sont dessinés sur des fuyantes, inclinées et réduites. Les côtés restent parallèles deux à deux, mais les angles droits ne se voient plus : le carré apparaît comme un **parallélogramme**.",
      "skill": "Représenter"
    },
    {
      "id": "4G4-7",
      "chapterId": "4G4",
      "tier": 3,
      "title": "Aire du patron d'une pyramide",
      "statement": "Une pyramide a pour base un carré de côté $6\\text{ cm}$. Ses quatre faces latérales sont des triangles isocèles identiques, dont les deux côtés égaux mesurent $5\\text{ cm}$.\n\nCalculer l'aire totale du patron de cette pyramide, en $\\text{cm}^2$.",
      "type": "exact",
      "answer": "84",
      "hint1": "Le patron est formé du carré et de quatre triangles. Pour l'aire d'un triangle, il te manque sa hauteur : utilise Pythagore.",
      "hint2": "Dans un triangle isocèle, la hauteur issue du sommet principal coupe le côté de $6\\text{ cm}$ en son milieu. Elle forme un triangle rectangle d'hypoténuse $5\\text{ cm}$.",
      "solution": "1. Hauteur d'une face : la hauteur coupe le côté de $6$ cm en son milieu, donc $h^2 = 5^2 - 3^2 = 25 - 9 = 16$ et $h = 4$ cm.\n2. Aire d'un triangle : $\\dfrac{6 \\times 4}{2} = 12\\text{ cm}^2$.\n3. Aire du patron : $6^2 + 4 \\times 12 = 36 + 48 = 84\\text{ cm}^2$.",
      "skill": "Calculer"
    },
    {
      "id": "4G4-8",
      "chapterId": "4G4",
      "tier": 2,
      "title": "Rapport d'agrandissement et aire de la base",
      "statement": "Une pyramide a une base d'aire $12\\text{ cm}^2$ et une hauteur de $5\\text{ cm}$. On l'agrandit : la pyramide obtenue a une hauteur de $15\\text{ cm}$.\n\nCalculer l'aire de la base de la pyramide agrandie, en $\\text{cm}^2$.",
      "type": "exact",
      "answer": "108",
      "hint1": "Trouve d'abord le rapport $k$ de l'agrandissement avec les deux hauteurs. Une aire est multipliée par $k^2$, pas par $k$.",
      "hint2": "$k = \\dfrac{15}{5} = 3$ : les longueurs sont multipliées par $3$. Par combien l'aire de la base est-elle multipliée ?",
      "solution": "1. Rapport : $k = \\dfrac{15}{5} = 3$.\n2. Aire de la nouvelle base : $12 \\times 3^2 = 12 \\times 9 = 108\\text{ cm}^2$.",
      "skill": "Calculer"
    },
    {
      "id": "4G4-9",
      "chapterId": "4G4",
      "tier": 3,
      "title": "Volume après un agrandissement",
      "statement": "Une pyramide a un volume de $40\\text{ cm}^3$. On multiplie toutes ses longueurs par $\\dfrac{3}{2}$.\n\nCalculer le volume de la pyramide obtenue, en $\\text{cm}^3$.",
      "type": "exact",
      "answer": "135",
      "hint1": "Quand les longueurs sont multipliées par $k$, un volume est multiplié par $k^3$.",
      "hint2": "Ici $k = \\dfrac{3}{2}$ : pour obtenir le coefficient des volumes, élève au cube le numérateur et le dénominateur.",
      "solution": "1. Coefficient pour les volumes : $\\left(\\dfrac{3}{2}\\right)^3 = \\dfrac{27}{8}$.\n2. Nouveau volume : $40 \\times \\dfrac{27}{8} = 5 \\times 27 = 135\\text{ cm}^3$.",
      "skill": "Calculer"
    }
  ],
  "4D1": [
    {
      "id": "4D1-1",
      "chapterId": "4D1",
      "tier": 1,
      "title": "Calcul de la moyenne d'une série",
      "statement": "Calculer la moyenne de la série : $12~;~14~;~16~;~18$.",
      "type": "exact",
      "answer": "15",
      "hint1": "Fais la somme des 4 nombres puis divise par 4.",
      "hint2": "Additionne les quatre valeurs (tu peux regrouper $12 + 18$ et $14 + 16$), puis divise la somme obtenue par le nombre de valeurs.",
      "solution": "$$\\bar{x} = \\frac{12 + 14 + 16 + 18}{4} = \\frac{60}{4} = 15$$",
      "skill": "Calculer"
    },
    {
      "id": "4D1-2",
      "chapterId": "4D1",
      "tier": 2,
      "title": "Moyenne pondérée par des effectifs",
      "statement": "Dans une classe, 2 élèves ont eu 10, 3 élèves ont eu 12 et 5 élèves ont eu 15.\nCalculer la moyenne de la classe.",
      "type": "exact",
      "answer": "13,1",
      "hint1": "Multiplie chaque note par son effectif, additionne ces produits, puis divise par l'effectif total $2 + 3 + 5$.",
      "hint2": "Le premier produit est $2 \\times 10 = 20$ : calcule les deux autres, additionne-les, puis divise par l'effectif total.",
      "solution": "$$\\bar{x} = \\frac{20 + 36 + 75}{10} = \\frac{131}{10} = 13{,}1$$",
      "skill": "Calculer"
    },
    {
      "id": "4D1-3",
      "chapterId": "4D1",
      "tier": 3,
      "title": "Médiane d'une série d'effectif pair",
      "statement": "Voici les temps (en minutes) mis par six élèves pour venir au collège :\n$$8 ~;~ 12 ~;~ 5 ~;~ 15 ~;~ 9 ~;~ 11$$\nDéterminer la médiane de cette série.",
      "type": "exact",
      "answer": "10",
      "hint1": "Commence par ranger les valeurs dans l'ordre croissant.",
      "hint2": "L'effectif est pair (6 valeurs) : la médiane est la moyenne des 3e et 4e valeurs.",
      "solution": "1. Série rangée : $5 ~;~ 8 ~;~ 9 ~;~ 11 ~;~ 12 ~;~ 15$.\n2. L'effectif $N = 6$ est pair : la médiane est la moyenne des valeurs de rang 3 et 4.\n$$\\text{Médiane} = \\frac{9 + 11}{2} = 10\\text{ min}$$\nAu moins la moitié des élèves mettent 10 minutes ou moins.",
      "skill": "Calculer"
    },
    {
      "id": "4D1-4",
      "chapterId": "4D1",
      "tier": 4,
      "title": "Défi : Note nécessaire pour atteindre une moyenne",
      "statement": "Léa a obtenu $11$, $14$ et $9$ à ses trois premiers contrôles (tous de même coefficient).\n**Quelle note doit-elle obtenir au quatrième contrôle pour avoir exactement $12$ de moyenne ?**",
      "type": "exact",
      "answer": "14",
      "hint1": "Avec 4 notes et une moyenne de 12, la somme des 4 notes doit valoir $4 \\times 12$.",
      "hint2": "La somme visée est $4 \\times 12 = 48$ : calcule maintenant la somme des trois premières notes, puis ce qu'il manque pour atteindre $48$.",
      "solution": "1. Pour une moyenne de $12$ sur $4$ contrôles, la somme des notes doit être $4 \\times 12 = 48$.\n2. Somme des trois premières notes : $11 + 14 + 9 = 34$.\n3. Note nécessaire : $x = 48 - 34 = 14$.\nVérification : $\\dfrac{11 + 14 + 9 + 14}{4} = \\dfrac{48}{4} = 12$.",
      "skill": "Résoudre"
    }
  ],
  "4P1": [
    {
      "id": "4P1-1",
      "chapterId": "4P1",
      "tier": 1,
      "title": "Quatrième proportionnelle",
      "statement": "Si 3 stylos coûtent $4{,}50$ €, combien coûtent 5 stylos identiques ?",
      "type": "exact",
      "answer": "7,5",
      "hint1": "Commence par calculer le prix d'un seul stylo.",
      "hint2": "Un stylo coûte $4{,}50 \\div 3$ € : calcule ce prix, puis celui de $5$ stylos.",
      "solution": "$$x = \\frac{4{,}50 \\times 5}{3} = 7{,}50\\text{ euros}$$",
      "skill": "Calculer"
    },
    {
      "id": "4P1-2",
      "chapterId": "4P1",
      "tier": 2,
      "title": "Calcul du montant d'une réduction",
      "statement": "Un manteau coûte $150$ €. Il bénéficie d'une remise de $20\\%$.\nQuel est le montant de la remise en euros ?",
      "type": "exact",
      "answer": "30",
      "hint1": "Le montant de la remise, c'est $20\\%$ du prix de départ.",
      "hint2": "Calcule d'abord $10\\%$ de $150$ € (on divise par $10$), puis déduis-en $20\\%$.",
      "solution": "$$\\text{Remise} = 150 \\times 0{,}20 = 30\\text{ euros}$$",
      "skill": "Calculer"
    },
    {
      "id": "4P1-3",
      "chapterId": "4P1",
      "tier": 3,
      "title": "Vitesse moyenne et durée décimale",
      "statement": "Un train parcourt $135\\text{ km}$ en $1\\text{ h } 30\\text{ min}$.\nQuelle est sa vitesse moyenne en km/h ?",
      "type": "exact",
      "answer": "90",
      "hint1": "Exprime la durée en heures décimales : $30\\text{ min}$ est une moitié d'heure.",
      "hint2": "$1\\text{ h } 30\\text{ min} = 1{,}5\\text{ h}$. Applique $v = \\frac{d}{t}$, avec $d$ en km et $t$ en heures.",
      "solution": "$$v = \\frac{135}{1{,}5} = 90\\text{ km/h}$$",
      "skill": "Calculer"
    },
    {
      "id": "4P1-4",
      "chapterId": "4P1",
      "tier": 4,
      "title": "Défi : Vitesse moyenne sur deux tronçons successifs",
      "statement": "Un automobiliste parcourt $120\\text{ km}$ en 2 étapes : les premiers $60\\text{ km}$ à $60\\text{ km/h}$, puis les $60\\text{ km}$ restants à $30\\text{ km/h}$.\n\n**Quelle est sa vitesse moyenne sur l'ensemble du parcours en km/h ?**",
      "type": "exact",
      "answer": "40",
      "hint1": "La vitesse moyenne n'est pas la moyenne des vitesses : il faut la distance totale et le temps total.",
      "hint2": "Pour chaque étape, calcule la durée avec $t = \\frac{d}{v}$. Additionne les deux durées, puis applique $v = \\frac{d}{t}$ sur l'ensemble du trajet.",
      "solution": "$$v_{\\text{moy}} = \\frac{120\\text{ km}}{(1 + 2)\\text{ h}} = \\frac{120}{3} = 40\\text{ km/h}$$",
      "skill": "Résoudre"
    }
  ],
  "4G2": [
  {
    "id": "4G2-1",
    "chapterId": "4G2",
    "tier": 1,
    "title": "Pour aller plus loin : rayon du cercle circonscrit à un triangle rectangle",
    "statement": "**Pour aller plus loin** (non exigible en 4e).\nUn triangle rectangle a une hypoténuse mesurant $16\\text{ cm}$. Quel est le rayon de son cercle circonscrit en cm ?",
    "type": "exact",
    "answer": "8",
    "hint1": "Où se trouve le centre du cercle circonscrit à un triangle rectangle ?",
    "hint2": "Le centre est le milieu de l'hypoténuse : l'hypoténuse est donc un diamètre du cercle. Le rayon en est la moitié.",
    "solution": "$$R = \\frac{\\text{Hypoténuse}}{2} = \\frac{16}{2} = 8\\text{ cm}$$",
    "skill": "Calculer"
  },
  {
    "id": "4G2-2",
    "chapterId": "4G2",
    "tier": 2,
    "title": "Pour aller plus loin : longueur de la médiane issue de l'angle droit",
    "statement": "**Pour aller plus loin** (non exigible en 4e).\nDans un triangle $ABC$ rectangle en $A$, on donne $BC = 13\\text{ cm}$. La médiane issue du sommet $A$ coupe $[BC]$ en $M$. Quelle est la longueur $AM$ en cm ?",
    "type": "exact",
    "answer": "6,5",
    "hint1": "Repère l'hypoténuse : c'est le côté opposé à l'angle droit. Que sais-tu de la médiane qui lui est associée ?",
    "hint2": "Dans un triangle rectangle, la médiane relative à l'hypoténuse mesure la moitié de l'hypoténuse.",
    "solution": "$$AM = \\frac{BC}{2} = \\frac{13}{2} = 6{,}5\\text{ cm}$$",
    "skill": "Calculer"
  },
  {
    "id": "4G2-3",
    "chapterId": "4G2",
    "tier": 3,
    "title": "Pour aller plus loin : théorème de la droite des milieux",
    "statement": "**Pour aller plus loin** (non exigible en 4e).\nDans un triangle $ABC$, $I$ est le milieu de $[AB]$ et $J$ est le milieu de $[AC]$. Sachant que $BC = 18\\text{ cm}$, quelle est la longueur du segment $[IJ]$ en cm ?",
    "type": "exact",
    "answer": "9",
    "hint1": "$I$ et $J$ sont les milieux de deux côtés : quel théorème relie $[IJ]$ au troisième côté ?",
    "hint2": "Le segment joignant les milieux de deux côtés mesure la moitié du troisième côté, ici $[BC]$.",
    "solution": "$$IJ = \\frac{BC}{2} = \\frac{18}{2} = 9\\text{ cm}$$",
    "skill": "Calculer"
  },
  {
    "id": "4G2-4",
    "chapterId": "4G2",
    "tier": 4,
    "title": "Défi, pour aller plus loin : démontrer qu'un triangle est rectangle",
    "statement": "**Pour aller plus loin** (non exigible en 4e).\nLe triangle $RST$ est inscrit dans un cercle ayant pour diamètre le segment $[RS]$. Que peut-on affirmer avec certitude ?",
    "type": "mcq",
    "options": [
      "Le triangle RST est rectangle en T",
      "Le triangle RST est équilatéral",
      "Le triangle RST est rectangle en R",
      "Le point T est le centre du cercle"
    ],
    "correctIndex": 0,
    "explanations": [
      "Exact : un triangle inscrit dans un cercle dont un côté est le diamètre est rectangle au sommet opposé.",
      "Rien n'indique que ses trois côtés sont égaux.",
      "L'angle droit est au sommet opposé au diamètre, c'est-à-dire en T.",
      "Le centre est le milieu de [RS], pas T."
    ],
    "hint1": "Un triangle inscrit dans un cercle dont un côté est un diamètre a une propriété particulière.",
    "hint2": "Un tel triangle est rectangle, et l'angle droit est au sommet qui n'appartient pas au diamètre.",
    "solution": "Comme $[RS]$ est un diamètre du cercle circonscrit, le triangle $RST$ est rectangle en $T$.",
    "skill": "Raisonner"
  },
  {
    "id": "4G2-5",
    "chapterId": "4G2",
    "tier": 2,
    "title": "Théorème de Thalès : calculer une longueur",
    "statement": "Dans un triangle $ABC$, $M \\in [AB]$ et $N \\in [AC]$. Les droites $(MN)$ et $(BC)$ sont parallèles. On donne $AM = 6\\text{ cm}$, $AB = 15\\text{ cm}$ et $AC = 10\\text{ cm}$.\nCalculer $AN$ (en cm).",
    "type": "exact",
    "answer": "4",
    "hint1": "Les droites $(MN)$ et $(BC)$ sont parallèles : écris les quotients égaux du théorème de Thalès et garde les deux qui contiennent $AN$ et des longueurs connues.",
    "hint2": "On a $\\dfrac{AM}{AB} = \\dfrac{AN}{AC}$, soit $\\dfrac{6}{15} = \\dfrac{AN}{10}$ : termine avec un produit en croix.",
    "solution": "Dans le triangle $ABC$, $M \\in [AB]$, $N \\in [AC]$ et $(MN) // (BC)$. D'après le théorème de Thalès :\n$$\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC}$$\nDonc $\\dfrac{6}{15} = \\dfrac{AN}{10}$ et, par produit en croix :\n$$AN = \\frac{6 \\times 10}{15} = \\frac{60}{15} = 4\\text{ cm}$$",
    "skill": "Calculer"
  },
  {
    "id": "4G2-6",
    "chapterId": "4G2",
    "tier": 3,
    "title": "Réciproque de Thalès : démontrer un parallélisme",
    "statement": "Dans un triangle $ABC$, $M \\in [AB]$ et $N \\in [AC]$. On donne $AM = 2{,}4\\text{ cm}$, $AB = 6\\text{ cm}$, $AN = 3\\text{ cm}$ et $AC = 7{,}5\\text{ cm}$.\nLes droites $(MN)$ et $(BC)$ sont-elles parallèles ?",
    "type": "mcq",
    "options": [
      "Oui, d'après la réciproque du théorème de Thalès, car $\\dfrac{AM}{AB} = \\dfrac{AN}{AC}$",
      "Oui, d'après le théorème de Thalès",
      "Non, car $\\dfrac{AM}{AB} \\neq \\dfrac{AN}{AC}$",
      "On ne peut pas conclure sans connaître $MN$ et $BC$"
    ],
    "correctIndex": 0,
    "explanations": [
      "Exact : les deux quotients valent $0{,}4$, et $M$, $N$ sont sur les côtés du triangle.",
      "Le théorème direct suppose le parallélisme : il ne peut pas le démontrer.",
      "Calcule les deux quotients : ils sont égaux.",
      "Les quatre longueurs données suffisent : on compare seulement $\\dfrac{AM}{AB}$ et $\\dfrac{AN}{AC}$."
    ],
    "hint1": "Calcule séparément les quotients $\\dfrac{AM}{AB}$ et $\\dfrac{AN}{AC}$, puis compare-les.",
    "hint2": "Le premier quotient est $\\dfrac{2{,}4}{6}$ et le second $\\dfrac{3}{7{,}5}$. Quel énoncé du cours permet de conclure à partir de cette comparaison ?",
    "solution": "On calcule séparément :\n$$\\frac{AM}{AB} = \\frac{2{,}4}{6} = 0{,}4 \\quad \\text{et} \\quad \\frac{AN}{AC} = \\frac{3}{7{,}5} = 0{,}4$$\nLes deux quotients sont égaux, et $M \\in [AB]$, $N \\in [AC]$. D'après la réciproque du théorème de Thalès, les droites $(MN)$ et $(BC)$ sont parallèles.",
    "skill": "Raisonner"
  },
  {
    "id": "4G2-7",
    "chapterId": "4G2",
    "tier": 1,
    "title": "Valeur exacte d'un cosinus",
    "statement": "Le triangle $RST$ est rectangle en $S$, avec $RS = 8\\text{ cm}$, $ST = 15\\text{ cm}$ et $RT = 17\\text{ cm}$.\n**Donner la valeur exacte de $\\cos(\\widehat{SRT})$ sous forme de fraction.**",
    "type": "exact",
    "answer": "8/17",
    "hint1": "Repère l'hypoténuse, en face de l'angle droit, puis le côté adjacent à l'angle de sommet $R$.",
    "hint2": "Le côté adjacent est celui qui touche le sommet $R$ sans être l'hypoténuse. Écris ensuite le quotient du côté adjacent par l'hypoténuse.",
    "solution": "L'hypoténuse est $[RT]$ et le côté adjacent à l'angle $\\widehat{SRT}$ est $[RS]$.\n$$\\cos(\\widehat{SRT}) = \\frac{RS}{RT} = \\frac{8}{17}$$",
    "skill": "Calculer"
  },
  {
    "id": "4G2-8",
    "chapterId": "4G2",
    "tier": 2,
    "title": "Calculer un côté adjacent",
    "statement": "Le triangle $MNP$ est rectangle en $N$, avec $MP = 12\\text{ cm}$ et $\\widehat{NMP} = 35^\\circ$.\n**Calculer $MN$, en cm, arrondi au dixième.**",
    "type": "exact",
    "answer": "9,8",
    "hint1": "Par rapport à l'angle $\\widehat{NMP}$, repère le côté adjacent et l'hypoténuse, puis écris le cosinus de cet angle avec les noms des côtés.",
    "hint2": "Le côté cherché est au numérateur : isole-le, puis utilise la calculatrice en mode degré.",
    "solution": "Dans le triangle $MNP$ rectangle en $N$ :\n$$\\cos(\\widehat{NMP}) = \\frac{MN}{MP} \\quad\\text{donc}\\quad MN = 12 \\times \\cos(35^\\circ) \\approx 9{,}8\\text{ cm}$$",
    "skill": "Calculer"
  },
  {
    "id": "4G2-9",
    "chapterId": "4G2",
    "tier": 3,
    "title": "L'angle d'une échelle avec le sol",
    "statement": "Une échelle de $5\\text{ m}$ est posée contre un mur vertical, sur un sol horizontal. Son pied se trouve à $1{,}4\\text{ m}$ du mur.\n**Quelle est la mesure de l'angle que forme l'échelle avec le sol ? Arrondir au degré.**",
    "type": "exact",
    "answer": "74",
    "hint1": "Le mur, le sol et l'échelle forment un triangle rectangle : l'échelle en est l'hypoténuse.",
    "hint2": "Écris le cosinus de l'angle cherché avec les deux longueurs connues, puis utilise la touche $\\cos^{-1}$ de la calculatrice en mode degré.",
    "solution": "Le mur est perpendiculaire au sol : l'échelle est l'hypoténuse d'un triangle rectangle, et la distance du pied au mur est le côté adjacent à l'angle cherché, noté $\\alpha$.\n$$\\cos(\\alpha) = \\frac{1{,}4}{5} = \\frac{7}{25}$$\nÀ la calculatrice, $\\alpha \\approx 74^\\circ$.",
    "skill": "Modéliser"
  },
  {
    "id": "4G2-10",
    "chapterId": "4G2",
    "tier": 4,
    "title": "Défi : cosinus puis théorème de Pythagore",
    "statement": "Le triangle $ABC$ est rectangle en $B$, avec $AB = 7\\text{ cm}$ et $\\widehat{BAC} = 40^\\circ$.\n**Calculer $BC$, en cm, arrondi au dixième.** (Garder la valeur complète de $AC$ à la calculatrice : n'arrondir qu'à la fin.)",
    "type": "exact",
    "answer": "5,9",
    "hint1": "Le cosinus permet d'obtenir l'hypoténuse $[AC]$. Le théorème de Pythagore donne ensuite le côté $[BC]$.",
    "hint2": "Dans le cosinus, $AC$ est au dénominateur : avec un produit en croix, on divise $AB$ par le cosinus. Écris ensuite $BC^2$ en fonction de $AC^2$ et $AB^2$.",
    "solution": "**Étape 1 (cosinus).** $\\cos(40^\\circ) = \\dfrac{AB}{AC}$, donc $AC = \\dfrac{7}{\\cos(40^\\circ)}$, soit $AC \\approx 9{,}14$ cm (on garde la valeur complète en mémoire).\n**Étape 2 (Pythagore).** Dans le triangle $ABC$ rectangle en $B$ : $BC^2 = AC^2 - AB^2 = AC^2 - 49$.\n**Étape 3.** À la calculatrice, $BC \\approx 5{,}9$ cm.",
    "skill": "Calculer"
  }
],
  "4G3": [
  {
    "id": "4G3-1",
    "chapterId": "4G3",
    "tier": 1,
    "title": "Conservation des distances par translation",
    "statement": "Par la translation qui transforme le point $A$ en $B$, l'image d'un segment $[EF]$ de longueur $8{,}4\\text{ cm}$ mesure en cm :",
    "type": "exact",
    "answer": "8,4",
    "hint1": "Une translation déforme-t-elle les figures ?",
    "hint2": "La translation conserve les longueurs : l'image de $[EF]$ a la même longueur que $[EF]$.",
    "solution": "La translation conserve les distances, donc $E'F' = EF = 8{,}4\\text{ cm}$.",
    "skill": "Raisonner"
  },
  {
    "id": "4G3-2",
    "chapterId": "4G3",
    "tier": 2,
    "title": "Nature du quadrilatère formé",
    "statement": "Les points $A$, $B$ et $C$ ne sont pas alignés. Si le point $D$ est l'image du point $C$ par la translation qui transforme $A$ en $B$, quelle est la nature du quadrilatère $ABDC$ ?",
    "type": "mcq",
    "options": [
      "Un parallélogramme",
      "Un losange",
      "Un trapèze quelconque",
      "Un rectangle"
    ],
    "correctIndex": 0,
    "explanations": [
      "Exact : d'après le lien entre translation et parallélogramme, ABDC est un parallélogramme.",
      "Il faudrait que AB = AC, ce qui n'est pas précisé.",
      "Faux, ses côtés opposés sont parallèles.",
      "Il faudrait un angle droit, ce qui n'est pas garanti."
    ],
    "hint1": "Les segments $[AB]$ et $[CD]$ ont même direction, même sens et même longueur.",
    "hint2": "Deux côtés opposés parallèles et de même longueur : quel quadrilatère possède cette propriété ?",
    "solution": "D'après le lien entre translation et parallélogramme, $D$ étant l'image de $C$ par la translation qui transforme $A$ en $B$, le quadrilatère $ABDC$ est un parallélogramme (non aplati, car $A$, $B$ et $C$ ne sont pas alignés).",
    "skill": "Raisonner"
  },
  {
    "id": "4G3-3",
    "chapterId": "4G3",
    "tier": 3,
    "title": "Image d'un cercle : raisonner sur un parallélogramme",
    "statement": "Un cercle de centre $O$ et de rayon $5\\text{ cm}$ a pour image, par la translation qui transforme $A$ en $B$, un cercle de centre $O'$. On sait que $AB = 13\\text{ cm}$. Soit $M$ un point du cercle qui n'est pas sur la droite $(OO')$, et $M'$ son image. Quel est le périmètre du quadrilatère $OO'M'M$ en cm ?",
    "type": "exact",
    "answer": "36",
    "hint1": "Les points $O$ et $M$ ont glissé de la même façon : quelle est la nature du quadrilatère $OO'M'M$ ?",
    "hint2": "C'est un parallélogramme : le côté $[OO']$ a pour longueur celle du glissement, et le côté $[OM]$ est un rayon du cercle.",
    "solution": "$O'$ et $M'$ sont les images de $O$ et de $M$ par la même translation, donc $OO'M'M$ est un parallélogramme (non aplati, car $M$ n'est pas sur $(OO')$).\nLe côté $[OO']$ a la longueur du glissement : $OO' = AB = 13\\text{ cm}$. Le côté $[OM]$ est un rayon : $OM = 5\\text{ cm}$.\n$$\\text{Périmètre} = 2 \\times (13 + 5) = 36\\text{ cm}$$",
    "skill": "Raisonner"
  },
  {
    "id": "4G3-4",
    "chapterId": "4G3",
    "tier": 4,
    "title": "Défi : Translation et repère",
    "statement": "Dans un repère, la translation transforme l'origine $O(0;0)$ en $T(3;4)$. Quelles sont les coordonnées de l'image du point $M(2;1)$ ?",
    "type": "mcq",
    "options": [
      "(5 ; 5)",
      "(1 ; 3)",
      "(6 ; 4)",
      "(-1 ; -3)"
    ],
    "correctIndex": 0,
    "explanations": [
      "Exact : on ajoute 3 à l'abscisse (2 + 3 = 5) et 4 à l'ordonnée (1 + 4 = 5).",
      "Tu as calculé les écarts entre $T$ et $M$ au lieu d'ajouter le déplacement aux coordonnées de $M$.",
      "Tu as multiplié les coordonnées au lieu de les ajouter.",
      "Tu as soustrait le déplacement au lieu de l'ajouter : c'est la translation en sens inverse."
    ],
    "hint1": "Le déplacement qui envoie $O$ sur $T$ est le même pour tous les points.",
    "hint2": "Ce déplacement vaut $+3$ en abscisse et $+4$ en ordonnée : applique-le aux coordonnées de $M$.",
    "solution": "$$x' = 2 + 3 = 5 \\quad \\text{et} \\quad y' = 1 + 4 = 5 \\implies M'(5 ; 5)$$",
    "skill": "Calculer"
  },
  {
    "id": "4G3-5",
    "chapterId": "4G3",
    "tier": 4,
    "title": "Défi : Translation avec coordonnées négatives",
    "statement": "Dans un repère, une translation décale les points de $-2$ en abscisse et $+5$ en ordonnée.\n**Quelles sont les coordonnées du point image de $A(9 ; 7)$ ?** *(Format attendu : $(x ; y)$)*",
    "type": "exact",
    "answer": "(7;12)",
    "hint1": "Une translation ajoute le même décalage à tous les points : un pour l'abscisse, un pour l'ordonnée.",
    "hint2": "Applique le décalage $-2$ à l'abscisse de $A$ et le décalage $+5$ à son ordonnée, puis écris le résultat sous la forme $(x ; y)$.",
    "solution": "On applique les décalages de la translation aux coordonnées de $A(9 ; 7)$ :\n- Abscisse : $$x' = 9 - 2 = 7$$\n- Ordonnée : $$y' = 7 + 5 = 12$$\nLes coordonnées du point image sont donc **$A'(7 ; 12)$** (ou **$(7 ; 12)$**).",
    "skill": "Résoudre"
  },
  {
    "id": "4G3-6",
    "chapterId": "4G3",
    "tier": 1,
    "title": "Frise : compter les glissements",
    "statement": "Une frise est construite en répétant un motif par la translation qui le déplace de $6$ carreaux vers la droite. De combien de carreaux le motif numéro $5$ est-il décalé par rapport au motif numéro $1$ ?",
    "type": "exact",
    "answer": "24",
    "hint1": "Entre deux motifs qui se suivent, il y a un seul glissement. Compte les glissements qui séparent le motif $1$ du motif $5$.",
    "hint2": "Le motif $2$ est décalé de $6$ carreaux par rapport au motif $1$, le motif $3$ de $2 \\times 6 = 12$ carreaux. Continue jusqu'au motif $5$ en comptant les glissements, pas les motifs.",
    "solution": "Du motif $1$ au motif $5$, il y a $5 - 1 = 4$ glissements. Chacun déplace le motif de $6$ carreaux :\n$$4 \\times 6 = 24\\text{ carreaux}$$",
    "skill": "Raisonner"
  },
  {
    "id": "4G3-7",
    "chapterId": "4G3",
    "tier": 2,
    "title": "Frise : repérer le motif qui ne convient pas",
    "statement": "<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:12px 0;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 270 74\" width=\"270\" height=\"74\" style=\"max-width:300px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Cinq motifs numérotés de 1 à 5\"><polygon points=\"10,50 10,10 40,10 40,24 22,24 22,50\" fill=\"rgba(37, 99, 235, 0.2)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.6\" stroke-linejoin=\"round\" /><polygon points=\"65,50 65,10 95,10 95,24 77,24 77,50\" fill=\"rgba(37, 99, 235, 0.2)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.6\" stroke-linejoin=\"round\" /><polygon points=\"120,50 120,10 150,10 150,24 132,24 132,50\" fill=\"rgba(37, 99, 235, 0.2)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.6\" stroke-linejoin=\"round\" /><polygon points=\"205,50 205,10 175,10 175,24 193,24 193,50\" fill=\"rgba(37, 99, 235, 0.2)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.6\" stroke-linejoin=\"round\" /><polygon points=\"230,50 230,10 260,10 260,24 242,24 242,50\" fill=\"rgba(37, 99, 235, 0.2)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.6\" stroke-linejoin=\"round\" /><text x=\"25\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">1</text><text x=\"80\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">2</text><text x=\"135\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">3</text><text x=\"190\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">4</text><text x=\"245\" y=\"66\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">5</text></svg>\n</div>\nOn a voulu construire une frise en répétant le motif $1$ par une même translation. Un des motifs ne convient pas. Lequel ?",
    "type": "mcq",
    "options": [
      "Le motif 2",
      "Le motif 3",
      "Le motif 4",
      "Le motif 5"
    ],
    "correctIndex": 2,
    "explanations": [
      "Le motif 2 a la même forme et la même orientation que le motif 1.",
      "Le motif 3 a la même forme et la même orientation que le motif 1.",
      "Exact : le motif 4 est retourné, sa branche horizontale part vers la gauche. Une translation ne retourne pas les figures.",
      "Le motif 5 a la même forme et la même orientation que le motif 1."
    ],
    "hint1": "Une translation fait seulement glisser une figure : elle ne la tourne pas et ne la retourne pas.",
    "hint2": "Regarde de quel côté part la branche horizontale de chaque motif.",
    "solution": "Par une translation, tous les motifs gardent la même orientation. Les motifs $1$, $2$, $3$ et $5$ ont leur branche horizontale vers la droite ; celle du motif $4$ part vers la gauche : il est retourné, il ne peut donc pas être l'image du motif $1$ par une translation.",
    "skill": "Raisonner"
  },
  {
    "id": "4G3-8",
    "chapterId": "4G3",
    "tier": 3,
    "title": "Pavage d'un rectangle par translation",
    "statement": "Une zone rectangulaire de $36$ carreaux de long sur $18$ carreaux de large est pavée, sans trou ni chevauchement, par des rectangles de $4$ carreaux sur $3$. Le premier rectangle a son côté de $4$ carreaux le long de la longueur de la zone, et tous les autres sont obtenus à partir de lui par translation. Combien de rectangles faut-il ?",
    "type": "exact",
    "answer": "54",
    "hint1": "Une translation ne tourne pas les rectangles : tous ont leur côté de $4$ carreaux dans le même sens. Cherche combien de rectangles tiennent sur une rangée, puis combien de rangées il y a.",
    "hint2": "Sur une rangée de $36$ carreaux, il tient $36 \\div 4 = 9$ rectangles. Combien de rangées de $3$ carreaux de haut tiennent dans la largeur ?",
    "solution": "Tous les rectangles gardent la même orientation. Sur une rangée de $36$ carreaux, il tient $36 \\div 4 = 9$ rectangles. Sur les $18$ carreaux de large, il y a $18 \\div 3 = 6$ rangées.\n$$9 \\times 6 = 54 \\text{ rectangles}$$",
    "skill": "Résoudre"
  }
],
  "4D2": [
  {
    "id": "4D2-1",
    "chapterId": "4D2",
    "tier": 1,
    "title": "Calcul de l'événement contraire",
    "statement": "La probabilité qu'il pleuve demain est estimée à $P(E) = 0{,}35$. Quelle est la probabilité qu'il ne pleuve pas demain ?",
    "type": "exact",
    "answer": "0,65",
    "acceptedAnswers": ["65%"],
    "hint1": "Formule de l'événement contraire : $P(\\bar{E}) = 1 - P(E)$.",
    "hint2": "Ici $P(E) = 0{,}35$ : calcule $1 - 0{,}35$.",
    "solution": "$$P(\\bar{E}) = 1 - 0{,}35 = 0{,}65$$",
    "skill": "Calculer"
  },
  {
    "id": "4D2-2",
    "chapterId": "4D2",
    "tier": 2,
    "title": "Tirage sans succès",
    "statement": "Une tombola contient 200 billets, dont 20 sont gagnants. Quelle est la probabilité de tirer un billet perdant sous forme décimale ?",
    "type": "exact",
    "answer": "0,9",
    "hint1": "« Perdant » est l'événement contraire de « gagnant » : $P(\\text{Perdant}) = 1 - P(\\text{Gagnant})$.",
    "hint2": "Ici, $P(\\text{Gagnant}) = \\frac{20}{200}$ : écris cette probabilité sous forme décimale, puis utilise l'événement contraire.",
    "solution": "$$P(\\text{Perdant}) = 1 - \\frac{20}{200} = 1 - 0{,}1 = 0{,}9$$\nAutre méthode : il y a $200 - 20 = 180$ billets perdants, donc $P(\\text{Perdant}) = \\frac{180}{200} = 0{,}9$.",
    "skill": "Calculer"
  },
  {
    "id": "4D2-3",
    "chapterId": "4D2",
    "tier": 3,
    "title": "Pour aller plus loin : expérience à deux épreuves (pièces)",
    "statement": "**Pour aller plus loin** (deux épreuves).\nOn lance deux pièces de monnaie équilibrées consécutivement. Quelle est la probabilité d'obtenir deux fois « Pile » ?",
    "type": "mcq",
    "options": [
      "1/4",
      "1/2",
      "3/4",
      "1/3"
    ],
    "correctIndex": 0,
    "explanations": [
      "Exact : les 4 issues équiprobables sont (P,P), (P,F), (F,P), (F,F). P(P,P) = 1/4 = 0,25.",
      "Erreur fréquente : 1/2 est la probabilité pour une seule pièce.",
      "3/4 est la probabilité d'obtenir au moins une fois Pile, pas deux fois Pile.",
      "Erreur de dénombrement."
    ],
    "hint1": "Commence par dresser la liste de toutes les issues possibles (un arbre peut aider).",
    "hint2": "Le premier lancer donne P ou F ; pour chacun de ces résultats, le second lancer donne encore P ou F. Écris toutes les issues sous la forme (P ; F), puis compte celles qui conviennent.",
    "solution": "Les 4 issues équiprobables sont $(P ; P)$, $(P ; F)$, $(F ; P)$ et $(F ; F)$, et une seule est favorable :\n$$P(\\text{Pile, Pile}) = \\frac{1}{4}$$\nOn retrouve le produit des probabilités le long du chemin : $\\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$.",
    "skill": "Calculer"
  },
  {
    "id": "4D2-4",
    "chapterId": "4D2",
    "tier": 4,
    "title": "Pour aller plus loin : tirage avec remise",
    "statement": "**Pour aller plus loin** (deux épreuves).\nUne urne contient 2 boules vertes et 3 boules blanches. On tire successivement 2 boules avec remise. Quelle est la probabilité de tirer 2 boules blanches ? Donner le résultat sous forme de fraction.",
    "type": "exact",
    "answer": "9/25",
    "acceptUnreduced": true,
    "hint1": "Avec remise, la composition de l'urne ne change pas : le deuxième tirage se fait dans les mêmes conditions que le premier.",
    "hint2": "Au premier tirage, $P(\\text{blanche}) = \\frac{3}{5}$, et de même au second. Sur un arbre, on multiplie les probabilités le long du chemin.",
    "solution": "$$P(\\text{Blanche, Blanche}) = \\frac{3}{5} \\times \\frac{3}{5} = \\frac{9}{25}$$",
    "skill": "Calculer"
  },
  {
    "id": "4D2-5",
    "chapterId": "4D2",
    "tier": 2,
    "title": "Probabilité sur une cible carrée",
    "statement": "Une cible carrée de côté 20 cm contient une zone rouge carrée de côté 8 cm. Une fléchette atteint la cible en un point pris au hasard. Quelle est la probabilité d'atteindre la zone rouge, sous forme décimale ?",
    "type": "exact",
    "answer": "0,16",
    "acceptedAnswers": ["16%"],
    "hint1": "La probabilité d'atteindre une zone est le quotient de l'aire de cette zone par l'aire totale de la cible.",
    "hint2": "L'aire de la cible est $20 \\times 20 = 400$ cm² : calcule l'aire de la zone rouge, écris le quotient, puis donne son écriture décimale.",
    "solution": "$$P(\\text{rouge}) = \\frac{8 \\times 8}{20 \\times 20} = \\frac{64}{400} = 0{,}16$$",
    "skill": "Calculer"
  },
  {
    "id": "4D2-6",
    "chapterId": "4D2",
    "tier": 3,
    "title": "Estimer des probabilités avec un osselet",
    "statement": "On a lancé un osselet 500 fois. Il est retombé 190 fois sur la face A, 205 fois sur la face B, 45 fois sur la face C et 60 fois sur la face D. En prenant les fréquences comme estimations des probabilités, estimer la probabilité que l'osselet ne retombe ni sur A ni sur B, sous forme décimale.",
    "type": "exact",
    "answer": "0,21",
    "acceptedAnswers": ["21%"],
    "hint1": "Les faces d'un osselet ne sont pas équiprobables : on estime la probabilité d'un événement par sa fréquence observée.",
    "hint2": "« Ni A ni B » signifie que l'osselet retombe sur C ou sur D : compte les lancers concernés, puis divise par le nombre total de lancers.",
    "solution": "« Ni A ni B » correspond aux faces C et D :\n$$P(\\text{ni A ni B}) \\approx \\frac{45 + 60}{500} = \\frac{105}{500} = 0{,}21$$",
    "skill": "Calculer"
  },
  {
    "id": "4D2-7",
    "chapterId": "4D2",
    "tier": 4,
    "title": "Défi : une cible à trois zones",
    "statement": "Une cible est formée de trois disques de même centre, de rayons 5 cm, 10 cm et 15 cm. Une fléchette atteint la cible en un point pris au hasard. Quelle est la probabilité d'atteindre l'anneau du milieu, compris entre les disques de rayons 5 cm et 10 cm ? Donner le résultat sous forme de fraction.",
    "type": "exact",
    "answer": "1/3",
    "acceptUnreduced": true,
    "hint1": "La probabilité est le quotient de l'aire de la zone par l'aire totale ; un anneau a pour aire la différence des aires de deux disques.",
    "hint2": "L'aire totale est celle du grand disque : $\\pi \\times 15^2 = 225\\pi$ cm². Calcule de même l'aire de l'anneau du milieu, puis le quotient : $\\pi$ se simplifie.",
    "solution": "Aire de l'anneau du milieu : $100\\pi - 25\\pi = 75\\pi$ cm². Aire totale : $225\\pi$ cm².\n$$P = \\frac{75\\pi}{225\\pi} = \\frac{75}{225} = \\frac{1}{3}$$",
    "skill": "Calculer"
  }
],
  "4P2": [
  {
    "id": "4P2-1",
    "chapterId": "4P2",
    "tier": 1,
    "title": "Calcul à partir d'une formule",
    "statement": "On donne la formule $y = 5x - 7$. Calculer la valeur de $y$ pour $x = 4$ :",
    "type": "exact",
    "answer": "13",
    "hint1": "Remplace $x$ par 4 dans la formule.",
    "hint2": "Calcule $5 \\times 4 - 7$ en effectuant d'abord la multiplication.",
    "solution": "$$y = 5 \\times 4 - 7 = 20 - 7 = 13$$",
    "skill": "Calculer"
  },
  {
    "id": "4P2-2",
    "chapterId": "4P2",
    "tier": 2,
    "title": "Programme de calcul : résultat obtenu",
    "statement": "On donne le programme : « Choisir un nombre, lui ajouter 3, multiplier le résultat par 4 ». Si l'on choisit le nombre 5 au départ, quel résultat obtient-on ?",
    "type": "exact",
    "answer": "32",
    "hint1": "Applique les étapes du programme dans l'ordre à partir du nombre choisi.",
    "hint2": "On ajoute $3$ **avant** de multiplier : le calcul s'écrit $(5 + 3) \\times 4$, et non $5 + 3 \\times 4$.",
    "solution": "$$(5 + 3) \\times 4 = 8 \\times 4 = 32$$",
    "skill": "Calculer"
  },
  {
    "id": "4P2-3",
    "chapterId": "4P2",
    "tier": 3,
    "title": "Retrouver une valeur de départ",
    "statement": "On donne la formule $y = 3x + 5$. Pour quelle valeur de $x$ obtient-on $y = 26$ ?",
    "type": "exact",
    "answer": "7",
    "hint1": "Remplace $y$ par 26 dans la formule : tu obtiens une équation d'inconnue $x$ à résoudre.",
    "hint2": "L'équation est $3x + 5 = 26$. Commence par soustraire 5 aux deux membres.",
    "solution": "$$3x + 5 = 26 \\implies 3x = 21 \\implies x = \\frac{21}{3} = 7$$",
    "skill": "Résoudre"
  },
  {
    "id": "4P2-4",
    "chapterId": "4P2",
    "tier": 4,
    "title": "Défi : rendre deux programmes équivalents",
    "statement": "Programme A : « Choisir un nombre ; ajouter 3 ; multiplier le résultat par 4. »\nProgramme B : « Choisir un nombre ; multiplier par 2 ; ajouter 1 ; multiplier le résultat par 2 ; ajouter $k$. »\nQuelle valeur faut-il donner à $k$ pour que les deux programmes donnent le même résultat, quel que soit le nombre choisi ?",
    "type": "exact",
    "answer": "10",
    "hint1": "Traduis chaque programme par une expression en fonction du nombre choisi $x$, développe, réduis, puis compare les deux expressions.",
    "hint2": "Le programme A donne $4(x + 3)$ et le programme B donne $2(2x + 1) + k$. Les termes en $x$ étant égaux, il reste à comparer les termes constants.",
    "solution": "**Programme A.** $4(x + 3) = 4x + 12$.\n**Programme B.** $2(2x + 1) + k = 4x + 2 + k$.\n**Comparaison.** Les deux expressions ont le même terme en $x$. Elles sont égales pour tout nombre $x$ si et seulement si $2 + k = 12$, soit $k = 10$.\n**Vérification.** Pour $x = 1$ : A donne $16$ et B donne $4 + 2 + 10 = 16$. Pour $x = -2$ : A donne $4$ et B donne $-8 + 2 + 10 = 4$.\n**Conclusion :** il faut prendre $k = 10$.",
    "skill": "Raisonner"
  }
],
  "4A1": [
  {
    "id": "4A1-1",
    "chapterId": "4A1",
    "tier": 1,
    "title": "Valeur d'une variable après affectation",
    "statement": "Dans un script Scratch : « mettre V à 8 », puis « ajouter 7 à V ». Quelle est la valeur finale de la variable V ?",
    "type": "exact",
    "answer": "15",
    "hint1": "La variable commence à 8 puis augmente de 7.",
    "hint2": "« Ajouter 7 à V » remplace V par V + 7 : calcule $8 + 7$.",
    "solution": "$$V = 8 + 7 = 15$$",
    "skill": "Calculer"
  },
  {
    "id": "4A1-2",
    "chapterId": "4A1",
    "tier": 2,
    "title": "Instruction conditionnelle « Si ... alors ... sinon »",
    "statement": "On exécute le bloc : « Si N > 10 alors mettre R à 20 sinon mettre R à 5 ». Si la variable N vaut 7, quelle sera la valeur de R ?",
    "type": "exact",
    "answer": "5",
    "hint1": "Remplace $N$ par sa valeur 7 dans la condition, et décide si elle est vraie ou fausse.",
    "hint2": "$7 > 10$ est faux : c'est donc la branche « sinon » qui s'exécute.",
    "solution": "Comme 7 n'est pas supérieur à 10, la condition est fausse et la variable $R$ prend la valeur 5.",
    "skill": "Raisonner"
  },
  {
    "id": "4A1-3",
    "chapterId": "4A1",
    "tier": 3,
    "title": "Programme de calcul Scratch",
    "statement": "Un script Scratch demande un nombre $x$. Si $x \\ge 0$, il calcule $2x$, sinon il calcule $x + 10$. Quelle est la valeur de sortie pour $x = -4$ ?",
    "type": "exact",
    "answer": "6",
    "hint1": "Commence par tester la condition $x \\ge 0$ pour $x = -4$.",
    "hint2": "$-4 < 0$, la condition est fausse : le script exécute donc le calcul de la branche « sinon ».",
    "solution": "Comme $-4 < 0$, on effectue le calcul de la branche sinon : $-4 + 10 = 6$.",
    "skill": "Calculer"
  },
  {
    "id": "4A1-4",
    "chapterId": "4A1",
    "tier": 4,
    "title": "Défi : Boucle conditionnelle avec compteur (pour aller plus loin)",
    "statement": "**Pour aller plus loin** (boucle « répéter jusqu'à ce que », travaillée en 3e).\nCompteur commence à 0. On exécute : « répéter jusqu'à ce que Compteur > 24 : ajouter 6 à Compteur ». Quelle est la valeur finale de Compteur à la fin de la boucle ?",
    "type": "exact",
    "answer": "30",
    "hint1": "Écris les valeurs successives du compteur (0, 6, 12, …) et teste la condition « Compteur > 24 » après chaque ajout : la boucle s'arrête dès qu'elle est vraie.",
    "hint2": "Les valeurs successives sont $0, 6, 12, 18, 24$ : la condition est-elle vraie pour 24 ? Si non, la boucle fait encore un tour.",
    "solution": "À 24, la condition $24 > 24$ est fausse, on ajoute encore 6 : Compteur passe à 30 ($30 > 24$ est vrai, la boucle s'arrête).",
    "skill": "Raisonner"
  },
  {
    "id": "4A1-5",
    "chapterId": "4A1",
    "tier": 1,
    "title": "Remettre des blocs dans l'ordre",
    "statement": "Un script doit demander un nombre, lui ajouter 4, puis dire le résultat. Ses blocs sont mélangés :\n```text\nBloc A : dire (N)\nBloc B : ajouter 4 à [N]\nBloc C : demander [Choisis un nombre] et attendre\nBloc D : mettre [N] à réponse\n```\nDans quel ordre faut-il les placer sous le bloc « quand drapeau cliqué » ?",
    "type": "mcq",
    "options": [
      "D, C, B, A",
      "C, B, D, A",
      "C, D, B, A",
      "C, D, A, B"
    ],
    "correctIndex": 2,
    "explanations": [
      "Le bloc « réponse » n'a pas de valeur tant que la question n'a pas été posée.",
      "Le bloc « mettre [N] à réponse » effacerait l'ajout fait juste avant.",
      "Exact : on pose la question, on range la réponse, on calcule, puis le lutin parle.",
      "Le lutin dirait le nombre avant l'ajout."
    ],
    "hint1": "Cherche d'abord le bloc qui doit venir en premier : le bloc « réponse » n'a de valeur qu'une fois la question posée.",
    "hint2": "Le bloc C vient en premier. Place ensuite les blocs A, B et D en suivant la consigne.",
    "solution": "On pose d'abord la question (bloc C), puis on range la réponse dans N (bloc D). On ajoute ensuite 4 (bloc B), et le lutin ne dit le résultat qu'à la fin (bloc A). L'ordre est donc C, D, B, A.",
    "skill": "Raisonner"
  },
  {
    "id": "4A1-6",
    "chapterId": "4A1",
    "tier": 2,
    "title": "Scripts déclenchés par des touches",
    "statement": "Un programme contient ces trois scripts :\n```text\nquand drapeau cliqué\nmettre [score] à 10\n\nquand la touche [a] est pressée\najouter 5 à [score]\n\nquand la touche [b] est pressée\najouter -3 à [score]\n```\nOn clique sur le drapeau, puis on appuie, dans cet ordre, sur les touches a, a, b, a. Quelle est la valeur finale de score ?",
    "type": "exact",
    "answer": "22",
    "hint1": "Chaque script s'exécute seulement quand son événement se produit : suis la valeur de score événement par événement.",
    "hint2": "Après le drapeau, score vaut $10$ ; après le premier appui sur a, il vaut $15$. Continue avec les trois appuis suivants.",
    "solution": "Drapeau : score vaut $10$. Touche a : $10 + 5 = 15$. Touche a : $15 + 5 = 20$. Touche b : $20 - 3 = 17$. Touche a : $17 + 5 = 22$. La valeur finale de score est $22$.",
    "skill": "Calculer"
  },
  {
    "id": "4A1-7",
    "chapterId": "4A1",
    "tier": 3,
    "title": "Corriger un script",
    "statement": "Un jeu doit ajouter 1 point à chaque clic sur le lutin, en partant de 0 au lancement. Voici le programme écrit :\n```text\nquand drapeau cliqué\ndire [C'est parti !]\n\nquand ce lutin est cliqué\nmettre [score] à 0\najouter 1 à [score]\n```\nAprès plusieurs clics, score vaut toujours 1. Quelle correction faut-il faire ?",
    "type": "mcq",
    "options": [
      "Remplacer « ajouter 1 à [score] » par « mettre [score] à 1 »",
      "Déplacer « mettre [score] à 0 » sous « quand drapeau cliqué »",
      "Placer « ajouter 1 à [score] » au-dessus de « mettre [score] à 0 »",
      "Remplacer « mettre [score] à 0 » par « mettre [score] à 1 »"
    ],
    "correctIndex": 1,
    "explanations": [
      "score vaudrait encore 1 après chaque clic : les points ne s'accumuleraient pas.",
      "Exact : l'initialisation n'est faite qu'une fois, au lancement, et les points s'accumulent ensuite à chaque clic.",
      "score serait remis à 0 après chaque ajout : il vaudrait toujours 0.",
      "score vaudrait toujours $1 + 1 = 2$ après chaque clic."
    ],
    "hint1": "Exécute deux fois de suite le script du clic et note la valeur de score à chaque ligne.",
    "hint2": "À chaque clic, le script recommence tout en haut : demande-toi quel bloc ne devrait être exécuté qu'une seule fois.",
    "solution": "À chaque clic, le bloc « mettre [score] à 0 » remet score à 0 avant l'ajout : score vaut donc toujours $0 + 1 = 1$. L'initialisation ne doit être faite qu'une fois, au lancement : il faut déplacer ce bloc sous « quand drapeau cliqué ». Le script du clic ne contient plus alors que « ajouter 1 à [score] ».",
    "skill": "Raisonner"
  },
  {
    "id": "4A1-8",
    "chapterId": "4A1",
    "tier": 4,
    "title": "Défi : Jeu au clavier avec limites",
    "statement": "Un programme contient ces trois scripts :\n```text\nquand drapeau cliqué\nmettre [pos] à 0\n\nquand la touche [flèche droite] est pressée\nsi (pos < 12) alors\n    ajouter 5 à [pos]\n\nquand la touche [flèche gauche] est pressée\nsi (pos > 0) alors\n    ajouter -5 à [pos]\n```\nOn clique sur le drapeau, puis on appuie 4 fois sur la flèche droite, 1 fois sur la flèche gauche et enfin 2 fois sur la flèche droite. Quelle est la valeur finale de pos ?",
    "type": "exact",
    "answer": "15",
    "hint1": "Suis pos appui par appui et teste la condition avant chaque ajout : si elle est fausse, pos ne change pas.",
    "hint2": "Après trois appuis sur la flèche droite, pos vaut $15$ : la condition « pos < 12 » est-elle encore vraie au quatrième appui ?",
    "solution": "Flèche droite : $0 < 12$ donc pos vaut $5$ ; $5 < 12$ donc pos vaut $10$ ; $10 < 12$ donc pos vaut $15$ ; au quatrième appui, $15 < 12$ est faux et pos reste à $15$. Flèche gauche : $15 > 0$ donc pos vaut $10$. Flèche droite : $10 < 12$ donc pos vaut $15$ ; au dernier appui, $15 < 12$ est faux et pos reste à $15$. La valeur finale de pos est $15$.",
    "skill": "Résoudre"
  }
]
};

window.MATHS_WORKSHEETS_4E = {
  "4G1": [
    {
      "id": "4G1-devoir_pythagore",
      "filename": "Fiche_4e_Theoreme_Pythagore.md",
      "type": "devoir_entrainement",
      "title": "Fiche 4ème : Le Théorème de Pythagore & Applications",
      "statement": "# Classe de 4ème — Mathématiques\n## Fiche d'entraînement : Théorème de Pythagore et Réciproque\n\n### Exercice 1 : Calculs de longueurs (6 points)\n1. Soit $ABC$ un triangle rectangle en $B$ tel que $AB = 4{,}8\\text{ cm}$ et $BC = 6{,}4\\text{ cm}$. Calculer $AC$.\n2. Soit $MNP$ rectangle en $M$ tel que $NP = 15\\text{ cm}$ et $MN = 9\\text{ cm}$. Calculer $MP$.\n\n### Exercice 2 : Réciproque et contraposée (4 points)\nUn maçon veut vérifier si l'angle d'un mur est bien droit. Il mesure une distance de $60\\text{ cm}$ sur un mur, $80\\text{ cm}$ sur l'autre mur, et constate que la diagonale mesure $100\\text{ cm}$.\nL'angle est-il parfaitement droit ? Rédiger la démonstration avec rigueur.\n",
      "solution": "## Corrigé détaillé\n\n### Exercice 1\n1. Le triangle $ABC$ est rectangle en $B$. D'après le théorème de Pythagore :\n$$AC^2 = AB^2 + BC^2 = 4{,}8^2 + 6{,}4^2 = 23{,}04 + 40{,}96 = 64$$\nComme $AC > 0$, $AC = \\sqrt{64} = 8\\text{ cm}$.\n\n2. Le triangle $MNP$ est rectangle en $M$ :\n$$NP^2 = MN^2 + MP^2 \\implies MP^2 = NP^2 - MN^2 = 15^2 - 9^2 = 225 - 81 = 144$$\nComme $MP > 0$, $MP = \\sqrt{144} = 12\\text{ cm}$.\n\n### Exercice 2\nLe plus grand côté est $100\\text{ cm}$.\n• $100^2 = 10\\,000$\n• $60^2 + 80^2 = 3\\,600 + 6\\,400 = 10\\,000$\nOn constate que $100^2 = 60^2 + 80^2$. D'après la réciproque du théorème de Pythagore, le triangle formé est rectangle. Le mur forme bien un angle droit."
    }
  ],
  "4N1": [
    {
      "id": "4N1-devoir_relatifs",
      "filename": "Fiche_4e_Relatifs_Operations.md",
      "type": "devoir_entrainement",
      "title": "Fiche 4ème : Multiplication et division des relatifs",
      "statement": "# Classe de 4ème — Mathématiques\n## Fiche d'entraînement : Règle des signes et priorités\n\n### Exercice 1 : Calculs directs (5 points)\nCalculer les produits et quotients suivants :\n1. $A = (-6) \\times (-7)$\n2. $B = (-8) \\times (+5)$\n3. $C = \\frac{-36}{-4}$\n4. $D = \\frac{42}{-7}$\n5. $E = (-2) \\times (-3) \\times (-5)$\n\n### Exercice 2 : Enchaînement d'opérations (5 points)\nCalculer en respectant les priorités opératoires :\n1. $F = 15 - 4 \\times (-3)$\n2. $G = (-5) \\times [12 - (-3) \\times 4]$\n",
      "solution": "## Corrigé détaillé\n\n### Exercice 1\n1. $A = +42$ (produit de deux négatifs = positif).\n2. $B = -40$ (signes contraires = négatif).\n3. $C = +9$.\n4. $D = -6$.\n5. $E = (-2 \\times -3) \\times -5 = 6 \\times -5 = -30$ (3 facteurs négatifs = résultat négatif).\n\n### Exercice 2\n1. $F = 15 - (-12) = 15 + 12 = 27$.\n2. Intérieur du crochet : $12 - (-12) = 12 + 12 = 24$.\n$G = (-5) \\times 24 = -120$."
    }
  ],
  "4N5": [
    {
      "id": "4N5-devoir_equations",
      "filename": "Fiche_4e_Equations.md",
      "type": "devoir_entrainement",
      "title": "Fiche 4ème : Calcul littéral et équations",
      "statement": "# Classe de 4ème — Mathématiques\n## Fiche d'entraînement : Équations du premier degré\n\n### Exercice 1 : Résolutions d'équations (6 points)\nRésoudre les équations suivantes d'inconnue $x$ :\n1. $3x + 7 = 22$\n2. $5x - 8 = -23$\n3. $7x + 2 = 4x + 17$\n\n### Exercice 2 : Problème à mettre en équation (4 points)\nLe triple d'un nombre augmenté de 5 est égal à ce nombre augmenté de 19.\n1. Traduire cette situation par une équation.\n2. Déterminer la valeur de ce nombre.\n",
      "solution": "## Corrigé détaillé\n\n### Exercice 1\n1. $3x + 7 = 22 \\implies 3x = 22 - 7 = 15 \\implies x = \\frac{15}{3} = 5$.\n2. $5x - 8 = -23 \\implies 5x = -23 + 8 = -15 \\implies x = \\frac{-15}{5} = -3$.\n3. $7x - 4x = 17 - 2 \\implies 3x = 15 \\implies x = 5$.\n\n### Exercice 2\n1. Soit $x$ le nombre cherché : $3x + 5 = x + 19$.\n2. $3x - x = 19 - 5 \\implies 2x = 14 \\implies x = 7$.\nLe nombre cherché est 7."
    }
  ]
};

// Fusion automatique dans les registres globaux
if (!window.MATHS_COURSES) window.MATHS_COURSES = {};
if (!window.MATHS_EXERCISES) window.MATHS_EXERCISES = {};
if (!window.MATHS_WORKSHEETS) window.MATHS_WORKSHEETS = {};

Object.assign(window.MATHS_COURSES, window.MATHS_COURSES_4E);
Object.assign(window.MATHS_EXERCISES, window.MATHS_EXERCISES_4E);
Object.assign(window.MATHS_WORKSHEETS, window.MATHS_WORKSHEETS_4E);
