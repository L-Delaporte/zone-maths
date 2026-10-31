/**
 * Données pédagogiques officielles de la classe de Première Spécialité Mathématiques
 * Conforme aux programmes officiels de l'Éducation nationale
 */

window.MATHS_COURSES_1ERE = {
  "1A1": {
    "title": "1A1 : Polynôme du second degré : forme canonique, racines et signe",
    "domain": "Analyse et Fonctions",
    "objectives": [
      "Étudier le signe d'une fonction polynôme du second degré donnée sous forme factorisée $a(x - x_1)(x - x_2)$ et déterminer les fonctions polynômes du second degré s'annulant en deux réels distincts.",
      "Mettre un trinôme du second degré $P(x) = ax^2 + bx + c$ sous forme canonique.",
      "Calculer le discriminant $\\Delta = b^2 - 4ac$ et déterminer le nombre et la valeur des racines réelles.",
      "Factoriser un trinôme lorsque $\\Delta \\ge 0$ et étudier son signe sur $\\mathbb{R}$.",
      "Résoudre des équations et inéquations du second degré.",
      "Utiliser la somme $-\\frac{b}{a}$ et le produit $\\frac{c}{a}$ des racines, et choisir la forme (développée, canonique, factorisée) la mieux adaptée à la question posée.",
      "Obtenir une forme canonique dans des cas simples par complétion du carré : $x^2 + 2ax = (x + a)^2 - a^2$.",
      "Logique : employer « condition nécessaire », « condition suffisante », distinguer identité et équation, utiliser et nier des propositions quantifiées."
    ],
    "keyPoints": [
      {
        "title": "0. Trinôme donné sous forme factorisée : racines, signe, somme et produit",
        "content": "Soit $f(x) = a(x - x_1)(x - x_2)$ avec $a \\neq 0$.\n• **Racines** : par la règle du produit nul, $f(x) = 0 \\iff x = x_1$ ou $x = x_2$ : on lit les racines sans calcul.\n• **Signe** : un tableau de signes des deux facteurs montre que, si $x_1 < x_2$, $f(x)$ est **du signe de $a$ à l'extérieur** de $[x_1 ; x_2]$ et **du signe de $-a$ entre** $x_1$ et $x_2$.\n*Exemple* : $f(x) = -2(x + 1)(x - 3)$ est positive sur $[-1 ; 3]$ et négative sur $]-\\infty ; -1] \\cup [3 ; +\\infty[$.\n• **Somme et produit des racines** : en développant, $a(x - x_1)(x - x_2) = ax^2 - a(x_1 + x_2)x + a\\,x_1x_2$. En identifiant avec $ax^2 + bx + c$ : $b = -a(x_1 + x_2)$ et $c = a\\,x_1x_2$, d'où $$x_1 + x_2 = -\\frac{b}{a} \\qquad x_1x_2 = \\frac{c}{a}$$\n• **Factorisation directe** : racines apparentes ($x^2 - 5x = x(x - 5)$), coefficient de $x$ nul ($x^2 - 9 = (x - 3)(x + 3)$), racines entières devinées par leur somme et leur produit ($x^2 - 7x + 10$ : somme $7$, produit $10$, racines $2$ et $5$)."
      },
      {
        "title": "1. Forme canonique d'un trinôme",
        "content": "Tout trinôme $P(x) = ax^2 + bx + c$ ($a \\neq 0$) peut s'écrire sous forme canonique :\n$$P(x) = a(x - \\alpha)^2 + \\beta$$\navec : $$\\alpha = -\\frac{b}{2a} \\quad \\text{et} \\quad \\beta = P(\\alpha) = -\\frac{b^2 - 4ac}{4a}$$\n• **Dans les cas simples**, on l'obtient par **complétion du carré** grâce à l'identité $x^2 + 2ax = (x + a)^2 - a^2$ : par exemple $x^2 + 6x + 1 = (x + 3)^2 - 9 + 1 = (x + 3)^2 - 8$.\n• Le calcul de la forme canonique dans le cas général n'est pas un attendu du programme : les formules donnant $\\alpha$ et $\\beta$ servent surtout de contrôle.\nLe sommet de la parabole représentative a pour coordonnées $S(\\alpha ; \\beta)$."
      },
      {
        "title": "2. Discriminant $\\Delta$ et racines réelles",
        "content": "On pose $\\Delta = b^2 - 4ac$ (le **discriminant**) :\n• **Si $\\Delta < 0$** : L'équation $ax^2 + bx + c = 0$ n'a **aucune racine réelle**. Le trinôme ne se factorise pas dans $\\mathbb{R}$.\n• **Si $\\Delta = 0$** : L'équation admet **une racine double** :\n$$x_0 = -\\frac{b}{2a}$$\nForme factorisée : $P(x) = a(x - x_0)^2$.\n• **Si $\\Delta > 0$** : L'équation admet **deux racines réelles distinctes** :\n$$x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a} \\quad \\text{et} \\quad x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a}$$\nForme factorisée : $P(x) = a(x - x_1)(x - x_2)$."
      },
      {
        "title": "Démonstration : résolution de l'équation du second degré",
        "content": "Soit $a \\neq 0$. On factorise par $a$ puis on complète le carré :\n$$ax^2 + bx + c = a\\left[x^2 + \\frac{b}{a}x\\right] + c = a\\left[\\left(x + \\frac{b}{2a}\\right)^2 - \\frac{b^2}{4a^2}\\right] + c = a\\left[\\left(x + \\frac{b}{2a}\\right)^2 - \\frac{\\Delta}{4a^2}\\right]$$\navec $\\Delta = b^2 - 4ac$. Comme $a \\neq 0$, l'équation $ax^2 + bx + c = 0$ équivaut à $\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{\\Delta}{4a^2}$.\n• **Si $\\Delta < 0$** : le membre de droite est strictement négatif, alors qu'un carré est positif ou nul : **aucune solution réelle**.\n• **Si $\\Delta = 0$** : l'équation s'écrit $\\left(x + \\frac{b}{2a}\\right)^2 = 0$, d'où l'unique solution $x_0 = -\\frac{b}{2a}$.\n• **Si $\\Delta > 0$** : $\\frac{\\Delta}{4a^2} = \\left(\\frac{\\sqrt{\\Delta}}{2a}\\right)^2$ et l'identité $A^2 - B^2 = (A - B)(A + B)$ donne\n$$ax^2 + bx + c = a\\left(x + \\frac{b}{2a} - \\frac{\\sqrt{\\Delta}}{2a}\\right)\\left(x + \\frac{b}{2a} + \\frac{\\sqrt{\\Delta}}{2a}\\right) = a(x - x_2)(x - x_1)$$\navec $x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a}$ et $x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a}$. Par la règle du produit nul, les solutions sont $x_1$ et $x_2$, distinctes car $\\sqrt{\\Delta} \\neq 0$.\n**Bilan** : la démonstration fournit à la fois les formules des racines et la forme factorisée."
      },
      {
        "title": "3. Signe du trinôme du second degré",
        "content": "• **Règle fondamentale** : Le trinôme $ax^2 + bx + c$ est **du signe de $a$ à l'extérieur des racines**, et du **signe opposé de $a$ entre les racines** (si $\\Delta > 0$).\n• Si $\\Delta \\le 0$, le trinôme est constamment du signe de $a$ sur $\\mathbb{R}$ (s'annulant seulement en $x_0$ si $\\Delta = 0$)."
      },
      {
        "title": "4. Parabole, sommet et variations",
        "content": "La courbe représentative de $x \\mapsto ax^2 + bx + c$ est une **parabole** d'axe de symétrie la droite d'équation $x = \\alpha = -\\frac{b}{2a}$ et de sommet $S(\\alpha ; \\beta)$.\n• **Si $a > 0$** : la fonction est décroissante sur $]-\\infty ; \\alpha]$ puis croissante sur $[\\alpha ; +\\infty[$ ; elle admet un **minimum** $\\beta$ atteint en $\\alpha$.\n• **Si $a < 0$** : la fonction est croissante sur $]-\\infty ; \\alpha]$ puis décroissante sur $[\\alpha ; +\\infty[$ ; elle admet un **maximum** $\\beta$ atteint en $\\alpha$.\n• **Translation** : la parabole d'équation $y = a(x - \\alpha)^2 + \\beta$ est l'image de la parabole $y = ax^2$ par la translation qui envoie l'origine sur $S(\\alpha ; \\beta)$. Plus généralement, pour une fonction $f$ et un réel $m$, la courbe de $x \\mapsto f(x - m)$ se déduit de celle de $f$ par la translation de vecteur $m\\,\\vec{\\imath}$ (décalage horizontal de $m$).\n• **Lien avec la dérivation** (voir 1A3) : $f'(x) = 2ax + b$ s'annule en $\\alpha = -\\frac{b}{2a}$ ; si $a > 0$, $f$ est décroissante puis croissante (minimum $\\beta$) ; si $a < 0$, croissante puis décroissante (maximum $\\beta$).\n*Exemple* : pour $f(x) = x^2 - 4x + 1$, $\\alpha = 2$ et $\\beta = f(2) = -3$ : minimum $-3$ atteint en $x = 2$."
      },
      {
        "title": "5. Somme et produit des racines",
        "content": "Si $\\Delta \\ge 0$ et si $x_1$ et $x_2$ sont les racines (éventuellement égales) de $ax^2 + bx + c$, alors :\n$$x_1 + x_2 = -\\frac{b}{a} \\quad \\text{et} \\quad x_1 x_2 = \\frac{c}{a}$$\n*Exemple* : $x^2 - 5x + 6$ a pour racines $2$ et $3$ ; on vérifie que $2 + 3 = 5 = -\\frac{-5}{1}$ et $2 \\times 3 = 6 = \\frac{6}{1}$."
      },
      {
        "title": "6. Racine évidente",
        "content": "Lorsqu'une racine $x_1 \\neq 0$ se « voit » (souvent $1$, $-1$, $2$…), on obtient l'autre sans calculer $\\Delta$ grâce au produit : $x_2 = \\frac{c}{a x_1}$.\n*Exemple* : pour $2x^2 + 3x - 5$, on a $2 + 3 - 5 = 0$, donc $x_1 = 1$ est racine. Alors $x_2 = \\frac{-5}{2 \\times 1} = -\\frac{5}{2}$ et $2x^2 + 3x - 5 = 2(x - 1)\\left(x + \\frac{5}{2}\\right)$."
      },
      {
        "title": "7. Trinômes de racines données",
        "content": "• Les fonctions polynômes du second degré qui s'annulent en deux réels distincts $x_1$ et $x_2$ sont exactement les fonctions $x \\mapsto a(x - x_1)(x - x_2)$, avec $a \\neq 0$.\n*Exemple* : celle qui s'annule en $-1$ et en $4$ et qui vaut $6$ en $0$ vérifie $a(0 + 1)(0 - 4) = -4a = 6$, donc $a = -\\frac{3}{2}$ et $f(x) = -\\frac{3}{2}(x + 1)(x - 4)$.\n• **Pour aller plus loin** : deux réels de somme $s$ et de produit $p$ sont les racines de $x^2 - sx + p$. Par exemple, deux nombres de somme $10$ et de produit $21$ sont les racines de $x^2 - 10x + 21$, soit $3$ et $7$."
      },
      {
        "title": "8. Pour aller plus loin : polynôme de degré 3 ayant une racine connue",
        "content": "Si $P(x) = x^3 - 2x^2 - x + 2$, on remarque que $P(1) = 1 - 2 - 1 + 2 = 0$. On cherche alors $P(x) = (x - 1)(x^2 + bx + c)$ ; en développant, $(x - 1)(x^2 + bx + c) = x^3 + (b - 1)x^2 + (c - b)x - c$, d'où $b - 1 = -2$, $c - b = -1$ et $-c = 2$ : $b = -1$, $c = -2$.\nAinsi $P(x) = (x - 1)(x^2 - x - 2) = (x - 1)(x + 1)(x - 2)$, et l'équation $P(x) = 0$ a pour solutions $-1$, $1$ et $2$.\nDe même, $x^3 - 1 = (x - 1)(x^2 + x + 1)$ et, plus généralement, $x^n - 1 = (x - 1)(x^{n-1} + \\dots + x + 1)$."
      },
      {
        "title": "9. Logique : conditions nécessaires et suffisantes, quantificateurs",
        "content": "• **Statut des égalités et des lettres** : $x^2 - 4x + 3 = (x - 2)^2 - 1$ est une **identité** (vraie pour tout réel $x$) ; $x^2 - 4x + 3 = 0$ est une **équation** d'**inconnue** $x$ (solutions $1$ et $3$). Dans « $ax^2 + bx + c$ », $a$, $b$, $c$ sont des **paramètres** et $x$ la **variable**.\n• **Condition suffisante, condition nécessaire** : « $a$ et $c$ sont de signes contraires » est une condition **suffisante** pour que $ax^2 + bx + c$ ait deux racines (car alors $-4ac > 0$, donc $\\Delta = b^2 - 4ac > 0$), mais elle n'est **pas nécessaire** : $x^2 - 5x + 6$ a deux racines ($2$ et $3$) alors que $a$ et $c$ sont positifs. « $\\Delta \\ge 0$ » est une condition **nécessaire et suffisante** pour que le trinôme ait au moins une racine réelle.\n• **Quantifications implicites** : « si $x > 3$, alors $x^2 > 9$ » signifie « **pour tout** réel $x$, si $x > 3$ alors $x^2 > 9$ ».\n• **Négation d'une proposition quantifiée** : la négation de « pour tout réel $x$, $P(x)$ » est « il existe un réel $x$ tel que non $P(x)$ ». Ainsi la négation de « pour tout réel $x$, $x^2 - 2x + 2 > 0$ » est « il existe un réel $x$ tel que $x^2 - 2x + 2 \\le 0$ » (cette négation est fausse, car $x^2 - 2x + 2 = (x - 1)^2 + 1 > 0$).\n• **Raisonnement par contraposée** : « si $\\Delta < 0$, le trinôme n'a pas de racine réelle » équivaut à « si le trinôme a une racine réelle, alors $\\Delta \\ge 0$ »."
      },
      {
        "title": "Automatismes pour l'épreuve anticipée",
        "content": "L'épreuve anticipée de mathématiques (2 heures, **sans calculatrice**) commence par un QCM d'automatismes (6 points sur 20), suivi d'exercices (14 points). Questions flash typiques sur ce chapitre, à traiter de tête :\n• Lire sur une parabole le signe de $a$ (branches vers le haut : $a > 0$) et le nombre de racines (points communs avec l'axe des abscisses).\n• $x^2 \\ge 10 \\iff x \\le -\\sqrt{10}$ ou $x \\ge \\sqrt{10}$ ; $x^2 < 9 \\iff -3 < x < 3$.\n• Racines de $(x - 2)(3x + 1)$ : $2$ et $-\\frac{1}{3}$, sans rien développer.\n• $x^2 - 6x + 9 = (x - 3)^2$ : $\\Delta = 0$, racine double $3$.\n• Sommet de la parabole $y = -2(x + 1)^2 + 5$ : $S(-1 ; 5)$ ; c'est un maximum car $a = -2 < 0$.\n• Signe : $-2x + 6$ est positif pour $x \\le 3$ ; $(x - 1)(x + 4)$ est négatif entre $-4$ et $1$.\n• Racine évidente : $x^2 + 4x - 5$ s'annule en $1$ ($1 + 4 - 5 = 0$) ; l'autre racine vaut $\\frac{c}{a \\times 1} = -5$."
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
      "⚠️ Dans la forme canonique $a(x - \\alpha)^2 + \\beta$, attention au signe de $\\alpha$ : pour $2(x + 3)^2 - 1$, on a $\\alpha = -3$ (et non $3$).",
      "⚠️ L'équation $x^2 = 10$ a **deux** solutions, $-\\sqrt{10}$ et $\\sqrt{10}$ : oublier la solution négative est une erreur fréquente dans les QCM."
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
      },
      {
        "q": "Comment démontre-t-on les formules des racines d'un trinôme ?",
        "a": "On écrit $ax^2 + bx + c = a\\left[\\left(x + \\frac{b}{2a}\\right)^2 - \\frac{\\Delta}{4a^2}\\right]$, puis on discute selon le signe de $\\Delta$ (si $\\Delta > 0$, on factorise une différence de deux carrés)."
      },
      {
        "q": "Donner une fonction du second degré qui s'annule en $1$ et en $5$.",
        "a": "Par exemple $f(x) = (x - 1)(x - 5)$ ; plus généralement $a(x - 1)(x - 5)$ avec $a \\neq 0$."
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
      "Écrire et exploiter l'équation réduite de la tangente : $y = f'(a)(x - a) + f(a)$.",
      "Interpréter le nombre dérivé en contexte : pente d'une tangente, vitesse instantanée, coût marginal ; calculer une valeur approchée de $f(a + h)$."
    ],
    "keyPoints": [
      {
        "title": "1. Taux de variation et définition du nombre dérivé",
        "content": "Soit $f$ une fonction définie sur un intervalle $I$ et $a \\in I$. Pour $h \\neq 0$ tel que $a+h \\in I$ :\n• Le **taux de variation** de $f$ entre $a$ et $a+h$ est la pente de la droite sécante $(AB)$ :\n$$\\frac{f(a+h) - f(a)}{h}$$\n• $f$ est dite **dérivable en $a$** si ce taux de variation admet une limite finie $\\ell$ lorsque $h$ tend vers 0 :\n$$f'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$$\nCe réel $f'(a)$ est le **nombre dérivé** de $f$ en $a$."
      },
      {
        "title": "2. Équation de la tangente à la courbe",
        "content": "Lorsque $h$ tend vers $0$, les **sécantes** $(AM)$, où $M$ est le point de la courbe d'abscisse $a + h$, se rapprochent d'une droite limite : la **tangente**. Sa pente est la limite des pentes des sécantes, c'est-à-dire $f'(a)$.\nLa tangente $\\mathcal{T}_a$ à la courbe $\\mathcal{C}_f$ au point $A(a ; f(a))$ est la droite de coefficient directeur $f'(a)$ passant par $A$.\nSon équation réduite est :\n$$y = f'(a)(x - a) + f(a)$$"
      },
      {
        "title": "Démonstration : équation de la tangente",
        "content": "La tangente $\\mathcal{T}_a$ a pour coefficient directeur le nombre réel $f'(a)$ : elle n'est pas verticale et admet donc une équation de la forme $y = f'(a)\\,x + p$.\nElle passe par le point $A(a ; f(a))$, donc $f(a) = f'(a) \\times a + p$, d'où $p = f(a) - f'(a)\\,a$.\nAinsi $y = f'(a)\\,x + f(a) - f'(a)\\,a$, c'est-à-dire $$y = f'(a)(x - a) + f(a)$$"
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
        "content": "Près du point $A(a ; f(a))$, la courbe et sa tangente sont très proches. Pour $h$ proche de $0$ :\n$$f(a + h) \\approx f(a) + f'(a)\\,h$$\n*Exemple* : pour $f(x) = \\sqrt{x}$, on admet que $f'(1) = \\frac{1}{2}$, donc $\\sqrt{1{,}02} \\approx 1 + \\frac{1}{2} \\times 0{,}02 = 1{,}01$ (la calculatrice donne $1{,}00995\\ldots$). De même, pour la fonction inverse, $f'(1) = -1$ donc $\\frac{1}{1{,}02} \\approx 1 - 0{,}02 = 0{,}98$ (valeur exacte $0{,}98039\\ldots$) ; pour la fonction carré, $1{,}02^2 \\approx 1 + 2 \\times 0{,}02 = 1{,}04$ (valeur exacte $1{,}0404$)."
      },
      {
        "title": "6. Algorithme : coefficients directeurs des sécantes",
        "content": "Pour $f(x) = x^2$ et $a = 1$, on calcule les pentes des sécantes $(AM)$, où $M$ est le point de la courbe d'abscisse $1 + h$, pour $h = 1$, puis $0{,}1$, puis $0{,}01$… (le pas est divisé par $10$ à chaque fois).\n```python\ndef f(x):\n    return x ** 2\n\ndef pentes(a, n):\n    L = []\n    h = 1\n    for k in range(n):\n        L.append((f(a + h) - f(a)) / h)\n        h = h / 10\n    return L\n```\n`pentes(1, 4)` renvoie (aux erreurs d'arrondi près) `[3, 2.1, 2.01, 2.001]` : le taux vaut exactement $2 + h$, et les pentes des sécantes se rapprochent de $f'(1) = 2$, pente de la tangente."
      },
      {
        "title": "7. Interpréter le nombre dérivé en contexte",
        "content": "• **Cinématique** : si $d(t)$ est la distance parcourue à l'instant $t$, le taux de variation $\\frac{d(t + h) - d(t)}{h}$ est une **vitesse moyenne** et $d'(t)$ la **vitesse instantanée**.\n*Exemple* : une bille en chute libre parcourt $d(t) = 5t^2$ mètres en $t$ secondes. Entre $1$ et $1 + h$ : $\\frac{5(1 + h)^2 - 5}{h} = \\frac{10h + 5h^2}{h} = 10 + 5h$, qui tend vers $10$ : à l'instant $t = 1$ s, la vitesse est $10$ m/s.\n• **Économie** : si $C(q)$ est le coût de production de $q$ unités, $C'(q)$ est le **coût marginal**, valeur approchée du coût de production d'une unité supplémentaire : $C(q + 1) - C(q) \\approx C'(q)$.\n*Exemple* : $C(q) = 0{,}5q^2 + 10q$ donne $C'(q) = q + 10$, donc $C'(20) = 30$, alors que $C(21) - C(20) = 30{,}5$.\n• **Notations** : en physique, on note $\\frac{\\Delta y}{\\Delta x}$ un taux de variation et $\\frac{\\mathrm{d}y}{\\mathrm{d}x}$ une dérivée ; si $y = f(x)$, $\\frac{\\mathrm{d}y}{\\mathrm{d}x} = f'(x)$ (de même $\\frac{\\mathrm{d}x}{\\mathrm{d}t}$ pour une position $x = f(t)$)."
      },
      {
        "title": "Automatismes pour l'épreuve anticipée",
        "content": "L'épreuve anticipée de mathématiques (2 heures, **sans calculatrice**) commence par un QCM d'automatismes (6 points sur 20), suivi d'exercices (14 points). Questions flash typiques sur ce chapitre, à traiter de tête :\n• Sur un graphique, $f(a)$ est l'**ordonnée** du point d'abscisse $a$ et $f'(a)$ la **pente** de la tangente en ce point.\n• Pente d'une droite passant par $(0 ; 2)$ et $(3 ; 0)$ : $\\frac{0 - 2}{3 - 0} = -\\frac{2}{3}$.\n• Tracer la droite d'équation $y = -2x + 3$ : elle passe par $(0 ; 3)$ et descend de $2$ quand $x$ augmente de $1$ ; lire graphiquement l'équation réduite d'une droite (ordonnée à l'origine, puis pente).\n• Tangente horizontale $\\iff f'(a) = 0$.\n• Si $f(2) = 3$ et $f'(2) = -1$, la tangente en $2$ a pour équation $y = -(x - 2) + 3 = -x + 5$.\n• Approximation affine : si $f(1) = 2$ et $f'(1) = 3$, alors $f(1{,}01) \\approx 2 + 3 \\times 0{,}01 = 2{,}03$."
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
      },
      {
        "q": "Comment démontre-t-on l'équation de la tangente en $a$ ?",
        "a": "On cherche une équation $y = f'(a)\\,x + p$ ; le point $A(a ; f(a))$ donne $p = f(a) - f'(a)\\,a$, d'où $y = f'(a)(x - a) + f(a)$."
      },
      {
        "q": "On sait que $f(3) = 5$ et $f'(3) = -2$. Donner une valeur approchée de $f(3{,}1)$.",
        "a": "$f(3{,}1) \\approx f(3) + f'(3) \\times 0{,}1 = 5 - 0{,}2 = 4{,}8$."
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
      "Déterminer les extremums locaux d'une fonction dérivable.",
      "Reconnaître une fonction paire ou impaire (définition algébrique et traduction géométrique).",
      "Étudier, à l'aide de la dérivation, une fonction polynôme du second degré : variations, extremum, allure selon le signe de $a$.",
      "Exploiter les variations d'une fonction pour établir une inégalité ou étudier la position relative de deux courbes."
    ],
    "keyPoints": [
      {
        "title": "1. Tableau des dérivées usuelles",
        "content": "• Constante $k$ : $(k)' = 0$\n• Fonction identité $x$ : $(x)' = 1$\n• Puissance $x^n$ ($n \\in \\mathbb{Z}^*$, avec $x \\neq 0$ si $n < 0$) : $(x^n)' = n x^{n-1}$\n• Inverse $\\frac{1}{x}$ : $\\left(\\frac{1}{x}\\right)' = -\\frac{1}{x^2}$\n• Racine carrée $\\sqrt{x}$ : $(\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}$ (sur $]0 ; +\\infty[$)\n• Fonction exponentielle $e^x$ : $(e^x)' = e^x$"
      },
      {
        "title": "2. Opérations sur les fonctions dérivables",
        "content": "Soient $u$ et $v$ deux fonctions dérivables sur un intervalle $I$ et $k$ un réel. Alors, sur $I$ :\n• $(u + v)' = u' + v'$ et $(ku)' = ku'$ ;\n• $(uv)' = u'v + uv'$ ;\n• si $v$ **ne s'annule pas** sur $I$ : $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$.\n*Exemple* : sur $]0 ; +\\infty[$, $f(x) = (x^2 + 1)\\sqrt{x}$ a pour dérivée $f'(x) = 2x\\sqrt{x} + \\frac{x^2 + 1}{2\\sqrt{x}}$."
      },
      {
        "title": "3. Théorème fondamental de la dérivation et variations",
        "content": "Soit $f$ dérivable sur un intervalle $I$ :\n• Si $f'(x) > 0$ sur $I$ (sauf éventuellement en un nombre fini de points où $f'(x)=0$), alors $f$ est **strictement croissante** sur $I$.\n• Si $f'(x) < 0$ sur $I$, alors $f$ est **strictement décroissante** sur $I$.\n• Si $f'(x) = 0$ sur $I$, alors $f$ est **constante** sur $I$."
      },
      {
        "title": "4. Dérivée de l'inverse ; pour aller plus loin : $x \\mapsto g(ax + b)$",
        "content": "• Si $v$ est dérivable et ne s'annule pas sur $I$ : $$\\left(\\frac{1}{v}\\right)' = -\\frac{v'}{v^2}$$\n*Exemple* : $\\left(\\frac{1}{x^2 + 1}\\right)' = -\\frac{2x}{(x^2 + 1)^2}$.\n• **Pour aller plus loin** (formule étudiée en terminale) : si $g$ est dérivable, la fonction $x \\mapsto g(ax + b)$ a pour dérivée $$x \\mapsto a\\,g'(ax + b)$$\n*Exemples* : la dérivée de $(3x - 1)^4$ est $3 \\times 4(3x - 1)^3 = 12(3x - 1)^3$ ; la dérivée de $\\sqrt{2x + 1}$ est $2 \\times \\frac{1}{2\\sqrt{2x + 1}} = \\frac{1}{\\sqrt{2x + 1}}$ sur $\\left]-\\frac{1}{2} ; +\\infty\\right[$."
      },
      {
        "title": "5. Extremum local et dérivée",
        "content": "Soit $f$ dérivable sur un intervalle ouvert $I$ et $c \\in I$.\n• Si $f$ admet un extremum local en $c$, alors $f'(c) = 0$ : la **tangente** à la courbe au point d'abscisse $c$ est **horizontale**.\n• Si $f'$ **s'annule en changeant de signe** en $c$, alors $f(c)$ est un extremum local : maximum si $f'$ passe de $+$ à $-$, minimum si $f'$ passe de $-$ à $+$.\n*Contre-exemple* : pour $f(x) = x^3$, $f'(x) = 3x^2$ s'annule en $0$ **sans changer de signe** : $f$ est croissante sur $\\mathbb{R}$ et $f(0)$ n'est pas un extremum."
      },
      {
        "title": "Fonctions paires, fonctions impaires",
        "content": "Soit $f$ définie sur un ensemble $\\mathcal{D}$ symétrique par rapport à $0$ (si $x \\in \\mathcal{D}$, alors $-x \\in \\mathcal{D}$).\n• $f$ est **paire** si pour tout $x \\in \\mathcal{D}$, $f(-x) = f(x)$ : dans un repère orthogonal, sa courbe est **symétrique par rapport à l'axe des ordonnées**. Exemples : $x \\mapsto x^2$, $x \\mapsto |x|$, $x \\mapsto x^4 - 3x^2$.\n• $f$ est **impaire** si pour tout $x \\in \\mathcal{D}$, $f(-x) = -f(x)$ : sa courbe est **symétrique par rapport à l'origine**. Exemples : $x \\mapsto x^3$, $x \\mapsto \\frac{1}{x}$, $x \\mapsto x^3 - 3x$.\n*Exemple* : $f(x) = \\frac{x}{x^2 + 1}$ est définie sur $\\mathbb{R}$ et $f(-x) = \\frac{-x}{x^2 + 1} = -f(x)$ : $f$ est impaire.\n• **Intérêt** : il suffit d'étudier une fonction paire ou impaire sur $\\mathcal{D} \\cap [0 ; +\\infty[$, puis de compléter la courbe par symétrie.\n• La fonction racine carrée n'est ni paire ni impaire, car $[0 ; +\\infty[$ n'est pas symétrique par rapport à $0$."
      },
      {
        "title": "Étude d'une fonction polynôme du second degré par la dérivation",
        "content": "Soit $f(x) = ax^2 + bx + c$ avec $a \\neq 0$. Alors $f'(x) = 2ax + b$, qui s'annule en $\\alpha = -\\frac{b}{2a}$ en changeant de signe.\n• Si $a > 0$ : $f'(x) < 0$ pour $x < \\alpha$ et $f'(x) > 0$ pour $x > \\alpha$ ; $f$ est décroissante puis croissante et admet un **minimum** $f(\\alpha)$. La parabole est « tournée vers le haut ».\n• Si $a < 0$ : $f$ est croissante puis décroissante et admet un **maximum** $f(\\alpha)$.\n*Exemple* : $f(x) = -x^2 + 6x - 5$, $f'(x) = -2x + 6$ s'annule en $3$ : $f$ est croissante sur $]-\\infty ; 3]$, décroissante sur $[3 ; +\\infty[$, et son maximum vaut $f(3) = 4$."
      },
      {
        "title": "Démonstration : la fonction racine carrée n'est pas dérivable en $0$",
        "content": "La fonction $x \\mapsto \\sqrt{x}$ est définie sur $[0 ; +\\infty[$. Pour $h > 0$, son taux de variation entre $0$ et $h$ vaut\n$$\\frac{\\sqrt{h} - \\sqrt{0}}{h} = \\frac{\\sqrt{h}}{\\left(\\sqrt{h}\\right)^2} = \\frac{1}{\\sqrt{h}}$$\nQuand $h$ tend vers $0$, $\\sqrt{h}$ tend vers $0$ et $\\frac{1}{\\sqrt{h}}$ devient aussi grand que l'on veut (pour $h = 10^{-6}$, il vaut déjà $1\\,000$). Le taux de variation n'a pas de limite finie : la fonction racine carrée **n'est pas dérivable en $0$**. Graphiquement, la courbe admet en l'origine une tangente verticale.\nEn revanche, pour $a > 0$ : $\\frac{\\sqrt{a + h} - \\sqrt{a}}{h} = \\frac{(\\sqrt{a + h} - \\sqrt{a})(\\sqrt{a + h} + \\sqrt{a})}{h(\\sqrt{a + h} + \\sqrt{a})} = \\frac{1}{\\sqrt{a + h} + \\sqrt{a}}$, qui tend vers $\\frac{1}{2\\sqrt{a}}$ : on retrouve $(\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}$ sur $]0 ; +\\infty[$."
      },
      {
        "title": "Démonstration : dérivées des fonctions carré et inverse",
        "content": "• **Carré** : pour tout réel $a$ et tout $h \\neq 0$, $\\frac{(a + h)^2 - a^2}{h} = \\frac{2ah + h^2}{h} = 2a + h$, qui tend vers $2a$ quand $h$ tend vers $0$. La fonction carré est dérivable sur $\\mathbb{R}$ et $(x^2)' = 2x$.\n• **Inverse** : pour $a \\neq 0$ et $h \\neq 0$ assez petit pour que $a + h \\neq 0$ :\n$$\\frac{\\frac{1}{a + h} - \\frac{1}{a}}{h} = \\frac{a - (a + h)}{h \\times a(a + h)} = \\frac{-h}{h \\times a(a + h)} = \\frac{-1}{a(a + h)}$$\nQuand $h$ tend vers $0$, $a(a + h)$ tend vers $a^2$, donc le taux tend vers $-\\frac{1}{a^2}$. La fonction inverse est dérivable sur $]-\\infty ; 0[$ et sur $]0 ; +\\infty[$, et $\\left(\\frac{1}{x}\\right)' = -\\frac{1}{x^2}$."
      },
      {
        "title": "Démonstration : dérivée d'un produit",
        "content": "Soient $u$ et $v$ dérivables en $a$ et $f = uv$. Pour $h \\neq 0$, on ajoute et on retranche $u(a)\\,v(a + h)$ au numérateur du taux de variation :\n$$\\frac{f(a + h) - f(a)}{h} = \\frac{u(a + h)v(a + h) - u(a)v(a + h) + u(a)v(a + h) - u(a)v(a)}{h}$$\n$$= \\frac{u(a + h) - u(a)}{h} \\times v(a + h) + u(a) \\times \\frac{v(a + h) - v(a)}{h}$$\nQuand $h$ tend vers $0$ : le premier quotient tend vers $u'(a)$, $v(a + h)$ tend vers $v(a)$ (on admet qu'une fonction dérivable en $a$ a cette propriété) et le dernier quotient tend vers $v'(a)$. Donc $f$ est dérivable en $a$ et $$f'(a) = u'(a)\\,v(a) + u(a)\\,v'(a)$$"
      },
      {
        "title": "6. Algorithme : méthode de Newton",
        "content": "Pour approcher une solution de $f(x) = 0$, on part d'une valeur $x_0$ et on remplace $x_n$ par l'abscisse du point où la tangente en $x_n$ coupe l'axe des abscisses. La tangente $y = f'(x_n)(x - x_n) + f(x_n)$ coupe cet axe pour $$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)} \\quad (\\text{si } f'(x_n) \\neq 0)$$\nAvec $f(x) = x^2 - 2$, $f'(x) = 2x$ et $x_0 = 1$ : $x_1 = 1{,}5$, $x_2 \\approx 1{,}416\\,67$, $x_3 \\approx 1{,}414\\,216$ ; la suite approche très vite $\\sqrt{2} \\approx 1{,}414\\,214$.\n```python\ndef newton(x, n):\n    for k in range(n):\n        x = x - (x ** 2 - 2) / (2 * x)\n    return x\n```\nOn se limite à des cas favorables : la méthode peut échouer si $f'(x_n)$ est nul ou très petit."
      },
      {
        "title": "Automatismes pour l'épreuve anticipée",
        "content": "L'épreuve anticipée de mathématiques (2 heures, **sans calculatrice**) commence par un QCM d'automatismes (6 points sur 20), suivi d'exercices (14 points). Questions flash typiques sur ce chapitre, à traiter de tête :\n• Dérivées immédiates : $(x^3)' = 3x^2$ ; $(5x^2 - 3x + 1)' = 10x - 3$ ; $\\left(\\frac{1}{x}\\right)' = -\\frac{1}{x^2}$ ; $(\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}$.\n• Si $f'(x) = (x - 1)(x + 3)$, alors $f$ est décroissante sur $[-3 ; 1]$ (trinôme de coefficient $1 > 0$, négatif entre ses racines).\n• Passer d'un tableau de signes de $f'$ au tableau de variations de $f$, et inversement.\n• Repérer sur une courbe les points à tangente horizontale (où $f'$ s'annule).\n• Ne pas confondre le **signe de $f$** (position de la courbe par rapport à l'axe des abscisses) et le **signe de $f'$** (sens de variation)."
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
      },
      {
        "title": "Méthode : Étudier la position d'une courbe et d'une tangente",
        "example": "Soit $f(x) = x^3$. Déterminer la tangente $\\mathcal{T}$ à $\\mathcal{C}_f$ au point d'abscisse $1$, puis étudier la position relative de $\\mathcal{C}_f$ et $\\mathcal{T}$.",
        "steps": [
          "**Étape 1 (Tangente)** : $f(1) = 1$ et $f'(x) = 3x^2$, donc $f'(1) = 3$ ; $\\mathcal{T} : y = 3(x - 1) + 1 = 3x - 2$.",
          "**Étape 2 (Différence)** : $d(x) = x^3 - (3x - 2) = x^3 - 3x + 2$. Comme $d(1) = 0$, on factorise par $x - 1$ : $d(x) = (x - 1)^2(x + 2)$ (contrôle en développant : $(x^2 - 2x + 1)(x + 2) = x^3 - 3x + 2$).",
          "**Étape 3 (Signe)** : $(x - 1)^2 \\ge 0$, donc $d(x)$ est du signe de $x + 2$ : $d(x) < 0$ sur $]-\\infty ; -2[$ et $d(x) \\ge 0$ sur $[-2 ; +\\infty[$.",
          "**Conclusion** : $\\mathcal{C}_f$ est au-dessous de $\\mathcal{T}$ sur $]-\\infty ; -2[$ et au-dessus sur $]-2 ; +\\infty[$ ; elles se coupent au point d'abscisse $-2$ et se touchent au point d'abscisse $1$."
        ]
      }
    ],
    "traps": [
      "⚠️ Erreur classique sur la dérivée d'un produit : $(uv)' \\neq u'v'$ ! C'est $u'v + uv'$.",
      "⚠️ Attention au signe moins dans la formule du quotient : $(u'v - uv')/v^2$.",
      "⚠️ $f'(c) = 0$ ne suffit pas pour avoir un extremum : il faut que $f'$ **change de signe** en $c$ (contre-exemple : $x^3$ en $0$).",
      "⚠️ Pour $(2x + 1)^3$, la dérivée est $3 \\times 2(2x + 1)^2 = 6(2x + 1)^2$ : ne pas oublier le facteur $a = 2$.",
      "⚠️ Le signe de $f'$ s'étudie sur l'ensemble de dérivabilité : $\\sqrt{x}$ n'est pas dérivable en $0$, $\\frac{1}{x}$ n'est pas définie en $0$.",
      "⚠️ Avant d'utiliser la formule du quotient, vérifier que le dénominateur ne s'annule pas sur l'intervalle d'étude."
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
      },
      {
        "q": "Pourquoi la fonction racine carrée n'est-elle pas dérivable en $0$ ?",
        "a": "Pour $h > 0$, son taux de variation entre $0$ et $h$ vaut $\\frac{1}{\\sqrt{h}}$, qui devient aussi grand que l'on veut quand $h$ tend vers $0$ : il n'a pas de limite finie."
      },
      {
        "q": "Quelle relation définit la méthode de Newton pour résoudre $f(x) = 0$ ?",
        "a": "$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$ (abscisse du point où la tangente en $x_n$ coupe l'axe des abscisses)."
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
      "Pour $a$ réel, dériver $t \\mapsto e^{at}$ : $(e^{at})' = a\\,e^{at}$ ; représenter $t \\mapsto e^{kt}$ et $t \\mapsto e^{-kt}$ pour $k > 0$.",
      "Construire l'exponentielle par la méthode d'Euler et approcher $e$ à l'aide de la suite $\\left(\\left(1 + \\frac{1}{n}\\right)^n\\right)$."
    ],
    "keyPoints": [
      {
        "title": "1. Définition de la fonction exponentielle",
        "content": "On admet qu'il existe une **unique** fonction $f$ dérivable sur $\\mathbb{R}$ telle que $f' = f$ et $f(0) = 1$. On l'appelle **fonction exponentielle** et on la note $\\exp$.\n• Par définition : $\\exp' = \\exp$ et $\\exp(0) = 1$.\n• On note $e = \\exp(1) \\approx 2{,}718$ et, pour tout réel $x$, $\\exp(x) = e^x$ ; cette notation est cohérente avec les règles de calcul sur les puissances (voir ci-dessous).\n• **Courbe** : elle passe par les points $(0 ; 1)$ et $(1 ; e)$, reste au-dessus de l'axe des abscisses, s'en rapproche vers la gauche et monte de plus en plus vite vers la droite."
      },
      {
        "title": "2. Propriétés algébriques de la fonction exponentielle",
        "content": "La fonction exponentielle transforme une **somme en produit** :\n• $e^0 = 1$ et $e^1 = e \\approx 2{,}718$\n• $e^{x+y} = e^x \\times e^y$\n• $e^{-x} = \\frac{1}{e^x}$\n• $e^{x-y} = \\frac{e^x}{e^y}$\n• $(e^x)^n = e^{nx}$ pour tout $n \\in \\mathbb{Z}$"
      },
      {
        "title": "Démonstration : propriétés de l'exponentielle",
        "content": "*Démonstrations proposées en approfondissement par le programme. Elles utilisent le fait qu'une fonction de dérivée nulle sur $\\mathbb{R}$ est constante.*\n• **$\\exp(x) \\times \\exp(-x) = 1$, donc $\\exp$ ne s'annule pas.** On pose $\\varphi(x) = \\exp(x)\\exp(-x)$. La dérivée de $x \\mapsto \\exp(-x)$ est $x \\mapsto -\\exp(-x)$ (dérivée de $x \\mapsto e^{ax}$ avec $a = -1$, résultat admis), donc $\\varphi'(x) = \\exp(x)\\exp(-x) - \\exp(x)\\exp(-x) = 0$. Ainsi $\\varphi$ est constante, égale à $\\varphi(0) = 1$. Un produit égal à $1$ n'a aucun facteur nul : $\\exp(x) \\neq 0$, et $\\exp(-x) = \\frac{1}{\\exp(x)}$.\n• **Unicité.** Si $f$ est dérivable sur $\\mathbb{R}$ avec $f' = f$ et $f(0) = 1$, on pose $g(x) = f(x)\\exp(-x)$. Alors $g'(x) = f(x)\\exp(-x) - f(x)\\exp(-x) = 0$ : $g$ est constante, égale à $g(0) = 1$. Donc $f(x) = \\frac{1}{\\exp(-x)} = \\exp(x)$ pour tout $x$.\n• **$\\exp(a + b) = \\exp(a) \\times \\exp(b)$.** Le réel $b$ étant fixé, on pose $h(x) = \\exp(x + b)\\exp(-x)$. Alors $h'(x) = \\exp(x + b)\\exp(-x) - \\exp(x + b)\\exp(-x) = 0$, donc $h(x) = h(0) = \\exp(b)$. Ainsi $\\exp(x + b) = \\frac{\\exp(b)}{\\exp(-x)} = \\exp(x)\\exp(b)$, et on conclut avec $x = a$.\n• **Stricte positivité.** Pour tout $x$, $\\exp(x) = \\exp\\left(\\frac{x}{2} + \\frac{x}{2}\\right) = \\left(\\exp\\left(\\frac{x}{2}\\right)\\right)^2 \\ge 0$ ; comme $\\exp(x) \\neq 0$, on obtient $\\exp(x) > 0$.\n• **Stricte croissance.** $\\exp' = \\exp > 0$ sur $\\mathbb{R}$."
      },
      {
        "title": "3. Variations ; dérivée de $t \\mapsto e^{at}$",
        "content": "• La fonction exponentielle est **strictement positive** ($e^x > 0$) et **strictement croissante** sur $\\mathbb{R}$.\n• Résolution : $e^a = e^b \\iff a = b$ et $e^a < e^b \\iff a < b$.\n• Pour tout réel $a$, la fonction $t \\mapsto e^{at}$ est dérivable sur $\\mathbb{R}$ et (résultat admis) :\n$(e^{at})' = a\\,e^{at}$\n• Conséquence : comme $e^{ax+b} = e^b \\times e^{ax}$, la fonction $x \\mapsto e^{ax+b}$ a pour dérivée $e^b \\times a\\,e^{ax} = a\\,e^{ax+b}$.\n*(La formule générale $(e^{u})' = u'e^{u}$ sera vue en Terminale.)*"
      },
      {
        "title": "4. Signe de $e^x - 1$ et tangente en $0$",
        "content": "Comme $e^0 = 1$ et que l'exponentielle est strictement croissante :\n• $e^x > 1 \\iff x > 0$ et $e^x < 1 \\iff x < 0$.\n• Puisque $\\exp'(0) = e^0 = 1$, la tangente à la courbe au point d'abscisse $0$ a pour équation $y = 1 \\times (x - 0) + 1$, soit $y = x + 1$."
      },
      {
        "title": "5. Les fonctions $t \\mapsto e^{kt}$ et les suites $(e^{na})$",
        "content": "• Pour un réel $k$, la fonction $t \\mapsto e^{kt}$ est dérivable sur $\\mathbb{R}$, de dérivée $t \\mapsto k\\,e^{kt}$. Elle est **strictement croissante si $k > 0$** et **strictement décroissante si $k < 0$**. Elle modélise des croissances ou décroissances « exponentielles » (populations, désintégration radioactive…).\n• Pour un réel $a$, la suite $(e^{na})$ est **géométrique de raison $e^a$**, car $e^{(n+1)a} = e^{na} \\times e^{a}$.\n*Exemple* : $u_n = e^{0{,}5n}$ est géométrique de raison $e^{0{,}5} \\approx 1{,}649$."
      },
      {
        "title": "6. Méthode d'Euler et approximation de $e$ (Python)",
        "content": "**Construction de l'exponentielle par la méthode d'Euler.** Comme $\\exp' = \\exp$, l'approximation affine donne, pour un petit pas $h$ : $\\exp(x + h) \\approx \\exp(x) + h\\exp(x) = \\exp(x)(1 + h)$. En partant du point $(0 ; 1)$, on construit de proche en proche des points $(x_k ; y_k)$ avec $x_{k+1} = x_k + h$ et $y_{k+1} = y_k + h\\,y_k$ :\n```python\ndef euler(h, n):\n    x = 0\n    y = 1\n    L = [(x, y)]\n    for k in range(n):\n        y = y + h * y      # car exp'(x) = exp(x)\n        x = x + h\n        L.append((x, y))\n    return L\n```\nLes points obtenus sont proches de la courbe de l'exponentielle. Avec $h = 0{,}1$ et $n = 10$, le dernier point a pour abscisse $1$ (aux arrondis près) et pour ordonnée $1{,}1^{10} \\approx 2{,}594$, valeur approchée de $e$. On remarque que $y_k = (1 + h)^k$ : les ordonnées forment une **suite géométrique**.\n**Valeur approchée de $e$.** Avec $h = \\frac{1}{n}$ et $n$ pas, on obtient $\\left(1 + \\frac{1}{n}\\right)^n$ :\n```python\ndef approx_e(n):\n    return (1 + 1 / n) ** n\n```\n$n = 10$ donne environ $2{,}594$, $n = 1\\,000$ environ $2{,}7169$ (pour $e \\approx 2{,}7183$) : plus $n$ est grand, meilleure est l'approximation."
      },
      {
        "title": "7. Modèles de croissance et de décroissance exponentielles",
        "content": "Pour un réel $k > 0$ :\n• $t \\mapsto e^{kt}$ est strictement croissante (dérivée $k\\,e^{kt} > 0$) : c'est une **croissance exponentielle** ; sa courbe passe par $(0 ; 1)$.\n• $t \\mapsto e^{-kt}$ est strictement décroissante (dérivée $-k\\,e^{-kt} < 0$) : c'est une **décroissance exponentielle** ; ses valeurs restent strictement positives et se rapprochent de $0$ quand $t$ devient grand. Plus $k$ est grand, plus la décroissance est rapide.\n*Exemple (décroissance radioactive)* : la masse d'un échantillon est $m(t) = m_0\\,e^{-kt}$ ($t$ en années). Pour tout $t$, $m(t + 1) = m(t) \\times e^{-k}$ : chaque année, la masse est multipliée par la même constante $e^{-k}$ (lien avec les suites géométriques). Avec $m_0 = 50$ g et $k = 0{,}1$, $m(10) = 50\\,e^{-1} \\approx 18{,}4$ g."
      },
      {
        "title": "Automatismes pour l'épreuve anticipée",
        "content": "L'épreuve anticipée de mathématiques (2 heures, **sans calculatrice**) commence par un QCM d'automatismes (6 points sur 20), suivi d'exercices (14 points). Questions flash typiques sur ce chapitre, à traiter de tête :\n• Simplifier : $e^{3} \\times e^{-1} = e^{2}$ ; $\\frac{e^{5}}{e^{2}} = e^{3}$ ; $\\left(e^{2}\\right)^3 = e^{6}$ ; $e^{x} \\times e^{-x} = 1$.\n• Signe : $e^{x} > 0$ pour tout $x$, donc $(x - 2)\\,e^{x}$ est du signe de $x - 2$.\n• Équations : $e^{2x} = 1 \\iff 2x = 0 \\iff x = 0$ ; $e^{x} = -1$ n'a aucune solution.\n• Reconnaître les courbes de $t \\mapsto e^{kt}$ (croissante si $k > 0$) et de $t \\mapsto e^{-kt}$ (décroissante si $k > 0$) : toutes deux coupent l'axe des ordonnées au point $(0 ; 1)$.\n• Dériver de tête : $\\left(e^{-0{,}5t}\\right)' = -0{,}5\\,e^{-0{,}5t}$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Dériver un produit contenant $e^{at}$",
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
      "⚠️ Dans un produit comme $(1 - x)e^{-x}$, le facteur $e^{-x}$ est toujours strictement positif : le signe est donné par l'autre facteur seulement.",
      "⚠️ $e^{-x}$ n'est pas un nombre négatif : c'est l'inverse $\\frac{1}{e^x}$, qui est strictement positif."
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
      },
      {
        "q": "Pourquoi la fonction exponentielle ne s'annule-t-elle jamais ?",
        "a": "Car $\\exp(x) \\times \\exp(-x) = 1$ pour tout $x$ (la dérivée de $x \\mapsto \\exp(x)\\exp(-x)$ est nulle et cette fonction vaut $1$ en $0$) : un produit égal à $1$ n'a pas de facteur nul."
      },
      {
        "q": "Un capital est modélisé par $C(t) = 1000\\,e^{0{,}02t}$. Par quel nombre est-il multiplié chaque année ?",
        "a": "Par $e^{0{,}02}$, car $C(t + 1) = C(t) \\times e^{0{,}02}$."
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
      },
      {
        "title": "7. Suites définies par un motif, un dénombrement ou un algorithme",
        "content": "• **Motif géométrique** : pour construire une rangée de $n$ carrés accolés avec des allumettes, il en faut $4$ pour le premier carré, puis $3$ de plus pour chaque nouveau carré : $u_n = 3n + 1$.\n• **Dénombrement** : lorsque $n$ personnes se serrent toutes la main deux à deux, le nombre $p_n$ de poignées de main vérifie $p_1 = 0$ et $p_{n+1} = p_n + n$ (la nouvelle personne serre $n$ mains). On trouve $p_2 = 1$, $p_3 = 3$, $p_4 = 6$ et, plus généralement, $p_n = \\frac{n(n - 1)}{2}$.\n• **Algorithme** : certaines suites ne sont données que par un procédé de calcul, comme la suite de Syracuse (voir 1S3)."
      },
      {
        "title": "Automatismes pour l'épreuve anticipée",
        "content": "L'épreuve anticipée de mathématiques (2 heures, **sans calculatrice**) commence par un QCM d'automatismes (6 points sur 20), suivi d'exercices (14 points). Questions flash typiques sur ce chapitre, à traiter de tête :\n• Calculer des termes : si $u_n = n^2 - 1$, alors $u_3 = 8$ ; si $u_0 = 2$ et $u_{n+1} = 3u_n$, alors $u_1 = 6$ et $u_2 = 18$.\n• Traduire une évolution : « augmente de $5\\,\\%$ par an » donne $u_{n+1} = 1{,}05\\,u_n$ ; « augmente de $5$ unités par an » donne $u_{n+1} = u_n + 5$.\n• Lire sur un nuage de points $(n ; u_n)$ les premiers termes et le sens de variation.\n• Conclure à partir d'un signe : si $u_{n+1} - u_n = -\\frac{2}{n + 1}$ pour tout $n$, la suite est strictement décroissante."
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
          "**Étape 2 (Algorithme de seuil)** : on calcule les termes tant que la condition d'arrêt n'est pas atteinte :\n```python\nu = 5\nn = 0\nwhile u <= 14:\n    u = 0.8 * u + 3\n    n = n + 1\nprint(n)\n```",
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
      },
      {
        "q": "Combien d'allumettes faut-il pour une rangée de $10$ carrés accolés ($u_n = 3n + 1$) ?",
        "a": "$u_{10} = 3 \\times 10 + 1 = 31$ allumettes."
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
        "title": "Démonstration : terme général d'une suite arithmétique ou géométrique",
        "content": "• **Arithmétique** : pour passer de $u_0$ à $u_n$, on ajoute $n$ fois la raison $r$, d'où $u_n = u_0 + nr$. Rédaction rigoureuse : la suite $(v_n)$ définie par $v_n = u_n - nr$ vérifie $v_{n+1} - v_n = (u_{n+1} - u_n) - r = r - r = 0$ ; elle est constante, égale à $v_0 = u_0$, donc $u_n = u_0 + nr$.\n• **Géométrique** (raison $q \\neq 0$) : on multiplie $n$ fois par $q$, d'où $u_n = u_0 \\times q^n$. Rédaction rigoureuse : la suite $(w_n)$ définie par $w_n = \\frac{u_n}{q^n}$ vérifie $w_{n+1} = \\frac{q\\,u_n}{q^{n+1}} = \\frac{u_n}{q^n} = w_n$ ; elle est constante, égale à $w_0 = u_0$, donc $u_n = u_0 \\times q^n$."
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
      },
      {
        "title": "Démonstration : $1 + 2 + \\dots + n = \\frac{n(n + 1)}{2}$",
        "content": "On écrit la somme $S = 1 + 2 + \\dots + n$ dans les deux sens, puis on additionne colonne par colonne :\n$$\\begin{array}{rcl} S & = & 1 + 2 + \\dots + (n - 1) + n \\\\ S & = & n + (n - 1) + \\dots + 2 + 1 \\\\ \\hline 2S & = & (n + 1) + (n + 1) + \\dots + (n + 1) + (n + 1) \\end{array}$$\nChaque colonne a pour somme $n + 1$ et il y a $n$ colonnes, donc $2S = n(n + 1)$, soit $S = \\frac{n(n + 1)}{2}$.\n*Conséquence* : pour une suite arithmétique, $u_0 + u_1 + \\dots + u_n = (n + 1)u_0 + r(1 + 2 + \\dots + n) = (n + 1)u_0 + r\\,\\frac{n(n + 1)}{2} = (n + 1) \\times \\frac{u_0 + u_n}{2}$ : c'est la formule « nombre de termes $\\times$ (premier + dernier) / 2 »."
      },
      {
        "title": "Démonstration : $1 + q + \\dots + q^n = \\frac{1 - q^{n+1}}{1 - q}$ pour $q \\neq 1$",
        "content": "Soit $S = 1 + q + q^2 + \\dots + q^n$. Alors $qS = q + q^2 + \\dots + q^n + q^{n+1}$.\nEn soustrayant, tous les termes se simplifient sauf deux : $S - qS = 1 - q^{n+1}$, c'est-à-dire $(1 - q)S = 1 - q^{n+1}$.\nComme $q \\neq 1$, on peut diviser par $1 - q \\neq 0$ : $$S = \\frac{1 - q^{n+1}}{1 - q}$$\n*Exemple* : $1 + 2 + 4 + \\dots + 2^{10} = \\frac{1 - 2^{11}}{1 - 2} = 2^{11} - 1 = 2047$.\n*Conséquence* : $u_0 + u_1 + \\dots + u_n = u_0(1 + q + \\dots + q^n) = u_0 \\times \\frac{1 - q^{n+1}}{1 - q}$ (somme de $n + 1$ termes). Si $q = 1$, la somme vaut $(n + 1)u_0$."
      },
      {
        "title": "5. Comportement de $q^n$ et liens avec les fonctions",
        "content": "Observations (conjecturées en Première, démontrées en Terminale) pour la suite $(q^n)$ :\n• si $q > 1$, $q^n$ devient aussi grand que l'on veut : la suite tend vers $+\\infty$ (ex. : $2^{10} = 1024$) ;\n• si $-1 < q < 1$, $q^n$ se rapproche de $0$ (ex. : $0{,}5^{10} \\approx 0{,}001$) ;\n• si $q = 1$, la suite est constante ; si $q \\le -1$, elle n'a pas de limite (ses termes alternent de signe sans se stabiliser).\n**Liens** : les points $(n ; u_0 + nr)$ d'une suite arithmétique sont sur la droite d'équation $y = u_0 + rx$ (fonction affine) ; la suite géométrique $(e^{na})$ de raison $e^a$ est la « version discrète » de la fonction $x \\mapsto e^{ax}$."
      },
      {
        "title": "Automatismes pour l'épreuve anticipée",
        "content": "L'épreuve anticipée de mathématiques (2 heures, **sans calculatrice**) commence par un QCM d'automatismes (6 points sur 20), suivi d'exercices (14 points). Questions flash typiques sur ce chapitre, à traiter de tête :\n• Une hausse de $20\\,\\%$ suivie d'une baisse de $20\\,\\%$ : coefficient $1{,}2 \\times 0{,}8 = 0{,}96$, soit une **baisse** de $4\\,\\%$.\n• Après une baisse de $20\\,\\%$, il faut une hausse de $25\\,\\%$ pour revenir au prix initial ($0{,}8 \\times 1{,}25 = 1$).\n• Un coefficient multiplicateur $0{,}975$ correspond à une baisse de $2{,}5\\,\\%$.\n• Après une hausse de $25\\,\\%$, un prix vaut $150$ € : le prix initial est $\\frac{150}{1{,}25} = 120$ €.\n• Passer de $80$ à $92$, c'est une hausse de $\\frac{92 - 80}{80} = 0{,}15$, soit $15\\,\\%$.\n• $u_0 = 3$ et $r = -2$ : $u_{10} = 3 - 20 = -17$. $\\quad u_0 = 5$ et $q = 2$ : $u_3 = 5 \\times 8 = 40$.\n• $1 + 2 + \\dots + 10 = \\frac{10 \\times 11}{2} = 55$."
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
        "title": "Pour aller plus loin — Méthode : Utiliser une suite auxiliaire géométrique",
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
      },
      {
        "q": "Comment démontre-t-on que $1 + q + \\dots + q^n = \\frac{1 - q^{n+1}}{1 - q}$ ?",
        "a": "On calcule $S - qS$ : tous les termes se simplifient sauf $1$ et $-q^{n+1}$, donc $(1 - q)S = 1 - q^{n+1}$, puis on divise par $1 - q \\neq 0$."
      },
      {
        "q": "Un prix baisse de $20\\,\\%$ puis augmente de $20\\,\\%$. Quelle est l'évolution globale ?",
        "a": "$0{,}8 \\times 1{,}2 = 0{,}96$ : une baisse de $4\\,\\%$."
      }
    ]
  },

  "1G1": {
    "title": "1G1 : Trigonométrie : cercle trigonométrique, radian, cosinus et sinus d'un réel",
    "domain": "Géométrie",
    "objectives": [
      "Enrouler la droite réelle sur le cercle trigonométrique, placer l'image d'un réel et relier radian et longueur d'arc ($180^\\circ = \\pi$ rad).",
      "Définir le cosinus et le sinus d'un réel $x$ et faire le lien avec le cosinus et le sinus dans un triangle rectangle.",
      "Connaître les valeurs remarquables de $\\cos$ et $\\sin$ pour $0, \\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}, \\frac{\\pi}{2}, \\pi$ et démontrer celles de $\\frac{\\pi}{4}$ et $\\frac{\\pi}{3}$.",
      "Lire sur le cercle les cosinus et sinus des réels associés à une valeur remarquable ($-x$, $\\pi - x$, $\\pi + x$, $\\frac{\\pi}{2} - x$) ; utiliser $\\cos^2(x) + \\sin^2(x) = 1$.",
      "Approcher $\\pi$ par la méthode d'Archimède (Python).",
      "Pour aller plus loin : fonctions cosinus et sinus, équations $\\cos(x) = a$ et $\\sin(x) = a$."
    ],
    "keyPoints": [
      {
        "title": "1. Enroulement de la droite réelle, cosinus et sinus",
        "content": "Dans un repère orthonormé $(O ; I, J)$, le **cercle trigonométrique** est le cercle de centre $O$ et de rayon $1$, orienté dans le sens direct (sens inverse des aiguilles d'une montre).\nOn « enroule » la droite des réels autour de ce cercle à partir du point $I(1 ; 0)$ : à chaque réel $x$ correspond un unique point $M$ du cercle, son **image**, obtenu en parcourant depuis $I$ un arc de longueur $|x|$, dans le sens direct si $x > 0$ et dans le sens indirect si $x < 0$.\n• $\\cos(x)$ est l'**abscisse** de $M$ et $\\sin(x)$ son **ordonnée** : $M(\\cos(x) ; \\sin(x))$.\n• Pour tout réel $x$ : $-1 \\le \\cos(x) \\le 1$, $-1 \\le \\sin(x) \\le 1$ et $\\cos^2(x) + \\sin^2(x) = 1$ (car $OM^2 = 1$).\n• **Lien avec le triangle rectangle** : pour $0 < x < \\frac{\\pi}{2}$, si $H$ est le projeté orthogonal de $M$ sur $(OI)$, le triangle $OHM$ est rectangle en $H$ et son hypoténuse mesure $OM = 1$ ; on retrouve $\\cos = \\frac{\\text{côté adjacent}}{\\text{hypoténuse}} = OH$ et $\\sin = \\frac{\\text{côté opposé}}{\\text{hypoténuse}} = HM$."
      },
      {
        "title": "2. Valeurs remarquables sur le cercle trigonométrique",
        "content": "• **$0$ rad ($0^\\circ$)** : $\\cos(0) = 1$, $\\sin(0) = 0$\n• **$\\frac{\\pi}{6}$ rad ($30^\\circ$)** : $\\cos(\\frac{\\pi}{6}) = \\frac{\\sqrt{3}}{2}$, $\\sin(\\frac{\\pi}{6}) = \\frac{1}{2}$\n• **$\\frac{\\pi}{4}$ rad ($45^\\circ$)** : $\\cos(\\frac{\\pi}{4}) = \\frac{\\sqrt{2}}{2}$, $\\sin(\\frac{\\pi}{4}) = \\frac{\\sqrt{2}}{2}$\n• **$\\frac{\\pi}{3}$ rad ($60^\\circ$)** : $\\cos(\\frac{\\pi}{3}) = \\frac{1}{2}$, $\\sin(\\frac{\\pi}{3}) = \\frac{\\sqrt{3}}{2}$\n• **$\\frac{\\pi}{2}$ rad ($90^\\circ$)** : $\\cos(\\frac{\\pi}{2}) = 0$, $\\sin(\\frac{\\pi}{2}) = 1$"
      },
      {
        "title": "Démonstration : valeurs de $\\cos\\left(\\frac{\\pi}{4}\\right)$, $\\sin\\left(\\frac{\\pi}{4}\\right)$, $\\cos\\left(\\frac{\\pi}{3}\\right)$ et $\\sin\\left(\\frac{\\pi}{3}\\right)$",
        "content": "• **Angle $\\frac{\\pi}{4}$** : le point $M$ image de $\\frac{\\pi}{4}$ est sur la bissectrice du premier quadrant, droite d'équation $y = x$. Donc $\\cos\\left(\\frac{\\pi}{4}\\right) = \\sin\\left(\\frac{\\pi}{4}\\right) = c$, avec $c > 0$. La relation $\\cos^2 + \\sin^2 = 1$ donne $2c^2 = 1$, soit $c^2 = \\frac{1}{2}$ et $c = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$.\n• **Angle $\\frac{\\pi}{3}$** : soit $M$ l'image de $\\frac{\\pi}{3}$. Le triangle $OIM$ est isocèle en $O$ ($OI = OM = 1$) et $\\widehat{IOM} = 60^\\circ$ ; ses deux autres angles sont égaux et mesurent $\\frac{180^\\circ - 60^\\circ}{2} = 60^\\circ$ : il est **équilatéral**. La hauteur issue de $M$ est aussi une médiane, donc le projeté $H$ de $M$ sur $(OI)$ est le milieu de $[OI]$ : $\\cos\\left(\\frac{\\pi}{3}\\right) = OH = \\frac{1}{2}$.\nEnsuite $\\sin^2\\left(\\frac{\\pi}{3}\\right) = 1 - \\frac{1}{4} = \\frac{3}{4}$ et $\\sin\\left(\\frac{\\pi}{3}\\right) > 0$, donc $\\sin\\left(\\frac{\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2}$."
      },
      {
        "title": "3. Réels associés : lecture sur le cercle",
        "content": "Les symétries du cercle trigonométrique donnent, pour tout réel $x$ :\n• $\\cos(-x) = \\cos(x)$ et $\\sin(-x) = -\\sin(x)$ (symétrie par rapport à l'axe des abscisses) ;\n• $\\cos(\\pi - x) = -\\cos(x)$ et $\\sin(\\pi - x) = \\sin(x)$ (symétrie par rapport à l'axe des ordonnées) ;\n• $\\cos(\\pi + x) = -\\cos(x)$ et $\\sin(\\pi + x) = -\\sin(x)$ (symétrie par rapport à l'origine) ;\n• $\\cos(\\frac{\\pi}{2} - x) = \\sin(x)$ et $\\sin(\\frac{\\pi}{2} - x) = \\cos(x)$ (symétrie par rapport à la droite d'équation $y = x$).\n*Exemple* : $\\cos\\left(\\frac{2\\pi}{3}\\right) = \\cos\\left(\\pi - \\frac{\\pi}{3}\\right) = -\\frac{1}{2}$ et $\\sin\\left(\\frac{2\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2}$."
      },
      {
        "title": "4. Le radian et la longueur d'arc",
        "content": "Sur un cercle de rayon $R$, un angle de $\\theta$ radians intercepte un arc de longueur $\\ell = R\\,\\theta$. En particulier, sur le cercle trigonométrique ($R = 1$), **la mesure en radians est égale à la longueur de l'arc**.\nConversion : $\\theta_{\\text{rad}} = \\theta_{\\text{deg}} \\times \\frac{\\pi}{180}$.\n*Exemple* : $135^\\circ = 135 \\times \\frac{\\pi}{180} = \\frac{3\\pi}{4}$ rad."
      },
      {
        "title": "5. Réels associés à un même point du cercle",
        "content": "Les réels $x$ et $x + 2k\\pi$ ($k \\in \\mathbb{Z}$) sont associés au **même point** du cercle trigonométrique. On a donc $\\cos(x + 2k\\pi) = \\cos(x)$ et $\\sin(x + 2k\\pi) = \\sin(x)$.\n*Pour aller plus loin* : la **mesure principale** est l'unique mesure appartenant à $]-\\pi ; \\pi]$.\n*Exemple* : $\\frac{17\\pi}{3} = \\frac{18\\pi}{3} - \\frac{\\pi}{3} = 6\\pi - \\frac{\\pi}{3}$ : la mesure principale est $-\\frac{\\pi}{3}$."
      },
      {
        "title": "6. Pour aller plus loin : les fonctions cosinus et sinus",
        "content": "*Ces fonctions seront étudiées en terminale ; ce paragraphe n'est pas un attendu du programme de première.*\n• Elles sont définies sur $\\mathbb{R}$ et à valeurs dans $[-1 ; 1]$.\n• Elles sont **périodiques de période $2\\pi$** : leur courbe se répète par translation de $2\\pi$.\n• $\\cos$ est **paire** (courbe symétrique par rapport à l'axe des ordonnées) ; $\\sin$ est **impaire** (courbe symétrique par rapport à l'origine).\n• Sur $[0 ; \\pi]$, $\\cos$ est décroissante de $1$ à $-1$. Sur $\\left[-\\frac{\\pi}{2} ; \\frac{\\pi}{2}\\right]$, $\\sin$ est croissante de $-1$ à $1$.\n• Autres angles associés : $\\cos\\left(\\frac{\\pi}{2} + x\\right) = -\\sin(x)$ et $\\sin\\left(\\frac{\\pi}{2} + x\\right) = \\cos(x)$."
      },
      {
        "title": "7. Algorithme : approximation de $\\pi$ par la méthode d'Archimède",
        "content": "Un polygone régulier à $n$ côtés inscrit dans un cercle de rayon $1$ a un périmètre proche de $2\\pi$ lorsque $n$ est grand : son demi-périmètre approche donc $\\pi$. On part de l'hexagone régulier ($n = 6$, côté $c = 1$) et on double à chaque étape le nombre de côtés ; on admet (théorème de Pythagore) que le nouveau côté vaut $\\sqrt{2 - \\sqrt{4 - c^2}}$.\n```python\nfrom math import sqrt\n\ndef archimede(k):\n    n = 6\n    c = 1\n    for i in range(k):\n        c = sqrt(2 - sqrt(4 - c * c))\n        n = 2 * n\n    return n * c / 2\n```\n`archimede(0)` renvoie $3$ ; `archimede(1)` environ $3{,}1058$ ($12$ côtés) ; `archimede(4)` environ $3{,}1410$ ($96$ côtés, comme Archimède)."
      },
      {
        "title": "Réflexes sans calculatrice (épreuve anticipée)",
        "content": "L'épreuve anticipée se passe **sans calculatrice** : ces calculs doivent devenir automatiques.\n• Conversions : $30^\\circ = \\frac{\\pi}{6}$, $45^\\circ = \\frac{\\pi}{4}$, $120^\\circ = \\frac{2\\pi}{3}$, $\\pi$ rad $= 180^\\circ$.\n• Placer $\\frac{3\\pi}{4}$, $-\\frac{\\pi}{2}$ ou $\\frac{7\\pi}{6}$ sur le cercle et lire les signes du cosinus et du sinus.\n• Valeurs : $\\cos\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}$, $\\sin\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}$, $\\cos(\\pi) = -1$, $\\sin\\left(\\frac{\\pi}{2}\\right) = 1$.\n• Longueur d'arc : sur un cercle de rayon $3$, un angle de $\\frac{\\pi}{3}$ rad intercepte un arc de longueur $3 \\times \\frac{\\pi}{3} = \\pi$.\n• Lire sur le cercle : $\\cos\\left(\\frac{2\\pi}{3}\\right) = -\\frac{1}{2}$, $\\sin\\left(-\\frac{\\pi}{4}\\right) = -\\frac{\\sqrt{2}}{2}$, $\\cos\\left(\\frac{5\\pi}{6}\\right) = -\\frac{\\sqrt{3}}{2}$."
      }
    ],
    "methods": [
      {
        "title": "Pour aller plus loin — Méthode : Résoudre une équation $\\cos(x) = a$",
        "example": "Résoudre dans $[0 ; 2\\pi[$ l'équation $\\cos(x) = \\frac{1}{2}$.",
        "steps": [
          "**Étape 1 (Angle de référence)** : On sait que $\\cos\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}$.",
          "**Étape 2 (Solutions modulo $2\\pi$)** : Les deux points du cercle d'abscisse $\\frac{1}{2}$ sont $x = \\frac{\\pi}{3}$ et $x = -\\frac{\\pi}{3}$.",
          "**Étape 3 (Intervalle $[0 ; 2\\pi[$)** : En ajoutant $2\\pi$ à $-\\frac{\\pi}{3}$, on obtient $-\\frac{\\pi}{3} + 2\\pi = \\frac{5\\pi}{3}$.",
          "**Conclusion** : $S = \\left\\{\\frac{\\pi}{3} ; \\frac{5\\pi}{3}\\right\\}$."
        ]
      },
      {
        "title": "Pour aller plus loin — Méthode : Résoudre une équation $\\sin(x) = a$",
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
      "⚠️ (Pour aller plus loin) L'équation $\\cos(x) = a$ (ou $\\sin(x) = a$) n'a **aucune solution** si $a > 1$ ou $a < -1$.",
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
        "q": "(Pour aller plus loin) Quelle est la mesure principale de $\\frac{25\\pi}{4}$ ?",
        "a": "$\\frac{25\\pi}{4} = 6\\pi + \\frac{\\pi}{4}$, donc la mesure principale est $\\frac{\\pi}{4}$."
      },
      {
        "q": "Convertir $\\frac{2\\pi}{5}$ rad en degrés.",
        "a": "$\\frac{2\\pi}{5} \\times \\frac{180}{\\pi} = 72^\\circ$."
      },
      {
        "q": "Pourquoi $\\cos\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}$ ?",
        "a": "Le triangle $OIM$ ($M$ image de $\\frac{\\pi}{3}$) est équilatéral ; le projeté de $M$ sur $(OI)$ est donc le milieu de $[OI]$, d'abscisse $\\frac{1}{2}$."
      }
    ]
  },

  "1G2": {
    "title": "1G2 : Le produit scalaire dans le plan : définitions et propriétés",
    "domain": "Géométrie",
    "objectives": [
      "Connaître les 3 expressions du produit scalaire : géométrique $\\vec{u}\\cdot\\vec{v} = \\|\\vec{u}\\| \\|\\vec{v}\\| \\cos(\\theta)$, par projection orthogonale $\\vec{AB}\\cdot\\vec{AC} = \\overline{AB} \\times \\overline{AH}$, et analytique $xx' + yy'$.",
      "Caractériser l'orthogonalité de deux vecteurs par la nullité de leur produit scalaire : $\\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0$.",
      "Utiliser les propriétés de bilinéarité et de symétrie du produit scalaire.",
      "Exprimer les coordonnées d'un vecteur dans une base orthonormée $(\\vec{\\imath}, \\vec{\\jmath})$ à l'aide de produits scalaires : $x = \\vec{u} \\cdot \\vec{\\imath}$ et $y = \\vec{u} \\cdot \\vec{\\jmath}$."
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
      },
      {
        "title": "5. Coordonnées et produit scalaire dans une base orthonormée",
        "content": "Dans une base orthonormée $(\\vec{\\imath}, \\vec{\\jmath})$, on a $\\vec{\\imath} \\cdot \\vec{\\imath} = \\vec{\\jmath} \\cdot \\vec{\\jmath} = 1$ et $\\vec{\\imath} \\cdot \\vec{\\jmath} = 0$. Si $\\vec{u} = x\\vec{\\imath} + y\\vec{\\jmath}$, la bilinéarité donne\n$$\\vec{u} \\cdot \\vec{\\imath} = x \\quad \\text{et} \\quad \\vec{u} \\cdot \\vec{\\jmath} = y$$\nDe même, pour $\\vec{v} = x'\\vec{\\imath} + y'\\vec{\\jmath}$ : $\\vec{u} \\cdot \\vec{v} = xx'\\,\\vec{\\imath} \\cdot \\vec{\\imath} + (xy' + yx')\\,\\vec{\\imath} \\cdot \\vec{\\jmath} + yy'\\,\\vec{\\jmath} \\cdot \\vec{\\jmath} = xx' + yy'$. C'est la justification de l'expression analytique, dont on déduit aussi $\\|\\vec{u}\\| = \\sqrt{x^2 + y^2}$."
      },
      {
        "title": "Réflexes sans calculatrice (épreuve anticipée)",
        "content": "Calculs à mener de tête, utiles dans les exercices de l'épreuve anticipée (sans calculatrice) :\n• $\\vec{u}(2 ; 3) \\cdot \\vec{v}(-3 ; 2) = -6 + 6 = 0$ : les vecteurs sont orthogonaux.\n• $\\|\\vec{u}\\| = 2$, $\\|\\vec{v}\\| = 5$ et $(\\vec{u}, \\vec{v}) = \\frac{\\pi}{3}$ : $\\vec{u} \\cdot \\vec{v} = 2 \\times 5 \\times \\frac{1}{2} = 5$.\n• $\\vec{u}(3 ; 4)$ a pour norme $\\sqrt{9 + 16} = 5$.\n• Angle aigu : produit scalaire positif ; angle obtus : produit scalaire négatif.\n• $\\vec{u} \\cdot \\vec{u} = \\|\\vec{u}\\|^2$ et $(\\vec{u} + \\vec{v})^2 = \\|\\vec{u}\\|^2 + 2\\,\\vec{u} \\cdot \\vec{v} + \\|\\vec{v}\\|^2$."
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
      },
      {
        "q": "Dans une base orthonormée $(\\vec{\\imath}, \\vec{\\jmath})$, que vaut $\\vec{u} \\cdot \\vec{\\imath}$ ?",
        "a": "L'abscisse $x$ de $\\vec{u}$ (et $\\vec{u} \\cdot \\vec{\\jmath}$ est son ordonnée $y$)."
      }
    ]
  },

  "1G3": {
    "title": "1G3 : Applications du produit scalaire, formule d'Al-Kashi et droites",
    "domain": "Géométrie",
    "objectives": [
      "Appliquer le théorème d'Al-Kashi (loi des cosinus) dans un triangle quelconque : $a^2 = b^2 + c^2 - 2bc \\cos(\\widehat{A})$.",
      "Appliquer le théorème de la médiane : si $I$ est le milieu de $[BC]$, alors $AB^2 + AC^2 = 2AI^2 + \\frac{BC^2}{2}$ (pour aller plus loin).",
      "Définir un vecteur normal à une droite et déterminer l'équation cartésienne $ax + by + c = 0$ associée à $\\vec{n}(a ; b)$.",
      "Démontrer et utiliser la caractérisation du cercle de diamètre $[AB]$ : $\\vec{MA} \\cdot \\vec{MB} = 0$ ; déterminer une équation de cercle et le projeté orthogonal d'un point sur une droite.",
      "Utiliser un repère orthonormé pour étudier une configuration ; reconnaître une équation de cercle et en déterminer centre et rayon."
    ],
    "keyPoints": [
      {
        "title": "1. Théorème d'Al-Kashi (Loi des cosinus)",
        "content": "Dans un triangle $ABC$ quelconque avec les notations usuelles ($a = BC, b = AC, c = AB$) :\n$$a^2 = b^2 + c^2 - 2bc \\cos(\\widehat{A})$$\n$$b^2 = a^2 + c^2 - 2ac \\cos(\\widehat{B})$$\n$$c^2 = a^2 + b^2 - 2ab \\cos(\\widehat{C})$$\n*Généralisation du théorème de Pythagore* : si $\\widehat{A} = 90^\\circ$, alors $\\cos(\\widehat{A}) = 0$ et on retrouve $a^2 = b^2 + c^2$."
      },
      {
        "title": "Démonstration : formule d'Al-Kashi",
        "content": "D'après la relation de Chasles, $\\vec{BC} = \\vec{BA} + \\vec{AC} = \\vec{AC} - \\vec{AB}$. Donc, avec l'identité remarquable du produit scalaire :\n$$BC^2 = \\|\\vec{AC} - \\vec{AB}\\|^2 = AC^2 - 2\\,\\vec{AB} \\cdot \\vec{AC} + AB^2$$\nOr $\\vec{AB} \\cdot \\vec{AC} = AB \\times AC \\times \\cos\\left(\\widehat{BAC}\\right)$. Avec les notations $a = BC$, $b = AC$, $c = AB$, on obtient $a^2 = b^2 + c^2 - 2bc\\cos\\left(\\widehat{A}\\right)$. Les deux autres formules se démontrent de la même façon."
      },
      {
        "title": "2. Vecteur normal à une droite",
        "content": "• Un **vecteur normal** à une droite $\\mathcal{D}$ est un vecteur non nul $\\vec{n}$ orthogonal à tout vecteur directeur de $\\mathcal{D}$.\n• La droite passant par $A(x_A ; y_A)$ de vecteur normal $\\vec{n}\\begin{pmatrix} a \\\\ b \\end{pmatrix}$ admet pour équation cartésienne :\n$$a(x - x_A) + b(y - y_A) = 0 \\iff ax + by + c = 0$$\n*Justification* : un vecteur directeur de la droite d'équation $ax + by + c = 0$ est $\\vec{u}(-b ; a)$, et $\\vec{n} \\cdot \\vec{u} = a(-b) + ba = 0$. Réciproquement, $M(x ; y)$ appartient à la droite passant par $A$ de vecteur normal $\\vec{n}$ si et seulement si $\\vec{AM} \\cdot \\vec{n} = 0$, c'est-à-dire $a(x - x_A) + b(y - y_A) = 0$."
      },
      {
        "title": "3. Calculer un angle avec Al-Kashi",
        "content": "En isolant le cosinus dans la formule d'Al-Kashi, on obtient un angle à partir des trois côtés :\n$$\\cos(\\widehat{A}) = \\frac{b^2 + c^2 - a^2}{2bc}$$\n*Exemple* : si $a = BC = 7$, $b = AC = 5$ et $c = AB = 8$, alors $\\cos(\\widehat{A}) = \\frac{25 + 64 - 49}{80} = \\frac{40}{80} = \\frac{1}{2}$, donc $\\widehat{A} = 60^\\circ$."
      },
      {
        "title": "4. Transformation de $\\vec{MA} \\cdot \\vec{MB}$",
        "content": "Soit $I$ le milieu de $[AB]$. Pour tout point $M$ du plan :\n$$\\vec{MA} \\cdot \\vec{MB} = MI^2 - \\frac{AB^2}{4}$$\n*Preuve* : $\\vec{MA} \\cdot \\vec{MB} = (\\vec{MI} + \\vec{IA}) \\cdot (\\vec{MI} - \\vec{IA}) = MI^2 - IA^2$, et $IA = \\frac{AB}{2}$.\n**Conséquence** : l'ensemble des points $M$ tels que $\\vec{MA} \\cdot \\vec{MB} = 0$ est le **cercle de diamètre $[AB]$**."
      },
      {
        "title": "Démonstration : ensemble des points $M$ tels que $\\vec{MA} \\cdot \\vec{MB} = 0$",
        "content": "Soit $I$ le milieu de $[AB]$ ; alors $\\vec{IB} = -\\vec{IA}$ et $IA = \\frac{AB}{2}$. D'après la relation de Chasles :\n$$\\vec{MA} \\cdot \\vec{MB} = \\left(\\vec{MI} + \\vec{IA}\\right) \\cdot \\left(\\vec{MI} + \\vec{IB}\\right) = \\left(\\vec{MI} + \\vec{IA}\\right) \\cdot \\left(\\vec{MI} - \\vec{IA}\\right) = MI^2 - IA^2 = MI^2 - \\frac{AB^2}{4}$$\nDonc $\\vec{MA} \\cdot \\vec{MB} = 0 \\iff MI^2 = \\frac{AB^2}{4} \\iff MI = \\frac{AB}{2}$ (des longueurs étant positives).\nL'ensemble cherché est le **cercle de centre $I$ et de rayon $\\frac{AB}{2}$**, c'est-à-dire le **cercle de diamètre $[AB]$** (il contient $A$ et $B$). Pour $M$ distinct de $A$ et $B$, on retrouve : $M$ est sur ce cercle si et seulement si le triangle $AMB$ est rectangle en $M$."
      },
      {
        "title": "5. Équation cartésienne d'un cercle",
        "content": "Dans un repère orthonormé, le cercle de centre $\\Omega(a ; b)$ et de rayon $r > 0$ a pour équation :\n$$(x - a)^2 + (y - b)^2 = r^2$$\nEn effet, $M(x ; y)$ appartient au cercle si et seulement si $\\Omega M^2 = r^2$.\n*Exemple* : le cercle de centre $\\Omega(1 ; -2)$ et de rayon $3$ a pour équation $(x - 1)^2 + (y + 2)^2 = 9$."
      },
      {
        "title": "Pour aller plus loin : théorème de la médiane",
        "content": "*(Résultat non exigible en Première.)* Si $I$ est le milieu de $[BC]$, alors $$AB^2 + AC^2 = 2AI^2 + \\frac{BC^2}{2}$$\n*Preuve* : $AB^2 = \\|\\vec{AI} + \\vec{IB}\\|^2 = AI^2 + 2\\,\\vec{AI} \\cdot \\vec{IB} + IB^2$ et $AC^2 = AI^2 + 2\\,\\vec{AI} \\cdot \\vec{IC} + IC^2$. En ajoutant, comme $\\vec{IC} = -\\vec{IB}$ et $IB = IC = \\frac{BC}{2}$, on obtient $AB^2 + AC^2 = 2AI^2 + 2 \\times \\frac{BC^2}{4}$."
      },
      {
        "title": "Réflexes sans calculatrice (épreuve anticipée)",
        "content": "Calculs à mener de tête, utiles dans les exercices de l'épreuve anticipée (sans calculatrice) :\n• Droite $2x - 3y + 1 = 0$ : vecteur normal $\\vec{n}(2 ; -3)$, vecteur directeur $\\vec{u}(3 ; 2)$ ; le point $(1 ; 1)$ lui appartient car $2 - 3 + 1 = 0$.\n• Les droites $2x + y = 0$ et $x - 2y + 5 = 0$ sont perpendiculaires : leurs vecteurs normaux $(2 ; 1)$ et $(1 ; -2)$ ont un produit scalaire nul.\n• Cercle $(x - 2)^2 + (y + 1)^2 = 9$ : centre $\\Omega(2 ; -1)$, rayon $3$.\n• Al-Kashi avec un angle de $60^\\circ$ : $a^2 = b^2 + c^2 - bc$ (car $\\cos(60^\\circ) = \\frac{1}{2}$)."
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
      },
      {
        "title": "Méthode : Déterminer une équation du cercle de diamètre $[AB]$",
        "example": "Dans un repère orthonormé, on donne $A(1 ; 2)$ et $B(5 ; -2)$. Déterminer une équation du cercle $\\mathcal{C}$ de diamètre $[AB]$, son centre et son rayon.",
        "steps": [
          "**Étape 1 (Caractérisation)** : $M(x ; y) \\in \\mathcal{C} \\iff \\vec{MA} \\cdot \\vec{MB} = 0$, avec $\\vec{MA}\\begin{pmatrix} 1 - x \\\\ 2 - y \\end{pmatrix}$ et $\\vec{MB}\\begin{pmatrix} 5 - x \\\\ -2 - y \\end{pmatrix}$.",
          "**Étape 2 (Calcul)** : $(1 - x)(5 - x) + (2 - y)(-2 - y) = 0 \\iff x^2 - 6x + 5 + y^2 - 4 = 0 \\iff x^2 - 6x + y^2 + 1 = 0$.",
          "**Étape 3 (Forme réduite)** : $x^2 - 6x = (x - 3)^2 - 9$, donc l'équation devient $(x - 3)^2 + y^2 = 8$.",
          "**Conclusion** : $\\mathcal{C}$ a pour centre $\\Omega(3 ; 0)$ (milieu de $[AB]$) et pour rayon $\\sqrt{8} = 2\\sqrt{2}$ ; contrôle : $AB = \\sqrt{4^2 + 4^2} = 4\\sqrt{2}$, dont la moitié vaut bien $2\\sqrt{2}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour $ax + by + c = 0$ :\n- Un vecteur **directeur** est $\\vec{u}(-b ; a)$.\n- Un vecteur **normal** est $\\vec{n}(a ; b)$.",
      "⚠️ Dans $(x - a)^2 + (y - b)^2 = r^2$, le membre de droite est le **carré** du rayon : $(x - 1)^2 + y^2 = 9$ a pour rayon $3$, et non $9$.",
      "⚠️ Une équation de la forme $x^2 + y^2 + \\dots = 0$ ne définit pas toujours un cercle : $x^2 + y^2 - 2x + 4y + 10 = 0 \\iff (x - 1)^2 + (y + 2)^2 = -5$, ensemble **vide**.",
      "⚠️ Dans Al-Kashi, l'angle utilisé est celui **opposé** au côté isolé : $a^2$ va avec $\\widehat{A}$, angle compris entre les côtés $b$ et $c$.",
      "⚠️ Le projeté orthogonal $H$ d'un point $A$ sur une droite $\\mathcal{D}$ doit vérifier **deux** conditions : $H \\in \\mathcal{D}$ et $\\vec{AH}$ orthogonal à un vecteur directeur de $\\mathcal{D}$."
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
      },
      {
        "q": "Comment démontre-t-on la formule d'Al-Kashi ?",
        "a": "On écrit $\\vec{BC} = \\vec{AC} - \\vec{AB}$, d'où $BC^2 = AC^2 - 2\\,\\vec{AB} \\cdot \\vec{AC} + AB^2$, puis $\\vec{AB} \\cdot \\vec{AC} = AB \\times AC \\times \\cos\\left(\\widehat{A}\\right)$."
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
      "Caractériser l'indépendance de deux événements : $P(A \\cap B) = P(A) \\times P(B)$ ou $P_A(B) = P(B)$.",
      "Représenter par un arbre la répétition de $n \\le 4$ épreuves de Bernoulli identiques et indépendantes, et calculer des probabilités."
    ],
    "keyPoints": [
      {
        "title": "1. Définitions : probabilité conditionnelle et indépendance",
        "content": "Soient $A$ et $B$ deux événements, avec $P(A) \\neq 0$.\n• La **probabilité de $B$ sachant $A$** est $$P_A(B) = \\frac{P(A \\cap B)}{P(A)}$$\n• En situation d'équiprobabilité (tirage au hasard d'un individu dans une population), $P_A(B) = \\frac{\\text{nombre d'éléments de } A \\cap B}{\\text{nombre d'éléments de } A}$ : on « restreint » l'univers à $A$.\n• Les événements $A$ et $B$ sont **indépendants** lorsque $P(A \\cap B) = P(A) \\times P(B)$."
      },
      {
        "title": "2. Arbres pondérés et formule des probabilités totales",
        "content": "• **Règle 1 (Nœud)** : La somme des probabilités des branches issues d'un même nœud est égale à 1.\n• **Règle 2 (Chemin)** : La probabilité de l'issue au bout d'un chemin est le **produit** des probabilités le long de ce chemin : $P(A \\cap B) = P(A) \\times P_A(B)$.\n• **Formule des probabilités totales** : Si $(A, \\overline{A})$ forme une partition de l'univers, alors pour tout événement $B$ :\n$$P(B) = P(A \\cap B) + P(\\overline{A} \\cap B) = P(A) \\times P_A(B) + P(\\overline{A}) \\times P_{\\overline{A}}(B)$$"
      },
      {
        "title": "3. Propriétés de la probabilité conditionnelle",
        "content": "Soit $A$ un événement tel que $P(A) > 0$.\n• $P_A$ est une probabilité : $0 \\le P_A(B) \\le 1$ et $P_A(\\overline{B}) = 1 - P_A(B)$.\n• **Formule du produit** : $P(A \\cap B) = P(A) \\times P_A(B)$ ; si de plus $P(B) > 0$, on a aussi $P(A \\cap B) = P(B) \\times P_B(A)$.\n*Exemple* : si $P(A) = 0{,}4$ et $P_A(B) = 0{,}3$, alors $P(A \\cap B) = 0{,}12$ et $P_A(\\overline{B}) = 0{,}7$."
      },
      {
        "title": "4. Probabilités totales avec une partition quelconque",
        "content": "Des événements $A_1, A_2, \\dots, A_n$ de probabilités non nulles forment une **partition** de l'univers s'ils sont deux à deux incompatibles et si leur réunion est l'univers. Alors, pour tout événement $B$ :\n$$P(B) = P(A_1)P_{A_1}(B) + P(A_2)P_{A_2}(B) + \\dots + P(A_n)P_{A_n}(B)$$\nSur un arbre, $P(B)$ est la **somme des probabilités de tous les chemins** qui mènent à $B$."
      },
      {
        "title": "5. Indépendance : compléments",
        "content": "• Si $P(A) > 0$, $A$ et $B$ sont indépendants si et seulement si $P_A(B) = P(B)$ : savoir que $A$ est réalisé ne change pas la probabilité de $B$.\n• Si $A$ et $B$ sont indépendants, alors $A$ et $\\overline{B}$ le sont aussi.\n• **Succession de deux épreuves indépendantes** (par exemple deux lancers de dé) : dans l'arbre, les probabilités du second niveau sont les mêmes quelle que soit l'issue de la première épreuve, et la probabilité d'un couple d'issues est le produit des probabilités."
      },
      {
        "title": "Démonstration : formule des probabilités totales",
        "content": "Les événements $A \\cap B$ et $\\overline{A} \\cap B$ sont incompatibles (une issue ne peut pas appartenir à la fois à $A$ et à $\\overline{A}$) et leur réunion est $B$. Donc $$P(B) = P(A \\cap B) + P(\\overline{A} \\cap B)$$\nSi $0 < P(A) < 1$, la formule du produit donne $P(A \\cap B) = P(A)\\,P_A(B)$ et $P(\\overline{A} \\cap B) = P(\\overline{A})\\,P_{\\overline{A}}(B)$, d'où $P(B) = P(A)\\,P_A(B) + P(\\overline{A})\\,P_{\\overline{A}}(B)$.\nLe raisonnement est le même pour une partition $A_1, \\dots, A_n$ : les événements $A_i \\cap B$ sont deux à deux incompatibles et leur réunion est $B$."
      },
      {
        "title": "Démonstration : si $A$ et $B$ sont indépendants, $A$ et $\\overline{B}$ le sont aussi",
        "content": "$A$ est la réunion des événements incompatibles $A \\cap B$ et $A \\cap \\overline{B}$, donc $P(A \\cap \\overline{B}) = P(A) - P(A \\cap B)$. Par indépendance :\n$$P(A \\cap \\overline{B}) = P(A) - P(A)P(B) = P(A)\\left(1 - P(B)\\right) = P(A)\\,P(\\overline{B})$$"
      },
      {
        "title": "6. Répétition d'épreuves de Bernoulli indépendantes ($n \\le 4$)",
        "content": "Une **épreuve de Bernoulli** a deux issues : succès $S$, de probabilité $p$, et échec $\\overline{S}$, de probabilité $1 - p$. Lorsqu'on répète $n$ fois ($n \\le 4$ en Première) la même épreuve de façon indépendante, on représente la situation par un arbre à $n$ niveaux dont chaque branche porte $p$ ou $1 - p$.\n• La probabilité d'un chemin est le **produit** des probabilités de ses branches.\n• La probabilité d'un événement est la **somme** des probabilités des chemins qui le réalisent.\n*Exemple* : un joueur tire trois fois au but ; chaque tir est réussi avec la probabilité $0{,}7$, indépendamment des autres. Les chemins comportant exactement deux réussites sont $SS\\overline{S}$, $S\\overline{S}S$ et $\\overline{S}SS$ ; chacun a pour probabilité $0{,}7^2 \\times 0{,}3 = 0{,}147$. Donc $P(\\text{exactement deux réussites}) = 3 \\times 0{,}147 = 0{,}441$.\nEt $P(\\text{au moins une réussite}) = 1 - P(\\text{trois échecs}) = 1 - 0{,}3^3 = 1 - 0{,}027 = 0{,}973$."
      },
      {
        "title": "7. Algorithme : méthode de Monte-Carlo",
        "content": "On choisit au hasard un point $M(x ; y)$ dans le carré $[0 ; 1] \\times [0 ; 1]$. La probabilité qu'il appartienne au quart de disque d'équation $x^2 + y^2 \\le 1$ est le rapport des aires, $\\frac{\\pi}{4}$. En multipliant par $4$ la fréquence observée sur $N$ points, on estime $\\pi$.\n```python\nfrom random import random\n\ndef estimation_pi(N):\n    c = 0\n    for k in range(N):\n        x = random()\n        y = random()\n        if x * x + y * y <= 1:\n            c = c + 1\n    return 4 * c / N\n```\nAvec $N = 100\\,000$, on obtient en général une valeur proche de $3{,}14$, à environ $0{,}01$ près. Même principe pour estimer l'aire sous la parabole $y = x^2$ entre $0$ et $1$ : on compte les points tels que $y \\le x^2$ et on trouve une fréquence proche de $\\frac{1}{3}$ (valeur exacte établie en Terminale)."
      },
      {
        "title": "Automatismes pour l'épreuve anticipée",
        "content": "L'épreuve anticipée de mathématiques (2 heures, **sans calculatrice**) commence par un QCM d'automatismes (6 points sur 20), suivi d'exercices (14 points). Questions flash typiques sur ce chapitre, à traiter de tête :\n• Compléter un arbre : les branches issues d'un même nœud ont une somme égale à $1$.\n• Lire $P_A(B)$ sur une branche du second niveau, puis $P(A \\cap B) = P(A) \\times P_A(B)$ : avec $P(A) = 0{,}4$ et $P_A(B) = 0{,}5$, on obtient $P(A \\cap B) = 0{,}2$.\n• Dans un tableau croisé : $P_F(D) = \\frac{\\text{effectif de } F \\cap D}{\\text{effectif de } F}$ (on divise par le total de la ligne ou de la colonne de $F$, pas par l'effectif total).\n• Deux lancers indépendants d'une pièce équilibrée : $P(\\text{deux Pile}) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$.\n• Distinguer $P(A \\cap B)$ (probabilité que les deux événements soient réalisés), $P_A(B)$ (parmi les issues de $A$) et $P_B(A)$ (parmi les issues de $B$) : avec $P(A) = 0{,}4$, $P_A(B) = 0{,}5$ et $P(B) = 0{,}5$, on a $P(A \\cap B) = 0{,}2$ et $P_B(A) = \\frac{0{,}2}{0{,}5} = 0{,}4$.\n• « Au moins un » : passer par l'événement contraire."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer une probabilité « inverse » $P_B(A)$",
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
      },
      {
        "title": "Méthode : Calculer la probabilité de « au moins un succès »",
        "example": "On lance quatre fois un dé équilibré à six faces. Quelle est la probabilité d'obtenir au moins un $6$ ?",
        "steps": [
          "**Étape 1 (Modélisation)** : quatre épreuves de Bernoulli identiques et indépendantes, de succès « obtenir $6$ », avec $p = \\frac{1}{6}$.",
          "**Étape 2 (Événement contraire)** : « au moins un $6$ » a pour contraire « aucun $6$ », qui correspond au seul chemin $\\overline{S}\\,\\overline{S}\\,\\overline{S}\\,\\overline{S}$ de l'arbre : $P(\\text{aucun } 6) = \\left(\\frac{5}{6}\\right)^4 = \\frac{625}{1296}$.",
          "**Étape 3 (Calcul)** : $P(\\text{au moins un } 6) = 1 - \\frac{625}{1296} = \\frac{671}{1296} \\approx 0{,}518$.",
          "**Conclusion** : on a un peu plus d'une chance sur deux d'obtenir au moins un $6$ en quatre lancers."
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
      },
      {
        "q": "Comment démontre-t-on la formule des probabilités totales avec $A$ et $\\overline{A}$ ?",
        "a": "$B$ est la réunion des événements incompatibles $A \\cap B$ et $\\overline{A} \\cap B$, donc $P(B) = P(A \\cap B) + P(\\overline{A} \\cap B) = P(A)P_A(B) + P(\\overline{A})P_{\\overline{A}}(B)$."
      },
      {
        "q": "On répète trois fois de façon indépendante une épreuve de succès $p = 0{,}5$. Probabilité d'au moins un succès ?",
        "a": "$1 - 0{,}5^3 = 1 - 0{,}125 = 0{,}875$."
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
      "Calculer la variance $V(X) = E(X^2) - (E(X))^2$ et l'écart-type $\\sigma(X) = \\sqrt{V(X)}$.",
      "Utiliser la linéarité de l'espérance et programmer le calcul de l'espérance, de la variance et de l'écart-type d'une loi."
    ],
    "keyPoints": [
      {
        "title": "1. Espérance, variance et écart-type",
        "content": "Pour une variable aléatoire $X$ prenant les valeurs $x_1, x_2, \\dots, x_k$ avec les probabilités $p_i = P(X = x_i)$ :\n• **Espérance mathématique** (moyenne pondérée sur le long terme) :\n$$E(X) = \\sum_{i=1}^k x_i p_i = x_1 p_1 + x_2 p_2 + \\dots + x_k p_k$$\n• **Variance** (mesure de la dispersion par rapport à la moyenne) :\n$$V(X) = \\sum_{i=1}^k (x_i - E(X))^2 p_i = E(X^2) - (E(X))^2 \\quad \\text{(formule de König-Huygens)}$$\n• **Écart-type** : $\\sigma(X) = \\sqrt{V(X)}$ (même unité que $X$)."
      },
      {
        "title": "2. Transformation affine $aX + b$",
        "content": "Pour tous réels $a$ et $b$, par **linéarité de l'espérance** :\n$$E(aX + b) = a E(X) + b$$\n*Pour aller plus loin* (non exigible en première) : $V(aX + b) = a^2 V(X)$ et $\\sigma(aX + b) = |a|\\,\\sigma(X)$."
      },
      {
        "title": "3. Variable aléatoire et loi de probabilité",
        "content": "Une **variable aléatoire** $X$ sur un univers fini $\\Omega$ est une fonction qui associe un nombre réel à chaque issue.\n• L'événement $\\{X = x_i\\}$ regroupe les issues pour lesquelles $X$ prend la valeur $x_i$.\n• La **loi de probabilité** de $X$ est la donnée des valeurs $x_i$ et des probabilités $p_i = P(X = x_i)$, souvent présentée dans un tableau. On a toujours $p_1 + p_2 + \\dots + p_k = 1$.\n*Exemple* : on lance deux pièces équilibrées et $X$ est le nombre de « Pile ». $P(X = 0) = \\frac{1}{4}$, $P(X = 1) = \\frac{1}{2}$, $P(X = 2) = \\frac{1}{4}$.\n• **Notations** : $\\{X \\le a\\}$ est l'événement « $X$ prend une valeur inférieure ou égale à $a$ ». Avec les deux pièces : $P(X \\le 1) = P(X = 0) + P(X = 1) = \\frac{3}{4}$."
      },
      {
        "title": "4. Interpréter l'espérance par la simulation",
        "content": "Si l'on répète un grand nombre de fois l'expérience, la **moyenne des valeurs obtenues** pour $X$ est en général proche de $E(X)$. On peut l'observer en Python (dé : gain de $10$ si on obtient $6$, perte de $2$ sinon) :\n```python\nfrom random import randint\n\ndef moyenne(N):\n    s = 0\n    for k in range(N):\n        s = s + (10 if randint(1, 6) == 6 else -2)\n    return s / N\n```\nIci $E(X) = 10 \\times \\frac{1}{6} - 2 \\times \\frac{5}{6} = 0$, et `moyenne(100000)` renvoie une valeur proche de $0$."
      },
      {
        "title": "Démonstration : formule de König-Huygens",
        "content": "Notons $\\mu = E(X)$. En développant $(x_i - \\mu)^2 = x_i^2 - 2\\mu x_i + \\mu^2$ :\n$$V(X) = \\sum_{i=1}^k x_i^2 p_i - 2\\mu \\sum_{i=1}^k x_i p_i + \\mu^2 \\sum_{i=1}^k p_i = E(X^2) - 2\\mu \\times \\mu + \\mu^2 \\times 1 = E(X^2) - \\mu^2$$\ncar $\\sum x_i p_i = \\mu$ et $\\sum p_i = 1$. Cette formule simplifie souvent les calculs."
      },
      {
        "title": "5. Linéarité de l'espérance",
        "content": "Si $X$ et $Y$ sont deux variables aléatoires définies sur le même univers et $a$, $b$ deux réels (propriétés admises) :\n$$E(X + Y) = E(X) + E(Y) \\quad \\text{et} \\quad E(aX + b) = aE(X) + b$$\n*Exemple* : on lance deux dés équilibrés ; $X$ et $Y$ sont les deux résultats. $E(X) = E(Y) = \\frac{1 + 2 + 3 + 4 + 5 + 6}{6} = 3{,}5$, donc la somme $S = X + Y$ a pour espérance $E(S) = 7$, sans qu'il soit nécessaire de déterminer la loi de $S$.\n⚠️ Il n'y a pas de formule analogue pour la variance d'une somme en Première."
      },
      {
        "title": "6. Algorithmes : espérance, variance, écart-type et échantillons",
        "content": "• **Calcul à partir de la loi** (listes des valeurs et des probabilités) :\n```python\nfrom math import sqrt\n\ndef esperance(valeurs, probas):\n    return sum(valeurs[i] * probas[i] for i in range(len(valeurs)))\n\ndef variance(valeurs, probas):\n    m = esperance(valeurs, probas)\n    return sum((valeurs[i] - m) ** 2 * probas[i] for i in range(len(valeurs)))\n\ndef ecart_type(valeurs, probas):\n    return sqrt(variance(valeurs, probas))\n```\nAvec `valeurs = [5, 2, -2]` et `probas = [0.2, 0.3, 0.5]` (jeu de l'urne), on obtient, aux arrondis près, $0{,}6$, $7{,}84$ et $2{,}8$.\n• **Moyenne d'échantillons** : pour une variable $X$ d'espérance $\\mu$ et d'écart-type $\\sigma$, on simule $N$ échantillons de taille $n$ et on calcule la proportion de ceux dont la moyenne $m$ vérifie $|m - \\mu| \\le \\frac{2\\sigma}{\\sqrt{n}}$.\n```python\nfrom random import randint\nfrom math import sqrt\n\ndef moyenne_echantillon(n):     # gain du jeu : 10 si 6, -2 sinon\n    s = 0\n    for k in range(n):\n        s = s + (10 if randint(1, 6) == 6 else -2)\n    return s / n\n\ndef proportion(N, n, mu, sigma):\n    c = 0\n    for j in range(N):\n        if abs(moyenne_echantillon(n) - mu) <= 2 * sigma / sqrt(n):\n            c = c + 1\n    return c / N\n```\nPour ce jeu, $\\mu = 0$ et $V(X) = 100 \\times \\frac{1}{6} + 4 \\times \\frac{5}{6} = 20$, donc $\\sigma = \\sqrt{20}$. `proportion(1000, 100, 0, sqrt(20))` renvoie en général une valeur proche de $0{,}95$ : la moyenne d'un échantillon est le plus souvent à moins de $\\frac{2\\sigma}{\\sqrt{n}}$ de l'espérance, et cet écart diminue quand $n$ augmente."
      },
      {
        "title": "7. Pour aller plus loin : minimum de $x \\mapsto E((X - x)^2)$",
        "content": "Notons $\\mu = E(X)$. Pour tout réel $x$, en développant et par linéarité de l'espérance :\n$$E\\left((X - x)^2\\right) = E(X^2) - 2x\\,\\mu + x^2 = (x - \\mu)^2 + E(X^2) - \\mu^2 = (x - \\mu)^2 + V(X)$$\nC'est une fonction polynôme du second degré de $x$, minimale pour $x = \\mu$, de minimum $V(X)$ : l'espérance est le nombre « le plus proche » des valeurs de $X$ au sens des carrés des écarts, et la variance mesure cet écart minimal."
      },
      {
        "title": "Automatismes pour l'épreuve anticipée",
        "content": "L'épreuve anticipée de mathématiques (2 heures, **sans calculatrice**) commence par un QCM d'automatismes (6 points sur 20), suivi d'exercices (14 points). Questions flash typiques sur ce chapitre, à traiter de tête :\n• Compléter une loi : la somme des probabilités vaut $1$. Si $P(X = 1) = 0{,}3$, $P(X = 2) = \\frac{1}{4}$, $P(X = 3) = 0{,}25$, alors $P(X = 4) = 1 - 0{,}8 = 0{,}2$.\n• Espérance de tête : valeurs $-1$, $0$, $4$ de probabilités $0{,}5$ ; $0{,}3$ ; $0{,}2$ : $E(X) = -0{,}5 + 0 + 0{,}8 = 0{,}3$.\n• Une moyenne pondérée (statistiques) se calcule comme une espérance : notes $10$ et $16$ de coefficients $1$ et $2$ donnent $\\frac{10 + 32}{3} = 14$.\n• $E(2X + 1) = 2E(X) + 1$ (linéarité de l'espérance).\n• **Statistiques** : lire un histogramme ou un diagramme (origine, unités, échelles), passer du graphique aux données ; la série $2 ; 4 ; 4 ; 6$ a pour moyenne $4$ et pour écart type $\\sqrt{\\frac{4 + 0 + 0 + 4}{4}} = \\sqrt{2}$.\n• Jeu équitable $\\iff E(\\text{gain}) = 0$."
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
        "title": "Pour aller plus loin — Méthode : Utiliser les propriétés de $E(aX + b)$ et $V(aX + b)$",
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
      "⚠️ (Pour aller plus loin) $V(aX + b) = a^2 V(X)$ : la constante $b$ disparaît et $a$ est élevé au carré. Par exemple $V(-2X + 3) = 4V(X)$.",
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
      },
      {
        "q": "On lance deux dés équilibrés. Quelle est l'espérance de la somme des deux résultats ?",
        "a": "Par linéarité, $E(X + Y) = E(X) + E(Y) = 3{,}5 + 3{,}5 = 7$."
      },
      {
        "q": "Avec $\\mu = E(X)$, comment démontre-t-on $V(X) = E(X^2) - \\mu^2$ ?",
        "a": "On développe $\\sum (x_i - \\mu)^2 p_i = \\sum x_i^2 p_i - 2\\mu \\sum x_i p_i + \\mu^2 \\sum p_i = E(X^2) - 2\\mu^2 + \\mu^2$."
      }
    ]
  },

  "1S3": {
    "title": "1S3 : Algorithmique et programmation en Python : listes, suites, seuils et simulations",
    "domain": "Algorithmique et Programmation",
    "objectives": [
      "Générer une liste Python en extension, par ajouts successifs (`append`) ou en compréhension.",
      "Manipuler les éléments d'une liste et leurs indices : lire, modifier, ajouter (`append`), supprimer (`pop`, `remove`, `del`), longueur `len(L)`, parcours par indice ou par élément.",
      "Calculer un terme d'une suite définie explicitement ou par récurrence, et la liste de ses premiers termes.",
      "Calculer une somme de termes à l'aide d'un accumulateur.",
      "Programmer un algorithme de seuil avec une boucle `while` et interpréter le résultat.",
      "Simuler une expérience aléatoire (`random`, `randint`), calculer une fréquence et la comparer à une probabilité ou une espérance.",
      "Programmer des exemples classiques : factorielle, liste des termes de la suite de Fibonacci ou d'une suite de Syracuse, fréquences d'apparition des lettres d'un texte."
    ],
    "keyPoints": [
      {
        "title": "1. Les listes en Python",
        "content": "Une **liste** est une suite ordonnée de valeurs, écrite entre crochets : `L = [5, 8, 13]`.\n• Les **indices** commencent à $0$ : `L[0]` vaut $5$, `L[2]` vaut $13$ ; `L[-1]` désigne le **dernier** élément.\n• `len(L)` est le nombre d'éléments ; les indices vont donc de $0$ à `len(L) - 1`.\n• `L.append(x)` ajoute `x` à la fin ; `L[i] = x` remplace l'élément d'indice `i`.\n• **Supprimer** : `L.pop()` retire (et renvoie) le dernier élément ; `del L[i]` supprime l'élément d'indice `i` ; `L.remove(x)` supprime la première occurrence de la valeur `x`. Avec `L = [5, 8, 13]` : après `L.remove(8)`, `L` vaut `[5, 13]` ; après `del L[0]`, `L` vaut `[13]`.\n• `sum(L)`, `max(L)`, `min(L)` donnent la somme, le maximum, le minimum.\n```python\nL = []\nfor k in range(5):\n    L.append(k ** 2)\nprint(L)        # affiche [0, 1, 4, 9, 16]\nprint(len(L))   # affiche 5\n```"
      },
      {
        "title": "2. Listes en compréhension et parcours",
        "content": "On peut construire une liste en une ligne, **en compréhension** :\n```python\ncarres = [k ** 2 for k in range(5)]                # [0, 1, 4, 9, 16]\npairs = [k for k in range(1, 20) if k % 2 == 0]   # entiers pairs de 2 à 18\n```\nDeux façons de parcourir une liste :\n```python\nfor x in L:              # par élément\n    print(x)\nfor i in range(len(L)):  # par indice\n    print(i, L[i])\n```\nLe parcours par indice est utile quand on a besoin de la **position** (par exemple pour comparer `L[i]` et `L[i + 1]`)."
      },
      {
        "title": "3. Calculer les termes d'une suite",
        "content": "• **Suite explicite** $u_n = f(n)$ : on programme une fonction.\n```python\ndef u(n):\n    return 3 * n ** 2 - 1\n```\n• **Suite récurrente** $u_0 = 2$, $u_{n+1} = 3u_n - 1$ : on répète l'affectation $n$ fois ; après $n$ tours, la variable contient $u_n$.\n```python\ndef terme(n):\n    u = 2\n    for k in range(n):\n        u = 3 * u - 1\n    return u\n\ndef premiers_termes(n):\n    L = [2]\n    for k in range(n):\n        L.append(3 * L[k] - 1)\n    return L          # [u0, u1, ..., un]\n```\n`terme(3)` vaut $41$ et `premiers_termes(3)` vaut `[2, 5, 14, 41]`."
      },
      {
        "title": "4. Sommes de termes",
        "content": "Pour calculer $S_n = u_0 + u_1 + \\dots + u_n$, on utilise un **accumulateur** `s` initialisé à $0$ :\n```python\ndef somme(n):\n    s = 0\n    u = 1\n    for k in range(n + 1):\n        s = s + u        # on ajoute u_k\n        u = 2 * u        # on calcule u_(k+1)\n    return s\n```\nIci $u_k = 2^k$ et `somme(n)` vaut $1 + 2 + \\dots + 2^n = 2^{n+1} - 1$. Attention à l'**ordre** des deux instructions de la boucle et au **nombre de termes** : de $u_0$ à $u_n$, il y a $n + 1$ termes."
      },
      {
        "title": "5. Algorithme de seuil",
        "content": "Pour une suite croissante qui tend vers $+\\infty$, on cherche le **plus petit rang** $n$ tel que $u_n \\ge A$. On répète le calcul **tant que** le seuil n'est pas atteint :\n```python\ndef seuil(A):\n    n = 0\n    u = 500\n    while u < A:\n        u = 1.04 * u\n        n = n + 1\n    return n\n```\nÀ la sortie de la boucle, `u` vaut $u_n$ et c'est le premier terme supérieur ou égal à $A$. Pour une suite décroissante, la condition devient `while u > A:`. (Voir aussi le chapitre 1A5.)"
      },
      {
        "title": "6. Simulation et fréquences",
        "content": "Le module `random` permet de simuler le hasard :\n• `random()` renvoie un flottant aléatoire de $[0 ; 1[$ ; la condition `random() < p` est vraie avec la probabilité $p$ ;\n• `randint(a, b)` renvoie un entier aléatoire entre $a$ et $b$ **inclus**.\n```python\nfrom random import randint\n\ndef frequence_sept(N):\n    c = 0\n    for i in range(N):\n        if randint(1, 6) + randint(1, 6) == 7:\n            c = c + 1\n    return c / N\n```\nPour $N$ grand, la fréquence obtenue est proche de la probabilité $\\frac{6}{36} = \\frac{1}{6}$, et la **moyenne** de valeurs simulées est proche de l'**espérance** (loi des grands nombres, voir 1S2)."
      },
      {
        "title": "7. Exemples classiques : factorielle, Fibonacci, Syracuse",
        "content": "```python\ndef factorielle(n):\n    p = 1\n    for k in range(1, n + 1):\n        p = p * k\n    return p\n\ndef fibonacci(n):        # n premiers termes (n >= 2) : 1, 1, 2, 3, 5...\n    L = [1, 1]\n    while len(L) < n:\n        L.append(L[-1] + L[-2])\n    return L\n\ndef syracuse(a):         # termes à partir de a, jusqu'à atteindre 1\n    L = [a]\n    while a != 1:\n        if a % 2 == 0:\n            a = a // 2\n        else:\n            a = 3 * a + 1\n        L.append(a)\n    return L\n```\n• `factorielle(5)` vaut $5! = 1 \\times 2 \\times 3 \\times 4 \\times 5 = 120$.\n• `fibonacci(8)` vaut `[1, 1, 2, 3, 5, 8, 13, 21]` : chaque terme est la somme des deux précédents.\n• `syracuse(7)` contient $17$ termes (de $7$ à $1$) et atteint au maximum $52$. Personne ne sait démontrer que la suite atteint $1$ quel que soit l'entier de départ : c'est la **conjecture de Syracuse**."
      },
      {
        "title": "8. Fréquences d'apparition des lettres d'un texte",
        "content": "```python\ndef frequences(texte):\n    alphabet = \"abcdefghijklmnopqrstuvwxyz\"\n    lettres = [c for c in texte.lower() if c in alphabet]\n    return [(l, lettres.count(l) / len(lettres)) for l in alphabet]\n```\nLa fonction renvoie une liste de couples (lettre, fréquence). Sur un long texte en français, le « e » est nettement la lettre la plus fréquente ; la répartition est différente en anglais. Ces fréquences servent par exemple à décrypter un message codé par décalage des lettres."
      },
      {
        "title": "9. Programmation modulaire",
        "content": "On découpe un problème en **fonctions** simples, que l'on combine. Par exemple, pour calculer $u_0 + u_1 + \\dots + u_n$ avec $u_k = 2^k$, on sépare le calcul d'un terme et celui de la somme :\n```python\ndef u(k):\n    return 2 ** k\n\ndef somme(n):\n    s = 0\n    for k in range(n + 1):\n        s = s + u(k)\n    return s\n```\n`somme(10)` vaut $2^{11} - 1 = 2\\,047$. Pour une autre suite, il suffit de modifier la fonction `u` : la fonction `somme` reste inchangée."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Prévoir le contenu d'une liste",
        "example": "Que contient la liste `L` après l'exécution de `L = [2 * k + 1 for k in range(3, 8)]` ? Que vaut `L[2]` ?",
        "steps": [
          "**Étape 1 (Valeurs de k)** : `range(3, 8)` donne $k = 3, 4, 5, 6, 7$ ($5$ valeurs, la borne $8$ est exclue).",
          "**Étape 2 (Éléments)** : on calcule $2k + 1$ : `L = [7, 9, 11, 13, 15]`.",
          "**Étape 3 (Indice)** : les indices commencent à $0$, donc `L[2]` est le **troisième** élément : $11$ (obtenu pour $k = 5$, et non pour $k = 2$).",
          "**Conclusion** : `L = [7, 9, 11, 13, 15]`, `len(L)` vaut $5$ et `L[2]` vaut $11$."
        ]
      },
      {
        "title": "Méthode : Programmer un algorithme de seuil",
        "example": "Une population de $2\\,000$ individus diminue de $5\\,\\%$ par an. Déterminer avec un programme au bout de combien d'années elle devient inférieure ou égale à $1\\,000$.",
        "steps": [
          "**Étape 1 (Modélisation)** : $u_0 = 2000$ et $u_{n+1} = 0{,}95u_n$ (coefficient multiplicateur $1 - 0{,}05$).",
          "**Étape 2 (Condition de la boucle)** : on continue **tant que** $u_n > 1000$.",
          "**Étape 3 (Programme)** :\n```python\nu = 2000\nn = 0\nwhile u > 1000:\n    u = 0.95 * u\n    n = n + 1\nprint(n)\n```",
          "**Conclusion** : $u_{13} = 2000 \\times 0{,}95^{13} \\approx 1027 > 1000$ et $u_{14} \\approx 976 \\le 1000$ : le programme affiche $14$ ans."
        ]
      },
      {
        "title": "Méthode : Calculer une somme de termes",
        "example": "Écrire un programme qui calcule $S = 3 + 7 + 11 + \\dots + 79$.",
        "steps": [
          "**Étape 1 (Suite)** : les termes forment une suite arithmétique de premier terme $3$ et de raison $4$ : $u_k = 3 + 4k$.",
          "**Étape 2 (Nombre de termes)** : $3 + 4k = 79 \\iff k = 19$ ; il y a donc $20$ termes ($k$ de $0$ à $19$).",
          "**Étape 3 (Programme)** :\n```python\ns = 0\nfor k in range(20):\n    s = s + 3 + 4 * k\nprint(s)\n```",
          "**Conclusion** : le programme affiche $820$, ce que confirme la formule $20 \\times \\frac{3 + 79}{2} = 820$."
        ]
      },
      {
        "title": "Méthode : Approcher une solution par balayage",
        "example": "Encadrer $\\sqrt{7}$ entre deux multiples consécutifs de $0{,}25$.",
        "steps": [
          "**Étape 1 (Principe)** : on part de $x = 0$ et on augmente $x$ d'un pas $0{,}25$ **tant que** $x^2 < 7$.",
          "**Étape 2 (Programme)** :\n```python\nx = 0\nwhile x * x < 7:\n    x = x + 0.25\nprint(x - 0.25, x)\n```",
          "**Étape 3 (Exécution)** : $2{,}5^2 = 6{,}25 < 7$ et $2{,}75^2 = 7{,}5625 \\ge 7$ : la boucle s'arrête pour $x = 2{,}75$.",
          "**Conclusion** : le programme affiche `2.5 2.75`, donc $2{,}5 < \\sqrt{7} \\le 2{,}75$. Un pas plus petit donne un encadrement plus précis."
        ]
      }
    ],
    "traps": [
      "⚠️ Le premier élément d'une liste est `L[0]` et non `L[1]` ; le dernier est `L[len(L) - 1]`, c'est-à-dire `L[-1]`.",
      "⚠️ Après `for k in range(n)`, la boucle a tourné $n$ fois : partant de $u_0$, on obtient $u_n$ (et non $u_{n-1}$ ni $u_{n+1}$).",
      "⚠️ Dans un algorithme de seuil, la condition du `while` est la condition pour **continuer** : on écrit `while u < A:` pour trouver le premier $n$ tel que $u_n \\ge A$.",
      "⚠️ Dans une somme, l'ordre des instructions compte : `s = s + u` puis `u = …` ajoute $u_0$ en premier ; l'ordre inverse oublie $u_0$.",
      "⚠️ Une fréquence obtenue par simulation n'est **pas** la probabilité : elle fluctue d'une exécution à l'autre et ne s'en approche que pour un grand nombre de répétitions."
    ],
    "flashcards": [
      {
        "q": "Que vaut `[k * k for k in range(1, 5)]` ?",
        "a": "`[1, 4, 9, 16]`."
      },
      {
        "q": "Si `L = [4, 7, 1, 9]`, que valent `L[1]`, `L[-1]` et `len(L)` ?",
        "a": "$7$, $9$ et $4$."
      },
      {
        "q": "Comment ajouter la valeur `x` à la fin de la liste `L` ?",
        "a": "Avec l'instruction `L.append(x)`."
      },
      {
        "q": "Quelle boucle utilise-t-on pour un algorithme de seuil, et pourquoi ?",
        "a": "Une boucle `while`, car on ne connaît pas à l'avance le nombre de répétitions."
      },
      {
        "q": "Que renvoie `randint(1, 6)` ?",
        "a": "Un entier aléatoire entre $1$ et $6$, bornes incluses (simulation d'un dé équilibré)."
      },
      {
        "q": "Pour $N$ grand, de quoi la moyenne de $N$ gains simulés est-elle proche ?",
        "a": "De l'espérance du gain (loi des grands nombres)."
      },
      {
        "q": "Que renvoie `factorielle(4)` ?",
        "a": "$4! = 1 \\times 2 \\times 3 \\times 4 = 24$."
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
      "hint1": "Calcule $f(3 + h) - f(3) = (3 + h)^2 - 9$ en développant, puis divise par $h$.",
      "hint2": "$(3 + h)^2 - 9 = 6h + h^2$, donc le taux vaut $6 + h$ pour $h \\neq 0$ ; cherche sa limite quand $h$ tend vers $0$.",
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
      "title": "Dérivée de $t \\mapsto e^{at}$",
      "skill": "Dériver t ↦ e^(at)",
      "statement": "Quelle est la dérivée de la fonction $f$ définie sur $\\mathbb{R}$ par $f(t) = 5e^{-0{,}2t}$ ?",
      "options": [
        "$f'(t) = -e^{-0{,}2t}$",
        "$f'(t) = 5e^{-0{,}2t}$",
        "$f'(t) = -0{,}2e^{-0{,}2t}$",
        "$f'(t) = e^{-0{,}2t}$"
      ],
      "correctIndex": 0,
      "answer": "$f'(t) = -e^{-0{,}2t}$",
      "hint1": "Pour tout réel $a$, $(e^{at})' = a\\,e^{at}$ ; ici $a = -0{,}2$.",
      "hint2": "N'oublie pas le facteur $5$ : $(5u)' = 5u'$.",
      "solution": "$f'(t) = 5 \\times (-0{,}2)\\,e^{-0{,}2t} = -e^{-0{,}2t}$."
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
      "title": "Équation avec des exponentielles",
      "skill": "Résoudre une équation e^a = e^b",
      "statement": "Résoudre dans $\\mathbb{R}$ l'équation $e^{x^2} = e^{4x - 3}$.",
      "options": [
        "$S = \\{1 ; 3\\}$",
        "$S = \\{-1 ; -3\\}$",
        "$S = \\{3\\}$",
        "$S = \\emptyset$"
      ],
      "correctIndex": 0,
      "answer": "$S = \\{1 ; 3\\}$",
      "hint1": "La fonction exponentielle est strictement croissante : $e^a = e^b \\iff a = b$.",
      "hint2": "On se ramène à $x^2 = 4x - 3$, soit $x^2 - 4x + 3 = 0$ ; cherche une racine évidente.",
      "solution": "$e^{x^2} = e^{4x - 3} \\iff x^2 - 4x + 3 = 0$. Le réel $1$ est racine évidente ($1 - 4 + 3 = 0$) et le produit des racines vaut $3$ : l'autre racine est $3$. $S = \\{1 ; 3\\}$."
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
      "hint2": "$(v_n)$ est géométrique de raison $0{,}5$ et $v_0 = 2 - 6 = -4$, donc $v_n = -4 \\times 0{,}5^n$ : les termes se rapprochent de $0$ (conjecture à l'aide de quelques termes), et $u_n = v_n + 6$ se rapproche de $6$.",
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
      "hint2": "Les puissances $\\left(\\frac{1}{3}\\right)^{n+1}$ deviennent aussi proches de $0$ que l'on veut ($\\frac{1}{3^{10}} \\approx 0{,}000\\,017$) : $S_n$ se rapproche de $\\frac{1}{1 - \\frac{1}{3}}$.",
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
      "title": "Point associé à un réel",
      "skill": "Coordonnées du point image d'un réel",
      "statement": "Quelles sont les coordonnées du point $M$ du cercle trigonométrique associé au réel $\\frac{2\\pi}{3}$ ?",
      "options": [
        "$M\\left(-\\frac{1}{2} ; \\frac{\\sqrt{3}}{2}\\right)$",
        "$M\\left(\\frac{1}{2} ; \\frac{\\sqrt{3}}{2}\\right)$",
        "$M\\left(-\\frac{\\sqrt{3}}{2} ; \\frac{1}{2}\\right)$",
        "$M\\left(\\frac{\\sqrt{3}}{2} ; -\\frac{1}{2}\\right)$"
      ],
      "correctIndex": 0,
      "answer": "$M\\left(-\\frac{1}{2} ; \\frac{\\sqrt{3}}{2}\\right)$",
      "hint1": "Les coordonnées de $M$ sont $(\\cos x ; \\sin x)$, et $\\frac{2\\pi}{3} = \\pi - \\frac{\\pi}{3}$.",
      "hint2": "Le point est le symétrique de celui de $\\frac{\\pi}{3}$ par rapport à l'axe des ordonnées : même ordonnée, abscisse opposée.",
      "solution": "$\\cos\\left(\\frac{2\\pi}{3}\\right) = -\\cos\\left(\\frac{\\pi}{3}\\right) = -\\frac{1}{2}$ et $\\sin\\left(\\frac{2\\pi}{3}\\right) = \\sin\\left(\\frac{\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2}$, d'où $M\\left(-\\frac{1}{2} ; \\frac{\\sqrt{3}}{2}\\right)$."
    },
    {
      "id": "1G1-4",
      "tier": 4,
      "type": "mcq",
      "title": "Longueur d'arc",
      "skill": "Radian et longueur d'arc",
      "statement": "Sur un cercle de rayon $6$ cm, quelle est la longueur de l'arc intercepté par un angle de $\\frac{5\\pi}{6}$ radians ?",
      "options": [
        "$5\\pi$ cm",
        "$\\frac{5\\pi}{36}$ cm",
        "$\\frac{5\\pi}{6}$ cm",
        "$10\\pi$ cm"
      ],
      "correctIndex": 0,
      "answer": "$5\\pi$ cm",
      "hint1": "Sur un cercle de rayon $R$, un angle de $\\theta$ radians intercepte un arc de longueur $\\ell = R\\,\\theta$.",
      "hint2": "Calcule $6 \\times \\frac{5\\pi}{6}$.",
      "solution": "$\\ell = R\\theta = 6 \\times \\frac{5\\pi}{6} = 5\\pi \\approx 15{,}7$ cm."
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
      "title": "Linéarité de l'espérance",
      "skill": "Linéarité de l'espérance",
      "statement": "Une variable aléatoire $X$ vérifie $E(X) = 4$. On pose $Y = 3X - 5$. Que vaut $E(Y)$ ?",
      "options": [
        "$7$",
        "$12$",
        "$17$",
        "$-1$"
      ],
      "correctIndex": 0,
      "answer": "$7$",
      "hint1": "Par linéarité de l'espérance, $E(aX + b) = aE(X) + b$.",
      "hint2": "Ici $a = 3$ et $b = -5$.",
      "solution": "$E(Y) = 3E(X) - 5 = 3 \\times 4 - 5 = 7$."
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
  ],
  "1S3": [
    {
      "id": "1S3-1",
      "tier": 1,
      "type": "mcq",
      "title": "Liste en compréhension",
      "skill": "Construire une liste en compréhension",
      "statement": "Qu'affiche le programme Python suivant ?\n```python\nL = [3 * k for k in range(1, 5)]\nprint(L)\n```",
      "options": [
        "« [3, 6, 9, 12] »",
        "« [0, 3, 6, 9, 12] »",
        "« [3, 6, 9, 12, 15] »",
        "« [0, 3, 6, 9] »"
      ],
      "correctIndex": 0,
      "answer": "« [3, 6, 9, 12] »",
      "hint1": "`range(1, 5)` parcourt les entiers $1$, $2$, $3$ et $4$.",
      "hint2": "Chaque élément est le triple de `k`.",
      "solution": "Pour $k = 1, 2, 3, 4$ (la borne $5$ est exclue), on calcule $3k$ : la liste est `[3, 6, 9, 12]`."
    },
    {
      "id": "1S3-2",
      "tier": 2,
      "type": "mcq",
      "title": "Terme d'une suite récurrente",
      "skill": "Calculer un terme d'une suite avec une boucle",
      "statement": "On considère la suite définie par $u_0 = 1$ et $u_{n+1} = 2u_n + 3$. Qu'affiche le programme suivant ?\n```python\nu = 1\nfor k in range(4):\n    u = 2 * u + 3\nprint(u)\n```",
      "options": [
        "$61$",
        "$29$",
        "$125$",
        "$13$"
      ],
      "correctIndex": 0,
      "answer": "$61$",
      "hint1": "La boucle s'exécute $4$ fois : à la fin, `u` contient $u_4$.",
      "hint2": "$u_1 = 5$, $u_2 = 13$…",
      "solution": "$u_1 = 2 \\times 1 + 3 = 5$, $u_2 = 13$, $u_3 = 29$, $u_4 = 61$. Le programme affiche $61$."
    },
    {
      "id": "1S3-3",
      "tier": 3,
      "type": "mcq",
      "title": "Algorithme de seuil",
      "skill": "Exécuter un algorithme de seuil",
      "statement": "Qu'affiche le programme Python suivant ?\n```python\nu = 3\nn = 0\nwhile u < 1000:\n    u = 2 * u\n    n = n + 1\nprint(n)\n```",
      "options": [
        "$9$",
        "$8$",
        "$10$",
        "$1536$"
      ],
      "correctIndex": 0,
      "answer": "$9$",
      "hint1": "Après $n$ tours, `u` vaut $3 \\times 2^n$.",
      "hint2": "Cherche le premier $n$ tel que $3 \\times 2^n \\ge 1000$.",
      "solution": "$3 \\times 2^8 = 768 < 1000$ et $3 \\times 2^9 = 1536 \\ge 1000$. La boucle s'arrête après $9$ tours : le programme affiche $9$."
    },
    {
      "id": "1S3-4",
      "tier": 4,
      "type": "mcq",
      "title": "Simulation de deux dés",
      "skill": "Interpréter une fréquence simulée",
      "statement": "On exécute le programme suivant.\n```python\nfrom random import randint\n\ndef frequence(N):\n    c = 0\n    for i in range(N):\n        a = randint(1, 6)\n        b = randint(1, 6)\n        if a + b >= 10:\n            c = c + 1\n    return c / N\n\nprint(frequence(100000))\n```\nAutour de quelle valeur la valeur affichée fluctue-t-elle ?",
      "options": [
        "$\\frac{1}{6}$",
        "$\\frac{1}{12}$",
        "$\\frac{1}{4}$",
        "$\\frac{3}{11}$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{1}{6}$",
      "hint1": "Pour $N$ grand, la fréquence est proche de la probabilité de l'événement « $a + b \\ge 10$ ».",
      "hint2": "Compte les couples $(a ; b)$ dont la somme vaut $10$, $11$ ou $12$ parmi les $36$ couples équiprobables.",
      "solution": "Somme $10$ : $3$ couples, somme $11$ : $2$ couples, somme $12$ : $1$ couple, soit $6$ couples favorables sur $36$. La probabilité vaut $\\frac{6}{36} = \\frac{1}{6}$ : d'après la loi des grands nombres, la fréquence affichée fluctue autour de $\\frac{1}{6}$."
    },
    {
      "id": "1S3-5",
      "tier": 3,
      "type": "mcq",
      "title": "Somme et ordre des instructions",
      "skill": "Calculer une somme de termes avec un accumulateur",
      "statement": "Qu'affiche le programme Python suivant ?\n```python\ns = 0\nu = 5\nfor k in range(4):\n    u = u + 2\n    s = s + u\nprint(s)\n```",
      "options": [
        "$40$",
        "$32$",
        "$44$",
        "$13$"
      ],
      "correctIndex": 0,
      "answer": "$40$",
      "hint1": "Ici, `u` est modifié **avant** d'être ajouté à `s`.",
      "hint2": "Les valeurs ajoutées sont $7$, $9$, $11$ et $13$.",
      "solution": "Au premier tour, `u` devient $7$ avant d'être ajouté : $s = 7 + 9 + 11 + 13 = 40$. La valeur initiale $5$ n'est jamais ajoutée (avec l'ordre inverse, on aurait obtenu $5 + 7 + 9 + 11 = 32$)."
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
