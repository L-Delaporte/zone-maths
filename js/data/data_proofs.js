/**
 * DATA_PROOFS - Modules et banques d'entraînement dédiés aux Démonstrations Formelles
 * Niveaux Licence 1 (L1-PRF), Licence 2 (L2-PRF) et Licence 3 (L3-PRF)
 * Démonstrations de référence, architecture logique et entraînements progressifs par paliers.
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. COURS FORMELS DE DÉMONSTRATIONS : L1, L2, L3
  // =========================================================================

  const PROOF_COURSES = {
    "L1-PRF": {
      "title": "L1-PRF : Démonstrations fondamentales de L1 (Analyse & Algèbre)",
      "level": "L1",
      "objectives": [
        "Rédiger une démonstration complète du théorème des valeurs intermédiaires par dichotomie, en justifiant chaque passage à la limite.",
        "Construire une extraction convergente (Bolzano-Weierstrass) en explicitant le choix des indices $\\varphi(k)$.",
        "Démontrer les théorèmes de Rolle et des accroissements finis à partir du théorème des bornes atteintes.",
        "Démontrer le théorème du rang à l'aide du théorème de la base incomplète.",
        "Repérer l'hypothèse utilisée à chaque étape d'une preuve et produire un contre-exemple lorsqu'elle manque."
      ],
      "keyPoints": [
        {
          "title": "1. Théorème des valeurs intermédiaires (TVI) par dichotomie",
          "content": "• **Énoncé** : soient $a < b$ deux réels et $f : [a ; b] \\to \\mathbb{R}$ une fonction **continue** telle que $f(a) f(b) < 0$. Alors il existe $c \\in ]a ; b[$ tel que $f(c) = 0$.\n\n• **Démonstration (dichotomie)** :\n1. **Réduction** : quitte à remplacer $f$ par $-f$ (continue, de mêmes zéros), on suppose $f(a) < 0 < f(b)$.\n2. **Construction** : on pose $a_0 = a$, $b_0 = b$. Si $a_n \\le b_n$ sont construits avec $f(a_n) \\le 0 \\le f(b_n)$, on note $m_n = \\frac{a_n + b_n}{2}$ ; si $f(m_n) \\le 0$, on pose $a_{n+1} = m_n$ et $b_{n+1} = b_n$, sinon $a_{n+1} = a_n$ et $b_{n+1} = m_n$. Par récurrence, pour tout $n$ : $f(a_n) \\le 0 \\le f(b_n)$, $a_n \\le a_{n+1} \\le b_{n+1} \\le b_n$ et $b_n - a_n = \\frac{b - a}{2^n}$.\n3. **Suites adjacentes** : $(a_n)$ est croissante, $(b_n)$ décroissante et $b_n - a_n \\to 0$ ; elles convergent vers une même limite $c \\in [a ; b]$.\n4. **Passage à la limite** : $f$ est continue en $c$, donc $f(a_n) \\to f(c)$ et $f(b_n) \\to f(c)$. Les inégalités **larges** passent à la limite : $f(c) \\le 0$ et $f(c) \\ge 0$, d'où $f(c) = 0$.\n5. **Localisation** : $f(a) < 0$ et $f(b) > 0$, donc $c \\ne a$ et $c \\ne b$, c'est-à-dire $c \\in ]a ; b[$.\n\n• **Corollaire** : l'image d'un intervalle par une fonction continue est un intervalle.\n• **Contre-exemple sans continuité** : $f = -1$ sur $[0 ; 1[$ et $f(1) = 1$ ; on a $f(0) f(1) < 0$ mais $f$ ne s'annule pas."
        },
        {
          "title": "2. Théorème de Bolzano-Weierstrass dans ℝ",
          "content": "• **Énoncé** : de toute suite réelle **bornée** $(u_n)$, on peut extraire une sous-suite $(u_{\\varphi(k)})$ convergente ($\\varphi : \\mathbb{N} \\to \\mathbb{N}$ strictement croissante).\n\n• **Démonstration (dichotomie)** :\n1. Soit $[a_0 ; b_0]$ un segment contenant tous les $u_n$. Pour un segment $S$, on note $A(S) = \\{n \\in \\mathbb{N} \\mid u_n \\in S\\}$ ; ici $A([a_0 ; b_0]) = \\mathbb{N}$ est infini.\n2. **Construction** : si $[a_k ; b_k]$ est construit avec $A([a_k ; b_k])$ infini, on note $m_k = \\frac{a_k + b_k}{2}$. On a $A([a_k ; b_k]) = A([a_k ; m_k]) \\cup A([m_k ; b_k])$, donc l'un de ces deux ensembles est infini : on appelle $[a_{k+1} ; b_{k+1}]$ le demi-segment correspondant (le gauche s'il convient).\n3. **Extraction** : on pose $\\varphi(0) = 0$ puis, $\\varphi(k)$ étant choisi, on prend pour $\\varphi(k+1)$ un élément de $A([a_{k+1} ; b_{k+1}])$ strictement supérieur à $\\varphi(k)$ ; il en existe, car cet ensemble est infini. Ainsi $\\varphi$ est strictement croissante et $a_k \\le u_{\\varphi(k)} \\le b_k$ pour tout $k$.\n4. **Convergence** : $(a_k)$ croît, $(b_k)$ décroît et $b_k - a_k = \\frac{b_0 - a_0}{2^k} \\to 0$ ; ces suites adjacentes ont une limite commune $\\ell$, et par encadrement $u_{\\varphi(k)} \\to \\ell$.\n\n• **Rôle de la complétude** : le théorème des suites adjacentes repose sur la propriété de la borne supérieure. Dans $\\mathbb{Q}$, la suite des approximations décimales par défaut de $\\sqrt{2}$ est bornée mais n'a aucune sous-suite convergeant dans $\\mathbb{Q}$."
        },
        {
          "title": "3. Théorème de Rolle et théorème des accroissements finis",
          "content": "• **Théorème de Rolle** : soient $a < b$ et $f : [a ; b] \\to \\mathbb{R}$ continue sur $[a ; b]$, dérivable sur $]a ; b[$, avec $f(a) = f(b)$. Alors il existe $c \\in ]a ; b[$ tel que $f'(c) = 0$.\n\n• **Démonstration** :\n1. $f$ est continue sur le segment $[a ; b]$ : elle est bornée et atteint ses bornes, en des points $x_m$ (minimum) et $x_M$ (maximum).\n2. Si $x_m$ et $x_M$ sont tous deux des extrémités de $[a ; b]$, alors $\\min f = \\max f = f(a)$ : $f$ est constante et tout $c \\in ]a ; b[$ convient.\n3. Sinon, l'un d'eux, noté $c$, appartient à $]a ; b[$ ; supposons que $f$ y atteigne son maximum (l'autre cas est symétrique). Pour $h > 0$ assez petit, $\\frac{f(c+h) - f(c)}{h} \\le 0$ ; pour $h < 0$ assez petit, $\\frac{f(c+h) - f(c)}{h} \\ge 0$.\n4. $f$ est dérivable en $c$, point intérieur : les limites à droite et à gauche de ces taux valent $f'(c)$, donc $f'(c) \\le 0$ et $f'(c) \\ge 0$, soit $f'(c) = 0$.\n\n• **Théorème des accroissements finis** : sous les mêmes hypothèses, sans supposer $f(a) = f(b)$, il existe $c \\in ]a ; b[$ tel que $f(b) - f(a) = f'(c)(b - a)$.\n• **Démonstration** : la fonction $g(x) = f(x) - \\frac{f(b) - f(a)}{b - a}(x - a)$ est continue sur $[a ; b]$, dérivable sur $]a ; b[$ et vérifie $g(a) = g(b) = f(a)$ ; le théorème de Rolle fournit $c$ avec $g'(c) = f'(c) - \\frac{f(b) - f(a)}{b - a} = 0$.\n• **Conséquence** : si $f' \\ge 0$ sur un intervalle, $f$ y est croissante ; si $|f'| \\le k$, $f$ est $k$-lipschitzienne.\n• **Contre-exemple** : $x \\mapsto |x|$ sur $[-1 ; 1]$ vérifie $f(-1) = f(1)$, mais n'est pas dérivable en $0$ et sa dérivée ne s'annule jamais."
        },
        {
          "title": "4. Théorème du rang pour les applications linéaires",
          "content": "• **Énoncé** : soient $E, F$ deux $\\mathbb{K}$-espaces vectoriels, $E$ de dimension finie $n$, et $u \\in \\mathcal{L}(E, F)$. Alors $\\mathrm{Im}(u)$ est de dimension finie et\n$$\\dim E = \\dim \\ker u + \\mathrm{rg}(u).$$\n\n• **Démonstration (base incomplète)** :\n1. $\\ker u$ est un sous-espace de $E$, de dimension $k \\le n$ ; soit $(e_1, \\dots, e_k)$ une base de $\\ker u$ (famille vide si $k = 0$).\n2. Par le théorème de la base incomplète, on la complète en une base $(e_1, \\dots, e_n)$ de $E$.\n3. **Famille génératrice** : pour $x = \\sum_{i=1}^{n} \\lambda_i e_i$, on a $u(x) = \\sum_{i=k+1}^{n} \\lambda_i u(e_i)$ puisque $u(e_i) = 0$ pour $i \\le k$ ; donc $(u(e_{k+1}), \\dots, u(e_n))$ engendre $\\mathrm{Im}(u)$.\n4. **Famille libre** : si $\\sum_{i=k+1}^{n} \\mu_i u(e_i) = 0$, alors $v = \\sum_{i=k+1}^{n} \\mu_i e_i$ vérifie $u(v) = 0$, donc $v \\in \\ker u$ et il existe $\\nu_1, \\dots, \\nu_k$ tels que $v = \\sum_{j=1}^{k} \\nu_j e_j$. Ainsi $\\sum_{j=1}^{k} \\nu_j e_j - \\sum_{i=k+1}^{n} \\mu_i e_i = 0$ ; la famille $(e_1, \\dots, e_n)$ étant libre, tous les coefficients sont nuls, en particulier $\\mu_{k+1} = \\dots = \\mu_n = 0$.\n5. $(u(e_{k+1}), \\dots, u(e_n))$ est donc une base de $\\mathrm{Im}(u)$ et $\\mathrm{rg}(u) = n - k$.\n\n• **Forme géométrique** : $u$ induit un isomorphisme de tout supplémentaire de $\\ker u$ dans $E$ sur $\\mathrm{Im}(u)$.\n• **Conséquence** : si $\\dim E = \\dim F < +\\infty$, alors $u$ injective $\\iff$ $u$ surjective $\\iff$ $u$ bijective. C'est faux en dimension infinie : la dérivation $P \\mapsto P'$ de $\\mathbb{R}[X]$ est surjective mais pas injective."
        }
      ],
      "methods": [
        {
          "title": "Rédiger une preuve par dichotomie",
          "example": "Pour $f(x) = x^3 + x - 1$ sur $[0 ; 1]$ : $f(0) = -1 < 0 < 1 = f(1)$. Comme $f(0{,}5) = -0{,}375$, $f(0{,}75) \\approx 0{,}172$ et $f(0{,}625) \\approx -0{,}131$, trois étapes donnent successivement $[0{,}5 ; 1]$, $[0{,}5 ; 0{,}75]$ et $[0{,}625 ; 0{,}75]$. La racine vaut environ $0{,}682$ ; après $n$ étapes, l'erreur est au plus $2^{-n}$.",
          "steps": [
            "**1. Énoncer** le théorème avec toutes ses hypothèses et fixer les notations ($a < b$, signe de $f(a)$ et $f(b)$).",
            "**2. Construire** les suites $(a_n)$, $(b_n)$ en écrivant l'**invariant** conservé : $f(a_n) \\le 0 \\le f(b_n)$ et $b_n - a_n = \\frac{b - a}{2^n}$.",
            "**3. Démontrer l'invariant** par récurrence, puis l'adjacence des suites.",
            "**4. Conclure** en citant le résultat utilisé (continuité de $f$ en $c$, passage à la limite dans une inégalité large) et en traitant les cas limites ($c \\ne a$, $c \\ne b$)."
          ]
        }
      ],
      "traps": [
        "Écrire « $f(a_n) < 0$ pour tout $n$, donc $f(c) < 0$ » : le passage à la limite ne conserve que les inégalités **larges** ($\\frac{1}{n} > 0$ mais $\\lim \\frac{1}{n} = 0$), et il exige la continuité de $f$ en $c$.",
        "Dans Bolzano-Weierstrass, oublier d'imposer $\\varphi(k+1) > \\varphi(k)$ : sans stricte croissance des indices, $(u_{\\varphi(k)})$ n'est pas une sous-suite (on pourrait choisir toujours le même indice).",
        "Dans la preuve de Rolle, raisonner sur un extremum atteint en une **extrémité** : $x \\mapsto x$ sur $[0 ; 1]$ a un minimum en $0$ et pourtant sa dérivée vaut $1$. L'argument des taux d'accroissement de signes opposés n'est valable qu'en un point intérieur.",
        "Croire que $\\ker u$ et $\\mathrm{Im}(u)$ sont toujours supplémentaires : pour $u(x, y) = (y, 0)$ sur $\\mathbb{R}^2$, $\\ker u = \\mathrm{Im}(u) = \\mathbb{R} \\times \\{0\\}$, bien que la formule du rang soit vérifiée ($2 = 1 + 1$)."
      ],
      "flashcards": [
        {
          "q": "Pourquoi peut-on supposer $f(a) < 0 < f(b)$ dans la preuve du TVI ?",
          "a": "Si $f(a) > 0 > f(b)$, on applique le résultat à $-f$, qui est continue et a les mêmes zéros que $f$."
        },
        {
          "q": "Quelle est la longueur de $[a_n ; b_n]$ après $n$ étapes de dichotomie sur $[a ; b]$ ?",
          "a": "$\\frac{b - a}{2^n}$ : elle tend vers 0, ce qui rend les suites $(a_n)$ et $(b_n)$ adjacentes."
        },
        {
          "q": "Pourquoi peut-on toujours choisir $\\varphi(k+1) > \\varphi(k)$ dans la preuve de Bolzano-Weierstrass ?",
          "a": "Le segment $[a_{k+1} ; b_{k+1}]$ contient $u_n$ pour une infinité d'indices $n$ ; un ensemble infini d'entiers contient des éléments arbitrairement grands."
        },
        {
          "q": "Quelle fonction auxiliaire permet de déduire le théorème des accroissements finis du théorème de Rolle ?",
          "a": "$g(x) = f(x) - \\frac{f(b) - f(a)}{b - a}(x - a)$, qui vérifie $g(a) = g(b)$."
        },
        {
          "q": "Dans la preuve du théorème du rang, quelle famille est une base de $\\mathrm{Im}(u)$ ?",
          "a": "La famille $(u(e_{k+1}), \\dots, u(e_n))$ des images des vecteurs ajoutés pour compléter une base $(e_1, \\dots, e_k)$ de $\\ker u$ en une base de $E$."
        }
      ]
    },
    "L2-PRF": {
      "title": "L2-PRF : Démonstrations fondamentales de L2 (Spectre & Analyse)",
      "level": "L2",
      "objectives": [
        "Démontrer l'inégalité de Cauchy-Schwarz et caractériser son cas d'égalité.",
        "Démontrer le théorème spectral par récurrence sur la dimension, en justifiant la réalité des valeurs propres.",
        "Démontrer le théorème de Cayley-Hamilton par la comatrice, sans substitution illégitime.",
        "Établir le lemme d'Abel et en déduire l'existence du rayon de convergence d'une série entière."
      ],
      "keyPoints": [
        {
          "title": "1. Inégalité de Cauchy-Schwarz et cas d'égalité",
          "content": "• **Énoncé** : dans un espace préhilbertien réel $E$, pour tous $x, y \\in E$,\n$$|\\langle x, y \\rangle| \\le \\|x\\| \\, \\|y\\|,$$\navec égalité si et seulement si $x$ et $y$ sont colinéaires.\n\n• **Démonstration** :\n1. Si $x = 0$, les deux membres sont nuls et $x, y$ sont colinéaires. On suppose désormais $x \\ne 0$.\n2. Pour $t \\in \\mathbb{R}$, $P(t) = \\|t x + y\\|^2 = t^2 \\|x\\|^2 + 2 t \\langle x, y \\rangle + \\|y\\|^2 \\ge 0$. C'est un trinôme du second degré (car $\\|x\\|^2 > 0$) qui ne prend que des valeurs positives : son discriminant est négatif ou nul, soit $4 \\langle x, y \\rangle^2 - 4 \\|x\\|^2 \\|y\\|^2 \\le 0$.\n3. **Cas d'égalité** : si $|\\langle x, y \\rangle| = \\|x\\| \\, \\|y\\|$, le discriminant est nul et $P$ s'annule en un réel $t_0$ ; alors $\\|t_0 x + y\\| = 0$, donc $y = -t_0 x$ (séparation de la norme). Réciproquement, si $y = \\alpha x$, $|\\langle x, y \\rangle| = |\\alpha| \\, \\|x\\|^2 = \\|x\\| \\, \\|y\\|$.\n\n• **Conséquences** : inégalité triangulaire $\\|x + y\\| \\le \\|x\\| + \\|y\\|$ (développer $\\|x + y\\|^2$ et majorer $\\langle x, y \\rangle$) ; définition de l'angle non orienté $\\arccos \\frac{\\langle x, y \\rangle}{\\|x\\| \\, \\|y\\|}$ pour $x, y$ non nuls.\n• **Exemple** : pour $f$ continue sur $[0 ; 1]$, avec $\\langle f, g \\rangle = \\int_0^1 f g$ et $g = 1$ : $\\left( \\int_0^1 f \\right)^2 \\le \\int_0^1 f^2$."
        },
        {
          "title": "2. Théorème spectral pour les endomorphismes symétriques réels",
          "content": "• **Énoncé** : soit $E$ un espace euclidien de dimension $n \\ge 1$ et $u \\in \\mathcal{L}(E)$ **symétrique** ($\\langle u(x), y \\rangle = \\langle x, u(y) \\rangle$ pour tous $x, y$). Alors $E$ admet une base orthonormée formée de vecteurs propres de $u$. Version matricielle : pour $A \\in \\mathcal{S}_n(\\mathbb{R})$, il existe $P \\in O_n(\\mathbb{R})$ telle que $P^{-1} A P = P^{\\top} A P$ soit diagonale.\n\n• **Démonstration (récurrence sur $n$)** :\n1. **Existence d'une valeur propre réelle** : soit $A$ la matrice de $u$ dans une base **orthonormée** ; elle est réelle et symétrique. Par le théorème de d'Alembert-Gauss, $\\chi_A$ a une racine $\\lambda \\in \\mathbb{C}$ ; soit $X \\in \\mathbb{C}^n \\setminus \\{0\\}$ avec $A X = \\lambda X$. D'une part $\\bar{X}^{\\top} A X = \\lambda \\, \\bar{X}^{\\top} X$. D'autre part, $A$ étant réelle et symétrique, $\\bar{X}^{\\top} A X = (A \\bar{X})^{\\top} X = (\\overline{A X})^{\\top} X = \\bar{\\lambda} \\, \\bar{X}^{\\top} X$. Comme $\\bar{X}^{\\top} X = \\sum |x_i|^2 > 0$, on obtient $\\lambda = \\bar{\\lambda}$, donc $\\lambda \\in \\mathbb{R}$, et la matrice réelle $A - \\lambda I_n$ n'est pas inversible : $u$ a un vecteur propre dans $E$.\n2. **Initialisation** : si $n = 1$, tout vecteur unitaire convient.\n3. **Stabilité de l'orthogonal** : soit $e_1$ un vecteur propre unitaire, $u(e_1) = \\lambda_1 e_1$, et $H = \\{e_1\\}^{\\perp}$, de dimension $n - 1$. Pour $y \\in H$ : $\\langle u(y), e_1 \\rangle = \\langle y, u(e_1) \\rangle = \\lambda_1 \\langle y, e_1 \\rangle = 0$, donc $u(H) \\subset H$.\n4. **Hérédité** : l'endomorphisme induit $u_H$ est symétrique pour le produit scalaire restreint à $H$ ; par hypothèse de récurrence, $H$ admet une base orthonormée $(e_2, \\dots, e_n)$ de vecteurs propres de $u_H$, donc de $u$.\n5. La famille $(e_1, \\dots, e_n)$ est orthonormée (car $e_1 \\perp H$) et formée de vecteurs propres de $u$.\n\n• **Complément** : des sous-espaces propres associés à des valeurs propres distinctes sont orthogonaux, car $\\lambda \\langle x, y \\rangle = \\langle u(x), y \\rangle = \\langle x, u(y) \\rangle = \\mu \\langle x, y \\rangle$.\n• **Contre-exemple** : la matrice complexe symétrique $\\begin{pmatrix} 1 & i \\\\ i & -1 \\end{pmatrix}$ a un carré nul sans être nulle : elle n'est pas diagonalisable. L'hypothèse « réelle » est indispensable (l'analogue complexe porte sur les matrices hermitiennes)."
        },
        {
          "title": "3. Théorème de Cayley-Hamilton (preuve par la comatrice)",
          "content": "• **Énoncé** : pour $A \\in \\mathcal{M}_n(\\mathbb{K})$ et $\\chi_A(X) = \\det(X I_n - A) = \\sum_{k=0}^{n} a_k X^k$ (avec $a_n = 1$), on a\n$$\\chi_A(A) = \\sum_{k=0}^{n} a_k A^k = 0.$$\n\n• **Démonstration** :\n1. La relation $M \\, \\mathrm{com}(M)^{\\top} = \\det(M) \\, I_n$ est valable pour toute matrice $M$ à coefficients dans un anneau commutatif, en particulier dans $\\mathbb{K}[X]$. Avec $M = X I_n - A$ et $B(X) = \\mathrm{com}(X I_n - A)^{\\top}$ : $(X I_n - A) \\, B(X) = \\chi_A(X) \\, I_n$.\n2. Les coefficients de $B(X)$ sont des cofacteurs, déterminants de taille $n - 1$ dont les coefficients sont de degré au plus 1 : ils sont de degré au plus $n - 1$. On écrit $B(X) = \\sum_{k=0}^{n-1} X^k B_k$ avec $B_k \\in \\mathcal{M}_n(\\mathbb{K})$.\n3. En développant et en identifiant les coefficients (matriciels) de chaque puissance de $X$ :\n$$-A B_0 = a_0 I_n, \\qquad B_{k-1} - A B_k = a_k I_n \\ (1 \\le k \\le n - 1), \\qquad B_{n-1} = I_n.$$\n4. On multiplie à gauche la relation d'indice $k$ par $A^k$ et on additionne :\n$$\\chi_A(A) = -A B_0 + \\sum_{k=1}^{n-1} \\left( A^k B_{k-1} - A^{k+1} B_k \\right) + A^n B_{n-1}.$$\nLa somme centrale est télescopique et vaut $A B_0 - A^n B_{n-1}$ : il reste $\\chi_A(A) = 0$.\n\n• **Sophisme à éviter** : « $\\chi_A(A) = \\det(A I_n - A) = \\det(0) = 0$ » est faux : $\\chi_A(A)$ est une **matrice** obtenue en substituant $A$ dans le polynôme développé, alors que le calcul proposé produit un scalaire.\n• **Application** : si $A$ est inversible, $a_0 = \\chi_A(0) = (-1)^n \\det A \\ne 0$ et $A^{-1} = -\\frac{1}{a_0} \\left( A^{n-1} + a_{n-1} A^{n-2} + \\dots + a_1 I_n \\right)$."
        },
        {
          "title": "4. Lemme d'Abel et rayon de convergence",
          "content": "• **Énoncé** : soit $\\sum a_n z^n$ une série entière et $z_0 \\in \\mathbb{C}^{\\ast}$ tel que la suite $(a_n z_0^n)$ soit **bornée**. Alors, pour tout $z \\in \\mathbb{C}$ tel que $|z| < |z_0|$, la série $\\sum a_n z^n$ converge absolument.\n\n• **Démonstration** :\n1. Soit $M \\ge 0$ tel que $|a_n z_0^n| \\le M$ pour tout $n$.\n2. Pour $|z| < |z_0|$, on pose $q = \\frac{|z|}{|z_0|} \\in [0 ; 1[$ ; alors $|a_n z^n| = |a_n z_0^n| \\, q^n \\le M q^n$.\n3. La série géométrique $\\sum M q^n$ converge ; par comparaison de séries à termes positifs, $\\sum |a_n z^n|$ converge.\n\n• **Rayon de convergence** : on pose $R = \\sup \\{ r \\ge 0 \\mid (a_n r^n)_n \\text{ est bornée} \\} \\in [0 ; +\\infty]$. Si $|z| < R$, il existe $r > |z|$ tel que $(a_n r^n)$ soit bornée, et le lemme donne la convergence absolue. Si $|z| > R$, la suite $(a_n z^n)$ n'est pas bornée : la série diverge grossièrement.\n• **Sur le cercle $|z| = R$, tout peut arriver** : $\\sum z^n$, $\\sum \\frac{z^n}{n}$ et $\\sum \\frac{z^n}{n^2}$ ont pour rayon $1$ ; la première diverge en tout point du cercle, la deuxième diverge en $z = 1$ et converge en $z = -1$, la troisième converge absolument sur tout le cercle."
        }
      ],
      "methods": [
        {
          "title": "Démontrer une inégalité par la positivité d'un trinôme",
          "example": "Pour $x_1, \\dots, x_n$ réels, Cauchy-Schwarz dans $\\mathbb{R}^n$ avec $y = (1, \\dots, 1)$ donne $\\left( \\sum_{k=1}^{n} x_k \\right)^2 \\le n \\sum_{k=1}^{n} x_k^2$. Pour $x_k = k$ et $n = 3$ : $6^2 = 36 \\le 3 \\times 14 = 42$. L'égalité a lieu si et seulement si tous les $x_k$ sont égaux.",
          "steps": [
            "**1. Choisir** le produit scalaire et les deux vecteurs adaptés à l'inégalité visée.",
            "**2. Écrire** $P(t) = \\|t x + y\\|^2 \\ge 0$ et le développer par bilinéarité et symétrie.",
            "**3. Traiter à part** le cas $x = 0$, puis utiliser le signe du discriminant d'un trinôme de degré exactement 2.",
            "**4. Étudier le cas d'égalité** : discriminant nul, racine double $t_0$, puis $t_0 x + y = 0$."
          ]
        }
      ],
      "traps": [
        "Appliquer le théorème spectral à une matrice symétrique **complexe** : $\\begin{pmatrix} 1 & i \\\\ i & -1 \\end{pmatrix}$ est symétrique, nilpotente et non nulle, donc non diagonalisable.",
        "Oublier que la matrice d'un endomorphisme symétrique n'est symétrique que dans une base **orthonormée** : la preuve de la réalité des valeurs propres utilise une telle base.",
        "« Démontrer » Cayley-Hamilton par $\\det(A I_n - A) = 0$ : ce calcul donne un scalaire, alors que $\\chi_A(A)$ est une matrice.",
        "Croire que le lemme d'Abel renseigne sur le cercle $|z| = |z_0|$ : il ne donne la convergence absolue que pour $|z| < |z_0|$ strictement."
      ],
      "flashcards": [
        {
          "q": "Quel trinôme utilise-t-on pour démontrer l'inégalité de Cauchy-Schwarz ?",
          "a": "$P(t) = \\|t x + y\\|^2 = t^2 \\|x\\|^2 + 2 t \\langle x, y \\rangle + \\|y\\|^2$, positif pour tout réel $t$ : son discriminant est négatif ou nul."
        },
        {
          "q": "Quand l'inégalité de Cauchy-Schwarz est-elle une égalité ?",
          "a": "Si et seulement si $x$ et $y$ sont colinéaires."
        },
        {
          "q": "Pourquoi l'orthogonal d'un vecteur propre d'un endomorphisme symétrique est-il stable ?",
          "a": "Si $u(e_1) = \\lambda_1 e_1$ et $y \\perp e_1$, alors $\\langle u(y), e_1 \\rangle = \\langle y, u(e_1) \\rangle = \\lambda_1 \\langle y, e_1 \\rangle = 0$."
        },
        {
          "q": "Quelle identité est le point de départ de la preuve de Cayley-Hamilton par la comatrice ?",
          "a": "$(X I_n - A) \\, \\mathrm{com}(X I_n - A)^{\\top} = \\chi_A(X) \\, I_n$, valable dans $\\mathcal{M}_n(\\mathbb{K}[X])$."
        },
        {
          "q": "Que donne le lemme d'Abel si $(a_n z_0^n)$ est bornée ?",
          "a": "La convergence absolue de $\\sum a_n z^n$ pour tout $z$ tel que $|z| < |z_0|$, par comparaison avec une série géométrique de raison $\\frac{|z|}{|z_0|} < 1$."
        }
      ]
    },
    "L3-PRF": {
      "title": "L3-PRF : Démonstrations fondamentales de L3 (Lebesgue, Baire & Sylow)",
      "level": "L3",
      "objectives": [
        "Démontrer le théorème de convergence dominée à partir du lemme de Fatou.",
        "Déduire le théorème de Banach-Steinhaus du théorème de Baire et identifier le rôle de la complétude.",
        "Démontrer le théorème d'inversion locale par le théorème du point fixe, y compris la régularité de la réciproque.",
        "Démontrer l'existence des $p$-sous-groupes de Sylow à l'aide d'une action de groupe."
      ],
      "keyPoints": [
        {
          "title": "1. Théorème de convergence dominée de Lebesgue",
          "content": "• **Énoncé** : soient $(X, \\mathcal{A}, \\mu)$ un espace mesuré et $(f_n)$ une suite de fonctions mesurables à valeurs réelles convergeant $\\mu$-presque partout vers une fonction mesurable $f$. S'il existe $g \\in L^1(\\mu)$ telle que, pour tout $n$, $|f_n| \\le g$ presque partout, alors $f \\in L^1(\\mu)$ et\n$$\\lim_{n \\to +\\infty} \\int |f_n - f| \\, d\\mu = 0, \\qquad \\text{donc} \\qquad \\lim_{n \\to +\\infty} \\int f_n \\, d\\mu = \\int f \\, d\\mu.$$\n\n• **Démonstration (lemme de Fatou)** :\n1. **Intégrabilité de la limite** : hors d'une réunion dénombrable d'ensembles négligeables, on a $|f_n| \\le g$ pour tout $n$ et $f_n \\to f$ ; par passage à la limite, $|f| \\le g$ presque partout, donc $f \\in L^1(\\mu)$.\n2. On pose $h_n = 2 g - |f_n - f|$. Presque partout, $|f_n - f| \\le |f_n| + |f| \\le 2 g$, donc $h_n \\ge 0$, et $h_n \\to 2 g$.\n3. **Lemme de Fatou** appliqué aux fonctions positives $h_n$ : $\\int 2 g \\, d\\mu \\le \\liminf \\int h_n \\, d\\mu = \\int 2 g \\, d\\mu - \\limsup \\int |f_n - f| \\, d\\mu$.\n4. Comme $\\int 2 g \\, d\\mu < +\\infty$, on peut le soustraire : $\\limsup \\int |f_n - f| \\, d\\mu \\le 0$, donc $\\int |f_n - f| \\, d\\mu \\to 0$.\n5. Enfin $\\left| \\int f_n \\, d\\mu - \\int f \\, d\\mu \\right| \\le \\int |f_n - f| \\, d\\mu \\to 0$.\n\n• **Contre-exemple** : sur $[0 ; 1]$, $f_n = n \\mathbf{1}_{]0 ; 1/n]}$ tend vers $0$ en tout point, mais $\\int f_n = 1$ pour tout $n$ ; la plus petite majorante $\\sup_n f_n$ vaut $\\lfloor 1/x \\rfloor \\ge \\frac{1}{x} - 1$ sur $]0 ; 1]$ et n'est pas intégrable."
        },
        {
          "title": "2. Théorème de Baire et théorème de Banach-Steinhaus",
          "content": "• **Théorème de Baire** : dans un espace métrique complet, toute intersection dénombrable d'ouverts denses est dense. Forme équivalente (passage au complémentaire) : si un espace métrique complet non vide est réunion dénombrable de fermés $F_n$, l'un des $F_n$ est d'intérieur non vide.\n• **Théorème de Banach-Steinhaus** : soient $E$ un espace de **Banach**, $F$ un espace vectoriel normé et $(T_i)_{i \\in I}$ une famille d'applications linéaires continues de $E$ dans $F$. Si $\\sup_{i \\in I} \\|T_i(x)\\| < +\\infty$ pour tout $x \\in E$, alors $\\sup_{i \\in I} \\|T_i\\| < +\\infty$.\n\n• **Démonstration** :\n1. Pour $n \\in \\mathbb{N}^{\\ast}$, $F_n = \\{x \\in E \\mid \\forall i \\in I, \\|T_i(x)\\| \\le n\\}$ est une intersection d'images réciproques du fermé $[0 ; n]$ par les applications continues $x \\mapsto \\|T_i(x)\\|$ : c'est un fermé.\n2. Par hypothèse, $E = \\bigcup_{n \\ge 1} F_n$. Comme $E$ est complet, le théorème de Baire fournit $n_0$ tel que $F_{n_0}$ contienne une boule fermée $\\bar{B}(x_0, r)$ avec $r > 0$.\n3. Soit $u \\in E$ avec $\\|u\\| \\le 1$. Alors $x_0 + r u$ et $x_0$ appartiennent à $F_{n_0}$, donc pour tout $i \\in I$, par linéarité :\n$$r \\, \\|T_i(u)\\| = \\|T_i(x_0 + r u) - T_i(x_0)\\| \\le n_0 + n_0 = 2 n_0.$$\n4. Ainsi $\\|T_i\\| \\le \\frac{2 n_0}{r}$ pour tout $i \\in I$.\n\n• **Application** : si une suite $(T_k)$ d'applications linéaires continues sur un Banach converge simplement vers $T$, alors $T$ est linéaire et continue, avec $\\|T\\| \\le \\sup_k \\|T_k\\|$.\n• **Contre-exemple sans complétude** : sur $\\mathbb{R}[X]$ muni de $\\|\\sum a_k X^k\\| = \\max_k |a_k|$, les formes linéaires $T_n(P) = n a_n$ sont ponctuellement bornées (pour $P$ fixé, $a_n = 0$ dès que $n > \\deg P$), mais $\\|T_n\\| = n$."
        },
        {
          "title": "3. Théorème d'inversion locale",
          "content": "• **Énoncé** : soient $U$ un ouvert de $\\mathbb{R}^n$, $f : U \\to \\mathbb{R}^n$ de classe $\\mathcal{C}^1$ et $a \\in U$ tel que $df(a)$ soit inversible. Il existe un ouvert $V$ contenant $a$ et un ouvert $W$ contenant $f(a)$ tels que $f$ induise une bijection de $V$ sur $W$ dont la réciproque est de classe $\\mathcal{C}^1$.\n\n• **Démonstration (point fixe de Banach)** :\n1. **Réduction** : en remplaçant $f$ par $x \\mapsto df(a)^{-1}\\big(f(a + x) - f(a)\\big)$, on se ramène à $a = 0$, $f(0) = 0$ et $df(0) = \\mathrm{Id}$.\n2. Pour $y$ fixé, on pose $\\varphi_y(x) = x - f(x) + y$ : l'équation $f(x) = y$ équivaut à $\\varphi_y(x) = x$. On a $d\\varphi_y(x) = \\mathrm{Id} - df(x)$, nulle en $0$ ; par continuité de $df$, il existe $r > 0$ tel que $\\bar{B}(0, r) \\subset U$ et $\\|\\mathrm{Id} - df(x)\\| \\le \\frac{1}{2}$ pour $x \\in \\bar{B}(0, r)$.\n3. **Contraction** : par l'inégalité des accroissements finis sur le convexe $\\bar{B}(0, r)$, $\\|\\varphi_y(x) - \\varphi_y(x')\\| \\le \\frac{1}{2} \\|x - x'\\|$. Si $\\|y\\| < \\frac{r}{2}$, alors $\\|\\varphi_y(x)\\| \\le \\|\\varphi_y(x) - \\varphi_y(0)\\| + \\|y\\| \\le \\frac{r}{2} + \\|y\\| < r$ : $\\varphi_y$ envoie la boule fermée $\\bar{B}(0, r)$, qui est complète, dans la boule ouverte $B(0, r)$.\n4. **Bijection locale** : par le théorème du point fixe, chaque $y \\in W = B(0, \\frac{r}{2})$ a un unique antécédent $g(y)$ dans $\\bar{B}(0, r)$, et $\\|g(y)\\| < r$. L'ensemble $V = B(0, r) \\cap f^{-1}(W)$ est ouvert (continuité de $f$), contient $0$, et $f$ induit une bijection de $V$ sur $W$, de réciproque $g$.\n5. **Continuité de $g$** : de $x - x' = \\big(\\varphi_0(x) - \\varphi_0(x')\\big) + \\big(f(x) - f(x')\\big)$, on tire $\\|x - x'\\| \\le 2 \\|f(x) - f(x')\\|$ sur $V$ : $g$ est $2$-lipschitzienne.\n6. **Différentiabilité de $g$** : pour $x \\in V$, $\\|\\mathrm{Id} - df(x)\\| \\le \\frac{1}{2} < 1$, donc $df(x)$ est inversible (série de Neumann). Pour $x = g(y)$ et $k = g(y + h) - g(y)$, on a $h = df(x) k + o(\\|k\\|)$ et $\\|k\\| \\le 2 \\|h\\|$ ; donc $k = df(x)^{-1} h + o(\\|h\\|)$, c'est-à-dire $dg(y) = df(g(y))^{-1}$.\n7. **Classe $\\mathcal{C}^1$** : $y \\mapsto df(g(y))^{-1}$ est composée de $g$ (continue), de $df$ (continue) et de l'inversion $M \\mapsto M^{-1}$ (continue sur $GL_n(\\mathbb{R})$ par la formule de la comatrice) ; $g$ est donc de classe $\\mathcal{C}^1$.\n\n• **Le résultat est local** : $(x, y) \\mapsto (e^x \\cos y, e^x \\sin y)$ a une différentielle inversible en tout point de $\\mathbb{R}^2$ (jacobien $e^{2x}$), mais n'est pas injective (elle est $2\\pi$-périodique en $y$)."
        },
        {
          "title": "4. Premier théorème de Sylow (existence)",
          "content": "• **Énoncé** : soit $G$ un groupe fini d'ordre $p^{\\alpha} m$, avec $p$ premier, $\\alpha \\ge 1$ et $p \\nmid m$. Alors $G$ possède un sous-groupe d'ordre $p^{\\alpha}$ (un $p$-sous-groupe de Sylow).\n\n• **Lemme arithmétique** : $p$ ne divise pas $N = \\binom{p^{\\alpha} m}{p^{\\alpha}}$. En effet,\n$$N = \\prod_{j=0}^{p^{\\alpha} - 1} \\frac{p^{\\alpha} m - j}{p^{\\alpha} - j} ;$$\nle facteur $j = 0$ vaut $m$, et pour $1 \\le j < p^{\\alpha}$ on a $v_p(j) < \\alpha$, donc $v_p(p^{\\alpha} m - j) = v_p(j) = v_p(p^{\\alpha} - j)$. Ainsi $v_p(N) = v_p(m) = 0$.\n\n• **Démonstration (action par translation à gauche)** :\n1. Soit $\\mathcal{X}$ l'ensemble des parties de $G$ à $p^{\\alpha}$ éléments, de cardinal $N$. Le groupe $G$ agit sur $\\mathcal{X}$ par $g \\cdot A = g A = \\{g a \\mid a \\in A\\}$.\n2. Les orbites forment une partition de $\\mathcal{X}$ ; comme $p \\nmid N$, l'une d'elles, $\\mathcal{O}(A)$, a un cardinal non divisible par $p$.\n3. Soit $H = \\mathrm{Stab}(A) = \\{g \\in G \\mid g A = A\\}$, sous-groupe de $G$. Par la relation orbite-stabilisateur, $|G| = |\\mathcal{O}(A)| \\cdot |H|$ ; $p^{\\alpha}$ divise $|G|$ et est premier avec $|\\mathcal{O}(A)|$, donc $p^{\\alpha}$ divise $|H|$ (lemme de Gauss).\n4. Fixons $a \\in A$. Pour $h \\in H$, $h a \\in h A = A$ ; l'application $h \\mapsto h a$ est injective (simplification dans un groupe), de $H$ dans $A$, donc $|H| \\le |A| = p^{\\alpha}$.\n5. Ainsi $|H| = p^{\\alpha}$ : $H$ est un $p$-sous-groupe de Sylow de $G$.\n\n• **Suite du théorème (énoncés)** : les $p$-Sylow sont deux à deux conjugués ; leur nombre $n_p$ divise $m$ et vérifie $n_p \\equiv 1 \\pmod{p}$.\n• **Exemple** : si $|G| = 15$, alors $n_3$ divise $5$ et $n_3 \\equiv 1 \\pmod{3}$, donc $n_3 = 1$ ; de même $n_5 = 1$. Les deux Sylow sont distingués, d'intersection triviale, et $G \\simeq \\mathbb{Z}/3\\mathbb{Z} \\times \\mathbb{Z}/5\\mathbb{Z}$, groupe cyclique."
        }
      ],
      "methods": [
        {
          "title": "Appliquer le théorème de convergence dominée",
          "example": "Calculer $\\lim_{n \\to +\\infty} \\int_0^{n} \\left( 1 - \\frac{x}{n} \\right)^n dx$. On pose $f_n(x) = \\left( 1 - \\frac{x}{n} \\right)^n \\mathbf{1}_{[0 ; n]}(x)$ sur $[0 ; +\\infty[$. Pour $x$ fixé, $f_n(x) \\to e^{-x}$ ; et, comme $\\ln(1 - t) \\le -t$ pour $t \\in [0 ; 1[$, on a $0 \\le f_n(x) \\le e^{-x}$, fonction intégrable. Donc la limite vaut $\\int_0^{+\\infty} e^{-x} dx = 1$ (contrôle : le calcul direct donne $\\frac{n}{n+1}$).",
          "steps": [
            "**1. Écrire** l'intégrale sur un domaine fixe, en intégrant une indicatrice si les bornes dépendent de $n$.",
            "**2. Vérifier** la mesurabilité des $f_n$ et déterminer leur limite simple presque partout.",
            "**3. Trouver une domination** $|f_n| \\le g$ valable pour **tout** $n$, avec $g$ intégrable et indépendante de $n$.",
            "**4. Conclure** en citant le théorème, puis calculer $\\int f$."
          ]
        }
      ],
      "traps": [
        "Utiliser une « domination » qui dépend de $n$ : $|f_n| \\le g_n$ ne suffit pas, il faut une même fonction $g$ intégrable pour tous les $n$ (voir $f_n = n \\mathbf{1}_{]0 ; 1/n]}$).",
        "Oublier la complétude dans Banach-Steinhaus : sur $\\mathbb{R}[X]$ normé par $\\max_k |a_k|$, les formes $T_n(P) = n a_n$ sont ponctuellement bornées mais $\\|T_n\\| = n$.",
        "Conclure du théorème d'inversion locale à un difféomorphisme **global** : $(x, y) \\mapsto (e^x \\cos y, e^x \\sin y)$ a une différentielle partout inversible mais n'est pas injective.",
        "Lire Sylow comme une réciproque du théorème de Lagrange : le groupe alterné $\\mathfrak{A}_4$, d'ordre 12, n'a aucun sous-groupe d'ordre 6. Sylow garantit seulement des sous-groupes d'ordre $p^k$ pour $p^k$ divisant $|G|$."
      ],
      "flashcards": [
        {
          "q": "À quelle suite de fonctions positives applique-t-on le lemme de Fatou pour démontrer la convergence dominée ?",
          "a": "À $h_n = 2 g - |f_n - f| \\ge 0$, qui tend vers $2g$ ; on obtient $\\limsup \\int |f_n - f| \\le 0$."
        },
        {
          "q": "Où intervient la complétude de $E$ dans la preuve de Banach-Steinhaus ?",
          "a": "Pour appliquer le théorème de Baire à $E = \\bigcup_n F_n$, avec $F_n$ fermés : l'un des $F_n$ contient une boule."
        },
        {
          "q": "Pourquoi $\\varphi_y(x) = x - f(x) + y$ est-elle contractante près de $0$ dans la preuve du théorème d'inversion locale ?",
          "a": "Car $d\\varphi_y(x) = \\mathrm{Id} - df(x)$ est nulle en $0$ et continue ; sur une boule $\\bar{B}(0, r)$, $\\|d\\varphi_y\\| \\le \\frac{1}{2}$ et l'inégalité des accroissements finis donne le rapport $\\frac{1}{2}$."
        },
        {
          "q": "Quelle est la différentielle de la réciproque locale $g$ donnée par le théorème d'inversion locale ?",
          "a": "$dg(y) = df(g(y))^{-1}$."
        },
        {
          "q": "Sur quel ensemble fait-on agir $G$ pour démontrer l'existence d'un $p$-Sylow ?",
          "a": "Sur l'ensemble des parties de $G$ à $p^{\\alpha}$ éléments, par translation à gauche ; le stabilisateur d'une partie dont l'orbite a un cardinal premier à $p$ est un $p$-Sylow."
        }
      ]
    }
  };

  // =========================================================================
  // 2. BANQUES D'ENTRAÎNEMENTS PROGRESSIFS SUR LES PREUVES (L1, L2, L3)
  // =========================================================================

  const PROOF_EXERCISES = {
    'L1-PRF': [
      // Palier 1 : Socle - Hypothèses fondamentales
      {
        id: 'L1-PRF-1',
        chapterId: 'L1-PRF',
        tier: 1,
        title: "TVI : Hypothèse indispensable de continuité",
        statement: "Dans le Théorème des Valeurs Intermédiaires (TVI), quelle hypothèse sur la fonction $f : [a, b] \\to \\mathbb{R}$ est **indispensable** pour garantir l'existence d'une racine lorsque $f(a)f(b) < 0$ ?",
        type: "mcq",
        options: [
          "La continuité de f sur le segment [a, b]",
          "La dérivabilité de f sur l'intervalle ouvert ]a, b[",
          "La stricte monotonie de f sur [a, b]",
          "La convexité de f sur [a, b]"
        ],
        correctIndex: 0,
        answer: "La continuité de f sur le segment [a, b]",
        hint1: "Si une fonction fait un 'saut' sans être continue (ex: fonction signe), elle peut passer du négatif au positif sans jamais s'annuler.",
        solution: "La continuité est indispensable : la fonction définie par $f(x) = -1$ sur $[0, 1[$ et $f(1) = 1$ vérifie $f(0)f(1) = -1 < 0$, mais ne s'annule jamais sur $[0, 1]$ car elle n'est pas continue en 1."
      },
      {
        id: 'L1-PRF-2',
        chapterId: 'L1-PRF',
        tier: 1,
        title: "Bolzano-Weierstrass : Condition sur la suite",
        statement: "Le théorème de Bolzano-Weierstrass affirme que de toute suite réelle $(u_n)$, on peut extraire une sous-suite convergente, sous réserve que $(u_n)$ soit :",
        type: "mcq",
        options: [
          "Bornée",
          "Monotone",
          "À termes strictement positifs",
          "Périodique"
        ],
        correctIndex: 0,
        answer: "Bornée",
        hint1: "La suite $u_n = n$ ne possède aucune sous-suite convergente car elle n'est pas bornée.",
        solution: "L'hypothèse essentielle est que $(u_n)$ soit bornée. Cela garantit qu'elle est confinée dans un segment compact $[a, b]$, sur lequel la méthode de dichotomie s'applique."
      },
      // Palier 2 : Guidé - Lemmes d'articulation
      {
        id: 'L1-PRF-3',
        chapterId: 'L1-PRF',
        tier: 2,
        title: "TVI par dichotomie : Vitesse de convergence de la longueur",
        statement: "Dans la démonstration du TVI par dichotomie sur le segment initial $[a, b]$, quelle est la longueur du segment $[a_n, b_n]$ à l'étape $n$ ?",
        type: "mcq",
        options: [
          "$$\\frac{b - a}{2^n}$$",
          "$$\\frac{b - a}{n}$$",
          "$$\\frac{b - a}{n^2}$$",
          "$$\\frac{b - a}{\\sqrt{n}}$$"
        ],
        correctIndex: 0,
        answer: "$$\\frac{b - a}{2^n}$$",
        hint1: "À chaque étape, on coupe le segment en deux moitiés égales.",
        solution: "À chaque étape, la longueur est divisée par 2 : $b_n - a_n = \\frac{b-a}{2^n}$. Comme $2^n \\to +\\infty$, cette longueur tend géométriquement vers 0, ce qui démontre que $(a_n)$ et $(b_n)$ sont adjacentes."
      },
      {
        id: 'L1-PRF-4',
        chapterId: 'L1-PRF',
        tier: 2,
        title: "Théorème du rang : Dimension de l'image de la base incomplète",
        statement: "Soit $u \\in \\mathcal{L}(E, F)$ avec $\\dim(E) = n$ et $(e_1, \\dots, e_k)$ une base de $\\ker(u)$ complétée en une base $(e_1, \\dots, e_n)$ de $E$. Pourquoi la famille $(u(e_{k+1}), \\dots, u(e_n))$ est-elle libre ?",
        type: "mcq",
        options: [
          "Car si $\\sum_{i=k+1}^n \\lambda_i u(e_i) = 0$, alors $\\sum_{i=k+1}^n \\lambda_i e_i \\in \\ker(u)$, ce qui impose $\\lambda_i = 0$ par indépendance de la base de E",
          "Car l'application u est injective sur E tout entier",
          "Car dim(F) est nécessairement supérieure ou égale à n",
          "Car u est un isomorphisme"
        ],
        correctIndex: 0,
        answer: "Car si $\\sum_{i=k+1}^n \\lambda_i u(e_i) = 0$, alors $\\sum_{i=k+1}^n \\lambda_i e_i \\in \\ker(u)$, ce qui impose $\\lambda_i = 0$ par indépendance de la base de E",
        hint1: "Si $\\sum_{i>k} \\lambda_i u(e_i) = 0$, la linéarité donne $u\\left(\\sum_{i>k} \\lambda_i e_i\\right) = 0$ : où se trouve alors $\\sum_{i>k} \\lambda_i e_i$, et que donne son écriture dans la base $(e_1, \\dots, e_k)$ ?",
        solution: "Par linéarité, $\\sum_{i=k+1}^n \\lambda_i u(e_i) = u(\\sum_{i=k+1}^n \\lambda_i e_i) = 0$, donc $v = \\sum_{i=k+1}^n \\lambda_i e_i \\in \\ker(u) = \\mathrm{Vect}(e_1, \\dots, e_k)$. Comme $(e_1, \\dots, e_n)$ est libre, les coordonnées sur les deux sous-espaces en somme directe sont toutes nulles : $\\lambda_i = 0$."
      },
      // Palier 3 : Examen - Détection de sophismes
      {
        id: 'L1-PRF-5',
        chapterId: 'L1-PRF',
        tier: 3,
        title: "Chasse aux sophismes : Passage à la limite sans continuité",
        statement: "Un étudiant écrit : *« Comme $a_n \\to c$ avec $f(a_n) < 0$ pour tout $n$, on a nécessairement $f(c) < 0$ »*. Quels sont les **deux sophismes** commis dans cette déduction ?",
        type: "mcq",
        options: [
          "Le passage à la limite préserve les inégalités larges ($\\le 0$ et non $< 0$) et suppose que f est continue en c",
          "Le théorème des suites adjacentes n'autorise pas la convergence vers c",
          "La suite an ne peut pas être croissante",
          "Il est interdit d'appliquer la fonction f aux termes de la suite"
        ],
        correctIndex: 0,
        answer: "Le passage à la limite préserve les inégalités larges ($\\le 0$ et non $< 0$) et suppose que f est continue en c",
        hint1: "Pense à la suite $u_n = -\\frac{1}{n} < 0$ : sa limite est $0$, une inégalité stricte peut donc devenir large à la limite. Et l'égalité $\\lim f(a_n) = f(\\lim a_n)$ demande une hypothèse sur $f$ : laquelle ?",
        solution: "1. Le passage à la limite change les inégalités strictes en inégalités larges : $x_n < 0 \\implies \\lim x_n \\le 0$.\n2. On ne peut écrire $\\lim f(a_n) = f(c)$ que si $f$ est continue en $c$."
      },
      // Palier 4 : Rigueur - Reconstitution complète
      {
        id: 'L1-PRF-6',
        chapterId: 'L1-PRF',
        tier: 4,
        title: "Reconstitution : Ordre des étapes de Bolzano-Weierstrass",
        statement: "Pour prouver le théorème de Bolzano-Weierstrass par dichotomie, quel est l'enchaînement logique rigoureux ?\n\n1. Extraction d'une sous-suite d'indices $\\varphi(k+1) > \\varphi(k)$\n2. Encadrement dans un segment initial borné $[a_0, b_0]$\n3. Division par deux et application du principe des tiroirs\n4. Conclusion par le théorème des segments emboîtés ($u_{\\varphi(k)} \\to \\ell$)",
        type: "mcq",
        options: [
          "Étape 2 → Étape 3 → Étape 1 → Étape 4",
          "Étape 1 → Étape 2 → Étape 3 → Étape 4",
          "Étape 3 → Étape 1 → Étape 2 → Étape 4",
          "Étape 4 → Étape 2 → Étape 3 → Étape 1"
        ],
        correctIndex: 0,
        answer: "Étape 2 → Étape 3 → Étape 1 → Étape 4",
        hint1: "Demande-toi ce dont chaque étape a besoin : peut-on couper un segment en deux avant de l'avoir construit ? peut-on choisir $\\varphi(k+1)$ avant de connaître le segment de l'étape $k+1$ ?",
        solution: "L'ordre logique canonique est :\n1. Confinement initial dans $[a_0, b_0]$ car la suite est bornée (Étape 2).\n2. Construction des segments emboîtés par dichotomie et tiroirs (Étape 3).\n3. Choix itératif des indices croissants $\\varphi(k)$ (Étape 1).\n4. Convergence de la sous-suite vers le point d'intersection unique (Étape 4)."
      }
    ],

    'L2-PRF': [
      // Palier 1 : Socle - Théorème Spectral
      {
        id: 'L2-PRF-1',
        chapterId: 'L2-PRF',
        tier: 1,
        title: "Théorème Spectral : Réalité des valeurs propres",
        statement: "Dans la démonstration du Théorème Spectral, pourquoi une valeur propre complexe $\\lambda \\in \\mathbb{C}$ d'une matrice symétrique réelle $A \\in \\mathcal{S}_n(\\mathbb{R})$ est-elle obligatoirement **réelle** ?",
        type: "mcq",
        options: [
          "Car ${}^t \\bar{X} A X = \\lambda \\|X\\|^2 = \\bar{\\lambda} \\|X\\|^2$ avec $\\|X\\|^2 > 0$",
          "Car le déterminant de A est toujours strictement positif",
          "Car toute matrice carrée admet uniquement des valeurs propres réelles",
          "Car la trace de A est nulle"
        ],
        correctIndex: 0,
        answer: "Car ${}^t \\bar{X} A X = \\lambda \\|X\\|^2 = \\bar{\\lambda} \\|X\\|^2$ avec $\\|X\\|^2 > 0$",
        hint1: "Multiplie $AX = \\lambda X$ par le transposé conjugué ${}^t \\bar{X}$ à gauche, puis utilise la symétrie ${}^t A = A = \\bar{A}$.",
        solution: "Soit $X \\ne 0$ tel que $AX = \\lambda X$. Alors ${}^t \\bar{X} A X = \\lambda {}^t \\bar{X} X = \\lambda \\|X\\|^2$. D'autre part, comme $A$ est réelle et symétrique, ${}^t \\bar{X} A X = {}^t (A \\bar{X}) X = {}^t (\\bar{\\lambda} \\bar{X}) X = \\bar{\\lambda} \\|X\\|^2$. Comme $\\|X\\|^2 > 0$, on a $\\lambda = \\bar{\\lambda}$, donc $\\lambda \\in \\mathbb{R}$."
      },
      // Palier 2 : Guidé - Lemme d'Abel
      {
        id: 'L2-PRF-2',
        chapterId: 'L2-PRF',
        tier: 2,
        title: "Lemme d'Abel : Majoration géométrique clé",
        statement: "Dans la preuve du lemme d'Abel, si $|a_n z_0^n| \\le M$ pour tout $n$, quelle majoration permet de conclure à la convergence absolue de $\\sum a_n z^n$ pour $|z| < |z_0|$ ?",
        type: "mcq",
        options: [
          "$$|a_n z^n| \\le M \\cdot \\left|\\frac{z}{z_0}\\right|^n$$ avec $$\\left|\\frac{z}{z_0}\\right| < 1$$",
          "$$|a_n z^n| \\le \\frac{M}{n}$$",
          "$$|a_n z^n| \\le M \\cdot \\left|\\frac{z_0}{z}\\right|^n$$",
          "$$|a_n z^n| \\le M \\cdot |z - z_0|^n$$"
        ],
        correctIndex: 0,
        answer: "$$|a_n z^n| \\le M \\cdot \\left|\\frac{z}{z_0}\\right|^n$$ avec $$\\left|\\frac{z}{z_0}\\right| < 1$$",
        hint1: "On multiplie et divise par $z_0^n$ dans le terme général.",
        solution: "On écrit $|a_n z^n| = |a_n z_0^n| \\cdot |z/z_0|^n \\le M q^n$ avec $q = |z/z_0| < 1$. C'est le terme général d'une série géométrique convergente, ce qui entraîne la convergence absolue de la série entière."
      },
      // Palier 3 : Examen - Cayley-Hamilton & Comatrice
      {
        id: 'L2-PRF-3',
        chapterId: 'L2-PRF',
        tier: 3,
        title: "Cayley-Hamilton : Pourquoi la preuve simpliste 'χ(A) = det(AI - A) = det(0) = 0' est fausse",
        statement: "Pourquoi l'argument *« $\\chi_A(A) = \\det(A \\cdot I_n - A) = \\det(0) = 0$ »* est-il un **sophisme mathématique grossier** rejeté aux examens ?",
        type: "mcq",
        options: [
          "Car $\\det(X I_n - A)$ est un scalaire obtenu en évaluant une indéterminée scalaire X, et non en substituant une matrice dans le déterminant",
          "Car det(0) est différent de 0 pour les matrices carrées",
          "Car le polynôme caractéristique n'admet jamais de racine",
          "Car Cayley-Hamilton ne s'applique qu'aux matrices nilpotentes"
        ],
        correctIndex: 0,
        answer: "Car $\\det(X I_n - A)$ est un scalaire obtenu en évaluant une indéterminée scalaire X, et non en substituant une matrice dans le déterminant",
        hint1: "$\\chi_A(X)$ est un polynôme scalaire $P(X) = X^n + \\dots$. $P(A)$ est une matrice, alors que $\\det(0)$ est le nombre zéro !",
        solution: "Le polynôme caractéristique $\\chi_A(X) = \\det(X I_n - A)$ est un polynôme scalaire en la variable $X$. Évaluer $\\chi_A(A)$ consiste à remplacer la variable scalaire $X$ par la matrice $A$ dans l'expression développée $\\sum a_k X^k$, ce qui donne une matrice $n \\times n$. Remplacer $X$ par $A$ à l'intérieur du déterminant n'a aucun sens mathématique (on obtiendrait un scalaire $\\det(0) = 0$ et non la matrice nulle $0_{\\mathcal{M}_n}$)."
      },
      // Palier 4 : Rigueur - Dérivation sous l'intégrale
      {
        id: 'L2-PRF-4',
        chapterId: 'L2-PRF',
        tier: 4,
        title: "Intégrales à paramètres : Hypothèse d'accroissements finis",
        statement: "Dans la démonstration de la dérivabilité de $F(x) = \\int_I f(x, t) dt$ sous l'hypothèse de domination $|\\frac{\\partial f}{\\partial x}(x, t)| \\le g(t)$ avec $g \\in L^1(I)$, quel théorème fondamental applique-t-on au taux d'accroissement $\\frac{f(x+h, t) - f(x, t)}{h}$ ?",
        type: "mcq",
        options: [
          "Le Théorème des Accroissements Finis (TAF) par rapport à la variable x pour t fixé",
          "Le Théorème de Fubini sur le produit I × [x, x+h]",
          "La formule d'inversion de Fourier",
          "Le Théorème de Weierstrass de densité polynomiale"
        ],
        correctIndex: 0,
        answer: "Le Théorème des Accroissements Finis (TAF) par rapport à la variable x pour t fixé",
        hint1: "Pour $t$ fixé, $x \\mapsto f(x, t)$ est dérivable, donc il existe $c \\in ]x, x+h[$ tel que le taux vaille la dérivée en $c$.",
        solution: "Pour chaque $t$ fixé, la fonction $u \\mapsto f(u, t)$ est dérivable. D'après le TAF, il existe $\\theta \\in ]x, x+h[$ tel que $\\frac{f(x+h, t) - f(x, t)}{h} = \\frac{\\partial f}{\\partial x}(\\theta, t)$. La domination donne alors $|\\frac{f(x+h, t) - f(x, t)}{h}| \\le g(t)$, ce qui autorise le passage à la limite par convergence dominée."
      }
    ],

    'L3-PRF': [
      // Palier 1 : Socle - Hypothèse de domination du TCD
      {
        id: 'L3-PRF-1',
        chapterId: 'L3-PRF',
        tier: 1,
        title: "TCD : Pourquoi la domination intégrable g est indispensable",
        statement: "Considérons sur $[0, 1]$ la suite de fonctions $f_n(x) = n \\mathbf{1}_{]0, 1/n]}(x)$. On a $f_n(x) \\to 0$ simplement pour tout $x \\in [0, 1]$. Pourquoi $\\int_0^1 f_n(x) dx$ ne tend-elle pas vers $\\int_0^1 0 dx = 0$ ?",
        type: "mcq",
        options: [
          "Car il n'existe aucune fonction dominante $g \\in L^1([0, 1])$ qui majore $|f_n|$ pour tout n (la plus petite majorante, $\\lfloor 1/x \\rfloor \\ge 1/x - 1$, n'est pas intégrable)",
          "Car l'intégrale de Lebesgue n'est pas définie sur [0, 1]",
          "Car les fonctions fn ne sont pas boréliennes",
          "Car l'intervalle [0, 1] n'est pas compact"
        ],
        correctIndex: 0,
        answer: "Car il n'existe aucune fonction dominante $g \\in L^1([0, 1])$ qui majore $|f_n|$ pour tout n (la plus petite majorante, $\\lfloor 1/x \\rfloor \\ge 1/x - 1$, n'est pas intégrable)",
        hint1: "Calcule $\\int_0^1 f_n(x) dx$ : elle vaut $n \\times (1/n) = 1$ pour tout $n$, donc tend vers 1 et non 0 !",
        solution: "Pour tout $n$, $\\int_0^1 f_n = n \\times \\frac{1}{n} = 1 \\ne 0$. L'hypothèse de domination $|f_n| \\le g \\in L^1$ est en défaut : toute majorante vérifie $g \\ge \\sup_n f_n = \\lfloor 1/x \\rfloor \\ge \\frac{1}{x} - 1$ sur $]0 ; 1]$, qui n'est pas intégrable. Le TCD ne peut donc pas s'appliquer sans hypothèse de domination intégrable."
      },
      // Palier 2 : Guidé - Lemme de Fatou
      {
        id: 'L3-PRF-2',
        chapterId: 'L3-PRF',
        tier: 2,
        title: "Preuve du TCD : Rôle du Lemme de Fatou sur g + fn",
        statement: "Dans la démonstration du Théorème de Convergence Dominée, pour quelle raison applique-t-on le lemme de Fatou à la suite $h_n = g + f_n$ ?",
        type: "mcq",
        options: [
          "Car le lemme de Fatou exige des fonctions positives, or $|f_n| \\le g \\implies g + f_n \\ge 0$",
          "Car la fonction g + fn est toujours dérivable",
          "Car g + fn est une suite de fonctions étagées",
          "Car cela permet d'éliminer la mesure de l'espace"
        ],
        correctIndex: 0,
        answer: "Car le lemme de Fatou exige des fonctions positives, or $|f_n| \\le g \\implies g + f_n \\ge 0$",
        hint1: "Le lemme de Fatou est le résultat fondamental pour les suites de fonctions positives mesurables.",
        solution: "Le lemme de Fatou ne s'applique qu'aux suites de fonctions positives. L'hypothèse de domination $|f_n| \\le g$ p.p. assure précisément que $g + f_n \\ge 0$ et $g - f_n \\ge 0$, permettant d'obtenir les deux inégalités $\\int f \\le \\liminf \\int f_n$ et $\\limsup \\int f_n \\le \\int f$."
      },
      // Palier 3 : Examen - Banach-Steinhaus & Baire
      {
        id: 'L3-PRF-3',
        chapterId: 'L3-PRF',
        tier: 3,
        title: "Banach-Steinhaus : Rôle de la complétude de l'espace de départ",
        statement: "Dans la démonstration du théorème de Banach-Steinhaus, à quel endroit précis intervient le fait que l'espace de départ $E$ soit un espace de **Banach** (espace vectoriel normé complet) ?",
        type: "mcq",
        options: [
          "Pour appliquer le théorème de Baire à la réunion dénombrable de fermés $E = \\bigcup_{n=1}^\\infty F_n$, qui assure qu'un des fermés est d'intérieur non vide",
          "Pour assurer que les opérateurs Ti sont inversibles",
          "Pour affirmer que la boule unité est compacte",
          "Pour justifier que la famille Ti est dénombrable"
        ],
        correctIndex: 0,
        answer: "Pour appliquer le théorème de Baire à la réunion dénombrable de fermés $E = \\bigcup_{n=1}^\\infty F_n$, qui assure qu'un des fermés est d'intérieur non vide",
        hint1: "Le lemme de Baire garantit qu'un espace métrique complet n'est pas une réunion dénombrable de fermés d'intérieur vide.",
        solution: "On écrit $E = \\bigcup_{n \\ge 1} F_n$ où $F_n = \\{x \\in E \\mid \\forall i, \\|T_i(x)\\| \\le n\\}$ sont des fermés. Comme $E$ est complet (Banach), le théorème de Baire assure qu'au moins un $F_{n_0}$ contient une boule ouverte $B(x_0, r)$, ce qui permet ensuite de borner les opérateurs sur la boule unité par translation et homothétie."
      },
      // Palier 4 : Rigueur - Théorème d'Inversion Locale
      {
        id: 'L3-PRF-4',
        chapterId: 'L3-PRF',
        tier: 4,
        title: "TIL : Pourquoi la différentielle inversible garantit une contraction locale",
        statement: "Dans la preuve du Théorème d'Inversion Locale pour $f(0) = 0$ et $df(0) = \\mathrm{Id}$, pourquoi l'application $\\varphi_y(x) = x - f(x) + y$ est-elle une contraction stricte de rapport $1/2$ sur une petite boule $\\bar{B}(0, r)$ ?",
        type: "mcq",
        options: [
          "Car $d\\varphi_y(0) = \\mathrm{Id} - df(0) = 0$, donc par continuité de $df$ en 0, $\\|d\\varphi_y(x)\\| \\le 1/2$ sur $\\bar{B}(0, r)$, et l'IAF conclut",
          "Car f est un polynôme de degré 1",
          "Car toute fonction de classe C1 est automatiquement lipschitzienne sur l'espace entier",
          "Car y est de norme nulle"
        ],
        correctIndex: 0,
        answer: "Car $d\\varphi_y(0) = \\mathrm{Id} - df(0) = 0$, donc par continuité de $df$ en 0, $\\|d\\varphi_y(x)\\| \\le 1/2$ sur $\\bar{B}(0, r)$, et l'IAF conclut",
        hint1: "La différentielle de $\\varphi_y$ en 0 s'annule : $d\\varphi_y(0) = I - I = 0$.",
        solution: "On a $d\\varphi_y(x) = \\mathrm{Id} - df(x)$. En $x = 0$, $d\\varphi_y(0) = \\mathrm{Id} - \\mathrm{Id} = 0$. Comme $f$ est $\\mathcal{C}^1$, $x \\mapsto df(x)$ est continue, donc il existe $r > 0$ tel que $\\forall x \\in \\bar{B}(0, r), \\|d\\varphi_y(x)\\| \\le 1/2$. D'après l'Inégalité des Accroissements Finis (IAF), $\\varphi_y$ est $1/2$-lipschitzienne, donc strictement contractante."
      }
    ]
  };

  // Fusion automatique dans les registres globaux
  if (typeof window !== 'undefined') {
    if (!window.MATHS_COURSES) window.MATHS_COURSES = {};
    if (!window.MATHS_EXERCISES) window.MATHS_EXERCISES = {};

    Object.assign(window.MATHS_COURSES, PROOF_COURSES);
    Object.assign(window.MATHS_EXERCISES, PROOF_EXERCISES);

    window.PROOF_COURSES = PROOF_COURSES;
    window.PROOF_EXERCISES = PROOF_EXERCISES;
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PROOF_COURSES, PROOF_EXERCISES };
  }
})();
