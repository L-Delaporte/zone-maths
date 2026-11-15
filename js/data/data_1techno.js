/**
 * Données pédagogiques : Première technologique (tronc commun de mathématiques)
 * Programme de mathématiques de 1re et épreuve anticipée de mathématiques.
 * Chapitres déclarés dans js/data/chapters_lycee.js (niveau '1techno'). Format : voir js/data/data_1ere.js.
 */

window.MATHS_COURSES_1TECHNO = {
  "1T1": {
    "title": "1T1 : Automatismes, ensembles et logique",
    "domain": "Automatismes et Logique",
    "objectives": [
      "Mobiliser sans calculatrice les automatismes : proportions, pourcentages, évolutions successives et évolution réciproque.",
      "Utiliser les notations $\\in$, $\\subset$, $\\varnothing$, $\\cap$, $\\cup$, le complémentaire, le cardinal et le produit cartésien.",
      "Distinguer le statut d'une égalité (identité, équation, définition) et celui des lettres (variable, inconnue, paramètre).",
      "Utiliser les connecteurs « et », « ou » ; réfuter une affirmation par un contre-exemple.",
      "Formuler la réciproque et la contraposée d'une implication ; reconnaître une condition nécessaire, une condition suffisante."
    ],
    "keyPoints": [
      {
        "title": "1. Proportions et pourcentages",
        "content": "• La **proportion** d'une sous-population $A$ dans une population $E$ est $p = \\frac{\\text{effectif de } A}{\\text{effectif de } E}$ ; elle s'écrit en fraction, en décimal ou en pourcentage : $\\frac{3}{4} = 0{,}75 = 75\\,\\%$.\n• Prendre $t\\,\\%$ d'une quantité $Q$, c'est calculer $Q \\times \\frac{t}{100}$ : $15\\,\\%$ de $80$ vaut $80 \\times 0{,}15 = 12$.\n• Proportion de proportion : si $40\\,\\%$ des élèves sont internes et que $25\\,\\%$ des internes font du sport, la proportion d'internes sportifs parmi les élèves est $0{,}4 \\times 0{,}25 = 0{,}1$, soit $10\\,\\%$."
      },
      {
        "title": "2. Évolutions",
        "content": "• Une hausse de $t\\,\\%$ revient à multiplier par le **coefficient multiplicateur** $1 + \\frac{t}{100}$ ; une baisse de $t\\,\\%$, à multiplier par $1 - \\frac{t}{100}$.\n• Le **taux d'évolution** entre une valeur de départ $V_D$ et une valeur d'arrivée $V_A$ est $\\frac{V_A - V_D}{V_D}$.\n• **Évolutions successives** : on multiplie les coefficients ; les pourcentages ne s'additionnent pas.\n• **Évolution réciproque** : son coefficient est l'inverse $\\frac{1}{CM}$. Après une hausse de $25\\,\\%$ ($CM = 1{,}25$), il faut une baisse de $20\\,\\%$ pour revenir au départ, car $\\frac{1}{1{,}25} = 0{,}8$."
      },
      {
        "title": "3. Ensembles et notations",
        "content": "• $x \\in A$ : l'élément $x$ appartient à l'ensemble $A$ ; $A \\subset B$ : tout élément de $A$ est aussi élément de $B$ ($A$ est **inclus** dans $B$) ; $\\varnothing$ désigne l'ensemble vide.\n• Un ensemble fini se décrit **en extension** entre accolades : $\\{2 ; 4 ; 6\\}$ ; un intervalle comme $[0 ; 5[$ est aussi un ensemble.\n• Un **couple** $(a ; b)$ est ordonné : $(1 ; 2) \\neq (2 ; 1)$. Le **produit cartésien** $A \\times B$ est l'ensemble des couples $(a ; b)$ avec $a \\in A$ et $b \\in B$, et $\\text{Card}(A \\times B) = \\text{Card}(A) \\times \\text{Card}(B)$."
      },
      {
        "title": "4. Intersection, réunion, complémentaire",
        "content": "Pour deux parties $A$ et $B$ d'un ensemble $E$ :\n• $A \\cap B$ contient les éléments qui sont dans $A$ **et** dans $B$ ;\n• $A \\cup B$ contient les éléments qui sont dans $A$ **ou** dans $B$ (le « ou » est inclusif : un élément des deux convient) ;\n• le complémentaire $\\overline{A}$ (aussi noté $E \\setminus A$) contient les éléments de $E$ qui ne sont pas dans $A$.\n• Pour des ensembles finis : $\\text{Card}(A \\cup B) = \\text{Card}(A) + \\text{Card}(B) - \\text{Card}(A \\cap B)$ et $\\text{Card}(\\overline{A}) = \\text{Card}(E) - \\text{Card}(A)$."
      },
      {
        "title": "5. Statut d'une égalité et des lettres",
        "content": "• Une **identité** est vraie pour toutes les valeurs des lettres : $(x + 1)^2 = x^2 + 2x + 1$.\n• Une **équation** pose une question : pour quelles valeurs de l'**inconnue** l'égalité est-elle vraie ? Dans $2x + 1 = 7$, la seule solution est $3$.\n• Une **définition** donne un nom à un objet : « $f(x) = 3x - 2$ » définit la fonction $f$ ; $x$ y est une **variable**.\n• Un **paramètre** est une lettre fixée dans un problème mais qui peut changer d'un problème à l'autre : dans $y = mx$, $m$ est un paramètre."
      },
      {
        "title": "6. Implication, réciproque, contraposée",
        "content": "• L'implication « si $P$, alors $Q$ » est fausse dès qu'un cas rend $P$ vraie et $Q$ fausse : un tel cas est un **contre-exemple**. Un exemple ne suffit jamais à prouver une affirmation générale.\n• Sa **réciproque** est « si $Q$, alors $P$ » : elle peut être fausse alors que l'implication est vraie.\n• Sa **contraposée** est « si non $Q$, alors non $P$ » : elle est vraie exactement lorsque l'implication l'est.\n• Si « $P$ implique $Q$ » est vraie, $P$ est une **condition suffisante** pour $Q$ et $Q$ est une **condition nécessaire** pour $P$. Si l'implication et sa réciproque sont vraies, $P$ et $Q$ sont **équivalentes**."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer un taux d'évolution réciproque",
        "example": "Un loyer augmente de $60\\,\\%$. De quel pourcentage doit-il baisser pour revenir à sa valeur initiale ?",
        "steps": [
          "**Étape 1 (coefficient)** : une hausse de $60\\,\\%$ correspond à $CM = 1{,}6$.",
          "**Étape 2 (inverse)** : le coefficient réciproque est $\\frac{1}{1{,}6} = \\frac{10}{16} = \\frac{5}{8} = 0{,}625$.",
          "**Étape 3 (taux)** : $0{,}625 - 1 = -0{,}375$.",
          "**Conclusion** : il faut une baisse de $37{,}5\\,\\%$, et non de $60\\,\\%$."
        ]
      },
      {
        "title": "Méthode : Dénombrer avec intersection et réunion",
        "example": "Dans un lycée, $120$ élèves sont inscrits à l'association sportive : $70$ pratiquent le handball, $45$ le badminton et $20$ les deux. Combien ne pratiquent aucun de ces deux sports ?",
        "steps": [
          "**Étape 1 (réunion)** : $\\text{Card}(H \\cup B) = 70 + 45 - 20 = 95$.",
          "**Étape 2 (complémentaire)** : $\\text{Card}(\\overline{H \\cup B}) = 120 - 95 = 25$.",
          "**Conclusion** : $25$ élèves ne pratiquent ni le handball ni le badminton. Un diagramme ou un tableau à double entrée permet de vérifier."
        ]
      },
      {
        "title": "Méthode : Étudier une implication et sa réciproque",
        "example": "Pour un entier $n$, on considère « si $n$ est un multiple de $10$, alors $n$ est un multiple de $5$ ». Cette implication et sa réciproque sont-elles vraies ?",
        "steps": [
          "**Étape 1 (implication)** : si $n = 10k$, alors $n = 5 \\times 2k$ : $n$ est un multiple de $5$. L'implication est vraie.",
          "**Étape 2 (réciproque)** : « si $n$ est un multiple de $5$, alors $n$ est un multiple de $10$ ». Le nombre $15$ est un contre-exemple : la réciproque est fausse.",
          "**Conclusion** : être multiple de $10$ est une condition suffisante, mais pas nécessaire, pour être multiple de $5$."
        ]
      }
    ],
    "traps": [
      "⚠️ Deux hausses successives de $10\\,\\%$ ne donnent pas $+20\\,\\%$ : $1{,}1 \\times 1{,}1 = 1{,}21$, soit $+21\\,\\%$.",
      "⚠️ Une hausse de $t\\,\\%$ ne s'annule pas par une baisse de $t\\,\\%$ : il faut utiliser l'inverse du coefficient.",
      "⚠️ Ne pas confondre $\\in$ (un élément) et $\\subset$ (un ensemble) : on écrit $2 \\in \\{1 ; 2\\}$ mais $\\{2\\} \\subset \\{1 ; 2\\}$.",
      "⚠️ Une implication vraie peut avoir une réciproque fausse ; en revanche, sa contraposée a toujours la même valeur de vérité."
    ],
    "flashcards": [
      {
        "q": "Coefficient multiplicateur associé à une baisse de $8\\,\\%$ ?",
        "a": "$1 - 0{,}08 = 0{,}92$."
      },
      {
        "q": "Comment obtient-on le taux d'évolution global de plusieurs évolutions successives ?",
        "a": "On multiplie les coefficients multiplicateurs, puis on retranche $1$."
      },
      {
        "q": "Coefficient de l'évolution réciproque d'une évolution de coefficient $CM$ ?",
        "a": "L'inverse $\\frac{1}{CM}$."
      },
      {
        "q": "Que contient $A \\cap B$ ? et $A \\cup B$ ?",
        "a": "$A \\cap B$ : les éléments de $A$ et de $B$ à la fois ; $A \\cup B$ : les éléments de $A$ ou de $B$ (ou des deux)."
      },
      {
        "q": "Formule du cardinal d'une réunion ?",
        "a": "$\\text{Card}(A \\cup B) = \\text{Card}(A) + \\text{Card}(B) - \\text{Card}(A \\cap B)$."
      },
      {
        "q": "Cardinal de $A \\times B$ si $A$ a $3$ éléments et $B$ en a $4$ ?",
        "a": "$3 \\times 4 = 12$ couples."
      },
      {
        "q": "Le « ou » mathématique est-il inclusif ou exclusif ?",
        "a": "Inclusif : « $P$ ou $Q$ » est vraie lorsque l'une au moins des deux est vraie."
      },
      {
        "q": "Réciproque de « si $P$, alors $Q$ » ?",
        "a": "« si $Q$, alors $P$ »."
      },
      {
        "q": "Contraposée de « si $P$, alors $Q$ » ?",
        "a": "« si non $Q$, alors non $P$ » ; elle a la même valeur de vérité que l'implication."
      },
      {
        "q": "Si « $P$ implique $Q$ » est vraie, que dit-on de $Q$ ?",
        "a": "$Q$ est une condition nécessaire pour $P$ (et $P$ est une condition suffisante pour $Q$)."
      },
      {
        "q": "Que faut-il pour prouver qu'une affirmation générale est fausse ?",
        "a": "Un seul contre-exemple suffit."
      },
      {
        "q": "Identité ou équation : $(x - 1)(x + 1) = x^2 - 1$ ?",
        "a": "Une identité : elle est vraie pour tout réel $x$."
      }
    ]
  },
  "1T2": {
    "title": "1T2 : Algorithmique Python : listes, compteurs et accumulateurs",
    "domain": "Algorithmique et Programmation",
    "objectives": [
      "Utiliser des variables et des affectations successives ; écrire et appeler une fonction.",
      "Créer une liste en extension, par ajouts successifs ou en compréhension ; accéder à un élément par son indice.",
      "Parcourir une liste avec une boucle `for` ; utiliser une boucle `while` pour déterminer un seuil.",
      "Programmer un compteur et un accumulateur (somme, produit, moyenne).",
      "Simuler une expérience de Bernoulli et sélectionner des données selon un critère."
    ],
    "keyPoints": [
      {
        "title": "1. Variables, affectations, fonctions",
        "content": "• L'instruction `a = a + 3` calcule d'abord `a + 3` avec l'ancienne valeur, puis range le résultat dans `a` : le signe `=` est une **affectation**, le test d'égalité s'écrit `==`.\n• Une **fonction** reçoit des paramètres et renvoie un résultat avec `return` :\n```python\ndef prix_ttc(ht):\n    return ht * 1.2\n```\nL'appel `prix_ttc(50)` renvoie `60.0`."
      },
      {
        "title": "2. Listes",
        "content": "• En extension : `L = [4, 7, 1]` ; `len(L)` vaut $3$.\n• Les **indices** commencent à $0$ : `L[0]` vaut $4$, `L[2]` vaut $1$ ; `L[-1]` est le dernier élément.\n• Par ajouts successifs : on part de `L = []` et on écrit `L.append(x)` dans une boucle.\n• En compréhension : `[k**2 for k in range(5)]` donne `[0, 1, 4, 9, 16]` et `[x for x in L if x > 3]` ne garde que les éléments supérieurs à $3$."
      },
      {
        "title": "3. Boucles",
        "content": "• `for k in range(n)` fait prendre à `k` les valeurs $0$, $1$, …, $n - 1$ ; `range(1, n + 1)` va de $1$ à $n$.\n• `for x in L` parcourt directement les éléments de la liste ; `for i in range(len(L))` parcourt ses indices.\n• `while condition:` répète tant que la condition est vraie : on l'utilise lorsque le nombre de tours n'est pas connu à l'avance (recherche d'un seuil)."
      },
      {
        "title": "4. Compteurs et accumulateurs",
        "content": "• Un **compteur** est initialisé à $0$ et augmenté de $1$ chaque fois qu'une condition est réalisée.\n• Un **accumulateur** de somme est initialisé à $0$ ; un accumulateur de **produit** est initialisé à $1$.\n```python\ns = 0\nc = 0\nfor x in L:\n    s = s + x\n    if x >= 10:\n        c = c + 1\nmoyenne = s / len(L)\n```"
      },
      {
        "title": "5. Hasard et simulation",
        "content": "• `from random import random, randint` : `random()` renvoie un nombre décimal au hasard dans $[0 ; 1[$ et `randint(a, b)` un entier au hasard entre $a$ et $b$ inclus.\n• Le test `random() < p` est vrai avec la probabilité $p$ : il simule une **épreuve de Bernoulli** de paramètre $p$.\n• En répétant l'épreuve un grand nombre de fois avec un compteur, la **fréquence** des succès est en général proche de $p$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Suivre l'exécution d'une boucle",
        "example": "Que vaut `p` après l'exécution du programme ?\n```python\np = 1\nfor k in range(1, 5):\n    p = p * k\n```",
        "steps": [
          "**Étape 1 (initialisation)** : `p` vaut $1$ (accumulateur de produit).",
          "**Étape 2 (tableau de suivi)** : $k = 1$ : $p = 1$ ; $k = 2$ : $p = 2$ ; $k = 3$ : $p = 6$ ; $k = 4$ : $p = 24$.",
          "**Conclusion** : la boucle s'arrête avant $5$, donc `p` vaut $24 = 1 \\times 2 \\times 3 \\times 4$."
        ]
      },
      {
        "title": "Méthode : Compter les éléments qui vérifient une condition",
        "example": "Écrire une fonction qui compte les notes supérieures ou égales à $10$ dans une liste.",
        "steps": [
          "**Étape 1** : initialiser un compteur `c = 0`.",
          "**Étape 2** : parcourir la liste avec `for x in notes:` et ajouter $1$ lorsque `x >= 10`.",
          "**Conclusion** :\n```python\ndef nb_admis(notes):\n    c = 0\n    for x in notes:\n        if x >= 10:\n            c = c + 1\n    return c\n```\nPour `[8, 12, 15, 9, 10]`, la fonction renvoie $3$."
        ]
      },
      {
        "title": "Méthode : Estimer une probabilité par simulation",
        "example": "Un tireur atteint la cible avec la probabilité $0{,}7$. Estimer cette probabilité sur $1000$ tirs simulés.",
        "steps": [
          "**Étape 1** : une épreuve se simule par le test `random() < 0.7`.",
          "**Étape 2** : un compteur ajoute $1$ à chaque succès, dans une boucle de $1000$ tours.",
          "**Conclusion** :\n```python\nfrom random import random\nc = 0\nfor i in range(1000):\n    if random() < 0.7:\n        c = c + 1\nprint(c / 1000)\n```\nLa fréquence affichée change à chaque exécution, mais reste en général proche de $0{,}7$."
        ]
      }
    ],
    "traps": [
      "⚠️ Le premier élément d'une liste a l'indice $0$ : dans `L = [5, 8, 2]`, `L[1]` vaut $8$ et `L[3]` provoque une erreur.",
      "⚠️ `range(1, 5)` s'arrête à $4$ : la borne de droite est exclue.",
      "⚠️ Un accumulateur de produit s'initialise à $1$, pas à $0$ (sinon le produit reste nul).",
      "⚠️ `print` affiche une valeur, `return` la renvoie pour qu'elle soit réutilisée : une fonction de calcul doit se terminer par `return`."
    ],
    "flashcards": [
      {
        "q": "Indice du premier élément d'une liste ?",
        "a": "$0$."
      },
      {
        "q": "Valeurs prises par `k` dans `for k in range(4)` ?",
        "a": "$0$, $1$, $2$ et $3$."
      },
      {
        "q": "Que fait `L.append(x)` ?",
        "a": "Elle ajoute `x` à la fin de la liste `L`."
      },
      {
        "q": "Que donne `[2 * k for k in range(4)]` ?",
        "a": "`[0, 2, 4, 6]`."
      },
      {
        "q": "Valeur initiale d'un accumulateur de somme ? de produit ?",
        "a": "$0$ pour une somme, $1$ pour un produit."
      },
      {
        "q": "À quoi sert un compteur ?",
        "a": "À compter le nombre de fois qu'une condition est réalisée : on l'initialise à $0$ et on ajoute $1$ à chaque fois."
      },
      {
        "q": "Quand utiliser `while` plutôt que `for` ?",
        "a": "Lorsque le nombre de tours n'est pas connu à l'avance, par exemple pour chercher un seuil."
      },
      {
        "q": "Comment simuler une épreuve de Bernoulli de paramètre $0{,}3$ ?",
        "a": "Avec le test `random() < 0.3`, vrai avec la probabilité $0{,}3$."
      },
      {
        "q": "Différence entre `=` et `==` ?",
        "a": "`=` affecte une valeur à une variable ; `==` teste l'égalité et renvoie `True` ou `False`."
      },
      {
        "q": "Comment calculer la moyenne des éléments d'une liste `L` ?",
        "a": "On calcule la somme avec un accumulateur, puis on la divise par `len(L)`."
      }
    ]
  },
  "1T3": {
    "title": "1T3 : Suites arithmétiques et géométriques",
    "domain": "Analyse et Fonctions",
    "objectives": [
      "Calculer des termes d'une suite définie par une formule explicite ou par une relation de récurrence, avec les notations $u(n)$ et $u_n$.",
      "Reconnaître et démontrer qu'une suite est arithmétique ou géométrique ; exprimer son terme général en fonction de $n$.",
      "Déterminer le sens de variation d'une suite arithmétique ou géométrique à l'aide de sa raison.",
      "Modéliser une évolution à variation absolue constante (croissance linéaire) ou à taux constant (croissance exponentielle) ; déterminer un seuil.",
      "Calculer une somme de termes consécutifs d'une suite à l'aide d'un algorithme (accumulateur) ou d'un tableur."
    ],
    "keyPoints": [
      {
        "title": "1. Suites numériques",
        "content": "• Une **suite** $u$ associe à chaque entier naturel $n$ un nombre $u(n)$, aussi noté $u_n$ : c'est le **terme de rang $n$**.\n• **Formule explicite** : $u(n) = 3n + 2$ permet de calculer directement $u(10) = 32$.\n• **Relation de récurrence** : $u(0) = 5$ et $u(n + 1) = 2u(n) - 1$ ; on calcule les termes de proche en proche : $u(1) = 9$, $u(2) = 17$.\n• On représente une suite par le nuage des points $(n ; u(n))$."
      },
      {
        "title": "2. Suites arithmétiques",
        "content": "• $u$ est **arithmétique de raison $r$** lorsque, pour tout $n$, $u(n + 1) = u(n) + r$ : on ajoute toujours le même nombre.\n• Terme général : $u(n) = u(0) + nr$ ; plus généralement $u(n) = u(p) + (n - p)r$.\n• Les points $(n ; u(n))$ sont **alignés** : c'est une **croissance linéaire** (variation absolue constante).\n• Sens de variation : croissante si $r > 0$, décroissante si $r < 0$, constante si $r = 0$."
      },
      {
        "title": "3. Suites géométriques",
        "content": "• $u$, à termes strictement positifs, est **géométrique de raison $q > 0$** lorsque, pour tout $n$, $u(n + 1) = q \\times u(n)$ : on multiplie toujours par le même nombre.\n• Terme général : $u(n) = u(0) \\times q^n$.\n• Une évolution de $t\\,\\%$ par période donne une suite géométrique de raison $q = 1 + \\frac{t}{100}$ (hausse) ou $q = 1 - \\frac{t}{100}$ (baisse) : c'est une **croissance exponentielle**.\n• Sens de variation : croissante si $q > 1$, décroissante si $0 < q < 1$, constante si $q = 1$."
      },
      {
        "title": "4. Démontrer la nature d'une suite",
        "content": "• Pour montrer que $u$ est arithmétique, on calcule $u(n + 1) - u(n)$ et l'on montre que cette différence ne dépend pas de $n$.\n*Exemple* : $u(n) = 4n - 7$ : $u(n + 1) - u(n) = 4(n + 1) - 7 - (4n - 7) = 4$ ; $u$ est arithmétique de raison $4$.\n• Pour montrer que $u$ (à termes strictement positifs) est géométrique, on montre que $\\frac{u(n + 1)}{u(n)}$ ne dépend pas de $n$, ou que $u(n + 1) = q \\times u(n)$.\n• Pour montrer qu'une suite **n'est pas** arithmétique (ou géométrique), il suffit de trouver trois termes consécutifs qui ne conviennent pas."
      },
      {
        "title": "5. Sommes de termes consécutifs",
        "content": "• Au programme, une somme de termes se calcule **pas à pas** : à la main pour quelques termes, avec un **accumulateur** en Python ou avec une colonne de cumul dans un tableur.\n```python\ns = 0\nu = 4\nfor k in range(10):\n    s = s + u\n    u = u + 3\n```\n• Pour une suite arithmétique, on peut regrouper le premier et le dernier terme, le deuxième et l'avant-dernier, etc. : ces paires ont toutes la même somme.\n• Les formules générales de somme ne sont pas exigibles : lorsqu'un exercice en a besoin, l'énoncé les rappelle.\n• De $u(0)$ à $u(n)$, il y a $n + 1$ termes."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Modéliser une évolution par une suite",
        "example": "Une ville compte $20\\,000$ habitants en 2025. On étudie deux hypothèses : (A) la population augmente de $500$ habitants par an ; (B) elle augmente de $2\\,\\%$ par an. On note $a(n)$ et $b(n)$ la population en $2025 + n$.",
        "steps": [
          "**Étape 1 (hypothèse A)** : on ajoute $500$ chaque année : $a$ est arithmétique de raison $500$ et $a(n) = 20\\,000 + 500n$.",
          "**Étape 2 (hypothèse B)** : on multiplie par $1{,}02$ chaque année : $b$ est géométrique de raison $1{,}02$ et $b(n) = 20\\,000 \\times 1{,}02^n$.",
          "**Conclusion** : en 2027 ($n = 2$), $a(2) = 21\\,000$ et $b(2) = 20\\,000 \\times 1{,}0404 = 20\\,808$."
        ]
      },
      {
        "title": "Méthode : Déterminer un seuil",
        "example": "On pose $u(n) = 1200 - 45n$. À partir de quel rang a-t-on $u(n) < 500$ ?",
        "steps": [
          "**Étape 1 (inéquation)** : $1200 - 45n < 500 \\iff 45n > 700 \\iff n > \\frac{700}{45} \\approx 15{,}6$.",
          "**Étape 2 (vérification)** : $u(15) = 525$ et $u(16) = 480$.",
          "**Conclusion** : $u(n) < 500$ à partir du rang $16$. Pour une suite géométrique, on calcule les termes successifs (à la main, au tableur ou avec une boucle `while`) jusqu'à franchir le seuil."
        ]
      },
      {
        "title": "Méthode : Calculer une somme de termes",
        "example": "Une salle de spectacle a $20$ places au premier rang et chaque rang compte $2$ places de plus que le précédent. Combien de places compte-t-elle au total sur $16$ rangs ?",
        "steps": [
          "**Étape 1** : le nombre de places du rang $n$ (avec $n$ de $1$ à $16$) est arithmétique de raison $2$ ; le dernier rang a $20 + 15 \\times 2 = 50$ places.",
          "**Étape 2** : on regroupe le premier et le dernier rang ($20 + 50 = 70$), le deuxième et l'avant-dernier ($22 + 48 = 70$), etc. : on obtient $8$ paires de $70$ places, soit $8 \\times 70 = 560$.",
          "**Contrôle** : un accumulateur Python (`s = s + u` puis `u = u + 2`, répété $16$ fois à partir de `s = 0` et `u = 20`) ou une colonne de cumul dans un tableur donne aussi $560$.",
          "**Conclusion** : la salle compte $560$ places."
        ]
      }
    ],
    "traps": [
      "⚠️ Une hausse de $5\\,\\%$ par an pendant $n$ ans ne correspond pas à une hausse de $5n\\,\\%$ : on multiplie par $1{,}05^n$.",
      "⚠️ Une baisse de $3\\,\\%$ donne la raison $q = 0{,}97$, et non $0{,}03$.",
      "⚠️ De $u(0)$ à $u(n)$ il y a $n + 1$ termes, et non $n$.",
      "⚠️ Vérifier une propriété sur les trois premiers termes ne démontre pas qu'une suite est arithmétique ou géométrique : il faut un calcul valable pour tout $n$."
    ],
    "flashcards": [
      {
        "q": "Terme général d'une suite arithmétique de premier terme $u(0)$ et de raison $r$ ?",
        "a": "$u(n) = u(0) + nr$."
      },
      {
        "q": "Terme général d'une suite géométrique de premier terme $u(0)$ et de raison $q$ ?",
        "a": "$u(n) = u(0) \\times q^n$."
      },
      {
        "q": "Raison associée à une hausse de $4\\,\\%$ par an ?",
        "a": "$q = 1{,}04$."
      },
      {
        "q": "Raison associée à une baisse de $15\\,\\%$ par an ?",
        "a": "$q = 0{,}85$."
      },
      {
        "q": "Sens de variation d'une suite arithmétique de raison $-2$ ?",
        "a": "Décroissante, car $r < 0$."
      },
      {
        "q": "Sens de variation d'une suite géométrique de premier terme positif et de raison $0{,}8$ ?",
        "a": "Décroissante, car $0 < q < 1$."
      },
      {
        "q": "Comment démontrer qu'une suite est arithmétique ?",
        "a": "On montre que $u(n + 1) - u(n)$ est une constante, indépendante de $n$."
      },
      {
        "q": "Que vaut $1 + 2 + \\dots + 100$ ?",
        "a": "$1 + 100 = 2 + 99 = \\dots = 50 + 51 = 101$ : $50$ paires de $101$, soit $5\\,050$."
      },
      {
        "q": "Comment calculer $u(0) + u(1) + \\dots + u(n)$ avec Python ?",
        "a": "Avec un accumulateur : `s = 0`, puis, dans une boucle, `s = s + u` et passage au terme suivant (attention : $n + 1$ termes)."
      },
      {
        "q": "Croissance linéaire ou exponentielle : quelle suite correspond à chacune ?",
        "a": "Linéaire : suite arithmétique ; exponentielle : suite géométrique."
      },
      {
        "q": "Combien de termes entre $u(0)$ et $u(9)$ inclus ?",
        "a": "$10$ termes."
      }
    ]
  },
  "1T4": {
    "title": "1T4 : Fonctions : taux de variation et second degré",
    "domain": "Analyse et Fonctions",
    "objectives": [
      "Calculer un taux de variation et l'interpréter comme la pente d'une sécante.",
      "Connaître l'allure de la courbe d'une fonction polynôme du second degré selon le signe de $a$, pour les formes $ax^2$, $ax^2 + c$ et $a(x - x_1)(x - x_2)$.",
      "Déterminer l'axe de symétrie et le sommet d'une parabole ; dresser le tableau de variations.",
      "Vérifier qu'un nombre est une racine et factoriser complètement un polynôme du second degré connaissant une racine.",
      "Étudier le signe d'une fonction du second degré à partir de sa forme factorisée et résoudre une inéquation."
    ],
    "keyPoints": [
      {
        "title": "1. Taux de variation",
        "content": "• Le **taux de variation** de $f$ entre $a$ et $b$ (avec $a \\neq b$) est $\\frac{f(b) - f(a)}{b - a}$.\n• C'est la **pente** (coefficient directeur) de la **sécante** passant par les points de la courbe d'abscisses $a$ et $b$.\n• S'il est positif, $f(b) > f(a)$ pour $a < b$ : la fonction a augmenté « en moyenne » entre $a$ et $b$.\n• Pour une fonction affine $x \\mapsto mx + p$, le taux de variation vaut toujours $m$."
      },
      {
        "title": "2. Fonctions polynômes du second degré",
        "content": "• Une fonction du second degré s'écrit $f(x) = ax^2 + bx + c$ avec $a \\neq 0$ ; sa courbe est une **parabole**.\n• Si $a > 0$, la parabole est tournée vers le haut et $f$ admet un **minimum** ; si $a < 0$, elle est tournée vers le bas et $f$ admet un **maximum**.\n• Le **sommet** $S(\\alpha ; \\beta)$ correspond à cet extremum ; la droite d'équation $x = \\alpha$ est l'**axe de symétrie** de la parabole."
      },
      {
        "title": "3. Formes particulières",
        "content": "• $f(x) = ax^2$ : sommet $O(0 ; 0)$, axe $x = 0$.\n• $f(x) = ax^2 + c$ : sommet $(0 ; c)$, axe $x = 0$.\n• $f(x) = a(x - x_1)(x - x_2)$ : les **racines** sont $x_1$ et $x_2$ (la courbe coupe l'axe des abscisses en ces points), l'axe de symétrie est $x = \\frac{x_1 + x_2}{2}$ et le sommet a pour ordonnée $f\\left(\\frac{x_1 + x_2}{2}\\right)$."
      },
      {
        "title": "4. Symétrie et tableau de variations",
        "content": "• Si $f(x_1) = f(x_2)$ avec $x_1 \\neq x_2$, l'axe de symétrie passe par le milieu : $\\alpha = \\frac{x_1 + x_2}{2}$.\n• Pour $a > 0$ : $f$ est décroissante sur $]-\\infty ; \\alpha]$ puis croissante sur $[\\alpha ; +\\infty[$.\n• Pour $a < 0$ : $f$ est croissante sur $]-\\infty ; \\alpha]$ puis décroissante sur $[\\alpha ; +\\infty[$."
      },
      {
        "title": "5. Racines et factorisation",
        "content": "• $x_1$ est une **racine** de $f$ lorsque $f(x_1) = 0$ : on le vérifie par un calcul.\n• Si $x_1$ est une racine de $f(x) = ax^2 + bx + c$, alors $f(x) = a(x - x_1)(x - x_2)$ ; en développant, le terme constant vaut $a \\times x_1 \\times x_2 = c$, ce qui donne l'autre racine $x_2$.\n*Exemple* : $f(x) = 2x^2 - 2x - 12$ et $f(3) = 0$ ; $2 \\times 3 \\times x_2 = -12$ donne $x_2 = -2$, donc $f(x) = 2(x - 3)(x + 2)$."
      },
      {
        "title": "6. Signe d'une forme factorisée",
        "content": "• Pour $x_1 < x_2$, $a(x - x_1)(x - x_2)$ est **du signe de $a$ à l'extérieur des racines** et du signe contraire entre les racines (tableau de signes).\n• Exemple : $-2(x + 1)(x - 4) \\geqslant 0$ équivaut à $x \\in [-1 ; 4]$, car $a = -2 < 0$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer un taux de variation",
        "example": "Soit $f(x) = x^2 - 3x$. Calculer le taux de variation de $f$ entre $1$ et $4$.",
        "steps": [
          "**Étape 1 (images)** : $f(1) = 1 - 3 = -2$ et $f(4) = 16 - 12 = 4$.",
          "**Étape 2 (quotient)** : $\\frac{f(4) - f(1)}{4 - 1} = \\frac{4 - (-2)}{3} = \\frac{6}{3} = 2$.",
          "**Conclusion** : le taux de variation vaut $2$ : la sécante passant par les points d'abscisses $1$ et $4$ a pour pente $2$."
        ]
      },
      {
        "title": "Méthode : Sommet et tableau de variations d'une forme factorisée",
        "example": "Soit $f(x) = -(x - 1)(x - 5)$. Déterminer le sommet de la parabole et le tableau de variations de $f$.",
        "steps": [
          "**Étape 1 (axe)** : les racines sont $1$ et $5$, donc $\\alpha = \\frac{1 + 5}{2} = 3$.",
          "**Étape 2 (sommet)** : $\\beta = f(3) = -(3 - 1)(3 - 5) = -2 \\times (-2) = 4$ ; le sommet est $S(3 ; 4)$.",
          "**Conclusion** : $a = -1 < 0$, donc $f$ est croissante sur $]-\\infty ; 3]$ et décroissante sur $[3 ; +\\infty[$ ; son maximum est $4$, atteint en $x = 3$."
        ]
      },
      {
        "title": "Méthode : Factoriser connaissant une racine, puis étudier le signe",
        "example": "Soit $f(x) = x^2 + 2x - 8$. Vérifier que $2$ est une racine, factoriser $f(x)$ et résoudre $f(x) < 0$.",
        "steps": [
          "**Étape 1 (vérification)** : $f(2) = 4 + 4 - 8 = 0$.",
          "**Étape 2 (autre racine)** : $f(x) = 1 \\times (x - 2)(x - x_2)$ et $1 \\times 2 \\times x_2 = -8$, d'où $x_2 = -4$ : $f(x) = (x - 2)(x + 4)$.",
          "**Étape 3 (signe)** : $a = 1 > 0$, donc $f(x)$ est négatif entre les racines $-4$ et $2$.",
          "**Conclusion** : l'ensemble des solutions de $f(x) < 0$ est $]-4 ; 2[$."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans un taux de variation, garder le même ordre en haut et en bas : $\\frac{f(b) - f(a)}{b - a}$, et non $\\frac{f(b) - f(a)}{a - b}$.",
      "⚠️ $-3^2 = -9$ alors que $(-3)^2 = 9$ : mettre les nombres négatifs entre parenthèses lorsqu'on calcule une image.",
      "⚠️ Le signe de $a(x - x_1)(x - x_2)$ entre les racines dépend du signe de $a$ : un tableau de signes évite les erreurs.",
      "⚠️ En factorisant, ne pas oublier le coefficient $a$ : $2x^2 - 2x - 12 = 2(x - 3)(x + 2)$, et non $(x - 3)(x + 2)$."
    ],
    "flashcards": [
      {
        "q": "Formule du taux de variation de $f$ entre $a$ et $b$ ?",
        "a": "$\\frac{f(b) - f(a)}{b - a}$, la pente de la sécante."
      },
      {
        "q": "Allure de la parabole de $f(x) = ax^2 + bx + c$ si $a < 0$ ?",
        "a": "Tournée vers le bas : $f$ admet un maximum."
      },
      {
        "q": "Sommet de la parabole de $f(x) = ax^2 + c$ ?",
        "a": "Le point $(0 ; c)$."
      },
      {
        "q": "Racines de $f(x) = a(x - x_1)(x - x_2)$ ?",
        "a": "$x_1$ et $x_2$."
      },
      {
        "q": "Axe de symétrie de la parabole de $a(x - x_1)(x - x_2)$ ?",
        "a": "La droite d'équation $x = \\frac{x_1 + x_2}{2}$."
      },
      {
        "q": "Si $f(-1) = f(7)$, quel est l'axe de symétrie de la parabole ?",
        "a": "La droite d'équation $x = 3$."
      },
      {
        "q": "Comment vérifier que $x_1$ est une racine de $f$ ?",
        "a": "On calcule $f(x_1)$ et l'on vérifie que le résultat est $0$."
      },
      {
        "q": "Connaissant une racine $x_1$ de $ax^2 + bx + c$, comment trouver l'autre ?",
        "a": "On écrit $a \\times x_1 \\times x_2 = c$ et l'on résout en $x_2$."
      },
      {
        "q": "Signe de $a(x - x_1)(x - x_2)$ à l'extérieur des racines ?",
        "a": "Le signe de $a$."
      },
      {
        "q": "Variations de $f(x) = 2(x - 1)(x - 3)$ ?",
        "a": "Décroissante sur $]-\\infty ; 2]$, croissante sur $[2 ; +\\infty[$ ; minimum $f(2) = -2$."
      }
    ]
  },
  "1T5": {
    "title": "1T5 : Dérivation : nombre dérivé, tangente et variations",
    "domain": "Analyse et Fonctions",
    "objectives": [
      "Interpréter le nombre dérivé $f'(a)$ comme coefficient directeur de la tangente et le lire sur un graphique.",
      "Déterminer l'équation réduite d'une tangente : $y = f'(a)(x - a) + f(a)$.",
      "Calculer la dérivée d'une fonction polynôme de degré au plus $3$.",
      "Déduire du signe de $f'$ (affine ou donnée sous forme factorisée) le tableau de variations de $f$.",
      "Déterminer un extremum et résoudre un problème d'optimisation (bénéfice, volume, vitesse)."
    ],
    "keyPoints": [
      {
        "title": "1. Taux de variation et nombre dérivé",
        "content": "• Le **taux de variation** de $f$ entre $a$ et $a + h$ est $\\frac{f(a + h) - f(a)}{h}$ : c'est le coefficient directeur de la sécante qui joint les points d'abscisses $a$ et $a + h$.\n• Lorsque $h$ devient de plus en plus proche de $0$, ce taux se rapproche d'un nombre, appelé **nombre dérivé** de $f$ en $a$ et noté $f'(a)$.\n• Si $d(t)$ est une distance parcourue à l'instant $t$, $d'(t)$ est la **vitesse instantanée** à cet instant."
      },
      {
        "title": "2. Tangente à une courbe",
        "content": "• La tangente à la courbe de $f$ au point d'abscisse $a$ est la droite qui passe par $A(a ; f(a))$ et a pour coefficient directeur $f'(a)$.\n• Son équation réduite est $y = f'(a)(x - a) + f(a)$.\n• **Lecture graphique** : si la tangente passe par deux points connus, $f'(a) = \\frac{\\Delta y}{\\Delta x}$ entre ces deux points.\n• La tangente est **horizontale** exactement lorsque $f'(a) = 0$."
      },
      {
        "title": "3. Dérivées usuelles",
        "content": "• $(k)' = 0$ ; $(x)' = 1$ ; $(x^2)' = 2x$ ; $(x^3)' = 3x^2$.\n• $(u + v)' = u' + v'$ et $(ku)' = ku'$ pour tout réel $k$.\n• En particulier $(ax^2 + bx + c)' = 2ax + b$.\n*Exemple* : $f(x) = 2x^3 - 6x + 1$ donne $f'(x) = 6x^2 - 6$."
      },
      {
        "title": "4. Signe de la dérivée et variations",
        "content": "• Si $f'(x) > 0$ sur un intervalle (sauf en des points isolés), $f$ y est strictement croissante ; si $f'(x) < 0$, elle y est strictement décroissante.\n• Pour étudier le signe de $f'$ : une expression affine $mx + p$ change de signe en $-\\frac{p}{m}$ ; une expression factorisée s'étudie dans un tableau de signes, facteur par facteur."
      },
      {
        "title": "5. Extremums",
        "content": "• Si $f'$ s'annule **en changeant de signe** en $a$, $f$ admet un extremum local en $a$ : un maximum si $f'$ passe de $+$ à $-$, un minimum si $f'$ passe de $-$ à $+$.\n• La valeur de l'extremum est l'image $f(a)$.\n*Exemple* : $f(x) = x^2 - 4x + 1$, $f'(x) = 2x - 4$ est négative avant $2$ et positive après : minimum $f(2) = -3$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Lire un nombre dérivé sur un graphique",
        "example": "La tangente à la courbe de $f$ au point $A(1 ; 2)$ passe aussi par $B(3 ; 6)$. Déterminer $f'(1)$.",
        "steps": [
          "**Étape 1** : $f'(1)$ est le coefficient directeur de la tangente en $A$.",
          "**Étape 2** : entre $A$ et $B$, $\\Delta y = 6 - 2 = 4$ et $\\Delta x = 3 - 1 = 2$.",
          "**Conclusion** : $f'(1) = \\frac{4}{2} = 2$."
        ]
      },
      {
        "title": "Méthode : Écrire l'équation d'une tangente",
        "example": "Équation de la tangente à la courbe de $f(x) = x^2 - 3x$ au point d'abscisse $2$.",
        "steps": [
          "**Étape 1 (image)** : $f(2) = 4 - 6 = -2$.",
          "**Étape 2 (nombre dérivé)** : $f'(x) = 2x - 3$, donc $f'(2) = 1$.",
          "**Étape 3 (formule)** : $y = f'(2)(x - 2) + f(2) = 1 \\times (x - 2) - 2$.",
          "**Conclusion** : la tangente a pour équation $y = x - 4$."
        ]
      },
      {
        "title": "Méthode : Dresser le tableau de variations d'un polynôme de degré 3",
        "example": "Étudier les variations de $f(x) = x^3 - 3x + 1$ sur $\\mathbb{R}$.",
        "steps": [
          "**Étape 1 (dérivée)** : $f'(x) = 3x^2 - 3$, et l'on vérifie en développant que $3x^2 - 3 = 3(x - 1)(x + 1)$.",
          "**Étape 2 (signe)** : le produit $3(x - 1)(x + 1)$ est positif sur $]-\\infty ; -1[$, négatif sur $]-1 ; 1[$, positif sur $]1 ; +\\infty[$.",
          "**Étape 3 (images)** : $f(-1) = -1 + 3 + 1 = 3$ et $f(1) = 1 - 3 + 1 = -1$.",
          "**Conclusion** : $f$ est croissante sur $]-\\infty ; -1]$, décroissante sur $[-1 ; 1]$, croissante sur $[1 ; +\\infty[$ ; maximum local $3$ en $-1$, minimum local $-1$ en $1$."
        ]
      },
      {
        "title": "Méthode : Résoudre un problème d'optimisation",
        "example": "Le bénéfice (en euros) pour $x$ articles vendus, $x \\in [0 ; 50]$, est $B(x) = -2x^2 + 120x - 1000$. Pour quelle quantité est-il maximal ?",
        "steps": [
          "**Étape 1 (dérivée)** : $B'(x) = -4x + 120$.",
          "**Étape 2 (signe)** : $-4x + 120 > 0 \\iff x < 30$ ; $B'$ est positive sur $[0 ; 30[$ puis négative sur $]30 ; 50]$.",
          "**Étape 3 (valeur)** : $B(30) = -1800 + 3600 - 1000 = 800$.",
          "**Conclusion** : le bénéfice est maximal pour $30$ articles et vaut alors $800$ €."
        ]
      }
    ],
    "traps": [
      "⚠️ La dérivée d'une constante est nulle : ne pas la recopier dans $f'(x)$.",
      "⚠️ Le signe de $f'$ donne les **variations** de $f$, pas le signe de $f$.",
      "⚠️ $f'(a) = 0$ ne suffit pas pour un extremum : il faut que $f'$ change de signe en $a$ (contre-exemple : $x^3$ en $0$).",
      "⚠️ Dans l'équation de la tangente, on utilise le **nombre** $f'(a)$, pas l'expression $f'(x)$, et on n'oublie pas d'ajouter $f(a)$."
    ],
    "flashcards": [
      {
        "q": "Que vaut la dérivée de $x^3$ ?",
        "a": "$3x^2$."
      },
      {
        "q": "Dérivée de $5x^2 - 7x + 2$ ?",
        "a": "$10x - 7$ (la constante disparaît)."
      },
      {
        "q": "Équation de la tangente au point d'abscisse $a$ ?",
        "a": "$y = f'(a)(x - a) + f(a)$."
      },
      {
        "q": "Que représente géométriquement $f'(a)$ ?",
        "a": "Le coefficient directeur de la tangente à la courbe au point d'abscisse $a$."
      },
      {
        "q": "Que représente le taux de variation $\\frac{f(a + h) - f(a)}{h}$ ?",
        "a": "Le coefficient directeur de la sécante entre les points d'abscisses $a$ et $a + h$."
      },
      {
        "q": "Que signifie $f'(x) > 0$ sur un intervalle ?",
        "a": "$f$ est strictement croissante sur cet intervalle."
      },
      {
        "q": "À quelle condition la tangente au point d'abscisse $a$ est-elle horizontale ?",
        "a": "Lorsque $f'(a) = 0$."
      },
      {
        "q": "Quand $f$ admet-elle un maximum local en $a$ ?",
        "a": "Quand $f'$ s'annule en $a$ en passant du signe $+$ au signe $-$."
      },
      {
        "q": "En quelle abscisse la dérivée de $ax^2 + bx + c$ s'annule-t-elle ?",
        "a": "En $x = -\\frac{b}{2a}$, puisque $f'(x) = 2ax + b$."
      },
      {
        "q": "Si $d(t)$ est la distance parcourue à l'instant $t$, que représente $d'(t)$ ?",
        "a": "La vitesse instantanée à l'instant $t$."
      }
    ]
  },
  "1T6": {
    "title": "1T6 : Statistiques à deux variables",
    "domain": "Probabilités et Statistiques",
    "objectives": [
      "Représenter une série statistique à deux variables par un nuage de points et calculer son point moyen $G(\\bar{x} ; \\bar{y})$.",
      "Reconnaître un nuage de forme allongée justifiant un ajustement affine.",
      "Déterminer l'équation d'une droite d'ajustement passant par $G$ (coefficient directeur donné, calculatrice ou tableur) ou passant par deux points choisis.",
      "Utiliser un ajustement pour interpoler ou extrapoler, et discuter la pertinence d'une prévision.",
      "Rappel : calculer des fréquences marginales et conditionnelles dans un tableau croisé."
    ],
    "keyPoints": [
      {
        "title": "1. Série à deux variables et nuage de points",
        "content": "• Une série statistique à deux variables associe à chaque individu deux valeurs $x_i$ et $y_i$ (par exemple le rang d'une année et un chiffre d'affaires).\n• Dans un repère, l'ensemble des points $M_i(x_i ; y_i)$ forme le **nuage de points** de la série.\n• On choisit les unités des axes pour que le nuage occupe bien la figure ; l'origine du repère n'est pas forcément $(0 ; 0)$."
      },
      {
        "title": "2. Point moyen",
        "content": "Le **point moyen** du nuage est $G(\\bar{x} ; \\bar{y})$, où $\\bar{x}$ est la moyenne des $x_i$ et $\\bar{y}$ la moyenne des $y_i$.\n*Exemple* : pour $x$ : $1$, $2$, $3$, $4$ et $y$ : $5$, $8$, $9$, $14$, on a $\\bar{x} = \\frac{10}{4} = 2{,}5$ et $\\bar{y} = \\frac{36}{4} = 9$, donc $G(2{,}5 ; 9)$."
      },
      {
        "title": "3. Ajustement affine",
        "content": "• Lorsque les points du nuage sont presque alignés, on remplace le nuage par une **droite d'ajustement** $y = ax + b$.\n• Lorsque l'énoncé indique que la droite d'ajustement passe par le point moyen $G(\\bar{x} ; \\bar{y})$, les coordonnées de $G$ vérifient son équation : si l'on connaît $a$, on trouve $b = \\bar{y} - a\\bar{x}$.\n• On peut aussi tracer une droite **au jugé**, passant par deux points bien choisis : $a = \\frac{y_B - y_A}{x_B - x_A}$, puis $b = y_A - a x_A$."
      },
      {
        "title": "4. Interpolation et extrapolation",
        "content": "• **Interpoler**, c'est estimer une valeur à l'intérieur de la plage des données : la prévision est en général fiable.\n• **Extrapoler**, c'est estimer en dehors de cette plage : on suppose que la tendance se maintient, ce qui est d'autant moins sûr qu'on s'éloigne des données.\n• Pour une prévision, on remplace $x$ par la valeur voulue ; pour un seuil, on résout une inéquation $ax + b > s$."
      },
      {
        "title": "5. Rappels et prudence",
        "content": "• Dans un tableau croisé, fréquence marginale $= \\frac{\\text{effectif marginal}}{\\text{effectif total}}$ ; fréquence conditionnelle de $B$ parmi $A$ $= \\frac{\\text{effectif de } A \\cap B}{\\text{effectif de } A}$.\n• Une liaison entre deux variables (corrélation) ne prouve pas que l'une est la **cause** de l'autre."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer le point moyen",
        "example": "Calculer le point moyen de la série $x$ : $2$, $4$, $6$, $8$ ; $y$ : $10$, $13$, $15$, $22$.",
        "steps": [
          "**Étape 1** : $\\bar{x} = \\frac{2 + 4 + 6 + 8}{4} = \\frac{20}{4} = 5$.",
          "**Étape 2** : $\\bar{y} = \\frac{10 + 13 + 15 + 22}{4} = \\frac{60}{4} = 15$.",
          "**Conclusion** : $G(5 ; 15)$."
        ]
      },
      {
        "title": "Méthode : Trouver une droite d'ajustement passant par G",
        "example": "Le point moyen d'un nuage est $G(2{,}5 ; 9)$ et la calculatrice donne un coefficient directeur $a = 2{,}8$. Déterminer l'équation de la droite d'ajustement.",
        "steps": [
          "**Étape 1** : la droite $y = 2{,}8x + b$ passe par $G$, donc $9 = 2{,}8 \\times 2{,}5 + b$.",
          "**Étape 2** : $2{,}8 \\times 2{,}5 = 7$, d'où $b = 9 - 7 = 2$.",
          "**Conclusion** : la droite d'ajustement a pour équation $y = 2{,}8x + 2$."
        ]
      },
      {
        "title": "Méthode : Faire une prévision et chercher un seuil",
        "example": "Un ajustement du chiffre d'affaires $y$ (en milliers d'euros) en fonction du rang $x$ de l'année est $y = 2{,}5x + 40$. Estimer le chiffre d'affaires pour $x = 8$, puis le premier rang où il dépassera $75$ milliers d'euros.",
        "steps": [
          "**Étape 1 (prévision)** : $y = 2{,}5 \\times 8 + 40 = 20 + 40 = 60$.",
          "**Étape 2 (seuil)** : $2{,}5x + 40 > 75 \\iff 2{,}5x > 35 \\iff x > 14$.",
          "**Conclusion** : environ $60$ milliers d'euros au rang $8$ ; le seuil de $75$ milliers d'euros serait dépassé à partir du rang $15$, si la tendance se maintient."
        ]
      },
      {
        "title": "Méthode : Ajuster au jugé par deux points",
        "example": "On trace une droite d'ajustement passant par $A(2 ; 10)$ et $B(6 ; 22)$. Déterminer son équation.",
        "steps": [
          "**Étape 1** : $a = \\frac{22 - 10}{6 - 2} = \\frac{12}{4} = 3$.",
          "**Étape 2** : $b = 10 - 3 \\times 2 = 4$.",
          "**Conclusion** : la droite a pour équation $y = 3x + 4$ (on vérifie : $3 \\times 6 + 4 = 22$)."
        ]
      }
    ],
    "traps": [
      "⚠️ Fréquence conditionnelle : diviser par l'effectif de la population de référence, pas par l'effectif total.",
      "⚠️ Corrélation ne veut pas dire causalité : deux grandeurs peuvent évoluer ensemble sans que l'une agisse sur l'autre.",
      "⚠️ Une extrapolation lointaine est peu fiable : la tendance observée peut changer.",
      "⚠️ Lorsque $x$ est un **rang**, il faut convertir le rang trouvé en année (et inversement) avant de conclure."
    ],
    "flashcards": [
      {
        "q": "Coordonnées du point moyen ?",
        "a": "$G(\\bar{x} ; \\bar{y})$ : moyenne des $x_i$ et moyenne des $y_i$."
      },
      {
        "q": "Qu'est-ce qu'un nuage de points ?",
        "a": "L'ensemble des points $M_i(x_i ; y_i)$ d'une série à deux variables."
      },
      {
        "q": "Quand peut-on envisager un ajustement affine ?",
        "a": "Quand les points du nuage sont à peu près alignés (nuage de forme allongée)."
      },
      {
        "q": "Par quel point passe la droite d'ajustement donnée par la calculatrice ?",
        "a": "Par le point moyen $G$."
      },
      {
        "q": "Comment obtenir $b$ si l'on connaît $a$ et $G$ ?",
        "a": "$b = \\bar{y} - a\\bar{x}$."
      },
      {
        "q": "Qu'est-ce qu'une interpolation ?",
        "a": "Une estimation pour une valeur située à l'intérieur de la plage des données."
      },
      {
        "q": "Qu'est-ce qu'une extrapolation ?",
        "a": "Une prévision pour une valeur située en dehors de la plage des données."
      },
      {
        "q": "Coefficient directeur de la droite passant par $A$ et $B$ ?",
        "a": "$a = \\frac{y_B - y_A}{x_B - x_A}$."
      },
      {
        "q": "Fréquence conditionnelle de $B$ parmi $A$ ?",
        "a": "Effectif de $A \\cap B$ divisé par l'effectif de $A$."
      },
      {
        "q": "Une forte corrélation prouve-t-elle un lien de cause à effet ?",
        "a": "Non : elle constate une tendance commune, sans prouver de causalité."
      }
    ]
  },
  "1T7": {
    "title": "1T7 : Probabilités : conditionnement, variables aléatoires et échantillonnage",
    "domain": "Probabilités et Statistiques",
    "objectives": [
      "Calculer une probabilité conditionnelle à partir d'un tableau croisé ou d'un arbre pondéré, et utiliser la formule des probabilités totales.",
      "Reconnaître deux événements indépendants.",
      "Déterminer la loi de probabilité d'une variable aléatoire, calculer son espérance et l'interpréter (jeu équitable, gain moyen).",
      "Représenter la répétition de $2$, $3$ ou $4$ épreuves de Bernoulli identiques et indépendantes par un arbre et calculer des probabilités.",
      "Observer par simulation la fluctuation d'échantillonnage et l'effet de la taille de l'échantillon."
    ],
    "keyPoints": [
      {
        "title": "1. Probabilité conditionnelle",
        "content": "• Si $P(A) \\neq 0$, la probabilité de $B$ sachant $A$ est $P_A(B) = \\frac{P(A \\cap B)}{P(A)}$.\n• On en déduit $P(A \\cap B) = P(A) \\times P_A(B)$.\n• Dans un tableau croisé d'effectifs, $P_A(B) = \\frac{\\text{effectif de } A \\cap B}{\\text{effectif de } A}$ : on se restreint à la population $A$."
      },
      {
        "title": "2. Arbre pondéré et probabilités totales",
        "content": "• Sur chaque branche, on inscrit une probabilité (conditionnelle à partir du second niveau) ; les branches issues d'un même nœud ont une somme égale à $1$.\n• La probabilité d'un chemin est le **produit** des probabilités rencontrées.\n• **Probabilités totales** : $P(B) = P(A \\cap B) + P(\\bar{A} \\cap B) = P(A) P_A(B) + P(\\bar{A}) P_{\\bar{A}}(B)$."
      },
      {
        "title": "3. Indépendance",
        "content": "Deux événements $A$ et $B$ (de probabilités non nulles) sont **indépendants** lorsque $P_A(B) = P(B)$, ce qui équivaut à $P(A \\cap B) = P(A) \\times P(B)$ : savoir que $A$ est réalisé ne modifie pas la probabilité de $B$.\nÀ ne pas confondre avec **incompatibles** ($A \\cap B = \\emptyset$)."
      },
      {
        "title": "4. Variable aléatoire et espérance",
        "content": "• Une variable aléatoire $X$ associe un nombre à chaque issue. Sa **loi** donne les valeurs $x_i$ et les probabilités $p_i = P(X = x_i)$, de somme $1$.\n• Son **espérance** est $E(X) = x_1 p_1 + x_2 p_2 + \\dots + x_k p_k$ : c'est la valeur moyenne de $X$ sur un grand nombre de répétitions.\n• Si $X$ est le gain algébrique d'un jeu, le jeu est **équitable** lorsque $E(X) = 0$."
      },
      {
        "title": "5. Répétition d'épreuves de Bernoulli",
        "content": "• Une **épreuve de Bernoulli** a deux issues : succès (probabilité $p$) et échec ($1 - p$). Une variable de Bernoulli a pour espérance $p$.\n• On répète $n$ fois ($n \\le 4$) la même épreuve de façon indépendante : on représente la situation par un arbre, et la probabilité d'un chemin est un produit.\n• $P(\\text{aucun succès}) = (1 - p)^n$, donc $P(\\text{au moins un succès}) = 1 - (1 - p)^n$."
      },
      {
        "title": "6. Fluctuation d'échantillonnage",
        "content": "• La fréquence de succès observée sur un échantillon de taille $n$ **fluctue** autour de $p$.\n• Si l'on simule de nombreux échantillons et que $s$ est l'écart type des fréquences obtenues, environ $95\\,\\%$ d'entre elles sont dans $[p - 2s ; p + 2s]$ (et presque toutes dans $[p - 3s ; p + 3s]$).\n• $s$ est de l'ordre de $\\frac{1}{\\sqrt{n}}$ : pour diviser la dispersion par $k$, il faut multiplier la taille $n$ par $k^2$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Utiliser un arbre pondéré",
        "example": "On sait que $P(A) = 0{,}3$, $P_A(B) = 0{,}8$ et $P_{\\bar{A}}(B) = 0{,}4$. Calculer $P(B)$ puis $P_B(A)$.",
        "steps": [
          "**Étape 1 (chemins)** : $P(A \\cap B) = 0{,}3 \\times 0{,}8 = 0{,}24$ et $P(\\bar{A} \\cap B) = 0{,}7 \\times 0{,}4 = 0{,}28$.",
          "**Étape 2 (probabilités totales)** : $P(B) = 0{,}24 + 0{,}28 = 0{,}52$.",
          "**Étape 3 (conditionnement inverse)** : $P_B(A) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0{,}24}{0{,}52} = \\frac{6}{13}$.",
          "**Conclusion** : $P(B) = 0{,}52$ et $P_B(A) = \\frac{6}{13} \\approx 0{,}46$."
        ]
      },
      {
        "title": "Méthode : Calculer une espérance",
        "example": "Un jeu rapporte $10$ € avec probabilité $0{,}1$, $2$ € avec probabilité $0{,}3$ et fait perdre $1$ € sinon. Calculer l'espérance du gain.",
        "steps": [
          "**Étape 1 (loi complète)** : la probabilité de perdre vaut $1 - 0{,}1 - 0{,}3 = 0{,}6$.",
          "**Étape 2 (formule)** : $E(X) = 10 \\times 0{,}1 + 2 \\times 0{,}3 + (-1) \\times 0{,}6$.",
          "**Conclusion** : $E(X) = 1 + 0{,}6 - 0{,}6 = 1$ € : en moyenne, le joueur gagne $1$ € par partie ; le jeu lui est favorable."
        ]
      },
      {
        "title": "Méthode : Répéter une épreuve de Bernoulli",
        "example": "Une graine germe avec probabilité $0{,}2$. On sème $3$ graines, de façon indépendante. Calculer la probabilité qu'au moins une germe, puis qu'exactement une germe.",
        "steps": [
          "**Étape 1 (aucun succès)** : $P(\\text{aucune}) = 0{,}8^3 = 0{,}512$.",
          "**Étape 2 (au moins un)** : $P(\\text{au moins une}) = 1 - 0{,}512 = 0{,}488$.",
          "**Étape 3 (exactement un)** : trois chemins (SÉÉ, ÉSÉ, ÉÉS) ont chacun pour probabilité $0{,}2 \\times 0{,}8^2 = 0{,}128$.",
          "**Conclusion** : $P(\\text{exactement une}) = 3 \\times 0{,}128 = 0{,}384$."
        ]
      },
      {
        "title": "Méthode : Tester l'indépendance",
        "example": "On sait que $P(A) = 0{,}4$, $P(B) = 0{,}5$ et $P(A \\cap B) = 0{,}2$. Les événements $A$ et $B$ sont-ils indépendants ?",
        "steps": [
          "**Étape 1** : $P(A) \\times P(B) = 0{,}4 \\times 0{,}5 = 0{,}2$.",
          "**Étape 2** : on compare avec $P(A \\cap B) = 0{,}2$ : les deux valeurs sont égales.",
          "**Conclusion** : $A$ et $B$ sont indépendants (on vérifie aussi que $P_A(B) = \\frac{0{,}2}{0{,}4} = 0{,}5 = P(B)$)."
        ]
      }
    ],
    "traps": [
      "⚠️ $P_A(B)$ et $P_B(A)$ sont en général différentes : bien repérer quelle est la population de référence (ce qui suit « sachant »).",
      "⚠️ La somme des probabilités d'une loi doit valoir $1$ : c'est un contrôle indispensable.",
      "⚠️ L'espérance n'est pas forcément une valeur prise par $X$ : c'est une moyenne.",
      "⚠️ Indépendants ne veut pas dire incompatibles : deux événements incompatibles de probabilités non nulles ne sont jamais indépendants."
    ],
    "flashcards": [
      {
        "q": "Formule de $P_A(B)$ ?",
        "a": "$P_A(B) = \\frac{P(A \\cap B)}{P(A)}$, avec $P(A) \\neq 0$."
      },
      {
        "q": "Probabilité d'un chemin dans un arbre pondéré ?",
        "a": "Le produit des probabilités inscrites sur ses branches."
      },
      {
        "q": "Formule des probabilités totales avec $A$ et $\\bar{A}$ ?",
        "a": "$P(B) = P(A) P_A(B) + P(\\bar{A}) P_{\\bar{A}}(B)$."
      },
      {
        "q": "Quand $A$ et $B$ sont-ils indépendants ?",
        "a": "Quand $P(A \\cap B) = P(A) \\times P(B)$, autrement dit $P_A(B) = P(B)$."
      },
      {
        "q": "Formule de l'espérance d'une variable aléatoire ?",
        "a": "$E(X) = x_1 p_1 + x_2 p_2 + \\dots + x_k p_k$."
      },
      {
        "q": "Quand dit-on qu'un jeu est équitable ?",
        "a": "Quand l'espérance du gain algébrique est nulle."
      },
      {
        "q": "Qu'est-ce qu'une épreuve de Bernoulli ?",
        "a": "Une expérience aléatoire à deux issues : succès (probabilité $p$) et échec ($1 - p$)."
      },
      {
        "q": "Probabilité d'au moins un succès en $n$ épreuves de Bernoulli indépendantes ?",
        "a": "$1 - (1 - p)^n$."
      },
      {
        "q": "Quelle proportion des fréquences simulées se trouve dans $[p - 2s ; p + 2s]$ ?",
        "a": "Environ $95\\,\\%$."
      },
      {
        "q": "Comment diviser par $2$ la dispersion des fréquences d'échantillonnage ?",
        "a": "En multipliant la taille de l'échantillon par $4$."
      }
    ]
  }
};

window.MATHS_EXERCISES_1TECHNO = {
  "1T1": [
    {
      "id": "1T1-1",
      "tier": 1,
      "type": "mcq",
      "title": "Cardinal d'une réunion",
      "skill": "Dénombrer une réunion d'ensembles",
      "statement": "Dans une classe de $30$ élèves, $18$ suivent l'option anglais renforcé, $12$ l'option espagnol renforcé et $5$ suivent les deux. Combien d'élèves suivent au moins l'une des deux options ?",
      "options": [
        "$25$",
        "$30$",
        "$35$",
        "$20$"
      ],
      "correctIndex": 0,
      "answer": "$25$",
      "hint1": "Les éléments de l'intersection sont comptés deux fois quand on additionne les deux effectifs : on utilise $\\text{Card}(A \\cup B) = \\text{Card}(A) + \\text{Card}(B) - \\text{Card}(A \\cap B)$.",
      "hint2": "Ici $\\text{Card}(A) + \\text{Card}(B) = 18 + 12$ ; il reste à retrancher l'effectif de ceux qui suivent les deux options.",
      "solution": "$\\text{Card}(A \\cup B) = 18 + 12 - 5 = 25$. Donc $25$ élèves suivent au moins une des deux options (et $5$ n'en suivent aucune)."
    },
    {
      "id": "1T1-2",
      "tier": 2,
      "type": "mcq",
      "title": "Contre-exemple",
      "skill": "Réfuter une affirmation par un contre-exemple",
      "statement": "Quelle valeur de $x$ est un contre-exemple à l'affirmation « pour tout réel $x$, $x^2 \\geqslant x$ » ?",
      "options": [
        "$x = 0{,}5$",
        "$x = 2$",
        "$x = -1$",
        "$x = 0$"
      ],
      "correctIndex": 0,
      "answer": "$x = 0{,}5$",
      "hint1": "Un contre-exemple est une valeur pour laquelle l'affirmation est fausse : ici, une valeur pour laquelle le carré est strictement plus petit que le nombre.",
      "hint2": "Pour $x = 2$, on a $x^2 = 4 \\geqslant 2$ : ce n'est pas un contre-exemple. Teste de même les autres valeurs.",
      "solution": "Pour $x = 0{,}5$ : $x^2 = 0{,}25$ et $0{,}25 < 0{,}5$. L'inégalité est fausse pour cette valeur, donc l'affirmation est fausse. (Pour $2$, $-1$ et $0$, l'inégalité est vraie.)"
    },
    {
      "id": "1T1-3",
      "tier": 1,
      "type": "mcq",
      "title": "Appliquer un pourcentage",
      "skill": "Calculer un pourcentage d'une quantité",
      "statement": "Un festival a accueilli $240$ bénévoles, dont $35\\,\\%$ venaient pour la première fois. Combien de bénévoles venaient pour la première fois ?",
      "options": [
        "$84$",
        "$8{,}4$",
        "$156$",
        "$96$"
      ],
      "correctIndex": 0,
      "answer": "$84$",
      "hint1": "Prendre $t\\,\\%$ d'une quantité revient à la multiplier par $\\frac{t}{100}$.",
      "hint2": "On calcule $240 \\times 0{,}35$, par exemple comme $240 \\times 0{,}3 + 240 \\times 0{,}05$.",
      "solution": "$240 \\times 0{,}35 = 72 + 12 = 84$. Donc $84$ bénévoles venaient pour la première fois (et $156$ étaient déjà venus)."
    },
    {
      "id": "1T1-4",
      "tier": 2,
      "type": "mcq",
      "title": "Complémentaire et intersection",
      "skill": "Déterminer une intersection avec un complémentaire",
      "statement": "On considère $E = \\{1 ; 2 ; 3 ; 4 ; 5 ; 6 ; 7 ; 8 ; 9 ; 10\\}$, $A$ l'ensemble des nombres pairs de $E$ et $B = \\{1 ; 2 ; 3 ; 4\\}$. Déterminer $\\overline{A} \\cap B$.",
      "options": [
        "$\\{1 ; 3\\}$",
        "$\\{2 ; 4\\}$",
        "$\\{1 ; 2 ; 3 ; 4 ; 5 ; 7 ; 9\\}$",
        "$\\{5 ; 7 ; 9\\}$"
      ],
      "correctIndex": 0,
      "answer": "$\\{1 ; 3\\}$",
      "hint1": "On écrit d'abord le complémentaire (les éléments de $E$ qui ne sont pas dans $A$), puis on ne garde que ceux qui sont aussi dans $B$.",
      "hint2": "$\\overline{A}$ est l'ensemble des nombres impairs de $E$ : $\\{1 ; 3 ; 5 ; 7 ; 9\\}$.",
      "solution": "$\\overline{A} = \\{1 ; 3 ; 5 ; 7 ; 9\\}$ et $B = \\{1 ; 2 ; 3 ; 4\\}$. Les éléments communs sont $1$ et $3$, donc $\\overline{A} \\cap B = \\{1 ; 3\\}$. ($\\{1 ; 2 ; 3 ; 4 ; 5 ; 7 ; 9\\}$ est la réunion, pas l'intersection.)"
    },
    {
      "id": "1T1-5",
      "tier": 3,
      "type": "mcq",
      "title": "Évolution réciproque",
      "skill": "Calculer un taux d'évolution réciproque",
      "statement": "Le prix d'un vélo a augmenté de $25\\,\\%$. Quelle baisse, en pourcentage, ramènerait le prix à sa valeur initiale ?",
      "options": [
        "Une baisse de $20\\,\\%$",
        "Une baisse de $25\\,\\%$",
        "Une baisse de $75\\,\\%$",
        "Une baisse de $80\\,\\%$"
      ],
      "correctIndex": 0,
      "answer": "Une baisse de $20\\,\\%$",
      "hint1": "Le coefficient de l'évolution réciproque est l'inverse du coefficient multiplicateur de l'évolution de départ.",
      "hint2": "La hausse correspond au coefficient $1{,}25 = \\frac{5}{4}$ ; calcule son inverse.",
      "solution": "Le coefficient réciproque est $\\frac{1}{1{,}25} = \\frac{4}{5} = 0{,}8$, et $0{,}8 - 1 = -0{,}2$. Il faut donc une baisse de $20\\,\\%$. Une baisse de $25\\,\\%$ donnerait $1{,}25 \\times 0{,}75 = 0{,}9375$ : on ne reviendrait pas au prix initial."
    },
    {
      "id": "1T1-6",
      "tier": 3,
      "type": "mcq",
      "title": "Contraposée",
      "skill": "Formuler la contraposée d'une implication",
      "statement": "On considère l'implication : « si un entier est un multiple de $6$, alors il est pair ». Quelle est sa contraposée ?",
      "options": [
        "Si un entier n'est pas pair, alors il n'est pas un multiple de $6$.",
        "Si un entier est pair, alors il est un multiple de $6$.",
        "Si un entier n'est pas un multiple de $6$, alors il n'est pas pair.",
        "Si un entier est un multiple de $6$, alors il n'est pas pair."
      ],
      "correctIndex": 0,
      "answer": "Si un entier n'est pas pair, alors il n'est pas un multiple de $6$.",
      "hint1": "La contraposée de « si $P$, alors $Q$ » est « si non $Q$, alors non $P$ » : on nie les deux propositions et on échange leurs places.",
      "hint2": "Ici $P$ : « l'entier est un multiple de $6$ » et $Q$ : « l'entier est pair ». Écris non $Q$ puis non $P$.",
      "solution": "La contraposée est « si un entier n'est pas pair, alors il n'est pas un multiple de $6$ ». Elle est vraie, comme l'implication de départ. La phrase « si un entier est pair, alors il est un multiple de $6$ » est la réciproque, qui est fausse ($4$ est un contre-exemple)."
    },
    {
      "id": "1T1-7",
      "tier": 4,
      "type": "mcq",
      "title": "Évolutions successives",
      "skill": "Calculer un taux d'évolution global",
      "statement": "Le nombre d'abonnés d'une médiathèque augmente de $20\\,\\%$ la première année, baisse de $10\\,\\%$ la deuxième, puis augmente de $5\\,\\%$ la troisième. Quel est le taux d'évolution global sur les trois ans ?",
      "options": [
        "$+13{,}4\\,\\%$",
        "$+15\\,\\%$",
        "$+11{,}4\\,\\%$",
        "$+3{,}4\\,\\%$"
      ],
      "correctIndex": 0,
      "answer": "$+13{,}4\\,\\%$",
      "hint1": "Pour des évolutions successives, on multiplie les coefficients multiplicateurs, puis on retranche $1$ pour obtenir le taux global.",
      "hint2": "Les coefficients sont $1{,}2$, $0{,}9$ et $1{,}05$ ; commence par $1{,}2 \\times 0{,}9$.",
      "solution": "$1{,}2 \\times 0{,}9 = 1{,}08$, puis $1{,}08 \\times 1{,}05 = 1{,}134$. Le coefficient global est $1{,}134$, soit un taux de $+13{,}4\\,\\%$. Additionner les pourcentages ($20 - 10 + 5 = 15$) est une erreur."
    },
    {
      "id": "1T1-8",
      "tier": 4,
      "type": "mcq",
      "title": "Condition nécessaire, condition suffisante",
      "skill": "Reconnaître une condition nécessaire ou suffisante",
      "statement": "Pour un réel $x$, la condition « $x > 3$ » est-elle nécessaire, suffisante, les deux ou aucune des deux pour avoir « $x^2 > 9$ » ?",
      "options": [
        "Suffisante, mais pas nécessaire",
        "Nécessaire, mais pas suffisante",
        "Nécessaire et suffisante",
        "Ni nécessaire ni suffisante"
      ],
      "correctIndex": 0,
      "answer": "Suffisante, mais pas nécessaire",
      "hint1": "On étudie l'implication « si $P$, alors $Q$ » (vraie : $P$ est suffisante), puis sa réciproque (vraie : $P$ est aussi nécessaire). Un contre-exemple suffit à réfuter l'une d'elles.",
      "hint2": "Si $x > 3$, alors $x^2 > 9$ car les deux membres sont positifs. Cherche ensuite un réel négatif dont le carré dépasse $9$.",
      "solution": "Si $x > 3$, alors $x^2 > 9$ : la condition est suffisante. Mais pour $x = -4$, on a $x^2 = 16 > 9$ alors que $x < 3$ : la réciproque est fausse, la condition n'est pas nécessaire. Elle est donc suffisante, mais pas nécessaire."
    }
  ],
  "1T2": [
    {
      "id": "1T2-1",
      "tier": 1,
      "type": "mcq",
      "title": "Indice dans une liste",
      "skill": "Accéder à un élément d'une liste par son indice",
      "statement": "Qu'affiche le programme suivant ?\n```python\nL = [4, 7, 1, 9, 3]\nprint(L[2])\n```",
      "options": [
        "$1$",
        "$7$",
        "$9$",
        "$3$"
      ],
      "correctIndex": 0,
      "answer": "$1$",
      "hint1": "En Python, les indices d'une liste commencent à $0$ : le premier élément a l'indice $0$, le suivant a l'indice suivant, et ainsi de suite.",
      "hint2": "`L[0]` vaut $4$ et `L[1]` vaut $7$ ; continue d'un rang.",
      "solution": "Les indices sont $0$, $1$, $2$, … : `L[0] = 4`, `L[1] = 7`, `L[2] = 1`. Le programme affiche $1$. Répondre $7$ revient à oublier que l'on commence à $0$."
    },
    {
      "id": "1T2-2",
      "tier": 1,
      "type": "mcq",
      "title": "Affectations successives",
      "skill": "Suivre des affectations successives",
      "statement": "Que vaut la variable `a` à la fin du programme ?\n```python\na = 5\nb = a + 2\na = b * 3\n```",
      "options": [
        "$21$",
        "$15$",
        "$7$",
        "$17$"
      ],
      "correctIndex": 0,
      "answer": "$21$",
      "hint1": "On exécute les lignes dans l'ordre ; une affectation utilise les valeurs des variables au moment où elle est exécutée.",
      "hint2": "Après la deuxième ligne, `b` vaut $7$ ; la troisième ligne utilise cette valeur.",
      "solution": "`a` vaut $5$, puis `b = 5 + 2 = 7`, puis `a = 7 * 3 = 21`. À la fin, `a` vaut $21$."
    },
    {
      "id": "1T2-3",
      "tier": 2,
      "type": "mcq",
      "title": "Accumulateur de somme",
      "skill": "Programmer un accumulateur",
      "statement": "Que vaut `s` à la fin du programme ?\n```python\ns = 0\nfor k in range(1, 5):\n    s = s + k * k\n```",
      "options": [
        "$30$",
        "$14$",
        "$55$",
        "$10$"
      ],
      "correctIndex": 0,
      "answer": "$30$",
      "hint1": "`range(a, b)` va de $a$ à $b - 1$ ; à chaque tour, on ajoute la quantité calculée à l'accumulateur.",
      "hint2": "`k` prend les valeurs $1$, $2$, $3$, $4$ ; on ajoute successivement $1$, $4$, …",
      "solution": "`k` prend les valeurs $1$, $2$, $3$ et $4$, donc `s = 1 + 4 + 9 + 16 = 30`. ($55$ correspondrait à aller jusqu'à $5$ et $10$ à la somme des `k` sans les élever au carré.)"
    },
    {
      "id": "1T2-4",
      "tier": 2,
      "type": "mcq",
      "title": "Liste en compréhension",
      "skill": "Construire une liste en compréhension",
      "statement": "Quelle liste est construite par l'instruction `L = [2 * k + 1 for k in range(4)]` ?",
      "options": [
        "`[1, 3, 5, 7]`",
        "`[3, 5, 7, 9]`",
        "`[1, 3, 5, 7, 9]`",
        "`[0, 2, 4, 6]`"
      ],
      "correctIndex": 0,
      "answer": "`[1, 3, 5, 7]`",
      "hint1": "La liste contient la valeur de l'expression pour chaque valeur de `k` parcourue, dans l'ordre.",
      "hint2": "`range(4)` donne $0$, $1$, $2$, $3$ ; pour $k = 0$, l'expression vaut $1$.",
      "solution": "Pour $k = 0, 1, 2, 3$ : $2k + 1$ vaut $1$, $3$, $5$, $7$. Donc `L = [1, 3, 5, 7]` : la liste a $4$ éléments, car `range(4)` s'arrête à $3$."
    },
    {
      "id": "1T2-5",
      "tier": 3,
      "type": "mcq",
      "title": "Compteur conditionnel",
      "skill": "Programmer un compteur",
      "statement": "Que vaut `c` à la fin du programme ?\n```python\nL = [12, 5, 18, 7, 20, 9]\nc = 0\nfor x in L:\n    if x >= 10:\n        c = c + 1\n```",
      "options": [
        "$3$",
        "$2$",
        "$50$",
        "$6$"
      ],
      "correctIndex": 0,
      "answer": "$3$",
      "hint1": "Un compteur augmente de $1$ seulement lorsque la condition est vraie ; il ne cumule pas les valeurs.",
      "hint2": "Parcours la liste : `12` vérifie la condition, `5` non, …",
      "solution": "Les éléments supérieurs ou égaux à $10$ sont $12$, $18$ et $20$ : `c` vaut $3$. ($50$ serait leur somme, et $6$ le nombre total d'éléments.)"
    },
    {
      "id": "1T2-6",
      "tier": 3,
      "type": "mcq",
      "title": "Fonction et accumulateur de produit",
      "skill": "Écrire et utiliser une fonction",
      "statement": "On considère la fonction suivante. Que renvoie `f(5)` ?\n```python\ndef f(n):\n    p = 1\n    for k in range(n):\n        p = p * 2\n    return p\n```",
      "options": [
        "$32$",
        "$10$",
        "$16$",
        "$64$"
      ],
      "correctIndex": 0,
      "answer": "$32$",
      "hint1": "La boucle s'exécute autant de fois que l'indique `range` ; à chaque tour, l'accumulateur est multiplié par le même nombre.",
      "hint2": "Pour `n = 5`, la boucle fait $5$ tours et `p` part de $1$.",
      "solution": "`p` est multiplié $5$ fois par $2$ : `p = 2^5 = 32`. La fonction renvoie $2^n$ ; ici `f(5)` vaut $32$."
    },
    {
      "id": "1T2-7",
      "tier": 4,
      "type": "mcq",
      "title": "Boucle de seuil",
      "skill": "Déterminer un seuil avec une boucle while",
      "statement": "Une somme de $100$ euros augmente de $10\\,\\%$ par an. Que vaut `n` à la fin du programme ?\n```python\nu = 100\nn = 0\nwhile u < 200:\n    u = u * 1.1\n    n = n + 1\n```",
      "options": [
        "$8$",
        "$7$",
        "$10$",
        "$9$"
      ],
      "correctIndex": 0,
      "answer": "$8$",
      "hint1": "La boucle s'arrête au premier tour où la condition devient fausse ; `n` compte les tours effectués.",
      "hint2": "Calcule les valeurs successives de `u` : $110$ ; $121$ ; $133{,}1$ ; …",
      "solution": "On trouve successivement $110$ ; $121$ ; $133{,}1$ ; $146{,}41$ ; $161{,}05$ ; $177{,}16$ ; $194{,}87$ (pour $n = 7$), puis $214{,}36$ pour $n = 8$. La somme double donc au bout de $8$ ans, et `n` vaut $8$. Avec $10$ ans, on aurait ajouté $10\\,\\%$ de $100$ chaque année, ce qui est un raisonnement arithmétique."
    },
    {
      "id": "1T2-8",
      "tier": 4,
      "type": "mcq",
      "title": "Simulation de Bernoulli",
      "skill": "Simuler une expérience aléatoire",
      "statement": "On exécute le programme suivant. De quelle valeur le nombre affiché est-il probablement proche ?\n```python\nfrom random import random\nc = 0\nfor i in range(1000):\n    if random() < 0.3:\n        c = c + 1\nprint(c / 1000)\n```",
      "options": [
        "$0{,}3$",
        "$0{,}7$",
        "$300$",
        "$3$"
      ],
      "correctIndex": 0,
      "answer": "$0{,}3$",
      "hint1": "Le test `random() < p` est vrai avec la probabilité $p$ ; sur un grand nombre de répétitions, la fréquence des succès est proche de $p$.",
      "hint2": "`c` compte les succès sur $1000$ essais ; le programme affiche `c / 1000`, une fréquence.",
      "solution": "À chaque tour, le succès a la probabilité $0{,}3$. `c` est en général proche de $300$, donc la fréquence `c / 1000` affichée est proche de $0{,}3$. Le résultat change d'une exécution à l'autre."
    }
  ],
  "1T3": [
    {
      "id": "1T3-1",
      "tier": 1,
      "type": "mcq",
      "title": "Terme d'une suite arithmétique",
      "skill": "Calculer un terme d'une suite arithmétique",
      "statement": "La suite $u$ est arithmétique, de premier terme $u(0) = 7$ et de raison $3$. Calculer $u(10)$.",
      "options": [
        "$37$",
        "$40$",
        "$30$",
        "$21$"
      ],
      "correctIndex": 0,
      "answer": "$37$",
      "hint1": "Le terme général d'une suite arithmétique est $u(n) = u(0) + nr$.",
      "hint2": "On remplace : $u(10) = 7 + 10 \\times 3$.",
      "solution": "$u(10) = 7 + 10 \\times 3 = 7 + 30 = 37$. ($40$ correspond à $11$ ajouts de la raison au lieu de $10$.)"
    },
    {
      "id": "1T3-2",
      "tier": 1,
      "type": "mcq",
      "title": "Terme d'une suite géométrique",
      "skill": "Calculer un terme d'une suite géométrique",
      "statement": "La suite $v$ est géométrique, de premier terme $v(0) = 5$ et de raison $2$. Calculer $v(4)$.",
      "options": [
        "$80$",
        "$40$",
        "$160$",
        "$13$"
      ],
      "correctIndex": 0,
      "answer": "$80$",
      "hint1": "Le terme général d'une suite géométrique est $v(n) = v(0) \\times q^n$.",
      "hint2": "On remplace : $v(4) = 5 \\times 2^4$.",
      "solution": "$v(4) = 5 \\times 2^4 = 5 \\times 16 = 80$. On vérifie de proche en proche : $5$ ; $10$ ; $20$ ; $40$ ; $80$. ($13 = 5 + 4 \\times 2$ serait le résultat d'une suite arithmétique.)"
    },
    {
      "id": "1T3-3",
      "tier": 2,
      "type": "mcq",
      "title": "Nature d'une suite",
      "skill": "Reconnaître une suite arithmétique",
      "statement": "La suite $u$ est définie pour tout entier naturel $n$ par $u(n) = 3n + 2$. Que peut-on dire de $u$ ?",
      "options": [
        "Elle est arithmétique de raison $3$.",
        "Elle est arithmétique de raison $2$.",
        "Elle est géométrique de raison $3$.",
        "Elle n'est ni arithmétique ni géométrique."
      ],
      "correctIndex": 0,
      "answer": "Elle est arithmétique de raison $3$.",
      "hint1": "On calcule la différence $u(n + 1) - u(n)$ : si elle ne dépend pas de $n$, la suite est arithmétique et cette différence est la raison.",
      "hint2": "$u(n + 1) = 3(n + 1) + 2 = 3n + 5$ ; soustrais $u(n)$.",
      "solution": "$u(n + 1) - u(n) = (3n + 5) - (3n + 2) = 3$ pour tout $n$. La suite est arithmétique de raison $3$ et de premier terme $u(0) = 2$."
    },
    {
      "id": "1T3-4",
      "tier": 2,
      "type": "mcq",
      "title": "Modéliser une évolution à taux constant",
      "skill": "Exprimer une suite géométrique en fonction de n",
      "statement": "Une association compte $2000$ adhérents en 2025, et ce nombre augmente de $4\\,\\%$ par an. On note $u(n)$ le nombre d'adhérents en $2025 + n$. Quelle expression convient ?",
      "options": [
        "$u(n) = 2000 \\times 1{,}04^n$",
        "$u(n) = 2000 + 0{,}04n$",
        "$u(n) = 2000 \\times 0{,}04^n$",
        "$u(n) = 2000 + 80n$"
      ],
      "correctIndex": 0,
      "answer": "$u(n) = 2000 \\times 1{,}04^n$",
      "hint1": "Augmenter de $t\\,\\%$, c'est multiplier par $1 + \\frac{t}{100}$ ; une multiplication répétée par le même nombre donne une suite géométrique.",
      "hint2": "Chaque année, on multiplie par $1{,}04$ : $u(n + 1) = 1{,}04 \\times u(n)$.",
      "solution": "$u$ est géométrique de premier terme $u(0) = 2000$ et de raison $1{,}04$, donc $u(n) = 2000 \\times 1{,}04^n$. L'expression $2000 + 80n$ ajoute toujours $4\\,\\%$ de l'effectif de 2025 : elle décrit une croissance linéaire, pas une évolution à taux constant."
    },
    {
      "id": "1T3-5",
      "tier": 3,
      "type": "mcq",
      "title": "Seuil d'une suite arithmétique",
      "skill": "Déterminer un seuil",
      "statement": "Un réservoir contient $1200$ litres et perd $45$ litres par jour. On note $u(n)$ le volume, en litres, au bout de $n$ jours, avec $u(n) = 1200 - 45n$. À partir de combien de jours le volume est-il inférieur à $500$ litres ?",
      "options": [
        "$16$",
        "$15$",
        "$27$",
        "$11$"
      ],
      "correctIndex": 0,
      "answer": "$16$",
      "hint1": "On résout l'inéquation obtenue avec la formule explicite, puis on prend le plus petit entier qui convient et l'on vérifie avec deux termes consécutifs.",
      "hint2": "$1200 - 45n < 500$ équivaut à $45n > 700$.",
      "solution": "$45n > 700 \\iff n > \\frac{700}{45} \\approx 15{,}6$. Le plus petit entier qui convient est $16$. Vérification : $u(15) = 525$ et $u(16) = 480$. Le volume passe sous $500$ litres au bout de $16$ jours."
    },
    {
      "id": "1T3-6",
      "tier": 3,
      "type": "mcq",
      "title": "Sens de variation",
      "skill": "Déterminer le sens de variation d'une suite géométrique",
      "statement": "La suite $u$ est définie pour tout entier naturel $n$ par $u(n) = 50 \\times 0{,}9^n$. Quel est son sens de variation ?",
      "options": [
        "Elle est décroissante.",
        "Elle est croissante.",
        "Elle est constante.",
        "Elle n'est ni croissante ni décroissante."
      ],
      "correctIndex": 0,
      "answer": "Elle est décroissante.",
      "hint1": "Une suite géométrique de premier terme strictement positif est croissante si sa raison est supérieure à $1$ et décroissante si sa raison est comprise entre $0$ et $1$.",
      "hint2": "Le premier terme est $50$ et la raison est $0{,}9$ ; compare la raison à $1$.",
      "solution": "$u$ est géométrique de premier terme $50 > 0$ et de raison $q = 0{,}9$, avec $0 < q < 1$ : elle est décroissante. On le vérifie : $u(0) = 50$, $u(1) = 45$, $u(2) = 40{,}5$."
    },
    {
      "id": "1T3-7",
      "tier": 4,
      "type": "mcq",
      "title": "Somme de termes arithmétiques",
      "skill": "Calculer une somme de termes consécutifs",
      "statement": "La suite $u$ est arithmétique de premier terme $u(0) = 4$ et de raison $3$. Calculer $S = u(0) + u(1) + \\dots + u(9)$.",
      "options": [
        "$175$",
        "$144$",
        "$190$",
        "$35$"
      ],
      "correctIndex": 0,
      "answer": "$175$",
      "hint1": "Regroupe le premier et le dernier terme, le deuxième et l'avant-dernier, etc. : ces paires ont toutes la même somme. On peut aussi écrire les termes et les additionner.",
      "hint2": "De $u(0)$ à $u(9)$, il y a $10$ termes, donc $5$ paires ; calcule d'abord $u(9) = 4 + 9 \\times 3$.",
      "solution": "Les termes sont $4$, $7$, $10$, …, $u(9) = 4 + 27 = 31$ : il y en a $10$. Les paires $4 + 31$, $7 + 28$, … valent toutes $35$ et il y en a $5$, donc $S = 5 \\times 35 = 175$. ($144$ correspond à $9$ termes seulement.)"
    },
    {
      "id": "1T3-8",
      "tier": 4,
      "type": "mcq",
      "title": "Somme de termes géométriques",
      "skill": "Calculer une somme de termes d'une suite géométrique",
      "statement": "On admet que, pour tout réel $q \\neq 1$ et tout entier naturel $n$, $1 + q + q^2 + \\dots + q^n = \\frac{q^{n + 1} - 1}{q - 1}$. Calculer $S = 1 + 2 + 2^2 + \\dots + 2^9$.",
      "options": [
        "$1023$",
        "$1024$",
        "$511$",
        "$2047$"
      ],
      "correctIndex": 0,
      "answer": "$1023$",
      "hint1": "Applique la formule admise dans l'énoncé : repère la valeur de $q$ et celle du dernier exposant $n$.",
      "hint2": "Ici $q = 2$ et le dernier exposant est $9$ ; calcule $2^{10}$.",
      "solution": "$S = \\frac{2^{10} - 1}{2 - 1} = 2^{10} - 1$. Comme $2^{10} = 1024$, on obtient $S = 1023$. ($511 = 2^9 - 1$ oublie le dernier terme.)"
    }
  ],
  "1T4": [
    {
      "id": "1T4-1",
      "tier": 1,
      "type": "mcq",
      "title": "Taux de variation",
      "skill": "Calculer un taux de variation",
      "statement": "Soit $f$ la fonction carré : $f(x) = x^2$. Calculer le taux de variation de $f$ entre $1$ et $4$.",
      "options": [
        "$5$",
        "$15$",
        "$3$",
        "$6$"
      ],
      "correctIndex": 0,
      "answer": "$5$",
      "hint1": "Le taux de variation entre $a$ et $b$ est $\\frac{f(b) - f(a)}{b - a}$ : la variation des images divisée par la variation des abscisses.",
      "hint2": "$f(4) = 16$ et $f(1)$ se calcule de même ; le dénominateur vaut $4 - 1$.",
      "solution": "$\\frac{f(4) - f(1)}{4 - 1} = \\frac{16 - 1}{3} = \\frac{15}{3} = 5$. La sécante passant par les points $(1 ; 1)$ et $(4 ; 16)$ a pour pente $5$. ($15$ est la variation des images, sans division.)"
    },
    {
      "id": "1T4-2",
      "tier": 1,
      "type": "mcq",
      "title": "Allure d'une parabole",
      "skill": "Déterminer l'allure et le sommet d'une parabole",
      "statement": "Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = -2x^2 + 8$. Quelle affirmation est exacte ?",
      "options": [
        "La parabole est tournée vers le bas et son sommet est $(0 ; 8)$.",
        "La parabole est tournée vers le haut et son sommet est $(0 ; 8)$.",
        "La parabole est tournée vers le bas et son sommet est $(8 ; 0)$.",
        "La parabole est tournée vers le haut et son sommet est $(0 ; -2)$."
      ],
      "correctIndex": 0,
      "answer": "La parabole est tournée vers le bas et son sommet est $(0 ; 8)$.",
      "hint1": "Pour $f(x) = ax^2 + c$, l'allure dépend du signe de $a$ et le sommet est le point d'abscisse $0$ et d'ordonnée $c$.",
      "hint2": "Ici le coefficient de $x^2$ est $-2$ et le terme constant est $8$.",
      "solution": "$a = -2 < 0$ : la parabole est tournée vers le bas. Le sommet a pour abscisse $0$ et pour ordonnée $f(0) = 8$ : c'est le point $(0 ; 8)$, et $8$ est le maximum de $f$."
    },
    {
      "id": "1T4-3",
      "tier": 2,
      "type": "mcq",
      "title": "Racines d'une forme factorisée",
      "skill": "Lire les racines d'une forme factorisée",
      "statement": "Soit $f(x) = 3(x - 2)(x + 5)$. Quel est l'ensemble des solutions de l'équation $f(x) = 0$ ?",
      "options": [
        "$\\{-5 ; 2\\}$",
        "$\\{-2 ; 5\\}$",
        "$\\{2 ; 5\\}$",
        "$\\{-5 ; 2 ; 3\\}$"
      ],
      "correctIndex": 0,
      "answer": "$\\{-5 ; 2\\}$",
      "hint1": "Un produit est nul si et seulement si l'un au moins de ses facteurs est nul ; un coefficient non nul ne s'annule jamais.",
      "hint2": "On résout $x - 2 = 0$ d'une part, puis l'équation donnée par le second facteur.",
      "solution": "$f(x) = 0 \\iff x - 2 = 0$ ou $x + 5 = 0 \\iff x = 2$ ou $x = -5$. L'ensemble des solutions est $\\{-5 ; 2\\}$ ; le coefficient $3$ n'est pas une solution."
    },
    {
      "id": "1T4-4",
      "tier": 2,
      "type": "mcq",
      "title": "Sommet d'une parabole",
      "skill": "Déterminer le sommet à partir des racines",
      "statement": "Soit $f(x) = (x - 1)(x - 7)$. Quelles sont les coordonnées du sommet de la parabole ?",
      "options": [
        "$(4 ; -9)$",
        "$(4 ; 9)$",
        "$(-4 ; -9)$",
        "$(3 ; -9)$"
      ],
      "correctIndex": 0,
      "answer": "$(4 ; -9)$",
      "hint1": "L'axe de symétrie passe par le milieu des racines ; l'ordonnée du sommet est l'image de cette abscisse.",
      "hint2": "Les racines sont $1$ et $7$ : calcule leur moyenne, puis son image.",
      "solution": "$\\alpha = \\frac{1 + 7}{2} = 4$ et $f(4) = (4 - 1)(4 - 7) = 3 \\times (-3) = -9$. Le sommet est $(4 ; -9)$ ; comme $a = 1 > 0$, c'est le minimum de $f$."
    },
    {
      "id": "1T4-5",
      "tier": 3,
      "type": "mcq",
      "title": "Factoriser connaissant une racine",
      "skill": "Factoriser complètement un polynôme du second degré",
      "statement": "Soit $f(x) = 2x^2 - 2x - 12$. On admet que $3$ est une racine de $f$. Quelle est la forme complètement factorisée de $f(x)$ ?",
      "options": [
        "$2(x - 3)(x + 2)$",
        "$(x - 3)(x + 2)$",
        "$2(x + 3)(x - 2)$",
        "$2(x - 3)(x - 2)$"
      ],
      "correctIndex": 0,
      "answer": "$2(x - 3)(x + 2)$",
      "hint1": "Si $x_1$ est une racine, $f(x) = a(x - x_1)(x - x_2)$ et le terme constant vaut $a \\times x_1 \\times x_2$.",
      "hint2": "Ici $a = 2$ et $x_1 = 3$ : résous $2 \\times 3 \\times x_2 = -12$.",
      "solution": "$f(3) = 18 - 6 - 12 = 0$. Puis $6x_2 = -12$ donne $x_2 = -2$, donc $f(x) = 2(x - 3)(x + 2)$. Vérification : $2(x^2 - x - 6) = 2x^2 - 2x - 12$. Oublier le coefficient $2$ donne une expression qui n'est pas égale à $f(x)$."
    },
    {
      "id": "1T4-6",
      "tier": 3,
      "type": "mcq",
      "title": "Tableau de variations",
      "skill": "Dresser le tableau de variations d'une fonction du second degré",
      "statement": "Soit $f(x) = -(x - 1)(x - 5)$. Quelle affirmation est exacte ?",
      "options": [
        "$f$ est croissante sur $]-\\infty ; 3]$, décroissante sur $[3 ; +\\infty[$, et son maximum vaut $4$.",
        "$f$ est décroissante sur $]-\\infty ; 3]$, croissante sur $[3 ; +\\infty[$, et son minimum vaut $4$.",
        "$f$ est croissante sur $]-\\infty ; 3]$, décroissante sur $[3 ; +\\infty[$, et son maximum vaut $3$.",
        "$f$ est croissante sur $[1 ; 5]$ et décroissante ailleurs."
      ],
      "correctIndex": 0,
      "answer": "$f$ est croissante sur $]-\\infty ; 3]$, décroissante sur $[3 ; +\\infty[$, et son maximum vaut $4$.",
      "hint1": "Le sommet est sur l'axe de symétrie, au milieu des racines ; si $a < 0$, la fonction croît puis décroît.",
      "hint2": "L'abscisse du sommet est $\\frac{1 + 5}{2}$ et le coefficient $a$ vaut $-1$.",
      "solution": "$\\alpha = 3$ et $f(3) = -(3 - 1)(3 - 5) = -2 \\times (-2) = 4$. Comme $a = -1 < 0$, $f$ est croissante sur $]-\\infty ; 3]$ puis décroissante sur $[3 ; +\\infty[$ : son maximum vaut $4$, atteint en $x = 3$."
    },
    {
      "id": "1T4-7",
      "tier": 4,
      "type": "mcq",
      "title": "Inéquation du second degré",
      "skill": "Résoudre une inéquation à l'aide d'une forme factorisée",
      "statement": "Résoudre dans $\\mathbb{R}$ l'inéquation $-2(x + 1)(x - 4) \\geqslant 0$.",
      "options": [
        "$S = [-1 ; 4]$",
        "$S = ]-\\infty ; -1] \\cup [4 ; +\\infty[$",
        "$S = ]-1 ; 4[$",
        "$S = [-4 ; 1]$"
      ],
      "correctIndex": 0,
      "answer": "$S = [-1 ; 4]$",
      "hint1": "Une expression $a(x - x_1)(x - x_2)$ a le signe de $a$ à l'extérieur des racines et le signe contraire entre elles.",
      "hint2": "Les racines sont $-1$ et $4$, et $a = -2$ est négatif.",
      "solution": "Comme $a = -2 < 0$, l'expression est négative à l'extérieur des racines $-1$ et $4$, et positive entre elles. L'inégalité est large : les racines sont incluses. Donc $S = [-1 ; 4]$."
    },
    {
      "id": "1T4-8",
      "tier": 4,
      "type": "mcq",
      "title": "Optimisation d'une aire",
      "skill": "Résoudre un problème d'optimisation",
      "statement": "Un éleveur dispose de $40$ m de grillage pour fermer un enclos rectangulaire adossé à un mur : le grillage forme deux côtés de largeur $x$ et un côté de longueur $40 - 2x$. L'aire est $A(x) = x(40 - 2x) = -2x(x - 20)$ pour $0 < x < 20$. Quelle est l'aire maximale de l'enclos ?",
      "options": [
        "$200$ m²",
        "$400$ m²",
        "$100$ m²",
        "$10$ m²"
      ],
      "correctIndex": 0,
      "answer": "$200$ m²",
      "hint1": "Pour $a < 0$, le maximum d'une fonction $a(x - x_1)(x - x_2)$ est atteint au milieu des racines.",
      "hint2": "Les racines de $A$ sont $0$ et $20$ : calcule l'abscisse du milieu puis son image par $A$.",
      "solution": "$\\alpha = \\frac{0 + 20}{2} = 10$ et $A(10) = 10 \\times (40 - 20) = 200$. Comme $a = -2 < 0$, c'est un maximum : l'aire maximale est $200$ m², pour un enclos de $10$ m sur $20$ m."
    }
  ],
  "1T5": [
    {
      "id": "1T5-1",
      "tier": 1,
      "type": "mcq",
      "title": "Dérivée d'un polynôme",
      "skill": "Calculer la dérivée d'un polynôme",
      "statement": "Quelle est la dérivée de $f(x) = x^3 - 4x^2 + 5$ ?",
      "options": [
        "$f'(x) = 3x^2 - 8x$",
        "$f'(x) = 3x^2 - 8x + 5$",
        "$f'(x) = 3x^2 - 4x$",
        "$f'(x) = x^2 - 8x$"
      ],
      "correctIndex": 0,
      "answer": "$f'(x) = 3x^2 - 8x$",
      "hint1": "On dérive terme à terme : $(x^3)' = 3x^2$, $(x^2)' = 2x$, on garde le coefficient multiplicatif devant chaque terme et un terme constant disparaît.",
      "hint2": "Le premier terme donne $3x^2$ et le deuxième donne $-4 \\times 2x$ ; il reste à traiter la constante $5$.",
      "solution": "$(x^3)' = 3x^2$, $(-4x^2)' = -4 \\times 2x = -8x$ et la dérivée de la constante $5$ est nulle. Donc $f'(x) = 3x^2 - 8x$."
    },
    {
      "id": "1T5-3",
      "tier": 1,
      "type": "mcq",
      "title": "Nombre dérivé lu sur une tangente",
      "skill": "Lire graphiquement un nombre dérivé",
      "statement": "La tangente à la courbe d'une fonction $f$ au point $A(2 ; 1)$ passe aussi par le point $B(4 ; 7)$. Que vaut $f'(2)$ ?",
      "options": [
        "$3$",
        "$\\frac{1}{3}$",
        "$1$",
        "$6$"
      ],
      "correctIndex": 0,
      "answer": "$3$",
      "hint1": "Le nombre dérivé en un point est le coefficient directeur de la tangente en ce point : différence des ordonnées divisée par la différence des abscisses de deux points de cette droite.",
      "hint2": "Entre $A$ et $B$ : $\\Delta y = 7 - 1$ et $\\Delta x = 4 - 2$.",
      "solution": "$f'(2)$ est le coefficient directeur de la tangente $(AB)$ : $f'(2) = \\frac{7 - 1}{4 - 2} = \\frac{6}{2} = 3$."
    },
    {
      "id": "1T5-2",
      "tier": 2,
      "type": "mcq",
      "title": "Équation de tangente",
      "skill": "Déterminer l'équation d'une tangente",
      "statement": "Soit $f(x) = x^2 + 1$. Quelle est l'équation de la tangente à sa courbe au point d'abscisse $1$ ?",
      "options": [
        "$y = 2x$",
        "$y = 2x + 2$",
        "$y = x + 1$",
        "$y = 2x - 1$"
      ],
      "correctIndex": 0,
      "answer": "$y = 2x$",
      "hint1": "Calcule l'image $f(a)$ et le nombre dérivé $f'(a)$, puis remplace-les dans $y = f'(a)(x - a) + f(a)$ et développe.",
      "hint2": "$f(1) = 1^2 + 1$ et $f'(x) = 2x$, donc $f'(1) = 2 \\times 1$ ; il reste à développer $f'(1)(x - 1) + f(1)$.",
      "solution": "$f(1) = 2$ et $f'(x) = 2x$, donc $f'(1) = 2$. La tangente a pour équation $y = 2(x - 1) + 2$, soit $y = 2x - 2 + 2 = 2x$."
    },
    {
      "id": "1T5-4",
      "tier": 2,
      "type": "mcq",
      "title": "Vitesse instantanée",
      "skill": "Interpréter un nombre dérivé comme une vitesse",
      "statement": "Un mobile a parcouru $d(t) = 2t^2 + 3t$ mètres au bout de $t$ secondes. Quelle est sa vitesse instantanée à l'instant $t = 4$ ?",
      "options": [
        "$19$ m/s",
        "$44$ m/s",
        "$11$ m/s",
        "$16$ m/s"
      ],
      "correctIndex": 0,
      "answer": "$19$ m/s",
      "hint1": "La vitesse instantanée à un instant donné est le nombre dérivé de la fonction distance à cet instant : on dérive $d$, puis on remplace $t$.",
      "hint2": "$d'(t) = 2 \\times 2t + 3 = 4t + 3$ ; remplace $t$ par $4$.",
      "solution": "$d'(t) = 4t + 3$, donc $d'(4) = 16 + 3 = 19$. La vitesse instantanée est $19$ m/s. (La valeur $44$ est la distance $d(4)$, et $11$ m/s est la vitesse moyenne $\\frac{44}{4}$ sur les $4$ premières secondes.)"
    },
    {
      "id": "1T5-5",
      "tier": 3,
      "type": "mcq",
      "title": "Intervalle de décroissance",
      "skill": "Déduire les variations du signe de la dérivée",
      "statement": "Soit $f(x) = x^2 - 6x + 2$ définie sur $\\mathbb{R}$. Sur quel intervalle $f$ est-elle décroissante ?",
      "options": [
        "$]-\\infty ; 3]$",
        "$[3 ; +\\infty[$",
        "$]-\\infty ; -3]$",
        "$]-\\infty ; 2]$"
      ],
      "correctIndex": 0,
      "answer": "$]-\\infty ; 3]$",
      "hint1": "Calcule la dérivée, puis cherche où elle est négative : une fonction est décroissante là où sa dérivée est négative.",
      "hint2": "$f'(x) = 2x - 6$ ; résous l'inéquation $2x - 6 \\le 0$.",
      "solution": "$f'(x) = 2x - 6$. On a $2x - 6 \\le 0 \\iff x \\le 3$. La dérivée est négative sur $]-\\infty ; 3]$ (nulle seulement en $3$), donc $f$ est décroissante sur $]-\\infty ; 3]$, puis croissante sur $[3 ; +\\infty[$."
    },
    {
      "id": "1T5-6",
      "tier": 3,
      "type": "mcq",
      "title": "Maximum local d'une fonction de degré 3",
      "skill": "Déterminer un extremum à l'aide du signe de la dérivée",
      "statement": "Soit $f(x) = x^3 - 12x + 5$ définie sur $\\mathbb{R}$. On admet que $f'(x) = 3(x - 2)(x + 2)$. Quelle est la valeur du maximum local de $f$ ?",
      "options": [
        "$21$",
        "$-11$",
        "$-2$",
        "$5$"
      ],
      "correctIndex": 0,
      "answer": "$21$",
      "hint1": "Dresse le tableau de signes de la dérivée factorisée : le maximum local est atteint là où $f'$ passe du signe $+$ au signe $-$ ; sa valeur est l'image de ce point.",
      "hint2": "Le produit $3(x - 2)(x + 2)$ est positif avant $-2$, négatif entre $-2$ et $2$, positif après $2$ ; calcule donc $f(-2) = (-2)^3 - 12 \\times (-2) + 5$.",
      "solution": "$f'$ est positive sur $]-\\infty ; -2[$, négative sur $]-2 ; 2[$, positive sur $]2 ; +\\infty[$. Le maximum local est atteint en $-2$ : $f(-2) = -8 + 24 + 5 = 21$. (En $2$, on a un minimum local $f(2) = 8 - 24 + 5 = -11$.)"
    },
    {
      "id": "1T5-7",
      "tier": 4,
      "type": "mcq",
      "title": "Bénéfice maximal",
      "skill": "Résoudre un problème d'optimisation",
      "statement": "Une entreprise fabrique $x$ centaines de pièces par jour, avec $x \\in [0 ; 15]$. Son bénéfice, en milliers d'euros, est $B(x) = -5x^2 + 80x - 120$. Quel est le bénéfice maximal ?",
      "options": [
        "$200$ milliers d'euros",
        "$8$ milliers d'euros",
        "$520$ milliers d'euros",
        "$-120$ milliers d'euros"
      ],
      "correctIndex": 0,
      "answer": "$200$ milliers d'euros",
      "hint1": "Dérive $B$, étudie le signe de $B'$ sur l'intervalle d'étude pour repérer où $B$ passe de croissante à décroissante, puis calcule l'image de ce point.",
      "hint2": "$B'(x) = -10x + 80$ s'annule pour $x = 8$ ; calcule $B(8) = -5 \\times 8^2 + 80 \\times 8 - 120$.",
      "solution": "$B'(x) = -10x + 80$, positive sur $[0 ; 8[$ et négative sur $]8 ; 15]$ : $B$ est croissante puis décroissante, donc maximale en $x = 8$. $B(8) = -320 + 640 - 120 = 200$. Le bénéfice maximal est de $200$ milliers d'euros, pour $800$ pièces par jour."
    },
    {
      "id": "1T5-8",
      "tier": 4,
      "type": "mcq",
      "title": "Boîte de volume maximal",
      "skill": "Optimiser un volume à l'aide de la dérivée",
      "statement": "Dans un carré de carton de $12$ cm de côté, on découpe aux quatre coins un carré de côté $x$ cm ($0 < x < 6$), puis on replie pour former une boîte sans couvercle de volume $V(x) = 4x^3 - 48x^2 + 144x$ (en cm³). On admet que $V'(x) = 12(x - 2)(x - 6)$. Pour quelle valeur de $x$ le volume est-il maximal, et que vaut-il ?",
      "options": [
        "$x = 2$ et $V = 128$ cm³",
        "$x = 6$ et $V = 0$ cm³",
        "$x = 2$ et $V = 64$ cm³",
        "$x = 3$ et $V = 108$ cm³"
      ],
      "correctIndex": 0,
      "answer": "$x = 2$ et $V = 128$ cm³",
      "hint1": "Étudie le signe de la dérivée factorisée sur l'intervalle imposé par la situation : le volume est maximal là où la dérivée passe du positif au négatif.",
      "hint2": "Sur $]0 ; 6[$, le facteur $x - 6$ est négatif ; le signe de $V'(x)$ dépend donc de $x - 2$. Calcule ensuite $V(2) = 4 \\times 2^3 - 48 \\times 2^2 + 144 \\times 2$.",
      "solution": "Sur $]0 ; 6[$, $x - 6 < 0$ : $V'(x) > 0$ pour $x < 2$ et $V'(x) < 0$ pour $2 < x < 6$. Le volume est maximal pour $x = 2$ : $V(2) = 32 - 192 + 288 = 128$ cm³ (boîte de base $8 \\times 8$ et de hauteur $2$)."
    }
  ],
  "1T6": [
    {
      "id": "1T6-1",
      "tier": 1,
      "type": "mcq",
      "title": "Fréquence marginale",
      "skill": "Calculer une fréquence marginale",
      "statement": "Sur $400$ personnes interrogées, $140$ préfèrent le train. Quelle est la fréquence de ce choix ?",
      "options": [
        "$0{,}35$",
        "$0{,}14$",
        "$0{,}4$",
        "$0{,}26$"
      ],
      "correctIndex": 0,
      "answer": "$0{,}35$",
      "hint1": "Une fréquence marginale se calcule en divisant l'effectif concerné par l'effectif total de la population interrogée.",
      "hint2": "Calcule $\\frac{140}{400}$ en simplifiant d'abord par $20$.",
      "solution": "$\\frac{140}{400} = \\frac{7}{20} = 0{,}35$ : $35\\,\\%$ des personnes interrogées préfèrent le train."
    },
    {
      "id": "1T6-3",
      "tier": 1,
      "type": "mcq",
      "title": "Point moyen d'un nuage",
      "skill": "Calculer les coordonnées du point moyen",
      "statement": "On donne la série à deux variables : $x$ : $2$, $4$, $6$, $8$ et $y$ : $10$, $13$, $15$, $22$. Quel est le point moyen $G$ du nuage ?",
      "options": [
        "$G(5 ; 15)$",
        "$G(20 ; 60)$",
        "$G(15 ; 5)$",
        "$G(5 ; 13)$"
      ],
      "correctIndex": 0,
      "answer": "$G(5 ; 15)$",
      "hint1": "L'abscisse du point moyen est la moyenne des valeurs de $x$, son ordonnée la moyenne des valeurs de $y$.",
      "hint2": "Somme des $x_i$ : $2 + 4 + 6 + 8 = 20$ ; somme des $y_i$ : $10 + 13 + 15 + 22$. Divise chaque somme par le nombre de points.",
      "solution": "$\\bar{x} = \\frac{20}{4} = 5$ et $\\bar{y} = \\frac{60}{4} = 15$, donc $G(5 ; 15)$. (Attention : $20$ et $60$ sont les sommes, qu'il faut encore diviser par le nombre de points.)"
    },
    {
      "id": "1T6-2",
      "tier": 2,
      "type": "mcq",
      "title": "Prévision par ajustement",
      "skill": "Utiliser un ajustement affine",
      "statement": "Une droite d'ajustement d'une série est $y = 1{,}5x + 12$. Quelle valeur de $y$ prévoit-elle pour $x = 10$ ?",
      "options": [
        "$27$",
        "$22$",
        "$13{,}5$",
        "$150$"
      ],
      "correctIndex": 0,
      "answer": "$27$",
      "hint1": "Pour faire une prévision avec une droite d'ajustement, on remplace $x$ par la valeur donnée dans son équation.",
      "hint2": "$1{,}5 \\times 10 = 15$ ; il reste à ajouter l'ordonnée à l'origine.",
      "solution": "$y = 1{,}5 \\times 10 + 12 = 15 + 12 = 27$."
    },
    {
      "id": "1T6-4",
      "tier": 2,
      "type": "mcq",
      "title": "Droite d'ajustement passant par G",
      "skill": "Déterminer une droite d'ajustement passant par le point moyen",
      "statement": "Une droite d'ajustement de coefficient directeur $2$ passe par le point moyen $G(4 ; 15)$ du nuage. Quelle est son équation ?",
      "options": [
        "$y = 2x + 7$",
        "$y = 2x + 15$",
        "$y = 2x - 7$",
        "$y = 2x + 11$"
      ],
      "correctIndex": 0,
      "answer": "$y = 2x + 7$",
      "hint1": "La droite $y = ax + b$ passe par $G$ : les coordonnées de $G$ vérifient l'équation, ce qui donne $b = \\bar{y} - a\\bar{x}$.",
      "hint2": "Remplace dans $15 = 2 \\times 4 + b$ et isole $b$.",
      "solution": "$15 = 2 \\times 4 + b$, soit $15 = 8 + b$, donc $b = 7$. La droite d'ajustement a pour équation $y = 2x + 7$."
    },
    {
      "id": "1T6-5",
      "tier": 3,
      "type": "mcq",
      "title": "Année de dépassement d'un seuil",
      "skill": "Résoudre une inéquation à l'aide d'un ajustement",
      "statement": "Un ajustement du nombre d'abonnés $y$ (en milliers) d'un service en fonction du rang $x$ de l'année ($x = 0$ en 2020) est $y = 3{,}2x + 18$. En quelle année le nombre d'abonnés dépassera-t-il $60$ milliers pour la première fois, si la tendance se maintient ?",
      "options": [
        "2034",
        "2033",
        "2014",
        "2039"
      ],
      "correctIndex": 0,
      "answer": "2034",
      "hint1": "Écris l'inéquation « valeur de l'ajustement > seuil », résous-la, prends le premier rang entier qui convient puis convertis ce rang en année.",
      "hint2": "$3{,}2x + 18 > 60 \\iff 3{,}2x > 42$ ; divise par $3{,}2$.",
      "solution": "$3{,}2x > 42 \\iff x > \\frac{42}{3{,}2} = 13{,}125$. Le premier rang entier est $x = 14$, soit l'année $2020 + 14 = 2034$. (Au rang $13$ : $3{,}2 \\times 13 + 18 = 59{,}6 < 60$.)"
    },
    {
      "id": "1T6-6",
      "tier": 3,
      "type": "mcq",
      "title": "Donnée manquante",
      "skill": "Utiliser le point moyen pour retrouver une donnée",
      "statement": "On donne $x$ : $1$, $2$, $3$, $4$, $5$ et $y$ : $12$, $15$, $y_3$, $21$, $25$. Le point moyen du nuage est $G(3 ; 18)$. Que vaut $y_3$ ?",
      "options": [
        "$17$",
        "$18$",
        "$19$",
        "$90$"
      ],
      "correctIndex": 0,
      "answer": "$17$",
      "hint1": "Si la moyenne de $n$ valeurs est connue, leur somme vaut $n$ fois cette moyenne ; on retire ensuite la somme des valeurs connues.",
      "hint2": "La somme des cinq $y_i$ vaut $5 \\times 18 = 90$ ; calcule $12 + 15 + 21 + 25$.",
      "solution": "La somme des $y_i$ vaut $5 \\times 18 = 90$ et $12 + 15 + 21 + 25 = 73$, donc $y_3 = 90 - 73 = 17$."
    },
    {
      "id": "1T6-7",
      "tier": 4,
      "type": "mcq",
      "title": "Ajustement au jugé et prévision",
      "skill": "Construire un ajustement par deux points et extrapoler",
      "statement": "Le stock $y$ (en tonnes) d'un entrepôt au mois de rang $x$ est ajusté par la droite passant par $A(1 ; 40)$ et $B(5 ; 28)$. Quel stock cet ajustement prévoit-il au mois de rang $9$ ?",
      "options": [
        "$16$ tonnes",
        "$64$ tonnes",
        "$19$ tonnes",
        "$4$ tonnes"
      ],
      "correctIndex": 0,
      "answer": "$16$ tonnes",
      "hint1": "Calcule le coefficient directeur à partir des deux points, déduis l'ordonnée à l'origine avec l'un d'eux, puis remplace $x$ par le rang voulu.",
      "hint2": "$a = \\frac{28 - 40}{5 - 1}$ ; ensuite $b = 40 - a \\times 1$.",
      "solution": "$a = \\frac{-12}{4} = -3$ et $b = 40 - (-3) \\times 1 = 43$ : $y = -3x + 43$. Au rang $9$ : $y = -27 + 43 = 16$ tonnes. C'est une extrapolation (rang $9$ hors de la plage $1$ à $5$) : on suppose que la baisse reste régulière."
    },
    {
      "id": "1T6-8",
      "tier": 4,
      "type": "mcq",
      "title": "Croisement de deux ajustements",
      "skill": "Comparer deux ajustements affines",
      "statement": "Les ventes mensuelles de deux magasins sont ajustées par $y = 4x + 30$ (magasin A) et $y = 7x + 12$ (magasin B), où $x$ est le rang du mois. À partir de quel rang entier les ventes de B dépassent-elles celles de A ?",
      "options": [
        "Rang $7$",
        "Rang $6$",
        "Rang $3$",
        "Rang $14$"
      ],
      "correctIndex": 0,
      "answer": "Rang $7$",
      "hint1": "Écris l'inéquation « ajustement de B > ajustement de A », regroupe les termes en $x$ d'un côté et les constantes de l'autre, puis prends le premier entier qui convient.",
      "hint2": "$7x + 12 > 4x + 30 \\iff 7x - 4x > 30 - 12$.",
      "solution": "$7x + 12 > 4x + 30 \\iff 3x > 18 \\iff x > 6$. Au rang $6$, les deux ajustements donnent la même valeur ($54$) ; les ventes de B dépassent donc celles de A à partir du rang $7$ ($61 > 58$)."
    }
  ],
  "1T7": [
    {
      "id": "1T7-1",
      "tier": 1,
      "type": "mcq",
      "title": "Espérance",
      "skill": "Calculer une espérance",
      "statement": "Une variable aléatoire $X$ prend la valeur $4$ avec probabilité $0{,}25$ et la valeur $0$ sinon. Que vaut $E(X)$ ?",
      "options": [
        "$1$",
        "$2$",
        "$0{,}25$",
        "$4$"
      ],
      "correctIndex": 0,
      "answer": "$1$",
      "hint1": "L'espérance est la somme des produits « valeur prise × probabilité de cette valeur », sur toutes les valeurs de la loi.",
      "hint2": "La valeur $0$ a pour probabilité $1 - 0{,}25 = 0{,}75$ ; calcule $4 \\times 0{,}25 + 0 \\times 0{,}75$.",
      "solution": "$E(X) = 4 \\times 0{,}25 + 0 \\times 0{,}75 = 1 + 0 = 1$."
    },
    {
      "id": "1T7-3",
      "tier": 1,
      "type": "mcq",
      "title": "Probabilité conditionnelle dans un tableau",
      "skill": "Calculer une probabilité conditionnelle à partir d'effectifs",
      "statement": "Dans un lycée de $500$ élèves, $200$ sont internes et, parmi les internes, $50$ pratiquent un sport en club. On choisit un élève au hasard parmi les internes. Quelle est la probabilité qu'il pratique un sport en club ?",
      "options": [
        "$0{,}25$",
        "$0{,}1$",
        "$0{,}4$",
        "$0{,}5$"
      ],
      "correctIndex": 0,
      "answer": "$0{,}25$",
      "hint1": "Sachant que l'élève appartient à un groupe, on divise l'effectif de l'intersection par l'effectif de ce groupe, et non par l'effectif total.",
      "hint2": "Ici le groupe de référence compte $200$ élèves : calcule $\\frac{50}{200}$.",
      "solution": "En notant $I$ « interne » et $S$ « sport en club », $P_I(S) = \\frac{50}{200} = \\frac{1}{4} = 0{,}25$. (La valeur $0{,}1$ correspond à $\\frac{50}{500} = P(I \\cap S)$.)"
    },
    {
      "id": "1T7-2",
      "tier": 2,
      "type": "mcq",
      "title": "Probabilité conditionnelle",
      "skill": "Calculer une probabilité conditionnelle",
      "statement": "On sait que $P(A) = 0{,}5$ et $P(A \\cap B) = 0{,}2$. Que vaut $P_A(B)$ ?",
      "options": [
        "$0{,}4$",
        "$0{,}1$",
        "$0{,}7$",
        "$2{,}5$"
      ],
      "correctIndex": 0,
      "answer": "$0{,}4$",
      "hint1": "La probabilité de $B$ sachant $A$ est le quotient de la probabilité de l'intersection par la probabilité de l'événement de référence.",
      "hint2": "$P_A(B) = \\frac{P(A \\cap B)}{P(A)} = \\frac{0{,}2}{0{,}5}$.",
      "solution": "$P_A(B) = \\frac{0{,}2}{0{,}5} = \\frac{2}{5} = 0{,}4$."
    },
    {
      "id": "1T7-4",
      "tier": 2,
      "type": "mcq",
      "title": "Probabilités totales",
      "skill": "Utiliser la formule des probabilités totales",
      "statement": "On sait que $P(A) = 0{,}6$, $P_A(B) = 0{,}5$ et $P_{\\bar{A}}(B) = 0{,}2$. Que vaut $P(B)$ ?",
      "options": [
        "$0{,}38$",
        "$0{,}7$",
        "$0{,}3$",
        "$0{,}1$"
      ],
      "correctIndex": 0,
      "answer": "$0{,}38$",
      "hint1": "Dessine l'arbre pondéré : $B$ est atteint par deux chemins ; on multiplie les probabilités le long de chaque chemin, puis on additionne.",
      "hint2": "$P(\\bar{A}) = 1 - 0{,}6 = 0{,}4$ ; les deux chemins donnent $0{,}6 \\times 0{,}5$ et $0{,}4 \\times 0{,}2$.",
      "solution": "$P(B) = P(A) P_A(B) + P(\\bar{A}) P_{\\bar{A}}(B) = 0{,}6 \\times 0{,}5 + 0{,}4 \\times 0{,}2 = 0{,}3 + 0{,}08 = 0{,}38$."
    },
    {
      "id": "1T7-5",
      "tier": 3,
      "type": "mcq",
      "title": "Exactement deux succès sur trois",
      "skill": "Calculer une probabilité dans une répétition d'épreuves de Bernoulli",
      "statement": "Un joueur réussit un tir avec probabilité $0{,}7$. Il effectue $3$ tirs, de façon indépendante. Quelle est la probabilité qu'il en réussisse exactement $2$ ?",
      "options": [
        "$0{,}441$",
        "$0{,}147$",
        "$0{,}343$",
        "$0{,}49$"
      ],
      "correctIndex": 0,
      "answer": "$0{,}441$",
      "hint1": "Dans l'arbre des trois épreuves, repère tous les chemins comportant le nombre de succès voulu : ils ont tous la même probabilité, produit des probabilités des branches.",
      "hint2": "Trois chemins conviennent (RRÉ, RÉR, ÉRR), chacun de probabilité $0{,}7^2 \\times 0{,}3$.",
      "solution": "Chaque chemin à deux réussites a pour probabilité $0{,}7 \\times 0{,}7 \\times 0{,}3 = 0{,}147$. Il y en a $3$, donc la probabilité cherchée vaut $3 \\times 0{,}147 = 0{,}441$."
    },
    {
      "id": "1T7-6",
      "tier": 3,
      "type": "mcq",
      "title": "Mise équitable",
      "skill": "Utiliser l'espérance pour rendre un jeu équitable",
      "statement": "Pour jouer, on paie une mise de $m$ euros. On gagne alors $20$ € avec probabilité $0{,}1$, $5$ € avec probabilité $0{,}3$, et rien sinon. Pour quelle mise $m$ le jeu est-il équitable ?",
      "options": [
        "$3{,}5$ €",
        "$25$ €",
        "$12{,}5$ €",
        "$0$ €"
      ],
      "correctIndex": 0,
      "answer": "$3{,}5$ €",
      "hint1": "Le jeu est équitable lorsque l'espérance du gain algébrique (somme gagnée moins mise) est nulle, c'est-à-dire lorsque la mise est égale à l'espérance de la somme gagnée.",
      "hint2": "Espérance de la somme gagnée : $20 \\times 0{,}1 + 5 \\times 0{,}3 + 0 \\times 0{,}6$.",
      "solution": "La somme gagnée a pour espérance $20 \\times 0{,}1 + 5 \\times 0{,}3 + 0 = 2 + 1{,}5 = 3{,}5$ €. Le gain algébrique a pour espérance $3{,}5 - m$, nulle pour $m = 3{,}5$ €."
    },
    {
      "id": "1T7-7",
      "tier": 4,
      "type": "mcq",
      "title": "Origine d'une pièce défectueuse",
      "skill": "Inverser un conditionnement à l'aide des probabilités totales",
      "statement": "Une usine produit $30\\,\\%$ de ses pièces sur la machine $A$ et le reste sur la machine $B$. Une pièce de $A$ est défectueuse avec probabilité $0{,}05$, une pièce de $B$ avec probabilité $0{,}02$. On prélève une pièce au hasard : elle est défectueuse. Quelle est la probabilité qu'elle provienne de $A$ ?",
      "options": [
        "$\\frac{15}{29}$",
        "$\\frac{14}{29}$",
        "$0{,}05$",
        "$0{,}015$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{15}{29}$",
      "hint1": "Construis l'arbre (machine, puis état de la pièce), calcule la probabilité qu'une pièce soit défectueuse par les probabilités totales, puis divise la probabilité du chemin passant par $A$ par ce total.",
      "hint2": "$P(A \\cap D) = 0{,}3 \\times 0{,}05 = 0{,}015$ et $P(\\bar{A} \\cap D) = 0{,}7 \\times 0{,}02 = 0{,}014$.",
      "solution": "$P(D) = 0{,}015 + 0{,}014 = 0{,}029$, donc $P_D(A) = \\frac{P(A \\cap D)}{P(D)} = \\frac{0{,}015}{0{,}029} = \\frac{15}{29} \\approx 0{,}52$. Une pièce défectueuse provient un peu plus souvent de $A$, alors que $A$ ne produit que $30\\,\\%$ des pièces."
    },
    {
      "id": "1T7-8",
      "tier": 4,
      "type": "mcq",
      "title": "Taille d'échantillon et dispersion",
      "skill": "Relier la taille d'un échantillon à la fluctuation",
      "statement": "On simule $1\\,000$ échantillons de taille $n = 100$ d'une épreuve de Bernoulli de paramètre $p = 0{,}5$ : l'écart type des fréquences observées vaut $s \\approx 0{,}05$. On admet que $s$ est de l'ordre de $\\frac{1}{\\sqrt{n}}$. Quelle taille d'échantillon faut-il choisir pour diviser cette dispersion par $2$ ?",
      "options": [
        "$400$",
        "$200$",
        "$50$",
        "$10\\,000$"
      ],
      "correctIndex": 0,
      "answer": "$400$",
      "hint1": "Si l'écart type est proportionnel à l'inverse de la racine carrée de la taille, diviser l'écart type par un nombre $k$ demande de multiplier la taille par $k^2$.",
      "hint2": "Ici on veut diviser par $2$ : la taille $100$ doit être multipliée par $2^2$.",
      "solution": "$\\frac{1}{\\sqrt{4n}} = \\frac{1}{2} \\times \\frac{1}{\\sqrt{n}}$ : il faut multiplier $n$ par $4$, soit $n = 400$ (on aurait alors $s \\approx 0{,}025$). Doubler la taille ($200$) ne divise l'écart type que par $\\sqrt{2} \\approx 1{,}41$."
    }
  ]
};

window.MATHS_WORKSHEETS_1TECHNO = {};

// Fusion automatique dans les registres globaux
if (!window.MATHS_COURSES) window.MATHS_COURSES = {};
if (!window.MATHS_EXERCISES) window.MATHS_EXERCISES = {};
if (!window.MATHS_WORKSHEETS) window.MATHS_WORKSHEETS = {};

Object.assign(window.MATHS_COURSES, window.MATHS_COURSES_1TECHNO);
Object.assign(window.MATHS_EXERCISES, window.MATHS_EXERCISES_1TECHNO);
Object.assign(window.MATHS_WORKSHEETS, window.MATHS_WORKSHEETS_1TECHNO);
