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
      "Utiliser la récurrence pour étudier une suite définie par $u_{n+1} = f(u_n)$ (encadrement, sens de variation).",
      "Rédiger une récurrence de divisibilité (forme $u_n = 6m$ avec $m$ entier).",
      "Utiliser le vocabulaire logique (quantificateurs, négation, contre-exemple, réciproque, contraposée) et choisir un type de raisonnement adapté : récurrence, contraposée, absurde, disjonction des cas."
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
        "title": "3. Inégalité de Bernoulli (démonstration du programme)",
        "content": "Pour tout réel $a > 0$ et tout entier naturel $n$ :\n$$(1 + a)^n \\ge 1 + na$$\n**Conséquence importante** : si $q > 1$, on écrit $q = 1 + a$ avec $a > 0$, donc $q^n \\ge 1 + na$. Comme $\\lim\\limits_{n \\to +\\infty} (1 + na) = +\\infty$, on obtient par comparaison $\\lim\\limits_{n \\to +\\infty} q^n = +\\infty$ (voir chapitre TA2)."
      },
      {
        "title": "4. Récurrence et suites $u_{n+1} = f(u_n)$",
        "content": "Si $f$ est **croissante** sur un intervalle $I$ et si tous les termes de la suite sont dans $I$, alors une récurrence permet de « transporter » une inégalité d'un rang au suivant :\n$$a \\le u_k \\le u_{k+1} \\le b \\implies f(a) \\le f(u_k) \\le f(u_{k+1}) \\le f(b)$$\nc'est-à-dire $f(a) \\le u_{k+1} \\le u_{k+2} \\le f(b)$.\nOn démontre ainsi, en une seule récurrence, que la suite est **croissante** et **bornée**.\n• Attention : si $f$ est décroissante, l'ordre des inégalités s'inverse et la suite n'est en général pas monotone."
      },
      {
        "title": "5. Conjecturer avec Python, démontrer par récurrence",
        "content": "Un programme peut calculer les premiers termes et **suggérer** une propriété, mais il ne la **démontre** pas :\n```python\nfrom math import sqrt\nu = 0\nfor n in range(10):\n    print(n, u)\n    u = sqrt(3*u + 4)\n```\nLes valeurs affichées ($0$ ; $2$ ; $3{,}16$ ; $3{,}67$ ; …) laissent penser que la suite est croissante et majorée par $4$ : c'est la récurrence qui le prouvera (voir méthode ci-dessous)."
      },
      {
        "title": "6. Vocabulaire logique et autres types de raisonnement",
        "content": "Ce vocabulaire se travaille tout au long de l'année, dans tous les chapitres.\n• **Quantificateurs** : « pour tout $x$ de $I$, $P(x)$ » affirme que $P(x)$ est vraie pour chaque élément de $I$ ; « il existe $x$ dans $I$ tel que $P(x)$ » affirme qu'au moins un élément de $I$ convient. On rencontre les notations $\\forall x \\in I$ et $\\exists x \\in I$, qui ne sont pas exigibles. La quantification est souvent implicite : « si $n \\ge 1$, alors $2^n \\ge n + 1$ » signifie « pour tout entier $n \\ge 1$, $2^n \\ge n + 1$ ».\n• **Négation** : la négation de « pour tout $x \\in I$, $P(x)$ » est « il existe $x \\in I$ tel que $P(x)$ soit fausse » ; la négation de « il existe $x \\in I$ tel que $P(x)$ » est « pour tout $x \\in I$, $P(x)$ est fausse ». La négation de « $A$ et $B$ » est « non $A$ ou non $B$ », celle de « $A$ ou $B$ » est « non $A$ et non $B$ ».\n• **Négation avec deux quantificateurs** : on échange chaque « pour tout » et chaque « il existe », en gardant leur ordre, puis on nie la propriété finale. Par exemple, « $(u_n)$ est majorée » s'écrit « il existe un réel $M$ tel que, pour tout entier $n$, $u_n \\le M$ » ; sa négation, « $(u_n)$ n'est pas majorée », est « pour tout réel $M$, il existe un entier $n$ tel que $u_n > M$ ». L'ordre des quantificateurs compte : « pour tout réel $x$, il existe un réel $y$ tel que $y > x$ » est vraie (on prend $y = x + 1$), alors que « il existe un réel $y$ tel que, pour tout réel $x$, $y > x$ » est fausse (le choix $x = y$ la contredit).\n• **Contre-exemple** : pour montrer qu'une propriété du type « pour tout » est fausse, un seul cas suffit. Par exemple, « pour tout entier naturel $n$, $n^2 + n + 41$ est premier » est fausse, car $n = 40$ donne $1681 = 41^2$.\n• **Réciproque et contraposée** : la réciproque de « si $A$, alors $B$ » est « si $B$, alors $A$ » ; elle peut être fausse. La contraposée « si non $B$, alors non $A$ » est **équivalente** à l'implication de départ. On dit alors que $A$ est une condition suffisante pour $B$, et que $B$ est une condition nécessaire pour $A$.\n• **Raisonnement par équivalence** : « $A \\iff B$ » signifie « si $A$, alors $B$ » et « si $B$, alors $A$ ». On peut enchaîner des équivalences, à condition que chaque étape se lise dans les deux sens. Par exemple, pour tout réel $x$ : $2x + 5 \\le 11 \\iff 2x \\le 6 \\iff x \\le 3$. En revanche, élever au carré ne donne pas une équivalence : $x = 3$ entraîne $x^2 = 9$, mais $x^2 = 9$ n'entraîne pas $x = 3$ (on peut avoir $x = -3$). Quand une étape n'est qu'une implication, on raisonne par implications, puis on vérifie les solutions trouvées.\n• **Raisonnement par contraposée** : pour montrer « si $n^2$ est pair, alors $n$ est pair », on montre « si $n$ est impair, alors $n^2$ est impair » : $n = 2k + 1$ donne $n^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$.\n• **Raisonnement par l'absurde** : on suppose le contraire de ce que l'on veut démontrer et on aboutit à une contradiction (exemple : l'irrationalité de $\\sqrt{2}$, vue en seconde).\n• **Disjonction des cas** : on traite séparément tous les cas possibles. Par exemple, $n^2 + n = n(n + 1)$ est pair, car si $n$ est pair le facteur $n$ est pair, et si $n$ est impair le facteur $n + 1$ est pair."
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
      },
      {
        "title": "Méthode : Démontrer une divisibilité par récurrence",
        "example": "Démontrer que pour tout $n \\in \\mathbb{N}$, $7^n - 1$ est divisible par $6$.",
        "steps": [
          "**Étape 1 (Énoncé)** : pour $n \\in \\mathbb{N}$, on note $P(n)$ : « il existe un entier $m$ tel que $7^n - 1 = 6m$ ».",
          "**Étape 2 (Initialisation, $n = 0$)** : $7^0 - 1 = 0 = 6 \\times 0$, donc $P(0)$ est vraie.",
          "**Étape 3 (Hérédité)** : soit $k \\in \\mathbb{N}$ tel que $7^k - 1 = 6m$ avec $m$ entier (HR), c'est-à-dire $7^k = 6m + 1$. Alors $7^{k+1} - 1 = 7 \\times 7^k - 1 = 7(6m + 1) - 1 = 42m + 6 = 6(7m + 1)$. Comme $7m + 1$ est un entier, $P(k+1)$ est vraie.",
          "**Conclusion** : par récurrence, pour tout $n \\in \\mathbb{N}$, $6$ divise $7^n - 1$ (contrôle : $7^2 - 1 = 48 = 6 \\times 8$)."
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
      },
      {
        "q": "Dans une récurrence de divisibilité, comment exploiter l'hypothèse « $6$ divise $7^k - 1$ » ?",
        "a": "On l'écrit $7^k = 6m + 1$ avec $m$ entier, puis on remplace dans $7^{k+1} = 7 \\times 7^k$ pour factoriser par $6$."
      }
    ]
  },
  "TA3": {
    "title": "TA3 : Limites de fonctions, continuité et TVI",
    "domain": "Analyse et Fonctions",
    "objectives": [
      "Connaître les définitions de la limite d'une fonction en $+\\infty$, en $-\\infty$ et en un point, à l'aide d'intervalles.",
      "Déterminer les limites de fonctions en $\\pm\\infty$ et en un point (asymptotes parallèles aux axes ; les asymptotes obliques relèvent de l'approfondissement).",
      "Maîtriser la définition et les propriétés des fonctions continues sur un intervalle.",
      "Énoncer et appliquer le Théorème des Valeurs Intermédiaires (TVI).",
      "Appliquer le théorème des valeurs intermédiaires à une fonction strictement monotone pour prouver l'existence et l'unicité d'une solution $f(x) = k$.",
      "Connaître les croissances comparées de $x^n$ et $e^x$ et lever les formes indéterminées correspondantes.",
      "Encadrer une solution d'équation par dichotomie (à la main ou avec Python).",
      "Démontrer les limites de l'exponentielle en $\\pm\\infty$ et la croissance comparée de $e^x$ et $x^n$ en $+\\infty$."
    ],
    "keyPoints": [
      {
        "title": "1. Définitions de la limite d'une fonction",
        "content": "Comme pour les suites (chapitre TA2), on définit une limite à l'aide d'intervalles. Soit $\\ell$ un réel.\n• **Limite finie en $+\\infty$** : $\\lim\\limits_{x \\to +\\infty} f(x) = \\ell$ signifie que tout intervalle ouvert contenant $\\ell$ contient toutes les valeurs $f(x)$ **pour $x$ assez grand**, c'est-à-dire pour tous les $x$ d'un intervalle $]A ; +\\infty[$.\n• **Limite infinie en $+\\infty$** : $\\lim\\limits_{x \\to +\\infty} f(x) = +\\infty$ signifie que tout intervalle $]M ; +\\infty[$ contient toutes les valeurs $f(x)$ pour $x$ assez grand. De même, $\\lim\\limits_{x \\to +\\infty} f(x) = -\\infty$ signifie que tout intervalle $]-\\infty ; M[$ contient toutes les valeurs $f(x)$ pour $x$ assez grand.\n• **En $-\\infty$** : mêmes définitions, en remplaçant « pour $x$ assez grand » par « pour tous les $x$ d'un intervalle $]-\\infty ; A[$ ».\n• **En un réel $a$** : $f$ est définie sur un intervalle contenant $a$ ou dont $a$ est une borne (pas forcément en $a$). $\\lim\\limits_{x \\to a} f(x) = +\\infty$ signifie que tout intervalle $]M ; +\\infty[$ contient toutes les valeurs $f(x)$ **pour $x$ assez proche de $a$**, c'est-à-dire pour tous les $x$ de l'ensemble de définition situés dans un intervalle $]a - r ; a + r[$, avec $r > 0$. On définit de même une limite égale à $-\\infty$ (intervalles $]-\\infty ; M[$) ou à $\\ell$ (intervalles ouverts contenant $\\ell$).\n• **À droite, à gauche** : on ne regarde que les $x > a$ (notation $x \\to a^+$) ou que les $x < a$ (notation $x \\to a^-$).\n• Une limite, si elle existe, est **unique**. Une fonction peut n'avoir aucune limite : $\\sin$ n'a pas de limite en $+\\infty$.\n• **Exemples** : $\\lim\\limits_{x \\to +\\infty} \\dfrac{1}{x} = 0$, car un intervalle ouvert contenant $0$ contient un intervalle $]-r ; r[$ avec $r > 0$, et $0 < \\dfrac{1}{x} < r$ dès que $x > \\dfrac{1}{r}$. De même, $\\lim\\limits_{x \\to 0^+} \\dfrac{1}{x} = +\\infty$ : pour $M > 0$, on a $\\dfrac{1}{x} > M$ dès que $0 < x < \\dfrac{1}{M}$."
      },
      {
        "title": "2. Limites usuelles et asymptotes",
        "content": "• Pour $n \\ge 1$ entier : $\\lim\\limits_{x \\to +\\infty} x^n = +\\infty$ ; en $-\\infty$, $\\lim\\limits_{x \\to -\\infty} x^n = +\\infty$ si $n$ est **pair** et $\\lim\\limits_{x \\to -\\infty} x^n = -\\infty$ si $n$ est **impair** ; enfin $\\lim\\limits_{x \\to \\pm\\infty} \\dfrac{1}{x^n} = 0$.\n• $\\lim\\limits_{x \\to 0^+} \\dfrac{1}{x} = +\\infty$ et $\\lim\\limits_{x \\to 0^-} \\dfrac{1}{x} = -\\infty$ ; $\\lim\\limits_{x \\to +\\infty} \\sqrt{x} = +\\infty$.\n• $\\lim\\limits_{x \\to -\\infty} e^x = 0$ et $\\lim\\limits_{x \\to +\\infty} e^x = +\\infty$.\n• **Asymptotes** : si $\\lim\\limits_{x \\to a} f(x) = \\pm\\infty$ (à gauche ou à droite), la droite $x = a$ est **asymptote verticale** ; si $\\lim\\limits_{x \\to \\pm\\infty} f(x) = \\ell$, la droite $y = \\ell$ est **asymptote horizontale**."
      },
      {
        "title": "3. Croissances comparées, composition, comparaison",
        "content": "• **Croissances comparées** : pour tout entier $n \\ge 1$,\n$$\\lim_{x \\to +\\infty} \\frac{e^x}{x^n} = +\\infty \\qquad \\text{et} \\qquad \\lim_{x \\to -\\infty} x^n e^x = 0$$\n« L'exponentielle l'emporte sur les puissances. »\n• **Opérations (admises)** : les règles de somme, de produit et de quotient, ainsi que les formes indéterminées, sont les mêmes que pour les suites (tableaux du chapitre TA2, point 2), en remplaçant $\\lim u_n$ par $\\lim\\limits_{x \\to a} f(x)$, où $a$ est un réel, $+\\infty$ ou $-\\infty$. Exemple : $\\lim\\limits_{x \\to +\\infty} \\left(x^2 - \\dfrac{1}{x}\\right) = +\\infty$ par somme, et $\\lim\\limits_{x \\to 0^+} \\dfrac{-3}{x} = -\\infty$ par quotient ($-3$ et $0$, avec $x > 0$).\n• **Composition** : si $\\lim\\limits_{x \\to a} u(x) = b$ et $\\lim\\limits_{X \\to b} g(X) = c$, alors $\\lim\\limits_{x \\to a} g(u(x)) = c$. Exemple : $\\lim\\limits_{x \\to +\\infty} e^{-x^2} = 0$ car $-x^2 \\to -\\infty$ et $e^X \\to 0$ quand $X \\to -\\infty$.\n• **Comparaison et gendarmes** : les théorèmes vus pour les suites restent valables pour les fonctions (en $+\\infty$, en $-\\infty$ ou en un réel $a$)."
      },
      {
        "title": "4. Continuité",
        "content": "• $f$ est **continue en $a$** si $\\lim\\limits_{x \\to a} f(x) = f(a)$ ; elle est continue sur un intervalle $I$ si elle est continue en tout point de $I$. Graphiquement : la courbe se trace « sans lever le crayon ».\n• Les fonctions polynômes, rationnelles, racine carrée, exponentielle, valeur absolue, sinus et cosinus sont continues sur tout intervalle de leur ensemble de définition. Sommes, produits, quotients et composées de fonctions continues sont continues.\n• **Théorème** : toute fonction **dérivable** sur $I$ est **continue** sur $I$. La réciproque est fausse : $x \\mapsto |x|$ est continue en $0$ mais pas dérivable en $0$.\n• **Suites** : si $u_n \\to \\ell$ et si $f$ est continue en $\\ell$, alors $f(u_n) \\to f(\\ell)$."
      },
      {
        "title": "5. Théorème des Valeurs Intermédiaires (TVI)",
        "content": "• **Théorème des Valeurs Intermédiaires (TVI)** : Si $f$ est une fonction **continue** sur un intervalle $[a ; b]$, alors pour tout réel $k$ compris entre $f(a)$ et $f(b)$, il existe **au moins un réel** $c \\in [a ; b]$ tel que $f(c) = k$.\n• **Cas d'une fonction strictement monotone (théorème des valeurs intermédiaires)** :\nSi $f$ est **continue** ET **strictement monotone** (croissante ou décroissante) sur $[a ; b]$, alors pour tout $k$ compris entre $f(a)$ et $f(b)$, l'équation $f(x) = k$ admet **une unique solution** dans $[a ; b]$. Ce cas particulier est souvent appelé **corollaire du TVI**."
      },
      {
        "title": "6. Cas d'une fonction strictement monotone sur un intervalle quelconque",
        "content": "Ce résultat s'étend aux intervalles ouverts ou non bornés en remplaçant les images des bornes par les **limites** : si $f$ est continue et strictement croissante sur $]a ; b[$ avec $\\lim\\limits_{x \\to a} f(x) = L_1$ et $\\lim\\limits_{x \\to b} f(x) = L_2$, alors pour tout $k \\in \\, ]L_1 ; L_2[$, l'équation $f(x) = k$ admet une **unique** solution dans $]a ; b[$. Si $f$ est continue et strictement **décroissante** sur $]a ; b[$, on a $L_2 < L_1$ et le résultat vaut pour tout $k \\in \\, ]L_2 ; L_1[$.\nExemple : $x \\mapsto e^x + x$ est continue, strictement croissante sur $\\mathbb{R}$, de limites $-\\infty$ et $+\\infty$ : l'équation $e^x + x = 0$ a une unique solution réelle."
      },
      {
        "title": "7. Démonstration : limites de la fonction exponentielle en $+\\infty$ et en $-\\infty$",
        "content": "• **Inégalité préalable** : la fonction $g : x \\mapsto e^x - x$ a pour dérivée $g'(x) = e^x - 1$, négative sur $]-\\infty ; 0]$ et positive sur $[0 ; +\\infty[$. Son minimum est $g(0) = 1 > 0$, donc $e^x > x$ pour tout réel $x$.\n• **En $+\\infty$** : $e^x > x$ et $\\lim\\limits_{x \\to +\\infty} x = +\\infty$, donc, par comparaison, $\\lim\\limits_{x \\to +\\infty} e^x = +\\infty$.\n• **En $-\\infty$** : pour tout réel $x$, $e^x = \\dfrac{1}{e^{-x}}$. Quand $x \\to -\\infty$, $X = -x \\to +\\infty$, donc $e^{-x} = e^{X} \\to +\\infty$ et, par quotient, $\\lim\\limits_{x \\to -\\infty} e^x = 0$."
      },
      {
        "title": "8. Démonstration : croissance comparée de $e^x$ et $x^n$ en $+\\infty$",
        "content": "• **Cas $n = 1$** : soit $h(x) = e^x - \\dfrac{x^2}{2}$ sur $[0 ; +\\infty[$. Alors $h'(x) = e^x - x > 0$ (inégalité précédente), donc $h$ est croissante et $h(x) \\ge h(0) = 1 > 0$. Ainsi $e^x > \\dfrac{x^2}{2}$ et, pour $x > 0$, $\\dfrac{e^x}{x} > \\dfrac{x}{2}$. Comme $\\dfrac{x}{2} \\to +\\infty$, par comparaison $\\lim\\limits_{x \\to +\\infty} \\dfrac{e^x}{x} = +\\infty$.\n• **Cas $n \\ge 2$** : pour $x > 0$, en posant $X = \\dfrac{x}{n}$,\n$$\\frac{e^x}{x^n} = \\left(\\frac{e^{x/n}}{x}\\right)^n = \\left(\\frac{1}{n} \\times \\frac{e^{X}}{X}\\right)^n$$\nQuand $x \\to +\\infty$, $X \\to +\\infty$ et $\\dfrac{e^X}{X} \\to +\\infty$ (cas $n = 1$) ; par produit et puissance, $\\lim\\limits_{x \\to +\\infty} \\dfrac{e^x}{x^n} = +\\infty$.\n• **En $-\\infty$** : avec $X = -x \\to +\\infty$, $x^n e^x = (-1)^n \\dfrac{X^n}{e^X} \\to 0$."
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
        "example": "On sait que $f(x) = x^3 + 2x - 5$ s'annule une seule fois en $\\alpha \\in [1 ; 2]$. Donner un encadrement de $\\alpha$ d'amplitude inférieure ou égale à $10^{-2}$.",
        "steps": [
          "**Étape 1 (Principe)** : $f$ est strictement croissante ; si $f(a) < 0 < f(b)$, alors $a < \\alpha < b$. On coupe l'intervalle en deux et on garde la moitié où le signe change.",
          "**Étape 2 (Calculs)** : on part de $a = 1$ et $b = 2$, car $f(1) = -2 < 0$ et $f(2) = 7 > 0$.\nMilieu $1{,}5$ : $f(1{,}5) = 1{,}375 > 0$, donc $b = 1{,}5$.\nMilieu $1{,}25$ : $f(1{,}25) \\approx -0{,}547 < 0$, donc $a = 1{,}25$.\nMilieu $1{,}375$ : $f(1{,}375) \\approx 0{,}350 > 0$, donc $b = 1{,}375$.\nMilieu $1{,}3125$ : $f(1{,}3125) \\approx -0{,}114 < 0$, donc $a = 1{,}3125$.\nMilieu $1{,}34375$ : $f(1{,}34375) \\approx 0{,}114 > 0$, donc $b = 1{,}34375$.\nMilieu $1{,}328125$ : $f(1{,}328125) \\approx -0{,}001 < 0$, donc $a = 1{,}328125$.\nMilieu $1{,}3359375$ : $f(1{,}3359375) \\approx 0{,}056 > 0$, donc $b = 1{,}3359375$.\nAprès $7$ étapes, l'amplitude vaut $\\frac{1}{2^7} \\approx 0{,}0078 \\le 10^{-2}$.",
          "**Étape 3 (Programme)** :\n```python\ndef f(x):\n    return x**3 + 2*x - 5\n\na, b = 1, 2\nwhile b - a > 0.01:\n    m = (a + b) / 2\n    if f(m) < 0:\n        a = m\n    else:\n        b = m\nprint(a, b)\n```",
          "**Étape 4 (Exécution)** : le programme affiche `1.328125 1.3359375`, les bornes trouvées à la main.",
          "**Conclusion** : $1{,}328125 < \\alpha < 1{,}3359375$. Pour des bornes au centième, on calcule $f(1{,}32) = -0{,}060032 < 0$ et $f(1{,}33) = 0{,}012637 > 0$, d'où $1{,}32 < \\alpha < 1{,}33$."
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
      },
      {
        "q": "Quelle inégalité permet de démontrer que $\\lim\\limits_{x \\to +\\infty} e^x = +\\infty$ ?",
        "a": "$e^x > x$ pour tout réel $x$ (étude de $x \\mapsto e^x - x$, de minimum $1$), puis comparaison."
      },
      {
        "q": "Que signifie $\\lim\\limits_{x \\to +\\infty} f(x) = \\ell$ ?",
        "a": "Tout intervalle ouvert contenant $\\ell$ contient toutes les valeurs $f(x)$ pour $x$ assez grand."
      },
      {
        "q": "Que vaut $\\lim\\limits_{x \\to -\\infty} x^n$, pour un entier $n \\ge 1$ ?",
        "a": "$+\\infty$ si $n$ est pair, $-\\infty$ si $n$ est impair."
      }
    ]
  },
  "TA5": {
    "title": "TA5 : La fonction logarithme népérien",
    "domain": "Analyse et Fonctions",
    "objectives": [
      "Définir la fonction logarithme népérien $\\ln$ comme la fonction réciproque de l'exponentielle : $\\ln(x) = y \\iff e^y = x$ ($x > 0$).",
      "Maîtriser les propriétés algébriques : $\\ln(ab) = \\ln(a) + \\ln(b)$, $\\ln\\left(\\frac{1}{b}\\right) = -\\ln(b)$, $\\ln(a^n) = n\\ln(a)$ et $\\ln(\\sqrt{a}) = \\frac{1}{2}\\ln(a)$.",
      "Dériver des fonctions composées $(\\ln(u))' = \\frac{u'}{u}$.",
      "Connaître les limites usuelles et croissances comparées : $\\lim_{x \\to +\\infty} \\frac{\\ln(x)}{x} = 0$ et $\\lim_{x \\to 0^+} x\\ln(x) = 0$.",
      "Résoudre des équations et inéquations faisant intervenir $\\ln$ en précisant le domaine de validité.",
      "Étudier une fonction faisant intervenir $\\ln$ (dérivée, variations, limites).",
      "Démontrer la formule $\\ln'(x) = \\frac{1}{x}$ et la limite de $x\\ln(x)$ en $0$."
    ],
    "keyPoints": [
      {
        "title": "1. Définition, variations et signe",
        "content": "Pour tout $x > 0$, $\\ln(x)$ est l'**unique** réel $y$ tel que $e^y = x$. La courbe de $\\ln$ est la symétrique de celle de $\\exp$ par rapport à la droite $y = x$.\n• $\\ln$ est **strictement croissante** sur $]0 ; +\\infty[$, d'où pour $a, b > 0$ :\n$$\\ln(a) = \\ln(b) \\iff a = b \\qquad \\ln(a) < \\ln(b) \\iff a < b$$\n• **Signe** : $\\ln(x) < 0$ si $0 < x < 1$, $\\ln(1) = 0$, $\\ln(x) > 0$ si $x > 1$.\n• **Limites aux bornes** : $\\lim\\limits_{x \\to 0^+} \\ln(x) = -\\infty$ (asymptote verticale $x = 0$) et $\\lim\\limits_{x \\to +\\infty} \\ln(x) = +\\infty$."
      },
      {
        "title": "2. Propriétés algébriques fondamentales de $\\ln$",
        "content": "Pour tous réels $a, b > 0$ :\n• $\\ln(1) = 0$ et $\\ln(e) = 1$\n• $\\ln(ab) = \\ln(a) + \\ln(b)$\n• $\\ln\\left(\\frac{a}{b}\\right) = \\ln(a) - \\ln(b)$\n• $\\ln(a^n) = n\\ln(a)$ pour tout $n \\in \\mathbb{Z}$\n• $\\ln(\\sqrt{a}) = \\frac{1}{2}\\ln(a)$ (car $\\ln(a) = \\ln(\\sqrt{a} \\times \\sqrt{a}) = 2\\ln(\\sqrt{a})$)\n• Pour tout $x > 0$, $e^{\\ln(x)} = x$, et pour tout $x \\in \\mathbb{R}$, $\\ln(e^x) = x$."
      },
      {
        "title": "3. Dérivée et croissances comparées",
        "content": "• Dérivée : $(\\ln(x))' = \\frac{1}{x} > 0$ pour tout $x > 0$ (fonction strictement croissante sur $]0 ; +\\infty[$).\n• Dérivée composée : $(\\ln(u(x)))' = \\frac{u'(x)}{u(x)}$ (sur tout intervalle où $u(x) > 0$) ; cette formule est un cas particulier de la dérivée d'une composée, voir chapitre TA8 (points 2 et 3).\n• **Croissances comparées en $+\\infty$** : L'exponentielle l'emporte sur toute puissance de $x$, qui l'emporte sur le logarithme :\n$$\\lim_{x \\to +\\infty} \\frac{\\ln(x)}{x^n} = 0 \\quad (n \\in \\mathbb{N}^*)$$"
      },
      {
        "title": "4. Limites à connaître",
        "content": "• $\\lim\\limits_{x \\to 0} \\dfrac{\\ln(1 + x)}{x} = 1$ : c'est le nombre dérivé de $\\ln$ en $1$.\n• Pour tout entier $n \\ge 1$ : $\\lim\\limits_{x \\to +\\infty} \\dfrac{\\ln(x)}{x^n} = 0$ et $\\lim\\limits_{x \\to 0^+} x^n \\ln(x) = 0$.\n« Les puissances de $x$ l'emportent sur le logarithme. »"
      },
      {
        "title": "5. Fonctions $\\ln(u)$ : domaine et variations",
        "content": "• $\\ln(u(x))$ n'existe que si $u(x) > 0$ : le domaine se détermine en résolvant cette inéquation.\n• Sur un intervalle où $u > 0$ et $u$ dérivable, $(\\ln u)' = \\dfrac{u'}{u}$ a le signe de $u'$ : **$\\ln(u)$ a les mêmes variations que $u$**.\nExemple : $g(x) = \\ln(x^2 + 1)$ est définie sur $\\mathbb{R}$, $g'(x) = \\dfrac{2x}{x^2 + 1}$ ; $g$ est décroissante sur $]-\\infty ; 0]$ et croissante sur $[0 ; +\\infty[$.\n• Le logarithme décimal $\\log(x) = \\dfrac{\\ln(x)}{\\ln(10)}$ vérifie $\\log(10^n) = n$ (utilisé en chimie pour le pH, en acoustique pour les décibels)."
      },
      {
        "title": "6. Démonstration : dérivée de $\\ln$ (la dérivabilité étant admise)",
        "content": "Pour tout $x > 0$, $e^{\\ln(x)} = x$. On admet que $\\ln$ est dérivable sur $]0 ; +\\infty[$. On dérive les deux membres, le premier comme une composée $e^{u}$ avec $u = \\ln$ :\n$$\\ln'(x) \\times e^{\\ln(x)} = 1, \\quad \\text{soit} \\quad \\ln'(x) \\times x = 1$$\nDonc $\\ln'(x) = \\dfrac{1}{x}$ pour tout $x > 0$. Comme $\\dfrac{1}{x} > 0$, on retrouve que $\\ln$ est strictement croissante sur $]0 ; +\\infty[$.\n**Relation fonctionnelle** : pour $a, b > 0$, $e^{\\ln(a) + \\ln(b)} = e^{\\ln(a)} \\times e^{\\ln(b)} = ab = e^{\\ln(ab)}$. Deux réels ayant la même exponentielle sont égaux (l'exponentielle est strictement croissante), donc $\\ln(ab) = \\ln(a) + \\ln(b)$."
      },
      {
        "title": "7. Démonstration : limite de $x\\ln(x)$ en $0$ et de $\\frac{\\ln(x)}{x}$ en $+\\infty$",
        "content": "On se ramène aux croissances comparées de l'exponentielle (chapitre TA3) en posant $X = \\ln(x)$, c'est-à-dire $x = e^X$.\n• **En $0$** : quand $x \\to 0^+$, $X = \\ln(x) \\to -\\infty$, et $x\\ln(x) = e^X \\times X = Xe^X$. Or $\\lim\\limits_{X \\to -\\infty} Xe^X = 0$, donc $\\lim\\limits_{x \\to 0^+} x\\ln(x) = 0$.\n• **En $+\\infty$** : quand $x \\to +\\infty$, $X \\to +\\infty$ et $\\dfrac{\\ln(x)}{x} = \\dfrac{X}{e^X} = \\dfrac{1}{e^X / X}$. Comme $\\dfrac{e^X}{X} \\to +\\infty$, on obtient $\\lim\\limits_{x \\to +\\infty} \\dfrac{\\ln(x)}{x} = 0$."
      },
      {
        "title": "8. Algorithme de Briggs (calcul approché d'un logarithme)",
        "content": "Pour $x > 0$, on extrait $k$ racines carrées successives : $y = \\sqrt{\\sqrt{\\cdots\\sqrt{x}}} = x^{1/2^k}$ est très proche de $1$ et $\\ln(x) = 2^k \\ln(y)$. Comme $\\ln(y) \\approx y - 1$ pour $y$ proche de $1$ (tangente en $1$ à la courbe de $\\ln$), on obtient :\n$$\\ln(x) \\approx 2^k\\,(y - 1)$$\n```python\nfrom math import sqrt\n\ndef briggs(x, k):\n    y = x\n    for i in range(k):\n        y = sqrt(y)\n    return 2**k * (y - 1)\n\nprint(briggs(2, 20))   # environ 0.693147\n```\nOn retrouve $\\ln(2) \\approx 0{,}693147$."
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
      "⚠️ $\\ln(x^2) = 2\\ln(x)$ seulement pour $x > 0$ ; pour $x \\ne 0$ quelconque, $\\ln(x^2) = 2\\ln|x|$.",
      "⚠️ $\\ln(u(x))$ n'est définie que si $u(x) > 0$ : $x \\mapsto \\ln(x^2 - 1)$ est définie sur $]-\\infty ; -1[ \\cup ]1 ; +\\infty[$, et non sur $\\mathbb{R}$."
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
      "Définir l'intégrale d'une fonction continue et positive comme l'aire du domaine sous sa courbe.",
      "Établir que $x \\mapsto \\int_a^x f(t)\\,dt$ est une primitive de $f$, puis définir par les primitives l'intégrale d'une fonction continue de signe quelconque : $\\int_a^b f(t)\\,dt = F(b) - F(a)$.",
      "Interpréter géométriquement l'intégrale comme une aire algébrique sous la courbe.",
      "Maîtriser les propriétés de l'intégrale : linéarité, relation de Chasles, positivité.",
      "Appliquer la formule d'intégration par parties (IPP) : $\\int_a^b u'(t)v(t) dt = [u(t)v(t)]_a^b - \\int_a^b u(t)v'(t) dt$.",
      "Calculer l'aire d'un domaine délimité par deux courbes.",
      "Étudier une suite d'intégrales (signe, monotonie, encadrement, limite) et approcher une intégrale par la méthode des rectangles (exemple : méthode de Brouncker pour $\\ln 2$).",
      "Démontrer que $x \\mapsto \\int_a^x f(t)\\,dt$ est une primitive de $f$ (cas positif croissant) et la formule d'intégration par parties."
    ],
    "keyPoints": [
      {
        "title": "1. Intégrale d'une fonction continue et positive : une aire",
        "content": "Dans un repère orthogonal, l'**unité d'aire** (u.a.) est l'aire du rectangle unité du repère.\nSoit $f$ une fonction **continue et positive** sur $[a ; b]$, avec $a \\le b$. On note $\\mathcal{D}$ le domaine compris entre la courbe de $f$, l'axe des abscisses et les droites d'équations $x = a$ et $x = b$.\n**Définition** : l'**intégrale** de $a$ à $b$ de $f$, notée $\\int_a^b f(x)\\,dx$, est l'**aire** de $\\mathcal{D}$, en unités d'aire.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.6rem auto;\"><svg class=\"geo-svg-figure\" role=\"img\" aria-label=\"Courbe d'une fonction positive et domaine D colorié, compris entre la courbe, l'axe des abscisses et les droites d'équations x = 1 et x = 4.\" viewBox=\"0 0 180 180\" width=\"180\" height=\"180\" style=\"max-width:330px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"18\" y1=\"162\" x2=\"18\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"42\" y1=\"162\" x2=\"42\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"66\" y1=\"162\" x2=\"66\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"90\" y1=\"162\" x2=\"90\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"114\" y1=\"162\" x2=\"114\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"138\" y1=\"162\" x2=\"138\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"162\" y1=\"162\" x2=\"162\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"162\" x2=\"162\" y2=\"162\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"138\" x2=\"162\" y2=\"138\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"114\" x2=\"162\" y2=\"114\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"90\" x2=\"162\" y2=\"90\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"66\" x2=\"162\" y2=\"66\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"42\" x2=\"162\" y2=\"42\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"18\" x2=\"162\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"138\" x2=\"172\" y2=\"138\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\"/><polygon points=\"0,0 -8,-3.5 -8,3.5\" transform=\"translate(174 138) rotate(0)\" fill=\"var(--text-main, #334155)\"/><line x1=\"42\" y1=\"162\" x2=\"42\" y2=\"8\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\"/><polygon points=\"0,0 -8,-3.5 -8,3.5\" transform=\"translate(42 6) rotate(-90)\" fill=\"var(--text-main, #334155)\"/><text x=\"18\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−1</text><text x=\"66\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">1</text><text x=\"90\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">2</text><text x=\"114\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">3</text><text x=\"138\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">4</text><text x=\"162\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">5</text><text x=\"37\" y=\"165.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−1</text><text x=\"37\" y=\"117.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">1</text><text x=\"37\" y=\"93.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">2</text><text x=\"37\" y=\"69.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">3</text><text x=\"37\" y=\"45.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">4</text><text x=\"37\" y=\"21.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">5</text><text x=\"36\" y=\"151\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">0</text><path d=\"M 66 109.2 C 68 108.4 70 107.5 72 106.5 C 74 105.5 76 104.4 78 103.2 C 80 102 82 100.7 84 99.3 C 86 97.9 88 96.4 90 94.8 C 92 93.2 94 91.5 96 89.7 C 98 87.9 100 86 102 84 C 104 82 106 79.9 108 77.7 C 110 75.5 112 73.2 114 70.8 C 116 68.4 118 65.9 120 63.3 C 122 60.7 124 58 126 55.2 C 128 52.4 130 49.5 132 46.5 C 134 43.5 136 40.4 138 37.2 L 138 138 L 66 138 Z\" fill=\"#2563eb\" fill-opacity=\"0.2\" stroke=\"none\"/><line x1=\"66\" y1=\"138\" x2=\"66\" y2=\"109.19999999999999\" stroke=\"#2563eb\" stroke-width=\"1.2\"/><line x1=\"138\" y1=\"138\" x2=\"138\" y2=\"37.199999999999996\" stroke=\"#2563eb\" stroke-width=\"1.2\"/><path d=\"M 42 114 C 44 114 46 113.9 48 113.7 C 50 113.5 52 113.2 54 112.8 C 56 112.4 58 111.9 60 111.3 C 62 110.7 64 110 66 109.2 C 68 108.4 70 107.5 72 106.5 C 74 105.5 76 104.4 78 103.2 C 80 102 82 100.7 84 99.3 C 86 97.9 88 96.4 90 94.8 C 92 93.2 94 91.5 96 89.7 C 98 87.9 100 86 102 84 C 104 82 106 79.9 108 77.7 C 110 75.5 112 73.2 114 70.8 C 116 68.4 118 65.9 120 63.3 C 122 60.7 124 58 126 55.2 C 128 52.4 130 49.5 132 46.5 C 134 43.5 136 40.4 138 37.2 C 140 34 142 30.7 144 27.3 C 146 23.9 148 20.4 150 16.8\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.2\"/><text x=\"104.4\" y=\"114\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"var(--text-main, #334155)\">D</text></svg></div>\n\n• La variable est **muette** : $\\int_a^b f(x)\\,dx = \\int_a^b f(t)\\,dt$.\n• Si $a = b$, le domaine se réduit à un segment : $\\int_a^a f(x)\\,dx = 0$.\n• **Exemple** : sur $[0 ; 2]$, le domaine sous la droite $y = x$ est un triangle de base $2$ et de hauteur $2$, donc $\\int_0^2 x\\,dx = \\frac{2 \\times 2}{2} = 2$."
      },
      {
        "title": "2. Théorème fondamental : de l'aire à la primitive",
        "content": "**Théorème** : si $f$ est continue et positive sur $[a ; b]$, la fonction $F : x \\mapsto \\int_a^x f(t)\\,dt$ est dérivable sur $[a ; b]$ et $F' = f$. Ainsi, $F$ est la primitive de $f$ sur $[a ; b]$ qui s'annule en $a$. (Démontré au point 3 pour $f$ croissante ; admis dans le cas général.)\n• **Calcul d'une aire** : si $G$ est une primitive quelconque de $f$, alors $G = F + C$ où $C$ est une constante (chapitre TA6), donc $G(b) - G(a) = F(b) - F(a) = F(b)$, c'est-à-dire\n$$\\int_a^b f(t)\\,dt = G(b) - G(a)$$\n• **Existence de primitives** : ce théorème permet de justifier que toute fonction continue sur un segment $[a ; b]$ admet des primitives. En effet, $f$ y admet un minimum $m$ (admis) ; la fonction $f - m$ est continue et positive, donc elle admet une primitive $H$, et $x \\mapsto H(x) + mx$ est une primitive de $f$."
      },
      {
        "title": "3. Démonstration : $x \\mapsto \\int_a^x f(t)\\,dt$ est une primitive de $f$ ($f$ continue, positive, croissante)",
        "content": "Soit $f$ continue, positive et croissante sur $[a ; b]$, et $F(x) = \\int_a^x f(t)\\,dt$ (aire sous la courbe entre $a$ et $x$). Soit $x_0 \\in [a ; b[$ et $h > 0$ tel que $x_0 + h \\le b$.\n• $F(x_0 + h) - F(x_0)$ est l'aire du domaine situé sous la courbe entre $x_0$ et $x_0 + h$.\n• $f$ étant croissante, ce domaine contient le rectangle de largeur $h$ et de hauteur $f(x_0)$ et il est contenu dans le rectangle de largeur $h$ et de hauteur $f(x_0 + h)$ :\n$$h\\,f(x_0) \\le F(x_0 + h) - F(x_0) \\le h\\,f(x_0 + h)$$\n• En divisant par $h > 0$ : $f(x_0) \\le \\dfrac{F(x_0 + h) - F(x_0)}{h} \\le f(x_0 + h)$. Comme $f$ est continue en $x_0$, $f(x_0 + h) \\to f(x_0)$ quand $h \\to 0$ : par le théorème des gendarmes, le taux d'accroissement tend vers $f(x_0)$.\n• Pour $x_0 \\in ]a ; b]$ et $h < 0$ tel que $x_0 + h \\ge a$, $F(x_0) - F(x_0 + h)$ est l'aire du domaine situé sous la courbe entre $x_0 + h$ et $x_0$, de largeur $-h > 0$. Comme $f$ est croissante, $-h\\,f(x_0 + h) \\le F(x_0) - F(x_0 + h) \\le -h\\,f(x_0)$. En divisant par $-h > 0$ : $f(x_0 + h) \\le \\dfrac{F(x_0 + h) - F(x_0)}{h} \\le f(x_0)$, et la limite est encore $f(x_0)$ quand $h \\to 0$.\n• Donc $F$ est dérivable sur $[a ; b]$ et $F' = f$. De plus $F(a) = 0$ : $F$ est la primitive de $f$ qui s'annule en $a$."
      },
      {
        "title": "4. Cas général : intégrale d'une fonction de signe quelconque",
        "content": "Toute fonction continue sur un intervalle $I$ admet des primitives sur $I$ (point 2 et chapitre TA6).\n**Définition** : si $f$ est continue sur $I$, $F$ une primitive de $f$ sur $I$, et $a, b \\in I$ :\n$$\\int_a^b f(t)\\,dt = [F(t)]_a^b = F(b) - F(a)$$\n• Ce nombre ne dépend pas de la primitive choisie, car deux primitives de $f$ diffèrent d'une constante. Si $f$ est positive et $a \\le b$, on retrouve l'aire du point 1 (voir le point 2).\n• **Théorème fondamental, cas général** : si $f$ est continue sur $I$ et $a \\in I$, la fonction $x \\mapsto \\int_a^x f(t)\\,dt$ est **l'unique primitive de $f$ sur $I$ qui s'annule en $a$**.\n• **Relation de Chasles** : $\\int_a^c f(t)\\,dt + \\int_c^b f(t)\\,dt = \\int_a^b f(t)\\,dt$.\n• **Valeur moyenne** de $f$ sur $[a ; b]$ : $\\mu = \\frac{1}{b - a} \\int_a^b f(t)\\,dt$.\n• Si $f$ est **négative** sur $[a ; b]$ ($a \\le b$), l'aire du domaine entre sa courbe et l'axe des abscisses vaut $-\\int_a^b f(x)\\,dx$, car $-f$ est positive.\n• Si $f \\ge g$ sur $[a ; b]$ ($a \\le b$), l'aire entre les deux courbes vaut $\\int_a^b \\big(f(x) - g(x)\\big)\\,dx$.\n• Les primitives de formes composées, comme $\\frac{u'}{u}$ ou $u'e^u$, sont celles du chapitre TA6 ; elles reposent sur la dérivée d'une composée (chapitre TA8, point 2)."
      },
      {
        "title": "5. Linéarité, positivité, croissance",
        "content": "Pour $f$, $g$ continues sur $[a ; b]$ et $\\lambda \\in \\mathbb{R}$ :\n• **Linéarité** : $\\int_a^b (f + \\lambda g) = \\int_a^b f + \\lambda \\int_a^b g$.\n• **Positivité** : si $a \\le b$ et $f \\ge 0$ sur $[a ; b]$, alors $\\int_a^b f \\ge 0$.\n• **Croissance** : si $a \\le b$ et $f \\le g$ sur $[a ; b]$, alors $\\int_a^b f \\le \\int_a^b g$.\n• **Conséquence** : si $m \\le f \\le M$ sur $[a ; b]$, alors $m(b - a) \\le \\int_a^b f \\le M(b - a)$."
      },
      {
        "title": "6. Intégration par parties (IPP)",
        "content": "Soient $u$ et $v$ deux fonctions dérivables à dérivées continues sur $[a ; b]$ :\n$$\\int_a^b u'(t) v(t) dt = [u(t) v(t)]_a^b - \\int_a^b u(t) v'(t) dt$$\n*Règle ALPES pour choisir $v(t)$ (qui sera dérivée)* : Logarithme, Polynôme, Exponentielle, Sinus/Cosinus (on dérive de préférence la fonction qui apparaît en premier dans cette liste)."
      },
      {
        "title": "7. Démonstration : formule d'intégration par parties",
        "content": "Soient $u$ et $v$ dérivables sur $[a ; b]$, de dérivées $u'$ et $v'$ continues.\n• Le produit $uv$ est dérivable et $(uv)' = u'v + uv'$, fonction continue : $uv$ est donc une primitive de $u'v + uv'$, et\n$$\\int_a^b \\big(u'(t)v(t) + u(t)v'(t)\\big)\\,dt = [u(t)v(t)]_a^b$$\n• Par linéarité, $\\int_a^b u'(t)v(t)\\,dt + \\int_a^b u(t)v'(t)\\,dt = [u(t)v(t)]_a^b$, d'où :\n$$\\int_a^b u'(t)v(t)\\,dt = [u(t)v(t)]_a^b - \\int_a^b u(t)v'(t)\\,dt$$\nLa continuité de $u'$ et $v'$ garantit l'existence de toutes les intégrales écrites."
      },
      {
        "title": "8. Méthode des rectangles avec Python",
        "content": "Quand on ne connaît pas de primitive (par exemple de $x \\mapsto e^{-x^2}$), on approche l'intégrale par une somme d'aires de rectangles de largeur $\\frac{b - a}{n}$ :\n```python\nfrom math import exp\ndef rectangles(f, a, b, n):\n    h = (b - a) / n\n    s = 0\n    for k in range(n):\n        s = s + f(a + k*h) * h\n    return s\nprint(rectangles(lambda x: exp(-x**2), 0, 1, 10))\n```\nAvec $n = 10$ on obtient environ $0{,}778$ ; la valeur exacte est proche de $0{,}747$. Plus $n$ est grand, meilleure est l'approximation.\n• **Variantes** : la méthode des **milieux** (hauteur $f\\left(a + (k + \\frac{1}{2})h\\right)$) donne environ $0{,}7471$ avec $n = 10$ ; la méthode des **trapèzes** (aire $\\frac{h}{2}\\big(f(x_k) + f(x_{k+1})\\big)$) donne environ $0{,}7462$. Ces méthodes sont en général plus précises. Voir aussi la méthode de Monte-Carlo (chapitre TS4).\n• **Méthode de Brouncker pour $\\ln 2$** : $\\ln 2 = \\int_1^2 \\frac{dt}{t}$. On part du rectangle de base $[1 ; 2]$ et de hauteur $\\frac{1}{2}$ (aire $\\frac{1}{1 \\times 2}$). À chaque étape, on coupe chaque bande en deux et, dans chaque moitié gauche, on ajoute le rectangle compris entre le rectangle déjà placé et la hauteur de la courbe à son extrémité droite : on ajoute ainsi $\\frac{1}{3 \\times 4}$ (base $\\left[1 ; \\frac{3}{2}\\right]$), puis $\\frac{1}{5 \\times 6}$ et $\\frac{1}{7 \\times 8}$, et ainsi de suite. La somme des $n$ premières aires ajoutées,\n$$B_n = \\sum_{k=1}^{n} \\frac{1}{(2k - 1) \\times 2k} = 1 - \\frac{1}{2} + \\frac{1}{3} - \\dots - \\frac{1}{2n},$$\nest égale à $\\frac{1}{n + 1} + \\frac{1}{n + 2} + \\dots + \\frac{1}{2n}$, la somme des $n$ rectangles « à droite » sous la courbe ; elle vérifie $B_n \\le \\ln 2 \\le B_n + \\frac{1}{2n}$, donc $(B_n)$ converge vers $\\ln 2$.\n```python\ndef brouncker(n):\n    s = 0\n    for k in range(1, n + 1):\n        s = s + 1 / ((2*k - 1) * (2*k))\n    return s\nprint(brouncker(500))\n```\nLe programme affiche environ $0{,}69265$, valeur approchée par défaut de $\\ln 2 \\approx 0{,}69315$ à moins de $\\frac{1}{1000}$ près."
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
      },
      {
        "title": "Méthode : Calculer et interpréter une valeur moyenne",
        "example": "La vitesse d'un mobile est $v(t) = 6t - t^2$ (en m/s) pour $t \\in [0 ; 6]$ (en s). Calculer sa vitesse moyenne sur $[0 ; 6]$.",
        "steps": [
          "**Étape 1 (Formule)** : $\\mu = \\dfrac{1}{6 - 0}\\int_0^6 v(t)\\,dt$.",
          "**Étape 2 (Primitive)** : $V(t) = 3t^2 - \\dfrac{t^3}{3}$ est une primitive de $v$ sur $[0 ; 6]$.",
          "**Étape 3 (Calcul)** : $\\int_0^6 v(t)\\,dt = V(6) - V(0) = 108 - 72 = 36$, donc $\\mu = \\dfrac{36}{6} = 6$.",
          "**Conclusion** : la vitesse moyenne est $6$ m/s ; l'intégrale $36$ représente la distance parcourue ($36$ m). Graphiquement, le rectangle de hauteur $\\mu = 6$ sur $[0 ; 6]$ a la même aire que le domaine sous la courbe de $v$."
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
      },
      {
        "q": "Sur quelle formule repose la démonstration de l'intégration par parties ?",
        "a": "La dérivée d'un produit, $(uv)' = u'v + uv'$, que l'on intègre entre $a$ et $b$ avant d'utiliser la linéarité."
      },
      {
        "q": "Comment définit-on l'intégrale d'une fonction continue et positive sur $[a ; b]$ ?",
        "a": "C'est l'aire, en unités d'aire, du domaine compris entre sa courbe, l'axe des abscisses et les droites d'équations $x = a$ et $x = b$."
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
      "Démontrer qu'une droite est orthogonale à un plan.",
      "Reconnaître deux droites orthogonales, éventuellement non coplanaires, et déterminer un plan médiateur.",
      "Démontrer l'équation cartésienne d'un plan et la propriété de distance minimale du projeté orthogonal."
    ],
    "keyPoints": [
      {
        "title": "1. Produit scalaire dans l'espace : définitions et propriétés",
        "content": "• Deux vecteurs de l'espace sont toujours coplanaires : on définit $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\cos(\\widehat{\\vec{u}, \\vec{v}})$ comme dans le plan qui les contient.\n• En **repère orthonormé**, pour $\\vec{u}(x ; y ; z)$ et $\\vec{v}(x' ; y' ; z')$ : $\\vec{u} \\cdot \\vec{v} = xx' + yy' + zz'$ et $\\|\\vec{u}\\| = \\sqrt{x^2 + y^2 + z^2}$.\n• Le produit scalaire est **symétrique** et **bilinéaire** : $\\vec{u} \\cdot (\\vec{v} + k\\vec{w}) = \\vec{u} \\cdot \\vec{v} + k\\,\\vec{u} \\cdot \\vec{w}$.\n• $\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0$.\n• Développement : $\\|\\vec{u} + \\vec{v}\\|^2 = \\|\\vec{u}\\|^2 + 2\\,\\vec{u} \\cdot \\vec{v} + \\|\\vec{v}\\|^2$ et $\\|\\vec{u} - \\vec{v}\\|^2 = \\|\\vec{u}\\|^2 - 2\\,\\vec{u} \\cdot \\vec{v} + \\|\\vec{v}\\|^2$.\n• **Formules de polarisation** (on les déduit des deux développements précédents) : $\\vec{u} \\cdot \\vec{v} = \\frac{1}{2}\\left(\\|\\vec{u} + \\vec{v}\\|^2 - \\|\\vec{u}\\|^2 - \\|\\vec{v}\\|^2\\right)$, $\\vec{u} \\cdot \\vec{v} = \\frac{1}{2}\\left(\\|\\vec{u}\\|^2 + \\|\\vec{v}\\|^2 - \\|\\vec{u} - \\vec{v}\\|^2\\right)$ et $\\vec{u} \\cdot \\vec{v} = \\frac{1}{4}\\left(\\|\\vec{u} + \\vec{v}\\|^2 - \\|\\vec{u} - \\vec{v}\\|^2\\right)$.\n• Distance entre deux points en repère orthonormé : $AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$."
      },
      {
        "title": "2. Vecteur normal et équation de plan dans l'espace",
        "content": "• Un vecteur non nul $\\vec{n}\\begin{pmatrix} a \\\\ b \\\\ c \\end{pmatrix}$ est **normal** à un plan $\\mathcal{P}$ s'il est orthogonal à deux vecteurs directeurs non colinéaires de $\\mathcal{P}$.\n• Tout plan de vecteur normal $\\vec{n}(a ; b ; c)$ admet une équation cartésienne de la forme :\n$$ax + by + cz + d = 0$$\n• Deux plans sont parallèles ssi leurs vecteurs normaux sont colinéaires. Ils sont perpendiculaires ssi leurs vecteurs normaux sont orthogonaux ($\\vec{n}_1 \\cdot \\vec{n}_2 = 0$)."
      },
      {
        "title": "3. Orthogonalité de deux droites, d'une droite et d'un plan ; plan médiateur",
        "content": "• Deux droites $d$ et $d'$ de l'espace, de vecteurs directeurs $\\vec{u}$ et $\\vec{u'}$, sont **orthogonales** si $\\vec{u} \\cdot \\vec{u'} = 0$. Elles ne sont pas forcément sécantes, ni même coplanaires ; orthogonales **et** sécantes, on les dit **perpendiculaires**. Par exemple, dans un cube $ABCDEFGH$ de face $ABCD$ et d'arêtes $[AE]$, $[BF]$, $[CG]$, $[DH]$, les droites $(AB)$ et $(CG)$ sont orthogonales sans être coplanaires.\n• Une droite $d$ est **orthogonale** à un plan $\\mathcal{P}$ si elle est orthogonale à **deux droites sécantes** de $\\mathcal{P}$. Elle est alors orthogonale à toutes les droites de $\\mathcal{P}$.\n• De façon équivalente : un vecteur directeur de $d$ est **normal** à $\\mathcal{P}$.\n• Le plan passant par $A$ et de vecteur normal $\\vec{n}$ est l'ensemble des points $M$ tels que $\\overrightarrow{AM} \\cdot \\vec{n} = 0$.\n• Une droite de vecteur directeur $\\vec{w}$ est **parallèle** au plan de vecteur normal $\\vec{n}$ si et seulement si $\\vec{w} \\cdot \\vec{n} = 0$.\n• **Plan médiateur** : le plan médiateur d'un segment $[AB]$ (avec $A \\ne B$) est le plan passant par le milieu $I$ de $[AB]$ et orthogonal à la droite $(AB)$. C'est l'ensemble des points $M$ de l'espace tels que $MA = MB$ : en effet, $MA^2 - MB^2 = (\\overrightarrow{MA} - \\overrightarrow{MB}) \\cdot (\\overrightarrow{MA} + \\overrightarrow{MB}) = \\overrightarrow{BA} \\cdot 2\\overrightarrow{MI} = 2\\,\\overrightarrow{AB} \\cdot \\overrightarrow{IM}$, qui est nul si et seulement si $\\overrightarrow{AB} \\cdot \\overrightarrow{IM} = 0$."
      },
      {
        "title": "4. Projeté orthogonal et distance",
        "content": "• Le **projeté orthogonal** d'un point $M$ sur un plan $\\mathcal{P}$ est le point $H$ de $\\mathcal{P}$ tel que $\\overrightarrow{MH}$ est colinéaire à un vecteur normal de $\\mathcal{P}$ (c'est l'intersection de $\\mathcal{P}$ avec la droite passant par $M$ orthogonale à $\\mathcal{P}$).\n• $H$ est le point de $\\mathcal{P}$ **le plus proche** de $M$ : pour tout $N \\in \\mathcal{P}$, $MN \\ge MH$ (Pythagore). La distance de $M$ au plan est $MH$.\n• De même, le projeté orthogonal de $M$ sur une droite $d$ est le point $H$ de $d$ tel que $\\overrightarrow{MH}$ est orthogonal à un vecteur directeur de $d$."
      },
      {
        "title": "5. Démonstration : équation cartésienne d'un plan",
        "content": "On se place dans un repère orthonormé. Soit $\\mathcal{P}$ le plan passant par $A(x_A ; y_A ; z_A)$ et de vecteur normal $\\vec{n}(a ; b ; c) \\ne \\vec{0}$.\n• **Sens direct** : $M(x ; y ; z) \\in \\mathcal{P} \\iff \\overrightarrow{AM} \\cdot \\vec{n} = 0 \\iff a(x - x_A) + b(y - y_A) + c(z - z_A) = 0$, c'est-à-dire $ax + by + cz + d = 0$ avec $d = -(ax_A + by_A + cz_A)$.\n• **Réciproque** : soient $(a ; b ; c) \\ne (0 ; 0 ; 0)$ et $d$ un réel ; supposons par exemple $a \\ne 0$. Le point $A\\left(-\\frac{d}{a} ; 0 ; 0\\right)$ vérifie l'équation et, pour tout point $M(x ; y ; z)$, $ax + by + cz + d = a\\left(x + \\frac{d}{a}\\right) + by + cz = \\overrightarrow{AM} \\cdot \\vec{n}$. L'ensemble des points vérifiant $ax + by + cz + d = 0$ est donc le plan passant par $A$ et de vecteur normal $\\vec{n}(a ; b ; c)$. (Si $a = 0$, on raisonne de même avec $b$ ou $c$.)"
      },
      {
        "title": "6. Démonstration : le projeté orthogonal est le point du plan le plus proche",
        "content": "Soit $H$ le projeté orthogonal de $M$ sur le plan $\\mathcal{P}$ et $N$ un point quelconque de $\\mathcal{P}$.\n• $\\overrightarrow{MH}$ est normal à $\\mathcal{P}$ et $\\overrightarrow{HN}$ est un vecteur du plan ($H$ et $N$ sont dans $\\mathcal{P}$) : $\\overrightarrow{MH} \\cdot \\overrightarrow{HN} = 0$.\n• Par la relation de Chasles et le développement du carré scalaire :\n$$MN^2 = \\|\\overrightarrow{MH} + \\overrightarrow{HN}\\|^2 = MH^2 + 2\\,\\overrightarrow{MH} \\cdot \\overrightarrow{HN} + HN^2 = MH^2 + HN^2$$\n• Donc $MN^2 \\ge MH^2$, soit $MN \\ge MH$, avec égalité si et seulement si $HN = 0$, c'est-à-dire $N = H$.\n**Conclusion** : $H$ est l'unique point de $\\mathcal{P}$ le plus proche de $M$, et la distance de $M$ au plan est $MH$."
      },
      {
        "title": "7. Pour aller plus loin : intersection de deux plans",
        "content": "Deux plans dont les vecteurs normaux ne sont pas colinéaires sont sécants selon une droite. Pour en obtenir une représentation paramétrique, on résout le système formé par les deux équations en prenant une inconnue comme paramètre.\nExemple : $\\mathcal{P}_1 : x + y + z - 3 = 0$ et $\\mathcal{P}_2 : x - y + 2z - 1 = 0$. En posant $z = t$ : $x + y = 3 - t$ et $x - y = 1 - 2t$, d'où $x = 2 - \\frac{3}{2}t$ et $y = 1 + \\frac{1}{2}t$. La droite d'intersection passe par $(2 ; 1 ; 0)$ et est dirigée par $(-3 ; 1 ; 2)$, vecteur orthogonal aux deux vecteurs normaux $(1 ; 1 ; 1)$ et $(1 ; -1 ; 2)$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Trouver l'équation cartésienne d'un plan défini par trois points",
        "example": "Déterminer l'équation cartésienne du plan $(ABC)$ avec $A(1;0;0)$, $B(0;2;0)$ et $C(0;0;3)$.",
        "steps": [
          "**Étape 1 (Vecteurs directeurs)** : $\\overrightarrow{AB}(-1; 2; 0)$ et $\\overrightarrow{AC}(-1; 0; 3)$. Ils ne sont pas colinéaires.",
          "**Étape 2 (Vecteur normal $\\vec{n}(a;b;c)$)** : $\\vec{n} \\cdot \\overrightarrow{AB} = -a + 2b = 0 \\implies a = 2b$. $\\vec{n} \\cdot \\overrightarrow{AC} = -a + 3c = 0 \\implies a = 3c$. En choisissant $a = 6$, on obtient $b = 3$ et $c = 2$. Donc $\\vec{n}(6 ; 3 ; 2)$ est normal.",
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
      },
      {
        "title": "Méthode : Déterminer le projeté orthogonal d'un point sur une droite",
        "example": "Soit $d$ la droite passant par $A(1 ; 0 ; 2)$ et de vecteur directeur $\\vec{u}(1 ; 1 ; 0)$, et $M(3 ; 4 ; -1)$. Déterminer le projeté orthogonal $H$ de $M$ sur $d$ et la distance de $M$ à $d$.",
        "steps": [
          "**Étape 1 (Paramétrage)** : $H \\in d$, donc $H(1 + t ; t ; 2)$ pour un réel $t$, et $\\overrightarrow{MH}(t - 2 ; t - 4 ; 3)$.",
          "**Étape 2 (Orthogonalité)** : $\\overrightarrow{MH} \\cdot \\vec{u} = 0 \\iff (t - 2) + (t - 4) + 0 = 0 \\iff 2t - 6 = 0 \\iff t = 3$.",
          "**Étape 3 (Coordonnées)** : $H(4 ; 3 ; 2)$ et $\\overrightarrow{MH}(1 ; -1 ; 3)$.",
          "**Conclusion** : $MH = \\sqrt{1 + 1 + 9} = \\sqrt{11}$ : la distance de $M$ à la droite $d$ est $\\sqrt{11} \\approx 3{,}32$."
        ]
      },
      {
        "title": "Méthode : Déterminer le plan médiateur d'un segment",
        "example": "Soient $A(1 ; 0 ; 3)$ et $B(3 ; 4 ; -1)$ dans un repère orthonormé. Déterminer une équation cartésienne du plan médiateur $\\mathcal{P}$ de $[AB]$.",
        "steps": [
          "**Étape 1 (Milieu)** : le milieu de $[AB]$ est $I(2 ; 2 ; 1)$.",
          "**Étape 2 (Vecteur normal)** : $\\overrightarrow{AB}(2 ; 4 ; -4)$ est normal à $\\mathcal{P}$, ainsi que le vecteur colinéaire $\\vec{n}(1 ; 2 ; -2)$. Une équation de $\\mathcal{P}$ est donc de la forme $x + 2y - 2z + d = 0$.",
          "**Étape 3 (Constante d)** : $I \\in \\mathcal{P}$ donne $2 + 4 - 2 + d = 0$, soit $d = -4$.",
          "**Conclusion** : $\\mathcal{P} : x + 2y - 2z - 4 = 0$. Vérification avec $MA^2 = MB^2$ : $(x - 1)^2 + y^2 + (z - 3)^2 = (x - 3)^2 + (y - 4)^2 + (z + 1)^2$ se réduit à $4x + 8y - 8z - 16 = 0$, c'est-à-dire la même équation."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans l'espace, une équation $ax + by + c = 0$ ne représente pas une droite mais un **plan** parallèle à l'axe $(Oz)$ !",
      "⚠️ Une droite dans l'espace n'a pas une seule équation cartésienne, mais un système paramétrique de 3 équations à 1 paramètre.",
      "⚠️ La formule $xx' + yy' + zz'$ n'est valable que dans un repère **orthonormé**.",
      "⚠️ Un plan a une infinité de vecteurs normaux et d'équations cartésiennes : $6x + 3y + 2z - 6 = 0$ et $12x + 6y + 4z - 12 = 0$ désignent le même plan.",
      "⚠️ Un vecteur orthogonal à **un seul** vecteur directeur du plan n'est pas forcément normal : il doit être orthogonal à **deux** vecteurs non colinéaires du plan.",
      "⚠️ Deux droites **orthogonales** de l'espace ne sont pas forcément sécantes : **perpendiculaires** signifie orthogonales et sécantes."
    ],
    "flashcards": [
      {
        "q": "Quel est un vecteur normal au plan d'équation $2x - 3y + 5z - 8 = 0$ ?",
        "a": "$\\vec{n}\\begin{pmatrix} 2 \\\\ -3 \\\\ 5 \\end{pmatrix}$."
      },
      {
        "q": "Comment montre-t-on que deux plans de l'espace sont perpendiculaires ?",
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
      },
      {
        "q": "Pourquoi le projeté orthogonal $H$ de $M$ sur un plan est-il le point du plan le plus proche de $M$ ?",
        "a": "Pour tout point $N$ du plan, $\\overrightarrow{MH} \\cdot \\overrightarrow{HN} = 0$, donc $MN^2 = MH^2 + HN^2 \\ge MH^2$."
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
      "Calculer des probabilités cumulées et déterminer un seuil ou un intervalle pour une loi binomiale.",
      "Modéliser une succession d'épreuves indépendantes et démontrer l'expression de $P(X = k)$."
    ],
    "keyPoints": [
      {
        "title": "1. Succession d'épreuves indépendantes",
        "content": "• Une succession de $n$ épreuves **indépendantes** se représente par un arbre ou par un produit cartésien : une issue est une liste $(x_1 ; x_2 ; \\dots ; x_n)$.\n• **Modèle** : la probabilité d'une issue $(x_1 ; \\dots ; x_n)$ est le **produit** des probabilités des issues $x_1$, …, $x_n$ de chaque épreuve.\n• Exemple : on lance une pièce équilibrée puis un dé équilibré : $P\\big((\\text{Pile} ; 6)\\big) = \\frac{1}{2} \\times \\frac{1}{6} = \\frac{1}{12}$.\n• Une **épreuve de Bernoulli** de paramètre $p$ est une épreuve à deux issues : le succès, de probabilité $p$, et l'échec, de probabilité $1 - p$. Un **schéma de Bernoulli** de paramètres $n$ et $p$ est la succession de $n$ épreuves de Bernoulli identiques et indépendantes.\n• Pour un **schéma de Bernoulli**, l'univers est l'ensemble $\\{0 ; 1\\}^n$ des listes de $n$ chiffres ($1$ pour un succès, $0$ pour un échec)."
      },
      {
        "title": "2. Coefficients binomiaux",
        "content": "• $\\binom{n}{k}$ (« $k$ parmi $n$ ») est le nombre de chemins de l'arbre d'un schéma de Bernoulli à $n$ épreuves qui réalisent **exactement $k$ succès** ; c'est aussi le nombre de parties à $k$ éléments d'un ensemble à $n$ éléments.\n• Formule : $\\binom{n}{k} = \\dfrac{n!}{k!\\,(n-k)!}$ où $n! = 1 \\times 2 \\times \\dots \\times n$ et $0! = 1$.\n• $\\binom{n}{0} = \\binom{n}{n} = 1$, $\\binom{n}{1} = n$, et **symétrie** : $\\binom{n}{k} = \\binom{n}{n-k}$.\n• **Relation de Pascal** : $\\binom{n}{k} + \\binom{n}{k+1} = \\binom{n+1}{k+1}$, qui permet de construire le triangle de Pascal."
      },
      {
        "title": "3. Loi binomiale $\\mathcal{B}(n, p)$",
        "content": "Soit $X$ la variable aléatoire égale au nombre de succès dans un schéma de Bernoulli à $n$ épreuves indépendantes de probabilité de succès $p$ :\n• $X$ suit la **loi binomiale** de paramètres $n$ et $p$, notée $X \\sim \\mathcal{B}(n, p)$.\n• Pour tout entier $k \\in \\{0, 1, \\dots, n\\}$ :\n$$P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$$\n• **Espérance mathématique** : $E(X) = np$.\n• **Variance** : $V(X) = np(1-p)$ et **écart-type** : $\\sigma(X) = \\sqrt{np(1-p)}$."
      },
      {
        "title": "4. Loi binomiale et variables de Bernoulli",
        "content": "• Une variable de **Bernoulli** de paramètre $p$ prend la valeur $1$ (succès) avec probabilité $p$ et $0$ sinon : $E = p$ et $V = p(1 - p)$.\n• Si $X_1, \\dots, X_n$ sont des variables de Bernoulli de paramètre $p$ **indépendantes**, alors $X = X_1 + \\dots + X_n$ compte les succès : $X \\sim \\mathcal{B}(n, p)$.\n• On en déduit (voir TS2) : $E(X) = np$ (linéarité) et $V(X) = np(1 - p)$ (indépendance).\n• Exemple : pour $X \\sim \\mathcal{B}(50 ; 0{,}2)$, $E(X) = 10$ et $V(X) = 50 \\times 0{,}2 \\times 0{,}8 = 8$."
      },
      {
        "title": "5. Probabilités cumulées et calculs pratiques",
        "content": "• $P(X \\le k) = \\sum_{i=0}^{k} P(X = i)$ s'obtient à la calculatrice (fonction « binomiale cumulée » / « binomFRép »).\n• $P(X \\ge k) = 1 - P(X \\le k - 1)$ et $P(a \\le X \\le b) = P(X \\le b) - P(X \\le a - 1)$.\n• En Python :\n```python\nfrom math import comb\ndef binom(n, p, k):\n    return comb(n, k) * p**k * (1 - p)**(n - k)\ndef cumul(n, p, k):\n    return sum(binom(n, p, i) for i in range(k + 1))\n```"
      },
      {
        "title": "6. Démonstration : expression de la probabilité de $k$ succès",
        "content": "Soit un schéma de Bernoulli de paramètres $n$ et $p$, $X$ le nombre de succès et $k \\in \\{0, \\dots, n\\}$.\n• Une issue réalisant $\\{X = k\\}$ est une liste de $n$ résultats comportant exactement $k$ succès et $n - k$ échecs. Par indépendance, sa probabilité est le produit $p^k(1 - p)^{n-k}$, **la même pour toutes ces issues**.\n• Une telle issue est entièrement déterminée par l'ensemble des $k$ rangs (parmi $n$) où ont lieu les succès : il y en a donc $\\binom{n}{k}$ (nombre de parties à $k$ éléments d'un ensemble à $n$ éléments, chapitre TS3 ; ordre conseillé : étudier TS3 avant ce chapitre).\n• Ces issues étant deux à deux incompatibles, on additionne leurs probabilités :\n$$P(X = k) = \\binom{n}{k}p^k(1 - p)^{n-k}$$"
      },
      {
        "title": "7. Algorithmes : planche de Galton et surréservation",
        "content": "• **Planche de Galton** : une bille rencontre $n$ rangées de clous et part à droite avec la probabilité $\\frac{1}{2}$ à chaque clou ; le numéro de sa case d'arrivée (nombre de déplacements à droite) suit $\\mathcal{B}\\left(n ; \\frac{1}{2}\\right)$.\n```python\nfrom random import random\n\ndef galton(n, nb_billes):\n    cases = [0] * (n + 1)\n    for b in range(nb_billes):\n        droite = 0\n        for i in range(n):\n            if random() < 0.5:\n                droite = droite + 1\n        cases[droite] = cases[droite] + 1\n    return cases\n```\n• **Surréservation** : pour $X \\sim \\mathcal{B}(n, p)$ et $\\alpha > 0$, on cherche le plus petit entier $k$ tel que $P(X > k) \\le \\alpha$.\n```python\nfrom math import comb\n\ndef seuil(n, p, alpha):\n    k = 0\n    cumul = (1 - p)**n          # P(X <= 0)\n    while 1 - cumul > alpha:    # P(X > k) = 1 - P(X <= k)\n        k = k + 1\n        cumul = cumul + comb(n, k) * p**k * (1 - p)**(n - k)\n    return k\n```\nExemple : une compagnie vend $318$ billets pour un avion de $300$ places ; chaque passager se présente indépendamment avec la probabilité $0{,}92$. `seuil(318, 0.92, 0.05)` renvoie $300$ : la probabilité que plus de $300$ passagers se présentent est inférieure ou égale à $5\\,\\%$. Avec $320$ billets, le seuil passe à $302$."
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
      },
      {
        "title": "Méthode : Déterminer un intervalle $[a ; b]$ de probabilité au moins $1 - \\alpha$",
        "example": "Avec $X \\sim \\mathcal{B}(20 ; 0{,}3)$ et $\\alpha = 0{,}05$, déterminer un intervalle $[a ; b]$ tel que $P(a \\le X \\le b) \\ge 0{,}95$, en laissant au plus $\\frac{\\alpha}{2} = 0{,}025$ de probabilité de chaque côté.",
        "steps": [
          "**Étape 1 (Seuils)** : on prend pour $a$ le plus petit entier tel que $P(X \\le a) > 0{,}025$ et pour $b$ le plus petit entier tel que $P(X \\le b) \\ge 0{,}975$.",
          "**Étape 2 (Lecture du tableau)** : $P(X \\le 1) \\approx 0{,}0076 \\le 0{,}025 < P(X \\le 2) \\approx 0{,}0355$, donc $a = 2$ ; $P(X \\le 9) \\approx 0{,}9520 < 0{,}975 \\le P(X \\le 10) \\approx 0{,}9829$, donc $b = 10$.",
          "**Étape 3 (Justification)** : on a $P(X < a) \\le 0{,}025$ et $P(X > b) \\le 0{,}025$, donc $P(a \\le X \\le b) \\ge 1 - 0{,}05$. Ici, $P(2 \\le X \\le 10) = P(X \\le 10) - P(X \\le 1) \\approx 0{,}975$.",
          "**Conclusion** : $I = [2 ; 10]$ convient, et $P(X \\notin I) \\le 0{,}05$. Un tel intervalle n'est pas unique : la méthode précédente donne aussi $P(X \\in [0 ; 9]) \\ge 0{,}95$, mais avec toute la probabilité restante du même côté."
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
      },
      {
        "q": "Pourquoi y a-t-il $\\binom{n}{k}$ issues réalisant exactement $k$ succès dans un schéma de Bernoulli ?",
        "a": "Une telle issue est déterminée par le choix des $k$ rangs des succès parmi les $n$ rangs."
      }
    ]
  },
  "TX1": {
    "title": "TX1 : Nombres complexes : forme algébrique et équations du second degré",
    "domain": "Mathématiques Expertes",
    "objectives": [
      "Connaître l'ensemble $\\mathbb{C}$, l'unité imaginaire $i$ telle que $i^2 = -1$, la forme algébrique $z = a + ib$ ($a, b \\in \\mathbb{R}$).",
      "Définir le conjugué $\\bar{z} = a - ib$ et utiliser $z\\bar{z} = a^2 + b^2$ pour calculer l'inverse et les quotients.",
      "Associer à un complexe un point du plan (affixe), calculer un module et l'interpréter comme une distance.",
      "Résoudre dans $\\mathbb{C}$ les équations du second degré à coefficients réels lorsque $\\Delta < 0$ ($z_{1,2} = \\frac{-b \\pm i\\sqrt{|\\Delta|}}{2a}$).",
      "Utiliser les propriétés du conjugué et résoudre des équations faisant intervenir $z$ et $\\bar{z}$.",
      "Factoriser un polynôme par $z - a$ lorsque $a$ est racine, et utiliser la formule du binôme de Newton.",
      "Démontrer les propriétés du conjugué, la formule du binôme et la factorisation d'un polynôme par $z - a$."
    ],
    "keyPoints": [
      {
        "title": "1. Forme algébrique, conjugué, affixe et module",
        "content": "Tout nombre complexe $z$ s'écrit de manière unique sous forme algébrique :\n$$z = a + ib \\quad (a = \\text{Re}(z), b = \\text{Im}(z) \\in \\mathbb{R})$$\n• Le **conjugué** de $z$ est $\\bar{z} = a - ib$.\n• Propriété clé : $z \\bar{z} = (a+ib)(a-ib) = a^2 + b^2 \\in \\mathbb{R}_+$.\n• Quotient : $\\frac{1}{a+ib} = \\frac{a - ib}{a^2 + b^2}$.\n• **Image et affixe** : le plan muni d'un repère orthonormé $(O ; \\vec{u}, \\vec{v})$ est appelé **plan complexe**. Au complexe $z = a + ib$, on associe le point $M(a ; b)$, appelé **image** de $z$ ; réciproquement, $z$ est l'**affixe** du point $M$, notée $z_M$. De même, un vecteur $\\vec{w}$ de coordonnées $(a ; b)$ a pour **affixe** $a + ib$ ; si $A$ et $B$ ont pour affixes $z_A$ et $z_B$, le vecteur $\\overrightarrow{AB}$ a pour affixe $z_B - z_A$. L'image de $\\bar{z}$ est le symétrique de $M$ par rapport à l'axe des abscisses (section 3).\n• **Module** : $|z| = \\sqrt{a^2 + b^2}$ ; c'est la distance $OM$, et $z\\bar{z} = |z|^2$.\n• **Distance** : si $A$ et $B$ ont pour affixes $z_A$ et $z_B$, alors $AB = |z_B - z_A|$. Ainsi, pour $A \\neq B$, l'ensemble des points $M$ d'affixe $z$ tels que $|z - z_A| = |z - z_B|$ est la médiatrice de $[AB]$, puisque $|z - z_A| = AM$ et $|z - z_B| = BM$. Le chapitre TX2 approfondit cette interprétation géométrique (argument, forme exponentielle)."
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
      },
      {
        "title": "6. Démonstrations : conjugué d'un produit, d'un inverse, d'une puissance",
        "content": "Soient $z = a + ib$ et $z' = a' + ib'$ deux complexes sous forme algébrique.\n• **Produit** : $zz' = (aa' - bb') + i(ab' + a'b)$, donc $\\overline{zz'} = (aa' - bb') - i(ab' + a'b)$. Par ailleurs, $\\bar{z}\\,\\bar{z'} = (a - ib)(a' - ib') = (aa' - bb') - i(ab' + a'b)$. Donc $\\overline{zz'} = \\bar{z}\\,\\bar{z'}$.\n• **Inverse** ($z \\ne 0$) : $z \\times \\dfrac{1}{z} = 1$, donc d'après le point précédent $\\bar{z} \\times \\overline{\\left(\\dfrac{1}{z}\\right)} = \\bar{1} = 1$, d'où $\\overline{\\left(\\dfrac{1}{z}\\right)} = \\dfrac{1}{\\bar{z}}$.\n• **Puissance** : par récurrence sur $n \\in \\mathbb{N}$. On a $\\overline{z^0} = 1 = \\bar{z}^0$. Si $\\overline{z^k} = \\bar{z}^k$, alors $\\overline{z^{k+1}} = \\overline{z^k \\times z} = \\overline{z^k} \\times \\bar{z} = \\bar{z}^k \\times \\bar{z} = \\bar{z}^{k+1}$."
      },
      {
        "title": "7. Démonstration : formule du binôme (par récurrence)",
        "content": "On note $P(n)$ : « pour tous complexes $a$ et $b$, $(a + b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^k b^{n-k}$ ».\n• **Initialisation** : $(a + b)^0 = 1$ et $\\binom{0}{0}a^0b^0 = 1$.\n• **Hérédité** : supposons $P(n)$ vraie. Alors\n$$(a + b)^{n+1} = (a + b)\\sum_{k=0}^{n} \\binom{n}{k} a^k b^{n-k} = \\sum_{k=0}^{n} \\binom{n}{k} a^{k+1} b^{n-k} + \\sum_{k=0}^{n} \\binom{n}{k} a^k b^{n+1-k}$$\nOn regroupe les termes en $a^j b^{n+1-j}$ : pour $1 \\le j \\le n$, le coefficient obtenu est $\\binom{n}{j-1} + \\binom{n}{j} = \\binom{n+1}{j}$ (relation de Pascal) ; les termes extrêmes $a^{n+1}$ et $b^{n+1}$ ont pour coefficient $1 = \\binom{n+1}{n+1} = \\binom{n+1}{0}$. Donc $(a + b)^{n+1} = \\sum_{j=0}^{n+1} \\binom{n+1}{j} a^j b^{n+1-j}$ : $P(n+1)$ est vraie.\n• **Conclusion** : la formule est vraie pour tout $n \\in \\mathbb{N}$."
      },
      {
        "title": "8. Démonstrations : factorisation par $z - a$ et nombre de racines",
        "content": "• **Factorisation de $z^n - a^n$** : en développant,\n$$(z - a)(z^{n-1} + az^{n-2} + \\dots + a^{n-1}) = (z^n + az^{n-1} + \\dots + a^{n-1}z) - (az^{n-1} + \\dots + a^{n-1}z + a^n) = z^n - a^n$$\ncar tous les termes intermédiaires se simplifient.\n• **Factorisation de $P$ si $P(a) = 0$** : soit $P(z) = c_nz^n + \\dots + c_1z + c_0$. Alors $P(z) = P(z) - P(a) = c_n(z^n - a^n) + \\dots + c_1(z - a)$. Chaque $z^k - a^k$ se factorise par $z - a$, donc $P(z) = (z - a)Q(z)$, où $Q$ est un polynôme de degré $n - 1$ (de coefficient dominant $c_n$).\n• **Au plus $n$ racines** : par récurrence sur le degré $n \\ge 1$. Un polynôme de degré $1$, $c_1z + c_0$ avec $c_1 \\ne 0$, a une seule racine. Supposons le résultat vrai au degré $n$ et soit $P$ de degré $n + 1$. Si $P$ n'a pas de racine, c'est terminé ; sinon, soit $a$ une racine : $P(z) = (z - a)Q(z)$ avec $Q$ de degré $n$. Si $P(b) = 0$, alors $(b - a)Q(b) = 0$, donc $b = a$ ou $Q(b) = 0$ (un produit de complexes est nul si et seulement si l'un des facteurs l'est). Comme $Q$ a au plus $n$ racines, $P$ en a au plus $n + 1$."
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
      },
      {
        "q": "Comment démontre-t-on que $\\overline{z^n} = \\bar{z}^n$ ?",
        "a": "Par récurrence sur $n$, en utilisant $\\overline{zz'} = \\bar{z}\\,\\bar{z'}$ : $\\overline{z^{k+1}} = \\overline{z^k}\\,\\bar{z} = \\bar{z}^{k+1}$."
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
      "Déterminer la limite d'une suite récurrente convergente à l'aide d'un point fixe.",
      "Connaître et rédiger les démonstrations du programme : suite croissante non majorée, théorème de comparaison, limite de $(q^n)$."
    ],
    "keyPoints": [
      {
        "title": "1. Définitions de la limite d'une suite",
        "content": "• $(u_n)$ **converge** vers le réel $\\ell$ si tout intervalle ouvert contenant $\\ell$ contient tous les termes $u_n$ **à partir d'un certain rang**. On note $\\lim\\limits_{n \\to +\\infty} u_n = \\ell$. Cette limite, si elle existe, est **unique**.\n• $(u_n)$ **tend vers $+\\infty$** si tout intervalle $]A ; +\\infty[$ contient tous les termes à partir d'un certain rang.\n• $(u_n)$ **tend vers $-\\infty$** si tout intervalle $]-\\infty ; A[$ contient tous les termes à partir d'un certain rang.\n• Une suite qui ne converge pas est dite **divergente** : soit elle tend vers $\\pm\\infty$, soit elle n'a pas de limite (comme $(-1)^n$).\n• **Propriété** : une suite croissante non majorée tend vers $+\\infty$ ; une suite décroissante non minorée tend vers $-\\infty$."
      },
      {
        "title": "2. Opérations sur les limites et formes indéterminées",
        "content": "• **Limites usuelles** : pour tout entier $k \\ge 1$, $\\lim\\limits_{n \\to +\\infty} n^k = +\\infty$ et $\\lim\\limits_{n \\to +\\infty} \\sqrt{n} = +\\infty$ ; $\\lim\\limits_{n \\to +\\infty} \\dfrac{1}{n^k} = 0$ et $\\lim\\limits_{n \\to +\\infty} \\dfrac{1}{\\sqrt{n}} = 0$.\n• **Opérations sur les limites (propriétés admises)** : dans les tableaux, $\\ell$ et $\\ell'$ sont des réels, $\\infty$ désigne $+\\infty$ ou $-\\infty$ et le signe du résultat suit la règle des signes. « F.I. » signale une **forme indéterminée** : les opérations ne permettent pas de conclure directement.\n\n**Somme**\n\n| $\\lim u_n$ | $\\ell$ | $\\ell$ | $\\ell$ | $+\\infty$ | $-\\infty$ | $+\\infty$ |\n|---|---|---|---|---|---|---|\n| $\\lim v_n$ | $\\ell'$ | $+\\infty$ | $-\\infty$ | $+\\infty$ | $-\\infty$ | $-\\infty$ |\n| $\\lim (u_n + v_n)$ | $\\ell + \\ell'$ | $+\\infty$ | $-\\infty$ | $+\\infty$ | $-\\infty$ | F.I. |\n\n**Produit**\n\n| $\\lim u_n$ | $\\ell$ | $\\ell \\neq 0$ | $\\infty$ | $0$ |\n|---|---|---|---|---|\n| $\\lim v_n$ | $\\ell'$ | $\\infty$ | $\\infty$ | $\\infty$ |\n| $\\lim (u_n v_n)$ | $\\ell \\ell'$ | $\\infty$ | $\\infty$ | F.I. |\n\n**Quotient**\n\n| $\\lim u_n$ | $\\ell$ | $\\ell$ | $\\ell \\neq 0$ ou $\\infty$ | $\\infty$ | $0$ | $\\infty$ |\n|---|---|---|---|---|---|---|\n| $\\lim v_n$ | $\\ell' \\neq 0$ | $\\infty$ | $0$, avec $v_n$ de signe constant | $\\ell' \\neq 0$ | $0$ | $\\infty$ |\n| $\\lim \\dfrac{u_n}{v_n}$ | $\\dfrac{\\ell}{\\ell'}$ | $0$ | $\\infty$ | $\\infty$ | F.I. | F.I. |\n\n• **Exemples** : $\\lim\\limits_{n \\to +\\infty} \\left(n^2 + \\dfrac{3}{n}\\right) = +\\infty$ par somme ($+\\infty$ et $0$) ; $\\lim\\limits_{n \\to +\\infty} (2 - n)\\sqrt{n} = -\\infty$ par produit ($-\\infty$ et $+\\infty$) ; $\\lim\\limits_{n \\to +\\infty} \\dfrac{5}{1 + n^2} = 0$ par quotient ($5$ et $+\\infty$).\n• Les 4 formes indéterminées fondamentales sont : $\\frac{\\infty}{\\infty}$, $\\frac{0}{0}$, $\\infty - \\infty$ et $0 \\times \\infty$. Pour les lever, on transforme l'écriture, par exemple en factorisant par le terme prépondérant (voir les méthodes).\n• Règle du monôme de plus haut degré : la limite en $+\\infty$ d'un quotient de polynômes en $n$ est égale à la limite du quotient de leurs monômes de plus haut degré.\n• Ces règles restent valables pour les limites de fonctions (chapitre TA3)."
      },
      {
        "title": "3. Théorèmes de comparaison et passage à la limite",
        "content": "• **Comparaison (limites infinies)** : si $u_n \\le v_n$ à partir d'un certain rang et $\\lim u_n = +\\infty$, alors $\\lim v_n = +\\infty$. De même, si $u_n \\le v_n$ et $\\lim v_n = -\\infty$, alors $\\lim u_n = -\\infty$.\n• **Passage à la limite** : si $u_n \\le v_n$ à partir d'un certain rang, et si $(u_n)$ et $(v_n)$ convergent vers $\\ell$ et $\\ell'$, alors $\\ell \\le \\ell'$.\n• En particulier, si $(u_n)$ converge vers $\\ell$ et si $u_n \\le M$ pour tout $n$, alors $\\ell \\le M$."
      },
      {
        "title": "4. Théorèmes des gendarmes et de convergence monotone",
        "content": "• **Théorème des gendarmes** : Si pour tout $n \\ge n_0$, $v_n \\le u_n \\le w_n$ et si $\\lim v_n = \\lim w_n = \\ell$, alors $(u_n)$ converge et $\\lim u_n = \\ell$.\n• **Convergence monotone (théorème admis)** : si $(u_n)$ est croissante et majorée par un réel $M$, c'est-à-dire si $u_n \\le M$ pour tout $n$, alors $(u_n)$ converge vers un réel $\\ell$ et $\\ell \\le M$. De même, si $(u_n)$ est décroissante et minorée par un réel $m$, alors elle converge vers un réel $\\ell \\ge m$."
      },
      {
        "title": "5. Limite d'une suite géométrique $(q^n)$",
        "content": "• Si $q > 1$ : $\\lim\\limits_{n \\to +\\infty} q^n = +\\infty$ (démonstration par l'inégalité de Bernoulli).\n• Si $q = 1$ : $q^n = 1$ pour tout $n$, la limite est $1$.\n• Si $-1 < q < 1$ : $\\lim\\limits_{n \\to +\\infty} q^n = 0$.\n• Si $q \\le -1$ : la suite $(q^n)$ n'a **pas de limite**.\nExemple : $u_n = \\dfrac{3^n - 2^n}{3^n + 1} = \\dfrac{1 - \\left(\\frac{2}{3}\\right)^n}{1 + \\left(\\frac{1}{3}\\right)^n}$ en divisant par $3^n$. Comme $\\left(\\frac{2}{3}\\right)^n \\to 0$ et $\\left(\\frac{1}{3}\\right)^n \\to 0$, $\\lim u_n = 1$."
      },
      {
        "title": "6. Suites récurrentes et point fixe",
        "content": "Soit $(u_n)$ définie par $u_{n+1} = f(u_n)$. Si $(u_n)$ **converge** vers $\\ell$ et si $f$ est **continue** en $\\ell$ (la continuité est étudiée au chapitre TA3 ; les fonctions usuelles sont continues sur leur ensemble de définition), alors $\\ell$ vérifie :\n$$f(\\ell) = \\ell$$\nOn dit que $\\ell$ est un **point fixe** de $f$. On résout donc l'équation $f(x) = x$, puis on sélectionne la bonne solution grâce aux informations connues sur la suite (signe, bornes, monotonie)."
      },
      {
        "title": "7. Démonstration : une suite croissante non majorée tend vers $+\\infty$",
        "content": "**Logique** : « $(u_n)$ est majorée » signifie « il existe un réel $M$ tel que, pour tout $n$, $u_n \\le M$ ». Sa négation, « $(u_n)$ n'est pas majorée », s'écrit en échangeant les quantificateurs et en niant l'inégalité : « pour tout réel $M$, il existe un rang $n$ tel que $u_n > M$ » (voir chapitre TA1, point 6).\n\nSoit $(u_n)$ une suite croissante et non majorée, et $A$ un réel quelconque.\n• Comme $(u_n)$ n'est pas majorée, $A$ n'est pas un majorant de la suite : il existe un rang $N$ tel que $u_N > A$.\n• Comme $(u_n)$ est croissante, pour tout $n \\ge N$, $u_n \\ge u_N > A$.\n• Ainsi, l'intervalle $]A ; +\\infty[$ contient tous les termes $u_n$ à partir du rang $N$. Ceci étant vrai pour tout réel $A$, on a par définition $\\lim\\limits_{n \\to +\\infty} u_n = +\\infty$."
      },
      {
        "title": "8. Démonstration : théorème de comparaison (limite infinie)",
        "content": "**Énoncé** : si $u_n \\le v_n$ à partir d'un rang $n_0$ et si $\\lim u_n = +\\infty$, alors $\\lim v_n = +\\infty$.\n• Soit $A$ un réel. Comme $\\lim u_n = +\\infty$, l'intervalle $]A ; +\\infty[$ contient tous les termes $u_n$ à partir d'un certain rang $n_1$.\n• Pour tout $n \\ge \\max(n_0 ; n_1)$, on a $v_n \\ge u_n > A$ : l'intervalle $]A ; +\\infty[$ contient aussi tous les termes $v_n$ à partir de ce rang.\n• Ceci étant vrai pour tout réel $A$, $\\lim v_n = +\\infty$."
      },
      {
        "title": "9. Démonstration : limite de la suite $(q^n)$",
        "content": "• **Cas $q > 1$** : on pose $a = q - 1 > 0$. D'après l'inégalité de Bernoulli (démontrée par récurrence au chapitre TA1), $q^n = (1 + a)^n \\ge 1 + na$ pour tout $n \\in \\mathbb{N}$. Comme $a > 0$, $\\lim\\limits_{n \\to +\\infty} (1 + na) = +\\infty$ ; par comparaison, $\\lim\\limits_{n \\to +\\infty} q^n = +\\infty$.\n• **Cas $0 < |q| < 1$** : on pose $Q = \\dfrac{1}{|q|} > 1$. D'après le cas précédent, $Q^n \\to +\\infty$, donc $|q|^n = \\dfrac{1}{Q^n} \\to 0$. Comme $-|q|^n \\le q^n \\le |q|^n$, le théorème des gendarmes donne $\\lim\\limits_{n \\to +\\infty} q^n = 0$. (Si $q = 0$, la suite est nulle à partir du rang $1$.)\n• **Cas $q \\le -1$** : les termes de rang pair $q^{2n} = (q^2)^n$ sont $\\ge 1$ et ceux de rang impair sont $\\le -1$. La suite ne peut ni converger (sa limite serait à la fois $\\ge 1$ et $\\le -1$), ni tendre vers $+\\infty$ ou $-\\infty$ (ses termes changent de signe) : elle n'a pas de limite."
      },
      {
        "title": "10. Algorithme : valeur approchée de $\\sqrt{2}$",
        "content": "Le programme cherche le plus grand entier $k$ tel que $k^2 \\le 2 \\times 10^{2p}$, ce qui donne l'encadrement $\\dfrac{k}{10^p} \\le \\sqrt{2} < \\dfrac{k+1}{10^p}$ (calcul exact sur des entiers, sans erreur d'arrondi) :\n```python\ndef encadrement_racine2(p):\n    k = 1\n    while (k + 1)**2 <= 2 * 10**(2*p):\n        k = k + 1\n    return k / 10**p, (k + 1) / 10**p\n\nprint(encadrement_racine2(3))   # (1.414, 1.415)\n```\nLe même principe (algorithme de seuil ou de balayage) permet d'approcher d'autres nombres comme $\\ln(2)$ ou la limite d'une suite convergente."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Factoriser par le terme prépondérant",
        "example": "Calculer la limite de $u_n = \\frac{5n^2 - 3n + 2}{2n^2 + 7}$.",
        "steps": [
          "**Étape 1** : On factorise le numérateur et le dénominateur par $n^2$ :\n$$u_n = \\frac{n^2(5 - 3/n + 2/n^2)}{n^2(2 + 7/n^2)} = \\frac{5 - 3/n + 2/n^2}{2 + 7/n^2}$$",
          "**Étape 2** : Comme $\\lim \\frac{1}{n} = \\lim \\frac{1}{n^2} = 0$, le numérateur tend vers 5 et le dénominateur vers 2.",
          "**Conclusion** : $\\lim\\limits_{n \\to +\\infty} u_n = \\frac{5}{2}$."
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
        "title": "Méthode : Limite de la somme des termes d'une suite géométrique",
        "example": "Pour $0 < q < 1$, déterminer la limite de $1 + q + q^2 + \\dots + q^n$. Application : déterminer la limite de $S_n = 2 + 2 \\times 0{,}6 + 2 \\times 0{,}6^2 + \\dots + 2 \\times 0{,}6^n$.",
        "steps": [
          "**Étape 1 (Formule de la somme, chapitre 1A6)** : comme $q \\neq 1$, $1 + q + \\dots + q^n = \\dfrac{1 - q^{n+1}}{1 - q}$.",
          "**Étape 2 (Limite de $q^{n+1}$)** : comme $0 < q < 1$, $\\lim\\limits_{n \\to +\\infty} q^{n+1} = 0$ (point 5).",
          "**Étape 3 (Opérations sur les limites)** : par somme, $1 - q^{n+1}$ tend vers $1$ ; le dénominateur $1 - q$ est une constante non nulle, donc $\\lim\\limits_{n \\to +\\infty} (1 + q + \\dots + q^n) = \\dfrac{1}{1 - q}$.",
          "**Étape 4 (Application)** : $S_n = 2(1 + 0{,}6 + \\dots + 0{,}6^n) = 2 \\times \\dfrac{1 - 0{,}6^{n+1}}{1 - 0{,}6} = 5\\left(1 - 0{,}6^{n+1}\\right)$, et comme $0 < 0{,}6 < 1$, $\\lim\\limits_{n \\to +\\infty} S_n = 5$.",
          "**Conclusion** : pour $0 < q < 1$, la somme $1 + q + \\dots + q^n$ converge vers $\\dfrac{1}{1 - q}$ (le résultat reste vrai pour $-1 < q < 0$). En revanche, si $q \\ge 1$, chaque somme est supérieure ou égale à $n + 1$, donc elle tend vers $+\\infty$."
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
      "⚠️ $(-2)^n$ ne tend pas vers $+\\infty$ : ses termes changent de signe ($1, -2, 4, -8, \\dots$), la suite n'a pas de limite.",
      "⚠️ Pour une suite récurrente, résoudre $f(\\ell) = \\ell$ ne suffit pas : il faut d'abord **prouver la convergence** (par exemple par convergence monotone). La suite $u_{n+1} = 2u_n$ avec $u_0 = 1$ a pour « point fixe » $0$, mais elle tend vers $+\\infty$."
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
      },
      {
        "q": "Comment démontre-t-on que $q^n \\to +\\infty$ lorsque $q > 1$ ?",
        "a": "On écrit $q = 1 + a$ avec $a > 0$ ; l'inégalité de Bernoulli donne $q^n \\ge 1 + na$, qui tend vers $+\\infty$, puis on conclut par comparaison."
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
      "Utiliser la convexité pour démontrer des inégalités ($e^x \\ge 1 + x$, $\\ln(x) \\le x - 1$).",
      "Démontrer que si $f'' \\ge 0$, la courbe est au-dessus de ses tangentes.",
      "Lire la convexité et les points d'inflexion sur un graphique de $f$, $f'$ ou $f''$, et esquisser l'allure d'une courbe."
    ],
    "keyPoints": [
      {
        "title": "1. Définition par les sécantes (cordes)",
        "content": "Soit $f$ définie sur un intervalle $I$. $f$ est **convexe** sur $I$ si, pour tous points $A$ et $B$ de sa courbe d'abscisses dans $I$, la portion de courbe située entre $A$ et $B$ est **en dessous** du segment $[AB]$.\nAvec des formules : pour tous $x, y \\in I$ et tout $t \\in [0 ; 1]$,\n$$f\\big(tx + (1-t)y\\big) \\le t f(x) + (1-t) f(y)$$\n$f$ est **concave** si l'inégalité est dans l'autre sens (courbe au-dessus de ses cordes).\nPour une fonction dérivable, les deux points de vue (cordes et tangentes) sont équivalents."
      },
      {
        "title": "2. Caractérisations de la convexité",
        "content": "**Prérequis** : la dérivée seconde $f''$ est définie au chapitre TA8 (point 4), que l'on peut travailler avant celui-ci.\nSoit $f$ une fonction deux fois dérivable sur un intervalle $I$ (la convexité est définie par les cordes, voir point 1 ; les équivalences ci-dessous sont admises, sauf l'implication démontrée au point 7) :\n• $f$ est **convexe** sur $I \\iff$ sa courbe $\\mathcal{C}_f$ est située **au-dessus** de toutes ses tangentes $\\iff f'$ est croissante sur $I \\iff f''(x) \\ge 0$ pour tout $x \\in I$.\n• $f$ est **concave** sur $I \\iff$ sa courbe $\\mathcal{C}_f$ est située **en dessous** de toutes ses tangentes $\\iff f'$ est décroissante sur $I \\iff f''(x) \\le 0$ pour tout $x \\in I$."
      },
      {
        "title": "3. Point d'inflexion",
        "content": "Un **point d'inflexion** est un point où la courbe traverse sa tangente.\n• Propriété : si $f$ est deux fois dérivable et si $f''$ s'annule en $a$ **en changeant de signe**, alors le point $A(a ; f(a))$ est un point d'inflexion de $\\mathcal{C}_f$ : la fonction change de convexité en $a$.\n• En pratique, on cherche les points d'inflexion parmi les réels où $f''$ s'annule, puis on vérifie le changement de signe."
      },
      {
        "title": "4. Convexité des fonctions de référence",
        "content": "• **Convexes** sur leur ensemble de définition : $x \\mapsto x^2$, $x \\mapsto e^x$, $x \\mapsto |x|$.\n• **Concaves** : $x \\mapsto \\sqrt{x}$ sur $[0 ; +\\infty[$, $x \\mapsto \\ln(x)$ sur $]0 ; +\\infty[$ (car $\\ln''(x) = -\\frac{1}{x^2} < 0$ ; la fonction $\\ln$, de dérivée $x \\mapsto \\frac{1}{x}$, est étudiée au chapitre TA5).\n• $x \\mapsto x^3$ est concave sur $]-\\infty ; 0]$ et convexe sur $[0 ; +\\infty[$ : l'origine est un point d'inflexion.\n• $x \\mapsto \\frac{1}{x}$ est concave sur $]-\\infty ; 0[$ et convexe sur $]0 ; +\\infty[$ (pas de point d'inflexion : $0$ n'est pas dans le domaine)."
      },
      {
        "title": "5. Inégalités de convexité",
        "content": "Si $f$ est convexe sur $I$, sa courbe est au-dessus de chacune de ses tangentes : pour tout $a \\in I$ et tout $x \\in I$,\n$$f(x) \\ge f'(a)(x - a) + f(a)$$\nDeux inégalités classiques à connaître :\n• $e^x \\ge 1 + x$ pour tout réel $x$ (tangente en $0$ à la courbe de l'exponentielle) ;\n• $\\ln(x) \\le x - 1$ pour tout $x > 0$ (le logarithme, étudié au chapitre TA5, est concave et $y = x - 1$ est sa tangente en $1$).\nEn un point d'inflexion, la courbe **traverse** sa tangente."
      },
      {
        "title": "6. Lire la convexité sur un graphique",
        "content": "L'information à lire dépend de la courbe donnée :\n\n| Courbe donnée | $f$ convexe | $f$ concave | Point d'inflexion |\n|---|---|---|---|\n| celle de $f$ | courbe au-dessus de ses tangentes | courbe en dessous de ses tangentes | la courbe traverse sa tangente |\n| celle de $f'$ | $f'$ croissante | $f'$ décroissante | $f'$ change de sens de variation (extremum local) |\n| celle de $f''$ | courbe au-dessus de l'axe des abscisses | courbe en dessous de l'axe des abscisses | la courbe traverse l'axe des abscisses |\n\n**Exemple** : sur $[-2 ; 2]$, $f(x) = \\frac{x^3}{3} - x$, $f'(x) = x^2 - 1$ et $f''(x) = 2x$.\n\n<div style=\"display:flex; flex-wrap:wrap; justify-content:center; align-items:flex-end; gap:0.4rem;\"><div style=\"flex:1 1 170px; max-width:230px;\"><div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.6rem auto;\"><svg class=\"geo-svg-figure\" role=\"img\" aria-label=\"Courbe de f, d'abord concave puis convexe, avec un point d'inflexion marqué à l'origine, sur l'intervalle [-2 ; 2]. Elle passe par les points (0 ; 0).\" viewBox=\"0 0 180 132\" width=\"180\" height=\"132\" style=\"max-width:330px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"18\" y1=\"114\" x2=\"18\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"42\" y1=\"114\" x2=\"42\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"66\" y1=\"114\" x2=\"66\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"90\" y1=\"114\" x2=\"90\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"114\" y1=\"114\" x2=\"114\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"138\" y1=\"114\" x2=\"138\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"162\" y1=\"114\" x2=\"162\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"114\" x2=\"162\" y2=\"114\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"90\" x2=\"162\" y2=\"90\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"66\" x2=\"162\" y2=\"66\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"42\" x2=\"162\" y2=\"42\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"18\" x2=\"162\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"66\" x2=\"172\" y2=\"66\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\"/><polygon points=\"0,0 -8,-3.5 -8,3.5\" transform=\"translate(174 66) rotate(0)\" fill=\"var(--text-main, #334155)\"/><line x1=\"90\" y1=\"114\" x2=\"90\" y2=\"8\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\"/><polygon points=\"0,0 -8,-3.5 -8,3.5\" transform=\"translate(90 6) rotate(-90)\" fill=\"var(--text-main, #334155)\"/><text x=\"18\" y=\"79\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−3</text><text x=\"42\" y=\"79\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−2</text><text x=\"66\" y=\"79\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−1</text><text x=\"114\" y=\"79\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">1</text><text x=\"138\" y=\"79\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">2</text><text x=\"162\" y=\"79\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">3</text><text x=\"85\" y=\"117.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−2</text><text x=\"85\" y=\"93.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−1</text><text x=\"85\" y=\"45.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">1</text><text x=\"85\" y=\"21.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">2</text><text x=\"84\" y=\"79\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">0</text><path d=\"M 42 82 C 44 76 46 71 48 66.88 C 50 62.75 52 59.5 54 57 C 56 54.5 58 52.75 60 51.63 C 62 50.5 64 50 66 50 C 68 50 70 50.5 72 51.38 C 74 52.25 76 53.5 78 55 C 80 56.5 82 58.25 84 60.13 C 86 62 88 64 90 66 C 92 68 94 70 96 71.88 C 98 73.75 100 75.5 102 77 C 104 78.5 106 79.75 108 80.63 C 110 81.5 112 82 114 82 C 116 82 118 81.5 120 80.38 C 122 79.25 124 77.5 126 75 C 128 72.5 130 69.25 132 65.13 C 134 61 136 56 138 50\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.2\"/><text x=\"22.800000000000004\" y=\"31.200000000000003\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #334155)\">f</text><circle cx=\"90\" cy=\"66\" r=\"3.6\" fill=\"#dc2626\"/><text x=\"99\" y=\"59\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\"></text></svg></div></div><div style=\"flex:1 1 170px; max-width:230px;\"><div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.6rem auto;\"><svg class=\"geo-svg-figure\" role=\"img\" aria-label=\"Courbe de f', décroissante puis croissante, avec son minimum marqué au point (0 ; -1), sur l'intervalle [-2 ; 2]. Elle passe par les points (-2 ; 3), (-1 ; 0), (0 ; -1), (1 ; 0), (2 ; 3).\" viewBox=\"0 0 180 180\" width=\"180\" height=\"180\" style=\"max-width:330px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"18\" y1=\"162\" x2=\"18\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"42\" y1=\"162\" x2=\"42\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"66\" y1=\"162\" x2=\"66\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"90\" y1=\"162\" x2=\"90\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"114\" y1=\"162\" x2=\"114\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"138\" y1=\"162\" x2=\"138\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"162\" y1=\"162\" x2=\"162\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"162\" x2=\"162\" y2=\"162\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"138\" x2=\"162\" y2=\"138\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"114\" x2=\"162\" y2=\"114\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"90\" x2=\"162\" y2=\"90\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"66\" x2=\"162\" y2=\"66\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"42\" x2=\"162\" y2=\"42\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"18\" x2=\"162\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"114\" x2=\"172\" y2=\"114\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\"/><polygon points=\"0,0 -8,-3.5 -8,3.5\" transform=\"translate(174 114) rotate(0)\" fill=\"var(--text-main, #334155)\"/><line x1=\"90\" y1=\"162\" x2=\"90\" y2=\"8\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\"/><polygon points=\"0,0 -8,-3.5 -8,3.5\" transform=\"translate(90 6) rotate(-90)\" fill=\"var(--text-main, #334155)\"/><text x=\"18\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−3</text><text x=\"42\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−2</text><text x=\"66\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−1</text><text x=\"114\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">1</text><text x=\"138\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">2</text><text x=\"162\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">3</text><text x=\"85\" y=\"165.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−2</text><text x=\"85\" y=\"141.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−1</text><text x=\"85\" y=\"93.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">1</text><text x=\"85\" y=\"69.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">2</text><text x=\"85\" y=\"45.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">3</text><text x=\"85\" y=\"21.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">4</text><text x=\"84\" y=\"127\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">0</text><path d=\"M 42 42 C 44 50 46 57.5 48 64.5 C 50 71.5 52 78 54 84 C 56 90 58 95.5 60 100.5 C 62 105.5 64 110 66 114 C 68 118 70 121.5 72 124.5 C 74 127.5 76 130 78 132 C 80 134 82 135.5 84 136.5 C 86 137.5 88 138 90 138 C 92 138 94 137.5 96 136.5 C 98 135.5 100 134 102 132 C 104 130 106 127.5 108 124.5 C 110 121.5 112 118 114 114 C 116 110 118 105.5 120 100.5 C 122 95.5 124 90 126 84 C 128 78 130 71.5 132 64.5 C 134 57.5 136 50 138 42\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.2\"/><text x=\"22.800000000000004\" y=\"31.199999999999996\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #334155)\">f ′</text><circle cx=\"90\" cy=\"138\" r=\"3.6\" fill=\"#dc2626\"/><text x=\"99\" y=\"131\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\"></text></svg></div></div><div style=\"flex:1 1 170px; max-width:230px;\"><div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.6rem auto;\"><svg class=\"geo-svg-figure\" role=\"img\" aria-label=\"Courbe de f'', négative puis positive, qui traverse l'axe des abscisses à l'origine, sur l'intervalle [-2 ; 2]. Elle passe par les points (-2 ; -4), (-1 ; -2), (0 ; 0), (1 ; 2), (2 ; 4).\" viewBox=\"0 0 180 276\" width=\"180\" height=\"276\" style=\"max-width:330px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"18\" y1=\"258\" x2=\"18\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"42\" y1=\"258\" x2=\"42\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"66\" y1=\"258\" x2=\"66\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"90\" y1=\"258\" x2=\"90\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"114\" y1=\"258\" x2=\"114\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"138\" y1=\"258\" x2=\"138\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"162\" y1=\"258\" x2=\"162\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"258\" x2=\"162\" y2=\"258\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"234\" x2=\"162\" y2=\"234\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"210\" x2=\"162\" y2=\"210\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"186\" x2=\"162\" y2=\"186\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"162\" x2=\"162\" y2=\"162\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"138\" x2=\"162\" y2=\"138\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"114\" x2=\"162\" y2=\"114\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"90\" x2=\"162\" y2=\"90\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"66\" x2=\"162\" y2=\"66\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"42\" x2=\"162\" y2=\"42\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"18\" x2=\"162\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"138\" x2=\"172\" y2=\"138\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\"/><polygon points=\"0,0 -8,-3.5 -8,3.5\" transform=\"translate(174 138) rotate(0)\" fill=\"var(--text-main, #334155)\"/><line x1=\"90\" y1=\"258\" x2=\"90\" y2=\"8\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\"/><polygon points=\"0,0 -8,-3.5 -8,3.5\" transform=\"translate(90 6) rotate(-90)\" fill=\"var(--text-main, #334155)\"/><text x=\"18\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−3</text><text x=\"42\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−2</text><text x=\"66\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−1</text><text x=\"114\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">1</text><text x=\"138\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">2</text><text x=\"162\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">3</text><text x=\"85\" y=\"261.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−5</text><text x=\"85\" y=\"237.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−4</text><text x=\"85\" y=\"213.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−3</text><text x=\"85\" y=\"189.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−2</text><text x=\"85\" y=\"165.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−1</text><text x=\"85\" y=\"117.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">1</text><text x=\"85\" y=\"93.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">2</text><text x=\"85\" y=\"69.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">3</text><text x=\"85\" y=\"45.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">4</text><text x=\"85\" y=\"21.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">5</text><text x=\"84\" y=\"151\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">0</text><path d=\"M 42 234 C 44 230 46 226 48 222 C 50 218 52 214 54 210 C 56 206 58 202 60 198 C 62 194 64 190 66 186 C 68 182 70 178 72 174 C 74 170 76 166 78 162 C 80 158 82 154 84 150 C 86 146 88 142 90 138 C 92 134 94 130 96 126 C 98 122 100 118 102 114 C 104 110 106 106 108 102 C 110 98 112 94 114 90 C 116 86 118 82 120 78 C 122 74 124 70 126 66 C 128 62 130 58 132 54 C 134 50 136 46 138 42\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.2\"/><text x=\"22.800000000000004\" y=\"31.199999999999996\" text-anchor=\"start\" font-size=\"12\" font-weight=\"700\" fill=\"var(--text-main, #334155)\">f ″</text><circle cx=\"90\" cy=\"138\" r=\"3.6\" fill=\"#dc2626\"/><text x=\"99\" y=\"131\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\"></text></svg></div></div></div>\n\nLes trois lectures concordent : $f$ est concave sur $[-2 ; 0]$, convexe sur $[0 ; 2]$, et le point d'abscisse $0$ est un point d'inflexion.\n• Sur la courbe de $f'$, l'abscisse $0$ est celle du **minimum** de $f'$.\n• Les abscisses où $f'$ **s'annule** (ici $-1$ et $1$) sont celles des extremums de $f$ : ce ne sont pas des points d'inflexion."
      },
      {
        "title": "7. Démonstration : si $f''$ est positive, la courbe est au-dessus de ses tangentes",
        "content": "Soit $f$ deux fois dérivable sur un intervalle $I$ avec $f''(x) \\ge 0$ pour tout $x \\in I$, et soit $a \\in I$. La tangente en $a$ a pour équation $y = f'(a)(x - a) + f(a)$.\n• On pose, pour $x \\in I$, $g(x) = f(x) - \\big[f'(a)(x - a) + f(a)\\big]$ : c'est l'écart entre la courbe et la tangente. $g$ est dérivable et $g'(x) = f'(x) - f'(a)$.\n• Comme $f'' \\ge 0$, $f'$ est croissante sur $I$ : si $x \\le a$, $f'(x) \\le f'(a)$ donc $g'(x) \\le 0$ ; si $x \\ge a$, $g'(x) \\ge 0$.\n• $g$ est donc décroissante puis croissante : elle admet un minimum en $a$, égal à $g(a) = f(a) - f(a) = 0$.\n• Ainsi $g(x) \\ge 0$ pour tout $x \\in I$ : la courbe est au-dessus de sa tangente en $a$, et ceci pour tout $a \\in I$."
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
      },
      {
        "title": "Méthode : Esquisser l'allure d'une courbe à partir de tableaux",
        "example": "Soit $g$ définie sur $[-1 ; 3]$ par $g(x) = x^3 - 3x^2 + 4$, avec $g'(x) = 3x(x - 2)$ et $g''(x) = 6x - 6$. Esquisser l'allure de sa courbe.",
        "steps": [
          "**Étape 1 (Variations)** : $g'$ est positive sur $[-1 ; 0]$, négative sur $[0 ; 2]$ et positive sur $[2 ; 3]$ : $g$ est croissante, puis décroissante, puis croissante.",
          "**Étape 2 (Convexité)** : $g''$ est négative sur $[-1 ; 1]$ et positive sur $[1 ; 3]$ : $g$ est concave puis convexe, et le point d'abscisse $1$ est un point d'inflexion.",
          "**Étape 3 (Tableau)** : on réunit ces informations et les valeurs de $g$.\n\n| $x$ | $-1$ |  | $0$ |  | $1$ |  | $2$ |  | $3$ |\n|---|---|---|---|---|---|---|---|---|---|\n| signe de $g'(x)$ |  | $+$ | $0$ | $-$ |  | $-$ | $0$ | $+$ |  |\n| signe de $g''(x)$ |  | $-$ |  | $-$ | $0$ | $+$ |  | $+$ |  |\n| $g(x)$ | $0$ | ↗ | $4$ | ↘ | $2$ | ↘ | $0$ | ↗ | $4$ |",
          "**Conclusion** : on place les points du tableau, puis on les relie en respectant les variations et la convexité : la courbe est tournée vers le bas avant $I(1 ; 2)$ et vers le haut après, avec des tangentes horizontales aux abscisses $0$ et $2$.\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.6rem auto;\"><svg class=\"geo-svg-figure\" role=\"img\" aria-label=\"Courbe de g, avec les points (-1 ; 0), (0 ; 4), (2 ; 0), (3 ; 4) et le point d'inflexion (1 ; 2), sur l'intervalle [-1 ; 3]. Elle passe par les points (-1 ; 0), (0 ; 4), (1 ; 2), (2 ; 0), (3 ; 4).\" viewBox=\"0 0 180 180\" width=\"180\" height=\"180\" style=\"max-width:330px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"18\" y1=\"162\" x2=\"18\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"42\" y1=\"162\" x2=\"42\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"66\" y1=\"162\" x2=\"66\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"90\" y1=\"162\" x2=\"90\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"114\" y1=\"162\" x2=\"114\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"138\" y1=\"162\" x2=\"138\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"162\" y1=\"162\" x2=\"162\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"162\" x2=\"162\" y2=\"162\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"138\" x2=\"162\" y2=\"138\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"114\" x2=\"162\" y2=\"114\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"90\" x2=\"162\" y2=\"90\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"66\" x2=\"162\" y2=\"66\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"42\" x2=\"162\" y2=\"42\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"18\" x2=\"162\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"138\" x2=\"172\" y2=\"138\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\"/><polygon points=\"0,0 -8,-3.5 -8,3.5\" transform=\"translate(174 138) rotate(0)\" fill=\"var(--text-main, #334155)\"/><line x1=\"66\" y1=\"162\" x2=\"66\" y2=\"8\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\"/><polygon points=\"0,0 -8,-3.5 -8,3.5\" transform=\"translate(66 6) rotate(-90)\" fill=\"var(--text-main, #334155)\"/><text x=\"18\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−2</text><text x=\"42\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−1</text><text x=\"90\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">1</text><text x=\"114\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">2</text><text x=\"138\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">3</text><text x=\"162\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">4</text><text x=\"61\" y=\"165.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−1</text><text x=\"61\" y=\"117.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">1</text><text x=\"61\" y=\"93.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">2</text><text x=\"61\" y=\"69.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">3</text><text x=\"61\" y=\"45.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">4</text><text x=\"61\" y=\"21.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">5</text><text x=\"60\" y=\"151\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">0</text><path d=\"M 42 138 C 44 120 46 105 48 92.63 C 50 80.25 52 70.5 54 63 C 56 55.5 58 50.25 60 46.88 C 62 43.5 64 42 66 42 C 68 42 70 43.5 72 46.13 C 74 48.75 76 52.5 78 57 C 80 61.5 82 66.75 84 72.38 C 86 78 88 84 90 90 C 92 96 94 102 96 107.63 C 98 113.25 100 118.5 102 123 C 104 127.5 106 131.25 108 133.88 C 110 136.5 112 138 114 138 C 116 138 118 136.5 120 133.13 C 122 129.75 124 124.5 126 117 C 128 109.5 130 99.75 132 87.38 C 134 75 136 60 138 42\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.2\"/><circle cx=\"42\" cy=\"138\" r=\"3\" fill=\"#2563eb\"/><circle cx=\"66\" cy=\"42\" r=\"3\" fill=\"#2563eb\"/><circle cx=\"114\" cy=\"138\" r=\"3\" fill=\"#2563eb\"/><circle cx=\"138\" cy=\"42\" r=\"3\" fill=\"#2563eb\"/><circle cx=\"90\" cy=\"90\" r=\"3.6\" fill=\"#dc2626\"/><text x=\"99\" y=\"83\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">I</text></svg></div>"
        ]
      }
    ],
    "traps": [
      "⚠️ Pour être un point d'inflexion, il ne suffit pas que $f''(a) = 0$, il faut impérativement que $f''$ **change de signe** (contre-exemple : $f(x) = x^4$ en 0 a $f''(0) = 0$ mais reste toujours convexe).",
      "⚠️ Ne pas confondre **convexité** et **variations** : $x \\mapsto e^{-x}$ est décroissante et pourtant convexe. Le signe de $f''$ renseigne sur la convexité de $f$, le signe de $f'$ sur ses variations.",
      "⚠️ Si l'énoncé donne la courbe de $f'$, la convexité de $f$ se lit sur les **variations** de $f'$ (et non sur son signe).",
      "⚠️ Pour parler de point d'inflexion en $a$, il faut que $a$ appartienne au domaine : $x \\mapsto \\frac{1}{x}$ change de convexité « en $0$ » mais n'a pas de point d'inflexion.",
      "⚠️ Pour démontrer une inégalité par convexité, préciser la tangente utilisée et le bon sens : fonction convexe, courbe **au-dessus** de ses tangentes ; fonction concave, courbe **en dessous**. Inverser les deux conduit à une inégalité fausse."
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
      },
      {
        "q": "Quelle fonction étudie-t-on pour démontrer qu'une courbe convexe est au-dessus de sa tangente en $a$ ?",
        "a": "$g(x) = f(x) - [f'(a)(x - a) + f(a)]$ : $g' = f' - f'(a)$ change de signe en $a$ car $f'$ est croissante, donc $g$ a pour minimum $g(a) = 0$."
      },
      {
        "q": "Sur la courbe de $f'$, que faut-il regarder pour connaître la convexité de $f$ ?",
        "a": "Les **variations** de $f'$ : $f$ est convexe où $f'$ est croissante, concave où $f'$ est décroissante."
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
      "Modéliser une situation d'évolution (refroidissement, population) par une équation différentielle.",
      "Démontrer que deux primitives diffèrent d'une constante et résoudre $y' = ay$ ; programmer la méthode d'Euler."
    ],
    "keyPoints": [
      {
        "title": "1. Primitives : définition et propriétés",
        "content": "• $F$ est une **primitive** de $f$ sur l'intervalle $I$ si $F$ est dérivable sur $I$ et $F' = f$.\n• **Théorème (admis)** : toute fonction **continue** sur un intervalle admet des primitives sur cet intervalle.\n• Si $F$ est une primitive de $f$, les primitives de $f$ sont les fonctions $x \\mapsto F(x) + C$, $C \\in \\mathbb{R}$ : deux primitives diffèrent d'une constante.\n• Pour $x_0 \\in I$ et $y_0 \\in \\mathbb{R}$, il existe une **unique** primitive $F$ telle que $F(x_0) = y_0$.\n• Une équation différentielle $y' = f$ a pour solutions exactement les primitives de $f$."
      },
      {
        "title": "2. Primitives usuelles",
        "content": "• $x^n$ ($n \\in \\mathbb{N}$) a pour primitives $\\dfrac{x^{n+1}}{n+1} + C$ sur $\\mathbb{R}$.\n• $\\dfrac{1}{x^n}$ ($n \\ge 2$ entier) a pour primitives $-\\dfrac{1}{(n-1)x^{n-1}} + C$ sur $]0 ; +\\infty[$ (ou $]-\\infty ; 0[$).\n• $\\dfrac{1}{x^2}$ a pour primitives $-\\dfrac{1}{x} + C$ sur $]0 ; +\\infty[$ (ou $]-\\infty ; 0[$).\n• $\\dfrac{1}{x}$ a pour primitives $\\ln(x) + C$ sur $]0 ; +\\infty[$.\n• $\\dfrac{1}{\\sqrt{x}}$ a pour primitives $2\\sqrt{x} + C$ sur $]0 ; +\\infty[$.\n• $e^x$ a pour primitives $e^x + C$ ; $e^{ax+b}$ ($a \\ne 0$) a pour primitives $\\dfrac{1}{a}e^{ax+b} + C$.\n• $\\cos(x)$ a pour primitives $\\sin(x) + C$ ; $\\sin(x)$ a pour primitives $-\\cos(x) + C$ (car $\\sin' = \\cos$ et $\\cos' = -\\sin$, dérivées étudiées au chapitre TA9)."
      },
      {
        "title": "3. Primitives de formes composées usuelles",
        "content": "Soit $u$ une fonction dérivable sur un intervalle $I$, de dérivée $u'$ continue. Une primitive sur $I$ de :\n• $u' u^n$ est $\\dfrac{u^{n+1}}{n+1}$ pour $n \\in \\mathbb{N}$ (et pour $n$ entier $\\le -2$ si $u$ ne s'annule pas sur $I$) ;\n• $\\dfrac{u'}{u}$ est $\\ln(u)$ si $u > 0$ sur $I$ (plus généralement $\\ln(|u|)$ si $u$ ne s'annule pas sur $I$) ;\n• $u' e^u$ est $e^u$ ;\n• $\\dfrac{u'}{\\sqrt{u}}$ est $2\\sqrt{u}$ si $u > 0$ sur $I$.\nLes autres primitives s'obtiennent en ajoutant une constante $C$. Toutes ces formules découlent de la dérivée d'une composée $(v \\circ u)' = (v' \\circ u) \\times u'$ (voir chapitre TA8, points 2 et 3)."
      },
      {
        "title": "4. Résolution des équations différentielles linéaires",
        "content": "• Pour $y' = ay$ ($a \\in \\mathbb{R}$) : les solutions sont les fonctions $y(x) = C e^{ax}$ ($C \\in \\mathbb{R}$).\n• Pour $y' = ay + b$ ($a \\neq 0$) : les solutions sont les fonctions $y(x) = C e^{ax} - \\frac{b}{a}$ ($C \\in \\mathbb{R}$).\n• Pour toute condition initiale $(x_0, y_0)$, il existe **une unique solution** vérifiant $y(x_0) = y_0$."
      },
      {
        "title": "5. Équation $y' = ay + f$ : structure des solutions",
        "content": "Soit $a \\ne 0$ un réel et $f$ une fonction définie sur $I$. Si $g$ est **une** solution particulière de $(E) : y' = ay + f$, alors les solutions de $(E)$ sont les fonctions :\n$$y(x) = Ce^{ax} + g(x), \\quad C \\in \\mathbb{R}$$\n**Solution générale = solutions de $y' = ay$ + une solution particulière.**\nExemple de modélisation (loi de Newton) : la température $\\theta(t)$ d'un café dans une pièce à $20$ °C vérifie $\\theta' = -k(\\theta - 20)$ avec $k > 0$, soit $\\theta' = -k\\theta + 20k$ ; les solutions sont $\\theta(t) = Ce^{-kt} + 20$, qui tendent vers $20$ quand $t \\to +\\infty$."
      },
      {
        "title": "6. Démonstration : deux primitives d'une même fonction diffèrent d'une constante",
        "content": "Soient $F$ et $G$ deux primitives d'une même fonction $f$ continue sur un **intervalle** $I$.\n• La fonction $H = G - F$ est dérivable sur $I$ et $H' = G' - F' = f - f = 0$.\n• Une fonction de dérivée nulle sur un intervalle est constante : il existe un réel $C$ tel que $H(x) = C$ pour tout $x \\in I$.\n• Donc $G(x) = F(x) + C$ pour tout $x \\in I$. Réciproquement, $(F + C)' = F' = f$ : toute fonction $F + C$ est une primitive de $f$.\nL'hypothèse « intervalle » est essentielle : sur $]-\\infty ; 0[ \\cup ]0 ; +\\infty[$, on peut ajouter des constantes différentes de chaque côté de $0$."
      },
      {
        "title": "7. Démonstration : résolution de $y' = ay$ et de $y' = ay + b$",
        "content": "• **Les fonctions $x \\mapsto Ce^{ax}$ sont solutions** de $y' = ay$ : leur dérivée est $aCe^{ax} = a \\times Ce^{ax}$.\n• **Ce sont les seules** : soit $f$ une solution sur $\\mathbb{R}$. On pose $g(x) = f(x)e^{-ax}$. Alors\n$$g'(x) = f'(x)e^{-ax} - af(x)e^{-ax} = \\big(f'(x) - af(x)\\big)e^{-ax} = 0$$\ncar $f' = af$. Donc $g$ est constante sur $\\mathbb{R}$ : $g(x) = C$, soit $f(x) = Ce^{ax}$.\n• **Cas $y' = ay + b$ ($a \\ne 0$)** : la constante $y_p = -\\dfrac{b}{a}$ est solution, car $y_p' = 0$ et $ay_p + b = -b + b = 0$. Pour une fonction dérivable $f$ : $f' = af + b \\iff f' = a(f - y_p) \\iff (f - y_p)' = a(f - y_p)$. Donc $f$ est solution si et seulement si $f - y_p$ est solution de $y' = ay$, c'est-à-dire $f(x) = Ce^{ax} - \\dfrac{b}{a}$, $C \\in \\mathbb{R}$."
      },
      {
        "title": "8. Méthode d'Euler en Python",
        "content": "Pour approcher la solution de $y' = ay + b$ telle que $y(x_0) = y_0$, on remplace la courbe par sa tangente sur des intervalles de petite longueur $h$ :\n$$y(x + h) \\approx y(x) + h \\times y'(x) = y(x) + h\\big(ay(x) + b\\big)$$\n```python\ndef euler(a, b, x0, y0, h, n):\n    x, y = x0, y0\n    for i in range(n):\n        y = y + h * (a * y + b)\n        x = x + h\n    return x, y\n\nprint(euler(3, 6, 0, 5, 0.001, 1000))\n```\nPour $y' = 3y + 6$, $y(0) = 5$, on obtient $y(1) \\approx 137{,}97$, à comparer à la valeur exacte $7e^3 - 2 \\approx 138{,}60$ (voir la méthode « Résoudre $y' = ay + b$ avec condition initiale ») : plus le pas $h$ est petit, meilleure est l'approximation. La même boucle avec `y = y + h * f(x)` approche une primitive de $f$ (équation $y' = f$)."
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
      "⚠️ Une primitive de $e^{3x}$ est $\\frac{1}{3}e^{3x}$ et non $e^{3x}$ ni $3e^{3x}$.",
      "⚠️ Les primitives se cherchent sur un **intervalle** : $\\ln(x)$ est une primitive de $\\frac{1}{x}$ sur $]0 ; +\\infty[$ seulement ; sur $]-\\infty ; 0[$, une primitive est $\\ln(-x)$."
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
      },
      {
        "q": "Pourquoi deux primitives d'une même fonction sur un intervalle diffèrent-elles d'une constante ?",
        "a": "Leur différence a une dérivée nulle sur un intervalle, donc elle est constante."
      }
    ]
  },
  "TG1": {
    "title": "TG1 : Vecteurs, droites et plans dans l'espace",
    "domain": "Géométrie de l'Espace",
    "objectives": [
      "Connaître la notion de vecteur de l'espace et calculer l'image d'un point par une translation.",
      "Caractériser la colinéarité de deux vecteurs et la coplanarité de trois vecteurs dans l'espace.",
      "Écrire et exploiter la représentation paramétrique d'une droite de l'espace.",
      "Étudier les positions relatives de deux droites (parallèles, sécantes ou non coplanaires).",
      "Décomposer un vecteur dans une base de l'espace et démontrer que quatre points sont coplanaires.",
      "Étudier les positions relatives de droites et de plans (parallélisme, intersection)."
    ],
    "keyPoints": [
      {
        "title": "1. Vecteurs de l'espace et translations",
        "content": "• Comme dans le plan, un **vecteur de l'espace** non nul est défini par une direction, un sens et une longueur (sa norme) ; le vecteur nul $\\vec{0}$ a une longueur nulle. Deux points $A$ et $B$ définissent le vecteur $\\overrightarrow{AB}$, et $\\overrightarrow{AA} = \\vec{0}$.\n• Pour tout point $O$ et tout vecteur $\\vec{u}$, il existe un **unique** point $M$ tel que $\\overrightarrow{OM} = \\vec{u}$ : $\\overrightarrow{OM}$ est le **représentant** de $\\vec{u}$ d'origine $O$.\n• $\\overrightarrow{AB} = \\overrightarrow{CD}$ si et seulement si $ABDC$ est un parallélogramme (éventuellement aplati). La relation de Chasles $\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$, l'addition de deux vecteurs et le produit d'un vecteur par un réel fonctionnent comme dans le plan.\n• **Translation** : la translation de vecteur $\\vec{u}$ est la transformation qui, à tout point $M$ de l'espace, associe l'unique point $M'$ tel que $\\overrightarrow{MM'} = \\vec{u}$.\n• Dans un repère (voir le point 4), si $M(x ; y ; z)$ et $\\vec{u}(a ; b ; c)$, alors $M'(x + a ; y + b ; z + c)$. Exemple : l'image de $M(1 ; 4 ; -2)$ par la translation de vecteur $\\vec{u}(2 ; -1 ; 3)$ est $M'(3 ; 3 ; 1)$."
      },
      {
        "title": "2. Représentation paramétrique d'une droite",
        "content": "La droite passant par $A(x_A ; y_A ; z_A)$ et de vecteur directeur $\\vec{u}(a ; b ; c)$ admet pour représentation paramétrique :\n$$\\begin{cases} x = x_A + at \\\\ y = y_A + bt \\\\ z = z_A + ct \\end{cases} \\quad (t \\in \\mathbb{R})$$"
      },
      {
        "title": "3. Positions relatives dans l'espace",
        "content": "• Deux droites ayant des vecteurs directeurs colinéaires sont **strictement parallèles** ou **confondues**.\n• Deux droites sans vecteurs directeurs colinéaires sont **sécantes** (un unique point d'intersection) ou **non coplanaires** (aucun point d'intersection et aucun plan ne les contient)."
      },
      {
        "title": "4. Colinéarité, coplanarité, bases de l'espace",
        "content": "• $\\vec{u}$ et $\\vec{v}$ sont **colinéaires** s'il existe un réel $k$ tel que $\\vec{v} = k\\vec{u}$ (ou si $\\vec{u} = \\vec{0}$).\n• Trois vecteurs $\\vec{u}$, $\\vec{v}$, $\\vec{w}$ sont **coplanaires** si, pour un point $O$ quelconque, les points $O$, $A$, $B$, $C$ tels que $\\overrightarrow{OA} = \\vec{u}$, $\\overrightarrow{OB} = \\vec{v}$ et $\\overrightarrow{OC} = \\vec{w}$ appartiennent à un même plan : les trois vecteurs ont des représentants de même origine dans un même plan.\n• Si $\\vec{u}$ et $\\vec{v}$ ne sont pas colinéaires, alors $\\vec{u}$, $\\vec{v}$, $\\vec{w}$ sont coplanaires si et seulement s'il existe deux réels $a$ et $b$ tels que $\\vec{w} = a\\vec{u} + b\\vec{v}$.\n• Quatre points $A$, $B$, $C$, $D$ sont **coplanaires** si et seulement si les vecteurs $\\overrightarrow{AB}$, $\\overrightarrow{AC}$, $\\overrightarrow{AD}$ sont coplanaires.\n• Trois vecteurs **non coplanaires** $(\\vec{i}, \\vec{j}, \\vec{k})$ forment une **base** de l'espace : tout vecteur $\\vec{w}$ s'écrit de manière unique $\\vec{w} = x\\vec{i} + y\\vec{j} + z\\vec{k}$ ; $(x ; y ; z)$ sont ses coordonnées. Avec une origine $O$, $(O ; \\vec{i}, \\vec{j}, \\vec{k})$ est un **repère** de l'espace."
      },
      {
        "title": "5. Caractérisation vectorielle d'un plan",
        "content": "Soit $A$ un point et $\\vec{u}$, $\\vec{v}$ deux vecteurs **non colinéaires**. Le plan $\\mathcal{P}$ passant par $A$ et dirigé par $\\vec{u}$ et $\\vec{v}$ est l'ensemble des points $M$ tels que :\n$$\\overrightarrow{AM} = s\\vec{u} + t\\vec{v}, \\quad s, t \\in \\mathbb{R}$$\n• Une droite $d$ de vecteur directeur $\\vec{w}$ est **parallèle** à $\\mathcal{P}$ si et seulement si $\\vec{w}$, $\\vec{u}$, $\\vec{v}$ sont coplanaires.\n• Deux plans sont parallèles si et seulement si deux vecteurs directeurs non colinéaires de l'un dirigent aussi l'autre."
      },
      {
        "title": "6. Positions relatives de plans et théorème du toit",
        "content": "• Deux plans distincts sont soit **parallèles** (aucun point commun), soit **sécants** suivant une droite.\n• Une droite et un plan sont soit sécants en un point, soit parallèles (droite incluse dans le plan ou sans point commun).\n• **Théorème du toit** : si deux plans sécants $\\mathcal{P}_1$ et $\\mathcal{P}_2$ contiennent respectivement deux droites parallèles $d_1$ et $d_2$, alors leur droite d'intersection $\\Delta$ est parallèle à $d_1$ et à $d_2$.\n• Si un plan $\\mathcal{P}$ coupe deux plans parallèles, les droites d'intersection obtenues sont parallèles."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Écrire la représentation paramétrique d'une droite $(AB)$",
        "example": "Soient $A(1 ; 2 ; -3)$ et $B(4 ; -1 ; 0)$. Déterminer une représentation paramétrique de $(AB)$.",
        "steps": [
          "**Étape 1** : Vecteur directeur $\\overrightarrow{AB}(4-1 ; -1-2 ; 0-(-3)) = \\overrightarrow{AB}(3 ; -3 ; 3)$ (ou $\\vec{u}(1 ; -1 ; 1)$).",
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
      },
      {
        "title": "Méthode : Montrer que trois vecteurs forment une base et décomposer un vecteur",
        "example": "Dans un repère de l'espace, on donne $\\vec{u}(1 ; 0 ; 1)$, $\\vec{v}(0 ; 1 ; 1)$, $\\vec{w}(1 ; 1 ; 0)$ et $\\vec{t}(3 ; 1 ; 2)$. Montrer que $(\\vec{u}, \\vec{v}, \\vec{w})$ est une base de l'espace, puis exprimer $\\vec{t}$ dans cette base.",
        "steps": [
          "**Étape 1 (Non-coplanarité)** : $\\vec{u}$ et $\\vec{v}$ ne sont pas colinéaires. Si l'on avait $\\vec{w} = a\\vec{u} + b\\vec{v}$, les coordonnées donneraient $1 = a$, $1 = b$ et $0 = a + b = 2$ : impossible. Donc $\\vec{u}$, $\\vec{v}$, $\\vec{w}$ ne sont pas coplanaires : ils forment une base.",
          "**Étape 2 (Système)** : on cherche $x$, $y$, $z$ tels que $\\vec{t} = x\\vec{u} + y\\vec{v} + z\\vec{w}$, soit $\\begin{cases} x + z = 3 \\\\ y + z = 1 \\\\ x + y = 2 \\end{cases}$",
          "**Étape 3 (Résolution)** : en additionnant les trois lignes, $2(x + y + z) = 6$, donc $x + y + z = 3$. On en déduit $y = 3 - 3 = 0$ (avec la 1re ligne), $x = 3 - 1 = 2$ (avec la 2e) et $z = 3 - 2 = 1$ (avec la 3e).",
          "**Conclusion** : $\\vec{t} = 2\\vec{u} + 0\\vec{v} + 1\\vec{w}$ ; les coordonnées de $\\vec{t}$ dans la base $(\\vec{u}, \\vec{v}, \\vec{w})$ sont $(2 ; 0 ; 1)$. Vérification : $2(1 ; 0 ; 1) + (1 ; 1 ; 0) = (3 ; 1 ; 2)$."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans l'espace, deux droites qui ne se coupent pas ne sont PAS obligatoirement parallèles : elles peuvent être **non coplanaires** !",
      "⚠️ Pour chercher l'intersection de deux droites, utiliser **deux paramètres différents** ($t$ et $s$) : un même point n'a aucune raison d'être obtenu pour la même valeur du paramètre.",
      "⚠️ Une droite admet une **infinité** de représentations paramétriques : deux systèmes d'apparence différente peuvent décrire la même droite.",
      "⚠️ Trois vecteurs deux à deux non colinéaires peuvent être coplanaires : il faut tester si l'un est combinaison linéaire des deux autres.",
      "⚠️ Pour conclure que deux droites sont non coplanaires, il ne suffit pas que leurs vecteurs directeurs soient non colinéaires : il faut aussi montrer que le système traduisant l'intersection n'a **aucune** solution."
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
      },
      {
        "q": "Qu'est-ce que la translation de vecteur $\\vec{u}$ dans l'espace ?",
        "a": "La transformation qui, à tout point $M$, associe l'unique point $M'$ tel que $\\overrightarrow{MM'} = \\vec{u}$."
      },
      {
        "q": "Comment démontrer que trois vecteurs forment une base de l'espace ?",
        "a": "On montre qu'ils ne sont pas coplanaires : deux d'entre eux ne sont pas colinéaires et le troisième n'est pas combinaison linéaire des deux premiers."
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
      "Déterminer une taille d'échantillon à l'aide de l'inégalité de concentration.",
      "Démontrer l'espérance et la variance de la loi binomiale ; simuler des échantillons en Python.",
      "Simuler une marche aléatoire et calculer par un programme la probabilité $P(|S_n - pn| > \\sqrt{n})$ pour $S_n \\sim \\mathcal{B}(n, p)$."
    ],
    "keyPoints": [
      {
        "title": "1. Somme de variables aléatoires",
        "content": "Soient $X$ et $Y$ deux variables aléatoires définies sur le même univers, et $a$, $b$ deux réels.\n• **Linéarité de l'espérance** (toujours vraie) : $E(X + Y) = E(X) + E(Y)$ et $E(aX + b) = aE(X) + b$.\n• $V(aX + b) = a^2 V(X)$ et donc $\\sigma(aX + b) = |a|\\,\\sigma(X)$.\n• **Variables indépendantes** : $X$ et $Y$ sont **indépendantes** si, pour toutes valeurs $x$ de $X$ et $y$ de $Y$, $P(\\{X = x\\} \\cap \\{Y = y\\}) = P(X = x) \\times P(Y = y)$. C'est le cadre du programme : dans une succession d'épreuves indépendantes, une variable qui ne dépend que des résultats de certaines épreuves et une variable qui ne dépend que des résultats des autres épreuves sont indépendantes.\n• Si $X$ et $Y$ sont **indépendantes** : $V(X + Y) = V(X) + V(Y)$ (propriété admise).\n• Pour un **échantillon** $(X_1, \\dots, X_n)$ de variables indépendantes de même loi (espérance $\\mu$, variance $\\sigma^2$), la somme $S_n = X_1 + \\dots + X_n$ vérifie $E(S_n) = n\\mu$ et $V(S_n) = n\\sigma^2$."
      },
      {
        "title": "2. Espérance et variance de la moyenne d'un échantillon",
        "content": "Soient $X_1, \\dots, X_n$ des variables indépendantes de même loi, d'espérance $\\mu$ et de variance $\\sigma^2$.\n• Moyenne empirique : $M_n = \\frac{1}{n} \\sum_{i=1}^n X_i$.\n• $E(M_n) = \\mu$ et $V(M_n) = \\frac{\\sigma^2}{n}$, d'où $\\sigma(M_n) = \\frac{\\sigma}{\\sqrt{n}}$."
      },
      {
        "title": "3. Inégalités de Bienaymé-Tchebychev et de concentration",
        "content": "• **Bienaymé-Tchebychev** : Pour toute variable aléatoire $X$ d'espérance $\\mu$ et de variance $\\sigma^2$ :\n$$P(|X - \\mu| \\ge \\delta) \\le \\frac{\\sigma^2}{\\delta^2} \\quad (\\delta > 0)$$\n• **Inégalité de concentration** appliquée à $M_n$ :\n$$P(|M_n - \\mu| \\ge \\delta) \\le \\frac{\\sigma^2}{n \\delta^2} \\xrightarrow[n \\to +\\infty]{} 0$$"
      },
      {
        "title": "4. Autre forme de Bienaymé-Tchebychev",
        "content": "En passant à l'événement contraire, pour tout $\\delta > 0$ :\n$$P(|X - \\mu| < \\delta) \\ge 1 - \\frac{V(X)}{\\delta^2}$$\nAvec $\\delta = k\\sigma$ ($k > 0$) : $P(|X - \\mu| < k\\sigma) \\ge 1 - \\dfrac{1}{k^2}$. Ainsi, quelle que soit la loi de $X$, $X$ prend, avec une probabilité d'au moins $75\\,\\%$, une valeur à moins de $2\\sigma$ de $\\mu$ ($k = 2$) et, avec une probabilité d'au moins $\\frac{8}{9} \\approx 89\\,\\%$, une valeur à moins de $3\\sigma$ de $\\mu$ ($k = 3$)."
      },
      {
        "title": "5. Loi faible des grands nombres",
        "content": "Soit $(X_1, \\dots, X_n)$ un échantillon de variables indépendantes de même loi d'espérance $\\mu$, et $M_n = \\frac{X_1 + \\dots + X_n}{n}$. Pour tout réel $\\delta > 0$ :\n$$\\lim_{n \\to +\\infty} P(|M_n - \\mu| \\ge \\delta) = 0$$\n**Interprétation** : plus l'échantillon est grand, plus la moyenne observée a de chances d'être proche de l'espérance. Pour des variables de Bernoulli de paramètre $p$, $M_n$ est la **fréquence** de succès : elle se rapproche de $p$. C'est ce qui justifie l'estimation d'une probabilité par une fréquence (simulations)."
      },
      {
        "title": "6. Démonstration : espérance et variance de la loi binomiale",
        "content": "Soit $X \\sim \\mathcal{B}(n, p)$. On écrit $X = X_1 + \\dots + X_n$, où $X_i$ vaut $1$ si la $i$-ème épreuve est un succès et $0$ sinon.\n• Chaque $X_i$ suit la loi de Bernoulli de paramètre $p$ : $E(X_i) = 1 \\times p + 0 \\times (1 - p) = p$ et, comme $X_i^2 = X_i$, $V(X_i) = E(X_i^2) - E(X_i)^2 = p - p^2 = p(1 - p)$.\n• **Espérance** : par linéarité, $E(X) = E(X_1) + \\dots + E(X_n) = np$.\n• **Variance** : les épreuves étant indépendantes, les variables $X_i$ sont indépendantes et leurs variances s'additionnent : $V(X) = V(X_1) + \\dots + V(X_n) = np(1 - p)$.\n• Par suite, $\\sigma(X) = \\sqrt{np(1 - p)}$."
      },
      {
        "title": "7. Démonstrations : Bienaymé-Tchebychev, concentration, loi des grands nombres",
        "content": "**Bienaymé-Tchebychev** (pour $X$ prenant les valeurs $x_1, \\dots, x_r$ avec les probabilités $p_1, \\dots, p_r$, d'espérance $\\mu$) : on ne garde, dans la somme qui définit la variance, que les termes (positifs) pour lesquels $|x_i - \\mu| \\ge \\delta$ :\n$$V(X) = \\sum_{i=1}^{r} p_i (x_i - \\mu)^2 \\ge \\sum_{|x_i - \\mu| \\ge \\delta} p_i (x_i - \\mu)^2 \\ge \\sum_{|x_i - \\mu| \\ge \\delta} p_i\\,\\delta^2 = \\delta^2\\,P(|X - \\mu| \\ge \\delta)$$\nEn divisant par $\\delta^2 > 0$ : $P(|X - \\mu| \\ge \\delta) \\le \\dfrac{V(X)}{\\delta^2}$.\n**Concentration** : on applique cette inégalité à $M_n$, d'espérance $\\mu$ et de variance $\\dfrac{V}{n}$ : $P(|M_n - \\mu| \\ge \\delta) \\le \\dfrac{V}{n\\delta^2}$.\n**Loi des grands nombres** : pour $\\delta > 0$ fixé, $0 \\le P(|M_n - \\mu| \\ge \\delta) \\le \\dfrac{V}{n\\delta^2}$ et $\\dfrac{V}{n\\delta^2} \\to 0$ quand $n \\to +\\infty$ ; par le théorème des gendarmes, $\\lim\\limits_{n \\to +\\infty} P(|M_n - \\mu| \\ge \\delta) = 0$."
      },
      {
        "title": "8. Simulation d'échantillons en Python",
        "content": "On simule $N$ échantillons de taille $n$ du lancer d'un dé équilibré et on étudie la série des $N$ moyennes obtenues :\n```python\nfrom random import randint\nfrom math import sqrt\n\ndef moyenne_echantillon(n):\n    return sum(randint(1, 6) for i in range(n)) / n\n\ndef experience(N, n):\n    moyennes = [moyenne_echantillon(n) for j in range(N)]\n    m = sum(moyennes) / N\n    s = sqrt(sum((x - m)**2 for x in moyennes) / N)\n    return moyennes, m, s\n\ndef proportion(moyennes, mu, k, s):\n    # proportion des moyennes dont l'écart à mu est au plus k * s\n    return sum(1 for x in moyennes if abs(x - mu) <= k * s) / len(moyennes)\n\nmoyennes, m, s = experience(1000, 100)\nprint(m, s)\nfor k in [1, 2, 3]:\n    print(k, proportion(moyennes, 3.5, k, s))\n```\nPour un dé, $\\mu = 3{,}5$ et $\\sigma = \\sqrt{\\frac{35}{12}} \\approx 1{,}71$. On observe une moyenne des moyennes proche de $3{,}5$ et un écart-type $s$ proche de $\\frac{\\sigma}{\\sqrt{n}} \\approx 0{,}171$ pour $n = 100$. En comptant, pour $k = 1$, $2$ et $3$, la proportion des moyennes dont l'écart à $3{,}5$ est inférieur ou égal à $ks$, on trouve en général environ $68\\,\\%$, $95\\,\\%$ et $99{,}7\\,\\%$. C'est bien plus que ce que garantit Bienaymé-Tchebychev avec $\\delta = ks$ : rien pour $k = 1$ (la minoration $1 - \\frac{1}{k^2}$ vaut $0$), $75\\,\\%$ pour $k = 2$ et $\\frac{8}{9} \\approx 89\\,\\%$ pour $k = 3$."
      },
      {
        "title": "9. Deux algorithmes : écart à la moyenne et marche aléatoire",
        "content": "Soit $S_n \\sim \\mathcal{B}(n, p)$ le nombre de succès en $n$ épreuves indépendantes.\n• **Calcul de $P(|S_n - pn| > \\sqrt{n})$** : on additionne les probabilités $\\binom{n}{k}p^k(1 - p)^{n - k}$ des valeurs $k$ qui vérifient $|k - pn| > \\sqrt{n}$.\n```python\nfrom math import comb, sqrt\n\ndef proba_ecart(n, p):\n    total = 0\n    for k in range(n + 1):\n        if abs(k - n * p) > sqrt(n):\n            total = total + comb(n, k) * p**k * (1 - p)**(n - k)\n    return total\n```\nPour $n = 100$ et $p = 0{,}5$, la condition est $|k - 50| > 10$, c'est-à-dire $k \\le 39$ ou $k \\ge 61$, et `proba_ecart(100, 0.5)` renvoie environ $0{,}035$. Or l'inégalité de Bienaymé-Tchebychev, avec $V(S_n) = np(1 - p)$ et $\\delta = \\sqrt{n}$, donne seulement $P(|S_n - pn| > \\sqrt{n}) \\le P(|S_n - pn| \\ge \\sqrt{n}) \\le \\dfrac{np(1 - p)}{n} = p(1 - p) \\le \\dfrac{1}{4}$ : la majoration est valable, mais très pessimiste. En faisant varier $n$, on constate que cette probabilité reste petite (pour $p = 0{,}5$ et $100 \\le n \\le 1000$, elle reste comprise entre $0{,}03$ et $0{,}06$), alors que l'écart toléré $\\sqrt{n}$ devient négligeable devant $n$ : la fréquence $\\frac{S_n}{n}$ s'écarte de $p$ de plus de $\\frac{1}{\\sqrt{n}}$ avec une faible probabilité.\n• **Simulation d'une marche aléatoire** : un pion part de $0$ sur une droite graduée ; à chaque étape, il avance de $1$ avec la probabilité $p$ et recule de $1$ sinon, indépendamment des étapes précédentes.\n```python\nfrom random import random\n\ndef marche(n, p):\n    x = 0\n    for i in range(n):\n        if random() < p:\n            x = x + 1\n        else:\n            x = x - 1\n    return x\n\ndef moyenne_positions(n, p, N):\n    return sum(marche(n, p) for j in range(N)) / N\n```\nSi $S_n$ est le nombre de pas en avant, $S_n \\sim \\mathcal{B}(n, p)$ et la position finale est $X_n = S_n - (n - S_n) = 2S_n - n$. Donc $E(X_n) = 2np - n = n(2p - 1)$ et $V(X_n) = 4np(1 - p)$. D'après la loi des grands nombres, `moyenne_positions(n, p, N)` est proche de $n(2p - 1)$ pour $N$ grand. Pour la marche symétrique ($p = 0{,}5$), $|X_n| > 2\\sqrt{n} \\iff |S_n - \\frac{n}{2}| > \\sqrt{n}$ : avec $n = 100$, le pion finit à plus de $20$ graduations de son point de départ avec une probabilité d'environ $0{,}035$, ce qu'une simulation de nombreuses marches permet de constater."
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
      "⚠️ L'inégalité de Bienaymé-Tchebychev donne une **majoration**, pas une valeur approchée de la probabilité : la vraie valeur est souvent bien plus petite.",
      "⚠️ Dans l'inégalité de concentration, c'est la **variance** $V$ (et non l'écart-type) qui figure au numérateur, et $\\delta$ est élevé au **carré** : $P(|M_n - \\mu| \\ge \\delta) \\le \\frac{V}{n\\delta^2}$."
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
      },
      {
        "q": "Comment démontre-t-on que $V(X) = np(1-p)$ pour $X \\sim \\mathcal{B}(n, p)$ ?",
        "a": "On écrit $X$ comme somme de $n$ variables de Bernoulli indépendantes, de variance $p(1-p)$ chacune, et on additionne les variances."
      }
    ]
  },
  "TX2": {
    "title": "TX2 : Nombres complexes et géométrie : forme trigonométrique et exponentielle",
    "domain": "Mathématiques Expertes",
    "objectives": [
      "Associer un point ou un vecteur du plan complexe à son affixe.",
      "Calculer le module $|z|$ et un argument $\\arg(z)$ d'un nombre complexe non nul.",
      "Passer de la forme algébrique à la forme trigonométrique et exponentielle $r e^{i\\theta}$.",
      "Interpréter géométriquement les modules (distances) et arguments (angles orientés de vecteurs).",
      "Utiliser les formules de Moivre et d'Euler.",
      "Connaître les racines $n$-ièmes de l'unité et leur interprétation géométrique.",
      "Démontrer $|z|^2 = z\\bar{z}$, le module d'un produit, une formule d'addition et la description de $\\mathbb{U}_n$."
    ],
    "keyPoints": [
      {
        "title": "1. Plan complexe, forme trigonométrique et exponentielle",
        "content": "Le plan est muni d'un repère orthonormé direct $(O ; \\vec{u}, \\vec{v})$ : on l'appelle le **plan complexe**.\n• À tout complexe $z = a + ib$ ($a$ et $b$ réels), on associe le point $M(a ; b)$, appelé **image** de $z$ ; réciproquement, $z$ est l'**affixe** du point $M$, notée $z_M$.\n• Le vecteur $\\vec{w}(a ; b)$ a pour **affixe** $a + ib$. En particulier, $\\overrightarrow{AB}$ a pour affixe $z_B - z_A$, et l'affixe d'une somme de vecteurs est la somme de leurs affixes.\nPour $z = a + ib \\ne 0$ d'image $M$ :\n• Module : $|z| = \\sqrt{a^2 + b^2} = OM$.\n• Argument : toute mesure $\\theta$ de l'angle orienté $\\left(\\vec{u}, \\overrightarrow{OM}\\right)$, notée $\\arg(z)$ et définie modulo $2\\pi$ ; elle vérifie $\\cos\\theta = \\frac{a}{|z|}$ et $\\sin\\theta = \\frac{b}{|z|}$.\n• **Forme trigonométrique** : comme $a = r\\cos\\theta$ et $b = r\\sin\\theta$ avec $r = |z| > 0$, on a $z = r(\\cos\\theta + i\\sin\\theta)$.\n• **Exponentielle imaginaire** : pour tout réel $\\theta$, on pose $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$. C'est le complexe de module $1$ et d'argument $\\theta$, dont l'image est le point du cercle trigonométrique associé à $\\theta$. Elle vérifie la relation fonctionnelle $e^{i\\theta} \\times e^{i\\theta'} = e^{i(\\theta + \\theta')}$ (démontrée à la section 7), analogue à celle de l'exponentielle réelle.\n• **Forme exponentielle** : $z = r e^{i\\theta}$ avec $r = |z| > 0$.\nExemple : $1 + i = \\sqrt{2}\\left(\\cos\\frac{\\pi}{4} + i\\sin\\frac{\\pi}{4}\\right) = \\sqrt{2}\\,e^{i\\frac{\\pi}{4}}$."
      },
      {
        "title": "2. Interprétation géométrique",
        "content": "Soient $A(z_A)$, $B(z_B)$, $C(z_C)$ et $D(z_D)$ dans le plan complexe :\n• Distance : $AB = |z_B - z_A|$.\n• Angle orienté (avec $A \\ne B$ et $C \\ne D$) : $(\\overrightarrow{AB} ; \\overrightarrow{CD}) = \\arg\\left(\\frac{z_D - z_C}{z_B - z_A}\\right) \\pmod{2\\pi}$.\n• Alignement (avec $A \\ne B$) : $A, B, C$ alignés $\\iff \\frac{z_C - z_A}{z_B - z_A} \\in \\mathbb{R}$.\n• Orthogonalité (avec $A \\ne B$ et $A \\ne C$) : $(AB) \\perp (AC) \\iff \\frac{z_C - z_A}{z_B - z_A}$ est un imaginaire pur.\n• Le module de $\\frac{z_C - z_A}{z_B - z_A}$ vaut $\\frac{AC}{AB}$ et un argument est une mesure de l'angle orienté $(\\overrightarrow{AB}, \\overrightarrow{AC})$."
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
        "content": "Pour $n \\ge 2$, les solutions de $z^n = 1$ sont les $n$ nombres :\n$$\\omega_k = e^{\\frac{2ik\\pi}{n}}, \\quad k \\in \\{0, 1, \\dots, n - 1\\}$$\n• Leurs images sont les sommets d'un **polygone régulier** à $n$ côtés inscrit dans le cercle unité.\n• (Approfondissement) Leur somme est nulle : $1 + \\omega_1 + \\dots + \\omega_{n-1} = 0$, car c'est la somme des termes d'une suite géométrique de raison $\\omega_1 \\ne 1$ : elle vaut $\\frac{1 - \\omega_1^n}{1 - \\omega_1} = 0$.\n• Cas $n = 3$ : $1$, $j = e^{\\frac{2i\\pi}{3}} = -\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$ et $j^2 = \\bar{j}$, avec $1 + j + j^2 = 0$ (triangle équilatéral)."
      },
      {
        "title": "6. Démonstrations : $|z|^2 = z\\bar{z}$, module d'un produit, d'une puissance ; ensemble $\\mathbb{U}$",
        "content": "• Pour $z = a + ib$ : $z\\bar{z} = (a + ib)(a - ib) = a^2 - (ib)^2 = a^2 + b^2 = |z|^2$.\n• **Produit** : $|zz'|^2 = zz'\\,\\overline{zz'} = zz'\\,\\bar{z}\\,\\bar{z'} = (z\\bar{z})(z'\\bar{z'}) = |z|^2|z'|^2$ (conjugué d'un produit, TX1). Les modules étant positifs, $|zz'| = |z| \\times |z'|$.\n• **Puissance** : par récurrence, $|z^0| = 1 = |z|^0$ et, si $|z^k| = |z|^k$, alors $|z^{k+1}| = |z^k \\times z| = |z^k| \\times |z| = |z|^{k+1}$.\n• **Ensemble $\\mathbb{U}$** des complexes de module $1$ : si $|z| = |z'| = 1$, alors $|zz'| = 1$ et $\\left|\\frac{1}{z}\\right| = \\frac{1}{|z|} = 1$ : $\\mathbb{U}$ est stable par produit et par passage à l'inverse. Ses éléments s'écrivent $e^{i\\theta}$, $\\theta \\in \\mathbb{R}$ ; leurs images forment le cercle trigonométrique."
      },
      {
        "title": "7. Démonstration : une formule d'addition (à partir du produit scalaire)",
        "content": "Dans un repère orthonormé $(O ; \\vec{i}, \\vec{j})$, soient $\\vec{u}(\\cos a ; \\sin a)$ et $\\vec{v}(\\cos b ; \\sin b)$ : ce sont des vecteurs unitaires tels que $(\\vec{i}, \\vec{u}) = a$ et $(\\vec{i}, \\vec{v}) = b$, donc $(\\vec{v}, \\vec{u}) = a - b$ (modulo $2\\pi$).\n• Avec les coordonnées : $\\vec{u} \\cdot \\vec{v} = \\cos a \\cos b + \\sin a \\sin b$.\n• Avec la définition géométrique : $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\cos(a - b) = \\cos(a - b)$.\n• Donc $\\cos(a - b) = \\cos a \\cos b + \\sin a \\sin b$.\n**Conséquences** : en remplaçant $b$ par $-b$, $\\cos(a + b) = \\cos a \\cos b - \\sin a \\sin b$ ; avec $\\sin(x) = \\cos\\left(\\frac{\\pi}{2} - x\\right)$, $\\sin(a + b) = \\cos\\left(\\left(\\frac{\\pi}{2} - a\\right) - b\\right) = \\sin a \\cos b + \\cos a \\sin b$. En développant $(\\cos a + i\\sin a)(\\cos b + i\\sin b)$, ces formules donnent la relation $e^{ia} \\times e^{ib} = e^{i(a + b)}$."
      },
      {
        "title": "8. Démonstration : ensemble $\\mathbb{U}_n$ des racines $n$-ièmes de l'unité",
        "content": "Soit $n \\ge 2$. Le nombre $0$ n'est pas solution de $z^n = 1$ ; on écrit donc $z = re^{i\\theta}$ avec $r > 0$.\n• $z^n = 1 \\iff r^n e^{in\\theta} = 1 \\times e^{i0} \\iff r^n = 1$ et $n\\theta = 2k\\pi$ ($k \\in \\mathbb{Z}$) $\\iff r = 1$ et $\\theta = \\dfrac{2k\\pi}{n}$, $k \\in \\mathbb{Z}$ (car $r > 0$).\n• Les complexes $\\omega_k = e^{\\frac{2ik\\pi}{n}}$ ne dépendent que du reste de $k$ modulo $n$, car $\\omega_{k+n} = \\omega_k \\times e^{2i\\pi} = \\omega_k$. De plus, pour $0 \\le k < k' \\le n - 1$, on a $0 < \\frac{2(k' - k)\\pi}{n} < 2\\pi$, donc $\\omega_k \\ne \\omega_{k'}$.\n• Ainsi $\\mathbb{U}_n = \\left\\{e^{\\frac{2ik\\pi}{n}},\\ k \\in \\{0, 1, \\dots, n - 1\\}\\right\\}$ compte exactement $n$ éléments. Cas particuliers : $\\mathbb{U}_2 = \\{1 ; -1\\}$, $\\mathbb{U}_3 = \\{1 ; j ; j^2\\}$ et $\\mathbb{U}_4 = \\{1 ; i ; -1 ; -i\\}$ (sommets d'un carré)."
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
        "q": "Que signifie l'écriture $e^{i\\theta}$ et comment écrire la forme trigonométrique de $z \\ne 0$ ?",
        "a": "Pour tout réel $\\theta$, $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$. Si $r = |z|$ et si $\\theta$ est un argument de $z$, alors $z = r(\\cos\\theta + i\\sin\\theta) = re^{i\\theta}$."
      },
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
      },
      {
        "q": "Décrire l'ensemble $\\mathbb{U}_4$ des racines quatrièmes de l'unité.",
        "a": "$\\mathbb{U}_4 = \\{1 ; i ; -1 ; -i\\}$ : les sommets d'un carré inscrit dans le cercle unité."
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
        "content": "Si $a \\equiv b \\pmod{n}$ et $c \\equiv d \\pmod{n}$, alors :\n• $a + c \\equiv b + d \\pmod{n}$\n• $a \\times c \\equiv b \\times d \\pmod{n}$\n• $a^k \\equiv b^k \\pmod{n}$ pour tout entier $k \\ge 1$.\n**Démonstration** : $(a + c) - (b + d) = (a - b) + (c - d)$ et $ac - bd = a(c - d) + d(a - b)$ ; comme $n$ divise $a - b$ et $c - d$, il divise ces combinaisons. La règle des puissances s'en déduit par récurrence sur $k$ (on multiplie $a^k \\equiv b^k$ par $a \\equiv b$)."
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
      },
      {
        "title": "6. Inverse de $a$ modulo $n$",
        "content": "• **Définition** : soit $n \\ge 2$. Un entier $a'$ est **un inverse de $a$ modulo $n$** si $aa' \\equiv 1 \\pmod{n}$. Exemple : $3 \\times 5 = 15 \\equiv 1 \\pmod{7}$, donc $5$ est un inverse de $3$ modulo $7$ ; les entiers $5 + 7k$, $k \\in \\mathbb{Z}$, le sont aussi.\n• **Recherche** : on dresse la table des restes de $a \\times x$ modulo $n$ pour $x = 1, 2, \\dots, n - 1$ et on lit la valeur de $x$ qui donne $1$.\n• **Existence** : $a$ admet un inverse modulo $n$ si et seulement si $\\text{PGCD}(a, n) = 1$ (conséquence du théorème de Bézout, chapitre TX4). Par exemple, $2$ n'a pas d'inverse modulo $4$ : pour tout entier $x$, $2x - 1$ est impair, donc n'est jamais un multiple de $4$.\n• **Utilisation** : si $a'$ est un inverse de $a$ modulo $n$, alors $ax \\equiv b \\pmod{n} \\iff x \\equiv a'b \\pmod{n}$ (on multiplie par $a'$ dans un sens, par $a$ dans l'autre). C'est ce qui remplace la division, interdite dans les congruences. Exemple : $4 \\times 7 = 28 \\equiv 1 \\pmod{9}$, donc $7$ est un inverse de $4$ modulo $9$ et $4x \\equiv 3 \\pmod{9} \\iff x \\equiv 7 \\times 3 = 21 \\equiv 3 \\pmod{9}$ ; on vérifie $4 \\times 3 = 12 \\equiv 3 \\pmod{9}$."
      },
      {
        "title": "7. Démonstration : existence et unicité de la division euclidienne",
        "content": "Soient $a \\in \\mathbb{Z}$ et $b \\in \\mathbb{N}^*$.\n• **Existence** : soit $q$ le plus grand entier tel que $bq \\le a$ (c'est la partie entière de $\\frac{a}{b}$). Alors $bq \\le a < b(q + 1)$, et $r = a - bq$ vérifie $0 \\le r < b$.\n• **Unicité** : si $a = bq + r = bq' + r'$ avec $0 \\le r < b$ et $0 \\le r' < b$, alors $b(q - q') = r' - r$ avec $-b < r' - r < b$. Le seul multiple de $b$ strictement compris entre $-b$ et $b$ est $0$, donc $r = r'$, puis $q = q'$.\nExemple : pour $a = -17$ et $b = 5$, $5 \\times (-4) = -20 \\le -17 < -15$, donc $q = -4$ et $r = 3$ : $-17 = 5 \\times (-4) + 3$."
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
          "**Conclusion** : Le reste de $3^{2024}$ par 7 est 2. (Lorsque le module est premier et ne divise pas la base, le petit théorème de Fermat, énoncé au chapitre TX4, donne directement une puissance congrue à 1 : ici $3^6 \\equiv 1 \\pmod{7}$.)"
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
      "⚠️ Pas de division dans les congruences : $2x \\equiv 2 \\pmod{4}$ n'entraîne pas $x \\equiv 1 \\pmod{4}$.",
      "⚠️ Pour un entier négatif, attention au quotient : $-17 = 5 \\times (-3) - 2$ n'est **pas** la division euclidienne (reste négatif) ; la bonne écriture est $-17 = 5 \\times (-4) + 3$, de reste $3$."
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
      },
      {
        "q": "Qu'est-ce qu'un inverse de $a$ modulo $n$ ? Donner un inverse de $4$ modulo $9$.",
        "a": "Un entier $a'$ tel que $aa' \\equiv 1 \\pmod{n}$ (il existe si et seulement si $\\text{PGCD}(a, n) = 1$). Comme $4 \\times 7 = 28 = 3 \\times 9 + 1$, $7$ est un inverse de $4$ modulo $9$."
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
      "Connaître les propriétés des nombres premiers : infinité, décomposition, test de primalité.",
      "Démontrer le théorème de Bézout (écriture du PGCD), le théorème de Gauss et l'infinité des nombres premiers ; programmer Euclide étendu et le crible d'Ératosthène."
    ],
    "keyPoints": [
      {
        "title": "1. PGCD et algorithme d'Euclide",
        "content": "• Le **PGCD** de deux entiers $a$ et $b$ non tous deux nuls est le plus grand diviseur commun à $a$ et $b$. $a$ et $b$ sont **premiers entre eux** si $\\text{PGCD}(a, b) = 1$.\n• **Propriété clé** : si $a = bq + r$, alors $\\text{PGCD}(a, b) = \\text{PGCD}(b, r)$. L'**algorithme d'Euclide** enchaîne les divisions euclidiennes ; le PGCD est le **dernier reste non nul**.\n• Les diviseurs communs à $a$ et $b$ sont exactement les diviseurs de leur PGCD, et il existe des entiers $u$, $v$ tels que $au + bv = \\text{PGCD}(a, b)$.\n```python\ndef pgcd(a, b):\n    while b != 0:\n        a, b = b, a % b\n    return a\n```"
      },
      {
        "title": "2. Théorèmes de Bézout et de Gauss",
        "content": "• **Théorème de Bézout** : Deux entiers $a$ et $b$ sont premiers entre eux si et seulement s'il existe $(u, v) \\in \\mathbb{Z}^2$ tel que $au + bv = 1$.\n• **Théorème de Gauss** : Soient $a, b, c \\in \\mathbb{Z}$. Si $a \\mid bc$ et si $\\text{PGCD}(a, b) = 1$, alors $a \\mid c$."
      },
      {
        "title": "3. Conséquences du théorème de Gauss",
        "content": "• Si $a \\mid n$, $b \\mid n$ et $\\text{PGCD}(a, b) = 1$, alors $ab \\mid n$. Exemple : un entier divisible par $4$ et par $9$ est divisible par $36$.\n• Si un nombre premier $p$ divise un produit $ab$, alors $p \\mid a$ ou $p \\mid b$.\n• **Solutions de $ax + by = c$** (avec $\\text{PGCD}(a, b) = 1$) : si $(x_0, y_0)$ est une solution particulière, toutes les solutions sont $x = x_0 - bk$, $y = y_0 + ak$, $k \\in \\mathbb{Z}$.\n• **Inverse modulo $n$** (défini au chapitre TX3 : $aa' \\equiv 1 \\pmod{n}$) : $a$ admet un inverse modulo $n$ si et seulement si $\\text{PGCD}(a, n) = 1$. En effet, si $\\text{PGCD}(a, n) = 1$, Bézout donne $au + nv = 1$, donc $au \\equiv 1 \\pmod{n}$ et $u$ est un inverse de $a$ ; réciproquement, si $aa' = 1 + kn$, alors $aa' + n(-k) = 1$ et Bézout donne $\\text{PGCD}(a, n) = 1$. Exemple : l'algorithme d'Euclide étendu ($40 = 7 \\times 5 + 5$, $7 = 5 \\times 1 + 2$, $5 = 2 \\times 2 + 1$) donne $7 \\times (-17) + 40 \\times 3 = 1$, donc $-17$, ou encore $23$ (car $-17 \\equiv 23 \\pmod{40}$), est un inverse de $7$ modulo $40$ : $7 \\times 23 = 161 = 4 \\times 40 + 1$."
      },
      {
        "title": "4. Nombres premiers",
        "content": "• Un entier $p \\ge 2$ est **premier** s'il admet exactement deux diviseurs positifs : $1$ et $p$. ($1$ n'est pas premier.)\n• **Test** : si $n \\ge 2$ n'est divisible par aucun nombre premier $p$ tel que $p^2 \\le n$, alors $n$ est premier.\n• **Il existe une infinité de nombres premiers** (démonstration rédigée ci-dessous).\n• **Décomposition (théorème admis)** : tout entier $n \\ge 2$ s'écrit de manière unique (à l'ordre près) comme produit de nombres premiers. Exemple : $360 = 2^3 \\times 3^2 \\times 5$.\n• **Pour aller plus loin** (le PPCM ne figure pas au programme d'expertes) : le **PPCM** de deux entiers strictement positifs $a$ et $b$ est leur plus petit multiple commun strictement positif ; les multiples communs à $a$ et $b$ sont exactement les multiples de leur PPCM. Avec les décompositions, le PGCD prend chaque facteur premier commun avec le plus petit exposant, le PPCM chaque facteur premier avec le plus grand exposant, et $\\text{PGCD}(a, b) \\times \\text{PPCM}(a, b) = ab$. Exemple : $24 = 2^3 \\times 3$ et $36 = 2^2 \\times 3^2$ ont pour PGCD $12$ et pour PPCM $72$, et $12 \\times 72 = 864 = 24 \\times 36$."
      },
      {
        "title": "5. Petit théorème de Fermat et cryptographie RSA",
        "content": "• **Petit théorème de Fermat** : Si $p$ est premier et si $p \\nmid a$, alors $a^{p-1} \\equiv 1 \\pmod{p}$. Conséquence : pour tout entier $a$, $a^p \\equiv a \\pmod{p}$.\n• **Chiffrement RSA** (problème d'approfondissement) : repose sur la difficulté algorithmique de factoriser un très grand entier $N = pq$ (produit de deux nombres premiers géants).\n• **RSA miniature** : $p = 5$, $q = 11$, $n = 55$, $(p - 1)(q - 1) = 40$ ; clé publique $e = 3$, clé privée $d = 27$, inverse de $e$ modulo $40$ car $3 \\times 27 = 81 \\equiv 1 \\pmod{40}$. Le message $m = 2$ est chiffré en $2^3 = 8$, et $8^{27} \\equiv 2 \\pmod{55}$ le déchiffre."
      },
      {
        "title": "6. Démonstration : le PGCD s'écrit $au + bv$ (théorème de Bézout)",
        "content": "Soient $a$ et $b$ deux entiers non tous deux nuls, et $E$ l'ensemble des entiers **strictement positifs** de la forme $au + bv$ avec $u, v \\in \\mathbb{Z}$.\n• $E$ est non vide (il contient $a^2 + b^2 = a \\times a + b \\times b > 0$) : il admet donc un plus petit élément $d = au_0 + bv_0$.\n• **$d$ divise $a$** : on écrit $a = dq + r$ avec $0 \\le r < d$. Alors $r = a - dq = a(1 - qu_0) + b(-qv_0)$ est de la forme $au + bv$. Si l'on avait $r > 0$, $r$ serait un élément de $E$ plus petit que $d$ : impossible. Donc $r = 0$ et $d \\mid a$. De même, $d \\mid b$.\n• **$d$ est le plus grand des diviseurs communs** : tout diviseur commun $c$ de $a$ et $b$ divise $au_0 + bv_0 = d$, donc $c \\le d$.\nAinsi $\\text{PGCD}(a, b) = au_0 + bv_0$.\n**Théorème de Bézout** : si $\\text{PGCD}(a, b) = 1$, on obtient $au + bv = 1$. Réciproquement, si $au + bv = 1$, tout diviseur commun positif de $a$ et $b$ divise $1$, donc $\\text{PGCD}(a, b) = 1$."
      },
      {
        "title": "7. Démonstration : théorème de Gauss",
        "content": "Hypothèses : $a \\mid bc$ et $\\text{PGCD}(a, b) = 1$.\n• D'après le théorème de Bézout, il existe des entiers $u$ et $v$ tels que $au + bv = 1$.\n• En multipliant par $c$ : $acu + bcv = c$.\n• $a$ divise $acu$, et $a$ divise $bcv$ car $a \\mid bc$. Donc $a$ divise la somme $acu + bcv$, c'est-à-dire $c$."
      },
      {
        "title": "8. Démonstration : l'ensemble des nombres premiers est infini",
        "content": "• **Lemme** : tout entier $N \\ge 2$ admet au moins un diviseur premier. En effet, le plus petit diviseur $p \\ge 2$ de $N$ est premier : s'il avait un diviseur $d$ avec $1 < d < p$, ce $d$ diviserait aussi $N$ et serait plus petit que $p$.\n• **Raisonnement par l'absurde** : supposons qu'il n'y ait qu'un nombre fini de nombres premiers $p_1, p_2, \\dots, p_k$, et posons $N = p_1 \\times p_2 \\times \\dots \\times p_k + 1 \\ge 3$.\n• D'après le lemme, $N$ admet un diviseur premier, qui est donc l'un des $p_i$. Ce $p_i$ divise $N$ et le produit $p_1 \\times \\dots \\times p_k$, donc il divise leur différence $1$ : c'est impossible car $p_i \\ge 2$.\n• **Conclusion** : il existe une infinité de nombres premiers."
      },
      {
        "title": "9. Pour aller plus loin : une démonstration du petit théorème de Fermat",
        "content": "Soit $p$ premier et $a$ un entier non divisible par $p$ (donc premier avec $p$).\n• Les $p - 1$ entiers $a, 2a, \\dots, (p-1)a$ ont des restes modulo $p$ non nuls (si $p \\mid ka$, Gauss donne $p \\mid k$, impossible pour $1 \\le k \\le p - 1$) et **deux à deux distincts** : si $ka \\equiv k'a \\pmod{p}$, alors $p \\mid (k - k')a$, donc $p \\mid k - k'$, d'où $k = k'$ puisque $|k - k'| < p$.\n• Leurs restes sont donc exactement $1, 2, \\dots, p - 1$, dans un certain ordre. En multipliant : $a \\times 2a \\times \\dots \\times (p-1)a \\equiv 1 \\times 2 \\times \\dots \\times (p-1) \\pmod{p}$, soit $(p-1)!\\,a^{p-1} \\equiv (p-1)! \\pmod{p}$.\n• $p$ divise donc $(p-1)!\\,(a^{p-1} - 1)$ et $p$ est premier avec $(p-1)!$ (aucun facteur n'est divisible par $p$) : d'après Gauss, $p \\mid a^{p-1} - 1$, c'est-à-dire $a^{p-1} \\equiv 1 \\pmod{p}$."
      },
      {
        "title": "10. Algorithmes : couple de Bézout, crible d'Ératosthène, décomposition en facteurs premiers",
        "content": "```python\ndef bezout(a, b):\n    # renvoie (d, u, v) avec d = PGCD(a, b) = a*u + b*v\n    u0, v0, u1, v1 = 1, 0, 0, 1\n    while b != 0:\n        q = a // b\n        a, b = b, a - q * b\n        u0, u1 = u1, u0 - q * u1\n        v0, v1 = v1, v0 - q * v1\n    return a, u0, v0\n\ndef crible(n):\n    est_premier = [True] * (n + 1)\n    est_premier[0] = False\n    est_premier[1] = False\n    for p in range(2, n + 1):\n        if p * p > n:\n            break\n        if est_premier[p]:\n            for m in range(p * p, n + 1, p):\n                est_premier[m] = False\n    return [k for k in range(n + 1) if est_premier[k]]\n\ndef decomposition(n):\n    facteurs = []\n    p = 2\n    while n > 1:\n        while n % p == 0:\n            facteurs.append(p)\n            n = n // p\n        p = p + 1\n    return facteurs\n```\n`bezout(37, 13)` renvoie `(1, 6, -17)`, `crible(30)` renvoie `[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]` et `decomposition(360)` renvoie `[2, 2, 2, 3, 3, 5]`."
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
      },
      {
        "title": "Méthode : Démontrer que deux entiers sont premiers entre eux (Bézout)",
        "example": "Démontrer que pour tout entier naturel $n$, $2n + 1$ et $3n + 2$ sont premiers entre eux.",
        "steps": [
          "**Étape 1 (Éliminer $n$)** : on combine les deux nombres pour faire disparaître $n$ : $3(2n + 1) - 2(3n + 2) = 6n + 3 - 6n - 4 = -1$.",
          "**Étape 2 (Forme de Bézout)** : $(2n + 1) \\times (-3) + (3n + 2) \\times 2 = 1$, avec $u = -3$ et $v = 2$ entiers.",
          "**Conclusion** : d'après le théorème de Bézout, $\\text{PGCD}(2n + 1, 3n + 2) = 1$ pour tout $n$. Exemple : pour $n = 4$, $9$ et $14$ sont bien premiers entre eux."
        ]
      },
      {
        "title": "Méthode : Utiliser le petit théorème de Fermat",
        "example": "Démontrer que pour tout entier $n$, $n^7 - n$ est divisible par $7$.",
        "steps": [
          "**Étape 1 (Cas $7 \\mid n$)** : alors $n \\equiv 0$ et $n^7 \\equiv 0 \\pmod{7}$, donc $n^7 - n \\equiv 0 \\pmod{7}$.",
          "**Étape 2 (Cas $7 \\nmid n$)** : $7$ est premier et ne divise pas $n$, donc d'après le petit théorème de Fermat $n^6 \\equiv 1 \\pmod{7}$ ; en multipliant par $n$, $n^7 \\equiv n \\pmod{7}$.",
          "**Conclusion** : dans tous les cas, $7$ divise $n^7 - n$. Contrôle : $2^7 - 2 = 126 = 7 \\times 18$."
        ]
      }
    ],
    "traps": [
      "⚠️ L'équation $ax + by = c$ n'admet de solutions dans $\\mathbb{Z}^2$ que si $\\text{PGCD}(a, b)$ divise $c$ !",
      "⚠️ Le théorème de Gauss exige $\\text{PGCD}(a, b) = 1$ : $6$ divise $4 \\times 3 = 12$, mais $6$ ne divise ni $4$ ni $3$.",
      "⚠️ Trouver $u$, $v$ tels que $au + bv = d$ ne prouve pas que $d = \\text{PGCD}(a, b)$ (sauf si $d = 1$) : $4 \\times 1 + 6 \\times 1 = 10$, mais $\\text{PGCD}(4, 6) = 2$.",
      "⚠️ $1$ n'est pas un nombre premier (il n'a qu'un seul diviseur positif).",
      "⚠️ Le petit théorème de Fermat exige que $p$ soit **premier** (et ne divise pas $a$) : pour $n = 9$, non premier, $2^{8} = 256 \\equiv 4 \\pmod{9}$ et non $1$."
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
      },
      {
        "q": "Quelle est l'idée de la démonstration du théorème de Gauss ?",
        "a": "Écrire $au + bv = 1$ (Bézout), multiplier par $c$ pour obtenir $acu + bcv = c$, puis remarquer que $a$ divise les deux termes de la somme."
      }
    ]
  },
  "TX5": {
    "title": "TX5 : Calcul matriciel, graphes et chaînes de Markov",
    "domain": "Mathématiques Expertes",
    "objectives": [
      "Effectuer des additions, multiplications matricielles et inverser une matrice carrée d'ordre 2.",
      "Représenter un système d'équations sous la forme matricielle $AX = B$.",
      "Modéliser une situation d'évolution par un graphe probabiliste et déterminer sa distribution invariante.",
      "Modéliser une situation par un graphe et compter des chemins avec les puissances de la matrice d'adjacence.",
      "Étudier l'évolution d'une chaîne de Markov à l'aide de sa matrice de transition.",
      "Démontrer l'interprétation des coefficients de $A^n$ (chemins) et de $P^n$ (transitions) ; représenter une transformation du plan par une matrice."
    ],
    "keyPoints": [
      {
        "title": "1. Matrices : définition et opérations",
        "content": "• Une **matrice** de format $n \\times p$ est un tableau de réels à $n$ lignes et $p$ colonnes ; on note $a_{ij}$ le **coefficient** situé à la ligne $i$ et à la colonne $j$. Une matrice est **carrée** d'ordre $n$ si elle a $n$ lignes et $n$ colonnes ; une **matrice ligne** n'a qu'une ligne, une **matrice colonne** qu'une colonne.\n• **Addition** (matrices de même format) : on additionne les coefficients de même position, $A + B = (a_{ij} + b_{ij})$.\n• **Produit par un réel** : $kA = (k\\,a_{ij})$, chaque coefficient est multiplié par $k$.\n• **Produit de matrices** : le produit $A \\times B$ n'est possible que si le nombre de colonnes de $A$ égale le nombre de lignes de $B$. Si $A$ est de format $n \\times p$ et $B$ de format $p \\times q$, alors $AB$ est de format $n \\times q$ et son coefficient $(i, j)$ est le produit de la ligne $i$ de $A$ par la colonne $j$ de $B$ :\n$$c_{ij} = \\sum_{k=1}^{p} a_{ik}\\, b_{kj}$$\nExemple : $\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}\\begin{pmatrix} 5 \\\\ 6 \\end{pmatrix} = \\begin{pmatrix} 1 \\times 5 + 2 \\times 6 \\\\ 3 \\times 5 + 4 \\times 6 \\end{pmatrix} = \\begin{pmatrix} 17 \\\\ 39 \\end{pmatrix}$.\n• **Règles de calcul** (quand les produits existent) : $(AB)C = A(BC)$, $A(B + C) = AB + AC$ et $(A + B)C = AC + BC$. En général, $AB \\neq BA$ (non-commutativité)."
      },
      {
        "title": "2. Matrice identité, inverse et puissances",
        "content": "• La **matrice identité** d'ordre $n$, notée $I_n$, est la matrice carrée d'ordre $n$ dont les coefficients diagonaux valent $1$ et les autres $0$ ; par exemple $I_2 = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$. Pour toute matrice carrée $A$ d'ordre $n$, $AI_n = I_nA = A$.\n• Une matrice carrée $A$ d'ordre $n$ est **inversible** s'il existe une matrice carrée $B$ d'ordre $n$ telle que $AB = BA = I_n$. Cette matrice, unique, est l'**inverse** de $A$ ; on la note $A^{-1}$.\n• **Ordre 2** : pour $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, on pose $\\det(A) = ad - bc$ (déterminant de $A$). La matrice $A$ est inversible si et seulement si $\\det(A) \\neq 0$, et alors :\n$$A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$\n• **Puissances** d'une matrice carrée : $A^0 = I_n$ et, pour tout entier naturel $k$, $A^{k+1} = A^k \\times A$."
      },
      {
        "title": "3. Graphes et matrice d'adjacence",
        "content": "• Un **graphe** est formé de sommets reliés par des arêtes (orientées ou non). L'**ordre** est le nombre de sommets ; le **degré** d'un sommet est le nombre d'arêtes dont il est une extrémité (pour un graphe non orienté).\n• Une **chaîne** (ou chemin) de longueur $n$ est une suite de $n$ arêtes consécutives ; un graphe est **connexe** si deux sommets quelconques sont reliés par une chaîne ; il est **complet** si tous ses sommets sont adjacents deux à deux.\n• La **matrice d'adjacence** $A$ d'un graphe d'ordre $p$ est la matrice carrée dont le coefficient $a_{ij}$ est le nombre d'arêtes allant du sommet $i$ au sommet $j$.\n• **Théorème** : le coefficient $(i, j)$ de $A^n$ est le **nombre de chemins de longueur $n$** allant de $i$ à $j$."
      },
      {
        "title": "4. Chaînes de Markov et distributions invariantes",
        "content": "• Un **graphe probabiliste** est un graphe orienté dont chaque arête porte un poids égal à une probabilité, la somme des poids des arêtes issues d'un même sommet valant $1$. Les sommets sont les états, les poids sont les probabilités de transition d'un état à l'autre.\n• Une **chaîne de Markov** sur un ensemble fini d'états est une suite de variables aléatoires $(X_n)$ telle que la probabilité de passer de l'état $i$ à l'état $j$, $p_{ij} = P_{\\{X_n = i\\}}(X_{n+1} = j)$, ne dépend ni de $n$ ni des états antérieurs.\n• La **matrice de transition** $P = (p_{ij})$ est **stochastique** : coefficients positifs, somme de chaque ligne égale à $1$.\n• Si $\\pi_n$ est la matrice ligne de la loi de $X_n$ (et $\\pi_0$ la **distribution initiale**), alors $\\pi_{n+1} = \\pi_n P$ et $\\pi_n = \\pi_0 P^n$.\n• Une **distribution invariante** est une matrice ligne $\\pi$ à coefficients positifs et de somme $1$ telle que $\\pi P = \\pi$.\n• **Cas de deux états** : si $P = \\begin{pmatrix} 1 - a & a \\\\ b & 1 - b \\end{pmatrix}$ avec $0 < a + b < 2$, la suite $(\\pi_n)$ converge vers l'unique distribution invariante $\\pi = \\left(\\dfrac{b}{a + b} \\quad \\dfrac{a}{a + b}\\right)$, quelle que soit la loi initiale.\n• **Cas de trois états** : on pose $\\pi = (x \\quad y \\quad z)$ et l'on résout le système formé par les trois égalités de coordonnées de $\\pi P = \\pi$ et par $x + y + z = 1$ (voir la méthode ci-dessous)."
      },
      {
        "title": "5. Suites de matrices",
        "content": "• Si $U_{n+1} = AU_n$ (avec $U_n$ matrice colonne), alors $U_n = A^n U_0$ par récurrence.\n• Si $U_{n+1} = AU_n + B$ et si $C$ vérifie $C = AC + B$, alors $V_n = U_n - C$ vérifie $V_{n+1} = AV_n$, donc $U_n = A^n(U_0 - C) + C$.\n• Puissances d'une matrice **diagonale** : $\\begin{pmatrix} a & 0 \\\\ 0 & b \\end{pmatrix}^n = \\begin{pmatrix} a^n & 0 \\\\ 0 & b^n \\end{pmatrix}$. Si $A = QDQ^{-1}$ avec $D$ diagonale et $Q$ inversible (ces matrices sont données par l'énoncé), alors $A^n = QD^nQ^{-1}$."
      },
      {
        "title": "6. Démonstration : nombre de chemins de longueur $n$",
        "content": "On note $a_{ij}^{(n)}$ le coefficient $(i, j)$ de $A^n$ et on raisonne par récurrence sur $n \\ge 1$.\n• **Initialisation** : pour $n = 1$, $a_{ij}$ est le nombre d'arêtes, c'est-à-dire de chemins de longueur $1$, de $i$ à $j$.\n• **Hérédité** : supposons la propriété vraie au rang $n$. Un chemin de longueur $n + 1$ de $i$ à $j$ se décompose de façon unique en un chemin de longueur $n$ de $i$ à un sommet $k$, suivi d'une arête de $k$ à $j$. Pour $k$ fixé, il y en a $a_{ik}^{(n)} \\times a_{kj}$ (principe multiplicatif) ; en additionnant sur tous les sommets $k$ (cas disjoints), le nombre de chemins est\n$$\\sum_{k=1}^{p} a_{ik}^{(n)}\\, a_{kj}$$\nC'est exactement le coefficient $(i, j)$ du produit $A^n \\times A = A^{n+1}$.\n• **Conclusion** : pour tout $n \\ge 1$, le coefficient $(i, j)$ de $A^n$ est le nombre de chemins de longueur $n$ de $i$ à $j$."
      },
      {
        "title": "7. Démonstration : distribution après $n$ transitions d'une chaîne de Markov",
        "content": "• **Une transition** : d'après la formule des probabilités totales, pour chaque état $j$,\n$$P(X_{n+1} = j) = \\sum_{i} P(X_n = i) \\times p_{ij}$$\nce qui s'écrit matriciellement $\\pi_{n+1} = \\pi_n P$.\n• **Récurrence** : $\\pi_0 = \\pi_0 P^0$ et, si $\\pi_n = \\pi_0 P^n$, alors $\\pi_{n+1} = \\pi_n P = \\pi_0 P^{n+1}$. Donc $\\pi_n = \\pi_0 P^n$ pour tout $n \\in \\mathbb{N}$.\n• **Interprétation de $P^n$** : si l'on part de l'état $i$ (distribution initiale avec un $1$ en position $i$ et des $0$ ailleurs), $\\pi_n$ est la ligne $i$ de $P^n$. Le coefficient $(i, j)$ de $P^n$ est donc la probabilité de passer de l'état $i$ à l'état $j$ en $n$ transitions."
      },
      {
        "title": "8. Matrices et transformations du plan",
        "content": "Une transformation du plan qui s'écrit $\\begin{pmatrix} x' \\\\ y' \\end{pmatrix} = A\\begin{pmatrix} x \\\\ y \\end{pmatrix}$ est représentée par la matrice $A$. Exemples :\n• rotation de centre $O$ et d'angle $\\theta$ : $A = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$ ; pour $\\theta = \\frac{\\pi}{2}$, le point $(1 ; 0)$ a pour image $(0 ; 1)$ ;\n• homothétie de centre $O$ et de rapport $k$ : $A = \\begin{pmatrix} k & 0 \\\\ 0 & k \\end{pmatrix}$ ;\n• symétrie par rapport à l'axe des abscisses : $A = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$.\nAppliquer la transformation de matrice $A$, puis celle de matrice $B$, revient à appliquer la transformation de matrice $BA$."
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
        "example": "Chaque jour, un abonné utilise le service $A$ ou le service $B$. S'il utilise $A$, il garde $A$ le lendemain avec probabilité $0{,}9$ ; s'il utilise $B$, il passe à $A$ avec probabilité $0{,}3$. Le jour $0$, $\\pi_0 = (0{,}5 \\quad 0{,}5)$. Calculer $\\pi_2$ puis la distribution invariante.",
        "steps": [
          "**Étape 1 (Matrice de transition)** : $P = \\begin{pmatrix} 0{,}9 & 0{,}1 \\\\ 0{,}3 & 0{,}7 \\end{pmatrix}$ (chaque ligne a pour somme $1$).",
          "**Étape 2 (Évolution)** : $\\pi_1 = \\pi_0 P = (0{,}45 + 0{,}15 \\quad 0{,}05 + 0{,}35) = (0{,}6 \\quad 0{,}4)$, puis $\\pi_2 = \\pi_1 P = (0{,}54 + 0{,}12 \\quad 0{,}06 + 0{,}28) = (0{,}66 \\quad 0{,}34)$.",
          "**Étape 3 (Distribution invariante)** : on cherche $\\pi = (x \\quad y)$ avec $\\pi P = \\pi$ et $x + y = 1$. La première coordonnée donne $0{,}9x + 0{,}3y = x$, soit $0{,}3y = 0{,}1x$, donc $x = 3y$. Avec $x + y = 1$ : $y = 0{,}25$ et $x = 0{,}75$.",
          "**Conclusion** : $\\pi_2 = (0{,}66 \\quad 0{,}34)$ et la distribution invariante est $\\pi = (0{,}75 \\quad 0{,}25)$ : à long terme, $75\\,\\%$ des jours se font avec le service $A$."
        ]
      },
      {
        "title": "Méthode : Déterminer une distribution invariante à trois états",
        "example": "Chaque minute, un robot se déplace entre trois zones $A$, $B$ et $C$ selon la matrice de transition $P = \\begin{pmatrix} 0{,}6 & 0{,}4 & 0 \\\\ 0{,}2 & 0{,}6 & 0{,}2 \\\\ 0 & 0{,}2 & 0{,}8 \\end{pmatrix}$ (états rangés dans l'ordre $A$, $B$, $C$). Déterminer la distribution invariante $\\pi$.",
        "steps": [
          "**Étape 1 (Système)** : on pose $\\pi = (x \\quad y \\quad z)$. L'égalité $\\pi P = \\pi$ donne, coordonnée par coordonnée, $0{,}6x + 0{,}2y = x$, puis $0{,}4x + 0{,}6y + 0{,}2z = y$, puis $0{,}2y + 0{,}8z = z$. On y ajoute $x + y + z = 1$.",
          "**Étape 2 (Réduction)** : la première équation donne $0{,}2y = 0{,}4x$, soit $y = 2x$. La troisième donne $0{,}2y = 0{,}2z$, soit $z = y = 2x$.",
          "**Étape 3 (Normalisation)** : $x + y + z = 1$ devient $x + 2x + 2x = 1$, donc $x = 0{,}2$ et $y = z = 0{,}4$.",
          "**Conclusion** : $\\pi = (0{,}2 \\quad 0{,}4 \\quad 0{,}4)$. Contrôle sur la deuxième équation : $0{,}4 \\times 0{,}2 + 0{,}6 \\times 0{,}4 + 0{,}2 \\times 0{,}4 = 0{,}08 + 0{,}24 + 0{,}08 = 0{,}4 = y$."
        ]
      },
      {
        "title": "Méthode : Calculer les puissances d'une matrice et en déduire une suite",
        "example": "Soit $A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}$. Conjecturer puis démontrer l'expression de $A^n$, et en déduire $U_n$ si $U_{n+1} = AU_n$ et $U_0 = \\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix}$.",
        "steps": [
          "**Étape 1 (Conjecture)** : $A^2 = \\begin{pmatrix} 1 & 4 \\\\ 0 & 1 \\end{pmatrix}$ et $A^3 = \\begin{pmatrix} 1 & 6 \\\\ 0 & 1 \\end{pmatrix}$ : on conjecture $A^n = \\begin{pmatrix} 1 & 2n \\\\ 0 & 1 \\end{pmatrix}$.",
          "**Étape 2 (Récurrence)** : c'est vrai pour $n = 0$ ($A^0 = I_2$). Si $A^k = \\begin{pmatrix} 1 & 2k \\\\ 0 & 1 \\end{pmatrix}$, alors $A^{k+1} = A^k A = \\begin{pmatrix} 1 & 2 + 2k \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} 1 & 2(k+1) \\\\ 0 & 1 \\end{pmatrix}$.",
          "**Étape 3 (Suite)** : $U_n = A^n U_0 = \\begin{pmatrix} 1 \\times 1 + 2n \\times 3 \\\\ 0 \\times 1 + 1 \\times 3 \\end{pmatrix} = \\begin{pmatrix} 1 + 6n \\\\ 3 \\end{pmatrix}$.",
          "**Conclusion** : si $U_n = \\begin{pmatrix} u_n \\\\ v_n \\end{pmatrix}$, alors $u_n = 1 + 6n$ et $v_n = 3$. Contrôle : la relation $U_{n+1} = AU_n$ s'écrit $u_{n+1} = u_n + 2v_n = u_n + 6$."
        ]
      }
    ],
    "traps": [
      "⚠️ La multiplication matricielle n'est **pas commutative** : $AB \\neq BA$ en général !",
      "⚠️ Dans un graphe probabiliste, la somme des probabilités sur chaque ligne de la matrice de transition doit toujours être égale à 1.",
      "⚠️ Avec la convention « matrices lignes » (utilisée ici), on écrit $\\pi_{n+1} = \\pi_n P$ et **pas** $P\\pi_n$ ; avec des matrices colonnes, il faut transposer. Ne pas mélanger les deux conventions.",
      "⚠️ $(A + B)^2 = A^2 + AB + BA + B^2$, qui n'est égal à $A^2 + 2AB + B^2$ que si $AB = BA$.",
      "⚠️ $AB = 0$ n'implique pas $A = 0$ ou $B = 0$ : $\\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}\\begin{pmatrix} 0 & 0 \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$.",
      "⚠️ Une matrice carrée n'est pas toujours inversible : $\\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\end{pmatrix}$ a un déterminant nul. On ne « divise » jamais par une matrice : on multiplie par son inverse, du bon côté."
    ],
    "flashcards": [
      {
        "q": "Quelle condition sur $\\det(A)$ assure l'inversibilité d'une matrice carrée d'ordre $2$ ?",
        "a": "Son déterminant doit être non nul : $\\det(A) \\neq 0$."
      },
      {
        "q": "Quelle équation définit une distribution invariante $\\pi$ d'une chaîne de Markov ?",
        "a": "$\\pi P = \\pi$ avec la somme des composantes égale à 1."
      },
      {
        "q": "Que représente le coefficient $(i, j)$ de $A^n$, où $A$ est la matrice d'adjacence d'un graphe ?",
        "a": "Le nombre de chemins de longueur $n$ allant du sommet $i$ au sommet $j$."
      },
      {
        "q": "Comment déterminer la distribution invariante d'une chaîne de Markov à trois états ?",
        "a": "On pose $\\pi = (x \\quad y \\quad z)$ et l'on résout le système formé par les égalités de coordonnées de $\\pi P = \\pi$ et par $x + y + z = 1$."
      },
      {
        "q": "Quand dit-on qu'une matrice carrée $A$ d'ordre $n$ est inversible ?",
        "a": "S'il existe une matrice carrée $B$ d'ordre $n$ telle que $AB = BA = I_n$ ; on note alors $B = A^{-1}$."
      },
      {
        "q": "Comment s'obtient le coefficient $(i, j)$ du produit $AB$ ?",
        "a": "C'est le produit de la ligne $i$ de $A$ par la colonne $j$ de $B$ : $c_{ij} = \\sum_{k} a_{ik}\\, b_{kj}$."
      },
      {
        "q": "Qu'est-ce qu'une matrice stochastique ?",
        "a": "Une matrice carrée à coefficients positifs dont la somme de chaque ligne vaut $1$."
      },
      {
        "q": "Donner l'inverse de $\\begin{pmatrix} 2 & 1 \\\\ 1 & 1 \\end{pmatrix}$.",
        "a": "Le déterminant vaut $1$, donc l'inverse est $\\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix}$."
      },
      {
        "q": "Pourquoi le coefficient $(i, j)$ de $A^2$ compte-t-il les chemins de longueur $2$ de $i$ à $j$ ?",
        "a": "Il vaut $\\sum_k a_{ik}a_{kj}$ : pour chaque sommet intermédiaire $k$, on multiplie le nombre d'arêtes de $i$ à $k$ par le nombre d'arêtes de $k$ à $j$."
      }
    ]
  },
  "TA8": {
    "title": "TA8 : Compléments sur la dérivation",
    "domain": "Analyse et Fonctions",
    "objectives": [
      "Reconnaître une fonction composée $g \\circ u$ et déterminer son ensemble de définition.",
      "Connaître et appliquer la formule de dérivation $(g \\circ u)' = u' \\times (g' \\circ u)$.",
      "Dériver les formes usuelles $u^n$, $\\sqrt{u}$, $\\frac{1}{u}$, $e^u$, $\\ln(u)$ et $x \\mapsto g(ax + b)$.",
      "Calculer la dérivée seconde $f''$ d'une fonction deux fois dérivable.",
      "Interpréter le signe de $f''$ comme renseignant sur les variations de $f'$.",
      "Étudier les variations d'une fonction composée et déterminer une équation de tangente."
    ],
    "keyPoints": [
      {
        "title": "1. Composée de deux fonctions",
        "content": "Soit $u$ une fonction définie sur un intervalle $I$ et à valeurs dans un intervalle $J$, et $g$ une fonction définie sur $J$.\n• La **composée** de $u$ suivie de $g$ est la fonction $g \\circ u$ définie sur $I$ par $(g \\circ u)(x) = g(u(x))$.\n• On calcule d'abord $u(x)$, puis on applique $g$ au résultat : l'ordre compte, en général $g \\circ u \\neq u \\circ g$.\n• Exemple : avec $u(x) = x^2 + 1$ et $g(X) = \\sqrt{X}$, on a $(g \\circ u)(x) = \\sqrt{x^2 + 1}$, tandis que $(u \\circ g)(x) = (\\sqrt{x})^2 + 1 = x + 1$ pour $x \\ge 0$.\n• Pour déterminer l'ensemble de définition de $g \\circ u$, on cherche les $x$ tels que $u(x)$ appartienne à l'ensemble de définition de $g$."
      },
      {
        "title": "2. Dérivée d'une fonction composée",
        "content": "**Théorème** : si $u$ est dérivable sur $I$ et $g$ dérivable sur $J$ (avec $u(I) \\subset J$), alors $g \\circ u$ est dérivable sur $I$ et\n$$(g \\circ u)'(x) = u'(x) \\times g'(u(x))$$\n**Cas particulier** $g(ax + b)$ : la fonction $x \\mapsto g(ax + b)$ a pour dérivée $x \\mapsto a\\,g'(ax + b)$.\nExemple : $(e^{3x - 1})' = 3e^{3x - 1}$ et $\\left((2x + 5)^4\\right)' = 4 \\times 2 \\times (2x + 5)^3 = 8(2x + 5)^3$."
      },
      {
        "title": "3. Formes usuelles à connaître",
        "content": "Soit $u$ une fonction dérivable sur un intervalle $I$.\n| Fonction | Dérivée | Condition |\n|:---:|:---:|:---:|\n| $u^n$ ($n \\ge 1$ entier) | $n\\,u'\\,u^{n-1}$ | — |\n| $u^n$ ($n \\le -1$ entier) | $n\\,u'\\,u^{n-1}$ | $u$ ne s'annule pas sur $I$ |\n| $\\frac{1}{u}$ | $-\\frac{u'}{u^2}$ | $u$ ne s'annule pas sur $I$ |\n| $\\sqrt{u}$ | $\\frac{u'}{2\\sqrt{u}}$ | $u > 0$ sur $I$ |\n| $e^{u}$ | $u'\\,e^{u}$ | — |\n| $\\ln(u)$ | $\\frac{u'}{u}$ | $u > 0$ sur $I$ |\n\nCes formules sont toutes des cas particuliers de $(g \\circ u)' = u' \\times (g' \\circ u)$ ; par exemple pour $g(X) = \\sqrt{X}$, $g'(X) = \\frac{1}{2\\sqrt{X}}$ donc $(\\sqrt{u})' = u' \\times \\frac{1}{2\\sqrt{u}}$.\nCes formules servent dès les chapitres TA5 ($\\ln u$), TA6 (primitives de formes composées) et TA7 (intégrales) : on peut donc travailler cette partie avant eux."
      },
      {
        "title": "4. Dérivée seconde",
        "content": "• Si $f$ est dérivable sur $I$ et si sa dérivée $f'$ est elle-même dérivable sur $I$, on dit que $f$ est **deux fois dérivable** et on note $f'' = (f')'$ sa **dérivée seconde**.\n• Le signe de $f''$ donne les **variations de $f'$** : si $f'' \\ge 0$ sur $I$, alors $f'$ est croissante sur $I$ ; si $f'' \\le 0$, $f'$ est décroissante.\n• Exemple : $f(x) = x^3 - 3x^2$ donne $f'(x) = 3x^2 - 6x$ et $f''(x) = 6x - 6$ ; $f'$ est décroissante sur $]-\\infty ; 1]$ et croissante sur $[1 ; +\\infty[$, son minimum est $f'(1) = -3$.\n• Interprétation cinématique : si $f(t)$ est une position, $f'(t)$ est la vitesse et $f''(t)$ l'accélération.\n• Le lien entre le signe de $f''$ et la **convexité** de $f$ est étudié dans le chapitre TA4, qui s'appuie sur cette définition : ce point peut donc se travailler avant TA4."
      },
      {
        "title": "5. Applications : variations et tangentes",
        "content": "• **Variations d'une composée** : dans $(g \\circ u)' = u' \\times g'(u)$, il suffit souvent d'étudier le signe de chaque facteur. Par exemple $e^{u} > 0$, donc $(e^u)'$ a le signe de $u'$ : $x \\mapsto e^{u(x)}$ a les mêmes variations que $u$. De même, $\\sqrt{u}$ et $\\ln(u)$ ont les mêmes variations que $u$ (là où elles sont définies).\n• **Tangente** : la tangente à la courbe de $f$ au point d'abscisse $a$ a pour équation $y = f'(a)(x - a) + f(a)$ ; la formule de dérivation des composées permet de calculer $f'(a)$.\n• Vérification numérique en Python d'une dérivée (taux d'accroissement pour un petit $h$) :\n```python\nfrom math import exp\n\ndef f(x):\n    return exp(x**2 - 3*x)\n\ndef derivee_approchee(f, a, h=1e-6):\n    return (f(a + h) - f(a - h)) / (2 * h)\n\nprint(derivee_approchee(f, 1))\n```\nLa valeur affichée est proche de $f'(1) = (2 \\times 1 - 3)e^{1 - 3} = -e^{-2} \\approx -0{,}135$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Dériver une fonction composée",
        "example": "Dériver $f(x) = (x^2 - 3x + 4)^5$ puis $g(x) = \\sqrt{2x^2 + 1}$ sur $\\mathbb{R}$.",
        "steps": [
          "**Étape 1 (Reconnaître la forme)** : $f = u^5$ avec $u(x) = x^2 - 3x + 4$ ; $g = \\sqrt{v}$ avec $v(x) = 2x^2 + 1 > 0$.",
          "**Étape 2 (Dériver la fonction intérieure)** : $u'(x) = 2x - 3$ et $v'(x) = 4x$.",
          "**Étape 3 (Appliquer la formule)** : $f'(x) = 5u'(x)u(x)^4 = 5(2x - 3)(x^2 - 3x + 4)^4$ et $g'(x) = \\frac{v'(x)}{2\\sqrt{v(x)}} = \\frac{4x}{2\\sqrt{2x^2 + 1}} = \\frac{2x}{\\sqrt{2x^2 + 1}}$.",
          "**Conclusion** : on n'oublie jamais le facteur $u'(x)$, dérivée de la fonction « intérieure »."
        ]
      },
      {
        "title": "Méthode : Étudier les variations d'une fonction composée",
        "example": "Étudier les variations de $f(x) = e^{-x^2 + 4x}$ sur $\\mathbb{R}$.",
        "steps": [
          "**Étape 1 (Dérivée)** : $f = e^u$ avec $u(x) = -x^2 + 4x$, $u'(x) = -2x + 4$, donc $f'(x) = (-2x + 4)e^{-x^2 + 4x}$.",
          "**Étape 2 (Signe)** : $e^{-x^2 + 4x} > 0$, donc $f'(x)$ a le signe de $-2x + 4$ : positif pour $x < 2$, négatif pour $x > 2$.",
          "**Étape 3 (Variations)** : $f$ est croissante sur $]-\\infty ; 2]$ et décroissante sur $[2 ; +\\infty[$.",
          "**Conclusion** : $f$ admet un maximum en $2$, égal à $f(2) = e^{4}$."
        ]
      },
      {
        "title": "Méthode : Calculer et exploiter une dérivée seconde",
        "example": "Soit $f(x) = x e^{-x}$ sur $\\mathbb{R}$. Calculer $f''(x)$ et étudier les variations de $f'$.",
        "steps": [
          "**Étape 1 (Dérivée première)** : $f = uv$ avec $u(x) = x$ et $v(x) = e^{-x}$, $v'(x) = -e^{-x}$ : $f'(x) = e^{-x} - xe^{-x} = (1 - x)e^{-x}$.",
          "**Étape 2 (Dérivée seconde)** : $f''(x) = -e^{-x} + (1 - x) \\times (-e^{-x}) = (x - 2)e^{-x}$.",
          "**Étape 3 (Signe de $f''$)** : $e^{-x} > 0$, donc $f''(x) \\ge 0 \\iff x \\ge 2$.",
          "**Conclusion** : $f'$ est décroissante sur $]-\\infty ; 2]$ et croissante sur $[2 ; +\\infty[$ ; son minimum est $f'(2) = -e^{-2}$."
        ]
      },
      {
        "title": "Méthode : Déterminer une tangente à la courbe d'une composée",
        "example": "Déterminer l'équation de la tangente à la courbe de $f(x) = \\ln(x^2 + 1)$ au point d'abscisse $1$.",
        "steps": [
          "**Étape 1 (Image)** : $f(1) = \\ln(2)$.",
          "**Étape 2 (Nombre dérivé)** : $f'(x) = \\frac{2x}{x^2 + 1}$, donc $f'(1) = \\frac{2}{2} = 1$.",
          "**Étape 3 (Équation)** : $y = f'(1)(x - 1) + f(1) = x - 1 + \\ln(2)$.",
          "**Conclusion** : la tangente a pour équation $y = x - 1 + \\ln(2)$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas oublier le facteur $u'$ : $(e^{x^2})' = 2xe^{x^2}$ et non $e^{x^2}$ ; $\\left((3x + 1)^4\\right)' = 12(3x + 1)^3$ et non $4(3x + 1)^3$.",
      "⚠️ $(\\sqrt{u})' = \\frac{u'}{2\\sqrt{u}}$ n'est valable que là où $u > 0$ : la racine carrée n'est pas dérivable en $0$.",
      "⚠️ L'ordre de composition compte : $\\ln(x^2) \\neq (\\ln x)^2$ ; la première a pour dérivée $\\frac{2}{x}$, la seconde $\\frac{2\\ln x}{x}$.",
      "⚠️ Le signe de $f''$ renseigne sur les variations de $f'$, pas sur celles de $f$ : pour les variations de $f$, c'est le signe de $f'$ qu'il faut étudier.",
      "⚠️ Pour calculer $f''$, on dérive l'expression de $f'$ **après** l'avoir simplifiée (factorisation par $e^{u}$ par exemple) : les calculs sont beaucoup plus courts."
    ],
    "flashcards": [
      {
        "q": "Donner la formule de dérivation de $g \\circ u$.",
        "a": "$(g \\circ u)' = u' \\times (g' \\circ u)$, c'est-à-dire $(g(u(x)))' = u'(x)\\,g'(u(x))$."
      },
      {
        "q": "Quelle est la dérivée de $x \\mapsto g(ax + b)$ ?",
        "a": "$x \\mapsto a\\,g'(ax + b)$."
      },
      {
        "q": "Dériver $e^{u}$ et $\\ln(u)$.",
        "a": "$(e^u)' = u'e^u$ et $(\\ln u)' = \\frac{u'}{u}$ (avec $u > 0$)."
      },
      {
        "q": "Dériver $\\sqrt{u}$ et $u^n$.",
        "a": "$(\\sqrt{u})' = \\frac{u'}{2\\sqrt{u}}$ (avec $u > 0$) et $(u^n)' = n\\,u'\\,u^{n-1}$."
      },
      {
        "q": "Que renseigne le signe de la dérivée seconde $f''$ ?",
        "a": "Les variations de $f'$ : $f'' \\ge 0$ sur $I$ signifie que $f'$ est croissante sur $I$."
      },
      {
        "q": "Calculer $f''(x)$ pour $f(x) = e^{2x}$.",
        "a": "$f'(x) = 2e^{2x}$, puis $f''(x) = 4e^{2x}$."
      }
    ]
  },
  "TA9": {
    "title": "TA9 : Fonctions sinus et cosinus",
    "domain": "Analyse et Fonctions",
    "objectives": [
      "Connaître les dérivées $\\sin' = \\cos$ et $\\cos' = -\\sin$, et dériver $x \\mapsto \\sin(ax + b)$ et $x \\mapsto \\cos(ax + b)$.",
      "Utiliser la parité ($\\cos$ paire, $\\sin$ impaire) et la $2\\pi$-périodicité pour réduire l'intervalle d'étude.",
      "Dresser les tableaux de variations de $\\sin$ et $\\cos$ et tracer leurs courbes.",
      "Pour aller plus loin : justifier, à partir du nombre dérivé de $\\sin$ en $0$, la limite $\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1$ et l'utiliser.",
      "Résoudre sur un intervalle donné les équations $\\sin(x) = a$ et $\\cos(x) = a$, ainsi que des inéquations associées.",
      "Étudier une fonction faisant intervenir $\\sin$ ou $\\cos$ (dérivée, signe, variations)."
    ],
    "keyPoints": [
      {
        "title": "1. Définition, parité et périodicité",
        "content": "Dans un repère orthonormé d'origine $O$, le **cercle trigonométrique** est le cercle de centre $O$ et de rayon $1$, parcouru dans le sens direct (sens inverse des aiguilles d'une montre). En enroulant la droite des réels autour de ce cercle à partir du point $I(1 ; 0)$, on associe à tout réel $x$ un point $M$ du cercle ; les réels $x + 2k\\pi$ ($k \\in \\mathbb{Z}$) sont associés au même point $M$, car un tour complet a pour longueur $2\\pi$. Pour tout réel $x$, $\\cos(x)$ et $\\sin(x)$ sont l'abscisse et l'ordonnée de ce point $M$ (rappel du chapitre 1G1) ; comme $OM = 1$, $\\cos^2(x) + \\sin^2(x) = 1$. Les fonctions $\\cos$ et $\\sin$ sont définies sur $\\mathbb{R}$ et à valeurs dans $[-1 ; 1]$.\n• **Périodicité** : pour tout réel $x$, $\\cos(x + 2\\pi) = \\cos(x)$ et $\\sin(x + 2\\pi) = \\sin(x)$ : les fonctions sont **$2\\pi$-périodiques**. Leurs courbes sont invariantes par la translation de vecteur $2\\pi\\,\\vec{i}$.\n• **Parité** : $\\cos(-x) = \\cos(x)$ : $\\cos$ est **paire** (courbe symétrique par rapport à l'axe des ordonnées) ; $\\sin(-x) = -\\sin(x)$ : $\\sin$ est **impaire** (courbe symétrique par rapport à l'origine).\n• Conséquence : il suffit d'étudier ces fonctions sur $[0 ; \\pi]$, puis de compléter par symétrie et par translation.\n• Plus généralement, $x \\mapsto \\sin(ax + b)$ et $x \\mapsto \\cos(ax + b)$ ($a > 0$) sont périodiques de période $\\frac{2\\pi}{a}$."
      },
      {
        "title": "2. Dérivées",
        "content": "• Les fonctions $\\sin$ et $\\cos$ sont dérivables sur $\\mathbb{R}$ et, pour tout réel $x$ :\n$$\\sin'(x) = \\cos(x) \\qquad \\cos'(x) = -\\sin(x)$$\n• Par composition avec $x \\mapsto ax + b$ : $\\left(\\sin(ax + b)\\right)' = a\\cos(ax + b)$ et $\\left(\\cos(ax + b)\\right)' = -a\\sin(ax + b)$.\n• Plus généralement, si $u$ est dérivable : $(\\sin(u))' = u'\\cos(u)$ et $(\\cos(u))' = -u'\\sin(u)$ (voir le chapitre TA8 sur les composées).\n• Exemple : $f(x) = x\\cos(x)$ donne $f'(x) = \\cos(x) - x\\sin(x)$."
      },
      {
        "title": "3. Variations et courbes",
        "content": "Sur $[0 ; \\pi]$ : $\\cos'(x) = -\\sin(x) \\le 0$ donc $\\cos$ est **décroissante** de $1$ à $-1$ ; $\\sin'(x) = \\cos(x)$ est positive sur $\\left[0 ; \\frac{\\pi}{2}\\right]$ et négative sur $\\left[\\frac{\\pi}{2} ; \\pi\\right]$, donc $\\sin$ croît de $0$ à $1$ puis décroît de $1$ à $0$.\n| $x$ | $-\\pi$ | $-\\frac{\\pi}{2}$ | $0$ | $\\frac{\\pi}{2}$ | $\\pi$ |\n|:---:|:---:|:---:|:---:|:---:|:---:|\n| $\\cos(x)$ | $-1$ ↗ | $0$ ↗ | $1$ ↘ | $0$ ↘ | $-1$ |\n| $\\sin(x)$ | $0$ ↘ | $-1$ ↗ | $0$ ↗ | $1$ ↘ | $0$ |\n• Les courbes de $\\sin$ et $\\cos$ sont des **sinusoïdes** ; la courbe de $\\cos$ se déduit de celle de $\\sin$ par une translation, car $\\cos(x) = \\sin\\left(x + \\frac{\\pi}{2}\\right)$.\n• La tangente à la courbe de $\\sin$ en $0$ a pour équation $y = x$.\n• **Lien entre le cercle et les courbes** : quand $x$ parcourt $[0 ; 2\\pi]$, le point $M$ associé fait un tour du cercle trigonométrique à partir de $I(1 ; 0)$. La courbe de $\\sin$, formée des points $(x ; \\sin(x))$, reporte en fonction de $x$ l'ordonnée de $M$ ; celle de $\\cos$ reporte son abscisse. Par exemple, quand $x$ va de $0$ à $\\frac{\\pi}{2}$, $M$ va de $I$ au point $J(0 ; 1)$ : son ordonnée croît de $0$ à $1$ et son abscisse décroît de $1$ à $0$, ce que montre le tableau ci-dessus. Les symétries du cercle se lisent sur les courbes : les points associés à $x$ et à $-x$ sont symétriques par rapport à l'axe des abscisses, d'où $\\cos(-x) = \\cos(x)$ et $\\sin(-x) = -\\sin(x)$."
      },
      {
        "title": "4. Pour aller plus loin : une limite de référence",
        "content": "**Pour aller plus loin** (cette limite ne figure pas parmi les attendus du programme de spécialité ; elle se déduit directement du nombre dérivé de $\\sin$ en $0$).\nLe taux d'accroissement de $\\sin$ en $0$ est $\\frac{\\sin(x) - \\sin(0)}{x - 0} = \\frac{\\sin(x)}{x}$. Comme $\\sin$ est dérivable en $0$ de nombre dérivé $\\cos(0) = 1$ :\n$$\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1$$\nDe même, $\\lim_{x \\to 0} \\frac{\\cos(x) - 1}{x} = \\cos'(0) = -\\sin(0) = 0$.\nExemple : pour $a \\neq 0$, $\\frac{\\sin(ax)}{x} = a \\times \\frac{\\sin(ax)}{ax}$ tend vers $a$ quand $x$ tend vers $0$."
      },
      {
        "title": "5. Équations $\\cos(x) = a$ et $\\sin(x) = a$",
        "content": "Soit $a \\in [-1 ; 1]$ (sinon il n'y a aucune solution).\n• Si $\\alpha$ est un réel tel que $\\cos(\\alpha) = a$, les solutions réelles de $\\cos(x) = a$ sont les réels $x = \\alpha + 2k\\pi$ ou $x = -\\alpha + 2k\\pi$, $k \\in \\mathbb{Z}$.\n• Si $\\alpha$ est un réel tel que $\\sin(\\alpha) = a$, les solutions réelles de $\\sin(x) = a$ sont les réels $x = \\alpha + 2k\\pi$ ou $x = \\pi - \\alpha + 2k\\pi$, $k \\in \\mathbb{Z}$.\n• Sur un intervalle donné, on ne garde que les solutions qui lui appartiennent, en faisant attention aux bornes (ouvertes ou fermées).\n• Pour une **inéquation** comme $\\cos(x) \\ge a$, on résout d'abord l'équation, puis on lit sur le cercle trigonométrique (ou sur la courbe) les arcs qui conviennent."
      },
      {
        "title": "6. Exploration numérique en Python",
        "content": "On peut estimer le nombre de solutions de $\\cos(x) = a$ sur $[0 ; 2\\pi[$ en repérant les changements de signe de $\\cos(x) - a$ :\n```python\nfrom math import cos, pi\n\ndef nb_changements(a, n=10000):\n    c = 0\n    pas = 2 * pi / n\n    for k in range(n):\n        x = k * pas\n        if (cos(x) - a) * (cos(x + pas) - a) < 0:\n            c = c + 1\n    return c\n\nprint(nb_changements(0.3))\n```\nLe programme affiche $2$ : l'équation $\\cos(x) = 0{,}3$ a deux solutions dans $[0 ; 2\\pi[$, symétriques par rapport à $\\pi$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Résoudre une équation trigonométrique sur un intervalle",
        "example": "Résoudre dans $]-\\pi ; \\pi]$ l'équation $\\sin(x) = -\\frac{\\sqrt{3}}{2}$.",
        "steps": [
          "**Étape 1 (Valeur remarquable)** : $\\sin\\left(-\\frac{\\pi}{3}\\right) = -\\frac{\\sqrt{3}}{2}$, donc on prend $\\alpha = -\\frac{\\pi}{3}$.",
          "**Étape 2 (Solutions générales)** : $x = -\\frac{\\pi}{3} + 2k\\pi$ ou $x = \\pi + \\frac{\\pi}{3} + 2k\\pi = \\frac{4\\pi}{3} + 2k\\pi$, $k \\in \\mathbb{Z}$.",
          "**Étape 3 (Restriction à l'intervalle)** : $-\\frac{\\pi}{3} \\in ]-\\pi ; \\pi]$ ; $\\frac{4\\pi}{3} \\notin ]-\\pi ; \\pi]$ mais $\\frac{4\\pi}{3} - 2\\pi = -\\frac{2\\pi}{3}$ convient.",
          "**Conclusion** : $S = \\left\\{-\\frac{2\\pi}{3} ; -\\frac{\\pi}{3}\\right\\}$."
        ]
      },
      {
        "title": "Méthode : Résoudre une inéquation trigonométrique",
        "example": "Résoudre dans $[0 ; 2\\pi[$ l'inéquation $\\cos(x) > \\frac{1}{2}$.",
        "steps": [
          "**Étape 1 (Équation associée)** : $\\cos(x) = \\frac{1}{2}$ a pour solutions $\\frac{\\pi}{3}$ et $\\frac{5\\pi}{3}$ dans $[0 ; 2\\pi[$.",
          "**Étape 2 (Lecture sur le cercle)** : les points d'abscisse strictement supérieure à $\\frac{1}{2}$ forment l'arc « de droite », qui contient le point associé à $0$.",
          "**Étape 3 (Traduction en intervalles)** : en parcourant $[0 ; 2\\pi[$, cela correspond à $x \\in \\left[0 ; \\frac{\\pi}{3}\\right[$ ou $x \\in \\left]\\frac{5\\pi}{3} ; 2\\pi\\right[$.",
          "**Conclusion** : $S = \\left[0 ; \\frac{\\pi}{3}\\right[ \\cup \\left]\\frac{5\\pi}{3} ; 2\\pi\\right[$ (bornes exclues car l'inégalité est stricte)."
        ]
      },
      {
        "title": "Méthode : Étudier une fonction trigonométrique",
        "example": "Étudier les variations de $f(x) = x - 2\\sin(x)$ sur $[0 ; 2\\pi]$.",
        "steps": [
          "**Étape 1 (Dérivée)** : $f'(x) = 1 - 2\\cos(x)$.",
          "**Étape 2 (Signe)** : $f'(x) \\ge 0 \\iff \\cos(x) \\le \\frac{1}{2} \\iff x \\in \\left[\\frac{\\pi}{3} ; \\frac{5\\pi}{3}\\right]$ (sur $[0 ; 2\\pi]$).",
          "**Étape 3 (Variations)** : $f$ est décroissante sur $\\left[0 ; \\frac{\\pi}{3}\\right]$, croissante sur $\\left[\\frac{\\pi}{3} ; \\frac{5\\pi}{3}\\right]$, puis décroissante sur $\\left[\\frac{5\\pi}{3} ; 2\\pi\\right]$.",
          "**Conclusion** : $f$ admet un minimum local $f\\left(\\frac{\\pi}{3}\\right) = \\frac{\\pi}{3} - \\sqrt{3}$ et un maximum local $f\\left(\\frac{5\\pi}{3}\\right) = \\frac{5\\pi}{3} + \\sqrt{3}$."
        ]
      },
      {
        "title": "Méthode (pour aller plus loin) : Calculer une limite avec $\\frac{\\sin(x)}{x}$",
        "example": "Déterminer $\\lim_{x \\to 0} \\frac{\\sin(5x)}{2x}$.",
        "steps": [
          "**Étape 1 (Faire apparaître la limite de référence)** : pour $x \\neq 0$, $\\frac{\\sin(5x)}{2x} = \\frac{5}{2} \\times \\frac{\\sin(5x)}{5x}$.",
          "**Étape 2 (Changement de variable)** : quand $x \\to 0$, $X = 5x \\to 0$ et $\\frac{\\sin(X)}{X} \\to 1$.",
          "**Conclusion** : $\\lim\\limits_{x \\to 0} \\frac{\\sin(5x)}{2x} = \\frac{5}{2}$."
        ]
      },
      {
        "title": "Méthode : Résoudre une inéquation $\\cos(x) \\le a$ sur $]-\\pi ; \\pi]$",
        "example": "Résoudre dans $]-\\pi ; \\pi]$ l'inéquation $\\cos(x) \\le -\\frac{\\sqrt{2}}{2}$.",
        "steps": [
          "**Étape 1 (Équation associée)** : $\\cos\\left(\\frac{3\\pi}{4}\\right) = -\\frac{\\sqrt{2}}{2}$ ; dans $]-\\pi ; \\pi]$, les solutions de $\\cos(x) = -\\frac{\\sqrt{2}}{2}$ sont $-\\frac{3\\pi}{4}$ et $\\frac{3\\pi}{4}$ (parité de $\\cos$).",
          "**Étape 2 (Lecture sur le cercle)** : les points du cercle d'abscisse inférieure ou égale à $-\\frac{\\sqrt{2}}{2}$ forment l'arc « de gauche », qui contient le point associé à $\\pi$.",
          "**Étape 3 (Traduction en intervalles)** : sur $]-\\pi ; \\pi]$, cet arc correspond à $x \\in \\left]-\\pi ; -\\frac{3\\pi}{4}\\right]$ ou $x \\in \\left[\\frac{3\\pi}{4} ; \\pi\\right]$.",
          "**Conclusion** : $S = \\left]-\\pi ; -\\frac{3\\pi}{4}\\right] \\cup \\left[\\frac{3\\pi}{4} ; \\pi\\right]$ (les bornes $\\pm\\frac{3\\pi}{4}$ sont incluses car l'inégalité est large ; $-\\pi$ n'appartient pas à l'intervalle d'étude)."
        ]
      }
    ],
    "traps": [
      "⚠️ $\\cos' = -\\sin$ (avec un signe moins) mais $\\sin' = \\cos$ : l'erreur de signe est la plus fréquente.",
      "⚠️ Ne pas oublier le facteur $a$ : $\\left(\\cos(3x)\\right)' = -3\\sin(3x)$, et non $-\\sin(3x)$.",
      "⚠️ L'équation $\\cos(x) = a$ a en général **deux** solutions par période ($\\alpha$ et $-\\alpha$) ; pour $\\sin(x) = a$, ce sont $\\alpha$ et $\\pi - \\alpha$ (et non $-\\alpha$).",
      "⚠️ Toujours vérifier l'appartenance des solutions à l'intervalle demandé, en tenant compte des bornes ouvertes ou fermées : sur $[0 ; 2\\pi[$, $2\\pi$ n'est pas solution même si $\\cos(2\\pi) = 1$.",
      "⚠️ (Pour aller plus loin.) La limite $\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1$ suppose $x$ exprimé en **radians**."
    ],
    "flashcards": [
      {
        "q": "Quelles sont les dérivées de $\\sin$ et de $\\cos$ ?",
        "a": "$\\sin' = \\cos$ et $\\cos' = -\\sin$."
      },
      {
        "q": "Dériver $x \\mapsto \\cos(ax + b)$.",
        "a": "$x \\mapsto -a\\sin(ax + b)$."
      },
      {
        "q": "Quelle est la parité de $\\cos$ et de $\\sin$ ?",
        "a": "$\\cos$ est paire ($\\cos(-x) = \\cos(x)$), $\\sin$ est impaire ($\\sin(-x) = -\\sin(x)$)."
      },
      {
        "q": "Quelle est la période de $x \\mapsto \\sin(4x)$ ?",
        "a": "$\\frac{2\\pi}{4} = \\frac{\\pi}{2}$."
      },
      {
        "q": "Pour aller plus loin : que vaut $\\lim_{x \\to 0} \\frac{\\sin(x)}{x}$ ?",
        "a": "$1$ : c'est le nombre dérivé de $\\sin$ en $0$, égal à $\\cos(0)$."
      },
      {
        "q": "Donner les solutions réelles de $\\sin(x) = \\sin(\\alpha)$.",
        "a": "$x = \\alpha + 2k\\pi$ ou $x = \\pi - \\alpha + 2k\\pi$, avec $k \\in \\mathbb{Z}$."
      }
    ]
  },
  "TS3": {
    "title": "TS3 : Dénombrement et combinatoire",
    "domain": "Combinatoire et Dénombrement",
    "objectives": [
      "Utiliser les principes additif (cas disjoints) et multiplicatif (choix successifs) pour dénombrer.",
      "Dénombrer les $k$-uplets d'un ensemble à $n$ éléments : $n^k$ (ordre pris en compte, répétitions permises).",
      "Dénombrer les arrangements $\\frac{n!}{(n-k)!}$ et les permutations $n!$ (ordre pris en compte, sans répétition).",
      "Dénombrer les combinaisons (parties à $k$ éléments) à l'aide du coefficient binomial $\\binom{n}{k}$.",
      "Connaître et démontrer la symétrie $\\binom{n}{k} = \\binom{n}{n-k}$ et la relation de Pascal ; construire le triangle de Pascal.",
      "Savoir qu'un ensemble à $n$ éléments possède $2^n$ parties et utiliser le dénombrement pour calculer des probabilités."
    ],
    "keyPoints": [
      {
        "title": "1. Principes additif et multiplicatif",
        "content": "Soient $A$ et $B$ deux ensembles finis ; on note $\\text{Card}(A)$ le nombre d'éléments de $A$.\n• **Principe additif** : si $A$ et $B$ sont **disjoints** ($A \\cap B = \\emptyset$), alors $\\text{Card}(A \\cup B) = \\text{Card}(A) + \\text{Card}(B)$. On l'utilise pour découper un problème en **cas** qui ne se recouvrent pas.\n• **Principe multiplicatif** : le produit cartésien $A \\times B$ (ensemble des couples $(a ; b)$) a pour cardinal $\\text{Card}(A) \\times \\text{Card}(B)$. On l'utilise pour des **choix successifs** : s'il y a $p$ choix pour une première étape puis $q$ choix pour la seconde, il y a $p \\times q$ issues.\n• **Complémentaire** : si $A \\subset E$, $\\text{Card}(\\overline{A}) = \\text{Card}(E) - \\text{Card}(A)$ ; très utile pour les conditions « au moins un »."
      },
      {
        "title": "2. $k$-uplets : l'ordre compte, répétitions permises",
        "content": "Soit $E$ un ensemble à $n$ éléments et $k \\ge 1$ un entier.\n• Un **$k$-uplet** (ou $k$-liste) de $E$ est une liste ordonnée $(x_1 ; x_2 ; \\dots ; x_k)$ d'éléments de $E$, non nécessairement distincts.\n• **Propriété** : il y a $n^k$ $k$-uplets de $E$ (chaque position offre $n$ choix).\n• Exemples : codes à $4$ chiffres : $10^4 = 10\\,000$ ; tirages successifs **avec remise** de $3$ boules parmi $8$ : $8^3 = 512$ ; mots de $5$ lettres : $26^5$."
      },
      {
        "title": "3. Arrangements et permutations : l'ordre compte, sans répétition",
        "content": "• Pour $n \\in \\mathbb{N}$, **factorielle** $n$ : $n! = 1 \\times 2 \\times \\dots \\times n$, avec la convention $0! = 1$.\n• Un **arrangement** de $k$ éléments de $E$ ($k \\le n$) est un $k$-uplet d'éléments **deux à deux distincts**. Leur nombre est\n$$n \\times (n-1) \\times \\dots \\times (n-k+1) = \\frac{n!}{(n-k)!}$$\n• Une **permutation** de $E$ est un arrangement de ses $n$ éléments : il y en a $n!$.\n• Exemples : podiums (or, argent, bronze) dans une course de $10$ coureurs : $10 \\times 9 \\times 8 = 720$ ; manières de ranger $6$ livres : $6! = 720$ ; tirages successifs **sans remise** de $3$ boules parmi $8$ : $8 \\times 7 \\times 6 = 336$."
      },
      {
        "title": "4. Combinaisons : l'ordre ne compte pas, sans répétition",
        "content": "• Une **combinaison** de $k$ éléments de $E$ est une **partie** de $E$ à $k$ éléments (un sous-ensemble, sans ordre).\n• Le nombre de combinaisons est le **coefficient binomial** $\\binom{n}{k}$ (« $k$ parmi $n$ ») :\n$$\\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!} = \\frac{n \\times (n-1) \\times \\dots \\times (n-k+1)}{k!}$$\n• **Justification** : chaque partie à $k$ éléments donne $k!$ arrangements (en ordonnant ses éléments), donc $\\binom{n}{k} \\times k! = \\frac{n!}{(n-k)!}$.\n• Valeurs utiles : $\\binom{n}{0} = \\binom{n}{n} = 1$, $\\binom{n}{1} = n$, $\\binom{n}{2} = \\frac{n(n-1)}{2}$.\n• Exemples : mains de $5$ cartes dans un jeu de $32$ : $\\binom{32}{5} = 201\\,376$ ; tirages **simultanés** de $3$ boules parmi $8$ : $\\binom{8}{3} = 56$.\n• Le lien avec la loi binomiale (nombre de chemins à $k$ succès dans un arbre) est développé dans le chapitre TS1, qui s'appuie sur les combinaisons : ordre conseillé, TS3 puis TS1."
      },
      {
        "title": "5. Symétrie, relation de Pascal et triangle de Pascal",
        "content": "• **Symétrie** : $\\binom{n}{k} = \\binom{n}{n-k}$ (choisir les $k$ éléments pris revient à choisir les $n-k$ éléments laissés).\n• **Relation de Pascal** : pour $1 \\le k \\le n - 1$,\n$$\\binom{n-1}{k-1} + \\binom{n-1}{k} = \\binom{n}{k}$$\n*Preuve combinatoire* : on fixe un élément $a$ de $E$. Les parties à $k$ éléments contenant $a$ sont au nombre de $\\binom{n-1}{k-1}$, celles qui ne le contiennent pas au nombre de $\\binom{n-1}{k}$ ; ces deux cas sont disjoints.\n• **Triangle de Pascal** : chaque coefficient est la somme des deux coefficients situés juste au-dessus (au-dessus et au-dessus à gauche) :\n| $n$ | $k=0$ | $k=1$ | $k=2$ | $k=3$ | $k=4$ |\n|:---:|:---:|:---:|:---:|:---:|:---:|\n| $1$ | $1$ | $1$ | | | |\n| $2$ | $1$ | $2$ | $1$ | | |\n| $3$ | $1$ | $3$ | $3$ | $1$ | |\n| $4$ | $1$ | $4$ | $6$ | $4$ | $1$ |"
      },
      {
        "title": "6. Nombre de parties d'un ensemble et calcul en Python",
        "content": "• Un ensemble à $n$ éléments possède $2^n$ parties (chaque élément est pris ou non : $2 \\times 2 \\times \\dots \\times 2$).\n• En regroupant les parties selon leur nombre d'éléments : $\\sum_{k=0}^{n} \\binom{n}{k} = 2^n$.\n• Calcul des coefficients binomiaux par la relation de Pascal :\n```python\ndef pascal(n):\n    ligne = [1]\n    for i in range(n):\n        nouvelle = [1]\n        for k in range(1, len(ligne)):\n            nouvelle.append(ligne[k - 1] + ligne[k])\n        nouvelle.append(1)\n        ligne = nouvelle\n    return ligne\n```\n`pascal(4)` renvoie `[1, 4, 6, 4, 1]`, et la somme de cette liste vaut $2^4 = 16$. Le module `math` fournit aussi `factorial(n)` et `comb(n, k)`."
      },
      {
        "title": "7. Démonstration : un ensemble à $n$ éléments possède $2^n$ parties",
        "content": "Soit $E = \\{e_1 ; e_2 ; \\dots ; e_n\\}$.\n• **Par les $n$-uplets** : à chaque partie $A$ de $E$, on associe le $n$-uplet $(c_1 ; \\dots ; c_n)$ de $\\{0 ; 1\\}^n$ où $c_i = 1$ si $e_i \\in A$ et $c_i = 0$ sinon. Chaque partie donne un unique $n$-uplet et chaque $n$-uplet provient d'une unique partie : il y a autant de parties que de $n$-uplets de $\\{0 ; 1\\}$, soit $2^n$ (principe multiplicatif).\n• **Par les tailles** : pour chaque $k \\in \\{0, 1, \\dots, n\\}$, il y a $\\binom{n}{k}$ parties à $k$ éléments, et ces cas sont disjoints. Le principe additif donne $\\sum_{k=0}^{n} \\binom{n}{k} = 2^n$.\nExemple : $E = \\{a ; b ; c\\}$ a $2^3 = 8$ parties : $\\emptyset$, $\\{a\\}$, $\\{b\\}$, $\\{c\\}$, $\\{a ; b\\}$, $\\{a ; c\\}$, $\\{b ; c\\}$ et $E$ ; on retrouve $1 + 3 + 3 + 1 = 8$."
      },
      {
        "title": "8. Démonstration : relation de Pascal par le calcul",
        "content": "Pour $1 \\le k \\le n - 1$ :\n$$\\binom{n-1}{k-1} + \\binom{n-1}{k} = \\frac{(n-1)!}{(k-1)!\\,(n-k)!} + \\frac{(n-1)!}{k!\\,(n-1-k)!}$$\nOn réduit au même dénominateur $k!\\,(n-k)!$ en utilisant $k! = k \\times (k-1)!$ et $(n-k)! = (n-k) \\times (n-k-1)!$ :\n$$= \\frac{(n-1)! \\times k + (n-1)! \\times (n-k)}{k!\\,(n-k)!} = \\frac{(n-1)! \\times n}{k!\\,(n-k)!} = \\frac{n!}{k!\\,(n-k)!} = \\binom{n}{k}$$\nLa preuve combinatoire (par dénombrement) est donnée au point 5."
      },
      {
        "title": "9. Algorithmes : parties à deux ou trois éléments et permutations",
        "content": "```python\ndef parties_2(E):\n    L = []\n    for i in range(len(E)):\n        for j in range(i + 1, len(E)):\n            L.append([E[i], E[j]])\n    return L\n\ndef parties_3(E):\n    L = []\n    for i in range(len(E)):\n        for j in range(i + 1, len(E)):\n            for k in range(j + 1, len(E)):\n                L.append([E[i], E[j], E[k]])\n    return L\n\ndef permutations(E):\n    L = [[]]\n    for x in E:\n        nouvelle = []\n        for p in L:\n            for i in range(len(p) + 1):\n                nouvelle.append(p[:i] + [x] + p[i:])\n        L = nouvelle\n    return L\n```\n`parties_2(['a', 'b', 'c', 'd'])` renvoie les $\\binom{4}{2} = 6$ paires ; `parties_3(['a', 'b', 'c', 'd'])` renvoie les $\\binom{4}{3} = 4$ parties à trois éléments (imposer $i < j < k$ évite d'obtenir plusieurs fois la même partie) ; `permutations([1, 2, 3])` renvoie les $3! = 6$ permutations (chaque nouvel élément est inséré à toutes les places possibles). Pour tirer une permutation au hasard, on peut utiliser la fonction `shuffle` du module `random`."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Choisir le bon modèle de dénombrement",
        "example": "Une urne contient $10$ boules numérotées. On tire $3$ boules : (a) successivement avec remise ; (b) successivement sans remise ; (c) simultanément. Combien de tirages possibles dans chaque cas ?",
        "steps": [
          "**Étape 1 (L'ordre compte-t-il ?)** : dans (a) et (b), on obtient une liste ordonnée ; dans (c), un ensemble de boules : l'ordre ne compte pas.",
          "**Étape 2 (Répétitions ?)** : seul le tirage avec remise (a) permet d'obtenir plusieurs fois la même boule.",
          "**Étape 3 (Calculs)** : (a) $3$-uplets : $10^3 = 1\\,000$ ; (b) arrangements : $10 \\times 9 \\times 8 = 720$ ; (c) combinaisons : $\\binom{10}{3} = \\frac{720}{3!} = 120$.",
          "**Conclusion** : on retient le tableau « ordre / répétition » : $n^k$ (oui / oui), $\\frac{n!}{(n-k)!}$ (oui / non), $\\binom{n}{k}$ (non / non)."
        ]
      },
      {
        "title": "Méthode : Dénombrer avec une condition « exactement » ou « au moins »",
        "example": "Un groupe compte $7$ filles et $5$ garçons. On forme une délégation de $4$ personnes. Combien de délégations comportent exactement $2$ filles ? au moins une fille ?",
        "steps": [
          "**Étape 1 (Exactement 2 filles)** : on choisit $2$ filles parmi $7$, puis $2$ garçons parmi $5$ (principe multiplicatif) : $\\binom{7}{2} \\times \\binom{5}{2} = 21 \\times 10 = 210$.",
          "**Étape 2 (Total)** : le nombre total de délégations est $\\binom{12}{4} = 495$.",
          "**Étape 3 (Au moins une fille, par le contraire)** : le contraire est « aucune fille », soit $\\binom{5}{4} = 5$ délégations. Donc $495 - 5 = 490$.",
          "**Conclusion** : $210$ délégations avec exactement $2$ filles, $490$ avec au moins une fille."
        ]
      },
      {
        "title": "Méthode : Dénombrer les anagrammes d'un mot",
        "example": "Combien d'anagrammes (ayant un sens ou non) le mot « BANANE » possède-t-il ?",
        "steps": [
          "**Étape 1 (Lettres distinguées)** : si les $6$ lettres étaient distinctes, il y aurait $6! = 720$ permutations.",
          "**Étape 2 (Lettres répétées)** : le A apparaît $2$ fois et le N $2$ fois ; échanger deux lettres identiques ne change pas le mot, donc chaque anagramme est comptée $2! \\times 2! = 4$ fois.",
          "**Étape 3 (Calcul)** : $\\frac{6!}{2! \\times 2!} = \\frac{720}{4} = 180$.",
          "**Conclusion** : le mot « BANANE » a $180$ anagrammes. Autre méthode : on place les A ($\\binom{6}{2}$), puis les N ($\\binom{4}{2}$), puis B et E ($2!$) : $15 \\times 6 \\times 2 = 180$."
        ]
      },
      {
        "title": "Méthode : Calculer une probabilité par dénombrement",
        "example": "On tire simultanément $5$ cartes d'un jeu de $32$ cartes (qui contient $4$ as). Quelle est la probabilité d'obtenir exactement $2$ as ?",
        "steps": [
          "**Étape 1 (Univers)** : les mains sont des combinaisons de $5$ cartes parmi $32$, toutes équiprobables : $\\binom{32}{5} = 201\\,376$ issues.",
          "**Étape 2 (Cas favorables)** : $2$ as parmi $4$ et $3$ autres cartes parmi $28$ : $\\binom{4}{2} \\times \\binom{28}{3} = 6 \\times 3\\,276 = 19\\,656$.",
          "**Étape 3 (Probabilité)** : $P = \\frac{19\\,656}{201\\,376} \\approx 0{,}098$.",
          "**Conclusion** : on a un peu moins d'une chance sur dix d'obtenir exactement deux as."
        ]
      }
    ],
    "traps": [
      "⚠️ Avant tout calcul, se demander : **l'ordre compte-t-il ?** et **les répétitions sont-elles possibles ?** Un tirage simultané se modélise par une combinaison, un tirage successif par une liste.",
      "⚠️ Ne pas confondre $n^k$ (nombre de $k$-uplets) et $k^n$ : pour un code de $4$ chiffres, il y a $10^4$ possibilités, pas $4^{10}$.",
      "⚠️ Le principe additif exige des cas **disjoints** : pour « au moins un », on additionne les cas « exactement 1 », « exactement 2 »… ou, plus simplement, on passe par le **contraire**.",
      "⚠️ $0! = 1$ (et non $0$) : ainsi $\\binom{n}{0} = \\frac{n!}{0!\\,n!} = 1$, ce qui correspond à l'unique partie vide.",
      "⚠️ Dans « exactement 2 as », il ne faut pas oublier de choisir les **autres** cartes parmi les cartes qui ne sont **pas** des as ($28$ et non $32$)."
    ],
    "flashcards": [
      {
        "q": "Combien y a-t-il de $k$-uplets d'un ensemble à $n$ éléments ?",
        "a": "$n^k$ (ordre pris en compte, répétitions permises)."
      },
      {
        "q": "Combien y a-t-il d'arrangements de $k$ éléments parmi $n$ ?",
        "a": "$\\frac{n!}{(n-k)!} = n(n-1)\\dots(n-k+1)$."
      },
      {
        "q": "Donner la formule de $\\binom{n}{k}$ à l'aide de factorielles.",
        "a": "$\\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!}$."
      },
      {
        "q": "Énoncer la relation de Pascal.",
        "a": "$\\binom{n-1}{k-1} + \\binom{n-1}{k} = \\binom{n}{k}$ pour $1 \\le k \\le n-1$."
      },
      {
        "q": "Combien de parties possède un ensemble à $n$ éléments ?",
        "a": "$2^n$, et $\\sum_{k=0}^{n} \\binom{n}{k} = 2^n$."
      },
      {
        "q": "Combien de façons de ranger $5$ objets distincts en ligne ?",
        "a": "$5! = 120$."
      },
      {
        "q": "Pourquoi un ensemble à $n$ éléments a-t-il $2^n$ parties ?",
        "a": "Une partie correspond à un $n$-uplet de $0$ et de $1$ (chaque élément est pris ou non) ; il y a $2^n$ tels $n$-uplets."
      }
    ]
  },
  "TS4": {
    "title": "TS4 : Algorithmique et programmation en Python : listes, seuils, dichotomie et méthode de Monte-Carlo",
    "domain": "Algorithmique et Programmation",
    "objectives": [
      "Écrire des fonctions Python qui construisent, parcourent ou filtrent des listes (compréhension, `sum`, `max`, `len`, recherche d'un élément).",
      "Utiliser l'affectation simultanée `a, b = b, a + b` pour programmer une suite récurrente d'ordre 2.",
      "Programmer un algorithme de seuil, y compris pour déterminer un rang à partir duquel $|u_n - \\ell| \\le 10^{-p}$.",
      "Encadrer une solution d'une équation $f(x) = 0$ par dichotomie et déterminer le nombre d'étapes nécessaires pour une précision donnée.",
      "Mettre en œuvre la méthode de Monte-Carlo pour estimer une aire, une intégrale ou le nombre $\\pi$.",
      "Analyser un programme : terminaison d'une boucle, valeur renvoyée, précision du résultat."
    ],
    "keyPoints": [
      {
        "title": "1. Listes et fonctions : rappels et compléments",
        "content": "• Création en compréhension avec filtre : `[k for k in range(1, 50) if k % 7 == 3]` donne `[3, 10, 17, 24, 31, 38, 45]`.\n• Fonctions prédéfinies : `len(L)`, `sum(L)`, `max(L)`, `min(L)` ; `L.append(x)` ajoute un élément ; `L[-1]` est le dernier élément.\n• Une fonction peut renvoyer une liste, ou s'interrompre dès qu'un résultat est trouvé :\n```python\ndef position(L, v):\n    for i in range(len(L)):\n        if L[i] == v:\n            return i      # sortie immédiate\n    return -1             # v absent de L\n```\n• **Affectation simultanée** : dans `a, b = b, a + b`, le membre de droite est entièrement calculé **avant** les affectations (suite de Fibonacci)."
      },
      {
        "title": "2. Suites et algorithmes de seuil",
        "content": "• Si $(u_n)$ tend vers $+\\infty$, la boucle `while u < A:` se termine et fournit le plus petit $n$ tel que $u_n \\ge A$.\n• Si $(u_n)$ converge vers $\\ell$, on peut chercher un rang à partir duquel $u_n$ approche $\\ell$ à $10^{-p}$ près :\n```python\nu = 10\nn = 0\nwhile abs(u - 6) > 0.001:\n    u = 0.5 * u + 3\n    n = n + 1\nprint(n)      # affiche 12\n```\nIci $u_n - 6 = 4 \\times 0{,}5^n$ : on cherche le premier $n$ tel que $4 \\times 0{,}5^n \\le 0{,}001$, soit $2^n \\ge 4000$, d'où $n = 12$. (Voir aussi le chapitre TA2.)\n• Une boucle `while` doit **se terminer** : si la suite ne dépasse jamais le seuil, le programme tourne indéfiniment."
      },
      {
        "title": "3. Méthode de dichotomie",
        "content": "Soit $f$ continue et strictement monotone sur $[a ; b]$ avec $f(a)$ et $f(b)$ de signes contraires : l'équation $f(x) = 0$ a une unique solution $\\alpha$ dans $[a ; b]$ (corollaire du théorème des valeurs intermédiaires, chapitre TA3).\nÀ chaque étape, on calcule le milieu $m$ et on garde la moitié qui contient $\\alpha$ :\n• si $f(a) \\times f(m) \\le 0$, $\\alpha \\in [a ; m]$ : on remplace $b$ par $m$ ;\n• sinon, $\\alpha \\in [m ; b]$ : on remplace $a$ par $m$.\n```python\ndef dichotomie(f, a, b, e):\n    while b - a > e:\n        m = (a + b) / 2\n        if f(a) * f(m) <= 0:\n            b = m\n        else:\n            a = m\n    return a, b\n```\nOn passe la fonction `f` en paramètre (en Python, une fonction est une valeur comme une autre)."
      },
      {
        "title": "4. Précision et nombre d'étapes d'une dichotomie",
        "content": "À chaque étape, la longueur de l'intervalle est **divisée par 2**. Partant de $[a ; b]$, après $n$ étapes, elle vaut $\\frac{b - a}{2^n}$.\nPour obtenir une précision $e$, il faut le plus petit $n$ tel que $\\frac{b - a}{2^n} \\le e$, c'est-à-dire $2^n \\ge \\frac{b - a}{e}$, soit $n \\ge \\frac{\\ln\\left(\\frac{b - a}{e}\\right)}{\\ln 2}$.\nExemple : sur $[1 ; 2]$, pour $e = 0{,}01$, il faut $2^n \\ge 100$, donc $n = 7$ étapes ($2^7 = 128$). Chaque étape fait gagner environ « un tiers de chiffre décimal » : $10$ étapes divisent la longueur par $2^{10} = 1024 \\approx 10^3$."
      },
      {
        "title": "5. Méthode de Monte-Carlo",
        "content": "On tire au hasard $n$ points $(x ; y)$ uniformément dans un rectangle $R$ d'aire $\\mathcal{A}_R$ et on compte le nombre $c$ de points qui tombent dans un domaine $D \\subset R$. D'après la loi des grands nombres :\n$$\\frac{c}{n} \\approx \\frac{\\text{aire}(D)}{\\mathcal{A}_R}$$\n**Estimation de $\\pi$** : avec $x$ et $y$ dans $[0 ; 1[$, la condition $x^2 + y^2 \\le 1$ décrit un quart de disque d'aire $\\frac{\\pi}{4}$.\n```python\nfrom random import random\n\ndef estimation_pi(n):\n    c = 0\n    for i in range(n):\n        x = random()\n        y = random()\n        if x ** 2 + y ** 2 <= 1:\n            c = c + 1\n    return 4 * c / n\n```\n**Estimation d'une intégrale** : si $0 \\le f \\le M$ sur $[0 ; A]$, avec `x = A * random()` et `y = M * random()`, la quantité $A \\times M \\times \\frac{c}{n}$ (où $c$ compte les points tels que $y \\le f(x)$) estime $\\int_0^A f(x)\\,\\mathrm{d}x$."
      },
      {
        "title": "6. Pour aller plus loin : autres méthodes numériques",
        "content": "• **Méthode d'Euler** (chapitre 1A4) : pour approcher la solution de $y' = y$, $y(0) = 1$, on itère $y \\leftarrow y + h \\times y$ avec un petit pas $h$.\n• **Méthode des rectangles** (chapitre TA7) : approximation déterministe d'une intégrale par une somme d'aires de rectangles.\n• **Méthode de Newton** : on remplace la courbe par sa tangente, $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$ ; la convergence est en général beaucoup plus rapide que la dichotomie, mais elle n'est pas garantie.\n• **Méthode de la sécante** : on remplace la courbe par la droite passant par les points d'abscisses $x_{n-1}$ et $x_n$, qui coupe l'axe des abscisses en $x_{n+1} = x_n - f(x_n) \\times \\dfrac{x_n - x_{n-1}}{f(x_n) - f(x_{n-1})}$. Elle n'utilise pas $f'$ ; comme pour Newton, la convergence n'est pas garantie, et il faut que $f(x_n) \\neq f(x_{n-1})$.\n```python\ndef secante(f, a, b, n):\n    for k in range(n):\n        c = b - f(b) * (b - a) / (f(b) - f(a))\n        a, b = b, c\n    return b\n```\n• Comparaison : la dichotomie gagne un facteur $2$ par étape, la méthode de Monte-Carlo a une précision de l'ordre de $\\frac{1}{\\sqrt{n}}$ : pour gagner un chiffre, il faut **100 fois** plus de points."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Encadrer une solution par dichotomie",
        "example": "Montrer que l'équation $x^3 + x - 5 = 0$ admet une unique solution $\\alpha$ dans $[1 ; 2]$, puis l'encadrer à $0{,}01$ près à l'aide d'un programme.",
        "steps": [
          "**Étape 1 (Existence et unicité)** : $f(x) = x^3 + x - 5$ est continue et strictement croissante sur $[1 ; 2]$ (somme de fonctions croissantes, dont une strictement) ; $f(1) = -3 < 0$ et $f(2) = 5 > 0$ : par le corollaire du TVI, $\\alpha$ existe et est unique.",
          "**Étape 2 (Programme)** :\n```python\ndef f(x):\n    return x ** 3 + x - 5\n\na = 1\nb = 2\nwhile b - a > 0.01:\n    m = (a + b) / 2\n    if f(a) * f(m) <= 0:\n        b = m\n    else:\n        a = m\nprint(a, b)\n```",
          "**Étape 3 (Exécution)** : $7$ étapes sont nécessaires ($\\frac{1}{2^7} \\approx 0{,}0078 \\le 0{,}01$) ; le programme affiche `1.515625 1.5234375`.",
          "**Conclusion** : $1{,}515 < \\alpha < 1{,}524$ ; une valeur approchée de $\\alpha$ à $0{,}01$ près est $1{,}52$."
        ]
      },
      {
        "title": "Méthode : Prévoir le nombre d'étapes d'une dichotomie",
        "example": "Combien d'étapes de dichotomie faut-il, à partir d'un intervalle de longueur $2$, pour obtenir un encadrement d'amplitude inférieure ou égale à $10^{-4}$ ?",
        "steps": [
          "**Étape 1 (Longueur après n étapes)** : $\\frac{2}{2^n}$.",
          "**Étape 2 (Inéquation)** : $\\frac{2}{2^n} \\le 10^{-4} \\iff 2^n \\ge 20\\,000 \\iff n \\ge \\frac{\\ln(20\\,000)}{\\ln 2} \\approx 14{,}3$.",
          "**Étape 3 (Vérification)** : $2^{14} = 16\\,384 < 20\\,000 \\le 2^{15} = 32\\,768$.",
          "**Conclusion** : il faut $15$ étapes."
        ]
      },
      {
        "title": "Méthode : Estimer une intégrale par la méthode de Monte-Carlo",
        "example": "Écrire un programme estimant $I = \\int_0^2 x^2\\,\\mathrm{d}x$ et prévoir la valeur autour de laquelle il fluctue.",
        "steps": [
          "**Étape 1 (Rectangle)** : sur $[0 ; 2]$, $0 \\le x^2 \\le 4$ : le domaine sous la courbe est inclus dans le rectangle $[0 ; 2] \\times [0 ; 4]$, d'aire $8$.",
          "**Étape 2 (Programme)** :\n```python\nfrom random import random\n\ndef estimation(n):\n    c = 0\n    for i in range(n):\n        x = 2 * random()\n        y = 4 * random()\n        if y <= x ** 2:\n            c = c + 1\n    return 8 * c / n\n```",
          "**Étape 3 (Valeur théorique)** : $\\frac{c}{n} \\approx \\frac{I}{8}$, donc `estimation(n)` est proche de $I = \\left[\\frac{x^3}{3}\\right]_0^2 = \\frac{8}{3} \\approx 2{,}67$.",
          "**Conclusion** : la valeur renvoyée fluctue autour de $\\frac{8}{3}$, avec des écarts de l'ordre de $\\frac{8}{\\sqrt{n}}$ au plus pour $n$ grand."
        ]
      },
      {
        "title": "Méthode : Approcher une limite avec un programme",
        "example": "La suite définie par $u_0 = 10$ et $u_{n+1} = 0{,}5u_n + 3$ converge vers $6$. Déterminer le premier rang $n$ tel que $|u_n - 6| \\le 10^{-3}$.",
        "steps": [
          "**Étape 1 (Suite auxiliaire)** : $v_n = u_n - 6$ est géométrique de raison $0{,}5$ et $v_0 = 4$, donc $|u_n - 6| = 4 \\times 0{,}5^n$.",
          "**Étape 2 (Programme)** : boucle `while abs(u - 6) > 0.001:` qui calcule le terme suivant et incrémente `n` (voir le point clé 2).",
          "**Étape 3 (Calcul)** : $4 \\times 0{,}5^n \\le 0{,}001 \\iff 2^n \\ge 4000$ ; or $2^{11} = 2048$ et $2^{12} = 4096$.",
          "**Conclusion** : le programme affiche $12$ : à partir du rang $12$, $u_n$ est une valeur approchée de $6$ à $10^{-3}$ près."
        ]
      }
    ],
    "traps": [
      "⚠️ La dichotomie suppose un **changement de signe** de $f$ sur $[a ; b]$ et la continuité de $f$ ; sans hypothèse de monotonie, elle trouve **une** solution, pas forcément la seule.",
      "⚠️ Ne pas confondre le nombre d'étapes et la précision : après $n$ étapes, la longueur est $\\frac{b - a}{2^n}$, et non $\\frac{b - a}{2n}$.",
      "⚠️ Avec la méthode de Monte-Carlo, le résultat est **aléatoire** : deux exécutions donnent des valeurs différentes, et la précision ne s'améliore que lentement (en $\\frac{1}{\\sqrt{n}}$).",
      "⚠️ Les calculs sur les flottants sont approchés : `0.1 + 0.2 == 0.3` vaut `False`. Dans une boucle, préférer une condition d'inégalité (`while b - a > e:`) à un test d'égalité.",
      "⚠️ Dans `a, b = b, a + b`, les deux affectations sont simultanées ; écrire `a = b` puis `b = a + b` donne un tout autre résultat."
    ],
    "flashcards": [
      {
        "q": "Après $n$ étapes de dichotomie à partir de $[a ; b]$, quelle est la longueur de l'intervalle obtenu ?",
        "a": "$\\frac{b - a}{2^n}$."
      },
      {
        "q": "Combien d'étapes de dichotomie faut-il pour passer d'un intervalle de longueur $1$ à une longueur au plus $10^{-3}$ ?",
        "a": "$10$ étapes, car $2^9 = 512 < 1000 \\le 2^{10} = 1024$."
      },
      {
        "q": "Dans l'estimation de $\\pi$ par Monte-Carlo, de quoi la proportion de points vérifiant $x^2 + y^2 \\le 1$ est-elle proche ?",
        "a": "De $\\frac{\\pi}{4}$, l'aire du quart de disque de rayon $1$ (le carré $[0 ; 1]^2$ ayant pour aire $1$)."
      },
      {
        "q": "Que contient la liste `[k for k in range(1, 50) if k % 7 == 3]` ?",
        "a": "`[3, 10, 17, 24, 31, 38, 45]`."
      },
      {
        "q": "Pourquoi utilise-t-on une boucle `while` dans un algorithme de dichotomie avec précision donnée ?",
        "a": "Parce qu'on répète la division de l'intervalle tant que sa longueur dépasse la précision voulue (le nombre d'étapes n'est pas écrit explicitement)."
      },
      {
        "q": "Que vaut `a` après `a, b = 0, 1` puis dix exécutions de `a, b = b, a + b` ?",
        "a": "$55$ (dixième terme de la suite de Fibonacci)."
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
    },
    {
      "id": "TA1-5",
      "tier": 2,
      "type": "mcq",
      "title": "Négation d'une proposition quantifiée",
      "skill": "Écrire la négation d'une proposition comportant « pour tout »",
      "statement": "Soit $(u_n)$ une suite. Quelle est la négation de la proposition « pour tout entier naturel $n$, $u_n \\le 4$ » ?",
      "options": [
        "Il existe un entier naturel $n$ tel que $u_n > 4$.",
        "Pour tout entier naturel $n$, $u_n > 4$.",
        "Il existe un entier naturel $n$ tel que $u_n \\le 4$.",
        "Pour tout entier naturel $n$, $u_n \\ge 4$."
      ],
      "correctIndex": 0,
      "answer": "Il existe un entier naturel $n$ tel que $u_n > 4$.",
      "hint1": "La négation de « pour tout $n$, $P(n)$ » est « il existe $n$ tel que $P(n)$ soit fausse ».",
      "hint2": "Un seul rang $n$ qui ne vérifie pas l'inégalité suffit à rendre la proposition fausse. Écris maintenant le contraire de $u_n \\le 4$.",
      "solution": "La négation de « pour tout $n$, $P(n)$ » est « il existe $n$ tel que non $P(n)$ ». Le contraire de $u_n \\le 4$ est $u_n > 4$. La négation est donc : « il existe un entier naturel $n$ tel que $u_n > 4$ ». La proposition « pour tout $n$, $u_n > 4$ » est plus forte : elle n'est pas la négation (une suite peut ne vérifier ni l'une ni l'autre)."
    },
    {
      "id": "TA1-6",
      "tier": 3,
      "type": "mcq",
      "title": "Raisonnement par contraposée",
      "skill": "Écrire et démontrer la contraposée d'une implication",
      "statement": "Soit $n$ un entier. On veut démontrer l'implication « si $n^2 - 1$ n'est pas divisible par $8$, alors $n$ est pair ». Quelle proposition est la contraposée de cette implication, accompagnée d'une justification correcte ?",
      "options": [
        "Si $n$ est impair, alors $n^2 - 1$ est divisible par $8$ ; vraie, car $n = 2k + 1$ donne $n^2 - 1 = 4k(k + 1)$, et $k(k + 1)$ est pair.",
        "Si $n$ est pair, alors $n^2 - 1$ n'est pas divisible par $8$ ; vraie, car $n^2 - 1$ est alors impair.",
        "Si $n$ est impair, alors $n^2 - 1$ est divisible par $8$ ; vraie, car $n = 2k + 1$ donne $n^2 - 1 = 4k^2 + 4k$, qui est un multiple de $4$.",
        "Si $n^2 - 1$ est divisible par $8$, alors $n$ est impair ; vraie, car $n^2 - 1$ est alors pair, donc $n^2$ et $n$ sont impairs."
      ],
      "correctIndex": 0,
      "answer": "Si $n$ est impair, alors $n^2 - 1$ est divisible par $8$ ; vraie, car $n = 2k + 1$ donne $n^2 - 1 = 4k(k + 1)$, et $k(k + 1)$ est pair.",
      "hint1": "La contraposée de « si $A$, alors $B$ » est « si non $B$, alors non $A$ ».",
      "hint2": "Ici, non $B$ s'écrit « $n$ est impair », c'est-à-dire $n = 2k + 1$ avec $k$ entier. Développe $n^2 - 1$ et factorise par $4$.",
      "solution": "La contraposée est « si $n$ est impair, alors $n^2 - 1$ est divisible par $8$ ». Si $n = 2k + 1$, alors $n^2 - 1 = 4k^2 + 4k = 4k(k + 1)$. Parmi les deux entiers consécutifs $k$ et $k + 1$, l'un est pair, donc $k(k + 1) = 2m$ et $n^2 - 1 = 8m$. La contraposée est vraie, donc l'implication de départ aussi.\nLa deuxième proposition est la réciproque ; la troisième a une justification insuffisante (un multiple de $4$ n'est pas forcément multiple de $8$) ; la quatrième est la réciproque de la contraposée, pas la contraposée."
    },
    {
      "id": "TA1-7",
      "tier": 3,
      "type": "mcq",
      "title": "Négation avec deux quantificateurs",
      "skill": "Écrire la négation d'une proposition comportant deux quantificateurs",
      "statement": "Soit $f$ une fonction définie sur $\\mathbb{R}$. La proposition « $f$ est minorée » s'écrit : « il existe un réel $m$ tel que, pour tout réel $x$, $f(x) \\ge m$ ». Quelle est sa négation ?",
      "options": [
        "Pour tout réel $m$, il existe un réel $x$ tel que $f(x) < m$.",
        "Il existe un réel $m$ tel que, pour tout réel $x$, $f(x) < m$.",
        "Pour tout réel $m$ et pour tout réel $x$, $f(x) < m$.",
        "Il existe un réel $x$ tel que, pour tout réel $m$, $f(x) < m$."
      ],
      "correctIndex": 0,
      "answer": "Pour tout réel $m$, il existe un réel $x$ tel que $f(x) < m$.",
      "hint1": "Pour nier, on remplace chaque « il existe » par « pour tout » et chaque « pour tout » par « il existe », sans changer leur ordre, puis on nie la propriété finale.",
      "hint2": "Le premier quantificateur « il existe un réel $m$ » devient « pour tout réel $m$ ». Traite ensuite le second, puis écris le contraire de $f(x) \\ge m$.",
      "solution": "On échange les quantificateurs en gardant leur ordre : « il existe $m$ » devient « pour tout $m$ », « pour tout $x$ » devient « il existe $x$ », et le contraire de $f(x) \\ge m$ est $f(x) < m$. La négation est : « pour tout réel $m$, il existe un réel $x$ tel que $f(x) < m$ » : aucun réel $m$ n'est un minorant de $f$.\nLa deuxième proposition garde les quantificateurs ; la troisième ne change que le premier ; la quatrième inverse leur ordre et est toujours fausse (il suffit de prendre $m = f(x)$)."
    },
    {
      "id": "TA1-8",
      "tier": 2,
      "type": "mcq",
      "title": "Raisonnement par équivalence",
      "skill": "Vérifier qu'un enchaînement d'équivalences est correct",
      "statement": "Pour un réel $x$ (non nul quand il apparaît au dénominateur, et tel que $x + 2 \\ge 0$ quand il apparaît sous une racine), lequel de ces enchaînements d'équivalences est correct ?",
      "options": [
        "$x^2 = 4x \\iff x(x - 4) = 0 \\iff x = 0$ ou $x = 4$",
        "$x^2 = 4x \\iff x = 4$",
        "$\\sqrt{x + 2} = x \\iff x + 2 = x^2$",
        "$\\dfrac{1}{x} < \\dfrac{1}{2} \\iff x > 2$"
      ],
      "correctIndex": 0,
      "answer": "$x^2 = 4x \\iff x(x - 4) = 0 \\iff x = 0$ ou $x = 4$",
      "hint1": "Chaque équivalence doit se lire dans les deux sens. Pour montrer qu'une équivalence est fausse, cherche une valeur de $x$ qui vérifie un membre et pas l'autre.",
      "hint2": "Essaie $x = 0$ dans la deuxième proposition, $x = -1$ dans la troisième, et un réel négatif dans la quatrième.",
      "solution": "$x^2 = 4x \\iff x^2 - 4x = 0 \\iff x(x - 4) = 0$, et un produit est nul si et seulement si l'un de ses facteurs est nul : $x = 0$ ou $x = 4$. Chaque étape se lit dans les deux sens.\nLes autres sont fausses : $x = 0$ vérifie $x^2 = 4x$ mais pas $x = 4$ (diviser par $x$ suppose $x \\neq 0$) ; $x = -1$ vérifie $x + 2 = x^2$ (les deux membres valent $1$) mais $\\sqrt{-1 + 2} = 1 \\neq -1$ (élever au carré n'est qu'une implication) ; $x = -1$ vérifie $\\frac{1}{x} = -1 < \\frac{1}{2}$ mais pas $x > 2$ (on ne peut passer aux inverses que pour des réels de même signe)."
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
      "hint2": "$\\lim (2/3)^n = 0$ : que devient alors le terme $3\\left(\\frac{2}{3}\\right)^n$ ?",
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
      "hint2": "$l = \\sqrt{2+l}$ donne $l^2 - l - 2 = 0$. Résous cette équation, puis élimine la racine incompatible avec $l \\ge u_0 = 1$.",
      "solution": "1. La suite est croissante et majorée : d'après le théorème de convergence monotone, elle converge vers une limite $l$.\n2. La fonction $f(x) = \\sqrt{2+x}$ est continue sur $[-2 ; +\\infty[$, donc $l$ vérifie $l = f(l)$, soit $l = \\sqrt{2+l}$, d'où $l \\ge 0$ et $l^2 - l - 2 = 0 \\iff (l-2)(l+1) = 0$.\n3. Comme $l \\ge 0$ (et même $l \\ge u_0 = 1$), on obtient $l = 2$.\nErreur fréquente : une suite croissante ne tend pas forcément vers $+\\infty$ ; si elle est majorée, elle converge."
    }
  ],
  "TA3": [
    {
      "id": "TA3-1",
      "tier": 1,
      "type": "mcq",
      "title": "Application du corollaire du TVI",
      "skill": "Vérifier les hypothèses du TVI pour une fonction strictement monotone",
      "statement": "Une fonction $f$ continue et strictement croissante sur $[1 ; 5]$ vérifie $f(1) = -3$ et $f(5) = 7$. Combien de solutions possède l'équation $f(x) = 0$ sur $[1 ; 5]$ ?",
      "options": [
        "Exactement 1 solution",
        "Au moins 2 solutions",
        "0 solution",
        "Une infinité de solutions"
      ],
      "correctIndex": 0,
      "answer": "Exactement 1 solution",
      "hint1": "Pense au corollaire du théorème des valeurs intermédiaires (fonction continue et strictement monotone).",
      "hint2": "Regarde si $0$ est compris entre $f(1) = -3$ et $f(5) = 7$.",
      "solution": "$f$ est continue et strictement monotone sur $[1 ; 5]$. Comme $0 \\in [f(1) ; f(5)]$, d'après le théorème des valeurs intermédiaires appliqué à une fonction strictement monotone (corollaire du TVI), l'équation $f(x) = 0$ admet une unique solution sur $[1 ; 5]$."
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
      "hint2": "Les intervalles de monotonie sont $]-\\infty ; -1]$, $[-1 ; 2]$ et $[2 ; +\\infty[$. Sur chacun, regarde si $0$ est compris entre les valeurs (ou limites) aux bornes.",
      "solution": "La fonction change trois fois de signe : sur $]-\\infty ; -1]$, sur $[-1 ; 2]$, et sur $[2 ; +\\infty[$. Elle est strictement monotone sur chacun de ces trois intervalles. L'équation possède donc exactement 3 solutions réelles."
    },
    {
      "id": "TA3-4",
      "tier": 4,
      "type": "mcq",
      "title": "Pour aller plus loin : continuité et prolongement",
      "skill": "Prolonger une fonction par continuité",
      "statement": "**Pour aller plus loin** (le prolongement par continuité n'est pas un attendu du programme). Soit $g(x) = \\frac{\\sin(3x)}{x}$ pour $x \\ne 0$. Prolonger $g$ par continuité en $0$, c'est choisir $g(0)$ de sorte que la fonction obtenue soit continue en $0$. Quelle valeur de $g(0)$ convient ?",
      "options": [
        "$g(0) = 3$",
        "$g(0) = 1$",
        "$g(0) = 0$",
        "$g(0) = \\frac{1}{3}$"
      ],
      "correctIndex": 0,
      "answer": "$g(0) = 3$",
      "hint1": "On sait que $\\lim_{u \\to 0} \\frac{\\sin(u)}{u} = 1$ (limite de référence, voir le chapitre TA9).",
      "hint2": "Écris $\\frac{\\sin(3x)}{x} = 3 \\times \\frac{\\sin(3x)}{3x}$ et pose $u = 3x$.",
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
      "hint2": "Ici, il s'agit du quotient $\\frac{4x^3}{2x^3}$ : simplifie-le.",
      "solution": "Pour $x$ assez grand, on factorise par $x^3$ : $\\frac{4x^3 - 5x + 1}{2x^3 + 7x^2 - 3} = \\frac{x^3\\left(4 - \\frac{5}{x^2} + \\frac{1}{x^3}\\right)}{x^3\\left(2 + \\frac{7}{x} - \\frac{3}{x^3}\\right)} = \\frac{4 - \\frac{5}{x^2} + \\frac{1}{x^3}}{2 + \\frac{7}{x} - \\frac{3}{x^3}}$. Quand $x \\to +\\infty$, le numérateur tend vers $4$ et le dénominateur vers $2$ : la limite vaut $\\frac{4}{2} = 2$."
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
      "hint1": "Une asymptote verticale se trouve là où le dénominateur s'annule (sans que le numérateur s'annule).",
      "hint2": "Pour l'asymptote horizontale, calcule $\\lim_{x \\to \\pm\\infty} f(x)$ en ne gardant que les termes de plus haut degré : $\\frac{3x}{x}$.",
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
      "hint2": "On obtient $\\frac{(x^2+4x) - x^2}{\\sqrt{x^2+4x} + x} = \\frac{4x}{x\\sqrt{1+4/x} + x} = \\frac{4}{\\sqrt{1+4/x} + 1}$. Passe à la limite.",
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
    },
    {
      "id": "TA3-9",
      "tier": 1,
      "type": "mcq",
      "title": "Traduire une définition de limite",
      "skill": "Reconnaître une limite décrite à l'aide d'intervalles",
      "statement": "On sait que tout intervalle ouvert contenant $2$ contient toutes les valeurs $f(x)$ pour $x$ assez grand. Que peut-on en déduire ?",
      "options": [
        "$\\lim\\limits_{x \\to +\\infty} f(x) = 2$",
        "$\\lim\\limits_{x \\to 2} f(x) = +\\infty$",
        "$\\lim\\limits_{x \\to -\\infty} f(x) = 2$",
        "$f(x) = 2$ pour $x$ assez grand"
      ],
      "correctIndex": 0,
      "answer": "$\\lim\\limits_{x \\to +\\infty} f(x) = 2$",
      "hint1": "Repère ce qui est dit de $x$, puis ce qui est dit des valeurs $f(x)$.",
      "hint2": "« Pour $x$ assez grand » correspond à une limite en $+\\infty$ : il reste à identifier cette limite.",
      "solution": "« Pour $x$ assez grand » indique une limite en $+\\infty$, et « tout intervalle ouvert contenant $2$ » décrit une limite finie égale à $2$ : $\\lim\\limits_{x \\to +\\infty} f(x) = 2$. Cela n'impose pas $f(x) = 2$ : par exemple, $x \\mapsto 2 + \\frac{1}{x}$ vérifie cette propriété sans jamais prendre la valeur $2$."
    },
    {
      "id": "TA3-10",
      "tier": 2,
      "type": "mcq",
      "title": "Seuil à partir duquel les valeurs restent dans un intervalle",
      "skill": "Appliquer la définition d'une limite finie en l'infini",
      "statement": "Soit $f(x) = 3 + \\frac{1}{x}$ sur $]0 ; +\\infty[$. Quel est le plus petit réel $A > 0$ tel que, pour tout $x > A$, on ait $f(x) \\in \\, ]2{,}99 ; 3{,}01[$ ?",
      "options": [
        "$100$",
        "$10$",
        "$0{,}01$",
        "$1\\,000$"
      ],
      "correctIndex": 0,
      "answer": "$100$",
      "hint1": "Pour $x > 0$, on a déjà $f(x) > 3$ : seule l'inégalité $f(x) < 3{,}01$ reste à étudier.",
      "hint2": "Elle équivaut à $\\frac{1}{x} < 0{,}01$ : passe aux inverses, entre nombres strictement positifs.",
      "solution": "Pour $x > 0$, $f(x) > 3 > 2{,}99$. De plus, $f(x) < 3{,}01 \\iff \\frac{1}{x} < 0{,}01 \\iff x > 100$. Le plus petit réel $A$ convenable est donc $100$. Le même calcul avec $r > 0$ à la place de $0{,}01$ donne le seuil $\\frac{1}{r}$ : c'est ce qui prouve que $\\lim\\limits_{x \\to +\\infty} f(x) = 3$."
    },
    {
      "id": "TA3-11",
      "tier": 3,
      "type": "mcq",
      "title": "Limite infinie en un point et intervalles",
      "skill": "Appliquer la définition d'une limite infinie en un réel",
      "statement": "Soit $f(x) = \\frac{1}{(x - 2)^2}$ pour $x \\ne 2$. Pour quels réels $x$ a-t-on $f(x) > 10^4$ ?",
      "options": [
        "$]1{,}99 ; 2[ \\, \\cup \\, ]2 ; 2{,}01[$",
        "$]2 ; 2{,}01[$",
        "$]1{,}9 ; 2[ \\, \\cup \\, ]2 ; 2{,}1[$",
        "$]1{,}9999 ; 2[ \\, \\cup \\, ]2 ; 2{,}0001[$"
      ],
      "correctIndex": 0,
      "answer": "$]1{,}99 ; 2[ \\, \\cup \\, ]2 ; 2{,}01[$",
      "hint1": "Pour $x \\ne 2$, passe aux inverses dans l'inégalité : les deux membres sont strictement positifs.",
      "hint2": "On obtient $(x - 2)^2 < 10^{-4}$ : pense à la valeur absolue pour trouver les $x$ convenables, de part et d'autre de $2$.",
      "solution": "Pour $x \\ne 2$, $f(x) > 10^4 \\iff (x - 2)^2 < 10^{-4} \\iff |x - 2| < 0{,}01$, soit $x \\in \\, ]1{,}99 ; 2[ \\, \\cup \\, ]2 ; 2{,}01[$. En remplaçant $10^4$ par un réel $M > 0$, on obtient $|x - 2| < \\frac{1}{\\sqrt{M}}$ : tout intervalle $]M ; +\\infty[$ contient les valeurs $f(x)$ pour $x$ assez proche de $2$, donc $\\lim\\limits_{x \\to 2} f(x) = +\\infty$ et la droite d'équation $x = 2$ est asymptote verticale."
    },
    {
      "id": "TA3-12",
      "tier": 4,
      "type": "mcq",
      "title": "Limite infinie sans monotonie",
      "skill": "Revenir à la définition d'une limite infinie",
      "statement": "Soit $f(x) = x + 2\\sin(x)$ sur $\\mathbb{R}$. Laquelle de ces affirmations est vraie ?",
      "options": [
        "$\\lim\\limits_{x \\to +\\infty} f(x) = +\\infty$, bien que $f$ ne soit pas monotone sur $[0 ; +\\infty[$",
        "$f$ n'a pas de limite en $+\\infty$, car elle n'est pas monotone sur $[0 ; +\\infty[$",
        "$f$ n'a pas de limite en $+\\infty$, car $\\sin$ n'en a pas",
        "$f$ est croissante sur $[0 ; +\\infty[$, puisqu'elle tend vers $+\\infty$"
      ],
      "correctIndex": 0,
      "answer": "$\\lim\\limits_{x \\to +\\infty} f(x) = +\\infty$, bien que $f$ ne soit pas monotone sur $[0 ; +\\infty[$",
      "hint1": "Minore $f(x)$ par une expression simple, en utilisant un encadrement de $\\sin(x)$.",
      "hint2": "Pour tout réel $x$, $\\sin(x) \\ge -1$. Pour la monotonie, compare le signe de $f'(x) = 1 + 2\\cos(x)$ en $0$ et en $\\pi$.",
      "solution": "Pour tout réel $x$, $\\sin(x) \\ge -1$, donc $f(x) \\ge x - 2$. Pour tout réel $M$, si $x > M + 2$, alors $f(x) > M$ : tout intervalle $]M ; +\\infty[$ contient les valeurs $f(x)$ pour $x$ assez grand, donc $\\lim\\limits_{x \\to +\\infty} f(x) = +\\infty$. Pourtant, $f'(x) = 1 + 2\\cos(x)$ vérifie $f'(0) = 3 > 0$ et $f'(\\pi) = -1 < 0$ : $f$ n'est pas monotone sur $[0 ; +\\infty[$. Une limite infinie n'impose donc aucune monotonie."
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
      "hint2": "Cela équivaut à : $f'$ croissante sur $I$. Quelle condition sur la dérivée de $f'$ traduit cela ?",
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
      "hint2": "$f'(x) = 3x^2 - 12x + 9$, donc $f''(x) = 6x - 12$. Résous $f''(x) = 0$ et vérifie le changement de signe.",
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
    },
    {
      "id": "TA4-5",
      "tier": 1,
      "type": "mcq",
      "title": "Lire la convexité sur la courbe de $f$",
      "skill": "Lire la convexité et un point d'inflexion sur la courbe de $f$",
      "statement": "La courbe ci-dessous représente une fonction $f$ deux fois dérivable sur $[-1 ; 3]$. Le point $A(1 ; 1)$ est son unique point d'inflexion.\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.6rem auto;\"><svg class=\"geo-svg-figure\" role=\"img\" aria-label=\"Courbe de f, d'abord concave puis convexe, avec le point d'inflexion A marqué en (1 ; 1), sur l'intervalle [-1 ; 3]. Elle passe par les points (-1 ; -1), (1 ; 1), (3 ; 3).\" viewBox=\"0 0 180 180\" width=\"180\" height=\"180\" style=\"max-width:330px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"18\" y1=\"162\" x2=\"18\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"42\" y1=\"162\" x2=\"42\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"66\" y1=\"162\" x2=\"66\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"90\" y1=\"162\" x2=\"90\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"114\" y1=\"162\" x2=\"114\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"138\" y1=\"162\" x2=\"138\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"162\" y1=\"162\" x2=\"162\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"162\" x2=\"162\" y2=\"162\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"138\" x2=\"162\" y2=\"138\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"114\" x2=\"162\" y2=\"114\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"90\" x2=\"162\" y2=\"90\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"66\" x2=\"162\" y2=\"66\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"42\" x2=\"162\" y2=\"42\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"18\" x2=\"162\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"114\" x2=\"172\" y2=\"114\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\"/><polygon points=\"0,0 -8,-3.5 -8,3.5\" transform=\"translate(174 114) rotate(0)\" fill=\"var(--text-main, #334155)\"/><line x1=\"66\" y1=\"162\" x2=\"66\" y2=\"8\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\"/><polygon points=\"0,0 -8,-3.5 -8,3.5\" transform=\"translate(66 6) rotate(-90)\" fill=\"var(--text-main, #334155)\"/><text x=\"18\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−2</text><text x=\"42\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−1</text><text x=\"90\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">1</text><text x=\"114\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">2</text><text x=\"138\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">3</text><text x=\"162\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">4</text><text x=\"61\" y=\"165.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−2</text><text x=\"61\" y=\"141.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−1</text><text x=\"61\" y=\"93.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">1</text><text x=\"61\" y=\"69.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">2</text><text x=\"61\" y=\"45.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">3</text><text x=\"61\" y=\"21.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">4</text><text x=\"60\" y=\"127\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">0</text><path d=\"M 42 138 C 44 128 46 119.5 48 112.31 C 50 105.13 52 99.25 54 94.5 C 56 89.75 58 86.13 60 83.44 C 62 80.75 64 79 66 78 C 68 77 70 76.75 72 77.06 C 74 77.38 76 78.25 78 79.5 C 80 80.75 82 82.38 84 84.19 C 86 86 88 88 90 90 C 92 92 94 94 96 95.81 C 98 97.63 100 99.25 102 100.5 C 104 101.75 106 102.63 108 102.94 C 110 103.25 112 103 114 102 C 116 101 118 99.25 120 96.56 C 122 93.88 124 90.25 126 85.5 C 128 80.75 130 74.88 132 67.69 C 134 60.5 136 52 138 42\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.2\"/><circle cx=\"90\" cy=\"90\" r=\"3.6\" fill=\"#dc2626\"/><text x=\"99\" y=\"83\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"700\" fill=\"#dc2626\">A</text></svg></div>\nSur quel intervalle $f$ est-elle convexe ?",
      "options": [
        "$[1 ; 3]$",
        "$[-1 ; 1]$",
        "$[-1 ; 3]$",
        "$[0 ; 2]$"
      ],
      "correctIndex": 0,
      "answer": "$[1 ; 3]$",
      "hint1": "Une fonction est convexe là où sa courbe est au-dessus de ses tangentes, c'est-à-dire tournée vers le haut.",
      "hint2": "Regarde de chaque côté du point $A$ : où la courbe est-elle tournée vers le haut ?",
      "solution": "À gauche de $A$, la courbe est tournée vers le bas (en dessous de ses tangentes) ; à droite de $A$, elle est tournée vers le haut (au-dessus de ses tangentes). Donc $f$ est concave sur $[-1 ; 1]$ et convexe sur $[1 ; 3]$."
    },
    {
      "id": "TA4-6",
      "tier": 2,
      "type": "mcq",
      "title": "Lire la convexité sur la courbe de $f'$",
      "skill": "Déduire la convexité des variations de $f'$ lues sur un graphique",
      "statement": "La courbe ci-dessous représente la **dérivée** $f'$ d'une fonction $f$ deux fois dérivable sur $[-3 ; 3]$.\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.6rem auto;\"><svg class=\"geo-svg-figure\" role=\"img\" aria-label=\"Courbe de f', décroissante puis croissante, avec un minimum en (0 ; -2), sur l'intervalle [-3 ; 3]. Elle passe par les points (-2 ; 0), (0 ; -2), (2 ; 0).\" viewBox=\"0 0 228 204\" width=\"228\" height=\"204\" style=\"max-width:330px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"18\" y1=\"186\" x2=\"18\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"42\" y1=\"186\" x2=\"42\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"66\" y1=\"186\" x2=\"66\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"90\" y1=\"186\" x2=\"90\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"114\" y1=\"186\" x2=\"114\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"138\" y1=\"186\" x2=\"138\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"162\" y1=\"186\" x2=\"162\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"186\" y1=\"186\" x2=\"186\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"210\" y1=\"186\" x2=\"210\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"186\" x2=\"210\" y2=\"186\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"162\" x2=\"210\" y2=\"162\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"138\" x2=\"210\" y2=\"138\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"114\" x2=\"210\" y2=\"114\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"90\" x2=\"210\" y2=\"90\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"66\" x2=\"210\" y2=\"66\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"42\" x2=\"210\" y2=\"42\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"18\" x2=\"210\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"114\" x2=\"220\" y2=\"114\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\"/><polygon points=\"0,0 -8,-3.5 -8,3.5\" transform=\"translate(222 114) rotate(0)\" fill=\"var(--text-main, #334155)\"/><line x1=\"114\" y1=\"186\" x2=\"114\" y2=\"8\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\"/><polygon points=\"0,0 -8,-3.5 -8,3.5\" transform=\"translate(114 6) rotate(-90)\" fill=\"var(--text-main, #334155)\"/><text x=\"18\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−4</text><text x=\"42\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−3</text><text x=\"66\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−2</text><text x=\"90\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−1</text><text x=\"138\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">1</text><text x=\"162\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">2</text><text x=\"186\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">3</text><text x=\"210\" y=\"127\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">4</text><text x=\"109\" y=\"189.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−3</text><text x=\"109\" y=\"165.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−2</text><text x=\"109\" y=\"141.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−1</text><text x=\"109\" y=\"93.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">1</text><text x=\"109\" y=\"69.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">2</text><text x=\"109\" y=\"45.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">3</text><text x=\"109\" y=\"21.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">4</text><text x=\"108\" y=\"127\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">0</text><path d=\"M 42 54 C 44 60 46 65.75 48 71.25 C 50 76.75 52 82 54 87 C 56 92 58 96.75 60 101.25 C 62 105.75 64 110 66 114 C 68 118 70 121.75 72 125.25 C 74 128.75 76 132 78 135 C 80 138 82 140.75 84 143.25 C 86 145.75 88 148 90 150 C 92 152 94 153.75 96 155.25 C 98 156.75 100 158 102 159 C 104 160 106 160.75 108 161.25 C 110 161.75 112 162 114 162 C 116 162 118 161.75 120 161.25 C 122 160.75 124 160 126 159 C 128 158 130 156.75 132 155.25 C 134 153.75 136 152 138 150 C 140 148 142 145.75 144 143.25 C 146 140.75 148 138 150 135 C 152 132 154 128.75 156 125.25 C 158 121.75 160 118 162 114 C 164 110 166 105.75 168 101.25 C 170 96.75 172 92 174 87 C 176 82 178 76.75 180 71.25 C 182 65.75 184 60 186 54\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.2\"/></svg></div>\nSur quel intervalle $f$ est-elle convexe ?",
      "options": [
        "$[0 ; 3]$",
        "$[-3 ; 0]$",
        "$[-2 ; 2]$",
        "$[-3 ; 3]$"
      ],
      "correctIndex": 0,
      "answer": "$[0 ; 3]$",
      "hint1": "$f$ est convexe là où $f'$ est croissante. C'est le sens de variation de $f'$ qui compte, pas son signe.",
      "hint2": "Repère l'abscisse où la courbe de $f'$ passe de décroissante à croissante.",
      "solution": "La fonction $f'$ est décroissante sur $[-3 ; 0]$ et croissante sur $[0 ; 3]$. Donc $f$ est concave sur $[-3 ; 0]$ et convexe sur $[0 ; 3]$. Les abscisses $-2$ et $2$, où $f'$ s'annule, sont celles des extremums de $f$."
    },
    {
      "id": "TA4-7",
      "tier": 3,
      "type": "mcq",
      "title": "Points d'inflexion lus sur la courbe de $f''$",
      "skill": "Repérer les changements de signe de $f''$ sur un graphique",
      "statement": "La courbe ci-dessous représente la **dérivée seconde** $f''$ d'une fonction $f$ deux fois dérivable sur $[-2 ; 4]$.\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.6rem auto;\"><svg class=\"geo-svg-figure\" role=\"img\" aria-label=\"Courbe de f'', qui traverse l'axe des abscisses en 0 et en 2, avec un minimum en x = 1, sur l'intervalle [-2 ; 4]. Elle passe par les points (-2 ; 4), (0 ; 0), (2 ; 0), (4 ; 4).\" viewBox=\"0 0 228 204\" width=\"228\" height=\"204\" style=\"max-width:330px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"18\" y1=\"186\" x2=\"18\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"42\" y1=\"186\" x2=\"42\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"66\" y1=\"186\" x2=\"66\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"90\" y1=\"186\" x2=\"90\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"114\" y1=\"186\" x2=\"114\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"138\" y1=\"186\" x2=\"138\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"162\" y1=\"186\" x2=\"162\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"186\" y1=\"186\" x2=\"186\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"210\" y1=\"186\" x2=\"210\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"186\" x2=\"210\" y2=\"186\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"162\" x2=\"210\" y2=\"162\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"138\" x2=\"210\" y2=\"138\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"114\" x2=\"210\" y2=\"114\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"90\" x2=\"210\" y2=\"90\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"66\" x2=\"210\" y2=\"66\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"42\" x2=\"210\" y2=\"42\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"18\" x2=\"210\" y2=\"18\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><line x1=\"18\" y1=\"138\" x2=\"220\" y2=\"138\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\"/><polygon points=\"0,0 -8,-3.5 -8,3.5\" transform=\"translate(222 138) rotate(0)\" fill=\"var(--text-main, #334155)\"/><line x1=\"90\" y1=\"186\" x2=\"90\" y2=\"8\" stroke=\"var(--text-main, #334155)\" stroke-width=\"1.5\"/><polygon points=\"0,0 -8,-3.5 -8,3.5\" transform=\"translate(90 6) rotate(-90)\" fill=\"var(--text-main, #334155)\"/><text x=\"18\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−3</text><text x=\"42\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−2</text><text x=\"66\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−1</text><text x=\"114\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">1</text><text x=\"138\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">2</text><text x=\"162\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">3</text><text x=\"186\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">4</text><text x=\"210\" y=\"151\" text-anchor=\"middle\" font-size=\"10\" fill=\"var(--text-main, #334155)\">5</text><text x=\"85\" y=\"189.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−2</text><text x=\"85\" y=\"165.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">−1</text><text x=\"85\" y=\"117.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">1</text><text x=\"85\" y=\"93.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">2</text><text x=\"85\" y=\"69.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">3</text><text x=\"85\" y=\"45.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">4</text><text x=\"85\" y=\"21.5\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">5</text><text x=\"84\" y=\"151\" text-anchor=\"end\" font-size=\"10\" fill=\"var(--text-main, #334155)\">0</text><path d=\"M 42 42 C 44 48 46 53.75 48 59.25 C 50 64.75 52 70 54 75 C 56 80 58 84.75 60 89.25 C 62 93.75 64 98 66 102 C 68 106 70 109.75 72 113.25 C 74 116.75 76 120 78 123 C 80 126 82 128.75 84 131.25 C 86 133.75 88 136 90 138 C 92 140 94 141.75 96 143.25 C 98 144.75 100 146 102 147 C 104 148 106 148.75 108 149.25 C 110 149.75 112 150 114 150 C 116 150 118 149.75 120 149.25 C 122 148.75 124 148 126 147 C 128 146 130 144.75 132 143.25 C 134 141.75 136 140 138 138 C 140 136 142 133.75 144 131.25 C 146 128.75 148 126 150 123 C 152 120 154 116.75 156 113.25 C 158 109.75 160 106 162 102 C 164 98 166 93.75 168 89.25 C 170 84.75 172 80 174 75 C 176 70 178 64.75 180 59.25 C 182 53.75 184 48 186 42\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.2\"/></svg></div>\nQuelles sont les abscisses des points d'inflexion de la courbe de $f$ ?",
      "options": [
        "$0$ et $2$",
        "$1$ seulement",
        "$0$ seulement",
        "La courbe de $f$ n'a pas de point d'inflexion."
      ],
      "correctIndex": 0,
      "answer": "$0$ et $2$",
      "hint1": "Un point d'inflexion correspond à un changement de signe de $f''$.",
      "hint2": "Cherche où la courbe de $f''$ traverse l'axe des abscisses. Le minimum de $f''$ n'a pas d'importance ici.",
      "solution": "La courbe de $f''$ est au-dessus de l'axe sur $[-2 ; 0]$, en dessous sur $[0 ; 2]$ et au-dessus sur $[2 ; 4]$. Donc $f''$ s'annule en changeant de signe en $0$ et en $2$ : $f$ est convexe, puis concave, puis convexe, et les points d'abscisses $0$ et $2$ sont des points d'inflexion. En $1$, $f''$ atteint son minimum sans s'annuler."
    },
    {
      "id": "TA4-8",
      "tier": 4,
      "type": "mcq",
      "title": "Esquisser l'allure d'une courbe à partir du tableau de $f'$",
      "skill": "Déduire du tableau de $f'$ les variations et la convexité de $f$",
      "statement": "Une fonction $f$, deux fois dérivable sur $[-2 ; 2]$, a pour dérivée une fonction $f'$ dont voici le tableau de variations.\n\n| $x$ | $-2$ |  | $0$ |  | $2$ |\n|---|---|---|---|---|---|\n| variations de $f'$ | $3$ | ↘ | $1$ | ↗ | $3$ |\n\n<div class=\"geo-figure-wrapper\" style=\"text-align:center; margin:0.6rem auto;\"><svg class=\"geo-svg-figure\" role=\"img\" aria-label=\"Quatre courbes. Courbe A : décroissante, convexe puis concave. Courbe B : croissante, convexe puis concave. Courbe C : croissante, concave puis convexe. Courbe D : décroissante, concave puis convexe.\" viewBox=\"0 0 332 228\" width=\"332\" height=\"228\" style=\"max-width:340px; width:100%; height:auto;\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"4\" y=\"4\" width=\"156\" height=\"104\" rx=\"4\" fill=\"none\" stroke=\"var(--border-color, #cbd5e1)\"/><line x1=\"10\" y1=\"56\" x2=\"154\" y2=\"56\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><path d=\"M 18 16 C 23.33 21 28.67 25.37 34 29.28 C 39.33 33.19 44.67 36.63 50 39.75 C 55.33 42.88 60.67 45.69 66 48.34 C 71.33 51 76.67 53.5 82 56 C 87.33 58.5 92.67 61 98 63.66 C 103.33 66.31 108.67 69.13 114 72.25 C 119.33 75.38 124.67 78.81 130 82.72 C 135.33 86.63 140.67 91 146 96\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.2\"/><circle cx=\"82\" cy=\"56\" r=\"3\" fill=\"#dc2626\"/><text x=\"12\" y=\"20\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #334155)\">A</text><rect x=\"172\" y=\"4\" width=\"156\" height=\"104\" rx=\"4\" fill=\"none\" stroke=\"var(--border-color, #cbd5e1)\"/><line x1=\"178\" y1=\"56\" x2=\"322\" y2=\"56\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><path d=\"M 186 76 C 191.33 76 196.67 75.38 202 74.28 C 207.33 73.19 212.67 71.63 218 69.75 C 223.33 67.88 228.67 65.69 234 63.34 C 239.33 61 244.67 58.5 250 56 C 255.33 53.5 260.67 51 266 48.66 C 271.33 46.31 276.67 44.13 282 42.25 C 287.33 40.38 292.67 38.81 298 37.72 C 303.33 36.63 308.67 36 314 36\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.2\"/><circle cx=\"250\" cy=\"56\" r=\"3\" fill=\"#dc2626\"/><text x=\"180\" y=\"20\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #334155)\">B</text><rect x=\"4\" y=\"120\" width=\"156\" height=\"104\" rx=\"4\" fill=\"none\" stroke=\"var(--border-color, #cbd5e1)\"/><line x1=\"10\" y1=\"172\" x2=\"154\" y2=\"172\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><path d=\"M 18 212 C 23.33 207 28.67 202.63 34 198.72 C 39.33 194.81 44.67 191.38 50 188.25 C 55.33 185.13 60.67 182.31 66 179.66 C 71.33 177 76.67 174.5 82 172 C 87.33 169.5 92.67 167 98 164.34 C 103.33 161.69 108.67 158.88 114 155.75 C 119.33 152.63 124.67 149.19 130 145.28 C 135.33 141.38 140.67 137 146 132\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.2\"/><circle cx=\"82\" cy=\"172\" r=\"3\" fill=\"#dc2626\"/><text x=\"12\" y=\"136\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #334155)\">C</text><rect x=\"172\" y=\"120\" width=\"156\" height=\"104\" rx=\"4\" fill=\"none\" stroke=\"var(--border-color, #cbd5e1)\"/><line x1=\"178\" y1=\"172\" x2=\"322\" y2=\"172\" stroke=\"var(--border-color, #cbd5e1)\" stroke-width=\"1\"/><path d=\"M 186 152 C 191.33 152 196.67 152.63 202 153.72 C 207.33 154.81 212.67 156.38 218 158.25 C 223.33 160.13 228.67 162.31 234 164.66 C 239.33 167 244.67 169.5 250 172 C 255.33 174.5 260.67 177 266 179.34 C 271.33 181.69 276.67 183.88 282 185.75 C 287.33 187.63 292.67 189.19 298 190.28 C 303.33 191.38 308.67 192 314 192\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.2\"/><circle cx=\"250\" cy=\"172\" r=\"3\" fill=\"#dc2626\"/><text x=\"180\" y=\"136\" text-anchor=\"start\" font-size=\"13\" font-weight=\"700\" fill=\"var(--text-main, #334155)\">D</text></svg></div>\nParmi les quatre courbes ci-dessus (le point rouge est le point d'abscisse $0$), laquelle a la même allure que celle de $f$ ?",
      "options": [
        "Courbe C",
        "Courbe A",
        "Courbe B",
        "Courbe D"
      ],
      "correctIndex": 0,
      "answer": "Courbe C",
      "hint1": "Le signe de $f'$ donne les variations de $f$ ; les variations de $f'$ donnent sa convexité.",
      "hint2": "Le minimum de $f'$ vaut $1$ : quel est donc le signe de $f'$ sur tout l'intervalle ?",
      "solution": "Le minimum de $f'$ est $1 > 0$, donc $f'$ est strictement positive et $f$ est croissante sur $[-2 ; 2]$. De plus $f'$ est décroissante sur $[-2 ; 0]$ puis croissante sur $[0 ; 2]$ : $f$ est concave puis convexe, et le point d'abscisse $0$ est un point d'inflexion. La courbe C est la seule qui monte en étant tournée vers le bas puis vers le haut."
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
      "hint2": "Utilise ensuite $\\ln(a) + \\ln(b) = \\ln(ab)$.",
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
      "hint2": "Pour tout entier $n \\ge 1$, $\\lim_{x \\to 0^+} x^n \\ln(x) = 0$ : repère la valeur de $n$ dans cette limite.",
      "solution": "D'après les croissances comparées du cours, pour tout entier $n \\ge 1$, $\\lim_{x \\to 0^+} x^n \\ln(x) = 0$ ; ici $n = 2$, donc la limite vaut $0$."
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
      "hint2": "Cherche une solution constante : $y' = 0$ donne $-3y + 6 = 0$. Ajoute-la aux solutions $C e^{-3x}$ de $y' = -3y$.",
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
      "hint2": "$u(t) = C e^{-0{,}1t}$. Détermine $C$ avec $u(0) = T(0) - 20$, puis reviens à $T(t) = u(t) + 20$.",
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
      "hint2": "$I = F(3) - F(1)$, avec $F(1) = 1 - 1 = 0$.",
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
      "hint1": "Pose $v(x) = x \\implies v'(x) = 1$ et $u'(x) = e^x \\implies u(x) = e^x$.",
      "hint2": "$K = [x e^x]_0^1 - \\int_0^1 e^x \\, dx$. Calcule chacun des deux termes.",
      "solution": "IPP : $v(x) = x, u'(x) = e^x \\implies v'(x) = 1, u(x) = e^x$. $K = [x e^x]_0^1 - \\int_0^1 e^x dx = 1e^1 - 0 - (e^1 - e^0) = e - e + 1 = 1$."
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
    },
    {
      "id": "TA7-5",
      "tier": 3,
      "type": "mcq",
      "title": "Méthode de Brouncker pour ln 2",
      "skill": "Approcher une intégrale par des aires de rectangles",
      "statement": "On approche $\\ln 2 = \\int_1^2 \\frac{dt}{t}$ par la méthode de Brouncker, en plaçant sous la courbe de $t \\mapsto \\frac{1}{t}$ des rectangles successifs :\n• étape 1 : le rectangle de base $[1 ; 2]$ et de hauteur $\\frac{1}{2}$ ;\n• étape 2 : le rectangle de base $\\left[1 ; \\frac{3}{2}\\right]$ compris entre les hauteurs $\\frac{1}{2}$ et $\\frac{2}{3}$ ;\n• étape 3 : le rectangle de base $\\left[1 ; \\frac{5}{4}\\right]$ compris entre les hauteurs $\\frac{2}{3}$ et $\\frac{4}{5}$, et celui de base $\\left[\\frac{3}{2} ; \\frac{7}{4}\\right]$ compris entre les hauteurs $\\frac{1}{2}$ et $\\frac{4}{7}$.\nQuelle valeur approchée de $\\ln 2$ obtient-on en additionnant les aires de ces quatre rectangles ?",
      "options": [
        "$\\frac{533}{840}$",
        "$\\frac{7}{12}$",
        "$\\frac{61}{70}$",
        "$\\frac{319}{420}$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{533}{840}$",
      "hint1": "L'aire d'un rectangle compris entre deux hauteurs est le produit de sa largeur par la différence des hauteurs.",
      "hint2": "Les deux premières aires valent $1 \\times \\frac{1}{2} = \\frac{1}{2}$ et $\\frac{1}{2} \\times \\left(\\frac{2}{3} - \\frac{1}{2}\\right) = \\frac{1}{12}$. Calcule de même les deux aires de l'étape 3, de largeur $\\frac{1}{4}$.",
      "solution": "Étape 1 : $1 \\times \\frac{1}{2} = \\frac{1}{2}$. Étape 2 : $\\frac{1}{2} \\times \\frac{1}{6} = \\frac{1}{12}$. Étape 3 : $\\frac{1}{4} \\times \\left(\\frac{4}{5} - \\frac{2}{3}\\right) = \\frac{1}{4} \\times \\frac{2}{15} = \\frac{1}{30}$ et $\\frac{1}{4} \\times \\left(\\frac{4}{7} - \\frac{1}{2}\\right) = \\frac{1}{4} \\times \\frac{1}{14} = \\frac{1}{56}$. Total : $\\frac{1}{2} + \\frac{1}{12} + \\frac{1}{30} + \\frac{1}{56} = \\frac{420 + 70 + 28 + 15}{840} = \\frac{533}{840} \\approx 0{,}635$. C'est une valeur approchée par défaut de $\\ln 2 \\approx 0{,}693$, car les rectangles sont sous la courbe ; on retrouve d'ailleurs $\\frac{1}{5} + \\frac{1}{6} + \\frac{1}{7} + \\frac{1}{8}$, la méthode des rectangles « à droite » avec $4$ rectangles."
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
      "hint2": "Attention à la troisième ligne : $z = -5t$ s'écrit $z = 0 + (-5)t$. Les termes constants donnent un point de la droite, pas le vecteur directeur.",
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
      "hint2": "Vérifie que cette valeur de $t$ donne aussi $y = 9$ et $z = -10$ dans les deux autres équations.",
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
      "statement": "Quel est le point d'intersection de la droite $\\begin{cases} x = t \\\\ y = 2t \\\\ z = 1 - t \\end{cases}$ avec le plan $\\mathcal{P}$ passant par $A(0 ; 1 ; 2)$ et dirigé par les vecteurs $\\vec{u}(1 ; 2 ; 0)$ et $\\vec{v}(0 ; 3 ; 1)$ ?",
      "options": [
        "$(-2/3 ; -4/3 ; 5/3)$",
        "$(1 ; 2 ; 0)$",
        "$(2 ; 4 ; -1)$",
        "La droite est strictement parallèle au plan"
      ],
      "correctIndex": 0,
      "answer": "$(-2/3 ; -4/3 ; 5/3)$",
      "hint1": "Un point $M(t ; 2t ; 1 - t)$ de la droite appartient à $\\mathcal{P}$ si et seulement s'il existe deux réels $a$ et $b$ tels que $\\overrightarrow{AM} = a\\vec{u} + b\\vec{v}$.",
      "hint2": "On a $\\overrightarrow{AM}(t ; 2t - 1 ; -1 - t)$. Le système donne $a = t$ et $b = -1 - t$ : remplace $a$ et $b$ dans la deuxième équation pour trouver $t$.",
      "solution": "Soit $M(t ; 2t ; 1 - t)$ un point de la droite ; alors $\\overrightarrow{AM}(t ; 2t - 1 ; -1 - t)$. Le point $M$ appartient à $\\mathcal{P}$ si et seulement s'il existe deux réels $a$ et $b$ tels que $\\overrightarrow{AM} = a\\vec{u} + b\\vec{v}$, c'est-à-dire $t = a$, $2t - 1 = 2a + 3b$ et $-1 - t = b$. En remplaçant dans la deuxième équation : $2t - 1 = 2t + 3(-1 - t) \\iff 2t - 1 = -t - 3 \\iff 3t = -2 \\iff t = -\\frac{2}{3}$. Coordonnées : $x = -\\frac{2}{3}$, $y = -\\frac{4}{3}$, $z = 1 + \\frac{2}{3} = \\frac{5}{3}$."
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
      "title": "Plans perpendiculaires",
      "skill": "Vérifier que deux plans sont perpendiculaires à l'aide de leurs vecteurs normaux",
      "statement": "Les plans $\\mathcal{P}_1 : 3x - 2y + z - 4 = 0$ et $\\mathcal{P}_2 : 2x + 4y + 2z + 7 = 0$ sont-ils perpendiculaires ?",
      "options": [
        "Oui, car $\\vec{n}_1 \\cdot \\vec{n}_2 = 0$",
        "Non, car $\\vec{n}_1 \\cdot \\vec{n}_2 = 16 \\ne 0$",
        "Non, ils sont parallèles",
        "On ne peut pas conclure"
      ],
      "correctIndex": 0,
      "answer": "Oui, car $\\vec{n}_1 \\cdot \\vec{n}_2 = 0$",
      "hint1": "$\\vec{n}_1(3 ; -2 ; 1)$ et $\\vec{n}_2(2 ; 4 ; 2)$.",
      "hint2": "Calcule le produit scalaire $\\vec{n}_1 \\cdot \\vec{n}_2 = 3 \\times 2 + (-2) \\times 4 + 1 \\times 2$.",
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
      "hint1": "Détermine le projeté orthogonal $H$ de $A$ sur $\\mathcal{P}$ : c'est l'intersection de $\\mathcal{P}$ avec la droite passant par $A$ et dirigée par un vecteur normal au plan.",
      "hint2": "Avec $\\vec{n}(2 ; -2 ; 1)$, un point de cette droite s'écrit $(1 + 2t ; -2t ; 2 + t)$. Remplace dans l'équation du plan pour trouver $t$, puis calcule $AH$.",
      "solution": "$\\vec{n}(2 ; -2 ; 1)$ est normal à $\\mathcal{P}$. La droite passant par $A$ et dirigée par $\\vec{n}$ a pour représentation paramétrique $x = 1 + 2t$, $y = -2t$, $z = 2 + t$ ($t \\in \\mathbb{R}$). En remplaçant dans l'équation de $\\mathcal{P}$ : $2(1 + 2t) - 2(-2t) + (2 + t) + 5 = 0$, soit $9 + 9t = 0$, donc $t = -1$. Le projeté orthogonal de $A$ sur $\\mathcal{P}$ est $H(-1 ; 2 ; 1)$. Alors $\\overrightarrow{AH}(-2 ; 2 ; -1)$ et $AH = \\sqrt{4 + 4 + 1} = 3$."
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
      "hint2": "Ici $n = 100$ et $p = 0{,}3$.",
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
      "hint2": "Ici $n = 50$, $p = 0{,}4$ et donc $1 - p = 0{,}6$.",
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
      "hint2": "$P(X = 2) = \\binom{4}{2} (0{,}5)^2 (0{,}5)^{4-2}$, et $(0{,}5)^4 = \\frac{1}{16}$.",
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
      "hint2": "Calcule $\\frac{V(X)}{a^2} = \\frac{16}{8^2}$.",
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
      "hint1": "Par linéarité de l'espérance, $E(M_n) = \\frac{1}{n}\\left(E(X_1) + \\dots + E(X_n)\\right)$.",
      "hint2": "Par indépendance, $V(X_1 + \\dots + X_n) = V(X_1) + \\dots + V(X_n)$ ; et $V(aY) = a^2 V(Y)$ avec ici $a = \\frac{1}{n}$.",
      "solution": "Par linéarité de l'espérance, $E(M_n) = \\mu$. Par indépendance des $X_i$, $V(M_n) = \\frac{1}{n^2} \\sum V(X_i) = \\frac{n\\sigma^2}{n^2} = \\frac{\\sigma^2}{n}$."
    },
    {
      "id": "TS2-4",
      "tier": 4,
      "type": "mcq",
      "title": "Inégalité de concentration et loi des grands nombres",
      "skill": "Déterminer la taille d'échantillon garantissant une précision",
      "statement": "On estime une proportion $p$ par une fréquence empirique $F_n$. On sait que $V(F_n) = \\frac{p(1-p)}{n} \\le \\frac{1}{4n}$. À partir de quelle taille $n$ l'inégalité de concentration permet-elle d'assurer que $P(|F_n - p| \\ge 0{,}05) \\le 0{,}01$ ?",
      "options": [
        "$n = 10\\,000$",
        "$n = 1\\,000$",
        "$n = 4\\,000$",
        "$n = 2\\,500$"
      ],
      "correctIndex": 0,
      "answer": "$n = 10\\,000$",
      "hint1": "Inégalité de concentration : $P(|F_n - p| \\ge \\epsilon) \\le \\frac{1}{4n\\epsilon^2}$.",
      "hint2": "Avec $\\epsilon = 0{,}05$ : $4n(0{,}05)^2 = 0{,}01n$, donc la majoration vaut $\\frac{1}{0{,}01n} = \\frac{100}{n}$. Résous $\\frac{100}{n} \\le 0{,}01$.",
      "solution": "$P(|F_n - p| \\ge 0{,}05) \\le \\frac{1}{4n(0{,}05)^2} = \\frac{1}{4n(0{,}0025)} = \\frac{1}{0{,}01 n} = \\frac{100}{n}$. On veut $\\frac{100}{n} \\le 0{,}01 \\iff n \\ge \\frac{100}{0{,}01} = 10\\,000$. Cette taille est **suffisante**, mais ce n'est pas la plus petite possible : la majoration est pessimiste. Pour $p = 0{,}5$, le calcul exact avec la loi binomiale donne déjà $P(|F_n - p| \\ge 0{,}05) \\le 0{,}01$ pour tout $n \\ge 681$, soit près de $15$ fois moins."
    },
    {
      "id": "TS2-5",
      "tier": 2,
      "type": "mcq",
      "title": "Position moyenne d'une marche aléatoire",
      "skill": "Modéliser une marche aléatoire à l'aide d'une loi binomiale",
      "statement": "Un pion part de $0$ sur une droite graduée. À chaque étape, il avance de $1$ avec la probabilité $0{,}7$ et recule de $1$ sinon, indépendamment des étapes précédentes. On note $X$ sa position après $50$ étapes. Que vaut $E(X)$ ?",
      "options": [
        "$20$",
        "$35$",
        "$-20$",
        "$0$"
      ],
      "correctIndex": 0,
      "answer": "$20$",
      "hint1": "Si $S$ est le nombre de pas en avant, alors $S \\sim \\mathcal{B}(50 ; 0{,}7)$ et le pion fait $50 - S$ pas en arrière.",
      "hint2": "La position vaut $X = S - (50 - S) = 2S - 50$ ; utilise $E(S) = np$ et la linéarité de l'espérance.",
      "solution": "Le nombre $S$ de pas en avant suit la loi $\\mathcal{B}(50 ; 0{,}7)$, donc $E(S) = 50 \\times 0{,}7 = 35$. La position est $X = S - (50 - S) = 2S - 50$, d'où $E(X) = 2 \\times 35 - 50 = 20$. (La valeur $35$ est l'espérance du nombre de pas en avant, pas celle de la position.)"
    },
    {
      "id": "TS2-6",
      "tier": 3,
      "type": "mcq",
      "title": "Lire un algorithme de calcul d'écart",
      "skill": "Interpréter un programme qui calcule P(|S_n - pn| > √n)",
      "statement": "On considère la fonction Python suivante, où `comb(n, k)` renvoie $\\binom{n}{k}$.\n```python\nfrom math import comb, sqrt\n\ndef proba_ecart(n, p):\n    total = 0\n    for k in range(n + 1):\n        if abs(k - n * p) > sqrt(n):\n            total = total + comb(n, k) * p**k * (1 - p)**(n - k)\n    return total\n```\nSi $S \\sim \\mathcal{B}(400 ; 0{,}5)$, `proba_ecart(400, 0.5)` renvoie la probabilité de quel événement ?",
      "options": [
        "$S \\le 179$ ou $S \\ge 221$",
        "$S \\le 180$ ou $S \\ge 220$",
        "$S \\le 199$ ou $S \\ge 201$",
        "$180 \\le S \\le 220$"
      ],
      "correctIndex": 0,
      "answer": "$S \\le 179$ ou $S \\ge 221$",
      "hint1": "La boucle additionne les probabilités $P(S = k)$ des entiers $k$ qui vérifient $|k - np| > \\sqrt{n}$.",
      "hint2": "Ici $np = 200$ et $\\sqrt{400} = 20$ : la condition est $|k - 200| > 20$, avec une inégalité stricte.",
      "solution": "Avec $n = 400$ et $p = 0{,}5$ : $np = 200$ et $\\sqrt{n} = 20$. La fonction additionne $P(S = k)$ pour les entiers $k$ tels que $|k - 200| > 20$, c'est-à-dire $k < 180$ ou $k > 220$, soit $k \\le 179$ ou $k \\ge 221$. Elle renvoie donc $P(|S - 200| > 20) = P(S \\le 179 \\text{ ou } S \\ge 221)$, environ $0{,}04$, alors que l'inégalité de Bienaymé-Tchebychev majore seulement cette probabilité par $\\frac{400 \\times 0{,}5 \\times 0{,}5}{20^2} = \\frac{1}{4}$."
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
      "hint2": "Calcule $3^2 + (-4)^2$.",
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
      "hint2": "Lorsque $\\Delta < 0$, les racines sont $z = \\frac{-b \\pm i\\sqrt{-\\Delta}}{2a}$, ici avec $\\sqrt{-\\Delta} = 6$.",
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
    },
    {
      "id": "TX1-5",
      "tier": 1,
      "type": "mcq",
      "title": "Affixe d'un vecteur",
      "skill": "Associer un point ou un vecteur du plan complexe à son affixe",
      "statement": "Dans le plan complexe, les points $A$ et $B$ sont les images des complexes $z_A = 1 - 2i$ et $z_B = 4 + 2i$. Quelle est l'affixe du vecteur $\\overrightarrow{AB}$ ?",
      "options": [
        "$3 + 4i$",
        "$-3 - 4i$",
        "$5$",
        "$3 - 4i$"
      ],
      "correctIndex": 0,
      "answer": "$3 + 4i$",
      "hint1": "Le vecteur $\\overrightarrow{AB}$ a pour affixe $z_B - z_A$ (extrémité moins origine).",
      "hint2": "Les parties réelles donnent $4 - 1$ ; fais de même avec les parties imaginaires $2$ et $-2$.",
      "solution": "$z_{\\overrightarrow{AB}} = z_B - z_A = (4 + 2i) - (1 - 2i) = 3 + 4i$. On retrouve les coordonnées $(3 ; 4)$ du vecteur $\\overrightarrow{AB}$, et $AB = |3 + 4i| = \\sqrt{9 + 16} = 5$."
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
      "hint2": "Ici $a = 1$ et $b = -\\sqrt{3}$, avec $(-\\sqrt{3})^2 = 3$.",
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
      "hint2": "Cherche $\\theta$ tel que $\\cos(\\theta) = \\frac{-2}{2\\sqrt{2}} = -\\frac{\\sqrt{2}}{2}$ et $\\sin(\\theta) = \\frac{2}{2\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$.",
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
      "hint2": "Par la formule de Moivre, $(1+i)^{12} = (\\sqrt{2})^{12} e^{i\\,12\\pi/4}$. Simplifie le module et l'argument séparément.",
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
      "hint2": "$\\cos^3(x) = \\frac{1}{8}(e^{3ix} + 3e^{ix} + 3e^{-ix} + e^{-3ix})$. Regroupe $e^{3ix} + e^{-3ix}$ et $e^{ix} + e^{-ix}$ grâce aux formules d'Euler.",
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
      "hint2": "$100 = 6 \\times 16 + 4$, donc $3^{100} = (3^6)^{16} \\times 3^4$. Il reste à réduire $3^4 = 81$ modulo 7.",
      "solution": "L'ordre de 3 modulo 7 est 6 car $3^6 = 729 = 7 \\times 104 + 1 \\equiv 1 [7]$. Comme $100 = 6 \\times 16 + 4$, on a $3^{100} \\equiv 3^4 = 81 \\equiv 4 [7]$."
    },
    {
      "id": "TX3-2",
      "tier": 2,
      "type": "mcq",
      "title": "Carrés successifs modulo 17",
      "skill": "Calculer une puissance modulo n par carrés successifs",
      "statement": "Quel est le reste de la division euclidienne de $5^{16}$ par 17 ?",
      "options": [
        "$1$",
        "$5$",
        "$16$",
        "$0$"
      ],
      "correctIndex": 0,
      "answer": "$1$",
      "hint1": "Comme $16 = 2^4$, élève $5$ au carré quatre fois de suite en réduisant modulo 17 à chaque étape.",
      "hint2": "$5^2 = 25 \\equiv 8 \\pmod{17}$ et $5^4 \\equiv 8^2 = 64 \\equiv 13 \\pmod{17}$. Continue ainsi.",
      "solution": "Modulo 17 : $5^2 = 25 \\equiv 8$, $5^4 \\equiv 8^2 = 64 \\equiv 13$, $5^8 \\equiv 13^2 = 169 \\equiv 16$ et $5^{16} \\equiv 16^2 = 256 \\equiv 1$. Le reste est donc $1$. Renvoi : au chapitre TX4, le petit théorème de Fermat donnera ce résultat sans calcul, car 17 est premier et ne divise pas 5."
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
      "hint2": "Multiplie les deux membres par 5 : $15x \\equiv 25 \\pmod{7}$, puis réduis $15$ et $25$ modulo 7.",
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
      "hint1": "« Premiers entre eux » signifie que $\\text{PGCD}(a, b) = 1$.",
      "hint2": "Le théorème de Bézout caractérise cette situation par l'existence d'une combinaison linéaire $au + bv$ particulière, à coefficients entiers.",
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
      "hint1": "Applique l'algorithme d'Euclide à $31$ et $13$, en commençant par $31 = 2 \\times 13 + 5$, jusqu'à obtenir le reste $1$, puis remonte les calculs.",
      "hint2": "Les divisions suivantes sont $13 = 2 \\times 5 + 3$, $5 = 1 \\times 3 + 2$ et $3 = 1 \\times 2 + 1$. Pars de $1 = 3 - 2$ et remplace d'abord $2$ par $5 - 3$.",
      "solution": "Algorithme d'Euclide : $31 = 2 \\times 13 + 5$ ; $13 = 2 \\times 5 + 3$ ; $5 = 1 \\times 3 + 2$ ; $3 = 1 \\times 2 + 1$. En remontant : $1 = 3 - 2 = 3 - (5 - 3) = 2 \\times 3 - 5 = 2(13 - 2 \\times 5) - 5 = 2 \\times 13 - 5 \\times 5 = 2 \\times 13 - 5(31 - 2 \\times 13) = 12 \\times 13 - 5 \\times 31$. Donc $31 \\times (-5) + 13 \\times 12 = -155 + 156 = 1$ : le couple est $(u ; v) = (-5 ; 12)$."
    },
    {
      "id": "TX4-3",
      "tier": 3,
      "type": "mcq",
      "title": "Lemme de Gauss",
      "skill": "Appliquer le théorème de Gauss",
      "statement": "Quels sont les couples d'entiers relatifs $(x ; y)$ tels que $7(x - 3) = 4(y - 2)$ ? (Dans chaque proposition, $k$ décrit $\\mathbb{Z}$.)",
      "options": [
        "$(x ; y) = (3 + 4k ; 2 + 7k)$",
        "$(x ; y) = (3 + 7k ; 2 + 4k)$",
        "$(x ; y) = (4k ; 7k)$",
        "$(x ; y) = (3 + 28k ; 2 + 28k)$"
      ],
      "correctIndex": 0,
      "answer": "$(x ; y) = (3 + 4k ; 2 + 7k)$",
      "hint1": "Théorème de Gauss : si un entier divise un produit et est premier avec l'un des facteurs, il divise l'autre facteur.",
      "hint2": "$7$ divise $4(y - 2)$ et $7$ est premier avec $4$, donc $7$ divise $y - 2$ : $y = 2 + 7k$. Remplace dans l'équation pour obtenir $x$.",
      "solution": "Si $(x ; y)$ est solution, $7$ divise $4(y - 2)$ ; comme $\\mathrm{PGCD}(7 ; 4) = 1$, le théorème de Gauss donne : $7$ divise $y - 2$, donc $y = 2 + 7k$ avec $k \\in \\mathbb{Z}$. Alors $7(x - 3) = 4 \\times 7k$, d'où $x - 3 = 4k$ et $x = 3 + 4k$.\nRéciproquement, pour tout $k \\in \\mathbb{Z}$, $7(3 + 4k - 3) = 28k = 4(2 + 7k - 2)$ : ces couples sont bien solutions. Les solutions sont les couples $(3 + 4k ; 2 + 7k)$, $k \\in \\mathbb{Z}$."
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
      "hint1": "Le coefficient ligne $i$, colonne $j$ de $A \\times B$ s'obtient avec la ligne $i$ de $A$ et la colonne $j$ de $B$.",
      "hint2": "Par exemple, ligne 1 colonne 1 : $1 \\times 2 + 2 \\times 1 = 4$. Procède de même pour les trois autres coefficients.",
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
      "hint2": "La ligne 1 correspond au départ de $A$ : elle contient $P(A \\to A)$ puis $P(A \\to B)$. Même principe pour la ligne 2 depuis $B$.",
      "solution": "Les lignes représentent les probabilités de transition depuis l'état courant : ligne 1 $(0{,}7 ; 0{,}3)$ et ligne 2 $(0{,}4 ; 0{,}6)$."
    },
    {
      "id": "TX5-3",
      "tier": 3,
      "type": "mcq",
      "title": "Distribution invariante d'une chaîne de Markov",
      "skill": "Déterminer la distribution invariante : résoudre $\\pi P = \\pi$",
      "statement": "Pour la matrice de transition $P = \\begin{pmatrix} 0{,}7 & 0{,}3 \\\\ 0{,}4 & 0{,}6 \\end{pmatrix}$, quelle est la distribution invariante $\\pi = (x \\quad y)$ vérifiant $\\pi P = \\pi$ et $x + y = 1$ ?",
      "options": [
        "$\\pi = \\left(\\frac{4}{7} \\quad \\frac{3}{7}\\right)$",
        "$\\pi = (0{,}5 \\quad 0{,}5)$",
        "$\\pi = (0{,}7 \\quad 0{,}3)$",
        "$\\pi = \\left(\\frac{3}{7} \\quad \\frac{4}{7}\\right)$"
      ],
      "correctIndex": 0,
      "answer": "$\\pi = \\left(\\frac{4}{7} \\quad \\frac{3}{7}\\right)$",
      "hint1": "$0{,}7x + 0{,}4y = x \\iff 0{,}4y = 0{,}3x \\iff 3x = 4y$.",
      "hint2": "Remplace $y$ par $1 - x$ dans $3x = 4y$ et résous en $x$.",
      "solution": "$0{,}7x + 0{,}4y = x \\iff 0{,}4y = 0{,}3x \\iff y = \\frac{3}{4}x$. Avec $x + y = 1$, on obtient $x + \\frac{3}{4}x = 1 \\iff \\frac{7}{4}x = 1 \\iff x = \\frac{4}{7}$, d'où $y = \\frac{3}{7}$."
    },
    {
      "id": "TX5-4",
      "tier": 4,
      "type": "mcq",
      "title": "Puissance n-ième d'une matrice à partir de M = P D P^-1",
      "skill": "Calculer M^n à partir d'une écriture P D P^-1",
      "statement": "On admet que $M = P D P^{-1}$ avec $P = \\begin{pmatrix} 1 & 2 \\\\ 1 & -1 \\end{pmatrix}$, $D = \\begin{pmatrix} 1 & 0 \\\\ 0 & 0{,}5 \\end{pmatrix}$ et $P^{-1} = \\frac{1}{3}\\begin{pmatrix} 1 & 2 \\\\ 1 & -1 \\end{pmatrix}$. Pour tout entier naturel $n$, quelle est l'expression de $M^n$ ?",
      "options": [
        "$M^n = \\frac{1}{3}\\begin{pmatrix} 1 + 2 \\times (0{,}5)^n & 2 - 2 \\times (0{,}5)^n \\\\ 1 - (0{,}5)^n & 2 + (0{,}5)^n \\end{pmatrix}$",
        "$M^n = \\frac{1}{3}\\begin{pmatrix} 1 + 2 \\times (0{,}5)^n & 1 - (0{,}5)^n \\\\ 2 - 2 \\times (0{,}5)^n & 2 + (0{,}5)^n \\end{pmatrix}$",
        "$M^n = \\begin{pmatrix} 1 + 2 \\times (0{,}5)^n & 2 - 2 \\times (0{,}5)^n \\\\ 1 - (0{,}5)^n & 2 + (0{,}5)^n \\end{pmatrix}$",
        "$M^n = \\begin{pmatrix} 1 & 0 \\\\ 0 & (0{,}5)^n \\end{pmatrix}$"
      ],
      "correctIndex": 0,
      "answer": "$M^n = \\frac{1}{3}\\begin{pmatrix} 1 + 2 \\times (0{,}5)^n & 2 - 2 \\times (0{,}5)^n \\\\ 1 - (0{,}5)^n & 2 + (0{,}5)^n \\end{pmatrix}$",
      "hint1": "On a $M^n = P D^n P^{-1}$, et $D^n$ s'obtient en élevant chaque coefficient diagonal à la puissance $n$.",
      "hint2": "Calcule d'abord $P D^n = \\begin{pmatrix} 1 & 2 \\times (0{,}5)^n \\\\ 1 & -(0{,}5)^n \\end{pmatrix}$, puis multiplie à droite par $P^{-1}$.",
      "solution": "Les produits $P^{-1}P$ intermédiaires valent $I_2$, donc $M^n = P D^n P^{-1}$ avec $D^n = \\begin{pmatrix} 1 & 0 \\\\ 0 & (0{,}5)^n \\end{pmatrix}$. On a $P D^n = \\begin{pmatrix} 1 & 2 \\times (0{,}5)^n \\\\ 1 & -(0{,}5)^n \\end{pmatrix}$, puis, en multipliant à droite par $P^{-1}$, $M^n = \\frac{1}{3}\\begin{pmatrix} 1 + 2 \\times (0{,}5)^n & 2 - 2 \\times (0{,}5)^n \\\\ 1 - (0{,}5)^n & 2 + (0{,}5)^n \\end{pmatrix}$. Contrôle pour $n = 0$ : on retrouve $\\frac{1}{3}\\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix} = I_2$."
    }
  ],
  "TA8": [
    {
      "id": "TA8-1",
      "tier": 1,
      "type": "mcq",
      "title": "Dérivée d'une puissance composée",
      "skill": "Dériver $x \\mapsto g(ax + b)$",
      "statement": "Soit $f(x) = (3x - 2)^4$ sur $\\mathbb{R}$. Que vaut $f'(x)$ ?",
      "options": [
        "$f'(x) = 12(3x - 2)^3$",
        "$f'(x) = 4(3x - 2)^3$",
        "$f'(x) = 12(3x - 2)^4$",
        "$f'(x) = 3(3x - 2)^3$"
      ],
      "correctIndex": 0,
      "answer": "$f'(x) = 12(3x - 2)^3$",
      "hint1": "Écris $f = u^4$ avec $u(x) = 3x - 2$ et utilise $(u^n)' = n\\,u'\\,u^{n-1}$.",
      "hint2": "Ici $n = 4$ et $u'(x) = 3$.",
      "solution": "Avec $u(x) = 3x - 2$, $u'(x) = 3$ et $(u^4)' = 4u'u^3$ : $f'(x) = 4 \\times 3 \\times (3x - 2)^3 = 12(3x - 2)^3$."
    },
    {
      "id": "TA8-2",
      "tier": 2,
      "type": "mcq",
      "title": "Dérivée d'une exponentielle composée",
      "skill": "Dériver $e^{u}$",
      "statement": "Soit $f(x) = e^{x^2 - 5x}$ sur $\\mathbb{R}$. Que vaut $f'(x)$ ?",
      "options": [
        "$f'(x) = (2x - 5)e^{x^2 - 5x}$",
        "$f'(x) = e^{x^2 - 5x}$",
        "$f'(x) = (x^2 - 5x)e^{2x - 5}$",
        "$f'(x) = (2x - 5)e^{2x - 5}$"
      ],
      "correctIndex": 0,
      "answer": "$f'(x) = (2x - 5)e^{x^2 - 5x}$",
      "hint1": "$(e^u)' = u'e^u$.",
      "hint2": "$u(x) = x^2 - 5x$ donc $u'(x) = 2x - 5$.",
      "solution": "$f = e^u$ avec $u(x) = x^2 - 5x$ et $u'(x) = 2x - 5$. Donc $f'(x) = u'(x)e^{u(x)} = (2x - 5)e^{x^2 - 5x}$."
    },
    {
      "id": "TA8-3",
      "tier": 2,
      "type": "mcq",
      "title": "Dérivée d'un logarithme composé",
      "skill": "Dériver $\\ln(u)$",
      "statement": "Soit $f(x) = \\ln(x^2 + 4)$ sur $\\mathbb{R}$. Que vaut $f'(x)$ ?",
      "options": [
        "$f'(x) = \\frac{2x}{x^2 + 4}$",
        "$f'(x) = \\frac{1}{x^2 + 4}$",
        "$f'(x) = \\frac{2x}{(x^2 + 4)^2}$",
        "$f'(x) = 2x\\ln(x^2 + 4)$"
      ],
      "correctIndex": 0,
      "answer": "$f'(x) = \\frac{2x}{x^2 + 4}$",
      "hint1": "$(\\ln u)' = \\frac{u'}{u}$ lorsque $u > 0$.",
      "hint2": "Ici $u(x) = x^2 + 4 > 0$ et $u'(x) = 2x$.",
      "solution": "Pour tout réel $x$, $u(x) = x^2 + 4 > 0$ et $u'(x) = 2x$, donc $f'(x) = \\frac{u'(x)}{u(x)} = \\frac{2x}{x^2 + 4}$."
    },
    {
      "id": "TA8-4",
      "tier": 3,
      "type": "mcq",
      "title": "Calcul d'une dérivée seconde",
      "skill": "Dériver deux fois une fonction composée",
      "statement": "Soit $f(x) = e^{-2x + 1}$ sur $\\mathbb{R}$. Que vaut $f''(x)$ ?",
      "options": [
        "$f''(x) = 4e^{-2x + 1}$",
        "$f''(x) = -2e^{-2x + 1}$",
        "$f''(x) = -4e^{-2x + 1}$",
        "$f''(x) = e^{-2x + 1}$"
      ],
      "correctIndex": 0,
      "answer": "$f''(x) = 4e^{-2x + 1}$",
      "hint1": "Calcule d'abord $f'(x)$ avec $(e^u)' = u'e^u$.",
      "hint2": "$f'(x) = -2e^{-2x + 1}$ ; dérive à nouveau.",
      "solution": "$f'(x) = -2e^{-2x + 1}$, puis $f''(x) = -2 \\times (-2)e^{-2x + 1} = 4e^{-2x + 1}$."
    },
    {
      "id": "TA8-5",
      "tier": 4,
      "type": "mcq",
      "title": "Variations d'une racine composée",
      "skill": "Étudier les variations d'une composée",
      "statement": "Soit $f(x) = \\sqrt{x^2 - 6x + 10}$ sur $\\mathbb{R}$. Sur quel intervalle $f$ est-elle décroissante ?",
      "options": [
        "$]-\\infty ; 3]$",
        "$[3 ; +\\infty[$",
        "$]-\\infty ; -3]$",
        "$[-3 ; +\\infty[$"
      ],
      "correctIndex": 0,
      "answer": "$]-\\infty ; 3]$",
      "hint1": "$(\\sqrt{u})' = \\frac{u'}{2\\sqrt{u}}$ a le signe de $u'$.",
      "hint2": "$u(x) = x^2 - 6x + 10 = (x - 3)^2 + 1 > 0$ et $u'(x) = 2x - 6$.",
      "solution": "$u(x) = (x - 3)^2 + 1 > 0$, donc $f$ est dérivable sur $\\mathbb{R}$ et $f'(x) = \\frac{2x - 6}{2\\sqrt{x^2 - 6x + 10}} = \\frac{x - 3}{\\sqrt{x^2 - 6x + 10}}$, du signe de $x - 3$. Ainsi $f$ est décroissante sur $]-\\infty ; 3]$ et croissante sur $[3 ; +\\infty[$."
    }
  ],
  "TA9": [
    {
      "id": "TA9-1",
      "tier": 1,
      "type": "mcq",
      "title": "Dérivée de $\\cos(ax + b)$",
      "skill": "Dériver $x \\mapsto \\cos(ax + b)$",
      "statement": "Soit $f(x) = \\cos(3x - 1)$ sur $\\mathbb{R}$. Que vaut $f'(x)$ ?",
      "options": [
        "$f'(x) = -3\\sin(3x - 1)$",
        "$f'(x) = 3\\sin(3x - 1)$",
        "$f'(x) = -\\sin(3x - 1)$",
        "$f'(x) = -3\\cos(3x - 1)$"
      ],
      "correctIndex": 0,
      "answer": "$f'(x) = -3\\sin(3x - 1)$",
      "hint1": "$\\cos' = -\\sin$.",
      "hint2": "$f$ est la composée de $\\cos$ et de $x \\mapsto 3x - 1$ : n'oublie pas le facteur $3$, dérivée de $3x - 1$.",
      "solution": "Avec $g = \\cos$, $g' = -\\sin$ et $a = 3$ : $f'(x) = 3 \\times (-\\sin(3x - 1)) = -3\\sin(3x - 1)$."
    },
    {
      "id": "TA9-2",
      "tier": 2,
      "type": "mcq",
      "title": "Équation $\\cos(x) = a$ sur $[0 ; 2\\pi[$",
      "skill": "Résoudre une équation trigonométrique",
      "statement": "Quel est l'ensemble des solutions dans $[0 ; 2\\pi[$ de l'équation $\\cos(x) = -\\frac{\\sqrt{2}}{2}$ ?",
      "options": [
        "$S = \\left\\{\\frac{3\\pi}{4} ; \\frac{5\\pi}{4}\\right\\}$",
        "$S = \\left\\{\\frac{\\pi}{4} ; \\frac{7\\pi}{4}\\right\\}$",
        "$S = \\left\\{\\frac{3\\pi}{4}\\right\\}$",
        "$S = \\left\\{\\frac{5\\pi}{4} ; \\frac{7\\pi}{4}\\right\\}$"
      ],
      "correctIndex": 0,
      "answer": "$S = \\left\\{\\frac{3\\pi}{4} ; \\frac{5\\pi}{4}\\right\\}$",
      "hint1": "$\\cos\\left(\\frac{3\\pi}{4}\\right) = -\\frac{\\sqrt{2}}{2}$.",
      "hint2": "Les solutions de $\\cos(x) = \\cos(\\alpha)$ sont $\\alpha + 2k\\pi$ et $-\\alpha + 2k\\pi$.",
      "solution": "On a $\\cos\\left(\\frac{3\\pi}{4}\\right) = -\\frac{\\sqrt{2}}{2}$. Les solutions réelles sont $\\pm\\frac{3\\pi}{4} + 2k\\pi$. Dans $[0 ; 2\\pi[$ : $\\frac{3\\pi}{4}$ et $-\\frac{3\\pi}{4} + 2\\pi = \\frac{5\\pi}{4}$. ($\\frac{5\\pi}{4}$ et $\\frac{7\\pi}{4}$ sont les solutions de $\\sin(x) = -\\frac{\\sqrt{2}}{2}$.)"
    },
    {
      "id": "TA9-3",
      "tier": 2,
      "type": "mcq",
      "title": "Dérivée d'un produit",
      "skill": "Dériver $x \\mapsto x\\sin(x)$",
      "statement": "Soit $f(x) = x\\sin(x)$ sur $\\mathbb{R}$. Que vaut $f'(x)$ ?",
      "options": [
        "$f'(x) = \\sin(x) + x\\cos(x)$",
        "$f'(x) = \\cos(x)$",
        "$f'(x) = \\sin(x) - x\\cos(x)$",
        "$f'(x) = x\\cos(x)$"
      ],
      "correctIndex": 0,
      "answer": "$f'(x) = \\sin(x) + x\\cos(x)$",
      "hint1": "$(uv)' = u'v + uv'$.",
      "hint2": "$u(x) = x$, $u'(x) = 1$ ; $v(x) = \\sin(x)$, $v'(x) = \\cos(x)$.",
      "solution": "$f'(x) = 1 \\times \\sin(x) + x \\times \\cos(x) = \\sin(x) + x\\cos(x)$."
    },
    {
      "id": "TA9-4",
      "tier": 3,
      "type": "mcq",
      "title": "Pour aller plus loin : limite de référence",
      "skill": "Utiliser $\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1$",
      "statement": "**Pour aller plus loin** (la limite $\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1$ n'est pas un attendu du programme ; voir le point 4 du cours). Que vaut $\\lim_{x \\to 0} \\frac{\\sin(6x)}{3x}$ ?",
      "options": [
        "$2$",
        "$\\frac{1}{2}$",
        "$1$",
        "$0$"
      ],
      "correctIndex": 0,
      "answer": "$2$",
      "hint1": "Fais apparaître $\\frac{\\sin(6x)}{6x}$.",
      "hint2": "$\\frac{\\sin(6x)}{3x} = 2 \\times \\frac{\\sin(6x)}{6x}$.",
      "solution": "Pour $x \\neq 0$, $\\frac{\\sin(6x)}{3x} = 2 \\times \\frac{\\sin(6x)}{6x}$. Quand $x \\to 0$, $X = 6x \\to 0$ et $\\frac{\\sin(X)}{X} \\to 1$. La limite vaut donc $2$."
    },
    {
      "id": "TA9-5",
      "tier": 4,
      "type": "mcq",
      "title": "Inéquation trigonométrique",
      "skill": "Résoudre $\\sin(x) \\ge a$ sur un intervalle",
      "statement": "Quel est l'ensemble des solutions dans $]-\\pi ; \\pi]$ de l'inéquation $\\sin(x) \\ge \\frac{1}{2}$ ?",
      "options": [
        "$S = \\left[\\frac{\\pi}{6} ; \\frac{5\\pi}{6}\\right]$",
        "$S = \\left[\\frac{\\pi}{6} ; \\pi\\right]$",
        "$S = \\left[-\\frac{\\pi}{3} ; \\frac{\\pi}{3}\\right]$",
        "$S = \\left]-\\pi ; \\frac{\\pi}{6}\\right] \\cup \\left[\\frac{5\\pi}{6} ; \\pi\\right]$"
      ],
      "correctIndex": 0,
      "answer": "$S = \\left[\\frac{\\pi}{6} ; \\frac{5\\pi}{6}\\right]$",
      "hint1": "Résous d'abord $\\sin(x) = \\frac{1}{2}$ dans $]-\\pi ; \\pi]$.",
      "hint2": "Les points du cercle d'ordonnée supérieure ou égale à $\\frac{1}{2}$ forment un arc « en haut » du cercle.",
      "solution": "Dans $]-\\pi ; \\pi]$, $\\sin(x) = \\frac{1}{2}$ pour $x = \\frac{\\pi}{6}$ et $x = \\frac{5\\pi}{6}$. Les points d'ordonnée au moins $\\frac{1}{2}$ sont sur l'arc qui joint ces deux points en passant par le point associé à $\\frac{\\pi}{2}$ : $S = \\left[\\frac{\\pi}{6} ; \\frac{5\\pi}{6}\\right]$. ($\\left[-\\frac{\\pi}{3} ; \\frac{\\pi}{3}\\right]$ est l'ensemble des solutions de $\\cos(x) \\ge \\frac{1}{2}$.)"
    }
  ],
  "TS3": [
    {
      "id": "TS3-1",
      "tier": 1,
      "type": "mcq",
      "title": "Codes à chiffres",
      "skill": "Dénombrer des $k$-uplets",
      "statement": "Un digicode demande un code de $4$ chiffres, chaque chiffre allant de $0$ à $9$ (les répétitions sont permises). Combien de codes différents existe-t-il ?",
      "options": [
        "$10\\,000$",
        "$5\\,040$",
        "$210$",
        "$40$"
      ],
      "correctIndex": 0,
      "answer": "$10\\,000$",
      "hint1": "L'ordre des chiffres compte et un chiffre peut être répété.",
      "hint2": "Il y a $10$ choix pour chacune des $4$ positions.",
      "solution": "Un code est un $4$-uplet de l'ensemble $\\{0 ; 1 ; \\dots ; 9\\}$ qui a $10$ éléments : il y a $10^4 = 10\\,000$ codes. ($5\\,040 = 10 \\times 9 \\times 8 \\times 7$ correspondrait à des chiffres distincts et $210 = \\binom{10}{4}$ à des choix sans ordre.)"
    },
    {
      "id": "TS3-2",
      "tier": 2,
      "type": "mcq",
      "title": "Podium d'une course",
      "skill": "Reconnaître un arrangement",
      "statement": "Une course oppose $12$ coureurs. Combien de podiums (premier, deuxième, troisième, sans ex æquo) sont possibles ?",
      "options": [
        "$1\\,320$",
        "$220$",
        "$1\\,728$",
        "$36$"
      ],
      "correctIndex": 0,
      "answer": "$1\\,320$",
      "hint1": "L'ordre compte (or, argent, bronze) et un coureur ne peut occuper deux places.",
      "hint2": "Il y a $12$ choix pour le premier, $11$ pour le deuxième, $10$ pour le troisième.",
      "solution": "Un podium est un arrangement de $3$ coureurs parmi $12$ : $\\frac{12!}{9!} = 12 \\times 11 \\times 10 = 1\\,320$. Le nombre $\\binom{12}{3} = 220$ compte les groupes de $3$ coureurs sans tenir compte de l'ordre."
    },
    {
      "id": "TS3-3",
      "tier": 2,
      "type": "mcq",
      "title": "Triangle de Pascal",
      "skill": "Utiliser la relation de Pascal",
      "statement": "On sait que $\\binom{9}{3} = 84$ et $\\binom{9}{4} = 126$. Que vaut $\\binom{10}{4}$ ?",
      "options": [
        "$210$",
        "$42$",
        "$252$",
        "$10\\,584$"
      ],
      "correctIndex": 0,
      "answer": "$210$",
      "hint1": "La relation de Pascal s'écrit $\\binom{n-1}{k-1} + \\binom{n-1}{k} = \\binom{n}{k}$.",
      "hint2": "Prends $n = 10$ et $k = 4$.",
      "solution": "D'après la relation de Pascal, $\\binom{10}{4} = \\binom{9}{3} + \\binom{9}{4} = 84 + 126 = 210$. On peut vérifier : $\\frac{10 \\times 9 \\times 8 \\times 7}{4 \\times 3 \\times 2 \\times 1} = \\frac{5\\,040}{24} = 210$."
    },
    {
      "id": "TS3-4",
      "tier": 3,
      "type": "mcq",
      "title": "Comité avec au moins une femme",
      "skill": "Dénombrer par passage au complémentaire",
      "statement": "Une entreprise compte $6$ femmes et $8$ hommes. On forme un comité de $3$ personnes. Combien de comités comportent au moins une femme ?",
      "options": [
        "$308$",
        "$364$",
        "$56$",
        "$168$"
      ],
      "correctIndex": 0,
      "answer": "$308$",
      "hint1": "Le contraire de « au moins une femme » est « aucune femme ».",
      "hint2": "Calcule $\\binom{14}{3}$ puis retire $\\binom{8}{3}$.",
      "solution": "Il y a $\\binom{14}{3} = \\frac{14 \\times 13 \\times 12}{6} = 364$ comités au total, dont $\\binom{8}{3} = 56$ sans aucune femme. Il y a donc $364 - 56 = 308$ comités comportant au moins une femme."
    },
    {
      "id": "TS3-5",
      "tier": 4,
      "type": "mcq",
      "title": "Probabilité d'une main",
      "skill": "Calculer une probabilité par dénombrement",
      "statement": "On tire simultanément $2$ cartes d'un jeu de $32$ cartes contenant $4$ as. Quelle est la probabilité d'obtenir deux as ?",
      "options": [
        "$\\frac{3}{248}$",
        "$\\frac{1}{64}$",
        "$\\frac{1}{8}$",
        "$\\frac{6}{31}$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{3}{248}$",
      "hint1": "Les mains de $2$ cartes sont équiprobables : il y en a $\\binom{32}{2}$.",
      "hint2": "Les mains favorables sont formées de $2$ as parmi $4$ : $\\binom{4}{2} = 6$.",
      "solution": "Il y a $\\binom{32}{2} = \\frac{32 \\times 31}{2} = 496$ mains équiprobables, dont $\\binom{4}{2} = 6$ formées de deux as. La probabilité vaut $\\frac{6}{496} = \\frac{3}{248}$. (Le résultat $\\frac{1}{64} = \\left(\\frac{4}{32}\\right)^2$ correspondrait à un tirage avec remise.)"
    }
  ],
  "TS4": [
    {
      "id": "TS4-1",
      "tier": 1,
      "type": "mcq",
      "title": "Affectation simultanée",
      "skill": "Exécuter une affectation simultanée",
      "statement": "Qu'affiche le programme Python suivant ?\n```python\na, b = 1, 1\nfor k in range(5):\n    a, b = b, a + b\nprint(a)\n```",
      "options": [
        "$8$",
        "$5$",
        "$13$",
        "$32$"
      ],
      "correctIndex": 0,
      "answer": "$8$",
      "hint1": "Le membre de droite `b, a + b` est évalué avant les affectations.",
      "hint2": "Couples successifs : (1 ; 1), (1 ; 2), (2 ; 3)…",
      "solution": "Couples (`a` ; `b`) successifs : (1 ; 1) → (1 ; 2) → (2 ; 3) → (3 ; 5) → (5 ; 8) → (8 ; 13). Après $5$ tours, `a` vaut $8$."
    },
    {
      "id": "TS4-2",
      "tier": 2,
      "type": "mcq",
      "title": "Seuil et limite",
      "skill": "Déterminer un rang à partir duquel une suite approche sa limite",
      "statement": "La suite définie par $u_0 = 2$ et $u_{n+1} = 0{,}5u_n + 5$ converge vers $10$. Qu'affiche le programme suivant ?\n```python\nu = 2\nn = 0\nwhile abs(u - 10) > 0.01:\n    u = 0.5 * u + 5\n    n = n + 1\nprint(n)\n```",
      "options": [
        "$10$",
        "$9$",
        "$11$",
        "$800$"
      ],
      "correctIndex": 0,
      "answer": "$10$",
      "hint1": "Note $\\ell$ la valeur fixe de la relation ($\\ell = 0{,}5\\ell + 5$) : la suite $(u_n - \\ell)$ est géométrique de raison $0{,}5$ et de premier terme $u_0 - \\ell = -8$.",
      "hint2": "Cherche le premier $n$ tel que $8 \\times 0{,}5^n \\le 0{,}01$, c'est-à-dire $2^n \\ge 800$.",
      "solution": "$|u_n - 10| = 8 \\times 0{,}5^n = \\frac{8}{2^n}$. On veut $2^n \\ge 800$ : $2^9 = 512 < 800$ et $2^{10} = 1024 \\ge 800$. Le programme affiche $10$."
    },
    {
      "id": "TS4-3",
      "tier": 3,
      "type": "mcq",
      "title": "Dichotomie",
      "skill": "Exécuter un algorithme de dichotomie",
      "statement": "Qu'affiche le programme suivant, qui encadre $\\sqrt{3}$ ?\n```python\ndef f(x):\n    return x ** 2 - 3\n\na = 1\nb = 2\nfor k in range(3):\n    m = (a + b) / 2\n    if f(a) * f(m) <= 0:\n        b = m\n    else:\n        a = m\nprint(a, b)\n```",
      "options": [
        "« 1.625 1.75 »",
        "« 1.5 1.75 »",
        "« 1.75 1.875 »",
        "« 1.6875 1.75 »"
      ],
      "correctIndex": 0,
      "answer": "« 1.625 1.75 »",
      "hint1": "Le test `f(a) * f(m) <= 0` signifie que $\\sqrt{3}$ est dans $[a ; m]$.",
      "hint2": "Premier milieu : $1{,}5$, et $f(1{,}5) = -0{,}75 < 0$.",
      "solution": "Étape 1 : $m = 1{,}5$, $f(1{,}5) = -0{,}75$ est du signe de $f(1) = -2$ : $a = 1{,}5$. Étape 2 : $m = 1{,}75$, $f(1{,}75) = 0{,}0625 > 0$ : $b = 1{,}75$. Étape 3 : $m = 1{,}625$, $f(1{,}625) \\approx -0{,}36 < 0$ : $a = 1{,}625$. Le programme affiche « 1.625 1.75 », donc $1{,}625 \\le \\sqrt{3} \\le 1{,}75$."
    },
    {
      "id": "TS4-4",
      "tier": 4,
      "type": "mcq",
      "title": "Monte-Carlo et intégrale",
      "skill": "Interpréter une méthode de Monte-Carlo",
      "statement": "On exécute le programme suivant.\n```python\nfrom random import random\n\ndef mc(n):\n    c = 0\n    for i in range(n):\n        x = random()\n        y = random()\n        if y <= x ** 3:\n            c = c + 1\n    return c / n\n\nprint(mc(100000))\n```\nAutour de quelle valeur le nombre affiché fluctue-t-il ?",
      "options": [
        "$\\frac{1}{4}$",
        "$\\frac{3}{4}$",
        "$\\frac{1}{3}$",
        "$\\frac{1}{2}$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{1}{4}$",
      "hint1": "Le point $(x ; y)$ est choisi uniformément dans le carré $[0 ; 1]^2$, d'aire $1$.",
      "hint2": "La proportion de points sous la courbe de $x \\mapsto x^3$ est proche de l'aire sous cette courbe.",
      "solution": "La proportion $\\frac{c}{n}$ est proche de l'aire du domaine $\\{0 \\le x \\le 1, 0 \\le y \\le x^3\\}$, c'est-à-dire de $\\int_0^1 x^3\\,\\mathrm{d}x = \\left[\\frac{x^4}{4}\\right]_0^1 = \\frac{1}{4}$."
    },
    {
      "id": "TS4-5",
      "tier": 4,
      "type": "mcq",
      "title": "Précision d'une dichotomie",
      "skill": "Déterminer le nombre d'étapes d'une dichotomie",
      "statement": "On applique la méthode de dichotomie à partir de l'intervalle $[0 ; 4]$. Combien d'étapes faut-il au minimum pour obtenir un intervalle de longueur inférieure ou égale à $10^{-2}$ ?",
      "options": [
        "$9$",
        "$8$",
        "$200$",
        "$400$"
      ],
      "correctIndex": 0,
      "answer": "$9$",
      "hint1": "Après $n$ étapes, la longueur vaut $\\frac{4}{2^n}$.",
      "hint2": "On veut $2^n \\ge 400$.",
      "solution": "$\\frac{4}{2^n} \\le 0{,}01 \\iff 2^n \\ge 400$. Or $2^8 = 256 < 400 \\le 2^9 = 512$ : il faut $9$ étapes."
    },
    {
      "id": "TS4-6",
      "tier": 4,
      "type": "mcq",
      "title": "Méthode de la sécante",
      "skill": "Calculer les itérés de la méthode de la sécante",
      "statement": "On approche $\\sqrt{2}$ par la méthode de la sécante appliquée à $f(x) = x^2 - 2$, avec $x_0 = 1$, $x_1 = 2$ et, pour $n \\ge 1$, $x_{n+1} = x_n - f(x_n) \\times \\dfrac{x_n - x_{n-1}}{f(x_n) - f(x_{n-1})}$. Quelle est la valeur de $x_3$ ?",
      "options": [
        "$\\frac{7}{5}$",
        "$\\frac{4}{3}$",
        "$\\frac{3}{2}$",
        "$\\frac{17}{12}$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{7}{5}$",
      "hint1": "Calcule d'abord $x_2$ à partir de $x_0$ et $x_1$, puis applique la formule à $x_1$ et $x_2$.",
      "hint2": "$f(1) = -1$ et $f(2) = 2$, donc $x_2 = 2 - 2 \\times \\frac{1}{3}$.",
      "solution": "$f(1) = -1$ et $f(2) = 2$, donc $x_2 = 2 - 2 \\times \\dfrac{2 - 1}{2 - (-1)} = 2 - \\dfrac{2}{3} = \\dfrac{4}{3}$. Puis $f\\left(\\dfrac{4}{3}\\right) = -\\dfrac{2}{9}$, d'où $x_3 = \\dfrac{4}{3} + \\dfrac{2}{9} \\times \\dfrac{\\frac{4}{3} - 2}{-\\frac{2}{9} - 2} = \\dfrac{4}{3} + \\dfrac{2}{9} \\times \\dfrac{3}{10} = \\dfrac{4}{3} + \\dfrac{1}{15} = \\dfrac{7}{5}$."
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
  ],
  "TA2": [
    {
      "id": "TA2-fiche_td",
      "title": "Fiche Terminale : Limites de suites et convergence",
      "filename": "Fiche_TA2_Limites_Suites.md",
      "statement": `## Fiche d'entraînement TA2 : Limites de suites et théorèmes de convergence

### Exercice 1 : Calculs de limites (5 points)
Déterminer la limite de chacune des suites suivantes, définies pour tout entier $n \\ge 1$ :
1. $u_n = 3n^2 - 5n + 1$
2. $v_n = \\frac{2n + 1}{n + 3}$
3. $w_n = \\frac{2 + (-1)^n}{n}$
4. $t_n = 5 \\times 0{,}8^n - 2$
5. $s_n = 3^n - 2^n$

### Exercice 2 : Théorème de comparaison (3 points)
Soit $(a_n)$ la suite définie pour tout $n \\in \\mathbb{N}$ par $a_n = n^2 + (-1)^n n$.
1. Montrer que pour tout $n \\in \\mathbb{N}$, $a_n \\ge n^2 - n$.
2. En déduire la limite de $(a_n)$.

### Exercice 3 : Convergence monotone (7 points)
Soit $(u_n)$ la suite définie par $u_0 = 1$ et, pour tout $n \\in \\mathbb{N}$, $u_{n+1} = \\sqrt{2u_n + 3}$. On note $f$ la fonction définie sur $[0 ; +\\infty[$ par $f(x) = \\sqrt{2x + 3}$, de sorte que $u_{n+1} = f(u_n)$.
1. Calculer $u_1$ et justifier que $f$ est croissante sur $[0 ; +\\infty[$.
2. Démontrer par récurrence que pour tout $n \\in \\mathbb{N}$, $0 \\le u_n \\le u_{n+1} \\le 3$.
3. En déduire que la suite $(u_n)$ converge.
4. Déterminer sa limite $\\ell$.

### Exercice 4 : Suite auxiliaire géométrique (5 points)
Soit $(u_n)$ la suite définie par $u_0 = 2$ et, pour tout $n \\in \\mathbb{N}$, $u_{n+1} = 0{,}6\\,u_n + 4$. On pose $v_n = u_n - 10$.
1. Montrer que $(v_n)$ est une suite géométrique dont on précisera la raison et le premier terme.
2. En déduire $u_n$ en fonction de $n$, puis la limite de $(u_n)$.
3. Montrer que $(u_n)$ est croissante.
4. Compléter la fonction Python suivante pour qu'elle renvoie le plus petit entier $n$ tel que $u_n > 9{,}9$, puis donner la valeur renvoyée.
\`\`\`python
def seuil():
    u = 2
    n = 0
    while ...:
        u = ...
        n = n + 1
    return n
\`\`\``,
      "solution": `### Correction Exercice 1
1. Forme indéterminée « $+\\infty - \\infty$ » : on factorise par le terme prépondérant. $u_n = n^2\\left(3 - \\frac{5}{n} + \\frac{1}{n^2}\\right)$ ; la parenthèse tend vers $3$ et $n^2 \\to +\\infty$, donc $\\lim u_n = +\\infty$.
2. $v_n = \\frac{n\\left(2 + \\frac{1}{n}\\right)}{n\\left(1 + \\frac{3}{n}\\right)} = \\frac{2 + \\frac{1}{n}}{1 + \\frac{3}{n}}$, donc $\\lim v_n = \\frac{2}{1} = 2$.
3. Comme $-1 \\le (-1)^n \\le 1$, on a $1 \\le 2 + (-1)^n \\le 3$, donc pour $n \\ge 1$ : $\\frac{1}{n} \\le w_n \\le \\frac{3}{n}$. Les deux suites qui encadrent tendent vers $0$ ; d'après le théorème des gendarmes, $\\lim w_n = 0$.
4. $-1 < 0{,}8 < 1$, donc $\\lim 0{,}8^n = 0$ et $\\lim t_n = 5 \\times 0 - 2 = -2$.
5. Forme indéterminée : $s_n = 3^n\\left(1 - \\left(\\frac{2}{3}\\right)^n\\right)$. Comme $-1 < \\frac{2}{3} < 1$, la parenthèse tend vers $1$ ; comme $3 > 1$, $3^n \\to +\\infty$. Donc $\\lim s_n = +\\infty$.

### Correction Exercice 2
1. $(-1)^n \\ge -1$ et $n \\ge 0$, donc $(-1)^n n \\ge -n$ et $a_n \\ge n^2 - n$.
2. $n^2 - n = n^2\\left(1 - \\frac{1}{n}\\right)$ pour $n \\ge 1$, qui tend vers $+\\infty$. D'après le théorème de comparaison, $\\lim a_n = +\\infty$.

### Correction Exercice 3
1. $u_1 = \\sqrt{2 \\times 1 + 3} = \\sqrt{5} \\approx 2{,}24$. Si $0 \\le a \\le b$, alors $0 < 2a + 3 \\le 2b + 3$ et, la fonction racine carrée étant croissante, $f(a) \\le f(b)$ : $f$ est croissante sur $[0 ; +\\infty[$.
2. Soit $\\mathcal{P}(n)$ : « $0 \\le u_n \\le u_{n+1} \\le 3$ ».
Initialisation : $u_0 = 1$ et $u_1 = \\sqrt{5}$ ; comme $5 \\le 9$, $\\sqrt{5} \\le 3$. Donc $0 \\le 1 \\le \\sqrt{5} \\le 3$ : $\\mathcal{P}(0)$ est vraie.
Hérédité : supposons $\\mathcal{P}(k)$ vraie pour un entier $k$, soit $0 \\le u_k \\le u_{k+1} \\le 3$. Comme $f$ est croissante sur $[0 ; +\\infty[$ : $f(0) \\le f(u_k) \\le f(u_{k+1}) \\le f(3)$, soit $\\sqrt{3} \\le u_{k+1} \\le u_{k+2} \\le 3$. Comme $\\sqrt{3} \\ge 0$, $\\mathcal{P}(k + 1)$ est vraie.
Conclusion : par récurrence, pour tout $n \\in \\mathbb{N}$, $0 \\le u_n \\le u_{n+1} \\le 3$.
3. La suite $(u_n)$ est croissante et majorée par $3$ ; d'après le théorème de convergence monotone, elle converge vers un réel $\\ell$, et $1 = u_0 \\le \\ell \\le 3$.
4. $f$ est continue sur $[0 ; +\\infty[$, donc en passant à la limite dans $u_{n+1} = f(u_n)$ : $\\ell = f(\\ell) = \\sqrt{2\\ell + 3}$.
Comme $\\ell \\ge 0$, cela équivaut à $\\ell^2 = 2\\ell + 3$, soit $\\ell^2 - 2\\ell - 3 = (\\ell - 3)(\\ell + 1) = 0$. Comme $\\ell \\ge 1$, $\\ell = 3$.

### Correction Exercice 4
1. $v_{n+1} = u_{n+1} - 10 = 0{,}6\\,u_n + 4 - 10 = 0{,}6\\,u_n - 6 = 0{,}6(u_n - 10) = 0{,}6\\,v_n$.
$(v_n)$ est géométrique de raison $0{,}6$ et de premier terme $v_0 = 2 - 10 = -8$.
2. $v_n = -8 \\times 0{,}6^n$, donc $u_n = v_n + 10 = 10 - 8 \\times 0{,}6^n$. Comme $-1 < 0{,}6 < 1$, $\\lim 0{,}6^n = 0$, donc $\\lim u_n = 10$.
3. $u_{n+1} - u_n = -8 \\times 0{,}6^{n+1} + 8 \\times 0{,}6^n = 8 \\times 0{,}6^n(1 - 0{,}6) = 3{,}2 \\times 0{,}6^n > 0$ : $(u_n)$ est strictement croissante.
4. La boucle continue tant que $u_n \\le 9{,}9$ : on écrit \`while u <= 9.9:\` et \`u = 0.6 * u + 4\`.
$u_8 = 10 - 8 \\times 0{,}6^8 \\approx 9{,}866 \\le 9{,}9$ et $u_9 = 10 - 8 \\times 0{,}6^9 \\approx 9{,}919 > 9{,}9$. Comme $(u_n)$ est croissante, la fonction renvoie $9$.`
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

