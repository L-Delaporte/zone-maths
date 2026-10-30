/**
 * ProofEngine - Moteur interactif de Reconstitution de Preuve & Raisonnement Formel (Licence L1-L2-L3)
 * Permet aux étudiants d'ordonner les étapes d'une démonstration ou de repérer un sophisme mathématique.
 */

(function () {
  'use strict';

  const ProofTheorems = [
    {
      id: 'tvi',
      title: "Théorème des Valeurs Intermédiaires (TVI) par Dichotomie",
      level: "L1",
      domain: "Analyse réelle",
      statement: "Soit $f : [a, b] \\to \\mathbb{R}$ une fonction continue telle que $f(a) \\cdot f(b) \\le 0$. Alors il existe $c \\in [a, b]$ tel que $f(c) = 0$.",
      steps: [
        {
          id: 1,
          text: "On pose $a_0 = a$ et $b_0 = b$. Par hypothèse, $f(a_0) \\le 0$ et $f(b_0) \\ge 0$ (quitte à remplacer $f$ par $-f$).",
          why: "Initialisation de l'intervalle et fixation des signes sans perte de généralité."
        },
        {
          id: 2,
          text: "Par récurrence, étant donné $[a_n, b_n]$, on pose $m_n = \\frac{a_n + b_n}{2}$. Si $f(m_n) \\le 0$, on pose $a_{n+1} = m_n$ et $b_{n+1} = b_n$ ; sinon $a_{n+1} = a_n$ et $b_{n+1} = m_n$.",
          why: "Construction dichotomique préservant l'invariant $f(a_n) \\le 0$ et $f(b_n) \\ge 0$."
        },
        {
          id: 3,
          text: "Pour tout $n \\in \\mathbb{N}$, $(a_n)$ est croissante, $(b_n)$ est décroissante, et $b_n - a_n = \\frac{b - a}{2^n} \\xrightarrow[n \\to +\\infty]{} 0$.",
          why: "Vérification des trois conditions du théorème des suites adjacentes."
        },
        {
          id: 4,
          text: "Les suites $(a_n)$ et $(b_n)$ sont adjacentes, donc elles convergent vers une limite commune $c \\in [a, b]$.",
          why: "Application immédiate du théorème des suites adjacentes dans $\\mathbb{R}$."
        },
        {
          id: 5,
          text: "Par continuité de $f$ en $c$ : $f(a_n) \\to f(c)$ et $f(b_n) \\to f(c)$. Comme $f(a_n) \\le 0$ et $f(b_n) \\ge 0$, par passage à la limite : $f(c) \\le 0$ et $f(c) \\ge 0$, d'où $f(c) = 0$.",
          why: "La continuité transfère les inégalités larges au point limite, concluant $f(c) = 0$."
        }
      ],
      fallacy: {
        fakeStep: "Comme $(a_n)$ et $(b_n)$ convergent vers $c$, on a immédiatement $f(c) = 0$ sans que $f$ ait besoin d'être continue.",
        whyFalse: "Faux ! Si $f$ n'est pas continue, la limite de $f(a_n)$ peut être strictement négative tandis que $f(c) > 0$ (contre-exemple de la fonction signe)."
      }
    },
    {
      id: 'bolzano_weierstrass',
      title: "Théorème de Bolzano-Weierstrass dans $\\mathbb{R}$",
      level: "L1 / L2",
      domain: "Topologie de R",
      statement: "Toute suite bornée de nombres réels admet au moins une sous-suite convergente.",
      steps: [
        {
          id: 1,
          text: "Soit $(u_n)_{n \\in \\mathbb{N}}$ une suite bornée dans $\\mathbb{R}$. Il existe $a_0, b_0 \\in \\mathbb{R}$ tels que $\\forall n \\in \\mathbb{N},\\; u_n \\in [a_0, b_0]$.",
          why: "Définition d'une suite bornée : elle est entièrement contenue dans un segment initial."
        },
        {
          id: 2,
          text: "On pose $\\varphi(0) = 0$. On coupe $[a_0, b_0]$ en deux moitiés égales par le milieu $m_0$. Par le principe des tiroirs, au moins une des deux moitiés contient une infinité de termes de la suite.",
          why: "Un ensemble infini d'indices partagé en deux parties contient au moins une partie infinie."
        },
        {
          id: 3,
          text: "On note $[a_1, b_1]$ cette moitié et on choisit $\\varphi(1) > \\varphi(0)$ tel que $u_{\\varphi(1)} \\in [a_1, b_1]$.",
          why: "Choix du terme de la sous-suite avec un indice strictement croissant grâce à l'infinité de termes."
        },
        {
          id: 4,
          text: "Par récurrence, on construit une suite de segments emboîtés $[a_k, b_k]$ de longueur $\\frac{b_0 - a_0}{2^k}$ et une extractrice $\\varphi$ strictement croissante avec $u_{\\varphi(k)} \\in [a_k, b_k]$.",
          why: "Construction itérative d'une sous-suite localisée dans des intervalles de diamètres tendant vers 0."
        },
        {
          id: 5,
          text: "Les suites $(a_k)$ et $(b_k)$ sont adjacentes et convergent vers $\\ell$. Comme $a_k \\le u_{\\varphi(k)} \\le b_k$, le théorème des gendarmes assure que $u_{\\varphi(k)} \\xrightarrow[k \\to +\\infty]{} \\ell$.",
          why: "Encadrement et convergence de la sous-suite extraite vers la limite commune."
        }
      ],
      fallacy: {
        fakeStep: "Comme $[a_k, b_k]$ est de diamètre tendant vers 0, la suite $(u_n)$ tout entière converge vers $\\ell$.",
        whyFalse: "Absurde ! C'est seulement la sous-suite extraite $(u_{\\varphi(k)})$ qui converge. La suite $u_n = (-1)^n$ est bornée et ne converge pas."
      }
    },
    {
      id: 'spectral_theorem',
      title: "Théorème Spectral pour les Matrices Symétriques Réelles",
      level: "L2 / L3",
      domain: "Algèbre linéaire euclidienne",
      statement: "Toute matrice symétrique réelle $A \\in \\mathcal{S}_n(\\mathbb{R})$ est diagonalisable dans une base orthonormée de vecteurs propres.",
      steps: [
        {
          id: 1,
          text: "Soit $\\lambda \\in \\mathbb{C}$ une valeur propre de $A$ et $X \\in \\mathbb{C}^n \\setminus \\{0\\}$ un vecteur propre associé : $AX = \\lambda X$.",
          why: "Le polynôme caractéristique scindé sur $\\mathbb{C}$ garantit l'existence d'au moins une valeur propre complexe."
        },
        {
          id: 2,
          text: "On a $\\bar{X}^T A X = \\bar{X}^T (\\lambda X) = \\lambda \\|X\\|^2$, et par symétrie réelle $\\bar{X}^T A X = (A \\bar{X})^T X = (\\bar{\\lambda} \\bar{X})^T X = \\bar{\\lambda} \\|X\\|^2$. D'où $\\lambda = \\bar{\\lambda} \\in \\mathbb{R}$.",
          why: "Preuve classique que toutes les valeurs propres d'une matrice symétrique réelle sont réelles."
        },
        {
          id: 3,
          text: "Puisque $\\lambda_1 \\in \\mathbb{R}$, le système $(A - \\lambda_1 I_n)X = 0$ admet une solution non nulle dans $\\mathbb{R}^n$. Soit $v_1 \\in \\mathbb{R}^n$ unitaire associé.",
          why: "Existence d'un vecteur propre unitaire réel."
        },
        {
          id: 4,
          text: "Soit $H = (v_1)^\\perp$ l'orthogonal de $\\text{Vect}(v_1)$. Pour tout $y \\in H$, $\\langle Ay, v_1 \\rangle = \\langle y, A v_1 \\rangle = \\lambda_1 \\langle y, v_1 \\rangle = 0$, donc $H$ est stable par $A$.",
          why: "Stabilité de l'orthogonal par l'endomorphisme auto-adjoint."
        },
        {
          id: 5,
          text: "L'endomorphisme induit $A|_H$ est symétrique sur l'espace euclidien $H$ de dimension $n-1$. Par récurrence sur la dimension $n$, il existe une base orthonormée de vecteurs propres de $A$.",
          why: "Conclusion par hypothèse de récurrence sur la dimension de l'espace."
        }
      ],
      fallacy: {
        fakeStep: "Comme les valeurs propres sont réelles, deux vecteurs propres quelconques associés à la même valeur propre sont automatiquement orthogonaux.",
        whyFalse: "Faux ! L'orthogonalité automatique n'est vraie que pour des vecteurs propres associés à des valeurs propres DISTINCTES. Pour une même valeur propre, il faut orthogonaliser la base du sous-espace propre par Gram-Schmidt."
      }
    },
    {
      id: 'lebesgue_dominated',
      title: "Théorème de Convergence Dominée de Lebesgue",
      level: "L3",
      domain: "Intégration & Mesure",
      statement: "Soit $(f_n)$ une suite de fonctions mesurables convergeant simplement p.p. vers $f$. S'il existe $g \\in L^1$ telle que $|f_n| \\le g$ p.p., alors $f \\in L^1$ et $\\int f_n \\, d\\mu \\to \\int f \\, d\\mu$.",
      steps: [
        {
          id: 1,
          text: "Comme $|f_n(x)| \\le g(x)$ p.p. et $f_n(x) \\to f(x)$ p.p., par passage à la limite des inégalités larges on a $|f(x)| \\le g(x)$ p.p., donc $f \\in L^1(\\mu)$.",
          why: "Intégrabilité de la fonction limite dominée par $g$."
        },
        {
          id: 2,
          text: "On applique le Lemme de Fatou aux fonctions positives $g + f_n \\ge 0$ : $\\int \\liminf (g + f_n) \\le \\liminf \\int (g + f_n)$.",
          why: "Application du lemme de Fatou sur la première suite positive dominante."
        },
        {
          id: 3,
          text: "D'où $\\int (g + f) \\le \\int g + \\liminf \\int f_n$, ce qui simplifie en $\\int f \\le \\liminf \\int f_n$.",
          why: "Simplification de $\\int g < +\\infty$ des deux côtés."
        },
        {
          id: 4,
          text: "On applique ensuite le Lemme de Fatou aux fonctions positives $g - f_n \\ge 0$ : $\\int (g - f) \\le \\int g - \\limsup \\int f_n$, ce qui donne $\\limsup \\int f_n \\le \\int f$.",
          why: "Application symétrique sur $g - f_n$ pour encadrer la limite supérieure."
        },
        {
          id: 5,
          text: "On a ainsi $\\limsup \\int f_n \\le \\int f \\le \\liminf \\int f_n$. Comme la limite inférieure est toujours inférieure ou égale à la limite supérieure, toutes ces quantités sont égales et $\\lim \\int f_n = \\int f$.",
          why: "Coïncidence des limites inférieure et supérieure impliquant l'existence de la limite."
        }
      ],
      fallacy: {
        fakeStep: "La convergence simple d'une suite de fonctions positives intégrables implique toujours la convergence de leurs intégrales, sans hypothèse de domination.",
        whyFalse: "Faux ! Contre-exemple classique de la bosse glissante : $f_n(x) = n \\cdot \\mathbf{1}_{]0, 1/n[}(x)$ converge simplement vers 0, mais $\\int f_n = 1 \\ne 0$."
      }
    },
    {
      id: 'rank_nullity',
      title: "Théorème du Rang (Espaces vectoriels)",
      level: "L1 / L2",
      domain: "Algèbre linéaire",
      statement: "Soit $u : E \\to F$ une application linéaire, avec $E$ de dimension finie. Alors $\\dim(E) = \\dim(\\ker(u)) + \\dim(\\text{Im}(u))$.",
      steps: [
        {
          id: 1,
          text: "Comme $E$ est de dimension finie, son sous-espace $\\ker(u)$ l'est aussi. Soit $p = \\dim(\\ker(u))$ et $(e_1, \\dots, e_p)$ une base de $\\ker(u)$.",
          why: "Choix d'une base du noyau."
        },
        {
          id: 2,
          text: "D'après le théorème de la base incomplète, on complète $(e_1, \\dots, e_p)$ en une base $(e_1, \\dots, e_p, v_1, \\dots, v_r)$ de $E$, avec $p + r = \\dim(E)$.",
          why: "Complétion en une base de l'espace de départ $E$."
        },
        {
          id: 3,
          text: "On montre que la famille $(u(v_1), \\dots, u(v_r))$ est génératrice de $\\text{Im}(u)$ : pour tout $x \\in E$, $x = \\sum a_i e_i + \\sum b_j v_j$, donc $u(x) = \\sum b_j u(v_j)$ car $u(e_i) = 0$.",
          why: "Vérification que l'image est engendrée par les images des vecteurs ajoutés."
        },
        {
          id: 4,
          text: "On montre que $(u(v_1), \\dots, u(v_r))$ est libre : si $\\sum b_j u(v_j) = 0$, alors $u(\\sum b_j v_j) = 0$, donc $\\sum b_j v_j \\in \\ker(u)$.",
          why: "Test de liberté par combinaison linéaire nulle."
        },
        {
          id: 5,
          text: "Comme $(e_1, \\dots, e_p)$ est une base de $\\ker(u)$, $\\sum b_j v_j = \\sum a_i e_i$. La liberté de la base de $E$ impose tous les $b_j = 0$. Donc $\\dim(\\text{Im}(u)) = r$, d'où $\\dim(E) = p + r$.",
          why: "Conclusion : les vecteurs images forment une base de l'image de cardinal $r = \\text{rg}(u)$."
        }
      ],
      fallacy: {
        fakeStep: "L'image par une application linéaire de toute famille libre est toujours une famille libre.",
        whyFalse: "Faux ! Si des vecteurs de la famille libre appartiennent au noyau $\\ker(u)$, leurs images sont nulles, rendant la famille image liée."
      }
    }
  ];

  const ProofEngine = {
    getAllTheorems() {
      return ProofTheorems;
    },

    getTheorems() {
      return ProofTheorems;
    },

    getTheoremById(id) {
      return ProofTheorems.find(t => t.id === id) || ProofTheorems[0];
    },

    /**
     * Génère un exercice de reconstitution de preuve avec étapes mélangées
     */
    generateProofExercise(id = null) {
      const th = id ? this.getTheoremById(id) : ProofTheorems[Math.floor(Math.random() * ProofTheorems.length)];
      const shuffledSteps = [...th.steps].sort(() => Math.random() - 0.5);

      return {
        theorem: th,
        shuffledSteps: shuffledSteps,
        correctOrder: th.steps.map(s => s.id)
      };
    }
  };

  if (typeof window !== 'undefined') {
    window.ProofEngine = ProofEngine;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ProofEngine;
  }
})();
