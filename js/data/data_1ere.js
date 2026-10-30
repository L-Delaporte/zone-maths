/**
 * Données pédagogiques officielles de la classe de Première Spécialité Mathématiques
 * Conforme aux programmes officiels de l'Éducation nationale
 */

window.MATHS_COURSES_1ERE = {
  "1A1": {
    "title": "1A1 : Polynôme du second degré : forme canonique, racines et signe",
    "domain": "Analyse et Fonctions",
    "objectives": [
      "Mettre un trinôme du second degré $P(x) = ax^2 + bx + c$ sous forme canonique.",
      "Calculer le discriminant $\\Delta = b^2 - 4ac$ et déterminer le nombre et la valeur des racines réelles.",
      "Factoriser un trinôme lorsque $\\Delta \\ge 0$ et étudier son signe sur $\\mathbb{R}$.",
      "Résoudre des équations et inéquations du second degré.",
      "Utiliser la somme $-\\frac{b}{a}$ et le produit $\\frac{c}{a}$ des racines, et choisir la forme (développée, canonique, factorisée) la mieux adaptée à la question posée."
    ],
    "keyPoints": [
      {
        "title": "1. Forme canonique d'un trinôme",
        "content": "Tout trinôme $P(x) = ax^2 + bx + c$ ($a \\neq 0$) peut s'écrire sous forme canonique :\n$$P(x) = a(x - \\alpha)^2 + \\beta$$\navec : $$\\alpha = -\\frac{b}{2a} \\quad \\text{et} \\quad \\beta = P(\\alpha) = -\\frac{b^2 - 4ac}{4a}$$\nLe sommet de la parabole représentative a pour coordonnées $S(\\alpha ; \\beta)$."
      },
      {
        "title": "2. Discriminant $\\Delta$ et racines réelles",
        "content": "On pose $\\Delta = b^2 - 4ac$ (le **discriminant**) :\n• **Si $\\Delta < 0$** : L'équation $ax^2 + bx + c = 0$ n'a **aucune racine réelle**. Le trinôme ne se factorise pas dans $\\mathbb{R}$.\n• **Si $\\Delta = 0$** : L'équation admet **une racine double** :\n$$x_0 = -\\frac{b}{2a}$$\nForme factorisée : $P(x) = a(x - x_0)^2$.\n• **Si $\\Delta > 0$** : L'équation admet **deux racines réelles distinctes** :\n$$x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a} \\quad \\text{et} \\quad x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a}$$\nForme factorisée : $P(x) = a(x - x_1)(x - x_2)$."
      },
      {
        "title": "3. Signe du trinôme du second degré",
        "content": "• **Règle fondamentale** : Le trinôme $ax^2 + bx + c$ est **du signe de $a$ à l'extérieur des racines**, et du **signe opposé de $a$ entre les racines** (si $\\Delta > 0$).\n• Si $\\Delta \\le 0$, le trinôme est constamment du signe de $a$ sur $\\mathbb{R}$ (s'annulant seulement en $x_0$ si $\\Delta = 0$)."
      },
      {
        "title": "4. Parabole, sommet et variations",
        "content": "La courbe représentative de $x \\mapsto ax^2 + bx + c$ est une **parabole** d'axe de symétrie la droite d'équation $x = \\alpha = -\\frac{b}{2a}$ et de sommet $S(\\alpha ; \\beta)$.\n• **Si $a > 0$** : la fonction est décroissante sur $]-\\infty ; \\alpha]$ puis croissante sur $[\\alpha ; +\\infty[$ ; elle admet un **minimum** $\\beta$ atteint en $\\alpha$.\n• **Si $a < 0$** : la fonction est croissante sur $]-\\infty ; \\alpha]$ puis décroissante sur $[\\alpha ; +\\infty[$ ; elle admet un **maximum** $\\beta$ atteint en $\\alpha$.\n*Exemple* : pour $f(x) = x^2 - 4x + 1$, $\\alpha = 2$ et $\\beta = f(2) = -3$ : minimum $-3$ atteint en $x = 2$."
      },
      {
        "title": "5. Somme et produit des racines",
        "content": "Si $\\Delta \\ge 0$ et si $x_1$ et $x_2$ sont les racines (éventuellement égales) de $ax^2 + bx + c$, alors :\n$$x_1 + x_2 = -\\frac{b}{a} \\quad \\text{et} \\quad x_1 x_2 = \\frac{c}{a}$$\n*Exemple* : $x^2 - 5x + 6$ a pour racines $2$ et $3$ ; on vérifie que $2 + 3 = 5 = -\\frac{-5}{1}$ et $2 \\times 3 = 6 = \\frac{6}{1}$."
      },
      {
        "title": "6. Racine évidente",
        "content": "Lorsqu'une racine $x_1 \\neq 0$ se « voit » (souvent $1$, $-1$, $2$…), on obtient l'autre sans calculer $\\Delta$ grâce au produit : $x_2 = \\frac{c}{a x_1}$.\n*Exemple* : pour $2x^2 + 3x - 5$, on a $2 + 3 - 5 = 0$, donc $x_1 = 1$ est racine. Alors $x_2 = \\frac{-5}{2 \\times 1} = -\\frac{5}{2}$ et $2x^2 + 3x - 5 = 2(x - 1)\\left(x + \\frac{5}{2}\\right)$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Résoudre une inéquation du second degré",
        "example": "Résoudre dans $\\mathbb{R}$ l'inéquation $2x^2 - 5x - 3 \\le 0$.",
        "steps": [
          "**Étape 1 (Discriminant)** : $a = 2$, $b = -5$, $c = -3$. $\\Delta = (-5)^2 - 4(2)(-3) = 25 + 24 = 49 = 7^2 > 0$.",
          "**Étape 2 (Racines)** : $x_1 = \\frac{5 - 7}{4} = -\\frac{1}{2}$ et $x_2 = \\frac{5 + 7}{4} = 3$.",
          "**Étape 3 (Signe)** : Comme $a = 2 > 0$, la parabole est tournée vers le haut. Le trinôme est négatif ou nul entre les racines.",
          "**Étape 4 (Conclusion)** : $S = \\left[-\\frac{1}{2} ; 3\\right]$."
        ]
      },
      {
        "title": "Méthode : Mettre un trinôme sous forme canonique",
        "example": "Écrire $P(x) = 2x^2 - 12x + 10$ sous forme canonique, puis en déduire ses racines et sa forme factorisée.",
        "steps": [
          "**Étape 1 (Factoriser par $a$ les termes en $x$)** : $P(x) = 2(x^2 - 6x) + 10$.",
          "**Étape 2 (Faire apparaître un carré)** : $x^2 - 6x = (x - 3)^2 - 9$, donc $P(x) = 2\\left[(x - 3)^2 - 9\\right] + 10 = 2(x - 3)^2 - 18 + 10 = 2(x - 3)^2 - 8$.",
          "**Étape 3 (Contrôle)** : $\\alpha = -\\frac{-12}{2 \\times 2} = 3$ et $\\beta = P(3) = 18 - 36 + 10 = -8$. C'est cohérent.",
          "**Étape 4 (Racines)** : $P(x) = 0 \\iff (x - 3)^2 = 4 \\iff x - 3 = 2$ ou $x - 3 = -2 \\iff x = 5$ ou $x = 1$.",
          "**Conclusion** : $P(x) = 2(x - 3)^2 - 8 = 2(x - 1)(x - 5)$. Le sommet de la parabole est $S(3 ; -8)$."
        ]
      },
      {
        "title": "Méthode : Résoudre une équation par changement de variable",
        "example": "Résoudre dans $\\mathbb{R}$ l'équation $x^4 - 5x^2 + 4 = 0$.",
        "steps": [
          "**Étape 1 (Changement de variable)** : on pose $X = x^2$ (avec $X \\ge 0$). L'équation devient $X^2 - 5X + 4 = 0$.",
          "**Étape 2 (Discriminant)** : $\\Delta = (-5)^2 - 4 \\times 1 \\times 4 = 25 - 16 = 9 = 3^2 > 0$.",
          "**Étape 3 (Racines en $X$)** : $X_1 = \\frac{5 - 3}{2} = 1$ et $X_2 = \\frac{5 + 3}{2} = 4$, toutes deux positives.",
          "**Étape 4 (Retour à $x$)** : $x^2 = 1 \\iff x = -1$ ou $x = 1$ ; $x^2 = 4 \\iff x = -2$ ou $x = 2$.",
          "**Conclusion** : $S = \\{-2 ; -1 ; 1 ; 2\\}$."
        ]
      },
      {
        "title": "Méthode : Résoudre un problème conduisant au second degré",
        "example": "Un rectangle a un périmètre de $20$ cm et une aire de $21 \\text{ cm}^2$. Déterminer ses dimensions.",
        "steps": [
          "**Étape 1 (Mise en équation)** : si $x$ est la longueur d'un côté, l'autre côté mesure $10 - x$ (demi-périmètre $10$). L'aire donne $x(10 - x) = 21$, soit $x^2 - 10x + 21 = 0$.",
          "**Étape 2 (Discriminant)** : $\\Delta = (-10)^2 - 4 \\times 1 \\times 21 = 100 - 84 = 16 = 4^2$.",
          "**Étape 3 (Racines)** : $x_1 = \\frac{10 - 4}{2} = 3$ et $x_2 = \\frac{10 + 4}{2} = 7$.",
          "**Conclusion** : le rectangle mesure $3$ cm sur $7$ cm (contrôle : $2(3 + 7) = 20$ et $3 \\times 7 = 21$)."
        ]
      }
    ],
    "traps": [
      "⚠️ Attention au carré d'un nombre négatif : $(-5)^2 = +25$ et non $-25$ !",
      "⚠️ Ne pas oublier de multiplier par $a$ dans la forme factorisée : $a(x - x_1)(x - x_2)$.",
      "⚠️ Pour résoudre une inéquation, on se ramène d'abord à une comparaison avec $0$ : $x^2 > 4x \\iff x^2 - 4x > 0 \\iff x(x - 4) > 0$. Ne divisez jamais par $x$, dont le signe est inconnu !",
      "⚠️ $\\Delta < 0$ ne veut pas dire que le trinôme est négatif : il est alors **du signe de $a$** sur $\\mathbb{R}$.",
      "⚠️ Dans la forme canonique $a(x - \\alpha)^2 + \\beta$, attention au signe de $\\alpha$ : pour $2(x + 3)^2 - 1$, on a $\\alpha = -3$ (et non $3$)."
    ],
    "flashcards": [
      {
        "q": "Quelle est la formule du discriminant $\\Delta$ d'un trinôme $ax^2 + bx + c$ ?",
        "a": "$\\Delta = b^2 - 4ac$."
      },
      {
        "q": "Quel est le signe d'un trinôme lorsque $\\Delta < 0$ ?",
        "a": "Il est du signe de $a$ sur $\\mathbb{R}$ tout entier (il ne s'annule jamais)."
      },
      {
        "q": "Que valent la somme et le produit des racines de $ax^2 + bx + c$ (lorsque $\\Delta \\ge 0$) ?",
        "a": "$x_1 + x_2 = -\\frac{b}{a}$ et $x_1 x_2 = \\frac{c}{a}$."
      },
      {
        "q": "Quelles sont les coordonnées du sommet de la parabole d'équation $y = x^2 - 4x + 1$ ?",
        "a": "$\\alpha = -\\frac{-4}{2} = 2$ et $\\beta = 4 - 8 + 1 = -3$, donc $S(2 ; -3)$."
      },
      {
        "q": "Factoriser $x^2 - x - 6$.",
        "a": "$\\Delta = 1 + 24 = 25$, racines $-2$ et $3$ : $x^2 - x - 6 = (x + 2)(x - 3)$."
      }
    ]
  },

  "1A2": {
    "title": "1A2 : Nombre dérivé, taux de variation et tangente à une courbe",
    "domain": "Analyse et Fonctions",
    "objectives": [
      "Définir le taux de variation d'une fonction entre $a$ et $a+h$ : $\\tau(h) = \\frac{f(a+h) - f(a)}{h}$.",
      "Définir le nombre dérivé $f'(a)$ comme la limite finie quand $h \\to 0$ du taux de variation.",
      "Interpréter géométriquement $f'(a)$ comme le coefficient directeur de la tangente $\\mathcal{T}_a$ à la courbe au point d'abscisse $a$.",
      "Écrire et exploiter l'équation réduite de la tangente : $y = f'(a)(x - a) + f(a)$."
    ],
    "keyPoints": [
      {
        "title": "1. Taux de variation et définition du nombre dérivé",
        "content": "Soit $f$ une fonction définie sur un intervalle $I$ et $a \\in I$. Pour $h \\neq 0$ tel que $a+h \\in I$ :\n• Le **taux de variation** de $f$ entre $a$ et $a+h$ est la pente de la droite sécante $(AB)$ :\n$$\\frac{f(a+h) - f(a)}{h}$$\n• $f$ est dite **dérivable en $a$** si ce taux de variation admet une limite finie $\\ell$ lorsque $h$ tend vers 0 :\n$$f'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$$\nCe réel $f'(a)$ est le **nombre dérivé** de $f$ en $a$."
      },
      {
        "title": "2. Équation de la tangente à la courbe",
        "content": "La tangente $\\mathcal{T}_a$ à la courbe $\\mathcal{C}_f$ au point $A(a ; f(a))$ est la droite de coefficient directeur $f'(a)$ passant par $A$.\nSon équation réduite est :\n$$y = f'(a)(x - a) + f(a)$$"
      },
      {
        "title": "3. Calculer un nombre dérivé avec la définition",
        "content": "On calcule le taux de variation, on le **simplifie par $h$**, puis on cherche sa limite quand $h$ tend vers $0$.\n*Exemple* : pour $f(x) = x^2$ et un réel $a$ :\n$$\\frac{f(a+h) - f(a)}{h} = \\frac{a^2 + 2ah + h^2 - a^2}{h} = \\frac{h(2a + h)}{h} = 2a + h$$\nQuand $h$ tend vers $0$, $2a + h$ tend vers $2a$ : la fonction carré est dérivable en tout réel $a$ et $f'(a) = 2a$."
      },
      {
        "title": "4. Une fonction non dérivable : la valeur absolue en $0$",
        "content": "Pour $f(x) = |x|$ et $a = 0$, le taux de variation vaut $\\frac{|h| - 0}{h} = \\frac{|h|}{h}$, c'est-à-dire $1$ si $h > 0$ et $-1$ si $h < 0$.\nCe taux ne se rapproche pas d'un seul nombre quand $h$ tend vers $0$ : la fonction valeur absolue **n'est pas dérivable en $0$**. Graphiquement, sa courbe présente un **point anguleux** à l'origine : il n'y a pas de tangente."
      },
      {
        "title": "5. Tangente et approximation affine",
        "content": "Près du point $A(a ; f(a))$, la courbe et sa tangente sont très proches. Pour $h$ proche de $0$ :\n$$f(a + h) \\approx f(a) + f'(a)\\,h$$\n*Exemple* : pour $f(x) = \\sqrt{x}$, on admet que $f'(1) = \\frac{1}{2}$, donc $\\sqrt{1{,}02} \\approx 1 + \\frac{1}{2} \\times 0{,}02 = 1{,}01$ (la calculatrice donne $1{,}00995\\ldots$)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Déterminer l'équation de la tangente en un point",
        "example": "Soit $f(x) = x^2 - 3x + 1$. Déterminer l'équation de la tangente à $\\mathcal{C}_f$ en $x = 2$, sachant que $f'(2) = 1$.",
        "steps": [
          "**Étape 1 (Image de a)** : Calculer $f(2) = 2^2 - 3(2) + 1 = 4 - 6 + 1 = -1$. Le point de contact est $A(2 ; -1)$.",
          "**Étape 2 (Formule)** : On applique $y = f'(a)(x - a) + f(a)$ avec $a = 2$, $f'(2) = 1$ et $f(2) = -1$.",
          "**Étape 3 (Développement)** : $y = 1(x - 2) + (-1) = x - 2 - 1 = x - 3$. L'équation de la tangente est $y = x - 3$."
        ]
      },
      {
        "title": "Méthode : Calculer un nombre dérivé à partir du taux de variation",
        "example": "Soit $f(x) = x^2 - 3x + 1$. Démontrer que $f$ est dérivable en $2$ et calculer $f'(2)$.",
        "steps": [
          "**Étape 1 (Calcul de $f(2+h)$)** : $f(2+h) = (2+h)^2 - 3(2+h) + 1 = 4 + 4h + h^2 - 6 - 3h + 1 = h^2 + h - 1$.",
          "**Étape 2 (Calcul de $f(2)$)** : $f(2) = 4 - 6 + 1 = -1$.",
          "**Étape 3 (Taux de variation, pour $h \\neq 0$)** : $\\frac{f(2+h) - f(2)}{h} = \\frac{h^2 + h - 1 + 1}{h} = \\frac{h(h + 1)}{h} = h + 1$.",
          "**Étape 4 (Limite)** : quand $h$ tend vers $0$, $h + 1$ tend vers $1$.",
          "**Conclusion** : $f$ est dérivable en $2$ et $f'(2) = 1$ (valeur utilisée dans la méthode de la tangente ci-dessus)."
        ]
      },
      {
        "title": "Méthode : Lire graphiquement un nombre dérivé",
        "example": "Sur un graphique, la tangente à $\\mathcal{C}_f$ au point $A(1 ; 2)$ passe aussi par le point $B(3 ; -2)$. Déterminer $f(1)$, $f'(1)$ et l'équation de cette tangente.",
        "steps": [
          "**Étape 1 (Image)** : $A(1 ; 2)$ est sur la courbe, donc $f(1) = 2$.",
          "**Étape 2 (Coefficient directeur)** : $f'(1)$ est la pente de la tangente $(AB)$ : $f'(1) = \\frac{y_B - y_A}{x_B - x_A} = \\frac{-2 - 2}{3 - 1} = \\frac{-4}{2} = -2$.",
          "**Étape 3 (Équation)** : $y = f'(1)(x - 1) + f(1) = -2(x - 1) + 2 = -2x + 4$.",
          "**Conclusion** : $f(1) = 2$, $f'(1) = -2$ et la tangente a pour équation $y = -2x + 4$ (on vérifie : en $x = 3$, $y = -2$, c'est bien $B$)."
        ]
      },
      {
        "title": "Méthode : Trouver le point où la tangente a une pente donnée",
        "example": "Soit $f(x) = x^2$ (on a vu que $f'(a) = 2a$). En quel point de $\\mathcal{C}_f$ la tangente est-elle parallèle à la droite $\\Delta : y = 4x - 1$ ? Donner son équation.",
        "steps": [
          "**Étape 1 (Traduction)** : deux droites sont parallèles si elles ont le même coefficient directeur ; on cherche $a$ tel que $f'(a) = 4$.",
          "**Étape 2 (Résolution)** : $2a = 4 \\iff a = 2$, et $f(2) = 4$ : le point cherché est $A(2 ; 4)$.",
          "**Étape 3 (Équation)** : $y = f'(2)(x - 2) + f(2) = 4(x - 2) + 4 = 4x - 4$.",
          "**Conclusion** : la tangente en $A(2 ; 4)$, d'équation $y = 4x - 4$, est parallèle à $\\Delta$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas confondre $f(a)$ (l'ordonnée du point) et $f'(a)$ (la pente de la tangente en ce point) !",
      "⚠️ Si la tangente est horizontale, alors $f'(a) = 0$ et son équation est simplement $y = f(a)$.",
      "⚠️ Dans le taux de variation, on **simplifie par $h$ avant** de faire tendre $h$ vers $0$ : remplacer directement $h$ par $0$ donne la forme $\\frac{0}{0}$, qui n'a pas de sens.",
      "⚠️ Une courbe tracée « sans lever le crayon » n'a pas forcément une tangente en chaque point : $x \\mapsto |x|$ n'est pas dérivable en $0$.",
      "⚠️ Pour lire une pente, on calcule $\\frac{\\text{variation des ordonnées}}{\\text{variation des abscisses}}$ (et non l'inverse), en tenant compte des graduations des axes."
    ],
    "flashcards": [
      {
        "q": "Quelle est l'équation réduite de la tangente à $\\mathcal{C}_f$ au point d'abscisse $a$ ?",
        "a": "$y = f'(a)(x - a) + f(a)$."
      },
      {
        "q": "Que vaut le nombre dérivé $f'(a)$ si la tangente en $a$ est horizontale ?",
        "a": "$f'(a) = 0$."
      },
      {
        "q": "Pour $f(x) = x^2$, que vaut $f'(3)$ ?",
        "a": "$f'(a) = 2a$, donc $f'(3) = 6$."
      },
      {
        "q": "Pour $f(x) = \\frac{1}{x}$ et $a \\neq 0$, simplifier le taux de variation entre $a$ et $a+h$ et en déduire $f'(a)$.",
        "a": "$\\frac{\\frac{1}{a+h} - \\frac{1}{a}}{h} = \\frac{-1}{a(a+h)}$, qui tend vers $-\\frac{1}{a^2}$ : $f'(a) = -\\frac{1}{a^2}$."
      },
      {
        "q": "Pourquoi la fonction valeur absolue n'est-elle pas dérivable en $0$ ?",
        "a": "Son taux de variation en $0$ vaut $1$ pour $h > 0$ et $-1$ pour $h < 0$ : il n'a pas de limite quand $h$ tend vers $0$."
      }
    ]
  },

  "1A3": {
    "title": "1A3 : Fonction dérivée, règles de dérivation et variations d'une fonction",
    "domain": "Analyse et Fonctions",
    "objectives": [
      "Connaître les dérivées des fonctions usuelles : $x^n, \\frac{1}{x}, \\sqrt{x}, ax+b$.",
      "Maîtriser les formules de dérivation : $(u+v)' = u'+v'$, $(ku)' = ku'$, $(uv)' = u'v + uv'$ et $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$.",
      "Établir le lien fondamental entre le signe de la dérivée $f'(x)$ et le sens de variation de $f$.",
      "Déterminer les extremums locaux d'une fonction dérivable."
    ],
    "keyPoints": [
      {
        "title": "1. Tableau des dérivées usuelles",
        "content": "• Constante $k$ : $(k)' = 0$\n• Fonction identité $x$ : $(x)' = 1$\n• Puissance $x^n$ ($n \\in \\mathbb{Z}^*$, avec $x \\neq 0$ si $n < 0$) : $(x^n)' = n x^{n-1}$\n• Inverse $\\frac{1}{x}$ : $\\left(\\frac{1}{x}\\right)' = -\\frac{1}{x^2}$\n• Racine carrée $\\sqrt{x}$ : $(\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}$ (sur $]0 ; +\\infty[$)\n• Fonction exponentielle $e^x$ : $(e^x)' = e^x$"
      },
      {
        "title": "2. Théorème fondamental de la dérivation et variations",
        "content": "Soit $f$ dérivable sur un intervalle $I$ :\n• Si $f'(x) > 0$ sur $I$ (sauf éventuellement en un nombre fini de points où $f'(x)=0$), alors $f$ est **strictement croissante** sur $I$.\n• Si $f'(x) < 0$ sur $I$, alors $f$ est **strictement décroissante** sur $I$.\n• Si $f'(x) = 0$ sur $I$, alors $f$ est **constante** sur $I$."
      },
      {
        "title": "3. Dérivée de l'inverse et de $x \\mapsto g(ax + b)$",
        "content": "• Si $v$ est dérivable et ne s'annule pas sur $I$ : $$\\left(\\frac{1}{v}\\right)' = -\\frac{v'}{v^2}$$\n*Exemple* : $\\left(\\frac{1}{x^2 + 1}\\right)' = -\\frac{2x}{(x^2 + 1)^2}$.\n• Si $g$ est dérivable, la fonction $x \\mapsto g(ax + b)$ a pour dérivée $$x \\mapsto a\\,g'(ax + b)$$\n*Exemples* : la dérivée de $(3x - 1)^4$ est $3 \\times 4(3x - 1)^3 = 12(3x - 1)^3$ ; la dérivée de $\\sqrt{2x + 1}$ est $2 \\times \\frac{1}{2\\sqrt{2x + 1}} = \\frac{1}{\\sqrt{2x + 1}}$ sur $\\left]-\\frac{1}{2} ; +\\infty\\right[$."
      },
      {
        "title": "4. Extremum local et dérivée",
        "content": "Soit $f$ dérivable sur un intervalle ouvert $I$ et $c \\in I$.\n• Si $f$ admet un extremum local en $c$, alors $f'(c) = 0$.\n• Si $f'$ **s'annule en changeant de signe** en $c$, alors $f(c)$ est un extremum local : maximum si $f'$ passe de $+$ à $-$, minimum si $f'$ passe de $-$ à $+$.\n*Contre-exemple* : pour $f(x) = x^3$, $f'(x) = 3x^2$ s'annule en $0$ **sans changer de signe** : $f$ est croissante sur $\\mathbb{R}$ et $f(0)$ n'est pas un extremum."
      },
      {
        "title": "5. Dérivabilité de la racine carrée",
        "content": "La fonction $x \\mapsto \\sqrt{x}$ est définie sur $[0 ; +\\infty[$ mais dérivable seulement sur $]0 ; +\\infty[$ : en $0$, le taux de variation $\\frac{\\sqrt{h}}{h} = \\frac{1}{\\sqrt{h}}$ (pour $h > 0$) devient aussi grand que l'on veut. La courbe admet en l'origine une tangente verticale."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Étudier les variations d'une fonction quotient",
        "example": "Étudier les variations de $f(x) = \\frac{2x - 1}{x + 3}$ sur $]-3 ; +\\infty[$.",
        "steps": [
          "**Étape 1 (Formule du quotient)** : On pose $u(x) = 2x - 1 \\implies u'(x) = 2$ et $v(x) = x + 3 \\implies v'(x) = 1$.",
          "**Étape 2 (Calcul de f')** : $f'(x) = \\frac{u'v - uv'}{v^2} = \\frac{2(x + 3) - (2x - 1)(1)}{(x + 3)^2} = \\frac{2x + 6 - 2x + 1}{(x + 3)^2} = \\frac{7}{(x + 3)^2}$.",
          "**Étape 3 (Signe et variations)** : Le numérateur $7 > 0$ et le dénominateur $(x + 3)^2 > 0$, donc $f'(x) > 0$ pour tout $x \\in ]-3 ; +\\infty[$. $f$ est strictement croissante sur cet intervalle."
        ]
      },
      {
        "title": "Méthode : Dresser le tableau de variations d'un polynôme de degré 3",
        "example": "Étudier les variations de $f(x) = x^3 - 3x^2 - 9x + 5$ sur $\\mathbb{R}$ et préciser ses extremums locaux.",
        "steps": [
          "**Étape 1 (Dérivée)** : $f'(x) = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3)$.",
          "**Étape 2 (Racines)** : pour $x^2 - 2x - 3$, $\\Delta = 4 + 12 = 16$, d'où $x_1 = \\frac{2 - 4}{2} = -1$ et $x_2 = \\frac{2 + 4}{2} = 3$. Ainsi $f'(x) = 3(x + 1)(x - 3)$.",
          "**Étape 3 (Signe de $f'$)** : trinôme avec $a = 3 > 0$ : $f'(x) > 0$ sur $]-\\infty ; -1[$ et sur $]3 ; +\\infty[$, $f'(x) < 0$ sur $]-1 ; 3[$.",
          "**Étape 4 (Valeurs aux bornes)** : $f(-1) = -1 - 3 + 9 + 5 = 10$ et $f(3) = 27 - 27 - 27 + 5 = -22$.",
          "**Conclusion** : $f$ est croissante sur $]-\\infty ; -1]$, décroissante sur $[-1 ; 3]$, croissante sur $[3 ; +\\infty[$. Maximum local $10$ en $x = -1$, minimum local $-22$ en $x = 3$."
        ]
      },
      {
        "title": "Méthode : Résoudre un problème d'optimisation",
        "example": "Dans une plaque carrée de $12$ cm de côté, on découpe aux quatre coins un carré de côté $x$ cm, puis on replie pour former une boîte sans couvercle. Pour quelle valeur de $x$ le volume est-il maximal ?",
        "steps": [
          "**Étape 1 (Modélisation)** : le fond est un carré de côté $12 - 2x$ et la hauteur vaut $x$, donc $V(x) = x(12 - 2x)^2$ pour $x \\in ]0 ; 6[$.",
          "**Étape 2 (Dérivée d'un produit)** : avec $u = x$ et $v = (12 - 2x)^2$, on a $v' = -2 \\times 2(12 - 2x) = -4(12 - 2x)$. Donc $V'(x) = (12 - 2x)^2 - 4x(12 - 2x) = (12 - 2x)(12 - 6x)$.",
          "**Étape 3 (Signe)** : sur $]0 ; 6[$, $12 - 2x > 0$ ; et $12 - 6x > 0 \\iff x < 2$. Donc $V' > 0$ sur $]0 ; 2[$ et $V' < 0$ sur $]2 ; 6[$.",
          "**Étape 4 (Maximum)** : $V$ est croissante puis décroissante, son maximum est $V(2) = 2 \\times 8^2 = 128$.",
          "**Conclusion** : le volume est maximal pour $x = 2$ cm ; il vaut alors $128 \\text{ cm}^3$."
        ]
      },
      {
        "title": "Méthode : Démontrer une inégalité en étudiant une fonction",
        "example": "Démontrer que pour tout $x \\ge 0$, $x^3 \\ge 3x - 2$.",
        "steps": [
          "**Étape 1 (Fonction différence)** : on pose $g(x) = x^3 - 3x + 2$ sur $[0 ; +\\infty[$ ; il s'agit de montrer que $g(x) \\ge 0$.",
          "**Étape 2 (Dérivée)** : $g'(x) = 3x^2 - 3 = 3(x - 1)(x + 1)$. Sur $[0 ; +\\infty[$, $x + 1 > 0$, donc $g'(x)$ est du signe de $x - 1$.",
          "**Étape 3 (Variations)** : $g$ est décroissante sur $[0 ; 1]$ et croissante sur $[1 ; +\\infty[$ ; son minimum est $g(1) = 1 - 3 + 2 = 0$.",
          "**Conclusion** : pour tout $x \\ge 0$, $g(x) \\ge g(1) = 0$, c'est-à-dire $x^3 \\ge 3x - 2$."
        ]
      }
    ],
    "traps": [
      "⚠️ Erreur classique sur la dérivée d'un produit : $(uv)' \\neq u'v'$ ! C'est $u'v + uv'$.",
      "⚠️ Attention au signe moins dans la formule du quotient : $(u'v - uv')/v^2$.",
      "⚠️ $f'(c) = 0$ ne suffit pas pour avoir un extremum : il faut que $f'$ **change de signe** en $c$ (contre-exemple : $x^3$ en $0$).",
      "⚠️ Pour $(2x + 1)^3$, la dérivée est $3 \\times 2(2x + 1)^2 = 6(2x + 1)^2$ : ne pas oublier le facteur $a = 2$.",
      "⚠️ Le signe de $f'$ s'étudie sur l'ensemble de dérivabilité : $\\sqrt{x}$ n'est pas dérivable en $0$, $\\frac{1}{x}$ n'est pas définie en $0$."
    ],
    "flashcards": [
      {
        "q": "Quelle est la dérivée de $f(x) = x^4$ ?",
        "a": "$f'(x) = 4x^3$."
      },
      {
        "q": "Quelle est la formule de dérivation d'un produit $(u \\times v)'$ ?",
        "a": "$(uv)' = u'v + uv'$."
      },
      {
        "q": "Quelle est la dérivée de $\\frac{1}{v}$ ?",
        "a": "$\\left(\\frac{1}{v}\\right)' = -\\frac{v'}{v^2}$ (là où $v$ ne s'annule pas)."
      },
      {
        "q": "Dériver $f(x) = (5x - 2)^3$.",
        "a": "$f'(x) = 5 \\times 3(5x - 2)^2 = 15(5x - 2)^2$."
      },
      {
        "q": "Quand $f(c)$ est-il un maximum local pour $f$ dérivable ?",
        "a": "Lorsque $f'$ s'annule en $c$ en passant du signe $+$ au signe $-$."
      }
    ]
  },

  "1A4": {
    "title": "1A4 : La fonction exponentielle : définition, propriétés et étude",
    "domain": "Analyse et Fonctions",
    "objectives": [
      "Connaître la définition de la fonction exponentielle : unique fonction dérivable sur $\\mathbb{R}$ vérifiant $f' = f$ et $f(0) = 1$.",
      "Maîtriser les propriétés algébriques : $e^{a+b} = e^a e^b$, $e^{-a} = \\frac{1}{e^a}$, $e^{a-b} = \\frac{e^a}{e^b}$ et $(e^a)^n = e^{na}$.",
      "Savoir que pour tout réel $x$, $e^x > 0$ (stricte positivité).",
      "Dériver les fonctions de la forme $x \\mapsto e^{ax+b}$ : $(e^{ax+b})' = a\\,e^{ax+b}$."
    ],
    "keyPoints": [
      {
        "title": "1. Propriétés algébriques de la fonction exponentielle",
        "content": "La fonction exponentielle transforme une **somme en produit** :\n• $e^0 = 1$ et $e^1 = e \\approx 2{,}718$\n• $e^{x+y} = e^x \\times e^y$\n• $e^{-x} = \\frac{1}{e^x}$\n• $e^{x-y} = \\frac{e^x}{e^y}$\n• $(e^x)^n = e^{nx}$ pour tout $n \\in \\mathbb{Z}$"
      },
      {
        "title": "2. Variations et dérivée de $x \\mapsto e^{ax+b}$",
        "content": "• La fonction exponentielle est **strictement positive** ($e^x > 0$) et **strictement croissante** sur $\\mathbb{R}$.\n• Résolution : $e^a = e^b \\iff a = b$ et $e^a < e^b \\iff a < b$.\n• Pour tous réels $a$ et $b$, la fonction $x \\mapsto e^{ax+b}$ est dérivable sur $\\mathbb{R}$ et :\n$$(e^{ax+b})' = a\\,e^{ax+b}$$\n*(La formule générale $(e^{u})' = u'e^{u}$ sera vue en Terminale.)*"
      },
      {
        "title": "3. Signe de $e^x - 1$ et tangente en $0$",
        "content": "Comme $e^0 = 1$ et que l'exponentielle est strictement croissante :\n• $e^x > 1 \\iff x > 0$ et $e^x < 1 \\iff x < 0$.\n• Puisque $\\exp'(0) = e^0 = 1$, la tangente à la courbe au point d'abscisse $0$ a pour équation $y = 1 \\times (x - 0) + 1$, soit $y = x + 1$."
      },
      {
        "title": "4. Les fonctions $t \\mapsto e^{kt}$ et les suites $(e^{na})$",
        "content": "• Pour un réel $k$, la fonction $t \\mapsto e^{kt}$ est dérivable sur $\\mathbb{R}$, de dérivée $t \\mapsto k\\,e^{kt}$. Elle est **strictement croissante si $k > 0$** et **strictement décroissante si $k < 0$**. Elle modélise des croissances ou décroissances « exponentielles » (populations, désintégration radioactive…).\n• Pour un réel $a$, la suite $(e^{na})$ est **géométrique de raison $e^a$**, car $e^{(n+1)a} = e^{na} \\times e^{a}$.\n*Exemple* : $u_n = e^{0{,}5n}$ est géométrique de raison $e^{0{,}5} \\approx 1{,}649$."
      },
      {
        "title": "5. Approcher $e$ par la méthode d'Euler (Python)",
        "content": "Comme $\\exp' = \\exp$, sur un petit pas $h$ on a $e^{x+h} \\approx e^x (1 + h)$. En partant de $e^0 = 1$ et en faisant $n$ pas de longueur $h = \\frac{1}{n}$, on obtient une valeur approchée de $e^1 = e$ :\n`def approx_e(n):`\n`    y = 1`\n`    for k in range(n):`\n`        y = y * (1 + 1/n)`\n`    return y`\nAvec $n = 1000$, on obtient environ $2{,}7169$ (pour $e \\approx 2{,}7183$)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Dériver une fonction contenant une exponentielle composée",
        "example": "Dériver la fonction $g(x) = (3x - 2)e^{-2x}$.",
        "steps": [
          "**Étape 1 (Reconnaissance produit)** : On pose $u(x) = 3x - 2 \\implies u'(x) = 3$ et $v(x) = e^{-2x} \\implies v'(x) = -2e^{-2x}$.",
          "**Étape 2 (Dérivation uv)** : $g'(x) = u'v + uv' = 3e^{-2x} + (3x - 2)(-2e^{-2x})$.",
          "**Étape 3 (Factorisation par $e^{-2x}$)** : $g'(x) = e^{-2x}[3 - 6x + 4] = (-6x + 7)e^{-2x}$."
        ]
      },
      {
        "title": "Méthode : Résoudre une équation ou une inéquation avec des exponentielles",
        "example": "Résoudre dans $\\mathbb{R}$ : (1) $e^{x^2} = e^{4x - 3}$ ; (2) $e^{2x + 1} < e^{7 - x}$.",
        "steps": [
          "**Étape 1 (Équation)** : $e^{x^2} = e^{4x - 3} \\iff x^2 = 4x - 3 \\iff x^2 - 4x + 3 = 0$.",
          "**Étape 2 (Second degré)** : $\\Delta = 16 - 12 = 4$, d'où $x = \\frac{4 - 2}{2} = 1$ ou $x = \\frac{4 + 2}{2} = 3$. Donc $S_1 = \\{1 ; 3\\}$.",
          "**Étape 3 (Inéquation)** : l'exponentielle étant strictement croissante, $e^{2x + 1} < e^{7 - x} \\iff 2x + 1 < 7 - x \\iff 3x < 6 \\iff x < 2$.",
          "**Conclusion** : $S_1 = \\{1 ; 3\\}$ et $S_2 = ]-\\infty ; 2[$."
        ]
      },
      {
        "title": "Méthode : Étudier les variations d'une fonction avec exponentielle",
        "example": "Étudier les variations de $f(x) = x\\,e^{-x}$ sur $\\mathbb{R}$.",
        "steps": [
          "**Étape 1 (Dérivée d'un produit)** : $u = x$, $u' = 1$ ; $v = e^{-x}$, $v' = -e^{-x}$. Donc $f'(x) = e^{-x} - x\\,e^{-x} = (1 - x)\\,e^{-x}$.",
          "**Étape 2 (Signe)** : $e^{-x} > 0$ pour tout $x$, donc $f'(x)$ est du signe de $1 - x$ : positif sur $]-\\infty ; 1[$, négatif sur $]1 ; +\\infty[$.",
          "**Étape 3 (Extremum)** : $f(1) = 1 \\times e^{-1} = \\frac{1}{e} \\approx 0{,}368$.",
          "**Conclusion** : $f$ est croissante sur $]-\\infty ; 1]$, décroissante sur $[1 ; +\\infty[$, et admet un maximum égal à $\\frac{1}{e}$ en $x = 1$."
        ]
      },
      {
        "title": "Méthode : Démontrer l'inégalité $e^x \\ge x + 1$",
        "example": "Démontrer que pour tout réel $x$, $e^x \\ge x + 1$.",
        "steps": [
          "**Étape 1 (Fonction différence)** : on pose $g(x) = e^x - x - 1$ sur $\\mathbb{R}$.",
          "**Étape 2 (Dérivée et signe)** : $g'(x) = e^x - 1$. D'après le signe de $e^x - 1$ : $g'(x) < 0$ si $x < 0$ et $g'(x) > 0$ si $x > 0$.",
          "**Étape 3 (Minimum)** : $g$ est décroissante sur $]-\\infty ; 0]$ et croissante sur $[0 ; +\\infty[$ ; son minimum est $g(0) = 1 - 0 - 1 = 0$.",
          "**Conclusion** : $g(x) \\ge 0$ pour tout $x$, donc $e^x \\ge x + 1$ : la courbe de $\\exp$ est au-dessus de sa tangente en $0$."
        ]
      }
    ],
    "traps": [
      "⚠️ $e^x$ n'est JAMAIS négatif ou nul : l'équation $e^x = -2$ ou $e^x = 0$ n'a aucune solution !",
      "⚠️ Attention à ne pas oublier $u'$ lors de la dérivation de $e^{u(x)}$ : la dérivée de $e^{3x}$ est $3e^{3x}$ et non $e^{3x}$.",
      "⚠️ $e^a + e^b \\neq e^{a+b}$ : c'est le **produit** qui se transforme, $e^a \\times e^b = e^{a+b}$.",
      "⚠️ $(e^x)^2 = e^{2x}$ et non $e^{x^2}$.",
      "⚠️ Dans un produit comme $(1 - x)e^{-x}$, le facteur $e^{-x}$ est toujours strictement positif : le signe est donné par l'autre facteur seulement."
    ],
    "flashcards": [
      {
        "q": "Simplifier $\\frac{e^5 \\times e^{-2}}{e^4}$.",
        "a": "$\\frac{e^{5-2}}{e^4} = \\frac{e^3}{e^4} = e^{3-4} = e^{-1} = \\frac{1}{e}$."
      },
      {
        "q": "Quelle est la dérivée de $f(x) = e^{-3x + 1}$ ?",
        "a": "$f'(x) = -3e^{-3x + 1}$ (formule $(e^{ax+b})' = a\\,e^{ax+b}$ avec $a = -3$)."
      },
      {
        "q": "Quelle est l'équation de la tangente à la courbe de $\\exp$ au point d'abscisse $0$ ?",
        "a": "$y = x + 1$."
      },
      {
        "q": "Quelle est la dérivée de $t \\mapsto e^{kt}$ ?",
        "a": "$t \\mapsto k\\,e^{kt}$."
      },
      {
        "q": "La suite $u_n = e^{-2n}$ est-elle géométrique ? Si oui, de quelle raison ?",
        "a": "Oui : $u_{n+1} = e^{-2n} \\times e^{-2}$, raison $e^{-2}$ (comprise entre $0$ et $1$, donc suite décroissante)."
      }
    ]
  },

  "1A5": {
    "title": "1A5 : Généralités sur les suites numériques et sens de variation",
    "domain": "Analyse et Suites",
    "objectives": [
      "Comprendre la différence entre formule explicite $u_n = f(n)$ et relation de récurrence $u_{n+1} = f(u_n)$.",
      "Calculer les premiers termes d'une suite et représenter graphiquement une suite récurrente en toile d'araignée.",
      "Étudier le sens de variation d'une suite numérique (signe de $u_{n+1} - u_n$ ou comparaison de $\\frac{u_{n+1}}{u_n}$ à 1 si termes strictement positifs)."
    ],
    "keyPoints": [
      {
        "title": "1. Modes de définition d'une suite",
        "content": "• **Forme explicite** : $u_n = f(n)$. Chaque terme se calcule directement sans connaître les termes précédents (ex: $u_n = 3n^2 - 1$).\n• **Relation de récurrence** : On donne le premier terme $u_0$ et une relation $u_{n+1} = f(u_n)$. Pour calculer un terme, il faut calculer successivement tous les termes précédents."
      },
      {
        "title": "2. Sens de variation d'une suite",
        "content": "• Une suite $(u_n)$ est **croissante** si pour tout $n \\in \\mathbb{N}$, $u_{n+1} \\ge u_n \\iff u_{n+1} - u_n \\ge 0$.\n• Une suite $(u_n)$ est **décroissante** si pour tout $n \\in \\mathbb{N}$, $u_{n+1} \\le u_n \\iff u_{n+1} - u_n \\le 0$."
      },
      {
        "title": "3. Variations d'une suite explicite $u_n = f(n)$",
        "content": "Si $f$ est croissante (respectivement décroissante) sur $[0 ; +\\infty[$, alors la suite $(u_n)$ définie par $u_n = f(n)$ est croissante (respectivement décroissante).\n*Exemple* : $u_n = \\frac{1}{n + 1}$ avec $f(x) = \\frac{1}{x + 1}$ décroissante sur $[0 ; +\\infty[$ : $(u_n)$ est décroissante.\n⚠️ Ce résultat ne s'applique **pas** aux suites récurrentes $u_{n+1} = f(u_n)$."
      },
      {
        "title": "4. Méthode du quotient",
        "content": "Si **tous les termes sont strictement positifs**, on compare $\\frac{u_{n+1}}{u_n}$ à $1$ :\n• $\\frac{u_{n+1}}{u_n} \\ge 1$ pour tout $n$ $\\iff$ $(u_n)$ croissante ;\n• $\\frac{u_{n+1}}{u_n} \\le 1$ pour tout $n$ $\\iff$ $(u_n)$ décroissante.\nCette méthode est adaptée aux suites contenant des puissances ($2^n$, $0{,}9^n$…)."
      },
      {
        "title": "5. Approche de la notion de limite",
        "content": "On observe le comportement des termes quand $n$ devient grand :\n• $u_n = \\frac{1}{n + 1}$ : les termes se rapprochent autant que l'on veut de $0$ ; on dit que la suite **tend vers $0$**.\n• $u_n = n^2$ : les termes deviennent aussi grands que l'on veut ; la suite **tend vers $+\\infty$**.\n• $u_n = (-1)^n$ : les termes valent alternativement $1$ et $-1$ ; la suite n'a **pas de limite**.\nEn Première, ces limites sont conjecturées (tableur, calculatrice, Python) mais pas démontrées."
      },
      {
        "title": "6. Représentations graphiques d'une suite",
        "content": "• Pour une suite quelconque, on place dans un repère les points de coordonnées $(n ; u_n)$ : ce sont des **points isolés**, que l'on ne relie pas.\n• Pour une suite récurrente $u_{n+1} = f(u_n)$, on peut placer les termes sur l'axe des abscisses : on trace la courbe de $f$ et la droite $y = x$ ; à partir de $u_0$ sur l'axe des abscisses, on monte jusqu'à la courbe (ordonnée $u_1 = f(u_0)$), puis on rejoint horizontalement la droite $y = x$ pour reporter $u_1$ en abscisse, et on recommence. On obtient un escalier ou une « toile d'araignée » qui permet de **conjecturer** le comportement de la suite."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Étudier le sens de variation avec $u_{n+1} - u_n$",
        "example": "Soit la suite $(u_n)$ définie pour tout $n \\in \\mathbb{N}$ par $u_n = \\frac{n}{n + 1}$. Déterminer son sens de variation.",
        "steps": [
          "**Étape 1 (Expression de $u_{n+1}$)** : $u_{n+1} = \\frac{n+1}{(n+1) + 1} = \\frac{n+1}{n+2}$.",
          "**Étape 2 (Différence)** : $u_{n+1} - u_n = \\frac{n+1}{n+2} - \\frac{n}{n+1} = \\frac{(n+1)^2 - n(n+2)}{(n+2)(n+1)}$.",
          "**Étape 3 (Développement du numérateur)** : $(n^2 + 2n + 1) - (n^2 + 2n) = 1$.",
          "**Étape 4 (Conclusion)** : $u_{n+1} - u_n = \\frac{1}{(n+2)(n+1)} > 0$ car $n \\ge 0$. La suite $(u_n)$ est strictement croissante."
        ]
      },
      {
        "title": "Méthode : Étudier le sens de variation avec le quotient",
        "example": "Soit $u_n = \\frac{3^n}{n + 1}$ pour tout $n \\in \\mathbb{N}$. Étudier le sens de variation de $(u_n)$.",
        "steps": [
          "**Étape 1 (Positivité)** : pour tout $n$, $3^n > 0$ et $n + 1 > 0$, donc $u_n > 0$.",
          "**Étape 2 (Quotient)** : $\\frac{u_{n+1}}{u_n} = \\frac{3^{n+1}}{n + 2} \\times \\frac{n + 1}{3^n} = \\frac{3(n + 1)}{n + 2}$.",
          "**Étape 3 (Comparaison à 1)** : $\\frac{3(n + 1)}{n + 2} > 1 \\iff 3n + 3 > n + 2 \\iff 2n + 1 > 0$, ce qui est vrai pour tout $n \\in \\mathbb{N}$.",
          "**Conclusion** : $(u_n)$ est strictement croissante (contrôle : $u_0 = 1$, $u_1 = 1{,}5$, $u_2 = 3$)."
        ]
      },
      {
        "title": "Méthode : Déterminer un seuil avec un algorithme Python",
        "example": "Soit $u_0 = 5$ et $u_{n+1} = 0{,}8\\,u_n + 3$. Calculer $u_1$, $u_2$, $u_3$ puis déterminer le plus petit entier $n$ tel que $u_n > 14$.",
        "steps": [
          "**Étape 1 (Premiers termes)** : $u_1 = 0{,}8 \\times 5 + 3 = 7$ ; $u_2 = 0{,}8 \\times 7 + 3 = 8{,}6$ ; $u_3 = 0{,}8 \\times 8{,}6 + 3 = 9{,}88$.",
          "**Étape 2 (Algorithme de seuil)** : on calcule les termes tant que la condition d'arrêt n'est pas atteinte :\n`u = 5`\n`n = 0`\n`while u <= 14:`\n`    u = 0.8 * u + 3`\n`    n = n + 1`\n`print(n)`",
          "**Étape 3 (Exécution)** : le programme affiche $11$ ; on trouve $u_{10} \\approx 13{,}93$ et $u_{11} \\approx 14{,}14$.",
          "**Conclusion** : le plus petit entier $n$ tel que $u_n > 14$ est $n = 11$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas confondre $u_{n+1}$ (le terme suivant) et $u_n + 1$ (le terme augmenté de 1) !",
      "⚠️ Pour utiliser la méthode du quotient $\\frac{u_{n+1}}{u_n} > 1$, il faut vérifier impérativement que tous les termes de la suite sont **strictement positifs**.",
      "⚠️ Observer que $u_0 < u_1 < u_2$ ne **démontre pas** que la suite est croissante : il faut une preuve valable pour tout $n$.",
      "⚠️ $u_{2n}$ n'est pas $2u_n$ : pour $u_n = n^2$, $u_{2n} = (2n)^2 = 4n^2$.",
      "⚠️ Une suite peut n'être ni croissante ni décroissante : c'est le cas de $u_n = (-1)^n$."
    ],
    "flashcards": [
      {
        "q": "Comment étudie-t-on généralement le sens de variation d'une suite $(u_n)$ ?",
        "a": "On étudie le signe de la différence $u_{n+1} - u_n$ pour tout $n$."
      },
      {
        "q": "Si $u_0 = 3$ et $u_{n+1} = 2u_n - 1$, que vaut $u_1$ puis $u_2$ ?",
        "a": "$u_1 = 2(3) - 1 = 5$ et $u_2 = 2(5) - 1 = 9$."
      },
      {
        "q": "Si $u_n = 2n^2 + 1$, exprimer $u_{n+1}$ en fonction de $n$.",
        "a": "$u_{n+1} = 2(n + 1)^2 + 1 = 2n^2 + 4n + 3$."
      },
      {
        "q": "À quelle condition peut-on utiliser la comparaison de $\\frac{u_{n+1}}{u_n}$ à $1$ ?",
        "a": "Lorsque tous les termes $u_n$ sont strictement positifs."
      },
      {
        "q": "Vers quoi semble tendre la suite $u_n = \\frac{1}{n + 1}$ ?",
        "a": "Vers $0$ : ses termes deviennent aussi proches de $0$ que l'on veut."
      }
    ]
  },

  "1A6": {
    "title": "1A6 : Suites arithmétiques et suites géométriques",
    "domain": "Analyse et Suites",
    "objectives": [
      "Reconnaître et caractériser une suite arithmétique ($u_{n+1} = u_n + r$) et une suite géométrique ($u_{n+1} = q \\times u_n$).",
      "Exprimer le terme général $u_n$ en fonction de $n$ : $u_n = u_0 + nr$ et $u_n = u_0 \\times q^n$.",
      "Calculer la somme des premiers termes d'une suite arithmétique et d'une suite géométrique.",
      "Calculer la somme des entiers $1 + 2 + \\dots + n = \\frac{n(n+1)}{2}$ et la somme géométrique $1 + q + \\dots + q^n = \\frac{1 - q^{n+1}}{1 - q}$ ($q \\neq 1$)."
    ],
    "keyPoints": [
      {
        "title": "1. Synthèse comparative des suites usuelles",
        "content": "• **Suite Arithmétique (Raison $r$)** :\n- Récurrence : $u_{n+1} = u_n + r$\n- Formule explicite : $u_n = u_0 + nr = u_p + (n - p)r$\n- Somme de termes consécutifs : $S = (\\text{nombre de termes}) \\times \\frac{\\text{premier} + \\text{dernier}}{2}$\n\n• **Suite Géométrique (Raison $q$)** :\n- Récurrence : $u_{n+1} = q \\times u_n$\n- Formule explicite : $u_n = u_0 \\times q^n = u_p \\times q^{n-p}$\n- Somme de termes consécutifs ($q \\neq 1$) : $S = (\\text{premier terme}) \\times \\frac{1 - q^{\\text{nombre de termes}}}{1 - q}$"
      },
      {
        "title": "2. Démontrer qu'une suite est (ou n'est pas) arithmétique ou géométrique",
        "content": "• $(u_n)$ est **arithmétique** si et seulement si $u_{n+1} - u_n$ est une constante $r$ (indépendante de $n$).\n• Si les termes ne s'annulent pas, $(u_n)$ est **géométrique** si et seulement si $\\frac{u_{n+1}}{u_n}$ est une constante $q$.\n• Pour prouver qu'une suite **ne l'est pas**, un contre-exemple suffit : pour $u_n = n^2$, $u_1 - u_0 = 1$ et $u_2 - u_1 = 3$, donc $(u_n)$ n'est pas arithmétique."
      },
      {
        "title": "3. Sens de variation",
        "content": "• **Arithmétique** : croissante si $r > 0$, décroissante si $r < 0$, constante si $r = 0$. Ses points $(n ; u_n)$ sont **alignés** (croissance linéaire).\n• **Géométrique** de premier terme $u_0 > 0$ : croissante si $q > 1$, décroissante si $0 < q < 1$. Si $u_0 < 0$, les sens sont inversés.\n• Si $q < 0$, les termes changent de signe à chaque rang : la suite n'est **pas monotone**."
      },
      {
        "title": "4. Pourcentages et intérêts",
        "content": "• Une augmentation de $t\\,\\%$ revient à multiplier par $1 + \\frac{t}{100}$ ; une baisse de $t\\,\\%$, par $1 - \\frac{t}{100}$.\n• **Intérêts composés** : un capital de 1 000 € placé à $3\\,\\%$ par an vaut $C_n = 1000 \\times 1{,}03^n$ après $n$ années (suite géométrique), soit environ 1 343,92 € après 10 ans.\n• **Intérêts simples** : on ajoute chaque année le même montant (suite arithmétique)."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer la somme des puissances consécutives",
        "example": "Calculer la somme $S = 3 + 6 + 12 + 24 + \\dots + 3072$.",
        "steps": [
          "**Étape 1 (Identification)** : C'est une suite géométrique de premier terme $u_0 = 3$ et de raison $q = 2$.",
          "**Étape 2 (Rang du dernier terme)** : $u_n = 3 \\times 2^n = 3072 \\iff 2^n = 1024 \\iff n = 10$. La somme comporte $10 - 0 + 1 = 11$ termes.",
          "**Étape 3 (Formule de la somme)** : $S = 3 \\times \\frac{1 - 2^{11}}{1 - 2} = 3 \\times \\frac{1 - 2048}{-1} = 3 \\times 2047 = 6141$."
        ]
      },
      {
        "title": "Méthode : Utiliser une suite auxiliaire géométrique",
        "example": "Soit $u_0 = 5$ et $u_{n+1} = 0{,}8\\,u_n + 3$. On pose $v_n = u_n - 15$. Montrer que $(v_n)$ est géométrique, puis exprimer $u_n$ en fonction de $n$.",
        "steps": [
          "**Étape 1 (Exprimer $v_{n+1}$)** : $v_{n+1} = u_{n+1} - 15 = 0{,}8\\,u_n + 3 - 15 = 0{,}8\\,u_n - 12$.",
          "**Étape 2 (Factoriser)** : $0{,}8\\,u_n - 12 = 0{,}8(u_n - 15) = 0{,}8\\,v_n$. Donc $(v_n)$ est géométrique de raison $q = 0{,}8$.",
          "**Étape 3 (Premier terme et forme explicite)** : $v_0 = 5 - 15 = -10$, donc $v_n = -10 \\times 0{,}8^n$.",
          "**Conclusion** : $u_n = v_n + 15 = 15 - 10 \\times 0{,}8^n$ (contrôle : $u_1 = 15 - 8 = 7 = 0{,}8 \\times 5 + 3$)."
        ]
      },
      {
        "title": "Méthode : Calculer une somme de termes d'une suite arithmétique",
        "example": "Calculer $S = 7 + 11 + 15 + \\dots + 203$.",
        "steps": [
          "**Étape 1 (Identification)** : les termes augmentent de $4$ : suite arithmétique de premier terme $u_0 = 7$ et de raison $r = 4$, donc $u_n = 7 + 4n$.",
          "**Étape 2 (Rang du dernier terme)** : $7 + 4n = 203 \\iff 4n = 196 \\iff n = 49$. La somme va de $u_0$ à $u_{49}$ : elle compte $49 - 0 + 1 = 50$ termes.",
          "**Étape 3 (Formule)** : $S = 50 \\times \\frac{7 + 203}{2} = 50 \\times 105 = 5250$.",
          "**Conclusion** : $S = 5250$."
        ]
      },
      {
        "title": "Méthode : Calculer une somme de termes géométriques en situation",
        "example": "Un adhérent verse 100 € à une association la première année, puis augmente son don de $5\\,\\%$ chaque année. Quel montant total aura-t-il versé en $10$ ans ?",
        "steps": [
          "**Étape 1 (Modélisation)** : le don de l'année $n$ (pour $n \\ge 1$) est $d_n = 100 \\times 1{,}05^{n-1}$ : suite géométrique de premier terme $d_1 = 100$ et de raison $q = 1{,}05$.",
          "**Étape 2 (Somme)** : $S = d_1 + \\dots + d_{10}$ compte $10$ termes, donc $S = 100 \\times \\frac{1 - 1{,}05^{10}}{1 - 1{,}05}$.",
          "**Étape 3 (Calcul)** : $1{,}05^{10} \\approx 1{,}628\\,89$, donc $S \\approx 100 \\times \\frac{-0{,}628\\,89}{-0{,}05} \\approx 1257{,}79$.",
          "**Conclusion** : il aura versé environ 1 257,79 € en $10$ ans (le dernier don est d'environ 155,13 €)."
        ]
      }
    ],
    "traps": [
      "⚠️ Le nombre de termes de $u_p$ à $u_n$ est $n - p + 1$ (de $u_0$ à $u_n$, il y a $n+1$ termes !).",
      "⚠️ Ne pas confondre la formule de la somme arithmétique et celle de la somme géométrique.",
      "⚠️ Deux hausses successives de $5\\,\\%$ ne font pas $10\\,\\%$ : $1{,}05^2 = 1{,}1025$, soit une hausse de $10{,}25\\,\\%$.",
      "⚠️ Si la suite commence à $u_1$, la forme explicite est $u_n = u_1 + (n - 1)r$ ou $u_n = u_1 \\times q^{n-1}$ (et non $u_1 + nr$).",
      "⚠️ Une suite géométrique de raison négative n'est ni croissante ni décroissante."
    ],
    "flashcards": [
      {
        "q": "Que vaut la somme $1 + 2 + 3 + \\dots + n$ ?",
        "a": "$\\frac{n(n + 1)}{2}$."
      },
      {
        "q": "Que vaut la somme $1 + q + q^2 + \\dots + q^n$ pour $q \\neq 1$ ?",
        "a": "$\\frac{1 - q^{n+1}}{1 - q}$."
      },
      {
        "q": "Une population augmente de $2\\,\\%$ par an. Quelle est la raison de la suite géométrique associée ?",
        "a": "$q = 1 + \\frac{2}{100} = 1{,}02$."
      },
      {
        "q": "$(u_n)$ est arithmétique avec $u_5 = 20$ et $r = 3$. Que vaut $u_{12}$ ?",
        "a": "$u_{12} = u_5 + (12 - 5) \\times 3 = 20 + 21 = 41$."
      },
      {
        "q": "Que vaut $1 + 2 + 3 + \\dots + 100$ ?",
        "a": "$\\frac{100 \\times 101}{2} = 5050$."
      }
    ]
  },

  "1G1": {
    "title": "1G1 : Trigonométrie, cercle trigonométrique et fonctions sinus et cosinus",
    "domain": "Géométrie",
    "objectives": [
      "Enrouler la droite réelle sur le cercle trigonométrique et convertir degrés en radians ($180^\\circ = \\pi$ rad).",
      "Définir le cosinus et le sinus d'un réel $x$ sur le cercle orienté.",
      "Connaître par cœur les valeurs remarquables de $\\cos$ et $\\sin$ pour $0, \\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}, \\frac{\\pi}{2}, \\pi$.",
      "Utiliser $\\cos^2(x) + \\sin^2(x) = 1$ et les formules d'angles associés (symétries)."
    ],
    "keyPoints": [
      {
        "title": "1. Valeurs remarquables sur le cercle trigonométrique",
        "content": "• **$0$ rad ($0^\\circ$)** : $\\cos(0) = 1$, $\\sin(0) = 0$\n• **$\\frac{\\pi}{6}$ rad ($30^\\circ$)** : $\\cos(\\frac{\\pi}{6}) = \\frac{\\sqrt{3}}{2}$, $\\sin(\\frac{\\pi}{6}) = \\frac{1}{2}$\n• **$\\frac{\\pi}{4}$ rad ($45^\\circ$)** : $\\cos(\\frac{\\pi}{4}) = \\frac{\\sqrt{2}}{2}$, $\\sin(\\frac{\\pi}{4}) = \\frac{\\sqrt{2}}{2}$\n• **$\\frac{\\pi}{3}$ rad ($60^\\circ$)** : $\\cos(\\frac{\\pi}{3}) = \\frac{1}{2}$, $\\sin(\\frac{\\pi}{3}) = \\frac{\\sqrt{3}}{2}$\n• **$\\frac{\\pi}{2}$ rad ($90^\\circ$)** : $\\cos(\\frac{\\pi}{2}) = 0$, $\\sin(\\frac{\\pi}{2}) = 1$"
      },
      {
        "title": "2. Formules d'angles associés et parité",
        "content": "• $\\cos(-x) = \\cos(x)$ (fonction cosinus paire)\n• $\\sin(-x) = -\\sin(x)$ (fonction sinus impaire)\n• $\\cos(\\pi - x) = -\\cos(x)$ et $\\sin(\\pi - x) = \\sin(x)$\n• $\\cos(\\pi + x) = -\\cos(x)$ et $\\sin(\\pi + x) = -\\sin(x)$\n• $\\cos(\\frac{\\pi}{2} - x) = \\sin(x)$ et $\\sin(\\frac{\\pi}{2} - x) = \\cos(x)$"
      },
      {
        "title": "3. Le radian et la longueur d'arc",
        "content": "Sur un cercle de rayon $R$, un angle de $\\theta$ radians intercepte un arc de longueur $\\ell = R\\,\\theta$. En particulier, sur le cercle trigonométrique ($R = 1$), **la mesure en radians est égale à la longueur de l'arc**.\nConversion : $\\theta_{\\text{rad}} = \\theta_{\\text{deg}} \\times \\frac{\\pi}{180}$.\n*Exemple* : $135^\\circ = 135 \\times \\frac{\\pi}{180} = \\frac{3\\pi}{4}$ rad."
      },
      {
        "title": "4. Réels associés à un même point et mesure principale",
        "content": "Les réels $x$ et $x + 2k\\pi$ ($k \\in \\mathbb{Z}$) sont associés au **même point** du cercle trigonométrique. On a donc $\\cos(x + 2k\\pi) = \\cos(x)$ et $\\sin(x + 2k\\pi) = \\sin(x)$.\nLa **mesure principale** est l'unique mesure appartenant à $]-\\pi ; \\pi]$.\n*Exemple* : $\\frac{17\\pi}{3} = \\frac{18\\pi}{3} - \\frac{\\pi}{3} = 6\\pi - \\frac{\\pi}{3}$ : la mesure principale est $-\\frac{\\pi}{3}$."
      },
      {
        "title": "5. Les fonctions cosinus et sinus",
        "content": "• Elles sont définies sur $\\mathbb{R}$ et à valeurs dans $[-1 ; 1]$.\n• Elles sont **périodiques de période $2\\pi$** : leur courbe se répète par translation de $2\\pi$.\n• $\\cos$ est **paire** (courbe symétrique par rapport à l'axe des ordonnées) ; $\\sin$ est **impaire** (courbe symétrique par rapport à l'origine).\n• Sur $[0 ; \\pi]$, $\\cos$ est décroissante de $1$ à $-1$. Sur $\\left[-\\frac{\\pi}{2} ; \\frac{\\pi}{2}\\right]$, $\\sin$ est croissante de $-1$ à $1$.\n• Autres angles associés : $\\cos\\left(\\frac{\\pi}{2} + x\\right) = -\\sin(x)$ et $\\sin\\left(\\frac{\\pi}{2} + x\\right) = \\cos(x)$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Résoudre une équation $\\cos(x) = a$",
        "example": "Résoudre dans $[0 ; 2\\pi[$ l'équation $\\cos(x) = \\frac{1}{2}$.",
        "steps": [
          "**Étape 1 (Angle de référence)** : On sait que $\\cos\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}$.",
          "**Étape 2 (Solutions modulo $2\\pi$)** : Les deux points du cercle d'abscisse $\\frac{1}{2}$ sont $x = \\frac{\\pi}{3}$ et $x = -\\frac{\\pi}{3}$.",
          "**Étape 3 (Intervalle $[0 ; 2\\pi[$)** : En ajoutant $2\\pi$ à $-\\frac{\\pi}{3}$, on obtient $-\\frac{\\pi}{3} + 2\\pi = \\frac{5\\pi}{3}$.",
          "**Conclusion** : $S = \\left\\{\\frac{\\pi}{3} ; \\frac{5\\pi}{3}\\right\\}$."
        ]
      },
      {
        "title": "Méthode : Résoudre une équation $\\sin(x) = a$",
        "example": "Résoudre dans $]-\\pi ; \\pi]$ l'équation $\\sin(x) = -\\frac{\\sqrt{3}}{2}$.",
        "steps": [
          "**Étape 1 (Angle de référence)** : $\\sin\\left(\\frac{\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2}$, et $\\sin$ est impaire, donc $\\sin\\left(-\\frac{\\pi}{3}\\right) = -\\frac{\\sqrt{3}}{2}$.",
          "**Étape 2 (Second point)** : les deux points du cercle d'ordonnée $-\\frac{\\sqrt{3}}{2}$ sont symétriques par rapport à l'axe des ordonnées ; comme $\\sin(\\pi - x) = \\sin(x)$, le second correspond à $\\pi - \\left(-\\frac{\\pi}{3}\\right) = \\frac{4\\pi}{3}$.",
          "**Étape 3 (Intervalle)** : $\\frac{4\\pi}{3} \\notin ]-\\pi ; \\pi]$, on lui retire $2\\pi$ : $\\frac{4\\pi}{3} - 2\\pi = -\\frac{2\\pi}{3}$.",
          "**Conclusion** : $S = \\left\\{-\\frac{2\\pi}{3} ; -\\frac{\\pi}{3}\\right\\}$."
        ]
      },
      {
        "title": "Méthode : Calculer un cosinus connaissant le sinus",
        "example": "On sait que $x \\in \\left[\\frac{\\pi}{2} ; \\pi\\right]$ et $\\sin(x) = \\frac{3}{5}$. Calculer $\\cos(x)$.",
        "steps": [
          "**Étape 1 (Relation fondamentale)** : $\\cos^2(x) = 1 - \\sin^2(x) = 1 - \\frac{9}{25} = \\frac{16}{25}$.",
          "**Étape 2 (Deux valeurs possibles)** : $\\cos(x) = \\frac{4}{5}$ ou $\\cos(x) = -\\frac{4}{5}$.",
          "**Étape 3 (Choix du signe)** : pour $x \\in \\left[\\frac{\\pi}{2} ; \\pi\\right]$, le point est à gauche de l'axe des ordonnées, donc $\\cos(x) \\le 0$.",
          "**Conclusion** : $\\cos(x) = -\\frac{4}{5}$."
        ]
      },
      {
        "title": "Méthode : Calculer des valeurs exactes avec les angles associés",
        "example": "Calculer $\\cos\\left(\\frac{2\\pi}{3}\\right)$, $\\sin\\left(\\frac{7\\pi}{6}\\right)$ et $\\cos\\left(\\frac{11\\pi}{4}\\right)$.",
        "steps": [
          "**Étape 1** : $\\frac{2\\pi}{3} = \\pi - \\frac{\\pi}{3}$, donc $\\cos\\left(\\frac{2\\pi}{3}\\right) = -\\cos\\left(\\frac{\\pi}{3}\\right) = -\\frac{1}{2}$.",
          "**Étape 2** : $\\frac{7\\pi}{6} = \\pi + \\frac{\\pi}{6}$, donc $\\sin\\left(\\frac{7\\pi}{6}\\right) = -\\sin\\left(\\frac{\\pi}{6}\\right) = -\\frac{1}{2}$.",
          "**Étape 3** : $\\frac{11\\pi}{4} = 2\\pi + \\frac{3\\pi}{4}$ et $\\frac{3\\pi}{4} = \\pi - \\frac{\\pi}{4}$, donc $\\cos\\left(\\frac{11\\pi}{4}\\right) = \\cos\\left(\\frac{3\\pi}{4}\\right) = -\\cos\\left(\\frac{\\pi}{4}\\right) = -\\frac{\\sqrt{2}}{2}$.",
          "**Conclusion** : on se ramène toujours à un angle de référence de $\\left[0 ; \\frac{\\pi}{2}\\right]$, puis on choisit le signe grâce au cercle."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas oublier que $\\cos^2(x) + \\sin^2(x) = 1$ permet de trouver l'un quand on a l'autre, mais il faut choisir le signe ($+$ ou $-$) selon le quadrant !",
      "⚠️ La calculatrice doit impérativement être réglée en mode **Radian** pour les calculs utilisant des angles en radians.",
      "⚠️ Le cosinus est l'**abscisse** du point du cercle et le sinus son **ordonnée** : ne pas les inverser.",
      "⚠️ L'équation $\\cos(x) = a$ (ou $\\sin(x) = a$) n'a **aucune solution** si $a > 1$ ou $a < -1$.",
      "⚠️ $\\cos(2x) \\neq 2\\cos(x)$ : par exemple $\\cos\\left(2 \\times \\frac{\\pi}{2}\\right) = -1$ alors que $2\\cos\\left(\\frac{\\pi}{2}\\right) = 0$."
    ],
    "flashcards": [
      {
        "q": "Que vaut $\\sin\\left(\\frac{\\pi}{6}\\right)$ et $\\cos\\left(\\frac{\\pi}{6}\\right)$ ?",
        "a": "$\\sin\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}$ et $\\cos\\left(\\frac{\\pi}{6}\\right) = \\frac{\\sqrt{3}}{2}$."
      },
      {
        "q": "Que vaut $\\cos(-x)$ ?",
        "a": "$\\cos(-x) = \\cos(x)$ (la fonction cosinus est paire)."
      },
      {
        "q": "Que vaut $\\cos\\left(\\frac{5\\pi}{6}\\right)$ ?",
        "a": "$\\cos\\left(\\pi - \\frac{\\pi}{6}\\right) = -\\cos\\left(\\frac{\\pi}{6}\\right) = -\\frac{\\sqrt{3}}{2}$."
      },
      {
        "q": "Quelle est la mesure principale de $\\frac{25\\pi}{4}$ ?",
        "a": "$\\frac{25\\pi}{4} = 6\\pi + \\frac{\\pi}{4}$, donc la mesure principale est $\\frac{\\pi}{4}$."
      },
      {
        "q": "Convertir $\\frac{2\\pi}{5}$ rad en degrés.",
        "a": "$\\frac{2\\pi}{5} \\times \\frac{180}{\\pi} = 72^\\circ$."
      }
    ]
  },

  "1G2": {
    "title": "1G2 : Le produit scalaire dans le plan : définitions et propriétés",
    "domain": "Géométrie",
    "objectives": [
      "Connaître les 3 expressions du produit scalaire : géométrique $\\vec{u}\\cdot\\vec{v} = \\|\\vec{u}\\| \\|\\vec{v}\\| \\cos(\\theta)$, par projection orthogonale $\\vec{AB}\\cdot\\vec{AC} = \\overline{AB} \\times \\overline{AH}$, et analytique $xx' + yy'$.",
      "Caractériser l'orthogonalité de deux vecteurs par la nullité de leur produit scalaire : $\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0$.",
      "Utiliser les propriétés de bilinéarité et de symétrie du produit scalaire."
    ],
    "keyPoints": [
      {
        "title": "1. Les différentes expressions du produit scalaire",
        "content": "• **Expression trigonométrique** : $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\cos(\\vec{u}, \\vec{v})$.\n• **Expression avec projection orthogonale** : Si $H$ est le projeté orthogonal de $C$ sur la droite $(AB)$, alors :\n$$\\vec{AB} \\cdot \\vec{AC} = \\vec{AB} \\cdot \\vec{AH} = \\begin{cases} +AB \\times AH & \\text{si } \\vec{AB} \\text{ et } \\vec{AH} \\text{ ont même sens} \\\\ -AB \\times AH & \\text{si } \\vec{AB} \\text{ et } \\vec{AH} \\text{ sont de sens opposés} \\end{cases}$$\n• **Expression analytique dans un repère orthonormé** : Si $\\vec{u}\\begin{pmatrix} x \\\\ y \\end{pmatrix}$ et $\\vec{v}\\begin{pmatrix} x' \\\\ y' \\end{pmatrix}$, alors :\n$$\\vec{u} \\cdot \\vec{v} = xx' + yy'$$"
      },
      {
        "title": "2. Propriétés algébriques du produit scalaire",
        "content": "Pour tous vecteurs $\\vec{u}$, $\\vec{v}$, $\\vec{w}$ et tout réel $k$ :\n• **Symétrie** : $\\vec{u} \\cdot \\vec{v} = \\vec{v} \\cdot \\vec{u}$.\n• **Bilinéarité** : $\\vec{u} \\cdot (\\vec{v} + \\vec{w}) = \\vec{u} \\cdot \\vec{v} + \\vec{u} \\cdot \\vec{w}$ et $(k\\vec{u}) \\cdot \\vec{v} = k(\\vec{u} \\cdot \\vec{v})$.\n• **Carré scalaire** : $\\vec{u} \\cdot \\vec{u} = \\|\\vec{u}\\|^2$.\n• **Identités remarquables** : $\\|\\vec{u} + \\vec{v}\\|^2 = \\|\\vec{u}\\|^2 + 2\\,\\vec{u} \\cdot \\vec{v} + \\|\\vec{v}\\|^2$, $\\|\\vec{u} - \\vec{v}\\|^2 = \\|\\vec{u}\\|^2 - 2\\,\\vec{u} \\cdot \\vec{v} + \\|\\vec{v}\\|^2$ et $(\\vec{u} + \\vec{v}) \\cdot (\\vec{u} - \\vec{v}) = \\|\\vec{u}\\|^2 - \\|\\vec{v}\\|^2$."
      },
      {
        "title": "3. Expression avec les normes (ou les longueurs)",
        "content": "Des identités remarquables on déduit :\n$$\\vec{u} \\cdot \\vec{v} = \\frac{1}{2}\\left(\\|\\vec{u} + \\vec{v}\\|^2 - \\|\\vec{u}\\|^2 - \\|\\vec{v}\\|^2\\right)$$\nAvec trois points $A$, $B$, $C$ : $$\\vec{AB} \\cdot \\vec{AC} = \\frac{1}{2}\\left(AB^2 + AC^2 - BC^2\\right)$$\n*Exemple* : si $AB = 4$, $AC = 5$ et $BC = 6$, alors $\\vec{AB} \\cdot \\vec{AC} = \\frac{1}{2}(16 + 25 - 36) = 2{,}5$."
      },
      {
        "title": "4. Signe du produit scalaire",
        "content": "Pour deux vecteurs non nuls, le signe de $\\vec{u} \\cdot \\vec{v}$ est celui de $\\cos(\\vec{u}, \\vec{v})$ :\n• $\\vec{u} \\cdot \\vec{v} > 0$ : l'angle géométrique est **aigu** ;\n• $\\vec{u} \\cdot \\vec{v} < 0$ : l'angle est **obtus** ;\n• $\\vec{u} \\cdot \\vec{v} = 0$ : les vecteurs sont **orthogonaux**.\nPar convention, le vecteur nul est orthogonal à tout vecteur."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer un angle avec le produit scalaire analytique",
        "example": "Soient $\\vec{u}(3 ; 4)$ et $\\vec{v}(1 ; 2)$. Calculer l'angle $(\\vec{u}, \\vec{v})$ au degré près.",
        "steps": [
          "**Étape 1 (Produit scalaire)** : $\\vec{u} \\cdot \\vec{v} = 3(1) + 4(2) = 3 + 8 = 11$.",
          "**Étape 2 (Normes)** : $\\|\\vec{u}\\| = \\sqrt{3^2 + 4^2} = 5$ et $\\|\\vec{v}\\| = \\sqrt{1^2 + 2^2} = \\sqrt{5}$.",
          "**Étape 3 (Cosinus)** : $\\cos(\\theta) = \\frac{\\vec{u} \\cdot \\vec{v}}{\\|\\vec{u}\\| \\|\\vec{v}\\|} = \\frac{11}{5\\sqrt{5}} \\approx 0{,}9839$.",
          "**Étape 4 (Angle)** : $\\theta = \\arccos(0{,}9839) \\approx 10{,}3^\\circ$."
        ]
      },
      {
        "title": "Méthode : Calculer un produit scalaire par projection orthogonale",
        "example": "$ABCD$ est un carré de côté $4$ et $I$ est le milieu de $[BC]$. Calculer $\\vec{AB} \\cdot \\vec{AI}$ et $\\vec{AD} \\cdot \\vec{AI}$.",
        "steps": [
          "**Étape 1 (Projeté sur $(AB)$)** : $(IB) \\perp (AB)$, donc le projeté orthogonal de $I$ sur $(AB)$ est $B$. Ainsi $\\vec{AB} \\cdot \\vec{AI} = \\vec{AB} \\cdot \\vec{AB} = AB^2 = 16$.",
          "**Étape 2 (Projeté sur $(AD)$)** : le projeté orthogonal de $I$ sur $(AD)$ est le milieu $J$ de $[AD]$, avec $\\vec{AJ}$ de même sens que $\\vec{AD}$. Donc $\\vec{AD} \\cdot \\vec{AI} = AD \\times AJ = 4 \\times 2 = 8$.",
          "**Étape 3 (Vérification analytique)** : dans le repère orthonormé où $A(0 ; 0)$, $B(4 ; 0)$, $D(0 ; 4)$, on a $I(4 ; 2)$ : $\\vec{AB} \\cdot \\vec{AI} = 4 \\times 4 + 0 \\times 2 = 16$ et $\\vec{AD} \\cdot \\vec{AI} = 0 \\times 4 + 4 \\times 2 = 8$.",
          "**Conclusion** : $\\vec{AB} \\cdot \\vec{AI} = 16$ et $\\vec{AD} \\cdot \\vec{AI} = 8$."
        ]
      },
      {
        "title": "Méthode : Démontrer qu'un triangle est rectangle",
        "example": "Dans un repère orthonormé, on donne $A(1 ; 2)$, $B(4 ; 3)$ et $C(2 ; -1)$. Le triangle $ABC$ est-il rectangle en $A$ ?",
        "steps": [
          "**Étape 1 (Coordonnées des vecteurs)** : $\\vec{AB}\\begin{pmatrix} 3 \\\\ 1 \\end{pmatrix}$ et $\\vec{AC}\\begin{pmatrix} 1 \\\\ -3 \\end{pmatrix}$.",
          "**Étape 2 (Produit scalaire)** : $\\vec{AB} \\cdot \\vec{AC} = 3 \\times 1 + 1 \\times (-3) = 3 - 3 = 0$.",
          "**Conclusion** : les vecteurs $\\vec{AB}$ et $\\vec{AC}$ sont orthogonaux, donc $(AB) \\perp (AC)$ : le triangle $ABC$ est rectangle en $A$."
        ]
      },
      {
        "title": "Méthode : Calculer avec la bilinéarité",
        "example": "On donne $\\|\\vec{u}\\| = 2$, $\\|\\vec{v}\\| = 3$ et $(\\vec{u}, \\vec{v}) = \\frac{\\pi}{3}$. Calculer $\\vec{u} \\cdot \\vec{v}$ puis $(2\\vec{u} - \\vec{v}) \\cdot (\\vec{u} + \\vec{v})$.",
        "steps": [
          "**Étape 1 (Produit scalaire)** : $\\vec{u} \\cdot \\vec{v} = 2 \\times 3 \\times \\cos\\left(\\frac{\\pi}{3}\\right) = 6 \\times \\frac{1}{2} = 3$.",
          "**Étape 2 (Développement)** : $(2\\vec{u} - \\vec{v}) \\cdot (\\vec{u} + \\vec{v}) = 2\\|\\vec{u}\\|^2 + 2\\,\\vec{u} \\cdot \\vec{v} - \\vec{v} \\cdot \\vec{u} - \\|\\vec{v}\\|^2 = 2\\|\\vec{u}\\|^2 + \\vec{u} \\cdot \\vec{v} - \\|\\vec{v}\\|^2$.",
          "**Étape 3 (Calcul)** : $2 \\times 4 + 3 - 9 = 2$.",
          "**Conclusion** : $\\vec{u} \\cdot \\vec{v} = 3$ et $(2\\vec{u} - \\vec{v}) \\cdot (\\vec{u} + \\vec{v}) = 2$."
        ]
      }
    ],
    "traps": [
      "⚠️ Le produit scalaire de deux vecteurs est un **nombre réel** (scalaire), et non un vecteur !",
      "⚠️ Ne pas confondre le déterminant $xy' - yx' = 0$ (pour la colinéarité) et le produit scalaire $xx' + yy' = 0$ (pour l'orthogonalité).",
      "⚠️ $\\vec{u} \\cdot \\vec{v} = 0$ n'implique pas $\\vec{u} = \\vec{0}$ ou $\\vec{v} = \\vec{0}$ : il n'y a pas de « règle du produit nul » pour le produit scalaire.",
      "⚠️ La formule $xx' + yy'$ n'est valable que dans un repère **orthonormé**.",
      "⚠️ En général, $\\vec{u} \\cdot \\vec{v} \\neq \\|\\vec{u}\\| \\times \\|\\vec{v}\\|$ : l'égalité n'a lieu que si les vecteurs sont colinéaires et de même sens."
    ],
    "flashcards": [
      {
        "q": "À quelle condition deux vecteurs non nuls $\\vec{u}$ et $\\vec{v}$ sont-ils orthogonaux ?",
        "a": "$\\vec{u} \\cdot \\vec{v} = 0$ (produit scalaire nul)."
      },
      {
        "q": "Calculer le produit scalaire de $\\vec{u}(2 ; -5)$ et $\\vec{v}(3 ; 1)$ dans un repère orthonormé.",
        "a": "$2 \\times 3 + (-5) \\times 1 = 6 - 5 = 1$."
      },
      {
        "q": "On sait que $\\|\\vec{u}\\| = 3$, $\\|\\vec{v}\\| = 2$ et $\\vec{u} \\cdot \\vec{v} = -1$. Calculer $\\|\\vec{u} + 2\\vec{v}\\|^2$.",
        "a": "$\\|\\vec{u}\\|^2 + 4\\,\\vec{u} \\cdot \\vec{v} + 4\\|\\vec{v}\\|^2 = 9 - 4 + 16 = 21$."
      },
      {
        "q": "Exprimer $\\vec{AB} \\cdot \\vec{AC}$ à l'aide des seules longueurs du triangle $ABC$.",
        "a": "$\\vec{AB} \\cdot \\vec{AC} = \\frac{1}{2}\\left(AB^2 + AC^2 - BC^2\\right)$."
      },
      {
        "q": "Quel est le signe de $\\vec{u} \\cdot \\vec{v}$ si l'angle entre $\\vec{u}$ et $\\vec{v}$ est obtus ?",
        "a": "Négatif (car le cosinus d'un angle obtus est négatif)."
      }
    ]
  },

  "1G3": {
    "title": "1G3 : Applications du produit scalaire, formule d'Al-Kashi et droites",
    "domain": "Géométrie",
    "objectives": [
      "Appliquer le théorème d'Al-Kashi (loi des cosinus) dans un triangle quelconque : $a^2 = b^2 + c^2 - 2bc \\cos(\\widehat{A})$.",
      "Appliquer le théorème de la médiane : si $I$ est le milieu de $[BC]$, alors $AB^2 + AC^2 = 2AI^2 + \\frac{BC^2}{2}$.",
      "Définir un vecteur normal à une droite et déterminer l'équation cartésienne $ax + by + c = 0$ associée à $\\vec{n}(a ; b)$."
    ],
    "keyPoints": [
      {
        "title": "1. Théorème d'Al-Kashi (Loi des cosinus)",
        "content": "Dans un triangle $ABC$ quelconque avec les notations usuelles ($a = BC, b = AC, c = AB$) :\n$$a^2 = b^2 + c^2 - 2bc \\cos(\\widehat{A})$$\n$$b^2 = a^2 + c^2 - 2ac \\cos(\\widehat{B})$$\n$$c^2 = a^2 + b^2 - 2ab \\cos(\\widehat{C})$$\n*Généralisation du théorème de Pythagore* : si $\\widehat{A} = 90^\\circ$, alors $\\cos(\\widehat{A}) = 0$ et on retrouve $a^2 = b^2 + c^2$."
      },
      {
        "title": "2. Vecteur normal à une droite",
        "content": "• Un **vecteur normal** à une droite $\\mathcal{D}$ est un vecteur non nul $\\vec{n}$ orthogonal à tout vecteur directeur de $\\mathcal{D}$.\n• La droite passant par $A(x_A ; y_A)$ de vecteur normal $\\vec{n}\\begin{pmatrix} a \\\\ b \\end{pmatrix}$ admet pour équation cartésienne :\n$$a(x - x_A) + b(y - y_A) = 0 \\iff ax + by + c = 0$$"
      },
      {
        "title": "3. Calculer un angle avec Al-Kashi",
        "content": "En isolant le cosinus dans la formule d'Al-Kashi, on obtient un angle à partir des trois côtés :\n$$\\cos(\\widehat{A}) = \\frac{b^2 + c^2 - a^2}{2bc}$$\n*Exemple* : si $a = BC = 7$, $b = AC = 5$ et $c = AB = 8$, alors $\\cos(\\widehat{A}) = \\frac{25 + 64 - 49}{80} = \\frac{40}{80} = \\frac{1}{2}$, donc $\\widehat{A} = 60^\\circ$."
      },
      {
        "title": "4. Théorème de la médiane",
        "content": "Soit $I$ le milieu de $[AB]$. Pour tout point $M$ du plan :\n$$\\vec{MA} \\cdot \\vec{MB} = MI^2 - \\frac{AB^2}{4}$$\n*Preuve* : $\\vec{MA} \\cdot \\vec{MB} = (\\vec{MI} + \\vec{IA}) \\cdot (\\vec{MI} - \\vec{IA}) = MI^2 - IA^2$, et $IA = \\frac{AB}{2}$.\n**Conséquence** : l'ensemble des points $M$ tels que $\\vec{MA} \\cdot \\vec{MB} = 0$ est le **cercle de diamètre $[AB]$**."
      },
      {
        "title": "5. Équation cartésienne d'un cercle",
        "content": "Dans un repère orthonormé, le cercle de centre $\\Omega(a ; b)$ et de rayon $r > 0$ a pour équation :\n$$(x - a)^2 + (y - b)^2 = r^2$$\nEn effet, $M(x ; y)$ appartient au cercle si et seulement si $\\Omega M^2 = r^2$.\n*Exemple* : le cercle de centre $\\Omega(1 ; -2)$ et de rayon $3$ a pour équation $(x - 1)^2 + (y + 2)^2 = 9$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Trouver l'équation d'une droite connaissant un point et un vecteur normal",
        "example": "Déterminer l'équation de la droite $\\mathcal{D}$ passant par $A(2 ; -3)$ et ayant pour vecteur normal $\\vec{n}(4 ; -1)$.",
        "steps": [
          "**Étape 1 (Forme cartésienne)** : Comme $\\vec{n}(4 ; -1)$ est normal, l'équation s'écrit $4x - y + c = 0$.",
          "**Étape 2 (Constante c)** : $A(2 ; -3) \\in \\mathcal{D} \\implies 4(2) - (-3) + c = 0 \\implies 8 + 3 + c = 0 \\implies c = -11$.",
          "**Étape 3 (Conclusion)** : L'équation cartésienne est $4x - y - 11 = 0$."
        ]
      },
      {
        "title": "Méthode : Déterminer le centre et le rayon d'un cercle",
        "example": "Montrer que l'ensemble des points $M(x ; y)$ tels que $x^2 + y^2 - 4x + 6y - 3 = 0$ est un cercle, et préciser son centre et son rayon.",
        "steps": [
          "**Étape 1 (Forme canonique en $x$)** : $x^2 - 4x = (x - 2)^2 - 4$.",
          "**Étape 2 (Forme canonique en $y$)** : $y^2 + 6y = (y + 3)^2 - 9$.",
          "**Étape 3 (Regroupement)** : l'équation devient $(x - 2)^2 - 4 + (y + 3)^2 - 9 - 3 = 0$, soit $(x - 2)^2 + (y + 3)^2 = 16$.",
          "**Conclusion** : comme $16 = 4^2 > 0$, c'est le cercle de centre $\\Omega(2 ; -3)$ et de rayon $4$."
        ]
      },
      {
        "title": "Méthode : Déterminer le projeté orthogonal d'un point sur une droite",
        "example": "Dans un repère orthonormé, soit $\\mathcal{D} : x - 2y + 3 = 0$ et $A(4 ; 1)$. Déterminer les coordonnées du projeté orthogonal $H$ de $A$ sur $\\mathcal{D}$, puis la distance $AH$.",
        "steps": [
          "**Étape 1 (Vecteur directeur)** : $\\mathcal{D}$ a pour vecteur directeur $\\vec{u}\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$ (de la forme $(-b ; a)$).",
          "**Étape 2 (Conditions sur $H(x ; y)$)** : $H \\in \\mathcal{D}$ donne $x - 2y + 3 = 0$ ; $\\vec{AH} \\perp \\vec{u}$ donne $2(x - 4) + 1 \\times (y - 1) = 0$, soit $2x + y = 9$.",
          "**Étape 3 (Système)** : de la première équation, $x = 2y - 3$ ; alors $2(2y - 3) + y = 9 \\iff 5y = 15 \\iff y = 3$, puis $x = 3$. Donc $H(3 ; 3)$.",
          "**Étape 4 (Distance)** : $\\vec{AH}\\begin{pmatrix} -1 \\\\ 2 \\end{pmatrix}$, donc $AH = \\sqrt{(-1)^2 + 2^2} = \\sqrt{5}$.",
          "**Conclusion** : $H(3 ; 3)$ et $AH = \\sqrt{5}$ ; c'est la distance du point $A$ à la droite $\\mathcal{D}$."
        ]
      },
      {
        "title": "Méthode : Calculer une longueur avec Al-Kashi",
        "example": "Dans un triangle $ABC$, $AC = 5$, $AB = 8$ et $\\widehat{BAC} = 120^\\circ$. Calculer $BC$.",
        "steps": [
          "**Étape 1 (Formule)** : $BC^2 = AB^2 + AC^2 - 2 \\times AB \\times AC \\times \\cos(\\widehat{A})$.",
          "**Étape 2 (Valeurs)** : $\\cos(120^\\circ) = -\\frac{1}{2}$, donc $BC^2 = 64 + 25 - 2 \\times 8 \\times 5 \\times \\left(-\\frac{1}{2}\\right) = 89 + 40 = 129$.",
          "**Conclusion** : $BC = \\sqrt{129} \\approx 11{,}36$. L'angle étant obtus, on vérifie que $BC^2 > AB^2 + AC^2$."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour $ax + by + c = 0$ :\n- Un vecteur **directeur** est $\\vec{u}(-b ; a)$.\n- Un vecteur **normal** est $\\vec{n}(a ; b)$.",
      "⚠️ Dans $(x - a)^2 + (y - b)^2 = r^2$, le membre de droite est le **carré** du rayon : $(x - 1)^2 + y^2 = 9$ a pour rayon $3$, et non $9$.",
      "⚠️ Une équation de la forme $x^2 + y^2 + \\dots = 0$ ne définit pas toujours un cercle : $x^2 + y^2 - 2x + 4y + 10 = 0 \\iff (x - 1)^2 + (y + 2)^2 = -5$, ensemble **vide**.",
      "⚠️ Dans Al-Kashi, l'angle utilisé est celui **opposé** au côté isolé : $a^2$ va avec $\\widehat{A}$, angle compris entre les côtés $b$ et $c$."
    ],
    "flashcards": [
      {
        "q": "Énoncer la formule d'Al-Kashi pour le côté $a = BC$ dans un triangle $ABC$.",
        "a": "$BC^2 = AB^2 + AC^2 - 2 AB \\times AC \\cos(\\widehat{A})$."
      },
      {
        "q": "Quel est un vecteur normal à la droite d'équation $5x - 3y + 4 = 0$ ?",
        "a": "$\\vec{n}\\begin{pmatrix} 5 \\\\ -3 \\end{pmatrix}$."
      },
      {
        "q": "Donner le centre et le rayon du cercle d'équation $(x + 1)^2 + (y - 2)^2 = 5$.",
        "a": "Centre $\\Omega(-1 ; 2)$, rayon $\\sqrt{5}$."
      },
      {
        "q": "Quel est l'ensemble des points $M$ tels que $\\vec{MA} \\cdot \\vec{MB} = 0$ ?",
        "a": "Le cercle de diamètre $[AB]$."
      },
      {
        "q": "Comment calculer $\\cos(\\widehat{A})$ connaissant les trois côtés $a$, $b$, $c$ ?",
        "a": "$\\cos(\\widehat{A}) = \\frac{b^2 + c^2 - a^2}{2bc}$."
      }
    ]
  },

  "1S1": {
    "title": "1S1 : Probabilités conditionnelles et indépendance d'événements",
    "domain": "Probabilités et Statistiques",
    "objectives": [
      "Définir la probabilité conditionnelle de $B$ sachant $A$ : $P_A(B) = \\frac{P(A \\cap B)}{P(A)}$ (avec $P(A) > 0$).",
      "Construire et pondérer un arbre de probabilités (règle des nœuds et règle du produit sur un chemin).",
      "Appliquer rigoureusement la formule des probabilités totales sur une partition de l'univers.",
      "Caractériser l'indépendance de deux événements : $P(A \\cap B) = P(A) \\times P(B)$ ou $P_A(B) = P(B)$."
    ],
    "keyPoints": [
      {
        "title": "1. Arbres pondérés et formule des probabilités totales",
        "content": "• **Règle 1 (Nœud)** : La somme des probabilités des branches issues d'un même nœud est égale à 1.\n• **Règle 2 (Chemin)** : La probabilité de l'issue au bout d'un chemin est le **produit** des probabilités le long de ce chemin : $P(A \\cap B) = P(A) \\times P_A(B)$.\n• **Formule des probabilités totales** : Si $(A, \\overline{A})$ forme une partition de l'univers, alors pour tout événement $B$ :\n$$P(B) = P(A \\cap B) + P(\\overline{A} \\cap B) = P(A) \\times P_A(B) + P(\\overline{A}) \\times P_{\\overline{A}}(B)$$"
      },
      {
        "title": "2. Propriétés de la probabilité conditionnelle",
        "content": "Soit $A$ un événement tel que $P(A) > 0$.\n• $P_A$ est une probabilité : $0 \\le P_A(B) \\le 1$ et $P_A(\\overline{B}) = 1 - P_A(B)$.\n• **Formule du produit** : $P(A \\cap B) = P(A) \\times P_A(B)$ ; si de plus $P(B) > 0$, on a aussi $P(A \\cap B) = P(B) \\times P_B(A)$.\n*Exemple* : si $P(A) = 0{,}4$ et $P_A(B) = 0{,}3$, alors $P(A \\cap B) = 0{,}12$ et $P_A(\\overline{B}) = 0{,}7$."
      },
      {
        "title": "3. Probabilités totales avec une partition quelconque",
        "content": "Des événements $A_1, A_2, \\dots, A_n$ de probabilités non nulles forment une **partition** de l'univers s'ils sont deux à deux incompatibles et si leur réunion est l'univers. Alors, pour tout événement $B$ :\n$$P(B) = P(A_1)P_{A_1}(B) + P(A_2)P_{A_2}(B) + \\dots + P(A_n)P_{A_n}(B)$$\nSur un arbre, $P(B)$ est la **somme des probabilités de tous les chemins** qui mènent à $B$."
      },
      {
        "title": "4. Indépendance : compléments",
        "content": "• Si $P(A) > 0$, $A$ et $B$ sont indépendants si et seulement si $P_A(B) = P(B)$ : savoir que $A$ est réalisé ne change pas la probabilité de $B$.\n• Si $A$ et $B$ sont indépendants, alors $A$ et $\\overline{B}$ le sont aussi.\n• **Succession de deux épreuves indépendantes** (par exemple deux lancers de dé) : dans l'arbre, les probabilités du second niveau sont les mêmes quelle que soit l'issue de la première épreuve, et la probabilité d'un couple d'issues est le produit des probabilités."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer une probabilité inverse avec la formule de Bayes",
        "example": "Une maladie touche 1% de la population ($P(M) = 0{,}01$). Un test donne un résultat positif avec probabilité $P_M(T) = 0{,}99$ chez les malades, et $P_{\\overline{M}}(T) = 0{,}02$ chez les non-malades. Calculer la probabilité d'être malade sachant que le test est positif ($P_T(M)$).",
        "steps": [
          "**Étape 1 (Proba totale P(T))** : $P(T) = P(M \\cap T) + P(\\overline{M} \\cap T) = 0{,}01 \\times 0{,}99 + 0{,}99 \\times 0{,}02 = 0{,}0099 + 0{,}0198 = 0{,}0297$.",
          "**Étape 2 (Conditionnelle)** : $P_T(M) = \\frac{P(M \\cap T)}{P(T)} = \\frac{0{,}0099}{0{,}0297} = \\frac{1}{3} \\approx 33{,}3\\%$.",
          "**Interprétation** : Bien que le test soit fiable à 99%, un patient positif n'a qu'1 chance sur 3 d'être réellement malade (paradoxe des faux positifs sur maladie rare)."
        ]
      },
      {
        "title": "Méthode : Tester l'indépendance de deux événements",
        "example": "On lance un dé équilibré à six faces. $A$ : « le résultat est pair », $B$ : « le résultat est inférieur ou égal à $4$ », $C$ : « le résultat est inférieur ou égal à $3$ ». $A$ et $B$ sont-ils indépendants ? Et $A$ et $C$ ?",
        "steps": [
          "**Étape 1 (Probabilités)** : $A = \\{2 ; 4 ; 6\\}$, $B = \\{1 ; 2 ; 3 ; 4\\}$, $C = \\{1 ; 2 ; 3\\}$, donc $P(A) = \\frac{1}{2}$, $P(B) = \\frac{2}{3}$, $P(C) = \\frac{1}{2}$.",
          "**Étape 2 ($A$ et $B$)** : $A \\cap B = \\{2 ; 4\\}$, donc $P(A \\cap B) = \\frac{2}{6} = \\frac{1}{3}$ et $P(A) \\times P(B) = \\frac{1}{2} \\times \\frac{2}{3} = \\frac{1}{3}$. Égalité : $A$ et $B$ sont **indépendants**.",
          "**Étape 3 ($A$ et $C$)** : $A \\cap C = \\{2\\}$, donc $P(A \\cap C) = \\frac{1}{6}$, alors que $P(A) \\times P(C) = \\frac{1}{4}$. $A$ et $C$ ne sont **pas indépendants**.",
          "**Conclusion** : l'indépendance se vérifie **par le calcul**, l'intuition ne suffit pas."
        ]
      },
      {
        "title": "Méthode : Appliquer les probabilités totales avec trois branches",
        "example": "Une usine possède trois machines : $M_1$ produit $50\\,\\%$ des pièces, $M_2$ en produit $30\\,\\%$ et $M_3$ $20\\,\\%$. Les taux de pièces défectueuses sont respectivement $2\\,\\%$, $3\\,\\%$ et $5\\,\\%$. On prélève une pièce au hasard ; $D$ : « la pièce est défectueuse ». Calculer $P(D)$ puis $P_D(M_3)$.",
        "steps": [
          "**Étape 1 (Arbre)** : premier niveau $P(M_1) = 0{,}5$, $P(M_2) = 0{,}3$, $P(M_3) = 0{,}2$ ; second niveau $P_{M_1}(D) = 0{,}02$, $P_{M_2}(D) = 0{,}03$, $P_{M_3}(D) = 0{,}05$.",
          "**Étape 2 (Probabilités totales)** : $P(D) = 0{,}5 \\times 0{,}02 + 0{,}3 \\times 0{,}03 + 0{,}2 \\times 0{,}05 = 0{,}01 + 0{,}009 + 0{,}01 = 0{,}029$.",
          "**Étape 3 (Probabilité conditionnelle)** : $P_D(M_3) = \\frac{P(M_3 \\cap D)}{P(D)} = \\frac{0{,}01}{0{,}029} \\approx 0{,}345$.",
          "**Conclusion** : $2{,}9\\,\\%$ des pièces sont défectueuses, et une pièce défectueuse provient de $M_3$ avec une probabilité d'environ $0{,}345$."
        ]
      },
      {
        "title": "Méthode : Exploiter un tableau croisé d'effectifs",
        "example": "Un lycée compte $400$ élèves : $200$ filles, dont $140$ demi-pensionnaires, et $200$ garçons, dont $120$ demi-pensionnaires. On choisit un élève au hasard ; $F$ : « c'est une fille », $D$ : « il est demi-pensionnaire ». Calculer $P(D)$, $P_D(F)$, puis étudier l'indépendance de $F$ et $D$.",
        "steps": [
          "**Étape 1 (Total de la catégorie)** : il y a $140 + 120 = 260$ demi-pensionnaires, donc $P(D) = \\frac{260}{400} = 0{,}65$.",
          "**Étape 2 (Conditionnelle)** : parmi les $260$ demi-pensionnaires, $140$ sont des filles : $P_D(F) = \\frac{140}{260} = \\frac{7}{13} \\approx 0{,}538$.",
          "**Étape 3 (Indépendance)** : $P(F \\cap D) = \\frac{140}{400} = 0{,}35$ et $P(F) \\times P(D) = 0{,}5 \\times 0{,}65 = 0{,}325$.",
          "**Conclusion** : $0{,}35 \\neq 0{,}325$, donc $F$ et $D$ ne sont pas indépendants."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas confondre $P(A \\cap B)$ (probabilité que $A$ ET $B$ se réalisent) et $P_A(B)$ (probabilité que $B$ se réalise SACHANT QUE $A$ est déjà réalisé).",
      "⚠️ Événements indépendants $\\neq$ événements incompatibles ! Deux événements incompatibles ($A \\cap B = \\emptyset$) de probabilités non nulles ne sont jamais indépendants.",
      "⚠️ Sur un arbre, les probabilités écrites sur les branches du second niveau sont des probabilités **conditionnelles** ($P_A(B)$), pas des probabilités d'intersections.",
      "⚠️ En général, $P_A(B) \\neq P_B(A)$ : dans l'exemple des machines, $P_{M_3}(D) = 0{,}05$ alors que $P_D(M_3) \\approx 0{,}345$.",
      "⚠️ Dans la formule des probabilités totales, il faut additionner **tous** les chemins menant à l'événement, sans en oublier."
    ],
    "flashcards": [
      {
        "q": "Quelle est la définition de $P_A(B)$ ?",
        "a": "$P_A(B) = \\frac{P(A \\cap B)}{P(A)}$."
      },
      {
        "q": "À quelle condition deux événements $A$ et $B$ sont-ils indépendants ?",
        "a": "$P(A \\cap B) = P(A) \\times P(B)$."
      },
      {
        "q": "Si $P_A(B) = 0{,}35$, que vaut $P_A(\\overline{B})$ ?",
        "a": "$P_A(\\overline{B}) = 1 - 0{,}35 = 0{,}65$."
      },
      {
        "q": "$A$ et $B$ sont indépendants avec $P(A) = 0{,}3$ et $P(B) = 0{,}5$. Calculer $P(A \\cup B)$.",
        "a": "$P(A \\cap B) = 0{,}15$, donc $P(A \\cup B) = 0{,}3 + 0{,}5 - 0{,}15 = 0{,}65$."
      },
      {
        "q": "Dans un lycée de $400$ élèves, $200$ sont des filles, dont $140$ demi-pensionnaires. Quelle est la probabilité qu'un élève soit demi-pensionnaire sachant que c'est une fille ?",
        "a": "$P_F(D) = \\frac{140}{200} = 0{,}7$."
      }
    ]
  },

  "1S2": {
    "title": "1S2 : Variables aléatoires réelles, espérance, variance et écart-type",
    "domain": "Probabilités et Statistiques",
    "objectives": [
      "Définir une variable aléatoire réelle $X$ sur un univers fini.",
      "Déterminer la loi de probabilité de $X$ (valeurs $x_i$ et probabilités associées $P(X = x_i)$).",
      "Calculer l'espérance mathématique $E(X) = \\sum x_i p_i$ et interpréter la notion de jeu équitable ($E(X) = 0$).",
      "Calculer la variance $V(X) = E(X^2) - (E(X))^2$ et l'écart-type $\\sigma(X) = \\sqrt{V(X)}$."
    ],
    "keyPoints": [
      {
        "title": "1. Espérance, variance et écart-type",
        "content": "Pour une variable aléatoire $X$ prenant les valeurs $x_1, x_2, \\dots, x_k$ avec les probabilités $p_i = P(X = x_i)$ :\n• **Espérance mathématique** (moyenne pondérée sur le long terme) :\n$$E(X) = \\sum_{i=1}^k x_i p_i = x_1 p_1 + x_2 p_2 + \\dots + x_k p_k$$\n• **Variance** (mesure de la dispersion par rapport à la moyenne) :\n$$V(X) = \\sum_{i=1}^k (x_i - E(X))^2 p_i = E(X^2) - (E(X))^2 \\quad \\text{(formule de König-Huygens)}$$\n• **Écart-type** : $\\sigma(X) = \\sqrt{V(X)}$ (même unité que $X$)."
      },
      {
        "title": "2. Effet d'une transformation affine $aX + b$",
        "content": "Pour tous réels $a$ et $b$ :\n$$E(aX + b) = a E(X) + b$$\n$$V(aX + b) = a^2 V(X) \\quad \\text{et} \\quad \\sigma(aX + b) = |a| \\sigma(X)$$"
      },
      {
        "title": "3. Variable aléatoire et loi de probabilité",
        "content": "Une **variable aléatoire** $X$ sur un univers fini $\\Omega$ est une fonction qui associe un nombre réel à chaque issue.\n• L'événement $\\{X = x_i\\}$ regroupe les issues pour lesquelles $X$ prend la valeur $x_i$.\n• La **loi de probabilité** de $X$ est la donnée des valeurs $x_i$ et des probabilités $p_i = P(X = x_i)$, souvent présentée dans un tableau. On a toujours $p_1 + p_2 + \\dots + p_k = 1$.\n*Exemple* : on lance deux pièces équilibrées et $X$ est le nombre de « Pile ». $P(X = 0) = \\frac{1}{4}$, $P(X = 1) = \\frac{1}{2}$, $P(X = 2) = \\frac{1}{4}$."
      },
      {
        "title": "4. Interpréter l'espérance par la simulation",
        "content": "Si l'on répète un grand nombre de fois l'expérience, la **moyenne des valeurs obtenues** pour $X$ est en général proche de $E(X)$. On peut l'observer en Python (dé : gain de $10$ si on obtient $6$, perte de $2$ sinon) :\n`from random import randint`\n`def moyenne(N):`\n`    s = 0`\n`    for k in range(N):`\n`        s = s + (10 if randint(1, 6) == 6 else -2)`\n`    return s / N`\nIci $E(X) = 10 \\times \\frac{1}{6} - 2 \\times \\frac{5}{6} = 0$, et `moyenne(100000)` renvoie une valeur proche de $0$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer $E(X)$ et $V(X)$ à l'aide d'un tableau",
        "example": "On lance une pièce équilibrée. Si Pile, on gagne 10 € ; si Face, on perd 6 €. La mise est de 1 €.",
        "steps": [
          "**Étape 1 (Gain net X)** : En cas de Pile, gain net $x_1 = 10 - 1 = +9$ €. En cas de Face, gain net $x_2 = -6 - 1 = -7$ €.",
          "**Étape 2 (Probabilités)** : $p_1 = P(X = 9) = 0{,}5$ et $p_2 = P(X = -7) = 0{,}5$.",
          "**Étape 3 (Espérance)** : $E(X) = 9(0{,}5) + (-7)(0{,}5) = 4{,}5 - 3{,}5 = +1$ €. Le jeu est favorable au joueur (espérance positive)."
        ]
      },
      {
        "title": "Méthode : Déterminer une loi puis calculer $E(X)$, $V(X)$ et $\\sigma(X)$",
        "example": "Une urne contient $2$ boules rouges, $3$ vertes et $5$ blanches, indiscernables au toucher. On tire une boule : rouge, on gagne 5 € ; verte, on gagne 2 € ; blanche, on perd 2 €. $X$ est le gain algébrique.",
        "steps": [
          "**Étape 1 (Loi)** : $P(X = 5) = \\frac{2}{10} = 0{,}2$ ; $P(X = 2) = \\frac{3}{10} = 0{,}3$ ; $P(X = -2) = \\frac{5}{10} = 0{,}5$. Contrôle : $0{,}2 + 0{,}3 + 0{,}5 = 1$.",
          "**Étape 2 (Espérance)** : $E(X) = 5 \\times 0{,}2 + 2 \\times 0{,}3 + (-2) \\times 0{,}5 = 1 + 0{,}6 - 1 = 0{,}6$.",
          "**Étape 3 ($E(X^2)$)** : $E(X^2) = 25 \\times 0{,}2 + 4 \\times 0{,}3 + 4 \\times 0{,}5 = 5 + 1{,}2 + 2 = 8{,}2$.",
          "**Étape 4 (Variance et écart-type)** : $V(X) = 8{,}2 - 0{,}6^2 = 8{,}2 - 0{,}36 = 7{,}84$ et $\\sigma(X) = \\sqrt{7{,}84} = 2{,}8$.",
          "**Conclusion** : en moyenne, on gagne 0,60 € par partie, avec un écart-type de 2,80 €."
        ]
      },
      {
        "title": "Méthode : Rendre un jeu équitable",
        "example": "On lance un dé équilibré. Si l'on obtient $6$, on gagne $a$ euros ; sinon, on perd 2 €. Déterminer $a$ pour que le jeu soit équitable.",
        "steps": [
          "**Étape 1 (Loi du gain $X$)** : $P(X = a) = \\frac{1}{6}$ et $P(X = -2) = \\frac{5}{6}$.",
          "**Étape 2 (Espérance)** : $E(X) = a \\times \\frac{1}{6} + (-2) \\times \\frac{5}{6} = \\frac{a - 10}{6}$.",
          "**Étape 3 (Équation)** : le jeu est équitable si $E(X) = 0 \\iff a - 10 = 0 \\iff a = 10$.",
          "**Conclusion** : il faut un gain de 10 € en cas de $6$ ; si $a > 10$, le jeu est favorable au joueur."
        ]
      },
      {
        "title": "Méthode : Utiliser les propriétés de $E(aX + b)$ et $V(aX + b)$",
        "example": "Pour le jeu de l'urne ci-dessus ($E(X) = 0{,}6$, $V(X) = 7{,}84$), l'organisateur double tous les gains et pertes puis retire 1 € de frais : le nouveau gain est $Y = 2X - 1$. Calculer $E(Y)$, $V(Y)$ et $\\sigma(Y)$.",
        "steps": [
          "**Étape 1 (Espérance)** : $E(Y) = 2E(X) - 1 = 2 \\times 0{,}6 - 1 = 0{,}2$.",
          "**Étape 2 (Variance)** : $V(Y) = 2^2 \\times V(X) = 4 \\times 7{,}84 = 31{,}36$.",
          "**Étape 3 (Écart-type)** : $\\sigma(Y) = |2| \\times \\sigma(X) = 2 \\times 2{,}8 = 5{,}6$ (et $\\sqrt{31{,}36} = 5{,}6$).",
          "**Conclusion** : le jeu reste favorable au joueur (0,20 € par partie en moyenne) mais il devient plus risqué (écart-type 5,60 €)."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans la formule de König-Huygens, $E(X^2)$ se calcule en élevant les **valeurs $x_i$** au carré sans modifier les probabilités : $E(X^2) = \\sum x_i^2 p_i$.",
      "⚠️ Une variance est **toujours positive ou nulle** ($V(X) \\ge 0$). Si vous obtenez un résultat négatif, vous avez inversé les termes de König-Huygens.",
      "⚠️ Toujours vérifier que la somme des probabilités de la loi vaut $1$ : c'est un contrôle simple qui détecte beaucoup d'erreurs.",
      "⚠️ $V(aX + b) = a^2 V(X)$ : la constante $b$ disparaît et $a$ est élevé au carré. Par exemple $V(-2X + 3) = 4V(X)$.",
      "⚠️ L'espérance n'est pas forcément une valeur prise par $X$ : dans l'exemple de l'urne, $E(X) = 0{,}6$ alors que $X$ ne prend que les valeurs $5$, $2$ et $-2$."
    ],
    "flashcards": [
      {
        "q": "Énoncer la formule de König-Huygens pour la variance.",
        "a": "$V(X) = E(X^2) - (E(X))^2$."
      },
      {
        "q": "Si $E(X) = 4$, que vaut $E(3X - 5)$ ?",
        "a": "$E(3X - 5) = 3 E(X) - 5 = 3(4) - 5 = 7$."
      },
      {
        "q": "Si $V(X) = 5$, que vaut $V(-2X + 3)$ ?",
        "a": "$V(-2X + 3) = (-2)^2 \\times 5 = 20$."
      },
      {
        "q": "On lance deux pièces équilibrées ; $X$ est le nombre de « Pile ». Calculer $E(X)$ et $V(X)$.",
        "a": "$E(X) = 0 \\times \\frac{1}{4} + 1 \\times \\frac{1}{2} + 2 \\times \\frac{1}{4} = 1$ ; $E(X^2) = \\frac{1}{2} + 1 = 1{,}5$, donc $V(X) = 1{,}5 - 1 = 0{,}5$."
      },
      {
        "q": "Que signifie « jeu équitable » ?",
        "a": "L'espérance du gain algébrique du joueur est nulle : $E(X) = 0$."
      }
    ]
  }
};

window.MATHS_EXERCISES_1ERE = {
  "1A1": [
    {
      "id": "1A1-1",
      "tier": 1,
      "type": "mcq",
      "title": "Calcul du discriminant",
      "skill": "Résoudre une équation du second degré",
      "statement": "Calculer le discriminant $\\Delta$ du trinôme $P(x) = 3x^2 - 5x + 2$.",
      "options": [
        "$\\Delta = 1$",
        "$\\Delta = -1$",
        "$\\Delta = 49$",
        "$\\Delta = 25$"
      ],
      "correctIndex": 0,
      "answer": "$\\Delta = 1$",
      "hint1": "$\\Delta = b^2 - 4ac$ avec $a=3, b=-5, c=2$.",
      "hint2": "$(-5)^2 - 4(3)(2) = 25 - 24 = 1$.",
      "solution": "$\\Delta = (-5)^2 - 4(3)(2) = 25 - 24 = 1$. Comme $\\Delta > 0$, l'équation admet deux racines réelles distinctes."
    },
    {
      "id": "1A1-2",
      "tier": 2,
      "type": "mcq",
      "title": "Racines et factorisation",
      "skill": "Factoriser un trinôme du second degré",
      "statement": "Quelle est la factorisation du trinôme $2x^2 - 7x + 3$ ?",
      "options": [
        "$(2x - 1)(x - 3)$",
        "$(2x + 1)(x - 3)$",
        "$2(x + 1)(x - 3)$",
        "$(x - 1)(2x - 3)$"
      ],
      "correctIndex": 0,
      "answer": "$(2x - 1)(x - 3)$",
      "hint1": "$\\Delta = (-7)^2 - 4(2)(3) = 49 - 24 = 25 = 5^2$.",
      "hint2": "Racines : $x_1 = \\frac{7-5}{4} = \\frac{1}{2}$ et $x_2 = \\frac{7+5}{4} = 3$. La forme est $a(x-x_1)(x-x_2)$.",
      "solution": "Les racines sont $1/2$ et $3$. Factorisation : $2(x - 1/2)(x - 3) = (2x - 1)(x - 3)$."
    },
    {
      "id": "1A1-3",
      "tier": 3,
      "type": "mcq",
      "title": "Signe d'un trinôme et inéquation",
      "skill": "Dresser le tableau de signes d'un trinôme",
      "statement": "Résoudre dans $\\mathbb{R}$ l'inéquation $-x^2 + 4x - 3 > 0$.",
      "options": [
        "$x \\in ]1 ; 3[$",
        "$x \\in ]-\\infty ; 1[ \\cup ]3 ; +\\infty[$",
        "$x \\in [1 ; 3]$",
        "$x \\in ]-3 ; -1[$"
      ],
      "correctIndex": 0,
      "answer": "$x \\in ]1 ; 3[$",
      "hint1": "Les racines de $-x^2 + 4x - 3 = 0$ sont $x = 1$ et $x = 3$.",
      "hint2": "Le coefficient $a = -1 < 0$ : le trinôme est du signe de $-a$ (donc positif) entre les racines.",
      "solution": "Le trinôme s'annule en 1 et 3. Comme $a = -1 < 0$, la parabole est tournée vers le bas : elle est strictement positive à l'intérieur des racines, soit $]1 ; 3[$."
    },
    {
      "id": "1A1-4",
      "tier": 4,
      "type": "mcq",
      "title": "Nombre de solutions selon un paramètre",
      "skill": "Discuter du nombre de solutions selon un paramètre réel",
      "statement": "Pour quelle(s) valeur(s) de $m$ l'équation $x^2 - mx + 4 = 0$ admet-elle une unique solution réelle ?",
      "options": [
        "$m = -4$ ou $m = 4$",
        "$m = 0$",
        "$m = 2$ ou $m = -2$",
        "$m = 16$"
      ],
      "correctIndex": 0,
      "answer": "$m = -4$ ou $m = 4$",
      "hint1": "Une unique solution réelle $\\iff \\Delta = 0$.",
      "hint2": "$\\Delta = (-m)^2 - 4(1)(4) = m^2 - 16 = 0 \\iff m^2 = 16$.",
      "solution": "$\\Delta = m^2 - 16$. L'équation admet une unique racine double si et seulement si $\\Delta = 0 \\iff m^2 = 16 \\iff m = 4$ ou $m = -4$."
    }
  ],
  "1A2": [
    {
      "id": "1A2-1",
      "tier": 1,
      "type": "mcq",
      "title": "Nombre dérivé et tangente",
      "skill": "Calculer l'équation de la tangente à une courbe",
      "statement": "Soit $f$ une fonction dérivable en 2 telle que $f(2) = 5$ et $f'(2) = -3$. Quelle est l'équation de la tangente à $\\mathcal{C}_f$ au point d'abscisse 2 ?",
      "options": [
        "$y = -3x + 11$",
        "$y = -3x + 5$",
        "$y = 5x - 3$",
        "$y = -3x - 1$"
      ],
      "correctIndex": 0,
      "answer": "$y = -3x + 11$",
      "hint1": "Équation de la tangente : $y = f'(a)(x - a) + f(a)$.",
      "hint2": "$y = -3(x - 2) + 5 = -3x + 6 + 5 = -3x + 11$.",
      "solution": "$y = f'(2)(x - 2) + f(2) = -3(x - 2) + 5 = -3x + 6 + 5 = -3x + 11$."
    },
    {
      "id": "1A2-2",
      "tier": 2,
      "type": "mcq",
      "title": "Taux de variation et limite",
      "skill": "Calculer le nombre dérivé comme limite du taux d'accroissement",
      "statement": "Pour $f(x) = x^2$, calculer la limite quand $h \\to 0$ du taux $\\frac{f(3+h) - f(3)}{h}$.",
      "options": [
        "$6$",
        "$9$",
        "$3$",
        "$0$"
      ],
      "correctIndex": 0,
      "answer": "$6$",
      "hint1": "Le taux d'accroissement tend vers $f'(3)$.",
      "hint2": "Comme $f'(x) = 2x$, $f'(3) = 2 \\times 3 = 6$.",
      "solution": "Par définition, $\\lim_{h \\to 0} \\frac{(3+h)^2 - 9}{h} = \\lim_{h \\to 0} \\frac{6h + h^2}{h} = \\lim_{h \\to 0} (6 + h) = 6 = f'(3)$."
    },
    {
      "id": "1A2-3",
      "tier": 3,
      "type": "mcq",
      "title": "Tangente horizontale",
      "skill": "Trouver les abscisses où la dérivée s'annule",
      "statement": "En quel(s) point(s) la courbe de $f(x) = \\frac{1}{3}x^3 - 4x + 1$ admet-elle une tangente horizontale ?",
      "options": [
        "En $x = -2$ et $x = 2$",
        "En $x = 0$",
        "En $x = 4$",
        "En $x = -4$ et $x = 4$"
      ],
      "correctIndex": 0,
      "answer": "En $x = -2$ et $x = 2$",
      "hint1": "Une tangente horizontale correspond à un coefficient directeur nul, soit $f'(x) = 0$.",
      "hint2": "$f'(x) = x^2 - 4 = 0 \\iff x = 2$ ou $x = -2$.",
      "solution": "$f'(x) = x^2 - 4$. Tangente horizontale $\\iff f'(x) = 0 \\iff x^2 = 4 \\iff x = 2$ ou $x = -2$."
    },
    {
      "id": "1A2-4",
      "tier": 4,
      "type": "mcq",
      "title": "Tangente parallèle à une droite donnée",
      "skill": "Déterminer un point de contact de tangente par parallélisme",
      "statement": "En quel point de la parabole d'équation $y = x^2 - 2x + 3$ la tangente est-elle parallèle à la droite d'équation $y = 4x - 1$ ?",
      "options": [
        "$(3 ; 6)$",
        "$(2 ; 3)$",
        "$(1 ; 2)$",
        "$(4 ; 11)$"
      ],
      "correctIndex": 0,
      "answer": "$(3 ; 6)$",
      "hint1": "Deux droites sont parallèles si elles ont la même pente : $f'(x) = 4$.",
      "hint2": "$2x - 2 = 4 \\implies 2x = 6 \\implies x = 3$. Puis calcule $f(3)$.",
      "solution": "$f'(x) = 2x - 2 = 4 \\iff 2x = 6 \\iff x = 3$. L'ordonnée est $y = 3^2 - 2(3) + 3 = 9 - 6 + 3 = 6$. Le point est $(3 ; 6)$."
    }
  ],
  "1A3": [
    {
      "id": "1A3-1",
      "tier": 1,
      "type": "mcq",
      "title": "Dérivée d'un quotient",
      "skill": "Appliquer la formule de dérivation $(u/v)'$",
      "statement": "Quelle est la dérivée de $f(x) = \\frac{2x + 1}{x - 3}$ sur $\\mathbb{R} \\setminus \\{3\\}$ ?",
      "options": [
        "$-\\frac{7}{(x - 3)^2}$",
        "$\\frac{7}{(x - 3)^2}$",
        "$\\frac{2}{(x - 3)^2}$",
        "$-7$"
      ],
      "correctIndex": 0,
      "answer": "$-\\frac{7}{(x - 3)^2}$",
      "hint1": "Formule : $(u/v)' = \\frac{u'v - uv'}{v^2}$ avec $u=2x+1$ et $v=x-3$.",
      "hint2": "$u'v - uv' = 2(x - 3) - (2x + 1)(1) = 2x - 6 - 2x - 1 = -7$.",
      "solution": "$f'(x) = \\frac{2(x - 3) - 1(2x + 1)}{(x - 3)^2} = \\frac{2x - 6 - 2x - 1}{(x - 3)^2} = -\\frac{7}{(x - 3)^2}$."
    },
    {
      "id": "1A3-2",
      "tier": 2,
      "type": "mcq",
      "title": "Dérivée d'un produit",
      "skill": "Appliquer $(uv)' = u'v + uv'$",
      "statement": "Dériver la fonction $g(x) = (3x - 2)\\sqrt{x}$ pour $x > 0$.",
      "options": [
        "$\\frac{9x - 2}{2\\sqrt{x}}$",
        "$3\\sqrt{x} + \\frac{1}{2\\sqrt{x}}$",
        "$\\frac{3x - 2}{2\\sqrt{x}}$",
        "$\\frac{6x - 2}{\\sqrt{x}}$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{9x - 2}{2\\sqrt{x}}$",
      "hint1": "$g'(x) = 3\\sqrt{x} + (3x - 2)\\frac{1}{2\\sqrt{x}}$.",
      "hint2": "Mets au même dénominateur $2\\sqrt{x}$ : $\\frac{6x + 3x - 2}{2\\sqrt{x}} = \\frac{9x - 2}{2\\sqrt{x}}$.",
      "solution": "$g'(x) = 3\\sqrt{x} + \\frac{3x - 2}{2\\sqrt{x}} = \\frac{3\\sqrt{x}(2\\sqrt{x}) + (3x - 2)}{2\\sqrt{x}} = \\frac{6x + 3x - 2}{2\\sqrt{x}} = \\frac{9x - 2}{2\\sqrt{x}}$."
    },
    {
      "id": "1A3-3",
      "tier": 3,
      "type": "mcq",
      "title": "Tableau de variations et extremum",
      "skill": "Déterminer les extrema d'une fonction polynôme du 3ème degré",
      "statement": "Pour $f(x) = 2x^3 - 9x^2 + 12x + 1$ sur $[0 ; 3]$, quel est le maximum local ?",
      "options": [
        "$6$ (atteint en $x = 1$)",
        "$5$ (atteint en $x = 2$)",
        "$10$ (atteint en $x = 3$)",
        "$1$ (atteint en $x = 0$)"
      ],
      "correctIndex": 0,
      "answer": "$6$ (atteint en $x = 1$)",
      "hint1": "$f'(x) = 6x^2 - 18x + 12 = 6(x^2 - 3x + 2) = 6(x - 1)(x - 2)$.",
      "hint2": "$f'$ est positive sur $[0 ; 1]$, négative sur $[1 ; 2]$, positive sur $[2 ; 3]$. Le maximum local est en $x=1$.",
      "solution": "$f'(x) = 6(x - 1)(x - 2)$. $f'$ passe de $+$ à $-$ en $x = 1$, donc $f(1) = 2(1) - 9(1) + 12(1) + 1 = 6$ est un maximum local."
    },
    {
      "id": "1A3-4",
      "tier": 4,
      "type": "mcq",
      "title": "Problème d'optimisation",
      "skill": "Modéliser et optimiser une grandeur géométrique",
      "statement": "On dispose d'un grillage de 40 m pour entourer un enclos rectangulaire contre un mur (3 côtés à grillager). Quelle aire maximale peut-on obtenir ?",
      "options": [
        "$200\\text{ m}^2$",
        "$100\\text{ m}^2$",
        "$400\\text{ m}^2$",
        "$150\\text{ m}^2$"
      ],
      "correctIndex": 0,
      "answer": "$200\\text{ m}^2$",
      "hint1": "Si la largeur est $x$, la longueur est $40 - 2x$. L'aire est $A(x) = x(40 - 2x) = 40x - 2x^2$.",
      "hint2": "$A'(x) = 40 - 4x = 0 \\implies x = 10$. Aire : $A(10) = 10 \\times 20 = 200$.",
      "solution": "Périmètre grillagé : $2x + y = 40 \\implies y = 40 - 2x$. L'aire est $A(x) = x(40 - 2x) = -2x^2 + 40x$. Dérivée : $A'(x) = -4x + 40 = 0 \\iff x = 10$. Aire max $= 10 \\times 20 = 200\\text{ m}^2$."
    }
  ],
  "1A4": [
    {
      "id": "1A4-1",
      "tier": 1,
      "type": "mcq",
      "title": "Simplification d'exponentielles",
      "skill": "Appliquer les propriétés algébriques de la fonction exponentielle",
      "statement": "Simplifier l'expression $A = \\frac{e^{3x+1} \\times e^{-x+2}}{e^{2x-4}}$.",
      "options": [
        "$e^7$",
        "$e^{4x+7}$",
        "$e^{-1}$",
        "$e^{2x-1}$"
      ],
      "correctIndex": 0,
      "answer": "$e^7$",
      "hint1": "Utilise $e^a \\times e^b = e^{a+b}$ et $e^u / e^v = e^{u-v}$.",
      "hint2": "Numérateur : $(3x+1) + (-x+2) = 2x + 3$. Puis $(2x+3) - (2x-4) = 7$.",
      "solution": "$A = \\frac{e^{(3x+1)+(-x+2)}}{e^{2x-4}} = \\frac{e^{2x+3}}{e^{2x-4}} = e^{(2x+3)-(2x-4)} = e^7$."
    },
    {
      "id": "1A4-2",
      "tier": 2,
      "type": "mcq",
      "title": "Dérivée avec exponentielle $e^{u(x)}$",
      "skill": "Dériver une fonction de la forme $e^{u(x)}$",
      "statement": "Quelle est la dérivée de $f(x) = e^{-3x^2 + 2x}$ ?",
      "options": [
        "$(-6x + 2)e^{-3x^2 + 2x}$",
        "$-6x e^{-3x^2 + 2x}$",
        "$e^{-6x + 2}$",
        "$(6x - 2)e^{-3x^2 + 2x}$"
      ],
      "correctIndex": 0,
      "answer": "$(-6x + 2)e^{-3x^2 + 2x}$",
      "hint1": "Formule : $(e^u)' = u' e^u$.",
      "hint2": "Ici $u(x) = -3x^2 + 2x$, donc $u'(x) = -6x + 2$.",
      "solution": "$(e^u)' = u' e^u$. Avec $u(x) = -3x^2 + 2x$, on a $u'(x) = -6x + 2$, donc $f'(x) = (-6x + 2)e^{-3x^2 + 2x}$."
    },
    {
      "id": "1A4-3",
      "tier": 3,
      "type": "mcq",
      "title": "Étude de fonction avec exponentielle",
      "skill": "Dresser les variations de $(ax+b)e^x$",
      "statement": "Soit $g(x) = (x - 2)e^x$. Quel est le minimum de $g$ sur $\\mathbb{R}$ ?",
      "options": [
        "$-e$ (atteint en $x = 1$)",
        "$-2$ (atteint en $x = 0$)",
        "$0$ (atteint en $x = 2$)",
        "$-e^2$ (atteint en $x = -1$)"
      ],
      "correctIndex": 0,
      "answer": "$-e$ (atteint en $x = 1$)",
      "hint1": "Dérive en utilisant $(uv)' = u'v + uv'$ : $g'(x) = 1 \\cdot e^x + (x - 2)e^x = (x - 1)e^x$.",
      "hint2": "Comme $e^x > 0$, le signe de $g'$ est celui de $x - 1$. Le minimum est en $x = 1$.",
      "solution": "$g'(x) = 1 \\cdot e^x + (x - 2)e^x = (x - 1)e^x$. Comme $e^x > 0$, $g'(x) = 0 \\iff x = 1$. $g(1) = (1 - 2)e^1 = -e$."
    },
    {
      "id": "1A4-4",
      "tier": 4,
      "type": "mcq",
      "title": "Équation se ramenant au second degré",
      "skill": "Résoudre une équation avec changement de variable $X = e^x$",
      "statement": "Résoudre dans $\\mathbb{R}$ l'équation $e^{2x} - 5e^x + 6 = 0$.",
      "options": [
        "$x = \\ln(2)$ ou $x = \\ln(3)$",
        "$x = 2$ ou $x = 3$",
        "$x = e^2$ ou $x = e^3$",
        "Pas de solution réelle"
      ],
      "correctIndex": 0,
      "answer": "$x = \\ln(2)$ ou $x = \\ln(3)$",
      "hint1": "Pose $X = e^x > 0$. L'équation devient $X^2 - 5X + 6 = 0$.",
      "hint2": "Les racines sont $X = 2$ et $X = 3$, donc $e^x = 2 \\iff x = \\ln(2)$ et $e^x = 3 \\iff x = \\ln(3)$.",
      "solution": "Posons $X = e^x$. Alors $X^2 - 5X + 6 = 0 \\iff (X - 2)(X - 3) = 0 \\iff X = 2$ ou $X = 3$. Comme $X > 0$, $x = \\ln(2)$ ou $x = \\ln(3)$."
    }
  ],
  "1A5": [
    {
      "id": "1A5-1",
      "tier": 1,
      "type": "mcq",
      "title": "Sens de variation d'une suite",
      "skill": "Étudier le signe de u_{n+1} - u_n",
      "statement": "Soit la suite $(u_n)$ définie par $u_n = 3n^2 - 2n + 5$. Quel est son sens de variation pour $n \\ge 1$ ?",
      "options": [
        "Strictement croissante",
        "Strictement décroissante",
        "Constante",
        "Non monotone"
      ],
      "correctIndex": 0,
      "answer": "Strictement croissante",
      "hint1": "Calcule $u_{n+1} - u_n$.",
      "hint2": "$u_{n+1} - u_n = 3(n+1)^2 - 2(n+1) + 5 - (3n^2 - 2n + 5) = 6n + 1 > 0$.",
      "solution": "$u_{n+1} - u_n = 3(n^2 + 2n + 1) - 2n - 2 + 5 - 3n^2 + 2n - 5 = 6n + 1$. Pour tout $n \\ge 1$, $6n + 1 > 0$, donc la suite est strictement croissante."
    },
    {
      "id": "1A5-2",
      "tier": 2,
      "type": "mcq",
      "title": "Calculer les termes d'une suite définie par récurrence",
      "skill": "Calculer des termes d'une suite définie par une relation de récurrence",
      "statement": "La suite $(u_n)$ est définie par $u_0 = 2$ et, pour tout $n \\in \\mathbb{N}$, $u_{n+1} = u_n^2 - 1$. Que vaut $u_3$ ?",
      "options": [
        "$63$",
        "$8$",
        "$15$",
        "$3$"
      ],
      "correctIndex": 0,
      "answer": "$63$",
      "hint1": "Calcule les termes un par un : $u_1$ à partir de $u_0$, puis $u_2$, puis $u_3$.",
      "hint2": "$u_1 = 2^2 - 1 = 3$ et $u_2 = 3^2 - 1 = 8$.",
      "solution": "$u_1 = u_0^2 - 1 = 4 - 1 = 3$ ; $u_2 = u_1^2 - 1 = 9 - 1 = 8$ ; $u_3 = u_2^2 - 1 = 64 - 1 = 63$.\nRemarque : pour une suite définie par récurrence, on ne peut pas calculer $u_3$ directement « en remplaçant $n$ par 3 » ; il faut passer par les termes précédents. ($8$ et $3$ sont $u_2$ et $u_1$.)"
    },
    {
      "id": "1A5-3",
      "tier": 3,
      "type": "mcq",
      "title": "Sens de variation par le quotient de deux termes consécutifs",
      "skill": "Étudier le sens de variation d'une suite à termes positifs",
      "statement": "Soit la suite définie pour $n \\ge 1$ par $u_n = \\dfrac{3^n}{n}$. Quel est son sens de variation ?",
      "options": [
        "Strictement croissante, car $u_n > 0$ et $\\dfrac{u_{n+1}}{u_n} = \\dfrac{3n}{n+1} > 1$",
        "Strictement décroissante, car $\\dfrac{1}{n}$ est décroissante",
        "Strictement décroissante, car $\\dfrac{u_{n+1}}{u_n} = \\dfrac{3n}{n+1} < 1$",
        "Ni croissante ni décroissante"
      ],
      "correctIndex": 0,
      "answer": "Strictement croissante, car $u_n > 0$ et $\\dfrac{u_{n+1}}{u_n} = \\dfrac{3n}{n+1} > 1$",
      "hint1": "Les termes sont strictement positifs : on peut comparer $\\dfrac{u_{n+1}}{u_n}$ à $1$.",
      "hint2": "$\\dfrac{u_{n+1}}{u_n} = \\dfrac{3^{n+1}}{n+1} \\times \\dfrac{n}{3^n} = \\dfrac{3n}{n+1}$. Compare $3n$ et $n + 1$.",
      "solution": "Pour tout $n \\ge 1$, $u_n > 0$ et\n$$\\frac{u_{n+1}}{u_n} = \\frac{3^{n+1}}{n+1} \\times \\frac{n}{3^n} = \\frac{3n}{n+1}.$$\nOr $3n - (n + 1) = 2n - 1 > 0$ pour $n \\ge 1$, donc $\\dfrac{3n}{n+1} > 1$, d'où $u_{n+1} > u_n$.\nLa suite est **strictement croissante**.\nAttention : la méthode du quotient n'est valable que pour une suite à termes strictement positifs."
    },
    {
      "id": "1A5-4",
      "tier": 4,
      "type": "mcq",
      "title": "Suite arithmético-géométrique et suite auxiliaire",
      "skill": "Étudier une suite récurrente u_{n+1} = a u_n + b",
      "statement": "Soit $u_0 = 2$ et $u_{n+1} = 0{,}5 u_n + 3$. En posant $v_n = u_n - 6$, quelle est la nature de $(v_n)$ et la limite de $u_n$ ?",
      "options": [
        "$(v_n)$ est géométrique de raison $0{,}5$ et $\\lim u_n = 6$",
        "$(v_n)$ est arithmétique de raison $3$ et $\\lim u_n = +\\infty$",
        "$(v_n)$ est géométrique de raison $3$ et $\\lim u_n = 0$",
        "$(v_n)$ n'a pas de limite"
      ],
      "correctIndex": 0,
      "answer": "$(v_n)$ est géométrique de raison $0{,}5$ et $\\lim u_n = 6$",
      "hint1": "$v_{n+1} = u_{n+1} - 6 = 0{,}5 u_n + 3 - 6 = 0{,}5(u_n - 6) = 0{,}5 v_n$.",
      "hint2": "Comme $|0{,}5| < 1$, $\\lim v_n = 0$, donc $\\lim u_n = 6$.",
      "solution": "$v_{n+1} = 0{,}5 u_n + 3 - 6 = 0{,}5(u_n - 6) = 0{,}5 v_n$. $(v_n)$ est géométrique de raison $0{,}5$. Comme $|0{,}5| < 1$, $\\lim v_n = 0 \\implies \\lim u_n = 6$."
    }
  ],
  "1A6": [
    {
      "id": "1A6-1",
      "tier": 1,
      "type": "mcq",
      "title": "Somme d'une suite géométrique",
      "skill": "Calculer la somme 1 + q + q^2 + ... + q^n",
      "statement": "Calculer la somme $S = 1 + 2 + 4 + 8 + 16 + 32 + 64$.",
      "options": [
        "$127$",
        "$128$",
        "$63$",
        "$255$"
      ],
      "correctIndex": 0,
      "answer": "$127$",
      "hint1": "Formule : $\\frac{1 - q^{n+1}}{1 - q}$ avec $q = 2$.",
      "hint2": "Il y a 7 termes : $2^0$ à $2^6$. $\\frac{1 - 2^7}{1 - 2} = \\frac{1 - 128}{-1} = 127$.",
      "solution": "$S = \\sum_{k=0}^6 2^k = \\frac{1 - 2^7}{1 - 2} = \\frac{1 - 128}{-1} = 127$."
    },
    {
      "id": "1A6-2",
      "tier": 2,
      "type": "mcq",
      "title": "Terme général d'une suite géométrique",
      "skill": "Calculer un terme lointain d'une suite géométrique",
      "statement": "Soit $(v_n)$ une suite géométrique de premier terme $v_1 = 3$ et de raison $q = \\frac{1}{2}$. Que vaut $v_5$ ?",
      "options": [
        "$\\frac{3}{16}$",
        "$\\frac{3}{32}$",
        "$\\frac{3}{8}$",
        "$\\frac{1}{16}$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{3}{16}$",
      "hint1": "$v_n = v_1 \\times q^{n-1}$.",
      "hint2": "$v_5 = 3 \\times (1/2)^4 = 3 \\times \\frac{1}{16} = \\frac{3}{16}$.",
      "solution": "$v_5 = v_1 \\times q^{5-1} = 3 \\times \\left(\\frac{1}{2}\\right)^4 = \\frac{3}{16}$."
    },
    {
      "id": "1A6-3",
      "tier": 3,
      "type": "mcq",
      "title": "Modélisation par une suite géométrique",
      "skill": "Appliquer un taux d'évolution répété",
      "statement": "Une ville compte 50 000 habitants en 2020. Sa population diminue de 2% chaque année. Quelle formule donne la population $P_n$ en $2020 + n$ ?",
      "options": [
        "$P_n = 50\\,000 \\times (0{,}98)^n$",
        "$P_n = 50\\,000 \\times (1{,}02)^n$",
        "$P_n = 50\\,000 - 1000n$",
        "$P_n = 50\\,000 \\times (0{,}02)^n$"
      ],
      "correctIndex": 0,
      "answer": "$P_n = 50\\,000 \\times (0{,}98)^n$",
      "hint1": "Une baisse de 2% correspond à multiplier par le coefficient multiplicateur $1 - 0{,}02 = 0{,}98$.",
      "hint2": "Il s'agit donc d'une suite géométrique de raison $q = 0{,}98$.",
      "solution": "Le coefficient multiplicateur associé à une baisse de 2% est $1 - 2/100 = 0{,}98$. D'où $P_n = 50\\,000 \\times (0{,}98)^n$."
    },
    {
      "id": "1A6-4",
      "tier": 4,
      "type": "mcq",
      "title": "Limite de la somme d'une suite géométrique",
      "skill": "Calculer la limite d'une série géométrique convergente",
      "statement": "Quelle est la limite quand $n \\to +\\infty$ de $S_n = \\sum_{k=0}^n \\left(\\frac{1}{3}\\right)^k$ ?",
      "options": [
        "$\\frac{3}{2}$",
        "$3$",
        "$1$",
        "$\\frac{2}{3}$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{3}{2}$",
      "hint1": "$S_n = \\frac{1 - (1/3)^{n+1}}{1 - 1/3}$.",
      "hint2": "Comme $|1/3| < 1$, $(1/3)^{n+1} \\to 0$. La limite est $\\frac{1}{2/3} = \\frac{3}{2}$.",
      "solution": "Comme $|1/3| < 1$, $\\lim_{n \\to +\\infty} (1/3)^{n+1} = 0$. Donc $\\lim S_n = \\frac{1}{1 - 1/3} = \\frac{1}{2/3} = \\frac{3}{2}$."
    },
    {
      "id": "1A6-5",
      "tier": 2,
      "type": "mcq",
      "title": "Suite arithmétique et terme général",
      "skill": "Calculer un terme d'une suite arithmétique",
      "statement": "Soit $(u_n)$ une suite arithmétique de premier terme $u_0 = 4$ et de raison $r = -3$. Que vaut $u_{20}$ ?",
      "options": [
        "$-56$",
        "$-60$",
        "$-53$",
        "$64$"
      ],
      "correctIndex": 0,
      "answer": "$-56$",
      "hint1": "Formule : $u_n = u_0 + n \\times r$.",
      "hint2": "$u_{20} = 4 + 20 \\times (-3) = 4 - 60 = -56$.",
      "solution": "$u_{20} = u_0 + 20r = 4 + 20(-3) = 4 - 60 = -56$."
    },
    {
      "id": "1A6-6",
      "tier": 3,
      "type": "mcq",
      "title": "Somme des termes d'une suite arithmétique",
      "skill": "Appliquer la formule de la somme des termes consécutifs",
      "statement": "Calculer la somme $S = 5 + 8 + 11 + \\dots + 62$.",
      "options": [
        "$670$",
        "$603$",
        "$1340$",
        "$700$"
      ],
      "correctIndex": 0,
      "answer": "$670$",
      "hint1": "C'est une suite arithmétique de raison $r = 3$. Trouve le nombre de termes $N$ : $62 = 5 + (N - 1) \\times 3$.",
      "hint2": "$3(N - 1) = 57 \\implies N - 1 = 19 \\implies N = 20$. Puis $S = 20 \\times \\frac{5 + 62}{2}$.",
      "solution": "$u_n = 5 + 3n$. $62 = 5 + 3n \\iff 3n = 57 \\iff n = 19$, donc 20 termes de 0 à 19. $S = 20 \\times \\frac{5 + 62}{2} = 10 \\times 67 = 670$."
    }
  ],
  "1G1": [
    {
      "id": "1G1-1",
      "tier": 1,
      "type": "mcq",
      "title": "Valeur trigonométrique remarquable",
      "skill": "Connaître le cosinus et le sinus des angles remarquables",
      "statement": "Quelle est la valeur exacte de $\\cos\\left(\\frac{5\\pi}{6}\\right)$ ?",
      "options": [
        "$-\\frac{\\sqrt{3}}{2}$",
        "$\\frac{\\sqrt{3}}{2}$",
        "$-\\frac{1}{2}$",
        "$\\frac{1}{2}$"
      ],
      "correctIndex": 0,
      "answer": "$-\\frac{\\sqrt{3}}{2}$",
      "hint1": "$\\frac{5\\pi}{6} = \\pi - \\frac{\\pi}{6}$.",
      "hint2": "$\\cos(\\pi - x) = -\\cos(x)$, or $\\cos(\\pi/6) = \\frac{\\sqrt{3}}{2}$.",
      "solution": "$\\cos(5\\pi/6) = \\cos(\\pi - \\pi/6) = -\\cos(\\pi/6) = -\\frac{\\sqrt{3}}{2}$."
    },
    {
      "id": "1G1-2",
      "tier": 2,
      "type": "mcq",
      "title": "Relation fondamentale de la trigonométrie",
      "skill": "Utiliser cos^2(x) + sin^2(x) = 1",
      "statement": "Sachant que $\\sin(x) = \\frac{3}{5}$ et que $x \\in \\left[\\frac{\\pi}{2} ; \\pi\\right]$, que vaut $\\cos(x)$ ?",
      "options": [
        "$-\\frac{4}{5}$",
        "$\\frac{4}{5}$",
        "$-\\frac{2}{5}$",
        "$\\frac{16}{25}$"
      ],
      "correctIndex": 0,
      "answer": "$-\\frac{4}{5}$",
      "hint1": "$\\cos^2(x) = 1 - \\sin^2(x) = 1 - 9/25 = 16/25$.",
      "hint2": "Sur $[\\pi/2 ; \\pi]$, le cosinus est négatif.",
      "solution": "$\\cos^2(x) = 1 - (3/5)^2 = 16/25$. Comme $x \\in [\\pi/2 ; \\pi]$, $\\cos(x) \\le 0$, donc $\\cos(x) = -\\sqrt{16/25} = -\\frac{4}{5}$."
    },
    {
      "id": "1G1-3",
      "tier": 3,
      "type": "mcq",
      "title": "Résolution d'équation trigonométrique",
      "skill": "Résoudre cos(x) = a sur [-pi ; pi]",
      "statement": "Quelles sont les solutions dans $]-\\pi ; \\pi]$ de $\\cos(x) = -\\frac{1}{2}$ ?",
      "options": [
        "$S = \\left\\{-\\frac{2\\pi}{3} ; \\frac{2\\pi}{3}\\right\\}$",
        "$S = \\left\\{-\\frac{\\pi}{3} ; \\frac{\\pi}{3}\\right\\}$",
        "$S = \\left\\{\\frac{2\\pi}{3} ; \\frac{4\\pi}{3}\\right\\}$",
        "$S = \\left\\{-\\frac{5\\pi}{6} ; \\frac{5\\pi}{6}\\right\\}$"
      ],
      "correctIndex": 0,
      "answer": "$S = \\left\\{-\\frac{2\\pi}{3} ; \\frac{2\\pi}{3}\\right\\}$",
      "hint1": "$\\cos(x) = -\\cos(\\pi/3) = \\cos(\\pi - \\pi/3) = \\cos(2\\pi/3)$.",
      "hint2": "Les deux solutions sur $]-\\pi ; \\pi]$ sont $\\alpha$ et $-\\alpha$.",
      "solution": "$\\cos(x) = \\cos(2\\pi/3) \\iff x = \\frac{2\\pi}{3}$ ou $x = -\\frac{2\\pi}{3}$ dans l'intervalle $]-\\pi ; \\pi]$."
    },
    {
      "id": "1G1-4",
      "tier": 4,
      "type": "mcq",
      "title": "Formule de duplication",
      "skill": "Appliquer cos(2x) = 2 cos^2(x) - 1",
      "statement": "Exprimer $\\cos(2x)$ en fonction de $\\cos(x)$ pour tout réel $x$.",
      "options": [
        "$2\\cos^2(x) - 1$",
        "$2\\cos(x) - 1$",
        "$\\cos^2(x) + \\sin^2(x)$",
        "$1 - \\cos^2(x)$"
      ],
      "correctIndex": 0,
      "answer": "$2\\cos^2(x) - 1$",
      "hint1": "$\\cos(2x) = \\cos^2(x) - \\sin^2(x)$.",
      "hint2": "Remplace $\\sin^2(x)$ par $1 - \\cos^2(x)$.",
      "solution": "$\\cos(2x) = \\cos^2(x) - \\sin^2(x) = \\cos^2(x) - (1 - \\cos^2(x)) = 2\\cos^2(x) - 1$."
    }
  ],
  "1G2": [
    {
      "id": "1G2-1",
      "tier": 1,
      "type": "mcq",
      "title": "Produit scalaire analytique",
      "skill": "Calculer u.v dans un repère orthonormé avec xx' + yy'",
      "statement": "Dans un repère orthonormé, soit $\\vec{u}(3 ; -4)$ et $\\vec{v}(2 ; 5)$. Calculer le produit scalaire $\\vec{u} \\cdot \\vec{v}$.",
      "options": [
        "$-14$",
        "$26$",
        "$-13$",
        "$14$"
      ],
      "correctIndex": 0,
      "answer": "$-14$",
      "hint1": "$\\vec{u} \\cdot \\vec{v} = x x' + y y'$.",
      "hint2": "$3 \\times 2 + (-4) \\times 5 = 6 - 20 = -14$.",
      "solution": "$\\vec{u} \\cdot \\vec{v} = 3(2) + (-4)(5) = 6 - 20 = -14$."
    },
    {
      "id": "1G2-2",
      "tier": 2,
      "type": "mcq",
      "title": "Produit scalaire géométrique",
      "skill": "Calculer ||u|| ||v|| cos(theta)",
      "statement": "Soit deux vecteurs de normes $\\|\\vec{u}\\| = 4$, $\\|\\vec{v}\\| = 5$ formant un angle de $\\frac{\\pi}{3}$. Que vaut $\\vec{u} \\cdot \\vec{v}$ ?",
      "options": [
        "$10$",
        "$10\\sqrt{3}$",
        "$20$",
        "$5$"
      ],
      "correctIndex": 0,
      "answer": "$10$",
      "hint1": "$\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\cos(\\theta)$.",
      "hint2": "$\\cos(\\pi/3) = \\frac{1}{2}$. Donc $4 \\times 5 \\times \\frac{1}{2} = 10$.",
      "solution": "$\\vec{u} \\cdot \\vec{v} = 4 \\times 5 \\times \\cos(\\pi/3) = 20 \\times \\frac{1}{2} = 10$."
    },
    {
      "id": "1G2-3",
      "tier": 3,
      "type": "mcq",
      "title": "Orthogonalité et paramètre",
      "skill": "Appliquer la condition d'orthogonalité u.v = 0",
      "statement": "Pour quelle valeur de $k$ les vecteurs $\\vec{u}(2 ; k)$ et $\\vec{v}(k - 1 ; -3)$ sont-ils orthogonaux ?",
      "options": [
        "$k = -2$",
        "$k = 2$",
        "$k = 1$",
        "$k = -1$"
      ],
      "correctIndex": 0,
      "answer": "$k = -2$",
      "hint1": "$\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0$.",
      "hint2": "$2(k - 1) + k(-3) = 0 \\iff 2k - 2 - 3k = 0$.",
      "solution": "$\\vec{u} \\cdot \\vec{v} = 2(k - 1) - 3k = -k - 2 = 0 \\iff k = -2$."
    },
    {
      "id": "1G2-4",
      "tier": 4,
      "type": "mcq",
      "title": "Théorème d'Al-Kashi",
      "skill": "Calculer une longueur dans un triangle quelconque avec Al-Kashi",
      "statement": "Dans un triangle $ABC$, on donne $AB = 5$, $AC = 8$ et $\\widehat{BAC} = 60^\\circ$. Que vaut $BC$ ?",
      "options": [
        "$7$",
        "$\\sqrt{89}$",
        "$\\sqrt{129}$",
        "$3\\sqrt{5}$"
      ],
      "correctIndex": 0,
      "answer": "$7$",
      "hint1": "Formule d'Al-Kashi : $BC^2 = AB^2 + AC^2 - 2 AB \\times AC \\cos(\\widehat{A})$.",
      "hint2": "$BC^2 = 25 + 64 - 2(5)(8)(0{,}5) = 89 - 40 = 49$.",
      "solution": "$BC^2 = 5^2 + 8^2 - 2(5)(8)\\cos(60^\\circ) = 25 + 64 - 40 = 49$, donc $BC = \\sqrt{49} = 7$."
    }
  ],
  "1G3": [
    {
      "id": "1G3-1",
      "tier": 1,
      "type": "mcq",
      "title": "Vecteur normal et droite",
      "skill": "Identifier un vecteur normal d'une droite",
      "statement": "Un vecteur normal à la droite d'équation cartésienne $4x - 7y + 1 = 0$ est :",
      "options": [
        "$\\vec{n}(4 ; -7)$",
        "$\\vec{n}(7 ; 4)$",
        "$\\vec{n}(-7 ; 4)$",
        "$\\vec{n}(4 ; 7)$"
      ],
      "correctIndex": 0,
      "answer": "$\\vec{n}(4 ; -7)$",
      "hint1": "Pour une droite d'équation $ax + by + c = 0$, un vecteur normal est $\\vec{n}(a ; b)$.",
      "hint2": "Ici $a = 4$ et $b = -7$.",
      "solution": "D'après le cours, les coefficients de $x$ et $y$ donnent les coordonnées d'un vecteur normal : $\\vec{n}(a ; b) = \\vec{n}(4 ; -7)$."
    },
    {
      "id": "1G3-2",
      "tier": 2,
      "type": "mcq",
      "title": "Équation cartésienne de cercle",
      "skill": "Écrire l'équation d'un cercle connaissant centre et rayon",
      "statement": "Quelle est l'équation du cercle de centre $\\Omega(2 ; -3)$ et de rayon $R = 4$ ?",
      "options": [
        "$(x - 2)^2 + (y + 3)^2 = 16$",
        "$(x + 2)^2 + (y - 3)^2 = 16$",
        "$(x - 2)^2 + (y + 3)^2 = 4$",
        "$x^2 + y^2 = 16$"
      ],
      "correctIndex": 0,
      "answer": "$(x - 2)^2 + (y + 3)^2 = 16$",
      "hint1": "L'équation d'un cercle de centre $(x_0, y_0)$ et de rayon $R$ est $(x - x_0)^2 + (y - y_0)^2 = R^2$.",
      "hint2": "$R^2 = 4^2 = 16$.",
      "solution": "$(x - 2)^2 + (y - (-3))^2 = 4^2 \\iff (x - 2)^2 + (y + 3)^2 = 16$."
    },
    {
      "id": "1G3-3",
      "tier": 3,
      "type": "mcq",
      "title": "Équation d'une droite perpendiculaire",
      "skill": "Déterminer la perpendiculaire à une droite passant par un point",
      "statement": "Quelle est l'équation cartésienne de la droite passant par $A(1 ; 2)$ et perpendiculaire à la droite d'équation $2x + 3y - 5 = 0$ ?",
      "options": [
        "$3x - 2y + 1 = 0$",
        "$2x + 3y - 8 = 0$",
        "$3x + 2y - 7 = 0$",
        "$-2x + 3y - 4 = 0$"
      ],
      "correctIndex": 0,
      "answer": "$3x - 2y + 1 = 0$",
      "hint1": "Un vecteur normal à la première droite est $(2 ; 3)$. Il sert de vecteur directeur à la droite perpendiculaire.",
      "hint2": "Un vecteur normal à la nouvelle droite est $(3 ; -2)$. Son équation est $3x - 2y + c = 0$.",
      "solution": "La droite cherchée a pour vecteur normal un vecteur orthogonal à $(2 ; 3)$, par exemple $(3 ; -2)$. Équation : $3x - 2y + c = 0$. En $A(1 ; 2)$ : $3(1) - 2(2) + c = 0 \\iff c = 1$. Donc $3x - 2y + 1 = 0$."
    },
    {
      "id": "1G3-4",
      "tier": 4,
      "type": "mcq",
      "title": "Cercle défini par un diamètre",
      "skill": "Caractériser un cercle par le produit scalaire MA.MB = 0",
      "statement": "Soit $A(-1 ; 2)$ et $B(3 ; 6)$. Le cercle de diamètre $[AB]$ a pour équation :",
      "options": [
        "$(x - 1)^2 + (y - 4)^2 = 8$",
        "$(x + 1)^2 + (y + 4)^2 = 8$",
        "$(x - 1)^2 + (y - 4)^2 = 32$",
        "$(x - 2)^2 + (y - 3)^2 = 8$"
      ],
      "correctIndex": 0,
      "answer": "$(x - 1)^2 + (y - 4)^2 = 8$",
      "hint1": "Le centre $\\Omega$ est le milieu de $[AB]$ : $\\Omega(1 ; 4)$.",
      "hint2": "Le rayon au carré est $\\Omega A^2 = (-1 - 1)^2 + (2 - 4)^2 = (-2)^2 + (-2)^2 = 8$.",
      "solution": "Milieu $\\Omega\\left(\\frac{-1+3}{2} ; \\frac{2+6}{2}\\right) = \\Omega(1 ; 4)$. Rayon $R^2 = \\Omega A^2 = (-2)^2 + (-2)^2 = 8$. Équation : $(x - 1)^2 + (y - 4)^2 = 8$."
    }
  ],
  "1S1": [
    {
      "id": "1S1-1",
      "tier": 1,
      "type": "mcq",
      "title": "Formule des probabilités totales",
      "skill": "Calculer une probabilité totale avec un arbre pondéré",
      "statement": "On donne $P(A) = 0{,}3$, $P_A(B) = 0{,}8$ et $P_{\\overline{A}}(B) = 0{,}2$. Que vaut $P(B)$ ?",
      "options": [
        "$0{,}38$",
        "$0{,}50$",
        "$0{,}24$",
        "$0{,}42$"
      ],
      "correctIndex": 0,
      "answer": "$0{,}38$",
      "hint1": "Formule : $P(B) = P(A) \\times P_A(B) + P(\\overline{A}) \\times P_{\\overline{A}}(B)$.",
      "hint2": "$P(\\overline{A}) = 1 - 0{,}3 = 0{,}7$. Alors $0{,}3 \\times 0{,}8 + 0{,}7 \\times 0{,}2 = 0{,}24 + 0{,}14 = 0{,}38$.",
      "solution": "$P(B) = P(A \\cap B) + P(\\overline{A} \\cap B) = 0{,}3(0{,}8) + (1 - 0{,}3)(0{,}2) = 0{,}24 + 0{,}14 = 0{,}38$."
    },
    {
      "id": "1S1-2",
      "tier": 2,
      "type": "mcq",
      "title": "Probabilité conditionnelle inverse",
      "skill": "Calculer P_B(A) avec P(A inter B) / P(B)",
      "statement": "Sachant que $P(A \\cap B) = 0{,}12$ et que $P(B) = 0{,}40$, calculer $P_B(A)$.",
      "options": [
        "$0{,}30$",
        "$0{,}048$",
        "$0{,}28$",
        "$0{,}52$"
      ],
      "correctIndex": 0,
      "answer": "$0{,}30$",
      "hint1": "$P_B(A) = \\frac{P(A \\cap B)}{P(B)}$.",
      "hint2": "$\\frac{0{,}12}{0{,}40} = \\frac{12}{40} = 0{,}30$.",
      "solution": "$P_B(A) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0{,}12}{0{,}40} = 0{,}30$."
    },
    {
      "id": "1S1-3",
      "tier": 3,
      "type": "mcq",
      "title": "Test d'indépendance de deux événements",
      "skill": "Vérifier si P(A inter B) = P(A) x P(B)",
      "statement": "On donne $P(A) = 0{,}4$ et $P(B) = 0{,}5$. Si $A$ et $B$ sont indépendants, que vaut $P(A \\cup B)$ ?",
      "options": [
        "$0{,}70$",
        "$0{,}90$",
        "$0{,}20$",
        "$0{,}80$"
      ],
      "correctIndex": 0,
      "answer": "$0{,}70$",
      "hint1": "Si $A$ et $B$ sont indépendants, $P(A \\cap B) = P(A) \\times P(B) = 0{,}20$.",
      "hint2": "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0{,}4 + 0{,}5 - 0{,}20 = 0{,}70$.",
      "solution": "Par indépendance, $P(A \\cap B) = 0{,}4 \\times 0{,}5 = 0{,}20$. Alors $P(A \\cup B) = 0{,}4 + 0{,}5 - 0{,}20 = 0{,}70$."
    },
    {
      "id": "1S1-4",
      "tier": 4,
      "type": "mcq",
      "title": "Diagnostic médical et formule de Bayes",
      "skill": "Appliquer la formule de Bayes en situation concrète",
      "statement": "Une maladie touche 1% d'une population ($P(M) = 0{,}01$). Un test est positif à 99% chez les malades ($P_M(T) = 0{,}99$) et faux positif à 2% chez les non-malades ($P_{\\overline{M}}(T) = 0{,}02$). Que vaut $P_T(M)$ ?",
      "options": [
        "Environ $33\\%$",
        "Environ $99\\%$",
        "Environ $1\\%$",
        "Environ $50\\%$"
      ],
      "correctIndex": 0,
      "answer": "Environ $33\\%$",
      "hint1": "$P(T) = 0{,}01 \\times 0{,}99 + 0{,}99 \\times 0{,}02 = 0{,}0099 + 0{,}0198 = 0{,}0297$.",
      "hint2": "$P_T(M) = \\frac{0{,}0099}{0{,}0297} = \\frac{1}{3} \\approx 33{,}3\\%$.",
      "solution": "$P(T) = 0{,}01(0{,}99) + 0{,}99(0{,}02) = 0{,}0297$. $P_T(M) = \\frac{0{,}0099}{0{,}0297} = \\frac{1}{3} \\approx 33{,}3\\%$. Un résultat contre-intuitif classique !"
    }
  ],
  "1S2": [
    {
      "id": "1S2-1",
      "tier": 1,
      "type": "mcq",
      "title": "Espérance d'une variable aléatoire",
      "skill": "Calculer l'espérance E(X) = sum x_i p_i",
      "statement": "Soit $X$ prenant les valeurs $-2$ ($p = 0{,}2$), $1$ ($p = 0{,}5$) et $4$ ($p = 0{,}3$). Quelle est son espérance $E(X)$ ?",
      "options": [
        "$1{,}3$",
        "$1{,}0$",
        "$0{,}9$",
        "$2{,}1$"
      ],
      "correctIndex": 0,
      "answer": "$1{,}3$",
      "hint1": "$E(X) = \\sum x_i P(X = x_i)$.",
      "hint2": "$-2(0{,}2) + 1(0{,}5) + 4(0{,}3) = -0{,}4 + 0{,}5 + 1{,}2 = 1{,}3$.",
      "solution": "$E(X) = (-2)(0{,}2) + 1(0{,}5) + 4(0{,}3) = -0{,}4 + 0{,}5 + 1{,}2 = 1{,}3$."
    },
    {
      "id": "1S2-2",
      "tier": 2,
      "type": "mcq",
      "title": "Transformation affine de variable aléatoire",
      "skill": "Appliquer E(aX+b) et V(aX+b)",
      "statement": "Sachant que $E(X) = 4$ et $V(X) = 9$, que valent l'espérance et l'écart-type de $Y = 3X - 5$ ?",
      "options": [
        "$E(Y) = 7$ et $\\sigma(Y) = 9$",
        "$E(Y) = 7$ et $\\sigma(Y) = 27$",
        "$E(Y) = 12$ et $\\sigma(Y) = 9$",
        "$E(Y) = 7$ et $\\sigma(Y) = 3$"
      ],
      "correctIndex": 0,
      "answer": "$E(Y) = 7$ et $\\sigma(Y) = 9$",
      "hint1": "$E(aX+b) = aE(X) + b = 3(4) - 5 = 7$.",
      "hint2": "$\\sigma(aX+b) = |a|\\sigma(X)$. Or $\\sigma(X) = \\sqrt{9} = 3$, donc $\\sigma(Y) = 3 \\times 3 = 9$.",
      "solution": "$E(3X - 5) = 3(4) - 5 = 7$. $\\sigma(X) = \\sqrt{9} = 3 \\implies \\sigma(3X - 5) = 3 \\times 3 = 9$."
    },
    {
      "id": "1S2-3",
      "tier": 3,
      "type": "mcq",
      "title": "Calcul de variance par König-Huygens",
      "skill": "Utiliser V(X) = E(X^2) - (E(X))^2",
      "statement": "On donne $E(X) = 3$ et $E(X^2) = 13$. Quelle est la variance $V(X)$ ?",
      "options": [
        "$4$",
        "$10$",
        "$22$",
        "$2$"
      ],
      "correctIndex": 0,
      "answer": "$4$",
      "hint1": "Formule de König-Huygens : $V(X) = E(X^2) - [E(X)]^2$.",
      "hint2": "$13 - 3^2 = 13 - 9 = 4$.",
      "solution": "$V(X) = E(X^2) - (E(X))^2 = 13 - 9 = 4$."
    },
    {
      "id": "1S2-4",
      "tier": 4,
      "type": "mcq",
      "title": "Jeu équitable et mise d'un jeu de hasard",
      "skill": "Déterminer la mise pour rendre un jeu équitable",
      "statement": "On tire une carte dans un jeu de 32 cartes. On gagne 10 € si c'est un as (4 as), 5 € si c'est un roi (4 rois), et rien sinon. Quelle mise $m$ rend le jeu équitable ($E(\\text{gain net}) = 0$) ?",
      "options": [
        "$m = 1{,}875$ €",
        "$m = 2{,}50$ €",
        "$m = 1{,}50$ €",
        "$m = 3{,}00$ €"
      ],
      "correctIndex": 0,
      "answer": "$m = 1{,}875$ €",
      "hint1": "L'espérance du gain brut doit être égale à la mise : $m = E(G)$.",
      "hint2": "$E(G) = 10 \\times \\frac{4}{32} + 5 \\times \\frac{4}{32} = \\frac{40 + 20}{32} = \\frac{60}{32} = 1{,}875$.",
      "solution": "Le gain brut moyen est $10 \\times \\frac{1}{8} + 5 \\times \\frac{1}{8} = \\frac{15}{8} = 1{,}875$ €. Pour que le jeu soit équitable, la mise doit être égale à l'espérance du gain brut, soit $1{,}875$ €."
    }
  ]
};

window.MATHS_WORKSHEETS_1ERE = {
  "1A1": [
    {
      "id": "1A1-fiche_td",
      "title": "Fiche Première Spé : Trinôme du second degré",
      "filename": "Fiche_1A1_Second_degre.md",
      "statement": `## Fiche d'entraînement 1A1 : Trinôme du second degré

### Exercice 1 : Équations du second degré (4 points)
Résoudre dans $\\mathbb{R}$ les équations suivantes :
1. $x^2 - 7x + 10 = 0$
2. $2x^2 + 3x + 5 = 0$
3. $4x^2 - 12x + 9 = 0$

### Exercice 2 : Inéquations et signe (4 points)
Dresser le tableau de signes et résoudre l'inéquation :
$$-3x^2 + 5x + 2 \\ge 0$$`,
      "solution": `### Correction Exercice 1
1. $\\Delta = (-7)^2 - 4(1)(10) = 49 - 40 = 9 = 3^2 > 0$. Deux racines : $x_1 = \\frac{7-3}{2} = 2$ et $x_2 = \\frac{7+3}{2} = 5$. $S = \\{2 ; 5\\}$.
2. $\\Delta = 3^2 - 4(2)(5) = 9 - 40 = -31 < 0$. Aucune racine réelle. $S = \\emptyset$.
3. $\\Delta = (-12)^2 - 4(4)(9) = 144 - 144 = 0$. Une racine double : $x_0 = -\\frac{-12}{2(4)} = \\frac{3}{2}$. $S = \\{1{,}5\\}$.

### Correction Exercice 2
Pour $-3x^2 + 5x + 2 = 0$, $\\Delta = 25 - 4(-3)(2) = 25 + 24 = 49 = 7^2$.
Racines : $x_1 = \\frac{-5 - 7}{-6} = 2$ et $x_2 = \\frac{-5 + 7}{-6} = -\\frac{1}{3}$.
Comme $a = -3 < 0$, la parabole est tournée vers le bas. Le trinôme est positif entre les racines.
$S = \\left[-\\frac{1}{3} ; 2\\right]$.`
    }
  ]
};

// Fusion automatique dans les registres globaux
if (!window.MATHS_COURSES) window.MATHS_COURSES = {};
if (!window.MATHS_EXERCISES) window.MATHS_EXERCISES = {};
if (!window.MATHS_WORKSHEETS) window.MATHS_WORKSHEETS = {};

Object.assign(window.MATHS_COURSES, window.MATHS_COURSES_1ERE);
Object.assign(window.MATHS_EXERCISES, window.MATHS_EXERCISES_1ERE);
Object.assign(window.MATHS_WORKSHEETS, window.MATHS_WORKSHEETS_1ERE);
