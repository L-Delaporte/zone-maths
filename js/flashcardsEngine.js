/**
 * Module Flashcards & Boîte de Mémorisation Active (Méthode Leitner / Fabien Olicard)
 * L'Établi des Maths — Loïc Delaporte
 *
 * Principes clés :
 * 1. Sélection libre des chapitres par l'élève (comme le Devoir Blanc).
 * 2. 5 Boîtes de mémorisation (Boîte 1 : à revoir/urgente -> Boîte 5 : mémoire long terme).
 * 3. Si l'élève a FAUX : la carte redescend en Boîte 1 et est ré-injectée dans la file
 *    de la session courante pour qu'il soit ré-interrogé avant la fin !
 * 4. Si l'élève a BON : la carte monte d'une boîte et est représentée moins souvent.
 * 5. Gain d'XP et persistance complète dans localStorage (MathsStorage).
 * 6. Support intégral KaTeX, animations 3D et raccourcis clavier (Espace, 1, 2).
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'maths_flashcards_leitner_v1';

  window.MathsFlashcards = {
    // État persistant
    leitnerData: {},

    // État de la session courante
    sessionQueue: [],
    currentIndex: 0,
    isRevealed: false,
    sessionStats: {
      totalCards: 0,
      firstTryCorrect: 0,
      retriedLearned: 0,
      promotedCount: 0,
      xpEarned: 0,
      missedCards: []
    },
    activeChapters: [],
    sessionSize: 10,
    sessionMode: 'smart', // 'smart', 'focus_wrong', 'all'
    keydownListenerBound: null,

    /**
     * Initialisation du module
     */
    init() {
      this.enrichCoursesWithExtras();
      this.loadStorage();
      this.bindShortcuts();
    },

    /**
     * Enrichit les cours en mémoire avec des flashcards de cours rigoureuses
     */
    enrichCoursesWithExtras() {
      if (!window.MATHS_COURSES) return;
      for (const [chapId, extraList] of Object.entries(this.EXTRA_FLASHCARDS)) {
        if (!window.MATHS_COURSES[chapId]) {
          window.MATHS_COURSES[chapId] = {};
        }
        if (!window.MATHS_COURSES[chapId].flashcards) {
          window.MATHS_COURSES[chapId].flashcards = [];
        }
        const existingQs = new Set(window.MATHS_COURSES[chapId].flashcards.map(f => f.q));
        for (const card of extraList) {
          if (!existingQs.has(card.q)) {
            window.MATHS_COURSES[chapId].flashcards.push(card);
            existingQs.add(card.q);
          }
        }
      }
    },

    EXTRA_FLASHCARDS: {
      // 5ème
      "5N1": [
        {
          q: "Dans une suite de calculs sans parenthèses avec additions et soustractions, comment procède-t-on ?",
          a: "On effectue les opérations **de gauche à droite**, dans l'ordre où elles se présentent."
        },
        {
          q: "Quelle est la règle de priorité absolue dans n'importe quel calcul mathématique ?",
          a: "Les calculs situés à l'intérieur des **parenthèses** les plus intérieures s'effectuent toujours en premier."
        }
      ],
      "5N2": [
        {
          q: "Que vaut la somme de deux nombres relatifs opposés (par exemple $-7$ et $+7$) ?",
          a: "La somme de deux nombres opposés est toujours égale à **$0$** : $$-7 + (+7) = 0$$"
        },
        {
          q: "Comment soustrait-on un nombre relatif ?",
          a: "Soustraire un nombre relatif revient à **ajouter son opposé** : $$a - b = a + (-b)$$"
        }
      ],
      "5N3": [
        {
          q: "Comment additionner ou soustraire deux fractions ayant le même dénominateur ?",
          a: "On additionne (ou soustrait) les numérateurs et on **conserve le dénominateur commun** : $$\\frac{a}{d} + \\frac{b}{d} = \\frac{a + b}{d}$$"
        },
        {
          q: "Comment simplifier une fraction ?",
          a: "On divise le numérateur et le dénominateur par un même **diviseur commun non nul**."
        }
      ],
      "5N4": [
        {
          q: "Que signifie le cube d'un nombre $a$, noté $a^3$ ?",
          a: "$$a^3 = a \\times a \\times a$$ (le produit de 3 facteurs tous égaux à $a$)."
        },
        {
          q: "Que vaut $10^5$ en écriture décimale ?",
          a: "$$10^5 = 100\\,000$$ (le chiffre $1$ suivi de **5 zéros**)."
        }
      ],
      "5N5": [
        {
          q: "Comment développe-t-on $k(a + b)$ par distributivité simple ?",
          a: "$$k(a + b) = k \\times a + k \\times b$$"
        },
        {
          q: "Peut-on simplifier $3x + 5$ en $8x$ ?",
          a: "**Non !** On ne peut pas additionner des termes en $x$ avec des constantes seules. $3x + 5$ reste tel quel."
        }
      ],
      "5G1": [
        {
          q: "Dans un repère du plan, dans quel ordre note-t-on les coordonnées d'un point $(x ; y)$ ?",
          a: "D'abord l'**abscisse $x$** (axe horizontal), puis l'**ordonnée $y$** (axe vertical)."
        },
        {
          q: "Quelles sont les coordonnées de l'origine $O$ du repère ?",
          a: "Le point $O$ a pour coordonnées $$(0 ; 0)$$"
        }
      ],
      "5G2": [
        {
          q: "Qu'est-ce qu'une symétrie centrale de centre $O$ ?",
          a: "C'est un **demi-tour ($180^\\circ$)** autour du centre $O$. Le centre $O$ est le **milieu** du segment formé par un point et son symétrique."
        },
        {
          q: "Quelles grandeurs sont conservées par une symétrie centrale ?",
          a: "Les **longueurs**, les **angles**, les **aires** et le **parallélisme** (la figure symétrique est parfaitement superposable)."
        }
      ],
      "5G3": [
        {
          q: "À quelle condition deux angles alternes-internes ont-ils la même mesure ?",
          a: "Lorsque les deux droites coupées par la sécante sont **parallèles**."
        },
        {
          q: "Que vaut la somme des deux angles aigus dans un triangle rectangle ?",
          a: "La somme des angles aigus vaut **$90^\\circ$** (ils sont dits complémentaires car $90 + 90 = 180^\\circ$)."
        }
      ],
      "5G4": [
        {
          q: "Quelle condition doit être vérifiée pour qu'un triangle soit constructible (inégalité triangulaire) ?",
          a: "La longueur du plus grand côté doit être **strictement inférieure** à la somme des deux autres : $$BC < AB + AC$$"
        },
        {
          q: "Qu'est-ce que la médiatrice d'un segment ?",
          a: "C'est la droite **perpendiculaire** au segment passant par son **milieu**. Tout point de la médiatrice est équidistant des deux extrémités."
        }
      ],
      "5G5": [
        {
          q: "Quelle propriété caractérise les diagonales d'un parallélogramme ?",
          a: "Les diagonales d'un parallélogramme **se coupent en leur milieu**."
        },
        {
          q: "Quelles sont les propriétés particulières d'un rectangle ?",
          a: "Il possède **4 angles droits** et ses diagonales sont de **même longueur** et se coupent en leur milieu."
        }
      ],
      "5G6": [
        {
          q: "Quelle est la formule générale du volume d'un prisme droit ou d'un cylindre ?",
          a: "$$\\mathcal{V} = \\text{Aire de la base} \\times \\text{hauteur} = \\mathcal{B} \\times h$$"
        },
        {
          q: "Comment calcule-t-on le périmètre d'un cercle (circonférence de base) de rayon $R$ ?",
          a: "$$\\mathcal{P} = 2 \\times \\pi \\times R$$"
        }
      ],
      "5D1": [
        {
          q: "Comment calcule-t-on la fréquence d'une valeur en statistique ?",
          a: "$$\\text{Fréquence} = \\frac{\\text{Effectif de la valeur}}{\\text{Effectif total}}$$"
        },
        {
          q: "Que vaut la somme de toutes les fréquences d'une série statistique ?",
          a: "Elle est toujours égale à **$1$** (ou **$100\\%$**)."
        }
      ],
      "5D2": [
        {
          q: "Quelle est la formule de probabilité dans une situation d'équiprobabilité ?",
          a: "$$P = \\frac{\\text{Nombre d'issues favorables}}{\\text{Nombre total d'issues possibles}}$$"
        },
        {
          q: "Que vaut la probabilité d'un événement certain ?",
          a: "Elle vaut **$1$** (ou $100\\%$). La probabilité d'un événement impossible vaut $0$."
        }
      ],
      "5P1": [
        {
          q: "Comment calculer $t\\%$ d'une quantité $Q$ ?",
          a: "On multiplie par $\\frac{t}{100}$ : $$\\text{Résultat} = Q \\times \\frac{t}{100}$$"
        },
        {
          q: "À quoi reconnaît-on graphiquement une situation de proportionnalité ?",
          a: "Tous les points sont alignés sur une **droite qui passe par l'origine $(0 ; 0)$**."
        }
      ],
      "5P2": [
        {
          q: "Comment compléter un tableau de valeurs à partir d'une formule reliant $x$ et $y$ ?",
          a: "On remplace la lettre $x$ par la valeur donnée et on effectue les opérations prescrites par la formule."
        }
      ],
      "5A1": [
        {
          q: "Dans Scratch, à quoi sert l'instruction « répéter 10 fois » ?",
          a: "C'est une **boucle** qui permet de répéter 10 fois la même séquence de blocs sans duplication de code."
        },
        {
          q: "Dans Scratch, dans quel sens tourne l'instruction « tourner de 90 degrés » avec une flèche vers la droite ?",
          a: "Elle tourne dans le sens **horaire** (sens des aiguilles d'une montre)."
        }
      ],

      // 4ème
      "4N1": [
        {
          q: "Quel est le signe du produit de deux nombres relatifs de même signe ?",
          a: "Le produit de deux nombres de même signe est toujours **positif (+)** : $(-) \\times (-) = (+)$ et $(+) \\times (+) = (+)$."
        },
        {
          q: "Comment déterminer le signe d'un produit de plusieurs facteurs non nuls ?",
          a: "On compte les facteurs **négatifs** : s'ils sont en nombre pair $\\implies$ **positif (+)**, en nombre impair $\\implies$ **négatif (-)**."
        }
      ],
      "4N2": [
        {
          q: "Comment multiplie-t-on deux fractions entre elles ?",
          a: "On multiplie les **numérateurs entre eux** et les **dénominateurs entre eux** : $$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$$"
        },
        {
          q: "Comment divise-t-on par une fraction $\\frac{c}{d}$ non nulle ?",
          a: "Diviser par une fraction revient à **multiplier par son inverse** : $$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$$"
        }
      ],
      "4N3": [
        {
          q: "Que vaut $a^{-n}$ pour un nombre $a \\neq 0$ ?",
          a: "$$a^{-n} = \\frac{1}{a^n}$$ C'est l'**inverse** de $a^n$."
        },
        {
          q: "Que vaut $a^0$ pour n'importe quel nombre $a \\neq 0$ ?",
          a: "$$a^0 = 1$$"
        }
      ],
      "4N4": [
        {
          q: "Pour tout nombre positif $a \\ge 0$, que vaut $(\\sqrt{a})^2$ ?",
          a: "$$(\\sqrt{a})^2 = a$$ Le carré et la racine carrée s'annulent pour un nombre positif."
        },
        {
          q: "Un nombre négatif (ex: $-9$) a-t-il une racine carrée réelle ?",
          a: "**Non !** La racine carrée d'un nombre strictement négatif n'existe pas dans les nombres réels."
        }
      ],
      "4N5": [
        {
          q: "Comment développe-t-on par double distributivité $(a + b)(c + d)$ ?",
          a: "$$(a + b)(c + d) = a \\times c + a \\times d + b \\times c + b \\times d$$"
        },
        {
          q: "Quelle règle applique-t-on pour résoudre l'équation $x + a = b$ ?",
          a: "On soustrait $a$ aux deux membres de l'égalité : $$x = b - a$$"
        }
      ],
      "4G1": [
        {
          q: "Comment s'énonce l'égalité du théorème de Pythagore dans un triangle $ABC$ rectangle en $A$ ?",
          a: "$$BC^2 = AB^2 + AC^2$$ (Le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés)."
        },
        {
          q: "À quoi sert la contraposée du théorème de Pythagore ?",
          a: "Elle sert à prouver qu'un triangle **n'est pas rectangle** lorsque le carré du plus grand côté est différent de la somme des carrés des deux autres."
        }
      ],
      "4G2": [
        {
          q: "Si un triangle est rectangle, où se situe le centre de son cercle circonscrit ?",
          a: "Au **milieu de son hypoténuse** (et le rayon vaut la moitié de l'hypoténuse)."
        },
        {
          q: "Comment s'énonce le théorème de la droite des milieux pour les longueurs ?",
          a: "Le segment joignant les milieux de deux côtés mesure la **moitié** du troisième côté : $$IJ = \\frac{1}{2} BC$$"
        }
      ],
      "4G3": [
        {
          q: "Quelles sont les 3 caractéristiques d'une translation qui transforme $A$ en $B$ ?",
          a: "1) La **direction** (droite $(AB)$),\n2) Le **sens** (de $A$ vers $B$),\n3) La **longueur** (distance $AB$)."
        },
        {
          q: "Quelles grandeurs géométriques sont conservées par une translation ?",
          a: "Les **longueurs**, les **angles**, le **parallélisme** et les **aires**."
        }
      ],
      "4G4": [
        {
          q: "Quelle est la formule générale du volume d'une pyramide ou d'un cône de révolution ?",
          a: "$$\\mathcal{V} = \\frac{1}{3} \\times \\text{Aire de la base} \\times \\text{hauteur} = \\frac{\\mathcal{B} \\times h}{3}$$"
        },
        {
          q: "Quelle est la nature de la base d'un cône de révolution de rayon $R$ et quelle est son aire ?",
          a: "La base est un **disque** de rayon $R$, et son aire vaut $$\\mathcal{B} = \\pi \\times R^2$$"
        }
      ],
      "4D1": [
        {
          q: "Comment calcule-t-on la moyenne pondérée d'une série statistique ?",
          a: "$$\\text{Moyenne} = \\frac{\\text{Somme de (chaque valeur } \\times \\text{ effectif)}}{\\text{Effectif total}}$$"
        },
        {
          q: "Qu'est-ce que l'étendue d'une série statistique ?",
          a: "$$\\text{Étendue} = \\text{Plus grande valeur} - \\text{Plus petite valeur}$$"
        }
      ],
      "4D2": [
        {
          q: "Si la probabilité d'un événement $A$ est $P(A)$, que vaut la probabilité de son événement contraire $\\bar{A}$ ?",
          a: "$$P(\\bar{A}) = 1 - P(A)$$"
        },
        {
          q: "Dans un arbre de probabilités, que vaut la somme des probabilités issues d'un même nœud ?",
          a: "La somme des probabilités des branches issues d'un même nœud est toujours égale à **$1$**."
        }
      ],
      "4P1": [
        {
          q: "Que signifie partager une quantité selon le ratio $2 : 3$ ?",
          a: "On partage en $2 + 3 = 5$ parts égales : la 1ère partie vaut $\\frac{2}{5}$ et la 2ème vaut $\\frac{3}{5}$."
        },
        {
          q: "Quel est le coefficient multiplicateur associé à une hausse de $20\\%$ ?",
          a: "$$1 + \\frac{20}{100} = 1{,}20$$ (Pour une baisse de $20\\%$, ce serait $1 - 0{,}20 = 0{,}80$)."
        }
      ],
      "4P2": [
        {
          q: "Si $f(x) = 3x - 5$, que signifie calculer « l'image de $4$ » ?",
          a: "On remplace $x$ par $4$ : $$f(4) = 3 \\times 4 - 5 = 12 - 5 = 7$$ L'image de $4$ par $f$ est $7$."
        },
        {
          q: "Si $f(2) = 8$, quel nombre est l'antécédent et quel nombre est l'image ?",
          a: "**$2$ est l'antécédent** et **$8$ est l'image** (on note $x = 2 \\xrightarrow{f} 8$)."
        }
      ],
      "4A1": [
        {
          q: "Dans Scratch, à quoi sert l'instruction conditionnelle « si ... alors ... sinon » ?",
          a: "Elle teste une **condition** : si elle est vraie, elle exécute le 1er bloc ; si elle est fausse, elle exécute le bloc sinon."
        },
        {
          q: "Dans Scratch, quelle est la différence entre une variable et un bloc d'instruction ?",
          a: "Une **variable** mémorise une valeur modifiable, tandis qu'une **instruction** ordonne une action."
        }
      ]
    },

    /**
     * Chargement des données Leitner depuis localStorage
     */
    loadStorage() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          this.leitnerData = JSON.parse(raw);
        } else {
          this.leitnerData = {};
        }
      } catch (e) {
        console.warn('Erreur lecture localStorage flashcards:', e);
        this.leitnerData = {};
      }
    },

    /**
     * Sauvegarde des données Leitner
     */
    saveStorage() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.leitnerData));
      } catch (e) {
        console.warn('Erreur écriture localStorage flashcards:', e);
      }
    },

    /**
     * Récupère l'état d'une carte spécifique
     */
    getCardState(cardId) {
      if (!this.leitnerData[cardId]) {
        this.leitnerData[cardId] = {
          box: 1, // 1 à 5
          reviewsCount: 0,
          correctCount: 0,
          wrongCount: 0,
          consecutiveCorrect: 0,
          lastReviewed: null
        };
      }
      return this.leitnerData[cardId];
    },

    /**
     * Écoute des raccourcis clavier globaux lors d'une session
     */
    bindShortcuts() {
      if (this.keydownListenerBound) return;
      this.keydownListenerBound = (e) => {
        const modal = document.getElementById('flashcards-modal');
        if (!modal || modal.style.display === 'none') return;

        const playScreen = document.getElementById('flashcards-play-screen');
        if (!playScreen || playScreen.style.display === 'none') return;

        // Ne pas intercepter si l'utilisateur est dans un input ou un select
        if (['INPUT', 'SELECT', 'TEXTAREA'].includes(e.target.tagName)) return;

        if (e.code === 'Space' || e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          if (!this.isRevealed) {
            this.revealAnswer();
          }
        } else if (e.key === '1' || e.key === 'ArrowLeft') {
          if (this.isRevealed) {
            e.preventDefault();
            this.submitEvaluation(false);
          }
        } else if (e.key === '2' || e.key === 'ArrowRight') {
          if (this.isRevealed) {
            e.preventDefault();
            this.submitEvaluation(true);
          }
        } else if (e.key === 'Escape') {
          e.preventDefault();
          this.confirmClose();
        }
      };
      if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
        window.addEventListener('keydown', this.keydownListenerBound);
      }
    },

    /**
     * Ouvre la modale en mode configuration
     */
    openModal(preselectedChapterId = null) {
      const modal = document.getElementById('flashcards-modal');
      if (!modal) return;

      this.loadStorage();

      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');

      const currentLevel = (window.MathsApp && window.MathsApp.currentLevel) || '3eme';
      const allChapters = window.MATHS_CHAPTERS || [];
      const chapters = allChapters.filter(c => !c.level || c.level === currentLevel);

      const defaultId = preselectedChapterId || (window.MathsApp && window.MathsApp.currentChapterId) || (chapters[0] ? chapters[0].id : 'N1');

      // Générer les badges de sélection des chapitres
      const container = document.getElementById('flashcards-chapters-checkboxes');
      if (container) {
        container.innerHTML = chapters.map(c => {
          const cards = this.getCourseCards(c.id);
          const count = cards.length;
          const isDefault = (c.id === defaultId);
          return `
            <label class="diapo-chip fc-chap-chip">
              <input type="checkbox" name="fc-chap" value="${c.id}" ${isDefault ? 'checked' : ''} onchange="window.MathsFlashcards.updateStatsPreview()" />
              <span>${c.num} : ${c.shortTitle || c.title} <small class="fc-chip-count">(${count})</small></span>
            </label>
          `;
        }).join('');
      }

      this.updateStatsPreview();

      // Affichage de l'écran 1
      document.getElementById('flashcards-config-screen').style.display = 'block';
      document.getElementById('flashcards-play-screen').style.display = 'none';
      document.getElementById('flashcards-summary-screen').style.display = 'none';
    },

    /**
     * Ferme la modale
     */
    closeModal() {
      const modal = document.getElementById('flashcards-modal');
      if (modal) modal.style.display = 'none';
      document.body.style.overflow = 'auto';
      document.body.classList.remove('modal-open');
    },

    /**
     * Demande confirmation si une session est en cours
     */
    confirmClose() {
      if (this.sessionQueue.length > 0 && this.currentIndex < this.sessionQueue.length) {
        if (confirm('Voulez-vous vraiment quitter la session de flashcards en cours ? Votre progression actuelle sera conservée.')) {
          this.closeModal();
        }
      } else {
        this.closeModal();
      }
    },

    /**
     * Coche ou décoche tous les chapitres visibles
     */
    selectAllChapters(checked) {
      const checkboxes = document.querySelectorAll('input[name="fc-chap"]');
      checkboxes.forEach(cb => cb.checked = !!checked);
      this.updateStatsPreview();
    },

    /**
     * Récupère les cartes d'un cours spécifique
     */
    getCourseCards(chapterId) {
      const courses = window.MATHS_COURSES || {};
      const course = courses[chapterId];
      if (!course || !course.flashcards || !Array.isArray(course.flashcards)) {
        return [];
      }
      return course.flashcards.map((fc, idx) => ({
        id: `${chapterId}_fc_${idx}`,
        chapterId: chapterId,
        cardIndex: idx,
        q: fc.q,
        a: fc.a
      }));
    },

    /**
     * Met à jour le récapitulatif des boîtes dans l'écran de configuration
     */
    updateStatsPreview() {
      const checkedBoxes = Array.from(document.querySelectorAll('input[name="fc-chap"]:checked')).map(cb => cb.value);
      let allCards = [];
      checkedBoxes.forEach(cid => {
        allCards = allCards.concat(this.getCourseCards(cid));
      });

      const countsByBox = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
      allCards.forEach(c => {
        const state = this.getCardState(c.id);
        const b = Math.min(Math.max(state.box || 1, 1), 5);
        countsByBox[b]++;
      });

      const summaryEl = document.getElementById('fc-global-stats-summary');
      if (summaryEl) {
        summaryEl.innerHTML = `
          <div class="fc-boxes-strip">
            <span class="fc-box-pill b1" title="Boîte 1 : À revoir d'urgence / Nouvelles notions">📦 B1 : <strong>${countsByBox[1]}</strong></span>
            <span class="fc-box-pill b2" title="Boîte 2 : En cours d'ancrage">📦 B2 : <strong>${countsByBox[2]}</strong></span>
            <span class="fc-box-pill b3" title="Boîte 3 : Presque maîtrisé">📦 B3 : <strong>${countsByBox[3]}</strong></span>
            <span class="fc-box-pill b4" title="Boîte 4 : Bien mémorisé">📦 B4 : <strong>${countsByBox[4]}</strong></span>
            <span class="fc-box-pill b5" title="Boîte 5 : Mémoire à long terme (Validé !)">🏆 B5 : <strong>${countsByBox[5]}</strong></span>
          </div>
          <div class="fc-total-selected">
            ${allCards.length} notion${allCards.length > 1 ? 's' : ''} disponible${allCards.length > 1 ? 's' : ''} dans les chapitres cochés
          </div>
        `;
      }
    },

    /**
     * Démarre la session active
     */
    startSession(overrideCards = null) {
      let pool = [];

      if (overrideCards && overrideCards.length > 0) {
        pool = [...overrideCards];
      } else {
        const checkedBoxes = Array.from(document.querySelectorAll('input[name="fc-chap"]:checked')).map(cb => cb.value);
        if (checkedBoxes.length === 0) {
          alert('Veuillez cocher au moins un chapitre pour réviser ses flashcards.');
          return;
        }

        this.activeChapters = checkedBoxes;

        checkedBoxes.forEach(cid => {
          pool = pool.concat(this.getCourseCards(cid));
        });

        if (pool.length === 0) {
          alert('Aucune flashcard trouvée pour les chapitres sélectionnés.');
          return;
        }

        const countSelect = document.getElementById('fc-count-select');
        const countVal = countSelect ? parseInt(countSelect.value, 10) : 10;
        this.sessionSize = countVal;

        const modeSelect = document.getElementById('fc-mode-select');
        this.sessionMode = modeSelect ? modeSelect.value : 'smart';

        // Tri et filtrage selon le mode
        if (this.sessionMode === 'focus_wrong') {
          // Uniquement Boîte 1
          const b1Cards = pool.filter(c => this.getCardState(c.id).box === 1);
          if (b1Cards.length > 0) {
            pool = b1Cards;
          }
        } else if (this.sessionMode === 'smart') {
          // Pondération Leitner : Boîte 1 = poids 10, Boîte 2 = 5, Boîte 3 = 2, Boîte 4 = 1, Boîte 5 = 0.5
          pool.sort((a, b) => {
            const stateA = this.getCardState(a.id);
            const stateB = this.getCardState(b.id);
            const weightA = stateA.box === 1 ? 10 : (stateA.box === 2 ? 5 : (stateA.box === 3 ? 2 : 1));
            const weightB = stateB.box === 1 ? 10 : (stateB.box === 2 ? 5 : (stateB.box === 3 ? 2 : 1));
            // Ajout d'une part aléatoire pour varier les tirages
            return (weightB + Math.random() * 2) - (weightA + Math.random() * 2);
          });
        } else {
          // Mélange aléatoire complet
          pool.sort(() => Math.random() - 0.5);
        }

        if (this.sessionSize > 0 && pool.length > this.sessionSize) {
          pool = pool.slice(0, this.sessionSize);
        }
      }

      // Mélanger l'ordre initial
      pool.sort(() => Math.random() - 0.5);

      this.sessionQueue = pool.map(card => ({
        ...card,
        isRetry: false,
        failedInSession: false
      }));

      this.currentIndex = 0;
      this.isRevealed = false;
      this.sessionStats = {
        totalCards: pool.length,
        firstTryCorrect: 0,
        retriedLearned: 0,
        promotedCount: 0,
        xpEarned: 0,
        missedCards: []
      };

      // Basculer sur l'écran 2
      document.getElementById('flashcards-config-screen').style.display = 'none';
      document.getElementById('flashcards-play-screen').style.display = 'block';
      document.getElementById('flashcards-summary-screen').style.display = 'none';

      this.renderCurrentCard();
    },

    /**
     * Affiche la carte courante
     */
    renderCurrentCard() {
      if (this.currentIndex >= this.sessionQueue.length) {
        this.finishSession();
        return;
      }

      const card = this.sessionQueue[this.currentIndex];
      const state = this.getCardState(card.id);
      const chMeta = (window.MATHS_CHAPTERS || []).find(c => c.id === card.chapterId);
      const chapterLabel = chMeta ? `${chMeta.num} · ${chMeta.shortTitle || chMeta.title}` : card.chapterId;

      // Header Meta
      const chapBadge = document.getElementById('fc-card-chap-badge');
      if (chapBadge) chapBadge.textContent = chapterLabel;

      const boxBadge = document.getElementById('fc-card-box-badge');
      if (boxBadge) {
        const boxNames = {
          1: '📦 Boîte 1 : À consolider',
          2: '📦 Boîte 2 : En cours',
          3: '📦 Boîte 3 : Presque acquis',
          4: '📦 Boîte 4 : Solide',
          5: '🏆 Boîte 5 : Maîtrisé'
        };
        boxBadge.textContent = boxNames[state.box] || `📦 Boîte ${state.box}`;
        boxBadge.className = `fc-pill-box b${state.box}`;
      }

      // Progress text & bar
      const progressText = document.getElementById('fc-progress-text');
      if (progressText) {
        progressText.innerHTML = `Notion <strong>${this.currentIndex + 1}</strong> sur <strong>${this.sessionQueue.length}</strong>${card.isRetry ? ' <span class="fc-retry-tag">(Répétition)</span>' : ''}`;
      }

      const progressBar = document.getElementById('fc-progress-bar');
      if (progressBar) {
        const pct = Math.min(100, Math.round(((this.currentIndex) / this.sessionQueue.length) * 100));
        progressBar.style.width = `${pct}%`;
      }

      // Reset état de retournement
      this.isRevealed = false;
      const flipper = document.getElementById('fc-flipper');
      if (flipper) flipper.classList.remove('is-flipped');

      // Actions dock
      const preActions = document.getElementById('fc-pre-reveal-actions');
      const postActions = document.getElementById('fc-post-reveal-actions');
      if (preActions) preActions.style.display = 'flex';
      if (postActions) postActions.style.display = 'none';

      // Injecter Question (Recto)
      const frontContent = document.getElementById('fc-card-front-content');
      if (frontContent) {
        const qHtml = window.MathsRenderer ? window.MathsRenderer.markdownToHtml(card.q) : card.q;
        frontContent.innerHTML = `
          <div class="fc-question-main">${qHtml}</div>
        `;
        if (window.MathsRenderer && window.MathsRenderer.renderElement) {
          window.MathsRenderer.renderElement(frontContent);
        }
      }

      // Injecter Réponse (Verso)
      const backContent = document.getElementById('fc-card-back-content');
      if (backContent) {
        const aHtml = window.MathsRenderer ? window.MathsRenderer.markdownToHtml(card.a) : card.a;
        backContent.innerHTML = `
          <div class="fc-answer-main">${aHtml}</div>
        `;
        if (window.MathsRenderer && window.MathsRenderer.renderElement) {
          window.MathsRenderer.renderElement(backContent);
        }
      }
    },

    /**
     * Révèle la réponse (retourne la carte)
     */
    revealAnswer() {
      if (this.isRevealed) return;
      this.isRevealed = true;

      const flipper = document.getElementById('fc-flipper');
      if (flipper) flipper.classList.add('is-flipped');

      const preActions = document.getElementById('fc-pre-reveal-actions');
      const postActions = document.getElementById('fc-post-reveal-actions');
      if (preActions) preActions.style.display = 'none';
      if (postActions) postActions.style.display = 'flex';

      // Jouer un son doux de retournement si disponible
      if (window.MathsAudio && window.MathsAudio.playTone) {
        window.MathsAudio.playTone(330, 'sine', 0.08);
      }
    },

    /**
     * Clic sur la carte : retourne la carte si pas encore révélée
     */
    handleCardClick() {
      if (!this.isRevealed) {
        this.revealAnswer();
      }
    },

    /**
     * Évaluation de la carte par l'élève : Bon ou Faux
     * C'est le cœur de la méthode Fabien Olicard / Leitner
     */
    submitEvaluation(isCorrect) {
      if (!this.isRevealed) return;

      const currentCard = this.sessionQueue[this.currentIndex];
      const state = this.getCardState(currentCard.id);

      state.reviewsCount = (state.reviewsCount || 0) + 1;
      state.lastReviewed = Date.now();

      if (isCorrect) {
        // === SUCCÈS ===
        state.correctCount = (state.correctCount || 0) + 1;
        state.consecutiveCorrect = (state.consecutiveCorrect || 0) + 1;

        if (!currentCard.failedInSession) {
          // Réussi du premier coup dans la session !
          this.sessionStats.firstTryCorrect++;
          // Monter d'une boîte (max Boîte 5)
          if (state.box < 5) {
            state.box++;
            this.sessionStats.promotedCount++;
          }
          // Gain de points XP
          const xp = 10;
          this.sessionStats.xpEarned += xp;
          if (window.MathsApp && window.MathsApp.awardXP) {
            window.MathsApp.awardXP(xp);
          }
        } else {
          // Réussi après avoir été raté plus tôt dans la session
          this.sessionStats.retriedLearned++;
          const xp = 5;
          this.sessionStats.xpEarned += xp;
          if (window.MathsApp && window.MathsApp.awardXP) {
            window.MathsApp.awardXP(xp);
          }
        }

        // Son de succès
        if (window.MathsAudio && window.MathsAudio.playSuccess) {
          window.MathsAudio.playSuccess();
        }

        // Passer à la carte suivante
        this.currentIndex++;
      } else {
        // === ERREUR / À REVOIR ===
        state.wrongCount = (state.wrongCount || 0) + 1;
        state.consecutiveCorrect = 0;
        // Règle d'or Leitner : retour immédiat en Boîte 1 !
        state.box = 1;

        currentCard.failedInSession = true;

        if (!this.sessionStats.missedCards.some(c => c.id === currentCard.id)) {
          this.sessionStats.missedCards.push(currentCard);
        }

        // Son d'erreur doux
        if (window.MathsAudio && window.MathsAudio.playError) {
          window.MathsAudio.playError();
        }

        // RÈGLE CLÉ : On ré-injecte la carte plus loin dans la session
        // pour que l'élève soit obligé de la réussir avant de clore sa séance !
        const reinsertOffset = Math.min(3, this.sessionQueue.length - this.currentIndex);
        const retryCard = {
          ...currentCard,
          isRetry: true
        };

        if (reinsertOffset <= 1) {
          // On la remet à la toute fin
          this.sessionQueue.push(retryCard);
        } else {
          // On la glisse 2 ou 3 cartes plus loin
          this.sessionQueue.splice(this.currentIndex + reinsertOffset, 0, retryCard);
        }

        this.currentIndex++;
      }

      this.saveStorage();
      this.renderCurrentCard();
    },

    /**
     * Termine la session et affiche le bilan / célébration
     */
    finishSession() {
      document.getElementById('flashcards-config-screen').style.display = 'none';
      document.getElementById('flashcards-play-screen').style.display = 'none';
      const summaryScreen = document.getElementById('flashcards-summary-screen');
      summaryScreen.style.display = 'block';

      // Confettis de réussite
      if (window.MathsConfetti && typeof window.MathsConfetti.celebrate === 'function') {
        window.MathsConfetti.celebrate();
      }

      const container = document.getElementById('fc-summary-container');
      if (!container) return;

      const totalUnique = this.sessionStats.totalCards;
      const firstTry = this.sessionStats.firstTryCorrect;
      const retried = this.sessionStats.retriedLearned;
      const pctFirstTry = totalUnique > 0 ? Math.round((firstTry / totalUnique) * 100) : 100;

      // Calculer l'état global actuel des boîtes pour les chapitres sélectionnés
      let allCards = [];
      (this.activeChapters || []).forEach(cid => {
        allCards = allCards.concat(this.getCourseCards(cid));
      });
      const countsByBox = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
      allCards.forEach(c => {
        const state = this.getCardState(c.id);
        countsByBox[state.box]++;
      });

      let motivationalMsg = "Super entraînement ! Votre mémoire à long terme se construit notion par notion.";
      if (pctFirstTry >= 80) {
        motivationalMsg = "Impressionnant ! Vos notions de cours sont remarquablement bien maîtrisées.";
      } else if (pctFirstTry < 50) {
        motivationalMsg = "Excellent travail d'apprentissage ! Les notions répétées aujourd'hui sont maintenant beaucoup plus solides.";
      }

      container.innerHTML = `
        <div class="fc-summary-header">
          <div class="fc-summary-badge">🎯 ${pctFirstTry}% de réussite au 1er essai</div>
          <p class="fc-summary-motivation">${motivationalMsg}</p>
        </div>

        <div class="fc-stats-grid">
          <div class="fc-stat-card">
            <div class="fc-stat-val text-green">${firstTry} / ${totalUnique}</div>
            <div class="fc-stat-label">Su du premier coup</div>
          </div>
          <div class="fc-stat-card">
            <div class="fc-stat-val text-amber">${retried}</div>
            <div class="fc-stat-label">Appris & validés en répétition</div>
          </div>
          <div class="fc-stat-card">
            <div class="fc-stat-val text-primary">▲ +${this.sessionStats.promotedCount}</div>
            <div class="fc-stat-label">Montée(s) de boîte</div>
          </div>
          <div class="fc-stat-card">
            <div class="fc-stat-val text-purple">+${this.sessionStats.xpEarned} XP</div>
            <div class="fc-stat-label">Points d'expérience gagnés</div>
          </div>
        </div>

        <div class="fc-box-distribution-section">
          <h4>📦 État actuel de vos boîtes de mémorisation (Chapitres révisés) :</h4>
          <div class="fc-boxes-strip large">
            <div class="fc-box-col b1">
              <span class="fc-box-num">${countsByBox[1]}</span>
              <span class="fc-box-title">Boîte 1<br><small>À revoir</small></span>
            </div>
            <div class="fc-box-col b2">
              <span class="fc-box-num">${countsByBox[2]}</span>
              <span class="fc-box-title">Boîte 2<br><small>En cours</small></span>
            </div>
            <div class="fc-box-col b3">
              <span class="fc-box-num">${countsByBox[3]}</span>
              <span class="fc-box-title">Boîte 3<br><small>Acquis</small></span>
            </div>
            <div class="fc-box-col b4">
              <span class="fc-box-num">${countsByBox[4]}</span>
              <span class="fc-box-title">Boîte 4<br><small>Solide</small></span>
            </div>
            <div class="fc-box-col b5">
              <span class="fc-box-num">${countsByBox[5]}</span>
              <span class="fc-box-title">Boîte 5 🏆<br><small>Long terme</small></span>
            </div>
          </div>
        </div>
      `;

      const retryBtn = document.getElementById('fc-retry-missed-btn');
      if (retryBtn) {
        if (this.sessionStats.missedCards.length > 0) {
          retryBtn.style.display = 'inline-block';
          retryBtn.textContent = `🔄 Réviser les ${this.sessionStats.missedCards.length} notion(s) ratée(s)`;
        } else {
          retryBtn.style.display = 'none';
        }
      }
    },

    /**
     * Relance immédiatement une session concentrée sur les cartes ratées
     */
    retryMissedOnly() {
      if (this.sessionStats.missedCards.length === 0) return;
      this.startSession(this.sessionStats.missedCards);
    }
  };

  // Initialisation au chargement du DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => window.MathsFlashcards.init());
  } else {
    window.MathsFlashcards.init();
  }

})();
