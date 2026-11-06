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
      "id": "capes-11",
      "num": "Leçon 11",
      "title": "Géométrie vectorielle et produit scalaire : du plan à l'espace, transformations",
      "domain": "Géométrie",
      "level": "CAPES — leçon (seconde, première, terminale)",
      "prerequisites": [
        "Niveaux concernés et situation dans les programmes : au cycle 4, translations, rotations et homothéties, théorèmes de Pythagore et de Thalès, trigonométrie du triangle rectangle ; en seconde, vecteur associé à une translation, somme de vecteurs et relation de Chasles, produit par un réel, coordonnées, colinéarité et déterminant de deux vecteurs, équations cartésiennes et réduites de droites ; en première spécialité, produit scalaire (définitions, propriétés, formule d'Al-Kashi), équations de droites à l'aide d'un vecteur normal, équations de cercles, ensembles de points ; en terminale spécialité, vecteurs, droites et plans de l'espace, bases et repères, représentations paramétriques, produit scalaire dans l'espace, vecteur normal et équation cartésienne d'un plan, projeté orthogonal.",
        "Plan de leçon possible : I. Vecteurs et colinéarité (seconde) ; II. Produit scalaire dans le plan (première) ; III. Géométrie dans l'espace et transformations (terminale). Le développement présenté au jury peut être la démonstration du théorème clé (expression analytique, formule d'Al-Kashi, cercle de diamètre $[AB]$) ou l'un des exercices proposés plus bas.",
        "Prérequis des élèves : géométrie du collège (Pythagore et sa réciproque, Thalès, trigonométrie du triangle rectangle), repère orthonormé du plan, distance de deux points $AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$, coordonnées du milieu d'un segment, résolution de systèmes linéaires $2 \\times 2$.",
        "Recul attendu du candidat : structure d'espace vectoriel réel de dimension 2 ou 3, espace affine associé, forme bilinéaire symétrique définie positive et norme euclidienne, isométries et similitudes. Ce cadre éclaire la leçon mais ne s'expose pas tel quel aux élèves."
      ],
      "plan": [
        {
          "part": "I. Vecteurs du plan et colinéarité",
          "content": "Définition (seconde) : la translation qui transforme $A$ en $B$ associe à tout point $M$ l'unique point $M'$ tel que $ABM'M$ soit un parallélogramme, éventuellement aplati ; le vecteur $\\overrightarrow{AB}$ est associé à cette translation, et $\\overrightarrow{AB} = \\overrightarrow{DC}$ si et seulement si $ABCD$ est un parallélogramme. Relation de Chasles $\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$, produit par un réel, milieu $I$ de $[AB]$ caractérisé par $\\overrightarrow{AI} = \\frac{1}{2}\\overrightarrow{AB}$. Dans une base $(\\vec{\\imath}, \\vec{\\jmath})$, les vecteurs $\\vec{u}(x ; y)$ et $\\vec{v}(x' ; y')$ ont pour déterminant $\\det(\\vec{u}, \\vec{v}) = xy' - x'y$. Propriété (démonstration exigible) : $\\vec{u}$ et $\\vec{v}$ sont colinéaires si et seulement si $\\det(\\vec{u}, \\vec{v}) = 0$. Applications : trois points $A$, $B$, $C$ sont alignés si et seulement si $\\overrightarrow{AB}$ et $\\overrightarrow{AC}$ sont colinéaires ; deux droites sont parallèles si et seulement si leurs vecteurs directeurs sont colinéaires. Toute droite admet une équation $ax + by + c = 0$ avec $(a ; b) \\neq (0 ; 0)$, de vecteur directeur $(-b ; a)$. Exemple : $A(1 ; 2)$, $B(3 ; 5)$, $C(7 ; 11)$ donnent $\\overrightarrow{AB}(2 ; 3)$, $\\overrightarrow{AC}(6 ; 9)$ et $2 \\times 9 - 3 \\times 6 = 0$ : les points sont alignés. Contre-exemple : l'égalité $\\overrightarrow{AB} = \\overrightarrow{CD}$ ne signifie pas que $ABCD$ est un parallélogramme, mais que $ABDC$ en est un."
        },
        {
          "part": "II. Produit scalaire dans le plan",
          "content": "Définition retenue : $\\vec{u} \\cdot \\vec{v} = \\frac{1}{2}\\left(\\|\\vec{u} + \\vec{v}\\|^2 - \\|\\vec{u}\\|^2 - \\|\\vec{v}\\|^2\\right)$, de sorte que $\\vec{u} \\cdot \\vec{u} = \\|\\vec{u}\\|^2$. Expressions équivalentes, toutes à démontrer à partir de la définition choisie : dans une base orthonormée, $\\vec{u} \\cdot \\vec{v} = xx' + yy'$ ; si $\\vec{u}$ et $\\vec{v}$ sont non nuls, $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\|\\,\\|\\vec{v}\\|\\cos(\\vec{u}, \\vec{v})$ ; par projection, $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = \\overrightarrow{AB} \\cdot \\overrightarrow{AH}$ où $H$ est le projeté orthogonal de $C$ sur $(AB)$. Propriétés : symétrie, bilinéarité, $\\|\\vec{u} - \\vec{v}\\|^2 = \\|\\vec{u}\\|^2 - 2\\vec{u} \\cdot \\vec{v} + \\|\\vec{v}\\|^2$. Orthogonalité : $\\vec{u} \\perp \\vec{v}$ si et seulement si $\\vec{u} \\cdot \\vec{v} = 0$, le vecteur nul étant orthogonal à tout vecteur. Théorèmes (démonstrations exigibles) : formule d'Al-Kashi $BC^2 = AB^2 + AC^2 - 2\\,AB \\times AC \\times \\cos\\widehat{BAC}$, qui généralise le théorème de Pythagore ; l'ensemble des points $M$ tels que $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = 0$ est le cercle de diamètre $[AB]$. Applications : vecteur normal $(a ; b)$ à la droite $ax + by + c = 0$, équation $(x - x_0)^2 + (y - y_0)^2 = r^2$ d'un cercle, tangente à un cercle. Exemple : pour $A(0 ; 0)$, $B(4 ; 0)$, $C(1 ; 3)$, $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = 4$, $AB = 4$ et $AC = \\sqrt{10}$, d'où $\\cos\\widehat{BAC} = \\frac{1}{\\sqrt{10}}$. Contre-exemple : $\\vec{u} \\cdot \\vec{v} = \\vec{u} \\cdot \\vec{w}$ n'entraîne pas $\\vec{v} = \\vec{w}$, seulement $\\vec{u} \\perp (\\vec{v} - \\vec{w})$."
        },
        {
          "part": "III. Géométrie dans l'espace et transformations",
          "content": "Les vecteurs de l'espace se définissent comme dans le plan. Trois vecteurs sont coplanaires si l'un est combinaison linéaire des deux autres ; trois vecteurs non coplanaires forment une base, et un point $O$ avec une base forme un repère. Une droite passant par $A$ et dirigée par $\\vec{u}$ admet la représentation paramétrique $M = A + t\\vec{u}$, $t \\in \\mathbb{R}$. Le produit scalaire de deux vecteurs de l'espace se calcule dans un plan contenant des représentants de ces vecteurs ; dans une base orthonormée, $\\vec{u} \\cdot \\vec{v} = xx' + yy' + zz'$. Une droite est orthogonale à un plan si et seulement si elle est orthogonale à deux droites sécantes de ce plan ; un vecteur $\\vec{n}$ non nul orthogonal à deux vecteurs non colinéaires d'un plan est normal à ce plan, et le plan passant par $A$ de vecteur normal $\\vec{n}(a ; b ; c)$ a une équation $ax + by + cz + d = 0$. Propriété (démonstration exigible) : le projeté orthogonal $H$ d'un point $M$ sur un plan $\\mathcal{P}$ est le point de $\\mathcal{P}$ le plus proche de $M$, car $MN^2 = MH^2 + HN^2$ pour tout $N \\in \\mathcal{P}$ (Pythagore). Transformations : la translation de vecteur $\\vec{u}$ envoie $M$ sur $M'$ tel que $\\overrightarrow{MM'} = \\vec{u}$ et conserve les distances ; l'homothétie de centre $O$ et de rapport $k \\neq 0$ envoie $M$ sur $M'$ tel que $\\overrightarrow{OM'} = k\\overrightarrow{OM}$, transforme tout vecteur $\\overrightarrow{AB}$ en $k\\overrightarrow{AB}$, multiplie les longueurs par $|k|$ et les aires par $k^2$ ; la symétrie centrale est l'homothétie de rapport $-1$. Les rotations du plan s'expriment simplement avec les nombres complexes (leçon 12)."
        }
      ],
      "keyTheorem": {
        "title": "Expression analytique du produit scalaire, formule d'Al-Kashi et cercle de diamètre [AB]",
        "statement": "On définit le produit scalaire de deux vecteurs du plan par $\\vec{u} \\cdot \\vec{v} = \\frac{1}{2}\\left(\\|\\vec{u} + \\vec{v}\\|^2 - \\|\\vec{u}\\|^2 - \\|\\vec{v}\\|^2\\right)$. (i) Dans une base orthonormée, si $\\vec{u}(x ; y)$ et $\\vec{v}(x' ; y')$, alors $\\vec{u} \\cdot \\vec{v} = xx' + yy'$ ; en conséquence, le produit scalaire est symétrique et bilinéaire. (ii) Pour tout triangle $ABC$, $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = AB \\times AC \\times \\cos\\widehat{BAC}$ et $BC^2 = AB^2 + AC^2 - 2\\,AB \\times AC \\times \\cos\\widehat{BAC}$. (iii) Pour deux points distincts $A$ et $B$, l'ensemble des points $M$ du plan tels que $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = 0$ est le cercle de diamètre $[AB]$.",
        "proof": "1. **Expression analytique.** Dans une base orthonormée, le théorème de Pythagore donne $\\|\\vec{u}\\|^2 = x^2 + y^2$. Comme $\\vec{u} + \\vec{v}$ a pour coordonnées $(x + x' ; y + y')$, on obtient $\\|\\vec{u} + \\vec{v}\\|^2 - \\|\\vec{u}\\|^2 - \\|\\vec{v}\\|^2 = (x + x')^2 + (y + y')^2 - x^2 - y^2 - x'^2 - y'^2 = 2xx' + 2yy'$, d'où $\\vec{u} \\cdot \\vec{v} = xx' + yy'$. Cette expression est visiblement symétrique et linéaire par rapport à chacun des deux vecteurs.\n2. **Développement du carré d'une différence.** Par bilinéarité et symétrie, $\\|\\vec{u} - \\vec{v}\\|^2 = (\\vec{u} - \\vec{v}) \\cdot (\\vec{u} - \\vec{v}) = \\|\\vec{u}\\|^2 - 2\\,\\vec{u} \\cdot \\vec{v} + \\|\\vec{v}\\|^2$.\n3. **Formule avec le cosinus.** On note $\\alpha = \\widehat{BAC}$ et on choisit le repère orthonormé d'origine $A$ dont le premier vecteur est $\\frac{1}{AB}\\overrightarrow{AB}$, orienté de sorte que $C$ ait une ordonnée positive. Alors $B(AB ; 0)$ et, par définition du cosinus et du sinus, $C(AC\\cos\\alpha ; AC\\sin\\alpha)$. Le point 1 donne $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = AB \\times AC\\cos\\alpha + 0 = AB \\times AC \\times \\cos\\alpha$.\n4. **Formule d'Al-Kashi.** Par la relation de Chasles, $\\overrightarrow{BC} = \\overrightarrow{AC} - \\overrightarrow{AB}$, donc par le point 2, $BC^2 = AC^2 - 2\\,\\overrightarrow{AB} \\cdot \\overrightarrow{AC} + AB^2$, et le point 3 conclut. Pour $\\alpha = \\frac{\\pi}{2}$, on retrouve le théorème de Pythagore, et sa réciproque puisque $\\cos\\alpha = 0$ équivaut à $\\alpha = \\frac{\\pi}{2}$ pour $\\alpha \\in [0 ; \\pi]$.\n5. **Cercle de diamètre $[AB]$.** Soit $I$ le milieu de $[AB]$, de sorte que $\\overrightarrow{IB} = -\\overrightarrow{IA}$. Par Chasles et bilinéarité, $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = (\\overrightarrow{MI} + \\overrightarrow{IA}) \\cdot (\\overrightarrow{MI} - \\overrightarrow{IA}) = MI^2 - IA^2 = MI^2 - \\frac{AB^2}{4}$. Ainsi $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = 0$ si et seulement si $MI = \\frac{AB}{2}$, c'est-à-dire si et seulement si $M$ appartient au cercle de centre $I$ et de rayon $\\frac{AB}{2}$."
      },
      "developments": [
        "Exercice de seconde (colinéarité) : dans un repère, $A(-1 ; 2)$, $B(3 ; 4)$, $C(1 ; -2)$ et $D(9 ; 2)$. Montrer que $(AB)$ et $(CD)$ sont parallèles, puis que ces droites sont distinctes. Corrigé : $\\overrightarrow{AB}(4 ; 2)$ et $\\overrightarrow{CD}(8 ; 4)$, de déterminant $4 \\times 4 - 2 \\times 8 = 0$ : les droites sont parallèles. Puis $\\overrightarrow{AD}(10 ; 0)$ et $\\det(\\overrightarrow{AB}, \\overrightarrow{AD}) = 4 \\times 0 - 2 \\times 10 = -20 \\neq 0$ : $D \\notin (AB)$, donc les droites sont strictement parallèles.",
        "Exercice de première (formule d'Al-Kashi) : dans un triangle $ABC$, $AB = 5$, $AC = 8$ et $\\widehat{BAC} = 60°$. Calculer $BC$ et $\\overrightarrow{AB} \\cdot \\overrightarrow{AC}$. Corrigé : $BC^2 = 25 + 64 - 2 \\times 5 \\times 8 \\times \\frac{1}{2} = 49$, donc $BC = 7$ ; $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = 5 \\times 8 \\times \\frac{1}{2} = 20$. Variante : retrouver l'angle à partir des trois longueurs.",
        "Exercice de première (ensemble de points) : $A(1 ; 2)$ et $B(5 ; -2)$. Déterminer une équation de l'ensemble des points $M(x ; y)$ tels que $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = 0$. Corrigé : $(1 - x)(5 - x) + (2 - y)(-2 - y) = 0$ équivaut à $x^2 - 6x + 5 + y^2 - 4 = 0$, soit $(x - 3)^2 + y^2 = 8$ : c'est le cercle de centre $I(3 ; 0)$, milieu de $[AB]$, et de rayon $2\\sqrt{2} = \\frac{AB}{2}$, conformément au théorème clé.",
        "Exercice de terminale (projeté orthogonal) : $\\mathcal{P}$ est le plan d'équation $2x - y + 2z - 1 = 0$ et $M(3 ; 1 ; 4)$. Déterminer le projeté orthogonal $H$ de $M$ sur $\\mathcal{P}$ et la distance de $M$ à $\\mathcal{P}$. Corrigé : $\\vec{n}(2 ; -1 ; 2)$ est normal à $\\mathcal{P}$ ; la droite passant par $M$ dirigée par $\\vec{n}$ a pour représentation $(3 + 2t ; 1 - t ; 4 + 2t)$ ; elle coupe $\\mathcal{P}$ lorsque $12 + 9t = 0$, soit $t = -\\frac{4}{3}$, d'où $H\\left(\\frac{1}{3} ; \\frac{7}{3} ; \\frac{4}{3}\\right)$ et $MH = \\frac{4}{3}\\|\\vec{n}\\| = 4$.",
        "Prolongements : théorème de la médiane $MA^2 + MB^2 = 2MI^2 + \\frac{AB^2}{2}$ ; droite d'Euler (si $O$ est le centre du cercle circonscrit, le point $H$ défini par $\\overrightarrow{OH} = \\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC}$ est l'orthocentre, et $\\overrightarrow{OH} = 3\\overrightarrow{OG}$) ; distance d'un point à un plan $\\frac{|ax_0 + by_0 + cz_0 + d|}{\\sqrt{a^2 + b^2 + c^2}}$ ; rotations et similitudes par les nombres complexes (leçon 12) ; cadre des espaces préhilbertiens (leçon 05)."
      ],
      "juryTips": [
        "Erreur fréquente d'élève : traduire « $ABCD$ est un parallélogramme » par $\\overrightarrow{AB} = \\overrightarrow{CD}$. La bonne égalité est $\\overrightarrow{AB} = \\overrightarrow{DC}$ ; faire tracer la figure suffit en général à corriger.",
        "Erreur fréquente d'élève : utiliser $xx' + yy'$ dans une base non orthonormée. Si $\\|\\vec{\\imath}\\| = \\|\\vec{\\jmath}\\| = 1$ et $(\\vec{\\imath}, \\vec{\\jmath}) = \\frac{\\pi}{3}$, alors $\\vec{\\imath} \\cdot \\vec{\\jmath} = \\frac{1}{2}$, alors que la formule donnerait $1 \\times 0 + 0 \\times 1 = 0$.",
        "Erreur fréquente d'élève : « simplifier » par un vecteur dans $\\vec{u} \\cdot \\vec{v} = \\vec{u} \\cdot \\vec{w}$. Avec $\\vec{u}(1 ; 0)$, $\\vec{v}(0 ; 1)$ et $\\vec{w}(0 ; 2)$, les deux produits sont nuls alors que $\\vec{v} \\neq \\vec{w}$.",
        "Erreur fréquente d'élève dans l'espace : croire qu'une droite orthogonale à une seule droite d'un plan est orthogonale au plan, ou que deux droites orthogonales sont sécantes. Il faut deux droites sécantes du plan, et l'orthogonalité de deux droites ne dit rien de leur intersection (arêtes opposées d'un cube).",
        "Le jury demande quelle définition du produit scalaire a été choisie : une leçon qui utilise successivement les normes, la projection, le cosinus et les coordonnées sans en démontrer l'équivalence est circulaire. Il faut aussi savoir dire ce qu'est un vecteur au niveau de la seconde (translation) et au niveau supérieur (élément d'un espace vectoriel, classe de bipoints équipollents).",
        "Le mot « angle » cache deux notions : l'angle géométrique $\\widehat{BAC} \\in [0 ; \\pi]$, qui suffit pour le produit scalaire puisque le cosinus est pair, et l'angle orienté de vecteurs, défini modulo $2\\pi$, indispensable pour les rotations."
      ]
    },
    {
      "id": "capes-12",
      "num": "Leçon 12",
      "title": "Nombres complexes : formes algébrique et exponentielle, équations et géométrie",
      "domain": "Algèbre & Géométrie",
      "level": "CAPES — leçon (terminale, mathématiques expertes)",
      "prerequisites": [
        "Niveaux concernés et situation dans les programmes : les nombres complexes sont étudiés en terminale dans l'option mathématiques expertes de la voie générale (forme algébrique, conjugué, équations du second degré à coefficients réels, formule du binôme, module et argument, forme trigonométrique et exponentielle, formules d'Euler et de Moivre, racines $n$-ièmes de l'unité, utilisation en géométrie) ; ils figurent aussi dans les programmes de terminale STI2D et STL, au service de la physique (signaux sinusoïdaux, électricité). La trigonométrie (cercle trigonométrique, cosinus et sinus d'un réel) et le produit scalaire sont vus en première spécialité.",
        "Plan de leçon possible : I. Forme algébrique et équations ; II. Module, argument et forme exponentielle ; III. Nombres complexes et géométrie. Le développement peut être le théorème clé (conjugaison et équations du second degré), le calcul de $\\cos\\frac{2\\pi}{5}$ par les racines cinquièmes de l'unité, ou l'un des exercices proposés plus bas.",
        "Prérequis des élèves : trinôme du second degré (discriminant, forme canonique, factorisation), trigonométrie du cercle, vecteurs et produit scalaire, raisonnement par récurrence, sommes de termes d'une suite géométrique.",
        "Recul attendu du candidat : une construction de $\\mathbb{C}$ (le plan $\\mathbb{R}^2$ muni du produit $(a, b)(c, d) = (ac - bd, ad + bc)$, ou le quotient $\\mathbb{R}[X]/(X^2 + 1)$), le fait que $\\mathbb{C}$ est un corps qui ne peut pas être ordonné, le théorème de d'Alembert-Gauss, le groupe $\\mathbb{U}$ des complexes de module 1 et les similitudes directes $z \\mapsto az + b$."
      ],
      "plan": [
        {
          "part": "I. Forme algébrique, conjugué et équations",
          "content": "Théorème admis au lycée : il existe un ensemble $\\mathbb{C}$ contenant $\\mathbb{R}$, muni d'une addition et d'une multiplication prolongeant celles de $\\mathbb{R}$ et ayant les mêmes règles de calcul, contenant un élément $i$ tel que $i^2 = -1$, et dont tout élément s'écrit de façon unique $z = a + ib$ avec $a, b$ réels (partie réelle et partie imaginaire). Conjugué $\\bar{z} = a - ib$ : $\\overline{z + z'} = \\bar{z} + \\bar{z'}$, $\\overline{zz'} = \\bar{z}\\,\\bar{z'}$, $\\overline{z^n} = \\bar{z}^n$ (démonstrations exigibles) ; $z\\bar{z} = a^2 + b^2$, ce qui donne l'inverse $\\frac{1}{z} = \\frac{\\bar{z}}{a^2 + b^2}$ pour $z \\neq 0$ ; $z$ est réel si et seulement si $\\bar{z} = z$, imaginaire pur si et seulement si $\\bar{z} = -z$. La formule du binôme vaut dans $\\mathbb{C}$. Équation $az^2 + bz + c = 0$ à coefficients réels, $a \\neq 0$, de discriminant $\\Delta \\lt 0$ : deux solutions conjuguées $\\frac{-b \\pm i\\sqrt{-\\Delta}}{2a}$. Factorisation $z^n - a^n = (z - a)(z^{n-1} + az^{n-2} + \\cdots + a^{n-1})$ : si $P(a) = 0$, alors $P(z)$ se factorise par $z - a$, et un polynôme de degré $n$ a au plus $n$ racines. Exemple : $z^2 - 2z + 5 = 0$ a pour solutions $1 + 2i$ et $1 - 2i$. Contre-exemple : il n'existe pas d'ordre sur $\\mathbb{C}$ compatible avec les opérations, car on aurait $i^2 \\ge 0$, c'est-à-dire $-1 \\ge 0$."
        },
        {
          "part": "II. Module, argument et forme exponentielle",
          "content": "Module $|z| = \\sqrt{z\\bar{z}} = \\sqrt{a^2 + b^2}$ : $|zz'| = |z|\\,|z'|$, $\\left|\\frac{1}{z}\\right| = \\frac{1}{|z|}$ et inégalité triangulaire $|z + z'| \\le |z| + |z'|$. Pour $z \\neq 0$, un argument de $z$ est un réel $\\theta$ tel que $z = |z|(\\cos\\theta + i\\sin\\theta)$ ; il est défini modulo $2\\pi$. On note $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$. Les formules d'addition des fonctions cosinus et sinus donnent $e^{i\\theta}e^{i\\theta'} = e^{i(\\theta + \\theta')}$, d'où $\\arg(zz') \\equiv \\arg z + \\arg z' \\pmod{2\\pi}$, la formule de Moivre $(e^{i\\theta})^n = e^{in\\theta}$ (récurrence) et les formules d'Euler $\\cos\\theta = \\frac{e^{i\\theta} + e^{-i\\theta}}{2}$, $\\sin\\theta = \\frac{e^{i\\theta} - e^{-i\\theta}}{2i}$, qui servent à linéariser : $\\cos^3\\theta = \\frac{\\cos(3\\theta) + 3\\cos\\theta}{4}$. Exemple : $1 + i = \\sqrt{2}e^{i\\frac{\\pi}{4}}$, donc $(1 + i)^8 = 16e^{2i\\pi} = 16$. Racines $n$-ièmes de l'unité : les solutions de $z^n = 1$ sont les $e^{\\frac{2ik\\pi}{n}}$, $0 \\le k \\le n - 1$, dont les images sont les sommets d'un polygone régulier inscrit dans le cercle unité ; leur somme est nulle pour $n \\ge 2$. Contre-exemple : $-2e^{i\\frac{\\pi}{3}}$ n'est pas une forme exponentielle, car le module est positif ; on écrit $-2e^{i\\frac{\\pi}{3}} = 2e^{-\\frac{2i\\pi}{3}}$."
        },
        {
          "part": "III. Nombres complexes et géométrie",
          "content": "Dans un repère orthonormé direct, le point $M(x ; y)$ et le vecteur $\\vec{w}(x ; y)$ ont pour affixe $x + iy$. Si $A$ et $B$ ont pour affixes $a$ et $b$, alors $\\overrightarrow{AB}$ a pour affixe $b - a$, $AB = |b - a|$, et le milieu de $[AB]$ a pour affixe $\\frac{a + b}{2}$. Pour des vecteurs non nuls d'affixes $w$ et $w'$, $(\\vec{w}, \\vec{w'}) \\equiv \\arg\\frac{w'}{w} \\pmod{2\\pi}$ ; en particulier $(\\overrightarrow{AB}, \\overrightarrow{AC}) \\equiv \\arg\\frac{c - a}{b - a}$. Conséquences : pour $A$, $B$, $C$ distincts, ils sont alignés si et seulement si $\\frac{c - a}{b - a}$ est réel, et $(AB) \\perp (AC)$ si et seulement si ce quotient est imaginaire pur. Transformations : la translation de vecteur d'affixe $b$ s'écrit $z \\mapsto z + b$, l'homothétie de centre $\\Omega(\\omega)$ et de rapport $k$ s'écrit $z \\mapsto \\omega + k(z - \\omega)$, et la rotation de centre $\\Omega$ et d'angle $\\theta$ s'écrit $z \\mapsto \\omega + e^{i\\theta}(z - \\omega)$. Exemple : si $a = 0$, $b = 2$ et $c = 1 + i\\sqrt{3}$, alors $\\frac{c - a}{b - a} = e^{i\\frac{\\pi}{3}}$ : le triangle $ABC$ est équilatéral. Le cercle de centre $\\Omega$ et de rayon $r$ est l'ensemble des points d'affixe $\\omega + re^{i\\theta}$, $\\theta \\in \\mathbb{R}$."
        }
      ],
      "keyTheorem": {
        "title": "Conjugaison et équations du second degré à coefficients réels",
        "statement": "(i) Pour tous complexes $z$ et $z'$ et tout entier naturel $n$, $\\overline{zz'} = \\bar{z}\\,\\bar{z'}$ et $\\overline{z^n} = \\bar{z}^n$ ; si $z \\neq 0$, $\\overline{\\left(\\frac{1}{z}\\right)} = \\frac{1}{\\bar{z}}$. (ii) Soit $a$, $b$, $c$ des réels avec $a \\neq 0$ et $\\Delta = b^2 - 4ac \\lt 0$. L'équation $az^2 + bz + c = 0$ admet dans $\\mathbb{C}$ exactement deux solutions, $z_1 = \\frac{-b + i\\sqrt{-\\Delta}}{2a}$ et $z_2 = \\overline{z_1}$, et pour tout complexe $z$, $az^2 + bz + c = a(z - z_1)(z - z_2)$.",
        "proof": "1. **Conjugué d'un produit.** Avec $z = x + iy$ et $z' = x' + iy'$, $zz' = (xx' - yy') + i(xy' + x'y)$, donc $\\overline{zz'} = (xx' - yy') - i(xy' + x'y)$. Par ailleurs $\\bar{z}\\,\\bar{z'} = (x - iy)(x' - iy') = (xx' - yy') - i(xy' + x'y)$ : les deux nombres sont égaux.\n2. **Puissances et inverse.** La propriété $\\overline{z^n} = \\bar{z}^n$ est vraie pour $n = 0$ et, si elle est vraie au rang $n$, alors $\\overline{z^{n+1}} = \\overline{z^n z} = \\overline{z^n}\\,\\bar{z} = \\bar{z}^{n+1}$ : elle est vraie pour tout $n$ par récurrence. Si $z \\neq 0$, en conjuguant $z \\times \\frac{1}{z} = 1$, on obtient $\\bar{z} \\times \\overline{\\left(\\frac{1}{z}\\right)} = 1$, d'où le résultat.\n3. **Forme canonique.** Les règles de calcul de $\\mathbb{C}$ étant celles de $\\mathbb{R}$, on a pour tout complexe $z$ : $az^2 + bz + c = a\\left[\\left(z + \\frac{b}{2a}\\right)^2 - \\frac{\\Delta}{4a^2}\\right]$.\n4. **Factorisation.** Posons $\\delta = \\frac{i\\sqrt{-\\Delta}}{2a}$. Alors $\\delta^2 = \\frac{i^2(-\\Delta)}{4a^2} = \\frac{\\Delta}{4a^2}$, donc $az^2 + bz + c = a\\left(z + \\frac{b}{2a} - \\delta\\right)\\left(z + \\frac{b}{2a} + \\delta\\right) = a(z - z_1)(z - z_2)$, avec $z_1 = -\\frac{b}{2a} + \\delta$ et $z_2 = -\\frac{b}{2a} - \\delta$.\n5. **Solutions.** Dans $\\mathbb{C}$, un produit est nul si et seulement si l'un des facteurs est nul : si $uv = 0$ et $u \\neq 0$, on multiplie par $\\frac{1}{u}$ pour obtenir $v = 0$. Comme $a \\neq 0$, les solutions sont exactement $z_1$ et $z_2$. Elles sont distinctes car $\\delta \\neq 0$, et conjuguées car $-\\frac{b}{2a}$ est réel et $\\delta$ imaginaire pur.\n6. **Remarque.** Plus généralement, si $P$ est un polynôme à coefficients réels, le point 1 donne $P(\\bar{z}) = \\overline{P(z)}$ : les racines non réelles de $P$ vont par paires conjuguées."
      },
      "developments": [
        "Exercice de terminale (équation et géométrie) : résoudre dans $\\mathbb{C}$ l'équation $z^2 - 6z + 13 = 0$, puis montrer que le triangle formé par l'origine $O$ et les points images $A$ et $B$ des solutions est isocèle. Corrigé : $\\Delta = 36 - 52 = -16 = (4i)^2$, donc les solutions sont $3 + 2i$ et $3 - 2i$ ; $OA = OB = \\sqrt{13}$, et les points $A$ et $B$ sont symétriques par rapport à l'axe des réels.",
        "Exercice de terminale (forme exponentielle) : on pose $z = 1 + i\\sqrt{3}$. Écrire $z$ sous forme exponentielle, calculer $z^6$ et déterminer les entiers $n$ pour lesquels $z^n$ est réel. Corrigé : $|z| = 2$ et $z = 2e^{i\\frac{\\pi}{3}}$, donc $z^6 = 64e^{2i\\pi} = 64$. $z^n = 2^ne^{i\\frac{n\\pi}{3}}$ est réel si et seulement si $\\frac{n\\pi}{3} \\equiv 0 \\pmod{\\pi}$, c'est-à-dire si $n$ est multiple de 3. En revanche $z^n$ n'est jamais imaginaire pur, car $\\frac{n}{3} - \\frac{1}{2} = \\frac{2n - 3}{6}$ n'est jamais entier ($2n - 3$ est impair).",
        "Exercice de terminale (linéarisation) : linéariser $\\cos^3 x$ et en déduire une primitive. Corrigé : $\\cos^3 x = \\frac{1}{8}\\left(e^{ix} + e^{-ix}\\right)^3 = \\frac{1}{8}\\left(e^{3ix} + 3e^{ix} + 3e^{-ix} + e^{-3ix}\\right) = \\frac{\\cos(3x) + 3\\cos x}{4}$, donc $x \\mapsto \\frac{\\sin(3x)}{12} + \\frac{3\\sin x}{4}$ est une primitive de $x \\mapsto \\cos^3 x$ sur $\\mathbb{R}$.",
        "Exercice de terminale (configuration) : $A$, $B$, $C$ ont pour affixes $a = 1 + i$, $b = 4 + 2i$ et $c = 4i$. Calculer $\\frac{c - a}{b - a}$ et en déduire la nature du triangle $ABC$. Corrigé : $c - a = -1 + 3i = i(3 + i) = i(b - a)$, donc $\\frac{c - a}{b - a} = i$ : $AC = AB$ et $(\\overrightarrow{AB}, \\overrightarrow{AC}) \\equiv \\frac{\\pi}{2} \\pmod{2\\pi}$, le triangle est rectangle isocèle en $A$ ; $C$ est l'image de $B$ par la rotation de centre $A$ et d'angle $\\frac{\\pi}{2}$.",
        "Prolongements : calcul de $\\cos\\frac{2\\pi}{5} = \\frac{\\sqrt{5} - 1}{4}$ par les racines cinquièmes de l'unité et construction du pentagone régulier ; sommes $\\sum_{k=0}^{n}\\cos(kx)$ par une somme géométrique ; similitudes directes $z \\mapsto az + b$ ; théorème de d'Alembert-Gauss ; exponentielle complexe et équations différentielles linéaires d'ordre 2 (leçon 01)."
      ],
      "juryTips": [
        "Erreur fréquente d'élève : écrire $i = \\sqrt{-1}$ puis appliquer $\\sqrt{u}\\sqrt{v} = \\sqrt{uv}$, ce qui conduit à $-1 = i^2 = \\sqrt{-1}\\sqrt{-1} = \\sqrt{1} = 1$. Le symbole $\\sqrt{\\ }$ est réservé aux réels positifs.",
        "Erreur fréquente d'élève : comparer des complexes (« $z \\gt 0$ ») ou croire que le module et l'argument sont additifs pour la somme. Avec $z = 1$ et $z' = i$, $|z + z'| = \\sqrt{2} \\neq |z| + |z'| = 2$.",
        "Erreur fréquente d'élève : calculer un argument de $a + ib$ par $\\arctan\\frac{b}{a}$ sans tenir compte du quadrant. Pour $-1 - i$, on obtient $\\frac{\\pi}{4}$ au lieu de $-\\frac{3\\pi}{4}$ ; il faut contrôler les signes de $\\cos\\theta = \\frac{a}{|z|}$ et $\\sin\\theta = \\frac{b}{|z|}$.",
        "Erreur fréquente d'élève : appliquer la formule $\\frac{-b \\pm i\\sqrt{-\\Delta}}{2a}$ à une équation à coefficients non réels, ou oublier que les solutions d'une équation à coefficients réels sont conjuguées, ce qui fournit pourtant une vérification immédiate.",
        "Le jury traque la circularité : si les formules d'addition du cosinus et du sinus ont été démontrées (par exemple à l'aide du produit scalaire), elles prouvent $e^{ia}e^{ib} = e^{i(a + b)}$ ; on ne peut pas ensuite « démontrer » les formules d'addition par cette relation. Il faut annoncer clairement ce qui est admis.",
        "Le jury demande souvent comment justifier l'existence de $\\mathbb{C}$ : elle est admise en terminale, mais le candidat doit savoir présenter une construction et expliquer pourquoi la forme algébrique est unique, ce qui fonde l'identification des parties réelles et imaginaires."
      ]
    },
    {
      "id": "capes-13",
      "num": "Leçon 13",
      "title": "Probabilités conditionnelles et indépendance : arbres, probabilités totales et formule de Bayes",
      "domain": "Probabilités",
      "level": "CAPES — leçon (seconde, première, terminale)",
      "prerequisites": [
        "Niveaux concernés et situation dans les programmes : en seconde, modélisation d'une expérience aléatoire, loi de probabilité sur un ensemble fini, probabilité d'une réunion, tableaux croisés d'effectifs et fréquences conditionnelles ; en première spécialité, probabilité conditionnelle $P_A(B)$, arbres pondérés, formule des probabilités totales, indépendance de deux événements, succession de deux épreuves indépendantes ; en terminale spécialité, succession d'épreuves indépendantes, schéma de Bernoulli et loi binomiale. Les programmes de seconde et de première mis à jour (BO n° 14 du 2 avril 2026) conservent ces notions ; le candidat vérifiera le placement exact de chaque item dans les textes en vigueur.",
        "Plan de leçon possible : I. Probabilité conditionnelle ; II. Arbres pondérés et formule des probabilités totales, formule de Bayes ; III. Indépendance et répétition d'épreuves. Le développement peut être la formule des probabilités totales et la formule de Bayes (théorème clé), l'étude d'un test de dépistage, ou la stabilité de l'indépendance par passage au complémentaire.",
        "Prérequis des élèves : calcul de probabilités sur un univers fini, équiprobabilité, événements contraires, réunion et intersection, tableaux croisés d'effectifs, calcul fractionnaire et pourcentages.",
        "Recul attendu du candidat : $P_A$ est une probabilité sur $\\Omega$ ; partition (système complet d'événements) ; distinction entre indépendance deux à deux et indépendance mutuelle ; indépendance de variables aléatoires ; lien entre fréquences conditionnelles d'un tableau croisé et probabilités conditionnelles ; paradoxes classiques (faux positifs, paradoxe de Simpson)."
      ],
      "plan": [
        {
          "part": "I. Probabilité conditionnelle",
          "content": "Soit $(\\Omega, P)$ un univers fini muni d'une probabilité et $A$ un événement tel que $P(A) \\neq 0$. La probabilité de $B$ sachant $A$ est $P_A(B) = \\frac{P(A \\cap B)}{P(A)}$. Motivation : dans un tableau croisé d'effectifs, la fréquence de $B$ parmi les individus vérifiant $A$ est $\\frac{n(A \\cap B)}{n(A)}$ ; en situation d'équiprobabilité, $P_A(B) = \\frac{\\mathrm{card}(A \\cap B)}{\\mathrm{card}(A)}$, c'est-à-dire que l'on restreint l'univers à $A$. Propriétés : $P_A$ est une probabilité ($P_A(\\Omega) = 1$, additivité pour des événements incompatibles), donc $P_A(\\bar{B}) = 1 - P_A(B)$. Formule des probabilités composées : $P(A \\cap B) = P(A) \\times P_A(B)$. Exemple : on tire successivement sans remise deux boules d'une urne contenant 3 rouges et 2 vertes ; la probabilité d'obtenir deux rouges vaut $\\frac{3}{5} \\times \\frac{2}{4} = \\frac{3}{10}$. Contre-exemple : en général $P_A(B) \\neq P_B(A)$ ; la probabilité qu'une personne soit malade sachant que son test est positif n'est pas celle d'un test positif sachant la personne malade."
        },
        {
          "part": "II. Arbres pondérés, probabilités totales et formule de Bayes",
          "content": "Des événements $A_1, \\dots, A_n$ de probabilités non nulles forment une partition de $\\Omega$ s'ils sont deux à deux incompatibles et de réunion $\\Omega$ ; le cas le plus fréquent est $\\{A, \\bar{A}\\}$. Règles de l'arbre pondéré : la somme des probabilités des branches issues d'un même nœud vaut 1 ; la probabilité d'un chemin est le produit des probabilités de ses branches (probabilités composées) ; la probabilité d'un événement est la somme des probabilités des chemins qui y mènent. Formule des probabilités totales : $P(B) = \\sum_{k=1}^{n}P(A_k)P_{A_k}(B)$, en particulier $P(B) = P(A)P_A(B) + P(\\bar{A})P_{\\bar{A}}(B)$ (démonstration exigible). Formule de Bayes (« inversion du conditionnement ») : si $P(B) \\neq 0$, $P_B(A) = \\frac{P(A)P_A(B)}{P(A)P_A(B) + P(\\bar{A})P_{\\bar{A}}(B)}$. Exemple : une maladie touche 1 % d'une population ; un test est positif chez 99 % des malades et chez 2 % des personnes saines. Alors $P(T) = 0{,}01 \\times 0{,}99 + 0{,}99 \\times 0{,}02 = 0{,}0297$ et $P_T(M) = \\frac{0{,}0099}{0{,}0297} = \\frac{1}{3}$ : deux tiers des tests positifs sont des faux positifs. Contre-exemple : les événements de l'arbre doivent former une partition ; « être fumeur » et « avoir plus de 50 ans » ne permettent pas d'appliquer la formule."
        },
        {
          "part": "III. Indépendance et répétition d'épreuves",
          "content": "Deux événements $A$ et $B$ sont indépendants si $P(A \\cap B) = P(A)P(B)$. Lorsque $P(A) \\neq 0$, cela équivaut à $P_A(B) = P(B)$ : savoir que $A$ est réalisé ne modifie pas la probabilité de $B$. Propriété (démonstration exigible) : si $A$ et $B$ sont indépendants, alors $\\bar{A}$ et $B$ le sont, ainsi que $A$ et $\\bar{B}$, et $\\bar{A}$ et $\\bar{B}$. L'indépendance dépend de la probabilité choisie, et non seulement des événements : c'est une hypothèse de modélisation (épreuves physiquement sans influence l'une sur l'autre) ou une propriété à vérifier par le calcul. Succession de deux épreuves indépendantes : l'univers est un produit cartésien et la probabilité d'un couple d'issues est le produit des probabilités ; on la représente par un arbre dont les pondérations ne dépendent pas de la première issue, ou par un tableau à double entrée. Généralisation en terminale : répétition de $n$ épreuves de Bernoulli identiques et indépendantes, loi binomiale ; probabilité d'au moins un succès : $1 - (1 - p)^n$. Exemple : on lance un dé équilibré ; $A$ : « résultat pair », $B$ : « résultat inférieur ou égal à 2 » ; $P(A \\cap B) = \\frac{1}{6} = \\frac{1}{2} \\times \\frac{1}{3}$, les événements sont indépendants. Contre-exemple : deux événements incompatibles de probabilités non nulles ne sont jamais indépendants, puisque $P(A \\cap B) = 0 \\neq P(A)P(B)$."
        }
      ],
      "keyTheorem": {
        "title": "Formule des probabilités totales et formule de Bayes",
        "statement": "Soit $A_1, \\dots, A_n$ une partition de $\\Omega$ formée d'événements de probabilités non nulles, et $B$ un événement. Alors $P(B) = \\sum_{k=1}^{n}P(A_k)P_{A_k}(B)$. Si de plus $P(B) \\neq 0$, alors pour tout $j \\in \\{1, \\dots, n\\}$, $P_B(A_j) = \\frac{P(A_j)P_{A_j}(B)}{\\sum_{k=1}^{n}P(A_k)P_{A_k}(B)}$.",
        "proof": "1. **Décomposition de $B$.** Comme $A_1 \\cup \\dots \\cup A_n = \\Omega$, on a $B = B \\cap \\Omega = (B \\cap A_1) \\cup \\dots \\cup (B \\cap A_n)$ par distributivité de l'intersection sur la réunion.\n2. **Incompatibilité.** Pour $k \\neq l$, $(B \\cap A_k) \\cap (B \\cap A_l) \\subset A_k \\cap A_l = \\varnothing$ : les événements $B \\cap A_k$ sont deux à deux incompatibles.\n3. **Additivité.** La probabilité d'une réunion d'événements deux à deux incompatibles est la somme des probabilités, donc $P(B) = \\sum_{k=1}^{n}P(B \\cap A_k)$.\n4. **Probabilités composées.** Comme $P(A_k) \\neq 0$, la définition de la probabilité conditionnelle donne $P(B \\cap A_k) = P(A_k)P_{A_k}(B)$, d'où la formule des probabilités totales.\n5. **Formule de Bayes.** Si $P(B) \\neq 0$, par définition $P_B(A_j) = \\frac{P(A_j \\cap B)}{P(B)}$. Le numérateur vaut $P(A_j)P_{A_j}(B)$ (point 4) et le dénominateur est donné par la formule des probabilités totales.\n6. **Lecture sur l'arbre.** Le point 4 est la règle du produit le long d'un chemin, le point 3 la règle de la somme des chemins menant à $B$ : la preuve justifie les règles de l'arbre pondéré, qu'il ne faut pas présenter comme des axiomes."
      },
      "developments": [
        "Exercice de première (tableau croisé) : dans un lycée de 800 élèves, 480 sont demi-pensionnaires, dont 300 en seconde ; il y a 450 élèves de seconde. On choisit un élève au hasard. Calculer la probabilité qu'il soit demi-pensionnaire sachant qu'il est en seconde, puis qu'il soit en seconde sachant qu'il est demi-pensionnaire. Corrigé : $P_S(D) = \\frac{300}{450} = \\frac{2}{3}$ et $P_D(S) = \\frac{300}{480} = \\frac{5}{8}$. Les deux nombres diffèrent : on ne divise pas par le même effectif.",
        "Exercice de première (arbre et probabilités totales) : un atelier produit 60 % de ses pièces sur la machine $M_1$ et 40 % sur $M_2$ ; les taux de pièces défectueuses sont 3 % et 5 %. Quelle est la probabilité qu'une pièce soit défectueuse ? Sachant qu'elle est défectueuse, quelle est la probabilité qu'elle vienne de $M_2$ ? Corrigé : $P(D) = 0{,}6 \\times 0{,}03 + 0{,}4 \\times 0{,}05 = 0{,}038$ et $P_D(M_2) = \\frac{0{,}02}{0{,}038} = \\frac{10}{19} \\approx 0{,}53$.",
        "Exercice de première (indépendance) : on tire une carte au hasard dans un jeu de 32 cartes. Les événements $A$ : « la carte est un cœur » et $B$ : « la carte est un as » sont-ils indépendants ? Même question après avoir ajouté un joker au jeu. Corrigé : avec 32 cartes, $P(A \\cap B) = \\frac{1}{32} = \\frac{8}{32} \\times \\frac{4}{32}$ : indépendants. Avec 33 cartes, $P(A \\cap B) = \\frac{1}{33}$ alors que $P(A)P(B) = \\frac{32}{1089} \\neq \\frac{1}{33} = \\frac{33}{1089}$ : ils ne le sont plus. L'indépendance dépend de la probabilité.",
        "Exercice de terminale (au moins un succès) : un archer atteint sa cible avec probabilité $0{,}3$ à chaque tir, les tirs étant indépendants. Combien de tirs faut-il au minimum pour que la probabilité d'atteindre au moins une fois la cible dépasse $0{,}99$ ? Corrigé : la probabilité cherchée est $1 - 0{,}7^n$ et $1 - 0{,}7^n \\ge 0{,}99 \\iff 0{,}7^n \\le 0{,}01 \\iff n \\ge \\frac{\\ln 0{,}01}{\\ln 0{,}7} \\approx 12{,}9$ (le logarithme de $0{,}7$ est négatif, ce qui renverse l'inégalité) : il faut au moins 13 tirs.",
        "Prolongements : indépendance mutuelle de $n$ événements et contre-exemple d'événements deux à deux indépendants mais non mutuellement indépendants (deux lancers de pièce, « pile au premier », « pile au second », « résultats identiques ») ; chaînes de Markov à deux états et suites arithmético-géométriques ; paradoxe de Simpson ; problème de Monty Hall ; probabilités conditionnelles pour une variable aléatoire et loi géométrique « sans mémoire »."
      ],
      "juryTips": [
        "Erreur fréquente d'élève : confondre $P_A(B)$ et $P(A \\cap B)$, en particulier lire sur une branche de second niveau la probabilité de l'intersection. La phrase « parmi les ... » ou « sachant que ... » doit signaler le conditionnement.",
        "Erreur fréquente d'élève : confondre incompatibles et indépendants. Deux événements incompatibles de probabilités non nulles sont au contraire très dépendants : la réalisation de l'un empêche celle de l'autre.",
        "Erreur fréquente d'élève : inverser le conditionnement ($P_A(B)$ au lieu de $P_B(A)$), ce qui conduit à croire qu'un test fiable à 99 % donne un diagnostic sûr à 99 %. L'exemple du dépistage d'une maladie rare est un bon support pour discuter de la formule de Bayes et du rôle de la prévalence.",
        "Erreur fréquente d'élève : additionner les probabilités pour « au moins un succès » ($n \\times p$, qui peut dépasser 1) au lieu de passer à l'événement contraire « aucun succès ».",
        "Le jury attend que le candidat distingue l'indépendance comme hypothèse de modélisation (tirages avec remise, lancers successifs) et comme propriété démontrée par le calcul ; il apprécie qu'on justifie les règles des arbres pondérés plutôt qu'on les présente comme des recettes.",
        "Question fréquente : $P_A$ est-elle une probabilité ? Le candidat doit savoir le démontrer ($P_A(\\Omega) = 1$ et additivité) et en déduire les règles de calcul, notamment $P_A(\\bar{B}) = 1 - P_A(B)$, qui justifie la somme des branches issues d'un nœud."
      ]
    },
    {
      "id": "capes-14",
      "num": "Leçon 14",
      "title": "Statistique descriptive à une et deux variables : indicateurs de position, de dispersion et ajustement affine",
      "domain": "Statistiques & Probabilités",
      "level": "CAPES — leçon (collège, seconde, première, terminale)",
      "prerequisites": [
        "Niveaux concernés et situation dans les programmes : au collège, recueil et représentation de données, fréquences, moyenne, médiane et étendue ; en seconde, moyenne pondérée, linéarité de la moyenne, écart type, quartiles et écart interquartile, avec l'outil numérique (tableur, programmation) ; en première, en spécialité comme dans l'enseignement scientifique ou les mathématiques du tronc commun selon les séries, tableaux croisés, séries à deux variables et nuages de points ; en terminale, ajustement affine selon les options (mathématiques complémentaires, voie technologique). Les programmes de seconde et de première mis à jour (BO n° 14 du 2 avril 2026) maintiennent cette progression ; le candidat vérifiera dans les textes en vigueur le niveau exact de chaque notion, notamment l'ajustement par moindres carrés.",
        "Plan de leçon possible : I. Séries à une variable et indicateurs de position ; II. Indicateurs de dispersion ; III. Séries à deux variables et ajustement affine. Le développement peut être la propriété de minimisation de la moyenne (théorème clé, $\\sum(x_i - a)^2$ minimal en $a = \\bar{x}$), la détermination de la droite des moindres carrés, ou l'étude de l'effet d'une transformation affine sur les indicateurs.",
        "Prérequis des élèves : calcul de fréquences et de pourcentages, fonctions affines et polynômes du second degré (pour la minimisation), symbole $\\sum$, utilisation d'un tableur ou d'une calculatrice.",
        "Recul attendu du candidat : lien entre statistique descriptive et variables aléatoires (espérance, variance, inégalité de Bienaymé-Tchebychev), robustesse de la médiane, interprétation de la variance comme carré d'une distance, droite de régression comme projection orthogonale, coefficient de corrélation et inégalité de Cauchy-Schwarz, corrélation et causalité."
      ],
      "plan": [
        {
          "part": "I. Séries à une variable : indicateurs de position",
          "content": "Une série statistique quantitative est donnée par des valeurs $x_1, \\dots, x_p$ et des effectifs $n_1, \\dots, n_p$, d'effectif total $N = \\sum n_i$, ou par les fréquences $f_i = \\frac{n_i}{N}$. Moyenne : $\\bar{x} = \\frac{1}{N}\\sum_{i=1}^{p}n_ix_i = \\sum_{i=1}^{p}f_ix_i$. Linéarité (démonstration exigible) : si $y_i = ax_i + b$, alors $\\bar{y} = a\\bar{x} + b$ ; la moyenne d'une réunion de deux séries est la moyenne des moyennes pondérée par les effectifs. Médiane : valeur $Me$ telle qu'au moins la moitié des valeurs soient inférieures ou égales à $Me$ et au moins la moitié supérieures ou égales ; pour une série ordonnée de $N$ valeurs, c'est la valeur de rang $\\frac{N + 1}{2}$ si $N$ est impair, et par convention la demi-somme des valeurs de rangs $\\frac{N}{2}$ et $\\frac{N}{2} + 1$ si $N$ est pair. Exemple : pour la série $2, 3, 3, 5, 7, 22$, $\\bar{x} = 7$ et $Me = 4$. Contre-exemple : la médiane n'est pas linéaire vis-à-vis de la réunion de séries, et la moyenne n'est pas robuste : une seule valeur extrême ($22$) suffit à la rendre supérieure à quatre des six valeurs."
        },
        {
          "part": "II. Indicateurs de dispersion",
          "content": "Étendue : différence entre la plus grande et la plus petite valeur. Quartiles : $Q_1$ est la plus petite valeur de la série telle qu'au moins 25 % des valeurs lui soient inférieures ou égales, $Q_3$ la plus petite telle qu'au moins 75 % des valeurs lui soient inférieures ou égales ; écart interquartile $Q_3 - Q_1$ ; diagramme en boîte. Variance : $V = \\frac{1}{N}\\sum_{i=1}^{p}n_i(x_i - \\bar{x})^2$, écart type $\\sigma = \\sqrt{V}$, exprimé dans l'unité des données. Formule de König-Huygens : $V = \\frac{1}{N}\\sum n_ix_i^2 - \\bar{x}^2$ (démonstration exigible : développer le carré et utiliser $\\sum n_i(x_i - \\bar{x}) = 0$). Transformation affine : si $y_i = ax_i + b$, alors $V_y = a^2V_x$ et $\\sigma_y = |a|\\sigma_x$ ; une translation ne modifie pas la dispersion. Propriété de minimisation : la fonction $a \\mapsto \\frac{1}{N}\\sum n_i(x_i - a)^2$ atteint son minimum, égal à $V$, en $a = \\bar{x}$. Exemple : la série $4, 8, 9, 11$ a pour moyenne $8$, pour variance $\\frac{16 + 0 + 1 + 9}{4} = 6{,}5$ et pour écart type $\\sqrt{6{,}5} \\approx 2{,}55$. Contre-exemple : deux séries de même moyenne et de même étendue peuvent avoir des écarts types différents ($0, 5, 5, 5, 10$ et $0, 0, 5, 10, 10$, d'écarts types $\\sqrt{10}$ et $\\sqrt{20}$)."
        },
        {
          "part": "III. Séries à deux variables et ajustement affine",
          "content": "Une série à deux variables est une liste de couples $(x_i ; y_i)$, $1 \\le i \\le n$, représentée par un nuage de points dans un repère ; le point moyen est $G(\\bar{x} ; \\bar{y})$. Covariance : $\\mathrm{cov}(x, y) = \\frac{1}{n}\\sum_{i=1}^{n}(x_i - \\bar{x})(y_i - \\bar{y}) = \\frac{1}{n}\\sum x_iy_i - \\bar{x}\\,\\bar{y}$. Lorsque le nuage a une forme allongée, on peut chercher une droite d'ajustement $y = ax + b$. Méthode des moindres carrés : on minimise la somme $S(a, b) = \\sum_{i=1}^{n}(y_i - ax_i - b)^2$ des carrés des écarts verticaux ; si $V_x \\neq 0$, le minimum est atteint pour $a = \\frac{\\mathrm{cov}(x, y)}{V_x}$ et $b = \\bar{y} - a\\bar{x}$ ; la droite passe par le point moyen. Le coefficient de corrélation linéaire $r = \\frac{\\mathrm{cov}(x, y)}{\\sigma_x\\sigma_y}$ vérifie $-1 \\le r \\le 1$, et $|r| = 1$ si et seulement si les points sont alignés. L'ajustement permet d'interpoler ou d'extrapoler, avec prudence. Changement de variable : un nuage d'allure exponentielle se traite en ajustant $z = \\ln y$ en fonction de $x$. Exemple : pour les points $(1 ; 2)$, $(2 ; 3)$, $(3 ; 5)$, $(4 ; 6)$, on trouve $G(2{,}5 ; 4)$, $\\mathrm{cov} = 1{,}75$, $V_x = 1{,}25$, donc $y = 1{,}4x + 0{,}5$. Contre-exemple : une forte corrélation n'implique pas un lien de causalité (deux grandeurs qui augmentent avec le temps sont corrélées sans dépendre l'une de l'autre), et $r = 0$ n'exclut pas une liaison non affine (points d'une parabole symétrique)."
        }
      ],
      "keyTheorem": {
        "title": "La moyenne minimise l'écart quadratique ; formule de König-Huygens",
        "statement": "Soit $x_1, \\dots, x_n$ une série de moyenne $\\bar{x}$ et de variance $V = \\frac{1}{n}\\sum_{i=1}^{n}(x_i - \\bar{x})^2$. Pour tout réel $a$, on pose $f(a) = \\frac{1}{n}\\sum_{i=1}^{n}(x_i - a)^2$. Alors, pour tout réel $a$, $f(a) = V + (a - \\bar{x})^2$. En particulier, $f$ atteint son minimum en $a = \\bar{x}$ et uniquement en ce point, ce minimum vaut $V$, et $V = \\frac{1}{n}\\sum_{i=1}^{n}x_i^2 - \\bar{x}^2$.",
        "proof": "1. **Somme des écarts à la moyenne.** $\\sum_{i=1}^{n}(x_i - \\bar{x}) = \\sum_{i=1}^{n}x_i - n\\bar{x} = n\\bar{x} - n\\bar{x} = 0$.\n2. **Décomposition.** Pour tout $i$, $x_i - a = (x_i - \\bar{x}) + (\\bar{x} - a)$, donc $(x_i - a)^2 = (x_i - \\bar{x})^2 + 2(\\bar{x} - a)(x_i - \\bar{x}) + (\\bar{x} - a)^2$.\n3. **Sommation.** En sommant et en divisant par $n$, $f(a) = V + \\frac{2(\\bar{x} - a)}{n}\\sum_{i=1}^{n}(x_i - \\bar{x}) + (\\bar{x} - a)^2 = V + (a - \\bar{x})^2$, d'après le point 1.\n4. **Minimum.** Comme $(a - \\bar{x})^2 \\ge 0$, avec égalité si et seulement si $a = \\bar{x}$, on a $f(a) \\ge V = f(\\bar{x})$ pour tout $a$, avec égalité seulement en $\\bar{x}$.\n5. **Formule de König-Huygens.** Pour $a = 0$, le point 3 donne $\\frac{1}{n}\\sum_{i=1}^{n}x_i^2 = V + \\bar{x}^2$.\n6. **Autre lecture.** $f(a) = a^2 - 2\\bar{x}a + \\frac{1}{n}\\sum x_i^2$ est un trinôme du second degré de coefficient dominant positif, minimal en $-\\frac{-2\\bar{x}}{2} = \\bar{x}$ : la preuve est accessible en première. Le même calcul, mené à $a$ fixé pour minimiser en $b$, montre que la droite des moindres carrés passe par le point moyen."
      },
      "developments": [
        "Exercice de seconde (moyenne et transformation affine) : les notes d'un devoir, sur 20, ont pour moyenne $9{,}5$ et pour écart type $3$. Le professeur décide de multiplier toutes les notes par $1{,}1$ puis d'ajouter $1$ point. Quelles sont la nouvelle moyenne et le nouvel écart type ? Corrigé : par linéarité, la moyenne devient $1{,}1 \\times 9{,}5 + 1 = 11{,}45$ ; l'écart type est multiplié par $1{,}1$ et n'est pas modifié par l'ajout d'une constante : il vaut $3{,}3$.",
        "Exercice de seconde (moyenne d'une réunion) : dans une classe, les 12 garçons ont une moyenne de $11$ et les 18 filles une moyenne de $13$. Quelle est la moyenne de la classe ? Corrigé : $\\frac{12 \\times 11 + 18 \\times 13}{30} = \\frac{132 + 234}{30} = 12{,}2$, et non $12$ : la moyenne des moyennes doit être pondérée par les effectifs.",
        "Exercice de seconde (médiane et quartiles) : on considère la série des 11 valeurs ordonnées $3, 5, 6, 6, 8, 9, 10, 12, 12, 15, 30$. Déterminer la médiane, les quartiles et l'écart interquartile. Que deviennent la moyenne et la médiane si l'on remplace $30$ par $16$ ? Corrigé : $Me$ est la 6e valeur, $9$ ; $Q_1$ est la 3e valeur ($\\frac{11}{4} = 2{,}75$, arrondi à 3), soit $6$ ; $Q_3$ est la 9e valeur ($\\frac{33}{4} = 8{,}25$, arrondi à 9), soit $12$ ; l'écart interquartile vaut $6$. La moyenne passe de $\\frac{116}{11} \\approx 10{,}5$ à $\\frac{102}{11} \\approx 9{,}3$, la médiane reste égale à $9$ : elle est robuste.",
        "Exercice de terminale (ajustement après changement de variable) : un capital placé évolue ainsi : année $x$ = 0, 1, 2, 3 ; valeur $y$ = 1000, 1100, 1210, 1331. On pose $z = \\ln y$. Montrer que les points $(x ; z)$ sont alignés et en déduire une expression de $y$. Corrigé : $\\frac{y_{k+1}}{y_k} = 1{,}1$ pour chaque $k$, donc $z_{k+1} - z_k = \\ln 1{,}1$ : les points sont alignés sur la droite $z = \\ln 1000 + x\\ln 1{,}1$, ce qui donne $y = 1000 \\times 1{,}1^x$ (évolution à taux constant de 10 %).",
        "Prolongements : interprétation géométrique de la droite des moindres carrés comme projection orthogonale dans $\\mathbb{R}^n$ ; inégalité de Cauchy-Schwarz et encadrement $-1 \\le r \\le 1$ ; ajustement de $x$ en $y$ et comparaison des deux droites ; échantillonnage, loi des grands nombres et intervalle de fluctuation ; régression non linéaire par changement de variable ; paradoxe de Simpson sur des moyennes pondérées."
      ],
      "juryTips": [
        "Erreur fréquente d'élève : calculer la moyenne d'une série regroupée sans pondérer par les effectifs, ou calculer « la moyenne des moyennes » de deux groupes d'effectifs différents.",
        "Erreur fréquente d'élève : donner pour médiane la valeur centrale de la série non ordonnée, ou la valeur de la colonne centrale du tableau d'effectifs ; il faut ordonner les valeurs et utiliser les effectifs cumulés croissants.",
        "Erreur fréquente d'élève : croire que l'écart type est modifié par une translation des valeurs, ou qu'il est multiplié par $a$ (et non $|a|$) dans une transformation $y = ax + b$ ; confondre aussi variance et écart type dans l'interprétation (l'unité de la variance est le carré de celle des données).",
        "Erreur fréquente d'élève : extrapoler loin du domaine des données à l'aide d'une droite d'ajustement, ou conclure à une relation de cause à effet à partir d'une corrélation.",
        "Le jury attend que le candidat fixe des définitions précises des quartiles et de la médiane (il existe plusieurs conventions, notamment entre la calculatrice et le tableur) et qu'il les applique de manière cohérente.",
        "Question fréquente : pourquoi des carrés et non des valeurs absolues ? Le candidat peut répondre que la somme $\\sum|x_i - a|$ est minimale en une médiane, alors que la somme des carrés est minimale en la moyenne, et que le carré se prête au calcul (trinôme, dérivation, géométrie euclidienne)."
      ]
    },
    {
      "id": "capes-15",
      "num": "Leçon 15",
      "title": "Dénombrement et combinatoire : listes, arrangements, permutations et combinaisons",
      "domain": "Algèbre & Combinatoire",
      "level": "CAPES — leçon (terminale, mathématiques expertes)",
      "prerequisites": [
        "Niveaux concernés et situation dans les programmes : le dénombrement est un chapitre de terminale spécialité (principes additif et multiplicatif, $k$-uplets, $k$-uplets d'éléments distincts, permutations, factorielle, combinaisons, triangle de Pascal, nombre de parties d'un ensemble), réinvesti dans la loi binomiale ; il prépare en mathématiques expertes l'arithmétique et la formule du binôme dans $\\mathbb{C}$. Des situations de dénombrement par arbres ou tableaux apparaissent dès le collège et en seconde en probabilités. Le candidat vérifiera dans les programmes en vigueur, y compris après le BO n° 14 du 2 avril 2026 pour la seconde et la première, ce qui relève de chaque niveau.",
        "Plan de leçon possible : I. Principes de dénombrement et $k$-uplets ; II. Arrangements, permutations, factorielle ; III. Combinaisons, triangle de Pascal et formule du binôme. Le développement peut être la formule de Pascal et la formule du binôme (théorème clé), le nombre de parties d'un ensemble par deux méthodes, ou une démonstration combinatoire d'une identité (Vandermonde).",
        "Prérequis des élèves : vocabulaire des ensembles (réunion, intersection, produit cartésien, cardinal), arbres, raisonnement par récurrence, suites, probabilités en situation d'équiprobabilité.",
        "Recul attendu du candidat : bijections et cardinaux (principe des bergers), double comptage, principe d'inclusion-exclusion, applications injectives et surjectives, coefficients multinomiaux, lien avec la loi binomiale et la loi hypergéométrique, nombres de Catalan et chemins dans un quadrillage."
      ],
      "plan": [
        {
          "part": "I. Principes de dénombrement et k-uplets",
          "content": "Principe additif : si $A$ et $B$ sont des ensembles finis disjoints, $\\mathrm{card}(A \\cup B) = \\mathrm{card}(A) + \\mathrm{card}(B)$ ; plus généralement $\\mathrm{card}(A \\cup B) = \\mathrm{card}(A) + \\mathrm{card}(B) - \\mathrm{card}(A \\cap B)$. Principe multiplicatif : $\\mathrm{card}(A \\times B) = \\mathrm{card}(A) \\times \\mathrm{card}(B)$, ce qu'illustre un arbre dont chaque nœud d'un même niveau a le même nombre de branches. Un $k$-uplet (ou $k$-liste) d'éléments de $E$ est un élément de $E^k$ : l'ordre compte et les répétitions sont permises. Si $\\mathrm{card}(E) = n$, il y a $n^k$ $k$-uplets d'éléments de $E$ (récurrence sur $k$). Exemple : il y a $10^4$ codes à quatre chiffres et $26^3 \\times 10^3$ plaques formées de trois lettres suivies de trois chiffres. Nombre de parties : un ensemble à $n$ éléments a $2^n$ parties, car une partie s'identifie à un $n$-uplet de $\\{0 ; 1\\}$ (on code 1 si l'élément appartient à la partie). Contre-exemple : le principe multiplicatif ne s'applique pas directement lorsque le nombre de choix à une étape dépend des choix précédents de manière non uniforme (par exemple, les nombres de trois chiffres distincts ne commençant pas par 0 se comptent en traitant d'abord le premier chiffre : $9 \\times 9 \\times 8 = 648$)."
        },
        {
          "part": "II. Arrangements, permutations et factorielle",
          "content": "Un $k$-uplet d'éléments distincts de $E$ (ou arrangement) est un $k$-uplet dont les composantes sont deux à deux distinctes. Si $\\mathrm{card}(E) = n$ et $1 \\le k \\le n$, leur nombre est $n(n - 1)\\cdots(n - k + 1) = \\frac{n!}{(n - k)!}$, avec $n! = 1 \\times 2 \\times \\cdots \\times n$ et $0! = 1$ (démonstration exigible, par le principe multiplicatif ou par récurrence). Une permutation de $E$ est un $n$-uplet d'éléments distincts de $E$, c'est-à-dire un rangement de tous ses éléments : il y en a $n!$. Exemple : le podium d'une course de 8 coureurs peut être occupé de $8 \\times 7 \\times 6 = 336$ façons ; les anagrammes du mot MATHS sont au nombre de $5! = 120$. Anagrammes avec répétitions : le mot RADAR a $\\frac{5!}{2!\\,2!} = 30$ anagrammes (on divise par les permutations des lettres identiques). Contre-exemple : si $k \\gt n$, il n'existe aucun $k$-uplet d'éléments distincts (principe des tiroirs) : dans un groupe de 367 personnes, deux ont nécessairement le même jour anniversaire."
        },
        {
          "part": "III. Combinaisons, triangle de Pascal et formule du binôme",
          "content": "Une combinaison de $k$ éléments de $E$ est une partie de $E$ à $k$ éléments : l'ordre ne compte pas et il n'y a pas de répétition. Leur nombre est noté $\\binom{n}{k}$ et vaut $\\frac{n!}{k!\\,(n - k)!}$ pour $0 \\le k \\le n$, car chaque partie à $k$ éléments correspond à exactement $k!$ arrangements (démonstration exigible). Propriétés : $\\binom{n}{0} = \\binom{n}{n} = 1$, symétrie $\\binom{n}{k} = \\binom{n}{n - k}$ (passage au complémentaire), relation de Pascal $\\binom{n}{k} + \\binom{n}{k + 1} = \\binom{n + 1}{k + 1}$, triangle de Pascal, $\\sum_{k=0}^{n}\\binom{n}{k} = 2^n$. Formule du binôme : $(a + b)^n = \\sum_{k=0}^{n}\\binom{n}{k}a^kb^{n-k}$ pour des réels ou complexes $a$ et $b$. Lien avec les probabilités : dans un schéma de Bernoulli à $n$ épreuves, $\\binom{n}{k}$ est le nombre de chemins de l'arbre comportant $k$ succès, d'où $P(X = k) = \\binom{n}{k}p^k(1 - p)^{n-k}$. Exemple : une main de 5 cartes d'un jeu de 32 : $\\binom{32}{5} = 201\\,376$ mains ; mains contenant exactement 2 as : $\\binom{4}{2}\\binom{28}{3} = 6 \\times 3276 = 19\\,656$. Contre-exemple : pour un comité comprenant un président et un trésorier, l'ordre (le rôle) compte : on dénombre des arrangements et non des combinaisons."
        }
      ],
      "keyTheorem": {
        "title": "Relation de Pascal et formule du binôme",
        "statement": "(i) Pour tous entiers $n \\ge 0$ et $0 \\le k \\le n - 1$, $\\binom{n}{k} + \\binom{n}{k + 1} = \\binom{n + 1}{k + 1}$. (ii) Pour tous nombres complexes $a$ et $b$ et tout entier naturel $n$, $(a + b)^n = \\sum_{k=0}^{n}\\binom{n}{k}a^kb^{n-k}$.",
        "proof": "1. **Démonstration combinatoire de (i).** Soit $E$ un ensemble à $n + 1$ éléments et $x$ un élément fixé de $E$. Les parties de $E$ à $k + 1$ éléments se répartissent en deux catégories disjointes : celles qui contiennent $x$, déterminées par le choix de $k$ éléments parmi les $n$ autres, au nombre de $\\binom{n}{k}$, et celles qui ne contiennent pas $x$, formées de $k + 1$ éléments parmi les $n$ autres, au nombre de $\\binom{n}{k + 1}$. Le principe additif donne (i).\n2. **Démonstration calculatoire de (i).** $\\binom{n}{k} + \\binom{n}{k + 1} = \\frac{n!}{k!\\,(n - k)!} + \\frac{n!}{(k + 1)!\\,(n - k - 1)!} = \\frac{n!\\,\\left[(k + 1) + (n - k)\\right]}{(k + 1)!\\,(n - k)!} = \\frac{(n + 1)!}{(k + 1)!\\,(n - k)!} = \\binom{n + 1}{k + 1}$.\n3. **Initialisation de (ii).** Pour $n = 0$, les deux membres valent $1$.\n4. **Hérédité.** Supposons la formule vraie au rang $n$. Alors $(a + b)^{n+1} = (a + b)\\sum_{k=0}^{n}\\binom{n}{k}a^kb^{n-k} = \\sum_{k=0}^{n}\\binom{n}{k}a^{k+1}b^{n-k} + \\sum_{k=0}^{n}\\binom{n}{k}a^kb^{n+1-k}$. Dans la première somme, on pose $j = k + 1$ : elle vaut $\\sum_{j=1}^{n+1}\\binom{n}{j - 1}a^jb^{n+1-j}$.\n5. **Regroupement.** On isole les termes $j = n + 1$ (égal à $a^{n+1}$) et $j = 0$ (égal à $b^{n+1}$), puis on applique la relation de Pascal aux termes $1 \\le j \\le n$ : $\\binom{n}{j - 1} + \\binom{n}{j} = \\binom{n + 1}{j}$. On obtient $(a + b)^{n+1} = \\sum_{j=0}^{n+1}\\binom{n + 1}{j}a^jb^{n+1-j}$, car $\\binom{n + 1}{0} = \\binom{n + 1}{n + 1} = 1$.\n6. **Remarque.** La preuve n'utilise que la commutativité et la distributivité : la formule vaut pour des matrices qui commutent, mais elle est fausse en général pour deux matrices $A$ et $B$ telles que $AB \\neq BA$. On peut aussi la lire combinatoirement : développer $(a + b)^n$ revient à choisir, dans chacun des $n$ facteurs, $a$ ou $b$, et le monôme $a^kb^{n-k}$ apparaît autant de fois qu'il y a de façons de choisir les $k$ facteurs fournissant $a$."
      },
      "developments": [
        "Exercice de terminale (codes) : un code d'accès est formé de 4 chiffres. Combien y a-t-il de codes ? de codes à chiffres tous distincts ? de codes comportant au moins deux chiffres identiques ? Corrigé : $10^4 = 10\\,000$ codes ; $10 \\times 9 \\times 8 \\times 7 = 5040$ codes à chiffres distincts ; par passage au complémentaire, $10\\,000 - 5040 = 4960$ codes comportent au moins une répétition.",
        "Exercice de terminale (comités) : une association compte 7 femmes et 5 hommes. Combien de comités de 4 personnes peut-on former ? avec exactement 2 femmes ? avec au moins une femme ? Corrigé : $\\binom{12}{4} = 495$ ; $\\binom{7}{2}\\binom{5}{2} = 21 \\times 10 = 210$ ; $\\binom{12}{4} - \\binom{5}{4} = 495 - 5 = 490$, l'événement contraire étant « aucune femme ».",
        "Exercice de terminale (chemins) : dans un quadrillage, on va du point $(0 ; 0)$ au point $(5 ; 3)$ par des pas unitaires vers la droite ou vers le haut. Combien y a-t-il de chemins ? Combien passent par le point $(2 ; 1)$ ? Corrigé : un chemin est une suite de 8 pas dont 3 vers le haut, déterminée par la position de ces 3 pas : $\\binom{8}{3} = 56$ chemins. Par le principe multiplicatif, $\\binom{3}{1} \\times \\binom{5}{2} = 3 \\times 10 = 30$ chemins passent par $(2 ; 1)$.",
        "Exercice de terminale (binôme) : déterminer le coefficient de $x^3$ dans le développement de $(2x - 1)^6$, puis calculer $\\sum_{k=0}^{n}\\binom{n}{k}(-1)^k$ pour $n \\ge 1$. Corrigé : le terme en $x^3$ est $\\binom{6}{3}(2x)^3(-1)^3 = -160x^3$ ; la formule du binôme avec $a = -1$ et $b = 1$ donne $\\sum\\binom{n}{k}(-1)^k = (1 - 1)^n = 0$ : un ensemble non vide a autant de parties de cardinal pair que de cardinal impair.",
        "Prolongements : identité de Vandermonde $\\sum_{k}\\binom{p}{k}\\binom{q}{n - k} = \\binom{p + q}{n}$ par double comptage ; formule du crible ; nombre de surjections ; coefficients multinomiaux ; loi hypergéométrique ; nombres de Catalan ; applications en arithmétique ($p$ premier divise $\\binom{p}{k}$ pour $1 \\le k \\le p - 1$, petit théorème de Fermat)."
      ],
      "juryTips": [
        "Erreur fréquente d'élève : ne pas identifier si l'ordre compte et si les répétitions sont permises, et donc confondre $n^k$, $\\frac{n!}{(n - k)!}$ et $\\binom{n}{k}$. Le candidat peut proposer un tableau de décision à deux questions (ordre ? répétitions ?) en le complétant par des exemples.",
        "Erreur fréquente d'élève : compter deux fois les mêmes configurations, par exemple pour « au moins un as » en choisissant d'abord un as puis 4 cartes quelconques ($4 \\times \\binom{31}{4}$), ce qui compte plusieurs fois les mains contenant plusieurs as. Le passage au complémentaire évite cette erreur.",
        "Erreur fréquente d'élève : additionner au lieu de multiplier (ou l'inverse) ; on multiplie pour des choix successifs (« et puis »), on additionne pour des cas disjoints (« ou bien »).",
        "Erreur fréquente d'élève : oublier les conventions $0! = 1$ et $\\binom{n}{0} = 1$, ou croire que $\\binom{n}{k}$ peut ne pas être entier ; la définition combinatoire montre au contraire que c'est un entier, ce qui n'est pas évident sur la formule avec les factorielles.",
        "Le jury apprécie les démonstrations combinatoires (double comptage, bijection) à côté des démonstrations calculatoires, et une réflexion sur l'outil numérique : calcul de factorielles, construction du triangle de Pascal par un programme utilisant la relation de Pascal.",
        "Question fréquente : quelle définition de $\\binom{n}{k}$ adopter ? En terminale, on la définit comme nombre de parties à $k$ éléments, puis on démontre la formule factorielle ; le candidat doit pouvoir expliquer le lien avec le nombre de chemins à $k$ succès dans un arbre de Bernoulli."
      ]
    },
    {
      "id": "capes-oral2",
      "num": "Oral 2",
      "title": "Épreuve d'entretien : Éthique professionnelle, laïcité et valeurs de la République",
      "domain": "Éthique & Laïcité",
      "level": "CAPES / Agrégation",
      "prerequisites": [
        "Format de l'épreuve d'entretien du CAPES externe (35 minutes, coefficient 3, sans préparation, note 0 éliminatoire), commune à toutes les disciplines : une première partie de 15 minutes sur la motivation et le parcours du candidat, ouverte par une présentation de 5 minutes, puis 20 minutes d'entretien. Au concours bac + 5, la présentation s'appuie sur la fiche individuelle de renseignement et la seconde partie comporte deux mises en situation professionnelles, l'une d'enseignement, l'autre relative à la vie scolaire ; au concours bac + 3, organisé à partir de la session 2026, elle prend la forme d'un entretien comportant une mise en situation, sur les valeurs de la République, dont la laïcité, la projection dans le métier, les exigences du service public, la transition écologique et l'épanouissement de l'élève. Le jury apprécie l'aptitude à s'approprier les valeurs de la République et les exigences du service public.",
        "Constitution du 4 octobre 1958, article 1er : la France est une République indivisible, laïque, démocratique et sociale, qui assure l'égalité devant la loi de tous les citoyens et respecte toutes les croyances.",
        "Code de l'éducation, article L. 111-1 : outre la transmission des connaissances, la Nation fixe comme mission première à l'école de faire partager aux élèves les valeurs de la République ; le service public de l'éducation veille à la scolarisation inclusive de tous les enfants, sans aucune distinction.",
        "Loi du 9 décembre 1905 concernant la séparation des Églises et de l'État, et loi n° 2004-228 du 15 mars 2004, codifiée à l'article L. 141-5-1 du Code de l'éducation, sur le port de signes ou de tenues manifestant ostensiblement une appartenance religieuse.",
        "Statut des fonctionnaires, aujourd'hui regroupé dans le Code général de la fonction publique (qui reprend notamment la loi n° 83-634 du 13 juillet 1983), et référentiel des compétences professionnelles des métiers du professorat et de l'éducation (arrêté du 1er juillet 2013)."
      ],
      "plan": [
        {
          "part": "I. Cadre institutionnel et principes républicains",
          "content": "La Constitution fait de la laïcité un principe de la République : neutralité de l'État, égalité des citoyens sans distinction de religion, respect de toutes les croyances. La loi de 1905 garantit la liberté de conscience et le libre exercice des cultes, et pose que la République ne reconnaît, ne salarie ni ne subventionne aucun culte. Le Code de l'éducation (article L. 111-1) assigne à l'école la mission de faire partager les valeurs de la République, de contribuer à l'égalité des chances et de veiller à la scolarisation inclusive de tous les enfants, sans aucune distinction. La loi du 15 mars 2004 interdit aux élèves des écoles, collèges et lycées publics le port de signes ou tenues par lesquels ils manifestent ostensiblement une appartenance religieuse, et prévoit qu'une procédure disciplinaire est précédée d'un dialogue avec l'élève. La Charte de la laïcité à l'École (2013), affichée dans les établissements, rappelle notamment qu'aucun élève ne peut invoquer une conviction religieuse ou politique pour contester à un enseignant le droit de traiter une question au programme."
        },
        {
          "part": "II. Le professeur, fonctionnaire de l'État : droits, obligations, compétences",
          "content": "Droits : liberté d'opinion, garanties statutaires, protection fonctionnelle due par l'administration à l'agent attaqué en raison de ses fonctions (Code général de la fonction publique, articles L. 134-1 et L. 134-5) : elle couvre notamment les menaces, injures ou outrages d'un parent d'élève, se demande par écrit (à l'Éducation nationale, par l'application Colibris) et oblige l'administration à prendre sans délai des mesures conservatoires. Obligations : neutralité et respect du principe de laïcité dans l'exercice des fonctions, ce qui interdit de manifester ses convictions religieuses en service ; dignité, impartialité, intégrité et probité ; traitement égal de tous les usagers ; secret professionnel et discrétion professionnelle ; obéissance hiérarchique, sauf ordre manifestement illégal et de nature à compromettre gravement un intérêt public ; devoir de réserve dans l'expression publique, dégagé par la jurisprudence. Le Conseil d'État (avis du 3 mai 2000, Mlle Marteaux) a précisé qu'un agent du service public de l'enseignement ne peut manifester ses croyances religieuses dans l'exercice de ses fonctions. Le référentiel de 2013 décrit les compétences attendues : faire partager les valeurs de la République, inscrire son action dans le cadre des principes fondamentaux du système éducatif et dans le cadre réglementaire de l'école, prendre en compte la diversité des élèves, coopérer au sein d'une équipe et avec les parents, maîtriser les savoirs disciplinaires et leur didactique, évaluer les progrès des élèves."
        },
        {
          "part": "III. Mises en situation : une démarche de réponse",
          "content": "Première étape : analyser la situation et nommer les enjeux (sécurité des élèves, droit à l'instruction, apprentissages, valeurs en jeu). Deuxième étape : agir dans la classe avec calme, rappeler la règle sans entrer dans un débat sur les croyances, protéger les élèves, ne pas humilier, poursuivre le cours. Troisième étape : ne pas rester seul, informer le professeur principal, le conseiller principal d'éducation et le chef d'établissement, associer la famille, s'appuyer sur les personnels sociaux et de santé et, pour les atteintes à la laïcité, sur l'équipe académique Valeurs de la République. Quatrième étape, si un mineur est en danger ou en risque de l'être : transmettre sans délai une information préoccupante au président du conseil départemental, par la cellule de recueil des informations préoccupantes (Code de l'action sociale et des familles, articles L. 226-2-1 et L. 226-3), et, en cas de danger grave et immédiat, saisir directement le procureur de la République ; tout fonctionnaire qui acquiert la connaissance d'un crime ou d'un délit dans l'exercice de ses fonctions doit en aviser le procureur de la République (article 40 du Code de procédure pénale). Situations fréquentes en mathématiques : contestation d'un contenu au nom d'une croyance, refus de travailler en groupe mixte, harcèlement entre élèves, fraude à une évaluation, élève à besoins éducatifs particuliers bénéficiant d'un plan d'accompagnement personnalisé ou d'un projet personnalisé de scolarisation."
        }
      ],
      "keyTheorem": {
        "title": "Neutralité de l'agent public et liberté de conscience des élèves",
        "statement": "Dans l'exercice de ses fonctions, le professeur, agent public, est tenu à l'obligation de neutralité et exerce ses fonctions dans le respect du principe de laïcité : il s'abstient notamment de manifester ses opinions religieuses, traite de façon égale toutes les personnes et respecte leur liberté de conscience et leur dignité (statut général des fonctionnaires, dispositions introduites par la loi du 20 avril 2016 et reprises dans le Code général de la fonction publique). Les élèves, usagers du service public, ne sont pas soumis à cette obligation de neutralité ; leur liberté de conscience est protégée, dans les limites fixées par la loi du 15 mars 2004 et par le règlement intérieur.",
        "proof": "1. **Fondement constitutionnel.** La République est laïque (article 1er de la Constitution) : l'État et ses services sont neutres, ce qui s'impose à ceux qui les font fonctionner, afin que chaque usager soit traité sans considération de ses convictions.\n2. **Fondement législatif.** Le statut général des fonctionnaires énonce l'obligation de neutralité et le respect de la laïcité ; le Code de l'éducation confie à l'école la mission de faire partager les valeurs de la République (article L. 111-1).\n3. **Jurisprudence administrative.** Par son avis du 3 mai 2000, le Conseil d'État a indiqué que le principe de laïcité fait obstacle à ce que les agents du service public de l'enseignement manifestent leurs croyances religieuses dans l'exercice de leurs fonctions, qu'ils enseignent ou non.\n4. **Asymétrie entre agents et usagers.** Les élèves ne sont pas des agents publics. Avant 2004, le Conseil d'État (avis du 27 novembre 1989) admettait le port de signes religieux par les élèves sauf pression, prosélytisme ou trouble ; cet avis est dépassé pour les élèves des écoles, collèges et lycées publics, car la loi du 15 mars 2004 (article L. 141-5-1 du Code de l'éducation) a interdit les signes et tenues manifestant ostensiblement une appartenance religieuse, après un dialogue avec l'élève.\n5. **Conséquences pour la classe.** Le professeur peut traiter des faits religieux ou historiques comme objets de savoir, mais ne prend pas parti ; il distingue ce qui relève du savoir, établi par la démonstration et l'argumentation, de ce qui relève de la croyance, qui appartient à chacun.\n6. **Limites et prudence.** Les parents d'élèves ne sont pas des agents publics ; leur situation, par exemple lors de l'accompagnement de sorties scolaires, relève de l'appréciation du chef d'établissement dans le cadre fixé par l'institution, et le candidat ne doit pas trancher seul ces questions."
      },
      "developments": [
        "Mise en situation d'enseignement : en cours de probabilités, un élève déclare que le hasard n'existe pas et refuse l'exercice au nom de ses convictions. Réponse attendue : expliquer qu'une probabilité est un outil de modélisation et non une thèse sur le monde, rappeler que les programmes s'imposent à tous sans humilier l'élève, poursuivre le cours, puis reprendre l'échange individuellement et informer l'équipe si le refus persiste.",
        "Mise en situation de vie scolaire : un élève confie être la cible de moqueries répétées sur un réseau social de la part de camarades de la classe. Réponse attendue : écouter et prendre la parole au sérieux, ne pas promettre le secret, informer sans délai le conseiller principal d'éducation et le chef d'établissement, qui mettent en œuvre le protocole de traitement du harcèlement ; depuis la loi du 2 mars 2022, le harcèlement scolaire constitue un délit.",
        "Mise en situation d'évaluation et d'inclusion : un élève bénéficiant d'un plan d'accompagnement personnalisé demande les aménagements prévus lors d'un devoir surveillé. Réponse attendue : les aménagements pédagogiques prévus par le plan (Code de l'éducation, articles L. 311-7 et D. 311-13) s'imposent à l'enseignant ; les appliquer sans les commenter devant la classe, en lien avec le professeur principal, et expliquer que l'équité n'est pas l'uniformité. Ne pas confondre avec les aménagements des examens (temps majoré, secrétaire), qui font l'objet d'une demande et d'une décision distinctes ; pour un élève en situation de handicap, le projet personnalisé de scolarisation relève de l'article L. 112-2.",
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

    'capes-11': [
      {
        "id": "capes-11-1",
        "chapterId": "capes-11",
        "tier": 1,
        "title": "Critère de colinéarité par le déterminant",
        "statement": "Dans une base du plan, on considère $\\vec{u}(x ; y)$ et $\\vec{v}(x' ; y')$. Quelle condition est nécessaire et suffisante pour que $\\vec{u}$ et $\\vec{v}$ soient colinéaires ?",
        "type": "mcq",
        "options": [
          "$xy' - x'y = 0$",
          "$xx' + yy' = 0$",
          "$x = x'$ et $y = y'$",
          "$xy - x'y' = 0$"
        ],
        "correctIndex": 0,
        "answer": "$xy' - x'y = 0$",
        "hint1": "Si $\\vec{u} \\neq \\vec{0}$, la colinéarité signifie qu'il existe un réel $k$ tel que $\\vec{v} = k\\vec{u}$ : comparer les « produits en croix ».",
        "solution": "Si $\\vec{v} = k\\vec{u}$, alors $x' = kx$ et $y' = ky$, donc $xy' - x'y = kxy - kxy = 0$ (de même si $\\vec{u} = k\\vec{v}$). Réciproquement, si $xy' - x'y = 0$ et $\\vec{u} = \\vec{0}$, les vecteurs sont colinéaires ; si par exemple $x \\neq 0$, on pose $k = \\frac{x'}{x}$ : alors $x' = kx$ et $y' = \\frac{x'y}{x} = ky$, donc $\\vec{v} = k\\vec{u}$ (cas $y \\neq 0$ analogue). La condition $xx' + yy' = 0$ caractérise l'orthogonalité dans une base orthonormée, et $x = x'$, $y = y'$ l'égalité des vecteurs."
      },
      {
        "id": "capes-11-2",
        "chapterId": "capes-11",
        "tier": 2,
        "title": "Retrouver un angle par la formule d'Al-Kashi",
        "statement": "Dans un triangle $ABC$, on a $AB = 3$, $AC = 4$ et $BC = \\sqrt{13}$. Quelle est la mesure de l'angle $\\widehat{BAC}$ ?",
        "type": "mcq",
        "options": [
          "$60°$",
          "$30°$",
          "$45°$",
          "$120°$"
        ],
        "correctIndex": 0,
        "answer": "$60°$",
        "hint1": "Isoler $\\cos\\widehat{BAC}$ dans $BC^2 = AB^2 + AC^2 - 2\\,AB \\times AC \\times \\cos\\widehat{BAC}$.",
        "solution": "La formule d'Al-Kashi donne $13 = 9 + 16 - 24\\cos\\widehat{BAC}$, donc $\\cos\\widehat{BAC} = \\frac{12}{24} = \\frac{1}{2}$. Comme $\\widehat{BAC} \\in [0° ; 180°]$, on obtient $\\widehat{BAC} = 60°$. La réponse $120°$ correspond à un cosinus égal à $-\\frac{1}{2}$, c'est-à-dire à $BC^2 = 37$."
      },
      {
        "id": "capes-11-3",
        "chapterId": "capes-11",
        "tier": 3,
        "title": "Distance d'un point à un plan de l'espace",
        "statement": "Dans un repère orthonormé de l'espace, $\\mathcal{P}$ est le plan d'équation $x - 2y + 2z - 5 = 0$ et $A(1 ; 1 ; 1)$. Quelle est la distance du point $A$ au plan $\\mathcal{P}$ ?",
        "type": "mcq",
        "options": [
          "$\\frac{4}{3}$",
          "$\\frac{4}{9}$",
          "$\\frac{2}{3}$",
          "$4$"
        ],
        "correctIndex": 0,
        "answer": "$\\frac{4}{3}$",
        "hint1": "Chercher le projeté orthogonal $H$ de $A$ sous la forme $H = A + t\\vec{n}$, avec $\\vec{n}(1 ; -2 ; 2)$ normal à $\\mathcal{P}$.",
        "solution": "Le point $A + t\\vec{n} = (1 + t ; 1 - 2t ; 1 + 2t)$ appartient à $\\mathcal{P}$ lorsque $(1 + t) - 2(1 - 2t) + 2(1 + 2t) - 5 = 0$, soit $9t - 4 = 0$, donc $t = \\frac{4}{9}$. La distance cherchée est $AH = |t|\\,\\|\\vec{n}\\| = \\frac{4}{9} \\times 3 = \\frac{4}{3}$, ce que confirme la formule $\\frac{|1 - 2 + 2 - 5|}{\\sqrt{1 + 4 + 4}} = \\frac{4}{3}$. La valeur $\\frac{4}{9}$ oublie de multiplier par la norme de $\\vec{n}$."
      },
      {
        "id": "capes-11-4",
        "chapterId": "capes-11",
        "tier": 4,
        "title": "Composée de deux homothéties",
        "statement": "Soit $A$ et $B$ deux points distincts du plan, $h_1$ l'homothétie de centre $A$ et de rapport $2$, et $h_2$ l'homothétie de centre $B$ et de rapport $\\frac{1}{2}$. Quelle est la transformation $h_2 \\circ h_1$ ?",
        "type": "mcq",
        "options": [
          "La translation de vecteur $\\frac{1}{2}\\overrightarrow{AB}$",
          "L'identité du plan",
          "La translation de vecteur $\\overrightarrow{AB}$",
          "La symétrie centrale de centre le milieu de $[AB]$"
        ],
        "correctIndex": 0,
        "answer": "La translation de vecteur $\\frac{1}{2}\\overrightarrow{AB}$",
        "hint1": "Exprimer $\\overrightarrow{AM_1}$ puis $\\overrightarrow{BM_2}$, où $M_1 = h_1(M)$ et $M_2 = h_2(M_1)$, et calculer $\\overrightarrow{MM_2}$ par la relation de Chasles.",
        "solution": "Pour tout point $M$, $\\overrightarrow{AM_1} = 2\\overrightarrow{AM}$ et $\\overrightarrow{BM_2} = \\frac{1}{2}\\overrightarrow{BM_1}$. Alors $\\overrightarrow{MM_2} = \\overrightarrow{MB} + \\frac{1}{2}\\overrightarrow{BM_1} = \\overrightarrow{MB} + \\frac{1}{2}(\\overrightarrow{BA} + 2\\overrightarrow{AM}) = \\overrightarrow{MB} + \\overrightarrow{AM} + \\frac{1}{2}\\overrightarrow{BA} = \\overrightarrow{AB} - \\frac{1}{2}\\overrightarrow{AB} = \\frac{1}{2}\\overrightarrow{AB}$. Le vecteur $\\overrightarrow{MM_2}$ ne dépend pas de $M$ : $h_2 \\circ h_1$ est la translation de vecteur $\\frac{1}{2}\\overrightarrow{AB}$, non triviale car $A \\neq B$. Plus généralement, la composée de deux homothéties de rapports $k$ et $k'$ est une homothétie de rapport $kk'$ si $kk' \\neq 1$, et une translation si $kk' = 1$."
      }
    ],

    'capes-12': [
      {
        "id": "capes-12-1",
        "chapterId": "capes-12",
        "tier": 1,
        "title": "Inverse d'un nombre complexe",
        "statement": "Quelle est la forme algébrique de l'inverse du nombre complexe $3 + 4i$ ?",
        "type": "mcq",
        "options": [
          "$\\frac{3}{25} - \\frac{4}{25}i$",
          "$\\frac{3}{5} - \\frac{4}{5}i$",
          "$\\frac{1}{3} + \\frac{1}{4}i$",
          "$\\frac{3}{25} + \\frac{4}{25}i$"
        ],
        "correctIndex": 0,
        "answer": "$\\frac{3}{25} - \\frac{4}{25}i$",
        "hint1": "Multiplier le numérateur et le dénominateur de $\\frac{1}{3 + 4i}$ par le conjugué du dénominateur.",
        "solution": "$\\frac{1}{3 + 4i} = \\frac{3 - 4i}{(3 + 4i)(3 - 4i)} = \\frac{3 - 4i}{9 + 16} = \\frac{3}{25} - \\frac{4}{25}i$. L'erreur $\\frac{1}{3} + \\frac{1}{4}i$ revient à croire que l'inverse d'une somme est la somme des inverses ; l'erreur $\\frac{3}{5} - \\frac{4}{5}i$ divise par le module au lieu de son carré."
      },
      {
        "id": "capes-12-2",
        "chapterId": "capes-12",
        "tier": 2,
        "title": "Forme exponentielle d'un nombre complexe",
        "statement": "Quelle est la forme exponentielle du nombre complexe $-1 + i\\sqrt{3}$ ?",
        "type": "mcq",
        "options": [
          "$2e^{\\frac{2i\\pi}{3}}$",
          "$2e^{-\\frac{i\\pi}{3}}$",
          "$2e^{\\frac{i\\pi}{3}}$",
          "$4e^{\\frac{2i\\pi}{3}}$"
        ],
        "correctIndex": 0,
        "answer": "$2e^{\\frac{2i\\pi}{3}}$",
        "hint1": "Calculer le module, puis chercher un réel $\\theta$ dont le cosinus et le sinus sont les coordonnées du nombre divisé par son module.",
        "solution": "$|-1 + i\\sqrt{3}| = \\sqrt{1 + 3} = 2$, et $-1 + i\\sqrt{3} = 2\\left(-\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}\\right)$. On cherche $\\theta$ tel que $\\cos\\theta = -\\frac{1}{2}$ et $\\sin\\theta = \\frac{\\sqrt{3}}{2}$ : $\\theta = \\frac{2\\pi}{3}$ convient. Donc $-1 + i\\sqrt{3} = 2e^{\\frac{2i\\pi}{3}}$. Le module vaut $2$ et non $4$ ; l'argument $-\\frac{\\pi}{3}$ provient d'un calcul par $\\arctan(-\\sqrt{3})$ sans tenir compte du quadrant."
      },
      {
        "id": "capes-12-3",
        "chapterId": "capes-12",
        "tier": 3,
        "title": "Somme des racines cubiques de l'unité",
        "statement": "On pose $j = e^{\\frac{2i\\pi}{3}}$. Quelle est la valeur de $1 + j + j^2$ ?",
        "type": "mcq",
        "options": [
          "$0$",
          "$1$",
          "$3$",
          "$-1$"
        ],
        "correctIndex": 0,
        "answer": "$0$",
        "hint1": "$j$ est une racine de $z^3 - 1$, qui se factorise par $z - 1$.",
        "solution": "$j^3 = e^{2i\\pi} = 1$ et $z^3 - 1 = (z - 1)(z^2 + z + 1)$. Comme $j \\neq 1$, on obtient $1 + j + j^2 = 0$. Géométriquement, les points d'affixes $1$, $j$, $j^2$ forment un triangle équilatéral de centre $O$, dont l'isobarycentre est l'origine. On peut aussi calculer : $j = -\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$ et $j^2 = \\bar{j} = -\\frac{1}{2} - i\\frac{\\sqrt{3}}{2}$."
      },
      {
        "id": "capes-12-4",
        "chapterId": "capes-12",
        "tier": 4,
        "title": "Caractérisation d'un triangle équilatéral",
        "statement": "Les points $A$, $B$, $C$ distincts ont pour affixes $a$, $b$, $c$. On suppose que $\\frac{c - a}{b - a} = e^{\\frac{i\\pi}{3}}$. Que peut-on en conclure ?",
        "type": "mcq",
        "options": [
          "Le triangle $ABC$ est équilatéral",
          "Le triangle $ABC$ est rectangle en $A$",
          "Les points $A$, $B$, $C$ sont alignés",
          "Le triangle $ABC$ est isocèle en $B$ sans être équilatéral"
        ],
        "correctIndex": 0,
        "answer": "Le triangle $ABC$ est équilatéral",
        "hint1": "Interpréter le module et un argument du quotient $\\frac{c - a}{b - a}$ en termes de longueurs et d'angle orienté.",
        "solution": "Le module donne $\\frac{AC}{AB} = 1$, donc $AC = AB$, et un argument donne $(\\overrightarrow{AB}, \\overrightarrow{AC}) \\equiv \\frac{\\pi}{3} \\pmod{2\\pi}$. Le triangle $ABC$ est isocèle en $A$ avec un angle principal de $60°$ : ses deux autres angles valent aussi $60°$, il est équilatéral (et direct). Autrement dit, $C$ est l'image de $B$ par la rotation de centre $A$ et d'angle $\\frac{\\pi}{3}$. Le quotient serait réel pour des points alignés et imaginaire pur pour un angle droit en $A$."
      }
    ],

    'capes-13': [
      {
        "id": "capes-13-1",
        "chapterId": "capes-13",
        "tier": 1,
        "title": "Définition de la probabilité conditionnelle",
        "statement": "On donne $P(A) = 0{,}4$ et $P(A \\cap B) = 0{,}1$. Quelle est la valeur de $P_A(B)$ ?",
        "type": "mcq",
        "options": [
          "$0{,}25$",
          "$0{,}04$",
          "$0{,}1$",
          "$0{,}5$"
        ],
        "correctIndex": 0,
        "answer": "$0{,}25$",
        "hint1": "Une probabilité conditionnelle est un quotient : on divise la probabilité de l'intersection par celle de l'événement par lequel on conditionne.",
        "solution": "$P_A(B) = \\frac{P(A \\cap B)}{P(A)} = \\frac{0{,}1}{0{,}4} = 0{,}25$. Le produit $0{,}4 \\times 0{,}1 = 0{,}04$ et la valeur $0{,}1$ confondent la probabilité conditionnelle avec celle de l'intersection."
      },
      {
        "id": "capes-13-2",
        "chapterId": "capes-13",
        "tier": 2,
        "title": "Formule des probabilités totales",
        "statement": "On donne $P(A) = 0{,}3$, $P_A(B) = 0{,}6$ et $P_{\\bar{A}}(B) = 0{,}2$. Quelle est la valeur de $P(B)$ ?",
        "type": "mcq",
        "options": [
          "$0{,}32$",
          "$0{,}8$",
          "$0{,}4$",
          "$0{,}18$"
        ],
        "correctIndex": 0,
        "answer": "$0{,}32$",
        "hint1": "Utiliser la partition formée par $A$ et son contraire, puis sommer les probabilités des deux chemins de l'arbre qui mènent à $B$.",
        "solution": "$P(\\bar{A}) = 0{,}7$ et, par la formule des probabilités totales, $P(B) = P(A)P_A(B) + P(\\bar{A})P_{\\bar{A}}(B) = 0{,}3 \\times 0{,}6 + 0{,}7 \\times 0{,}2 = 0{,}18 + 0{,}14 = 0{,}32$. La valeur $0{,}8$ additionne des probabilités conditionnelles ; $0{,}4$ en fait la moyenne sans pondération ; $0{,}18$ oublie le second chemin."
      },
      {
        "id": "capes-13-3",
        "chapterId": "capes-13",
        "tier": 3,
        "title": "Test de dépistage et formule de Bayes",
        "statement": "Une maladie touche 2 % d'une population. Un test est positif chez 95 % des malades et chez 5 % des personnes saines. Une personne a un test positif. Quelle est, arrondie au centième, la probabilité qu'elle soit malade ?",
        "type": "mcq",
        "options": [
          "$0{,}28$",
          "$0{,}95$",
          "$0{,}02$",
          "$0{,}5$"
        ],
        "correctIndex": 0,
        "answer": "$0{,}28$",
        "hint1": "Construire l'arbre (malade ou non, puis test positif ou non), calculer la probabilité d'un test positif, puis inverser le conditionnement.",
        "solution": "$P(T) = 0{,}02 \\times 0{,}95 + 0{,}98 \\times 0{,}05 = 0{,}019 + 0{,}049 = 0{,}068$, puis $P_T(M) = \\frac{0{,}019}{0{,}068} = \\frac{19}{68} \\approx 0{,}28$. Bien que le test soit fiable, près des trois quarts des tests positifs concernent des personnes saines, car la maladie est rare. La réponse $0{,}95$ confond $P_T(M)$ et $P_M(T)$."
      },
      {
        "id": "capes-13-4",
        "chapterId": "capes-13",
        "tier": 4,
        "title": "Indépendance et événement contraire",
        "statement": "$A$ et $B$ sont deux événements indépendants avec $P(A) = 0{,}5$ et $P(B) = 0{,}4$. Quelle est la probabilité de $A \\cup B$ ?",
        "type": "mcq",
        "options": [
          "$0{,}7$",
          "$0{,}9$",
          "$0{,}2$",
          "$0{,}3$"
        ],
        "correctIndex": 0,
        "answer": "$0{,}7$",
        "hint1": "Exprimer la probabilité de la réunion à l'aide de celle de l'intersection, ou passer à l'événement contraire en utilisant l'indépendance des contraires.",
        "solution": "Par indépendance, $P(A \\cap B) = 0{,}5 \\times 0{,}4 = 0{,}2$, donc $P(A \\cup B) = 0{,}5 + 0{,}4 - 0{,}2 = 0{,}7$. Autre méthode : $\\bar{A}$ et $\\bar{B}$ sont indépendants, donc $P(\\overline{A \\cup B}) = P(\\bar{A} \\cap \\bar{B}) = 0{,}5 \\times 0{,}6 = 0{,}3$ et $P(A \\cup B) = 0{,}7$. La valeur $0{,}9$ suppose les événements incompatibles, ce qui contredit l'indépendance."
      }
    ],

    'capes-14': [
      {
        "id": "capes-14-1",
        "chapterId": "capes-14",
        "tier": 1,
        "title": "Moyenne pondérée",
        "statement": "Dans une série, la valeur $10$ a l'effectif $3$ et la valeur $15$ a l'effectif $2$. Quelle est la moyenne de la série ?",
        "type": "mcq",
        "options": [
          "$12$",
          "$12{,}5$",
          "$13$",
          "$25$"
        ],
        "correctIndex": 0,
        "answer": "$12$",
        "hint1": "Multiplier chaque valeur par son effectif, additionner, puis diviser par l'effectif total.",
        "solution": "$\\bar{x} = \\frac{3 \\times 10 + 2 \\times 15}{3 + 2} = \\frac{60}{5} = 12$. La valeur $12{,}5$ est la moyenne des deux valeurs sans tenir compte des effectifs."
      },
      {
        "id": "capes-14-2",
        "chapterId": "capes-14",
        "tier": 2,
        "title": "Médiane d'une série d'effectif pair",
        "statement": "Quelle est la médiane de la série $8, 3, 12, 5, 9, 14$ ?",
        "type": "mcq",
        "options": [
          "$8{,}5$",
          "$12$",
          "$5$",
          "$9$"
        ],
        "correctIndex": 0,
        "answer": "$8{,}5$",
        "hint1": "Commencer par ranger les valeurs dans l'ordre croissant ; l'effectif est pair.",
        "solution": "La série ordonnée est $3, 5, 8, 9, 12, 14$. L'effectif $6$ est pair : la médiane est la demi-somme des 3e et 4e valeurs, $\\frac{8 + 9}{2} = 8{,}5$. Les réponses $12$ ou $5$ proviennent de la lecture des valeurs centrales de la série non ordonnée."
      },
      {
        "id": "capes-14-3",
        "chapterId": "capes-14",
        "tier": 3,
        "title": "Écart type et transformation affine",
        "statement": "Une série a pour moyenne $20$ et pour écart type $4$. On transforme chaque valeur $x$ en $y = -3x + 5$. Quel est l'écart type de la nouvelle série ?",
        "type": "mcq",
        "options": [
          "$12$",
          "$-12$",
          "$-7$",
          "$36$"
        ],
        "correctIndex": 0,
        "answer": "$12$",
        "hint1": "Une translation ne modifie pas la dispersion ; seul le coefficient multiplicateur intervient, et un écart type est toujours positif.",
        "solution": "$V_y = (-3)^2V_x = 9 \\times 16 = 144$, donc $\\sigma_y = |-3| \\times 4 = 12$. Un écart type ne peut pas être négatif ; la valeur $-7$ applique la transformation à l'écart type comme à une valeur ; $36$ multiplie l'écart type par $a^2$, ce qui vaut pour la variance. La nouvelle moyenne est $-3 \\times 20 + 5 = -55$."
      },
      {
        "id": "capes-14-4",
        "chapterId": "capes-14",
        "tier": 4,
        "title": "Droite des moindres carrés",
        "statement": "Pour une série à deux variables, on a $\\bar{x} = 4$, $\\bar{y} = 10$, $V_x = 2{,}5$ et $\\mathrm{cov}(x, y) = 5$. Quelle est l'équation de la droite d'ajustement de $y$ en $x$ par la méthode des moindres carrés ?",
        "type": "mcq",
        "options": [
          "$y = 2x + 2$",
          "$y = 0{,}5x + 8$",
          "$y = 2x + 10$",
          "$y = 2{,}5x$"
        ],
        "correctIndex": 0,
        "answer": "$y = 2x + 2$",
        "hint1": "Le coefficient directeur est le quotient de la covariance par la variance de $x$, et la droite passe par le point moyen.",
        "solution": "$a = \\frac{\\mathrm{cov}(x, y)}{V_x} = \\frac{5}{2{,}5} = 2$ et $b = \\bar{y} - a\\bar{x} = 10 - 8 = 2$, donc $y = 2x + 2$. On vérifie que le point moyen $G(4 ; 10)$ appartient à la droite. La réponse $y = 0{,}5x + 8$ inverse le quotient ; $y = 2x + 10$ ne passe pas par $G$."
      }
    ],

    'capes-15': [
      {
        "id": "capes-15-1",
        "chapterId": "capes-15",
        "tier": 1,
        "title": "Nombre de k-uplets",
        "statement": "Combien existe-t-il de mots de 3 lettres (ayant un sens ou non) formés avec les lettres A, B, C, D, chaque lettre pouvant être répétée ?",
        "type": "mcq",
        "options": [
          "$64$",
          "$24$",
          "$12$",
          "$4$"
        ],
        "correctIndex": 0,
        "answer": "$64$",
        "hint1": "Pour chacune des trois positions, compter le nombre de choix possibles, puis appliquer le principe multiplicatif.",
        "solution": "Chaque mot est un triplet d'éléments d'un ensemble à 4 éléments : il y en a $4^3 = 64$. La réponse $24 = 4 \\times 3 \\times 2$ correspond aux mots à lettres distinctes ; $4$ correspond au nombre de parties à 3 éléments, sans ordre ni répétition."
      },
      {
        "id": "capes-15-2",
        "chapterId": "capes-15",
        "tier": 2,
        "title": "Podium et arrangements",
        "statement": "Dix athlètes participent à une finale. De combien de façons le podium (or, argent, bronze) peut-il être composé ?",
        "type": "mcq",
        "options": [
          "$720$",
          "$120$",
          "$1000$",
          "$30$"
        ],
        "correctIndex": 0,
        "answer": "$720$",
        "hint1": "L'ordre des trois premiers compte et un athlète ne peut occuper qu'une place.",
        "solution": "On compte les triplets d'athlètes distincts : $10 \\times 9 \\times 8 = 720$. La réponse $120 = \\binom{10}{3}$ ne tient pas compte de l'ordre (elle compte les groupes de trois médaillés) ; $1000 = 10^3$ autorise les répétitions."
      },
      {
        "id": "capes-15-3",
        "chapterId": "capes-15",
        "tier": 3,
        "title": "Comité avec contrainte",
        "statement": "Une classe compte 12 filles et 8 garçons. Combien de délégations de 3 élèves comportant exactement 2 filles peut-on former ?",
        "type": "mcq",
        "options": [
          "$528$",
          "$1140$",
          "$74$",
          "$1056$"
        ],
        "correctIndex": 0,
        "answer": "$528$",
        "hint1": "Choisir séparément les filles et le garçon, sans tenir compte de l'ordre, puis appliquer le principe multiplicatif.",
        "solution": "On choisit 2 filles parmi 12 et 1 garçon parmi 8 : $\\binom{12}{2}\\binom{8}{1} = 66 \\times 8 = 528$. La réponse $1140 = \\binom{20}{3}$ compte toutes les délégations ; $1056 = 12 \\times 11 \\times 8$ ordonne les deux filles ; $74 = 66 + 8$ additionne au lieu de multiplier."
      },
      {
        "id": "capes-15-4",
        "chapterId": "capes-15",
        "tier": 4,
        "title": "Coefficient dans un développement",
        "statement": "Quel est le coefficient de $x^2$ dans le développement de $(1 + 2x)^5$ ?",
        "type": "mcq",
        "options": [
          "$40$",
          "$10$",
          "$20$",
          "$80$"
        ],
        "correctIndex": 0,
        "answer": "$40$",
        "hint1": "Utiliser la formule du binôme : le terme en $x^2$ provient de $\\binom{5}{2}(2x)^2$.",
        "solution": "D'après la formule du binôme, $(1 + 2x)^5 = \\sum_{k=0}^{5}\\binom{5}{k}(2x)^k$. Le terme en $x^2$ est $\\binom{5}{2}(2x)^2 = 10 \\times 4x^2 = 40x^2$. La réponse $10$ oublie la puissance de $2$ ; $20$ ne l'élève pas au carré ; $80$ correspond au coefficient de $x^3$."
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
        statement: "Un enseignant stagiaire de mathématiques porte une médaille religieuse autour du cou. En début de cours, la médaille ressort de son col de façon visible. Un élève l'interroge : « Monsieur, vous êtes croyant ? Quelle est votre religion ? ». Que doit faire l'enseignant au regard du cadre déontologique ?",
        type: "mcq",
        options: [
          "Replacer la médaille sous son vêtement, répondre avec courtoisie qu'en tant que professeur de l'école publique il est tenu à la neutralité et ne fait pas état de ses convictions, puis reprendre le cours",
          "Répondre franchement à la question, puisque la liberté de conscience lui est garantie comme à tout citoyen, à condition de ne pas chercher à convaincre les élèves",
          "Garder la médaille visible puisqu'elle est de petite taille : seuls les signes ostensibles sont interdits aux enseignants",
          "Profiter de la question pour organiser un échange sur les religions des élèves afin de montrer que l'école respecte toutes les croyances"
        ],
        correctIndex: 0,
        answer: "Replacer la médaille sous son vêtement, répondre avec courtoisie qu'en tant que professeur de l'école publique il est tenu à la neutralité et ne fait pas état de ses convictions, puis reprendre le cours",
        hint1: "Un agent public n'est pas soumis à la même règle qu'un élève : pour lui, ce n'est pas seulement le signe ostensible qui est en cause.",
        solution: "1. Cadre juridique : l'article L. 121-2 du Code général de la fonction publique (ancien article 25 de la loi du 13 juillet 1983, issu de la loi du 20 avril 2016) et l'avis du Conseil d'État Marteaux (3 mai 2000) imposent aux agents du service public de l'enseignement une stricte obligation de neutralité : ils ne manifestent aucune appartenance ni opinion religieuse dans l'exercice de leurs fonctions, même par un signe discret. La règle des signes « ostensibles » de la loi de 2004 concerne les élèves, pas les personnels.\n2. Posture professionnelle : l'enseignant replace son signe sous son vêtement, ne fait pas état de ses croyances, explique calmement que la neutralité du professeur protège la liberté de conscience de tous les élèves, et reprend le cours sans polémique."
      },
      {
        id: 'capes-oral2-2',
        chapterId: 'capes-oral2',
        tier: 1,
        title: "Portée de la loi du 15 mars 2004 sur les signes ostensibles",
        statement: "Quelle est la règle fixée par la loi du 15 mars 2004 (article L. 141-5-1 du Code de l'éducation) pour les élèves des écoles, collèges et lycées publics ?",
        type: "mcq",
        options: [
          "Le port de signes ou de tenues par lesquels les élèves manifestent ostensiblement une appartenance religieuse est interdit ; les signes religieux discrets restent autorisés",
          "Tout signe religieux est interdit aux élèves, y compris une petite médaille ou une croix discrète",
          "Seuls les signes ostensibles portés pendant les heures de cours sont interdits ; ils restent permis dans la cour et lors des sorties scolaires",
          "L'interdiction ne s'applique qu'aux élèves mineurs : les élèves majeurs de lycée et de classes post-baccalauréat en sont dispensés"
        ],
        correctIndex: 0,
        answer: "Le port de signes ou de tenues par lesquels les élèves manifestent ostensiblement une appartenance religieuse est interdit ; les signes religieux discrets restent autorisés",
        hint1: "La loi vise le caractère ostensible de la manifestation, pas le signe en tant que tel, et elle s'applique à tous les élèves de l'établissement public.",
        solution: "L'article L. 141-5-1 du Code de l'éducation interdit les signes ou tenues qui manifestent ostensiblement une appartenance religieuse, par leur nature même (voile ou foulard islamique, kippa, grande croix, keshi sikh) ou en raison du comportement de l'élève. Les signes religieux discrets restent autorisés pour les élèves (CE, 5 décembre 2007). L'interdiction vaut dans l'établissement et pendant toutes les activités placées sous sa responsabilité, y compris à l'extérieur, et pour tous les élèves d'un lycée public, y compris ceux des classes préparatoires et des sections de techniciens supérieurs (Vademecum, fiches 3 à 5). Le règlement intérieur rappelle qu'une procédure disciplinaire est précédée d'un dialogue avec l'élève. Les personnels, eux, sont soumis à une stricte neutralité qui exclut même les signes discrets."
      },
      {
        id: 'capes-oral2-3',
        chapterId: 'capes-oral2',
        tier: 1,
        title: "Première compétence du référentiel des métiers du professorat",
        statement: "Selon l'arrêté du 1er juillet 2013 fixant le référentiel des compétences professionnelles des métiers du professorat et de l'éducation, quelle est la première compétence commune à tous les professeurs et personnels d'éducation ?",
        type: "mcq",
        options: [
          "« Faire partager les valeurs de la République » : transmettre les principes de la vie démocratique, la liberté, l'égalité, la fraternité, la laïcité, le refus de toutes les discriminations, et aider les élèves à distinguer les savoirs des opinions ou des croyances",
          "« Maîtriser les savoirs disciplinaires et leur didactique » : connaître les contenus d'enseignement et les programmes de sa discipline",
          "« Agir en éducateur responsable et selon des principes éthiques » : veiller à la sécurité des élèves et lutter contre le harcèlement",
          "« Coopérer au sein d'une équipe » : inscrire son intervention dans un cadre collectif au service des élèves"
        ],
        correctIndex: 0,
        answer: "« Faire partager les valeurs de la République » : transmettre les principes de la vie démocratique, la liberté, l'égalité, la fraternité, la laïcité, le refus de toutes les discriminations, et aider les élèves à distinguer les savoirs des opinions ou des croyances",
        hint1: "Le référentiel place en tête la compétence qui donne son sens à la seconde partie de l'oral 2.",
        solution: "L'annexe de l'arrêté du 1er juillet 2013 ouvre la liste des compétences communes par « Faire partager les valeurs de la République » : savoir transmettre et faire partager les principes de la vie démocratique et les valeurs de la République (la liberté, l'égalité, la fraternité ; la laïcité ; le refus de toutes les discriminations) ; aider les élèves à développer leur esprit critique, à distinguer les savoirs des opinions ou des croyances, à savoir argumenter et à respecter la pensée des autres (cité par le Vademecum). Les trois autres propositions sont aussi des compétences du référentiel, mais pas la première : la maîtrise des savoirs disciplinaires relève des compétences propres aux professeurs (P1), l'éducateur responsable est la compétence 6 et la coopération en équipe la compétence 10."
      },
      {
        id: 'capes-oral2-4',
        chapterId: 'capes-oral2',
        tier: 1,
        title: "Affichage et diffusion de la Charte de la laïcité à l'École",
        statement: "Que prévoient les textes pour la Charte de la laïcité à l'École (circulaire n° 2013-144 du 6 septembre 2013) dans les établissements publics ?",
        type: "mcq",
        options: [
          "Elle est affichée de manière visible de tous, notamment dans les lieux d'accueil et de passage ; il est recommandé de la joindre au règlement intérieur, et le chef d'établissement en fait connaître le contenu aux élèves et aux parents, notamment à l'inscription et aux réunions de rentrée",
          "Elle doit obligatoirement être annexée au règlement intérieur et signée par chaque famille, faute de quoi l'inscription de l'élève n'est pas valide",
          "Elle n'est affichée que dans les salles où se déroule l'enseignement moral et civique, son explication relevant du seul professeur d'histoire-géographie",
          "Elle a valeur de règlement intérieur : ses quinze articles peuvent servir directement de fondement à une sanction sans autre texte"
        ],
        correctIndex: 0,
        answer: "Elle est affichée de manière visible de tous, notamment dans les lieux d'accueil et de passage ; il est recommandé de la joindre au règlement intérieur, et le chef d'établissement en fait connaître le contenu aux élèves et aux parents, notamment à l'inscription et aux réunions de rentrée",
        hint1: "La circulaire de 2013 distingue ce qui est demandé (l'affichage) de ce qui est seulement recommandé.",
        solution: "La circulaire du 6 septembre 2013 demande un affichage de la Charte « visible de tous », de préférence dans les lieux d'accueil et de passage, et recommande de la joindre au règlement intérieur ; sa présentation aux parents lors des réunions de rentrée permet d'en éclairer le sens. Les chefs d'établissement et directeurs d'école portent son contenu à la connaissance des élèves et de leurs parents, notamment lors de l'inscription et des réunions de rentrée (Vademecum, fiche 1). En quinze articles, la Charte explicite le sens de la laïcité à l'École : liberté de conscience, égalité, protection contre le prosélytisme, aucun sujet exclu du questionnement scientifique. C'est un support pédagogique de référence ; les sanctions, elles, reposent sur le règlement intérieur et le Code de l'éducation."
      },
      // =========================================================================
      // PALIER 2 : SITUATIONS DE CLASSE & CONTESTATION
      // =========================================================================
      {
        id: 'capes-oral2-5',
        chapterId: 'capes-oral2',
        tier: 2,
        title: "Contestation d'un cours de mathématiques (probabilités et hasard)",
        statement: "En classe de 3e, lors d'une activité introduisant les probabilités avec des dés à six faces, un élève refuse de participer et déclare : « Les jeux de hasard sont interdits par ma religion, et le hasard n'existe pas car tout est écrit d'avance ». Quelle est la réaction professionnelle attendue ?",
        type: "mcq",
        options: [
          "Expliquer posément que l'activité n'est pas un jeu d'argent mais une modélisation mathématique de l'incertitude, rappeler que tous les élèves suivent l'ensemble des enseignements, demander à l'élève de faire l'exercice et, si le refus persiste, en informer le professeur principal et la direction",
          "Proposer à l'élève un exercice de remplacement sans dé ni hasard, puisque la liberté de conscience impose d'adapter le contenu aux convictions de chacun",
          "Engager devant la classe une discussion sur la question de savoir si le hasard existe selon les différentes religions, pour convaincre l'élève par le débat",
          "Considérer le refus comme une faute disciplinaire et exclure immédiatement l'élève du cours sans autre échange"
        ],
        correctIndex: 0,
        answer: "Expliquer posément que l'activité n'est pas un jeu d'argent mais une modélisation mathématique de l'incertitude, rappeler que tous les élèves suivent l'ensemble des enseignements, demander à l'élève de faire l'exercice et, si le refus persiste, en informer le professeur principal et la direction",
        hint1: "Aucun sujet n'est exclu du questionnement scientifique (Charte, article 12) et l'élève ne peut pas choisir les contenus qu'il suit.",
        solution: "1. Cadre juridique : les obligations des élèves comprennent l'accomplissement des tâches inhérentes à leurs études et l'assiduité (Code de l'éducation, articles L. 511-1 et R. 511-11) ; aucun élève ne peut invoquer une conviction religieuse pour contester un contenu du programme (Charte de la laïcité à l'École, article 12 ; Vademecum, fiches 8 et 9).\n2. Gestion pédagogique : le professeur désamorce sans agressivité, distingue le savoir mathématique (modéliser des expériences aléatoires, fréquences, probabilités) d'une croyance personnelle qu'il ne juge pas, et ne se laisse pas entraîner dans un débat théologique.\n3. Suivi : si le refus persiste, il ne s'enferme pas dans un bras de fer, consigne l'incident et en informe le professeur principal, le CPE et la direction, qui pourront recevoir la famille."
      },
      {
        id: 'capes-oral2-6',
        chapterId: 'capes-oral2',
        tier: 2,
        title: "Signe religieux devenu ostensible par le comportement de l'élève",
        statement: "Une élève de collège se présente chaque jour en cours vêtue d'un large bandeau sombre masquant sa chevelure et d'une longue jupe noire. Invitée à retirer son bandeau, elle refuse systématiquement en affirmant qu'il s'agit d'un choix purement esthétique. Quelle est l'analyse conforme au Vademecum ?",
        type: "mcq",
        options: [
          "Une tenue qui n'est pas religieuse par nature peut devenir une manifestation ostensible d'appartenance religieuse en raison du comportement de l'élève (port permanent, refus persistant de l'ôter) ; la déclaration de l'élève ne suffit pas à écarter la loi, et le dialogue précède toute procédure disciplinaire",
          "Le bandeau et la jupe ne sont pas des signes religieux par nature : la loi de 2004 ne peut donc pas s'appliquer, quel que soit le comportement de l'élève",
          "Il suffit que l'élève affirme que sa tenue n'a aucune signification religieuse pour que l'établissement soit tenu de l'accepter",
          "Le chef d'établissement peut engager immédiatement une procédure disciplinaire, la phase de dialogue n'étant exigée que pour les signes religieux par nature"
        ],
        correctIndex: 0,
        answer: "Une tenue qui n'est pas religieuse par nature peut devenir une manifestation ostensible d'appartenance religieuse en raison du comportement de l'élève (port permanent, refus persistant de l'ôter) ; la déclaration de l'élève ne suffit pas à écarter la loi, et le dialogue précède toute procédure disciplinaire",
        hint1: "Le Vademecum (fiche 3) cite deux décisions : CE, 5 décembre 2007, n° 295671 (bandana porté en permanence) et CAA de Paris, 18 avril 2017, n° 15PA04525 (jupe longue sombre et bandana).",
        solution: "Le Conseil d'État a confirmé la sanction d'une collégienne qui refusait systématiquement de retirer un bandana, auquel elle avait donné le caractère d'un signe ostensible (CE, 5 décembre 2007, n° 295671). La CAA de Paris a jugé de même pour le port quotidien d'une jupe longue sombre et d'un bandana, compte tenu du refus constant de modifier la tenue (18 avril 2017, n° 15PA04525). Les éléments d'appréciation sont la permanence du port et la persistance du refus, rapportées au comportement global de l'élève ; le fait qu'elle déclare ne pas manifester d'appartenance religieuse ne suffit pas (Vademecum, fiche 3). Le professeur alerte le chef d'établissement, qui conduit le dialogue avec l'élève et sa famille ; la procédure disciplinaire ne vient qu'ensuite (article L. 141-5-1, second alinéa)."
      },
      {
        id: 'capes-oral2-7',
        chapterId: 'capes-oral2',
        tier: 2,
        title: "Demandes d'absences régulières pour motif religieux",
        statement: "Une famille informe le professeur principal que leur enfant sera systématiquement absent chaque samedi matin, où ont lieu des devoirs surveillés, pour un motif religieux. Que doit décider l'établissement ?",
        type: "mcq",
        options: [
          "Refuser cette demande d'absence systématique, incompatible avec l'obligation d'assiduité et l'organisation de la scolarité, tout en rappelant que des absences ponctuelles peuvent être autorisées pour les grandes fêtes religieuses dont la liste est fixée chaque année",
          "Accepter la demande, la liberté de culte primant sur l'emploi du temps, et dispenser l'élève des devoirs du samedi",
          "Accepter la demande à condition que la famille fournisse une attestation du responsable du culte",
          "Refuser toute absence pour motif religieux, y compris le jour d'une grande fête religieuse"
        ],
        correctIndex: 0,
        answer: "Refuser cette demande d'absence systématique, incompatible avec l'obligation d'assiduité et l'organisation de la scolarité, tout en rappelant que des absences ponctuelles peuvent être autorisées pour les grandes fêtes religieuses dont la liste est fixée chaque année",
        hint1: "Vademecum, fiche 10 : les demandes d'absence systématique ou prolongée doivent être refusées (CE, Assemblée, 14 avril 1995).",
        solution: "Les élèves sont soumis à l'obligation d'assiduité (Code de l'éducation, articles L. 511-1 et R. 511-11). Des autorisations d'absence peuvent être accordées pour les grandes fêtes religieuses qui ne coïncident pas avec un jour de congé, dont la liste est rappelée chaque année (circulaire de la fonction publique du 10 février 2012), et aucun examen ni épreuve importante ne doit être organisé ces jours-là (circulaire du 18 mai 2004). En revanche, les demandes d'absence systématique ou prolongée doivent être refusées lorsqu'elles sont incompatibles avec la scolarité et l'organisation du service (CE, Assemblée, 14 avril 1995, Consistoire central des israélites de France, n° 125148) ; il en va ainsi d'une absence récurrente les samedis matin (CE, Assemblée, 14 avril 1995, n° 157653). Le CPE ou le chef d'établissement reçoit la famille pour rappeler l'obligation d'assiduité."
      },
      {
        id: 'capes-oral2-8',
        chapterId: 'capes-oral2',
        tier: 2,
        title: "Refus de participation aux cours de natation",
        statement: "Des parents refusent que leur fille participe au cycle de natation en EPS, en invoquant la mixité et la tenue de bain, puis produisent un certificat médical qui paraît de complaisance. Que retenir de la position de la Cour européenne des droits de l'homme et du Vademecum ?",
        type: "mcq",
        options: [
          "L'obligation de suivre intégralement la scolarité peut primer sur le souhait des parents d'une dispense de natation mixte pour motif religieux (CEDH, Osmanoğlu et Kocabaş c. Suisse, 10 janvier 2017) ; un certificat qui paraît injustifié peut être soumis à l'avis du médecin de l'éducation nationale",
          "L'établissement doit organiser des créneaux de piscine non mixtes dès qu'une famille en fait la demande pour motif religieux",
          "La CEDH impose d'admettre dans le bassin toute tenue de bain couvrante, dès lors qu'elle respecte les règles d'hygiène de la piscine",
          "Un certificat médical s'impose toujours à l'établissement, qui ne peut jamais en interroger le bien-fondé"
        ],
        correctIndex: 0,
        answer: "L'obligation de suivre intégralement la scolarité peut primer sur le souhait des parents d'une dispense de natation mixte pour motif religieux (CEDH, Osmanoğlu et Kocabaş c. Suisse, 10 janvier 2017) ; un certificat qui paraît injustifié peut être soumis à l'avis du médecin de l'éducation nationale",
        hint1: "Vademecum, fiche 9 : aucune dispense pour motif religieux ; les consignes d'hygiène et de sécurité ne sont pas aménagées pour des convictions religieuses.",
        solution: "Dans l'arrêt Osmanoğlu et Kocabaş c. Suisse (10 janvier 2017, n° 29086/12), la CEDH a jugé qu'en faisant primer l'obligation de suivre intégralement la scolarité et la réussite de l'intégration sur l'intérêt privé des parents, les autorités n'avaient pas outrepassé leur marge d'appréciation. En France, l'élève suit l'ensemble des cours inscrits à son emploi du temps ; l'article L. 141-5-1 s'applique aussi à la piscine, et le burkini, tenue qui manifeste ostensiblement une appartenance religieuse, n'est pas admis dans le bassin ; les consignes d'hygiène et de sécurité ne sont pas aménagées pour un motif religieux (Vademecum, fiches 3 et 9). Un certificat médical qui paraît injustifié peut être soumis à l'avis du médecin de l'éducation nationale ; en cas de suspicion sérieuse, le chef d'établissement peut, en concertation avec le médecin scolaire et avec l'accord de l'autorité académique, saisir le conseil départemental de l'Ordre des médecins."
      },
      // =========================================================================
      // PALIER 3 : PARENTS, SORTIES & PÉRISCOLAIRE
      // =========================================================================
      {
        id: 'capes-oral2-9',
        chapterId: 'capes-oral2',
        tier: 3,
        title: "Mère d'élève voilée accompagnant une sortie scolaire",
        statement: "Lors d'une sortie scolaire organisée par l'équipe de mathématiques, une mère d'élève volontaire pour accompagner le groupe se présente coiffée d'un foulard religieux. Peut-elle accompagner la classe ?",
        type: "mcq",
        options: [
          "Oui en principe : les parents accompagnateurs sont des usagers du service public, non soumis à la loi de 2004 ni à la neutralité des agents ; une restriction n'est possible que pour des motifs précis, liés à l'ordre public ou au bon fonctionnement du service, et doit être motivée",
          "Non : la loi du 15 mars 2004 s'applique à tous les adultes qui encadrent des élèves pendant une activité scolaire",
          "Non : un parent accompagnateur devient un collaborateur du service public et doit donc respecter la même neutralité qu'un enseignant",
          "Oui, et aucune exigence ne peut lui être imposée, pas même l'abstention de tout prosélytisme devant les élèves"
        ],
        correctIndex: 0,
        answer: "Oui en principe : les parents accompagnateurs sont des usagers du service public, non soumis à la loi de 2004 ni à la neutralité des agents ; une restriction n'est possible que pour des motifs précis, liés à l'ordre public ou au bon fonctionnement du service, et doit être motivée",
        hint1: "Vademecum, fiche 23 : étude du Conseil d'État du 19 décembre 2013 et jugements des tribunaux administratifs de Nice et d'Amiens (2015).",
        solution: "Dans son étude du 19 décembre 2013, le Conseil d'État a considéré que les parents d'élèves ont la qualité d'usagers du service public et ne sont donc pas soumis à l'exigence de neutralité religieuse des agents publics ; il admet seulement que l'autorité recommande, au nom du bon fonctionnement du service, de s'abstenir de manifester son appartenance religieuse. Les tribunaux administratifs de Nice (9 juin 2015) et d'Amiens (15 décembre 2015) ont écarté toute interdiction de principe : seules des considérations précises, liées à l'ordre public ou au bon fonctionnement du service, peuvent fonder une restriction motivée. Le parent accompagnateur a un devoir d'exemplarité dans son comportement et ses propos et doit s'abstenir de tout prosélytisme. Enfin, le choix des accompagnateurs revient au chef d'établissement ou au directeur d'école : un parent n'a pas de droit à accompagner une sortie (Vademecum, fiche 23)."
      },
      {
        id: 'capes-oral2-10',
        chapterId: 'capes-oral2',
        tier: 3,
        title: "Parent d'élève animant un atelier pédagogique en classe",
        statement: "Un parent d'élève bénévole est invité dans la classe pour co-animer avec le professeur un atelier d'algorithmique, dans des conditions proches de celles d'un enseignant. Le principe de neutralité peut-il lui être imposé ?",
        type: "mcq",
        options: [
          "Oui : la CAA de Lyon (23 juillet 2019) a admis la légalité d'un règlement intérieur soumettant à la neutralité les personnes, y compris les parents, qui participent dans les locaux scolaires à des activités assimilables à celles des enseignants",
          "Non : un parent d'élève reste dans tous les cas un usager et ne peut jamais être soumis à la neutralité",
          "Oui : tout parent qui entre dans l'établissement, même pour un rendez-vous, est soumis à la neutralité",
          "Non : seule une loi spécifique pourrait l'imposer, un règlement intérieur ne le peut pas"
        ],
        correctIndex: 0,
        answer: "Oui : la CAA de Lyon (23 juillet 2019) a admis la légalité d'un règlement intérieur soumettant à la neutralité les personnes, y compris les parents, qui participent dans les locaux scolaires à des activités assimilables à celles des enseignants",
        hint1: "Vademecum, fiche 23 : CAA de Lyon, 23 juillet 2019, n° 17LY04351.",
        solution: "Par un arrêt du 23 juillet 2019 (n° 17LY04351), la cour administrative d'appel de Lyon a admis la légalité d'un règlement intérieur soumettant au principe de neutralité les personnes, y compris les parents d'élèves, qui interviennent à l'intérieur des locaux scolaires pour participer à des activités assimilables à celles des enseignants. Le Vademecum (fiche 23) en retient que la neutralité s'impose aux parents lorsqu'ils exercent ou encadrent de telles activités dans les locaux scolaires, ou lorsque des considérations précises liées à l'ordre public le justifient. En revanche, un parent qui vient chercher son enfant ou participe à une réunion n'y est pas soumis."
      },
      {
        id: 'capes-oral2-11',
        chapterId: 'capes-oral2',
        tier: 3,
        title: "Restauration scolaire, menus confessionnels et PAI",
        statement: "Des familles demandent au collège des repas conformes à leurs prescriptions religieuses à la cantine ou, à défaut, l'établissement d'un PAI (projet d'accueil individualisé) pour que leur enfant apporte son panier-repas. Que prévoit le droit ?",
        type: "mcq",
        options: [
          "Il n'existe aucun droit à un menu confessionnel : la collectivité peut proposer des repas différenciés mais n'y est pas tenue, et le PAI, réservé aux élèves présentant un trouble de santé (allergie ou intolérance médicalement avérée), ne peut servir à un régime lié à des choix familiaux",
          "Le collège est tenu de proposer un menu de substitution dès qu'une famille invoque un interdit alimentaire religieux",
          "Le chef d'établissement doit accepter le PAI, faute de quoi il commettrait une discrimination fondée sur la religion",
          "Le principe de laïcité interdit à la collectivité de proposer tout repas différencié, même végétarien"
        ],
        correctIndex: 0,
        answer: "Il n'existe aucun droit à un menu confessionnel : la collectivité peut proposer des repas différenciés mais n'y est pas tenue, et le PAI, réservé aux élèves présentant un trouble de santé (allergie ou intolérance médicalement avérée), ne peut servir à un régime lié à des choix familiaux",
        hint1: "Vademecum, fiche 11 : CE, 25 octobre 2002, n° 251161, articles D. 351-4 et D. 351-9 du Code de l'éducation, circulaire du 10 février 2021 sur le PAI.",
        solution: "L'inscription à la restauration scolaire est facultative, et le service relève de la collectivité qui en a la charge (le département pour un collège). Les collectivités peuvent librement proposer des repas différenciés pour tenir compte des préférences alimentaires ou de prescriptions médicales, sans regrouper les élèves selon leurs pratiques, mais il s'agit d'une possibilité, non d'un droit ; des menus qui ne font référence à aucun interdit alimentaire ne sont pas discriminatoires (CE, 25 octobre 2002, n° 251161). Le panier-repas prévu par le PAI (articles D. 351-4 et D. 351-9) est réservé aux élèves présentant un trouble de santé : selon la circulaire du 10 février 2021, il ne concerne que les allergies ou intolérances alimentaires médicalement avérées et « n'est pas destiné à être utilisé pour permettre un régime alimentaire lié à des choix familiaux » ; la demande ne peut donc pas être acceptée (Vademecum, fiche 11)."
      },
      {
        id: 'capes-oral2-12',
        chapterId: 'capes-oral2',
        tier: 3,
        title: "Refus d'un parent de s'adresser à une enseignante",
        statement: "Lors de la remise des bulletins, un père d'élève refuse de serrer la main de la professeure de mathématiques et de s'adresser à elle en raison de son sexe, et exige de parler à un collègue masculin. Quelle est la réponse professionnelle attendue ?",
        type: "mcq",
        options: [
          "Ne pas céder à la demande de substitution, rappeler calmement que l'égalité entre les femmes et les hommes s'impose à l'École, et informer le chef d'établissement, qui reçoit le parent pour lui rappeler les règles",
          "Faire appel à un collègue masculin pour que l'entretien ait lieu dans l'intérêt de l'élève, puis signaler l'incident après coup",
          "Poursuivre l'entretien sans rien dire, le comportement d'un parent relevant de sa vie privée",
          "Convoquer l'élève en conseil de discipline pour le comportement de son père"
        ],
        correctIndex: 0,
        answer: "Ne pas céder à la demande de substitution, rappeler calmement que l'égalité entre les femmes et les hommes s'impose à l'École, et informer le chef d'établissement, qui reçoit le parent pour lui rappeler les règles",
        hint1: "Vademecum, fiche 23 : le refus de parler à un enseignant ou de lui serrer la main en raison de son sexe figure parmi les comportements que les règlements intérieurs doivent permettre de traiter.",
        solution: "La Charte de la laïcité à l'École rappelle que la laïcité garantit l'égalité entre les filles et les garçons (article 9) et que nul ne peut se prévaloir de son appartenance religieuse pour refuser de se conformer aux règles de l'École de la République (article 13). Le Vademecum (fiche 23) cite expressément le refus de parler à un enseignant ou de lui serrer la main en raison de son sexe parmi les comportements irrespectueux à traiter. L'enseignante n'a pas à accepter cette discrimination ni à se faire remplacer : elle reste courtoise, ne s'engage pas dans une polémique, et le chef d'établissement prend le relais pour recevoir le parent et lui rappeler les règles. L'élève n'a pas à être sanctionné pour le comportement de son parent ; l'incident peut être signalé par l'application Faits établissement."
      },
      // =========================================================================
      // PALIER 4 : PROCÉDURES D'URGENCE & JURY
      // =========================================================================
      {
        id: 'capes-oral2-13',
        chapterId: 'capes-oral2',
        tier: 4,
        title: "Élève en danger à cause d'un jeûne et information préoccupante",
        statement: "Un élève de 11 ans fait des malaises répétés en cours, dus à un jeûne strict sans hydratation. Prévenue, la famille exige qu'on ne lui donne ni eau ni sucre à l'infirmerie pour respecter le jeûne. Quelle est l'obligation de l'équipe éducative ?",
        type: "mcq",
        options: [
          "Faire prendre en charge l'élève sans délai (infirmière, appel au SAMU si nécessaire), engager le dialogue avec la famille avec les personnels de santé et, si l'élève est en danger ou risque de l'être, transmettre une information préoccupante au président du conseil départemental",
          "Respecter la consigne de la famille, puisque l'École ne doit pas prendre parti sur une pratique religieuse",
          "Dispenser l'élève de tous les cours pendant la durée du jeûne pour éviter les malaises",
          "Se contenter d'en parler à la famille : une information préoccupante n'est possible qu'en cas de maltraitance physique"
        ],
        correctIndex: 0,
        answer: "Faire prendre en charge l'élève sans délai (infirmière, appel au SAMU si nécessaire), engager le dialogue avec la famille avec les personnels de santé et, si l'élève est en danger ou risque de l'être, transmettre une information préoccupante au président du conseil départemental",
        hint1: "Vademecum, fiche 13 : article 375 du Code civil (mineur en danger) et article L. 226-2-1 du Code de l'action sociale et des familles (information préoccupante).",
        solution: "1. Urgence : la santé de l'élève passe en premier. Il est pris en charge par l'infirmière ou les secours, qui apportent les soins nécessaires.\n2. Dialogue : le chef d'établissement réunit les enseignants, les personnels de santé et l'équipe éducative, puis conduit le dialogue avec les parents et l'élève ; l'École ne prend pas parti sur l'interprétation d'une pratique religieuse, mais rappelle les risques liés à l'absence de nutrition et d'hydratation, surtout chez les plus jeunes.\n3. Protection de l'enfance : si le dialogue n'aboutit pas et que le mineur est en danger ou risque de l'être au sens de l'article 375 du Code civil, tout membre du personnel doit informer par écrit le président du conseil départemental en adressant une information préoccupante à la cellule départementale de recueil des informations préoccupantes (article L. 226-2-1 du Code de l'action sociale et des familles), selon le protocole départemental (Vademecum, fiche 13)."
      },
      {
        id: 'capes-oral2-14',
        chapterId: 'capes-oral2',
        tier: 4,
        title: "Dispositif ministériel face aux atteintes à la laïcité",
        statement: "Face à une atteinte à la laïcité dans un collège, sur quel dispositif ministériel, renforcé depuis la rentrée 2017, les enseignants et la direction peuvent-ils s'appuyer ?",
        type: "mcq",
        options: [
          "Le signalement par le chef d'établissement dans l'application Faits établissement, l'équipe académique Valeurs de la République (EAVR), saisissable aussi par tout personnel grâce au formulaire « atteinte à la laïcité », et l'expertise nationale du Conseil des sages de la laïcité et des valeurs de la République",
          "Une saisine directe du Conseil des sages de la laïcité par l'enseignant, qui rend un avis sur chaque incident de l'établissement",
          "Le seul dépôt de plainte de l'enseignant au commissariat, aucun dispositif interne n'étant prévu",
          "Un signalement au rectorat réservé au chef d'établissement, les enseignants n'ayant aucun moyen de saisir eux-mêmes l'équipe académique"
        ],
        correctIndex: 0,
        answer: "Le signalement par le chef d'établissement dans l'application Faits établissement, l'équipe académique Valeurs de la République (EAVR), saisissable aussi par tout personnel grâce au formulaire « atteinte à la laïcité », et l'expertise nationale du Conseil des sages de la laïcité et des valeurs de la République",
        hint1: "Vademecum, « Le dispositif ministériel » et fiche 1 : équipe nationale, équipes académiques et Conseil des sages.",
        solution: "Depuis la rentrée 2017, une architecture renforcée accompagne la politique de laïcité. Au niveau national, le Conseil des sages de la laïcité et des valeurs de la République, placé auprès du ministre, aide à préciser la position de l'institution, notamment sur des cas inédits ; une équipe nationale Valeurs de la République anime les équipes académiques. Dans chaque académie, une équipe Valeurs de la République, placée sous la responsabilité du recteur, apporte un soutien concret aux écoles et établissements, après un signalement ou dans un accompagnement plus long. L'IEN ou le chef d'établissement signale toute atteinte par l'application Faits établissement ; l'équipe académique peut être saisie par une adresse académique dédiée ou par cette application, et tout personnel peut utiliser le formulaire en ligne « atteinte à la laïcité » des portails Éduscol et Pléiade (Vademecum, fiche 1)."
      },
      {
        id: 'capes-oral2-15',
        chapterId: 'capes-oral2',
        tier: 4,
        title: "Stagiaires du Greta et élèves infirmiers dans un lycée public",
        statement: "Un lycée public accueille des stagiaires adultes de la formation continue (Greta) et des étudiants d'un institut de formation en soins infirmiers (IFSI) qui y suivent des cours. Quelles règles s'appliquent au port de signes religieux ostensibles ?",
        type: "mcq",
        options: [
          "Les stagiaires du Greta ne sont pas des élèves et ne relèvent pas de la loi de 2004, mais des restrictions proportionnées peuvent être justifiées par le bon fonctionnement de l'établissement ; les étudiants infirmiers doivent respecter la loi de 2004 lorsque leurs cours ont lieu dans le lycée",
          "Les deux publics sont des adultes : aucune règle relative aux signes religieux ne peut leur être appliquée",
          "Les deux publics sont des élèves du lycée et relèvent directement de la loi de 2004 dans tous les cas",
          "Les deux publics sont soumis à la stricte neutralité des agents publics, puisqu'ils se forment à des métiers de service public"
        ],
        correctIndex: 0,
        answer: "Les stagiaires du Greta ne sont pas des élèves et ne relèvent pas de la loi de 2004, mais des restrictions proportionnées peuvent être justifiées par le bon fonctionnement de l'établissement ; les étudiants infirmiers doivent respecter la loi de 2004 lorsque leurs cours ont lieu dans le lycée",
        hint1: "Vademecum, fiche 4 : CAA de Paris, 12 octobre 2015, n° 14PA00582 (Greta) et CE, 28 juillet 2017, n° 390740 (élèves infirmiers).",
        solution: "Les stagiaires accueillis par un Greta ne sont pas des élèves et ne relèvent pas de l'article L. 141-5-1. La CAA de Paris a toutefois jugé que l'encadrement du port de signes religieux ostensibles par ces stagiaires peut être justifié par le bon fonctionnement de l'établissement, lorsqu'ils fréquentent les mêmes locaux que les élèves de formation initiale pendant les mêmes périodes (12 octobre 2015, n° 14PA00582) ; les restrictions doivent être nécessaires, adaptées et proportionnées. Les étudiants d'un IFSI, usagers de l'enseignement supérieur, ne sont pas soumis à la loi de 2004 en tant que tels, mais doivent en respecter les prescriptions lorsque leurs cours se déroulent dans un lycée public (CE, 28 juillet 2017, n° 390740). Aucun de ces publics n'est soumis à la neutralité des agents : ce sont des usagers (Vademecum, fiche 4)."
      },
      {
        id: 'capes-oral2-16',
        chapterId: 'capes-oral2',
        tier: 4,
        title: "Méthode de réponse à une mise en situation à l'oral 2",
        statement: "Lors de la seconde partie de l'oral 2 du CAPES, le jury vous soumet une mise en situation professionnelle. Quelle démarche de réponse est la plus solide ?",
        type: "mcq",
        options: [
          "Analyser la situation et nommer le cadre en jeu, décrire l'action immédiate en classe avec calme, montrer qu'on ne reste pas seul (professeur principal, CPE, direction, équipe académique Valeurs de la République) et, si un mineur est en danger, transmettre une information préoccupante",
          "Réciter d'abord la liste la plus longue possible de textes de loi, la connaissance des articles étant le seul critère évalué",
          "Décrire une réponse ferme prise seul en classe, pour montrer son autorité, sans évoquer l'équipe ni la direction",
          "Renvoyer immédiatement la situation au chef d'établissement sans rien faire en classe, la gestion des incidents ne relevant pas du professeur"
        ],
        correctIndex: 0,
        answer: "Analyser la situation et nommer le cadre en jeu, décrire l'action immédiate en classe avec calme, montrer qu'on ne reste pas seul (professeur principal, CPE, direction, équipe académique Valeurs de la République) et, si un mineur est en danger, transmettre une information préoccupante",
        hint1: "La seconde partie de l'épreuve apprécie l'aptitude à s'approprier et à faire partager les valeurs de la République et les exigences du service public.",
        solution: "La seconde partie de l'épreuve d'entretien apprécie l'aptitude du candidat à s'approprier et à faire partager les valeurs de la République et les exigences du service public (arrêté du 25 janvier 2021). Une réponse solide suit les étapes présentées dans le cours : 1° analyser la situation et nommer les enjeux et le cadre (par exemple la loi du 9 décembre 1905, la loi du 15 mars 2004, l'article L. 141-5-2 du Code de l'éducation issu de la loi du 26 juillet 2019, la neutralité des agents) ; 2° agir dans la classe avec calme, rappeler la règle sans débattre des croyances, protéger les élèves et poursuivre le cours ; 3° ne pas rester seul : professeur principal, CPE, chef d'établissement, famille, personnels sociaux et de santé, équipe académique Valeurs de la République ; 4° si un mineur est en danger ou risque de l'être, transmettre une information préoccupante. Citer peu de textes, mais des textes sûrs."
      },
      // PALIER 1 (suite)
      {
        id: "capes-oral2-17",
        chapterId: 'capes-oral2',
        tier: 1,
        title: "Ordre hiérarchique contestable : quand peut-on refuser d'obéir ?",
        statement: "Un professeur reçoit de sa hiérarchie une consigne qu'il juge pédagogiquement discutable. Dans quel cas le Code général de la fonction publique l'autorise-t-il à ne pas s'y conformer ?",
        type: "mcq",
        options: [
          "Uniquement si l'ordre est manifestement illégal et de nature à compromettre gravement un intérêt public, ces deux conditions étant cumulatives",
          "Dès qu'il est en désaccord avec la consigne, au nom de sa liberté pédagogique",
          "Dès que l'ordre est illégal, même si l'illégalité n'est pas manifeste et ne compromet aucun intérêt public",
          "Jamais : un fonctionnaire doit exécuter tous les ordres sans exception"
        ],
        correctIndex: 0,
        answer: "Uniquement si l'ordre est manifestement illégal et de nature à compromettre gravement un intérêt public, ces deux conditions étant cumulatives",
        hint1: "Le principe est l'obéissance hiérarchique ; l'exception repose sur deux conditions réunies en même temps.",
        solution: "Le fonctionnaire doit se conformer aux instructions de son supérieur hiérarchique, sauf si l'ordre donné est manifestement illégal et de nature à compromettre gravement un intérêt public (Code général de la fonction publique, article L. 121-10). Les deux conditions sont cumulatives. Un simple désaccord pédagogique ne suffit donc pas : on l'exprime par les voies normales (échange avec la direction, conseil pédagogique, inspection), puis on applique la consigne."
      },
      {
        id: "capes-oral2-18",
        chapterId: 'capes-oral2',
        tier: 1,
        title: "Liberté d'opinion et neutralité en service",
        statement: "Un professeur de mathématiques est engagé dans une association et dans un parti politique. Qu'en est-il au regard de son statut ?",
        type: "mcq",
        options: [
          "Sa liberté d'opinion est garantie par le statut ; il ne doit cependant manifester aucune opinion politique ou religieuse dans l'exercice de ses fonctions, et son expression publique reste encadrée par le devoir de réserve",
          "Un fonctionnaire n'a pas le droit d'adhérer à un parti politique",
          "Il peut présenter ses idées politiques à ses élèves dès lors qu'il le fait de façon argumentée",
          "Il doit déclarer ses engagements au chef d'établissement, qui peut les lui interdire"
        ],
        correctIndex: 0,
        answer: "Sa liberté d'opinion est garantie par le statut ; il ne doit cependant manifester aucune opinion politique ou religieuse dans l'exercice de ses fonctions, et son expression publique reste encadrée par le devoir de réserve",
        hint1: "Distinguer ce que l'agent pense (libre), ce qu'il montre en service (neutre) et ce qu'il dit publiquement (avec mesure).",
        solution: "La liberté d'opinion est garantie aux fonctionnaires (Code général de la fonction publique, article L. 111-1) : l'adhésion à une association ou à un parti est libre. En revanche, dans l'exercice de ses fonctions, le professeur est tenu à l'obligation de neutralité (article L. 121-2) : il ne fait état d'aucune opinion devant les élèves. Hors service, son expression publique est encadrée par le devoir de réserve, dégagé par la jurisprudence, apprécié selon ses fonctions et les circonstances."
      },
      {
        id: "capes-oral2-19",
        chapterId: 'capes-oral2',
        tier: 1,
        title: "Discrétion professionnelle après un conseil de classe",
        statement: "À la sortie du collège, une mère d'élève interroge un professeur sur la situation familiale difficile d'un camarade de son fils, évoquée la veille en conseil de classe. Que doit répondre le professeur ?",
        type: "mcq",
        options: [
          "Il ne révèle rien : les faits et informations dont il a connaissance dans l'exercice de ses fonctions relèvent de la discrétion professionnelle",
          "Il peut répondre puisque la mère est déléguée des parents et a assisté au conseil",
          "Il peut répondre de façon générale, sans citer de détails trop personnels",
          "Il l'oriente vers le professeur principal, qui est seul autorisé à communiquer ces informations aux autres familles"
        ],
        correctIndex: 0,
        answer: "Il ne révèle rien : les faits et informations dont il a connaissance dans l'exercice de ses fonctions relèvent de la discrétion professionnelle",
        hint1: "L'obligation vaut pour tous les faits, informations ou documents connus à l'occasion du service.",
        solution: "Le fonctionnaire est tenu au secret professionnel dans les conditions du Code pénal et doit faire preuve de discrétion professionnelle pour tous les faits, informations ou documents dont il a connaissance dans l'exercice ou à l'occasion de ses fonctions (Code général de la fonction publique, articles L. 121-6 et L. 121-7). La situation d'un autre élève ne regarde pas cette mère. Le professeur décline poliment, sans rien confirmer."
      },
      {
        id: "capes-oral2-20",
        chapterId: 'capes-oral2',
        tier: 1,
        title: "Ce que dit la loi du 9 décembre 1905",
        statement: "Parmi les affirmations suivantes sur la loi du 9 décembre 1905 concernant la séparation des Églises et de l'État, laquelle est exacte ?",
        type: "mcq",
        options: [
          "Elle assure la liberté de conscience, garantit le libre exercice des cultes et pose que la République ne reconnaît, ne salarie ni ne subventionne aucun culte",
          "Elle interdit toute manifestation religieuse dans l'espace public",
          "Elle s'applique de façon identique sur tout le territoire, y compris en Alsace-Moselle",
          "C'est elle qui interdit aux élèves le port de signes religieux ostensibles"
        ],
        correctIndex: 0,
        answer: "Elle assure la liberté de conscience, garantit le libre exercice des cultes et pose que la République ne reconnaît, ne salarie ni ne subventionne aucun culte",
        hint1: "Ses deux premiers articles posent une liberté puis une séparation.",
        solution: "L'article 1er de la loi de 1905 assure la liberté de conscience et garantit le libre exercice des cultes, sous les seules restrictions édictées dans l'intérêt de l'ordre public ; l'article 2 pose que la République ne reconnaît, ne salarie ni ne subventionne aucun culte. La loi ne s'applique pas en Alsace-Moselle, qui relève d'un régime concordataire. L'interdiction des signes ostensibles pour les élèves vient de la loi du 15 mars 2004 (article L. 141-5-1 du Code de l'éducation)."
      },
      {
        id: "capes-oral2-21",
        chapterId: 'capes-oral2',
        tier: 1,
        title: "Fondement constitutionnel de la laïcité",
        statement: "Quel texte fait de la laïcité un principe de valeur constitutionnelle ?",
        type: "mcq",
        options: [
          "L'article 1er de la Constitution du 4 octobre 1958 : la France est une République indivisible, laïque, démocratique et sociale, qui respecte toutes les croyances",
          "La loi du 9 décembre 1905, qui a valeur constitutionnelle",
          "La Charte de la laïcité à l'École de 2013",
          "L'article L. 141-5-1 du Code de l'éducation"
        ],
        correctIndex: 0,
        answer: "L'article 1er de la Constitution du 4 octobre 1958 : la France est une République indivisible, laïque, démocratique et sociale, qui respecte toutes les croyances",
        hint1: "Seul l'un de ces textes se situe au sommet de la hiérarchie des normes.",
        solution: "L'article 1er de la Constitution de 1958 dispose que la France est une République indivisible, laïque, démocratique et sociale, qu'elle assure l'égalité devant la loi de tous les citoyens sans distinction d'origine, de race ou de religion et qu'elle respecte toutes les croyances. La loi de 1905 est une loi ordinaire ; la Charte de 2013 est un texte pédagogique diffusé par circulaire ; l'article L. 141-5-1 est une disposition législative du Code de l'éducation."
      },
      {
        id: "capes-oral2-22",
        chapterId: 'capes-oral2',
        tier: 1,
        title: "Neutralité d'un surveillant qui n'enseigne pas",
        statement: "Une assistante d'éducation, chargée de la surveillance de la cour et de la permanence, porte un signe religieux visible. Elle fait valoir qu'elle n'enseigne pas. A-t-elle raison ?",
        type: "mcq",
        options: [
          "Non : le principe de laïcité fait obstacle à ce que les agents du service public de l'enseignement manifestent leurs croyances religieuses dans l'exercice de leurs fonctions, qu'ils enseignent ou non",
          "Oui : l'obligation de neutralité ne concerne que les professeurs devant leurs élèves",
          "Oui, à condition que le signe soit discret, comme pour les élèves",
          "Oui : seuls les fonctionnaires titulaires sont tenus à la neutralité, pas les contractuels"
        ],
        correctIndex: 0,
        answer: "Non : le principe de laïcité fait obstacle à ce que les agents du service public de l'enseignement manifestent leurs croyances religieuses dans l'exercice de leurs fonctions, qu'ils enseignent ou non",
        hint1: "L'avis du Conseil d'État du 3 mai 2000 portait justement sur une surveillante.",
        solution: "Dans son avis du 3 mai 2000 (Mlle Marteaux), rendu à propos d'une surveillante, le Conseil d'État a indiqué que le principe de laïcité fait obstacle à ce que les agents du service public de l'enseignement manifestent leurs croyances religieuses dans le cadre du service, et qu'il n'y a pas lieu de distinguer entre ces agents selon qu'ils sont ou non chargés de fonctions d'enseignement. Dans son étude du 19 décembre 2013, il a précisé que cette obligation s'applique indépendamment de la qualité d'agent public ou de salarié de droit privé. Contrairement aux élèves, qui peuvent porter des signes discrets, l'agent ne peut porter aucun signe manifestant une appartenance religieuse en service."
      },
      {
        id: "capes-oral2-23",
        chapterId: 'capes-oral2',
        tier: 1,
        title: "Les élèves sont-ils tenus à la neutralité ?",
        statement: "Lors d'un débat organisé en classe, un élève exprime une conviction religieuse personnelle. Un camarade affirme que « l'école est laïque, donc on n'a pas le droit de parler de religion ». Que répond le professeur ?",
        type: "mcq",
        options: [
          "Les élèves, usagers du service public, ne sont pas soumis à l'obligation de neutralité : leur liberté de conscience est protégée, dans les limites fixées par la loi du 15 mars 2004, le règlement intérieur et le respect d'autrui, sans prosélytisme ni trouble",
          "Le camarade a raison : les élèves sont tenus à la même neutralité que les enseignants",
          "Le professeur doit interrompre l'élève et le sanctionner pour avoir parlé de religion",
          "Les élèves peuvent tout dire, y compris faire pression sur leurs camarades, puisqu'ils ne sont pas fonctionnaires"
        ],
        correctIndex: 0,
        answer: "Les élèves, usagers du service public, ne sont pas soumis à l'obligation de neutralité : leur liberté de conscience est protégée, dans les limites fixées par la loi du 15 mars 2004, le règlement intérieur et le respect d'autrui, sans prosélytisme ni trouble",
        hint1: "La neutralité est une obligation de ceux qui font fonctionner le service, pas de ceux qui l'utilisent.",
        solution: "Il existe une asymétrie entre agents et usagers : le professeur est neutre, les élèves ne le sont pas. Dans les collèges et les lycées, ils disposent, dans le respect du pluralisme et du principe de neutralité, de la liberté d'information et d'expression, dont l'exercice ne peut porter atteinte aux activités d'enseignement (Code de l'éducation, article L. 511-2 ; Charte de la laïcité, article 8). Cette liberté a des limites : l'interdiction des signes ostensibles (loi du 15 mars 2004), le règlement intérieur, l'interdiction du prosélytisme et des pressions sur autrui. C'est l'occasion de rappeler que la laïcité protège la liberté de croire ou de ne pas croire de chacun."
      },
      {
        id: "capes-oral2-24",
        chapterId: 'capes-oral2',
        tier: 1,
        title: "Missions de l'école selon l'article L. 111-1",
        statement: "Outre la transmission des connaissances, quelle mission première l'article L. 111-1 du Code de l'éducation assigne-t-il à l'école ?",
        type: "mcq",
        options: [
          "Faire partager aux élèves les valeurs de la République ; le service public de l'éducation veille aussi à la scolarisation inclusive de tous les enfants, sans aucune distinction",
          "Préparer les élèves aux concours des grandes écoles",
          "Garantir à chaque élève l'obtention d'un diplôme",
          "Transmettre à chaque élève les valeurs religieuses de sa famille"
        ],
        correctIndex: 0,
        answer: "Faire partager aux élèves les valeurs de la République ; le service public de l'éducation veille aussi à la scolarisation inclusive de tous les enfants, sans aucune distinction",
        hint1: "C'est aussi l'intitulé de la première compétence du référentiel de 2013.",
        solution: "L'article L. 111-1 du Code de l'éducation dispose qu'outre la transmission des connaissances, la Nation fixe comme mission première à l'école de faire partager aux élèves les valeurs de la République. Il prévoit aussi que le service public de l'éducation contribue à l'égalité des chances et veille à la scolarisation inclusive de tous les enfants, sans aucune distinction. On retrouve cette mission dans la compétence 1 du référentiel des métiers du professorat (arrêté du 1er juillet 2013)."
      },
      {
        id: "capes-oral2-25",
        chapterId: 'capes-oral2',
        tier: 1,
        title: "Statut juridique du harcèlement scolaire",
        statement: "Depuis la loi du 2 mars 2022 visant à combattre le harcèlement scolaire, quel est le statut juridique du harcèlement scolaire ?",
        type: "mcq",
        options: [
          "C'est un délit spécifique prévu par le Code pénal",
          "C'est un simple manquement au règlement intérieur, sanctionné uniquement par l'établissement",
          "C'est une contravention, sans conséquence pénale lourde",
          "Il n'est puni que si l'auteur est majeur"
        ],
        correctIndex: 0,
        answer: "C'est un délit spécifique prévu par le Code pénal",
        hint1: "La loi de 2022 a créé une infraction autonome.",
        solution: "La loi du 2 mars 2022 a fait du harcèlement scolaire un délit (Code pénal, article 222-33-2-3), puni de trois ans d'emprisonnement et de 45 000 euros d'amende, peines aggravées selon les conséquences pour la victime. Les mineurs auteurs relèvent des règles propres à la justice des mineurs. Pour l'enseignant, la conséquence pratique est la même : prendre au sérieux tout signal et ne jamais rester seul, en informant sans délai le CPE et le chef d'établissement, qui mettent en œuvre le protocole de traitement du harcèlement."
      },
      // PALIER 2 (suite)
      {
        id: "capes-oral2-26",
        chapterId: 'capes-oral2',
        tier: 2,
        title: "Datation au carbone 14 contestée au nom d'une croyance",
        statement: "En terminale, lors d'un exercice sur la décroissance exponentielle appliquée à la datation au carbone 14, un élève refuse de calculer l'âge d'un fossile : « Ce que vous enseignez est contraire à ma religion. » Quelle réaction est attendue ?",
        type: "mcq",
        options: [
          "Rappeler calmement qu'aucun élève ne peut invoquer une conviction pour contester le droit de traiter une question au programme, distinguer le savoir (établi par la démonstration et l'argumentation) de la croyance, qui appartient à chacun, faire faire l'exercice, puis reprendre l'échange individuellement",
          "Remplacer l'exercice par un autre pour cet élève afin de respecter ses convictions",
          "Engager devant la classe un débat pour démontrer que sa croyance est fausse",
          "Ignorer la remarque et laisser l'élève ne rien faire pour ne pas créer de tension"
        ],
        correctIndex: 0,
        answer: "Rappeler calmement qu'aucun élève ne peut invoquer une conviction pour contester le droit de traiter une question au programme, distinguer le savoir (établi par la démonstration et l'argumentation) de la croyance, qui appartient à chacun, faire faire l'exercice, puis reprendre l'échange individuellement",
        hint1: "Charte de la laïcité à l'École, article 12.",
        solution: "L'article 12 de la Charte de la laïcité à l'École rappelle qu'aucun sujet n'est a priori exclu du questionnement scientifique et pédagogique et qu'aucun élève ne peut invoquer une conviction religieuse ou politique pour contester à un enseignant le droit de traiter une question au programme. L'obligation d'assiduité implique en outre que les élèves accomplissent les travaux demandés et respectent le contenu des programmes (Code de l'éducation, articles L. 511-1 et R. 511-11). Le professeur ne prend pas parti sur la croyance et n'humilie pas l'élève : il explique qu'un modèle mathématique se discute par des arguments et des données. Il poursuit le cours, revoit l'élève seul et informe l'équipe si le refus persiste."
      },
      {
        id: "capes-oral2-27",
        chapterId: 'capes-oral2',
        tier: 2,
        title: "Refus de travailler en groupe avec une camarade",
        statement: "Lors d'une activité de géométrie en groupes, un élève refuse de s'asseoir à côté d'une camarade : « Je ne travaille pas avec les filles. » Quelle est la conduite à tenir ?",
        type: "mcq",
        options: [
          "Maintenir la composition du groupe, rappeler sans hausser le ton que la mixité et l'égalité entre filles et garçons sont des principes de l'école qui s'imposent à tous, protéger l'élève visée, puis reprendre l'échange seul à seul et informer le professeur principal et le CPE",
          "Accepter de changer l'élève de groupe pour préserver le calme de la classe",
          "Laisser l'élève travailler seul pour cette séance, sans autre suite",
          "Exclure immédiatement l'élève du cours et l'envoyer chez le chef d'établissement sans explication"
        ],
        correctIndex: 0,
        answer: "Maintenir la composition du groupe, rappeler sans hausser le ton que la mixité et l'égalité entre filles et garçons sont des principes de l'école qui s'imposent à tous, protéger l'élève visée, puis reprendre l'échange seul à seul et informer le professeur principal et le CPE",
        hint1: "Céder sur la règle, même pour éviter un conflit, revient à admettre une discrimination.",
        solution: "La Charte de la laïcité à l'École rappelle que la laïcité garantit l'égalité entre les filles et les garçons (article 9) et que nul ne peut se prévaloir de son appartenance religieuse pour refuser de se conformer aux règles applicables dans l'École de la République (article 13). Le professeur maintient la consigne avec calme, sans humilier, veille à l'élève concernée, puis reprend l'échange en particulier. Si le refus persiste ou s'il relève d'une atteinte à la laïcité, il en informe le professeur principal, le CPE et le chef d'établissement, qui peut solliciter l'équipe académique Valeurs de la République ; tout personnel peut aussi utiliser le formulaire en ligne « atteinte à la laïcité »."
      },
      {
        id: "capes-oral2-28",
        chapterId: 'capes-oral2',
        tier: 2,
        title: "Un élève se confie sur un cyberharcèlement",
        statement: "À la fin du cours, une élève de 4e confie au professeur de mathématiques qu'elle reçoit chaque soir des messages humiliants de camarades de la classe sur un réseau social. Elle lui demande de « ne rien dire à personne ». Que faire ?",
        type: "mcq",
        options: [
          "L'écouter et prendre sa parole au sérieux, lui expliquer qu'on ne peut pas lui promettre le secret parce qu'il faut la protéger, puis informer sans délai le CPE et le chef d'établissement, qui mettent en œuvre le protocole de traitement du harcèlement",
          "Respecter sa demande et ne rien dire, pour garder sa confiance",
          "Interpeller dès le lendemain les élèves soupçonnés devant toute la classe",
          "Lui conseiller de bloquer les comptes concernés et attendre de voir si cela continue"
        ],
        correctIndex: 0,
        answer: "L'écouter et prendre sa parole au sérieux, lui expliquer qu'on ne peut pas lui promettre le secret parce qu'il faut la protéger, puis informer sans délai le CPE et le chef d'établissement, qui mettent en œuvre le protocole de traitement du harcèlement",
        hint1: "Promettre le secret, c'est rester seul avec une situation qui relève d'un délit.",
        solution: "Le professeur écoute sans minimiser ni enquêter lui-même. Il explique à l'élève qu'il ne garde pas le secret parce que des adultes de l'établissement doivent la protéger. Il informe sans délai le CPE et le chef d'établissement, qui déclenchent le protocole de traitement du harcèlement (entretiens, information des familles, mesures de protection et sanctions éventuelles). Depuis la loi du 2 mars 2022, le harcèlement scolaire constitue un délit : la situation ne peut être traitée seul en classe."
      },
      {
        id: "capes-oral2-29",
        chapterId: 'capes-oral2',
        tier: 2,
        title: "Insulte homophobe entendue en classe",
        statement: "Pendant un exercice, un élève lance à un camarade une insulte homophobe. Une partie de la classe rit. Quelle réaction est attendue ?",
        type: "mcq",
        options: [
          "Intervenir immédiatement : faire cesser les propos, rappeler qu'une injure à caractère discriminatoire est interdite par la loi et contraire au respect d'autrui, protéger l'élève visé, puis donner une suite éducative et disciplinaire avec le CPE et la direction",
          "Ne rien dire pour ne pas donner d'importance à ce qui n'est qu'une plaisanterie entre adolescents",
          "Demander à l'élève insulté de répondre lui-même pour régler le conflit",
          "Porter plainte personnellement au commissariat le soir même sans en parler à l'établissement"
        ],
        correctIndex: 0,
        answer: "Intervenir immédiatement : faire cesser les propos, rappeler qu'une injure à caractère discriminatoire est interdite par la loi et contraire au respect d'autrui, protéger l'élève visé, puis donner une suite éducative et disciplinaire avec le CPE et la direction",
        hint1: "Laisser passer une insulte discriminatoire, c'est lui donner une forme de légitimité devant la classe.",
        solution: "Le professeur réagit sur-le-champ, sans humilier l'auteur : il nomme le caractère discriminatoire des propos et rappelle la règle. Proférée en classe, une injure non publique à raison de l'orientation sexuelle constitue une contravention (Code pénal, article R. 625-8-1) ; proférée publiquement, c'est un délit (loi du 29 juillet 1881). La première réponse reste éducative et disciplinaire : entretien avec l'auteur, attention à la victime, information du CPE et de la direction, qui apprécient les suites."
      },
      {
        id: "capes-oral2-30",
        chapterId: 'capes-oral2',
        tier: 2,
        title: "Fraude au téléphone pendant un devoir surveillé",
        statement: "Pendant un devoir surveillé, un professeur constate qu'un élève consulte son téléphone sous la table. Quelle conduite est la plus adaptée ?",
        type: "mcq",
        options: [
          "Faire cesser la fraude sans éclat, noter les faits précisément, en informer le professeur principal, le CPE et la direction, et appliquer les suites prévues par le règlement intérieur, sans humilier l'élève devant la classe",
          "Lire à voix haute devant la classe le contenu du téléphone pour faire un exemple",
          "Annuler le devoir pour toute la classe",
          "Faire comme si de rien n'était pour ne pas perturber les autres élèves"
        ],
        correctIndex: 0,
        answer: "Faire cesser la fraude sans éclat, noter les faits précisément, en informer le professeur principal, le CPE et la direction, et appliquer les suites prévues par le règlement intérieur, sans humilier l'élève devant la classe",
        hint1: "Fermeté sur les faits, discrétion dans la forme, et pas de décision prise seul.",
        solution: "La fraude doit être traitée, mais sans humiliation ni sanction collective. Le professeur fait cesser la fraude, consigne les faits (heure, circonstances, objet en cause) et en informe l'équipe. Les enseignants peuvent prononcer des punitions scolaires, dans le cadre du règlement intérieur ; les sanctions disciplinaires sont prononcées par le chef d'établissement ou, pour les plus lourdes, par le conseil de discipline (Code de l'éducation, articles R. 421-10 et R. 511-14). L'échange avec l'élève, puis avec la famille, vise aussi à comprendre la raison de la fraude."
      },
      {
        id: "capes-oral2-31",
        chapterId: 'capes-oral2',
        tier: 2,
        title: "Élève arrivant avec un signe religieux ostensible",
        statement: "Une élève de lycée entre en cours de mathématiques en portant un signe manifestant ostensiblement une appartenance religieuse, ce qui ne s'était jamais produit. Quelle est la conduite attendue du professeur ?",
        type: "mcq",
        options: [
          "Rappeler calmement la règle sans entrer dans un débat sur les croyances, et informer sans délai le chef d'établissement, qui organise le dialogue avec l'élève prévu par la loi avant toute procédure disciplinaire",
          "Exclure l'élève définitivement de son cours de sa propre autorité",
          "Ne rien dire, car la loi de 2004 ne s'applique pas au lycée",
          "Retirer lui-même le signe à l'élève"
        ],
        correctIndex: 0,
        answer: "Rappeler calmement la règle sans entrer dans un débat sur les croyances, et informer sans délai le chef d'établissement, qui organise le dialogue avec l'élève prévu par la loi avant toute procédure disciplinaire",
        hint1: "La loi du 15 mars 2004 prévoit une étape obligatoire avant toute sanction.",
        solution: "L'article L. 141-5-1 du Code de l'éducation interdit, dans les écoles, collèges et lycées publics, le port de signes ou tenues par lesquels les élèves manifestent ostensiblement une appartenance religieuse. Il prévoit que la mise en œuvre d'une procédure disciplinaire est précédée d'un dialogue avec l'élève. Le professeur ne règle pas seul la situation : il rappelle la règle sans polémique et informe le chef d'établissement, qui conduit ce dialogue, associe la famille et peut s'appuyer sur l'équipe académique Valeurs de la République."
      },
      {
        id: "capes-oral2-32",
        chapterId: 'capes-oral2',
        tier: 2,
        title: "Un collègue juge le PAP facultatif",
        statement: "En salle des professeurs, un collègue affirme : « Les aménagements du plan d'accompagnement personnalisé, c'est indicatif ; en devoir, je traite tout le monde pareil. » Que lui répondre ?",
        type: "mcq",
        options: [
          "Les aménagements pédagogiques prévus par le PAP s'imposent à l'enseignant ; on les applique sans les commenter devant la classe, car l'équité n'est pas l'uniformité",
          "Il a raison : le PAP n'est qu'une recommandation laissée à l'appréciation de chaque professeur",
          "Le PAP ne s'applique qu'aux examens nationaux, pas aux devoirs en classe",
          "Le PAP ne peut être appliqué que si toute la classe bénéficie des mêmes aménagements"
        ],
        correctIndex: 0,
        answer: "Les aménagements pédagogiques prévus par le PAP s'imposent à l'enseignant ; on les applique sans les commenter devant la classe, car l'équité n'est pas l'uniformité",
        hint1: "Code de l'éducation, articles L. 311-7 et D. 311-13.",
        solution: "Le plan d'accompagnement personnalisé (Code de l'éducation, articles L. 311-7 et D. 311-13) définit des aménagements et adaptations pédagogiques pour un élève dont les difficultés scolaires résultent d'un trouble des apprentissages ; il est mis en place après avis du médecin de l'éducation nationale. Ces aménagements s'imposent aux enseignants. On les met en œuvre discrètement, en lien avec le professeur principal. Ils ne valent pas aménagement d'examen : les aménagements d'examen (temps majoré, secrétaire) font l'objet d'une demande et d'une décision distinctes."
      },
      {
        id: "capes-oral2-33",
        chapterId: 'capes-oral2',
        tier: 2,
        title: "Temps majoré au brevet : PAP ou demande d'examen ?",
        statement: "Un élève de 3e qui bénéficie d'un plan d'accompagnement personnalisé dispose d'un tiers temps en classe. Sa famille pense qu'il l'aura automatiquement au diplôme national du brevet. Que lui indiquer ?",
        type: "mcq",
        options: [
          "Rien n'est automatique : la famille doit adresser une demande d'aménagement à l'autorité administrative qui organise l'examen, au plus tard à la date limite d'inscription ; si le PAP a été accordé au titre d'un trouble du neurodéveloppement, une procédure simplifiée la dispense d'un nouvel avis médical",
          "Le tiers temps prévu dans le PAP s'applique automatiquement au brevet, sans démarche",
          "Le professeur de mathématiques peut lui accorder lui-même le tiers temps le jour de l'épreuve",
          "Aucun aménagement n'est possible aux examens nationaux"
        ],
        correctIndex: 0,
        answer: "Rien n'est automatique : la famille doit adresser une demande d'aménagement à l'autorité administrative qui organise l'examen, au plus tard à la date limite d'inscription ; si le PAP a été accordé au titre d'un trouble du neurodéveloppement, une procédure simplifiée la dispense d'un nouvel avis médical",
        hint1: "Ne pas confondre aménagements pédagogiques en classe et aménagements d'examen.",
        solution: "Le PAP organise des aménagements pédagogiques en classe, qui s'imposent aux enseignants. Les aménagements des épreuves d'examen relèvent d'une procédure propre : le candidat en fait la demande, au plus tard à la date limite d'inscription, et l'autorité administrative décide des aménagements accordés (Code de l'éducation, article D. 351-28). Pour un élève dont le PAP a été accordé au titre d'un trouble du neurodéveloppement, une procédure simplifiée permet de s'adresser directement à l'autorité administrative sans solliciter un nouvel avis médical, pour des aménagements cohérents avec ceux du plan (articles D. 351-28-1 et D. 311-13-1). Dans tous les cas, rien n'est automatique. Le professeur oriente la famille vers le professeur principal et la direction pour engager la démarche à temps. Pour un élève en situation de handicap, le cadre est le projet personnalisé de scolarisation (article L. 112-2 du Code de l'éducation)."
      },
      // PALIER 3 (suite)
      {
        id: "capes-oral2-34",
        chapterId: 'capes-oral2',
        tier: 3,
        title: "Injures d'un parent sur un réseau social",
        statement: "Après une mauvaise note, un parent publie sur un réseau social des messages injurieux et menaçants visant nommément le professeur de mathématiques de son enfant. Que peut faire le professeur ?",
        type: "mcq",
        options: [
          "Informer le chef d'établissement, conserver des captures des messages et demander par écrit la protection fonctionnelle à son administration (par l'application Colibris), qui doit prendre sans délai des mesures conservatoires",
          "Répondre publiquement au parent sur le même réseau social pour rétablir la vérité",
          "Modifier la note de l'élève pour apaiser la situation",
          "Ne rien faire : un fonctionnaire ne peut pas être protégé contre les propos d'un usager"
        ],
        correctIndex: 0,
        answer: "Informer le chef d'établissement, conserver des captures des messages et demander par écrit la protection fonctionnelle à son administration (par l'application Colibris), qui doit prendre sans délai des mesures conservatoires",
        hint1: "Code général de la fonction publique, articles L. 134-1 et L. 134-5.",
        solution: "L'administration doit protéger l'agent attaqué en raison de ses fonctions, notamment contre les menaces, injures ou outrages, y compris de la part d'un parent d'élève (Code général de la fonction publique, articles L. 134-1 et L. 134-5). La protection fonctionnelle se demande par écrit ; à l'Éducation nationale, par l'application Colibris. L'administration doit prendre sans délai des mesures conservatoires. Le professeur ne répond pas sur le réseau social et ne revient pas sur l'évaluation sous la pression."
      },
      {
        id: "capes-oral2-35",
        chapterId: 'capes-oral2',
        tier: 3,
        title: "Un parent conteste vivement une note",
        statement: "Lors de la réunion parents-professeurs, un père conteste avec véhémence la note de son fils à un devoir de mathématiques et exige qu'elle soit relevée. Quelle attitude adopter ?",
        type: "mcq",
        options: [
          "Rester calme, écouter, expliquer les critères d'évaluation et les attendus en s'appuyant sur la copie, proposer des pistes de progrès, et, si l'échange devient agressif, l'interrompre et en informer le professeur principal et la direction",
          "Relever la note pour éviter le conflit",
          "Refuser toute explication : l'évaluation ne regarde pas les parents",
          "Comparer devant le parent la copie de son fils avec celles d'autres élèves nommément désignés"
        ],
        correctIndex: 0,
        answer: "Rester calme, écouter, expliquer les critères d'évaluation et les attendus en s'appuyant sur la copie, proposer des pistes de progrès, et, si l'échange devient agressif, l'interrompre et en informer le professeur principal et la direction",
        hint1: "Le référentiel de 2013 demande de coopérer avec les parents, ce qui n'est pas céder.",
        solution: "Coopérer avec les parents d'élèves est une compétence du référentiel de 2013. L'enseignant explique sa démarche d'évaluation, montre ce qui est réussi et ce qui ne l'est pas, et propose des pistes pour progresser. Il ne modifie pas une note sous la pression et ne montre pas les copies d'autres élèves (discrétion professionnelle). Si le parent devient injurieux ou menaçant, le professeur met fin à l'entretien, informe la direction et peut demander la protection fonctionnelle."
      },
      {
        id: "capes-oral2-36",
        chapterId: 'capes-oral2',
        tier: 3,
        title: "Un parent veut connaître le nom d'un élève sanctionné",
        statement: "Un parent apprend que son fils a été bousculé en cours de mathématiques. Il demande au professeur le nom de l'élève responsable et la sanction prise contre lui. Que répondre ?",
        type: "mcq",
        options: [
          "Lui assurer que la situation est prise en charge par l'établissement, sans communiquer d'information sur l'autre élève, et l'orienter vers le CPE ou le chef d'établissement pour le suivi",
          "Lui donner le nom de l'élève et le détail de la sanction, puisque son fils est la victime",
          "Lui proposer de rencontrer directement la famille de l'autre élève à la sortie du collège",
          "Refuser de lui parler de l'incident, qui ne le concerne pas"
        ],
        correctIndex: 0,
        answer: "Lui assurer que la situation est prise en charge par l'établissement, sans communiquer d'information sur l'autre élève, et l'orienter vers le CPE ou le chef d'établissement pour le suivi",
        hint1: "La famille de la victime a droit à une réponse, pas aux informations concernant un autre mineur.",
        solution: "Le professeur reçoit la préoccupation du parent avec sérieux et indique que l'établissement traite l'incident. Il ne communique ni l'identité ni la situation disciplinaire d'un autre élève : ces informations relèvent de la discrétion professionnelle (Code général de la fonction publique, article L. 121-7). Il oriente le parent vers le CPE et le chef d'établissement, qui assurent le suivi et l'information des familles concernées."
      },
      {
        id: "capes-oral2-37",
        chapterId: 'capes-oral2',
        tier: 3,
        title: "Parents séparés et accès aux résultats scolaires",
        statement: "Une mère, séparée du père de l'élève, demande au professeur principal de ne transmettre aucun bulletin ni aucune information au père. Aucune décision de justice ne retire l'autorité parentale au père. Que faire ?",
        type: "mcq",
        options: [
          "Expliquer que, sauf décision de justice contraire, les deux parents exercent l'autorité parentale et ont chacun le droit d'être informés de la scolarité de leur enfant, et en référer au chef d'établissement",
          "Accepter la demande : le parent qui a la garde décide seul des informations transmises",
          "Ne plus transmettre d'informations à aucun des deux parents pour rester neutre",
          "Demander à l'élève lequel de ses parents il préfère voir informé"
        ],
        correctIndex: 0,
        answer: "Expliquer que, sauf décision de justice contraire, les deux parents exercent l'autorité parentale et ont chacun le droit d'être informés de la scolarité de leur enfant, et en référer au chef d'établissement",
        hint1: "La séparation des parents ne change pas, par elle-même, l'exercice de l'autorité parentale.",
        solution: "Les père et mère exercent en commun l'autorité parentale, et leur séparation est sans incidence sur les règles de son exercice (Code civil, articles 372 et 373-2), sauf décision du juge. L'établissement transmet donc les mêmes informations à chaque parent (résultats, bulletins, rencontres). Même un parent qui n'exerce pas l'autorité parentale conserve un droit de surveillance de l'éducation de l'enfant (article 373-2-1). L'enseignant reste impartial, traite les deux parents de façon égale et ne tranche pas seul un conflit familial : il informe le chef d'établissement, qui demandera le cas échéant la décision de justice invoquée."
      },
      {
        id: "capes-oral2-38",
        chapterId: 'capes-oral2',
        tier: 3,
        title: "Un parent demande le numéro personnel du professeur",
        statement: "En début d'année, plusieurs parents demandent au professeur de mathématiques son numéro de téléphone personnel, et l'un d'eux lui propose de rejoindre un groupe de messagerie des parents de la classe. Quelle est la position la plus professionnelle ?",
        type: "mcq",
        options: [
          "Décliner poliment et privilégier les canaux institutionnels (espace numérique de travail, carnet de liaison, rendez-vous par l'établissement), qui garantissent l'égalité de traitement des familles et protègent l'enseignant",
          "Accepter : c'est une bonne pratique de coopération avec les familles",
          "Donner son numéro aux seuls parents qu'il connaît déjà",
          "Rejoindre le groupe pour répondre aux questions sur les notes des élèves"
        ],
        correctIndex: 0,
        answer: "Décliner poliment et privilégier les canaux institutionnels (espace numérique de travail, carnet de liaison, rendez-vous par l'établissement), qui garantissent l'égalité de traitement des familles et protègent l'enseignant",
        hint1: "Coopérer avec les parents passe par des canaux qui traitent toutes les familles de la même façon.",
        solution: "La coopération avec les parents est attendue (référentiel de 2013), mais elle s'exerce dans un cadre institutionnel. Les canaux de l'établissement assurent la traçabilité des échanges, l'égalité de traitement de toutes les familles et la discrétion sur la situation des élèves. Un groupe de messagerie privé expose l'enseignant à des échanges hors cadre et à des demandes inégales selon les familles."
      },
      {
        id: "capes-oral2-39",
        chapterId: 'capes-oral2',
        tier: 3,
        title: "Un accompagnateur fait du prosélytisme pendant une sortie",
        statement: "Pendant une sortie scolaire au musée des sciences, un parent accompagnateur distribue aux élèves des brochures religieuses et tient des propos visant à les convaincre. Que doit faire le professeur responsable de la sortie ?",
        type: "mcq",
        options: [
          "Faire cesser immédiatement ce comportement, protéger la liberté de conscience des élèves, et en rendre compte au chef d'établissement, qui apprécie s'il peut encore participer à des sorties",
          "Laisser faire : un parent n'est pas un agent public et peut dire ce qu'il veut",
          "Annuler la sortie et ramener immédiatement tous les élèves au collège",
          "Répondre devant les élèves en présentant à son tour ses propres convictions"
        ],
        correctIndex: 0,
        answer: "Faire cesser immédiatement ce comportement, protéger la liberté de conscience des élèves, et en rendre compte au chef d'établissement, qui apprécie s'il peut encore participer à des sorties",
        hint1: "Les parents accompagnateurs ne sont pas soumis à la loi de 2004, mais le prosélytisme auprès des élèves n'est pas admis.",
        solution: "Les parents accompagnateurs ne sont pas des agents publics : la loi de 2004 et l'obligation de neutralité des agents ne leur sont pas applicables en tant que telles. Mais l'école protège les élèves de tout prosélytisme et de toute pression. Le Vademecum « La laïcité à l'École » rappelle que les parents doivent s'abstenir de toute forme de prosélytisme et que l'accompagnateur a un devoir d'exemplarité devant les élèves, dans son comportement et ses propos. Le professeur, responsable du groupe, fait cesser le comportement avec calme et en rend compte. Le choix des personnes associées aux sorties appartient au chef d'établissement (ou au directeur d'école) : le professeur ne tranche pas seul."
      },
      // PALIER 4 (suite)
      {
        id: "capes-oral2-40",
        chapterId: 'capes-oral2',
        tier: 4,
        title: "Suspicion de maltraitance : la conduite à tenir",
        statement: "Un élève de 6e arrive régulièrement avec des ecchymoses et finit par confier au professeur de mathématiques qu'il est frappé à la maison. Quelle est la conduite à tenir ?",
        type: "mcq",
        options: [
          "Recueillir sa parole sans l'interroger de façon insistante, ne pas promettre le secret, alerter sans délai le chef d'établissement et les personnels sociaux et de santé, afin qu'une information préoccupante soit transmise au président du conseil départemental par la cellule de recueil des informations préoccupantes",
          "Appeler les parents le soir même pour vérifier les dires de l'enfant",
          "Attendre d'avoir des preuves supplémentaires avant d'en parler à quiconque",
          "Ne rien faire : la protection de l'enfance est l'affaire exclusive de l'infirmière"
        ],
        correctIndex: 0,
        answer: "Recueillir sa parole sans l'interroger de façon insistante, ne pas promettre le secret, alerter sans délai le chef d'établissement et les personnels sociaux et de santé, afin qu'une information préoccupante soit transmise au président du conseil départemental par la cellule de recueil des informations préoccupantes",
        hint1: "Code de l'action sociale et des familles, articles L. 226-2-1 et L. 226-3.",
        solution: "Lorsqu'un mineur est en danger ou en risque de l'être, une information préoccupante est transmise sans délai au président du conseil départemental, par la cellule de recueil des informations préoccupantes (CRIP), en application des articles L. 226-2-1 et L. 226-3 du Code de l'action sociale et des familles. L'enseignant n'enquête pas et ne contacte pas lui-même les parents (leur information préalable est prévue, sauf intérêt contraire de l'enfant, selon l'article L. 226-2-1) : il transmet ce qu'il a vu et entendu, en notant les propos de l'enfant tels qu'ils ont été dits, et travaille avec la direction et les personnels sociaux et de santé."
      },
      {
        id: "capes-oral2-41",
        chapterId: 'capes-oral2',
        tier: 4,
        title: "Danger grave et immédiat pour un élève",
        statement: "En fin de journée, une élève révèle au professeur qu'elle subit des violences graves de la part d'un adulte de son foyer et qu'elle a peur de rentrer chez elle ce soir. Que faire ?",
        type: "mcq",
        options: [
          "Ne pas la laisser repartir seule et alerter immédiatement le chef d'établissement : du fait de la gravité de la situation, le procureur de la République est avisé directement, avec copie au président du conseil départemental",
          "Lui conseiller de dormir chez une amie et en reparler le lendemain",
          "Rédiger une information préoccupante dans la semaine et laisser l'élève rentrer chez elle",
          "Prévenir la famille que l'élève a fait des révélations"
        ],
        correctIndex: 0,
        answer: "Ne pas la laisser repartir seule et alerter immédiatement le chef d'établissement : du fait de la gravité de la situation, le procureur de la République est avisé directement, avec copie au président du conseil départemental",
        hint1: "L'urgence change la voie de signalement.",
        solution: "Lorsqu'un professionnel avise directement le procureur de la République du fait de la gravité de la situation, il adresse une copie de cette transmission au président du conseil départemental (Code de l'action sociale et des familles, article L. 226-4, II). En pratique, le signalement est fait sans délai avec le chef d'établissement. La famille n'est pas informée lorsque c'est contraire à l'intérêt de l'enfant (article L. 226-2-1). L'enseignant ne reste pas seul, recueille les propos de l'élève sans l'interroger et les transmet fidèlement."
      },
      {
        id: "capes-oral2-42",
        chapterId: 'capes-oral2',
        tier: 4,
        title: "Article 40 du Code de procédure pénale",
        statement: "Un professeur découvre, dans l'exercice de ses fonctions, des faits susceptibles de constituer un délit commis au préjudice d'élèves. Quelle obligation pèse sur lui ?",
        type: "mcq",
        options: [
          "Comme tout fonctionnaire qui acquiert dans l'exercice de ses fonctions la connaissance d'un crime ou d'un délit, il doit en aviser sans délai le procureur de la République, en pratique en lien avec le chef d'établissement",
          "Aucune : seul le chef d'établissement est concerné par les procédures pénales",
          "Il doit d'abord mener sa propre enquête pour vérifier les faits",
          "Il ne doit signaler que les crimes, jamais les délits"
        ],
        correctIndex: 0,
        answer: "Comme tout fonctionnaire qui acquiert dans l'exercice de ses fonctions la connaissance d'un crime ou d'un délit, il doit en aviser sans délai le procureur de la République, en pratique en lien avec le chef d'établissement",
        hint1: "Article 40, alinéa 2, du Code de procédure pénale.",
        solution: "L'article 40, alinéa 2, du Code de procédure pénale impose à toute autorité constituée et à tout fonctionnaire qui, dans l'exercice de ses fonctions, acquiert la connaissance d'un crime ou d'un délit, d'en donner avis sans délai au procureur de la République. Le professeur n'enquête pas lui-même : il informe le chef d'établissement, avec qui le signalement est fait, sans que cela le dispense de son obligation personnelle."
      },
      {
        id: "capes-oral2-43",
        chapterId: 'capes-oral2',
        tier: 4,
        title: "Le jury cite l'avis du Conseil d'État de 1989",
        statement: "Le jury demande : « Un élève peut-il porter un signe religieux ostensible en cours, du moment qu'il ne fait ni prosélytisme ni trouble ? » Le candidat pense à l'avis du Conseil d'État du 27 novembre 1989. Quelle est la bonne réponse ?",
        type: "mcq",
        options: [
          "Non : cet avis, qui admettait le port de signes sauf pression, prosélytisme ou trouble, est dépassé dans les écoles, collèges et lycées publics par la loi du 15 mars 2004, qui interdit les signes et tenues manifestant ostensiblement une appartenance religieuse",
          "Oui : l'avis de 1989 reste la règle applicable aux élèves",
          "Oui, mais seulement au lycée, la loi de 2004 ne visant que le collège",
          "Non, car l'avis de 1989 interdisait déjà tout signe religieux aux élèves"
        ],
        correctIndex: 0,
        answer: "Non : cet avis, qui admettait le port de signes sauf pression, prosélytisme ou trouble, est dépassé dans les écoles, collèges et lycées publics par la loi du 15 mars 2004, qui interdit les signes et tenues manifestant ostensiblement une appartenance religieuse",
        hint1: "Situer chaque texte dans le temps : avis de 1989, puis loi de 2004.",
        solution: "En 1989, le Conseil d'État estimait que le port de signes religieux par les élèves n'était pas incompatible avec la laïcité, sauf pression, provocation, prosélytisme ou trouble. La loi du 15 mars 2004 (article L. 141-5-1 du Code de l'éducation) a tranché autrement pour les écoles, collèges et lycées publics : les signes et tenues manifestant ostensiblement une appartenance religieuse y sont interdits, les signes discrets restant permis. Citer l'avis de 1989 comme règle actuelle serait une erreur."
      },
      {
        id: "capes-oral2-44",
        chapterId: 'capes-oral2',
        tier: 4,
        title: "Ne pas connaître un numéro d'article devant le jury",
        statement: "Pendant l'entretien, le candidat veut appuyer sa réponse sur un texte mais ne se souvient plus du numéro exact de l'article. Quelle attitude le jury attend-il ?",
        type: "mcq",
        options: [
          "Ne citer que les textes dont il est sûr, nommer le principe et le texte de façon générale sans inventer de numéro, et raisonner à partir des principes et de la situation",
          "Inventer un numéro plausible pour montrer qu'il connaît les textes",
          "Refuser de répondre à la question tant qu'il n'a pas le texte sous les yeux",
          "Réciter le référentiel de compétences en entier pour compenser"
        ],
        correctIndex: 0,
        answer: "Ne citer que les textes dont il est sûr, nommer le principe et le texte de façon générale sans inventer de numéro, et raisonner à partir des principes et de la situation",
        hint1: "Une référence fausse coûte plus cher qu'une référence générale exacte.",
        solution: "Le jury évalue la compréhension du cadre et la justesse du raisonnement, pas une mémoire de numéros. Mieux vaut dire « le statut des fonctionnaires impose la neutralité » que citer un article inexact. Le candidat nomme les principes (neutralité, laïcité, protection des élèves, travail en équipe), s'appuie sur les textes qu'il connaît sûrement et montre comment il agirait concrètement."
      },
      {
        id: "capes-oral2-45",
        chapterId: 'capes-oral2',
        tier: 4,
        title: "Format de l'épreuve d'entretien (concours bac + 5)",
        statement: "Quelle description de l'épreuve d'entretien du CAPES externe (concours bac + 5) est exacte ?",
        type: "mcq",
        options: [
          "35 minutes, coefficient 3, sans préparation, note 0 éliminatoire : une première partie de 15 minutes ouverte par une présentation de 5 minutes, puis 20 minutes comportant deux mises en situation professionnelles, l'une d'enseignement, l'autre relative à la vie scolaire",
          "1 heure de préparation puis 1 heure d'exposé sur une leçon de mathématiques",
          "Un questionnaire écrit sur les textes réglementaires, noté sur 20 et non éliminatoire",
          "Une épreuve de 35 minutes consacrée uniquement à la motivation du candidat"
        ],
        correctIndex: 0,
        answer: "35 minutes, coefficient 3, sans préparation, note 0 éliminatoire : une première partie de 15 minutes ouverte par une présentation de 5 minutes, puis 20 minutes comportant deux mises en situation professionnelles, l'une d'enseignement, l'autre relative à la vie scolaire",
        hint1: "L'épreuve est commune à toutes les disciplines et s'appuie sur la fiche individuelle de renseignement.",
        solution: "L'épreuve d'entretien dure 35 minutes, coefficient 3, sans préparation, et la note 0 est éliminatoire. La première partie (15 minutes) porte sur la motivation et le parcours ; elle s'ouvre par une présentation de 5 minutes appuyée sur la fiche individuelle de renseignement. La seconde partie (20 minutes) comporte deux mises en situation professionnelles : l'une d'enseignement, l'autre relative à la vie scolaire. Le jury apprécie l'aptitude à s'approprier les valeurs de la République et les exigences du service public."
      },
      {
        id: "capes-oral2-46",
        chapterId: 'capes-oral2',
        tier: 4,
        title: "Seconde partie de l'entretien au concours bac + 3",
        statement: "Au concours organisé au niveau bac + 3 à partir de la session 2026, sur quoi porte la seconde partie de l'épreuve d'entretien ?",
        type: "mcq",
        options: [
          "Un entretien de 20 minutes, comportant une mise en situation, sur les valeurs de la République dont la laïcité, la projection dans le métier, les exigences du service public, la transition écologique et l'épanouissement de l'élève",
          "Une leçon de mathématiques préparée à l'avance",
          "Exclusivement l'histoire du système éducatif",
          "Un commentaire de copie d'élève sans lien avec les valeurs de la République"
        ],
        correctIndex: 0,
        answer: "Un entretien de 20 minutes, comportant une mise en situation, sur les valeurs de la République dont la laïcité, la projection dans le métier, les exigences du service public, la transition écologique et l'épanouissement de l'élève",
        hint1: "La première partie (motivation et parcours) est commune aux deux concours ; la seconde diffère.",
        solution: "Pour le concours de niveau bac + 3 (arrêté du 17 avril 2025 modifié), l'épreuve dure 35 minutes, coefficient 3, note 0 éliminatoire. Après 15 minutes consacrées à la motivation et au parcours, elle se poursuit par 20 minutes d'entretien, au travers de questionnements divers dont une mise en situation. L'entretien porte sur l'appréhension des valeurs de la République, dont la laïcité, la projection dans le métier, les exigences du service public (neutralité, lutte contre les discriminations), la transition écologique et l'épanouissement de l'élève. Au concours bac + 5, la seconde partie comporte deux mises en situation professionnelles (enseignement et vie scolaire)."
      },
      {
        id: "capes-oral2-47",
        chapterId: 'capes-oral2',
        tier: 4,
        title: "Répondre à la question de motivation",
        statement: "Le jury demande : « Pourquoi voulez-vous devenir professeur de mathématiques ? » Quelle réponse est la mieux construite ?",
        type: "mcq",
        options: [
          "Relier son parcours à une conception argumentée du métier (transmission des savoirs, exigence, accompagnement de tous les élèves, travail en équipe), illustrée par un exemple concret vécu",
          "Réciter les quatorze compétences du référentiel de 2013 dans l'ordre",
          "Mettre en avant la sécurité de l'emploi et la durée des vacances",
          "Répondre que l'on aime les mathématiques, sans évoquer les élèves"
        ],
        correctIndex: 0,
        answer: "Relier son parcours à une conception argumentée du métier (transmission des savoirs, exigence, accompagnement de tous les élèves, travail en équipe), illustrée par un exemple concret vécu",
        hint1: "Le jury cherche une conviction personnelle étayée, pas une récitation.",
        solution: "La question de motivation attend une réponse personnelle et argumentée. Le candidat relie son parcours (études, expériences auprès d'élèves, engagements) à sa conception du métier : transmettre des savoirs exigeants, accompagner tous les élèves, travailler en équipe et avec les familles. Un exemple concret vaut mieux que la récitation du référentiel ; la passion pour la discipline est un point de départ, pas une réponse complète."
      },
      {
        id: "capes-oral2-48",
        chapterId: 'capes-oral2',
        tier: 4,
        title: "Le devoir de réserve : d'où vient-il ?",
        statement: "Le jury demande au candidat d'où vient le devoir de réserve des fonctionnaires. Quelle réponse est exacte ?",
        type: "mcq",
        options: [
          "C'est une construction de la jurisprudence administrative, qui encadre l'expression publique de l'agent et s'apprécie selon ses fonctions et les circonstances ; il ne figure pas en tant que tel dans le Code général de la fonction publique",
          "Il est défini par un article précis de la Constitution de 1958",
          "Il a été créé par la loi du 15 mars 2004",
          "Il interdit au fonctionnaire toute opinion politique, même en privé"
        ],
        correctIndex: 0,
        answer: "C'est une construction de la jurisprudence administrative, qui encadre l'expression publique de l'agent et s'apprécie selon ses fonctions et les circonstances ; il ne figure pas en tant que tel dans le Code général de la fonction publique",
        hint1: "Distinguer neutralité (en service, écrite dans le statut) et réserve (expression publique, d'origine jurisprudentielle).",
        solution: "Le Code général de la fonction publique énonce la neutralité, la laïcité, la dignité, l'impartialité, l'intégrité, la probité, le secret et la discrétion professionnels. Le devoir de réserve, lui, n'y figure pas : c'est une construction jurisprudentielle qui impose à l'agent de la mesure dans l'expression publique de ses opinions, appréciée au cas par cas selon son niveau de responsabilité et le contexte. Il ne supprime pas la liberté d'opinion, garantie par le statut."
      },
      {
        id: "capes-oral2-49",
        chapterId: 'capes-oral2',
        tier: 4,
        title: "Alerte de mise en sûreté pendant un cours",
        statement: "Pendant un cours de mathématiques, l'alarme spécifique « mise en sûreté » retentit. Quelle doit être la réaction du professeur ?",
        type: "mcq",
        options: [
          "Appliquer sans délai les consignes du plan particulier de mise en sûreté (PPMS) de l'établissement, connues à l'avance et travaillées lors des exercices, en gardant le contrôle de la classe et en rassurant les élèves",
          "Faire sortir tous les élèves dans la cour comme pour une alarme incendie",
          "Continuer le cours en attendant de savoir s'il s'agit d'un exercice",
          "Laisser chaque élève appeler sa famille avant de décider quoi faire"
        ],
        correctIndex: 0,
        answer: "Appliquer sans délai les consignes du plan particulier de mise en sûreté (PPMS) de l'établissement, connues à l'avance et travaillées lors des exercices, en gardant le contrôle de la classe et en rassurant les élèves",
        hint1: "Les consignes ne s'improvisent pas le jour de l'alerte.",
        solution: "Chaque école et établissement dispose d'un plan particulier de mise en sûreté (PPMS), qui fixe les moyens d'alerte, distincts de l'alarme incendie, et les conduites à tenir selon le danger ; au moins deux exercices PPMS ont lieu chaque année (circulaire du 8 juin 2023). Le professeur doit connaître ces consignes dès sa prise de fonction et les appliquer sans improviser : un signal de mise en sûreté n'appelle pas la même réaction qu'une alarme incendie. Il garde la responsabilité de sa classe et adopte une attitude calme."
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
