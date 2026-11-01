/**
 * L'Établi des Maths — Onglet Cours.
 * Méthodes de window.MathsApp (voir js/app.js), ajoutées avant l'initialisation.
 */
Object.assign(window.MathsApp, {
  // =========================================================================
  // 2. ESPACE FICHE DE COURS SYNTHÉTIQUE
  // =========================================================================
  renderCourseView() {
    const container = document.getElementById('course-content-container');
    if (!container) return;
    const lvlLabel = this.getLevelName(this.currentLevel);

    const currentCycle = window.MathsStorage.getCycleForLevel(this.currentLevel);
    const cycleInfo = this.CYCLES[currentCycle] || { name: 'Mathématiques' };
    const course = (window.MATHS_COURSES || {})[this.currentChapterId];
    if (course && window.MathsBadges) window.MathsBadges.recordEvent('course', { chapterId: this.currentChapterId });
    const capesLesson = (window.CAPES_LESSONS || []).find(l => l.id.toLowerCase() === (this.currentChapterId || '').toLowerCase());
    if (capesLesson) {
      const isOral2 = capesLesson.id === 'capes-oral2';
      const themeColor = isOral2 ? '#ec4899' : '#8b5cf6';
      const badgeText = isOral2
        ? "ÉPREUVE D'ENTRETIEN (ORAL 2) • ÉTHIQUE PROFESSIONNELLE & VALEURS DE LA RÉPUBLIQUE"
        : "LEÇON DISCIPLINAIRE (ORAL 1) • CONCOURS DE L'ENSEIGNEMENT";

      container.innerHTML = `
        <div class="course-sheet-header">
          <div class="course-header-titles">
            <span class="badge-tag" style="background:${themeColor}; color:#fff; font-weight:800; font-size:0.75rem; padding:3px 10px; border-radius:12px; margin-bottom:0.5rem; display:inline-block;">${badgeText}</span>
            <h3 class="course-sheet-title">${capesLesson.num} : ${capesLesson.title}</h3>
            <div style="color:var(--text-muted); font-size:0.9rem; font-weight:600; margin-top:0.25rem;">Domaine : ${capesLesson.domain} • Niveau : ${capesLesson.level}</div>
          </div>
          <div class="course-header-actions">
            <button class="btn-secondary no-print course-print-btn" data-click="print" title="Imprimer la leçon"><span style="margin-right: 0.35rem;" aria-hidden="true">🖨️</span>Imprimer la fiche</button>
            <img src="assets/logo-96.png" alt="" class="course-header-logo" width="48" height="48" />
          </div>
        </div>

        <div class="course-card course-objectives">
          <h3>${isOral2 ? '🎯 1. Textes Officiels & Cadre Institutionnel' : '🎯 1. Pré-requis & Cadre Mathématique Formel'}</h3>
          <ul class="math-list">
            ${(capesLesson.prerequisites || []).map(p => `<li>${p}</li>`).join('')}
          </ul>
        </div>

        <div class="course-card">
          <h3>${isOral2 ? '📋 2. Proposition de Plan & Synthèse Thématique' : '📋 2. Proposition de Plan en 3 Parties (Exposé au tableau)'}</h3>
          <div class="course-card-body" style="display:flex; flex-direction:column; gap:1rem;">
            ${(capesLesson.plan || []).map(p => `
              <div style="background:var(--bg-subtle, #f8fafc); border-left:4px solid ${themeColor}; padding:0.9rem 1.1rem; border-radius:0 8px 8px 0;">
                <h4 style="margin:0 0 0.4rem 0; color:${themeColor}; font-size:1.02rem;">${p.part}</h4>
                <p class="math-p" style="margin:0;">${p.content}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="course-card" style="border: 2px solid ${isOral2 ? 'rgba(236, 72, 153, 0.3)' : 'rgba(139, 92, 246, 0.3)'};">
          <h3>${isOral2 ? '⚖️ 3. Cadre Juridique Fondamental & Jurisprudences de Référence' : '✍️ 3. Théorème Clé & Démonstration Complète au Tableau'}</h3>
          <div class="course-card-body">
            <div class="callout callout-info" style="margin-bottom:1rem; border-left:4px solid ${themeColor};">
              <strong style="color:${themeColor};">${capesLesson.keyTheorem.title} :</strong>
              <p class="math-p" style="margin-top:0.4rem;">${capesLesson.keyTheorem.statement}</p>
            </div>
            <h5 style="margin:0.75rem 0 0.5rem 0; font-size:0.95rem; font-weight:700; color:var(--text-main);">${isOral2 ? 'Jurisprudences & fondements juridiques :' : 'Démonstration rigoureuse :'}</h5>
            <div style="background:var(--bg-surface); padding:0.85rem 1rem; border:1px solid var(--border-color); border-radius:6px; font-size:0.95rem; line-height:1.6;">
              ${window.MathsRenderer.markdownToHtml(capesLesson.keyTheorem.proof)}
            </div>
          </div>
        </div>

        <div class="course-card course-method">
          <h3>${isOral2 ? '⏱️ 4. Focus Thématiques & Études de Cas Juridiques' : '⏱️ 4. Développements Types pour l\'Oral (15 minutes)'}</h3>
          <ul class="math-list">
            ${(capesLesson.developments || []).map(d => `<li>${d}</li>`).join('')}
          </ul>
        </div>

        <div class="course-card" style="border-left: 4px solid #ef4444;">
          <h3>${isOral2 ? '⚠️ 5. Questions Pièges du Jury & Posture Déontologique' : '⚠️ 5. Questions Pièges Classiques & Remarques du Jury'}</h3>
          <ul class="math-list" style="color:var(--text-main);">
            ${(capesLesson.juryTips || []).map(tip => `<li><strong>Attention :</strong> ${tip}</li>`).join('')}
          </ul>
        </div>

        <div class="course-print-footer print-only">
          <span>L'Établi des Maths — Fiche ${isOral2 ? 'Oral 2' : 'de Leçon Concours'} CAPES / Agrégation</span>
          <span>Auteur : Loïc Delaporte</span>
        </div>
      `;
      window.MathsRenderer.renderElement(container);
      return;
    }

    if (!course) {
      const chMeta = (window.MATHS_CHAPTERS || []).find(c => c.id === this.currentChapterId);
      if (chMeta) {
        const isUniversity = ['L1', 'L2', 'L3', 'capes'].includes(this.currentLevel);
        const resourceCallout = !isUniversity ? '' : `
          <div class="callout callout-info" style="margin-top: 1.25rem; padding: 0.9rem; border-radius: 8px; background: var(--bg-hover, #f1f5f9); border-left: 4px solid var(--primary, #2563eb);">
            🎓 <strong>Ressources universitaires (${cycleInfo.name}) :</strong> Définitions formelles, théorèmes fondamentaux et méthodologie d'après les enseignements magistraux et TD de Licence de Mathématiques.
          </div>`;
        container.innerHTML = `
          <div class="course-sheet-header">
            <div class="course-header-titles">
              <h3 class="course-sheet-title">${chMeta.num} : ${chMeta.title}</h3>
            </div>
            <div class="course-header-actions">
              <button class="btn-secondary no-print course-print-btn" data-click="print" title="Imprimer le cours"><span style="margin-right: 0.35rem;" aria-hidden="true">🖨️</span>Imprimer le cours</button>
              <img src="assets/logo-96.png" alt="" class="course-header-logo" width="48" height="48" />
            </div>
          </div>
          <div class="course-card course-objectives">
            <h3><span aria-hidden="true">🎯</span> Attendus & Objectifs ${lvlLabel}</h3>
            <ul class="math-list">
              ${(chMeta.skills || []).map(s => `<li>${s}</li>`).join('')}
            </ul>
          </div>
          <div class="course-card">
            <h3><span aria-hidden="true">📖</span> Synthèse du chapitre & Notions clés</h3>
            <div class="course-card-body">
              <p class="math-p">${chMeta.description}</p>
              ${resourceCallout}
            </div>
          </div>
          <div class="course-card course-method">
            <h3><span aria-hidden="true">⚡</span> Entraînement & Automatismes</h3>
            <p class="math-p">Rendez-vous dans l'onglet <strong>🎯 S'entraîner</strong> pour pratiquer les 4 Paliers ZPD ou lancez un <strong>⏱️ Rituel Flash</strong> !</p>
          </div>
          <div class="course-print-footer print-only">
            <span>L'Établi des Maths</span>
            <span>Créé par Loïc Delaporte</span>
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
        <div class="course-header-titles">
          <h3 class="course-sheet-title">${course.title}</h3>
        </div>
        <div class="course-header-actions">
          <button class="btn-secondary no-print course-print-btn" data-click="print" title="Imprimer le cours"><span style="margin-right: 0.35rem;" aria-hidden="true">🖨️</span>Imprimer le cours</button>
          <img src="assets/logo-96.png" alt="" class="course-header-logo" width="48" height="48" />
        </div>
      </div>
    `;

    // Objectifs
    if (course.objectives && course.objectives.length) {
      html += `
        <div class="course-card course-objectives">
          <h3><span aria-hidden="true">🎯</span> Attendus de fin de cycle & Objectifs ${lvlLabel}</h3>
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
            <h3><span aria-hidden="true">⚡</span> ${m.title}</h3>
            <div class="method-example"><strong>Exemple :</strong> ${window.MathsRenderer.markdownToHtml(m.example)}</div>
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
          <h3><span aria-hidden="true">⚠️</span> Pièges fréquents</h3>
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
            <div>
              <h3><span aria-hidden="true">🗂️</span> Mémorisation Active & Flashcards de Révision</h3>
              <span class="flashcards-subtitle">Teste ta mémoire sur les définitions, formules et théorèmes clés avant de t'entraîner</span>
            </div>
            <button class="btn-primary btn-sm-flashcards" data-click="MathsFlashcards.openModal" data-args='["${this.currentChapterId}"]' style="margin-left:auto;">
              🚀 Lancer l'entraînement interactif (Boîte Leitner)
            </button>
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
                <button class="flashcard-btn-action" data-click="MathsApp.toggleFlashcard" data-args='[${idx}]'>
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
        <button class="btn-primary" data-click="MathsApp.switchTab" data-args='["train"]'>Lancer l'entraînement adaptatif 🎯</button>
      </div>
      <div class="course-print-footer print-only">
        <span>L'Établi des Maths</span>
        <span>Créé par Loïc Delaporte</span>
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
});
