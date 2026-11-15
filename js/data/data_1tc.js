/**
 * Données pédagogiques : Première générale, enseignement scientifique (tronc commun, sans spécialité mathématiques)
 * Programme de mathématiques de 1re et épreuve anticipée de mathématiques.
 * Chapitres déclarés dans js/data/chapters_lycee.js (niveau '1tc'). Format : voir js/data/data_1ere.js.
 */

window.MATHS_COURSES_1TC = {
  "1TC1": {
    "title": "1TC1 : Automatismes : proportions, pourcentages et évolutions",
    "domain": "Nombres et calculs",
    "objectives": [
      "Calculer, appliquer et exprimer une proportion sous différentes formes (fraction, décimal, pourcentage).",
      "Calculer la proportion d'une proportion et retrouver une proportion dans une sous-population.",
      "Appliquer un taux d'évolution, calculer un taux d'évolution, passer du taux au coefficient multiplicateur et inversement.",
      "Enchaîner des évolutions successives, déterminer une évolution réciproque et retrouver une valeur initiale.",
      "Effectuer sans calculatrice les calculs de pourcentages attendus dans la partie « automatismes » de l'épreuve anticipée."
    ],
    "keyPoints": [
      {
        "title": "1. Proportion et pourcentage",
        "content": "La **proportion** d'une sous-population $A$ dans une population $E$ est $p = \\frac{n_A}{n_E}$, avec $0 \\le p \\le 1$. Elle s'écrit indifféremment $\\frac{3}{4}$, $0{,}75$ ou $75\\,\\%$.\n• Prendre $t\\,\\%$ d'une quantité $Q$, c'est calculer $\\frac{t}{100} \\times Q$ : $15\\,\\%$ de $80$ vaut $0{,}15 \\times 80 = 12$.\n• Pour calculer de tête : $10\\,\\%$ c'est diviser par $10$, $25\\,\\%$ c'est diviser par $4$, $50\\,\\%$ c'est diviser par $2$ ; $15\\,\\% = 10\\,\\% + 5\\,\\%$.\n• Inversement, si $t\\,\\%$ d'une quantité vaut $a$, la quantité vaut $a \\div \\frac{t}{100}$ : si $20\\,\\%$ des élèves sont $36$, il y a $36 \\div 0{,}2 = 180$ élèves."
      },
      {
        "title": "2. Proportion d'une proportion",
        "content": "Si $A \\subset B \\subset E$, alors $p_{A/E} = p_{A/B} \\times p_{B/E}$ : **les proportions se multiplient**.\n• *Exemple* : $40\\,\\%$ des élèves sont internes et $25\\,\\%$ des internes font du sport en club : $0{,}4 \\times 0{,}25 = 0{,}1$, soit $10\\,\\%$ des élèves.\n• Dans l'autre sens, $p_{A/B} = \\frac{p_{A/E}}{p_{B/E}}$ : si $10\\,\\%$ des élèves sont des internes sportifs et $40\\,\\%$ des élèves sont internes, alors $\\frac{0{,}1}{0{,}4} = 0{,}25$, soit $25\\,\\%$ des internes."
      },
      {
        "title": "3. Taux d'évolution et coefficient multiplicateur",
        "content": "Une quantité passe de $V_0$ à $V_1$ ($V_0 \\neq 0$). Le **taux d'évolution** est $t = \\frac{V_1 - V_0}{V_0}$ et le **coefficient multiplicateur** est $CM = \\frac{V_1}{V_0} = 1 + t$.\n• Une hausse de $t\\,\\%$ correspond à $CM = 1 + \\frac{t}{100}$ ; une baisse de $t\\,\\%$ à $CM = 1 - \\frac{t}{100}$.\n• *Exemples* : $+8\\,\\%$ donne $CM = 1{,}08$ ; $-30\\,\\%$ donne $CM = 0{,}7$ ; $CM = 2{,}5$ correspond à $+150\\,\\%$.\n• Valeur finale : $V_1 = V_0 \\times CM$ ; valeur initiale : $V_0 = \\frac{V_1}{CM}$."
      },
      {
        "title": "4. Évolutions successives",
        "content": "Des évolutions successives de coefficients $CM_1$, $CM_2$, … équivalent à une évolution de coefficient $CM = CM_1 \\times CM_2 \\times \\ldots$\n• Les taux **ne s'additionnent pas** : $+10\\,\\%$ puis $-10\\,\\%$ donne $1{,}1 \\times 0{,}9 = 0{,}99$, soit $-1\\,\\%$.\n• Une même évolution de $t\\,\\%$ répétée $n$ fois a pour coefficient global $\\left(1 + \\frac{t}{100}\\right)^n$ : $+10\\,\\%$ par an pendant $2$ ans donne $1{,}1^2 = 1{,}21$, soit $+21\\,\\%$."
      },
      {
        "title": "5. Évolution réciproque",
        "content": "L'évolution **réciproque** d'une évolution de coefficient $CM$ (celle qui ramène à la valeur initiale) a pour coefficient $\\frac{1}{CM}$.\n• Après une hausse de $25\\,\\%$ ($CM = 1{,}25$), il faut une baisse de coefficient $\\frac{1}{1{,}25} = 0{,}8$, soit $-20\\,\\%$.\n• Après une baisse de $50\\,\\%$ ($CM = 0{,}5$), il faut doubler : $\\frac{1}{0{,}5} = 2$, soit $+100\\,\\%$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer un taux global à partir de deux évolutions",
        "example": "Un loyer augmente de $20\\,\\%$ puis baisse de $5\\,\\%$. Quel est le taux d'évolution global ?",
        "steps": [
          "**Étape 1 (Coefficients)** : hausse de $20\\,\\%$ : $CM_1 = 1{,}2$ ; baisse de $5\\,\\%$ : $CM_2 = 0{,}95$.",
          "**Étape 2 (Produit)** : $CM = 1{,}2 \\times 0{,}95 = 1{,}14$.",
          "**Étape 3 (Retour au taux)** : $t = CM - 1 = 0{,}14$.",
          "**Conclusion** : le loyer a augmenté de $14\\,\\%$ au total (et non de $15\\,\\%$)."
        ]
      },
      {
        "title": "Méthode : Retrouver une valeur initiale",
        "example": "Après une hausse de $12\\,\\%$, un abonnement coûte $56$ €. Quel était son prix avant la hausse ?",
        "steps": [
          "**Étape 1 (Coefficient)** : une hausse de $12\\,\\%$ correspond à $CM = 1{,}12$, et $V_1 = V_0 \\times 1{,}12$.",
          "**Étape 2 (Division)** : $V_0 = \\frac{56}{1{,}12} = \\frac{5\\,600}{112} = 50$.",
          "**Conclusion** : l'abonnement coûtait $50$ €. Retirer $12\\,\\%$ de $56$ donnerait $49{,}28$ € : c'est faux, car les $12\\,\\%$ portent sur l'ancien prix."
        ]
      },
      {
        "title": "Méthode : Calculer un taux d'évolution entre deux valeurs",
        "example": "Le nombre d'adhérents d'un club passe de $80$ à $92$. Quel est le taux d'évolution ?",
        "steps": [
          "**Étape 1 (Variation absolue)** : $V_1 - V_0 = 92 - 80 = 12$.",
          "**Étape 2 (Rapport à la valeur de départ)** : $t = \\frac{12}{80} = 0{,}15$.",
          "**Conclusion** : le nombre d'adhérents a augmenté de $15\\,\\%$ (on divise par $80$, la valeur de départ, et non par $92$)."
        ]
      }
    ],
    "traps": [
      "⚠️ Les pourcentages d'évolutions successives ne s'additionnent pas : on multiplie les coefficients multiplicateurs.",
      "⚠️ Une baisse de $t\\,\\%$ ne se compense pas par une hausse de $t\\,\\%$ : l'évolution réciproque a pour coefficient $\\frac{1}{CM}$.",
      "⚠️ Le taux d'évolution se calcule toujours par rapport à la valeur **de départ** : $\\frac{V_1 - V_0}{V_0}$.",
      "⚠️ Pour retrouver une valeur initiale, on divise par le coefficient multiplicateur ; on ne retire pas le pourcentage à la valeur finale."
    ],
    "flashcards": [
      {
        "q": "Quel coefficient multiplicateur correspond à une baisse de $12\\,\\%$ ?",
        "a": "$CM = 1 - 0{,}12 = 0{,}88$."
      },
      {
        "q": "Comment calculer la proportion d'une proportion ?",
        "a": "On multiplie les proportions : $p_{A/E} = p_{A/B} \\times p_{B/E}$ lorsque $A \\subset B \\subset E$."
      },
      {
        "q": "Une hausse de $10\\,\\%$ suivie d'une baisse de $10\\,\\%$ : quelle évolution globale ?",
        "a": "$1{,}1 \\times 0{,}9 = 0{,}99$ : une baisse de $1\\,\\%$."
      },
      {
        "q": "Quel est le coefficient de l'évolution réciproque d'une hausse de $25\\,\\%$ ?",
        "a": "$\\frac{1}{1{,}25} = 0{,}8$ : une baisse de $20\\,\\%$."
      },
      {
        "q": "Combien vaut $15\\,\\%$ de $60$ ?",
        "a": "$10\\,\\%$ de $60$ vaut $6$ et $5\\,\\%$ vaut $3$, donc $15\\,\\%$ de $60$ vaut $9$."
      },
      {
        "q": "À quel taux d'évolution correspond un coefficient multiplicateur de $1{,}6$ ? de $0{,}75$ ?",
        "a": "$1{,}6 - 1 = 0{,}6$, soit $+60\\,\\%$ ; $0{,}75 - 1 = -0{,}25$, soit $-25\\,\\%$."
      },
      {
        "q": "Une grandeur passe de $50$ à $40$. Quel est le taux d'évolution ?",
        "a": "$\\frac{40 - 50}{50} = -0{,}2$, soit une baisse de $20\\,\\%$."
      },
      {
        "q": "Après une baisse de $20\\,\\%$, un article coûte $40$ €. Quel était son prix initial ?",
        "a": "$\\frac{40}{0{,}8} = 50$ €."
      },
      {
        "q": "Quel est le taux global de deux hausses successives de $20\\,\\%$ ?",
        "a": "$1{,}2^2 = 1{,}44$, soit $+44\\,\\%$ (et non $+40\\,\\%$)."
      },
      {
        "q": "Que signifie « doubler » en termes de taux d'évolution ?",
        "a": "Le coefficient multiplicateur vaut $2$ : c'est une hausse de $100\\,\\%$."
      }
    ]
  },
  "1TC2": {
    "title": "1TC2 : Information chiffrée : tableaux croisés, nuages de points et ajustement affine",
    "domain": "Probabilités et Statistiques",
    "objectives": [
      "Lire et compléter un tableau croisé d'effectifs ; calculer des fréquences marginales et conditionnelles en identifiant la population de référence.",
      "Construire un tableau croisé à partir de pourcentages.",
      "Représenter une série statistique à deux variables par un nuage de points et calculer les coordonnées du point moyen.",
      "Utiliser une droite d'ajustement affine fournie par un tableur pour interpoler ou extrapoler, et interpréter ses coefficients.",
      "Discuter la pertinence d'une prévision et confronter un modèle à des valeurs observées."
    ],
    "keyPoints": [
      {
        "title": "1. Tableau croisé et fréquences",
        "content": "Un **tableau croisé** donne les effectifs d'une population selon deux caractères. Les totaux de lignes et de colonnes sont les **effectifs marginaux** ; la case en bas à droite est l'effectif total.\n• **Fréquence marginale** : effectif marginal divisé par l'effectif total.\n• **Fréquence conditionnelle** de $B$ parmi $A$ : $f_A(B) = \\frac{\\text{effectif de } A \\text{ et } B}{\\text{effectif de } A}$. On ne divise **pas** par l'effectif total.\n• Les mots « parmi », « chez les », « parmi ceux qui » désignent la **population de référence**, c'est-à-dire le dénominateur."
      },
      {
        "title": "2. Construire un tableau à partir de pourcentages",
        "content": "Quand l'énoncé donne des pourcentages, on reconstitue les effectifs (au besoin sur un effectif fictif, par exemple $1\\,000$) :\n• on calcule les effectifs marginaux, puis les cases à l'aide des fréquences conditionnelles ($\\text{case} = f \\times \\text{effectif de la population de référence}$) ;\n• on complète par différences, en vérifiant que chaque ligne et chaque colonne a le bon total.\nLes fréquences $f_A(B)$ et $f_B(A)$ sont en général **différentes** : leurs dénominateurs ne sont pas les mêmes."
      },
      {
        "title": "3. Nuage de points et point moyen",
        "content": "Une série à deux variables $(x_i ; y_i)$ se représente par un **nuage de points** dans un repère.\nLe **point moyen** est $G(\\bar{x} ; \\bar{y})$, où $\\bar{x}$ et $\\bar{y}$ sont les moyennes des $x_i$ et des $y_i$.\n*Exemple* : pour les points $(1 ; 4)$, $(2 ; 6)$, $(3 ; 11)$, on a $\\bar{x} = \\frac{6}{3} = 2$ et $\\bar{y} = \\frac{21}{3} = 7$, donc $G(2 ; 7)$.\nPour une série chronologique, on remplace souvent l'année par son **rang** $x = 0, 1, 2, \\ldots$"
      },
      {
        "title": "4. Ajustement affine",
        "content": "Quand le nuage a une forme allongée, on l'ajuste par une droite $y = ax + b$ obtenue avec un tableur ou une calculatrice. Lorsque l'énoncé indique que cette droite passe par le point moyen $G(\\bar{x} ; \\bar{y})$, les coordonnées de $G$ vérifient son équation : $\\bar{y} = a\\bar{x} + b$.\n• $a$ (coefficient directeur) est la **variation de $y$** quand $x$ augmente de $1$ : pour une série annuelle, c'est une variation absolue par an, pas un pourcentage.\n• $b$ (ordonnée à l'origine) est la valeur du modèle pour $x = 0$."
      },
      {
        "title": "5. Interpolation, extrapolation et pertinence",
        "content": "• **Interpolation** : estimation pour une valeur de $x$ située dans la plage des données.\n• **Extrapolation** : prévision hors de cette plage ; elle suppose que la tendance se maintient et doit être interprétée avec prudence (une droite décroissante finit par donner des valeurs négatives).\n• Pour juger un modèle, on compare prévision et observation, par exemple avec l'écart relatif $\\frac{y_{\\text{modèle}} - y_{\\text{observé}}}{y_{\\text{observé}}}$.\n• Une corrélation entre deux variables ne prouve pas que l'une est la cause de l'autre."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer une fréquence conditionnelle dans un tableau croisé",
        "example": "Sur $200$ élèves, $120$ pratiquent un sport ; parmi eux, $45$ jouent d'un instrument. Quelle est la fréquence des musiciens parmi les sportifs ?",
        "steps": [
          "**Étape 1 (Population de référence)** : on se restreint aux sportifs, soit $120$ élèves.",
          "**Étape 2 (Effectif concerné)** : $45$ sportifs jouent d'un instrument.",
          "**Conclusion** : $f = \\frac{45}{120} = \\frac{3}{8} = 0{,}375$, soit $37{,}5\\,\\%$ des sportifs."
        ]
      },
      {
        "title": "Méthode : Reconstituer un tableau croisé à partir de pourcentages",
        "example": "Sur $500$ clients, $40\\,\\%$ ont moins de $30$ ans. $70\\,\\%$ des moins de $30$ ans paient sans contact, contre $45\\,\\%$ des autres. Quelle part des clients payant sans contact a moins de $30$ ans ?",
        "steps": [
          "**Étape 1 (Lignes)** : $0{,}4 \\times 500 = 200$ clients de moins de $30$ ans et $300$ autres.",
          "**Étape 2 (Cases)** : $0{,}7 \\times 200 = 140$ et $0{,}45 \\times 300 = 135$ clients paient sans contact, soit $275$ au total.",
          "**Conclusion** : $\\frac{140}{275} = \\frac{28}{55} \\approx 0{,}509$ : environ $50{,}9\\,\\%$ des clients payant sans contact ont moins de $30$ ans."
        ]
      },
      {
        "title": "Méthode : Utiliser une droite d'ajustement passant par le point moyen",
        "example": "Un tableur donne pour une série annuelle (rang $x = 0$ en 2020) une droite de coefficient directeur $2{,}5$ passant par $G(2 ; 45)$. Estimer la valeur en 2026.",
        "steps": [
          "**Étape 1 (Ordonnée à l'origine)** : $45 = 2{,}5 \\times 2 + b$, donc $b = 40$ et $y = 2{,}5x + 40$.",
          "**Étape 2 (Rang)** : 2026 correspond au rang $x = 6$.",
          "**Étape 3 (Calcul)** : $y = 2{,}5 \\times 6 + 40 = 55$.",
          "**Conclusion** : le modèle prévoit $55$ en 2026 ; c'est une extrapolation si les données s'arrêtent avant 2026."
        ]
      }
    ],
    "traps": [
      "⚠️ Bien identifier la population de référence : « parmi les sportifs » impose de diviser par l'effectif des sportifs.",
      "⚠️ Dans l'équation d'ajustement, on remplace $x$ par le **rang** de l'année, pas par l'année elle-même.",
      "⚠️ Le coefficient directeur est une variation absolue (en unités de $y$ par an), pas un pourcentage d'évolution.",
      "⚠️ Une extrapolation lointaine peut donner des résultats absurdes ; une corrélation ne prouve pas une causalité."
    ],
    "flashcards": [
      {
        "q": "Comment calcule-t-on la fréquence conditionnelle de $B$ parmi $A$ ?",
        "a": "$f_A(B) = \\frac{\\text{effectif de } A \\text{ et } B}{\\text{effectif de } A}$."
      },
      {
        "q": "Qu'est-ce qu'une fréquence marginale ?",
        "a": "Un effectif marginal (total d'une ligne ou d'une colonne) divisé par l'effectif total."
      },
      {
        "q": "Quelles sont les coordonnées du point moyen d'un nuage ?",
        "a": "$G(\\bar{x} ; \\bar{y})$ : la moyenne des abscisses et la moyenne des ordonnées."
      },
      {
        "q": "Quelle différence entre interpolation et extrapolation ?",
        "a": "L'interpolation estime à l'intérieur de la plage des données, l'extrapolation en dehors (plus risquée)."
      },
      {
        "q": "Une droite d'ajustement $y = ax + b$ passe par le point moyen $G(\\bar{x} ; \\bar{y})$. Comment trouver $b$ quand on connaît $a$ ?",
        "a": "$G$ est sur la droite, donc $\\bar{y} = a\\bar{x} + b$, d'où $b = \\bar{y} - a\\bar{x}$."
      },
      {
        "q": "Que représente $a$ dans un ajustement $y = ax + b$ d'une série annuelle ?",
        "a": "La variation de $y$ d'une année à la suivante selon le modèle (en unités de $y$)."
      },
      {
        "q": "Pour une série commençant en 2018 (rang $0$), quel rang correspond à 2025 ?",
        "a": "$x = 2025 - 2018 = 7$."
      },
      {
        "q": "$f_A(B)$ et $f_B(A)$ sont-elles égales ?",
        "a": "En général non : elles ont le même numérateur mais pas le même dénominateur."
      },
      {
        "q": "Comment calculer l'écart relatif entre une prévision et une observation ?",
        "a": "$\\frac{y_{\\text{modèle}} - y_{\\text{observé}}}{y_{\\text{observé}}}$, souvent exprimé en pourcentage."
      },
      {
        "q": "Le point moyen de $(0 ; 10)$, $(2 ; 14)$, $(4 ; 21)$ ?",
        "a": "$G\\left(2 ; 15\\right)$ car $\\frac{0 + 2 + 4}{3} = 2$ et $\\frac{10 + 14 + 21}{3} = 15$."
      }
    ]
  },
  "1TC3": {
    "title": "1TC3 : Probabilités conditionnelles, indépendance et répétition d'épreuves",
    "domain": "Probabilités et Statistiques",
    "objectives": [
      "Distinguer $P(A \\cap B)$, $P_A(B)$ et $P_B(A)$ ; calculer une probabilité conditionnelle à partir d'un tableau croisé ou d'un arbre pondéré.",
      "Construire et exploiter un arbre pondéré ; appliquer la formule des probabilités totales et « retourner » un arbre.",
      "Reconnaître deux événements indépendants.",
      "Modéliser la répétition de deux à quatre épreuves identiques et indépendantes de Bernoulli par un arbre et calculer des probabilités.",
      "Interpréter un test de dépistage : faux positifs, faux négatifs, sensibilité, spécificité."
    ],
    "keyPoints": [
      {
        "title": "1. Probabilité conditionnelle",
        "content": "Si $P(A) \\neq 0$, la probabilité de $B$ sachant $A$ est $P_A(B) = \\frac{P(A \\cap B)}{P(A)}$. On en déduit $P(A \\cap B) = P(A) \\times P_A(B)$.\n• Dans un tableau croisé d'effectifs (tirage au hasard, situation d'équiprobabilité), $P_A(B) = \\frac{\\text{effectif de } A \\cap B}{\\text{effectif de } A}$ : c'est une fréquence conditionnelle.\n• $P_A(B)$ et $P_B(A)$ sont en général **différentes** ; $P_A(\\overline{B}) = 1 - P_A(B)$."
      },
      {
        "title": "2. Arbre pondéré et probabilités totales",
        "content": "• Sur un arbre pondéré, la somme des probabilités des branches issues d'un même nœud vaut $1$ ; les branches du second niveau portent des probabilités conditionnelles.\n• La probabilité d'un chemin est le **produit** des probabilités de ses branches : $P(A \\cap B) = P(A) \\times P_A(B)$.\n• **Probabilités totales** : $P(B) = P(A \\cap B) + P(\\overline{A} \\cap B) = P(A) P_A(B) + P(\\overline{A}) P_{\\overline{A}}(B)$.\n• **Retourner l'arbre** : $P_B(A) = \\frac{P(A \\cap B)}{P(B)}$, où $P(B)$ s'obtient par les probabilités totales."
      },
      {
        "title": "3. Indépendance",
        "content": "$A$ et $B$ sont **indépendants** lorsque $P(A \\cap B) = P(A) \\times P(B)$, autrement dit (si $P(A) \\neq 0$) $P_A(B) = P(B)$ : savoir que $A$ est réalisé ne change pas la probabilité de $B$.\n• *Exemple* : $P(A) = 0{,}5$, $P(B) = 0{,}4$ et $P(A \\cap B) = 0{,}2 = 0{,}5 \\times 0{,}4$ : $A$ et $B$ sont indépendants.\n• Ne pas confondre avec des événements **incompatibles** ($A \\cap B = \\varnothing$) : deux événements incompatibles de probabilités non nulles ne sont jamais indépendants."
      },
      {
        "title": "4. Répétition d'épreuves de Bernoulli identiques et indépendantes",
        "content": "Une **épreuve de Bernoulli** a deux issues : succès $S$ (probabilité $p$) et échec $\\overline{S}$ (probabilité $1 - p$). On la répète $n$ fois ($n \\le 4$) de façon identique et indépendante.\n• La probabilité d'une liste de résultats est le **produit** des probabilités : $P(S\\,S\\,\\overline{S}) = p \\times p \\times (1 - p)$.\n• Pour « exactement $k$ succès », on compte les chemins qui conviennent (ils ont tous la même probabilité) : pour $2$ succès sur $3$ épreuves, $SS\\overline{S}$, $S\\overline{S}S$, $\\overline{S}SS$, soit $3p^2(1 - p)$.\n• « Au moins un succès » : $1 - P(\\text{aucun succès}) = 1 - (1 - p)^n$."
      },
      {
        "title": "5. Tests de dépistage",
        "content": "Pour un test, on note $M$ « être malade » et $T$ « le test est positif ».\n• **Sensibilité** : $P_M(T)$ ; **spécificité** : $P_{\\overline{M}}(\\overline{T})$.\n• **Faux positif** : test positif chez une personne non malade ; **faux négatif** : test négatif chez une personne malade.\n• La probabilité d'être malade sachant que le test est positif, $P_T(M)$, se calcule en retournant l'arbre ; lorsque la maladie est rare, elle peut être faible même pour un très bon test. Raisonner sur une population fictive de $10\\,000$ personnes aide à le voir."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Utiliser la formule des probabilités totales",
        "example": "$30\\,\\%$ des clients paient par carte ; parmi eux $10\\,\\%$ ont un ticket de réduction, contre $20\\,\\%$ chez les autres. Quelle est la probabilité qu'un client pris au hasard ait un ticket ?",
        "steps": [
          "**Étape 1 (Arbre)** : $P(C) = 0{,}3$, $P_C(R) = 0{,}1$, $P(\\overline{C}) = 0{,}7$, $P_{\\overline{C}}(R) = 0{,}2$.",
          "**Étape 2 (Chemins)** : $P(C \\cap R) = 0{,}3 \\times 0{,}1 = 0{,}03$ et $P(\\overline{C} \\cap R) = 0{,}7 \\times 0{,}2 = 0{,}14$.",
          "**Conclusion** : $P(R) = 0{,}03 + 0{,}14 = 0{,}17$."
        ]
      },
      {
        "title": "Méthode : Retourner un arbre pondéré",
        "example": "Avec les données précédentes, un client a un ticket de réduction. Quelle est la probabilité qu'il ait payé par carte ?",
        "steps": [
          "**Étape 1 (Identifier la probabilité)** : on cherche $P_R(C)$, la condition est « avoir un ticket ».",
          "**Étape 2 (Formule)** : $P_R(C) = \\frac{P(C \\cap R)}{P(R)} = \\frac{0{,}03}{0{,}17}$.",
          "**Conclusion** : $P_R(C) = \\frac{3}{17} \\approx 0{,}18$, bien différent de $P_C(R) = 0{,}1$."
        ]
      },
      {
        "title": "Méthode : Compter les chemins pour « exactement k succès »",
        "example": "Un archer atteint la cible avec une probabilité de $0{,}8$ à chaque tir ; les tirs sont indépendants. Quelle est la probabilité qu'il atteigne la cible exactement deux fois sur trois tirs ?",
        "steps": [
          "**Étape 1 (Chemins)** : les chemins favorables sont $SS\\overline{S}$, $S\\overline{S}S$ et $\\overline{S}SS$, soit $3$ chemins.",
          "**Étape 2 (Probabilité d'un chemin)** : $0{,}8 \\times 0{,}8 \\times 0{,}2 = 0{,}128$.",
          "**Conclusion** : $P = 3 \\times 0{,}128 = 0{,}384$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas confondre $P_A(B)$ (probabilité de $B$ sachant $A$) et $P(A \\cap B)$ (probabilité que $A$ et $B$ soient réalisés).",
      "⚠️ $P_A(B)$ et $P_B(A)$ sont en général différentes : en dépistage, $P_M(T)$ (sensibilité) n'est pas $P_T(M)$.",
      "⚠️ Des événements incompatibles (de probabilités non nulles) ne sont jamais indépendants.",
      "⚠️ Pour « exactement $k$ succès », il faut multiplier la probabilité d'un chemin par le nombre de chemins favorables."
    ],
    "flashcards": [
      {
        "q": "Quelle est la formule de $P_A(B)$ ?",
        "a": "$P_A(B) = \\frac{P(A \\cap B)}{P(A)}$, avec $P(A) \\neq 0$."
      },
      {
        "q": "Comment obtient-on la probabilité d'un chemin dans un arbre pondéré ?",
        "a": "En multipliant les probabilités des branches du chemin."
      },
      {
        "q": "Quand dit-on que $A$ et $B$ sont indépendants ?",
        "a": "Lorsque $P(A \\cap B) = P(A) \\times P(B)$, c'est-à-dire $P_A(B) = P(B)$ si $P(A) \\neq 0$."
      },
      {
        "q": "Probabilité d'obtenir deux fois $6$ en lançant deux fois un dé équilibré ?",
        "a": "$\\frac{1}{6} \\times \\frac{1}{6} = \\frac{1}{36}$."
      },
      {
        "q": "Énoncer la formule des probabilités totales avec $A$ et $\\overline{A}$.",
        "a": "$P(B) = P(A) P_A(B) + P(\\overline{A}) P_{\\overline{A}}(B)$."
      },
      {
        "q": "Si $P_A(B) = 0{,}3$, que vaut $P_A(\\overline{B})$ ?",
        "a": "$1 - 0{,}3 = 0{,}7$."
      },
      {
        "q": "Probabilité d'au moins un succès en $3$ épreuves indépendantes de probabilité de succès $0{,}5$ ?",
        "a": "$1 - 0{,}5^3 = 1 - 0{,}125 = 0{,}875$."
      },
      {
        "q": "Qu'est-ce que la sensibilité d'un test de dépistage ?",
        "a": "La probabilité qu'un malade ait un test positif : $P_M(T)$."
      },
      {
        "q": "Qu'est-ce qu'un faux positif ?",
        "a": "Un test positif chez une personne qui n'est pas malade."
      },
      {
        "q": "Combien de chemins comportent exactement $2$ succès sur $4$ épreuves ?",
        "a": "$6$ : positions des succès 1-2, 1-3, 1-4, 2-3, 2-4, 3-4."
      }
    ]
  },
  "1TC4": {
    "title": "1TC4 : Croissance linéaire : suites arithmétiques et fonctions affines",
    "domain": "Analyse et Fonctions",
    "objectives": [
      "Reconnaître une situation de croissance linéaire : la variation absolue d'une étape à la suivante est constante.",
      "Calculer un terme d'une suite arithmétique avec $u(n) = u(0) + nr$ ou $u(n) = u(1) + (n - 1)r$.",
      "Déterminer le sens de variation d'une suite arithmétique ou d'une fonction affine selon le signe de $r$ ou de $a$.",
      "Déterminer l'expression d'une fonction affine à partir de deux valeurs et interpréter son coefficient directeur.",
      "Déterminer un seuil par le calcul ou à l'aide d'un programme Python."
    ],
    "keyPoints": [
      {
        "title": "1. Croissance linéaire",
        "content": "Une quantité a une **croissance linéaire** lorsqu'elle augmente (ou diminue) **de la même valeur** à chaque étape : la variation absolue est constante.\n• *Exemple* : un abonnement passe à $40$ €, puis $55$ €, puis $70$ € : on ajoute $15$ € à chaque fois.\n• Contre-exemple : une hausse de $5\\,\\%$ par an ajoute chaque année une valeur différente ; ce n'est pas une croissance linéaire (voir le chapitre 1TC6)."
      },
      {
        "title": "2. Suites arithmétiques",
        "content": "On note $u(n)$ la valeur obtenue à l'étape $n$. La suite $u$ est **arithmétique** de raison $r$ lorsque, pour tout entier naturel $n$, $u(n+1) = u(n) + r$.\n• Terme général : $u(n) = u(0) + nr$ ; si la suite commence à $u(1)$ : $u(n) = u(1) + (n - 1)r$.\n• Entre deux termes quelconques : $u(q) = u(p) + (q - p)r$, donc $r = \\frac{u(q) - u(p)}{q - p}$."
      },
      {
        "title": "3. Sens de variation et représentation",
        "content": "• Si $r > 0$, la suite est **croissante** ; si $r < 0$, elle est **décroissante** ; si $r = 0$, elle est constante.\n• Les points de coordonnées $\\left(n ; u(n)\\right)$ sont **alignés** : ils sont sur la droite d'équation $y = rx + u(0)$."
      },
      {
        "title": "4. Fonctions affines",
        "content": "Une fonction affine s'écrit $f(x) = ax + b$ ; sa courbe est une droite de **coefficient directeur** $a$ et d'**ordonnée à l'origine** $b = f(0)$.\n• Pour deux nombres $x_1 \\neq x_2$ : $a = \\frac{f(x_2) - f(x_1)}{x_2 - x_1}$.\n• Quand $x$ augmente de $1$, $f(x)$ varie de $a$ : c'est le modèle continu de la croissance linéaire.\n• $f$ est croissante si $a > 0$, décroissante si $a < 0$, constante si $a = 0$."
      },
      {
        "title": "5. Seuil",
        "content": "Pour savoir à partir de quel rang $u(n)$ dépasse une valeur $S$, on résout $u(0) + nr > S$ et on prend le **plus petit entier** qui convient. *Exemple* : $200 + 15n > 500 \\iff 15n > 300 \\iff n > 20$, donc $n = 21$.\nOn peut aussi faire calculer ce rang par une boucle :\n```python\nu = 200\nn = 0\nwhile u <= 500:\n    u = u + 15\n    n = n + 1\nprint(n)   # affiche 21\n```"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer un terme d'une suite arithmétique",
        "example": "Une citerne contient $35$ hL ; on en prélève $4$ hL chaque semaine. On note $u(n)$ le volume après $n$ semaines. Calculer $u(8)$.",
        "steps": [
          "**Étape 1 (Reconnaître la suite)** : on retire la même quantité chaque semaine, donc $u$ est arithmétique de premier terme $u(0) = 35$ et de raison $r = -4$.",
          "**Étape 2 (Terme général)** : $u(n) = 35 - 4n$.",
          "**Étape 3 (Calcul)** : $u(8) = 35 - 4 \\times 8 = 35 - 32 = 3$.",
          "**Conclusion** : après $8$ semaines, il reste $3$ hL dans la citerne."
        ]
      },
      {
        "title": "Méthode : Déterminer une fonction affine à partir de deux valeurs",
        "example": "Un abonnement coûte $f(x) = ax + b$ euros pour $x$ séances, avec $f(4) = 38$ et $f(10) = 68$. Déterminer $a$ et $b$.",
        "steps": [
          "**Étape 1 (Coefficient directeur)** : $a = \\frac{68 - 38}{10 - 4} = \\frac{30}{6} = 5$.",
          "**Étape 2 (Ordonnée à l'origine)** : $f(4) = 5 \\times 4 + b = 38$, donc $b = 18$.",
          "**Étape 3 (Vérification)** : $f(10) = 50 + 18 = 68$.",
          "**Conclusion** : $f(x) = 5x + 18$ : $18$ € de frais fixes et $5$ € par séance."
        ]
      },
      {
        "title": "Méthode : Déterminer un seuil",
        "example": "Une médiathèque compte $1\\,200$ inscrits en 2026 et en gagne $45$ par an. En quelle année dépassera-t-elle $2\\,000$ inscrits ?",
        "steps": [
          "**Étape 1 (Modéliser)** : avec $u(0)$ pour 2026, $u(n) = 1\\,200 + 45n$.",
          "**Étape 2 (Inéquation)** : $1\\,200 + 45n > 2\\,000 \\iff 45n > 800$.",
          "**Étape 3 (Plus petit entier)** : $45 \\times 17 = 765 < 800$ et $45 \\times 18 = 810 > 800$, donc $n = 18$.",
          "**Conclusion** : le seuil est dépassé pour $n = 18$, c'est-à-dire en $2026 + 18 = 2044$."
        ]
      }
    ],
    "traps": [
      "⚠️ $u(n) = u(0) + nr$ si la suite commence à $u(0)$, mais $u(n) = u(1) + (n - 1)r$ si elle commence à $u(1)$.",
      "⚠️ Dans $a = \\frac{f(x_2) - f(x_1)}{x_2 - x_1}$, garder le même ordre au numérateur et au dénominateur.",
      "⚠️ Pour un seuil, l'inéquation donne par exemple $n > 17{,}7$ : le rang cherché est $18$, et il faut encore le traduire en année si la question le demande.",
      "⚠️ Une augmentation d'un même **pourcentage** chaque année n'est pas une croissance linéaire : la variation absolue change d'une année à l'autre."
    ],
    "flashcards": [
      {
        "q": "Qu'est-ce qu'une croissance linéaire ?",
        "a": "Une évolution où l'on ajoute (ou retranche) la même valeur à chaque étape."
      },
      {
        "q": "Relation de récurrence d'une suite arithmétique de raison $r$ ?",
        "a": "$u(n+1) = u(n) + r$ pour tout entier naturel $n$."
      },
      {
        "q": "Terme général d'une suite arithmétique de premier terme $u(0)$ et de raison $r$ ?",
        "a": "$u(n) = u(0) + nr$."
      },
      {
        "q": "Terme général si la suite commence à $u(1)$ ?",
        "a": "$u(n) = u(1) + (n - 1)r$."
      },
      {
        "q": "Comment obtenir la raison à partir de $u(p)$ et $u(q)$ ?",
        "a": "$r = \\frac{u(q) - u(p)}{q - p}$."
      },
      {
        "q": "Sens de variation d'une suite arithmétique de raison $r < 0$ ?",
        "a": "Elle est décroissante."
      },
      {
        "q": "Comment reconnaît-on graphiquement une suite arithmétique ?",
        "a": "Les points $\\left(n ; u(n)\\right)$ sont alignés."
      },
      {
        "q": "Coefficient directeur d'une fonction affine connaissant deux valeurs ?",
        "a": "$a = \\frac{f(x_2) - f(x_1)}{x_2 - x_1}$."
      },
      {
        "q": "Que représente $b$ dans $f(x) = ax + b$ ?",
        "a": "L'ordonnée à l'origine : $f(0) = b$."
      },
      {
        "q": "Si $15n > 300$, à partir de quel entier $n$ le seuil est-il dépassé ?",
        "a": "$n > 20$, donc à partir de $n = 21$."
      }
    ]
  },
  "1TC5": {
    "title": "1TC5 : Modèles quadratiques : paraboles et forme factorisée",
    "domain": "Analyse et Fonctions",
    "objectives": [
      "Connaître l'allure de la courbe de $x \\mapsto ax^2$ et de $x \\mapsto ax^2 + c$ selon le signe de $a$.",
      "Lire les racines d'une fonction donnée sous forme factorisée $a(x - x_1)(x - x_2)$.",
      "Déterminer l'axe de symétrie et le sommet d'une parabole à l'aide de deux points de même ordonnée.",
      "Étudier le signe de $a(x - x_1)(x - x_2)$ et résoudre une inéquation produit.",
      "Utiliser un modèle quadratique pour résoudre un problème (trajectoire, aire, bénéfice)."
    ],
    "keyPoints": [
      {
        "title": "1. Les fonctions $x \\mapsto ax^2$",
        "content": "Pour $a \\neq 0$, la courbe de $x \\mapsto ax^2$ est une **parabole** de sommet l'origine, symétrique par rapport à l'axe des ordonnées.\n• Si $a > 0$, elle est tournée vers le haut : la fonction est décroissante sur $\\left]-\\infty ; 0\\right]$, croissante sur $\\left[0 ; +\\infty\\right[$, de minimum $0$.\n• Si $a < 0$, elle est tournée vers le bas : maximum $0$ atteint en $0$.\n• Plus $|a|$ est grand, plus la parabole est « resserrée »."
      },
      {
        "title": "2. Les fonctions $x \\mapsto ax^2 + c$",
        "content": "La courbe de $x \\mapsto ax^2 + c$ s'obtient en décalant celle de $x \\mapsto ax^2$ verticalement de $c$.\n• Son sommet est le point $\\left(0 ; c\\right)$ et son axe de symétrie est l'axe des ordonnées.\n• *Exemple* : $f(x) = -2x^2 + 8$ a pour maximum $8$, atteint en $0$."
      },
      {
        "title": "3. Forme factorisée et racines",
        "content": "Une fonction $f(x) = a(x - x_1)(x - x_2)$ avec $a \\neq 0$ s'annule exactement en $x_1$ et $x_2$ (un produit est nul si et seulement si l'un de ses facteurs est nul).\n• $x_1$ et $x_2$ sont les **racines** de $f$ : la parabole coupe l'axe des abscisses aux points d'abscisses $x_1$ et $x_2$.\n• Attention au signe : le facteur $(x + 3)$ s'écrit $\\left(x - (-3)\\right)$, la racine correspondante est $-3$."
      },
      {
        "title": "4. Axe de symétrie et sommet",
        "content": "La parabole est symétrique par rapport à la droite verticale passant par le milieu de deux points de même ordonnée.\n• Si $f(p) = f(q)$ avec $p \\neq q$, l'axe de symétrie est la droite d'équation $x = \\frac{p + q}{2}$.\n• En particulier, pour $f(x) = a(x - x_1)(x - x_2)$ : l'abscisse du sommet est $\\alpha = \\frac{x_1 + x_2}{2}$ et son ordonnée est $f(\\alpha)$.\n• Si $a > 0$, $f(\\alpha)$ est le **minimum** de $f$ ; si $a < 0$, c'est son **maximum**."
      },
      {
        "title": "5. Signe de $a(x - x_1)(x - x_2)$",
        "content": "Avec $x_1 < x_2$ :\n• à l'**extérieur** des racines (pour $x < x_1$ ou $x > x_2$), $f(x)$ est du **signe de $a$** ;\n• **entre** les racines, $f(x)$ est du signe **contraire** de $a$ ;\n• $f(x_1) = f(x_2) = 0$.\nOn le justifie par un tableau de signes des deux facteurs."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Déterminer le sommet d'une parabole donnée sous forme factorisée",
        "example": "Déterminer le sommet de la parabole représentant $f(x) = 2(x + 1)(x - 5)$.",
        "steps": [
          "**Étape 1 (Racines)** : $x + 1 = 0 \\iff x = -1$ et $x - 5 = 0 \\iff x = 5$.",
          "**Étape 2 (Abscisse du sommet)** : $\\alpha = \\frac{-1 + 5}{2} = 2$ ; l'axe de symétrie a pour équation $x = 2$.",
          "**Étape 3 (Ordonnée)** : $f(2) = 2 \\times 3 \\times (-3) = -18$.",
          "**Conclusion** : le sommet est $\\left(2 ; -18\\right)$ ; comme $a = 2 > 0$, $-18$ est le minimum de $f$."
        ]
      },
      {
        "title": "Méthode : Résoudre une inéquation produit",
        "example": "Résoudre dans $\\mathbb{R}$ l'inéquation $(x + 3)(x - 2) \\leqslant 0$.",
        "steps": [
          "**Étape 1 (Racines)** : les facteurs s'annulent en $-3$ et en $2$.",
          "**Étape 2 (Tableau de signes)** : $x + 3$ est positif pour $x > -3$ et $x - 2$ pour $x > 2$ ; le produit est négatif entre $-3$ et $2$, positif à l'extérieur.",
          "**Étape 3 (Signe de $a$)** : on retrouve la règle : $a = 1 > 0$, le produit est du signe contraire de $a$ entre les racines.",
          "**Conclusion** : $S = \\left[-3 ; 2\\right]$ (crochets fermés car l'inégalité est large)."
        ]
      },
      {
        "title": "Méthode : Trouver le coefficient $a$ d'une parabole",
        "example": "Une arche de pont part du sol en $x = 0$ et y revient en $x = 40$ (en mètres) ; sa hauteur maximale est $10$ m. Déterminer $f(x) = a\\,x(x - 40)$.",
        "steps": [
          "**Étape 1 (Sommet)** : par symétrie, le sommet a pour abscisse $\\frac{0 + 40}{2} = 20$.",
          "**Étape 2 (Équation)** : $f(20) = a \\times 20 \\times (-20) = -400a$ doit valoir $10$.",
          "**Étape 3 (Résolution)** : $a = \\frac{10}{-400} = -\\frac{1}{40}$ ; on vérifie que $a < 0$ (parabole tournée vers le bas).",
          "**Conclusion** : $f(x) = -\\frac{1}{40}\\,x(x - 40)$."
        ]
      }
    ],
    "traps": [
      "⚠️ $-x^2$ n'est pas $(-x)^2$ : pour $f(x) = -2x^2$, $f(-3) = -2 \\times 9 = -18$ et non $18$.",
      "⚠️ La racine associée au facteur $(x + 4)$ est $-4$, pas $4$.",
      "⚠️ L'abscisse du sommet est la moyenne des racines ; son ordonnée se calcule avec $f(\\alpha)$.",
      "⚠️ Entre les racines, $a(x - x_1)(x - x_2)$ est du signe de $-a$ : il n'est négatif que si $a > 0$."
    ],
    "flashcards": [
      {
        "q": "Allure de la courbe de $x \\mapsto ax^2$ si $a < 0$ ?",
        "a": "Une parabole tournée vers le bas, de sommet l'origine."
      },
      {
        "q": "Sommet de la parabole de $x \\mapsto ax^2 + c$ ?",
        "a": "Le point $\\left(0 ; c\\right)$."
      },
      {
        "q": "Racines de $f(x) = a(x - x_1)(x - x_2)$ ?",
        "a": "$x_1$ et $x_2$."
      },
      {
        "q": "Racine associée au facteur $(x + 6)$ ?",
        "a": "$-6$."
      },
      {
        "q": "Abscisse du sommet de la parabole de $a(x - x_1)(x - x_2)$ ?",
        "a": "$\\alpha = \\frac{x_1 + x_2}{2}$."
      },
      {
        "q": "Si $f(p) = f(q)$, quel est l'axe de symétrie de la parabole ?",
        "a": "La droite d'équation $x = \\frac{p + q}{2}$."
      },
      {
        "q": "Quand $f(\\alpha)$ est-il un maximum ?",
        "a": "Quand $a < 0$ (parabole tournée vers le bas)."
      },
      {
        "q": "Signe de $a(x - x_1)(x - x_2)$ à l'extérieur des racines ?",
        "a": "Le signe de $a$."
      },
      {
        "q": "Signe de $a(x - x_1)(x - x_2)$ entre les racines ?",
        "a": "Le signe contraire de $a$."
      },
      {
        "q": "Ordonnée à l'origine de $f(x) = a(x - x_1)(x - x_2)$ ?",
        "a": "$f(0) = a\\,x_1 x_2$."
      }
    ]
  },
  "1TC6": {
    "title": "1TC6 : Croissance exponentielle : suites géométriques et taux moyen",
    "domain": "Analyse et Fonctions",
    "objectives": [
      "Reconnaître une situation de croissance exponentielle : la variation relative (le taux) d'une étape à la suivante est constante.",
      "Passer d'un taux d'évolution à un coefficient multiplicateur et calculer un terme d'une suite géométrique : $u(n) = u(0) \\times q^n$.",
      "Connaître l'allure et le sens de variation de $x \\mapsto a^x$ ($a > 0$) et utiliser les propriétés algébriques des puissances.",
      "Calculer un taux d'évolution moyen à l'aide de l'exposant $\\frac{1}{n}$.",
      "Déterminer un seuil à l'aide d'un tableau de valeurs ou d'un programme Python."
    ],
    "keyPoints": [
      {
        "title": "1. Croissance exponentielle",
        "content": "Une quantité a une **croissance exponentielle** lorsqu'elle est **multipliée par le même nombre** à chaque étape : la variation relative est constante.\n• Augmenter de $t\\,\\%$ revient à multiplier par $1 + \\frac{t}{100}$ ; diminuer de $t\\,\\%$ revient à multiplier par $1 - \\frac{t}{100}$.\n• *Exemple* : $+4\\,\\%$ par an correspond au coefficient $1{,}04$ ; $-15\\,\\%$ au coefficient $0{,}85$."
      },
      {
        "title": "2. Suites géométriques",
        "content": "Une suite $u$ à termes strictement positifs est **géométrique** de raison $q > 0$ lorsque, pour tout entier naturel $n$, $u(n+1) = q \\times u(n)$.\n• Terme général : $u(n) = u(0) \\times q^n$ ; si la suite commence à $u(1)$ : $u(n) = u(1) \\times q^{n-1}$.\n• Si $q > 1$, la suite est **croissante** ; si $0 < q < 1$, elle est **décroissante** ; si $q = 1$, elle est constante."
      },
      {
        "title": "3. Fonctions exponentielles $x \\mapsto a^x$",
        "content": "Pour $a > 0$, la fonction $x \\mapsto a^x$, définie sur $\\left[0 ; +\\infty\\right[$, prolonge la suite $n \\mapsto a^n$ à tous les nombres réels positifs.\n• Pour tout réel $x \\geqslant 0$, $a^x > 0$, et $a^0 = 1$ : la courbe passe par le point $\\left(0 ; 1\\right)$.\n• Si $a > 1$, la fonction est croissante ; si $0 < a < 1$, elle est décroissante ; si $a = 1$, elle est constante.\n• La fonction $x \\mapsto k \\times a^x$ (avec $k > 0$) a le même sens de variation que $x \\mapsto a^x$."
      },
      {
        "title": "4. Propriétés des puissances (admises)",
        "content": "Pour $a > 0$, $b > 0$ et tous réels positifs $x$, $y$ :\n• $a^x \\times a^y = a^{x+y}$ ; si $x \\geqslant y$, $\\frac{a^x}{a^y} = a^{x-y}$ ; $\\left(a^x\\right)^y = a^{xy}$ ; $(ab)^x = a^x b^x$.\n• Pour un entier $n \\geqslant 1$, $a^{\\frac{1}{n}}$ est l'unique nombre positif dont la puissance $n$-ième vaut $a$ : $\\left(a^{\\frac{1}{n}}\\right)^n = a$.\n• *Exemples* : $8^{\\frac{1}{3}} = 2$ car $2^3 = 8$ ; $a^{\\frac{1}{2}} = \\sqrt{a}$."
      },
      {
        "title": "5. Taux d'évolution moyen",
        "content": "Si une quantité est multipliée par un coefficient global $C$ en $n$ périodes, le **taux moyen** $t_m$ par période vérifie $(1 + t_m)^n = C$, donc\n$1 + t_m = C^{\\frac{1}{n}}$.\n• *Exemple* : une hausse de $21\\,\\%$ en $2$ ans donne $C = 1{,}21$ et $1{,}21^{\\frac{1}{2}} = 1{,}1$ : le taux annuel moyen est $10\\,\\%$, et non $10{,}5\\,\\%$."
      },
      {
        "title": "6. Seuil",
        "content": "Pour déterminer le premier rang où $u(n)$ dépasse un seuil, on calcule les termes successifs (tableau de valeurs) ou on utilise une boucle :\n```python\nu = 500\nn = 0\nwhile u <= 10000:\n    u = u * 2\n    n = n + 1\nprint(n)   # affiche 5 car 500 × 2**4 = 8000 et 500 × 2**5 = 16000\n```"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer un terme d'une suite géométrique",
        "example": "Un village compte $5\\,000$ habitants en 2026 et sa population augmente de $4\\,\\%$ par an. Estimer la population en 2028.",
        "steps": [
          "**Étape 1 (Coefficient multiplicateur)** : $+4\\,\\%$ correspond à $q = 1 + \\frac{4}{100} = 1{,}04$.",
          "**Étape 2 (Modèle)** : avec $u(0)$ pour 2026, $u(n) = 5\\,000 \\times 1{,}04^n$.",
          "**Étape 3 (Calcul)** : 2028 correspond à $n = 2$ ; $1{,}04^2 = 1{,}081\\,6$ et $u(2) = 5\\,000 \\times 1{,}081\\,6 = 5\\,408$.",
          "**Conclusion** : le modèle prévoit $5\\,408$ habitants en 2028."
        ]
      },
      {
        "title": "Méthode : Calculer un taux d'évolution moyen",
        "example": "Le prix d'un service a augmenté de $33{,}1\\,\\%$ en $3$ ans. Quel est le taux d'évolution annuel moyen ?",
        "steps": [
          "**Étape 1 (Coefficient global)** : $C = 1 + \\frac{33{,}1}{100} = 1{,}331$.",
          "**Étape 2 (Équation)** : le taux moyen $t_m$ vérifie $(1 + t_m)^3 = 1{,}331$, donc $1 + t_m = 1{,}331^{\\frac{1}{3}}$.",
          "**Étape 3 (Calcul)** : $1{,}1^3 = 1{,}21 \\times 1{,}1 = 1{,}331$, donc $1{,}331^{\\frac{1}{3}} = 1{,}1$.",
          "**Conclusion** : $t_m = 0{,}1$, soit une hausse moyenne de $10\\,\\%$ par an (et non $\\frac{33{,}1}{3} \\approx 11\\,\\%$)."
        ]
      },
      {
        "title": "Méthode : Simplifier avec les propriétés des puissances",
        "example": "Calculer sans calculatrice $A = 2^{1{,}5} \\times 2^{0{,}5}$ et $B = \\frac{9^{2{,}5}}{9^{2}}$.",
        "steps": [
          "**Étape 1 (Produit)** : $A = 2^{1{,}5 + 0{,}5} = 2^2 = 4$.",
          "**Étape 2 (Quotient)** : $B = 9^{2{,}5 - 2} = 9^{0{,}5} = 9^{\\frac{1}{2}}$.",
          "**Étape 3 (Exposant $\\frac{1}{2}$)** : $9^{\\frac{1}{2}}$ est le nombre positif dont le carré vaut $9$, donc $B = 3$.",
          "**Conclusion** : $A = 4$ et $B = 3$."
        ]
      }
    ],
    "traps": [
      "⚠️ Une hausse de $5\\,\\%$ par an pendant $3$ ans n'est pas une hausse de $15\\,\\%$ : le coefficient global est $1{,}05^3 = 1{,}157\\,625$, soit environ $+15{,}8\\,\\%$.",
      "⚠️ Le taux moyen n'est pas la moyenne des taux : $+10\\,\\%$ puis $-10\\,\\%$ donne le coefficient $1{,}1 \\times 0{,}9 = 0{,}99$, soit une baisse globale de $1\\,\\%$.",
      "⚠️ Une baisse de $20\\,\\%$ correspond au coefficient multiplicateur $0{,}8$, pas à $-0{,}2$ ni à $1{,}2$.",
      "⚠️ $\\left(a^x\\right)^y = a^{xy}$ et non $a^{x+y}$ ; de même $a^x \\times a^y = a^{x+y}$ et non $a^{xy}$."
    ],
    "flashcards": [
      {
        "q": "Coefficient multiplicateur associé à une hausse de $t\\,\\%$ ?",
        "a": "$1 + \\frac{t}{100}$."
      },
      {
        "q": "Coefficient multiplicateur associé à une baisse de $12\\,\\%$ ?",
        "a": "$0{,}88$."
      },
      {
        "q": "Relation de récurrence d'une suite géométrique de raison $q$ ?",
        "a": "$u(n+1) = q \\times u(n)$."
      },
      {
        "q": "Terme général d'une suite géométrique de premier terme $u(0)$ ?",
        "a": "$u(n) = u(0) \\times q^n$."
      },
      {
        "q": "Sens de variation d'une suite géométrique à termes positifs de raison $0 < q < 1$ ?",
        "a": "Elle est décroissante."
      },
      {
        "q": "Par quel point passe toujours la courbe de $x \\mapsto a^x$ ?",
        "a": "Le point $\\left(0 ; 1\\right)$, car $a^0 = 1$."
      },
      {
        "q": "Simplifier $a^x \\times a^y$ et $\\left(a^x\\right)^y$.",
        "a": "$a^{x+y}$ et $a^{xy}$."
      },
      {
        "q": "Que vaut $a^{\\frac{1}{n}}$ ?",
        "a": "Le nombre positif dont la puissance $n$-ième vaut $a$."
      },
      {
        "q": "Taux moyen sur $n$ périodes pour un coefficient global $C$ ?",
        "a": "$t_m = C^{\\frac{1}{n}} - 1$."
      },
      {
        "q": "Une quantité double toutes les heures : quel est son coefficient au bout de $3$ heures ?",
        "a": "$2^3 = 8$."
      }
    ]
  }
};

window.MATHS_EXERCISES_1TC = {
  "1TC1": [
    {
      "id": "1TC1-1",
      "tier": 1,
      "type": "mcq",
      "title": "Proportion d'une proportion",
      "skill": "Calculer la proportion d'une proportion",
      "statement": "Dans un lycée, $60\\,\\%$ des élèves sont demi-pensionnaires et $30\\,\\%$ des demi-pensionnaires mangent végétarien. Quelle proportion des élèves du lycée mange végétarien à la demi-pension ?",
      "options": [
        "$18\\,\\%$",
        "$90\\,\\%$",
        "$30\\,\\%$",
        "$50\\,\\%$"
      ],
      "correctIndex": 0,
      "answer": "$18\\,\\%$",
      "hint1": "On cherche une proportion d'une sous-population : les proportions se multiplient.",
      "hint2": "Calcule $0{,}6 \\times 0{,}3$.",
      "solution": "$0{,}6 \\times 0{,}3 = 0{,}18$ : $18\\,\\%$ des élèves mangent végétarien à la demi-pension."
    },
    {
      "id": "1TC1-3",
      "tier": 1,
      "type": "mcq",
      "title": "Coefficient d'une baisse",
      "skill": "Passer d'un taux au coefficient multiplicateur",
      "statement": "Le prix d'un forfait téléphonique baisse de $7\\,\\%$. Par quel nombre ce prix est-il multiplié ?",
      "options": [
        "$0{,}93$",
        "$0{,}07$",
        "$1{,}07$",
        "$0{,}3$"
      ],
      "correctIndex": 0,
      "answer": "$0{,}93$",
      "hint1": "Une baisse de $t\\,\\%$ correspond à une multiplication par $1 - \\frac{t}{100}$.",
      "hint2": "Le taux s'écrit $0{,}07$ sous forme décimale ; retire-le de $1$.",
      "solution": "$CM = 1 - 0{,}07 = 0{,}93$ : le nouveau prix vaut $93\\,\\%$ de l'ancien."
    },
    {
      "id": "1TC1-2",
      "tier": 2,
      "type": "mcq",
      "title": "Hausse puis baisse",
      "skill": "Enchaîner des évolutions successives",
      "statement": "Un prix augmente de $30\\,\\%$ puis baisse de $20\\,\\%$. Quel est le taux d'évolution global ?",
      "options": [
        "$+4\\,\\%$",
        "$+10\\,\\%$",
        "$-6\\,\\%$",
        "$+50\\,\\%$"
      ],
      "correctIndex": 0,
      "answer": "$+4\\,\\%$",
      "hint1": "Traduis chaque évolution par son coefficient multiplicateur.",
      "hint2": "Les coefficients sont $1{,}3$ et $0{,}8$ ; multiplie-les.",
      "solution": "$1{,}3 \\times 0{,}8 = 1{,}04$, donc le prix a augmenté de $4\\,\\%$ au total."
    },
    {
      "id": "1TC1-4",
      "tier": 2,
      "type": "mcq",
      "title": "Taux d'évolution d'un prix",
      "skill": "Calculer un taux d'évolution",
      "statement": "Le prix d'une place de concert passe de $80$ € à $92$ €. Quel est le taux d'évolution de ce prix ?",
      "options": [
        "$+15\\,\\%$",
        "$+12\\,\\%$",
        "$+13\\,\\%$",
        "$-15\\,\\%$"
      ],
      "correctIndex": 0,
      "answer": "$+15\\,\\%$",
      "hint1": "Le taux d'évolution est la variation divisée par la valeur de départ : $t = \\frac{V_1 - V_0}{V_0}$.",
      "hint2": "La variation vaut $92 - 80 = 12$ € ; divise-la par l'ancien prix.",
      "solution": "$t = \\frac{92 - 80}{80} = \\frac{12}{80} = 0{,}15$ : le prix a augmenté de $15\\,\\%$. (Diviser par $92$ donnerait environ $13\\,\\%$ : c'est l'erreur de la mauvaise valeur de référence.)"
    },
    {
      "id": "1TC1-5",
      "tier": 3,
      "type": "mcq",
      "title": "Revenir au prix de départ",
      "skill": "Déterminer une évolution réciproque",
      "statement": "Pendant les soldes, le prix d'un manteau baisse de $20\\,\\%$. Quelle évolution faut-il appliquer au prix soldé pour retrouver le prix de départ ?",
      "options": [
        "$+25\\,\\%$",
        "$+20\\,\\%$",
        "$+80\\,\\%$",
        "$-25\\,\\%$"
      ],
      "correctIndex": 0,
      "answer": "$+25\\,\\%$",
      "hint1": "L'évolution réciproque d'une évolution de coefficient $CM$ a pour coefficient $\\frac{1}{CM}$.",
      "hint2": "La baisse correspond à $CM = 0{,}8$ ; calcule l'inverse de ce nombre.",
      "solution": "$\\frac{1}{0{,}8} = 1{,}25$ : il faut une hausse de $25\\,\\%$. Une hausse de $20\\,\\%$ ne suffit pas : $0{,}8 \\times 1{,}2 = 0{,}96$."
    },
    {
      "id": "1TC1-6",
      "tier": 3,
      "type": "mcq",
      "title": "Prix avant augmentation",
      "skill": "Retrouver une valeur initiale",
      "statement": "Après une hausse de $12\\,\\%$, le prix d'un abonnement à une salle de sport est de $56$ € par mois. Quel était le prix avant la hausse ?",
      "options": [
        "$50$ €",
        "$49{,}28$ €",
        "$44$ €",
        "$62{,}72$ €"
      ],
      "correctIndex": 0,
      "answer": "$50$ €",
      "hint1": "La valeur initiale s'obtient en divisant la valeur finale par le coefficient multiplicateur.",
      "hint2": "Le coefficient multiplicateur vaut $1{,}12$ : il faut calculer $56 \\div 1{,}12$.",
      "solution": "$V_0 = \\frac{56}{1{,}12} = \\frac{5\\,600}{112} = 50$ €. Vérification : $50 \\times 1{,}12 = 56$. Retirer $12\\,\\%$ de $56$ (soit $49{,}28$ €) est faux, car la hausse portait sur l'ancien prix."
    },
    {
      "id": "1TC1-7",
      "tier": 4,
      "type": "mcq",
      "title": "Baisse répétée",
      "skill": "Calculer un taux global pour une évolution répétée",
      "statement": "Le nombre de lecteurs d'un magazine papier baisse de $10\\,\\%$ par an pendant $3$ ans. Quel est le taux d'évolution global sur ces trois ans ?",
      "options": [
        "$-27{,}1\\,\\%$",
        "$-30\\,\\%$",
        "$-72{,}9\\,\\%$",
        "$-3{,}3\\,\\%$"
      ],
      "correctIndex": 0,
      "answer": "$-27{,}1\\,\\%$",
      "hint1": "Une même évolution répétée $n$ fois a pour coefficient global $CM^n$.",
      "hint2": "Le coefficient annuel vaut $0{,}9$ ; calcule $0{,}9^3$.",
      "solution": "$0{,}9^3 = 0{,}81 \\times 0{,}9 = 0{,}729$, donc $t = 0{,}729 - 1 = -0{,}271$ : le nombre de lecteurs a baissé de $27{,}1\\,\\%$ (et non de $30\\,\\%$). La valeur $72{,}9\\,\\%$ est la part restante, pas la baisse."
    },
    {
      "id": "1TC1-8",
      "tier": 4,
      "type": "mcq",
      "title": "Objectif sur deux ans",
      "skill": "Déterminer une évolution manquante",
      "statement": "Le chiffre d'affaires d'une librairie a augmenté de $25\\,\\%$ la première année. Quelle évolution doit-il connaître la deuxième année pour que l'augmentation globale sur les deux ans soit de $50\\,\\%$ ?",
      "options": [
        "$+20\\,\\%$",
        "$+25\\,\\%$",
        "$+12{,}5\\,\\%$",
        "$+75\\,\\%$"
      ],
      "correctIndex": 0,
      "answer": "$+20\\,\\%$",
      "hint1": "Le coefficient global est le produit des coefficients annuels : le coefficient manquant est le quotient du coefficient global par le coefficient connu.",
      "hint2": "Le coefficient global visé vaut $1{,}5$ et celui de la première année $1{,}25$ ; calcule leur quotient.",
      "solution": "$CM_2 = \\frac{1{,}5}{1{,}25} = \\frac{150}{125} = 1{,}2$ : il faut une hausse de $20\\,\\%$ la deuxième année. Vérification : $1{,}25 \\times 1{,}2 = 1{,}5$. Répondre $+25\\,\\%$ revient à additionner les taux, ce qui est faux ($1{,}25^2 = 1{,}562\\,5$)."
    }
  ],
  "1TC2": [
    {
      "id": "1TC2-1",
      "tier": 1,
      "type": "mcq",
      "title": "Fréquence conditionnelle",
      "skill": "Calculer une fréquence conditionnelle",
      "statement": "Sur $250$ salariés, $100$ viennent en vélo ; parmi eux, $35$ habitent à moins de $5$ km. Quelle est la fréquence des salariés habitant à moins de $5$ km parmi ceux qui viennent en vélo ?",
      "options": [
        "$0{,}35$",
        "$0{,}14$",
        "$0{,}4$",
        "$0{,}65$"
      ],
      "correctIndex": 0,
      "answer": "$0{,}35$",
      "hint1": "La population de référence est celle des salariés venant en vélo.",
      "hint2": "Divise $35$ par l'effectif des cyclistes.",
      "solution": "$\\frac{35}{100} = 0{,}35$, soit $35\\,\\%$ des cyclistes."
    },
    {
      "id": "1TC2-3",
      "tier": 1,
      "type": "mcq",
      "title": "Fréquence marginale",
      "skill": "Calculer une fréquence marginale",
      "statement": "Le tableau croisé suivant répartit les $400$ élèves de Première d'un lycée.\n\n|  | Internes | Externes | Total |\n|:---:|:---:|:---:|:---:|\n| Filles | $54$ | $166$ | $220$ |\n| Garçons | $36$ | $144$ | $180$ |\n| Total | $90$ | $310$ | $400$ |\n\nQuelle est la fréquence des internes parmi l'ensemble des élèves de Première ?",
      "options": [
        "$22{,}5\\,\\%$",
        "$40\\,\\%$",
        "$20\\,\\%$",
        "$9\\,\\%$"
      ],
      "correctIndex": 0,
      "answer": "$22{,}5\\,\\%$",
      "hint1": "Une fréquence marginale se calcule avec la ligne ou la colonne « Total » : effectif marginal divisé par l'effectif total.",
      "hint2": "L'effectif marginal des internes se lit dans la ligne « Total » : $90$.",
      "solution": "$f = \\frac{90}{400} = 0{,}225$, soit $22{,}5\\,\\%$ des élèves. ($40\\,\\%$ est la part des garçons parmi les internes et $20\\,\\%$ la part des internes parmi les garçons.)"
    },
    {
      "id": "1TC2-2",
      "tier": 2,
      "type": "mcq",
      "title": "Point moyen",
      "skill": "Calculer le point moyen d'un nuage",
      "statement": "On considère la série $(x_i ; y_i)$ : $(2 ; 5)$, $(4 ; 9)$, $(6 ; 10)$, $(8 ; 16)$. Quelles sont les coordonnées du point moyen $G$ ?",
      "options": [
        "$G(5 ; 10)$",
        "$G(20 ; 40)$",
        "$G(4 ; 10)$",
        "$G(5 ; 9{,}5)$"
      ],
      "correctIndex": 0,
      "answer": "$G(5 ; 10)$",
      "hint1": "Le point moyen a pour coordonnées la moyenne des abscisses et la moyenne des ordonnées.",
      "hint2": "Somme des $x_i$ : $20$ ; somme des $y_i$ : $40$. Divise chacune par le nombre de points.",
      "solution": "$\\bar{x} = \\frac{20}{4} = 5$ et $\\bar{y} = \\frac{40}{4} = 10$, donc $G(5 ; 10)$."
    },
    {
      "id": "1TC2-4",
      "tier": 2,
      "type": "mcq",
      "title": "Estimer avec un ajustement",
      "skill": "Interpoler à l'aide d'une droite d'ajustement",
      "statement": "On étudie le nombre d'adhérents (en centaines) d'une association de 2018 à 2024. On note $x$ le rang de l'année ($x = 0$ en 2018). Un tableur fournit la droite d'ajustement d'équation $y = 2{,}5x + 40$. Quelle estimation du nombre d'adhérents en 2021 ce modèle donne-t-il ?",
      "options": [
        "$4\\,750$ adhérents",
        "$4\\,500$ adhérents",
        "$5\\,000$ adhérents",
        "$4\\,000$ adhérents"
      ],
      "correctIndex": 0,
      "answer": "$4\\,750$ adhérents",
      "hint1": "On remplace $x$ par le rang de l'année (et non par l'année) dans l'équation de la droite, puis on tient compte de l'unité.",
      "hint2": "L'année 2021 correspond au rang $x = 3$.",
      "solution": "$y = 2{,}5 \\times 3 + 40 = 47{,}5$ centaines, soit $4\\,750$ adhérents. C'est une interpolation, car 2021 est comprise entre 2018 et 2024."
    },
    {
      "id": "1TC2-5",
      "tier": 3,
      "type": "mcq",
      "title": "Ordonnée à l'origine",
      "skill": "Utiliser le point moyen pour compléter une équation de droite",
      "statement": "Le point moyen d'un nuage est $G(4 ; 30)$. Une droite d'ajustement de coefficient directeur $2{,}5$ passe par $G$. Quelle est son ordonnée à l'origine $b$ ?",
      "options": [
        "$20$",
        "$40$",
        "$27{,}5$",
        "$12$"
      ],
      "correctIndex": 0,
      "answer": "$20$",
      "hint1": "Si la droite $y = ax + b$ passe par $G(\\bar{x} ; \\bar{y})$, alors $\\bar{y} = a\\bar{x} + b$.",
      "hint2": "On doit avoir $30 = 2{,}5 \\times 4 + b$.",
      "solution": "$30 = 10 + b$, donc $b = 20$ : la droite a pour équation $y = 2{,}5x + 20$."
    },
    {
      "id": "1TC2-6",
      "tier": 3,
      "type": "mcq",
      "title": "Année de franchissement d'un seuil",
      "skill": "Extrapoler à l'aide d'un ajustement affine",
      "statement": "La consommation de papier d'une entreprise (en tonnes) est ajustée par $y = -1{,}5x + 30$, où $x$ est le rang de l'année ($x = 0$ en 2020). En supposant que la tendance se poursuive, à partir de quelle année la consommation deviendra-t-elle inférieure à $12$ tonnes ?",
      "options": [
        "2033",
        "2032",
        "2040",
        "2012"
      ],
      "correctIndex": 0,
      "answer": "2033",
      "hint1": "On résout l'inéquation $ax + b < S$ en changeant le sens de l'inégalité si l'on divise par un nombre négatif, puis on prend le plus petit rang entier qui convient.",
      "hint2": "L'inéquation s'écrit $-1{,}5x + 30 < 12$, c'est-à-dire $-1{,}5x < -18$.",
      "solution": "$-1{,}5x < -18 \\iff x > \\frac{-18}{-1{,}5} = 12$. Pour $x = 12$ (2032), la consommation vaut exactement $12$ tonnes ; il faut donc $x = 13$, soit l'année 2033. C'est une extrapolation, à interpréter avec prudence."
    },
    {
      "id": "1TC2-7",
      "tier": 4,
      "type": "mcq",
      "title": "Tableau reconstitué",
      "skill": "Construire un tableau croisé à partir de pourcentages",
      "statement": "Une enquête porte sur $500$ habitants d'une commune : $300$ pratiquent un sport et $220$ ont moins de $30$ ans. Parmi les sportifs, $60\\,\\%$ ont moins de $30$ ans. Quelle est la fréquence des moins de $30$ ans parmi les non-sportifs ?",
      "options": [
        "$20\\,\\%$",
        "$8\\,\\%$",
        "$40\\,\\%$",
        "$44\\,\\%$"
      ],
      "correctIndex": 0,
      "answer": "$20\\,\\%$",
      "hint1": "Construis le tableau croisé : place les totaux connus, calcule la case donnée par le pourcentage, puis complète par différences.",
      "hint2": "Les sportifs de moins de $30$ ans sont $0{,}6 \\times 300 = 180$.",
      "solution": "Moins de $30$ ans non sportifs : $220 - 180 = 40$. Non-sportifs : $500 - 300 = 200$. Fréquence cherchée : $\\frac{40}{200} = 0{,}2$, soit $20\\,\\%$. ($8\\,\\%$ serait la fréquence par rapport aux $500$ habitants, $40\\,\\%$ la part des sportifs de $30$ ans ou plus.)"
    },
    {
      "id": "1TC2-8",
      "tier": 4,
      "type": "mcq",
      "title": "Confronter le modèle à la réalité",
      "skill": "Calculer un écart relatif entre prévision et observation",
      "statement": "La fréquentation d'un musée (en milliers de visiteurs) a été ajustée de 2015 à 2022 par $y = 4x + 40$, où $x$ est le rang de l'année ($x = 0$ en 2015). En 2025, on a observé $100$ milliers de visiteurs. Quel est l'écart relatif $\\frac{y_{\\text{modèle}} - y_{\\text{observé}}}{y_{\\text{observé}}}$ ?",
      "options": [
        "$-20\\,\\%$",
        "$+20\\,\\%$",
        "$-25\\,\\%$",
        "$+25\\,\\%$"
      ],
      "correctIndex": 0,
      "answer": "$-20\\,\\%$",
      "hint1": "Calcule d'abord la prévision du modèle en remplaçant $x$ par le rang de l'année, puis le quotient de l'écart par la valeur observée.",
      "hint2": "L'année 2025 correspond au rang $x = 10$.",
      "solution": "Prévision : $y = 4 \\times 10 + 40 = 80$ milliers. Écart relatif : $\\frac{80 - 100}{100} = -0{,}2$, soit $-20\\,\\%$ : le modèle sous-estime la fréquentation de $20\\,\\%$. ($-25\\,\\%$ correspond à une division par $80$ au lieu de $100$.)"
    }
  ],
  "1TC3": [
    {
      "id": "1TC3-1",
      "tier": 1,
      "type": "mcq",
      "title": "Chemin d'un arbre",
      "skill": "Calculer la probabilité d'une intersection",
      "statement": "On a $P(A) = 0{,}4$ et $P_A(B) = 0{,}25$. Que vaut $P(A \\cap B)$ ?",
      "options": [
        "$0{,}1$",
        "$0{,}65$",
        "$1{,}6$",
        "$0{,}15$"
      ],
      "correctIndex": 0,
      "answer": "$0{,}1$",
      "hint1": "Dans un arbre pondéré, la probabilité d'un chemin s'obtient par un produit.",
      "hint2": "Utilise $P(A \\cap B) = P(A) \\times P_A(B)$.",
      "solution": "$P(A \\cap B) = 0{,}4 \\times 0{,}25 = 0{,}1$."
    },
    {
      "id": "1TC3-3",
      "tier": 1,
      "type": "mcq",
      "title": "Deux tirs indépendants",
      "skill": "Calculer une probabilité pour deux épreuves indépendantes",
      "statement": "À chaque tir, un archer atteint la cible avec une probabilité de $0{,}8$, indépendamment des autres tirs. Il tire deux fois. Quelle est la probabilité qu'il atteigne la cible aux deux tirs ?",
      "options": [
        "$0{,}64$",
        "$0{,}8$",
        "$0{,}16$",
        "$0{,}04$"
      ],
      "correctIndex": 0,
      "answer": "$0{,}64$",
      "hint1": "Pour des épreuves indépendantes, la probabilité d'une suite de résultats est le produit des probabilités de chaque résultat.",
      "hint2": "Le chemin cherché est $S\\,S$, dont les deux branches valent $0{,}8$.",
      "solution": "$P(S\\,S) = 0{,}8 \\times 0{,}8 = 0{,}64$. ($0{,}04 = 0{,}2 \\times 0{,}2$ correspond à deux échecs.)"
    },
    {
      "id": "1TC3-2",
      "tier": 2,
      "type": "mcq",
      "title": "Probabilités totales",
      "skill": "Appliquer la formule des probabilités totales",
      "statement": "On a $P(A) = 0{,}2$, $P_A(B) = 0{,}5$ et $P_{\\overline{A}}(B) = 0{,}25$. Que vaut $P(B)$ ?",
      "options": [
        "$0{,}3$",
        "$0{,}75$",
        "$0{,}1$",
        "$0{,}375$"
      ],
      "correctIndex": 0,
      "answer": "$0{,}3$",
      "hint1": "L'événement $B$ se réalise en passant par $A$ ou par $\\overline{A}$.",
      "hint2": "Calcule $P(A \\cap B) = 0{,}2 \\times 0{,}5$ et $P(\\overline{A} \\cap B) = 0{,}8 \\times 0{,}25$, puis additionne.",
      "solution": "$P(B) = 0{,}2 \\times 0{,}5 + 0{,}8 \\times 0{,}25 = 0{,}1 + 0{,}2 = 0{,}3$."
    },
    {
      "id": "1TC3-4",
      "tier": 2,
      "type": "mcq",
      "title": "Probabilité conditionnelle et tableau",
      "skill": "Calculer une probabilité conditionnelle à partir d'un tableau croisé",
      "statement": "Une enquête auprès de $200$ habitants d'un quartier donne le tableau suivant.\n\n|  | Lit un quotidien | Ne lit pas de quotidien | Total |\n|:---:|:---:|:---:|:---:|\n| Moins de 40 ans | $30$ | $90$ | $120$ |\n| 40 ans ou plus | $50$ | $30$ | $80$ |\n| Total | $80$ | $120$ | $200$ |\n\nOn choisit un habitant au hasard parmi les $200$. On note $A$ l'événement « l'habitant a moins de 40 ans » et $B$ l'événement « l'habitant lit un quotidien ». Que vaut $P_B(A)$ ?",
      "options": [
        "$0{,}375$",
        "$0{,}25$",
        "$0{,}15$",
        "$0{,}6$"
      ],
      "correctIndex": 0,
      "answer": "$0{,}375$",
      "hint1": "$P_B(A)$ est la proportion des individus de $A$ parmi ceux de $B$ : le dénominateur est l'effectif de $B$.",
      "hint2": "L'effectif de $B$ (lecteurs d'un quotidien) est $80$ ; parmi eux, on compte ceux qui ont moins de 40 ans.",
      "solution": "$P_B(A) = \\frac{30}{80} = 0{,}375$. À ne pas confondre avec $P_A(B) = \\frac{30}{120} = 0{,}25$ ni avec $P(A \\cap B) = \\frac{30}{200} = 0{,}15$."
    },
    {
      "id": "1TC3-5",
      "tier": 3,
      "type": "mcq",
      "title": "Tester l'indépendance",
      "skill": "Reconnaître deux événements indépendants",
      "statement": "On donne $P(A) = 0{,}5$, $P(B) = 0{,}4$ et $P(A \\cap B) = 0{,}2$. Les événements $A$ et $B$ sont-ils indépendants ?",
      "options": [
        "Oui, car $P(A) \\times P(B) = P(A \\cap B)$.",
        "Non, car $P(A \\cap B) \\neq 0$.",
        "Non, car $P(A) + P(B) \\neq 1$.",
        "Oui, car $P(A) > P(B)$."
      ],
      "correctIndex": 0,
      "answer": "Oui, car $P(A) \\times P(B) = P(A \\cap B)$.",
      "hint1": "Deux événements sont indépendants lorsque la probabilité de leur intersection est égale au produit de leurs probabilités.",
      "hint2": "Calcule le produit $0{,}5 \\times 0{,}4$ et compare-le à $P(A \\cap B)$.",
      "solution": "$P(A) \\times P(B) = 0{,}5 \\times 0{,}4 = 0{,}2 = P(A \\cap B)$ : $A$ et $B$ sont indépendants. On a d'ailleurs $P_A(B) = \\frac{0{,}2}{0{,}5} = 0{,}4 = P(B)$."
    },
    {
      "id": "1TC3-6",
      "tier": 3,
      "type": "mcq",
      "title": "Retourner un arbre",
      "skill": "Calculer $P_B(A)$ à partir d'un arbre",
      "statement": "Dans un club, $30\\,\\%$ des adhérents font de la compétition. Parmi eux, $60\\,\\%$ s'entraînent plus de trois fois par semaine, contre $20\\,\\%$ parmi les autres adhérents. On choisit au hasard un adhérent qui s'entraîne plus de trois fois par semaine. Quelle est la probabilité qu'il fasse de la compétition ?",
      "options": [
        "$\\frac{9}{16}$",
        "$0{,}18$",
        "$0{,}6$",
        "$0{,}32$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{9}{16}$",
      "hint1": "On calcule la probabilité de la condition par la formule des probabilités totales, puis on divise la probabilité du chemin voulu par cette probabilité.",
      "hint2": "Avec $C$ « faire de la compétition » et $E$ « s'entraîner plus de trois fois », $P(C \\cap E) = 0{,}3 \\times 0{,}6 = 0{,}18$ ; calcule ensuite $P(E)$.",
      "solution": "$P(E) = 0{,}3 \\times 0{,}6 + 0{,}7 \\times 0{,}2 = 0{,}18 + 0{,}14 = 0{,}32$. Donc $P_E(C) = \\frac{0{,}18}{0{,}32} = \\frac{18}{32} = \\frac{9}{16} = 0{,}562\\,5$."
    },
    {
      "id": "1TC3-7",
      "tier": 4,
      "type": "mcq",
      "title": "Test de dépistage",
      "skill": "Interpréter un test de dépistage",
      "statement": "Une maladie touche $2\\,\\%$ d'une population. Un test a une sensibilité de $90\\,\\%$ (il est positif chez $90\\,\\%$ des malades) et une spécificité de $95\\,\\%$ (il est négatif chez $95\\,\\%$ des non-malades). Une personne a un test positif. Quelle est la probabilité qu'elle soit malade ?",
      "options": [
        "$\\frac{18}{67}$",
        "$0{,}9$",
        "$0{,}018$",
        "$0{,}95$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{18}{67}$",
      "hint1": "Raisonne sur une population fictive de $10\\,000$ personnes : compte les malades positifs et les non-malades positifs, puis rapporte au nombre total de tests positifs.",
      "hint2": "Sur $10\\,000$ personnes, il y a $200$ malades, dont $180$ ont un test positif ; compte ensuite les faux positifs parmi les $9\\,800$ non-malades.",
      "solution": "Faux positifs : $0{,}05 \\times 9\\,800 = 490$. Tests positifs : $180 + 490 = 670$. Probabilité cherchée : $\\frac{180}{670} = \\frac{18}{67} \\approx 0{,}27$. Malgré un bon test, une personne positive n'a qu'environ $27\\,\\%$ de chances d'être malade, car la maladie est rare."
    },
    {
      "id": "1TC3-8",
      "tier": 4,
      "type": "mcq",
      "title": "Au moins une réussite",
      "skill": "Calculer la probabilité d'au moins un succès",
      "statement": "Un joueur de basket réussit un lancer franc avec une probabilité de $0{,}4$, indépendamment des autres lancers. Il tente trois lancers francs. Quelle est la probabilité qu'il en réussisse au moins un ?",
      "options": [
        "$0{,}784$",
        "$0{,}064$",
        "$0{,}216$",
        "$0{,}4$"
      ],
      "correctIndex": 0,
      "answer": "$0{,}784$",
      "hint1": "L'événement contraire de « au moins un succès » est « aucun succès » ; sa probabilité est le produit des probabilités d'échec.",
      "hint2": "La probabilité d'un échec vaut $0{,}6$ ; calcule $0{,}6^3$.",
      "solution": "$P(\\text{aucune réussite}) = 0{,}6^3 = 0{,}216$, donc $P(\\text{au moins une}) = 1 - 0{,}216 = 0{,}784$. ($0{,}064 = 0{,}4^3$ correspond à trois réussites.)"
    }
  ],
  "1TC4": [
    {
      "id": "1TC4-1",
      "tier": 1,
      "type": "mcq",
      "title": "Terme d'une suite arithmétique",
      "skill": "Calculer un terme d'une suite arithmétique",
      "statement": "La suite $u$ est arithmétique de premier terme $u(0) = 12$ et de raison $r = 7$. Que vaut $u(10)$ ?",
      "options": [
        "$82$",
        "$75$",
        "$89$",
        "$120$"
      ],
      "correctIndex": 0,
      "answer": "$82$",
      "hint1": "Partir du premier terme et ajouter la raison autant de fois qu'il y a d'étapes : $u(n) = u(0) + nr$.",
      "hint2": "Ici $u(10) = 12 + 10 \\times 7$.",
      "solution": "$u(10) = 12 + 10 \\times 7 = 12 + 70 = 82$."
    },
    {
      "id": "1TC4-2",
      "tier": 2,
      "type": "mcq",
      "title": "Fonction affine par deux valeurs",
      "skill": "Déterminer une fonction affine",
      "statement": "La fonction affine $f$ vérifie $f(2) = 11$ et $f(6) = 23$. Quelle est son expression ?",
      "options": [
        "$f(x) = 4x + 3$",
        "$f(x) = 3x + 11$",
        "$f(x) = 3x + 5$",
        "$f(x) = 12x - 13$"
      ],
      "correctIndex": 2,
      "answer": "$f(x) = 3x + 5$",
      "hint1": "Le coefficient directeur est le quotient de la variation des images par la variation des abscisses ; on obtient ensuite $b$ en utilisant l'une des deux valeurs connues.",
      "hint2": "$a = \\frac{23 - 11}{6 - 2}$, puis $2a + b = 11$.",
      "solution": "$a = \\frac{23 - 11}{6 - 2} = \\frac{12}{4} = 3$, puis $2 \\times 3 + b = 11$ donne $b = 5$. Vérification : $f(6) = 18 + 5 = 23$. Donc $f(x) = 3x + 5$."
    },
    {
      "id": "1TC4-3",
      "tier": 1,
      "type": "mcq",
      "title": "Sens de variation d'une suite arithmétique",
      "skill": "Déterminer le sens de variation d'une suite arithmétique",
      "statement": "La suite $u$ est définie par $u(0) = 50$ et, pour tout entier naturel $n$, $u(n+1) = u(n) - 3$. Quel est son sens de variation ?",
      "options": [
        "Elle est croissante, car $u(0) = 50 > 0$.",
        "Elle est décroissante, car sa raison $-3$ est négative.",
        "Elle est constante.",
        "Elle est croissante puis décroissante."
      ],
      "correctIndex": 1,
      "answer": "Elle est décroissante, car sa raison $-3$ est négative.",
      "hint1": "Une suite arithmétique a le sens de variation donné par le signe de sa raison.",
      "hint2": "La relation $u(n+1) = u(n) - 3$ montre que la raison vaut $-3$.",
      "solution": "$u$ est arithmétique de raison $r = -3 < 0$ : chaque terme est inférieur au précédent, donc la suite est décroissante (le signe de $u(0)$ n'intervient pas)."
    },
    {
      "id": "1TC4-4",
      "tier": 2,
      "type": "mcq",
      "title": "Raison à partir de deux termes",
      "skill": "Déterminer la raison d’une suite arithmétique",
      "statement": "La suite $u$ est arithmétique, avec $u(3) = 17$ et $u(8) = 42$. Quelle est sa raison ?",
      "options": [
        "$25$",
        "$8{,}4$",
        "$4$",
        "$5$"
      ],
      "correctIndex": 3,
      "answer": "$5$",
      "hint1": "Entre deux termes d'une suite arithmétique, l'écart est égal au nombre de pas multiplié par la raison.",
      "hint2": "De $u(3)$ à $u(8)$ il y a $5$ pas, et l'écart vaut $42 - 17$.",
      "solution": "$u(8) = u(3) + 5r$, donc $5r = 42 - 17 = 25$ et $r = 5$."
    },
    {
      "id": "1TC4-5",
      "tier": 3,
      "type": "mcq",
      "title": "Seuil dans un contexte",
      "skill": "Déterminer un seuil",
      "statement": "Une plateforme compte $3\\,400$ abonnés en 2026 et en gagne $260$ chaque année. On note $u(n)$ le nombre d'abonnés en $2026 + n$. En quelle année le nombre d'abonnés dépassera-t-il strictement $6\\,000$ ?",
      "options": [
        "2036",
        "2037",
        "2035",
        "2046"
      ],
      "correctIndex": 1,
      "answer": "2037",
      "hint1": "Écrire $u(n)$ en fonction de $n$, résoudre l'inéquation $u(n) > S$, garder le plus petit entier qui convient, puis le traduire en année.",
      "hint2": "$3\\,400 + 260n > 6\\,000$ équivaut à $260n > 2\\,600$.",
      "solution": "$u(n) = 3\\,400 + 260n$. $260n > 2\\,600 \\iff n > 10$ : l'inégalité est stricte, donc $n = 10$ ne convient pas ($u(10) = 6\\,000$) et le plus petit entier est $n = 11$. L'année cherchée est $2026 + 11 = 2037$."
    },
    {
      "id": "1TC4-6",
      "tier": 3,
      "type": "mcq",
      "title": "Seuil avec Python",
      "skill": "Interpréter un programme de seuil",
      "statement": "On considère le programme Python suivant :\n```python\nu = 80\nn = 0\nwhile u < 200:\n    u = u + 12\n    n = n + 1\nprint(n)\n```\nQuelle valeur affiche-t-il ?",
      "options": [
        "$10$",
        "$11$",
        "$9$",
        "$200$"
      ],
      "correctIndex": 0,
      "answer": "$10$",
      "hint1": "La boucle s'arrête dès que la condition devient fausse : le programme affiche le premier rang pour lequel la valeur atteint le seuil.",
      "hint2": "Après $n$ passages, $u = 80 + 12n$ ; on cherche le plus petit $n$ tel que $80 + 12n \\geqslant 200$.",
      "solution": "$80 + 12n \\geqslant 200 \\iff 12n \\geqslant 120 \\iff n \\geqslant 10$. Pour $n = 9$, $u = 188 < 200$ et la boucle continue ; pour $n = 10$, $u = 200$, la condition $u < 200$ est fausse et le programme affiche $10$."
    },
    {
      "id": "1TC4-7",
      "tier": 4,
      "type": "mcq",
      "title": "Comparer deux tarifs",
      "skill": "Comparer deux modèles linéaires",
      "statement": "Tarif A : $9$ € par séance. Tarif B : un abonnement de $60$ € puis $5$ € par séance. À partir de combien de séances le tarif B est-il strictement moins cher que le tarif A ?",
      "options": [
        "$15$",
        "$12$",
        "$16$",
        "$7$"
      ],
      "correctIndex": 2,
      "answer": "$16$",
      "hint1": "Exprimer le coût de chaque tarif en fonction du nombre de séances, puis résoudre l'inéquation « coût B < coût A » dans les entiers naturels.",
      "hint2": "Pour $n$ séances : $A = 9n$ et $B = 60 + 5n$ ; résoudre $60 + 5n < 9n$.",
      "solution": "$60 + 5n < 9n \\iff 60 < 4n \\iff n > 15$. Pour $15$ séances les deux tarifs coûtent $135$ € ; le tarif B devient strictement moins cher à partir de $16$ séances ($140$ € contre $144$ €)."
    },
    {
      "id": "1TC4-8",
      "tier": 4,
      "type": "mcq",
      "title": "Modèle affine d'une bougie",
      "skill": "Modéliser par une fonction affine",
      "statement": "Une bougie se consume régulièrement : elle mesure $24$ cm au bout de $2$ heures et $18$ cm au bout de $5$ heures. Au bout de combien d'heures (depuis l'allumage) sera-t-elle entièrement consumée ?",
      "options": [
        "$12$ h",
        "$14$ h",
        "$9$ h",
        "$28$ h"
      ],
      "correctIndex": 1,
      "answer": "$14$ h",
      "hint1": "Une combustion régulière se modélise par une fonction affine : déterminer son coefficient directeur et son ordonnée à l'origine, puis chercher quand elle s'annule.",
      "hint2": "$a = \\frac{18 - 24}{5 - 2}$, puis la hauteur initiale vaut $24 - 2a$.",
      "solution": "$a = \\frac{-6}{3} = -2$ cm par heure et $h(0) = 24 + 2 \\times 2 = 28$ cm, donc $h(x) = 28 - 2x$. $h(x) = 0 \\iff x = 14$ : la bougie est consumée au bout de $14$ heures."
    }
  ],
  "1TC5": [
    {
      "id": "1TC5-1",
      "tier": 1,
      "type": "mcq",
      "title": "Racines d'une forme factorisée",
      "skill": "Lire les racines d'une forme factorisée",
      "statement": "Quelles sont les solutions de l'équation $2(x - 3)(x + 5) = 0$ ?",
      "options": [
        "$-3$ et $5$",
        "$3$ et $-5$",
        "$2$, $3$ et $-5$",
        "$3$ et $5$"
      ],
      "correctIndex": 1,
      "answer": "$3$ et $-5$",
      "hint1": "Un produit est nul si et seulement si l'un de ses facteurs est nul ; un facteur constant non nul ne s'annule jamais.",
      "hint2": "Résous $x - 3 = 0$ puis $x + 5 = 0$.",
      "solution": "$x - 3 = 0 \\iff x = 3$ et $x + 5 = 0 \\iff x = -5$. Le facteur $2$ ne s'annule jamais. Les solutions sont $3$ et $-5$."
    },
    {
      "id": "1TC5-2",
      "tier": 2,
      "type": "mcq",
      "title": "Sommet d'une parabole",
      "skill": "Déterminer l'abscisse du sommet d'une parabole",
      "statement": "Quelle est l'abscisse du sommet de la parabole représentant $f(x) = -(x - 1)(x - 7)$ ?",
      "options": [
        "$4$",
        "$3$",
        "$-4$",
        "$7$"
      ],
      "correctIndex": 0,
      "answer": "$4$",
      "hint1": "L'axe de symétrie d'une parabole passe au milieu de ses deux points d'intersection avec l'axe des abscisses.",
      "hint2": "Les racines sont $1$ et $7$ ; calcule leur moyenne.",
      "solution": "L'abscisse du sommet est $\\frac{1 + 7}{2} = 4$. De plus $f(4) = -3 \\times (-3) = 9$ est le maximum de $f$, car $a = -1 < 0$."
    },
    {
      "id": "1TC5-3",
      "tier": 1,
      "type": "mcq",
      "title": "Allure d'une parabole",
      "skill": "Reconnaître la courbe de $x \\mapsto ax^2 + c$",
      "statement": "Quelle est l'allure de la courbe de la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = -3x^2 + 2$ ?",
      "options": [
        "Une parabole tournée vers le haut, de sommet $\\left(0 ; 2\\right)$.",
        "Une parabole tournée vers le bas, de sommet $\\left(2 ; 0\\right)$.",
        "Une parabole tournée vers le bas, de sommet $\\left(0 ; 2\\right)$.",
        "Une droite de coefficient directeur $-3$."
      ],
      "correctIndex": 2,
      "answer": "Une parabole tournée vers le bas, de sommet $\\left(0 ; 2\\right)$.",
      "hint1": "Le signe du coefficient de $x^2$ donne l'orientation de la parabole ; la constante ajoutée donne l'ordonnée du sommet, situé sur l'axe des ordonnées.",
      "hint2": "Le coefficient de $x^2$ est $-3$ et $f(0) = 2$.",
      "solution": "$a = -3 < 0$ : la parabole est tournée vers le bas. C'est la courbe de $x \\mapsto -3x^2$ décalée de $2$ vers le haut : son sommet est $\\left(0 ; 2\\right)$ et $2$ est le maximum de $f$."
    },
    {
      "id": "1TC5-4",
      "tier": 2,
      "type": "mcq",
      "title": "Signe d'une forme factorisée",
      "skill": "Résoudre une inéquation produit",
      "statement": "Pour quelles valeurs de $x$ a-t-on $(x - 2)(x + 4) < 0$ ?",
      "options": [
        "$\\left]-\\infty ; -4\\right[ \\cup \\left]2 ; +\\infty\\right[$",
        "$\\left]-4 ; 2\\right[$",
        "$\\left]-2 ; 4\\right[$",
        "$\\left[-4 ; 2\\right]$"
      ],
      "correctIndex": 1,
      "answer": "$\\left]-4 ; 2\\right[$",
      "hint1": "Repérer les racines, puis utiliser la règle : le produit est du signe de $a$ à l'extérieur des racines et du signe contraire entre elles.",
      "hint2": "Les racines sont $-4$ et $2$, et le coefficient $a$ vaut $1$.",
      "solution": "Les racines sont $-4$ et $2$ et $a = 1 > 0$ : le produit est strictement négatif entre les racines. Les racines sont exclues car l'inégalité est stricte : $S = \\left]-4 ; 2\\right[$."
    },
    {
      "id": "1TC5-5",
      "tier": 3,
      "type": "mcq",
      "title": "Coordonnées du sommet",
      "skill": "Déterminer le sommet et l’extremum",
      "statement": "Quelles sont les coordonnées du sommet de la parabole représentant $f(x) = 2(x - 1)(x - 5)$ ?",
      "options": [
        "$\\left(3 ; 8\\right)$",
        "$\\left(-3 ; -8\\right)$",
        "$\\left(3 ; -4\\right)$",
        "$\\left(3 ; -8\\right)$"
      ],
      "correctIndex": 3,
      "answer": "$\\left(3 ; -8\\right)$",
      "hint1": "L'abscisse du sommet est la moyenne des racines ; son ordonnée est l'image de cette abscisse.",
      "hint2": "Les racines sont $1$ et $5$, d'où $\\alpha = 3$ ; calcule $f(3) = 2 \\times (3 - 1) \\times (3 - 5)$.",
      "solution": "$\\alpha = \\frac{1 + 5}{2} = 3$ et $f(3) = 2 \\times 2 \\times (-2) = -8$. Le sommet est $\\left(3 ; -8\\right)$ ; comme $a = 2 > 0$, $-8$ est le minimum de $f$."
    },
    {
      "id": "1TC5-6",
      "tier": 3,
      "type": "mcq",
      "title": "Axe de symétrie par deux images égales",
      "skill": "Déterminer l'axe de symétrie d'une parabole",
      "statement": "Une fonction $f$ du second degré vérifie $f(-1) = 7$ et $f(5) = 7$. Quelle est l'équation de l'axe de symétrie de sa parabole ?",
      "options": [
        "$x = 2$",
        "$x = 3$",
        "$x = 7$",
        "$y = 7$"
      ],
      "correctIndex": 0,
      "answer": "$x = 2$",
      "hint1": "Deux points d'une parabole de même ordonnée sont symétriques par rapport à son axe : l'axe passe par le milieu de leurs abscisses.",
      "hint2": "Calcule la moyenne de $-1$ et de $5$.",
      "solution": "Les points $\\left(-1 ; 7\\right)$ et $\\left(5 ; 7\\right)$ ont la même ordonnée : l'axe de symétrie est la droite verticale d'équation $x = \\frac{-1 + 5}{2} = 2$."
    },
    {
      "id": "1TC5-7",
      "tier": 4,
      "type": "mcq",
      "title": "Hauteur maximale d'un ballon",
      "skill": "Utiliser un modèle quadratique",
      "statement": "Un ballon est lancé depuis le sol ; sa hauteur, en mètres, est $h(x) = -0{,}1\\,x(x - 20)$, où $x$ est la distance horizontale parcourue en mètres. Quelle hauteur maximale atteint-il ?",
      "options": [
        "$20$ m",
        "$10$ m",
        "$5$ m",
        "$40$ m"
      ],
      "correctIndex": 1,
      "answer": "$10$ m",
      "hint1": "Le maximum d'une parabole tournée vers le bas est atteint au sommet, dont l'abscisse est le milieu des deux racines.",
      "hint2": "Les racines sont $0$ et $20$, donc le sommet est atteint pour $x = 10$.",
      "solution": "$a = -0{,}1 < 0$ : la parabole est tournée vers le bas. Le sommet a pour abscisse $\\frac{0 + 20}{2} = 10$ et $h(10) = -0{,}1 \\times 10 \\times (-10) = 10$. La hauteur maximale est $10$ m."
    },
    {
      "id": "1TC5-8",
      "tier": 4,
      "type": "mcq",
      "title": "Aire maximale d’un enclos",
      "skill": "Optimiser une aire",
      "statement": "Avec $40$ m de grillage, on clôture un enclos rectangulaire adossé à un mur : les deux côtés perpendiculaires au mur mesurent $x$ mètres et le côté parallèle au mur $40 - 2x$ mètres. L'aire est $A(x) = x(40 - 2x) = -2x(x - 20)$. Quelle est l'aire maximale ?",
      "options": [
        "$400$ m²",
        "$100$ m²",
        "$200$ m²",
        "$300$ m²"
      ],
      "correctIndex": 2,
      "answer": "$200$ m²",
      "hint1": "Lire les racines sur la forme factorisée : le maximum est atteint au milieu des racines, car le coefficient de la forme factorisée est négatif.",
      "hint2": "Les racines de $A$ sont $0$ et $20$ ; calcule $A(10)$.",
      "solution": "$A(x) = -2x(x - 20)$ a pour racines $0$ et $20$ ; comme $-2 < 0$, le maximum est atteint en $x = \\frac{0 + 20}{2} = 10$. $A(10) = 10 \\times (40 - 20) = 200$ : l'aire maximale est $200$ m², pour un enclos de $10$ m sur $20$ m."
    }
  ],
  "1TC6": [
    {
      "id": "1TC6-1",
      "tier": 1,
      "type": "mcq",
      "title": "Raison et taux",
      "skill": "Passer d'un taux d'évolution à une raison",
      "statement": "Un capital augmente de $3\\,\\%$ par an. Quelle est la raison de la suite géométrique qui modélise ce capital ?",
      "options": [
        "$1{,}3$",
        "$0{,}03$",
        "$1{,}03$",
        "$3$"
      ],
      "correctIndex": 2,
      "answer": "$1{,}03$",
      "hint1": "Une hausse de $t\\,\\%$ correspond au coefficient multiplicateur $1 + \\frac{t}{100}$.",
      "hint2": "Calcule $1 + \\frac{3}{100}$.",
      "solution": "Augmenter de $3\\,\\%$ revient à multiplier par $1 + \\frac{3}{100} = 1{,}03$ : la raison est $q = 1{,}03$."
    },
    {
      "id": "1TC6-2",
      "tier": 2,
      "type": "mcq",
      "title": "Terme d'une suite géométrique",
      "skill": "Calculer un terme d'une suite géométrique",
      "statement": "La suite $u$ est géométrique de premier terme $u(0) = 5$ et de raison $q = 3$. Que vaut $u(4)$ ?",
      "options": [
        "$405$",
        "$60$",
        "$1\\,215$",
        "$17$"
      ],
      "correctIndex": 0,
      "answer": "$405$",
      "hint1": "Le terme général d'une suite géométrique s'obtient en multipliant le premier terme par une puissance de la raison : $u(n) = u(0) \\times q^n$.",
      "hint2": "Calcule $3^4 = 81$, puis multiplie par $5$.",
      "solution": "$u(4) = 5 \\times 3^4 = 5 \\times 81 = 405$."
    },
    {
      "id": "1TC6-3",
      "tier": 1,
      "type": "mcq",
      "title": "Sens de variation d'une fonction exponentielle",
      "skill": "Déterminer le sens de variation de $x \\mapsto a^x$",
      "statement": "Quel est le sens de variation de la fonction $f$ définie sur $\\left[0 ; +\\infty\\right[$ par $f(x) = 0{,}8^x$ ?",
      "options": [
        "Elle est croissante, car $0{,}8 > 0$.",
        "Elle est décroissante, car $0 < 0{,}8 < 1$.",
        "Elle est constante.",
        "Elle est croissante puis décroissante."
      ],
      "correctIndex": 1,
      "answer": "Elle est décroissante, car $0 < 0{,}8 < 1$.",
      "hint1": "Pour $a > 0$, le sens de variation de $x \\mapsto a^x$ dépend de la position de $a$ par rapport à $1$.",
      "hint2": "Compare $0{,}8$ à $1$.",
      "solution": "$0 < 0{,}8 < 1$ : la fonction $x \\mapsto 0{,}8^x$ est décroissante sur $\\left[0 ; +\\infty\\right[$ (une baisse de $20\\,\\%$ à chaque unité)."
    },
    {
      "id": "1TC6-4",
      "tier": 2,
      "type": "mcq",
      "title": "Propriétés des puissances",
      "skill": "Utiliser les propriétés des puissances",
      "statement": "Quelle est la valeur exacte de $5^{1{,}5} \\times 5^{0{,}5}$ ?",
      "options": [
        "$5^{0{,}75}$",
        "$125$",
        "$10$",
        "$25$"
      ],
      "correctIndex": 3,
      "answer": "$25$",
      "hint1": "Pour un produit de deux puissances d'un même nombre positif, on additionne les exposants.",
      "hint2": "$5^{1{,}5} \\times 5^{0{,}5} = 5^{1{,}5 + 0{,}5}$.",
      "solution": "$5^{1{,}5} \\times 5^{0{,}5} = 5^{2} = 25$."
    },
    {
      "id": "1TC6-5",
      "tier": 3,
      "type": "mcq",
      "title": "Exposant $\\frac{1}{n}$",
      "skill": "Calculer une puissance d’exposant $\\frac{1}{n}$",
      "statement": "Quel est le nombre positif $x$ tel que $x^4 = 81$ ?",
      "options": [
        "$20{,}25$",
        "$3$",
        "$9$",
        "$324$"
      ],
      "correctIndex": 1,
      "answer": "$3$",
      "hint1": "Le nombre positif dont la puissance $n$-ième vaut $a$ est $a^{\\frac{1}{n}}$ ; on cherche un entier simple dont on connaît les puissances.",
      "hint2": "$x = 81^{\\frac{1}{4}}$ ; écris d'abord $81$ comme le carré d'un entier, puis cet entier lui-même comme un carré.",
      "solution": "$x = 81^{\\frac{1}{4}}$. Comme $3^4 = 9 \\times 9 = 81$ et $3 > 0$, $x = 3$."
    },
    {
      "id": "1TC6-6",
      "tier": 3,
      "type": "mcq",
      "title": "Seuil avec Python",
      "skill": "Interpréter un programme de seuil",
      "statement": "On considère le programme Python suivant :\n```python\nu = 1000\nn = 0\nwhile u >= 500:\n    u = u * 0.8\n    n = n + 1\nprint(n)\n```\nQuelle valeur affiche-t-il ?",
      "options": [
        "$3$",
        "$5$",
        "$4$",
        "$500$"
      ],
      "correctIndex": 2,
      "answer": "$4$",
      "hint1": "La boucle multiplie la valeur par le même coefficient à chaque passage et s'arrête au premier rang où la condition devient fausse : dresser la liste des valeurs successives.",
      "hint2": "Les premières valeurs sont $1\\,000$, $800$, $640$… continue jusqu'à passer sous $500$.",
      "solution": "$u$ prend les valeurs $1\\,000$ ($n = 0$), $800$ ($n = 1$), $640$ ($n = 2$), $512$ ($n = 3$) puis $409{,}6$ ($n = 4$). Comme $512 \\geqslant 500$, la boucle continue une fois de plus ; $409{,}6 < 500$ l'arrête : le programme affiche $4$."
    },
    {
      "id": "1TC6-7",
      "tier": 4,
      "type": "mcq",
      "title": "Taux d'évolution moyen",
      "skill": "Calculer un taux d'évolution moyen",
      "statement": "Le nombre d'adhérents d'une association est passé de $1\\,000$ en 2020 à $1\\,331$ en 2023. Quel est le taux d'évolution annuel moyen sur cette période ?",
      "options": [
        "$11{,}03\\,\\%$",
        "$33{,}1\\,\\%$",
        "$9\\,\\%$",
        "$10\\,\\%$"
      ],
      "correctIndex": 3,
      "answer": "$10\\,\\%$",
      "hint1": "Calculer le coefficient multiplicateur global, puis prendre sa puissance d'exposant $\\frac{1}{n}$, où $n$ est le nombre de périodes.",
      "hint2": "Le coefficient global est $\\frac{1\\,331}{1\\,000} = 1{,}331$ sur $3$ ans.",
      "solution": "$C = 1{,}331$ sur $3$ ans, donc $1 + t_m = 1{,}331^{\\frac{1}{3}}$. Or $1{,}1^3 = 1{,}331$, donc $1 + t_m = 1{,}1$ : le taux annuel moyen est de $10\\,\\%$ (et non $\\frac{33{,}1}{3} \\approx 11{,}03\\,\\%$)."
    },
    {
      "id": "1TC6-8",
      "tier": 4,
      "type": "mcq",
      "title": "Linéaire ou exponentiel",
      "skill": "Comparer une croissance linéaire et une croissance exponentielle",
      "statement": "On place $1\\,000$ €. Placement A : on ajoute $60$ € chaque année. Placement B : le capital augmente de $5\\,\\%$ chaque année. Au bout de $2$ ans, quel placement rapporte le plus, et de combien ?",
      "options": [
        "Le placement A, de $17{,}50$ €.",
        "Le placement B, de $17{,}50$ €.",
        "Les deux sont égaux.",
        "Le placement A, de $10$ €."
      ],
      "correctIndex": 0,
      "answer": "Le placement A, de $17{,}50$ €.",
      "hint1": "Le placement A suit une suite arithmétique, le placement B une suite géométrique : calculer les deux capitaux au même rang, puis comparer.",
      "hint2": "$A(2) = 1\\,000 + 2 \\times 60$ et $B(2) = 1\\,000 \\times 1{,}05^2$.",
      "solution": "$A(2) = 1\\,120$ € ; $1{,}05^2 = 1{,}102\\,5$ donc $B(2) = 1\\,102{,}50$ €. Le placement A rapporte $17{,}50$ € de plus au bout de $2$ ans (à long terme, la croissance exponentielle finira cependant par l'emporter)."
    }
  ]
};

window.MATHS_WORKSHEETS_1TC = {};

// Fusion automatique dans les registres globaux
if (!window.MATHS_COURSES) window.MATHS_COURSES = {};
if (!window.MATHS_EXERCISES) window.MATHS_EXERCISES = {};
if (!window.MATHS_WORKSHEETS) window.MATHS_WORKSHEETS = {};

Object.assign(window.MATHS_COURSES, window.MATHS_COURSES_1TC);
Object.assign(window.MATHS_EXERCISES, window.MATHS_EXERCISES_1TC);
Object.assign(window.MATHS_WORKSHEETS, window.MATHS_WORKSHEETS_1TC);
