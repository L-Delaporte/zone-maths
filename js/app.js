/**
 * Zone-Maths — Contrôleur principal de l'application (Cycle 4 : 5e, 4e, 3e)
 * Gestion des vues, navigation par chapitre et domaine, clavier virtuel mathématique,
 * rendu réactif et interactions pédagogiques.
 */

document.addEventListener('DOMContentLoaded', () => {
  window.MathsApp = {
    currentLevel: '3eme',
    currentChapterId: 'N1',
    currentTab: 'train', // 'train', 'course', 'sheets', 'stats'
    currentFilterDomain: 'all',
    searchQuery: '',
    selectedSheetIndex: 0,

    init() {
      console.log('Initialisation de Maths Collège Cycle 4...');
      this.currentLevel = window.MathsStorage.getCurrentLevel() || '3eme';
      this.initTheme();
      if (window.MathsAudio) {
        window.MathsAudio.updateToggleButton();
      }
      this.bindGlobalEvents();
      this.bindKeyboardShortcuts();
      this.renderDomainNav();
      this.switchLevel(this.currentLevel, false);
      this.checkUrlShareParams();
      this.updateHeaderProfile();
    },

    switchLevel(level, autoSelectFirst = false) {
      if (!['5eme', '4eme', '3eme'].includes(level)) return;
      this.currentLevel = level;
      window.MathsStorage.setCurrentLevel(level);

      // Met à jour les pilules du sélecteur
      document.querySelectorAll('.level-pill').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-level') === level);
      });

      // Titre dynamique dans le header
      const titleEl = document.getElementById('app-main-title');
      const levelLabels = {
        '5eme': '5ème',
        '4eme': '4ème',
        '3eme': '3ème (DNB)'
      };
      if (titleEl) {
        titleEl.innerHTML = `Zone-Maths <span class="brand-level-tag">${levelLabels[level] || 'Collège'}</span>`;
      }

      // Titre dynamique dans la barre latérale
      const sidebarTitle = document.querySelector('.sidebar-title-row h2');
      if (sidebarTitle) {
        const sideLabels = { '5eme': 'Progression 5ème', '4eme': 'Progression 4ème', '3eme': 'Progression 3ème' };
        sidebarTitle.textContent = sideLabels[level] || 'Progression';
      }

      // Filtrer les chapitres de ce niveau
      const levelChapters = (window.MATHS_CHAPTERS || []).filter(c => !c.level || c.level === level);
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
      const lvlLabel = level === '5eme' ? '5ème' : (level === '4eme' ? '4ème' : '3ème');
      if (footerTitleEl) {
        footerTitleEl.textContent = `Zone-Maths (${lvlLabel}) — Zone Optimale d'Apprentissage (ZPD)`;
      }
      document.title = `Zone-Maths (${lvlLabel}) — Zone Optimale d'Apprentissage | Créé par Loïc Delaporte, Professeur de Mathématiques`;

      this.renderChaptersGrid();
      this.selectChapter(this.currentChapterId);
      this.updateTierButtonsUI();

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
          const levelChapters = (window.MATHS_CHAPTERS || []).filter(c => !c.level || c.level === this.currentLevel);
          const levelName = this.currentLevel === '3eme' ? '3ème' : this.currentLevel === '4eme' ? '4ème' : '5ème';
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
    },

    bindKeyboardShortcuts() {
      document.addEventListener('keydown', (e) => {
        const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
        const isInputField = activeTag === 'input' || activeTag === 'textarea';

        const nextBtn = document.getElementById('btn-next-exercise');
        const isNextVisible = nextBtn && nextBtn.style.display !== 'none';

        // Si la solution ou le bouton "Question Suivante" est affiché, Entrée, Espace ou N avance
        if (isNextVisible && (e.key === 'Enter' || e.code === 'Space' || e.key === 'n' || e.key === 'N')) {
          e.preventDefault();
          nextBtn.click();
          return;
        }

        // Ne pas intercepter les touches si l'utilisateur est en train de taper dans un champ de saisie
        if (isInputField) return;

        // Si une modale est ouverte, ne pas interférer
        const openModal = document.querySelector('.modal-overlay:not([style*="display: none"])');
        if (openModal) return;

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

    updateHeaderProfile() {
      const data = window.MathsStorage.load();
      const levelEl = document.getElementById('header-user-level');
      const xpEl = document.getElementById('header-user-xp');
      const streakEl = document.getElementById('header-user-streak');

      if (levelEl) levelEl.textContent = `Niveau ${data.user.level}`;
      if (xpEl) xpEl.textContent = `${data.user.xp} XP`;
      if (streakEl) streakEl.textContent = `🔥 ${data.user.streak || 0}`;
    },

    renderDomainNav() {
      // Déjà pré-câblé dans HTML
    },

    renderChaptersGrid() {
      const container = document.getElementById('chapters-list-container');
      if (!container) return;

      const allChapters = window.MATHS_CHAPTERS || [];
      const levelChapters = allChapters.filter(c => !c.level || c.level === this.currentLevel);
      let filtered = this.currentFilterDomain === 'all'
        ? levelChapters
        : levelChapters.filter(c => {
            if (c.domain === this.currentFilterDomain) return true;
            if (this.currentFilterDomain === 'geometrie' && c.domain === 'espace') return true;
            if (this.currentFilterDomain === 'fonctions' && c.domain === 'gestion') return true;
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
            🔍 Aucun chapitre ne correspond à "<strong>${this.searchQuery}</strong>".
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
      this.currentChapterId = chapterId;
      const chapter = (window.MATHS_CHAPTERS || []).find(c => c.id === chapterId);
      if (!chapter) return;

      // Synchroniser le niveau actif si nécessaire
      if (chapter.level && chapter.level !== this.currentLevel) {
        this.currentLevel = chapter.level;
        window.MathsStorage.setCurrentLevel(chapter.level);
        document.querySelectorAll('.level-pill').forEach(btn => {
          btn.classList.toggle('active', btn.getAttribute('data-level') === chapter.level);
        });
        const titleEl = document.getElementById('app-main-title');
        const levelLabels = { '5eme': '5ème', '4eme': '4ème', '3eme': '3ème (DNB)' };
        if (titleEl) titleEl.innerHTML = `Zone-Maths <span class="brand-level-tag">${levelLabels[chapter.level] || 'Collège'}</span>`;
        
        const footerTitleEl = document.getElementById('app-footer-title');
        const lvlLabel = chapter.level === '5eme' ? '5ème' : (chapter.level === '4eme' ? '4ème' : '3ème');
        if (footerTitleEl) footerTitleEl.textContent = `Zone-Maths (${lvlLabel}) — Zone Optimale d'Apprentissage (ZPD)`;
        document.title = `Zone-Maths (${lvlLabel}) — Zone Optimale d'Apprentissage | Créé par Loïc Delaporte, Professeur de Mathématiques`;
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

    // =========================================================================
    // 1. ESPACE ENTRAÎNEMENT ADAPTATIF (ZONE OPTIMALE / ZPD)
    // =========================================================================
    renderTrainingView() {
      const engine = window.MathsAdaptiveEngine;
      const exercise = engine.state.currentExercise;

      // 1. Mise à jour de la jauge ZPD, des paliers et de la maîtrise
      this.renderZpdGauge();
      this.updateChapterMasteryUI(this.currentChapterId);

      // Paliers boutons (gestion des déblocages et choix de palier)
      this.renderTierButtons();

      // 2. Affichage de l'exercice
      const container = document.getElementById('exercise-statement-box');
      const interactionContainer = document.getElementById('exercise-input-zone');
      const feedbackContainer = document.getElementById('exercise-feedback-zone');

      if (!exercise) {
        if (container) container.innerHTML = `<p class="math-p">Aucun exercice disponible pour ce chapitre.</p>`;
        return;
      }

      // Énoncé
      if (container) {
        container.innerHTML = `
          <div class="exo-header-bar">
            <span class="exo-tier-tag tier-${exercise.tier}">Palier ${exercise.tier} : ${this.getTierName(exercise.tier, activeChapLevel)}</span>
            <span class="exo-skill-tag">${exercise.skill || 'Mathématiques'}</span>
          </div>
          <h3 class="exo-title">${exercise.title}</h3>
          <div class="exo-body">${window.MathsRenderer.markdownToHtml(exercise.statement)}</div>
        `;
        window.MathsRenderer.renderElement(container);
      }

      // Zone de saisie / Interaction
      if (interactionContainer) {
        interactionContainer.innerHTML = '';
        if (exercise.type === 'mcq') {
          // Normalisation défensive choices -> options
          if (!exercise.options && exercise.choices) exercise.options = exercise.choices;
          if (exercise.correctIndex === undefined && exercise.options && exercise.answer) {
            exercise.correctIndex = exercise.options.indexOf(exercise.answer);
            if (exercise.correctIndex === -1) exercise.correctIndex = 0;
          }
          if (!exercise.options) exercise.options = [];

          // Affichage QCM
          const mcqBox = document.createElement('div');
          mcqBox.className = 'mcq-options-grid';

          exercise.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = 'mcq-opt-btn';
            btn.setAttribute('data-index', idx);
            btn.innerHTML = `
              <span class="mcq-letter">${String.fromCharCode(65 + idx)}</span>
              <span class="mcq-text">${opt}</span>
            `;
            btn.addEventListener('click', () => {
              document.querySelectorAll('.mcq-opt-btn').forEach(b => b.classList.remove('selected'));
              btn.classList.add('selected');
              this.selectedMcqAnswer = idx;
            });
            mcqBox.appendChild(btn);
          });

          // Raccourcis clavier guide
          const kbdHint = document.createElement('div');
          kbdHint.className = 'kbd-hint';
          kbdHint.innerHTML = `<span>⌨️ Raccourcis :</span> <kbd class="kbd-badge">A</kbd> <kbd class="kbd-badge">B</kbd> <kbd class="kbd-badge">C</kbd> <kbd class="kbd-badge">D</kbd> pour choisir, <kbd class="kbd-badge">Entrée</kbd> pour valider, <kbd class="kbd-badge">H</kbd> pour indice`;
          mcqBox.appendChild(kbdHint);

          interactionContainer.appendChild(mcqBox);
          window.MathsRenderer.renderElement(mcqBox);
          this.selectedMcqAnswer = null;

        } else {
          // Saisie exacte (input text avec preview KaTeX)
          const inputWrapper = document.createElement('div');
          inputWrapper.className = 'exact-input-wrapper';

          // Placeholder neutre qui ne donne JAMAIS la réponse aux élèves
          let safePlaceholder = 'Votre réponse...';
          const ansStr = String(exercise.answer || '').trim();
          if (ansStr.includes('/')) {
            safePlaceholder = 'Ex: 3/4 (fraction irréductible)';
          } else if (ansStr.includes('^')) {
            safePlaceholder = 'Ex: 10^3';
          } else if (!isNaN(parseFloat(ansStr))) {
            safePlaceholder = 'Nombre (ex: 12 ou -4)';
          }

          inputWrapper.innerHTML = `
            <div class="input-row">
              <input type="text" id="math-user-input" class="math-text-input" placeholder="${safePlaceholder}" autocomplete="off" />
              <div id="math-preview-badge" class="math-preview-badge" style="display:none;"></div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.4rem;">
              <p class="input-tip" style="margin:0;">💡 Pour une fraction, écris par exemple <code>13/7</code> ou utilise le clavier virtuel ci-dessous.</p>
              <div class="kbd-hint" style="margin:0;"><span>⌨️</span> <kbd class="kbd-badge">Entrée</kbd> pour valider, <kbd class="kbd-badge">H</kbd> pour indice</div>
            </div>
          `;
          interactionContainer.appendChild(inputWrapper);

          const inputField = inputWrapper.querySelector('#math-user-input');
          const previewBadge = inputWrapper.querySelector('#math-preview-badge');

          inputField.addEventListener('input', () => {
            window.MathsRenderer.renderPreview(inputField.value, previewBadge);
          });

          inputField.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              e.stopPropagation();
              // Si le bouton "Question Suivante" est visible, avancer immédiatement
              const nextBtnEl = document.getElementById('btn-next-exercise');
              if (nextBtnEl && nextBtnEl.style.display !== 'none') {
                nextBtnEl.click();
                return;
              }
              this.submitCurrentAnswer();
            }
          });

          setTimeout(() => inputField.focus(), 100);
        }
      }

      // Nettoyer la zone de feedback
      if (feedbackContainer) {
        feedbackContainer.innerHTML = '';
        feedbackContainer.style.display = 'none';
      }

      // Réinitialiser les boutons d'action
      const validateBtn = document.getElementById('btn-validate-answer');
      const nextBtn = document.getElementById('btn-next-exercise');
      const hint1Btn = document.getElementById('btn-hint-1');
      const hint2Btn = document.getElementById('btn-hint-2');

      if (validateBtn) {
        validateBtn.style.display = 'inline-flex';
        validateBtn.onclick = () => this.submitCurrentAnswer();
      }
      if (nextBtn) {
        nextBtn.style.display = 'none';
        nextBtn.onclick = () => {
          engine.nextExercise();
          this.renderTrainingView();
        };
      }
      if (hint1Btn) {
        hint1Btn.onclick = () => this.showHint(1);
      }
      if (hint2Btn) {
        hint2Btn.onclick = () => this.showHint(2);
      }
    },

    renderZpdGauge() {
      // Zone cognitive ZPD retirée de l'interface à la demande de l'utilisateur
    },

    getCurrentChapterLevel() {
      if (this.currentChapterId) {
        if (this.currentChapterId.startsWith('5')) return '5eme';
        if (this.currentChapterId.startsWith('4')) return '4eme';
      }
      return this.currentLevel || '3eme';
    },

    getTierButtonLabel(tier, level = null) {
      const lvl = level || this.getCurrentChapterLevel();
      if (lvl === '5eme') {
        const labels = {
          1: "Palier 1 : Socle",
          2: "Palier 2 : Guidé",
          3: "Palier 3 : Approfondissement",
          4: "Palier 4 : Défi 4ème"
        };
        return labels[tier] || `Palier ${tier}`;
      } else if (lvl === '4eme') {
        const labels = {
          1: "Palier 1 : Socle",
          2: "Palier 2 : Guidé",
          3: "Palier 3 : Approfondissement",
          4: "Palier 4 : Défi 3ème"
        };
        return labels[tier] || `Palier ${tier}`;
      } else {
        const labels = {
          1: "Palier 1 : Socle",
          2: "Palier 2 : Guidé",
          3: "Palier 3 : Brevet",
          4: "Palier 4 : Défi Seconde"
        };
        return labels[tier] || `Palier ${tier}`;
      }
    },

    getTierName(tier, level = null) {
      const lvl = level || this.getCurrentChapterLevel();
      if (lvl === '5eme') {
        const names = {
          1: "Socle & Automatismes",
          2: "Entraînement Guidé",
          3: "Approfondissement 5e",
          4: "Défi 4ème (Expert)"
        };
        return names[tier] || `Niveau ${tier}`;
      } else if (lvl === '4eme') {
        const names = {
          1: "Socle & Automatismes",
          2: "Entraînement Guidé",
          3: "Approfondissement 4e",
          4: "Défi 3ème (Expert)"
        };
        return names[tier] || `Niveau ${tier}`;
      } else {
        const names = {
          1: "Socle & Automatismes",
          2: "Entraînement Guidé",
          3: "Objectif Brevet (DNB)",
          4: "Défi Seconde (Lycée)"
        };
        return names[tier] || `Niveau ${tier}`;
      }
    },

    renderTierButtons() {
      const engine = window.MathsAdaptiveEngine;
      const activeChapLevel = this.getCurrentChapterLevel();
      const progress = window.MathsStorage.getChapterProgress(this.currentChapterId);
      const valTiers = progress.validatedTiers || [];

      document.querySelectorAll('.tier-pill-btn').forEach(btn => {
        const tier = parseInt(btn.dataset.tier, 10);
        const isUnlocked = engine ? engine.isTierUnlocked(this.currentChapterId, tier) : (tier === 1);
        const isValidated = valTiers.includes(tier);
        const isActive = (tier === (engine && engine.state ? engine.state.currentTier : 1));
        const baseLabel = this.getTierButtonLabel(tier, activeChapLevel);

        if (!isUnlocked) {
          // Palier verrouillé : l'élève doit d'abord terminer le précédent
          btn.innerHTML = `<span class="tier-lock-icon">🔒</span> ${baseLabel}`;
          btn.classList.add('tier-locked');
          btn.classList.remove('active', 'tier-validated');
          btn.title = `Palier ${tier} verrouillé — Termine d'abord le Palier ${tier - 1} pour le débloquer`;
          btn.onclick = () => {
            if (window.MathsAudio) window.MathsAudio.playHint();
            this.showToast(`🔒 <strong>Palier ${tier} verrouillé</strong><br>Termine d'abord le Palier ${tier - 1} pour débloquer ce palier !`, 3500);
          };
        } else {
          // Palier débloqué : l'élève peut toujours choisir lui-même ce palier
          btn.innerHTML = `${isValidated ? '<span class="tier-check-icon">✓</span> ' : ''}${baseLabel}`;
          btn.classList.remove('tier-locked');
          btn.classList.toggle('active', isActive);
          btn.classList.toggle('tier-validated', isValidated);
          btn.title = isValidated
            ? `Palier ${tier} validé — Clique pour choisir ce palier`
            : `Palier ${tier} débloqué — Clique pour t'entraîner sur ce palier`;
          btn.onclick = () => {
            if (engine) {
              engine.setTier(tier);
              this.renderTrainingView();
            }
          };
        }
      });
    },

    updateTierButtonsUI() {
      this.renderTierButtons();
    },

    submitCurrentAnswer() {
      const engine = window.MathsAdaptiveEngine;
      const exercise = engine.state.currentExercise;
      if (!exercise) return;

      let userAnswer = null;
      if (exercise.type === 'mcq') {
        if (this.selectedMcqAnswer === null || this.selectedMcqAnswer === undefined) {
          alert('Veuillez sélectionner une réponse parmi les options proposées.');
          return;
        }
        userAnswer = this.selectedMcqAnswer;
      } else {
        const input = document.getElementById('math-user-input');
        if (!input || !input.value.trim()) {
          alert('Veuillez saisir votre réponse.');
          return;
        }
        userAnswer = input.value;
      }

      const result = engine.submitAnswer(userAnswer);
      if (!result) return;

      this.displayAnswerFeedback(result, exercise);
      this.updateHeaderProfile();
      this.updateChapterMasteryUI(this.currentChapterId);
      this.renderZpdGauge();
    },

    displayAnswerFeedback(result, exercise) {
      const engine = window.MathsAdaptiveEngine;
      const feedbackContainer = document.getElementById('exercise-feedback-zone');
      const validateBtn = document.getElementById('btn-validate-answer');
      const nextBtn = document.getElementById('btn-next-exercise');

      if (!feedbackContainer) return;
      feedbackContainer.style.display = 'block';

      if (result.needsSimplification) {
        if (window.MathsAudio) window.MathsAudio.playHint();
        feedbackContainer.className = 'feedback-card feedback-warning';
        feedbackContainer.innerHTML = `
          <div class="feedback-header">
            <span class="feedback-icon">💡</span>
            <h4>${result.feedback}</h4>
          </div>
          <div class="feedback-solution" style="border-left-color: var(--warning, #f59e0b);">
            <div class="feedback-solution-title" style="color: var(--warning, #f59e0b);">Conseil de simplification :</div>
            <div class="feedback-solution-body">
              <p class="math-p">Ta réponse <strong>${result.userFraction}</strong> a la bonne valeur numérique, mais <strong>elle n'est pas sous forme irréductible</strong>.</p>
              <p class="math-p">Divise le numérateur et le dénominateur par leur plus grand diviseur commun, puis clique de nouveau sur <strong>Valider ma réponse</strong>.</p>
            </div>
          </div>
        `;
        window.MathsRenderer.renderElement(feedbackContainer);
        if (validateBtn) validateBtn.style.display = 'inline-flex';
        if (nextBtn) nextBtn.style.display = 'none';
        const input = document.getElementById('math-user-input');
        if (input) {
          input.focus();
          input.select();
        }
        return;
      }

      if (result.isCorrect) {
        // Célébration Popup centrale (10s) si un palier ou un rang est déverrouillé
        const hasCelebration = this.handleUnlockCelebration(result);
        if (!hasCelebration) {
          if (window.MathsAudio) window.MathsAudio.playCorrect();
        }

        // SUCCÈS
        feedbackContainer.className = 'feedback-card feedback-success';
        feedbackContainer.innerHTML = `
          <div class="feedback-header">
            <span class="feedback-icon">🎉</span>
            <h4>${result.feedback}</h4>
            <span class="xp-badge">+${result.xpEarned} XP</span>
          </div>
          ${result.leveledUp ? `<div class="level-up-banner">${result.levelUpMessage}</div>` : ''}
          ${result.solution ? `
          <div class="feedback-solution">
            <div class="feedback-solution-title">Explication / Solution détaillée :</div>
            <div class="feedback-solution-body">${window.MathsRenderer.markdownToHtml(result.solution)}</div>
          </div>` : ''}
        `;
        window.MathsRenderer.renderElement(feedbackContainer);

        if (validateBtn) validateBtn.style.display = 'none';
        if (nextBtn) {
          nextBtn.style.display = 'inline-flex';
          // Ne pas appeler focus() automatiquement sur nextBtn : l'élève doit avoir le temps de lire le commentaire
        }

      } else {
        // Effet sonore d'erreur ou d'indice
        if (result.stage === 'hint1' || result.stage === 'hint2') {
          if (window.MathsAudio) window.MathsAudio.playHint();
        } else {
          if (window.MathsAudio) window.MathsAudio.playIncorrect();
        }

        // ERREUR AVEC ÉTAYAGE BIENVEILLANT
        feedbackContainer.className = 'feedback-card feedback-warning';

        if (result.stage === 'hint1') {
          feedbackContainer.innerHTML = `
            <div class="feedback-header">
              <span class="feedback-icon">💡</span>
              <h4>${result.message}</h4>
            </div>
            <div class="hint-content">${window.MathsRenderer.markdownToHtml(result.hint)}</div>
            <p class="retry-text">Tu peux modifier ta réponse et retenter ta chance !</p>
          `;
        } else if (result.stage === 'hint2') {
          feedbackContainer.innerHTML = `
            <div class="feedback-header">
              <span class="feedback-icon">📖</span>
              <h4>${result.message}</h4>
            </div>
            <div class="hint-content">${window.MathsRenderer.markdownToHtml(result.hint)}</div>
            <p class="retry-text">Dernière tentative avant la correction complète.</p>
          `;
        } else {
          // Solution finale
          feedbackContainer.className = 'feedback-card feedback-danger';
          feedbackContainer.innerHTML = `
            <div class="feedback-header">
              <span class="feedback-icon">📝</span>
              <h4>${result.message}</h4>
            </div>
            ${result.solution ? `
            <div class="feedback-solution">
              <div class="feedback-solution-title">Explication / Solution détaillée :</div>
              <div class="feedback-solution-body">${window.MathsRenderer.markdownToHtml(result.solution)}</div>
            </div>` : ''}
            ${result.canStepDown ? `
              <div class="step-down-box">
                <p>${result.stepDownMessage}</p>
                <button id="btn-step-down" class="btn-secondary btn-sm">Revenir au ${this.getTierButtonLabel(engine.state.currentTier - 1, this.getCurrentChapterLevel())}</button>
              </div>
            ` : ''}
          `;
          if (result.canStepDown) {
            setTimeout(() => {
              const btn = document.getElementById('btn-step-down');
              if (btn) {
                btn.onclick = () => {
                  window.MathsAdaptiveEngine.setTier(window.MathsAdaptiveEngine.state.currentTier - 1);
                  this.renderTrainingView();
                };
              }
            }, 50);
          }
          if (validateBtn) validateBtn.style.display = 'none';
          if (nextBtn) nextBtn.style.display = 'inline-flex';
        }
        window.MathsRenderer.renderElement(feedbackContainer);
      }
    },

    showHint(num) {
      if (window.MathsAudio) window.MathsAudio.playHint();
      const hint = window.MathsAdaptiveEngine.requestHint(num);
      if (!hint) return;
      const feedbackContainer = document.getElementById('exercise-feedback-zone');
      if (!feedbackContainer) return;
      feedbackContainer.style.display = 'block';
      feedbackContainer.className = 'feedback-card feedback-info';
      feedbackContainer.innerHTML = `
        <div class="feedback-header">
          <span class="feedback-icon">${num === 1 ? '💡' : '📖'}</span>
          <h4>${num === 1 ? 'Coup de pouce méthodologique' : 'Rappel de cours ciblé'}</h4>
        </div>
        <div class="hint-content">${window.MathsRenderer.markdownToHtml(hint)}</div>
        ${num === 2 ? `
          <div style="margin-top: 0.75rem; text-align: right;">
            <button class="btn-secondary btn-sm" onclick="window.MathsApp.switchTab('course')" type="button">
              📖 Consulter la fiche de cours complète ➔
            </button>
          </div>
        ` : ''}
      `;
      window.MathsRenderer.renderElement(feedbackContainer);
    },

    // Clavier virtuel mathématique
    bindVirtualKeyboard() {
      const toggleBtn = document.getElementById('btn-toggle-math-keyboard');
      const keyboard = document.getElementById('virtual-math-keyboard');

      if (toggleBtn && keyboard) {
        toggleBtn.addEventListener('click', () => {
          const isHidden = keyboard.style.display === 'none' || !keyboard.style.display;
          keyboard.style.display = isHidden ? 'grid' : 'none';
          toggleBtn.classList.toggle('active', isHidden);
        });
      }

      document.querySelectorAll('.key-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const input = document.getElementById('math-user-input');
          if (!input) return;

          const action = btn.dataset.action;
          const val = btn.dataset.val;

          const start = (input.selectionStart !== null && input.selectionStart !== undefined) ? input.selectionStart : input.value.length;
          const end = (input.selectionEnd !== null && input.selectionEnd !== undefined) ? input.selectionEnd : input.value.length;

          if (action === 'backspace') {
            if (start === end && start > 0) {
              input.setRangeText('', start - 1, start, 'end');
            } else if (start !== end) {
              input.setRangeText('', start, end, 'end');
            }
          } else if (action === 'clear') {
            input.value = '';
          } else if (action === 'enter') {
            this.submitCurrentAnswer();
            return;
          } else if (val) {
            input.setRangeText(val, start, end, 'end');
          }

          input.dispatchEvent(new Event('input'));
          input.focus();
        });
      });
    },

    // =========================================================================
    // 2. ESPACE FICHE DE COURS SYNTHÉTIQUE
    // =========================================================================
    renderCourseView() {
      const container = document.getElementById('course-content-container');
      if (!container) return;

      const lvlLabel = this.currentLevel === '3eme' ? '3ème' : this.currentLevel === '4eme' ? '4ème' : '5ème';
      const course = (window.MATHS_COURSES || {})[this.currentChapterId];
      if (!course) {
        const chMeta = (window.MATHS_CHAPTERS || []).find(c => c.id === this.currentChapterId);
        if (chMeta) {
          const niveauSlug = this.currentLevel === '5eme' ? 'cinquieme' : this.currentLevel === '4eme' ? 'quatrieme' : 'troisieme';
          container.innerHTML = `
            <div class="course-sheet-header">
              <div>
                <h2>${chMeta.num} : ${chMeta.title}</h2>
                <div class="course-author-sub">Fiche de synthèse officielle rédigée par <strong>Loïc Delaporte</strong>, Professeur de Mathématiques</div>
              </div>
              <span class="domain-tag">${chMeta.domainName || chMeta.domain}</span>
            </div>
            <div class="course-card course-objectives">
              <h3>🎯 Attendus officiels du Cycle 4 (${lvlLabel})</h3>
              <ul class="math-list">
                ${(chMeta.skills || []).map(s => `<li>${s}</li>`).join('')}
              </ul>
            </div>
            <div class="course-card">
              <h3>📖 Synthèse du chapitre & Compétences clés</h3>
              <div class="course-card-body">
                <p class="math-p">${chMeta.description}</p>
                <div class="callout callout-info" style="margin-top: 1.25rem; padding: 0.9rem; border-radius: 8px; background: var(--bg-hover, #f1f5f9); border-left: 4px solid var(--primary, #2563eb);">
                  💡 <strong>Ressources complémentaires & vidéos :</strong> Cours complets, démonstrations pas-à-pas et vidéos officielles sur 
                  <a href="https://www.maths-et-tiques.fr/index.php/cours-maths/niveau-${niveauSlug}" target="_blank" rel="noopener noreferrer" style="color: var(--primary, #2563eb); font-weight: 600; text-decoration: underline;">
                    maths-et-tiques.fr (Yvan Monka) ↗
                  </a>.
                </div>
              </div>
            </div>
            <div class="course-card course-method">
              <h3>⚡ Entraînement & Automatismes</h3>
              <p class="math-p">Rendez-vous dans l'onglet <strong>🎯 S'entraîner</strong> pour pratiquer les 4 Paliers ZPD ou lancez un <strong>⏱️ Rituel Flash</strong> !</p>
            </div>
          `;
          window.MathsRenderer.renderElement(container);
          return;
        }
        container.innerHTML = `<p class="math-p">Fiche de cours en cours d'actualisation.</p>`;
        return;
      }

      let html = `
        <div class="course-sheet-header">
          <div>
            <h2>${course.title}</h2>
            <div class="course-author-sub">Fiche de cours rédigée par <strong>Loïc Delaporte</strong>, Professeur de Mathématiques</div>
          </div>
          <span class="domain-tag">${course.domain}</span>
        </div>
      `;

      // Objectifs
      if (course.objectives && course.objectives.length) {
        html += `
          <div class="course-card course-objectives">
            <h3>🎯 Attendus de fin de cycle & Objectifs ${lvlLabel}</h3>
            <ul class="math-list">
              ${course.objectives.map(o => `<li>${o}</li>`).join('')}
            </ul>
          </div>
        `;
      }

      // Notions et Propriétés
      if (course.keyPoints && course.keyPoints.length) {
        course.keyPoints.forEach(kp => {
          html += `
            <div class="course-card">
              <h3>${kp.title}</h3>
              <div class="course-card-body">${window.MathsRenderer.markdownToHtml(kp.content)}</div>
            </div>
          `;
        });
      }

      // Méthodes pas-à-pas
      if (course.methods && course.methods.length) {
        course.methods.forEach(m => {
          html += `
            <div class="course-card course-method">
              <h3>⚡ ${m.title}</h3>
              <div class="method-example"><strong>Exemple :</strong> ${m.example}</div>
              <div class="method-steps">
                ${m.steps.map(s => `<div class="method-step-item">${window.MathsRenderer.markdownToHtml(s)}</div>`).join('')}
              </div>
            </div>
          `;
        });
      }

      // Pièges à éviter
      if (course.traps && course.traps.length) {
        html += `
          <div class="course-card course-traps">
            <h3>⚠️ Pièges fréquents & Points de vigilance de l'audit</h3>
            <ul>
              ${course.traps.map(t => `<li>${window.MathsRenderer.markdownToHtml(t)}</li>`).join('')}
            </ul>
          </div>
        `;
      }

      // Mode Cartes Flash / Mémorisation active
      if (course.flashcards && course.flashcards.length) {
        html += `
          <div class="course-flashcards-section">
            <div class="flashcards-header">
              <h3>🗂️ Mémorisation Active & Flashcards Brevet</h3>
              <span class="flashcards-subtitle">Teste ta mémoire sur les définitions, formules et théorèmes clés avant de t'entraîner</span>
            </div>
            <div class="flashcards-grid">
              ${course.flashcards.map((fc, idx) => `
                <div class="flashcard-card" id="flashcard-card-${idx}">
                  <span class="flashcard-pill">Flashcard #${idx + 1}</span>
                  <div class="flashcard-question-text">${window.MathsRenderer.markdownToHtml(fc.q)}</div>
                  <div class="flashcard-answer-box" id="flashcard-ans-${idx}" style="display: none;">
                    <strong>Réponse :</strong>
                    <div>${window.MathsRenderer.markdownToHtml(fc.a)}</div>
                  </div>
                  <button class="flashcard-btn-action" onclick="window.MathsApp.toggleFlashcard(${idx})">
                    👁️ Révéler la réponse
                  </button>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }

      html += `
        <div class="course-cta-box">
          <p>Prêt à tester ta compréhension dans ta zone optimale ?</p>
          <button class="btn-primary" onclick="window.MathsApp.switchTab('train')">Lancer l'entraînement adaptatif 🎯</button>
        </div>
      `;

      container.innerHTML = html;
      window.MathsRenderer.renderElement(container);
    },

    toggleFlashcard(idx) {
      const ansBox = document.getElementById(`flashcard-ans-${idx}`);
      const card = document.getElementById(`flashcard-card-${idx}`);
      if (!ansBox || !card) return;
      const btn = card.querySelector('.flashcard-btn-action');
      const isHidden = ansBox.style.display === 'none';
      ansBox.style.display = isHidden ? 'block' : 'none';
      if (btn) {
        btn.innerHTML = isHidden ? '🙈 Masquer la réponse' : '👁️ Révéler la réponse';
      }
      if (isHidden) {
        if (window.MathsAudio) window.MathsAudio.playHint();
        window.MathsRenderer.renderElement(ansBox);
      }
    },

    getChapterSheets(chapterId) {
      const baseSheets = ((window.MATHS_WORKSHEETS || {})[chapterId] || []).slice();
      if (!baseSheets.some(s => s.type === 'ds_type' || (s.id && s.id.includes('ds_type')))) {
        const ch = (window.MATHS_CHAPTERS || []).find(c => c.id === chapterId);
        const chTitle = ch ? (ch.shortTitle || ch.title) : chapterId;
        const dsSheet = this.createDsTypeSheet(chapterId, ch, chTitle);
        if (dsSheet) {
          baseSheets.push(dsSheet);
        }
      }
      return baseSheets;
    },

    createDsTypeSheet(chapterId, ch, chTitle) {
      const lvlLabel = this.currentLevel === '5eme' ? '5ème' : (this.currentLevel === '4eme' ? '4ème' : '3ème');
      const staticExos = (window.MATHS_EXERCISES || {})[chapterId] || [];
      const gen = window.MathsGenerators;
      
      const ex1 = staticExos.find(e => e.tier === 1) || (gen ? gen.generateForChapter(chapterId, 1) : null);
      const ex2 = staticExos.find(e => e.tier === 2) || (gen ? gen.generateForChapter(chapterId, 2) : null);
      const ex3 = staticExos.find(e => e.tier === 3) || (gen ? gen.generateForChapter(chapterId, 3) : null);
      const ex4 = staticExos.find(e => e.tier === 4) || (gen ? gen.generateForChapter(chapterId, 4) : null);

      const items = [
        { num: 1, name: "Automatismes & Questions flash", pts: 4, ex: ex1 },
        { num: 2, name: "Application directe du cours", pts: 5, ex: ex2 },
        { num: 3, name: "Raisonnement et calculs approfondis", pts: 5, ex: ex3 },
        { num: 4, name: "Tâche complexe & Problème concret de modélisation", pts: 6, ex: ex4 }
      ].filter(item => item.ex && item.ex.statement);

      if (!items.length) return null;

      let statementMd = `# Devoir Surveillé de Mathématiques (${lvlLabel})\n`;
      statementMd += `## Sujet de DS Type : ${ch ? ch.title : chapterId} (Barème sur 20 points)\n\n`;
      statementMd += `*Durée recommandée : 50 minutes. Calculatrice autorisée. La qualité de la rédaction, la clarté et la précision des justifications seront notées sur 20 points.*\n\n---\n\n`;

      items.forEach(item => {
        statementMd += `### Exercice ${item.num} : ${item.ex.title || item.name} (${item.pts} points)\n`;
        statementMd += `${item.ex.statement}\n\n---\n\n`;
      });

      let solutionMd = `## Corrigé Détaillé et Barème Officiel du Devoir Surveillé (sur 20 points)\n\n`;
      items.forEach(item => {
        const solContent = item.ex.solution || (item.ex.answer ? `Réponse attendue : **${item.ex.answer}**` : "Voir le cours pour les étapes détaillées.");
        solutionMd += `### Exercice ${item.num} : ${item.ex.title || item.name} (${item.pts} points)\n${solContent}\n\n---\n\n`;
      });

      return {
        id: `${chapterId}-ds_type_sommatif`,
        filename: `DS_Type_${chapterId}.md`,
        type: 'ds_type',
        title: `📝 Sujet type de DS (20 pts)`,
        statement: statementMd,
        solution: solutionMd
      };
    },

    // =========================================================================
    // 3. ESPACE FICHES D'EXERCICES COMPLÈTES (IMPRESSION & SUJETS)
    // =========================================================================
    renderSheetsView() {
      const container = document.getElementById('sheets-content-container');
      if (!container) return;

      const sheets = this.getChapterSheets(this.currentChapterId);
      if (!sheets.length) {
        const chMeta = (window.MATHS_CHAPTERS || []).find(c => c.id === this.currentChapterId);
        const exos = (window.MATHS_EXERCISES || {})[this.currentChapterId] || [];
        const lvlLabel = this.currentLevel === '5eme' ? '5ème' : (this.currentLevel === '4eme' ? '4ème' : '3ème');
        
        container.innerHTML = `
          <div class="sheets-nav-bar no-print">
            <div class="sheets-tabs-group">
              <button class="sheet-select-btn active">Fiche d'entraînement (${chMeta ? chMeta.shortTitle : this.currentChapterId})</button>
            </div>
            <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
              <button class="btn-primary no-print" onclick="window.MathsQuizGenerator.openModal(window.MathsApp.currentChapterId)">📝 Devoir Surveillé (20 pts)</button>
              <button class="btn-secondary print-btn" onclick="window.print()">🖨️ Imprimer la fiche</button>
            </div>
          </div>
          <div class="printable-worksheet">
            <div class="sheet-print-header">
              <h1>Zone-Maths • Collège — Mathématiques ${lvlLabel}</h1>
              <h2>Fiche d'entraînement : ${chMeta ? chMeta.title : this.currentChapterId}</h2>
              <div class="sheet-author-tag">Fiche créée par <strong>Loïc Delaporte</strong>, Professeur de Mathématiques</div>
              <div class="print-meta">Nom : .................................... Prénom : .................................... Classe : .......... Date : ..........</div>
            </div>
            <div class="sheet-statement-content">
              ${exos.length ? exos.map((ex, i) => `
                <div style="margin-bottom: 1.25rem; padding: 0.9rem; border: 1px solid var(--border, #cbd5e1); border-radius: 8px;">
                  <h4 style="margin-top:0; color: var(--primary, #2563eb);">Exercice ${i+1} : ${ex.title || 'Application directe'} (Palier ${ex.tier || 1})</h4>
                  <div>${window.MathsRenderer.markdownToHtml(ex.statement)}</div>
                </div>
              `).join('') : `
                <p class="math-p">Entraînez-vous avec les exercices interactifs dans l'onglet <strong>🎯 S'entraîner</strong> ou générez un sujet complet dans <strong>📝 Devoir Blanc</strong>.</p>
              `}
            </div>
          </div>
        `;
        window.MathsRenderer.renderElement(container);
        return;
      }

      if (this.selectedSheetIndex >= sheets.length) {
        this.selectedSheetIndex = 0;
      }

      const activeSheet = sheets[this.selectedSheetIndex] || sheets[0];

      let navHtml = `
        <div class="sheets-nav-bar no-print">
          <div class="sheets-tabs-group">
            ${sheets.map((s, idx) => `
              <button class="sheet-select-btn ${idx === this.selectedSheetIndex ? 'active' : ''}" onclick="window.MathsApp.selectSheet(${idx})">
                ${s.title}
              </button>
            `).join('')}
          </div>
          <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
            <button class="btn-primary no-print" onclick="window.MathsQuizGenerator.openModal(window.MathsApp.currentChapterId)" title="Générer un Devoir Surveillé complet calibré sur 20 points pour ce chapitre">
              📝 Générer un DS (20 pts)
            </button>
            <button class="btn-secondary print-btn" onclick="window.print()">🖨️ Imprimer la fiche</button>
          </div>
        </div>
      `;

      let sheetBody = `
        <div class="printable-worksheet">
          <div class="sheet-print-header print-only">
            <h1>Zone-Maths • Collège — Mathématiques ${this.currentLevel === '5eme' ? '5ème' : (this.currentLevel === '4eme' ? '4ème' : '3ème')}</h1>
            <h2>${activeSheet.title} (${this.currentChapterId})</h2>
            <div class="sheet-author-tag">Fiche d'exercices créée par <strong>Loïc Delaporte</strong>, Professeur de Mathématiques</div>
            <div class="print-meta">Nom : .................................... Prénom : .................................... Classe : .......... Date : ..........</div>
          </div>
          
          <div class="sheet-statement-content">
            ${window.MathsRenderer.markdownToHtml(activeSheet.statement)}
          </div>

          ${activeSheet.solution ? `
            <div class="sheet-solution-accordion no-print">
              <button class="accordion-toggle-btn" onclick="window.MathsApp.toggleSheetSolution()">
                <span>🔍 Afficher / Masquer la Correction détaillée</span>
                <span id="solution-toggle-arrow">▼</span>
              </button>
              <div id="sheet-solution-wrapper" class="solution-content" style="display:none;">
                ${window.MathsRenderer.markdownToHtml(activeSheet.solution)}
              </div>
            </div>
          ` : ''}
        </div>
      `;

      container.innerHTML = navHtml + sheetBody;
      window.MathsRenderer.renderElement(container);
    },

    selectSheet(idx) {
      this.selectedSheetIndex = idx;
      this.renderSheetsView();
    },

    toggleSheetSolution() {
      const wrapper = document.getElementById('sheet-solution-wrapper');
      const arrow = document.getElementById('solution-toggle-arrow');
      if (!wrapper) return;
      const isHidden = wrapper.style.display === 'none';
      wrapper.style.display = isHidden ? 'block' : 'none';
      if (arrow) arrow.textContent = isHidden ? '▲' : '▼';
    },

    // =========================================================================
    // 4. ESPACE PASSEPORT, BILAN & STATISTIQUES
    // =========================================================================
    renderStatsView() {
      const container = document.getElementById('stats-content-container');
      if (!container) return;

      const data = window.MathsStorage.load();
      const allChapters = window.MATHS_CHAPTERS || [];
      const levelChapters = allChapters.filter(c => !c.level || c.level === this.currentLevel);
      const levelName = this.currentLevel === '5eme' ? '5ème' : (this.currentLevel === '4eme' ? '4ème' : '3ème');

      // Calcul des stats du niveau
      let totalMastery = 0;
      let completedExosCount = 0;

      levelChapters.forEach(c => {
        const p = data.chapters[c.id];
        if (p) {
          totalMastery += (p.mastery || 0);
          completedExosCount += (p.completed || []).length;
        }
      });
      const globalProgress = levelChapters.length ? Math.round(totalMastery / levelChapters.length) : 0;

      let html = `
        <div class="passport-author-banner">
          <span>📐 <strong>Zone-Maths • Cycle 4 (${levelName})</strong> • Application et contenus conçus par <strong>Loïc Delaporte</strong>, Professeur de Mathématiques</span>
        </div>

        <div class="stats-overview-grid">
          <div class="stat-card">
            <span class="stat-icon">🎓</span>
            <span class="stat-val">Niveau ${data.user.level}</span>
            <span class="stat-lbl">Titre d'élève</span>
          </div>
          <div class="stat-card">
            <span class="stat-icon">⚡</span>
            <span class="stat-val">${data.user.xp} XP</span>
            <span class="stat-lbl">Points d'expérience</span>
          </div>
          <div class="stat-card">
            <span class="stat-icon">🎯</span>
            <span class="stat-val">${completedExosCount}</span>
            <span class="stat-lbl">Exercices maîtrisés</span>
          </div>
          <div class="stat-card">
            <span class="stat-icon">📊</span>
            <span class="stat-val">${globalProgress}%</span>
            <span class="stat-lbl">Programme ${levelName} validé</span>
          </div>
        </div>

        <div class="stats-section">
          <h3>🏆 Badges d'Étapes & Jalons</h3>
          <div class="badges-grid">
            ${this.renderBadgesHtml(data.badges)}
          </div>
        </div>

        <div class="stats-section">
          <h3>🎖️ Rangs & Trophées par Chapitre — ${levelName}</h3>
          <p class="math-p" style="margin-bottom: 1rem; font-size: 0.92rem; color: var(--text-muted);">
            Valide les paliers d'entraînement pour faire évoluer ton titre : 🥉 <strong>Novice</strong> (Palier 1 validé) ➔ 🥈 <strong>Apprenti</strong> (Palier 2 validé) ➔ 🥇 <strong>Chevalier</strong> (Palier 3 validé) ➔ 💎 <strong>Maître</strong> (100% de la notion) !
          </p>
          <div class="chapter-trophies-grid">
            ${this.renderChapterTrophiesHtml(levelChapters, data.badges, data.chapters)}
          </div>
        </div>

        <div class="stats-section">
          <h3>🗺️ Maîtrise par Chapitre — Classe de ${levelName} (${levelChapters.length} Thèmes)</h3>
          <div class="chapters-mastery-list">
            ${levelChapters.map(c => {
              const p = data.chapters[c.id] || { mastery: 0, currentTier: 1, completed: [], validatedTiers: [] };
              const valTiers = p.validatedTiers || [];
              let highestTier = 0;
              if (p.mastery >= 100 || valTiers.includes(4) || (data.badges || []).some(b => b.id === `${c.id}_tier_4`)) {
                highestTier = 4;
              } else if (valTiers.includes(3) || (data.badges || []).some(b => b.id === `${c.id}_tier_3`) || p.mastery >= 75 || p.currentTier >= 4) {
                highestTier = 3;
              } else if (valTiers.includes(2) || (data.badges || []).some(b => b.id === `${c.id}_tier_2`) || p.mastery >= 50 || p.currentTier >= 3) {
                highestTier = 2;
              } else if (valTiers.includes(1) || (data.badges || []).some(b => b.id === `${c.id}_tier_1`) || p.mastery >= 25 || p.currentTier >= 2) {
                highestTier = 1;
              }
              const currentRank = highestTier > 0 
                ? (window.MathsAdaptiveEngine ? window.MathsAdaptiveEngine.getChapterRankTitle(c, highestTier) : `Palier ${highestTier}`)
                : 'Non débloqué';
              return `
                <div class="mastery-row">
                  <div class="mastery-left">
                    <span class="mastery-code" style="color:${c.color}; font-weight:bold;">${c.num}</span>
                    <span class="mastery-name">${c.shortTitle || c.title}</span>
                  </div>
                  <div class="mastery-bar-wrapper">
                    <div class="mastery-bar-fill" style="width:${p.mastery || 0}%; background-color:${c.color};"></div>
                  </div>
                  <span class="mastery-percent">${p.mastery || 0}% — <strong>${currentRank}</strong></span>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <div class="stats-footer-actions no-print">
          <button class="btn-danger" onclick="window.MathsApp.handleResetProgress()">🔄 Réinitialiser ma progression</button>
        </div>
      `;

      container.innerHTML = html;
    },

    renderBadgesHtml(unlockedBadges = []) {
      const lvl = this.getCurrentChapterLevel();
      const tier4Title = lvl === '5eme' ? 'Cap vers la 4ème' : (lvl === '4eme' ? 'Cap vers la 3ème' : 'Cap vers la Seconde');
      const tier4Desc = lvl === '5eme' ? 'Débloquer le palier 4 (Défi 4ème)' : (lvl === '4eme' ? 'Débloquer le palier 4 (Défi 3ème)' : 'Débloquer le palier 4 (Défi Seconde)');
      const unlockedTier4 = (unlockedBadges || []).find(ub => ub.id === 'tier_4_unlocked');

      const allPossibleBadges = [
        { id: 'first_step', title: 'Premier Pas', desc: 'Compléter un exercice avec succès', icon: '🎯' },
        { id: 'level_3', title: 'Apprenti Géomètre', desc: 'Atteindre le niveau 3 (200 XP)', icon: '📐' },
        { id: 'level_5', title: 'Maître du Calcul', desc: 'Atteindre le niveau 5 (400 XP)', icon: '⚡' },
        { 
          id: 'tier_4_unlocked', 
          title: unlockedTier4 ? (unlockedTier4.title || tier4Title) : tier4Title, 
          desc: unlockedTier4 ? (unlockedTier4.description || tier4Desc) : tier4Desc, 
          icon: '🚀' 
        }
      ];

      return allPossibleBadges.map(b => {
        const isUnlocked = (unlockedBadges || []).some(ub => ub.id === b.id);
        return `
          <div class="badge-item ${isUnlocked ? 'unlocked' : 'locked'}">
            <span class="badge-emoji">${b.icon}</span>
            <div class="badge-info">
              <strong>${b.title}</strong>
              <small>${b.desc}</small>
            </div>
          </div>
        `;
      }).join('');
    },

    renderChapterTrophiesHtml(chapters, unlockedBadges = [], chaptersData = {}) {
      const engine = window.MathsAdaptiveEngine;
      return chapters.map(c => {
        const p = chaptersData[c.id] || { mastery: 0, currentTier: 1, validatedTiers: [] };
        const valTiers = p.validatedTiers || [];

        // Règle de déblocage stricte :
        // 1. Pour Maître : il faut 100% de la notion (p.mastery >= 100)
        // 2. Si palier 3 validé : débloque Chevalier
        // 3. Si palier 2 validé : débloque Apprenti
        // 4. Si palier 1 validé : débloque Novice
        let highestTier = 0;
        if (p.mastery >= 100 || valTiers.includes(4) || (unlockedBadges || []).some(b => b.id === `${c.id}_tier_4`)) {
          highestTier = 4;
        } else if (valTiers.includes(3) || (unlockedBadges || []).some(b => b.id === `${c.id}_tier_3`) || p.mastery >= 75 || p.currentTier >= 4) {
          highestTier = 3;
        } else if (valTiers.includes(2) || (unlockedBadges || []).some(b => b.id === `${c.id}_tier_2`) || p.mastery >= 50 || p.currentTier >= 3) {
          highestTier = 2;
        } else if (valTiers.includes(1) || (unlockedBadges || []).some(b => b.id === `${c.id}_tier_1`) || p.mastery >= 25 || p.currentTier >= 2) {
          highestTier = 1;
        }

        const tierMedals = { 1: '🥉', 2: '🥈', 3: '🥇', 4: '💎' };
        const tierLabels = {
          1: 'Palier 1 validé',
          2: 'Palier 2 validé',
          3: 'Palier 3 validé',
          4: '100% de la notion validé'
        };

        const rankTitle = highestTier > 0 
          ? (engine ? engine.getChapterRankTitle(c, highestTier) : `Palier ${highestTier}`)
          : (engine ? engine.getChapterRankTitle(c, 1) : 'Novice');

        const medal = highestTier > 0 ? tierMedals[highestTier] : '🔒';
        const statusLabel = highestTier > 0 ? tierLabels[highestTier] : 'Objectif : Palier 1';
        const displayTitle = highestTier > 0 ? rankTitle : `Objectif : ${rankTitle}`;

        return `
          <div class="chapter-trophy-card ${highestTier > 0 ? 'unlocked tier-' + highestTier : 'locked'}" 
               onclick="window.MathsApp.startChapterTier('${c.id}', ${highestTier > 0 ? highestTier : 1})"
               title="Clique pour t'entraîner sur ${c.shortTitle || c.title}">
            <div class="chapter-trophy-header">
              <div class="chapter-trophy-title-wrap">
                <span class="chapter-trophy-code" style="color: ${c.color}; border-color: ${c.color}40; background-color: ${c.color}15;">${c.num}</span>
                <strong class="chapter-trophy-name" title="${c.title}">${c.shortTitle || c.title}</strong>
              </div>
              <span class="chapter-trophy-mastery">${p.mastery || 0}%</span>
            </div>

            <div class="chapter-single-rank-banner">
              <span class="rank-single-medal">${medal}</span>
              <div class="rank-single-text">
                <span class="rank-single-status">${statusLabel}</span>
                <strong class="rank-single-title">${displayTitle}</strong>
              </div>
            </div>
          </div>
        `;
      }).join('');
    },

    startChapterTier(chapterId, tier = 1) {
      if (!chapterId) return;
      this.selectChapter(chapterId);
      this.switchTab('train');
      if (tier && tier >= 1 && tier <= 4) {
        if (window.MathsAdaptiveEngine) {
          window.MathsAdaptiveEngine.setTier(tier);
        }
        this.renderTrainingView();
      }
    },

    showToast(msg, duration = 3500) {
      let toast = document.getElementById('app-toast');
      if (!toast) {
        toast = document.createElement('div');
        toast.id = 'app-toast';
        toast.className = 'app-toast';
        document.body.appendChild(toast);
      }
      toast.innerHTML = msg;
      toast.classList.add('visible');
      clearTimeout(this._toastTimeout);
      this._toastTimeout = setTimeout(() => {
        toast.classList.remove('visible');
      }, duration);
    },

    shareCurrentTraining() {
      const chapterId = this.currentChapterId;
      const currentTier = (window.MathsAdaptiveEngine && window.MathsAdaptiveEngine.state && window.MathsAdaptiveEngine.state.currentTier) || 1;
      const chapter = (window.MATHS_CHAPTERS || []).find(c => c.id === chapterId);
      const chapterName = chapter ? (chapter.shortTitle || chapter.title) : chapterId;

      const url = new URL(window.location.href);
      url.searchParams.set('chapitre', chapterId);
      url.searchParams.set('palier', currentTier);
      const shareUrl = url.toString();

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(() => {
          this.showToast(`🔗 <strong>Lien copié !</strong><br><small>${chapterName} — Palier ${currentTier}</small>`);
        }).catch(() => {
          prompt('Lien à copier :', shareUrl);
        });
      } else {
        prompt('Lien à copier :', shareUrl);
      }
    },

    checkUrlShareParams() {
      try {
        const params = new URLSearchParams(window.location.search);
        const chapParam = params.get('chapitre') || params.get('chapter') || params.get('chap');
        const tierParam = parseInt(params.get('palier') || params.get('tier'), 10);

        if (chapParam) {
          const allChapters = window.MATHS_CHAPTERS || [];
          const targetChap = allChapters.find(c => c.id.toLowerCase() === chapParam.toLowerCase());
          if (targetChap) {
            if (targetChap.level && targetChap.level !== this.currentLevel) {
              this.switchLevel(targetChap.level, false);
            }
            this.selectChapter(targetChap.id);
            this.switchTab('train');
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
          }
        }
      } catch (err) {
        console.warn('Erreur lecture paramètres URL :', err);
      }
    },

    /**
     * Analyse si un palier ou un rang a été débloqué et déclenche la célébration popup
     */
    handleUnlockCelebration(result) {
      if (!result || !result.isCorrect) return false;

      const chapterId = this.currentChapterId;
      const chapter = (window.MATHS_CHAPTERS || []).find(c => c.id === chapterId);
      const lvl = this.getCurrentChapterLevel();

      const newBadges = result.newlyUnlockedBadges || [];
      const newValidatedTiers = result.newlyValidatedTiers || [];
      const tierUnlocked = result.unlockedTier || (result.leveledUp ? result.newTier : null);

      // Filtrer les badges de rang par palier (Novice, Apprenti, Chevalier, Maître / Grand Maître)
      const rankBadges = newBadges.filter(b => b.kind === 'rank');
      // Badge général de tier 4 ("Cap vers la Seconde / 3e / 4e")
      const tier4Badge = newBadges.find(b => b.id === 'tier_4_unlocked');

      const hasNewRank = rankBadges.length > 0;
      const hasNewTier = newValidatedTiers.length > 0 || (result.leveledUp && !!tierUnlocked) || !!tier4Badge;

      if (!hasNewRank && !hasNewTier) {
        return false;
      }

      // 1. Déblocage combiné : Rang + Palier
      if (hasNewRank && hasNewTier) {
        const topRank = rankBadges[rankBadges.length - 1];
        const topTier = newValidatedTiers.length > 0 ? Math.max(...newValidatedTiers) : (tierUnlocked || topRank.tier || 1);
        const nextTierName = topTier < 4 ? this.getTierName(topTier + 1, lvl) : 'Maîtrise totale';
        const isMaster = topRank.tier === 4 || topTier >= 4 || result.mastery >= 100;

        this.showUnlockPopup({
          icon: topRank.icon || (isMaster ? '💎' : '🏆'),
          category: isMaster ? '👑 MAÎTRISE TOTALE & RANG SUPRÊME !' : '🎉 NOUVEAU RANG & PALIER DÉBLOQUÉS !',
          title: topRank.title,
          chapterTitle: chapter ? `${chapter.num} — ${chapter.shortTitle || chapter.title}` : '',
          description: isMaster
            ? `Exceptionnel ! Tu as atteint <strong>100% de maîtrise</strong> sur <em>${chapter ? (chapter.shortTitle || chapter.title) : 'ce chapitre'}</em> et débloqué le titre suprême de <strong>${topRank.title}</strong> !`
            : `Félicitations pour tes efforts ! Tu as validé le <strong>Palier ${topTier}</strong> et conquis le rang honorifique de <strong>${topRank.title}</strong>.<br>${topTier < 4 ? `Le <strong>${nextTierName}</strong> est désormais accessible !` : 'Tous les paliers de ce chapitre sont conquis !'}`,
          perks: [
            `🎖️ Titre ${topRank.title}`,
            topTier < 4 ? `🚀 ${nextTierName} débloqué` : `💎 100% de réussite`,
            `🏅 Trophée ajouté à ton passeport`
          ],
          isMaster
        });
        return true;
      }

      // 2. Uniquement un Rang honorifique débloqué
      if (hasNewRank) {
        const topRank = rankBadges[rankBadges.length - 1];
        const isMaster = topRank.tier === 4 || result.mastery >= 100;
        this.showUnlockPopup({
          icon: topRank.icon || '🏆',
          category: isMaster ? '👑 RANG SUPRÊME DÉBLOQUÉ !' : '🏆 NOUVEAU RANG DÉBLOQUÉ !',
          title: topRank.title,
          chapterTitle: chapter ? `${chapter.num} — ${chapter.shortTitle || chapter.title}` : '',
          description: `Félicitations pour tes progrès constants ! Grâce à ta réussite sur ce chapitre, tu accèdes au rang honorifique de <strong>${topRank.title}</strong> !`,
          perks: [
            `🎖️ Rang ${topRank.title}`,
            `🏅 Trophée ajouté au passeport`,
            `⭐ Progression enregistrée`
          ],
          isMaster
        });
        return true;
      }

      // 3. Uniquement un Palier débloqué / validé
      if (hasNewTier) {
        const validatedTier = newValidatedTiers.length > 0 ? Math.max(...newValidatedTiers) : tierUnlocked;
        const tierTitle = this.getTierName(validatedTier, lvl);
        const isMax = validatedTier >= 4;

        this.showUnlockPopup({
          icon: isMax ? '💎' : '🚀',
          category: isMax ? '💎 PALIER SUPRÊME DÉBLOQUÉ !' : '🚀 NOUVEAU PALIER DÉBLOQUÉ !',
          title: tierTitle,
          chapterTitle: chapter ? `${chapter.num} — ${chapter.shortTitle || chapter.title}` : '',
          description: `Bravo ! Grâce à tes <strong>${result.mastery}% de maîtrise</strong>, tu franchis un nouveau cap et accèdes au <strong>${tierTitle}</strong> !`,
          perks: [
            `🎯 Accès aux exercices du ${tierTitle}`,
            `📈 Maîtrise en hausse : ${result.mastery}%`,
            `⚡ +${result.xpEarned} XP gagnés`
          ],
          isMaster: isMax
        });
        return true;
      }

      return false;
    },

    /**
     * Affiche le popup de félicitations au milieu de l'écran pendant 10 secondes
     */
    showUnlockPopup(data) {
      const modal = document.getElementById('reward-unlock-modal');
      if (!modal) return;

      // Nettoyer tout compte à rebours ou écouteur antérieur
      if (this._unlockInterval) clearInterval(this._unlockInterval);
      if (this._unlockTimeout) clearTimeout(this._unlockTimeout);
      if (this._unlockKeyHandler) window.removeEventListener('keydown', this._unlockKeyHandler);

      // Remplissage des éléments de l'interface
      const iconEl = document.getElementById('unlock-modal-icon');
      const catEl = document.getElementById('unlock-modal-category');
      const titleEl = document.getElementById('unlock-modal-title');
      const chapEl = document.getElementById('unlock-modal-chap');
      const descEl = document.getElementById('unlock-modal-desc');
      const perksEl = document.getElementById('unlock-modal-perks');
      const progressBar = document.getElementById('unlock-timer-progress');
      const secondsEl = document.getElementById('unlock-timer-seconds');

      if (iconEl) iconEl.textContent = data.icon || '🏆';
      if (catEl) catEl.textContent = data.category || 'FÉLICITATIONS !';
      if (titleEl) titleEl.textContent = data.title || 'Nouveau Titre !';
      if (chapEl) chapEl.textContent = data.chapterTitle || '';
      if (descEl) descEl.innerHTML = data.description || 'Félicitations pour tes progrès !';

      if (perksEl) {
        const perks = data.perks || ['🏅 Trophée débloqué'];
        perksEl.innerHTML = perks.map(p => `<span class="reward-perk-pill">${p}</span>`).join('');
      }

      // Effets sonores et visuels festifs
      if (data.isMaster && window.MathsAudio) {
        window.MathsAudio.playMastery();
      } else if (window.MathsAudio) {
        window.MathsAudio.playLevelUp();
      }
      if (window.MathsConfetti) {
        window.MathsConfetti.launch(3500);
      }

      // Initialisation du compte à rebours 10 secondes (10 000 ms)
      const totalDuration = 10000;
      const startTime = Date.now();
      if (progressBar) progressBar.style.width = '100%';
      if (secondsEl) secondsEl.textContent = '10';

      modal.style.display = 'flex';
      modal.setAttribute('aria-hidden', 'false');

      // Décompte fluide et régulier
      this._unlockInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const remainingMs = Math.max(0, totalDuration - elapsed);
        const remainingSec = Math.ceil(remainingMs / 1000);
        const percent = (remainingMs / totalDuration) * 100;

        if (progressBar) progressBar.style.width = `${percent}%`;
        if (secondsEl) secondsEl.textContent = remainingSec;

        if (remainingMs <= 0) {
          this.closeUnlockPopup();
        }
      }, 100);

      // Fermeture par raccourci clavier (Échap ou Entrée)
      this._unlockKeyHandler = (e) => {
        if (e.key === 'Escape' || e.key === 'Enter') {
          this.closeUnlockPopup();
        }
      };
      window.addEventListener('keydown', this._unlockKeyHandler);
    },

    /**
     * Ferme le popup de félicitations et stoppe le compte à rebours
     */
    closeUnlockPopup() {
      const modal = document.getElementById('reward-unlock-modal');
      if (this._unlockInterval) {
        clearInterval(this._unlockInterval);
        this._unlockInterval = null;
      }
      if (this._unlockTimeout) {
        clearTimeout(this._unlockTimeout);
        this._unlockTimeout = null;
      }
      if (this._unlockKeyHandler) {
        window.removeEventListener('keydown', this._unlockKeyHandler);
        this._unlockKeyHandler = null;
      }

      if (modal) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
      }
    },

    handleResetProgress() {
      if (confirm('Attention : toutes tes données, XP et badges seront réinitialisés. Confirmer ?')) {
        window.MathsStorage.resetAll();
        location.reload();
      }
    }
  };

  window.MathsApp.init();
});
