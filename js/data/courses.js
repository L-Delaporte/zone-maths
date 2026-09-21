// Fiches de cours de référence, définitions, formules, méthodes et flashcards pour les 18 chapitres
window.MATHS_COURSES = {
  "N1": {
    "title": "N1 : Ensemble de nombres et fractions",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Connaître et distinguer les ensembles de nombres : $\\mathbb{N}, \\mathbb{Z}, \\mathbb{D}, \\mathbb{Q}, \\mathbb{R}$.",
      "Maîtriser les 4 opérations sur les fractions avec des nombres relatifs.",
      "Respecter scrupuleusement les priorités opératoires et rendre les fractions irréductibles."
    ],
    "keyPoints": [
      {
        "title": "1. Les ensembles de nombres",
        "content": "• **Entiers naturels $\\mathbb{N}$** : $0, 1, 2, 3, 42...$\n• **Entiers relatifs $\\mathbb{Z}$** : entiers positifs et négatifs ($-5, -1, 0, 3...$).\n• **Nombres décimaux $\\mathbb{D}$** : nombres ayant un nombre fini de chiffres après la virgule, pouvant s'écrire sous la forme $\\frac{a}{10^n}$ (ex: $0,25 = \\frac{1}{4}$, mais $\\frac{1}{3} \\approx 0,333... \\notin \\mathbb{D}$).\n• **Nombres rationnels $\\mathbb{Q}$** : nombres pouvant s'écrire sous la forme d'un quotient $\\frac{a}{b}$ où $a \\in \\mathbb{Z}$ et $b \\in \\mathbb{Z}^*$.\n• **Nombres réels $\\mathbb{R}$** : ensemble de tous les nombres connus en 3ème (incluant les irrationnels comme $\\pi$ et $\\sqrt{2}$)."
      },
      {
        "title": "2. Les 4 opérations sur les fractions",
        "content": "• **Addition / Soustraction** : Même dénominateur obligatoire !\n$$\\frac{a}{d} + \\frac{b}{d} = \\frac{a+b}{d} \\quad \\text{et} \\quad \\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd}$$\n• **Multiplication** : On multiplie les numérateurs entre eux et les dénominateurs entre eux, **en simplifiant avant d'effectuer** !\n$$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$$\n• **Division** : Diviser par une fraction non nulle revient à multiplier par son inverse !\n$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c} = \\frac{ad}{bc} \\quad (c \\neq 0, d \\neq 0)$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode pas-à-pas : Enchaînement d'opérations complexes",
        "example": "Calculer $A = \\frac{7}{5} - \\frac{3}{5} \\div \\frac{9}{10}$ sous forme irréductible.",
        "steps": [
          "**Étape 1 (Priorités)** : La division est prioritaire sur la soustraction.",
          "**Étape 2 (Inverse)** : $\\frac{3}{5} \\div \\frac{9}{10} = \\frac{3}{5} \\times \\frac{10}{9}$.",
          "**Étape 3 (Simplification)** : $\\frac{3 \\times (5 \\times 2)}{5 \\times (3 \\times 3)} = \\frac{2}{3}$.",
          "**Étape 4 (Dénominateur commun)** : $A = \\frac{7}{5} - \\frac{2}{3} = \\frac{21}{15} - \\frac{10}{15} = \\frac{11}{15}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne jamais additionner les dénominateurs ! $\\frac{1}{2} + \\frac{1}{3} \\neq \\frac{2}{5}$, mais bien $\\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$.",
      "⚠️ Attention à ne pas confondre **opposé** ($-x$) et **inverse** ($\\frac{1}{x}$). L'inverse de $-\\frac{4}{7}$ est $-\\frac{7}{4}$.",
      "⚠️ Toujours vérifier si le résultat final est une fraction irréductible avant de valider."
    ],
    "flashcards": [
      {
        "q": "Quelle est la règle pour diviser par une fraction ?",
        "a": "Diviser par une fraction revient à **multiplier par son inverse** :\n$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$$"
      },
      {
        "q": "Quelle est la condition pour additionner ou soustraire deux fractions ?",
        "a": "Il faut obligatoirement les mettre au **même dénominateur** avant d'additionner ou soustraire les numérateurs."
      },
      {
        "q": "Un nombre décimal fait-il partie de $\\mathbb{Q}$ et de $\\mathbb{R}$ ?",
        "a": "Oui ! $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{D} \\subset \\mathbb{Q} \\subset \\mathbb{R}$. Tout décimal s'écrit $\\frac{a}{10^n}$ donc est un rationnel et un réel."
      }
    ]
  },
  "N2": {
    "title": "N2 : Calcul littéral et Identités remarquables",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Maîtriser la distributivité simple et la double distributivité.",
      "Connaître par cœur et savoir appliquer les 3 identités remarquables.",
      "Savoir factoriser par recherche d'un facteur commun ou à l'aide d'une identité."
    ],
    "keyPoints": [
      {
        "title": "1. Distributivité simple et double",
        "content": "• **Simple distributivité** : $k(a + b) = ka + kb$ et $k(a - b) = ka - kb$\n• **Double distributivité** : $(a + b)(c + d) = ac + ad + bc + bd$\n• **Suppression de parenthèses** :\n  - Précédées de $+$ : $a + (b - c) = a + b - c$\n  - Précédées de $-$ : $a - (b - c) = a - b + c$ *(on change tous les signes intérieurs)*."
      },
      {
        "title": "2. Les trois identités remarquables (Formules clés)",
        "content": "$$(a + b)^2 = a^2 + 2ab + b^2$$\n$$(a - b)^2 = a^2 - 2ab + b^2$$\n$$(a - b)(a + b) = a^2 - b^2$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Factoriser une expression avec facteur commun",
        "example": "Factoriser $E = (2x - 3)(4x + 1) - (2x - 3)(x - 2)$.",
        "steps": [
          "**Étape 1** : Repérer le facteur commun évident : $(2x - 3)$.",
          "**Étape 2** : Mettre le facteur commun devant de grands crochets :\n$E = (2x - 3) [ (4x + 1) - (x - 2) ]$",
          "**Étape 3** : Réduire l'intérieur des crochets en surveillant le signe $-$.\n$E = (2x - 3)(4x + 1 - x + 2) = (2x - 3)(3x + 3) = 3(2x - 3)(x + 1)$."
        ]
      }
    ],
    "traps": [
      "⚠️ $(a+b)^2 \\neq a^2 + b^2$ ! Ne jamais oublier le double produit $2ab$. $(x+3)^2 = x^2 + 6x + 9$.",
      "⚠️ Attention au signe $(-)$ devant un produit : $A - (2x-1)(x+3)$. Toujours développer le produit à l'intérieur de crochets avant de distribuer le signe moins."
    ],
    "flashcards": [
      {
        "q": "Quelle est la formule développée de $(a + b)^2$ ?",
        "a": "$$(a + b)^2 = a^2 + 2ab + b^2$$\n*(Attention au double produit $2ab$ !)*"
      },
      {
        "q": "Quelle est la formule développée de $(a - b)(a + b)$ ?",
        "a": "$$(a - b)(a + b) = a^2 - b^2$$"
      },
      {
        "q": "Comment factoriser $k a + k b$ ?",
        "a": "On identifie le facteur commun $k$ et on factorise :\n$$k a + k b = k(a + b)$$"
      }
    ]
  },
  "N3": {
    "title": "N3 : Puissances et Notation scientifique",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Connaître les règles opératoires sur les puissances entières relatives.",
      "Maîtriser les puissances de 10 et les préfixes d'unités (nano à téra).",
      "Écrire un nombre en notation scientifique et déterminer son ordre de grandeur."
    ],
    "keyPoints": [
      {
        "title": "1. Règles opératoires sur les puissances",
        "content": "Pour tous nombres relatifs non nuls $a, b$ et entiers $n, m$ :\n• $a^n \\times a^m = a^{n+m}$\n• $\\frac{a^n}{a^m} = a^{n-m}$\n• $(a^n)^m = a^{n \\times m}$\n• $(ab)^n = a^n b^n$ et $\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$\n• Par convention : $a^0 = 1$ et $a^{-n} = \\frac{1}{a^n}$."
      },
      {
        "title": "2. Notation scientifique",
        "content": "Tout nombre décimal positif s'écrit de manière unique sous la forme :\n$$a \\times 10^n \\quad \\text{avec } 1 \\le a < 10 \\text{ et } n \\in \\mathbb{Z}$$\n*Exemples* :\n• $45\\,000 = 4,5 \\times 10^4$\n• $0,000\\,38 = 3,8 \\times 10^{-4}$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer une fraction avec puissances de 10",
        "example": "Calculer $A = \\frac{3 \\times 10^5 \\times 4 \\times 10^{-2}}{6 \\times 10^7}$ et donner le résultat en écriture scientifique.",
        "steps": [
          "**Étape 1** : Séparer les nombres décimaux d'un côté et les puissances de 10 de l'autre :\n$A = \\frac{3 \\times 4}{6} \\times \\frac{10^5 \\times 10^{-2}}{10^7}$.",
          "**Étape 2** : Calculer la partie numérique : $\\frac{12}{6} = 2$.",
          "**Étape 3** : Appliquer les règles sur les exposants : $10^{5 + (-2) - 7} = 10^{3 - 7} = 10^{-4}$.",
          "**Étape 4** : Écriture finale : $A = 2 \\times 10^{-4}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Attention aux parenthèses : $(-3)^2 = 9$ mais $-3^2 = -9$ !",
      "⚠️ Dans $a \\times 10^n$, $a$ ne peut pas valoir $10$ : $12 \\times 10^3$ n'est pas scientifique, il faut écrire $1,2 \\times 10^4$."
    ],
    "flashcards": [
      {
        "q": "Que vaut $a^n \\times a^m$ ?",
        "a": "$$a^n \\times a^m = a^{n + m}$$\n*(On additionne les exposants)*."
      },
      {
        "q": "Que vaut $a^{-n}$ ?",
        "a": "$$a^{-n} = \\frac{1}{a^n}$$\n*(C'est l'inverse de $a^n$)*."
      },
      {
        "q": "Quelle est la condition pour qu'un nombre soit en notation scientifique ?",
        "a": "Il doit s'écrire sous la forme :\n$$a \\times 10^n \\quad \\text{avec } 1 \\leqslant |a| < 10$$"
      }
    ]
  },
  "N4": {
    "title": "N4 : Résolution d'équations et inéquations",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Résoudre une équation linéaire du type $ax + b = cx + d$.",
      "Résoudre une équation produit-nul $(ax + b)(cx + d) = 0$.",
      "Résoudre les équations du type $x^2 = a$.",
      "Mettre un problème concret en équation."
    ],
    "keyPoints": [
      {
        "title": "1. Propriété fondamentale du produit nul",
        "content": "**Théorème** : Un produit de facteurs est nul si et seulement si l'un au moins des facteurs est nul.\n$$(ax + b)(cx + d) = 0 \\iff ax + b = 0 \\quad \\text{ou} \\quad cx + d = 0$$"
      },
      {
        "title": "2. Équations du type $x^2 = a$",
        "content": "• Si $a > 0$ : deux solutions distinctes $x = \\sqrt{a}$ ou $x = -\\sqrt{a}$.\n• Si $a = 0$ : une unique solution $x = 0$.\n• Si $a < 0$ : **aucune solution réelle** (car un carré réel est toujours $\\ge 0$)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Résoudre une équation avec des $x$ des deux côtés",
        "example": "Résoudre $7x - 5 = 3x + 15$.",
        "steps": [
          "**Étape 1** : Regrouper les termes en $x$ à gauche en soustrayant $3x$ des deux côtés :\n$7x - 3x - 5 = 15 \\implies 4x - 5 = 15$.",
          "**Étape 2** : Isoler les constantes à droite en ajoutant $5$ :\n$4x = 15 + 5 = 20$.",
          "**Étape 3** : Diviser par le coefficient devant $x$ ($4$) :\n$x = \\frac{20}{4} = 5$.",
          "**Étape 4 (Conclusion)** : La solution de l'équation est $5$ (noté $S = \\{5\\}$)."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour $x^2 = 25$, ne pas oublier la solution négative : $x = 5$ OU $x = -5$ !",
      "⚠️ Ne jamais diviser une équation par $x$ : si $x(2x-3) = 0$, diviser par $x$ fait perdre la solution $x = 0$."
    ],
    "flashcards": [
      {
        "q": "Qu'est-ce qu'un nombre premier ?",
        "a": "Un entier naturel $\\geqslant 2$ qui admet **exactement deux diviseurs** : 1 et lui-même (ex: 2, 3, 5, 7, 11, 13...)."
      },
      {
        "q": "Quel est le seul nombre premier pair ?",
        "a": "**2** est le seul nombre premier pair. Tous les autres nombres pairs sont divisibles par 2."
      },
      {
        "q": "Comment rendre une fraction irréductible avec certitude ?",
        "a": "On décompose le numérateur et le dénominateur en **produit de facteurs premiers**, puis on simplifie les facteurs communs."
      }
    ]
  },
  "N5": {
    "title": "N5 : Arithmétique et Nombres premiers",
    "domain": "Nombres et Calculs",
    "objectives": [
      "Utiliser les critères de divisibilité par 2, 3, 4, 5, 9, 10.",
      "Connaître la définition d'un nombre premier et la liste des premiers inférieurs à 30.",
      "Décomposer un nombre entier en produit de facteurs premiers.",
      "Rendre une fraction irréductible et résoudre des problèmes de partage."
    ],
    "keyPoints": [
      {
        "title": "1. Nombres premiers",
        "content": "Un nombre entier naturel est **premier** s'il possède exactement deux diviseurs distincts : 1 et lui-même.\n• **Attention** : $0$ et $1$ ne sont PAS premiers !\n• **Les nombres premiers $< 30$** : $2, 3, 5, 7, 11, 13, 17, 19, 23, 29$ ($2$ est le seul nombre premier pair)."
      },
      {
        "title": "2. Décomposition en produit de facteurs premiers",
        "content": "Tout entier supérieur ou égal à 2 se décompose de manière unique en un produit de facteurs premiers.\n*Exemple* : $84 = 2 \\times 42 = 2 \\times 2 \\times 21 = 2^2 \\times 3 \\times 7$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Rendre une fraction irréductible par décomposition",
        "example": "Simplifier $\\frac{120}{168}$ au maximum.",
        "steps": [
          "**Étape 1** : Décomposer $120$ : $120 = 2^3 \\times 3 \\times 5$.",
          "**Étape 2** : Décomposer $168$ : $168 = 2^3 \\times 3 \\times 7$.",
          "**Étape 3** : Écrire le quotient et barrer les facteurs communs :\n$$\\frac{120}{168} = \\frac{2^3 \\times 3 \\times 5}{2^3 \\times 3 \\times 7} = \\frac{5}{7}$$."
        ]
      }
    ],
    "traps": [
      "⚠️ $1$ n'est PAS un nombre premier (il n'a qu'un seul diviseur, lui-même).",
      "⚠️ Critère par 3 et 9 : c'est la **somme des chiffres** qui doit être divisible, pas le dernier chiffre !"
    ],
    "flashcards": [
      {
        "q": "Quelle est la propriété de l'équation-produit nul ?",
        "a": "**Un produit de facteurs est nul si et seulement si au moins l'un des facteurs est nul** :\n$$A \\times B = 0 \\iff A = 0 \\text{ ou } B = 0$$"
      },
      {
        "q": "Combien de solutions admet $x^2 = a$ si $a > 0$ ?",
        "a": "Deux solutions distinctes : **$\\sqrt{a}$** et **$-\\sqrt{a}$**."
      },
      {
        "q": "Que faut-il faire quand on multiplie ou divise une inéquation par un nombre négatif ?",
        "a": "Il faut obligatoirement **changer le sens de l'inégalité** ($<$ devient $>$, etc.)."
      }
    ]
  },
  "G0": {
    "title": "G0 : Rappels Théorème de Pythagore et Propriétés",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Utiliser le théorème de Pythagore direct pour calculer la longueur d'un côté dans un triangle rectangle.",
      "Utiliser la réciproque pour démontrer qu'un triangle est rectangle.",
      "Utiliser la contraposée pour démontrer qu'un triangle n'est pas rectangle."
    ],
    "keyPoints": [
      {
        "title": "1. Le Théorème direct (Calcul de longueur)",
        "content": "Dans un triangle $ABC$ rectangle en $A$, le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés :\n$$BC^2 = AB^2 + AC^2$$\n• Pour calculer l'hypoténuse $BC$ : $BC = \\sqrt{AB^2 + AC^2}$.\n• Pour calculer un côté de l'angle droit : $AB^2 = BC^2 - AC^2$."
      },
      {
        "title": "2. Réciproque et Contraposée (Démontrer l'orthogonalité)",
        "content": "Soit $[BC]$ le plus grand côté d'un triangle $ABC$ :\n• Si $BC^2 = AB^2 + AC^2$, alors le triangle $ABC$ est rectangle en $A$ (d'après la **réciproque du théorème de Pythagore**).\n• Si $BC^2 \\neq AB^2 + AC^2$, alors le triangle n'est pas rectangle (d'après la **contraposée**)."
      }
    ],
    "methods": [
      {
        "title": "Modèle de rédaction officiel Brevet : Démontrer qu'un triangle est rectangle",
        "example": "Soit un triangle $MNP$ tel que $MN = 6\\text{ cm}, NP = 8\\text{ cm}, MP = 10\\text{ cm}$. Est-il rectangle ?",
        "steps": [
          "**1. Identifier le plus long côté** : Dans le triangle $MNP$, le plus grand côté est $[MP]$.",
          "**2. Calculer séparément** :\n• D'une part : $MP^2 = 10^2 = 100$.\n• D'autre part : $MN^2 + NP^2 = 6^2 + 8^2 = 36 + 64 = 100$.",
          "**3. Conclure rigoureusement** : On constate que $MP^2 = MN^2 + NP^2$. D'après la réciproque du théorème de Pythagore, le triangle $MNP$ est rectangle en $N$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne JAMAIS écrire $MP^2 = MN^2 + NP^2$ au début de la démonstration ! On ne le sait pas encore, il faut calculer séparément.",
      "⚠️ Ne pas oublier de prendre la racine carrée $\\sqrt{}$ à la fin pour trouver la longueur réelle !"
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
        "a": "D'après la contraposée du théorème de Pythagore, le triangle $ABC$ **n'est pas rectangle**."
      }
    ]
  },
  "G1": {
    "title": "G1 : Théorème de Thalès et Réciproque",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Appliquer le théorème de Thalès pour calculer une longueur inconnue.",
      "Appliquer la réciproque de Thalès pour démontrer que deux droites sont parallèles.",
      "Rédiger avec rigueur en précisant l'alignement ordonné des points."
    ],
    "keyPoints": [
      {
        "title": "1. Configurations et Rédaction officielle du Théorème de Thalès",
        "content": "Pour appliquer le théorème de Thalès en 3ème, il faut impérativement énoncer les deux conditions :\n1. **Alignement** : Les points $A, M, B$ d'une part et $A, N, C$ d'autre part sont alignés.\n2. **Parallélisme** : Les droites $(MN)$ et $(BC)$ sont parallèles ($(MN) \\parallel (BC)$).\n\nD'après le **théorème de Thalès**, on a l'égalité des 3 quotients :\n$$\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC}$$\n*(Fonctionne en configuration de triangles emboîtés ou en configuration « papillon »)*."
      },
      {
        "title": "2. Réciproque de Thalès (Démontrer un parallélisme)",
        "content": "Si les points $A, M, B$ d'une part et $A, N, C$ d'autre part sont **alignés dans le même ordre**, et si les rapports calculés séparément sont égaux ($\\frac{AM}{AB} = \\frac{AN}{AC}$), alors d'après la **réciproque du théorème de Thalès**, les droites $(MN)$ et $(BC)$ sont parallèles."
      }
    ],
    "methods": [
      {
        "title": "Méthode officielle de rédaction au Brevet",
        "example": "Calculer la longueur $AC$ avec $AM=4$, $AB=10$ et $AN=6$.",
        "steps": [
          "**Étape 1 (Conditions)** : Énoncer que les points $A, M, B$ d'une part et $A, N, C$ d'autre part sont alignés, et que $(MN) \\parallel (BC)$.",
          "**Étape 2 (Théorème)** : Écrire « D'après le théorème de Thalès : $\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC}$ ».",
          "**Étape 3 (Calcul)** : Remplacer par les valeurs et appliquer le produit en croix : $\\frac{4}{10} = \\frac{6}{AC} \\implies AC = \\frac{10 \\times 6}{4} = 15\\text{ cm}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Oublier d'énoncer que les points sont alignés et que les droites sont parallèles avant d'écrire l'égalité des rapports.",
      "⚠️ Oublier la mention essentielle : « les points sont alignés dans le même ordre » lors de la rédaction de la réciproque.",
      "⚠️ Attention au mélange petit triangle / grand triangle : toujours mettre tous les côtés du petit triangle au numérateur et ceux du grand au dénominateur (ou l'inverse)."
    ],
    "flashcards": [
      {
        "q": "Quelles sont les 2 conditions pour appliquer le théorème de Thalès ?",
        "a": "1) Les points sont alignés dans le même ordre ($A, M, B$ et $A, N, C$).\n2) Les droites $(MN)$ et $(BC)$ sont **parallèles**."
      },
      {
        "q": "Quels sont les rapports de Thalès avec $(MN) // (BC)$ ?",
        "a": "$$\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC}$$"
      },
      {
        "q": "À quoi sert la contraposée de Thalès ?",
        "a": "Elle sert à prouver que deux droites **ne sont pas parallèles** lorsque deux rapports ne sont pas égaux."
      }
    ]
  },
  "G2": {
    "title": "G2 : Trigonométrie dans le triangle rectangle",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Repérer l'hypoténuse, le côté adjacent et le côté opposé par rapport à un angle aigu.",
      "Mémoriser et appliquer CAH - SOH - TOA.",
      "Calculer une longueur d'un triangle rectangle ou déterminer la mesure d'un angle au degré près."
    ],
    "keyPoints": [
      {
        "title": "1. Les trois rapports trigonométriques (CAH SOH TOA)",
        "content": "Dans un triangle rectangle pour un angle aigu $\\widehat{A}$ :\n$$\\cos(\\widehat{A}) = \\frac{\\text{Côté Adjacent}}{\\text{Hypoténuse}} \\quad (\\text{CAH})$$\n$$\\sin(\\widehat{A}) = \\frac{\\text{Côté Opposé}}{\\text{Hypoténuse}} \\quad (\\text{SOH})$$\n$$\\tan(\\widehat{A}) = \\frac{\\text{Côté Opposé}}{\\text{Côté Adjacent}} \\quad (\\text{TOA})$$"
      },
      {
        "title": "2. Propriétés remarquables",
        "content": "• Pour tout angle aigu non nul : $0 < \\cos(\\widehat{A}) < 1$ et $0 < \\sin(\\widehat{A}) < 1$.\n• $\\tan(\\widehat{A})$ peut être supérieure à 1 !\n• Formules : $\\cos^2(\\widehat{A}) + \\sin^2(\\widehat{A}) = 1$ et $\\tan(\\widehat{A}) = \\frac{\\sin(\\widehat{A})}{\\cos(\\widehat{A})}$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Trouver un angle avec la calculatrice",
        "example": "Dans un triangle rectangle, $\\cos(\\widehat{B}) = \\frac{5}{8} = 0,625$. Trouver $\\widehat{B}$.",
        "steps": [
          "**Étape 1** : S'assurer que la calculatrice est en mode **Degré (DEG)**.",
          "**Étape 2** : Utiliser la touche seconde / shift : $\\arccos(0,625)$ ou $\\cos^{-1}(5/8)$.",
          "**Étape 3** : La calculatrice affiche $\\approx 51,317^\\circ$. Arrondi au degré près : $\\widehat{B} \\approx 51^\\circ$."
        ]
      }
    ],
    "traps": [
      "⚠️ Attention à l'unité d'angle de la calculatrice : toujours vérifier qu'elle est en mode **DEG** (Degré) et non RAD (Radian) !",
      "⚠️ Le cosinus et le sinus sont **toujours** inférieurs à 1. Si vous trouvez $\\cos = 1,4$, vous avez inversé le numérateur et le dénominateur !"
    ],
    "flashcards": [
      {
        "q": "Quel moyen mnémotechnique permet de retenir la trigonométrie ?",
        "a": "**CAH - SOH - TOA** :\n• $\\cos = \\frac{\\text{Adj}}{\\text{Hyp}}$\n• $\\sin = \\frac{\\text{Opp}}{\\text{Hyp}}$\n• $\\tan = \\frac{\\text{Opp}}{\\text{Adj}}$"
      },
      {
        "q": "Quelle touche de calculatrice donne l'angle connaissant son cosinus ?",
        "a": "La touche **$\\arccos$** (ou $\\cos^{-1}$), en s'assurant que la calculatrice est en mode **Degré (DEG)**."
      },
      {
        "q": "Quelle formule lie $\\cos(x)$ et $\\sin(x)$ pour tout angle aigu ?",
        "a": "$$\\cos^2(x) + \\sin^2(x) = 1$$"
      }
    ]
  },
  "G3": {
    "title": "G3 : Homothéties et Effets d'échelle",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Comprendre l'action d'une homothétie de centre $O$ et de rapport $k$.",
      "Distinguer le cas $k > 0$ et $k < 0$ (demi-tour / inversion).",
      "Maîtriser l'effet d'une échelle sur les longueurs ($|k|$), aires ($k^2$) et volumes ($|k|^3$)."
    ],
    "keyPoints": [
      {
        "title": "1. Définition et sens du rapport",
        "content": "Une homothétie transforme un point $M$ en $M'$ tel que $O, M, M'$ sont alignés et $OM' = |k| \\times OM$.\n• Si $k > 0$ : $M$ et $M'$ sont du même côté par rapport à $O$.\n• Si $k < 0$ : $M$ et $M'$ sont de part et d'autre de $O$ (figure inversée, tête en bas).\n• Si $|k| > 1$ : c'est un agrandissement.\n• Si $|k| < 1$ : c'est une réduction."
      },
      {
        "title": "2. Effets sur longueurs, aires et volumes (Crucial)",
        "content": "Dans un agrandissement ou une réduction de rapport $k$ :\n• Les **longueurs** sont multipliées par **$|k|$**.\n• Les **aires** sont multipliées par **$k^2$**.\n• Les **volumes** sont multipliés par **$|k|^3$**."
      }
    ],
    "methods": [
      {
        "title": "Exemple d'application Brevet : Agrandissement de solide",
        "example": "Une maquette de pyramide à l'échelle $k = 3$ a une base d'aire $12\\text{ cm}^2$ et un volume de $20\\text{ cm}^3$. Quelles sont l'aire et le volume de la pyramide réelle ?",
        "steps": [
          "**Aire réelle** : Multipliée par $k^2 = 3^2 = 9$.\nAire $= 12 \\times 9 = 108\\text{ cm}^2$.",
          "**Volume réel** : Multiplié par $k^3 = 3^3 = 27$.\nVolume $= 20 \\times 27 = 540\\text{ cm}^3$."
        ]
      }
    ],
    "traps": [
      "⚠️ **PIÈGE MAJEUR** : Une longueur ne peut JAMAIS être négative ! Si $k = -2$, les longueurs sont multipliées par $|-2| = 2$ et non par $-2$ !",
      "⚠️ Si une longueur est doublée ($k=2$), l'aire est quadruplée ($2^2=4$) et le volume est multiplié par 8 ($2^3=8$) !"
    ],
    "flashcards": [
      {
        "q": "Dans une homothétie de rapport $k$, par combien sont multipliées les aires ?",
        "a": "Les longueurs sont multipliées par $|k|$, et les aires par **$k^2$**."
      },
      {
        "q": "Et pour les volumes ?",
        "a": "Les volumes sont multipliés par **$k^3$**."
      },
      {
        "q": "Quelle est la particularité d'une homothétie de rapport négatif ($k < 0$) ?",
        "a": "La figure est agrandie/réduite par $|k|$ et subit un **demi-tour** (rotation de $180^\\circ$) par rapport au centre."
      }
    ]
  },
  "G4": {
    "title": "G4 : Sphère, Boule et Repérage terrestre",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Distinguer sphère (surface creuse) et boule (solide plein).",
      "Connaître et appliquer les formules d'aire et de volume.",
      "Repérer un point sur la sphère terrestre par sa latitude et sa longitude."
    ],
    "keyPoints": [
      {
        "title": "1. Formules d'aire et de volume",
        "content": "Pour une sphère/boule de rayon $R$ :\n$$\\text{Aire de la sphère} = 4 \\pi R^2$$\n$$\\text{Volume de la boule} = \\frac{4}{3} \\pi R^3$$"
      },
      {
        "title": "2. Repérage sur la Terre",
        "content": "• **Équateur** : grand cercle de référence (latitude $0^\\circ$).\n• **Latitude** : angle entre $-90^\\circ$ (Pôle Sud) et $+90^\\circ$ (Pôle Nord) par rapport à l'Équateur.\n• **Méridien de Greenwich** : demi-cercle de référence (longitude $0^\\circ$).\n• **Longitude** : angle entre $-180^\\circ$ (Ouest) et $+180^\\circ$ (Est) par rapport à Greenwich."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Section plane d'une sphère",
        "example": "Une sphère de rayon $R = 10\\text{ cm}$ est coupée par un plan situé à une distance $d = OH = 6\\text{ cm}$ de son centre. Calculer le rayon $r$ du cercle de section.",
        "steps": [
          "**Étape 1** : Dans le triangle $OHM$ rectangle en $H$, le rayon de la sphère $OM = R = 10\\text{ cm}$ est l'hypoténuse.",
          "**Étape 2** : Appliquer Pythagore : $OM^2 = OH^2 + HM^2 \\implies R^2 = d^2 + r^2$.",
          "**Étape 3** : $r^2 = 10^2 - 6^2 = 100 - 36 = 64 \\implies r = \\sqrt{64} = 8\\text{ cm}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Attention aux unités : si le rayon est en cm, l'aire est en $\\text{cm}^2$ et le volume en $\\text{cm}^3$.",
      "⚠️ Ne pas confondre rayon et diamètre : si l'énoncé donne un diamètre de $12\\text{ cm}$, alors $R = 6\\text{ cm}$ !"
    ],
    "flashcards": [
      {
        "q": "Quelle est la formule du volume d'une pyramide ou d'un cône ?",
        "a": "$$V = \\frac{1}{3} \\times \\text{Aire de la base} \\times h$$"
      },
      {
        "q": "Quelle est la formule du volume d'une boule de rayon $R$ ?",
        "a": "$$V = \\frac{4}{3} \\pi R^3$$"
      },
      {
        "q": "Quelle est la section d'une sphère par un plan ?",
        "a": "La section d'une sphère par un plan est toujours un **cercle** (ou un point si le plan est tangent)."
      }
    ]
  },
  "G5": {
    "title": "G5 : Géométrie dans l'espace et Sections planes",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Connaître les solides usuels et leurs formules de volume.",
      "Identifier la nature de la section plane d'un solide par un plan parallèle à une face ou une base.",
      "Calculer des volumes de solides composés."
    ],
    "keyPoints": [
      {
        "title": "1. Formules de volumes des solides",
        "content": "• **Pavé droit** : $V = L \\times l \\times h$\n• **Prisme droit et Cylindre** : $V = \\text{Aire de la base} \\times h = \\pi R^2 \\times h$\n• **Pyramide et Cône** : $V = \\frac{1}{3} \\times \\text{Aire de la base} \\times h = \\frac{1}{3} \\pi R^2 h$"
      },
      {
        "title": "2. Sections planes remarquables",
        "content": "• **Pavé droit** : La section par un plan parallèle à une face est un **rectangle** de mêmes dimensions.\n• **Cylindre** : La section parallèle aux bases est un **disque** identique ; la section parallèle à l'axe est un **rectangle**.\n• **Pyramide / Cône** : La section parallèle à la base est une **réduction de la base** de rapport $k = \\frac{SO'}{SO}$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Volume d'un cône tronqué (par section)",
        "example": "Un cône de hauteur $12\\text{ cm}$ et de base de rayon $5\\text{ cm}$ est coupé à mi-hauteur ($k = 0,5$). Quel est le volume du petit cône supérieur ?",
        "steps": [
          "**Étape 1** : Volume du grand cône : $V = \\frac{1}{3} \\pi \\times 5^2 \\times 12 = 100\\pi\\text{ cm}^3$.",
          "**Étape 2** : Le rapport de réduction est $k = 0,5$. Le volume est multiplié par $k^3 = 0,5^3 = 0,125 = \\frac{1}{8}$.",
          "**Étape 3** : Petit volume : $v = 100\\pi \\times 0,125 = 12,5\\pi \\approx 39,3\\text{ cm}^3$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas oublier le facteur $\\frac{1}{3}$ pour les solides « qui finissent en pointe » (pyramides et cônes) !",
      "⚠️ Pour un cône, la hauteur $h$ doit être perpendiculaire à la base (ne pas la confondre avec la génératrice oblique)."
    ],
    "flashcards": [
      {
        "q": "Qu'est-ce que deux triangles semblables ?",
        "a": "Ce sont des triangles qui ont leurs **angles deux à deux de même mesure**."
      },
      {
        "q": "Quelle est la conséquence sur leurs côtés ?",
        "a": "Les longueurs de leurs côtés correspondants sont **proportionnelles**."
      },
      {
        "q": "Combien d'angles égaux suffisent pour prouver la similitude ?",
        "a": "**2 angles égaux suffisent**, car la somme des angles vaut $180^\\circ$, donc le 3e est automatiquement égal."
      }
    ]
  },
  "G6": {
    "title": "G6 : Rotations et Transformations du plan",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Construire l'image d'une figure par une rotation de centre $O$, d'angle $\\alpha$ et de sens donné.",
      "Identifier les 4 transformations du collège : symétrie axiale, symétrie centrale, translation, rotation.",
      "Mobiliser les propriétés d'invariance (conservation des longueurs, angles et aires)."
    ],
    "keyPoints": [
      {
        "title": "1. Définition d'une rotation",
        "content": "Une rotation de centre $O$ et d'angle $\\alpha$ transforme tout point $M$ en un point $M'$ tel que :\n• $OM = OM'$\n• $\\widehat{MOM'} = \\alpha$\n• Le déplacement s'effectue dans le sens précisé (**sens horaire** = sens des aiguilles d'une montre, ou **sens anti-horaire** / direct = sens inverse des aiguilles)."
      },
      {
        "title": "2. Bilan des transformations du plan",
        "content": "• **Symétrie axiale** : pliage le long d'un axe (inverse le sens de la figure).\n• **Symétrie centrale** : demi-tour (rotation de $180^\\circ$).\n• **Translation** : glissement sans tourner ni déformer (défini par une direction, un sens et une longueur).\n• **Rotation** : pivotement autour d'un centre fixe."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Retrouver la transformation qui passe du motif 1 au motif 2",
        "example": "Comment justifier une rotation sur un pavage régulier ?",
        "steps": [
          "**Étape 1** : Repérer le point fixe qui reste invariant : c'est le **centre $O$**.",
          "**Étape 2** : Mesurer l'angle formé par un segment et son image : c'est l'**angle $\\alpha$**.",
          "**Étape 3** : Préciser le **sens** : horaire ou anti-horaire."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne jamais donner un angle sans préciser le **sens** de la rotation (sauf si $\\alpha = 180^\\circ$, où les deux sens sont équivalents).",
      "⚠️ Les rotations conservent les longueurs, les angles et les aires (ce sont des isométries)."
    ],
    "flashcards": [
      {
        "q": "Combien de coordonnées possède un point dans l'espace ?",
        "a": "Trois : $(x ; y ; z)$ représentant **abscisse, ordonnée et altitude** (cote)."
      },
      {
        "q": "Quelle est la formule du milieu $M$ de $[AB]$ dans le plan ?",
        "a": "$$M\\left(\\frac{x_A + x_B}{2} ; \\frac{y_A + y_B}{2}\\right)$$"
      },
      {
        "q": "Quelle est la distance $AB$ dans un repère orthonormé ?",
        "a": "$$AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$$"
      }
    ]
  },
  "G7": {
    "title": "G7 : Triangles semblables",
    "domain": "Espace et Géométrie",
    "objectives": [
      "Connaître la définition de deux triangles semblables (même forme, angles égaux).",
      "Connaître les critères de similitude (2 angles égaux suffisent).",
      "Utiliser la proportionnalité des côtés pour calculer des longueurs."
    ],
    "keyPoints": [
      {
        "title": "1. Définition et caractérisation",
        "content": "Deux triangles sont **semblables** s'ils ont des angles deux à deux de même mesure.\n• **Propriété clé** : Si deux triangles ont deux angles deux à deux égaux, alors le troisième l'est aussi (car la somme des angles d'un triangle vaut $180^\\circ$), et les triangles sont **semblables**."
      },
      {
        "title": "2. Proportionnalité des côtés homologues",
        "content": "Si deux triangles $ABC$ et $A'B'C'$ sont semblables, alors les longueurs de leurs côtés homologues sont proportionnelles :\n$$\\frac{A'B'}{AB} = \\frac{B'C'}{BC} = \\frac{A'C'}{AC} = k$$\n• $k$ est le coefficient d'agrandissement ($k > 1$) ou de réduction ($k < 1$)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Prouver que deux triangles sont semblables avec les angles",
        "example": "Triangle 1 avec angles $40^\\circ$ et $60^\\circ$. Triangle 2 avec angles $60^\\circ$ et $80^\\circ$. Sont-ils semblables ?",
        "steps": [
          "**Étape 1** : Calculer le 3e angle du Triangle 1 :\n$180 - (40 + 60) = 180 - 100 = 80^\\circ$.",
          "**Étape 2** : Comparer les angles : le Triangle 1 a pour angles $40^\\circ, 60^\\circ, 80^\\circ$ et le Triangle 2 a pour angles $60^\\circ, 80^\\circ$ et $180-(60+80)=40^\\circ$.",
          "**Étape 3** : Leurs angles sont deux à deux de même mesure, ils sont donc **semblables**."
        ]
      }
    ],
    "traps": [
      "⚠️ Attention à bien apparier les **côtés opposés aux angles de même mesure** (côtés homologues).",
      "⚠️ Triangles semblables $\\neq$ triangles égaux : les triangles égaux ont leurs côtés de même longueur ($k=1$), les semblables ont juste la même forme."
    ],
    "flashcards": [
      {
        "q": "Si une figure est réduite à l'échelle $k = 0,5$, que devient son aire ?",
        "a": "Elle est multipliée par $k^2 = 0,5^2 = 0,25$ (divisée par 4)."
      },
      {
        "q": "Quelle est la section d'un pavé droit par un plan parallèle à une face ?",
        "a": "C'est un **rectangle** identique à cette face."
      },
      {
        "q": "Quelle est la section d'un cylindre par un plan perpendiculaire à l'axe ?",
        "a": "C'est un **disque** identique à sa base."
      }
    ]
  },
  "Org1": {
    "title": "Org1 : Notion de fonction",
    "domain": "Organisation et Fonctions",
    "objectives": [
      "Comprendre le concept de fonction comme une « machine mathématique » : $x \\mapsto f(x)$.",
      "Maîtriser le vocabulaire : image et antécédent.",
      "Déterminer images et antécédents par le calcul, un tableau ou un graphique."
    ],
    "keyPoints": [
      {
        "title": "1. Vocabulaire essentiel (Image vs Antécédent)",
        "content": "Si $f(x) = y$ :\n• $y$ est l'**image** de $x$ par la fonction $f$ (l'image est unique).\n• $x$ est un **antécédent** de $y$ par la fonction $f$ (un nombre peut avoir plusieurs antécédents, un seul ou aucun)."
      },
      {
        "title": "2. Représentation graphique",
        "content": "Dans un repère, la courbe représentative d'une fonction $f$ est l'ensemble des points de coordonnées $(x ; f(x))$ :\n• L'antécédent $x$ se lit sur l'**axe des abscisses** (axe horizontal).\n• L'image $f(x)$ se lit sur l'**axe des ordonnées** (axe vertical)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer une image et chercher un antécédent",
        "example": "Soit $f(x) = 3x^2 - 5$. Calculer l'image de $-2$ et chercher les antécédents de $7$.",
        "steps": [
          "**Calcul de l'image de $-2$** : Remplacer $x$ par $-2$ :\n$f(-2) = 3(-2)^2 - 5 = 3(4) - 5 = 12 - 5 = 7$.",
          "**Recherche des antécédents de $7$** : Résoudre l'équation $f(x) = 7$ :\n$3x^2 - 5 = 7 \\implies 3x^2 = 12 \\implies x^2 = 4 \\implies x = 2$ ou $x = -2$.\nLes antécédents de $7$ sont donc $-2$ et $2$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne jamais confondre image et antécédent : « Trouver l'image de 3 » $\\implies$ calculer $f(3)$ ; « Trouver l'antécédent de 3 » $\\implies$ résoudre $f(x) = 3$.",
      "⚠️ Sur un graphique : **A**ntécédent = **A**bscisse (horizontal) ; **O**rdonnée = image."
    ],
    "flashcards": [
      {
        "q": "Comment augmenter une quantité de $t\\%$ ?",
        "a": "On la multiplie par le coefficient multiplicateur :\n$$C_M = 1 + \\frac{t}{100}$$"
      },
      {
        "q": "Comment diminuer une quantité de $t\\%$ ?",
        "a": "On la multiplie par :\n$$C_M = 1 - \\frac{t}{100}$$"
      },
      {
        "q": "Partager 100 € dans le ratio $2 : 3$ :",
        "a": "5 parts au total ($2+3$). 1 part = $20$ €.\nLes montants sont **$40$ €** ($2 \\times 20$) et **$60$ €** ($3 \\times 20$)."
      }
    ]
  },
  "Org2": {
    "title": "Org2 : Statistiques et Analyse de données",
    "domain": "Organisation et Fonctions",
    "objectives": [
      "Calculer une moyenne simple et une moyenne pondérée.",
      "Déterminer la médiane et les quartiles d'une série statistique ordonnée.",
      "Calculer l'étendue et interpréter des indicateurs de dispersion."
    ],
    "keyPoints": [
      {
        "title": "1. Indicateurs de position (Moyenne & Médiane)",
        "content": "• **Moyenne pondérée** : Somme des (valeur $\\times$ effectif) divisée par l'effectif total.\n• **Médiane ($Me$)** : Valeur qui partage la série statistique ordonnée en deux groupes de même effectif (au moins 50% des valeurs sont $\\le Me$).\n  - Si l'effectif total $N$ est impair ($N = 2p+1$) : la médiane est la valeur de rang $p+1$.\n  - Si l'effectif total $N$ est pair ($N = 2p$) : la médiane est la moyenne entre les valeurs de rang $p$ et $p+1$."
      },
      {
        "title": "2. Indicateur de dispersion (Étendue)",
        "content": "$$\\text{Étendue} = \\text{Valeur Maximale} - \\text{Valeur Minimale}$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Trouver la médiane d'une série de notes",
        "example": "Série de notes : 7 ; 12 ; 8 ; 15 ; 14 ; 9 ; 18.",
        "steps": [
          "**Étape 1 (Indispensable)** : Ordonner la série par ordre croissant :\n7 ; 8 ; 9 ; 12 ; 14 ; 15 ; 18.",
          "**Étape 2** : Compter l'effectif total : $N = 7$ (impair).\n$\\frac{7+1}{2} = 4$.",
          "**Étape 3** : La médiane est la 4e valeur de la série ordonnée : **$Me = 12$**."
        ]
      }
    ],
    "traps": [
      "⚠️ Oublier de trier la série par ordre croissant avant de chercher la médiane ! C'est l'erreur la plus fréquente au Brevet.",
      "⚠️ La médiane n'est pas la moitié de l'étendue : la médiane dépend de la position, l'étendue de l'écart extrême."
    ],
    "flashcards": [
      {
        "q": "Qu'est-ce que la médiane d'une série ordonnée ?",
        "a": "C'est une valeur qui partage la série ordonnée en deux groupes de **même effectif**."
      },
      {
        "q": "Comment calcule-t-on l'étendue d'une série statistique ?",
        "a": "$$\\text{Étendue} = \\text{Valeur maximale} - \\text{Valeur minimale}$$"
      },
      {
        "q": "Comment trouver le rang de la médiane pour un effectif $N$ impair ?",
        "a": "Le rang de la médiane est $\\frac{N + 1}{2}$."
      }
    ]
  },
  "Org3": {
    "title": "Org3 : Fonctions linéaires et affines",
    "domain": "Organisation et Fonctions",
    "objectives": [
      "Reconnaître une fonction linéaire $f(x) = ax$ et la lier à la proportionnalité.",
      "Reconnaître une fonction affine $f(x) = ax + b$, son coefficient directeur et son ordonnée à l'origine.",
      "Déterminer graphiquement ou par le calcul l'expression d'une fonction affine."
    ],
    "keyPoints": [
      {
        "title": "1. Définitions et représentations graphiques",
        "content": "• **Fonction linéaire** : $f(x) = ax$. Sa droite passe toujours par l'**origine** $(0 ; 0)$. Elle modélise la proportionnalité.\n• **Fonction affine** : $f(x) = ax + b$. Sa droite coupe l'axe des ordonnées au point $(0 ; b)$ où $b$ est l'**ordonnée à l'origine**.\n• $a$ est le **coefficient directeur** (la pente de la droite) :\n  - Si $a > 0$ : la droite monte (fonction croissante).\n  - Si $a < 0$ : la droite descend (fonction décroissante).\n  - Si $a = 0$ : fonction constante $f(x) = b$ (droite horizontale)."
      },
      {
        "title": "2. Calcul du coefficient directeur",
        "content": "Pour deux points distincts $A(x_A ; y_A)$ et $B(x_B ; y_B)$ d'une droite affine :\n$$a = \\frac{y_B - y_A}{x_B - x_A} = \\frac{f(x_2) - f(x_1)}{x_2 - x_1}$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Déterminer $f(x)$ sachant que $f(2) = 5$ et $f(4) = 11$",
        "example": "Trouver la fonction affine $f(x) = ax + b$.",
        "steps": [
          "**Calcul de $a$** : $a = \\frac{f(4) - f(2)}{4 - 2} = \\frac{11 - 5}{2} = \\frac{6}{2} = 3$. Donc $f(x) = 3x + b$.",
          "**Calcul de $b$** : On sait que $f(2) = 5 \\implies 3(2) + b = 5 \\implies 6 + b = 5 \\implies b = -1$.",
          "**Conclusion** : $f(x) = 3x - 1$."
        ]
      }
    ],
    "traps": [
      "⚠️ Attention au signe dans la formule du coefficient directeur : $\\frac{y_B - y_A}{x_B - x_A}$, toujours les ordonnées ($y$) en haut et les abscisses ($x$) en bas !",
      "⚠️ Une fonction linéaire est un cas particulier de fonction affine (avec $b = 0$)."
    ],
    "flashcards": [
      {
        "q": "Que vaut toujours la somme des probabilités de toutes les issues ?",
        "a": "La somme des probabilités de toutes les issues est toujours égale à **1**."
      },
      {
        "q": "Quelle est la formule de la probabilité d'un événement contraire $\\bar{A}$ ?",
        "a": "$$P(\\bar{A}) = 1 - P(A)$$"
      },
      {
        "q": "Qu'est-ce qu'une situation d'équiprobabilité ?",
        "a": "Une situation où toutes les issues ont la même chance de se produire ($P = \\frac{1}{\\text{nombre total d'issues}}$)."
      }
    ]
  },
  "Org4": {
    "title": "Org4 : Probabilités et Expériences aléatoires",
    "domain": "Organisation et Fonctions",
    "objectives": [
      "Calculer la probabilité d'un événement dans une situation d'équiprobabilité.",
      "Utiliser la formule de l'événement contraire : $P(\\overline{A}) = 1 - P(A)$.",
      "Représenter une expérience à deux épreuves par un arbre pondéré ou un tableau à double entrée."
    ],
    "keyPoints": [
      {
        "title": "1. Définition et équiprobabilité",
        "content": "La probabilité d'un événement $A$ est un nombre compris entre $0$ et $1$ (ou de $0\\%$ à $100\\%$) :\n$$P(A) = \\frac{\\text{Nombre d'issues favorables}}{\\text{Nombre total d'issues possibles}}$$\n• Événement impossible : $P(A) = 0$.\n• Événement certain : $P(A) = 1$.\n• La somme des probabilités de toutes les issues possibles est égale à $1$."
      },
      {
        "title": "2. Règle des arbres pondérés",
        "content": "• **Règle 1 (Somme)** : La somme des probabilités des branches issues d'un même nœud est égale à $1$.\n• **Règle 2 (Produit)** : La probabilité de l'issue au bout d'un chemin est égale au **produit** des probabilités rencontrées le long de ce chemin."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Événement contraire « au moins un »",
        "example": "On lance 3 fois une pièce équilibrée. Quelle est la probabilité d'obtenir au moins une fois Pile ?",
        "steps": [
          "**Étape 1** : L'événement contraire de « au moins un Pile » est « aucun Pile » (c'est-à-dire obtenir 3 fois Face).",
          "**Étape 2** : $P(\\text{Face, Face, Face}) = \\frac{1}{2} \\times \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{8}$.",
          "**Étape 3** : Par la formule du contraire :\n$P(\\text{au moins un Pile}) = 1 - P(\\text{aucun Pile}) = 1 - \\frac{1}{8} = \\frac{7}{8}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Une probabilité ne peut JAMAIS être négative ni supérieure à 1 ! Si vous trouvez $1,25$, c'est faux.",
      "⚠️ « Au moins un » : penser immédiatement au réflexe de l'événement contraire $1 - P(\\text{aucun})$ pour simplifier le calcul."
    ],
    "flashcards": [
      {
        "q": "Quelle est l'équation générale d'une fonction affine ?",
        "a": "$$f(x) = ax + b$$\n$a$ est le coefficient directeur et $b$ l'ordonnée à l'origine."
      },
      {
        "q": "Quelle est la représentation graphique d'une fonction linéaire ?",
        "a": "C'est une droite qui **passe obligatoirement par l'origine $(0;0)$**."
      },
      {
        "q": "Quelle est la différence entre image et antécédent ?",
        "a": "• L'**image** de $x$ est $y = f(x)$.\n• L'**antécédent** de $y$ est la valeur $x$ telle que $f(x) = y$."
      }
    ]
  },
  "Algo": {
    "title": "Algo : Algorithmique, Scratch et Tableur",
    "domain": "Algorithmique et Outils",
    "objectives": [
      "Saisir, comprendre et étirer des formules sur tableur (=SOMME, =MOYENNE, etc.).",
      "Analyser et compléter un script Scratch (variables, boucles, tests conditionnels).",
      "Résoudre des problèmes transversaux combinant tableur, géométrie et algorithmique."
    ],
    "keyPoints": [
      {
        "title": "1. L'essentiel du Tableur en 3ème",
        "content": "• **Règle d'or** : TOUTE formule commence par le signe égal `=` (ex: `=A1+B1`). Sans `=`, le tableur affiche du texte !\n• **Fonctions majeures** :\n  - `=SOMME(B2:B10)` : calcule la somme des cellules de B2 à B10.\n  - `=MOYENNE(C1:C20)` : calcule la moyenne arithmétique.\n• **Étirement de formule (recopie incrémentée)** :\n  - Vers le bas : le numéro de ligne augmente (`=A1*2` devient `=A2*2`).\n  - Vers la droite : la lettre de colonne avance (`=A1*2` devient `=B1*2`)."
      },
      {
        "title": "2. L'essentiel de Scratch en 3ème",
        "content": "• **Variables** : mémorisent une valeur numérique ou un mot (ex: « mettre x à réponse + 5 »).\n• **Boucle « répéter n fois »** : pour les figures régulières (un carré répète 4 fois : avancer puis tourner de 90°).\n• **Orientation et angles** : tourner à droite de $\\alpha$ degrés fait pivoter le lutin de son angle extérieur."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Écrire la formule d'une facture avec remise",
        "example": "Prix HT en D6, remise de 10% en D7, calculer le net à payer en D8.",
        "steps": [
          "**Formule de la remise en D7** : `=D6*0,1` ou `=D6*10%`.",
          "**Formule du net à payer en D8** : `=D6-D7` ou directement `=D6*0,9`."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas écrire de nombres fixes quand une cellule existe : écrire `=B2*C2` et surtout pas `=12*18,5` !",
      "⚠️ Dans Scratch, attention à l'angle pour tracer un polygone régulier à $n$ côtés : l'angle de rotation est $\\frac{360^\\circ}{n}$ (ex: $120^\\circ$ pour un triangle équilatéral, pas $60^\\circ$ !)."
    ],
    "flashcards": [
      {
        "q": "De quel angle tourne le lutin pour tracer un polygone régulier à $N$ côtés ?",
        "a": "Il tourne de :\n$$\\frac{360^\\circ}{N}$$\n*(ex: $120^\\circ$ pour triangle équilatéral, $90^\\circ$ pour carré)*."
      },
      {
        "q": "Que fait l'instruction 'Ajouter 1 à variable' ?",
        "a": "Elle incrémente la variable de 1 :\n$$\\text{variable} \\leftarrow \\text{variable} + 1$$"
      },
      {
        "q": "Quelle est la différence entre 'Répéter 10 fois' et 'Répéter jusqu'à' ?",
        "a": "• 'Répéter 10 fois' est un nombre fixe et déterminé.\n• 'Répéter jusqu'à' est une boucle conditionnelle qui dépend d'un événement."
      }
    ]
  }
};
