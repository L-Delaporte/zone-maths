/**
 * Données pédagogiques universitaires de Licence 1 de Mathématiques (S1 & S2)
 * Synthétisant les enseignements magistraux et travaux dirigés d'Algèbre et d'Analyse
 */

window.MATHS_COURSES_L1 = {
  "L1-LOG": {
    "title": "L1-LOG : Logique mathématique, quantificateurs et théorie des ensembles",
    "domain": "Algèbre Fondamentale",
    "objectives": [
      "Maîtriser les connecteurs logiques, tables de vérité, et les quantificateurs universel $\\forall$ et existentiel $\\exists$.",
      "Mettre en œuvre les modes de raisonnement formels : contraposition, absurde, disjonction des cas, récurrence forte.",
      "Définir rigoureusement les notions d'application, injection, surjection, bijection et image directe/réciproque.",
      "Définir une relation d'équivalence, classe d'équivalence et ensemble quotient."
    ],
    "keyPoints": [
      {
        "title": "1. Quantificateurs et négation d'une assertion",
        "content": "• **Quantificateur universel $\\forall$** (« pour tout ») et **existentiel $\\exists$** (« il existe au moins un »).\n• **Négation d'assertions quantifiées** :\n$$\\neg(\\forall x \\in E, P(x)) \\iff \\exists x \\in E, \\neg P(x)$$\n$$\\neg(\\exists x \\in E, P(x)) \\iff \\forall x \\in E, \\neg P(x)$$\n• **Implication et contraposition** : L'assertion $P \\implies Q$ est logiquement équivalente à sa contraposée $\\neg Q \\implies \\neg P$."
      },
      {
        "title": "2. Applications : Injectivité, Surjectivité, Bijectivité",
        "content": "Soit $f : E \\to F$ une application :\n• **$f$ est injective** si tout élément de $F$ a au plus un antécédent dans $E$ :\n$$\\forall x, x' \\in E, \\quad f(x) = f(x') \\implies x = x'$$\n• **$f$ est surjective** si tout élément de $F$ a au moins un antécédent dans $E$ :\n$$\\forall y \\in F, \\quad \\exists x \\in E, \\quad y = f(x)$$\n• **$f$ est bijective** si elle est à la fois injective et surjective (tout élément de $F$ a un unique antécédent dans $E$). Il existe alors une bijection réciproque unique $f^{-1} : F \\to E$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Démontrer l'injectivité d'une application",
        "example": "Soit $f : \\mathbb{R} \\setminus \\{2\\} \\to \\mathbb{R} \\setminus \\{3\\}$ définie par $f(x) = \\frac{3x - 1}{x - 2}$. Démontrer que $f$ est injective.",
        "steps": [
          "**Étape 1 (Hypothèse)** : Soient $x, x' \\in \\mathbb{R} \\setminus \\{2\\}$ tels que $f(x) = f(x')$.",
          "**Étape 2 (Développement)** : $\\frac{3x - 1}{x - 2} = \\frac{3x' - 1}{x' - 2} \\iff (3x - 1)(x' - 2) = (3x' - 1)(x - 2)$.",
          "**Étape 3 (Simplification)** : $3xx' - 6x - x' + 2 = 3x'x - 6x' - x + 2 \\iff -6x - x' = -6x' - x \\iff -5x = -5x' \\iff x = x'$.",
          "**Conclusion** : L'application $f$ est injective."
        ]
      }
    ],
    "traps": [
      "⚠️ L'ordre des quantificateurs est crucial : $\\forall x, \\exists y, P(x, y)$ n'est PAS équivalent à $\\exists y, \\forall x, P(x, y)$ !",
      "⚠️ La négation de $P \\implies Q$ est $P \\text{ et } \\neg Q$ (et non $\\neg P \\implies \\neg Q$)."
    ],
    "flashcards": [
      {
        "q": "Quelle est la négation formelle de « $\\forall \\varepsilon > 0, \\exists \\eta > 0, |x - a| < \\eta \\implies |f(x) - f(a)| < \\varepsilon$ » ?",
        "a": "$\\exists \\varepsilon > 0, \\forall \\eta > 0, \\exists x, |x - a| < \\eta \\text{ et } |f(x) - f(a)| \\ge \\varepsilon$."
      },
      {
        "q": "Quelle est la définition d'une application injective $f : E \\to F$ ?",
        "a": "$\\forall x, x' \\in E, f(x) = f(x') \\implies x = x'$."
      }
    ]
  },
  "L1-MAT": {
    "title": "L1-MAT : Calcul matriciel, systèmes linéaires et pivot de Gauss",
    "domain": "Algèbre Linéaire",
    "objectives": [
      "Maîtriser les opérations sur $\\mathcal{M}_{n,p}(\\mathbb{K})$ (addition, multiplication matricielle non commutative).",
      "Écrire un système linéaire sous forme matricielle $AX = B$.",
      "Appliquer l'algorithme du pivot de Gauss pour échelonner une matrice par opérations élémentaires sur les lignes.",
      "Calculer l'inverse d'une matrice carrée inversible par la méthode de Gauss-Jordan $(A | I_n) \\to (I_n | A^{-1})$."
    ],
    "keyPoints": [
      {
        "title": "1. Opérations élémentaires sur les lignes (Pivot de Gauss)",
        "content": "Les trois opérations élémentaires qui préservent l'ensemble des solutions d'un système linéaire sont :\n1. Échange de deux lignes : $L_i \\leftrightarrow L_j$\n2. Multiplication d'une ligne par un scalaire non nul : $L_i \\leftarrow \\lambda L_i$ ($\\lambda \\neq 0$)\n3. Ajout à une ligne d'un multiple d'une autre : $L_i \\leftarrow L_i + \\mu L_j$ ($j \\neq i$)\n\n• **Matrice échelonnée** : Le nombre de zéros en début de ligne augmente strictement à chaque ligne."
      },
      {
        "title": "2. Inversion de matrices (Algorithme de Gauss-Jordan)",
        "content": "Pour inverser une matrice carrée $A \\in \\mathcal{M}_n(\\mathbb{K})$ :\nOn forme la matrice augmentée $(A \\mid I_n)$. En appliquant les opérations élémentaires sur les lignes jusqu'à transformer la partie gauche en $I_n$, la partie droite devient l'inverse $A^{-1}$ :\n$$(A \\mid I_n) \\xrightarrow{\\text{Gauss-Jordan}} (I_n \\mid A^{-1})$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Inverser une matrice $2 \\times 2$ avec le pivot de Gauss",
        "example": "Inverser la matrice $A = \\begin{pmatrix} 2 & 1 \\\\ 5 & 3 \\end{pmatrix}$.",
        "steps": [
          "**Matrice augmentée** : $\\begin{pmatrix} 2 & 1 & \\mid & 1 & 0 \\\\ 5 & 3 & \\mid & 0 & 1 \\end{pmatrix}$.",
          "**Élimination ligne 2** : $L_2 \\leftarrow 2L_2 - 5L_1$ : $\\begin{pmatrix} 2 & 1 & \\mid & 1 & 0 \\\\ 0 & 1 & \\mid & -5 & 2 \\end{pmatrix}$.",
          "**Élimination ligne 1** : $L_1 \\leftarrow L_1 - L_2$ : $\\begin{pmatrix} 2 & 0 & \\mid & 6 & -2 \\\\ 0 & 1 & \\mid & -5 & 2 \\end{pmatrix}$.",
          "**Normalisation ligne 1** : $L_1 \\leftarrow \\frac{1}{2}L_1$ : $\\begin{pmatrix} 1 & 0 & \\mid & 3 & -1 \\\\ 0 & 1 & \\mid & -5 & 2 \\end{pmatrix}$.",
          "**Conclusion** : $A^{-1} = \\begin{pmatrix} 3 & -1 \\\\ -5 & 2 \\end{pmatrix}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Le produit matriciel n'est **pas commutatif** : en général, $AB \\neq BA$ !",
      "⚠️ $AB = 0$ n'implique pas que $A = 0$ ou $B = 0$ (il existe des diviseurs de zéro dans $\\mathcal{M}_n(\\mathbb{K})$)."
    ],
    "flashcards": [
      {
        "q": "Le produit matriciel est-il commutatif dans $\\mathcal{M}_n(\\mathbb{R})$ ($n \\ge 2$) ?",
        "a": "Non, en général $AB \\neq BA$."
      },
      {
        "q": "Quelle condition sur une matrice échelonnée garantit que le système linéaire $AX = B$ admet une solution unique ?",
        "a": "Elle doit comporter un pivot non nul sur chaque ligne et chaque colonne (rang égal à $n$)."
      }
    ]
  },
  "L1-EV1": {
    "title": "L1-EV1 : Espaces vectoriels, sous-espaces et bases en dimension finie",
    "domain": "Algèbre Linéaire",
    "objectives": [
      "Vérifier qu'un sous-ensemble est un sous-espace vectoriel (SEV) : non vide, stable par combinaison linéaire.",
      "Définir et manipuler les notions de famille libre, famille génératrice et base.",
      "Connaître le Théorème de la base incomplète et le Théorème de la dimension finie.",
      "Appliquer la formule de Grassmann pour deux sous-espaces : $\\dim(F + G) = \\dim(F) + \\dim(G) - \\dim(F \\cap G)$."
    ],
    "keyPoints": [
      {
        "title": "1. Caractérisation d'un sous-espace vectoriel",
        "content": "Soit $E$ un $\\mathbb{K}$-espace vectoriel. Une partie $F \\subset E$ est un **sous-espace vectoriel** ssi :\n1. $0_E \\in F$ (non vide)\n2. Pour tous $u, v \\in F$ et tous $\\lambda, \\mu \\in \\mathbb{K}$, $\\lambda u + \\mu v \\in F$ (stable par combinaisons linéaires)."
      },
      {
        "title": "2. Bases, Dimension et Formule de Grassmann",
        "content": "• Une famille $\\mathcal{B} = (e_1, \\dots, e_n)$ est une **base** de $E$ si elle est à la fois **libre** et **génératrice**.\n• En dimension finie $n = \\dim(E)$ : toute famille libre de $n$ vecteurs est une base ; toute famille génératrice de $n$ vecteurs est une base.\n• **Formule de Grassmann** : Pour tous sous-espaces vectoriels $F$ et $G$ de dimension finie :\n$$\\dim(F + G) = \\dim(F) + \\dim(G) - \\dim(F \\cap G)$$\n• $F$ et $G$ sont en **somme directe** ($F \\oplus G$) ssi $F \\cap G = \\{0\\} \\iff \\dim(F + G) = \\dim(F) + \\dim(G)$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Démontrer qu'une famille de 3 vecteurs est libre",
        "example": "Soit $E = \\mathbb{R}^3$. La famille $\\mathcal{F} = (u_1, u_2, u_3)$ avec $u_1(1;1;0), u_2(0;1;1), u_3(1;0;1)$ est-elle libre ?",
        "steps": [
          "**Étape 1 (Combinaison linéaire nulle)** : Soient $a, b, c \\in \\mathbb{R}$ tels que $a u_1 + b u_2 + c u_3 = (0;0;0)$.",
          "**Étape 2 (Système)** : $\\begin{cases} a + c = 0 \\\\ a + b = 0 \\\\ b + c = 0 \\end{cases}$.",
          "**Étape 3 (Résolution)** : $a = -c$, donc $-c + b = 0 \\implies b = c$. Alors $b + c = 0 \\implies 2c = 0 \\implies c = 0$. On en déduit $a = 0$ et $b = 0$.",
          "**Conclusion** : L'unique solution est $a = b = c = 0$. La famille $\\mathcal{F}$ est libre."
        ]
      }
    ],
    "traps": [
      "⚠️ Une famille contenant le vecteur nul $0_E$ n'est JAMAIS libre !",
      "⚠️ Ne pas confondre union $F \\cup G$ (qui n'est presque jamais un SEV) et somme $F + G$ (qui est toujours un SEV)."
    ],
    "flashcards": [
      {
        "q": "Énoncer la formule de Grassmann pour la dimension de la somme de deux sous-espaces.",
        "a": "$\\dim(F + G) = \\dim(F) + \\dim(G) - \\dim(F \\cap G)$."
      },
      {
        "q": "À quelle condition deux sous-espaces vectoriels $F$ et $G$ sont-ils supplémentaires dans $E$ ($E = F \\oplus G$) ?",
        "a": "$F \\cap G = \\{0_E\\}$ et $F + G = E$."
      }
    ]
  },
  "L1-APP": {
    "title": "L1-APP : Applications linéaires et Théorème du Rang",
    "domain": "Algèbre Linéaire",
    "objectives": [
      "Définir une application linéaire $f : E \\to F$ vérifiant $f(\\lambda u + \\mu v) = \\lambda f(u) + \\mu f(v)$.",
      "Déterminer le noyau $\\ker(f) = \\{u \\in E \\mid f(u) = 0_F\\}$ et l'image $\\text{Im}(f) = \\{f(u) \\mid u \\in E\\}$.",
      "Énoncer et appliquer le Théorème du Rang : $\\dim(E) = \\dim(\\ker f) + \\text{rg}(f)$.",
      "Caractériser les isomorphismes en dimension finie."
    ],
    "keyPoints": [
      {
        "title": "1. Noyau, Image et Injectivité/Surjectivité",
        "content": "Soit $f \\in \\mathcal{L}(E, F)$ une application linéaire :\n• $\\ker(f)$ est un sous-espace vectoriel de $E$, et $\\text{Im}(f)$ est un sous-espace vectoriel de $F$.\n• **Critère fondamental d'injectivité** :\n$$f \\text{ est injective} \\iff \\ker(f) = \\{0_E\\}$$\n• $f$ est surjective ssi $\\text{Im}(f) = F$ ssi $\\text{rg}(f) = \\dim(F)$."
      },
      {
        "title": "2. Théorème du Rang",
        "content": "Soit $E$ un $\\mathbb{K}$-espace vectoriel de **dimension finie** et $f : E \\to F$ une application linéaire :\n$$\\dim(E) = \\dim(\\ker f) + \\dim(\\text{Im} f) = \\dim(\\ker f) + \\text{rg}(f)$$\n• **Corollaire fondamental** : Si $\\dim(E) = \\dim(F)$, alors les assertions suivantes sont équivalentes :\n1. $f$ est injective ($\\ker f = \\{0\\}$)\n2. $f$ est surjective ($\\text{rg}(f) = \\dim F$)\n3. $f$ est bijective (isomorphisme)"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Trouver une base du noyau et de l'image",
        "example": "Soit $f : \\mathbb{R}^3 \\to \\mathbb{R}^2$ définie par $f(x, y, z) = (x - y, y - z)$.",
        "steps": [
          "**Noyau** : $(x, y, z) \\in \\ker(f) \\iff \\begin{cases} x - y = 0 \\\\ y - z = 0 \\end{cases} \\iff x = y = z$. Donc $\\ker(f) = \\text{Vect}((1, 1, 1))$. $\\dim(\\ker f) = 1$.",
          "**Théorème du rang** : $\\dim(\\text{Im} f) = \\dim(\\mathbb{R}^3) - \\dim(\\ker f) = 3 - 1 = 2$.",
          "**Conclusion** : Comme $\\dim(\\text{Im} f) = 2 = \\dim(\\mathbb{R}^2)$, $f$ est surjective et $\\text{Im}(f) = \\mathbb{R}^2$."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans le théorème du rang, la dimension à gauche est celle de **l'espace de départ** $\\dim(E)$, et non celle de l'espace d'arrivée $\\dim(F)$ !",
      "⚠️ L'équivalence entre injectivité et surjectivité n'est vraie qu'en dimension finie lorsque $\\dim(E) = \\dim(F)$."
    ],
    "flashcards": [
      {
        "q": "Énoncer le Théorème du Rang pour $f \\in \\mathcal{L}(E, F)$ avec $\\dim(E) < +\\infty$.",
        "a": "$\\dim(E) = \\dim(\\ker f) + \\text{rg}(f)$."
      },
      {
        "q": "À quelle condition sur son noyau une application linéaire est-elle injective ?",
        "a": "$\\ker(f) = \\{0_E\\}$ (le noyau est réduit au vecteur nul)."
      }
    ]
  },
  "L1-REL": {
    "title": "L1-REL : Corps des nombres réels, propriété de la borne supérieure et topologie de R",
    "domain": "Analyse Réelle",
    "objectives": [
      "Définir la borne supérieure (sup) et la borne inférieure (inf) d'une partie non vide bornée de $\\mathbb{R}$.",
      "Énoncer l'axiome de la borne supérieure : toute partie non vide majorée de $\\mathbb{R}$ admet une borne supérieure dans $\\mathbb{R}$.",
      "Démontrer la densité de $\\mathbb{Q}$ et de $\\mathbb{R} \\setminus \\mathbb{Q}$ dans $\\mathbb{R}$.",
      "Utiliser la propriété d'Archimède : pour tout $x \\in \\mathbb{R}$, il existe $n \\in \\mathbb{N}$ tel que $n > x$."
    ],
    "keyPoints": [
      {
        "title": "1. Caractérisation de la borne supérieure",
        "content": "Soit $A$ une partie non vide et majorée de $\\mathbb{R}$. Un réel $M$ est la **borne supérieure** de $A$, noté $M = \\sup(A)$, ssi :\n1. $M$ est un majorant de $A$ : $\\forall x \\in A, x \\le M$.\n2. $M$ est le plus petit des majorants :\n$$\\forall \\varepsilon > 0, \\quad \\exists x \\in A, \\quad M - \\varepsilon < x \\le M$$"
      },
      {
        "title": "2. Densité de $\\mathbb{Q}$ dans $\\mathbb{R}$",
        "content": "• **Théorème de densité** : Entre deux réels distincts quelconques $a < b$, il existe une infinité de rationnels et une infinité d'irrationnels :\n$$\\forall a, b \\in \\mathbb{R} \\text{ avec } a < b, \\quad \\exists q \\in \\mathbb{Q}, \\quad a < q < b$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Déterminer la borne supérieure d'un ensemble de réels",
        "example": "Déterminer la borne supérieure et la borne inférieure de $A = \\left\\{ 1 - \\frac{1}{n} \\;\\middle|\\; n \\in \\mathbb{N}^* \\right\\}$.",
        "steps": [
          "**Majorant** : Pour tout $n \\ge 1$, $\\frac{1}{n} > 0 \\implies 1 - \\frac{1}{n} < 1$. Donc 1 est un majorant de $A$.",
          "**Caractérisation en $\\varepsilon$** : Soit $\\varepsilon > 0$. Par la propriété d'Archimède, il existe $n \\in \\mathbb{N}^*$ tel que $n > \\frac{1}{\\varepsilon} \\iff \\frac{1}{n} < \\varepsilon$.",
          "Alors $1 - \\frac{1}{n} > 1 - \\varepsilon$. Donc $1 = \\sup(A)$ (cette borne n'est pas un maximum car $1 \\notin A$).",
          "**Borne inférieure** : Pour $n = 1$, $1 - 1 = 0 \\in A$. Comme $1 - \\frac{1}{n} \\ge 0$ pour tout $n$, $\\inf(A) = \\min(A) = 0$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne pas confondre borne supérieure (qui n'appartient pas nécessairement à l'ensemble) et maximum (qui doit appartenir à l'ensemble).",
      "⚠️ L'axiome de la borne supérieure est faux dans $\\mathbb{Q}$ (ex: $A = \\{q \\in \\mathbb{Q} \\mid q^2 < 2\\}$ est majoré dans $\\mathbb{Q}$ mais n'a pas de borne supérieure dans $\\mathbb{Q}$ car $\\sqrt{2} \\notin \\mathbb{Q}$)."
    ],
    "flashcards": [
      {
        "q": "Énoncer la caractérisation de la borne supérieure $M = \\sup(A)$ avec $\\varepsilon$.",
        "a": "$M$ majore $A$ et $\\forall \\varepsilon > 0, \\exists x \\in A, x > M - \\varepsilon$."
      },
      {
        "q": "Quelle est la différence entre $\\sup(A)$ et $\\max(A)$ ?",
        "a": "$\\max(A)$ est un élément de $A$ (il est atteint), tandis que $\\sup(A)$ peut ne pas appartenir à $A$."
      }
    ]
  },
  "L1-SUI": {
    "title": "L1-SUI : Suites réelles : limites (ε-N), suites de Cauchy et Bolzano-Weierstrass",
    "domain": "Analyse Réelle",
    "objectives": [
      "Maîtriser la définition formelle en $\\varepsilon-N$ de la limite d'une suite : $\\forall \\varepsilon > 0, \\exists N \\in \\mathbb{N}, \\forall n \\ge N, |u_n - \\ell| < \\varepsilon$.",
      "Connaître le Théorème de Bolzano-Weierstrass : de toute suite réelle bornée, on peut extraire une sous-suite convergente.",
      "Définir une suite de Cauchy et exploiter la complétude de $\\mathbb{R}$ (toute suite de Cauchy de réels converge).",
      "Utiliser le théorème des suites adjacentes."
    ],
    "keyPoints": [
      {
        "title": "1. Définition rigoureuse de la convergence",
        "content": "• Une suite $(u_n)$ converge vers $\\ell \\in \\mathbb{R}$ si :\n$$\\forall \\varepsilon > 0, \\quad \\exists N \\in \\mathbb{N}, \\quad \\forall n \\ge N, \\quad |u_n - \\ell| < \\varepsilon$$\n• **Théorème de convergence monotone** : Toute suite croissante et majorée converge dans $\\mathbb{R}$ vers $\\sup\\{u_n \\mid n \\in \\mathbb{N}\\}$."
      },
      {
        "title": "2. Bolzano-Weierstrass et Suites de Cauchy",
        "content": "• **Théorème de Bolzano-Weierstrass** : Toute suite réelle **bornée** admet au moins une sous-suite (suite extraite) convergente.\n• **Suite de Cauchy** : Une suite $(u_n)$ est dite de Cauchy si :\n$$\\forall \\varepsilon > 0, \\quad \\exists N \\in \\mathbb{N}, \\quad \\forall p, q \\ge N, \\quad |u_p - u_q| < \\varepsilon$$\n• **Complétude de $\\mathbb{R}$** : Dans $\\mathbb{R}$, une suite converge si et seulement si elle est de Cauchy."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Démontrer la convergence avec la définition en $\\varepsilon-N$",
        "example": "Démontrer en revenant à la définition que $\\lim_{n \\to +\\infty} \\frac{2n + 1}{n + 3} = 2$.",
        "steps": [
          "**Étape 1 (Écart)** : Calculer $|u_n - 2| = \\left|\\frac{2n + 1}{n + 3} - 2\\right| = \\left|\\frac{2n + 1 - 2n - 6}{n + 3}\\right| = \\frac{5}{n + 3}$.",
          "**Étape 2 (Recherche du rang N)** : On veut $\\frac{5}{n + 3} < \\varepsilon \\iff n + 3 > \\frac{5}{\\varepsilon} \\iff n > \\frac{5}{\\varepsilon} - 3$.",
          "**Étape 3 (Rédaction)** : Soit $\\varepsilon > 0$. Posons $N = \\max\\left(0, \\left\\lfloor \\frac{5}{\\varepsilon} - 3 \\right\\rfloor + 1\\right)$. Pour tout $n \\ge N$, on a $|u_n - 2| < \\varepsilon$.",
          "**Conclusion** : La suite converge vers 2."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans $\\mathbb{Q}$, une suite de Cauchy ne converge pas forcément dans $\\mathbb{Q}$ (c'est précisément pour cela qu'on a construit $\\mathbb{R}$ !).",
      "⚠️ $u_{n+1} - u_n \\to 0$ n'implique PAS que $(u_n)$ converge ! Contre-exemple célèbre : la série harmonique $H_n = \\sum_{k=1}^n \\frac{1}{k} \\to +\\infty$ alors que $H_{n+1} - H_n = \\frac{1}{n+1} \\to 0$."
    ],
    "flashcards": [
      {
        "q": "Énoncer le Théorème de Bolzano-Weierstrass pour les suites réelles.",
        "a": "De toute suite réelle bornée, on peut extraire une sous-suite convergente."
      },
      {
        "q": "La condition $u_{n+1} - u_n \\to 0$ suffit-elle à assurer la convergence d'une suite ?",
        "a": "Non (contre-exemple : $u_n = \\ln(n)$ ou la suite harmonique)."
      }
    ]
  },
  "L1-TAY": {
    "title": "L1-TAY : Formules de Taylor, développements limités et étude locale",
    "domain": "Analyse Réelle",
    "objectives": [
      "Connaître les formules de Taylor-Young et Taylor-Lagrange à l'ordre $n$.",
      "Maîtriser par cœur les développements limités usuels en 0 : $e^x, \\sin x, \\cos x, \\ln(1+x), (1+x)^\\alpha, \\frac{1}{1-x}$.",
      "Effectuer les opérations sur les DL : somme, produit, quotient, composition.",
      "Calculer des limites indéterminées et déterminer des équivalents asymptotiques."
    ],
    "keyPoints": [
      {
        "title": "1. Développements limités usuels en 0 (Ordre $n$)",
        "content": "• $e^x = 1 + x + \\frac{x^2}{2!} + \\dots + \\frac{x^n}{n!} + o(x^n)$\n• $\\cos(x) = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\dots + (-1)^p \\frac{x^{2p}}{(2p)!} + o(x^{2p+1})$\n• $\\sin(x) = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots + (-1)^p \\frac{x^{2p+1}}{(2p+1)!} + o(x^{2p+2})$\n• $\\ln(1 + x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\dots + (-1)^{n-1} \\frac{x^n}{n} + o(x^n)$\n• $\\frac{1}{1 - x} = 1 + x + x^2 + \\dots + x^n + o(x^n)$\n• $(1 + x)^\\alpha = 1 + \\alpha x + \\frac{\\alpha(\\alpha - 1)}{2} x^2 + o(x^2)$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Lever une forme indéterminée avec les DL",
        "example": "Calculer la limite $\\lim_{x \\to 0} \\frac{\\sin(x) - x}{x^3}$.",
        "steps": [
          "**Étape 1 (Ordre nécessaire)** : Le dénominateur est en $x^3$, donc il faut développer le numérateur à l'ordre 3.",
          "**Étape 2 (DL du numérateur)** : $\\sin(x) = x - \\frac{x^3}{6} + o(x^3)$. Alors $\\sin(x) - x = -\\frac{x^3}{6} + o(x^3)$.",
          "**Étape 3 (Quotient)** : $\\frac{\\sin(x) - x}{x^3} = \\frac{-\\frac{x^3}{6} + o(x^3)}{x^3} = -\\frac{1}{6} + o(1)$.",
          "**Conclusion** : $\\lim_{x \\to 0} \\frac{\\sin(x) - x}{x^3} = -\\frac{1}{6}$."
        ]
      }
    ],
    "traps": [
      "⚠️ On n'additionne pas des équivalents ! Si $f \\sim g$ et $u \\sim v$, $f - u$ n'est PAS équivalent à $g - v$. Il faut obligatoirement utiliser les développements limités.",
      "⚠️ Ne jamais oublier le terme d'erreur $o(x^n)$ dans les étapes intermédiaires."
    ],
    "flashcards": [
      {
        "q": "Quel est le DL de $\\cos(x)$ en 0 à l'ordre 4 ?",
        "a": "$\\cos(x) = 1 - \\frac{x^2}{2} + \\frac{x^4}{24} + o(x^4)$."
      },
      {
        "q": "Peut-on sommer des équivalents ?",
        "a": "Non, jamais ! Il faut utiliser des développements limités."
      }
    ]
  },
  "L1-INT": {
    "title": "L1-INT : Intégrale de Riemann sur un segment et techniques de primitivation",
    "domain": "Calcul Intégral",
    "objectives": [
      "Construire l'intégrale de Riemann sur $[a, b]$ via les sommes de Darboux ou les fonctions en escalier.",
      "Reconnaître et calculer des limites de sommes de Riemann : $\\lim_{n \\to \\infty} \\frac{b-a}{n} \\sum_{k=1}^n f\\left(a + k\\frac{b-a}{n}\\right) = \\int_a^b f(t) dt$.",
      "Maîtriser les changements de variable réguliers dans une intégrale définie.",
      "Primitiver des fractions rationnelles par décomposition en éléments simples."
    ],
    "keyPoints": [
      {
        "title": "1. Sommes de Riemann",
        "content": "Soit $f$ une fonction continue sur $[a ; b]$. En subdivisant $[a ; b]$ en $n$ sous-intervalles de même longueur $\\frac{b-a}{n}$ :\n$$\\lim_{n \\to +\\infty} \\frac{b - a}{n} \\sum_{k=1}^n f\\left(a + k \\frac{b - a}{n}\\right) = \\int_a^b f(x) dx$$\nCas usuel sur $[0 ; 1]$ : $\\lim_{n \\to +\\infty} \\frac{1}{n} \\sum_{k=1}^n f\\left(\\frac{k}{n}\\right) = \\int_0^1 f(x) dx$."
      },
      {
        "title": "2. Changement de variable",
        "content": "Soit $\\varphi : [\\alpha ; \\beta] \\to [a ; b]$ une bijection de classe $\\mathcal{C}^1$ telle que $\\varphi(\\alpha) = a$ et $\\varphi(\\beta) = b$. Alors pour toute fonction continue $f$ :\n$$\\int_a^b f(x) dx = \\int_\\alpha^\\beta f(\\varphi(t)) \\varphi'(t) dt$$\n*Règle différentielle* : $x = \\varphi(t) \\implies dx = \\varphi'(t) dt$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Calculer une limite de somme avec Riemann",
        "example": "Calculer la limite quand $n \\to +\\infty$ de $S_n = \\sum_{k=1}^n \\frac{n}{n^2 + k^2}$.",
        "steps": [
          "**Étape 1 (Factorisation par $n$)** : $\\frac{n}{n^2 + k^2} = \\frac{n}{n^2(1 + (k/n)^2)} = \\frac{1}{n} \\times \\frac{1}{1 + (k/n)^2}$.",
          "**Étape 2 (Reconnaissance de la fonction)** : $S_n = \\frac{1}{n} \\sum_{k=1}^n f\\left(\\frac{k}{n}\\right)$ avec $f(x) = \\frac{1}{1 + x^2}$ sur $[0 ; 1]$.",
          "**Étape 3 (Intégration)** : $\\lim_{n \\to +\\infty} S_n = \\int_0^1 \\frac{1}{1 + x^2} dx = [\\arctan(x)]_0^1 = \\arctan(1) - \\arctan(0) = \\frac{\\pi}{4}$."
        ]
      }
    ],
    "traps": [
      "⚠️ Dans un changement de variable, ne JAMAIS oublier de remplacer les bornes et de remplacer $dx$ par $\\varphi'(t)dt$ !",
      "⚠️ Pour décomposer une fraction rationnelle $\\frac{P}{Q}$, si $\\deg(P) \\ge \\deg(Q)$, effectuer d'abord la division euclidienne polynomiale pour extraire la partie entière."
    ],
    "flashcards": [
      {
        "q": "Que vaut $\\lim_{n \\to +\\infty} \\frac{1}{n} \\sum_{k=1}^n \\left(\\frac{k}{n}\\right)^2$ ?",
        "a": "$\\int_0^1 x^2 dx = \\left[\\frac{x^3}{3}\\right]_0^1 = \\frac{1}{3}$."
      },
      {
        "q": "Quelle est la dérivée de $\\arctan(x)$ ?",
        "a": "$\\frac{1}{1 + x^2}$."
      }
    ]
  },
  "L1-CMP": {
    "title": "L1-CMP : Nombres complexes, géométrie et racines n-ièmes de l'unité",
    "domain": "Algèbre Fondamentale",
    "objectives": [
      "Maîtriser le corps $\\mathbb{C}$, la conjugaison, le module et la forme exponentielle $r e^{i\\theta}$.",
      "Déterminer les $n$ racines $n$-ièmes d'un nombre complexe et les racines $n$-ièmes de l'unité $\\mathbb{U}_n = \\{e^{2ik\\pi/n}, k \\in \\{0, \\dots, n-1\\}\\}$.",
      "Factoriser des polynômes dans $\\mathbb{C}[X]$ et $\\mathbb{R}[X]$ (Théorème de d'Alembert-Gauss)."
    ],
    "keyPoints": [
      {
        "title": "1. Racines n-ièmes de l'unité",
        "content": "Pour $n \\ge 1$, l'équation $z^n = 1$ admet exactement $n$ solutions distinctes dans $\\mathbb{C}$ :\n$$\\mathbb{U}_n = \\left\\{ \\omega_k = e^{\\frac{2ik\\pi}{n}}, \\quad k \\in \\{0, 1, \\dots, n-1\\} \\right\\}$$\n• Forme un groupe cyclique multiplicatif d'ordre $n$, engendré par $\\omega_1 = e^{2i\\pi/n}$.\n• Somme des racines $n$-ièmes : pour $n \\ge 2$, $\\sum_{k=0}^{n-1} e^{\\frac{2ik\\pi}{n}} = 0$."
      },
      {
        "title": "2. Théorème fondamental de l'algèbre (d'Alembert-Gauss)",
        "content": "Tout polynôme non constant $P \\in \\mathbb{C}[X]$ est scindé sur $\\mathbb{C}$ : il admet au moins une racine dans $\\mathbb{C}$, et se factorise en produit de facteurs de degré 1 :\n$$P(X) = a_n \\prod_{j=1}^n (X - z_j)$$\nSur $\\mathbb{R}[X]$, les polynômes irréductibles sont les polynômes de degré 1 et les polynômes de degré 2 de discriminant $\\Delta < 0$."
      }
    ],
    "methods": [
      {
        "title": "Méthode : Résoudre $z^n = Z_0$ sous forme trigonométrique",
        "example": "Déterminer les racines cubiques de $Z_0 = 8i$.",
        "steps": [
          "**Étape 1 (Forme exponentielle de $Z_0$)** : $8i = 8 e^{i\\pi/2}$.",
          "**Étape 2 (Poser $z = r e^{i\\theta}$)** : $z^3 = r^3 e^{3i\\theta} = 8 e^{i\\pi/2}$.",
          "**Étape 3 (Module et arguments)** : $r^3 = 8 \\implies r = 2$. $3\\theta = \\frac{\\pi}{2} + 2k\\pi \\implies \\theta_k = \\frac{\\pi}{6} + \\frac{2k\\pi}{3}$ pour $k \\in \\{0, 1, 2\\}$.",
          "**Conclusion** : $z_0 = 2 e^{i\\pi/6} = \\sqrt{3} + i$, $z_1 = 2 e^{i5\\pi/6} = -\\sqrt{3} + i$, $z_2 = 2 e^{i3\\pi/2} = -2i$."
        ]
      }
    ],
    "traps": [
      "⚠️ Ne jamais écrire $\\sqrt[n]{z}$ avec $z \\in \\mathbb{C}$ non réel : la notation racine n'est définie sans ambiguïté que sur $\\mathbb{R}_+$ !"
    ],
    "flashcards": [
      {
        "q": "Que vaut la somme des racines $n$-ièmes de l'unité pour $n \\ge 2$ ?",
        "a": "$0$, car $\\sum_{k=0}^{n-1} \\omega^k = \\frac{1 - \\omega^n}{1 - \\omega} = 0$."
      },
      {
        "q": "Quels sont les polynômes irréductibles de $\\mathbb{R}[X]$ ?",
        "a": "Les polynômes de degré 1 et les polynômes de degré 2 à discriminant strictement négatif."
      }
    ]
  },
  "L1-CNT": {
    "title": "L1-CNT : Continuité, limites et dérivabilité des fonctions d'une variable réelle",
    "domain": "Analyse Réelle",
    "objectives": [
      "Maîtriser la définition formelle $(\\varepsilon, \\delta)$ de la limite et de la continuité en un point et sur un intervalle.",
      "Appliquer les grands théorèmes d'analyse globale : TVI, Théorème des bornes atteintes (Weierstrass), Théorème de la bijection.",
      "Énoncer et démontrer le Théorème de Rolle et le Théorème des Accroissements Finis (TAF)."
    ],
    "keyPoints": [
      {
        "title": "1. Définition en $\\varepsilon - \\delta$ et compacité de Weierstrass",
        "content": "• **Continuité en $x_0$** :\n$$\\forall \\varepsilon > 0, \\quad \\exists \\delta > 0, \\quad \\forall x \\in I, \\quad |x - x_0| < \\delta \\implies |f(x) - f(x_0)| < \\varepsilon$$\n• **Théorème de Weierstrass (Bornes atteintes)** : Toute fonction continue sur un segment $[a ; b]$ est **bornée** et **atteint ses bornes** (il existe $c, d \\in [a ; b]$ tels que $f(c) = \\min_{[a,b]} f$ et $f(d) = \\max_{[a,b]} f$)."
      },
      {
        "title": "2. Théorème de Rolle et Accroissements Finis (TAF)",
        "content": "• **Théorème de Rolle** : Si $f : [a ; b] \\to \\mathbb{R}$ est continue sur $[a ; b]$, dérivable sur $]a ; b[$, et vérifie $f(a) = f(b)$, alors il existe $c \\in ]a ; b[$ tel que $f'(c) = 0$.\n• **Théorème des Accroissements Finis (TAF)** : Sous les mêmes hypothèses de régularité, il existe $c \\in ]a ; b[$ tel que :\n$$f(b) - f(a) = f'(c)(b - a)$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Établir une inégalité par le TAF ou l'inégalité des accroissements finis (IAF)",
        "example": "Démontrer que pour tout $x > 0$, $\\frac{x}{1+x} < \\ln(1+x) < x$.",
        "steps": [
          "**Étape 1** : Soit $f(t) = \\ln(1+t)$ sur $[0 ; x]$. $f$ est continue sur $[0 ; x]$ et dérivable sur $]0 ; x[$ avec $f'(t) = \\frac{1}{1+t}$.",
          "**Étape 2 (TAF)** : Il existe $c \\in ]0 ; x[$ tel que $f(x) - f(0) = f'(c)(x - 0) \\iff \\ln(1+x) = \\frac{x}{1+c}$.",
          "**Étape 3 (Encadrement)** : Comme $0 < c < x$, on a $1 < 1+c < 1+x \\implies \\frac{1}{1+x} < \\frac{1}{1+c} < 1$.",
          "**Conclusion** : En multipliant par $x > 0$ : $\\frac{x}{1+x} < \\ln(1+x) < x$."
        ]
      }
    ],
    "traps": [
      "⚠️ Pour appliquer Rolle ou le TAF, la continuité est requise sur le **segment fermé** $[a ; b]$, mais la dérivabilité n'est requise que sur l'**ouvert** $]a ; b[$ !"
    ],
    "flashcards": [
      {
        "q": "Énoncer le Théorème des Accroissements Finis (TAF).",
        "a": "Si $f$ est continue sur $[a ; b]$ et dérivable sur $]a ; b[$, il existe $c \\in ]a ; b[$ tel que $f(b) - f(a) = f'(c)(b-a)$."
      },
      {
        "q": "Que garantit le théorème de Weierstrass pour une fonction continue sur un segment $[a ; b]$ ?",
        "a": "Elle est bornée et atteint ses bornes (son maximum et son minimum)."
      }
    ]
  },
  "L1-GEO": {
    "title": "L1-GEO : Courbes paramétrées, cinématique et géométrie analytique",
    "domain": "Géométrie et Applications",
    "objectives": [
      "Étudier une courbe plane paramétrée $t \\mapsto (x(t), y(t))$ (symétries, domaine d'étude, tableau conjoint de variations).",
      "Déterminer les branches infinies, asymptotes et tangentes (points réguliers et points stationnaires).",
      "Calculer la longueur d'un arc de courbe et interpréter la vitesse et l'accélération en cinématique."
    ],
    "keyPoints": [
      {
        "title": "1. Points réguliers, vecteur vitesse et tangentes",
        "content": "Soit $\\gamma(t) = (x(t), y(t))$ une courbe paramétrée de classe $\\mathcal{C}^1$ :\n• **Vecteur vitesse** : $\\vec{v}(t) = \\gamma'(t) = (x'(t) ; y'(t))$.\n• Un point est **régulier** si $\\vec{v}(t) \\neq \\vec{0}$. La tangente à la courbe est alors dirigée par $\\vec{v}(t)$ et a pour pente $m = \\frac{y'(t)}{x'(t)}$ si $x'(t) \\neq 0$.\n• Si $\\vec{v}(t) = \\vec{0}$, le point est dit **stationnaire** (ou singulier). Son étude nécessite les dérivées d'ordre supérieur (rebroussement, inflexion)."
      },
      {
        "title": "2. Longueur d'un arc de courbe",
        "content": "La longueur d'un arc paramétré régulier pour $t \\in [a ; b]$ est donnée par l'intégrale de la norme du vecteur vitesse :\n$$L = \\int_a^b \\|\\gamma'(t)\\| dt = \\int_a^b \\sqrt{x'(t)^2 + y'(t)^2} dt$$"
      }
    ],
    "methods": [
      {
        "title": "Méthode : Réduire le domaine d'étude par les symétries",
        "example": "Soit la courbe paramétrée $x(t) = \\cos^3(t)$ et $y(t) = \\sin^3(t)$ (Astroïde).",
        "steps": [
          "**Étape 1 (Périodicité)** : $x$ et $y$ sont $2\\pi$-périodiques, on restreint à $[-\\pi ; \\pi]$.",
          "**Étape 2 (Parité)** : $x(-t) = x(t)$ et $y(-t) = -y(t)$ : symétrie axiale par rapport à l'axe $(Ox)$, on restreint à $[0 ; \\pi]$.",
          "**Étape 3 (Supplément)** : $x(\\pi - t) = -x(t)$ et $y(\\pi - t) = y(t)$ : symétrie par rapport à $(Oy)$, on restreint à $[0 ; \\pi/2]$.",
          "**Conclusion** : Il suffit d'étudier la courbe sur $[0 ; \\pi/2]$ et d'appliquer 4 symétries."
        ]
      }
    ],
    "traps": [
      "⚠️ Lorsque $x'(t_0) = 0$ et $y'(t_0) \\neq 0$, la tangente n'est pas inexistante : elle est **verticale** !"
    ],
    "flashcards": [
      {
        "q": "Comment définit-on un point stationnaire pour une courbe paramétrée $\\gamma(t)$ ?",
        "a": "C'est un point où le vecteur vitesse s'annule : $\\gamma'(t) = \\vec{0}$."
      },
      {
        "q": "Quelle est la formule de la longueur d'arc pour une courbe paramétrée de classe $\\mathcal{C}^1$ ?",
        "a": "$L = \\int_a^b \\sqrt{x'(t)^2 + y'(t)^2} dt$."
      }
    ]
  }
};

window.MATHS_EXERCISES_L1 = {
  "L1-LOG": [
    {
      "id": "L1-LOG-1",
      "tier": 1,
      "type": "mcq",
      "title": "Négation d'une assertion quantifiée",
      "skill": "Manipuler les quantificateurs logiques",
      "statement": "Quelle est la négation logique exacte de l'assertion : « $\\forall x \\in \\mathbb{R}, \\exists y \\in \\mathbb{R}, x + y > 0$ » ?",
      "options": [
        "$\\exists x \\in \\mathbb{R}, \\forall y \\in \\mathbb{R}, x + y \\le 0$",
        "$\\forall x \\in \\mathbb{R}, \\forall y \\in \\mathbb{R}, x + y \\le 0$",
        "$\\exists x \\in \\mathbb{R}, \\exists y \\in \\mathbb{R}, x + y \\le 0$",
        "$\\exists y \\in \\mathbb{R}, \\forall x \\in \\mathbb{R}, x + y \\le 0$"
      ],
      "correctIndex": 0,
      "answer": "$\\exists x \\in \\mathbb{R}, \\forall y \\in \\mathbb{R}, x + y \\le 0$",
      "hint1": "La négation échange $\\forall$ et $\\exists$ et inverse l'inégalité stricte en inégalité large.",
      "hint2": "$\\neg(\\forall x, P(x)) \\iff \\exists x, \\neg P(x)$.",
      "solution": "La négation de $\\forall x, \\exists y, P(x, y)$ est $\\exists x, \\forall y, \\neg P(x, y)$, soit ici $\\exists x \\in \\mathbb{R}, \\forall y \\in \\mathbb{R}, x + y \\le 0$."
    }
  ],
  "L1-MAT": [
    {
      "id": "L1-MAT-1",
      "tier": 1,
      "type": "mcq",
      "title": "Déterminant et inversibilité",
      "skill": "Calculer le déterminant d'une matrice $2 \\times 2$",
      "statement": "Pour quelle valeur du réel $\\lambda$ la matrice $A = \\begin{pmatrix} \\lambda & 3 \\\\ 2 & 6 \\end{pmatrix}$ n'est-elle pas inversible ?",
      "options": [
        "$\\lambda = 1$",
        "$\\lambda = 0$",
        "$\\lambda = 4$",
        "$\\lambda = -1$"
      ],
      "correctIndex": 0,
      "answer": "$\\lambda = 1$",
      "hint1": "Une matrice carrée n'est pas inversible si et seulement si son déterminant est nul.",
      "hint2": "$\\det(A) = 6\\lambda - 6 = 0 \\iff \\lambda = 1$.",
      "solution": "$\\det(A) = \\lambda \\times 6 - 3 \\times 2 = 6\\lambda - 6$. $A$ est non inversible $\\iff \\det(A) = 0 \\iff 6\\lambda = 6 \\iff \\lambda = 1$."
    }
  ],
  "L1-CMP": [
    {
      "id": "L1-CMP-1",
      "tier": 1,
      "type": "mcq",
      "title": "Racines n-ièmes de l'unité",
      "skill": "Identifier les éléments de $\\mathbb{U}_n$",
      "statement": "Combien l'équation $z^5 = 1$ admet-elle de solutions distinctes dans $\\mathbb{C}$ ?",
      "options": [
        "$5$",
        "$1$",
        "$4$",
        "Une infinité"
      ],
      "correctIndex": 0,
      "answer": "$5$",
      "hint1": "C'est l'ensemble $\\mathbb{U}_5$ des racines 5-ièmes de l'unité.",
      "hint2": "Les solutions sont de la forme $e^{2ik\\pi/5}$ pour $k \\in \\{0, 1, 2, 3, 4\\}$.",
      "solution": "Dans $\\mathbb{C}$, tout polynôme de degré $n$ à racines simples admet $n$ racines. $z^5 = 1$ admet exactement 5 solutions distinctes réparties régulièrement sur le cercle unité."
    }
  ],
  "L1-EV1": [
    {
      "id": "L1-EV1-1",
      "tier": 1,
      "type": "mcq",
      "title": "Sous-espace vectoriel",
      "skill": "Caractériser un sous-espace vectoriel",
      "statement": "Lequel des sous-ensembles suivants de $\\mathbb{R}^2$ est un sous-espace vectoriel ?",
      "options": [
        "$F = \\{(x, y) \\in \\mathbb{R}^2 \\mid 2x - 3y = 0\\}$",
        "$G = \\{(x, y) \\in \\mathbb{R}^2 \\mid x + y = 1\\}$",
        "$H = \\{(x, y) \\in \\mathbb{R}^2 \\mid xy = 0\\}$",
        "$K = \\{(x, y) \\in \\mathbb{R}^2 \\mid x^2 + y^2 \\le 1\\}$"
      ],
      "correctIndex": 0,
      "answer": "$F = \\{(x, y) \\in \\mathbb{R}^2 \\mid 2x - 3y = 0\\}$",
      "hint1": "Un sous-espace vectoriel doit contenir le vecteur nul $(0,0)$ et être stable par combinaison linéaire.",
      "hint2": "Une droite vectorielle passant par l'origine est définie par une équation linéaire homogène.",
      "solution": "$F$ contient $(0,0)$ et est le noyau d'une forme linéaire non nulle, c'est donc une droite vectorielle (sev de dimension 1)."
    }
  ],
  "L1-APP": [
    {
      "id": "L1-APP-1",
      "tier": 1,
      "type": "mcq",
      "title": "Théorème du rang",
      "skill": "Appliquer la relation $\\dim(E) = \\dim(\\ker f) + \\text{rg}(f)$",
      "statement": "Soit $f : \\mathbb{R}^5 \\to \\mathbb{R}^3$ une application linéaire telle que $\\dim(\\ker f) = 2$. Quel est le rang de $f$ ?",
      "options": [
        "$3$",
        "$2$",
        "$5$",
        "$1$"
      ],
      "correctIndex": 0,
      "answer": "$3$",
      "hint1": "Théorème du rang : $\\dim(E) = \\dim(\\ker f) + \\text{rg}(f)$.",
      "hint2": "Ici $\\dim(E) = 5$ et $\\dim(\\ker f) = 2$, d'où $\\text{rg}(f) = 5 - 2$.",
      "solution": "Par le théorème du rang, $\\dim(E) = \\dim(\\ker f) + \\text{rg}(f) \\implies 5 = 2 + \\text{rg}(f) \\implies \\text{rg}(f) = 3$ (donc $f$ est surjective)."
    }
  ],
  "L1-REL": [
    {
      "id": "L1-REL-1",
      "tier": 1,
      "type": "mcq",
      "title": "Borne supérieure",
      "skill": "Déterminer $\\sup(A)$",
      "statement": "Que vaut la borne supérieure de l'ensemble $A = \\left\\{ 1 - \\frac{1}{n} \\;\\middle|\\; n \\in \\mathbb{N}^* \\right\\}$ dans $\\mathbb{R}$ ?",
      "options": [
        "$\\sup(A) = 1$",
        "$\\sup(A) = 0$",
        "$A$ n'admet pas de borne supérieure",
        "$\\sup(A) = 2$"
      ],
      "correctIndex": 0,
      "answer": "$\\sup(A) = 1$",
      "hint1": "Pour tout $n \\ge 1$, $1 - 1/n < 1$. 1 est un majorant.",
      "hint2": "Quand $n \\to +\\infty$, $1 - 1/n \\to 1$. C'est donc le plus petit des majorants.",
      "solution": "1 est un majorant de $A$, et c'est la limite d'une suite d'éléments de $A$. Par la caractérisation de la borne supérieure, $\\sup(A) = 1$ (bien que $1 \\notin A$)."
    }
  ],
  "L1-SUI": [
    {
      "id": "L1-SUI-1",
      "tier": 1,
      "type": "mcq",
      "title": "Suite de Cauchy et complétude",
      "skill": "Comprendre la complétude de $\\mathbb{R}$",
      "statement": "Dans le corps des nombres réels $\\mathbb{R}$, toute suite de Cauchy est :",
      "options": [
        "Convergente dans $\\mathbb{R}$ (complétude)",
        "Nécessairement constante à partir d'un certain rang",
        "Divergente vers $+\\infty$",
        "Non bornée"
      ],
      "correctIndex": 0,
      "answer": "Convergente dans $\\mathbb{R}$ (complétude)",
      "hint1": "$\\mathbb{R}$ est un espace métrique complet.",
      "hint2": "Dans un espace complet, suite de Cauchy équivaut à suite convergente.",
      "solution": "Par définition de la complétude du corps des réels, toute suite de Cauchy d'éléments de $\\mathbb{R}$ converge vers une limite réelle dans $\\mathbb{R}$."
    }
  ],
  "L1-CNT": [
    {
      "id": "L1-CNT-1",
      "tier": 1,
      "type": "mcq",
      "title": "Théorème de Rolle",
      "skill": "Identifier les hypothèses du théorème de Rolle",
      "statement": "Quelles sont les hypothèses exactes pour appliquer le théorème de Rolle à une fonction $f$ sur $[a ; b]$ ?",
      "options": [
        "$f$ continue sur $[a ; b]$, dérivable sur $]a ; b[$ et $f(a) = f(b)$",
        "$f$ dérivable sur $[a ; b]$ et $f(a) = 0$",
        "$f$ continue sur $]a ; b[$ et strictement croissante",
        "$f$ deux fois dérivable sur $[a ; b]$"
      ],
      "correctIndex": 0,
      "answer": "$f$ continue sur $[a ; b]$, dérivable sur $]a ; b[$ et $f(a) = f(b)$",
      "hint1": "La continuité est sur le fermé, la dérivabilité sur l'ouvert, avec égalité aux bornes.",
      "hint2": "Rolle affirme alors qu'il existe $c \\in ]a ; b[$ avec $f'(c) = 0$.",
      "solution": "Le théorème de Rolle stipule que si $f$ est continue sur $[a ; b]$, dérivable sur $]a ; b[$ et vérifie $f(a) = f(b)$, alors $\\exists c \\in ]a ; b[, f'(c) = 0$."
    }
  ],
  "L1-TAY": [
    {
      "id": "L1-TAY-1",
      "tier": 1,
      "type": "mcq",
      "title": "Développement limité usuel",
      "skill": "Connaître le DL de $\\ln(1+x)$ en 0",
      "statement": "Quel est le développement limité à l'ordre 3 en 0 de $\\ln(1+x)$ ?",
      "options": [
        "$x - \\frac{x^2}{2} + \\frac{x^3}{3} + o(x^3)$",
        "$x + \\frac{x^2}{2} + \\frac{x^3}{3} + o(x^3)$",
        "$1 + x - \\frac{x^2}{2} + \\frac{x^3}{6} + o(x^3)$",
        "$x - \\frac{x^3}{6} + o(x^3)$"
      ],
      "correctIndex": 0,
      "answer": "$x - \\frac{x^2}{2} + \\frac{x^3}{3} + o(x^3)$",
      "hint1": "Les signes alternent : $+ - + - \\dots$, et les dénominateurs sont $1, 2, 3$ (sans factorielle).",
      "hint2": "$\\ln(1+x) = \\sum_{k=1}^n (-1)^{k-1} \\frac{x^k}{k} + o(x^n)$.",
      "solution": "Le DL usuel en 0 est $\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} + o(x^3)$."
    }
  ],
  "L1-INT": [
    {
      "id": "L1-INT-1",
      "tier": 1,
      "type": "mcq",
      "title": "Somme de Riemann",
      "skill": "Reconnaître la limite d'une somme de Riemann",
      "statement": "Quelle est la limite quand $n \\to +\\infty$ de $S_n = \\frac{1}{n} \\sum_{k=1}^n \\left(\\frac{k}{n}\\right)^2$ ?",
      "options": [
        "$\\frac{1}{3}$",
        "$\\frac{1}{2}$",
        "$1$",
        "$0$"
      ],
      "correctIndex": 0,
      "answer": "$\\frac{1}{3}$",
      "hint1": "C'est la somme de Riemann de $f(x) = x^2$ sur $[0 ; 1]$.",
      "hint2": "$\\lim S_n = \\int_0^1 x^2 dx = \\left[ \\frac{x^3}{3} \\right]_0^1$.",
      "solution": "Par le théorème des sommes de Riemann, $\\lim_{n \\to +\\infty} S_n = \\int_0^1 x^2 dx = \\left[\\frac{x^3}{3}\\right]_0^1 = \\frac{1}{3}$."
    }
  ],
  "L1-GEO": [
    {
      "id": "L1-GEO-1",
      "tier": 1,
      "type": "mcq",
      "title": "Vecteur vitesse d'une courbe paramétrée",
      "skill": "Calculer le vecteur vitesse $\\gamma'(t)$",
      "statement": "Pour $\\gamma(t) = (t^2 - 1 ; 2t^3)$, quel est le vecteur tangent en $t = 1$ ?",
      "options": [
        "$(2 ; 6)$",
        "$(0 ; 2)$",
        "$(1 ; 6)$",
        "$(2 ; 3)$"
      ],
      "correctIndex": 0,
      "answer": "$(2 ; 6)$",
      "hint1": "$\\gamma'(t) = (x'(t) ; y'(t)) = (2t ; 6t^2)$.",
      "hint2": "Évalue en $t = 1$.",
      "solution": "$x'(t) = 2t$ et $y'(t) = 6t^2$. En $t = 1$, le vecteur tangent est $\\gamma'(1) = (2 ; 6)$."
    }
  ]
};

window.MATHS_WORKSHEETS_L1 = {
  "L1-MAT": [
    {
      "title": "Feuille de TD L1 : Systèmes linéaires et Pivot de Gauss",
      "filename": "TD_L1_Pivot_Gauss.md",
      "statement": `## Travaux Dirigés L1 : Systèmes Linéaires et Algorithme de Gauss

### Exercice 1 : Résolution par échelonnement (6 points)
Résoudre dans $\\mathbb{R}^3$ par la méthode du pivot de Gauss le système linéaire suivant :
$$\\begin{cases} x + 2y - z = 3 \\\\ 2x + 5y + z = 11 \\\\ -x + y + 4z = 2 \\end{cases}$$

### Exercice 2 : Inversion de matrice (4 points)
À l'aide de l'algorithme de Gauss-Jordan, inverser la matrice :
$$A = \\begin{pmatrix} 1 & 0 & 2 \\\\ 2 & -1 & 3 \\\\ 4 & 1 & 8 \\end{pmatrix}$$`,
      "solution": `### Correction Exercice 1
1. Matrice augmentée :
$\\begin{pmatrix} 1 & 2 & -1 & \\mid & 3 \\\\ 2 & 5 & 1 & \\mid & 11 \\\\ -1 & 1 & 4 & \\mid & 2 \\end{pmatrix}$
2. Élimination : $L_2 \\leftarrow L_2 - 2L_1$ et $L_3 \\leftarrow L_3 + L_1$ :
$\\begin{pmatrix} 1 & 2 & -1 & \\mid & 3 \\\\ 0 & 1 & 3 & \\mid & 5 \\\\ 0 & 3 & 3 & \\mid & 5 \\end{pmatrix}$
3. Élimination : $L_3 \\leftarrow L_3 - 3L_2$ :
$\\begin{pmatrix} 1 & 2 & -1 & \\mid & 3 \\\\ 0 & 1 & 3 & \\mid & 5 \\\\ 0 & 0 & -6 & \\mid & -10 \\end{pmatrix}$
4. Remontée : $-6z = -10 \\implies z = \\frac{5}{3}$.
$y + 3(5/3) = 5 \\implies y = 0$.
$x + 2(0) - 5/3 = 3 \\implies x = 3 + 5/3 = \\frac{14}{3}$.
Conclusion : $S = \\left\\{\\left(\\frac{14}{3} ; 0 ; \\frac{5}{3}\\right)\\right\\}$.`
    }
  ]
};

// Fusion automatique dans les registres globaux
if (!window.MATHS_COURSES) window.MATHS_COURSES = {};
if (!window.MATHS_EXERCISES) window.MATHS_EXERCISES = {};
if (!window.MATHS_WORKSHEETS) window.MATHS_WORKSHEETS = {};

Object.assign(window.MATHS_COURSES, window.MATHS_COURSES_L1);
Object.assign(window.MATHS_EXERCISES, window.MATHS_EXERCISES_L1);
Object.assign(window.MATHS_WORKSHEETS, window.MATHS_WORKSHEETS_L1);

