/**
 * L'Établi des Maths — Outils annexes : visualiseur, preuves, rituels, devoirs blancs, flashcards.
 * Méthodes de window.MathsApp (voir js/app.js), ajoutées avant l'initialisation.
 */
Object.assign(window.MathsApp, {
  getVisualizerModeForChapter(chapterId) {
    if (!chapterId) return null;
    const map = {
      'L2-CAL': 'torus',
      'L2-MUL': 'torus',
      'L2-CRB': 'torus',
      'L3-GDF': 'torus',
      'L2-EDO': 'phase_plane',
      'capes-01': 'phase_plane',
      'L3-SDF': 'fourier',
      'L3-FOU': 'fourier',
      'capes-03': 'fourier'
    };
    return map[chapterId] || null;
  },

  updateVisualizerButtonUI(chapterId = null) {
    const chId = chapterId || this.currentChapterId;
    const btnVis = document.getElementById('btn-open-visualizer');
    if (!btnVis) return;
    const mode = this.getVisualizerModeForChapter(chId);
    if (mode) {
      btnVis.style.display = 'inline-flex';
      const labels = {
        torus: '🔬 Labo 3D : Tore & Variétés',
        phase_plane: '🔬 Labo 2D : Plan de Phase EDO',
        fourier: '🔬 Labo 2D : Synthèse de Fourier'
      };
      btnVis.innerHTML = labels[mode] || '🔬 Labo 2D/3D';
      btnVis.onclick = () => this.openVisualizerModal(mode);
    } else {
      btnVis.style.display = 'none';
    }
  },

  openVisualizerModal(mode = null) {
    const modal = document.getElementById('visualizer-modal');
    if (!modal) return;
    modal.style.display = 'flex';
    const targetMode = mode || this.getVisualizerModeForChapter(this.currentChapterId) || 'torus';
    if (window.MathVisualizer) {
      window.MathVisualizer.init('vis-canvas');
      window.MathVisualizer.switchMode(targetMode);
    }
  },

  closeVisualizerModal() {
    const modal = document.getElementById('visualizer-modal');
    if (modal) modal.style.display = 'none';
    if (window.MathVisualizer && window.MathVisualizer.animId) {
      cancelAnimationFrame(window.MathVisualizer.animId);
      window.MathVisualizer.animId = null;
    }
  },

  openProofModal(theoremId = null) {
    const modal = document.getElementById('proof-modal');
    if (!modal) return;
    modal.style.display = 'flex';
    if (window.ProofEngine) {
      this.renderProofEngineUI(theoremId);
    }
  },

  closeProofModal() {
    const modal = document.getElementById('proof-modal');
    if (modal) modal.style.display = 'none';
  },

  renderProofEngineUI(selectedId = null) {
    const container = document.getElementById('proof-content-container');
    if (!container || !window.ProofEngine) return;
    const thList = window.ProofEngine.getTheorems();
    const currentTh = selectedId ? window.ProofEngine.getTheoremById(selectedId) : thList[0];
    const ex = window.ProofEngine.generateProofExercise(currentTh.id);

    container.innerHTML = `
      <div style="margin-bottom: 1.25rem; display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
        <label style="font-weight: 700; font-size: 0.9rem;">Théorème :</label>
        <select id="proof-theorem-select" class="form-select" style="max-width: 380px;" onchange="window.MathsApp.renderProofEngineUI(this.value)">
          ${thList.map(t => `<option value="${t.id}" ${t.id === currentTh.id ? 'selected' : ''}>${t.title} (${t.level})</option>`).join('')}
        </select>
      </div>

      <div class="proof-statement-box">
        <strong style="color: var(--primary);">Énoncé :</strong>
        <p class="math-p" style="margin: 0.4rem 0 0 0;">${currentTh.statement}</p>
      </div>

      <h4 style="margin: 1.25rem 0 0.5rem 0; font-size: 1.05rem;">Étapes de la démonstration :</h4>
      <div id="proof-steps-container" class="proof-steps-list">
        ${ex.shuffledSteps.map((step, idx) => `
          <div class="proof-step-item" data-step-id="${step.id}">
            <span class="proof-step-num">${idx + 1}</span>
            <div class="proof-step-text">
              <div>${step.text}</div>
              <small style="color: var(--text-muted); font-size: 0.8rem; margin-top: 0.2rem; display: block;">💡 Justification : ${step.why}</small>
            </div>
          </div>
        `).join('')}
      </div>

      <div style="background: rgba(239, 68, 68, 0.08); border-left: 4px solid #ef4444; padding: 1rem; border-radius: 0 8px 8px 0; margin-top: 1.25rem;">
        <h4 style="margin: 0 0 0.4rem 0; color: #dc2626; font-size: 0.98rem;">⚠️ Piège / Sophisme à éviter absolument :</h4>
        <p class="math-p" style="margin: 0; font-style: italic;">« ${currentTh.fallacy.fakeStep} »</p>
        <div style="color: #991b1b; font-weight: 600; font-size: 0.85rem; margin-top: 0.4rem;">
          <strong>Réfutation :</strong> ${currentTh.fallacy.whyFalse}
        </div>
      </div>
    `;
    window.MathsRenderer.renderElement(container);
  },

  openDiaporamaModal(chapterId = null, autoStart = false) {
    if (!this.isLevelReady(this.currentLevel)) return this.whenLevelReady(this.currentLevel, () => this.openDiaporamaModal(chapterId, autoStart));
    this.hideHomeView();
    const targetId = chapterId || this.currentChapterId;
    if (window.MathsDiaporama && typeof window.MathsDiaporama.openModal === 'function') {
      window.MathsDiaporama.openModal(targetId);
      if (autoStart && typeof window.MathsDiaporama.start === 'function') {
        setTimeout(() => {
          window.MathsDiaporama.start();
        }, 80);
      }
    }
  },

  openQuizModal(chapterId = null, autoGenerate = false) {
    if (!this.isLevelReady(this.currentLevel)) return this.whenLevelReady(this.currentLevel, () => this.openQuizModal(chapterId, autoGenerate));
    this.hideHomeView();
    const targetId = chapterId || this.currentChapterId;
    if (window.MathsQuizGenerator && typeof window.MathsQuizGenerator.openModal === 'function') {
      window.MathsQuizGenerator.openModal(targetId);
      if (autoGenerate && typeof window.MathsQuizGenerator.generate === 'function') {
        setTimeout(() => {
          if (typeof window.MathsQuizGenerator.selectAllChapters === 'function') {
            window.MathsQuizGenerator.selectAllChapters(true);
          }
          window.MathsQuizGenerator.generate();
        }, 120);
      }
    }
  },

  openFlashcardsModal(chapterId = null) {
    if (!this.isLevelReady(this.currentLevel)) return this.whenLevelReady(this.currentLevel, () => this.openFlashcardsModal(chapterId));
    this.hideHomeView();
    const targetId = chapterId || this.currentChapterId;
    if (window.MathsFlashcards && typeof window.MathsFlashcards.openModal === 'function') {
      window.MathsFlashcards.openModal(targetId);
    }
  },
});
