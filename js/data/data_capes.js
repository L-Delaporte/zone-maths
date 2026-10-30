/**
 * DATA_CAPES - Fiches de préparation complètes pour les oraux du CAPES et de l'Agrégation de Mathématiques
 * Conforme aux rapports du jury des concours et aux maquettes d'évaluation officielles.
 */

(function () {
  'use strict';

  const CAPES_LESSONS = [
    {
      id: 'capes-01',
      num: 'Leçon 01',
      title: "Équations différentielles linéaires : résolution, structure et modélisation",
      domain: "Analyse",
      level: "CAPES / Agrégation",
      prerequisites: [
        "Dérivation, calcul de primitives et intégration",
        "Espaces vectoriels, dimension finie et sous-espaces affines",
        "Exponentielle réelle et complexe"
      ],
      plan: [
        {
          part: "I. Équations scalaires linéaires du 1er ordre à coefficients continus",
          content: "Équation homogène $y' + a(t)y = 0$, résolvante $e^{-A(t)}$. Structure affine de l'ensemble des solutions de $y' + a(t)y = b(t)$. Méthode de variation de la constante de Lagrange. Problème de Cauchy et unicité."
        },
        {
          part: "II. Équations linéaires du 2nd ordre à coefficients constants",
          content: "Équation $a y'' + b y' + c y = f(t)$. Équation caractéristique $ar^2 + br + c = 0$. Base de solutions $(\\Delta > 0, \\Delta = 0, \\Delta < 0)$. Recherche de solution particulière par exponentielle-polynôme et résonance."
        },
        {
          part: "III. Systèmes différentiels linéaires et modélisations physiques",
          content: "Système $Y' = AY$. Exponentielle de matrice $\\exp(tA)$. Oscillateur harmonique amorti, circuit RLC et modèle proies-prédateurs linéarisé."
        }
      ],
      keyTheorem: {
        title: "Théorème de structure de l'ensemble des solutions d'une équation linéaire",
        statement: "Soit $I \\subset \\mathbb{R}$ un intervalle, $a, b \\in \\mathcal{C}(I, \\mathbb{R})$. L'ensemble $\\mathcal{S}_H$ des solutions de $(E_H) : y' + a(t)y = 0$ est une droite vectorielle engendrée par $t \\mapsto \\exp(-A(t))$ où $A' = a$. L'ensemble $\\mathcal{S}$ des solutions de $(E) : y' + a(t)y = b(t)$ est la droite affine $y_0 + \\mathcal{S}_H$ où $y_0$ est une solution particulière.",
        proof: "1. Si $y$ est solution de $(E_H)$, on pose $z(t) = y(t)e^{A(t)}$. Alors $z'(t) = (y'(t) + a(t)y(t))e^{A(t)} = 0$. Comme $I$ est un intervalle, $z$ est constante : $z(t) = C$, donc $y(t) = C e^{-A(t)}$. Réciproquement, ces fonctions sont solutions évidentes. L'application linéaire $y \\mapsto y(t_0)$ est un isomorphisme de $\\mathcal{S}_H$ sur $\\mathbb{R}$, donc $\\dim(\\mathcal{S}_H) = 1$.\n2. Si $y_1, y_2$ sont solutions de $(E)$, $(y_1 - y_2)' + a(t)(y_1 - y_2) = b(t) - b(t) = 0$, donc $y_1 - y_2 \\in \\mathcal{S}_H$, d'où $\\mathcal{S} = y_0 + \\mathcal{S}_H$."
      },
      developments: [
        "Résolution complète de l'oscillateur harmonique avec frottement fluide et étude du régime critique.",
        "Calcul explicite de l'exponentielle d'une matrice $2 \\times 2$ via Cayley-Hamilton et application au système différentiel."
      ],
      juryTips: [
        "Toujours préciser l'intervalle $I$ de travail ! Si $a(t)$ s'annule au dénominateur, il faut résoudre sur chaque intervalle maximal puis raccorder.",
        "Attention au piège de l'existence globale : pour les équations non linéaires ($y' = y^2$), le temps d'explosion peut être fini ($y(t) = 1/(1-t)$)."
      ]
    },
    {
      id: 'capes-02',
      num: 'Leçon 02',
      title: "Réduction des endomorphismes : éléments propres, diagonalisation et trigonalisation",
      domain: "Algèbre",
      level: "CAPES / Agrégation",
      prerequisites: [
        "Espaces vectoriels de dimension finie",
        "Polynômes, racines et factorisation sur $\\mathbb{R}$ et $\\mathbb{C}$",
        "Déterminant et matrices semblables"
      ],
      plan: [
        {
          part: "I. Sous-espaces stables et éléments propres",
          content: "Définition de valeur propre, vecteur propre, spectre $\\text{Sp}(u)$. Sous-espaces propres $E_\\lambda = \\ker(u - \\lambda \\text{id})$. La somme des sous-espaces propres est toujours directe."
        },
        {
          part: "II. Polynôme caractéristique et critères de diagonalisabilité",
          content: "Polynôme caractéristique $P_u(X) = \\det(X \\text{id} - u)$. Multiplicité algébrique $m_\\lambda$ et géométrique $d_\\lambda = \\dim(E_\\lambda)$. Théorème fondamental : $u$ est diagonalisable si et seulement si $P_u$ est scindé et pour toute valeur propre, $\\dim(E_\\lambda) = m_\\lambda$."
        },
        {
          part: "III. Polynômes annulateurs, lemme des noyaux et trigonalisation",
          content: "Théorème de Cayley-Hamilton. Polynôme minimal $\\pi_u$. Théorème : $u$ est diagonalisable ssi son polynôme minimal est scindé à racines simples. Théorème de trigonalisation (scindé sur le corps)."
        }
      ],
      keyTheorem: {
        title: "Somme directe des sous-espaces propres",
        statement: "Soit $u \\in \\mathcal{L}(E)$ et $\\lambda_1, \\dots, \\lambda_k$ des valeurs propres deux à deux distinctes de $u$. Alors la somme des sous-espaces propres $E_{\\lambda_1} + \\dots + E_{\\lambda_k}$ est directe.",
        proof: "Par récurrence sur $k \\ge 1$. Pour $k=1$, c'est immédiat. Supposons la propriété vraie au rang $k-1$. Soient $v_i \\in E_{\\lambda_i}$ tels que $\\sum_{i=1}^k v_i = 0$. On applique $u$ : $\\sum_{i=1}^k \\lambda_i v_i = 0$. On soustrait $\\lambda_k \\sum v_i = 0$ : $\\sum_{i=1}^{k-1} (\\lambda_i - \\lambda_k) v_i = 0$. Par hypothèse de récurrence, les sous-espaces sont en somme directe, donc pour tout $i \\in \\{1, \\dots, k-1\\}$, $(\\lambda_i - \\lambda_k) v_i = 0$. Comme les valeurs propres sont distinctes, $\\lambda_i - \\lambda_k \\ne 0$, donc $v_i = 0$. Il reste $v_k = 0$. La somme est bien directe."
      },
      developments: [
        "Démonstration du lemme des noyaux et application à la diagonalisation par polynôme annulateur.",
        "Calcul des puissances de la matrice de Fibonacci et terme général de la suite de Fibonacci."
      ],
      juryTips: [
        "Ne pas confondre polynôme caractéristique et polynôme minimal !",
        "Savoir justifier rigoureusement pourquoi une matrice symétrique réelle est toujours diagonalisable."
      ]
    },
    {
      id: 'capes-03',
      num: 'Leçon 03',
      title: "Séries de Fourier : coefficients, convergence et formule de Parseval",
      domain: "Analyse",
      level: "CAPES / Agrégation",
      prerequisites: [
        "Espaces préhilbertiens et orthogonalité",
        "Intégration des fonctions continues par morceaux",
        "Suites et séries de fonctions, convergence uniforme"
      ],
      plan: [
        {
          part: "I. Coefficients de Fourier et système trigonométrique",
          content: "Fonctions $T$-périodiques continues par morceaux. Famille orthonormée trigonométrique $(e^{i n \\omega t})_{n \\in \\mathbb{Z}}$ sur $[0, T]$. Coefficients exponentiels $c_n(f)$ et réels $a_n(f), b_n(f)$."
        },
        {
          part: "II. Théorèmes de convergence ponctuelle et uniforme",
          content: "Théorème de Dirichlet (régularité $\\mathcal{C}^1$ par morceaux). Convergence ponctuelle vers $\\frac{f(x^+) + f(x^-)}{2}$. Théorème de convergence normale pour $f \\in \\mathcal{C}^1$ périodique."
        },
        {
          part: "III. Égalité de Parseval et convergence en moyenne quadratique",
          content: "Théorème de Parseval : $\\frac{1}{T} \\int_0^T |f|^2 = \\sum |c_n|^2$. Densité trigonométrique dans $L^2$. Calculs de sommes de séries remarquables (somme de Bâle $\\sum 1/n^2 = \\pi^2/6$)."
        }
      ],
      keyTheorem: {
        title: "Égalité de Parseval pour une fonction continue par morceaux",
        statement: "Soit $f : \\mathbb{R} \\to \\mathbb{C}$ $2\\pi$-périodique et continue par morceaux. Alors $\\frac{1}{2\\pi} \\int_{-\\pi}^{\\pi} |f(t)|^2 \\, dt = \\sum_{n=-\\infty}^{+\\infty} |c_n(f)|^2 = a_0^2 + \\frac{1}{2} \\sum_{n=1}^{+\\infty} (a_n^2 + b_n^2)$.",
        proof: "C'est l'inégalité de Bessel appliquée à la famille orthonormée $(e^{int})_{n \\in \\mathbb{Z}}$ couplée à la densité des polynômes trigonométriques dans $L^2([-\\pi, \\pi])$ (Théorème de Weierstrass trigonométrique ou approximation par le noyau de Fejér)."
      },
      developments: [
        "Calcul de $\\sum_{n=1}^\\infty \\frac{1}{n^2} = \\frac{\\pi^2}{6}$ et $\\sum_{n=1}^\\infty \\frac{1}{n^4} = \\frac{\\pi^4}{90}$ via le développement en série de Fourier de $f(x) = x^2$.",
        "Inégalité isopérimétrique dans le plan démontrée par les coefficients de Fourier de Hurwitz."
      ],
      juryTips: [
        "Maîtriser impérativement le phénomène de Gibbs : aux discontinuités, la série de Fourier dépasse de ~9 % le saut de la fonction !",
        "Ne pas affirmer que la série de Fourier converge en tout point pour toute fonction continue (phénomène de Du Bois-Reymond)."
      ]
    },
    {
      id: 'capes-04',
      num: 'Leçon 04',
      title: "Variables aléatoires réelles discrètes : loi, espérance, variance et lois classiques",
      domain: "Probabilités",
      level: "CAPES / Agrégation",
      prerequisites: [
        "Espaces probabilisés discrets, axiomes de Kolmogorov",
        "Séries numériques à termes positifs",
        "Dénombrement et combinaisons"
      ],
      plan: [
        {
          part: "I. Définition et caractérisation d'une v.a.r. discrète",
          content: "Espace $(\\Omega, \\mathcal{T}, P)$. Variable aléatoire $X(\\Omega)$ au plus dénombrable. Loi de probabilité $P(X = x_k)$. Fonction de répartition $F_X(t) = P(X \\le t)$."
        },
        {
          part: "II. Moments d'une variable aléatoire",
          content: "Espérance $E(X) = \\sum x_k P(X = x_k)$ (absolue convergence). Théorème de transfert $E(g(X))$. Variance $V(X) = E(X^2) - E(X)^2$, écart-type. Inégalité de Bienaymé-Tchebychev."
        },
        {
          part: "III. Lois usuelles discrètes et théorèmes limites",
          content: "Loi de Bernoulli, Binomiale $\\mathcal{B}(n, p)$, Géométrique $\\mathcal{G}(p)$ (absence de mémoire), Poisson $\\mathcal{P}(\\lambda)$. Loi des grands nombres."
        }
      ],
      keyTheorem: {
        title: "Inégalité de Bienaymé-Tchebychev",
        statement: "Soit $X$ une v.a.r. discrète admettant une variance. Alors pour tout $\\varepsilon > 0$, $P(|X - E(X)| \\ge \\varepsilon) \\le \\frac{V(X)}{\\varepsilon^2}$.",
        proof: "Soit $Y = (X - E(X))^2$. $Y$ est positive. D'après l'inégalité de Markov appliquée à $Y$ pour $\\alpha = \\varepsilon^2 > 0$ : $P(Y \\ge \\varepsilon^2) \\le \\frac{E(Y)}{\\varepsilon^2} = \\frac{V(X)}{\\varepsilon^2}$. Or l'événement $\{Y \\ge \\varepsilon^2\}$ est exactement $\{|X - E(X)| \\ge \\varepsilon\}$, d'où le résultat."
      },
      developments: [
        "Convergence de la loi binomiale $\\mathcal{B}(n, \\lambda/n)$ vers la loi de Poisson $\\mathcal{P}(\\lambda)$ (loi des événements rares).",
        "Problème du collectionneur de vignettes (espérance et temps d'attente via la loi géométrique)."
      ],
      juryTips: [
        "Toujours vérifier la sommabilité absolue avant d'écrire une espérance !",
        "Bien connaître la propriété d'absence de mémoire qui caractérise la loi géométrique parmi les lois discrètes entières."
      ]
    },
    {
      id: 'capes-05',
      num: 'Leçon 05',
      title: "Espaces préhilbertiens réels, orthogonalité et projections orthogonales",
      domain: "Géométrie & Algèbre",
      level: "CAPES / Agrégation",
      prerequisites: [
        "Espaces vectoriels sur $\\mathbb{R}$",
        "Formes bilinéaires symétriques et formes quadratiques"
      ],
      plan: [
        {
          part: "I. Produit scalaire et norme euclidienne",
          content: "Forme bilinéaire symétrique définie positive. Inégalité de Cauchy-Schwarz et cas d'égalité. Inégalité triangulaire (norme associée)."
        },
        {
          part: "II. Orthogonalité et familles orthonormales",
          content: "Vecteurs orthogonaux, sous-espaces orthogonaux $F^\\perp$. Familles libres orthonormales. Procédé d'orthonormalisation de Gram-Schmidt."
        },
        {
          part: "III. Projection orthogonale sur un sous-espace de dimension finie",
          content: "Théorème de projection sur un sous-espace $F$ : $E = F \\oplus F^\\perp$. Caractérisation par la distance minimale $\\min_{y \\in F} \\|x - y\\|$. Moindres carrés."
        }
      ],
      keyTheorem: {
        title: "Inégalité de Cauchy-Schwarz",
        statement: "Dans un espace préhilbertien réel muni du produit scalaire $\\langle \\cdot, \\cdot \\rangle$ et de la norme $\\|\\cdot\\|$, on a pour tous $x, y \\in E$ : $|\\langle x, y \\rangle| \\le \\|x\\| \\|y\\|$, avec égalité ssi $(x, y)$ est liée.",
        proof: "Si $y = 0$, l'inégalité est triviale. Supposons $y \\ne 0$. Pour tout $\\lambda \\in \\mathbb{R}$, $0 \\le \\|x + \\lambda y\\|^2 = \\|x\\|^2 + 2\\lambda \\langle x, y \\rangle + \\lambda^2 \\|y\\|^2$. Ce trinôme en $\\lambda$ du second degré garde un signe constant, son discriminant réduit est donc négatif ou nul : $\\Delta' = \\langle x, y \\rangle^2 - \\|x\\|^2 \\|y\\|^2 \\le 0$, d'où $|\\langle x, y \\rangle| \\le \\|x\\| \\|y\\|$. L'égalité correspond à un discriminant nul, c'est-à-dire l'existence d'une racine réelle $\\lambda_0$ telle que $\\|x + \\lambda_0 y\\|^2 = 0 \\iff x = -\\lambda_0 y$ (famille liée)."
      },
      developments: [
        "Méthode des moindres carrés pour la régression linéaire et projection orthogonale.",
        "Polynômes orthogonaux de Legendre obtenus par Gram-Schmidt sur $\\mathbb{R}[X]$ avec $\\langle P, Q \\rangle = \\int_{-1}^1 P Q$."
      ],
      juryTips: [
        "Attention : $F^{\\perp\\perp} = F$ n'est vrai en général qu'en dimension finie ou si $F$ est un sous-espace fermé dans un espace de Hilbert.",
        "Toujours expliciter l'expression de la projection orthogonale dans une base orthonormée : $p_F(x) = \\sum \\langle x, e_i \\rangle e_i$."
      ]
    },
    {
      id: 'capes-06',
      num: 'Leçon 06',
      title: "Intégrale de Riemann, primitives et intégrales à paramètres",
      domain: "Analyse",
      level: "CAPES / Agrégation",
      prerequisites: [
        "Continuité et fonctions réglées",
        "Dérivation et théorème des accroissements finis",
        "Topologie de $\\mathbb{R}$"
      ],
      plan: [
        {
          part: "I. Construction de l'intégrale de Riemann sur un segment",
          content: "Fonctions en escalier, subdivisions. Intégrales inférieure et supérieure de Darboux. Critère de Riemann. Intégrabilité des fonctions continues et continues par morceaux."
        },
        {
          part: "II. Théorème fondamental de l'analyse et calcul de primitives",
          content: "Fonction $x \\mapsto \\int_a^x f(t) \\, dt$. Relation fondamentale : $F'(x) = f(x)$. Intégration par parties, changement de variable $\\mathcal{C}^1$."
        },
        {
          part: "III. Intégrales dépendant d'un paramètre",
          content: "Continuité sous le signe intégral (théorème de continuité). Dérivation sous le signe intégral (théorème de Leibniz). Intégrale de Gauss $\\int_{-\\infty}^{+\\infty} e^{-t^2} \\, dt = \\sqrt{\\pi}$."
        }
      ],
      keyTheorem: {
        title: "Théorème Fondamental de l'Analyse",
        statement: "Soit $f : [a, b] \\to \\mathbb{R}$ continue. Alors la fonction $F : x \\mapsto \\int_a^x f(t) \\, dt$ est dérivable sur $[a, b]$ et pour tout $x \\in [a, b]$, $F'(x) = f(x)$.",
        proof: "Soit $x_0 \\in [a, b]$ et $h \\ne 0$. Le taux d'accroissement vaut $\\frac{F(x_0 + h) - F(x_0)}{h} = \\frac{1}{h} \\int_{x_0}^{x_0 + h} f(t) \\, dt$. Donc $\\frac{F(x_0 + h) - F(x_0)}{h} - f(x_0) = \\frac{1}{h} \\int_{x_0}^{x_0 + h} (f(t) - f(x_0)) \\, dt$. Soit $\\varepsilon > 0$. Par continuité de $f$ en $x_0$, $\\exists \\eta > 0$ tel que $|t - x_0| \\le \\eta \\implies |f(t) - f(x_0)| \\le \\varepsilon$. Pour $|h| \\le \\eta$ : $|\\frac{F(x_0+h)-F(x_0)}{h} - f(x_0)| \\le \\frac{1}{|h|} |h| \\varepsilon = \\varepsilon$. Donc $F'(x_0) = f(x_0)$."
      },
      developments: [
        "Calcul de l'intégrale de Dirichlet $\\int_0^{+\\infty} \\frac{\\sin t}{t} \\, dt = \\frac{\\pi}{2}$ via une intégrale à paramètre.",
        "Formule de Stirling démontrée par la méthode des intégrales de Wallis."
      ],
      juryTips: [
        "Bien distinguer continuité simple et continuité uniforme sur un segment (Théorème de Heine).",
        "Pour dériver une intégrale à paramètre, ne pas oublier l'hypothèse de domination locale sur tout compact !"
      ]
    },
    {
      id: 'capes-07',
      num: 'Leçon 07',
      title: "Groupe symétrique, signature et applications aux déterminants",
      domain: "Algèbre",
      level: "CAPES / Agrégation",
      prerequisites: [
        "Groupes, sous-groupes et morphismes",
        "Relations d'équivalence et orbites",
        "Espaces vectoriels"
      ],
      plan: [
        {
          part: "I. Structure du groupe symétrique $\\mathcal{S}_n$",
          content: "Définition, cardinal $n!$. Cycles, transpositions, décomposition en produit de cycles à supports disjoints. Générateurs : les transpositions, les transpositions $(1, 2), (2, 3), \\dots$, et $(1, 2)$ avec $(1, 2, \\dots, n)$."
        },
        {
          part: "II. Signature d'une permutation",
          content: "Inversions, polynôme de Vandermonde. Morphisme de signature $\\varepsilon : \\mathcal{S}_n \\to \\{-1, +1\\}$. Groupe alterné $\\mathcal{A}_n = \\ker(\\varepsilon)$ d'indice 2 et de cardinal $n!/2$."
        },
        {
          part: "III. Formes multilinéaires alternées et déterminant",
          content: "Définition axiomatique du déterminant dans une base. Formule de Leibniz $\\det(A) = \\sum_{\\sigma \\in \\mathcal{S}_n} \\varepsilon(\\sigma) \\prod a_{\\sigma(i), i}$. Règle de Cramer et comatrice."
        }
      ],
      keyTheorem: {
        title: "Existence et unicité de la signature",
        statement: "Il existe un unique morphisme de groupes non trivial de $\\mathcal{S}_n$ dans $(\\{-1, +1\\}, \\times)$ pour $n \\ge 2$.",
        proof: "Toutes les transpositions sont conjuguées dans $\\mathcal{S}_n$, donc ont la même image par tout morphisme vers un groupe abélien. Comme elles engendrent $\\mathcal{S}_n$ et sont d'ordre 2, l'image d'une transposition est $\\pm 1$. L'existence se démontre en considérant l'action sur le polynôme de Vandermonde $P(X_1, \\dots, X_n) = \\prod_{i < j} (X_j - X_i)$ : $\\sigma(P) = \\varepsilon(\\sigma) P$ avec $\\varepsilon(\\sigma) = \\prod_{i < j} \\frac{\\sigma(j) - \\sigma(i)}{j - i} \\in \\{-1, +1\\}$."
      },
      developments: [
        "Calcul du déterminant de Vandermonde et application à l'interpolation polynomiale de Lagrange.",
        "Simplicité du groupe alterné $\\mathcal{A}_5$ et insolvabilité par radicaux des équations de degré 5."
      ],
      juryTips: [
        "Savoir calculer rapidement la signature d'un cycle de longueur $L$ : $\\varepsilon(c) = (-1)^{L - 1}$.",
        "Ne jamais hésiter sur la décomposition en cycles disjoints et l'ordre d'une permutation (PPCM des longueurs des cycles)."
      ]
    },
    {
      id: 'capes-08',
      num: 'Leçon 08',
      title: "Convexité des fonctions réelles d'une variable réelle et applications",
      domain: "Analyse",
      level: "CAPES / Agrégation",
      prerequisites: [
        "Dérivation et continuité",
        "Espaces affines et barycentres"
      ],
      plan: [
        {
          part: "I. Définitions et caractérisations géométriques",
          content: "Ensembles convexes d'un intervalle. Fonction convexe : $f((1-t)x + ty) \\le (1-t)f(x) + tf(y)$. Épigraphe convexe. Pente des cordes (lemme des trois cordes)."
        },
        {
          part: "II. Caractérisations différentielles",
          content: "Fonction $\\mathcal{C}^1$ convexe ssi la courbe est au-dessus de toutes ses tangentes ($f(x) \\ge f(x_0) + f'(x_0)(x - x_0)$). Fonction $\\mathcal{C}^2$ convexe ssi $f'' \\ge 0$ sur $I$."
        },
        {
          part: "III. Inégalités de convexité et optimisation",
          content: "Inégalité de Jensen : $f(\\sum p_i x_i) \\le \\sum p_i f(x_i)$. Inégalités arithmético-géométrique, de Hölder et de Minkowski. Tout minimum local est un minimum global."
        }
      ],
      keyTheorem: {
        title: "Inégalité de Jensen",
        statement: "Soit $f : I \\to \\mathbb{R}$ convexe. Pour tous $x_1, \\dots, x_n \\in I$ et tous coefficients $p_1, \\dots, p_n \\in [0, 1]$ avec $\\sum_{i=1}^n p_i = 1$, on a : $f\\left(\\sum_{i=1}^n p_i x_i\\right) \\le \\sum_{i=1}^n p_i f(x_i)$.",
        proof: "Par récurrence sur $n \\ge 1$. Pour $n=1$ et $n=2$, c'est la définition. Supposons la propriété vraie pour $n-1$. Soient $p_1, \\dots, p_n$. Si $p_n = 1$, c'est immédiat. Sinon, $1 - p_n > 0$. On écrit $\\sum_{i=1}^n p_i x_i = (1 - p_n) \\left(\\sum_{i=1}^{n-1} \\frac{p_i}{1 - p_n} x_i\\right) + p_n x_n$. Par convexité pour 2 points : $f(\\sum p_i x_i) \\le (1 - p_n) f(\\sum_{i=1}^{n-1} \\frac{p_i}{1-p_n} x_i) + p_n f(x_n)$. Les poids $\\frac{p_i}{1-p_n}$ somment à 1, on applique l'hypothèse de récurrence à $n-1$ points, ce qui donne immédiatement l'inégalité de Jensen."
      },
      developments: [
        "Inégalité arithmético-géométrique et inégalité de Carleman.",
        "Convergence de la méthode de Newton pour une fonction convexe et estimation de l'erreur quadratique."
      ],
      juryTips: [
        "Une fonction convexe sur un intervalle ouvert est automatiquement continue et dérivable à gauche et à droite en tout point !",
        "Faire attention aux intervalles semi-ouverts où la fonction peut être discontinue aux bornes."
      ]
    },
    {
      id: 'capes-09',
      num: 'Leçon 09',
      title: "Suites et séries numériques : convergence, sommabilité et critères",
      domain: "Analyse",
      level: "CAPES / Agrégation",
      prerequisites: [
        "Axiome de la borne supérieure dans $\\mathbb{R}$",
        "Suites réelles et complexes, limites"
      ],
      plan: [
        {
          part: "I. Séries à termes positifs",
          content: "Convergence ssi la suite des sommes partielles est majorée. Critères de comparaison, équivalents. Règle de d'Alembert et règle de Cauchy. Séries de Riemann $\\sum 1/n^\\alpha$ et intégrale de comparaison."
        },
        {
          part: "II. Séries semi-convergentes et séries alternées",
          content: "Convergence absolue implique convergence. Règle de Leibniz pour les séries alternées et majoration du reste $|R_n| \\le |u_{n+1}|$. Théorème de réarrangement de Riemann."
        },
        {
          part: "III. Produits de Cauchy et sommabilité",
          content: "Produit de Cauchy de deux séries absolument convergentes. Familles sommables dans $\\mathbb{R}$ ou $\\mathbb{C}$, théorème de Fubini discret."
        }
      ],
      keyTheorem: {
        title: "Critère spécial des séries alternées (CSSA)",
        statement: "Soit $(u_n)$ une suite décroissante tendant vers 0. Alors la série alternée $\\sum (-1)^n u_n$ converge, et pour tout $n$, le reste $R_n = \\sum_{k=n+1}^{+\\infty} (-1)^k u_k$ vérifie $|R_n| \\le u_{n+1}$ avec le signe de $(-1)^{n+1}$.",
        proof: "Soit $S_n$ les sommes partielles. On étudie les sous-suites $S_{2n}$ et $S_{2n+1}$ : $S_{2n+2} - S_{2n} = u_{2n+2} - u_{2n+1} \\le 0$ (décroissante). $S_{2n+3} - S_{2n+1} = -u_{2n+3} + u_{2n+2} \\ge 0$ (croissante). De plus, $S_{2n+1} - S_{2n} = -u_{2n+1} \\to 0$. Les deux sous-suites sont adjacentes, donc convergent vers une même limite $S$. Le reste vérifie l'encadrement $S_{2n+1} \\le S \\le S_{2n}$, d'où la majoration du reste."
      },
      developments: [
        "Théorème de réarrangement de Riemann : toute série semi-convergente peut être réarrangée pour converger vers n'importe quel réel ou diverger.",
        "Développement asymptotique de la série harmonique $H_n = \\ln(n) + \\gamma + \\frac{1}{2n} + o(1/n)$."
      ],
      juryTips: [
        "Un équivalent $u_n \\sim v_n$ ne préserve la convergence que pour des séries à termes de SIGNE CONSTANT ! (Contre-exemple : $u_n = \\frac{(-1)^n}{\\sqrt{n}} + \\frac{1}{n}$).",
        "Savoir expliquer intuitivement pourquoi la convergence absolue permet de réordonner les termes sans changer la somme."
      ]
    },
    {
      id: 'capes-10',
      num: 'Leçon 10',
      title: "Arithmétique dans Z : divisibilité, pgcd, congruences et cryptographie RSA",
      domain: "Algèbre & Arithmétique",
      level: "CAPES / Agrégation",
      prerequisites: [
        "Ensemble des entiers $\\mathbb{Z}$ et division euclidienne",
        "Groupes finis et anneaux"
      ],
      plan: [
        {
          part: "I. Divisibilité et algorithme d'Euclide",
          content: "Division euclidienne, sous-groupes de $\\mathbb{Z}$ (de la forme $n\\mathbb{Z}$). PGCD, PPCM. Algorithme d'Euclide et Euclide étendu. Identité de Bézout et lemme de Gauss."
        },
        {
          part: "II. Nombres premiers et décomposition",
          content: "Lemme d'Euclide (si $p \\mid ab$ alors $p \\mid a$ ou $p \\mid b$). Théorème fondamental de l'arithmétique (existence et unicité de la décomposition en facteurs premiers). Infinité des nombres premiers."
        },
        {
          part: "III. Congruences, anneau Z/nZ et cryptographie",
          content: "Structure d'anneau de $\\mathbb{Z}/n\\mathbb{Z}$. Éléments inversibles $(\\mathbb{Z}/n\\mathbb{Z})^\\times$ et indicateur d'Euler $\\varphi(n)$. Petit théorème de Fermat et théorème d'Euler. Système cryptographique RSA (clé publique, clé privée, signature)."
        }
      ],
      keyTheorem: {
        title: "Théorème de Bézout",
        statement: "Deux entiers $a, b \\in \\mathbb{Z}$ sont premiers entre eux ssi il existe $u, v \\in \\mathbb{Z}$ tels que $au + bv = 1$.",
        proof: "L'ensemble $I = a\\mathbb{Z} + b\\mathbb{Z}$ est un sous-groupe de $(\\mathbb{Z}, +)$. Comme tous les sous-groupes de $\\mathbb{Z}$ sont de la forme $d\\mathbb{Z}$, il existe un unique $d \\in \\mathbb{N}$ tel que $a\\mathbb{Z} + b\\mathbb{Z} = d\\mathbb{Z}$. On montre que $d = \\text{PGCD}(a, b)$ : $a \\in d\\mathbb{Z} \\implies d \\mid a$, $b \\in d\\mathbb{Z} \\implies d \\mid b$, et tout diviseur commun divise toute combinaison linéaire donc divise $d$. Ainsi, $\\text{PGCD}(a, b) = 1 \\iff 1 \\in a\\mathbb{Z} + b\\mathbb{Z} \\iff \\exists u, v \\in \\mathbb{Z},\\; au + bv = 1$."
      },
      developments: [
        "Cryptosystème RSA : protocole complet, preuve de déchiffrement via le petit théorème de Fermat et complexité de factorisation.",
        "Théorème des restes chinois et application à la résolution de systèmes de congruences simultanés."
      ],
      juryTips: [
        "Ne jamais oublier la condition de primalité entre eux dans le lemme de Gauss !",
        "Maîtriser le calcul de l'inverse modulaire via l'algorithme d'Euclide étendu au tableau."
      ]
    },
    {
      id: 'capes-oral2',
      num: 'Oral 2',
      title: "Épreuve d'entretien : Éthique professionnelle, laïcité et valeurs de la République",
      domain: "Éthique & Laïcité",
      level: "CAPES / Agrégation",
      prerequisites: [
        "Vademecum « La laïcité à l'école » (Conseil des sages de la laïcité, Éduscol)",
        "Loi du 9 décembre 1905 concernant la séparation des Églises et de l'État",
        "Loi n° 2004-228 du 15 mars 2004 (art. L. 141-5-1 du Code de l'éducation)",
        "Loi n° 83-634 (art. 25) portant droits et obligations des fonctionnaires",
        "Arrêté du 1er juillet 2013 (Référentiel des compétences professionnelles du professorat)"
      ],
      plan: [
        {
          part: "I. Cadre constitutionnel, légal et principes républicains",
          content: "Principe républicain d'indivisibilité, de laïcité, de démocratie et d'égalité (Constitution de 1958, art. 1). Loi de 1905 : séparation des Églises et de l'État, liberté de conscience et neutralité de la puissance publique. Loi du 15 mars 2004 (art. L. 141-5-1 du Code de l'éducation) : interdiction pour les élèves des écoles, collèges et lycées publics de porter des signes ou tenues manifestant ostensiblement une appartenance religieuse. Loi de 2019 pour une École de la confiance (art. L. 141-5-2) : protection contre les pressions et le prosélytisme aux abords des établissements."
        },
        {
          part: "II. Statuts juridiques et obligations des acteurs de la communauté éducative",
          content: "1. Enseignants et agents publics : stricte obligation de neutralité religieuse, politique et commerciale dans l'exercice de leurs fonctions (jurisprudence constante CE avis Marteaux 2000, CEDH Dahlab et Ebrahimian). Devoir d'impartialité, de réserve, de probité et d'obéissance hiérarchique. Interdiction absolue du prosélytisme.\n2. Élèves : liberté de conscience absolue, apprentissage de l'esprit critique et distinction des savoirs et des croyances (art. 6 et 12 de la Charte de la laïcité). Obligation d'assiduité (art. L. 511-1). Respect des programmes nationaux obligatoires (art. R. 511-11).\n3. Parents d'élèves : usagers du service public non soumis au devoir de neutralité dans l'enceinte pour chercher leur enfant. En revanche, obligation de neutralité dès lors qu'ils animent ou encadrent des activités pédagogiques en classe (CAA Lyon 2019) et devoir de réserve/respect du vivre-ensemble lors des sorties scolaires."
        },
        {
          part: "III. Gestion des contestations d'enseignements et cas de vie scolaire",
          content: "Contestations de contenus disciplinaires (sciences, histoire, probabilités/hasard, représentations figurées en géométrie) : fermeté sur les programmes, distinction fondamentale entre la rigueur du savoir scientifique démontrable et la liberté des croyances intimes. Refus d'activités scolaires ou d'EPS : aucune dispense pour motif religieux (CEDH arrêt Osmanoglu c. Suisse 2017). Restauration scolaire : compétence des collectivités, absence de droit aux repas confessionnels, interdiction des PAI pour convenance religieuse (strictement réservés aux troubles de santé invalidants)."
        },
        {
          part: "IV. Posture professionnelle et chaîne institutionnelle de signalement",
          content: "La démarche de résolution en 3 temps devant le jury : 1. Réponse immédiate et posée dans la classe (désamorcer, rappeler la règle sans débat théologique, ne pas stigmatiser l'élève). 2. Dialogue éducatif avec l'élève et la famille mené par le chef d'établissement (dialogue qui n'est pas une négociation de la règle). 3. Concertation en équipe et recours institutionnel : signalement sur l'application « Faits établissement », saisine de l'Équipe Académique Valeurs de la République (EAVR), information préoccupante si santé d'un mineur compromise (art. 375 Code civil)."
        }
      ],
      keyTheorem: {
        title: "Principe fondamental de neutralité du fonctionnaire et liberté de conscience",
        statement: "« Le fonctionnaire exerce ses fonctions dans le respect du principe de laïcité. À ce titre, il s'abstient notamment de manifester, dans l'exercice de ses fonctions, ses opinions religieuses. Le fonctionnaire traite de façon égale toutes les personnes et respecte leur liberté de conscience et leur dignité. » (Loi n° 83-634, art. 25 modifié par la loi du 20 avril 2016)",
        proof: "• **Jurisprudence constante du Conseil d'État (Avis Marteaux, 3 mai 2000, n° 217017)** :\nLe principe de laïcité de l'enseignement public, élément de la laïcité de l'État et de la neutralité des services publics, fait obstacle à ce que les agents du service public de l'enseignement disposent, dans le cadre du service public, du droit de manifester leurs croyances religieuses, notamment par le port d'un signe destiné à marquer leur appartenance confessionnelle.\n\n• **Jurisprudence de la Cour Européenne des Droits de l'Homme (CEDH, 26 février 2016, Ebrahimian c. France)** :\nLa CEDH a validé la primauté absolue de l'exigence de neutralité et d'impartialité de l'État sur la manifestation des convictions religieuses de ses agents, constatant l'absence de conciliation possible entre celles-ci et l'exercice d'une fonction publique."
      },
      developments: [
        "Analyse de la jurisprudence sur les signes religieux ostensibles par nature (voile, kippa, grande croix) vs signes devenus ostensibles par le comportement de l'élève (bandana, jupes longues portées de manière systématique et revendicative - CE 2007 et CAA Paris 2017).",
        "Régime juridique des parents d'élèves accompagnateurs de sorties scolaires (Étude du CE de 2013, jugements TA Nice/Amiens 2015, arrêt CAA de Lyon du 23 juillet 2019 sur la neutralité en classe)."
      ],
      juryTips: [
        "Ne jamais opposer laïcité et liberté : la laïcité n'est pas une opinion ni une interdiction des religions, c'est le cadre républicain protecteur qui garantit la liberté de conscience de chacun, l'égalité de tous et la neutralité de l'État.",
        "Devant le jury du CAPES, structurer impérativement sa réponse en 3 niveaux : 1° Le cadre juridique et réglementaire (textes officiels) ; 2° L'action pédagogique immédiate (fermeté bienveillante, pas d'escalade ni d'humiliation) ; 3° Le travail en équipe et l'alerte institutionnelle (CPE, chef d'établissement, signalement Faits établissement, équipe académique Valeurs de la République).",
        "Rappeler fermement que le dialogue avec l'élève et la famille, obligatoire avant toute mesure disciplinaire, n'est JAMAIS une négociation de la règle républicaine."
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
        solution: "Par décomposition de Jordan ou Dunford de $A$, les coefficients de la matrice résolvante $\\exp(tA)$ sont des combinaisons linéaires de fonctions de la forme $t^k e^{\\lambda t} = t^k e^{\\mathrm{Re}(\\lambda)t} e^{i \\mathrm{Im}(\\lambda)t}$ où $\\lambda \\in \\mathrm{Sp}(A)$ et $0 \\le k \\le n-1$. Ces termes tendent vers 0 quand $t \\to +\\infty$ si et seulement si $\\mathrm{Re}(\\lambda) < 0$ pour toute valeur propre $\\lambda$. C'est le théorème de stabilité de Routh-Hurwitz."
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
        hint1: "C'est l'énoncé fondamental du théorème de Dirichlet pour les fonctions $\\mathcal{C}^1$ par morceaux.",
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
        hint1: "C'est le phénomène de Gibbs : l'intégrale $\\frac{2}{\\pi}\\int_0^\\pi \\frac{\\sin t}{t}\\,dt \\approx 1{,}17898$, soit un dépassement de $\\approx 9\\%$ de part et d'autre.",
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
        hint1: "$F'(x) = -\\frac{1}{1+x^2} \\implies F(x) = C - \\arctan(x)$. Comme $\\lim_{+\\infty} F = 0$, $C = \\frac{\\pi}{2}$.",
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
        hint1: "C'est la caractérisation exacte des fonctions Riemann-intégrables par les ensembles de mesure nulle (négligeables).",
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
        hint1: "Rechercher $7x \\equiv 1 \\pmod{31}$. On remarque que $7 \\times 9 = 63 = 62 + 1 = 2 \\times 31 + 1$.",
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
