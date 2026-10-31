/**
 * Contrôleur du Mode Diaporama / Rituel Chronométré
 * Permet de projeter ou de s'entraîner avec des questions flash rythmées par un compte à rebours.
 * Écran récapitulatif optimisé pour capture d'écran Notability sur iPad.
 */

window.MathsDiaporama = {
  state: {
    isRunning: false,
    isPaused: false,
    isDifferentiated: false,
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

  selectAllChapters(select = true) {
    const checkboxes = document.querySelectorAll('input[name="diapo-chap"]');
    checkboxes.forEach(cb => { cb.checked = !!select; });
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

    const modeSelect = document.getElementById('diapo-mode-select');
    const isDiff = modeSelect ? (modeSelect.value === 'differentiated') : false;
    this.state.isDifferentiated = isDiff;

    // 2. Générer les questions à données aléatoires
    if (isDiff) {
      const pairs = [];
      for (let i = 0; i < count; i++) {
        const ch = chapters[i % chapters.length];
        const tierSocle = (i % 2 === 0) ? 1 : 2;
        const tierDefi = (i % 2 === 0) ? 3 : 4;
        const qSocle = window.MathsGenerators.generate(ch, tierSocle);
        const qDefi = window.MathsGenerators.generate(ch, tierDefi);
        pairs.push({
          isDifferentiated: true,
          socle: qSocle,
          defi: qDefi,
          title: `Question ${i + 1}`
        });
      }
      this.state.questions = pairs;
    } else {
      this.state.questions = window.MathsGenerators.generateSeries(chapters, count);
    }

    this.state.currentIndex = 0;
    this.state.timePerQuestion = time;
    this.state.answersRecord = [];
    this.state.isRunning = true;
    this.state.isPaused = false;

    // 3. Basculer sur l'écran diaporama
    this.showScreen('run');
    this.presentCurrentQuestion();
  },

  /**
   * Relance une nouvelle session de diaporama avec de nouvelles valeurs
   */
  restart() {
    this.stop();
    this.start();
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
    
    if (q.isDifferentiated) {
      if (titleEl) {
        titleEl.textContent = `Double Rituel Flash : Question ${this.state.currentIndex + 1} / ${this.state.questions.length}`;
      }
      if (bodyEl) {
        bodyEl.innerHTML = `
          <div class="diapo-double-stage">
            <div class="diapo-col-socle">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
                <span class="diapo-badge-socle">🟢 Socle</span>
                <strong style="font-size:0.95rem; color:var(--text-main);">${q.socle.title || ''}</strong>
              </div>
              <div class="diapo-col-body" style="font-size:1.15rem; line-height:1.5;">
                ${window.MathsRenderer.markdownToHtml(q.socle.statement)}
              </div>
            </div>
            <div class="diapo-col-defi">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
                <span class="diapo-badge-defi">🟣 Défi</span>
                <strong style="font-size:0.95rem; color:var(--text-main);">${q.defi.title || ''}</strong>
              </div>
              <div class="diapo-col-body" style="font-size:1.15rem; line-height:1.5;">
                ${window.MathsRenderer.markdownToHtml(q.defi.statement)}
              </div>
            </div>
          </div>
        `;
        window.MathsRenderer.renderElement(bodyEl);
      }
    } else {
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
    this.state.recapMode = 'statements'; // Affichage direct des énoncés
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
      if (q.isDifferentiated) {
        const s = q.socle;
        const d = q.defi;
        const sStmt = (s.statement || '').replace(/\$\$/g, '').replace(/\$/g, '').replace(/\r?\n+/g, ' ').trim();
        const dStmt = (d.statement || '').replace(/\$\$/g, '').replace(/\$/g, '').replace(/\r?\n+/g, ' ').trim();
        if (isSolutions) {
          const sAns = String(s.options ? s.options[s.correctIndex !== undefined ? s.correctIndex : 0] : (s.answer || '')).replace(/\$\$/g, '').replace(/\$/g, '').trim();
          const dAns = String(d.options ? d.options[d.correctIndex !== undefined ? d.correctIndex : 0] : (d.answer || '')).replace(/\$\$/g, '').replace(/\$/g, '').trim();
          return `${idx + 1}) [Socle] ${sStmt} ➜ ${sAns}  |  [Défi] ${dStmt} ➜ ${dAns}`;
        }
        return `${idx + 1}) [Socle] ${sStmt}  |  [Défi] ${dStmt}`;
      }
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
   * Rendu de la feuille récapitulative à projeter
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
    if (tabStatements) { tabStatements.classList.toggle('active', !isSolutions); tabStatements.setAttribute('aria-pressed', String(!isSolutions)); }
    if (tabSolutions) { tabSolutions.classList.toggle('active', isSolutions); tabSolutions.setAttribute('aria-pressed', String(isSolutions)); }
    if (sheetTitle) sheetTitle.textContent = this.state.isDifferentiated ? 'Double Rituel (Socle & Défi)' : 'Diapo 1';

    // Rendu en mode différencié (2 colonnes synchronisées)
    if (this.state.isDifferentiated) {
      const itemsHtml = this.state.questions.map((q, idx) => {
        const s = q.socle;
        const d = q.defi;

        let sAnsHtml = '';
        let dAnsHtml = '';
        if (isSolutions) {
          const sRaw = s.options ? s.options[s.correctIndex !== undefined ? s.correctIndex : 0] : (s.answer || '');
          sAnsHtml = this.formatAnswerForDisplay(sRaw);
          const dRaw = d.options ? d.options[d.correctIndex !== undefined ? d.correctIndex : 0] : (d.answer || '');
          dAnsHtml = this.formatAnswerForDisplay(dRaw);
        }

        const sClean = (s.statement || '').replace(/\r?\n+/g, ' ');
        const dClean = (d.statement || '').replace(/\r?\n+/g, ' ');

        return `
          <div class="diapo-recap-double">
            <div class="diapo-col-socle" style="padding:0.85rem 1.1rem;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
                <span class="diapo-badge-socle">🟢 Socle ${idx + 1}</span>
                <small style="color:var(--text-muted); font-weight:600;">${s.title || ''}</small>
              </div>
              <div style="font-size:1.02rem;">${window.MathsRenderer.markdownToHtml(sClean)}</div>
              ${isSolutions ? `<div style="margin-top:0.5rem;"><span class="diapo-mm-ans-badge">➜ <strong>${sAnsHtml}</strong></span></div>` : ''}
            </div>
            <div class="diapo-col-defi" style="padding:0.85rem 1.1rem;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
                <span class="diapo-badge-defi">🟣 Défi ${idx + 1}</span>
                <small style="color:var(--text-muted); font-weight:600;">${d.title || ''}</small>
              </div>
              <div style="font-size:1.02rem;">${window.MathsRenderer.markdownToHtml(dClean)}</div>
              ${isSolutions ? `<div style="margin-top:0.5rem;"><span class="diapo-mm-ans-badge">➜ <strong>${dAnsHtml}</strong></span></div>` : ''}
            </div>
          </div>
        `;
      }).join('');

      listContainer.innerHTML = itemsHtml;
      if (sheetEl) window.MathsRenderer.renderElement(sheetEl);
      else window.MathsRenderer.renderElement(listContainer);
      this.applyZoom();
      return;
    }

    // Rendu standard : une ligne compacte par question
    const itemsHtml = this.state.questions.map((q, idx) => {
      const cleanStmt = (q.statement || '').replace(/\r?\n+/g, ' ');
      const statementHtml = window.MathsRenderer.markdownToHtml(cleanStmt);

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
