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

    const countSelect = document.getElementById('quiz-count-select');
    if (countSelect) {
      const currentLevel = (window.MathsApp && window.MathsApp.currentLevel) || '3eme';
      if (currentLevel === '3eme') {
        countSelect.value = 'dnb-20';
      } else if (currentLevel === 'tale' || currentLevel === '1ere') {
        countSelect.value = 'bac-20';
      } else {
        countSelect.value = '10';
      }
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
    const selectedFormat = countSelect ? countSelect.value : (this.lastCount || '10');
    this.lastCount = selectedFormat;

    const isExamDNB = selectedFormat === 'dnb-20' || selectedFormat === 'dnb-100';
    const isExamBac = selectedFormat === 'bac-20';

    const levelLabel = (window.MathsApp && typeof window.MathsApp.getLevelName === 'function')
      ? window.MathsApp.getLevelName(currentLevel)
      : (currentLevel === '6eme' ? '6ème' : currentLevel === '5eme' ? '5ème' : (currentLevel === '4eme' ? '4ème' : (currentLevel === '3eme' ? '3ème' : currentLevel)));

    let totalPoints = 20;
    let ptsPerQ = 2;
    let questions = [];
    let examMainTitle = `📝 L'ÉTABLI DES MATHS (${levelLabel}) — DEVOIRS BLANCS D'ENTRAÎNEMENT`;
    let examSubNotice = `💡 <strong>Sujet Blanc d'Entraînement (${levelLabel}) :</strong> Ce sujet a été généré aléatoirement pour vous entraîner en conditions réelles d'examen. Prenez une feuille, rédigez soigneusement vos calculs et vos justifications, puis comparez avec le <strong>corrigé détaillé</strong> ci-dessous. Vous pouvez cliquer sur <strong>« 🔄 Régénérer un nouveau devoir »</strong> à tout moment pour en faire d'autres !`;
    let examSolutionTitle = `L'ÉTABLI DES MATHS (${levelLabel}) — CORRIGÉ DÉTAILLÉ DU DEVOIR BLANC — BARÈME SUR ${totalPoints} POINTS`;

    if (isExamDNB) {
      // Format de l'épreuve depuis la session 2026 : 2 h, 20 points.
      // Partie 1 — automatismes : 6 points, 20 min, calculatrice interdite, sans justification.
      // Partie 2 — raisonnement et résolution de problèmes : 14 points dont 2 pour la rédaction, 1 h 40.
      totalPoints = 20;
      examMainTitle = `🎓 BREVET DES COLLÈGES (DNB) — SUJET BLANC DE MATHÉMATIQUES SUR 20 POINTS`;
      examSubNotice = `🎓 <strong>Sujet blanc au format du brevet (depuis 2026) :</strong> 2 h, sur 20 points. <strong>Partie 1 — Automatismes</strong> (6 points, 20 min, calculatrice interdite, aucune justification demandée), puis <strong>Partie 2 — Raisonnement et résolution de problèmes</strong> (14 points, 1 h 40, calculatrice autorisée, dont 2 points pour la clarté et la rédaction). Sujet généré aléatoirement : ce n'est pas un sujet officiel.`;
      examSolutionTitle = `🎓 BREVET (DNB) — CORRIGÉ DU SUJET BLANC SUR 20 POINTS`;

      const chapters3e = (window.MATHS_CHAPTERS || []).filter(c => c.level === '3eme').map(c => c.id);
      const shuffled = chapters3e.slice().sort(() => Math.random() - 0.5);
      const automatismes = [];
      for (const cid of shuffled) {
        if (automatismes.length >= 9) break;
        const q = window.MathsGenerators.generateForChapter(cid, 1);
        if (!q || !q.statement || q.statement.length > 260) continue;
        q.seriesIndex = automatismes.length + 1;
        q.examTitle = `Question ${automatismes.length + 1}`;
        q.hidePoints = true;
        if (automatismes.length === 0) {
          q.sectionTitle = 'Partie 1 — Automatismes — 6 points — 20 minutes';
          q.sectionNote = 'Calculatrice interdite. Pour chaque question, recopier son numéro et la réponse. Aucune justification n\'est demandée. Pour les questions à choix multiple, une seule réponse est exacte.';
        }
        automatismes.push(q);
      }

      const problemStructure = [
        { title: "Exercice 1 — Géométrie (4 points)", points: 4, pool: ['G0', 'G1', 'G2', 'G7'] },
        { title: "Exercice 2 — Calcul littéral, équations et fonctions (3,5 points)", points: 3.5, pool: ['N2', 'N4', 'Org1', 'Org3'] },
        { title: "Exercice 3 — Statistiques, probabilités ou algorithmique (4,5 points)", points: 4.5, pool: ['Org2', 'Org4', 'Algo'] }
      ];
      const problems = problemStructure.map((def, idx) => {
        const pool = def.pool.filter(id => chapters3e.includes(id));
        const cid = pool[Math.floor(Math.random() * pool.length)];
        const q = cid ? window.MathsGenerators.generateForChapter(cid, 3) : null;
        if (q) {
          q.examTitle = def.title;
          q.examPoints = def.points;
          q.seriesIndex = automatismes.length + idx + 1;
          if (idx === 0) {
            q.sectionTitle = 'Partie 2 — Raisonnement et résolution de problèmes — 14 points — 1 h 40';
            q.sectionNote = 'Calculatrice autorisée. Toutes les réponses doivent être justifiées. La clarté et la précision des raisonnements ainsi que la rédaction sont évaluées sur 2 points.';
          }
        }
        return q;
      }).filter(Boolean);
      questions = automatismes.concat(problems);

    } else if (isExamBac) {
      totalPoints = 20;
      ptsPerQ = 5;
      examMainTitle = `🎓 BACCALAURÉAT GÉNÉRAL — ÉPREUVE DE SPÉCIALITÉ MATHÉMATIQUES (20 POINTS)`;
      examSubNotice = `🎓 <strong>Sujet Blanc Baccalauréat Spécialité Maths sur 20 points :</strong> 4 exercices sur le modèle de l'épreuve de spécialité (Probabilités & dénombrement, Géométrie dans l'espace, Suites & Analyse, Analyse approfondie). Durée conseillée : 4h00. Calculatrice mode examen autorisée. Sujet généré aléatoirement : ce n'est pas un sujet officiel.`;
      examSolutionTitle = `🎓 BACCALAURÉAT GÉNÉRAL — CORRIGÉ DU SUJET BLANC DE SPÉCIALITÉ (SUR 20 POINTS)`;

      const bacStructure = [
        { title: "Exercice 1 — Probabilités, dénombrement & loi binomiale (5 points)", pool: ['TS1', 'TS2', 'TS3'], tier: 3 },
        { title: "Exercice 2 — Géométrie dans l'espace & Produit scalaire (5 points)", pool: ['TG1', 'TG2'], tier: 3 },
        { title: "Exercice 3 — Analyse, Suites récurrentes & Continuité (5 points)", pool: ['TA1', 'TA2', 'TA3', 'TA5'], tier: 3 },
        { title: "Exercice 4 — Analyse approfondie : dérivation, trigonométrie, convexité ou intégration (5 points)", pool: ['TA4', 'TA6', 'TA7', 'TA8', 'TA9'], tier: 3 }
      ];

      questions = bacStructure.map((def, idx) => {
        const cid = def.pool[Math.floor(Math.random() * def.pool.length)];
        const q = window.MathsGenerators.generateForChapter(cid, def.tier);
        if (q) {
          q.examTitle = def.title;
          q.examPoints = 5;
          q.seriesIndex = idx + 1;
        }
        return q;
      }).filter(Boolean);

    } else {
      const count = parseInt(selectedFormat, 10) || 10;
      totalPoints = count === 5 ? 10 : (count === 10 ? 20 : 30);
      ptsPerQ = Math.round((totalPoints / count) * 10) / 10;
      questions = window.MathsGenerators.generateSeries(chapters, count);
      examSolutionTitle = `L'ÉTABLI DES MATHS (${levelLabel}) — CORRIGÉ DÉTAILLÉ DU DEVOIR BLANC — BARÈME SUR ${totalPoints} POINTS`;
    }

    const previewContainer = document.getElementById('quiz-preview-content');
    if (!previewContainer) return;

    const chapterTitles = isExamDNB ? 'Programme de 3e — format du brevet 2026'
      : (isExamBac ? 'Programme de spécialité mathématiques (Terminale)'
      : chapters.map(cid => {
          const c = (window.MATHS_CHAPTERS || []).find(ch => ch.id === cid);
          return c ? `${c.num} (${c.shortTitle || c.title})` : cid;
        }).join(', '));

    let html = `
      <div class="printable-quiz-sheet">
        
        <!-- SUJET BLANC -->
        <div class="quiz-single-subject">
          
          <div class="quiz-banner-notice no-print" id="quiz-status-banner">
            ${examSubNotice}
          </div>

          <div class="quiz-header-box">
            <div class="quiz-title-line">
              <div class="quiz-title-main">
                <h3>${examMainTitle}</h3>
                <span class="quiz-badge-theme">${chapterTitles}</span>
              </div>
              <div class="quiz-header-right">
                <div class="quiz-grade-box">Note : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / ${totalPoints}</div>
                <img src="assets/logo-192.png" alt="Logo L'Établi des Maths" class="quiz-header-logo" width="46" height="46" />
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
              const cardTitle = q.examTitle || `Exercice ${idx + 1}`;
              const pointsDisplay = q.hidePoints ? '' : (q.examPoints ? `${String(q.examPoints).replace('.', ',')} points` : `${ptsPerQ} pt${ptsPerQ > 1 ? 's' : ''}`);
              const section = q.sectionTitle ? `
                <div class="quiz-exam-section">
                  <h4>${q.sectionTitle}</h4>
                  ${q.sectionNote ? `<p>${q.sectionNote}</p>` : ''}
                </div>` : '';
              return `${section}
                <div class="quiz-q-card">
                  <div class="quiz-q-header">
                    <span class="quiz-q-badge">${cardTitle}</span>
                    ${pointsDisplay ? `<span class="quiz-q-pts">(${pointsDisplay})</span>` : ''}
                    ${q.title && !q.examTitle ? `<span class="quiz-q-topic">${q.title}</span>` : ''}
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
            <span>L'Établi des Maths • ${examMainTitle} • Créé par Loïc Delaporte, Professeur de Mathématiques</span>
            <span class="print-qr"><img src="assets/qr/site.svg" alt="" width="64" height="64" /> Entraîne-toi gratuitement : etabli-des-maths.fr</span>
          </div>
        </div>

        <!-- CORRIGÉ DÉTAILLÉ -->
        <div id="quiz-solutions-block" class="quiz-solutions-teacher">
          <div class="quiz-header-box teacher-header">
            <div class="quiz-title-line">
              <div class="quiz-title-main">
                <h3>${examSolutionTitle}</h3>
                <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem; color: var(--text-muted, #555);">
                  Thème(s) évalué(s) : ${chapterTitles} — Auto-évaluation & remédiation
                </p>
              </div>
              <div class="quiz-header-right">
                <img src="assets/logo-192.png" alt="Logo L'Établi des Maths" class="quiz-header-logo" width="46" height="46" />
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
              const cardTitle = q.examTitle || `Exercice ${idx + 1}`;
              const pointsDisplay = q.hidePoints ? '' : (q.examPoints ? `${String(q.examPoints).replace('.', ',')} points` : `${ptsPerQ} pt${ptsPerQ > 1 ? 's' : ''}`);
              const rawSol = q.solution || (q.answer ? `Réponse attendue : **${q.answer}**` : "Voir le cours pour les étapes détaillées.");
              const solFormatted = (window.MathsAdaptiveEngine && q.statement && rawSol)
                ? window.MathsAdaptiveEngine.formatSolutionWithInitialExpr(q.statement, rawSol)
                : rawSol;
              const section = q.sectionTitle ? `<div class="quiz-exam-section"><h4>${q.sectionTitle}</h4></div>` : '';
              return `${section}
                <div class="quiz-sol-card">
                  <div class="quiz-sol-header">
                    <strong>${cardTitle}</strong> ${pointsDisplay ? `<span class="quiz-q-pts">(${pointsDisplay})</span>` : ''}
                    ${q.title && !q.examTitle ? `<span class="quiz-sol-topic">${q.title}</span>` : ''}
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
            <span>L'Établi des Maths • Corrigé d'auto-évaluation ${levelLabel} • Créé par Loïc Delaporte, Professeur de Mathématiques</span>
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
