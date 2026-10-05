/**
 * Contrôleur du Mode Diaporama / Rituel Chronométré (Inspiré de MathsMentales.net)
 * Permet de projeter ou de s'entraîner avec des questions flash rythmées par un compte à rebours.
 * Écran récapitulatif optimisé pour capture d'écran Notability sur iPad.
 */

window.MathsDiaporama = {
  state: {
    isRunning: false,
    isPaused: false,
    questions: [],
    currentIndex: 0,
    timePerQuestion: 30, // secondes (15, 30, 45, 60, 0=manuel)
    timeLeft: 30,
    timerInterval: null,
    answersRecord: [],
    recapMode: 'statements', // 'statements' | 'solutions'
    zoomLevel: 1.15 // taille de police en rem pour Notability
  },

  /**
   * Ouvre la fenêtre modale de configuration du diaporama
   */
  openModal(preselectedChapterId = null) {
    const modal = document.getElementById('diaporama-modal');
    if (!modal) return;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    document.body.classList.add('modal-open');
    document.body.classList.add('diapo-modal-open');

    // Remplir le sélecteur de chapitres selon le niveau actif
    const selectorContainer = document.getElementById('diaporama-chapters-checkboxes');
    if (selectorContainer) {
      const currentLevel = (window.MathsApp && window.MathsApp.currentLevel) || '3eme';
      const allChapters = window.MATHS_CHAPTERS || [];
      const chapters = allChapters.filter(c => (c.level || '3eme') === currentLevel);
      const defaultId = (preselectedChapterId && chapters.some(c => c.id === preselectedChapterId))
        ? preselectedChapterId
        : ((window.MathsApp && window.MathsApp.currentChapterId && chapters.some(c => c.id === window.MathsApp.currentChapterId))
          ? window.MathsApp.currentChapterId
          : (chapters[0] ? chapters[0].id : 'N1'));
      selectorContainer.innerHTML = chapters.map(c => `
        <label class="diapo-chip">
          <input type="checkbox" name="diapo-chap" value="${c.id}" ${c.id === defaultId ? 'checked' : ''} />
          <span>${c.num} : ${c.shortTitle || c.title}</span>
        </label>
      `).join('');
    }

    // Afficher l'écran de configuration
    this.showScreen('config');
  },

  closeModal() {
    this.stop();
    const modal = document.getElementById('diaporama-modal');
    if (modal) modal.style.display = 'none';
    const box = document.querySelector('.diapo-box');
    if (box) box.classList.remove('diapo-recap-active');
    document.body.style.overflow = 'auto';
    document.body.classList.remove('modal-open');
    document.body.classList.remove('diapo-modal-open');
  },

  showScreen(name) {
    document.querySelectorAll('.diapo-screen').forEach(s => s.style.display = 'none');
    const target = document.getElementById(`diapo-screen-${name}`);
    if (target) target.style.display = 'flex';

    const box = document.querySelector('.diapo-box');
    if (box) {
      if (name === 'recap') {
        box.classList.add('diapo-recap-active');
      } else {
        box.classList.remove('diapo-recap-active');
      }
    }
  },

  /**
   * Démarre une session de diaporama
   */
  start() {
    const currentLevel = (window.MathsApp && window.MathsApp.currentLevel) || '3eme';
    const validLevelChapters = (window.MATHS_CHAPTERS || []).filter(c => (c.level || '3eme') === currentLevel).map(c => c.id);
    const checkedBoxes = Array.from(document.querySelectorAll('input[name="diapo-chap"]:checked')).map(cb => cb.value);
    let chapters = checkedBoxes.filter(id => validLevelChapters.includes(id));
    if (!chapters.length) {
      const activeId = window.MathsApp && window.MathsApp.currentChapterId;
      if (activeId && validLevelChapters.includes(activeId)) {
        chapters = [activeId];
      } else if (validLevelChapters.length) {
        chapters = [validLevelChapters[0]];
      } else {
        chapters = ['N1'];
      }
    }

    const countSelect = document.getElementById('diapo-count-select');
    const count = countSelect ? parseInt(countSelect.value, 10) : 5;

    const timeSelect = document.getElementById('diapo-time-select');
    const time = timeSelect ? parseInt(timeSelect.value, 10) : 30;

    // 2. Générer les questions à données aléatoires
    this.state.questions = window.MathsGenerators.generateSeries(chapters, count);
    this.state.currentIndex = 0;
    this.state.timePerQuestion = time;
    this.state.answersRecord = [];
    this.state.isRunning = true;
    this.state.isPaused = false;

    // 3. Basculer sur l'écran diaporama
    this.showScreen('run');
    this.presentCurrentQuestion();
  },

  presentCurrentQuestion() {
    const q = this.state.questions[this.state.currentIndex];
    if (!q) {
      this.finish();
      return;
    }

    const indexEl = document.getElementById('diapo-q-index');
    const titleEl = document.getElementById('diapo-q-title');
    const bodyEl = document.getElementById('diapo-q-body');
    const timerBar = document.getElementById('diapo-timer-fill');
    const timeText = document.getElementById('diapo-time-text');

    if (indexEl) indexEl.textContent = `Question ${this.state.currentIndex + 1} / ${this.state.questions.length}`;
    
    // Rendu du titre avec prise en charge complète du LaTeX ($...$)
    if (titleEl) {
      titleEl.innerHTML = (q.title || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      window.MathsRenderer.renderElement(titleEl);
    }

    if (bodyEl) {
      bodyEl.innerHTML = window.MathsRenderer.markdownToHtml(q.statement);
      window.MathsRenderer.renderElement(bodyEl);
    }

    // Gestion du timer
    this.state.timeLeft = this.state.timePerQuestion;
    clearInterval(this.state.timerInterval);

    if (this.state.timePerQuestion > 0) {
      if (timerBar) timerBar.style.width = '100%';
      if (timeText) timeText.textContent = `${this.state.timeLeft}s`;

      const totalTime = this.state.timePerQuestion;
      this.state.timerInterval = setInterval(() => {
        if (this.state.isPaused) return;

        this.state.timeLeft--;
        if (timeText) timeText.textContent = `${this.state.timeLeft}s`;
        if (timerBar) {
          const percent = Math.max(0, (this.state.timeLeft / totalTime) * 100);
          timerBar.style.width = `${percent}%`;
        }

        if (this.state.timeLeft <= 0) {
          clearInterval(this.state.timerInterval);
          this.next();
        }
      }, 1000);
    } else {
      if (timerBar) timerBar.style.width = '100%';
      if (timeText) timeText.textContent = `Mode Manuel`;
    }
  },

  next() {
    clearInterval(this.state.timerInterval);
    if (this.state.currentIndex < this.state.questions.length - 1) {
      this.state.currentIndex++;
      this.presentCurrentQuestion();
    } else {
      this.finish();
    }
  },

  prev() {
    if (this.state.currentIndex > 0) {
      this.state.currentIndex--;
      this.presentCurrentQuestion();
    }
  },

  togglePause() {
    this.state.isPaused = !this.state.isPaused;
    const btn = document.getElementById('btn-diapo-pause');
    if (btn) btn.textContent = this.state.isPaused ? '▶ Reprendre' : '⏸ Pause';
  },

  stop() {
    clearInterval(this.state.timerInterval);
    this.state.isRunning = false;
  },

  finish() {
    this.stop();
    this.showScreen('recap');

    // Récompense XP pour avoir terminé le rituel
    const xpBonus = this.state.questions.length * 5;
    window.MathsStorage.addXp(xpBonus);
    if (window.MathsApp && typeof window.MathsApp.updateHeaderProfile === 'function') {
      window.MathsApp.updateHeaderProfile();
    }

    this.state.xpBonus = xpBonus;
    this.state.recapMode = 'statements'; // Affichage direct des énoncés selon l'ergonomie MathsMentales
    this.renderRecapScreen();
  },

  setRecapMode(mode) {
    this.state.recapMode = mode;
    this.renderRecapScreen();
  },

  toggleRecapMode() {
    this.state.recapMode = this.state.recapMode === 'statements' ? 'solutions' : 'statements';
    this.renderRecapScreen();
  },

  // Fonctions de Zoom pour ajuster le cadrage de la capture d'écran Notability
  zoomIn() {
    this.state.zoomLevel = Math.min(2.0, +(this.state.zoomLevel + 0.15).toFixed(2));
    this.applyZoom();
  },

  zoomOut() {
    this.state.zoomLevel = Math.max(0.7, +(this.state.zoomLevel - 0.15).toFixed(2));
    this.applyZoom();
  },

  zoomReset() {
    this.state.zoomLevel = 1.15;
    this.applyZoom();
  },

  applyZoom() {
    const sheet = document.getElementById('diapo-mm-sheet');
    if (sheet && sheet.style) {
      if (typeof sheet.style.setProperty === 'function') {
        sheet.style.setProperty('--diapo-font-size', `${this.state.zoomLevel}rem`);
      } else {
        sheet.style['--diapo-font-size'] = `${this.state.zoomLevel}rem`;
      }
    }
  },

  /**
   * Formate une réponse pour un affichage mathématique propre dans le corrigé
   */
  formatAnswerForDisplay(ans) {
    if (ans === undefined || ans === null) return '';
    let str = String(ans).trim();
    if (!str.startsWith('$') && !str.startsWith('\\(') && !str.startsWith('\\[') && !str.startsWith('$$')) {
      if (/\\[a-zA-Z]+|\^|_|\/|=|<|>/.test(str)) {
        str = `$${str}$`;
      }
    }
    return window.MathsRenderer.markdownToHtml(str);
  },

  /**
   * Copie la liste des énoncés (ou corrigé) au format texte dans le presse-papier
   */
  copyQuestions() {
    const isSolutions = this.state.recapMode === 'solutions';
    const lines = this.state.questions.map((q, idx) => {
      let cleanStmt = (q.statement || '')
        .replace(/\$\$/g, '')
        .replace(/\$/g, '')
        .replace(/\r?\n+/g, ' ')
        .trim();
      if (isSolutions) {
        const rawAns = q.options ? q.options[q.correctIndex !== undefined ? q.correctIndex : 0] : (q.answer || '');
        const cleanAns = String(rawAns).replace(/\$\$/g, '').replace(/\$/g, '').trim();
        return `${idx + 1}) ${cleanStmt}  ➜  ${cleanAns}`;
      }
      return `${idx + 1}) ${cleanStmt}`;
    });
    const header = isSolutions ? "Corrigé du Rituel Flash" : "Énoncés du Rituel Flash";
    const textToCopy = `${header}\n\n${lines.join('\n')}\n\nL'Établi des Maths — Loïc Delaporte`;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        if (window.MathsApp && window.MathsApp.showToast) {
          window.MathsApp.showToast('📋 Questions copiées dans le presse-papier !');
        } else {
          alert('Questions copiées dans le presse-papier !');
        }
      });
    }
  },

  /**
   * Rendu de la feuille récapitulative au format MathsMentales
   */
  renderRecapScreen() {
    const listContainer = document.getElementById('diapo-mm-questions-list');
    const tabStatements = document.getElementById('diapo-tab-statements');
    const tabSolutions = document.getElementById('diapo-tab-solutions');
    const sheetTitle = document.getElementById('diapo-mm-sheet-title');
    const sheetEl = document.getElementById('diapo-mm-sheet');

    if (!listContainer) return;

    const isSolutions = this.state.recapMode === 'solutions';

    // Mettre à jour les onglets actifs
    if (tabStatements) tabStatements.classList.toggle('active', !isSolutions);
    if (tabSolutions) tabSolutions.classList.toggle('active', isSolutions);
    if (sheetTitle) sheetTitle.textContent = 'Diapo 1';

    // Rendu compact de chaque question
    const itemsHtml = this.state.questions.map((q, idx) => {
      // 1. Énoncé compact sur une ligne (remplace les retours à la ligne)
      const cleanStmt = (q.statement || '').replace(/\r?\n+/g, ' ');
      const statementHtml = window.MathsRenderer.markdownToHtml(cleanStmt);

      // 2. Réponse en mode correction
      let ansHtml = '';
      if (isSolutions) {
        const rawAns = q.options ? q.options[q.correctIndex !== undefined ? q.correctIndex : 0] : (q.answer || '');
        ansHtml = this.formatAnswerForDisplay(rawAns);
      }

      return `
        <div class="diapo-mm-item">
          <span class="diapo-mm-num">${idx + 1})</span>
          <div class="diapo-mm-content">
            <span class="diapo-mm-statement">${statementHtml}</span>
            ${isSolutions ? `
              <span class="diapo-mm-ans-badge">➜ <strong>${ansHtml}</strong></span>
              ${q.solution ? `
                <details class="diapo-mm-detail">
                  <summary>Détail du calcul</summary>
                  <div class="diapo-mm-sol-text">${window.MathsRenderer.markdownToHtml(q.solution)}</div>
                </details>
              ` : ''}
            ` : ''}
          </div>
        </div>
      `;
    }).join('');

    listContainer.innerHTML = itemsHtml;

    // Rendre KaTeX sur l'ensemble de la feuille
    if (sheetEl) {
      window.MathsRenderer.renderElement(sheetEl);
    } else {
      window.MathsRenderer.renderElement(listContainer);
    }

    this.applyZoom();
  }
};
