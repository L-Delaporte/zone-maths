/**
 * Cours du niveau « PASS / L.AS » (chapitres : js/data/chapters_sante.js, partie MATHS_CHAPTERS_PASS).
 * Mathématiques et biostatistiques de première année des études de santé : statistique descriptive,
 * probabilités, tests diagnostiques, lois usuelles, estimation, tests, épidémiologie, incertitudes,
 * équations différentielles et pharmacocinétique.
 * Chaque cours se termine par « Aux partiels : pièges fréquents » (QCM et questions courtes).
 * Contenu original.
 */
window.MATHS_COURSES_PASS = {
  "pass-01": {
    title: "PA-01 : Statistique descriptive : paramètres de position et de dispersion",
    domain: "Statistique descriptive",
    objectives: [
      "Reconnaître le type d'une variable (qualitative nominale ou ordinale, quantitative discrète ou continue).",
      "Calculer moyenne, médiane, mode, variance, écart type et coefficient de variation d'une série.",
      "Utiliser la formule de König-Huygens pour calculer une variance.",
      "Prévoir l'effet d'une transformation affine $Y = aX + b$ sur la moyenne, la variance et l'écart type."
    ],
    keyPoints: [
      {
        title: "1. Types de variables",
        content: "• **Qualitative nominale** : modalités sans ordre (groupe sanguin, sexe).\n• **Qualitative ordinale** : modalités ordonnées (stade d'une tumeur, douleur « faible / modérée / forte »).\n• **Quantitative discrète** : valeurs isolées, souvent des comptages (nombre de consultations).\n• **Quantitative continue** : mesure pouvant prendre toute valeur d'un intervalle (glycémie, taille).\nLe type de variable détermine les paramètres et les tests utilisables : une moyenne de groupes sanguins n'a aucun sens."
      },
      {
        title: "2. Paramètres de position",
        content: "Pour une série $x_1, \\dots, x_n$ : **moyenne** $\\bar{x} = \\dfrac{1}{n}\\sum_{i=1}^{n} x_i$ ; avec des effectifs $n_k$ : $\\bar{x} = \\dfrac{1}{n}\\sum_k n_k x_k$.\nLa **médiane** partage la série ordonnée en deux moitiés ; le **mode** est la valeur la plus fréquente ; les **quartiles** $Q_1$ et $Q_3$ laissent un quart des valeurs en dessous (resp. au-dessus).\nLa médiane est **robuste** : une valeur aberrante la modifie peu, alors qu'elle peut déplacer fortement la moyenne. Si la moyenne est nettement supérieure à la médiane, la distribution est étalée vers les grandes valeurs."
      },
      {
        title: "3. Variance, écart type et formule de König-Huygens",
        content: "Variance (de la série) : $V = \\dfrac{1}{n}\\sum_{i=1}^{n} (x_i - \\bar{x})^2$, écart type $\\sigma = \\sqrt{V}$ (même unité que les données).\n**König-Huygens** : $$V = \\overline{x^2} - \\bar{x}^2,$$ « moyenne des carrés moins carré de la moyenne ».\nEstimateur **sans biais** de la variance d'une population à partir d'un échantillon : $s^2 = \\dfrac{1}{n - 1}\\sum (x_i - \\bar{x})^2$.\n**Coefficient de variation** : $CV = \\dfrac{\\sigma}{\\bar{x}}$, sans unité, souvent en pourcentage ; il permet de comparer la dispersion de grandeurs d'unités ou d'ordres de grandeur différents."
      },
      {
        title: "4. Transformation affine",
        content: "Si $y_i = a x_i + b$, alors $$\\bar{y} = a\\bar{x} + b, \\qquad V(y) = a^2 V(x), \\qquad \\sigma_y = |a|\\,\\sigma_x.$$\nLe décalage $b$ ne change pas la dispersion. *Exemple* : passer des degrés Celsius aux degrés Fahrenheit ($F = 1{,}8\\,C + 32$) multiplie l'écart type par $1{,}8$.\nRegroupement de deux groupes : variance totale $=$ moyenne pondérée des variances $+$ variance des moyennes (pondérée par les effectifs)."
      },
      {
        title: "5. Aux partiels : pièges fréquents",
        content: "• Diviser par $n$ ou par $n - 1$ : lisez l'énoncé (variance de la série ou estimation de la variance de la population).\n• Oublier que l'écart type se multiplie par $|a|$ et la variance par $a^2$.\n• Calculer la moyenne de deux groupes en faisant la moyenne des moyennes sans pondérer par les effectifs.\n• Confondre écart type (dispersion des individus) et erreur standard (précision d'une moyenne, voir PA-06)."
      }
    ],
    methods: [
      {
        title: "Méthode : Variance par König-Huygens à partir d'un tableau d'effectifs",
        example: "Nombre de séances de kinésithérapie : $1$ (effectif $4$), $2$ (effectif $10$), $3$ (effectif $6$). Calculer la variance.",
        steps: [
          "**Étape 1 (Moyenne)** : $n = 20$, $\\bar{x} = \\dfrac{4 + 20 + 18}{20} = 2{,}1$.",
          "**Étape 2 (Moyenne des carrés)** : $\\overline{x^2} = \\dfrac{4 \\times 1 + 10 \\times 4 + 6 \\times 9}{20} = \\dfrac{98}{20} = 4{,}9$.",
          "**Étape 3 (Conclure)** : $V = 4{,}9 - 2{,}1^2 = 4{,}9 - 4{,}41 = 0{,}49$, d'où $\\sigma = 0{,}7$."
        ]
      },
      {
        title: "Méthode : Changement d'unité",
        example: "Une concentration a pour moyenne $2{,}4$ mg/L et pour écart type $0{,}3$ mg/L. Exprimer ces paramètres en $\\mu$g/L.",
        steps: [
          "**Étape 1 (Repérer la transformation)** : $y = 1\\,000\\,x$ ($a = 1\\,000$, $b = 0$).",
          "**Étape 2 (Appliquer)** : moyenne $2\\,400$ $\\mu$g/L, écart type $300$ $\\mu$g/L.",
          "**Étape 3 (Variance)** : elle est multipliée par $1\\,000^2 = 10^6$ ; le coefficient de variation ($12{,}5\\,\\%$) ne change pas."
        ]
      }
    ],
    traps: [
      "⚠️ La variance s'exprime dans le carré de l'unité des données ; seul l'écart type a la même unité.",
      "⚠️ La moyenne d'une variable qualitative codée par des nombres (groupe sanguin codé $1$, $2$, $3$, $4$) n'a pas de sens.",
      "⚠️ Ajouter une constante à toutes les valeurs modifie la moyenne mais pas l'écart type."
    ],
    flashcards: [
      { q: "Formule de König-Huygens ?", a: "$V = \\overline{x^2} - \\bar{x}^2$." },
      { q: "Effet de $Y = aX + b$ sur l'écart type ?", a: "$\\sigma_Y = |a|\\,\\sigma_X$." },
      { q: "Définition du coefficient de variation ?", a: "$CV = \\sigma / \\bar{x}$, sans unité." },
      { q: "Quel paramètre de position résiste aux valeurs aberrantes ?", a: "La médiane." }
    ]
  },

  "pass-02": {
    title: "PA-02 : Probabilités : dénombrement, indépendance et probabilités conditionnelles",
    domain: "Probabilités",
    objectives: [
      "Dénombrer à l'aide des arrangements et des combinaisons.",
      "Calculer la probabilité d'une réunion et d'un événement contraire.",
      "Utiliser la formule des probabilités totales et la formule de Bayes.",
      "Distinguer événements indépendants et événements incompatibles."
    ],
    keyPoints: [
      {
        title: "1. Dénombrement",
        content: "• Nombre de listes ordonnées de $k$ éléments distincts pris parmi $n$ (**arrangements**) : $A_n^k = \\dfrac{n!}{(n - k)!}$.\n• Nombre de sous-ensembles de $k$ éléments parmi $n$ (**combinaisons**) : $\\dbinom{n}{k} = \\dfrac{n!}{k!\\,(n - k)!}$.\n• Nombre de permutations de $n$ éléments : $n!$ ; nombre de $k$-listes avec répétition : $n^k$.\nQuestion clé : l'ordre compte-t-il ? (attribuer des postes différents : oui ; tirer un groupe : non)."
      },
      {
        title: "2. Règles de calcul",
        content: "$P(\\bar{A}) = 1 - P(A)$ et $$P(A \\cup B) = P(A) + P(B) - P(A \\cap B).$$\nProbabilité conditionnelle (si $P(B) > 0$) : $P(A \\mid B) = \\dfrac{P(A \\cap B)}{P(B)}$, d'où $P(A \\cap B) = P(B)\\,P(A \\mid B)$.\n« Au moins un » : passer par le contraire, $P(\\text{au moins un}) = 1 - P(\\text{aucun})$."
      },
      {
        title: "3. Probabilités totales et formule de Bayes",
        content: "Si $B_1, \\dots, B_k$ forment une partition de l'univers : $$P(A) = \\sum_{i} P(B_i)\\,P(A \\mid B_i).$$\n**Bayes** : $$P(B_j \\mid A) = \\dfrac{P(B_j)\\,P(A \\mid B_j)}{\\sum_i P(B_i)\\,P(A \\mid B_i)}.$$\nBayes permet d'« inverser » un conditionnement : passer de $P(\\text{symptôme} \\mid \\text{maladie})$ à $P(\\text{maladie} \\mid \\text{symptôme})$, ce qui exige de connaître la fréquence de la maladie."
      },
      {
        title: "4. Indépendance et incompatibilité",
        content: "$A$ et $B$ sont **indépendants** si $P(A \\cap B) = P(A)\\,P(B)$, c'est-à-dire $P(A \\mid B) = P(A)$.\n$A$ et $B$ sont **incompatibles** si $A \\cap B = \\varnothing$, donc $P(A \\cap B) = 0$.\nDeux événements de probabilités non nulles incompatibles ne sont **jamais** indépendants : savoir que $B$ est réalisé rend $A$ impossible."
      },
      {
        title: "5. Aux partiels : pièges fréquents",
        content: "• Confondre $P(A \\mid B)$ et $P(B \\mid A)$ : « $90\\,\\%$ des malades ont le symptôme » ne dit pas que $90\\,\\%$ des porteurs du symptôme sont malades.\n• Additionner des probabilités d'événements non incompatibles sans retrancher l'intersection.\n• Utiliser des arrangements alors que l'ordre ne compte pas (ou l'inverse).\n• Croire qu'« incompatibles » et « indépendants » sont synonymes."
      }
    ],
    methods: [
      {
        title: "Méthode : Arbre pondéré et formule de Bayes",
        example: "$60\\,\\%$ des patients d'un service ont plus de $70$ ans ; $10\\,\\%$ d'entre eux chutent, contre $2\\,\\%$ des autres. Un patient a chuté : probabilité qu'il ait plus de $70$ ans ?",
        steps: [
          "**Étape 1 (Arbre)** : $P(V) = 0{,}6$, $P(C \\mid V) = 0{,}1$, $P(C \\mid \\bar{V}) = 0{,}02$.",
          "**Étape 2 (Probabilités totales)** : $P(C) = 0{,}6 \\times 0{,}1 + 0{,}4 \\times 0{,}02 = 0{,}068$.",
          "**Étape 3 (Bayes)** : $P(V \\mid C) = \\dfrac{0{,}06}{0{,}068} \\approx 0{,}88$."
        ]
      },
      {
        title: "Méthode : Dénombrer un tirage avec contrainte",
        example: "On forme un comité de $3$ personnes parmi $5$ médecins et $4$ infirmiers, avec exactement $1$ médecin.",
        steps: [
          "**Étape 1 (Ordre ?)** : un comité est un ensemble, l'ordre ne compte pas : combinaisons.",
          "**Étape 2 (Principe multiplicatif)** : $\\dbinom{5}{1} \\times \\dbinom{4}{2} = 5 \\times 6 = 30$.",
          "**Étape 3 (Probabilité, tirage au hasard)** : $\\dfrac{30}{\\binom{9}{3}} = \\dfrac{30}{84} = \\dfrac{5}{14}$."
        ]
      }
    ],
    traps: [
      "⚠️ $P(A \\mid B) \\neq P(B \\mid A)$ en général : c'est l'erreur de raisonnement la plus fréquente en médecine.",
      "⚠️ Incompatibles (intersection vide) n'est pas indépendants (produit des probabilités).",
      "⚠️ Pour « au moins un », le calcul direct est long et source d'oublis : passez par l'événement contraire."
    ],
    flashcards: [
      { q: "Formule de $\\dbinom{n}{k}$ ?", a: "$\\dfrac{n!}{k!\\,(n - k)!}$." },
      { q: "Définition de l'indépendance de $A$ et $B$ ?", a: "$P(A \\cap B) = P(A)\\,P(B)$." },
      { q: "Formule de Bayes pour deux causes $B$ et $\\bar{B}$ ?", a: "$P(B \\mid A) = \\dfrac{P(B)P(A \\mid B)}{P(B)P(A \\mid B) + P(\\bar{B})P(A \\mid \\bar{B})}$." },
      { q: "Valeur de $A_n^k$ ?", a: "$\\dfrac{n!}{(n - k)!}$ (listes ordonnées sans répétition)." }
    ]
  },

  "pass-03": {
    title: "PA-03 : Tests diagnostiques : sensibilité, spécificité et valeurs prédictives",
    domain: "Tests diagnostiques",
    objectives: [
      "Construire et lire le tableau de contingence d'un test diagnostique.",
      "Calculer sensibilité, spécificité et rapports de vraisemblance.",
      "Calculer les valeurs prédictives positive et négative en fonction de la prévalence.",
      "Interpréter un résultat de test en tenant compte du contexte clinique."
    ],
    keyPoints: [
      {
        title: "1. Tableau de contingence",
        content: "On croise l'état réel ($M$ malade, $\\bar{M}$ non malade) et le résultat du test ($T^+$, $T^-$) :\n• **VP** (vrais positifs) : malades testés positifs ; **FN** (faux négatifs) : malades testés négatifs ;\n• **FP** (faux positifs) : non-malades testés positifs ; **VN** (vrais négatifs) : non-malades testés négatifs.\nLa **prévalence** est $p = P(M) = \\dfrac{VP + FN}{\\text{total}}$."
      },
      {
        title: "2. Sensibilité et spécificité",
        content: "**Sensibilité** : $Se = P(T^+ \\mid M) = \\dfrac{VP}{VP + FN}$ (aptitude à détecter les malades).\n**Spécificité** : $Sp = P(T^- \\mid \\bar{M}) = \\dfrac{VN}{VN + FP}$ (aptitude à reconnaître les non-malades).\nCe sont des qualités **intrinsèques** du test : elles ne dépendent pas de la prévalence. Un test très sensible sert à **éliminer** un diagnostic quand il est négatif ; un test très spécifique sert à le **confirmer** quand il est positif."
      },
      {
        title: "3. Valeurs prédictives et prévalence",
        content: "$VPP = P(M \\mid T^+)$ et $VPN = P(\\bar{M} \\mid T^-)$. Par la formule de Bayes :\n$$VPP = \\dfrac{Se\\,p}{Se\\,p + (1 - Sp)(1 - p)}, \\qquad VPN = \\dfrac{Sp\\,(1 - p)}{Sp\\,(1 - p) + (1 - Se)\\,p}.$$\nQuand la prévalence **augmente**, la VPP augmente et la VPN diminue. Dans une population où la maladie est rare, même un bon test a une VPP faible : la plupart des positifs sont des faux positifs."
      },
      {
        title: "4. Rapports de vraisemblance",
        content: "$RV^+ = \\dfrac{Se}{1 - Sp}$ et $RV^- = \\dfrac{1 - Se}{Sp}$.\nAvec les cotes ($\\text{cote} = \\dfrac{p}{1 - p}$) : $$\\text{cote post-test} = \\text{cote pré-test} \\times RV.$$\nUn $RV^+ > 10$ ou un $RV^- < 0{,}1$ modifie fortement la probabilité de maladie ; un $RV$ proche de $1$ n'apporte presque rien."
      },
      {
        title: "5. Aux partiels : pièges fréquents",
        content: "• Calculer la sensibilité « en ligne » ($VP$ sur l'ensemble des positifs) : c'est la VPP. La sensibilité se calcule sur les **malades**.\n• Croire que la VPP est une propriété du test : elle dépend de la population testée.\n• Utiliser les VPP et VPN d'un tableau issu d'une étude cas-témoins (prévalence fixée artificiellement).\n• Oublier que $1 - Sp$ est la proportion de faux positifs **parmi les non-malades**."
      }
    ],
    methods: [
      {
        title: "Méthode : VPP à partir de Se, Sp et de la prévalence",
        example: "$Se = 0{,}9$, $Sp = 0{,}95$, prévalence $2\\,\\%$. Calculer la VPP.",
        steps: [
          "**Étape 1 (Population fictive de $10\\,000$ personnes)** : $200$ malades, $9\\,800$ non-malades.",
          "**Étape 2 (Positifs)** : $VP = 0{,}9 \\times 200 = 180$ ; $FP = 0{,}05 \\times 9\\,800 = 490$.",
          "**Étape 3 (Conclure)** : $VPP = \\dfrac{180}{180 + 490} \\approx 0{,}27$ : environ $27\\,\\%$ seulement des positifs sont malades."
        ]
      },
      {
        title: "Méthode : Utiliser un rapport de vraisemblance",
        example: "Probabilité pré-test $0{,}1$, test positif avec $RV^+ = 9$. Probabilité post-test ?",
        steps: [
          "**Étape 1 (Cote pré-test)** : $\\dfrac{0{,}1}{0{,}9} = \\dfrac{1}{9}$.",
          "**Étape 2 (Cote post-test)** : $\\dfrac{1}{9} \\times 9 = 1$.",
          "**Étape 3 (Revenir à une probabilité)** : $\\dfrac{\\text{cote}}{1 + \\text{cote}} = \\dfrac{1}{2} = 0{,}5$."
        ]
      }
    ],
    traps: [
      "⚠️ Sensibilité et spécificité se lisent dans les colonnes « malades » et « non-malades », les valeurs prédictives dans les lignes « test positif » et « test négatif ».",
      "⚠️ Une VPP mesurée à l'hôpital (prévalence élevée) ne s'applique pas au dépistage en population générale.",
      "⚠️ Une cote n'est pas une probabilité : une cote de $1$ correspond à une probabilité de $0{,}5$."
    ],
    flashcards: [
      { q: "Définition de la sensibilité ?", a: "$Se = P(T^+ \\mid M) = \\dfrac{VP}{VP + FN}$." },
      { q: "Effet d'une hausse de prévalence sur VPP et VPN ?", a: "La VPP augmente, la VPN diminue." },
      { q: "Formule de $RV^+$ ?", a: "$RV^+ = \\dfrac{Se}{1 - Sp}$." },
      { q: "Les grandeurs intrinsèques d'un test ?", a: "Sensibilité et spécificité (indépendantes de la prévalence)." }
    ]
  },

  "pass-04": {
    title: "PA-04 : Variables aléatoires discrètes : lois binomiale et de Poisson",
    domain: "Lois discrètes",
    objectives: [
      "Calculer l'espérance et la variance d'une variable aléatoire discrète.",
      "Utiliser la linéarité de l'espérance et les propriétés de la variance.",
      "Reconnaître et utiliser une loi binomiale et une loi de Poisson.",
      "Justifier l'approximation d'une loi binomiale par une loi de Poisson."
    ],
    keyPoints: [
      {
        title: "1. Espérance et variance",
        content: "Pour $X$ prenant les valeurs $x_i$ avec les probabilités $p_i$ :\n$$E(X) = \\sum_i p_i x_i, \\qquad V(X) = E(X^2) - E(X)^2, \\qquad \\sigma(X) = \\sqrt{V(X)}.$$\nPropriétés : $E(aX + b) = aE(X) + b$ et $V(aX + b) = a^2 V(X)$ ; $E(X + Y) = E(X) + E(Y)$ toujours ; $V(X + Y) = V(X) + V(Y)$ si $X$ et $Y$ sont **indépendantes**."
      },
      {
        title: "2. Loi de Bernoulli et loi binomiale",
        content: "Une épreuve de Bernoulli a deux issues (succès de probabilité $p$) : $E = p$, $V = p(1 - p)$.\n$X \\sim \\mathcal{B}(n, p)$ compte les succès dans $n$ épreuves **identiques et indépendantes** :\n$$P(X = k) = \\dbinom{n}{k} p^k (1 - p)^{n - k}, \\qquad E(X) = np, \\qquad V(X) = np(1 - p).$$\n*Exemple* : nombre de patients répondeurs parmi $n$ traités, chacun répondant avec la probabilité $p$."
      },
      {
        title: "3. Loi de Poisson",
        content: "$X \\sim \\mathcal{P}(\\lambda)$ ($\\lambda > 0$) modélise un nombre d'événements **rares** survenant indépendamment dans un intervalle de temps ou d'espace (désintégrations par seconde, cas d'une maladie rare par an) :\n$$P(X = k) = e^{-\\lambda} \\dfrac{\\lambda^k}{k!}, \\qquad E(X) = V(X) = \\lambda.$$\nSi $X \\sim \\mathcal{P}(\\lambda)$ et $Y \\sim \\mathcal{P}(\\mu)$ sont indépendantes, $X + Y \\sim \\mathcal{P}(\\lambda + \\mu)$."
      },
      {
        title: "4. Approximation de la binomiale par la loi de Poisson",
        content: "Quand $n$ est grand et $p$ petit (critère usuel : $n \\geq 30$ et $p \\leq 0{,}1$, avec $np$ modéré), $$\\mathcal{B}(n, p) \\approx \\mathcal{P}(np).$$\nL'approximation conserve l'espérance ; la variance $np(1 - p)$ est alors très proche de $np$.\nSi au contraire $np$ et $n(1 - p)$ sont tous deux grands, on utilise une approximation normale (PA-05)."
      },
      {
        title: "5. Aux partiels : pièges fréquents",
        content: "• Additionner des écarts types : ce sont les **variances** qui s'additionnent (variables indépendantes).\n• Oublier le coefficient $\\dbinom{n}{k}$ dans $P(X = k)$.\n• Utiliser une loi binomiale pour des tirages **sans remise** dans une petite population (loi hypergéométrique).\n• Calculer $P(X \\geq 1)$ en sommant tous les termes au lieu d'écrire $1 - P(X = 0)$."
      }
    ],
    methods: [
      {
        title: "Méthode : Reconnaître une loi binomiale",
        example: "Un traitement provoque des nausées chez $15\\,\\%$ des patients. On traite $8$ patients. Probabilité qu'aucun n'ait de nausées ?",
        steps: [
          "**Étape 1 (Justifier)** : $8$ épreuves identiques et indépendantes, succès « nausées » de probabilité $0{,}15$ : $X \\sim \\mathcal{B}(8 ; 0{,}15)$.",
          "**Étape 2 (Calculer)** : $P(X = 0) = 0{,}85^8 \\approx 0{,}272$.",
          "**Étape 3 (Paramètres)** : $E(X) = 1{,}2$ et $V(X) = 8 \\times 0{,}15 \\times 0{,}85 = 1{,}02$."
        ]
      },
      {
        title: "Méthode : Approximation par une loi de Poisson",
        example: "Un effet indésirable touche $1$ patient sur $500$. On traite $1\\,000$ patients : probabilité d'observer au plus $1$ cas ?",
        steps: [
          "**Étape 1 (Conditions)** : $n = 1\\,000$ grand, $p = 0{,}002$ petit : $X \\approx \\mathcal{P}(2)$.",
          "**Étape 2 (Calculer)** : $P(X \\leq 1) \\approx e^{-2}(1 + 2) = 3e^{-2}$.",
          "**Étape 3 (Valeur)** : avec $e^{-2} \\approx 0{,}135\\,3$, on trouve environ $0{,}406$."
        ]
      }
    ],
    traps: [
      "⚠️ Pour une loi de Poisson, espérance et variance sont égales à $\\lambda$ ; l'écart type vaut $\\sqrt{\\lambda}$.",
      "⚠️ $V(X - Y) = V(X) + V(Y)$ (et non la différence) pour des variables indépendantes.",
      "⚠️ La loi binomiale exige l'indépendance des épreuves : des patients d'une même famille ne sont pas toujours indépendants."
    ],
    flashcards: [
      { q: "Espérance et variance de $\\mathcal{B}(n, p)$ ?", a: "$np$ et $np(1 - p)$." },
      { q: "$P(X = k)$ pour $X \\sim \\mathcal{P}(\\lambda)$ ?", a: "$e^{-\\lambda}\\dfrac{\\lambda^k}{k!}$." },
      { q: "Condition usuelle d'approximation de $\\mathcal{B}(n, p)$ par $\\mathcal{P}(np)$ ?", a: "$n$ grand ($n \\geq 30$) et $p$ petit ($p \\leq 0{,}1$)." },
      { q: "Valeur de $V(aX + b)$ ?", a: "$a^2 V(X)$." }
    ]
  },

  "pass-05": {
    title: "PA-05 : Variables aléatoires continues et loi normale",
    domain: "Loi normale",
    objectives: [
      "Calculer une probabilité, une espérance à partir d'une densité ou d'une fonction de répartition.",
      "Utiliser la loi uniforme et la loi exponentielle.",
      "Centrer et réduire une variable de loi normale et lire une probabilité.",
      "Utiliser les valeurs de référence $1{,}96$ et $2{,}58$ de la loi normale centrée réduite."
    ],
    keyPoints: [
      {
        title: "1. Densité et fonction de répartition",
        content: "Une densité $f$ est positive et vérifie $\\int_{-\\infty}^{+\\infty} f(x)\\,dx = 1$. Alors $$P(a \\leq X \\leq b) = \\int_a^b f(x)\\,dx, \\qquad F(x) = P(X \\leq x).$$\nPour une variable continue, $P(X = a) = 0$ : $\\leq$ et $<$ donnent la même probabilité.\n$E(X) = \\int x f(x)\\,dx$ et $V(X) = E(X^2) - E(X)^2$."
      },
      {
        title: "2. Lois uniforme et exponentielle",
        content: "**Uniforme sur $[a ; b]$** : $f(x) = \\dfrac{1}{b - a}$, $P(c \\leq X \\leq d) = \\dfrac{d - c}{b - a}$, $E(X) = \\dfrac{a + b}{2}$.\n**Exponentielle de paramètre $\\lambda$** : $f(x) = \\lambda e^{-\\lambda x}$ pour $x \\geq 0$, $$P(X > t) = e^{-\\lambda t}, \\qquad E(X) = \\dfrac{1}{\\lambda}.$$\nElle modélise une durée de vie « sans vieillissement » (durée avant désintégration d'un noyau radioactif)."
      },
      {
        title: "3. Loi normale et centrage-réduction",
        content: "$X \\sim \\mathcal{N}(\\mu, \\sigma^2)$ a une densité en cloche symétrique autour de $\\mu$. Attention : le second paramètre est la **variance**.\nSi $X \\sim \\mathcal{N}(\\mu, \\sigma^2)$, alors $$Z = \\dfrac{X - \\mu}{\\sigma} \\sim \\mathcal{N}(0, 1).$$\nOn note $\\Phi(z) = P(Z \\leq z)$ ; par symétrie $\\Phi(-z) = 1 - \\Phi(z)$. Une somme de variables normales indépendantes est normale : moyennes et **variances** s'additionnent."
      },
      {
        title: "4. Valeurs de référence",
        content: "Pour $Z \\sim \\mathcal{N}(0, 1)$ :\n• $P(-1 \\leq Z \\leq 1) \\approx 0{,}68$ ; $P(-2 \\leq Z \\leq 2) \\approx 0{,}95$ ;\n• $P(-1{,}96 \\leq Z \\leq 1{,}96) \\approx 0{,}95$, soit $\\Phi(1{,}96) \\approx 0{,}975$ ;\n• $P(-2{,}58 \\leq Z \\leq 2{,}58) \\approx 0{,}99$ ; $\\Phi(1{,}645) \\approx 0{,}95$.\n**Intervalle de référence** (« valeurs normales » d'un dosage) : $[\\mu - 1{,}96\\sigma ; \\mu + 1{,}96\\sigma]$ contient $95\\,\\%$ des sujets sains."
      },
      {
        title: "5. Aux partiels : pièges fréquents",
        content: "• Diviser par la variance au lieu de l'écart type en centrant-réduisant ($\\mathcal{N}(50, 25)$ a pour écart type $5$).\n• Oublier la symétrie : $P(Z > 2) = 1 - \\Phi(2)$, et $P(|Z| > 1{,}96) \\approx 0{,}05$ (deux queues).\n• Additionner des écarts types pour une somme de variables indépendantes.\n• Croire qu'un résultat hors de l'intervalle de référence signe une maladie : $5\\,\\%$ des sujets sains en sortent."
      }
    ],
    methods: [
      {
        title: "Méthode : Calculer une probabilité pour une loi normale",
        example: "La glycémie à jeun suit $\\mathcal{N}(0{,}95 ; 0{,}1^2)$ (en g/L). Calculer $P(X > 1{,}15)$, sachant $\\Phi(2) \\approx 0{,}977$.",
        steps: [
          "**Étape 1 (Centrer-réduire)** : $z = \\dfrac{1{,}15 - 0{,}95}{0{,}1} = 2$.",
          "**Étape 2 (Lire)** : $P(X > 1{,}15) = P(Z > 2) = 1 - \\Phi(2)$.",
          "**Étape 3 (Conclure)** : $P \\approx 1 - 0{,}977 = 0{,}023$."
        ]
      },
      {
        title: "Méthode : Retrouver un seuil (quantile)",
        example: "Le débit expiratoire suit $\\mathcal{N}(450 ; 60^2)$ (L/min). Quel seuil n'est dépassé que par $2{,}5\\,\\%$ des sujets ?",
        steps: [
          "**Étape 1 (Quantile de $Z$)** : $P(Z \\leq 1{,}96) \\approx 0{,}975$.",
          "**Étape 2 (Revenir à $X$)** : $x = \\mu + 1{,}96\\,\\sigma$.",
          "**Étape 3 (Calculer)** : $x = 450 + 1{,}96 \\times 60 = 567{,}6$ L/min."
        ]
      }
    ],
    traps: [
      "⚠️ Dans $\\mathcal{N}(\\mu, \\sigma^2)$, le second paramètre est la variance : vérifiez s'il faut en prendre la racine.",
      "⚠️ Pour une variable continue, une densité peut dépasser $1$ : c'est l'aire sous la courbe qui est une probabilité.",
      "⚠️ $1{,}96$ correspond à $95\\,\\%$ en **bilatéral** ; en unilatéral, le seuil à $5\\,\\%$ est $1{,}645$."
    ],
    flashcards: [
      { q: "Variable centrée réduite associée à $X \\sim \\mathcal{N}(\\mu, \\sigma^2)$ ?", a: "$Z = \\dfrac{X - \\mu}{\\sigma}$." },
      { q: "Valeur de $P(-1{,}96 \\leq Z \\leq 1{,}96)$ ?", a: "Environ $0{,}95$." },
      { q: "$P(X > t)$ pour une loi exponentielle de paramètre $\\lambda$ ?", a: "$e^{-\\lambda t}$." },
      { q: "Relation de symétrie pour $\\Phi$ ?", a: "$\\Phi(-z) = 1 - \\Phi(z)$." }
    ]
  },

  "pass-06": {
    title: "PA-06 : Échantillonnage et intervalles de confiance",
    domain: "Intervalles de confiance",
    objectives: [
      "Énoncer le théorème central limite et calculer une erreur standard.",
      "Construire l'intervalle de confiance d'une moyenne et d'une proportion.",
      "Interpréter correctement un intervalle de confiance.",
      "Déterminer le nombre de sujets nécessaire pour une précision donnée."
    ],
    keyPoints: [
      {
        title: "1. Moyenne d'échantillon et théorème central limite",
        content: "Pour un échantillon de $n$ observations indépendantes de moyenne $\\mu$ et d'écart type $\\sigma$, la moyenne $\\bar{X}$ vérifie $$E(\\bar{X}) = \\mu, \\qquad \\sigma_{\\bar{X}} = \\dfrac{\\sigma}{\\sqrt{n}}.$$\n**Théorème central limite** : pour $n$ grand (en pratique $n \\geq 30$), $\\bar{X}$ suit approximativement $\\mathcal{N}\\left(\\mu, \\dfrac{\\sigma^2}{n}\\right)$, quelle que soit la loi des observations."
      },
      {
        title: "2. Erreur standard",
        content: "L'**erreur standard** (ou écart type de la moyenne) mesure la précision de l'estimation :\n• d'une moyenne : $ES = \\dfrac{s}{\\sqrt{n}}$ ;\n• d'une proportion observée $f$ : $ES = \\sqrt{\\dfrac{f(1 - f)}{n}}$.\nL'écart type $s$ décrit la dispersion des **individus** ; l'erreur standard décrit la dispersion des **moyennes** d'échantillons. Elle diminue comme $\\dfrac{1}{\\sqrt{n}}$."
      },
      {
        title: "3. Intervalles de confiance",
        content: "**Moyenne, grand échantillon** : $$IC_{95\\,\\%} = \\left[\\bar{x} - 1{,}96\\dfrac{s}{\\sqrt{n}} ; \\bar{x} + 1{,}96\\dfrac{s}{\\sqrt{n}}\\right].$$\n**Petit échantillon** issu d'une loi normale : remplacer $1{,}96$ par le quantile $t_{n-1}$ de la loi de Student à $n - 1$ degrés de liberté.\n**Proportion** : $\\left[f - 1{,}96\\sqrt{\\dfrac{f(1 - f)}{n}} ; f + 1{,}96\\sqrt{\\dfrac{f(1 - f)}{n}}\\right]$, valable si $nf \\geq 5$ et $n(1 - f) \\geq 5$.\nÀ $99\\,\\%$, on utilise $2{,}58$ : l'intervalle est plus large."
      },
      {
        title: "4. Interprétation et nombre de sujets nécessaire",
        content: "Un $IC$ à $95\\,\\%$ est obtenu par une méthode qui, sur un grand nombre d'échantillons, fournit un intervalle contenant la vraie valeur dans $95\\,\\%$ des cas. La vraie valeur est fixe ; c'est l'intervalle qui est aléatoire.\nPour une demi-largeur $d$ fixée : $$n \\geq \\left(\\dfrac{1{,}96\\,\\sigma}{d}\\right)^2 \\ \\text{(moyenne)}, \\qquad n \\geq \\dfrac{1{,}96^2 f(1 - f)}{d^2} \\ \\text{(proportion)},$$ en arrondissant à l'entier **supérieur**. Diviser la largeur par $2$ demande $4$ fois plus de sujets."
      },
      {
        title: "5. Aux partiels : pièges fréquents",
        content: "• Utiliser l'écart type au lieu de l'erreur standard dans un $IC$ de moyenne (intervalle beaucoup trop large).\n• Dire « la vraie moyenne a $95\\,\\%$ de chances d'être dans $[a ; b]$ » : la formulation attendue porte sur la méthode.\n• Croire qu'un $IC$ à $95\\,\\%$ contient $95\\,\\%$ des individus : c'est le rôle de l'intervalle de référence (PA-05).\n• Arrondir un nombre de sujets à l'entier inférieur."
      }
    ],
    methods: [
      {
        title: "Méthode : Intervalle de confiance d'une moyenne",
        example: "Sur $64$ patients, la cholestérolémie moyenne est $2{,}10$ g/L avec $s = 0{,}40$ g/L. Construire l'$IC$ à $95\\,\\%$.",
        steps: [
          "**Étape 1 (Erreur standard)** : $ES = \\dfrac{0{,}40}{\\sqrt{64}} = 0{,}05$.",
          "**Étape 2 (Demi-largeur)** : $1{,}96 \\times 0{,}05 = 0{,}098$.",
          "**Étape 3 (Intervalle)** : $IC_{95\\,\\%} \\approx [2{,}002 ; 2{,}198]$ g/L."
        ]
      },
      {
        title: "Méthode : Nombre de sujets pour estimer une proportion",
        example: "On veut estimer une prévalence voisine de $10\\,\\%$ à $\\pm 2\\,\\%$ près (confiance $95\\,\\%$).",
        steps: [
          "**Étape 1 (Formule)** : $n \\geq \\dfrac{1{,}96^2 \\times 0{,}1 \\times 0{,}9}{0{,}02^2}$.",
          "**Étape 2 (Calculer)** : $n \\geq \\dfrac{3{,}841\\,6 \\times 0{,}09}{0{,}000\\,4} = 864{,}36$.",
          "**Étape 3 (Arrondir au-dessus)** : il faut $865$ sujets."
        ]
      }
    ],
    traps: [
      "⚠️ « Moyenne $\\pm$ écart type » décrit les individus ; « moyenne $\\pm$ $1{,}96$ erreur standard » est l'$IC$ de la moyenne.",
      "⚠️ L'intervalle de confiance d'une proportion exige les conditions $nf \\geq 5$ et $n(1 - f) \\geq 5$.",
      "⚠️ Augmenter le niveau de confiance (de $95\\,\\%$ à $99\\,\\%$) élargit l'intervalle à $n$ fixé."
    ],
    flashcards: [
      { q: "Erreur standard d'une moyenne ?", a: "$\\dfrac{s}{\\sqrt{n}}$." },
      { q: "Erreur standard d'une proportion $f$ ?", a: "$\\sqrt{\\dfrac{f(1 - f)}{n}}$." },
      { q: "Facteur sur $n$ pour diviser la largeur d'un $IC$ par $3$ ?", a: "$9$." },
      { q: "Quand utiliser la loi de Student pour un $IC$ de moyenne ?", a: "Petit échantillon issu d'une loi normale, $\\sigma$ inconnu : $n - 1$ degrés de liberté." }
    ]
  },

  "pass-07": {
    title: "PA-07 : Tests statistiques : principe, risques et tests usuels",
    domain: "Tests d'hypothèses",
    objectives: [
      "Formuler une hypothèse nulle et une hypothèse alternative, choisir un test unilatéral ou bilatéral.",
      "Calculer une statistique de test (Z, Student, khi-deux) et conclure au risque $\\alpha$.",
      "Interpréter les risques $\\alpha$ et $\\beta$, la puissance et le degré de signification $p$.",
      "Éviter les contresens sur un résultat non significatif."
    ],
    keyPoints: [
      {
        title: "1. Démarche d'un test",
        content: "1. Poser $H_0$ (absence de différence ou d'effet) et $H_1$ (alternative, bilatérale « $\\neq$ » ou unilatérale « $>$ », « $<$ »).\n2. Fixer le risque $\\alpha$ **avant** l'analyse (souvent $5\\,\\%$).\n3. Calculer la statistique de test sous $H_0$.\n4. Comparer à la valeur seuil (ou comparer $p$ à $\\alpha$) : rejeter $H_0$ ou ne pas la rejeter.\nOn ne « démontre » jamais $H_0$ : on ne la rejette pas faute de preuve suffisante."
      },
      {
        title: "2. Risques et puissance",
        content: "• **Risque de première espèce** $\\alpha = P(\\text{rejeter } H_0 \\mid H_0 \\text{ vraie})$ : conclure à tort à une différence.\n• **Risque de deuxième espèce** $\\beta = P(\\text{ne pas rejeter } H_0 \\mid H_1 \\text{ vraie})$ : passer à côté d'une vraie différence.\n• **Puissance** $= 1 - \\beta$ : probabilité de mettre en évidence une différence qui existe. Elle augmente avec $n$, avec l'ampleur de la différence et avec $\\alpha$ ; elle diminue quand la variabilité augmente.\nLe **degré de signification** $p$ est la probabilité, si $H_0$ est vraie, d'observer un écart au moins aussi grand que celui observé."
      },
      {
        title: "3. Comparaison d'une moyenne ou d'une proportion à une référence",
        content: "Moyenne (grand échantillon) : $$Z = \\dfrac{\\bar{x} - \\mu_0}{s / \\sqrt{n}}.$$ Petit échantillon d'une loi normale : même formule, comparée à la loi de Student à $n - 1$ degrés de liberté. Données appariées : on travaille sur les différences.\nProportion : $$Z = \\dfrac{f - p_0}{\\sqrt{p_0(1 - p_0)/n}}$$ (on utilise $p_0$, la valeur sous $H_0$).\nEn bilatéral au risque $5\\,\\%$ : rejet si $|Z| > 1{,}96$ ; en unilatéral : rejet si $Z > 1{,}645$ (dans le sens prévu)."
      },
      {
        title: "4. Test du khi-deux",
        content: "Pour comparer des effectifs observés $O$ à des effectifs théoriques $E$ (calculés sous $H_0$) : $$\\chi^2 = \\sum \\dfrac{(O - E)^2}{E}.$$\n• **Indépendance** (tableau $l \\times c$) : $E = \\dfrac{\\text{total ligne} \\times \\text{total colonne}}{\\text{total}}$, $(l - 1)(c - 1)$ degrés de liberté.\n• **Ajustement** à une distribution théorique à $k$ classes : $k - 1$ degrés de liberté.\nCondition : tous les effectifs théoriques $\\geq 5$. Seuil à $5\\,\\%$ pour $1$ degré de liberté : $3{,}84$."
      },
      {
        title: "5. Aux partiels : pièges fréquents",
        content: "• « $p = 0{,}03$ » ne veut **pas** dire « $H_0$ a $3\\,\\%$ de chances d'être vraie ».\n• Un résultat non significatif ne prouve pas l'absence d'effet : la puissance était peut-être insuffisante.\n• Significatif ne veut pas dire cliniquement important : avec un très grand $n$, une différence minime devient significative.\n• Choisir le sens d'un test unilatéral après avoir vu les données est une faute de méthode."
      }
    ],
    methods: [
      {
        title: "Méthode : Comparer une moyenne à une valeur de référence",
        example: "Chez $49$ sportifs, la fréquence cardiaque de repos moyenne est $58$ bpm ($s = 7$). La référence est $62$ bpm. Différence au risque $5\\,\\%$ ?",
        steps: [
          "**Étape 1 (Hypothèses)** : $H_0 : \\mu = 62$, $H_1 : \\mu \\neq 62$ (bilatéral).",
          "**Étape 2 (Statistique)** : $ES = \\dfrac{7}{7} = 1$, $Z = \\dfrac{58 - 62}{1} = -4$.",
          "**Étape 3 (Conclure)** : $|Z| = 4 > 1{,}96$ : on rejette $H_0$, la fréquence moyenne des sportifs diffère significativement de la référence."
        ]
      },
      {
        title: "Méthode : Khi-deux d'indépendance sur un tableau $2 \\times 2$",
        example: "Sur $200$ patients, $100$ vaccinés ($10$ malades) et $100$ non vaccinés ($30$ malades).",
        steps: [
          "**Étape 1 (Effectifs théoriques)** : $40$ malades au total, donc $E = 20$ malades et $80$ non-malades dans chaque groupe.",
          "**Étape 2 (Statistique)** : $\\chi^2 = \\dfrac{10^2}{20} + \\dfrac{10^2}{20} + \\dfrac{10^2}{80} + \\dfrac{10^2}{80} = 12{,}5$.",
          "**Étape 3 (Conclure)** : $12{,}5 > 3{,}84$ ($1$ ddl) : lien significatif entre vaccination et maladie au risque $5\\,\\%$."
        ]
      }
    ],
    traps: [
      "⚠️ Le risque $\\alpha$ se fixe avant l'expérience ; $p$ se calcule après.",
      "⚠️ Dans un khi-deux, on calcule les écarts sur les **effectifs**, jamais sur des pourcentages.",
      "⚠️ « Ne pas rejeter $H_0$ » n'est pas « accepter $H_0$ comme vraie »."
    ],
    flashcards: [
      { q: "Définition du risque $\\alpha$ ?", a: "Probabilité de rejeter $H_0$ alors qu'elle est vraie." },
      { q: "Définition de la puissance ?", a: "$1 - \\beta$ : probabilité de rejeter $H_0$ quand $H_1$ est vraie." },
      { q: "Degrés de liberté d'un khi-deux d'indépendance $l \\times c$ ?", a: "$(l - 1)(c - 1)$." },
      { q: "Seuil bilatéral de $Z$ au risque $5\\,\\%$ ?", a: "$1{,}96$." }
    ]
  },

  "pass-08": {
    title: "PA-08 : Épidémiologie : prévalence, incidence, risque relatif et odds ratio",
    domain: "Épidémiologie",
    objectives: [
      "Calculer une prévalence, une incidence cumulée et un taux d'incidence.",
      "Distinguer étude de cohorte et étude cas-témoins.",
      "Calculer et interpréter un risque relatif, un odds ratio, une différence de risques et un nombre de sujets à traiter.",
      "Lire un intervalle de confiance de risque relatif ou d'odds ratio."
    ],
    keyPoints: [
      {
        title: "1. Prévalence et incidence",
        content: "• **Prévalence** : proportion de malades dans une population à un instant donné (cas existants).\n• **Incidence cumulée** : proportion de **nouveaux** cas parmi les sujets initialement indemnes, sur une période donnée.\n• **Taux d'incidence** : nouveaux cas rapportés au temps de suivi total, en **personnes-années**.\nEn situation stable et pour une maladie peu fréquente : $\\text{prévalence} \\approx \\text{incidence} \\times \\text{durée moyenne de la maladie}$."
      },
      {
        title: "2. Types d'études",
        content: "• **Cohorte** : on suit des exposés et des non-exposés et on compte les nouveaux cas ; on mesure directement des risques, donc un risque relatif.\n• **Cas-témoins** : on recrute des malades (cas) et des non-malades (témoins) puis on recherche l'exposition passée ; la proportion de malades est fixée par l'investigateur : on ne peut pas calculer de risque, seulement un **odds ratio**.\n• **Essai randomisé** : l'exposition (le traitement) est attribuée par tirage au sort ; c'est le meilleur niveau de preuve d'un effet causal."
      },
      {
        title: "3. Risque relatif, différence de risques, NNT",
        content: "Tableau : exposés $a$ malades et $b$ non-malades ; non-exposés $c$ malades et $d$ non-malades.\nRisques : $R_1 = \\dfrac{a}{a + b}$, $R_0 = \\dfrac{c}{c + d}$, $$RR = \\dfrac{R_1}{R_0}.$$\n**Différence de risques** : $DR = R_1 - R_0$. Pour un traitement qui diminue le risque, la **réduction absolue** est $R_0 - R_1$ et le **nombre de sujets à traiter** pour éviter un événement est $$NNT = \\dfrac{1}{R_0 - R_1}$$ (arrondi à l'entier supérieur). La réduction relative du risque est $1 - RR$."
      },
      {
        title: "4. Odds ratio",
        content: "La cote de la maladie chez les exposés est $\\dfrac{a}{b}$, chez les non-exposés $\\dfrac{c}{d}$ : $$OR = \\dfrac{a/b}{c/d} = \\dfrac{ad}{bc}.$$\nL'$OR$ calculé à partir des expositions des cas et des témoins est le même : c'est pourquoi il est estimable dans une étude cas-témoins.\nSi la maladie est **rare** (moins de $10\\,\\%$ environ), $OR \\approx RR$ ; sinon l'$OR$ s'éloigne de $1$ plus que le $RR$.\nUn $RR$ ou un $OR$ est significativement différent de $1$ si son $IC_{95\\,\\%}$ ne contient **pas** $1$."
      },
      {
        title: "5. Aux partiels : pièges fréquents",
        content: "• Calculer un risque relatif dans une étude cas-témoins.\n• Lire un $OR = 3$ comme « le risque est triplé » alors que la maladie est fréquente.\n• Confondre prévalence (cas existants) et incidence (nouveaux cas).\n• Présenter seulement la réduction relative du risque : $RR = 0{,}5$ peut correspondre à un gain absolu minime si le risque de base est faible."
      }
    ],
    methods: [
      {
        title: "Méthode : Analyser une étude de cohorte",
        example: "Sur $500$ fumeurs, $25$ développent une maladie en $10$ ans ; sur $1\\,000$ non-fumeurs, $10$.",
        steps: [
          "**Étape 1 (Risques)** : $R_1 = \\dfrac{25}{500} = 0{,}05$ et $R_0 = \\dfrac{10}{1\\,000} = 0{,}01$.",
          "**Étape 2 (Risque relatif)** : $RR = 5$ : le risque est multiplié par $5$ chez les fumeurs.",
          "**Étape 3 (Différence)** : $DR = 0{,}04$, soit $4$ cas en excès pour $100$ fumeurs sur $10$ ans."
        ]
      },
      {
        title: "Méthode : Calculer un NNT",
        example: "Dans un essai, $12\\,\\%$ des patients sous placebo font un infarctus, contre $8\\,\\%$ sous traitement.",
        steps: [
          "**Étape 1 (Réduction absolue)** : $0{,}12 - 0{,}08 = 0{,}04$.",
          "**Étape 2 (NNT)** : $\\dfrac{1}{0{,}04} = 25$.",
          "**Étape 3 (Interpréter)** : il faut traiter $25$ patients pendant la durée de l'essai pour éviter un infarctus."
        ]
      }
    ],
    traps: [
      "⚠️ Dans une étude cas-témoins, la « proportion de malades » reflète le recrutement, pas la population : pas de risque, pas de $RR$.",
      "⚠️ Un $IC_{95\\,\\%}$ de $RR$ égal à $[0{,}8 ; 1{,}6]$ contient $1$ : la différence n'est pas significative.",
      "⚠️ Le NNT s'arrondit à l'entier supérieur et dépend de la durée de suivi."
    ],
    flashcards: [
      { q: "Formule de l'odds ratio d'un tableau $a, b, c, d$ ?", a: "$OR = \\dfrac{ad}{bc}$." },
      { q: "Indicateur estimable dans une étude cas-témoins ?", a: "L'odds ratio." },
      { q: "Formule du NNT ?", a: "$\\dfrac{1}{R_0 - R_1}$ (inverse de la réduction absolue du risque)." },
      { q: "Relation approchée entre prévalence et incidence ?", a: "Prévalence $\\approx$ incidence $\\times$ durée moyenne de la maladie." }
    ]
  },

  "pass-09": {
    title: "PA-09 : Fonctions, dérivées, différentielles et incertitudes",
    domain: "Fonctions & incertitudes",
    objectives: [
      "Calculer des dérivées usuelles, composées et des dérivées partielles.",
      "Écrire la différentielle totale et la différentielle logarithmique d'une fonction de plusieurs variables.",
      "Propager des incertitudes de mesure.",
      "Utiliser les développements limités usuels et le logarithme décimal (pH)."
    ],
    keyPoints: [
      {
        title: "1. Dérivées",
        content: "Dérivées usuelles : $(x^n)' = nx^{n-1}$, $(e^x)' = e^x$, $(\\ln x)' = \\dfrac{1}{x}$, $(\\sqrt{x})' = \\dfrac{1}{2\\sqrt{x}}$.\nComposées : $(e^u)' = u'e^u$, $(\\ln u)' = \\dfrac{u'}{u}$, $(u^n)' = nu'u^{n-1}$.\n*Exemple* : $C(t) = C_0 e^{-kt}$ a pour dérivée $C'(t) = -kC_0e^{-kt} = -kC(t)$."
      },
      {
        title: "2. Dérivées partielles et différentielle totale",
        content: "Pour $f(x, y)$, la dérivée partielle $\\dfrac{\\partial f}{\\partial x}$ se calcule en dérivant par rapport à $x$, $y$ étant traité comme une constante.\n**Différentielle totale** : $$df = \\dfrac{\\partial f}{\\partial x}dx + \\dfrac{\\partial f}{\\partial y}dy.$$\n**Incertitude absolue** (majorant) : $\\Delta f = \\left|\\dfrac{\\partial f}{\\partial x}\\right|\\Delta x + \\left|\\dfrac{\\partial f}{\\partial y}\\right|\\Delta y$."
      },
      {
        title: "3. Différentielle logarithmique",
        content: "Pour un produit de puissances $f = k\\,x^a y^b z^c$ : $\\ln f = \\ln k + a\\ln x + b\\ln y + c\\ln z$, donc $$\\dfrac{df}{f} = a\\dfrac{dx}{x} + b\\dfrac{dy}{y} + c\\dfrac{dz}{z}.$$\n**Incertitude relative** : $\\dfrac{\\Delta f}{f} = |a|\\dfrac{\\Delta x}{x} + |b|\\dfrac{\\Delta y}{y} + |c|\\dfrac{\\Delta z}{z}$ : les incertitudes relatives s'**ajoutent**, pondérées par la valeur absolue des exposants (même pour un quotient).\n*Exemple* : $IMC = \\dfrac{m}{h^2}$ donne $\\dfrac{\\Delta IMC}{IMC} = \\dfrac{\\Delta m}{m} + 2\\dfrac{\\Delta h}{h}$."
      },
      {
        title: "4. Approximations et logarithme décimal",
        content: "Au voisinage de $0$ : $e^x \\approx 1 + x + \\dfrac{x^2}{2}$, $\\ln(1 + x) \\approx x - \\dfrac{x^2}{2}$, $(1 + x)^\\alpha \\approx 1 + \\alpha x$, donc $\\sqrt{1 + x} \\approx 1 + \\dfrac{x}{2}$.\nApproximation affine : $f(a + h) \\approx f(a) + f'(a)h$.\n**Logarithme décimal** : $\\log x = \\dfrac{\\ln x}{\\ln 10}$, $\\log(10^n) = n$. $pH = -\\log[H_3O^+]$ ; $pH = pK_a + \\log\\dfrac{[A^-]}{[AH]}$. Comme $d(\\log c) = \\dfrac{dc}{c \\ln 10}$, une erreur relative $\\dfrac{\\Delta c}{c}$ donne $\\Delta pH = \\dfrac{1}{\\ln 10}\\dfrac{\\Delta c}{c}$."
      },
      {
        title: "5. Aux partiels : pièges fréquents",
        content: "• Soustraire les incertitudes relatives pour un quotient : elles s'**ajoutent** toujours.\n• Oublier l'exposant : le rayon intervient à la puissance $4$ dans la loi de Poiseuille, donc avec un coefficient $4$.\n• Appliquer la différentielle logarithmique à une **somme** : elle ne s'applique qu'aux produits et quotients ; pour une somme, les incertitudes **absolues** s'ajoutent.\n• Confondre $\\ln$ et $\\log$ dans le calcul d'un pH."
      }
    ],
    methods: [
      {
        title: "Méthode : Incertitude relative par la différentielle logarithmique",
        example: "Le volume d'une sphère est $V = \\dfrac{4}{3}\\pi r^3$, avec $r = 2{,}0 \\pm 0{,}1$ cm. Incertitude relative sur $V$ ?",
        steps: [
          "**Étape 1 (Logarithme)** : $\\ln V = \\ln\\dfrac{4\\pi}{3} + 3\\ln r$.",
          "**Étape 2 (Différentier)** : $\\dfrac{dV}{V} = 3\\dfrac{dr}{r}$.",
          "**Étape 3 (Conclure)** : $\\dfrac{\\Delta V}{V} = 3 \\times \\dfrac{0{,}1}{2{,}0} = 0{,}15$, soit $15\\,\\%$."
        ]
      },
      {
        title: "Méthode : Calculer un pH",
        example: "Une solution a $[H_3O^+] = 2 \\times 10^{-4}$ mol/L. Calculer son pH (on donne $\\log 2 \\approx 0{,}301$).",
        steps: [
          "**Étape 1 (Propriétés du log)** : $\\log(2 \\times 10^{-4}) = \\log 2 - 4$.",
          "**Étape 2 (Calculer)** : $pH = -(0{,}301 - 4) = 3{,}699$.",
          "**Étape 3 (Arrondir)** : $pH \\approx 3{,}70$."
        ]
      }
    ],
    traps: [
      "⚠️ La différentielle logarithmique donne une incertitude **relative** ; multipliez par la valeur de $f$ pour obtenir l'incertitude absolue.",
      "⚠️ Dans une dérivée partielle par rapport à $x$, les autres variables sont des constantes : $\\dfrac{\\partial}{\\partial x}(x^2 y) = 2xy$.",
      "⚠️ Une variation de $1$ unité de pH correspond à un facteur $10$ sur la concentration."
    ],
    flashcards: [
      { q: "Différentielle logarithmique de $f = x^a y^b$ ?", a: "$\\dfrac{df}{f} = a\\dfrac{dx}{x} + b\\dfrac{dy}{y}$." },
      { q: "Développement de $\\ln(1 + x)$ à l'ordre $2$ ?", a: "$x - \\dfrac{x^2}{2}$." },
      { q: "Incertitude relative sur $\\dfrac{m}{h^2}$ ?", a: "$\\dfrac{\\Delta m}{m} + 2\\dfrac{\\Delta h}{h}$." },
      { q: "Dérivée de $\\ln u$ ?", a: "$\\dfrac{u'}{u}$." }
    ]
  },

  "pass-10": {
    title: "PA-10 : Équations différentielles et modèles pharmacocinétiques",
    domain: "Équations différentielles",
    objectives: [
      "Résoudre une équation différentielle $y' = ay + b$ avec une condition initiale.",
      "Modéliser l'élimination d'un médicament et la décroissance radioactive.",
      "Relier constante d'élimination et demi-vie.",
      "Modéliser une perfusion à débit constant et calculer la concentration au plateau."
    ],
    keyPoints: [
      {
        title: "1. Équations $y' = ay$ et $y' = ay + b$",
        content: "Les solutions de $y' = ay$ sont $y(t) = Ke^{at}$, $K \\in \\mathbb{R}$.\nPour $y' = ay + b$ ($a \\neq 0$) : la solution constante est $y^* = -\\dfrac{b}{a}$, et $$y(t) = Ke^{at} - \\dfrac{b}{a}.$$\nLa constante $K$ se détermine par la condition initiale : $y(0) = K - \\dfrac{b}{a}$. Si $a < 0$, $y(t)$ tend vers $-\\dfrac{b}{a}$ (équilibre)."
      },
      {
        title: "2. Élimination d'ordre 1 et demi-vie",
        content: "Modèle à **un compartiment** après injection intraveineuse (bolus) d'une dose $D$ dans un volume de distribution $V$ : $$C'(t) = -kC(t), \\qquad C(t) = C_0e^{-kt}, \\qquad C_0 = \\dfrac{D}{V}.$$\n$k$ est la **constante d'élimination** (en h$^{-1}$). **Demi-vie** : durée au bout de laquelle la concentration est divisée par $2$ : $$t_{1/2} = \\dfrac{\\ln 2}{k}.$$\nAprès $n$ demi-vies, $C = \\dfrac{C_0}{2^n}$. La **clairance** est $Cl = kV$ (en L/h). Si $C$ passe de $C_1$ à $C_2$ en une durée $\\Delta t$ : $k = \\dfrac{\\ln(C_1/C_2)}{\\Delta t}$."
      },
      {
        title: "3. Perfusion à débit constant",
        content: "Avec un débit de perfusion $R_0$ (en mg/h) : $V\\,C'(t) = R_0 - kV\\,C(t)$, soit $C' = -kC + \\dfrac{R_0}{V}$. Avec $C(0) = 0$ : $$C(t) = C_{ss}\\left(1 - e^{-kt}\\right), \\qquad C_{ss} = \\dfrac{R_0}{kV} = \\dfrac{R_0}{Cl}.$$\nLe **plateau** (concentration à l'équilibre) vaut « débit sur clairance ». Il est proportionnel au débit, mais le **temps** pour l'atteindre ne dépend que de $k$ : $50\\,\\%$ du plateau en $1$ demi-vie, environ $97\\,\\%$ en $5$ demi-vies.\nDose de charge pour atteindre immédiatement une concentration $C$ : $D = C \\times V$."
      },
      {
        title: "4. Décroissance radioactive",
        content: "Le nombre de noyaux vérifie $N'(t) = -\\lambda N(t)$, donc $N(t) = N_0e^{-\\lambda t}$ avec $T_{1/2} = \\dfrac{\\ln 2}{\\lambda}$.\nL'**activité** $A(t) = \\lambda N(t)$ (en becquerels : désintégrations par seconde) décroît selon la même loi : $A(t) = A_0e^{-\\lambda t} = \\dfrac{A_0}{2^{t/T_{1/2}}}$.\nLa durée de vie d'un noyau suit une loi exponentielle de paramètre $\\lambda$ (PA-05)."
      },
      {
        title: "5. Aux partiels : pièges fréquents",
        content: "• Écrire $t_{1/2} = k \\ln 2$ ou $\\dfrac{k}{\\ln 2}$ : c'est $\\dfrac{\\ln 2}{k}$.\n• Croire qu'augmenter le débit de perfusion fait atteindre le plateau plus vite : seul le niveau du plateau change.\n• Oublier les unités : $k$ en h$^{-1}$ et $t$ en h, $V$ en L, $C$ en mg/L.\n• Confondre volume de distribution et volume sanguin : $V$ est un volume « apparent »."
      }
    ],
    methods: [
      {
        title: "Méthode : Résoudre $y' = ay + b$ avec condition initiale",
        example: "Résoudre $y' = -0{,}5y + 2$ avec $y(0) = 1$.",
        steps: [
          "**Étape 1 (Solution constante)** : $y^* = -\\dfrac{2}{-0{,}5} = 4$.",
          "**Étape 2 (Forme générale)** : $y(t) = Ke^{-0{,}5t} + 4$.",
          "**Étape 3 (Condition initiale)** : $y(0) = K + 4 = 1$, donc $K = -3$ et $y(t) = 4 - 3e^{-0{,}5t}$."
        ]
      },
      {
        title: "Méthode : Plateau d'une perfusion",
        example: "Perfusion à $R_0 = 30$ mg/h, $V = 50$ L, $t_{1/2} = 7$ h (on prend $\\ln 2 \\approx 0{,}7$).",
        steps: [
          "**Étape 1 (Constante d'élimination)** : $k = \\dfrac{0{,}7}{7} = 0{,}1$ h$^{-1}$.",
          "**Étape 2 (Clairance)** : $Cl = kV = 5$ L/h.",
          "**Étape 3 (Plateau)** : $C_{ss} = \\dfrac{30}{5} = 6$ mg/L, atteint à environ $97\\,\\%$ après $5 \\times 7 = 35$ h."
        ]
      }
    ],
    traps: [
      "⚠️ La demi-vie ne dépend pas de la dose : doubler la dose double la concentration à chaque instant, pas la demi-vie.",
      "⚠️ Au plateau, débit entrant et débit d'élimination sont égaux : $R_0 = Cl \\times C_{ss}$.",
      "⚠️ Après $3$ demi-vies, il reste $\\dfrac{1}{8}$ de la quantité initiale, pas $\\dfrac{1}{6}$."
    ],
    flashcards: [
      { q: "Demi-vie en fonction de $k$ ?", a: "$t_{1/2} = \\dfrac{\\ln 2}{k}$." },
      { q: "Concentration au plateau d'une perfusion ?", a: "$C_{ss} = \\dfrac{R_0}{kV} = \\dfrac{R_0}{Cl}$." },
      { q: "Solutions de $y' = ay + b$ ?", a: "$y(t) = Ke^{at} - \\dfrac{b}{a}$." },
      { q: "Fraction du plateau atteinte après $5$ demi-vies ?", a: "Environ $97\\,\\%$ ($1 - 2^{-5}$)." }
    ]
  },

  "pass-11": {
    title: "PA-11 : Corrélation et régression linéaire",
    domain: "Statistique descriptive",
    objectives: [
      "Représenter une série statistique à deux variables par un nuage de points et placer le point moyen.",
      "Calculer une covariance et le coefficient de corrélation linéaire de Pearson $r$.",
      "Déterminer la droite des moindres carrés $y = ax + b$ et l'utiliser pour une prédiction.",
      "Interpréter $r$ et $r^2$ sans confondre corrélation et causalité."
    ],
    keyPoints: [
      {
        title: "1. Nuage de points et point moyen",
        content: "Une **série bivariée** associe à chaque individu deux mesures $(x_i ; y_i)$, $i = 1, \\dots, n$ (par exemple l'âge et la pression systolique d'un patient). On la représente par un **nuage de points**.\nLe **point moyen** est $G(\\bar{x} ; \\bar{y})$, où $\\bar{x}$ et $\\bar{y}$ sont les moyennes des deux séries.\nAvant tout calcul, on regarde la forme du nuage : allongé selon une droite (liaison **linéaire**), courbe (liaison non linéaire), ou sans structure."
      },
      {
        title: "2. Covariance et coefficient de corrélation",
        content: "**Covariance** : $\\mathrm{cov}(x, y) = \\dfrac{1}{n}\\sum_{i=1}^{n}(x_i - \\bar{x})(y_i - \\bar{y}) = \\overline{xy} - \\bar{x}\\,\\bar{y}.$ Elle est positive quand $x$ et $y$ varient dans le même sens, négative sinon ; elle dépend des unités.\n**Coefficient de corrélation linéaire de Pearson** : $r = \\dfrac{\\mathrm{cov}(x, y)}{s_x\\, s_y},$ où $s_x$ et $s_y$ sont les écarts types des deux séries (calculés avec le même diviseur que la covariance).\n$r$ est **sans unité**, toujours compris entre $-1$ et $1$ ; $|r| = 1$ si et seulement si les points sont exactement alignés. $r$ ne change pas si l'on change d'unité (transformation affine de coefficient positif)."
      },
      {
        title: "3. Droite des moindres carrés",
        content: "La **droite de régression de $y$ en $x$** (ou des moindres carrés) est la droite $y = ax + b$ qui rend minimale la somme des carrés des écarts verticaux $\\sum (y_i - ax_i - b)^2$. On a $a = \\dfrac{\\mathrm{cov}(x, y)}{s_x^2}, \\qquad b = \\bar{y} - a\\bar{x}.$\nLa droite **passe par le point moyen** $G$. La pente $a$ a le signe de $r$ et s'exprime en « unité de $y$ par unité de $x$ » : c'est la variation moyenne de $y$ quand $x$ augmente d'une unité.\nOn a aussi $a = r\\,\\dfrac{s_y}{s_x}$. Attention : la droite de régression de $x$ en $y$ est en général **différente**."
      },
      {
        title: "4. Coefficient de détermination, prédiction et causalité",
        content: "**Coefficient de détermination** : $r^2$, entre $0$ et $1$, est la part de la variance de $y$ « expliquée » par la relation linéaire avec $x$. Avec $r = 0{,}8$, $r^2 = 0{,}64$ : $64\\,\\%$ de la variabilité de $y$ est expliquée par la droite.\n**Prédiction** : pour une valeur $x_0$, on prédit $\\hat{y} = ax_0 + b$. Elle n'est raisonnable que **dans le domaine des $x$ observés** : au-delà, c'est une **extrapolation**, risquée car rien ne garantit que la relation reste linéaire.\n**Corrélation n'est pas causalité** : une forte corrélation peut venir d'un **facteur de confusion** lié aux deux variables (l'âge, la saison…), du hasard, ou d'une causalité inverse. Seul un essai contrôlé randomisé permet de conclure à un effet causal.\n**Test de nullité de $r$** (aperçu) : pour tester $H_0$ « pas de corrélation linéaire dans la population », on calcule $t = \\dfrac{r\\sqrt{n - 2}}{\\sqrt{1 - r^2}}$, que l'on compare au seuil de la loi de Student à $n - 2$ degrés de liberté (proche de $2$ au risque $5\\,\\%$ dès que $n$ dépasse quelques dizaines). Avec un grand effectif, un $r$ faible peut être significatif sans être cliniquement important."
      },
      {
        title: "5. Aux partiels : pièges fréquents",
        content: "• Diviser la covariance par $s_x s_y$ pour la pente : c'est le coefficient $r$ ; la pente est $\\dfrac{\\mathrm{cov}(x, y)}{s_x^2}$.\n• Oublier de vérifier que la droite passe par $G(\\bar{x} ; \\bar{y})$ : c'est un contrôle rapide de $b$.\n• Croire que $r = 0$ signifie « aucune liaison » : il n'y a pas de liaison **linéaire**, mais une liaison courbe (en U) reste possible.\n• Confondre $r$ et $r^2$ : $r = 0{,}5$ n'explique que $25\\,\\%$ de la variance.\n• Interpréter une corrélation comme un effet causal, ou prédire loin hors du domaine observé."
      }
    ],
    methods: [
      {
        title: "Méthode : Calculer $r$ et la droite des moindres carrés",
        example: "Dose $x$ (en mg) : $1$ ; $2$ ; $3$ ; $4$ ; $5$. Baisse de pression $y$ (en mmHg) : $2$ ; $4$ ; $5$ ; $4$ ; $5$.",
        steps: [
          "**Étape 1 (Point moyen)** : $\\bar{x} = 3$, $\\bar{y} = \\dfrac{20}{5} = 4$, donc $G(3 ; 4)$.",
          "**Étape 2 (Écarts et produits)** : écarts $x_i - \\bar{x}$ : $-2, -1, 0, 1, 2$ ; écarts $y_i - \\bar{y}$ : $-2, 0, 1, 0, 1$ ; somme des produits : $4 + 0 + 0 + 0 + 2 = 6$.",
          "**Étape 3 (Covariance et variances)** : $\\mathrm{cov} = \\dfrac{6}{5} = 1{,}2$ ; $s_x^2 = \\dfrac{10}{5} = 2$ ; $s_y^2 = \\dfrac{6}{5} = 1{,}2$.",
          "**Étape 4 (Droite)** : $a = \\dfrac{1{,}2}{2} = 0{,}6$ et $b = 4 - 0{,}6 \\times 3 = 2{,}2$ : $y = 0{,}6x + 2{,}2$.",
          "**Étape 5 (Corrélation)** : $r^2 = \\dfrac{1{,}2^2}{2 \\times 1{,}2} = 0{,}6$, donc $r = \\sqrt{0{,}6} \\approx 0{,}77$ : $60\\,\\%$ de la variance de $y$ est expliquée par la dose."
        ]
      },
      {
        title: "Méthode : Prédire et critiquer une prédiction",
        example: "Chez des enfants de $2$ à $10$ ans, la droite de régression de la taille $y$ (cm) en fonction de l'âge $x$ (ans) est $y = 6x + 77$.",
        steps: [
          "**Étape 1 (Domaine)** : $x_0 = 6$ ans est dans le domaine observé ($[2 ; 10]$) : la prédiction est légitime.",
          "**Étape 2 (Calcul)** : $\\hat{y} = 6 \\times 6 + 77 = 113$ cm (valeur moyenne attendue, pas la taille exacte d'un enfant).",
          "**Étape 3 (Critique)** : pour $x_0 = 30$ ans, la formule donnerait $257$ cm : l'extrapolation est absurde car la croissance s'arrête."
        ]
      }
    ],
    traps: [
      "⚠️ La pente de la droite de régression n'est pas $r$ : $a = r\\,\\dfrac{s_y}{s_x}$, qui dépend des unités.",
      "⚠️ Un coefficient $r$ proche de $0$ n'exclut pas une liaison non linéaire forte : regardez toujours le nuage.",
      "⚠️ Une corrélation, même très significative, ne prouve pas la causalité : cherchez un facteur de confusion."
    ],
    flashcards: [
      { q: "Formule de la covariance (König-Huygens) ?", a: "$\\mathrm{cov}(x, y) = \\overline{xy} - \\bar{x}\\,\\bar{y}$." },
      { q: "Coefficient de corrélation de Pearson ?", a: "$r = \\dfrac{\\mathrm{cov}(x, y)}{s_x s_y}$, compris entre $-1$ et $1$." },
      { q: "Pente et ordonnée à l'origine de la droite des moindres carrés ?", a: "$a = \\dfrac{\\mathrm{cov}(x, y)}{s_x^2}$, $b = \\bar{y} - a\\bar{x}$ : la droite passe par $G(\\bar{x} ; \\bar{y})$." },
      { q: "Que représente $r^2$ ?", a: "La part de la variance de $y$ expliquée par la régression linéaire sur $x$." },
      { q: "Pourquoi une corrélation ne prouve-t-elle pas la causalité ?", a: "Un facteur de confusion, le hasard ou une causalité inverse peuvent l'expliquer." }
    ]
  }
};

if (!window.MATHS_COURSES) window.MATHS_COURSES = {};
Object.assign(window.MATHS_COURSES, window.MATHS_COURSES_PASS);
