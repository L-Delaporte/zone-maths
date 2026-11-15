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

  // Navigateurs sans ::details-content : les détails repliés de la feuille sont ouverts le temps de l'impression
  bindPrintDetails() {
    if (this._printDetailsBound) return;
    this._printDetailsBound = true;
    let closedForPrint = [];
    window.addEventListener('beforeprint', () => {
      closedForPrint = [...document.querySelectorAll('.diapo-mm-detail:not([open])')];
      closedForPrint.forEach(detail => { detail.open = true; });
    });
    window.addEventListener('afterprint', () => {
      closedForPrint.forEach(detail => { detail.open = false; });
      closedForPrint = [];
    });
  },

  /**
   * Ouvre la fenêtre modale de configuration du diaporama
   */
  openModal(preselectedChapterId = null) {
    this.bindPrintDetails();
    const modal = document.getElementById('diaporama-modal');
    if (!modal) return;

    this.bindControls();
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    document.body.classList.add('modal-open');
    document.body.classList.add('diapo-modal-open');

    // Remplir le sélecteur de chapitres selon le niveau actif
    const selectorContainer = document.getElementById('diaporama-chapters-checkboxes');
    if (selectorContainer) {
      const currentLevel = (window.MathsApp && window.MathsApp.currentLevel) || '3eme';
      const allChapters = window.MATHS_CHAPTERS || [];
      const chapters = allChapters.filter(c => window.MathsChapterLevels.has(c, currentLevel));
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

    // Afficher l'écran de configuration (à l'ouverture, le focus relève de la gestion commune des modales)
    this.showScreen('config', false);
  },

  selectAllChapters(select = true) {
    const checkboxes = document.querySelectorAll('input[name="diapo-chap"]');
    checkboxes.forEach(cb => { cb.checked = !!select; });
  },

  closeModal() {
    this.stop();
    this.setFullscreen(false);
    const modal = document.getElementById('diaporama-modal');
    if (modal) modal.style.display = 'none';
    const box = document.querySelector('.diapo-box');
    if (box) box.classList.remove('diapo-recap-active');
    document.body.style.overflow = 'auto';
    document.body.classList.remove('modal-open');
    document.body.classList.remove('diapo-modal-open');
  },

  showScreen(name, moveFocus = true) {
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

    // Le bouton qui avait le focus vient d'être masqué : le reporter sur le titre du nouvel écran
    const heading = moveFocus && target && target.querySelector('h2, h3');
    if (heading) {
      heading.setAttribute('tabindex', '-1');
      heading.focus({ preventScroll: true });
    }
  },

  /**
   * Raccourcis du déroulé et suivi du plein écran, branchés une seule fois.
   * Phase de capture : Échap ne doit pas atteindre la fermeture commune des modales (app.js).
   */
  bindControls() {
    if (this.controlsBound) return;
    this.controlsBound = true;
    document.addEventListener('keydown', e => this.handleRunKey(e), true);
    const sync = () => this.syncFullscreen();
    document.addEventListener('fullscreenchange', sync);
    document.addEventListener('webkitfullscreenchange', sync);
    window.addEventListener('resize', () => this.fitStage());
    this.addFullscreenButtons();
  },

  /**
   * Clavier et télécommande de présentation (qui envoie → ou Page suivante), pendant le déroulé seulement
   */
  handleRunKey(e) {
    if (!this.state.isRunning || e.ctrlKey || e.altKey || e.metaKey) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      e.stopPropagation();
      const modal = document.getElementById('diaporama-modal');
      if (modal && modal.classList.contains('diapo-fullscreen')) this.setFullscreen(false);
      else if (confirm('Quitter le rituel en cours ?')) this.closeModal();
      return;
    }

    // Espace et Entrée gardent leur effet natif sur un bouton atteint au clavier
    if ((e.key === ' ' || e.key === 'Enter') && e.target.closest && e.target.closest('button')) return;

    const action = {
      ArrowRight: 'next', PageDown: 'next', ' ': 'next', Enter: 'next',
      ArrowLeft: 'prev', PageUp: 'prev',
      p: 'togglePause', P: 'togglePause',
      f: 'toggleFullscreen', F: 'toggleFullscreen'
    }[e.key];
    if (!action) return;
    e.preventDefault();
    e.stopPropagation();
    if (!e.repeat) this[action]();
  },

  addFullscreenButtons() {
    [['.diapo-bottom-controls', 'btn-secondary'], ['.diapo-mm-topbar-actions', 'diapo-mm-action-btn']].forEach(([selector, cls]) => {
      const parent = document.querySelector(selector);
      if (!parent) return;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `${cls} diapo-fullscreen-btn`;
      btn.title = 'Plein écran (touche F pendant le rituel)';
      btn.setAttribute('data-click', 'MathsDiaporama.toggleFullscreen');
      parent.insertBefore(btn, parent.querySelector('.modal-close-btn'));
    });
    this.updateFullscreenButtons();
  },

  updateFullscreenButtons() {
    const modal = document.getElementById('diaporama-modal');
    const on = !!modal && modal.classList.contains('diapo-fullscreen');
    document.querySelectorAll('.diapo-fullscreen-btn').forEach(btn => {
      btn.textContent = on ? '⛶ Quitter le plein écran' : '⛶ Plein écran';
    });
  },

  nativeFullscreenElement() {
    return document.fullscreenElement || document.webkitFullscreenElement || null;
  },

  /**
   * Plein écran réel quand le navigateur l'accorde ; sans l'API (iPhone) ou en cas de refus,
   * la classe diapo-fullscreen suffit à étendre la modale à toute la fenêtre.
   * La page entière passe en plein écran, pas la modale : le badge de fin de rituel et les
   * messages, placés hors de la modale, resteraient sinon invisibles.
   */
  setFullscreen(on) {
    const modal = document.getElementById('diaporama-modal');
    if (!modal) return;
    modal.classList.toggle('diapo-fullscreen', on);
    this.updateFullscreenButtons();
    this.fitStage();
    const root = document.documentElement;
    const active = this.nativeFullscreenElement();
    if (on && !active) {
      const request = root.requestFullscreen || root.webkitRequestFullscreen;
      if (request) Promise.resolve(request.call(root)).catch(() => {});
    } else if (!on && active) {
      const exit = document.exitFullscreen || document.webkitExitFullscreen;
      if (exit) Promise.resolve(exit.call(document)).catch(() => {});
    }
  },

  toggleFullscreen() {
    const modal = document.getElementById('diaporama-modal');
    this.setFullscreen(!(modal && modal.classList.contains('diapo-fullscreen')));
  },

  // Sortie décidée par le navigateur (Échap en plein écran) : la modale reprend sa taille
  syncFullscreen() {
    const modal = document.getElementById('diaporama-modal');
    if (modal) modal.classList.toggle('diapo-fullscreen', !!this.nativeFullscreenElement());
    this.updateFullscreenButtons();
    this.fitStage();
  },

  /**
   * Agrandi, un énoncé long doit encore tenir à l'écran : une télécommande ne fait pas défiler.
   * --diapo-fit est le facteur de réduction lu par la feuille de style.
   */
  fitStage() {
    const stage = document.querySelector('.diapo-main-stage');
    const modal = document.getElementById('diaporama-modal');
    if (!stage || !modal) return;
    stage.style.removeProperty('--diapo-fit');
    if (!modal.classList.contains('diapo-fullscreen')) return;
    for (let fit = 0.9; fit >= 0.5 && stage.scrollHeight > stage.clientHeight; fit -= 0.1) {
      stage.style.setProperty('--diapo-fit', fit.toFixed(1));
    }
  },

  /**
   * Démarre une session de diaporama
   */
  start(enterFullscreen = true) {
    // Dans le gestionnaire du clic « Lancer » : le plein écran exige un geste de l'utilisateur
    if (enterFullscreen) this.setFullscreen(true);

    const currentLevel = (window.MathsApp && window.MathsApp.currentLevel) || '3eme';
    const validLevelChapters = (window.MATHS_CHAPTERS || []).filter(c => window.MathsChapterLevels.has(c, currentLevel)).map(c => c.id);
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

    // 2. Générer les questions à données aléatoires : automatismes sans calculatrice et énoncés courts
    //    (MathsGenerators.pickRitualQuestion), palier abaissé seulement si un chapitre n'offre rien de compatible
    if (isDiff) {
      const pairs = [];
      const used = new Set();
      for (let i = 0; i < count; i++) {
        const ch = chapters[i % chapters.length];
        const tierSocle = (i % 2 === 0) ? 1 : 2;
        const tierDefi = (i % 2 === 0) ? 3 : 4;
        const qSocle = window.MathsGenerators.pickRitualQuestion(ch, tierSocle, used);
        if (qSocle && qSocle.statement) used.add(qSocle.statement);
        const qDefi = window.MathsGenerators.pickRitualQuestion(ch, tierDefi, used);
        if (qDefi && qDefi.statement) used.add(qDefi.statement);
        pairs.push({
          isDifferentiated: true,
          socle: qSocle,
          defi: qDefi,
          title: `Question ${i + 1}`
        });
      }
      this.state.questions = pairs;
    } else {
      this.state.questions = window.MathsGenerators.generateSeries(chapters, count, { ritual: true });
    }

    this.state.currentIndex = 0;
    this.state.timePerQuestion = time;
    this.state.answersRecord = [];
    this.state.isRunning = true;
    this.state.isPaused = false;
    const pauseBtn = document.getElementById('btn-diapo-pause');
    if (pauseBtn) pauseBtn.textContent = '⏸ Pause';

    // 3. Basculer sur l'écran diaporama
    this.showScreen('run');
    this.presentCurrentQuestion();
  },

  /**
   * Relance une nouvelle session de diaporama avec de nouvelles valeurs
   */
  restart() {
    this.stop();
    this.start(false);
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
              <div class="diapo-col-body" style="font-size:var(--diapo-col-font, 1.15rem); line-height:1.5;">
                ${window.MathsRenderer.markdownToHtml(q.socle.statement)}
              </div>
            </div>
            <div class="diapo-col-defi">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
                <span class="diapo-badge-defi">🟣 Défi</span>
                <strong style="font-size:0.95rem; color:var(--text-main);">${q.defi.title || ''}</strong>
              </div>
              <div class="diapo-col-body" style="font-size:var(--diapo-col-font, 1.15rem); line-height:1.5;">
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
    this.fitStage();

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
    if (window.MathsBadges) { window.MathsBadges.recordEvent('rituel'); window.MathsBadges.check(); }
    this.state.recapMode = 'statements'; // Affichage direct des énoncés
    this.renderRecapScreen();
  },

  setRecapMode(mode) {
    this.state.recapMode = mode;
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
    const str = String(ans).trim();
    const tex = this.plainAnswerToTex(str);
    return window.MathsRenderer.markdownToHtml(this.isBareFormula(tex) ? `$${tex}$` : str);
  },

  /**
   * Réponse écrite sous sa forme de saisie (« 7.5*10^-2 », « pi/4 ») : en mode math, « 10^-2 » et
   * « 10^16 » n'élèveraient que le premier caractère et le point resterait anglo-saxon.
   */
  plainAnswerToTex(str) {
    return str
      .replace(/(\d)\.(\d)/g, '$1{,}$2')
      .replace(/(^|[^\^_{])\*/g, '$1\\times ')
      .replace(/\^(-?\d+)/g, '^{$1}')
      .replace(/(^|[^\\a-zA-Z])pi(?![a-zA-Z])/g, '$1\\pi ')
      .replace(/(^|[^\\a-zA-Z])sqrt\(([^()]*)\)/g, '$1\\sqrt{$2}');
  },

  /**
   * Vrai pour une expression seule écrite sans délimiteurs : les réponses qui mêlent phrases et
   * formules portent déjà leurs $…$, et un mot français en mode math perdrait ses espaces.
   */
  isBareFormula(str) {
    // Nombre décimal seul : le mode math lui donne sa virgule et un vrai signe moins
    if (/^-?\d+\{,\}\d+$/.test(str)) return true;
    // Début par « = » : formule de tableur, à montrer telle quelle
    if (/^=|\$|`|\\\(|\\\[/.test(str) || !/\\[a-zA-Z]+|\^|_|\/|=|<|>/.test(str)) return false;
    // Une valeur suivie de son unité (« 2,5 mL/min ») reste du texte
    if (/\d\s+[a-zA-Zµ]/.test(str)) return false;
    const withoutCommands = str
      .replace(/\\(?:text\w*|math\w+|operatorname|begin|end)\s*\{[^{}]*\}/g, ' ')
      .replace(/\\[a-zA-Z]+/g, ' ');
    return !/[a-zA-ZÀ-ÿ]{4,}/.test(withoutCommands);
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
    const copyQuestions = () => {
      if (!navigator.clipboard || !navigator.clipboard.writeText) return;
      navigator.clipboard.writeText(textToCopy).then(() => {
        if (window.MathsApp && window.MathsApp.showToast) {
          window.MathsApp.showToast('📋 Questions copiées dans le presse-papier !');
        } else {
          alert('Questions copiées dans le presse-papier !');
        }
      });
    };
    if (typeof navigator.share === 'function' && window.MathsApp && window.MathsApp.isCoarsePointer()) {
      navigator.share({ title: header, text: textToCopy })
        .catch(err => { if (err.name !== 'AbortError') copyQuestions(); });
    } else {
      copyQuestions();
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
