// Fiches de cours de référence, définitions, formules, méthodes et flashcards pour les 19 chapitres de 3ème
// Conforme aux programmes officiels de l'Éducation nationale
window.MATHS_COURSES = Object.assign(window.MATHS_COURSES || {}, {
  "N1": {
    "title": "N1 : Ensemble de nombres et fractions",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Distinguer les entiers, les décimaux, les rationnels et les irrationnels. Complément (utile en seconde) : notations $\\mathbb{N}, \\mathbb{Z}, \\mathbb{D}, \\mathbb{Q}, \\mathbb{R}$.",
      "Définir un nombre irrationnel comme un nombre ne pouvant s'écrire sous forme de quotient $\\frac{a}{b}$.",
      "Maîtriser les 4 opérations sur les fractions avec des nombres relatifs.",
      "Respecter scrupuleusement les priorités opératoires et rendre les fractions irréductibles.",
      "Démontrer une propriété des fractions à partir de la définition du quotient et du calcul littéral."
    ],
    "keyPoints": [
      {
        "title": "1. Complément (utile en seconde) : les ensembles de nombres emboîtés",
        "content": "• **Entiers naturels $\\mathbb{N}$** : entiers positifs ($0, 1, 2, 42...$).\n• **Entiers relatifs $\\mathbb{Z}$** : entiers positifs et négatifs ($-7, -1, 0, 3...$).\n• **Nombres décimaux $\\mathbb{D}$** : nombres ayant un nombre fini de chiffres après la virgule, pouvant s'écrire sous la forme $\\frac{a}{10^n}$ (ex: $0{,}25 = \\frac{1}{4}$, mais $\\frac{1}{3} \\approx 0{,}333... \\notin \\mathbb{D}$).\n• **Nombres rationnels $\\mathbb{Q}$** : nombres pouvant s'écrire sous la forme d'un quotient $\\frac{a}{b}$ où $a \\in \\mathbb{Z}$ et $b \\in \\mathbb{Z}^*$ (ex: $\\frac{1}{3}, -\\frac{7}{11}$).\n• **Nombres réels $\\mathbb{R}$** : ensemble de tous les nombres (rationnels et irrationnels).\n$$\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{D} \\subset \\mathbb{Q} \\subset \\mathbb{R}$$"
      },
      {
        "title": "2. Les nombres irrationnels",
        "content": "Définition du cours : Un **nombre irrationnel** est un nombre qui **ne peut pas** s'écrire sous la forme d'un quotient $\\frac{a}{b}$ avec $a$ et $b$ entiers ($b \\neq 0$).\n*Exemples majeurs* :\n• $\\pi \\approx 3{,}14159...$\n• $\\sqrt{2} \\approx 1{,}4142...$ (la diagonale d'un carré de côté 1)\n• $\\sqrt{3}, \\sqrt{5}, \\sqrt{7}$... (racines carrées d'entiers qui ne sont pas des carrés parfaits)."
      },
      {
        "title": "3. Les 4 opérations sur les fractions de relatifs",
        "content": "• **Addition / Soustraction** : on réduit d'abord les fractions au **même dénominateur** (de préférence le plus petit multiple commun des dénominateurs), puis on additionne ou on soustrait les numérateurs ; le dénominateur commun ne change pas :\n$$\\frac{a}{d} + \\frac{b}{d} = \\frac{a+b}{d} \\qquad \\text{exemple : } \\frac{5}{6} - \\frac{3}{4} = \\frac{10}{12} - \\frac{9}{12} = \\frac{1}{12}$$\n• **Multiplication** : on multiplie les numérateurs entre eux et les dénominateurs entre eux, en décomposant pour simplifier **avant** de calculer :\n$$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$$\n• **Division** : diviser par une fraction non nulle revient à **multiplier par son inverse** :\n$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{ad}{bc}$$\n• **Signe d'une fraction** : $\\frac{-a}{b} = \\frac{a}{-b} = -\\frac{a}{b}$ et $\\frac{-a}{-b} = \\frac{a}{b}$."
      },
      {
        "title": "4. Fractions irréductibles et division par zéro",
        "content": "• Une fraction est **irréductible** lorsque son numérateur et son dénominateur n'ont aucun diviseur commun autre que 1 (on dit qu'ils sont **premiers entre eux**).\n• La division par 0 est strictement **impossible** : une fraction dont le dénominateur est nul n'a aucun sens mathématique."
      },
      {
        "title": "À retenir pour le brevet",
        "content": "• $\\pi$ et $\\sqrt{2}$ sont des nombres irrationnels : ils ne s'écrivent pas sous la forme d'un quotient d'entiers.\n• Addition et soustraction : même dénominateur d'abord. Multiplication : numérateurs entre eux, dénominateurs entre eux. Division : on multiplie par l'inverse.\n• On simplifie avant de multiplier et on donne le résultat sous forme irréductible.\n• Priorités : parenthèses, puissances, multiplications et divisions, puis additions et soustractions.\n\n**Automatismes (questions flash)** :\n• $\\frac{2}{3} + \\frac{1}{6} = \\;?$ → $\\frac{4}{6} + \\frac{1}{6} = \\frac{5}{6}$.\n• Inverse de $0{,}25$ ? → $4$, car $0{,}25 \\times 4 = 1$.\n• $\\frac{3}{4} \\div \\frac{1}{2} = \\;?$ → $\\frac{3}{4} \\times 2 = \\frac{3}{2}$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Enchaînement d'opérations fractionnaires complexes",
        "example": "Calculer $A = \\frac{7}{5} - \\frac{3}{5} \\div \\frac{9}{10}$ sous forme irréductible.",
        "steps": [
          "**Étape 1 (Priorités)** : La division est prioritaire sur la soustraction.",
          "**Étape 2 (Multiplier par l'inverse)** : $\\frac{3}{5} \\div \\frac{9}{10} = \\frac{3}{5} \\times \\frac{10}{9}$.",
          "**Étape 3 (Simplification préalable)** : $\\frac{3 \\times (5 \\times 2)}{5 \\times (3 \\times 3)} = \\frac{2}{3}$.",
          "**Étape 4 (Mise au même dénominateur)** : $A = \\frac{7}{5} - \\frac{2}{3} = \\frac{21}{15} - \\frac{10}{15} = \\frac{11}{15}$ (fraction irréductible)."
        ]
      },
      {
        "title": "Méthode : Calculer avec des fractions de signes différents",
        "example": "Calculer $B = -\\frac{3}{4} + \\frac{5}{6} \\times \\frac{-9}{10}$ et donner le résultat sous forme irréductible.",
        "steps": [
          "**Étape 1 (Priorités)** : la multiplication est prioritaire sur l'addition.",
          "**Étape 2 (Signe puis simplification du produit)** : un seul facteur négatif, donc le produit est négatif :\n$\\frac{5}{6} \\times \\frac{-9}{10} = -\\frac{5 \\times 9}{6 \\times 10} = -\\frac{5 \\times 3 \\times 3}{2 \\times 3 \\times 2 \\times 5} = -\\frac{3}{4}$.",
          "**Étape 3 (Addition, même dénominateur)** : $B = -\\frac{3}{4} + \\left(-\\frac{3}{4}\\right) = -\\frac{6}{4}$.",
          "**Étape 4 (Forme irréductible)** : $B = -\\frac{6}{4} = -\\frac{3}{2}$ (soit $-1{,}5$)."
        ]
      },
      {
        "title": "Méthode : Savoir si une fraction est un nombre décimal",
        "example": "Les nombres $\\frac{7}{40}$ et $\\frac{5}{12}$ sont-ils des nombres décimaux ?",
        "steps": [
          "**Étape 1 (Fraction irréductible)** : $7$ et $40$ n'ont pas de diviseur commun autre que 1 ; $5$ et $12$ non plus.",
          "**Étape 2 (Cas de $\\frac{7}{40}$)** : $40 = 2^3 \\times 5$. En multipliant par $5^2 = 25$, on obtient une puissance de 10 au dénominateur :\n$\\frac{7}{40} = \\frac{7 \\times 25}{40 \\times 25} = \\frac{175}{1\\,000} = 0{,}175$. C'est un **nombre décimal**.",
          "**Étape 3 (Cas de $\\frac{5}{12}$)** : $12 = 2^2 \\times 3$ contient le facteur premier 3 : aucune multiplication ne donnera $10$, $100$, $1\\,000$… au dénominateur. La division ne s'arrête pas : $\\frac{5}{12} = 0{,}41666\\dots$",
          "**Conclusion** : $\\frac{7}{40}$ est un nombre décimal, alors que $\\frac{5}{12}$ est un nombre rationnel non décimal.\n*Règle utile* : une fraction irréductible est décimale si et seulement si son dénominateur n'a pas d'autres facteurs premiers que 2 et 5."
        ]
      },
      {
        "title": "Méthode : Démontrer une propriété des fractions par le calcul littéral",
        "example": "Soit $a$, $b$ et $c$ trois nombres, avec $c \\neq 0$. Démontrer que $\\frac{a}{c} + \\frac{b}{c} = \\frac{a + b}{c}$.",
        "steps": [
          "**Étape 1 (Définition du quotient)** : $\\frac{a}{c}$ est le nombre qui, multiplié par $c$, donne $a$. Donc $c \\times \\frac{a}{c} = a$ et, de même, $c \\times \\frac{b}{c} = b$.",
          "**Étape 2 (Distributivité)** : $c \\times \\left(\\frac{a}{c} + \\frac{b}{c}\\right) = c \\times \\frac{a}{c} + c \\times \\frac{b}{c} = a + b$.",
          "**Étape 3 (Conclusion)** : le nombre $\\frac{a}{c} + \\frac{b}{c}$, multiplié par $c$, donne $a + b$. Par définition du quotient, ce nombre est $\\frac{a + b}{c}$.\n*Conséquence* : pour additionner deux fractions de même dénominateur, on additionne les numérateurs et on garde le dénominateur."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne jamais additionner les dénominateurs : $\\frac{1}{2} + \\frac{1}{3} = \\frac{5}{6}$ et NON $\\frac{2}{5}$ !",
      "⚠️ Ne pas confondre **opposé** ($-x$) et **inverse** ($\\frac{1}{x}$). L'inverse de $-\\frac{4}{7}$ est $-\\frac{7}{4}$.",
      "⚠️ Penser que $\\frac{1}{3}$ est un nombre décimal : $1 \\div 3 = 0{,}333...$, la division ne s'arrête jamais, donc $\\frac{1}{3}$ est un rationnel, mais pas un décimal.",
      "⚠️ Un nombre affiché avec beaucoup de décimales n'est pas forcément irrationnel : $\\frac{1}{7} = 0{,}142857142857\\dots$ est un rationnel (ses décimales se répètent)."
    ],
    "flashcards": [
      {
        "q": "Quelle est la règle pour diviser par une fraction non nulle ?",
        "a": "Diviser par une fraction revient à **multiplier par son inverse** :\n$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$$"
      },
      {
        "q": "Qu'est-ce qu'un nombre irrationnel ?",
        "a": "Un nombre qui **ne peut pas** s'écrire sous la forme d'un quotient $\\frac{a}{b}$ avec $a$ et $b$ entiers (ex: $\\pi, \\sqrt{2}$)."
      },
      {
        "q": "Un nombre décimal est-il toujours un nombre rationnel ?",
        "a": "Oui, car tout décimal peut s'écrire sous forme de fraction $\\frac{a}{10^n}$."
      },
      {
        "q": "Quel est l'inverse de $-\\frac{8}{3}$ ?",
        "a": "$-\\frac{3}{8}$ (l'inverse conserve le signe et échange numérateur et dénominateur)."
      },
      {
        "q": "Quelle est la condition obligatoire pour additionner deux fractions ?",
        "a": "Elles doivent impérativement être réduites au **même dénominateur** avant d'additionner les numérateurs."
      },
      {
        "q": "Calculer $\\frac{2}{3} + \\frac{1}{6}$.",
        "a": "$\\frac{4}{6} + \\frac{1}{6} = \\frac{5}{6}$ (on écrit $\\frac{2}{3}$ avec le dénominateur 6)."
      },
      {
        "q": "Le nombre $\\frac{3}{8}$ est-il décimal ?",
        "a": "Oui : $\\frac{3}{8} = \\frac{3 \\times 125}{8 \\times 125} = \\frac{375}{1\\,000} = 0{,}375$."
      }
    ]
  },
  "N2": {
    "title": "N2 : Calcul littéral et développement",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Maîtriser la distributivité simple $k(a+b) = ka+kb$ et la double distributivité $(a+b)(c+d) = ac+ad+bc+bd$.",
      "Comprendre que « Développer, c'est transformer un produit en somme algébrique ».",
      "Connaître et utiliser l'égalité $(a-b)(a+b) = a^2 - b^2$, et développer un carré en l'écrivant comme un produit.",
      "Savoir supprimer des parenthèses précédées d'un signe $+$ ou d'un signe $-$ et réduire une expression."
    ],
    "keyPoints": [
      {
        "title": "1. Distributivité simple et double : transformer un produit en somme",
        "content": "• **Développer**, c'est transformer un produit en somme ou en différence.\n• **Simple distributivité** : $k(a + b) = ka + kb$ et $k(a - b) = ka - kb$\n• **Double distributivité** : $(a + b)(c + d) = ac + ad + bc + bd$\n• **Règle des signes en produit** : $(+) \\times (+) = +$ ; $(-) \\times (-) = +$ ; $(+) \\times (-) = -$."
      },
      {
        "title": "2. Développer un carré et le produit $(a-b)(a+b)$",
        "content": "• **Un carré est un produit** : pour développer $(x+3)^2$, on l'écrit $(x+3)(x+3)$, puis on applique la double distributivité :\n$$(x+3)^2 = (x+3)(x+3) = x^2 + 3x + 3x + 9 = x^2 + 6x + 9$$\n• **Produit d'une somme par une différence** (à connaître) : pour tous nombres $a$ et $b$,\n$$(a - b)(a + b) = a^2 + ab - ab - b^2 = a^2 - b^2$$\n*Attention : en développant un carré, ne pas oublier les deux produits croisés : $(x+3)^2 \\neq x^2 + 9$.*"
      },
      {
        "title": "3. Suppression de parenthèses précédées de + ou -",
        "content": "• Précédées de $+$ : on retire les parenthèses sans rien modifier : $A + (B - C) = A + B - C$.\n• Précédées de $-$ : **on change TOUS les signes intérieurs** : $A - (B - C) = A - B + C$.\n• Si un produit est précédé d'un signe $-$ : développer d'abord le produit à l'intérieur de **crochets protecteurs**, puis distribuer le signe moins !"
      },
      {
        "title": "4. Réduction et simplification d'expressions littérales",
        "content": "• **Réduire**, c'est regrouper les termes de même nature : les termes en $x^2$ ensemble, les termes en $x$ ensemble, et les constantes ensemble.\n• Exemple : $3x^2 + 5x - 7 + 2x^2 - 8x + 4 = (3+2)x^2 + (5-8)x + (-7+4) = 5x^2 - 3x - 3$."
      },
      {
        "title": "5. Le rôle de la lettre : indéterminée, identité, inconnue",
        "content": "• Dans une expression comme $3x + 2$, la lettre $x$ désigne un nombre quelconque : c'est une **indéterminée**.\n• Une **identité** est une égalité vraie **pour toutes les valeurs** des lettres. Par exemple, $k(a + b) = ka + kb$ et $(x + 1)(x - 1) = x^2 - 1$ sont des identités : développer ou factoriser, c'est remplacer une expression par une autre qui lui est égale pour toute valeur de la lettre.\n• Dans une **équation** comme $2x + 1 = 7$, la lettre est une **inconnue** : l'égalité n'est vraie que pour certaines valeurs, les **solutions** (ici seulement pour $x = 3$).\n• Pour prouver qu'une égalité est une identité, on transforme un membre jusqu'à obtenir l'autre. Pour prouver qu'elle n'en est pas une, un seul contre-exemple suffit : $(x + 1)^2 = x^2 + 1$ est fausse pour $x = 1$, car $(1 + 1)^2 = 4$ et $1^2 + 1 = 2$."
      },
      {
        "title": "Complément (utile en seconde) : les formules des carrés",
        "content": "En développant comme dans la partie 2, on obtient, pour tous nombres $a$ et $b$ :\n$$(a + b)^2 = a^2 + 2ab + b^2$$\n$$(a - b)^2 = a^2 - 2ab + b^2$$\nEn 3e, ces deux formules ne sont pas à apprendre : la double distributivité suffit. Elles feront gagner du temps à partir de la seconde."
      },
      {
        "title": "À retenir pour le brevet",
        "content": "• Développer, c'est transformer un produit en somme : $k(a+b) = ka + kb$ et $(a+b)(c+d) = ac + ad + bc + bd$.\n• Un carré se développe en l'écrivant comme un produit : $(x+3)^2 = (x+3)(x+3)$, puis double distributivité. À connaître : $(a-b)(a+b) = a^2 - b^2$.\n• Un signe moins devant un produit : on développe d'abord le produit entre crochets, puis on change tous les signes.\n• Pour prouver qu'une égalité est vraie pour tout $x$, on développe ; un seul contre-exemple suffit pour prouver qu'elle est fausse.\n\n**Automatismes (questions flash)** :\n• Développer $(x+4)^2$ → $(x+4)(x+4) = x^2 + 4x + 4x + 16 = x^2 + 8x + 16$.\n• Calculer $99 \\times 101$ de tête → $(100-1)(100+1) = 10\\,000 - 1 = 9\\,999$.\n• Calculer $49 \\times 51$ de tête → $(50-1)(50+1) = 2\\,500 - 1 = 2\\,499$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Développer une expression complexe avec crochets protecteurs",
        "example": "Développer et réduire $E = (3x - 2)^2 - (2x + 1)(x - 4)$.",
        "steps": [
          "**Étape 1 (Écrire le carré comme un produit)** : $(3x - 2)^2 = (3x - 2)(3x - 2) = 9x^2 - 6x - 6x + 4 = 9x^2 - 12x + 4$.",
          "**Étape 2 (Double distributivité entre crochets)** : $(2x + 1)(x - 4) = [ 2x^2 - 8x + x - 4 ] = [ 2x^2 - 7x - 4 ]$.",
          "**Étape 3 (Distribuer le signe moins)** : $E = (9x^2 - 12x + 4) - [ 2x^2 - 7x - 4 ] = 9x^2 - 12x + 4 - 2x^2 + 7x + 4$.",
          "**Étape 4 (Réduction finale)** : $E = (9 - 2)x^2 + (-12 + 7)x + (4 + 4) = 7x^2 - 5x + 8$."
        ]
      },
      {
        "title": "Méthode : Démontrer une égalité « pour tout nombre $x$ »",
        "example": "Démontrer que, pour tout nombre $x$, $(x+3)^2 - (x-3)^2 = 12x$. En déduire la valeur de $103^2 - 97^2$ sans calculatrice.",
        "steps": [
          "**Étape 1 (Développer le premier carré)** : $(x+3)^2 = (x+3)(x+3) = x^2 + 3x + 3x + 9 = x^2 + 6x + 9$.",
          "**Étape 2 (Développer le second carré)** : $(x-3)^2 = (x-3)(x-3) = x^2 - 3x - 3x + 9 = x^2 - 6x + 9$.",
          "**Étape 3 (Soustraire en gardant les parenthèses)** :\n$(x^2 + 6x + 9) - (x^2 - 6x + 9) = x^2 + 6x + 9 - x^2 + 6x - 9 = 12x$.\nL'égalité est donc vraie pour tout nombre $x$.",
          "**Étape 4 (Application)** : avec $x = 100$, on a $x + 3 = 103$ et $x - 3 = 97$, donc $103^2 - 97^2 = 12 \\times 100 = 1\\,200$.\n*(Contrôle : $10\\,609 - 9\\,409 = 1\\,200$.)*"
        ]
      }
    ],
    "traps": [
      "⚠️ Oublier les produits croisés en développant un carré : $(x+3)^2 \\neq x^2 + 9$ ! On écrit $(x+3)(x+3) = x^2 + 3x + 3x + 9 = x^2 + 6x + 9$.",
      "⚠️ Dans $(2x)^2$, oublier d'élever le 2 au carré : $(2x)^2 = 4x^2$ et NON $2x^2$ !",
      "⚠️ Attention au signe $-$ devant un produit : $A - (x-1)(x+2) = A - [x^2 + x - 2] = A - x^2 - x + 2$.",
      "⚠️ Tester quelques valeurs ne prouve pas qu'une égalité est vraie pour tout $x$ : il faut développer. En revanche, un seul contre-exemple suffit à prouver qu'elle est fausse."
    ],
    "flashcards": [
      {
        "q": "Comment développer $(a + b)^2$ ?",
        "a": "On l'écrit comme un produit, puis on applique la double distributivité :\n$$(a + b)(a + b) = a^2 + ab + ab + b^2 = a^2 + 2ab + b^2$$\n*(Complément utile en seconde : la formule n'est pas à apprendre en 3e.)*"
      },
      {
        "q": "Quelle est la formule développée de $(a - b)(a + b)$ ?",
        "a": "$$(a - b)(a + b) = a^2 - b^2$$"
      },
      {
        "q": "Que donne le développement de $(2x - 3)^2$ ?",
        "a": "$$(2x - 3)(2x - 3) = 4x^2 - 6x - 6x + 9 = 4x^2 - 12x + 9$$"
      },
      {
        "q": "Que signifie « développer une expression » ?",
        "a": "C'est transformer un produit en une somme algébrique, par exemple $3(x + 2) = 3x + 6$."
      },
      {
        "q": "Que donne le développement de $(x - 5)^2$ ?",
        "a": "$$(x - 5)(x - 5) = x^2 - 5x - 5x + 25 = x^2 - 10x + 25$$"
      },
      {
        "q": "Développer $3x(2x - 5)$.",
        "a": "$3x \\times 2x - 3x \\times 5 = 6x^2 - 15x$."
      },
      {
        "q": "Calculer $49 \\times 51$ sans calculatrice.",
        "a": "$(50-1)(50+1) = 50^2 - 1^2 = 2\\,500 - 1 = 2\\,499$."
      }
    ]
  },
  "N2bis": {
    "title": "N2 bis : Calcul littéral et factorisation",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Comprendre que « Factoriser, c'est transformer une somme ou différence en produit (faire réapparaître des parenthèses) ».",
      "Savoir repérer et extraire un facteur commun évident (un nombre, la lettre $x$ ou un monôme $kx$).",
      "Connaître par cœur l'identité remarquable $a^2 - b^2 = (a-b)(a+b)$ pour factoriser une différence de deux carrés.",
      "S'entraîner à la factorisation par un facteur commun parenthèse $(ax+b)$, dans des cas simples.",
      "Aller au bout d'une factorisation : aucun facteur ne doit pouvoir être encore factorisé."
    ],
    "keyPoints": [
      {
        "title": "1. Qu'est-ce que factoriser ? « Faire réapparaître les parenthèses »",
        "content": "• **Factoriser**, c'est transformer une somme ou une différence en un produit de facteurs.\n• C'est l'opération inverse du développement.\n• Exemple : $6x + 15 = 3(2x + 5)$ ; à gauche la forme développée, à droite la forme factorisée."
      },
      {
        "title": "2. Méthode 1 : Recherche d'un facteur commun évident",
        "content": "• **Facteur numérique** : $12x - 8 = 4 \\times 3x - 4 \\times 2 = 4(3x - 2)$.\n• **Facteur en $x$** : $x^2 + 5x = x \\times x + x \\times 5 = x(x + 5)$.\n• **Facteur monôme $kx$** : $15x^2 - 10x = 5x \\times 3x - 5x \\times 2 = 5x(3x - 2)$.\n• **Règle d'or du 1** : $7x + 7 = 7(x + 1)$ (ne JAMAIS oublier le $+1$ !)."
      },
      {
        "title": "3. Méthode 2 : L'identité remarquable $a^2 - b^2$ (Différence de deux carrés)",
        "content": "Pour tous nombres $a$ et $b$ :\n$$a^2 - b^2 = (a - b)(a + b)$$\n• Ex 1 : $x^2 - 49 = x^2 - 7^2 = (x - 7)(x + 7)$.\n• Ex 2 : $9x^2 - 16 = (3x)^2 - 4^2 = (3x - 4)(3x + 4)$.\n• Ex 3 : $4x^2 - 25 = (2x)^2 - 5^2 = (2x - 5)(2x + 5)$."
      },
      {
        "title": "4. Méthode 3 : Facteur commun parenthèse",
        "content": "• Structure : $A = (ax+b)(cx+d) + (ax+b)(ex+f) = (ax+b)[(cx+d)+(ex+f)]$.\n• On souligne le bloc commun $(ax+b)$, on le place devant et on rassemble tout le reste dans des **crochets**.\n• Attention si le deuxième terme est soustrait : distribuer le signe moins dans les crochets !"
      },
      {
        "title": "À retenir pour le brevet",
        "content": "• Factoriser, c'est transformer une somme en produit ; c'est l'inverse de développer.\n• On cherche d'abord un facteur commun (un nombre, $x$, ou une parenthèse entière).\n• Sinon, on cherche une différence de deux carrés : $a^2 - b^2 = (a-b)(a+b)$.\n• Une factorisation est complète quand aucun facteur ne peut encore être factorisé : $(2x - 2)(2x + 4)$ se termine en $4(x - 1)(x + 2)$.\n• On vérifie toujours une factorisation en la redéveloppant.\n• Factoriser permet de résoudre une équation grâce à la propriété du produit nul.\n\n**Automatismes (questions flash)** :\n• Factoriser $x^2 - 64$ → $(x-8)(x+8)$.\n• Factoriser $6x^2 + 9x$ → $3x(2x+3)$.\n• Factoriser $7x - 7$ → $7(x-1)$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Factoriser avec un facteur commun parenthèse",
        "example": "Factoriser $F = (2x - 3)(4x + 1) - (2x - 3)(x - 2)$.",
        "steps": [
          "**Étape 1 (Souligner le facteur commun)** : $(2x - 3)$ est présent dans les deux blocs.",
          "**Étape 2 (Mettre en facteur devant des crochets)** : $F = (2x - 3) [ (4x + 1) - (x - 2) ]$.",
          "**Étape 3 (Supprimer les parenthèses intérieures)** : Le signe moins inverse les signes : $F = (2x - 3) [ 4x + 1 - x + 2 ]$.",
          "**Étape 4 (Réduire les crochets)** : $4x - x = 3x$ et $1 + 2 = 3$. D'où : $F = (2x - 3)(3x + 3)$.",
          "**Étape 5 (Factorisation maximale)** : Comme $3x + 3 = 3(x + 1)$, le résultat final est : $F = 3(2x - 3)(x + 1)$."
        ]
      },
      {
        "title": "Méthode : Factoriser avec $a^2 - b^2$ pour résoudre une équation",
        "example": "Factoriser $E = (2x+1)^2 - 9$, puis résoudre l'équation $E = 0$.",
        "steps": [
          "**Étape 1 (Reconnaître une différence de deux carrés)** : $9 = 3^2$, donc $E = (2x+1)^2 - 3^2$ est de la forme $a^2 - b^2$ avec $a = 2x+1$ et $b = 3$.",
          "**Étape 2 (Appliquer l'identité)** : $E = (2x + 1 - 3)(2x + 1 + 3) = (2x - 2)(2x + 4)$.",
          "**Étape 3 (Factorisation complète)** : on n'oublie pas cette étape, car chaque facteur contient encore un nombre en facteur. $2x - 2 = 2(x-1)$ et $2x + 4 = 2(x+2)$, donc $E = 4(x-1)(x+2)$.",
          "**Étape 4 (Équation produit nul)** : $E = 0 \\iff x - 1 = 0$ ou $x + 2 = 0 \\iff x = 1$ ou $x = -2$.",
          "**Étape 5 (Vérification)** : pour $x = 1$ : $3^2 - 9 = 0$ ; pour $x = -2$ : $(-3)^2 - 9 = 0$. Les solutions sont $-2$ et $1$."
        ]
      }
    ],
    "traps": [
      "⚠️ Oublier le 1 lors de la factorisation : $5x + 5 = 5(x + 1)$ et NON $5x$ !",
      "⚠️ Confondre $a^2 - b^2$ et $(a - b)^2$ : $a^2 - b^2 = (a-b)(a+b)$, alors que $(a-b)^2 = (a-b)(a-b)$.",
      "⚠️ Signe « - » devant la deuxième parenthèse : $(x+1)(2x+3) - (x+1)(x-4) = (x+1)[(2x+3) - (x-4)] = (x+1)(2x+3-x+4) = (x+1)(x+7)$.",
      "⚠️ Une factorisation se vérifie en redéveloppant : $4(x-1)(x+2) = 4(x^2 + x - 2) = 4x^2 + 4x - 8$, qui est bien égal à $(2x+1)^2 - 9 = 4x^2 + 4x + 1 - 9$."
    ],
    "flashcards": [
      {
        "q": "Que signifie « factoriser une expression » ?",
        "a": "C'est transformer une somme ou une différence en un **produit de facteurs** (« faire réapparaître les parenthèses »)."
      },
      {
        "q": "Quelle est la formule de factorisation de $a^2 - b^2$ ?",
        "a": "$$a^2 - b^2 = (a - b)(a + b)$$"
      },
      {
        "q": "Comment factorise-t-on $9x^2 - 16$ ?",
        "a": "$$(3x - 4)(3x + 4) \\quad (\\text{car } (3x)^2 - 4^2)$$"
      },
      {
        "q": "Quelle est la factorisation de $15x^2 - 10x$ par son facteur commun maximal ?",
        "a": "$$5x(3x - 2)$$"
      },
      {
        "q": "Que vaut la factorisation de $4x + 4$ ?",
        "a": "$$4(x + 1)$$\n*(Attention à ne jamais oublier le $+1$ !)*"
      },
      {
        "q": "Factoriser $x^2 - 64$.",
        "a": "$x^2 - 8^2 = (x-8)(x+8)$."
      },
      {
        "q": "Résoudre $x^2 - 49 = 0$ en factorisant.",
        "a": "$(x-7)(x+7) = 0$, donc $x = 7$ ou $x = -7$."
      }
    ]
  },
  "N3": {
    "title": "N3 : Puissances et Notation scientifique",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Connaître la définition de $a^n$ pour $n$ entier relatif et retrouver, en écrivant les facteurs, les produits et quotients de puissances de même base.",
      "Maîtriser les puissances de 10, l'écriture décimale et le calcul fractionnaire associé.",
      "Écrire un nombre en notation scientifique normalisée $a \\times 10^n$ avec $a$ décimal, $1 \\le a < 10$ (au signe près).",
      "Connaître les préfixes métriques (de nano à giga) et déterminer des ordres de grandeur. Complément : le préfixe téra."
    ],
    "keyPoints": [
      {
        "title": "1. Définition d'une puissance",
        "content": "Soit $a$ un nombre et $n$ un entier supérieur ou égal à $2$.\n• $a^n$ est le **produit de $n$ facteurs égaux à $a$** : $a^n = a \\times a \\times \\dots \\times a$. Par convention, $a^1 = a$.\n• Pour $a \\neq 0$ et $n$ entier positif : $a^{-n} = \\frac{1}{a^n}$ (c'est l'inverse de $a^n$) et $a^0 = 1$.\n*Exemples* : $2^3 = 2 \\times 2 \\times 2 = 8$ ; $(-3)^2 = (-3) \\times (-3) = 9$ ; $5^{-2} = \\frac{1}{5^2} = \\frac{1}{25} = 0{,}04$."
      },
      {
        "title": "2. Retrouver les calculs en écrivant les facteurs",
        "content": "Pas de formule à apprendre : on écrit les facteurs, puis on les compte.\n• **Produit de puissances de même base** : $2^3 \\times 2^2 = (2 \\times 2 \\times 2) \\times (2 \\times 2) = 2^5$ : il y a $3 + 2 = 5$ facteurs.\n• **Quotient de puissances de même base** : $\\frac{2^5}{2^2} = \\frac{2 \\times 2 \\times 2 \\times 2 \\times 2}{2 \\times 2} = 2^3$ : on simplifie $2$ facteurs, il en reste $3$.\n• **S'il y a plus de facteurs au dénominateur** : $\\frac{2^2}{2^5} = \\frac{2 \\times 2}{2 \\times 2 \\times 2 \\times 2 \\times 2} = \\frac{1}{2^3} = 2^{-3}$.\n• **Puissance d'une puissance** : $(2^3)^2 = 2^3 \\times 2^3 = 2^6$ : il y a $3 + 3 = 6$ facteurs.\n• **Même exposant, bases différentes** : $2^3 \\times 5^3 = (2 \\times 5) \\times (2 \\times 5) \\times (2 \\times 5) = 10^3$."
      },
      {
        "title": "3. Puissances de 10 et décalage de virgule",
        "content": "• $10^n = 100\\dots0$ ($n$ zéros) | $10^{-n} = 0{,}00\\dots01$ ($n$ zéros au total).\n• On compte les facteurs $10$ : $10^3 \\times 10^2 = 10^5$, $\\frac{10^5}{10^2} = 10^3$ et $10^3 \\times 10^{-5} = \\frac{10^3}{10^5} = \\frac{1}{10^2} = 10^{-2}$.\n• Multiplier par $10^n$ décale la virgule de $n$ rangs vers la droite.\n• Multiplier par $10^{-n}$ décale la virgule de $n$ rangs vers la gauche."
      },
      {
        "title": "4. Notation scientifique",
        "content": "Tout nombre décimal non nul s'écrit de façon unique sous la forme :\n$$a \\times 10^n \\quad \\text{avec } a \\text{ décimal, } 1 \\le a < 10 \\text{ (au signe près) et } n \\text{ entier relatif}$$\nAutrement dit, $a$ a **un seul chiffre non nul avant la virgule** (et il garde le signe du nombre).\n*Exemples* :\n• $543\\,000 = 5{,}43 \\times 10^5$\n• $0{,}000\\,72 = 7{,}2 \\times 10^{-4}$\n• $-0{,}003\\,6 = -3{,}6 \\times 10^{-3}$\n• Si le nombre (sans son signe) vaut au moins $10$, l'exposant est positif ; s'il est compris entre $0$ et $1$, l'exposant est négatif."
      },
      {
        "title": "5. Préfixes métriques et ordres de grandeur",
        "content": "• Giga (G) = $10^9$ | Méga (M) = $10^6$ | Kilo (k) = $10^3$\n• milli (m) = $10^{-3}$ | micro ($\\mu$) = $10^{-6}$ | nano (n) = $10^{-9}$\n• Complément (utile en informatique) : téra (T) = $10^{12}$.\n\n**Ordre de grandeur.** Un ordre de grandeur est une valeur simple, proche du nombre, qui sert à estimer ou à comparer. On peut l'exprimer par une puissance de $10$ : on part de l'écriture scientifique $a \\times 10^n$ et on remplace $a$ par $1$ si $a < 5$, par $10$ si $a \\geq 5$.\n*Exemple* : $7{,}6 \\times 10^7$ est **de l'ordre de** $10^8$, car $7{,}6 \\geq 5$. Ce n'est pas une égalité : $10^8$ vaut $100$ millions, alors que $7{,}6 \\times 10^7$ vaut $76$ millions."
      },
      {
        "title": "Pour aller plus loin : les formules générales sur les puissances",
        "content": "Ces formules ne sont pas à connaître en 3e : ce sont les calculs de la section 2, écrits avec des lettres. Elles serviront au lycée.\nPour tous nombres non nuls $a, b$ et entiers relatifs $n, m$ :\n• $a^n \\times a^m = a^{n+m}$\n• $\\frac{a^n}{a^m} = a^{n-m}$\n• $(a^n)^m = a^{n \\times m}$\n• $(a \\times b)^n = a^n \\times b^n$ et $\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$"
      },
      {
        "title": "À retenir pour le brevet",
        "content": "• $a^n$ est le produit de $n$ facteurs égaux à $a$. Pour un produit ou un quotient de puissances de même base, on écrit les facteurs et on les compte.\n• $a^0 = 1$ et $a^{-n} = \\frac{1}{a^n}$ ($a \\neq 0$) ; $10^{-n}$ est un nombre positif.\n• Notation scientifique : $a \\times 10^n$ avec $1 \\le a < 10$ (au signe près).\n• Préfixes : k $= 10^3$, M $= 10^6$, G $= 10^9$ ; m $= 10^{-3}$, µ $= 10^{-6}$, n $= 10^{-9}$.\n\n**Automatismes (questions flash)** :\n• $10^3 \\times 10^{-5} = \\;?$ → $10^{-2}$.\n• Notation scientifique de $0{,}047$ → $4{,}7 \\times 10^{-3}$.\n• $2^3 \\times 5^3 = \\;?$ → $8 \\times 125 = 1\\,000$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calcul de fraction avec puissances de 10",
        "example": "Calculer $C = \\frac{4 \\times 10^{-2} \\times 9 \\times 10^6}{6 \\times 10^3}$ et donner l'écriture scientifique.",
        "steps": [
          "**Étape 1 (Séparation)** : On sépare les coefficients numériques et les puissances de 10 :\n$C = \\frac{4 \\times 9}{6} \\times \\frac{10^{-2} \\times 10^6}{10^3}$.",
          "**Étape 2 (Calcul des nombres)** : $\\frac{36}{6} = 6$.",
          "**Étape 3 (Puissances de 10)** : $10^{-2} \\times 10^6 = \\frac{10^6}{10^2} = 10^4$, puis $\\frac{10^4}{10^3} = 10^1$.",
          "**Étape 4 (Résultat scientifique)** : $C = 6 \\times 10^1 = 60$."
        ]
      },
      {
        "title": "Méthode : Simplifier en écrivant et en comptant les facteurs",
        "example": "Écrire sous la forme d'une seule puissance, puis en écriture décimale : $A = \\frac{2^5 \\times 2^{-3}}{2^4}$ et $B = (10^{-2})^3 \\times 10^4$.",
        "steps": [
          "**Pour $A$ (on fait passer l'exposant négatif au dénominateur)** : $2^{-3} = \\frac{1}{2^3}$, donc $A = \\frac{2^5}{2^3 \\times 2^4} = \\frac{2^5}{2^7}$. On simplifie $5$ facteurs $2$ : il en reste $2$ au dénominateur, donc $A = \\frac{1}{2^2} = 2^{-2}$.",
          "**Valeur de $A$** : $2^{-2} = \\frac{1}{2^2} = \\frac{1}{4} = 0{,}25$.",
          "**Pour $B$ (puissance de puissance puis produit)** : $(10^{-2})^3 = 10^{-2} \\times 10^{-2} \\times 10^{-2} = \\frac{1}{10^2 \\times 10^2 \\times 10^2} = \\frac{1}{10^6} = 10^{-6}$, puis $10^{-6} \\times 10^4 = \\frac{10^4}{10^6} = \\frac{1}{10^2} = 10^{-2}$.",
          "**Valeur de $B$** : $10^{-2} = 0{,}01$."
        ]
      },
      {
        "title": "Méthode : Utiliser les préfixes et estimer un ordre de grandeur",
        "example": "a) Un virus mesure 120 nm. Donner sa taille en mètres, en notation scientifique.\nb) Une clé USB de 2 Go (gigaoctets) stocke des photos de 4 Mo (mégaoctets) chacune. Combien de photos peut-elle contenir ?\nc) La Terre compte environ $8{,}2$ milliards d'habitants. Donner un ordre de grandeur de ce nombre.",
        "steps": [
          "**a) Remplacer le préfixe** : nano $= 10^{-9}$, donc $120 \\text{ nm} = 120 \\times 10^{-9} \\text{ m}$.",
          "**a) Normaliser** : $120 = 1{,}2 \\times 10^2$, donc $120 \\times 10^{-9} = 1{,}2 \\times 10^2 \\times 10^{-9} = 1{,}2 \\times 10^{-7}$ m.",
          "**b) Convertir** : $2 \\text{ Go} = 2 \\times 10^{9}$ octets et $4 \\text{ Mo} = 4 \\times 10^6$ octets.",
          "**b) Diviser** : $\\frac{2 \\times 10^{9}}{4 \\times 10^6} = \\frac{2}{4} \\times \\frac{10^9}{10^6} = 0{,}5 \\times 10^3 = 500$.\nLa clé peut contenir environ **500 photos**.",
          "**c) Écriture scientifique** : $8{,}2$ milliards $= 8{,}2 \\times 10^9$.",
          "**c) Ordre de grandeur** : comme $8{,}2 \\geq 5$, on remplace $8{,}2$ par $10$. La population de la Terre est **de l'ordre de** $10 \\times 10^9 = 10^{10}$ habitants."
        ]
      }
    ],
    "traps": [
      "⚠️ Attention aux parenthèses : $(-3)^2 = +9$, mais $-3^2 = -9$ !",
      "⚠️ $12 \\times 10^4$ n'est PAS en notation scientifique car $12 \\ge 10$ : il faut écrire $1{,}2 \\times 10^5$.",
      "⚠️ $a^n + a^m$ ne peut PAS se simplifier en additionnant les exposants : $2^3 + 2^2 = 8 + 4 = 12 \\neq 2^5 = 32$ !",
      "⚠️ Ne pas confondre : $2^3 \\times 2^2$ contient $3 + 2 = 5$ facteurs, soit $2^5$, alors que $(2^3)^2 = 2^3 \\times 2^3$ contient $3 + 3 = 6$ facteurs, soit $2^6$."
    ],
    "flashcards": [
      {
        "q": "Que signifie $a^n$, pour $n$ entier supérieur ou égal à $2$ ?",
        "a": "$$a^n = a \\times a \\times \\dots \\times a$$\n*(C'est le produit de $n$ facteurs égaux à $a$.)*"
      },
      {
        "q": "Que vaut $a^{-n}$ pour $a \\neq 0$ ?",
        "a": "$$a^{-n} = \\frac{1}{a^n}$$\n*(C'est l'inverse de $a^n$)*."
      },
      {
        "q": "Quelle est la condition sur $a$ pour l'écriture scientifique $a \\times 10^n$ ?",
        "a": "$$1 \\le a < 10$$\n*(au signe près : un seul chiffre non nul avant la virgule)*."
      },
      {
        "q": "Simplifier $\\frac{10^7}{10^{-3}}$.",
        "a": "$$\\frac{10^7}{10^{-3}} = 10^7 \\times 10^3 = 10^{10}$$\n*(Diviser par $10^{-3}$, c'est multiplier par $10^3$.)*"
      },
      {
        "q": "Combien vaut $4^{-1}$ sous forme décimale ?",
        "a": "$\\frac{1}{4} = 0{,}25$."
      },
      {
        "q": "Écrire $-0{,}003\\,6$ en notation scientifique.",
        "a": "$-3{,}6 \\times 10^{-3}$ (le signe est conservé et $1 \\le 3{,}6 < 10$)."
      },
      {
        "q": "Combien y a-t-il de nanomètres dans 1 mm ?",
        "a": "$1 \\text{ mm} = 10^{-3}$ m et $1 \\text{ nm} = 10^{-9}$ m, donc $\\frac{10^{-3}}{10^{-9}} = 10^6$ : un million de nanomètres."
      }
    ]
  },
  "N4": {
    "title": "N4 : Résolution d'équations",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Résoudre une équation linéaire du premier degré $ax + b = cx + d$.",
      "Énoncer et appliquer le théorème de l'équation produit-nul $(ax + b)(cx + d) = 0$.",
      "Résoudre les équations du type $x^2 = a$ selon le signe de $a$.",
      "Complément (utile en seconde) : résoudre une inéquation du premier degré en changeant le sens quand on multiplie ou divise par un nombre négatif.",
      "Mettre un problème en équation et conclure."
    ],
    "keyPoints": [
      {
        "title": "1. Résolution d'équation du premier degré : ax + b = cx + d",
        "content": "• On **ajoute ou on soustrait un même nombre, ou un même terme en $x$, aux deux membres** pour regrouper les termes en $x$ d'un côté et les nombres de l'autre :\n$$ax + b = cx + d \\iff ax - cx = d - b \\iff (a - c)x = d - b$$\n• Si $a \\neq c$, on divise les deux membres par $a - c$ : $x = \\frac{d - b}{a - c}$.\n• Si $a = c$, les termes en $x$ s'annulent et l'équation revient à $b = d$ : tout nombre est solution si $b = d$, aucun nombre n'est solution si $b \\neq d$.\n• Dans une équation, la lettre est une **inconnue** : l'égalité n'est vraie que pour certaines valeurs, les **solutions**. À ne pas confondre avec une **identité**, vraie pour toutes les valeurs (voir le chapitre de développement).\n• On vérifie toujours sa solution en la réinjectant dans l'équation d'origine."
      },
      {
        "title": "2. Théorème de l'équation produit-nul",
        "content": "**Propriété d'or du cours** : « Un produit de facteurs est nul **si et seulement si** l'un au moins de ses facteurs est nul » :\n$$(ax + b)(cx + d) = 0 \\iff ax + b = 0 \\quad \\text{ou} \\quad cx + d = 0$$\nSi $a \\neq 0$ et $c \\neq 0$, l'équation admet donc au plus deux solutions : $x = -\\frac{b}{a}$ ou $x = -\\frac{d}{c}$ (ces deux nombres peuvent être égaux)."
      },
      {
        "title": "3. Équations du type $x^2 = a$",
        "content": "Selon le signe du nombre $a$ :\n• **Si $a > 0$** : l'équation admet **DEUX solutions** : $x = \\sqrt{a}$ ou $x = -\\sqrt{a}$.\n• **Si $a = 0$** : l'équation admet **UNE unique solution** : $x = 0$.\n• **Si $a < 0$** : l'équation n'admet **AUCUNE solution** (car un carré est toujours positif ou nul)."
      },
      {
        "title": "4. Complément (utile en seconde) : inéquations et changement de sens",
        "content": "*Les inéquations ne figurent plus au programme du collège ; ce paragraphe prépare la seconde.*\nOn résout une inéquation comme une équation, avec **une règle capitale** :\nquand on multiplie ou divise les deux membres par un **nombre strictement négatif**, on **change le sens de l'inégalité** :\n$$-3x \\le 12 \\iff x \\ge \\frac{12}{-3} \\iff x \\ge -4$$\nLes solutions forment un intervalle : ici $[-4 ; +\\infty[$."
      },
      {
        "title": "À retenir pour le brevet",
        "content": "• Pour résoudre $ax + b = cx + d$ avec $a \\neq c$ : ajouter ou soustraire le même terme aux deux membres pour regrouper les $x$ d'un côté et les nombres de l'autre, puis diviser les deux membres par le coefficient de $x$.\n• Produit nul : $A \\times B = 0 \\iff A = 0$ ou $B = 0$.\n• $x^2 = a$ : deux solutions $\\sqrt{a}$ et $-\\sqrt{a}$ si $a > 0$, une seule ($0$) si $a = 0$, aucune si $a < 0$.\n• Dans un problème : inconnue, équation, résolution, vérification, phrase de conclusion avec l'unité.\n\n**Automatismes (questions flash)** :\n• Résoudre $3x - 7 = 8$ → $3x = 15$, donc $x = 5$.\n• Résoudre $x^2 = 36$ → $x = 6$ ou $x = -6$.\n• $-2$ est-il solution de $x^2 + 3x + 2 = 0$ ? → oui : $4 - 6 + 2 = 0$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Résoudre une équation produit-nul rédigée",
        "example": "Résoudre $(2x - 5)(3x + 12) = 0$.",
        "steps": [
          "**Étape 1 (Énoncé de la propriété)** : Un produit de facteurs est nul si et seulement si l'un au moins de ses facteurs est nul.",
          "**Étape 2 (Séparation)** : $2x - 5 = 0$ ou $3x + 12 = 0$.",
          "**Étape 3 (Résolution)** :\n• $2x = 5 \\implies x = \\frac{5}{2} = 2{,}5$.\n• $3x = -12 \\implies x = \\frac{-12}{3} = -4$.",
          "**Étape 4 (Conclusion)** : Les solutions de l'équation sont $-4$ et $2{,}5$ (noté $S = \\{-4 ; 2{,}5\\}$)."
        ]
      },
      {
        "title": "Méthode : Mettre un problème en équation",
        "example": "Un cinéma propose deux tarifs. Tarif A : abonnement de 20 € puis 5 € par séance. Tarif B : 9 € par séance, sans abonnement. Pour combien de séances les deux tarifs coûtent-ils le même prix ?",
        "steps": [
          "**Étape 1 (Choisir l'inconnue)** : on note $x$ le nombre de séances.",
          "**Étape 2 (Traduire l'énoncé)** : tarif A : $20 + 5x$ ; tarif B : $9x$. On cherche $x$ tel que $20 + 5x = 9x$.",
          "**Étape 3 (Résoudre)** : $20 = 9x - 5x$, soit $20 = 4x$, donc $x = \\frac{20}{4} = 5$.",
          "**Étape 4 (Vérifier)** : tarif A : $20 + 5 \\times 5 = 45$ ; tarif B : $9 \\times 5 = 45$. Les deux coûts sont égaux.",
          "**Étape 5 (Conclure par une phrase)** : les deux tarifs coûtent 45 € pour 5 séances. Au-delà, le tarif A est plus avantageux (pour 6 séances : 50 € contre 54 €)."
        ]
      },
      {
        "title": "Méthode : Résoudre une équation du type $x^2 = a$",
        "example": "Résoudre $2x^2 - 18 = 0$, puis calculer le côté d'un carré d'aire $50 \\text{ cm}^2$.",
        "steps": [
          "**Étape 1 (Isoler $x^2$)** : $2x^2 = 18$, donc $x^2 = \\frac{18}{2} = 9$.",
          "**Étape 2 (Signe de $a$)** : $9 > 0$, l'équation a deux solutions : $x = \\sqrt{9} = 3$ ou $x = -\\sqrt{9} = -3$.\nVérification : $2 \\times 3^2 - 18 = 0$ et $2 \\times (-3)^2 - 18 = 0$.",
          "**Étape 3 (Problème du carré)** : si $c$ est le côté en cm, $c^2 = 50$, donc $c = \\sqrt{50}$ ou $c = -\\sqrt{50}$.",
          "**Étape 4 (Interpréter)** : une longueur est positive, on garde $c = \\sqrt{50} \\approx 7{,}1$ cm (valeur exacte $\\sqrt{50}$ cm)."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour $x^2 = 25$, oublier la solution négative : les solutions sont $5$ ET $-5$ !",
      "⚠️ Diviser par $x$ pour « simplifier » une équation comme $x(2x-3) = 0$ : cela élimine illégalement la solution $x = 0$ !",
      "⚠️ Complément (inéquations, utile en seconde) : oublier d'inverser le sens de l'inégalité lorsqu'on divise par un nombre négatif.",
      "⚠️ Dans un problème, garder une solution négative alors que l'inconnue est une longueur ou un nombre d'objets, ou oublier la phrase de conclusion avec l'unité."
    ],
    "flashcards": [
      {
        "q": "Quelle est la propriété de l'équation produit-nul ?",
        "a": "Un produit de facteurs est nul si et seulement si **au moins l'un de ses facteurs est nul** :\n$$A \\times B = 0 \\iff A = 0 \\text{ ou } B = 0$$"
      },
      {
        "q": "Quelles sont les solutions de l'équation $x^2 = 49$ ?",
        "a": "Deux solutions : **$7$** et **$-7$** (car $7^2 = 49$ et $(-7)^2 = 49$)."
      },
      {
        "q": "Combien de solutions admet l'équation $x^2 = -9$ ?",
        "a": "**Aucune solution**, car le carré d'un nombre est toujours positif ou nul."
      },
      {
        "q": "Complément (utile en seconde) : que devient l'inégalité $-2x < 6$ quand on isole $x$ ?",
        "a": "$$x > -3$$\n*(On change le sens $<$ en $>$ car on divise par le nombre négatif $-2$)*."
      },
      {
        "q": "Quelles sont les solutions de $(x - 3)(2x + 8) = 0$ ?",
        "a": "$x = 3$ ou $x = -4$."
      },
      {
        "q": "Le nombre $2$ est-il solution de $3x - 1 = x + 3$ ?",
        "a": "Oui : à gauche $3 \\times 2 - 1 = 5$, à droite $2 + 3 = 5$."
      },
      {
        "q": "Résoudre $5x + 2 = 3x - 6$.",
        "a": "$5x - 3x = -6 - 2$, soit $2x = -8$, donc $x = -4$."
      }
    ]
  },
  "N5": {
    "title": "N5 : Arithmétique et Nombres premiers",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Utiliser les critères de divisibilité par 2, 3, 5, 9, 10.",
      "Définir un nombre premier et réciter la liste des premiers inférieurs à 30.",
      "Décomposer un entier naturel en produit de facteurs premiers.",
      "Rendre une fraction irréductible par décomposition en facteurs premiers ou division par un diviseur commun.",
      "Résoudre des problèmes de partage (diviseurs communs) et de rendez-vous ou d'engrenages (multiples communs)."
    ],
    "keyPoints": [
      {
        "title": "1. Multiples, diviseurs et critères de divisibilité",
        "content": "• Un entier $a$ est divisible par $b$ s'il existe un entier $c$ tel que $a = b \\times c$ (le reste de la division euclidienne est 0).\n• **Critères de divisibilité** :\n  - par 2 : chiffre des unités pair (0, 2, 4, 6, 8)\n  - par 3 : la **somme des chiffres** est un multiple de 3\n  - par 5 : chiffre des unités 0 ou 5\n  - par 9 : la **somme des chiffres** est un multiple de 9\n  - par 10 : chiffre des unités 0."
      },
      {
        "title": "2. Nombres premiers",
        "content": "Un nombre entier naturel est **premier** s'il possède **exactement deux diviseurs distincts : 1 et lui-même**.\n• **0 et 1 ne sont PAS des nombres premiers** (1 n'a qu'un seul diviseur, lui-même).\n• **2 est le seul nombre premier pair**.\n• **La liste des nombres premiers $< 30$** : $$2, 3, 5, 7, 11, 13, 17, 19, 23, 29$$"
      },
      {
        "title": "3. Décomposition en produit de facteurs premiers",
        "content": "Tout entier $\\ge 2$ se décompose de façon unique en un produit de facteurs premiers.\n*Méthode par divisions successives* :\n$$84 \\div 2 = 42 \\quad 42 \\div 2 = 21 \\quad 21 \\div 3 = 7 \\quad 7 \\div 7 = 1$$\nDonc : $$84 = 2^2 \\times 3 \\times 7$$\n$$147 = 3 \\times 7^2$$"
      },
      {
        "title": "4. Diviseurs communs, multiples communs et fractions irréductibles",
        "content": "• **Plus grand diviseur commun** : pour trouver le plus grand nombre qui divise à la fois deux entiers, on peut lister leurs diviseurs, ou s'aider de leurs décompositions en repérant les facteurs premiers communs. Comme $84 = 2 \\times 2 \\times 3 \\times 7$ et $147 = 3 \\times 7 \\times 7$, les facteurs communs sont $3$ et $7$ : le plus grand diviseur commun de $84$ et $147$ est $3 \\times 7 = 21$.\n• **Fraction irréductible** : on divise le numérateur et le dénominateur par un diviseur commun, jusqu'à ce qu'il n'en reste plus d'autre que 1. En divisant par le plus grand diviseur commun, on y arrive en une seule étape : $\\frac{84}{147} = \\frac{21 \\times 4}{21 \\times 7} = \\frac{4}{7}$.\n• **Problème de partage** : on répartit sans reste 84 sucettes et 147 bonbons dans le plus grand nombre possible de sachets identiques. Le nombre de sachets doit diviser 84 et 147 : on prend leur plus grand diviseur commun, soit 21 sachets, contenant chacun 4 sucettes et 7 bonbons.\n• **Multiple commun** : quand des phénomènes répétitifs « se retrouvent » (engrenages, feux, bus), on cherche le plus petit multiple commun. On écrit les multiples du plus grand des deux nombres jusqu'à en trouver un qui soit aussi multiple de l'autre.\n• *Exemple (engrenages)* : une roue de 12 dents entraîne une roue de 18 dents. Les multiples de 18 sont 18, 36, 54… ; 18 n'est pas un multiple de 12, mais $36 = 3 \\times 12$. Les deux roues reviennent ensemble en position de départ après 36 dents, soit 3 tours de la petite roue et 2 tours de la grande.\n• **Pour aller plus loin** : au lycée, on note souvent PGCD le plus grand diviseur commun et PPCM le plus petit multiple commun. Ces sigles ne sont pas à connaître en 3e."
      },
      {
        "title": "À retenir pour le brevet",
        "content": "• Un nombre premier a exactement deux diviseurs : 1 et lui-même ; 0 et 1 ne sont pas premiers.\n• Nombres premiers inférieurs à 30 : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.\n• Critères : par 2 (chiffre des unités pair), par 3 ou 9 (somme des chiffres), par 5 (unités 0 ou 5).\n• Partage en lots identiques le plus nombreux possible → plus grand diviseur commun ; premier retour simultané → plus petit multiple commun.\n\n**Automatismes (questions flash)** :\n• Décomposer $72$ → $2^3 \\times 3^2$.\n• $1\\,035$ est-il divisible par 9 ? → oui, $1 + 0 + 3 + 5 = 9$.\n• $91$ est-il premier ? → non, $91 = 7 \\times 13$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Rendre une fraction irréductible par décomposition en facteurs premiers",
        "example": "Rendre la fraction 252 / 360 irréductible.",
        "steps": [
          "**Étape 1 (Décomposer 252)** : $252 = 2^2 \\times 3^2 \\times 7$.",
          "**Étape 2 (Décomposer 360)** : $360 = 2^3 \\times 3^2 \\times 5$.",
          "**Étape 3 (Barrer les facteurs communs)** :\n$$\\frac{252}{360} = \\frac{2^2 \\times 3^2 \\times 7}{2^3 \\times 3^2 \\times 5} = \\frac{7}{2 \\times 5} = \\frac{7}{10}$$.",
          "**Conclusion** : $\\frac{7}{10}$ est irréductible car 7 et 10 n'ont aucun diviseur commun autre que 1."
        ]
      },
      {
        "title": "Méthode : Résoudre un problème de partage (diviseur commun)",
        "example": "Un fleuriste a 126 roses et 90 tulipes. Il veut faire le plus grand nombre possible de bouquets identiques en utilisant toutes les fleurs. Combien de bouquets fait-il, et que contient chacun ?",
        "steps": [
          "**Étape 1 (Analyser)** : le nombre de bouquets doit diviser 126 et 90 ; on cherche le plus grand diviseur commun de ces deux nombres.",
          "**Étape 2 (Décomposer)** : $126 = 2 \\times 3^2 \\times 7$ et $90 = 2 \\times 3^2 \\times 5$.",
          "**Étape 3 (Facteurs communs)** : les décompositions ont en commun les facteurs $2$, $3$ et $3$. Le plus grand diviseur commun est donc $2 \\times 3^2 = 18$.",
          "**Étape 4 (Composition)** : $126 \\div 18 = 7$ roses et $90 \\div 18 = 5$ tulipes par bouquet.",
          "**Conclusion** : il réalise **18 bouquets** de 7 roses et 5 tulipes."
        ]
      },
      {
        "title": "Méthode : Résoudre un problème de rendez-vous (multiple commun)",
        "example": "Un bus de la ligne A part toutes les 15 min, un bus de la ligne B toutes les 25 min. Deux bus partent ensemble à 7 h. À quelle heure partiront-ils de nouveau ensemble pour la première fois ?",
        "steps": [
          "**Étape 1 (Analyser)** : la durée cherchée est un multiple de 15 et de 25 ; on cherche le plus petit multiple commun de ces deux nombres.",
          "**Étape 2 (Lister)** : les multiples de 25 sont 25, 50, 75, 100…",
          "**Étape 3 (Trouver le premier multiple de 15)** : 25 et 50 ne sont pas des multiples de 15, mais $75 = 5 \\times 15$. Le plus petit multiple commun est $75$.",
          "**Conclusion** : 75 min = 1 h 15 min, les bus repartent ensemble à **8 h 15**."
        ]
      }
    ],
    "traps": [
      "⚠️ $1$ n'est PAS un nombre premier (il n'admet qu'un seul diviseur, 1).",
      "⚠️ Pour le critère par 3 et 9, ne pas regarder le dernier chiffre mais faire la SOMME de tous les chiffres !",
      "⚠️ Ne pas s'arrêter dans la décomposition tant que tous les facteurs ne sont pas des nombres premiers (ex: $24 = 4 \\times 6$ n'est pas terminé car 4 et 6 ne sont pas premiers : $24 = 2^3 \\times 3$).",
      "⚠️ Ne pas confondre diviseur commun (partager en un maximum de lots identiques) et multiple commun (premier moment où deux phénomènes se retrouvent)."
    ],
    "flashcards": [
      {
        "q": "Qu'est-ce qu'un nombre premier ?",
        "a": "Un nombre entier naturel qui possède **exactement deux diviseurs distincts** : 1 et lui-même."
      },
      {
        "q": "Pourquoi 1 n'est-il pas un nombre premier ?",
        "a": "Parce qu'il n'admet qu'**un seul diviseur** (lui-même), or la définition en exige exactement deux."
      },
      {
        "q": "Quel est le seul nombre premier pair ?",
        "a": "**2** (tous les autres nombres pairs sont divisibles par 2 donc ont au moins trois diviseurs)."
      },
      {
        "q": "Quelle est la décomposition en facteurs premiers de 60 ?",
        "a": "$$60 = 2^2 \\times 3 \\times 5$$"
      },
      {
        "q": "Comment sait-on qu'une fraction est irréductible ?",
        "a": "Lorsque son numérateur et son dénominateur sont **premiers entre eux** (aucun diviseur commun autre que 1)."
      },
      {
        "q": "À quoi sert le plus petit multiple commun de deux nombres ?",
        "a": "Il donne le premier moment où deux phénomènes répétitifs se retrouvent (bus, feux, engrenages)."
      },
      {
        "q": "Le nombre 91 est-il premier ?",
        "a": "Non : $91 = 7 \\times 13$ (il a 4 diviseurs : 1, 7, 13 et 91)."
      }
    ]
  },
  "G0": {
    "title": "G0 : Rappels Théorème de Pythagore et Propriétés",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Utiliser le théorème de Pythagore direct pour calculer la longueur de l'hypoténuse ou d'un côté de l'angle droit.",
      "Rédiger la réciproque du théorème de Pythagore pour démontrer qu'un triangle est rectangle.",
      "Rédiger la contraposée pour démontrer qu'un triangle n'est pas rectangle.",
      "Distinguer rigoureusement valeur exacte avec racine carrée et valeur arrondie."
    ],
    "keyPoints": [
      {
        "title": "1. Le Théorème direct (Calcul de longueur)",
        "content": "Dans un triangle $ABC$ rectangle en $A$, le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés :\n$$BC^2 = AB^2 + AC^2$$\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 280 170\" width=\"280\" height=\"170\" style=\"max-width:280px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"50,140 230,140 50,30\" fill=\"rgba(59, 130, 246, 0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <path d=\"M 50 125 L 65 125 L 65 140\" fill=\"none\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <text x=\"35\" y=\"152\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n    <text x=\"240\" y=\"152\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n    <text x=\"35\" y=\"25\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n    <text x=\"145\" y=\"75\" transform=\"rotate(-31 145 75)\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--primary, #2563eb)\">Hypoténuse [BC]</text>\n    <text x=\"140\" y=\"158\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" fill=\"var(--text-muted, #64748b)\">côté [AB]</text>\n    <text x=\"15\" y=\"85\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" fill=\"var(--text-muted, #64748b)\">côté [AC]</text>\n  </svg>\n</div>\n\n• **Calcul de l'hypoténuse** : $BC = \\sqrt{AB^2 + AC^2}$.\n• **Calcul d'un côté de l'angle droit** : $AB^2 = BC^2 - AC^2 \\implies AB = \\sqrt{BC^2 - AC^2}$."
      },
      {
        "title": "2. Réciproque et Contraposée (Démontrer l'orthogonalité)",
        "content": "Soit $[BC]$ le plus grand côté d'un triangle $ABC$ :\n• Si $BC^2 = AB^2 + AC^2$, alors le triangle $ABC$ est rectangle en $A$ (d'après la **réciproque du théorème de Pythagore**).\n• Si $BC^2 \\neq AB^2 + AC^2$, alors le triangle n'est pas rectangle (d'après la **contraposée**).\n*Règle d'or* : On calcule toujours $BC^2$ d'une part, et $AB^2 + AC^2$ d'autre part **séparément** !"
      },
      {
        "title": "3. Rédaction type pour calculer une longueur (Théorème direct)",
        "content": "Pour calculer une longueur avec le théorème direct de Pythagore :\n1. Préciser le triangle et le sommet de l'angle droit : « Dans le triangle $ABC$ rectangle en $A$, »\n2. Citer le théorème : « d'après le **théorème de Pythagore** : »\n3. Écrire l'égalité : $BC^2 = AB^2 + AC^2$\n4. Remplacer par les valeurs et calculer.\n5. Justifier et conclure avec la racine carrée : comme une longueur est positive ($BC > 0$), $BC = \\sqrt{\\dots}$."
      },
      {
        "title": "4. Valeur exacte vs Valeur arrondie",
        "content": "• **Valeur exacte** : $BC = \\sqrt{65}$ cm.\n• **Valeur arrondie** : $BC \\approx 8{,}1$ cm (au dixième près)."
      },
      {
        "title": "À retenir pour le brevet",
        "content": "• Hypoténuse = côté opposé à l'angle droit = plus long côté.\n• Triangle rectangle **connu** $\\Rightarrow$ théorème de Pythagore pour **calculer** une longueur.\n• Trois longueurs connues $\\Rightarrow$ réciproque (égalité vraie) ou contraposée (égalité fausse) pour **démontrer**.\n• Valeur exacte $\\sqrt{\\dots}$, puis arrondi avec $\\approx$ seulement à la fin.\n\n**Automatismes** :\n• Hypoténuse d'un triangle rectangle de côtés $3$ et $4$ ? $\\to$ $5$.\n• $10^2 - 8^2$ ? $\\to$ $36$, donc le côté manquant d'un triangle rectangle d'hypoténuse $10$ et de côté $8$ vaut $6$.\n• Un triangle de côtés $7$, $24$, $25$ est-il rectangle ? $\\to$ oui : $49 + 576 = 625 = 25^2$."
      }
    ],
    "methods": [
      {
        "title": "Modèle de rédaction (brevet) : Calculer une longueur (Théorème direct)",
        "example": "Soit un triangle EFG rectangle en E tel que EF = 4,5 cm et EG = 6 cm. Calculer la longueur FG.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.8rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 260 140\" width=\"260\" height=\"140\" style=\"max-width:260px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"45,115 205,115 45,35\" fill=\"rgba(37, 99, 235, 0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <path d=\"M 45 103 L 57 103 L 57 115\" fill=\"none\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <text x=\"32\" y=\"126\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">E</text>\n    <text x=\"212\" y=\"126\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">G</text>\n    <text x=\"32\" y=\"30\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">F</text>\n    <text x=\"18\" y=\"78\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">EF = 4,5 cm</text>\n    <text x=\"125\" y=\"132\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">EG = 6 cm</text>\n    <text x=\"135\" y=\"68\" transform=\"rotate(-27 135 68)\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">FG = ? (7,5 cm)</text>\n  </svg>\n</div>",
        "steps": [
          "**1. Énoncer les hypothèses** : Dans le triangle $EFG$ rectangle en $E$,",
          "**2. Citer le théorème** : d'après le **théorème de Pythagore** :",
          "**3. Poser l'égalité** : $FG^2 = EF^2 + EG^2$",
          "**4. Calculer** : $FG^2 = 4{,}5^2 + 6^2 = 20{,}25 + 36 = 56{,}25$",
          "**5. Conclure** : Comme une longueur est positive ($FG > 0$) :\n$FG = \\sqrt{56{,}25} = 7{,}5\\text{ cm}$\n*(Pour calculer un côté de l'angle droit, on soustrait : $EF^2 = FG^2 - EG^2$)*."
        ]
      },
      {
        "title": "Modèle de rédaction (brevet) : Démontrer qu'un triangle est rectangle (Réciproque)",
        "example": "Soit un triangle MNP tel que MN = 6 cm, NP = 8 cm, MP = 10 cm. Est-il rectangle ?\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.8rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 260 140\" width=\"260\" height=\"140\" style=\"max-width:260px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"45,115 215,115 45,25\" fill=\"rgba(16, 185, 129, 0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <path d=\"M 45 103 L 57 103 L 57 115\" fill=\"none\" stroke=\"#d97706\" stroke-width=\"1.8\" stroke-dasharray=\"3 2\" />\n    <text x=\"62\" y=\"108\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#d97706\">?</text>\n    <text x=\"32\" y=\"126\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">N</text>\n    <text x=\"222\" y=\"126\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">P</text>\n    <text x=\"32\" y=\"22\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">M</text>\n    <text x=\"130\" y=\"132\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">NP = 8 cm</text>\n    <text x=\"18\" y=\"72\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">MN = 6 cm</text>\n    <text x=\"138\" y=\"62\" transform=\"rotate(-28 138 62)\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#10b981\">MP = 10 cm (plus grand)</text>\n  </svg>\n</div>",
        "steps": [
          "**1. Identifier le plus long côté** : Dans le triangle $MNP$, le plus grand côté est $[MP]$.",
          "**2. Calculer séparément** :\n• D'une part : $MP^2 = 10^2 = 100$.\n• D'autre part : $MN^2 + NP^2 = 6^2 + 8^2 = 36 + 64 = 100$.",
          "**3. Conclure rigoureusement** : On constate que $MP^2 = MN^2 + NP^2$. D'après la **réciproque du théorème de Pythagore**, le triangle $MNP$ est rectangle en $N$."
        ]
      },
      {
        "title": "Modèle de rédaction (brevet) : Démontrer qu'un triangle n'est pas rectangle (Contraposée)",
        "example": "Soit un triangle ABC tel que AB = 4 cm, BC = 6 cm et AC = 7,5 cm. Le triangle ABC est-il rectangle ?\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.8rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 260 140\" width=\"260\" height=\"140\" style=\"max-width:260px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"45,115 205,115 48,38\" fill=\"rgba(220, 38, 38, 0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <path d=\"M 45 103 A 12 12 0 0 1 57 115\" fill=\"none\" stroke=\"#dc2626\" stroke-width=\"1.8\" stroke-dasharray=\"3 2\" />\n    <text x=\"54\" y=\"106\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">≠ 90° ?</text>\n    <text x=\"32\" y=\"126\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n    <text x=\"212\" y=\"126\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n    <text x=\"38\" y=\"32\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n    <text x=\"18\" y=\"78\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">AB = 4 cm</text>\n    <text x=\"125\" y=\"132\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">BC = 6 cm</text>\n    <text x=\"135\" y=\"68\" transform=\"rotate(-26 135 68)\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#d97706\">AC = 7,5 cm (plus grand)</text>\n  </svg>\n</div>",
        "steps": [
          "**1. Identifier le plus long côté** : Dans le triangle $ABC$, le plus grand côté est $[AC]$.",
          "**2. Calculer séparément** :\n• D'une part : $AC^2 = 7{,}5^2 = 56{,}25$.\n• D'autre part : $AB^2 + BC^2 = 4^2 + 6^2 = 16 + 36 = 52$.",
          "**3. Conclure rigoureusement** : On constate que $AC^2 \\neq AB^2 + BC^2$. D'après la **contraposée du théorème de Pythagore**, le triangle $ABC$ **n'est pas rectangle**."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne JAMAIS écrire $MP^2 = MN^2 + NP^2$ au début de la démonstration : on calcule les deux membres séparément !",
      "⚠️ Pour un côté de l'angle droit, soustraire les carrés : $AB^2 = BC^2 - AC^2$. Ne pas additionner !",
      "⚠️ Se tromper d'hypoténuse : dans un triangle rectangle en $E$, l'hypoténuse est le côté qui ne contient pas $E$."
    ],
    "flashcards": [
      {
        "q": "Quel est l'énoncé du théorème de Pythagore ?",
        "a": "Dans un triangle rectangle, le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés :\n$$BC^2 = AB^2 + AC^2$$"
      },
      {
        "q": "À quoi sert la réciproque du théorème de Pythagore ?",
        "a": "Elle permet de **démontrer qu'un triangle est rectangle** en comparant le carré du plus grand côté à la somme des carrés des deux autres."
      },
      {
        "q": "Que conclut-on si $BC^2 \\neq AB^2 + AC^2$ ?",
        "a": "D'après la **contraposée du théorème de Pythagore**, le triangle $ABC$ **n'est pas rectangle**."
      },
      {
        "q": "Comment calcule-t-on la longueur d'un côté de l'angle droit ?",
        "a": "$$AB = \\sqrt{BC^2 - AC^2}$$\n*(On soustrait le carré du côté connu au carré de l'hypoténuse)*."
      },
      {
        "q": "Quelle est l'hypoténuse d'un triangle rectangle en F ?",
        "a": "Le côté opposé au sommet F, c'est-à-dire le segment $[DE]$ si le triangle s'appelle DEF."
      },
      {
        "q": "Valeur exacte de l'hypoténuse d'un triangle rectangle dont les côtés de l'angle droit mesurent 2 cm et 5 cm ?",
        "a": "$\\sqrt{2^2 + 5^2} = \\sqrt{29}$ cm (environ 5,4 cm)."
      }
    ]
  },
  "G1": {
    "title": "G1 : Théorème de Thalès et Réciproque",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Identifier les configurations de Thalès : triangles emboîtés et papillon.",
      "Écrire l'égalité des trois rapports de proportionnalité de Thalès.",
      "Calculer une longueur inconnue à l'aide d'un produit en croix.",
      "Démontrer que deux droites sont parallèles à l'aide de la réciproque de Thalès.",
      "Démontrer que deux droites ne sont pas parallèles à l'aide de la contraposée."
    ],
    "keyPoints": [
      {
        "title": "1. Les deux configurations de Thalès",
        "content": "Soient les points $A, M, B$ d'une part et $A, N, C$ d'autre part alignés. Si les droites $(MN)$ et $(BC)$ sont parallèles, alors d'après le **théorème de Thalès** :\n$$\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC}$$\n\n<div class=\"geo-figure-wrapper\" style=\"display:flex; justify-content:center; gap:1.5rem; flex-wrap:wrap; margin:1rem 0;\">\n  <div style=\"text-align:center;\">\n    <svg class=\"geo-svg-figure\" viewBox=\"0 0 260 175\" width=\"260\" height=\"175\" style=\"max-width:240px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon points=\"130,25 35,145 225,145\" fill=\"rgba(59, 130, 246, 0.05)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n      <line x1=\"85\" y1=\"88\" x2=\"175\" y2=\"88\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2.2\" stroke-linecap=\"round\" />\n      <circle cx=\"130\" cy=\"25\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n      <circle cx=\"35\" cy=\"145\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n      <circle cx=\"225\" cy=\"145\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n      <circle cx=\"85\" cy=\"88\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n      <circle cx=\"175\" cy=\"88\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n      <text x=\"130\" y=\"16\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n      <text x=\"22\" y=\"150\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n      <text x=\"232\" y=\"150\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n      <text x=\"68\" y=\"86\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">M</text>\n      <text x=\"182\" y=\"86\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">N</text>\n      <text x=\"130\" y=\"166\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"var(--text-muted, #64748b)\">Triangles emboîtés</text>\n    </svg>\n  </div>\n  <div style=\"text-align:center;\">\n    <svg class=\"geo-svg-figure\" viewBox=\"0 0 260 175\" width=\"260\" height=\"175\" style=\"max-width:240px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon points=\"70,45 190,45 130,95\" fill=\"rgba(59, 130, 246, 0.05)\" />\n      <polygon points=\"130,95 202,155 58,155\" fill=\"rgba(59, 130, 246, 0.05)\" />\n      <line x1=\"70\" y1=\"45\" x2=\"202\" y2=\"155\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linecap=\"round\" />\n      <line x1=\"190\" y1=\"45\" x2=\"58\" y2=\"155\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linecap=\"round\" />\n      <line x1=\"70\" y1=\"45\" x2=\"190\" y2=\"45\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2.2\" stroke-linecap=\"round\" />\n      <line x1=\"58\" y1=\"155\" x2=\"202\" y2=\"155\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2.2\" stroke-linecap=\"round\" />\n      <circle cx=\"130\" cy=\"95\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n      <circle cx=\"70\" cy=\"45\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n      <circle cx=\"190\" cy=\"45\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n      <circle cx=\"58\" cy=\"155\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n      <circle cx=\"202\" cy=\"155\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n      <text x=\"144\" y=\"99\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n      <text x=\"56\" y=\"38\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">M</text>\n      <text x=\"204\" y=\"38\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">N</text>\n      <text x=\"42\" y=\"161\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n      <text x=\"216\" y=\"161\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n      <text x=\"130\" y=\"172\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"var(--text-muted, #64748b)\">Configuration papillon</text>\n    </svg>\n  </div>\n</div>\n\n• **Configuration emboîtée** : $M \\in [AB]$ et $N \\in [AC]$ (un triangle réduit à l'intérieur d'un grand triangle).\n• **Configuration papillon (sablier)** : $A$ est entre $M$ et $B$, et entre $N$ et $C$."
      },
      {
        "title": "2. Réciproque du théorème de Thalès (Prouver le parallélisme)",
        "content": "Si les points $A, M, B$ d'une part et $A, N, C$ d'autre part sont **alignés dans le même ordre**, et si :\n$$\\frac{AM}{AB} = \\frac{AN}{AC}$$\nAlors les droites $(MN)$ et $(BC)$ sont **parallèles** (d'après la réciproque du théorème de Thalès)."
      },
      {
        "title": "3. Contraposée de Thalès (Prouver que les droites ne sont pas parallèles)",
        "content": "Si les points sont alignés dans le même ordre mais que :\n$$\\frac{AM}{AB} \\neq \\frac{AN}{AC}$$\nAlors les droites $(MN)$ et $(BC)$ **ne sont pas parallèles**."
      },
      {
        "title": "4. Lien avec l'homothétie",
        "content": "Dans une configuration de Thalès de sommet $A$ avec $(MN) // (BC)$, on passe du triangle $AMN$ au triangle $ABC$ par une **homothétie de centre $A$** (voir le chapitre sur les homothéties) :\n• en configuration **emboîtée**, le rapport est **positif** ;\n• en configuration **papillon**, le rapport est **négatif** ;\n• dans les deux cas, sa valeur absolue vaut $\\dfrac{AB}{AM}$.\n\nLes trois rapports de Thalès sont égaux parce qu'une homothétie multiplie toutes les longueurs par un même nombre."
      },
      {
        "title": "À retenir pour le brevet",
        "content": "• **Calculer une longueur** (on sait que les droites sont parallèles) : théorème de Thalès, puis produit en croix.\n• **Démontrer un parallélisme** : réciproque (rapports égaux et points alignés dans le même ordre).\n• **Démontrer un non-parallélisme** : contraposée (rapports différents).\n• Le petit triangle se lit au numérateur, le grand au dénominateur, dans les trois rapports.\n\n**Automatismes** :\n• $\\dfrac{AM}{AB} = \\dfrac{2}{5}$ et $AC = 10$ : $AN$ ? $\\to$ $4$.\n• $\\dfrac{3}{4}$ et $\\dfrac{6}{8}$ sont-ils égaux ? $\\to$ oui ($3 \\times 8 = 4 \\times 6 = 24$).\n• Le théorème de la droite des milieux est le cas où le rapport vaut ? $\\to$ $\\dfrac{1}{2}$."
      }
    ],
    "methods": [
      {
        "title": "Modèle de rédaction (brevet) : Calculer une longueur (Théorème direct)",
        "example": "Sur la figure ci-dessous, les points $A, M, B$ et $A, N, C$ sont alignés avec $(MN) // (BC)$. On donne $AB = 6\\text{ cm}$, $AM = 2\\text{ cm}$, $AC = 7{,}5\\text{ cm}$ et $BC = 9\\text{ cm}$. Calculer $AN$ et $MN$.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 320 185\" width=\"320\" height=\"185\" style=\"max-width:300px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"135,24 45,150 255,150\" fill=\"rgba(59, 130, 246, 0.05)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <polygon points=\"135,24 105,66 175,66\" fill=\"rgba(37, 99, 235, 0.12)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <circle cx=\"135\" cy=\"24\" r=\"3.5\" fill=\"var(--primary, #2563eb)\" />\n    <circle cx=\"105\" cy=\"66\" r=\"3.5\" fill=\"var(--primary, #2563eb)\" />\n    <circle cx=\"175\" cy=\"66\" r=\"3.5\" fill=\"var(--primary, #2563eb)\" />\n    <circle cx=\"45\" cy=\"150\" r=\"3.5\" fill=\"var(--primary, #2563eb)\" />\n    <circle cx=\"255\" cy=\"150\" r=\"3.5\" fill=\"var(--primary, #2563eb)\" />\n    <text x=\"135\" y=\"16\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n    <text x=\"32\" y=\"155\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n    <text x=\"268\" y=\"155\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n    <text x=\"92\" y=\"64\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">M</text>\n    <text x=\"188\" y=\"64\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">N</text>\n    <g class=\"geo-pill\">\n      <rect x=\"36\" y=\"32\" width=\"64\" height=\"20\" rx=\"4\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.2\" />\n      <text x=\"68\" y=\"46\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">AM = 2 cm</text>\n    </g>\n    <g class=\"geo-pill\">\n      <rect x=\"4\" y=\"98\" width=\"64\" height=\"20\" rx=\"4\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"36\" y=\"112\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"var(--text-muted, #64748b)\">AB = 6 cm</text>\n    </g>\n    <g class=\"geo-pill\">\n      <rect x=\"234\" y=\"98\" width=\"76\" height=\"20\" rx=\"4\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"272\" y=\"112\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"var(--text-muted, #64748b)\">AC = 7,5 cm</text>\n    </g>\n    <g class=\"geo-pill\">\n      <rect x=\"120\" y=\"156\" width=\"60\" height=\"20\" rx=\"4\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"150\" y=\"170\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">BC = 9 cm</text>\n    </g>\n    <g class=\"geo-pill\">\n      <rect x=\"190\" y=\"32\" width=\"52\" height=\"20\" rx=\"4\" fill=\"#fee2e2\" stroke=\"#ef4444\" stroke-width=\"1.2\" />\n      <text x=\"216\" y=\"46\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#dc2626\">AN = ?</text>\n    </g>\n    <g class=\"geo-pill\">\n      <rect x=\"114\" y=\"74\" width=\"52\" height=\"20\" rx=\"4\" fill=\"#fee2e2\" stroke=\"#ef4444\" stroke-width=\"1.2\" />\n      <text x=\"140\" y=\"88\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#dc2626\">MN = ?</text>\n    </g>\n  </svg>\n</div>",
        "steps": [
          "**1. Énoncer les hypothèses indispensables** :\n• Les points $A, M, B$ et $A, N, C$ sont alignés.\n• Les droites $(MN)$ et $(BC)$ sont parallèles : $(MN) // (BC)$.",
          "**2. Citer le théorème** : D'après le **théorème de Thalès** :",
          "**3. Poser l'égalité des trois rapports** :\n$$\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC}$$",
          "**4. Remplacer par les valeurs connues** :\n$$\\frac{2}{6} = \\frac{AN}{7{,}5} = \\frac{MN}{9}$$",
          "**5. Calculer chaque longueur par produit en croix** :\n• Calcul de $AN$ : $AN = \\frac{2 \\times 7{,}5}{6} = \\frac{15}{6} = 2{,}5\\text{ cm}$.\n• Calcul de $MN$ : $MN = \\frac{2 \\times 9}{6} = \\frac{18}{6} = 3\\text{ cm}$."
        ]
      },
      {
        "title": "Modèle de rédaction Brevet : Réciproque de Thalès (Prouver le parallélisme)",
        "example": "Soit les points A, M, B et A, N, C alignés dans cet ordre. AM = 3 cm, AB = 5 cm, AN = 4,5 cm, AC = 7,5 cm. Les droites (MN) et (BC) sont-elles parallèles ?",
        "steps": [
          "**Étape 1 (Alignement dans le même ordre)** : Les points $A, M, B$ et $A, N, C$ sont alignés dans le même ordre.",
          "**Étape 2 (Calcul séparé des rapports)** :\n• $\\frac{AM}{AB} = \\frac{3}{5} = 0{,}6$.\n• $\\frac{AN}{AC} = \\frac{4{,}5}{7{,}5} = \\frac{45}{75} = \\frac{3}{5} = 0{,}6$.",
          "**Étape 3 (Conclusion)** : On constate que $\\frac{AM}{AB} = \\frac{AN}{AC}$. D'après la **réciproque du théorème de Thalès**, les droites $(MN)$ et $(BC)$ sont parallèles."
        ]
      },
      {
        "title": "Modèle de rédaction (brevet) : Thalès en configuration papillon",
        "example": "Les droites $(MB)$ et $(NC)$ se coupent en $A$, avec $A$ entre $M$ et $B$, et entre $N$ et $C$. On sait que $(MN) // (BC)$, $AM = 4$ cm, $AB = 6$ cm, $AN = 3$ cm et $MN = 5$ cm. Calculer $AC$ et $BC$.",
        "steps": [
          "**1. Hypothèses** : les points $M, A, B$ et $N, A, C$ sont alignés et $(MN) // (BC)$.",
          "**2. Théorème** : d'après le théorème de Thalès, $\\dfrac{AM}{AB} = \\dfrac{AN}{AC} = \\dfrac{MN}{BC}$, soit $\\dfrac{4}{6} = \\dfrac{3}{AC} = \\dfrac{5}{BC}$.",
          "**3. Calcul de $AC$** : $AC = \\dfrac{3 \\times 6}{4} = \\dfrac{18}{4} = 4{,}5$ cm.",
          "**4. Calcul de $BC$** : $BC = \\dfrac{5 \\times 6}{4} = \\dfrac{30}{4} = 7{,}5$ cm."
        ]
      },
      {
        "title": "Modèle de rédaction (brevet) : Démontrer que deux droites ne sont pas parallèles",
        "example": "Les points $A, M, B$ et $A, N, C$ sont alignés dans cet ordre, avec $AM = 3$ cm, $AB = 8$ cm, $AN = 4$ cm et $AC = 10$ cm. Les droites $(MN)$ et $(BC)$ sont-elles parallèles ?",
        "steps": [
          "**1. Calcul séparé des rapports** : $\\dfrac{AM}{AB} = \\dfrac{3}{8}$ et $\\dfrac{AN}{AC} = \\dfrac{4}{10}$.",
          "**2. Comparaison exacte (produits en croix)** : $3 \\times 10 = 30$ et $8 \\times 4 = 32$. Comme $30 \\neq 32$, $\\dfrac{AM}{AB} \\neq \\dfrac{AN}{AC}$ (soit $0{,}375 \\neq 0{,}4$).",
          "**3. Conclusion** : d'après la contraposée du théorème de Thalès, les droites $(MN)$ et $(BC)$ **ne sont pas parallèles**."
        ]
      }
    ],
    "traps": [
      "⚠️ Oublier la mention obligatoire « les points sont alignés dans le même ordre » lors de la réciproque !",
      "⚠️ Mélanger grand côté et petit côté dans les rapports : toujours faire $\\frac{\\text{petit}}{\\text{grand}}$ partout ou $\\frac{\\text{grand}}{\\text{petit}}$ partout.",
      "⚠️ Il faut obligatoirement utiliser la forme fractionnaire (ou le produit en croix) pour comparer deux rapports si la division ne tombe pas juste (les valeurs approchées arrondies sont strictement interdites pour prouver une égalité !)."
    ],
    "flashcards": [
      {
        "q": "Quelles sont les deux conditions indispensables pour appliquer le théorème de Thalès direct ?",
        "a": "Deux droites sécantes et deux droites **parallèles**."
      },
      {
        "q": "Quels sont les rapports de Thalès si $(MN) // (BC)$ avec sécantes en $A$ ?",
        "a": "$$\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC}$$"
      },
      {
        "q": "Dans une configuration de Thalès, quel est le lien avec une homothétie ?",
        "a": "On passe d'un triangle à l'autre par une **homothétie de centre le sommet commun** : rapport positif si la configuration est emboîtée, négatif si c'est un papillon."
      },
      {
        "q": "À quoi sert la réciproque du théorème de Thalès ?",
        "a": "Elle sert à **démontrer que deux droites sont parallèles**."
      },
      {
        "q": "Quelle phrase clé est indispensable dans la rédaction de la réciproque de Thalès ?",
        "a": "« Les points $A, M, B$ d'une part et $A, N, C$ d'autre part sont **alignés dans le même ordre** »."
      },
      {
        "q": "Que conclut-on si $\\frac{AM}{AB} \\neq \\frac{AN}{AC}$ ?",
        "a": "D'après la **contraposée de Thalès**, les droites ne sont pas parallèles."
      },
      {
        "q": "Configuration papillon : $(MN) // (BC)$, $AM = 2$, $AB = 5$, $BC = 10$. Que vaut $MN$ ?",
        "a": "$MN = \\dfrac{2 \\times 10}{5} = 4$."
      },
      {
        "q": "Comment comparer $\\dfrac{7}{9}$ et $\\dfrac{9}{12}$ sans arrondir ?",
        "a": "Par produits en croix : $7 \\times 12 = 84$ et $9 \\times 9 = 81$, donc les rapports sont différents."
      }
    ]
  },
  "G2": {
    "title": "G2 : Trigonométrie dans le triangle rectangle",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Repérer l'hypoténuse, le côté adjacent et le côté opposé à un angle aigu dans un triangle rectangle.",
      "Mémoriser par cœur le moyen mnémotechnique SOH-CAH-TOA.",
      "Savoir que les formules de trigonométrie ne s'appliquent JAMAIS sur l'angle droit.",
      "Savoir que le cosinus et le sinus d'un angle aigu sont STRICTEMENT compris entre 0 et 1.",
      "Calculer une longueur inconnue et déterminer un angle au degré près à l'aide de la calculatrice (Arccos, Arcsin, Arctan)."
    ],
    "keyPoints": [
      {
        "title": "1. Définition des trois rapports trigonométriques : SOH-CAH-TOA",
        "content": "Dans un **triangle rectangle**, pour tout angle aigu $\\alpha$ :\n• **Sinus** : $\\sin(\\alpha) = \\frac{\\text{Côté Opposé}}{\\text{Hypoténuse}}$ (S-O-H)\n• **Cosinus** : $\\cos(\\alpha) = \\frac{\\text{Côté Adjacent}}{\\text{Hypoténuse}}$ (C-A-H)\n• **Tangente** : $\\tan(\\alpha) = \\frac{\\text{Côté Opposé}}{\\text{Côté Adjacent}}$ (T-O-A)\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 340 185\" width=\"340\" height=\"185\" style=\"max-width:320px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"65,145 285,145 65,35\" fill=\"rgba(59, 130, 246, 0.06)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <path d=\"M 65 130 L 80 130 L 80 145\" fill=\"none\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <path d=\"M 250 145 A 35 35 0 0 1 261 133\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2.5\" />\n    <text x=\"228\" y=\"139\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"#f59e0b\">α</text>\n    <circle cx=\"65\" cy=\"145\" r=\"3.5\" fill=\"var(--primary, #2563eb)\" />\n    <circle cx=\"65\" cy=\"35\" r=\"3.5\" fill=\"var(--primary, #2563eb)\" />\n    <circle cx=\"285\" cy=\"145\" r=\"3.5\" fill=\"var(--primary, #2563eb)\" />\n    <text x=\"48\" y=\"152\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n    <text x=\"48\" y=\"30\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n    <text x=\"296\" y=\"152\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n    <text x=\"180\" y=\"78\" transform=\"rotate(-26.5 180 78)\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">Hypoténuse [AC]</text>\n    <text x=\"175\" y=\"166\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#10b981\">Côté adjacent à α [BC]</text>\n    <text x=\"25\" y=\"90\" text-anchor=\"middle\" transform=\"rotate(-90 25 90)\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#ef4444\">Côté opposé à α [AB]</text>\n  </svg>\n</div>\n\n*Règle d'or du cours* : Ces formules ne s'appliquent **JAMAIS sur l'angle droit** !"
      },
      {
        "title": "2. Propriétés fondamentales à retenir",
        "content": "Pour tout angle aigu $\\alpha$ d'un triangle rectangle :\n• Le cosinus et le sinus sont **toujours strictement compris entre 0 et 1** :\n$$0 < \\cos(\\alpha) < 1 \\quad \\text{et} \\quad 0 < \\sin(\\alpha) < 1$$\n*(Car l'hypoténuse est le côté le plus long : le quotient par l'hypoténuse est toujours inférieur à 1).*\n• La tangente d'un angle aigu est **strictement positive** : $\\tan(\\alpha) > 0$ (elle peut être supérieure à 1).\n• **Mode de calculatrice** : Vérifier impérativement que la calculatrice est en **mode DEG (Degrés)** et non en Radian (RAD) !"
      },
      {
        "title": "3. Démarche pour calculer une longueur inconnue",
        "content": "Pour calculer une longueur avec la trigonométrie :\n1. **Repérage** : identifier le côté connu et le côté cherché par rapport à l'angle aigu donné.\n2. **Choix de la formule** à l'aide de SOH-CAH-TOA :\n• Opposé et Hypoténuse $\\implies$ **Sinus**\n• Adjacent et Hypoténuse $\\implies$ **Cosinus**\n• Opposé et Adjacent $\\implies$ **Tangente**\n3. **Remplacement et calcul** : écrire l'égalité numérique puis isoler la longueur cherchée à l'aide d'un **produit en croix**."
      },
      {
        "title": "4. Démarche pour calculer un angle aigu",
        "content": "Pour déterminer la mesure d'un angle au degré près :\n1. **Choix de la formule** selon les deux longueurs connues (cos, sin ou tan).\n2. **Calcul du quotient** : écrire le rapport (ex: $\\cos(\\widehat{A}) = \\frac{4}{7}$).\n3. **Touche inverse à la calculatrice** : utiliser `Arccos`, `Arcsin` ou `Arctan` (notées `cos⁻¹`, `sin⁻¹`, `tan⁻¹`) avec la calculatrice impérativement en **mode DEG** !"
      },
      {
        "title": "Pour aller plus loin : une relation entre cosinus et sinus",
        "content": "On écrit $\\cos^2(\\alpha)$ pour $(\\cos(\\alpha))^2$ et $\\sin^2(\\alpha)$ pour $(\\sin(\\alpha))^2$. Pour tout angle aigu $\\alpha$ :\n$$\\cos^2(\\alpha) + \\sin^2(\\alpha) = 1$$\n*Démonstration* : soit $ABC$ un triangle rectangle en $A$ et $\\alpha$ la mesure de l'angle $\\widehat{ABC}$. Alors $\\cos(\\alpha) = \\dfrac{AB}{BC}$ et $\\sin(\\alpha) = \\dfrac{AC}{BC}$, donc :\n$$\\cos^2(\\alpha) + \\sin^2(\\alpha) = \\dfrac{AB^2}{BC^2} + \\dfrac{AC^2}{BC^2} = \\dfrac{AB^2 + AC^2}{BC^2} = \\dfrac{BC^2}{BC^2} = 1$$\ncar $AB^2 + AC^2 = BC^2$ d'après le théorème de Pythagore.\n\n*Exemple* : si $\\alpha$ est un angle aigu tel que $\\cos(\\alpha) = \\dfrac{3}{5}$, alors $\\sin^2(\\alpha) = 1 - \\dfrac{9}{25} = \\dfrac{16}{25}$. Comme $\\sin(\\alpha) > 0$, on obtient $\\sin(\\alpha) = \\dfrac{4}{5}$."
      },
      {
        "title": "À retenir pour le brevet",
        "content": "• Dans un triangle **rectangle** seulement : $\\cos = \\dfrac{\\text{adj}}{\\text{hyp}}$, $\\sin = \\dfrac{\\text{opp}}{\\text{hyp}}$, $\\tan = \\dfrac{\\text{opp}}{\\text{adj}}$.\n• On repère d'abord l'hypoténuse, puis les côtés opposé et adjacent **à l'angle utilisé**.\n• Longueur cherchée : égalité puis produit en croix. Angle cherché : touches $\\cos^{-1}$, $\\sin^{-1}$, $\\tan^{-1}$.\n• Calculatrice en mode **degré**.\n\n**Automatismes** :\n• Dans $ABC$ rectangle en $B$, $\\cos(\\widehat{A})$ ? $\\to$ $\\dfrac{AB}{AC}$.\n• Dans $ABC$ rectangle en $B$, le côté opposé à $\\widehat{A}$ ? $\\to$ $[BC]$.\n• Dans $DEF$ rectangle en $E$, $\\tan(\\widehat{D})$ ? $\\to$ $\\dfrac{EF}{DE}$."
      }
    ],
    "methods": [
      {
        "title": "Modèle de rédaction (brevet) : Calculer une longueur avec la trigonométrie",
        "example": "Soit un triangle $ABC$ rectangle en $B$ tel que $AC = 8\\text{ cm}$ et $\\widehat{ACB} = 35^\\circ$. Calculer la longueur $AB$ arrondie au millimètre près.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 320 175\" width=\"320\" height=\"175\" style=\"max-width:290px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"60,140 260,140 60,30\" fill=\"rgba(59, 130, 246, 0.06)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <path d=\"M 60 125 L 75 125 L 75 140\" fill=\"none\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <path d=\"M 225 140 A 35 35 0 0 1 236 128\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2.5\" />\n    <text x=\"202\" y=\"134\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#f59e0b\">35°</text>\n    <circle cx=\"60\" cy=\"140\" r=\"3.5\" fill=\"var(--primary, #2563eb)\" />\n    <circle cx=\"60\" cy=\"30\" r=\"3.5\" fill=\"var(--primary, #2563eb)\" />\n    <circle cx=\"260\" cy=\"140\" r=\"3.5\" fill=\"var(--primary, #2563eb)\" />\n    <text x=\"44\" y=\"152\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n    <text x=\"44\" y=\"28\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n    <text x=\"272\" y=\"152\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n    <g class=\"geo-pill\">\n      <rect x=\"4\" y=\"75\" width=\"52\" height=\"20\" rx=\"4\" fill=\"#fee2e2\" stroke=\"#ef4444\" stroke-width=\"1.2\" />\n      <text x=\"30\" y=\"89\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#dc2626\">AB = ?</text>\n    </g>\n    <g class=\"geo-pill\">\n      <rect x=\"130\" y=\"65\" width=\"78\" height=\"20\" rx=\"4\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.2\" />\n      <text x=\"169\" y=\"79\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">AC = 8 cm</text>\n    </g>\n  </svg>\n</div>",
        "steps": [
          "**1. Énoncer les hypothèses et repérer les côtés** :\nDans le triangle $ABC$ rectangle en $B$, $[AC]$ est l'hypoténuse. Par rapport à l'angle connu $\\widehat{ACB} = 35^\\circ$, le côté cherché $[AB]$ est le côté opposé.",
          "**2. Choisir la formule trigonométrique adaptée** :\nOn connaît l'hypoténuse et on cherche le côté opposé : on utilise le **sinus** (SOH) :\n$$\\sin(\\widehat{ACB}) = \\frac{AB}{AC}$$",
          "**3. Remplacer par les valeurs numériques** :\n$$\\sin(35^\\circ) = \\frac{AB}{8}$$",
          "**4. Calculer par produit en croix** :\n$$AB = 8 \\times \\sin(35^\\circ)$$",
          "**5. Conclure avec l'arrondi demandé** :\nÀ la calculatrice (en mode Degré) : $8 \\times \\sin(35^\\circ) \\approx 4{,}588...$\nLa longueur $AB$ mesure environ **$4{,}6\\text{ cm}$** au millimètre près.\n\n*(Remarque : si l'inconnue était au dénominateur, par exemple $\\cos(40^\\circ) = \\frac{5}{AC}$, on obtiendrait $AC = \\frac{5}{\\cos(40^\\circ)} \\approx 6{,}5\\text{ cm}$)*."
        ]
      },
      {
        "title": "Modèle de rédaction (brevet) : Calculer un angle au degré près",
        "example": "Soit un triangle $ABC$ rectangle en $B$ tel que $AB = 4\\text{ cm}$ et $AC = 7\\text{ cm}$. Calculer la mesure de l'angle $\\widehat{BAC}$ au degré près.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 320 175\" width=\"320\" height=\"175\" style=\"max-width:290px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"60,140 240,140 60,30\" fill=\"rgba(59, 130, 246, 0.06)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <path d=\"M 60 125 L 75 125 L 75 140\" fill=\"none\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <path d=\"M 87 47 A 32 32 0 0 1 60 62\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2.5\" />\n    <text x=\"82\" y=\"68\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#f59e0b\">?</text>\n    <circle cx=\"60\" cy=\"140\" r=\"3.5\" fill=\"var(--primary, #2563eb)\" />\n    <circle cx=\"60\" cy=\"30\" r=\"3.5\" fill=\"var(--primary, #2563eb)\" />\n    <circle cx=\"240\" cy=\"140\" r=\"3.5\" fill=\"var(--primary, #2563eb)\" />\n    <text x=\"44\" y=\"152\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n    <text x=\"44\" y=\"28\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n    <text x=\"252\" y=\"152\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n    <g class=\"geo-pill\">\n      <rect x=\"4\" y=\"75\" width=\"52\" height=\"20\" rx=\"4\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"30\" y=\"89\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">AB = 4 cm</text>\n    </g>\n    <g class=\"geo-pill\">\n      <rect x=\"125\" y=\"65\" width=\"76\" height=\"20\" rx=\"4\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" />\n      <text x=\"163\" y=\"79\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">AC = 7 cm</text>\n    </g>\n  </svg>\n</div>",
        "steps": [
          "**Étape 1 (Repérage des côtés)** : $[AC]$ est l'hypoténuse (en face de l'angle droit $B$) et $[AB]$ est le côté adjacent à l'angle cherché $\\widehat{BAC}$.",
          "**Étape 2 (Choix de formule)** : On connaît le côté adjacent et l'hypoténuse : on utilise le **cosinus** (CAH) :\n$$\\cos(\\widehat{BAC}) = \\frac{AB}{AC}$$",
          "**Étape 3 (Calcul du rapport)** :\n$$\\cos(\\widehat{BAC}) = \\frac{4}{7}$$",
          "**Étape 4 (Calculatrice en mode Degré)** :\nÀ la calculatrice : $\\widehat{BAC} = \\arccos(4/7) \\approx 55{,}15^\\circ$.\nL'angle $\\widehat{BAC}$ mesure environ **$55^\\circ$** au degré près."
        ]
      },
      {
        "title": "Modèle de rédaction (brevet) : Un problème concret avec la trigonométrie",
        "example": "Une échelle de $5$ m est appuyée contre un mur vertical ; son pied est à $1{,}5$ m du mur, sur un sol horizontal. Pour être utilisée en sécurité, l'échelle doit faire avec le sol un angle compris entre $65^\\circ$ et $75^\\circ$. Est-ce le cas ?",
        "steps": [
          "**1. Modéliser** : le mur, le sol et l'échelle forment un triangle rectangle (le mur est perpendiculaire au sol). L'échelle ($5$ m) est l'hypoténuse ; la distance au mur ($1{,}5$ m) est le côté **adjacent** à l'angle $\\alpha$ entre l'échelle et le sol.",
          "**2. Choisir la formule** : adjacent et hypoténuse $\\Rightarrow$ cosinus : $\\cos(\\alpha) = \\dfrac{1{,}5}{5} = 0{,}3$.",
          "**3. Calculatrice (mode degré)** : $\\alpha = \\arccos(0{,}3) \\approx 72{,}5^\\circ$.",
          "**4. Conclure** : $65^\\circ < 72{,}5^\\circ < 75^\\circ$, l'échelle est placée en sécurité."
        ]
      }
    ],
    "traps": [
      "⚠️ Avoir sa calculatrice configurée en Radian (RAD) ou Grade (GRA) au lieu de Degré (DEG) !",
      "⚠️ Trouver un cosinus ou un sinus supérieur à 1 : c'est mathématiquement impossible car l'hypoténuse est le plus grand côté !",
      "⚠️ Appliquer une formule de trigonométrie sur l'angle droit de 90°.",
      "⚠️ Se tromper de côté adjacent : il dépend de l'angle choisi ; le côté adjacent à $\\widehat{A}$ est l'opposé de $\\widehat{C}$."
    ],
    "flashcards": [
      {
        "q": "Quel moyen mnémotechnique permet de mémoriser les formules trigonométriques ?",
        "a": "**SOH - CAH - TOA**\n(Sin = Opp/Hyp ; Cos = Adj/Hyp ; Tan = Opp/Adj)."
      },
      {
        "q": "Entre quelles valeurs le cosinus et le sinus d'un angle aigu sont-ils toujours compris ?",
        "a": "Strictement **entre 0 et 1** ($0 < \\cos < 1$ et $0 < \\sin < 1$)."
      },
      {
        "q": "Quelle touche de la calculatrice permet de trouver un angle connaissant son sinus ?",
        "a": "La touche **Arcsin** (ou **$\\sin^{-1}$**)."
      },
      {
        "q": "Quelle touche de la calculatrice permet de déterminer un angle connaissant son cosinus ?",
        "a": "La touche **Arccos** (ou **$\\cos^{-1}$**)."
      },
      {
        "q": "Peut-on appliquer les formules de trigonométrie dans un triangle qui n'est pas rectangle ?",
        "a": "**Non**, elles ne sont valables que dans un triangle rectangle."
      },
      {
        "q": "$ABC$ rectangle en $A$, $BC = 10$ cm et $\\widehat{B} = 30^\\circ$. Que vaut $AC$ ?",
        "a": "$AC = 10 \\times \\sin(30^\\circ) = 10 \\times 0{,}5 = 5$ cm ($[AC]$ est opposé à $\\widehat{B}$)."
      }
    ]
  },
  "G2bis": {
    "title": "G2 bis : Synthèse — Pythagore, Thalès ou trigonométrie ?",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Lire une figure ou un énoncé et repérer les indices décisifs : angle droit, droites parallèles, angle aigu, nombre de longueurs connues.",
      "Choisir entre le théorème de Pythagore, sa réciproque, le théorème de Thalès, sa réciproque et la trigonométrie.",
      "Dans un problème en plusieurs étapes, trouver dans quel ordre enchaîner les outils."
    ],
    "keyPoints": [
      {
        "title": "1. Trois questions à se poser avant de calculer",
        "content": "Ce chapitre ne refait pas les cours de Pythagore, de Thalès et de trigonométrie : il apprend à **choisir** le bon outil. Avant tout calcul, pose-toi trois questions :\n• **Que cherche-t-on ?** Une longueur, un angle, ou une preuve (« le triangle est-il rectangle ? », « les droites sont-elles parallèles ? »).\n• **Y a-t-il un angle droit connu ?** Codage sur la figure, « rectangle en… », mur vertical et sol horizontal, directions nord et est, rectangle, carré…\n• **Y a-t-il des droites parallèles connues ?** « $(MN) \\parallel (BC)$ », rayons du soleil, étagères, montants verticaux…"
      },
      {
        "title": "2. Le tableau de décision",
        "content": "| Ce que l'on voit | Ce que l'on cherche | Outil |\n|:---|:---|:---|\n| Triangle rectangle + 2 côtés connus | le 3ᵉ côté | Théorème de Pythagore |\n| Triangle rectangle + 1 angle aigu + 1 côté | un autre côté | Trigonométrie (cos, sin ou tan) |\n| Triangle rectangle + 2 côtés connus | un angle aigu | Trigonométrie (Arccos, Arcsin ou Arctan) |\n| Deux droites parallèles coupées par deux sécantes | une longueur | Théorème de Thalès |\n| Les trois côtés d'un triangle | savoir s'il est rectangle | Réciproque (ou contraposée) de Pythagore |\n| Points alignés sur deux sécantes + 4 longueurs | savoir si deux droites sont parallèles | Réciproque (ou contraposée) de Thalès |"
      },
      {
        "title": "3. Les phrases-indices de l'énoncé",
        "content": "• « **est-il rectangle ?** », « **l'angle est-il droit ?** », « le mur est-il **perpendiculaire** au sol ? » → réciproque de Pythagore.\n• « **sont-elles parallèles ?** » → réciproque de Thalès.\n• « **sachant que** $(MN) \\parallel (BC)$ », « les rayons sont **parallèles** » → Thalès.\n• « **angle** de $35^\\circ$ », « calculer la mesure de l'**angle** », « arrondir **au degré** » → trigonométrie.\n• « triangle rectangle » et **aucun angle aigu** dans les données ni dans la question → Pythagore.\n\nUn énoncé qui *donne* le parallélisme ou l'angle droit appelle le théorème direct ; un énoncé qui le *demande* appelle la réciproque."
      },
      {
        "title": "4. Problèmes en plusieurs étapes : partir de la fin",
        "content": "Au brevet, un même exercice enchaîne souvent deux outils. Pour trouver l'ordre, pars de ce que l'on cherche :\n1. Quel outil donnerait directement la réponse ?\n2. Quelle donnée lui manque ? On la calcule **d'abord**, avec un autre outil.\n\nEnchaînements fréquents : **Pythagore puis Thalès** (calculer $BC$ avant d'écrire les rapports) ; **Thalès puis Pythagore** ; **trigonométrie puis Pythagore** (une hauteur, puis une distance) ; **réciproque de Pythagore puis trigonométrie** (prouver que le triangle est rectangle avant d'utiliser cos, sin ou tan)."
      },
      {
        "title": "À retenir pour le brevet",
        "content": "• Avant de calculer : y a-t-il un angle droit ? des parallèles ? que cherche-t-on (longueur, angle, preuve) ?\n• Angle droit et deux côtés connus : **Pythagore**.\n• Angle droit, avec un angle aigu et un côté connus, ou un angle cherché : **trigonométrie**.\n• Deux sécantes coupées par deux parallèles : **Thalès**.\n• « Le triangle est-il rectangle ? » : **réciproque ou contraposée de Pythagore**.\n• « Les droites sont-elles parallèles ? » : **réciproque ou contraposée de Thalès**.\n• Plusieurs étapes : pars de la question et repère la donnée qui manque.\n\n**Automatismes** :\n• Un triangle de côtés $6$, $8$ et $10$ est-il rectangle ? $\\to$ oui, car $6^2 + 8^2 = 100 = 10^2$.\n• Dans $ABC$, $M \\in [AB]$, $N \\in [AC]$, $(MN) \\parallel (BC)$, $\\dfrac{AM}{AB} = \\dfrac{1}{2}$ et $BC = 12$ : $MN$ ? $\\to$ $6$.\n• Triangle rectangle d'hypoténuse $10$, côté opposé à un angle de $30^\\circ$ ? $\\to$ $10 \\times \\sin 30^\\circ = 5$.\n• On cherche un angle dans un triangle rectangle : quel outil ? $\\to$ la trigonométrie."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Choisir l'outil en trois questions",
        "example": "Le triangle $EFG$ est rectangle en $F$, $EF = 6\\text{ cm}$ et $EG = 10\\text{ cm}$. On cherche la mesure de l'angle $\\widehat{FEG}$.",
        "steps": [
          "**Que cherche-t-on ?** Un angle : Pythagore et Thalès ne donnent que des longueurs.",
          "**Angle droit ?** Oui, en $F$ : la trigonométrie s'applique.",
          "**Quel rapport ?** Pour l'angle en $E$ : $[EF]$ est le côté adjacent, $[EG]$ l'hypoténuse, donc le **cosinus** : $\\cos(\\widehat{FEG}) = \\frac{6}{10}$, puis Arccos à la calculatrice."
        ]
      },
      {
        "title": "Méthode : Ordonner deux outils (type brevet)",
        "example": "$ABC$ est rectangle en $A$, $AB = 6$, $AC = 8$ ; $M \\in [AB]$ avec $AM = 3$, $N \\in [AC]$ et $(MN) \\parallel (BC)$. Calculer $MN$.",
        "steps": [
          "**Outil final** : $(MN) \\parallel (BC)$ → Thalès : $\\frac{AM}{AB} = \\frac{MN}{BC}$.",
          "**Donnée manquante** : $BC$ n'est pas connu.",
          "**Étape 1 (Pythagore dans $ABC$)** : $BC^2 = 6^2 + 8^2 = 100$, donc $BC = 10$.",
          "**Étape 2 (Thalès)** : $MN = \\frac{3 \\times 10}{6} = 5$."
        ]
      }
    ],
    "traps": [
      "⚠️ Utiliser Pythagore pour calculer un **angle** : le théorème ne relie que des longueurs.",
      "⚠️ Utiliser Pythagore avec **un seul côté** connu et un angle : il faut la trigonométrie.",
      "⚠️ Utiliser la trigonométrie dans un triangle **qui n'est pas rectangle** : prouver d'abord l'angle droit (réciproque de Pythagore) ou tracer une hauteur.",
      "⚠️ Écrire « d'après le théorème de Thalès » alors que le parallélisme n'est **pas donné** : c'est la réciproque qu'il faut, si c'est la question.",
      "⚠️ Confondre « le triangle est rectangle » (donné → Pythagore) et « le triangle est-il rectangle ? » (à prouver → réciproque)."
    ],
    "flashcards": [
      {
        "q": "Triangle rectangle, deux côtés connus, on cherche le troisième. Quel outil ?",
        "a": "Le **théorème de Pythagore**."
      },
      {
        "q": "Triangle rectangle, un angle aigu et un côté connus, on cherche un autre côté. Quel outil ?",
        "a": "La **trigonométrie** : cosinus, sinus ou tangente selon les côtés en jeu."
      },
      {
        "q": "Triangle rectangle, deux côtés connus, on cherche un angle. Quel outil ?",
        "a": "La **trigonométrie**, avec Arccos, Arcsin ou Arctan à la calculatrice."
      },
      {
        "q": "On sait que $(MN) \\parallel (BC)$ et on cherche une longueur. Quel outil ?",
        "a": "Le **théorème de Thalès**."
      },
      {
        "q": "On connaît les trois côtés d'un triangle et on demande s'il est rectangle. Quel outil ?",
        "a": "La **réciproque** (ou la contraposée) **de Pythagore**."
      },
      {
        "q": "On demande si deux droites sont parallèles, avec des points alignés sur deux sécantes. Quel outil ?",
        "a": "La **réciproque** (ou la contraposée) **de Thalès**."
      },
      {
        "q": "Dans un problème, l'outil final a besoin d'une longueur inconnue. Que faire ?",
        "a": "Calculer **d'abord** cette longueur avec un autre outil, puis appliquer l'outil final."
      }
    ]
  },
  "G3": {
    "title": "G3 : Homothéties et Effets d'échelle",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Construire l'image d'une figure par une homothétie donnée par son centre $O$ et son rapport $k$ ($k \\neq 0$), et reconnaître l'effet obtenu (agrandissement ou réduction).",
      "Distinguer homothétie de rapport positif ($k > 0$, même côté) et de rapport négatif ($k < 0$, côtés opposés).",
      "Reconnaître qu'une homothétie de rapport $-1$ est une symétrie centrale.",
      "Maîtriser les effets d'échelle : longueurs multipliées par $|k|$, aires par $k^2$, volumes par $|k|^3$.",
      "Faire le lien entre homothétie et configuration de Thalès (triangles emboîtés si $k > 0$, papillon si $k < 0$)."
    ],
    "keyPoints": [
      {
        "title": "1. Construire l'image d'une figure par une homothétie",
        "content": "Une homothétie agrandit ou réduit une figure à partir d'un point, son **centre** $O$, et d'un nombre $k$ non nul, son **rapport**. Pour construire l'image d'une figure, on construit l'image de chacun de ses sommets. Pour placer l'image $M'$ d'un point $M$ :\n• On trace la droite $(OM)$ : le point $M'$ se trouve sur cette droite.\n• On reporte la distance au centre, multipliée par $|k|$ : $OM' = |k| \\times OM$.\n• **Si $k > 0$** : on place $M'$ du **même côté** que $M$ par rapport à $O$.\n• **Si $k < 0$** : on place $M'$ **de l'autre côté** de $O$ ($O$ est entre $M$ et $M'$, la figure fait un demi-tour).\n\n<div class=\"geo-figure-wrapper\" style=\"display:flex; justify-content:center; gap:1.5rem; flex-wrap:wrap; margin:1rem 0;\">\n  <div style=\"text-align:center;\">\n    <svg class=\"geo-svg-figure\" viewBox=\"0 0 250 165\" width=\"250\" height=\"165\" style=\"max-width:240px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <line x1=\"25\" y1=\"105\" x2=\"140\" y2=\"20\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n      <line x1=\"25\" y1=\"105\" x2=\"200\" y2=\"128\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n      <line x1=\"25\" y1=\"105\" x2=\"115\" y2=\"128\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n      <polygon points=\"70,70 100,115 60,115\" fill=\"rgba(37, 99, 235, 0.12)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" stroke-linejoin=\"round\" />\n      <circle cx=\"70\" cy=\"70\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n      <circle cx=\"100\" cy=\"115\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n      <circle cx=\"60\" cy=\"115\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n      <text x=\"66\" y=\"62\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">A</text>\n      <text x=\"106\" y=\"122\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">B</text>\n      <text x=\"50\" y=\"122\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">C</text>\n      <polygon points=\"115,35 175,125 95,125\" fill=\"rgba(16, 185, 129, 0.12)\" stroke=\"#10b981\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n      <circle cx=\"115\" cy=\"35\" r=\"3\" fill=\"#10b981\" />\n      <circle cx=\"175\" cy=\"125\" r=\"3\" fill=\"#10b981\" />\n      <circle cx=\"95\" cy=\"125\" r=\"3\" fill=\"#10b981\" />\n      <text x=\"115\" y=\"26\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#10b981\">A'</text>\n      <text x=\"186\" y=\"132\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#10b981\">B'</text>\n      <text x=\"86\" y=\"134\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#10b981\">C'</text>\n      <circle cx=\"25\" cy=\"105\" r=\"3.5\" fill=\"var(--text-main, #0f172a)\" />\n      <text x=\"14\" y=\"109\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">O</text>\n      <text x=\"125\" y=\"155\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"var(--text-muted, #64748b)\">Rapport positif : k = 2 (même côté)</text>\n    </svg>\n  </div>\n  <div style=\"text-align:center;\">\n    <svg class=\"geo-svg-figure\" viewBox=\"0 0 250 165\" width=\"250\" height=\"165\" style=\"max-width:240px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <line x1=\"50\" y1=\"125\" x2=\"165\" y2=\"40\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n      <line x1=\"20\" y1=\"50\" x2=\"190\" y2=\"105\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n      <line x1=\"60\" y1=\"50\" x2=\"155\" y2=\"105\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n      <polygon points=\"150,50 175,100 140,100\" fill=\"rgba(37, 99, 235, 0.12)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" stroke-linejoin=\"round\" />\n      <circle cx=\"150\" cy=\"50\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n      <circle cx=\"175\" cy=\"100\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n      <circle cx=\"140\" cy=\"100\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n      <text x=\"150\" y=\"42\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">A</text>\n      <text x=\"185\" y=\"106\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">B</text>\n      <text x=\"132\" y=\"106\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">C</text>\n      <polygon points=\"62,116 32,56 74,56\" fill=\"rgba(239, 68, 68, 0.12)\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n      <circle cx=\"62\" cy=\"116\" r=\"3\" fill=\"#ef4444\" />\n      <circle cx=\"32\" cy=\"56\" r=\"3\" fill=\"#ef4444\" />\n      <circle cx=\"74\" cy=\"56\" r=\"3\" fill=\"#ef4444\" />\n      <text x=\"62\" y=\"128\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#ef4444\">A'</text>\n      <text x=\"22\" y=\"52\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#ef4444\">B'</text>\n      <text x=\"82\" y=\"52\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#ef4444\">C'</text>\n      <circle cx=\"110\" cy=\"80\" r=\"3.5\" fill=\"var(--text-main, #0f172a)\" />\n      <text x=\"108\" y=\"96\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">O</text>\n      <text x=\"125\" y=\"155\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"var(--text-muted, #64748b)\">Rapport négatif : k = -1,2 (côtés opposés)</text>\n    </svg>\n  </div>\n</div>"
      },
      {
        "title": "2. Cas particuliers remarquables",
        "content": "• **Si $k = 1$** : la figure ne change pas (transformation identité).\n• **Si $k = -1$** : c'est exactement une **symétrie centrale** de centre $O$ !\n• **Si $|k| > 1$** : c'est un **agrandissement**.\n• **Si $|k| < 1$** : c'est une **réduction**."
      },
      {
        "title": "3. Effets d'échelle sur les grandeurs",
        "content": "Dans une homothétie de rapport $k$ (ou agrandissement/réduction de coefficient $k$) :\n• Les **longueurs** sont multipliées par $|k|$.\n• Les **aires** sont multipliées par $k^2$.\n• Les **volumes** sont multipliés par $|k|^3$.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 320 130\" width=\"320\" height=\"130\" style=\"max-width:300px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect x=\"35\" y=\"45\" width=\"40\" height=\"40\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <text x=\"55\" y=\"69\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">1 cm²</text>\n    <text x=\"55\" y=\"36\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">côté = 1 cm</text>\n    <line x1=\"95\" y1=\"65\" x2=\"145\" y2=\"65\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.5\" stroke-dasharray=\"2,2\" />\n    <polygon points=\"145,65 138,61 138,69\" fill=\"var(--text-muted, #64748b)\" />\n    <text x=\"120\" y=\"56\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#10b981\">k = 2</text>\n    <rect x=\"170\" y=\"25\" width=\"80\" height=\"80\" fill=\"rgba(16, 185, 129, 0.12)\" stroke=\"#10b981\" stroke-width=\"2\" />\n    <line x1=\"210\" y1=\"25\" x2=\"210\" y2=\"105\" stroke=\"#10b981\" stroke-width=\"1\" stroke-dasharray=\"3,3\" />\n    <line x1=\"170\" y1=\"65\" x2=\"250\" y2=\"65\" stroke=\"#10b981\" stroke-width=\"1\" stroke-dasharray=\"3,3\" />\n    <text x=\"190\" y=\"49\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"#10b981\">1 cm²</text>\n    <text x=\"230\" y=\"49\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"#10b981\">1 cm²</text>\n    <text x=\"190\" y=\"89\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"#10b981\">1 cm²</text>\n    <text x=\"230\" y=\"89\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"#10b981\">1 cm²</text>\n    <text x=\"210\" y=\"17\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">côté = 2 cm (× 2)</text>\n    <text x=\"210\" y=\"122\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#10b981\">Aire = 4 cm² (× 2² = 4)</text>\n  </svg>\n</div>"
      },
      {
        "title": "4. Conservations géométriques",
        "content": "L'homothétie conserve :\n• La **mesure des angles** (les figures sont semblables, de même forme).\n• Le **parallélisme** et l'**alignement** des points."
      },
      {
        "title": "5. Lien avec le théorème de Thalès",
        "content": "Soient $O$, $A$, $B$ trois points non alignés, et $A'$, $B'$ les images de $A$ et $B$ par l'homothétie de centre $O$ et de rapport $k$. Alors les droites $(A'B')$ et $(AB)$ sont **parallèles** : on obtient une **configuration de Thalès** de sommet $O$.\n• **Si $k > 0$** : les triangles $OAB$ et $OA'B'$ sont **emboîtés**.\n• **Si $k < 0$** : c'est la configuration **papillon**.\n\nLes rapports de Thalès sont tous égaux à $|k|$ :\n$$\\frac{OA'}{OA} = \\frac{OB'}{OB} = \\frac{A'B'}{AB} = |k|$$\n*Exemple* : si $OA = 2$ cm, $OA' = 5$ cm et $AB = 3$ cm, alors $|k| = \\dfrac{5}{2} = 2{,}5$ et $A'B' = 2{,}5 \\times 3 = 7{,}5$ cm. Le théorème de Thalès et l'homothétie donnent le même résultat."
      },
      {
        "title": "À retenir pour le brevet",
        "content": "• Pour construire l'image $M'$ de $M$ par l'homothétie de centre $O$ et de rapport $k$ : $M'$ sur la droite $(OM)$, à la distance $OM' = |k| \\times OM$ de $O$.\n• $k > 0$ : même côté de $O$ ; $k < 0$ : de part et d'autre de $O$.\n• $|k| > 1$ : agrandissement ; $|k| < 1$ : réduction ; $k = -1$ : symétrie centrale.\n• Longueurs $\\times |k|$, aires $\\times k^2$, volumes $\\times |k|^3$ ; angles et parallélisme conservés.\n• Lien avec Thalès : l'image d'un segment $[AB]$ est parallèle à $[AB]$ ; $k > 0$ donne des triangles emboîtés, $k < 0$ une configuration papillon.\n\n**Automatismes** :\n• Rapport $3$ : une aire de $5$ cm² devient ? $\\to$ $45$ cm².\n• Rapport $\\dfrac{1}{2}$ : un volume de $80$ cm³ devient ? $\\to$ $10$ cm³.\n• $OA = 4$ et rapport $-2$ : $OA'$ ? $\\to$ $8$, de l'autre côté de $O$."
      }
    ],
    "methods": [
      {
        "title": "Modèle de rédaction (brevet) : Construire l'image d'une figure par une homothétie",
        "example": "Sur la figure ci-dessous, construire l'image $A'B'C'$ du triangle $ABC$ par l'homothétie de centre $O$ et de rapport $k = 2$.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 320 170\" width=\"320\" height=\"170\" style=\"max-width:300px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <line x1=\"30\" y1=\"115\" x2=\"145\" y2=\"15\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n    <line x1=\"30\" y1=\"115\" x2=\"215\" y2=\"140\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n    <line x1=\"30\" y1=\"115\" x2=\"120\" y2=\"140\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n    <polygon points=\"75,75 105,125 65,125\" fill=\"rgba(37, 99, 235, 0.12)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <circle cx=\"75\" cy=\"75\" r=\"3.5\" fill=\"var(--primary, #2563eb)\" />\n    <circle cx=\"105\" cy=\"125\" r=\"3.5\" fill=\"var(--primary, #2563eb)\" />\n    <circle cx=\"65\" cy=\"125\" r=\"3.5\" fill=\"var(--primary, #2563eb)\" />\n    <text x=\"70\" y=\"65\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">A</text>\n    <text x=\"110\" y=\"132\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">B</text>\n    <text x=\"52\" y=\"132\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">C</text>\n    <polygon points=\"120,35 180,135 100,135\" fill=\"rgba(16, 185, 129, 0.12)\" stroke=\"#10b981\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <circle cx=\"120\" cy=\"35\" r=\"3.5\" fill=\"#10b981\" />\n    <circle cx=\"180\" cy=\"135\" r=\"3.5\" fill=\"#10b981\" />\n    <circle cx=\"100\" cy=\"135\" r=\"3.5\" fill=\"#10b981\" />\n    <text x=\"120\" y=\"24\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#10b981\">A'</text>\n    <text x=\"194\" y=\"142\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#10b981\">B'</text>\n    <text x=\"90\" y=\"146\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#10b981\">C'</text>\n    <circle cx=\"30\" cy=\"115\" r=\"4\" fill=\"var(--text-main, #0f172a)\" />\n    <text x=\"16\" y=\"119\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">O</text>\n    <g class=\"geo-pill\">\n      <rect x=\"22\" y=\"58\" width=\"62\" height=\"19\" rx=\"4\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.2\" />\n      <text x=\"53\" y=\"71.5\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">OA = 3 cm</text>\n    </g>\n    <g class=\"geo-pill\">\n      <rect x=\"135\" y=\"48\" width=\"80\" height=\"19\" rx=\"4\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"#10b981\" stroke-width=\"1.2\" />\n      <text x=\"175\" y=\"61.5\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#10b981\">OA' = 2×3 = 6 cm</text>\n    </g>\n  </svg>\n</div>",
        "steps": [
          "**1. Tracer les demi-droites d'origine $O$** :\nTracer en pointillés les demi-droites $[OA)$, $[OB)$ et $[OC)$ issues du centre $O$ et passant par chaque sommet du triangle initial.",
          "**2. Calculer les distances des images** :\nLe rapport d'homothétie étant $k = 2$ ($k > 0$, les points $M$ et $M'$ sont du même côté de $O$) :\n• $OA' = 2 \\times OA = 2 \\times 3\\text{ cm} = 6\\text{ cm}$.\n• $OB' = 2 \\times OB$.\n• $OC' = 2 \\times OC$.",
          "**3. Placer les sommets images** :\nÀ la règle graduée, placer les points $A', B', C'$ sur les demi-droites respectives aux distances calculées.",
          "**4. Tracer la figure image** :\nRelier les points $A', B', C'$ pour obtenir le triangle agrandi $A'B'C'$ (ses longueurs sont 2 fois plus grandes et ses côtés sont parallèles à ceux de $ABC$)."
        ]
      },
      {
        "title": "Modèle de rédaction (brevet) : Calculer l'impact d'une homothétie sur une aire et un volume",
        "example": "Une maquette de bateau est réalisée à l'échelle 1/50 (homothétie de rapport k = 0,02). L'aire des voiles sur la maquette est 0,08 m² et le volume de la coque est 0,016 m³. Calculer l'aire et le volume réels.",
        "steps": [
          "**Étape 1 (Rapport d'agrandissement)** : Pour passer de la maquette au bateau réel, le coefficient d'agrandissement est $K = 50$.",
          "**Étape 2 (Calcul de l'aire réelle)** :\nL'aire est multipliée par $K^2 = 50^2 = 2\\,500$ :\n$$\\text{Aire réelle} = 0{,}08 \\times 50^2 = 0{,}08 \\times 2\\,500 = 200\\text{ m}^2$$",
          "**Étape 3 (Calcul du volume réel)** :\nLe volume est multiplié par $K^3 = 50^3 = 125\\,000$ :\n$$\\text{Volume réel} = 0{,}016 \\times 50^3 = 0{,}016 \\times 125\\,000 = 2\\,000\\text{ m}^3$$"
        ]
      },
      {
        "title": "Méthode : Homothétie de rapport négatif",
        "example": "Le triangle $ABC$ a une aire de $12$ cm² et $OA = 6$ cm. On construit son image $A'B'C'$ par l'homothétie de centre $O$ et de rapport $k = -0{,}5$. Où placer $A'$ ? Quelle est l'aire de $A'B'C'$ ?",
        "steps": [
          "**1. Position de $A'$** : $k < 0$, donc $A'$ est sur la droite $(OA)$, **de l'autre côté de $O$** par rapport à $A$.",
          "**2. Distance** : $OA' = |k| \\times OA = 0{,}5 \\times 6 = 3$ cm.",
          "**3. Aire** : les aires sont multipliées par $k^2 = (-0{,}5)^2 = 0{,}25$, donc $\\mathcal{A}' = 0{,}25 \\times 12 = 3$ cm².",
          "**4. Bilan** : c'est une réduction ($|k| < 1$) accompagnée d'un demi-tour autour de $O$."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans un rapport négatif, oublier d'inverser le côté par rapport au centre $O$ : pour $k = -2$, $M'$ est de l'autre côté de $O$ !",
      "⚠️ Multiplier une aire par $k$ au lieu de $k^2$, ou un volume par $k$ au lieu de $k^3$.",
      "⚠️ Le rapport se calcule « image sur départ » : si $OA = 4$ et $OA' = 10$, alors $|k| = \\dfrac{10}{4} = 2{,}5$ et non $0{,}4$."
    ],
    "flashcards": [
      {
        "q": "Par combien est multipliée l'aire d'une figure agrandie avec un rapport $k = 4$ ?",
        "a": "Par $k^2 = 4^2 = 16$ !"
      },
      {
        "q": "Par combien est multiplié le volume d'un solide réduit d'un facteur 1/2 ?",
        "a": "Par $(1/2)^3 = \\frac{1}{8}$ (il devient 8 fois plus petit)."
      },
      {
        "q": "À quelle transformation géométrique équivaut une homothétie de rapport $k = -1$ ?",
        "a": "À une **symétrie centrale** de centre $O$."
      },
      {
        "q": "Où se situe l'image $M'$ si le rapport d'homothétie est strictement négatif ($k < 0$) ?",
        "a": "De l'**autre côté du centre $O$** par rapport à $M$ ($O$ est entre $M$ et $M'$)."
      },
      {
        "q": "Si $A'$ et $B'$ sont les images de $A$ et $B$ par une homothétie de centre $O$, quelle configuration obtient-on ?",
        "a": "Une **configuration de Thalès** de sommet $O$ : $(A'B') // (AB)$ et $\\dfrac{OA'}{OA} = \\dfrac{OB'}{OB} = \\dfrac{A'B'}{AB} = |k|$."
      },
      {
        "q": "Une homothétie modifie-t-elle la mesure des angles d'un polygone ?",
        "a": "**Non**, l'homothétie conserve scrupuleusement la mesure des angles (les figures ont exactement la même forme)."
      },
      {
        "q": "Une homothétie de rapport $k = -3$ est-elle un agrandissement ?",
        "a": "Oui : $|k| = 3 > 1$ (avec en plus un demi-tour autour du centre)."
      }
    ]
  },
  "G4": {
    "title": "G4 : Sphère, Boule et Repérage terrestre",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Distinguer rigoureusement la sphère (surface creuse) de la boule (solide plein).",
      "Calculer l'aire d'une sphère de rayon $R$ (complément) : la formule $\\mathcal{A} = 4\\pi R^2$ est rappelée dans l'énoncé.",
      "Calculer le volume d'une boule de rayon $R$ : $\\mathcal{V} = \\frac{4}{3}\\pi R^3$.",
      "Identifier la section plane d'une sphère par un plan comme étant un cercle, lorsque le plan coupe la sphère.",
      "Se repérer sur la sphère terrestre par latitude (Nord/Sud par rapport à l'équateur) et longitude (Est/Ouest par rapport à Greenwich).",
      "Se repérer dans un pavé droit : abscisse, ordonnée et altitude d'un point."
    ],
    "keyPoints": [
      {
        "title": "1. Sphère vs Boule : Creux vs Plein",
        "content": "• **Sphère de centre $O$ et rayon $R$** : ensemble des points de l'espace situés à une distance exactement égale à $R$ du centre $O$ ($OM = R$). Elle est **vide à l'intérieur** : c'est une surface, comme l'enveloppe d'une balle de ping-pong.\n• **Boule de centre $O$ et rayon $R$** : ensemble des points de l'espace dont la distance à $O$ est inférieure ou égale à $R$ ($OM \\le R$). Elle est **pleine à l'intérieur** : c'est un solide, comme une boule de pétanque."
      },
      {
        "title": "2. Volume de la boule et aire de la sphère",
        "content": "• **Volume d'une boule de rayon $R$** (à connaître) : $$\\mathcal{V} = \\frac{4}{3}\\pi R^3$$\n• **Aire d'une sphère de rayon $R$** (**complément** : la formule est rappelée dans l'énoncé quand elle est utile) : $$\\mathcal{A} = 4\\pi R^2$$"
      },
      {
        "title": "3. Section plane d'une sphère par un plan",
        "content": "Soit $d$ la distance du plan au centre d'une sphère de rayon $R$ :\n• Si $d < R$, le plan **coupe la sphère** : la section est un **cercle**, dont le rayon $r$ vérifie, d'après Pythagore : $$r = \\sqrt{R^2 - d^2}$$\n• Si le plan passe par le centre $O$ ($d = 0$), la section est un **grand cercle** de rayon $R$.\n• Si $d = R$, le plan est **tangent** à la sphère : la section est réduite à un point.\n• Si $d > R$, le plan **ne rencontre pas** la sphère : il n'y a pas de section.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 320 205\" width=\"320\" height=\"205\" style=\"max-width:300px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle cx=\"140\" cy=\"115\" r=\"65\" fill=\"rgba(59, 130, 246, 0.04)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <ellipse cx=\"140\" cy=\"115\" rx=\"65\" ry=\"16\" fill=\"none\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1\" stroke-dasharray=\"3,3\" />\n    <polygon points=\"35,88 225,88 260,65 70,65\" fill=\"rgba(16, 185, 129, 0.12)\" stroke=\"#10b981\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n    <ellipse cx=\"140\" cy=\"79\" rx=\"54\" ry=\"13\" fill=\"rgba(16, 185, 129, 0.35)\" stroke=\"#059669\" stroke-width=\"2.2\" />\n    <line x1=\"140\" y1=\"115\" x2=\"140\" y2=\"79\" stroke=\"#ef4444\" stroke-width=\"2\" />\n    <line x1=\"140\" y1=\"79\" x2=\"194\" y2=\"79\" stroke=\"#059669\" stroke-width=\"2\" />\n    <line x1=\"140\" y1=\"115\" x2=\"194\" y2=\"79\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2.2\" />\n    <path d=\"M 140 87 L 148 87 L 148 79\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"1.3\" />\n    <circle cx=\"140\" cy=\"115\" r=\"3.5\" fill=\"var(--text-main, #0f172a)\" />\n    <circle cx=\"140\" cy=\"79\" r=\"3\" fill=\"#ef4444\" />\n    <circle cx=\"194\" cy=\"79\" r=\"3.5\" fill=\"var(--primary, #2563eb)\" />\n    <text x=\"126\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">O</text>\n    <text x=\"126\" y=\"77\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#ef4444\">H</text>\n    <text x=\"202\" y=\"78\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">M</text>\n    <text x=\"133\" y=\"100\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#ef4444\">d</text>\n    <text x=\"165\" y=\"73\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#059669\">r</text>\n    <text x=\"175\" y=\"107\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">R</text>\n    <g class=\"geo-pill\">\n      <rect x=\"175\" y=\"145\" width=\"135\" height=\"22\" rx=\"4\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"#059669\" stroke-width=\"1.2\" />\n      <text x=\"242\" y=\"160\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" font-weight=\"700\" fill=\"#059669\">r = √(R² - d²)</text>\n    </g>\n  </svg>\n</div>"
      },
      {
        "title": "4. Repérage sur la sphère terrestre",
        "content": "• **L'Équateur** : grand cercle de référence séparant l'hémisphère Nord et l'hémisphère Sud.\n• **Latitude** : angle mesuré depuis l'équateur vers le Nord ($0^\\circ$ à $90^\\circ$ N) ou vers le Sud ($0^\\circ$ à $90^\\circ$ S).\n• **Le méridien de Greenwich** : demi-cercle origine joignant les pôles.\n• **Longitude** : angle mesuré depuis Greenwich vers l'Est ($0^\\circ$ à $180^\\circ$ E) ou vers l'Ouest ($0^\\circ$ à $180^\\circ$ O).\n• Un point est repéré par le couple (latitude ; longitude), par exemple $M(40^\\circ\\text{ N} ; 50^\\circ\\text{ E})$ : $M$ est sur le parallèle situé à $40^\\circ$ au nord de l'équateur et sur le méridien situé à $50^\\circ$ à l'est de celui de Greenwich.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n<svg class=\"geo-svg-figure\" viewBox=\"-10 0 270 220\" width=\"270\" height=\"220\" style=\"max-width:280px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Sphère terrestre avec équateur, méridien de Greenwich et un point M repéré par sa latitude et sa longitude\">\n  <circle cx=\"120\" cy=\"110\" r=\"90\" fill=\"rgba(37, 99, 235, 0.06)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" />\n  <ellipse cx=\"120\" cy=\"110\" rx=\"90\" ry=\"22\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\" />\n  <ellipse cx=\"120\" cy=\"110\" rx=\"34\" ry=\"90\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2\" />\n  <ellipse cx=\"120\" cy=\"62\" rx=\"76\" ry=\"17\" fill=\"none\" stroke=\"var(--text-muted, #64748b)\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\" />\n  <circle cx=\"120\" cy=\"20\" r=\"3\" fill=\"var(--text-main, #0f172a)\" /><circle cx=\"120\" cy=\"200\" r=\"3\" fill=\"var(--text-main, #0f172a)\" />\n  <circle cx=\"171\" cy=\"77\" r=\"4\" fill=\"#dc2626\" />\n  <text x=\"120\" y=\"14\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Pôle Nord</text><text x=\"120\" y=\"216\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Pôle Sud</text>\n  <text x=\"176\" y=\"94\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#dc2626\">M</text>\n  <text x=\"212\" y=\"116\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#b45309\">équateur</text>\n  <text x=\"54\" y=\"172\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#047857\">méridien de</text><text x=\"54\" y=\"184\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#047857\">Greenwich</text>\n  <text x=\"200\" y=\"52\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"var(--text-muted, #64748b)\">parallèle</text>\n</svg>\n</div>\n"
      },
      {
        "title": "5. Se repérer dans un pavé droit (rappel de 4e)",
        "content": "Sur la sphère, deux nombres suffisent ; dans un pavé droit, il en faut trois. On choisit un sommet comme **origine**, ici $A$, et les trois arêtes qui en partent comme axes :\n• l'axe des **abscisses** est porté par $(AB)$ ;\n• l'axe des **ordonnées** est porté par $(AD)$ ;\n• l'axe des **altitudes** est porté par $(AE)$.\n\nUn point est repéré par trois nombres, toujours dans cet ordre : $(\\text{abscisse} ; \\text{ordonnée} ; \\text{altitude})$.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 310 195\" width=\"310\" height=\"195\" style=\"max-width:310px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Pavé droit ABCDEFGH en perspective cavalière, avec les axes portés par les arêtes issues de A\">\n    <polygon points=\"60,170 220,170 220,80 60,80\" fill=\"rgba(37, 99, 235, 0.08)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.6\" stroke-linejoin=\"round\" />\n    <polygon points=\"220,170 280,125 280,35 220,80\" fill=\"rgba(37, 99, 235, 0.05)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.6\" stroke-linejoin=\"round\" />\n    <polygon points=\"60,80 220,80 280,35 120,35\" fill=\"rgba(37, 99, 235, 0.05)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.6\" stroke-linejoin=\"round\" />\n    <line x1=\"120\" y1=\"125\" x2=\"280\" y2=\"125\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.3\" stroke-dasharray=\"5 4\" />\n    <line x1=\"120\" y1=\"125\" x2=\"120\" y2=\"35\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.3\" stroke-dasharray=\"5 4\" />\n    <line x1=\"60\" y1=\"170\" x2=\"220\" y2=\"170\" stroke=\"#2563eb\" stroke-width=\"2.6\" />\n    <polygon points=\"220,170 211,165.5 211,174.5\" fill=\"#2563eb\" />\n    <line x1=\"60\" y1=\"170\" x2=\"120\" y2=\"125\" stroke=\"#10b981\" stroke-width=\"2.6\" stroke-dasharray=\"5 4\" />\n    <polygon points=\"120,125 115.2,133.6 110.4,127.2\" fill=\"#10b981\" />\n    <line x1=\"60\" y1=\"170\" x2=\"60\" y2=\"80\" stroke=\"#d97706\" stroke-width=\"2.6\" />\n    <polygon points=\"60,80 55.5,89 64.5,89\" fill=\"#d97706\" />\n    <g font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #334155)\">\n      <text x=\"49\" y=\"182\">A</text>\n      <text x=\"224\" y=\"184\">B</text>\n      <text x=\"286\" y=\"133\">C</text>\n      <text x=\"125\" y=\"139\">D</text>\n      <text x=\"47\" y=\"76\">E</text>\n      <text x=\"208\" y=\"75\">F</text>\n      <text x=\"285\" y=\"32\">G</text>\n      <text x=\"108\" y=\"30\">H</text>\n    </g>\n    <g font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\">\n      <text x=\"140\" y=\"186\" text-anchor=\"middle\" fill=\"#2563eb\">abscisses</text>\n      <text x=\"116\" y=\"117\" text-anchor=\"end\" fill=\"#10b981\">ordonnées</text>\n      <text x=\"54\" y=\"128\" text-anchor=\"end\" fill=\"#d97706\">altitudes</text>\n    </g>\n  </svg>\n</div>\n\nPour trouver les coordonnées d'un point, on part de $A$ et on regarde de combien il faut avancer le long de chaque axe.\n*(Exemple : si $AB = 5$, $AD = 3$ et $AE = 2$, alors $B(5 ; 0 ; 0)$, $D(0 ; 3 ; 0)$, $E(0 ; 0 ; 2)$, $C(5 ; 3 ; 0)$ et $G(5 ; 3 ; 2)$.)*"
      },
      {
        "title": "À retenir pour le brevet",
        "content": "• Boule (solide) : $\\mathcal{V} = \\dfrac{4}{3}\\pi R^3$, à connaître.\n• Sphère (surface) : $\\mathcal{A} = 4\\pi R^2$, en complément : la formule est rappelée dans l'énoncé quand elle est utile.\n• Section d'une sphère par un plan qui la coupe ($d < R$) : un cercle, de rayon $r = \\sqrt{R^2 - d^2}$ (Pythagore).\n• Latitude : nord/sud de l'équateur ($0^\\circ$ à $90^\\circ$) ; longitude : est/ouest de Greenwich ($0^\\circ$ à $180^\\circ$).\n• Dans un pavé droit d'origine $A$ : un point est repéré par (abscisse ; ordonnée ; altitude).\n• Valeur exacte avec $\\pi$, puis arrondi.\n\n**Automatismes** :\n• Volume d'une boule de rayon $3$ cm (valeur exacte) ? $\\to$ $36\\pi$ cm³.\n• Aire d'une sphère de diamètre $10$ cm, sachant que $\\mathcal{A} = 4\\pi R^2$ ? $\\to$ $4\\pi \\times 5^2 = 100\\pi$ cm².\n• Latitude de l'équateur ? $\\to$ $0^\\circ$ ; d'un pôle ? $\\to$ $90^\\circ$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer le volume d'une boule et l'aire d'une sphère",
        "example": "Calculer l'aire et le volume d'une boule de rayon R = 6 cm.",
        "steps": [
          "**Étape 1 (Aire)** : $\\mathcal{A} = 4\\pi R^2 = 4 \\times \\pi \\times 6^2 = 144\\pi \\approx 452{,}4 \\text{ cm}^2$.",
          "**Étape 2 (Volume)** : $\\mathcal{V} = \\frac{4}{3}\\pi R^3 = \\frac{4}{3} \\times \\pi \\times 6^3 = \\frac{4}{3} \\times 216\\pi = 288\\pi \\approx 904{,}8 \\text{ cm}^3$."
        ]
      },
      {
        "title": "Modèle de rédaction (brevet) : Calculer le rayon de la section d'une sphère",
        "example": "Une sphère de centre $O$ et de rayon $R = 5\\text{ cm}$ est coupée par un plan situé à une distance $d = 3\\text{ cm}$ du centre $O$. Le point $H$ est le centre du cercle de section et $M$ est un point de ce cercle. Calculer le rayon $r$ du cercle de section.",
        "steps": [
          "**1. Identifier le triangle rectangle** :\nComme $d = 3 < R = 5$, le plan coupe la sphère : la section est un **cercle** de centre $H$ et de rayon $r = HM$.\nLe triangle $OHM$ est rectangle en $H$ avec $OH = d = 3\\text{ cm}$ et $OM = R = 5\\text{ cm}$ (rayon de la sphère).",
          "**2. Citer le théorème de Pythagore** :\nDans le triangle $OHM$ rectangle en $H$, d'après le théorème de Pythagore :\n$$OM^2 = OH^2 + HM^2$$",
          "**3. Remplacer par les valeurs numériques et isoler $r^2$** :\n$$5^2 = 3^2 + r^2$$\n$$25 = 9 + r^2$$\n$$r^2 = 25 - 9 = 16$$",
          "**4. Conclure par la racine carrée** :\n$$r = \\sqrt{16} = 4\\text{ cm}$$\nLe rayon du cercle de section mesure exactement **$4\\text{ cm}$**."
        ]
      }
    ],
    "traps": [
      "⚠️ Confondre rayon et diamètre : si l'énoncé donne un diamètre de 10 cm, le rayon vaut **$R = 5$ cm** !",
      "⚠️ Dans le volume de la boule, oublier la puissance 3 sur le rayon : c'est $R^3$ ($R \\times R \\times R$) et non $R^2$ !",
      "⚠️ Confondre latitude (Nord/Sud) et longitude (Est/Ouest)."
    ],
    "flashcards": [
      {
        "q": "Quelle est la formule de l'aire d'une sphère de rayon R ? (complément)",
        "a": "$$\\mathcal{A} = 4\\pi R^2$$ Elle est rappelée dans l'énoncé quand elle est utile."
      },
      {
        "q": "Quelle est la formule du volume d'une boule de rayon R ?",
        "a": "$$\\mathcal{V} = \\frac{4}{3}\\pi R^3$$"
      },
      {
        "q": "Quelle est la section d'une sphère par un plan ?",
        "a": "C'est un **cercle** lorsque le plan coupe la sphère ($d < R$), un point si le plan est tangent ($d = R$), et il n'y a pas de section si le plan ne la rencontre pas ($d > R$)."
      },
      {
        "q": "Quel est le parallèle d'origine pour la mesure des latitudes ?",
        "a": "L'**Équateur** (latitude $0^\\circ$)."
      },
      {
        "q": "Quel est le méridien d'origine pour la mesure des longitudes ?",
        "a": "Le **Méridien de Greenwich** (longitude $0^\\circ$)."
      },
      {
        "q": "Une sphère de rayon 13 cm est coupée par un plan à 5 cm du centre. Rayon de la section ?",
        "a": "$r = \\sqrt{13^2 - 5^2} = \\sqrt{144} = 12$ cm."
      }
    ]
  },
  "G5": {
    "title": "G5 : Géométrie dans l'espace et Sections planes",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Reconnaître et caractériser les solides usuels (pavé droit, prisme, cylindre, pyramide, cône).",
      "Déterminer la nature géométrique de la section plane d'un pavé droit par un plan.",
      "Déterminer la section plane d'un cylindre de révolution par un plan.",
      "Déterminer la section plane d'une pyramide ou d'un cône par un plan parallèle à la base.",
      "Calculer des volumes de solides composés et utiliser les patrons du cylindre et du cône.",
      "Décrire les vues de face, de dessus et de côté d'un solide."
    ],
    "keyPoints": [
      {
        "title": "1. Section plane d'un pavé droit (parallélépipède rectangle)",
        "content": "• Par un plan **parallèle à une face** : la section est un **rectangle** de mêmes dimensions que cette face (ou un carré si la face est carrée).\n• Par un plan **parallèle à une arête** : la section est un **rectangle**.\n\n<div class=\"geo-figure-wrapper\" style=\"display:flex; justify-content:center; gap:1.5rem; flex-wrap:wrap; margin:1rem 0;\">\n  <div style=\"text-align:center;\">\n    <svg class=\"geo-svg-figure\" viewBox=\"0 0 250 185\" width=\"250\" height=\"185\" style=\"max-width:240px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon points=\"15,110 165,110 220,70 70,70\" fill=\"rgba(16, 185, 129, 0.12)\" stroke=\"#10b981\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n      <line x1=\"85\" y1=\"110\" x2=\"85\" y2=\"30\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n      <line x1=\"40\" y1=\"145\" x2=\"85\" y2=\"110\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n      <line x1=\"85\" y1=\"110\" x2=\"195\" y2=\"110\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n      <polygon points=\"40,105 150,105 195,70 85,70\" fill=\"rgba(16, 185, 129, 0.35)\" stroke=\"#059669\" stroke-width=\"2.2\" stroke-linejoin=\"round\" />\n      <polygon points=\"40,65 150,65 150,145 40,145\" fill=\"none\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <line x1=\"40\" y1=\"65\" x2=\"85\" y2=\"30\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <line x1=\"150\" y1=\"65\" x2=\"195\" y2=\"30\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <line x1=\"150\" y1=\"145\" x2=\"195\" y2=\"110\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <line x1=\"85\" y1=\"30\" x2=\"195\" y2=\"30\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <line x1=\"195\" y1=\"30\" x2=\"195\" y2=\"110\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <text x=\"117\" y=\"91\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#047857\">Section Rectangle</text>\n      <text x=\"125\" y=\"172\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"#10b981\">Plan // à une face</text>\n    </svg>\n  </div>\n  <div style=\"text-align:center;\">\n    <svg class=\"geo-svg-figure\" viewBox=\"0 0 250 185\" width=\"250\" height=\"185\" style=\"max-width:240px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon points=\"45,72 185,25 185,115 45,162\" fill=\"rgba(37, 99, 235, 0.12)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n      <line x1=\"85\" y1=\"110\" x2=\"85\" y2=\"30\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n      <line x1=\"40\" y1=\"145\" x2=\"85\" y2=\"110\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n      <line x1=\"85\" y1=\"110\" x2=\"195\" y2=\"110\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n      <polygon points=\"70,65 165,30 165,110 70,145\" fill=\"rgba(37, 99, 235, 0.35)\" stroke=\"#1d4ed8\" stroke-width=\"2.2\" stroke-linejoin=\"round\" />\n      <polygon points=\"40,65 150,65 150,145 40,145\" fill=\"none\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <line x1=\"40\" y1=\"65\" x2=\"85\" y2=\"30\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <line x1=\"150\" y1=\"65\" x2=\"195\" y2=\"30\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <line x1=\"150\" y1=\"145\" x2=\"195\" y2=\"110\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <line x1=\"85\" y1=\"30\" x2=\"195\" y2=\"30\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <line x1=\"195\" y1=\"30\" x2=\"195\" y2=\"110\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <text x=\"117\" y=\"93\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e40af\">Section Rectangle</text>\n      <text x=\"125\" y=\"172\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"var(--primary, #2563eb)\">Plan // à une arête</text>\n    </svg>\n  </div>\n</div>"
      },
      {
        "title": "2. Section plane d'un cylindre de révolution",
        "content": "• Par un plan **perpendiculaire à l'axe** (parallèle aux bases) : la section est un **disque** de même rayon que les bases.\n• Par un plan **parallèle à l'axe** : la section est un **rectangle**.\n\n<div class=\"geo-figure-wrapper\" style=\"display:flex; justify-content:center; gap:1.5rem; flex-wrap:wrap; margin:1rem 0;\">\n  <div style=\"text-align:center;\">\n    <svg class=\"geo-svg-figure\" viewBox=\"0 0 250 190\" width=\"250\" height=\"190\" style=\"max-width:240px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon points=\"25,96 185,96 225,76 65,76\" fill=\"rgba(16, 185, 129, 0.12)\" stroke=\"#10b981\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n      <line x1=\"125\" y1=\"20\" x2=\"125\" y2=\"160\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"4,3\" />\n      <path d=\"M 73 142 A 52 15 0 0 1 177 142\" fill=\"none\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n      <ellipse cx=\"125\" cy=\"88\" rx=\"52\" ry=\"15\" fill=\"rgba(16, 185, 129, 0.35)\" stroke=\"#059669\" stroke-width=\"2.2\" />\n      <line x1=\"125\" y1=\"88\" x2=\"177\" y2=\"88\" stroke=\"#059669\" stroke-width=\"1.8\" />\n      <circle cx=\"125\" cy=\"88\" r=\"3\" fill=\"#059669\" />\n      <circle cx=\"177\" cy=\"88\" r=\"3\" fill=\"#059669\" />\n      <text x=\"151\" y=\"82\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#059669\">r</text>\n      <path d=\"M 125 96 L 133 96 L 133 88\" fill=\"none\" stroke=\"#059669\" stroke-width=\"1.2\" />\n      <line x1=\"73\" y1=\"38\" x2=\"73\" y2=\"142\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <line x1=\"177\" y1=\"38\" x2=\"177\" y2=\"142\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <ellipse cx=\"125\" cy=\"38\" rx=\"52\" ry=\"15\" fill=\"none\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <path d=\"M 73 142 A 52 15 0 0 0 177 142\" fill=\"none\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <text x=\"125\" y=\"178\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"#10b981\">Plan ⟂ à l'axe → Cercle (rayon r)</text>\n    </svg>\n  </div>\n  <div style=\"text-align:center;\">\n    <svg class=\"geo-svg-figure\" viewBox=\"0 0 250 190\" width=\"250\" height=\"190\" style=\"max-width:240px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon points=\"76,28 174,28 174,152 76,152\" fill=\"rgba(37, 99, 235, 0.12)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n      <line x1=\"125\" y1=\"20\" x2=\"125\" y2=\"160\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"4,3\" />\n      <path d=\"M 73 142 A 52 15 0 0 1 177 142\" fill=\"none\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n      <rect x=\"88\" y=\"38\" width=\"74\" height=\"104\" fill=\"rgba(37, 99, 235, 0.35)\" stroke=\"#1d4ed8\" stroke-width=\"2.2\" rx=\"1\" />\n      <line x1=\"73\" y1=\"38\" x2=\"73\" y2=\"142\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <line x1=\"177\" y1=\"38\" x2=\"177\" y2=\"142\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <ellipse cx=\"125\" cy=\"38\" rx=\"52\" ry=\"15\" fill=\"none\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <path d=\"M 73 142 A 52 15 0 0 0 177 142\" fill=\"none\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <text x=\"125\" y=\"94\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1e40af\">Section Rectangle</text>\n      <text x=\"125\" y=\"178\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"var(--primary, #2563eb)\">Plan // à l'axe → Rectangle</text>\n    </svg>\n  </div>\n</div>"
      },
      {
        "title": "3. Section d'une pyramide ou d'un cône parallèle à la base",
        "content": "La section d'une pyramide (ou d'un cône) par un plan parallèle à sa base est une **réduction de la base** :\n• Le rapport de réduction est $k = \\frac{h'}{h} = \\frac{\\text{hauteur du petit solide}}{\\text{hauteur du grand solide}}$.\n• Le petit cône (ou petite pyramide) au sommet est une réduction du solide initial de rapport $k$ :\n  - Rayon de la section : $r' = k \\times r$\n  - Aire de la section : $\\mathcal{A}' = k^2 \\times \\mathcal{A}$\n  - Volume du petit solide : $\\mathcal{V}' = k^3 \\times \\mathcal{V}$.\n\n<div class=\"geo-figure-wrapper\" style=\"display:flex; justify-content:center; gap:1.5rem; flex-wrap:wrap; margin:1rem 0;\">\n  <div style=\"text-align:center;\">\n    <svg class=\"geo-svg-figure\" viewBox=\"0 0 250 195\" width=\"250\" height=\"195\" style=\"max-width:240px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon points=\"50,96 185,96 215,78 80,78\" fill=\"rgba(16, 185, 129, 0.12)\" stroke=\"#10b981\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n      <line x1=\"125\" y1=\"25\" x2=\"125\" y2=\"155\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"4,3\" />\n      <path d=\"M 70 155 A 55 15 0 0 1 180 155\" fill=\"none\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n      <ellipse cx=\"125\" cy=\"88\" rx=\"28\" ry=\"8\" fill=\"rgba(16, 185, 129, 0.35)\" stroke=\"#059669\" stroke-width=\"2\" />\n      <line x1=\"125\" y1=\"88\" x2=\"153\" y2=\"88\" stroke=\"#059669\" stroke-width=\"1.5\" />\n      <text x=\"140\" y=\"83\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#059669\">r'</text>\n      <path d=\"M 70 155 A 55 15 0 0 0 180 155\" fill=\"none\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <line x1=\"125\" y1=\"155\" x2=\"180\" y2=\"155\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\" />\n      <text x=\"155\" y=\"150\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"var(--text-main, #334155)\">r</text>\n      <line x1=\"125\" y1=\"25\" x2=\"70\" y2=\"155\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <line x1=\"125\" y1=\"25\" x2=\"180\" y2=\"155\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <circle cx=\"125\" cy=\"25\" r=\"3\" fill=\"var(--text-main, #334155)\" />\n      <text x=\"125\" y=\"18\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #334155)\">S</text>\n      <text x=\"110\" y=\"58\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#059669\">h'</text>\n      <text x=\"110\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"var(--text-muted, #64748b)\">h</text>\n      <text x=\"125\" y=\"182\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"#10b981\">Cône : Cercle réduit (r' = k × r)</text>\n    </svg>\n  </div>\n  <div style=\"text-align:center;\">\n    <svg class=\"geo-svg-figure\" viewBox=\"0 0 250 195\" width=\"250\" height=\"195\" style=\"max-width:240px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon points=\"50,90 190,90 220,72 80,72\" fill=\"rgba(37, 99, 235, 0.12)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n      <line x1=\"60\" y1=\"145\" x2=\"95\" y2=\"115\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n      <line x1=\"95\" y1=\"115\" x2=\"200\" y2=\"115\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n      <line x1=\"125\" y1=\"25\" x2=\"95\" y2=\"115\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n      <polygon points=\"92,85 147,85 162,70 107,70\" fill=\"rgba(37, 99, 235, 0.35)\" stroke=\"#1d4ed8\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n      <line x1=\"60\" y1=\"145\" x2=\"165\" y2=\"145\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <line x1=\"165\" y1=\"145\" x2=\"200\" y2=\"115\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <line x1=\"125\" y1=\"25\" x2=\"60\" y2=\"145\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <line x1=\"125\" y1=\"25\" x2=\"165\" y2=\"145\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <line x1=\"125\" y1=\"25\" x2=\"200\" y2=\"115\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n      <circle cx=\"125\" cy=\"25\" r=\"3\" fill=\"var(--text-main, #334155)\" />\n      <text x=\"125\" y=\"18\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #334155)\">S</text>\n      <text x=\"125\" y=\"182\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"var(--primary, #2563eb)\">Pyramide : Polygone réduit (k²)</text>\n    </svg>\n  </div>\n</div>"
      },
      {
        "title": "4. Récapitulatif des formules de volumes usuelles",
        "content": "• Cube : $V = c^3$ | Pavé droit : $V = L \\times l \\times h$\n• Prisme et Cylindre : $V = \\mathcal{B} \\times h$ (Cylindre : $\\pi r^2 h$)\n• Pyramide et Cône : $V = \\frac{1}{3} \\times \\mathcal{B} \\times h$ (Cône : $\\frac{1}{3}\\pi r^2 h$)\n• Boule : $V = \\frac{4}{3}\\pi R^3$"
      },
      {
        "title": "5. Patrons et vues d'un solide",
        "content": "Un **patron** d'un solide est une figure plane qui, une fois pliée, permet de reconstituer ce solide sans superposition.\n• **Patron d'un cylindre de révolution** (rayon $r$, hauteur $h$) : un **rectangle** de côtés $h$ et $2\\pi r$, et **deux disques** de rayon $r$. Le côté de longueur $2\\pi r$ s'enroule autour de la base : c'est le périmètre du disque de base.\n• **Patron d'un cône de révolution** (rayon de base $r$) : un **disque** de rayon $r$ et un **secteur de disque** (une portion de disque) de rayon $g$. La **génératrice** $g$ est la longueur qui joint le sommet à un point du cercle de base ; dans le triangle rectangle formé avec la hauteur $h$ et le rayon $r$, on a $g^2 = h^2 + r^2$.\n• L'arc du secteur s'enroule autour de la base : sa longueur est $2\\pi r$. Cet arc représente la fraction $\\dfrac{2\\pi r}{2\\pi g} = \\dfrac{r}{g}$ du cercle de rayon $g$, donc l'angle du secteur vaut $\\dfrac{r}{g} \\times 360^\\circ$.\n\n<div class=\"geo-figure-wrapper\" style=\"display:flex; justify-content:center; gap:1.5rem; flex-wrap:wrap; margin:1rem 0;\">\n  <div style=\"text-align:center;\">\n    <svg class=\"geo-svg-figure\" viewBox=\"0 0 230 222\" width=\"230\" height=\"222\" style=\"max-width:230px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Patron d'un cylindre : un rectangle de côtés h et 2 pi r, et deux disques de rayon r.\">\n      <rect x=\"35\" y=\"58\" width=\"160\" height=\"90\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n      <circle cx=\"115\" cy=\"32.5\" r=\"25.5\" fill=\"rgba(16, 185, 129, 0.18)\" stroke=\"#059669\" stroke-width=\"1.8\" />\n      <circle cx=\"115\" cy=\"173.5\" r=\"25.5\" fill=\"rgba(16, 185, 129, 0.18)\" stroke=\"#059669\" stroke-width=\"1.8\" />\n      <line x1=\"115\" y1=\"32.5\" x2=\"140.5\" y2=\"32.5\" stroke=\"#059669\" stroke-width=\"1.6\" />\n      <circle cx=\"115\" cy=\"32.5\" r=\"2.5\" fill=\"#059669\" />\n      <text x=\"128\" y=\"27\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#059669\" font-style=\"italic\">r</text>\n      <text x=\"115\" y=\"100\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">longueur 2πr</text>\n      <text x=\"115\" y=\"116\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">(périmètre de la base)</text>\n      <text x=\"208\" y=\"107\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\" font-style=\"italic\">h</text>\n      <text x=\"115\" y=\"216\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Patron du cylindre</text>\n    </svg>\n  </div>\n  <div style=\"text-align:center;\">\n    <svg class=\"geo-svg-figure\" viewBox=\"0 0 230 222\" width=\"230\" height=\"222\" style=\"max-width:230px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Patron d'un cône : un secteur de disque de rayon g dont l'arc mesure 2 pi r, et un disque de rayon r.\">\n      <path d=\"M 115 34 L 48.43 12.37 A 70 70 0 1 0 181.57 12.37 Z\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" stroke-linejoin=\"round\" />\n      <circle cx=\"115\" cy=\"146\" r=\"42\" fill=\"rgba(16, 185, 129, 0.18)\" stroke=\"#059669\" stroke-width=\"1.8\" />\n      <line x1=\"115\" y1=\"146\" x2=\"157\" y2=\"146\" stroke=\"#059669\" stroke-width=\"1.6\" />\n      <circle cx=\"115\" cy=\"146\" r=\"2.5\" fill=\"#059669\" />\n      <circle cx=\"115\" cy=\"34\" r=\"2.5\" fill=\"var(--primary, #2563eb)\" />\n      <text x=\"136\" y=\"141\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#059669\" font-style=\"italic\">r</text>\n      <text x=\"115\" y=\"27\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">S</text>\n      <text x=\"152\" y=\"18\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\" font-style=\"italic\">g</text>\n      <text x=\"115\" y=\"74\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">arc de longueur</text>\n      <text x=\"115\" y=\"90\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">2πr</text>\n      <text x=\"115\" y=\"216\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Patron du cône</text>\n    </svg>\n  </div>\n</div>\n\nUne **vue** d'un solide est le dessin de ce que l'on voit lorsqu'on le regarde bien en face, dans une direction donnée : **de face**, **de dessus** ou **de côté**.\n• Cylindre posé sur une base : de face, un **rectangle** de largeur $2r$ et de hauteur $h$ ; de dessus, un **disque** de rayon $r$.\n• Cône posé sur sa base : de face, un **triangle isocèle** de base $2r$ et de hauteur $h$ ; de dessus, un **disque** de rayon $r$ (son centre marque le sommet).\n• Pyramide régulière à base carrée posée sur sa base, regardée en face d'un côté de la base : un **triangle isocèle** ; de dessus, un **carré** avec ses deux diagonales (les arêtes latérales).\n• Pavé droit : un **rectangle** dans chaque direction. Boule : un **disque** de même rayon dans toutes les directions.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 320 130\" width=\"320\" height=\"130\" style=\"max-width:320px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Un cône posé sur sa base, sa vue de face (un triangle isocèle) et sa vue de dessus (un disque avec son centre).\">\n    <path d=\"M 50 14 L 14 92 A 36 10 0 0 0 86 92 Z\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" stroke-linejoin=\"round\" />\n    <path d=\"M 14 92 A 36 10 0 0 1 86 92\" fill=\"none\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.2\" stroke-dasharray=\"4,3\" />\n    <polygon points=\"125,92 197,92 161,14\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" stroke-linejoin=\"round\" />\n    <circle cx=\"272\" cy=\"56\" r=\"36\" fill=\"rgba(16, 185, 129, 0.18)\" stroke=\"#059669\" stroke-width=\"1.8\" />\n    <circle cx=\"272\" cy=\"56\" r=\"2.5\" fill=\"#059669\" />\n    <text x=\"50\" y=\"122\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Cône</text>\n    <text x=\"161\" y=\"122\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Vue de face</text>\n    <text x=\"272\" y=\"122\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Vue de dessus</text>\n  </svg>\n</div>"
      },
      {
        "title": "À retenir pour le brevet",
        "content": "• Pavé : section parallèle à une face $\\to$ rectangle identique à la face ; parallèle à une arête $\\to$ rectangle.\n• Cylindre : perpendiculaire à l'axe $\\to$ disque de même rayon ; parallèle à l'axe $\\to$ rectangle.\n• Pyramide, cône coupés parallèlement à la base : réduction de rapport $k = \\dfrac{h'}{h}$ (aires $\\times k^2$, volumes $\\times k^3$).\n• Volumes : prisme et cylindre $\\mathcal{B} \\times h$ ; pyramide et cône $\\dfrac{\\mathcal{B} \\times h}{3}$ ; boule $\\dfrac{4}{3}\\pi R^3$.\n• Patrons : cylindre $\\to$ rectangle de côtés $h$ et $2\\pi r$, et deux disques ; cône $\\to$ disque et secteur dont l'arc mesure $2\\pi r$.\n• Vues d'un cylindre posé sur une base : de face, un rectangle ; de dessus, un disque. Vues d'un cône posé sur sa base : de face, un triangle isocèle ; de dessus, un disque.\n\n**Automatismes** :\n• Vue de dessus d'un cône posé sur sa base ? $\\to$ un disque.\n• Longueur du rectangle du patron d'un cylindre de rayon $r$ ? $\\to$ $2\\pi r$.\n• Volume d'un cylindre de rayon $1$ et de hauteur $3$ ? $\\to$ $3\\pi$.\n• Cône coupé au tiers de sa hauteur depuis le sommet ($k = \\dfrac{1}{3}$) : volume du petit cône ? $\\to$ $\\dfrac{1}{27}$ du grand.\n• $1$ m³ $=$ ? L $\\to$ $1\\,000$ L."
      }
    ],
    "methods": [
      {
        "title": "Modèle de rédaction (brevet) : Calculer le volume d'un cône tronqué (tronc de cône)",
        "example": "Un cône de révolution de sommet $S$, de hauteur $h = 12\\text{ cm}$ et de rayon de base $R = 4\\text{ cm}$ est coupé à mi-hauteur ($h' = 6\\text{ cm}$) par un plan parallèle à la base. Calculer la valeur exacte puis arrondie au $\\text{cm}^3$ près du volume du tronc de cône restant.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 340 210\" width=\"340\" height=\"210\" style=\"max-width:300px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <line x1=\"45\" y1=\"25\" x2=\"45\" y2=\"165\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" />\n    <line x1=\"40\" y1=\"25\" x2=\"50\" y2=\"25\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" />\n    <line x1=\"40\" y1=\"95\" x2=\"50\" y2=\"95\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" />\n    <line x1=\"40\" y1=\"165\" x2=\"50\" y2=\"165\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" />\n    <text x=\"35\" y=\"63\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#2563eb\">h' = 6 cm</text>\n    <text x=\"35\" y=\"135\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #334155)\">h = 12 cm</text>\n    <path d=\"M 125 95 L 95 165 A 60 15 0 0 0 215 165 L 185 95 A 30 8 0 0 1 125 95\" fill=\"rgba(16, 185, 129, 0.2)\" stroke=\"#10b981\" stroke-width=\"2\" />\n    <path d=\"M 95 165 A 60 15 0 0 1 215 165\" fill=\"none\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n    <path d=\"M 95 165 A 60 15 0 0 0 215 165\" fill=\"none\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <line x1=\"155\" y1=\"165\" x2=\"215\" y2=\"165\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.8\" />\n    <circle cx=\"155\" cy=\"165\" r=\"3\" fill=\"var(--text-main, #334155)\" />\n    <circle cx=\"215\" cy=\"165\" r=\"3\" fill=\"var(--text-main, #334155)\" />\n    <ellipse cx=\"155\" cy=\"95\" rx=\"30\" ry=\"8\" fill=\"rgba(37, 99, 235, 0.25)\" stroke=\"#2563eb\" stroke-width=\"2\" />\n    <line x1=\"155\" y1=\"95\" x2=\"185\" y2=\"95\" stroke=\"#2563eb\" stroke-width=\"1.8\" />\n    <circle cx=\"155\" cy=\"95\" r=\"2.5\" fill=\"#2563eb\" />\n    <circle cx=\"185\" cy=\"95\" r=\"2.5\" fill=\"#2563eb\" />\n    <line x1=\"155\" y1=\"25\" x2=\"125\" y2=\"95\" stroke=\"#2563eb\" stroke-width=\"1.8\" />\n    <line x1=\"155\" y1=\"25\" x2=\"185\" y2=\"95\" stroke=\"#2563eb\" stroke-width=\"1.8\" />\n    <circle cx=\"155\" cy=\"25\" r=\"3.5\" fill=\"var(--text-main, #334155)\" />\n    <text x=\"155\" y=\"18\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #334155)\">S</text>\n    <g class=\"geo-pill\">\n      <rect x=\"198\" y=\"84\" width=\"68\" height=\"19\" rx=\"4\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"#2563eb\" stroke-width=\"1.2\" />\n      <text x=\"232\" y=\"97\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"9.5\" font-weight=\"700\" fill=\"#2563eb\">r' = 2 cm</text>\n    </g>\n    <g class=\"geo-pill\">\n      <rect x=\"226\" y=\"154\" width=\"72\" height=\"19\" rx=\"4\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.2\" />\n      <text x=\"262\" y=\"167\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"9.5\" font-weight=\"700\" fill=\"var(--text-main, #334155)\">R = 4 cm</text>\n    </g>\n    <g class=\"geo-pill\">\n      <rect x=\"190\" y=\"38\" width=\"135\" height=\"20\" rx=\"4\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"1.2\" />\n      <text x=\"257\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#1d4ed8\">V(petit) = 8π cm³</text>\n    </g>\n    <g class=\"geo-pill\">\n      <rect x=\"190\" y=\"120\" width=\"135\" height=\"20\" rx=\"4\" fill=\"#ecfdf5\" stroke=\"#10b981\" stroke-width=\"1.2\" />\n      <text x=\"257\" y=\"134\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#047857\">V(tronc) = 56π cm³</text>\n    </g>\n  </svg>\n</div>",
        "steps": [
          "**1. Calculer le coefficient de réduction $k$** :\nLe plan coupe le cône parallèlement à la base, donc le petit cône est une réduction du grand cône de rapport :\n$$k = \\frac{h'}{h} = \\frac{6}{12} = 0{,}5 = \\frac{1}{2}$$",
          "**2. Calculer le volume du grand cône initial** :\n$$V_{\\text{grand}} = \\frac{1}{3} \\times \\pi \\times R^2 \\times h = \\frac{1}{3} \\times \\pi \\times 4^2 \\times 12 = 64\\pi \\approx 201{,}1\\text{ cm}^3$$",
          "**3. Calculer le volume du petit cône sommital** :\nDans un agrandissement/réduction de rapport $k$, les volumes sont multipliés par $k^3$ :\n$$V_{\\text{petit}} = k^3 \\times V_{\\text{grand}} = 0{,}5^3 \\times 64\\pi = \\frac{1}{8} \\times 64\\pi = 8\\pi \\approx 25{,}1\\text{ cm}^3$$",
          "**4. En déduire le volume du tronc de cône par soustraction** :\n$$V_{\\text{tronc}} = V_{\\text{grand}} - V_{\\text{petit}} = 64\\pi - 8\\pi = 56\\pi\\text{ cm}^3$$\nSoit environ **$176\\text{ cm}^3$** au $\\text{cm}^3$ près."
        ]
      },
      {
        "title": "Modèle de rédaction (brevet) : Volume d'un solide composé",
        "example": "Un silo est formé d'un cylindre de rayon $2$ m et de hauteur $5$ m, surmonté d'un cône de même base et de hauteur $1{,}5$ m. Calculer son volume (valeur exacte, puis arrondi au m³).",
        "steps": [
          "**1. Cylindre** : $V_1 = \\pi r^2 h = \\pi \\times 2^2 \\times 5 = 20\\pi$ m³.",
          "**2. Cône** : $V_2 = \\dfrac{\\pi r^2 h}{3} = \\dfrac{\\pi \\times 4 \\times 1{,}5}{3} = 2\\pi$ m³.",
          "**3. Total** : $V = 20\\pi + 2\\pi = 22\\pi$ m³ $\\approx 69$ m³.",
          "**4. Interprétation** : $1$ m³ $= 1\\,000$ L, le silo contient environ $69\\,000$ L."
        ]
      },
      {
        "title": "Méthode : Section d'un pavé droit et Pythagore",
        "example": "$ABCDEFGH$ est un pavé droit ($ABCD$ base, $E$ au-dessus de $A$, $G$ au-dessus de $C$) avec $AB = 4$ cm, $BC = 3$ cm et $AE = 10$ cm. On coupe le pavé par le plan passant par $A$, $C$, $G$ et $E$. Quelle est la nature de la section ? Calculer son aire.",
        "steps": [
          "**1. Nature** : le plan contient l'arête $[AE]$ et est parallèle à l'arête $[CG]$ : la section $ACGE$ est un **rectangle** (ses côtés $[AE]$ et $[CG]$ sont verticaux, $[AC]$ et $[EG]$ horizontaux).",
          "**2. Calcul de $AC$** : dans le triangle $ABC$ rectangle en $B$ (face du pavé), d'après le théorème de Pythagore, $AC^2 = 4^2 + 3^2 = 25$, donc $AC = 5$ cm.",
          "**3. Aire** : $\\mathcal{A} = AC \\times AE = 5 \\times 10 = 50$ cm²."
        ]
      },
      {
        "title": "Modèle de rédaction (brevet) : Patron d'un cône de révolution",
        "example": "Un cône de révolution a pour rayon de base $r = 3$ cm et pour hauteur $h = 4$ cm. Déterminer les éléments de son patron : la génératrice $g$, la longueur de l'arc du secteur et l'angle de ce secteur.",
        "steps": [
          "**1. Calculer la génératrice** : la hauteur, le rayon et la génératrice forment un triangle rectangle au centre de la base. D'après le théorème de Pythagore, $g^2 = h^2 + r^2 = 4^2 + 3^2 = 25$, donc $g = 5$ cm.",
          "**2. Calculer la longueur de l'arc** : l'arc s'enroule autour de la base, il mesure donc $2\\pi r = 2 \\times \\pi \\times 3 = 6\\pi \\approx 18{,}8$ cm.",
          "**3. Calculer l'angle du secteur** : le cercle de rayon $g = 5$ cm a pour périmètre $10\\pi$ cm. L'arc en représente $\\dfrac{6\\pi}{10\\pi} = \\dfrac{3}{5}$, donc l'angle vaut $\\dfrac{3}{5} \\times 360^\\circ = 216^\\circ$.",
          "**4. Conclure** : le patron est formé d'un disque de rayon $3$ cm et d'un secteur de disque de rayon $5$ cm et d'angle $216^\\circ$."
        ]
      },
      {
        "title": "Méthode : Décrire les vues d'un solide composé",
        "example": "Un silo est formé d'un cylindre de rayon $2$ m et de hauteur $5$ m, surmonté d'un cône de même base et de hauteur $1{,}5$ m. Décrire sa vue de face et sa vue de dessus, puis calculer l'aire de sa vue de face.",
        "steps": [
          "**1. Vue de face, solide par solide** : le cylindre donne un **rectangle** de largeur $2 \\times 2 = 4$ m et de hauteur $5$ m ; le cône donne un **triangle isocèle** de base $4$ m et de hauteur $1{,}5$ m, posé sur le rectangle.",
          "**2. Vue de dessus** : le cône et le cylindre ont la même base. On voit un **disque** de rayon $2$ m ; son centre marque le sommet du cône.",
          "**3. Aire de la vue de face** : $4 \\times 5 + \\dfrac{4 \\times 1{,}5}{2} = 20 + 3 = 23$ m²."
        ]
      }
    ],
    "traps": [
      "⚠️ Penser que la section d'un cylindre par un plan parallèle à l'axe est un disque : c'est un **rectangle** !",
      "⚠️ Dans le patron d'un cône, le rayon du secteur est la **génératrice** $g$, et non la hauteur $h$ du cône.",
      "⚠️ Dans un tronc de cône, ne pas diviser le volume par 2 sous prétexte que le plan est à mi-hauteur : à mi-hauteur ($k = 0{,}5$), le petit cône occupe $\\frac{1}{8}$ du volume total !",
      "⚠️ Oublier de convertir : $1$ dm³ $= 1$ L, mais $1$ m³ $= 1\\,000$ L et $1$ cm³ $= 1$ mL."
    ],
    "flashcards": [
      {
        "q": "Quelle est la section d'un pavé droit par un plan parallèle à une face ?",
        "a": "C'est un **rectangle** de mêmes dimensions que cette face."
      },
      {
        "q": "Quelle est la section d'un cylindre par un plan perpendiculaire à son axe ?",
        "a": "C'est un **disque** de même rayon que la base."
      },
      {
        "q": "Quelle est la section d'un cylindre par un plan parallèle à son axe ?",
        "a": "C'est un **rectangle**."
      },
      {
        "q": "Quelle est la nature de la section d'un cône par un plan parallèle à sa base ?",
        "a": "C'est un **disque**, réduction du disque de base."
      },
      {
        "q": "Si une pyramide est coupée à mi-hauteur par un plan parallèle à sa base, que vaut le volume de la petite pyramide ?",
        "a": "$\\frac{1}{8}$ du volume initial (car $k = 0{,}5$ et $k^3 = 0{,}125 = \\frac{1}{8}$)."
      },
      {
        "q": "Volume d'un prisme droit de base un triangle d'aire 6 cm² et de hauteur 10 cm ?",
        "a": "$V = \\mathcal{B} \\times h = 6 \\times 10 = 60$ cm³."
      },
      {
        "q": "De quoi est formé le patron d'un cylindre de révolution de rayon $r$ et de hauteur $h$ ?",
        "a": "D'un **rectangle** de côtés $h$ et $2\\pi r$, et de **deux disques** de rayon $r$."
      },
      {
        "q": "Dans le patron d'un cône de révolution, que vaut la longueur de l'arc du secteur ?",
        "a": "Le **périmètre de la base** : $2\\pi r$."
      },
      {
        "q": "Que voit-on quand on regarde de face un cône posé sur sa base ?",
        "a": "Un **triangle isocèle** de base $2r$ et de hauteur $h$."
      }
    ]
  },
  "G6": {
    "title": "G6 : Rotations et Transformations du plan",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Construire l'image d'une figure par une rotation donnée par son centre $O$, son angle et son sens.",
      "Distinguer le sens anti-horaire (sens inverse des aiguilles d'une montre) du sens horaire (sens des aiguilles d'une montre).",
      "Reconnaître qu'une rotation de $180^\\circ$ est une symétrie centrale.",
      "Reconnaître l'effet d'une rotation sur une figure : elle tourne autour du centre, sans se déformer.",
      "Appliquer les propriétés de conservation : longueurs, angles, parallélisme et aires.",
      "Identifier une translation, une symétrie ou une rotation dans une frise, un pavage ou une rosace."
    ],
    "keyPoints": [
      {
        "title": "1. Construire l'image d'une figure par une rotation",
        "content": "Une rotation fait **tourner** une figure autour d'un point, le **centre** $O$, d'un **angle** $\\alpha$ et dans un **sens** donnés (horaire ou anti-horaire), sans la déformer. Pour construire l'image d'une figure, on construit l'image de chacun de ses sommets. Pour placer l'image $M'$ d'un point $M$ distinct de $O$ :\n• On trace $[OM]$, puis, au rapporteur et à partir de $[OM]$, on marque l'angle $\\widehat{MOM'} = \\alpha$ dans le sens demandé.\n• Au compas, on reporte la distance : $OM' = OM$.\n• Le centre $O$ ne bouge pas ; pour un angle strictement compris entre $0^\\circ$ et $360^\\circ$, c'est le seul point dans ce cas.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 300 170\" width=\"300\" height=\"170\" style=\"max-width:280px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M 180 120 A 110 110 0 0 0 125 25\" fill=\"none\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\" />\n    <path d=\"M 105 120 A 35 35 0 0 0 88 90\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\" />\n    <text x=\"108\" y=\"102\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#f59e0b\">α</text>\n    <line x1=\"70\" y1=\"120\" x2=\"180\" y2=\"120\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2\" />\n    <line x1=\"70\" y1=\"120\" x2=\"125\" y2=\"25\" stroke=\"#10b981\" stroke-width=\"2\" />\n    <polygon points=\"125,25 131,34 137,28\" fill=\"#10b981\" />\n    <line x1=\"123\" y1=\"116\" x2=\"123\" y2=\"124\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <line x1=\"127\" y1=\"116\" x2=\"127\" y2=\"124\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" />\n    <line x1=\"94\" y1=\"71\" x2=\"101\" y2=\"75\" stroke=\"#10b981\" stroke-width=\"1.8\" />\n    <line x1=\"96\" y1=\"67\" x2=\"103\" y2=\"71\" stroke=\"#10b981\" stroke-width=\"1.8\" />\n    <circle cx=\"70\" cy=\"120\" r=\"3.5\" fill=\"var(--text-main, #0f172a)\" />\n    <circle cx=\"180\" cy=\"120\" r=\"3.5\" fill=\"var(--primary, #2563eb)\" />\n    <circle cx=\"125\" cy=\"25\" r=\"3.5\" fill=\"#10b981\" />\n    <text x=\"56\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">O</text>\n    <text x=\"188\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">M</text>\n    <text x=\"125\" y=\"16\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#10b981\">M'</text>\n    <g class=\"geo-pill\">\n      <rect x=\"15\" y=\"45\" width=\"85\" height=\"20\" rx=\"4\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" />\n      <text x=\"57\" y=\"59\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"var(--text-main, #334155)\">OM' = OM</text>\n    </g>\n    <g class=\"geo-pill\">\n      <rect x=\"175\" y=\"55\" width=\"115\" height=\"20\" rx=\"4\" fill=\"#ecfdf5\" stroke=\"#10b981\" stroke-width=\"1.2\" />\n      <text x=\"232\" y=\"69\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#047857\">Sens anti-horaire</text>\n    </g>\n  </svg>\n</div>"
      },
      {
        "title": "2. Conventions d'orientation",
        "content": "• **Sens anti-horaire** : sens inverse des aiguilles d'une montre.\n• **Sens horaire** : sens des aiguilles d'une montre.\nL'énoncé d'une rotation précise toujours le sens dans lequel on tourne.\n\n<div class=\"geo-figure-wrapper\" style=\"display:flex; justify-content:center; gap:1.5rem; flex-wrap:wrap; margin:1rem 0;\">\n  <div style=\"text-align:center;\">\n    <svg class=\"geo-svg-figure\" viewBox=\"0 0 160 145\" width=\"160\" height=\"145\" style=\"max-width:150px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <circle cx=\"80\" cy=\"65\" r=\"45\" fill=\"rgba(16, 185, 129, 0.08)\" stroke=\"#10b981\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\" />\n      <path d=\"M 125 65 A 45 45 0 1 0 80 110\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2.5\" />\n      <polygon points=\"90,110 80,103 80,117\" fill=\"#10b981\" />\n      <text x=\"80\" y=\"63\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"24\" font-weight=\"700\" fill=\"#10b981\">+</text>\n      <text x=\"80\" y=\"134\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#059669\">Sens anti-horaire</text>\n    </svg>\n  </div>\n  <div style=\"text-align:center;\">\n    <svg class=\"geo-svg-figure\" viewBox=\"0 0 160 145\" width=\"160\" height=\"145\" style=\"max-width:150px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n      <circle cx=\"80\" cy=\"65\" r=\"45\" fill=\"rgba(239, 68, 68, 0.08)\" stroke=\"#ef4444\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\" />\n      <path d=\"M 35 65 A 45 45 0 1 1 80 110\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2.5\" />\n      <polygon points=\"70,110 80,103 80,117\" fill=\"#ef4444\" />\n      <text x=\"80\" y=\"63\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"26\" font-weight=\"700\" fill=\"#ef4444\">−</text>\n      <text x=\"80\" y=\"134\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#dc2626\">Sens horaire</text>\n    </svg>\n  </div>\n</div>"
      },
      {
        "title": "3. Lien fondamental avec la symétrie centrale",
        "content": "Une rotation d'angle **$180^\\circ$** est exactement une **symétrie centrale** de centre $O$ :\n$$M, O, M' \\text{ sont alignés et } O \\text{ est le milieu de } [MM']$$\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 340 160\" width=\"340\" height=\"160\" style=\"max-width:320px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M 60 75 A 110 65 0 0 1 280 115\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"1.8\" stroke-dasharray=\"4,3\" />\n    <polygon points=\"175,20 182,14 182,26\" fill=\"#f59e0b\" />\n    <text x=\"170\" y=\"38\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#f59e0b\">Demi-tour : 180°</text>\n    <line x1=\"60\" y1=\"45\" x2=\"280\" y2=\"115\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n    <line x1=\"90\" y1=\"75\" x2=\"250\" y2=\"85\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n    <line x1=\"40\" y1=\"75\" x2=\"300\" y2=\"85\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n    <polygon points=\"60,45 90,75 40,75\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <circle cx=\"60\" cy=\"45\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n    <circle cx=\"90\" cy=\"75\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n    <circle cx=\"40\" cy=\"75\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n    <text x=\"58\" y=\"36\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">A</text>\n    <text x=\"96\" y=\"82\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">B</text>\n    <text x=\"28\" y=\"82\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">C</text>\n    <polygon points=\"280,115 250,85 300,85\" fill=\"rgba(16, 185, 129, 0.15)\" stroke=\"#10b981\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <circle cx=\"280\" cy=\"115\" r=\"3\" fill=\"#10b981\" />\n    <circle cx=\"250\" cy=\"85\" r=\"3\" fill=\"#10b981\" />\n    <circle cx=\"300\" cy=\"85\" r=\"3\" fill=\"#10b981\" />\n    <text x=\"282\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#10b981\">A'</text>\n    <text x=\"238\" y=\"83\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#10b981\">B'</text>\n    <text x=\"306\" y=\"83\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#10b981\">C'</text>\n    <circle cx=\"170\" cy=\"80\" r=\"3.5\" fill=\"var(--text-main, #0f172a)\" />\n    <text x=\"170\" y=\"98\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">O</text>\n    <text x=\"170\" y=\"152\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"600\" fill=\"var(--text-muted, #64748b)\">Rotation d'angle 180° = Symétrie centrale de centre O</text>\n  </svg>\n</div>"
      },
      {
        "title": "4. Propriétés de conservation",
        "content": "Une rotation déplace la figure sans la déformer. Elle conserve :\n• Les longueurs ($M'N' = MN$)\n• La mesure des angles géométriques\n• Les aires et périmètres (les figures sont superposables)\n• L'alignement et le parallélisme.\n\n**Pour aller plus loin : enchaîner deux rotations de même centre.** Appliquer deux rotations de même centre $O$ l'une après l'autre revient à appliquer une seule rotation de centre $O$. On compte positivement les angles dans le sens anti-horaire, négativement dans le sens horaire, et on les additionne ; un tour complet de $360^\\circ$ ramène au point de départ.\n*Exemple* : $100^\\circ$ dans le sens anti-horaire, puis $130^\\circ$ dans le sens horaire : $100 - 130 = -30$. Cela revient à une rotation de $30^\\circ$ dans le sens horaire, ou de $360^\\circ - 30^\\circ = 330^\\circ$ dans le sens anti-horaire."
      },
      {
        "title": "5. Frises, pavages et rosaces",
        "content": "Une **frise** est obtenue en répétant un motif le long d'une bande. Un **pavage** recouvre le plan avec une même pièce, sans trou ni chevauchement. Une **rosace** est obtenue en faisant tourner un motif autour d'un centre.\n\nPour **identifier une transformation**, on compare une figure et son image :\n• même orientation, figure simplement déplacée : **translation** ;\n• figure retournée, comme dans un miroir : **symétrie axiale** (l'axe est la médiatrice du segment qui joint deux points correspondants) ;\n• figure qui a tourné : **rotation** ; si elle est tête en bas, c'est un demi-tour, donc une symétrie centrale ;\n• figure agrandie ou réduite : **homothétie**.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 320 208\" style=\"max-width:340px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Trois frises obtenues par translation, par symétrie axiale et par demi-tour\">\n<text x=\"16\" y=\"16\" text-anchor=\"start\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Translation (motif glissé)</text><polygon points=\"23.2,56.4 28.6,56.4 28.6,40.2 46.6,34.8 23.2,27.6\" fill=\"rgba(37, 99, 235, 0.5)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><polygon points=\"59.2,56.4 64.6,56.4 64.6,40.2 82.6,34.8 59.2,27.6\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><polygon points=\"95.2,56.4 100.6,56.4 100.6,40.2 118.6,34.8 95.2,27.6\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><polygon points=\"131.2,56.4 136.6,56.4 136.6,40.2 154.6,34.8 131.2,27.6\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><polygon points=\"167.2,56.4 172.6,56.4 172.6,40.2 190.6,34.8 167.2,27.6\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><polygon points=\"203.2,56.4 208.6,56.4 208.6,40.2 226.6,34.8 203.2,27.6\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><polygon points=\"239.2,56.4 244.6,56.4 244.6,40.2 262.6,34.8 239.2,27.6\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><polygon points=\"275.2,56.4 280.6,56.4 280.6,40.2 298.6,34.8 275.2,27.6\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><line x1=\"16\" y1=\"21\" x2=\"304\" y2=\"21\" stroke=\"#94a3b8\" stroke-width=\"1\" /><line x1=\"16\" y1=\"63\" x2=\"304\" y2=\"63\" stroke=\"#94a3b8\" stroke-width=\"1\" /><text x=\"16\" y=\"84\" text-anchor=\"start\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Symétrie axiale (motif retourné, un sur deux)</text><polygon points=\"23.2,124.4 28.6,124.4 28.6,108.2 46.6,102.8 23.2,95.6\" fill=\"rgba(37, 99, 235, 0.5)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><polygon points=\"80.8,124.4 75.4,124.4 75.4,108.2 57.4,102.8 80.8,95.6\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><polygon points=\"95.2,124.4 100.6,124.4 100.6,108.2 118.6,102.8 95.2,95.6\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><polygon points=\"152.8,124.4 147.4,124.4 147.4,108.2 129.4,102.8 152.8,95.6\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><polygon points=\"167.2,124.4 172.6,124.4 172.6,108.2 190.6,102.8 167.2,95.6\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><polygon points=\"224.8,124.4 219.4,124.4 219.4,108.2 201.4,102.8 224.8,95.6\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><polygon points=\"239.2,124.4 244.6,124.4 244.6,108.2 262.6,102.8 239.2,95.6\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><polygon points=\"296.8,124.4 291.4,124.4 291.4,108.2 273.4,102.8 296.8,95.6\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><line x1=\"16\" y1=\"89\" x2=\"304\" y2=\"89\" stroke=\"#94a3b8\" stroke-width=\"1\" /><line x1=\"16\" y1=\"131\" x2=\"304\" y2=\"131\" stroke=\"#94a3b8\" stroke-width=\"1\" /><text x=\"16\" y=\"152\" text-anchor=\"start\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Demi-tour (motif tête en bas, un sur deux)</text><polygon points=\"23.2,192.4 28.6,192.4 28.6,176.2 46.6,170.8 23.2,163.6\" fill=\"rgba(37, 99, 235, 0.5)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><polygon points=\"80.8,163.6 75.4,163.6 75.4,179.8 57.4,185.2 80.8,192.4\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><polygon points=\"95.2,192.4 100.6,192.4 100.6,176.2 118.6,170.8 95.2,163.6\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><polygon points=\"152.8,163.6 147.4,163.6 147.4,179.8 129.4,185.2 152.8,192.4\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><polygon points=\"167.2,192.4 172.6,192.4 172.6,176.2 190.6,170.8 167.2,163.6\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><polygon points=\"224.8,163.6 219.4,163.6 219.4,179.8 201.4,185.2 224.8,192.4\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><polygon points=\"239.2,192.4 244.6,192.4 244.6,176.2 262.6,170.8 239.2,163.6\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><polygon points=\"296.8,163.6 291.4,163.6 291.4,179.8 273.4,185.2 296.8,192.4\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><line x1=\"16\" y1=\"157\" x2=\"304\" y2=\"157\" stroke=\"#94a3b8\" stroke-width=\"1\" /><line x1=\"16\" y1=\"199\" x2=\"304\" y2=\"199\" stroke=\"#94a3b8\" stroke-width=\"1\" />\n</svg>\n</div>\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 390 192\" style=\"max-width:420px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Un pavage de carreaux et une rosace de huit motifs\">\n<polygon points=\"50,90 90,90 90,50 50,50\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1\" stroke-linejoin=\"round\" /><polygon points=\"58,86 66,86 66,70 82,70 82,54 58,54\" fill=\"rgba(37, 99, 235, 0.5)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><polygon points=\"50,90 50,50 10,50 10,90\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1\" stroke-linejoin=\"round\" /><polygon points=\"46,82 46,74 30,74 30,58 14,58 14,82\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><polygon points=\"50,90 10,90 10,130 50,130\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1\" stroke-linejoin=\"round\" /><polygon points=\"42,94 34,94 34,110 18,110 18,126 42,126\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><polygon points=\"50,90 50,130 90,130 90,90\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1\" stroke-linejoin=\"round\" /><polygon points=\"54,98 54,106 70,106 70,122 86,122 86,98\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><polygon points=\"130,90 170,90 170,50 130,50\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1\" stroke-linejoin=\"round\" /><polygon points=\"138,86 146,86 146,70 162,70 162,54 138,54\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><polygon points=\"130,90 130,50 90,50 90,90\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1\" stroke-linejoin=\"round\" /><polygon points=\"126,82 126,74 110,74 110,58 94,58 94,82\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><polygon points=\"130,90 90,90 90,130 130,130\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1\" stroke-linejoin=\"round\" /><polygon points=\"122,94 114,94 114,110 98,110 98,126 122,126\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><polygon points=\"130,90 130,130 170,130 170,90\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1\" stroke-linejoin=\"round\" /><polygon points=\"134,98 134,106 150,106 150,122 166,122 166,98\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><text x=\"90\" y=\"34\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Pavage</text><text x=\"90\" y=\"156\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">sans trou ni chevauchement</text><polygon points=\"294.2,95 302,43 275.2,61.6 284.3,81\" fill=\"rgba(37, 99, 235, 0.5)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><polygon points=\"281,97 249.7,54.7 243.9,86.9 264.1,94.1\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><polygon points=\"273,107.8 221,100 239.6,126.8 259,117.7\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><polygon points=\"275,121 232.7,152.3 264.9,158.1 272.1,137.9\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><polygon points=\"285.8,129 278,181 304.8,162.4 295.7,143\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><polygon points=\"299,127 330.3,169.3 336.1,137.1 315.9,129.9\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><polygon points=\"307,116.2 359,124 340.4,97.2 321,106.3\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><polygon points=\"305,103 347.3,71.7 315.1,65.9 307.9,86.1\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><circle cx=\"290\" cy=\"112\" r=\"3\" fill=\"#b91c1c\" /><text x=\"302\" y=\"116\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#b91c1c\">O</text><text x=\"290\" y=\"20\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">Rosace de 8 motifs</text>\n</svg>\n</div>\n\nDans une rosace de $n$ motifs identiques régulièrement répartis, la rotation de centre $O$ qui envoie un motif sur le suivant a pour angle $\\dfrac{360^\\circ}{n}$."
      },
      {
        "title": "À retenir pour le brevet",
        "content": "• Pour placer l'image $M'$ de $M$ par la rotation de centre $O$ et d'angle $\\alpha$ (avec un sens) : au rapporteur $\\widehat{MOM'} = \\alpha$, au compas $OM' = OM$.\n• Sens anti-horaire = sens inverse des aiguilles d'une montre.\n• Rotation de $180^\\circ$ = symétrie centrale.\n• Conserve longueurs, angles, aires, alignement, parallélisme.\n• Polygone régulier à $n$ côtés : la rotation de centre le centre du polygone et d'angle $\\dfrac{360^\\circ}{n}$ envoie chaque sommet sur le suivant.\n• Dans une frise ou un pavage : même orientation = translation ; effet miroir = symétrie axiale ; figure qui a tourné = rotation.\n• Rosace de $n$ motifs identiques : la rotation qui envoie un motif sur le suivant a pour angle $\\dfrac{360^\\circ}{n}$.\n\n**Automatismes** :\n• Angle au centre d'un octogone régulier ? $\\to$ $45^\\circ$.\n• Image d'un point par une rotation de $360^\\circ$ ? $\\to$ le point lui-même.\n• Une rotation peut-elle changer la longueur d'un segment ? $\\to$ non.\n• Angle de la rotation qui envoie un motif sur le suivant dans une rosace de $10$ motifs ? $\\to$ $36^\\circ$."
      }
    ],
    "methods": [
      {
        "title": "Modèle de rédaction (brevet) : Construire l'image d'une figure par une rotation",
        "example": "Sur la figure ci-dessous, construire l'image $A'B'C'$ du triangle $ABC$ par la rotation de centre $O$ et d'angle $90^\\circ$ dans le sens anti-horaire.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 340 215\" width=\"340\" height=\"215\" style=\"max-width:310px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M 180 160 A 70 70 0 0 0 110 90\" fill=\"none\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n    <path d=\"M 180 110 A 86 86 0 0 0 60 90\" fill=\"none\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n    <path d=\"M 210 120 A 108 108 0 0 0 70 60\" fill=\"none\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n    <line x1=\"110\" y1=\"160\" x2=\"180\" y2=\"160\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n    <line x1=\"110\" y1=\"160\" x2=\"110\" y2=\"90\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n    <path d=\"M 110 148 L 122 148 L 122 160\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"1.5\" />\n    <text x=\"130\" y=\"145\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" font-weight=\"700\" fill=\"#f59e0b\">90°</text>\n    <polygon points=\"180,160 210,120 180,110\" fill=\"rgba(37, 99, 235, 0.15)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <circle cx=\"180\" cy=\"160\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n    <circle cx=\"210\" cy=\"120\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n    <circle cx=\"180\" cy=\"110\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n    <text x=\"190\" y=\"167\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">A</text>\n    <text x=\"218\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">B</text>\n    <text x=\"180\" y=\"102\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">C</text>\n    <polygon points=\"110,90 70,60 60,90\" fill=\"rgba(16, 185, 129, 0.15)\" stroke=\"#10b981\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <circle cx=\"110\" cy=\"90\" r=\"3\" fill=\"#10b981\" />\n    <circle cx=\"70\" cy=\"60\" r=\"3\" fill=\"#10b981\" />\n    <circle cx=\"60\" cy=\"90\" r=\"3\" fill=\"#10b981\" />\n    <text x=\"110\" y=\"82\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#10b981\">A'</text>\n    <text x=\"68\" y=\"52\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#10b981\">B'</text>\n    <text x=\"48\" y=\"97\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#10b981\">C'</text>\n    <circle cx=\"110\" cy=\"160\" r=\"3.5\" fill=\"var(--text-main, #0f172a)\" />\n    <text x=\"96\" y=\"168\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">O</text>\n    <g class=\"geo-pill\">\n      <rect x=\"180\" y=\"40\" width=\"145\" height=\"20\" rx=\"4\" fill=\"#eff6ff\" stroke=\"#2563eb\" stroke-width=\"1.2\" />\n      <text x=\"252\" y=\"54\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#1d4ed8\">Rotation (O ; 90° ; sens anti-horaire)</text>\n    </g>\n  </svg>\n</div>",
        "steps": [
          "**1. Construire l'image de chaque sommet indépendamment** :\nPour chaque sommet du triangle initial ($A$, $B$ et $C$), on applique la règle de rotation de centre $O$ et d'angle $90^\\circ$ dans le sens anti-horaire.",
          "**2. Tracer les demi-droites au rapporteur (ou à l'équerre pour 90°)** :\n• Aligner la base du rapporteur sur $[OA]$ et marquer un angle de $90^\\circ$ vers le haut (sens anti-horaire).\n• Répéter pour $[OB]$ et $[OC]$.",
          "**3. Reporter les longueurs au compas** :\nPiquer le compas en $O$, prendre l'écartement jusqu'à $A$ et tracer un arc de cercle pour placer $A'$ tel que $OA' = OA$.\nFaire de même pour $B'$ ($OB' = OB$) et $C'$ ($OC' = OC$).",
          "**4. Tracer la figure image** :\nRelier les points $A', B', C'$ à la règle. Le triangle $A'B'C'$ est exactement superposable au triangle $ABC$ (conservation des longueurs et des aires)."
        ]
      },
      {
        "title": "Modèle de rédaction (brevet) : Identifier une rotation dans un polygone régulier",
        "example": "On considère un hexagone régulier $ABCDEF$ de centre $O$ orienté dans le sens des aiguilles d'une montre ($A \\to B \\to C \\to D \\to E \\to F$). Déterminer l'image du triangle $OAB$ par la rotation de centre $O$, d'angle $120^\\circ$ dans le sens horaire.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 300 200\" width=\"300\" height=\"200\" style=\"max-width:280px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <line x1=\"140\" y1=\"100\" x2=\"140\" y2=\"30\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n    <line x1=\"140\" y1=\"100\" x2=\"201\" y2=\"65\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n    <line x1=\"140\" y1=\"100\" x2=\"201\" y2=\"135\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n    <line x1=\"140\" y1=\"100\" x2=\"140\" y2=\"170\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n    <line x1=\"140\" y1=\"100\" x2=\"79\" y2=\"135\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n    <line x1=\"140\" y1=\"100\" x2=\"79\" y2=\"65\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\" />\n    <polygon points=\"140,100 140,30 201,65\" fill=\"rgba(37, 99, 235, 0.2)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <polygon points=\"140,100 201,135 140,170\" fill=\"rgba(16, 185, 129, 0.25)\" stroke=\"#10b981\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <polygon points=\"140,30 201,65 201,135 140,170 79,135 79,65\" fill=\"none\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <path d=\"M 140 55 A 45 45 0 0 1 179 122\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\" />\n    <polygon points=\"179,122 173,115 182,113\" fill=\"#f59e0b\" />\n    <text x=\"180\" y=\"90\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#f59e0b\">+120°</text>\n    <circle cx=\"140\" cy=\"30\" r=\"3.5\" fill=\"var(--primary, #2563eb)\" />\n    <circle cx=\"201\" cy=\"65\" r=\"3.5\" fill=\"var(--primary, #2563eb)\" />\n    <circle cx=\"201\" cy=\"135\" r=\"3.5\" fill=\"#10b981\" />\n    <circle cx=\"140\" cy=\"170\" r=\"3.5\" fill=\"#10b981\" />\n    <circle cx=\"79\" cy=\"135\" r=\"3\" fill=\"var(--text-main, #334155)\" />\n    <circle cx=\"79\" cy=\"65\" r=\"3\" fill=\"var(--text-main, #334155)\" />\n    <circle cx=\"140\" cy=\"100\" r=\"3.5\" fill=\"var(--text-main, #0f172a)\" />\n    <text x=\"140\" y=\"20\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">A</text>\n    <text x=\"214\" y=\"68\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">B</text>\n    <text x=\"214\" y=\"142\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#10b981\">C</text>\n    <text x=\"140\" y=\"186\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#10b981\">D</text>\n    <text x=\"66\" y=\"142\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #334155)\">E</text>\n    <text x=\"66\" y=\"68\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #334155)\">F</text>\n    <text x=\"127\" y=\"105\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">O</text>\n  </svg>\n</div>",
        "steps": [
          "**1. Calculer l'angle au centre entre deux sommets consécutifs** :\nUn tour complet mesure $360^\\circ$. L'hexagone régulier comporte 6 côtés égaux, donc l'angle au centre entre deux sommets voisins vaut :\n$$\\alpha = \\frac{360^\\circ}{6} = 60^\\circ$$",
          "**2. Déterminer le nombre de crans de rotation** :\nL'angle de rotation est de $120^\\circ$, ce qui correspond à :\n$$\\frac{120^\\circ}{60^\\circ} = 2\\text{ crans de sommets}$$",
          "**3. Appliquer le sens de rotation (horaire)** :\nEn partant de $A$ et $B$ et en tournant de 2 crans dans le sens des aiguilles d'une montre (sens horaire) :\n• Le sommet $A$ a pour image $C$.\n• Le sommet $B$ a pour image $D$.\n• Le centre $O$ a pour image lui-même.",
          "**4. Conclure** :\nL'image du triangle $OAB$ par cette rotation est le triangle **$OCD$**."
        ]
      },
      {
        "title": "Modèle de rédaction (brevet) : Identifier les transformations dans une frise ou un pavage",
        "example": "Sur ce pavage, les carreaux $1$, $2$, $3$ et $4$ se touchent au point $O$. Quelle transformation permet de passer :\na) du carreau $1$ au carreau $2$ ?\nb) du carreau $1$ au carreau $3$ ?\nc) du carreau $1$ au carreau $5$ ?\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 228 124\" style=\"max-width:300px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Pavage de huit carreaux numérotés ; les carreaux 1 à 4 entourent le point O\">\n<polygon points=\"62,62 114,62 114,10 62,10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1\" stroke-linejoin=\"round\" /><polygon points=\"72.4,56.8 82.8,56.8 82.8,36 103.6,36 103.6,15.2 72.4,15.2\" fill=\"rgba(37, 99, 235, 0.5)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><circle cx=\"104.6\" cy=\"52.6\" r=\"9\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"1\" /><text x=\"104.6\" y=\"56.6\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">1</text><polygon points=\"62,62 62,10 10,10 10,62\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1\" stroke-linejoin=\"round\" /><polygon points=\"56.8,51.6 56.8,41.2 36,41.2 36,20.4 15.2,20.4 15.2,51.6\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--text-main, #0f172a)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><circle cx=\"52.6\" cy=\"19.4\" r=\"9\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"1\" /><text x=\"52.6\" y=\"23.4\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">2</text><polygon points=\"62,62 10,62 10,114 62,114\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1\" stroke-linejoin=\"round\" /><polygon points=\"51.6,67.2 41.2,67.2 41.2,88 20.4,88 20.4,108.8 51.6,108.8\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--text-main, #0f172a)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><circle cx=\"19.4\" cy=\"71.4\" r=\"9\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"1\" /><text x=\"19.4\" y=\"75.4\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">3</text><polygon points=\"62,62 62,114 114,114 114,62\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1\" stroke-linejoin=\"round\" /><polygon points=\"67.2,72.4 67.2,82.8 88,82.8 88,103.6 108.8,103.6 108.8,72.4\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--text-main, #0f172a)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><circle cx=\"71.4\" cy=\"104.6\" r=\"9\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"1\" /><text x=\"71.4\" y=\"108.6\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">4</text><polygon points=\"166,62 218,62 218,10 166,10\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1\" stroke-linejoin=\"round\" /><polygon points=\"176.4,56.8 186.8,56.8 186.8,36 207.6,36 207.6,15.2 176.4,15.2\" fill=\"rgba(16, 185, 129, 0.55)\" stroke=\"var(--text-main, #0f172a)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><circle cx=\"208.6\" cy=\"52.6\" r=\"9\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"1\" /><text x=\"208.6\" y=\"56.6\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">5</text><polygon points=\"166,62 166,10 114,10 114,62\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1\" stroke-linejoin=\"round\" /><polygon points=\"160.8,51.6 160.8,41.2 140,41.2 140,20.4 119.2,20.4 119.2,51.6\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--text-main, #0f172a)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><circle cx=\"156.6\" cy=\"19.4\" r=\"9\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"1\" /><text x=\"156.6\" y=\"23.4\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">6</text><polygon points=\"166,62 114,62 114,114 166,114\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1\" stroke-linejoin=\"round\" /><polygon points=\"155.6,67.2 145.2,67.2 145.2,88 124.4,88 124.4,108.8 155.6,108.8\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--text-main, #0f172a)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><circle cx=\"123.4\" cy=\"71.4\" r=\"9\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"1\" /><text x=\"123.4\" y=\"75.4\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">7</text><polygon points=\"166,62 166,114 218,114 218,62\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1\" stroke-linejoin=\"round\" /><polygon points=\"171.2,72.4 171.2,82.8 192,82.8 192,103.6 212.8,103.6 212.8,72.4\" fill=\"rgba(100, 116, 139, 0.25)\" stroke=\"var(--text-main, #0f172a)\" stroke-width=\"1.4\" stroke-linejoin=\"round\" /><circle cx=\"175.4\" cy=\"104.6\" r=\"9\" fill=\"#ffffff\" stroke=\"#64748b\" stroke-width=\"1\" /><text x=\"175.4\" y=\"108.6\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0f172a\">8</text><circle cx=\"62\" cy=\"62\" r=\"9\" fill=\"#ffffff\" stroke=\"#b91c1c\" stroke-width=\"1.4\" /><text x=\"62\" y=\"66.3\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#b91c1c\">O</text>\n</svg>\n</div>",
        "steps": [
          "**1. Comparer l'orientation des deux carreaux** :\nOn regarde si le motif est simplement déplacé, s'il est retourné (effet miroir) ou s'il a tourné.",
          "**2. Du carreau 1 au carreau 2** :\nLe motif a tourné d'un quart de tour autour de $O$, sans effet miroir, dans le sens inverse des aiguilles d'une montre. C'est la rotation de centre $O$ et d'angle $90^\\circ$ dans le sens anti-horaire.",
          "**3. Du carreau 1 au carreau 3** :\nLe motif est tête en bas et $O$ est au milieu des deux carreaux. C'est la rotation de centre $O$ et d'angle $180^\\circ$, autrement dit la symétrie de centre $O$.",
          "**4. Du carreau 1 au carreau 5** :\nLe motif a la même orientation : il a simplement glissé de deux carreaux vers la droite. C'est une translation.",
          "**5. Rédiger** :\nOn nomme toujours la transformation et ses éléments : « Le carreau $2$ est l'image du carreau $1$ par la rotation de centre $O$ et d'angle $90^\\circ$ dans le sens anti-horaire. »"
        ]
      }
    ],
    "traps": [
      "⚠️ Tourner dans le mauvais sens : toujours vérifier s'il s'agit du sens horaire ou anti-horaire !",
      "⚠️ Oublier de reporter la distance au compas : $OM'$ doit impérativement être égal à $OM$.",
      "⚠️ Utiliser le rapporteur sans partir du centre : l'angle $\\widehat{MOM'}$ a pour sommet le centre $O$ de la rotation.",
      "⚠️ Dans une frise, confondre symétrie axiale et demi-tour : le motif retourné comme dans un miroir vient d'une symétrie axiale, le motif tête en bas sans effet miroir vient d'un demi-tour."
    ],
    "flashcards": [
      {
        "q": "Quels sont les trois éléments qui définissent une rotation ?",
        "a": "Un **centre**, un **angle** et un **sens de rotation** (horaire ou anti-horaire)."
      },
      {
        "q": "À quoi correspond une rotation d'angle 180° ?",
        "a": "À une **symétrie centrale**."
      },
      {
        "q": "Une rotation se fait « dans le sens anti-horaire ». Dans quel sens tourne-t-on ?",
        "a": "Dans le sens **inverse des aiguilles d'une montre** (le sens horaire est celui des aiguilles d'une montre)."
      },
      {
        "q": "Pour une rotation de centre $O$ et d'angle strictement compris entre $0^\\circ$ et $360^\\circ$, quel est le seul point invariable ?",
        "a": "Le **centre O** lui-même (son image est lui-même)."
      },
      {
        "q": "Une rotation modifie-t-elle l'aire d'une figure ?",
        "a": "**Non**, la rotation conserve rigoureusement les aires et les longueurs (la figure est simplement déplacée, sans être déformée)."
      },
      {
        "q": "Dans un pentagone régulier de centre $O$, quel est l'angle de la rotation de centre $O$ qui envoie chaque sommet sur le suivant ?",
        "a": "$\\dfrac{360^\\circ}{5} = 72^\\circ$."
      },
      {
        "q": "Dans une frise, deux motifs ont la même taille et la même orientation. Quelle transformation permet de passer de l'un à l'autre ?",
        "a": "Une **translation**."
      },
      {
        "q": "Comment reconnaître une symétrie axiale dans une frise ou un pavage ?",
        "a": "Le motif est **retourné**, comme dans un miroir. L'axe est la médiatrice du segment qui joint deux points correspondants."
      },
      {
        "q": "Une rosace compte $n$ motifs identiques régulièrement répartis. Quel est l'angle de la rotation qui envoie un motif sur le suivant ?",
        "a": "$\\dfrac{360^\\circ}{n}$."
      }
    ]
  },
  "G7": {
    "title": "G7 : Triangles semblables",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Définir des triangles semblables comme ayant des angles deux à deux de même mesure.",
      "Connaître la propriété équivalente : longueurs des côtés deux à deux proportionnelles.",
      "Démontrer que deux triangles sont semblables à partir de deux paires d'angles égaux.",
      "Associer sommets homologues et côtés homologues pour écrire les égalités de rapports.",
      "Calculer des longueurs inconnues à l'aide du coefficient d'agrandissement ou de réduction."
    ],
    "keyPoints": [
      {
        "title": "1. Définition des triangles semblables",
        "content": "Deux triangles sont dits **semblables** s'ils ont des **angles deux à deux de même mesure**.\n*Propriété essentielle* : Comme la somme des angles d'un triangle vaut $180^\\circ$, il suffit que deux triangles aient **deux paires d'angles de même mesure** pour qu'ils soient semblables !\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 340 185\" width=\"340\" height=\"185\" style=\"max-width:320px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"35,140 105,140 84,82\" fill=\"rgba(37, 99, 235, 0.08)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <path d=\"M 53 140 A 18 18 0 0 0 46 126\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\" />\n    <text x=\"56\" y=\"133\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#f59e0b\">50°</text>\n    <path d=\"M 89 140 A 16 16 0 0 1 100 125\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2\" />\n    <text x=\"82\" y=\"132\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#10b981\">70°</text>\n    <path d=\"M 75 97 A 18 18 0 0 0 88 98\" fill=\"none\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2\" />\n    <text x=\"84\" y=\"112\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">60°</text>\n    <circle cx=\"35\" cy=\"140\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n    <circle cx=\"105\" cy=\"140\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n    <circle cx=\"84\" cy=\"82\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n    <text x=\"23\" y=\"146\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n    <text x=\"112\" y=\"146\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n    <text x=\"84\" y=\"73\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n    <polygon points=\"175,140 270,140 241,62\" fill=\"rgba(16, 185, 129, 0.08)\" stroke=\"#10b981\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <path d=\"M 199 140 A 24 24 0 0 0 190 121\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\" />\n    <text x=\"203\" y=\"131\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#f59e0b\">50°</text>\n    <path d=\"M 248 140 A 22 22 0 0 1 263 120\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2\" />\n    <text x=\"240\" y=\"129\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#10b981\">70°</text>\n    <path d=\"M 230 83 A 24 24 0 0 0 247 84\" fill=\"none\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2\" />\n    <text x=\"241\" y=\"103\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">60°</text>\n    <circle cx=\"175\" cy=\"140\" r=\"3.5\" fill=\"#10b981\" />\n    <circle cx=\"270\" cy=\"140\" r=\"3.5\" fill=\"#10b981\" />\n    <circle cx=\"241\" cy=\"62\" r=\"3.5\" fill=\"#10b981\" />\n    <text x=\"162\" y=\"146\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">D</text>\n    <text x=\"278\" y=\"146\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">E</text>\n    <text x=\"241\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">F</text>\n    <text x=\"170\" y=\"174\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--text-main, #334155)\">Angles égaux deux à deux → Même forme (Semblables)</text>\n  </svg>\n</div>"
      },
      {
        "title": "2. Côtés homologues et proportionnalité",
        "content": "Deux triangles sont semblables si et seulement si les longueurs de leurs côtés sont **proportionnelles deux à deux** :\n$$\\frac{DE}{AB} = \\frac{EF}{BC} = \\frac{DF}{AC} = k$$\n• Les côtés opposés à des angles égaux sont appelés des **côtés homologues** (repérés par la même couleur ci-dessous).\n• $k$ est le **coefficient d'agrandissement ou de réduction** (agrandissement si $k > 1$, réduction si $k < 1$).\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 340 185\" width=\"340\" height=\"185\" style=\"max-width:320px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <line x1=\"35\" y1=\"135\" x2=\"105\" y2=\"135\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2.5\" />\n    <line x1=\"105\" y1=\"135\" x2=\"84\" y2=\"77\" stroke=\"#f59e0b\" stroke-width=\"2.5\" />\n    <line x1=\"35\" y1=\"135\" x2=\"84\" y2=\"77\" stroke=\"#10b981\" stroke-width=\"2.5\" />\n    <circle cx=\"35\" cy=\"135\" r=\"3\" fill=\"var(--text-main, #0f172a)\" />\n    <circle cx=\"105\" cy=\"135\" r=\"3\" fill=\"var(--text-main, #0f172a)\" />\n    <circle cx=\"84\" cy=\"77\" r=\"3\" fill=\"var(--text-main, #0f172a)\" />\n    <text x=\"24\" y=\"140\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n    <text x=\"112\" y=\"140\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n    <text x=\"84\" y=\"68\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n    <line x1=\"175\" y1=\"135\" x2=\"270\" y2=\"135\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"3\" />\n    <line x1=\"270\" y1=\"135\" x2=\"241\" y2=\"57\" stroke=\"#f59e0b\" stroke-width=\"3\" />\n    <line x1=\"175\" y1=\"135\" x2=\"241\" y2=\"57\" stroke=\"#10b981\" stroke-width=\"3\" />\n    <circle cx=\"175\" cy=\"135\" r=\"3.5\" fill=\"var(--text-main, #0f172a)\" />\n    <circle cx=\"270\" cy=\"135\" r=\"3.5\" fill=\"var(--text-main, #0f172a)\" />\n    <circle cx=\"241\" cy=\"57\" r=\"3.5\" fill=\"var(--text-main, #0f172a)\" />\n    <text x=\"162\" y=\"140\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">D</text>\n    <text x=\"278\" y=\"140\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">E</text>\n    <text x=\"241\" y=\"48\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">F</text>\n    <g class=\"geo-pill\">\n      <rect x=\"25\" y=\"152\" width=\"290\" height=\"22\" rx=\"4\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"var(--border-color, #94a3b8)\" stroke-width=\"1.2\" />\n      <text x=\"170\" y=\"167\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" font-weight=\"700\" fill=\"var(--text-main, #334155)\">Côtés homologues face aux mêmes angles : DE/AB = EF/BC = DF/AC</text>\n    </g>\n  </svg>\n</div>"
      },
      {
        "title": "3. Lien avec la configuration de Thalès",
        "content": "Toute configuration de Thalès (triangles emboîtés ou papillon) est constituée de **deux triangles semblables** :\n• Les droites parallèles forment des angles correspondants (ou alternes-internes) de même mesure.\n• Les triangles ayant les mêmes angles, ils sont semblables et leurs côtés sont proportionnels d'après le théorème de Thalès.\n• Une **homothétie** transforme un triangle en un triangle **semblable** : même mesure des angles et longueurs multipliées par $|k|$. Dans une configuration de Thalès de sommet $A$, on passe du petit triangle au grand par l'homothétie de centre $A$.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 260 145\" width=\"260\" height=\"145\" style=\"max-width:240px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"120,20 40,115 200,115\" fill=\"none\" stroke=\"var(--text-main, #334155)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <polygon points=\"120,20 76,72 164,72\" fill=\"rgba(37, 99, 235, 0.12)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <line x1=\"60\" y1=\"72\" x2=\"180\" y2=\"72\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1.8\" stroke-dasharray=\"2,2\" />\n    <path d=\"M 52 115 A 15 15 0 0 0 49 104\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2\" />\n    <path d=\"M 88 72 A 15 15 0 0 0 85 61\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2\" />\n    <path d=\"M 188 115 A 15 15 0 0 1 191 104\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\" />\n    <path d=\"M 152 72 A 15 15 0 0 1 155 61\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\" />\n    <path d=\"M 112 30 A 15 15 0 0 0 128 30\" fill=\"none\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2\" />\n    <circle cx=\"120\" cy=\"20\" r=\"3.5\" fill=\"var(--primary, #2563eb)\" />\n    <circle cx=\"76\" cy=\"72\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n    <circle cx=\"164\" cy=\"72\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n    <circle cx=\"40\" cy=\"115\" r=\"3\" fill=\"var(--text-main, #334155)\" />\n    <circle cx=\"200\" cy=\"115\" r=\"3\" fill=\"var(--text-main, #334155)\" />\n    <text x=\"120\" y=\"14\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">A</text>\n    <text x=\"64\" y=\"68\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">M</text>\n    <text x=\"174\" y=\"68\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">N</text>\n    <text x=\"28\" y=\"122\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #334155)\">B</text>\n    <text x=\"208\" y=\"122\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #334155)\">C</text>\n    <text x=\"120\" y=\"138\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" font-weight=\"600\" fill=\"var(--text-muted, #64748b)\">(MN) // (BC) → 3 angles égaux → Semblables</text>\n  </svg>\n</div>"
      },
      {
        "title": "4. Impact sur les aires",
        "content": "Si deux triangles sont semblables et si l'on passe des longueurs de l'un à celles de l'autre en multipliant par $k$, alors l'aire du triangle obtenu vaut :\n$$\\text{Aire}' = k^2 \\times \\text{Aire}$$"
      },
      {
        "title": "À retenir pour le brevet",
        "content": "• Deux triangles sont semblables s'ils ont leurs angles deux à deux égaux : **deux paires** d'angles égaux suffisent.\n• Équivalent : leurs côtés sont deux à deux **proportionnels**.\n• Côtés homologues = côtés opposés aux angles égaux ; on les associe avant d'écrire les rapports.\n• Rapport $k$ : longueurs $\\times k$, aires $\\times k^2$.\n\n**Automatismes** :\n• Triangle de côtés $3$, $4$, $5$ et triangle de côtés $6$, $8$, $10$ : semblables ? $\\to$ oui, $k = 2$.\n• Deux triangles ont des angles de $40^\\circ$ et $80^\\circ$ : sont-ils semblables ? $\\to$ oui (le 3e angle vaut $60^\\circ$ dans les deux).\n• Rapport $k = 3$ et aire $4$ cm² : aire de l'agrandissement ? $\\to$ $36$ cm²."
      }
    ],
    "methods": [
      {
        "title": "Modèle de rédaction (brevet) : Démontrer que deux triangles sont semblables par les angles et calculer une longueur",
        "example": "Soit un triangle $ABC$ avec $\\widehat{A} = 50^\\circ$, $\\widehat{B} = 70^\\circ$, $AB = 6\\text{ cm}$ et $AC \\approx 6{,}5\\text{ cm}$ (arrondi au mm). Soit un triangle $DEF$ avec $\\widehat{D} = 50^\\circ$, $\\widehat{F} = 60^\\circ$ et $DE = 9\\text{ cm}$. Démontrer que ces triangles sont semblables, calculer le rapport d'agrandissement puis une valeur approchée de $DF$.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 340 195\" width=\"340\" height=\"195\" style=\"max-width:320px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"35,140 105,140 84,82\" fill=\"rgba(37, 99, 235, 0.08)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <path d=\"M 53 140 A 18 18 0 0 0 46 126\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\" />\n    <text x=\"56\" y=\"133\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#f59e0b\">50°</text>\n    <path d=\"M 89 140 A 16 16 0 0 1 100 125\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2\" />\n    <text x=\"82\" y=\"132\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#10b981\">70°</text>\n    <text x=\"70\" y=\"153\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">6 cm</text>\n    <text x=\"47\" y=\"105\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">≈ 6,5 cm</text>\n    <circle cx=\"35\" cy=\"140\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n    <circle cx=\"105\" cy=\"140\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n    <circle cx=\"84\" cy=\"82\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n    <text x=\"24\" y=\"146\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n    <text x=\"112\" y=\"146\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n    <text x=\"84\" y=\"73\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n    <polygon points=\"175,140 270,140 241,62\" fill=\"rgba(16, 185, 129, 0.08)\" stroke=\"#10b981\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <path d=\"M 199 140 A 24 24 0 0 0 190 121\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\" />\n    <text x=\"203\" y=\"131\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#f59e0b\">50°</text>\n    <path d=\"M 230 83 A 24 24 0 0 0 247 84\" fill=\"none\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2\" />\n    <text x=\"241\" y=\"103\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">60°</text>\n    <text x=\"195\" y=\"95\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#10b981\">DF = ?</text>\n    <g class=\"geo-pill\">\n      <rect x=\"192\" y=\"145\" width=\"70\" height=\"19\" rx=\"4\" fill=\"#fee2e2\" stroke=\"#ef4444\" stroke-width=\"1.2\" />\n      <text x=\"227\" y=\"158\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#dc2626\">DE = 9 cm</text>\n    </g>\n    <circle cx=\"175\" cy=\"140\" r=\"3.5\" fill=\"#10b981\" />\n    <circle cx=\"270\" cy=\"140\" r=\"3.5\" fill=\"#10b981\" />\n    <circle cx=\"241\" cy=\"62\" r=\"3.5\" fill=\"#10b981\" />\n    <text x=\"162\" y=\"146\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">D</text>\n    <text x=\"278\" y=\"146\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">E</text>\n    <text x=\"241\" y=\"52\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">F</text>\n  </svg>\n</div>",
        "steps": [
          "**1. Calculer la mesure du 3e angle** : dans le triangle $ABC$, la somme des angles vaut $180^\\circ$ :\n$$\\widehat{C} = 180^\\circ - (50^\\circ + 70^\\circ) = 60^\\circ$$",
          "**2. Démontrer que les triangles sont semblables** : $\\widehat{A} = \\widehat{D} = 50^\\circ$ et $\\widehat{C} = \\widehat{F} = 60^\\circ$. Les triangles $ABC$ et $DEF$ ont deux paires d'angles de même mesure : ils sont **semblables**. Les sommets homologues sont $A \\leftrightarrow D$, $C \\leftrightarrow F$, et donc $B \\leftrightarrow E$ (angles de $70^\\circ$).",
          "**3. Côtés homologues** : ce sont les côtés opposés aux angles égaux : $[AB]$ et $[DE]$ (opposés aux angles de $60^\\circ$), $[AC]$ et $[DF]$ (opposés aux angles de $70^\\circ$), $[BC]$ et $[EF]$. Donc :\n$$\\frac{DE}{AB} = \\frac{DF}{AC} = \\frac{EF}{BC}$$",
          "**4. Rapport d'agrandissement** : $k = \\dfrac{DE}{AB} = \\dfrac{9}{6} = 1{,}5$.",
          "**5. Calcul de $DF$** : $DF = k \\times AC \\approx 1{,}5 \\times 6{,}5 = 9{,}75$, soit $DF \\approx 9{,}8$ cm. *(Les aires sont multipliées par $k^2 = 2{,}25$.)*"
        ]
      },
      {
        "title": "Modèle de rédaction (brevet) : Démontrer que deux triangles sont semblables grâce aux côtés",
        "example": "Soit un triangle $ABC$ avec $AB = 4\\text{ cm}$, $BC = 6\\text{ cm}$ et $AC = 7\\text{ cm}$. Soit un triangle $RST$ avec $RS = 6\\text{ cm}$, $ST = 9\\text{ cm}$ et $RT = 10{,}5\\text{ cm}$. Démontrer que ces deux triangles sont semblables.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n  <svg class=\"geo-svg-figure\" viewBox=\"0 0 340 185\" width=\"340\" height=\"185\" style=\"max-width:320px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"40,135 100,135 75,80\" fill=\"rgba(37, 99, 235, 0.08)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <circle cx=\"40\" cy=\"135\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n    <circle cx=\"100\" cy=\"135\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n    <circle cx=\"75\" cy=\"80\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n    <text x=\"28\" y=\"140\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">A</text>\n    <text x=\"108\" y=\"140\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">B</text>\n    <text x=\"75\" y=\"70\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">C</text>\n    <text x=\"70\" y=\"148\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">4</text>\n    <text x=\"47\" y=\"103\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">7</text>\n    <text x=\"96\" y=\"103\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">6</text>\n    <polygon points=\"175,140 265,140 227.5,57.5\" fill=\"rgba(16, 185, 129, 0.08)\" stroke=\"#10b981\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n    <circle cx=\"175\" cy=\"140\" r=\"3.5\" fill=\"#10b981\" />\n    <circle cx=\"265\" cy=\"140\" r=\"3.5\" fill=\"#10b981\" />\n    <circle cx=\"227.5\" cy=\"57.5\" r=\"3.5\" fill=\"#10b981\" />\n    <text x=\"162\" y=\"145\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">R</text>\n    <text x=\"272\" y=\"145\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">S</text>\n    <text x=\"227.5\" y=\"48\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">T</text>\n    <text x=\"220\" y=\"154\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#10b981\">6</text>\n    <text x=\"189\" y=\"93\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#10b981\">10,5</text>\n    <text x=\"259\" y=\"93\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#10b981\">9</text>\n    <g class=\"geo-pill\">\n      <rect x=\"40\" y=\"162\" width=\"260\" height=\"20\" rx=\"4\" fill=\"var(--bg-surface, #ffffff)\" stroke=\"#10b981\" stroke-width=\"1.2\" />\n      <text x=\"170\" y=\"176\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10.5\" font-weight=\"700\" fill=\"#047857\">Rapports : 6/4 = 9/6 = 10,5/7 = 1,5 (proportionnels)</text>\n    </g>\n  </svg>\n</div>",
        "steps": [
          "**1. Classer les longueurs de chaque triangle par ordre croissant** :\n• Dans le triangle $ABC$ : $AB = 4\\text{ cm} < BC = 6\\text{ cm} < AC = 7\\text{ cm}$.\n• Dans le triangle $RST$ : $RS = 6\\text{ cm} < ST = 9\\text{ cm} < RT = 10{,}5\\text{ cm}$.",
          "**2. Calculer séparément les trois rapports des côtés homologues** :\n• Plus petits côtés : $\\frac{RS}{AB} = \\frac{6}{4} = 1{,}5$.\n• Côtés intermédiaires : $\\frac{ST}{BC} = \\frac{9}{6} = 1{,}5$.\n• Plus grands côtés : $\\frac{RT}{AC} = \\frac{10{,}5}{7} = 1{,}5$.",
          "**3. Constater l'égalité des trois quotients** :\n$$\\frac{RS}{AB} = \\frac{ST}{BC} = \\frac{RT}{AC} = 1{,}5$$",
          "**4. Conclure** :\nLes longueurs des côtés sont proportionnelles deux à deux, donc les triangles $ABC$ et $RST$ sont **semblables** *(avec un coefficient d'agrandissement $k = 1{,}5$)*."
        ]
      }
    ],
    "traps": [
      "⚠️ Associer les mauvais côtés dans les rapports de proportionnalité : il faut impérativement repérer les côtés face aux **mêmes angles** !",
      "⚠️ Ne pas confondre triangles égaux (toutes longueurs égales) et triangles semblables (même forme, côtés proportionnels mais pas forcément égaux).",
      "⚠️ Ranger les côtés par ordre croissant ne marche que pour comparer des longueurs ; pour des angles connus, il faut associer chaque côté à l'angle qui lui fait face."
    ],
    "flashcards": [
      {
        "q": "Qu'est-ce que deux triangles semblables ?",
        "a": "Deux triangles qui ont des **angles deux à deux de même mesure**."
      },
      {
        "q": "Combien d'angles égaux suffisent pour prouver que deux triangles sont semblables ?",
        "a": "**Deux angles égaux** suffisent (car le troisième est automatiquement égal à $180^\\circ - \\text{somme des deux autres}$)."
      },
      {
        "q": "Quelle est la conséquence sur les côtés de deux triangles semblables ?",
        "a": "Les longueurs de leurs côtés sont **deux à deux proportionnelles**."
      },
      {
        "q": "Une homothétie transforme un triangle en un autre triangle : ces deux triangles sont-ils semblables ?",
        "a": "**Oui** : ils ont les mêmes angles et leurs longueurs sont multipliées par $|k|$."
      },
      {
        "q": "Deux triangles superposables (de mêmes dimensions) sont-ils semblables ?",
        "a": "**Oui**, ce sont des triangles semblables particuliers de rapport $k = 1$."
      },
      {
        "q": "Si un triangle est semblable à un autre avec un rapport k = 3, que devient son aire ?",
        "a": "Son aire est multipliée par $k^2 = 3^2 = 9$."
      },
      {
        "q": "$ABC$ et $DEF$ sont semblables avec $\\dfrac{DE}{AB} = 0{,}5$. L'aire de $ABC$ vaut 20 cm². Aire de $DEF$ ?",
        "a": "$0{,}5^2 \\times 20 = 0{,}25 \\times 20 = 5$ cm²."
      }
    ]
  },
  "Org1": {
    "title": "Org1 : Notion de fonction",
    "domain": "Organisation et Fonctions",
    "objectives": [
      "Comprendre la notion de fonction comme un processus qui transforme un nombre $x$ en un nombre unique $f(x)$.",
      "Distinguer rigoureusement l'antécédent (valeur de départ) de l'image (valeur d'arrivée).",
      "Calculer une image par substitution dans une formule algébrique.",
      "Déterminer un antécédent en résolvant une équation.",
      "Lire et interpréter des images et antécédents sur un tableau de valeurs et sur une courbe représentative.",
      "Passer d'un mode de représentation à un autre : expression, tableau de valeurs, courbe, programme de calcul."
    ],
    "keyPoints": [
      {
        "title": "1. Vocabulaire : Antécédent et Image",
        "content": "Une fonction $f$ associe à un nombre $x$ un **unique** nombre noté $f(x)$ :\n$$f : x \\longmapsto f(x)$$\n• $x$ est un **antécédent** de $f(x)$ par la fonction $f$.\n• $f(x)$ est l'**image** de $x$ par la fonction $f$.\n*Exemple* : un billet de cinéma coûte 5 € par personne. Le prix à payer pour $x$ personnes est $f(x) = 5x$. Pour 4 personnes, $f(4) = 20$ : l'image de 4 est 20 et 4 est un antécédent de 20."
      },
      {
        "title": "2. Règle d'or sur l'unicité de l'image",
        "content": "• Un nombre de départ possède **UNE SEULE image**.\n• En revanche, un nombre d'arrivée peut posséder **plusieurs antécédents** (ou un seul, ou aucun) !\n*Exemple* : pour $f(x) = x^2$, le nombre 9 possède deux antécédents : $3$ et $-3$ (car $3^2 = 9$ et $(-3)^2 = 9$)."
      },
      {
        "title": "3. Les quatre modes de représentation d'une fonction",
        "content": "1. **La formule algébrique** : $f(x) = 2x^2 - 3x + 1$.\n2. **Le tableau de valeurs** : listant des valeurs de $x$ et leurs images associées $f(x)$.\n3. **La courbe représentative $\\mathcal{C}_f$** : ensemble de tous les points de coordonnées $(x ; f(x))$ dans un repère.\n4. **Le programme de calcul** : la suite d'opérations à effectuer sur le nombre de départ. Par exemple, « Choisir un nombre, lui ajouter $3$, multiplier le résultat par $2$ » définit la fonction $f : x \\longmapsto 2(x + 3)$, avec $f(5) = 2 \\times (5 + 3) = 16$."
      },
      {
        "title": "4. Lecture graphique d'une image et d'un antécédent",
        "content": "• **Pour lire l'image de $a$** : on part de $a$ sur l'axe des abscisses (horizontal), on rejoint verticalement la courbe, puis on lit l'ordonnée sur l'axe vertical.\n• **Pour lire les antécédents de $b$** : on part de $b$ sur l'axe des ordonnées (vertical), on trace l'horizontale et on lit toutes les abscisses des points d'intersection avec la courbe."
      },
      {
        "title": "À retenir pour le brevet",
        "content": "• Image de $a$ : on **calcule** $f(a)$ ou on lit l'**ordonnée** du point de la courbe d'abscisse $a$.\n• Antécédent(s) de $b$ : on **résout** $f(x) = b$ ou on lit les **abscisses** des points de la courbe d'ordonnée $b$.\n• Un nombre a une seule image, mais peut avoir zéro, un ou plusieurs antécédents.\n• Le point $(a ; b)$ est sur la courbe $\\iff$ $f(a) = b$.\n\n**Automatismes** :\n• $f(x) = 3x - 1$ : $f(-2)$ ? $\\to$ $-7$.\n• $f(x) = x^2$ : antécédents de $16$ ? $\\to$ $-4$ et $4$.\n• Le point $(2 ; 5)$ est sur la courbe de $f$ : que vaut $f(2)$ ? $\\to$ $5$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer une image et déterminer un antécédent par le calcul",
        "example": "Soit la fonction $f$ définie par $f(x) = 4x - 7$. Calculer l'image de -3, puis déterminer l'antécédent de 13.",
        "steps": [
          "**Calculer l'image de -3** : On remplace $x$ par $-3$ :\n$f(-3) = 4 \\times (-3) - 7 = -12 - 7 = -19$. L'image de $-3$ est $-19$.",
          "**Déterminer l'antécédent de 13** : On cherche $x$ tel que $f(x) = 13$ :\n$4x - 7 = 13 \\implies 4x = 13 + 7 = 20 \\implies x = \\frac{20}{4} = 5$.\nL'antécédent de 13 par $f$ est 5."
        ]
      },
      {
        "title": "Méthode : Lire graphiquement une image et des antécédents",
        "example": "On a tracé ci-dessous la courbe $\\mathcal{C}_f$ d'une fonction $f$ (avec $f(x) = x^2 - 2x - 3$). Lire l'image de $1$, puis les antécédents de $0$ et de $5$.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 240 195\" width=\"240\" height=\"195\" style=\"max-width:280px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Courbe de la fonction f avec lecture graphique des antécédents de 0 et de l'image de 1\">\n  <line x1=\"30\" y1=\"170\" x2=\"30\" y2=\"35\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"60\" y1=\"170\" x2=\"60\" y2=\"35\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"90\" y1=\"170\" x2=\"90\" y2=\"35\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"120\" y1=\"170\" x2=\"120\" y2=\"35\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"150\" y1=\"170\" x2=\"150\" y2=\"35\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"180\" y1=\"170\" x2=\"180\" y2=\"35\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"210\" y1=\"170\" x2=\"210\" y2=\"35\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"30\" y1=\"170\" x2=\"210\" y2=\"170\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"30\" y1=\"155\" x2=\"210\" y2=\"155\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"30\" y1=\"140\" x2=\"210\" y2=\"140\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"30\" y1=\"125\" x2=\"210\" y2=\"125\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"30\" y1=\"110\" x2=\"210\" y2=\"110\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"30\" y1=\"95\" x2=\"210\" y2=\"95\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"30\" y1=\"80\" x2=\"210\" y2=\"80\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"30\" y1=\"65\" x2=\"210\" y2=\"65\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"30\" y1=\"50\" x2=\"210\" y2=\"50\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"30\" y1=\"35\" x2=\"210\" y2=\"35\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"25\" y1=\"110\" x2=\"215\" y2=\"110\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\" /><line x1=\"90\" y1=\"175\" x2=\"90\" y2=\"30\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\" /><text x=\"30\" y=\"123\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"var(--text-muted, #64748b)\">−2</text><text x=\"60\" y=\"123\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"var(--text-muted, #64748b)\">−1</text><text x=\"120\" y=\"123\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"var(--text-muted, #64748b)\">1</text><text x=\"150\" y=\"123\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"var(--text-muted, #64748b)\">2</text><text x=\"180\" y=\"123\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"var(--text-muted, #64748b)\">3</text><text x=\"210\" y=\"123\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"var(--text-muted, #64748b)\">4</text><text x=\"85\" y=\"174\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"var(--text-muted, #64748b)\">−4</text><text x=\"85\" y=\"159\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"var(--text-muted, #64748b)\">−3</text><text x=\"85\" y=\"39\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"var(--text-muted, #64748b)\">5</text>\n  <polyline points=\"30,35 33.8,46 37.5,56.6 41.3,66.6 45,76.3 48.8,85.4 52.5,94.1 56.3,102.3 60,110 63.8,117.3 67.5,124.1 71.3,130.4 75,136.3 78.8,141.6 82.5,146.6 86.3,151 90,155 93.8,158.5 97.5,161.6 101.3,164.1 105,166.3 108.8,167.9 112.5,169.1 116.3,169.8 120,170 123.8,169.8 127.5,169.1 131.3,167.9 135,166.3 138.8,164.1 142.5,161.6 146.3,158.5 150,155 153.8,151 157.5,146.6 161.3,141.6 165,136.3 168.8,130.4 172.5,124.1 176.3,117.3 180,110 183.8,102.3 187.5,94.1 191.3,85.4 195,76.3 198.8,66.6 202.5,56.6 206.3,46 210,35\" fill=\"none\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2.5\" />\n  <polyline points=\"120,110 120,170 90,170\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-dasharray=\"5 4\" />\n  <circle cx=\"60\" cy=\"110\" r=\"4\" fill=\"#10b981\" /><circle cx=\"180\" cy=\"110\" r=\"4\" fill=\"#10b981\" />\n  <text x=\"168\" y=\"44\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">C</text><text x=\"177\" y=\"48\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">f</text>\n</svg>\n</div>\n",
        "steps": [
          "**Image de 1** : on part de $1$ sur l'axe des abscisses, on va verticalement jusqu'à la courbe, puis horizontalement jusqu'à l'axe des ordonnées : $f(1) = -4$ (pointillés orange). Vérification : $1 - 2 - 3 = -4$.",
          "**Antécédents de 0** : on cherche les points de la courbe d'ordonnée $0$, c'est-à-dire sur l'axe des abscisses : $-1$ et $3$ (points verts). Vérification : $f(-1) = 1 + 2 - 3 = 0$ et $f(3) = 9 - 6 - 3 = 0$.",
          "**Antécédents de 5** : la droite horizontale d'ordonnée $5$ coupe la courbe en deux points d'abscisses $-2$ et $4$. Vérification : $f(-2) = 4 + 4 - 3 = 5$ et $f(4) = 16 - 8 - 3 = 5$.",
          "**À retenir** : une lecture graphique donne une valeur **approchée** ; seul le calcul la confirme."
        ]
      }
    ],
    "traps": [
      "⚠️ Confondre image et antécédent : trouver l'image de 4, c'est calculer $f(4)$ ; trouver un antécédent de 4, c'est résoudre l'équation $f(x) = 4$.",
      "⚠️ Oublier les parenthèses avec un nombre négatif : si $f(x) = x^2$, alors $f(-5) = (-5)^2 = 25$ et NON $-5^2 = -25$.",
      "⚠️ Lire un antécédent sur l'axe des ordonnées : les antécédents se lisent toujours sur l'axe des **abscisses** (horizontal)."
    ],
    "flashcards": [
      {
        "q": "Si $f(5) = 12$, qui est l'image et qui est l'antécédent ?",
        "a": "$12$ est l'**image** de $5$, et $5$ est un **antécédent** de $12$."
      },
      {
        "q": "Sur quel axe d'un repère lit-on les antécédents d'une fonction ?",
        "a": "Sur l'**axe des abscisses** (axe horizontal)."
      },
      {
        "q": "Sur quel axe lit-on les images ?",
        "a": "Sur l'**axe des ordonnées** (axe vertical)."
      },
      {
        "q": "Un nombre peut-il avoir plusieurs images par une fonction ?",
        "a": "**Non**, chaque nombre possède au maximum une seule image par définition."
      },
      {
        "q": "Quelle est l'image de 0 par la fonction $f$ définie par $f(x) = 3x^2 - 5x + 7$ ?",
        "a": "$f(0) = 7$."
      },
      {
        "q": "Le point $A(-1 ; 4)$ appartient à la courbe de $f$. Traduire par une égalité.",
        "a": "$f(-1) = 4$ : $4$ est l'image de $-1$ et $-1$ est un antécédent de $4$."
      },
      {
        "q": "Combien d'antécédents peut avoir un nombre par une fonction ?",
        "a": "Aucun, un ou plusieurs (contrairement à l'image, qui est unique)."
      },
      {
        "q": "Quelle fonction définit le programme « Choisir un nombre, le multiplier par $4$, retrancher $1$ » ?",
        "a": "La fonction $f : x \\longmapsto 4x - 1$."
      }
    ]
  },
  "Org2": {
    "title": "Org2 : Statistiques et Analyse de données",
    "domain": "Organisation et Fonctions",
    "objectives": [
      "Calculer une moyenne simple et une moyenne pondérée par des effectifs ou coefficients.",
      "Déterminer la médiane d'une série statistique discrète ordonnée.",
      "Calculer l'étendue d'une série et interpréter la dispersion.",
      "Construire et utiliser le tableau des effectifs cumulés croissants (ECC).",
      "Comparer deux séries statistiques à l'aide de ces indicateurs.",
      "Calculer une fréquence et lire des diagrammes (barres, bâtons, circulaire).",
      "Lire et construire un histogramme à classes de même amplitude."
    ],
    "keyPoints": [
      {
        "title": "1. Moyenne pondérée",
        "content": "La moyenne pondérée est la somme de chaque valeur multipliée par son effectif (ou coefficient), divisée par l'effectif total :\n$$\\bar{x} = \\frac{n_1 x_1 + n_2 x_2 + \\dots + n_p x_p}{N_{\\text{total}}} = \\frac{\\sum n_i x_i}{N}$$\nElle représente la valeur qu'aurait chaque individu si la répartition était parfaitement équitable."
      },
      {
        "title": "2. Médiane : Définition et sens concret",
        "content": "La **médiane** d'une série rangée par ordre croissant est un nombre qui la partage en deux groupes de même effectif (à une valeur près) :\n• Au moins 50 % des valeurs lui sont inférieures ou égales.\n• Au moins 50 % des valeurs lui sont supérieures ou égales.\n• Contrairement à la moyenne, la médiane est très peu influencée par les valeurs extrêmes."
      },
      {
        "title": "3. Déterminer une médiane",
        "content": "1. **Ranger impérativement les valeurs par ordre croissant**.\n2. Calculer $\\frac{N}{2}$ (où $N$ est l'effectif total) :\n   - **Si $N$ est impair** ($N = 2p+1$) : la médiane est la valeur de rang $p+1$.\n   - **Si $N$ est pair** ($N = 2p$) : la médiane est la demi-somme des valeurs de rang $p$ et $p+1$.\n• Pour une série donnée par un tableau d'effectifs, les **effectifs cumulés croissants** (outil pratique, non obligatoire) permettent de repérer rapidement la valeur d'un rang donné."
      },
      {
        "title": "4. Étendue et indicateurs de dispersion",
        "content": "• **Étendue** : $\\text{Étendue} = \\text{Valeur maximale} - \\text{Valeur minimale}$.\n• Une série homogène a une petite étendue ; une série très hétérogène a une grande étendue."
      },
      {
        "title": "5. Effectifs et fréquences",
        "content": "L'**effectif** d'une valeur est le nombre de fois où elle apparaît dans la série ; l'**effectif total** $N$ est la somme de tous les effectifs.\n$$\\text{Fréquence d'une valeur} = \\frac{\\text{effectif de cette valeur}}{\\text{effectif total}}$$\n• Une fréquence s'écrit sous forme de fraction, de nombre décimal ou de pourcentage : pour 6 élèves sur 24, $\\frac{6}{24} = 0{,}25$, soit $25\\,\\%$.\n• Une fréquence est comprise entre $0$ et $1$ ; la somme des fréquences de toutes les valeurs vaut $1$ (soit $100\\,\\%$)."
      },
      {
        "title": "6. Diagrammes et histogrammes",
        "content": "• **Diagramme en barres ou en bâtons** : chaque valeur est placée sur un axe, la hauteur de sa barre est proportionnelle à son effectif.\n• **Diagramme circulaire** : chaque valeur correspond à un secteur dont l'angle est proportionnel à l'effectif, le disque entier ($360^\\circ$) représentant l'effectif total.\n• Quand les valeurs sont nombreuses et variées (tailles, durées, masses), on les regroupe en **classes**. La classe $[150 ; 155[$ contient les valeurs $x$ telles que $150 \\le x < 155$ : la borne de gauche est **incluse**, la borne de droite est **exclue**.\n• L'**amplitude** d'une classe est la différence entre ses bornes : pour $[150 ; 155[$, elle vaut $155 - 150 = 5$.\n• Un **histogramme à classes de même amplitude** représente chaque classe par un rectangle. Les rectangles ont la **même largeur**, sont **accolés**, et leur **hauteur est proportionnelle à l'effectif** de la classe.\n• Un histogramme ne donne pas les valeurs exactes de la série : on sait seulement combien de valeurs se trouvent dans chaque classe."
      },
      {
        "title": "À retenir pour le brevet",
        "content": "• Moyenne pondérée $= \\dfrac{\\text{somme des (valeur} \\times \\text{effectif)}}{\\text{effectif total}}$.\n• Médiane : ranger, puis prendre la valeur du milieu ($N$ impair) ou la moyenne des deux valeurs centrales ($N$ pair).\n• Étendue $=$ max $-$ min : mesure la dispersion.\n• Pour comparer deux séries : une valeur de position (moyenne ou médiane) **et** la dispersion (étendue).\n• Fréquence $= \\dfrac{\\text{effectif}}{\\text{effectif total}}$ ; la somme de toutes les fréquences vaut $1$.\n• Classe $[a ; b[$ : $a$ inclus, $b$ exclu, amplitude $b - a$.\n• Histogramme à classes de même amplitude : rectangles accolés, de même largeur, de hauteur proportionnelle à l'effectif.\n\n**Automatismes** :\n• Médiane de $3 ; 8 ; 9 ; 12 ; 20$ ? $\\to$ $9$.\n• Moyenne de $10$, $12$, $17$ ? $\\to$ $13$.\n• Étendue de $4 ; 11 ; 7 ; 2$ ? $\\to$ $9$.\n• Amplitude de la classe $[20 ; 30[$ ? $\\to$ $10$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Déterminer la médiane à partir d'un tableau d'effectifs avec ECC",
        "example": "Notes sur 20 (x) : 8, 10, 12, 15. Effectifs (n) : 3, 7, 8, 2. Déterminer la note médiane.",
        "steps": [
          "**Étape 1 (Effectif total)** : $N = 3 + 7 + 8 + 2 = 20$ élèves.",
          "**Étape 2 (Effectifs cumulés croissants ECC)** : Notes : 8 (ECC: 3) ; 10 (ECC: 10) ; 12 (ECC: 18) ; 15 (ECC: 20).",
          "**Étape 3 (Rangs médians)** : $N = 20$ est pair, et $\\frac{20}{2} = 10$. On cherche la 10e et la 11e valeur.",
          "**Étape 4 (Lecture)** : La 10e valeur est 10. La 11e valeur tombe dans la tranche de 12.",
          "**Étape 5 (Conclusion)** : $\\text{Médiane} = \\frac{10 + 12}{2} = 11$."
        ]
      },
      {
        "title": "Méthode : Calculer une moyenne pondérée à partir d'un tableau d'effectifs",
        "example": "Notes sur 20 d'une classe : la note $8$ a été obtenue par 3 élèves, $10$ par 7, $12$ par 8 et $15$ par 2. Calculer la note moyenne.",
        "steps": [
          "**Étape 1 (Produits valeur × effectif)** : $8 \\times 3 = 24$ ; $10 \\times 7 = 70$ ; $12 \\times 8 = 96$ ; $15 \\times 2 = 30$.",
          "**Étape 2 (Somme)** : $24 + 70 + 96 + 30 = 220$.",
          "**Étape 3 (Effectif total)** : $3 + 7 + 8 + 2 = 20$.",
          "**Étape 4 (Moyenne)** : $\\bar{x} = \\dfrac{220}{20} = 11$. La moyenne de la classe est $11$ sur $20$ (égale ici à la médiane trouvée dans la méthode précédente)."
        ]
      },
      {
        "title": "Méthode : Comparer deux séries statistiques",
        "example": "Deux joueurs ont marqué, sur 6 matchs : Alex $12 ; 14 ; 15 ; 15 ; 16 ; 18$ et Bilal $5 ; 9 ; 15 ; 17 ; 22 ; 22$. Comparer leurs résultats.",
        "steps": [
          "**Moyennes** : Alex $\\dfrac{90}{6} = 15$ points ; Bilal $\\dfrac{5 + 9 + 15 + 17 + 22 + 22}{6} = \\dfrac{90}{6} = 15$ points.",
          "**Médianes** (séries déjà rangées, $N = 6$) : Alex $\\dfrac{15 + 15}{2} = 15$ ; Bilal $\\dfrac{15 + 17}{2} = 16$.",
          "**Étendues** : Alex $18 - 12 = 6$ ; Bilal $22 - 5 = 17$.",
          "**Conclusion** : même moyenne, mais Bilal a des résultats beaucoup plus **dispersés** ; Alex est plus régulier. Bilal a marqué au moins 16 points dans la moitié de ses matchs."
        ]
      },
      {
        "title": "Méthode : Lire et construire un histogramme à classes de même amplitude",
        "example": "Les tailles (en cm) de 30 élèves sont regroupées en classes :\n$$\\begin{array}{|l|c|c|c|c|c|}\\hline \\text{Taille} & [150 ; 155[ & [155 ; 160[ & [160 ; 165[ & [165 ; 170[ & [170 ; 175[ \\\\ \\hline \\text{Effectif} & 4 & 7 & 10 & 6 & 3 \\\\ \\hline \\end{array}$$\nConstruire l'histogramme de cette série, puis déterminer combien d'élèves mesurent au moins 165 cm et la fréquence de la classe $[160 ; 165[$.",
        "steps": [
          "**Étape 1 (Amplitude)** : toutes les classes ont pour amplitude $155 - 150 = 5$ cm ; les rectangles auront donc la même largeur.",
          "**Étape 2 (Axes)** : sur l'axe horizontal, on place les bornes $150$, $155$, $160$, $165$, $170$, $175$ ; sur l'axe vertical, on gradue les effectifs de $0$ à $10$.",
          "**Étape 3 (Rectangles)** : au-dessus de chaque classe, on trace un rectangle dont la hauteur est l'effectif de la classe, sans laisser d'espace entre les rectangles :\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:12px 0;\"><svg class=\"geo-svg-figure\" viewBox=\"0 0 316 205\" width=\"316\" height=\"205\" style=\"max-width:316px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"40\" y1=\"160\" x2=\"308\" y2=\"160\" stroke=\"#cbd5e1\" stroke-width=\"0.7\"/><text x=\"35\" y=\"163.5\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"var(--text-main, #334155)\">0</text><line x1=\"40\" y1=\"146\" x2=\"308\" y2=\"146\" stroke=\"#cbd5e1\" stroke-width=\"0.7\"/><text x=\"35\" y=\"149.5\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"var(--text-main, #334155)\">1</text><line x1=\"40\" y1=\"132\" x2=\"308\" y2=\"132\" stroke=\"#cbd5e1\" stroke-width=\"0.7\"/><text x=\"35\" y=\"135.5\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"var(--text-main, #334155)\">2</text><line x1=\"40\" y1=\"118\" x2=\"308\" y2=\"118\" stroke=\"#cbd5e1\" stroke-width=\"0.7\"/><text x=\"35\" y=\"121.5\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"var(--text-main, #334155)\">3</text><line x1=\"40\" y1=\"104\" x2=\"308\" y2=\"104\" stroke=\"#cbd5e1\" stroke-width=\"0.7\"/><text x=\"35\" y=\"107.5\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"var(--text-main, #334155)\">4</text><line x1=\"40\" y1=\"90\" x2=\"308\" y2=\"90\" stroke=\"#cbd5e1\" stroke-width=\"0.7\"/><text x=\"35\" y=\"93.5\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"var(--text-main, #334155)\">5</text><line x1=\"40\" y1=\"76\" x2=\"308\" y2=\"76\" stroke=\"#cbd5e1\" stroke-width=\"0.7\"/><text x=\"35\" y=\"79.5\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"var(--text-main, #334155)\">6</text><line x1=\"40\" y1=\"62\" x2=\"308\" y2=\"62\" stroke=\"#cbd5e1\" stroke-width=\"0.7\"/><text x=\"35\" y=\"65.5\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"var(--text-main, #334155)\">7</text><line x1=\"40\" y1=\"48\" x2=\"308\" y2=\"48\" stroke=\"#cbd5e1\" stroke-width=\"0.7\"/><text x=\"35\" y=\"51.5\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"var(--text-main, #334155)\">8</text><line x1=\"40\" y1=\"34\" x2=\"308\" y2=\"34\" stroke=\"#cbd5e1\" stroke-width=\"0.7\"/><text x=\"35\" y=\"37.5\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"var(--text-main, #334155)\">9</text><line x1=\"40\" y1=\"20\" x2=\"308\" y2=\"20\" stroke=\"#cbd5e1\" stroke-width=\"0.7\"/><text x=\"35\" y=\"23.5\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"var(--text-main, #334155)\">10</text><rect x=\"52\" y=\"104\" width=\"48\" height=\"56.0\" fill=\"rgba(37, 99, 235, 0.55)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1\"/><rect x=\"100\" y=\"62\" width=\"48\" height=\"98.0\" fill=\"rgba(37, 99, 235, 0.55)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1\"/><rect x=\"148\" y=\"20\" width=\"48\" height=\"140.0\" fill=\"rgba(37, 99, 235, 0.55)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1\"/><rect x=\"196\" y=\"76\" width=\"48\" height=\"84.0\" fill=\"rgba(37, 99, 235, 0.55)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1\"/><rect x=\"244\" y=\"118\" width=\"48\" height=\"42.0\" fill=\"rgba(37, 99, 235, 0.55)\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"1\"/><line x1=\"52\" y1=\"160\" x2=\"52\" y2=\"164\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.1\"/><text x=\"52\" y=\"176\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #334155)\">150</text> <line x1=\"100\" y1=\"160\" x2=\"100\" y2=\"164\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.1\"/><text x=\"100\" y=\"176\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #334155)\">155</text> <line x1=\"148\" y1=\"160\" x2=\"148\" y2=\"164\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.1\"/><text x=\"148\" y=\"176\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #334155)\">160</text> <line x1=\"196\" y1=\"160\" x2=\"196\" y2=\"164\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.1\"/><text x=\"196\" y=\"176\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #334155)\">165</text> <line x1=\"244\" y1=\"160\" x2=\"244\" y2=\"164\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.1\"/><text x=\"244\" y=\"176\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #334155)\">170</text> <line x1=\"292\" y1=\"160\" x2=\"292\" y2=\"164\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.1\"/><text x=\"292\" y=\"176\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #334155)\">175</text> <line x1=\"40\" y1=\"160\" x2=\"308\" y2=\"160\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.3\"/><line x1=\"40\" y1=\"160\" x2=\"40\" y2=\"12\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.3\"/><text x=\"44\" y=\"10\" font-family=\"system-ui, sans-serif\" font-size=\"10\" fill=\"var(--text-main, #334155)\">Effectif</text><text x=\"172\" y=\"196\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" fill=\"var(--text-main, #334155)\">Taille (en cm)</text></svg></div>",
          "**Étape 4 (Lecture)** : les élèves mesurant au moins 165 cm sont dans les classes $[165 ; 170[$ et $[170 ; 175[$, soit $6 + 3 = 9$ élèves.",
          "**Étape 5 (Fréquence)** : la classe $[160 ; 165[$ a pour fréquence $\\frac{10}{30} = \\frac{1}{3} \\approx 33\\,\\%$."
        ]
      }
    ],
    "traps": [
      "⚠️ Confondre moyenne et médiane : une série peut avoir une moyenne de 12 et une médiane de 9 !",
      "⚠️ Dans un calcul de moyenne pondérée, diviser par le nombre de colonnes au lieu de diviser par l'effectif total.",
      "⚠️ La médiane ne se calcule pas sur la série non rangée : prendre la valeur « du milieu » de la liste brute est faux.",
      "⚠️ Une valeur égale à une borne appartient à la classe dont c'est la borne de gauche : $155$ est dans $[155 ; 160[$, pas dans $[150 ; 155[$.",
      "⚠️ Dans un histogramme, les rectangles sont accolés et l'axe horizontal porte les bornes des classes, pas une valeur sous chaque rectangle."
    ],
    "flashcards": [
      {
        "q": "Qu'est-ce que la médiane d'une série statistique ordonnée ?",
        "a": "Une valeur qui partage la série ordonnée en deux groupes de même effectif (au moins 50 % en dessous, au moins 50 % au-dessus)."
      },
      {
        "q": "Comment calcule-t-on l'étendue d'une série statistique ?",
        "a": "$$\\text{Étendue} = \\text{Valeur maximale} - \\text{Valeur minimale}$$"
      },
      {
        "q": "Pour un effectif total de 25 valeurs, quel est le rang de la médiane ?",
        "a": "La 13e valeur (car $\\frac{25+1}{2} = 13$, il y a 12 valeurs avant et 12 valeurs après)."
      },
      {
        "q": "La médiane est-elle sensible aux valeurs extrêmes aberrantes ?",
        "a": "**Non**, la médiane ne dépend que de l'ordre des valeurs, contrairement à la moyenne qui est fortement influencée."
      },
      {
        "q": "Que vaut la moyenne de la série : 10 (coeff 2) et 16 (coeff 1) ?",
        "a": "$$\\frac{10 \\times 2 + 16 \\times 1}{2 + 1} = \\frac{36}{3} = 12$$"
      },
      {
        "q": "Médiane de la série $1 ; 4 ; 6 ; 9 ; 10 ; 30$ ?",
        "a": "$\\dfrac{6 + 9}{2} = 7{,}5$."
      },
      {
        "q": "Que mesure l'étendue ?",
        "a": "La **dispersion** des valeurs : l'écart entre la plus grande et la plus petite."
      },
      {
        "q": "Comment calcule-t-on la fréquence d'une valeur ?",
        "a": "$$\\text{Fréquence} = \\frac{\\text{effectif de la valeur}}{\\text{effectif total}}$$"
      },
      {
        "q": "Quelle est l'amplitude de la classe $[150 ; 155[$ ?",
        "a": "$155 - 150 = 5$."
      },
      {
        "q": "La valeur $20$ est-elle dans la classe $[10 ; 20[$ ou dans la classe $[20 ; 30[$ ?",
        "a": "Dans $[20 ; 30[$ : la borne de gauche est incluse, la borne de droite est exclue."
      },
      {
        "q": "Dans un histogramme à classes de même amplitude, que représente la hauteur d'un rectangle ?",
        "a": "L'**effectif** de la classe (la hauteur lui est proportionnelle) ; les rectangles ont la même largeur et sont accolés."
      }
    ]
  },
  "Org3": {
    "title": "Org3 : Fonctions linéaires et affines",
    "domain": "Organisation et Fonctions",
    "objectives": [
      "Reconnaître une fonction linéaire, définie par $f(x) = ax$, et une fonction affine, définie par $f(x) = ax + b$.",
      "Associer fonction linéaire et situation de proportionnalité.",
      "Représenter graphiquement une fonction affine par une droite dans un repère.",
      "Lire et interpréter le coefficient directeur $a$ (la pente) et l'ordonnée à l'origine $b$.",
      "Calculer le coefficient directeur à l'aide de la formule $a = \\frac{f(x_2) - f(x_1)}{x_2 - x_1}$.",
      "Modéliser des situations concrètes (tarifs avec abonnement, pourcentages d'augmentation/réduction).",
      "Utiliser le taux d'évolution et le coefficient multiplicateur d'une évolution en pourcentage."
    ],
    "keyPoints": [
      {
        "title": "1. Fonctions linéaires : $f(x) = ax$",
        "content": "• Une **fonction linéaire** traduit une situation de **proportionnalité** :\n$$f(x) = ax \\quad (a \\text{ est un nombre donné})$$\n• Sa représentation graphique est une **droite qui passe TOUJOURS par l'origine du repère $(0 ; 0)$**.\n• Le nombre $a$ est à la fois le coefficient de proportionnalité et le **coefficient directeur** (la pente) de la droite."
      },
      {
        "title": "2. Fonctions affines : $f(x) = ax + b$",
        "content": "• Une **fonction affine** est de la forme :\n$$f(x) = ax + b \\quad (a \\text{ et } b \\text{ sont des nombres donnés})$$\n• Sa représentation graphique est une **droite** qui coupe l'axe des ordonnées au point $(0 ; b)$.\n• **$b$ est l'ordonnée à l'origine** : $f(0) = b$.\n• **$a$ est le coefficient directeur (pente)** : quand on avance de 1 unité vers la droite sur l'axe des abscisses, on monte de $a$ unités (si $a < 0$, on descend : pour $a = -2$, on descend de 2 unités).\n\n**Pour aller plus loin** : deux fonctions affines sont représentées par des droites parallèles (éventuellement confondues) si et seulement si elles ont le même coefficient directeur. *Exemple* : les droites qui représentent $f$, définie par $f(x) = 2x + 1$, et $g$, définie par $g(x) = 2x - 3$, sont parallèles, car elles ont le même coefficient directeur $2$."
      },
      {
        "title": "3. Calcul du coefficient directeur $a$",
        "content": "Si on connaît deux points $A(x_1 ; y_1)$ et $B(x_2 ; y_2)$ de la droite ($x_1 \\neq x_2$) :\n$$a = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{f(x_2) - f(x_1)}{x_2 - x_1}$$\nUne fois $a$ déterminé, on calcule $b$ en remplaçant par les coordonnées d'un des deux points : $b = y_1 - a x_1$."
      },
      {
        "title": "4. Pourcentages : taux d'évolution et coefficient multiplicateur",
        "content": "• Une grandeur passe d'une **valeur initiale** $V_i$ à une **valeur finale** $V_f$.\n• Son **taux d'évolution** est le quotient $\\dfrac{V_f - V_i}{V_i}$, exprimé en pourcentage : il est positif pour une hausse, négatif pour une baisse.\n• Son **coefficient multiplicateur** est le nombre $k$ tel que $V_f = k \\times V_i$, c'est-à-dire $k = \\dfrac{V_f}{V_i}$.\n• Augmenter une quantité de $t$ % (taux $+t$ %) revient à la multiplier par $k = 1 + \\frac{t}{100}$ : c'est la fonction linéaire $f$ définie par $f(x) = \\left(1 + \\frac{t}{100}\\right)x$.\n• Diminuer une quantité de $t$ % (taux $-t$ %) revient à la multiplier par $k = 1 - \\frac{t}{100}$ : c'est la fonction linéaire $f$ définie par $f(x) = \\left(1 - \\frac{t}{100}\\right)x$.\n\n**Exemple** : un prix passe de $80$ € à $92$ €. Son coefficient multiplicateur est $k = \\dfrac{92}{80} = 1{,}15$ et son taux d'évolution est $\\dfrac{92 - 80}{80} = 0{,}15$, soit $+15\\,\\%$. La fonction linéaire associée est $f(x) = 1{,}15x$."
      },
      {
        "title": "5. Réinvestir le ratio (vu en 4e)",
        "content": "Deux nombres $x$ et $y$ sont dans le **ratio $a : b$** si $\\dfrac{x}{a} = \\dfrac{y}{b}$. On a alors $y = \\dfrac{b}{a} \\times x$ : $y$ est une **fonction linéaire** de $x$, de coefficient $\\dfrac{b}{a}$.\n\nPour **partager une quantité $T$** selon le ratio $a : b$, on calcule la valeur d'une part, $\\dfrac{T}{a + b}$, puis on la multiplie par $a$ et par $b$.\n\n**Exemple** : on prépare $450$ mL de boisson en mélangeant du sirop et de l'eau dans le ratio $2 : 7$. Il y a $2 + 7 = 9$ parts, et une part vaut $450 \\div 9 = 50$ mL. On verse donc $2 \\times 50 = 100$ mL de sirop et $7 \\times 50 = 350$ mL d'eau. Le volume d'eau est une fonction linéaire du volume de sirop, de coefficient $\\dfrac{7}{2} = 3{,}5$ : $100 \\times 3{,}5 = 350$."
      },
      {
        "title": "À retenir pour le brevet",
        "content": "• Linéaire $f(x) = ax$ : proportionnalité, droite passant par l'origine.\n• Ratio $a : b$ : partager en $a + b$ parts égales ; $y = \\dfrac{b}{a} x$ est une fonction linéaire.\n• Affine $f(x) = ax + b$ : droite qui coupe l'axe des ordonnées en $b$.\n• $a$ = coefficient directeur : quand $x$ augmente de $1$, $f(x)$ augmente de $a$ ; $a = \\dfrac{f(x_2) - f(x_1)}{x_2 - x_1}$.\n• $a > 0$ : droite qui monte ; $a < 0$ : droite qui descend ; $a = 0$ : droite horizontale.\n\n**Automatismes** :\n• $f(x) = -2x + 5$ : $f(3)$ ? $\\to$ $-1$.\n• Fonction linéaire telle que $f(4) = 10$ ? $\\to$ $f(x) = 2{,}5x$.\n• Une hausse de $5\\ \\%$ : coefficient multiplicateur ? $\\to$ $1{,}05$ (fonction $x \\longmapsto 1{,}05x$).\n• Un prix passe de $50$ € à $40$ € : taux d'évolution ? $\\to$ $-20\\ \\%$ (coefficient multiplicateur $0{,}8$)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Déterminer l'expression d'une fonction affine",
        "example": "Déterminer la fonction affine f telle que f(2) = 7 et f(5) = 16.",
        "steps": [
          "**Étape 1 (Calcul du coefficient directeur a)** :\n$$a = \\frac{f(5) - f(2)}{5 - 2} = \\frac{16 - 7}{3} = \\frac{9}{3} = 3$$.\nLa fonction s'écrit donc $f(x) = 3x + b$.",
          "**Étape 2 (Calcul de l'ordonnée à l'origine b)** : On utilise $f(2) = 7$ :\n$3 \\times 2 + b = 7 \\implies 6 + b = 7 \\implies b = 7 - 6 = 1$.",
          "**Conclusion** : L'expression de la fonction est $f(x) = 3x + 1$."
        ]
      },
      {
        "title": "Méthode : Lire le coefficient directeur et l'ordonnée à l'origine sur un graphique",
        "example": "La droite $d$ ci-dessous représente une fonction affine $f$. Déterminer l'expression de $f(x)$.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 180 205\" width=\"180\" height=\"205\" style=\"max-width:220px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Droite représentant une fonction affine passant par les points (0 ; 1) et (2 ; 4)\">\n  <line x1=\"20\" y1=\"190\" x2=\"20\" y2=\"30\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"40\" y1=\"190\" x2=\"40\" y2=\"30\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"60\" y1=\"190\" x2=\"60\" y2=\"30\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"80\" y1=\"190\" x2=\"80\" y2=\"30\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"100\" y1=\"190\" x2=\"100\" y2=\"30\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"120\" y1=\"190\" x2=\"120\" y2=\"30\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"140\" y1=\"190\" x2=\"140\" y2=\"30\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"20\" y1=\"190\" x2=\"140\" y2=\"190\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"20\" y1=\"170\" x2=\"140\" y2=\"170\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"20\" y1=\"150\" x2=\"140\" y2=\"150\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"20\" y1=\"130\" x2=\"140\" y2=\"130\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"20\" y1=\"110\" x2=\"140\" y2=\"110\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"20\" y1=\"90\" x2=\"140\" y2=\"90\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"20\" y1=\"70\" x2=\"140\" y2=\"70\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"20\" y1=\"50\" x2=\"140\" y2=\"50\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"20\" y1=\"30\" x2=\"140\" y2=\"30\" stroke=\"#e2e8f0\" stroke-width=\"1\" /><line x1=\"15\" y1=\"170\" x2=\"145\" y2=\"170\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\" /><line x1=\"40\" y1=\"195\" x2=\"40\" y2=\"25\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\" /><text x=\"60\" y=\"183\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"var(--text-muted, #64748b)\">1</text><text x=\"80\" y=\"183\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"var(--text-muted, #64748b)\">2</text><text x=\"100\" y=\"183\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"var(--text-muted, #64748b)\">3</text><text x=\"120\" y=\"183\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"var(--text-muted, #64748b)\">4</text><text x=\"35\" y=\"154\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"var(--text-muted, #64748b)\">1</text><text x=\"35\" y=\"94\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"var(--text-muted, #64748b)\">4</text><text x=\"35\" y=\"34\" text-anchor=\"end\" font-family=\"system-ui, sans-serif\" font-size=\"10\" font-weight=\"600\" fill=\"var(--text-muted, #64748b)\">7</text>\n  <line x1=\"20\" y1=\"180\" x2=\"120\" y2=\"30\" stroke=\"var(--primary, #2563eb)\" stroke-width=\"2.5\" />\n  <polyline points=\"40,150 80,150 80,90\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-dasharray=\"5 4\" />\n  <circle cx=\"40\" cy=\"150\" r=\"4\" fill=\"#10b981\" /><circle cx=\"80\" cy=\"90\" r=\"4\" fill=\"#10b981\" />\n  <text x=\"60\" y=\"164\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#b45309\">+2</text><text x=\"86\" y=\"124\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#b45309\">+3</text>\n  <text x=\"126\" y=\"40\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">d</text>\n</svg>\n</div>\n",
        "steps": [
          "**Ordonnée à l'origine** : la droite coupe l'axe des ordonnées au point $(0 ; 1)$, donc $b = f(0) = 1$.",
          "**Coefficient directeur** : en partant du point $(0 ; 1)$, quand on avance de $2$ unités vers la droite, on monte de $3$ unités pour retrouver la droite au point $(2 ; 4)$. Donc $a = \\dfrac{3}{2} = 1{,}5$.",
          "**Conclusion** : $f(x) = 1{,}5x + 1$.",
          "**Vérification** : $f(2) = 1{,}5 \\times 2 + 1 = 4$, le point $(2 ; 4)$ est bien sur la droite."
        ]
      },
      {
        "title": "Modèle de rédaction (brevet) : Comparer deux tarifs",
        "example": "Piscine. Tarif A : $6$ € l'entrée. Tarif B : abonnement annuel de $30$ € puis $3{,}50$ € l'entrée. On note $x$ le nombre d'entrées. À partir de combien d'entrées le tarif B est-il plus avantageux ?",
        "steps": [
          "**1. Modéliser** : tarif A : $f(x) = 6x$ (fonction linéaire : prix proportionnel au nombre d'entrées) ; tarif B : $g(x) = 3{,}5x + 30$ (fonction affine).",
          "**2. Égalité des prix** : $6x = 3{,}5x + 30 \\iff 2{,}5x = 30 \\iff x = \\dfrac{30}{2{,}5} = 12$. Pour 12 entrées, les deux tarifs coûtent $72$ € ($6 \\times 12 = 72$ et $3{,}5 \\times 12 + 30 = 72$).",
          "**3. Comparer** : pour $x = 20$, $f(20) = 120$ € et $g(20) = 100$ € : au-delà de 12 entrées, B est moins cher (la droite de $g$ monte moins vite car $3{,}5 < 6$).",
          "**4. Conclusion** : le tarif B est plus avantageux à partir de **13 entrées**."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans la formule $a = \\frac{y_2 - y_1}{x_2 - x_1}$, inverser numérateur et dénominateur : ce sont les $y$ en haut et les $x$ en bas !",
      "⚠️ Penser qu'une fonction affine est proportionnelle : $f(x) = ax + b$ N'EST PAS proportionnelle dès que $b \\neq 0$.",
      "⚠️ Pour tracer une droite, placer au moins deux points calculés (un troisième sert de contrôle) ; ne pas relier des points d'une fonction qui n'est pas affine par des segments."
    ],
    "flashcards": [
      {
        "q": "Quelle est l'expression générale d'une fonction affine ?",
        "a": "$$f(x) = ax + b$$\n*(où $a$ est le coefficient directeur et $b$ l'ordonnée à l'origine)*."
      },
      {
        "q": "Quelle est la particularité graphique d'une fonction linéaire, définie par $f(x) = ax$ ?",
        "a": "Sa représentation graphique est une **droite qui passe par l'origine $(0 ; 0)$**."
      },
      {
        "q": "Que représente graphiquement le nombre $b$ dans $f(x) = ax + b$ ?",
        "a": "L'**ordonnée à l'origine** : c'est l'ordonnée du point où la droite coupe l'axe vertical."
      },
      {
        "q": "Quelle fonction linéaire modélise une réduction de 20 % ?",
        "a": "$$f(x) = 0{,}80x \\quad (\\text{car } 1 - 0{,}20 = 0{,}80)$$"
      },
      {
        "q": "Qu'est-ce que le coefficient multiplicateur d'une évolution ?",
        "a": "C'est le nombre $k$ par lequel on multiplie la valeur initiale pour obtenir la valeur finale : $k = \\dfrac{V_f}{V_i}$. Pour une hausse de $t$ %, $k = 1 + \\dfrac{t}{100}$ ; pour une baisse de $t$ %, $k = 1 - \\dfrac{t}{100}$."
      },
      {
        "q": "Comment calcule-t-on le taux d'évolution d'une grandeur ?",
        "a": "On calcule $\\dfrac{V_f - V_i}{V_i}$ et on l'exprime en pourcentage (positif pour une hausse, négatif pour une baisse). Exemple : de $80$ € à $92$ €, on obtient $\\dfrac{12}{80} = 0{,}15$, soit $+15\\,\\%$."
      },
      {
        "q": "Si le coefficient directeur $a$ d'une droite est négatif ($a < 0$), comment est orientée la droite ?",
        "a": "La droite est **descendante** (la fonction est décroissante)."
      },
      {
        "q": "$f(x) = 4x - 3$ : coefficient directeur et ordonnée à l'origine ?",
        "a": "$a = 4$ et $b = -3$."
      },
      {
        "q": "$f$ est affine, $f(0) = 2$ et $f(1) = 5$. Expression de $f$ ?",
        "a": "$b = 2$ et $a = 5 - 2 = 3$, donc $f(x) = 3x + 2$."
      }
    ]
  },
  "Org4": {
    "title": "Org4 : Probabilités et Expériences aléatoires",
    "domain": "Organisation et Fonctions",
    "objectives": [
      "Identifier les 2 conditions pour qu'une expérience soit aléatoire (issues connues, résultat imprévisible).",
      "Calculer la probabilité d'un événement en situation d'équiprobabilité.",
      "Utiliser la propriété de l'événement contraire : $P(\\bar{A}) = 1 - P(A)$.",
      "Représenter une expérience à deux épreuves par un tableau à double entrée et y compter les issues favorables.",
      "Traiter un tirage avec remise et un tirage sans remise à l'aide d'un tableau à double entrée.",
      "Interpréter la simulation d'une expérience aléatoire (tableur ou Scratch) et estimer une probabilité par une fréquence.",
      "Pour aller plus loin — Complément (utile en seconde) : lire un arbre pondéré et appliquer ses règles de calcul (produit sur un chemin, somme des chemins)."
    ],
    "keyPoints": [
      {
        "title": "1. Les deux conditions d'une expérience aléatoire",
        "content": "Définition du cours : Une expérience est dite **aléatoire** si elle remplit deux conditions indispensables :\n1. On **connaît tous les résultats possibles** (appelés les **issues**).\n2. Le résultat final **n'est pas prévisible** avec certitude à l'avance."
      },
      {
        "title": "2. Événements et Équiprobabilité",
        "content": "• La probabilité d'un événement $A$ est un nombre compris entre 0 et 1 : $$0 \\le P(A) \\le 1$$\n• Un événement impossible a pour probabilité $0$ ; un événement certain a pour probabilité $1$.\n• La **somme des probabilités de toutes les issues possibles est TOUJOURS égale à 1**.\n• En situation d'**équiprobabilité** : $$P(A) = \\frac{\\text{Nombre d'issues favorables à } A}{\\text{Nombre total d'issues possibles}}$$"
      },
      {
        "title": "3. Événement contraire",
        "content": "L'événement contraire de $A$, noté $\\bar{A}$ (ou « non A »), est constitué de toutes les issues qui ne réalisent pas $A$ :\n$$P(\\bar{A}) = 1 - P(A) \\quad \\iff \\quad P(A) + P(\\bar{A}) = 1$$\n*Exemple* : Si la probabilité de tirer une carte rouge est $\\frac{1}{4}$, alors la probabilité de ne pas tirer de carte rouge est $1 - \\frac{1}{4} = \\frac{3}{4}$."
      },
      {
        "title": "4. Expériences à deux épreuves : le tableau à double entrée",
        "content": "• Une expérience à **deux épreuves** enchaîne deux expériences aléatoires (deux lancers, deux tirages…). Chaque issue est alors un **couple** : (résultat de la 1re épreuve ; résultat de la 2e épreuve).\n• Un **tableau à double entrée** donne toutes ces issues : les résultats de la 1re épreuve en lignes, ceux de la 2e en colonnes. **Chaque case est une issue.**\n• Quand les cases sont **équiprobables** : $$P(A) = \\frac{\\text{nombre de cases qui réalisent } A}{\\text{nombre total de cases}}$$\n*Exemple* : on lance deux fois une pièce équilibrée.\n\n| 1er lancer / 2e lancer | Pile | Face |\n|:---:|:---:|:---:|\n| **Pile** | (P ; P) | (P ; F) |\n| **Face** | (F ; P) | (F ; F) |\n\nIl y a $2 \\times 2 = 4$ cases équiprobables, et une seule donne « deux Pile » : $P(\\text{deux Pile}) = \\dfrac{1}{4}$.\n\n• **Objets identiques** : pour obtenir des cases équiprobables, on les numérote. Un sac de 3 boules rouges et 2 vertes donne 5 lignes ($R_1$, $R_2$, $R_3$, $V_1$, $V_2$), et non 2.\n• **Avec remise**, toutes les cases sont possibles. **Sans remise**, une même boule ne peut pas sortir deux fois : on **barre les cases de la diagonale**."
      },
      {
        "title": "5. Fréquence, probabilité et simulation",
        "content": "Quand on répète une expérience aléatoire un **grand nombre de fois**, la **fréquence** d'un événement se stabilise autour de sa **probabilité**. On peut ainsi **estimer** une probabilité qu'on ne sait pas calculer (objet non symétrique, situation réelle).\n*Attention* : sur peu d'essais, la fréquence peut être éloignée de la probabilité, et le hasard « n'a pas de mémoire » : après 5 Pile de suite, la probabilité d'obtenir Pile au lancer suivant reste $\\dfrac{1}{2}$.\n\n**Simuler une expérience** : plutôt que de la réaliser réellement, on peut faire répéter une expérience par un tableur ou un programme.\n• Dans un tableur, la formule `=ALEA.ENTRE.BORNES(1;6)` donne un entier au hasard entre 1 et 6 : elle simule le lancer d'un dé équilibré.\n• Dans Scratch, le bloc « nombre aléatoire entre 1 et 6 » joue le même rôle.\n• On compte combien de fois l'événement se réalise, puis on calcule sa **fréquence** : elle donne une **estimation** de la probabilité, et elle change d'une simulation à l'autre.\n*Exemple* : sur $1\\,000$ lancers simulés, le 6 sort $172$ fois. Sa fréquence est $\\dfrac{172}{1\\,000} = 0{,}172$, proche de la probabilité $\\dfrac{1}{6} \\approx 0{,}167$."
      },
      {
        "title": "Pour aller plus loin — Complément (utile en seconde) : l'arbre pondéré",
        "content": "En 3e, les expériences à deux épreuves se traitent par un tableau à double entrée. L'**arbre pondéré** est un complément, utile en seconde :\n• **Règle 1 (Somme des branches)** : La somme des probabilités des branches issues d'un même nœud est égale à 1.\n• **Règle 2 (Chemin / Produit)** : La probabilité de l'issue associée à un chemin complet est le **produit des probabilités** rencontrées le long de ce chemin.\n• **Règle 3 (Événement composé / Somme)** : La probabilité d'un événement associé à plusieurs chemins est la **somme des probabilités** de ces chemins."
      },
      {
        "title": "À retenir pour le brevet",
        "content": "• $0 \\le P(A) \\le 1$ et $P(\\bar{A}) = 1 - P(A)$.\n• Équiprobabilité : $P(A) = \\dfrac{\\text{issues favorables}}{\\text{issues possibles}}$.\n• Deux épreuves : on dresse un **tableau à double entrée** ; chaque case est une issue et, si les cases sont équiprobables, $P(A) = \\dfrac{\\text{cases favorables}}{\\text{nombre total de cases}}$.\n• Sans remise : la même boule ne peut pas sortir deux fois, on **barre la diagonale** du tableau.\n\n**Automatismes** :\n• Dé équilibré : probabilité d'obtenir un nombre pair ? $\\to$ $\\dfrac{1}{2}$.\n• $P(A) = 0{,}35$ : $P(\\bar{A})$ ? $\\to$ $0{,}65$.\n• Deux lancers de pièce : probabilité de « deux Pile » ? $\\to$ $\\dfrac{1}{4}$.\n• Sur $500$ lancers simulés, un événement se réalise $120$ fois : fréquence ? $\\to$ $0{,}24$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer une probabilité avec un tableau à double entrée",
        "example": "On lance une pièce équilibrée puis on tire une boule dans un sac contenant 2 boules vertes et 3 boules rouges. Quelle est la probabilité d'obtenir Pile puis une boule rouge ?",
        "steps": [
          "**Étape 1 (Issues de chaque épreuve)** : la pièce donne Pile (P) ou Face (F). On numérote les boules pour que les issues soient équiprobables : $V_1$, $V_2$, $R_1$, $R_2$, $R_3$.",
          "**Étape 2 (Tableau à double entrée)** :\n\n| Pièce / boule | $V_1$ | $V_2$ | $R_1$ | $R_2$ | $R_3$ |\n|:---:|:---:|:---:|:---:|:---:|:---:|\n| **P** | (P ; $V_1$) | (P ; $V_2$) | (P ; $R_1$) | (P ; $R_2$) | (P ; $R_3$) |\n| **F** | (F ; $V_1$) | (F ; $V_2$) | (F ; $R_1$) | (F ; $R_2$) | (F ; $R_3$) |\n\nIl y a $2 \\times 5 = 10$ cases équiprobables.",
          "**Étape 3 (Cases favorables)** : Pile puis une boule rouge correspond aux $3$ cases (P ; $R_1$), (P ; $R_2$) et (P ; $R_3$). Donc :\n$$P = \\frac{3}{10} = 0{,}3$$"
        ]
      },
      {
        "title": "Modèle de rédaction (brevet) : Tirage sans remise et tableau à double entrée",
        "example": "Un sac contient 3 boules rouges (R) et 2 boules vertes (V), indiscernables au toucher. On tire une boule, on ne la remet pas, puis on en tire une seconde. Calculer la probabilité d'obtenir deux boules de la même couleur.",
        "steps": [
          "**1. Issues** : on numérote les boules $R_1$, $R_2$, $R_3$, $V_1$, $V_2$ pour que les issues soient équiprobables. Le tirage étant sans remise, une même boule ne peut pas sortir deux fois : on barre (×) les cases de la diagonale.",
          "**2. Tableau** (1er tirage en ligne, 2e tirage en colonne) :\n\n| 1er tirage / 2e tirage | $R_1$ | $R_2$ | $R_3$ | $V_1$ | $V_2$ |\n|:---:|:---:|:---:|:---:|:---:|:---:|\n| $R_1$ | × | RR | RR | RV | RV |\n| $R_2$ | RR | × | RR | RV | RV |\n| $R_3$ | RR | RR | × | RV | RV |\n| $V_1$ | VR | VR | VR | × | VV |\n| $V_2$ | VR | VR | VR | VV | × |\n\nIl reste $5 \\times 5 - 5 = 20$ cases équiprobables.",
          "**3. Cases favorables** : « même couleur » correspond aux cases RR ($6$ cases) et aux cases VV ($2$ cases), soit $6 + 2 = 8$ cases.",
          "**4. Conclusion** : $P(\\text{même couleur}) = \\dfrac{8}{20} = \\dfrac{2}{5} = 0{,}4$.",
          "**Contrôle** : RR, RV, VR et VV occupent $6 + 6 + 6 + 2 = 20$ cases : le tableau est complet."
        ]
      },
      {
        "title": "Méthode : Estimer une probabilité par une fréquence",
        "example": "On lance $500$ fois une punaise : elle tombe « pointe en haut » $315$ fois. Estimer la probabilité de l'événement « pointe en haut ».",
        "steps": [
          "**Étape 1 (Fréquence)** : $f = \\dfrac{315}{500} = 0{,}63$.",
          "**Étape 2 (Fréquence et probabilité)** : la punaise n'est pas un objet symétrique, on ne peut pas calculer la probabilité par équiprobabilité. Mais quand le nombre de lancers est grand, la fréquence observée se rapproche de la probabilité.",
          "**Étape 3 (Conclusion)** : en notant $H$ l'événement « pointe en haut », on estime $P(H) \\approx 0{,}63$. Avec $5\\,000$ lancers, l'estimation serait plus fiable."
        ]
      },
      {
        "title": "Pour aller plus loin — Complément (utile en seconde) : le même tirage sur un arbre pondéré",
        "example": "On reprend le sac du modèle de rédaction (3 boules rouges, 2 boules vertes, deux tirages sans remise) et on calcule la même probabilité avec un arbre pondéré.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:1rem 0;\">\n<svg class=\"geo-svg-figure\" viewBox=\"0 0 340 200\" width=\"340\" height=\"200\" style=\"max-width:340px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Arbre pondéré de deux tirages sans remise dans un sac de 3 boules rouges et 2 vertes\">\n  <line x1=\"20\" y1=\"100\" x2=\"100\" y2=\"50\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.6\" /><line x1=\"20\" y1=\"100\" x2=\"100\" y2=\"150\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.6\" />\n  <line x1=\"120\" y1=\"50\" x2=\"200\" y2=\"25\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.6\" /><line x1=\"120\" y1=\"50\" x2=\"200\" y2=\"75\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.6\" /><line x1=\"120\" y1=\"150\" x2=\"200\" y2=\"125\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.6\" /><line x1=\"120\" y1=\"150\" x2=\"200\" y2=\"175\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.6\" />\n  <circle cx=\"20\" cy=\"100\" r=\"3\" fill=\"var(--primary, #2563eb)\" />\n  <text x=\"110\" y=\"55\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">R</text><text x=\"110\" y=\"155\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">V</text>\n  <text x=\"210\" y=\"30\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">R</text><text x=\"210\" y=\"80\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">V</text><text x=\"210\" y=\"130\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">R</text><text x=\"210\" y=\"180\" text-anchor=\"middle\" font-family=\"system-ui, sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #0f172a)\">V</text>\n  <text x=\"50\" y=\"66\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">3/5</text><text x=\"50\" y=\"146\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">2/5</text>\n  <text x=\"150\" y=\"30\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">2/4</text><text x=\"150\" y=\"76\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">2/4</text><text x=\"150\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">3/4</text><text x=\"150\" y=\"176\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"var(--primary, #2563eb)\">1/4</text>\n  <text x=\"232\" y=\"30\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">(R ; R) : 6/20</text><text x=\"232\" y=\"80\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">(R ; V) : 6/20</text><text x=\"232\" y=\"130\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">(V ; R) : 6/20</text><text x=\"232\" y=\"180\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"var(--text-main, #0f172a)\">(V ; V) : 2/20</text>\n</svg>\n</div>\n",
        "steps": [
          "**1. Première épreuve** : $P(R) = \\dfrac{3}{5}$ et $P(V) = \\dfrac{2}{5}$.",
          "**2. Seconde épreuve (sans remise)** : il reste 4 boules. Après une rouge : 2 R et 2 V, d'où $\\dfrac{2}{4}$ et $\\dfrac{2}{4}$. Après une verte : 3 R et 1 V, d'où $\\dfrac{3}{4}$ et $\\dfrac{1}{4}$.",
          "**3. Chemins (produits)** : $P(R ; R) = \\dfrac{3}{5} \\times \\dfrac{2}{4} = \\dfrac{6}{20}$ et $P(V ; V) = \\dfrac{2}{5} \\times \\dfrac{1}{4} = \\dfrac{2}{20}$.",
          "**4. Événement (somme des chemins)** : $P(\\text{même couleur}) = \\dfrac{6}{20} + \\dfrac{2}{20} = \\dfrac{8}{20} = \\dfrac{2}{5} = 0{,}4$.",
          "**Contrôle** : la somme des quatre chemins vaut $\\dfrac{6 + 6 + 6 + 2}{20} = 1$ ; on retrouve bien $\\dfrac{8}{20}$, le résultat obtenu avec le tableau."
        ]
      }
    ],
    "traps": [
      "⚠️ Écrire une ligne par couleur au lieu d'une ligne par boule : avec 3 rouges et 2 vertes, les $4$ cases d'un tableau $2 \\times 2$ ne sont pas équiprobables, il faut $5 \\times 5$ cases !",
      "⚠️ Dans les tirages sans remise, oublier de barrer la diagonale du tableau : le nombre total d'issues n'est plus le même !",
      "⚠️ Pour aller plus loin (arbre pondéré, complément utile en seconde) : le long d'un chemin, on **multiplie** les probabilités, on ne les additionne pas !",
      "⚠️ Croire qu'après une série de Face, Pile devient « plus probable » : chaque lancer d'une pièce équilibrée garde une probabilité de $\\dfrac{1}{2}$."
    ],
    "flashcards": [
      {
        "q": "Quelles sont les deux conditions pour qu'une expérience soit aléatoire ?",
        "a": "1. On connaît **toutes les issues possibles**.\n2. Le résultat final **n'est pas prévisible** à l'avance."
      },
      {
        "q": "Que vaut toujours la somme des probabilités de toutes les issues d'une expérience aléatoire ?",
        "a": "Elle est **toujours égale à 1**."
      },
      {
        "q": "Quelle est la formule de la probabilité de l'événement contraire $\\bar{A}$ ?",
        "a": "$$P(\\bar{A}) = 1 - P(A)$$"
      },
      {
        "q": "Comment calcule-t-on une probabilité avec un tableau à double entrée ?",
        "a": "Chaque case est une issue. Si les cases sont équiprobables : $P(A) = \\dfrac{\\text{nombre de cases favorables}}{\\text{nombre total de cases}}$."
      },
      {
        "q": "(Pour aller plus loin, utile en seconde) Comment calcule-t-on la probabilité d'une issue au bout d'un chemin dans un arbre pondéré ?",
        "a": "On effectue le **produit des probabilités** portées par chacune des branches de ce chemin."
      },
      {
        "q": "Si $P(A) = 0{,}73$, quelle est la probabilité de son événement contraire ?",
        "a": "$$1 - 0{,}73 = 0{,}27$$"
      },
      {
        "q": "Sac de 3 rouges et 2 vertes, deux tirages sans remise : probabilité de deux rouges ?",
        "a": "Tableau de $5 \\times 5$ cases dont on barre la diagonale : il reste $20$ cases, dont $3 \\times 2 = 6$ pour deux rouges. $P = \\dfrac{6}{20} = \\dfrac{3}{10}$."
      },
      {
        "q": "Sur 1 000 naissances, on observe 512 garçons. Quelle estimation de la probabilité « garçon » ?",
        "a": "La fréquence $\\dfrac{512}{1000} = 0{,}512$."
      }
    ]
  },
  "Algo": {
    "title": "Algo : Algorithmique, Scratch et Tableur",
    "domain": "Algorithmique et Outils",
    "objectives": [
      "Comprendre et exploiter un tableur : saisie de formules commençant par `=`, étirement de cellules et fonctions usuelles (=SOMME, =MOYENNE).",
      "Comprendre et prévoir l'exécution d'un script Scratch comportant des variables et des blocs conditionnels.",
      "Analyser des boucles inconditionnelles (« répéter n fois ») et conditionnelles (« répéter jusqu'à ce que »).",
      "Résoudre des problèmes algorithmiques type Brevet croisant calcul littéral et programmation.",
      "Découper un problème en sous-problèmes avec un bloc personnalisé, déclencher des scripts par des événements et des messages, prévoir l'exécution de scripts en parallèle."
    ],
    "keyPoints": [
      {
        "title": "1. Le Tableur : Règles d'or et Formules clés",
        "content": "• **Règle n°1** : Toute formule de tableur commence **OBLIGATOIREMENT par le signe égal `=`** (sans le signe `=`, le tableur affiche du simple texte) !\n• **Fonctions majeures du Brevet** :\n  - `=SOMME(B2:B8)` : calcule la somme des cellules de B2 à B8.\n  - `=MOYENNE(B2:B8)` : calcule la moyenne des valeurs.\n• **Étirement / Recopie vers le bas** : les indices de ligne augmentent automatiquement : par exemple, `=B2*3` recopiée en ligne 3\ndevient `=B3*3`.\n• **Étirement vers la droite** : les lettres de colonnes avancent (`=A1+B1` devient `=B1+C1`)."
      },
      {
        "title": "2. Scratch : Les Variables",
        "content": "• Une variable informatique stocke une donnée en mémoire.\n• **« mettre [x] à 5 »** : affectation directe (initialisation de la variable à 5).\n• **« ajouter 3 à [x] »** : incrémentation de la variable ($x \\leftarrow x + 3$). Si $x$ valait 5, il vaut maintenant 8."
      },
      {
        "title": "3. Scratch : Structures conditionnelles et Capteurs",
        "content": "• **« si <condition> alors ... sinon ... »** : oriente l'exécution selon que le test est vrai ou faux.\n• **« demander ... et attendre »** : invite l'utilisateur à saisir une valeur, stockée dans le bloc bleu **« réponse »**.\n• Les conditions utilisent des opérateurs de comparaison : `=`, `<`, `>` et des opérateurs logiques `et`, `ou`, `non`.\n• Le bloc **« ( ) modulo ( ) »** donne le **reste de la division euclidienne** du premier nombre par le second : « 17 modulo 5 » vaut $2$ car $17 = 3 \\times 5 + 2$. Il sert par exemple à tester la parité : la condition « (n modulo 2) = 0 » est vraie lorsque $n$ est pair."
      },
      {
        "title": "4. Scratch : Boucles et Tracé de polygones réguliers",
        "content": "• **Boucle « répéter [N] fois »** : exécute le corps de boucle un nombre déterminé de fois.\n• **Tracé d'un polygone régulier à $N$ côtés** : tourner de $\\frac{360^\\circ}{N}$ à chaque sommet :\n  - Triangle équilatéral : tourner de $120^\\circ$ ($360/3$)\n  - Carré : tourner de $90^\\circ$ ($360/4$)\n  - Pentagone : tourner de $72^\\circ$ ($360/5$)\n  - Hexagone : tourner de $60^\\circ$ ($360/6$)."
      },
      {
        "title": "5. Scratch : Blocs personnalisés, événements et scripts en parallèle",
        "content": "• **Sous-problèmes et bloc personnalisé** : on découpe un problème en tâches plus simples, et chaque tâche devient un bloc que l'on crée soi-même (catégorie « Mes blocs »). On le **définit une seule fois**, puis on l'utilise autant de fois qu'on veut. Il peut recevoir une valeur, appelée **paramètre**.\n\n*Exemple* : le bloc « carré (c) » trace un carré de côté $c$, et le script principal l'utilise deux fois.\n\n```scratch\ndéfinir carré (c)\nrépéter 4 fois\n    avancer de (c) pas\n    tourner à droite de 90 degrés\n\nquand drapeau cliqué\neffacer tout\nstylo en position d'écriture\ncarré (30)\ncarré (60)\n```\n\nÀ l'instruction « carré (30) », $c$ prend la valeur $30$ : le lutin trace un carré de côté $30$ pas. À l'instruction « carré (60) », il trace un carré de côté $60$ pas.\n\n• **Événements** : un script commence par un bloc « chapeau » qui indique ce qui le déclenche, par exemple « quand drapeau cliqué », « quand la touche espace est pressée » ou « quand ce lutin est cliqué ».\n\n• **Messages** : un script peut en déclencher d'autres, y compris ceux d'un autre lutin. Le bloc « envoyer à tous [départ] » fait démarrer tous les scripts qui commencent par « quand je reçois [départ] ».\n\n*Exemple* :\n\n```scratch\nquand drapeau cliqué\ndire [Attention...] pendant 2 secondes\nenvoyer à tous [départ]\n\nquand je reçois [départ]\nrépéter 5 fois\n    avancer de 20 pas\n```\n\nLe lutin dit « Attention... » pendant $2$ secondes. Le second script ne démarre qu'à la réception du message : le lutin avance alors de $5 \\times 20 = 100$ pas.\n\n• **Scripts en parallèle** : plusieurs scripts déclenchés par le même événement démarrent **en même temps** et s'exécutent simultanément, et non l'un après l'autre.\n\n*Exemple* (on considère que seule l'instruction « attendre » prend du temps) :\n\n```scratch\nquand drapeau cliqué\nrépéter 4 fois\n    avancer de 20 pas\n    attendre 2 secondes\n\nquand drapeau cliqué\nattendre 3 secondes\ndire [Attention !]\n```\n\nLe premier script dure $4 \\times 2 = 8$ secondes et le second $3$ secondes. Comme ils s'exécutent en parallèle, le programme dure $8$ secondes, et non $8 + 3 = 11$ secondes. Le lutin dit « Attention ! » au bout de $3$ secondes : à cet instant, il a déjà avancé $2$ fois (aux instants $0$ et $2$ secondes), soit $40$ pas."
      },
      {
        "title": "À retenir pour le brevet",
        "content": "• Tableur : une formule commence par `=` ; la multiplication s'écrit `*` et la division `/` ; en recopiant vers le bas, les numéros de ligne avancent.\n• Scratch : « mettre … à » remplace la valeur, « ajouter … à » la modifie.\n• « répéter n fois » : nombre de passages connu ; « répéter jusqu'à » : la boucle s'arrête dès que la condition devient vraie.\n• Pour comprendre un script, on fait un tableau de suivi des variables.\n• Polygone régulier à $n$ côtés : le lutin tourne de $\\frac{360^\\circ}{n}$ à chaque sommet.\n• Un bloc personnalisé se définit une fois et s'utilise autant de fois qu'on veut ; « envoyer à tous » déclenche les scripts « quand je reçois » ; plusieurs scripts lancés par le même événement s'exécutent en parallèle.\n\n**Automatismes (questions flash)** :\n• Formule à saisir en B2 pour calculer $3 \\times$ A2 $+ 1$ → `=3*A2+1`.\n• $x$ vaut 3 ; « mettre x à x * 2 » puis « ajouter 1 à x » → $x = 7$.\n• Angle de rotation pour un octogone régulier → $360^\\circ \\div 8 = 45^\\circ$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Écrire la formule de tableur pour calculer un prix TTC",
        "example": "En cellule A2 on a le prix HT (120 €) et en B2 le taux de TVA (20%). Écrire la formule à saisir en C2 pour obtenir le prix TTC.",
        "steps": [
          "**Étape 1 (Début)** : La formule commence impérativement par `=`. ",
          "**Étape 2 (Expression)** : Le prix TTC est égal au prix HT plus le montant de la TVA :\n`=A2 + A2*B2`\nou, plus court : `=A2*(1 + B2)`.",
          "**Étape 3 (Étirement)** : En étirant cette formule vers le bas en C3, elle s'adaptera automatiquement en `=A3*(1 + B3)`."
        ]
      },
      {
        "title": "Méthode : Suivre une boucle « répéter jusqu'à » avec un tableau de suivi",
        "example": "On exécute le script : « mettre n à 1 » ; « mettre S à 0 » ; « répéter jusqu'à S > 20 : ajouter n à S, puis ajouter 2 à n » ; « dire S ». Quelle valeur le lutin dit-il ? Combien de fois la boucle est-elle exécutée ?",
        "steps": [
          "**Étape 1 (Initialisation)** : $n = 1$ et $S = 0$. La condition $S > 20$ est fausse, on entre dans la boucle.",
          "**Étape 2 (Tableau de suivi)** : on note les valeurs après chaque passage.\n\n| Passage | $S$ | $n$ | $S > 20$ ? |\n|:---:|:---:|:---:|:---:|\n| 1 | $0 + 1 = 1$ | $3$ | non |\n| 2 | $1 + 3 = 4$ | $5$ | non |\n| 3 | $4 + 5 = 9$ | $7$ | non |\n| 4 | $9 + 7 = 16$ | $9$ | non |\n| 5 | $16 + 9 = 25$ | $11$ | oui |",
          "**Étape 3 (Conclusion)** : après 5 passages, $S = 25 > 20$ : la boucle s'arrête et le lutin dit **25**.\n*Remarque* : $S$ est la somme des premiers nombres impairs, $1 + 3 + 5 + 7 + 9 = 25 = 5^2$."
        ]
      },
      {
        "title": "Méthode : Programme de calcul Scratch et calcul littéral",
        "example": "Script : « demander Choisis un nombre et attendre » ; « mettre x à réponse » ; « mettre a à x + 2 » ; « mettre b à x − 2 » ; « dire (a × b) − (x × x) » (dans Scratch, le signe × s'écrit avec l'étoile). Tester avec 5 et 10, puis prouver que le résultat est toujours le même.",
        "steps": [
          "**Étape 1 (Test avec 5)** : $a = 7$, $b = 3$, résultat $7 \\times 3 - 5 \\times 5 = 21 - 25 = -4$.",
          "**Étape 2 (Test avec 10)** : $a = 12$, $b = 8$, résultat $12 \\times 8 - 10 \\times 10 = 96 - 100 = -4$.",
          "**Étape 3 (Conjecture)** : le programme semble toujours afficher $-4$.",
          "**Étape 4 (Preuve)** : pour un nombre $x$ quelconque, le résultat vaut $(x+2)(x-2) - x^2 = x^2 - 4 - x^2 = -4$.\nLa conjecture est démontrée pour tout nombre de départ."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans un tableur, oublier le signe `=` au début d'une formule : taper `SOMME(A1:A5)` au lieu de `=SOMME(A1:A5)` n'effectue aucun calcul !",
      "⚠️ Confondre l'angle intérieur d'un polygone avec l'angle de rotation extérieur de Scratch : pour un triangle équilatéral, l'angle intérieur est $60^\\circ$, mais Scratch doit tourner de $120^\\circ$ ($360/3$) !",
      "⚠️ Dans « répéter jusqu'à », la condition est testée avant chaque passage : la boucle s'arrête dès qu'elle devient vraie (et ne s'exécute pas du tout si elle est vraie au départ).",
      "⚠️ Dans un tableur, le signe de multiplication est obligatoire : on tape `=3*A2`, et non `=3A2` ou `=3xA2`."
    ],
    "flashcards": [
      {
        "q": "Par quel caractère commence obligatoirement toute formule dans un tableur ?",
        "a": "Par le signe égal **`=`**."
      },
      {
        "q": "Que fait la formule `=MOYENNE(B2:B10)` dans un tableur ?",
        "a": "Elle calcule la moyenne arithmétique de toutes les valeurs situées entre les cellules B2 et B10 incluses."
      },
      {
        "q": "Si x vaut 4, que vaut x après l'instruction Scratch « ajouter 5 à x » ?",
        "a": "$x = 9$ (car $4 + 5 = 9$)."
      },
      {
        "q": "De quel angle le lutin Scratch doit-il tourner pour tracer un pentagone régulier (5 côtés) ?",
        "a": "$$360^\\circ \\div 5 = 72^\\circ$$"
      },
      {
        "q": "Si on étire la formule `=A1*2` vers le bas en cellule ligne 2, que devient-elle ?",
        "a": "`=A2*2` (la référence de ligne s'incrémente automatiquement)."
      },
      {
        "q": "Quand s'arrête la boucle « répéter jusqu'à S > 20 » ?",
        "a": "Dès que la condition $S > 20$ devient vraie (elle est testée avant chaque passage)."
      },
      {
        "q": "Quelle formule saisir en B2 pour calculer le double de A2 diminué de 5 ?",
        "a": "`=2*A2-5`"
      }
    ]
  }
});
