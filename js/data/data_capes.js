/**
 * DATA_CAPES - Fiches de préparation au CAPES de mathématiques :
 *  - capes-01 à capes-10 : compléments disciplinaires de niveau licence (champ « complement ») ;
 *  - capes-11 à capes-15 : leçons ancrées dans les programmes du collège et du lycée ;
 *  - capes-oral2 et capes-oral2-cas : épreuve d'entretien (oral 2).
 */

(function () {
  'use strict';

  const CAPES_LESSONS = [
    {
      "id": "capes-01",
      "num": "Compl. 01",
      "title": "Équations différentielles linéaires : résolution, structure et modélisation",
      "domain": "Analyse",
      "level": "CAPES — complément disciplinaire (niveau licence)",
      "complement": true,
      "prerequisites": [
        "Situation dans les programmes : en première, l'exponentielle est définie comme l'unique fonction dérivable égale à sa dérivée et valant 1 en 0 ; en terminale spécialité, résolution de $y' = ay$, $y' = ay + b$ et $y' = ay + f$ (une solution particulière étant fournie), avec des modélisations issues de la physique ou de la biologie.",
        "Dérivation et primitives : toute fonction continue sur un intervalle admet des primitives ; une fonction de dérivée nulle sur un intervalle est constante (théorème des accroissements finis).",
        "Algèbre linéaire : espaces vectoriels de fonctions, applications linéaires, noyau, sous-espaces affines, dimension.",
        "Exponentielle réelle et complexe, nombres complexes et racines d'un trinôme à discriminant négatif."
      ],
      "plan": [
        {
          "part": "I. Équations scalaires du premier ordre : linéaires, puis à variables séparables",
          "content": "Sur un intervalle $I$, avec $a, b$ continues, on étudie $(E) : y' + a(t)y = b(t)$ et l'équation homogène associée $(E_H)$. Théorème : les solutions de $(E_H)$ sont les fonctions $t \\mapsto Ce^{-A(t)}$, où $A$ est une primitive de $a$, et celles de $(E)$ forment une droite affine dirigée par cette droite vectorielle. Méthode de variation de la constante : on cherche $y = C(t)e^{-A(t)}$, ce qui impose $C' = be^{A}$. Théorème de Cauchy linéaire : pour tout $(t_0, y_0) \\in I \\times \\mathbb{R}$, il existe une unique solution vérifiant $y(t_0) = y_0$, définie sur tout $I$. Exemple : les solutions de $y' + 2ty = t$ sont les fonctions $t \\mapsto \\frac{1}{2} + Ce^{-t^2}$. Applications : décroissance radioactive, loi de refroidissement de Newton, charge d'un condensateur. Équations $\\alpha(t)y' + \\beta(t)y = \\gamma(t)$ où $\\alpha$ s'annule : résolution par intervalles puis raccordement. **Équations à variables séparables (programme de la voie bac+3).** Une équation $(S) : y' = f(t)g(y)$, avec $f$ continue sur un intervalle $I$ et $g$ de classe $\\mathcal{C}^1$ sur un intervalle $J$, n'est en général pas linéaire. On raisonne en quatre temps. (1) Si $g(c) = 0$, la fonction constante égale à $c$ est solution. (2) Le théorème de Cauchy-Lipschitz, admis à ce niveau, assure que deux solutions égales en un point coïncident sur leur intervalle commun de définition : une solution non constante ne prend donc jamais une valeur où $g$ s'annule. (3) Sur un intervalle où $g(y(t)) \\neq 0$, on écrit $\\frac{y'(t)}{g(y(t))} = f(t)$ ; si $G$ est une primitive de $\\frac{1}{g}$ et $F$ une primitive de $f$, alors $G(y(t)) = F(t) + C$. (4) $G$ est strictement monotone là où $g$ garde un signe constant : on l'inverse, puis on détermine l'intervalle maximal, qui dépend de la condition initiale. Exemple : pour $y' = 2ty^2$ et $y(0) = y_0 \\neq 0$, on obtient $-\\frac{1}{y} = t^2 - \\frac{1}{y_0}$, soit $y(t) = \\frac{y_0}{1 - y_0t^2}$, définie sur $\\mathbb{R}$ si $y_0 < 0$ et sur $\\left]-\\frac{1}{\\sqrt{y_0}} ; \\frac{1}{\\sqrt{y_0}}\\right[$ si $y_0 > 0$. L'hypothèse de régularité sur $g$ compte : si $g$ est seulement continue, l'unicité peut tomber, comme pour $y' = 2\\sqrt{|y|}$, $y(0) = 0$, qui admet la solution nulle et la fonction égale à $t^2$ sur $[0 ; +\\infty[$ et à $0$ sur $]-\\infty ; 0]$."
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
        "Équation logistique (niveau L1, variables séparables) : pour $r, K > 0$ et $0 < y_0 < K$, résolution de $y' = ry\\left(1 - \\frac{y}{K}\\right)$, $y(0) = y_0$, par décomposition en éléments simples de $\\frac{1}{y(K - y)}$. On obtient $y(t) = \\frac{K}{1 + \\left(\\frac{K}{y_0} - 1\\right)e^{-rt}}$, définie sur $\\mathbb{R}$, qui reste dans $]0 ; K[$ et tend vers $K$ en $+\\infty$ ; les solutions constantes $0$ et $K$ encadrent les autres. Lien avec la modélisation d'une population en terminale.",
        "Oscillateur harmonique amorti (niveau L1, lien avec la physique de terminale) : résolution de $x'' + 2\\lambda x' + \\omega_0^2x = 0$ avec $\\lambda > 0$ selon le signe de $\\lambda^2 - \\omega_0^2$, preuve que toute solution tend vers 0, et vérification que le régime critique $\\lambda = \\omega_0$ maximise le taux de décroissance exponentielle.",
        "Exponentielle d'une matrice $2 \\times 2$ (niveau L2) : par le théorème de Cayley-Hamilton, $A^2 = (\\mathrm{tr}A)A - (\\det A)I_2$, donc $e^{tA} = \\alpha(t)I_2 + \\beta(t)A$ ; on détermine $\\alpha$ et $\\beta$ à l'aide des valeurs propres, puis on résout le système $Y' = AY$.",
        "Variation des constantes à l'ordre 2 (niveau L2) : recherche de $y = \\lambda(t)y_1 + \\mu(t)y_2$ sous la condition $\\lambda'y_1 + \\mu'y_2 = 0$, rôle du wronskien qui ne s'annule pas, et exemple de $y'' + y = \\frac{1}{\\cos t}$ sur $]-\\frac{\\pi}{2} ; \\frac{\\pi}{2}[$.",
        "Équation $y' = ay + b$ en terminale (niveau lycée) : unicité de la solution par l'étude de $t \\mapsto (y(t) - y_\\ast(t))e^{-at}$, solution d'équilibre $-\\frac{b}{a}$ et comportement en $+\\infty$ selon le signe de $a$, appliqués à la loi de refroidissement de Newton."
      ],
      "juryTips": [
        "Précisez toujours l'intervalle de résolution. Pour une équation $\\alpha(t)y' + \\beta(t)y = \\gamma(t)$ où $\\alpha$ s'annule, on résout sur chaque intervalle où $\\alpha$ ne s'annule pas, puis on étudie le raccordement : pour $ty' - 2y = 0$, les solutions sur $\\mathbb{R}$ sont les fonctions égales à $Ct^2$ sur $[0 ; +\\infty[$ et à $Dt^2$ sur $]-\\infty ; 0]$, ce qui forme un espace de dimension 2 et non 1.",
        "L'argument « dérivée nulle implique constante » exige un intervalle : sur $\\mathbb{R}^{\\ast}$, la fonction égale à 1 sur $]0 ; +\\infty[$ et à $-1$ sur $]-\\infty ; 0[$ a une dérivée nulle sans être constante.",
        "Séparer les variables, c'est diviser par $g(y)$ : on doit d'abord traiter les solutions constantes, puis justifier que $g(y(t))$ ne s'annule pas sur l'intervalle étudié. Oublier ce point fait perdre des solutions : pour $y' = 2ty^2$, la formule $y(t) = \\frac{1}{C - t^2}$ ne contient pas la solution nulle.",
        "L'existence globale des solutions est propre au cas linéaire : l'équation non linéaire $y' = y^2$ avec $y(0) = 1$ a pour solution maximale $t \\mapsto \\frac{1}{1-t}$, définie sur $]-\\infty ; 1[$, qui explose en temps fini.",
        "En cas de résonance, $y'' + \\omega^2y = \\cos(\\omega t)$ n'admet pas de solution de la forme $A\\cos(\\omega t) + B\\sin(\\omega t)$ mais admet $t \\mapsto \\frac{t}{2\\omega}\\sin(\\omega t)$ : sachez l'expliquer par le fait que $i\\omega$ est racine caractéristique.",
        "Le jury demande de situer la notion : en première, l'unicité de la fonction égale à sa dérivée et valant 1 en 0 se démontre en étudiant le quotient de deux telles fonctions, ce qui est le même argument que l'étape 2 de la preuve de structure."
      ]
    },
    {
      "id": "capes-02",
      "num": "Compl. 02",
      "title": "Réduction des endomorphismes : éléments propres, diagonalisation et trigonalisation",
      "domain": "Algèbre",
      "level": "CAPES — complément disciplinaire (niveau licence)",
      "complement": true,
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
      "num": "Compl. 03",
      "title": "Séries de Fourier : coefficients, convergence et formule de Parseval",
      "domain": "Analyse",
      "level": "CAPES — complément disciplinaire (niveau licence)",
      "complement": true,
      "prerequisites": [
        "Pour aller plus loin : les séries de Fourier ne figurent pas dans les programmes des écrits du CAPES externe de mathématiques (ni voie bac+3 ni voie bac+5) ; ces textes ne les excluent pas pour autant. Ce chapitre est un approfondissement, utile pour le recul et le lien avec la physique, à ne pas privilégier sur le temps de préparation des écrits.",
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
      "num": "Compl. 04",
      "title": "Variables aléatoires réelles discrètes : loi, espérance, variance et lois classiques",
      "domain": "Probabilités",
      "level": "CAPES — complément disciplinaire (niveau licence)",
      "complement": true,
      "prerequisites": [
        "Situation dans les programmes : en première, variable aléatoire sur un univers fini, loi, espérance, variance et écart-type ; en terminale spécialité, loi binomiale, somme de variables aléatoires, inégalité de Bienaymé-Tchebychev, inégalité de concentration et loi faible des grands nombres ; la loi géométrique et les lois à densité (uniforme, exponentielle) figurent dans l'option mathématiques complémentaires.",
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
        },
        {
          "part": "IV. Variables à densité : loi uniforme et loi exponentielle",
          "content": "Une densité est une fonction $f : \\mathbb{R} \\to \\mathbb{R}_+$, continue sauf en un nombre fini de points, dont l'intégrale généralisée sur $\\mathbb{R}$ converge et vaut 1 (voir la fiche Compl. 06 pour les intégrales généralisées). Une variable $X$ a pour densité $f$ si $P(X \\le t) = \\int_{-\\infty}^t f(u)\\,du$ pour tout réel $t$. Alors $F_X$ est continue, dérivable de dérivée $f$ aux points de continuité de $f$, $P(X = t) = 0$ pour tout $t$ et $P(a \\le X \\le b) = \\int_a^b f$ : la probabilité se lit comme une aire. Espérance : si $\\int_{\\mathbb{R}}|t|f(t)\\,dt$ converge, $E(X) = \\int_{\\mathbb{R}}tf(t)\\,dt$ ; la variance se calcule par $V(X) = E(X^2) - E(X)^2$, avec $E(X^2) = \\int_{\\mathbb{R}}t^2f(t)\\,dt$ (théorème de transfert, admis dans ce cadre). Loi uniforme sur $[a ; b]$ : densité $\\frac{1}{b-a}$ sur $[a ; b]$, nulle ailleurs, $E(X) = \\frac{a+b}{2}$ et $V(X) = \\frac{(b-a)^2}{12}$. Loi exponentielle $\\mathcal{E}(\\lambda)$, $\\lambda > 0$ : densité $t \\mapsto \\lambda e^{-\\lambda t}$ sur $\\mathbb{R}_+$, nulle ailleurs, $P(X > t) = e^{-\\lambda t}$ pour $t \\ge 0$, $E(X) = \\frac{1}{\\lambda}$, $V(X) = \\frac{1}{\\lambda^2}$ et absence de mémoire : $P(X > s + t \\mid X > s) = P(X > t)$ pour $s, t \\ge 0$. C'est l'analogue continu de la loi géométrique : si $X_n$ suit la loi $\\mathcal{G}\\left(\\frac{\\lambda}{n}\\right)$, alors $P\\left(\\frac{X_n}{n} > t\\right) \\to e^{-\\lambda t}$ pour tout $t \\ge 0$."
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
        "L'additivité de la variance n'est pas automatique : $V(X + Y) = V(X) + V(Y)$ équivaut à $\\mathrm{Cov}(X, Y) = 0$. La non-corrélation suffit, en particulier l'indépendance. Contre-exemple sans cette hypothèse : pour $Y = -X$ avec $V(X) > 0$, $V(X + Y) = 0$ alors que $V(X) + V(Y) = 2V(X)$.",
        "L'inégalité de Bienaymé-Tchebychev est souvent grossière : pour $X$ de loi $\\mathcal{B}(100, \\frac{1}{2})$, elle donne $P(|X - 50| \\ge 10) \\le 0{,}25$ alors que la valeur exacte est environ $0{,}057$. Le jury attend que l'on sache commenter cet écart.",
        "Situer la notion : au lycée, les variables sont définies sur un univers fini et la loi est donnée par un tableau ; le passage au dénombrable, avec les lois géométrique et de Poisson, est ce qui rend nécessaires les séries et la convergence absolue."
      ]
    },
    {
      "id": "capes-05",
      "num": "Compl. 05",
      "title": "Espaces préhilbertiens réels, orthogonalité et projections orthogonales",
      "domain": "Géométrie & Algèbre",
      "level": "CAPES — complément disciplinaire (niveau licence)",
      "complement": true,
      "prerequisites": [
        "Situation dans les programmes : théorème de Pythagore et distance d'un point à une droite au collège ; produit scalaire dans le plan en première (projection orthogonale, norme, formule d'Al-Kashi, expression en repère orthonormé) ; produit scalaire dans l'espace, orthogonalité et projeté orthogonal sur une droite ou un plan en terminale spécialité.",
        "Espaces vectoriels réels, familles libres et génératrices, dimension, sous-espaces supplémentaires.",
        "Formes bilinéaires symétriques et formes quadratiques, identités de polarisation.",
        "Trinôme du second degré : signe et discriminant.",
        "Place au programme : les parties IV et V (orientation, isométries vectorielles en dimension 2 et 3, applications affines usuelles, isométries affines du plan) relèvent du programme des écrits de la voie bac + 3. Pour la géométrie du triangle et les barycentres, voir aussi le chapitre de licence L1-11 « Géométrie euclidienne plane, repères orthonormés et coniques » et la partie V ci-dessous pour la conservation des barycentres ; le complément 08 utilise les combinaisons convexes (barycentres à coefficients positifs) pour définir la convexité et l'inégalité de Jensen ; pour les matrices orthogonales, le chapitre L2-06 « Endomorphismes symétriques, groupe orthogonal et Théorème Spectral »."
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
        },
        {
          "part": "IV. Orientation et isométries vectorielles",
          "content": "Dans un espace euclidien $E$ de dimension $n$, une isométrie vectorielle est un endomorphisme $u$ qui conserve la norme ; par polarisation, cela équivaut à conserver le produit scalaire, ou à transformer une base orthonormée en une base orthonormée. Sa matrice $A$ dans une base orthonormée vérifie $A^{\\top}A = I_n$, donc $\\det A = \\pm 1$. Les isométries forment le groupe orthogonal $\\mathrm{O}(E)$ ; celles de déterminant $1$ forment le sous-groupe $\\mathrm{SO}(E)$ des rotations. Orientation : deux bases ont la même orientation lorsque le déterminant de la matrice de passage de l'une à l'autre est strictement positif ; orienter $E$, c'est choisir l'une des deux classes, dont les bases sont dites directes. Les rotations sont les isométries qui transforment une base orthonormée directe en une base orthonormée directe. Dimension 2 : dans toute base orthonormée directe, une rotation a pour matrice $R_\\theta = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$, avec $\\theta$ défini modulo $2\\pi$ indépendamment de cette base (c'est l'angle de la rotation), et $R_\\theta R_\\varphi = R_{\\theta + \\varphi}$, donc $\\mathrm{SO}(2)$ est commutatif ; une isométrie de déterminant $-1$ a pour matrice $\\begin{pmatrix} \\cos\\theta & \\sin\\theta \\\\ \\sin\\theta & -\\cos\\theta \\end{pmatrix}$ : c'est la réflexion (symétrie orthogonale) d'axe la droite dirigée par $\\left(\\cos\\frac{\\theta}{2} ; \\sin\\frac{\\theta}{2}\\right)$. Toute rotation du plan est la composée de deux réflexions. Dimension 3 : une rotation $u \\neq \\mathrm{id}$ a pour axe la droite $D = \\mathrm{Ker}(u - \\mathrm{id})$ ; dans une base orthonormée directe $(e_1, e_2, e_3)$ avec $e_1$ dirigeant $D$, sa matrice est $\\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & \\cos\\theta & -\\sin\\theta \\\\ 0 & \\sin\\theta & \\cos\\theta \\end{pmatrix}$, d'où $\\mathrm{tr}\\,u = 1 + 2\\cos\\theta$, qui donne $\\theta$ au signe près (le signe dépend de l'orientation choisie sur l'axe). Les isométries de déterminant $-1$ de l'espace sont les composées d'une rotation d'axe $D$ et de la réflexion par rapport au plan $D^{\\perp}$ ; les réflexions et $-\\mathrm{id}$ en sont des cas particuliers."
        },
        {
          "part": "V. Applications affines et isométries affines du plan",
          "content": "Une application $f$ d'un espace affine $\\mathcal{E}$ dans lui-même est affine s'il existe une application linéaire $\\vec{f}$, sa partie linéaire, telle que $f(M) = f(O) + \\vec{f}(\\overrightarrow{OM})$ pour tout point $M$ ; cette propriété ne dépend pas du point $O$ choisi. En repère, $f$ s'écrit $X' = AX + B$. Une application affine conserve les barycentres : si $G$ est le barycentre de $(A_i, \\lambda_i)_{1 \\le i \\le p}$, avec $\\sum\\lambda_i \\neq 0$, alors $f(G)$ est le barycentre de $(f(A_i), \\lambda_i)_{1 \\le i \\le p}$ ; elle conserve donc les milieux, l'alignement et le parallélisme. Exemples usuels : les translations ($\\vec{f} = \\mathrm{id}$) ; une application affine de partie linéaire $k\\,\\mathrm{id}$ avec $k \\notin \\{0 ; 1\\}$ a un unique point fixe $\\Omega$ et c'est l'homothétie de centre $\\Omega$ et de rapport $k$, caractérisée par $\\overrightarrow{\\Omega f(M)} = k\\,\\overrightarrow{\\Omega M}$ ; la projection $p$ sur un sous-espace affine $\\mathcal{F}$ parallèlement à un sous-espace vectoriel $G$ supplémentaire de la direction de $\\mathcal{F}$, et la symétrie $s$ associée, $s(M)$ étant le symétrique de $M$ par rapport à $p(M)$. Une application affine telle que $f \\circ f = f$ est une projection ; une application affine telle que $f \\circ f = \\mathrm{id}$ est une symétrie. Isométries affines : applications affines dont la partie linéaire est une isométrie vectorielle ; elles conservent les distances, et réciproquement toute application de l'espace affine euclidien dans lui-même qui conserve les distances est affine. Classification dans le plan, selon la partie linéaire et les points fixes : si $\\vec{f} = \\mathrm{id}$, $f$ est une translation ; si $\\vec{f}$ est une rotation d'angle $\\theta \\not\\equiv 0 \\pmod{2\\pi}$, $f$ a un unique point fixe $\\Omega$ et c'est la rotation de centre $\\Omega$ et d'angle $\\theta$ ; si $\\vec{f}$ est une réflexion vectorielle, $f$ est une réflexion d'axe une droite $\\mathcal{D}$ lorsqu'elle a un point fixe, et sinon une symétrie glissée $t_{\\vec{v}} \\circ s_{\\mathcal{D}}$, où $\\vec{v} \\neq \\vec{0}$ dirige $\\mathcal{D}$, décomposition unique dont les deux facteurs commutent. Les déplacements (partie linéaire de déterminant $1$) sont donc les translations et les rotations, les antidéplacements les réflexions et les symétries glissées. Les similitudes sont les composées d'une isométrie et d'une homothétie ; en écriture complexe, ce sont les applications $z \\mapsto az + b$ et $z \\mapsto a\\bar{z} + b$ avec $a \\neq 0$ (leçon 12)."
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
      "num": "Compl. 06",
      "title": "Intégrale de Riemann, primitives et intégrales à paramètres",
      "domain": "Analyse",
      "level": "CAPES — complément disciplinaire (niveau licence)",
      "complement": true,
      "prerequisites": [
        "Situation dans les programmes : en terminale spécialité, intégrale d'une fonction continue positive définie comme aire sous la courbe, théorème fondamental (démontré pour une fonction continue positive croissante, admis en général), existence de primitives admise, linéarité, positivité, relation de Chasles, valeur moyenne, intégration par parties ; méthode des rectangles en algorithmique.",
        "Pour aller plus loin : les intégrales dépendant d'un paramètre (partie IV) ne sont citées ni par le programme des écrits de la voie bac + 3 ni par celui de la voie bac + 5. Cette partie est un approfondissement, à aborder après les parties I à III (intégrale sur un segment, primitives, intégrales généralisées), qui relèvent, elles, du programme de la voie bac + 3.",
        "Chapitres de licence du site utiles ici : L1-09 « Formules de Taylor, développements limités et étude locale » (Taylor avec reste intégral), L2-11 « Intégrales dépendant d'un paramètre et convergence dominée » pour approfondir la partie IV.",
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
          "part": "III. Intégrales généralisées",
          "content": "Soit $f$ continue par morceaux sur $[a ; b[$, avec $b$ réel ou $b = +\\infty$. L'intégrale $\\int_a^b f$ converge si $x \\mapsto \\int_a^x f$ admet une limite finie quand $x$ tend vers $b$ ; on procède de même à la borne gauche, et pour un intervalle ouvert on coupe en un point intermédiaire, chaque moitié devant converger. Références : $\\int_1^{+\\infty}\\frac{dt}{t^{\\alpha}}$ converge si et seulement si $\\alpha > 1$, $\\int_0^1\\frac{dt}{t^{\\alpha}}$ si et seulement si $\\alpha \\lt 1$, $\\int_0^{+\\infty}e^{-\\lambda t}\\,dt = \\frac{1}{\\lambda}$ pour $\\lambda > 0$, $\\int_0^1\\ln t\\,dt = -1$. Si $f \\ge 0$, la fonction $x \\mapsto \\int_a^x f$ est croissante, donc la convergence équivaut à sa majoration. On en déduit, pour des fonctions positives, la comparaison (si $0 \\le f \\le g$ au voisinage de $b$, la convergence de $\\int_a^b g$ entraîne celle de $\\int_a^b f$) et le critère d'équivalence (si $f \\sim g$ en $b$, les deux intégrales ont même nature). Convergence absolue : si $\\int_a^b|f|$ converge, alors $\\int_a^b f$ converge ; la réciproque est fausse, $\\int_1^{+\\infty}\\frac{\\sin t}{t}\\,dt$ étant semi-convergente. L'intégration par parties se fait sur un segment $[a ; x]$ avant de passer à la limite ; un changement de variable par une bijection strictement monotone de classe $\\mathcal{C}^1$ conserve la nature et la valeur. Comparaison série-intégrale : pour $f$ continue, positive et décroissante sur $[1 ; +\\infty[$, l'encadrement $f(k+1) \\le \\int_k^{k+1}f \\le f(k)$ montre que $\\sum f(n)$ et $\\int_1^{+\\infty}f$ ont même nature, ce qui redonne les séries de Riemann."
        },
        {
          "part": "IV. Pour aller plus loin : intégrales dépendant d'un paramètre",
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
        "Situer la notion : en terminale, l'intégrale est introduite par l'aire et l'existence des primitives des fonctions continues est admise ; le jury apprécie que le candidat dise précisément ce que la construction de Riemann permet de démontrer.",
        "La convergence de $\\int_1^{+\\infty}f$ n'entraîne pas que $f$ tende vers 0 : $\\int_1^{+\\infty}\\sin(t^2)\\,dt$ converge (changement de variable $u = t^2$, puis intégration par parties), alors que $\\sin(t^2)$ n'a pas de limite en $+\\infty$. L'analogie avec les séries, pour lesquelles le terme général tend vers 0, s'arrête là."
      ]
    },
    {
      "id": "capes-07",
      "num": "Compl. 07",
      "title": "Groupe symétrique, signature et applications aux déterminants",
      "domain": "Algèbre",
      "level": "CAPES — complément disciplinaire (niveau licence)",
      "complement": true,
      "prerequisites": [
        "Situation dans les programmes : dénombrement des permutations, des arrangements et des combinaisons en terminale spécialité ($n!$ permutations d'un ensemble à $n$ éléments) ; déterminant de deux vecteurs du plan et critère de colinéarité en seconde.",
        "Place au programme : le programme des écrits de la voie bac + 3 cite les groupes symétriques et le déterminant, mais pas le mot « signature ». Elle est traitée ici parce qu'elle sert à définir le déterminant (partie III) et à établir ses propriétés, qui figurent aux programmes des deux voies.",
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
        },
        {
          "part": "IV. Groupes laissant invariante une figure : le groupe diédral",
          "content": "Pour une partie $\\mathcal{F}$ du plan ou de l'espace, les isométries $f$ telles que $f(\\mathcal{F}) = \\mathcal{F}$ forment un groupe, qui agit sur $\\mathcal{F}$ ; pour une figure finie, chacune fixe l'isobarycentre de ses points. Pour un polygone régulier à $n \\ge 3$ côtés de centre $O$, ce groupe est le groupe diédral $D_n$, d'ordre $2n$ (certains ouvrages le notent $D_{2n}$ : préciser sa notation). Il est formé des $n$ rotations $r^k$ de centre $O$, où $r$ est d'angle $\\frac{2\\pi}{n}$, et de $n$ symétries axiales. Si $s$ est l'une d'elles, alors $D_n = \\langle r, s\\rangle$, avec $r^n = s^2 = \\mathrm{id}$ et $srs = r^{-1}$ ; tout élément s'écrit $r^k$ ou $r^ks$, avec $0 \\le k \\lt n$. L'élément $r^k$ est d'ordre $\\frac{n}{\\operatorname{pgcd}(n, k)}$ et chaque $r^ks$ est d'ordre 2. Axes : si $n$ est impair, chaque axe passe par un sommet et le milieu du côté opposé ; si $n$ est pair, $\\frac{n}{2}$ axes passent par deux sommets opposés et $\\frac{n}{2}$ par les milieux de deux côtés opposés. L'action sur les $n$ sommets fournit un morphisme injectif $D_n \\to \\mathcal{S}_n$ : ainsi $D_3 \\simeq \\mathcal{S}_3$, et $D_4$ est un sous-groupe d'ordre 8 de $\\mathcal{S}_4$. Dans l'espace, les isométries d'un tétraèdre régulier forment un groupe isomorphe à $\\mathcal{S}_4$ par l'action sur les sommets, ses déplacements correspondant à $\\mathcal{A}_4$ ; les rotations d'un cube forment aussi un groupe isomorphe à $\\mathcal{S}_4$, par l'action sur les quatre grandes diagonales."
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
        "Lien avec le secondaire : le déterminant de deux vecteurs vu en seconde, $\\det(\\vec{u}, \\vec{v}) = xy' - x'y$, est le cas $n = 2$ de la formule de Leibniz ; sachez l'interpréter comme une aire orientée.",
        "Le groupe diédral est un sujet naturel d'exposé sur les groupes : savoir démontrer que $D_n$ a $2n$ éléments (une isométrie du polygone est déterminée par les images d'un sommet et d'un sommet voisin), que les rotations forment un sous-groupe distingué d'indice 2, et que $D_3 \\simeq \\mathcal{S}_3$ alors que $D_4$ n'est qu'un sous-groupe de $\\mathcal{S}_4$."
      ]
    },
    {
      "id": "capes-08",
      "num": "Compl. 08",
      "title": "Convexité des fonctions réelles d'une variable réelle et applications",
      "domain": "Analyse",
      "level": "CAPES — complément disciplinaire (niveau licence)",
      "complement": true,
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
          "content": "Inégalité de Jensen discrète $f\\left(\\sum p_ix_i\\right) \\le \\sum p_if(x_i)$ pour des poids positifs de somme 1, et version intégrale $f\\left(\\frac{1}{b-a}\\int_a^b g\\right) \\le \\frac{1}{b-a}\\int_a^b f \\circ g$ pour $g$ continue sur $[a ; b]$ et $f$ convexe sur un intervalle ouvert contenant les valeurs de $g$. Inégalité arithmético-géométrique $\\sqrt[n]{x_1 \\cdots x_n} \\le \\frac{x_1 + \\cdots + x_n}{n}$ pour des réels positifs, par la concavité de $\\ln$ ; inégalité de Young $ab \\le \\frac{a^p}{p} + \\frac{b^q}{q}$, puis inégalités de Hölder et de Minkowski. Optimisation : pour $f$ convexe, tout minimum local est global, l'ensemble des points de minimum est un intervalle ; si $f$ est dérivable et si $a$ est un point intérieur à $I$, $f'(a) = 0$ équivaut à $a$ point de minimum. Sans cette hypothèse, seule l'implication « $f'(a) = 0$ entraîne $a$ point de minimum » subsiste : $x \\mapsto x$ est convexe et dérivable sur $[0 ; 1]$, atteint son minimum en $0$ et sa dérivée y vaut $1$."
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
      "num": "Compl. 09",
      "title": "Suites et séries numériques : convergence, sommabilité et critères",
      "domain": "Analyse",
      "level": "CAPES — complément disciplinaire (niveau licence)",
      "complement": true,
      "prerequisites": [
        "Situation dans les programmes : suites arithmétiques et géométriques et somme de leurs termes en première ; limites de suites, théorème de convergence monotone et limite de $q^n$ en terminale spécialité, où des sommes comme $\\sum_{k=1}^{n}\\frac{1}{k^2}$ sont étudiées en exercice.",
        "Pour aller plus loin : les familles sommables, le produit de Cauchy et le théorème de Fubini pour les séries doubles (partie III) ne sont cités ni par le programme des écrits de la voie bac + 3 ni par celui de la voie bac + 5. Les séries à termes positifs, la convergence absolue et le critère des séries alternées (parties I et II) relèvent, elles, du programme de la voie bac + 3 ; la transformation d'Abel et le théorème de réarrangement de Riemann sont, eux aussi, un approfondissement.",
        "Chapitres de licence du site utiles ici : L2-07 « Séries numériques réelles et complexes : convergence et critères », puis L3-07 « Suites et séries de fonctions » et L3-08 « Séries entières, rayon de convergence et fonctions analytiques », inscrits au programme de la voie bac + 3 et utilisés dans plusieurs exercices de DS des compléments 04 et 06.",
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
          "content": "**Pour aller plus loin** (hors des programmes des écrits, sauf les applications de la dernière phrase). Familles sommables de réels positifs puis de complexes, sommation par paquets ; une série réelle a une somme indépendante de l'ordre des termes pour tout réarrangement si et seulement si elle converge absolument. Produit de Cauchy : si $\\sum a_n$ et $\\sum b_n$ convergent absolument, la série de terme $c_n = \\sum_{k=0}^{n}a_kb_{n-k}$ converge absolument et a pour somme $\\left(\\sum a_n\\right)\\left(\\sum b_n\\right)$ ; application : $\\exp(a + b) = \\exp(a)\\exp(b)$ pour la série exponentielle. Théorème de Fubini pour les séries doubles. Applications : $\\sum_{k=1}^{n}\\frac{1}{k} = \\ln n + \\gamma + o(1)$, calcul approché d'une somme avec contrôle du reste."
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
      "num": "Compl. 10",
      "title": "Arithmétique dans Z : divisibilité, pgcd, congruences et cryptographie RSA",
      "domain": "Algèbre & Arithmétique",
      "level": "CAPES — complément disciplinaire (niveau licence)",
      "complement": true,
      "prerequisites": [
        "Situation dans les programmes : multiples, diviseurs, nombres premiers et décomposition en facteurs premiers au cycle 4 ; en seconde, multiples, diviseurs et parité seulement, les nombres premiers ne figurant plus au programme de 2026 ; en option mathématiques expertes de terminale, division euclidienne, congruences, PGCD, théorèmes de Bézout et de Gauss, nombres premiers (infinité, décomposition), petit théorème de Fermat, avec des activités de chiffrement.",
        "Construction de $\\mathbb{N}$ (axiomes de Peano), de $\\mathbb{Z}$ et de $\\mathbb{Q}$ par ensembles quotients, récurrence, toute partie non vide de $\\mathbb{N}$ admet un plus petit élément. La construction de $\\mathbb{N}$, $\\mathbb{Z}$, $\\mathbb{Q}$ figure dans la rubrique « Nombres réels et suites réelles » du programme de la voie bac + 3 : cours, exercice et DS dans le chapitre de licence L1-LOG (Logique mathématique, quantificateurs et théorie des ensembles), section 8 ; la présentation axiomatique de $\\mathbb{R}$ est dans le chapitre L1-REL.",
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
        "Infinité des nombres premiers et variantes (niveau mathématiques expertes-L1) : preuve d'Euclide, infinité des nombres premiers de la forme $4k + 3$, et existence de $n$ entiers consécutifs composés, $(n+1)! + 2, \\dots, (n+1)! + n + 1$.",
        "Construction de $\\mathbb{Z}$ et de $\\mathbb{Q}$ (niveau L1) : $\\mathbb{Z}$ est le quotient de $\\mathbb{N}^2$ par la relation $(a, b) \\sim (a', b') \\iff a + b' = a' + b$, la classe de $(a, b)$ représentant $a - b$ ; $\\mathbb{Q}$ est le quotient de $\\mathbb{Z} \\times \\mathbb{Z}^{\\ast}$ par $(p, q) \\sim (p', q') \\iff pq' = p'q$. Points à savoir justifier devant le jury : ce sont des relations d'équivalence (la transitivité pour $\\mathbb{Q}$ utilise l'intégrité de $\\mathbb{Z}$ : de $q'(pq'' - p''q) = 0$ et $q' \\neq 0$ on tire $pq'' = p''q$) ; les opérations ne dépendent pas des représentants ; $n \\mapsto \\overline{(n, 0)}$ plonge $\\mathbb{N}$ dans $\\mathbb{Z}$ en respectant les opérations. Exemple : la règle $\\overline{(a, b)} \\times \\overline{(c, d)} = \\overline{(ac + bd, ad + bc)}$ traduit $(a - b)(c - d) = (ac + bd) - (ad + bc)$, et la règle des signes $(-1) \\times (-1) = 1$ s'y lit sur $\\overline{(0, 1)} \\times \\overline{(0, 1)} = \\overline{(1, 0)}$.",
        "Petit théorème de Fermat (niveau mathématiques expertes) : preuve par la formule du binôme, $p$ divisant $\\binom{p}{k}$ pour $1 \\le k \\le p - 1$, et récurrence sur $a$, puis preuve par le groupe des inversibles de $\\mathbb{Z}/p\\mathbb{Z}$ ; la réciproque est fausse : $561 = 3 \\times 11 \\times 17$ vérifie $a^{560} \\equiv 1 \\pmod{561}$ pour tout $a$ premier avec 561."
      ],
      "juryTips": [
        "Le lemme de Gauss exige l'hypothèse $a \\wedge b = 1$ : 6 divise $4 \\times 3$ sans diviser ni 4 ni 3.",
        "Le lemme d'Euclide est faux pour un diviseur non premier, et c'est lui qui fonde l'unicité de la décomposition en facteurs premiers ; le jury demande souvent où il intervient dans la preuve.",
        "Le couple de Bézout n'est pas unique : si $au_0 + bv_0 = 1$, les solutions de $au + bv = 1$ sont les $(u_0 + kb, v_0 - ka)$, $k \\in \\mathbb{Z}$ ; pour $17u + 5v = 1$, $(-2, 7)$ et $(3, -10)$ conviennent.",
        "Sachez exécuter l'algorithme d'Euclide étendu au tableau pour calculer un inverse modulaire : l'inverse de 7 modulo 26 est 15, car $7 \\times 15 = 105 = 4 \\times 26 + 1$.",
        "Situer la notion : divisibilité et nombres premiers sont travaillés au collège, multiples et diviseurs sont repris en seconde, nombres premiers, congruences et Bézout sont étudiés en mathématiques expertes ; le jury apprécie un raisonnement accessible à un élève, comme la preuve par la parité de l'irrationalité de $\\sqrt{2}$."
      ]
    },
    {
      "id": "capes-11",
      "num": "Leçon 11",
      "title": "Géométrie vectorielle et produit scalaire : du plan à l'espace, transformations",
      "domain": "Géométrie",
      "level": "CAPES — leçon (seconde, première, terminale)",
      "prerequisites": [
        "Niveaux concernés et situation dans les programmes : au cycle 4, symétrie centrale, effets des translations, rotations et homothéties (observés, sans définition ponctuelle de ces trois dernières transformations), théorèmes de Pythagore et de Thalès, trigonométrie du triangle rectangle ; en seconde, vecteur associé à une translation, somme de vecteurs et relation de Chasles, produit par un réel, coordonnées, colinéarité et déterminant de deux vecteurs, équations cartésiennes et réduites de droites ; en première spécialité, produit scalaire (définitions, propriétés, formule d'Al-Kashi), équations de droites à l'aide d'un vecteur normal, équations de cercles, ensembles de points ; en terminale spécialité, vecteurs et translations, droites et plans de l'espace, bases et repères, représentations paramétriques, produit scalaire dans l'espace, vecteur normal et équation cartésienne d'un plan, projeté orthogonal.",
        "Plan de leçon possible : I. Vecteurs et colinéarité (seconde) ; II. Produit scalaire dans le plan (première) ; III. Géométrie dans l'espace (terminale), avec les translations ; un complément relit vectoriellement l'homothétie et la symétrie centrale, abordées au cycle 4 et absentes du programme de terminale. Le développement présenté au jury peut être la démonstration du théorème clé (expression analytique, formule d'Al-Kashi, cercle de diamètre $[AB]$) ou l'un des exercices proposés plus bas.",
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
          "content": "Les vecteurs de l'espace se définissent comme dans le plan. Trois vecteurs sont coplanaires si l'un est combinaison linéaire des deux autres ; trois vecteurs non coplanaires forment une base, et un point $O$ avec une base forme un repère. Une droite passant par $A$ et dirigée par $\\vec{u}$ admet la représentation paramétrique $M = A + t\\vec{u}$, $t \\in \\mathbb{R}$. Le produit scalaire de deux vecteurs de l'espace se calcule dans un plan contenant des représentants de ces vecteurs ; dans une base orthonormée, $\\vec{u} \\cdot \\vec{v} = xx' + yy' + zz'$. Une droite est orthogonale à un plan si et seulement si elle est orthogonale à deux droites sécantes de ce plan ; un vecteur $\\vec{n}$ non nul orthogonal à deux vecteurs non colinéaires d'un plan est normal à ce plan, et le plan passant par $A$ de vecteur normal $\\vec{n}(a ; b ; c)$ a une équation $ax + by + cz + d = 0$. Propriété (démonstration exigible) : le projeté orthogonal $H$ d'un point $M$ sur un plan $\\mathcal{P}$ est le point de $\\mathcal{P}$ le plus proche de $M$, car $MN^2 = MH^2 + HN^2$ pour tout $N \\in \\mathcal{P}$ (Pythagore). Transformations : seule la translation figure au programme de terminale ; l'homothétie et la symétrie centrale, abordées au cycle 4, sont ici reprises avec les vecteurs, ce qui relève du recul du candidat. La translation de vecteur $\\vec{u}$ envoie $M$ sur $M'$ tel que $\\overrightarrow{MM'} = \\vec{u}$ et conserve les distances ; l'homothétie de centre $O$ et de rapport $k \\neq 0$ envoie $M$ sur $M'$ tel que $\\overrightarrow{OM'} = k\\overrightarrow{OM}$, transforme tout vecteur $\\overrightarrow{AB}$ en $k\\overrightarrow{AB}$, multiplie les longueurs par $|k|$ et les aires par $k^2$ ; la symétrie centrale est l'homothétie de rapport $-1$. Les rotations du plan s'expriment simplement avec les nombres complexes (leçon 12)."
        }
      ],
      "keyTheorem": {
        "title": "Expression analytique du produit scalaire, formule d'Al-Kashi et cercle de diamètre [AB]",
        "statement": "On définit le produit scalaire de deux vecteurs du plan par $\\vec{u} \\cdot \\vec{v} = \\frac{1}{2}\\left(\\|\\vec{u} + \\vec{v}\\|^2 - \\|\\vec{u}\\|^2 - \\|\\vec{v}\\|^2\\right)$. (i) Dans une base orthonormée, si $\\vec{u}(x ; y)$ et $\\vec{v}(x' ; y')$, alors $\\vec{u} \\cdot \\vec{v} = xx' + yy'$ ; en conséquence, le produit scalaire est symétrique et bilinéaire. (ii) Pour tout triangle $ABC$, $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = AB \\times AC \\times \\cos\\widehat{BAC}$ et $BC^2 = AB^2 + AC^2 - 2\\,AB \\times AC \\times \\cos\\widehat{BAC}$. (iii) Pour deux points distincts $A$ et $B$, l'ensemble des points $M$ du plan tels que $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = 0$ est le cercle de diamètre $[AB]$.",
        "proof": "1. **Expression analytique.** Dans une base orthonormée, le théorème de Pythagore donne $\\|\\vec{u}\\|^2 = x^2 + y^2$. Comme $\\vec{u} + \\vec{v}$ a pour coordonnées $(x + x' ; y + y')$, on obtient $\\|\\vec{u} + \\vec{v}\\|^2 - \\|\\vec{u}\\|^2 - \\|\\vec{v}\\|^2 = (x + x')^2 + (y + y')^2 - x^2 - y^2 - x'^2 - y'^2 = 2xx' + 2yy'$, d'où $\\vec{u} \\cdot \\vec{v} = xx' + yy'$. Cette expression est visiblement symétrique et linéaire par rapport à chacun des deux vecteurs.\n2. **Développement du carré d'une différence.** Par bilinéarité et symétrie, $\\|\\vec{u} - \\vec{v}\\|^2 = (\\vec{u} - \\vec{v}) \\cdot (\\vec{u} - \\vec{v}) = \\|\\vec{u}\\|^2 - 2\\,\\vec{u} \\cdot \\vec{v} + \\|\\vec{v}\\|^2$.\n3. **Formule avec le cosinus.** On note $\\alpha = \\widehat{BAC}$ et on choisit le repère orthonormé d'origine $A$ dont le premier vecteur est $\\frac{1}{AB}\\overrightarrow{AB}$, orienté de sorte que $C$ ait une ordonnée positive. Alors $B(AB ; 0)$ et, par définition du cosinus et du sinus, $C(AC\\cos\\alpha ; AC\\sin\\alpha)$. Le point 1 donne $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = AB \\times AC\\cos\\alpha + 0 = AB \\times AC \\times \\cos\\alpha$.\n4. **Formule d'Al-Kashi.** Par la relation de Chasles, $\\overrightarrow{BC} = \\overrightarrow{AC} - \\overrightarrow{AB}$, donc par le point 2, $BC^2 = AC^2 - 2\\,\\overrightarrow{AB} \\cdot \\overrightarrow{AC} + AB^2$, et le point 3 conclut. Pour $\\alpha = \\frac{\\pi}{2}$, la formule redonne l'égalité de Pythagore : c'est une vérification de cohérence et non une démonstration, puisque le théorème de Pythagore a servi au point 1. Sa réciproque, en revanche, s'en déduit réellement : si $BC^2 = AB^2 + AC^2$, alors $\\cos\\alpha = 0$, donc $\\alpha = \\frac{\\pi}{2}$ puisque $\\alpha \\in [0 ; \\pi]$. Dans un cadre axiomatique où le produit scalaire est posé d'emblée, $\\|\\vec{u}\\|^2 = x^2 + y^2$ résulte de la bilinéarité dans une base orthonormée, et le théorème de Pythagore devient un corollaire.\n5. **Cercle de diamètre $[AB]$.** Soit $I$ le milieu de $[AB]$, de sorte que $\\overrightarrow{IB} = -\\overrightarrow{IA}$. Par Chasles et bilinéarité, $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = (\\overrightarrow{MI} + \\overrightarrow{IA}) \\cdot (\\overrightarrow{MI} - \\overrightarrow{IA}) = MI^2 - IA^2 = MI^2 - \\frac{AB^2}{4}$. Ainsi $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = 0$ si et seulement si $MI = \\frac{AB}{2}$, c'est-à-dire si et seulement si $M$ appartient au cercle de centre $I$ et de rayon $\\frac{AB}{2}$."
      },
      "developments": [
        "Exercice de seconde (colinéarité) : dans un repère, $A(-1 ; 2)$, $B(3 ; 4)$, $C(1 ; -2)$ et $D(9 ; 2)$. Montrer que $(AB)$ et $(CD)$ sont parallèles, puis que ces droites sont distinctes. Corrigé : $\\overrightarrow{AB}(4 ; 2)$ et $\\overrightarrow{CD}(8 ; 4)$, de déterminant $4 \\times 4 - 2 \\times 8 = 0$ : les droites sont parallèles. Puis $\\overrightarrow{AD}(10 ; 0)$ et $\\det(\\overrightarrow{AB}, \\overrightarrow{AD}) = 4 \\times 0 - 2 \\times 10 = -20 \\neq 0$ : $D \\notin (AB)$, donc les droites sont strictement parallèles.",
        "Exercice de première (formule d'Al-Kashi) : dans un triangle $ABC$, $AB = 5$, $AC = 8$ et $\\widehat{BAC} = 60°$. Calculer $BC$ et $\\overrightarrow{AB} \\cdot \\overrightarrow{AC}$. Corrigé : $BC^2 = 25 + 64 - 2 \\times 5 \\times 8 \\times \\frac{1}{2} = 49$, donc $BC = 7$ ; $\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = 5 \\times 8 \\times \\frac{1}{2} = 20$. Variante : retrouver l'angle à partir des trois longueurs.",
        "Exercice de première (ensemble de points) : $A(1 ; 2)$ et $B(5 ; -2)$. Déterminer une équation de l'ensemble des points $M(x ; y)$ tels que $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = 0$. Corrigé : $(1 - x)(5 - x) + (2 - y)(-2 - y) = 0$ équivaut à $x^2 - 6x + 5 + y^2 - 4 = 0$, soit $(x - 3)^2 + y^2 = 8$ : c'est le cercle de centre $I(3 ; 0)$, milieu de $[AB]$, et de rayon $2\\sqrt{2} = \\frac{AB}{2}$, conformément au théorème clé.",
        "Exercice de terminale (projeté orthogonal) : $\\mathcal{P}$ est le plan d'équation $2x - y + 2z - 1 = 0$ et $M(3 ; 1 ; 4)$. Déterminer le projeté orthogonal $H$ de $M$ sur $\\mathcal{P}$ et la distance de $M$ à $\\mathcal{P}$. Corrigé : $\\vec{n}(2 ; -1 ; 2)$ est normal à $\\mathcal{P}$ ; la droite passant par $M$ dirigée par $\\vec{n}$ a pour représentation $(3 + 2t ; 1 - t ; 4 + 2t)$ ; elle coupe $\\mathcal{P}$ lorsque $12 + 9t = 0$, soit $t = -\\frac{4}{3}$, d'où $H\\left(\\frac{1}{3} ; \\frac{7}{3} ; \\frac{4}{3}\\right)$ et $MH = \\frac{4}{3}\\|\\vec{n}\\| = 4$.",
        "<strong>Variante « exercice puis notion » (voie bac + 3, première épreuve d'admission).</strong> <strong>Exercice (terminale) :</strong> dans l'espace muni d'un repère orthonormé, $A(1 ; 0 ; 2)$, $B(3 ; 1 ; 0)$ et $C(0 ; 2 ; 1)$. Montrer que $A$, $B$, $C$ définissent un plan, que $\\vec{n}(3 ; 4 ; 5)$ lui est normal, en donner une équation et calculer la distance de l'origine $O$ à ce plan. <strong>Résolution :</strong> $\\overrightarrow{AB}(2 ; 1 ; -2)$ et $\\overrightarrow{AC}(-1 ; 2 ; -1)$ ne sont pas colinéaires ; $\\vec{n} \\cdot \\overrightarrow{AB} = 6 + 4 - 10 = 0$ et $\\vec{n} \\cdot \\overrightarrow{AC} = -3 + 8 - 5 = 0$, donc $\\vec{n}$ est normal au plan. Celui-ci a pour équation $3x + 4y + 5z - 13 = 0$ (vérification en $A$, $B$ et $C$). La distance de $O$ au plan vaut $\\frac{13}{\\sqrt{50}} = \\frac{13\\sqrt{2}}{10}$. <strong>Notion en jeu :</strong> orthogonalité et produit scalaire dans l'espace ; un vecteur orthogonal à deux vecteurs non colinéaires d'un plan est orthogonal à tout vecteur de ce plan. <strong>Notions connexes :</strong> projeté orthogonal, représentation paramétrique d'une droite, inégalité de Cauchy-Schwarz, espaces euclidiens de licence. <strong>Pour l'échange avec le jury :</strong> démontrer la formule de la distance ; expliquer pourquoi deux vecteurs doivent être non colinéaires ; dire si l'équation du plan est unique (elle l'est à un facteur non nul près) ; prévoir l'erreur d'un élève qui ne vérifie l'orthogonalité qu'avec un seul vecteur.",
        "Prolongements : théorème de la médiane $MA^2 + MB^2 = 2MI^2 + \\frac{AB^2}{2}$ ; droite d'Euler (si $O$ est le centre du cercle circonscrit, le point $H$ défini par $\\overrightarrow{OH} = \\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC}$ est l'orthocentre, et $\\overrightarrow{OH} = 3\\overrightarrow{OG}$) ; distance d'un point à un plan $\\frac{|ax_0 + by_0 + cz_0 + d|}{\\sqrt{a^2 + b^2 + c^2}}$ ; rotations et similitudes par les nombres complexes (leçon 12) ; cadre des espaces préhilbertiens, applications affines et classification des isométries du plan et de l'espace (complément 05, parties IV et V)."
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
        "<strong>Variante « exercice puis notion » (voie bac + 3, première épreuve d'admission).</strong> <strong>Exercice (mathématiques expertes) :</strong> résoudre dans $\\mathbb{C}$ l'équation $z^3 = 8i$ et montrer que les images des solutions forment un triangle équilatéral. <strong>Résolution :</strong> $8i = 8e^{i\\frac{\\pi}{2}}$, donc les solutions sont $2e^{i\\left(\\frac{\\pi}{6} + \\frac{2k\\pi}{3}\\right)}$ pour $k \\in \\{0 ; 1 ; 2\\}$, soit $\\sqrt{3} + i$, $-\\sqrt{3} + i$ et $-2i$. Les trois distances mutuelles valent $2\\sqrt{3}$ : par exemple $|(\\sqrt{3} + i) - (-2i)| = |\\sqrt{3} + 3i| = \\sqrt{12} = 2\\sqrt{3}$. <strong>Notion en jeu :</strong> racines $n$-ièmes d'un nombre complexe non nul, obtenues à partir d'une racine particulière et des racines $n$-ièmes de l'unité. <strong>Notions connexes :</strong> formule de Moivre, somme nulle des racines de l'unité, polynômes de degré $n$ et théorème de d'Alembert-Gauss, groupe $\\mathbb{U}_n$. <strong>Pour l'échange avec le jury :</strong> justifier qu'il y a exactement trois solutions ; montrer que leur somme est nulle ; expliquer pourquoi l'écriture $\\sqrt[3]{8i}$ n'a pas de sens sans convention ; prévoir l'erreur d'un élève qui ne trouve qu'une seule solution en divisant l'argument par 3.",
        "Prolongements : calcul de $\\cos\\frac{2\\pi}{5} = \\frac{\\sqrt{5} - 1}{4}$ par les racines cinquièmes de l'unité et construction du pentagone régulier ; sommes $\\sum_{k=0}^{n}\\cos(kx)$ par une somme géométrique ; similitudes directes $z \\mapsto az + b$ ; théorème de d'Alembert-Gauss ; exponentielle complexe et équations différentielles linéaires d'ordre 2 (complément 01)."
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
        "Niveaux concernés et situation dans les programmes (placement établi d'après les textes en vigueur en 2026-2027, mise à jour de novembre 2026 : seconde et première selon les arrêtés du 26 février 2026, BO n° 14 du 2 avril 2026 ; terminale selon le programme de 2019) : en seconde, modélisation d'une expérience aléatoire, loi de probabilité sur un ensemble fini, tableaux croisés d'effectifs, fréquences conditionnelles et marginales, probabilité conditionnelle $P_A(B)$ et arbres pondérés, en distinguant $P_A(B)$ et $P_B(A)$ ; le calcul d'une probabilité à partir d'une partition n'y est pas attendu. En première spécialité, indépendance de deux événements, partition et formule des probabilités totales, succession de deux épreuves indépendantes, répétition d'au plus 4 épreuves de Bernoulli identiques et indépendantes, traitée par un arbre. Hors spécialité, la probabilité conditionnelle, l'indépendance et la répétition d'au plus 4 épreuves de Bernoulli figurent dans les mathématiques intégrées à l'enseignement scientifique de première, et le tronc commun technologique de première traite l'indépendance et les probabilités totales dans des cas simples. En terminale spécialité, succession d'épreuves indépendantes, schéma de Bernoulli et loi binomiale ; en terminale technologique, conditionnement par un événement de probabilité non nulle, indépendance et formule des probabilités totales pour une partition. Transition en 2026-2027 : les élèves de première n'ont pas suivi la nouvelle seconde, de sorte que la probabilité conditionnelle et les arbres y sont repris ; les élèves de terminale les ont étudiés en première selon le programme de 2019. Les programmes de terminale sont renouvelés à la rentrée 2027 : en voie technologique, il ne restera en terminale que la formule des probabilités totales.",
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
          "content": "Des événements $A_1, \\dots, A_n$ de probabilités non nulles forment une partition de $\\Omega$ s'ils sont deux à deux incompatibles et de réunion $\\Omega$ ; le cas le plus fréquent est $\\{A, \\bar{A}\\}$. Règles de l'arbre pondéré : la somme des probabilités des branches issues d'un même nœud vaut 1 ; la probabilité d'un chemin est le produit des probabilités de ses branches (probabilités composées) ; la probabilité d'un événement est la somme des probabilités des chemins qui y mènent. Formule des probabilités totales : $P(B) = \\sum_{k=1}^{n}P(A_k)P_{A_k}(B)$, en particulier $P(B) = P(A)P_A(B) + P(\\bar{A})P_{\\bar{A}}(B)$ (démonstration accessible). Formule de Bayes (« inversion du conditionnement ») : si $P(B) \\neq 0$, $P_B(A) = \\frac{P(A)P_A(B)}{P(A)P_A(B) + P(\\bar{A})P_{\\bar{A}}(B)}$. Exemple : une maladie touche 1 % d'une population ; un test est positif chez 99 % des malades et chez 2 % des personnes saines. Alors $P(T) = 0{,}01 \\times 0{,}99 + 0{,}99 \\times 0{,}02 = 0{,}0297$ et $P_T(M) = \\frac{0{,}0099}{0{,}0297} = \\frac{1}{3}$ : deux tiers des tests positifs sont des faux positifs. Contre-exemple : les événements de l'arbre doivent former une partition ; « être fumeur » et « avoir plus de 50 ans » ne permettent pas d'appliquer la formule."
        },
        {
          "part": "III. Indépendance et répétition d'épreuves",
          "content": "Deux événements $A$ et $B$ sont indépendants si $P(A \\cap B) = P(A)P(B)$. Lorsque $P(A) \\neq 0$, cela équivaut à $P_A(B) = P(B)$ : savoir que $A$ est réalisé ne modifie pas la probabilité de $B$. Propriété (démonstration accessible) : si $A$ et $B$ sont indépendants, alors $\\bar{A}$ et $B$ le sont, ainsi que $A$ et $\\bar{B}$, et $\\bar{A}$ et $\\bar{B}$. L'indépendance dépend de la probabilité choisie, et non seulement des événements : c'est une hypothèse de modélisation (épreuves physiquement sans influence l'une sur l'autre) ou une propriété à vérifier par le calcul. Succession de deux épreuves indépendantes : l'univers est un produit cartésien et la probabilité d'un couple d'issues est le produit des probabilités ; on la représente par un arbre dont les pondérations ne dépendent pas de la première issue, ou par un tableau à double entrée. Généralisation : en première, au plus 4 épreuves de Bernoulli identiques et indépendantes, traitées par un arbre ; en terminale, répétition de $n$ épreuves de Bernoulli identiques et indépendantes, loi binomiale ; probabilité d'au moins un succès : $1 - (1 - p)^n$. Exemple : on lance un dé équilibré ; $A$ : « résultat pair », $B$ : « résultat inférieur ou égal à 2 » ; $P(A \\cap B) = \\frac{1}{6} = \\frac{1}{2} \\times \\frac{1}{3}$, les événements sont indépendants. Contre-exemple : deux événements incompatibles de probabilités non nulles ne sont jamais indépendants, puisque $P(A \\cap B) = 0 \\neq P(A)P(B)$."
        }
      ],
      "keyTheorem": {
        "title": "Formule des probabilités totales et formule de Bayes",
        "statement": "Soit $A_1, \\dots, A_n$ une partition de $\\Omega$ formée d'événements de probabilités non nulles, et $B$ un événement. Alors $P(B) = \\sum_{k=1}^{n}P(A_k)P_{A_k}(B)$. Si de plus $P(B) \\neq 0$, alors pour tout $j \\in \\{1, \\dots, n\\}$, $P_B(A_j) = \\frac{P(A_j)P_{A_j}(B)}{\\sum_{k=1}^{n}P(A_k)P_{A_k}(B)}$.",
        "proof": "1. **Décomposition de $B$.** Comme $A_1 \\cup \\dots \\cup A_n = \\Omega$, on a $B = B \\cap \\Omega = (B \\cap A_1) \\cup \\dots \\cup (B \\cap A_n)$ par distributivité de l'intersection sur la réunion.\n2. **Incompatibilité.** Pour $k \\neq l$, $(B \\cap A_k) \\cap (B \\cap A_l) \\subset A_k \\cap A_l = \\varnothing$ : les événements $B \\cap A_k$ sont deux à deux incompatibles.\n3. **Additivité.** La probabilité d'une réunion d'événements deux à deux incompatibles est la somme des probabilités, donc $P(B) = \\sum_{k=1}^{n}P(B \\cap A_k)$.\n4. **Probabilités composées.** Comme $P(A_k) \\neq 0$, la définition de la probabilité conditionnelle donne $P(B \\cap A_k) = P(A_k)P_{A_k}(B)$, d'où la formule des probabilités totales.\n5. **Formule de Bayes.** Si $P(B) \\neq 0$, par définition $P_B(A_j) = \\frac{P(A_j \\cap B)}{P(B)}$. Le numérateur vaut $P(A_j)P_{A_j}(B)$ (point 4) et le dénominateur est donné par la formule des probabilités totales.\n6. **Lecture sur l'arbre.** Le point 4 est la règle du produit le long d'un chemin, le point 3 la règle de la somme des chemins menant à $B$ : la preuve justifie les règles de l'arbre pondéré, qu'il ne faut pas présenter comme des axiomes."
      },
      "developments": [
        "Exercice de seconde (tableau croisé) : dans un lycée de 800 élèves, 480 sont demi-pensionnaires, dont 300 en seconde ; il y a 450 élèves de seconde. On choisit un élève au hasard. Calculer la probabilité qu'il soit demi-pensionnaire sachant qu'il est en seconde, puis qu'il soit en seconde sachant qu'il est demi-pensionnaire. Corrigé : $P_S(D) = \\frac{300}{450} = \\frac{2}{3}$ et $P_D(S) = \\frac{300}{480} = \\frac{5}{8}$. Les deux nombres diffèrent : on ne divise pas par le même effectif.",
        "Exercice de première (arbre et probabilités totales) : un atelier produit 60 % de ses pièces sur la machine $M_1$ et 40 % sur $M_2$ ; les taux de pièces défectueuses sont 3 % et 5 %. Quelle est la probabilité qu'une pièce soit défectueuse ? Sachant qu'elle est défectueuse, quelle est la probabilité qu'elle vienne de $M_2$ ? Corrigé : $P(D) = 0{,}6 \\times 0{,}03 + 0{,}4 \\times 0{,}05 = 0{,}038$ et $P_D(M_2) = \\frac{0{,}02}{0{,}038} = \\frac{10}{19} \\approx 0{,}53$.",
        "Exercice de première (indépendance) : on tire une carte au hasard dans un jeu de 32 cartes. Les événements $A$ : « la carte est un cœur » et $B$ : « la carte est un as » sont-ils indépendants ? Même question après avoir ajouté un joker au jeu. Corrigé : avec 32 cartes, $P(A \\cap B) = \\frac{1}{32} = \\frac{8}{32} \\times \\frac{4}{32}$ : indépendants. Avec 33 cartes, $P(A \\cap B) = \\frac{1}{33}$ alors que $P(A)P(B) = \\frac{32}{1089} \\neq \\frac{1}{33} = \\frac{33}{1089}$ : ils ne le sont plus. L'indépendance dépend de la probabilité.",
        "Exercice de terminale (au moins un succès) : un archer atteint sa cible avec probabilité $0{,}3$ à chaque tir, les tirs étant indépendants. Combien de tirs faut-il au minimum pour que la probabilité d'atteindre au moins une fois la cible dépasse $0{,}99$ ? Corrigé : la probabilité cherchée est $1 - 0{,}7^n$ et $1 - 0{,}7^n \\ge 0{,}99 \\iff 0{,}7^n \\le 0{,}01 \\iff n \\ge \\frac{\\ln 0{,}01}{\\ln 0{,}7} \\approx 12{,}9$ (le logarithme de $0{,}7$ est négatif, ce qui renverse l'inégalité) : il faut au moins 13 tirs.",
        "<strong>Variante « exercice puis notion » (voie bac + 3, première épreuve d'admission).</strong> <strong>Exercice (terminale) :</strong> chaque jour, un serveur est en panne avec la probabilité $0{,}4$ s'il l'était la veille et $0{,}1$ sinon. On note $p_n$ la probabilité qu'il soit en panne le jour $n$, avec $p_0 = 0$. Montrer que $p_{n+1} = 0{,}3p_n + 0{,}1$, puis exprimer $p_n$ en fonction de $n$ et donner sa limite. <strong>Résolution :</strong> la formule des probabilités totales donne $p_{n+1} = 0{,}4p_n + 0{,}1(1 - p_n) = 0{,}3p_n + 0{,}1$. Le point fixe est $\\ell = \\frac{1}{7}$ ; la suite $(p_n - \\ell)$ est géométrique de raison $0{,}3$, donc $p_n = \\frac{1}{7}\\left(1 - 0{,}3^n\\right)$, qui tend vers $\\frac{1}{7}$. <strong>Notion en jeu :</strong> formule des probabilités totales, appliquée à la partition formée par l'événement et son contraire. <strong>Notions connexes :</strong> suites arithmético-géométriques, chaînes de Markov à deux états, matrices de transition et loi stationnaire (mathématiques expertes). <strong>Pour l'échange avec le jury :</strong> énoncer la formule et démontrer sa validité ; préciser pourquoi la limite ne dépend pas de $p_0$ ; donner l'interprétation de $\\frac{1}{7}$ ; prévoir l'erreur d'un élève qui additionne $0{,}4$ et $0{,}1$ sans pondérer.",
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
        "Niveaux concernés et situation dans les programmes (placement établi d'après les textes en vigueur en 2026-2027, mise à jour de novembre 2026 : 4e et 3e selon le programme de 2020, seconde et première selon les arrêtés du 26 février 2026, BO n° 14 du 2 avril 2026, terminale selon le programme de 2019) : au collège, recueil et représentation de données, effectifs et fréquences, moyenne, médiane et étendue, histogrammes ; en seconde, moyenne pondérée et linéarité de la moyenne, écart type, effet de l'ajout ou de la suppression d'une valeur sur la moyenne et la médiane, classes de même amplitude (histogramme, polygone des fréquences cumulées, classe médiane), comparaison de deux séries par la moyenne et l'écart type ou par la médiane et l'écart interquartile, croisement de deux variables qualitatives (tableau croisé, fréquences conditionnelles et marginales), avec l'outil numérique (tableur, programmation) ; en première, la spécialité ne comporte pas de statistique à deux variables : nuage de points, point moyen et ajustement affine figurent dans les mathématiques intégrées à l'enseignement scientifique (avec le tableau croisé d'effectifs) et dans le tronc commun technologique, sans connaissance théorique sur les ajustements ; en terminale, droite des moindres carrés, coefficient de corrélation et changement de variable en mathématiques complémentaires, nuage, ajustement affine (moindres carrés présentés) et changement de variable dans le tronc commun technologique. À la rentrée 2027, en voie technologique, le nuage et l'ajustement affine passent en première et seul le changement de variable reste en terminale.",
        "Plan de leçon possible : I. Séries à une variable et indicateurs de position ; II. Indicateurs de dispersion ; III. Séries à deux variables et ajustement affine. Le développement peut être la propriété de minimisation de la moyenne (théorème clé, $\\sum(x_i - a)^2$ minimal en $a = \\bar{x}$), la détermination de la droite des moindres carrés, ou l'étude de l'effet d'une transformation affine sur les indicateurs.",
        "Prérequis des élèves : calcul de fréquences et de pourcentages, fonctions affines et polynômes du second degré (pour la minimisation), symbole $\\sum$, utilisation d'un tableur ou d'une calculatrice.",
        "Recul attendu du candidat : lien entre statistique descriptive et variables aléatoires (espérance, variance, inégalité de Bienaymé-Tchebychev), robustesse de la médiane, interprétation de la variance comme carré d'une distance, droite de régression comme projection orthogonale, coefficient de corrélation et inégalité de Cauchy-Schwarz, corrélation et causalité."
      ],
      "plan": [
        {
          "part": "I. Séries à une variable : indicateurs de position",
          "content": "Une série statistique quantitative est donnée par des valeurs $x_1, \\dots, x_p$ et des effectifs $n_1, \\dots, n_p$, d'effectif total $N = \\sum n_i$, ou par les fréquences $f_i = \\frac{n_i}{N}$. Moyenne : $\\bar{x} = \\frac{1}{N}\\sum_{i=1}^{p}n_ix_i = \\sum_{i=1}^{p}f_ix_i$. Linéarité (démonstration accessible) : si $y_i = ax_i + b$, alors $\\bar{y} = a\\bar{x} + b$ ; la moyenne d'une réunion de deux séries est la moyenne des moyennes pondérée par les effectifs. Médiane : valeur $Me$ telle qu'au moins la moitié des valeurs soient inférieures ou égales à $Me$ et au moins la moitié supérieures ou égales ; pour une série ordonnée de $N$ valeurs, c'est la valeur de rang $\\frac{N + 1}{2}$ si $N$ est impair, et par convention la demi-somme des valeurs de rangs $\\frac{N}{2}$ et $\\frac{N}{2} + 1$ si $N$ est pair. Exemple : pour la série $2, 3, 3, 5, 7, 22$, $\\bar{x} = 7$ et $Me = 4$. Contre-exemple : la médiane n'est pas linéaire vis-à-vis de la réunion de séries, et la moyenne n'est pas robuste : une seule valeur extrême ($22$) suffit à la rendre supérieure à quatre des six valeurs."
        },
        {
          "part": "II. Indicateurs de dispersion",
          "content": "Étendue : différence entre la plus grande et la plus petite valeur. Quartiles : $Q_1$ est la plus petite valeur de la série telle qu'au moins 25 % des valeurs lui soient inférieures ou égales, $Q_3$ la plus petite telle qu'au moins 75 % des valeurs lui soient inférieures ou égales ; écart interquartile $Q_3 - Q_1$ ; diagramme en boîte. Variance : $V = \\frac{1}{N}\\sum_{i=1}^{p}n_i(x_i - \\bar{x})^2$, écart type $\\sigma = \\sqrt{V}$, exprimé dans l'unité des données. Formule de König-Huygens : $V = \\frac{1}{N}\\sum n_ix_i^2 - \\bar{x}^2$ (démonstration accessible : développer le carré et utiliser $\\sum n_i(x_i - \\bar{x}) = 0$). Transformation affine : si $y_i = ax_i + b$, alors $V_y = a^2V_x$ et $\\sigma_y = |a|\\sigma_x$ ; une translation ne modifie pas la dispersion. Propriété de minimisation : la fonction $a \\mapsto \\frac{1}{N}\\sum n_i(x_i - a)^2$ atteint son minimum, égal à $V$, en $a = \\bar{x}$. Exemple : la série $4, 8, 9, 11$ a pour moyenne $8$, pour variance $\\frac{16 + 0 + 1 + 9}{4} = 6{,}5$ et pour écart type $\\sqrt{6{,}5} \\approx 2{,}55$. Contre-exemple : deux séries de même moyenne et de même étendue peuvent avoir des écarts types différents ($0, 5, 5, 5, 10$ et $0, 0, 5, 10, 10$, d'écarts types $\\sqrt{10}$ et $\\sqrt{20}$)."
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
        "<strong>Variante « exercice puis notion » (voie bac + 3, première épreuve d'admission).</strong> <strong>Exercice (première et terminale) :</strong> on considère la série $2, 4, 4, 7, 13$. Pour tout réel $t$, on pose $f(t) = \\sum_{i=1}^{5}(x_i - t)^2$. Montrer que $f$ admet un minimum en un réel à préciser et calculer ce minimum. Comparer ensuite $g(t) = \\sum_{i=1}^{5}|x_i - t|$ en $t = 4$ et en $t = 6$. <strong>Résolution :</strong> $f(t) = 5t^2 - 2t\\sum x_i + \\sum x_i^2 = 5t^2 - 60t + 254$ est un trinôme minimal en $t = 6$, moyenne de la série, et $f(6) = 74 = 5V$, où $V = 14{,}8$ est la variance. D'autre part $g(4) = 2 + 0 + 0 + 3 + 9 = 14$ et $g(6) = 4 + 2 + 2 + 1 + 7 = 16$ : la moyenne ne minimise pas $g$, qui atteint son minimum en la médiane $4$. <strong>Notion en jeu :</strong> les indicateurs de position sont solutions d'un problème d'optimisation, la moyenne pour l'écart quadratique et la médiane pour l'écart absolu. <strong>Notions connexes :</strong> formule de König-Huygens, droite des moindres carrés, projection orthogonale, sensibilité aux valeurs extrêmes. <strong>Pour l'échange avec le jury :</strong> démontrer que la médiane minimise $g$ en étudiant ses pentes ; dire ce qui change pour un effectif pair (le minimum est atteint sur tout l'intervalle médian) ; remplacer $13$ par $30$ et commenter l'effet sur la moyenne et la médiane.",
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
      "level": "CAPES — leçon (terminale spécialité ; prolongements en mathématiques expertes)",
      "prerequisites": [
        "Niveaux concernés et situation dans les programmes (placement établi d'après les textes en vigueur en 2026-2027, mise à jour de novembre 2026 : 4e et 3e selon le programme de 2020, seconde et première selon les arrêtés du 26 février 2026, BO n° 14 du 2 avril 2026, terminale selon le programme de 2019) : le dénombrement est un chapitre de terminale spécialité (principes additif et multiplicatif, $k$-uplets, $k$-uplets d'éléments distincts, permutations, factorielle, combinaisons, triangle de Pascal, nombre de parties d'un ensemble), réinvesti dans la loi binomiale ; il prépare en mathématiques expertes l'arithmétique et la formule du binôme dans $\\mathbb{C}$. Coefficients binomiaux et triangle de Pascal figurent aussi en mathématiques complémentaires et dans le tronc commun technologique de terminale, comme nombre de façons d'obtenir $k$ succès ou nombre de chemins d'un arbre. En amont : au collège, dénombrement d'issues surtout pour une épreuve, et pour deux épreuves dans des cas très simples par un tableau à double entrée ; en seconde, vocabulaire ensembliste avec le produit cartésien et le cardinal $\\mathrm{Card}(A)$ d'un ensemble fini, et arbres pondérés en probabilités ; en première, arbres pour la répétition d'au plus 4 épreuves de Bernoulli.",
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
          "content": "Un $k$-uplet d'éléments distincts de $E$ (ou arrangement) est un $k$-uplet dont les composantes sont deux à deux distinctes. Si $\\mathrm{card}(E) = n$ et $1 \\le k \\le n$, leur nombre est $n(n - 1)\\cdots(n - k + 1) = \\frac{n!}{(n - k)!}$, avec $n! = 1 \\times 2 \\times \\cdots \\times n$ et $0! = 1$ (démonstration accessible, par le principe multiplicatif ou par récurrence). Une permutation de $E$ est un $n$-uplet d'éléments distincts de $E$, c'est-à-dire un rangement de tous ses éléments : il y en a $n!$. Exemple : le podium d'une course de 8 coureurs peut être occupé de $8 \\times 7 \\times 6 = 336$ façons ; les anagrammes du mot MATHS sont au nombre de $5! = 120$. Anagrammes avec répétitions : le mot RADAR a $\\frac{5!}{2!\\,2!} = 30$ anagrammes (on divise par les permutations des lettres identiques). Contre-exemple : si $k \\gt n$, il n'existe aucun $k$-uplet d'éléments distincts (principe des tiroirs) : dans un groupe de 367 personnes, deux ont nécessairement le même jour anniversaire."
        },
        {
          "part": "III. Combinaisons, triangle de Pascal et formule du binôme",
          "content": "Une combinaison de $k$ éléments de $E$ est une partie de $E$ à $k$ éléments : l'ordre ne compte pas et il n'y a pas de répétition. Leur nombre est noté $\\binom{n}{k}$ et vaut $\\frac{n!}{k!\\,(n - k)!}$ pour $0 \\le k \\le n$, car chaque partie à $k$ éléments correspond à exactement $k!$ arrangements (démonstration accessible). Propriétés : $\\binom{n}{0} = \\binom{n}{n} = 1$, symétrie $\\binom{n}{k} = \\binom{n}{n - k}$ (passage au complémentaire), relation de Pascal $\\binom{n}{k} + \\binom{n}{k + 1} = \\binom{n + 1}{k + 1}$, triangle de Pascal, $\\sum_{k=0}^{n}\\binom{n}{k} = 2^n$. Formule du binôme : $(a + b)^n = \\sum_{k=0}^{n}\\binom{n}{k}a^kb^{n-k}$ pour des réels ou complexes $a$ et $b$. Lien avec les probabilités : dans un schéma de Bernoulli à $n$ épreuves, $\\binom{n}{k}$ est le nombre de chemins de l'arbre comportant $k$ succès, d'où $P(X = k) = \\binom{n}{k}p^k(1 - p)^{n-k}$. Exemple : une main de 5 cartes d'un jeu de 32 : $\\binom{32}{5} = 201\\,376$ mains ; mains contenant exactement 2 as : $\\binom{4}{2}\\binom{28}{3} = 6 \\times 3276 = 19\\,656$. Contre-exemple : pour un comité comprenant un président et un trésorier, l'ordre (le rôle) compte : on dénombre des arrangements et non des combinaisons."
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
        "<strong>Variante « exercice puis notion » (voie bac + 3, première épreuve d'admission).</strong> <strong>Exercice (terminale) :</strong> dans un groupe de $n$ personnes, on forme un comité d'au moins une personne et on y désigne un président. Dénombrer de deux façons les choix possibles, en déduire $\\sum_{k=1}^{n} k\\binom{n}{k}$ et vérifier le résultat pour $n = 5$. <strong>Résolution :</strong> en choisissant d'abord un comité de $k$ personnes puis son président, on obtient $\\sum_{k=1}^{n} k\\binom{n}{k}$. En choisissant d'abord le président ($n$ choix) puis une partie quelconque des $n - 1$ autres, on obtient $n2^{n-1}$. Pour $n = 5$ : $5 + 20 + 30 + 20 + 5 = 80 = 5 \\times 2^4$. <strong>Notion en jeu :</strong> combinaisons et raisonnement par double comptage. <strong>Notions connexes :</strong> formule du binôme, dérivation de $(1 + x)^n$, espérance de la loi binomiale $\\mathcal{B}\\left(n ; \\frac{1}{2}\\right)$, égale à $\\frac{n}{2}$. <strong>Pour l'échange avec le jury :</strong> retrouver l'identité en dérivant la formule du binôme ; expliquer le lien avec l'espérance ; prévoir l'erreur d'un élève qui oublie de préciser l'ordre des choix et compte deux fois un même comité.",
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
      "level": "CAPES — épreuve d'entretien (oral 2)",
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
        },
        {
          "part": "IV. Se présenter en 5 minutes : fiche guidée",
          "content": "La première partie de l'épreuve dure 15 minutes : une présentation de 5 minutes, puis 10 minutes d'échange sur la motivation et le parcours ; pour la voie bac+5, la présentation s'appuie sur la fiche individuelle de renseignement, et chaque candidat vérifie les modalités de sa session. Ce temps n'est pas un curriculum vitae récité : il doit montrer une cohérence et ouvrir des questions que l'on saura traiter. Préparer par écrit, puis s'entraîner à voix haute, chronomètre en main, sans lire, en cinq temps. Temps 1, environ 30 secondes : se situer (formation, discipline) en une ou deux phrases. Temps 2, environ 1 minute 30 : les deux ou trois étapes du parcours qui expliquent le choix du métier (études, expérience auprès de jeunes, emploi, engagement), chacune reliée à ce qu'elle a appris. Temps 3, environ 1 minute 30 : une expérience précise racontée en quatre points (situation, action, résultat, enseignement tiré), si possible liée aux mathématiques et sans élément permettant d'identifier un élève. Temps 4, environ 1 minute : une conception argumentée du métier de professeur de mathématiques (par exemple faire accéder chacun au raisonnement, travailler en équipe, servir l'intérêt général). Temps 5, environ 30 secondes : ce que l'on cherche encore à apprendre, ce qui ouvre l'échange. Enfin, anticiper trois questions : le point faible du parcours, le choix de l'enseignement dans le second degré, et ce que l'on ferait différemment."
        },
        {
          "part": "V. Grille d'auto-évaluation de la présentation",
          "content": "Grille de travail indicative, qui n'est pas le barème du jury : s'enregistrer, puis noter chaque critère 0 (absent), 1 (partiel) ou 2 (acquis). Durée : entre 4 minutes 30 et 5 minutes, sans précipitation. Parole : texte non lu, regard vers le jury, débit maîtrisé. Cohérence : chaque étape citée éclaire le choix du métier, sans simple énumération. Concret : au moins une expérience précise et vraie. Réflexivité : une difficulté rencontrée et ce qu'elle a fait changer. Discipline : un exemple montre comment on ferait raisonner des élèves en mathématiques. Métier : les élèves, l'équipe et le service public sont évoqués, sans jugement sur des collègues ou l'institution. Exactitude : seuls les faits et les textes dont on est sûr sont cités. Ouverture : la fin donne au jury une question à poser. Total sur 18 : en dessous de 12, reprendre la cohérence et le concret avant de travailler le débit ; à partir de 14, s'entraîner à l'échange avec une personne qui pose des questions imprévues."
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
        "Question de motivation : expliquer pourquoi devenir professeur de mathématiques en reliant son parcours à une conception argumentée du métier (transmission des savoirs, exigence, accompagnement de tous les élèves, travail en équipe), illustrée par un exemple concret plutôt que par la récitation du référentiel.",
        "Transition écologique (thème de l'entretien au concours de niveau bac + 3) : l'éducation à l'environnement et au développement durable est une mission de l'École (Code de l'éducation, article L. 312-19), portée par toutes les disciplines. En mathématiques, elle passe par des données réelles (séries de températures, consommations d'énergie, pourcentages d'évolution, modèles d'évolution exponentielle) et par l'esprit critique face aux chiffres : source, méthode de mesure, ordre de grandeur, ce qu'une série permet ou non de conclure. La neutralité du professeur porte sur les opinions, pas sur les savoirs : la hausse des températures mesurée est un constat, les choix collectifs pour y répondre relèvent du débat citoyen, sur lequel il ne prend pas parti. À l'échelle de l'établissement : projets interdisciplinaires, éco-délégués, démarche de développement durable. Entraînement : cas « Des données climatiques contestées en classe » et DS associé.",
        "Épanouissement de l'élève (thème de l'entretien au concours de niveau bac + 3) : la formation scolaire « favorise l'épanouissement de l'enfant » (Code de l'éducation, article L. 111-2), et le service public reconnaît que tous les enfants partagent la capacité d'apprendre et de progresser (article L. 111-1). Pour un professeur de mathématiques : un climat de classe où l'erreur sert à apprendre, une évaluation qui renseigne l'élève sur ses progrès (critères explicites, évaluation formative), l'attention à l'anxiété face aux mathématiques, la vigilance face au harcèlement. Le professeur n'agit pas seul : professeur principal, conseiller principal d'éducation, infirmier, psychologue de l'Éducation nationale, assistant de service social. Entraînement : cas de l'élève qui se dit « nulle en maths » et DS associé.",
        "Projection dans le métier (thème de l'entretien au concours de niveau bac + 3, distinct de la motivation) : le jury attend une vision réaliste des premières années (formation après le concours, accompagnement par un tuteur, titularisation), des besoins de formation identifiés avec précision (gestion de classe, différenciation, évaluation), la place que le candidat se donne dans l'équipe et dans l'établissement, et la formation continue tout au long de la carrière. La compétence 14 du référentiel de 2013 (« S'engager dans une démarche individuelle et collective de développement professionnel ») en donne le cadre : savoir analyser sa pratique et s'appuyer sur les collègues, l'inspection et la formation. Entraînement : QCM « Se projeter dans le métier devant le jury » et DS associé."
      ],
      "juryTips": [
        "Ne pas opposer laïcité et liberté : la laïcité garantit la liberté de conscience de chacun et l'égalité de tous ; elle impose la neutralité à l'État et à ses agents, non aux élèves en tant que tels.",
        "Ne citer que des textes dont on est sûr : un numéro d'article erroné ou une jurisprudence approximative dessert davantage qu'une réponse fondée sur les principes (Constitution, article L. 111-1, loi de 2004, statut de fonctionnaire, référentiel de 2013).",
        "Les numéros de fiches cités dans les exercices renvoient au Vademecum « La laïcité à l'École » dans sa version de mars 2024 : la numérotation peut changer d'une édition à l'autre, et il faut vérifier la version en ligne avant de citer un numéro.",
        "Ne pas présenter une réponse solitaire : le jury attend que le candidat situe son action dans une équipe (professeur principal, conseiller principal d'éducation, chef d'établissement, personnels sociaux et de santé) et connaisse les circuits de signalement.",
        "Le dialogue avec l'élève et sa famille précède la procédure disciplinaire, mais il vise la compréhension de la règle et non sa négociation.",
        "Relier les situations à la discipline : la démarche mathématique (distinction entre conjecture et preuve, esprit critique face aux chiffres et aux statistiques) contribue à la formation du citoyen, ce que le jury apprécie de voir illustré par un exemple de classe."
      ]
    },
    {
      "id": "capes-oral2-cas",
      "num": "Oral 2 – Cas",
      "title": "Épreuve d'entretien : études de cas en trois étapes (règle de droit, réaction immédiate, action durable)",
      "domain": "Éthique & Laïcité",
      "level": "CAPES — épreuve d'entretien (oral 2)",
      "prerequisites": [
        "Avoir travaillé le chapitre « Épreuve d'entretien : éthique professionnelle, laïcité et valeurs de la République », qui présente le format de l'épreuve et le cadre institutionnel.",
        "Connaître les grands textes : article 1er de la Constitution, loi du 9 décembre 1905, article L. 111-1 du Code de l'éducation, article L. 141-5-1 (loi du 15 mars 2004), obligations des agents publics (articles L. 121-1 et L. 121-2 du Code général de la fonction publique).",
        "Connaître les acteurs de l'établissement : chef d'établissement, conseiller principal d'éducation, professeur principal, infirmier, assistant de service social, médecin scolaire, équipe académique Valeurs de la République.",
        "Connaître les circuits de signalement : application Faits établissement, information préoccupante à la cellule départementale, saisine du procureur de la République, protocole pHARe, protection fonctionnelle."
      ],
      "plan": [
        {
          "part": "I. Nommer la règle de droit",
          "content": "Avant d'agir, on qualifie la situation : quel principe est en jeu (laïcité, neutralité, égalité, assiduité, protection de l'enfance, sécurité), et quel texte l'exprime. On ne cite que des textes dont on est sûr ; à défaut, on énonce le principe avec précision. Il faut savoir à qui la règle s'applique : la neutralité s'impose aux agents, l'article L. 141-5-1 aux seuls élèves des établissements publics, et les parents accompagnateurs n'y sont pas soumis."
        },
        {
          "part": "II. Réagir sur le moment",
          "content": "Sur le moment, le professeur protège les élèves, fait cesser le trouble sans humilier personne, rappelle la règle sans engager de débat sur les croyances et poursuit le cours lorsque c'est possible. Il ne mène ni enquête ni négociation et ne promet jamais le secret à un élève qui révèle une situation de danger. Il alerte sans délai la personne compétente, le plus souvent le chef d'établissement ou le CPE."
        },
        {
          "part": "III. Agir dans la durée",
          "content": "Pour régler le problème durablement, le professeur passe le relais à l'équipe et aux circuits prévus : écrit factuel, information de la famille et du professeur principal, procédure disciplinaire décidée par le chef d'établissement, information préoccupante, protocole pHARe, protection fonctionnelle. Il contribue ensuite au suivi de l'élève et à la prévention : formation, consignes partagées, travail pédagogique sur les valeurs de la République."
        }
      ],
      "keyTheorem": {
        "title": "La démarche en trois temps",
        "statement": "Face à une mise en situation, une réponse complète articule trois temps : la règle de droit qui fonde l'action, la réaction immédiate du professeur dans la classe, puis l'action menée en équipe pour régler durablement la situation. Chacun des trois temps est nécessaire : une règle exacte sans geste professionnel, ou un bon réflexe sans suite institutionnelle, laisse la réponse incomplète.",
        "proof": "1. **Qualifier.** Nommer le principe en jeu et le texte qui l'exprime, en précisant à qui il s'applique ; une erreur de qualification (appliquer la loi de 2004 à un parent ou à un candidat libre, par exemple) entraîne une réponse fausse.\n2. **Réagir.** Protéger les élèves, faire cesser le trouble sans humilier, ne pas débattre des croyances, ne pas enquêter, alerter la personne compétente.\n3. **Traiter dans la durée.** Laisser une trace écrite, passer par les circuits prévus (chef d'établissement, CPE, personnels sociaux et de santé, procureur, cellule départementale, protocole pHARe), associer la famille lorsque l'intérêt de l'élève le permet, puis assurer le suivi et la prévention."
      },
      "developments": [
        "Exemple de réponse construite en trois temps : un élève refuse un exercice de probabilités au nom de ses convictions. Règle : obligation d'assiduité (articles L. 511-1 et R. 511-11 du Code de l'éducation) et article L. 511-2 sur la liberté d'expression. Réaction : expliquer que modéliser le hasard n'est ni jouer ni affirmer une thèse, rappeler l'obligation de travail sans humilier, poursuivre. Action durable : information du professeur principal et du chef d'établissement, dialogue avec la famille, réponse graduée en cas de refus persistant.",
        "Les erreurs qui coûtent le plus devant le jury : promettre le secret à un élève qui révèle un danger, enquêter soi-même, contacter la famille d'un élève qui dénonce des violences à la maison, négocier une règle, régler seul un manquement d'un collègue devant les élèves.",
        "Distinguer les situations d'urgence (danger grave et immédiat, alerte de mise en sûreté, malaise) où l'on agit sans délai, de celles qui laissent le temps du dialogue (contestation, tenue, absences), où la règle est rappelée puis la situation confiée au chef d'établissement."
      ],
      "juryTips": [
        "Annoncer sa démarche au jury : « je vais d'abord rappeler le cadre, puis dire ce que je fais sur le moment, enfin comment la situation se traite dans la durée ».",
        "Dans le premier temps, un principe bien formulé vaut mieux qu'un numéro d'article incertain.",
        "Dans le deuxième temps, insister sur la protection des élèves et le calme de l'adulte ; dans le troisième, sur le travail en équipe et la trace écrite.",
        "Penser à l'élève jusqu'au bout : la réponse inclut son suivi, et il ne doit jamais subir les conséquences du comportement de ses parents."
      ]
    }
  ];

  const COMPLEMENT_NOTE = "Statut de cette fiche : complément disciplinaire de niveau licence, pour consolider les connaissances et prendre du recul sur les programmes du secondaire. Ce n'est pas un plan de séance de classe : pour préparer l'oral de leçon, voir les fiches Leçon 11 à 15 et se reporter à la liste officielle des sujets de la session.";
  const COMPLEMENT_VOIE_NOTE = "Voie et format : ce complément sert surtout aux écrits, c'est-à-dire la première épreuve d'admissibilité de la voie bac + 3 (4 h, exercices ou problèmes) et l'épreuve disciplinaire de la voie bac + 5 (5 h). À l'oral, il donne du recul sur les notions. Les programmes de ces écrits ne couvrent pas tout son contenu : comparer chaque partie au programme de la session préparée.";
  const LICENCE_RENVOI_NOTE = "Rubriques des écrits sans fiche CAPES dédiée : le programme de la voie bac + 3 cite aussi des notions travaillées dans les chapitres de licence du site, à réviser pour l'épreuve d'exercices et de problèmes et souvent mobilisées dans les exercices de DS des compléments : polynômes et leurs racines (L1-02), systèmes linéaires et pivot de Gauss-Jordan (L1-03), axiomatique de $\\mathbb{R}$ et borne supérieure (L1-06), développements limités (L1-09), courbes paramétrées (L2-13), fonctions de deux variables (L2-15), suites et séries de fonctions (L3-07), séries entières (L3-08).";
  const LECON_VOIE_NOTE = "Voie et format : le plan et les développements de cette fiche suivent le format de la leçon de la voie bac + 5 et du troisième concours (2 h 30 de préparation, puis 1 h : plan 20 min, développement 10 min, entretien 30 min). En voie bac + 3, la première épreuve d'admission (2 h 30 de préparation, puis 1 h : exposé 20 min, échange 40 min) part de la résolution d'un exercice, puis de la notion en jeu et des notions connexes : voir la variante « exercice puis notion » dans les développements de cette fiche.";
  CAPES_LESSONS.forEach((lesson) => {
    if (lesson.complement) lesson.prerequisites.unshift(COMPLEMENT_NOTE, COMPLEMENT_VOIE_NOTE, LICENCE_RENVOI_NOTE);
    else if (/^capes-1[1-5]$/.test(lesson.id)) lesson.prerequisites.unshift(LECON_VOIE_NOTE);
  });

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
      complement: !!lesson.complement,
      num: lesson.num,
      title: lesson.title,
      shortTitle: lesson.title.split(':')[0].trim(),
      icon: lesson.id.startsWith('capes-oral2') ? 'scale' : 'award',
      badge: lesson.id.startsWith('capes-oral2') ? 'Épreuve d\'Admission' : 'Candidat Admissible',
      color: lesson.id.startsWith('capes-oral2') ? '#ec4899' : '#8b5cf6',
      description: lesson.plan.map(p => p.part).join(' • '),
      skills: lesson.prerequisites
    };
  });

  // =========================================================================
  // 2. EXERCICES D'ENTRAÎNEMENT CAPES (Paliers 1 à 4)
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
        statement: "Soit $(y_1, y_2)$ un système fondamental de solutions sur $\\mathbb{R}$ de l'équation $y'' + \\frac{2t}{1+t^2}\\,y' + q(t)\\,y = 0$, où $q$ est continue, et soit $W = y_1y_2' - y_1'y_2$ son wronskien. On suppose $W(0) = 10$. Calculer $W(2)$.",
        type: "exact",
        answer: "2",
        hint1: "Dérive $W$ et remplace $y_1''$ et $y_2''$ à l'aide de l'équation : tu obtiens une équation linéaire d'ordre 1 vérifiée par $W$.",
        hint2: "On a $W' = -\\frac{2t}{1+t^2}\\,W$, et $t \\mapsto \\ln(1+t^2)$ est une primitive de $\\frac{2t}{1+t^2}$. Écris $W(t)$ en fonction de $W(0)$, puis évalue en $t = 2$.",
        solution: "En dérivant, $W' = y_1y_2'' - y_1''y_2$. L'équation donne $y_i'' = -p\\,y_i' - q\\,y_i$ avec $p(t) = \\frac{2t}{1+t^2}$, et les termes en $q$ se compensent : $W' = -p\\,W$ (formule de Liouville). Donc $W(t) = W(0)\\exp\\left(-\\int_0^t p(s)\\,ds\\right) = \\frac{10}{1+t^2}$. Ainsi $W(2) = \\frac{10}{5} = 2$."
      },
      {
        id: 'capes-01-3',
        chapterId: 'capes-01',
        tier: 3,
        title: "Phénomène de résonance pour un oscillateur forcé non amorti",
        statement: "On considère le problème $y'' + 9y = 12\\cos(3t)$, $y(0) = 0$, $y'(0) = 3$. Sa solution s'écrit $y(t) = (\\alpha + \\beta t)\\sin(3t)$. Déterminer le couple $(\\alpha ; \\beta)$, à saisir sous la forme $(a;b)$.",
        type: "exact",
        answer: "(1;2)",
        hint1: "Calcule $y'$ et $y''$ pour la forme proposée, reporte dans l'équation pour trouver $\\beta$, puis utilise la condition sur $y'(0)$.",
        hint2: "Pour cette forme, le calcul donne $y'' + 9y = 6\\beta\\cos(3t)$. Identifie $\\beta$, puis exprime $y'(0)$ en fonction de $\\alpha$.",
        solution: "On a $y' = 3\\alpha\\cos(3t) + \\beta\\sin(3t) + 3\\beta t\\cos(3t)$ et $y'' = -9\\alpha\\sin(3t) + 6\\beta\\cos(3t) - 9\\beta t\\sin(3t)$. Donc $y'' + 9y = 6\\beta\\cos(3t)$, d'où $6\\beta = 12$ et $\\beta = 2$. La condition $y(0) = 0$ est vérifiée, et $y'(0) = 3\\alpha = 3$ donne $\\alpha = 1$. La solution est $y(t) = (1 + 2t)\\sin(3t)$ : le terme en $t\\sin(3t)$, non borné, traduit la résonance, car la pulsation du second membre égale la pulsation propre."
      },
      {
        id: 'capes-01-4',
        chapterId: 'capes-01',
        tier: 4,
        title: "Stabilité asymptotique globale d'un système linéaire autonome",
        statement: "Soit le système différentiel $Y' = AY$ dans $\\mathbb{R}^n$, où $A \\in \\mathcal{M}_n(\\mathbb{R})$. À quelle condition nécessaire et suffisante sur les valeurs propres de $A$ l'origine $0$ est-elle un équilibre globalement asymptotiquement stable (c'est-à-dire $\\lim_{t \\to +\\infty} Y(t) = 0$ pour toute condition initiale) ?",
        type: "mcq",
        options: [
          "Toutes les valeurs propres de A (complexes) ont une partie réelle strictement négative",
          "Toutes les valeurs propres de A sont réelles, et chacune d'elles est négative ou nulle",
          "Le déterminant de A est strictement négatif, quelle que soit la dimension n",
          "La trace de A, somme des valeurs propres, est strictement négative"
        ],
        correctIndex: 0,
        answer: "Toutes les valeurs propres de A (complexes) ont une partie réelle strictement négative",
        hint1: "Penser à la décomposition de Dunford ou à la réduction de Jordan : les composantes de $\\exp(tA)$ font intervenir des termes de la forme $t^k e^{\\lambda t}$.",
        solution: "Par décomposition de Jordan ou Dunford de $A$, les coefficients de la matrice résolvante $\\exp(tA)$ sont des combinaisons linéaires de fonctions de la forme $t^k e^{\\lambda t} = t^k e^{\\mathrm{Re}(\\lambda)t} e^{i \\mathrm{Im}(\\lambda)t}$ où $\\lambda \\in \\mathrm{Sp}(A)$ et $0 \\le k \\le n-1$. Ces termes tendent vers 0 quand $t \\to +\\infty$ si et seulement si $\\mathrm{Re}(\\lambda) < 0$ pour toute valeur propre $\\lambda$. Le système est donc asymptotiquement stable si et seulement si toutes les valeurs propres de $A$ sont de partie réelle strictement négative. Le critère de Routh-Hurwitz permet ensuite de vérifier cette condition sur les seuls coefficients du polynôme caractéristique, sans calculer les valeurs propres."
      }
    ],

    'capes-02': [
      {
        id: 'capes-02-1',
        chapterId: 'capes-02',
        tier: 1,
        title: "Dimension d'un sous-espace propre",
        statement: "Soit $A = \\begin{pmatrix} 2 & 1 & 1 \\\\ 1 & 2 & 1 \\\\ 1 & 1 & 2 \\end{pmatrix}$. Déterminer la dimension du sous-espace propre de $A$ associé à la valeur propre $1$.",
        type: "exact",
        answer: "2",
        hint1: "Le sous-espace propre associé à $1$ est le noyau de $A - I_3$. Utilise le théorème du rang.",
        hint2: "Toutes les lignes de $A - I_3$ sont égales à $(1\\ 1\\ 1)$. Quel est son rang ?",
        solution: "$E_1(A) = \\ker(A - I_3)$, et $A - I_3$ est la matrice dont tous les coefficients valent $1$ : elle est de rang $1$. D'après le théorème du rang, $\\dim E_1(A) = 3 - 1 = 2$. Remarque : $A$ admet aussi la valeur propre $4$, de vecteur propre $(1, 1, 1)$, et la somme des dimensions vaut $3$, donc $A$ est diagonalisable."
      },
      {
        id: 'capes-02-2',
        chapterId: 'capes-02',
        tier: 2,
        title: "Polynôme annulateur et critère de diagonalisation",
        statement: "Soit $A \\in \\mathcal{M}_3(\\mathbb{R})$ telle que $A^3 - 3A + 2I_3 = 0$ et $\\mathrm{tr}(A) = 0$. Déterminer $\\det(A)$.",
        type: "exact",
        answer: "-2",
        hint1: "Toute valeur propre complexe de $A$ est racine d'un polynôme annulateur. Factorise $X^3 - 3X + 2$, puis utilise la trace, somme des valeurs propres comptées avec multiplicité.",
        hint2: "$X^3 - 3X + 2 = (X - 1)^2(X + 2)$. Si $a$ et $b$ sont les multiplicités de $1$ et $-2$ dans le polynôme caractéristique, alors $a + b = 3$ et $a - 2b = 0$.",
        solution: "$X^3 - 3X + 2 = (X - 1)^2(X + 2)$ annule $A$, donc le spectre complexe de $A$ est inclus dans $\\{1, -2\\}$. Soient $a$ et $b$ les multiplicités respectives dans le polynôme caractéristique : $a + b = 3$ et, par la trace, $a - 2b = 0$. Donc $a = 2$ et $b = 1$. Le déterminant est le produit des valeurs propres comptées avec multiplicité : $\\det(A) = 1^2 \\times (-2) = -2$. Une telle matrice existe, par exemple $\\mathrm{diag}(1, 1, -2)$."
      },
      {
        id: 'capes-02-3',
        chapterId: 'capes-02',
        tier: 3,
        title: "Décomposition de Dunford et calcul de l'exponentielle",
        statement: "**Pour aller plus loin** : la décomposition de Dunford et l'exponentielle de matrice ne sont pas traitées dans le cours de ce chapitre, et la première ne figure pas aux programmes des écrits.\nSoit $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix} \\in \\mathcal{M}_2(\\mathbb{R})$. On pose $D = 2I_2$ et $N = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$. Quelle est l'expression exacte de l'exponentielle $\\exp(tA)$ pour $t \\in \\mathbb{R}$ ?",
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
        statement: "**Pour aller plus loin** : la notion d'endomorphisme cyclique n'est qu'évoquée dans un développement du cours de ce chapitre et ne figure pas aux programmes des écrits.\nSoit $E$ un espace vectoriel de dimension $n \\ge 1$ sur $\\mathbb{K} = \\mathbb{R}$ ou $\\mathbb{C}$ et $u \\in \\mathcal{L}(E)$. On dit que $u$ est cyclique s'il existe $x_0 \\in E$ tel que $(x_0, u(x_0), \\dots, u^{n-1}(x_0))$ soit une base de $E$. Laquelle des propriétés suivantes est équivalente à la cyclicité de $u$ ?",
        type: "mcq",
        options: [
          "$\\deg(\\pi_u) = n$, c'est-à-dire $\\pi_u = \\chi_u$",
          "Toutes les valeurs propres de $u$ sont nulles",
          "$u$ est diagonalisable",
          "La dimension de chaque sous-espace propre est supérieure ou égale à 2"
        ],
        correctIndex: 0,
        answer: "$\\deg(\\pi_u) = n$, c'est-à-dire $\\pi_u = \\chi_u$",
        hint1: "Si la famille $(u^k(x_0))_{0 \\le k \\le n-1}$ est libre, aucun polynôme non nul de degré $< n$ ne peut annuler $x_0$.",
        solution: "Si $u$ est cyclique avec vecteur générateur $x_0$, alors pour tout polynôme $P$ non nul de degré $\\le n-1$, $P(u)(x_0) \\ne 0$ car la famille $(x_0, \\dots, u^{n-1}(x_0))$ est libre, donc $\\deg(\\pi_u) \\ge n$. Comme $\\pi_u \\mid \\chi_u$ (théorème de Cayley-Hamilton) et $\\deg(\\chi_u) = n$, on en déduit $\\deg(\\pi_u) = n$ et, ces deux polynômes étant unitaires, $\\pi_u = \\chi_u$. Réciproquement, supposons $\\deg(\\pi_u) = n$. Pour tout diviseur unitaire strict $D$ de $\\pi_u$, on a $\\deg(D) < \\deg(\\pi_u)$, donc $D(u) \\ne 0$ et $\\ker D(u)$ est un sous-espace strict de $E$. Ces diviseurs sont en nombre fini et, $\\mathbb{K}$ étant infini, $E$ n'est pas réunion finie de sous-espaces stricts : il existe $x_0$ n'appartenant à aucun de ces noyaux. Le polynôme unitaire de plus petit degré annulant $x_0$ (c'est-à-dire $P$ tel que $P(u)(x_0) = 0$) divise $\\pi_u$ et n'en est pas un diviseur strict : il est égal à $\\pi_u$, de degré $n$. Aucun polynôme non nul de degré $\\le n-1$ n'annule donc $x_0$ : la famille $(x_0, \\dots, u^{n-1}(x_0))$ est libre, c'est une base de $E$."
      }
    ],

    'capes-03': [
      {
        id: 'capes-03-1',
        chapterId: 'capes-03',
        tier: 1,
        title: "Théorème de Dirichlet et valeur de la série de Fourier",
        statement: "Soit $f$ la fonction $2\\pi$-périodique, de classe $\\mathcal{C}^1$ par morceaux, définie par $f(x) = 1$ sur $]0 ; \\pi[$ et $f(x) = 3$ sur $]-\\pi ; 0[$. Quelle est la somme de sa série de Fourier au point $x = 0$ ?",
        type: "exact",
        answer: "2",
        hint1: "Applique le théorème de Dirichlet : en un point de discontinuité, la série converge vers la demi-somme des limites à gauche et à droite.",
        hint2: "Ici, $f(0^+) = 1$ et $f(0^-) = 3$.",
        solution: "$f$ est de classe $\\mathcal{C}^1$ par morceaux, donc le théorème de Dirichlet s'applique : la série de Fourier converge en $0$ vers $\\frac{f(0^+) + f(0^-)}{2} = \\frac{1 + 3}{2} = 2$. La somme ne dépend pas de la valeur éventuellement donnée à $f(0)$."
      },
      {
        id: 'capes-03-2',
        chapterId: 'capes-03',
        tier: 2,
        title: "Coefficients de Fourier d'une onde créneau",
        statement: "Soit $f$ la fonction $2\\pi$-périodique, impaire, définie sur $]0 ; \\pi[$ par $f(x) = 1$ et $f(0) = f(\\pi) = 0$. Quels sont ses coefficients de Fourier réels $b_n$ pour $n \\ge 1$ ?",
        type: "mcq",
        options: [
          "$b_n = \\frac{4}{\\pi n}$ si n est impair, $0$ sinon",
          "$b_n = \\frac{2}{\\pi n}$ pour tout entier n non nul",
          "$b_n = \\frac{(-1)^n}{\\pi n^2}$ pour tout entier n",
          "$b_n = 0$ pour tout n"
        ],
        correctIndex: 0,
        answer: "$b_n = \\frac{4}{\\pi n}$ si n est impair, $0$ sinon",
        hint1: "Comme $f$ est impaire, tous les $a_n$ sont nuls et $b_n = \\frac{2}{\\pi} \\int_0^\\pi f(t)\\sin(nt)\\,dt$.",
        hint2: "Sur $]0 ; \\pi[$, $f(t) = 1$ et une primitive de $\\sin(nt)$ est $-\\frac{\\cos(nt)}{n}$. Il reste à exprimer $\\cos(n\\pi)$ en distinguant $n$ pair et $n$ impair.",
        solution: "Par imparité de $f$, $a_n = 0$ pour tout $n$. Pour $b_n$ : $b_n = \\frac{2}{\\pi} \\int_0^\\pi 1 \\cdot \\sin(nt)\\,dt = \\frac{2}{\\pi n} (1 - \\cos(n\\pi)) = \\frac{2(1 - (-1)^n)}{\\pi n}$. Si $n = 2k$ est pair, $1 - (-1)^{2k} = 0$, d'où $b_{2k} = 0$. Si $n = 2k+1$ est impair, $1 - (-1)^{2k+1} = 2$, d'où $b_{2k+1} = \\frac{4}{\\pi(2k+1)}$."
      },
      {
        id: 'capes-03-3',
        chapterId: 'capes-03',
        tier: 3,
        title: "Somme alternée déduite du développement de x²",
        statement: "Soit $f$ la fonction $2\\pi$-périodique paire définie sur $[-\\pi ; \\pi]$ par $f(x) = x^2$. Son développement en série de Fourier est $f(x) = \\frac{\\pi^2}{3} + 4 \\sum_{n=1}^{+\\infty} \\frac{(-1)^n}{n^2} \\cos(nx)$, valable pour tout réel $x$. En déduire la valeur de $\\sum_{n=1}^{+\\infty} \\frac{(-1)^{n+1}}{n^2}$.",
        type: "exact",
        answer: "π²/12",
        hint1: "Choisis la valeur de $x$ qui fait apparaître $(-1)^n$ sans autre facteur dans le terme général.",
        hint2: "En $x = 0$, on a $\\cos(nx) = 1$ et $f(0) = 0$. Écris l'égalité obtenue et attention au signe de la somme demandée.",
        solution: "En $x = 0$ : $0 = \\frac{\\pi^2}{3} + 4\\sum_{n=1}^{+\\infty} \\frac{(-1)^n}{n^2}$. Donc $\\sum_{n=1}^{+\\infty} \\frac{(-1)^n}{n^2} = -\\frac{\\pi^2}{12}$ et, en changeant de signe, $\\sum_{n=1}^{+\\infty} \\frac{(-1)^{n+1}}{n^2} = \\frac{\\pi^2}{12}$. L'évaluation en $x = \\pi$, où $\\cos(n\\pi) = (-1)^n$, donne de même $\\sum_{n=1}^{+\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}$."
      },
      {
        id: 'capes-03-4',
        chapterId: 'capes-03',
        tier: 4,
        title: "Phénomène de Gibbs et absence de convergence uniforme",
        statement: "Soit $f$ une fonction présentant une discontinuité de première espèce, et $S_N(f)$ ses sommes partielles de Fourier. On admet que, mesuré depuis le milieu du saut, le maximum de $S_N(f)$ au voisinage du saut tend, quand $N \\to +\\infty$, vers $\\frac{2}{\\pi}\\int_0^\\pi \\frac{\\sin t}{t}\\,dt \\approx 1{,}179$ fois le demi-saut. Quel est le comportement de l'oscillation maximale au voisinage du saut quand $N \\to +\\infty$ ?",
        type: "mcq",
        options: [
          "Un dépassement d'environ $8{,}95\\,\\%$ du saut, qui ne tend pas vers 0",
          "L'oscillation tend vers 0 uniformément dès que $N \\ge 50$",
          "Le dépassement tend vers $+\\infty$ comme $\\ln(N)$",
          "La série converge toujours normalement, donc il n'y a aucun dépassement"
        ],
        correctIndex: 0,
        answer: "Un dépassement d'environ $8{,}95\\,\\%$ du saut, qui ne tend pas vers 0",
        hint1: "Le dépassement du palier, exprimé en demi-sauts, est l'excès de ce rapport sur $1$ : convertis-le en pourcentage du saut total, puis demande-toi si cette limite dépend de $N$.",
        solution: "Le phénomène de Gibbs montre que pour une fonction discontinue de première espèce (comme le créneau), les sommes partielles de Fourier oscillent au voisinage de la discontinuité avec un dépassement asymptotique constant : en fraction du saut total, il vaut $\\frac{1}{2}\\left(\\frac{2}{\\pi} \\int_0^\\pi \\frac{\\sin t}{t}\\,dt - 1\\right) = \\frac{1}{\\pi} \\int_0^\\pi \\frac{\\sin t}{t}\\,dt - \\frac{1}{2} \\approx 0{,}0895$, soit environ $8{,}95\\,\\%$ de la hauteur du saut, indépendamment de $N$. Cela illustre rigoureusement l'absence de convergence uniforme sur tout intervalle contenant une discontinuité."
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
          "La loi géométrique $\\mathcal{G}(p)$, $p \\in ]0 ; 1[$",
          "La loi de Poisson $\\mathcal{P}(\\lambda)$, $\\lambda > 0$",
          "La loi binomiale $\\mathcal{B}(n, p)$",
          "La loi uniforme discrète"
        ],
        correctIndex: 0,
        answer: "La loi géométrique $\\mathcal{G}(p)$, $p \\in ]0 ; 1[$",
        hint1: "L'équation fonctionnelle $g(n+k) = g(n)g(k)$ pour $g(n) = P(X > n)$ conduit à $g(n) = q^n$ avec $q = 1-p$.",
        solution: "Posons $g(n) = P(X > n)$. La relation conditionnelle s'écrit $\\frac{P(X > n+k)}{P(X > n)} = P(X > k)$, soit $g(n+k) = g(n)g(k)$. Sur $\\mathbb{N}^*$, l'unique solution décroissante vérifiant $g(0)=1$ est $g(n) = q^n$ avec $q = g(1) \\in ]0 ; 1[$. Alors $P(X = k) = P(X > k-1) - P(X > k) = q^{k-1}(1-q) = p(1-p)^{k-1}$, ce qui caractérise la loi géométrique $\\mathcal{G}(p)$."
      },
      {
        id: 'capes-04-2',
        chapterId: 'capes-04',
        tier: 2,
        title: "Fonction génératrice d'une variable de Poisson",
        statement: "Soit $X$ une variable aléatoire suivant la loi de Poisson de paramètre $3$. Sa fonction génératrice est $G_X(t) = e^{3(t-1)}$. Calculer $E(X^2)$ à l'aide de $G_X$.",
        type: "exact",
        answer: "12",
        hint1: "Pour une variable dont la fonction génératrice est assez régulière en $1$, on a $G_X'(1) = E(X)$ et $G_X''(1) = E(X(X-1))$.",
        hint2: "$G_X'(t) = 3e^{3(t-1)}$, donc $G_X'(1) = 3$. Calcule $G_X''(1)$, puis écris $E(X^2) = E(X(X-1)) + E(X)$.",
        solution: "$G_X'(1) = 3 = E(X)$ et $G_X''(t) = 9e^{3(t-1)}$, donc $E(X(X-1)) = G_X''(1) = 9$. Ainsi $E(X^2) = E(X(X-1)) + E(X) = 9 + 3 = 12$. On retrouve $V(X) = 12 - 3^2 = 3$, ce qui est bien la variance attendue."
      },
      {
        id: 'capes-04-3',
        chapterId: 'capes-04',
        tier: 3,
        title: "Problème du collectionneur de vignettes (Coupon Collector)",
        statement: "Une collection compte $4$ vignettes différentes. Chaque achat fournit une vignette uniformément au hasard, indépendamment des précédents. Calculer le nombre moyen d'achats nécessaires pour compléter la collection, sous forme de fraction irréductible.",
        type: "exact",
        answer: "25/3",
        hint1: "Décompose le nombre d'achats en une somme de temps d'attente : quand tu possèdes $k$ vignettes distinctes, le temps avant d'en obtenir une nouvelle suit une loi géométrique.",
        hint2: "Avec $k$ vignettes déjà possédées, la probabilité de succès est $\\frac{4 - k}{4}$ et le temps moyen vaut $\\frac{4}{4 - k}$. Additionne pour $k$ allant de $0$ à $3$.",
        solution: "On note $T = T_0 + T_1 + T_2 + T_3$, où $T_k$ est le temps d'attente d'une nouvelle vignette quand on en possède $k$ distinctes. $T_k$ suit la loi géométrique de paramètre $\\frac{4-k}{4}$, donc $E(T_k) = \\frac{4}{4-k}$. Par linéarité : $E(T) = \\frac{4}{4} + \\frac{4}{3} + \\frac{4}{2} + \\frac{4}{1} = 1 + \\frac{4}{3} + 2 + 4 = \\frac{25}{3}$. En général, $E(T_n) = n\\sum_{k=1}^n \\frac{1}{k}$."
      },
      {
        id: 'capes-04-4',
        chapterId: 'capes-04',
        tier: 4,
        title: "Loi faible des grands nombres pour variables non corrélées",
        statement: "Soit $(X_n)_{n \\ge 1}$ une suite de variables aléatoires deux à deux non corrélées, de même espérance $\\mu$ et dont les variances sont uniformément majorées : $\\forall n,\\; V(X_n) \\le M < +\\infty$. Que dit l'inégalité de Bienaymé-Tchebychev sur la moyenne empirique $\\bar{X}_n = \\frac{1}{n} \\sum_{i=1}^n X_i$ ?",
        type: "mcq",
        options: [
          "$P(|\\bar{X}_n - \\mu| \\ge \\varepsilon) \\le \\frac{M}{n \\varepsilon^2}$, donc convergence en probabilité vers $\\mu$",
          "$P(|\\bar{X}_n - \\mu| \\ge \\varepsilon) = 0$ pour tout $n \\ge 100$",
          "La moyenne empirique ne converge que si les variables sont indépendantes et de même loi, ce qui n'est pas supposé ici",
          "La variance de $\\bar{X}_n$ vaut $M$"
        ],
        correctIndex: 0,
        answer: "$P(|\\bar{X}_n - \\mu| \\ge \\varepsilon) \\le \\frac{M}{n \\varepsilon^2}$, donc convergence en probabilité vers $\\mu$",
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
        statement: "Dans un espace préhilbertien réel, on a $\\|x\\| = 3$, $\\|y\\| = 2$ et $\\|x + y\\| = 4$. Calculer $\\|x - y\\|^2$.",
        type: "exact",
        answer: "10",
        hint1: "Utilise l'identité du parallélogramme, qui relie $\\|x + y\\|^2$, $\\|x - y\\|^2$, $\\|x\\|^2$ et $\\|y\\|^2$.",
        hint2: "$\\|x + y\\|^2 + \\|x - y\\|^2 = 2\\|x\\|^2 + 2\\|y\\|^2$, avec $\\|x + y\\|^2 = 16$. Remplace les autres normes.",
        solution: "L'identité du parallélogramme s'obtient en développant les deux carrés scalaires. Elle donne $\\|x - y\\|^2 = 2 \\times 9 + 2 \\times 4 - 16 = 10$. **Pour aller plus loin :** le théorème de Fréchet-von Neumann-Jordan affirme réciproquement qu'une norme vérifiant cette identité provient d'un produit scalaire, donné par la formule de polarisation."
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
        statement: "Dans $E = \\mathcal{C}([0 ; 1], \\mathbb{R})$ muni du produit scalaire $\\langle f, g \\rangle = \\int_0^1 f(t)g(t)\\,dt$, on note $f(t) = t^2$ et $F$ le sous-espace des fonctions constantes. Calculer le carré $d(f, F)^2$ de la distance de $f$ à $F$, sous forme de fraction irréductible.",
        type: "exact",
        answer: "4/45",
        hint1: "Le projeté orthogonal de $f$ sur $F$ est la constante $\\langle f, 1 \\rangle$, car $\\|1\\| = 1$. Puis applique le théorème de Pythagore.",
        hint2: "$\\langle f, 1 \\rangle = \\int_0^1 t^2\\,dt = \\frac{1}{3}$ et $d(f, F)^2 = \\|f\\|^2 - \\langle f, 1 \\rangle^2$. Il reste à calculer $\\|f\\|^2$.",
        solution: "Comme $\\|1\\| = 1$, le projeté orthogonal de $f$ sur $F$ est la constante $p = \\langle f, 1 \\rangle = \\frac{1}{3}$. Par le théorème de Pythagore, $d(f, F)^2 = \\|f\\|^2 - p^2 = \\int_0^1 t^4\\,dt - \\frac{1}{9} = \\frac{1}{5} - \\frac{1}{9} = \\frac{4}{45}$. La distance vaut donc $\\frac{2}{3\\sqrt{5}}$."
      },
      {
        id: 'capes-05-4',
        chapterId: 'capes-05',
        tier: 4,
        title: "Orthogonal d'un hyperplan en dimension infinie",
        statement: "On munit $E = \\mathbb{R}[X]$ du produit scalaire $\\langle P, Q \\rangle = \\sum_{k \\ge 0} p_kq_k$, où $P = \\sum p_kX^k$ et $Q = \\sum q_kX^k$, et l'on pose $G = \\{P \\in E : P(2) = 0\\}$, hyperplan de $E$. Que peut-on dire de $G^{\\perp}$, de $G^{\\perp\\perp}$ et de la somme $G + G^{\\perp}$ ?",
        type: "mcq",
        options: [
          "$G^{\\perp} = \\{0\\}$, donc $G^{\\perp\\perp} = E \\neq G$ et $G + G^{\\perp} = G \\neq E$",
          "$G^{\\perp}$ est une droite, puisque $G$ est un hyperplan, et $E = G \\oplus G^{\\perp}$",
          "$G^{\\perp} = \\mathrm{Vect}(X - 2)$ et $G^{\\perp\\perp} = G$",
          "$G^{\\perp} = \\{0\\}$, mais $G^{\\perp\\perp} = G$ comme pour tout sous-espace"
        ],
        correctIndex: 0,
        answer: "$G^{\\perp} = \\{0\\}$, donc $G^{\\perp\\perp} = E \\neq G$ et $G + G^{\\perp} = G \\neq E$",
        hint1: "Pour décrire $G^{\\perp}$, il suffit qu'un polynôme $Q$ soit orthogonal à une famille simple d'éléments de $G$ : cherche des polynômes de $G$ qui n'ont que deux coefficients non nuls.",
        hint2: "Pour tout $k \\ge 0$, $X^{k+1} - 2X^k$ appartient à $G$. Traduis $\\langle Q, X^{k+1} - 2X^k \\rangle = 0$ en une relation entre $q_{k+1}$ et $q_k$, puis souviens-toi que $Q$ n'a qu'un nombre fini de coefficients non nuls.",
        solution: "$G$ est le noyau de la forme linéaire non nulle $P \\mapsto P(2)$ : c'est un hyperplan, distinct de $E$. Soit $Q \\in G^{\\perp}$. Pour tout $k \\ge 0$, $X^{k+1} - 2X^k \\in G$, donc $0 = \\langle Q, X^{k+1} - 2X^k \\rangle = q_{k+1} - 2q_k$. Par récurrence, $q_k = 2^kq_0$ pour tout $k$. Comme $Q$ est un polynôme, $q_k = 0$ pour $k$ assez grand, d'où $q_0 = 0$, puis $q_k = 0$ pour tout $k$ : $G^{\\perp} = \\{0\\}$. Par conséquent $G^{\\perp\\perp} = \\{0\\}^{\\perp} = E \\neq G$, et $G + G^{\\perp} = G \\neq E$. La deuxième affirmation reproduit à tort le cas de la dimension finie ; la troisième est fausse car $X - 2 \\in G$ et $\\langle X - 2, X - 2 \\rangle = 5 \\neq 0$ ; la quatrième contredit $\\{0\\}^{\\perp} = E$. Ce contre-exemple montre que l'hypothèse « $F$ de dimension finie » du théorème de projection ne peut pas être supprimée : en dimension finie, on aurait $E = G \\oplus G^{\\perp}$ et $G^{\\perp\\perp} = G$."
      },
      {
        id: 'capes-05-5',
        chapterId: 'capes-05',
        tier: 2,
        title: "Nature d'une application affine du plan",
        statement: "Dans le plan rapporté à un repère, on considère l'application $f$ qui à tout point $M(x ; y)$ associe le point $M'(-2x + 6 ; -2y + 3)$. Quelle est la nature de $f$ ?",
        type: "mcq",
        options: [
          "L'homothétie de centre $\\Omega(2 ; 1)$ et de rapport $-2$",
          "L'homothétie de centre $\\Omega(6 ; 3)$ et de rapport $-2$",
          "L'homothétie de centre $\\Omega(2 ; 1)$ et de rapport $2$",
          "Une application affine sans point fixe"
        ],
        correctIndex: 0,
        answer: "L'homothétie de centre $\\Omega(2 ; 1)$ et de rapport $-2$",
        hint1: "Écris $f(M) = f(O) + \\vec{f}(\\overrightarrow{OM})$ pour identifier la partie linéaire $\\vec{f}$, puis cherche les points fixes de $f$.",
        hint2: "La partie linéaire est $(x ; y) \\mapsto (-2x ; -2y)$, c'est-à-dire $-2\\,\\mathrm{id}$. Un point fixe vérifie $x = -2x + 6$ et $y = -2y + 3$.",
        solution: "La partie linéaire de $f$ est $-2\\,\\mathrm{id}$. Comme $-2 \\neq 1$, $f$ a un unique point fixe : $x = -2x + 6$ donne $x = 2$ et $y = -2y + 3$ donne $y = 1$, d'où $\\Omega(2 ; 1)$. Alors $\\overrightarrow{\\Omega M'} = (-2x + 6 - 2 ; -2y + 3 - 1) = -2(x - 2 ; y - 1) = -2\\,\\overrightarrow{\\Omega M}$ : $f$ est l'homothétie de centre $\\Omega(2 ; 1)$ et de rapport $-2$. Le point $(6 ; 3)$ est l'image de l'origine, pas le centre."
      },
      {
        id: 'capes-05-6',
        chapterId: 'capes-05',
        tier: 3,
        title: "Axe et angle d'une rotation de l'espace",
        statement: "Dans $\\mathbb{R}^3$ muni de sa structure euclidienne canonique, on considère l'endomorphisme $u$ de matrice $A = \\frac{1}{3}\\begin{pmatrix} 2 & -1 & 2 \\\\ 2 & 2 & -1 \\\\ -1 & 2 & 2 \\end{pmatrix}$ dans la base canonique. Vérifier que $u$ est une rotation, déterminer son axe, puis donner la mesure $\\theta \\in [0 ; \\pi]$ de son angle (angle non orienté).",
        type: "exact",
        answer: "π/3",
        hint1: "Les colonnes de $A$ sont unitaires et deux à deux orthogonales, et $\\det A = 1$. Pour une rotation d'angle $\\theta$ de l'espace, la trace vaut $1 + 2\\cos\\theta$ : écris sa matrice dans une base orthonormée dont le premier vecteur dirige l'axe.",
        hint2: "L'axe est dirigé par $(1 ; 1 ; 1)$, car $A$ laisse ce vecteur invariant, et $\\mathrm{tr}\\,A = \\frac{2 + 2 + 2}{3} = 2$. Il reste à résoudre $1 + 2\\cos\\theta = 2$ sur $[0 ; \\pi]$.",
        solution: "Les colonnes de $A$ sont de norme $1$ (par exemple $\\frac{4 + 4 + 1}{9} = 1$) et deux à deux orthogonales, donc $A^{\\top}A = I_3$ ; de plus $\\det A = 1$ : $u$ est une rotation. Son axe est $\\mathrm{Ker}(u - \\mathrm{id})$ : $A$ envoie $(1 ; 1 ; 1)$ sur lui-même, donc l'axe est la droite dirigée par $(1 ; 1 ; 1)$ (et $u \\neq \\mathrm{id}$). Dans une base orthonormée $(e_1, e_2, e_3)$ où $e_1$ dirige l'axe, la matrice de $u$ est $\\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & \\cos\\theta & -\\sin\\theta \\\\ 0 & \\sin\\theta & \\cos\\theta \\end{pmatrix}$ ; la trace ne dépend pas de la base, donc $1 + 2\\cos\\theta = \\mathrm{tr}\\,A = 2$, d'où $\\cos\\theta = \\frac{1}{2}$ et $\\theta = \\frac{\\pi}{3}$. Vérification : $w = (1 ; -1 ; 0)$ est orthogonal à l'axe, $u(w) = (1 ; 0 ; -1)$ et $\\frac{w \\cdot u(w)}{\\|w\\|\\,\\|u(w)\\|} = \\frac{1}{2}$. Le signe de l'angle orienté dépend de l'orientation choisie sur l'axe."
      }
    ],

    'capes-06': [
      {
        id: 'capes-06-1',
        chapterId: 'capes-06',
        tier: 1,
        title: "Continuité sous l'intégrale sur un segment compact",
        statement: "Soit $I$ un intervalle de $\\mathbb{R}$ et $f : I \\times [a ; b] \\to \\mathbb{R}$ continue en $(x, t)$. Pourquoi la fonction $F(x) = \\int_a^b f(x, t)\\,dt$ est-elle automatiquement continue sur $I$ sans hypothèse de domination globale supplémentaire ?",
        type: "mcq",
        options: [
          "Car $K \\times [a ; b]$ est compact pour tout compact $K \\subset I$, donc $f$ y est uniformément continue (Heine)",
          "Car $f$ est bornée sur $I \\times [a ; b]$ dès que $I$ est un intervalle, ce qui fournit une domination par une constante",
          "Car, sur un segment, la convergence simple de $f(x_n, \\cdot)$ vers $f(x, \\cdot)$ suffit toujours à intervertir limite et intégrale",
          "C'est faux : une domination globale est toujours obligatoire même sur un segment"
        ],
        correctIndex: 0,
        answer: "Car $K \\times [a ; b]$ est compact pour tout compact $K \\subset I$, donc $f$ y est uniformément continue (Heine)",
        hint1: "L'hypothèse de domination n'est nécessaire que si le domaine d'intégration n'est pas compact (intervalle infini ou bornes non fermées).",
        solution: "Lorsque l'intervalle d'intégration $[a ; b]$ est un segment, pour tout compact $K \\subset I$, $f$ est continue sur le produit compact $K \\times [a ; b]$. D'après le théorème de Heine, $f$ y est uniformément continue : $\\forall \\varepsilon > 0,\\; \\exists \\eta > 0$ tel que $|x - x_0| \\le \\eta \\implies |f(x, t) - f(x_0, t)| \\le \\frac{\\varepsilon}{b-a}$. Par intégration, $|F(x) - F(x_0)| \\le \\varepsilon$. La domination n'est donc nécessaire que sur les intervalles d'intégration non compacts."
      },
      {
        id: 'capes-06-2',
        chapterId: 'capes-06',
        tier: 2,
        title: "Calcul de l'intégrale de Gauss par coordonnées polaires",
        statement: "Calculer $\\iint_{\\mathbb{R}^2} e^{-(x^2 + y^2)}\\,dx\\,dy$ à l'aide d'un passage en coordonnées polaires, en justifiant ce passage sur le plan tout entier par un encadrement du carré $C_R = [-R ; R]^2$ entre deux disques centrés en l'origine.",
        type: "exact",
        answer: "π",
        hint1: "En coordonnées polaires, $dx\\,dy$ devient $r\\,dr\\,d\\theta$ et $x^2 + y^2 = r^2$. La fonction étant positive, le calcul se fait par intégrales successives. Pour la justification, remarque que le disque $D_R$ de rayon $R$ est contenu dans $C_R$, lui-même contenu dans le disque $D_{R\\sqrt{2}}$.",
        hint2: "L'intégrale devient $\\int_0^{2\\pi} \\left(\\int_0^{+\\infty} r e^{-r^2}\\,dr\\right) d\\theta$. Une primitive de $re^{-r^2}$ est $-\\frac{1}{2}e^{-r^2}$.",
        solution: "La fonction $f : (x, y) \\mapsto e^{-(x^2 + y^2)}$ est continue et positive. Sur le disque $D_\\rho$ de centre $O$ et de rayon $\\rho$, le passage en polaires donne $\\iint_{D_\\rho} f = \\int_0^{2\\pi} \\int_0^{\\rho} re^{-r^2}\\,dr\\,d\\theta = 2\\pi \\left[-\\frac{1}{2}e^{-r^2}\\right]_0^{\\rho} = \\pi\\left(1 - e^{-\\rho^2}\\right)$. Justification sur le plan entier : pour $R > 0$, on a $D_R \\subset C_R \\subset D_{R\\sqrt{2}}$ avec $C_R = [-R ; R]^2$, donc, $f$ étant positive, $\\pi\\left(1 - e^{-R^2}\\right) \\le \\iint_{C_R} f \\le \\pi\\left(1 - e^{-2R^2}\\right)$. Les deux bornes tendent vers $\\pi$ quand $R \\to +\\infty$, donc $\\iint_{\\mathbb{R}^2} f = \\lim_{R \\to +\\infty} \\iint_{C_R} f = \\pi$. Par le théorème de Fubini, $\\iint_{C_R} f = \\left(\\int_{-R}^{R} e^{-x^2}\\,dx\\right)^2$, d'où, en passant à la limite, l'intégrale de Gauss $\\int_{\\mathbb{R}} e^{-x^2}\\,dx = \\sqrt{\\pi}$."
      },
      {
        id: 'capes-06-3',
        chapterId: 'capes-06',
        tier: 3,
        title: "Intégrale de Dirichlet via une intégrale à paramètre",
        statement: "Pour $x > 0$, on pose $F(x) = \\int_0^{+\\infty} \\frac{\\sin(t)}{t} e^{-xt}\\,dt$. On admet que $F'(x) = -\\frac{1}{1+x^2}$ et que $\\lim_{x \\to +\\infty} F(x) = 0$. Calculer $F(1)$.",
        type: "exact",
        answer: "π/4",
        hint1: "Intègre $F'$ : $F$ s'écrit $C - \\arctan(x)$, et la limite en $+\\infty$ fixe la constante $C$.",
        hint2: "Comme $\\arctan(x) \\to \\frac{\\pi}{2}$, on a $C = \\frac{\\pi}{2}$. Il reste à évaluer en $x = 1$.",
        solution: "De $F'(x) = -\\frac{1}{1+x^2}$ on tire $F(x) = C - \\arctan(x)$ sur $]0 ; +\\infty[$. La limite nulle en $+\\infty$ donne $C = \\frac{\\pi}{2}$. Donc $F(1) = \\frac{\\pi}{2} - \\frac{\\pi}{4} = \\frac{\\pi}{4}$. **Pour aller plus loin :** un argument de continuité en $0^+$, plus délicat, fournit l'intégrale de Dirichlet $\\int_0^{+\\infty} \\frac{\\sin(t)}{t}\\,dt = \\frac{\\pi}{2}$."
      },
      {
        id: 'capes-06-4',
        chapterId: 'capes-06',
        tier: 4,
        title: "Critère de Lebesgue pour l'intégrabilité selon Riemann",
        statement: "**Pour aller plus loin** : le théorème de Lebesgue-Vitali et la mesure de Lebesgue ne sont pas traités dans le cours de ce chapitre.\nSoit $f : [a ; b] \\to \\mathbb{R}$ une fonction bornée. D'après le théorème de Lebesgue-Vitali, à quelle condition nécessaire et suffisante $f$ est-elle intégrable au sens de Riemann sur $[a ; b]$ ?",
        type: "mcq",
        options: [
          "Ses discontinuités forment un ensemble négligeable (mesure de Lebesgue nulle)",
          "La fonction f est de classe C1 sur [a ; b]",
          "L'ensemble des points de discontinuité de f est au plus dénombrable sur [a ; b]",
          "La fonction f est monotone sur [a ; b]"
        ],
        correctIndex: 0,
        answer: "Ses discontinuités forment un ensemble négligeable (mesure de Lebesgue nulle)",
        hint1: "Une fonction monotone peut avoir une infinité dénombrable de discontinuités et rester intégrable, l'indicatrice de l'ensemble de Cantor est discontinue en une infinité non dénombrable de points et reste intégrable, alors que $\\mathbf{1}_{\\mathbb{Q}}$ (discontinue partout) ne l'est pas : quelle notion de « petitesse » de l'ensemble des discontinuités départage ces cas ?",
        solution: "Le critère de Lebesgue-Vitali établit qu'une fonction bornée sur un segment $[a ; b]$ est Riemann-intégrable si et seulement si l'ensemble de ses points de discontinuité est de mesure de Lebesgue nulle. Cela inclut toutes les fonctions continues par morceaux, les fonctions réglées, ainsi que des fonctions ayant un ensemble non dénombrable de discontinuités (comme sur l'ensemble triadique de Cantor qui est de mesure nulle)."
      }
    ],

    'capes-07': [
      {
        id: 'capes-07-1',
        chapterId: 'capes-07',
        tier: 1,
        title: "Ordre et signature d'un k-cycle",
        statement: "Dans $\\mathcal{S}_7$, on considère $\\sigma = (1\\ 2\\ 3)(4\\ 5\\ 6\\ 7)$. Déterminer le couple formé de l'ordre et de la signature de $\\sigma$, à saisir sous la forme $(a;b)$.",
        type: "exact",
        answer: "(12;-1)",
        hint1: "L'ordre d'un produit de cycles à supports disjoints est le PPCM des longueurs. La signature d'un cycle de longueur $k$ est $(-1)^{k-1}$.",
        hint2: "Les longueurs sont $3$ et $4$. Calcule leur PPCM, puis le produit des signatures $(-1)^{2}$ et $(-1)^{3}$.",
        solution: "Les cycles sont à supports disjoints, donc commutent, et l'ordre vaut $\\mathrm{ppcm}(3, 4) = 12$. La signature vaut $(-1)^{3-1} \\times (-1)^{4-1} = 1 \\times (-1) = -1$. La réponse est $(12 ; -1)$."
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
        hint1: "Pars de $1$ et applique $\\sigma$ jusqu'à revenir à $1$ : tu obtiens un premier cycle. Recommence avec le plus petit élément non encore atteint, jusqu'à épuiser $\\{1, \\dots, 6\\}$.",
        hint2: "Ici $\\sigma(1) = 3$ : le cycle contenant $1$ commence par $(1\\; 3\\; \\dots)$. Rappel : un cycle de longueur $k$ a pour signature $(-1)^{k-1}$, et la signature d'un produit est le produit des signatures.",
        solution: "On calcule les orbites successives :\n- Pour 1 : $\\sigma(1) = 3$, $\\sigma(3) = 4$, $\\sigma(4) = 1$, cycle $(1\\; 3\\; 4)$ de longueur 3.\n- Pour 2 : $\\sigma(2) = 5$, $\\sigma(5) = 2$, cycle $(2\\; 5)$ de longueur 2.\n- Pour 6 : $\\sigma(6) = 6$, point fixe.\nAinsi $\\sigma = (1\\; 3\\; 4)(2\\; 5)$. Pour la signature : $\\varepsilon(\\sigma) = \\varepsilon((1\\; 3\\; 4)) \\cdot \\varepsilon((2\\; 5)) = (-1)^{3-1} \\cdot (-1)^{2-1} = (+1) \\cdot (-1) = -1$."
      },
      {
        id: 'capes-07-3',
        chapterId: 'capes-07',
        tier: 3,
        title: "Classes de conjugaison dans le groupe symétrique",
        statement: "Combien d'éléments possède la classe de conjugaison de $(1\\ 2\\ 3)(4\\ 5)$ dans $\\mathcal{S}_5$ ?",
        type: "exact",
        answer: "20",
        hint1: "Deux permutations sont conjuguées si et seulement si elles ont le même type cyclique. Compte les permutations de type $(3, 2)$.",
        hint2: "Choisis les $3$ éléments du 3-cycle, soit $\\binom{5}{3}$ choix. Combien de 3-cycles distincts sur $3$ éléments donnés ? Le 2-cycle restant est alors déterminé.",
        solution: "La classe de conjugaison est l'ensemble des permutations de type $(3, 2)$. On choisit les trois éléments du 3-cycle ($\\binom{5}{3} = 10$ choix), puis le 3-cycle sur ces éléments ($2$ choix), et la transposition est imposée. La classe a donc $10 \\times 2 = 20$ éléments. Vérification par le centralisateur : $\\frac{5!}{3 \\times 2} = 20$."
      },
      {
        id: 'capes-07-4',
        chapterId: 'capes-07',
        tier: 4,
        title: "Simplicité de A5 par l'équation aux classes",
        statement: "Dans $\\mathcal{A}_5$, les classes de conjugaison ont pour cardinaux $1$, $12$, $12$, $15$ et $20$. Un sous-groupe distingué est réunion de classes de conjugaison, contient l'identité, et son ordre divise $60$. Combien $\\mathcal{A}_5$ possède-t-il de sous-groupes distingués, en comptant le sous-groupe trivial et $\\mathcal{A}_5$ lui-même ?",
        type: "exact",
        answer: "2",
        hint1: "Un sous-groupe distingué a pour ordre $1$ augmenté de la somme d'une partie de $\\{12, 12, 15, 20\\}$. Cherche quelles sommes donnent un diviseur de $60$.",
        hint2: "Les ordres possibles strictement compris entre $1$ et $60$ sont $13, 16, 21, 25, 28, 33, 36, 40, 45, 48$. Compare avec les diviseurs de $60$.",
        solution: "Les valeurs possibles de $|H|$ sont $1$ plus une somme d'éléments de $\\{12, 12, 15, 20\\}$ : $1, 13, 16, 21, 25, 28, 33, 36, 40, 45, 48, 60$. Parmi elles, seules $1$ et $60$ divisent $60$. Donc les seuls sous-groupes distingués sont $\\{e\\}$ et $\\mathcal{A}_5$ : il y en a $2$, et $\\mathcal{A}_5$ est simple. **Pour aller plus loin :** cette simplicité, valable pour $\\mathcal{A}_n$ dès que $n \\geq 5$, implique que $\\mathcal{S}_n$ n'est pas résoluble ; c'est l'argument central du théorème d'Abel-Ruffini."
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
          "Le graphe de f est au-dessus de chacune de ses tangentes sur $I$",
          "La dérivée $f'$ est décroissante sur $I$",
          "La dérivée $f'$ est positive sur $I$",
          "Tout point critique de $f$ est un minimum global de $f$ sur l'intervalle $I$"
        ],
        correctIndex: 0,
        answer: "Le graphe de f est au-dessus de chacune de ses tangentes sur $I$",
        hint1: "La dérivée d'une fonction convexe est croissante. L'inégalité des accroissements finis donne la position de la courbe par rapport à la tangente.",
        solution: "Pour une fonction dérivable sur un intervalle, $f$ est convexe ssi sa dérivée $f'$ est croissante ssi pour tout $x_0$, la courbe représentative est au-dessus de sa tangente au point $x_0$ : $f(x) \\ge f(x_0) + f'(x_0)(x - x_0)$ pour tout $x \\in I$."
      },
      {
        id: 'capes-08-2',
        chapterId: 'capes-08',
        tier: 2,
        title: "Inégalité arithmético-géométrique via la convexité de -ln",
        statement: "Soient $x, y, z$ trois réels strictement positifs tels que $xyz = 8$. Déterminer la valeur minimale de $x + y + z$.",
        type: "exact",
        answer: "6",
        hint1: "Utilise l'inégalité arithmético-géométrique, conséquence de la convexité de $-\\ln$ par l'inégalité de Jensen.",
        hint2: "$\\frac{x + y + z}{3} \\geq \\sqrt[3]{xyz}$. Remplace $xyz$, puis vérifie que l'égalité est atteinte.",
        solution: "La convexité de $-\\ln$ donne, par l'inégalité de Jensen à poids égaux, $\\frac{x + y + z}{3} \\geq \\sqrt[3]{xyz} = 2$. Donc $x + y + z \\geq 6$, et l'égalité a lieu pour $x = y = z = 2$, qui vérifie bien $xyz = 8$. Le minimum vaut $6$."
      },
      {
        id: 'capes-08-3',
        chapterId: 'capes-08',
        tier: 3,
        title: "Inégalité de Hölder pour les suites",
        statement: "Soient $a$ et $b$ deux réels positifs tels que $a^3 + b^3 = 2$. Déterminer la valeur maximale de $a + b$.",
        type: "exact",
        answer: "2",
        hint1: "Applique l'inégalité de Hölder aux couples $(a, b)$ et $(1, 1)$, avec les exposants conjugués $p = 3$ et $q = \\frac{3}{2}$.",
        hint2: "$a + b \\leq (a^3 + b^3)^{1/3}\\left(1^{3/2} + 1^{3/2}\\right)^{2/3}$. Remplace, puis cherche un cas d'égalité.",
        solution: "L'inégalité de Hölder avec $p = 3$, $q = \\frac{3}{2}$ donne $a + b \\leq (a^3 + b^3)^{1/3} \\times 2^{2/3} = 2^{1/3} \\times 2^{2/3} = 2$. L'égalité est atteinte pour $a = b = 1$, qui vérifie la contrainte. Le maximum vaut $2$."
      },
      {
        id: 'capes-08-4',
        chapterId: 'capes-08',
        tier: 4,
        title: "Régularité des fonctions convexes sur un ouvert",
        statement: "Soit $f : ]a ; b[ \\to \\mathbb{R}$ une fonction convexe sur un intervalle ouvert. Laquelle des propriétés de régularité suivantes est TOUJOURS vraie ?",
        type: "mcq",
        options: [
          "f est continue et admet en tout point des dérivées à gauche et à droite, avec $f'_g \\le f'_d$",
          "f est deux fois dérivable en tout point de $]a ; b[$, sa dérivée seconde étant positive",
          "f est de classe C1 sur $]a ; b[$",
          "f est uniformément continue sur tout l'intervalle ouvert $]a ; b[$, y compris au voisinage des bornes a et b"
        ],
        correctIndex: 0,
        answer: "f est continue et admet en tout point des dérivées à gauche et à droite, avec $f'_g \\le f'_d$",
        hint1: "Penser au lemme des trois cordes : le taux d'accroissement est croissant par rapport à chaque variable.",
        solution: "D'après le lemme des trois cordes, pour $x \\in ]a ; b[$, le taux d'accroissement $t \\mapsto \\frac{f(t) - f(x)}{t - x}$ est croissant. Il admet donc des limites à gauche et à droite finies en $x$, d'où l'existence de $f'_g(x)$ et $f'_d(x)$ avec $f'_g(x) \\le f'_d(x)$. En particulier, $f$ est dérivable à droite et à gauche en tout point, ce qui entraîne immédiatement sa continuité sur $]a ; b[$. De plus, $f$ est localement lipschitzienne sur tout compact intérieur."
      }
    ],

    'capes-09': [
      {
        id: 'capes-09-1',
        chapterId: 'capes-09',
        tier: 1,
        title: "Critère de d'Alembert et cas douteux",
        statement: "Pour $n \\geq 1$, on pose $u_n = \\frac{n^2}{3^n}$. Calculer $\\ell = \\lim_{n \\to +\\infty} \\frac{u_{n+1}}{u_n}$ et en déduire la nature de $\\sum u_n$. Saisir la valeur de $\\ell$.",
        type: "exact",
        answer: "1/3",
        hint1: "Forme le quotient et sépare la partie polynomiale de la partie exponentielle.",
        hint2: "$\\frac{u_{n+1}}{u_n} = \\left(\\frac{n+1}{n}\\right)^2 \\times \\frac{3^n}{3^{n+1}}$. Passe à la limite.",
        solution: "$\\frac{u_{n+1}}{u_n} = \\left(1 + \\frac{1}{n}\\right)^2 \\times \\frac{1}{3} \\xrightarrow[n \\to +\\infty]{} \\frac{1}{3}$. Comme $\\ell < 1$, la règle de d'Alembert assure que $\\sum u_n$ converge. Rappel : la règle ne permet pas de conclure lorsque $\\ell = 1$."
      },
      {
        id: 'capes-09-2',
        chapterId: 'capes-09',
        tier: 2,
        title: "Majoration du reste d'une série alternée",
        statement: "Soit $S = \\sum_{n=0}^{+\\infty} \\frac{(-1)^n}{(2n+1)!}$ et $S_N$ sa somme partielle d'indice $N$. Le critère spécial des séries alternées donne $|S - S_N| \\leq \\frac{1}{(2N+3)!}$. Déterminer le plus petit entier $N$ pour lequel cette majoration garantit $|S - S_N| \\leq 10^{-6}$.",
        type: "exact",
        answer: "4",
        hint1: "Cherche le plus petit entier impair $m = 2N + 3$ tel que $m! \\geq 10^6$.",
        hint2: "Calcule $9!$ et $11!$, puis compare à $10^6$. Tu en déduiras $N$ à partir de $m = 2N + 3$.",
        solution: "Il faut $(2N + 3)! \\geq 10^6$. Or $9! = 362\\,880 < 10^6$ et $11! = 39\\,916\\,800 \\geq 10^6$. Le plus petit $m = 2N + 3$ convenable est donc $11$, soit $N = 4$."
      },
      {
        id: 'capes-09-3',
        chapterId: 'capes-09',
        tier: 3,
        title: "Produit de Cauchy de deux séries semi-convergentes",
        statement: "On considère la série $u_n = \\frac{(-1)^n}{\\sqrt{n+1}}$ pour $n \\ge 0$. Cette série est convergente (CSSA). Que peut-on dire du produit de Cauchy $w_n = \\sum_{k=0}^n u_k u_{n-k}$ de cette série par elle-même ?",
        type: "mcq",
        options: [
          "Elle diverge grossièrement, car $|w_n| \\ge 1$ pour tout $n$",
          "La série produit $\\sum w_n$ converge absolument",
          "La série produit $\\sum w_n$ converge, et sa somme vaut $(\\sum u_n)^2$",
          "La série produit $\\sum w_n$ a pour somme 0"
        ],
        correctIndex: 0,
        answer: "Elle diverge grossièrement, car $|w_n| \\ge 1$ pour tout $n$",
        hint1: "Calculer le terme général : $w_n = (-1)^n \\sum_{k=0}^n \\frac{1}{\\sqrt{(k+1)(n-k+1)}}$ et majorer le dénominateur par $(n+2)/2$ afin de minorer chaque terme.",
        solution: "On a $w_n = \\sum_{k=0}^n \\frac{(-1)^k}{\\sqrt{k+1}} \\frac{(-1)^{n-k}}{\\sqrt{n-k+1}} = (-1)^n \\sum_{k=0}^n \\frac{1}{\\sqrt{(k+1)(n-k+1)}}$. Par l'inégalité arithmético-géométrique, $(k+1)(n-k+1) \\le (\\frac{k+1+n-k+1}{2})^2 = (\\frac{n+2}{2})^2$. Donc $\\sqrt{(k+1)(n-k+1)} \\le \\frac{n+2}{2}$, d'où $\\frac{1}{\\sqrt{(k+1)(n-k+1)}} \\ge \\frac{2}{n+2}$. La somme comporte $n+1$ termes, donc $|w_n| \\ge (n+1) \\frac{2}{n+2} \\ge 1$ pour tout $n \\ge 0$ (ce minorant tend vers 2 ; en reconnaissant une somme de Riemann, on montre même que $|w_n| \\to \\int_0^1 \\frac{dx}{\\sqrt{x(1-x)}} = \\pi$). Le terme général ne tend pas vers 0 : la série est grossièrement divergente. Cela illustre que l'absolue convergence d'au moins une des séries est indispensable dans le théorème de Mertens."
      },
      {
        id: 'capes-09-4',
        chapterId: 'capes-09',
        tier: 4,
        title: "Un réarrangement de la série harmonique alternée",
        statement: "La série $\\sum_{n \\geq 1} \\frac{(-1)^{n+1}}{n}$ converge vers $\\ln 2$ sans converger absolument. On la réarrange en prenant deux termes positifs pour un négatif : $1 + \\frac{1}{3} - \\frac{1}{2} + \\frac{1}{5} + \\frac{1}{7} - \\frac{1}{4} + \\dots$. On admet que cette nouvelle série converge. Sa somme s'écrit $c\\ln 2$ : déterminer le réel $c$.",
        type: "exact",
        answer: "3/2",
        hint1: "Exprime la somme des $3n$ premiers termes à l'aide de $H_m = \\sum_{k=1}^m \\frac{1}{k}$, puis utilise $H_m = \\ln m + \\gamma + o(1)$.",
        hint2: "Les $2n$ premiers impairs et les $n$ premiers pairs donnent $S_{3n} = H_{4n} - \\frac{1}{2}H_{2n} - \\frac{1}{2}H_n$. Reporte le développement asymptotique.",
        solution: "La somme des $3n$ premiers termes vaut $S_{3n} = \\sum_{k=1}^{2n} \\frac{1}{2k-1} - \\sum_{k=1}^{n} \\frac{1}{2k} = H_{4n} - \\frac{1}{2}H_{2n} - \\frac{1}{2}H_n$. Avec $H_m = \\ln m + \\gamma + o(1)$, on obtient $S_{3n} = \\ln(4n) - \\frac{1}{2}\\ln(2n) - \\frac{1}{2}\\ln n + o(1) = 2\\ln 2 - \\frac{1}{2}\\ln 2 + o(1)$. Les termes tendant vers $0$, la somme vaut $\\frac{3}{2}\\ln 2$ : $c = \\frac{3}{2}$. Ce résultat diffère de $\\ln 2$, illustration du théorème de réarrangement de Riemann : une série semi-convergente peut, après réarrangement, converger vers n'importe quel réel."
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
          "$\\mathrm{PGCD}(a, b) = 1$",
          "$c$ divise $\\mathrm{PGCD}(a, b)$",
          "$\\mathrm{PPCM}(a, b)$ divise $c$"
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
        statement: "Déterminer l'inverse de $7$ modulo $31$, c'est-à-dire l'entier $x$ de $\\{1, \\dots, 30\\}$ tel que $7x \\equiv 1 \\ [31]$.",
        type: "exact",
        answer: "9",
        hint1: "Utilise l'algorithme d'Euclide étendu sur $31$ et $7$ pour écrire une relation de Bézout.",
        hint2: "$31 = 4 \\times 7 + 3$ et $7 = 2 \\times 3 + 1$. Remonte ces égalités pour exprimer $1$ en fonction de $7$ et $31$.",
        solution: "Par divisions successives, $31 = 4 \\times 7 + 3$ et $7 = 2 \\times 3 + 1$. Donc $1 = 7 - 2 \\times 3 = 7 - 2(31 - 4 \\times 7) = 9 \\times 7 - 2 \\times 31$. Ainsi $7 \\times 9 \\equiv 1 \\ [31]$ et l'inverse est $9$."
      },
      {
        id: 'capes-10-3',
        chapterId: 'capes-10',
        tier: 3,
        title: "Protocole RSA et validité pour tout message",
        statement: "Dans un chiffrement RSA, $n = 33$, l'exposant public est $e = 3$ et l'exposant privé $d = 7$. On reçoit le message chiffré $c = 18$. Déchiffrer ce message, c'est-à-dire calculer l'entier $m$ de $\\{0, \\dots, 32\\}$ tel que $m \\equiv c^d \\ [33]$.",
        type: "exact",
        answer: "6",
        hint1: "Calcule $18^7$ modulo $33$ par puissances successives, en réduisant à chaque étape.",
        hint2: "$18^2 \\equiv 27 \\ [33]$ et $18^4 \\equiv 3 \\ [33]$. Écris $7 = 4 + 2 + 1$ pour terminer le calcul.",
        solution: "$18^2 = 324 \\equiv 27 \\ [33]$, puis $18^4 \\equiv 27^2 = 729 \\equiv 3 \\ [33]$. Donc $18^7 = 18^4 \\times 18^2 \\times 18 \\equiv 3 \\times 27 \\times 18 = 1458 \\equiv 6 \\ [33]$. Le message est $m = 6$. Vérification : $6^3 = 216 \\equiv 18 \\ [33]$. Remarque : $\\mathrm{pgcd}(6, 33) = 3 \\neq 1$, et pourtant le déchiffrement fonctionne : on raisonne modulo $3$ et modulo $11$ séparément, le cas $p \\mid m$ étant immédiat et le petit théorème de Fermat traitant l'autre, puis on conclut par le théorème chinois."
      },
      {
        id: 'capes-10-4',
        chapterId: 'capes-10',
        tier: 4,
        title: "Théorème des restes chinois et structure d'anneaux",
        statement: "Déterminer le plus petit entier naturel $x$ tel que $x \\equiv 3 \\ [7]$, $x \\equiv 5 \\ [11]$ et $x \\equiv 6 \\ [13]$.",
        type: "exact",
        answer: "500",
        hint1: "Résous d'abord le système des deux premières congruences, modulo $77$, puis combine avec la troisième. Le théorème chinois assure l'unicité modulo $1001$.",
        hint2: "Avec $x = 3 + 7k$, la deuxième congruence donne $7k \\equiv 2 \\ [11]$ et l'inverse de $7$ modulo $11$ est $8$. Tu obtiens $x \\equiv 38 \\ [77]$ ; reporte $x = 38 + 77j$ dans la dernière.",
        solution: "$x = 3 + 7k$ et $7k \\equiv 2 \\ [11]$. Comme $7 \\times 8 \\equiv 1 \\ [11]$, on a $k \\equiv 16 \\equiv 5 \\ [11]$, donc $x \\equiv 38 \\ [77]$. Posons $x = 38 + 77j$. Modulo $13$, $38 \\equiv 12$ et $77 \\equiv 12$, donc $12 + 12j \\equiv 6 \\ [13]$. Comme $12 \\equiv -1 \\ [13]$, on obtient $-1 - j \\equiv 6$, soit $j \\equiv -7 \\equiv 6 \\ [13]$. Ainsi $x = 38 + 462 = 500$, unique modulo $1001$. C'est l'isomorphisme $\\mathbb{Z}/1001\\mathbb{Z} \\simeq \\mathbb{Z}/7\\mathbb{Z} \\times \\mathbb{Z}/11\\mathbb{Z} \\times \\mathbb{Z}/13\\mathbb{Z}$ qui garantit cette unicité."
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
          "La symétrie centrale dont le centre est le milieu du segment $[AB]$"
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
      },
      {
        "id": "capes-12-5",
        "chapterId": "capes-12",
        "tier": 4,
        "title": "Produit portant sur les racines de l'unité",
        "statement": "Soit $n \\ge 2$ un entier et $\\omega = e^{\\frac{2i\\pi}{n}}$. Que vaut, pour tout entier $n \\ge 2$, le produit $\\prod_{k=1}^{n-1}(1 - \\omega^k)$ ?",
        "type": "mcq",
        "options": [
          "$n$",
          "$0$",
          "$1$",
          "$n - 1$"
        ],
        "correctIndex": 0,
        "answer": "$n$",
        "hint1": "Factoriser $X^n - 1$ à l'aide de ses racines dans $\\mathbb{C}$, puis simplifier par $X - 1$ avant d'évaluer en un point bien choisi.",
        "solution": "Les racines de $X^n - 1$ sont les $\\omega^k$ pour $0 \\le k \\le n - 1$, toutes simples, donc $X^n - 1 = (X - 1)\\prod_{k=1}^{n-1}(X - \\omega^k)$. Par ailleurs $X^n - 1 = (X - 1)(1 + X + \\cdots + X^{n-1})$. L'anneau des polynômes étant intègre, on simplifie par $X - 1$ : $\\prod_{k=1}^{n-1}(X - \\omega^k) = 1 + X + \\cdots + X^{n-1}$. En évaluant en $1$, le produit vaut $n$. Vérification pour $n = 3$ : $(1 - j)(1 - j^2) = 1 - j - j^2 + j^3 = 3$, car $1 + j + j^2 = 0$. Interprétation : le produit des longueurs des cordes issues d'un sommet d'un polygone régulier à $n$ côtés inscrit dans le cercle unité vaut $n$. La réponse $0$ confond ce produit avec la somme des racines, ou évalue en $1$ avant d'avoir simplifié ; $n - 1$ se contente de compter les facteurs."
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
        "id": "capes-13-4",
        "chapterId": "capes-13",
        "tier": 2,
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
        "id": "capes-13-5",
        "chapterId": "capes-13",
        "tier": 4,
        "title": "Transmission par relais et état stationnaire",
        "statement": "Un message est transmis de relais en relais. S'il est exact à l'entrée d'un relais, il est exact à la sortie avec probabilité $0{,}9$ ; s'il est inexact à l'entrée, il est exact à la sortie avec probabilité $0{,}2$. On note $p_n$ la probabilité que le message soit exact après $n$ relais, $p_0 \\in [0 ; 1]$ étant quelconque. Quelle est la limite de la suite $(p_n)$ ?",
        "type": "mcq",
        "options": [
          "$\\frac{2}{3}$",
          "$\\frac{2}{7}$",
          "$\\frac{9}{11}$",
          "Elle dépend de la valeur de $p_0$"
        ],
        "correctIndex": 0,
        "answer": "$\\frac{2}{3}$",
        "hint1": "Exprimer $p_{n+1}$ en fonction de $p_n$ à l'aide de la formule des probabilités totales, puis reconnaître une suite arithmético-géométrique.",
        "solution": "Notons $E_n$ l'événement « le message est exact après $n$ relais ». La formule des probabilités totales, appliquée à la partition $\\{E_n, \\overline{E_n}\\}$, donne $p_{n+1} = 0{,}9\\,p_n + 0{,}2\\,(1 - p_n) = 0{,}7\\,p_n + 0{,}2$ (si $p_n$ vaut $0$ ou $1$, le terme de probabilité nulle disparaît et la relation reste vraie). Le réel $\\ell$ vérifiant $\\ell = 0{,}7\\,\\ell + 0{,}2$ est $\\ell = \\frac{2}{3}$, et $p_n - \\frac{2}{3} = 0{,}7^n\\left(p_0 - \\frac{2}{3}\\right)$. Comme $|0{,}7| \\lt 1$, la suite converge vers $\\frac{2}{3}$, quelle que soit la valeur de $p_0$ : c'est l'état stationnaire d'une chaîne de Markov à deux états. La valeur $\\frac{2}{7}$ divise par $0{,}7$ au lieu de $1 - 0{,}7$ ; $\\frac{9}{11}$ normalise à tort $\\frac{0{,}9}{0{,}9 + 0{,}2}$."
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
      },
      {
        "id": "capes-14-5",
        "chapterId": "capes-14",
        "tier": 4,
        "title": "Variance d'une réunion de deux séries",
        "statement": "Une série $S_1$ d'effectif $40$ a pour moyenne $10$ et pour variance $4$ ; une série $S_2$ d'effectif $60$ a pour moyenne $15$ et pour variance $9$. Quelle est la variance de la série obtenue en réunissant $S_1$ et $S_2$ ?",
        "type": "mcq",
        "options": [
          "$13$",
          "$7$",
          "$6{,}5$",
          "$6$"
        ],
        "correctIndex": 0,
        "answer": "$13$",
        "hint1": "Calculer la moyenne de la réunion, puis utiliser la formule de König-Huygens pour obtenir, dans chaque série, la moyenne des carrés des valeurs.",
        "solution": "La moyenne de la réunion est $\\bar{x} = 0{,}4 \\times 10 + 0{,}6 \\times 15 = 13$. Par la formule de König-Huygens, la moyenne des carrés vaut $4 + 10^2 = 104$ dans $S_1$ et $9 + 15^2 = 234$ dans $S_2$, donc $0{,}4 \\times 104 + 0{,}6 \\times 234 = 41{,}6 + 140{,}4 = 182$ pour la réunion, d'où $V = 182 - 13^2 = 13$. On retrouve la décomposition de la variance : moyenne des variances $0{,}4 \\times 4 + 0{,}6 \\times 9 = 7$, plus variance des moyennes $0{,}4 \\times (10 - 13)^2 + 0{,}6 \\times (15 - 13)^2 = 3{,}6 + 2{,}4 = 6$. La valeur $7$ oublie la dispersion des moyennes, $6$ ne garde qu'elle, et $6{,}5$ est la moyenne non pondérée des deux variances."
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
      },
      {
        "id": "capes-15-5",
        "chapterId": "capes-15",
        "tier": 4,
        "title": "Surjections et principe d'inclusion-exclusion",
        "statement": "Combien existe-t-il d'applications surjectives d'un ensemble à $4$ éléments sur un ensemble à $3$ éléments ?",
        "type": "mcq",
        "options": [
          "$36$",
          "$33$",
          "$81$",
          "$24$"
        ],
        "correctIndex": 0,
        "answer": "$36$",
        "hint1": "Compter les applications qui évitent au moins un élément d'arrivée à l'aide du principe d'inclusion-exclusion, ou décrire directement les antécédents dans une surjection.",
        "solution": "Il y a $3^4 = 81$ applications. Pour $y$ dans l'ensemble d'arrivée $F$, notons $A_y$ l'ensemble des applications dont $y$ n'est pas une valeur. Par inclusion-exclusion, les applications non surjectives sont au nombre de $3 \\times 2^4 - 3 \\times 1^4 + 0 = 45$, car une application ne peut éviter les trois éléments à la fois. Il reste $81 - 45 = 36$ surjections. Vérification directe : dans une surjection, un élément de $F$ a exactement deux antécédents et les deux autres un seul ; on choisit la paire d'antécédents, soit $\\binom{4}{2} = 6$ choix, puis on envoie bijectivement les trois blocs sur $F$, soit $3! = 6$ choix, d'où $36$. La réponse $33$ s'arrête à $81 - 48$ en oubliant le terme correctif, $81$ compte toutes les applications, et $24 = \\binom{4}{3} \\times 3!$ n'attribue pas le quatrième élément."
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
          "Ranger la médaille, répondre avec courtoisie qu'un professeur de l'école publique ne fait pas état de ses convictions, puis reprendre le cours",
          "Répondre franchement à la question, puisque la liberté de conscience lui est garantie comme à tout citoyen, à condition de ne pas chercher à convaincre les élèves",
          "Garder la médaille visible puisqu'elle est de petite taille : seuls les signes ostensibles sont interdits aux enseignants",
          "Profiter de la question pour organiser un échange sur les religions des élèves afin de montrer que l'école respecte toutes les croyances"
        ],
        correctIndex: 0,
        answer: "Ranger la médaille, répondre avec courtoisie qu'un professeur de l'école publique ne fait pas état de ses convictions, puis reprendre le cours",
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
          "Les signes ou tenues manifestant ostensiblement une appartenance religieuse sont interdits ; les signes discrets restent autorisés",
          "Tout signe religieux est interdit aux élèves, y compris une petite médaille ou une croix discrète",
          "Seuls les signes ostensibles portés pendant les heures de cours sont interdits ; ils restent permis dans la cour et lors des sorties scolaires",
          "L'interdiction ne s'applique qu'aux élèves mineurs : les élèves majeurs de lycée et de classes post-baccalauréat en sont dispensés"
        ],
        correctIndex: 0,
        answer: "Les signes ou tenues manifestant ostensiblement une appartenance religieuse sont interdits ; les signes discrets restent autorisés",
        hint1: "La loi vise le caractère ostensible de la manifestation, pas le signe en tant que tel, et elle s'applique à tous les élèves de l'établissement public.",
        solution: "L'article L. 141-5-1 du Code de l'éducation interdit les signes ou tenues qui manifestent ostensiblement une appartenance religieuse, par leur nature même (voile ou foulard islamique, kippa, grande croix, keshi sikh) ou en raison du comportement de l'élève. Les signes religieux discrets restent autorisés pour les élèves (CE, 5 décembre 2007). L'interdiction vaut dans l'établissement et pendant toutes les activités placées sous sa responsabilité, y compris à l'extérieur, et pour tous les élèves d'un lycée public, y compris ceux des classes préparatoires et des sections de techniciens supérieurs (Vademecum de mars 2024, fiches 3 à 5). Le règlement intérieur rappelle qu'une procédure disciplinaire est précédée d'un dialogue avec l'élève. Les personnels, eux, sont soumis à une stricte neutralité qui exclut même les signes discrets."
      },
      {
        id: 'capes-oral2-3',
        chapterId: 'capes-oral2',
        tier: 1,
        title: "Première compétence du référentiel des métiers du professorat",
        statement: "Selon l'arrêté du 1er juillet 2013 fixant le référentiel des compétences professionnelles des métiers du professorat et de l'éducation, quelle est la première compétence commune à tous les professeurs et personnels d'éducation ?",
        type: "mcq",
        options: [
          "« Faire partager les valeurs de la République », dont la laïcité et le refus de toutes les discriminations",
          "« Maîtriser les savoirs disciplinaires et leur didactique » : connaître les contenus d'enseignement et les programmes de sa discipline",
          "« Agir en éducateur responsable et selon des principes éthiques » : veiller à la sécurité des élèves et lutter contre le harcèlement",
          "« Coopérer au sein d'une équipe » : inscrire son intervention dans un cadre collectif au service des élèves"
        ],
        correctIndex: 0,
        answer: "« Faire partager les valeurs de la République », dont la laïcité et le refus de toutes les discriminations",
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
          "Elle est affichée de manière visible dans les lieux d'accueil et de passage, et le chef d'établissement la fait connaître aux élèves et aux familles",
          "Elle doit obligatoirement être annexée au règlement intérieur et signée par chaque famille, faute de quoi l'inscription de l'élève n'est pas valide",
          "Elle n'est affichée que dans les salles où se déroule l'enseignement moral et civique, son explication relevant du seul professeur d'histoire-géographie",
          "Elle a valeur de règlement intérieur : ses quinze articles peuvent servir directement de fondement à une sanction sans autre texte"
        ],
        correctIndex: 0,
        answer: "Elle est affichée de manière visible dans les lieux d'accueil et de passage, et le chef d'établissement la fait connaître aux élèves et aux familles",
        hint1: "La circulaire de 2013 distingue ce qui est demandé (l'affichage) de ce qui est seulement recommandé.",
        solution: "La circulaire du 6 septembre 2013 demande un affichage de la Charte « visible de tous », de préférence dans les lieux d'accueil et de passage, et recommande de la joindre au règlement intérieur ; sa présentation aux parents lors des réunions de rentrée permet d'en éclairer le sens. Les chefs d'établissement et directeurs d'école portent son contenu à la connaissance des élèves et de leurs parents, notamment lors de l'inscription et des réunions de rentrée (Vademecum de mars 2024, fiche 1). En quinze articles, la Charte explicite le sens de la laïcité à l'École : liberté de conscience, égalité, protection contre le prosélytisme, aucun sujet exclu du questionnement scientifique. C'est un support pédagogique de référence ; les sanctions, elles, reposent sur le règlement intérieur et le Code de l'éducation."
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
          "Expliquer qu'il s'agit d'une modélisation et non d'un jeu d'argent, rappeler que tous suivent l'ensemble des enseignements, et faire faire l'exercice",
          "Proposer à l'élève un exercice de remplacement sans dé ni hasard, puisque la liberté de conscience impose d'adapter le contenu aux convictions de chacun",
          "Engager devant la classe une discussion sur la question de savoir si le hasard existe selon les différentes religions, pour convaincre l'élève par le débat",
          "Considérer le refus comme une faute disciplinaire et exclure immédiatement l'élève du cours sans autre échange"
        ],
        correctIndex: 0,
        answer: "Expliquer qu'il s'agit d'une modélisation et non d'un jeu d'argent, rappeler que tous suivent l'ensemble des enseignements, et faire faire l'exercice",
        hint1: "Aucun sujet n'est exclu du questionnement scientifique (Charte, article 12) et l'élève ne peut pas choisir les contenus qu'il suit.",
        solution: "1. Cadre juridique : les obligations des élèves comprennent l'accomplissement des tâches inhérentes à leurs études et l'assiduité (Code de l'éducation, articles L. 511-1 et R. 511-11) ; aucun élève ne peut invoquer une conviction religieuse pour contester un contenu du programme (Charte de la laïcité à l'École, article 12 ; Vademecum de mars 2024, fiches 8 et 9).\n2. Gestion pédagogique : le professeur désamorce sans agressivité, distingue le savoir mathématique (modéliser des expériences aléatoires, fréquences, probabilités) d'une croyance personnelle qu'il ne juge pas, et ne se laisse pas entraîner dans un débat théologique.\n3. Suivi : si le refus persiste, il ne s'enferme pas dans un bras de fer, consigne l'incident et en informe le professeur principal, le CPE et la direction, qui pourront recevoir la famille."
      },
      {
        id: 'capes-oral2-6',
        chapterId: 'capes-oral2',
        tier: 2,
        title: "Signe religieux devenu ostensible par le comportement de l'élève",
        statement: "Une élève de collège se présente chaque jour en cours vêtue d'un large bandeau sombre masquant sa chevelure et d'une longue jupe noire. Invitée à retirer son bandeau, elle refuse systématiquement en affirmant qu'il s'agit d'un choix purement esthétique. Quelle est l'analyse conforme au Vademecum ?",
        type: "mcq",
        options: [
          "Une tenue non religieuse par nature peut le devenir par le comportement de l'élève ; sa déclaration ne suffit pas, et le dialogue précède la procédure",
          "Le bandeau et la jupe ne sont pas des signes religieux par nature : la loi de 2004 ne peut donc pas s'appliquer, quel que soit le comportement de l'élève",
          "Il suffit que l'élève affirme que sa tenue n'a aucune signification religieuse pour que l'établissement soit tenu de l'accepter sans autre discussion",
          "Le chef d'établissement peut engager immédiatement une procédure disciplinaire, la phase de dialogue n'étant exigée que pour les signes religieux par nature"
        ],
        correctIndex: 0,
        answer: "Une tenue non religieuse par nature peut le devenir par le comportement de l'élève ; sa déclaration ne suffit pas, et le dialogue précède la procédure",
        hint1: "Se demander ce qui peut rendre une tenue ostensible : sa nature seulement, ou aussi la façon dont l'élève la porte dans la durée ?",
        solution: "Le Conseil d'État a confirmé la sanction d'une collégienne qui refusait systématiquement de retirer un bandana, auquel elle avait donné le caractère d'un signe ostensible (CE, 5 décembre 2007, n° 295671). La CAA de Paris a jugé de même pour le port quotidien d'une jupe longue sombre et d'un bandana, compte tenu du refus constant de modifier la tenue (18 avril 2017, n° 15PA04525). Les éléments d'appréciation sont la permanence du port et la persistance du refus, rapportées au comportement global de l'élève ; le fait qu'elle déclare ne pas manifester d'appartenance religieuse ne suffit pas (Vademecum de mars 2024, fiche 3). Le professeur alerte le chef d'établissement, qui conduit le dialogue avec l'élève et sa famille ; la procédure disciplinaire ne vient qu'ensuite (article L. 141-5-1, second alinéa)."
      },
      {
        id: 'capes-oral2-7',
        chapterId: 'capes-oral2',
        tier: 2,
        title: "Demandes d'absences régulières pour motif religieux",
        statement: "Une famille informe le professeur principal que leur enfant sera systématiquement absent chaque samedi matin, où ont lieu des devoirs surveillés, pour un motif religieux. Que doit décider l'établissement ?",
        type: "mcq",
        options: [
          "Refuser une absence systématique, contraire à l'obligation d'assiduité, tout en admettant des absences pour les grandes fêtes religieuses",
          "Accepter la demande, la liberté de culte primant sur l'emploi du temps, et dispenser l'élève de tous les devoirs surveillés du samedi matin",
          "Accepter la demande à condition que la famille fournisse chaque trimestre une attestation signée par le responsable du culte concerné",
          "Refuser toute absence pour motif religieux, y compris le jour d'une grande fête, puisque l'école publique est laïque et ne reconnaît aucun culte"
        ],
        correctIndex: 0,
        answer: "Refuser une absence systématique, contraire à l'obligation d'assiduité, tout en admettant des absences pour les grandes fêtes religieuses",
        hint1: "Distinguer une absence ponctuelle pour une grande fête d'une absence qui revient chaque semaine : laquelle reste compatible avec l'obligation d'assiduité ?",
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
          "La scolarité complète peut primer sur une dispense de natation mixte (CEDH, 2017), et un certificat douteux peut être soumis au médecin scolaire",
          "L'établissement doit organiser des créneaux de piscine non mixtes dès qu'une famille en fait la demande pour motif religieux, au nom de la liberté de culte",
          "La CEDH impose d'admettre dans le bassin toute tenue de bain couvrante, dès lors qu'elle respecte les règles d'hygiène de la piscine",
          "Un certificat médical s'impose toujours à l'établissement, qui ne peut jamais en interroger le bien-fondé ni solliciter l'avis d'un médecin"
        ],
        correctIndex: 0,
        answer: "La scolarité complète peut primer sur une dispense de natation mixte (CEDH, 2017), et un certificat douteux peut être soumis au médecin scolaire",
        hint1: "Deux questions séparées : un motif religieux ouvre-t-il une dispense d'un enseignement obligatoire ? Un certificat médical échappe-t-il à tout contrôle ?",
        solution: "Dans l'arrêt Osmanoğlu et Kocabaş c. Suisse (10 janvier 2017, n° 29086/12), la CEDH a jugé qu'en faisant primer l'obligation de suivre intégralement la scolarité et la réussite de l'intégration sur l'intérêt privé des parents, les autorités n'avaient pas outrepassé leur marge d'appréciation. En France, l'élève suit l'ensemble des cours inscrits à son emploi du temps ; l'article L. 141-5-1 s'applique aussi à la piscine, et le burkini, tenue qui manifeste ostensiblement une appartenance religieuse, n'est pas admis dans le bassin ; les consignes d'hygiène et de sécurité ne sont pas aménagées pour un motif religieux (Vademecum de mars 2024, fiches 3 et 9). Un certificat médical qui paraît injustifié peut être soumis à l'avis du médecin de l'éducation nationale ; en cas de suspicion sérieuse, le chef d'établissement peut, en concertation avec le médecin scolaire et avec l'accord de l'autorité académique, saisir le conseil départemental de l'Ordre des médecins."
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
          "Oui en principe : les parents accompagnateurs sont des usagers, non soumis à la neutralité ; une restriction doit reposer sur un motif précis",
          "Non : la loi du 15 mars 2004 s'applique à tous les adultes qui encadrent des élèves pendant une activité scolaire, parents compris",
          "Non : un parent accompagnateur devient un collaborateur du service public et doit donc respecter la même neutralité qu'un enseignant pendant la sortie",
          "Oui, et aucune exigence ne peut lui être imposée pendant la sortie, pas même l'abstention de tout prosélytisme devant les élèves"
        ],
        correctIndex: 0,
        answer: "Oui en principe : les parents accompagnateurs sont des usagers, non soumis à la neutralité ; une restriction doit reposer sur un motif précis",
        hint1: "Qualifier d'abord la personne : agent du service public ou usager ? La règle applicable en découle, avec ses éventuelles limites.",
        solution: "Dans son étude du 19 décembre 2013, le Conseil d'État a considéré que les parents d'élèves ont la qualité d'usagers du service public et ne sont donc pas soumis à l'exigence de neutralité religieuse des agents publics ; il admet seulement que l'autorité recommande, au nom du bon fonctionnement du service, de s'abstenir de manifester son appartenance religieuse. Les tribunaux administratifs de Nice (9 juin 2015) et d'Amiens (15 décembre 2015) ont écarté toute interdiction de principe : seules des considérations précises, liées à l'ordre public ou au bon fonctionnement du service, peuvent fonder une restriction motivée. Le parent accompagnateur a un devoir d'exemplarité dans son comportement et ses propos et doit s'abstenir de tout prosélytisme. Enfin, le choix des accompagnateurs revient au chef d'établissement ou au directeur d'école : un parent n'a pas de droit à accompagner une sortie (Vademecum de mars 2024, fiche 23)."
      },
      {
        id: 'capes-oral2-10',
        chapterId: 'capes-oral2',
        tier: 3,
        title: "Parent d'élève animant un atelier pédagogique en classe",
        statement: "Un parent d'élève bénévole est invité dans la classe pour co-animer avec le professeur un atelier d'algorithmique, dans des conditions proches de celles d'un enseignant. Le principe de neutralité peut-il lui être imposé ?",
        type: "mcq",
        options: [
          "Oui : un règlement intérieur peut soumettre à la neutralité les parents qui participent en classe à des activités assimilables à celles des enseignants",
          "Non : un parent d'élève reste dans tous les cas un usager du service public et ne peut jamais être soumis à la neutralité, quelle que soit l'activité qu'il exerce",
          "Oui : tout parent qui entre dans l'établissement, même pour un simple rendez-vous avec un professeur, est soumis à la neutralité des agents",
          "Non : seule une loi spécifique pourrait l'imposer à un parent, et un règlement intérieur d'établissement ne peut jamais le prévoir"
        ],
        correctIndex: 0,
        answer: "Oui : un règlement intérieur peut soumettre à la neutralité les parents qui participent en classe à des activités assimilables à celles des enseignants",
        hint1: "Un parent n'est pas soumis à la même règle selon ce qu'il fait : regarder ici si son rôle se rapproche de celui d'un enseignant.",
        solution: "Par un arrêt du 23 juillet 2019 (n° 17LY04351), la cour administrative d'appel de Lyon a admis la légalité d'un règlement intérieur soumettant au principe de neutralité les personnes, y compris les parents d'élèves, qui interviennent à l'intérieur des locaux scolaires pour participer à des activités assimilables à celles des enseignants. Le Vademecum de mars 2024 (fiche 23) en retient que la neutralité s'impose aux parents lorsqu'ils exercent ou encadrent de telles activités dans les locaux scolaires, ou lorsque des considérations précises liées à l'ordre public le justifient. En revanche, un parent qui vient chercher son enfant ou participe à une réunion n'y est pas soumis."
      },
      {
        id: 'capes-oral2-11',
        chapterId: 'capes-oral2',
        tier: 3,
        title: "Restauration scolaire, menus confessionnels et PAI",
        statement: "Des familles demandent au collège des repas conformes à leurs prescriptions religieuses à la cantine ou, à défaut, l'établissement d'un PAI (projet d'accueil individualisé) pour que leur enfant apporte son panier-repas. Que prévoit le droit ?",
        type: "mcq",
        options: [
          "Aucun droit à un menu confessionnel : des repas différenciés sont possibles sans être obligatoires, et le PAI est réservé aux besoins de santé",
          "Le collège est tenu de proposer un menu de substitution dès qu'une famille invoque un interdit alimentaire religieux, pour chaque repas servi à la cantine",
          "Le chef d'établissement doit accepter le PAI, faute de quoi il commettrait une discrimination fondée sur la religion à l'égard de la famille",
          "Le principe de laïcité interdit à la collectivité de proposer tout repas différencié, même végétarien, puisqu'il pourrait servir un culte"
        ],
        correctIndex: 0,
        answer: "Aucun droit à un menu confessionnel : des repas différenciés sont possibles sans être obligatoires, et le PAI est réservé aux besoins de santé",
        hint1: "Séparer les deux demandes : un menu confessionnel est-il un droit ? À quelle situation le PAI est-il réservé ?",
        solution: "L'inscription à la restauration scolaire est facultative, et le service relève de la collectivité qui en a la charge (le département pour un collège). Les collectivités peuvent librement proposer des repas différenciés pour tenir compte des préférences alimentaires ou de prescriptions médicales, sans regrouper les élèves selon leurs pratiques, mais il s'agit d'une possibilité, non d'un droit ; des menus qui ne font référence à aucun interdit alimentaire ne sont pas discriminatoires (CE, 25 octobre 2002, n° 251161). Le panier-repas prévu par le PAI (articles D. 351-4 et D. 351-9) est réservé aux élèves présentant un trouble de santé : selon la circulaire du 10 février 2021, il ne concerne que les allergies ou intolérances alimentaires médicalement avérées et « n'est pas destiné à être utilisé pour permettre un régime alimentaire lié à des choix familiaux » ; la demande ne peut donc pas être acceptée (Vademecum de mars 2024, fiche 11)."
      },
      {
        id: 'capes-oral2-12',
        chapterId: 'capes-oral2',
        tier: 3,
        title: "Refus d'un parent de s'adresser à une enseignante",
        statement: "Lors de la remise des bulletins, un père d'élève refuse de serrer la main de la professeure de mathématiques et de s'adresser à elle en raison de son sexe, et exige de parler à un collègue masculin. Quelle est la réponse professionnelle attendue ?",
        type: "mcq",
        options: [
          "Ne pas céder, rappeler calmement que l'égalité entre les femmes et les hommes s'impose à l'École, et informer le chef d'établissement",
          "Faire appel à un collègue masculin pour que l'entretien ait lieu dans l'intérêt de l'élève, puis signaler l'incident après coup",
          "Poursuivre l'entretien sans rien dire, le comportement d'un parent relevant de sa vie privée et de ses convictions personnelles",
          "Signaler les faits au CPE pour que l'élève soit sanctionné, puisqu'il est responsable devant l'établissement de l'attitude de son père envers l'enseignante"
        ],
        correctIndex: 0,
        answer: "Ne pas céder, rappeler calmement que l'égalité entre les femmes et les hommes s'impose à l'École, et informer le chef d'établissement",
        hint1: "Se demander ce qui se passerait si l'on cédait : la demande du père met en cause un principe de l'École, pas une simple organisation.",
        solution: "La Charte de la laïcité à l'École rappelle que la laïcité garantit l'égalité entre les filles et les garçons (article 9) et que nul ne peut se prévaloir de son appartenance religieuse pour refuser de se conformer aux règles de l'École de la République (article 13). Le Vademecum de mars 2024 (fiche 23) cite expressément le refus de parler à un enseignant ou de lui serrer la main en raison de son sexe parmi les comportements irrespectueux à traiter. L'enseignante n'a pas à accepter cette discrimination ni à se faire remplacer : elle reste courtoise, ne s'engage pas dans une polémique, et le chef d'établissement prend le relais pour recevoir le parent et lui rappeler les règles. L'élève n'a pas à être sanctionné pour le comportement de son parent ; l'incident peut être signalé par l'application Faits établissement."
      },
      // =========================================================================
      // PALIER 4 : DILEMMES ET CONFLITS DE RÈGLES (les questions de restitution sont aux paliers 1 et 2)
      // =========================================================================
      {
        id: 'capes-oral2-13',
        chapterId: 'capes-oral2',
        tier: 4,
        title: "Élève en danger à cause d'un jeûne et information préoccupante",
        statement: "Un élève de 11 ans fait des malaises répétés en cours, dus à un jeûne strict sans hydratation. Prévenue, la famille exige qu'on ne lui donne ni eau ni sucre à l'infirmerie pour respecter le jeûne. Quelle est l'obligation de l'équipe éducative ?",
        type: "mcq",
        options: [
          "Faire soigner l'élève sans délai, associer les personnels de santé au dialogue avec la famille et, s'il est en danger, transmettre une information préoccupante",
          "Respecter la consigne de la famille, puisque l'École ne doit pas prendre parti sur une pratique religieuse ni s'opposer à l'autorité parentale",
          "Dispenser l'élève de tous les cours pendant la durée du jeûne pour éviter les malaises, avec l'accord de la famille et du professeur principal",
          "Se contenter d'en parler à la famille : une information préoccupante n'est possible qu'en cas de maltraitance physique avérée et répétée commise par un adulte de la famille"
        ],
        correctIndex: 0,
        answer: "Faire soigner l'élève sans délai, associer les personnels de santé au dialogue avec la famille et, s'il est en danger, transmettre une information préoccupante",
        hint1: "Hiérarchiser : qu'est-ce qui passe avant une consigne familiale quand la santé d'un enfant est en jeu, et quelle voie existe si le dialogue échoue ?",
        solution: "1. Urgence : la santé de l'élève passe en premier. Il est pris en charge par l'infirmière ou les secours, qui apportent les soins nécessaires.\n2. Dialogue : le chef d'établissement réunit les enseignants, les personnels de santé et l'équipe éducative, puis conduit le dialogue avec les parents et l'élève ; l'École ne prend pas parti sur l'interprétation d'une pratique religieuse, mais rappelle les risques liés à l'absence de nutrition et d'hydratation, surtout chez les plus jeunes.\n3. Protection de l'enfance : si le dialogue n'aboutit pas et que le mineur est en danger ou risque de l'être au sens de l'article 375 du Code civil, tout membre du personnel doit informer par écrit le président du conseil départemental en adressant une information préoccupante à la cellule départementale de recueil des informations préoccupantes (article L. 226-2-1 du Code de l'action sociale et des familles), selon le protocole départemental (Vademecum de mars 2024, fiche 13)."
      },
      {
        id: 'capes-oral2-14',
        chapterId: 'capes-oral2',
        tier: 2,
        title: "Dispositif ministériel face aux atteintes à la laïcité",
        statement: "Face à une atteinte à la laïcité dans un collège, sur quel dispositif ministériel, renforcé depuis la rentrée 2017, les enseignants et la direction peuvent-ils s'appuyer ?",
        type: "mcq",
        options: [
          "Faits établissement pour le signalement, l'équipe académique Valeurs de la République, que tout personnel peut saisir, et le Conseil des sages",
          "Une saisine directe du Conseil des sages de la laïcité par l'enseignant, qui rend dans la semaine un avis contraignant sur chaque incident signalé",
          "Le seul dépôt de plainte de l'enseignant au commissariat, aucun dispositif interne à l'Éducation nationale n'étant prévu pour ces atteintes",
          "Un signalement au rectorat réservé au chef d'établissement, les enseignants n'ayant aucun moyen de saisir eux-mêmes l'équipe académique"
        ],
        correctIndex: 0,
        answer: "Faits établissement pour le signalement, l'équipe académique Valeurs de la République, que tout personnel peut saisir, et le Conseil des sages",
        hint1: "Chercher un dispositif à plusieurs niveaux (établissement, académie, national), et vérifier si un simple professeur peut lui aussi l'activer.",
        solution: "Depuis la rentrée 2017, une architecture renforcée accompagne la politique de laïcité. Au niveau national, le Conseil des sages de la laïcité et des valeurs de la République, placé auprès du ministre, aide à préciser la position de l'institution, notamment sur des cas inédits ; une équipe nationale Valeurs de la République anime les équipes académiques. Dans chaque académie, une équipe Valeurs de la République, placée sous la responsabilité du recteur, apporte un soutien concret aux écoles et établissements, après un signalement ou dans un accompagnement plus long. L'IEN ou le chef d'établissement signale toute atteinte par l'application Faits établissement ; l'équipe académique peut être saisie par une adresse académique dédiée ou par cette application, et tout personnel peut utiliser le formulaire en ligne « atteinte à la laïcité » des portails Éduscol et Pléiade (Vademecum de mars 2024, fiche 1)."
      },
      {
        id: "capes-oral2-15",
        chapterId: 'capes-oral2',
        tier: 3,
        title: "Stagiaires du Greta et élèves infirmiers dans un lycée public",
        statement: "Un lycée public accueille des stagiaires adultes de la formation continue (Greta) et des étudiants d'un institut de formation en soins infirmiers (IFSI) qui y suivent des cours. Quelles règles s'appliquent au port de signes religieux ostensibles ?",
        type: "mcq",
        options: [
          "Les stagiaires du Greta échappent à la loi de 2004, le bon fonctionnement pouvant justifier des restrictions ; les étudiants infirmiers en respectent les règles au lycée",
          "Les deux publics sont des adultes qui ne relèvent pas du ministère : aucune règle relative aux signes religieux ne peut leur être appliquée",
          "Les deux publics sont des élèves du lycée, puisqu'ils y suivent des cours, et relèvent donc directement de la loi de 2004 dans tous les cas",
          "Les deux publics sont soumis à la stricte neutralité des agents publics, puisqu'ils se forment dans un lycée public à des métiers relevant du service public"
        ],
        correctIndex: 0,
        answer: "Les stagiaires du Greta échappent à la loi de 2004, le bon fonctionnement pouvant justifier des restrictions ; les étudiants infirmiers en respectent les règles au lycée",
        hint1: "Déterminer le statut de chaque public (élève ou non), puis regarder où se déroulent leurs cours.",
        solution: "Les stagiaires accueillis par un Greta ne sont pas des élèves et ne relèvent pas de l'article L. 141-5-1. La CAA de Paris a toutefois jugé que l'encadrement du port de signes religieux ostensibles par ces stagiaires peut être justifié par le bon fonctionnement de l'établissement, lorsqu'ils fréquentent les mêmes locaux que les élèves de formation initiale pendant les mêmes périodes (12 octobre 2015, n° 14PA00582) ; les restrictions doivent être nécessaires, adaptées et proportionnées. Les étudiants d'un IFSI, usagers de l'enseignement supérieur, ne sont pas soumis à la loi de 2004 en tant que tels, mais doivent en respecter les prescriptions lorsque leurs cours se déroulent dans un lycée public (CE, 28 juillet 2017, n° 390740). Aucun de ces publics n'est soumis à la neutralité des agents : ce sont des usagers (Vademecum de mars 2024, fiche 4)."
      },
      {
        id: 'capes-oral2-16',
        chapterId: 'capes-oral2',
        tier: 2,
        title: "Méthode de réponse à une mise en situation à l'oral 2",
        statement: "Lors de la seconde partie de l'oral 2 du CAPES, le jury vous soumet une mise en situation professionnelle. Quelle démarche de réponse est la plus solide ?",
        type: "mcq",
        options: [
          "Analyser et nommer le cadre, agir calmement en classe, s'appuyer sur l'équipe et la direction, et alerter si un mineur est en danger",
          "Réciter d'abord la liste la plus longue possible de textes de loi, la connaissance des articles étant le seul critère évalué",
          "Décrire une réponse ferme prise seul en classe, pour montrer son autorité, sans évoquer l'équipe ni la direction",
          "Renvoyer immédiatement la situation au chef d'établissement sans rien faire en classe, la gestion des incidents ne relevant pas du professeur"
        ],
        correctIndex: 0,
        answer: "Analyser et nommer le cadre, agir calmement en classe, s'appuyer sur l'équipe et la direction, et alerter si un mineur est en danger",
        hint1: "La seconde partie de l'épreuve apprécie l'aptitude à s'approprier et à faire partager les valeurs de la République et les exigences du service public.",
        solution: "La seconde partie de l'épreuve d'entretien apprécie l'aptitude du candidat à s'approprier et à faire partager les valeurs de la République et les exigences du service public (arrêté du 25 janvier 2021, concours de niveau bac + 5) ; au concours de niveau bac + 3, l'arrêté du 17 avril 2025 modifié retient aussi les valeurs de la République et les exigences du service public, avec la projection dans le métier, la transition écologique et l'épanouissement de l'élève, et la même démarche s'applique aux mises en situation. Une réponse solide suit les étapes présentées dans le cours : 1° analyser la situation et nommer les enjeux et le cadre (par exemple la loi du 9 décembre 1905, la loi du 15 mars 2004, l'article L. 141-5-2 du Code de l'éducation issu de la loi du 26 juillet 2019, la neutralité des agents) ; 2° agir dans la classe avec calme, rappeler la règle sans débattre des croyances, protéger les élèves et poursuivre le cours ; 3° ne pas rester seul : professeur principal, CPE, chef d'établissement, famille, personnels sociaux et de santé, équipe académique Valeurs de la République ; 4° si un mineur est en danger ou risque de l'être, transmettre une information préoccupante. Citer peu de textes, mais des textes sûrs."
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
          "Seulement si l'ordre est à la fois manifestement illégal et de nature à compromettre gravement un intérêt public",
          "Dès qu'il est en désaccord avec la consigne, au nom de la liberté pédagogique reconnue à chaque enseignant",
          "Dès que l'ordre est illégal, même si l'illégalité n'est pas manifeste et ne compromet aucun intérêt public",
          "Jamais : un fonctionnaire doit exécuter tous les ordres sans exception, la responsabilité incombant à son supérieur"
        ],
        correctIndex: 0,
        answer: "Seulement si l'ordre est à la fois manifestement illégal et de nature à compromettre gravement un intérêt public",
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
          "Sa liberté d'opinion est garantie ; il ne manifeste aucune opinion en service, et son expression publique reste mesurée",
          "Un fonctionnaire n'a pas le droit d'adhérer à un parti politique, cette interdiction découlant de son obligation de neutralité",
          "Il peut présenter ses idées politiques à ses élèves dès lors qu'il le fait de façon argumentée et en citant aussi d'autres points de vue",
          "Il doit déclarer ses engagements au chef d'établissement, qui peut les lui interdire s'ils lui paraissent incompatibles avec le service"
        ],
        correctIndex: 0,
        answer: "Sa liberté d'opinion est garantie ; il ne manifeste aucune opinion en service, et son expression publique reste mesurée",
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
          "Il ne révèle rien : ce qu'il a appris dans ses fonctions relève de la discrétion professionnelle",
          "Il peut répondre puisque la mère est déléguée des parents et a elle-même assisté au conseil de classe",
          "Il peut répondre de façon générale, sans citer de détails trop personnels, pour rassurer cette mère inquiète",
          "Il l'oriente vers le professeur principal, qui est seul autorisé à communiquer ces informations aux autres familles"
        ],
        correctIndex: 0,
        answer: "Il ne révèle rien : ce qu'il a appris dans ses fonctions relève de la discrétion professionnelle",
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
          "Elle assure la liberté de conscience, garantit le libre exercice des cultes et ne reconnaît, ne salarie ni ne subventionne aucun culte",
          "Elle interdit toute manifestation religieuse dans l'espace public, y compris les processions et le port de tenues religieuses dans la rue",
          "Elle s'applique de façon identique sur tout le territoire de la République, y compris en Alsace-Moselle et dans les outre-mer",
          "C'est elle qui interdit aux élèves des écoles publiques le port de signes religieux ostensibles, dès son article premier"
        ],
        correctIndex: 0,
        answer: "Elle assure la liberté de conscience, garantit le libre exercice des cultes et ne reconnaît, ne salarie ni ne subventionne aucun culte",
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
          "L'article 1er de la Constitution de 1958, selon lequel la France est une République laïque",
          "La loi du 9 décembre 1905, qui a reçu valeur constitutionnelle lors de son adoption",
          "La Charte de la laïcité à l'École de 2013, affichée dans tous les établissements publics",
          "L'article L. 141-5-1 du Code de l'éducation, issu de la loi du 15 mars 2004"
        ],
        correctIndex: 0,
        answer: "L'article 1er de la Constitution de 1958, selon lequel la France est une République laïque",
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
          "Non : tout agent du service public de l'enseignement est tenu à la neutralité religieuse dans ses fonctions, qu'il enseigne ou non",
          "Oui : l'obligation de neutralité ne concerne que les professeurs devant leurs élèves, pendant les heures de cours",
          "Oui, à condition que le signe soit discret, comme pour les élèves, puisqu'elle n'exerce aucune mission d'enseignement",
          "Oui : seuls les fonctionnaires titulaires sont tenus à la neutralité, pas les agents contractuels comme les assistants d'éducation recrutés par l'établissement"
        ],
        correctIndex: 0,
        answer: "Non : tout agent du service public de l'enseignement est tenu à la neutralité religieuse dans ses fonctions, qu'il enseigne ou non",
        hint1: "Se demander de quoi dépend l'obligation : du fait d'enseigner, ou de la qualité d'agent du service public de l'enseignement ?",
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
          "Les élèves ne sont pas tenus à la neutralité : leur liberté de conscience est protégée, dans les limites de la loi de 2004 et du respect d'autrui",
          "Le camarade a raison : les élèves sont tenus à la même neutralité que les enseignants dans l'enceinte de l'établissement",
          "Le professeur doit interrompre l'élève et le sanctionner pour avoir parlé de religion, sujet interdit pendant un cours dans une école publique laïque",
          "Les élèves peuvent tout dire, y compris faire pression sur leurs camarades, puisqu'ils ne sont pas des agents publics"
        ],
        correctIndex: 0,
        answer: "Les élèves ne sont pas tenus à la neutralité : leur liberté de conscience est protégée, dans les limites de la loi de 2004 et du respect d'autrui",
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
          "Faire partager aux élèves les valeurs de la République",
          "Préparer les élèves aux concours des grandes écoles",
          "Garantir à chaque élève l'obtention d'un diplôme",
          "Transmettre à chaque élève les valeurs religieuses de sa famille"
        ],
        correctIndex: 0,
        answer: "Faire partager aux élèves les valeurs de la République",
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
          "Rappeler qu'une conviction ne permet pas de contester le programme, distinguer savoir et croyance, et faire faire l'exercice",
          "Remplacer l'exercice par un autre pour cet élève, sur un thème sans lien avec la datation, afin de respecter ses convictions religieuses",
          "Engager aussitôt devant la classe un débat pour démontrer à l'élève, preuves à l'appui, que sa croyance est fausse",
          "Ignorer la remarque et laisser l'élève ne rien faire pendant la séance, pour ne pas créer de tension dans la classe"
        ],
        correctIndex: 0,
        answer: "Rappeler qu'une conviction ne permet pas de contester le programme, distinguer savoir et croyance, et faire faire l'exercice",
        hint1: "Se demander si une conviction permet d'être dispensé d'un contenu du programme, tout en distinguant savoir et croyance.",
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
          "Maintenir le groupe, rappeler que l'égalité filles-garçons s'impose à tous, protéger l'élève visée, puis informer le CPE",
          "Accepter de changer l'élève de groupe pour préserver le calme de la classe, puis en reparler avec lui en fin d'heure",
          "Laisser l'élève travailler seul pour cette séance, sans autre suite, pour éviter d'en faire une affaire devant toute la classe",
          "Exclure immédiatement l'élève du cours et l'envoyer chez le chef d'établissement, sans explication devant la classe"
        ],
        correctIndex: 0,
        answer: "Maintenir le groupe, rappeler que l'égalité filles-garçons s'impose à tous, protéger l'élève visée, puis informer le CPE",
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
          "L'écouter, lui expliquer qu'on ne peut pas promettre le secret pour la protéger, et informer sans délai le CPE et la direction",
          "Respecter sa demande et ne rien dire à personne, pour garder sa confiance et ne pas aggraver sa situation",
          "Interpeller dès le lendemain les élèves soupçonnés devant toute la classe, pour que les messages cessent aussitôt",
          "Lui conseiller de bloquer les comptes concernés et de garder des captures, puis attendre de voir si cela continue avant d'alerter"
        ],
        correctIndex: 0,
        answer: "L'écouter, lui expliquer qu'on ne peut pas promettre le secret pour la protéger, et informer sans délai le CPE et la direction",
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
          "Faire cesser les propos, rappeler que l'injure discriminatoire est interdite, protéger l'élève visé et informer le CPE",
          "Ne rien dire pour ne pas donner d'importance à ce qui n'est qu'une plaisanterie entre adolescents, dont la classe a d'ailleurs ri",
          "Demander à l'élève insulté de répondre lui-même pour régler le conflit, puis reprendre l'exercice sans autre suite",
          "Porter plainte personnellement au commissariat le soir même, sans en parler à l'établissement pour ne pas l'impliquer"
        ],
        correctIndex: 0,
        answer: "Faire cesser les propos, rappeler que l'injure discriminatoire est interdite, protéger l'élève visé et informer le CPE",
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
          "Faire cesser la fraude sans éclat, noter les faits, informer le CPE et la direction et appliquer le règlement intérieur",
          "Confisquer le téléphone et lire à voix haute son contenu devant la classe, pour faire un exemple et dissuader les autres élèves",
          "Annuler le devoir pour toute la classe, puisqu'on ne peut plus garantir l'égalité entre les élèves",
          "Faire comme si de rien n'était pour ne pas perturber les autres élèves, et mettre ensuite zéro à la copie"
        ],
        correctIndex: 0,
        answer: "Faire cesser la fraude sans éclat, noter les faits, informer le CPE et la direction et appliquer le règlement intérieur",
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
          "Rappeler la règle avec calme, sans débat sur les croyances, et informer le chef d'établissement, qui organise le dialogue préalable",
          "Exclure l'élève définitivement de son cours de sa propre autorité, pour faire respecter la loi sans attendre la direction",
          "Ne rien dire, car la loi de 2004 ne s'applique qu'aux écoles et aux collèges, et non aux élèves de lycée",
          "Demander à l'élève de retirer le signe sur-le-champ, et le lui retirer soi-même si elle refuse d'obtempérer"
        ],
        correctIndex: 0,
        answer: "Rappeler la règle avec calme, sans débat sur les croyances, et informer le chef d'établissement, qui organise le dialogue préalable",
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
          "Les aménagements du PAP s'imposent à l'enseignant, qui les applique sans les commenter : l'équité n'est pas l'uniformité",
          "Il a raison : le PAP n'est qu'une recommandation de l'équipe, laissée à l'appréciation de chaque professeur",
          "Le PAP ne s'applique qu'aux examens nationaux, et non aux devoirs surveillés organisés en classe",
          "Le PAP ne peut être appliqué en devoir que si toute la classe bénéficie des mêmes aménagements, par souci d'égalité entre élèves"
        ],
        correctIndex: 0,
        answer: "Les aménagements du PAP s'imposent à l'enseignant, qui les applique sans les commenter : l'équité n'est pas l'uniformité",
        hint1: "Un document qui définit des aménagements pour un élève est-il une simple suggestion ? Penser aussi à la discrétion vis-à-vis de la classe.",
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
          "Rien n'est automatique : la famille dépose une demande, instruite après avis d'un médecin désigné par la CDAPH",
          "Le tiers temps prévu dans le PAP s'applique automatiquement au brevet, sans aucune démarche de la famille auprès de l'établissement",
          "Le professeur de mathématiques peut lui accorder lui-même le tiers temps le jour de l'épreuve, puisqu'il connaît les besoins de l'élève",
          "Aucun aménagement n'est possible aux examens nationaux, afin de garantir une stricte égalité de traitement entre tous les candidats"
        ],
        correctIndex: 0,
        answer: "Rien n'est automatique : la famille dépose une demande, instruite après avis d'un médecin désigné par la CDAPH",
        hint1: "Ne pas confondre aménagements pédagogiques en classe et aménagements d'examen.",
        solution: "Le PAP organise des aménagements pédagogiques en classe, qui s'imposent aux enseignants. Les aménagements des épreuves d'examen relèvent d'une procédure propre : le candidat adresse sa demande à un médecin désigné par la commission des droits et de l'autonomie des personnes handicapées (CDAPH), au plus tard à la date limite d'inscription, sauf handicap révélé après cette échéance ; l'avis est transmis au candidat et à l'autorité administrative, qui décide des aménagements accordés (Code de l'éducation, article D. 351-28). L'article D. 351-27 prévoit, parmi ces aménagements, une majoration du temps n'excédant pas le tiers du temps normalement prévu. Pour un élève dont le plan a été accordé au titre d'un trouble du neurodéveloppement, l'article D. 351-28-1 ouvre une procédure simplifiée, adressée directement à l'autorité administrative et sans nouvel avis médical, pour des aménagements cohérents avec ceux du plan ; ce même article l'exclut lorsque le candidat sollicite la majoration de temps. Rien n'est donc automatique ici. Le professeur oriente la famille vers le professeur principal et la direction pour engager la démarche à temps, sans se prononcer lui-même sur le résultat. Pour un élève en situation de handicap, le cadre est le projet personnalisé de scolarisation (article L. 112-2 du Code de l'éducation).",
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
          "Informer le chef d'établissement, conserver des captures et demander par écrit la protection fonctionnelle à son administration",
          "Répondre publiquement au parent sur le même réseau social, pour rétablir la vérité auprès des autres familles",
          "Modifier la note de l'élève pour apaiser la situation, puis demander au parent de retirer ses messages",
          "Ne rien faire : un fonctionnaire ne peut pas être protégé par son administration contre les propos d'un usager, même menaçants ou injurieux"
        ],
        correctIndex: 0,
        answer: "Informer le chef d'établissement, conserver des captures et demander par écrit la protection fonctionnelle à son administration",
        hint1: "Trois réflexes : ne pas répondre soi-même, garder une trace, et chercher ce que le statut prévoit quand un agent est attaqué en raison de ses fonctions.",
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
          "Rester calme, écouter, expliquer les critères à partir de la copie, et interrompre l'échange s'il devient agressif",
          "Relever la note pour éviter le conflit, en demandant au père de ne pas en parler aux autres parents",
          "Refuser toute explication : l'évaluation relève de la seule liberté pédagogique et ne regarde pas les parents",
          "Comparer devant le parent la copie de son fils avec celles d'autres élèves nommément désignés, pour objectiver la note"
        ],
        correctIndex: 0,
        answer: "Rester calme, écouter, expliquer les critères à partir de la copie, et interrompre l'échange s'il devient agressif",
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
          "L'assurer que l'établissement prend la situation en charge, sans rien dire de l'autre élève, et l'orienter vers le CPE",
          "Lui donner le nom de l'élève et le détail de la sanction, puisque son fils est la victime et qu'il a le droit de savoir",
          "Lui proposer de rencontrer directement la famille de l'autre élève à la sortie du collège",
          "Refuser de lui parler de l'incident, qui ne concerne que l'établissement et l'élève sanctionné"
        ],
        correctIndex: 0,
        answer: "L'assurer que l'établissement prend la situation en charge, sans rien dire de l'autre élève, et l'orienter vers le CPE",
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
          "Sauf décision de justice contraire, chaque parent titulaire de l'autorité parentale doit être informé",
          "Accepter la demande : le parent qui a la résidence de l'enfant décide seul des informations transmises à l'autre",
          "Ne plus transmettre d'informations à aucun des deux parents, pour rester neutre dans le conflit familial",
          "Demander à l'élève lequel de ses parents il préfère voir informé, puisque la décision le concerne d'abord"
        ],
        correctIndex: 0,
        answer: "Sauf décision de justice contraire, chaque parent titulaire de l'autorité parentale doit être informé",
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
          "Décliner poliment et passer par les canaux de l'établissement, qui assurent l'égalité entre familles et protègent l'enseignant",
          "Accepter : c'est une bonne pratique de coopération avec les familles, encouragée par le référentiel de compétences",
          "Donner son numéro aux seuls parents qu'il connaît déjà, en leur demandant de ne pas le diffuser",
          "Rejoindre le groupe de messagerie pour répondre aux questions des parents sur les notes, les devoirs et le travail en classe des élèves"
        ],
        correctIndex: 0,
        answer: "Décliner poliment et passer par les canaux de l'établissement, qui assurent l'égalité entre familles et protègent l'enseignant",
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
          "Faire cesser ce comportement, protéger la liberté de conscience des élèves et en rendre compte au chef d'établissement",
          "Laisser faire : un parent n'est pas un agent public et peut dire ce qu'il veut aux élèves, même pendant une sortie scolaire",
          "Annuler la suite de la visite et ramener immédiatement tous les élèves au collège, sans autre explication",
          "Répondre devant les élèves en présentant à son tour ses propres convictions, pour équilibrer les points de vue"
        ],
        correctIndex: 0,
        answer: "Faire cesser ce comportement, protéger la liberté de conscience des élèves et en rendre compte au chef d'établissement",
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
          "Recueillir sa parole sans insister, ne pas promettre le secret, alerter sans délai la direction et les personnels sociaux et de santé",
          "Appeler les parents le soir même pour vérifier les dires de l'enfant avant de décider d'alerter qui que ce soit",
          "Attendre d'avoir des preuves supplémentaires, par exemple de nouvelles marques, avant d'en parler à quiconque",
          "Ne rien faire soi-même : la protection de l'enfance est l'affaire exclusive de l'infirmière et de l'assistante sociale de l'établissement"
        ],
        correctIndex: 0,
        answer: "Recueillir sa parole sans insister, ne pas promettre le secret, alerter sans délai la direction et les personnels sociaux et de santé",
        hint1: "Se demander à qui revient l'enquête, et quel circuit existe pour un mineur en danger.",
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
          "Ne pas la laisser repartir seule et alerter aussitôt le chef d'établissement : le procureur de la République est avisé directement",
          "Lui conseiller de dormir chez une amie ce soir et en reparler avec elle le lendemain, au calme",
          "Rédiger une information préoccupante dans la semaine et laisser l'élève rentrer chez elle comme prévu ce soir",
          "Prévenir la famille que l'élève a fait des révélations, pour qu'elle puisse donner sa version des faits"
        ],
        correctIndex: 0,
        answer: "Ne pas la laisser repartir seule et alerter aussitôt le chef d'établissement : le procureur de la République est avisé directement",
        hint1: "L'urgence change la voie de signalement.",
        solution: "Lorsqu'un professionnel avise directement le procureur de la République du fait de la gravité de la situation, il adresse une copie de cette transmission au président du conseil départemental (Code de l'action sociale et des familles, article L. 226-4, II). En pratique, le signalement est fait sans délai avec le chef d'établissement. La famille n'est pas informée lorsque c'est contraire à l'intérêt de l'enfant (article L. 226-2-1). L'enseignant ne reste pas seul, recueille les propos de l'élève sans l'interroger et les transmet fidèlement."
      },
      {
        id: "capes-oral2-42",
        chapterId: 'capes-oral2',
        tier: 1,
        title: "Article 40 du Code de procédure pénale",
        statement: "Un professeur découvre, dans l'exercice de ses fonctions, des faits susceptibles de constituer un délit commis au préjudice d'élèves. Quelle obligation pèse sur lui ?",
        type: "mcq",
        options: [
          "Il doit en aviser sans délai le procureur de la République (article 40 du Code de procédure pénale), en lien avec la direction",
          "Aucune : seul le chef d'établissement est concerné par les procédures pénales visant des faits commis au collège",
          "Il doit d'abord mener sa propre enquête auprès des élèves et des familles pour vérifier les faits",
          "Il ne doit signaler que les crimes, jamais les délits, et seulement s'il en a été le témoin direct"
        ],
        correctIndex: 0,
        answer: "Il doit en aviser sans délai le procureur de la République (article 40 du Code de procédure pénale), en lien avec la direction",
        hint1: "Regarder à qui s'impose l'obligation d'aviser le procureur : le texte vise-t-il seulement le chef d'établissement ?",
        solution: "L'article 40, alinéa 2, du Code de procédure pénale impose à toute autorité constituée et à tout fonctionnaire qui, dans l'exercice de ses fonctions, acquiert la connaissance d'un crime ou d'un délit, d'en donner avis sans délai au procureur de la République. Le professeur n'enquête pas lui-même : il informe le chef d'établissement, avec qui le signalement est fait, sans que cela le dispense de son obligation personnelle."
      },
      {
        id: "capes-oral2-43",
        chapterId: 'capes-oral2',
        tier: 1,
        title: "Le jury cite l'avis du Conseil d'État de 1989",
        statement: "Le jury demande : « Un élève peut-il porter un signe religieux ostensible en cours, du moment qu'il ne fait ni prosélytisme ni trouble ? » Le candidat pense à l'avis du Conseil d'État du 27 novembre 1989. Quelle est la bonne réponse ?",
        type: "mcq",
        options: [
          "Non : cet avis, qui tolérait les signes sans prosélytisme ni trouble, est dépassé par la loi du 15 mars 2004",
          "Oui : l'avis de 1989 reste la règle applicable aux élèves, la loi de 2004 n'ayant visé que les seuls agents publics",
          "Oui, mais seulement au lycée, la loi de 2004 ne visant que les écoles et les collèges publics",
          "Non, car l'avis de 1989 interdisait déjà tout signe religieux aux élèves, discret ou non"
        ],
        correctIndex: 0,
        answer: "Non : cet avis, qui tolérait les signes sans prosélytisme ni trouble, est dépassé par la loi du 15 mars 2004",
        hint1: "Situer chaque texte dans le temps : avis de 1989, puis loi de 2004.",
        solution: "En 1989, le Conseil d'État estimait que le port de signes religieux par les élèves n'était pas incompatible avec la laïcité, sauf pression, provocation, prosélytisme ou trouble. La loi du 15 mars 2004 (article L. 141-5-1 du Code de l'éducation) a tranché autrement pour les écoles, collèges et lycées publics : les signes et tenues manifestant ostensiblement une appartenance religieuse y sont interdits, les signes discrets restant permis. Citer l'avis de 1989 comme règle actuelle serait une erreur."
      },
      {
        id: "capes-oral2-44",
        chapterId: 'capes-oral2',
        tier: 1,
        title: "Ne pas connaître un numéro d'article devant le jury",
        statement: "Pendant l'entretien, le candidat veut appuyer sa réponse sur un texte mais ne se souvient plus du numéro exact de l'article. Quelle attitude le jury attend-il ?",
        type: "mcq",
        options: [
          "Nommer le principe et le texte sans inventer de numéro, et raisonner à partir de la situation",
          "Inventer un numéro plausible pour montrer qu'il connaît les textes et ne pas perdre de temps face au jury",
          "Refuser de répondre à la question tant qu'il n'a pas le texte exact sous les yeux",
          "Réciter le référentiel de compétences en entier pour compenser cet oubli devant le jury"
        ],
        correctIndex: 0,
        answer: "Nommer le principe et le texte sans inventer de numéro, et raisonner à partir de la situation",
        hint1: "Une référence fausse coûte plus cher qu'une référence générale exacte.",
        solution: "Le jury évalue la compréhension du cadre et la justesse du raisonnement, pas une mémoire de numéros. Mieux vaut dire « le statut des fonctionnaires impose la neutralité » que citer un article inexact. Le candidat nomme les principes (neutralité, laïcité, protection des élèves, travail en équipe), s'appuie sur les textes qu'il connaît sûrement et montre comment il agirait concrètement."
      },
      {
        id: "capes-oral2-45",
        chapterId: 'capes-oral2',
        tier: 1,
        title: "Format de l'épreuve d'entretien (concours bac + 5)",
        statement: "Quelle description de l'épreuve d'entretien du CAPES externe (concours bac + 5) est exacte ?",
        type: "mcq",
        options: [
          "35 minutes sans préparation, coefficient 3, note 0 éliminatoire : 15 minutes sur la motivation, puis 20 minutes de mises en situation",
          "1 heure de préparation puis 1 heure d'exposé sur une leçon de mathématiques tirée au sort, suivie d'un échange",
          "Un questionnaire écrit sur les textes réglementaires, noté sur 20, de coefficient 1 et non éliminatoire",
          "Une épreuve de 35 minutes consacrée uniquement à la motivation et au parcours du candidat, sans mise en situation"
        ],
        correctIndex: 0,
        answer: "35 minutes sans préparation, coefficient 3, note 0 éliminatoire : 15 minutes sur la motivation, puis 20 minutes de mises en situation",
        hint1: "L'épreuve est commune à toutes les disciplines et s'appuie sur la fiche individuelle de renseignement.",
        solution: "L'épreuve d'entretien dure 35 minutes, coefficient 3, sans préparation, et la note 0 est éliminatoire. La première partie (15 minutes) porte sur la motivation et le parcours ; elle s'ouvre par une présentation de 5 minutes appuyée sur la fiche individuelle de renseignement. La seconde partie (20 minutes) comporte deux mises en situation professionnelles : l'une d'enseignement, l'autre relative à la vie scolaire. Le jury apprécie l'aptitude à s'approprier les valeurs de la République et les exigences du service public."
      },
      {
        id: "capes-oral2-46",
        chapterId: 'capes-oral2',
        tier: 1,
        title: "Seconde partie de l'entretien au concours bac + 3",
        statement: "Au concours organisé au niveau bac + 3 à partir de la session 2026, sur quoi porte la seconde partie de l'épreuve d'entretien ?",
        type: "mcq",
        options: [
          "Valeurs de la République, service public, projection dans le métier, transition écologique, épanouissement de l'élève",
          "Une leçon de mathématiques préparée à l'avance, présentée au jury puis discutée pendant vingt minutes",
          "Exclusivement l'histoire du système éducatif français et de ses grandes réformes depuis le XIXe siècle",
          "Un commentaire de copie d'élève, sans lien avec les valeurs de la République ni avec la vie scolaire"
        ],
        correctIndex: 0,
        answer: "Valeurs de la République, service public, projection dans le métier, transition écologique, épanouissement de l'élève",
        hint1: "La première partie (motivation et parcours) est commune aux deux concours ; la seconde diffère.",
        solution: "Pour le concours de niveau bac + 3 (arrêté du 17 avril 2025 modifié), l'épreuve dure 35 minutes, coefficient 3, note 0 éliminatoire. Après 15 minutes consacrées à la motivation et au parcours, elle se poursuit par 20 minutes d'entretien, au travers de questionnements divers dont une mise en situation. L'entretien porte sur l'appréhension des valeurs de la République, dont la laïcité, la projection dans le métier, les exigences du service public (neutralité, lutte contre les discriminations), la transition écologique et l'épanouissement de l'élève. Au concours bac + 5, la seconde partie comporte deux mises en situation professionnelles (enseignement et vie scolaire)."
      },
      {
        id: "capes-oral2-47",
        chapterId: 'capes-oral2',
        tier: 1,
        title: "Répondre à la question de motivation",
        statement: "Le jury demande : « Pourquoi voulez-vous devenir professeur de mathématiques ? » Quelle réponse est la mieux construite ?",
        type: "mcq",
        options: [
          "Relier son parcours à une conception argumentée du métier, illustrée par un exemple concret vécu",
          "Réciter les quatorze compétences du référentiel de 2013 dans l'ordre, pour montrer sa préparation",
          "Mettre en avant la sécurité de l'emploi et la durée des vacances, en toute franchise",
          "Répondre que l'on aime les mathématiques depuis toujours, sans évoquer les élèves"
        ],
        correctIndex: 0,
        answer: "Relier son parcours à une conception argumentée du métier, illustrée par un exemple concret vécu",
        hint1: "Le jury cherche une conviction personnelle étayée, pas une récitation.",
        solution: "La question de motivation attend une réponse personnelle et argumentée. Le candidat relie son parcours (études, expériences auprès d'élèves, engagements) à sa conception du métier : transmettre des savoirs exigeants, accompagner tous les élèves, travailler en équipe et avec les familles. Un exemple concret vaut mieux que la récitation du référentiel ; la passion pour la discipline est un point de départ, pas une réponse complète."
      },
      {
        id: "capes-oral2-48",
        chapterId: 'capes-oral2',
        tier: 1,
        title: "Le devoir de réserve : d'où vient-il ?",
        statement: "Le jury demande au candidat d'où vient le devoir de réserve des fonctionnaires. Quelle réponse est exacte ?",
        type: "mcq",
        options: [
          "Il vient de la jurisprudence administrative, qui encadre l'expression publique de l'agent selon ses fonctions et les circonstances",
          "Il est défini par un article précis de la Constitution de 1958, consacré aux obligations des fonctionnaires",
          "Il a été créé par la loi du 15 mars 2004, en même temps que l'interdiction des signes ostensibles",
          "Il interdit au fonctionnaire toute opinion politique, même exprimée en privé, sous peine de sanction"
        ],
        correctIndex: 0,
        answer: "Il vient de la jurisprudence administrative, qui encadre l'expression publique de l'agent selon ses fonctions et les circonstances",
        hint1: "Distinguer neutralité (en service, écrite dans le statut) et réserve (expression publique, d'origine jurisprudentielle).",
        solution: "Le Code général de la fonction publique énonce la neutralité, la laïcité, la dignité, l'impartialité, l'intégrité, la probité, le secret et la discrétion professionnels. Le devoir de réserve, lui, n'y figure pas : c'est une construction jurisprudentielle qui impose à l'agent de la mesure dans l'expression publique de ses opinions, appréciée au cas par cas selon son niveau de responsabilité et le contexte. Il ne supprime pas la liberté d'opinion, garantie par le statut."
      },
      {
        id: "capes-oral2-49",
        chapterId: 'capes-oral2',
        tier: 1,
        title: "Alerte de mise en sûreté pendant un cours",
        statement: "Pendant un cours de mathématiques, l'alarme spécifique « mise en sûreté » retentit. Quelle doit être la réaction du professeur ?",
        type: "mcq",
        options: [
          "Appliquer aussitôt les consignes du plan particulier de mise en sûreté, travaillées en exercice, et rassurer les élèves",
          "Faire sortir tous les élèves dans la cour, comme pour une alarme incendie, et procéder à l'appel",
          "Continuer le cours en attendant de savoir par la direction s'il s'agit d'un simple exercice",
          "Laisser chaque élève appeler sa famille pour la rassurer avant de décider quoi faire"
        ],
        correctIndex: 0,
        answer: "Appliquer aussitôt les consignes du plan particulier de mise en sûreté, travaillées en exercice, et rassurer les élèves",
        hint1: "Les consignes ne s'improvisent pas le jour de l'alerte.",
        solution: "Chaque école et établissement dispose d'un plan particulier de mise en sûreté (PPMS), qui fixe les moyens d'alerte, distincts de l'alarme incendie, et les conduites à tenir selon le danger ; au moins deux exercices PPMS ont lieu chaque année (circulaire du 8 juin 2023). Le professeur doit connaître ces consignes dès sa prise de fonction et les appliquer sans improviser : un signal de mise en sûreté n'appelle pas la même réaction qu'une alarme incendie. Il garde la responsabilité de sa classe et adopte une attitude calme."
      },
      // PALIER 4 : DILEMMES ET CONFLITS DE RÈGLES
      {
        id: "capes-oral2-50",
        chapterId: 'capes-oral2',
        tier: 4,
        title: "Une consigne de silence sur des violences",
        statement: "Une élève de 3e vous confie des violences répétées de son père. Vous en informez la principale, qui vous répond : « Je connais la famille, ne faites rien remonter pour l'instant, j'en parlerai moi-même au père. » Quelle conduite tenir ?",
        type: "mcq",
        options: [
          "Obéir à la consigne : l'obligation d'obéissance hiérarchique prime, et la principale porte seule la responsabilité de cette décision",
          "Téléphoner vous-même au père pour recueillir sa version des faits avant de décider si une transmission reste nécessaire",
          "Maintenir qu'une transmission s'impose et, faute de décision rapide, la faire vous-même, avec l'appui de l'assistante sociale, en en informant la principale",
          "Attendre de nouveaux éléments, car sans marques visibles ni preuve écrite aucune transmission ne peut être engagée par un professeur"
        ],
        correctIndex: 2,
        answer: "Maintenir qu'une transmission s'impose et, faute de décision rapide, la faire vous-même, avec l'appui de l'assistante sociale, en en informant la principale",
        hint1: "Se demander si l'obéissance hiérarchique peut suspendre une obligation que la loi attache à chaque agent, et ce que produirait un appel au père.",
        solution: "Le devoir d'obéissance (Code général de la fonction publique, article L. 121-10) ne fait pas disparaître les obligations liées à la protection de l'enfance. Une information préoccupante doit être transmise sans délai lorsqu'un mineur est en danger ou risque de l'être (Code de l'action sociale et des familles, article L. 226-2-1), et tout fonctionnaire qui acquiert, dans l'exercice de ses fonctions, la connaissance d'un crime ou d'un délit doit en aviser sans délai le procureur (Code de procédure pénale, article 40, alinéa 2). Le professeur n'a pas à établir la preuve. Il cherche d'abord à convaincre la direction et mobilise l'assistante sociale et les personnels de santé ; il ne contourne pas la principale en secret, mais il ne renonce pas non plus. Appeler le père pourrait exposer l'élève : l'information des parents est écartée lorsqu'elle est contraire à l'intérêt de l'enfant, et cette appréciation revient aux professionnels chargés de la transmission."
      },
      {
        id: "capes-oral2-51",
        chapterId: 'capes-oral2',
        tier: 4,
        title: "Un couteau signalé sous condition d'anonymat",
        statement: "Un élève de 4e vous dit en aparté qu'un camarade a apporté un couteau au collège et vous supplie de ne pas dire que l'information vient de lui, par peur des représailles. Quelle conduite tenir ?",
        type: "mcq",
        options: [
          "Alerter sans délai le chef d'établissement et réserver le nom du témoin à ceux qui doivent le connaître, en expliquant à l'élève ce que vous allez faire et pourquoi",
          "Promettre un anonymat total, puis attendre que le camarade sorte l'objet afin de pouvoir signaler un fait que vous auriez vous-même constaté en classe",
          "Fouiller discrètement le sac du camarade à l'intercours, afin de ne pas déranger la direction pour une information qui reste encore à vérifier",
          "Exiger du témoin un écrit signé avant toute démarche, car aucune alerte ne peut être donnée sur la base d'une parole rapportée de manière orale"
        ],
        correctIndex: 0,
        answer: "Alerter sans délai le chef d'établissement et réserver le nom du témoin à ceux qui doivent le connaître, en expliquant à l'élève ce que vous allez faire et pourquoi",
        hint1: "Deux exigences s'opposent : la sécurité de tous et la protection du témoin. Laquelle commande l'action immédiate, et comment préserver l'autre ?",
        solution: "La sécurité prime : le danger possible est porté sans délai à la connaissance du chef d'établissement, qui décide des mesures à prendre et fait appel si nécessaire aux forces de l'ordre. Le professeur ne fouille ni l'élève ni son sac, et ne peut pas promettre un secret absolu. Il peut en revanche protéger le témoin : il lui explique ce qu'il va faire et limite son nom aux personnes qui doivent le connaître, conformément à la discrétion professionnelle (Code général de la fonction publique, article L. 121-7). Attendre un constat personnel ou exiger un écrit reviendrait à laisser le risque en place."
      },
      {
        id: "capes-oral2-52",
        chapterId: 'capes-oral2',
        tier: 4,
        title: "Condamner un propos raciste, est-ce manquer à la neutralité ?",
        statement: "En cours, vous avez fermement condamné une remarque raciste d'un élève envers un camarade, en expliquant qu'elle était inacceptable. Un collègue vous reproche d'avoir pris parti et d'avoir ainsi manqué à votre neutralité. Que lui répondre ?",
        type: "mcq",
        options: [
          "Il a raison : un agent public doit s'abstenir de toute appréciation, et seul le chef d'établissement pouvait qualifier ce propos devant la classe",
          "La neutralité interdit de manifester ses opinions, pas de défendre les valeurs de la République : rappeler le respect et l'égalité relève de la mission de l'École",
          "Il a raison pour la classe, mais le propos pouvait être condamné à la fin de l'heure, lors d'un échange individuel et discret avec l'élève concerné",
          "Il a tort, car la neutralité ne s'applique qu'aux convictions religieuses et laisse le professeur libre d'exprimer devant ses élèves ses opinions politiques personnelles"
        ],
        correctIndex: 1,
        answer: "La neutralité interdit de manifester ses opinions, pas de défendre les valeurs de la République : rappeler le respect et l'égalité relève de la mission de l'École",
        hint1: "Distinguer une opinion personnelle, sur laquelle le professeur doit se taire, d'une valeur que l'École a pour mission de faire partager.",
        solution: "La neutralité (Code général de la fonction publique, article L. 121-2) interdit au professeur de faire état de ses opinions devant les élèves ; elle ne signifie pas l'indifférence. L'article L. 111-1 du Code de l'éducation fixe comme mission première à l'École de faire partager les valeurs de la République, et la Charte de la laïcité rappelle le rejet de toutes les discriminations (article 9). La liberté d'expression des élèves s'exerce dans le respect du pluralisme et d'autrui (Code de l'éducation, article L. 511-2). Condamner un propos raciste sur-le-champ n'est donc pas prendre parti dans un débat d'opinions. Différer la réaction laisserait croire à la classe que le propos est acceptable ; la neutralité ne se limite pas pour autant au religieux."
      },
      {
        id: "capes-oral2-53",
        chapterId: 'capes-oral2',
        tier: 4,
        title: "Un collègue porte un signe religieux visible",
        statement: "Un collègue de votre équipe s'est mis à porter en classe un signe religieux visible. Des élèves commencent à le remarquer et vous interrogent. Quelle conduite tenir ?",
        type: "mcq",
        options: [
          "Prendre la parole en salle des professeurs devant toute l'équipe, pour lui rappeler publiquement ce que prévoit le statut des fonctionnaires",
          "Ne rien faire par loyauté entre collègues, puisque la neutralité d'un agent ne concerne que l'administration et l'agent lui-même",
          "Répondre aux élèves que ce signe est toléré s'il reste discret, car seule la loi de 2004 règle cette question dans les établissements",
          "Répondre sobrement aux élèves, éviter toute interpellation publique et saisir le chef d'établissement, compétent, après un éventuel échange privé avec le collègue"
        ],
        correctIndex: 3,
        answer: "Répondre sobrement aux élèves, éviter toute interpellation publique et saisir le chef d'établissement, compétent, après un éventuel échange privé avec le collègue",
        hint1: "Quelle règle s'applique à un agent, et à qui revient le traitement d'un manquement éventuel ? Loyauté et discrétion ne s'opposent pas à cette réponse.",
        solution: "L'obligation de neutralité s'impose à tout agent du service public de l'enseignement (Code général de la fonction publique, article L. 121-2) : selon l'avis du Conseil d'État du 3 mai 2000, tout signe manifestant une appartenance religieuse est interdit en service, même discret. La loi de 2004 concerne les élèves, pas les personnels. Un professeur n'a aucun pouvoir sur un collègue : il peut lui en parler en privé, sans y être tenu, mais le traitement d'un manquement relève du chef d'établissement. L'interpeller devant les élèves ou l'équipe humilierait le collègue ; le silence laisserait perdurer une situation contraire au service public."
      },
      {
        id: "capes-oral2-54",
        chapterId: 'capes-oral2',
        tier: 4,
        title: "Harcèlement : l'enfant d'une collègue est mis en cause",
        statement: "Une élève de 5e vous signale être harcelée par plusieurs camarades, dont le fils d'une collègue proche. Celle-ci, mise au courant par son fils, vous demande de lui laisser « régler ça en famille » avant toute démarche. Quelle conduite tenir ?",
        type: "mcq",
        options: [
          "Accepter pour cette fois, car une collègue de confiance réglera la situation plus vite et épargnera à l'élève visée une procédure éprouvante",
          "Écarter le fils de la collègue du signalement en citant seulement les autres camarades, afin de préserver les relations au sein de l'équipe",
          "Transmettre comme pour tout élève au CPE et à la direction, sans traitement de faveur, et ne pas livrer à la collègue le détail du signalement",
          "Renoncer à intervenir et demander à un autre professeur de s'en charger, puisque ce lien personnel vous interdit légalement d'en connaître"
        ],
        correctIndex: 2,
        answer: "Transmettre comme pour tout élève au CPE et à la direction, sans traitement de faveur, et ne pas livrer à la collègue le détail du signalement",
        hint1: "La procédure change-t-elle selon l'identité de l'auteur présumé ? Se demander aussi ce que la collègue peut apprendre, et par qui.",
        solution: "L'agent public exerce ses fonctions avec impartialité et traite de façon égale toutes les personnes (Code général de la fonction publique, articles L. 121-1 et L. 121-2). Le signalement suit donc le circuit habituel : CPE, direction, protocole de traitement du harcèlement, sans délai ni filtre. La discrétion professionnelle (article L. 121-7) interdit de communiquer à la collègue ce qui a été rapporté : c'est l'établissement qui informera les familles, dans le cadre du protocole, celle-ci étant alors traitée comme tout parent. Un lien personnel n'interdit pas de transmettre : il impose au contraire de ne pas être seul à traiter la situation."
      },
      {
        id: "capes-oral2-55",
        chapterId: 'capes-oral2',
        tier: 4,
        title: "Insultes lesbophobes et vie privée de l'élève",
        statement: "Une élève de 2de vous dit subir des insultes lesbophobes de la part de camarades. Elle accepte que l'établissement intervienne, mais sa famille ignore son orientation et elle redoute sa réaction. Quelle conduite tenir ?",
        type: "mcq",
        options: [
          "Appeler vous-même ses parents, car l'autorité parentale leur donne le droit de connaître immédiatement tous les motifs de cette affaire",
          "Transmettre les faits au CPE et à la direction en signalant ce risque, pour organiser sa protection sans révéler son orientation à sa famille sans son accord",
          "Traiter le problème en classe en exposant la situation de l'élève, pour que ses camarades mesurent la gravité de ce qu'ils lui font subir depuis plusieurs semaines",
          "Ne rien transmettre à l'établissement puisqu'elle redoute les conséquences, et lui conseiller de changer de groupe de travail ou de place"
        ],
        correctIndex: 1,
        answer: "Transmettre les faits au CPE et à la direction en signalant ce risque, pour organiser sa protection sans révéler son orientation à sa famille sans son accord",
        hint1: "Deux protections à tenir ensemble : faire cesser les insultes et ne pas exposer l'élève chez elle. Qui doit savoir quoi, et qui décide du contact avec la famille ?",
        solution: "Les insultes visant l'orientation sexuelle sont des atteintes à la dignité et, si elles se répètent, peuvent relever du harcèlement : elles appellent une transmission sans délai au CPE et à la direction. L'orientation sexuelle relève de la vie privée de l'élève ; le professeur est tenu à la discrétion professionnelle (Code général de la fonction publique, article L. 121-7) et ne la révèle ni à la classe ni à la famille. En signalant à l'équipe la crainte de l'élève, il permet à la direction de décider comment informer la famille des faits sans cette précision, et aux personnels sociaux et de santé d'accompagner l'élève. Si un danger au domicile apparaissait, le circuit de la protection de l'enfance s'appliquerait."
      },
      {
        id: "capes-oral2-56",
        chapterId: 'capes-oral2',
        tier: 4,
        title: "Un malaise alors que vous êtes seul avec la classe",
        statement: "En plein cours, un élève de 5e perd connaissance. Vous êtes seul avec vingt-sept élèves, dans une salle éloignée de la vie scolaire. Quelle conduite tenir ?",
        type: "mcq",
        options: [
          "Porter l'élève vous-même jusqu'à l'infirmerie, en demandant à la classe de rester calme et de continuer l'exercice en autonomie",
          "Attendre la sonnerie en observant l'élève, afin de ne pas manquer à votre obligation de surveillance du reste de la classe",
          "Envoyer un élève chercher les affaires du camarade, puis laisser ses parents décider par téléphone de la suite à donner",
          "Rester près de lui, le mettre en sécurité, appeler ou faire appeler les secours, et envoyer deux élèves prévenir la vie scolaire ou l'infirmerie"
        ],
        correctIndex: 3,
        answer: "Rester près de lui, le mettre en sécurité, appeler ou faire appeler les secours, et envoyer deux élèves prévenir la vie scolaire ou l'infirmerie",
        hint1: "Deux devoirs entrent en conflit : secourir un élève et surveiller les autres. Quelle organisation permet de ne renoncer à aucun des deux ?",
        solution: "Le professeur doit porter secours sans abandonner la surveillance de sa classe : il reste dans la salle, met l'élève en sécurité et applique les gestes de premiers secours qu'il connaît, appelle ou fait appeler le 15, et envoie deux élèves ensemble prévenir la vie scolaire ou l'infirmerie ; un seul élève dans un couloir serait moins sûr. Déplacer une personne inconsciente peut aggraver son état et laisserait la classe seule. Attendre la sonnerie ou s'en remettre aux parents fait perdre un temps décisif. La direction prévient ensuite la famille, et un rapport factuel est rédigé."
      },
      {
        id: "capes-oral2-57",
        chapterId: 'capes-oral2',
        tier: 4,
        title: "Signer une tribune critiquant une réforme",
        statement: "Vous souhaitez signer une tribune publiée dans la presse qui critique une réforme de l'Éducation nationale, en mentionnant votre qualité de professeur. Un collègue affirme que c'est interdit, un autre vous propose de la distribuer à vos élèves. Que retenir ?",
        type: "mcq",
        options: [
          "Hors service, l'expression reste possible avec la mesure du devoir de réserve et sans divulgation professionnelle, mais rien devant les élèves",
          "Toute critique d'une réforme est interdite à un fonctionnaire, car l'obéissance hiérarchique s'étend aussi à ses opinions exprimées hors du service et dans la presse",
          "Vous êtes libre d'écrire ce que vous voulez hors service, et pouvez la distribuer en classe puisqu'une réforme scolaire ne relève ni de la politique ni de la religion",
          "La tribune n'est licite qu'à la condition d'obtenir au préalable l'accord écrit du chef d'établissement et de l'inspecteur chargé de votre discipline"
        ],
        correctIndex: 0,
        answer: "Hors service, l'expression reste possible avec la mesure du devoir de réserve et sans divulgation professionnelle, mais rien devant les élèves",
        hint1: "Séparer deux lieux : l'expression hors service, avec sa limite d'origine jurisprudentielle, et la salle de classe, où une autre obligation s'applique.",
        solution: "La liberté d'opinion est garantie aux agents publics (Code général de la fonction publique, article L. 111-1). Hors service, leur expression publique est encadrée par le devoir de réserve, d'origine jurisprudentielle, apprécié selon les fonctions, les circonstances et la mesure des propos ; mentionner sa qualité appelle d'autant plus de retenue. Aucune autorisation préalable n'est prévue. La discrétion professionnelle (article L. 121-7) interdit de révéler des informations connues dans l'exercice des fonctions. Devant les élèves, la neutralité s'applique (article L. 121-2) : le professeur ne fait pas de sa classe une tribune, même sur une réforme scolaire."
      },
      {
        id: "capes-oral2-58",
        chapterId: 'capes-oral2',
        tier: 1,
        title: "Se projeter dans le métier devant le jury",
        statement: "Au concours de niveau bac + 3, le jury demande : « Comment vous voyez-vous dans vos cinq premières années de professeur ? » Quelle réponse est la mieux construite ?",
        type: "mcq",
        options: [
          "Annoncer un projet ambitieux : passer l'agrégation dès la première année puis enseigner en classes préparatoires, pour montrer son niveau en mathématiques",
          "Décrire des étapes réalistes : la formation avec un tuteur, des besoins de formation précis, une place dans l'équipe et un projet pour ses élèves",
          "Affirmer que ses expériences de soutien scolaire suffisent à maîtriser le métier, de sorte que la formation après le concours sera une simple formalité",
          "Éviter de se projeter, car le jury évalue surtout la connaissance des textes, et ramener vite l'échange vers la laïcité étudiée en préparation"
        ],
        correctIndex: 1,
        answer: "Décrire des étapes réalistes : la formation avec un tuteur, des besoins de formation précis, une place dans l'équipe et un projet pour ses élèves",
        hint1: "Le jury cherche un futur collègue lucide et formable : que doit montrer une projection crédible, au-delà de l'ambition ?",
        solution: "La projection dans le métier est l'un des thèmes de la seconde partie de l'entretien au concours de niveau bac + 3. Une réponse solide décrit des premières années réalistes : la formation qui suit le concours, accompagnée par un tuteur, des besoins identifiés avec précision (gestion de classe, différenciation, évaluation), le travail en équipe (équipe de mathématiques, professeur principal, projets de l'établissement) et un projet concret pour les élèves. Elle s'inscrit dans la compétence 14 du référentiel de 2013 : « S'engager dans une démarche individuelle et collective de développement professionnel ». Un projet de carrière n'est pas interdit, mais présenté seul il parle du candidat et non des élèves. Prétendre n'avoir rien à apprendre inquiète le jury, et esquiver la question prive le candidat d'une partie de l'épreuve."
      }
    ],

    'capes-oral2-cas': [
      // =========================================================================
      // PALIER 1 : CLASSE ET ÉVALUATION
      // =========================================================================
      {
        "id": "capes-oral2-cas-1",
        "chapterId": "capes-oral2-cas",
        "tier": 1,
        "title": "Un téléphone utilisé en plein cours au collège",
        "statement": "En classe de 4e, pendant une activité de géométrie, vous voyez un élève envoyer des messages sur son téléphone, posé sur ses genoux. Ce n'est pas la première fois cette semaine. Identifiez la règle de droit, la réaction immédiate et l'action à long terme.",
        "type": "case3",
        "steps": [
          {
            "label": "Règle de droit",
            "question": "Quelle règle de droit s'applique ?",
            "options": [
              "Aucun texte national ne traite du téléphone : seul le règlement intérieur, voté chaque année par le conseil d'administration, peut l'interdire",
              "Le téléphone est interdit dans les écoles, collèges et lycées (article L. 511-5 du Code de l'éducation), sauf exceptions prévues par le règlement intérieur",
              "Seule l'utilisation pendant les contrôles est interdite ; le reste du temps, chaque professeur fixe sa propre règle de tolérance dans sa classe",
              "La simple détention d'un téléphone est interdite au collège : l'élève qui en possède un commet une faute, qu'il s'en serve ou non pendant le cours"
            ],
            "correctIndex": 1,
            "hint": "Un article du Code de l'éducation traite précisément de l'utilisation des téléphones par les élèves : vérifier jusqu'où il s'applique et ce qu'il renvoie au règlement intérieur.",
            "explanation": "L'article L. 511-5 du Code de l'éducation (rédaction issue des lois du 3 août 2018 et du 24 août 2026) interdit aux élèves l'utilisation d'un téléphone mobile ou de tout autre terminal de communications électroniques dans les écoles, les collèges et, depuis le 1er septembre 2026, les lycées, ainsi que pendant les activités d'enseignement hors de l'établissement. Le règlement intérieur en fixe les modalités et détermine les exceptions. C'est l'utilisation qui est interdite, non la détention. La loi permet la confiscation par un personnel de direction, d'enseignement, d'éducation ou de surveillance, selon les modalités du règlement intérieur."
          },
          {
            "label": "Réaction immédiate",
            "question": "Que faire sur le moment ?",
            "options": [
              "Confisquer le téléphone et le garder dans son casier personnel jusqu'à la fin du trimestre",
              "Faire sortir l'élève seul dans le couloir jusqu'à la fin de l'heure, pour ne pas interrompre plus longtemps l'activité du reste de la classe",
              "Prendre le téléphone et faire défiler les messages, afin de vérifier s'il s'agit d'une tentative de fraude ou d'un simple échange sans gravité",
              "Demander l'appareil et appliquer la confiscation prévue par le règlement intérieur, sans en consulter le contenu"
            ],
            "correctIndex": 3,
            "hint": "Le règlement intérieur dit comment confisquer et restituer ; il ne donne aucun droit sur le contenu de l'appareil.",
            "explanation": "La confiscation est prévue par la loi et encadrée par le règlement intérieur, qui fixe aussi la restitution : le professeur l'applique sans éclat. Il n'a aucun droit d'accéder aux messages de l'élève (vie privée). Une rétention prolongée hors des modalités prévues n'a pas de base, et un élève laissé seul dans le couloir échappe à la surveillance dont l'enseignant reste responsable."
          },
          {
            "label": "Action à long terme",
            "question": "Quelle action mener ensuite pour régler durablement le problème ?",
            "options": [
              "Informer la famille et le professeur principal, consigner les faits et convenir en équipe d'une application homogène de la règle",
              "Afficher dans la classe la liste des élèves surpris avec leur téléphone, afin de dissuader les autres élèves de recommencer",
              "Ne plus rien dire : la confiscation suffit, et prévenir la famille ou l'équipe pour un simple téléphone risquerait d'envenimer inutilement la situation",
              "Interdire désormais toute calculatrice dans sa classe, afin d'éviter les confusions entre appareils autorisés et appareils interdits par la loi"
            ],
            "correctIndex": 0,
            "hint": "Un manquement répété se traite en équipe et avec la famille, et la règle gagne à être appliquée de la même façon par tous.",
            "explanation": "La répétition du comportement appelle un suivi : information de la famille et du professeur principal, signalement selon les procédures internes (une punition ou une sanction peut suivre, dans le cadre du règlement intérieur). Une application cohérente par toute l'équipe donne du crédit à la règle. Afficher des noms porte atteinte à la dignité des élèves ; supprimer la calculatrice pénalise un apprentissage prévu par les programmes."
          }
        ],
        "hint1": "L'usage du téléphone par un élève relève-t-il du seul règlement intérieur, ou un texte national le vise-t-il ? Chercher aussi ce que ce texte permet de faire de l'appareil.",
        "hint2": "Le geste porte sur l'appareil seul : dans quel cadre le récupérer, et que s'interdire d'y regarder ?",
        "answer": "Règle de droit : le téléphone est interdit dans les écoles, collèges et lycées (article L. 511-5 du Code de l'éducation), sauf exceptions prévues par le règlement intérieur. Réaction immédiate : demander l'appareil et appliquer la confiscation prévue par le règlement intérieur, sans en consulter le contenu. Action à long terme : informer la famille et le professeur principal, consigner les faits et convenir en équipe d'une application homogène de la règle.",
        "solution": "1. Règle de droit : L'article L. 511-5 du Code de l'éducation (rédaction issue des lois du 3 août 2018 et du 24 août 2026) interdit aux élèves l'utilisation d'un téléphone mobile ou de tout autre terminal de communications électroniques dans les écoles, les collèges et, depuis le 1er septembre 2026, les lycées, ainsi que pendant les activités d'enseignement hors de l'établissement. Le règlement intérieur en fixe les modalités et détermine les exceptions. C'est l'utilisation qui est interdite, non la détention. La loi permet la confiscation par un personnel de direction, d'enseignement, d'éducation ou de surveillance, selon les modalités du règlement intérieur.\n2. Réaction immédiate : La confiscation est prévue par la loi et encadrée par le règlement intérieur, qui fixe aussi la restitution : le professeur l'applique sans éclat. Il n'a aucun droit d'accéder aux messages de l'élève (vie privée). Une rétention prolongée hors des modalités prévues n'a pas de base, et un élève laissé seul dans le couloir échappe à la surveillance dont l'enseignant reste responsable.\n3. Action à long terme : La répétition du comportement appelle un suivi : information de la famille et du professeur principal, signalement selon les procédures internes (une punition ou une sanction peut suivre, dans le cadre du règlement intérieur). Une application cohérente par toute l'équipe donne du crédit à la règle. Afficher des noms porte atteinte à la dignité des élèves ; supprimer la calculatrice pénalise un apprentissage prévu par les programmes."
      },
      {
        "id": "capes-oral2-cas-2",
        "chapterId": "capes-oral2-cas",
        "tier": 1,
        "title": "Une antisèche pendant un devoir surveillé",
        "statement": "Pendant un devoir surveillé de mathématiques en 1re, vous apercevez une élève consulter une feuille de formules dissimulée sous sa trousse. Identifiez la règle de droit, la réaction immédiate et l'action à long terme.",
        "type": "case3",
        "steps": [
          {
            "label": "Règle de droit",
            "question": "Quelle règle de droit s'applique ?",
            "options": [
              "Le professeur peut donner une punition du règlement intérieur ; une sanction relève du chef d'établissement",
              "Le professeur peut prononcer seul une exclusion temporaire de l'établissement, puisque la fraude a eu lieu pendant son cours et sous sa surveillance",
              "Toute fraude à un devoir, même en classe, relève de la commission de discipline du baccalauréat, que le professeur doit saisir par écrit",
              "Aucune réponse n'est possible tant que la famille n'a pas reconnu la fraude par écrit"
            ],
            "correctIndex": 0,
            "hint": "Distinguez les punitions scolaires et les sanctions disciplinaires : elles ne relèvent pas des mêmes personnes.",
            "explanation": "Dans le second degré, les punitions scolaires (prévues par le règlement intérieur) peuvent être prononcées par les enseignants ; les sanctions disciplinaires, comme l'exclusion temporaire, relèvent du chef d'établissement ou du conseil de discipline. Un devoir en classe n'est pas un examen : les instances des examens ne sont pas concernées, et l'aveu de la famille n'est pas une condition."
          },
          {
            "label": "Réaction immédiate",
            "question": "Que faire sur le moment ?",
            "options": [
              "Arrêter le devoir de toute la classe et annoncer à voix haute qu'une élève vient d'être prise en train de tricher, pour l'exemple",
              "Retirer discrètement le document, laisser l'élève finir et noter les faits (heure, contenu du document)",
              "Ramasser la copie de l'élève, la déchirer devant elle et l'envoyer immédiatement à la vie scolaire avec un mot pour le CPE",
              "Faire semblant de ne rien voir pour ne pas troubler le devoir, puis en parler discrètement à l'élève quelques semaines plus tard"
            ],
            "correctIndex": 1,
            "hint": "Il faut faire cesser la fraude sans humilier l'élève ni pénaliser le reste de la classe.",
            "explanation": "Le professeur fait cesser la fraude en retirant le document, sans éclat : humilier l'élève devant la classe est contraire à sa dignité et au respect dû à chacun. Il conserve le document et note les faits avec précision, ce qui permettra une suite juste. Détruire la copie supprime toute trace ; ignorer la fraude rompt l'égalité entre les élèves."
          },
          {
            "label": "Action à long terme",
            "question": "Quelle action mener ensuite pour régler durablement le problème ?",
            "options": [
              "Supprimer définitivement les devoirs surveillés en classe et ne plus évaluer les élèves qu'à partir de travaux faits à la maison",
              "Mettre un zéro à toute la classe pour ce devoir, afin que les élèves apprennent à se surveiller entre eux lors des prochaines évaluations",
              "Raconter l'incident en détail aux autres classes de l'établissement",
              "Reprendre l'incident avec l'élève, informer la famille et le professeur principal, appliquer le règlement intérieur"
            ],
            "correctIndex": 3,
            "hint": "Une suite juste et individuelle, puis une réponse pédagogique.",
            "explanation": "La réponse doit être individuelle et proportionnée : entretien avec l'élève, information de la famille et du professeur principal, punition ou rapport au chef d'établissement selon le règlement intérieur. Une punition collective frappe des élèves qui n'ont rien fait. Sur le fond, une fiche de formules cachée révèle souvent un besoin de méthode : travailler la mémorisation et la compréhension des formules prévient la récidive."
          }
        ],
        "hint1": "Qui peut prononcer quoi ? Distinguer ce qui relève du professeur de ce qui relève du chef d'établissement ou d'un conseil, et se demander si un devoir en classe obéit aux règles d'un examen.",
        "hint2": "Faire cesser la fraude sans en faire un spectacle : que retirer, comment, et que conserver pour permettre une suite juste ?",
        "answer": "Règle de droit : le professeur peut donner une punition du règlement intérieur ; une sanction relève du chef d'établissement. Réaction immédiate : retirer discrètement le document, laisser l'élève finir et noter les faits (heure, contenu du document). Action à long terme : reprendre l'incident avec l'élève, informer la famille et le professeur principal, appliquer le règlement intérieur.",
        "solution": "1. Règle de droit : Dans le second degré, les punitions scolaires (prévues par le règlement intérieur) peuvent être prononcées par les enseignants ; les sanctions disciplinaires, comme l'exclusion temporaire, relèvent du chef d'établissement ou du conseil de discipline. Un devoir en classe n'est pas un examen : les instances des examens ne sont pas concernées, et l'aveu de la famille n'est pas une condition.\n2. Réaction immédiate : Le professeur fait cesser la fraude en retirant le document, sans éclat : humilier l'élève devant la classe est contraire à sa dignité et au respect dû à chacun. Il conserve le document et note les faits avec précision, ce qui permettra une suite juste. Détruire la copie supprime toute trace ; ignorer la fraude rompt l'égalité entre les élèves.\n3. Action à long terme : La réponse doit être individuelle et proportionnée : entretien avec l'élève, information de la famille et du professeur principal, punition ou rapport au chef d'établissement selon le règlement intérieur. Une punition collective frappe des élèves qui n'ont rien fait. Sur le fond, une fiche de formules cachée révèle souvent un besoin de méthode : travailler la mémorisation et la compréhension des formules prévient la récidive."
      },
      {
        "id": "capes-oral2-cas-3",
        "chapterId": "capes-oral2-cas",
        "tier": 1,
        "title": "Un aménagement du PAP oublié le jour du devoir",
        "statement": "Un élève de 5e dyslexique bénéficie d'un plan d'accompagnement personnalisé (PAP) qui prévoit des énoncés agrandis et allégés. Au début d'un devoir, il vous signale que son sujet est le même que celui des autres. Identifiez la règle de droit, la réaction immédiate et l'action à long terme.",
        "type": "case3",
        "steps": [
          {
            "label": "Règle de droit",
            "question": "Quelle règle de droit s'applique ?",
            "options": [
              "Le PAP n'est qu'une recommandation du médecin scolaire : chaque professeur décide librement s'il l'applique ou non dans sa discipline",
              "Le PAP ne concerne que les examens nationaux comme le brevet ; il ne s'applique pas aux devoirs ordinaires faits en classe",
              "Le PAP ne s'applique qu'aux élèves dont le handicap a été reconnu par la maison départementale des personnes handicapées",
              "Les aménagements du PAP (articles L. 311-7 et D. 311-13 du Code de l'éducation) s'imposent aux enseignants"
            ],
            "correctIndex": 3,
            "hint": "Le PAP est un dispositif prévu par le Code de l'éducation pour les troubles des apprentissages.",
            "explanation": "Le PAP (articles L. 311-7 et D. 311-13 du Code de l'éducation) fixe des aménagements et adaptations pédagogiques pour un élève dont les difficultés durables résultent d'un trouble des apprentissages. Ils s'appliquent dans la classe, y compris en évaluation, et s'imposent aux enseignants. Il se distingue du projet personnalisé de scolarisation (PPS), qui relève de la reconnaissance du handicap (article L. 112-2)."
          },
          {
            "label": "Réaction immédiate",
            "question": "Que faire sur le moment ?",
            "options": [
              "Demander à l'élève de composer cette fois avec le sujet commun, en lui promettant que l'aménagement sera bien appliqué au prochain devoir",
              "Dispenser l'élève de ce devoir et lui attribuer la moyenne de la classe",
              "Adapter le sujet sur-le-champ (agrandissement, allègement), discrètement et sans pénaliser l'élève pour le temps perdu",
              "Expliquer d'abord à toute la classe pourquoi cet élève reçoit un sujet différent, afin d'éviter tout sentiment d'injustice chez ses camarades"
            ],
            "correctIndex": 2,
            "hint": "Il faut réparer l'oubli tout de suite, discrètement.",
            "explanation": "L'aménagement est un droit de l'élève : l'oubli se répare immédiatement, avec les moyens du moment, et l'élève ne doit pas subir le retard. La discrétion est essentielle : exposer ses difficultés devant la classe est stigmatisant. Une note fictive ou une dispense ne correspond pas au PAP, qui adapte l'évaluation sans la supprimer."
          },
          {
            "label": "Action à long terme",
            "question": "Quelle action mener ensuite pour régler durablement le problème ?",
            "options": [
              "Préparer désormais un sujet allégé pour toute la classe",
              "Prévoir les aménagements dans chaque évaluation et participer avec le professeur principal au bilan du PAP",
              "Proposer au conseil de classe de retirer le PAP, puisque l'élève a finalement pu composer sans difficulté sur le sujet commun",
              "Demander à la famille de rappeler le PAP par un mot dans le carnet avant chaque devoir, afin d'éviter qu'un tel oubli ne se reproduise"
            ],
            "correctIndex": 1,
            "hint": "La responsabilité de l'application revient à l'équipe pédagogique, pas à la famille.",
            "explanation": "Le PAP est élaboré puis suivi par l'équipe pédagogique, en lien avec la famille et le médecin scolaire, et réévalué régulièrement : le professeur prévoit les adaptations dans toutes ses évaluations et fait part de ses observations au bilan. Reporter cette vigilance sur la famille est une erreur ; alléger le sujet de tous change l'évaluation des autres élèves sans répondre précisément aux besoins de celui-ci."
          }
        ],
        "hint1": "Un plan d'accompagnement personnalisé est-il une recommandation que chaque professeur apprécie, ou une mesure qui l'engage, y compris en évaluation ?",
        "hint2": "L'oubli vient de l'adulte : comment le réparer tout de suite, sans exposer l'élève devant la classe ni le pénaliser pour le temps perdu ?",
        "answer": "Règle de droit : les aménagements du PAP (articles L. 311-7 et D. 311-13 du Code de l'éducation) s'imposent aux enseignants. Réaction immédiate : adapter le sujet sur-le-champ (agrandissement, allègement), discrètement et sans pénaliser l'élève pour le temps perdu. Action à long terme : prévoir les aménagements dans chaque évaluation et participer avec le professeur principal au bilan du PAP.",
        "solution": "1. Règle de droit : Le PAP (articles L. 311-7 et D. 311-13 du Code de l'éducation) fixe des aménagements et adaptations pédagogiques pour un élève dont les difficultés durables résultent d'un trouble des apprentissages. Ils s'appliquent dans la classe, y compris en évaluation, et s'imposent aux enseignants. Il se distingue du projet personnalisé de scolarisation (PPS), qui relève de la reconnaissance du handicap (article L. 112-2).\n2. Réaction immédiate : L'aménagement est un droit de l'élève : l'oubli se répare immédiatement, avec les moyens du moment, et l'élève ne doit pas subir le retard. La discrétion est essentielle : exposer ses difficultés devant la classe est stigmatisant. Une note fictive ou une dispense ne correspond pas au PAP, qui adapte l'évaluation sans la supprimer.\n3. Action à long terme : Le PAP est élaboré puis suivi par l'équipe pédagogique, en lien avec la famille et le médecin scolaire, et réévalué régulièrement : le professeur prévoit les adaptations dans toutes ses évaluations et fait part de ses observations au bilan. Reporter cette vigilance sur la famille est une erreur ; alléger le sujet de tous change l'évaluation des autres élèves sans répondre précisément aux besoins de celui-ci."
      },
      {
        "id": "capes-oral2-cas-4",
        "chapterId": "capes-oral2-cas",
        "tier": 1,
        "title": "Un élève confie être harcelé",
        "statement": "À la fin d'un cours, un élève de 5e reste dans la salle et vous confie que, depuis des semaines, des camarades le bousculent dans les couloirs et l'insultent sur un groupe de messagerie. Il vous demande de n'en parler à personne. Identifiez la règle de droit, la réaction immédiate et l'action à long terme.",
        "type": "case3",
        "steps": [
          {
            "label": "Règle de droit",
            "question": "Quelle règle de droit s'applique ?",
            "options": [
              "Le harcèlement scolaire est un délit (loi du 2 mars 2022) ; le programme pHARe organise son traitement au collège",
              "Le harcèlement ne peut être qualifié qu'après une plainte des parents : l'établissement ne peut pas agir de lui-même avant",
              "Le harcèlement entre élèves relève de la vie privée des familles dès lors qu'une partie des faits se produit hors de l'établissement",
              "Le professeur est tenu au secret professionnel envers l'élève et ne peut rien révéler de sa confidence sans son accord exprès"
            ],
            "correctIndex": 0,
            "hint": "Une loi de 2022 a créé un délit spécifique, et un programme national organise la réponse des établissements.",
            "explanation": "La loi du 2 mars 2022 a créé le délit de harcèlement scolaire (article 222-33-2-3 du Code pénal), y compris lorsque les faits se poursuivent en ligne. Depuis la rentrée 2023, le programme pHARe est obligatoire dans les écoles, collèges et lycées : une équipe ressource met en œuvre le protocole de prise en charge. L'école agit sans attendre une plainte, et la discrétion due à l'élève n'interdit pas de transmettre aux personnes chargées de le protéger."
          },
          {
            "label": "Réaction immédiate",
            "question": "Que faire sur le moment ?",
            "options": [
              "Convoquer dès le cours suivant les élèves désignés et les confronter à la victime devant la classe",
              "Écouter, expliquer qu'on ne peut pas garder ce secret mais qu'on le confiera à qui peut aider, alerter le CPE",
              "Promettre le secret pour garder sa confiance, et attendre qu'il accepte d'en parler lui-même à ses parents ou au CPE quand il sera prêt",
              "Lui conseiller de quitter le groupe de messagerie et de répondre fermement à ses agresseurs, pour leur montrer qu'il ne se laisse pas faire"
            ],
            "correctIndex": 1,
            "hint": "Ne pas promettre ce qu'on ne pourra pas tenir, et ne pas agir seul.",
            "explanation": "La parole de l'élève est accueillie et prise au sérieux. On ne promet pas le secret, mais on explique à qui l'information sera transmise et pourquoi. L'alerte est donnée sans attendre au CPE et au chef d'établissement, qui déclenchent le protocole. Une confrontation publique expose la victime aux représailles ; renvoyer l'élève à ses propres moyens, c'est le laisser seul face au harcèlement."
          },
          {
            "label": "Action à long terme",
            "question": "Quelle action mener ensuite pour régler durablement le problème ?",
            "options": [
              "Organiser un débat en classe sur la situation de l'élève, en le nommant, pour que ses camarades prennent conscience des faits",
              "Participer avec l'équipe pHARe à la prise en charge et au suivi de l'élève, et rester vigilant en classe",
              "Changer l'élève harcelé de classe dès la semaine suivante, sans autre mesure",
              "Considérer l'affaire comme close dès que le CPE a été informé, puisque le traitement du harcèlement relève désormais de la vie scolaire"
            ],
            "correctIndex": 1,
            "hint": "La prise en charge dure dans le temps et associe tous ceux qui côtoient l'élève.",
            "explanation": "Le protocole pHARe prévoit des entretiens, des mesures envers les auteurs et un suivi de la victime dans la durée ; le professeur y contribue par sa vigilance quotidienne et ses observations. Déplacer la victime peut lui donner le sentiment d'être punie, et nommer l'élève dans un débat l'expose davantage. La prévention passe par des actions générales, sans désigner de cas particulier."
          }
        ],
        "hint1": "Quelle qualification pénale ces faits peuvent-ils recevoir, même s'ils se prolongent en ligne, et quel programme organise leur traitement dans les établissements ?",
        "hint2": "L'élève demande le secret : que pouvez-vous lui promettre honnêtement, et à qui l'information doit-elle parvenir sans attendre ?",
        "answer": "Règle de droit : le harcèlement scolaire est un délit (loi du 2 mars 2022) ; le programme pHARe organise son traitement au collège. Réaction immédiate : écouter, expliquer qu'on ne peut pas garder ce secret mais qu'on le confiera à qui peut aider, alerter le CPE. Action à long terme : participer avec l'équipe pHARe à la prise en charge et au suivi de l'élève, et rester vigilant en classe.",
        "solution": "1. Règle de droit : La loi du 2 mars 2022 a créé le délit de harcèlement scolaire (article 222-33-2-3 du Code pénal), y compris lorsque les faits se poursuivent en ligne. Depuis la rentrée 2023, le programme pHARe est obligatoire dans les écoles, collèges et lycées : une équipe ressource met en œuvre le protocole de prise en charge. L'école agit sans attendre une plainte, et la discrétion due à l'élève n'interdit pas de transmettre aux personnes chargées de le protéger.\n2. Réaction immédiate : La parole de l'élève est accueillie et prise au sérieux. On ne promet pas le secret, mais on explique à qui l'information sera transmise et pourquoi. L'alerte est donnée sans attendre au CPE et au chef d'établissement, qui déclenchent le protocole. Une confrontation publique expose la victime aux représailles ; renvoyer l'élève à ses propres moyens, c'est le laisser seul face au harcèlement.\n3. Action à long terme : Le protocole pHARe prévoit des entretiens, des mesures envers les auteurs et un suivi de la victime dans la durée ; le professeur y contribue par sa vigilance quotidienne et ses observations. Déplacer la victime peut lui donner le sentiment d'être punie, et nommer l'élève dans un débat l'expose davantage. La prévention passe par des actions générales, sans désigner de cas particulier."
      },
      {
        "id": "capes-oral2-cas-5",
        "chapterId": "capes-oral2-cas",
        "tier": 1,
        "title": "Une alerte de mise en sûreté mal maîtrisée",
        "statement": "Pendant votre cours, l'alarme de mise en sûreté retentit. Plusieurs élèves se lèvent pour sortir, d'autres veulent appeler leurs parents ; vous découvrez que la porte de votre salle ne ferme pas à clé. Il s'agissait d'un exercice. Identifiez la règle de droit, la réaction immédiate et l'action à long terme.",
        "type": "case3",
        "steps": [
          {
            "label": "Règle de droit",
            "question": "Quelle règle de droit s'applique ?",
            "options": [
              "Le PPMS ne concerne que la direction et la vie scolaire : les enseignants réagissent selon leur propre appréciation de la situation",
              "Les consignes en cas d'alerte relèvent du seul plan d'évacuation incendie",
              "Le PPMS n'est obligatoire que dans les établissements situés à proximité d'un site industriel classé ou d'une zone inondable",
              "Chaque établissement a un plan particulier de mise en sûreté (PPMS, circulaire du 8 juin 2023) qui s'impose à tous"
            ],
            "correctIndex": 3,
            "hint": "Un plan spécifique, distinct de l'évacuation incendie, a été refondu par une circulaire de 2023.",
            "explanation": "La circulaire du 8 juin 2023 encadre les plans particuliers de mise en sûreté de chaque école et établissement. Le PPMS fixe les conduites à tenir face aux risques majeurs et aux menaces (attentat, intrusion) ; ses consignes, différentes de celles de l'évacuation incendie, s'imposent à tous les personnels et sont travaillées lors d'exercices réguliers."
          },
          {
            "label": "Réaction immédiate",
            "question": "Que faire sur le moment ?",
            "options": [
              "Sortir dans le couloir pour aller demander à la direction s'il s'agit d'un exercice",
              "Laisser chaque élève appeler sa famille pour la rassurer, avant de prendre une décision sur la conduite à tenir dans la salle",
              "Laisser sortir les élèves qui le souhaitent, chacun étant libre de se mettre à l'abri à l'endroit qu'il juge le plus sûr",
              "Appliquer le PPMS sans délai : garder les élèves avec soi, faire taire les téléphones, rassurer la classe"
            ],
            "correctIndex": 3,
            "hint": "Pendant l'alerte, on applique les consignes sans attendre de savoir s'il s'agit d'un exercice.",
            "explanation": "Tant que l'alerte dure, elle est traitée comme réelle : le professeur applique les consignes connues à l'avance, garde le contrôle de sa classe et la rassure. Quitter la salle pour s'informer laisse les élèves seuls ; des appels en série gênent les secours et peuvent signaler la présence du groupe."
          },
          {
            "label": "Action à long terme",
            "question": "Quelle action mener ensuite pour régler durablement le problème ?",
            "options": [
              "Garder pour soi le problème de la porte, pour ne pas donner l'impression de mettre en cause la direction ou les services de l'établissement",
              "Rédiger ses propres consignes pour sa classe, différentes de celles du PPMS, qu'il juge mal adaptées à la configuration de sa salle",
              "Signaler au chef d'établissement la porte défectueuse et les difficultés observées, puis retravailler les consignes avec la classe",
              "Demander que les exercices de mise en sûreté soient supprimés, puisqu'ils inquiètent les élèves plus qu'ils ne les préparent"
            ],
            "correctIndex": 2,
            "hint": "L'exercice sert justement à repérer ce qui ne fonctionne pas.",
            "explanation": "Les exercices permettent d'améliorer le plan : le retour d'expérience fait remonter les défauts (porte qui ne ferme pas, réactions des élèves) au chef d'établissement, qui ajuste le PPMS et fait réaliser les travaux. Le professeur reprend les consignes avec sa classe pour que les bons réflexes soient acquis. Des consignes propres à une classe créeraient de la confusion le jour d'une vraie alerte."
          }
        ],
        "hint1": "Quel document propre à chaque établissement fixe la conduite à tenir face à une menace ? Ses consignes sont-elles celles de l'évacuation incendie ?",
        "hint2": "Tant que l'alerte dure, rien ne dit qu'il s'agit d'un exercice : où restent les élèves, et que deviennent les téléphones ?",
        "answer": "Règle de droit : chaque établissement a un plan particulier de mise en sûreté (PPMS, circulaire du 8 juin 2023) qui s'impose à tous. Réaction immédiate : appliquer le PPMS sans délai : garder les élèves avec soi, faire taire les téléphones, rassurer la classe. Action à long terme : signaler au chef d'établissement la porte défectueuse et les difficultés observées, puis retravailler les consignes avec la classe.",
        "solution": "1. Règle de droit : La circulaire du 8 juin 2023 encadre les plans particuliers de mise en sûreté de chaque école et établissement. Le PPMS fixe les conduites à tenir face aux risques majeurs et aux menaces (attentat, intrusion) ; ses consignes, différentes de celles de l'évacuation incendie, s'imposent à tous les personnels et sont travaillées lors d'exercices réguliers.\n2. Réaction immédiate : Tant que l'alerte dure, elle est traitée comme réelle : le professeur applique les consignes connues à l'avance, garde le contrôle de sa classe et la rassure. Quitter la salle pour s'informer laisse les élèves seuls ; des appels en série gênent les secours et peuvent signaler la présence du groupe.\n3. Action à long terme : Les exercices permettent d'améliorer le plan : le retour d'expérience fait remonter les défauts (porte qui ne ferme pas, réactions des élèves) au chef d'établissement, qui ajuste le PPMS et fait réaliser les travaux. Le professeur reprend les consignes avec sa classe pour que les bons réflexes soient acquis. Des consignes propres à une classe créeraient de la confusion le jour d'une vraie alerte."
      },
      {
        "id": "capes-oral2-cas-6",
        "chapterId": "capes-oral2-cas",
        "tier": 1,
        "title": "Une insulte adressée au professeur",
        "statement": "En 3e, après une remarque sur son travail, un élève vous insulte grossièrement devant la classe et refuse de se calmer. Identifiez la règle de droit, la réaction immédiate et l'action à long terme.",
        "type": "case3",
        "steps": [
          {
            "label": "Règle de droit",
            "question": "Quelle règle de droit s'applique ?",
            "options": [
              "Le professeur peut donner une punition et saisir le chef d'établissement, seul à engager une procédure disciplinaire",
              "Une insulte entre un élève et un adulte relève uniquement de la famille : l'établissement n'a pas à intervenir dans ce conflit",
              "Le professeur doit d'abord déposer plainte : aucune mesure scolaire n'est possible tant que la justice ne s'est pas prononcée",
              "Le professeur peut exclure lui-même l'élève de l'établissement pour plusieurs jours, la gravité d'une insulte publique le justifiant"
            ],
            "correctIndex": 0,
            "hint": "Qui peut prononcer quoi ? Punition et sanction ne relèvent pas de la même autorité.",
            "explanation": "Les punitions scolaires peuvent être prononcées par les enseignants dans le cadre du règlement intérieur ; les sanctions disciplinaires (avertissement, blâme, exclusions) sont décidées par le chef d'établissement ou le conseil de discipline. Une insulte envers un personnel justifie que le chef d'établissement en soit saisi. La voie pénale est indépendante et n'empêche pas la réponse scolaire."
          },
          {
            "label": "Réaction immédiate",
            "question": "Que faire sur le moment ?",
            "options": [
              "Répondre à l'élève sur le même registre, pour montrer clairement à toute la classe qu'on ne se laisse pas insulter sans réagir",
              "Garder son calme, ne pas répondre sur le même ton, faire cesser l'incident, au besoin conduire l'élève à la vie scolaire",
              "Faire comme si de rien n'était et poursuivre le cours, pour ne pas donner d'importance à l'insulte ni à son auteur",
              "Envoyer l'élève seul dans la cour, le temps qu'il se calme, puis le laisser revenir en classe lorsqu'il se sentira prêt"
            ],
            "correctIndex": 1,
            "hint": "Le professeur reste l'adulte responsable de tous les élèves, y compris de celui qui l'insulte.",
            "explanation": "Le calme du professeur protège l'autorité et la classe ; répondre sur le même ton ferait de l'incident un affrontement personnel. Si l'élève doit quitter la salle, il est accompagné jusqu'à la vie scolaire : un élève laissé seul reste sous la responsabilité de l'enseignant. Ignorer une insulte publique signifie à la classe qu'elle est acceptable."
          },
          {
            "label": "Action à long terme",
            "question": "Quelle action mener ensuite pour régler durablement le problème ?",
            "options": [
              "Faire un rapport factuel au chef d'établissement, informer le professeur principal et la famille, revoir l'élève",
              "Baisser les notes de l'élève pour le restant du trimestre, en réponse à son comportement et pour qu'il mesure la gravité des faits",
              "Refuser désormais d'accueillir l'élève dans son cours jusqu'à la fin de l'année",
              "Régler l'affaire seul en exigeant des excuses écrites de l'élève, sans en informer personne afin de ne pas l'exposer davantage"
            ],
            "correctIndex": 0,
            "hint": "Un écrit, une réponse institutionnelle, puis la reprise du travail avec l'élève.",
            "explanation": "Le rapport factuel permet au chef d'établissement de décider des suites, éventuellement disciplinaires. L'information du professeur principal et de la famille inscrit la réponse dans un suivi. La note mesure les acquis et ne sanctionne pas un comportement ; refuser un élève méconnaît l'obligation d'assiduité et le droit à l'instruction. La reprise de la relation est l'objectif final."
          }
        ],
        "hint1": "Devant une insulte grave, de quoi le professeur décide-t-il lui-même, et qui peut seul engager la voie disciplinaire ?",
        "hint2": "Éviter que l'incident ne tourne à l'affrontement personnel : comment rester calme et, si l'élève doit sortir, qui l'accompagne ?",
        "answer": "Règle de droit : le professeur peut donner une punition et saisir le chef d'établissement, seul à engager une procédure disciplinaire. Réaction immédiate : garder son calme, ne pas répondre sur le même ton, faire cesser l'incident, au besoin conduire l'élève à la vie scolaire. Action à long terme : faire un rapport factuel au chef d'établissement, informer le professeur principal et la famille, revoir l'élève.",
        "solution": "1. Règle de droit : Les punitions scolaires peuvent être prononcées par les enseignants dans le cadre du règlement intérieur ; les sanctions disciplinaires (avertissement, blâme, exclusions) sont décidées par le chef d'établissement ou le conseil de discipline. Une insulte envers un personnel justifie que le chef d'établissement en soit saisi. La voie pénale est indépendante et n'empêche pas la réponse scolaire.\n2. Réaction immédiate : Le calme du professeur protège l'autorité et la classe ; répondre sur le même ton ferait de l'incident un affrontement personnel. Si l'élève doit quitter la salle, il est accompagné jusqu'à la vie scolaire : un élève laissé seul reste sous la responsabilité de l'enseignant. Ignorer une insulte publique signifie à la classe qu'elle est acceptable.\n3. Action à long terme : Le rapport factuel permet au chef d'établissement de décider des suites, éventuellement disciplinaires. L'information du professeur principal et de la famille inscrit la réponse dans un suivi. La note mesure les acquis et ne sanctionne pas un comportement ; refuser un élève méconnaît l'obligation d'assiduité et le droit à l'instruction. La reprise de la relation est l'objectif final."
      },
      {
        "id": "capes-oral2-cas-25",
        "chapterId": "capes-oral2-cas",
        "tier": 1,
        "title": "Un téléphone utilisé en cours au lycée",
        "statement": "En terminale, pendant un exercice de recherche, un élève interroge un assistant conversationnel sur son téléphone. Repris, il répond : « Au lycée, on a le droit, c'est seulement interdit au collège. » Identifiez la règle de droit, la réaction immédiate et l'action à long terme.",
        "type": "case3",
        "steps": [
          {
            "label": "Règle de droit",
            "question": "Quelle règle de droit s'applique ?",
            "options": [
              "L'élève a raison : l'interdiction nationale ne vise que les écoles et les collèges, et chaque lycée reste libre d'adopter ou non une règle propre",
              "L'interdiction ne joue au lycée que pendant les évaluations ; le reste du temps, chaque enseignant décide s'il tolère l'usage du téléphone",
              "L'utilisation du téléphone par les élèves est aussi interdite au lycée (article L. 511-5 du Code de l'éducation), sauf exceptions prévues par le règlement intérieur",
              "Seuls les élèves mineurs sont concernés au lycée : un élève majeur de terminale peut utiliser son téléphone en cours sans aucune restriction"
            ],
            "correctIndex": 2,
            "hint": "L'élève invoque un état du droit : vérifier la version en vigueur de l'article du Code de l'éducation qui traite des téléphones.",
            "explanation": "Depuis le 1er septembre 2026, l'article L. 511-5 du Code de l'éducation (loi du 24 août 2026) étend aux lycées l'interdiction d'utiliser un téléphone mobile ou un autre terminal de communications électroniques. Le règlement intérieur en fixe les modalités et détermine les exceptions. Des règles particulières sont possibles pour les étudiants des lycées comportant des formations d'enseignement supérieur, et les équipements autorisés aux élèves en situation de handicap ou présentant un trouble de santé invalidant ne sont pas concernés. Le texte vise les élèves, sans distinction d'âge."
          },
          {
            "label": "Réaction immédiate",
            "question": "Que faire sur le moment ?",
            "options": [
              "Prendre l'appareil et lire ce que l'assistant a produit, pour déterminer si l'élève a triché et quelle note lui attribuer sur cet exercice",
              "Rappeler calmement la règle, demander l'appareil et appliquer le règlement intérieur, sans en consulter le contenu ni polémiquer devant la classe",
              "Engager avec la classe un débat sur le bien-fondé de la loi, afin que chacun puisse voter sur le maintien de la règle dans ce cours",
              "Laisser faire cette fois-ci, puisque l'outil peut être utile en mathématiques et que l'élève semble travailler sur l'exercice proposé"
            ],
            "correctIndex": 1,
            "hint": "Que permet la loi, et à qui ? Que ne permet-elle pas de faire de l'appareil une fois récupéré ?",
            "explanation": "La loi permet à un personnel de direction, d'enseignement, d'éducation ou de surveillance de confisquer l'appareil, le règlement intérieur fixant les modalités de confiscation et de restitution. Le contenu de l'appareil reste privé : le professeur ne le consulte pas. Un usage pédagogique n'existe que dans le cadre des exceptions du règlement intérieur, pas à l'initiative de l'élève, et une règle légale ne se met pas aux voix."
          },
          {
            "label": "Action à long terme",
            "question": "Quelle action mener ensuite pour régler durablement le problème ?",
            "options": [
              "Mettre zéro à l'élève sur l'exercice pour marquer le coup, sans en parler à personne, de manière à clore rapidement l'incident",
              "Interdire tout usage du numérique en mathématiques, y compris les logiciels et calculatrices prévus par les programmes, pour lever toute ambiguïté",
              "Proposer aux élèves de rédiger leur propre règle de classe autorisant le téléphone, puisqu'une partie d'entre eux est majeure en terminale",
              "Informer le professeur principal, vérifier ce que prévoit le règlement intérieur et travailler en équipe sur l'usage des outils numériques en classe"
            ],
            "correctIndex": 3,
            "hint": "La réponse durable se construit à plusieurs : qui informer, et quel texte de l'établissement consulter ?",
            "explanation": "Le changement de la règle étant récent, l'équipe gagne à harmoniser sa pratique à partir du règlement intérieur, et à travailler avec les élèves sur l'usage raisonné des outils numériques. Une note ne sert pas à sanctionner un comportement. Le numérique prévu par les programmes reste un outil d'enseignement à part entière, et une règle de classe ne peut pas écarter la loi."
          }
        ],
        "hint1": "L'élève affirme que la règle s'arrête au collège : quel article permet de trancher, dans sa version en vigueur, et que renvoie-t-il au règlement intérieur ?",
        "hint2": "Rester sur la règle sans polémiquer : que demander à l'élève, dans quel cadre, et que s'interdire de consulter ?",
        "answer": "Règle de droit : l'utilisation du téléphone par les élèves est aussi interdite au lycée (article L. 511-5 du Code de l'éducation), sauf exceptions prévues par le règlement intérieur. Réaction immédiate : rappeler calmement la règle, demander l'appareil et appliquer le règlement intérieur, sans en consulter le contenu ni polémiquer devant la classe. Action à long terme : informer le professeur principal, vérifier ce que prévoit le règlement intérieur et travailler en équipe sur l'usage des outils numériques en classe.",
        "solution": "1. Règle de droit : Depuis le 1er septembre 2026, l'article L. 511-5 du Code de l'éducation (loi du 24 août 2026) étend aux lycées l'interdiction d'utiliser un téléphone mobile ou un autre terminal de communications électroniques. Le règlement intérieur en fixe les modalités et détermine les exceptions. Des règles particulières sont possibles pour les étudiants des lycées comportant des formations d'enseignement supérieur, et les équipements autorisés aux élèves en situation de handicap ou présentant un trouble de santé invalidant ne sont pas concernés. Le texte vise les élèves, sans distinction d'âge.\n2. Réaction immédiate : La loi permet à un personnel de direction, d'enseignement, d'éducation ou de surveillance de confisquer l'appareil, le règlement intérieur fixant les modalités de confiscation et de restitution. Le contenu de l'appareil reste privé : le professeur ne le consulte pas. Un usage pédagogique n'existe que dans le cadre des exceptions du règlement intérieur, pas à l'initiative de l'élève, et une règle légale ne se met pas aux voix.\n3. Action à long terme : Le changement de la règle étant récent, l'équipe gagne à harmoniser sa pratique à partir du règlement intérieur, et à travailler avec les élèves sur l'usage raisonné des outils numériques. Une note ne sert pas à sanctionner un comportement. Le numérique prévu par les programmes reste un outil d'enseignement à part entière, et une règle de classe ne peut pas écarter la loi."
      },
      {
        "id": "capes-oral2-cas-27",
        "chapterId": "capes-oral2-cas",
        "tier": 1,
        "title": "Une élève qui se dit « nulle en maths »",
        "statement": "En seconde, une élève rend une copie blanche au premier devoir surveillé et vous glisse à voix basse : « De toute façon, je suis nulle en maths, j'ai toujours été nulle. » Elle semble angoissée à chaque évaluation et ne participe plus à l'oral. Identifiez la règle de droit, la réaction immédiate et l'action à long terme.",
        "type": "case3",
        "steps": [
          {
            "label": "Règle de droit",
            "question": "Quelle règle de droit éclaire la situation ?",
            "options": [
              "La formation scolaire favorise l'épanouissement de l'élève (Code de l'éducation, L. 111-2), et tous les enfants peuvent apprendre et progresser (L. 111-1)",
              "Le ressenti des élèves ne relève pas du professeur : ses obligations de service se limitent à enseigner et évaluer les connaissances fixées par le programme",
              "Une copie blanche constitue un refus de travail, qui appelle automatiquement une punition ou une sanction prévue par le règlement intérieur",
              "Une élève en difficulté persistante doit être réorientée sans délai vers une voie sans mathématiques, au nom du droit au conseil en orientation"
            ],
            "correctIndex": 0,
            "hint": "Le Code de l'éducation ne fixe pas seulement des connaissances à transmettre : que dit-il de la formation scolaire et de la capacité de chaque enfant à progresser ?",
            "explanation": "Selon l'article L. 111-2 du Code de l'éducation, la formation scolaire « favorise l'épanouissement de l'enfant », lui permet d'acquérir une culture et le prépare à la vie professionnelle et à l'exercice de ses responsabilités de citoyen. L'article L. 111-1 ajoute que le service public de l'éducation reconnaît que tous les enfants partagent la capacité d'apprendre et de progresser. Le référentiel de compétences de 2013 demande au professeur de connaître les élèves et les processus d'apprentissage et d'accompagner les élèves dans leur parcours de formation. Une copie blanche est évaluée comme telle, mais ce n'est pas une faute disciplinaire, et l'orientation ne se décide ni sur un devoir ni par le seul professeur."
          },
          {
            "label": "Réaction immédiate",
            "question": "Que faire sur le moment ?",
            "options": [
              "Lui affirmer devant la classe qu'aucun élève n'est nul, puis annoncer que sa note ne comptera pas, pour ne pas la décourager davantage",
              "Lui proposer un court échange à l'écart, l'écouter, distinguer sa valeur de sa note et reprendre avec elle une question précise du devoir",
              "Lui conseiller de consulter un spécialiste des troubles des apprentissages, une copie blanche suffisant à faire soupçonner une dyscalculie",
              "Ne rien dire pour ne pas la mettre mal à l'aise, et attendre le conseil de classe pour aborder sa situation avec l'équipe pédagogique"
            ],
            "correctIndex": 1,
            "hint": "Ce qu'elle a dit à voix basse appelle une réponse qui ne l'expose pas : où, et pour faire quoi de concret avec elle ?",
            "explanation": "La confidence a été faite discrètement : la réponse doit l'être aussi, car une remarque publique, même bienveillante, la désigne à la classe. Écouter, puis séparer la personne de la performance (« ce devoir est raté, ce n'est pas un verdict sur toi »), et surtout repartir d'une question précise où elle peut réussir : le sentiment de compétence se reconstruit par des réussites réelles, pas par des encouragements généraux. Neutraliser la note serait inéquitable et confirmerait qu'on la croit incapable. Le professeur ne pose pas de diagnostic : s'il soupçonne un trouble, il en parle à l'équipe et aux personnels de santé. Attendre le conseil de classe laisse le blocage s'installer."
          },
          {
            "label": "Action à long terme",
            "question": "Quelle action mener ensuite pour l'aider durablement ?",
            "options": [
              "Lui conseiller d'abandonner les mathématiques dès la fin de l'année, ce qui supprimera la source de son angoisse et la libérera pour le reste de sa scolarité",
              "Évoquer sa situation en salle des professeurs, devant tous les collègues présents, pour que chacun sache qu'elle est fragile et la ménage",
              "Lui donner chaque semaine des exercices supplémentaires à faire seule, car seule la quantité d'entraînement fait céder un blocage",
              "Informer le professeur principal, orienter si besoin vers l'infirmier ou le psychologue de l'Éducation nationale, ménager des évaluations formatives"
            ],
            "correctIndex": 3,
            "hint": "Qui, dans l'établissement, coordonne le suivi d'un élève, et quels personnels accompagnent son bien-être ? Et que changer dans sa propre façon d'évaluer ?",
            "explanation": "Le professeur principal coordonne le suivi et fait le lien avec la famille ; l'infirmier et le psychologue de l'Éducation nationale peuvent accompagner une anxiété durable et aider l'élève à construire son projet. En classe, des évaluations formatives (critères explicites, droit à l'erreur, objectifs progressifs, retours sur les progrès) réduisent la peur de l'échec. Les informations sur un élève ne circulent qu'entre les personnes qui en ont besoin, pas en salle des professeurs devant tous. Le choix des enseignements de première appartient à l'élève et à sa famille dans la procédure d'orientation, et un surcroît d'exercices faits seule renforce souvent le sentiment d'échec."
          }
        ],
        "hint1": "Quels articles du Code de l'éducation parlent de l'épanouissement de l'élève et de sa capacité à progresser ?",
        "hint2": "Répondre d'abord à l'élève elle-même, discrètement et sur du concret, puis penser à l'équipe et à la façon d'évaluer.",
        "answer": "Règle de droit : la formation scolaire favorise l'épanouissement de l'élève (Code de l'éducation, L. 111-2), et tous les enfants peuvent apprendre et progresser (L. 111-1). Réaction immédiate : lui proposer un court échange à l'écart, l'écouter, distinguer sa valeur de sa note et reprendre avec elle une question précise du devoir. Action à long terme : informer le professeur principal, orienter si besoin vers l'infirmier ou le psychologue de l'Éducation nationale, ménager des évaluations formatives.",
        "solution": "1. Règle de droit : Selon l'article L. 111-2 du Code de l'éducation, la formation scolaire « favorise l'épanouissement de l'enfant », lui permet d'acquérir une culture et le prépare à la vie professionnelle et à l'exercice de ses responsabilités de citoyen. L'article L. 111-1 ajoute que le service public de l'éducation reconnaît que tous les enfants partagent la capacité d'apprendre et de progresser. Le référentiel de compétences de 2013 demande au professeur de connaître les élèves et les processus d'apprentissage et d'accompagner les élèves dans leur parcours de formation. Une copie blanche est évaluée comme telle, mais ce n'est pas une faute disciplinaire, et l'orientation ne se décide ni sur un devoir ni par le seul professeur.\n2. Réaction immédiate : La confidence a été faite discrètement : la réponse doit l'être aussi, car une remarque publique, même bienveillante, la désigne à la classe. Écouter, puis séparer la personne de la performance (« ce devoir est raté, ce n'est pas un verdict sur toi »), et surtout repartir d'une question précise où elle peut réussir : le sentiment de compétence se reconstruit par des réussites réelles, pas par des encouragements généraux. Neutraliser la note serait inéquitable et confirmerait qu'on la croit incapable. Le professeur ne pose pas de diagnostic : s'il soupçonne un trouble, il en parle à l'équipe et aux personnels de santé. Attendre le conseil de classe laisse le blocage s'installer.\n3. Action à long terme : Le professeur principal coordonne le suivi et fait le lien avec la famille ; l'infirmier et le psychologue de l'Éducation nationale peuvent accompagner une anxiété durable et aider l'élève à construire son projet. En classe, des évaluations formatives (critères explicites, droit à l'erreur, objectifs progressifs, retours sur les progrès) réduisent la peur de l'échec. Les informations sur un élève ne circulent qu'entre les personnes qui en ont besoin, pas en salle des professeurs devant tous. Le choix des enseignements de première appartient à l'élève et à sa famille dans la procédure d'orientation, et un surcroît d'exercices faits seule renforce souvent le sentiment d'échec."
      },
      // =========================================================================
      // PALIER 2 : LAÏCITÉ ET NEUTRALITÉ
      // =========================================================================
      {
        "id": "capes-oral2-cas-7",
        "chapterId": "capes-oral2-cas",
        "tier": 2,
        "title": "Un élève refuse un exercice de probabilités",
        "statement": "En 2de, lors d'une séance sur les probabilités avec des exemples de jeux de hasard, un élève refuse de faire l'exercice, déclare que « ces jeux sont interdits par sa religion » et que « le hasard n'existe pas ». Identifiez la règle de droit, la réaction immédiate et l'action à long terme.",
        "type": "case3",
        "steps": [
          {
            "label": "Règle de droit",
            "question": "Quelle règle de droit s'applique ?",
            "options": [
              "La loi du 15 mars 2004 interdit aux élèves toute expression religieuse en classe, ce qui justifie une exclusion immédiate du cours",
              "La liberté de conscience autorise l'élève à refuser les exercices contraires à ses convictions",
              "Le professeur doit remplacer l'exercice par un autre, puisque la laïcité lui impose de respecter les croyances de chaque élève",
              "L'assiduité (articles L. 511-1 et R. 511-11) impose de faire les travaux ; la liberté d'expression ne peut nuire aux cours"
            ],
            "correctIndex": 3,
            "hint": "L'obligation d'assiduité ne se limite pas à la présence physique.",
            "explanation": "L'article L. 511-1 et l'article R. 511-11 du Code de l'éducation imposent aux élèves d'accomplir les travaux demandés et de respecter le contenu des programmes ; l'article L. 511-2 précise que la liberté d'expression ne peut porter atteinte aux activités d'enseignement. La Charte de la laïcité ajoute qu'aucun élève ne peut invoquer ses convictions pour contester une question au programme. La loi de 2004 vise les signes et tenues, pas les propos."
          },
          {
            "label": "Réaction immédiate",
            "question": "Que faire sur le moment ?",
            "options": [
              "Exclure l'élève du cours sur-le-champ pour atteinte à la laïcité, et le faire conduire à la vie scolaire jusqu'à la fin de l'heure",
              "Engager devant la classe un débat sur la place du hasard dans les religions",
              "Expliquer sans débat religieux qu'une probabilité modélise le hasard et n'est pas un jeu, rappeler l'obligation de travail",
              "Dispenser l'élève de cette partie du programme pour éviter le conflit, en lui donnant un autre chapitre à travailler en autonomie"
            ],
            "correctIndex": 2,
            "hint": "Commencer par comprendre et expliquer ; le professeur n'a pas à se prononcer sur une croyance.",
            "explanation": "Une maladresse ou une question n'est pas forcément une contestation : on écoute, puis on explique ce que fait réellement l'exercice (modéliser une expérience aléatoire n'est ni jouer ni affirmer une thèse sur le monde). Le professeur ne prend pas parti sur les croyances. Il rappelle l'exigence de travail sans humilier et poursuit le cours. Une dispense créerait une inégalité devant le programme."
          },
          {
            "label": "Action à long terme",
            "question": "Quelle action mener ensuite pour régler durablement le problème ?",
            "options": [
              "Retirer définitivement les jeux de hasard de ses exemples, dans toutes ses classes, pour ne plus heurter les convictions des élèves",
              "Mettre zéro à chaque exercice refusé, sans en parler à personne, pour que l'élève comprenne seul l'intérêt de faire son travail",
              "Reprendre l'échange, informer le professeur principal et le chef d'établissement, réponse graduée si le refus persiste",
              "Considérer l'incident comme réglé puisque l'élève a fini par se taire et que le cours a pu se poursuivre normalement"
            ],
            "correctIndex": 2,
            "hint": "Le plan laïcité de 2022 décrit une réponse graduée, qui commence par le dialogue.",
            "explanation": "Le professeur ne reste pas seul : le professeur principal et le chef d'établissement sont informés, la famille est reçue et la règle expliquée. La circulaire du 9 novembre 2022 (plan laïcité) demande, après la phase de dialogue, de répondre de façon systématique et graduée, y compris par une sanction si la contestation persiste. Supprimer des contenus revient à céder sur le programme ; une note ne sert pas à sanctionner un refus."
          }
        ],
        "hint1": "Un élève peut-il refuser un travail au nom de ses convictions ? Chercher l'obligation qui s'impose aux élèves et la limite de leur liberté d'expression.",
        "hint2": "Distinguer une question d'une contestation : que fait réellement un exercice de probabilités, et comment le dire sans entrer dans un débat sur les croyances ?",
        "answer": "Règle de droit : l'assiduité (articles L. 511-1 et R. 511-11) impose de faire les travaux ; la liberté d'expression ne peut nuire aux cours. Réaction immédiate : expliquer sans débat religieux qu'une probabilité modélise le hasard et n'est pas un jeu, rappeler l'obligation de travail. Action à long terme : reprendre l'échange, informer le professeur principal et le chef d'établissement, réponse graduée si le refus persiste.",
        "solution": "1. Règle de droit : L'article L. 511-1 et l'article R. 511-11 du Code de l'éducation imposent aux élèves d'accomplir les travaux demandés et de respecter le contenu des programmes ; l'article L. 511-2 précise que la liberté d'expression ne peut porter atteinte aux activités d'enseignement. La Charte de la laïcité ajoute qu'aucun élève ne peut invoquer ses convictions pour contester une question au programme. La loi de 2004 vise les signes et tenues, pas les propos.\n2. Réaction immédiate : Une maladresse ou une question n'est pas forcément une contestation : on écoute, puis on explique ce que fait réellement l'exercice (modéliser une expérience aléatoire n'est ni jouer ni affirmer une thèse sur le monde). Le professeur ne prend pas parti sur les croyances. Il rappelle l'exigence de travail sans humilier et poursuit le cours. Une dispense créerait une inégalité devant le programme.\n3. Action à long terme : Le professeur ne reste pas seul : le professeur principal et le chef d'établissement sont informés, la famille est reçue et la règle expliquée. La circulaire du 9 novembre 2022 (plan laïcité) demande, après la phase de dialogue, de répondre de façon systématique et graduée, y compris par une sanction si la contestation persiste. Supprimer des contenus revient à céder sur le programme ; une note ne sert pas à sanctionner un refus."
      },
      {
        "id": "capes-oral2-cas-8",
        "chapterId": "capes-oral2-cas",
        "tier": 2,
        "title": "Une élève arrive en cours vêtue d'une abaya",
        "statement": "Dans un lycée public, une élève entre dans votre salle vêtue d'une abaya. Plusieurs élèves réagissent à voix haute. Identifiez la règle de droit, la réaction immédiate et l'action à long terme.",
        "type": "case3",
        "steps": [
          {
            "label": "Règle de droit",
            "question": "Quelle règle de droit s'applique ?",
            "options": [
              "La loi de 2004 ne vise que les signes religieux, comme les bijoux ou les couvre-chefs, et jamais les tenues vestimentaires",
              "L'interdiction de l'abaya ne s'applique qu'au collège, les lycéens restant libres de leur tenue qu'ils soient mineurs ou majeurs",
              "L'article L. 141-5-1 interdit aux élèves les tenues religieuses ostensibles ; la note du 31 août 2023 y range l'abaya",
              "L'abaya est un vêtement de mode et non une tenue religieuse : aucun texte ne permet d'en interdire le port dans un lycée public"
            ],
            "correctIndex": 2,
            "hint": "La loi de 2004 vise les signes et les tenues ; une note de service de 2023 a précisé le cas de l'abaya.",
            "explanation": "L'article L. 141-5-1 (loi du 15 mars 2004) interdit dans les écoles, collèges et lycées publics le port de signes ou de tenues par lesquels les élèves manifestent ostensiblement une appartenance religieuse. La note de service du 31 août 2023 précise que l'abaya et le qamis en font partie ; le juge des référés du Conseil d'État a refusé de suspendre cette mesure le 7 septembre 2023 (n° 487891)."
          },
          {
            "label": "Réaction immédiate",
            "question": "Que faire sur le moment ?",
            "options": [
              "Faire cesser les commentaires, ne pas débattre devant la classe et informer sans délai le chef d'établissement",
              "Laisser l'élève assister au cours sans rien dire à personne, afin d'éviter un conflit qui perturberait la séance",
              "Demander à l'élève de quitter immédiatement l'établissement et de rentrer chez elle pour se changer avant de revenir",
              "Expliquer à l'élève, devant toute la classe, que sa tenue est religieuse et lui demander de justifier son choix vestimentaire"
            ],
            "correctIndex": 0,
            "hint": "Le dialogue avec l'élève existe, mais ce n'est pas au professeur de le mener seul devant la classe.",
            "explanation": "Le professeur protège l'élève des réactions de la classe et ne débat pas publiquement de sa tenue. Il alerte immédiatement le chef d'établissement, à qui revient le dialogue préalable avec l'élève ; ce dialogue n'est pas une négociation. Renvoyer l'élève chez elle n'est pas de son ressort ; se taire laisse l'équipe dans l'ignorance."
          },
          {
            "label": "Action à long terme",
            "question": "Quelle action mener ensuite pour régler durablement le problème ?",
            "options": [
              "Proposer que l'élève suive les cours à distance tant qu'elle souhaite porter cette tenue, afin de préserver sa scolarité",
              "Négocier avec l'élève un compromis, par exemple un port de la tenue limité aux récréations et aux heures sans professeur",
              "Laisser chaque professeur décider s'il accepte ou non la tenue dans son propre cours, selon sa conception de la laïcité",
              "Soutenir le chef d'établissement, qui dialogue avec la famille ; si le refus persiste, une procédure disciplinaire suit"
            ],
            "correctIndex": 3,
            "hint": "Le décret du 16 août 2023 a rendu la procédure disciplinaire obligatoire dans certains cas.",
            "explanation": "Après le dialogue conduit par le chef d'établissement, dont les étapes sont consignées par écrit, un refus persistant entraîne obligatoirement l'engagement d'une procédure disciplinaire (article R. 421-10 du Code de l'éducation modifié par le décret du 16 août 2023). L'équipe académique Valeurs de la République peut accompagner l'établissement. La règle est la même pour tous : ni compromis, ni application variable selon les professeurs."
          }
        ],
        "hint1": "Quel texte régit les tenues des élèves dans un lycée public, et quel document en a précisé l'application à ce vêtement ?",
        "hint2": "Deux publics à gérer : la classe qui réagit et l'élève concernée. À qui revient le dialogue, et qui prévenir aussitôt ?",
        "answer": "Règle de droit : l'article L. 141-5-1 interdit aux élèves les tenues religieuses ostensibles ; la note du 31 août 2023 y range l'abaya. Réaction immédiate : faire cesser les commentaires, ne pas débattre devant la classe et informer sans délai le chef d'établissement. Action à long terme : soutenir le chef d'établissement, qui dialogue avec la famille ; si le refus persiste, une procédure disciplinaire suit.",
        "solution": "1. Règle de droit : L'article L. 141-5-1 (loi du 15 mars 2004) interdit dans les écoles, collèges et lycées publics le port de signes ou de tenues par lesquels les élèves manifestent ostensiblement une appartenance religieuse. La note de service du 31 août 2023 précise que l'abaya et le qamis en font partie ; le juge des référés du Conseil d'État a refusé de suspendre cette mesure le 7 septembre 2023 (n° 487891).\n2. Réaction immédiate : Le professeur protège l'élève des réactions de la classe et ne débat pas publiquement de sa tenue. Il alerte immédiatement le chef d'établissement, à qui revient le dialogue préalable avec l'élève ; ce dialogue n'est pas une négociation. Renvoyer l'élève chez elle n'est pas de son ressort ; se taire laisse l'équipe dans l'ignorance.\n3. Action à long terme : Après le dialogue conduit par le chef d'établissement, dont les étapes sont consignées par écrit, un refus persistant entraîne obligatoirement l'engagement d'une procédure disciplinaire (article R. 421-10 du Code de l'éducation modifié par le décret du 16 août 2023). L'équipe académique Valeurs de la République peut accompagner l'établissement. La règle est la même pour tous : ni compromis, ni application variable selon les professeurs."
      },
      {
        "id": "capes-oral2-cas-9",
        "chapterId": "capes-oral2-cas",
        "tier": 2,
        "title": "Une candidate libre refuse le contrôle avant une épreuve",
        "statement": "Vous surveillez une épreuve du baccalauréat. Une candidate libre, voilée, se présente ; au moment du contrôle anti-fraude, elle refuse que l'on vérifie qu'elle ne porte pas d'oreillette. Identifiez la règle de droit, la réaction immédiate et l'action à long terme.",
        "type": "case3",
        "steps": [
          {
            "label": "Règle de droit",
            "question": "Quelle règle de droit s'applique ?",
            "options": [
              "La loi de 2004 ne vise pas les candidats libres, mais un contrôle visuel anti-fraude (oreilles, poignets) reste possible",
              "Un candidat libre n'est soumis à aucun contrôle, la surveillance anti-fraude ne concernant que les élèves scolarisés dans le centre",
              "La loi de 2004 s'applique à tout candidat présent dans un centre d'examen public : la candidate doit retirer son voile pour composer",
              "Les surveillants peuvent fouiller les vêtements et les effets personnels de tout candidat sur simple soupçon de fraude"
            ],
            "correctIndex": 0,
            "hint": "La loi de 2004 vise les élèves des établissements publics ; les règles anti-fraude visent tous les candidats.",
            "explanation": "Le Vademecum de mars 2024 (fiche 6) rappelle que l'article L. 141-5-1 ne concerne que les élèves des établissements publics : ni les candidats libres, ni ceux du Cned, ni les élèves du privé sous contrat. Pour tous, des contrôles anti-fraude sont possibles : la circulaire du 3 mai 2011 prévoit un contrôle visuel des oreilles, de la nuque et des poignets, sans contact. Une fouille n'est jamais du ressort des surveillants. La dissimulation du visage reste interdite (loi du 11 octobre 2010)."
          },
          {
            "label": "Réaction immédiate",
            "question": "Que faire sur le moment ?",
            "options": [
              "L'installer au fond de la salle sans contrôle, et la surveiller de plus près que les autres pendant toute la durée de l'épreuve",
              "Proposer un contrôle visuel discret, sans contact ; si le refus persiste, le chef de centre refuse l'accès à la salle",
              "La laisser composer sans contrôle pour éviter tout incident, puisque la loi de 2004 ne lui interdit pas de porter son voile",
              "Lui retirer soi-même le voile quelques secondes pour vérifier l'absence d'oreillette, puis la laisser s'installer"
            ],
            "correctIndex": 1,
            "hint": "Le contrôle peut être fait avec tact, mais il ne peut pas être évité.",
            "explanation": "Le contrôle se fait avec discrétion (une surveillante peut s'en charger) et sans aucun contact. Si la candidate le refuse, le surveillant ne décide pas seul : il prévient le chef de centre, qui refuse l'entrée en salle. Laisser composer sans contrôle romprait l'égalité entre candidats ; tout geste physique est exclu."
          },
          {
            "label": "Action à long terme",
            "question": "Quelle action mener ensuite pour régler durablement le problème ?",
            "options": [
              "Proposer de supprimer les contrôles pour les candidates voilées lors des prochaines sessions",
              "Rédiger un rapport avec le chef de centre et rappeler les consignes aux surveillants avant chaque session",
              "Inscrire la candidate sur une liste d'interdiction, transmise aux autres centres, pour toutes les sessions futures de l'examen",
              "Ne rien écrire, puisque la candidate n'a finalement pas composé et qu'aucune fraude n'a donc pu être commise"
            ],
            "correctIndex": 1,
            "hint": "Un incident d'examen laisse une trace écrite, et les consignes se préparent avant l'épreuve.",
            "explanation": "En cas de refus du contrôle, un rapport est établi : il permet aux services des examens de statuer et protège les surveillants. Bien connaître les consignes avant la session évite les hésitations et les traitements différents d'une salle à l'autre. Un surveillant ne peut pas décider d'une interdiction future ; supprimer les contrôles pour certaines candidates créerait une discrimination."
          }
        ],
        "hint1": "Deux questions : une candidate libre est-elle visée par le texte sur les signes religieux des élèves ? Le contrôle anti-fraude dépend-il de cette réponse ?",
        "hint2": "Proposer la forme de contrôle la moins intrusive, sans aucun contact. Si le refus persiste, à qui revient la décision ?",
        "answer": "Règle de droit : la loi de 2004 ne vise pas les candidats libres, mais un contrôle visuel anti-fraude (oreilles, poignets) reste possible. Réaction immédiate : proposer un contrôle visuel discret, sans contact ; si le refus persiste, le chef de centre refuse l'accès à la salle. Action à long terme : rédiger un rapport avec le chef de centre et rappeler les consignes aux surveillants avant chaque session.",
        "solution": "1. Règle de droit : Le Vademecum de mars 2024 (fiche 6) rappelle que l'article L. 141-5-1 ne concerne que les élèves des établissements publics : ni les candidats libres, ni ceux du Cned, ni les élèves du privé sous contrat. Pour tous, des contrôles anti-fraude sont possibles : la circulaire du 3 mai 2011 prévoit un contrôle visuel des oreilles, de la nuque et des poignets, sans contact. Une fouille n'est jamais du ressort des surveillants. La dissimulation du visage reste interdite (loi du 11 octobre 2010).\n2. Réaction immédiate : Le contrôle se fait avec discrétion (une surveillante peut s'en charger) et sans aucun contact. Si la candidate le refuse, le surveillant ne décide pas seul : il prévient le chef de centre, qui refuse l'entrée en salle. Laisser composer sans contrôle romprait l'égalité entre candidats ; tout geste physique est exclu.\n3. Action à long terme : En cas de refus du contrôle, un rapport est établi : il permet aux services des examens de statuer et protège les surveillants. Bien connaître les consignes avant la session évite les hésitations et les traitements différents d'une salle à l'autre. Un surveillant ne peut pas décider d'une interdiction future ; supprimer les contrôles pour certaines candidates créerait une discrimination."
      },
      {
        "id": "capes-oral2-cas-10",
        "chapterId": "capes-oral2-cas",
        "tier": 2,
        "title": "Une prière collective dans la cour",
        "statement": "Pendant la récréation, que vous surveillez, un élève de 3e prie dans un coin de la cour et insiste auprès de deux camarades pour qu'ils le rejoignent ; l'un d'eux semble mal à l'aise. Identifiez la règle de droit, la réaction immédiate et l'action à long terme.",
        "type": "case3",
        "steps": [
          {
            "label": "Règle de droit",
            "question": "Quelle règle de droit s'applique ?",
            "options": [
              "Toute pratique religieuse constitue un délit dans un établissement public, quels que soient le lieu et le moment",
              "La prière n'est interdite que pendant les cours ; à la récréation, les élèves peuvent organiser librement des prières collectives",
              "L'article L. 141-5-2 interdit les pressions sur les croyances des élèves ; aucun lieu de prière n'est prévu hors internat",
              "La liberté de culte permet à tout élève de prier où il le souhaite dans l'établissement, et d'inviter ses camarades à le rejoindre"
            ],
            "correctIndex": 2,
            "hint": "Une loi de 2019 a inscrit la protection de la liberté de conscience des élèves dans le Code de l'éducation.",
            "explanation": "L'article L. 141-5-2 (loi du 26 juillet 2019) dispose que l'État protège la liberté de conscience des élèves : les pressions et tentatives d'endoctrinement sont interdites dans les écoles et établissements publics, à leurs abords et pendant toute activité liée à l'enseignement. Le Vademecum de mars 2024 (fiche 14) précise qu'aucun local n'est affecté à la prière, sauf à l'internat, où elle reste possible dans la chambre sans caractère ostentatoire, et dans le cadre d'une aumônerie autorisée."
          },
          {
            "label": "Réaction immédiate",
            "question": "Que faire sur le moment ?",
            "options": [
              "Interpeller l'élève à haute voix devant toute la cour, afin que la scène serve d'exemple aux autres élèves présents",
              "Se joindre à l'échange et débattre avec l'élève de sa croyance, pour lui démontrer par des arguments rationnels qu'il se trompe",
              "Faire cesser la scène sans humilier, rappeler que nul ne doit être poussé à pratiquer, rassurer l'élève, prévenir le CPE",
              "Laisser faire, car intervenir porterait atteinte à la liberté de conscience de l'élève qui prie pendant son temps libre"
            ],
            "correctIndex": 2,
            "hint": "Deux libertés de conscience sont en jeu ici : celle de l'élève qui prie et celle de ceux qu'il sollicite.",
            "explanation": "Le surveillant intervient avec calme : la pratique religieuse ne s'exerce pas dans le temps et le lieu scolaires, et surtout les élèves sollicités doivent être protégés de toute pression. Il rassure l'élève mal à l'aise et prévient le CPE. Il ne se prononce pas sur la croyance elle-même et ne cherche pas à humilier."
          },
          {
            "label": "Action à long terme",
            "question": "Quelle action mener ensuite pour régler durablement le problème ?",
            "options": [
              "Informer le chef d'établissement, qui reçoit l'élève et sa famille et engage une réponse disciplinaire si cela se répète",
              "Proposer qu'une salle soit réservée à la prière, afin d'éviter que la scène ne se reproduise devant tous dans la cour",
              "Changer l'élève de classe, afin de l'éloigner des deux camarades qu'il a sollicités et de mettre fin aux pressions",
              "Organiser une prière interconfessionnelle dans l'établissement, pour montrer que toutes les religions y sont également respectées"
            ],
            "correctIndex": 0,
            "hint": "La réponse durable passe par le chef d'établissement, et elle ne peut pas consister à aménager un lieu de culte.",
            "explanation": "Le chef d'établissement reçoit l'élève et sa famille, rappelle la règle et le respect dû aux convictions de chacun, et signale l'incident dans l'application Faits établissement. Des pressions répétées appellent une réponse disciplinaire. Ouvrir une salle de prière ou organiser une célébration contreviendrait à la neutralité de l'établissement."
          }
        ],
        "hint1": "La prière n'est pas seule en cause : quel texte protège les élèves contre les pressions exercées sur leurs convictions ?",
        "hint2": "Penser d'abord à l'élève mal à l'aise : comment faire cesser la sollicitation sans humilier personne ni discuter de la croyance ?",
        "answer": "Règle de droit : l'article L. 141-5-2 interdit les pressions sur les croyances des élèves ; aucun lieu de prière n'est prévu hors internat. Réaction immédiate : faire cesser la scène sans humilier, rappeler que nul ne doit être poussé à pratiquer, rassurer l'élève, prévenir le CPE. Action à long terme : informer le chef d'établissement, qui reçoit l'élève et sa famille et engage une réponse disciplinaire si cela se répète.",
        "solution": "1. Règle de droit : L'article L. 141-5-2 (loi du 26 juillet 2019) dispose que l'État protège la liberté de conscience des élèves : les pressions et tentatives d'endoctrinement sont interdites dans les écoles et établissements publics, à leurs abords et pendant toute activité liée à l'enseignement. Le Vademecum de mars 2024 (fiche 14) précise qu'aucun local n'est affecté à la prière, sauf à l'internat, où elle reste possible dans la chambre sans caractère ostentatoire, et dans le cadre d'une aumônerie autorisée.\n2. Réaction immédiate : Le surveillant intervient avec calme : la pratique religieuse ne s'exerce pas dans le temps et le lieu scolaires, et surtout les élèves sollicités doivent être protégés de toute pression. Il rassure l'élève mal à l'aise et prévient le CPE. Il ne se prononce pas sur la croyance elle-même et ne cherche pas à humilier.\n3. Action à long terme : Le chef d'établissement reçoit l'élève et sa famille, rappelle la règle et le respect dû aux convictions de chacun, et signale l'incident dans l'application Faits établissement. Des pressions répétées appellent une réponse disciplinaire. Ouvrir une salle de prière ou organiser une célébration contreviendrait à la neutralité de l'établissement."
      },
      {
        "id": "capes-oral2-cas-11",
        "chapterId": "capes-oral2-cas",
        "tier": 2,
        "title": "Une assistante d'éducation portant un signe religieux",
        "statement": "Vous constatez qu'une assistante d'éducation récemment recrutée porte, pendant ses surveillances, un pendentif religieux bien visible. Des élèves vous en font la remarque. Identifiez la règle de droit, la réaction immédiate et l'action à long terme.",
        "type": "case3",
        "steps": [
          {
            "label": "Règle de droit",
            "question": "Quelle règle de droit s'applique ?",
            "options": [
              "Tout agent public, AED compris, est tenu à la neutralité en service (articles L. 121-1 et L. 121-2 du CGFP)",
              "La neutralité ne s'impose qu'aux enseignants titulaires : les contractuels et les AED peuvent porter un signe religieux en service",
              "C'est la loi du 15 mars 2004 qui interdit le signe à l'AED comme aux élèves, et non le statut de la fonction publique",
              "Seuls les signes ostensibles sont interdits aux agents publics : un simple pendentif reste permis"
            ],
            "correctIndex": 0,
            "hint": "C'est la qualité d'agent public qui compte, pas le statut de titulaire.",
            "explanation": "L'obligation de neutralité s'impose à tout agent public, titulaire ou contractuel (articles L. 121-1 et L. 121-2 du Code général de la fonction publique) ; l'avis Marteaux du Conseil d'État (3 mai 2000) précise que tout signe religieux, même discret, est interdit en service à un agent de l'enseignement public. Les AED et AESH y sont soumis, et cette obligation leur est rappelée au recrutement. La loi de 2004 concerne les élèves, non les personnels."
          },
          {
            "label": "Réaction immédiate",
            "question": "Que faire sur le moment ?",
            "options": [
              "Répondre sobrement que la règle vaut pour tous les personnels, sans interpeller l'assistante, et informer la direction",
              "Retirer soi-même le pendentif de l'assistante à la fin de la récréation, discrètement, pour lui éviter d'autres remarques",
              "Ne rien dire et ne rien faire, car ce n'est pas le rôle d'un enseignant de s'occuper de la tenue de ses collègues",
              "Demander publiquement à l'assistante, devant les élèves, de retirer immédiatement son pendentif pour faire respecter la règle"
            ],
            "correctIndex": 0,
            "hint": "Le manquement d'un collègue se traite par la voie hiérarchique, pas en public.",
            "explanation": "Le professeur ne règle pas le problème lui-même en public, ce qui humilierait l'assistante et ferait des élèves les témoins d'un conflit entre adultes. Il répond sobrement aux élèves et informe le chef d'établissement, qui est compétent pour traiter les manquements des personnels. Le silence laisserait perdurer une situation contraire à la neutralité."
          },
          {
            "label": "Action à long terme",
            "question": "Quelle action mener ensuite pour régler durablement le problème ?",
            "options": [
              "Laisser le chef d'établissement rappeler la neutralité en entretien et, si besoin, saisir l'autorité académique",
              "Demander que les AED soient dispensés de toute surveillance au contact des élèves, afin d'éviter ce type de situation",
              "Signaler l'assistante directement à la presse locale, pour que la situation soit connue et réglée plus rapidement",
              "Lancer une pétition parmi les enseignants pour exiger le départ de l'assistante"
            ],
            "correctIndex": 0,
            "hint": "La réponse est graduée : entretien, rappel, puis seulement si besoin l'autorité académique.",
            "explanation": "Le Vademecum de mars 2024 (fiche 20) prévoit un entretien avec le chef d'établissement pour rappeler l'obligation de neutralité ; si le manquement persiste, l'autorité académique est saisie et peut engager une procédure disciplinaire. La formation à la laïcité de tous les personnels (arrêté du 16 juillet 2021 sur le continuum de formation) prévient ces situations. Une pétition ou une médiatisation sont des réponses hors de tout cadre."
          }
        ],
        "hint1": "Une assistante d'éducation est-elle usagère du service public ou agente publique ? La règle applicable découle de cette qualification.",
        "hint2": "Ce point ne se règle pas devant les élèves : que leur répondre sobrement, et qui est compétent pour en parler à l'assistante ?",
        "answer": "Règle de droit : tout agent public, AED compris, est tenu à la neutralité en service (articles L. 121-1 et L. 121-2 du CGFP). Réaction immédiate : répondre sobrement que la règle vaut pour tous les personnels, sans interpeller l'assistante, et informer la direction. Action à long terme : laisser le chef d'établissement rappeler la neutralité en entretien et, si besoin, saisir l'autorité académique.",
        "solution": "1. Règle de droit : L'obligation de neutralité s'impose à tout agent public, titulaire ou contractuel (articles L. 121-1 et L. 121-2 du Code général de la fonction publique) ; l'avis Marteaux du Conseil d'État (3 mai 2000) précise que tout signe religieux, même discret, est interdit en service à un agent de l'enseignement public. Les AED et AESH y sont soumis, et cette obligation leur est rappelée au recrutement. La loi de 2004 concerne les élèves, non les personnels.\n2. Réaction immédiate : Le professeur ne règle pas le problème lui-même en public, ce qui humilierait l'assistante et ferait des élèves les témoins d'un conflit entre adultes. Il répond sobrement aux élèves et informe le chef d'établissement, qui est compétent pour traiter les manquements des personnels. Le silence laisserait perdurer une situation contraire à la neutralité.\n3. Action à long terme : Le Vademecum de mars 2024 (fiche 20) prévoit un entretien avec le chef d'établissement pour rappeler l'obligation de neutralité ; si le manquement persiste, l'autorité académique est saisie et peut engager une procédure disciplinaire. La formation à la laïcité de tous les personnels (arrêté du 16 juillet 2021 sur le continuum de formation) prévient ces situations. Une pétition ou une médiatisation sont des réponses hors de tout cadre."
      },
      {
        "id": "capes-oral2-cas-12",
        "chapterId": "capes-oral2-cas",
        "tier": 2,
        "title": "Une crèche de Noël pour décorer le hall",
        "statement": "Pour la fête de fin d'année, des élèves de 6e de votre classe proposent d'installer dans le hall du collège une crèche de Noël à côté du sapin qu'ils ont décoré. Identifiez la règle de droit, la réaction immédiate et l'action à long terme.",
        "type": "case3",
        "steps": [
          {
            "label": "Règle de droit",
            "question": "Quelle règle de droit s'applique ?",
            "options": [
              "La crèche est autorisée puisqu'elle fait partie des traditions françaises et que l'initiative vient des élèves eux-mêmes",
              "La laïcité interdit toute célébration de Noël dans un établissement public",
              "L'article 28 de la loi de 1905 proscrit les emblèmes religieux dans un bâtiment public ; un sapin reste possible",
              "Chaque professeur décide librement de la décoration des espaces communs de l'établissement pendant la période des fêtes"
            ],
            "correctIndex": 2,
            "hint": "Comparer ce que signifient les deux objets : lequel reste un emblème religieux, et lequel accompagne une fête largement laïcisée ?",
            "explanation": "Les dispositions de l'article 28 de la loi du 9 décembre 1905 s'opposent à l'installation dans un bâtiment public d'un signe ou d'un emblème manifestant la reconnaissance d'un culte ou une préférence religieuse (CE, 9 novembre 2016, n° 395122 et 395223), sauf circonstances particulières. Le Vademecum de mars 2024 (fiche 17) précise que la fête de Noël peut être célébrée sans emblème religieux et que le sapin peut être installé s'il n'a aucun caractère cultuel."
          },
          {
            "label": "Réaction immédiate",
            "question": "Que faire sur le moment ?",
            "options": [
              "Accepter la crèche, puisque l'idée vient des élèves et non de l'établissement, qui reste ainsi neutre de son côté",
              "Réprimander les élèves pour avoir proposé un symbole religieux, et leur rappeler les règles de laïcité devant la classe",
              "Retirer aussi le sapin et annuler la fête de fin d'année, afin d'éviter toute polémique au sein de l'établissement",
              "Saluer l'idée, expliquer que la crèche est un symbole religieux qui n'a pas sa place dans le hall, garder le sapin"
            ],
            "correctIndex": 3,
            "hint": "L'initiative est bienveillante : on peut la recadrer sans la condamner.",
            "explanation": "La proposition des élèves est de bonne foi : le professeur l'accueille et explique la règle avec des mots simples. La neutralité du bâtiment ne dépend pas de l'auteur de l'initiative. Le sapin et les décorations festives restent possibles, si bien que la fête peut avoir lieu ; réprimander les élèves serait disproportionné."
          },
          {
            "label": "Action à long terme",
            "question": "Quelle action mener ensuite pour régler durablement le problème ?",
            "options": [
              "Faire voter les familles pour ou contre la crèche lors de la prochaine fête",
              "Installer la crèche dans sa propre salle de classe plutôt que dans le hall, où elle ne sera vue que par sa classe",
              "Informer le chef d'établissement et proposer un travail en classe sur l'histoire des symboles et la laïcité",
              "Ne plus jamais organiser de fête dans l'établissement, pour ne plus avoir à trancher ce type de question à l'avenir"
            ],
            "correctIndex": 2,
            "hint": "C'est le chef d'établissement qui veille à ces principes ; l'incident est aussi une occasion d'apprendre.",
            "explanation": "Le Vademecum confie au chef d'établissement le soin de veiller au respect de ces principes lors des célébrations. L'épisode peut nourrir un travail pédagogique : l'histoire du sapin, comment les symboles changent de sens, pourquoi la neutralité protège la liberté de chacun. Un vote ne peut pas déroger à la loi, et une salle de classe est aussi un bâtiment public."
          }
        ],
        "hint1": "Que prévoit la loi de 1905 pour les emblèmes religieux dans un bâtiment public ? Un sapin et une crèche ont-ils la même nature ?",
        "hint2": "L'initiative est de bonne foi : commencer par l'accueillir, puis expliquer simplement ce qui reste possible pour la fête.",
        "answer": "Règle de droit : l'article 28 de la loi de 1905 proscrit les emblèmes religieux dans un bâtiment public ; un sapin reste possible. Réaction immédiate : saluer l'idée, expliquer que la crèche est un symbole religieux qui n'a pas sa place dans le hall, garder le sapin. Action à long terme : informer le chef d'établissement et proposer un travail en classe sur l'histoire des symboles et la laïcité.",
        "solution": "1. Règle de droit : Les dispositions de l'article 28 de la loi du 9 décembre 1905 s'opposent à l'installation dans un bâtiment public d'un signe ou d'un emblème manifestant la reconnaissance d'un culte ou une préférence religieuse (CE, 9 novembre 2016, n° 395122 et 395223), sauf circonstances particulières. Le Vademecum de mars 2024 (fiche 17) précise que la fête de Noël peut être célébrée sans emblème religieux et que le sapin peut être installé s'il n'a aucun caractère cultuel.\n2. Réaction immédiate : La proposition des élèves est de bonne foi : le professeur l'accueille et explique la règle avec des mots simples. La neutralité du bâtiment ne dépend pas de l'auteur de l'initiative. Le sapin et les décorations festives restent possibles, si bien que la fête peut avoir lieu ; réprimander les élèves serait disproportionné.\n3. Action à long terme : Le Vademecum confie au chef d'établissement le soin de veiller au respect de ces principes lors des célébrations. L'épisode peut nourrir un travail pédagogique : l'histoire du sapin, comment les symboles changent de sens, pourquoi la neutralité protège la liberté de chacun. Un vote ne peut pas déroger à la loi, et une salle de classe est aussi un bâtiment public."
      },
      {
        "id": "capes-oral2-cas-26",
        "chapterId": "capes-oral2-cas",
        "tier": 2,
        "title": "Des données climatiques contestées en classe",
        "statement": "En seconde, lors d'une séance de statistiques, vous faites étudier les températures moyennes annuelles relevées par une station météorologique depuis soixante ans. Un élève lance : « Le réchauffement, c'est une opinion politique, vous n'avez pas à nous l'imposer. » Une autre élève propose de faire signer en fin d'heure une pétition pour le climat qu'elle a imprimée. Identifiez la règle de droit, la réaction immédiate et l'action à long terme.",
        "type": "case3",
        "steps": [
          {
            "label": "Règle de droit",
            "question": "Quelle règle de droit s'applique ?",
            "options": [
              "La neutralité interdit au professeur de présenter des données sur le climat, sujet de débat public, et l'oblige à choisir une autre série statistique",
              "L'éducation à l'environnement est une mission de l'École (article L. 312-19 du Code de l'éducation) ; la neutralité vise les opinions, non les savoirs",
              "La liberté d'expression des élèves (article L. 511-2) permet de faire circuler une pétition en classe dès lors qu'elle porte sur l'intérêt général",
              "Au nom de l'urgence climatique, le professeur peut inviter ses élèves à rejoindre une association, ce qui ne relève pas de son obligation de neutralité"
            ],
            "correctIndex": 1,
            "hint": "Deux questions distinctes : un constat tiré de mesures est-il une opinion ? Et où la liberté d'expression des élèves s'exerce-t-elle ?",
            "explanation": "L'article L. 312-19 du Code de l'éducation fait de l'éducation à l'environnement et au développement durable une mission de l'École, dès l'école primaire, intégrée aux programmes. L'obligation de neutralité de l'agent public (Code général de la fonction publique, article L. 121-2) lui interdit de manifester ses opinions politiques ou religieuses dans le service ; elle ne lui interdit pas d'enseigner ce que les mesures établissent. La hausse des températures moyennes observée dans une série de données est un constat ; les choix collectifs pour y répondre relèvent du débat citoyen, sur lequel le professeur ne prend pas parti et dans lequel il ne recrute pas ses élèves. L'article L. 511-2 reconnaît aux collégiens et lycéens la liberté d'expression, dans le respect du pluralisme et de la neutralité, sans porter atteinte aux activités d'enseignement : une pétition ne circule pas pendant le cours."
          },
          {
            "label": "Réaction immédiate",
            "question": "Que faire sur le moment ?",
            "options": [
              "Répondre à l'élève que son avis est irrecevable et lui retirer la parole, pour que la séance ne soit pas détournée par une polémique sur le climat",
              "Laisser circuler la pétition en fin d'heure, puisque la cause est juste et que l'élève a pris seule cette initiative, sans aucune pression de l'adulte",
              "Distinguer constat et opinion : revenir aux données, à leur source et à la méthode, laisser la classe conclure, et refuser la pétition en cours",
              "Faire voter la classe à main levée sur l'existence du réchauffement, pour montrer à l'élève que la majorité de ses camarades ne pense pas comme lui"
            ],
            "correctIndex": 2,
            "hint": "La meilleure réponse à « c'est une opinion » est mathématique : que peut-on montrer avec la série étudiée ?",
            "explanation": "La remarque de l'élève porte sur le statut d'un savoir : c'est une vraie question, qui mérite une réponse et non une rebuffade. La réponse est mathématique : d'où viennent les données, comment elles sont mesurées, ce que montrent les moyennes par décennie ou la comparaison de deux périodes, ce qu'une série locale permet ou non de conclure. Les élèves établissent eux-mêmes la tendance. On distingue ce que disent les mesures de ce qu'il faudrait faire, qui relève du débat. Un fait scientifique ne se met pas aux voix. Le professeur remercie l'élève engagée mais explique que la pétition ne circule pas en classe, et lui indique où son engagement peut s'exprimer."
          },
          {
            "label": "Action à long terme",
            "question": "Quelle action mener ensuite ?",
            "options": [
              "Construire avec des collègues de sciences un travail sur la lecture critique de données, et orienter l'élève engagée vers les éco-délégués",
              "Signaler l'élève sceptique au chef d'établissement pour atteinte aux valeurs de la République, afin qu'une procédure disciplinaire soit engagée",
              "Renoncer aux données environnementales dans les séances suivantes, afin de ne plus exposer la classe à des sujets qui suscitent des réactions vives",
              "Organiser vous-même une collecte de signatures dans l'établissement, pour que l'engagement de l'élève ne soit pas découragé par la règle rappelée"
            ],
            "correctIndex": 0,
            "hint": "Le sujet dépasse votre heure de cours : avec qui le travailler, et quelles instances permettent aux élèves de s'engager dans l'établissement ?",
            "explanation": "L'éducation au développement durable se construit à plusieurs disciplines : un travail commun avec les collègues de sciences sur la lecture critique de graphiques, de sources et d'ordres de grandeur répond à l'élève sceptique mieux qu'une leçon de morale. L'élève engagée peut agir par les canaux prévus : éco-délégués, conseil de la vie lycéenne, maison des lycéens, projets de l'établissement. Douter n'est pas une faute : il n'y a rien à sanctionner. Éviter le sujet reviendrait à renoncer à une partie du programme, et organiser soi-même une collecte de signatures serait un manquement à la neutralité."
          }
        ],
        "hint1": "La neutralité porte-t-elle sur les opinions ou sur les savoirs ? Quel article du Code de l'éducation fait de l'environnement une mission de l'École, et lequel encadre l'expression des élèves ?",
        "hint2": "Répondre par les mathématiques (données, source, méthode), sans mépris pour l'élève ni soutien à la pétition en classe.",
        "answer": "Règle de droit : l'éducation à l'environnement est une mission de l'École (article L. 312-19 du Code de l'éducation) ; la neutralité vise les opinions, non les savoirs. Réaction immédiate : distinguer constat et opinion : revenir aux données, à leur source et à la méthode, laisser la classe conclure, et refuser la pétition en cours. Action à long terme : construire avec des collègues de sciences un travail sur la lecture critique de données, et orienter l'élève engagée vers les éco-délégués.",
        "solution": "1. Règle de droit : L'article L. 312-19 du Code de l'éducation fait de l'éducation à l'environnement et au développement durable une mission de l'École, dès l'école primaire, intégrée aux programmes. L'obligation de neutralité de l'agent public (Code général de la fonction publique, article L. 121-2) lui interdit de manifester ses opinions politiques ou religieuses dans le service ; elle ne lui interdit pas d'enseigner ce que les mesures établissent. La hausse des températures moyennes observée dans une série de données est un constat ; les choix collectifs pour y répondre relèvent du débat citoyen, sur lequel le professeur ne prend pas parti et dans lequel il ne recrute pas ses élèves. L'article L. 511-2 reconnaît aux collégiens et lycéens la liberté d'expression, dans le respect du pluralisme et de la neutralité, sans porter atteinte aux activités d'enseignement : une pétition ne circule pas pendant le cours.\n2. Réaction immédiate : La remarque de l'élève porte sur le statut d'un savoir : c'est une vraie question, qui mérite une réponse et non une rebuffade. La réponse est mathématique : d'où viennent les données, comment elles sont mesurées, ce que montrent les moyennes par décennie ou la comparaison de deux périodes, ce qu'une série locale permet ou non de conclure. Les élèves établissent eux-mêmes la tendance. On distingue ce que disent les mesures de ce qu'il faudrait faire, qui relève du débat. Un fait scientifique ne se met pas aux voix. Le professeur remercie l'élève engagée mais explique que la pétition ne circule pas en classe, et lui indique où son engagement peut s'exprimer.\n3. Action à long terme : L'éducation au développement durable se construit à plusieurs disciplines : un travail commun avec les collègues de sciences sur la lecture critique de graphiques, de sources et d'ordres de grandeur répond à l'élève sceptique mieux qu'une leçon de morale. L'élève engagée peut agir par les canaux prévus : éco-délégués, conseil de la vie lycéenne, maison des lycéens, projets de l'établissement. Douter n'est pas une faute : il n'y a rien à sanctionner. Éviter le sujet reviendrait à renoncer à une partie du programme, et organiser soi-même une collecte de signatures serait un manquement à la neutralité."
      },
      // =========================================================================
      // PALIER 3 : FAMILLES ET SORTIES
      // =========================================================================
      {
        "id": "capes-oral2-cas-13",
        "chapterId": "capes-oral2-cas",
        "tier": 3,
        "title": "Une mère voilée propose d'accompagner une sortie",
        "statement": "Vous organisez une sortie au musée avec votre classe de 6e. Une mère d'élève qui porte un foulard se propose comme accompagnatrice ; un collègue vous conseille de refuser à cause de son foulard. Identifiez la règle de droit, la réaction immédiate et l'action à long terme.",
        "type": "case3",
        "steps": [
          {
            "label": "Règle de droit",
            "question": "Quelle règle de droit s'applique ?",
            "options": [
              "Un parent accompagnateur n'est pas un agent public ; il n'est pas tenu à la neutralité, sauf exigences du service",
              "Les parents accompagnateurs deviennent des agents publics le temps de la sortie et doivent respecter la même neutralité que les enseignants",
              "La loi de 2004 s'applique à toute personne présente lors d'une activité scolaire, et donc aussi aux parents qui accompagnent",
              "Le professeur organisateur choisit librement les accompagnateurs, et peut donc écarter un parent en raison de sa tenue"
            ],
            "correctIndex": 0,
            "hint": "Un parent qui accompagne une sortie reste un usager du service public.",
            "explanation": "Selon l'étude du Conseil d'État du 19 décembre 2013, les parents accompagnateurs ont la qualité d'usagers du service public, et non d'agents : ils ne sont pas soumis à l'exigence de neutralité religieuse des agents publics. Des restrictions ne peuvent être justifiées que par des exigences liées au bon fonctionnement du service ou à l'ordre public, par exemple un comportement prosélyte (voir aussi CAA Lyon, 23 juillet 2019, n° 17LY04351). La loi de 2004 ne concerne que les élèves. Le choix des accompagnateurs revient au chef d'établissement (ou au directeur d'école), et non au professeur seul ni à un collègue (Vademecum de mars 2024, fiche 23)."
          },
          {
            "label": "Réaction immédiate",
            "question": "Que faire sur le moment ?",
            "options": [
              "Annuler la sortie au musée, afin de ne pas avoir à trancher entre l'avis du collègue et la demande de la mère",
              "Refuser sa candidature sans donner d'explication, pour éviter d'ouvrir un débat avec le collègue ou avec la mère",
              "Accepter la mère comme tout parent : le foulard ne peut pas, à lui seul, justifier un refus",
              "Accepter sa participation à condition qu'elle retire son foulard pendant la sortie"
            ],
            "correctIndex": 2,
            "hint": "Un refus fondé sur le seul foulard serait discriminatoire.",
            "explanation": "En l'absence de comportement prosélyte ou de trouble, rien ne permet d'écarter cette mère ni d'exiger qu'elle retire son foulard : ce serait une discrimination. Le professeur peut l'expliquer à son collègue en s'appuyant sur le cadre juridique. Annuler la sortie priverait les élèves d'une activité pédagogique."
          },
          {
            "label": "Action à long terme",
            "question": "Quelle action mener ensuite pour régler durablement le problème ?",
            "options": [
              "Ne plus solliciter de parents et réserver les sorties aux classes pour lesquelles assez de professeurs sont disponibles",
              "Fixer avec la direction des consignes écrites pour tous les accompagnateurs (sécurité, rôle, pas de prosélytisme)",
              "Faire signer aux mères accompagnatrices un engagement écrit à ne porter aucun signe religieux pendant les sorties",
              "Établir une liste des parents autorisés à accompagner les sorties, en fonction de leur tenue et de leur disponibilité"
            ],
            "correctIndex": 1,
            "hint": "Des règles connues à l'avance et valables pour tous préviennent les conflits.",
            "explanation": "Des consignes communes, connues avant la sortie, encadrent le rôle de chaque accompagnateur et permettent de réagir à un éventuel comportement prosélyte, quel que soit le parent. Toute liste ou tout engagement visant la tenue de certains parents serait discriminatoire ; renoncer aux parents réduirait les sorties possibles pour les élèves."
          }
        ],
        "hint1": "Qualifier la personne : un parent accompagnateur est-il un agent soumis à la neutralité ? Quelles circonstances pourraient justifier une restriction ?",
        "hint2": "Se demander sur quoi porterait un refus : un comportement constaté, ou le seul foulard ? Répondre au collègue à partir de cette distinction.",
        "answer": "Règle de droit : un parent accompagnateur n'est pas un agent public ; il n'est pas tenu à la neutralité, sauf exigences du service. Réaction immédiate : accepter la mère comme tout parent : le foulard ne peut pas, à lui seul, justifier un refus. Action à long terme : fixer avec la direction des consignes écrites pour tous les accompagnateurs (sécurité, rôle, pas de prosélytisme).",
        "solution": "1. Règle de droit : Selon l'étude du Conseil d'État du 19 décembre 2013, les parents accompagnateurs ont la qualité d'usagers du service public, et non d'agents : ils ne sont pas soumis à l'exigence de neutralité religieuse des agents publics. Des restrictions ne peuvent être justifiées que par des exigences liées au bon fonctionnement du service ou à l'ordre public, par exemple un comportement prosélyte (voir aussi CAA Lyon, 23 juillet 2019, n° 17LY04351). La loi de 2004 ne concerne que les élèves. Le choix des accompagnateurs revient au chef d'établissement (ou au directeur d'école), et non au professeur seul ni à un collègue (Vademecum de mars 2024, fiche 23).\n2. Réaction immédiate : En l'absence de comportement prosélyte ou de trouble, rien ne permet d'écarter cette mère ni d'exiger qu'elle retire son foulard : ce serait une discrimination. Le professeur peut l'expliquer à son collègue en s'appuyant sur le cadre juridique. Annuler la sortie priverait les élèves d'une activité pédagogique.\n3. Action à long terme : Des consignes communes, connues avant la sortie, encadrent le rôle de chaque accompagnateur et permettent de réagir à un éventuel comportement prosélyte, quel que soit le parent. Toute liste ou tout engagement visant la tenue de certains parents serait discriminatoire ; renoncer aux parents réduirait les sorties possibles pour les élèves."
      },
      {
        "id": "capes-oral2-cas-14",
        "chapterId": "capes-oral2-cas",
        "tier": 3,
        "title": "Un père refuse de parler à une professeure",
        "statement": "Lors de la rencontre parents-professeurs, le père d'un élève refuse de s'entretenir avec vous, professeure principale, et exige un interlocuteur masculin. Identifiez la règle de droit, la réaction immédiate et l'action à long terme.",
        "type": "case3",
        "steps": [
          {
            "label": "Règle de droit",
            "question": "Quelle règle de droit s'applique ?",
            "options": [
              "L'égalité femmes-hommes (Constitution) s'impose aux usagers : un parent ne choisit pas son interlocuteur selon son sexe",
              "Aucun texte ne s'applique aux parents dans ce cas, puisqu'ils ne sont pas des agents du service public de l'éducation",
              "La liberté de conscience du parent oblige l'établissement à lui proposer un interlocuteur du sexe qu'il souhaite rencontrer",
              "Le parent peut refuser l'entretien avec la professeure, mais il doit alors attendre le conseil de classe pour être informé"
            ],
            "correctIndex": 0,
            "hint": "Le préambule de la Constitution de 1946 garantit à la femme des droits égaux à ceux de l'homme dans tous les domaines.",
            "explanation": "Le préambule de la Constitution de 1946 garantit à la femme, dans tous les domaines, des droits égaux à ceux de l'homme ; l'article 1er de la Constitution de 1958 pose l'égalité devant la loi. Le Vademecum de mars 2024 (fiche 8) range parmi les atteintes à la laïcité le refus d'un enseignant en raison de son sexe. Les usagers ne choisissent pas les agents du service public selon leur sexe."
          },
          {
            "label": "Réaction immédiate",
            "question": "Que faire sur le moment ?",
            "options": [
              "Accepter de lui transmettre les informations uniquement par écrit, pour éviter le conflit tout en informant la famille",
              "Répondre vivement au père et lui reprocher publiquement son attitude devant les autres parents présents dans la salle",
              "Demander à un collègue masculin de recevoir le père à sa place, afin que l'entretien puisse avoir lieu dans l'intérêt de l'élève",
              "Rester calme, maintenir l'entretien avec la professeure et, si le refus persiste, y mettre fin et informer la direction"
            ],
            "correctIndex": 3,
            "hint": "Céder sur la règle, même pour arranger les choses, c'est valider la discrimination.",
            "explanation": "Se faire remplacer par un collègue masculin reviendrait à accepter la discrimination. Le professeur reste courtois, rappelle le fonctionnement normal et, si le refus persiste, met fin à l'échange plutôt que d'entrer en conflit, puis informe le chef d'établissement. Le calme évite que l'incident ne tourne à l'affrontement public."
          },
          {
            "label": "Action à long terme",
            "question": "Quelle action mener ensuite pour régler durablement le problème ?",
            "options": [
              "Demander au conseil de classe de prendre en compte l'attitude du père dans l'appréciation portée sur le bulletin de l'élève",
              "Refuser toute communication avec cette famille jusqu'à la fin de l'année scolaire",
              "Laisser le chef d'établissement recevoir le père et rappeler les règles, sans que l'élève en subisse les conséquences",
              "Changer de professeur principal pour cette classe, afin d'éviter tout nouvel incident avec ce père lors des prochaines rencontres"
            ],
            "correctIndex": 2,
            "hint": "L'élève n'est pas responsable de son parent, et l'établissement répond d'une seule voix.",
            "explanation": "Le chef d'établissement reçoit le parent, rappelle l'égalité entre les femmes et les hommes et le fonctionnement du service public, et l'incident peut être signalé dans l'application Faits établissement. La scolarité de l'élève ne doit pas en pâtir : son appréciation ne dépend que de son travail. Changer de professeur principal ou rompre la communication reviendrait à céder ou à pénaliser l'élève."
          }
        ],
        "hint1": "Un usager peut-il choisir un agent du service public selon son sexe ? Chercher le principe constitutionnel en cause.",
        "hint2": "Ne pas se faire remplacer : comment proposer calmement le fonctionnement normal, et que faire si le refus persiste ?",
        "answer": "Règle de droit : l'égalité femmes-hommes (Constitution) s'impose aux usagers : un parent ne choisit pas son interlocuteur selon son sexe. Réaction immédiate : rester calme, maintenir l'entretien avec la professeure et, si le refus persiste, y mettre fin et informer la direction. Action à long terme : laisser le chef d'établissement recevoir le père et rappeler les règles, sans que l'élève en subisse les conséquences.",
        "solution": "1. Règle de droit : Le préambule de la Constitution de 1946 garantit à la femme, dans tous les domaines, des droits égaux à ceux de l'homme ; l'article 1er de la Constitution de 1958 pose l'égalité devant la loi. Le Vademecum de mars 2024 (fiche 8) range parmi les atteintes à la laïcité le refus d'un enseignant en raison de son sexe. Les usagers ne choisissent pas les agents du service public selon leur sexe.\n2. Réaction immédiate : Se faire remplacer par un collègue masculin reviendrait à accepter la discrimination. Le professeur reste courtois, rappelle le fonctionnement normal et, si le refus persiste, met fin à l'échange plutôt que d'entrer en conflit, puis informe le chef d'établissement. Le calme évite que l'incident ne tourne à l'affrontement public.\n3. Action à long terme : Le chef d'établissement reçoit le parent, rappelle l'égalité entre les femmes et les hommes et le fonctionnement du service public, et l'incident peut être signalé dans l'application Faits établissement. La scolarité de l'élève ne doit pas en pâtir : son appréciation ne dépend que de son travail. Changer de professeur principal ou rompre la communication reviendrait à céder ou à pénaliser l'élève."
      },
      {
        "id": "capes-oral2-cas-15",
        "chapterId": "capes-oral2-cas",
        "tier": 3,
        "title": "Des absences chaque vendredi après-midi",
        "statement": "Un élève de 4e est absent tous les vendredis après-midi depuis la rentrée ; ses parents justifient ces absences par un motif religieux et vous demandent de lui transmettre les cours. Identifiez la règle de droit, la réaction immédiate et l'action à long terme.",
        "type": "case3",
        "steps": [
          {
            "label": "Règle de droit",
            "question": "Quelle règle de droit s'applique ?",
            "options": [
              "L'assiduité admet des absences pour les grandes fêtes, pas des absences systématiques (CE, Assemblée, 14 avril 1995)",
              "Les absences sont libres au collège tant que l'élève rattrape les cours manqués et que ses résultats restent satisfaisants",
              "Aucune absence pour motif religieux ne peut jamais être autorisée, même ponctuellement à l'occasion d'une grande fête",
              "La liberté de culte permet aux familles de retirer leur enfant de certains cours chaque semaine"
            ],
            "correctIndex": 0,
            "hint": "Le Conseil d'État a distingué l'absence ponctuelle pour une grande fête de l'absence systématique.",
            "explanation": "L'obligation d'assiduité de l'article L. 511-1 n'empêche pas des autorisations d'absence pour les grandes fêtes religieuses qui ne coïncident pas avec un jour de congé, dont les dates sont rappelées chaque année. En revanche, les demandes d'absence systématique ou prolongée doivent être refusées lorsqu'elles sont incompatibles avec l'organisation de la scolarité (CE, Assemblée, 14 avril 1995)."
          },
          {
            "label": "Réaction immédiate",
            "question": "Que faire sur le moment ?",
            "options": [
              "Accepter l'arrangement et transmettre les cours chaque semaine",
              "Répondre directement aux parents que leur religion n'a pas sa place à l'école et que l'élève doit venir comme les autres",
              "Ne pas valider ces absences, continuer à les relever et orienter la demande vers le CPE et le chef d'établissement",
              "Ne plus faire l'appel le vendredi après-midi, pour ne pas pénaliser l'élève dont l'absence est justifiée par ses parents"
            ],
            "correctIndex": 2,
            "hint": "Le suivi des absences est un circuit de l'établissement, pas un accord privé.",
            "explanation": "Le professeur relève les absences avec exactitude et ne passe pas d'accord privé avec la famille : la vie scolaire (CPE) et le chef d'établissement traitent les absences. Transmettre chaque semaine les cours installerait l'absence. Une réponse blessante sur la religion des parents serait contraire au respect des convictions et fermerait le dialogue."
          },
          {
            "label": "Action à long terme",
            "question": "Quelle action mener ensuite pour régler durablement le problème ?",
            "options": [
              "Proposer d'inscrire l'élève au Cned pour les seuls cours du vendredi, afin de concilier sa pratique et sa scolarité",
              "Laisser le CPE recevoir les parents pour rappeler l'assiduité ; si le conflit persiste, procédure disciplinaire",
              "Signaler immédiatement la famille au procureur de la République pour absentéisme, sans autre démarche préalable",
              "Déplacer les cours du vendredi après-midi pour toute la classe, afin que l'élève ne manque plus aucun enseignement"
            ],
            "correctIndex": 1,
            "hint": "Qui reçoit la famille, et pour lui rappeler quoi ? Penser à un dialogue d'abord, puis à ce qui suit s'il n'aboutit pas.",
            "explanation": "Le Vademecum prévoit que le CPE ou le chef d'établissement reçoit les parents pour rappeler l'obligation d'assiduité et chercher une conciliation : les pratiques religieuses s'exercent dans un temps distinct de celui de l'école. Si le conflit n'est pas résolu, le chef d'établissement prend acte d'un manquement à l'obligation d'assiduité et engage une procédure disciplinaire. Adapter l'emploi du temps de toute la classe reviendrait à céder."
          }
        ],
        "hint1": "L'obligation d'assiduité admet des autorisations d'absence : pour quelles occasions ? Une absence hebdomadaire entre-t-elle dans ce cadre ?",
        "hint2": "Pas d'arrangement privé avec la famille : que faire des absences relevées, et vers qui orienter la demande ?",
        "answer": "Règle de droit : l'assiduité admet des absences pour les grandes fêtes, pas des absences systématiques (CE, Assemblée, 14 avril 1995). Réaction immédiate : ne pas valider ces absences, continuer à les relever et orienter la demande vers le CPE et le chef d'établissement. Action à long terme : laisser le CPE recevoir les parents pour rappeler l'assiduité ; si le conflit persiste, procédure disciplinaire.",
        "solution": "1. Règle de droit : L'obligation d'assiduité de l'article L. 511-1 n'empêche pas des autorisations d'absence pour les grandes fêtes religieuses qui ne coïncident pas avec un jour de congé, dont les dates sont rappelées chaque année. En revanche, les demandes d'absence systématique ou prolongée doivent être refusées lorsqu'elles sont incompatibles avec l'organisation de la scolarité (CE, Assemblée, 14 avril 1995).\n2. Réaction immédiate : Le professeur relève les absences avec exactitude et ne passe pas d'accord privé avec la famille : la vie scolaire (CPE) et le chef d'établissement traitent les absences. Transmettre chaque semaine les cours installerait l'absence. Une réponse blessante sur la religion des parents serait contraire au respect des convictions et fermerait le dialogue.\n3. Action à long terme : Le Vademecum prévoit que le CPE ou le chef d'établissement reçoit les parents pour rappeler l'obligation d'assiduité et chercher une conciliation : les pratiques religieuses s'exercent dans un temps distinct de celui de l'école. Si le conflit n'est pas résolu, le chef d'établissement prend acte d'un manquement à l'obligation d'assiduité et engage une procédure disciplinaire. Adapter l'emploi du temps de toute la classe reviendrait à céder."
      },
      {
        "id": "capes-oral2-cas-16",
        "chapterId": "capes-oral2-cas",
        "tier": 3,
        "title": "Une réaction allergique pendant une sortie",
        "statement": "Lors d'une sortie scolaire en forêt, une élève qui bénéficie d'un projet d'accueil individualisé (PAI) pour une allergie grave présente des signes de réaction après le pique-nique. Identifiez la règle de droit, la réaction immédiate et l'action à long terme.",
        "type": "case3",
        "steps": [
          {
            "label": "Règle de droit",
            "question": "Quelle règle de droit s'applique ?",
            "options": [
              "Le PAI ne s'applique que dans l'enceinte de l'établissement ; pendant les sorties, la responsabilité médicale revient aux parents",
              "Le PAI (circulaire du 10 février 2021) fixe le protocole d'urgence de l'élève et l'accompagne dans toutes les sorties",
              "Le PAI est un document médical confidentiel que l'enseignant n'est pas autorisé à consulter, même avant une sortie",
              "Les enseignants n'ont pas le droit d'appliquer un protocole d'urgence : seuls un médecin ou un infirmier peuvent intervenir"
            ],
            "correctIndex": 1,
            "hint": "Le PAI suit l'élève sur tous les temps scolaires.",
            "explanation": "La circulaire du 10 février 2021 encadre le PAI des élèves atteints de maladies chroniques, d'allergies ou d'intolérances alimentaires. Il précise les aménagements et le protocole d'urgence, avec la trousse de l'élève, et s'applique sur tous les temps et lieux de l'activité scolaire, y compris les sorties. Les personnels qui encadrent l'élève doivent en connaître les consignes."
          },
          {
            "label": "Réaction immédiate",
            "question": "Que faire sur le moment ?",
            "options": [
              "Attendre quelques minutes pour voir si les symptômes passent d'eux-mêmes",
              "Appliquer le protocole du PAI, appeler le 15, confier le groupe aux autres adultes et prévenir l'établissement",
              "Appeler d'abord les parents pour leur demander s'il faut vraiment utiliser la trousse d'urgence prévue dans le PAI",
              "Raccompagner l'élève seule jusqu'au car pour qu'elle s'y repose au calme, pendant que la visite continue avec le groupe"
            ],
            "correctIndex": 1,
            "hint": "Face à une réaction allergique grave, chaque minute compte.",
            "explanation": "Le protocole d'urgence du PAI est conçu pour être appliqué sans attendre ; le SAMU (15) est appelé. L'encadrement de la sortie permet de confier le groupe aux autres adultes pendant que l'élève est prise en charge, puis la direction et la famille sont prévenues. Attendre ou demander l'avis des parents fait perdre un temps décisif ; une élève malade ne reste jamais seule."
          },
          {
            "label": "Action à long terme",
            "question": "Quelle action mener ensuite pour régler durablement le problème ?",
            "options": [
              "Considérer l'incident comme terminé puisque l'élève va bien, et ne pas inquiéter inutilement la famille ni l'équipe",
              "Interdire tous les pique-niques lors des sorties de l'établissement",
              "Rédiger un compte rendu et participer avec l'infirmière ou le médecin scolaire à la révision du PAI",
              "Ne plus emmener l'élève en sortie scolaire, afin de ne pas lui faire courir à nouveau ce risque et de protéger l'équipe"
            ],
            "correctIndex": 2,
            "hint": "L'incident montre une faille à corriger, pas une raison d'exclure l'élève.",
            "explanation": "Un compte rendu permet d'analyser ce qui s'est passé et de faire évoluer le PAI et l'organisation des sorties (contrôle des repas, trousse toujours présente, accompagnateurs informés). L'école inclusive suppose que l'élève continue de participer aux sorties avec des mesures adaptées ; l'exclure serait discriminatoire."
          }
        ],
        "hint1": "Quel document fixe la conduite à tenir pour cette élève, et s'applique-t-il hors de l'établissement ?",
        "hint2": "Le temps compte : quel protocole suivre, quel numéro appeler, et à qui confier le reste du groupe ?",
        "answer": "Règle de droit : le PAI (circulaire du 10 février 2021) fixe le protocole d'urgence de l'élève et l'accompagne dans toutes les sorties. Réaction immédiate : appliquer le protocole du PAI, appeler le 15, confier le groupe aux autres adultes et prévenir l'établissement. Action à long terme : rédiger un compte rendu et participer avec l'infirmière ou le médecin scolaire à la révision du PAI.",
        "solution": "1. Règle de droit : La circulaire du 10 février 2021 encadre le PAI des élèves atteints de maladies chroniques, d'allergies ou d'intolérances alimentaires. Il précise les aménagements et le protocole d'urgence, avec la trousse de l'élève, et s'applique sur tous les temps et lieux de l'activité scolaire, y compris les sorties. Les personnels qui encadrent l'élève doivent en connaître les consignes.\n2. Réaction immédiate : Le protocole d'urgence du PAI est conçu pour être appliqué sans attendre ; le SAMU (15) est appelé. L'encadrement de la sortie permet de confier le groupe aux autres adultes pendant que l'élève est prise en charge, puis la direction et la famille sont prévenues. Attendre ou demander l'avis des parents fait perdre un temps décisif ; une élève malade ne reste jamais seule.\n3. Action à long terme : Un compte rendu permet d'analyser ce qui s'est passé et de faire évoluer le PAI et l'organisation des sorties (contrôle des repas, trousse toujours présente, accompagnateurs informés). L'école inclusive suppose que l'élève continue de participer aux sorties avec des mesures adaptées ; l'exclure serait discriminatoire."
      },
      {
        "id": "capes-oral2-cas-17",
        "chapterId": "capes-oral2-cas",
        "tier": 3,
        "title": "Des parents séparés et les résultats scolaires",
        "statement": "La mère d'une élève de 2de, séparée du père, vous demande de ne plus transmettre au père ni les résultats ni les informations sur sa fille. Le père, lui, vous écrit pour obtenir le bulletin. Identifiez la règle de droit, la réaction immédiate et l'action à long terme.",
        "type": "case3",
        "steps": [
          {
            "label": "Règle de droit",
            "question": "Quelle règle de droit s'applique ?",
            "options": [
              "Les informations scolaires d'un lycéen ne peuvent être transmises à un parent qu'avec l'accord écrit de l'élève lui-même",
              "Sauf décision contraire du juge, les parents séparés exercent tous deux l'autorité parentale (Code civil, art. 372 et 373-2)",
              "Seul le parent chez qui l'enfant réside habituellement a droit aux informations sur sa scolarité et à ses bulletins",
              "L'établissement doit suivre la demande du premier parent qui s'adresse à lui, tant que l'autre parent ne la conteste pas"
            ],
            "correctIndex": 1,
            "hint": "Ce n'est pas la résidence de l'enfant qui fixe les droits des parents.",
            "explanation": "Selon l'article 372 du Code civil, les père et mère exercent en commun l'autorité parentale, et l'article 373-2 précise que la séparation des parents est sans incidence sur les règles de dévolution de son exercice. Sauf décision de justice qui la retire ou la confie à un seul parent, chacun a droit aux informations sur la scolarité de son enfant."
          },
          {
            "label": "Réaction immédiate",
            "question": "Que faire sur le moment ?",
            "options": [
              "Accepter la demande de la mère, puisqu'elle a la garde de l'enfant et connaît mieux que l'établissement la situation familiale",
              "Rester neutre : les deux parents sont informés sauf décision de justice, dont on demande une copie si elle existe",
              "Envoyer au père, de sa propre initiative, l'ensemble des échanges avec la mère, afin d'être parfaitement transparent",
              "Demander à l'élève lequel de ses parents doit recevoir les informations, puisqu'elle est la première concernée"
            ],
            "correctIndex": 1,
            "hint": "Le professeur n'arbitre pas le conflit familial : il applique le droit commun.",
            "explanation": "Le professeur reste neutre dans le conflit des parents et rappelle simplement la règle ; seule une décision de justice peut la modifier, d'où l'invitation à la produire. Le circuit officiel de l'établissement (secrétariat, direction) prend le relais. Mettre l'élève au milieu du conflit est à proscrire, comme transmettre à un parent les échanges avec l'autre."
          },
          {
            "label": "Action à long terme",
            "question": "Quelle action mener ensuite pour régler durablement le problème ?",
            "options": [
              "Laisser l'élève transmettre elle-même les informations scolaires à son père, à la fréquence qui lui convient",
              "Ne plus communiquer avec aucun des deux parents, pour éviter d'être pris à partie dans un conflit qui ne concerne pas l'école",
              "Vérifier que les coordonnées des deux parents sont à jour pour leur adresser à chacun les informations",
              "Saisir le juge aux affaires familiales pour qu'il tranche le conflit entre les parents sur la transmission des résultats"
            ],
            "correctIndex": 2,
            "hint": "La solution durable est administrative : les deux parents dans le circuit d'information.",
            "explanation": "Inscrire correctement les deux responsables légaux permet un double envoi des bulletins et des informations, ce qui met fin aux demandes au cas par cas. Des rencontres séparées peuvent être proposées si la situation l'exige. Couper la communication priverait l'élève du lien entre école et famille ; saisir le juge ne relève pas de l'établissement."
          }
        ],
        "hint1": "Que devient l'autorité parentale après une séparation, et quel acte pourrait seul modifier les droits d'information d'un parent ?",
        "hint2": "Ne pas prendre parti entre les parents : quelle pièce demander à la mère, et quel circuit de l'établissement fait le relais ?",
        "answer": "Règle de droit : sauf décision contraire du juge, les parents séparés exercent tous deux l'autorité parentale (Code civil, art. 372 et 373-2). Réaction immédiate : rester neutre : les deux parents sont informés sauf décision de justice, dont on demande une copie si elle existe. Action à long terme : vérifier que les coordonnées des deux parents sont à jour pour leur adresser à chacun les informations.",
        "solution": "1. Règle de droit : Selon l'article 372 du Code civil, les père et mère exercent en commun l'autorité parentale, et l'article 373-2 précise que la séparation des parents est sans incidence sur les règles de dévolution de son exercice. Sauf décision de justice qui la retire ou la confie à un seul parent, chacun a droit aux informations sur la scolarité de son enfant.\n2. Réaction immédiate : Le professeur reste neutre dans le conflit des parents et rappelle simplement la règle ; seule une décision de justice peut la modifier, d'où l'invitation à la produire. Le circuit officiel de l'établissement (secrétariat, direction) prend le relais. Mettre l'élève au milieu du conflit est à proscrire, comme transmettre à un parent les échanges avec l'autre.\n3. Action à long terme : Inscrire correctement les deux responsables légaux permet un double envoi des bulletins et des informations, ce qui met fin aux demandes au cas par cas. Des rencontres séparées peuvent être proposées si la situation l'exige. Couper la communication priverait l'élève du lien entre école et famille ; saisir le juge ne relève pas de l'établissement."
      },
      {
        "id": "capes-oral2-cas-18",
        "chapterId": "capes-oral2-cas",
        "tier": 3,
        "title": "Les menaces d'un parent après une note",
        "statement": "Après un devoir, le père d'un élève vous appelle, vous menace et vous injurie, puis publie des messages vous mettant en cause sur un réseau social. Identifiez la règle de droit, la réaction immédiate et l'action à long terme.",
        "type": "case3",
        "steps": [
          {
            "label": "Règle de droit",
            "question": "Quelle règle de droit s'applique ?",
            "options": [
              "Le professeur doit se défendre seul : la protection de son administration ne couvre que les accidents de service",
              "Un parent d'élève ne peut pas être poursuivi pour des propos publiés sur un réseau social, qui relèvent de la liberté d'expression",
              "La protection fonctionnelle n'est accordée qu'après une condamnation pénale définitive de l'auteur des menaces",
              "L'administration doit protéger l'agent menacé ou injurié en raison de ses fonctions (CGFP, articles L. 134-1 et L. 134-5)"
            ],
            "correctIndex": 3,
            "hint": "Le statut de la fonction publique prévoit une protection de l'agent par son employeur.",
            "explanation": "La protection fonctionnelle (articles L. 134-1 et L. 134-5 du Code général de la fonction publique) oblige l'administration à protéger l'agent contre les atteintes subies en raison de ses fonctions : menaces, violences, injures, diffamations, outrages. Elle se demande par écrit (à l'Éducation nationale, via l'application Colibris) et n'attend pas une condamnation : l'administration doit prendre sans délai des mesures de protection. Les propos publiés en ligne peuvent relever de la loi du 29 juillet 1881."
          },
          {
            "label": "Réaction immédiate",
            "question": "Que faire sur le moment ?",
            "options": [
              "Répondre publiquement au père sur le même réseau social, pour rétablir la vérité auprès des autres parents",
              "Revoir à la hausse la note de l'élève, afin d'apaiser le père et d'éviter que la situation ne dégénère davantage",
              "Mettre fin calmement à l'appel, garder des traces (notes, captures) et informer aussitôt le chef d'établissement",
              "Rappeler le père le soir même depuis son téléphone personnel pour s'expliquer en tête-à-tête avec lui"
            ],
            "correctIndex": 2,
            "hint": "Ne pas alimenter l'échange, garder des preuves, prévenir la hiérarchie.",
            "explanation": "Le professeur ne poursuit pas un échange menaçant et ne répond pas publiquement, ce qui alimenterait la polémique. Il garde des preuves datées, utiles pour la protection fonctionnelle et une éventuelle plainte, et alerte aussitôt le chef d'établissement. Modifier une note sous la pression porterait atteinte à l'équité de l'évaluation."
          },
          {
            "label": "Action à long terme",
            "question": "Quelle action mener ensuite pour régler durablement le problème ?",
            "options": [
              "Demander à changer de classe pour ne plus avoir l'élève en cours, et éviter ainsi tout nouveau contact avec ce père",
              "Mettre l'élève à l'écart en classe tant que son père ne s'est pas excusé",
              "Demander la protection fonctionnelle (Colibris), envisager une plainte et évaluer l'élève comme avant",
              "Attendre que la situation se calme d'elle-même, sans rien demander à l'administration ni porter plainte"
            ],
            "correctIndex": 2,
            "hint": "La protection se demande ; l'élève, lui, n'a pas à subir le conflit.",
            "explanation": "La demande écrite de protection fonctionnelle déclenche l'accompagnement de l'administration (soutien, prise en charge des frais d'avocat le cas échéant, mesures envers l'auteur). Le chef d'établissement reçoit le parent et peut signaler les faits. L'élève n'est pas responsable du comportement de son père et doit continuer à être évalué et traité comme les autres."
          }
        ],
        "hint1": "Que doit l'administration à un agent menacé ou injurié en raison de ses fonctions, et sur quel fondement ?",
        "hint2": "Ne pas répondre sur le même terrain : comment clore l'échange, que conserver, et qui prévenir aussitôt ?",
        "answer": "Règle de droit : l'administration doit protéger l'agent menacé ou injurié en raison de ses fonctions (CGFP, articles L. 134-1 et L. 134-5). Réaction immédiate : mettre fin calmement à l'appel, garder des traces (notes, captures) et informer aussitôt le chef d'établissement. Action à long terme : demander la protection fonctionnelle (Colibris), envisager une plainte et évaluer l'élève comme avant.",
        "solution": "1. Règle de droit : La protection fonctionnelle (articles L. 134-1 et L. 134-5 du Code général de la fonction publique) oblige l'administration à protéger l'agent contre les atteintes subies en raison de ses fonctions : menaces, violences, injures, diffamations, outrages. Elle se demande par écrit (à l'Éducation nationale, via l'application Colibris) et n'attend pas une condamnation : l'administration doit prendre sans délai des mesures de protection. Les propos publiés en ligne peuvent relever de la loi du 29 juillet 1881.\n2. Réaction immédiate : Le professeur ne poursuit pas un échange menaçant et ne répond pas publiquement, ce qui alimenterait la polémique. Il garde des preuves datées, utiles pour la protection fonctionnelle et une éventuelle plainte, et alerte aussitôt le chef d'établissement. Modifier une note sous la pression porterait atteinte à l'équité de l'évaluation.\n3. Action à long terme : La demande écrite de protection fonctionnelle déclenche l'accompagnement de l'administration (soutien, prise en charge des frais d'avocat le cas échéant, mesures envers l'auteur). Le chef d'établissement reçoit le parent et peut signaler les faits. L'élève n'est pas responsable du comportement de son père et doit continuer à être évalué et traité comme les autres."
      },
      // =========================================================================
      // PALIER 4 : PROTECTION DE L'ÉLÈVE
      // =========================================================================
      {
        "id": "capes-oral2-cas-19",
        "chapterId": "capes-oral2-cas",
        "tier": 4,
        "title": "Une confidence sur des violences à la maison",
        "statement": "Une élève de 6e vous confie, après le cours, que son beau-père « la frappe quand il est énervé » ; elle a peur que sa mère l'apprenne. Identifiez la règle de droit, la réaction immédiate et l'action à long terme.",
        "type": "case3",
        "steps": [
          {
            "label": "Règle de droit",
            "question": "Quelle règle de droit s'applique ?",
            "options": [
              "Le professeur doit d'abord réunir des preuves des violences avant de transmettre quoi que ce soit à qui que ce soit",
              "Un mineur en danger fait l'objet d'une information préoccupante (CASF, articles L. 226-2-1 et L. 226-3)",
              "La confidence relève du secret entre l'élève et son professeur",
              "Seule l'assistante sociale peut décider s'il faut informer quelqu'un, le professeur n'ayant aucune obligation personnelle"
            ],
            "correctIndex": 1,
            "hint": "Le professeur n'a pas à prouver : il transmet ce qu'il sait.",
            "explanation": "Lorsqu'un mineur est en danger ou en risque de l'être au sens de l'article 375 du Code civil, une information préoccupante est adressée au président du conseil départemental, par la cellule de recueil des informations préoccupantes (CRIP), conformément aux articles L. 226-2-1 et L. 226-3 du Code de l'action sociale et des familles. Le Vademecum rappelle que tout membre du personnel doit le faire. L'enseignant n'a ni à enquêter ni à établir la preuve."
          },
          {
            "label": "Réaction immédiate",
            "question": "Que faire sur le moment ?",
            "options": [
              "Appeler la mère dès la fin du cours pour lui demander des explications sur le comportement de son compagnon",
              "Poser de nombreuses questions précises sur les faits, les dates et les lieux, pour vérifier que l'élève dit bien la vérité",
              "Écouter sans insister, ne pas promettre le secret, noter ses mots exacts et alerter sans délai la direction",
              "Lui promettre de ne rien dire à personne si elle accepte d'aller en parler elle-même à l'infirmière scolaire"
            ],
            "correctIndex": 2,
            "hint": "Recueillir sans enquêter, ne pas promettre le secret, ne pas contacter la famille.",
            "explanation": "Le rôle du professeur est d'accueillir la parole et de la transmettre fidèlement : noter les mots de l'élève, sans questions orientées qui pourraient fragiliser une future enquête. Il n'appelle pas la famille, ce qui pourrait exposer l'élève. Il ne promet pas le secret et alerte aussitôt le chef d'établissement, l'infirmière et l'assistante sociale."
          },
          {
            "label": "Action à long terme",
            "question": "Quelle action mener ensuite pour régler durablement le problème ?",
            "options": [
              "Suivre soi-même l'évolution de la situation familiale en interrogeant régulièrement l'élève après les cours",
              "Rencontrer le beau-père pour l'avertir calmement que l'école a été informée et que la situation est surveillée",
              "Contribuer avec la direction et l'assistante sociale à l'information préoccupante, puis rester attentif à l'élève",
              "Attendre d'observer de nouveaux signes, comme des marques ou des absences, avant de transmettre quoi que ce soit"
            ],
            "correctIndex": 2,
            "hint": "L'écrit part par le circuit prévu ; le professeur reste ensuite un adulte attentif.",
            "explanation": "L'information préoccupante est rédigée et transmise selon le protocole départemental, avec l'appui de l'assistante sociale et du chef d'établissement. Les services de protection de l'enfance évaluent ensuite la situation. Le professeur reste vigilant et disponible sans réinterroger l'élève. Prévenir l'auteur présumé ou attendre de nouveaux signes mettrait l'élève en danger."
          }
        ],
        "hint1": "Quel circuit existe pour un mineur en danger ou risquant de l'être, et le professeur doit-il établir la preuve avant d'agir ?",
        "hint2": "Écouter sans interroger : que ne pas promettre, que noter fidèlement, et qui alerter sans attendre ?",
        "answer": "Règle de droit : un mineur en danger fait l'objet d'une information préoccupante (CASF, articles L. 226-2-1 et L. 226-3). Réaction immédiate : écouter sans insister, ne pas promettre le secret, noter ses mots exacts et alerter sans délai la direction. Action à long terme : contribuer avec la direction et l'assistante sociale à l'information préoccupante, puis rester attentif à l'élève.",
        "solution": "1. Règle de droit : Lorsqu'un mineur est en danger ou en risque de l'être au sens de l'article 375 du Code civil, une information préoccupante est adressée au président du conseil départemental, par la cellule de recueil des informations préoccupantes (CRIP), conformément aux articles L. 226-2-1 et L. 226-3 du Code de l'action sociale et des familles. Le Vademecum rappelle que tout membre du personnel doit le faire. L'enseignant n'a ni à enquêter ni à établir la preuve.\n2. Réaction immédiate : Le rôle du professeur est d'accueillir la parole et de la transmettre fidèlement : noter les mots de l'élève, sans questions orientées qui pourraient fragiliser une future enquête. Il n'appelle pas la famille, ce qui pourrait exposer l'élève. Il ne promet pas le secret et alerte aussitôt le chef d'établissement, l'infirmière et l'assistante sociale.\n3. Action à long terme : L'information préoccupante est rédigée et transmise selon le protocole départemental, avec l'appui de l'assistante sociale et du chef d'établissement. Les services de protection de l'enfance évaluent ensuite la situation. Le professeur reste vigilant et disponible sans réinterroger l'élève. Prévenir l'auteur présumé ou attendre de nouveaux signes mettrait l'élève en danger."
      },
      {
        "id": "capes-oral2-cas-20",
        "chapterId": "capes-oral2-cas",
        "tier": 4,
        "title": "Une élève qui a peur de rentrer chez elle",
        "statement": "Un vendredi en fin de journée, une élève de 4e vous montre des marques de coups sur ses bras et vous dit qu'elle ne veut pas rentrer chez elle ce soir car elle a peur. Identifiez la règle de droit, la réaction immédiate et l'action à long terme.",
        "type": "case3",
        "steps": [
          {
            "label": "Règle de droit",
            "question": "Quelle règle de droit s'applique ?",
            "options": [
              "Le professeur doit d'abord prévenir les parents, qui exercent l'autorité parentale et doivent être informés en premier",
              "L'école n'a plus aucune obligation après la fin des cours : la situation relève alors de la seule responsabilité de la famille",
              "En danger grave et immédiat, on saisit directement le procureur ; l'article 40 du CPP oblige à signaler crimes et délits",
              "Une information préoccupante envoyée par courrier à la cellule départementale suffit dans tous les cas, même en urgence"
            ],
            "correctIndex": 2,
            "hint": "Danger grave et immédiat : la voie n'est pas la même qu'en cas de simple inquiétude.",
            "explanation": "Lorsque le danger est grave et immédiat, la saisine directe du procureur de la République permet une mesure de protection rapide ; une copie est adressée au président du conseil départemental. L'article 40 du Code de procédure pénale impose à tout fonctionnaire qui acquiert la connaissance d'un crime ou d'un délit d'en aviser sans délai le procureur. Prévenir les parents peut exposer l'enfant si les violences ont lieu à la maison."
          },
          {
            "label": "Réaction immédiate",
            "question": "Que faire sur le moment ?",
            "options": [
              "Photographier soi-même les marques avec son téléphone personnel et envoyer les photos aux parents pour explication",
              "Laisser l'élève rentrer chez elle comme d'habitude, et faire un point avec elle et l'infirmière dès lundi matin",
              "Proposer à l'élève de l'héberger chez soi pour le week-end, le temps que la situation familiale s'apaise",
              "Garder l'élève avec soi, l'accompagner à l'infirmerie et alerter aussitôt la direction, qui saisit le procureur"
            ],
            "correctIndex": 3,
            "hint": "L'élève est encore sous la responsabilité de l'établissement : la protection se décide maintenant.",
            "explanation": "Le professeur reste avec l'élève et l'accompagne vers l'infirmière et le chef d'établissement, qui saisit le procureur sans attendre ; en cas d'urgence absolue, la police ou la gendarmerie peut être appelée. Héberger l'élève chez soi sort de tout cadre. Les constats sont faits par les professionnels compétents, jamais par des photos personnelles envoyées à la famille."
          },
          {
            "label": "Action à long terme",
            "question": "Quelle action mener ensuite pour régler durablement le problème ?",
            "options": [
              "Remettre un écrit factuel à la direction sur ce qui a été vu et entendu, puis contribuer au suivi",
              "Considérer que tout est réglé une fois le signalement envoyé, la suite relevant uniquement de la justice",
              "Partager la situation en salle des professeurs, afin que tous les collègues soient informés des détails et vigilants",
              "Mener sa propre enquête auprès des camarades de l'élève"
            ],
            "correctIndex": 0,
            "hint": "Un écrit précis, la discrétion, puis le suivi.",
            "explanation": "Le compte rendu écrit, daté et factuel (paroles rapportées entre guillemets, constats) sert aux autorités. La discrétion protège l'élève : seuls les personnels qui en ont besoin sont informés. Le professeur n'enquête pas. Après le signalement, l'élève reste suivie par l'équipe, en lien avec les services saisis."
          }
        ],
        "hint1": "Le danger paraît-il grave et immédiat ? Chercher quelle autorité peut alors être saisie directement, et ce que le Code de procédure pénale impose aux fonctionnaires.",
        "hint2": "Elle ne doit pas repartir seule : avec qui rester, vers qui aller tout de suite, et pourquoi ne pas appeler soi-même la famille ?",
        "answer": "Règle de droit : en danger grave et immédiat, on saisit directement le procureur ; l'article 40 du CPP oblige à signaler crimes et délits. Réaction immédiate : garder l'élève avec soi, l'accompagner à l'infirmerie et alerter aussitôt la direction, qui saisit le procureur. Action à long terme : remettre un écrit factuel à la direction sur ce qui a été vu et entendu, puis contribuer au suivi.",
        "solution": "1. Règle de droit : Lorsque le danger est grave et immédiat, la saisine directe du procureur de la République permet une mesure de protection rapide ; une copie est adressée au président du conseil départemental. L'article 40 du Code de procédure pénale impose à tout fonctionnaire qui acquiert la connaissance d'un crime ou d'un délit d'en aviser sans délai le procureur. Prévenir les parents peut exposer l'enfant si les violences ont lieu à la maison.\n2. Réaction immédiate : Le professeur reste avec l'élève et l'accompagne vers l'infirmière et le chef d'établissement, qui saisit le procureur sans attendre ; en cas d'urgence absolue, la police ou la gendarmerie peut être appelée. Héberger l'élève chez soi sort de tout cadre. Les constats sont faits par les professionnels compétents, jamais par des photos personnelles envoyées à la famille.\n3. Action à long terme : Le compte rendu écrit, daté et factuel (paroles rapportées entre guillemets, constats) sert aux autorités. La discrétion protège l'élève : seuls les personnels qui en ont besoin sont informés. Le professeur n'enquête pas. Après le signalement, l'élève reste suivie par l'équipe, en lien avec les services saisis."
      },
      {
        "id": "capes-oral2-cas-21",
        "chapterId": "capes-oral2-cas",
        "tier": 4,
        "title": "Des photos humiliantes diffusées en ligne",
        "statement": "Des élèves de 3e vous signalent qu'une photo truquée et humiliante d'une camarade circule sur un réseau social, accompagnée de commentaires moqueurs de plusieurs élèves du collège. Identifiez la règle de droit, la réaction immédiate et l'action à long terme.",
        "type": "case3",
        "steps": [
          {
            "label": "Règle de droit",
            "question": "Quelle règle de droit s'applique ?",
            "options": [
              "Ce qui se passe sur les réseaux sociaux en dehors des heures de cours ne concerne pas l'établissement, mais les seules familles",
              "La diffusion d'une image n'est répréhensible que si la photo a été prise à l'intérieur de l'établissement scolaire",
              "Seuls les parents de la victime peuvent agir, en déposant plainte ; l'établissement doit attendre l'issue de la procédure",
              "Le harcèlement, même en ligne, est un délit (loi du 2 mars 2022) ; pHARe s'applique et le 3018 aide au retrait"
            ],
            "correctIndex": 3,
            "hint": "La loi de 2022 vise aussi les faits commis en ligne entre élèves.",
            "explanation": "La loi du 2 mars 2022 réprime le harcèlement scolaire, y compris lorsqu'il se poursuit en ligne, et le cyberharcèlement entre élèves d'un même établissement relève du protocole pHARe. Le 3018, numéro national contre les violences numériques opéré par l'association e-Enfance, accompagne les victimes et peut obtenir des plateformes le retrait rapide des contenus."
          },
          {
            "label": "Réaction immédiate",
            "question": "Que faire sur le moment ?",
            "options": [
              "Remercier les élèves, ne pas demander l'image ni la transférer, informer sans délai le CPE et la direction",
              "Conseiller aux élèves d'ignorer la publication, qui finira par disparaître d'elle-même si personne ne la commente",
              "Demander aux élèves de vous transférer la photo sur votre téléphone",
              "Montrer la photo à la classe pour lui faire prendre conscience de la gravité des faits et de leurs conséquences"
            ],
            "correctIndex": 0,
            "hint": "Ne pas participer à la diffusion, même avec de bonnes intentions.",
            "explanation": "Chaque partage prolonge l'atteinte : le professeur ne reçoit pas l'image et ne la montre pas. Il valorise le signalement des témoins et alerte immédiatement le CPE et le chef d'établissement, qui prennent en charge la victime, sa famille, et les mesures envers les auteurs. Ignorer le problème laisse la victime seule."
          },
          {
            "label": "Action à long terme",
            "question": "Quelle action mener ensuite pour régler durablement le problème ?",
            "options": [
              "Interdire aux élèves de la classe l'usage de tout réseau social, y compris chez eux, jusqu'à la fin de l'année",
              "Organiser une confrontation entre la victime et les auteurs devant la classe, pour obtenir des excuses publiques",
              "Laisser la famille de la victime régler seule la question avec la plateforme, l'établissement n'ayant pas de rôle à jouer",
              "Suivre le protocole pHARe (protection de la victime, mesures envers les auteurs, 3018) et prévenir les dérives"
            ],
            "correctIndex": 3,
            "hint": "Protection, réponse envers les auteurs, prévention : trois volets.",
            "explanation": "Le protocole prévoit la protection de la victime, des mesures envers les auteurs (éducatives et, si nécessaire, disciplinaires), l'information des familles et l'orientation vers le 3018 pour le retrait des contenus. La prévention, par l'éducation aux usages numériques, réduit les récidives. Une interdiction hors temps scolaire est hors de portée de l'établissement ; une confrontation publique expose davantage la victime."
          }
        ],
        "hint1": "Le fait de se dérouler en ligne fait-il sortir ces faits du harcèlement scolaire ? Chercher aussi quel numéro national aide à faire retirer les contenus.",
        "hint2": "Chaque partage prolonge l'atteinte : que répondre si l'on vous propose de voir l'image, et qui alerter ?",
        "answer": "Règle de droit : le harcèlement, même en ligne, est un délit (loi du 2 mars 2022) ; pHARe s'applique et le 3018 aide au retrait. Réaction immédiate : remercier les élèves, ne pas demander l'image ni la transférer, informer sans délai le CPE et la direction. Action à long terme : suivre le protocole pHARe (protection de la victime, mesures envers les auteurs, 3018) et prévenir les dérives.",
        "solution": "1. Règle de droit : La loi du 2 mars 2022 réprime le harcèlement scolaire, y compris lorsqu'il se poursuit en ligne, et le cyberharcèlement entre élèves d'un même établissement relève du protocole pHARe. Le 3018, numéro national contre les violences numériques opéré par l'association e-Enfance, accompagne les victimes et peut obtenir des plateformes le retrait rapide des contenus.\n2. Réaction immédiate : Chaque partage prolonge l'atteinte : le professeur ne reçoit pas l'image et ne la montre pas. Il valorise le signalement des témoins et alerte immédiatement le CPE et le chef d'établissement, qui prennent en charge la victime, sa famille, et les mesures envers les auteurs. Ignorer le problème laisse la victime seule.\n3. Action à long terme : Le protocole prévoit la protection de la victime, des mesures envers les auteurs (éducatives et, si nécessaire, disciplinaires), l'information des familles et l'orientation vers le 3018 pour le retrait des contenus. La prévention, par l'éducation aux usages numériques, réduit les récidives. Une interdiction hors temps scolaire est hors de portée de l'établissement ; une confrontation publique expose davantage la victime."
      },
      {
        "id": "capes-oral2-cas-22",
        "chapterId": "capes-oral2-cas",
        "tier": 4,
        "title": "Un malaise pendant une période de jeûne",
        "statement": "En plein cours, un élève de 6e fait un malaise. Ses camarades expliquent qu'il jeûne depuis plusieurs jours et qu'il ne boit pas de la journée. Identifiez la règle de droit, la réaction immédiate et l'action à long terme.",
        "type": "case3",
        "steps": [
          {
            "label": "Règle de droit",
            "question": "Quelle règle de droit s'applique ?",
            "options": [
              "Le professeur peut obliger l'élève à manger et à boire en classe, puisque la protection de sa santé prime sur sa pratique",
              "Le jeûne étant une pratique religieuse, il est interdit dans l'établissement en application de la loi du 15 mars 2004",
              "La pratique religieuse relève de la liberté des familles : l'école n'a pas à intervenir, même lorsque la santé de l'élève est en jeu",
              "L'école ne juge pas la pratique religieuse ; si la santé de l'élève est en danger (article 375 du Code civil), elle alerte"
            ],
            "correctIndex": 3,
            "hint": "Deux exigences à articuler : la santé de l'élève et la neutralité de l'école. Sur quoi les adultes peuvent-ils légitimement intervenir ?",
            "explanation": "Le Vademecum de mars 2024 (fiche 13) prévoit que l'école n'intervient pas sur le contenu des pratiques religieuses mais sur leurs conséquences pour la santé de l'enfant. Si le dialogue avec la famille n'aboutit pas et que le mineur est en danger ou risque de l'être au sens de l'article 375 du Code civil, tout membre du personnel informe par écrit le président du conseil départemental (information préoccupante, article L. 226-2-1 du CASF). La loi de 2004 ne vise que les signes et tenues."
          },
          {
            "label": "Réaction immédiate",
            "question": "Que faire sur le moment ?",
            "options": [
              "Le renvoyer seul chez lui pour qu'il puisse se reposer et reprendre des forces avant de revenir en cours",
              "Lui demander de rester à sa place jusqu'à la fin du cours, pour ne pas perturber davantage le travail de la classe",
              "Mettre l'élève en sécurité, le faire conduire à l'infirmerie ou appeler les secours, sans commenter sa pratique",
              "Lui expliquer devant la classe que sa religion ne l'oblige pas à jeûner à son âge, afin de le rassurer"
            ],
            "correctIndex": 2,
            "hint": "L'urgence est sanitaire, pas religieuse.",
            "explanation": "La santé de l'élève passe en premier : il est pris en charge par l'infirmière ou, selon son état, par les secours, et ne reste pas seul. Le professeur ne commente pas la pratique religieuse : ce n'est pas le rôle d'un agent public de dire ce qu'une religion exige. Renvoyer un élève malade seul chez lui est dangereux et contraire au devoir de surveillance."
          },
          {
            "label": "Action à long terme",
            "question": "Quelle action mener ensuite pour régler durablement le problème ?",
            "options": [
              "Ne rien faire de plus puisque l'élève s'est rétabli et que la pratique religieuse relève de la vie privée de la famille",
              "Interdire à l'élève de venir en cours tant qu'il jeûne, afin de protéger sa santé et d'éviter un nouveau malaise",
              "Contacter un responsable religieux de la commune, pour qu'il convainque la famille de modérer la pratique de l'enfant",
              "Informer la direction, qui dialogue avec la famille avec le médecin scolaire ; alerter si le danger persiste"
            ],
            "correctIndex": 3,
            "hint": "Dialogue avec la famille, appuyé par les personnels de santé, puis protection si nécessaire.",
            "explanation": "Selon le Vademecum, le chef d'établissement conduit le dialogue avec les parents et l'élève, avec les enseignants qui le connaissent et le médecin ou l'infirmier, qui rappellent les risques, surtout chez les plus jeunes. L'école ne fait pas appel à des autorités religieuses, en vertu de la neutralité. Si le dialogue échoue et que l'élève reste en danger, l'information préoccupante est transmise. Exclure l'élève méconnaît son droit à l'instruction."
          }
        ],
        "hint1": "L'école se prononce-t-elle sur une pratique religieuse, ou sur ses conséquences pour la santé d'un enfant ? Quel circuit si le danger persiste ?",
        "hint2": "La santé d'abord : qui prend en charge l'élève, qui reste près de lui, et quel commentaire s'interdire ?",
        "answer": "Règle de droit : l'école ne juge pas la pratique religieuse ; si la santé de l'élève est en danger (article 375 du Code civil), elle alerte. Réaction immédiate : mettre l'élève en sécurité, le faire conduire à l'infirmerie ou appeler les secours, sans commenter sa pratique. Action à long terme : informer la direction, qui dialogue avec la famille avec le médecin scolaire ; alerter si le danger persiste.",
        "solution": "1. Règle de droit : Le Vademecum de mars 2024 (fiche 13) prévoit que l'école n'intervient pas sur le contenu des pratiques religieuses mais sur leurs conséquences pour la santé de l'enfant. Si le dialogue avec la famille n'aboutit pas et que le mineur est en danger ou risque de l'être au sens de l'article 375 du Code civil, tout membre du personnel informe par écrit le président du conseil départemental (information préoccupante, article L. 226-2-1 du CASF). La loi de 2004 ne vise que les signes et tenues.\n2. Réaction immédiate : La santé de l'élève passe en premier : il est pris en charge par l'infirmière ou, selon son état, par les secours, et ne reste pas seul. Le professeur ne commente pas la pratique religieuse : ce n'est pas le rôle d'un agent public de dire ce qu'une religion exige. Renvoyer un élève malade seul chez lui est dangereux et contraire au devoir de surveillance.\n3. Action à long terme : Selon le Vademecum, le chef d'établissement conduit le dialogue avec les parents et l'élève, avec les enseignants qui le connaissent et le médecin ou l'infirmier, qui rappellent les risques, surtout chez les plus jeunes. L'école ne fait pas appel à des autorités religieuses, en vertu de la neutralité. Si le dialogue échoue et que l'élève reste en danger, l'information préoccupante est transmise. Exclure l'élève méconnaît son droit à l'instruction."
      },
      {
        "id": "capes-oral2-cas-23",
        "chapterId": "capes-oral2-cas",
        "tier": 4,
        "title": "Des propos racistes en classe",
        "statement": "Pendant un travail de groupe, un élève de 4e lance une insulte raciste à un camarade. Une partie de la classe rit. Identifiez la règle de droit, la réaction immédiate et l'action à long terme.",
        "type": "case3",
        "steps": [
          {
            "label": "Règle de droit",
            "question": "Quelle règle de droit s'applique ?",
            "options": [
              "La Constitution garantit l'égalité sans distinction d'origine, et la loi punit l'injure raciste, même non publique (Code pénal)",
              "Les propos entre élèves relèvent de leur liberté d'expression, tant qu'ils ne sont pas répétés ou publiés en ligne",
              "Le professeur ne peut intervenir que si l'élève visé porte plainte, faute de quoi il n'existe aucune base pour agir",
              "Une insulte raciste n'est répréhensible que si elle vise un adulte de l'établissement, et non un autre élève"
            ],
            "correctIndex": 0,
            "hint": "La Constitution pose le principe ; la loi réprime l'injure raciste, qu'elle soit publique (loi de 1881) ou non (Code pénal).",
            "explanation": "L'article 1er de la Constitution garantit l'égalité de tous les citoyens sans distinction d'origine, de race ou de religion, et la loi réprime l'injure commise en raison de l'origine ou d'une prétendue race : proférée en classe, devant des camarades, une injure non publique de ce type constitue une contravention (Code pénal, article R. 625-8-1) ; proférée publiquement, par exemple sur un réseau social ouvert, c'est un délit (loi du 29 juillet 1881). La liberté d'expression des élèves ne couvre pas l'atteinte à la dignité d'autrui, que les règlements intérieurs proscrivent. L'école agit sans attendre une plainte."
          },
          {
            "label": "Réaction immédiate",
            "question": "Que faire sur le moment ?",
            "options": [
              "Poursuivre l'activité sans relever, afin de ne pas donner d'importance à l'incident ni de publicité à son auteur",
              "Demander d'abord à l'élève visé s'il a été vexé, avant de décider s'il est vraiment nécessaire de réagir",
              "Organiser immédiatement un débat en classe pour déterminer ensemble si le propos était vraiment raciste",
              "Réagir aussitôt, faire cesser les rires, nommer le propos comme raciste et inacceptable, soutenir l'élève visé"
            ],
            "correctIndex": 3,
            "hint": "Le silence de l'adulte serait compris comme une approbation.",
            "explanation": "Le professeur réagit sur-le-champ : laisser passer revient à banaliser le racisme pour toute la classe. Il qualifie le propos sans le répéter, fait cesser les rires et soutient l'élève visé, sans faire reposer sur lui la décision d'agir. Le caractère raciste de l'injure ne se met pas aux voix."
          },
          {
            "label": "Action à long terme",
            "question": "Quelle action mener ensuite pour régler durablement le problème ?",
            "options": [
              "Changer de place l'élève visé, afin de l'éloigner durablement de l'auteur de l'insulte et d'éviter une récidive",
              "Faire un rapport à la direction, informer le CPE et les familles, mener un travail sur les discriminations",
              "Baisser la note du travail de groupe de tous les élèves qui ont ri, afin de sanctionner leur attitude",
              "Exiger des excuses publiques de l'auteur devant la classe, puis considérer l'affaire comme close"
            ],
            "correctIndex": 1,
            "hint": "Réponse disciplinaire, soutien de la victime et prévention.",
            "explanation": "Le rapport permet au chef d'établissement d'engager une réponse proportionnée, disciplinaire si besoin. Les familles sont informées et l'élève visé est soutenu. Un travail éducatif avec l'équipe (enseignement moral et civique, CPE) traite le fond. Déplacer la victime ou sanctionner par une note collective ne répond pas au problème."
          }
        ],
        "hint1": "Deux niveaux à citer : le principe constitutionnel d'égalité et la loi qui réprime l'injure raciste. La liberté d'expression d'un élève couvre-t-elle un tel propos ?",
        "hint2": "Ne pas laisser passer : comment qualifier le propos sans le répéter, que faire des rires, et qui soutenir en premier ?",
        "answer": "Règle de droit : la Constitution garantit l'égalité sans distinction d'origine, et la loi punit l'injure raciste, même non publique (Code pénal). Réaction immédiate : réagir aussitôt, faire cesser les rires, nommer le propos comme raciste et inacceptable, soutenir l'élève visé. Action à long terme : faire un rapport à la direction, informer le CPE et les familles, mener un travail sur les discriminations.",
        "solution": "1. Règle de droit : L'article 1er de la Constitution garantit l'égalité de tous les citoyens sans distinction d'origine, de race ou de religion, et la loi réprime l'injure commise en raison de l'origine ou d'une prétendue race : proférée en classe, devant des camarades, une injure non publique de ce type constitue une contravention (Code pénal, article R. 625-8-1) ; proférée publiquement, par exemple sur un réseau social ouvert, c'est un délit (loi du 29 juillet 1881). La liberté d'expression des élèves ne couvre pas l'atteinte à la dignité d'autrui, que les règlements intérieurs proscrivent. L'école agit sans attendre une plainte.\n2. Réaction immédiate : Le professeur réagit sur-le-champ : laisser passer revient à banaliser le racisme pour toute la classe. Il qualifie le propos sans le répéter, fait cesser les rires et soutient l'élève visé, sans faire reposer sur lui la décision d'agir. Le caractère raciste de l'injure ne se met pas aux voix.\n3. Action à long terme : Le rapport permet au chef d'établissement d'engager une réponse proportionnée, disciplinaire si besoin. Les familles sont informées et l'élève visé est soutenu. Un travail éducatif avec l'équipe (enseignement moral et civique, CPE) traite le fond. Déplacer la victime ou sanctionner par une note collective ne répond pas au problème."
      },
      {
        "id": "capes-oral2-cas-24",
        "chapterId": "capes-oral2-cas",
        "tier": 4,
        "title": "Des messages insistants d'un adulte de l'établissement",
        "statement": "Une élève de 3e vous montre sur son téléphone des messages privés insistants et ambigus qu'un adulte de l'établissement lui envoie le soir sur un réseau social. Identifiez la règle de droit, la réaction immédiate et l'action à long terme.",
        "type": "case3",
        "steps": [
          {
            "label": "Règle de droit",
            "question": "Quelle règle de droit s'applique ?",
            "options": [
              "Tout fonctionnaire informé d'un crime ou d'un délit doit aviser le procureur (article 40 du CPP), même contre un collègue",
              "Il faut d'abord demander une explication au collègue concerné, afin de respecter la présomption d'innocence avant toute démarche",
              "Ces messages relèvent de la vie privée de l'adulte et de l'élève, tant qu'ils sont envoyés en dehors du temps scolaire",
              "Un professeur ne peut pas signaler un collègue : seul l'inspecteur est compétent pour traiter le comportement d'un personnel"
            ],
            "correctIndex": 0,
            "hint": "Un article du Code de procédure pénale vise directement les fonctionnaires.",
            "explanation": "L'article 40 du Code de procédure pénale impose à toute autorité constituée et à tout fonctionnaire qui acquiert, dans l'exercice de ses fonctions, la connaissance d'un crime ou d'un délit d'en aviser sans délai le procureur de la République. Le caractère privé des messages ne protège pas l'adulte : ce qui compte est la mise en danger possible de l'élève. Prévenir l'adulte concerné pourrait compromettre l'enquête."
          },
          {
            "label": "Réaction immédiate",
            "question": "Que faire sur le moment ?",
            "options": [
              "Répondre soi-même aux messages depuis le téléphone de l'élève, pour amener l'adulte à se dévoiler",
              "Aller voir le collègue concerné pour lui demander fermement de cesser d'envoyer ces messages à l'élève",
              "Remercier l'élève, ne pas promettre le secret, ne pas confronter l'adulte et alerter aussitôt la direction",
              "Conseiller à l'élève de bloquer le compte de l'adulte et de ne plus y penser, pour qu'elle retrouve sa tranquillité"
            ],
            "correctIndex": 2,
            "hint": "Ne pas agir seul, ne pas alerter l'adulte mis en cause.",
            "explanation": "Le professeur accueille la parole de l'élève et la transmet sans délai au chef d'établissement, qui saisit le procureur et informe l'autorité académique. Il ne confronte pas l'adulte, ce qui pourrait entraîner des pressions sur l'élève ou la destruction de preuves, et ne manipule pas le téléphone. Bloquer le compte ne protégerait pas les autres élèves."
          },
          {
            "label": "Action à long terme",
            "question": "Quelle action mener ensuite pour régler durablement le problème ?",
            "options": [
              "Raconter l'affaire aux collègues, afin qu'ils se méfient de l'adulte concerné et protègent les autres élèves",
              "Remettre un écrit factuel à la direction, rester discret et n'échanger avec les élèves que par l'ENT",
              "Demander à l'élève de recueillir d'autres messages de l'adulte",
              "Attendre la suite de l'enquête sans s'occuper de l'élève, pour ne pas interférer avec le travail des enquêteurs"
            ],
            "correctIndex": 1,
            "hint": "Discrétion, soutien de l'élève et règles de communication professionnelles.",
            "explanation": "L'écrit factuel sert à l'enquête ; la discrétion protège l'élève et la présomption d'innocence. L'élève est accompagnée par l'infirmière, l'assistante sociale et le CPE. Communiquer avec les élèves uniquement par les outils de l'établissement (ENT) est une règle de prudence qui protège les élèves comme les personnels. On ne demande jamais à un élève de recueillir des preuves."
          }
        ],
        "hint1": "Le fait que l'auteur présumé soit un collègue change-t-il l'obligation d'un fonctionnaire qui a connaissance de faits pouvant constituer un délit ?",
        "hint2": "Ni enquête ni confrontation : que dire à l'élève, que ne pas manipuler, et qui alerter aussitôt ?",
        "answer": "Règle de droit : tout fonctionnaire informé d'un crime ou d'un délit doit aviser le procureur (article 40 du CPP), même contre un collègue. Réaction immédiate : remercier l'élève, ne pas promettre le secret, ne pas confronter l'adulte et alerter aussitôt la direction. Action à long terme : remettre un écrit factuel à la direction, rester discret et n'échanger avec les élèves que par l'ENT.",
        "solution": "1. Règle de droit : L'article 40 du Code de procédure pénale impose à toute autorité constituée et à tout fonctionnaire qui acquiert, dans l'exercice de ses fonctions, la connaissance d'un crime ou d'un délit d'en aviser sans délai le procureur de la République. Le caractère privé des messages ne protège pas l'adulte : ce qui compte est la mise en danger possible de l'élève. Prévenir l'adulte concerné pourrait compromettre l'enquête.\n2. Réaction immédiate : Le professeur accueille la parole de l'élève et la transmet sans délai au chef d'établissement, qui saisit le procureur et informe l'autorité académique. Il ne confronte pas l'adulte, ce qui pourrait entraîner des pressions sur l'élève ou la destruction de preuves, et ne manipule pas le téléphone. Bloquer le compte ne protégerait pas les autres élèves.\n3. Action à long terme : L'écrit factuel sert à l'enquête ; la discrétion protège l'élève et la présomption d'innocence. L'élève est accompagnée par l'infirmière, l'assistante sociale et le CPE. Communiquer avec les élèves uniquement par les outils de l'établissement (ENT) est une règle de prudence qui protège les élèves comme les personnels. On ne demande jamais à un élève de recueillir des preuves."
      }
    ]
  };

  if (typeof window !== 'undefined') {
    window.CAPES_LESSONS = CAPES_LESSONS;
    window.CAPES_CHAPTERS = CAPES_CHAPTERS;
    if (!window.MATHS_CHAPTERS) window.MATHS_CHAPTERS = [];
    // L'index de js/data/chapters_licence.js sert à la navigation avant ce fichier : on complète ses entrées.
    CAPES_CHAPTERS.forEach((chapter) => {
      const known = window.MATHS_CHAPTERS.find((c) => c.id === chapter.id);
      if (known) Object.assign(known, chapter);
      else window.MATHS_CHAPTERS.push(chapter);
    });

    if (!window.MATHS_EXERCISES) window.MATHS_EXERCISES = {};
    Object.assign(window.MATHS_EXERCISES, CAPES_EXERCISES);
    window.CAPES_EXERCISES = CAPES_EXERCISES;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CAPES_LESSONS, CAPES_CHAPTERS, CAPES_EXERCISES };
  }
})();
