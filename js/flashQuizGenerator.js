/**
 * Générateur de devoirs blancs d'entraînement (+ corrigé détaillé)
 * Permet aux élèves de s'entraîner en conditions réelles d'examen
 * avec régénération infinie de nouveaux sujets et auto-évaluation.
 * Multi-niveaux : Collège (5e, 4e, 3e), Lycée (2nde, 1ère, Tale), Licence (L1, L2, L3)
 */

window.MathsQuizGenerator = {
  lastChapters: [],
  lastCount: 10,
  showSolutions: true,

  /**
   * Coche ou décoche l'ensemble des chapitres du niveau actif
   */
  selectAllChapters(checked = true) {
    const boxes = document.querySelectorAll('input[name="quiz-chap"]');
    boxes.forEach(cb => { cb.checked = checked; });
  },

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
      const chapters = allChapters.filter(c => (c.level || '3eme') === currentLevel);
      const isSingleSelection = !!preselectedChapterId;
      const defaultId = preselectedChapterId || (chapters[0] ? chapters[0].id : 'N1');

      const actionsHtml = `
        <div class="quiz-select-actions no-print" style="display: flex; gap: 0.5rem; margin-bottom: 0.85rem; flex-wrap: wrap;">
          <button type="button" class="btn-secondary btn-sm" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;" onclick="window.MathsQuizGenerator.selectAllChapters(true)">✅ Tout sélectionner</button>
          <button type="button" class="btn-secondary btn-sm" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;" onclick="window.MathsQuizGenerator.selectAllChapters(false)">❌ Tout désélectionner</button>
        </div>
      `;

      const chipsHtml = chapters.map(c => {
        // Si aucun chapitre spécifique n'est pré-sélectionné (ex: clic depuis la barre globale),
        // on coche l'ensemble des chapitres pour un devoir blanc d'examen complet.
        const isChecked = isSingleSelection ? (c.id === defaultId) : true;
        return `
          <label class="diapo-chip">
            <input type="checkbox" name="quiz-chap" value="${c.id}" ${isChecked ? 'checked' : ''} />
            <span>${c.num} : ${c.shortTitle || c.title}</span>
          </label>
        `;
      }).join('');

      container.innerHTML = actionsHtml + chipsHtml;
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
    const previewScreen = document.getElementById('quiz-preview-screen');
    const isRegenerating = previewScreen && previewScreen.style.display === 'block';

    const currentLevel = (window.MathsApp && window.MathsApp.currentLevel) || '3eme';
    const validLevelChapters = (window.MATHS_CHAPTERS || []).filter(c => (c.level || '3eme') === currentLevel).map(c => c.id);

    const checkedBoxes = Array.from(document.querySelectorAll('input[name="quiz-chap"]:checked')).map(cb => cb.value);
    let chapters = checkedBoxes.filter(id => validLevelChapters.includes(id));
    if (!chapters.length) {
      chapters = (this.lastChapters || []).filter(id => validLevelChapters.includes(id));
    }
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
    this.lastChapters = chapters;

    // Réinitialiser le cache des énoncés récents pour ces chapitres afin de garantir un renouvellement complet
    if (window.MathsGenerators && window.MathsGenerators._recentGeneratedStatements) {
      chapters.forEach(cid => {
        for (let t = 1; t <= 4; t++) {
          delete window.MathsGenerators._recentGeneratedStatements[`${cid}:${t}`];
        }
      });
    }

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

    const levelLabel = (window.MathsApp && typeof window.MathsApp.getLevelName === 'function')
      ? window.MathsApp.getLevelName(currentLevel)
      : (currentLevel === '5eme' ? '5ème' : (currentLevel === '4eme' ? '4ème' : (currentLevel === '3eme' ? '3ème' : currentLevel)));

    let html = `
      <div class="printable-quiz-sheet">
        
        <!-- SUJET BLANC -->
        <div class="quiz-single-subject">
          
          <div class="quiz-banner-notice no-print" id="quiz-status-banner">
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
            ${questions.map((q, idx) => {
              const stage = (window.MathsApp && typeof window.MathsApp.getPedagogicalStage === 'function')
                ? window.MathsApp.getPedagogicalStage(q.tier)
                : { label: `Palier ${q.tier || 1}` };
              const comp = (window.MathsApp && typeof window.MathsApp.getExerciseCompetency === 'function')
                ? window.MathsApp.getExerciseCompetency(q, q.chapterId)
                : (q.skill || q.title || q.chapterId);
              return `
                <div class="quiz-q-card">
                  <div class="quiz-q-header">
                    <span class="quiz-q-badge">Exercice ${idx + 1}</span>
                    <span class="quiz-q-pts">(${ptsPerQ} pt${ptsPerQ > 1 ? 's' : ''})</span>
                    ${q.title ? `<span class="quiz-q-topic">${q.title}</span>` : ''}
                  </div>
                  <div class="quiz-learning-meta">
                    <span class="quiz-stage-pill">${stage.label}</span>
                    <span>Palier ${q.tier || 1}</span>
                    <span>Compétence / notion : ${comp}</span>
                  </div>
                  <div class="quiz-q-text">
                    ${window.MathsRenderer.markdownToHtml(q.statement)}
                  </div>
                </div>
              `;
            }).join('')}
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
            ${questions.map((q, idx) => {
              const stage = (window.MathsApp && typeof window.MathsApp.getPedagogicalStage === 'function')
                ? window.MathsApp.getPedagogicalStage(q.tier)
                : { label: `Palier ${q.tier || 1}` };
              const comp = (window.MathsApp && typeof window.MathsApp.getExerciseCompetency === 'function')
                ? window.MathsApp.getExerciseCompetency(q, q.chapterId)
                : (q.skill || q.title || q.chapterId);
              const rawSol = q.solution || (q.answer ? `Réponse attendue : **${q.answer}**` : "Voir le cours pour les étapes détaillées.");
              const solFormatted = (window.MathsAdaptiveEngine && q.statement && rawSol)
                ? window.MathsAdaptiveEngine.formatSolutionWithInitialExpr(q.statement, rawSol)
                : rawSol;
              return `
                <div class="quiz-sol-card">
                  <div class="quiz-sol-header">
                    <strong>Exercice ${idx + 1}</strong> <span class="quiz-q-pts">(${ptsPerQ} pt${ptsPerQ > 1 ? 's' : ''})</span>
                    ${q.title ? `<span class="quiz-sol-topic">${q.title}</span>` : ''}
                  </div>
                  <div class="quiz-learning-meta correction-learning-meta">
                    <span class="quiz-stage-pill">${stage.label}</span>
                    <span>Compétence / notion : ${comp}</span>
                  </div>
                  <div class="quiz-sol-body">
                    ${window.MathsRenderer.markdownToHtml(solFormatted)}
                  </div>
                </div>
              `;
            }).join('')}
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

    // Feedback visuel lorsque l'utilisateur a cliqué sur Régénérer
    if (isRegenerating) {
      const cards = previewContainer.querySelectorAll('.quiz-q-card, .quiz-sol-card');
      cards.forEach((c, idx) => {
        c.style.opacity = '0';
        c.style.transform = 'translateY(6px)';
        c.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
        setTimeout(() => {
          c.style.opacity = '1';
          c.style.transform = 'translateY(0)';
        }, Math.min(240, 25 * (idx % 10)));
      });

      const banner = document.getElementById('quiz-status-banner');
      if (banner) {
        banner.style.transition = 'all 0.3s ease';
        banner.style.boxShadow = '0 0 15px rgba(37, 99, 235, 0.45)';
        banner.style.borderColor = 'var(--primary, #2563eb)';
        banner.innerHTML = `✨ <strong>Nouveau sujet généré avec succès (${levelLabel}) !</strong> De nouvelles valeurs et questions ont été tirées au sort. Bon entraînement !`;
        setTimeout(() => {
          if (banner) {
            banner.style.boxShadow = 'none';
          }
        }, 2500);
      }
    }
  }
};
