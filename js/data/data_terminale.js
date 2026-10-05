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
    }
  ],
  "TA2": [
    {
      "id": "TA2-1",
      "tier": 1,
      "type": "mcq",
      "title": "Limite d'un quotient de polynômes",
      "skill": "Lever une indétermination infini sur infini",
      "statement": "Quelle est la limite de $u_n = \\frac{4n^2 - 5n + 1}{2n^2 + 3}$ quand $n \\to +\\infty$ ?",
      "options": [
        "$2$",
        "$+\\infty$",
        "$0$",
        "$4$"
      ],
      "correctIndex": 0,
      "answer": "$2$",
      "hint1": "Factorise par le terme de plus haut degré $n^2$ au numérateur et au dénominateur.",
      "hint2": "Le quotient des monômes dominants est $\\frac{4n^2}{2n^2} = 2$.",
      "solution": "$\\lim_{n \\to +\\infty} u_n = \\lim_{n \\to +\\infty} \\frac{4n^2}{2n^2} = \\frac{4}{2} = 2$."
    }
  ],
  "TA3": [
    {
      "id": "TA3-1",
      "tier": 1,
      "type": "mcq",
      "title": "Application du corollaire du TVI",
      "skill": "Théorème de la bijection",
      "statement": "Soit $f$ continue et strictement croissante sur $[0 ; 5]$ telle que $f(0) = -3$ et $f(5) = 7$. Combien de solutions admet l'équation $f(x) = 0$ sur $[0 ; 5]$ ?",
      "options": [
        "Exactement 1 solution",
        "Au moins 2 solutions",
        "Aucune solution",
        "Une infinité"
      ],
      "correctIndex": 0,
      "answer": "Exactement 1 solution",
      "hint1": "Vérifie si 0 est compris entre $f(0)$ et $f(5)$, puis utilise la stricte monotonie.",
      "hint2": "Comme $0 \\in [-3 ; 7]$ et $f$ est continue et strictement monotone, la solution est unique.",
      "solution": "$f$ est continue et strictement monotone sur $[0 ; 5]$, et $0 \\in [f(0) ; f(5)] = [-3 ; 7]$. D'après le corollaire du TVI, l'équation $f(x) = 0$ admet une unique solution sur $[0 ; 5]$."
    }
  ],
  "TA4": [
    {
      "id": "TA4-1",
      "tier": 1,
      "type": "mcq",
      "title": "Convexité et signe de la dérivée seconde",
      "skill": "Déterminer la convexité d'une fonction",
      "statement": "Soit $f$ deux fois dérivable telle que $f''(x) = 6x - 18$. Sur quel intervalle $f$ est-elle convexe ?",
      "options": [
        "$[3 ; +\\infty[$",
        "$]-\\infty ; 3]$",
        "$[0 ; +\\infty[$",
        "Sur tout $\\mathbb{R}$"
      ],
      "correctIndex": 0,
      "answer": "$[3 ; +\\infty[$",
      "hint1": "$f$ est convexe là où $f''(x) \\ge 0$.",
      "hint2": "$6x - 18 \\ge 0 \\iff 6x \\ge 18 \\iff x \\ge 3$.",
      "solution": "$f$ est convexe si et seulement si $f''(x) \\ge 0 \\iff 6x - 18 \\ge 0 \\iff x \\ge 3$."
    }
  ],
  "TA5": [
    {
      "id": "TA5-1",
      "tier": 1,
      "type": "mcq",
      "title": "Propriété algébrique du logarithme",
      "skill": "Propriétés algébriques de ln",
      "statement": "Simplifier $\\ln(12) - \\ln(3)$.",
      "options": [
        "$\\ln(4)$",
        "$\\ln(9)$",
        "$4$",
        "$\\frac{\\ln(12)}{\\ln(3)}$"
      ],
      "correctIndex": 0,
      "answer": "$\\ln(4)$",
      "hint1": "$\\ln(a) - \\ln(b) = \\ln(a/b)$.",
      "hint2": "$\\ln(12/3) = \\ln(4) = 2\\ln(2)$.",
      "solution": "$\\ln(12) - \\ln(3) = \\ln\\left(\\frac{12}{3}\\right) = \\ln(4)$."
    }
  ],
  "TA6": [
    {
      "id": "TA6-1",
      "tier": 1,
      "type": "mcq",
      "title": "Équation différentielle linéaire",
      "skill": "Résoudre $y' = ay$",
      "statement": "Quelles sont les solutions sur $\\mathbb{R}$ de l'équation différentielle $y' + 4y = 0$ ?",
      "options": [
        "$y(x) = C e^{-4x}$ ($C \\in \\mathbb{R}$)",
        "$y(x) = C e^{4x}$ ($C \\in \\mathbb{R}$)",
        "$y(x) = -4x + C$",
        "$y(x) = C e^{-x/4}$"
      ],
      "correctIndex": 0,
      "answer": "$y(x) = C e^{-4x}$ ($C \\in \\mathbb{R}$)",
      "hint1": "Mets l'équation sous la forme standard $y' = ay$.",
      "hint2": "$y' = -4y$, donc $a = -4$. Les solutions sont de la forme $C e^{ax}$.",
      "solution": "$y' + 4y = 0 \\iff y' = -4y$. Les solutions sont donc les fonctions de la forme $y(x) = C e^{-4x}$ avec $C \\in \\mathbb{R}$."
    }
  ],
  "TA7": [
    {
      "id": "TA7-1",
      "tier": 1,
      "type": "mcq",
      "title": "Calcul d'intégrale élémentaire",
      "skill": "Calculer $\\int_a^b f(t)dt$",
      "statement": "Calculer l'intégrale $I = \\int_0^2 (3x^2 + 1) dx$.",
      "options": [
        "$10$",
        "$8$",
        "$12$",
        "$6$"
      ],
      "correctIndex": 0,
      "answer": "$10$",
      "hint1": "Trouve une primitive de $3x^2 + 1$.",
      "hint2": "Une primitive est $F(x) = x^3 + x$. Calcule $F(2) - F(0)$.",
      "solution": "$F(x) = x^3 + x$. $I = F(2) - F(0) = (2^3 + 2) - (0) = 8 + 2 = 10$."
    }
  ],
  "TG1": [
    {
      "id": "TG1-1",
      "tier": 1,
      "type": "mcq",
      "title": "Représentation paramétrique de droite 3D",
      "skill": "Identifier un vecteur directeur dans l'espace",
      "statement": "Quel est un vecteur directeur de la droite définie par $\\begin{cases} x = 2 - 3t \\\\ y = 5 + 4t \\\\ z = -1 + 7t \\end{cases}$ ($t \\in \\mathbb{R}$) ?",
      "options": [
        "$\\vec{u}(-3 ; 4 ; 7)$",
        "$\\vec{u}(2 ; 5 ; -1)$",
        "$\\vec{u}(3 ; 4 ; 7)$",
        "$\\vec{u}(-3 ; 4 ; -7)$"
      ],
      "correctIndex": 0,
      "answer": "$\\vec{u}(-3 ; 4 ; 7)$",
      "hint1": "Les coordonnées du vecteur directeur sont les coefficients du paramètre $t$.",
      "hint2": "Les coefficients devant $t$ sont respectivement $-3, 4, 7$.",
      "solution": "Dans le système paramétrique, les coefficients de $t$ fournissent les composantes d'un vecteur directeur : $\\vec{u}(-3 ; 4 ; 7)$."
    }
  ],
  "TG2": [
    {
      "id": "TG2-1",
      "tier": 1,
      "type": "mcq",
      "title": "Équation cartésienne de plan",
      "skill": "Déterminer un vecteur normal d'un plan",
      "statement": "Quel est un vecteur normal au plan $(P)$ d'équation $2x - 3y + 5z - 8 = 0$ ?",
      "options": [
        "$\\vec{n}(2 ; -3 ; 5)$",
        "$\\vec{n}(2 ; 3 ; 5)$",
        "$\\vec{n}(-3 ; 2 ; 5)$",
        "$\\vec{n}(2 ; -3 ; -8)$"
      ],
      "correctIndex": 0,
      "answer": "$\\vec{n}(2 ; -3 ; 5)$",
      "hint1": "Pour un plan d'équation $ax + by + cz + d = 0$, un vecteur normal est $\\vec{n}(a ; b ; c)$.",
      "hint2": "Ici $a = 2, b = -3, c = 5$.",
      "solution": "Le plan a pour équation $2x - 3y + 5z - 8 = 0$. Un vecteur normal est donc directement $\\vec{n}(2 ; -3 ; 5)$."
    }
  ],
  "TS1": [
    {
      "id": "TS1-1",
      "tier": 1,
      "type": "mcq",
      "title": "Espérance d'une loi binomiale",
      "skill": "Calculer l'espérance $E(X) = np$",
      "statement": "Soit $X \\sim \\mathcal{B}(50 ; 0{,}2)$. Quelle est l'espérance mathématique de $X$ ?",
      "options": [
        "$10$",
        "$8$",
        "$25$",
        "$5$"
      ],
      "correctIndex": 0,
      "answer": "$10$",
      "hint1": "Formule : $E(X) = n \\times p$.",
      "hint2": "$50 \\times 0{,}2 = 10$.",
      "solution": "$E(X) = n \\times p = 50 \\times 0{,}2 = 10$."
    }
  ],
  "TS2": [
    {
      "id": "TS2-1",
      "tier": 1,
      "type": "mcq",
      "title": "Inégalité de Bienaymé-Tchebychev",
      "skill": "Majorer une probabilité d'écart",
      "statement": "Soit $X$ une variable aléatoire avec $E(X) = 20$ et $V(X) = 4$. Quelle majoration de $P(|X - 20| \\ge 6)$ donne l'inégalité de Bienaymé-Tchebychev ?",
      "options": [
        "$\\le \\frac{1}{9}$",
        "$\\le \\frac{4}{6}$",
        "$\\le \\frac{1}{3}$",
        "$\\le \\frac{2}{3}$"
      ],
      "correctIndex": 0,
      "answer": "$\\le \\frac{1}{9}$",
      "hint1": "Formule : $P(|X - E(X)| \\ge \\delta) \\le \\frac{V(X)}{\\delta^2}$.",
      "hint2": "$V(X) = 4$ et $\\delta = 6$, donc $\\frac{4}{6^2} = \\frac{4}{36} = \\frac{1}{9}$.",
      "solution": "$P(|X - 20| \\ge 6) \\le \\frac{V(X)}{6^2} = \\frac{4}{36} = \\frac{1}{9}$."
    }
  ],
  "TX1": [
    {
      "id": "TX1-1",
      "tier": 1,
      "type": "mcq",
      "title": "Conjugué et partie réelle",
      "skill": "Calculer avec les nombres complexes",
      "statement": "Soit $z = 3 - 5i$. Quel est le conjugué $\\bar{z}$ et que vaut $z\\bar{z}$ ?",
      "options": [
        "$\\bar{z} = 3 + 5i$ et $z\\bar{z} = 34$",
        "$\\bar{z} = -3 + 5i$ et $z\\bar{z} = -16$",
        "$\\bar{z} = 3 + 5i$ et $z\\bar{z} = 4$",
        "$\\bar{z} = 5 - 3i$ et $z\\bar{z} = 34$"
      ],
      "correctIndex": 0,
      "answer": "$\\bar{z} = 3 + 5i$ et $z\\bar{z} = 34$",
      "hint1": "$\\bar{z} = a - ib$ et $z\\bar{z} = a^2 + b^2$.",
      "hint2": "$3^2 + (-5)^2 = 9 + 25 = 34$.",
      "solution": "$\\bar{z} = 3 + 5i$ et $z\\bar{z} = 3^2 + (-5)^2 = 9 + 25 = 34$."
    }
  ],
  "TX2": [
    {
      "id": "TX2-1",
      "tier": 1,
      "type": "mcq",
      "title": "Module d'un nombre complexe",
      "skill": "Calculer $|z|$",
      "statement": "Quel est le module du nombre complexe $z = 3 - 4i$ ?",
      "options": [
        "$5$",
        "$7$",
        "$\\sqrt{7}$",
        "$25$"
      ],
      "correctIndex": 0,
      "answer": "$5$",
      "hint1": "Formule : $|z| = \\sqrt{a^2 + b^2}$.",
      "hint2": "$\\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = \\sqrt{25}$.",
      "solution": "$|z| = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$."
    }
  ],
  "TX3": [
    {
      "id": "TX3-1",
      "tier": 1,
      "type": "mcq",
      "title": "Calcul de congruence",
      "skill": "Manipuler les congruences modulo $n$",
      "statement": "Sachant que $a \\equiv 5 \\pmod{8}$ et $b \\equiv 6 \\pmod{8}$, à quoi est congru $a \\times b \\pmod{8}$ ?",
      "options": [
        "$6$",
        "$30$",
        "$2$",
        "$4$"
      ],
      "correctIndex": 0,
      "answer": "$6$",
      "hint1": "$a \\times b \\equiv 5 \\times 6 \\pmod{8}$.",
      "hint2": "$5 \\times 6 = 30$. Trouve le reste de 30 divisé par 8 ($30 = 8 \\times 3 + 6$).",
      "solution": "$a \\times b \\equiv 5 \\times 6 = 30 \\pmod{8}$. Comme $30 = 8 \\times 3 + 6$, on a $a \\times b \\equiv 6 \\pmod{8}$."
    }
  ],
  "TX4": [
    {
      "id": "TX4-1",
      "tier": 1,
      "type": "mcq",
      "title": "Théorème de Bézout",
      "skill": "Identifier des entiers premiers entre eux",
      "statement": "Sachant que $17 \\times (-5) + 12 \\times 7 = -85 + 84 = -1$, que peut-on déduire de 17 et 12 ?",
      "options": [
        "Ils sont premiers entre eux car $17(5) + 12(-7) = 1$",
        "Ils ne sont pas premiers entre eux",
        "Leur PGCD vaut 2",
        "On ne peut rien conclure"
      ],
      "correctIndex": 0,
      "answer": "Ils sont premiers entre eux car $17(5) + 12(-7) = 1$",
      "hint1": "Multiplie l'égalité par $-1$ pour obtenir $17u + 12v = 1$.",
      "hint2": "D'après le théorème de Bézout, si $au + bv = 1$, alors $\\text{PGCD}(a, b) = 1$.",
      "solution": "En multipliant par $-1$, on a $17(5) + 12(-7) = 1$. D'après le théorème de Bézout, 17 et 12 sont premiers entre eux."
    }
  ],
  "TX5": [
    {
      "id": "TX5-1",
      "tier": 1,
      "type": "mcq",
      "title": "Produit matriciel",
      "skill": "Multiplier deux matrices $2 \\times 2$",
      "statement": "Calculer le produit $\\begin{pmatrix} 1 & 2 \\\\ 0 & 3 \\end{pmatrix} \\begin{pmatrix} 4 & 1 \\\\ 2 & 5 \\end{pmatrix}$.",
      "options": [
        "$\\begin{pmatrix} 8 & 11 \\\\ 6 & 15 \\end{pmatrix}$",
        "$\\begin{pmatrix} 4 & 2 \\\\ 0 & 15 \\end{pmatrix}$",
        "$\\begin{pmatrix} 8 & 15 \\\\ 6 & 11 \\end{pmatrix}$",
        "$\\begin{pmatrix} 11 & 8 \\\\ 15 & 6 \\end{pmatrix}$"
      ],
      "correctIndex": 0,
      "answer": "$\\begin{pmatrix} 8 & 11 \\\\ 6 & 15 \\end{pmatrix}$",
      "hint1": "Ligne 1 : $1(4) + 2(2) = 8$ et $1(1) + 2(5) = 11$.",
      "hint2": "Ligne 2 : $0(4) + 3(2) = 6$ et $0(1) + 3(5) = 15$.",
      "solution": "Produit ligne par colonne : $c_{11} = 1(4)+2(2)=8$, $c_{12} = 1(1)+2(5)=11$, $c_{21} = 0(4)+3(2)=6$, $c_{22} = 0(1)+3(5)=15$."
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

