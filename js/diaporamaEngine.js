/**
 * Contrôleur du Mode Diaporama / Rituel Chronométré (Inspiré de MathsMentales.net)
 * Permet de projeter ou de s'entraîner avec des questions flash rythmées par un compte à rebours.
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
    answersRecord: []
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

    // Remplir le sélecteur de chapitres selon le niveau actif
    const selectorContainer = document.getElementById('diaporama-chapters-checkboxes');
    if (selectorContainer) {
      const currentLevel = (window.MathsApp && window.MathsApp.currentLevel) || '3eme';
      const allChapters = window.MATHS_CHAPTERS || [];
      const chapters = allChapters.filter(c => !c.level || c.level === currentLevel);
      const defaultId = preselectedChapterId || (window.MathsApp && window.MathsApp.currentChapterId) || (chapters[0] ? chapters[0].id : 'N1');
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
    document.body.style.overflow = 'auto';
    document.body.classList.remove('modal-open');
  },

  showScreen(name) {
    document.querySelectorAll('.diapo-screen').forEach(s => s.style.display = 'none');
    const target = document.getElementById(`diapo-screen-${name}`);
    if (target) target.style.display = 'flex';
  },

  /**
   * Démarre une session de diaporama
   */
  start() {
    // 1. Récupérer les options
    const currentLevel = (window.MathsApp && window.MathsApp.currentLevel) || '3eme';
    const fallbackId = currentLevel === '5eme' ? '5N1' : (currentLevel === '4eme' ? '4N1' : 'N1');
    const checkedBoxes = Array.from(document.querySelectorAll('input[name="diapo-chap"]:checked')).map(cb => cb.value);
    const chapters = checkedBoxes.length ? checkedBoxes : [window.MathsApp.currentChapterId || fallbackId];

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
    if (titleEl) titleEl.textContent = q.title;
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
    window.MathsApp.updateHeaderProfile();

    const container = document.getElementById('diapo-recap-list');
    if (!container) return;

    container.innerHTML = `
      <div class="diapo-recap-header">
        <h3>🎉 Rituel Terminé ! (+${xpBonus} XP)</h3>
        <p>Voici le corrigé complet de toutes les questions flash présentées :</p>
      </div>
      <div class="diapo-recap-grid">
        ${this.state.questions.map((q, idx) => `
          <div class="recap-item-card">
            <div class="recap-item-num">Question ${idx + 1}</div>
            <div class="recap-statement">${window.MathsRenderer.markdownToHtml(q.statement)}</div>
            <div class="recap-solution">
              <strong>Réponse & Méthode :</strong>
              <div>${window.MathsRenderer.markdownToHtml(q.solution)}</div>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    window.MathsRenderer.renderElement(container);
  }
};
