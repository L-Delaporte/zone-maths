/**
 * Données pédagogiques officielles de la classe de Terminale (Spécialité & Mathématiques Expertes)
 * Conforme aux programmes officiels de l'Éducation nationale
 */

window.MATHS_COURSES_TALE = {
  "TA1": {
    "title": "TA1 : Le raisonnement par récurrence",
    "domain": "Analyse et Raisonnement",
    "objectives": [
      "Maîtriser les trois étapes incontournables d'une démonstration par récurrence : Initialisation, Hérédité, Conclusion.",
      "Démontrer des formules explicites de sommes et de termes généraux de suites.",
      "Démontrer des inégalités valables pour tout entier naturel $n \\ge n_0$.",
      "Éviter les erreurs de logique classiques (oubli de l'initialisation, circularité).",
      "Démontrer l'inégalité de Bernoulli et des propriétés de divisibilité par récurrence.",
      "Utiliser la récurrence pour étudier une suite définie par $u_{n+1} = f(u_n)$ (encadrement, sens de variation)."
    ],
    "keyPoints": [
      {
        "title": "1. Principe du raisonnement par récurrence",
        "content": "Soit $P(n)$ une propriété dépendant d'un entier naturel $n$, et $n_0 \\in \\mathbb{N}$ :\n1. **Initialisation** : On vérifie que la propriété $P(n_0)$ est **vraie** pour le premier rang $n_0$.\n2. **Hérédité** : On suppose que pour un entier $k \\ge n_0$ fixé quelconque, la propriété $P(k)$ est vraie (c'est l'**hypothèse de récurrence**). On démontre alors que $P(k+1)$ est vraie sous cette hypothèse.\n3. **Conclusion** : Par le principe de récurrence, la propriété $P(n)$ est vraie pour tout entier $n \\ge n_0$."
      },
      {
        "title": "2. L'image des dominos et le rôle de chaque étape",
        "content": "On peut se représenter une récurrence comme une file infinie de dominos :\n• l'**initialisation** fait tomber le premier domino ;\n• l'**hérédité** garantit que si un domino tombe, le suivant tombe aussi.\nLes deux étapes sont **indispensables** :\n• Sans hérédité, on ne sait rien au-delà des premiers rangs.\n• Sans initialisation, rien ne démarre. Exemple : la propriété $P(n)$ : « $9$ divise $10^n + 1$ » est héréditaire, car si $10^k + 1 = 9m$, alors $10^{k+1} + 1 = 10(10^k + 1) - 9 = 9(10m - 1)$. Pourtant elle n'est vraie pour aucun $n$ : $10^n + 1$ a pour somme des chiffres $2$, il n'est jamais multiple de $9$."
      },
      {
        "title": "3. Inégalité de Bernoulli (démonstration exigible)",
        "content": "Pour tout réel $a > 0$ et tout entier naturel $n$ :\n$$(1 + a)^n \\ge 1 + na$$\n**Conséquence importante** : si $q > 1$, on écrit $q = 1 + a$ avec $a > 0$, donc $q^n \\ge 1 + na$. Comme $\\lim\\limits_{n \\to +\\infty} (1 + na) = +\\infty$, on obtient par comparaison $\\lim\\limits_{n \\to +\\infty} q^n = +\\infty$ (voir chapitre TA2)."
      },
      {
        "title": "4. Récurrence et suites $u_{n+1} = f(u_n)$",
        "content": "Si $f$ est **croissante** sur un intervalle $I$ et si tous les termes de la suite sont dans $I$, alors une récurrence permet de « transporter » une inégalité d'un rang au suivant :\n$$a \\le u_k \\le u_{k+1} \\le b \\implies f(a) \\le f(u_k) \\le f(u_{k+1}) \\le f(b)$$\nc'est-à-dire $f(a) \\le u_{k+1} \\le u_{k+2} \\le f(b)$.\nOn démontre ainsi, en une seule récurrence, que la suite est **croissante** et **bornée**.\n• Attention : si $f$ est décroissante, l'ordre des inégalités s'inverse et la suite n'est en général pas monotone."
      },
      {
        "title": "5. Conjecturer avec Python, démontrer par récurrence",
        "content": "Un programme peut calculer les premiers termes et **suggérer** une propriété, mais il ne la **démontre** pas :\n```python\nfrom math import sqrt\nu = 0\nfor n in range(10):\n    print(n, u)\n    u = sqrt(3*u + 4)\n```\nLes valeurs affichées ($0$ ; $2$ ; $3{,}16$ ; $3{,}73$ ; …) laissent penser que la suite est croissante et majorée par $4$ : c'est la récurrence qui le prouvera (voir méthode ci-dessous)."
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
      },
      {
        "title": "Méthode : Démontrer une inégalité par récurrence (Bernoulli)",
        "example": "Soit $a > 0$. Démontrer que pour tout $n \\in \\mathbb{N}$, $(1 + a)^n \\ge 1 + na$.",
        "steps": [
          "**Étape 1 (Énoncé)** : Pour $n \\in \\mathbb{N}$, on note $P(n)$ : « $(1 + a)^n \\ge 1 + na$ ».",
          "**Étape 2 (Initialisation, $n = 0$)** : $(1 + a)^0 = 1$ et $1 + 0 \\times a = 1$. On a bien $1 \\ge 1$, donc $P(0)$ est vraie.",
          "**Étape 3 (Hérédité)** : Soit $k \\in \\mathbb{N}$ fixé tel que $(1 + a)^k \\ge 1 + ka$ (HR). Comme $1 + a > 0$, on peut multiplier les deux membres par $1 + a$ sans changer le sens :\n$$(1 + a)^{k+1} \\ge (1 + ka)(1 + a) = 1 + a + ka + ka^2 = 1 + (k+1)a + ka^2$$\nOr $ka^2 \\ge 0$, donc $(1 + a)^{k+1} \\ge 1 + (k+1)a$ : $P(k+1)$ est vraie.",
          "**Conclusion** : Par récurrence, pour tout $n \\in \\mathbb{N}$, $(1 + a)^n \\ge 1 + na$."
        ]
      },
      {
        "title": "Méthode : Encadrer et étudier les variations d'une suite récurrente",
        "example": "Soit $(u_n)$ définie par $u_0 = 0$ et $u_{n+1} = \\sqrt{3u_n + 4}$. Démontrer que pour tout $n \\in \\mathbb{N}$, $0 \\le u_n \\le u_{n+1} \\le 4$.",
        "steps": [
          "**Étape 1 (Fonction associée)** : $u_{n+1} = f(u_n)$ avec $f(x) = \\sqrt{3x + 4}$. Sur $[0 ; +\\infty[$, $x \\mapsto 3x + 4$ est croissante et positive, et la racine carrée est croissante, donc $f$ est **croissante** sur $[0 ; +\\infty[$.",
          "**Étape 2 (Initialisation)** : $u_0 = 0$ et $u_1 = \\sqrt{4} = 2$. On a bien $0 \\le 0 \\le 2 \\le 4$.",
          "**Étape 3 (Hérédité)** : Soit $k \\in \\mathbb{N}$ tel que $0 \\le u_k \\le u_{k+1} \\le 4$. Comme $f$ est croissante sur $[0 ; +\\infty[$ :\n$$f(0) \\le f(u_k) \\le f(u_{k+1}) \\le f(4)$$\nsoit $2 \\le u_{k+1} \\le u_{k+2} \\le \\sqrt{16} = 4$. Et puisque $0 \\le 2$, on obtient $0 \\le u_{k+1} \\le u_{k+2} \\le 4$.",
          "**Conclusion** : Pour tout $n$, $0 \\le u_n \\le u_{n+1} \\le 4$ : la suite $(u_n)$ est croissante et majorée par $4$. Elle converge donc (théorème de convergence monotone, chapitre TA2)."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne jamais écrire « supposons que pour tout $k$, $P(k)$ est vraie » : cela reviendrait à supposer ce que l'on veut démontrer ! Il faut écrire « soit $k$ un entier fixé ».",
      "⚠️ Une propriété peut être héréditaire mais fausse pour tout $n$ si l'initialisation échoue !",
      "⚠️ Vérifier une propriété sur de nombreux exemples (à la main ou avec Python) n'est **pas** une démonstration : $n^2 + n + 41$ est premier pour $n = 0, 1, \\dots, 39$, mais pour $n = 40$ on obtient $1681 = 41^2$.",
      "⚠️ $P(n)$ est une **phrase** (vraie ou fausse), pas un nombre : écrire « $P(n)$ : $u_n \\le 4$ » et non « $P(n) = u_n$ ».",
      "⚠️ Dans l'hérédité, avant de multiplier une inégalité par une quantité, vérifier que celle-ci est **positive** (dans Bernoulli, $1 + a > 0$)."
    ],
    "flashcards": [
      {
        "q": "Quelles sont les 3 étapes d'une démonstration par récurrence ?",
        "a": "1. Initialisation, 2. Hérédité, 3. Conclusion."
      },
      {
        "q": "Dans l'étape d'hérédité, que suppose-t-on et que démontre-t-on ?",
        "a": "On suppose $P(k)$ vraie pour un entier fixé $k \\ge n_0$, et on démontre que $P(k+1)$ est vraie."
      },
      {
        "q": "Énoncer l'inégalité de Bernoulli.",
        "a": "Pour tout réel $a > 0$ et tout $n \\in \\mathbb{N}$ : $(1 + a)^n \\ge 1 + na$."
      },
      {
        "q": "Une propriété héréditaire est-elle forcément vraie ?",
        "a": "Non : il faut aussi l'initialisation. Exemple : « $9$ divise $10^n + 1$ » est héréditaire mais toujours fausse."
      },
      {
        "q": "Pour montrer par récurrence que $u_n \\le u_{n+1}$ avec $u_{n+1} = f(u_n)$, quelle propriété de $f$ est utile ?",
        "a": "La **croissance** de $f$ sur un intervalle contenant tous les termes de la suite."
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
      "Appliquer le corollaire du TVI (théorème de la bijection) pour prouver l'existence et l'unicité d'une solution $f(x) = k$.",
      "Connaître les croissances comparées de $x^n$ et $e^x$ et lever les formes indéterminées correspondantes.",
      "Encadrer une solution d'équation par dichotomie (à la main ou avec Python)."
    ],
    "keyPoints": [
      {
        "title": "1. Théorème des Valeurs Intermédiaires (TVI) et Corollaire",
        "content": "• **Théorème des Valeurs Intermédiaires (TVI)** : Si $f$ est une fonction **continue** sur un intervalle $[a ; b]$, alors pour tout réel $k$ compris entre $f(a)$ et $f(b)$, il existe **au moins un réel** $c \\in [a ; b]$ tel que $f(c) = k$.\n• **Corollaire de la stricte monotonie (Théorème de la bijection)** :\nSi $f$ est **continue** ET **strictement monotone** (croissante ou décroissante) sur $[a ; b]$, alors pour tout $k$ compris entre $f(a)$ et $f(b)$, l'équation $f(x) = k$ admet **une unique solution** dans $[a ; b]$."
      },
      {
        "title": "2. Limites usuelles et asymptotes",
        "content": "• Pour $n \\ge 1$ entier : $\\lim\\limits_{x \\to +\\infty} x^n = +\\infty$ et $\\lim\\limits_{x \\to \\pm\\infty} \\dfrac{1}{x^n} = 0$.\n• $\\lim\\limits_{x \\to 0^+} \\dfrac{1}{x} = +\\infty$ et $\\lim\\limits_{x \\to 0^-} \\dfrac{1}{x} = -\\infty$ ; $\\lim\\limits_{x \\to +\\infty} \\sqrt{x} = +\\infty$.\n• $\\lim\\limits_{x \\to -\\infty} e^x = 0$ et $\\lim\\limits_{x \\to +\\infty} e^x = +\\infty$.\n• **Asymptotes** : si $\\lim\\limits_{x \\to a} f(x) = \\pm\\infty$ (à gauche ou à droite), la droite $x = a$ est **asymptote verticale** ; si $\\lim\\limits_{x \\to \\pm\\infty} f(x) = \\ell$, la droite $y = \\ell$ est **asymptote horizontale**."
      },
      {
        "title": "3. Croissances comparées, composition, comparaison",
        "content": "• **Croissances comparées** : pour tout entier $n \\ge 1$,\n$$\\lim_{x \\to +\\infty} \\frac{e^x}{x^n} = +\\infty \\qquad \\text{et} \\qquad \\lim_{x \\to -\\infty} x^n e^x = 0$$\n« L'exponentielle l'emporte sur les puissances. »\n• **Composition** : si $\\lim\\limits_{x \\to a} u(x) = b$ et $\\lim\\limits_{X \\to b} g(X) = c$, alors $\\lim\\limits_{x \\to a} g(u(x)) = c$. Exemple : $\\lim\\limits_{x \\to +\\infty} e^{-x^2} = 0$ car $-x^2 \\to -\\infty$ et $e^X \\to 0$ quand $X \\to -\\infty$.\n• **Comparaison et gendarmes** : les théorèmes vus pour les suites restent valables pour les fonctions (en $+\\infty$, en $-\\infty$ ou en un réel $a$)."
      },
      {
        "title": "4. Continuité",
        "content": "• $f$ est **continue en $a$** si $\\lim\\limits_{x \\to a} f(x) = f(a)$ ; elle est continue sur un intervalle $I$ si elle est continue en tout point de $I$. Graphiquement : la courbe se trace « sans lever le crayon ».\n• Les fonctions polynômes, rationnelles, racine carrée, exponentielle, valeur absolue, sinus et cosinus sont continues sur tout intervalle de leur ensemble de définition. Sommes, produits, quotients et composées de fonctions continues sont continues.\n• **Théorème** : toute fonction **dérivable** sur $I$ est **continue** sur $I$. La réciproque est fausse : $x \\mapsto |x|$ est continue en $0$ mais pas dérivable en $0$.\n• **Suites** : si $u_n \\to \\ell$ et si $f$ est continue en $\\ell$, alors $f(u_n) \\to f(\\ell)$."
      },
      {
        "title": "5. Corollaire du TVI sur un intervalle quelconque",
        "content": "Le corollaire s'étend aux intervalles ouverts ou non bornés en remplaçant les images des bornes par les **limites** : si $f$ est continue et strictement croissante sur $]a ; b[$ avec $\\lim\\limits_{x \\to a} f(x) = L_1$ et $\\lim\\limits_{x \\to b} f(x) = L_2$, alors pour tout $k \\in \\, ]L_1 ; L_2[$, l'équation $f(x) = k$ admet une **unique** solution dans $]a ; b[$.\nExemple : $x \\mapsto e^x + x$ est continue, strictement croissante sur $\\mathbb{R}$, de limites $-\\infty$ et $+\\infty$ : l'équation $e^x + x = 0$ a une unique solution réelle."
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
      },
      {
        "title": "Méthode : Lever une forme indéterminée par croissances comparées",
        "example": "Déterminer $\\lim\\limits_{x \\to +\\infty} (e^x - x^2)$.",
        "steps": [
          "**Étape 1 (Diagnostic)** : $e^x \\to +\\infty$ et $x^2 \\to +\\infty$ : on a une forme indéterminée « $\\infty - \\infty$ ».",
          "**Étape 2 (Factorisation par le terme dominant)** : pour $x > 0$, $e^x - x^2 = e^x\\left(1 - \\dfrac{x^2}{e^x}\\right)$.",
          "**Étape 3 (Limites)** : par croissances comparées, $\\dfrac{e^x}{x^2} \\to +\\infty$, donc $\\dfrac{x^2}{e^x} \\to 0$ et $1 - \\dfrac{x^2}{e^x} \\to 1$.",
          "**Conclusion** : par produit, $\\lim\\limits_{x \\to +\\infty} (e^x - x^2) = +\\infty$."
        ]
      },
      {
        "title": "Méthode : Étudier une limite en un point et en déduire les asymptotes",
        "example": "Soit $f(x) = \\dfrac{2x + 1}{x - 3}$ sur $\\mathbb{R} \\setminus \\{3\\}$. Étudier les limites en $3$ et en $\\pm\\infty$.",
        "steps": [
          "**Étape 1 (Limite en 3)** : le numérateur tend vers $2 \\times 3 + 1 = 7 > 0$. Le dénominateur tend vers $0$ : il est positif si $x > 3$ et négatif si $x < 3$.\nDonc $\\lim\\limits_{x \\to 3^+} f(x) = +\\infty$ et $\\lim\\limits_{x \\to 3^-} f(x) = -\\infty$.",
          "**Étape 2 (Limites en l'infini)** : pour $x \\ne 0$, $f(x) = \\dfrac{2 + \\frac{1}{x}}{1 - \\frac{3}{x}} \\to \\dfrac{2}{1} = 2$ en $+\\infty$ et en $-\\infty$.",
          "**Conclusion** : la courbe admet une asymptote verticale d'équation $x = 3$ et une asymptote horizontale d'équation $y = 2$ en $+\\infty$ et en $-\\infty$."
        ]
      },
      {
        "title": "Méthode : Encadrer la solution $\\alpha$ par dichotomie",
        "example": "On sait que $f(x) = x^3 + 2x - 5$ s'annule une seule fois en $\\alpha \\in [1 ; 2]$. Donner un encadrement de $\\alpha$ d'amplitude $10^{-2}$.",
        "steps": [
          "**Étape 1 (Principe)** : $f$ est strictement croissante ; si $f(a) < 0 < f(b)$, alors $a < \\alpha < b$. On coupe l'intervalle en deux et on garde la moitié où le signe change.",
          "**Étape 2 (Calculs)** : $f(1{,}3) = -0{,}203 < 0$ et $f(1{,}4) = 0{,}544 > 0$, donc $1{,}3 < \\alpha < 1{,}4$. Puis $f(1{,}32) = -0{,}060032 < 0$ et $f(1{,}33) = 0{,}012637 > 0$.",
          "**Étape 3 (Programme)** :\n```python\ndef f(x):\n    return x**3 + 2*x - 5\n\na, b = 1, 2\nwhile b - a > 0.01:\n    m = (a + b) / 2\n    if f(m) < 0:\n        a = m\n    else:\n        b = m\nprint(a, b)\n```",
          "**Conclusion** : $1{,}32 < \\alpha < 1{,}33$."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour l'unicité de la solution, l'hypothèse de **stricte monotonie** est indispensable !",
      "⚠️ Ne jamais oublier de mentionner explicitement la **continuité** de la fonction.",
      "⚠️ « $\\frac{\\infty}{\\infty} = 1$ » et « $\\infty - \\infty = 0$ » sont faux : ce sont des **formes indéterminées**, il faut transformer l'expression.",
      "⚠️ En un point où le dénominateur s'annule, étudier **séparément** la limite à gauche et à droite : le signe du dénominateur peut changer.",
      "⚠️ Sans continuité, le TVI ne s'applique pas : la fonction partie entière vaut $0$ en $0$ et $1$ en $1$, mais ne prend jamais la valeur $0{,}5$."
    ],
    "flashcards": [
      {
        "q": "Quelles sont les deux conditions requises pour appliquer le corollaire du TVI (unicité) ?",
        "a": "La fonction doit être **continue** et **strictement monotone** sur l'intervalle."
      },
      {
        "q": "Si $\\lim_{x \\to +\\infty} f(x) = 3$, quelle asymptote admet la courbe de $f$ ?",
        "a": "Une asymptote horizontale d'équation $y = 3$ au voisinage de $+\\infty$."
      },
      {
        "q": "Que vaut $\\lim\\limits_{x \\to +\\infty} \\dfrac{e^x}{x}$ ?",
        "a": "$+\\infty$ (croissances comparées)."
      },
      {
        "q": "Une fonction continue en $a$ est-elle dérivable en $a$ ?",
        "a": "Pas forcément : $x \\mapsto |x|$ est continue mais non dérivable en $0$. En revanche, dérivable implique continue."
      },
      {
        "q": "Que vaut $\\lim\\limits_{x \\to -\\infty} x e^x$ ?",
        "a": "$0$ (croissances comparées)."
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
      "Connaître les limites usuelles et croissances comparées : $\\lim_{x \\to +\\infty} \\frac{\\ln(x)}{x} = 0$ et $\\lim_{x \\to 0^+} x\\ln(x) = 0$.",
      "Résoudre des équations et inéquations faisant intervenir $\\ln$ en précisant le domaine de validité.",
      "Étudier une fonction faisant intervenir $\\ln$ (dérivée, variations, limites)."
    ],
    "keyPoints": [
      {
        "title": "1. Propriétés algébriques fondamentales de $\\ln$",
        "content": "Pour tous réels $a, b > 0$ :\n• $\\ln(1) = 0$ et $\\ln(e) = 1$\n• $\\ln(ab) = \\ln(a) + \\ln(b)$\n• $\\ln\\left(\\frac{a}{b}\\right) = \\ln(a) - \\ln(b)$\n• $\\ln(a^n) = n\\ln(a)$ pour tout $n \\in \\mathbb{Z}$\n• Pour tout $x > 0$, $e^{\\ln(x)} = x$, et pour tout $x \\in \\mathbb{R}$, $\\ln(e^x) = x$."
      },
      {
        "title": "2. Dérivée et croissances comparées",
        "content": "• Dérivée : $(\\ln(x))' = \\frac{1}{x} > 0$ pour tout $x > 0$ (fonction strictement croissante sur $]0 ; +\\infty[$).\n• Dérivée composée : $(\\ln(u(x)))' = \\frac{u'(x)}{u(x)}$ (sur tout intervalle où $u(x) > 0$).\n• **Croissances comparées en $+\\infty$** : L'exponentielle l'emporte sur toute puissance de $x$, qui l'emporte sur le logarithme :\n$$\\lim_{x \\to +\\infty} \\frac{\\ln(x)}{x^n} = 0 \\quad (n > 0)$$"
      },
      {
        "title": "3. Définition, variations et signe",
        "content": "Pour tout $x > 0$, $\\ln(x)$ est l'**unique** réel $y$ tel que $e^y = x$. La courbe de $\\ln$ est la symétrique de celle de $\\exp$ par rapport à la droite $y = x$.\n• $\\ln$ est **strictement croissante** sur $]0 ; +\\infty[$, d'où pour $a, b > 0$ :\n$$\\ln(a) = \\ln(b) \\iff a = b \\qquad \\ln(a) < \\ln(b) \\iff a < b$$\n• **Signe** : $\\ln(x) < 0$ si $0 < x < 1$, $\\ln(1) = 0$, $\\ln(x) > 0$ si $x > 1$.\n• **Limites aux bornes** : $\\lim\\limits_{x \\to 0^+} \\ln(x) = -\\infty$ (asymptote verticale $x = 0$) et $\\lim\\limits_{x \\to +\\infty} \\ln(x) = +\\infty$."
      },
      {
        "title": "4. Limites à connaître",
        "content": "• $\\lim\\limits_{x \\to 0} \\dfrac{\\ln(1 + x)}{x} = 1$ : c'est le nombre dérivé de $\\ln$ en $1$.\n• Pour tout entier $n \\ge 1$ : $\\lim\\limits_{x \\to +\\infty} \\dfrac{\\ln(x)}{x^n} = 0$ et $\\lim\\limits_{x \\to 0^+} x^n \\ln(x) = 0$.\n« Les puissances de $x$ l'emportent sur le logarithme. »"
      },
      {
        "title": "5. Fonctions $\\ln(u)$ : domaine et variations",
        "content": "• $\\ln(u(x))$ n'existe que si $u(x) > 0$ : le domaine se détermine en résolvant cette inéquation.\n• Sur un intervalle où $u > 0$ et $u$ dérivable, $(\\ln u)' = \\dfrac{u'}{u}$ a le signe de $u'$ : **$\\ln(u)$ a les mêmes variations que $u$**.\nExemple : $g(x) = \\ln(x^2 + 1)$ est définie sur $\\mathbb{R}$, $g'(x) = \\dfrac{2x}{x^2 + 1}$ ; $g$ est décroissante sur $]-\\infty ; 0]$ et croissante sur $[0 ; +\\infty[$.\n• Le logarithme décimal $\\log(x) = \\dfrac{\\ln(x)}{\\ln(10)}$ vérifie $\\log(10^n) = n$ (utilisé en chimie pour le pH, en acoustique pour les décibels)."
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
      },
      {
        "title": "Méthode : Résoudre une équation avec des logarithmes",
        "example": "Résoudre dans $\\mathbb{R}$ l'équation $\\ln(x) + \\ln(x - 2) = \\ln(3)$.",
        "steps": [
          "**Étape 1 (Domaine)** : il faut $x > 0$ et $x - 2 > 0$, soit $x > 2$. On résout sur $]2 ; +\\infty[$.",
          "**Étape 2 (Regroupement)** : $\\ln(x) + \\ln(x - 2) = \\ln\\big(x(x - 2)\\big)$, donc l'équation devient $\\ln(x^2 - 2x) = \\ln(3)$, soit $x^2 - 2x = 3$ ($\\ln$ est strictement croissante).",
          "**Étape 3 (Résolution)** : $x^2 - 2x - 3 = 0 \\iff (x - 3)(x + 1) = 0 \\iff x = 3$ ou $x = -1$.",
          "**Conclusion** : $-1 \\notin \\, ]2 ; +\\infty[$, donc $\\mathcal{S} = \\{3\\}$. Vérification : $\\ln(3) + \\ln(1) = \\ln(3)$."
        ]
      },
      {
        "title": "Méthode : Étudier une fonction avec $\\ln$",
        "example": "Étudier la fonction $f(x) = \\dfrac{\\ln(x)}{x}$ sur $]0 ; +\\infty[$.",
        "steps": [
          "**Étape 1 (Dérivée)** : avec $u = \\ln$ et $v(x) = x$, $f'(x) = \\dfrac{\\frac{1}{x} \\times x - \\ln(x) \\times 1}{x^2} = \\dfrac{1 - \\ln(x)}{x^2}$.",
          "**Étape 2 (Signe)** : $x^2 > 0$ ; $1 - \\ln(x) > 0 \\iff \\ln(x) < 1 \\iff x < e$. Donc $f$ est croissante sur $]0 ; e]$ et décroissante sur $[e ; +\\infty[$, avec un maximum $f(e) = \\dfrac{1}{e}$.",
          "**Étape 3 (Limites)** : en $0^+$, $\\ln(x) \\to -\\infty$ et $\\frac{1}{x} \\to +\\infty$, donc $f(x) = \\ln(x) \\times \\frac{1}{x} \\to -\\infty$. En $+\\infty$, $f(x) \\to 0$ par croissances comparées.",
          "**Conclusion** : $f$ croît de $-\\infty$ à $\\frac{1}{e}$ sur $]0 ; e]$, puis décroît de $\\frac{1}{e}$ vers $0$ ; l'axe des abscisses est asymptote en $+\\infty$."
        ]
      },
      {
        "title": "Méthode : Démontrer une inégalité par l'étude d'une fonction",
        "example": "Démontrer que pour tout $x > 0$, $x > 2\\ln(x)$.",
        "steps": [
          "**Étape 1 (Fonction différence)** : on pose $f(x) = x - 2\\ln(x)$ sur $]0 ; +\\infty[$. Alors $f'(x) = 1 - \\dfrac{2}{x} = \\dfrac{x - 2}{x}$.",
          "**Étape 2 (Variations)** : $x > 0$, donc $f'(x)$ a le signe de $x - 2$ : $f$ est décroissante sur $]0 ; 2]$ et croissante sur $[2 ; +\\infty[$. Son minimum est $f(2) = 2 - 2\\ln(2) \\approx 0{,}614$.",
          "**Étape 3 (Signe du minimum)** : $\\ln(2) < 1$ car $2 < e$, donc $2 - 2\\ln(2) > 0$.",
          "**Conclusion** : pour tout $x > 0$, $f(x) \\ge f(2) > 0$, c'est-à-dire $x > 2\\ln(x)$."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour tout $0 < x < 1$, $\\ln(x)$ est **négatif** ! Diviser par $\\ln(0{,}8)$ inverse le sens de l'inégalité.",
      "⚠️ $\\ln(a+b) \\neq \\ln(a) + \\ln(b)$ !",
      "⚠️ Toujours déterminer le **domaine** avant de résoudre : dans $\\ln(2x - 1) \\le 0$, il faut $x > \\frac{1}{2}$, puis $2x - 1 \\le 1$ ; l'ensemble solution est $\\left]\\frac{1}{2} ; 1\\right]$ et non $]-\\infty ; 1]$.",
      "⚠️ $\\ln(a) \\times \\ln(b) \\ne \\ln(a) + \\ln(b)$ et $\\dfrac{\\ln(a)}{\\ln(b)} \\ne \\ln(a) - \\ln(b)$ : c'est $\\ln(ab)$ et $\\ln\\left(\\frac{a}{b}\\right)$ qui se transforment.",
      "⚠️ $\\ln(x^2) = 2\\ln(x)$ seulement pour $x > 0$ ; pour $x \\ne 0$ quelconque, $\\ln(x^2) = 2\\ln|x|$."
    ],
    "flashcards": [
      {
        "q": "Quel est le domaine de définition de la fonction logarithme népérien ?",
        "a": "$]0 ; +\\infty[$ (les réels strictement positifs)."
      },
      {
        "q": "Que vaut $\\lim_{x \\to +\\infty} \\frac{\\ln(x)}{x}$ ?",
        "a": "$0$ (par croissance comparée)."
      },
      {
        "q": "Pour quels $x$ a-t-on $\\ln(x) < 0$ ?",
        "a": "Pour $0 < x < 1$."
      },
      {
        "q": "Dériver $g(x) = \\ln(x^2 + 1)$.",
        "a": "$g'(x) = \\dfrac{2x}{x^2 + 1}$."
      },
      {
        "q": "Que vaut $\\lim\\limits_{x \\to 0} \\dfrac{\\ln(1 + x)}{x}$ ?",
        "a": "$1$ (nombre dérivé de $\\ln$ en $1$)."
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
      "Appliquer la formule d'intégration par parties (IPP) : $\\int_a^b u'(t)v(t) dt = [u(t)v(t)]_a^b - \\int_a^b u(t)v'(t) dt$.",
      "Calculer l'aire d'un domaine délimité par deux courbes.",
      "Étudier une suite d'intégrales (signe, monotonie, encadrement, limite) et approcher une intégrale par la méthode des rectangles."
    ],
    "keyPoints": [
      {
        "title": "1. Définition et Théorème fondamental de l'analyse",
        "content": "Soit $f$ une fonction continue sur $[a ; b]$ et $F$ une primitive de $f$ sur cet intervalle :\n$$\\int_a^b f(t) dt = [F(t)]_a^b = F(b) - F(a)$$\n• **Relation de Chasles** : $\\int_a^c f(t) dt + \\int_c^b f(t) dt = \\int_a^b f(t) dt$.\n• **Valeur moyenne** de $f$ sur $[a ; b]$ : $\\mu = \\frac{1}{b - a} \\int_a^b f(t) dt$."
      },
      {
        "title": "2. Intégration par parties (IPP)",
        "content": "Soient $u$ et $v$ deux fonctions dérivables à dérivées continues sur $[a ; b]$ :\n$$\\int_a^b u'(t) v(t) dt = [u(t) v(t)]_a^b - \\int_a^b u(t) v'(t) dt$$\n*Règle ALPES pour choisir $v(t)$ (qui sera dérivée)* : Logarithme, Polynôme, Exponentielle, Sinus/Cosinus (on dérive de préférence la fonction qui apparaît en premier dans cette liste)."
      },
      {
        "title": "3. Intégrale et aire",
        "content": "• Si $f$ est **continue et positive** sur $[a ; b]$ ($a \\le b$), $\\int_a^b f(x)\\,dx$ est l'**aire**, en unités d'aire (u.a.), du domaine compris entre la courbe, l'axe des abscisses et les droites $x = a$ et $x = b$.\n• Si $f$ est **négative** sur $[a ; b]$, cette aire vaut $-\\int_a^b f(x)\\,dx$.\n• Si $f \\ge g$ sur $[a ; b]$, l'aire entre les deux courbes vaut $\\int_a^b \\big(f(x) - g(x)\\big)\\,dx$.\n• **Théorème fondamental** : si $f$ est continue sur $I$ et $a \\in I$, la fonction $F : x \\mapsto \\int_a^x f(t)\\,dt$ est **l'unique primitive de $f$ sur $I$ qui s'annule en $a$** ; en particulier $F' = f$."
      },
      {
        "title": "4. Linéarité, positivité, croissance",
        "content": "Pour $f$, $g$ continues sur $[a ; b]$ et $\\lambda \\in \\mathbb{R}$ :\n• **Linéarité** : $\\int_a^b (f + \\lambda g) = \\int_a^b f + \\lambda \\int_a^b g$.\n• **Positivité** : si $a \\le b$ et $f \\ge 0$ sur $[a ; b]$, alors $\\int_a^b f \\ge 0$.\n• **Croissance** : si $a \\le b$ et $f \\le g$ sur $[a ; b]$, alors $\\int_a^b f \\le \\int_a^b g$.\n• **Conséquence** : si $m \\le f \\le M$ sur $[a ; b]$, alors $m(b - a) \\le \\int_a^b f \\le M(b - a)$."
      },
      {
        "title": "5. Méthode des rectangles avec Python",
        "content": "Quand on ne connaît pas de primitive (par exemple de $x \\mapsto e^{-x^2}$), on approche l'intégrale par une somme d'aires de rectangles de largeur $\\frac{b - a}{n}$ :\n```python\nfrom math import exp\ndef rectangles(f, a, b, n):\n    h = (b - a) / n\n    s = 0\n    for k in range(n):\n        s = s + f(a + k*h) * h\n    return s\nprint(rectangles(lambda x: exp(-x**2), 0, 1, 10))\n```\nAvec $n = 10$ on obtient environ $0{,}778$ ; la valeur exacte est proche de $0{,}747$. Plus $n$ est grand, meilleure est l'approximation."
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
      },
      {
        "title": "Méthode : Calculer l'aire entre deux courbes",
        "example": "Calculer l'aire du domaine compris entre les courbes de $f(x) = x$ et $g(x) = x^2$ sur $[0 ; 1]$.",
        "steps": [
          "**Étape 1 (Position relative)** : $f(x) - g(x) = x - x^2 = x(1 - x) \\ge 0$ sur $[0 ; 1]$, donc la courbe de $f$ est au-dessus de celle de $g$.",
          "**Étape 2 (Intégrale)** : $\\mathcal{A} = \\int_0^1 (x - x^2)\\,dx = \\left[\\dfrac{x^2}{2} - \\dfrac{x^3}{3}\\right]_0^1 = \\dfrac{1}{2} - \\dfrac{1}{3} = \\dfrac{1}{6}$.",
          "**Étape 3 (Unités)** : si le repère a pour unités $2$ cm sur chaque axe, $1$ u.a. $= 4$ cm².",
          "**Conclusion** : l'aire vaut $\\dfrac{1}{6}$ u.a., soit $\\dfrac{4}{6} = \\dfrac{2}{3} \\approx 0{,}67$ cm²."
        ]
      },
      {
        "title": "Méthode : Étudier une suite d'intégrales",
        "example": "Pour $n \\in \\mathbb{N}$, on pose $I_n = \\int_0^1 \\dfrac{x^n}{1 + x}\\,dx$. Calculer $I_0$, puis montrer que $(I_n)$ est décroissante et converge vers $0$.",
        "steps": [
          "**Étape 1 ($I_0$)** : $I_0 = \\int_0^1 \\dfrac{1}{1 + x}\\,dx = \\big[\\ln(1 + x)\\big]_0^1 = \\ln(2)$.",
          "**Étape 2 (Monotonie)** : par linéarité, $I_{n+1} - I_n = \\int_0^1 \\dfrac{x^n(x - 1)}{1 + x}\\,dx$. Sur $[0 ; 1]$, $x^n \\ge 0$, $x - 1 \\le 0$ et $1 + x > 0$ : l'intégrande est négative, donc $I_{n+1} - I_n \\le 0$ (positivité, bornes dans le bon ordre). La suite est décroissante.",
          "**Étape 3 (Encadrement)** : sur $[0 ; 1]$, $1 + x \\ge 1$, donc $0 \\le \\dfrac{x^n}{1 + x} \\le x^n$. Par croissance de l'intégrale : $0 \\le I_n \\le \\int_0^1 x^n\\,dx = \\dfrac{1}{n + 1}$.",
          "**Conclusion** : $\\lim \\frac{1}{n+1} = 0$, donc d'après le théorème des gendarmes, $\\lim\\limits_{n \\to +\\infty} I_n = 0$."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans l'intégration par parties, attention au signe moins devant la seconde intégrale !",
      "⚠️ Si $a > b$, $\\int_a^b f(t) dt = -\\int_b^a f(t) dt$.",
      "⚠️ Une intégrale n'est pas toujours une aire : $\\int_{-1}^{1} x\\,dx = 0$, alors que l'aire entre la droite $y = x$ et l'axe des abscisses sur $[-1 ; 1]$ vaut $1$ u.a. Si $f$ change de signe, découper avec la relation de Chasles.",
      "⚠️ La positivité et la croissance de l'intégrale exigent des bornes **dans l'ordre** $a \\le b$.",
      "⚠️ Dans $\\int_a^b f(t)\\,dt$, la variable $t$ est **muette** : le résultat ne dépend pas de $t$. En revanche, $\\int_0^x f(t)\\,dt$ est une fonction de $x$."
    ],
    "flashcards": [
      {
        "q": "Énoncer la formule d'intégration par parties sur $[a ; b]$.",
        "a": "$\\int_a^b u'v = [uv]_a^b - \\int_a^b uv'$."
      },
      {
        "q": "Que vaut la valeur moyenne $\\mu$ d'une fonction $f$ sur $[a ; b]$ ?",
        "a": "$\\mu = \\frac{1}{b - a} \\int_a^b f(t) dt$."
      },
      {
        "q": "Calculer $\\int_0^1 x e^x\\,dx$.",
        "a": "Par IPP : $[x e^x]_0^1 - \\int_0^1 e^x\\,dx = e - (e - 1) = 1$."
      },
      {
        "q": "Quelle est la dérivée de $F(x) = \\int_a^x f(t)\\,dt$ (avec $f$ continue) ?",
        "a": "$F'(x) = f(x)$."
      },
      {
        "q": "Comment calcule-t-on l'aire entre les courbes de $f$ et $g$ sur $[a ; b]$ si $f \\ge g$ ?",
        "a": "$\\int_a^b \\big(f(x) - g(x)\\big)\\,dx$ (en unités d'aire)."
      }
    ]
  },
  "TG2": {
    "title": "TG2 : Produit scalaire dans l'espace et équations cartésiennes de plans",
    "domain": "Géométrie de l'Espace",
    "objectives": [
      "Calculer le produit scalaire dans l'espace orthonormé : $\\vec{u}\\cdot\\vec{v} = xx' + yy' + zz'$.",
      "Déterminer et utiliser l'équation cartésienne d'un plan $ax + by + cz + d = 0$ de vecteur normal $\\vec{n}(a ; b ; c)$.",
      "Calculer le projeté orthogonal d'un point sur un plan et la distance d'un point à un plan.",
      "Calculer une longueur, un angle et démontrer une orthogonalité avec le produit scalaire.",
      "Démontrer qu'une droite est orthogonale à un plan."
    ],
    "keyPoints": [
      {
        "title": "1. Vecteur normal et équation de plan dans l'espace",
        "content": "• Un vecteur non nul $\\vec{n}\\begin{pmatrix} a \\\\ b \\\\ c \\end{pmatrix}$ est **normal** à un plan $\\mathcal{P}$ s'il est orthogonal à deux vecteurs directeurs non colinéaires de $\\mathcal{P}$.\n• Tout plan de vecteur normal $\\vec{n}(a ; b ; c)$ admet une équation cartésienne de la forme :\n$$ax + by + cz + d = 0$$\n• Deux plans sont parallèles ssi leurs vecteurs normaux sont colinéaires. Ils sont perpendiculaires ssi leurs vecteurs normaux sont orthogonaux ($\\vec{n}_1 \\cdot \\vec{n}_2 = 0$)."
      },
      {
        "title": "2. Produit scalaire dans l'espace : définitions et propriétés",
        "content": "• Deux vecteurs de l'espace sont toujours coplanaires : on définit $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\cos(\\widehat{\\vec{u}, \\vec{v}})$ comme dans le plan qui les contient.\n• **Formule de polarisation** : $\\vec{u} \\cdot \\vec{v} = \\frac{1}{2}\\left(\\|\\vec{u} + \\vec{v}\\|^2 - \\|\\vec{u}\\|^2 - \\|\\vec{v}\\|^2\\right)$.\n• En **repère orthonormé**, pour $\\vec{u}(x ; y ; z)$ et $\\vec{v}(x' ; y' ; z')$ : $\\vec{u} \\cdot \\vec{v} = xx' + yy' + zz'$ et $\\|\\vec{u}\\| = \\sqrt{x^2 + y^2 + z^2}$.\n• Le produit scalaire est **symétrique** et **bilinéaire** : $\\vec{u} \\cdot (\\vec{v} + k\\vec{w}) = \\vec{u} \\cdot \\vec{v} + k\\,\\vec{u} \\cdot \\vec{w}$.\n• $\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0$."
      },
      {
        "title": "3. Orthogonalité d'une droite et d'un plan",
        "content": "• Une droite $d$ est **orthogonale** à un plan $\\mathcal{P}$ si elle est orthogonale à **deux droites sécantes** de $\\mathcal{P}$. Elle est alors orthogonale à toutes les droites de $\\mathcal{P}$.\n• De façon équivalente : un vecteur directeur de $d$ est **normal** à $\\mathcal{P}$.\n• Le plan passant par $A$ et de vecteur normal $\\vec{n}$ est l'ensemble des points $M$ tels que $\\overrightarrow{AM} \\cdot \\vec{n} = 0$.\n• Une droite de vecteur directeur $\\vec{w}$ est **parallèle** au plan de vecteur normal $\\vec{n}$ si et seulement si $\\vec{w} \\cdot \\vec{n} = 0$."
      },
      {
        "title": "4. Projeté orthogonal et distance",
        "content": "• Le **projeté orthogonal** d'un point $M$ sur un plan $\\mathcal{P}$ est le point $H$ de $\\mathcal{P}$ tel que $\\overrightarrow{MH}$ est colinéaire à un vecteur normal de $\\mathcal{P}$ (c'est l'intersection de $\\mathcal{P}$ avec la droite passant par $M$ orthogonale à $\\mathcal{P}$).\n• $H$ est le point de $\\mathcal{P}$ **le plus proche** de $M$ : pour tout $N \\in \\mathcal{P}$, $MN \\ge MH$ (Pythagore). La distance de $M$ au plan est $MH$.\n• De même, le projeté orthogonal de $M$ sur une droite $d$ est le point $H$ de $d$ tel que $\\overrightarrow{MH}$ est orthogonal à un vecteur directeur de $d$."
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
      },
      {
        "title": "Méthode : Déterminer le projeté orthogonal d'un point sur un plan",
        "example": "Soit $\\mathcal{P} : 6x + 3y + 2z - 6 = 0$ et $M(7 ; 3 ; 2)$. Déterminer le projeté orthogonal $H$ de $M$ sur $\\mathcal{P}$ et la distance $MH$.",
        "steps": [
          "**Étape 1 (Droite orthogonale)** : $\\vec{n}(6 ; 3 ; 2)$ est normal à $\\mathcal{P}$. La droite $\\Delta$ passant par $M$ et dirigée par $\\vec{n}$ a pour représentation $\\begin{cases} x = 7 + 6t \\\\ y = 3 + 3t \\\\ z = 2 + 2t \\end{cases}$ ($t \\in \\mathbb{R}$).",
          "**Étape 2 (Intersection)** : on remplace dans l'équation de $\\mathcal{P}$ : $6(7 + 6t) + 3(3 + 3t) + 2(2 + 2t) - 6 = 0$, soit $42 + 36t + 9 + 9t + 4 + 4t - 6 = 0$, c'est-à-dire $49 + 49t = 0$, donc $t = -1$.",
          "**Étape 3 (Coordonnées)** : $H(7 - 6 ; 3 - 3 ; 2 - 2) = H(1 ; 0 ; 0)$. Vérification : $6 \\times 1 + 0 + 0 - 6 = 0$.",
          "**Conclusion** : $\\overrightarrow{MH}(-6 ; -3 ; -2)$, donc $MH = \\sqrt{36 + 9 + 4} = \\sqrt{49} = 7$. La distance de $M$ au plan $\\mathcal{P}$ est $7$."
        ]
      },
      {
        "title": "Méthode : Calculer un angle géométrique",
        "example": "Soient $A(1 ; 1 ; 1)$, $B(2 ; 2 ; 1)$ et $C(2 ; 1 ; 2)$ dans un repère orthonormé. Calculer l'angle $\\widehat{BAC}$.",
        "steps": [
          "**Étape 1 (Vecteurs)** : $\\overrightarrow{AB}(1 ; 1 ; 0)$ et $\\overrightarrow{AC}(1 ; 0 ; 1)$.",
          "**Étape 2 (Produit scalaire et normes)** : $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = 1 \\times 1 + 1 \\times 0 + 0 \\times 1 = 1$ ; $AB = \\sqrt{2}$ et $AC = \\sqrt{2}$.",
          "**Étape 3 (Cosinus)** : $\\cos(\\widehat{BAC}) = \\dfrac{\\overrightarrow{AB} \\cdot \\overrightarrow{AC}}{AB \\times AC} = \\dfrac{1}{\\sqrt{2} \\times \\sqrt{2}} = \\dfrac{1}{2}$.",
          "**Conclusion** : $\\widehat{BAC} = 60^\\circ$. Comme $\\overrightarrow{BC}(0 ; -1 ; 1)$ donne aussi $BC = \\sqrt{2}$, le triangle $ABC$ est équilatéral."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans l'espace, une équation $ax + by + c = 0$ ne représente pas une droite mais un **plan** parallèle à l'axe $(Oz)$ !",
      "⚠️ Une droite dans l'espace n'a pas une seule équation cartésienne, mais un système paramétrique de 3 équations à 1 paramètre.",
      "⚠️ La formule $xx' + yy' + zz'$ n'est valable que dans un repère **orthonormé**.",
      "⚠️ Un plan a une infinité de vecteurs normaux et d'équations cartésiennes : $6x + 3y + 2z - 6 = 0$ et $12x + 6y + 4z - 12 = 0$ désignent le même plan.",
      "⚠️ Un vecteur orthogonal à **un seul** vecteur directeur du plan n'est pas forcément normal : il doit être orthogonal à **deux** vecteurs non colinéaires du plan."
    ],
    "flashcards": [
      {
        "q": "Quel est un vecteur normal au plan d'équation $2x - 3y + 5z - 8 = 0$ ?",
        "a": "$\\vec{n}\\begin{pmatrix} 2 \\\\ -3 \\\\ 5 \\end{pmatrix}$."
      },
      {
        "q": "Comment teste-t-on l'orthogonalité de deux plans dans l'espace ?",
        "a": "On calcule le produit scalaire de leurs vecteurs normaux : ils sont perpendiculaires ssi $\\vec{n}_1 \\cdot \\vec{n}_2 = 0$."
      },
      {
        "q": "Calculer la norme de $\\vec{u}(2 ; -1 ; 2)$.",
        "a": "$\\|\\vec{u}\\| = \\sqrt{4 + 1 + 4} = 3$."
      },
      {
        "q": "Une droite de vecteur directeur $\\vec{w}$ est orthogonale au plan de vecteur normal $\\vec{n}$ si…",
        "a": "… $\\vec{w}$ et $\\vec{n}$ sont colinéaires."
      },
      {
        "q": "Le point $A(1 ; 1 ; 1)$ appartient-il au plan $2x - y + 3z - 4 = 0$ ?",
        "a": "Oui : $2 - 1 + 3 - 4 = 0$."
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
      "Calculer $P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$, l'espérance $E(X) = np$ et la variance $V(X) = np(1-p)$.",
      "Utiliser les coefficients binomiaux $\\binom{n}{k}$ (propriétés, triangle de Pascal).",
      "Calculer des probabilités cumulées et déterminer un seuil ou un intervalle pour une loi binomiale."
    ],
    "keyPoints": [
      {
        "title": "1. Loi binomiale $\\mathcal{B}(n, p)$",
        "content": "Soit $X$ la variable aléatoire égale au nombre de succès dans un schéma de Bernoulli à $n$ épreuves indépendantes de probabilité de succès $p$ :\n• $X$ suit la **loi binomiale** de paramètres $n$ et $p$, notée $X \\sim \\mathcal{B}(n, p)$.\n• Pour tout entier $k \\in \\{0, 1, \\dots, n\\}$ :\n$$P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$$\n• **Espérance mathématique** : $E(X) = np$.\n• **Variance** : $V(X) = np(1-p)$ et **écart-type** : $\\sigma(X) = \\sqrt{np(1-p)}$."
      },
      {
        "title": "2. Coefficients binomiaux",
        "content": "• $\\binom{n}{k}$ (« $k$ parmi $n$ ») est le nombre de chemins de l'arbre d'un schéma de Bernoulli à $n$ épreuves qui réalisent **exactement $k$ succès** ; c'est aussi le nombre de parties à $k$ éléments d'un ensemble à $n$ éléments.\n• Formule : $\\binom{n}{k} = \\dfrac{n!}{k!\\,(n-k)!}$ où $n! = 1 \\times 2 \\times \\dots \\times n$ et $0! = 1$.\n• $\\binom{n}{0} = \\binom{n}{n} = 1$, $\\binom{n}{1} = n$, et **symétrie** : $\\binom{n}{k} = \\binom{n}{n-k}$.\n• **Relation de Pascal** : $\\binom{n}{k} + \\binom{n}{k+1} = \\binom{n+1}{k+1}$, qui permet de construire le triangle de Pascal."
      },
      {
        "title": "3. Loi binomiale et variables de Bernoulli",
        "content": "• Une variable de **Bernoulli** de paramètre $p$ prend la valeur $1$ (succès) avec probabilité $p$ et $0$ sinon : $E = p$ et $V = p(1 - p)$.\n• Si $X_1, \\dots, X_n$ sont des variables de Bernoulli de paramètre $p$ **indépendantes**, alors $X = X_1 + \\dots + X_n$ compte les succès : $X \\sim \\mathcal{B}(n, p)$.\n• On en déduit (voir TS2) : $E(X) = np$ (linéarité) et $V(X) = np(1 - p)$ (indépendance).\n• Exemple : pour $X \\sim \\mathcal{B}(50 ; 0{,}2)$, $E(X) = 10$ et $V(X) = 50 \\times 0{,}2 \\times 0{,}8 = 8$."
      },
      {
        "title": "4. Probabilités cumulées et calculs pratiques",
        "content": "• $P(X \\le k) = \\sum_{i=0}^{k} P(X = i)$ s'obtient à la calculatrice (fonction « binomiale cumulée » / « binomFRép »).\n• $P(X \\ge k) = 1 - P(X \\le k - 1)$ et $P(a \\le X \\le b) = P(X \\le b) - P(X \\le a - 1)$.\n• En Python :\n```python\nfrom math import comb\ndef binom(n, p, k):\n    return comb(n, k) * p**k * (1 - p)**(n - k)\ndef cumul(n, p, k):\n    return sum(binom(n, p, i) for i in range(k + 1))\n```"
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
      },
      {
        "title": "Méthode : Calculer $P(X \\ge 1)$ et $P(a \\le X \\le b)$",
        "example": "Une machine produit des pièces défectueuses avec une probabilité $0{,}3$, de façon indépendante. On prélève $20$ pièces et $X$ est le nombre de pièces défectueuses. Calculer $P(X \\ge 1)$ et $P(4 \\le X \\le 7)$.",
        "steps": [
          "**Étape 1 (Loi)** : $20$ épreuves de Bernoulli identiques et indépendantes de succès « défectueuse » ($p = 0{,}3$) : $X \\sim \\mathcal{B}(20 ; 0{,}3)$.",
          "**Étape 2 (Complémentaire)** : $P(X \\ge 1) = 1 - P(X = 0) = 1 - 0{,}7^{20} \\approx 1 - 0{,}000798 \\approx 0{,}9992$.",
          "**Étape 3 (Probabilités cumulées)** : $P(4 \\le X \\le 7) = P(X \\le 7) - P(X \\le 3) \\approx 0{,}7723 - 0{,}1071 = 0{,}6652$.",
          "**Conclusion** : $P(X \\ge 1) \\approx 0{,}9992$ et $P(4 \\le X \\le 7) \\approx 0{,}665$."
        ]
      },
      {
        "title": "Méthode : Déterminer le nombre minimal d'épreuves",
        "example": "Un tireur atteint sa cible avec une probabilité $0{,}1$ à chaque tir, de façon indépendante. Combien de tirs faut-il au minimum pour que la probabilité d'atteindre au moins une fois la cible soit supérieure ou égale à $0{,}99$ ?",
        "steps": [
          "**Étape 1 (Modélisation)** : pour $n$ tirs, le nombre $X$ de tirs réussis suit $\\mathcal{B}(n ; 0{,}1)$ et $P(X \\ge 1) = 1 - 0{,}9^n$.",
          "**Étape 2 (Inéquation)** : $1 - 0{,}9^n \\ge 0{,}99 \\iff 0{,}9^n \\le 0{,}01 \\iff n\\ln(0{,}9) \\le \\ln(0{,}01) \\iff n \\ge \\dfrac{\\ln(0{,}01)}{\\ln(0{,}9)}$ (on divise par $\\ln(0{,}9) < 0$, le sens change).",
          "**Étape 3 (Calcul)** : $\\dfrac{\\ln(0{,}01)}{\\ln(0{,}9)} \\approx 43{,}71$. Contrôle : $0{,}9^{43} \\approx 0{,}0108 > 0{,}01$ et $0{,}9^{44} \\approx 0{,}0097 \\le 0{,}01$.",
          "**Conclusion** : il faut au minimum $44$ tirs."
        ]
      },
      {
        "title": "Méthode : Déterminer un seuil de probabilité cumulée",
        "example": "Avec $X \\sim \\mathcal{B}(20 ; 0{,}3)$, déterminer le plus petit entier $b$ tel que $P(X \\le b) \\ge 0{,}95$.",
        "steps": [
          "**Étape 1 (Tableau des probabilités cumulées)** : à la calculatrice, $P(X \\le 8) \\approx 0{,}8867$ et $P(X \\le 9) \\approx 0{,}9520$.",
          "**Étape 2 (Lecture)** : $P(X \\le 8) < 0{,}95 \\le P(X \\le 9)$, et la fonction $k \\mapsto P(X \\le k)$ est croissante.",
          "**Conclusion** : $b = 9$. Ainsi, dans plus de $95\\,\\%$ des prélèvements de $20$ pièces, il y aura au plus $9$ pièces défectueuses."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour utiliser la loi binomiale, les répétitions doivent impérativement être **indépendantes** (tirage avec remise ou tirage sans remise sur une population très grande par rapport à l'échantillon).",
      "⚠️ Pour $P(X \\ge 1)$, utiliser la formule du complémentaire : $P(X \\ge 1) = 1 - P(X = 0) = 1 - (1-p)^n$.",
      "⚠️ $P(X \\ge 4) = 1 - P(X \\le 3)$ et **non** $1 - P(X \\le 4)$ : la valeur $4$ appartient à l'événement $\\{X \\ge 4\\}$.",
      "⚠️ « Au moins un succès » ($X \\ge 1$) n'est pas « exactement un succès » ($X = 1$) : lire l'énoncé attentivement.",
      "⚠️ $\\binom{n}{k}$ n'est pas $\\dfrac{n}{k}$ : par exemple $\\binom{4}{2} = 6$ alors que $\\dfrac{4}{2} = 2$."
    ],
    "flashcards": [
      {
        "q": "Quelle est la formule de $P(X = k)$ lorsque $X \\sim \\mathcal{B}(n, p)$ ?",
        "a": "$P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$."
      },
      {
        "q": "Que valent l'espérance et la variance de $X \\sim \\mathcal{B}(n, p)$ ?",
        "a": "$E(X) = np$ et $V(X) = np(1-p)$."
      },
      {
        "q": "Calculer $\\binom{5}{2}$.",
        "a": "$\\binom{5}{2} = \\dfrac{5!}{2!\\,3!} = \\dfrac{120}{2 \\times 6} = 10$."
      },
      {
        "q": "Énoncer la relation de Pascal.",
        "a": "$\\binom{n}{k} + \\binom{n}{k+1} = \\binom{n+1}{k+1}$."
      },
      {
        "q": "Pour $X \\sim \\mathcal{B}(50 ; 0{,}2)$, que valent $E(X)$ et $V(X)$ ?",
        "a": "$E(X) = 10$ et $V(X) = 8$."
      }
    ]
  },
  "TX1": {
    "title": "TX1 : Nombres complexes : forme algébrique et équations du second degré",
    "domain": "Mathématiques Expertes",
    "objectives": [
      "Connaître l'ensemble $\\mathbb{C}$, l'unité imaginaire $i$ telle que $i^2 = -1$, la forme algébrique $z = a + ib$ ($a, b \\in \\mathbb{R}$).",
      "Définir le conjugué $\\bar{z} = a - ib$ et utiliser $z\\bar{z} = a^2 + b^2$ pour calculer l'inverse et les quotients.",
      "Résoudre dans $\\mathbb{C}$ les équations du second degré à coefficients réels lorsque $\\Delta < 0$ ($z_{1,2} = \\frac{-b \\pm i\\sqrt{|\\Delta|}}{2a}$).",
      "Utiliser les propriétés du conjugué et résoudre des équations faisant intervenir $z$ et $\\bar{z}$.",
      "Factoriser un polynôme par $z - a$ lorsque $a$ est racine, et utiliser la formule du binôme de Newton."
    ],
    "keyPoints": [
      {
        "title": "1. Forme algébrique et conjugué",
        "content": "Tout nombre complexe $z$ s'écrit de manière unique sous forme algébrique :\n$$z = a + ib \\quad (a = \\text{Re}(z), b = \\text{Im}(z) \\in \\mathbb{R})$$\n• Le **conjugué** de $z$ est $\\bar{z} = a - ib$.\n• Propriété clé : $z \\bar{z} = (a+ib)(a-ib) = a^2 + b^2 \\in \\mathbb{R}_+$.\n• Quotient : $\\frac{1}{a+ib} = \\frac{a - ib}{a^2 + b^2}$."
      },
      {
        "title": "2. Équations du second degré dans $\\mathbb{C}$ à coefficients réels",
        "content": "Soit l'équation $az^2 + bz + c = 0$ avec $a, b, c \\in \\mathbb{R}$ et $a \\neq 0$. Discriminant $\\Delta = b^2 - 4ac$ :\n• Si $\\Delta > 0$ : deux racines réelles distinctes.\n• Si $\\Delta = 0$ : une racine réelle double $z_0 = -\\frac{b}{2a}$.\n• Si $\\Delta < 0$ : deux racines complexes conjuguées distinctes :\n$$z_1 = \\frac{-b - i\\sqrt{-\\Delta}}{2a} \\quad \\text{et} \\quad z_2 = \\frac{-b + i\\sqrt{-\\Delta}}{2a} = \\bar{z}_1$$"
      },
      {
        "title": "3. Propriétés du conjugué",
        "content": "Pour tous complexes $z$ et $z'$ et tout entier $n \\ge 1$ :\n• $\\overline{z + z'} = \\bar{z} + \\bar{z'}$, $\\overline{zz'} = \\bar{z}\\,\\bar{z'}$, $\\overline{z^n} = \\bar{z}^n$ et, si $z' \\ne 0$, $\\overline{\\left(\\dfrac{z}{z'}\\right)} = \\dfrac{\\bar{z}}{\\bar{z'}}$.\n• $\\text{Re}(z) = \\dfrac{z + \\bar{z}}{2}$ et $\\text{Im}(z) = \\dfrac{z - \\bar{z}}{2i}$.\n• $z$ est **réel** $\\iff \\bar{z} = z$ ; $z$ est **imaginaire pur** $\\iff \\bar{z} = -z$.\n• Dans le plan muni d'un repère orthonormé, le point d'affixe $\\bar{z}$ est le symétrique du point d'affixe $z$ par rapport à l'axe des abscisses."
      },
      {
        "title": "4. Polynômes et racines",
        "content": "• Pour tous complexes $z$, $a$ et tout entier $n \\ge 1$ :\n$$z^n - a^n = (z - a)\\left(z^{n-1} + az^{n-2} + \\dots + a^{n-2}z + a^{n-1}\\right)$$\n• **Factorisation** : si $P$ est un polynôme de degré $n \\ge 1$ et si $P(a) = 0$, alors il existe un polynôme $Q$ de degré $n - 1$ tel que $P(z) = (z - a)Q(z)$.\n• Un polynôme de degré $n \\ge 1$ admet **au plus $n$ racines**.\n• Si $P$ est à coefficients **réels** et si $z_0$ est racine, alors $\\bar{z_0}$ est aussi racine."
      },
      {
        "title": "5. Formule du binôme de Newton",
        "content": "Pour tous complexes $a$, $b$ et tout entier naturel $n$ :\n$$(a + b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^k b^{n-k}$$\nLes coefficients se lisent dans le triangle de Pascal. Exemple : $(1 + i)^4 = 1 + 4i + 6i^2 + 4i^3 + i^4 = 1 + 4i - 6 - 4i + 1 = -4$.\nRappel utile : les puissances de $i$ sont périodiques de période $4$ : $i^0 = 1$, $i^1 = i$, $i^2 = -1$, $i^3 = -i$."
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
      },
      {
        "title": "Méthode : Factoriser un polynôme de degré 3 et le résoudre dans $\\mathbb{C}$",
        "example": "Soit $P(z) = z^3 - 4z^2 + 9z - 10$. Vérifier que $2$ est racine, factoriser $P$ et résoudre $P(z) = 0$ dans $\\mathbb{C}$.",
        "steps": [
          "**Étape 1 (Racine évidente)** : $P(2) = 8 - 16 + 18 - 10 = 0$, donc $P(z) = (z - 2)(az^2 + bz + c)$.",
          "**Étape 2 (Identification)** : en développant, $(z - 2)(az^2 + bz + c) = az^3 + (b - 2a)z^2 + (c - 2b)z - 2c$. Par identification : $a = 1$, $b - 2a = -4$ donc $b = -2$, et $-2c = -10$ donc $c = 5$ (contrôle : $c - 2b = 5 + 4 = 9$). Ainsi $P(z) = (z - 2)(z^2 - 2z + 5)$.",
          "**Étape 3 (Second degré)** : pour $z^2 - 2z + 5$, $\\Delta = 4 - 20 = -16 < 0$, donc deux racines complexes conjuguées $z = \\dfrac{2 \\pm 4i}{2} = 1 \\pm 2i$.",
          "**Conclusion** : $\\mathcal{S} = \\{2 ; 1 - 2i ; 1 + 2i\\}$."
        ]
      },
      {
        "title": "Méthode : Résoudre une équation avec $z$ et $\\bar{z}$",
        "example": "Résoudre dans $\\mathbb{C}$ l'équation $2z + i\\bar{z} = 3$.",
        "steps": [
          "**Étape 1 (Forme algébrique)** : on pose $z = a + ib$ avec $a, b$ réels, donc $\\bar{z} = a - ib$.",
          "**Étape 2 (Développement)** : $2(a + ib) + i(a - ib) = 2a + 2ib + ia + b = (2a + b) + i(a + 2b)$.",
          "**Étape 3 (Identification)** : par unicité de la forme algébrique, $2a + b = 3$ et $a + 2b = 0$. La seconde donne $a = -2b$, puis $-4b + b = 3$, soit $b = -1$ et $a = 2$.",
          "**Conclusion** : $z = 2 - i$. Vérification : $2(2 - i) + i(2 + i) = 4 - 2i + 2i - 1 = 3$."
        ]
      },
      {
        "title": "Méthode : Développer une puissance avec le binôme de Newton",
        "example": "Calculer $\\left(1 + i\\sqrt{3}\\right)^3$ sous forme algébrique.",
        "steps": [
          "**Étape 1 (Formule)** : $(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$ (coefficients $1, 3, 3, 1$ du triangle de Pascal), avec $a = 1$ et $b = i\\sqrt{3}$.",
          "**Étape 2 (Puissances de $b$)** : $b^2 = i^2 \\times 3 = -3$ et $b^3 = b^2 \\times b = -3i\\sqrt{3}$.",
          "**Étape 3 (Somme)** : $\\left(1 + i\\sqrt{3}\\right)^3 = 1 + 3i\\sqrt{3} + 3 \\times (-3) - 3i\\sqrt{3} = 1 - 9 = -8$.",
          "**Conclusion** : $\\left(1 + i\\sqrt{3}\\right)^3 = -8$. On le retrouvera avec la forme exponentielle (TX2) : $1 + i\\sqrt{3} = 2e^{i\\frac{\\pi}{3}}$ et $2^3 e^{i\\pi} = -8$."
        ]
      }
    ],
    "traps": [
      "⚠️ La partie imaginaire $\\text{Im}(z)$ est un **nombre réel** : pour $z = 3 - 5i$, $\\text{Im}(z) = -5$ et non $-5i$ !",
      "⚠️ Ne jamais laisser $i$ au dénominateur d'une réponse finale.",
      "⚠️ Il n'y a pas d'ordre sur $\\mathbb{C}$ : écrire « $3i > 2i$ » ou « $z > 0$ » pour un complexe non réel n'a aucun sens.",
      "⚠️ La notation $\\sqrt{\\ }$ est réservée aux réels positifs : ne jamais écrire $\\sqrt{-1}$ ou $\\sqrt{-16}$ ; écrire que $-16 = (4i)^2$.",
      "⚠️ $(a + ib)^2 = a^2 - b^2 + 2iab$ (car $i^2 = -1$) et non $a^2 + b^2 + 2iab$."
    ],
    "flashcards": [
      {
        "q": "Que vaut $i^2$ ?",
        "a": "$i^2 = -1$."
      },
      {
        "q": "Quelles sont les solutions de $z^2 = -9$ dans $\\mathbb{C}$ ?",
        "a": "$z = 3i$ ou $z = -3i$."
      },
      {
        "q": "Que vaut $i^{2026}$ ?",
        "a": "$2026 = 4 \\times 506 + 2$, donc $i^{2026} = i^2 = -1$."
      },
      {
        "q": "Comment caractériser un complexe réel à l'aide du conjugué ?",
        "a": "$z \\in \\mathbb{R} \\iff \\bar{z} = z$."
      },
      {
        "q": "Que vaut $(1 + i)^2$ ?",
        "a": "$(1 + i)^2 = 1 + 2i + i^2 = 2i$."
      }
    ]
  },
  "TA2": {
    "title": "TA2 : Limites de suites et théorèmes de convergence",
    "domain": "Analyse et Suites",
    "objectives": [
      "Déterminer les limites de suites usuelles et lever les formes indéterminées.",
      "Énoncer et appliquer le théorème des gendarmes et les théorèmes de comparaison.",
      "Appliquer le théorème de convergence monotone pour les suites récurrentes.",
      "Connaître le comportement de $q^n$ selon la valeur de $q$ et l'utiliser.",
      "Déterminer la limite d'une suite récurrente convergente à l'aide d'un point fixe."
    ],
    "keyPoints": [
      {
        "title": "1. Opérations sur les limites et formes indéterminées",
        "content": "• Les 4 formes indéterminées fondamentales sont : $\\frac{\\infty}{\\infty}$, $\\frac{0}{0}$, $\\infty - \\infty$ et $0 \\times \\infty$.\n• Règle du monôme de plus haut degré : la limite en $+\\infty$ d'un quotient de polynômes en $n$ est égale à la limite du quotient de leurs monômes de plus haut degré."
      },
      {
        "title": "2. Théorèmes des gendarmes et de convergence monotone",
        "content": "• **Théorème des gendarmes** : Si pour tout $n \\ge n_0$, $v_n \\le u_n \\le w_n$ et si $\\lim v_n = \\lim w_n = l$, alors $(u_n)$ converge et $\\lim u_n = l$.\n• **Convergence monotone** : Toute suite croissante et majorée converge vers une limite réelle $l \\le M$. Toute suite décroissante et minorée converge vers une limite réelle $l \\ge m$."
      },
      {
        "title": "3. Définitions de la limite d'une suite",
        "content": "• $(u_n)$ **converge** vers le réel $\\ell$ si tout intervalle ouvert contenant $\\ell$ contient tous les termes $u_n$ **à partir d'un certain rang**. On note $\\lim\\limits_{n \\to +\\infty} u_n = \\ell$. Cette limite, si elle existe, est **unique**.\n• $(u_n)$ **tend vers $+\\infty$** si tout intervalle $]A ; +\\infty[$ contient tous les termes à partir d'un certain rang.\n• Une suite qui ne converge pas est dite **divergente** : soit elle tend vers $\\pm\\infty$, soit elle n'a pas de limite (comme $(-1)^n$).\n• **Propriété** : une suite croissante non majorée tend vers $+\\infty$ ; une suite décroissante non minorée tend vers $-\\infty$."
      },
      {
        "title": "4. Théorèmes de comparaison et passage à la limite",
        "content": "• **Comparaison (limites infinies)** : si $u_n \\le v_n$ à partir d'un certain rang et $\\lim u_n = +\\infty$, alors $\\lim v_n = +\\infty$. De même, si $u_n \\le v_n$ et $\\lim v_n = -\\infty$, alors $\\lim u_n = -\\infty$.\n• **Passage à la limite** : si $u_n \\le v_n$ à partir d'un certain rang, et si $(u_n)$ et $(v_n)$ convergent vers $\\ell$ et $\\ell'$, alors $\\ell \\le \\ell'$.\n• En particulier, si $(u_n)$ converge vers $\\ell$ et si $u_n \\le M$ pour tout $n$, alors $\\ell \\le M$."
      },
      {
        "title": "5. Limite d'une suite géométrique $(q^n)$",
        "content": "• Si $q > 1$ : $\\lim\\limits_{n \\to +\\infty} q^n = +\\infty$ (démonstration par l'inégalité de Bernoulli).\n• Si $q = 1$ : $q^n = 1$ pour tout $n$, la limite est $1$.\n• Si $-1 < q < 1$ : $\\lim\\limits_{n \\to +\\infty} q^n = 0$.\n• Si $q \\le -1$ : la suite $(q^n)$ n'a **pas de limite**.\nExemple : $u_n = \\dfrac{3^n - 2^n}{3^n + 1} = \\dfrac{1 - \\left(\\frac{2}{3}\\right)^n}{1 + \\left(\\frac{1}{3}\\right)^n}$ en divisant par $3^n$. Comme $\\left(\\frac{2}{3}\\right)^n \\to 0$ et $\\left(\\frac{1}{3}\\right)^n \\to 0$, $\\lim u_n = 1$."
      },
      {
        "title": "6. Suites récurrentes et point fixe",
        "content": "Soit $(u_n)$ définie par $u_{n+1} = f(u_n)$. Si $(u_n)$ **converge** vers $\\ell$ et si $f$ est **continue** en $\\ell$, alors $\\ell$ vérifie :\n$$f(\\ell) = \\ell$$\nOn dit que $\\ell$ est un **point fixe** de $f$. On résout donc l'équation $f(x) = x$, puis on sélectionne la bonne solution grâce aux informations connues sur la suite (signe, bornes, monotonie)."
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
      },
      {
        "title": "Méthode : Utiliser le théorème des gendarmes avec une fonction bornée",
        "example": "Déterminer la limite de $u_n = \\dfrac{3n + \\cos(n)}{n + 1}$ pour $n \\ge 1$.",
        "steps": [
          "**Étape 1 (Encadrement)** : Pour tout $n$, $-1 \\le \\cos(n) \\le 1$, donc $3n - 1 \\le 3n + \\cos(n) \\le 3n + 1$. En divisant par $n + 1 > 0$ :\n$$\\frac{3n - 1}{n + 1} \\le u_n \\le \\frac{3n + 1}{n + 1}$$",
          "**Étape 2 (Limites des bornes)** : $\\dfrac{3n - 1}{n + 1} = \\dfrac{3 - \\frac{1}{n}}{1 + \\frac{1}{n}} \\to 3$ et $\\dfrac{3n + 1}{n + 1} = \\dfrac{3 + \\frac{1}{n}}{1 + \\frac{1}{n}} \\to 3$.",
          "**Conclusion** : D'après le théorème des gendarmes, $(u_n)$ converge et $\\lim\\limits_{n \\to +\\infty} u_n = 3$."
        ]
      },
      {
        "title": "Méthode : Calculer la limite d'une suite récurrente convergente",
        "example": "Soit $u_0 = 0$ et $u_{n+1} = \\sqrt{3u_n + 4}$. On admet (voir TA1) que pour tout $n$, $0 \\le u_n \\le u_{n+1} \\le 4$. Déterminer $\\lim u_n$.",
        "steps": [
          "**Étape 1 (Convergence)** : La suite est croissante et majorée par $4$, donc elle converge vers un réel $\\ell$, avec $0 \\le \\ell \\le 4$ (passage à la limite).",
          "**Étape 2 (Point fixe)** : $f(x) = \\sqrt{3x + 4}$ est continue sur $[0 ; +\\infty[$, donc $\\ell = \\sqrt{3\\ell + 4}$. En élevant au carré : $\\ell^2 = 3\\ell + 4$, soit $\\ell^2 - 3\\ell - 4 = 0$, c'est-à-dire $(\\ell - 4)(\\ell + 1) = 0$.",
          "**Étape 3 (Sélection)** : $\\ell = 4$ ou $\\ell = -1$. Or $\\ell \\ge 0$, donc $\\ell = 4$.",
          "**Conclusion** : $\\lim\\limits_{n \\to +\\infty} u_n = 4$."
        ]
      },
      {
        "title": "Méthode : Déterminer un seuil avec un algorithme Python",
        "example": "On place $1000$ euros à $5\\,\\%$ par an : $u_n = 1000 \\times 1{,}05^n$. À partir de quelle année le capital dépasse-t-il $2000$ euros ?",
        "steps": [
          "**Étape 1 (Justification de l'existence)** : $1{,}05 > 1$, donc $\\lim 1{,}05^n = +\\infty$ et $\\lim u_n = +\\infty$ : le seuil sera forcément atteint.",
          "**Étape 2 (Programme)** :\n```python\nn = 0\nu = 1000\nwhile u <= 2000:\n    n = n + 1\n    u = u * 1.05\nprint(n)\n```",
          "**Étape 3 (Vérification)** : $1000 \\times 1{,}05^{14} \\approx 1979{,}93$ et $1000 \\times 1{,}05^{15} \\approx 2078{,}93$.",
          "**Conclusion** : Le programme affiche $15$ : le capital dépasse $2000$ euros à partir de la 15e année."
        ]
      }
    ],
    "traps": [
      "⚠️ Le théorème de convergence monotone garantit l'existence de la limite mais ne donne pas sa valeur !",
      "⚠️ Ne jamais confondre majorée et convergente : la suite $u_n = (-1)^n$ est bornée mais ne converge pas.",
      "⚠️ Le passage à la limite transforme une inégalité stricte en inégalité **large** : $\\frac{1}{n} > 0$ pour tout $n \\ge 1$, mais $\\lim \\frac{1}{n} = 0$.",
      "⚠️ Une suite croissante ne tend pas forcément vers $+\\infty$ : $u_n = 1 - \\frac{1}{n}$ est croissante et converge vers $1$.",
      "⚠️ $(-2)^n$ ne tend pas vers $+\\infty$ : ses termes changent de signe ($1, -2, 4, -8, \\dots$), la suite n'a pas de limite."
    ],
    "flashcards": [
      {
        "q": "Que dit le théorème de convergence monotone pour une suite croissante majorée ?",
        "a": "Elle converge vers une limite réelle finie inférieure ou égale à son majorant."
      },
      {
        "q": "Si $u_n \\ge 2^n$ pour tout $n$, quelle est la limite de $(u_n)$ ?",
        "a": "Par comparaison, $\\lim u_n = +\\infty$ car $\\lim 2^n = +\\infty$."
      },
      {
        "q": "Que vaut $\\lim q^n$ lorsque $-1 < q < 1$ ?",
        "a": "$0$."
      },
      {
        "q": "Que peut-on dire d'une suite croissante non majorée ?",
        "a": "Elle tend vers $+\\infty$."
      },
      {
        "q": "Si $u_{n+1} = f(u_n)$, $u_n \\to \\ell$ et $f$ continue en $\\ell$, quelle équation vérifie $\\ell$ ?",
        "a": "$f(\\ell) = \\ell$ : $\\ell$ est un point fixe de $f$."
      }
    ]
  },
  "TA4": {
    "title": "TA4 : Convexité, concavité et points d'inflexion",
    "domain": "Analyse et Fonctions",
    "objectives": [
      "Caractériser géométriquement et analytiquement la convexité d'une fonction deux fois dérivable.",
      "Relier le signe de la dérivée seconde $f''$ à la convexité de $f$.",
      "Déterminer les coordonnées des points d'inflexion d'une courbe représentative.",
      "Connaître la définition de la convexité par la position de la courbe par rapport à ses sécantes.",
      "Utiliser la convexité pour démontrer des inégalités ($e^x \\ge 1 + x$, $\\ln(x) \\le x - 1$)."
    ],
    "keyPoints": [
      {
        "title": "1. Définition et caractérisation de la convexité",
        "content": "Soit $f$ une fonction deux fois dérivable sur un intervalle $I$ :\n• $f$ est **convexe** sur $I \\iff$ sa courbe $\\mathcal{C}_f$ est située **au-dessus** de toutes ses tangentes $\\iff f'$ est croissante sur $I \\iff f''(x) \\ge 0$ pour tout $x \\in I$.\n• $f$ est **concave** sur $I \\iff$ sa courbe $\\mathcal{C}_f$ est située **en dessous** de toutes ses tangentes $\\iff f'$ est décroissante sur $I \\iff f''(x) \\le 0$ pour tout $x \\in I$."
      },
      {
        "title": "2. Point d'inflexion",
        "content": "Un **point d'inflexion** est un point où la courbe traverse sa tangente.\n• Théorème : Le point $A(a ; f(a))$ est un point d'inflexion de $\\mathcal{C}_f$ si et seulement si $f''(x)$ s'annule en $a$ **en changeant de signe**."
      },
      {
        "title": "3. Définition par les sécantes (cordes)",
        "content": "Soit $f$ définie sur un intervalle $I$. $f$ est **convexe** sur $I$ si, pour tous points $A$ et $B$ de sa courbe d'abscisses dans $I$, la portion de courbe située entre $A$ et $B$ est **en dessous** du segment $[AB]$.\nAvec des formules : pour tous $x, y \\in I$ et tout $t \\in [0 ; 1]$,\n$$f\\big(tx + (1-t)y\\big) \\le t f(x) + (1-t) f(y)$$\n$f$ est **concave** si l'inégalité est dans l'autre sens (courbe au-dessus de ses cordes).\nPour une fonction dérivable, les deux points de vue (cordes et tangentes) sont équivalents."
      },
      {
        "title": "4. Convexité des fonctions de référence",
        "content": "• **Convexes** sur leur ensemble de définition : $x \\mapsto x^2$, $x \\mapsto e^x$, $x \\mapsto |x|$.\n• **Concaves** : $x \\mapsto \\sqrt{x}$ sur $[0 ; +\\infty[$, $x \\mapsto \\ln(x)$ sur $]0 ; +\\infty[$ (car $\\ln''(x) = -\\frac{1}{x^2} < 0$).\n• $x \\mapsto x^3$ est concave sur $]-\\infty ; 0]$ et convexe sur $[0 ; +\\infty[$ : l'origine est un point d'inflexion.\n• $x \\mapsto \\frac{1}{x}$ est concave sur $]-\\infty ; 0[$ et convexe sur $]0 ; +\\infty[$ (pas de point d'inflexion : $0$ n'est pas dans le domaine)."
      },
      {
        "title": "5. Inégalités de convexité",
        "content": "Si $f$ est convexe sur $I$, sa courbe est au-dessus de chacune de ses tangentes : pour tout $a \\in I$ et tout $x \\in I$,\n$$f(x) \\ge f'(a)(x - a) + f(a)$$\nDeux inégalités classiques à connaître :\n• $e^x \\ge 1 + x$ pour tout réel $x$ (tangente en $0$ à la courbe de l'exponentielle) ;\n• $\\ln(x) \\le x - 1$ pour tout $x > 0$ (le logarithme est concave, $y = x - 1$ est sa tangente en $1$).\nEn un point d'inflexion, la courbe **traverse** sa tangente."
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
      },
      {
        "title": "Méthode : Démontrer une inégalité grâce à la convexité",
        "example": "Démontrer que pour tout réel $x$, $e^x \\ge x + 1$.",
        "steps": [
          "**Étape 1 (Convexité)** : $f(x) = e^x$ vérifie $f''(x) = e^x > 0$ sur $\\mathbb{R}$, donc $f$ est convexe sur $\\mathbb{R}$.",
          "**Étape 2 (Tangente en 0)** : $f(0) = 1$ et $f'(0) = e^0 = 1$, donc la tangente en $0$ a pour équation $y = 1 \\times (x - 0) + 1 = x + 1$.",
          "**Étape 3 (Position)** : une fonction convexe est au-dessus de ses tangentes, donc pour tout $x \\in \\mathbb{R}$, $e^x \\ge x + 1$.",
          "**Conclusion** : l'inégalité est démontrée, avec égalité uniquement en $x = 0$."
        ]
      },
      {
        "title": "Méthode : Étudier la convexité d'une fonction produit",
        "example": "Soit $f(x) = x e^x$ sur $\\mathbb{R}$. Étudier sa convexité et déterminer son point d'inflexion.",
        "steps": [
          "**Étape 1 (Dérivée première)** : $f = uv$ avec $u(x) = x$ et $v(x) = e^x$ : $f'(x) = 1 \\times e^x + x e^x = (1 + x)e^x$.",
          "**Étape 2 (Dérivée seconde)** : $f''(x) = 1 \\times e^x + (1 + x)e^x = (x + 2)e^x$.",
          "**Étape 3 (Signe)** : $e^x > 0$, donc $f''(x)$ a le signe de $x + 2$ : $f'' < 0$ sur $]-\\infty ; -2[$ et $f'' > 0$ sur $]-2 ; +\\infty[$.\n$f$ est concave sur $]-\\infty ; -2]$ et convexe sur $[-2 ; +\\infty[$.",
          "**Conclusion** : $f''$ s'annule en changeant de signe en $-2$ ; $f(-2) = -2e^{-2}$. Le point d'inflexion est $I\\left(-2 ; -2e^{-2}\\right)$."
        ]
      },
      {
        "title": "Méthode : Position de la courbe par rapport à la tangente en un point d'inflexion",
        "example": "Soit $f(x) = x^3 - 6x^2 + 9x + 1$, dont le point d'inflexion est $I(2 ; 3)$. Étudier la position de la courbe par rapport à sa tangente $T$ en $I$.",
        "steps": [
          "**Étape 1 (Tangente)** : $f'(x) = 3x^2 - 12x + 9$, donc $f'(2) = 12 - 24 + 9 = -3$. $T : y = -3(x - 2) + 3$, soit $y = -3x + 9$.",
          "**Étape 2 (Différence)** : $d(x) = f(x) - (-3x + 9) = x^3 - 6x^2 + 12x - 8 = (x - 2)^3$ (identité $(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$).",
          "**Étape 3 (Signe)** : $(x - 2)^3 < 0$ pour $x < 2$ et $(x - 2)^3 > 0$ pour $x > 2$.",
          "**Conclusion** : la courbe est en dessous de $T$ sur $]-\\infty ; 2[$ (zone où $f$ est concave) et au-dessus sur $]2 ; +\\infty[$ (zone où $f$ est convexe) : elle **traverse** sa tangente en $I$."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour être un point d'inflexion, il ne suffit pas que $f''(a) = 0$, il faut impérativement que $f''$ **change de signe** (contre-exemple : $f(x) = x^4$ en 0 a $f''(0) = 0$ mais reste toujours convexe).",
      "⚠️ Ne pas confondre **convexité** et **variations** : $x \\mapsto e^{-x}$ est décroissante et pourtant convexe. Le signe de $f''$ renseigne sur la convexité de $f$, le signe de $f'$ sur ses variations.",
      "⚠️ Si l'énoncé donne la courbe de $f'$, la convexité de $f$ se lit sur les **variations** de $f'$ (et non sur son signe).",
      "⚠️ Pour parler de point d'inflexion en $a$, il faut que $a$ appartienne au domaine : $x \\mapsto \\frac{1}{x}$ change de convexité « en $0$ » mais n'a pas de point d'inflexion."
    ],
    "flashcards": [
      {
        "q": "Quelle condition sur $f''$ assure que $f$ est convexe sur un intervalle ?",
        "a": "$f''(x) \\ge 0$ pour tout $x$ de l'intervalle."
      },
      {
        "q": "Où se situe la courbe d'une fonction concave par rapport à ses tangentes ?",
        "a": "Elle est entièrement située en dessous de ses tangentes."
      },
      {
        "q": "Où se situe la courbe d'une fonction convexe par rapport à ses cordes ?",
        "a": "En dessous de ses cordes (entre les deux points considérés)."
      },
      {
        "q": "La fonction $\\ln$ est-elle convexe ou concave ?",
        "a": "Concave sur $]0 ; +\\infty[$, car $\\ln''(x) = -\\frac{1}{x^2} < 0$."
      },
      {
        "q": "Quelle inégalité découle de la convexité de l'exponentielle ?",
        "a": "$e^x \\ge 1 + x$ pour tout réel $x$."
      }
    ]
  },
  "TA6": {
    "title": "TA6 : Primitives et équations différentielles linéaires",
    "domain": "Analyse et Fonctions",
    "objectives": [
      "Reconnaître et déterminer les primitives de fonctions usuelles et composées.",
      "Résoudre l'équation différentielle $y' = ay$ et $y' = ay + b$ ($a \\ne 0$).",
      "Déterminer l'unique solution vérifiant une condition initiale fixée $y(x_0) = y_0$.",
      "Résoudre une équation $y' = ay + f$ à l'aide d'une solution particulière.",
      "Modéliser une situation d'évolution (refroidissement, population) par une équation différentielle."
    ],
    "keyPoints": [
      {
        "title": "1. Primitives de formes composées usuelles",
        "content": "• $u' u^n \\implies \\frac{u^{n+1}}{n+1} + C$ ($n \\neq -1$)\n• $\\frac{u'}{u} \\implies \\ln(|u|) + C$\n• $u' e^u \\implies e^u + C$\n• $\\frac{u'}{\\sqrt{u}} \\implies 2\\sqrt{u} + C$"
      },
      {
        "title": "2. Résolution des équations différentielles linéaires",
        "content": "• Pour $y' = ay$ ($a \\in \\mathbb{R}$) : les solutions sont les fonctions $y(x) = C e^{ax}$ ($C \\in \\mathbb{R}$).\n• Pour $y' = ay + b$ ($a \\neq 0$) : les solutions sont les fonctions $y(x) = C e^{ax} - \\frac{b}{a}$ ($C \\in \\mathbb{R}$).\n• Pour toute condition initiale $(x_0, y_0)$, il existe **une unique solution** vérifiant $y(x_0) = y_0$."
      },
      {
        "title": "3. Primitives : définition et propriétés",
        "content": "• $F$ est une **primitive** de $f$ sur l'intervalle $I$ si $F$ est dérivable sur $I$ et $F' = f$.\n• **Théorème** : toute fonction **continue** sur un intervalle admet des primitives sur cet intervalle.\n• Si $F$ est une primitive de $f$, les primitives de $f$ sont les fonctions $x \\mapsto F(x) + C$, $C \\in \\mathbb{R}$ : deux primitives diffèrent d'une constante.\n• Pour $x_0 \\in I$ et $y_0 \\in \\mathbb{R}$, il existe une **unique** primitive $F$ telle que $F(x_0) = y_0$.\n• Une équation différentielle $y' = f$ a pour solutions exactement les primitives de $f$."
      },
      {
        "title": "4. Primitives usuelles",
        "content": "• $x^n$ ($n \\in \\mathbb{N}$) a pour primitives $\\dfrac{x^{n+1}}{n+1} + C$ sur $\\mathbb{R}$.\n• $\\dfrac{1}{x^2}$ a pour primitives $-\\dfrac{1}{x} + C$ sur $]0 ; +\\infty[$ (ou $]-\\infty ; 0[$).\n• $\\dfrac{1}{x}$ a pour primitives $\\ln(x) + C$ sur $]0 ; +\\infty[$.\n• $\\dfrac{1}{\\sqrt{x}}$ a pour primitives $2\\sqrt{x} + C$ sur $]0 ; +\\infty[$.\n• $e^x$ a pour primitives $e^x + C$ ; $e^{ax+b}$ ($a \\ne 0$) a pour primitives $\\dfrac{1}{a}e^{ax+b} + C$.\n• $\\cos(x)$ a pour primitives $\\sin(x) + C$ ; $\\sin(x)$ a pour primitives $-\\cos(x) + C$."
      },
      {
        "title": "5. Équation $y' = ay + f$ : structure des solutions",
        "content": "Soit $a \\ne 0$ un réel et $f$ une fonction définie sur $I$. Si $g$ est **une** solution particulière de $(E) : y' = ay + f$, alors les solutions de $(E)$ sont les fonctions :\n$$y(x) = Ce^{ax} + g(x), \\quad C \\in \\mathbb{R}$$\n**Solution générale = solutions de $y' = ay$ + une solution particulière.**\nExemple de modélisation (loi de Newton) : la température $\\theta(t)$ d'un café dans une pièce à $20$ °C vérifie $\\theta' = -k(\\theta - 20)$ avec $k > 0$, soit $\\theta' = -k\\theta + 20k$ ; les solutions sont $\\theta(t) = Ce^{-kt} + 20$, qui tendent vers $20$ quand $t \\to +\\infty$."
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
      },
      {
        "title": "Méthode : Trouver une primitive d'une forme composée",
        "example": "Déterminer une primitive de $f(x) = \\dfrac{x}{x^2 + 1}$, de $g(x) = (2x + 1)e^{x^2 + x}$ et de $h(x) = 3x(x^2 + 1)^4$ sur $\\mathbb{R}$.",
        "steps": [
          "**Étape 1 ($f$, forme $\\frac{u'}{u}$)** : avec $u(x) = x^2 + 1 > 0$, $u'(x) = 2x$, donc $f = \\dfrac{1}{2} \\times \\dfrac{u'}{u}$. Une primitive est $F(x) = \\dfrac{1}{2}\\ln(x^2 + 1)$.",
          "**Étape 2 ($g$, forme $u'e^u$)** : avec $u(x) = x^2 + x$, $u'(x) = 2x + 1$, donc $g = u'e^u$ et $G(x) = e^{x^2 + x}$.",
          "**Étape 3 ($h$, forme $u'u^n$)** : avec $u(x) = x^2 + 1$, $h = \\dfrac{3}{2} \\times u'u^4$, donc $H(x) = \\dfrac{3}{2} \\times \\dfrac{(x^2 + 1)^5}{5} = \\dfrac{3(x^2 + 1)^5}{10}$.",
          "**Conclusion (vérification)** : $H'(x) = \\dfrac{3 \\times 5 \\times 2x(x^2 + 1)^4}{10} = 3x(x^2 + 1)^4 = h(x)$. On vérifie toujours une primitive en la dérivant."
        ]
      },
      {
        "title": "Méthode : Résoudre $y' = ay + f$ avec une solution particulière affine",
        "example": "Soit $(E) : y' = 2y - 4x$. Chercher une solution particulière affine, puis la solution de $(E)$ vérifiant $y(0) = 3$.",
        "steps": [
          "**Étape 1 (Solution particulière)** : on cherche $g(x) = mx + p$. Alors $g'(x) = m$ et $(E)$ donne $m = 2(mx + p) - 4x = (2m - 4)x + 2p$ pour tout $x$. Par identification : $2m - 4 = 0$ et $m = 2p$, d'où $m = 2$ et $p = 1$ : $g(x) = 2x + 1$.",
          "**Étape 2 (Vérification)** : $g'(x) = 2$ et $2g(x) - 4x = 4x + 2 - 4x = 2$ : on retrouve bien $g'(x)$.",
          "**Étape 3 (Solution générale)** : les solutions de $y' = 2y$ sont $Ce^{2x}$, donc celles de $(E)$ sont $y(x) = Ce^{2x} + 2x + 1$, $C \\in \\mathbb{R}$.",
          "**Conclusion** : $y(0) = C + 1 = 3$ donne $C = 2$. L'unique solution est $y(x) = 2e^{2x} + 2x + 1$."
        ]
      },
      {
        "title": "Méthode : Modéliser un refroidissement par une équation différentielle",
        "example": "Un café à $80$ °C est posé dans une pièce à $20$ °C. Sa température $\\theta(t)$ (en °C, $t$ en minutes) vérifie $\\theta' = -0{,}1(\\theta - 20)$. Au bout de combien de temps atteint-il $40$ °C ?",
        "steps": [
          "**Étape 1 (Forme $y' = ay + b$)** : $\\theta' = -0{,}1\\theta + 2$, avec $a = -0{,}1$ et $b = 2$ ; $-\\dfrac{b}{a} = 20$. Les solutions sont $\\theta(t) = Ce^{-0{,}1t} + 20$.",
          "**Étape 2 (Condition initiale)** : $\\theta(0) = C + 20 = 80$, donc $C = 60$ et $\\theta(t) = 60e^{-0{,}1t} + 20$.",
          "**Étape 3 (Équation)** : $\\theta(t) = 40 \\iff 60e^{-0{,}1t} = 20 \\iff e^{-0{,}1t} = \\dfrac{1}{3} \\iff -0{,}1t = -\\ln(3) \\iff t = 10\\ln(3) \\approx 10{,}99$.",
          "**Conclusion** : le café atteint $40$ °C au bout d'environ $11$ minutes. Comme $\\lim\\limits_{t \\to +\\infty} \\theta(t) = 20$, sa température tend vers celle de la pièce."
        ]
      }
    ],
    "traps": [
      "⚠️ La solution particulière constante de $y' = ay + b$ est $-\\frac{b}{a}$ et NON $+\\frac{b}{a}$ !",
      "⚠️ Une primitive d'un produit n'est **pas** le produit des primitives : $x e^x$ n'a pas pour primitive $\\frac{x^2}{2}e^x$ (dériver pour s'en convaincre).",
      "⚠️ La constante $C$ se détermine avec la condition initiale sur la solution **complète** $Ce^{ax} + g(x)$, jamais sur $Ce^{ax}$ seul.",
      "⚠️ Une primitive de $e^{3x}$ est $\\frac{1}{3}e^{3x}$ et non $e^{3x}$ ni $3e^{3x}$."
    ],
    "flashcards": [
      {
        "q": "Quelles sont les solutions de $y' = 2y$ sur $\\mathbb{R}$ ?",
        "a": "$y(x) = C e^{2x}$ avec $C \\in \\mathbb{R}$."
      },
      {
        "q": "Quelle est la valeur de la solution particulière constante de $y' = ay + b$ ?",
        "a": "$y_p = -\\frac{b}{a}$."
      },
      {
        "q": "Donner les primitives de $\\cos$ sur $\\mathbb{R}$.",
        "a": "$x \\mapsto \\sin(x) + C$, $C \\in \\mathbb{R}$."
      },
      {
        "q": "Donner une primitive de $x \\mapsto e^{3x}$.",
        "a": "$x \\mapsto \\frac{1}{3}e^{3x}$."
      },
      {
        "q": "Si $g$ est une solution particulière de $y' = ay + f$, quelles sont toutes les solutions ?",
        "a": "Les fonctions $x \\mapsto Ce^{ax} + g(x)$, $C \\in \\mathbb{R}$."
      }
    ]
  },
  "TG1": {
    "title": "TG1 : Vecteurs, droites et plans dans l'espace",
    "domain": "Géométrie de l'Espace",
    "objectives": [
      "Caractériser la colinéarité de deux vecteurs et la coplanarité de trois vecteurs dans l'espace.",
      "Écrire et exploiter la représentation paramétrique d'une droite de l'espace.",
      "Étudier les positions relatives de deux droites (parallèles, sécantes ou non coplanaires).",
      "Décomposer un vecteur dans une base de l'espace et démontrer que quatre points sont coplanaires.",
      "Étudier les positions relatives de droites et de plans (parallélisme, intersection)."
    ],
    "keyPoints": [
      {
        "title": "1. Représentation paramétrique d'une droite",
        "content": "La droite passant par $A(x_A ; y_A ; z_A)$ et de vecteur directeur $\\vec{u}(a ; b ; c)$ admet pour représentation paramétrique :\n$$\\begin{cases} x = x_A + at \\\\ y = y_A + bt \\\\ z = z_A + ct \\end{cases} \\quad (t \\in \\mathbb{R})$$"
      },
      {
        "title": "2. Positions relatives dans l'espace",
        "content": "• Deux droites ayant des vecteurs directeurs colinéaires sont **strictement parallèles** ou **confondues**.\n• Deux droites sans vecteurs directeurs colinéaires sont **sécantes** (un unique point d'intersection) ou **non coplanaires** (aucun point d'intersection et aucun plan ne les contient)."
      },
      {
        "title": "3. Colinéarité, coplanarité, bases de l'espace",
        "content": "• $\\vec{u}$ et $\\vec{v}$ sont **colinéaires** s'il existe un réel $k$ tel que $\\vec{v} = k\\vec{u}$ (ou si $\\vec{u} = \\vec{0}$).\n• Trois vecteurs $\\vec{u}$, $\\vec{v}$, $\\vec{w}$ avec $\\vec{u}$ et $\\vec{v}$ non colinéaires sont **coplanaires** s'il existe deux réels $a$ et $b$ tels que $\\vec{w} = a\\vec{u} + b\\vec{v}$.\n• Quatre points $A$, $B$, $C$, $D$ sont **coplanaires** si et seulement si les vecteurs $\\overrightarrow{AB}$, $\\overrightarrow{AC}$, $\\overrightarrow{AD}$ sont coplanaires.\n• Trois vecteurs **non coplanaires** $(\\vec{i}, \\vec{j}, \\vec{k})$ forment une **base** de l'espace : tout vecteur $\\vec{w}$ s'écrit de manière unique $\\vec{w} = x\\vec{i} + y\\vec{j} + z\\vec{k}$ ; $(x ; y ; z)$ sont ses coordonnées. Avec une origine $O$, $(O ; \\vec{i}, \\vec{j}, \\vec{k})$ est un **repère** de l'espace."
      },
      {
        "title": "4. Caractérisation vectorielle d'un plan",
        "content": "Soit $A$ un point et $\\vec{u}$, $\\vec{v}$ deux vecteurs **non colinéaires**. Le plan $\\mathcal{P}$ passant par $A$ et dirigé par $\\vec{u}$ et $\\vec{v}$ est l'ensemble des points $M$ tels que :\n$$\\overrightarrow{AM} = s\\vec{u} + t\\vec{v}, \\quad s, t \\in \\mathbb{R}$$\n• Une droite $d$ de vecteur directeur $\\vec{w}$ est **parallèle** à $\\mathcal{P}$ si et seulement si $\\vec{w}$, $\\vec{u}$, $\\vec{v}$ sont coplanaires.\n• Deux plans sont parallèles si et seulement si deux vecteurs directeurs non colinéaires de l'un dirigent aussi l'autre."
      },
      {
        "title": "5. Positions relatives de plans et théorème du toit",
        "content": "• Deux plans distincts sont soit **parallèles** (aucun point commun), soit **sécants** suivant une droite.\n• Une droite et un plan sont soit sécants en un point, soit parallèles (droite incluse dans le plan ou sans point commun).\n• **Théorème du toit** : si deux plans sécants $\\mathcal{P}_1$ et $\\mathcal{P}_2$ contiennent respectivement deux droites parallèles $d_1$ et $d_2$, alors leur droite d'intersection $\\Delta$ est parallèle à $d_1$ et à $d_2$.\n• Si un plan $\\mathcal{P}$ coupe deux plans parallèles, les droites d'intersection obtenues sont parallèles."
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
      },
      {
        "title": "Méthode : Étudier la position relative de deux droites",
        "example": "Soient $d_1 : \\begin{cases} x = 1 + t \\\\ y = 2t \\\\ z = 2 - t \\end{cases}$ ($t \\in \\mathbb{R}$) et $d_2 : \\begin{cases} x = 2s \\\\ y = 2 \\\\ z = s \\end{cases}$ ($s \\in \\mathbb{R}$). Étudier leur position relative.",
        "steps": [
          "**Étape 1 (Vecteurs directeurs)** : $\\vec{u}(1 ; 2 ; -1)$ dirige $d_1$ et $\\vec{v}(2 ; 0 ; 1)$ dirige $d_2$. Ils ne sont pas colinéaires (la 2e coordonnée de $\\vec{v}$ est nulle mais pas celle de $\\vec{u}$) : les droites sont sécantes ou non coplanaires.",
          "**Étape 2 (Système)** : on cherche $t$ et $s$ tels que $1 + t = 2s$, $2t = 2$ et $2 - t = s$. La 2e équation donne $t = 1$, la 1re donne alors $s = 1$.",
          "**Étape 3 (Vérification de la 3e équation)** : $2 - t = 1$ et $s = 1$ : elle est vérifiée. Le point commun est obtenu pour $t = 1$ : $(2 ; 2 ; 1)$.",
          "**Conclusion** : $d_1$ et $d_2$ sont sécantes en $I(2 ; 2 ; 1)$. Si la 3e équation n'avait pas été vérifiée, les droites auraient été non coplanaires."
        ]
      },
      {
        "title": "Méthode : Démontrer que quatre points sont coplanaires",
        "example": "Soient $A(1 ; 0 ; 0)$, $B(0 ; 1 ; 0)$, $C(0 ; 0 ; 1)$ et $D(1 ; 1 ; -1)$. Les points $A$, $B$, $C$, $D$ sont-ils coplanaires ?",
        "steps": [
          "**Étape 1 (Vecteurs)** : $\\overrightarrow{AB}(-1 ; 1 ; 0)$, $\\overrightarrow{AC}(-1 ; 0 ; 1)$ et $\\overrightarrow{AD}(0 ; 1 ; -1)$. $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ ne sont pas colinéaires.",
          "**Étape 2 (Combinaison linéaire)** : on cherche $a$, $b$ tels que $\\overrightarrow{AD} = a\\overrightarrow{AB} + b\\overrightarrow{AC}$ :\n$$\\begin{cases} 0 = -a - b \\\\ 1 = a \\\\ -1 = b \\end{cases}$$\nLes deux dernières lignes donnent $a = 1$ et $b = -1$ ; la première est vérifiée : $-1 + 1 = 0$.",
          "**Conclusion** : $\\overrightarrow{AD} = \\overrightarrow{AB} - \\overrightarrow{AC}$, donc les vecteurs sont coplanaires et les points $A$, $B$, $C$, $D$ sont **coplanaires**."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans l'espace, deux droites qui ne se coupent pas ne sont PAS obligatoirement parallèles : elles peuvent être **non coplanaires** !",
      "⚠️ Pour chercher l'intersection de deux droites, utiliser **deux paramètres différents** ($t$ et $s$) : un même point n'a aucune raison d'être obtenu pour la même valeur du paramètre.",
      "⚠️ Une droite admet une **infinité** de représentations paramétriques : deux systèmes d'apparence différente peuvent décrire la même droite.",
      "⚠️ Trois vecteurs deux à deux non colinéaires peuvent être coplanaires : il faut tester si l'un est combinaison linéaire des deux autres."
    ],
    "flashcards": [
      {
        "q": "Combien de paramètres interviennent dans la représentation paramétrique d'une droite de l'espace ?",
        "a": "Un seul paramètre réel $t \\in \\mathbb{R}$."
      },
      {
        "q": "Comment qualifie-t-on deux droites de l'espace sans intersection et non parallèles ?",
        "a": "Elles sont non coplanaires."
      },
      {
        "q": "Le point $A(1 ; 0 ; 2)$ appartient-il à la droite $\\begin{cases} x = 3 + t \\\\ y = 4 + 2t \\\\ z = 4 + t \\end{cases}$ ?",
        "a": "Oui : $x = 1$ impose $t = -2$, et alors $y = 0$ et $z = 2$."
      },
      {
        "q": "Énoncer le théorème du toit.",
        "a": "Si deux plans sécants contiennent respectivement deux droites parallèles, leur droite d'intersection est parallèle à ces deux droites."
      },
      {
        "q": "Qu'est-ce qu'une base de l'espace ?",
        "a": "Un triplet de vecteurs non coplanaires $(\\vec{i}, \\vec{j}, \\vec{k})$ : tout vecteur s'écrit de façon unique $x\\vec{i} + y\\vec{j} + z\\vec{k}$."
      }
    ]
  },
  "TS2": {
    "title": "TS2 : Sommes de variables aléatoires et loi des grands nombres",
    "domain": "Probabilités et Statistiques",
    "objectives": [
      "Calculer l'espérance et la variance de sommes et moyennes de variables aléatoires indépendantes.",
      "Énoncer et appliquer l'inégalité de Bienaymé-Tchebychev et l'inégalité de concentration.",
      "Justifier rigoureusement le principe de la loi faible des grands nombres.",
      "Utiliser la linéarité de l'espérance et les propriétés de la variance ($V(aX + b) = a^2V(X)$).",
      "Déterminer une taille d'échantillon à l'aide de l'inégalité de concentration."
    ],
    "keyPoints": [
      {
        "title": "1. Espérance et variance de la moyenne d'un échantillon",
        "content": "Soient $X_1, \\dots, X_n$ des variables indépendantes de même loi, d'espérance $\\mu$ et de variance $\\sigma^2$.\n• Moyenne empirique : $M_n = \\frac{1}{n} \\sum_{i=1}^n X_i$.\n• $E(M_n) = \\mu$ et $V(M_n) = \\frac{\\sigma^2}{n}$, d'où $\\sigma(M_n) = \\frac{\\sigma}{\\sqrt{n}}$."
      },
      {
        "title": "2. Inégalités de Bienaymé-Tchebychev et de concentration",
        "content": "• **Bienaymé-Tchebychev** : Pour toute variable aléatoire $X$ d'espérance $\\mu$ et de variance $\\sigma^2$ :\n$$P(|X - \\mu| \\ge \\delta) \\le \\frac{\\sigma^2}{\\delta^2} \\quad (\\delta > 0)$$\n• **Inégalité de concentration** appliquée à $M_n$ :\n$$P(|M_n - \\mu| \\ge \\delta) \\le \\frac{\\sigma^2}{n \\delta^2} \\xrightarrow[n \\to +\\infty]{} 0$$"
      },
      {
        "title": "3. Somme de variables aléatoires",
        "content": "Soient $X$ et $Y$ deux variables aléatoires définies sur le même univers, et $a$, $b$ deux réels.\n• **Linéarité de l'espérance** (toujours vraie) : $E(X + Y) = E(X) + E(Y)$ et $E(aX + b) = aE(X) + b$.\n• $V(aX + b) = a^2 V(X)$ et donc $\\sigma(aX + b) = |a|\\,\\sigma(X)$.\n• Si $X$ et $Y$ sont **indépendantes** : $V(X + Y) = V(X) + V(Y)$.\n• Pour un **échantillon** $(X_1, \\dots, X_n)$ de variables indépendantes de même loi (espérance $\\mu$, variance $\\sigma^2$), la somme $S_n = X_1 + \\dots + X_n$ vérifie $E(S_n) = n\\mu$ et $V(S_n) = n\\sigma^2$."
      },
      {
        "title": "4. Autre forme de Bienaymé-Tchebychev",
        "content": "En passant à l'événement contraire, pour tout $\\delta > 0$ :\n$$P(|X - \\mu| < \\delta) \\ge 1 - \\frac{V(X)}{\\delta^2}$$\nAvec $\\delta = k\\sigma$ ($k > 0$) : $P(|X - \\mu| < k\\sigma) \\ge 1 - \\dfrac{1}{k^2}$. Ainsi, quelle que soit la loi de $X$, au moins $75\\,\\%$ des valeurs sont à moins de $2\\sigma$ de la moyenne ($k = 2$) et au moins $\\frac{8}{9} \\approx 89\\,\\%$ à moins de $3\\sigma$ ($k = 3$)."
      },
      {
        "title": "5. Loi faible des grands nombres",
        "content": "Soit $(X_1, \\dots, X_n)$ un échantillon de variables indépendantes de même loi d'espérance $\\mu$, et $M_n = \\frac{X_1 + \\dots + X_n}{n}$. Pour tout réel $\\delta > 0$ :\n$$\\lim_{n \\to +\\infty} P(|M_n - \\mu| \\ge \\delta) = 0$$\n**Interprétation** : plus l'échantillon est grand, plus la moyenne observée a de chances d'être proche de l'espérance. Pour des variables de Bernoulli de paramètre $p$, $M_n$ est la **fréquence** de succès : elle se rapproche de $p$. C'est ce qui justifie l'estimation d'une probabilité par une fréquence (simulations)."
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
      },
      {
        "title": "Méthode : Espérance et variance d'une somme de variables indépendantes",
        "example": "On lance $10$ fois un dé équilibré à six faces ; $S$ est la somme des résultats. Un joueur gagne $G = 2S - 60$ euros. Calculer $E(G)$ et $V(G)$.",
        "steps": [
          "**Étape 1 (Un lancer)** : pour un lancer $X$, $E(X) = \\dfrac{1 + 2 + \\dots + 6}{6} = \\dfrac{21}{6} = 3{,}5$ et $E(X^2) = \\dfrac{1 + 4 + 9 + 16 + 25 + 36}{6} = \\dfrac{91}{6}$, donc $V(X) = \\dfrac{91}{6} - 3{,}5^2 = \\dfrac{182 - 147}{12} = \\dfrac{35}{12}$.",
          "**Étape 2 (Somme)** : $S = X_1 + \\dots + X_{10}$ avec des lancers indépendants de même loi : $E(S) = 10 \\times 3{,}5 = 35$ et $V(S) = 10 \\times \\dfrac{35}{12} = \\dfrac{175}{6}$.",
          "**Étape 3 (Transformation affine)** : $E(G) = 2E(S) - 60 = 70 - 60 = 10$ et $V(G) = 2^2 V(S) = 4 \\times \\dfrac{175}{6} = \\dfrac{350}{3} \\approx 116{,}7$.",
          "**Conclusion** : en moyenne le joueur gagne $10$ euros ; l'écart-type de son gain est $\\sqrt{\\frac{350}{3}} \\approx 10{,}8$ euros."
        ]
      },
      {
        "title": "Méthode : Déterminer une taille d'échantillon avec l'inégalité de concentration",
        "example": "On lance $n$ fois une pièce équilibrée et $M_n$ est la fréquence de « pile ». Déterminer $n$ pour que $P(|M_n - 0{,}5| \\ge 0{,}05) \\le 0{,}05$.",
        "steps": [
          "**Étape 1 (Paramètres)** : $M_n$ est la moyenne de $n$ variables de Bernoulli indépendantes de paramètre $p = 0{,}5$ : $\\mu = 0{,}5$ et $\\sigma^2 = 0{,}5 \\times 0{,}5 = 0{,}25$.",
          "**Étape 2 (Inégalité de concentration)** : avec $\\delta = 0{,}05$, $P(|M_n - 0{,}5| \\ge 0{,}05) \\le \\dfrac{0{,}25}{n \\times 0{,}05^2} = \\dfrac{0{,}25}{0{,}0025\\,n} = \\dfrac{100}{n}$.",
          "**Étape 3 (Condition suffisante)** : il suffit que $\\dfrac{100}{n} \\le 0{,}05$, c'est-à-dire $n \\ge \\dfrac{100}{0{,}05} = 2000$.",
          "**Conclusion** : avec au moins $2000$ lancers, la probabilité que la fréquence de « pile » s'écarte de $0{,}5$ d'au moins $0{,}05$ est inférieure ou égale à $0{,}05$. (Cette borne est une condition suffisante, souvent pessimiste.)"
        ]
      },
      {
        "title": "Méthode : Minorer une probabilité d'intervalle centré",
        "example": "On lance $100$ fois une pièce équilibrée ; $X$ est le nombre de « pile ». Minorer $P(40 < X < 60)$ avec l'inégalité de Bienaymé-Tchebychev.",
        "steps": [
          "**Étape 1 (Paramètres)** : $X \\sim \\mathcal{B}(100 ; 0{,}5)$, donc $E(X) = 50$ et $V(X) = 100 \\times 0{,}5 \\times 0{,}5 = 25$.",
          "**Étape 2 (Intervalle centré)** : $40 < X < 60 \\iff -10 < X - 50 < 10 \\iff |X - 50| < 10$.",
          "**Étape 3 (Inégalité)** : $P(|X - 50| < 10) = 1 - P(|X - 50| \\ge 10) \\ge 1 - \\dfrac{25}{10^2} = 0{,}75$.",
          "**Conclusion** : $P(40 < X < 60) \\ge 0{,}75$. Le calcul exact avec la loi binomiale donne environ $0{,}943$ : la minoration est correcte mais peu précise."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour que $V(X + Y) = V(X) + V(Y)$, l'indépendance de $X$ et $Y$ est **indispensable** !",
      "⚠️ Pour $X$ et $Y$ indépendantes, $V(X - Y) = V(X) + V(Y)$ et non $V(X) - V(Y)$ : les variances s'additionnent toujours.",
      "⚠️ Ne pas confondre $2X$ et $X_1 + X_2$ : $V(2X) = 4V(X)$, alors que pour deux copies indépendantes $V(X_1 + X_2) = 2V(X)$.",
      "⚠️ L'inégalité de Bienaymé-Tchebychev donne une **majoration**, pas une valeur approchée de la probabilité : la vraie valeur est souvent bien plus petite."
    ],
    "flashcards": [
      {
        "q": "Que vaut la variance de la moyenne empirique $M_n$ de $n$ variables i.i.d. de variance $\\sigma^2$ ?",
        "a": "$V(M_n) = \\frac{\\sigma^2}{n}$."
      },
      {
        "q": "Énoncer l'inégalité de Bienaymé-Tchebychev.",
        "a": "$P(|X - \\mu| \\ge \\delta) \\le \\frac{V(X)}{\\delta^2}$ pour tout $\\delta > 0$."
      },
      {
        "q": "L'égalité $E(X + Y) = E(X) + E(Y)$ nécessite-t-elle l'indépendance ?",
        "a": "Non, la linéarité de l'espérance est toujours vraie. C'est pour la variance que l'indépendance est nécessaire."
      },
      {
        "q": "Exprimer $V(3X - 2)$ en fonction de $V(X)$.",
        "a": "$V(3X - 2) = 9V(X)$."
      },
      {
        "q": "Énoncer la loi faible des grands nombres.",
        "a": "Pour tout $\\delta > 0$, $\\lim\\limits_{n \\to +\\infty} P(|M_n - \\mu| \\ge \\delta) = 0$, où $M_n$ est la moyenne d'un échantillon de taille $n$."
      }
    ]
  },
  "TX2": {
    "title": "TX2 : Nombres complexes et géométrie : forme trigonométrique et exponentielle",
    "domain": "Mathématiques Expertes",
    "objectives": [
      "Calculer le module $|z|$ et un argument $\\arg(z)$ d'un nombre complexe non nul.",
      "Passer de la forme algébrique à la forme trigonométrique et exponentielle $r e^{i\\theta}$.",
      "Interpréter géométriquement les modules (distances) et arguments (angles orientés de vecteurs).",
      "Utiliser les formules de Moivre et d'Euler.",
      "Connaître les racines $n$-ièmes de l'unité et leur interprétation géométrique."
    ],
    "keyPoints": [
      {
        "title": "1. Forme trigonométrique et exponentielle",
        "content": "Pour $z = a + ib \\ne 0$ :\n• Module : $|z| = \\sqrt{a^2 + b^2}$.\n• Argument $\\theta = \\arg(z) \\pmod{2\\pi}$ vérifiant $\\cos\\theta = \\frac{a}{|z|}$ et $\\sin\\theta = \\frac{b}{|z|}$.\n• Forme exponentielle : $z = r e^{i\\theta}$ avec $r = |z| > 0$."
      },
      {
        "title": "2. Interprétation géométrique",
        "content": "Soient $A(z_A)$, $B(z_B)$, $C(z_C)$ et $D(z_D)$ dans le plan complexe :\n• Distance : $AB = |z_B - z_A|$.\n• Angle orienté : $(\\vec{AB} ; \\vec{CD}) = \\arg\\left(\\frac{z_D - z_C}{z_B - z_A}\\right) \\pmod{2\\pi}$.\n• Alignement : $A, B, C$ alignés $\\iff \\frac{z_C - z_A}{z_B - z_A} \\in \\mathbb{R}$."
      },
      {
        "title": "3. Propriétés du module et de l'argument",
        "content": "Pour tous complexes non nuls $z$, $z'$ et tout entier $n$ :\n• $|zz'| = |z| \\times |z'|$, $\\left|\\dfrac{z}{z'}\\right| = \\dfrac{|z|}{|z'|}$, $|z^n| = |z|^n$, $|\\bar{z}| = |z|$ et $z\\bar{z} = |z|^2$.\n• $\\arg(zz') = \\arg(z) + \\arg(z')$, $\\arg\\left(\\dfrac{z}{z'}\\right) = \\arg(z) - \\arg(z')$, $\\arg(z^n) = n\\arg(z)$, $\\arg(\\bar{z}) = -\\arg(z)$ (modulo $2\\pi$).\n• En notation exponentielle : $e^{i\\theta} \\times e^{i\\theta'} = e^{i(\\theta + \\theta')}$ et $\\left(e^{i\\theta}\\right)^n = e^{in\\theta}$.\n• **Inégalité triangulaire** : $|z + z'| \\le |z| + |z'|$."
      },
      {
        "title": "4. Formules de Moivre et d'Euler",
        "content": "• **Moivre** : pour tout réel $\\theta$ et tout entier $n$, $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$.\n• **Euler** : pour tout réel $\\theta$,\n$$\\cos\\theta = \\frac{e^{i\\theta} + e^{-i\\theta}}{2} \\qquad \\sin\\theta = \\frac{e^{i\\theta} - e^{-i\\theta}}{2i}$$\n• Application (formules de duplication) : en développant $(\\cos\\theta + i\\sin\\theta)^2$ et en identifiant avec $\\cos(2\\theta) + i\\sin(2\\theta)$, on obtient $\\cos(2\\theta) = \\cos^2\\theta - \\sin^2\\theta$ et $\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$."
      },
      {
        "title": "5. Racines $n$-ièmes de l'unité",
        "content": "Pour $n \\ge 2$, les solutions de $z^n = 1$ sont les $n$ nombres :\n$$\\omega_k = e^{\\frac{2ik\\pi}{n}}, \\quad k \\in \\{0, 1, \\dots, n - 1\\}$$\n• Leurs images sont les sommets d'un **polygone régulier** à $n$ côtés inscrit dans le cercle unité.\n• Leur somme est nulle : $1 + \\omega_1 + \\dots + \\omega_{n-1} = 0$.\n• Cas $n = 3$ : $1$, $j = e^{\\frac{2i\\pi}{3}} = -\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$ et $j^2 = \\bar{j}$, avec $1 + j + j^2 = 0$ (triangle équilatéral)."
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
      },
      {
        "title": "Méthode : Calculer une puissance grâce à la forme exponentielle",
        "example": "Calculer $(1 + i)^{10}$.",
        "steps": [
          "**Étape 1 (Forme exponentielle)** : $|1 + i| = \\sqrt{2}$ et $\\cos\\theta = \\sin\\theta = \\dfrac{\\sqrt{2}}{2}$, donc $1 + i = \\sqrt{2}\\,e^{i\\frac{\\pi}{4}}$.",
          "**Étape 2 (Puissance)** : $(1 + i)^{10} = \\left(\\sqrt{2}\\right)^{10} e^{i\\frac{10\\pi}{4}} = 32\\,e^{i\\frac{5\\pi}{2}}$.",
          "**Étape 3 (Réduction de l'argument)** : $\\dfrac{5\\pi}{2} = \\dfrac{\\pi}{2} + 2\\pi$, donc $e^{i\\frac{5\\pi}{2}} = e^{i\\frac{\\pi}{2}} = i$.",
          "**Conclusion** : $(1 + i)^{10} = 32i$. Contrôle : $(1 + i)^2 = 2i$, donc $(1 + i)^{10} = (2i)^5 = 32i^5 = 32i$."
        ]
      },
      {
        "title": "Méthode : Déterminer la nature d'un triangle avec les complexes",
        "example": "Soient $A$, $B$, $C$ d'affixes $z_A = 1 + i$, $z_B = 3 + 2i$ et $z_C = 3i$. Déterminer la nature du triangle $ABC$.",
        "steps": [
          "**Étape 1 (Quotient)** : $\\dfrac{z_C - z_A}{z_B - z_A} = \\dfrac{-1 + 2i}{2 + i}$.",
          "**Étape 2 (Forme algébrique)** : $\\dfrac{(-1 + 2i)(2 - i)}{(2 + i)(2 - i)} = \\dfrac{-2 + i + 4i - 2i^2}{5} = \\dfrac{-2 + 2 + 5i}{5} = i$.",
          "**Étape 3 (Interprétation)** : $\\left|\\dfrac{z_C - z_A}{z_B - z_A}\\right| = |i| = 1$, donc $AC = AB$ ; et $\\left(\\overrightarrow{AB}, \\overrightarrow{AC}\\right) = \\arg(i) = \\dfrac{\\pi}{2} \\pmod{2\\pi}$.",
          "**Conclusion** : le triangle $ABC$ est **isocèle rectangle en $A$**."
        ]
      },
      {
        "title": "Méthode : Linéariser une puissance de cosinus avec les formules d'Euler",
        "example": "Exprimer $\\cos^3\\theta$ en fonction de $\\cos(3\\theta)$ et $\\cos\\theta$.",
        "steps": [
          "**Étape 1 (Euler)** : $\\cos^3\\theta = \\left(\\dfrac{e^{i\\theta} + e^{-i\\theta}}{2}\\right)^3 = \\dfrac{1}{8}\\left(e^{i\\theta} + e^{-i\\theta}\\right)^3$.",
          "**Étape 2 (Binôme)** : $\\left(e^{i\\theta} + e^{-i\\theta}\\right)^3 = e^{3i\\theta} + 3e^{i\\theta} + 3e^{-i\\theta} + e^{-3i\\theta}$, car $e^{2i\\theta} \\times e^{-i\\theta} = e^{i\\theta}$ et $e^{i\\theta} \\times e^{-2i\\theta} = e^{-i\\theta}$.",
          "**Étape 3 (Regroupement)** : $e^{3i\\theta} + e^{-3i\\theta} = 2\\cos(3\\theta)$ et $3\\left(e^{i\\theta} + e^{-i\\theta}\\right) = 6\\cos\\theta$.",
          "**Conclusion** : $\\cos^3\\theta = \\dfrac{2\\cos(3\\theta) + 6\\cos\\theta}{8} = \\dfrac{\\cos(3\\theta) + 3\\cos\\theta}{4}$. Cette forme permet par exemple de trouver une primitive de $\\cos^3$."
        ]
      }
    ],
    "traps": [
      "⚠️ Le nombre 0 n'a **pas d'argument** !",
      "⚠️ Ne jamais oublier le signe : $-e^{i\\theta} = e^{i(\\theta + \\pi)}$ car le rayon $r$ doit impérativement être strictement positif.",
      "⚠️ En général $|z + z'| \\ne |z| + |z'|$ et $\\arg(z + z') \\ne \\arg(z) + \\arg(z')$ : les règles sur le module et l'argument concernent les **produits** et **quotients**, pas les sommes.",
      "⚠️ Pour trouver un argument, utiliser **à la fois** $\\cos\\theta$ et $\\sin\\theta$ : $1 + i$ et $-1 - i$ ont le même rapport $\\frac{b}{a} = 1$ mais des arguments différents ($\\frac{\\pi}{4}$ et $-\\frac{3\\pi}{4}$).",
      "⚠️ $\\left|e^{i\\theta}\\right| = 1$ pour tout réel $\\theta$ : dans $r e^{i\\theta}$, c'est $r$ (et non $\\theta$) qui donne le module."
    ],
    "flashcards": [
      {
        "q": "Que vaut $e^{i\\pi}$ ?",
        "a": "$e^{i\\pi} = -1$ (Identité d'Euler : $e^{i\\pi} + 1 = 0$)."
      },
      {
        "q": "Comment s'exprime la distance $AB$ à l'aide des affixes $z_A$ et $z_B$ ?",
        "a": "$AB = |z_B - z_A|$."
      },
      {
        "q": "Quelles sont les racines cubiques de l'unité ?",
        "a": "$1$, $j = e^{\\frac{2i\\pi}{3}}$ et $j^2 = e^{\\frac{4i\\pi}{3}} = \\bar{j}$."
      },
      {
        "q": "Énoncer la formule de Moivre.",
        "a": "$(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$."
      },
      {
        "q": "Calculer $|3 - 4i|$.",
        "a": "$\\sqrt{9 + 16} = 5$."
      }
    ]
  },
  "TX3": {
    "title": "TX3 : Arithmétique dans Z et congruences",
    "domain": "Mathématiques Expertes",
    "objectives": [
      "Maîtriser la division euclidienne dans $\\mathbb{Z}$ et la notion de divisibilité.",
      "Manipuler la relation de congruence modulo $n$ et ses propriétés de compatibilité.",
      "Étudier les restes de puissances successives par périodicité.",
      "Démontrer une divisibilité pour tout entier $n$ à l'aide d'une table de congruences.",
      "Résoudre des équations du type $ax \\equiv b \\pmod{n}$ et utiliser les critères de divisibilité."
    ],
    "keyPoints": [
      {
        "title": "1. Division euclidienne et congruences",
        "content": "• **Division euclidienne** : Pour tout $a \\in \\mathbb{Z}$ et $b \\in \\mathbb{N}^*$, il existe un unique couple $(q, r) \\in \\mathbb{Z} \\times \\mathbb{N}$ tel que $a = bq + r$ avec $0 \\le r < b$.\n• **Congruence** : $a \\equiv b \\pmod{n} \\iff n \\mid (a - b) \\iff a$ et $b$ ont le même reste dans la division euclidienne par $n$."
      },
      {
        "title": "2. Propriétés opératoires des congruences",
        "content": "Si $a \\equiv b \\pmod{n}$ et $c \\equiv d \\pmod{n}$, alors :\n• $a + c \\equiv b + d \\pmod{n}$\n• $a \\times c \\equiv b \\times d \\pmod{n}$\n• $a^k \\equiv b^k \\pmod{n}$ pour tout entier $k \\ge 1$."
      },
      {
        "title": "3. Divisibilité dans $\\mathbb{Z}$",
        "content": "• $a$ **divise** $b$ (noté $a \\mid b$) s'il existe $k \\in \\mathbb{Z}$ tel que $b = ka$. Par exemple, $-4 \\mid 12$ et tout entier divise $0$.\n• **Transitivité** : si $a \\mid b$ et $b \\mid c$, alors $a \\mid c$.\n• **Combinaisons linéaires** : si $a \\mid b$ et $a \\mid c$, alors $a \\mid bu + cv$ pour tous entiers $u$ et $v$.\nExemple : si $d$ divise $n + 3$ et $n + 1$, alors $d$ divise leur différence $2$, donc $d \\in \\{-2 ; -1 ; 1 ; 2\\}$."
      },
      {
        "title": "4. Critères de divisibilité et congruences",
        "content": "• Comme $10 \\equiv 1 \\pmod{9}$, on a $10^k \\equiv 1 \\pmod{9}$ pour tout $k$ : un entier est **congru à la somme de ses chiffres modulo 9** (et modulo 3). D'où les critères de divisibilité par 3 et par 9.\n• Comme $10 \\equiv -1 \\pmod{11}$, un entier est congru modulo 11 à la **somme alternée** de ses chiffres (en partant des unités). Exemple : $918\\,082 \\equiv 2 - 8 + 0 - 8 + 1 - 9 = -22 \\equiv 0 \\pmod{11}$.\n• En Python, le reste de $a$ par $n$ s'obtient avec $a \\% n$, et $\\text{pow}(a, k, n)$ calcule directement le reste de $a^k$ modulo $n$ : `pow(3, 2024, 7)` renvoie $2$."
      },
      {
        "title": "5. Tables de congruences",
        "content": "Pour étudier une expression en $n$ modulo $m$, on remarque que $n$ est congru à l'un des restes $0, 1, \\dots, m - 1$ : on dresse une **table** donnant la valeur de l'expression pour chaque reste.\n• Exemple modulo 4 : $n^2 \\equiv 0$ ou $1 \\pmod{4}$ (restes $0, 1, 0, 1$ pour $n \\equiv 0, 1, 2, 3$). Donc un carré n'est jamais congru à $2$ ou $3$ modulo $4$.\n• **Attention** : on ne peut pas « simplifier » une congruence : $2x \\equiv 2 \\pmod{4}$ est vérifiée par $x = 3$, et pourtant $3 \\not\\equiv 1 \\pmod{4}$."
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
      },
      {
        "title": "Méthode : Démontrer une divisibilité avec une table de congruences",
        "example": "Démontrer que pour tout entier $n$, $n^3 - n$ est divisible par $3$.",
        "steps": [
          "**Étape 1 (Restes possibles)** : modulo 3, tout entier $n$ vérifie $n \\equiv 0$, $n \\equiv 1$ ou $n \\equiv 2$.",
          "**Étape 2 (Table)** :\n• si $n \\equiv 0$ : $n^3 - n \\equiv 0 - 0 = 0$ ;\n• si $n \\equiv 1$ : $n^3 - n \\equiv 1 - 1 = 0$ ;\n• si $n \\equiv 2$ : $n^3 - n \\equiv 8 - 2 = 6 \\equiv 0 \\pmod{3}$.",
          "**Conclusion** : dans tous les cas $n^3 - n \\equiv 0 \\pmod{3}$, donc $3 \\mid n^3 - n$. (On peut aussi remarquer que $n^3 - n = (n - 1)n(n + 1)$ est un produit de trois entiers consécutifs.)"
        ]
      },
      {
        "title": "Méthode : Résoudre une équation de congruence",
        "example": "Résoudre dans $\\mathbb{Z}$ l'équation $5x \\equiv 3 \\pmod{7}$.",
        "steps": [
          "**Étape 1 (Table de $5x$ modulo 7)** : pour $x \\equiv 0, 1, 2, 3, 4, 5, 6$, on obtient $5x \\equiv 0, 5, 3, 1, 6, 4, 2 \\pmod{7}$ (par exemple $5 \\times 2 = 10 = 7 + 3$).",
          "**Étape 2 (Lecture)** : la seule valeur donnant $3$ est $x \\equiv 2 \\pmod{7}$.",
          "**Étape 3 (Vérification)** : $5 \\times 2 = 10 \\equiv 3 \\pmod{7}$.",
          "**Conclusion** : les solutions sont les entiers $x = 2 + 7k$, $k \\in \\mathbb{Z}$."
        ]
      },
      {
        "title": "Méthode : Démontrer une divisibilité avec les congruences",
        "example": "Démontrer que pour tout $n \\in \\mathbb{N}$, $3^{2n+1} + 2^{n+2}$ est divisible par $7$.",
        "steps": [
          "**Étape 1 (Réécriture)** : $3^{2n+1} = 3 \\times (3^2)^n = 3 \\times 9^n$ et $2^{n+2} = 4 \\times 2^n$.",
          "**Étape 2 (Congruences)** : $9 \\equiv 2 \\pmod{7}$, donc $9^n \\equiv 2^n \\pmod{7}$ et $3 \\times 9^n \\equiv 3 \\times 2^n \\pmod{7}$.",
          "**Étape 3 (Somme)** : $3^{2n+1} + 2^{n+2} \\equiv 3 \\times 2^n + 4 \\times 2^n = 7 \\times 2^n \\equiv 0 \\pmod{7}$.",
          "**Conclusion** : $7$ divise $3^{2n+1} + 2^{n+2}$ pour tout $n$ (exemple : $n = 0$ donne $3 + 4 = 7$, $n = 1$ donne $27 + 8 = 35$)."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans la division euclidienne, le reste $r$ doit impérativement être **positif ou nul** ($0 \\le r < b$).",
      "⚠️ $ab \\equiv 0 \\pmod{n}$ n'implique pas $a \\equiv 0$ ou $b \\equiv 0$ : $2 \\times 3 \\equiv 0 \\pmod{6}$ alors que ni $2$ ni $3$ n'est divisible par $6$.",
      "⚠️ On peut élever une congruence à une puissance ($a \\equiv b \\Rightarrow a^k \\equiv b^k$), mais pas remplacer un **exposant** par un nombre congru : $1 \\equiv 4 \\pmod{3}$ et pourtant $2^1 = 2$ alors que $2^4 = 16 \\equiv 1 \\pmod{3}$.",
      "⚠️ Pas de division dans les congruences : $2x \\equiv 2 \\pmod{4}$ n'entraîne pas $x \\equiv 1 \\pmod{4}$."
    ],
    "flashcards": [
      {
        "q": "Que signifie la notation $a \\equiv b \\pmod{n}$ ?",
        "a": "$n$ divise $a - b$ (ou $a$ et $b$ ont le même reste modulo $n$)."
      },
      {
        "q": "Quel est le reste de $-13$ divisé par 5 ?",
        "a": "$2$, car $-13 = 5 \\times (-3) + 2$ avec $0 \\le 2 < 5$."
      },
      {
        "q": "Quel est le reste de $2^{100}$ dans la division par $3$ ?",
        "a": "$2 \\equiv -1 \\pmod{3}$, donc $2^{100} \\equiv (-1)^{100} = 1$ : le reste est $1$."
      },
      {
        "q": "Quel est le chiffre des unités de $7^{2026}$ ?",
        "a": "Modulo 10, les puissances de 7 valent $7, 9, 3, 1$ (période 4) ; $2026 = 4 \\times 506 + 2$, donc le chiffre des unités est $9$."
      },
      {
        "q": "Pourquoi un entier est-il congru à la somme de ses chiffres modulo 9 ?",
        "a": "Car $10 \\equiv 1 \\pmod{9}$, donc $10^k \\equiv 1 \\pmod{9}$ pour tout $k$."
      }
    ]
  },
  "TX4": {
    "title": "TX4 : Théorèmes de Bézout et de Gauss, nombres premiers et chiffrement RSA",
    "domain": "Mathématiques Expertes",
    "objectives": [
      "Énoncer et appliquer le théorème de Bézout ($au + bv = 1$) et l'algorithme d'Euclide étendu.",
      "Résoudre dans $\\mathbb{Z}^2$ les équations diophantiennes $ax + by = c$.",
      "Énoncer le théorème de Gauss et comprendre le principe du chiffrement asymétrique RSA.",
      "Calculer un PGCD par l'algorithme d'Euclide (à la main et en Python).",
      "Connaître les propriétés des nombres premiers : infinité, décomposition, test de primalité."
    ],
    "keyPoints": [
      {
        "title": "1. Théorèmes de Bézout et de Gauss",
        "content": "• **Théorème de Bézout** : Deux entiers $a$ et $b$ sont premiers entre eux si et seulement s'il existe $(u, v) \\in \\mathbb{Z}^2$ tel que $au + bv = 1$.\n• **Théorème de Gauss** : Soient $a, b, c \\in \\mathbb{Z}$. Si $a \\mid bc$ et si $\\text{PGCD}(a, b) = 1$, alors $a \\mid c$."
      },
      {
        "title": "2. Petit théorème de Fermat et cryptographie RSA",
        "content": "• **Petit théorème de Fermat** : Si $p$ est premier et si $p \\nmid a$, alors $a^{p-1} \\equiv 1 \\pmod{p}$.\n• **Chiffrement RSA** : Repose sur la difficulté algorithmique de factoriser un très grand entier $N = pq$ (produit de deux nombres premiers géants)."
      },
      {
        "title": "3. PGCD et algorithme d'Euclide",
        "content": "• Le **PGCD** de deux entiers $a$ et $b$ non tous deux nuls est le plus grand diviseur commun à $a$ et $b$. $a$ et $b$ sont **premiers entre eux** si $\\text{PGCD}(a, b) = 1$.\n• **Propriété clé** : si $a = bq + r$, alors $\\text{PGCD}(a, b) = \\text{PGCD}(b, r)$. L'**algorithme d'Euclide** enchaîne les divisions euclidiennes ; le PGCD est le **dernier reste non nul**.\n• Les diviseurs communs à $a$ et $b$ sont exactement les diviseurs de leur PGCD, et il existe des entiers $u$, $v$ tels que $au + bv = \\text{PGCD}(a, b)$.\n```python\ndef pgcd(a, b):\n    while b != 0:\n        a, b = b, a % b\n    return a\n```"
      },
      {
        "title": "4. Conséquences du théorème de Gauss",
        "content": "• Si $a \\mid n$, $b \\mid n$ et $\\text{PGCD}(a, b) = 1$, alors $ab \\mid n$. Exemple : un entier divisible par $4$ et par $9$ est divisible par $36$.\n• Si un nombre premier $p$ divise un produit $ab$, alors $p \\mid a$ ou $p \\mid b$.\n• **Solutions de $ax + by = c$** (avec $\\text{PGCD}(a, b) = 1$) : si $(x_0, y_0)$ est une solution particulière, toutes les solutions sont $x = x_0 - bk$, $y = y_0 + ak$, $k \\in \\mathbb{Z}$."
      },
      {
        "title": "5. Nombres premiers",
        "content": "• Un entier $p \\ge 2$ est **premier** s'il admet exactement deux diviseurs positifs : $1$ et $p$. ($1$ n'est pas premier.)\n• **Test** : si $n \\ge 2$ n'est divisible par aucun nombre premier $p$ tel que $p^2 \\le n$, alors $n$ est premier.\n• **Il existe une infinité de nombres premiers** (Euclide) : si $p_1, \\dots, p_k$ étaient tous les premiers, $N = p_1 \\times \\dots \\times p_k + 1$ n'en serait divisible par aucun, contradiction.\n• **Décomposition** : tout entier $n \\ge 2$ s'écrit de manière unique (à l'ordre près) comme produit de nombres premiers. Exemple : $360 = 2^3 \\times 3^2 \\times 5$.\n• **RSA miniature** : $p = 5$, $q = 11$, $n = 55$, $(p - 1)(q - 1) = 40$ ; clé publique $e = 3$, clé privée $d = 27$ car $3 \\times 27 = 81 \\equiv 1 \\pmod{40}$. Le message $m = 2$ est chiffré en $2^3 = 8$, et $8^{27} \\equiv 2 \\pmod{55}$ le déchiffre."
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
      },
      {
        "title": "Méthode : Résoudre une équation diophantienne $ax + by = c$",
        "example": "Résoudre dans $\\mathbb{Z}^2$ l'équation $(E) : 37x + 13y = 1$, sachant que $(6 ; -17)$ est une solution particulière.",
        "steps": [
          "**Étape 1 (Soustraction)** : si $(x ; y)$ est solution, $37x + 13y = 37 \\times 6 + 13 \\times (-17)$, donc $37(x - 6) = -13(y + 17) = 13(-17 - y)$.",
          "**Étape 2 (Gauss)** : $37$ divise $13(-17 - y)$ et $\\text{PGCD}(37, 13) = 1$, donc $37 \\mid -17 - y$ : il existe $k \\in \\mathbb{Z}$ tel que $-17 - y = 37k$, soit $y = -17 - 37k$. En reportant, $37(x - 6) = 13 \\times 37k$, d'où $x = 6 + 13k$.",
          "**Étape 3 (Réciproque)** : $37(6 + 13k) + 13(-17 - 37k) = 222 + 481k - 221 - 481k = 1$ : ces couples sont bien solutions.",
          "**Conclusion** : $\\mathcal{S} = \\{(6 + 13k ; -17 - 37k),\\ k \\in \\mathbb{Z}\\}$."
        ]
      },
      {
        "title": "Méthode : Tester si un entier est premier",
        "example": "Les nombres $391$ et $397$ sont-ils premiers ?",
        "steps": [
          "**Étape 1 (Borne)** : $19^2 = 361$ et $20^2 = 400$ ; pour $n \\le 399$, il suffit de tester les nombres premiers $2, 3, 5, 7, 11, 13, 17, 19$.",
          "**Étape 2 ($391$)** : $391$ est impair, la somme de ses chiffres $13$ n'est pas multiple de $3$, il ne finit ni par 0 ni par 5 ; $391 = 7 \\times 55 + 6$, $391 = 11 \\times 35 + 6$, $391 = 13 \\times 30 + 1$, puis $391 = 17 \\times 23$. Donc $391$ n'est **pas premier**.",
          "**Étape 3 ($397$)** : $397$ est impair, somme des chiffres $19$, ne finit ni par 0 ni par 5 ; restes : $397 = 7 \\times 56 + 5$, $11 \\times 36 + 1$, $13 \\times 30 + 7$, $17 \\times 23 + 6$, $19 \\times 20 + 17$. Aucun reste nul.",
          "**Conclusion** : $391 = 17 \\times 23$ n'est pas premier, $397$ est premier."
        ]
      }
    ],
    "traps": [
      "⚠️ L'équation $ax + by = c$ n'admet de solutions dans $\\mathbb{Z}^2$ que si $\\text{PGCD}(a, b)$ divise $c$ !",
      "⚠️ Le théorème de Gauss exige $\\text{PGCD}(a, b) = 1$ : $6$ divise $4 \\times 3 = 12$, mais $6$ ne divise ni $4$ ni $3$.",
      "⚠️ Trouver $u$, $v$ tels que $au + bv = d$ ne prouve pas que $d = \\text{PGCD}(a, b)$ (sauf si $d = 1$) : $4 \\times 1 + 6 \\times 1 = 10$, mais $\\text{PGCD}(4, 6) = 2$.",
      "⚠️ $1$ n'est pas un nombre premier (il n'a qu'un seul diviseur positif)."
    ],
    "flashcards": [
      {
        "q": "Énoncer le théorème de Gauss.",
        "a": "Si $a$ divise $bc$ et si $\\text{PGCD}(a, b) = 1$, alors $a$ divise $c$."
      },
      {
        "q": "Quelle condition nécessaire et suffisante assure que $a$ et $b$ sont premiers entre eux (Bézout) ?",
        "a": "Il existe deux entiers $u$ et $v$ tels que $au + bv = 1$."
      },
      {
        "q": "Calculer $\\text{PGCD}(84, 36)$ par l'algorithme d'Euclide.",
        "a": "$84 = 36 \\times 2 + 12$, puis $36 = 12 \\times 3 + 0$ : le PGCD est $12$."
      },
      {
        "q": "Quel est le reste de $2^{100}$ modulo $13$ ?",
        "a": "Fermat : $2^{12} \\equiv 1 \\pmod{13}$ ; $100 = 12 \\times 8 + 4$, donc $2^{100} \\equiv 2^4 = 16 \\equiv 3 \\pmod{13}$."
      },
      {
        "q": "Pourquoi existe-t-il une infinité de nombres premiers ?",
        "a": "Si $p_1, \\dots, p_k$ étaient les seuls, $p_1 \\cdots p_k + 1$ n'aurait aucun diviseur premier, ce qui est impossible."
      },
      {
        "q": "Si $4 \\mid n$ et $9 \\mid n$, que peut-on en déduire ?",
        "a": "$\\text{PGCD}(4, 9) = 1$, donc $36 \\mid n$ (corollaire du théorème de Gauss)."
      }
    ]
  },
  "TX5": {
    "title": "TX5 : Calcul matriciel, graphes et chaînes de Markov",
    "domain": "Mathématiques Expertes",
    "objectives": [
      "Effectuer des additions, multiplications matricielles et inverser une matrice carrée d'ordre 2.",
      "Représenter un système d'équations sous la forme matricielle $AX = B$.",
      "Modéliser une situation d'évolution par un graphe probabiliste et déterminer son état stationnaire.",
      "Modéliser une situation par un graphe et compter des chemins avec les puissances de la matrice d'adjacence.",
      "Étudier l'évolution d'une chaîne de Markov à l'aide de sa matrice de transition."
    ],
    "keyPoints": [
      {
        "title": "1. Produit matriciel et matrice inverse",
        "content": "• Le produit matriciel $A \\times B$ n'est possible que si le nombre de colonnes de $A$ égale le nombre de lignes de $B$. En général, $AB \\neq BA$ (non-commutativité).\n• Inverse d'une matrice $2 \\times 2$ : pour $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, si $\\det(A) = ad - bc \\neq 0$, alors :\n$$A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$"
      },
      {
        "title": "2. Chaînes de Markov et distribution stationnaire",
        "content": "• Soit $P$ la matrice de transition d'un graphe probabiliste. Si $\\pi_n$ désigne la matrice ligne des probabilités des états au rang $n$, alors $\\pi_{n+1} = \\pi_n P$ et $\\pi_n = \\pi_0 P^n$.\n• Un état stable (ou distribution stationnaire) est une matrice ligne $\\pi = (x \\quad y)$ telle que $\\pi P = \\pi$ avec $x + y = 1$."
      },
      {
        "title": "3. Graphes et matrice d'adjacence",
        "content": "• Un **graphe** est formé de sommets reliés par des arêtes (orientées ou non). L'**ordre** est le nombre de sommets ; le **degré** d'un sommet est le nombre d'arêtes dont il est une extrémité (pour un graphe non orienté).\n• Une **chaîne** (ou chemin) de longueur $n$ est une suite de $n$ arêtes consécutives ; un graphe est **connexe** si deux sommets quelconques sont reliés par une chaîne ; il est **complet** si tous ses sommets sont adjacents deux à deux.\n• La **matrice d'adjacence** $A$ d'un graphe d'ordre $p$ est la matrice carrée dont le coefficient $a_{ij}$ est le nombre d'arêtes allant du sommet $i$ au sommet $j$.\n• **Théorème** : le coefficient $(i, j)$ de $A^n$ est le **nombre de chemins de longueur $n$** allant de $i$ à $j$."
      },
      {
        "title": "4. Chaînes de Markov",
        "content": "• Une **chaîne de Markov** sur un ensemble fini d'états est une suite de variables aléatoires $(X_n)$ telle que la probabilité de passer de l'état $i$ à l'état $j$, $p_{ij} = P_{\\{X_n = i\\}}(X_{n+1} = j)$, ne dépend ni de $n$ ni des états antérieurs.\n• La **matrice de transition** $P = (p_{ij})$ est **stochastique** : coefficients positifs, somme de chaque ligne égale à $1$.\n• Si $\\pi_n$ est la matrice ligne de la loi de $X_n$, alors $\\pi_{n+1} = \\pi_n P$ et $\\pi_n = \\pi_0 P^n$.\n• **Cas de deux états** : si $P = \\begin{pmatrix} 1 - a & a \\\\ b & 1 - b \\end{pmatrix}$ avec $0 < a + b < 2$, la suite $(\\pi_n)$ converge vers l'unique distribution invariante $\\pi = \\left(\\dfrac{b}{a + b} \\quad \\dfrac{a}{a + b}\\right)$, quelle que soit la loi initiale."
      },
      {
        "title": "5. Suites de matrices",
        "content": "• Si $U_{n+1} = AU_n$ (avec $U_n$ matrice colonne), alors $U_n = A^n U_0$ par récurrence.\n• Si $U_{n+1} = AU_n + B$ et si $C$ vérifie $C = AC + B$, alors $V_n = U_n - C$ vérifie $V_{n+1} = AV_n$, donc $U_n = A^n(U_0 - C) + C$.\n• Puissances d'une matrice **diagonale** : $\\begin{pmatrix} a & 0 \\\\ 0 & b \\end{pmatrix}^n = \\begin{pmatrix} a^n & 0 \\\\ 0 & b^n \\end{pmatrix}$. Si $A = QDQ^{-1}$ avec $D$ diagonale, alors $A^n = QD^nQ^{-1}$."
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
      },
      {
        "title": "Méthode : Compter des chemins dans un graphe",
        "example": "Un graphe non orienté a pour sommets $A$, $B$, $C$, $D$ et pour arêtes $A$–$B$, $A$–$C$, $A$–$D$, $B$–$C$, $C$–$D$. Combien y a-t-il de chemins de longueur 3 de $B$ à $D$ ?",
        "steps": [
          "**Étape 1 (Matrice d'adjacence)** : dans l'ordre $A, B, C, D$ :\n$$M = \\begin{pmatrix} 0 & 1 & 1 & 1 \\\\ 1 & 0 & 1 & 0 \\\\ 1 & 1 & 0 & 1 \\\\ 1 & 0 & 1 & 0 \\end{pmatrix}$$",
          "**Étape 2 (Puissances)** : à la calculatrice ou à la main,\n$$M^2 = \\begin{pmatrix} 3 & 1 & 2 & 1 \\\\ 1 & 2 & 1 & 2 \\\\ 2 & 1 & 3 & 1 \\\\ 1 & 2 & 1 & 2 \\end{pmatrix} \\qquad M^3 = \\begin{pmatrix} 4 & 5 & 5 & 5 \\\\ 5 & 2 & 5 & 2 \\\\ 5 & 5 & 4 & 5 \\\\ 5 & 2 & 5 & 2 \\end{pmatrix}$$",
          "**Étape 3 (Lecture)** : le coefficient ligne $B$, colonne $D$ de $M^3$ vaut $2$. Ce sont les chemins $B$–$A$–$C$–$D$ et $B$–$C$–$A$–$D$.",
          "**Conclusion** : il y a $2$ chemins de longueur 3 de $B$ à $D$. (Remarque : la diagonale de $M^2$ donne les degrés : $3, 2, 3, 2$.)"
        ]
      },
      {
        "title": "Méthode : Étudier une chaîne de Markov à deux états",
        "example": "Chaque jour, un abonné utilise le service $A$ ou le service $B$. S'il utilise $A$, il garde $A$ le lendemain avec probabilité $0{,}9$ ; s'il utilise $B$, il passe à $A$ avec probabilité $0{,}3$. Le jour $0$, $\\pi_0 = (0{,}5 \\quad 0{,}5)$. Calculer $\\pi_2$ puis l'état stable.",
        "steps": [
          "**Étape 1 (Matrice de transition)** : $P = \\begin{pmatrix} 0{,}9 & 0{,}1 \\\\ 0{,}3 & 0{,}7 \\end{pmatrix}$ (chaque ligne a pour somme $1$).",
          "**Étape 2 (Évolution)** : $\\pi_1 = \\pi_0 P = (0{,}45 + 0{,}15 \\quad 0{,}05 + 0{,}35) = (0{,}6 \\quad 0{,}4)$, puis $\\pi_2 = \\pi_1 P = (0{,}54 + 0{,}12 \\quad 0{,}06 + 0{,}28) = (0{,}66 \\quad 0{,}34)$.",
          "**Étape 3 (État stable)** : on cherche $\\pi = (x \\quad y)$ avec $\\pi P = \\pi$ et $x + y = 1$. La première coordonnée donne $0{,}9x + 0{,}3y = x$, soit $0{,}3y = 0{,}1x$, donc $x = 3y$. Avec $x + y = 1$ : $y = 0{,}25$ et $x = 0{,}75$.",
          "**Conclusion** : $\\pi_2 = (0{,}66 \\quad 0{,}34)$ et l'état stable est $\\pi = (0{,}75 \\quad 0{,}25)$ : à long terme, $75\\,\\%$ des jours se font avec le service $A$."
        ]
      }
    ],
    "traps": [
      "⚠️ La multiplication matricielle n'est **pas commutative** : $AB \\neq BA$ en général !",
      "⚠️ Dans un graphe probabiliste, la somme des probabilités sur chaque ligne de la matrice de transition doit toujours être égale à 1.",
      "⚠️ Avec la convention « matrices lignes » (utilisée ici), on écrit $\\pi_{n+1} = \\pi_n P$ et **pas** $P\\pi_n$ ; avec des matrices colonnes, il faut transposer. Ne pas mélanger les deux conventions.",
      "⚠️ $(A + B)^2 = A^2 + AB + BA + B^2$, qui n'est égal à $A^2 + 2AB + B^2$ que si $AB = BA$.",
      "⚠️ $AB = 0$ n'implique pas $A = 0$ ou $B = 0$ : $\\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}\\begin{pmatrix} 0 & 0 \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$."
    ],
    "flashcards": [
      {
        "q": "Quelle condition sur $\\det(A)$ assure l'inversibilité d'une matrice carrée ?",
        "a": "Son déterminant doit être non nul : $\\det(A) \\neq 0$."
      },
      {
        "q": "Quelle équation définit l'état stable $\\pi$ d'une chaîne de Markov ?",
        "a": "$\\pi P = \\pi$ avec la somme des composantes égale à 1."
      },
      {
        "q": "Que représente le coefficient $(i, j)$ de $A^n$, où $A$ est la matrice d'adjacence d'un graphe ?",
        "a": "Le nombre de chemins de longueur $n$ allant du sommet $i$ au sommet $j$."
      },
      {
        "q": "Qu'est-ce qu'une matrice stochastique ?",
        "a": "Une matrice carrée à coefficients positifs dont la somme de chaque ligne vaut $1$."
      },
      {
        "q": "Donner l'inverse de $\\begin{pmatrix} 2 & 1 \\\\ 1 & 1 \\end{pmatrix}$.",
        "a": "Le déterminant vaut $1$, donc l'inverse est $\\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix}$."
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
      "title": "Étape d'hérédité : ce qu'il faut démontrer",
      "skill": "Rédiger l'hérédité d'une récurrence",
      "statement": "On considère la suite définie par $u_0 = 0$ et $u_{n+1} = 2u_n + 1$. On veut démontrer par récurrence que, pour tout $n \\in \\mathbb{N}$, $P(n) : u_n = 2^n - 1$.\nDans l'étape d'hérédité, on suppose $P(n)$ vraie pour un entier $n$ fixé. Que doit-on alors démontrer ?",
      "options": [
        "$u_{n+1} = 2^{n+1} - 1$",
        "$u_n = 2^n - 1$ pour tout entier $n$",
        "$u_{n+1} = 2u_n + 1$",
        "$u_0 = 2^0 - 1$"
      ],
      "correctIndex": 0,
      "answer": "$u_{n+1} = 2^{n+1} - 1$",
      "hint1": "L'hérédité consiste à montrer : si $P(n)$ est vraie, alors $P(n+1)$ est vraie.",
      "hint2": "Écris $P(n+1)$ en remplaçant $n$ par $n+1$ dans $u_n = 2^n - 1$.",
      "solution": "Hérédité : on suppose $u_n = 2^n - 1$ (hypothèse de récurrence) et on doit montrer $P(n+1) : u_{n+1} = 2^{n+1} - 1$.\nPreuve : $u_{n+1} = 2u_n + 1 = 2(2^n - 1) + 1 = 2^{n+1} - 2 + 1 = 2^{n+1} - 1$.\nAttention : « $u_n = 2^n - 1$ pour tout $n$ » est la conclusion de toute la récurrence, pas ce qu'on démontre dans l'hérédité ; $u_{n+1} = 2u_n + 1$ est la définition de la suite et $u_0 = 2^0 - 1$ est l'initialisation."
    },
    {
      "id": "TA1-3",
      "tier": 3,
      "type": "mcq",
      "title": "Récurrence sur une somme : 1 + 3 + … + (2n − 1) = n²",
      "skill": "Mener l'hérédité d'une récurrence sur une somme",
      "statement": "Pour $n \\ge 1$, on pose $S_n = 1 + 3 + 5 + \\dots + (2n - 1)$ (somme des $n$ premiers entiers impairs) et on veut prouver par récurrence que $S_n = n^2$.\nEn supposant $S_n = n^2$, que vaut $S_{n+1}$ ?",
      "options": [
        "$S_{n+1} = n^2 + 2n + 1 = (n+1)^2$",
        "$S_{n+1} = n^2 + 2n - 1$",
        "$S_{n+1} = n^2 + 2n + 3$",
        "$S_{n+1} = n^2 + 1$"
      ],
      "correctIndex": 0,
      "answer": "$S_{n+1} = n^2 + 2n + 1 = (n+1)^2$",
      "hint1": "$S_{n+1}$ s'obtient en ajoutant à $S_n$ le $(n+1)$-ième nombre impair, c'est-à-dire $2(n+1) - 1$.",
      "hint2": "$2(n+1) - 1 = 2n + 1$, donc $S_{n+1} = S_n + 2n + 1$.",
      "solution": "Initialisation : $S_1 = 1 = 1^2$.\nHérédité : supposons $S_n = n^2$. Le terme suivant de la somme est $2(n+1) - 1 = 2n + 1$, donc\n$$S_{n+1} = S_n + (2n + 1) = n^2 + 2n + 1 = (n+1)^2.$$\nConclusion : par récurrence, $S_n = n^2$ pour tout $n \\ge 1$.\nErreur fréquente : ajouter $2n - 1$ (le dernier terme de $S_n$, déjà compté) au lieu de $2n + 1$."
    },
    {
      "id": "TA1-4",
      "tier": 4,
      "type": "mcq",
      "title": "Récurrence et divisibilité",
      "skill": "Démontrer une propriété de divisibilité par récurrence",
      "statement": "On veut démontrer par récurrence que, pour tout $n \\in \\mathbb{N}$, le nombre $4^n + 2$ est divisible par $3$.\nQuelle égalité permet de conclure l'étape d'hérédité à partir de l'hypothèse « $4^n + 2$ est divisible par 3 » ?",
      "options": [
        "$4^{n+1} + 2 = 4(4^n + 2) - 6$",
        "$4^{n+1} + 2 = 4(4^n + 2)$",
        "$4^{n+1} + 2 = (4^n + 2) + 3$",
        "$4^{n+1} + 2 = 4^n + 6$"
      ],
      "correctIndex": 0,
      "answer": "$4^{n+1} + 2 = 4(4^n + 2) - 6$",
      "hint1": "Fais apparaître $4^n + 2$ dans $4^{n+1} + 2 = 4 \\times 4^n + 2$.",
      "hint2": "$4(4^n + 2) = 4^{n+1} + 8$ : il faut donc retirer $6$.",
      "solution": "Initialisation : $4^0 + 2 = 3$, divisible par 3.\nHérédité : supposons $4^n + 2 = 3k$ avec $k \\in \\mathbb{Z}$. Alors\n$$4^{n+1} + 2 = 4 \\times 4^n + 8 - 6 = 4(4^n + 2) - 6 = 12k - 6 = 3(4k - 2),$$\nqui est divisible par 3.\nConclusion : pour tout $n \\in \\mathbb{N}$, $3$ divise $4^n + 2$.\nLes autres égalités sont fausses (par exemple $4(4^n + 2) = 4^{n+1} + 8 \\neq 4^{n+1} + 2$)."
    }
  ],
  "TA2": [
    {
      "id": "TA2-1",
      "tier": 1,
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
      "id": "TA2-2",
      "tier": 2,
      "type": "mcq",
      "title": "Limite d'une suite rationnelle",
      "skill": "Lever une forme indéterminée en factorisant par le terme dominant",
      "statement": "Déterminer la limite de la suite définie pour $n \\ge 0$ par $u_n = \\dfrac{3n^2 - n + 1}{n^2 + 2}$.",
      "options": [
        "$3$",
        "$+\\infty$",
        "$\\dfrac{1}{2}$",
        "$0$"
      ],
      "correctIndex": 0,
      "answer": "$3$",
      "hint1": "Le numérateur et le dénominateur tendent vers $+\\infty$ : forme indéterminée $\\frac{\\infty}{\\infty}$. Factorise par $n^2$.",
      "hint2": "$u_n = \\dfrac{n^2\\left(3 - \\frac{1}{n} + \\frac{1}{n^2}\\right)}{n^2\\left(1 + \\frac{2}{n^2}\\right)} = \\dfrac{3 - \\frac{1}{n} + \\frac{1}{n^2}}{1 + \\frac{2}{n^2}}$.",
      "solution": "Pour $n \\ge 1$ : $u_n = \\dfrac{3 - \\frac{1}{n} + \\frac{1}{n^2}}{1 + \\frac{2}{n^2}}$.\nOr $\\lim \\frac{1}{n} = \\lim \\frac{1}{n^2} = 0$, donc le numérateur tend vers $3$ et le dénominateur vers $1$.\nPar quotient : $\\lim_{n \\to +\\infty} u_n = 3$.\nLa réponse $\\frac{1}{2}$ provient du quotient des termes constants, qui ne sont pas dominants."
    },
    {
      "id": "TA2-3",
      "tier": 3,
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
    },
    {
      "id": "TA2-4",
      "tier": 4,
      "type": "mcq",
      "title": "Théorème de convergence monotone",
      "skill": "Appliquer le théorème de convergence monotone",
      "statement": "Une suite $(u_n)$ vérifie $u_0 = 1$ et $u_{n+1} = \\sqrt{2 + u_n}$. On admet qu'elle est croissante et majorée par 2. Que peut-on en déduire ?",
      "options": [
        "Elle converge, et sa limite est $l = 2$",
        "Elle converge, et sa limite est $l = \\sqrt{2}$",
        "Elle converge, et sa limite est $l = 1$",
        "Elle diverge vers $+\\infty$ car elle est croissante"
      ],
      "correctIndex": 0,
      "answer": "Elle converge, et sa limite est $l = 2$",
      "hint1": "Par le théorème de convergence monotone, la suite converge vers $l$ qui vérifie $l = \\sqrt{2+l}$.",
      "hint2": "$l^2 = 2 + l \\iff l^2 - l - 2 = 0 \\iff (l - 2)(l + 1) = 0$. Comme $u_n > 0$, $l = 2$.",
      "solution": "1. La suite est croissante et majorée : d'après le théorème de convergence monotone, elle converge vers une limite $l$.\n2. La fonction $f(x) = \\sqrt{2+x}$ est continue sur $[-2 ; +\\infty[$, donc $l$ vérifie $l = f(l)$, soit $l = \\sqrt{2+l}$, d'où $l \\ge 0$ et $l^2 - l - 2 = 0 \\iff (l-2)(l+1) = 0$.\n3. Comme $l \\ge 0$ (et même $l \\ge u_0 = 1$), on obtient $l = 2$.\nErreur fréquente : une suite croissante ne tend pas forcément vers $+\\infty$ ; si elle est majorée, elle converge."
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
    },
    {
      "id": "TA3-5",
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
      "id": "TA3-6",
      "tier": 2,
      "type": "mcq",
      "title": "Asymptotes verticale et horizontale",
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
      "id": "TA3-7",
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
      "id": "TA3-8",
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
      "statement": "On considère la fonction $g$ définie sur $\\mathbb{R}$ par $g(x) = (x^2 - 1)e^x$. Sur quel intervalle la fonction $g$ est-elle concave ?",
      "options": [
        "$[-2-\\sqrt{3} \\, ; -2+\\sqrt{3}]$",
        "$]-\\infty \\, ; -2-\\sqrt{3}] \\cup [-2+\\sqrt{3} \\, ; +\\infty[$",
        "$[-3 \\, ; 1]$",
        "$[-1 \\, ; 1]$"
      ],
      "correctIndex": 0,
      "answer": "$[-2-\\sqrt{3} \\, ; -2+\\sqrt{3}]$",
      "hint1": "$g$ est concave là où $g''(x) \\leq 0$. Dérive deux fois avec la formule $(uv)' = u'v + uv'$ : on trouve $g'(x) = (x^2 + 2x - 1)e^x$.",
      "hint2": "$g''(x) = (2x + 2)e^x + (x^2 + 2x - 1)e^x = (x^2 + 4x + 1)e^x$. Comme $e^x > 0$, étudie le signe du trinôme $x^2 + 4x + 1$ (discriminant $\\Delta = 12$).",
      "solution": "1. $g'(x) = 2x\\,e^x + (x^2 - 1)e^x = (x^2 + 2x - 1)e^x$.\n2. $g''(x) = (2x + 2)e^x + (x^2 + 2x - 1)e^x = (x^2 + 4x + 1)e^x$.\n3. Comme $e^x > 0$, $g''(x)$ a le signe de $x^2 + 4x + 1$. Son discriminant vaut $\\Delta = 16 - 4 = 12$, d'où les racines $x_{1,2} = \\frac{-4 \\pm 2\\sqrt{3}}{2} = -2 \\pm \\sqrt{3}$.\n4. Le trinôme ($a = 1 > 0$) est négatif entre ses racines : $g''(x) \\leq 0 \\iff x \\in [-2-\\sqrt{3} \\, ; -2+\\sqrt{3}]$.\n\nConclusion : $g$ est concave sur $[-2-\\sqrt{3} \\, ; -2+\\sqrt{3}]$ (et convexe sur chacun des intervalles $]-\\infty \\, ; -2-\\sqrt{3}]$ et $[-2+\\sqrt{3} \\, ; +\\infty[$)."
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
      "id": "TA1-fiche_td",
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

