/**
 * L'Établi des Maths — Entraînement adaptatif : exercice, paliers, saisie, correction, célébrations.
 * Méthodes de window.MathsApp (voir js/app.js), ajoutées avant l'initialisation.
 */
Object.assign(window.MathsApp, {
  // =========================================================================
  // 1. ESPACE ENTRAÎNEMENT ADAPTATIF (ZONE OPTIMALE / ZPD)
  // =========================================================================
  renderTrainingView() {
    const engine = window.MathsAdaptiveEngine;
    const activeChapLevel = this.getCurrentChapterLevel();
    const exercise = engine ? engine.state.currentExercise : null;

    // 1. Mise à jour de la jauge ZPD, des paliers et de la maîtrise
    this.renderZpdGauge();
    this.updateChapterMasteryUI(this.currentChapterId);

    // Paliers boutons (gestion des déblocages et choix de palier)
    this.renderTierButtons();
    this.renderTierProgressPanel();

    // 2. Affichage de l'exercice
    const container = document.getElementById('exercise-statement-box');
    const interactionContainer = document.getElementById('exercise-input-zone');
    const feedbackContainer = document.getElementById('exercise-feedback-zone');

    if (!exercise) {
      if (engine && typeof engine.nextExercise === 'function') {
        try {
          const fallbackExo = engine.nextExercise();
          if (fallbackExo) {
            this.renderTrainingView();
            return;
          }
        } catch (err) {
          console.error("Erreur lors de la génération de l'exercice :", err);
        }
      }
      if (container) container.innerHTML = `<p class="math-p">Aucun exercice disponible pour ce chapitre.</p>`;
      return;
    }

    // Énoncé
    if (container) {
      container.innerHTML = `
        <div class="exo-header-bar">
          <span class="exo-tier-tag tier-${exercise.tier}">${exercise.isReview ? '🔁 Rappel · ' : ''}Palier ${exercise.tier} : ${this.getTierName(exercise.tier, activeChapLevel)}</span>
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
      this.case3State = null;
      if (exercise.type === 'case3') {
        // Étude de cas en trois étapes : une étape active à la fois, un seul essai par étape
        if (!exercise._case3Shuffled && engine && typeof engine.shuffleCase3 === 'function') engine.shuffleCase3(exercise);
        this.case3State = { step: 0, picks: [] };
        this.renderCase3Steps(exercise);
      } else if (exercise.type === 'mcq') {
        // Normalisation défensive choices -> options
        if (!exercise.options && exercise.choices) exercise.options = exercise.choices;
        if (exercise.correctIndex === undefined && exercise.options && exercise.answer) {
          exercise.correctIndex = exercise.options.indexOf(exercise.answer);
          if (exercise.correctIndex === -1) exercise.correctIndex = 0;
        }
        if (!exercise.options) exercise.options = [];
        // Mélange défensif : la bonne réponse ne doit jamais être prévisible (toujours en A)
        if (!exercise._mcqShuffled && engine && typeof engine.shuffleMcq === 'function') {
          engine.shuffleMcq(exercise);
          if (exercise.options[exercise.correctIndex] !== undefined) exercise.answer = exercise.options[exercise.correctIndex];
        }

        // Affichage QCM
        const mcqBox = document.createElement('div');
        mcqBox.className = 'mcq-options-grid';
        mcqBox.setAttribute('role', 'group');
        mcqBox.setAttribute('aria-label', 'Choix de la réponse');
        mcqBox.setAttribute('aria-describedby', 'exercise-statement-box');

        exercise.options.forEach((opt, idx) => {
          const btn = document.createElement('button');
          btn.className = 'mcq-opt-btn';
          btn.type = 'button';
          btn.setAttribute('data-index', idx);
          btn.setAttribute('aria-pressed', 'false');
          btn.innerHTML = `
            <span class="mcq-letter">${String.fromCharCode(65 + idx)}</span>
            <span class="mcq-text">${opt}</span>
          `;
          btn.addEventListener('click', () => {
            document.querySelectorAll('.mcq-opt-btn').forEach(b => { b.classList.remove('selected'); b.setAttribute('aria-pressed', 'false'); });
            btn.classList.add('selected');
            btn.setAttribute('aria-pressed', 'true');
            this.selectedMcqAnswer = idx;
          });
          mcqBox.appendChild(btn);
        });

        // Raccourcis clavier guide
        const kbdHint = document.createElement('div');
        kbdHint.className = 'kbd-hint';
        kbdHint.innerHTML = `<span><span aria-hidden="true">⌨️</span> Raccourcis :</span> <kbd class="kbd-badge">A</kbd> <kbd class="kbd-badge">B</kbd> <kbd class="kbd-badge">C</kbd> <kbd class="kbd-badge">D</kbd> pour choisir, <kbd class="kbd-badge">Entrée</kbd> pour valider, <kbd class="kbd-badge">H</kbd> pour indice`;
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
        const allAnswers = [ansStr].concat(Array.isArray(exercise.acceptedAnswers) ? exercise.acceptedAnswers.map(String) : []).join(' ');
        const level = this.getCurrentChapterLevel();
        // Rappel de saisie des racines et de π : dès la 4e, ou si la réponse attendue en contient
        const showSqrtPi = /[√π]/.test(allAnswers) || !['6eme', '5eme'].includes(level);
        let inputTip = showSqrtPi
          ? '💡 Fraction : <code>13/7</code> · racine : <code>3√2</code> ou <code>3sqrt(2)</code> · π : <code>3π/4</code> ou <code>3pi/4</code> (touches √ et π du clavier mathématique ci-dessous).'
          : '💡 Pour une fraction, écris par exemple <code>13/7</code> ou utilise le clavier virtuel ci-dessous.';
        if (exercise.answerType === 'factorisation') {
          safePlaceholder = 'Forme factorisée (ex : 3(x-2)(2x+5))';
          inputTip = '💡 Écris un produit : <code>3(x-2)(2x+5)</code> ; un carré s\'écrit <code>(x+1)^2</code> ; le signe × est facultatif.';
        } else if (exercise.answerType === 'developpement') {
          // Variable de l'expression attendue (x, n pour une suite, X pour un polynôme formel)
          const v = /n/.test(ansStr) ? 'n' : /X/.test(ansStr) ? 'X' : 'x';
          const ex = { x: '6x^2+11x-4', n: '3n^2-2n+5', X: 'X^2-3X+2' }[v];
          const withFrac = ansStr.includes('/') || !['6eme', '5eme', '4eme', '3eme'].includes(level);
          safePlaceholder = `Expression réduite (ex : ${ex})`;
          inputTip = `💡 Écris l'expression sans parenthèses : <code>${ex}</code> ; un carré s'écrit <code>${v}^2</code>.`
            + (withFrac ? ` Coefficient fractionnaire : <code>2/3${v}</code> ou <code>(2/3)${v}</code>.` : '');
        } else if (exercise.answerType === 'equationDroite') {
          safePlaceholder = 'Équation réduite (ex : y=-2/3x+5)';
          inputTip = '💡 Écris l\'équation sous la forme <code>y=3x-2</code> ou <code>y=-2/3x+5</code> (fraction irréductible) ; le « y = » est facultatif.';
        } else if (exercise.answerType === 'canonique') {
          safePlaceholder = 'Forme canonique (ex : 2(x-3)^2-5)';
          inputTip = '💡 Écris la forme <code>a(x-α)^2+β</code>, par exemple <code>2(x-3)^2-5</code> ou <code>-(x+1)^2+4</code>.';
        } else if (ansStr.includes(';') || (ansStr.startsWith('(') && ansStr.endsWith(')'))) {
          safePlaceholder = 'Coordonnées (ex: (3;5) ou 3;5)';
          inputTip = '💡 Écris les coordonnées sous la forme <code>(x;y)</code> ou <code>x;y</code>.' + (showSqrtPi ? ' Racine : <code>√</code> ou <code>sqrt</code> ; π : <code>π</code> ou <code>pi</code>.' : '');
        } else if (/[√π]/.test(ansStr)) {
          safePlaceholder = 'Ex: 3√2, 2√3/3 ou 3π/4';
        } else if (ansStr.includes('/')) {
          safePlaceholder = 'Ex: 3/4 (fraction irréductible)';
        } else if (ansStr.includes('^')) {
          safePlaceholder = 'Ex: 10^3';
        } else if (!isNaN(parseFloat(ansStr))) {
          safePlaceholder = 'Nombre (ex: 12 ou -4)';
        } else if (/^[a-zà-ÿ' -]{2,}$/i.test(ansStr)) {
          safePlaceholder = 'Réponse en toutes lettres';
        }

        inputWrapper.innerHTML = `
          <div class="input-row">
            <label class="sr-only" for="math-user-input">Ta réponse</label>
            <input type="text" id="math-user-input" class="math-text-input" placeholder="${safePlaceholder}" autocomplete="off" aria-describedby="exercise-statement-box" />
            <div id="math-preview-badge" class="math-preview-badge" style="display:none;"></div>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.4rem;">
            <p class="input-tip" style="margin:0;">${inputTip}</p>
            <div class="kbd-hint" style="margin:0;"><span aria-hidden="true">⌨️</span> <kbd class="kbd-badge">Entrée</kbd> pour valider, <kbd class="kbd-badge">H</kbd> pour indice</div>
          </div>
        `;
        interactionContainer.appendChild(inputWrapper);

        const inputField = inputWrapper.querySelector('#math-user-input');
        this.applyMathKeyboardMode(inputField);
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
      validateBtn.textContent = exercise.type === 'case3' ? 'Valider l\'étape 1 sur 3 ✓' : 'Valider ma réponse ✓';
      validateBtn.onclick = () => this.submitCurrentAnswer();
    }
    if (hint1Btn) hint1Btn.textContent = exercise.type === 'case3' ? '💡 Indice pour cette étape' : '💡 Coup de pouce (Indice 1)';
    if (hint2Btn) hint2Btn.style.display = exercise.type === 'case3' ? 'none' : '';
    // Clavier mathématique : seulement s'il y a un champ à remplir (masqué pour les QCM et les études de cas)
    const kbSection = document.querySelector('.virtual-keyboard-section');
    if (kbSection) kbSection.style.display = document.getElementById('math-user-input') ? '' : 'none';
    if (nextBtn) {
      nextBtn.style.display = 'none';
      nextBtn.innerHTML = `Exercice suivant ➔`;
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

  /**
   * Bandeau de progression du palier en cours : objectif explicite, pastilles des 8 dernières
   * questions et nombre de bonnes réponses restantes avant le déblocage du palier suivant.
   */
  renderTierProgressPanel() {
    const engine = window.MathsAdaptiveEngine;
    const statementBox = document.getElementById('exercise-statement-box');
    if (!engine || !statementBox || typeof engine.getTierProgressStatus !== 'function' || !this.currentChapterId) return;
    let panel = document.getElementById('tier-progress-panel');
    if (!panel) {
      panel = document.createElement('div');
      panel.id = 'tier-progress-panel';
      panel.className = 'tier-progress-panel';
      panel.setAttribute('aria-live', 'polite');
      panel.style.cssText = 'display:flex;flex-wrap:wrap;align-items:center;gap:0.4rem 0.9rem;padding:0.55rem 0.8rem;margin:0 0 0.8rem;border-radius:10px;border:1px solid rgba(37,99,235,0.25);background:rgba(37,99,235,0.06);font-size:0.92rem;line-height:1.35;';
      statementBox.parentNode.insertBefore(panel, statementBox);
    }
    const st = engine.getTierProgressStatus(this.currentChapterId);
    const exercise = engine.state.currentExercise;
    if (st.complete) {
      panel.innerHTML = `<span aria-hidden="true">👑</span><span>${st.message}</span>`;
      return;
    }
    const W = engine.PROGRESSION.WINDOW;
    const dots = [];
    for (let i = 0; i < W; i++) {
      const m = (st.marks || [])[i];
      let color = 'rgba(100,116,139,0.18)';
      let label = 'pas encore de réponse';
      if (m === 'g') { color = '#16a34a'; label = 'réussie du premier coup'; }
      else if (m === 'h') { color = '#86efac'; label = 'réussie du premier coup avec un indice'; }
      else if (m === 'o') { color = '#f59e0b'; label = 'réussie après une erreur'; }
      else if (m === 'r') { color = '#dc2626'; label = 'plusieurs erreurs ou pas trouvée'; }
      dots.push(`<span title="${label}" style="display:inline-block;width:0.8rem;height:0.8rem;border-radius:50%;background:${color};"></span>`);
    }
    const reviewNote = exercise && exercise.isReview
      ? `<span style="flex-basis:100%;color:var(--text-muted,#64748b);">🔁 Question de rappel du Palier ${exercise.tier} (révision espacée) : elle ne compte pas dans l'objectif du palier en cours.</span>`
      : '';
    panel.innerHTML = `
      <span><strong>🎯 ${st.objective}</strong></span>
      <span role="img" aria-label="Tes ${W} dernières questions du palier" style="display:inline-flex;gap:0.25rem;">${dots.join('')}</span>
      <span>${st.message}</span>
      ${reviewNote}
    `;
  },

  renderZpdGauge() {
    // Zone cognitive ZPD retirée de l'interface à la demande de l'utilisateur
  },

  getCurrentChapterLevel() {
    if (this.currentChapterId) {
      const ch = (window.MATHS_CHAPTERS || []).find(c => c.id === this.currentChapterId);
      if (ch && ch.level) return ch.level;
      if (this.currentChapterId.startsWith('6')) return '6eme';
      if (this.currentChapterId.startsWith('5')) return '5eme';
      if (this.currentChapterId.startsWith('4')) return '4eme';
      if (this.currentChapterId.startsWith('3')) return '3eme';
      if (this.currentChapterId.startsWith('2')) return '2nde';
      if (this.currentChapterId.startsWith('1')) return '1ere';
      if (this.currentChapterId.startsWith('T')) return 'tale';
      if (this.currentChapterId.startsWith('L1')) return 'L1';
      if (this.currentChapterId.startsWith('L2')) return 'L2';
      if (this.currentChapterId.startsWith('L3')) return 'L3';
    }
    return this.currentLevel || '3eme';
  },

  getTierButtonLabel(tier, level = null) {
    const lvl = level || this.getCurrentChapterLevel();
    const t = parseInt(tier, 10);
    if (lvl === '6eme') {
      const labels = {
        1: "Palier 1 : Socle",
        2: "Palier 2 : Guidé",
        3: "Palier 3 : Approfondissement",
        4: "Palier 4 : Défi 5ème"
      };
      return labels[t] || `Palier ${t}`;
    } else if (lvl === '5eme') {
      const labels = {
        1: "Palier 1 : Socle",
        2: "Palier 2 : Guidé",
        3: "Palier 3 : Approfondissement",
        4: "Palier 4 : Défi 4ème"
      };
      return labels[t] || `Palier ${t}`;
    } else if (lvl === '4eme') {
      const labels = {
        1: "Palier 1 : Socle",
        2: "Palier 2 : Guidé",
        3: "Palier 3 : Approfondissement",
        4: "Palier 4 : Défi 3ème"
      };
      return labels[t] || `Palier ${t}`;
    } else if (lvl === '2nde') {
      const labels = {
        1: "Palier 1 : Socle",
        2: "Palier 2 : Guidé",
        3: "Palier 3 : Approfondissement",
        4: "Palier 4 : Défi 1ère Spé"
      };
      return labels[t] || `Palier ${t}`;
    } else if (lvl === '1ere' || lvl === 'tale' || lvl === 'lycee') {
      const labels = {
        1: "Palier 1 : Socle",
        2: "Palier 2 : Guidé",
        3: "Palier 3 : Bac",
        4: "Palier 4 : Approfondissement"
      };
      return labels[t] || `Palier ${t}`;
    } else if (lvl === 'crpe') {
      const labels = {
        1: "Palier 1 : Socle",
        2: "Palier 2 : Méthodes",
        3: "Palier 3 : Concours",
        4: "Palier 4 : Justifier"
      };
      return labels[t] || `Palier ${t}`;
    } else if (lvl === 'sante' || lvl === 'pass') {
      const labels = {
        1: "Palier 1 : Socle",
        2: "Palier 2 : Méthodes",
        3: lvl === 'pass' ? "Palier 3 : Partiels" : "Palier 3 : Santé",
        4: "Palier 4 : Interpréter"
      };
      return labels[t] || `Palier ${t}`;
    } else if (lvl === 'capes') {
      if (this.currentChapterId === 'capes-oral2-cas') {
        const labels = {
          1: "Palier 1 : Classe",
          2: "Palier 2 : Laïcité",
          3: "Palier 3 : Familles",
          4: "Palier 4 : Protection"
        };
        return labels[t] || `Palier ${t}`;
      }
      if (this.currentChapterId === 'capes-oral2') {
        const labels = {
          1: "Palier 1 : Déontologie",
          2: "Palier 2 : Situations",
          3: "Palier 3 : Périscolaire",
          4: "Palier 4 : Procédures"
        };
        return labels[t] || `Palier ${t}`;
      }
      const labels = {
        1: "Palier 1 : Socle",
        2: "Palier 2 : Méthodes",
        3: "Palier 3 : Concours",
        4: "Palier 4 : Rigueur"
      };
      return labels[t] || `Palier ${t}`;
    } else if (['L1', 'L2', 'L3', 'licence'].includes(lvl)) {
      const labels = {
        1: "Palier 1 : Socle",
        2: "Palier 2 : Méthodes",
        3: "Palier 3 : Examen",
        4: "Palier 4 : Rigueur"
      };
      return labels[t] || `Palier ${t}`;
    } else {
      const labels = {
        1: "Palier 1 : Socle",
        2: "Palier 2 : Guidé",
        3: "Palier 3 : Brevet",
        4: "Palier 4 : Défi Seconde"
      };
      return labels[t] || `Palier ${t}`;
    }
  },

  getTierName(tier, level = null) {
    const lvl = level || this.getCurrentChapterLevel();
    const t = parseInt(tier, 10);
    if (lvl === '6eme') {
      const names = {
        1: "Socle & Automatismes",
        2: "Entraînement Guidé",
        3: "Approfondissement 6e",
        4: "Défi 5ème (Expert)"
      };
      return names[t] || `Niveau ${t}`;
    } else if (lvl === '5eme') {
      const names = {
        1: "Socle & Automatismes",
        2: "Entraînement Guidé",
        3: "Approfondissement 5e",
        4: "Défi 4ème (Expert)"
      };
      return names[t] || `Niveau ${t}`;
    } else if (lvl === '4eme') {
      const names = {
        1: "Socle & Automatismes",
        2: "Entraînement Guidé",
        3: "Approfondissement 4e",
        4: "Défi 3ème (Expert)"
      };
      return names[t] || `Niveau ${t}`;
    } else if (lvl === '2nde') {
      const names = {
        1: "Socle & Automatismes",
        2: "Entraînement Guidé",
        3: "Approfondissement 2nde",
        4: "Défi 1ère Spé (Expert)"
      };
      return names[t] || `Niveau ${t}`;
    } else if (lvl === '1ere' || lvl === 'tale' || lvl === 'lycee') {
      const names = {
        1: "Socle & Automatismes",
        2: "Entraînement Guidé",
        3: "Objectif Bac (Épreuve)",
        4: lvl === 'tale' ? "Défi Post-Bac & Approfondissement" : "Défi & Approfondissement"
      };
      return names[t] || `Niveau ${t}`;
    } else if (lvl === 'crpe') {
      const names = {
        1: "Socle & Automatismes",
        2: "Entraînement & Méthodes",
        3: "Niveau Concours (Écrit)",
        4: "Problèmes, Justifications & Erreurs d'élèves"
      };
      return names[t] || `Niveau ${t}`;
    } else if (lvl === 'sante' || lvl === 'pass') {
      const names = {
        1: "Socle & Automatismes",
        2: "Entraînement & Méthodes",
        3: lvl === 'pass' ? "Niveau Partiels (Épreuve)" : "Objectif Études de santé",
        4: "Problèmes & Interprétation"
      };
      return names[t] || `Niveau ${t}`;
    } else if (lvl === 'capes') {
      if (this.currentChapterId === 'capes-oral2-cas') {
        const names = {
          1: "Cas en classe et en évaluation",
          2: "Cas de laïcité et de neutralité",
          3: "Cas avec les familles et en sortie",
          4: "Cas de protection de l'élève"
        };
        return names[t] || `Niveau ${t}`;
      }
      if (this.currentChapterId === 'capes-oral2') {
        const names = {
          1: "Socle Déontologique & Textes",
          2: "Situations de Classe & Contestation",
          3: "Parents, Sorties & Périscolaire",
          4: "Procédures d'Urgence & Jury"
        };
        return names[t] || `Niveau ${t}`;
      }
      const names = {
        1: "Socle & Définitions",
        2: "Entraînement & Méthodes",
        3: "Niveau Concours (Oral 1)",
        4: "Démonstrations & Rigueur"
      };
      return names[t] || `Niveau ${t}`;
    } else if (['L1', 'L2', 'L3', 'licence'].includes(lvl)) {
      const names = {
        1: "Socle & Définitions",
        2: "Entraînement & Méthodes",
        3: "Niveau Examen (Partiel)",
        4: "Démonstrations & Rigueur"
      };
      return names[t] || `Niveau ${t}`;
    } else {
      const names = {
        1: "Socle & Automatismes",
        2: "Entraînement Guidé",
        3: "Objectif Brevet (DNB)",
        4: "Défi Seconde (Lycée)"
      };
      return names[t] || `Niveau ${t}`;
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
        // Palier verrouillé : l'élève doit d'abord atteindre le pourcentage requis
        const reqPercent = { 2: '25%', 3: '50%', 4: '75%' }[tier] || '25%';
        const cfgP = engine && engine.PROGRESSION ? engine.PROGRESSION : { TARGET: 6, WINDOW: 8 };
        const reqText = `valide le Palier ${tier - 1} (${cfgP.TARGET} bonnes réponses sur ${cfgP.WINDOW}, soit ${reqPercent} de maîtrise)`;
        btn.innerHTML = `<span class="tier-lock-icon" aria-hidden="true">🔒</span> ${baseLabel}<span class="sr-only"> (verrouillé)</span>`;
        btn.setAttribute('aria-disabled', 'true');
        btn.setAttribute('aria-pressed', 'false');
        btn.classList.add('tier-locked');
        btn.classList.remove('active', 'tier-validated');
        btn.title = `Palier ${tier} verrouillé — Pour le débloquer, ${reqText}`;
        btn.onclick = () => {
          if (window.MathsAudio) window.MathsAudio.playHint();
          this.showToast(`🔒 <strong>Palier ${tier} verrouillé</strong><br>Pour le débloquer, ${reqText}.`, 3500);
        };
      } else {
        // Palier débloqué : l'élève peut toujours choisir lui-même ce palier
        btn.innerHTML = `${isValidated ? '<span class="tier-check-icon" aria-hidden="true">✓</span> ' : ''}${baseLabel}${isValidated ? '<span class="sr-only"> (validé)</span>' : ''}`;
        btn.removeAttribute('aria-disabled');
        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
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

  /**
   * Étude de cas en trois étapes : étapes terminées (choix, correction, explication), étape active
   * (boutons .mcq-opt-btn, raccourcis A à D), étapes suivantes verrouillées.
   */
  renderCase3Steps(exercise) {
    const zone = document.getElementById('exercise-input-zone');
    const st = this.case3State;
    if (!zone || !st || !Array.isArray(exercise.steps)) return;
    const md = (t) => window.MathsRenderer.markdownToHtml(t || '');
    const letter = (i) => String.fromCharCode(65 + i);
    const n = exercise.steps.length;
    zone.innerHTML = '';
    const box = document.createElement('div');
    box.className = 'case3-steps';

    exercise.steps.forEach((step, i) => {
      const sec = document.createElement('section');
      const state = i < st.step ? 'done' : (i === st.step ? 'active' : 'locked');
      sec.className = `case3-step case3-${state}`;
      sec.setAttribute('aria-label', `Étape ${i + 1} sur ${n} : ${step.label}`);
      let html = `<h4 class="case3-step-title"><span class="case3-step-num" aria-hidden="true">${i + 1}</span>${step.label}</h4>`;
      if (state === 'done') {
        const pick = st.picks[i];
        const ok = pick === step.correctIndex;
        html += `<p class="case3-pick ${ok ? 'case3-ok' : 'case3-ko'}"><strong>${ok ? '✓ Juste' : '✗ Pas tout à fait'}</strong> : ${letter(pick)}. ${step.options[pick]}</p>`;
        if (!ok) html += `<p class="case3-pick case3-good"><strong>Réponse attendue</strong> : ${letter(step.correctIndex)}. ${step.options[step.correctIndex]}</p>`;
        if (step.explanation) html += `<div class="case3-expl">${md(step.explanation)}</div>`;
      } else if (state === 'active') {
        if (step.question) html += `<p class="case3-question">${step.question}</p>`;
      } else {
        html += `<p class="case3-locked-text">Accessible après l'étape ${i}.</p>`;
      }
      sec.innerHTML = html;

      if (state === 'active') {
        const grid = document.createElement('div');
        grid.className = 'mcq-options-grid case3-grid';
        grid.setAttribute('role', 'group');
        grid.setAttribute('aria-label', `Choix pour l'étape ${i + 1} : ${step.label}`);
        step.options.forEach((opt, idx) => {
          const btn = document.createElement('button');
          btn.className = 'mcq-opt-btn';
          btn.type = 'button';
          btn.setAttribute('data-index', idx);
          btn.setAttribute('aria-pressed', 'false');
          btn.innerHTML = `<span class="mcq-letter">${letter(idx)}</span><span class="mcq-text">${opt}</span>`;
          btn.addEventListener('click', () => {
            grid.querySelectorAll('.mcq-opt-btn').forEach(b => { b.classList.remove('selected'); b.setAttribute('aria-pressed', 'false'); });
            btn.classList.add('selected');
            btn.setAttribute('aria-pressed', 'true');
            this.selectedMcqAnswer = idx;
          });
          grid.appendChild(btn);
        });
        sec.appendChild(grid);
      }
      box.appendChild(sec);
    });

    if (st.step < n) {
      const kbdHint = document.createElement('div');
      kbdHint.className = 'kbd-hint';
      kbdHint.innerHTML = `<span><span aria-hidden="true">⌨️</span> Raccourcis :</span> <kbd class="kbd-badge">A</kbd> <kbd class="kbd-badge">B</kbd> <kbd class="kbd-badge">C</kbd> <kbd class="kbd-badge">D</kbd> pour choisir, <kbd class="kbd-badge">Entrée</kbd> pour valider l'étape, <kbd class="kbd-badge">H</kbd> pour un indice`;
      box.appendChild(kbdHint);
      // Indice de l'étape active (bouton « Indice pour cette étape » et touche H)
      const active = exercise.steps[st.step];
      exercise.hint1 = active.hint || exercise.hint1;
      exercise.hint2 = exercise.hint1;
    }
    zone.appendChild(box);
    window.MathsRenderer.renderElement(box);
    if (st.step > 0) {
      const target = box.querySelector(st.step < n ? '.case3-active' : '.case3-step:last-of-type');
      if (target && typeof target.scrollIntoView === 'function') target.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  },

  submitCurrentAnswer() {
    const engine = window.MathsAdaptiveEngine;
    const exercise = engine.state.currentExercise;
    if (!exercise) return;

    let userAnswer = null;
    if (exercise.type === 'case3') {
      const st = this.case3State;
      if (!st || st.step >= exercise.steps.length) return;
      if (this.selectedMcqAnswer === null || this.selectedMcqAnswer === undefined) {
        alert('Veuillez choisir une réponse pour cette étape.');
        return;
      }
      st.picks.push(this.selectedMcqAnswer);
      st.step++;
      this.selectedMcqAnswer = null;
      this.renderCase3Steps(exercise);
      if (st.step < exercise.steps.length) {
        const validateBtn = document.getElementById('btn-validate-answer');
        if (validateBtn) validateBtn.textContent = `Valider l'étape ${st.step + 1} sur ${exercise.steps.length} ✓`;
        const fb = document.getElementById('exercise-feedback-zone');
        if (fb) { fb.innerHTML = ''; fb.style.display = 'none'; }
        return;
      }
      userAnswer = st.picks.slice();
    } else if (exercise.type === 'mcq') {
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
    this.renderTierProgressPanel();
    this.renderZpdGauge();
  },

  displayAnswerFeedback(result, exercise) {
    const engine = window.MathsAdaptiveEngine;
    if (exercise && exercise.type === 'case3' && this.case3State && Array.isArray(exercise.steps)) {
      const good = this.case3State.picks.filter((pk, i) => exercise.steps[i] && pk === exercise.steps[i].correctIndex).length;
      if (!result.isCorrect) result.message = `${good} étape${good > 1 ? 's' : ''} juste${good > 1 ? 's' : ''} sur ${exercise.steps.length} : les trois doivent l'être pour réussir le cas. Voici la synthèse du cas.`;
    }
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
          <div class="feedback-solution-title" style="color: var(--warning, #f59e0b);">${result.adviceText ? 'Conseil (ce n\'est pas compté comme une erreur) :' : 'Conseil de simplification :'}</div>
          <div class="feedback-solution-body">
            ${result.adviceText ? `
            <p class="math-p">${result.adviceText}</p>
            <p class="math-p">Corrige ta réponse, puis clique de nouveau sur <strong>Valider ma réponse</strong>.</p>` : `
            <p class="math-p">Ta réponse <strong>${result.userFraction}</strong> a la bonne valeur numérique, mais <strong>elle n'est pas sous forme irréductible</strong>.</p>
            <p class="math-p">Divise le numérateur et le dénominateur par leur plus grand diviseur commun, puis clique de nouveau sur <strong>Valider ma réponse</strong>.</p>`}
          </div>
        </div>
      `;
      window.MathsRenderer.renderElement(feedbackContainer);
      this.announceFeedback(feedbackContainer);
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
      // Mettre à jour immédiatement l'état visuel des boutons de paliers (coche ✓, déblocage, palier actif)
      this.renderTierButtons();

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
        ${result.tierCapMessage ? `<div class="level-up-banner" style="background: rgba(37,99,235,0.08); border-color: rgba(37,99,235,0.3); color: var(--primary-text);">🎯 ${result.tierCapMessage}</div>` : ''}
        ${result.progressMessage && !result.tierCapMessage ? `<p class="progress-message" style="margin:0.4rem 0;">📈 ${result.progressMessage}</p>` : ''}
        ${result.solution ? `
        <div class="feedback-solution">
          <div class="feedback-solution-title">Explication / Solution détaillée :</div>
          <div class="feedback-solution-body">${window.MathsRenderer.markdownToHtml((window.MathsAdaptiveEngine && exercise && exercise.statement) ? window.MathsAdaptiveEngine.formatSolutionWithInitialExpr(exercise.statement, result.solution) : result.solution)}</div>
        </div>` : ''}
      `;
      window.MathsRenderer.renderElement(feedbackContainer);
      this.announceFeedback(feedbackContainer);

      if (validateBtn) validateBtn.style.display = 'none';
      if (nextBtn) {
        nextBtn.style.display = 'inline-flex';
        // Si un palier vient d'être validé, inciter au passage au palier supérieur
        if (result.newlyValidatedTiers && result.newlyValidatedTiers.length > 0 && result.newTier && result.newTier > (exercise.tier || 1)) {
          const nextTierLabel = this.getTierButtonLabel(result.newTier, this.getCurrentChapterLevel());
          nextBtn.innerHTML = `<span>Passer au ${nextTierLabel}</span> ➔`;
          nextBtn.onclick = () => {
            window.MathsAdaptiveEngine.setTier(result.newTier);
            this.renderTrainingView();
          };
        } else if (result.tierCapReached && result.nextTierToAdvance) {
          const nextTierLabel = this.getTierButtonLabel(result.nextTierToAdvance, this.getCurrentChapterLevel());
          nextBtn.innerHTML = `<span>Passer au ${nextTierLabel}</span> ➔`;
          nextBtn.onclick = () => {
            window.MathsAdaptiveEngine.setTier(result.nextTierToAdvance);
            this.renderTrainingView();
          };
        } else {
          nextBtn.innerHTML = `<span>Exercice suivant</span> ➔`;
          nextBtn.onclick = () => {
            engine.nextExercise();
            this.renderTrainingView();
          };
        }
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
          <p class="retry-text">Tu peux modifier ta réponse et retenter ta chance !${exercise && exercise.type !== 'mcq' ? ' Une réponse corrigée compte encore en partie pour ton objectif.' : ''}</p>
          ${result.supportMessage ? `<p class="progress-message" style="margin:0.4rem 0;">🤝 ${result.supportMessage}</p>` : ''}
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
            <div class="feedback-solution-body">${window.MathsRenderer.markdownToHtml((window.MathsAdaptiveEngine && exercise && exercise.statement) ? window.MathsAdaptiveEngine.formatSolutionWithInitialExpr(exercise.statement, result.solution) : result.solution)}</div>
          </div>` : ''}
          ${result.progressMessage ? `<p class="progress-message" style="margin:0.4rem 0;">📈 Une erreur ne fait jamais perdre un palier validé. ${result.progressMessage}</p>` : ''}
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
      this.announceFeedback(feedbackContainer);
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
          <button class="btn-secondary btn-sm" data-click="MathsApp.switchTab" data-args='["course"]' type="button">
            📖 Consulter la fiche de cours complète ➔
          </button>
        </div>
      ` : ''}
    `;
    window.MathsRenderer.renderElement(feedbackContainer);
  },

  /**
   * Clavier mathématique ouvert : inputmode="none" empêche le clavier du téléphone de
   * s'ouvrir par-dessus (le curseur et la saisie au clavier physique restent possibles).
   * Clavier mathématique fermé : l'attribut est retiré, le clavier normal revient.
   */
  applyMathKeyboardMode(input) {
    if (!input) return;
    const keyboard = document.getElementById('virtual-math-keyboard');
    const open = !!keyboard && keyboard.style.display !== 'none' && keyboard.style.display !== '';
    if (open) input.setAttribute('inputmode', 'none');
    else input.removeAttribute('inputmode');
  },

  // Clavier virtuel mathématique
  bindVirtualKeyboard() {
    const toggleBtn = document.getElementById('btn-toggle-math-keyboard');
    const keyboard = document.getElementById('virtual-math-keyboard');

    if (toggleBtn && keyboard) {
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.addEventListener('click', () => {
        const isHidden = keyboard.style.display === 'none' || !keyboard.style.display;
        keyboard.style.display = isHidden ? 'grid' : 'none';
        toggleBtn.classList.toggle('active', isHidden);
        toggleBtn.setAttribute('aria-expanded', String(isHidden));
        const input = document.getElementById('math-user-input');
        if (!input) return;
        this.applyMathKeyboardMode(input);
        // Le focus suit le clavier choisi : sur mobile, rouvrir le champ affiche le clavier
        // du téléphone quand le clavier mathématique est fermé, et le laisse caché sinon.
        input.blur();
        input.focus({ preventScroll: true });
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

  /**
   * « Partager à ma classe » : lien direct vers le chapitre, QR code à projeter et message
   * prêt à coller dans l'ENT. Le lien ne débloque aucun palier (voir checkUrlShareParams).
   */
  shareCurrentTraining() {
    const chapterId = this.currentChapterId;
    const chapter = (window.MATHS_CHAPTERS || []).find(c => c.id === chapterId);
    if (!chapter) return;
    const chapterName = chapter.title || chapter.shortTitle || chapterId;
    const levelName = this.getLevelName(chapter.level || this.currentLevel);
    // src=classe : source GoatCounter (liste des sources en fin d'index.html) ; le QR code projeté
    // ci-dessous est le QR imprimé du chapitre (src=qr, scripts/build_qr_codes.js)
    const shareUrl = `https://etabli-des-maths.fr/?chapitre=${encodeURIComponent(chapterId)}&src=classe`;
    const message = `Lien d'entraînement pour le chapitre « ${chapterName} » : ${shareUrl}`;

    let modal = document.getElementById('share-class-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'share-class-modal';
      modal.className = 'modal-overlay';
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');
      modal.setAttribute('aria-labelledby', 'share-class-title');
      modal.style.display = 'none';
      modal.addEventListener('click', e => { if (e.target === modal) this.closeShareModal(); });
      document.body.appendChild(modal);
    }
    const esc = str => this.escapeHtml(str);
    modal.innerHTML = `
      <div class="modal-box share-class-box">
        <div class="modal-header">
          <h2 id="share-class-title">📣 Partager à ma classe</h2>
          <button type="button" class="modal-close-btn" aria-label="Fermer" data-click="MathsApp.closeShareModal">✕</button>
        </div>
        <p class="share-class-chapter"><strong>${esc(levelName)}</strong> — ${esc(chapterName)}</p>
        <div class="share-class-qr">
          <img src="assets/qr/${encodeURIComponent(chapterId)}.svg" alt="QR code vers l'entraînement sur ce chapitre" data-fallback-src="assets/qr/site.svg" />
          <p>Projetez ce QR code : les élèves le scannent avec leur téléphone et arrivent directement sur ce chapitre.</p>
        </div>
        <label class="share-class-label" for="share-class-url">Lien direct</label>
        <div class="share-class-row">
          <input id="share-class-url" class="form-input" type="text" readonly value="${esc(shareUrl)}" />
          <button type="button" class="btn-primary" data-copy="url">Copier le lien</button>
        </div>
        <label class="share-class-label" for="share-class-msg">Message pour l'ENT ou Pronote</label>
        <textarea id="share-class-msg" class="form-input" rows="2" readonly>${esc(message)}</textarea>
        <div class="share-class-actions">
          <button type="button" class="btn-secondary" data-copy="msg">Copier le message</button>
          <button type="button" class="btn-secondary" data-action="project">🖥️ Projeter le QR code en grand</button>
        </div>
        <p class="share-class-note">Chaque élève démarre au palier qu'il a lui-même débloqué : le lien n'ouvre aucun palier supérieur.</p>
      </div>`;

    const copy = (text, label) => {
      const done = () => this.showToast(`📋 <strong>${label} copié</strong>`);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(() => this.selectShareField(label));
      } else {
        this.selectShareField(label);
      }
    };
    modal.querySelector('[data-copy="url"]').addEventListener('click', () => copy(shareUrl, 'Lien'));
    modal.querySelector('[data-copy="msg"]').addEventListener('click', () => copy(message, 'Message'));
    modal.querySelector('[data-action="project"]').addEventListener('click', () => modal.classList.toggle('share-class-projecting'));
    modal.style.display = 'flex';
    document.body.classList.add('modal-open');
  },

  selectShareField(label) {
    const field = document.getElementById(label === 'Lien' ? 'share-class-url' : 'share-class-msg');
    if (field) {
      field.focus();
      field.select();
    }
    this.showToast('Sélectionné : utilisez Ctrl+C (ou un appui long) pour copier.');
  },

  closeShareModal() {
    const modal = document.getElementById('share-class-modal');
    if (modal) {
      modal.style.display = 'none';
      modal.classList.remove('share-class-projecting');
    }
    document.body.classList.remove('modal-open');
  },

  /**
   * Analyse si un palier ou un rang a été débloqué et déclenche la célébration popup
   */
  handleUnlockCelebration(result) {
    if (!result || !result.isCorrect) return false;
    const badgeUps = (result.newlyUnlockedBadges || []).filter(b => b.kind === 'badge').map(b => b.upgrade);
    const shown = this.handleRankCelebration(result);
    if (!badgeUps.length) return shown;
    if (shown) {
      // Une autre célébration est déjà affichée : les badges sont signalés discrètement
      badgeUps.forEach(u => {
        const d = window.MathsBadges.describeUpgrade(u);
        this.showToast(`${d.icon} <strong>Badge ${d.title}</strong> : ${d.tier} !`, 4000);
      });
      return true;
    }
    this.celebrateBadgeUpgrades(badgeUps);
    return true;
  },

  /** Fenêtre de célébration d'un ou plusieurs nouveaux niveaux de badge (le plus haut en vedette). */
  celebrateBadgeUpgrades(ups) {
    if (!ups || !ups.length || !window.MathsBadges) return;
    const B = window.MathsBadges;
    const sorted = ups.slice().sort((a, b) => B.tierClass(b.def, b.level) - B.tierClass(a.def, a.level));
    const top = B.describeUpgrade(sorted[0]);
    const others = sorted.slice(1).map(u => { const d = B.describeUpgrade(u); return `${d.icon} ${d.title} : ${d.tier}`; });
    const isSecret = !!sorted[0].def.secret;
    this.showUnlockPopup({
      icon: top.icon,
      category: isSecret ? '🔮 BADGE SECRET DÉVOILÉ !' : `🏅 NOUVEAU BADGE : NIVEAU ${top.tier.toUpperCase()} !`,
      title: top.title,
      chapterTitle: isSecret ? '' : `Niveau ${top.tier}`,
      description: `${top.desc}.<br>Retrouve tous tes badges dans le <strong>Bilan</strong>.`,
      perks: [`🏅 ${top.title} : ${top.tier}`].concat(others.slice(0, 2)).concat(others.length ? [] : ['⭐ Ajouté à ta vitrine de badges']),
      isMaster: top.tierClass >= 4,
      actionLabel: `Continuer`
    });
  },

  /** Choisit le badge affiché à côté du niveau dans l'en-tête (un second clic le retire). */
  setFavoriteBadge(id) {
    const data = window.MathsStorage.load();
    data.user.favoriteBadge = data.user.favoriteBadge === id ? null : id;
    window.MathsStorage.save(data);
    this.updateHeaderProfile();
    if (typeof this.renderStatsView === 'function') this.renderStatsView();
  },

  handleRankCelebration(result) {
    if (!result || !result.isCorrect) return false;

    const chapterId = this.currentChapterId;
    const chapter = (window.MATHS_CHAPTERS || []).find(c => c.id === chapterId);
    const lvl = this.getCurrentChapterLevel();

    const newBadges = result.newlyUnlockedBadges || [];
    const newValidatedTiers = result.newlyValidatedTiers || [];
    const tierUnlocked = result.unlockedTier || (result.leveledUp ? result.newTier : null);

    // Filtrer les badges de rang par palier (Novice, Apprenti, Chevalier, Maître, Grand Maître sans faute)
    const rankBadges = newBadges.filter(b => b.kind === 'rank');
    // Badge général de tier 4 ("Cap vers la Seconde / 3e / 4e")
    const tier4Badge = newBadges.find(b => b.id === 'tier_4_unlocked');
    // Badges de série de jours (Daily Streak)
    const streakBadges = newBadges.filter(b => b.kind === 'streak');

    const hasNewRank = rankBadges.length > 0;
    const hasNewTier = newValidatedTiers.length > 0 || (result.leveledUp && !!tierUnlocked) || !!tier4Badge;
    const hasStreakBadge = streakBadges.length > 0;
    const hasLevelUp = !!result.leveledUpProfile;

    if (!hasNewRank && !hasNewTier && !hasStreakBadge && !hasLevelUp) {
      return false;
    }

    // 0. Trophée de série de jours conquis (Daily Streak)
    if (hasStreakBadge) {
      const topStreak = streakBadges[streakBadges.length - 1];
      this.showUnlockPopup({
        icon: topStreak.icon || '🔥',
        category: '🔥 NOUVEAU TROPHÉE DE RÉGULARITÉ !',
        title: topStreak.title,
        chapterTitle: `Série de ${topStreak.days} jours consécutifs validée !`,
        description: `Incroyable assiduité ! Tu as maintenu ta flamme pendant <strong>${topStreak.days} jours consécutifs</strong> sur L'Établi des Maths.<br>${topStreak.desc || ''}`,
        perks: [
          `🔥 Série : ${topStreak.days} jours`,
          `🏆 Trophée débloqué dans ton passeport`,
          `⭐ Persévérance exemplaire`
        ],
        actionLabel: `Continuer l'entraînement`
      });
      return true;
    }

    // 0 bis. Trophée Grand Maître : chapitre réussi de 0 % à 100 % sans aucune erreur
    const perfectBadge = rankBadges.find(b => b.tier === 5);
    if (perfectBadge) {
      this.showUnlockPopup({
        icon: '🌟',
        category: '🌟 TROPHÉE GRAND MAÎTRE : SANS ERREUR NI INDICE !',
        title: perfectBadge.title,
        chapterTitle: chapter ? `${chapter.num} — ${chapter.shortTitle || chapter.title}` : '',
        description: `Exceptionnel ! Tu as mené <em>${chapter ? (chapter.shortTitle || chapter.title) : 'ce chapitre'}</em> de <strong>0 % à 100 %</strong> sans <strong>aucune erreur ni indice</strong>. C'est le plus haut trophée d'un chapitre.`,
        perks: [
          `🌟 Titre ${perfectBadge.title}`,
          `💎 100 % de maîtrise`,
          `🏅 Trophée ajouté à ton passeport`
        ],
        isMaster: true,
        actionLabel: `Continuer l'entraînement`
      });
      return true;
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
        isMaster,
        actionLabel: topTier < 4 ? `Passer au ${nextTierName}` : `Continuer l'entraînement`
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
        isMaster,
        actionLabel: `Continuer l'entraînement`
      });
      return true;
    }

    // 3. Uniquement un Palier débloqué / validé
    if (hasNewTier) {
      const validatedTier = newValidatedTiers.length > 0 ? Math.max(...newValidatedTiers) : tierUnlocked;
      const tierTitle = this.getTierName(validatedTier, lvl);
      const nextTierTitle = validatedTier < 4 ? this.getTierName(validatedTier + 1, lvl) : 'Maîtrise totale';
      const isMax = validatedTier >= 4;

      this.showUnlockPopup({
        icon: isMax ? '💎' : '🚀',
        category: isMax ? '💎 PALIER SUPRÊME CONQUIS !' : '🚀 NOUVEAU PALIER DÉBLOQUÉ !',
        title: !isMax ? nextTierTitle : 'Maîtrise totale',
        chapterTitle: chapter ? `${chapter.num} — ${chapter.shortTitle || chapter.title}` : '',
        description: !isMax
          ? `Bravo ! Tu as validé le <strong>${tierTitle}</strong> avec <strong>${result.mastery}% de maîtrise</strong>.<br>Le <strong>${nextTierTitle}</strong> est désormais déverrouillé !`
          : `Exceptionnel ! Tu as validé tous les paliers de ce chapitre avec <strong>100% de maîtrise</strong> !`,
        perks: [
          !isMax ? `🎯 Accès aux exercices du ${nextTierTitle}` : `👑 Tous les paliers conquis`,
          `📈 Maîtrise en hausse : ${result.mastery}%`,
          `⚡ +${result.xpEarned} XP gagnés`
        ],
        isMaster: isMax,
        actionLabel: !isMax ? `Passer au ${nextTierTitle}` : `Continuer l'entraînement`,
        advanceOnAction: !isMax
      });
      return true;
    }

    // 4. Montée de niveau de profil (Progression de Niveau d'Expérience)
    if (hasLevelUp) {
      const lvlInfo = (window.MathsStorage && typeof window.MathsStorage.getLevelProgressInfo === 'function')
        ? window.MathsStorage.getLevelProgressInfo()
        : { level: result.userLevel || 2, rankTitle: "Apprenti de l'Établi", xpNeeded: 75 };

      this.showUnlockPopup({
        icon: '⭐',
        category: '⭐ NIVEAU SUPÉRIEUR ATTEINT !',
        title: `Niveau ${result.userLevel}`,
        chapterTitle: lvlInfo.rankTitle,
        description: `Félicitations pour tes efforts ! Tu as accumulé assez d'expérience pour franchir ce cap et atteindre le <strong>Niveau ${result.userLevel}</strong> !`,
        perks: [
          `⭐ Niveau ${result.userLevel} atteint`,
          `🎓 Titre : ${lvlInfo.rankTitle}`,
          `🎯 Prochain niveau : ${lvlInfo.xpNeeded} XP nécessaires`
        ],
        actionLabel: `Continuer l'entraînement`
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
    const actionBtn = modal.querySelector('.reward-action-btn');

    if (iconEl) iconEl.textContent = data.icon || '🏆';
    if (catEl) catEl.textContent = data.category || 'FÉLICITATIONS !';
    if (titleEl) titleEl.textContent = data.title || 'Nouveau Titre !';
    if (chapEl) chapEl.textContent = data.chapterTitle || '';
    if (descEl) descEl.innerHTML = data.description || 'Félicitations pour tes progrès !';

    if (perksEl) {
      const perks = data.perks || ['🏅 Trophée débloqué'];
      perksEl.innerHTML = perks.map(p => `<span class="reward-perk-pill">${p}</span>`).join('');
    }

    if (actionBtn) {
      actionBtn.innerHTML = data.actionLabel ? `<span>${data.actionLabel}</span> ➔` : `<span>Continuer l'entraînement</span> ➔`;
      actionBtn.onclick = () => {
        this.closeUnlockPopup();
        if (data.advanceOnAction) {
          const nextBtn = document.getElementById('btn-next-exercise');
          if (nextBtn && nextBtn.style.display !== 'none') {
            nextBtn.click();
          }
        }
      };
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

    // Compte à rebours de 10 secondes (10 000 ms), suspendu tant que la souris est sur la carte,
    // et désactivable (bouton « Garder ouvert » ou navigation au clavier) : WCAG 2.2.1
    const totalDuration = 10000;
    let remainingMs = totalDuration;
    let lastTick = Date.now();
    let hovered = false;
    const card = modal.querySelector('.reward-modal-card');
    const timerText = document.getElementById('unlock-timer-text');
    const keepBtn = document.getElementById('unlock-keep-open-btn');
    if (progressBar) progressBar.style.width = '100%';
    if (timerText) timerText.innerHTML = 'Fermeture automatique dans <strong id="unlock-timer-seconds">10</strong>s';
    if (keepBtn) keepBtn.style.display = '';
    const keepOpen = () => {
      if (this._unlockInterval) clearInterval(this._unlockInterval);
      this._unlockInterval = null;
      if (progressBar) progressBar.style.width = '0%';
      if (timerText) timerText.textContent = 'Fermeture automatique désactivée';
      if (keepBtn) keepBtn.style.display = 'none';
    };
    if (keepBtn) keepBtn.onclick = keepOpen;
    if (card) {
      card.onmouseenter = () => { hovered = true; };
      card.onmouseleave = () => { hovered = false; lastTick = Date.now(); };
    }

    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');

    // Décompte fluide et régulier
    this._unlockInterval = setInterval(() => {
      const now = Date.now();
      if (!hovered) remainingMs = Math.max(0, remainingMs - (now - lastTick));
      lastTick = now;
      const remainingSec = Math.ceil(remainingMs / 1000);
      const percent = (remainingMs / totalDuration) * 100;
      const secondsNow = document.getElementById('unlock-timer-seconds');

      if (progressBar) progressBar.style.width = `${percent}%`;
      if (secondsNow) secondsNow.textContent = remainingSec;

      if (remainingMs <= 0) {
        this.closeUnlockPopup();
      }
    }, 100);

    // Fermeture par raccourci clavier (Échap ou Entrée / Espace) ; Tab = navigation : on arrête le décompte
    this._unlockKeyHandler = (e) => {
      if (e.key === 'Tab') { keepOpen(); return; }
      const t = e.target;
      // Entrée / Espace sur un bouton de la modale (✕, Garder ouvert…) : action native du bouton
      if ((e.key === 'Enter' || e.code === 'Space') && t && t.closest && t.closest('#reward-unlock-modal') && t.matches('button') && !t.classList.contains('reward-action-btn')) return;
      if (e.key === 'Escape' || e.key === 'Enter' || e.code === 'Space') {
        e.preventDefault();
        this.closeUnlockPopup();
        if (data.advanceOnAction && (e.key === 'Enter' || e.code === 'Space')) {
          const nextBtn = document.getElementById('btn-next-exercise');
          if (nextBtn && nextBtn.style.display !== 'none') {
            nextBtn.click();
          }
        }
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
});
