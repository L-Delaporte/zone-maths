/**
 * Cours du niveau « Prépa santé » (chapitres : js/data/chapters_sante.js).
 * Mathématiques de terminale (spécialité) utiles pour préparer l'entrée en PASS ou en L.AS :
 * unités et dosages, pourcentages, exponentielle et logarithme, dérivées, suites, probabilités et statistiques,
 * appliqués à des situations de santé. La rubrique « Aux épreuves » liste les erreurs les plus fréquentes.
 * Contenu original.
 */
window.MATHS_COURSES_SANTE = {
  "sante-01": {
    title: "PS-01 : Puissances de 10, notation scientifique et unités",
    domain: "Calculs et dosages",
    objectives: [
      "Calculer avec les puissances de 10 et écrire un résultat en notation scientifique.",
      "Convertir des masses, des volumes et des débits à l'aide des préfixes du système international.",
      "Contrôler la vraisemblance d'un résultat par un ordre de grandeur."
    ],
    keyPoints: [
      {
        title: "1. Règles de calcul sur les puissances de 10",
        content: "Pour tous entiers relatifs $m$ et $n$ :\n$$10^{m} \\times 10^{n} = 10^{m+n} \\qquad \\frac{10^{m}}{10^{n}} = 10^{m-n} \\qquad (10^{m})^{n} = 10^{mn} \\qquad 10^{-n} = \\frac{1}{10^{n}}$$\n*Exemple* : $\\dfrac{10^{4} \\times 10^{-7}}{10^{-2}} = 10^{4 - 7 + 2} = 10^{-1}$."
      },
      {
        title: "2. Notation scientifique",
        content: "Tout nombre décimal non nul s'écrit de façon unique $a \\times 10^{n}$ avec $1 \\leq |a| < 10$ et $n$ entier relatif.\n*Exemples* : $0{,}000\\,36 = 3{,}6 \\times 10^{-4}$ ; $5\\,200\\,000 = 5{,}2 \\times 10^{6}$.\nPour multiplier deux nombres en notation scientifique, on multiplie les mantisses entre elles et les puissances de 10 entre elles, puis on réajuste : $(4 \\times 10^{3}) \\times (5 \\times 10^{-6}) = 20 \\times 10^{-3} = 2 \\times 10^{-2}$."
      },
      {
        title: "3. Préfixes et conversions",
        content: "méga (M) $= 10^{6}$ ; kilo (k) $= 10^{3}$ ; déci (d) $= 10^{-1}$ ; centi (c) $= 10^{-2}$ ; milli (m) $= 10^{-3}$ ; micro (µ) $= 10^{-6}$ ; nano (n) $= 10^{-9}$.\nÉquivalences de volume : 1 L = 1 dm³ ; 1 mL = 1 cm³ ; 1 m³ = 1 000 L ; 1 µL = 1 mm³.\nPour une unité composée (g/L, mL/h…), on convertit séparément le numérateur et le dénominateur : 1 g/L = 1 000 mg / 10 dL = 100 mg/dL."
      },
      {
        title: "4. Ordres de grandeur en biologie",
        content: "L'ordre de grandeur d'un nombre est la puissance de 10 la plus proche. Quelques repères : une cellule humaine mesure environ 10 µm, une bactérie quelques µm, un virus environ 100 nm ; un adulte a environ 5 L de sang et environ $5 \\times 10^{6}$ globules rouges par mm³.\nUn calcul d'ordre de grandeur permet de repérer une erreur de conversion d'un facteur 1 000."
      },
      {
        title: "5. Aux épreuves : pièges fréquents",
        content: "• Additionner les exposants lors d'une addition : $10^{3} + 10^{2}$ n'est pas $10^{5}$ (il vaut $1\\,100$).\n• Oublier de réajuster la mantisse : $25 \\times 10^{-4}$ n'est pas une notation scientifique ; on écrit $2{,}5 \\times 10^{-3}$.\n• Convertir des volumes avec un facteur 10 au lieu de 1 000 : 1 m³ = 1 000 dm³.\n• Ne convertir que le numérateur d'une unité composée (mg/mL en g/L, par exemple)."
      }
    ],
    methods: [
      {
        title: "Méthode : Convertir une unité composée",
        example: "Convertir une glycémie de 0,95 g/L en mg/dL.",
        steps: [
          "**Étape 1 (Numérateur)** : 0,95 g = 950 mg.",
          "**Étape 2 (Dénominateur)** : 1 L = 10 dL.",
          "**Étape 3 (Conclure)** : $\\dfrac{950}{10} = 95$, donc 0,95 g/L = 95 mg/dL."
        ]
      },
      {
        title: "Méthode : Calculer avec la notation scientifique",
        example: "Calculer $\\dfrac{(6 \\times 10^{5}) \\times (4 \\times 10^{-8})}{3 \\times 10^{-4}}$.",
        steps: [
          "**Étape 1 (Mantisses)** : $\\dfrac{6 \\times 4}{3} = 8$.",
          "**Étape 2 (Puissances)** : $10^{5 - 8 - (-4)} = 10^{1}$.",
          "**Étape 3 (Conclure)** : le résultat est $8 \\times 10^{1} = 80$ ; si la mantisse sort de $[1 ; 10[$, on la réajuste."
        ]
      }
    ],
    traps: [
      "⚠️ $10^{-3}$ est un nombre positif : un exposant négatif ne rend pas le nombre négatif.",
      "⚠️ 1 mL = 1 cm³, mais 1 L = 1 dm³ : ne confondez pas les deux équivalences.",
      "⚠️ Un résultat sans unité ou avec une unité incohérente est considéré comme faux, même si le nombre est juste."
    ],
    flashcards: [
      { q: "Que vaut le préfixe micro (µ) ?", a: "$10^{-6}$." },
      { q: "Notation scientifique de $0{,}004\\,2$ ?", a: "$4{,}2 \\times 10^{-3}$." },
      { q: "Combien de litres dans 1 m³ ?", a: "1 000 L." },
      { q: "Convertir 1 g/L en mg/dL.", a: "100 mg/dL." }
    ]
  },

  "sante-02": {
    title: "PS-02 : Proportionnalité, concentrations, dilutions et posologies",
    domain: "Calculs et dosages",
    objectives: [
      "Calculer une concentration massique, une masse de soluté ou un volume de solution.",
      "Préparer une dilution avec la relation $C_1V_1 = C_2V_2$ et calculer un facteur de dilution.",
      "Calculer une posologie en mg/kg et un débit de perfusion.",
      "Vérifier la cohérence des unités à chaque étape d'un calcul de dose."
    ],
    keyPoints: [
      {
        title: "1. Proportionnalité et produit en croix",
        content: "Deux grandeurs sont proportionnelles lorsque l'une s'obtient en multipliant l'autre par un même nombre (le coefficient de proportionnalité). Le produit en croix permet de calculer une quatrième proportionnelle :\n$$\\frac{a}{b} = \\frac{c}{d} \\iff ad = bc.$$\n*Exemple* : si 5 mL de sirop contiennent 120 mg, alors 2 mL en contiennent $\\dfrac{2 \\times 120}{5} = 48$ mg."
      },
      {
        title: "2. Concentration massique",
        content: "$$C_m = \\frac{m}{V}$$\noù $m$ est la masse de soluté et $V$ le volume de solution. Unités usuelles : g/L, mg/mL (1 mg/mL = 1 g/L), mg/L.\nOn en déduit $m = C_m \\times V$ et $V = \\dfrac{m}{C_m}$."
      },
      {
        title: "3. Dilution",
        content: "Lors d'une dilution, la masse de soluté se conserve : $C_1 V_1 = C_2 V_2$ (solution mère : $C_1$, $V_1$ prélevé ; solution fille : $C_2$, $V_2$ total).\nLe **facteur de dilution** est $F = \\dfrac{C_1}{C_2} = \\dfrac{V_2}{V_1}$. Des dilutions successives de facteurs $F_1$ et $F_2$ donnent un facteur global $F_1 \\times F_2$."
      },
      {
        title: "4. Posologie et débit",
        content: "Une posologie en mg/kg se multiplie par la masse du patient : 15 mg/kg pour 20 kg donne 300 mg.\nLe **débit** d'une perfusion est le volume perfusé par unité de temps : $D = \\dfrac{V}{t}$ (en mL/h ou en mL/min). Avec un perfuseur où 1 mL correspond à 20 gouttes, un débit en mL/min se multiplie par 20 pour obtenir des gouttes/min.\nPour une seringue électrique, on divise la dose horaire prescrite par la concentration : 4 mg/h avec 2 mg/mL donne 2 mL/h."
      },
      {
        title: "5. Aux épreuves : pièges fréquents",
        content: "• Inverser la relation de dilution et écrire $V_1 = \\dfrac{C_1 V_2}{C_2}$.\n• Confondre le volume d'eau ajouté et le volume final : ajouter 100 mL d'eau à 50 mL donne 150 mL, pas 100 mL.\n• Mélanger mL et L, ou heures et minutes, dans un même calcul de débit.\n• Arrondir trop tôt une valeur intermédiaire (débit en gouttes/min, par exemple)."
      }
    ],
    methods: [
      {
        title: "Méthode : Calculer un volume à prélever",
        example: "Une ampoule contient 40 mg de principe actif dans 2 mL. La prescription est de 30 mg.",
        steps: [
          "**Étape 1 (Concentration)** : $C = \\dfrac{40}{2} = 20$ mg/mL.",
          "**Étape 2 (Volume)** : $V = \\dfrac{30}{20} = 1{,}5$ mL.",
          "**Étape 3 (Contrôle)** : 30 mg est inférieur à 40 mg, donc le volume doit être inférieur à 2 mL : c'est cohérent."
        ]
      },
      {
        title: "Méthode : Préparer une dilution",
        example: "On veut 200 mL d'une solution à 0,5 g/L à partir d'une solution mère à 10 g/L.",
        steps: [
          "**Étape 1 (Conservation)** : $C_1 V_1 = C_2 V_2$, donc $V_1 = \\dfrac{C_2 V_2}{C_1} = \\dfrac{0{,}5 \\times 200}{10} = 10$ mL.",
          "**Étape 2 (Facteur)** : $F = \\dfrac{10}{0{,}5} = 20$, et en effet $\\dfrac{200}{10} = 20$.",
          "**Étape 3 (Protocole)** : on prélève 10 mL de solution mère et on complète avec de l'eau jusqu'à 200 mL."
        ]
      }
    ],
    traps: [
      "⚠️ La relation $C_1V_1 = C_2V_2$ s'applique au volume **total** de la solution fille, pas au volume d'eau ajouté.",
      "⚠️ 1 mg/mL = 1 g/L : les deux unités expriment la même concentration.",
      "⚠️ Un débit se calcule avec une durée dans l'unité demandée : 4 h = 240 min."
    ],
    flashcards: [
      { q: "Formule de la concentration massique ?", a: "$C_m = \\dfrac{m}{V}$." },
      { q: "Relation de conservation lors d'une dilution ?", a: "$C_1 V_1 = C_2 V_2$." },
      { q: "Facteur de dilution si l'on complète 10 mL jusqu'à 250 mL ?", a: "$F = 25$." },
      { q: "Dose pour 12 mg/kg chez un patient de 25 kg ?", a: "300 mg." }
    ]
  },

  "sante-03": {
    title: "PS-03 : Pourcentages, évolutions et indices",
    domain: "Calculs et dosages",
    objectives: [
      "Calculer une proportion et un pourcentage de pourcentage.",
      "Passer d'un taux d'évolution au coefficient multiplicateur, et inversement.",
      "Composer des évolutions successives et calculer une évolution réciproque.",
      "Calculer un taux d'évolution moyen et exploiter des indices."
    ],
    keyPoints: [
      {
        title: "1. Proportions",
        content: "La proportion d'une sous-population A dans une population E est $p = \\dfrac{n_A}{n_E}$.\nSi A représente une proportion $p$ de E et B une proportion $p'$ de A, alors B représente une proportion $p \\times p'$ de E.\n*Exemple* : 40 % des patients sont des femmes et 15 % d'entre elles sont diabétiques : $0{,}4 \\times 0{,}15 = 0{,}06$, soit 6 % des patients."
      },
      {
        title: "2. Taux d'évolution et coefficient multiplicateur",
        content: "Quand une grandeur passe de $V_0$ à $V_1$, le taux d'évolution est $t = \\dfrac{V_1 - V_0}{V_0}$ et le coefficient multiplicateur est $CM = \\dfrac{V_1}{V_0} = 1 + t$.\nUne hausse de 20 % correspond à $CM = 1{,}2$ ; une baisse de 35 % à $CM = 0{,}65$."
      },
      {
        title: "3. Évolutions successives et réciproques",
        content: "Des évolutions successives se **multiplient** : $CM = CM_1 \\times CM_2 \\times \\dots$. Une hausse de 10 % suivie d'une baisse de 10 % donne $1{,}1 \\times 0{,}9 = 0{,}99$, soit une baisse de 1 %.\nL'évolution réciproque d'une évolution de coefficient $CM$ a pour coefficient $\\dfrac{1}{CM}$ : après une hausse de 25 %, il faut une baisse de 20 % pour revenir à la valeur initiale, car $\\dfrac{1}{1{,}25} = 0{,}8$."
      },
      {
        title: "4. Taux moyen et indices",
        content: "Si une grandeur subit $n$ évolutions de coefficient global $CM$, le taux moyen $t_m$ vérifie $(1 + t_m)^{n} = CM$, donc $1 + t_m = CM^{1/n}$.\nUn **indice** de base 100 est $I = 100 \\times \\dfrac{V}{V_{\\text{réf}}}$ ; le rapport de deux indices est le coefficient multiplicateur entre les deux dates correspondantes."
      },
      {
        title: "5. Aux épreuves : pièges fréquents",
        content: "• Additionner des taux successifs : trois hausses de 10 % donnent $1{,}1^{3} = 1{,}331$, soit +33,1 %, pas +30 %.\n• Croire qu'une baisse de $t$ % compense une hausse de $t$ %.\n• Confondre points de pourcentage et pourcentage : passer de 2 % à 3 % est une hausse de 1 point, mais de 50 %.\n• Diviser le taux global par le nombre de périodes pour obtenir un taux moyen."
      }
    ],
    methods: [
      {
        title: "Méthode : Retrouver une valeur initiale",
        example: "Après une hausse de 8 %, une concentration vaut 54 mg/L. Quelle était sa valeur initiale ?",
        steps: [
          "**Étape 1 (Coefficient)** : $CM = 1{,}08$, donc $V_1 = 1{,}08 \\, V_0$.",
          "**Étape 2 (Diviser)** : $V_0 = \\dfrac{54}{1{,}08} = 50$.",
          "**Étape 3 (Conclure)** : la valeur initiale était 50 mg/L (et non $54 - 8\\,\\%$ de 54)."
        ]
      },
      {
        title: "Méthode : Calculer un taux moyen",
        example: "Le nombre de cas d'une maladie augmente de 44 % en deux ans. Quel est le taux annuel moyen ?",
        steps: [
          "**Étape 1 (Coefficient global)** : $CM = 1{,}44$.",
          "**Étape 2 (Racine)** : $1 + t_m = 1{,}44^{1/2} = 1{,}2$.",
          "**Étape 3 (Conclure)** : $t_m = 0{,}2$, soit une hausse moyenne de 20 % par an (et non 22 %)."
        ]
      }
    ],
    traps: [
      "⚠️ Les taux d'évolution successifs ne s'additionnent pas : ce sont les coefficients multiplicateurs qui se multiplient.",
      "⚠️ Un taux d'évolution se calcule toujours par rapport à la valeur **de départ**.",
      "⚠️ Une variation de pourcentage s'exprime en points ; une variation relative s'exprime en pourcentage."
    ],
    flashcards: [
      { q: "Coefficient multiplicateur d'une baisse de 15 % ?", a: "$0{,}85$." },
      { q: "Évolution réciproque d'une hausse de 25 % ?", a: "Une baisse de 20 %." },
      { q: "Hausse de 10 % puis baisse de 10 % ?", a: "Baisse globale de 1 % ($1{,}1 \\times 0{,}9 = 0{,}99$)." },
      { q: "Taux moyen sur $n$ périodes, coefficient global $CM$ ?", a: "$t_m = CM^{1/n} - 1$." }
    ]
  },

  "sante-04": {
    title: "PS-04 : Fonction exponentielle : croissance et décroissance",
    domain: "Fonctions et suites",
    objectives: [
      "Utiliser les propriétés algébriques de la fonction exponentielle.",
      "Étudier une fonction $t \\mapsto Ae^{kt}$ et interpréter le signe de $k$.",
      "Modéliser une croissance bactérienne ou l'élimination d'un médicament.",
      "Résoudre des équations et inéquations du type $e^{a} = e^{b}$ ou $e^{a} < e^{b}$."
    ],
    keyPoints: [
      {
        title: "1. Propriétés algébriques",
        content: "Pour tous réels $a$ et $b$ et tout entier $n$ :\n$$e^{a+b} = e^{a}e^{b} \\qquad e^{-a} = \\frac{1}{e^{a}} \\qquad e^{a-b} = \\frac{e^{a}}{e^{b}} \\qquad (e^{a})^{n} = e^{na}$$\nDe plus $e^{0} = 1$, $e^{1} = e \\approx 2{,}718$ et $e^{x} > 0$ pour tout réel $x$."
      },
      {
        title: "2. Variations et limites",
        content: "La fonction exponentielle est strictement croissante sur $\\mathbb{R}$, avec $\\lim\\limits_{x \\to -\\infty} e^{x} = 0$ et $\\lim\\limits_{x \\to +\\infty} e^{x} = +\\infty$.\nPour $A > 0$, la fonction $t \\mapsto Ae^{kt}$ est croissante si $k > 0$ et décroissante si $k < 0$ ; elle vaut $A$ en $t = 0$."
      },
      {
        title: "3. Équations et inéquations",
        content: "Par stricte croissance de l'exponentielle :\n$$e^{a} = e^{b} \\iff a = b \\qquad e^{a} < e^{b} \\iff a < b.$$\n*Exemple* : $e^{2x - 1} = e^{x + 3} \\iff 2x - 1 = x + 3 \\iff x = 4$."
      },
      {
        title: "4. Modèles exponentiels en santé",
        content: "• **Croissance bactérienne** : $N(t) = N_0 e^{kt}$ avec $k > 0$ ; sur toute durée $\\Delta t$, la population est multipliée par le même facteur $e^{k \\Delta t}$.\n• **Élimination d'un médicament** : après une injection, $C(t) = C_0 e^{-kt}$ avec $k > 0$ ; en une unité de temps, la concentration est multipliée par $e^{-k}$, donc diminue de $(1 - e^{-k}) \\times 100$ %.\nCes modèles traduisent une variation proportionnelle à la quantité présente : $N' = kN$."
      },
      {
        title: "5. Aux épreuves : pièges fréquents",
        content: "• Écrire $e^{a+b} = e^{a} + e^{b}$ : c'est un **produit**, pas une somme.\n• Interpréter $C(t) = 4e^{-0{,}3t}$ comme « une baisse de 30 % par heure » : la baisse horaire est $1 - e^{-0{,}3} \\approx 25{,}9$ %.\n• Oublier que $e^{x} > 0$ : une équation $e^{x} = -2$ n'a pas de solution.\n• Confondre $e^{-2t}$ et $-e^{2t}$."
      }
    ],
    methods: [
      {
        title: "Méthode : Déterminer un modèle à partir de deux mesures",
        example: "Une culture compte 2 000 bactéries à $t = 0$ et 16 000 à $t = 3$ h, selon $N(t) = N_0 e^{kt}$. Combien en compte-t-elle à $t = 5$ h ?",
        steps: [
          "**Étape 1 (Valeur initiale)** : $N_0 = 2\\,000$.",
          "**Étape 2 (Facteur)** : $2\\,000\\,e^{3k} = 16\\,000$ donne $e^{3k} = 8 = 2^{3}$, donc $e^{k} = 2$.",
          "**Étape 3 (Conclure)** : $N(5) = 2\\,000 \\times (e^{k})^{5} = 2\\,000 \\times 32 = 64\\,000$ bactéries."
        ]
      },
      {
        title: "Méthode : Résoudre une inéquation exponentielle",
        example: "Pour quelles durées $t$ a-t-on $e^{-0{,}1t} \\leq e^{-2}$ ?",
        steps: [
          "**Étape 1 (Croissance)** : l'exponentielle étant croissante, l'inéquation équivaut à $-0{,}1t \\leq -2$.",
          "**Étape 2 (Diviser par un négatif)** : on change le sens : $t \\geq 20$.",
          "**Étape 3 (Conclure)** : l'ensemble des solutions positives est $[20 ; +\\infty[$."
        ]
      }
    ],
    traps: [
      "⚠️ Diviser une inéquation par un nombre négatif change son sens.",
      "⚠️ $e^{x}$ n'est jamais nul : une concentration $C_0e^{-kt}$ ne s'annule jamais, elle tend vers 0.",
      "⚠️ $(e^{a})^{2} = e^{2a}$, et non $e^{a^{2}}$."
    ],
    flashcards: [
      { q: "Simplifier $e^{a} \\times e^{b}$.", a: "$e^{a+b}$." },
      { q: "Sens de variation de $t \\mapsto 3e^{-0{,}5t}$ ?", a: "Strictement décroissante (coefficient $-0{,}5 < 0$)." },
      { q: "Limite de $e^{-t}$ quand $t \\to +\\infty$ ?", a: "$0$." },
      { q: "Par combien la population $N_0e^{kt}$ est-elle multipliée en une unité de temps ?", a: "Par $e^{k}$." }
    ]
  },

  "sante-05": {
    title: "PS-05 : Fonction logarithme népérien, demi-vie et pH",
    domain: "Fonctions et suites",
    objectives: [
      "Utiliser les propriétés algébriques du logarithme népérien.",
      "Résoudre une équation $e^{kt} = a$ ou une inéquation $q^{n} < a$ avec le logarithme.",
      "Calculer une demi-vie ou un temps de doublement.",
      "Utiliser le logarithme décimal pour calculer un pH."
    ],
    keyPoints: [
      {
        title: "1. Définition et propriétés",
        content: "Pour $x > 0$, $\\ln x$ est l'unique réel $y$ tel que $e^{y} = x$. Ainsi $e^{\\ln x} = x$ pour $x > 0$ et $\\ln(e^{y}) = y$ pour tout réel $y$.\nPour $a > 0$, $b > 0$ et $n$ entier :\n$$\\ln(ab) = \\ln a + \\ln b \\qquad \\ln\\frac{a}{b} = \\ln a - \\ln b \\qquad \\ln(a^{n}) = n\\ln a$$\n$\\ln 1 = 0$, $\\ln e = 1$ ; $\\ln$ est strictement croissante sur $]0 ; +\\infty[$."
      },
      {
        title: "2. Résoudre avec le logarithme",
        content: "Pour $a > 0$ : $e^{x} = a \\iff x = \\ln a$.\nPour $0 < q < 1$, $q^{n} < a \\iff n \\ln q < \\ln a \\iff n > \\dfrac{\\ln a}{\\ln q}$ : le sens change car $\\ln q < 0$.\n*Exemple* : $0{,}8^{n} < 0{,}05 \\iff n > \\dfrac{\\ln 0{,}05}{\\ln 0{,}8} \\approx 13{,}4$, donc $n \\geq 14$."
      },
      {
        title: "3. Demi-vie et temps de doublement",
        content: "Pour $C(t) = C_0 e^{-kt}$ ($k > 0$), la **demi-vie** $T$ vérifie $C(T) = \\dfrac{C_0}{2}$, soit $e^{-kT} = \\dfrac{1}{2}$ :\n$$T = \\frac{\\ln 2}{k}.$$\nElle ne dépend pas de $C_0$ : après $n$ demi-vies, il reste $\\left(\\dfrac{1}{2}\\right)^{n}$ de la quantité initiale.\nPour $N(t) = N_0 e^{kt}$, le **temps de doublement** est aussi $\\dfrac{\\ln 2}{k}$."
      },
      {
        title: "4. Logarithme décimal et pH",
        content: "$\\log x = \\dfrac{\\ln x}{\\ln 10}$ ; on a $\\log(10^{n}) = n$ et les mêmes règles de calcul que pour $\\ln$.\nLe pH d'une solution aqueuse est $\\text{pH} = -\\log[\\text{H}_3\\text{O}^{+}]$ (concentration en mol/L). Multiplier $[\\text{H}_3\\text{O}^{+}]$ par 10 fait **baisser** le pH de 1. Le sang a un pH voisin de 7,4."
      },
      {
        title: "5. Aux épreuves : pièges fréquents",
        content: "• Écrire $\\ln(a + b) = \\ln a + \\ln b$ ou $\\ln(3x) = 3\\ln x$.\n• Oublier de changer le sens d'une inéquation après division par $\\ln q < 0$.\n• Oublier le domaine : $\\ln x$ n'existe que pour $x > 0$.\n• Croire qu'un écart de pH de 3 correspond à un facteur 3 : c'est un facteur $10^{3} = 1\\,000$."
      }
    ],
    methods: [
      {
        title: "Méthode : Déterminer une durée à partir d'un modèle",
        example: "Une concentration vaut 20 mg/L à $t = 0$ et 15 mg/L à $t = 2$ h, selon $C(t) = 20e^{-kt}$. Quand atteint-elle 5 mg/L ?",
        steps: [
          "**Étape 1 (Constante)** : $e^{-2k} = \\dfrac{3}{4}$, donc $k = \\dfrac{1}{2}\\ln\\dfrac{4}{3}$.",
          "**Étape 2 (Équation)** : $20e^{-kt} = 5 \\iff e^{-kt} = \\dfrac{1}{4} \\iff t = \\dfrac{\\ln 4}{k}$.",
          "**Étape 3 (Conclure)** : $t = \\dfrac{2\\ln 4}{\\ln(4/3)} \\approx 9{,}6$ h."
        ]
      },
      {
        title: "Méthode : Trouver le plus petit entier vérifiant une condition",
        example: "Il reste $100 \\times 0{,}8^{n}$ % d'un produit après $n$ heures. À partir de quand en reste-t-il moins de 5 % ?",
        steps: [
          "**Étape 1 (Inéquation)** : $0{,}8^{n} < 0{,}05$.",
          "**Étape 2 (Logarithme)** : $n \\ln 0{,}8 < \\ln 0{,}05$, puis $n > \\dfrac{\\ln 0{,}05}{\\ln 0{,}8} \\approx 13{,}4$ (sens changé car $\\ln 0{,}8 < 0$).",
          "**Étape 3 (Conclure)** : à partir de $n = 14$ heures ; on vérifie que $0{,}8^{13} \\approx 0{,}055$ et $0{,}8^{14} \\approx 0{,}044$."
        ]
      }
    ],
    traps: [
      "⚠️ $\\ln q < 0$ lorsque $0 < q < 1$ : diviser par $\\ln q$ change le sens de l'inéquation.",
      "⚠️ La demi-vie $\\dfrac{\\ln 2}{k}$ ne dépend pas de la dose initiale.",
      "⚠️ Une solution plus acide a un pH **plus petit**."
    ],
    flashcards: [
      { q: "Solution de $e^{x} = a$ pour $a > 0$ ?", a: "$x = \\ln a$." },
      { q: "Demi-vie de $C_0e^{-kt}$ ?", a: "$T = \\dfrac{\\ln 2}{k}$." },
      { q: "Simplifier $\\ln(a^{n})$.", a: "$n \\ln a$." },
      { q: "Définition du pH ?", a: "$\\text{pH} = -\\log[\\text{H}_3\\text{O}^{+}]$." }
    ]
  },

  "sante-06": {
    title: "PS-06 : Dérivées, variations et courbes de concentration",
    domain: "Fonctions et suites",
    objectives: [
      "Calculer la dérivée d'une fonction usuelle, d'un produit, d'un quotient et des composées $e^{u}$ et $\\ln u$.",
      "Dresser un tableau de variations et déterminer un maximum.",
      "Interpréter la dérivée comme une vitesse d'évolution et déterminer une tangente."
    ],
    keyPoints: [
      {
        title: "1. Dérivées usuelles et opérations",
        content: "$(x^{n})' = nx^{n-1}$ ; $(e^{x})' = e^{x}$ ; $(\\ln x)' = \\dfrac{1}{x}$ ; $\\left(\\dfrac{1}{x}\\right)' = -\\dfrac{1}{x^{2}}$.\n$$(uv)' = u'v + uv' \\qquad \\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^{2}}$$"
      },
      {
        title: "2. Fonctions composées",
        content: "$$(e^{u})' = u'e^{u} \\qquad (\\ln u)' = \\frac{u'}{u} \\ (u > 0) \\qquad (u^{n})' = nu'u^{n-1}$$\n*Exemples* : $(e^{-0{,}5t})' = -0{,}5e^{-0{,}5t}$ ; $(\\ln(t^{2} + 1))' = \\dfrac{2t}{t^{2} + 1}$."
      },
      {
        title: "3. Variations et extremums",
        content: "Sur un intervalle, si $f' > 0$ (sauf en des points isolés), $f$ est strictement croissante ; si $f' < 0$, elle est strictement décroissante.\nSi $f'$ s'annule en $a$ **en changeant de signe**, $f$ admet un extremum local en $a$. Pour $C(t) = Ate^{-kt}$, $C'(t) = A(1 - kt)e^{-kt}$ : comme $e^{-kt} > 0$, le signe de $C'$ est celui de $1 - kt$ et le maximum est atteint en $t = \\dfrac{1}{k}$."
      },
      {
        title: "4. Vitesse et tangente",
        content: "$f'(a)$ est la vitesse instantanée d'évolution de $f$ à l'instant $a$ : pour une concentration en mg/L et un temps en h, $C'(a)$ s'exprime en mg/L/h ; $C'(a) < 0$ signifie que la concentration diminue.\nLa tangente à la courbe au point d'abscisse $a$ a pour équation $y = f'(a)(x - a) + f(a)$."
      },
      {
        title: "5. Aux épreuves : pièges fréquents",
        content: "• Dériver un produit en multipliant les dérivées : $(uv)' \\neq u'v'$.\n• Oublier le facteur $u'$ : $(e^{-2t})' = -2e^{-2t}$, et non $e^{-2t}$.\n• Conclure à un extremum dès que $f'(a) = 0$ : $f(t) = (t - 2)^{3}$ a une dérivée nulle en 2 sans extremum.\n• Étudier le signe de $f'$ sans factoriser, alors qu'un facteur $e^{\\dots}$ est toujours strictement positif."
      }
    ],
    methods: [
      {
        title: "Méthode : Trouver le pic de concentration",
        example: "Après une prise orale, $C(t) = 20te^{-0{,}5t}$ (en mg/L, $t$ en h, $t \\geq 0$).",
        steps: [
          "**Étape 1 (Dériver)** : $C'(t) = 20e^{-0{,}5t} + 20t \\times (-0{,}5)e^{-0{,}5t} = 20(1 - 0{,}5t)e^{-0{,}5t}$.",
          "**Étape 2 (Signe)** : $e^{-0{,}5t} > 0$, donc $C'(t)$ a le signe de $1 - 0{,}5t$ : positif avant $t = 2$, négatif après.",
          "**Étape 3 (Conclure)** : le maximum est atteint à $t = 2$ h et vaut $C(2) = 40e^{-1} \\approx 14{,}72$ mg/L."
        ]
      },
      {
        title: "Méthode : Écrire une tangente",
        example: "Tangente à la courbe de $f(x) = e^{x}$ au point d'abscisse 0.",
        steps: [
          "**Étape 1 (Valeurs)** : $f(0) = 1$ et $f'(0) = e^{0} = 1$.",
          "**Étape 2 (Formule)** : $y = f'(0)(x - 0) + f(0)$.",
          "**Étape 3 (Conclure)** : $y = x + 1$."
        ]
      }
    ],
    traps: [
      "⚠️ $(uv)' = u'v + uv'$ : n'oubliez aucun des deux termes.",
      "⚠️ Une dérivée qui s'annule sans changer de signe ne donne pas d'extremum.",
      "⚠️ Le signe de $C'(t)$ indique si la concentration augmente ou diminue ; sa valeur est une vitesse, avec une unité."
    ],
    flashcards: [
      { q: "Dérivée de $e^{u}$ ?", a: "$u'e^{u}$." },
      { q: "Dérivée de $\\ln u$ ?", a: "$\\dfrac{u'}{u}$." },
      { q: "Équation de la tangente en $a$ ?", a: "$y = f'(a)(x - a) + f(a)$." },
      { q: "Abscisse du maximum de $te^{-kt}$ ($k > 0$) ?", a: "$t = \\dfrac{1}{k}$." }
    ]
  },

  "sante-07": {
    title: "PS-07 : Suites arithmétiques et géométriques : modèles d'évolution",
    domain: "Fonctions et suites",
    objectives: [
      "Reconnaître une suite arithmétique ou géométrique, en donner le terme général et calculer une somme.",
      "Modéliser des doses répétées d'un médicament par une suite arithmético-géométrique.",
      "Étudier une suite arithmético-géométrique à l'aide d'une suite auxiliaire.",
      "Déterminer une limite ou un seuil."
    ],
    keyPoints: [
      {
        title: "1. Suites arithmétiques",
        content: "$u_{n+1} = u_n + r$ ; terme général $u_n = u_0 + nr$.\nSomme de termes consécutifs : $S = (\\text{nombre de termes}) \\times \\dfrac{\\text{premier} + \\text{dernier}}{2}$.\nModèle d'une évolution à **accroissement constant** (on ajoute la même quantité à chaque étape)."
      },
      {
        title: "2. Suites géométriques",
        content: "$u_{n+1} = q\\,u_n$ ; terme général $u_n = u_0 \\, q^{n}$.\nPour $q \\neq 1$ : $u_0 + u_1 + \\dots + u_{n} = u_0 \\times \\dfrac{1 - q^{n+1}}{1 - q}$.\nModèle d'une évolution à **taux constant** : une hausse de 40 % par heure donne $q = 1{,}4$, une élimination de 15 % par heure donne $q = 0{,}85$."
      },
      {
        title: "3. Limites des suites géométriques",
        content: "Si $0 < q < 1$, $\\lim q^{n} = 0$ ; si $q > 1$, $\\lim q^{n} = +\\infty$.\nPour trouver un seuil (plus petit $n$ tel que $u_n < s$), on résout l'inéquation avec le logarithme ou on calcule les termes successifs."
      },
      {
        title: "4. Doses répétées : suites arithmético-géométriques",
        content: "Si, entre deux prises, 40 % du médicament est éliminé puis qu'on administre 100 mg : $u_{n+1} = 0{,}6\\,u_n + 100$.\nLa valeur d'équilibre $\\ell$ vérifie $\\ell = 0{,}6\\ell + 100$, soit $\\ell = 250$. La suite $v_n = u_n - \\ell$ est géométrique de raison $0{,}6$ : $v_{n+1} = 0{,}6 \\, v_n$.\nDonc $u_n = \\ell + (u_0 - \\ell) \\times 0{,}6^{n}$ et $\\lim u_n = 250$ : la quantité se stabilise (plateau)."
      },
      {
        title: "5. Aux épreuves : pièges fréquents",
        content: "• Dire qu'une suite $u_{n+1} = au_n + b$ (avec $b \\neq 0$) est géométrique de raison $a$.\n• Se tromper d'un rang dans le terme général ($u_0q^{n}$ si l'on part de $u_0$, $u_1q^{n-1}$ si l'on part de $u_1$) ou dans le nombre de termes d'une somme.\n• Croire qu'une suite croissante tend forcément vers $+\\infty$.\n• Oublier de changer le sens de l'inéquation en divisant par $\\ln q < 0$."
      }
    ],
    methods: [
      {
        title: "Méthode : Étudier une suite $u_{n+1} = au_n + b$",
        example: "$u_0 = 100$ et $u_{n+1} = 0{,}6\\,u_n + 100$.",
        steps: [
          "**Étape 1 (Point fixe)** : $\\ell = 0{,}6\\ell + 100 \\iff \\ell = 250$.",
          "**Étape 2 (Suite auxiliaire)** : $v_n = u_n - 250$ vérifie $v_{n+1} = 0{,}6\\,u_n + 100 - 250 = 0{,}6(u_n - 250) = 0{,}6\\,v_n$ ; $v_0 = -150$.",
          "**Étape 3 (Conclure)** : $u_n = 250 - 150 \\times 0{,}6^{n}$, et comme $0 < 0{,}6 < 1$, $\\lim u_n = 250$."
        ]
      },
      {
        title: "Méthode : Déterminer un seuil",
        example: "$u_n = 500 \\times 0{,}85^{n}$ : à partir de quel rang a-t-on $u_n < 100$ ?",
        steps: [
          "**Étape 1 (Isoler)** : $0{,}85^{n} < 0{,}2$.",
          "**Étape 2 (Logarithme)** : $n > \\dfrac{\\ln 0{,}2}{\\ln 0{,}85} \\approx 9{,}9$.",
          "**Étape 3 (Conclure)** : à partir de $n = 10$ ; contrôle : $u_9 \\approx 115{,}8$ et $u_{10} \\approx 98{,}4$."
        ]
      }
    ],
    traps: [
      "⚠️ Une somme de $u_0$ à $u_n$ comporte $n + 1$ termes.",
      "⚠️ Pour montrer qu'une suite est géométrique, il faut établir $v_{n+1} = q\\,v_n$ pour tout $n$, pas seulement le vérifier sur deux termes.",
      "⚠️ Une suite croissante et majorée converge : elle ne tend pas vers $+\\infty$."
    ],
    flashcards: [
      { q: "Terme général d'une suite géométrique ?", a: "$u_n = u_0 q^{n}$." },
      { q: "Raison d'une population qui augmente de 40 % par heure ?", a: "$q = 1{,}4$." },
      { q: "Limite de $q^{n}$ pour $0 < q < 1$ ?", a: "$0$." },
      { q: "Valeur d'équilibre de $u_{n+1} = 0{,}6u_n + 100$ ?", a: "$\\ell = 250$." }
    ]
  },

  "sante-08": {
    title: "PS-08 : Probabilités conditionnelles et tests de dépistage",
    domain: "Probabilités et statistiques",
    objectives: [
      "Construire et exploiter un arbre pondéré.",
      "Appliquer la formule des probabilités totales.",
      "Calculer la probabilité d'être malade sachant que le test est positif.",
      "Reconnaître deux événements indépendants."
    ],
    keyPoints: [
      {
        title: "1. Probabilité conditionnelle",
        content: "Pour $P(A) \\neq 0$ : $$P_A(B) = \\frac{P(A \\cap B)}{P(A)} \\quad \\text{donc} \\quad P(A \\cap B) = P(A) \\times P_A(B).$$\nDans un arbre pondéré, la probabilité d'un chemin est le **produit** des probabilités rencontrées ; la somme des probabilités issues d'un même nœud vaut 1."
      },
      {
        title: "2. Formule des probabilités totales",
        content: "Si $M$ et $\\overline{M}$ partitionnent l'univers :\n$$P(T) = P(M)P_M(T) + P(\\overline{M})P_{\\overline{M}}(T).$$\n*Exemple* : $P(M) = 0{,}1$, $P_M(T) = 0{,}9$, $P_{\\overline{M}}(T) = 0{,}05$ donne $P(T) = 0{,}09 + 0{,}045 = 0{,}135$."
      },
      {
        title: "3. Tests de dépistage",
        content: "Avec $M$ : « être malade » et $T$ : « le test est positif » :\n• **sensibilité** $= P_M(T)$ ; **spécificité** $= P_{\\overline{M}}(\\overline{T})$ ; **prévalence** $= P(M)$ ;\n• **valeur prédictive positive** $\\text{VPP} = P_T(M) = \\dfrac{P(M \\cap T)}{P(T)}$ ; **valeur prédictive négative** $\\text{VPN} = P_{\\overline{T}}(\\overline{M})$.\nQuand la maladie est rare, la VPP peut être faible même avec un très bon test : beaucoup de positifs sont des faux positifs."
      },
      {
        title: "4. Indépendance",
        content: "$A$ et $B$ sont **indépendants** si $P(A \\cap B) = P(A) \\times P(B)$, ce qui équivaut (si $P(A) \\neq 0$) à $P_A(B) = P(B)$.\nÀ ne pas confondre avec **incompatibles** : $A \\cap B = \\varnothing$. Pour des événements indépendants, $P(A \\cup B) = P(A) + P(B) - P(A)P(B)$."
      },
      {
        title: "5. Aux épreuves : pièges fréquents",
        content: "• Confondre $P_M(T)$ (sensibilité) et $P_T(M)$ (valeur prédictive positive).\n• Écrire $P(A \\cap B) = P(A) \\times P(B)$ sans justifier l'indépendance.\n• Confondre indépendants et incompatibles.\n• Oublier la branche des non-malades dans le calcul de $P(T)$."
      }
    ],
    methods: [
      {
        title: "Méthode : Calculer une valeur prédictive positive",
        example: "Prévalence 1 %, sensibilité 99 %, spécificité 95 %. Probabilité d'être malade sachant le test positif ?",
        steps: [
          "**Étape 1 (Arbre)** : $P(M \\cap T) = 0{,}01 \\times 0{,}99 = 0{,}0099$ et $P(\\overline{M} \\cap T) = 0{,}99 \\times 0{,}05 = 0{,}0495$.",
          "**Étape 2 (Probabilités totales)** : $P(T) = 0{,}0099 + 0{,}0495 = 0{,}0594$.",
          "**Étape 3 (Conclure)** : $P_T(M) = \\dfrac{0{,}0099}{0{,}0594} = \\dfrac{1}{6} \\approx 0{,}17$ : seul un positif sur six est malade."
        ]
      },
      {
        title: "Méthode : Tester l'indépendance",
        example: "$P(A) = 0{,}5$, $P(B) = 0{,}4$ et $P(A \\cap B) = 0{,}2$.",
        steps: [
          "**Étape 1 (Produit)** : $P(A) \\times P(B) = 0{,}5 \\times 0{,}4 = 0{,}2$.",
          "**Étape 2 (Comparer)** : il est égal à $P(A \\cap B)$.",
          "**Étape 3 (Conclure)** : $A$ et $B$ sont indépendants (ils ne sont pas incompatibles puisque $P(A \\cap B) \\neq 0$)."
        ]
      }
    ],
    traps: [
      "⚠️ La sensibilité ne dit pas la probabilité qu'un patient positif soit malade : c'est la VPP qui répond à cette question.",
      "⚠️ Deux événements incompatibles de probabilités non nulles ne sont jamais indépendants.",
      "⚠️ La VPP dépend de la prévalence : le même test donne des VPP très différentes selon la population."
    ],
    flashcards: [
      { q: "Sensibilité d'un test ?", a: "$P_M(T)$ : probabilité d'un test positif chez un malade." },
      { q: "Spécificité d'un test ?", a: "$P_{\\overline{M}}(\\overline{T})$ : probabilité d'un test négatif chez un non-malade." },
      { q: "Formule de $P_A(B)$ ?", a: "$\\dfrac{P(A \\cap B)}{P(A)}$." },
      { q: "Condition d'indépendance de $A$ et $B$ ?", a: "$P(A \\cap B) = P(A)P(B)$." }
    ]
  },

  "sante-09": {
    title: "PS-09 : Variables aléatoires et loi binomiale",
    domain: "Probabilités et statistiques",
    objectives: [
      "Calculer l'espérance, la variance et l'écart type d'une variable aléatoire.",
      "Reconnaître un schéma de Bernoulli et une loi binomiale, et en donner les paramètres.",
      "Calculer $P(X = k)$, $P(X \\geq 1)$ et l'espérance d'une loi binomiale.",
      "Déterminer une taille d'échantillon minimale pour une probabilité donnée."
    ],
    keyPoints: [
      {
        title: "1. Espérance et variance",
        content: "Si $X$ prend les valeurs $x_i$ avec les probabilités $p_i$ :\n$$E(X) = \\sum p_i x_i \\qquad V(X) = \\sum p_i (x_i - E(X))^{2} = E(X^{2}) - E(X)^{2} \\qquad \\sigma(X) = \\sqrt{V(X)}$$\nDe plus $E(aX + b) = aE(X) + b$ et $V(aX + b) = a^{2}V(X)$."
      },
      {
        title: "2. Schéma de Bernoulli",
        content: "Une épreuve de Bernoulli a deux issues : succès (probabilité $p$) et échec ($1 - p$). Un schéma de Bernoulli est la répétition de $n$ épreuves **identiques et indépendantes**.\nLe nombre $X$ de succès suit la loi binomiale $\\mathcal{B}(n ; p)$.\n*Exemple* : 10 patients traités indépendamment, chacun guéri avec probabilité 0,7 : le nombre de guérisons suit $\\mathcal{B}(10 ; 0{,}7)$."
      },
      {
        title: "3. Formules de la loi binomiale",
        content: "$$P(X = k) = \\binom{n}{k} p^{k}(1 - p)^{n-k} \\qquad E(X) = np \\qquad V(X) = np(1 - p)$$\nAu moins un succès : $P(X \\geq 1) = 1 - P(X = 0) = 1 - (1 - p)^{n}$."
      },
      {
        title: "4. Taille d'échantillon",
        content: "Pour avoir au moins une probabilité $\\alpha$ d'observer au moins un succès, on résout $1 - (1 - p)^{n} \\geq \\alpha$, soit $(1 - p)^{n} \\leq 1 - \\alpha$, puis $n \\geq \\dfrac{\\ln(1 - \\alpha)}{\\ln(1 - p)}$ (le sens change car $\\ln(1 - p) < 0$).\n*Exemple* : $p = 0{,}1$ et $\\alpha = 0{,}95$ donnent $n \\geq 28{,}4$, soit $n = 29$."
      },
      {
        title: "5. Aux épreuves : pièges fréquents",
        content: "• Écrire $P(X \\geq 1) = 1 - P(X = 1)$ au lieu de $1 - P(X = 0)$.\n• Oublier le coefficient binomial $\\binom{n}{k}$ dans $P(X = k)$.\n• Utiliser la loi binomiale sans justifier « identiques et indépendantes » (tirages sans remise dans une petite population, par exemple).\n• Confondre variance $np(1 - p)$ et écart type $\\sqrt{np(1 - p)}$."
      }
    ],
    methods: [
      {
        title: "Méthode : Justifier une loi binomiale et calculer",
        example: "Un vaccin provoque une réaction bénigne avec probabilité 0,1. On vaccine 5 personnes, de façon indépendante. Probabilité d'exactement 2 réactions ?",
        steps: [
          "**Étape 1 (Justifier)** : 5 épreuves identiques et indépendantes à deux issues, succès « réaction » de probabilité 0,1 : $X \\sim \\mathcal{B}(5 ; 0{,}1)$.",
          "**Étape 2 (Formule)** : $P(X = 2) = \\binom{5}{2} \\times 0{,}1^{2} \\times 0{,}9^{3}$.",
          "**Étape 3 (Conclure)** : $10 \\times 0{,}01 \\times 0{,}729 = 0{,}0729$."
        ]
      },
      {
        title: "Méthode : Calculer une espérance et une variance",
        example: "$X$ prend les valeurs 0, 1, 2 avec les probabilités 0,5 ; 0,3 ; 0,2.",
        steps: [
          "**Étape 1 (Espérance)** : $E(X) = 0 \\times 0{,}5 + 1 \\times 0{,}3 + 2 \\times 0{,}2 = 0{,}7$.",
          "**Étape 2 (Moment d'ordre 2)** : $E(X^{2}) = 0{,}3 + 4 \\times 0{,}2 = 1{,}1$.",
          "**Étape 3 (Variance)** : $V(X) = 1{,}1 - 0{,}7^{2} = 0{,}61$ et $\\sigma(X) = \\sqrt{0{,}61} \\approx 0{,}78$."
        ]
      }
    ],
    traps: [
      "⚠️ « Au moins un » se calcule presque toujours par l'événement contraire « aucun ».",
      "⚠️ L'espérance n'est pas forcément une valeur prise par $X$ : $E(X) = 0{,}7$ est une moyenne théorique.",
      "⚠️ La loi binomiale exige des épreuves indépendantes de même probabilité de succès."
    ],
    flashcards: [
      { q: "Espérance de $\\mathcal{B}(n ; p)$ ?", a: "$np$." },
      { q: "Variance de $\\mathcal{B}(n ; p)$ ?", a: "$np(1 - p)$." },
      { q: "$P(X \\geq 1)$ pour $X \\sim \\mathcal{B}(n ; p)$ ?", a: "$1 - (1 - p)^{n}$." },
      { q: "$P(X = k)$ pour $X \\sim \\mathcal{B}(n ; p)$ ?", a: "$\\binom{n}{k}p^{k}(1 - p)^{n-k}$." }
    ]
  },

  "sante-10": {
    title: "PS-10 : Statistiques descriptives : moyenne, écart type, médiane et quartiles",
    domain: "Probabilités et statistiques",
    objectives: [
      "Calculer une moyenne, une moyenne pondérée, une variance et un écart type.",
      "Déterminer la médiane, les quartiles et l'écart interquartile d'une série.",
      "Connaître l'effet d'un changement d'unité (transformation affine) sur les indicateurs.",
      "Lire un diagramme en boîte et comparer des séries."
    ],
    keyPoints: [
      {
        title: "1. Moyenne",
        content: "Pour une série de valeurs $x_i$ d'effectifs $n_i$ (effectif total $N$) :\n$$\\bar{x} = \\frac{1}{N}\\sum n_i x_i.$$\nLa moyenne de deux groupes se calcule en **pondérant** par les effectifs : 10 patients de 70 kg et 15 patients de 80 kg ont une masse moyenne de $\\dfrac{700 + 1\\,200}{25} = 76$ kg."
      },
      {
        title: "2. Variance et écart type",
        content: "$$V = \\frac{1}{N}\\sum n_i (x_i - \\bar{x})^{2} = \\frac{1}{N}\\sum n_i x_i^{2} - \\bar{x}^{2} \\qquad \\sigma = \\sqrt{V}$$\nL'écart type mesure la dispersion autour de la moyenne ; il s'exprime dans l'unité des données."
      },
      {
        title: "3. Médiane et quartiles",
        content: "Les valeurs étant **rangées dans l'ordre croissant** :\n• la médiane partage la série en deux groupes de même effectif (valeur centrale si $N$ est impair, moyenne des deux valeurs centrales si $N$ est pair) ;\n• $Q_1$ est la plus petite valeur telle qu'au moins 25 % des valeurs lui soient inférieures ou égales (rang : premier entier $\\geq \\dfrac{N}{4}$) ; $Q_3$ de même avec 75 % ;\n• l'écart interquartile est $Q_3 - Q_1$. Un diagramme en boîte représente min, $Q_1$, médiane, $Q_3$, max."
      },
      {
        title: "4. Changement d'unité",
        content: "Si $y_i = ax_i + b$ : $\\bar{y} = a\\bar{x} + b$, $\\sigma_y = |a|\\sigma_x$, $\\text{Me}_y = a\\,\\text{Me}_x + b$ (pour $a > 0$).\n*Exemple* : une température moyenne de 37 °C d'écart type 0,4 °C donne, en degrés Fahrenheit ($y = 1{,}8x + 32$), une moyenne de 98,6 °F et un écart type de 0,72 °F : le décalage $b$ n'agit pas sur l'écart type."
      },
      {
        title: "5. Aux épreuves : pièges fréquents",
        content: "• Prendre la valeur du milieu d'une série **non rangée** pour la médiane.\n• Faire la moyenne de deux moyennes sans pondérer par les effectifs.\n• Ajouter le décalage $b$ à l'écart type lors d'un changement d'unité.\n• Confondre variance et écart type (oublier la racine carrée)."
      }
    ],
    methods: [
      {
        title: "Méthode : Calculer un écart type avec un tableau d'effectifs",
        example: "Tensions (mmHg) : 110 (effectif 3), 120 (5), 130 (8), 140 (4).",
        steps: [
          "**Étape 1 (Moyenne)** : $\\bar{x} = \\dfrac{330 + 600 + 1\\,040 + 560}{20} = 126{,}5$.",
          "**Étape 2 (Moyenne des carrés)** : $\\dfrac{3 \\times 110^{2} + 5 \\times 120^{2} + 8 \\times 130^{2} + 4 \\times 140^{2}}{20} = 16\\,095$.",
          "**Étape 3 (Conclure)** : $V = 16\\,095 - 126{,}5^{2} = 92{,}75$ et $\\sigma = \\sqrt{92{,}75} \\approx 9{,}6$ mmHg."
        ]
      },
      {
        title: "Méthode : Déterminer médiane et quartiles",
        example: "Série rangée : 4 ; 5 ; 7 ; 8 ; 10 ; 12 ; 13 ; 15 ($N = 8$).",
        steps: [
          "**Étape 1 (Médiane)** : $N$ pair : moyenne des 4e et 5e valeurs, $\\dfrac{8 + 10}{2} = 9$.",
          "**Étape 2 (Quartiles)** : $\\dfrac{N}{4} = 2$ donne $Q_1$ = 2e valeur $= 5$ ; $\\dfrac{3N}{4} = 6$ donne $Q_3$ = 6e valeur $= 12$.",
          "**Étape 3 (Dispersion)** : écart interquartile $Q_3 - Q_1 = 7$."
        ]
      }
    ],
    traps: [
      "⚠️ Rangez toujours la série avant de chercher médiane et quartiles.",
      "⚠️ La médiane résiste aux valeurs extrêmes, la moyenne non.",
      "⚠️ Multiplier toutes les valeurs par $a$ multiplie la variance par $a^{2}$ et l'écart type par $|a|$."
    ],
    flashcards: [
      { q: "Formule de König pour la variance ?", a: "$V = \\overline{x^{2}} - \\bar{x}^{2}$ (moyenne des carrés moins carré de la moyenne)." },
      { q: "Écart interquartile ?", a: "$Q_3 - Q_1$." },
      { q: "Effet de $y = ax + b$ sur l'écart type ?", a: "$\\sigma_y = |a|\\sigma_x$." },
      { q: "Que représente la longueur de la boîte d'un diagramme en boîte ?", a: "L'écart interquartile $Q_3 - Q_1$ : la boîte contient environ la moitié centrale des valeurs." }
    ]
  }
};

if (!window.MATHS_COURSES) window.MATHS_COURSES = {};
Object.assign(window.MATHS_COURSES, window.MATHS_COURSES_SANTE);
