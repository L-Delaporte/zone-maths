/**
 * Générateur de devoirs blancs d'entraînement (+ corrigé détaillé)
 * Permet aux élèves de s'entraîner en conditions réelles d'examen
 * avec régénération infinie de nouveaux sujets et auto-évaluation.
 */

window.MathsQuizGenerator = {
  lastChapters: ['N1'],
  lastCount: 10,
  showSolutions: true,

  /**
   * Ouvre la modale de configuration du devoir blanc
   */
  openModal(preselectedChapterId = null) {
    const modal = document.getElementById('quiz-modal');
    if (!modal) return;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    document.body.classList.add('modal-open');
    document.body.classList.add('quiz-modal-open');

    // Remplir la sélection des chapitres selon le niveau actif
    const container = document.getElementById('quiz-chapters-checkboxes');
    if (container) {
      const currentLevel = (window.MathsApp && window.MathsApp.currentLevel) || '3eme';
      const allChapters = window.MATHS_CHAPTERS || [];
      const chapters = allChapters.filter(c => !c.level || c.level === currentLevel);
      const defaultId = preselectedChapterId || (window.MathsApp && window.MathsApp.currentChapterId) || (chapters[0] ? chapters[0].id : 'N1');
      container.innerHTML = chapters.map(c => `
        <label class="diapo-chip">
          <input type="checkbox" name="quiz-chap" value="${c.id}" ${c.id === defaultId ? 'checked' : ''} />
          <span>${c.num} : ${c.shortTitle || c.title}</span>
        </label>
      `).join('');
    }

    document.getElementById('quiz-config-screen').style.display = 'block';
    document.getElementById('quiz-preview-screen').style.display = 'none';
  },

  closeModal() {
    const modal = document.getElementById('quiz-modal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.body.classList.remove('modal-open');
    document.body.classList.remove('quiz-modal-open');
  },

  /**
   * Bascule l'affichage du corrigé détaillé
   */
  toggleSolution() {
    const block = document.getElementById('quiz-solutions-block');
    const btn = document.getElementById('btn-toggle-quiz-solution');
    if (!block) return;

    this.showSolutions = !this.showSolutions;
    block.style.display = this.showSolutions ? 'block' : 'none';
    block.classList.toggle('quiz-solutions-hidden', !this.showSolutions);
    if (btn) {
      btn.textContent = this.showSolutions ? '👁️ Masquer le Corrigé' : '👁️ Afficher le Corrigé';
    }
  },

  /**
   * Génère un nouveau sujet blanc complet avec corrigé détaillé
   */
  generate() {
    const checkedBoxes = Array.from(document.querySelectorAll('input[name="quiz-chap"]:checked')).map(cb => cb.value);
    const chapters = checkedBoxes.length ? checkedBoxes : (this.lastChapters.length ? this.lastChapters : [window.MathsApp.currentChapterId || 'N1']);
    this.lastChapters = chapters;

    const countSelect = document.getElementById('quiz-count-select');
    const count = countSelect ? parseInt(countSelect.value, 10) : (this.lastCount || 10);
    this.lastCount = count;

    // Barème
    const totalPoints = count === 5 ? 10 : (count === 10 ? 20 : 30);
    const ptsPerQ = Math.round((totalPoints / count) * 10) / 10;

    // Générer une série de questions aléatoires fraîches
    const questions = window.MathsGenerators.generateSeries(chapters, count);

    const previewContainer = document.getElementById('quiz-preview-content');
    if (!previewContainer) return;

    const chapterTitles = chapters.map(cid => {
      const c = (window.MATHS_CHAPTERS || []).find(ch => ch.id === cid);
      return c ? `${c.num} (${c.shortTitle || c.title})` : cid;
    }).join(', ');

    const currentLevel = (window.MathsApp && window.MathsApp.currentLevel) || '3eme';
    const levelLabel = currentLevel === '5eme' ? '5ème' : (currentLevel === '4eme' ? '4ème' : '3ème');

    let html = `
      <div class="printable-quiz-sheet">
        
        <!-- SUJET BLANC -->
        <div class="quiz-single-subject">
          
          <div class="quiz-banner-notice no-print">
            💡 <strong>Sujet Blanc d'Entraînement (${levelLabel}) :</strong> Ce sujet a été généré aléatoirement pour vous entraîner en conditions réelles d'examen. 
            Prenez une feuille, rédigez soigneusement vos calculs et vos justifications, puis comparez avec le <strong>corrigé détaillé</strong> ci-dessous.
            Vous pouvez cliquer sur <strong>« 🔄 Régénérer un nouveau devoir »</strong> à tout moment pour en faire d'autres !
          </div>

          <div class="quiz-header-box">
            <div class="quiz-title-line">
              <div class="quiz-title-main">
                <h3>📝 L'ÉTABLI DES MATHS (${levelLabel}) — DEVOIRS BLANCS D'ENTRAÎNEMENT</h3>
                <span class="quiz-badge-theme">${chapterTitles}</span>
              </div>
              <div class="quiz-header-right">
                <div class="quiz-grade-box">Note : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / ${totalPoints}</div>
                <img src="assets/logo.png" alt="Logo L'Établi des Maths" class="quiz-header-logo" width="46" height="46" />
              </div>
            </div>
            <div class="quiz-author-line">
              <span>Créé par <strong>Loïc Delaporte</strong>, Professeur de Mathématiques</span>
            </div>
            <div class="quiz-student-meta">
              <span>Nom : ...................................</span>
              <span>Prénom : ...................................</span>
              <span>Classe : ${levelLabel} ......</span>
              <span>Date : ....................</span>
            </div>
          </div>

          <div class="quiz-questions-grid">
            ${questions.map((q, idx) => `
              <div class="quiz-q-card">
                <div class="quiz-q-header">
                  <span class="quiz-q-badge">Exercice ${idx + 1}</span>
                  <span class="quiz-q-pts">(${ptsPerQ} pt${ptsPerQ > 1 ? 's' : ''})</span>
                  ${q.title ? `<span class="quiz-q-topic">${q.title}</span>` : ''}
                </div>
                <div class="quiz-learning-meta">
                  <span class="quiz-stage-pill">${window.MathsApp.getPedagogicalStage(q.tier).label}</span>
                  <span>Palier ${q.tier || 1}</span>
                  <span>Compétence / notion : ${window.MathsApp.getExerciseCompetency(q, q.chapterId)}</span>
                </div>
                <div class="quiz-q-text">
                  ${window.MathsRenderer.markdownToHtml(q.statement)}
                </div>
              </div>
            `).join('')}
          </div>

          <div class="quiz-footer-credit print-only">
            <span>L'Établi des Maths • Devoir blanc ${levelLabel} • Créé par Loïc Delaporte, Professeur de Mathématiques</span>
          </div>
        </div>

        <!-- CORRIGÉ DÉTAILLÉ -->
        <div id="quiz-solutions-block" class="quiz-solutions-teacher">
          <div class="quiz-header-box teacher-header">
            <div class="quiz-title-line">
              <div class="quiz-title-main">
                <h3>L'ÉTABLI DES MATHS (${levelLabel}) — CORRIGÉ DÉTAILLÉ DU DEVOIR BLANC — BARÈME SUR ${totalPoints} POINTS</h3>
                <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem; color: var(--text-muted, #555);">
                  Thème(s) évalué(s) : ${chapterTitles} — Auto-évaluation & remédiation
                </p>
              </div>
              <div class="quiz-header-right">
                <img src="assets/logo.png" alt="Logo L'Établi des Maths" class="quiz-header-logo" width="46" height="46" />
              </div>
            </div>
            <div class="quiz-author-line">
              <span>Créé par <strong>Loïc Delaporte</strong>, Professeur de Mathématiques</span>
            </div>
          </div>
          <div class="quiz-solutions-grid">
            ${questions.map((q, idx) => `
              <div class="quiz-sol-card">
                <div class="quiz-sol-header">
                  <strong>Exercice ${idx + 1}</strong> <span class="quiz-q-pts">(${ptsPerQ} pt${ptsPerQ > 1 ? 's' : ''})</span>
                  ${q.title ? `<span class="quiz-sol-topic">${q.title}</span>` : ''}
                </div>
                <div class="quiz-learning-meta correction-learning-meta">
                  <span class="quiz-stage-pill">${window.MathsApp.getPedagogicalStage(q.tier).label}</span>
                  <span>Compétence / notion : ${window.MathsApp.getExerciseCompetency(q, q.chapterId)}</span>
                </div>
                <div class="quiz-sol-body">
                  <div class="quiz-method-cues">
                    <strong>Méthode à vérifier</strong>
                    <ul>${window.MathsApp.getMethodChecklist(q.tier, q.chapterId).map(step => `<li>${step}</li>`).join('')}</ul>
                  </div>
                  ${window.MathsRenderer.markdownToHtml((window.MathsAdaptiveEngine && q.statement && q.solution) ? window.MathsAdaptiveEngine.formatSolutionWithInitialExpr(q.statement, q.solution) : q.solution)}
                </div>
              </div>
            `).join('')}
          </div>

          <div class="quiz-footer-credit print-only">
            <span>L'Établi des Maths • Corrigé officiel d'auto-évaluation ${levelLabel} • Créé par Loïc Delaporte, Professeur de Mathématiques</span>
          </div>
        </div>

      </div>
    `;

    previewContainer.innerHTML = html;
    window.MathsRenderer.renderElement(previewContainer);

    this.showSolutions = true;
    const btn = document.getElementById('btn-toggle-quiz-solution');
    if (btn) btn.textContent = '👁️ Masquer le Corrigé';

    document.getElementById('quiz-config-screen').style.display = 'none';
    document.getElementById('quiz-preview-screen').style.display = 'block';

    // Défiler vers le haut de la prévisualisation
    previewContainer.scrollTop = 0;
  }
};
