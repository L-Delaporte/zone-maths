/**
 * L'Établi des Maths — Contrôleur principal de l'application (6e → Licence)
 * État, niveaux et cycles, initialisation, navigation, URL, clavier, accessibilité,
 * en-tête et notifications. Les vues sont dans js/app/*.js (Object.assign sur MathsApp),
 * chargées après ce fichier ; l'initialisation a lieu au DOMContentLoaded.
 */

window.MathsApp = {
  currentLevel: '3eme',
  currentChapterId: 'N1',
  currentTab: 'train', // 'train', 'course', 'sheets', 'stats'
  currentFilterDomain: 'all',
  searchQuery: '',
  selectedSheetIndex: 0,
  generatedPracticeSheet: null,
  generatedDsByChapter: {},

  CYCLES: {
    college: { id: 'college', name: 'Collège', defaultLevel: '3eme', levels: ['6eme', '5eme', '4eme', '3eme'] },
    lycee: { id: 'lycee', name: 'Lycée', defaultLevel: '2nde', levels: ['2nde', '1ere', 'tale'] },
    licence: { id: 'licence', name: 'Licence & Concours', defaultLevel: 'L1', levels: ['L1', 'L2', 'L3', 'capes'] }
  },

  VALID_LEVELS: ['6eme', '5eme', '4eme', '3eme', '2nde', '1ere', 'tale', 'L1', 'L2', 'L3', 'capes'],

  LEVEL_LABELS: {
    '6eme': '6ème',
    '5eme': '5ème',
    '4eme': '4ème',
    '3eme': '3ème (DNB)',
    '2nde': 'Seconde',
    '1ere': '1ère Spécialité',
    'tale': 'Terminale (Spé/Exp)',
    'L1': 'Licence 1 (L1)',
    'L2': 'Licence 2 (L2)',
    'L3': 'Licence 3 (L3)',
    'capes': 'CAPES / Agrég'
  },

  getLevelName(level) {
    return this.LEVEL_LABELS[level] || level || 'Mathématiques';
  },

  init() {
    console.log('Initialisation de L\'Établi des Maths (Collège, Lycée, Licence)...');
    let savedLevel = window.MathsStorage.getCurrentLevel() || '3eme';
    this.currentLevel = savedLevel;
    this.initTheme();
    if (window.MathsAudio) {
      window.MathsAudio.updateToggleButton();
    }
    this.bindGlobalEvents();
    this.bindKeyboardShortcuts();
    this.bindClickableA11y();
    this.bindModalA11y();
    this.bindHistoryNavigation();
    this.renderDomainNav();
    this.updateHeaderProfile();
    // Les données du niveau courant sont chargées avant le premier affichage
    this.whenLevelReady(this.currentLevel, () => {
      this.switchLevel(this.currentLevel, false);
      const hasUrlParams = this.checkUrlShareParams();
      if (!hasUrlParams) {
        this.showHomeView();
      }
      // L'URL ne reflète la navigation qu'une fois le lien d'arrivée lu (sinon la sélection
      // du chapitre par défaut écraserait ?chapitre=… avant sa lecture)
      this._urlSyncReady = true;
    });
  },

  /**
   * Exécute fn une fois les données du niveau chargées (chargement à la demande,
   * voir js/dataLoader.js). Immédiat si le niveau est déjà disponible.
   */
  whenLevelReady(level, fn) {
    const loader = window.MathsDataLoader;
    if (!loader || !level || loader.isLevelLoaded(level)) return fn();
    document.body.classList.add('level-loading');
    const slowTimer = setTimeout(() => this.showToast('⏳ Chargement des contenus…', 2500), 400);
    return loader.ensureLevel(level)
      .then(() => fn())
      .catch(err => {
        console.error(err);
        this.showToast('⚠️ Impossible de charger les contenus de ce niveau. Vérifie ta connexion puis réessaie.', 5000);
      })
      .finally(() => {
        clearTimeout(slowTimer);
        document.body.classList.remove('level-loading');
      });
  },

  isLevelReady(level) {
    const loader = window.MathsDataLoader;
    return !loader || !level || loader.isLevelLoaded(level);
  },

  switchCycle(cycleId, targetLevel = null) {
    if (!this.CYCLES[cycleId]) return;

    this.hideHomeView();
    window.MathsStorage.setCurrentCycle(cycleId);

    // Met à jour les onglets de cycle
    document.querySelectorAll('.cycle-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-cycle') === cycleId);
      btn.setAttribute('aria-current', btn.getAttribute('data-cycle') === cycleId ? 'true' : 'false');
    });

    // Affiche le groupe de pilules correspondant
    document.querySelectorAll('.cycle-levels-group').forEach(group => {
      const isCurrent = group.id === `levels-group-${cycleId}`;
      group.style.display = isCurrent ? 'flex' : 'none';
      group.classList.toggle('active', isCurrent);
    });

    const cycleInfo = this.CYCLES[cycleId];
    const nextLevel = (targetLevel && cycleInfo.levels.includes(targetLevel))
      ? targetLevel
      : (cycleInfo.levels.includes(this.currentLevel) ? this.currentLevel : cycleInfo.defaultLevel);

    this.switchLevel(nextLevel, true);
  },

  switchLevel(level, autoSelectFirst = false) {
    if (!this.VALID_LEVELS.includes(level)) return;
    if (!this.isLevelReady(level)) return this.whenLevelReady(level, () => this.switchLevel(level, autoSelectFirst));

    this.hideHomeView();
    this.currentLevel = level;
    window.MathsStorage.setCurrentLevel(level);
    const currentCycle = window.MathsStorage.getCycleForLevel(level);

    // Met à jour l'onglet du cycle actif
    document.querySelectorAll('.cycle-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-cycle') === currentCycle);
      btn.setAttribute('aria-current', btn.getAttribute('data-cycle') === currentCycle ? 'true' : 'false');
    });

    // Affiche le groupe de niveaux correspondant au cycle
    document.querySelectorAll('.cycle-levels-group').forEach(group => {
      const isCurrent = group.id === `levels-group-${currentCycle}`;
      group.style.display = isCurrent ? 'flex' : 'none';
      group.classList.toggle('active', isCurrent);
    });

    // Met à jour les pilules du sélecteur
    document.querySelectorAll('.level-pill').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-level') === level);
    });

    const lvlLabel = this.getLevelName(level);
    const cycleInfo = this.CYCLES[currentCycle];
    const cycleName = cycleInfo ? cycleInfo.name : 'Maths';

    // Titre dynamique dans le header
    const titleEl = document.getElementById('app-main-title');
    if (titleEl) {
      titleEl.innerHTML = `L'Établi des Maths <span class="brand-level-tag badge-${currentCycle}">${lvlLabel}</span>`;
    }

    // Titre dynamique dans la barre latérale
    const sidebarTitle = document.querySelector('.sidebar-title-row h2');
    if (sidebarTitle) {
      sidebarTitle.textContent = `Progression ${lvlLabel}`;
    }

    // Filtrer les chapitres de ce niveau
    const levelChapters = (window.MATHS_CHAPTERS || []).filter(c => (c.level || '3eme') === level);
    const countEl = document.querySelector('.chapters-count');
    if (countEl) {
      countEl.textContent = `${levelChapters.length} chapitres`;
    }

    // Détermine le chapitre à sélectionner
    const currentExists = levelChapters.some(c => c.id === this.currentChapterId);
    if ((!currentExists || autoSelectFirst) && levelChapters.length > 0) {
      this.currentChapterId = levelChapters[0].id;
    }

    // Titre dynamique dans le footer et titre du document
    const footerTitleEl = document.getElementById('app-footer-title');
    if (footerTitleEl) {
      footerTitleEl.textContent = `L'Établi des Maths (${lvlLabel} • ${cycleName}) — Outils pour apprendre et pratiquer`;
    }
    document.title = `L'Établi des Maths (${lvlLabel} • ${cycleName}) — Outils pour apprendre et pratiquer | Créé par Loïc Delaporte`;

    this.renderDomainNav();
    this.renderChaptersGrid();
    this.selectChapter(this.currentChapterId);
    this.updateTierButtonsUI();

    const isLicenceCycle = currentCycle === 'licence';
    this.updateVisualizerButtonUI();

    if (this.currentTab === 'stats') {
      this.renderStatsView();
    }
  },

  // --- Gestion du Thème (Clair / Sombre) ---
  initTheme() {
    const saved = window.MathsStorage.load().theme || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    this.updateThemeButton(saved);
  },

  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    const data = window.MathsStorage.load();
    data.theme = next;
    window.MathsStorage.save(data);
    this.updateThemeButton(next);
  },

  updateThemeButton(theme) {
    const btn = document.getElementById('theme-toggle-btn');
    if (btn) {
      btn.innerHTML = theme === 'dark' ? '☀️ Mode Clair' : '🌙 Mode Sombre';
    }
  },

  // --- Navigation par Domaine & Chapitre ---
  bindGlobalEvents() {
    // Bouton thème
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) themeBtn.addEventListener('click', () => this.toggleTheme());

    // Déclencheur du tiroir mobile de chapitres
    const mobileChapterBtn = document.getElementById('mobile-chapter-btn');
    const sidebarChapters = document.getElementById('sidebar-chapters');
    const mobileArrow = document.getElementById('mobile-chapter-arrow');
    if (mobileChapterBtn && sidebarChapters) {
      mobileChapterBtn.addEventListener('click', () => {
        const isOpen = sidebarChapters.classList.toggle('mobile-open');
        mobileChapterBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        if (mobileArrow) {
          mobileArrow.textContent = isOpen ? '▴' : '▾';
        }
      });
    }

    // Bouton ouvrir passeport modal
    const passportBtn = document.getElementById('passport-btn');
    if (passportBtn) {
      passportBtn.addEventListener('click', () => this.switchTab('stats'));
    }

    // Recherche instantanée de chapitres
    const searchInput = document.getElementById('chapters-search-input');
    const searchClear = document.getElementById('chapters-search-clear');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        if (searchClear) {
          searchClear.style.display = this.searchQuery ? 'inline-block' : 'none';
        }
        this.renderChaptersGrid();
      });
    }
    if (searchClear) {
      searchClear.addEventListener('click', () => {
        if (searchInput) {
          searchInput.value = '';
          this.searchQuery = '';
          searchClear.style.display = 'none';
          searchInput.focus();
          this.renderChaptersGrid();
        }
      });
    }

    // Onglets principaux du chapitre
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tab = e.currentTarget.dataset.tab;
        this.switchTab(tab);
      });
    });

    // Filtres de domaine
    document.querySelectorAll('.domain-filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.domain-filter-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.currentFilterDomain = e.currentTarget.dataset.domain;
        this.renderChaptersGrid();
      });
    });

    // Boutons Diaporama (MathsMentales)
    const openDiapoBtn = document.getElementById('btn-open-diaporama');
    if (openDiapoBtn) {
      openDiapoBtn.addEventListener('click', () => {
        window.MathsDiaporama.openModal(this.currentChapterId);
      });
    }
    const quickDiapoBtn = document.getElementById('btn-launch-diapo-quick');
    if (quickDiapoBtn) {
      quickDiapoBtn.addEventListener('click', () => {
        window.MathsDiaporama.openModal(this.currentChapterId);
      });
    }

    // Boutons Devoir Flash
    const openQuizBtn = document.getElementById('btn-open-quiz');
    if (openQuizBtn) {
      openQuizBtn.addEventListener('click', () => {
        window.MathsQuizGenerator.openModal(this.currentChapterId);
      });
    }
    const quizFromSheetsBtn = document.getElementById('btn-quiz-from-sheets');
    if (quizFromSheetsBtn) {
      quizFromSheetsBtn.addEventListener('click', () => {
        window.MathsQuizGenerator.openModal(this.currentChapterId);
      });
    }

    // Bouton Flashcards (Mémorisation active Leitner / Fabien Olicard)
    const openFlashcardsBtn = document.getElementById('btn-open-flashcards');
    if (openFlashcardsBtn) {
      openFlashcardsBtn.addEventListener('click', () => {
        if (window.MathsFlashcards && typeof window.MathsFlashcards.openModal === 'function') {
          window.MathsFlashcards.openModal(this.currentChapterId);
        }
      });
    }

    // Bouton Partager le lien d'entraînement
    const shareBtn = document.getElementById('btn-share-training');
    if (shareBtn) {
      shareBtn.addEventListener('click', () => this.shareCurrentTraining());
    }

    // Bouton Question Aléatoire Infinie (Générateur procédural)
    const randomExoBtn = document.getElementById('btn-random-exercise');
    if (randomExoBtn) {
      randomExoBtn.addEventListener('click', () => {
        window.MathsAdaptiveEngine.nextExercise();
        this.renderTrainingView();
      });
    }

    // Bouton Réinitialiser TOUS les chapitres à 0%
    const resetAllBtn = document.getElementById('btn-reset-all-mastery');
    if (resetAllBtn) {
      resetAllBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const levelChapters = (window.MATHS_CHAPTERS || []).filter(c => (c.level || '3eme') === this.currentLevel);
        const levelName = this.getLevelName(this.currentLevel);
        if (confirm(`⚠️ Souhaitez-vous vraiment remettre à 0% la maîtrise de TOUS les ${levelChapters.length} chapitres de ${levelName} ?`)) {
          levelChapters.forEach(c => window.MathsStorage.resetChapterProgress(c.id));
          window.MathsAdaptiveEngine.state.manualTierSelected = false;
          window.MathsAdaptiveEngine.startChapterSession(this.currentChapterId);
          this.renderChaptersGrid();
          this.updateChapterMasteryUI(this.currentChapterId);
          this.renderTrainingView();
          if (this.currentTab === 'stats') {
            this.renderStatsView();
          }
        }
      });
    }

    // Bouton Réinitialiser le chapitre actuel à 0%
    const resetChapBtn = document.getElementById('btn-reset-chapter-mastery');
    if (resetChapBtn) {
      resetChapBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const curChap = (window.MATHS_CHAPTERS || []).find(c => c.id === this.currentChapterId);
        const chapName = curChap ? `${curChap.num} (${curChap.title})` : this.currentChapterId;
        if (confirm(`Remettre à 0% la maîtrise du chapitre ${chapName} ?`)) {
          window.MathsStorage.resetChapterProgress(this.currentChapterId);
          window.MathsAdaptiveEngine.state.manualTierSelected = false;
          window.MathsAdaptiveEngine.startChapterSession(this.currentChapterId);
          this.renderChaptersGrid();
          this.updateChapterMasteryUI(this.currentChapterId);
          this.renderTrainingView();
          if (this.currentTab === 'stats') {
            this.renderStatsView();
          }
        }
      });
    }

    // Clavier virtuel mathématique
    this.bindVirtualKeyboard();

    // Clic sur la flamme / série quotidienne (Daily Streak)
    const streakPill = document.getElementById('header-streak-pill');
    if (streakPill) {
      streakPill.addEventListener('click', () => this.openStreakModal());
    }

    // Fermeture de la modale streak au clic sur le fond sombre
    const streakModal = document.getElementById('streak-modal');
    if (streakModal) {
      streakModal.addEventListener('click', (e) => {
        if (e.target === streakModal) this.closeStreakModal();
      });
    }

    // Clic sur le niveau / XP pour afficher le popup de progression
    const levelPill = document.getElementById('header-level-pill');
    if (levelPill) {
      levelPill.addEventListener('click', () => this.openLevelModal());
    }
    const xpPill = document.getElementById('header-xp-pill');
    if (xpPill) {
      xpPill.addEventListener('click', () => this.openLevelModal());
    }

    // Fermeture de la modale level au clic sur le fond sombre
    const levelModal = document.getElementById('level-modal');
    if (levelModal) {
      levelModal.addEventListener('click', (e) => {
        if (e.target === levelModal) this.closeLevelModal();
      });
    }
  },

  /** Éléments cliquables non natifs (div onclick, cartes) : rendus accessibles au clavier. */
  CLICKABLE_SELECTOR: '[onclick]:not(button):not(a):not(input):not(select):not(textarea):not(label):not(.modal-overlay):not([class*="overlay"]), .chapter-trophy-card, .home-cycle-card',

  enhanceClickableA11y(root = document) {
    const nodes = root.querySelectorAll ? root.querySelectorAll(this.CLICKABLE_SELECTOR) : [];
    nodes.forEach(el => {
      const handler = el.getAttribute('onclick') || '';
      if (/event\.target\s*===\s*this/.test(handler)) return; // fermeture de fond de modale
      if (!el.hasAttribute('role')) el.setAttribute('role', 'button');
      if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0');
    });
  },

  bindClickableA11y() {
    this.enhanceClickableA11y();
    new MutationObserver(mutations => {
      mutations.forEach(m => m.addedNodes.forEach(n => {
        if (n.nodeType !== 1) return;
        if (n.matches && n.matches(this.CLICKABLE_SELECTOR)) this.enhanceClickableA11y(n.parentNode || document);
        else this.enhanceClickableA11y(n);
      }));
    }).observe(document.body, { childList: true, subtree: true });
    // Entrée / Espace activent les éléments role="button" non natifs
    document.addEventListener('keydown', e => {
      const el = e.target;
      if (!(e.key === 'Enter' || e.key === ' ') || !el || !el.matches || !el.matches('[role="button"]:not(button)')) return;
      e.preventDefault();
      e.stopPropagation();
      el.click();
    }, true);
  },

  /**
   * Accessibilité des modales : Échap ferme la modale du dessus, le focus y entre à
   * l'ouverture, reste piégé dedans (Tab) et revient à l'élément d'origine à la fermeture.
   */
  bindModalA11y() {
    const FOCUSABLE = 'button:not([disabled]), [href], input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])';
    // offsetParent est null pour les éléments position:fixed (les fonds de modale) : on utilise getClientRects
    const isOpen = m => m.style.display !== 'none' && m.getClientRects().length > 0;
    const visible = el => el.getClientRects().length > 0;
    const openModals = () => Array.from(document.querySelectorAll('.modal-overlay')).filter(isOpen);
    const returnFocus = new Map();

    new MutationObserver(mutations => {
      mutations.forEach(({ target: modal }) => {
        const open = modal.style.display !== 'none';
        if (open && !returnFocus.has(modal)) {
          returnFocus.set(modal, document.activeElement);
          setTimeout(() => {
            if (!isOpen(modal) || modal.contains(document.activeElement)) return;
            const first = Array.from(modal.querySelectorAll(FOCUSABLE)).find(visible);
            (first || modal).focus({ preventScroll: true });
          }, 60);
        } else if (!open && returnFocus.has(modal)) {
          const back = returnFocus.get(modal);
          returnFocus.delete(modal);
          if (back && document.contains(back) && back.focus) back.focus({ preventScroll: true });
        }
      });
    }).observe(document.body, { attributes: true, attributeFilter: ['style'], subtree: true });

    document.addEventListener('keydown', e => {
      const modals = openModals();
      if (!modals.length) return;
      const top = modals[modals.length - 1];
      if (e.key === 'Escape') {
        const closeBtn = Array.from(top.querySelectorAll('.modal-close-btn, .reward-modal-close, [aria-label="Fermer"]')).find(visible);
        if (closeBtn) {
          e.preventDefault();
          closeBtn.click();
        }
      } else if (e.key === 'Tab') {
        const items = Array.from(top.querySelectorAll(FOCUSABLE)).filter(visible);
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (!top.contains(document.activeElement)) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  },

  /**
   * Reflète la vue courante dans l'URL (?chapitre=ID) : liens partageables, bouton
   * « Retour » du navigateur et pages explorables par les moteurs de recherche.
   */
  syncUrl(params) {
    if (!this._urlSyncReady || this._restoringFromHistory || !window.history || !history.pushState) return;
    const current = new URLSearchParams(location.search);
    // Les paramètres d'outil d'un lien partagé (mode, palier…) restent tant qu'on ne change pas de vue
    const sameView = (params.chapitre || null) === (current.get('chapitre') || current.get('chapter') || current.get('chap'));
    if (sameView && (params.chapitre || !location.search)) return;
    const qs = new URLSearchParams(params).toString();
    history.pushState(params, '', qs ? `?${qs}` : location.pathname);
    // Statistiques d'audience : une « page vue » par chapitre consulté
    if (window.goatcounter && typeof window.goatcounter.count === 'function') {
      window.goatcounter.count({ path: location.pathname + location.search });
    }
  },

  bindHistoryNavigation() {
    window.addEventListener('popstate', () => {
      this._restoringFromHistory = true;
      try {
        const params = new URLSearchParams(location.search);
        const chap = params.get('chapitre') || params.get('chapter') || params.get('chap');
        if (chap && (window.MATHS_CHAPTERS || []).some(c => c.id === chap)) {
          this.selectChapter(chap);
          this.switchTab('train');
          this.hideHomeView();
        } else {
          this.showHomeView();
        }
      } finally {
        this._restoringFromHistory = false;
      }
    });
  },

  escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  },

  bindKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      const active = document.activeElement;
      const activeTag = active ? active.tagName.toLowerCase() : '';
      const isInputField = activeTag === 'input' || activeTag === 'textarea' || activeTag === 'select' || (active && active.isContentEditable);
      const isAnswerField = isInputField && !!active.closest('#exercise-input-zone');

      // Entrée/Espace sur un bouton ou un lien ciblé au clavier : laisser l'activation native
      if ((e.key === 'Enter' || e.code === 'Space') && active && active !== document.body && active.matches('button, a[href], [role="button"], summary')) return;

      // Si une modale est ouverte, ne pas interférer (flashcards, quiz, diaporama…)
      const openModal = Array.from(document.querySelectorAll('.modal-overlay')).some(m => m.style.display !== 'none' && m.getClientRects().length > 0);
      if (openModal) return;

      // Ne pas intercepter la saisie dans un champ autre que la réponse de l'exercice (recherche…)
      if (isInputField && !isAnswerField) return;

      // Bouton « Question suivante » réellement visible (aucune boîte de rendu si l'onglet est masqué)
      const nextBtn = document.getElementById('btn-next-exercise');
      const isNextVisible = nextBtn && nextBtn.style.display !== 'none' && nextBtn.getClientRects().length > 0;

      // Entrée avance toujours ; Espace et N seulement hors champ de saisie
      if (isNextVisible && (e.key === 'Enter' || (!isInputField && (e.code === 'Space' || e.key === 'n' || e.key === 'N')))) {
        e.preventDefault();
        nextBtn.click();
        return;
      }

      if (isInputField) return;

      // Raccourci H : Demander un indice
      if (e.key === 'h' || e.key === 'H') {
        const hint1Btn = document.getElementById('btn-hint-1');
        const hint2Btn = document.getElementById('btn-hint-2');
        if (window.MathsAdaptiveEngine.state.usedHintsCount === 0 && hint1Btn) {
          e.preventDefault();
          hint1Btn.click();
        } else if (hint2Btn) {
          e.preventDefault();
          hint2Btn.click();
        }
        return;
      }

      // Raccourcis QCM : 1, 2, 3, 4 ou A, B, C, D
      const mcqButtons = document.querySelectorAll('.mcq-opt-btn');
      if (mcqButtons && mcqButtons.length > 0) {
        let selectedIdx = -1;
        if (e.key === '1' || e.key === 'a' || e.key === 'A') selectedIdx = 0;
        else if (e.key === '2' || e.key === 'b' || e.key === 'B') selectedIdx = 1;
        else if (e.key === '3' || e.key === 'c' || e.key === 'C') selectedIdx = 2;
        else if (e.key === '4' || e.key === 'd' || e.key === 'D') selectedIdx = 3;

        if (selectedIdx >= 0 && selectedIdx < mcqButtons.length) {
          e.preventDefault();
          mcqButtons[selectedIdx].click();
          return;
        }
      }

      // Touche Entrée hors champ texte : valider si le bouton est visible
      if (e.key === 'Enter') {
        const validateBtn = document.getElementById('btn-validate-answer');
        if (validateBtn && validateBtn.style.display !== 'none') {
          e.preventDefault();
          validateBtn.click();
        }
      }
    });
  },

  /** Crédite de l'XP (flashcards, modes annexes) et rafraîchit l'en-tête. */
  awardXP(points) {
    if (!window.MathsStorage || !points) return null;
    const result = window.MathsStorage.addXp(points);
    this.updateHeaderProfile();
    return result;
  },

  updateHeaderProfile() {
    const data = window.MathsStorage.load();
    const streakInfo = (window.MathsStorage && typeof window.MathsStorage.getDailyStreakInfo === 'function')
      ? window.MathsStorage.getDailyStreakInfo()
      : { streak: (data.user && data.user.streak) || 0, isActiveToday: false };

    const levelEl = document.getElementById('header-user-level');
    const xpEl = document.getElementById('header-user-xp');
    const streakEl = document.getElementById('header-user-streak');

    if (levelEl) levelEl.textContent = `Niveau ${data.user.level}`;
    if (xpEl) xpEl.textContent = `${data.user.xp} XP`;
    if (streakEl) {
      const s = streakInfo.streak || 0;
      streakEl.textContent = `🔥 ${s}`;
      streakEl.title = streakInfo.isActiveToday
        ? `Série : ${s} jour(s) d'affilée • Défi du jour validé ! (Clique pour voir les détails)`
        : `Série : ${s} jour(s) d'affilée • Entraîne-toi aujourd'hui pour continuer ! (Clique pour voir les détails)`;
    }
  },

  renderDomainNav() {
    const navContainer = document.querySelector('.domain-filters-scroll');
    if (!navContainer) return;

    let filters = [];
    if (this.currentLevel === 'capes') {
      filters = [
        { domain: 'all', label: 'Tous' },
        { domain: 'oral1', label: '📐 Oral 1 : Leçons' },
        { domain: 'oral2', label: '⚖️ Oral 2 : Entretien' }
      ];
    } else {
      filters = [
        { domain: 'all', label: 'Tous' },
        { domain: 'nombres', label: '🔢 Nombres' },
        { domain: 'geometrie', label: '📐 Géométrie' },
        { domain: 'fonctions', label: this.currentLevel === '6eme' ? '📊 Données & proportionnalité' : '📈 Fonctions' },
        { domain: 'algo', label: '💻 Algo' }
      ];
    }

    // S'assurer que le filtre actif est valide pour le niveau actuel
    const validDomains = filters.map(f => f.domain);
    if (!validDomains.includes(this.currentFilterDomain)) {
      this.currentFilterDomain = 'all';
    }

    navContainer.innerHTML = filters.map(f => `
      <button class="domain-filter-btn ${f.domain === this.currentFilterDomain ? 'active' : ''}" data-domain="${f.domain}">
        ${f.label}
      </button>
    `).join('');

    navContainer.querySelectorAll('.domain-filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        navContainer.querySelectorAll('.domain-filter-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.currentFilterDomain = e.currentTarget.dataset.domain;
        this.renderChaptersGrid();
      });
    });
  },

  renderChaptersGrid() {
    const container = document.getElementById('chapters-list-container');
    if (!container) return;

    const allChapters = window.MATHS_CHAPTERS || [];
    const levelChapters = allChapters.filter(c => (c.level || '3eme') === this.currentLevel);
    let filtered = this.currentFilterDomain === 'all'
      ? levelChapters
      : levelChapters.filter(c => {
          if (this.currentLevel === 'capes') {
            if (this.currentFilterDomain === 'oral1') return c.id !== 'capes-oral2' && c.domain !== 'oral2';
            if (this.currentFilterDomain === 'oral2') return c.id === 'capes-oral2' || c.domain === 'oral2';
          }
          if (c.domain === this.currentFilterDomain) return true;
          if (this.currentFilterDomain === 'nombres' && (c.domain === 'algebre' || c.domain === 'arithmetique')) return true;
          if (this.currentFilterDomain === 'geometrie' && (c.domain === 'espace' || c.domain === 'vecteurs' || c.domain === 'trigo')) return true;
          if (this.currentFilterDomain === 'fonctions' && (c.domain === 'gestion' || c.domain === 'analyse' || c.domain === 'suites' || c.domain === 'calcul')) return true;
          if (this.currentFilterDomain === 'algo' && (c.domain === 'stats' || c.domain === 'probas' || c.domain === 'numerique' || c.domain === 'python')) return true;
          return false;
        });

    const query = (this.searchQuery || '').trim().toLowerCase();
    if (query) {
      filtered = filtered.filter(c => {
        const idMatch = c.id.toLowerCase().includes(query);
        const numMatch = (c.num || '').toLowerCase().includes(query);
        const titleMatch = (c.title || '').toLowerCase().includes(query);
        const shortTitleMatch = (c.shortTitle || '').toLowerCase().includes(query);
        const domainMatch = (c.domainName || '').toLowerCase().includes(query);
        const descMatch = (c.description || '').toLowerCase().includes(query);
        return idMatch || numMatch || titleMatch || shortTitleMatch || domainMatch || descMatch;
      });
    }

    container.innerHTML = '';

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="padding: 1.5rem 0.5rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
          🔍 Aucun chapitre ne correspond à "<strong>${this.escapeHtml(this.searchQuery)}</strong>".
        </div>
      `;
      return;
    }

    filtered.forEach(chap => {
      const progress = window.MathsStorage.getChapterProgress(chap.id);
      const card = document.createElement('button');
      card.className = `chapter-card ${chap.id === this.currentChapterId ? 'active' : ''}`;
      card.setAttribute('data-chapter-id', chap.id);

      card.innerHTML = `
        <div class="chap-badge-id" style="background-color: ${chap.color}20; color: ${chap.color};">
          ${chap.num}
        </div>
        <div class="chap-info">
          <span class="chap-title">${chap.shortTitle || chap.title}</span>
          <span class="chap-desc">${chap.domainName}</span>
        </div>
        <div class="chap-progress-pill">
          <div class="pill-fill" style="width: ${progress.mastery || 0}%;"></div>
          <span class="pill-text">${progress.mastery || 0}%</span>
        </div>
      `;

      card.addEventListener('click', () => {
        this.selectChapter(chap.id);
      });

      container.appendChild(card);
    });
  },

  selectChapter(chapterId) {
    const chapter = (window.MATHS_CHAPTERS || []).find(c => c.id === chapterId);
    if (!chapter) return;
    if (!this.isLevelReady(chapter.level)) return this.whenLevelReady(chapter.level, () => this.selectChapter(chapterId));
    this.currentChapterId = chapterId;
    this.syncUrl({ chapitre: chapterId });

    // Synchroniser le niveau actif si nécessaire
    if (chapter.level && chapter.level !== this.currentLevel) {
      this.switchLevel(chapter.level, false);
    }
    this.hideHomeView();
    if (window.MathsStorage && window.MathsStorage.setLastActiveChapter) {
      window.MathsStorage.setLastActiveChapter(chapter.id, window.MathsAdaptiveEngine ? window.MathsAdaptiveEngine.state.currentTier : 1);
    }
    this.updateTierButtonsUI();

    // Mise à jour de la sélection dans la barre latérale / grille
    document.querySelectorAll('.chapter-card').forEach(c => {
      c.classList.toggle('active', c.dataset.chapterId === chapterId);
    });

    // En-tête du chapitre
    const titleEl = document.getElementById('chapter-hero-title');
    const domainEl = document.getElementById('chapter-hero-domain');
    const descEl = document.getElementById('chapter-hero-desc');
    const masteryEl = document.getElementById('chapter-hero-mastery');
    const masteryFill = document.getElementById('chapter-hero-mastery-fill');

    // Mise à jour de la barre mobile de sélection de chapitre et fermeture du tiroir
    const mobileLabel = document.getElementById('mobile-chapter-label');
    if (mobileLabel) {
      mobileLabel.textContent = `${chapter.num || chapter.id} : ${chapter.shortTitle || chapter.title}`;
    }
    const sidebarChapters = document.getElementById('sidebar-chapters');
    if (sidebarChapters) {
      sidebarChapters.classList.remove('mobile-open');
    }
    const mobileArrow = document.getElementById('mobile-chapter-arrow');
    if (mobileArrow) {
      mobileArrow.textContent = '▾';
    }
    const mobileBtn = document.getElementById('mobile-chapter-btn');
    if (mobileBtn) {
      mobileBtn.setAttribute('aria-expanded', 'false');
    }

    const progress = window.MathsStorage.getChapterProgress(chapterId);

    if (titleEl) titleEl.textContent = `${chapter.num} : ${chapter.title}`;
    if (domainEl) {
      domainEl.textContent = chapter.domainName;
      domainEl.style.backgroundColor = `${chapter.color}20`;
      domainEl.style.color = chapter.color;
    }
    if (descEl) descEl.textContent = chapter.description;

    // Démarrage de la session adaptative ZPD
    window.MathsAdaptiveEngine.startChapterSession(chapterId);

    // Mise à jour réactive immédiate de la jauge de maîtrise (héro + barre latérale)
    this.updateChapterMasteryUI(chapterId);

    // Mise à jour du bouton contextuel Labo 2D/3D
    this.updateVisualizerButtonUI(chapterId);

    // Rafraîchir l'onglet actif
    this.refreshCurrentTab();
  },

  updateChapterMasteryUI(chapterId) {
    if (!chapterId) chapterId = this.currentChapterId;
    if (!chapterId) return;

    const progress = window.MathsStorage.getChapterProgress(chapterId);
    const mastery = progress.mastery || 0;

    // 1. Jauge héro dans l'en-tête du chapitre actif
    const masteryEl = document.getElementById('chapter-hero-mastery');
    const masteryFill = document.getElementById('chapter-hero-mastery-fill');
    if (masteryEl) masteryEl.textContent = `${mastery}%`;
    if (masteryFill) masteryFill.style.width = `${mastery}%`;

    // 1b. Pastille de maîtrise sur la barre mobile de sélection
    const mobileMasteryTag = document.getElementById('mobile-chapter-mastery-tag');
    if (mobileMasteryTag) {
      mobileMasteryTag.textContent = `${mastery}%`;
      mobileMasteryTag.className = 'm-chap-mastery-pill' + (mastery >= 80 ? ' high' : (mastery >= 40 ? ' mid' : ''));
    }

    // 2. Pastille de progression sur la carte latérale du chapitre
    const card = document.querySelector(`.chapter-card[data-chapter-id="${chapterId}"]`);
    if (card) {
      const pillFill = card.querySelector('.pill-fill');
      const pillText = card.querySelector('.pill-text');
      if (pillFill) pillFill.style.width = `${mastery}%`;
      if (pillText) pillText.textContent = `${mastery}%`;
    }

    // 3. Rafraîchir l'onglet ou modale de bilan si ouverte
    const modal = document.getElementById('stats-modal');
    if (modal && modal.classList.contains('active')) {
      this.renderStatsModal();
    }
  },

  switchTab(tabName) {
    this.currentTab = tabName;
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabName);
    });
    document.querySelectorAll('.tab-pane').forEach(pane => {
      pane.classList.toggle('active', pane.id === `tab-pane-${tabName}`);
    });
    this.refreshCurrentTab();
  },

  refreshCurrentTab() {
    if (this.currentTab === 'train') {
      this.renderTrainingView();
    } else if (this.currentTab === 'course') {
      this.renderCourseView();
    } else if (this.currentTab === 'sheets') {
      this.renderSheetsView();
    } else if (this.currentTab === 'stats') {
      this.renderStatsView();
    }
  },

  /** Annonce un message aux lecteurs d'écran (zone aria-live invisible). */
  announce(msg) {
    let live = document.getElementById('sr-live-region');
    if (!live) {
      live = document.createElement('div');
      live.id = 'sr-live-region';
      live.className = 'sr-only';
      live.setAttribute('aria-live', 'assertive');
      live.setAttribute('role', 'status');
      document.body.appendChild(live);
    }
    live.textContent = '';
    setTimeout(() => { live.textContent = msg; }, 50);
  },

  /** Annonce le titre du retour de correction (juste / faux / indice). */
  announceFeedback(container) {
    const h = container && container.querySelector('.feedback-header h4');
    if (h) this.announce(h.textContent.trim());
  },

  showToast(msg, duration = 3500) {
    let toast = document.getElementById('app-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'app-toast';
      toast.className = 'app-toast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      document.body.appendChild(toast);
    }
    toast.innerHTML = msg;
    toast.classList.add('visible');
    clearTimeout(this._toastTimeout);
    this._toastTimeout = setTimeout(() => {
      toast.classList.remove('visible');
    }, duration);
  },

  checkUrlShareParams() {
    try {
      const params = new URLSearchParams(window.location.search);
      const chapParam = params.get('chapitre') || params.get('chapter') || params.get('chap');
      const tierParam = parseInt(params.get('palier') || params.get('tier'), 10);
      const levelParam = params.get('level') || params.get('niveau');
      const modeParam = (params.get('mode') || params.get('tool') || '').toLowerCase();

      const autoGen = params.get('generate') === '1' || (modeParam === 'quiz' || modeParam === 'devoir');

      // Charger d'abord les données du niveau visé par le lien partagé
      const linkedChap = chapParam && (window.MATHS_CHAPTERS || []).find(c => c.id.toLowerCase() === chapParam.toLowerCase());
      const neededLevel = linkedChap ? linkedChap.level : (this.VALID_LEVELS.includes(levelParam) ? levelParam : null);
      if (neededLevel && !this.isLevelReady(neededLevel)) {
        this.whenLevelReady(neededLevel, () => {
          if (!this.checkUrlShareParams()) this.showHomeView();
        });
        return true;
      }

      let handled = false;

      if (levelParam) {
        if (this.VALID_LEVELS.includes(levelParam)) {
          this.switchLevel(levelParam, true);
          this.hideHomeView();
          handled = true;
        }
      }

      if (chapParam) {
        const allChapters = window.MATHS_CHAPTERS || [];
        const targetChap = allChapters.find(c => c.id.toLowerCase() === chapParam.toLowerCase());
        if (targetChap) {
          if (targetChap.level && targetChap.level !== this.currentLevel) {
            this.switchLevel(targetChap.level, false);
          }
          this.selectChapter(targetChap.id);
          this.switchTab('train');
          this.hideHomeView();
          if (tierParam && tierParam >= 1 && tierParam <= 4) {
            setTimeout(() => {
              // Si l'enseignant partage un palier précis pour une IE, s'assurer que le palier est accessible
              window.MathsStorage.updateChapterProgress(targetChap.id, p => {
                p.validatedTiers = p.validatedTiers || [];
                for (let t = 1; t < tierParam; t++) {
                  if (!p.validatedTiers.includes(t)) p.validatedTiers.push(t);
                }
                return p;
              });
              window.MathsAdaptiveEngine.setTier(tierParam);
              this.renderTrainingView();
              this.showToast(`🎯 <strong>Entraînement ciblé :</strong> ${targetChap.shortTitle || targetChap.title} (Palier ${tierParam})`, 4000);
            }, 250);
          }
          handled = true;
        }
      }

      if (modeParam) {
        this.hideHomeView();
        setTimeout(() => {
          if (modeParam === 'rituel' || modeParam === 'diaporama') {
            this.openDiaporamaModal(null, false);
          } else if (modeParam === 'quiz' || modeParam === 'devoir') {
            this.openQuizModal(null, autoGen);
          } else if (modeParam === 'flashcards' || modeParam === 'flashcard') {
            this.openFlashcardsModal(null);
          }
        }, 200);
        handled = true;
      }

      return handled;
    } catch (err) {
      console.warn('Erreur lecture paramètres URL :', err);
    }
    return false;
  },
};

document.addEventListener('DOMContentLoaded', () => window.MathsApp.init());
