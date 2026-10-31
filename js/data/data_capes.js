/**
 * DATA_CAPES - Fiches de préparation complètes pour les oraux du CAPES et de l'Agrégation de Mathématiques
 * Conforme aux rapports du jury des concours et aux maquettes d'évaluation officielles.
 */

(function () {
  'use strict';

  const CAPES_LESSONS = [
    {
      "id": "capes-01",
      "num": "Leçon 01",
      "title": "Équations différentielles linéaires : résolution, structure et modélisation",
      "domain": "Analyse",
      "level": "CAPES / Agrégation",
      "prerequisites": [
        "Situation dans les programmes : en première, l'exponentielle est définie comme l'unique fonction dérivable égale à sa dérivée et valant 1 en 0 ; en terminale spécialité, résolution de $y' = ay$, $y' = ay + b$ et $y' = ay + f$ (une solution particulière étant fournie), avec des modélisations issues de la physique ou de la biologie.",
        "Dérivation et primitives : toute fonction continue sur un intervalle admet des primitives ; une fonction de dérivée nulle sur un intervalle est constante (théorème des accroissements finis).",
        "Algèbre linéaire : espaces vectoriels de fonctions, applications linéaires, noyau, sous-espaces affines, dimension.",
        "Exponentielle réelle et complexe, nombres complexes et racines d'un trinôme à discriminant négatif."
      ],
      "plan": [
        {
          "part": "I. Équations scalaires linéaires du premier ordre",
          "content": "Sur un intervalle $I$, avec $a, b$ continues, on étudie $(E) : y' + a(t)y = b(t)$ et l'équation homogène associée $(E_H)$. Théorème : les solutions de $(E_H)$ sont les fonctions $t \\mapsto Ce^{-A(t)}$, où $A$ est une primitive de $a$, et celles de $(E)$ forment une droite affine dirigée par cette droite vectorielle. Méthode de variation de la constante : on cherche $y = C(t)e^{-A(t)}$, ce qui impose $C' = be^{A}$. Théorème de Cauchy linéaire : pour tout $(t_0, y_0) \\in I \\times \\mathbb{R}$, il existe une unique solution vérifiant $y(t_0) = y_0$, définie sur tout $I$. Exemple : les solutions de $y' + 2ty = t$ sont les fonctions $t \\mapsto \\frac{1}{2} + Ce^{-t^2}$. Applications : décroissance radioactive, loi de refroidissement de Newton, charge d'un condensateur. Équations $\\alpha(t)y' + \\beta(t)y = \\gamma(t)$ où $\\alpha$ s'annule : résolution par intervalles puis raccordement."
        },
        {
          "part": "II. Équations linéaires du second ordre à coefficients constants",
          "content": "Équation $(E) : ay'' + by' + cy = f(t)$ avec $a, b, c$ réels, $a \\neq 0$ et $f$ continue. Les solutions homogènes forment un plan vectoriel, l'application $y \\mapsto (y(t_0), y'(t_0))$ étant un isomorphisme. Équation caractéristique $ar^2 + br + c = 0$ de discriminant $\\Delta$ : si $\\Delta > 0$, base $(e^{r_1t}, e^{r_2t})$ ; si $\\Delta = 0$, base $(e^{rt}, te^{rt})$ ; si $\\Delta \\lt 0$ et $r = \\alpha \\pm i\\beta$, base $(e^{\\alpha t}\\cos(\\beta t), e^{\\alpha t}\\sin(\\beta t))$. Second membre $P(t)e^{mt}$ : il existe une solution particulière $Q(t)e^{mt}$ avec $\\deg Q = \\deg P + k$, où $k$ est la multiplicité de $m$ comme racine caractéristique (résonance si $k \\ge 1$). Principe de superposition. Exemple : $y'' + y = \\cos t$ admet la solution particulière $t \\mapsto \\frac{t}{2}\\sin t$."
        },
        {
          "part": "III. Systèmes différentiels linéaires et modélisation",
          "content": "Système $Y' = AY + B(t)$ avec $A \\in \\mathcal{M}_n(\\mathbb{R})$. Exponentielle de matrice $e^{tA} = \\sum_{k \\ge 0}\\frac{t^kA^k}{k!}$, dérivable de dérivée $Ae^{tA}$ ; les solutions de $Y' = AY$ sont les $t \\mapsto e^{tA}Y_0$. Calcul pratique par diagonalisation ou trigonalisation de $A$. Une équation scalaire d'ordre 2 se ramène à un système d'ordre 1 en posant $Y = (y, y')$. Modélisations : oscillateur amorti $x'' + 2\\lambda x' + \\omega_0^2x = 0$ avec ses régimes apériodique, critique et pseudo-périodique ; circuit RLC ; modèle proies-prédateurs linéarisé au voisinage d'un équilibre."
        }
      ],
      "keyTheorem": {
        "title": "Structure de l'ensemble des solutions d'une équation linéaire du premier ordre",
        "statement": "Soit $I$ un intervalle de $\\mathbb{R}$, $a, b$ continues sur $I$ à valeurs réelles, et $A$ une primitive de $a$ sur $I$. (i) L'ensemble $\\mathcal{S}_H$ des solutions de $(E_H) : y' + a(t)y = 0$ est la droite vectorielle $\\{t \\mapsto Ce^{-A(t)}, C \\in \\mathbb{R}\\}$. (ii) L'ensemble $\\mathcal{S}$ des solutions de $(E) : y' + a(t)y = b(t)$ est non vide, et pour toute solution $y_p$, $\\mathcal{S} = y_p + \\mathcal{S}_H$. (iii) Pour tout $(t_0, y_0) \\in I \\times \\mathbb{R}$, il existe une unique solution de $(E)$ telle que $y(t_0) = y_0$.",
        "proof": "1. **Existence de $A$.** La fonction $a$ est continue sur l'intervalle $I$, donc admet une primitive $A$ (théorème fondamental de l'analyse).\n2. **Équation homogène.** Soit $y$ dérivable sur $I$ et $z = ye^{A}$. Alors $z' = (y' + ay)e^{A}$. Donc $y \\in \\mathcal{S}_H$ si et seulement si $z' = 0$ sur $I$, si et seulement si $z$ est constante, car $I$ est un intervalle (accroissements finis). Ainsi $y \\in \\mathcal{S}_H \\iff y = Ce^{-A}$ pour une constante $C$. Comme $e^{-A}$ ne s'annule pas, $\\mathcal{S}_H$ est une droite vectorielle.\n3. **Solution particulière (variation de la constante).** On cherche $y = Ce^{-A}$ avec $C$ dérivable : $y' + ay = C'e^{-A}$, donc $y$ est solution de $(E)$ si et seulement si $C' = be^{A}$. La fonction $be^{A}$ est continue, $C(t) = \\int_{t_0}^{t}b(s)e^{A(s)}\\,ds$ convient : $\\mathcal{S} \\neq \\emptyset$.\n4. **Structure affine.** Soit $y_p \\in \\mathcal{S}$. Par linéarité, $(y - y_p)' + a(y - y_p) = b - b = 0$ pour tout $y \\in \\mathcal{S}$, et réciproquement $y_p + h \\in \\mathcal{S}$ pour tout $h \\in \\mathcal{S}_H$. Donc $\\mathcal{S} = y_p + \\mathcal{S}_H$.\n5. **Problème de Cauchy.** Les solutions sont les $y = y_p + Ce^{-A}$, et $y(t_0) = y_0$ équivaut à $C = (y_0 - y_p(t_0))e^{A(t_0)}$ : il existe une unique valeur de $C$, donc une unique solution, définie sur tout $I$."
      },
      "developments": [
        "Oscillateur harmonique amorti (niveau L1, lien avec la physique de terminale) : résolution de $x'' + 2\\lambda x' + \\omega_0^2x = 0$ avec $\\lambda > 0$ selon le signe de $\\lambda^2 - \\omega_0^2$, preuve que toute solution tend vers 0, et vérification que le régime critique $\\lambda = \\omega_0$ maximise le taux de décroissance exponentielle.",
        "Exponentielle d'une matrice $2 \\times 2$ (niveau L2) : par le théorème de Cayley-Hamilton, $A^2 = (\\mathrm{tr}A)A - (\\det A)I_2$, donc $e^{tA} = \\alpha(t)I_2 + \\beta(t)A$ ; on détermine $\\alpha$ et $\\beta$ à l'aide des valeurs propres, puis on résout le système $Y' = AY$.",
        "Variation des constantes à l'ordre 2 (niveau L2) : recherche de $y = \\lambda(t)y_1 + \\mu(t)y_2$ sous la condition $\\lambda'y_1 + \\mu'y_2 = 0$, rôle du wronskien qui ne s'annule pas, et exemple de $y'' + y = \\frac{1}{\\cos t}$ sur $]-\\frac{\\pi}{2} ; \\frac{\\pi}{2}[$.",
        "Équation $y' = ay + b$ en terminale (niveau lycée) : unicité de la solution par l'étude de $t \\mapsto (y(t) - y_\\ast(t))e^{-at}$, solution d'équilibre $-\\frac{b}{a}$ et comportement en $+\\infty$ selon le signe de $a$, appliqués à la loi de refroidissement de Newton."
      ],
      "juryTips": [
        "Précisez toujours l'intervalle de résolution. Pour une équation $\\alpha(t)y' + \\beta(t)y = \\gamma(t)$ où $\\alpha$ s'annule, on résout sur chaque intervalle où $\\alpha$ ne s'annule pas, puis on étudie le raccordement : pour $ty' - 2y = 0$, les solutions sur $\\mathbb{R}$ sont les fonctions égales à $Ct^2$ sur $[0 ; +\\infty[$ et à $Dt^2$ sur $]-\\infty ; 0]$, ce qui forme un espace de dimension 2 et non 1.",
        "L'argument « dérivée nulle implique constante » exige un intervalle : sur $\\mathbb{R}^{\\ast}$, la fonction égale à 1 sur $]0 ; +\\infty[$ et à $-1$ sur $]-\\infty ; 0[$ a une dérivée nulle sans être constante.",
        "L'existence globale des solutions est propre au cas linéaire : l'équation non linéaire $y' = y^2$ avec $y(0) = 1$ a pour solution maximale $t \\mapsto \\frac{1}{1-t}$, définie sur $]-\\infty ; 1[$, qui explose en temps fini.",
        "En cas de résonance, $y'' + \\omega^2y = \\cos(\\omega t)$ n'admet pas de solution de la forme $A\\cos(\\omega t) + B\\sin(\\omega t)$ mais admet $t \\mapsto \\frac{t}{2\\omega}\\sin(\\omega t)$ : sachez l'expliquer par le fait que $i\\omega$ est racine caractéristique.",
        "Le jury demande de situer la notion : en première, l'unicité de la fonction égale à sa dérivée et valant 1 en 0 se démontre en étudiant le quotient de deux telles fonctions, ce qui est le même argument que l'étape 2 de la preuve de structure."
      ]
    },
    {
      "id": "capes-02",
      "num": "Leçon 02",
      "title": "Réduction des endomorphismes : éléments propres, diagonalisation et trigonalisation",
      "domain": "Algèbre",
      "level": "CAPES / Agrégation",
      "prerequisites": [
        "Situation dans les programmes : la réduction n'est pas enseignée au lycée, mais l'option mathématiques expertes de terminale étudie les matrices, les suites de matrices colonnes $U_{n+1} = AU_n$, le calcul de puissances de matrices et les marches aléatoires sur un graphe, où la diagonalisation intervient implicitement.",
        "Espaces vectoriels de dimension finie, rang et théorème du rang, matrice d'un endomorphisme et changement de base.",
        "Déterminant, matrices semblables, trace.",
        "Polynômes sur $\\mathbb{K} = \\mathbb{R}$ ou $\\mathbb{C}$ : division euclidienne, racines et multiplicité, théorème de d'Alembert-Gauss, polynômes premiers entre eux et identité de Bézout."
      ],
      "plan": [
        {
          "part": "I. Éléments propres et sous-espaces stables",
          "content": "Soit $E$ un $\\mathbb{K}$-espace vectoriel de dimension finie $n$ et $u \\in \\mathcal{L}(E)$. Un scalaire $\\lambda$ est valeur propre de $u$ s'il existe $x \\neq 0$ tel que $u(x) = \\lambda x$ ; sous-espace propre $E_\\lambda(u) = \\ker(u - \\lambda\\,\\mathrm{id})$, spectre $\\mathrm{Sp}(u)$. Sous-espaces stables ; si $u$ et $v$ commutent, les sous-espaces propres de $u$ sont stables par $v$. Théorème : des sous-espaces propres associés à des valeurs propres deux à deux distinctes sont en somme directe ; corollaire : une famille de vecteurs propres associés à des valeurs propres distinctes est libre, et $u$ possède au plus $n$ valeurs propres. Exemple : la rotation d'angle $\\frac{\\pi}{2}$ du plan euclidien n'a aucune valeur propre réelle."
        },
        {
          "part": "II. Polynôme caractéristique et diagonalisation",
          "content": "Polynôme caractéristique $\\chi_u(X) = \\det(X\\,\\mathrm{id} - u)$, unitaire de degré $n$, de coefficient $-\\mathrm{tr}(u)$ en $X^{n-1}$ et de coefficient constant $(-1)^n\\det(u)$ ; ses racines dans $\\mathbb{K}$ sont les valeurs propres. Multiplicité algébrique $m_\\lambda$ et dimension $d_\\lambda = \\dim E_\\lambda$, avec $1 \\le d_\\lambda \\le m_\\lambda$. Théorème : $u$ est diagonalisable si et seulement si $\\chi_u$ est scindé sur $\\mathbb{K}$ et $d_\\lambda = m_\\lambda$ pour toute valeur propre ; condition suffisante : $\\chi_u$ scindé à racines simples. Contre-exemple : $\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$ n'est pas diagonalisable car $d_1 = 1$ et $m_1 = 2$. Applications : calcul de $A^k$ grâce à $A = PDP^{-1}$, suites récurrentes linéaires, systèmes différentiels."
        },
        {
          "part": "III. Polynômes d'endomorphismes et trigonalisation",
          "content": "Polynômes annulateurs, polynôme minimal $\\pi_u$, dont les racines sont exactement les valeurs propres. Lemme des noyaux : si $P = P_1 \\cdots P_r$ avec des $P_i$ premiers entre eux deux à deux, alors $\\ker P(u) = \\ker P_1(u) \\oplus \\cdots \\oplus \\ker P_r(u)$. Théorème : $u$ est diagonalisable si et seulement s'il annule un polynôme scindé à racines simples. Théorème de Cayley-Hamilton : $\\chi_u(u) = 0$. Trigonalisation : $u$ est trigonalisable si et seulement si $\\chi_u$ est scindé ; toute matrice complexe est trigonalisable. Exemples : un projecteur ($p^2 = p$) et une symétrie ($s^2 = \\mathrm{id}$) sont diagonalisables ; une matrice nilpotente non nulle ne l'est pas."
        }
      ],
      "keyTheorem": {
        "title": "Critère de diagonalisabilité par les sous-espaces propres",
        "statement": "Soit $E$ un $\\mathbb{K}$-espace vectoriel de dimension finie $n \\ge 1$ et $u \\in \\mathcal{L}(E)$, de valeurs propres distinctes $\\lambda_1, \\dots, \\lambda_k$. Les assertions suivantes sont équivalentes : (i) $u$ est diagonalisable, c'est-à-dire qu'il existe une base de $E$ formée de vecteurs propres de $u$ ; (ii) $E = E_{\\lambda_1} \\oplus \\cdots \\oplus E_{\\lambda_k}$ ; (iii) $\\sum_{i=1}^{k}\\dim E_{\\lambda_i} = n$ ; (iv) $\\chi_u$ est scindé sur $\\mathbb{K}$ et, pour tout $i$, $\\dim E_{\\lambda_i}$ est égale à la multiplicité $m_{\\lambda_i}$ de $\\lambda_i$ comme racine de $\\chi_u$.",
        "proof": "1. **Lemme : la somme $E_{\\lambda_1} + \\cdots + E_{\\lambda_k}$ est directe.** Récurrence sur $k$, le cas $k = 1$ étant clair. Soit $v_i \\in E_{\\lambda_i}$ avec $v_1 + \\cdots + v_k = 0$. En appliquant $u$ : $\\lambda_1v_1 + \\cdots + \\lambda_kv_k = 0$. En retranchant $\\lambda_k$ fois la première relation : $\\sum_{i=1}^{k-1}(\\lambda_i - \\lambda_k)v_i = 0$, avec $(\\lambda_i - \\lambda_k)v_i \\in E_{\\lambda_i}$. Par hypothèse de récurrence, $(\\lambda_i - \\lambda_k)v_i = 0$, donc $v_i = 0$ pour $i \\le k - 1$ car $\\lambda_i \\neq \\lambda_k$ ; enfin $v_k = 0$.\n2. **Lemme : $d_\\lambda \\le m_\\lambda$.** Soit $d = \\dim E_\\lambda$ et $(e_1, \\dots, e_d)$ une base de $E_\\lambda$, complétée en une base $\\mathcal{B}$ de $E$. La matrice de $u$ dans $\\mathcal{B}$ est triangulaire par blocs, de blocs diagonaux $\\lambda I_d$ et $C$. Donc $\\chi_u = (X - \\lambda)^d\\chi_C$, et $(X - \\lambda)^d$ divise $\\chi_u$, soit $d \\le m_\\lambda$.\n3. **(i) implique (ii).** Une base de vecteurs propres montre que $E = E_{\\lambda_1} + \\cdots + E_{\\lambda_k}$ ; la somme est directe par l'étape 1.\n4. **(ii) équivaut à (iii).** La somme étant directe, $\\dim(E_{\\lambda_1} \\oplus \\cdots \\oplus E_{\\lambda_k}) = \\sum \\dim E_{\\lambda_i}$ ; ce sous-espace est égal à $E$ si et seulement si sa dimension vaut $n$.\n5. **(ii) implique (i).** La concaténation de bases des $E_{\\lambda_i}$ est une base de $E$ formée de vecteurs propres.\n6. **(i) implique (iv).** Dans une base de vecteurs propres, la matrice de $u$ est diagonale, donc $\\chi_u = \\prod_{i=1}^{k}(X - \\lambda_i)^{d_{\\lambda_i}}$ : $\\chi_u$ est scindé et $m_{\\lambda_i} = d_{\\lambda_i}$.\n7. **(iv) implique (iii).** Si $\\chi_u$ est scindé, la somme des multiplicités de ses racines est son degré $n$, donc $\\sum d_{\\lambda_i} = \\sum m_{\\lambda_i} = n$."
      },
      "developments": [
        "Lemme des noyaux et critère « $u$ est diagonalisable si et seulement s'il annule un polynôme scindé à racines simples » (niveau L2) : preuve par l'identité de Bézout dans $\\mathbb{K}[X]$, puis application : tout endomorphisme vérifiant $u^3 = u$ est diagonalisable.",
        "Suite de Fibonacci par la réduction (niveau L1-L2, lien avec les mathématiques expertes) : la matrice $\\begin{pmatrix} 1 & 1 \\\\ 1 & 0 \\end{pmatrix}$ a pour valeurs propres $\\varphi = \\frac{1 + \\sqrt{5}}{2}$ et $-\\frac{1}{\\varphi}$, d'où la formule $F_n = \\frac{1}{\\sqrt{5}}\\left(\\varphi^n - \\left(-\\frac{1}{\\varphi}\\right)^n\\right)$.",
        "Théorème de Cayley-Hamilton (niveau L2) : preuve par les sous-espaces cycliques et les matrices compagnons, ou par densité des matrices diagonalisables dans $\\mathcal{M}_n(\\mathbb{C})$.",
        "Marche aléatoire à deux états (lien avec l'option mathématiques expertes) : diagonalisation de la matrice de transition $\\begin{pmatrix} 1-p & p \\\\ q & 1-q \\end{pmatrix}$, de valeurs propres $1$ et $1 - p - q$, et convergence vers la loi stationnaire $\\left(\\frac{q}{p+q}, \\frac{p}{p+q}\\right)$ lorsque $0 \\lt p + q \\lt 2$."
      ],
      "juryTips": [
        "Ne confondez pas polynôme caractéristique et polynôme minimal : pour $u = \\mathrm{id}_E$ avec $\\dim E = n$, $\\chi_u = (X - 1)^n$ alors que $\\pi_u = X - 1$.",
        "Le corps de base compte : $\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ n'est pas diagonalisable sur $\\mathbb{R}$, faute de valeur propre réelle, mais l'est sur $\\mathbb{C}$, avec les valeurs propres $i$ et $-i$.",
        "Avoir $n$ valeurs propres distinctes est une condition suffisante, non nécessaire : $I_n$ est diagonale et n'a qu'une seule valeur propre.",
        "Une matrice symétrique réelle est diagonalisable dans une base orthonormée (théorème spectral), mais une matrice symétrique complexe ne l'est pas toujours : $\\begin{pmatrix} 1 & i \\\\ i & -1 \\end{pmatrix}$ est nilpotente et non nulle.",
        "Le jury vérifie la maîtrise du calcul : pour $A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$, il faut trouver rapidement $\\mathrm{Sp}(A) = \\{1, 3\\}$, les vecteurs propres $(1, -1)$ et $(1, 1)$, puis exprimer $A^n$."
      ]
    },
    {
      "id": "capes-03",
      "num": "Leçon 03",
      "title": "Séries de Fourier : coefficients, convergence et formule de Parseval",
      "domain": "Analyse",
      "level": "CAPES / Agrégation",
      "prerequisites": [
        "Situation dans les programmes : fonctions trigonométriques, parité et périodicité (première et terminale), calcul intégral et intégration par parties (terminale spécialité) ; en physique-chimie, décomposition d'un signal périodique en harmoniques et notion de spectre.",
        "Espaces préhilbertiens complexes, familles orthonormées, inégalité de Bessel et projection orthogonale sur un sous-espace de dimension finie.",
        "Intégration des fonctions continues par morceaux sur un segment, continuité uniforme sur un segment.",
        "Suites et séries de fonctions : convergence simple, uniforme et normale, intégration terme à terme en cas de convergence uniforme."
      ],
      "plan": [
        {
          "part": "I. Coefficients de Fourier et système trigonométrique",
          "content": "On note $\\mathcal{D}$ l'espace des fonctions $f : \\mathbb{R} \\to \\mathbb{C}$, $2\\pi$-périodiques et continues par morceaux, muni de $\\langle f, g \\rangle = \\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi}f(t)\\overline{g(t)}\\,dt$. La famille $(e_n)_{n \\in \\mathbb{Z}}$, $e_n(t) = e^{int}$, est orthonormée. Coefficients $c_n(f) = \\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi}f(t)e^{-int}\\,dt = \\langle f, e_n \\rangle$, et pour $n \\ge 0$, $a_n(f) = \\frac{1}{\\pi}\\int_{-\\pi}^{\\pi}f(t)\\cos(nt)\\,dt$, $b_n(f) = \\frac{1}{\\pi}\\int_{-\\pi}^{\\pi}f(t)\\sin(nt)\\,dt$, avec $c_0 = \\frac{a_0}{2}$ et $c_{\\pm n} = \\frac{a_n \\mp ib_n}{2}$ pour $n \\ge 1$. Sommes partielles $S_N(f) = \\sum_{|n| \\le N}c_n(f)e_n$. Propriétés : si $f$ est paire, $b_n = 0$ ; si $f$ est continue et de classe $\\mathcal{C}^1$ par morceaux, $c_n(f') = in\\,c_n(f)$ ; lemme de Riemann-Lebesgue $c_n(f) \\to 0$."
        },
        {
          "part": "II. Convergence ponctuelle et uniforme",
          "content": "Noyau de Dirichlet $D_N(t) = \\sum_{|n| \\le N}e^{int} = \\frac{\\sin\\left((N + \\frac{1}{2})t\\right)}{\\sin(t/2)}$ pour $t \\notin 2\\pi\\mathbb{Z}$, et $S_N(f)(x) = \\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi}f(x - t)D_N(t)\\,dt$. Théorème de Dirichlet : si $f$ est de classe $\\mathcal{C}^1$ par morceaux, $S_N(f)(x)$ converge vers $\\frac{f(x^+) + f(x^-)}{2}$ en tout réel $x$. Théorème : si $f$ est continue et de classe $\\mathcal{C}^1$ par morceaux, la série $\\sum |c_n(f)|$ converge et la série de Fourier converge normalement vers $f$. Exemple : la fonction créneau et le phénomène de Gibbs. Contre-exemple : il existe des fonctions continues dont la série de Fourier diverge en un point."
        },
        {
          "part": "III. Convergence en moyenne quadratique et formule de Parseval",
          "content": "$S_N(f)$ est la projection orthogonale de $f$ sur l'espace $\\mathcal{P}_N$ des polynômes trigonométriques de degré au plus $N$ ; inégalité de Bessel $\\sum_{|n| \\le N}|c_n(f)|^2 \\le \\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi}|f|^2$. Théorème de Fejér : pour $f$ continue, les moyennes de Cesàro des $S_N(f)$ convergent uniformément vers $f$ ; densité des polynômes trigonométriques. Formule de Parseval, équivalente à $\\|f - S_N(f)\\|_2 \\to 0$. Applications : avec la fonction $2\\pi$-périodique égale à $x^2$ sur $[-\\pi ; \\pi]$, $\\sum_{n \\ge 1}\\frac{1}{n^2} = \\frac{\\pi^2}{6}$ et $\\sum_{n \\ge 1}\\frac{1}{n^4} = \\frac{\\pi^4}{90}$ ; injectivité de $f \\mapsto (c_n(f))_n$ sur les fonctions continues ; équation de la chaleur sur un cercle."
        }
      ],
      "keyTheorem": {
        "title": "Formule de Parseval pour une fonction continue par morceaux",
        "statement": "Soit $f : \\mathbb{R} \\to \\mathbb{C}$ une fonction $2\\pi$-périodique et continue par morceaux. Alors $\\|f - S_N(f)\\|_2 \\to 0$ quand $N \\to +\\infty$, et $\\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi}|f(t)|^2\\,dt = \\sum_{n=-\\infty}^{+\\infty}|c_n(f)|^2 = \\frac{|a_0|^2}{4} + \\frac{1}{2}\\sum_{n=1}^{+\\infty}\\left(|a_n|^2 + |b_n|^2\\right)$, où $\\|g\\|_2^2 = \\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi}|g|^2$.",
        "proof": "1. **Projection orthogonale.** La forme $\\langle \\cdot, \\cdot \\rangle$ est sesquilinéaire, hermitienne et positive (seulement semi-définie sur $\\mathcal{D}$, ce qui suffit pour Pythagore). Pour $|k| \\le N$, $\\langle f - S_N(f), e_k \\rangle = c_k(f) - c_k(f) = 0$ par orthonormalité des $e_n$. Donc $f - S_N(f)$ est orthogonal à $\\mathcal{P}_N$, et $\\|f\\|_2^2 = \\|S_N(f)\\|_2^2 + \\|f - S_N(f)\\|_2^2$ avec $\\|S_N(f)\\|_2^2 = \\sum_{|n| \\le N}|c_n(f)|^2$.\n2. **Meilleure approximation.** Pour $P \\in \\mathcal{P}_N$, $f - P = (f - S_N(f)) + (S_N(f) - P)$ est une somme de deux vecteurs orthogonaux, d'où $\\|f - P\\|_2 \\ge \\|f - S_N(f)\\|_2$. En particulier, $N \\mapsto \\|f - S_N(f)\\|_2$ est décroissante, puisque $\\mathcal{P}_N \\subset \\mathcal{P}_{N+1}$.\n3. **Théorème de Fejér pour $g$ continue.** Soit $\\sigma_N(g) = \\frac{1}{N}\\sum_{k=0}^{N-1}S_k(g) \\in \\mathcal{P}_{N-1}$. On a $\\sigma_N(g)(x) = \\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi}g(x - t)K_N(t)\\,dt$ avec $K_N(t) = \\frac{1}{N}\\left(\\frac{\\sin(Nt/2)}{\\sin(t/2)}\\right)^2$. Ce noyau est positif, d'intégrale $\\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi}K_N = 1$, et $K_N(t) \\le \\frac{1}{N\\sin^2(\\delta/2)}$ pour $\\delta \\le |t| \\le \\pi$. Soit $\\varepsilon > 0$ ; par continuité uniforme de $g$, il existe $\\delta$ tel que $|t| \\lt \\delta$ implique $|g(x - t) - g(x)| \\le \\varepsilon$ pour tout $x$. Alors $|\\sigma_N(g)(x) - g(x)| \\le \\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi}|g(x - t) - g(x)|K_N(t)\\,dt \\le \\varepsilon + \\frac{2\\|g\\|_\\infty}{N\\sin^2(\\delta/2)}$, quantité inférieure à $2\\varepsilon$ pour $N$ assez grand, uniformément en $x$.\n4. **Approximation de $f$ par une fonction continue.** La fonction $f$ est bornée par un réel $M$ et n'a qu'un nombre fini $p$ de discontinuités par période. En remplaçant $f$ par une fonction affine sur un intervalle de longueur $\\eta$ autour de chacune d'elles, on obtient $g$ continue, $2\\pi$-périodique, avec $|g| \\le M$ et $g = f$ hors d'une réunion d'intervalles de longueur totale $p\\eta$ par période. Donc $\\|f - g\\|_2^2 \\le \\frac{p\\eta(2M)^2}{2\\pi}$, qui est inférieur à $\\varepsilon^2$ pour $\\eta$ assez petit.\n5. **Conclusion.** Pour $N$ assez grand, $\\sigma_{N+1}(g) \\in \\mathcal{P}_N$ et, par l'étape 2, $\\|f - S_N(f)\\|_2 \\le \\|f - \\sigma_{N+1}(g)\\|_2 \\le \\|f - g\\|_2 + \\|g - \\sigma_{N+1}(g)\\|_\\infty \\le 3\\varepsilon$. Donc $\\|f - S_N(f)\\|_2 \\to 0$, et l'égalité de l'étape 1 donne $\\sum_{n \\in \\mathbb{Z}}|c_n(f)|^2 = \\|f\\|_2^2$.\n6. **Forme réelle.** $|c_0|^2 = \\frac{|a_0|^2}{4}$ et, pour $n \\ge 1$, $|c_n|^2 + |c_{-n}|^2 = \\frac{|a_n - ib_n|^2 + |a_n + ib_n|^2}{4} = \\frac{|a_n|^2 + |b_n|^2}{2}$ par l'identité du parallélogramme."
      },
      "developments": [
        "Calcul de $\\sum \\frac{1}{n^2}$ et de $\\sum \\frac{1}{n^4}$ (niveau L2) : pour la fonction $2\\pi$-périodique égale à $x^2$ sur $[-\\pi ; \\pi]$, $a_0 = \\frac{2\\pi^2}{3}$ et $a_n = \\frac{4(-1)^n}{n^2}$ ; la convergence normale au point $\\pi$ donne $\\frac{\\pi^2}{6}$ et la formule de Parseval donne $\\frac{\\pi^4}{90}$.",
        "Théorème de Fejér (niveau L3) : calcul du noyau $K_N$, positivité, concentration près de 0 et convergence uniforme des moyennes de Cesàro pour $f$ continue ; corollaires : densité des polynômes trigonométriques et unicité des coefficients de Fourier d'une fonction continue.",
        "Inégalité isopérimétrique (niveau L3) : pour une courbe fermée de classe $\\mathcal{C}^1$, de longueur $L$, délimitant un domaine d'aire $\\mathcal{A}$, on a $4\\pi\\mathcal{A} \\le L^2$, avec égalité pour le cercle ; preuve par la formule de Parseval appliquée à une paramétrisation par l'abscisse curviligne.",
        "Équation de la chaleur sur un cercle (niveau L3) : recherche de solutions $u(x, t) = \\sum_{n \\in \\mathbb{Z}}c_ne^{-n^2t}e^{inx}$, justification de la régularité pour $t > 0$ et convergence vers la moyenne de la donnée initiale."
      ],
      "juryTips": [
        "Le phénomène de Gibbs : pour la fonction créneau, les sommes partielles dépassent la valeur de la fonction près d'une discontinuité d'environ 9 % de l'amplitude du saut, et ce dépassement ne tend pas vers 0. Il n'y a donc pas convergence uniforme, ce qui est cohérent avec le fait qu'une limite uniforme de fonctions continues est continue.",
        "La continuité ne suffit pas pour la convergence ponctuelle : il existe des fonctions continues dont la série de Fourier diverge en un point. Les hypothèses du théorème de Dirichlet ne sont pas décoratives.",
        "Sur les fonctions continues par morceaux, $\\langle f, g \\rangle = \\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi}f\\overline{g}$ n'est pas défini positif : une fonction nulle sauf en un point par période a une norme nulle. On travaille sur les fonctions continues ou l'on identifie les fonctions égales sauf en un nombre fini de points par période.",
        "Vérifiez les conventions : avec $a_0 = \\frac{1}{\\pi}\\int_{-\\pi}^{\\pi}f$, le terme constant de la série est $\\frac{a_0}{2}$ et Parseval fait intervenir $\\frac{|a_0|^2}{4}$, non $|a_0|^2$.",
        "Lien avec le lycée : savoir montrer à un élève de terminale que $\\int_0^{2\\pi}\\cos(nt)\\cos(mt)\\,dt = 0$ pour des entiers naturels $n \\neq m$, et relier les coefficients aux harmoniques d'un son étudiés en physique."
      ]
    },
    {
      "id": "capes-04",
      "num": "Leçon 04",
      "title": "Variables aléatoires réelles discrètes : loi, espérance, variance et lois classiques",
      "domain": "Probabilités",
      "level": "CAPES / Agrégation",
      "prerequisites": [
        "Situation dans les programmes : en première, variable aléatoire sur un univers fini, loi, espérance, variance et écart-type ; en terminale spécialité, loi binomiale, somme de variables aléatoires, inégalité de Bienaymé-Tchebychev, inégalité de concentration et loi faible des grands nombres ; la loi géométrique figure dans l'option mathématiques complémentaires.",
        "Espaces probabilisés : tribu, probabilité, $\\sigma$-additivité, probabilités conditionnelles, formule des probabilités totales, indépendance.",
        "Séries numériques à termes positifs, convergence absolue, sommation par paquets.",
        "Dénombrement : coefficients binomiaux et formule du binôme."
      ],
      "plan": [
        {
          "part": "I. Variables aléatoires discrètes et lois",
          "content": "Sur un espace probabilisé $(\\Omega, \\mathcal{A}, P)$, une variable aléatoire discrète est une application $X : \\Omega \\to \\mathbb{R}$ dont l'image $X(\\Omega)$ est finie ou dénombrable et telle que $\\{X = x\\} \\in \\mathcal{A}$ pour tout $x$. Sa loi est la famille $(P(X = x))_{x \\in X(\\Omega)}$, de somme 1 ; réciproquement, toute famille de réels positifs de somme 1 indexée par une partie dénombrable de $\\mathbb{R}$ est la loi d'une variable aléatoire. Fonction de répartition $F_X(t) = P(X \\le t)$ : croissante, continue à droite, de limites 0 en $-\\infty$ et 1 en $+\\infty$. Couples de variables, lois marginales, indépendance : $P(X = x, Y = y) = P(X = x)P(Y = y)$ pour tous $x, y$."
        },
        {
          "part": "II. Espérance, variance et inégalités",
          "content": "$X$ admet une espérance si $\\sum |x|P(X = x)$ converge, et alors $E(X) = \\sum xP(X = x)$. Linéarité, positivité, croissance. Théorème de transfert : $g(X)$ admet une espérance si et seulement si $\\sum |g(x)|P(X = x)$ converge, et $E(g(X)) = \\sum g(x)P(X = x)$. Variance $V(X) = E\\left((X - E(X))^2\\right) = E(X^2) - E(X)^2$, et $V(aX + b) = a^2V(X)$. Si $X$ et $Y$ sont indépendantes et admettent une variance, $E(XY) = E(X)E(Y)$ et $V(X + Y) = V(X) + V(Y)$. Inégalités de Markov et de Bienaymé-Tchebychev."
        },
        {
          "part": "III. Lois usuelles et loi faible des grands nombres",
          "content": "Loi de Bernoulli $\\mathcal{B}(p)$ : espérance $p$, variance $p(1-p)$. Loi binomiale $\\mathcal{B}(n, p)$, loi de la somme de $n$ variables de Bernoulli indépendantes de paramètre $p$ : espérance $np$, variance $np(1-p)$. Loi géométrique $\\mathcal{G}(p)$ sur $\\mathbb{N}^{\\ast}$, rang du premier succès : $P(X = k) = (1-p)^{k-1}p$, espérance $\\frac{1}{p}$, variance $\\frac{1-p}{p^2}$, absence de mémoire. Loi de Poisson $\\mathcal{P}(\\lambda)$ : espérance et variance égales à $\\lambda$. Fonction génératrice $G_X(s) = E(s^X)$ pour $X$ à valeurs dans $\\mathbb{N}$. Loi faible des grands nombres pour des variables indépendantes de même loi admettant une variance. Applications : estimation d'une proportion, taille d'échantillon, simulation."
        }
      ],
      "keyTheorem": {
        "title": "Inégalités de Markov et de Bienaymé-Tchebychev, loi faible des grands nombres",
        "statement": "Soit $X$ une variable aléatoire réelle discrète. (i) Si $X$ est à valeurs positives et admet une espérance, alors pour tout $a > 0$, $P(X \\ge a) \\le \\frac{E(X)}{a}$. (ii) Si $X$ admet une variance, alors pour tout $\\varepsilon > 0$, $P(|X - E(X)| \\ge \\varepsilon) \\le \\frac{V(X)}{\\varepsilon^2}$. (iii) Si $X_1, \\dots, X_n$ sont indépendantes, de même loi, d'espérance $m$ et de variance $\\sigma^2$, et si $M_n = \\frac{X_1 + \\cdots + X_n}{n}$, alors pour tout $\\varepsilon > 0$, $P(|M_n - m| \\ge \\varepsilon) \\le \\frac{\\sigma^2}{n\\varepsilon^2}$, qui tend vers 0 quand $n \\to +\\infty$.",
        "proof": "1. **Markov.** Les valeurs $x$ de $X$ sont positives et la série $\\sum xP(X = x)$ converge. En séparant les valeurs $x \\ge a$ et $x \\lt a$ : $E(X) = \\sum_{x \\ge a}xP(X = x) + \\sum_{x \\lt a}xP(X = x) \\ge \\sum_{x \\ge a}xP(X = x)$, car la seconde somme est positive. Puis $\\sum_{x \\ge a}xP(X = x) \\ge a\\sum_{x \\ge a}P(X = x) = aP(X \\ge a)$ par $\\sigma$-additivité. Donc $P(X \\ge a) \\le \\frac{E(X)}{a}$.\n2. **Bienaymé-Tchebychev.** La variable $Y = (X - E(X))^2$ est discrète, positive, et admet l'espérance $V(X)$. Comme $\\varepsilon > 0$, les événements $\\{|X - E(X)| \\ge \\varepsilon\\}$ et $\\{Y \\ge \\varepsilon^2\\}$ sont égaux. Markov appliqué à $Y$ avec $a = \\varepsilon^2$ donne $P(|X - E(X)| \\ge \\varepsilon) \\le \\frac{V(X)}{\\varepsilon^2}$.\n3. **Moments de $M_n$.** Par linéarité, $E(M_n) = \\frac{1}{n}\\sum_{k=1}^{n}E(X_k) = m$. Par indépendance, $V(X_1 + \\cdots + X_n) = \\sum_{k=1}^{n}V(X_k) = n\\sigma^2$, donc $V(M_n) = \\frac{n\\sigma^2}{n^2} = \\frac{\\sigma^2}{n}$.\n4. **Conclusion.** Bienaymé-Tchebychev appliqué à $M_n$ donne $P(|M_n - m| \\ge \\varepsilon) \\le \\frac{\\sigma^2}{n\\varepsilon^2}$, majorant qui tend vers 0."
      },
      "developments": [
        "Approximation de la loi binomiale par la loi de Poisson (niveau L1-L2) : si $np_n \\to \\lambda > 0$, alors pour tout entier $k$, $\\binom{n}{k}p_n^k(1-p_n)^{n-k} \\to e^{-\\lambda}\\frac{\\lambda^k}{k!}$ ; preuve par équivalents et par $\\ln(1 - p_n) \\sim -p_n$, interprétation comme loi des événements rares.",
        "Caractérisation de la loi géométrique par l'absence de mémoire (niveau L1) : si $X$ est à valeurs dans $\\mathbb{N}^{\\ast}$, avec $P(X > k) > 0$ et $P(X > n + k \\mid X > n) = P(X > k)$ pour tous $n, k \\in \\mathbb{N}$, alors $u_k = P(X > k)$ vérifie $u_{n+k} = u_nu_k$, donc $u_k = u_1^k$, et $X$ suit la loi $\\mathcal{G}(p)$ avec $p = P(X = 1)$.",
        "Problème du collectionneur (niveau L1, abordable en terminale) : le nombre $T_n$ de tirages nécessaires pour obtenir les $n$ vignettes est une somme de variables géométriques de paramètres $\\frac{n-k}{n}$, $0 \\le k \\le n - 1$, d'où $E(T_n) = n\\sum_{k=1}^{n}\\frac{1}{k} \\sim n\\ln n$.",
        "Loi faible des grands nombres et estimation (niveau terminale) : à l'aide de Bienaymé-Tchebychev et de $p(1-p) \\le \\frac{1}{4}$, déterminer une taille d'échantillon $n$ garantissant $P(|F_n - p| \\ge 0{,}05) \\le 0{,}05$, ce qui donne $n \\ge 2000$."
      ],
      "juryTips": [
        "Une variable discrète n'admet pas toujours d'espérance : si $P(X = k) = \\frac{1}{k(k+1)}$ pour $k \\in \\mathbb{N}^{\\ast}$, la loi est bien définie (somme télescopique égale à 1), mais $\\sum kP(X = k) = \\sum \\frac{1}{k+1}$ diverge.",
        "La convergence absolue est exigée dans la définition de l'espérance pour que la somme ne dépende pas de l'ordre d'énumération de $X(\\Omega)$, en lien avec le théorème de réarrangement de Riemann.",
        "L'additivité de la variance demande l'indépendance (la non-corrélation suffit) : pour $Y = -X$, $V(X + Y) = 0$ alors que $V(X) + V(Y) = 2V(X)$.",
        "L'inégalité de Bienaymé-Tchebychev est souvent grossière : pour $X$ de loi $\\mathcal{B}(100, \\frac{1}{2})$, elle donne $P(|X - 50| \\ge 10) \\le 0{,}25$ alors que la valeur exacte est environ $0{,}057$. Le jury attend que l'on sache commenter cet écart.",
        "Situer la notion : au lycée, les variables sont définies sur un univers fini et la loi est donnée par un tableau ; le passage au dénombrable, avec les lois géométrique et de Poisson, est ce qui rend nécessaires les séries et la convergence absolue."
      ]
    },
    {
      "id": "capes-05",
      "num": "Leçon 05",
      "title": "Espaces préhilbertiens réels, orthogonalité et projections orthogonales",
      "domain": "Géométrie & Algèbre",
      "level": "CAPES / Agrégation",
      "prerequisites": [
        "Situation dans les programmes : théorème de Pythagore et distance d'un point à une droite au collège ; produit scalaire dans le plan en première (projection orthogonale, norme, formule d'Al-Kashi, expression en repère orthonormé) ; produit scalaire dans l'espace, orthogonalité et projeté orthogonal sur une droite ou un plan en terminale spécialité.",
        "Espaces vectoriels réels, familles libres et génératrices, dimension, sous-espaces supplémentaires.",
        "Formes bilinéaires symétriques et formes quadratiques, identités de polarisation.",
        "Trinôme du second degré : signe et discriminant."
      ],
      "plan": [
        {
          "part": "I. Produit scalaire et norme euclidienne",
          "content": "Un produit scalaire sur un $\\mathbb{R}$-espace vectoriel $E$ est une forme bilinéaire symétrique définie positive ; norme associée $\\|x\\| = \\sqrt{\\langle x, x \\rangle}$. Exemples : produit canonique sur $\\mathbb{R}^n$ ; $\\langle A, B \\rangle = \\mathrm{tr}(A^{\\top}B)$ sur $\\mathcal{M}_n(\\mathbb{R})$ ; $\\langle f, g \\rangle = \\int_a^b fg$ sur $\\mathcal{C}([a ; b], \\mathbb{R})$, défini positif grâce à la continuité. Identités de polarisation et du parallélogramme. Inégalité de Cauchy-Schwarz $|\\langle x, y \\rangle| \\le \\|x\\|\\|y\\|$, avec égalité si et seulement si $(x, y)$ est liée ; inégalité triangulaire, avec égalité si et seulement si les vecteurs sont positivement liés. Théorème de Pythagore."
        },
        {
          "part": "II. Orthogonalité et bases orthonormées",
          "content": "Vecteurs orthogonaux, orthogonal $A^{\\perp}$ d'une partie $A$ (c'est un sous-espace vectoriel). Une famille orthogonale de vecteurs non nuls est libre. Procédé de Gram-Schmidt : pour toute famille libre $(x_1, \\dots, x_p)$, il existe une unique famille orthonormée $(e_1, \\dots, e_p)$ telle que $\\mathrm{Vect}(e_1, \\dots, e_k) = \\mathrm{Vect}(x_1, \\dots, x_k)$ et $\\langle e_k, x_k \\rangle > 0$ pour tout $k$. Conséquences : tout espace euclidien admet une base orthonormée, dans laquelle $x = \\sum \\langle x, e_i \\rangle e_i$ et $\\|x\\|^2 = \\sum \\langle x, e_i \\rangle^2$. Exemple : orthonormalisation de $(1, X, X^2)$ pour $\\langle P, Q \\rangle = \\int_{-1}^{1}PQ$."
        },
        {
          "part": "III. Projection orthogonale et meilleure approximation",
          "content": "Théorème : si $F$ est un sous-espace de dimension finie d'un espace préhilbertien $E$, alors $E = F \\oplus F^{\\perp}$ ; la projection orthogonale s'écrit $p_F(x) = \\sum_{i=1}^{p}\\langle x, e_i \\rangle e_i$ dans une base orthonormée $(e_1, \\dots, e_p)$ de $F$. Caractérisation : $p_F(x)$ est l'unique $y \\in F$ tel que $\\|x - y\\| = d(x, F)$, et $d(x, F)^2 = \\|x\\|^2 - \\sum_{i=1}^{p}\\langle x, e_i \\rangle^2$. Inégalité de Bessel. Applications : distance d'un point à un plan de l'espace, droite des moindres carrés, calcul de $\\min_{a, b \\in \\mathbb{R}}\\int_0^1(x^2 - ax - b)^2\\,dx = \\frac{1}{180}$, atteint pour $a = 1$ et $b = -\\frac{1}{6}$."
        }
      ],
      "keyTheorem": {
        "title": "Projection orthogonale sur un sous-espace de dimension finie",
        "statement": "Soit $E$ un espace préhilbertien réel et $F$ un sous-espace vectoriel de dimension finie $p \\ge 1$, muni d'une base orthonormée $(e_1, \\dots, e_p)$ (qui existe par le procédé de Gram-Schmidt). Alors (i) $E = F \\oplus F^{\\perp}$ ; (ii) pour tout $x \\in E$, le vecteur $p_F(x) = \\sum_{i=1}^{p}\\langle x, e_i \\rangle e_i$ est l'unique $y \\in F$ tel que $\\|x - y\\| = \\inf_{z \\in F}\\|x - z\\|$ ; (iii) $d(x, F)^2 = \\|x\\|^2 - \\sum_{i=1}^{p}\\langle x, e_i \\rangle^2$.",
        "proof": "1. **Intersection.** Si $x \\in F \\cap F^{\\perp}$, alors $\\langle x, x \\rangle = 0$, donc $x = 0$ car le produit scalaire est défini positif.\n2. **Décomposition.** Soit $x \\in E$ et $y = \\sum_{i=1}^{p}\\langle x, e_i \\rangle e_i \\in F$. Pour tout $j$, $\\langle x - y, e_j \\rangle = \\langle x, e_j \\rangle - \\sum_{i}\\langle x, e_i \\rangle\\langle e_i, e_j \\rangle = \\langle x, e_j \\rangle - \\langle x, e_j \\rangle = 0$. Par linéarité, $x - y$ est orthogonal à toute combinaison des $e_j$, donc $x - y \\in F^{\\perp}$. Ainsi $x = y + (x - y)$ et $E = F + F^{\\perp}$, somme directe par l'étape 1.\n3. **Minimisation.** Pour $z \\in F$, $x - z = (x - y) + (y - z)$ avec $x - y \\in F^{\\perp}$ et $y - z \\in F$. Par Pythagore, $\\|x - z\\|^2 = \\|x - y\\|^2 + \\|y - z\\|^2 \\ge \\|x - y\\|^2$, avec égalité si et seulement si $z = y$. L'infimum est donc atteint, uniquement en $y = p_F(x)$.\n4. **Distance.** Par Pythagore, $\\|x\\|^2 = \\|y\\|^2 + \\|x - y\\|^2$, et $\\|y\\|^2 = \\sum_{i=1}^{p}\\langle x, e_i \\rangle^2$ car la famille $(e_i)$ est orthonormée. Donc $d(x, F)^2 = \\|x - y\\|^2 = \\|x\\|^2 - \\sum_{i=1}^{p}\\langle x, e_i \\rangle^2$.\n5. **Remarque.** L'hypothèse de dimension finie sert à disposer d'une base orthonormée finie de $F$ ; sans elle, la conclusion (i) peut être fausse."
      },
      "developments": [
        "Inégalité de Cauchy-Schwarz et cas d'égalité (niveau L1) : preuve par le signe du trinôme $\\lambda \\mapsto \\|x + \\lambda y\\|^2$, puis applications $\\left(\\sum_{i=1}^{n}a_i\\right)^2 \\le n\\sum_{i=1}^{n}a_i^2$ et $\\left(\\int_0^1 f\\right)^2 \\le \\int_0^1 f^2$ pour $f$ continue.",
        "Droite des moindres carrés (niveau L2, lien avec la statistique du lycée) : projection orthogonale de $(y_1, \\dots, y_n)$ sur $\\mathrm{Vect}\\left((1, \\dots, 1), (x_1, \\dots, x_n)\\right)$, équations normales, et formules $a = \\frac{\\mathrm{cov}(x, y)}{V(x)}$ et $b = \\bar{y} - a\\bar{x}$.",
        "Polynômes de Legendre (niveau L2-L3) : procédé de Gram-Schmidt appliqué à $(1, X, X^2, \\dots)$ pour $\\langle P, Q \\rangle = \\int_{-1}^{1}PQ$, identification avec les dérivées $n$-ièmes de $(X^2 - 1)^n$ à un facteur près, et preuve que le $n$-ième polynôme a $n$ racines simples dans $]-1 ; 1[$.",
        "Déterminant de Gram (niveau L2) : pour une base quelconque $(f_1, \\dots, f_p)$ de $F$, $d(x, F)^2 = \\frac{G(f_1, \\dots, f_p, x)}{G(f_1, \\dots, f_p)}$, où $G$ désigne le déterminant de la matrice des produits scalaires."
      ],
      "juryTips": [
        "En dimension infinie, $E = F \\oplus F^{\\perp}$ peut être faux : dans $\\mathbb{R}[X]$ muni du produit scalaire $\\langle P, Q \\rangle = \\sum_k p_kq_k$ des coefficients, l'hyperplan $F = \\{P : P(1) = 0\\}$ vérifie $F^{\\perp} = \\{0\\}$, donc $F^{\\perp\\perp} = E \\neq F$.",
        "Le caractère défini positif doit être vérifié : sur $\\mathcal{C}([0 ; 1], \\mathbb{R})$, $\\int_0^1 fg$ convient car une fonction continue positive d'intégrale nulle est nulle, mais ce n'est plus un produit scalaire sur les fonctions continues par morceaux.",
        "Le cas d'égalité de Cauchy-Schwarz porte sur $|\\langle x, y \\rangle|$ ; l'égalité $\\langle x, y \\rangle = \\|x\\|\\|y\\|$ sans valeur absolue caractérise les vecteurs positivement liés, ce qui donne le cas d'égalité de l'inégalité triangulaire.",
        "Un projecteur n'est pas forcément orthogonal ; un projecteur $p$ est orthogonal si et seulement si $\\|p(x)\\| \\le \\|x\\|$ pour tout $x$, et le jury peut demander un exemple de projecteur non orthogonal dans le plan.",
        "Lien avec le lycée : savoir présenter le projeté orthogonal d'un point sur une droite de l'espace comme le point qui minimise la distance, et faire le lien entre Cauchy-Schwarz et l'écriture $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\|\\|\\vec{v}\\|\\cos\\theta$."
      ]
    },
    {
      "id": "capes-06",
      "num": "Leçon 06",
      "title": "Intégrale de Riemann, primitives et intégrales à paramètres",
      "domain": "Analyse",
      "level": "CAPES / Agrégation",
      "prerequisites": [
        "Situation dans les programmes : en terminale spécialité, intégrale d'une fonction continue positive définie comme aire sous la courbe, théorème fondamental (démontré pour une fonction continue positive croissante, admis en général), existence de primitives admise, linéarité, positivité, relation de Chasles, valeur moyenne, intégration par parties ; méthode des rectangles en algorithmique.",
        "Borne supérieure dans $\\mathbb{R}$, suites adjacentes.",
        "Continuité, continuité uniforme et théorème de Heine sur un segment.",
        "Dérivation, théorème des accroissements finis, fonctions de classe $\\mathcal{C}^1$."
      ],
      "plan": [
        {
          "part": "I. Intégrale de Riemann sur un segment",
          "content": "Fonctions en escalier sur $[a ; b]$ et leur intégrale, indépendante de la subdivision adaptée choisie. Une fonction bornée $f$ est intégrable au sens de Riemann si pour tout $\\varepsilon > 0$ il existe $\\varphi, \\psi$ en escalier avec $\\varphi \\le f \\le \\psi$ et $\\int_a^b(\\psi - \\varphi) \\le \\varepsilon$. Théorème : toute fonction continue sur un segment est intégrable (par la continuité uniforme), ainsi que toute fonction monotone et toute fonction continue par morceaux. Contre-exemple : l'indicatrice de $\\mathbb{Q} \\cap [0 ; 1]$ n'est pas intégrable. Sommes de Riemann : pour $f$ continue, $\\frac{b-a}{n}\\sum_{k=1}^{n}f\\left(a + k\\frac{b-a}{n}\\right) \\to \\int_a^b f$. Propriétés : linéarité, positivité, relation de Chasles, $\\left|\\int_a^b f\\right| \\le \\int_a^b|f|$ pour $a \\le b$, inégalité de la moyenne."
        },
        {
          "part": "II. Primitives et techniques de calcul",
          "content": "Théorème fondamental : si $f$ est continue sur un intervalle $I$ et $a \\in I$, $x \\mapsto \\int_a^x f$ est l'unique primitive de $f$ nulle en $a$, et $\\int_a^b f = G(b) - G(a)$ pour toute primitive $G$. Intégration par parties pour $u, v$ de classe $\\mathcal{C}^1$. Changement de variable : $\\int_{\\varphi(\\alpha)}^{\\varphi(\\beta)}f(x)\\,dx = \\int_\\alpha^\\beta f(\\varphi(t))\\varphi'(t)\\,dt$ pour $f$ continue et $\\varphi$ de classe $\\mathcal{C}^1$. Formule de Taylor avec reste intégral. Exemple : intégrales de Wallis $W_n = \\int_0^{\\pi/2}\\sin^n t\\,dt$, avec $W_{n+2} = \\frac{n+1}{n+2}W_n$ par intégration par parties."
        },
        {
          "part": "III. Intégrales dépendant d'un paramètre",
          "content": "Sur un segment : si $f$ est continue sur $I \\times [a ; b]$, alors $F(x) = \\int_a^b f(x, t)\\,dt$ est continue sur $I$ ; si de plus $\\frac{\\partial f}{\\partial x}$ existe et est continue sur $I \\times [a ; b]$, alors $F$ est de classe $\\mathcal{C}^1$ et $F'(x) = \\int_a^b\\frac{\\partial f}{\\partial x}(x, t)\\,dt$. Sur un intervalle quelconque (intégrales généralisées), il faut une hypothèse de domination : $|f(x, t)| \\le g(t)$ avec $g$ intégrable indépendante de $x$, éventuellement sur chaque segment de $I$, et une domination analogue de la dérivée partielle. Exemples : fonction $\\Gamma$, intégrale de Gauss $\\int_{-\\infty}^{+\\infty}e^{-t^2}\\,dt = \\sqrt{\\pi}$, transformée de Laplace."
        }
      ],
      "keyTheorem": {
        "title": "Théorème fondamental de l'analyse",
        "statement": "Soit $f$ une fonction continue sur un intervalle $I$ de $\\mathbb{R}$ et $a \\in I$. Alors la fonction $F : x \\mapsto \\int_a^x f(t)\\,dt$ est dérivable sur $I$ et $F' = f$ ; c'est l'unique primitive de $f$ sur $I$ qui s'annule en $a$. En conséquence, pour toute primitive $G$ de $f$ sur $I$ et tous $\\alpha, \\beta \\in I$, $\\int_\\alpha^\\beta f(t)\\,dt = G(\\beta) - G(\\alpha)$.",
        "proof": "1. **Taux d'accroissement.** Soit $x_0 \\in I$ et $h \\neq 0$ tel que $x_0 + h \\in I$. Par la relation de Chasles et parce que $\\int_{x_0}^{x_0+h}f(x_0)\\,dt = hf(x_0)$ : $\\frac{F(x_0 + h) - F(x_0)}{h} - f(x_0) = \\frac{1}{h}\\int_{x_0}^{x_0+h}\\left(f(t) - f(x_0)\\right)dt$.\n2. **Majoration.** Soit $\\varepsilon > 0$. Par continuité de $f$ en $x_0$, il existe $\\eta > 0$ tel que pour tout $t \\in I$, $|t - x_0| \\le \\eta$ implique $|f(t) - f(x_0)| \\le \\varepsilon$. Si $0 \\lt |h| \\le \\eta$, tout $t$ compris entre $x_0$ et $x_0 + h$ vérifie $|t - x_0| \\le \\eta$, donc $\\left|\\int_{x_0}^{x_0+h}(f(t) - f(x_0))\\,dt\\right| \\le |h|\\varepsilon$.\n3. **Dérivabilité.** On obtient $\\left|\\frac{F(x_0 + h) - F(x_0)}{h} - f(x_0)\\right| \\le \\varepsilon$ pour $0 \\lt |h| \\le \\eta$ : $F$ est dérivable en $x_0$ (à droite ou à gauche seulement si $x_0$ est une borne de $I$) et $F'(x_0) = f(x_0)$. De plus $F(a) = 0$.\n4. **Unicité.** Si $G$ est une primitive de $f$ sur $I$, $(G - F)' = 0$ sur l'intervalle $I$, donc $G - F$ est constante par le théorème des accroissements finis. Si de plus $G(a) = 0$, alors $G = F$.\n5. **Calcul d'intégrales.** Pour toute primitive $G$, $G = F + c$, donc $G(\\beta) - G(\\alpha) = F(\\beta) - F(\\alpha) = \\int_a^\\beta f - \\int_a^\\alpha f = \\int_\\alpha^\\beta f$ par Chasles."
      },
      "developments": [
        "Intégrales de Wallis et formule de Stirling (niveau L2) : relation $W_nW_{n+1} = \\frac{\\pi}{2(n+1)}$, équivalent $W_n \\sim \\sqrt{\\frac{\\pi}{2n}}$, puis $n! \\sim \\sqrt{2\\pi n}\\left(\\frac{n}{e}\\right)^n$ en identifiant la constante grâce aux intégrales de Wallis.",
        "Intégrale de Gauss par une intégrale à paramètre sur un segment (niveau L2) : avec $F(x) = \\int_0^1\\frac{e^{-x^2(1+t^2)}}{1+t^2}\\,dt$ et $G(x) = \\left(\\int_0^x e^{-t^2}\\,dt\\right)^2$, on montre $F' + G' = 0$, donc $F + G = \\frac{\\pi}{4}$, et l'on obtient $\\int_0^{+\\infty}e^{-t^2}\\,dt = \\frac{\\sqrt{\\pi}}{2}$.",
        "Sommes de Riemann (niveau terminale-L1) : pour $f$ lipschitzienne de constante $K$, l'erreur de la méthode des rectangles est majorée par $\\frac{K(b-a)^2}{2n}$ ; application à $\\lim_{n \\to +\\infty}\\sum_{k=1}^{n}\\frac{1}{n+k} = \\ln 2$ et lien avec l'algorithme des rectangles programmé au lycée.",
        "Intégrale de Dirichlet (niveau L3) : $\\int_0^{+\\infty}\\frac{\\sin t}{t}\\,dt = \\frac{\\pi}{2}$, intégrale semi-convergente, par l'étude de $F(x) = \\int_0^{+\\infty}e^{-xt}\\frac{\\sin t}{t}\\,dt$ sur $]0 ; +\\infty[$, le calcul $F'(x) = -\\frac{1}{1+x^2}$ et une justification soignée de la continuité en 0."
      ],
      "juryTips": [
        "Le théorème fondamental demande la continuité de $f$ : pour la fonction $f$ égale à 0 sur $[-1 ; 0[$ et à 1 sur $[0 ; 1]$, la fonction $x \\mapsto \\int_{-1}^{x}f$ existe mais n'est pas dérivable en 0.",
        "Une fonction intégrable n'admet pas toujours de primitive : la partie entière est intégrable sur $[0 ; 2]$ mais n'a pas de primitive sur cet intervalle, car une dérivée vérifie la propriété des valeurs intermédiaires (théorème de Darboux).",
        "Pour dériver sous le signe intégral sur un intervalle non borné, la domination porte sur la dérivée partielle et doit être uniforme sur chaque segment du domaine du paramètre : $|\\frac{\\partial f}{\\partial x}(x, t)| \\le g_K(t)$ pour $x \\in K$, avec $g_K$ intégrable.",
        "Distinguez continuité et continuité uniforme : la preuve de l'intégrabilité des fonctions continues sur un segment utilise le théorème de Heine, et $x \\mapsto \\sin\\frac{1}{x}$ est continue sur $]0 ; 1]$ sans y être uniformément continue.",
        "Situer la notion : en terminale, l'intégrale est introduite par l'aire et l'existence des primitives des fonctions continues est admise ; le jury apprécie que le candidat dise précisément ce que la construction de Riemann permet de démontrer."
      ]
    },
    {
      "id": "capes-07",
      "num": "Leçon 07",
      "title": "Groupe symétrique, signature et applications aux déterminants",
      "domain": "Algèbre",
      "level": "CAPES / Agrégation",
      "prerequisites": [
        "Situation dans les programmes : dénombrement des permutations, des arrangements et des combinaisons en terminale spécialité ($n!$ permutations d'un ensemble à $n$ éléments) ; déterminant de deux vecteurs du plan et critère de colinéarité en seconde.",
        "Groupes, sous-groupes, morphismes, noyau, sous-groupe distingué, théorème de Lagrange.",
        "Actions de groupes, orbites, relations d'équivalence.",
        "Espaces vectoriels de dimension finie, applications multilinéaires."
      ],
      "plan": [
        {
          "part": "I. Structure du groupe symétrique",
          "content": "$\\mathcal{S}_n$ est le groupe des bijections de $\\{1, \\dots, n\\}$, de cardinal $n!$, non commutatif pour $n \\ge 3$. Support, cycles, transpositions. Théorème : toute permutation se décompose en produit de cycles à supports disjoints, de manière unique à l'ordre près des facteurs ; les supports sont les orbites non réduites à un point de l'action de $\\langle \\sigma \\rangle$. L'ordre de $\\sigma$ est le PPCM des longueurs de ses cycles. Générateurs : les transpositions ; les transpositions $(i\\ i+1)$ ; la paire formée de $(1\\ 2)$ et $(1\\ 2\\ \\cdots\\ n)$. Conjugaison : $\\tau(a_1\\ \\cdots\\ a_k)\\tau^{-1} = (\\tau(a_1)\\ \\cdots\\ \\tau(a_k))$, et deux permutations sont conjuguées si et seulement si elles ont le même type de décomposition. Exemple : $(1\\ 3\\ 5)(2\\ 4)$ est d'ordre 6."
        },
        {
          "part": "II. Signature et groupe alterné",
          "content": "Inversions ; signature $\\varepsilon(\\sigma) = \\prod_{i \\lt j}\\frac{\\sigma(j) - \\sigma(i)}{j - i} = (-1)^{N(\\sigma)}$, où $N(\\sigma)$ est le nombre d'inversions. Théorème : pour $n \\ge 2$, $\\varepsilon$ est l'unique morphisme non trivial de $\\mathcal{S}_n$ dans $\\{-1, 1\\}$. Une transposition a pour signature $-1$, un cycle de longueur $k$ a pour signature $(-1)^{k-1}$, et $\\varepsilon(\\sigma) = (-1)^{n - m}$ où $m$ est le nombre d'orbites de $\\sigma$ (points fixes compris). Groupe alterné $\\mathcal{A}_n = \\ker\\varepsilon$, distingué, d'indice 2 et de cardinal $\\frac{n!}{2}$ pour $n \\ge 2$, engendré par les 3-cycles pour $n \\ge 3$."
        },
        {
          "part": "III. Formes multilinéaires alternées et déterminant",
          "content": "Sur un espace $E$ de dimension $n$, les formes $n$-linéaires alternées forment une droite vectorielle ; il en existe une unique valant 1 sur une base $\\mathcal{B}$ donnée, le déterminant $\\det_{\\mathcal{B}}$. Formule de Leibniz $\\det(A) = \\sum_{\\sigma \\in \\mathcal{S}_n}\\varepsilon(\\sigma)\\prod_{i=1}^{n}a_{\\sigma(i), i}$. Conséquences : $\\det(AB) = \\det(A)\\det(B)$, $\\det(A^{\\top}) = \\det(A)$, $A$ inversible si et seulement si $\\det(A) \\neq 0$, développement selon une ligne ou une colonne, relation $A\\,\\mathrm{com}(A)^{\\top} = \\det(A)I_n$, formules de Cramer. Exemple : déterminant de Vandermonde $\\prod_{1 \\le i \\lt j \\le n}(x_j - x_i)$."
        }
      ],
      "keyTheorem": {
        "title": "Existence et unicité de la signature",
        "statement": "Soit $n \\ge 2$. L'application $\\varepsilon : \\mathcal{S}_n \\to \\mathbb{Q}$ définie par $\\varepsilon(\\sigma) = \\prod_{1 \\le i \\lt j \\le n}\\frac{\\sigma(j) - \\sigma(i)}{j - i}$ est à valeurs dans $\\{-1, 1\\}$, c'est un morphisme de groupes de $\\mathcal{S}_n$ dans $(\\{-1, 1\\}, \\times)$ qui vaut $-1$ sur toute transposition, et c'est l'unique morphisme non trivial de $\\mathcal{S}_n$ dans $\\{-1, 1\\}$.",
        "proof": "1. **Réécriture.** Notons $\\mathcal{P}$ l'ensemble des paires $\\{i, j\\}$ d'éléments distincts de $\\{1, \\dots, n\\}$. Le quotient $\\frac{\\sigma(j) - \\sigma(i)}{j - i}$ ne change pas si l'on échange $i$ et $j$, donc $\\varepsilon(\\sigma) = \\prod_{\\{i, j\\} \\in \\mathcal{P}}\\frac{\\sigma(j) - \\sigma(i)}{j - i}$. L'application $\\{i, j\\} \\mapsto \\{\\sigma(i), \\sigma(j)\\}$ est une bijection de $\\mathcal{P}$.\n2. **Valeurs.** Par ce changement d'indice, $\\prod_{\\mathcal{P}}|\\sigma(j) - \\sigma(i)| = \\prod_{\\mathcal{P}}|j - i|$, donc $|\\varepsilon(\\sigma)| = 1$ et $\\varepsilon(\\sigma) \\in \\{-1, 1\\}$.\n3. **Morphisme.** Pour $\\sigma, \\tau \\in \\mathcal{S}_n$, comme $\\tau(i) \\neq \\tau(j)$ : $\\varepsilon(\\sigma\\tau) = \\prod_{\\mathcal{P}}\\frac{\\sigma(\\tau(j)) - \\sigma(\\tau(i))}{\\tau(j) - \\tau(i)} \\times \\prod_{\\mathcal{P}}\\frac{\\tau(j) - \\tau(i)}{j - i}$. Le second produit vaut $\\varepsilon(\\tau)$ ; dans le premier, le changement d'indice $\\{k, l\\} = \\{\\tau(i), \\tau(j)\\}$, bijectif sur $\\mathcal{P}$, montre qu'il vaut $\\varepsilon(\\sigma)$.\n4. **Valeur sur $(1\\ 2)$.** La paire $\\{1, 2\\}$ donne le facteur $-1$. Pour $j \\ge 3$, les paires $\\{1, j\\}$ et $\\{2, j\\}$ donnent ensemble $\\frac{j - 2}{j - 1} \\times \\frac{j - 1}{j - 2} = 1$, et les paires contenues dans $\\{3, \\dots, n\\}$ donnent 1. Donc $\\varepsilon((1\\ 2)) = -1$.\n5. **Toutes les transpositions.** Pour $a \\neq b$, soit $\\gamma \\in \\mathcal{S}_n$ avec $\\gamma(1) = a$ et $\\gamma(2) = b$ ; alors $(a\\ b) = \\gamma(1\\ 2)\\gamma^{-1}$, et $\\varepsilon((a\\ b)) = \\varepsilon(\\gamma)\\varepsilon((1\\ 2))\\varepsilon(\\gamma)^{-1} = -1$ car $\\{-1, 1\\}$ est commutatif.\n6. **Les transpositions engendrent $\\mathcal{S}_n$.** Récurrence sur le nombre de points non fixes : si $\\sigma \\neq \\mathrm{id}$, soit $i$ avec $\\sigma(i) \\neq i$ et $t = (i\\ \\sigma(i))$. Alors $t\\sigma$ fixe $i$ et tous les points fixes de $\\sigma$ (un point fixe $k$ de $\\sigma$ est distinct de $i$ et de $\\sigma(i)$), donc a strictement moins de points non fixes ; on conclut par $\\sigma = t(t\\sigma)$.\n7. **Unicité.** Soit $\\chi : \\mathcal{S}_n \\to \\{-1, 1\\}$ un morphisme. Les transpositions étant conjuguées, elles ont toutes la même image $c$. Comme elles engendrent $\\mathcal{S}_n$, $\\chi$ est déterminé par $c$ : si $c = 1$, $\\chi$ est trivial ; si $c = -1$, $\\chi$ coïncide avec $\\varepsilon$ sur un système générateur, donc $\\chi = \\varepsilon$."
      },
      "developments": [
        "Déterminant de Vandermonde (niveau L1-L2) : $V(x_1, \\dots, x_n) = \\prod_{1 \\le i \\lt j \\le n}(x_j - x_i)$, par récurrence en considérant le déterminant comme un polynôme en $x_n$ ; application : existence et unicité du polynôme d'interpolation de Lagrange de degré au plus $n - 1$.",
        "Décomposition en cycles à supports disjoints (niveau L2) : existence et unicité par les orbites de l'action de $\\langle \\sigma \\rangle$, ordre égal au PPCM des longueurs, et détermination de l'ordre maximal d'un élément de $\\mathcal{S}_5$, qui vaut 6.",
        "Le groupe alterné est engendré par les 3-cycles pour $n \\ge 3$ (niveau L3) : un produit de deux transpositions est un produit de 3-cycles, grâce à $(a\\ b)(a\\ c) = (a\\ c\\ b)$ et $(a\\ b)(c\\ d) = (a\\ c\\ b)(a\\ c\\ d)$ pour $a, b, c, d$ distincts.",
        "Construction du déterminant (niveau L2) : unicité de la forme $n$-linéaire alternée normalisée, formule de Leibniz, puis $\\det(AB) = \\det(A)\\det(B)$ et $\\det(A^{\\top}) = \\det(A)$ par le changement d'indice $\\sigma \\mapsto \\sigma^{-1}$, qui conserve la signature."
      ],
      "juryTips": [
        "Un cycle de longueur $k$ est produit de $k - 1$ transpositions, donc sa signature vaut $(-1)^{k-1}$ : un 3-cycle est pair, ce qui surprend souvent.",
        "La décomposition en produit de transpositions n'est pas unique, seule la parité du nombre de facteurs l'est : $(1\\ 2\\ 3) = (1\\ 3)(1\\ 2) = (1\\ 2)(2\\ 3)$.",
        "Fixez la convention de composition : $\\sigma\\tau = \\sigma \\circ \\tau$ applique d'abord $\\tau$. Avec $\\sigma = (1\\ 2)$ et $\\tau = (2\\ 3)$, $\\sigma\\tau = (1\\ 2\\ 3)$ alors que $\\tau\\sigma = (1\\ 3\\ 2)$, ce qui montre que $\\mathcal{S}_3$ n'est pas commutatif.",
        "L'ordre d'une permutation est le PPCM des longueurs de ses cycles disjoints, et non leur produit : $(1\\ 2)(3\\ 4)$ est d'ordre 2. La règle ne vaut que pour des cycles à supports disjoints : $(1\\ 2)(2\\ 3)$ est d'ordre 3.",
        "Lien avec le secondaire : le déterminant de deux vecteurs vu en seconde, $\\det(\\vec{u}, \\vec{v}) = xy' - x'y$, est le cas $n = 2$ de la formule de Leibniz ; sachez l'interpréter comme une aire orientée."
      ]
    },
    {
      "id": "capes-08",
      "num": "Leçon 08",
      "title": "Convexité des fonctions réelles d'une variable réelle et applications",
      "domain": "Analyse",
      "level": "CAPES / Agrégation",
      "prerequisites": [
        "Situation dans les programmes : en terminale spécialité, fonction convexe définie par la position de la courbe par rapport à ses sécantes ; pour une fonction deux fois dérivable, équivalence admise avec la position par rapport aux tangentes, la croissance de $f'$ et la positivité de $f''$ ; points d'inflexion ; inégalités comme $e^x \\ge 1 + x$ et $\\ln x \\le x - 1$.",
        "Dérivation, théorème de Rolle et théorème des accroissements finis.",
        "Barycentres et segments dans un espace vectoriel réel.",
        "Continuité, limites de fonctions monotones."
      ],
      "plan": [
        {
          "part": "I. Définition et caractérisations géométriques",
          "content": "Une fonction $f : I \\to \\mathbb{R}$ est convexe si pour tous $x, y \\in I$ et $t \\in [0 ; 1]$, $f((1-t)x + ty) \\le (1-t)f(x) + tf(y)$ ; elle est strictement convexe si l'inégalité est stricte pour $x \\neq y$ et $t \\in ]0 ; 1[$. Interprétation : l'arc est sous la corde ; $f$ est convexe si et seulement si son épigraphe est une partie convexe de $\\mathbb{R}^2$. Lemme des trois pentes : pour $x \\lt y \\lt z$ dans $I$, $\\frac{f(y) - f(x)}{y - x} \\le \\frac{f(z) - f(x)}{z - x} \\le \\frac{f(z) - f(y)}{z - y}$ ; de façon équivalente, pour tout $a \\in I$, le taux d'accroissement en $a$ est croissant. Conséquence : une fonction convexe sur un intervalle ouvert est continue et admet en tout point des dérivées à gauche et à droite, avec $f'_g \\le f'_d$. Exemples : $x \\mapsto |x|$, $x \\mapsto x^2$, $\\exp$, $-\\ln$ sur $]0 ; +\\infty[$."
        },
        {
          "part": "II. Caractérisations différentielles",
          "content": "Théorème : si $f$ est dérivable sur $I$, $f$ est convexe si et seulement si $f'$ est croissante, si et seulement si la courbe est au-dessus de chacune de ses tangentes : $f(x) \\ge f(a) + f'(a)(x - a)$. Si $f$ est deux fois dérivable, $f$ est convexe si et seulement si $f'' \\ge 0$ sur $I$. Point d'inflexion : point où la convexité change, la courbe y traverse sa tangente ; si $f''$ existe, elle s'y annule, mais la réciproque est fausse ($x \\mapsto x^4$ en 0). Exemples : $e^x \\ge 1 + x$ sur $\\mathbb{R}$, $\\ln x \\le x - 1$ sur $]0 ; +\\infty[$, $\\sin x \\ge \\frac{2}{\\pi}x$ sur $[0 ; \\frac{\\pi}{2}]$ par concavité du sinus."
        },
        {
          "part": "III. Inégalités de convexité et optimisation",
          "content": "Inégalité de Jensen discrète $f\\left(\\sum p_ix_i\\right) \\le \\sum p_if(x_i)$ pour des poids positifs de somme 1, et version intégrale $f\\left(\\frac{1}{b-a}\\int_a^b g\\right) \\le \\frac{1}{b-a}\\int_a^b f \\circ g$ pour $g$ continue sur $[a ; b]$ et $f$ convexe sur un intervalle ouvert contenant les valeurs de $g$. Inégalité arithmético-géométrique $\\sqrt[n]{x_1 \\cdots x_n} \\le \\frac{x_1 + \\cdots + x_n}{n}$ pour des réels positifs, par la concavité de $\\ln$ ; inégalité de Young $ab \\le \\frac{a^p}{p} + \\frac{b^q}{q}$, puis inégalités de Hölder et de Minkowski. Optimisation : pour $f$ convexe, tout minimum local est global, l'ensemble des points de minimum est un intervalle, et si $f$ est dérivable, $f'(a) = 0$ équivaut à $a$ point de minimum."
        }
      ],
      "keyTheorem": {
        "title": "Caractérisation des fonctions convexes dérivables",
        "statement": "Soit $I$ un intervalle d'intérieur non vide et $f : I \\to \\mathbb{R}$ dérivable. Les assertions suivantes sont équivalentes : (i) $f$ est convexe sur $I$ ; (ii) $f'$ est croissante sur $I$ ; (iii) pour tous $a, x \\in I$, $f(x) \\ge f(a) + f'(a)(x - a)$. En particulier, si $f$ est deux fois dérivable, $f$ est convexe si et seulement si $f'' \\ge 0$ sur $I$.",
        "proof": "1. **Lemme des trois pentes.** Soit $x \\lt y \\lt z$ dans $I$ et $t = \\frac{y - x}{z - x} \\in ]0 ; 1[$, de sorte que $y = (1-t)x + tz$. La convexité donne $f(y) \\le (1-t)f(x) + tf(z)$, soit $f(y) - f(x) \\le t(f(z) - f(x))$ ; comme $y - x = t(z - x)$, on obtient $\\frac{f(y) - f(x)}{y - x} \\le \\frac{f(z) - f(x)}{z - x}$. De même $f(y) - f(z) \\le (1-t)(f(x) - f(z))$ et $z - y = (1-t)(z - x)$ donnent $\\frac{f(z) - f(x)}{z - x} \\le \\frac{f(z) - f(y)}{z - y}$.\n2. **(i) implique (ii).** Soit $a \\lt b$ dans $I$. Pour $a \\lt x \\lt b$, le lemme donne $\\frac{f(x) - f(a)}{x - a} \\le \\frac{f(b) - f(a)}{b - a} \\le \\frac{f(b) - f(x)}{b - x}$. En faisant tendre $x$ vers $a$ dans l'inégalité de gauche, puis vers $b$ dans celle de droite, on obtient $f'(a) \\le \\frac{f(b) - f(a)}{b - a} \\le f'(b)$.\n3. **(ii) implique (iii).** Soit $a \\neq x$ dans $I$. Par le théorème des accroissements finis, $f(x) - f(a) = f'(c)(x - a)$ avec $c$ strictement entre $a$ et $x$. Si $x > a$, alors $f'(c) \\ge f'(a)$ et $x - a > 0$ ; si $x \\lt a$, alors $f'(c) \\le f'(a)$ et $x - a \\lt 0$. Dans les deux cas $f'(c)(x - a) \\ge f'(a)(x - a)$.\n4. **(iii) implique (i).** Soit $x, y \\in I$, $t \\in [0 ; 1]$ et $z = (1-t)x + ty \\in I$. En appliquant (iii) au point $a = z$ : $f(x) \\ge f(z) + f'(z)(x - z)$ et $f(y) \\ge f(z) + f'(z)(y - z)$. En multipliant par $1 - t \\ge 0$ et $t \\ge 0$ puis en ajoutant : $(1-t)f(x) + tf(y) \\ge f(z) + f'(z)\\left((1-t)x + ty - z\\right) = f(z)$.\n5. **Cas deux fois dérivable.** Si $f'' \\ge 0$, $f'$ est croissante par le théorème des accroissements finis appliqué à $f'$. Réciproquement, si $f'$ est croissante, ses taux d'accroissement sont positifs, donc leur limite $f''(a)$ l'est aussi."
      },
      "developments": [
        "Inégalité de Jensen et inégalité arithmético-géométrique (niveau L1) : Jensen par récurrence sur le nombre de points, application à la fonction concave $\\ln$, cas d'égalité par stricte concavité ; corollaire exploitable dès le lycée : parmi les rectangles de périmètre donné, le carré a la plus grande aire.",
        "Inégalités de Young, Hölder et Minkowski (niveau L2) : pour $a, b > 0$ et $\\frac{1}{p} + \\frac{1}{q} = 1$, la concavité de $\\ln$ donne $\\ln\\left(\\frac{a^p}{p} + \\frac{b^q}{q}\\right) \\ge \\ln a + \\ln b$ ; Hölder s'en déduit par normalisation et Minkowski fournit l'inégalité triangulaire de la norme $\\|\\cdot\\|_p$.",
        "Régularité des fonctions convexes (niveau L2) : sur un intervalle ouvert, existence des dérivées à gauche et à droite par le lemme des trois pentes, d'où la continuité ; contre-exemple aux bornes : sur $[0 ; 1]$, la fonction nulle sur $[0 ; 1[$ et égale à 1 en 1 est convexe et discontinue en 1.",
        "Méthode de Newton pour une fonction convexe (niveau L2, lien avec l'algorithmique du lycée) : si $f$ est de classe $\\mathcal{C}^2$ sur $[a ; b]$ avec $f' > 0$, $f'' \\ge 0$ et $f(a) \\lt 0 \\lt f(b)$, la suite $x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$ issue de $x_0 = b$ décroît vers l'unique zéro $\\ell$ de $f$, et $0 \\le x_{n+1} - \\ell \\le \\frac{M_2}{2m_1}(x_n - \\ell)^2$ avec $m_1 = \\min f'$ et $M_2 = \\max f''$."
      ],
      "juryTips": [
        "Une fonction convexe n'est pas forcément dérivable ($x \\mapsto |x|$ en 0), mais sur un intervalle ouvert elle est continue et admet en tout point une dérivée à gauche et une dérivée à droite.",
        "Aux bornes d'un intervalle fermé, la continuité peut tomber en défaut : la fonction nulle sur $[0 ; 1[$ et égale à 1 en 1 est convexe sur $[0 ; 1]$.",
        "L'annulation de $f''$ ne suffit pas à définir un point d'inflexion : $f(x) = x^4$ vérifie $f''(0) = 0$ et reste convexe ; il faut un changement de signe de $f''$.",
        "La stricte convexité n'équivaut pas à $f'' > 0$ : $x \\mapsto x^4$ est strictement convexe sur $\\mathbb{R}$ alors que sa dérivée seconde s'annule en 0.",
        "Situer la notion : en terminale, les équivalences entre caractérisations sont admises ; le jury attend que le candidat sache les démontrer avec le lemme des trois pentes et les accroissements finis, et propose des inégalités utilisables en classe comme $e^x \\ge 1 + x$."
      ]
    },
    {
      "id": "capes-09",
      "num": "Leçon 09",
      "title": "Suites et séries numériques : convergence, sommabilité et critères",
      "domain": "Analyse",
      "level": "CAPES / Agrégation",
      "prerequisites": [
        "Situation dans les programmes : suites arithmétiques et géométriques et somme de leurs termes en première ; limites de suites, théorème de convergence monotone et limite de $q^n$ en terminale spécialité, où des sommes comme $\\sum_{k=1}^{n}\\frac{1}{k^2}$ sont étudiées en exercice.",
        "Axiome de la borne supérieure, complétude de $\\mathbb{R}$ et suites de Cauchy.",
        "Suites adjacentes, suites extraites, théorème de Bolzano-Weierstrass.",
        "Relations de comparaison $o$, $O$ et $\\sim$, développements limités usuels.",
        "Intégrale sur un segment et croissance de l'intégrale, pour la comparaison entre série et intégrale."
      ],
      "plan": [
        {
          "part": "I. Généralités et séries à termes positifs",
          "content": "Série $\\sum u_n$, sommes partielles $S_n = \\sum_{k=0}^{n}u_k$, convergence, somme et reste $R_n = \\sum_{k \\ge n+1}u_k$. Si $\\sum u_n$ converge, $u_n \\to 0$ ; la réciproque est fausse (série harmonique). Séries géométriques, critère de Cauchy. Séries à termes positifs : convergence si et seulement si $(S_n)$ est majorée ; théorèmes de comparaison par inégalité, par $O$ et par équivalent. Comparaison série-intégrale pour $f$ positive décroissante ; séries de Riemann : $\\sum \\frac{1}{n^\\alpha}$ converge si et seulement si $\\alpha > 1$. Règle de d'Alembert. Exemple : $\\sum \\frac{n^2}{2^n}$ converge."
        },
        {
          "part": "II. Convergence absolue et séries semi-convergentes",
          "content": "Si $\\sum |u_n|$ converge, alors $\\sum u_n$ converge (complétude de $\\mathbb{R}$ ou de $\\mathbb{C}$). Séries semi-convergentes. Critère spécial des séries alternées avec signe et majoration du reste. Exemple : $\\sum_{n \\ge 1}\\frac{(-1)^{n+1}}{n} = \\ln 2$. Transformation d'Abel : si $(a_n)$ décroît vers 0 et si les sommes partielles de $\\sum b_n$ sont bornées, $\\sum a_nb_n$ converge ; exemple de $\\sum \\frac{\\cos(n\\theta)}{n}$ pour $\\theta \\notin 2\\pi\\mathbb{Z}$. Théorème de réarrangement de Riemann."
        },
        {
          "part": "III. Sommabilité, produit de Cauchy et applications",
          "content": "Familles sommables de réels positifs puis de complexes, sommation par paquets ; une série réelle a une somme indépendante de l'ordre des termes pour tout réarrangement si et seulement si elle converge absolument. Produit de Cauchy : si $\\sum a_n$ et $\\sum b_n$ convergent absolument, la série de terme $c_n = \\sum_{k=0}^{n}a_kb_{n-k}$ converge absolument et a pour somme $\\left(\\sum a_n\\right)\\left(\\sum b_n\\right)$ ; application : $\\exp(a + b) = \\exp(a)\\exp(b)$ pour la série exponentielle. Théorème de Fubini pour les séries doubles. Applications : $\\sum_{k=1}^{n}\\frac{1}{k} = \\ln n + \\gamma + o(1)$, calcul approché d'une somme avec contrôle du reste."
        }
      ],
      "keyTheorem": {
        "title": "Critère spécial des séries alternées",
        "statement": "Soit $(u_n)_{n \\ge 0}$ une suite réelle décroissante de limite nulle. Alors la série $\\sum (-1)^nu_n$ converge et, pour tout $n \\in \\mathbb{N}$, le reste $R_n = \\sum_{k=n+1}^{+\\infty}(-1)^ku_k$ est du signe de $(-1)^{n+1}$ et vérifie $|R_n| \\le u_{n+1}$.",
        "proof": "1. **Positivité.** La suite $(u_n)$ décroît vers 0, donc $u_n \\ge 0$ pour tout $n$.\n2. **Suites adjacentes.** Soit $S_n = \\sum_{k=0}^{n}(-1)^ku_k$. On a $S_{2n+2} - S_{2n} = u_{2n+2} - u_{2n+1} \\le 0$ et $S_{2n+3} - S_{2n+1} = u_{2n+2} - u_{2n+3} \\ge 0$ ; de plus $S_{2n+1} - S_{2n} = -u_{2n+1} \\to 0$. Les suites $(S_{2n})$ et $(S_{2n+1})$ sont donc adjacentes et ont une limite commune $S$.\n3. **Convergence.** Les suites extraites d'indices pairs et impairs convergent vers $S$, donc $(S_n)$ converge vers $S$ : la série converge et $R_n = S - S_n$.\n4. **Encadrement.** Une suite croissante est majorée par sa limite et une suite décroissante minorée par la sienne : pour tout $p$, $S_{2p+1} \\le S \\le S_{2p}$ et $S_{2p+1} \\le S \\le S_{2p+2}$.\n5. **Reste d'indice pair $n = 2p$.** De $S_{2p+1} \\le S \\le S_{2p}$ on tire $-u_{2p+1} = S_{2p+1} - S_{2p} \\le R_{2p} \\le 0$ : $R_n$ est négatif, du signe de $(-1)^{n+1}$, et $|R_n| \\le u_{n+1}$.\n6. **Reste d'indice impair $n = 2p + 1$.** De $S_{2p+1} \\le S \\le S_{2p+2}$ on tire $0 \\le R_{2p+1} \\le S_{2p+2} - S_{2p+1} = u_{2p+2}$ : $R_n$ est positif et $|R_n| \\le u_{n+1}$."
      },
      "developments": [
        "Théorème de réarrangement de Riemann (niveau L2) : si $\\sum u_n$ est une série réelle semi-convergente, pour tout $\\ell \\in \\mathbb{R}$ il existe une bijection $\\sigma$ de $\\mathbb{N}$ telle que $\\sum u_{\\sigma(n)}$ converge vers $\\ell$ ; preuve par un algorithme glouton utilisant la divergence des séries des parties positives et négatives.",
        "Développement asymptotique de la série harmonique (niveau L1-L2) : $H_n = \\ln n + \\gamma + \\frac{1}{2n} + o\\left(\\frac{1}{n}\\right)$, en étudiant la série de terme $\\frac{1}{n} - \\ln\\left(1 + \\frac{1}{n}\\right)$, puis son reste par comparaison.",
        "Comparaison série-intégrale (niveau L1, lien avec la terminale) : pour $f$ positive et décroissante, $\\int_n^{n+1}f \\le f(n) \\le \\int_{n-1}^{n}f$, d'où la nature des séries de Riemann et l'équivalent $\\sum_{k=n+1}^{+\\infty}\\frac{1}{k^2} \\sim \\frac{1}{n}$.",
        "Produit de Cauchy (niveau L2) : preuve pour des séries absolument convergentes, application à $\\exp(a + b) = \\exp(a)\\exp(b)$ pour $a, b \\in \\mathbb{C}$, et contre-exemple : le produit de Cauchy de $\\sum \\frac{(-1)^n}{\\sqrt{n+1}}$ par elle-même a un terme général de module au moins 1, donc diverge."
      ],
      "juryTips": [
        "L'équivalence ne conserve la nature que pour des séries de signe constant à partir d'un certain rang : $u_n = \\frac{(-1)^n}{\\sqrt{n}} + \\frac{1}{n}$ est équivalent à $v_n = \\frac{(-1)^n}{\\sqrt{n}}$, la série $\\sum v_n$ converge et $\\sum u_n$ diverge.",
        "Le critère des séries alternées exige la décroissance : si pour $k \\ge 1$, $u_{2k} = \\frac{1}{k}$ et $u_{2k+1} = \\frac{1}{k^2}$, alors $u_n \\to 0$ mais $\\sum (-1)^nu_n$ diverge, car deux termes consécutifs ont pour somme $\\frac{1}{k} - \\frac{1}{k^2}$.",
        "La règle de d'Alembert ne permet pas de conclure lorsque la limite du rapport vaut 1 : $\\sum \\frac{1}{n}$ diverge et $\\sum \\frac{1}{n^2}$ converge, avec la même limite 1.",
        "Sachez expliquer pourquoi la convergence absolue autorise à réordonner les termes, et donner un contre-exemple : en réarrangeant $\\sum \\frac{(-1)^{n+1}}{n}$ avec deux termes positifs pour un négatif, on obtient la somme $\\frac{3}{2}\\ln 2$ au lieu de $\\ln 2$.",
        "Situer la notion : au lycée, la somme des termes d'une suite géométrique et sa limite pour $|q| \\lt 1$ constituent le premier exemple de série ; le jury apprécie qu'on l'exploite, par exemple avec l'écriture décimale illimitée $0{,}999\\ldots = 1$."
      ]
    },
    {
      "id": "capes-10",
      "num": "Leçon 10",
      "title": "Arithmétique dans Z : divisibilité, pgcd, congruences et cryptographie RSA",
      "domain": "Algèbre & Arithmétique",
      "level": "CAPES / Agrégation",
      "prerequisites": [
        "Situation dans les programmes : multiples, diviseurs, nombres premiers et décomposition en facteurs premiers au cycle 4 et en seconde ; en option mathématiques expertes de terminale, division euclidienne, congruences, PGCD, théorèmes de Bézout et de Gauss, petit théorème de Fermat, avec des activités de chiffrement.",
        "Construction de $\\mathbb{N}$ et de $\\mathbb{Z}$, récurrence, toute partie non vide de $\\mathbb{N}$ admet un plus petit élément.",
        "Groupes, sous-groupes, anneaux, idéaux, théorème de Lagrange.",
        "Algorithmique : boucles et fonctions en Python (algorithme d'Euclide, exponentiation modulaire rapide)."
      ],
      "plan": [
        {
          "part": "I. Divisibilité, PGCD et algorithme d'Euclide",
          "content": "Division euclidienne : pour $a \\in \\mathbb{Z}$ et $b \\in \\mathbb{N}^{\\ast}$, il existe un unique couple $(q, r)$ avec $a = bq + r$ et $0 \\le r \\lt b$. Les sous-groupes de $\\mathbb{Z}$ sont les $n\\mathbb{Z}$, $n \\in \\mathbb{N}$. PGCD défini par $a\\mathbb{Z} + b\\mathbb{Z} = (a \\wedge b)\\mathbb{Z}$, PPCM par $a\\mathbb{Z} \\cap b\\mathbb{Z} = (a \\vee b)\\mathbb{Z}$, et $(a \\wedge b)(a \\vee b) = |ab|$. Algorithme d'Euclide, fondé sur $a \\wedge b = b \\wedge r$, et algorithme étendu. Théorèmes de Bézout et de Gauss. L'équation $ax + by = c$ a des solutions entières si et seulement si $a \\wedge b$ divise $c$. Exemple : $17 \\wedge 5 = 1$ et $17 \\times (-2) + 5 \\times 7 = 1$."
        },
        {
          "part": "II. Nombres premiers et décomposition",
          "content": "Tout entier $n \\ge 2$ admet un diviseur premier ; il existe une infinité de nombres premiers. Lemme d'Euclide : si un nombre premier $p$ divise $ab$, alors $p$ divise $a$ ou $b$. Théorème fondamental de l'arithmétique : existence et unicité, à l'ordre près, de la décomposition en produit de facteurs premiers. Valuations $p$-adiques, expression du PGCD et du PPCM, nombre de diviseurs $\\prod(\\alpha_i + 1)$. Crible d'Ératosthène : un entier $n \\ge 2$ sans diviseur premier inférieur ou égal à $\\sqrt{n}$ est premier. Exemple : $360 = 2^3 \\times 3^2 \\times 5$ possède $4 \\times 3 \\times 2 = 24$ diviseurs positifs."
        },
        {
          "part": "III. Congruences, anneaux Z/nZ et cryptographie",
          "content": "Congruences modulo $n$, compatibles avec l'addition et la multiplication ; anneau $\\mathbb{Z}/n\\mathbb{Z}$. Théorème : la classe de $a$ est inversible si et seulement si $a \\wedge n = 1$, et $\\mathbb{Z}/n\\mathbb{Z}$ est un corps si et seulement si $n$ est premier. Indicateur d'Euler $\\varphi(n)$, multiplicativité, $\\varphi(p^k) = p^k - p^{k-1}$. Théorème d'Euler $a^{\\varphi(n)} \\equiv 1 \\pmod n$ si $a \\wedge n = 1$, conséquence du théorème de Lagrange dans le groupe des inversibles, et petit théorème de Fermat. Théorème chinois. Chiffrement RSA avec $n = pq$ et $ed \\equiv 1 \\pmod{\\varphi(n)}$, exponentiation rapide. Exemple : $p = 5$, $q = 11$, $n = 55$, $\\varphi(n) = 40$, $e = 3$, $d = 27$."
        }
      ],
      "keyTheorem": {
        "title": "Théorème de Bézout et lemme de Gauss",
        "statement": "Soient $a, b \\in \\mathbb{Z}$ et $d = a \\wedge b$ leur PGCD (avec $0 \\wedge 0 = 0$). (i) Il existe $u, v \\in \\mathbb{Z}$ tels que $au + bv = d$. (ii) Les entiers $a$ et $b$ sont premiers entre eux si et seulement s'il existe $u, v \\in \\mathbb{Z}$ tels que $au + bv = 1$. (iii) Lemme de Gauss : si $a$ divise $bc$ et si $a \\wedge b = 1$, alors $a$ divise $c$.",
        "proof": "1. **Sous-groupe.** $H = a\\mathbb{Z} + b\\mathbb{Z} = \\{au + bv : u, v \\in \\mathbb{Z}\\}$ contient 0 et est stable par différence : c'est un sous-groupe de $(\\mathbb{Z}, +)$.\n2. **Sous-groupes de $\\mathbb{Z}$.** Si $H = \\{0\\}$, $H = 0\\mathbb{Z}$. Sinon, $H \\cap \\mathbb{N}^{\\ast}$ est non vide (car $H$ est stable par opposé) et admet un plus petit élément $\\delta$, et $\\delta\\mathbb{Z} \\subset H$. Pour $h \\in H$, la division euclidienne $h = \\delta q + r$ avec $0 \\le r \\lt \\delta$ donne $r = h - \\delta q \\in H$, donc $r = 0$ par minimalité de $\\delta$. Ainsi $H = \\delta\\mathbb{Z}$ avec $\\delta \\in \\mathbb{N}$.\n3. **Identification du PGCD.** Comme $a = a \\times 1 + b \\times 0 \\in H$, $\\delta$ divise $a$, et de même $\\delta$ divise $b$. Réciproquement, tout diviseur commun de $a$ et $b$ divise toute combinaison $au + bv$, en particulier $\\delta \\in H$. Donc $\\delta$ est le plus grand diviseur commun positif, $\\delta = d$, et puisque $d \\in H$, (i) est démontré.\n4. **Point (ii).** Si $a \\wedge b = 1$, (i) fournit $u, v$. Réciproquement, si $au + bv = 1$, tout diviseur commun positif de $a$ et $b$ divise 1, donc $a \\wedge b = 1$.\n5. **Lemme de Gauss.** Avec $au + bv = 1$, on a $c = acu + bcv$. Or $a$ divise $acu$ et $a$ divise $bc$, donc $a$ divise $c$."
      },
      "developments": [
        "Cryptosystème RSA (niveau mathématiques expertes-L2) : choix de $n = pq$ avec $p \\neq q$ premiers, de $e$ premier avec $\\varphi(n)$ et de $d$ inverse de $e$ modulo $\\varphi(n)$ par Euclide étendu ; preuve que $m^{ed} \\equiv m \\pmod n$ pour tout entier $m$, même non premier avec $n$, par le petit théorème de Fermat modulo $p$ et modulo $q$ puis le lemme de Gauss ; sécurité liée à la difficulté de factoriser $n$.",
        "Théorème chinois (niveau mathématiques expertes-L2) : si $m \\wedge n = 1$, l'application de $\\mathbb{Z}/mn\\mathbb{Z}$ dans $\\mathbb{Z}/m\\mathbb{Z} \\times \\mathbb{Z}/n\\mathbb{Z}$ est un isomorphisme d'anneaux, avec une solution explicite par Bézout ; exemple : $x \\equiv 2 \\pmod 3$ et $x \\equiv 3 \\pmod 5$ équivalent à $x \\equiv 8 \\pmod{15}$ ; corollaire : multiplicativité de $\\varphi$.",
        "Infinité des nombres premiers et variantes (niveau seconde-L1) : preuve d'Euclide, infinité des nombres premiers de la forme $4k + 3$, et existence de $n$ entiers consécutifs composés, $(n+1)! + 2, \\dots, (n+1)! + n + 1$.",
        "Petit théorème de Fermat (niveau mathématiques expertes) : preuve par la formule du binôme, $p$ divisant $\\binom{p}{k}$ pour $1 \\le k \\le p - 1$, et récurrence sur $a$, puis preuve par le groupe des inversibles de $\\mathbb{Z}/p\\mathbb{Z}$ ; la réciproque est fausse : $561 = 3 \\times 11 \\times 17$ vérifie $a^{560} \\equiv 1 \\pmod{561}$ pour tout $a$ premier avec 561."
      ],
      "juryTips": [
        "Le lemme de Gauss exige l'hypothèse $a \\wedge b = 1$ : 6 divise $4 \\times 3$ sans diviser ni 4 ni 3.",
        "Le lemme d'Euclide est faux pour un diviseur non premier, et c'est lui qui fonde l'unicité de la décomposition en facteurs premiers ; le jury demande souvent où il intervient dans la preuve.",
        "Le couple de Bézout n'est pas unique : si $au_0 + bv_0 = 1$, les solutions de $au + bv = 1$ sont les $(u_0 + kb, v_0 - ka)$, $k \\in \\mathbb{Z}$ ; pour $17u + 5v = 1$, $(-2, 7)$ et $(3, -10)$ conviennent.",
        "Sachez exécuter l'algorithme d'Euclide étendu au tableau pour calculer un inverse modulaire : l'inverse de 7 modulo 26 est 15, car $7 \\times 15 = 105 = 4 \\times 26 + 1$.",
        "Situer la notion : divisibilité et nombres premiers sont travaillés au collège et en seconde, congruences et Bézout en mathématiques expertes ; le jury apprécie un raisonnement accessible à un élève, comme la preuve par la parité de l'irrationalité de $\\sqrt{2}$."
      ]
    },
    {
      "id": "capes-oral2",
      "num": "Oral 2",
      "title": "Épreuve d'entretien : Éthique professionnelle, laïcité et valeurs de la République",
      "domain": "Éthique & Laïcité",
      "level": "CAPES / Agrégation",
      "prerequisites": [
        "Format de l'épreuve d'entretien du CAPES externe (35 minutes) : une première partie sur la motivation et le parcours du candidat, appuyée sur la fiche individuelle de renseignement qu'il a remplie, puis une seconde partie consacrée à deux mises en situation professionnelles, l'une d'enseignement, l'autre relative à la vie scolaire ; le jury apprécie l'aptitude à s'approprier les valeurs de la République et les exigences du service public.",
        "Constitution du 4 octobre 1958, article 1er : la France est une République indivisible, laïque, démocratique et sociale, qui assure l'égalité devant la loi de tous les citoyens et respecte toutes les croyances.",
        "Code de l'éducation, article L. 111-1 : outre la transmission des connaissances, la Nation fixe comme mission première à l'école de faire partager aux élèves les valeurs de la République ; le service public de l'éducation veille à l'inclusion scolaire de tous les enfants.",
        "Loi du 9 décembre 1905 concernant la séparation des Églises et de l'État, et loi n° 2004-228 du 15 mars 2004, codifiée à l'article L. 141-5-1 du Code de l'éducation, sur le port de signes ou de tenues manifestant ostensiblement une appartenance religieuse.",
        "Statut des fonctionnaires, aujourd'hui regroupé dans le Code général de la fonction publique (qui reprend notamment la loi n° 83-634 du 13 juillet 1983), et référentiel des compétences professionnelles des métiers du professorat et de l'éducation (arrêté du 1er juillet 2013)."
      ],
      "plan": [
        {
          "part": "I. Cadre institutionnel et principes républicains",
          "content": "La Constitution fait de la laïcité un principe de la République : neutralité de l'État, égalité des citoyens sans distinction de religion, respect de toutes les croyances. La loi de 1905 garantit la liberté de conscience et le libre exercice des cultes, et pose que la République ne reconnaît, ne salarie ni ne subventionne aucun culte. Le Code de l'éducation (article L. 111-1) assigne à l'école la mission de faire partager les valeurs de la République, de contribuer à l'égalité des chances et de veiller à l'inclusion de tous les élèves. La loi du 15 mars 2004 interdit aux élèves des écoles, collèges et lycées publics le port de signes ou tenues par lesquels ils manifestent ostensiblement une appartenance religieuse, et prévoit qu'une procédure disciplinaire est précédée d'un dialogue avec l'élève. La Charte de la laïcité à l'École (2013), affichée dans les établissements, rappelle notamment qu'aucun élève ne peut invoquer une conviction religieuse ou politique pour contester à un enseignant le droit de traiter une question au programme."
        },
        {
          "part": "II. Le professeur, fonctionnaire de l'État : droits, obligations, compétences",
          "content": "Droits : liberté d'opinion, garanties statutaires, protection fonctionnelle accordée par l'administration à l'agent attaqué en raison de ses fonctions. Obligations : neutralité et respect du principe de laïcité dans l'exercice des fonctions, ce qui interdit de manifester ses convictions religieuses en service ; dignité, impartialité, intégrité et probité ; traitement égal de tous les usagers ; secret professionnel et discrétion professionnelle ; obéissance hiérarchique, sauf ordre manifestement illégal et de nature à compromettre gravement un intérêt public ; devoir de réserve dans l'expression publique, dégagé par la jurisprudence. Le Conseil d'État (avis du 3 mai 2000, Mlle Marteaux) a précisé qu'un agent du service public de l'enseignement ne peut manifester ses croyances religieuses dans l'exercice de ses fonctions. Le référentiel de 2013 décrit les compétences attendues : faire partager les valeurs de la République, inscrire son action dans le cadre des principes fondamentaux du système éducatif et dans le cadre réglementaire de l'école, prendre en compte la diversité des élèves, coopérer au sein d'une équipe et avec les parents, maîtriser les savoirs disciplinaires et leur didactique, évaluer les progrès des élèves."
        },
        {
          "part": "III. Mises en situation : une démarche de réponse",
          "content": "Première étape : analyser la situation et nommer les enjeux (sécurité des élèves, droit à l'instruction, apprentissages, valeurs en jeu). Deuxième étape : agir dans la classe avec calme, rappeler la règle sans entrer dans un débat sur les croyances, protéger les élèves, ne pas humilier, poursuivre le cours. Troisième étape : ne pas rester seul, informer le professeur principal, le conseiller principal d'éducation et le chef d'établissement, associer la famille, s'appuyer sur les personnels sociaux et de santé et, pour les atteintes à la laïcité, sur l'équipe académique Valeurs de la République. Quatrième étape, si un mineur est en danger ou en risque de l'être : transmettre une information préoccupante selon la procédure prévue ; tout fonctionnaire qui acquiert la connaissance d'un crime ou d'un délit dans l'exercice de ses fonctions doit en aviser le procureur de la République (article 40 du Code de procédure pénale). Situations fréquentes en mathématiques : contestation d'un contenu au nom d'une croyance, refus de travailler en groupe mixte, harcèlement entre élèves, fraude à une évaluation, élève à besoins éducatifs particuliers bénéficiant d'un plan d'accompagnement personnalisé ou d'un projet personnalisé de scolarisation."
        }
      ],
      "keyTheorem": {
        "title": "Neutralité de l'agent public et liberté de conscience des élèves",
        "statement": "Dans l'exercice de ses fonctions, le professeur, agent public, est tenu à l'obligation de neutralité et exerce ses fonctions dans le respect du principe de laïcité : il s'abstient notamment de manifester ses opinions religieuses, traite de façon égale toutes les personnes et respecte leur liberté de conscience et leur dignité (statut général des fonctionnaires, dispositions introduites par la loi du 20 avril 2016 et reprises dans le Code général de la fonction publique). Les élèves, usagers du service public, ne sont pas soumis à cette obligation de neutralité ; leur liberté de conscience est protégée, dans les limites fixées par la loi du 15 mars 2004 et par le règlement intérieur.",
        "proof": "1. **Fondement constitutionnel.** La République est laïque (article 1er de la Constitution) : l'État et ses services sont neutres, ce qui s'impose à ceux qui les font fonctionner, afin que chaque usager soit traité sans considération de ses convictions.\n2. **Fondement législatif.** Le statut général des fonctionnaires énonce l'obligation de neutralité et le respect de la laïcité ; le Code de l'éducation confie à l'école la mission de faire partager les valeurs de la République (article L. 111-1).\n3. **Jurisprudence administrative.** Par son avis du 3 mai 2000, le Conseil d'État a indiqué que le principe de laïcité fait obstacle à ce que les agents du service public de l'enseignement manifestent leurs croyances religieuses dans l'exercice de leurs fonctions, qu'ils enseignent ou non.\n4. **Asymétrie entre agents et usagers.** Les élèves ne sont pas des agents publics. Avant 2004, le Conseil d'État (avis du 27 novembre 1989) admettait le port de signes religieux par les élèves sauf pression, prosélytisme ou trouble ; la loi du 15 mars 2004 a ensuite interdit les signes et tenues manifestant ostensiblement une appartenance religieuse, après un dialogue avec l'élève.\n5. **Conséquences pour la classe.** Le professeur peut traiter des faits religieux ou historiques comme objets de savoir, mais ne prend pas parti ; il distingue ce qui relève du savoir, établi par la démonstration et l'argumentation, de ce qui relève de la croyance, qui appartient à chacun.\n6. **Limites et prudence.** Les parents d'élèves ne sont pas des agents publics ; leur situation, par exemple lors de l'accompagnement de sorties scolaires, relève de l'appréciation du chef d'établissement dans le cadre fixé par l'institution, et le candidat ne doit pas trancher seul ces questions."
      },
      "developments": [
        "Mise en situation d'enseignement : en cours de probabilités, un élève déclare que le hasard n'existe pas et refuse l'exercice au nom de ses convictions. Réponse attendue : expliquer qu'une probabilité est un outil de modélisation et non une thèse sur le monde, rappeler que les programmes s'imposent à tous sans humilier l'élève, poursuivre le cours, puis reprendre l'échange individuellement et informer l'équipe si le refus persiste.",
        "Mise en situation de vie scolaire : un élève confie être la cible de moqueries répétées sur un réseau social de la part de camarades de la classe. Réponse attendue : écouter et prendre la parole au sérieux, ne pas promettre le secret, informer sans délai le conseiller principal d'éducation et le chef d'établissement, qui mettent en œuvre le protocole de traitement du harcèlement ; depuis la loi du 2 mars 2022, le harcèlement scolaire constitue un délit.",
        "Mise en situation d'évaluation et d'inclusion : un élève bénéficiant d'un plan d'accompagnement personnalisé demande les aménagements prévus lors d'un devoir surveillé. Réponse attendue : les appliquer sans les commenter devant la classe, en lien avec le professeur principal, et expliquer que l'équité n'est pas l'uniformité, conformément à l'objectif d'inclusion fixé par l'article L. 111-1.",
        "Question de motivation : expliquer pourquoi devenir professeur de mathématiques en reliant son parcours à une conception argumentée du métier (transmission des savoirs, exigence, accompagnement de tous les élèves, travail en équipe), illustrée par un exemple concret plutôt que par la récitation du référentiel."
      ],
      "juryTips": [
        "Ne pas opposer laïcité et liberté : la laïcité garantit la liberté de conscience de chacun et l'égalité de tous ; elle impose la neutralité à l'État et à ses agents, non aux élèves en tant que tels.",
        "Ne citer que des textes dont on est sûr : un numéro d'article erroné ou une jurisprudence approximative dessert davantage qu'une réponse fondée sur les principes (Constitution, article L. 111-1, loi de 2004, statut de fonctionnaire, référentiel de 2013).",
        "Ne pas présenter une réponse solitaire : le jury attend que le candidat situe son action dans une équipe (professeur principal, conseiller principal d'éducation, chef d'établissement, personnels sociaux et de santé) et connaisse les circuits de signalement.",
        "Le dialogue avec l'élève et sa famille précède la procédure disciplinaire, mais il vise la compréhension de la règle et non sa négociation.",
        "Relier les situations à la discipline : la démarche mathématique (distinction entre conjecture et preuve, esprit critique face aux chiffres et aux statistiques) contribue à la formation du citoyen, ce que le jury apprécie de voir illustré par un exemple de classe."
      ]
    }
  ];

  const CAPES_CHAPTERS = CAPES_LESSONS.map((lesson) => {
    let domain = 'analyse';
    if (lesson.id === 'capes-oral2' || (lesson.domain && lesson.domain.includes('Éthique'))) domain = 'oral2';
    else if (lesson.domain.includes('Algèbre')) domain = 'algebre';
    else if (lesson.domain.includes('Géométrie')) domain = 'geometrie';
    else if (lesson.domain.includes('Probabilités')) domain = 'probas';
    else if (lesson.domain.includes('Arithmétique')) domain = 'arithmetique';

    return {
      id: lesson.id,
      level: 'capes',
      domain: domain,
      domainName: lesson.domain,
      folder: lesson.id,
      num: lesson.num,
      title: lesson.title,
      shortTitle: lesson.title.split(':')[0].trim(),
      icon: lesson.id === 'capes-oral2' ? 'scale' : 'award',
      badge: lesson.id === 'capes-oral2' ? 'Épreuve d\'Admission' : 'Candidat Admissible',
      color: lesson.id === 'capes-oral2' ? '#ec4899' : '#8b5cf6',
      description: lesson.plan.map(p => p.part).join(' • '),
      skills: lesson.prerequisites
    };
  });

  // =========================================================================
  // 2. EXERCICES D'ENTRAÎNEMENT OFFICIELS CAPES / AGRÉGATION (Paliers 1 à 4)
  // =========================================================================

  const CAPES_EXERCISES = {
    'capes-01': [
      {
        id: 'capes-01-1',
        chapterId: 'capes-01',
        tier: 1,
        title: "Dimension de l'espace des solutions d'une EDO linéaire scalaire d'ordre n",
        statement: "Soit $I \\subset \\mathbb{R}$ un intervalle et $(E) : y^{(n)} + a_{n-1}(t)y^{(n-1)} + \\dots + a_0(t)y = 0$ une équation différentielle linéaire homogène d'ordre $n$, où les coefficients $a_k$ sont continus sur $I$. Quelle est la dimension de l'espace vectoriel $\\mathcal{S}_H$ de ses solutions sur $I$ ?",
        type: "mcq",
        options: [
          "$\\dim(\\mathcal{S}_H) = n$",
          "$\\dim(\\mathcal{S}_H) = 1$",
          "$\\dim(\\mathcal{S}_H) = n+1$",
          "$\\dim(\\mathcal{S}_H) = +\\infty$"
        ],
        correctIndex: 0,
        answer: "$\\dim(\\mathcal{S}_H) = n$",
        hint1: "Penser au théorème de Cauchy-Lipschitz linéaire et à l'application linéaire associant à une solution la donnée de ses dérivées en un point $t_0$.",
        solution: "D'après le théorème de Cauchy-Lipschitz linéaire, pour tout $t_0 \\in I$, l'application d'évaluation initiale $\\Phi : \\mathcal{S}_H \\to \\mathbb{R}^n$, $y \\mapsto (y(t_0), y'(t_0), \\dots, y^{(n-1)}(t_0))$ est un isomorphisme vectoriel. Par conséquent, $\\dim(\\mathcal{S}_H) = \\dim(\\mathbb{R}^n) = n$."
      },
      {
        id: 'capes-01-2',
        chapterId: 'capes-01',
        tier: 2,
        title: "Wronskien de deux solutions et formule de Liouville",
        statement: "Soient $y_1, y_2$ deux solutions sur $\\mathbb{R}$ de l'équation $y'' + p(t)y' + q(t)y = 0$, avec $p, q$ continues. On note $W(t) = y_1(t)y_2'(t) - y_1'(t)y_2(t)$ leur Wronskien. Quelle équation différentielle vérifie $W(t)$ ?",
        type: "mcq",
        options: [
          "$W'(t) + p(t)W(t) = 0$, d'où $W(t) = W(t_0) \\exp\\left(-\\int_{t_0}^t p(s)\\,ds\\right)$",
          "$W'(t) - q(t)W(t) = 0$",
          "$W'(t) + q(t)W(t) = p(t)$",
          "$W''(t) + p(t)W'(t) = 0$"
        ],
        correctIndex: 0,
        answer: "$W'(t) + p(t)W(t) = 0$, d'où $W(t) = W(t_0) \\exp\\left(-\\int_{t_0}^t p(s)\\,ds\\right)$",
        hint1: "Dériver le déterminant Wronskien : $W'(t) = y_1 y_2'' - y_1'' y_2$ et substituer $y_i'' = -p y_i' - q y_i$.",
        solution: "En dérivant : $W'(t) = y_1' y_2' + y_1 y_2'' - (y_1'' y_2 + y_1' y_2') = y_1 y_2'' - y_1'' y_2$. En remplaçant $y_i'' = -p(t)y_i' - q(t)y_i$, les termes en $q$ s'annulent et il reste $W'(t) = -p(t)(y_1 y_2' - y_1' y_2) = -p(t)W(t)$. C'est la formule de Liouville-Ostrogradski : $W(t) = W(t_0)\\exp(-\\int_{t_0}^t p(s)\\,ds)$. En particulier, $W$ ne s'annule jamais ou est identiquement nul."
      },
      {
        id: 'capes-01-3',
        chapterId: 'capes-01',
        tier: 3,
        title: "Phénomène de résonance pour un oscillateur forcé non amorti",
        statement: "On considère l'équation différentielle de l'oscillateur harmonique forcé non amorti : $y'' + 9y = 6\\cos(3t)$. Quelle est la forme d'une solution particulière $y_p(t)$ sur $\\mathbb{R}$ ?",
        type: "mcq",
        options: [
          "$y_p(t) = t \\sin(3t)$",
          "$y_p(t) = \\frac{2}{3} \\cos(3t)$",
          "$y_p(t) = e^{3t} \\sin(3t)$",
          "$y_p(t) = 6t \\cos(3t)$"
        ],
        correctIndex: 0,
        answer: "$y_p(t) = t \\sin(3t)$",
        hint1: "L'équation caractéristique est $r^2 + 9 = 0 \\implies r = \\pm 3i$. Comme le second membre a pour pulsation $\\omega = 3$, il y a résonance, la solution particulière est de la forme $t(A\\cos(3t) + B\\sin(3t))$.",
        solution: "L'équation homogène a pour solutions $y_H(t) = A\\cos(3t) + B\\sin(3t)$. La pulsation d'excitation est $\\omega = 3$, qui est précisément la pulsation propre. Comme $3i$ est racine simple du polynôme caractéristique $P(r) = r^2+9$, on cherche une solution complexe de $z'' + 9z = 6e^{3it}$ sous la forme $z(t) = C t e^{3it}$. On a $P'(3i) = 2(3i) = 6i$, donc $C = \\frac{6}{P'(3i)} = \\frac{6}{6i} = -i$. Ainsi $z(t) = -i t e^{3it} = -i t (\\cos(3t) + i\\sin(3t)) = t\\sin(3t) - it\\cos(3t)$. La partie réelle est $y_p(t) = t\\sin(3t)$. On vérifie bien $y_p'' + 9y_p = 6\\cos(3t)$."
      },
      {
        id: 'capes-01-4',
        chapterId: 'capes-01',
        tier: 4,
        title: "Stabilité asymptotique globale d'un système linéaire autonome",
        statement: "Soit le système différentiel $Y' = AY$ dans $\\mathbb{R}^n$, où $A \\in \\mathcal{M}_n(\\mathbb{R})$. À quelle condition nécessaire et suffisante sur les valeurs propres de $A$ l'origine $0$ est-elle un équilibre globalement asymptotiquement stable (c'est-à-dire $\\lim_{t \\to +\\infty} Y(t) = 0$ pour toute condition initiale) ?",
        type: "mcq",
        options: [
          "Toutes les valeurs propres de A (réelles ou complexes) ont une partie réelle strictement négative : $\\forall \\lambda \\in \\mathrm{Sp}(A),\\; \\mathrm{Re}(\\lambda) < 0$",
          "Toutes les valeurs propres de A sont réelles et négatives ou nulles",
          "Le déterminant de A est strictement négatif",
          "La trace de A est strictement négative"
        ],
        correctIndex: 0,
        answer: "Toutes les valeurs propres de A (réelles ou complexes) ont une partie réelle strictement négative : $\\forall \\lambda \\in \\mathrm{Sp}(A),\\; \\mathrm{Re}(\\lambda) < 0$",
        hint1: "Penser à la décomposition de Dunford ou à la réduction de Jordan : les composantes de $\\exp(tA)$ font intervenir des termes de la forme $t^k e^{\\lambda t}$.",
        solution: "Par décomposition de Jordan ou Dunford de $A$, les coefficients de la matrice résolvante $\\exp(tA)$ sont des combinaisons linéaires de fonctions de la forme $t^k e^{\\lambda t} = t^k e^{\\mathrm{Re}(\\lambda)t} e^{i \\mathrm{Im}(\\lambda)t}$ où $\\lambda \\in \\mathrm{Sp}(A)$ et $0 \\le k \\le n-1$. Ces termes tendent vers 0 quand $t \\to +\\infty$ si et seulement si $\\mathrm{Re}(\\lambda) < 0$ pour toute valeur propre $\\lambda$. Le système est donc asymptotiquement stable si et seulement si toutes les valeurs propres de $A$ sont de partie réelle strictement négative. Le critère de Routh-Hurwitz permet ensuite de vérifier cette condition sur les seuls coefficients du polynôme caractéristique, sans calculer les valeurs propres."
      }
    ],

    'capes-02': [
      {
        id: 'capes-02-1',
        chapterId: 'capes-02',
        tier: 1,
        title: "Caractérisation spectrale de la diagonalisabilité",
        statement: "Soit $E$ un espace vectoriel de dimension finie $n \\ge 1$ sur un corps $K$ et $u \\in \\mathcal{L}(E)$. Laquelle des assertions suivantes équivaut à la diagonalisabilité de $u$ sur $K$ ?",
        type: "mcq",
        options: [
          "Le polynôme minimal $\\pi_u$ est scindé sur K à racines simples",
          "Le polynôme caractéristique $\\chi_u$ n'a que des racines simples",
          "Le déterminant de u est non nul",
          "La trace de u est égale à la somme des dimensions des sous-espaces propres"
        ],
        correctIndex: 0,
        answer: "Le polynôme minimal $\\pi_u$ est scindé sur K à racines simples",
        hint1: "Un endomorphisme peut être diagonalisable même si $\\chi_u$ admet des racines multiples (ex: l'identité). En revanche, le lemme des noyaux appliqué à $\\pi_u$ donne une CNS.",
        solution: "D'après le lemme des noyaux, si $\\pi_u(X) = \\prod_{i=1}^k (X - \\lambda_i)$ avec les $\\lambda_i$ distincts deux à deux, alors $\\ker(\\pi_u(u)) = E = \\bigoplus_{i=1}^k \\ker(u - \\lambda_i \\mathrm{Id})$, ce qui montre que $E$ est somme directe de ses sous-espaces propres, donc $u$ est diagonalisable. Réciproquement, si $u$ est diagonalisable, $\\prod (X - \\lambda_i)$ annule $u$ et est donc le polynôme minimal."
      },
      {
        id: 'capes-02-2',
        chapterId: 'capes-02',
        tier: 2,
        title: "Polynôme annulateur et critère de diagonalisation",
        statement: "Soit $A \\in \\mathcal{M}_3(\\mathbb{R})$ telle que $A \\ne I_3$, $A \\ne -2I_3$ et vérifiant $A^3 - 3A + 2I_3 = 0$. Sachant que $X^3 - 3X + 2 = (X - 1)^2(X + 2)$, quelle condition nécessaire et suffisante garantit que $A$ est diagonalisable sur $\\mathbb{R}$ ?",
        type: "mcq",
        options: [
          "Son polynôme minimal est $\\pi_A(X) = (X - 1)(X + 2)$, c'est-à-dire $(A - I_3)(A + 2I_3) = 0$",
          "Son déterminant est strictement positif",
          "Sa trace est égale à 0",
          "A est nécessairement toujours diagonalisable sans condition supplémentaire"
        ],
        correctIndex: 0,
        answer: "Son polynôme minimal est $\\pi_A(X) = (X - 1)(X + 2)$, c'est-à-dire $(A - I_3)(A + 2I_3) = 0$",
        hint1: "Pour être diagonalisable, le polynôme minimal de $A$ doit être scindé à racines simples. Il divise $(X-1)^2(X+2)$.",
        solution: "Le polynôme $P(X) = (X - 1)^2(X + 2)$ annule $A$. Le polynôme minimal $\\pi_A$ divise $P(X)$. Pour que $A$ soit diagonalisable, $\\pi_A$ doit être scindé à racines simples. Les diviseurs à racines simples contenant à la fois 1 et -2 (car $A \\ne I_3$ et $A \\ne -2I_3$) sont $(X-1)(X+2)$. Donc $A$ est diagonalisable ssi $(A - I_3)(A + 2I_3) = 0$."
      },
      {
        id: 'capes-02-3',
        chapterId: 'capes-02',
        tier: 3,
        title: "Décomposition de Dunford et calcul de l'exponentielle",
        statement: "Soit $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix} \\in \\mathcal{M}_2(\\mathbb{R})$. On pose $D = 2I_2$ et $N = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$. Quelle est l'expression exacte de l'exponentielle $\\exp(tA)$ pour $t \\in \\mathbb{R}$ ?",
        type: "mcq",
        options: [
          "$\\exp(tA) = e^{2t} \\begin{pmatrix} 1 & t \\\\ 0 & 1 \\end{pmatrix}$",
          "$\\exp(tA) = e^{2t} \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
          "$\\exp(tA) = \\begin{pmatrix} e^{2t} & e^t \\\\ 0 & e^{2t} \\end{pmatrix}$",
          "$\\exp(tA) = e^{2t} \\begin{pmatrix} 1 & t^2/2 \\\\ 0 & 1 \\end{pmatrix}$"
        ],
        correctIndex: 0,
        answer: "$\\exp(tA) = e^{2t} \\begin{pmatrix} 1 & t \\\\ 0 & 1 \\end{pmatrix}$",
        hint1: "Comme $D$ et $N$ commutent ($DN = ND$), on a $\\exp(tA) = \\exp(tD)\\exp(tN)$. De plus, $N^2 = 0$ donc $\\exp(tN) = I_2 + tN$.",
        solution: "La décomposition de Dunford de $tA$ est $tA = tD + tN$ avec $D$ diagonalisable et $N$ nilpotente ($N^2 = 0$). Comme $D = 2I_2$ commute avec toute matrice, $\\exp(tA) = \\exp(tD)\\exp(tN) = (e^{2t}I_2)(I_2 + tN + \\frac{t^2}{2}N^2 + \\dots) = e^{2t}(I_2 + tN) = e^{2t} \\begin{pmatrix} 1 & t \\\\ 0 & 1 \\end{pmatrix}$."
      },
      {
        id: 'capes-02-4',
        chapterId: 'capes-02',
        tier: 4,
        title: "Endomorphismes cycliques et égalité des polynômes",
        statement: "Soit $E$ un espace vectoriel de dimension $n$ sur $K$ et $u \\in \\mathcal{L}(E)$. On dit que $u$ est cyclique s'il existe $x_0 \\in E$ tel que $(x_0, u(x_0), \\dots, u^{n-1}(x_0))$ soit une base de $E$. Laquelle des propriétés suivantes est équivalente à la cyclicité de $u$ ?",
        type: "mcq",
        options: [
          "Le degré du polynôme minimal est égal à la dimension de l'espace : $\\deg(\\pi_u) = \\deg(\\chi_u) = n$, soit $\\pi_u = (-1)^n \\chi_u$",
          "Toutes les valeurs propres de u sont nulles",
          "u est diagonalisable",
          "La dimension de chaque sous-espace propre est supérieure ou égale à 2"
        ],
        correctIndex: 0,
        answer: "Le degré du polynôme minimal est égal à la dimension de l'espace : $\\deg(\\pi_u) = \\deg(\\chi_u) = n$, soit $\\pi_u = (-1)^n \\chi_u$",
        hint1: "Si la famille $(u^k(x_0))_{0 \\le k \\le n-1}$ est libre, aucun polynôme non nul de degré $< n$ ne peut annuler $x_0$.",
        solution: "Si $u$ est cyclique avec vecteur générateur $x_0$, alors pour tout polynôme $P$ non nul de degré $\\le n-1$, $P(u)(x_0) \\ne 0$, donc $\\deg(\\pi_u) \\ge n$. Comme $\\pi_u \\mid \\chi_u$ et $\\deg(\\chi_u) = n$, on en déduit $\\deg(\\pi_u) = n$. Réciproquement, d'après le théorème des facteurs invariants de Frobenius, $\\deg(\\pi_u) = n$ implique que $u$ n'a qu'un seul facteur invariant, ce qui équivaut à la cyclicité."
      }
    ],

    'capes-03': [
      {
        id: 'capes-03-1',
        chapterId: 'capes-03',
        tier: 1,
        title: "Théorème de Dirichlet et valeur de la série de Fourier",
        statement: "Soit $f : \\mathbb{R} \\to \\mathbb{R}$ une fonction $2\\pi$-périodique et $\\mathcal{C}^1$ par morceaux sur $\\mathbb{R}$. Que vaut la somme de sa série de Fourier $S(f)(x) = a_0 + \\sum_{n=1}^{+\\infty} (a_n\\cos(nx) + b_n\\sin(nx))$ en un point de discontinuité $x_0$ ?",
        type: "mcq",
        options: [
          "$\\frac{f(x_0^+) + f(x_0^-)}{2}$ (la demi-somme des limites à droite et à gauche)",
          "$f(x_0)$",
          "0",
          "La série de Fourier diverge en $x_0$"
        ],
        correctIndex: 0,
        answer: "$\\frac{f(x_0^+) + f(x_0^-)}{2}$ (la demi-somme des limites à droite et à gauche)",
        hint1: "Le théorème de Dirichlet fait intervenir les limites à droite et à gauche $f(x_0^+)$ et $f(x_0^-)$. En un point de continuité, elles valent toutes deux $f(x_0)$ ; en un point de saut, quelle valeur symétrique la série peut-elle prendre ? (Pense à l'onde créneau impaire en $x_0 = 0$.)",
        solution: "D'après le théorème de Dirichlet, pour toute fonction $f$ $2\\pi$-périodique et $\\mathcal{C}^1$ par morceaux, en tout point $x \\in \\mathbb{R}$, la série de Fourier converge et sa somme vaut la régularisée de $f$, c'est-à-dire $\\frac{f(x^+) + f(x^-)}{2}$. Si $f$ est continue en $x_0$, cette valeur coïncide avec $f(x_0)$."
      },
      {
        id: 'capes-03-2',
        chapterId: 'capes-03',
        tier: 2,
        title: "Coefficients de Fourier d'une onde créneau",
        statement: "Soit $f$ la fonction $2\\pi$-périodique, impaire, définie sur $]0, \\pi[$ par $f(x) = 1$ et $f(0) = f(\\pi) = 0$. Quels sont ses coefficients de Fourier réels $b_n$ pour $n \\ge 1$ ?",
        type: "mcq",
        options: [
          "$b_n = \\frac{4}{\\pi n}$ si n est impair, et $b_n = 0$ si n est pair",
          "$b_n = \\frac{2}{\\pi n}$ pour tout n",
          "$b_n = \\frac{(-1)^n}{\\pi n^2}$",
          "$b_n = 0$ pour tout n"
        ],
        correctIndex: 0,
        answer: "$b_n = \\frac{4}{\\pi n}$ si n est impair, et $b_n = 0$ si n est pair",
        hint1: "Comme $f$ est impaire, $a_n = 0$ et $b_n = \\frac{2}{\\pi} \\int_0^\\pi \\sin(nt)\\,dt = \\frac{2}{\\pi n}[-\\cos(nt)]_0^\\pi$.",
        solution: "Par imparité de $f$, $a_n = 0$ pour tout $n$. Pour $b_n$ : $b_n = \\frac{2}{\\pi} \\int_0^\\pi 1 \\cdot \\sin(nt)\\,dt = \\frac{2}{\\pi n} (1 - \\cos(n\\pi)) = \\frac{2(1 - (-1)^n)}{\\pi n}$. Si $n = 2k$ est pair, $1 - (-1)^{2k} = 0$, d'où $b_{2k} = 0$. Si $n = 2k+1$ est impair, $1 - (-1)^{2k+1} = 2$, d'où $b_{2k+1} = \\frac{4}{\\pi(2k+1)}$."
      },
      {
        id: 'capes-03-3',
        chapterId: 'capes-03',
        tier: 3,
        title: "Calcul de la somme de Bâle via le développement de x²",
        statement: "Soit $f$ la fonction $2\\pi$-périodique paire définie sur $[-\\pi, \\pi]$ par $f(x) = x^2$. Sachant que son développement en série de Fourier est $f(x) = \\frac{\\pi^2}{3} + 4 \\sum_{n=1}^{+\\infty} \\frac{(-1)^n}{n^2} \\cos(nx)$, que donne l'évaluation en $x = \\pi$ pour la somme $\\sum_{n=1}^{+\\infty} \\frac{1}{n^2}$ ?",
        type: "mcq",
        options: [
          "$\\sum_{n=1}^{+\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}$",
          "$\\sum_{n=1}^{+\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{12}$",
          "$\\sum_{n=1}^{+\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{8}$",
          "$\\sum_{n=1}^{+\\infty} \\frac{1}{n^2} = 1$"
        ],
        correctIndex: 0,
        answer: "$\\sum_{n=1}^{+\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}$",
        hint1: "Comme $f$ est continue et $\\mathcal{C}^1$ par morceaux, $S(f)(\\pi) = f(\\pi) = \\pi^2$. Noter que $\\cos(n\\pi) = (-1)^n$.",
        solution: "$f$ est continue sur $\\mathbb{R}$ et $\\mathcal{C}^1$ par morceaux. D'après le théorème de Dirichlet, $f(\\pi) = \\pi^2 = \\frac{\\pi^2}{3} + 4 \\sum_{n=1}^{+\\infty} \\frac{(-1)^n (-1)^n}{n^2} = \\frac{\\pi^2}{3} + 4 \\sum_{n=1}^{+\\infty} \\frac{1}{n^2}$. On en déduit : $4 \\sum_{n=1}^{+\\infty} \\frac{1}{n^2} = \\pi^2 - \\frac{\\pi^2}{3} = \\frac{2\\pi^2}{3}$, d'où $\\sum_{n=1}^{+\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}$."
      },
      {
        id: 'capes-03-4',
        chapterId: 'capes-03',
        tier: 4,
        title: "Phénomène de Gibbs et absence de convergence uniforme",
        statement: "Lors de l'approximation d'une fonction présentant une discontinuité de première espèce par ses sommes partielles de Fourier $S_N(f)$, quel est le comportement de l'oscillation maximale au voisinage du saut quand $N \\to +\\infty$ ?",
        type: "mcq",
        options: [
          "Les sommes partielles dépassent le palier d'environ $8{,}95\\,\\%$ du saut : le dépassement persiste et ne tend pas vers 0 (défaut de convergence uniforme)",
          "L'oscillation tend vers 0 uniformément dès que $N \\ge 50$",
          "Le dépassement tend vers $+\\infty$ comme $\\ln(N)$",
          "La série converge toujours normalement, donc il n'y a aucun dépassement"
        ],
        correctIndex: 0,
        answer: "Les sommes partielles dépassent le palier d'environ $8{,}95\\,\\%$ du saut : le dépassement persiste et ne tend pas vers 0 (défaut de convergence uniforme)",
        hint1: "Près du saut, le maximum de $S_N(f)$ tend vers $\\frac{2}{\\pi}\\int_0^\\pi \\frac{\\sin t}{t}\\,dt \\approx 1{,}179$ fois le demi-saut : traduis ce dépassement en pourcentage du saut total, et demande-toi s'il dépend de $N$.",
        solution: "Le phénomène de Gibbs montre que pour une fonction discontinue de première espèce (comme le créneau), les sommes partielles de Fourier oscillent au voisinage de la discontinuité avec un dépassement asymptotique constant égal à $\\frac{1}{\\pi} \\int_0^\\pi \\frac{\\sin(t)}{t}\\,dt - \\frac{1}{2} \\approx 0{,}08949$, soit environ $8{,}95\\,\\%$ de la hauteur du saut. Cela illustre rigoureusement l'absence de convergence uniforme sur tout intervalle contenant une discontinuité."
      }
    ],

    'capes-04': [
      {
        id: 'capes-04-1',
        chapterId: 'capes-04',
        tier: 1,
        title: "Propriété d'absence de mémoire de la loi géométrique",
        statement: "Soit $X$ une variable aléatoire à valeurs dans $\\mathbb{N}^*$. Quelle loi discrète est l'unique loi vérifiant la propriété d'absence de mémoire : $\\forall (n, k) \\in (\\mathbb{N}^*)^2,\\; P(X > n+k \\mid X > n) = P(X > k)$ ?",
        type: "mcq",
        options: [
          "La loi géométrique $\\mathcal{G}(p)$ avec $p \\in ]0, 1[$",
          "La loi de Poisson $\\mathcal{P}(\\lambda)$",
          "La loi binomiale $\\mathcal{B}(n, p)$",
          "La loi uniforme discrète"
        ],
        correctIndex: 0,
        answer: "La loi géométrique $\\mathcal{G}(p)$ avec $p \\in ]0, 1[$",
        hint1: "L'équation fonctionnelle $g(n+k) = g(n)g(k)$ pour $g(n) = P(X > n)$ conduit à $g(n) = q^n$ avec $q = 1-p$.",
        solution: "Posons $g(n) = P(X > n)$. La relation conditionnelle s'écrit $\\frac{P(X > n+k)}{P(X > n)} = P(X > k)$, soit $g(n+k) = g(n)g(k)$. Sur $\\mathbb{N}^*$, l'unique solution décroissante vérifiant $g(0)=1$ est $g(n) = q^n$ avec $q = g(1) \\in ]0, 1[$. Alors $P(X = k) = P(X > k-1) - P(X > k) = q^{k-1}(1-q) = p(1-p)^{k-1}$, ce qui caractérise la loi géométrique $\\mathcal{G}(p)$."
      },
      {
        id: 'capes-04-2',
        chapterId: 'capes-04',
        tier: 2,
        title: "Fonction génératrice d'une variable de Poisson",
        statement: "Soit $X \\sim \\mathcal{P}(\\lambda)$ une variable suivant une loi de Poisson de paramètre $\\lambda > 0$. Quelle est l'expression de sa fonction génératrice $G_X(t) = \\mathbb{E}(t^X)$ pour tout $t \\in \\mathbb{R}$ ?",
        type: "mcq",
        options: [
          "$G_X(t) = e^{\\lambda(t - 1)}$",
          "$G_X(t) = \\frac{\\lambda}{1 - t}$",
          "$G_X(t) = (1 - p + pt)^n$",
          "$G_X(t) = e^{\\lambda t}$"
        ],
        correctIndex: 0,
        answer: "$G_X(t) = e^{\\lambda(t - 1)}$",
        hint1: "Écrire $\\mathbb{E}(t^X) = \\sum_{k=0}^{+\\infty} t^k e^{-\\lambda} \\frac{\\lambda^k}{k!} = e^{-\\lambda} \\sum_{k=0}^{+\\infty} \\frac{(\\lambda t)^k}{k!}$.",
        solution: "Par définition : $G_X(t) = \\sum_{k=0}^{+\\infty} t^k P(X = k) = \\sum_{k=0}^{+\\infty} t^k e^{-\\lambda} \\frac{\\lambda^k}{k!} = e^{-\\lambda} \\sum_{k=0}^{+\\infty} \\frac{(\\lambda t)^k}{k!} = e^{-\\lambda} e^{\\lambda t} = e^{\\lambda(t-1)}$. On vérifie immédiatement $G_X'(1) = \\lambda = \\mathbb{E}(X)$ et $G_X''(1) + G_X'(1) - (G_X'(1))^2 = \\lambda^2 + \\lambda - \\lambda^2 = \\lambda = \\mathbb{V}(X)$."
      },
      {
        id: 'capes-04-3',
        chapterId: 'capes-04',
        tier: 3,
        title: "Problème du collectionneur de vignettes (Coupon Collector)",
        statement: "Un collectionneur cherche à obtenir $n$ vignettes distinctes. À chaque paquet acheté, la vignette obtenue est choisie uniformément parmi les $n$ vignettes, indépendamment des tirages précédents. Quel est le nombre moyen $E(T_n)$ de paquets nécessaires pour compléter la collection ?",
        type: "mcq",
        options: [
          "$E(T_n) = n H_n = n \\sum_{k=1}^n \\frac{1}{k} \\sim n \\ln(n)$",
          "$E(T_n) = n^2$",
          "$E(T_n) = \\frac{n(n+1)}{2}$",
          "$E(T_n) = n \\ln(2)$"
        ],
        correctIndex: 0,
        answer: "$E(T_n) = n H_n = n \\sum_{k=1}^n \\frac{1}{k} \\sim n \\ln(n)$",
        hint1: "Décomposer le temps total en somme de temps d'attente $T_n = \\sum_{k=1}^n X_k$ où $X_k$ est le nombre d'achats pour trouver une $k$-ième nouvelle vignette sachant qu'on en a déjà $k-1$.",
        solution: "Soit $X_k$ le temps pour obtenir la $k$-ième vignette différente. Lorsqu'on possède $k-1$ vignettes, la probabilité d'en tirer une nouvelle est $p_k = \\frac{n - (k-1)}{n}$. $X_k$ suit donc une loi géométrique $\\mathcal{G}(p_k)$ sur $\\mathbb{N}^*$, d'espérance $E(X_k) = \\frac{1}{p_k} = \\frac{n}{n - k + 1}$. Par linéarité de l'espérance : $E(T_n) = \\sum_{k=1}^n E(X_k) = \\sum_{k=1}^n \\frac{n}{n - k + 1} = n \\sum_{j=1}^n \\frac{1}{j} = n H_n \\sim n \\ln(n)$."
      },
      {
        id: 'capes-04-4',
        chapterId: 'capes-04',
        tier: 4,
        title: "Loi faible des grands nombres pour variables non corrélées",
        statement: "Soit $(X_n)_{n \\ge 1}$ une suite de variables aléatoires deux à deux non corrélées, de même espérance $\\mu$ et dont les variances sont uniformément majorées : $\\forall n,\\; V(X_n) \\le M < +\\infty$. Que dit l'inégalité de Bienaymé-Tchebychev sur la moyenne empirique $\\bar{X}_n = \\frac{1}{n} \\sum_{i=1}^n X_i$ ?",
        type: "mcq",
        options: [
          "$P(|\\bar{X}_n - \\mu| \\ge \\varepsilon) \\le \\frac{M}{n \\varepsilon^2} \\xrightarrow[n \\to +\\infty]{} 0$ (convergence en probabilité)",
          "$P(|\\bar{X}_n - \\mu| \\ge \\varepsilon) = 0$ pour tout $n \\ge 100$",
          "La moyenne empirique ne converge que si les variables sont indépendantes et identiquement distribuées",
          "La variance de $\\bar{X}_n$ vaut $M$"
        ],
        correctIndex: 0,
        answer: "$P(|\\bar{X}_n - \\mu| \\ge \\varepsilon) \\le \\frac{M}{n \\varepsilon^2} \\xrightarrow[n \\to +\\infty]{} 0$ (convergence en probabilité)",
        hint1: "Calculer la variance de la moyenne : comme les variables sont non corrélées, $\\mathbb{V}(\\sum X_i) = \\sum \\mathbb{V}(X_i) \\le n M$, d'où $\\mathbb{V}(\\bar{X}_n) \\le \\frac{M}{n}$.",
        solution: "Par linéarité de l'espérance, $E(\\bar{X}_n) = \\mu$. Comme les variables sont non corrélées, la covariance croisée s'annule, donc $V(\\bar{X}_n) = \\frac{1}{n^2} \\sum_{i=1}^n V(X_i) \\le \\frac{nM}{n^2} = \\frac{M}{n}$. D'après l'inégalité de Bienaymé-Tchebychev : $\\forall \\varepsilon > 0,\\; P(|\\bar{X}_n - \\mu| \\ge \\varepsilon) \\le \\frac{V(\\bar{X}_n)}{\\varepsilon^2} \\le \\frac{M}{n \\varepsilon^2}$. Quand $n \\to +\\infty$, cette borne tend vers 0, ce qui prouve la loi faible des grands nombres."
      }
    ],

    'capes-05': [
      {
        id: 'capes-05-1',
        chapterId: 'capes-05',
        tier: 1,
        title: "Identité du parallélogramme et normes préhilbertiennes",
        statement: "Dans un espace vectoriel normé $(E, \\|\\cdot\\|)$, à quelle condition nécessaire et suffisante la norme provient-elle d'un produit scalaire (théorème de Fréchet-von Neumann-Jordan) ?",
        type: "mcq",
        options: [
          "La norme vérifie l'identité du parallélogramme : $\\forall x, y \\in E,\\; \\|x + y\\|^2 + \\|x - y\\|^2 = 2\\|x\\|^2 + 2\\|y\\|^2$",
          "La norme est bornée sur la boule unité",
          "L'espace E est de dimension finie",
          "La boule unité fermée est un polyèdre convexe"
        ],
        correctIndex: 0,
        answer: "La norme vérifie l'identité du parallélogramme : $\\forall x, y \\in E,\\; \\|x + y\\|^2 + \\|x - y\\|^2 = 2\\|x\\|^2 + 2\\|y\\|^2$",
        hint1: "Penser aux identités de polarisation permettant de reconstituer le produit scalaire $\\langle x, y \\rangle = \\frac{1}{4}(\\|x+y\\|^2 - \\|x-y\\|^2)$.",
        solution: "Le théorème de Fréchet-von Neumann-Jordan affirme qu'une norme est issue d'un produit scalaire si et seulement si elle vérifie l'identité du parallélogramme. Dans ce cas, le produit scalaire est donné par la formule de polarisation : $\\langle x, y \\rangle = \\frac{1}{4}(\\|x+y\\|^2 - \\|x-y\\|^2)$ dans le cas réel."
      },
      {
        id: 'capes-05-2',
        chapterId: 'capes-05',
        tier: 2,
        title: "Orthonormalisation de Gram-Schmidt sur les polynômes",
        statement: "Soit $E = \\mathbb{R}_1[X]$ muni du produit scalaire $\\langle P, Q \\rangle = \\int_0^1 P(t)Q(t)\\,dt$. On applique le procédé de Gram-Schmidt à la base canonique $(1, X)$. Quels sont les deux premiers polynômes orthonormés $(e_0, e_1)$ ?",
        type: "mcq",
        options: [
          "$e_0(X) = 1$ et $e_1(X) = \\sqrt{3}(2X - 1)$",
          "$e_0(X) = 1$ et $e_1(X) = X - \\frac{1}{2}$",
          "$e_0(X) = \\sqrt{2}$ et $e_1(X) = \\sqrt{6} X$",
          "$e_0(X) = 1$ et $e_1(X) = 2X$"
        ],
        correctIndex: 0,
        answer: "$e_0(X) = 1$ et $e_1(X) = \\sqrt{3}(2X - 1)$",
        hint1: "$\\|1\\|^2 = \\int_0^1 1\\,dt = 1$. Puis orthogonaliser : $P_1(X) = X - \\langle X, e_0 \\rangle e_0$, avec $\\langle X, 1 \\rangle = 1/2$. Enfin normaliser.",
        solution: "1. $\\|1\\|^2 = \\int_0^1 1\\,dt = 1$, donc $e_0(X) = 1$.\n2. On orthogonalise $X$ par rapport à $e_0$ : $P_1 = X - \\langle X, e_0 \\rangle e_0 = X - \\int_0^1 t\\,dt = X - 1/2$.\n3. Calcul de la norme : $\\|P_1\\|^2 = \\int_0^1 (t - 1/2)^2\\,dt = [\\frac{(t-1/2)^3}{3}]_0^1 = \\frac{1/8 - (-1/8)}{3} = \\frac{1}{12}$.\n4. Donc $\\|P_1\\| = \\frac{1}{2\\sqrt{3}}$, d'où $e_1 = \\frac{P_1}{\\|P_1\\|} = 2\\sqrt{3}(X - 1/2) = \\sqrt{3}(2X - 1)$."
      },
      {
        id: 'capes-05-3',
        chapterId: 'capes-05',
        tier: 3,
        title: "Distance d'une fonction aux constantes par projection orthogonale",
        statement: "Dans $E = \\mathcal{C}([0, 1], \\mathbb{R})$ muni du produit scalaire usuel $\\langle f, g \\rangle = \\int_0^1 f(t)g(t)\\,dt$, quelle est la distance de la fonction $f(t) = t^2$ au sous-espace des fonctions constantes $F = \\mathbb{R} \\cdot 1$ ?",
        type: "mcq",
        options: [
          "$d(f, F) = \\frac{2}{3\\sqrt{5}}$",
          "$d(f, F) = \\frac{1}{3}$",
          "$d(f, F) = \\frac{1}{\\sqrt{5}}$",
          "$d(f, F) = \\frac{1}{6}$"
        ],
        correctIndex: 0,
        answer: "$d(f, F) = \\frac{2}{3\\sqrt{5}}$",
        hint1: "Le projeté orthogonal de $f$ sur $\\mathbb{R}\\cdot 1$ est la constante $c = \\frac{\\langle f, 1 \\rangle}{\\|1\\|^2} = \\int_0^1 t^2\\,dt = 1/3$. La distance au carré vaut $\\|f - c\\|^2 = \\int_0^1 (t^2 - 1/3)^2\\,dt$.",
        solution: "Le projeté orthogonal de $f$ sur $F$ est $p_F(f) = c$ où $c = \\frac{\\int_0^1 t^2\\,dt}{\\int_0^1 1\\,dt} = \\frac{1}{3}$. La distance au carré vaut $d(f, F)^2 = \\int_0^1 (t^2 - 1/3)^2\\,dt = \\int_0^1 (t^4 - \\frac{2}{3}t^2 + \\frac{1}{9})\\,dt = \\frac{1}{5} - \\frac{2}{9} + \\frac{1}{9} = \\frac{1}{5} - \\frac{1}{9} = \\frac{4}{45}$. On prend la racine carrée : $d(f, F) = \\sqrt{\\frac{4}{45}} = \\frac{2}{3\\sqrt{5}}$."
      },
      {
        id: 'capes-05-4',
        chapterId: 'capes-05',
        tier: 4,
        title: "Bipolaire orthogonal et adhérence en dimension infinie",
        statement: "Soit $E$ un espace de Hilbert réel (préhilbertien complet) et $F$ un sous-espace vectoriel de $E$. Quelle est la relation exacte entre $F$ et son bipolaire orthogonal $F^{\\perp\\perp}$ ?",
        type: "mcq",
        options: [
          "$F^{\\perp\\perp} = \\bar{F}$ (l'adhérence de F pour la topologie induite par le produit scalaire)",
          "$F^{\\perp\\perp} = F$ toujours, quel que soit l'espace et le sous-espace",
          "$F^{\\perp\\perp} = \\{0\\}$",
          "$F^{\\perp\\perp} = E$"
        ],
        correctIndex: 0,
        answer: "$F^{\\perp\\perp} = \\bar{F}$ (l'adhérence de F pour la topologie induite par le produit scalaire)",
        hint1: "Comme l'application $x \\mapsto \\langle x, y \\rangle$ est continue, tout orthogonal $S^\\perp$ est un sous-espace fermé. Si $F$ est dense mais distinct de $E$, $F^{\\perp\\perp} = E \\ne F$.",
        solution: "Pour tout sous-ensemble $S$, l'orthogonal $S^\\perp$ est une intersection de noyaux de formes linéaires continues, donc est un sous-espace vectoriel fermé. Ainsi, $F^{\\perp\\perp}$ est fermé et contient $F$, donc contient $\\bar{F}$. Comme $E$ est complet, $\\bar{F}$ est un sous-espace fermé et $E = \\bar{F} \\oplus \\bar{F}^{\\perp}$ (théorème de projection), avec $\\bar{F}^{\\perp} = F^{\\perp}$ ; on en déduit exactement $F^{\\perp\\perp} = \\bar{F}$. Attention : dans un espace seulement préhilbertien (non complet), on a uniquement l'inclusion $\\bar{F} \\subset F^{\\perp\\perp}$, qui peut être stricte. En particulier, si $F$ n'est pas fermé (par exemple les polynômes $\\mathbb{R}[X]$ dans $L^2([0, 1])$), $F^{\\perp\\perp} = L^2([0, 1]) \\ne F$."
      }
    ],

    'capes-06': [
      {
        id: 'capes-06-1',
        chapterId: 'capes-06',
        tier: 1,
        title: "Continuité sous l'intégrale sur un segment compact",
        statement: "Soit $I$ un intervalle de $\\mathbb{R}$ et $f : I \\times [a, b] \\to \\mathbb{R}$ continue en $(x, t)$. Pourquoi la fonction $F(x) = \\int_a^b f(x, t)\\,dt$ est-elle automatiquement continue sur $I$ sans hypothèse de domination globale supplémentaire ?",
        type: "mcq",
        options: [
          "Car le domaine d'intégration $[a, b]$ est un segment compact : sur tout compact $K \\subset I$, $K \\times [a, b]$ est compact et le théorème de Heine assure la continuité uniforme",
          "Car toute fonction continue en deux variables est dérivable",
          "Car l'intégrale d'une fonction continue est nulle",
          "C'est faux : une domination globale est toujours obligatoire même sur un segment"
        ],
        correctIndex: 0,
        answer: "Car le domaine d'intégration $[a, b]$ est un segment compact : sur tout compact $K \\subset I$, $K \\times [a, b]$ est compact et le théorème de Heine assure la continuité uniforme",
        hint1: "L'hypothèse de domination n'est nécessaire que si le domaine d'intégration n'est pas compact (intervalle infini ou bornes non fermées).",
        solution: "Lorsque l'intervalle d'intégration $[a, b]$ est un segment, pour tout compact $K \\subset I$, $f$ est continue sur le produit compact $K \\times [a, b]$. D'après le théorème de Heine, $f$ y est uniformément continue : $\\forall \\varepsilon > 0,\\; \\exists \\eta > 0$ tel que $|x - x_0| \\le \\eta \\implies |f(x, t) - f(x_0, t)| \\le \\frac{\\varepsilon}{b-a}$. Par intégration, $|F(x) - F(x_0)| \\le \\varepsilon$. La domination n'est donc nécessaire que sur les intervalles d'intégration non compacts."
      },
      {
        id: 'capes-06-2',
        chapterId: 'capes-06',
        tier: 2,
        title: "Calcul de l'intégrale de Gauss par coordonnées polaires",
        statement: "En considérant l'intégrale double $I^2 = \\iint_{\\mathbb{R}^2} e^{-(x^2+y^2)}\\,dx\\,dy$, que vaut l'intégrale de Gauss $I = \\int_{-\\infty}^{+\\infty} e^{-t^2}\\,dt$ ?",
        type: "mcq",
        options: [
          "$I = \\sqrt{\\pi}$",
          "$I = \\pi$",
          "$I = \\frac{\\sqrt{\\pi}}{2}$",
          "$I = 1$"
        ],
        correctIndex: 0,
        answer: "$I = \\sqrt{\\pi}$",
        hint1: "Passer en coordonnées polaires : $dx\\,dy = r\\,dr\\,d\\theta$, avec $r \\in [0, +\\infty[$ et $\\theta \\in [0, 2\\pi[$.",
        solution: "Par le théorème de Fubini pour les fonctions positives : $I^2 = (\\int_{-\\infty}^{+\\infty} e^{-x^2}\\,dx)(\\int_{-\\infty}^{+\\infty} e^{-y^2}\\,dy) = \\iint_{\\mathbb{R}^2} e^{-(x^2+y^2)}\\,dx\\,dy$. En passant en coordonnées polaires : $I^2 = \\int_0^{2\\pi} d\\theta \\int_0^{+\\infty} e^{-r^2} r\\,dr = 2\\pi [-\\frac{e^{-r^2}}{2}]_0^{+\\infty} = 2\\pi \\cdot \\frac{1}{2} = \\pi$. Comme $e^{-t^2} > 0$, $I > 0$, d'où $I = \\sqrt{\\pi}$."
      },
      {
        id: 'capes-06-3',
        chapterId: 'capes-06',
        tier: 3,
        title: "Intégrale de Dirichlet via une intégrale à paramètre",
        statement: "On pose pour $x > 0$, $F(x) = \\int_0^{+\\infty} \\frac{\\sin(t)}{t} e^{-xt}\\,dt$. Sachant que $F'(x) = -\\int_0^{+\\infty} \\sin(t)e^{-xt}\\,dt = -\\frac{1}{1+x^2}$ et que $\\lim_{x \\to +\\infty} F(x) = 0$, que vaut l'intégrale de Dirichlet $I = \\int_0^{+\\infty} \\frac{\\sin(t)}{t}\\,dt$ ?",
        type: "mcq",
        options: [
          "$I = \\frac{\\pi}{2}$",
          "$I = \\pi$",
          "$I = 1$",
          "$I = \\frac{\\pi}{4}$"
        ],
        correctIndex: 0,
        answer: "$I = \\frac{\\pi}{2}$",
        hint1: "Intègre $F'$ : $F(x) = C - \\arctan(x)$. Détermine $C$ grâce à la limite en $+\\infty$, puis utilise (en l'admettant) la continuité de $F$ en $0$ : $I = F(0)$.",
        solution: "On a $F'(x) = -\\frac{1}{1+x^2}$, donc $F(x) = C - \\arctan(x)$ sur $]0, +\\infty[$. En faisant tendre $x \\to +\\infty$, $0 = C - \\frac{\\pi}{2}$, donc $C = \\frac{\\pi}{2}$, d'où $F(x) = \\frac{\\pi}{2} - \\arctan(x)$. En justifiant la continuité de $F$ en $0^+$ par convergence uniforme (ou intégration par parties), on obtient $I = \\lim_{x \\to 0^+} F(x) = \\frac{\\pi}{2}$."
      },
      {
        id: 'capes-06-4',
        chapterId: 'capes-06',
        tier: 4,
        title: "Critère de Lebesgue pour l'intégrabilité selon Riemann",
        statement: "Soit $f : [a, b] \\to \\mathbb{R}$ une fonction bornée. D'après le théorème de Lebesgue-Vitali, à quelle condition nécessaire et suffisante $f$ est-elle intégrable au sens de Riemann sur $[a, b]$ ?",
        type: "mcq",
        options: [
          "L'ensemble des points de discontinuité de f est de mesure de Lebesgue nulle",
          "La fonction f est de classe C1 sur [a, b]",
          "L'ensemble des points de discontinuité de f est dénombrable",
          "La fonction f est monotone sur [a, b]"
        ],
        correctIndex: 0,
        answer: "L'ensemble des points de discontinuité de f est de mesure de Lebesgue nulle",
        hint1: "Une fonction monotone peut avoir une infinité dénombrable de discontinuités et rester intégrable, l'indicatrice de l'ensemble de Cantor est discontinue en une infinité non dénombrable de points et reste intégrable, alors que $\\mathbf{1}_{\\mathbb{Q}}$ (discontinue partout) ne l'est pas : quelle notion de « petitesse » de l'ensemble des discontinuités départage ces cas ?",
        solution: "Le critère de Lebesgue-Vitali établit qu'une fonction bornée sur un segment $[a, b]$ est Riemann-intégrable si et seulement si l'ensemble de ses points de discontinuité est de mesure de Lebesgue nulle. Cela inclut toutes les fonctions continues par morceaux, les fonctions réglées, ainsi que des fonctions ayant un ensemble non dénombrable de discontinuités (comme sur l'ensemble triadique de Cantor qui est de mesure nulle)."
      }
    ],

    'capes-07': [
      {
        id: 'capes-07-1',
        chapterId: 'capes-07',
        tier: 1,
        title: "Ordre et signature d'un k-cycle",
        statement: "Dans le groupe symétrique $\\mathcal{S}_n$, soit $c = (a_1, a_2, \\dots, a_k)$ un cycle de longueur $k$ ($k \\ge 2$). Quels sont son ordre dans $\\mathcal{S}_n$ et sa signature $\\varepsilon(c)$ ?",
        type: "mcq",
        options: [
          "$\\mathrm{ord}(c) = k$ et $\\varepsilon(c) = (-1)^{k-1}$",
          "$\\mathrm{ord}(c) = k$ et $\\varepsilon(c) = (-1)^k$",
          "$\\mathrm{ord}(c) = k!$ et $\\varepsilon(c) = 1$",
          "$\\mathrm{ord}(c) = 2$ et $\\varepsilon(c) = -1$"
        ],
        correctIndex: 0,
        answer: "$\\mathrm{ord}(c) = k$ et $\\varepsilon(c) = (-1)^{k-1}$",
        hint1: "Un $k$-cycle se décompose en un produit de $k-1$ transpositions : $(a_1, \\dots, a_k) = (a_1, a_k)(a_1, a_{k-1})\\dots(a_1, a_2)$.",
        solution: "Un $k$-cycle engendre un sous-groupe d'ordre $k$, donc $\\mathrm{ord}(c) = k$. De plus, $c$ se décompose en produit de $k-1$ transpositions : $c = (a_1, a_k)(a_1, a_{k-1}) \\dots (a_1, a_2)$. Comme la signature d'une transposition vaut $-1$, par morphisme de groupe on a $\\varepsilon(c) = (-1)^{k-1}$. En particulier, un cycle est pair si et seulement si sa longueur est impaire."
      },
      {
        id: 'capes-07-2',
        chapterId: 'capes-07',
        tier: 2,
        title: "Décomposition canonique en cycles disjoints et signature",
        statement: "Dans $\\mathcal{S}_6$, soit la permutation $\\sigma = \\begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 \\\\ 3 & 5 & 4 & 1 & 2 & 6 \\end{pmatrix}$. Quelle est sa décomposition en cycles à supports disjoints et quelle est sa signature ?",
        type: "mcq",
        options: [
          "$\\sigma = (1\\; 3\\; 4)(2\\; 5)$ et $\\varepsilon(\\sigma) = -1$",
          "$\\sigma = (1\\; 4\\; 3)(2\\; 5)$ et $\\varepsilon(\\sigma) = +1$",
          "$\\sigma = (1\\; 3)(4\\; 2\\; 5)$ et $\\varepsilon(\\sigma) = -1$",
          "$\\sigma = (1\\; 3\\; 5\\; 2\\; 4)$ et $\\varepsilon(\\sigma) = +1$"
        ],
        correctIndex: 0,
        answer: "$\\sigma = (1\\; 3\\; 4)(2\\; 5)$ et $\\varepsilon(\\sigma) = -1$",
        hint1: "Suivre les orbites : $1 \\mapsto 3 \\mapsto 4 \\mapsto 1$ donne le cycle $(1\\; 3\\; 4)$. Puis $2 \\mapsto 5 \\mapsto 2$ donne $(2\\; 5)$. 6 est fixe.",
        solution: "On calcule les orbites successives :\n- Pour 1 : $\\sigma(1) = 3$, $\\sigma(3) = 4$, $\\sigma(4) = 1$, cycle $(1\\; 3\\; 4)$ de longueur 3.\n- Pour 2 : $\\sigma(2) = 5$, $\\sigma(5) = 2$, cycle $(2\\; 5)$ de longueur 2.\n- Pour 6 : $\\sigma(6) = 6$, point fixe.\nAinsi $\\sigma = (1\\; 3\\; 4)(2\\; 5)$. Pour la signature : $\\varepsilon(\\sigma) = \\varepsilon((1\\; 3\\; 4)) \\cdot \\varepsilon((2\\; 5)) = (-1)^{3-1} \\cdot (-1)^{2-1} = (+1) \\cdot (-1) = -1$."
      },
      {
        id: 'capes-07-3',
        chapterId: 'capes-07',
        tier: 3,
        title: "Classes de conjugaison dans le groupe symétrique",
        statement: "Soient $\\sigma, \\tau \\in \\mathcal{S}_n$. À quelle condition nécessaire et suffisante $\\sigma$ et $\\tau$ sont-elles conjuguées dans $\\mathcal{S}_n$ (c'est-à-dire $\\exists \\rho \\in \\mathcal{S}_n,\\; \\tau = \\rho \\sigma \\rho^{-1}$) ?",
        type: "mcq",
        options: [
          "Elles ont le même type cyclique (les mêmes longueurs de cycles dans leur décomposition en cycles à supports disjoints)",
          "Elles ont la même signature et le même ordre",
          "Elles commutent : $\\sigma \\tau = \\tau \\sigma$",
          "Elles fixent le même nombre de points"
        ],
        correctIndex: 0,
        answer: "Elles ont le même type cyclique (les mêmes longueurs de cycles dans leur décomposition en cycles à supports disjoints)",
        hint1: "Le conjugué d'un cycle par $\\rho$ est $\\rho (a_1, \\dots, a_k) \\rho^{-1} = (\\rho(a_1), \\dots, \\rho(a_k))$ : la longueur du cycle est conservée.",
        solution: "Pour tout cycle $c = (a_1, \\dots, a_k)$ et toute permutation $\\rho$, $\\rho c \\rho^{-1} = (\\rho(a_1), \\dots, \\rho(a_k))$, qui est un cycle de même longueur. La conjugaison préserve donc le nombre et les longueurs de tous les cycles disjoints. Réciproquement, si deux permutations ont la même partition cyclique, on construit explicitement une permutation $\\rho$ envoyant chaque cycle de l'une sur un cycle de même longueur de l'autre."
      },
      {
        id: 'capes-07-4',
        chapterId: 'capes-07',
        tier: 4,
        title: "Simplicité de A_n et résolubilité des équations algébriques",
        statement: "Quelle est la conséquence fondamentale en théorie de Galois de la simplicité du groupe alterné $\\mathcal{A}_n$ pour $n \\ge 5$ ?",
        type: "mcq",
        options: [
          "Le groupe symétrique $\\mathcal{S}_n$ n'est pas résoluble pour $n \\ge 5$, donc l'équation générale de degré $n \\ge 5$ n'est pas résoluble par radicaux (Théorème d'Abel-Ruffini)",
          "Toutes les matrices de $\\mathcal{M}_n(\\mathbb{R})$ sont diagonalisables",
          "Le groupe alterné n'a pas de représentations irréductibles",
          "Tout polynôme de degré n a toutes ses racines réelles"
        ],
        correctIndex: 0,
        answer: "Le groupe symétrique $\\mathcal{S}_n$ n'est pas résoluble pour $n \\ge 5$, donc l'équation générale de degré $n \\ge 5$ n'est pas résoluble par radicaux (Théorème d'Abel-Ruffini)",
        hint1: "Un groupe simple non abélien ne peut avoir de suite de Jordan-Hölder à quotients abéliens : il n'est donc pas résoluble.",
        solution: "Pour $n \\ge 5$, $\\mathcal{A}_n$ est un groupe simple non abélien (d'ordre $n!/2 \\ge 60$). Ses seuls sous-groupes distingués sont $\\{id\\}$ et $\\mathcal{A}_n$. Ainsi, la suite normale de $\\mathcal{S}_n$ est $\\{id\\} \\triangleleft \\mathcal{A}_n \\triangleleft \\mathcal{S}_n$. Comme $\\mathcal{A}_n$ n'est pas abélien, $\\mathcal{S}_n$ n'est pas résoluble. D'après la correspondance de Galois, le groupe de Galois de l'équation polynomiale générale de degré $n$ est $\\mathcal{S}_n$, qui n'est pas résoluble : les équations de degré $\\ge 5$ ne sont donc pas résolubles par radicaux."
      }
    ],

    'capes-08': [
      {
        id: 'capes-08-1',
        chapterId: 'capes-08',
        tier: 1,
        title: "Caractérisation différentielle de la convexité par les tangentes",
        statement: "Soit $f : I \\to \\mathbb{R}$ une fonction dérivable sur un intervalle ouvert $I$. Laquelle des propriétés suivantes est équivalente à la convexité de $f$ sur $I$ ?",
        type: "mcq",
        options: [
          "Pour tout $x_0 \\in I$, le graphe de f est situé au-dessus de sa tangente en $x_0$ : $\\forall x \\in I,\\; f(x) \\ge f(x_0) + f'(x_0)(x - x_0)$",
          "La dérivée $f'$ est décroissante sur I",
          "La fonction f est positive sur I",
          "L'intégrale de f est toujours positive"
        ],
        correctIndex: 0,
        answer: "Pour tout $x_0 \\in I$, le graphe de f est situé au-dessus de sa tangente en $x_0$ : $\\forall x \\in I,\\; f(x) \\ge f(x_0) + f'(x_0)(x - x_0)$",
        hint1: "La dérivée d'une fonction convexe est croissante. L'inégalité des accroissements finis donne la position de la courbe par rapport à la tangente.",
        solution: "Pour une fonction dérivable sur un intervalle, $f$ est convexe ssi sa dérivée $f'$ est croissante ssi pour tout $x_0$, la courbe représentative est au-dessus de sa tangente au point $x_0$ : $f(x) \\ge f(x_0) + f'(x_0)(x - x_0)$ pour tout $x \\in I$."
      },
      {
        id: 'capes-08-2',
        chapterId: 'capes-08',
        tier: 2,
        title: "Inégalité arithmético-géométrique via la convexité de -ln",
        statement: "En appliquant l'inégalité de Jensen à la fonction strictement convexe $f(t) = -\\ln(t)$ sur $]0, +\\infty[$ avec des poids égaux $p_i = 1/n$, quelle inégalité fondamentale obtient-on pour des réels $x_1, \\dots, x_n > 0$ ?",
        type: "mcq",
        options: [
          "$\\sqrt[n]{x_1 x_2 \\dots x_n} \\le \\frac{x_1 + x_2 + \\dots + x_n}{n}$ (inégalité arithmético-géométrique)",
          "$\\sum_{i=1}^n x_i^2 \\le (\\sum_{i=1}^n x_i)^2$",
          "$\\frac{1}{n}\\sum x_i \\le \\min(x_i)$",
          "$\\ln(x_1 + \\dots + x_n) \\le \\sum \\ln(x_i)$"
        ],
        correctIndex: 0,
        answer: "$\\sqrt[n]{x_1 x_2 \\dots x_n} \\le \\frac{x_1 + x_2 + \\dots + x_n}{n}$ (inégalité arithmético-géométrique)",
        hint1: "Jensen donne $-\\ln(\\frac{1}{n}\\sum x_i) \\le \\frac{1}{n}\\sum(-\\ln(x_i)) = -\\ln((\\prod x_i)^{1/n})$.",
        solution: "La fonction $f(t) = -\\ln(t)$ est deux fois dérivable et $f''(t) = 1/t^2 > 0$, donc elle est strictement convexe sur $]0, +\\infty[$. L'inégalité de Jensen appliquée avec les poids $p_i = 1/n$ donne : $-\\ln\\left(\\frac{1}{n} \\sum_{i=1}^n x_i\\right) \\le \\frac{1}{n} \\sum_{i=1}^n -\\ln(x_i) = -\\ln\\left(\\prod_{i=1}^n x_i^{1/n}\\right)$. En multipliant par $-1$ et en appliquant l'exponentielle (croissante) : $(\\prod_{i=1}^n x_i)^{1/n} \\le \\frac{1}{n} \\sum_{i=1}^n x_i$, avec égalité ssi tous les $x_i$ sont égaux."
      },
      {
        id: 'capes-08-3',
        chapterId: 'capes-08',
        tier: 3,
        title: "Inégalité de Hölder pour les suites",
        statement: "Soient $p, q > 1$ tels que $\\frac{1}{p} + \\frac{1}{q} = 1$. D'après l'inégalité de Hölder, que vaut la majoration pour des suites réelles $(a_k), (b_k)$ ?",
        type: "mcq",
        options: [
          "$\\sum_{k=1}^n |a_k b_k| \\le \\left(\\sum_{k=1}^n |a_k|^p\\right)^{1/p} \\left(\\sum_{k=1}^n |b_k|^q\\right)^{1/q}$",
          "$\\sum |a_k b_k| \\le \\sum |a_k|^p + \\sum |b_k|^q$",
          "$\\sum |a_k b_k| = \\sum |a_k| \\sum |b_k|$",
          "$\\sum |a_k b_k| \\le \\frac{1}{pq} \\sum (|a_k| + |b_k|)$"
        ],
        correctIndex: 0,
        answer: "$\\sum_{k=1}^n |a_k b_k| \\le \\left(\\sum_{k=1}^n |a_k|^p\\right)^{1/p} \\left(\\sum_{k=1}^n |b_k|^q\\right)^{1/q}$",
        hint1: "Elle découle de l'inégalité de Young $uv \\le \\frac{u^p}{p} + \\frac{v^q}{q}$ appliquée aux vecteurs normalisés $\\frac{|a_k|}{\\|a\\|_p}$ et $\\frac{|b_k|}{\\|b\\|_q}$.",
        solution: "L'inégalité de Hölder est une conséquence de l'inégalité de Young $uv \\le \\frac{u^p}{p} + \\frac{v^q}{q}$ (obtenue par convexité de l'exponentielle avec poids $1/p$ et $1/q$). En posant $u = \\frac{|a_k|}{\\|a\\|_p}$ et $v = \\frac{|b_k|}{\\|b\\|_q}$ et en sommant pour $k=1$ à $n$ : $\\frac{\\sum |a_k b_k|}{\\|a\\|_p \\|b\\|_q} \\le \\frac{1}{p} \\frac{\\sum |a_k|^p}{\\|a\\|_p^p} + \\frac{1}{q} \\frac{\\sum |b_k|^q}{\\|b\\|_q^q} = \\frac{1}{p} + \\frac{1}{q} = 1$. D'où $\\sum |a_k b_k| \\le \\|a\\|_p \\|b\\|_q$."
      },
      {
        id: 'capes-08-4',
        chapterId: 'capes-08',
        tier: 4,
        title: "Régularité des fonctions convexes sur un ouvert",
        statement: "Soit $f : ]a, b[ \\to \\mathbb{R}$ une fonction convexe sur un intervalle ouvert. Laquelle des propriétés de régularité suivantes est TOUJOURS vraie ?",
        type: "mcq",
        options: [
          "f est continue sur $]a, b[$, et admet en tout point une dérivée à gauche $f'_g(x)$ et une dérivée à droite $f'_d(x)$ avec $f'_g(x) \\le f'_d(x)$",
          "f est deux fois dérivable en tout point de $]a, b[$",
          "f est de classe C1 sur $]a, b[$",
          "f est uniformément continue sur tout l'intervalle $]a, b[$"
        ],
        correctIndex: 0,
        answer: "f est continue sur $]a, b[$, et admet en tout point une dérivée à gauche $f'_g(x)$ et une dérivée à droite $f'_d(x)$ avec $f'_g(x) \\le f'_d(x)$",
        hint1: "Penser au lemme des trois cordes : le taux d'accroissement est croissant par rapport à chaque variable.",
        solution: "D'après le lemme des trois cordes, pour $x \\in ]a, b[$, le taux d'accroissement $t \\mapsto \\frac{f(t) - f(x)}{t - x}$ est croissant. Il admet donc des limites à gauche et à droite finies en $x$, d'où l'existence de $f'_g(x)$ et $f'_d(x)$ avec $f'_g(x) \\le f'_d(x)$. En particulier, $f$ est dérivable à droite et à gauche en tout point, ce qui entraîne immédiatement sa continuité sur $]a, b[$. De plus, $f$ est localement lipschitzienne sur tout compact intérieur."
      }
    ],

    'capes-09': [
      {
        id: 'capes-09-1',
        chapterId: 'capes-09',
        tier: 1,
        title: "Critère de d'Alembert et cas douteux",
        statement: "Soit $\\sum u_n$ une série à termes strictement positifs telle que $\\lim_{n \\to +\\infty} \\frac{u_{n+1}}{u_n} = \\ell$. Dans quel cas le critère de d'Alembert ne permet-il PAS de conclure ?",
        type: "mcq",
        options: [
          "Si $\\ell = 1$ (cas douteux)",
          "Si $\\ell < 1$",
          "Si $\\ell > 1$",
          "Si $\\ell = 0$"
        ],
        correctIndex: 0,
        answer: "Si $\\ell = 1$ (cas douteux)",
        hint1: "Comparer avec les séries de Riemann $\\sum 1/n$ (qui diverge) et $\\sum 1/n^2$ (qui converge) : pour les deux, le quotient tend vers 1.",
        solution: "Pour $u_n = 1/n$, $\\frac{u_{n+1}}{u_n} = \\frac{n}{n+1} \\to 1$ et la série diverge. Pour $v_n = 1/n^2$, $\\frac{v_{n+1}}{v_n} = \\frac{n^2}{(n+1)^2} \\to 1$ et la série converge. Le cas $\\ell = 1$ est donc le cas douteux de la règle de d'Alembert ; il nécessite des critères plus fins (règle de Raabe-Duhamel, équivalents ou développement asymptotique)."
      },
      {
        id: 'capes-09-2',
        chapterId: 'capes-09',
        tier: 2,
        title: "Majoration du reste d'une série alternée",
        statement: "Soit la série alternée $S = \\sum_{n=0}^{+\\infty} \\frac{(-1)^n}{(2n+1)!} = \\sin(1)$. Si l'on approxime $S$ par la somme partielle $S_1 = 1 - \\frac{1}{6} = \\frac{5}{6}$, quelle borne supérieure de l'erreur $|S - S_1|$ fournit le critère spécial des séries alternées ?",
        type: "mcq",
        options: [
          "$|S - S_1| \\le \\frac{1}{5!} = \\frac{1}{120}$",
          "$|S - S_1| \\le \\frac{1}{3!} = \\frac{1}{6}$",
          "$|S - S_1| \\le \\frac{1}{7!} = \\frac{1}{5040}$",
          "$|S - S_1| \\le 10^{-5}$"
        ],
        correctIndex: 0,
        answer: "$|S - S_1| \\le \\frac{1}{5!} = \\frac{1}{120}$",
        hint1: "D'après le CSSA, le reste $R_n = S - S_n$ est majoré en valeur absolue par la valeur absolue du premier terme négligé $|u_{n+1}|$.",
        solution: "La suite $u_n = \\frac{1}{(2n+1)!}$ est positive, décroissante et tend vers 0. Les hypothèses du CSSA sont vérifiées. Pour $n=1$, le premier terme non inclus dans $S_1 = u_0 - u_1$ est $u_2 = \\frac{1}{(2\\cdot 2 + 1)!} = \\frac{1}{5!} = \\frac{1}{120}$. D'après la majoration du reste alterné : $|S - S_1| \\le u_2 = \\frac{1}{120} \\approx 0{,}00833$."
      },
      {
        id: 'capes-09-3',
        chapterId: 'capes-09',
        tier: 3,
        title: "Produit de Cauchy de deux séries semi-convergentes",
        statement: "On considère la série $u_n = \\frac{(-1)^n}{\\sqrt{n+1}}$ pour $n \\ge 0$. Cette série est convergente (CSSA). Que peut-on dire du produit de Cauchy $w_n = \\sum_{k=0}^n u_k u_{n-k}$ de cette série par elle-même ?",
        type: "mcq",
        options: [
          "La série produit $\\sum w_n$ est grossièrement divergente car $|w_n| \\ge 1$ pour tout $n$",
          "La série produit $\\sum w_n$ converge absolument",
          "La série produit $\\sum w_n$ converge vers $(\\sum u_n)^2$",
          "La série produit $\\sum w_n$ a pour somme 0"
        ],
        correctIndex: 0,
        answer: "La série produit $\\sum w_n$ est grossièrement divergente car $|w_n| \\ge 1$ pour tout $n$",
        hint1: "Calculer le terme général : $w_n = (-1)^n \\sum_{k=0}^n \\frac{1}{\\sqrt{(k+1)(n-k+1)}}$ et minorer le dénominateur par $(n+2)/2$.",
        solution: "On a $w_n = \\sum_{k=0}^n \\frac{(-1)^k}{\\sqrt{k+1}} \\frac{(-1)^{n-k}}{\\sqrt{n-k+1}} = (-1)^n \\sum_{k=0}^n \\frac{1}{\\sqrt{(k+1)(n-k+1)}}$. Par l'inégalité arithmético-géométrique, $(k+1)(n-k+1) \\le (\\frac{k+1+n-k+1}{2})^2 = (\\frac{n+2}{2})^2$. Donc $\\sqrt{(k+1)(n-k+1)} \\le \\frac{n+2}{2}$, d'où $\\frac{1}{\\sqrt{(k+1)(n-k+1)}} \\ge \\frac{2}{n+2}$. La somme comporte $n+1$ termes, donc $|w_n| \\ge (n+1) \\frac{2}{n+2} \\ge 1$ pour tout $n \\ge 0$ (ce minorant tend vers 2 ; en reconnaissant une somme de Riemann, on montre même que $|w_n| \\to \\int_0^1 \\frac{dx}{\\sqrt{x(1-x)}} = \\pi$). Le terme général ne tend pas vers 0 : la série est grossièrement divergente. Cela illustre que l'absolue convergence d'au moins une des séries est indispensable dans le théorème de Mertens."
      },
      {
        id: 'capes-09-4',
        chapterId: 'capes-09',
        tier: 4,
        title: "Théorème de réarrangement de Riemann",
        statement: "Soit $\\sum a_n$ une série réelle semi-convergente (convergente mais pas absolument convergente). Que permet d'affirmer le théorème de réarrangement de Riemann ?",
        type: "mcq",
        options: [
          "Pour tout $L \\in \\mathbb{R} \\cup \\{-\\infty, +\\infty\\}$, il existe une permutation $\\sigma$ de $\\mathbb{N}$ telle que $\\sum_{n=0}^{+\\infty} a_{\\sigma(n)} = L$",
          "Toute permutation des termes préserve la somme de la série",
          "Il n'existe aucune permutation permettant de rendre la série divergente",
          "La somme de toute série semi-convergente est nécessairement nulle"
        ],
        correctIndex: 0,
        answer: "Pour tout $L \\in \\mathbb{R} \\cup \\{-\\infty, +\\infty\\}$, il existe une permutation $\\sigma$ de $\\mathbb{N}$ telle que $\\sum_{n=0}^{+\\infty} a_{\\sigma(n)} = L$",
        hint1: "Les séries des termes positifs $\\sum a_n^+$ et des termes négatifs $\\sum a_n^-$ divergent toutes les deux vers $+\\infty$.",
        solution: "Comme $\\sum |a_n|$ diverge et $\\sum a_n$ converge, les deux séries à termes positifs $\\sum a_n^+$ et $\\sum a_n^-$ divergent vers $+\\infty$. On peut donc construire par récurrence une permutation $\\sigma$ : sommer des termes positifs jusqu'à dépasser $L$, puis des termes négatifs jusqu'à passer sous $L$, et répéter indéfiniment. Comme $a_n \\to 0$, l'oscillation tend vers 0 et la série réordonnée converge exactement vers $L$ (ou vers $\\pm\\infty$ si on le désire)."
      }
    ],

    'capes-10': [
      {
        id: 'capes-10-1',
        chapterId: 'capes-10',
        tier: 1,
        title: "Équation diophantienne et identité de Bézout",
        statement: "Soient $a, b \\in \\mathbb{Z}^*$. L'équation diophantienne $ax + by = c$ d'inconnue $(x, y) \\in \\mathbb{Z}^2$ admet au moins une solution entière si et seulement si :",
        type: "mcq",
        options: [
          "$\\mathrm{PGCD}(a, b)$ divise c",
          "a et b sont tous les deux pairs",
          "$c > a + b$",
          "c est un nombre premier"
        ],
        correctIndex: 0,
        answer: "$\\mathrm{PGCD}(a, b)$ divise c",
        hint1: "L'ensemble $a\\mathbb{Z} + b\\mathbb{Z}$ est l'idéal $d\\mathbb{Z}$ où $d = \\mathrm{PGCD}(a, b)$.",
        solution: "L'ensemble $\{ax + by \\mid x, y \\in \\mathbb{Z}\}$ est le sous-groupe de $\\mathbb{Z}$ engendré par $a$ et $b$. Tout sous-groupe de $\\mathbb{Z}$ est de la forme $d\\mathbb{Z}$ avec $d = \\mathrm{PGCD}(a, b)$. L'entier $c$ s'écrit donc sous la forme $ax + by$ si et seulement si $c \\in d\\mathbb{Z}$, c'est-à-dire si et seulement si $\\mathrm{PGCD}(a, b) \\mid c$."
      },
      {
        id: 'capes-10-2',
        chapterId: 'capes-10',
        tier: 2,
        title: "Algorithme d'Euclide étendu et inverse modulaire",
        statement: "Quel est l'inverse de 7 dans le corps fini $\\mathbb{Z}/31\\mathbb{Z}$ (c'est-à-dire l'unique $x \\in \\{1, \\dots, 30\\}$ tel que $7x \\equiv 1 \\pmod{31}$) ?",
        type: "mcq",
        options: [
          "9 (car $7 \\times 9 = 63 = 2 \\times 31 + 1$)",
          "4",
          "15",
          "22"
        ],
        correctIndex: 0,
        answer: "9 (car $7 \\times 9 = 63 = 2 \\times 31 + 1$)",
        hint1: "Applique l'algorithme d'Euclide étendu : $31 = 4 \\times 7 + 3$ et $7 = 2 \\times 3 + 1$, puis remonte les égalités pour écrire $1 = 7u + 31v$ ; $u$ modulo $31$ est l'inverse cherché.",
        solution: "On cherche $x \\in \\mathbb{Z}$ tel que $7x - 31y = 1$. L'algorithme d'Euclide donne : $31 = 4 \\times 7 + 3$, puis $7 = 2 \\times 3 + 1$. En remontant : $1 = 7 - 2 \\times 3 = 7 - 2 \\times (31 - 4 \\times 7) = 9 \\times 7 - 2 \\times 31$. Donc $9 \\times 7 \\equiv 1 \\pmod{31}$. L'inverse de 7 modulo 31 est donc 9."
      },
      {
        id: 'capes-10-3',
        chapterId: 'capes-10',
        tier: 3,
        title: "Protocole RSA et validité pour tout message",
        statement: "Dans le cryptosystème RSA, on choisit deux nombres premiers distincts $p$ et $q$, on pose $n = pq$, et on choisit l'exposant de chiffrement $e$ premier avec $\\varphi(n) = (p-1)(q-1)$. L'exposant de déchiffrement $d$ vérifie $ed \\equiv 1 \\pmod{\\varphi(n)}$. Pourquoi a-t-on $m^{ed} \\equiv m \\pmod n$ pour TOUT message $m \\in \\mathbb{Z}/n\\mathbb{Z}$, même si $\\mathrm{PGCD}(m, n) \\ne 1$ ?",
        type: "mcq",
        options: [
          "Car modulo $p$, si $p \\mid m$ alors $m^{ed} \\equiv 0 \\equiv m \\pmod p$, et si $p \\nmid m$ le petit théorème de Fermat s'applique ; de même modulo $q$, et on conclut par les restes chinois",
          "Car $\\varphi(n)$ est toujours impair",
          "Car tout élément de $\\mathbb{Z}/n\\mathbb{Z}$ est inversible",
          "Car $m^{ed} = m$ dans $\\mathbb{Z}$ sans réduction modulaire"
        ],
        correctIndex: 0,
        answer: "Car modulo $p$, si $p \\mid m$ alors $m^{ed} \\equiv 0 \\equiv m \\pmod p$, et si $p \\nmid m$ le petit théorème de Fermat s'applique ; de même modulo $q$, et on conclut par les restes chinois",
        hint1: "Écrire $ed = 1 + k(p-1)(q-1)$ et distinguer les cas $p \\mid m$ et $p \\nmid m$ pour montrer $m^{ed} \\equiv m \\pmod p$.",
        solution: "On a $ed = 1 + k(p-1)(q-1)$.\n- Si $p \\mid m$, $m \\equiv 0 \\pmod p$, donc $m^{ed} \\equiv 0 \\equiv m \\pmod p$.\n- Si $p \\nmid m$, par le petit théorème de Fermat $m^{p-1} \\equiv 1 \\pmod p$, donc $m^{ed} = m \\cdot (m^{p-1})^{k(q-1)} \\equiv m \\cdot 1 \\equiv m \\pmod p$.\nDans les deux cas, $p \\mid (m^{ed} - m)$. De même, $q \\mid (m^{ed} - m)$. Comme $p$ et $q$ sont premiers entre eux, leur produit $n = pq$ divise $m^{ed} - m$, c'est-à-dire $m^{ed} \\equiv m \\pmod n$."
      },
      {
        id: 'capes-10-4',
        chapterId: 'capes-10',
        tier: 4,
        title: "Théorème des restes chinois et structure d'anneaux",
        statement: "Soient $m, n \\in \\mathbb{N}^*$ premiers entre eux. Quelle est la structure de l'anneau quotient $\\mathbb{Z}/mn\\mathbb{Z}$ d'après le théorème des restes chinois ?",
        type: "mcq",
        options: [
          "L'application $\\psi : x \\bmod mn \\mapsto (x \\bmod m, x \\bmod n)$ est un isomorphisme d'anneaux de $\\mathbb{Z}/mn\\mathbb{Z}$ sur $\\mathbb{Z}/m\\mathbb{Z} \\times \\mathbb{Z}/n\\mathbb{Z}$",
          "$\\mathbb{Z}/mn\\mathbb{Z}$ est un corps fini",
          "L'application $\\psi$ est seulement un morphisme de groupes additifs non multiplicatif",
          "$\\mathbb{Z}/mn\\mathbb{Z}$ est isomorphe à $\\mathbb{Z}/m\\mathbb{Z} + \\mathbb{Z}/n\\mathbb{Z}$"
        ],
        correctIndex: 0,
        answer: "L'application $\\psi : x \\bmod mn \\mapsto (x \\bmod m, x \\bmod n)$ est un isomorphisme d'anneaux de $\\mathbb{Z}/mn\\mathbb{Z}$ sur $\\mathbb{Z}/m\\mathbb{Z} \\times \\mathbb{Z}/n\\mathbb{Z}$",
        hint1: "Le noyau du morphisme canonique est $m\\mathbb{Z} \\cap n\\mathbb{Z} = \\mathrm{PPCM}(m, n)\\mathbb{Z} = mn\\mathbb{Z}$ car $\\mathrm{PGCD}(m, n) = 1$, et les cardinaux sont égaux.",
        solution: "L'application $\\psi : \\mathbb{Z} \\to \\mathbb{Z}/m\\mathbb{Z} \\times \\mathbb{Z}/n\\mathbb{Z}$ est un morphisme d'anneaux. Son noyau est $\\ker(\\psi) = m\\mathbb{Z} \\cap n\\mathbb{Z}$. Comme $\\mathrm{PGCD}(m, n) = 1$, $m\\mathbb{Z} \\cap n\\mathbb{Z} = mn\\mathbb{Z}$. Par le premier théorème d'isomorphisme, $\\bar{\\psi} : \\mathbb{Z}/mn\\mathbb{Z} \\to \\mathbb{Z}/m\\mathbb{Z} \\times \\mathbb{Z}/n\\mathbb{Z}$ est un morphisme injectif. Comme les deux ensembles ont le même cardinal fini $mn$, c'est un isomorphisme d'anneaux. En corollaire, pour le groupe des inversibles : $(\\mathbb{Z}/mn\\mathbb{Z})^\\times \\simeq (\\mathbb{Z}/m\\mathbb{Z})^\\times \\times (\\mathbb{Z}/n\\mathbb{Z})^\\times$, ce qui prouve la multiplicativité de l'indicateur d'Euler : $\\varphi(mn) = \\varphi(m)\\varphi(n)$."
      }
    ],

    'capes-oral2': [
      // =========================================================================
      // PALIER 1 : SOCLE DÉONTOLOGIQUE & CADRE RÉPUBLICAIN
      // =========================================================================
      {
        id: 'capes-oral2-1',
        chapterId: 'capes-oral2',
        tier: 1,
        title: "Devoir de stricte neutralité de l'enseignant en classe",
        statement: "Un enseignant stagiaire de mathématiques porte une médaille religieuse autour du cou. Avant d'entrer en classe, la médaille ressort de son col de façon visible. Un élève l'interroge : « Monsieur, vous êtes croyant ? Quelle est votre religion ? ». Que doit faire l'enseignant au regard du cadre déontologique ?",
        type: "mcq",
        options: [
          "Replacer immédiatement la médaille sous son vêtement pour qu'elle ne soit pas visible, rappeler avec courtoisie que le professeur représente l'école laïque et est soumis à un strict devoir de neutralité, puis recentrer la classe sur le cours de mathématiques sans exprimer ses convictions personnelles",
          "Expliquer en détail ses convictions personnelles aux élèves au nom de la liberté d'expression garantie par la Constitution",
          "Confisquer le carnet de correspondance de l'élève pour insolence",
          "Autoriser un débat de 20 minutes en classe sur les religions respectives des élèves"
        ],
        correctIndex: 0,
        answer: "Replacer immédiatement la médaille sous son vêtement pour qu'elle ne soit pas visible, rappeler avec courtoisie que le professeur représente l'école laïque et est soumis à un strict devoir de neutralité, puis recentrer la classe sur le cours de mathématiques sans exprimer ses convictions personnelles",
        hint1: "Consulter la fiche 19 du Vademecum : le fonctionnaire est astreint à une stricte obligation de neutralité religieuse et politique (Avis CE Marteaux 2000 et loi du 20 avril 2016).",
        solution: "1. Cadre juridique : L'article 25 de la loi du 13 juillet 1983 modifiée en 2016 et l'avis du Conseil d'État Marteaux (3 mai 2000) imposent une stricte obligation de neutralité religieuse aux agents du service public de l'enseignement. Ils ne doivent manifester aucune opinion religieuse ou philosophique dans l'exercice de leurs fonctions.\n2. Posture professionnelle : L'enseignant replace son signe sous son vêtement, ne fait pas état de ses croyances intimes, explicite avec calme et bienveillance que l'École laïque garantit la neutralité de l'enseignement pour protéger la liberté de conscience de tous les élèves, et reprend le cours de mathématiques sans polémique."
      },
      {
        id: 'capes-oral2-2',
        chapterId: 'capes-oral2',
        tier: 1,
        title: "Portée de la loi du 15 mars 2004 sur les signes ostensibles",
        statement: "Quelle est la règle juridique exacte fixée par la loi du 15 mars 2004 (art. L. 141-5-1 du Code de l'éducation) concernant les élèves dans les écoles, collèges et lycées publics ?",
        type: "mcq",
        options: [
          "Le port de signes ou de tenues par lesquels les élèves manifestent ostensiblement une appartenance religieuse est interdit, mais le port de signes discrets reste autorisé",
          "Tout signe religieux, même de taille millimétrique et totalement invisible, est passible d'une exclusion immédiate sans aucun dialogue",
          "La loi n'interdit que le foulard islamique, les autres signes étant expressément autorisés",
          "La loi ne s'applique que dans les salles de classe mais pas dans la cour de récréation ni au réfectoire"
        ],
        correctIndex: 0,
        answer: "Le port de signes ou de tenues par lesquels les élèves manifestent ostensiblement une appartenance religieuse est interdit, mais le port de signes discrets reste autorisé",
        hint1: "Vademecum fiche 3 : la loi s'applique à toutes les religions et proscrit les signes conduisant à se faire immédiatement reconnaître par son appartenance religieuse.",
        solution: "L'article L. 141-5-1 du Code de l'éducation interdit les signes ou tenues ostensibles (voile, kippa, grande croix, turban sikh) dans l'enceinte de l'établissement public et lors de toute activité sous responsabilité scolaire. Les signes religieux discrets (petites médailles, croix miniatures portées discrètement) restent autorisés pour les élèves, à la différence des personnels qui sont soumis à une neutralité absolue."
      },
      {
        id: 'capes-oral2-3',
        chapterId: 'capes-oral2',
        tier: 1,
        title: "Première compétence du référentiel des métiers du professorat",
        statement: "Selon l'arrêté du 1er juillet 2013 fixant le référentiel des compétences professionnelles des métiers du professorat et de l'éducation, quel est l'intitulé et le contenu de la compétence commune n°1 ?",
        type: "mcq",
        options: [
          "« Faire partager les valeurs de la République » : transmettre la liberté, l'égalité, la fraternité, la laïcité, le refus de toutes les discriminations, et aider à distinguer savoirs et croyances",
          "« Maîtriser parfaitement les équations différentielles de niveau agrégation »",
          "« Remplir les bulletins trimestriels avant le conseil de classe »",
          "« Organiser au moins un voyage scolaire par an »"
        ],
        correctIndex: 0,
        answer: "« Faire partager les valeurs de la République » : transmettre la liberté, l'égalité, la fraternité, la laïcité, le refus de toutes les discriminations, et aider à distinguer savoirs et croyances",
        hint1: "Le référentiel place les valeurs républicaines et l'apprentissage de la citoyenneté au tout premier rang de la mission de l'enseignant.",
        solution: "La compétence 1 du référentiel officiel impose à tout professeur de transmettre et faire partager les principes républicains, la laïcité, l'égalité filles-garçons, le respect d'autrui et la construction de l'esprit critique par la distinction entre vérités scientifiques démontrables et croyances individuelles."
      },
      {
        id: 'capes-oral2-4',
        chapterId: 'capes-oral2',
        tier: 1,
        title: "Rôle et valeur de la Charte de la laïcité à l'École",
        statement: "Quel est le statut institutionnel et la fonction pédagogique de la Charte de la laïcité à l'École (circulaire du 6 septembre 2013) ?",
        type: "mcq",
        options: [
          "Elle doit être affichée de manière visible dans tous les établissements publics, annexée au règlement intérieur signé par les familles, et sert de support pour expliciter la laïcité comme liberté et émancipation",
          "C'est un document optionnel laissé à la seule discrétion des professeurs d'histoire",
          "C'est un code pénal interne permettant de prononcer des amendes financières contre les élèves",
          "Elle ne concerne que l'enseignement supérieur et les universités"
        ],
        correctIndex: 0,
        answer: "Elle doit être affichée de manière visible dans tous les établissements publics, annexée au règlement intérieur signé par les familles, et sert de support pour expliciter la laïcité comme liberté et émancipation",
        hint1: "Vademecum fiche 2 : la Charte explicite en 15 articles les principes fondateurs de l'école laïque et fraternelle.",
        solution: "La Charte de la laïcité est un document officiel de référence affiché dans tous les locaux scolaires publics et annexé au règlement intérieur. Elle rappelle aux élèves et aux parents que l'École laïque garantit l'accès de chacun au savoir libre, protège de tout prosélytisme et forge le libre arbitre citoyen."
      },

      // =========================================================================
      // PALIER 2 : SITUATIONS DE CLASSE, CONTESTATIONS & ASSIDUITÉ
      // =========================================================================
      {
        id: 'capes-oral2-5',
        chapterId: 'capes-oral2',
        tier: 2,
        title: "Contestation d'un cours de mathématiques (Probabilités et hasard)",
        statement: "En classe de 3ème, lors d'une activité introduisant les probabilités avec des dés à six faces, un élève refuse de participer et déclare : « Les jeux de hasard sont interdits par ma religion, et le hasard n'existe pas car tout est écrit d'avance ». Quelle est la réaction professionnelle attendue ?",
        type: "mcq",
        options: [
          "Rappeler posément que l'activité mathématique n'est pas un jeu d'argent mais une modélisation scientifique de l'incertitude et des fréquences, réaffirmer l'obligation légale d'assiduité à tous les cours (art. L. 511-1), distinguer savoir scientifique et croyance personnelle, faire effectuer l'exercice et avertir le professeur principal et la direction si le refus persiste",
          "Remplacer immédiatement l'exercice pour cet élève par un coloriage magique pour éviter tout conflit",
          "Se lancer dans un débat théologique devant toute la classe pour prouver que les mathématiques sont compatibles avec sa foi",
          "Exclure l'élève définitivement de l'établissement sans en référer au chef d'établissement"
        ],
        correctIndex: 0,
        answer: "Rappeler posément que l'activité mathématique n'est pas un jeu d'argent mais une modélisation scientifique de l'incertitude et des fréquences, réaffirmer l'obligation légale d'assiduité à tous les cours (art. L. 511-1), distinguer savoir scientifique et croyance personnelle, faire effectuer l'exercice et avertir le professeur principal et la direction si le refus persiste",
        hint1: "Vademecum fiches 8 et 9 : aucune question n'est exclue du questionnement scientifique (Charte art. 12), l'obligation de suivre l'intégralité des enseignements s'impose à tous.",
        solution: "1. Cadre juridique : D'après les articles L. 511-1 et R. 511-11 du Code de l'éducation, les élèves sont soumis à l'obligation d'assiduité et doivent accomplir tous les travaux demandés. Aucun motif religieux ne permet de se soustraire aux programmes nationaux.\n2. Gestion pédagogique : L'enseignant désamorce l'incident sans agressivité : il explique la différence entre un jeu d'argent et l'étude des lois de probabilités (fréquences, fluctuations d'échantillonnage). Il rappelle que l'École instruit sans juger la foi personnelle.\n3. Suivi : Si l'élève refuse d'obtempérer, l'enseignant ne s'enferme pas dans un bras de fer en classe, consigne l'incident, en informe le professeur principal, le CPE et la direction pour un rappel à la loi avec la famille."
      },
      {
        id: 'capes-oral2-6',
        chapterId: 'capes-oral2',
        tier: 2,
        title: "Signe religieux devenu ostensible par le comportement de l'élève",
        statement: "Une élève de collège se présente quotidiennement en cours de mathématiques vêtue d'un large bandeau sombre masquant totalement sa chevelure et d'une longue jupe noire couvrant ses jambes. Invitée par l'enseignante à retirer son bandeau en classe, elle refuse avec obstination en prétendant qu'il s'agit d'un choix purement esthétique. Quelle est l'analyse juridique conforme au Vademecum ?",
        type: "mcq",
        options: [
          "Un accessoire ou vêtement qui n'est pas religieux par nature devient ostensible compte tenu du comportement de l'élève, de la constance de son port et de son refus répété de l'ôter (jurisprudence CE 2007 et 2013) : la situation relève bien de l'interdiction de l'article L. 141-5-1",
          "L'enseignante ne peut rien dire car le bandeau n'est pas explicitement mentionné dans le texte de la loi de 2004",
          "L'enseignante doit lui arracher le bandeau pour faire respecter la laïcité",
          "L'élève a le droit de porter ce qu'elle veut tant qu'elle a plus de 12 de moyenne en mathématiques"
        ],
        correctIndex: 0,
        answer: "Un accessoire ou vêtement qui n'est pas religieux par nature devient ostensible compte tenu du comportement de l'élève, de la constance de son port et de son refus répété de l'ôter (jurisprudence CE 2007 et 2013) : la situation relève bien de l'interdiction de l'article L. 141-5-1",
        hint1: "Vademecum fiche 3 : Conseil d'État, 5 décembre 2007, n° 295671 (cas du bandana) et CAA de Paris, 18 avril 2017.",
        solution: "Le Conseil d'État et les cours administratives d'appel ont confirmé qu'un signe ou vêtement en apparence neutre (bandana, longue jupe sombre portée systématiquement en refusant tout compromis) devient une manifestation ostensible d'appartenance religieuse en raison du comportement et de la volonté de l'élève. L'enseignant alerte le chef d'établissement qui engage la phase légale obligatoire de dialogue avec l'élève et sa famille avant toute procédure disciplinaire."
      },
      {
        id: 'capes-oral2-7',
        chapterId: 'capes-oral2',
        tier: 2,
        title: "Demandes d'absences régulières pour motif religieux vs assiduité",
        statement: "Une famille informe le professeur principal et l'enseignant de mathématiques que leur enfant sera systématiquement absent chaque samedi matin (où ont lieu des devoirs surveillés) ou chaque vendredi après-midi pour assister à l'office religieux. Quelle décision doit être prise par l'établissement ?",
        type: "mcq",
        options: [
          "Le chef d'établissement doit refuser la demande : l'obligation d'assiduité (art. L. 511-1) interdit tout absentéisme régulier ou systématique pour convenance religieuse ; seules des autorisations ponctuelles pour les grandes fêtes religieuses officielles sont recevables",
          "Le professeur doit obligatoirement accepter et dispenser l'élève de toutes les évaluations du samedi",
          "L'établissement doit décaler tous les cours du samedi matin au dimanche pour accommoder la famille",
          "Le professeur doit lui donner 0 à chaque devoir sans en informer la direction"
        ],
        correctIndex: 0,
        answer: "Le chef d'établissement doit refuser la demande : l'obligation d'assiduité (art. L. 511-1) interdit tout absentéisme régulier ou systématique pour convenance religieuse ; seules des autorisations ponctuelles pour les grandes fêtes religieuses officielles sont recevables",
        hint1: "Vademecum fiche 10 : Conseil d'État, Assemblée, 14 avril 1995, n° 157653 (absences récurrentes les samedis matin contraires à l'assiduité).",
        solution: "Selon la jurisprudence constante du Conseil d'État (14 avril 1995), les autorisations d'absence pour motifs religieux ne peuvent être que strictement exceptionnelles et ponctuelles (grandes fêtes annuelles arrêtées par circulaire de la fonction publique). Une absence récurrente et systématique (samedis ou vendredis) compromet la scolarité normale, désorganise le service et viole l'article L. 511-1 du Code de l'éducation."
      },
      {
        id: 'capes-oral2-8',
        chapterId: 'capes-oral2',
        tier: 2,
        title: "Refus de participation à l'EPS ou aux cours de natation",
        statement: "Des parents refusent que leur fille participe au cycle obligatoire de natation en EPS au motif de la mixité filles/garçons et de la tenue de bain, en produisant un certificat médical de complaisance. Quelle est la position de la Cour Européenne des Droits de l'Homme (CEDH) et du Vademecum ?",
        type: "mcq",
        options: [
          "L'obligation de suivre l'intégralité du programme d'EPS et la mixité scolaire priment sur les convictions religieuses (CEDH 2017 Osmanoglu c. Suisse) ; le certificat médical peut être soumis au contrôle du médecin scolaire et aucune dispense pour motif religieux n'est admise",
          "L'établissement a l'obligation de créer des créneaux de piscine séparés pour les filles et les garçons",
          "La CEDH oblige les collèges à autoriser le burkini dans toutes les piscines municipales scolaires",
          "L'élève est automatiquement dispensée de l'ensemble de sa scolarité"
        ],
        correctIndex: 0,
        answer: "L'obligation de suivre l'intégralité du programme d'EPS et la mixité scolaire priment sur les convictions religieuses (CEDH 2017 Osmanoglu c. Suisse) ; le certificat médical peut être soumis au contrôle du médecin scolaire et aucune dispense pour motif religieux n'est admise",
        hint1: "Vademecum fiche 9 et point EPS (p. 53-55) : arrêt CEDH Osmanoglu c. Suisse du 10 janvier 2017.",
        solution: "Dans son arrêt de principe du 10 janvier 2017, la CEDH a jugé que l'obligation scolaire et l'intérêt des enfants à suivre l'ensemble de la scolarité avec mixité l'emportent sur les croyances privées des parents. Le port du burkini ou de tenues religieuses est interdit pendant les activités scolaires, les règles d'hygiène et de sécurité ne peuvent être aménagées, et les certificats d'inaptitude physique suspects peuvent être contrôlés par le médecin scolaire académique."
      },

      // =========================================================================
      // PALIER 3 : PÉRI-SCOLAIRE, PARENTS & SORTIES
      // =========================================================================
      {
        id: 'capes-oral2-9',
        chapterId: 'capes-oral2',
        tier: 3,
        title: "Parents d'élèves accompagnateurs lors d'une sortie scolaire",
        statement: "Lors d'une sortie scolaire au Palais de la Découverte organisée par l'équipe de mathématiques, une mère d'élève volontaire pour accompagner le groupe se présente coiffée d'un foulard religieux. Peut-elle accompagner la classe ?",
        type: "mcq",
        options: [
          "Oui, les parents accompagnateurs sont des usagers du service public et ne sont pas soumis à la loi de 2004 ; le port du foulard ne peut justifier un refus que s'il s'accompagne d'actes de prosélytisme ou de troubles à l'ordre public",
          "Non, la loi du 15 mars 2004 s'applique à toute personne franchissant le portail du collège, y compris les parents d'élèves",
          "Non, seuls les parents titulaires d'une agrégation de mathématiques peuvent accompagner les sorties",
          "Oui, mais la mère doit obligatoirement signer un serment d'abjuration religieuse avant de monter dans le bus"
        ],
        correctIndex: 0,
        answer: "Oui, les parents accompagnateurs sont des usagers du service public et ne sont pas soumis à la loi de 2004 ; le port du foulard ne peut justifier un refus que s'il s'accompagne d'actes de prosélytisme ou de troubles à l'ordre public",
        hint1: "Vademecum fiche 22 : Étude du Conseil d'État du 19 décembre 2013 et jugements des TA de Nice et Amiens (2015).",
        solution: "Selon l'étude du Conseil d'État de décembre 2013, les parents accompagnateurs ne sont pas des agents publics mais des collaborateurs occasionnels du service public gardant leur qualité d'usagers. La loi de 2004 ne leur est pas applicable. Une interdiction de principe est illégale. Toutefois, ils sont tenus à un devoir de neutralité dans leurs propos et comportements (interdiction absolue de tout prosélytisme devant les élèves) et doivent respecter les consignes de sécurité."
      },
      {
        id: 'capes-oral2-10',
        chapterId: 'capes-oral2',
        tier: 3,
        title: "Parents d'élèves animant un atelier pédagogique en classe",
        statement: "Un parent d'élève bénévole est invité à l'intérieur de la classe pour co-encadrer des élèves lors d'un atelier d'algorithmique et de programmation mathématique. Ce parent est-il soumis au principe de neutralité religieuse ?",
        type: "mcq",
        options: [
          "Oui, d'après l'arrêt de la Cour Administrative d'Appel de Lyon (23 juillet 2019), les personnes qui exercent à l'intérieur des classes des fonctions assimilables à celles des enseignants sont astreintes aux mêmes exigences de neutralité",
          "Non, un parent d'élève n'étant pas fonctionnaire, il peut faire cours avec n'importe quel signe ou prêche religieux",
          "Oui, mais uniquement si l'atelier porte sur la géométrie et non sur l'informatique",
          "La question ne se pose pas car il est strictement interdit aux parents d'entrer dans un établissement scolaire"
        ],
        correctIndex: 0,
        answer: "Oui, d'après l'arrêt de la Cour Administrative d'Appel de Lyon (23 juillet 2019), les personnes qui exercent à l'intérieur des classes des fonctions assimilables à celles des enseignants sont astreintes aux mêmes exigences de neutralité",
        hint1: "Vademecum fiches 22 et 23 : CAA de Lyon, 23 juillet 2019, n° 17LY04351 (neutralité exigée en situation d'enseignement).",
        solution: "La CAA de Lyon (23 juillet 2019) a clarifié que dès lors qu'un parent participe directement à une activité d'enseignement ou d'apprentissage à l'intérieur des classes, il exerce des fonctions similaires à celles des professeurs. À ce titre, la protection de la liberté de conscience des élèves exige qu'il soit soumis aux mêmes obligations de stricte neutralité religieuse et politique que les enseignants."
      },
      {
        id: 'capes-oral2-11',
        chapterId: 'capes-oral2',
        tier: 3,
        title: "Restauration scolaire, menus différenciés et refus du PAI",
        statement: "Des familles demandent à la direction du collège de fournir des repas exclusivement confessionnels à la cantine ou, à défaut, d'établir un PAI (Projet d'Accueil Individualisé) pour que leur enfant apporte son propre panier-repas pour motif religieux. Que prévoit le droit ?",
        type: "mcq",
        options: [
          "La cantine est un service public communal/territorial facultatif soumis à la neutralité ; aucun droit à un menu confessionnel n'existe, et le PAI est strictement réservé aux pathologies et allergies médicales (art. D. 351-9), excluant tout motif religieux",
          "Le chef d'établissement a l'obligation légale d'accepter le PAI sous peine de poursuites pénales pour discrimination",
          "L'établissement doit fermer la cantine scolaire pour respecter la laïcité",
          "Le professeur de mathématiques est personnellement responsable des menus de la cantine"
        ],
        correctIndex: 0,
        answer: "La cantine est un service public communal/territorial facultatif soumis à la neutralité ; aucun droit à un menu confessionnel n'existe, et le PAI est strictement réservé aux pathologies et allergies médicales (art. D. 351-9), excluant tout motif religieux",
        hint1: "Vademecum fiche 11 : Conseil d'État, 25 octobre 2002, n° 251161, et articles D. 351-4 et D. 351-9 du Code de l'éducation.",
        solution: "La collectivité territoriale peut librement proposer des repas végétariens ou de substitution, mais n'en a aucune obligation légale. Les usagers ne peuvent exiger des menus conformes à des préceptes religieux. En outre, le PAI est légalement restreint aux enfants présentant un trouble de santé ou un handicap invalidant : l'utiliser pour des motifs confessionnels est formellement prohibé afin d'éviter tout détournement et risque sanitaire."
      },
      {
        id: 'capes-oral2-12',
        chapterId: 'capes-oral2',
        tier: 3,
        title: "Refus d'un parent de saluer ou de s'adresser à une enseignante",
        statement: "Lors de la remise des bulletins, un père d'élève refuse de serrer la main et refuse de s'adresser à la professeure de mathématiques en raison de son sexe, exigeant de parler à un collègue masculin. Quelle est la réponse professionnelle conforme aux valeurs républicaines ?",
        type: "mcq",
        options: [
          "Refuser l'entretien dans ces conditions, rappeler immédiatement que l'égalité entre les femmes et les hommes est un principe républicain non négociable, ne pas céder à la demande de substitution et avertir le chef d'établissement pour un rappel formel à la loi",
          "S'effacer et chercher immédiatement un collègue masculin pour ne pas froisser le parent d'élève",
          "Insulter le parent d'élève devant les autres familles",
          "Modifier les notes de l'élève pour se venger"
        ],
        correctIndex: 0,
        answer: "Refuser l'entretien dans ces conditions, rappeler immédiatement que l'égalité entre les femmes et les hommes est un principe républicain non négociable, ne pas céder à la demande de substitution et avertir le chef d'établissement pour un rappel formel à la loi",
        hint1: "Vademecum fiches 18 et point incivilités (p. 82-83) : « Nul ne peut se prévaloir de sa religion ou de ses convictions pour porter atteinte à l'égalité entre les femmes et les hommes ».",
        solution: "Le refus de saluer ou de communiquer avec un agent public en raison de son sexe porte directement atteinte à la dignité de la personne et viole le principe fondamental d'égalité femmes-hommes. L'enseignante n'a pas à accepter cette discrimination. L'entretien est interrompu, le chef d'établissement prend le relais pour recevoir le parent et lui rappeler les règles républicaines qui s'imposent dans l'enceinte de l'école."
      },

      // =========================================================================
      // PALIER 4 : CAS COMPLEXES, PROCÉDURES DE CRISE & POSTURE DU JURY
      // =========================================================================
      {
        id: 'capes-oral2-13',
        chapterId: 'capes-oral2',
        tier: 4,
        title: "Élève en danger de santé lié à un jeûne imposé et Information Préoccupante",
        statement: "En classe de mathématiques, un élève de 11 ans est victime de malaises répétés dus à un jeûne strict et à un refus d'hydratation. La famille prévenue exige qu'on ne lui donne ni eau ni sucre à l'infirmerie pour respecter le jeûne. Quelle est l'obligation de l'équipe éducative ?",
        type: "mcq",
        options: [
          "Secourir immédiatement l'enfant (l'urgence vitale prime), faire appel aux services médicaux (SAMU, infirmière), et si la santé du mineur est compromise de façon durable, transmettre une Information Préoccupante (IP) au président du conseil départemental (art. 375 Code civil et art. L. 226-2-1 CASF)",
          "Respecter la volonté parentale et laisser l'enfant sans soin dans le couloir",
          "Donner une punition collective à la classe de mathématiques",
          "Exclure l'élève pour perturbation de cours"
        ],
        correctIndex: 0,
        answer: "Secourir immédiatement l'enfant (l'urgence vitale prime), faire appel aux services médicaux (SAMU, infirmière), et si la santé du mineur est compromise de façon durable, transmettre une Information Préoccupante (IP) au président du conseil départemental (art. 375 Code civil et art. L. 226-2-1 CASF)",
        hint1: "Vademecum fiche 13 : protection des mineurs en danger (art. 375 du Code civil et art. L. 226-2-1 du CASF).",
        solution: "1. Priorité absolue à la santé de l'élève : L'assistance à personne en péril s'impose. L'élève est pris en charge par l'infirmière ou les secours d'urgence, qui lui administrent les soins nécessaires nonobstant les consignes parentales.\n2. Volet protection de l'enfance : Si des pratiques imposées mettent en danger la santé, la sécurité ou le développement physique d'un mineur, tout personnel a le devoir de rédiger une Information Préoccupante (IP) adressée à la cellule départementale (CRIP)."
      },
      {
        id: 'capes-oral2-14',
        chapterId: 'capes-oral2',
        tier: 4,
        title: "Dispositif national et académique de signalement des atteintes à la laïcité",
        statement: "Face à une atteinte caractérisée au principe de laïcité ou aux valeurs républicaines au sein d'un collège, quels sont les dispositifs institutionnels créés par le ministère depuis 2017 pour épauler les enseignants et la direction ?",
        type: "mcq",
        options: [
          "Le signalement officiel via l'application nationale « Faits établissement », la saisine de l'Équipe Académique Valeurs de la République (EAVR) pour un appui juridique et humain sous 24h, et l'expertise du Conseil des sages de la laïcité",
          "Une plainte déposée individuellement sur les réseaux sociaux par l'enseignant",
          "La fermeture automatique de l'établissement par décision du délégué de classe",
          "La suppression de l'enseignement des mathématiques dans l'académie"
        ],
        correctIndex: 0,
        answer: "Le signalement officiel via l'application nationale « Faits établissement », la saisine de l'Équipe Académique Valeurs de la République (EAVR) pour un appui juridique et humain sous 24h, et l'expertise du Conseil des sages de la laïcité",
        hint1: "Vademecum p. 9-10 (Le dispositif ministériel) et fiches 1 et 2.",
        solution: "Depuis 2017, le ministère a mis en place une architecture robuste : l'application « Faits établissement » pour recenser et objectiver les atteintes, les Équipes Académiques Valeurs de la République (EAVR) composées d'inspecteurs et de juristes pour intervenir sur le terrain et ne laisser aucun professeur isolé, le formulaire national Éduscol « atteinte à la laïcité », et le Conseil des sages de la laïcité présidé par Dominique Schnapper."
      },
      {
        id: 'capes-oral2-15',
        chapterId: 'capes-oral2',
        tier: 4,
        title: "Stagiaires Greta et étudiants en stage dans un établissement scolaire",
        statement: "Dans les locaux d'un lycée public accueillant en soirée ou en journée des stagiaires adultes de la formation continue (Greta) et des étudiants de santé en service sanitaire, quelles règles de laïcité s'appliquent ?",
        type: "mcq",
        options: [
          "Les stagiaires Greta sont des usagers non soumis à la loi de 2004, mais le chef d'établissement peut limiter les signes ostensibles s'ils côtoient les élèves pour éviter tout trouble à l'ordre public (CAA Paris 2015) ; les étudiants en stage de service public sont, eux, soumis à une stricte neutralité d'agents (CE 2017)",
          "Tous les adultes entrant dans un lycée deviennent automatiquement militaires",
          "Aucune règle ne s'applique aux adultes dans un établissement scolaire public",
          "Les étudiants du Greta sont soumis aux sanctions du conseil de discipline du collège"
        ],
        correctIndex: 0,
        answer: "Les stagiaires Greta sont des usagers non soumis à la loi de 2004, mais le chef d'établissement peut limiter les signes ostensibles s'ils côtoient les élèves pour éviter tout trouble à l'ordre public (CAA Paris 2015) ; les étudiants en stage de service public sont, eux, soumis à une stricte neutralité d'agents (CE 2017)",
        hint1: "Vademecum fiches 4 et 18 : arrêt CAA de Paris du 12 octobre 2015 (Greta) et CE 28 juillet 2017 (service sanitaire).",
        solution: "La jurisprudence administrative distingue le statut de la personne : les stagiaires de la formation continue adulte ne sont pas des élèves mais des usagers ; toutefois, la mixité des locaux avec les élèves mineurs permet d'encadrer les signes ostensibles par le règlement intérieur pour préserver la sérénité du service. En revanche, tout stagiaire exerçant des missions de service public (service sanitaire, enseignants stagiaires) est astreint à la neutralité absolue."
      },
      {
        id: 'capes-oral2-16',
        chapterId: 'capes-oral2',
        tier: 4,
        title: "Méthodologie de l'entretien Oral 2 devant le jury du CAPES",
        statement: "Lors de la deuxième partie de l'Oral 2 du CAPES portant sur une mise en situation professionnelle ou un cas éthique, quelle est la structure d'exposé attendue par le jury pour valoriser vos compétences de futur fonctionnaire ?",
        type: "mcq",
        options: [
          "Articuler sa réponse en 3 temps : 1° Rappel précis du cadre légal et déontologique (neutralité, assiduité, laïcité) ; 2° Réponse pédagogique immédiate et bienveillante en classe ; 3° Inscription dans le travail d'équipe et la chaîne institutionnelle (direction, CPE, partenaires, EAVR)",
          "Répondre au hasard en 10 secondes et demander à passer à une question de géométrie euclidienne",
          "Accuser les élèves et prétendre qu'il est impossible d'enseigner les mathématiques aujourd'hui",
          "Déclarer que les lois de la République ne s'appliquent pas dans une salle de cours"
        ],
        correctIndex: 0,
        answer: "Articuler sa réponse en 3 temps : 1° Rappel précis du cadre légal et déontologique (neutralité, assiduité, laïcité) ; 2° Réponse pédagogique immédiate et bienveillante en classe ; 3° Inscription dans le travail d'équipe et la chaîne institutionnelle (direction, CPE, partenaires, EAVR)",
        hint1: "Rapports du jury du CAPES : le jury évalue la solidité déontologique, la capacité à ne pas rester isolé et la fermeté sur les valeurs républicaines.",
        solution: "Le jury attend d'un futur professeur de mathématiques qu'il montre sa pleine appartenance au corps des fonctionnaires de l'État : connaissance des textes fondamentaux (Loi 1905, 2004, 2019, Code de l'éducation), discernement éducatif sur le terrain (fermeté sans provocation ni faiblesse), et réflexe permanent du travail en équipe pédagogique et de la collaboration avec l'équipe de direction."
      }
    ]
  };

  if (typeof window !== 'undefined') {
    window.CAPES_LESSONS = CAPES_LESSONS;
    window.CAPES_CHAPTERS = CAPES_CHAPTERS;
    if (!window.MATHS_CHAPTERS) window.MATHS_CHAPTERS = [];
    window.MATHS_CHAPTERS.push(...CAPES_CHAPTERS);

    if (!window.MATHS_EXERCISES) window.MATHS_EXERCISES = {};
    Object.assign(window.MATHS_EXERCISES, CAPES_EXERCISES);
    window.CAPES_EXERCISES = CAPES_EXERCISES;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CAPES_LESSONS, CAPES_CHAPTERS, CAPES_EXERCISES };
  }
})();
