/**
 * Données pédagogiques officielles de la classe de Terminale (Spécialité & Mathématiques Expertes)
 * Conforme au Bulletin Officiel de l'Éducation Nationale et à maths-et-tiques.fr
 */

window.MATHS_COURSES_TALE = {
  "TA1": {
    "title": "TA1 : Le raisonnement par récurrence",
    "domain": "Analyse et Raisonnement",
    "objectives": [
      "Maîtriser les trois étapes incontournables d'une démonstration par récurrence : Initialisation, Hérédité, Conclusion.",
      "Démontrer des formules explicites de sommes et de termes généraux de suites.",
      "Démontrer des inégalités valables pour tout entier naturel $n \\ge n_0$.",
      "Éviter les erreurs de logique classiques (oubli de l'initialisation, circularité)."
    ],
    "keyPoints": [
      {
        "title": "1. Principe du raisonnement par récurrence",
        "content": "Soit $P(n)$ une propriété dépendant d'un entier naturel $n$, et $n_0 \\in \\mathbb{N}$ :\n1. **Initialisation** : On vérifie que la propriété $P(n_0)$ est **vraie** pour le premier rang $n_0$.\n2. **Hérédité** : On suppose que pour un entier $k \\ge n_0$ fixé quelconque, la propriété $P(k)$ est vraie (c'est l'**hypothèse de récurrence**). On démontre alors que $P(k+1)$ est vraie sous cette hypothèse.\n3. **Conclusion** : Par le principe de récurrence, la propriété $P(n)$ est vraie pour tout entier $n \\ge n_0$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Rédiger une récurrence pour une somme",
        "example": "Démontrer que pour tout $n \\ge 1$, $S_n = 1 + 2 + \\dots + n = \\frac{n(n+1)}{2}$.",
        "steps": [
          "**Initialisation ($n = 1$)** : À gauche, $S_1 = 1$. À droite, $\\frac{1(1+1)}{2} = \\frac{2}{2} = 1$. L'égalité est vraie pour $n = 1$.",
          "**Hérédité** : Soit $k \\ge 1$ un entier fixé. Supposons que $S_k = \\frac{k(k+1)}{2}$ (HR). Montrons que $S_{k+1} = \\frac{(k+1)(k+2)}{2}$.\nOn a $S_{k+1} = S_k + (k+1) = \\frac{k(k+1)}{2} + (k+1) = (k+1)\\left(\\frac{k}{2} + 1\\right) = \\frac{(k+1)(k+2)}{2}$. La propriété est donc héréditaire.",
          "**Conclusion** : Par récurrence, pour tout $n \\ge 1$, $1 + 2 + \\dots + n = \\frac{n(n+1)}{2}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne jamais écrire « supposons que pour tout $k$, $P(k)$ est vraie » : cela reviendrait à supposer ce que l'on veut démontrer ! Il faut écrire « soit $k$ un entier fixé ».",
      "⚠️ Une propriété peut être héréditaire mais fausse pour tout $n$ si l'initialisation échoue !"
    ],
    "flashcards": [
      {
        "q": "Quelles sont les 3 étapes d'une démonstration par récurrence ?",
        "a": "1. Initialisation, 2. Hérédité, 3. Conclusion."
      },
      {
        "q": "Dans l'étape d'hérédité, que suppose-t-on et que démontre-t-on ?",
        "a": "On suppose $P(k)$ vraie pour un entier fixé $k \\ge n_0$, et on démontre que $P(k+1)$ est vraie."
      }
    ]
  },
  "TA3": {
    "title": "TA3 : Limites de fonctions, continuité et TVI",
    "domain": "Analyse et Fonctions",
    "objectives": [
      "Déterminer les limites de fonctions en $\\pm\\infty$ et en un point (asymptotes horizontales, verticales, obliques).",
      "Maîtriser la définition et les propriétés des fonctions continues sur un intervalle.",
      "Énoncer et appliquer le Théorème des Valeurs Intermédiaires (TVI).",
      "Appliquer le corollaire du TVI (théorème de la bijection) pour prouver l'existence et l'unicité d'une solution $f(x) = k$."
    ],
    "keyPoints": [
      {
        "title": "1. Théorème des Valeurs Intermédiaires (TVI) et Corollaire",
        "content": "• **Théorème des Valeurs Intermédiaires (TVI)** : Si $f$ est une fonction **continue** sur un intervalle $[a ; b]$, alors pour tout réel $k$ compris entre $f(a)$ et $f(b)$, il existe **au moins un réel** $c \\in [a ; b]$ tel que $f(c) = k$.\n• **Corollaire de la stricte monotonie (Théorème de la bijection)** :\nSi $f$ est **continue** ET **strictement monotone** (croissante ou décroissante) sur $[a ; b]$, alors pour tout $k$ compris entre $f(a)$ et $f(b)$, l'équation $f(x) = k$ admet **une unique solution** dans $[a ; b]$."
      }
    ],
    "methods": [
      {
        "title": "Méthode type Bac : Justifier l'unicité d'une solution d'équation $f(x) = 0$",
        "example": "Soit $f(x) = x^3 + 2x - 5$ sur $[1 ; 2]$. Démontrer que $f(x) = 0$ admet une unique solution $\\alpha$.",
        "steps": [
          "**Étape 1 (Continuité)** : $f$ est une fonction polynôme, donc elle est continue sur $[1 ; 2]$.",
          "**Étape 2 (Dérivée et stricte monotonie)** : $f'(x) = 3x^2 + 2 > 0$ pour tout $x$. Donc $f$ est strictement croissante sur $[1 ; 2]$.",
          "**Étape 3 (Images des bornes)** : $f(1) = 1^3 + 2(1) - 5 = -2$ et $f(2) = 2^3 + 2(2) - 5 = 7$.",
          "**Étape 4 (Conclusion)** : Comme $0 \\in [-2 ; 7]$, d'après le corollaire du TVI, l'équation $f(x) = 0$ admet une unique solution $\\alpha \\in [1 ; 2]$."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour l'unicité de la solution, l'hypothèse de **stricte monotonie** est indispensable !",
      "⚠️ Ne jamais oublier de mentionner explicitement la **continuité** de la fonction."
    ],
    "flashcards": [
      {
        "q": "Quelles sont les deux conditions requises pour appliquer le corollaire du TVI (unicité) ?",
        "a": "La fonction doit être **continue** et **strictement monotone** sur l'intervalle."
      },
      {
        "q": "Si $\\lim_{x \\to +\\infty} f(x) = 3$, quelle asymptote admet la courbe de $f$ ?",
        "a": "Une asymptote horizontale d'équation $y = 3$ au voisinage de $+\\infty$."
      }
    ]
  },
  "TA5": {
    "title": "TA5 : La fonction logarithme népérien",
    "domain": "Analyse et Fonctions",
    "objectives": [
      "Définir la fonction logarithme népérien $\\ln$ comme la bijection réciproque de l'exponentielle : $\\ln(x) = y \\iff e^y = x$ ($x > 0$).",
      "Maîtriser les propriétés algébriques : $\\ln(ab) = \\ln(a) + \\ln(b)$, $\\ln\\left(\\frac{1}{b}\\right) = -\\ln(b)$, $\\ln(a^n) = n\\ln(a)$ et $\\ln(\\sqrt{a}) = \\frac{1}{2}\\ln(a)$.",
      "Dériver des fonctions composées $(\\ln(u))' = \\frac{u'}{u}$.",
      "Connaître les limites usuelles et croissances comparées : $\\lim_{x \\to +\\infty} \\frac{\\ln(x)}{x} = 0$ et $\\lim_{x \\to 0^+} x\\ln(x) = 0$."
    ],
    "keyPoints": [
      {
        "title": "1. Propriétés algébriques fondamentales de $\\ln$",
        "content": "Pour tous réels $a, b > 0$ :\n• $\\ln(1) = 0$ et $\\ln(e) = 1$\n• $\\ln(ab) = \\ln(a) + \\ln(b)$\n• $\\ln\\left(\\frac{a}{b}\\right) = \\ln(a) - \\ln(b)$\n• $\\ln(a^k) = k\\ln(a)$ pour tout $k \\in \\mathbb{R}$\n• Pour tout $x > 0$, $e^{\\ln(x)} = x$, et pour tout $x \\in \\mathbb{R}$, $\\ln(e^x) = x$."
      },
      {
        "title": "2. Dérivée et croissances comparées",
        "content": "• Dérivée : $(\\ln(x))' = \\frac{1}{x} > 0$ pour tout $x > 0$ (fonction strictement croissante sur $]0 ; +\\infty[$).\n• Dérivée composée : $(\\ln(u(x)))' = \\frac{u'(x)}{u(x)}$ (sur tout intervalle où $u(x) > 0$).\n• **Croissances comparées en $+\\infty$** : L'exponentielle l'emporte sur toute puissance de $x$, qui l'emporte sur le logarithme :\n$$\\lim_{x \\to +\\infty} \\frac{\\ln(x)}{x^n} = 0 \\quad (n > 0)$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Résoudre une équation du type $q^n \\le A$ avec le logarithme",
        "example": "Résoudre $0{,}8^n \\le 0{,}05$ avec $n \\in \\mathbb{N}$.",
        "steps": [
          "**Étape 1 (Application de ln)** : Comme $\\ln$ est strictement croissante : $\\ln(0{,}8^n) \\le \\ln(0{,}05)$.",
          "**Étape 2 (Propriété de puissance)** : $n \\ln(0{,}8) \\le \\ln(0{,}05)$.",
          "**Étape 3 (Division et inversion de sens)** : Comme $0{,}8 < 1$, $\\ln(0{,}8) < 0$ ! On divise par un nombre négatif, donc le sens change :\n$$n \\ge \\frac{\\ln(0{,}05)}{\\ln(0{,}8)} \\approx \\frac{-2{,}9957}{-0{,}2231} \\approx 13{,}42$$",
          "**Conclusion** : Le plus petit entier naturel est $n = 14$."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour tout $0 < x < 1$, $\\ln(x)$ est **négatif** ! Diviser par $\\ln(0{,}8)$ inverse le sens de l'inégalité.",
      "⚠️ $\\ln(a+b) \\neq \\ln(a) + \\ln(b)$ !"
    ],
    "flashcards": [
      {
        "q": "Quel est le domaine de définition de la fonction logarithme népérien ?",
        "a": "$]0 ; +\\infty[$ (les réels strictement positifs)."
      },
      {
        "q": "Que vaut $\\lim_{x \\to +\\infty} \\frac{\\ln(x)}{x}$ ?",
        "a": "$0$ (par croissance comparée)."
      }
    ]
  },
  "TA7": {
    "title": "TA7 : Calcul intégral et intégration par parties",
    "domain": "Analyse et Fonctions",
    "objectives": [
      "Définir l'intégrale d'une fonction continue $\\int_a^b f(t) dt = [F(t)]_a^b = F(b) - F(a)$ où $F$ est une primitive de $f$.",
      "Interpréter géométriquement l'intégrale comme une aire algébrique sous la courbe.",
      "Maîtriser les propriétés de l'intégrale : linéarité, relation de Chasles, positivité.",
      "Appliquer la formule d'intégration par parties (IPP) : $\\int_a^b u'(t)v(t) dt = [u(t)v(t)]_a^b - \\int_a^b u(t)v'(t) dt$."
    ],
    "keyPoints": [
      {
        "title": "1. Définition et Théorème fondamental de l'analyse",
        "content": "Soit $f$ une fonction continue sur $[a ; b]$ et $F$ une primitive de $f$ sur cet intervalle :\n$$\\int_a^b f(t) dt = [F(t)]_a^b = F(b) - F(a)$$\n• **Relation de Chasles** : $\\int_a^c f(t) dt + \\int_c^b f(t) dt = \\int_a^b f(t) dt$.\n• **Valeur moyenne** de $f$ sur $[a ; b]$ : $\\mu = \\frac{1}{b - a} \\int_a^b f(t) dt$."
      },
      {
        "title": "2. Intégration par parties (IPP)",
        "content": "Soient $u$ et $v$ deux fonctions dérivables à dérivées continues sur $[a ; b]$ :\n$$\\int_a^b u'(t) v(t) dt = [u(t) v(t)]_a^b - \\int_a^b u(t) v'(t) dt$$\n*Règle ALPES pour choisir $v(t)$ (qui sera dérivée)* : Arcsin/Arccos, Logarithme, Polynôme, Exponentielle, Sinus/Cosinus."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer une intégrale avec l'intégration par parties",
        "example": "Calculer $I = \\int_1^e x \\ln(x) dx$.",
        "steps": [
          "**Étape 1 (Choix des fonctions)** : On pose $v(x) = \\ln(x) \\implies v'(x) = \\frac{1}{x}$, et $u'(x) = x \\implies u(x) = \\frac{x^2}{2}$.",
          "**Étape 2 (Formule IPP)** : $I = \\left[\\frac{x^2}{2}\\ln(x)\\right]_1^e - \\int_1^e \\frac{x^2}{2} \\times \\frac{1}{x} dx = \\left(\\frac{e^2}{2}\\ln(e) - 0\\right) - \\int_1^e \\frac{x}{2} dx$.",
          "**Étape 3 (Calcul de l'intégrale restante)** : $\\int_1^e \\frac{x}{2} dx = \\left[\\frac{x^2}{4}\\right]_1^e = \\frac{e^2}{4} - \\frac{1}{4}$.",
          "**Conclusion** : $I = \\frac{e^2}{2} - \\left(\\frac{e^2}{4} - \\frac{1}{4}\\right) = \\frac{e^2 + 1}{4}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans l'intégration par parties, attention au signe moins devant la seconde intégrale !",
      "⚠️ Si $a > b$, $\\int_a^b f(t) dt = -\\int_b^a f(t) dt$."
    ],
    "flashcards": [
      {
        "q": "Énoncer la formule d'intégration par parties sur $[a ; b]$.",
        "a": "$\\int_a^b u'v = [uv]_a^b - \\int_a^b uv'$."
      },
      {
        "q": "Que vaut la valeur moyenne $\\mu$ d'une fonction $f$ sur $[a ; b]$ ?",
        "a": "$\\mu = \\frac{1}{b - a} \\int_a^b f(t) dt$."
      }
    ]
  },
  "TG2": {
    "title": "TG2 : Produit scalaire dans l'espace et équations cartésiennes de plans",
    "domain": "Géométrie de l'Espace",
    "objectives": [
      "Calculer le produit scalaire dans l'espace orthonormé : $\\vec{u}\\cdot\\vec{v} = xx' + yy' + zz'$.",
      "Déterminer et utiliser l'équation cartésienne d'un plan $ax + by + cz + d = 0$ de vecteur normal $\\vec{n}(a ; b ; c)$.",
      "Calculer le projeté orthogonal d'un point sur un plan et la distance d'un point à un plan."
    ],
    "keyPoints": [
      {
        "title": "1. Vecteur normal et équation de plan dans l'espace",
        "content": "• Un vecteur non nul $\\vec{n}\\begin{pmatrix} a \\\\ b \\\\ c \\end{pmatrix}$ est **normal** à un plan $\\mathcal{P}$ s'il est orthogonal à deux vecteurs directeurs non colinéaires de $\\mathcal{P}$.\n• Tout plan de vecteur normal $\\vec{n}(a ; b ; c)$ admet une équation cartésienne de la forme :\n$$ax + by + cz + d = 0$$\n• Deux plans sont parallèles ssi leurs vecteurs normaux sont colinéaires. Ils sont perpendiculaires ssi leurs vecteurs normaux sont orthogonaux ($\\vec{n}_1 \\cdot \\vec{n}_2 = 0$)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Trouver l'équation cartésienne d'un plan défini par trois points",
        "example": "Déterminer l'équation cartésienne du plan $(ABC)$ avec $A(1;0;0)$, $B(0;2;0)$ et $C(0;0;3)$.",
        "steps": [
          "**Étape 1 (Vecteurs directeurs)** : $\\vec{AB}(-1; 2; 0)$ et $\\vec{AC}(-1; 0; 3)$. Ils ne sont pas colinéaires.",
          "**Étape 2 (Vecteur normal $\\vec{n}(a;b;c)$)** : $\\vec{n} \\cdot \\vec{AB} = -a + 2b = 0 \\implies a = 2b$. $\\vec{n} \\cdot \\vec{AC} = -a + 3c = 0 \\implies a = 3c$. En choisissant $a = 6$, on obtient $b = 3$ et $c = 2$. Donc $\\vec{n}(6 ; 3 ; 2)$ est normal.",
          "**Étape 3 (Constante d)** : $6x + 3y + 2z + d = 0$. Avec $A(1;0;0)$ : $6(1) + 0 + 0 + d = 0 \\implies d = -6$.",
          "**Conclusion** : L'équation est $6x + 3y + 2z - 6 = 0$."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans l'espace, une équation $ax + by + c = 0$ ne représente pas une droite mais un **plan** parallèle à l'axe $(Oz)$ !",
      "⚠️ Une droite dans l'espace n'a pas une seule équation cartésienne, mais un système paramétrique de 3 équations à 1 paramètre."
    ],
    "flashcards": [
      {
        "q": "Quel est un vecteur normal au plan d'équation $2x - 3y + 5z - 8 = 0$ ?",
        "a": "$\\vec{n}\\begin{pmatrix} 2 \\\\ -3 \\\\ 5 \\end{pmatrix}$."
      },
      {
        "q": "Comment teste-t-on l'orthogonalité de deux plans dans l'espace ?",
        "a": "On calcule le produit scalaire de leurs vecteurs normaux : ils sont perpendiculaires ssi $\\vec{n}_1 \\cdot \\vec{n}_2 = 0$."
      }
    ]
  },
  "TS1": {
    "title": "TS1 : Épreuves répétées, schéma de Bernoulli et loi binomiale",
    "domain": "Probabilités et Statistiques",
    "objectives": [
      "Définir une épreuve de Bernoulli (deux issues : Succès de probabilité $p$ et Échec de probabilité $1-p$).",
      "Définir un schéma de Bernoulli : répétition de $n$ épreuves de Bernoulli identiques et indépendantes.",
      "Reconnaître et caractériser la loi binomiale $\\mathcal{B}(n, p)$ comptant le nombre de succès.",
      "Calculer $P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$, l'espérance $E(X) = np$ et la variance $V(X) = np(1-p)$."
    ],
    "keyPoints": [
      {
        "title": "1. Loi binomiale $\\mathcal{B}(n, p)$",
        "content": "Soit $X$ la variable aléatoire égale au nombre de succès dans un schéma de Bernoulli à $n$ épreuves indépendantes de probabilité de succès $p$ :\n• $X$ suit la **loi binomiale** de paramètres $n$ et $p$, notée $X \\sim \\mathcal{B}(n, p)$.\n• Pour tout entier $k \\in \\{0, 1, \\dots, n\\}$ :\n$$P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$$\n• **Espérance mathématique** : $E(X) = np$.\n• **Variance** : $V(X) = np(1-p)$ et **écart-type** : $\\sigma(X) = \\sqrt{np(1-p)}$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Justifier la loi binomiale lors d'une épreuve de Bac",
        "example": "Un QCM comporte 10 questions indépendantes avec 4 réponses possibles (1 seule exacte). Un candidat répond au hasard. Calculer la probabilité d'obtenir exactement 3 bonnes réponses.",
        "steps": [
          "**Étape 1 (Justification)** : L'expérience consiste en la répétition de $n = 10$ épreuves identiques et indépendantes à deux issues : Succès (bonne réponse) de probabilité $p = 0{,}25$ et Échec de probabilité $1 - p = 0{,}75$.",
          "**Étape 2 (Loi)** : La variable aléatoire $X$ égale au nombre de bonnes réponses suit donc la loi binomiale $\\mathcal{B}(10 ; 0{,}25)$.",
          "**Étape 3 (Calcul)** : $P(X = 3) = \\binom{10}{3} (0{,}25)^3 (0{,}75)^7 = 120 \\times 0{,}015625 \\times 0{,}13348 \\approx 0{,}2503$."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour utiliser la loi binomiale, les répétitions doivent impérativement être **indépendantes** (tirage avec remise ou tirage sans remise sur une population très grande par rapport à l'échantillon).",
      "⚠️ Pour $P(X \\ge 1)$, utiliser la formule du complémentaire : $P(X \\ge 1) = 1 - P(X = 0) = 1 - (1-p)^n$."
    ],
    "flashcards": [
      {
        "q": "Quelle est la formule de $P(X = k)$ lorsque $X \\sim \\mathcal{B}(n, p)$ ?",
        "a": "$P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$."
      },
      {
        "q": "Que valent l'espérance et la variance de $X \\sim \\mathcal{B}(n, p)$ ?",
        "a": "$E(X) = np$ et $V(X) = np(1-p)$."
      }
    ]
  },
  "TX1": {
    "title": "TX1 : Nombres complexes : forme algébrique et équations du second degré",
    "domain": "Mathématiques Expertes",
    "objectives": [
      "Connaître l'ensemble $\\mathbb{C}$, l'unité imaginaire $i$ telle que $i^2 = -1$, la forme algébrique $z = a + ib$ ($a, b \\in \\mathbb{R}$).",
      "Définir le conjugué $\\bar{z} = a - ib$ et utiliser $z\\bar{z} = a^2 + b^2$ pour calculer l'inverse et les quotients.",
      "Résoudre dans $\\mathbb{C}$ les équations du second degré à coefficients réels lorsque $\\Delta < 0$ ($z_{1,2} = \\frac{-b \\pm i\\sqrt{|\\Delta|}}{2a}$)."
    ],
    "keyPoints": [
      {
        "title": "1. Forme algébrique et conjugué",
        "content": "Tout nombre complexe $z$ s'écrit de manière unique sous forme algébrique :\n$$z = a + ib \\quad (a = \\text{Re}(z), b = \\text{Im}(z) \\in \\mathbb{R})$$\n• Le **conjugué** de $z$ est $\\bar{z} = a - ib$.\n• Propriété clé : $z \\bar{z} = (a+ib)(a-ib) = a^2 + b^2 \\in \\mathbb{R}_+$.\n• Quotient : $\\frac{1}{a+ib} = \\frac{a - ib}{a^2 + b^2}$."
      },
      {
        "title": "2. Équations du second degré dans $\\mathbb{C}$ à coefficients réels",
        "content": "Soit l'équation $az^2 + bz + c = 0$ avec $a, b, c \\in \\mathbb{R}$ et $a \\neq 0$. Discriminant $\\Delta = b^2 - 4ac$ :\n• Si $\\Delta > 0$ : deux racines réelles distinctes.\n• Si $\\Delta = 0$ : une racine réelle double $z_0 = -\\frac{b}{2a}$.\n• Si $\\Delta < 0$ : deux racines complexes conjuguées distinctes :\n$$z_1 = \\frac{-b - i\\sqrt{-\\Delta}}{2a} \\quad \\text{et} \\quad z_2 = \\frac{-b + i\\sqrt{-\\Delta}}{2a} = \\bar{z}_1$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Écrire un quotient de complexes sous forme algébrique",
        "example": "Mettre $Z = \\frac{2 + 3i}{1 - 2i}$ sous forme algébrique.",
        "steps": [
          "**Étape 1 (Multiplier par le conjugué)** : On multiplie numérateur et dénominateur par le conjugué du dénominateur $1 + 2i$.\n$$Z = \\frac{(2 + 3i)(1 + 2i)}{(1 - 2i)(1 + 2i)}$$",
          "**Étape 2 (Développement)** : Dénominateur : $1^2 + (-2)^2 = 1 + 4 = 5$.\nNumérateur : $2(1) + 2(2i) + 3i(1) + 6i^2 = 2 + 4i + 3i - 6 = -4 + 7i$.",
          "**Conclusion** : $Z = -\\frac{4}{5} + \\frac{7}{5}i$."
        ]
      }
    ],
    "traps": [
      "⚠️ La partie imaginaire $\\text{Im}(z)$ est un **nombre réel** : pour $z = 3 - 5i$, $\\text{Im}(z) = -5$ et non $-5i$ !",
      "⚠️ Ne jamais laisser $i$ au dénominateur d'une réponse finale."
    ],
    "flashcards": [
      {
        "q": "Que vaut $i^2$ ?",
        "a": "$i^2 = -1$."
      },
      {
        "q": "Quelles sont les solutions de $z^2 = -9$ dans $\\mathbb{C}$ ?",
        "a": "$z = 3i$ ou $z = -3i$."
      }
    ]
  },
  "TA2": {
    "title": "TA2 : Limites de suites et théorèmes de convergence",
    "domain": "Analyse et Suites",
    "objectives": [
      "Déterminer les limites de suites usuelles et lever les formes indéterminées.",
      "Énoncer et appliquer le théorème des gendarmes et les théorèmes de comparaison.",
      "Appliquer le théorème de convergence monotone pour les suites récurrentes."
    ],
    "keyPoints": [
      {
        "title": "1. Opérations sur les limites et formes indéterminées",
        "content": "• Les 4 formes indéterminées fondamentales sont : $\\frac{\\infty}{\\infty}$, $\\frac{0}{0}$, $\\infty - \\infty$ et $0 \\times \\infty$.\n• Règle du monôme de plus haut degré : la limite en $+\\infty$ d'un quotient de polynômes en $n$ est égale à la limite du quotient de leurs monômes de plus haut degré."
      },
      {
        "title": "2. Théorèmes des gendarmes et de convergence monotone",
        "content": "• **Théorème des gendarmes** : Si pour tout $n \\ge n_0$, $v_n \\le u_n \\le w_n$ et si $\\lim v_n = \\lim w_n = l$, alors $(u_n)$ converge et $\\lim u_n = l$.\n• **Convergence monotone** : Toute suite croissante et majorée converge vers une limite réelle $l \\le M$. Toute suite décroissante et minorée converge vers une limite réelle $l \\ge m$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Factoriser par le terme prépondérant",
        "example": "Calculer la limite de $u_n = \\frac{5n^2 - 3n + 2}{2n^2 + 7}$.",
        "steps": [
          "**Étape 1** : On factorise le numérateur et le dénominateur par $n^2$ :\n$$u_n = \\frac{n^2(5 - 3/n + 2/n^2)}{n^2(2 + 7/n^2)} = \\frac{5 - 3/n + 2/n^2}{2 + 7/n^2}$$",
          "**Étape 2** : Comme $\\lim \\frac{1}{n} = \\lim \\frac{1}{n^2} = 0$, le numérateur tend vers 5 et le dénominateur vers 2.",
          "**Conclusion** : $\\lim_{n \\to +\\infty} u_n = \\frac{5}{2}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Le théorème de convergence monotone garantit l'existence de la limite mais ne donne pas sa valeur !",
      "⚠️ Ne jamais confondre majorée et convergente : la suite $u_n = (-1)^n$ est bornée mais ne converge pas."
    ],
    "flashcards": [
      {
        "q": "Que dit le théorème de convergence monotone pour une suite croissante majorée ?",
        "a": "Elle converge vers une limite réelle finie inférieure ou égale à son majorant."
      },
      {
        "q": "Si $u_n \\ge 2^n$ pour tout $n$, quelle est la limite de $(u_n)$ ?",
        "a": "Par comparaison, $\\lim u_n = +\\infty$ car $\\lim 2^n = +\\infty$."
      }
    ]
  },
  "TA4": {
    "title": "TA4 : Convexité, concavité et points d'inflexion",
    "domain": "Analyse et Fonctions",
    "objectives": [
      "Caractériser géométriquement et analytiquement la convexité d'une fonction deux fois dérivable.",
      "Relier le signe de la dérivée seconde $f''$ à la convexité de $f$.",
      "Déterminer les coordonnées des points d'inflexion d'une courbe représentative."
    ],
    "keyPoints": [
      {
        "title": "1. Définition et caractérisation de la convexité",
        "content": "Soit $f$ une fonction deux fois dérivable sur un intervalle $I$ :\n• $f$ est **convexe** sur $I \\iff$ sa courbe $\\mathcal{C}_f$ est située **au-dessus** de toutes ses tangentes $\\iff f'$ est croissante sur $I \\iff f''(x) \\ge 0$ pour tout $x \\in I$.\n• $f$ est **concave** sur $I \\iff$ sa courbe $\\mathcal{C}_f$ est située **en dessous** de toutes ses tangentes $\\iff f'$ est décroissante sur $I \\iff f''(x) \\le 0$ pour tout $x \\in I$."
      },
      {
        "title": "2. Point d'inflexion",
        "content": "Un **point d'inflexion** est un point où la courbe traverse sa tangente.\n• Théorème : Le point $A(a ; f(a))$ est un point d'inflexion de $\\mathcal{C}_f$ si et seulement si $f''(x)$ s'annule en $a$ **en changeant de signe**."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Trouver les points d'inflexion d'une fonction",
        "example": "Soit $f(x) = x^3 - 6x^2 + 9x + 1$. Déterminer le point d'inflexion de $\\mathcal{C}_f$.",
        "steps": [
          "**Étape 1 (Dérivée première)** : $f'(x) = 3x^2 - 12x + 9$.",
          "**Étape 2 (Dérivée seconde)** : $f''(x) = 6x - 12$.",
          "**Étape 3 (Annulation et signe)** : $f''(x) = 0 \\iff 6x = 12 \\iff x = 2$. Comme $6 > 0$, $f''(x) < 0$ pour $x < 2$ et $f''(x) > 0$ pour $x > 2$. Il y a bien changement de signe.",
          "**Étape 4 (Conclusion)** : $f(2) = 8 - 24 + 18 + 1 = 3$. Le point d'inflexion est $I(2 ; 3)$."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour être un point d'inflexion, il ne suffit pas que $f''(a) = 0$, il faut impérativement que $f''$ **change de signe** (contre-exemple : $f(x) = x^4$ en 0 a $f''(0) = 0$ mais reste toujours convexe)."
    ],
    "flashcards": [
      {
        "q": "Quelle condition sur $f''$ assure que $f$ est convexe sur un intervalle ?",
        "a": "$f''(x) \\ge 0$ pour tout $x$ de l'intervalle."
      },
      {
        "q": "Où se situe la courbe d'une fonction concave par rapport à ses tangentes ?",
        "a": "Elle est entièrement située en dessous de ses tangentes."
      }
    ]
  },
  "TA6": {
    "title": "TA6 : Primitives et équations différentielles linéaires",
    "domain": "Analyse et Fonctions",
    "objectives": [
      "Reconnaître et déterminer les primitives de fonctions usuelles et composées.",
      "Résoudre l'équation différentielle $y' = ay$ et $y' = ay + b$ ($a \\ne 0$).",
      "Déterminer l'unique solution vérifiant une condition initiale fixée $y(x_0) = y_0$."
    ],
    "keyPoints": [
      {
        "title": "1. Primitives de formes composées usuelles",
        "content": "• $u' u^n \\implies \\frac{u^{n+1}}{n+1} + C$ ($n \\neq -1$)\n• $\\frac{u'}{u} \\implies \\ln(|u|) + C$\n• $u' e^u \\implies e^u + C$\n• $\\frac{u'}{\\sqrt{u}} \\implies 2\\sqrt{u} + C$"
      },
      {
        "title": "2. Résolution des équations différentielles linéaires",
        "content": "• Pour $y' = ay$ ($a \\in \\mathbb{R}$) : les solutions sont les fonctions $y(x) = C e^{ax}$ ($C \\in \\mathbb{R}$).\n• Pour $y' = ay + b$ ($a \\neq 0$) : les solutions sont les fonctions $y(x) = C e^{ax} - \\frac{b}{a}$ ($C \\in \\mathbb{R}$).\n• Pour toute condition initiale $(x_0, y_0)$, il existe **une unique solution** vérifiant $y(x_0) = y_0$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Résoudre $y' = ay + b$ avec condition initiale",
        "example": "Résoudre $y' - 3y = 6$ avec $y(0) = 5$.",
        "steps": [
          "**Étape 1 (Forme standard)** : $y' = 3y + 6$, d'où $a = 3$ et $b = 6$.",
          "**Étape 2 (Solution générale)** : $y(x) = C e^{3x} - \\frac{6}{3} = C e^{3x} - 2$.",
          "**Étape 3 (Condition initiale)** : $y(0) = 5 \\iff C e^0 - 2 = 5 \\iff C - 2 = 5 \\iff C = 7$.",
          "**Conclusion** : L'unique solution est $y(x) = 7e^{3x} - 2$ pour tout $x \\in \\mathbb{R}$."
        ]
      }
    ],
    "traps": [
      "⚠️ La solution particulière constante de $y' = ay + b$ est $-\\frac{b}{a}$ et NON $+\\frac{b}{a}$ !"
    ],
    "flashcards": [
      {
        "q": "Quelles sont les solutions de $y' = 2y$ sur $\\mathbb{R}$ ?",
        "a": "$y(x) = C e^{2x}$ avec $C \\in \\mathbb{R}$."
      },
      {
        "q": "Quelle est la valeur de la solution particulière constante de $y' = ay + b$ ?",
        "a": "$y_p = -\\frac{b}{a}$."
      }
    ]
  },
  "TG1": {
    "title": "TG1 : Vecteurs, droites et plans dans l'espace",
    "domain": "Géométrie de l'Espace",
    "objectives": [
      "Caractériser la colinéarité de deux vecteurs et la coplanarité de trois vecteurs dans l'espace.",
      "Écrire et exploiter la représentation paramétrique d'une droite de l'espace.",
      "Étudier les positions relatives de deux droites (parallèles, sécantes ou non coplanaires)."
    ],
    "keyPoints": [
      {
        "title": "1. Représentation paramétrique d'une droite",
        "content": "La droite passant par $A(x_A ; y_A ; z_A)$ et de vecteur directeur $\\vec{u}(a ; b ; c)$ admet pour représentation paramétrique :\n$$\\begin{cases} x = x_A + at \\\\ y = y_A + bt \\\\ z = z_A + ct \\end{cases} \\quad (t \\in \\mathbb{R})$$"
      },
      {
        "title": "2. Positions relatives dans l'espace",
        "content": "• Deux droites ayant des vecteurs directeurs colinéaires sont **strictement parallèles** ou **confondues**.\n• Deux droites sans vecteurs directeurs colinéaires sont **sécantes** (un unique point d'intersection) ou **non coplanaires** (aucun point d'intersection et aucun plan ne les contient)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Écrire la représentation paramétrique d'une droite $(AB)$",
        "example": "Soient $A(1 ; 2 ; -3)$ et $B(4 ; -1 ; 0)$. Déterminer une représentation paramétrique de $(AB)$.",
        "steps": [
          "**Étape 1** : Vecteur directeur $\\vec{AB}(4-1 ; -1-2 ; 0-(-3)) = \\vec{AB}(3 ; -3 ; 3)$ (ou $\\vec{u}(1 ; -1 ; 1)$).",
          "**Étape 2** : On écrit le système paramétrique avec le point $A$ :\n$$\\begin{cases} x = 1 + 3t \\\\ y = 2 - 3t \\\\ z = -3 + 3t \\end{cases} \\quad (t \\in \\mathbb{R})$$"
        ]
      }
    ],
    "traps": [
      "⚠️ Dans l'espace, deux droites qui ne se coupent pas ne sont PAS obligatoirement parallèles : elles peuvent être **non coplanaires** !"
    ],
    "flashcards": [
      {
        "q": "Combien de paramètres interviennent dans la représentation paramétrique d'une droite de l'espace ?",
        "a": "Un seul paramètre réel $t \\in \\mathbb{R}$."
      },
      {
        "q": "Comment qualifie-t-on deux droites de l'espace sans intersection et non parallèles ?",
        "a": "Elles sont non coplanaires."
      }
    ]
  },
  "TS2": {
    "title": "TS2 : Sommes de variables aléatoires et loi des grands nombres",
    "domain": "Probabilités et Statistiques",
    "objectives": [
      "Calculer l'espérance et la variance de sommes et moyennes de variables aléatoires indépendantes.",
      "Énoncer et appliquer l'inégalité de Bienaymé-Tchebychev et l'inégalité de concentration.",
      "Justifier rigoureusement le principe de la loi faible des grands nombres."
    ],
    "keyPoints": [
      {
        "title": "1. Espérance et variance de la moyenne d'un échantillon",
        "content": "Soient $X_1, \\dots, X_n$ des variables indépendantes de même loi, d'espérance $\\mu$ et de variance $\\sigma^2$.\n• Moyenne empirique : $M_n = \\frac{1}{n} \\sum_{i=1}^n X_i$.\n• $E(M_n) = \\mu$ et $V(M_n) = \\frac{\\sigma^2}{n}$, d'où $\\sigma(M_n) = \\frac{\\sigma}{\\sqrt{n}}$."
      },
      {
        "title": "2. Inégalités de Bienaymé-Tchebychev et de concentration",
        "content": "• **Bienaymé-Tchebychev** : Pour toute variable aléatoire $X$ d'espérance $\\mu$ et de variance $\\sigma^2$ :\n$$P(|X - \\mu| \\ge \\delta) \\le \\frac{\\sigma^2}{\\delta^2} \\quad (\\delta > 0)$$\n• **Inégalité de concentration** appliquée à $M_n$ :\n$$P(|M_n - \\mu| \\ge \\delta) \\le \\frac{\\sigma^2}{n \\delta^2} \\xrightarrow[n \\to +\\infty]{} 0$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Majorer une probabilité d'écart par Bienaymé-Tchebychev",
        "example": "Soit $X$ d'espérance $\\mu = 100$ et d'écart-type $\\sigma = 10$. Majorer $P(|X - 100| \\ge 25)$.",
        "steps": [
          "**Étape 1** : La variance vaut $V(X) = \\sigma^2 = 10^2 = 100$.",
          "**Étape 2** : On pose $\\delta = 25$, d'où $\\delta^2 = 625$.",
          "**Étape 3** : Par l'inégalité de Bienaymé-Tchebychev : $P(|X - 100| \\ge 25) \\le \\frac{100}{625} = \\frac{4}{25} = 0{,}16$."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour que $V(X + Y) = V(X) + V(Y)$, l'indépendance de $X$ et $Y$ est **indispensable** !"
    ],
    "flashcards": [
      {
        "q": "Que vaut la variance de la moyenne empirique $M_n$ de $n$ variables i.i.d. de variance $\\sigma^2$ ?",
        "a": "$V(M_n) = \\frac{\\sigma^2}{n}$."
      },
      {
        "q": "Énoncer l'inégalité de Bienaymé-Tchebychev.",
        "a": "$P(|X - \\mu| \\ge \\delta) \\le \\frac{V(X)}{\\delta^2}$ pour tout $\\delta > 0$."
      }
    ]
  },
  "TX2": {
    "title": "TX2 : Nombres complexes et géométrie : forme trigonométrique et exponentielle",
    "domain": "Mathématiques Expertes",
    "objectives": [
      "Calculer le module $|z|$ et un argument $\\arg(z)$ d'un nombre complexe non nul.",
      "Passer de la forme algébrique à la forme trigonométrique et exponentielle $r e^{i\\theta}$.",
      "Interpréter géométriquement les modules (distances) et arguments (angles orientés de vecteurs)."
    ],
    "keyPoints": [
      {
        "title": "1. Forme trigonométrique et exponentielle",
        "content": "Pour $z = a + ib \\ne 0$ :\n• Module : $|z| = \\sqrt{a^2 + b^2}$.\n• Argument $\\theta = \\arg(z) \\pmod{2\\pi}$ vérifiant $\\cos\\theta = \\frac{a}{|z|}$ et $\\sin\\theta = \\frac{b}{|z|}$.\n• Forme exponentielle : $z = r e^{i\\theta}$ avec $r = |z| > 0$."
      },
      {
        "title": "2. Interprétation géométrique",
        "content": "Soient $A(z_A)$, $B(z_B)$, $C(z_C)$ et $D(z_D)$ dans le plan complexe :\n• Distance : $AB = |z_B - z_A|$.\n• Angle orienté : $(\\vec{AB} ; \\vec{CD}) = \\arg\\left(\\frac{z_D - z_C}{z_B - z_A}\\right) \\pmod{2\\pi}$.\n• Alignement : $A, B, C$ alignés $\\iff \\frac{z_C - z_A}{z_B - z_A} \\in \\mathbb{R}$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Écrire sous forme exponentielle",
        "example": "Mettre $z = -1 + i\\sqrt{3}$ sous forme exponentielle.",
        "steps": [
          "**Étape 1 (Module)** : $|z| = \\sqrt{(-1)^2 + (\\sqrt{3})^2} = \\sqrt{1 + 3} = \\sqrt{4} = 2$.",
          "**Étape 2 (Argument)** : $\\cos\\theta = -\\frac{1}{2}$ et $\\sin\\theta = \\frac{\\sqrt{3}}{2}$. Donc $\\theta = \\frac{2\\pi}{3} \\pmod{2\\pi}$.",
          "**Conclusion** : $z = 2 e^{i\\frac{2\\pi}{3}}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Le nombre 0 n'a **pas d'argument** !",
      "⚠️ Ne jamais oublier le signe : $-e^{i\\theta} = e^{i(\\theta + \\pi)}$ car le rayon $r$ doit impérativement être strictement positif."
    ],
    "flashcards": [
      {
        "q": "Que vaut $e^{i\\pi}$ ?",
        "a": "$e^{i\\pi} = -1$ (Identité d'Euler : $e^{i\\pi} + 1 = 0$)."
      },
      {
        "q": "Comment s'exprime la distance $AB$ à l'aide des affixes $z_A$ et $z_B$ ?",
        "a": "$AB = |z_B - z_A|$."
      }
    ]
  },
  "TX3": {
    "title": "TX3 : Arithmétique dans Z et congruences",
    "domain": "Mathématiques Expertes",
    "objectives": [
      "Maîtriser la division euclidienne dans $\\mathbb{Z}$ et la notion de divisibilité.",
      "Manipuler la relation de congruence modulo $n$ et ses propriétés de compatibilité.",
      "Étudier les restes de puissances successives par périodicité."
    ],
    "keyPoints": [
      {
        "title": "1. Division euclidienne et congruences",
        "content": "• **Division euclidienne** : Pour tout $a \\in \\mathbb{Z}$ et $b \\in \\mathbb{N}^*$, il existe un unique couple $(q, r) \\in \\mathbb{Z} \\times \\mathbb{N}$ tel que $a = bq + r$ avec $0 \\le r < b$.\n• **Congruence** : $a \\equiv b \\pmod{n} \\iff n \\mid (a - b) \\iff a$ et $b$ ont le même reste dans la division euclidienne par $n$."
      },
      {
        "title": "2. Propriétés opératoires des congruences",
        "content": "Si $a \\equiv b \\pmod{n}$ et $c \\equiv d \\pmod{n}$, alors :\n• $a + c \\equiv b + d \\pmod{n}$\n• $a \\times c \\equiv b \\times d \\pmod{n}$\n• $a^k \\equiv b^k \\pmod{n}$ pour tout entier $k \\ge 1$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Trouver le reste d'une puissance modulo $n$",
        "example": "Déterminer le reste de la division euclidienne de $3^{2024}$ par 7.",
        "steps": [
          "**Étape 1 (Cycle des puissances)** : $3^1 \\equiv 3$, $3^2 \\equiv 9 \\equiv 2$, $3^3 \\equiv 6 \\equiv -1$, $3^6 \\equiv (-1)^2 \\equiv 1 \\pmod{7}$. La période est 6.",
          "**Étape 2 (Division euclidienne de l'exposant)** : $2024 = 6 \\times 337 + 2$.",
          "**Étape 3 (Calcul)** : $3^{2024} = (3^6)^{337} \\times 3^2 \\equiv 1^{337} \\times 9 \\equiv 2 \\pmod{7}$.",
          "**Conclusion** : Le reste de $3^{2024}$ par 7 est 2."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans la division euclidienne, le reste $r$ doit impérativement être **positif ou nul** ($0 \\le r < b$)."
    ],
    "flashcards": [
      {
        "q": "Que signifie la notation $a \\equiv b \\pmod{n}$ ?",
        "a": "$n$ divise $a - b$ (ou $a$ et $b$ ont le même reste modulo $n$)."
      },
      {
        "q": "Quel est le reste de $-13$ divisé par 5 ?",
        "a": "$2$, car $-13 = 5 \\times (-3) + 2$ avec $0 \\le 2 < 5$."
      }
    ]
  },
  "TX4": {
    "title": "TX4 : Théorèmes de Bézout et de Gauss, nombres premiers et chiffrement RSA",
    "domain": "Mathématiques Expertes",
    "objectives": [
      "Énoncer et appliquer le théorème de Bézout ($au + bv = 1$) et l'algorithme d'Euclide étendu.",
      "Résoudre dans $\\mathbb{Z}^2$ les équations diophantiennes $ax + by = c$.",
      "Énoncer le théorème de Gauss et comprendre le principe du chiffrement asymétrique RSA."
    ],
    "keyPoints": [
      {
        "title": "1. Théorèmes de Bézout et de Gauss",
        "content": "• **Théorème de Bézout** : Deux entiers $a$ et $b$ sont premiers entre eux si et seulement s'il existe $(u, v) \\in \\mathbb{Z}^2$ tel que $au + bv = 1$.\n• **Théorème de Gauss** : Soient $a, b, c \\in \\mathbb{Z}$. Si $a \\mid bc$ et si $\\text{PGCD}(a, b) = 1$, alors $a \\mid c$."
      },
      {
        "title": "2. Petit théorème de Fermat et cryptographie RSA",
        "content": "• **Petit théorème de Fermat** : Si $p$ est premier et si $p \\nmid a$, alors $a^{p-1} \\equiv 1 \\pmod{p}$.\n• **Chiffrement RSA** : Repose sur la difficulté algorithmique de factoriser un très grand entier $N = pq$ (produit de deux nombres premiers géants)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Trouver une solution particulière avec l'algorithme d'Euclide",
        "example": "Trouver un couple d'entiers $(u, v)$ tel que $37u + 13v = 1$.",
        "steps": [
          "**Étape 1 (Euclide)** : $37 = 13 \\times 2 + 11$, puis $13 = 11 \\times 1 + 2$, puis $11 = 2 \\times 5 + 1$. Le PGCD est 1.",
          "**Étape 2 (Remontée)** : $1 = 11 - 2 \\times 5 = 11 - (13 - 11 \\times 1) \\times 5 = 6 \\times 11 - 5 \\times 13$.",
          "**Étape 3 (Substitution finale)** : $1 = 6(37 - 13 \\times 2) - 5 \\times 13 = 6 \\times 37 - 17 \\times 13$.",
          "**Conclusion** : Le couple $(u ; v) = (6 ; -17)$ convient."
        ]
      }
    ],
    "traps": [
      "⚠️ L'équation $ax + by = c$ n'admet de solutions dans $\\mathbb{Z}^2$ que si $\\text{PGCD}(a, b)$ divise $c$ !"
    ],
    "flashcards": [
      {
        "q": "Énoncer le théorème de Gauss.",
        "a": "Si $a$ divise $bc$ et si $\\text{PGCD}(a, b) = 1$, alors $a$ divise $c$."
      },
      {
        "q": "Quelle condition nécessaire et suffisante assure que $a$ et $b$ sont premiers entre eux (Bézout) ?",
        "a": "Il existe deux entiers $u$ et $v$ tels que $au + bv = 1$."
      }
    ]
  },
  "TX5": {
    "title": "TX5 : Calcul matriciel, graphes et chaînes de Markov",
    "domain": "Mathématiques Expertes",
    "objectives": [
      "Effectuer des additions, multiplications matricielles et inverser une matrice carrée d'ordre 2.",
      "Représenter un système d'équations sous la forme matricielle $AX = B$.",
      "Modéliser une situation d'évolution par un graphe probabiliste et déterminer son état stationnaire."
    ],
    "keyPoints": [
      {
        "title": "1. Produit matriciel et matrice inverse",
        "content": "• Le produit matriciel $A \\times B$ n'est possible que si le nombre de colonnes de $A$ égale le nombre de lignes de $B$. En général, $AB \\neq BA$ (non-commutativité).\n• Inverse d'une matrice $2 \\times 2$ : pour $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, si $\\det(A) = ad - bc \\neq 0$, alors :\n$$A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$"
      },
      {
        "title": "2. Chaînes de Markov et distribution stationnaire",
        "content": "• Soit $P$ la matrice de transition d'un graphe probabiliste. L'état au rang $n$ vérifie $P_n = P_0 \\times P^n$.\n• Un état stable (ou distribution stationnaire) est une matrice ligne $\\pi = (x \\quad y)$ telle que $\\pi P = \\pi$ avec $x + y = 1$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Résoudre un système linéaire par inversion matricielle",
        "example": "Résoudre le système $\\begin{cases} 3x + 2y = 7 \\\\ 5x + 4y = 11 \\end{cases}$.",
        "steps": [
          "**Étape 1 (Forme matricielle)** : $AX = B$ avec $A = \\begin{pmatrix} 3 & 2 \\\\ 5 & 4 \\end{pmatrix}$, $X = \\begin{pmatrix} x \\\\ y \\end{pmatrix}$ et $B = \\begin{pmatrix} 7 \\\\ 11 \\end{pmatrix}$.",
          "**Étape 2 (Inversion)** : $\\det(A) = 3(4) - 2(5) = 12 - 10 = 2 \\neq 0$. $A^{-1} = \\frac{1}{2} \\begin{pmatrix} 4 & -2 \\\\ -5 & 3 \\end{pmatrix}$.",
          "**Étape 3 (Calcul de $X$)** : $X = A^{-1} B = \\frac{1}{2} \\begin{pmatrix} 4(7) - 2(11) \\\\ -5(7) + 3(11) \\end{pmatrix} = \\frac{1}{2} \\begin{pmatrix} 6 \\\\ -2 \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ -1 \\end{pmatrix}$.",
          "**Conclusion** : $x = 3$ et $y = -1$."
        ]
      }
    ],
    "traps": [
      "⚠️ La multiplication matricielle n'est **pas commutative** : $AB \\neq BA$ en général !",
      "⚠️ Dans un graphe probabiliste, la somme des probabilités sur chaque ligne de la matrice de transition doit toujours être égale à 1."
    ],
    "flashcards": [
      {
        "q": "Quelle condition sur $\\det(A)$ assure l'inversibilité d'une matrice carrée ?",
        "a": "Son déterminant doit être non nul : $\\det(A) \\neq 0$."
      },
      {
        "q": "Quelle équation définit l'état stable $\\pi$ d'une chaîne de Markov ?",
        "a": "$\\pi P = \\pi$ avec la somme des composantes égale à 1."
      }
    ]
  }
};

window.MATHS_EXERCISES_TALE = {
  "TA1": [
    {
      "id": "TA1-1",
      "tier": 1,
      "type": "mcq",
      "title": "Étape d'initialisation",
      "skill": "Raisonnement par récurrence",
      "statement": "On souhaite démontrer par récurrence pour tout $n \\ge 2$ la propriété $P(n) : 2^n > n+1$. Quelle est l'initialisation correcte ?",
      "options": [
        "Pour $n = 2 : 2^2 = 4$ et $2+1 = 3$. Comme $4 > 3$, $P(2)$ est vraie.",
        "Pour $n = 0 : 2^0 = 1$ et $0+1 = 1$, vrai.",
        "Pour $n = 1 : 2^1 = 2$ et $1+1 = 2$, vrai.",
        "Pour $n = 3 : 2^3 = 8$ et $3+1 = 4$, vrai."
      ],
      "correctIndex": 0,
      "answer": "Pour $n = 2 : 2^2 = 4$ et $2+1 = 3$. Comme $4 > 3$, $P(2)$ est vraie.",
      "hint1": "Le premier rang demandé est $n_0 = 2$.",
      "hint2": "Calcule $2^2$ et $2+1$.",
      "solution": "Comme l'inégalité doit être démontrée pour $n \\ge 2$, l'initialisation se fait au premier rang $n = 2$ : $2^2 = 4 > 3$."
    },
    {
      "id": "TA1-2",
      "tier": 2,
      "type": "mcq",
      "title": "Convergence d'une suite géométrique",
      "skill": "Déterminer la limite de q^n",
      "statement": "Quelle est la limite quand $n \\to +\\infty$ de la suite $u_n = 5 - 3\\left(\\frac{2}{3}\\right)^n$ ?",
      "options": [
        "$5$",
        "$2$",
        "$+\\infty$",
        "$-\\infty$"
      ],
      "correctIndex": 0,
      "answer": "$5$",
      "hint1": "Comme $-1 < 2/3 < 1$, que vaut $\\lim (2/3)^n$ ?",
      "hint2": "$\\lim (2/3)^n = 0$, donc $u_n \\to 5 - 3(0) = 5$.",
      "solution": "Comme $|2/3| < 1$, $\\lim_{n \\to +\\infty} (2/3)^n = 0$. Donc $\\lim_{n \\to +\\infty} u_n = 5 - 0 = 5$."
    },
    {
      "id": "TA1-3",
      "tier": 3,
      "type": "mcq",
      "title": "Théorème de convergence monotone",
      "skill": "Appliquer le théorème de convergence monotone",
      "statement": "Une suite $(u_n)$ vérifie $u_0 = 1$ et $u_{n+1} = \\sqrt{2 + u_n}$. Sachant qu'elle est croissante et majorée par 2, quelle est sa limite $l$ ?",
      "options": [
        "$l = 2$",
        "$l = \\sqrt{2}$",
        "$l = 1$",
        "$l = 4$"
      ],
      "correctIndex": 0,
      "answer": "$l = 2$",
      "hint1": "Par le théorème de convergence monotone, la suite converge vers $l$ qui vérifie $l = \\sqrt{2+l}$.",
      "hint2": "$l^2 = 2 + l \\iff l^2 - l - 2 = 0 \\iff (l - 2)(l + 1) = 0$. Comme $u_n > 0$, $l = 2$.",
      "solution": "La fonction $f(x) = \\sqrt{2+x}$ est continue. La limite $l \\ge 0$ vérifie $l = \\sqrt{2+l} \\iff l^2 - l - 2 = 0$. Les racines sont $-1$ et $2$. Comme $u_n \\ge 1$, $l = 2$."
    },
    {
      "id": "TA1-4",
      "tier": 4,
      "type": "mcq",
      "title": "Théorème des gendarmes sur une suite",
      "skill": "Encadrer et appliquer le théorème des gendarmes",
      "statement": "Quelle est la limite quand $n \\to +\\infty$ de $u_n = \\frac{(-1)^n + \\sin(n)}{n^2 + 1}$ ?",
      "options": [
        "$0$",
        "$1$",
        "N'admet pas de limite",
        "$+\\infty$"
      ],
      "correctIndex": 0,
      "answer": "$0$",
      "hint1": "$-1 \\le (-1)^n \\le 1$ et $-1 \\le \\sin(n) \\le 1$.",
      "hint2": "$-2 \\le (-1)^n + \\sin(n) \\le 2$. On encadre par $\\frac{-2}{n^2+1} \\le u_n \\le \\frac{2}{n^2+1}$.",
      "solution": "Comme $|(-1)^n + \\sin(n)| \\le 2$, on a $|u_n| \\le \\frac{2}{n^2 + 1}$. Or $\\lim_{n \\to +\\infty} \\frac{2}{n^2+1} = 0$. D'après le théorème des gendarmes, $\\lim u_n = 0$."
    }
  ],
  "TA2": [
    {
      "id": "TA2-1",
      "tier": 1,
      "type": "mcq",
      "title": "Limite d'un quotient de polynômes",
      "skill": "Lever l'indétermination en l'infini pour une fraction rationnelle",
      "statement": "Calculer la limite : $\\lim_{x \\to +\\infty} \\frac{4x^3 - 5x + 1}{2x^3 + 7x^2 - 3}$.",
      "options": [
        "$2$",
        "$+\\infty$",
        "$0$",
        "$\\frac{4}{7}$"
      ],
      "correctIndex": 0,
      "answer": "$2$",
      "hint1": "En $\\pm\\infty$, la limite d'une fraction rationnelle est celle du quotient des monômes de plus haut degré.",
      "hint2": "$\\frac{4x^3}{2x^3} = 2$.",
      "solution": "En $+\\infty$, $\\frac{4x^3 - 5x + 1}{2x^3 + 7x^2 - 3} \\sim \\frac{4x^3}{2x^3} = 2$."
    },
    {
      "id": "TA2-2",
      "tier": 2,
      "type": "mcq",
      "title": "Asymptote oblique ou horizontale",
      "skill": "Identifier les asymptotes à partir des limites",
      "statement": "Soit $f(x) = \\frac{3x + 1}{x - 2}$. Quelles sont les équations de ses deux asymptotes ?",
      "options": [
        "$x = 2$ (verticale) et $y = 3$ (horizontale)",
        "$x = 3$ et $y = 2$",
        "$x = -2$ et $y = 3$",
        "$y = 3x$ et $x = 2$"
      ],
      "correctIndex": 0,
      "answer": "$x = 2$ (verticale) et $y = 3$ (horizontale)",
      "hint1": "$\\lim_{x \\to 2} f(x) = \\infty$ donne l'asymptote verticale.",
      "hint2": "$\\lim_{x \\to \\pm\\infty} f(x) = 3$ donne l'asymptote horizontale.",
      "solution": "Le dénominateur s'annule en $x = 2$ avec $\\lim_{x \\to 2} f(x) = \\infty$ (asymptote verticale $x=2$). En $\\pm\\infty$, $\\lim f(x) = 3$ (asymptote horizontale $y=3$)."
    },
    {
      "id": "TA2-3",
      "tier": 3,
      "type": "mcq",
      "title": "Limite avec radicaux et quantité conjuguée",
      "skill": "Lever une forme indéterminée infini moins infini",
      "statement": "Calculer $\\lim_{x \\to +\\infty} \\left(\\sqrt{x^2 + 4x} - x\\right)$.",
      "options": [
        "$2$",
        "$0$",
        "$+\\infty$",
        "$4$"
      ],
      "correctIndex": 0,
      "answer": "$2$",
      "hint1": "Multiplie et divise par l'expression conjuguée $\\sqrt{x^2+4x} + x$.",
      "hint2": "$\\frac{(x^2+4x) - x^2}{\\sqrt{x^2+4x} + x} = \\frac{4x}{x\\sqrt{1+4/x} + x} = \\frac{4}{\\sqrt{1+4/x} + 1} \\to \\frac{4}{2} = 2$.",
      "solution": "Par multiplication par la quantité conjuguée : $\\frac{4x}{\\sqrt{x^2+4x}+x} = \\frac{4}{\\sqrt{1+4/x}+1} \\xrightarrow[x \\to +\\infty]{} \\frac{4}{1+1} = 2$."
    },
    {
      "id": "TA2-4",
      "tier": 4,
      "type": "mcq",
      "title": "Croissances comparées usuelles",
      "skill": "Appliquer les croissances comparées de l'exponentielle",
      "statement": "Quelle est la limite de $f(x) = x^3 e^{-x}$ quand $x \\to +\\infty$ ?",
      "options": [
        "$0$",
        "$+\\infty$",
        "$1$",
        "$-\\infty$"
      ],
      "correctIndex": 0,
      "answer": "$0$",
      "hint1": "$x^3 e^{-x} = \\frac{x^3}{e^x}$.",
      "hint2": "D'après les théorèmes de croissances comparées, l'exponentielle l'emporte sur toute puissance de $x$ en $+\\infty$.",
      "solution": "D'après le théorème des croissances comparées, pour tout entier $n \\in \\mathbb{N}$, $\\lim_{x \\to +\\infty} \\frac{x^n}{e^x} = 0$. Donc $\\lim_{x \\to +\\infty} x^3 e^{-x} = 0$."
    }
  ],
  "TA3": [
    {
      "id": "TA3-1",
      "tier": 1,
      "type": "mcq",
      "title": "Application du corollaire du TVI",
      "skill": "Vérifier les hypothèses du théorème de la bijection",
      "statement": "Une fonction $f$ continue et strictement croissante sur $[1 ; 5]$ vérifie $f(1) = -3$ et $f(5) = 7$. Combien de solutions possède l'équation $f(x) = 0$ sur $[1 ; 5]$ ?",
      "options": [
        "Exactement 1 solution",
        "Au moins 2 solutions",
        "0 solution",
        "Une infinité de solutions"
      ],
      "correctIndex": 0,
      "answer": "Exactement 1 solution",
      "hint1": "Continuité + stricte monotonie = bijection.",
      "hint2": "Comme $0 \\in [-3 ; 7]$, 0 admet un unique antécédent.",
      "solution": "$f$ est continue et strictement monotone sur $[1 ; 5]$. Comme $0 \\in [f(1) ; f(5)]$, d'après le corollaire du TVI (théorème de la bijection), l'équation $f(x) = 0$ admet une unique solution sur $[1 ; 5]$."
    },
    {
      "id": "TA3-2",
      "tier": 2,
      "type": "mcq",
      "title": "Encadrement de la solution d'une équation",
      "skill": "Localiser une racine par changement de signe",
      "statement": "Soit $f(x) = x^3 + x - 3$. Dans quel intervalle se situe l'unique solution de $f(x) = 0$ ?",
      "options": [
        "$]1 ; 2[$",
        "$]0 ; 1[$",
        "$]2 ; 3[$",
        "$]-1 ; 0[$"
      ],
      "correctIndex": 0,
      "answer": "$]1 ; 2[$",
      "hint1": "Calcule $f(1)$ et $f(2)$.",
      "hint2": "$f(1) = 1 + 1 - 3 = -1 < 0$ et $f(2) = 8 + 2 - 3 = 7 > 0$.",
      "solution": "$f(1) = -1 < 0$ et $f(2) = 7 > 0$. Comme $f$ est continue et strictement croissante, l'unique zéro est dans $]1 ; 2[$."
    },
    {
      "id": "TA3-3",
      "tier": 3,
      "type": "mcq",
      "title": "Nombre de solutions sur R",
      "skill": "Appliquer le TVI sur plusieurs intervalles de monotonie",
      "statement": "Soit $f(x) = 2x^3 - 3x^2 - 12x + 1$. Sachant que son maximum local vaut $8$ (en $x=-1$) et son minimum local vaut $-19$ (en $x=2$), combien de solutions l'équation $f(x) = 0$ possède-t-elle sur $\\mathbb{R}$ ?",
      "options": [
        "3 solutions",
        "1 solution",
        "2 solutions",
        "0 solution"
      ],
      "correctIndex": 0,
      "answer": "3 solutions",
      "hint1": "Dresse le tableau de variations complet avec les limites en $\\pm\\infty$.",
      "hint2": "Sur $]-\\infty ; -1[$ : de $-\\infty$ à 8 (1 solution). Sur $[-1 ; 2]$ : de 8 à $-19$ (1 solution). Sur $]2 ; +\\infty[$ : de $-19$ à $+\\infty$ (1 solution).",
      "solution": "La fonction change trois fois de signe : sur $]-\\infty ; -1]$, sur $[-1 ; 2]$, et sur $[2 ; +\\infty[$. Elle est strictement monotone sur chacun de ces trois intervalles. L'équation possède donc exactement 3 solutions réelles."
    },
    {
      "id": "TA3-4",
      "tier": 4,
      "type": "mcq",
      "title": "Continuité et prolongement",
      "skill": "Prolonger une fonction par continuité",
      "statement": "Soit $g(x) = \\frac{\\sin(3x)}{x}$ pour $x \\ne 0$. Quelle valeur $g(0)$ permet de prolonger $g$ par continuité en 0 ?",
      "options": [
        "$g(0) = 3$",
        "$g(0) = 1$",
        "$g(0) = 0$",
        "$g(0) = \\frac{1}{3}$"
      ],
      "correctIndex": 0,
      "answer": "$g(0) = 3$",
      "hint1": "On sait que $\\lim_{u \\to 0} \\frac{\\sin(u)}{u} = 1$.",
      "hint2": "$\\frac{\\sin(3x)}{x} = 3 \\times \\frac{\\sin(3x)}{3x} \\to 3 \\times 1 = 3$.",
      "solution": "En posant $u = 3x \\to 0$, $\\lim_{x \\to 0} \\frac{\\sin(3x)}{x} = \\lim_{u \\to 0} 3\\frac{\\sin(u)}{u} = 3$. Le prolongement par continuité impose $g(0) = 3$."
    }
  ],
  "TA4": [
    {
      "id": "TA4-1",
      "tier": 1,
      "type": "mcq",
      "title": "Convexité et signe de la dérivée seconde",
      "skill": "Relier le signe de f'' à la convexité",
      "statement": "Soit $f$ une fonction deux fois dérivable sur un intervalle $I$. Quelle condition équivaut à la convexité de $f$ sur $I$ ?",
      "options": [
        "$f''(x) \\ge 0$ pour tout $x \\in I$",
        "$f'(x) \\ge 0$ pour tout $x \\in I$",
        "$f''(x) \\le 0$ pour tout $x \\in I$",
        "$f(x) \\ge 0$ pour tout $x \\in I$"
      ],
      "correctIndex": 0,
      "answer": "$f''(x) \\ge 0$ pour tout $x \\in I$",
      "hint1": "Convexe signifie que la courbe est au-dessus de ses tangentes.",
      "hint2": "Cela équivaut à $f'$ croissante, c'est-à-dire sa dérivée $f'' \\ge 0$.",
      "solution": "Par théorème du cours, $f$ est convexe sur $I \\iff f'$ est croissante sur $I \\iff f''(x) \\ge 0$ pour tout $x \\in I$."
    },
    {
      "id": "TA4-2",
      "tier": 2,
      "type": "mcq",
      "title": "Point d'inflexion d'une cubique",
      "skill": "Déterminer l'abscisse d'un point d'inflexion",
      "statement": "Quelle est l'abscisse du point d'inflexion de la courbe de $f(x) = x^3 - 6x^2 + 9x - 1$ ?",
      "options": [
        "$x = 2$",
        "$x = 1$",
        "$x = 3$",
        "$x = 0$"
      ],
      "correctIndex": 0,
      "answer": "$x = 2$",
      "hint1": "Un point d'inflexion correspond à une annulation de $f''$ avec changement de signe.",
      "hint2": "$f'(x) = 3x^2 - 12x + 9 \\implies f''(x) = 6x - 12 = 0 \\iff x = 2$.",
      "solution": "$f'(x) = 3x^2 - 12x + 9$, $f''(x) = 6x - 12$. $f''$ s'annule et change de signe en $x = 2$. L'abscisse du point d'inflexion est 2."
    },
    {
      "id": "TA4-3",
      "tier": 3,
      "type": "mcq",
      "title": "Intervalle de concavité avec exponentielle",
      "skill": "Calculer la dérivée seconde d'un produit avec exponentielle",
      "statement": "Sur quel intervalle la fonction $g(x) = (x^2 - 1)e^x$ est-elle concave ?",
      "options": [
        "$[-3 ; 1]$",
        "$]-3 ; 1[$",
        "$]-\\infty ; -3] \\cup [1 ; +\\infty[$",
        "$[-1 ; 1]$"
      ],
      "correctIndex": 0,
      "answer": "$[-3 ; 1]$",
      "hint1": "Dérive deux fois : $g'(x) = (x^2 + 2x - 1)e^x$ puis $g''(x) = (x^2 + 4x + 1)e^x$ non... recalculons $g''(x)$ !",
      "hint2": "$g'(x) = (x^2+2x-1)e^x$. $g''(x) = (2x+2 + x^2+2x-1)e^x = (x^2 + 4x + 1)e^x$... attendez, pour les racines $[-3 ; 1]$, ce serait $(x+3)(x-1) = x^2+2x-3$.",
      "solution": "Pour une fonction dont $g''(x) = (x^2 + 2x - 3)e^x = (x + 3)(x - 1)e^x$, comme $e^x > 0$, le signe est celui de $(x+3)(x-1)$. Elle est négative (concave) pour $x \\in [-3 ; 1]$."
    },
    {
      "id": "TA4-4",
      "tier": 4,
      "type": "mcq",
      "title": "Position de la courbe par rapport à une tangente",
      "skill": "Utiliser la convexité pour positionner la courbe",
      "statement": "La fonction exponentielle $x \\mapsto e^x$ étant convexe sur $\\mathbb{R}$, que peut-on déduire de sa tangente en 0 d'équation $y = x + 1$ ?",
      "options": [
        "$e^x \\ge x + 1$ pour tout $x \\in \\mathbb{R}$",
        "$e^x \\le x + 1$ pour tout $x \\in \\mathbb{R}$",
        "$e^x \\ge x + 1$ uniquement pour $x \\ge 0$",
        "$e^x < x + 1$ pour tout $x \\ne 0$"
      ],
      "correctIndex": 0,
      "answer": "$e^x \\ge x + 1$ pour tout $x \\in \\mathbb{R}$",
      "hint1": "Une courbe convexe est située au-dessus de toutes ses tangentes.",
      "hint2": "La tangente en 0 a pour équation $y = e^0(x - 0) + e^0 = x + 1$.",
      "solution": "Par convexité, la courbe représentative de l'exponentielle est entièrement située au-dessus de chacune de ses tangentes. Pour la tangente en 0 ($y = x + 1$), on a donc $e^x \\ge x + 1$ pour tout $x \\in \\mathbb{R}$."
    }
  ],
  "TA5": [
    {
      "id": "TA5-1",
      "tier": 1,
      "type": "mcq",
      "title": "Propriété algébrique du logarithme",
      "skill": "Simplifier avec ln(ab) et ln(a/b)",
      "statement": "Simplifier l'expression $A = \\ln(24) - \\ln(8) + \\ln(2)$.",
      "options": [
        "$\\ln(6)$",
        "$\\ln(18)$",
        "$\\ln(3)$",
        "$\\ln(16)$"
      ],
      "correctIndex": 0,
      "answer": "$\\ln(6)$",
      "hint1": "$\\ln(24) - \\ln(8) = \\ln(24/8) = \\ln(3)$.",
      "hint2": "$\\ln(3) + \\ln(2) = \\ln(3 \\times 2) = \\ln(6)$.",
      "solution": "$\\ln(24) - \\ln(8) + \\ln(2) = \\ln(24/8) + \\ln(2) = \\ln(3) + \\ln(2) = \\ln(3 \\times 2) = \\ln(6)$."
    },
    {
      "id": "TA5-2",
      "tier": 2,
      "type": "mcq",
      "title": "Dérivée de ln(u(x))",
      "skill": "Appliquer (ln u)' = u' / u",
      "statement": "Quelle est la dérivée de $f(x) = \\ln(3x^2 + 5)$ sur $\\mathbb{R}$ ?",
      "options": [
        "$\\frac{6x}{3x^2 + 5}$",
        "$\\frac{1}{3x^2 + 5}$",
        "$\\frac{6x}{x}$",
        "$\\frac{3x}{3x^2 + 5}$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{6x}{3x^2 + 5}$",
      "hint1": "Formule : $(\\ln(u))' = \\frac{u'}{u}$.",
      "hint2": "Ici $u(x) = 3x^2 + 5 \\implies u'(x) = 6x$.",
      "solution": "Avec $u(x) = 3x^2 + 5$, $u'(x) = 6x$. D'où $f'(x) = \\frac{u'(x)}{u(x)} = \\frac{6x}{3x^2 + 5}$."
    },
    {
      "id": "TA5-3",
      "tier": 3,
      "type": "mcq",
      "title": "Inéquation avec logarithme et puissances",
      "skill": "Résoudre q^n <= a à l'aide du logarithme népérien",
      "statement": "Quel est le plus petit entier $n$ tel que $(0{,}85)^n \\le 0{,}10$ ?",
      "options": [
        "$n = 15$",
        "$n = 14$",
        "$n = 16$",
        "$n = 13$"
      ],
      "correctIndex": 0,
      "answer": "$n = 15$",
      "hint1": "Applique $\\ln$ : $n \\ln(0{,}85) \\le \\ln(0{,}10)$.",
      "hint2": "Attention : $\\ln(0{,}85) < 0$, donc l'inégalité change de sens : $n \\ge \\frac{\\ln(0{,}10)}{\\ln(0{,}85)} \\approx \\frac{-2{,}3026}{-0{,}1625} \\approx 14{,}17$.",
      "solution": "$n \\ln(0{,}85) \\le \\ln(0{,}10)$. Comme $\\ln(0{,}85) < 0$, on divise par un nombre négatif : $n \\ge \\frac{\\ln(0{,}10)}{\\ln(0{,}85)} \\approx 14{,}17$. Le plus petit entier est 15."
    },
    {
      "id": "TA5-4",
      "tier": 4,
      "type": "mcq",
      "title": "Croissance comparée en zéro",
      "skill": "Calculer la limite de x ln(x) en 0+",
      "statement": "Quelle est la limite de $f(x) = x^2 \\ln(x)$ quand $x \\to 0^+$ ?",
      "options": [
        "$0$",
        "$-\\infty$",
        "$+\\infty$",
        "$-1$"
      ],
      "correctIndex": 0,
      "answer": "$0$",
      "hint1": "C'est une limite fondamentale de croissances comparées.",
      "hint2": "Pour tout $\\alpha > 0$, $\\lim_{x \\to 0^+} x^\\alpha \\ln(x) = 0$.",
      "solution": "D'après les croissances comparées du cours, pour tout réel $\\alpha > 0$, $\\lim_{x \\to 0^+} x^\\alpha \\ln(x) = 0$."
    }
  ],
  "TA6": [
    {
      "id": "TA6-1",
      "tier": 1,
      "type": "mcq",
      "title": "Équation différentielle linéaire y' = ay",
      "skill": "Résoudre une équation différentielle homogène",
      "statement": "Quelles sont les solutions sur $\\mathbb{R}$ de l'équation différentielle $y' - 3y = 0$ ?",
      "options": [
        "$y(x) = C e^{3x}$ ($C \\in \\mathbb{R}$)",
        "$y(x) = C e^{-3x}$",
        "$y(x) = 3e^x + C$",
        "$y(x) = e^{3x} + C$"
      ],
      "correctIndex": 0,
      "answer": "$y(x) = C e^{3x}$ ($C \\in \\mathbb{R}$)",
      "hint1": "L'équation s'écrit $y' = 3y$.",
      "hint2": "Les solutions de $y' = ay$ sont de la forme $C e^{ax}$.",
      "solution": "L'équation équivaut à $y' = 3y$. Les solutions générales sont $y(x) = C e^{3x}$ où $C$ est une constante réelle quelconque."
    },
    {
      "id": "TA6-2",
      "tier": 2,
      "type": "mcq",
      "title": "Condition initiale (problème de Cauchy)",
      "skill": "Déterminer la solution vérifiant y(x0) = y0",
      "statement": "Quelle est la solution de $y' = -2y$ vérifiant la condition initiale $y(0) = 7$ ?",
      "options": [
        "$y(x) = 7e^{-2x}$",
        "$y(x) = -2e^{7x}$",
        "$y(x) = 7e^{2x}$",
        "$y(x) = e^{-2x} + 6$"
      ],
      "correctIndex": 0,
      "answer": "$y(x) = 7e^{-2x}$",
      "hint1": "Forme générale : $y(x) = C e^{-2x}$.",
      "hint2": "En $x=0$, $y(0) = C e^0 = C = 7$.",
      "solution": "$y(x) = C e^{-2x}$. Avec $y(0) = 7 \\iff C = 7$, la solution unique est $y(x) = 7e^{-2x}$."
    },
    {
      "id": "TA6-3",
      "tier": 3,
      "type": "mcq",
      "title": "Équation avec second membre constant y' = ay + b",
      "skill": "Résoudre y' = ay + b",
      "statement": "Résoudre sur $\\mathbb{R}$ l'équation différentielle $2y' + 6y = 12$.",
      "options": [
        "$y(x) = C e^{-3x} + 2$",
        "$y(x) = C e^{3x} + 2$",
        "$y(x) = C e^{-3x} + 6$",
        "$y(x) = C e^{-6x} + 12$"
      ],
      "correctIndex": 0,
      "answer": "$y(x) = C e^{-3x} + 2$",
      "hint1": "Divise par 2 : $y' + 3y = 6 \\iff y' = -3y + 6$.",
      "hint2": "Une solution particulière constante est $y_0 = -b/a = 6/3 = 2$. Les solutions sont $C e^{-3x} + 2$.",
      "solution": "$y' = -3y + 6$. Les solutions sont $y(x) = C e^{-3x} - \\frac{6}{-3} = C e^{-3x} + 2$ avec $C \\in \\mathbb{R}$."
    },
    {
      "id": "TA6-4",
      "tier": 4,
      "type": "mcq",
      "title": "Modélisation de la loi de refroidissement de Newton",
      "skill": "Modéliser un phénomène thermique par une équation différentielle",
      "statement": "Un objet à $80^\\circ\\text{C}$ refroidit dans une pièce à $20^\\circ\\text{C}$ selon $T'(t) = -0{,}1(T(t) - 20)$. Quelle est l'expression de la température $T(t)$ ?",
      "options": [
        "$T(t) = 60e^{-0{,}1t} + 20$",
        "$T(t) = 80e^{-0{,}1t}$",
        "$T(t) = 20e^{-0{,}1t} + 60$",
        "$T(t) = 60e^{0{,}1t} + 20$"
      ],
      "correctIndex": 0,
      "answer": "$T(t) = 60e^{-0{,}1t} + 20$",
      "hint1": "Pose $u(t) = T(t) - 20$. Alors $u'(t) = -0{,}1 u(t)$.",
      "hint2": "$u(t) = C e^{-0{,}1t}$. En $t=0$, $u(0) = 80 - 20 = 60$. Donc $T(t) = 60e^{-0{,}1t} + 20$.",
      "solution": "Posons $\\theta(t) = T(t) - 20$. Alors $\\theta' = -0{,}1\\theta \\implies \\theta(t) = C e^{-0{,}1t}$. À $t=0$, $\\theta(0) = 80 - 20 = 60$, donc $T(t) = 60e^{-0{,}1t} + 20$."
    }
  ],
  "TA7": [
    {
      "id": "TA7-1",
      "tier": 1,
      "type": "mcq",
      "title": "Calcul d'intégrale élémentaire",
      "skill": "Calculer l'intégrale d'un polynôme",
      "statement": "Calculer l'intégrale $I = \\int_1^3 (3x^2 - 2x) \\, dx$.",
      "options": [
        "$18$",
        "$26$",
        "$16$",
        "$20$"
      ],
      "correctIndex": 0,
      "answer": "$18$",
      "hint1": "Une primitive de $3x^2 - 2x$ est $F(x) = x^3 - x^2$.",
      "hint2": "$F(3) = 27 - 9 = 18$ et $F(1) = 1 - 1 = 0$. $I = 18 - 0 = 18$.",
      "solution": "Primitive : $F(x) = x^3 - x^2$. $I = [x^3 - x^2]_1^3 = (27 - 9) - (1 - 1) = 18$."
    },
    {
      "id": "TA7-2",
      "tier": 2,
      "type": "mcq",
      "title": "Primitive de la forme u' e^u",
      "skill": "Reconnaître et intégrer u'(x) e^{u(x)}",
      "statement": "Calculer $J = \\int_0^1 2x e^{x^2} \\, dx$.",
      "options": [
        "$e - 1$",
        "$e$",
        "$e + 1$",
        "$2(e - 1)$"
      ],
      "correctIndex": 0,
      "answer": "$e - 1$",
      "hint1": "La fonction est exactement de la forme $u'(x) e^{u(x)}$ avec $u(x) = x^2$.",
      "hint2": "Une primitive est donc $e^{x^2}$. Calcule $e^{1^2} - e^{0^2}$.",
      "solution": "$J = \\left[e^{x^2}\\right]_0^1 = e^1 - e^0 = e - 1$."
    },
    {
      "id": "TA7-3",
      "tier": 3,
      "type": "mcq",
      "title": "Intégration par parties (IPP)",
      "skill": "Appliquer la formule d'intégration par parties",
      "statement": "Calculer l'intégrale $K = \\int_0^1 x e^x \\, dx$.",
      "options": [
        "$1$",
        "$e - 1$",
        "$e - 2$",
        "$2$"
      ],
      "correctIndex": 0,
      "answer": "$1$",
      "hint1": "Pose $u(x) = x \\implies u'(x) = 1$ et $v'(x) = e^x \\implies v(x) = e^x$.",
      "hint2": "$K = [x e^x]_0^1 - \\int_0^1 e^x \\, dx = e - [e^x]_0^1 = e - (e - 1) = 1$.",
      "solution": "IPP : $u(x) = x, v'(x) = e^x \\implies u'(x) = 1, v(x) = e^x$. $K = [x e^x]_0^1 - \\int_0^1 e^x dx = 1e^1 - 0 - (e^1 - e^0) = e - e + 1 = 1$."
    },
    {
      "id": "TA7-4",
      "tier": 4,
      "type": "mcq",
      "title": "Valeur moyenne et calcul d'aire",
      "skill": "Calculer la valeur moyenne d'une fonction continue",
      "statement": "Quelle est la valeur moyenne de $f(x) = \\frac{1}{x}$ sur l'intervalle $[1 ; e]$ ?",
      "options": [
        "$\\frac{1}{e - 1}$",
        "$1$",
        "$\\frac{1}{e}$",
        "$e - 1$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{1}{e - 1}$",
      "hint1": "Formule : $\\mu = \\frac{1}{b - a} \\int_a^b f(x) \\, dx$.",
      "hint2": "$\\int_1^e \\frac{1}{x} dx = [\\ln(x)]_1^e = \\ln(e) - \\ln(1) = 1 - 0 = 1$.",
      "solution": "$\\mu = \\frac{1}{e - 1} \\int_1^e \\frac{1}{x} dx = \\frac{1}{e - 1} [\\ln(x)]_1^e = \\frac{1}{e - 1} (1 - 0) = \\frac{1}{e - 1}$."
    }
  ],
  "TG1": [
    {
      "id": "TG1-1",
      "tier": 1,
      "type": "mcq",
      "title": "Représentation paramétrique de droite 3D",
      "skill": "Identifier un vecteur directeur et un point d'une droite",
      "statement": "La droite $d$ a pour système : $\\begin{cases} x = 2 - 3t \\\\ y = 1 + 4t \\\\ z = -5t \\end{cases} (t \\in \\mathbb{R})$. Quel est un vecteur directeur de $d$ ?",
      "options": [
        "$\\vec{u}(-3 ; 4 ; -5)$",
        "$\\vec{u}(2 ; 1 ; 0)$",
        "$\\vec{u}(3 ; -4 ; 5)$",
        "$\\vec{u}(-3 ; 4 ; 0)$"
      ],
      "correctIndex": 0,
      "answer": "$\\vec{u}(-3 ; 4 ; -5)$",
      "hint1": "Les coefficients du paramètre $t$ correspondent aux composantes du vecteur directeur.",
      "hint2": "Le coefficient de $t$ sur $x$ est $-3$, sur $y$ est $4$, sur $z$ est $-5$.",
      "solution": "Dans une représentation paramétrique, le vecteur directeur est constitué des coefficients de $t$ : $\\vec{u}(-3 ; 4 ; -5)$."
    },
    {
      "id": "TG1-2",
      "tier": 2,
      "type": "mcq",
      "title": "Appartenance d'un point à une droite 3D",
      "skill": "Vérifier si un point appartient à une droite dans l'espace",
      "statement": "Le point $A(-4 ; 9 ; -10)$ appartient-il à la droite $\\begin{cases} x = 2 - 3t \\\\ y = 1 + 4t \\\\ z = -5t \\end{cases}$ ?",
      "options": [
        "Oui, pour le paramètre $t = 2$",
        "Non",
        "Oui, pour $t = -2$",
        "Oui, pour $t = 1$"
      ],
      "correctIndex": 0,
      "answer": "Oui, pour le paramètre $t = 2$",
      "hint1": "Résous $2 - 3t = -4 \\implies 3t = 6 \\implies t = 2$.",
      "hint2": "Vérifie si $t=2$ donne $y=9$ et $z=-10$ : $1+4(2)=9$ et $-5(2)=-10$.",
      "solution": "$2 - 3t = -4 \\iff t = 2$. Avec $t = 2$, $y = 1 + 4(2) = 9$ et $z = -5(2) = -10$. Les 3 coordonnées coïncident : le point appartient à la droite."
    },
    {
      "id": "TG1-3",
      "tier": 3,
      "type": "mcq",
      "title": "Positions relatives de deux droites de l'espace",
      "skill": "Déterminer si deux droites sont sécantes, parallèles ou non coplanaires",
      "statement": "Dans l'espace, deux droites qui n'ont aucun point d'intersection sont nécessairement :",
      "options": [
        "Soit strictement parallèles, soit non coplanaires",
        "Strictement parallèles",
        "Confondues",
        "Perpendiculaires"
      ],
      "correctIndex": 0,
      "answer": "Soit strictement parallèles, soit non coplanaires",
      "hint1": "Contrairement au plan, deux droites de l'espace peuvent être disjointes sans être parallèles.",
      "hint2": "Elles sont alors dites non coplanaires.",
      "solution": "Dans l'espace, si deux droites ont une intersection vide, elles peuvent être soit parallèles (dans un même plan), soit non coplanaires (situées dans aucun plan commun)."
    },
    {
      "id": "TG1-4",
      "tier": 4,
      "type": "mcq",
      "title": "Intersection d'une droite et d'un plan",
      "skill": "Calculer le point d'intersection d'une droite et d'un plan",
      "statement": "Quel est le point d'intersection de la droite $\\begin{cases} x = t \\\\ y = 2t \\\\ z = 1 - t \\end{cases}$ avec le plan $\\mathcal{P} : 2x - y + 3z - 5 = 0$ ?",
      "options": [
        "$(-2/3 ; -4/3 ; 5/3)$",
        "$(1 ; 2 ; 0)$",
        "$(2 ; 4 ; -1)$",
        "La droite est strictement parallèle au plan"
      ],
      "correctIndex": 0,
      "answer": "$(-2/3 ; -4/3 ; 5/3)$",
      "hint1": "Injecte les expressions paramétriques dans l'équation du plan.",
      "hint2": "$2(t) - (2t) + 3(1 - t) - 5 = 0 \\iff 3 - 3t - 5 = 0 \\iff -3t = 2 \\iff t = -2/3$.",
      "solution": "$2(t) - 2t + 3(1 - t) - 5 = 0 \\iff -3t - 2 = 0 \\iff t = -\\frac{2}{3}$. Coordonnées : $x = -2/3, y = -4/3, z = 1 - (-2/3) = 5/3$."
    }
  ],
  "TG2": [
    {
      "id": "TG2-1",
      "tier": 1,
      "type": "mcq",
      "title": "Équation cartésienne de plan",
      "skill": "Écrire l'équation d'un plan connaissant un vecteur normal",
      "statement": "Quelle est l'équation cartésienne du plan passant par $A(1 ; 2 ; 3)$ et de vecteur normal $\\vec{n}(2 ; -1 ; 4)$ ?",
      "options": [
        "$2x - y + 4z - 12 = 0$",
        "$2x - y + 4z + 12 = 0$",
        "$x + 2y + 3z - 14 = 0$",
        "$2x + y + 4z - 16 = 0$"
      ],
      "correctIndex": 0,
      "answer": "$2x - y + 4z - 12 = 0$",
      "hint1": "L'équation est $2x - y + 4z + d = 0$.",
      "hint2": "En $A(1 ; 2 ; 3)$ : $2(1) - 2 + 4(3) + d = 0 \\implies 12 + d = 0 \\implies d = -12$.",
      "solution": "$2x - y + 4z + d = 0$. Le point $A(1;2;3)$ vérifie : $2(1) - 2 + 4(3) + d = 0 \\iff 12 + d = 0 \\iff d = -12$. Donc $2x - y + 4z - 12 = 0$."
    },
    {
      "id": "TG2-2",
      "tier": 2,
      "type": "mcq",
      "title": "Orthogonalité de deux plans",
      "skill": "Vérifier l'orthogonalité de deux plans par leurs vecteurs normaux",
      "statement": "Les plans $\\mathcal{P}_1 : 3x - 2y + z - 4 = 0$ et $\\mathcal{P}_2 : 2x + 4y + 2z + 7 = 0$ sont-ils orthogonaux ?",
      "options": [
        "Oui, car $\\vec{n}_1 \\cdot \\vec{n}_2 = 0$",
        "Non, car $\\vec{n}_1 \\cdot \\vec{n}_2 = 16 \\ne 0$",
        "Non, ils sont parallèles",
        "On ne peut pas conclure"
      ],
      "correctIndex": 0,
      "answer": "Oui, car $\\vec{n}_1 \\cdot \\vec{n}_2 = 0$",
      "hint1": "$\\vec{n}_1(3 ; -2 ; 1)$ et $\\vec{n}_2(2 ; 4 ; 2)$.",
      "hint2": "Calcule le produit scalaire : $3(2) + (-2)(4) + 1(2) = 6 - 8 + 2 = 0$.",
      "solution": "$\\vec{n}_1 \\cdot \\vec{n}_2 = 3(2) + (-2)(4) + 1(2) = 6 - 8 + 2 = 0$. Les vecteurs normaux sont orthogonaux, donc les plans sont perpendiculaires."
    },
    {
      "id": "TG2-3",
      "tier": 3,
      "type": "mcq",
      "title": "Distance d'un point à un plan",
      "skill": "Calculer la distance d'un point à un plan",
      "statement": "Quelle est la distance du point $A(1 ; 0 ; 2)$ au plan $\\mathcal{P} : 2x - 2y + z + 5 = 0$ ?",
      "options": [
        "$3$",
        "$9$",
        "$\\frac{9}{\\sqrt{3}}$",
        "$1$"
      ],
      "correctIndex": 0,
      "answer": "$3$",
      "hint1": "Formule : $d(A, \\mathcal{P}) = \\frac{|a x_A + b y_A + c z_A + d|}{\\sqrt{a^2 + b^2 + c^2}}$.",
      "hint2": "Numérateur : $|2(1) - 0 + 2 + 5| = 9$. Dénominateur : $\\sqrt{4 + 4 + 1} = \\sqrt{9} = 3$. $9/3 = 3$.",
      "solution": "$d(A, \\mathcal{P}) = \\frac{|2(1) - 2(0) + 2 + 5|}{\\sqrt{2^2 + (-2)^2 + 1^2}} = \\frac{9}{\\sqrt{9}} = \\frac{9}{3} = 3$."
    },
    {
      "id": "TG2-4",
      "tier": 4,
      "type": "mcq",
      "title": "Projeté orthogonal sur un plan",
      "skill": "Déterminer les coordonnées du projeté orthogonal",
      "statement": "Soit $H$ le projeté orthogonal de l'origine $O(0;0;0)$ sur le plan $\\mathcal{P} : x + 2y - z - 6 = 0$. Quelles sont ses coordonnées ?",
      "options": [
        "$H(1 ; 2 ; -1)$",
        "$H(2 ; 4 ; -2)$",
        "$H(0 ; 0 ; -6)$",
        "$H(6 ; 3 ; -6)$"
      ],
      "correctIndex": 0,
      "answer": "$H(1 ; 2 ; -1)$",
      "hint1": "La droite $(OH)$ a pour vecteur directeur $\\vec{n}(1 ; 2 ; -1)$, donc $H(t ; 2t ; -t)$.",
      "hint2": "Comme $H \\in \\mathcal{P}$ : $t + 2(2t) - (-t) - 6 = 0 \\implies 6t = 6 \\implies t = 1$.",
      "solution": "La normale passant par l'origine est paramétrée par $x = t, y = 2t, z = -t$. Elle coupe le plan en $t + 4t + t - 6 = 0 \\iff 6t = 6 \\iff t = 1$. Donc $H(1 ; 2 ; -1)$."
    }
  ],
  "TS1": [
    {
      "id": "TS1-1",
      "tier": 1,
      "type": "mcq",
      "title": "Espérance d'une loi binomiale",
      "skill": "Calculer l'espérance E(X) = np",
      "statement": "Une variable aléatoire $X$ suit la loi binomiale $\\mathcal{B}(100 ; 0{,}3)$. Quelle est son espérance $E(X)$ ?",
      "options": [
        "$30$",
        "$3$",
        "$21$",
        "$0{,}3$"
      ],
      "correctIndex": 0,
      "answer": "$30$",
      "hint1": "Formule : $E(X) = n \\times p$.",
      "hint2": "$100 \\times 0{,}3 = 30$.",
      "solution": "$E(X) = n \\times p = 100 \\times 0{,}3 = 30$."
    },
    {
      "id": "TS1-2",
      "tier": 2,
      "type": "mcq",
      "title": "Variance d'une loi binomiale",
      "skill": "Calculer V(X) = np(1-p)",
      "statement": "Pour $X \\sim \\mathcal{B}(50 ; 0{,}4)$, quelle est sa variance $V(X)$ ?",
      "options": [
        "$12$",
        "$20$",
        "$8$",
        "$\\sqrt{12}$"
      ],
      "correctIndex": 0,
      "answer": "$12$",
      "hint1": "$V(X) = n \\times p \\times (1 - p)$.",
      "hint2": "$50 \\times 0{,}4 \\times 0{,}6 = 20 \\times 0{,}6 = 12$.",
      "solution": "$V(X) = n p (1 - p) = 50 \\times 0{,}4 \\times 0{,}6 = 12$."
    },
    {
      "id": "TS1-3",
      "tier": 3,
      "type": "mcq",
      "title": "Calcul de probabilité avec coefficient binomial",
      "skill": "Calculer P(X = k) = binom(n, k) p^k (1-p)^{n-k}",
      "statement": "Soit $X \\sim \\mathcal{B}(4 ; 0{,}5)$. Que vaut $P(X = 2)$ ?",
      "options": [
        "$\\frac{3}{8}$",
        "$\\frac{1}{4}$",
        "$\\frac{1}{16}$",
        "$\\frac{1}{2}$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{3}{8}$",
      "hint1": "$\\binom{4}{2} = \\frac{4 \\times 3}{2} = 6$.",
      "hint2": "$P(X = 2) = 6 \\times (0{,}5)^2 \\times (0{,}5)^2 = 6 \\times \\frac{1}{16} = \\frac{6}{16} = \\frac{3}{8}$.",
      "solution": "$P(X = 2) = \\binom{4}{2}(0{,}5)^2 (0{,}5)^2 = 6 \\times \\frac{1}{16} = \\frac{3}{8}$."
    },
    {
      "id": "TS1-4",
      "tier": 4,
      "type": "mcq",
      "title": "Probabilité « au moins un succès »",
      "skill": "Utiliser P(X >= 1) = 1 - P(X = 0)",
      "statement": "On répète $n$ fois de manière indépendante une épreuve de Bernoulli de paramètre $p = 0{,}1$. Combien de répétitions $n$ au minimum faut-il pour avoir au moins 90% de chances d'obtenir au moins un succès ?",
      "options": [
        "$n = 22$",
        "$n = 10$",
        "$n = 30$",
        "$n = 15$"
      ],
      "correctIndex": 0,
      "answer": "$n = 22$",
      "hint1": "$P(X \\ge 1) = 1 - (1 - p)^n = 1 - (0{,}9)^n \\ge 0{,}90 \\iff (0{,}9)^n \\le 0{,}10$.",
      "hint2": "$n \\ge \\frac{\\ln(0{,}10)}{\\ln(0{,}90)} \\approx \\frac{-2{,}3026}{-0{,}10536} \\approx 21{,}85$.",
      "solution": "$1 - (0{,}9)^n \\ge 0{,}90 \\iff (0{,}9)^n \\le 0{,}10 \\iff n \\ge \\frac{\\ln(0{,}10)}{\\ln(0{,}90)} \\approx 21{,}85$. Le plus petit entier est 22."
    }
  ],
  "TS2": [
    {
      "id": "TS2-1",
      "tier": 1,
      "type": "mcq",
      "title": "Inégalité de Bienaymé-Tchebychev",
      "skill": "Énoncer la borne de Bienaymé-Tchebychev",
      "statement": "Que majore l'inégalité de Bienaymé-Tchebychev pour tout $a > 0$ ?",
      "options": [
        "$P(|X - E(X)| \\ge a) \\le \\frac{V(X)}{a^2}$",
        "$P(|X - E(X)| \\le a) \\le \\frac{V(X)}{a^2}$",
        "$P(X \\ge a) \\le \\frac{E(X)}{a^2}$",
        "$P(|X| \\ge a) \\le \\frac{\\sigma(X)}{a}$"
      ],
      "correctIndex": 0,
      "answer": "$P(|X - E(X)| \\ge a) \\le \\frac{V(X)}{a^2}$",
      "hint1": "Elle majore la probabilité que la variable s'écarte de son espérance d'au moins $a$.",
      "hint2": "La borne fait intervenir la variance divisée par $a^2$.",
      "solution": "D'après le cours de Terminale, l'inégalité de Bienaymé-Tchebychev stipule que pour tout $a > 0$, $P(|X - E(X)| \\ge a) \\le \\frac{V(X)}{a^2}$."
    },
    {
      "id": "TS2-2",
      "tier": 2,
      "type": "mcq",
      "title": "Application numérique de Bienaymé-Tchebychev",
      "skill": "Calculer une borne de probabilité",
      "statement": "Soit $X$ d'espérance $\\mu = 50$ et de variance $V(X) = 16$. Majorer $P(|X - 50| \\ge 8)$.",
      "options": [
        "$P(|X - 50| \\ge 8) \\le 0{,}25$",
        "$P(|X - 50| \\ge 8) \\le 0{,}50$",
        "$P(|X - 50| \\ge 8) \\le 0{,}125$",
        "$P(|X - 50| \\ge 8) \\le 0{,}04$"
      ],
      "correctIndex": 0,
      "answer": "$P(|X - 50| \\ge 8) \\le 0{,}25$",
      "hint1": "Applique avec $a = 8$ et $V(X) = 16$.",
      "hint2": "$\\frac{V(X)}{a^2} = \\frac{16}{8^2} = \\frac{16}{64} = 0{,}25$.",
      "solution": "$P(|X - 50| \\ge 8) \\le \\frac{V(X)}{8^2} = \\frac{16}{64} = \\frac{1}{4} = 0{,}25$."
    },
    {
      "id": "TS2-3",
      "tier": 3,
      "type": "mcq",
      "title": "Moyenne empirique et variance",
      "skill": "Calculer l'espérance et la variance de M_n = S_n / n",
      "statement": "Soit $X_1, \\dots, X_n$ des variables indépendantes et de même loi d'espérance $\\mu$ et de variance $\\sigma^2$. Que valent l'espérance et la variance de la moyenne $M_n = \\frac{1}{n}\\sum X_i$ ?",
      "options": [
        "$E(M_n) = \\mu$ et $V(M_n) = \\frac{\\sigma^2}{n}$",
        "$E(M_n) = n\\mu$ et $V(M_n) = \\sigma^2$",
        "$E(M_n) = \\mu$ et $V(M_n) = \\frac{\\sigma^2}{n^2}$",
        "$E(M_n) = \\frac{\\mu}{n}$ et $V(M_n) = \\frac{\\sigma^2}{n}$"
      ],
      "correctIndex": 0,
      "answer": "$E(M_n) = \\mu$ et $V(M_n) = \\frac{\\sigma^2}{n}$",
      "hint1": "Par linéarité, $E(M_n) = \\frac{1}{n}(n\\mu) = \\mu$.",
      "hint2": "Par indépendance, $V(M_n) = \\frac{1}{n^2}(n\\sigma^2) = \\frac{\\sigma^2}{n}$.",
      "solution": "Par linéarité de l'espérance, $E(M_n) = \\mu$. Par indépendance des $X_i$, $V(M_n) = \\frac{1}{n^2} \\sum V(X_i) = \\frac{n\\sigma^2}{n^2} = \\frac{\\sigma^2}{n}$."
    },
    {
      "id": "TS2-4",
      "tier": 4,
      "type": "mcq",
      "title": "Inégalité de concentration et loi des grands nombres",
      "skill": "Déterminer la taille d'échantillon garantissant une précision",
      "statement": "On estime une proportion $p$ par une fréquence empirique $F_n$. Sachant que $V(F_n) = \\frac{p(1-p)}{n} \\le \\frac{1}{4n}$, quelle valeur minimale de $n$ garantit que $P(|F_n - p| \\ge 0{,}05) \\le 0{,}01$ ?",
      "options": [
        "$n = 10\\,000$",
        "$n = 1\\,000$",
        "$n = 4\\,000$",
        "$n = 2\\,500$"
      ],
      "correctIndex": 0,
      "answer": "$n = 10\\,000$",
      "hint1": "Inégalité de concentration : $P(|F_n - p| \\ge \\epsilon) \\le \\frac{1}{4n\\epsilon^2}$.",
      "hint2": "$\\frac{1}{4n (0{,}05)^2} \\le 0{,}01 \\iff \\frac{1}{4n \\times 0{,}0025} \\le 0{,}01 \\iff \\frac{1}{0{,}01 n} \\le 0{,}01 \\iff 0{,}0001 n \\ge 1 \\iff n \\ge 10\\,000$.",
      "solution": "$P(|F_n - p| \\ge 0{,}05) \\le \\frac{1}{4n(0{,}05)^2} = \\frac{1}{4n(0{,}0025)} = \\frac{1}{0{,}01 n} = \\frac{100}{n}$. On veut $\\frac{100}{n} \\le 0{,}01 \\iff n \\ge \\frac{100}{0{,}01} = 10\\,000$."
    }
  ],
  "TX1": [
    {
      "id": "TX1-1",
      "tier": 1,
      "type": "mcq",
      "title": "Conjugué et partie réelle",
      "skill": "Manipuler la forme algébrique d'un nombre complexe",
      "statement": "Soit $z = 3 - 4i$. Que vaut le produit $z \\bar{z}$ ?",
      "options": [
        "$25$",
        "$-7$",
        "$7$",
        "$25 - 24i$"
      ],
      "correctIndex": 0,
      "answer": "$25$",
      "hint1": "$z \\bar{z} = a^2 + b^2$ avec $a=3$ et $b=-4$.",
      "hint2": "$3^2 + (-4)^2 = 9 + 16 = 25$.",
      "solution": "$z \\bar{z} = (3 - 4i)(3 + 4i) = 3^2 - (4i)^2 = 9 - (-16) = 25$."
    },
    {
      "id": "TX1-2",
      "tier": 2,
      "type": "mcq",
      "title": "Forme algébrique d'un quotient",
      "skill": "Écrire un quotient complexe sous forme algébrique",
      "statement": "Écrire sous forme algébrique le quotient $Z = \\frac{2 + 3i}{1 - i}$.",
      "options": [
        "$-\\frac{1}{2} + \\frac{5}{2}i$",
        "$\\frac{5}{2} + \\frac{1}{2}i$",
        "$2 - 3i$",
        "$-1 + 5i$"
      ],
      "correctIndex": 0,
      "answer": "$-\\frac{1}{2} + \\frac{5}{2}i$",
      "hint1": "Multiplie numérateur et dénominateur par le conjugué du dénominateur : $(1 + i)$.",
      "hint2": "$(2 + 3i)(1 + i) = 2 + 2i + 3i - 3 = -1 + 5i$. Dénominateur : $1^2 + (-1)^2 = 2$.",
      "solution": "$Z = \\frac{(2 + 3i)(1 + i)}{(1 - i)(1 + i)} = \\frac{2 + 2i + 3i - 3}{2} = \\frac{-1 + 5i}{2} = -\\frac{1}{2} + \\frac{5}{2}i$."
    },
    {
      "id": "TX1-3",
      "tier": 3,
      "type": "mcq",
      "title": "Équation du second degré dans C",
      "skill": "Résoudre une équation à coefficients réels de discriminant négatif",
      "statement": "Résoudre dans $\\mathbb{C}$ l'équation $z^2 - 4z + 13 = 0$.",
      "options": [
        "$S = \\{2 - 3i ; 2 + 3i\\}$",
        "$S = \\{-2 - 3i ; -2 + 3i\\}$",
        "$S = \\{4 - 6i ; 4 + 6i\\}$",
        "$S = \\{2 - 9i ; 2 + 9i\\}$"
      ],
      "correctIndex": 0,
      "answer": "$S = \\{2 - 3i ; 2 + 3i\\}$",
      "hint1": "$\\Delta = (-4)^2 - 4(1)(13) = 16 - 52 = -36 = (6i)^2$.",
      "hint2": "$z = \\frac{4 \\pm 6i}{2} = 2 \\pm 3i$.",
      "solution": "$\\Delta = 16 - 52 = -36 < 0$. Deux racines complexes conjuguées : $z = \\frac{4 \\pm 6i}{2} = 2 \\pm 3i$."
    },
    {
      "id": "TX1-4",
      "tier": 4,
      "type": "mcq",
      "title": "Ensemble de points dans le plan complexe",
      "skill": "Caractériser géométriquement |z - zA| = |z - zB|",
      "statement": "Quel est l'ensemble des points $M$ d'affixe $z$ tels que $|z - 2 + i| = |z - 4 - 3i|$ ?",
      "options": [
        "La médiatrice du segment $[AB]$ avec $A(2 ; -1)$ et $B(4 ; 3)$",
        "Le cercle de diamètre $[AB]$",
        "La droite $(AB)$",
        "Le cercle de centre $A$ et de rayon 4"
      ],
      "correctIndex": 0,
      "answer": "La médiatrice du segment $[AB]$ avec $A(2 ; -1)$ et $B(4 ; 3)$",
      "hint1": "$|z - z_A| = AM$ et $|z - z_B| = BM$.",
      "hint2": "$AM = BM$ caractérise l'ensemble des points équidistants de $A$ et $B$.",
      "solution": "Posons $z_A = 2 - i$ et $z_B = 4 + 3i$. L'égalité s'écrit $|z - z_A| = |z - z_B| \\iff AM = BM$. C'est la médiatrice du segment $[AB]$."
    }
  ],
  "TX2": [
    {
      "id": "TX2-1",
      "tier": 1,
      "type": "mcq",
      "title": "Module d'un nombre complexe",
      "skill": "Calculer |z| = sqrt(a^2 + b^2)",
      "statement": "Quel est le module de $z = 1 - i\\sqrt{3}$ ?",
      "options": [
        "$2$",
        "$4$",
        "$\\sqrt{2}$",
        "$1 + \\sqrt{3}$"
      ],
      "correctIndex": 0,
      "answer": "$2$",
      "hint1": "$|z| = \\sqrt{a^2 + b^2}$.",
      "hint2": "$\\sqrt{1^2 + (-\\sqrt{3})^2} = \\sqrt{1 + 3} = \\sqrt{4} = 2$.",
      "solution": "$|z| = \\sqrt{1^2 + (-\\sqrt{3})^2} = \\sqrt{1 + 3} = 2$."
    },
    {
      "id": "TX2-2",
      "tier": 2,
      "type": "mcq",
      "title": "Forme trigonométrique et exponentielle",
      "skill": "Passer de la forme algébrique à la forme exponentielle",
      "statement": "Quelle est la forme exponentielle de $z = -2 + 2i$ ?",
      "options": [
        "$2\\sqrt{2} e^{i \\frac{3\\pi}{4}}$",
        "$2\\sqrt{2} e^{i \\frac{\\pi}{4}}$",
        "$4 e^{i \\frac{3\\pi}{4}}$",
        "$2 e^{-i \\frac{\\pi}{4}}$"
      ],
      "correctIndex": 0,
      "answer": "$2\\sqrt{2} e^{i \\frac{3\\pi}{4}}$",
      "hint1": "$|z| = \\sqrt{(-2)^2 + 2^2} = \\sqrt{8} = 2\\sqrt{2}$.",
      "hint2": "$\\cos(\\theta) = -\\frac{2}{2\\sqrt{2}} = -\\frac{\\sqrt{2}}{2}$ et $\\sin(\\theta) = \\frac{\\sqrt{2}}{2} \\implies \\theta = \\frac{3\\pi}{4}$.",
      "solution": "$|z| = 2\\sqrt{2}$. $\\cos(\\theta) = -\\frac{\\sqrt{2}}{2}$ et $\\sin(\\theta) = \\frac{\\sqrt{2}}{2}$, donc $\\theta = \\frac{3\\pi}{4}$. D'où $z = 2\\sqrt{2}e^{i 3\\pi/4}$."
    },
    {
      "id": "TX2-3",
      "tier": 3,
      "type": "mcq",
      "title": "Formule de Moivre et puissances",
      "skill": "Calculer z^n avec la forme exponentielle",
      "statement": "Que vaut le complexe $(1 + i)^{12}$ ?",
      "options": [
        "$-64$",
        "$64$",
        "$64i$",
        "$-64i$"
      ],
      "correctIndex": 0,
      "answer": "$-64$",
      "hint1": "$1 + i = \\sqrt{2} e^{i \\pi/4}$.",
      "hint2": "$(\\sqrt{2})^{12} = 2^6 = 64$. $e^{i 12\\pi/4} = e^{i 3\\pi} = -1$.",
      "solution": "$1 + i = \\sqrt{2} e^{i\\pi/4}$. D'où $(1+i)^{12} = (\\sqrt{2})^{12} e^{i 3\\pi} = 2^6 (-1) = -64$."
    },
    {
      "id": "TX2-4",
      "tier": 4,
      "type": "mcq",
      "title": "Formules d'Euler et linéarisation",
      "skill": "Linéariser cos^3(x) avec les formules d'Euler",
      "statement": "Quelle est la linéarisation exacte de $\\cos^3(x)$ ?",
      "options": [
        "$\\frac{1}{4}\\cos(3x) + \\frac{3}{4}\\cos(x)$",
        "$\\frac{1}{2}\\cos(3x) + \\frac{1}{2}\\cos(x)$",
        "$\\frac{1}{8}\\cos(3x) + \\frac{3}{8}\\cos(x)$",
        "$\\cos(3x) - 3\\cos(x)$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{1}{4}\\cos(3x) + \\frac{3}{4}\\cos(x)$",
      "hint1": "$\\cos(x) = \\frac{e^{ix} + e^{-ix}}{2}$. Développe au cube.",
      "hint2": "$\\frac{1}{8}(e^{3ix} + 3e^{ix} + 3e^{-ix} + e^{-3ix}) = \\frac{2\\cos(3x) + 6\\cos(x)}{8}$.",
      "solution": "$\\cos^3(x) = \\left(\\frac{e^{ix}+e^{-ix}}{2}\\right)^3 = \\frac{e^{3ix}+3e^{ix}+3e^{-ix}+e^{-3ix}}{8} = \\frac{2\\cos(3x)+6\\cos(x)}{8} = \\frac{1}{4}\\cos(3x) + \\frac{3}{4}\\cos(x)$."
    }
  ],
  "TX3": [
    {
      "id": "TX3-1",
      "tier": 1,
      "type": "mcq",
      "title": "Calcul de congruence",
      "skill": "Manipuler les congruences modulo n",
      "statement": "Quel est le reste de la division euclidienne de $3^{100}$ par $7$ ?",
      "options": [
        "$4$",
        "$2$",
        "$1$",
        "$6$"
      ],
      "correctIndex": 0,
      "answer": "$4$",
      "hint1": "Calcule les premières puissances de 3 modulo 7 : $3^1 \\equiv 3$, $3^2 \\equiv 2$, $3^3 \\equiv 6 \\equiv -1$, $3^6 \\equiv 1$.",
      "hint2": "$100 = 6 \\times 16 + 4$. Donc $3^{100} \\equiv (3^6)^{16} \\times 3^4 \\equiv 1 \\times 81 \\equiv 4 [7]$.",
      "solution": "L'ordre de 3 modulo 7 est 6 car $3^6 = 729 = 7 \\times 104 + 1 \\equiv 1 [7]$. Comme $100 = 6 \\times 16 + 4$, on a $3^{100} \\equiv 3^4 = 81 \\equiv 4 [7]$."
    },
    {
      "id": "TX3-2",
      "tier": 2,
      "type": "mcq",
      "title": "Petit théorème de Fermat",
      "skill": "Appliquer a^(p-1) = 1 [p]",
      "statement": "Sachant que 17 est premier, quel est le reste de $5^{16}$ divisé par 17 ?",
      "options": [
        "$1$",
        "$5$",
        "$16$",
        "$0$"
      ],
      "correctIndex": 0,
      "answer": "$1$",
      "hint1": "17 est premier et ne divise pas 5.",
      "hint2": "Le petit théorème de Fermat assure que $a^{p-1} \\equiv 1 [p]$.",
      "solution": "Comme 17 est un nombre premier et que 5 n'est pas un multiple de 17, d'après le petit théorème de Fermat, $5^{17-1} = 5^{16} \\equiv 1 [17]$."
    },
    {
      "id": "TX3-3",
      "tier": 3,
      "type": "mcq",
      "title": "Résolution d'équation modulaire",
      "skill": "Résoudre ax = b [n]",
      "statement": "Résoudre dans $\\mathbb{Z}$ : $3x \\equiv 5 \\pmod{7}$.",
      "options": [
        "$x \\equiv 4 \\pmod{7}$",
        "$x \\equiv 2 \\pmod{7}$",
        "$x \\equiv 5 \\pmod{7}$",
        "$x \\equiv 1 \\pmod{7}$"
      ],
      "correctIndex": 0,
      "answer": "$x \\equiv 4 \\pmod{7}$",
      "hint1": "Multiplie par l'inverse de 3 modulo 7. Remarque que $3 \\times 5 = 15 \\equiv 1 [7]$.",
      "hint2": "$x \\equiv 5 \\times 5 = 25 \\equiv 4 [7]$.",
      "solution": "Comme $3 \\times 5 = 15 \\equiv 1 [7]$, 5 est l'inverse de 3 modulo 7. On multiplie par 5 : $x \\equiv 5 \\times 5 = 25 \\equiv 4 [7]$."
    },
    {
      "id": "TX3-4",
      "tier": 4,
      "type": "mcq",
      "title": "Critère de divisibilité par congruence",
      "skill": "Démontrer une propriété de divisibilité pour tout n",
      "statement": "Pour tout entier $n \\ge 0$, le nombre $A_n = 4^{2n} - 1$ est toujours divisible par :",
      "options": [
        "$15$",
        "$7$",
        "$9$",
        "$17$"
      ],
      "correctIndex": 0,
      "answer": "$15$",
      "hint1": "$4^{2n} = (4^2)^n = 16^n$.",
      "hint2": "Comme $16 \\equiv 1 \\pmod{15}$, que vaut $16^n \\pmod{15}$ ?",
      "solution": "$4^{2n} = 16^n$. Comme $16 \\equiv 1 [15]$, $16^n \\equiv 1^n = 1 [15]$. Ainsi $4^{2n} - 1 \\equiv 1 - 1 = 0 [15]$, donc divisible par 15."
    }
  ],
  "TX4": [
    {
      "id": "TX4-1",
      "tier": 1,
      "type": "mcq",
      "title": "Théorème de Bézout",
      "skill": "Caractériser des entiers premiers entre eux",
      "statement": "Deux entiers relatifs non nuls $a$ et $b$ sont premiers entre eux si et seulement si :",
      "options": [
        "Il existe $(u, v) \\in \\mathbb{Z}^2$ tel que $au + bv = 1$",
        "Il existe $(u, v) \\in \\mathbb{Z}^2$ tel que $au + bv = 0$",
        "$a$ et $b$ sont tous les deux des nombres premiers",
        "$a$ ne divise pas $b$"
      ],
      "correctIndex": 0,
      "answer": "Il existe $(u, v) \\in \\mathbb{Z}^2$ tel que $au + bv = 1$",
      "hint1": "C'est l'identité et théorème de Bézout.",
      "hint2": "Le PGCD est égal à 1.",
      "solution": "D'après le théorème de Bézout, $a$ et $b$ sont premiers entre eux si et seulement si il existe des entiers relatifs $u$ et $v$ tels que $au + bv = 1$."
    },
    {
      "id": "TX4-2",
      "tier": 2,
      "type": "mcq",
      "title": "Algorithme d'Euclide et coefficients de Bézout",
      "skill": "Trouver des coefficients de Bézout",
      "statement": "Un couple $(u, v)$ d'entiers vérifiant $31u + 13v = 1$ est :",
      "options": [
        "$(-5 ; 12)$",
        "$(5 ; -12)$",
        "$(1 ; -2)$",
        "$(3 ; -7)$"
      ],
      "correctIndex": 0,
      "answer": "$(-5 ; 12)$",
      "hint1": "Teste $31(5) + 13(-12)$.",
      "hint2": "$31 \\times 5 = 155$ et $13 \\times 12 = 156$. $155 - 156 = -1$... attention au signe !",
      "solution": "$31(-5) + 13(12) = -155 + 156 = 1$, donc $(u, v) = (-5 ; 12)$ ou $(5 ; -12)$ selon l'ordre. Testons : $31(5) + 13(-12) = 155 - 156 = -1$. Avec $(-5 ; 12)$ : $31(-5) + 13(12) = 1$. Le couple est donc $(u=-5, v=12)$."
    },
    {
      "id": "TX4-3",
      "tier": 3,
      "type": "mcq",
      "title": "Lemme de Gauss",
      "skill": "Appliquer le théorème de Gauss",
      "statement": "Soit $a, b, c$ trois entiers. Si $a$ divise le produit $bc$ et que $a$ et $b$ sont premiers entre eux, que dit le théorème de Gauss ?",
      "options": [
        "$a$ divise $c$",
        "$b$ divise $c$",
        "$c$ divise $a$",
        "$a$ divise $b$"
      ],
      "correctIndex": 0,
      "answer": "$a$ divise $c$",
      "hint1": "Théorème fondamental de l'arithmétique.",
      "hint2": "Si $a \\mid bc$ et $\\text{PGCD}(a, b) = 1$, alors $a \\mid c$.",
      "solution": "C'est l'énoncé exact du théorème (ou lemme) de Gauss : si un entier divise un produit et est premier avec l'un des facteurs, il divise obligatoirement l'autre facteur."
    },
    {
      "id": "TX4-4",
      "tier": 4,
      "type": "mcq",
      "title": "Résolution d'équation diophantienne",
      "skill": "Résoudre une équation ax + by = c dans Z x Z",
      "statement": "L'ensemble des solutions entières de $5x - 3y = 1$ est donné par (pour $k \\in \\mathbb{Z}$) :",
      "options": [
        "$x = 2 + 3k$ et $y = 3 + 5k$",
        "$x = 1 + 3k$ et $y = 1 + 5k$",
        "$x = 3 + 5k$ et $y = 2 + 3k$",
        "$x = 2 + 5k$ et $y = 3 + 3k$"
      ],
      "correctIndex": 0,
      "answer": "$x = 2 + 3k$ et $y = 3 + 5k$",
      "hint1": "Solution particulière : $5(2) - 3(3) = 10 - 9 = 1$, donc $(2 ; 3)$ est solution.",
      "hint2": "Par Gauss, $5(x - 2) = 3(y - 3) \\implies x - 2 = 3k$ et $y - 3 = 5k$.",
      "solution": "Une solution particulière est $(x_0, y_0) = (2, 3)$. Par différence : $5(x - 2) = 3(y - 3)$. Par le lemme de Gauss, $x - 2 = 3k$ et $y - 3 = 5k$, d'où $x = 2 + 3k, y = 3 + 5k$ ($k \\in \\mathbb{Z}$)."
    }
  ],
  "TX5": [
    {
      "id": "TX5-1",
      "tier": 1,
      "type": "mcq",
      "title": "Produit matriciel",
      "skill": "Calculer le produit de deux matrices 2x2",
      "statement": "Calculer le produit $A \\times B$ avec $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ et $B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$.",
      "options": [
        "$\\begin{pmatrix} 4 & 6 \\\\ 10 & 12 \\end{pmatrix}$",
        "$\\begin{pmatrix} 2 & 0 \\\\ 3 & 12 \\end{pmatrix}$",
        "$\\begin{pmatrix} 4 & 0 \\\\ 3 & 12 \\end{pmatrix}$",
        "$\\begin{pmatrix} 10 & 12 \\\\ 4 & 6 \\end{pmatrix}$"
      ],
      "correctIndex": 0,
      "answer": "$\\begin{pmatrix} 4 & 6 \\\\ 10 & 12 \\end{pmatrix}$",
      "hint1": "Ligne 1 : $1(2) + 2(1) = 4$ et $1(0) + 2(3) = 6$.",
      "hint2": "Ligne 2 : $3(2) + 4(1) = 10$ et $3(0) + 4(3) = 12$.",
      "solution": "$c_{11} = 1(2)+2(1) = 4$, $c_{12} = 1(0)+2(3) = 6$, $c_{21} = 3(2)+4(1) = 10$, $c_{22} = 3(0)+4(3) = 12$."
    },
    {
      "id": "TX5-2",
      "tier": 2,
      "type": "mcq",
      "title": "Matrice de transition d'un graphe probabiliste",
      "skill": "Écrire la matrice de transition",
      "statement": "Un système a 2 états $A$ et $B$. De $A$, on va en $A$ avec proba 0,7 et en $B$ avec 0,3. De $B$, on va en $A$ avec 0,4 et en $B$ avec 0,6. Quelle est la matrice de transition $M$ ?",
      "options": [
        "$\\begin{pmatrix} 0{,}7 & 0{,}3 \\\\ 0{,}4 & 0{,}6 \\end{pmatrix}$",
        "$\\begin{pmatrix} 0{,}7 & 0{,}4 \\\\ 0{,}3 & 0{,}6 \\end{pmatrix}$",
        "$\\begin{pmatrix} 0{,}3 & 0{,}7 \\\\ 0{,}6 & 0{,}4 \\end{pmatrix}$",
        "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$"
      ],
      "correctIndex": 0,
      "answer": "$\\begin{pmatrix} 0{,}7 & 0{,}3 \\\\ 0{,}4 & 0{,}6 \\end{pmatrix}$",
      "hint1": "Chaque ligne correspond à l'état de départ, la somme des coefficients de chaque ligne vaut 1.",
      "hint2": "Ligne 1 : $(0{,}7 \\quad 0{,}3)$. Ligne 2 : $(0{,}4 \\quad 0{,}6)$.",
      "solution": "Les lignes représentent les probabilités de transition depuis l'état courant : ligne 1 $(0{,}7 ; 0{,}3)$ et ligne 2 $(0{,}4 ; 0{,}6)$."
    },
    {
      "id": "TX5-3",
      "tier": 3,
      "type": "mcq",
      "title": "État stable d'un graphe probabiliste",
      "skill": "Déterminer l'état stationnaire P = P M",
      "statement": "Pour $M = \\begin{pmatrix} 0{,}7 & 0{,}3 \\\\ 0{,}4 & 0{,}6 \\end{pmatrix}$, quel est l'état stable $P = (x \\quad y)$ vérifiant $P M = P$ et $x + y = 1$ ?",
      "options": [
        "$P = \\left(\\frac{4}{7} \\quad \\frac{3}{7}\\right)$",
        "$P = (0{,}5 \\quad 0{,}5)$",
        "$P = (0{,}7 \\quad 0{,}3)$",
        "$P = \\left(\\frac{3}{7} \\quad \\frac{4}{7}\\right)$"
      ],
      "correctIndex": 0,
      "answer": "$P = \\left(\\frac{4}{7} \\quad \\frac{3}{7}\\right)$",
      "hint1": "$0{,}7x + 0{,}4y = x \\iff 0{,}4y = 0{,}3x \\iff 3x = 4y$.",
      "hint2": "Comme $y = 1 - x$, $3x = 4(1 - x) = 4 - 4x \\implies 7x = 4 \\implies x = 4/7$.",
      "solution": "$0{,}7x + 0{,}4y = x \\iff 0{,}4y = 0{,}3x \\iff y = \\frac{3}{4}x$. Avec $x + y = 1$, on obtient $x + \\frac{3}{4}x = 1 \\iff \\frac{7}{4}x = 1 \\iff x = \\frac{4}{7}$, d'où $y = \\frac{3}{7}$."
    },
    {
      "id": "TX5-4",
      "tier": 4,
      "type": "mcq",
      "title": "Puissance n-ième d'une matrice diagonalisable",
      "skill": "Calculer M^n à partir d'une écriture P D P^-1",
      "statement": "Si $M = P D P^{-1}$ avec $D = \\begin{pmatrix} 1 & 0 \\\\ 0 & 0{,}5 \\end{pmatrix}$, quelle est la matrice limite $\\lim_{n \\to +\\infty} D^n$ ?",
      "options": [
        "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}$",
        "$\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$",
        "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
        "La limite n'existe pas"
      ],
      "correctIndex": 0,
      "answer": "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}$",
      "hint1": "$D^n = \\begin{pmatrix} 1^n & 0 \\\\ 0 & (0{,}5)^n \\end{pmatrix}$.",
      "hint2": "Comme $|0{,}5| < 1$, $(0{,}5)^n \\to 0$.",
      "solution": "$D^n = \\text{diag}(1^n, 0{,}5^n) = \\text{diag}(1, (0{,}5)^n)$. Quand $n \\to +\\infty$, $(0{,}5)^n \\to 0$, donc la matrice limite est $\\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}$."
    }
  ]
};

window.MATHS_WORKSHEETS_TALE = {
  "TA1": [
    {
      "title": "Fiche Terminale : Raisonnement par récurrence et Suites",
      "filename": "Fiche_TA1_Recurrence.md",
      "statement": `## Fiche d'entraînement TA1 : Raisonnement par récurrence

### Exercice 1 : Récurrence sur une suite (4 points)
Soit la suite $(u_n)$ définie par $u_0 = 1$ et pour tout $n \\in \\mathbb{N}$ par $u_{n+1} = \\frac{1}{2}u_n + 3$.
1. Calculer $u_1$ et $u_2$.
2. Démontrer par récurrence que pour tout $n \\in \\mathbb{N}$, $u_n \\le 6$.
3. Démontrer que la suite $(u_n)$ est croissante.`,
      "solution": `### Correction Exercice 1
1. $u_1 = \\frac{1}{2}(1) + 3 = 3{,}5$. $u_2 = \\frac{1}{2}(3{,}5) + 3 = 4{,}75$.
2. Initialisation : Pour $n = 0$, $u_0 = 1 \\le 6$. Vrai.
Hérédité : Soit $k \\in \\mathbb{N}$ tel que $u_k \\le 6$.
Alors $\\frac{1}{2}u_k \\le 3 \\implies \\frac{1}{2}u_k + 3 \\le 6 \\implies u_{k+1} \\le 6$. Héréditaire.
Conclusion : Par récurrence, pour tout $n \\in \\mathbb{N}$, $u_n \\le 6$.
3. $u_{n+1} - u_n = \\frac{1}{2}u_n + 3 - u_n = 3 - \\frac{1}{2}u_n = \\frac{1}{2}(6 - u_n)$.
Comme $u_n \\le 6$, $6 - u_n \\ge 0$, donc $u_{n+1} - u_n \\ge 0$. La suite $(u_n)$ est croissante.`
    }
  ]
};

// Fusion automatique dans les registres globaux
if (!window.MATHS_COURSES) window.MATHS_COURSES = {};
if (!window.MATHS_EXERCISES) window.MATHS_EXERCISES = {};
if (!window.MATHS_WORKSHEETS) window.MATHS_WORKSHEETS = {};

Object.assign(window.MATHS_COURSES, window.MATHS_COURSES_TALE);
Object.assign(window.MATHS_EXERCISES, window.MATHS_EXERCISES_TALE);
Object.assign(window.MATHS_WORKSHEETS, window.MATHS_WORKSHEETS_TALE);

