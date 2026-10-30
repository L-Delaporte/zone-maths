/**
 * L'Établi des Maths — Onglet Fiches & DS : fiches, devoirs surveillés générés.
 * Méthodes de window.MathsApp (voir js/app.js), ajoutées avant l'initialisation.
 */
Object.assign(window.MathsApp, {
  getChapterSheets(chapterId) {
    const baseSheets = ((window.MATHS_WORKSHEETS || {})[chapterId] || []).slice();
    if (!baseSheets.some(s => s.type === 'ds_type' || (s.id && s.id.includes('ds_type')))) {
      const dsSheet = this.generatedDsByChapter[chapterId] || this.createDsTypeSheet(chapterId);
      if (dsSheet) {
        this.generatedDsByChapter[chapterId] = dsSheet;
        baseSheets.push(dsSheet);
      }
    }
    if (this.generatedPracticeSheet && this.generatedPracticeSheet.chapterId === chapterId) {
      baseSheets.push(this.generatedPracticeSheet);
    }
    return baseSheets;
  },

  getPedagogicalStage(tier) {
    const stages = {
      1: { label: 'Automatismes', prompt: 'Réactiver une règle ou une procédure connue.' },
      2: { label: 'Application guidée', prompt: 'Repérer les données, choisir la méthode, puis l’appliquer.' },
      3: { label: 'Raisonnement', prompt: 'Justifier la propriété utilisée et organiser les étapes du calcul.' },
      4: { label: 'Problème et défi', prompt: 'Modéliser la situation, résoudre, puis vérifier et interpréter le résultat.' }
    };
    return stages[parseInt(tier, 10)] || stages[1];
  },

  getExerciseCompetency(exercise, chapterId) {
    if (exercise && exercise.skill) return exercise.skill;
    if (exercise && exercise.title) return exercise.title;
    const chapter = (window.MATHS_CHAPTERS || []).find(c => c.id === chapterId);
    return chapter ? (chapter.shortTitle || chapter.title) : chapterId;
  },

  getMethodChecklist(tier, chapterId = '') {
    const chapterMethods = {
      G0: ['Repérer le triangle rectangle et son hypoténuse.', 'Écrire l’égalité de Pythagore, remplacer par les longueurs connues et calculer.', 'Conclure avec la longueur cherchée et son unité.'],
      '4G1': ['Repérer le triangle rectangle et son hypoténuse.', 'Écrire l’égalité de Pythagore, remplacer par les longueurs connues et calculer.', 'Conclure avec la longueur cherchée et son unité.'],
      G1: ['Vérifier les alignements et le parallélisme dans la configuration.', 'Écrire les rapports de Thalès dans le même ordre.', 'Calculer la longueur demandée et conclure avec son unité.'],
      N4: ['Définir l’inconnue et traduire la situation en équation si nécessaire.', 'Résoudre en effectuant la même opération des deux côtés.', 'Vérifier la solution dans l’équation de départ et conclure.'],
      '4N5': ['Définir l’inconnue et traduire la situation en équation si nécessaire.', 'Résoudre en effectuant la même opération des deux côtés.', 'Vérifier la solution dans l’équation de départ et conclure.'],
      Org2: ['Organiser les valeurs ou le tableau d’effectifs.', 'Choisir l’indicateur demandé et effectuer le calcul ou lire le rang utile.', 'Interpréter le résultat dans le contexte.'],
      '4D1': ['Organiser les valeurs ou le tableau d’effectifs.', 'Choisir l’indicateur demandé et effectuer le calcul ou lire le rang utile.', 'Interpréter le résultat dans le contexte.'],
      Org4: ['Définir l’événement étudié et repérer les issues possibles.', 'Utiliser le dénombrement ou l’arbre adapté : multiplier sur un chemin, additionner les chemins concernés.', 'Simplifier la probabilité et vérifier qu’elle est comprise entre 0 et 1.'],
      '4D2': ['Définir l’événement étudié et repérer les issues possibles.', 'Utiliser le dénombrement ou l’arbre adapté : multiplier sur un chemin, additionner les chemins concernés.', 'Simplifier la probabilité et vérifier qu’elle est comprise entre 0 et 1.'],
      '5D2': ['Définir l’événement étudié et repérer les issues possibles.', 'Dénombrer les issues favorables et les issues possibles.', 'Simplifier la probabilité et vérifier qu’elle est comprise entre 0 et 1.']
    };
    if (chapterMethods[chapterId]) return chapterMethods[chapterId];

    const checklists = {
      1: ['Identifier la règle ou l’opération à utiliser.', 'Effectuer le calcul en respectant les priorités.', 'Vérifier rapidement le résultat.'],
      2: ['Relever les données utiles et ce qui est demandé.', 'Choisir la propriété ou la méthode adaptée.', 'Appliquer la méthode et rédiger la réponse.'],
      3: ['Annoncer la propriété ou le raisonnement utilisé.', 'Présenter les calculs dans un ordre lisible.', 'Conclure en répondant précisément à la question.'],
      4: ['Traduire la situation en calcul, schéma ou modèle.', 'Résoudre en justifiant les étapes importantes.', 'Vérifier la cohérence et interpréter le résultat dans son contexte.']
    };
    return checklists[parseInt(tier, 10)] || checklists[1];
  },

  createDsTypeSheet(chapterId) {
    const ch = (window.MATHS_CHAPTERS || []).find(c => c.id === chapterId);
    const chTitle = ch ? (ch.shortTitle || ch.title) : chapterId;
    const lvlLabel = this.getLevelName(this.currentLevel);
    const staticExos = (window.MATHS_EXERCISES || {})[chapterId] || [];
    const gen = window.MathsGenerators;
    
    const makeExercise = tier => (gen && gen.generateForChapter(chapterId, tier)) || staticExos.find(e => e.tier === tier) || null;
    const ex1 = makeExercise(1);
    const ex2 = makeExercise(2);
    const ex3 = makeExercise(3);
    const ex4 = makeExercise(4);

    const items = [
      { num: 1, name: "Automatismes & Questions flash", pts: 4, ex: ex1 },
      { num: 2, name: "Application directe du cours", pts: 5, ex: ex2 },
      { num: 3, name: "Raisonnement et calculs approfondis", pts: 5, ex: ex3 },
      { num: 4, name: "Tâche complexe & Problème concret de modélisation", pts: 6, ex: ex4 }
    ].filter(item => item.ex && item.ex.statement);

    if (!items.length) return null;

    let statementMd = `# Devoir Surveillé de Mathématiques (${lvlLabel})\n`;
    statementMd += `## Sujet de DS Type : ${ch ? ch.title : chapterId} (Barème sur 20 points)\n\n`;
    statementMd += `*Durée recommandée : 50 minutes. Calculatrice autorisée. La qualité de la rédaction, la clarté et la précision des justifications seront notées sur 20 points.*\n\n---\n\n`;

    items.forEach(item => {
      const tier = item.ex.tier || item.num;
      const stage = this.getPedagogicalStage(tier);
      const competency = this.getExerciseCompetency(item.ex, chapterId);
      statementMd += `### Exercice ${item.num} — ${stage.label} : ${item.ex.title || item.name} (${item.pts} points)\n`;
      statementMd += `*Compétence : ${competency} · Palier ${tier}*\n\n`;
      statementMd += `${item.ex.statement}\n\n---\n\n`;
    });

    let solutionMd = `## Corrigé Détaillé et Barème Officiel du Devoir Surveillé (sur 20 points)\n\n`;
    items.forEach(item => {
      const tier = item.ex.tier || item.num;
      const rawSol = item.ex.solution || (item.ex.answer ? `Réponse attendue : **${item.ex.answer}**` : "Voir le cours pour les étapes détaillées.");
      const solContent = (window.MathsAdaptiveEngine && item.ex && item.ex.statement)
        ? window.MathsAdaptiveEngine.formatSolutionWithInitialExpr(item.ex.statement, rawSol)
        : rawSol;
      solutionMd += `### Exercice ${item.num} — ${this.getPedagogicalStage(tier).label} : ${item.ex.title || item.name} (${item.pts} points)\n`;
      solutionMd += `**Méthode à vérifier dans sa démarche :**\n${this.getMethodChecklist(tier, chapterId).map(step => `- ${step}`).join('\n')}\n\n${solContent}\n\n---\n\n`;
    });

    return {
      id: `${chapterId}-ds_type_sommatif`,
      filename: `DS_Type_${chapterId}.md`,
      type: 'ds_type',
      title: `📝 Sujet type de DS (20 pts)`,
      statement: statementMd,
      solution: solutionMd
    };
  },

  generatePracticeSheet() {
    const chapterId = this.currentChapterId;
    if (window.MathsGenerators && window.MathsGenerators._recentGeneratedStatements) {
      for (let t = 1; t <= 4; t++) {
        delete window.MathsGenerators._recentGeneratedStatements[`${chapterId}:${t}`];
      }
    }
    const ch = (window.MATHS_CHAPTERS || []).find(c => c.id === chapterId);
    const title = ch ? ch.title : chapterId;
    const gen = window.MathsGenerators;
    const staticExos = (window.MATHS_EXERCISES || {})[chapterId] || [];
    const items = [];
    const usedStatements = new Set();
    for (let i = 0; i < 8; i++) {
      const tier = (i % 4) + 1;
      let ex = null;
      for (let attempt = 0; attempt < 8; attempt++) {
        ex = (gen && gen.generateForChapter(chapterId, tier)) || staticExos.find(q => q.tier === tier) || staticExos[i % Math.max(1, staticExos.length)];
        if (!ex || !ex.statement || !usedStatements.has(ex.statement)) break;
      }
      if (ex && ex.statement) {
        usedStatements.add(ex.statement);
        items.push({ ex, tier, num: items.length + 1 });
      }
    }
    if (!items.length) return;

    const statement = `# Fiche d'entraînement renouvelable — ${title}\n\n${[1, 2, 3, 4].map(tier => {
      const stageItems = items.filter(item => item.tier === tier);
      if (!stageItems.length) return '';
      const stage = this.getPedagogicalStage(tier);
      return `## ${stage.label}\n\n*${stage.prompt}*\n\n${stageItems.map(({ ex, num }) => `### Exercice ${num} : ${ex.title || 'Application'}\n\n**Compétence / notion :** ${this.getExerciseCompetency(ex, chapterId)} · **Palier ${tier}**\n\n${ex.statement}`).join('\n\n')}`;
    }).filter(Boolean).join('\n\n---\n\n')}`;
    const solution = `# Corrigé détaillé et méthodes\n\n${[1, 2, 3, 4].map(tier => {
      const stageItems = items.filter(item => item.tier === tier);
      if (!stageItems.length) return '';
      const stage = this.getPedagogicalStage(tier);
      return `## ${stage.label}\n\n${stageItems.map(({ ex, num }) => `### Exercice ${num} : ${ex.title || 'Application'}\n\n**Méthode à vérifier :**\n${this.getMethodChecklist(tier, chapterId).map(step => `- ${step}`).join('\n')}\n\n${ex.solution || `Réponse : **${ex.answer || 'à déterminer'}**`}`).join('\n\n')}`;
    }).filter(Boolean).join('\n\n---\n\n')}`;
    this.generatedPracticeSheet = {
      id: `${chapterId}-fiche-renouvelable`,
      chapterId,
      type: 'devoir_entrainement',
      title: `✨ Fiche d'entraînement renouvelée (${items.length} exercices)`,
      statement,
      solution
    };
    this.selectedSheetIndex = this.getChapterSheets(chapterId).length - 1;
    this.renderSheetsView();
  },

  regenerateDs() {
    const chapterId = this.currentChapterId;
    if (window.MathsGenerators && window.MathsGenerators._recentGeneratedStatements) {
      for (let t = 1; t <= 4; t++) {
        delete window.MathsGenerators._recentGeneratedStatements[`${chapterId}:${t}`];
      }
    }
    this.generatedDsByChapter[chapterId] = this.createDsTypeSheet(chapterId);
    const sheets = this.getChapterSheets(chapterId);
    this.selectedSheetIndex = Math.max(0, sheets.findIndex(s => s.type === 'ds_type'));
    this.renderSheetsView();
  },

  // =========================================================================
  // 3. ESPACE FICHES D'EXERCICES COMPLÈTES (IMPRESSION & SUJETS)
  // =========================================================================
  renderSheetsView() {
    const container = document.getElementById('sheets-content-container');
    if (!container) return;

    const sheets = this.getChapterSheets(this.currentChapterId);
    if (!sheets.length) {
      const chMeta = (window.MATHS_CHAPTERS || []).find(c => c.id === this.currentChapterId);
      const exos = (window.MATHS_EXERCISES || {})[this.currentChapterId] || [];
      const currentCycle = window.MathsStorage.getCycleForLevel(this.currentLevel);
      const cycleName = this.CYCLES[currentCycle] ? this.CYCLES[currentCycle].name : 'Maths';
      const lvlLabel = this.getLevelName(this.currentLevel);
      
      container.innerHTML = `
        <div class="sheets-nav-bar no-print">
          <div class="sheets-tabs-group">
            <button class="sheet-select-btn active">Fiche d'entraînement (${chMeta ? chMeta.shortTitle : this.currentChapterId})</button>
          </div>
          <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
            <button class="btn-primary no-print" onclick="window.MathsQuizGenerator.openModal(window.MathsApp.currentChapterId)">📝 Devoir Surveillé (20 pts)</button>
            <button class="btn-secondary no-print" onclick="window.MathsApp.generatePracticeSheet()">✨ Nouvelle fiche variée</button>
            <button class="btn-secondary print-btn" onclick="window.print()">🖨️ Imprimer la fiche</button>
          </div>
        </div>
        <div class="printable-worksheet">
          <div class="sheet-print-header">
            <h1>L'Établi des Maths • ${cycleName} — Mathématiques ${lvlLabel}</h1>
            <h2>Fiche d'entraînement : ${chMeta ? chMeta.title : this.currentChapterId}</h2>
            <div class="sheet-author-tag">Fiche créée par <strong>Loïc Delaporte</strong>, Professeur de Mathématiques</div>
            <div class="print-meta">Nom : .................................... Prénom : .................................... Classe : .......... Date : ..........</div>
          </div>
          <div class="sheet-statement-content">
            ${exos.length ? exos.map((ex, i) => `
              <div style="margin-bottom: 1.25rem; padding: 0.9rem; border: 1px solid var(--border, #cbd5e1); border-radius: 8px;">
                <h4 style="margin-top:0; color: var(--primary, #2563eb);">Exercice ${i+1} : ${ex.title || 'Application directe'} (Palier ${ex.tier || 1})</h4>
                <div>${window.MathsRenderer.markdownToHtml(ex.statement)}</div>
              </div>
            `).join('') : `
              <p class="math-p">Entraînez-vous avec les exercices interactifs dans l'onglet <strong>🎯 S'entraîner</strong> ou générez un sujet complet dans <strong>📝 Devoir Blanc</strong>.</p>
            `}
          </div>
        </div>
      `;
      window.MathsRenderer.renderElement(container);
      return;
    }

    if (this.selectedSheetIndex >= sheets.length) {
      this.selectedSheetIndex = 0;
    }

    const activeSheet = sheets[this.selectedSheetIndex] || sheets[0];
    const currentCycle = window.MathsStorage.getCycleForLevel(this.currentLevel);
    const cycleName = this.CYCLES[currentCycle] ? this.CYCLES[currentCycle].name : 'Maths';
    const lvlLabel = this.getLevelName(this.currentLevel);

    let navHtml = `
      <div class="sheets-nav-bar no-print">
        <div class="sheets-tabs-group">
          ${sheets.map((s, idx) => `
            <button class="sheet-select-btn ${idx === this.selectedSheetIndex ? 'active' : ''}" onclick="window.MathsApp.selectSheet(${idx})">
              ${s.title}
            </button>
          `).join('')}
        </div>
        <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
          <button class="btn-secondary no-print" onclick="window.MathsApp.generatePracticeSheet()" title="Créer une fiche avec de nouveaux exercices pour ce chapitre">✨ Nouvelle fiche variée</button>
          <button class="btn-secondary no-print" onclick="window.MathsApp.regenerateDs()" title="Renouveler les valeurs du sujet et de son corrigé">🔀 Renouveler le DS</button>
          <button class="btn-primary no-print" onclick="window.MathsQuizGenerator.openModal(window.MathsApp.currentChapterId)" title="Générer un Devoir Surveillé complet calibré sur 20 points pour ce chapitre">
            📝 Générer un DS (20 pts)
          </button>
          <button class="btn-secondary print-btn" onclick="window.print()">🖨️ Imprimer la fiche</button>
        </div>
      </div>
    `;

    let sheetBody = `
      <div class="printable-worksheet">
        <div class="sheet-print-header print-only">
          <h1>L'Établi des Maths • ${cycleName} — Mathématiques ${lvlLabel}</h1>
          <h2>${activeSheet.title} (${this.currentChapterId})</h2>
          <div class="sheet-author-tag">Fiche d'exercices créée par <strong>Loïc Delaporte</strong>, Professeur de Mathématiques</div>
          <div class="print-meta">Nom : .................................... Prénom : .................................... Classe : .......... Date : ..........</div>
        </div>
        
        <div class="sheet-statement-content">
          ${window.MathsRenderer.markdownToHtml(activeSheet.statement)}
        </div>

        ${activeSheet.solution ? `
          <div class="sheet-solution-accordion no-print">
            <button class="accordion-toggle-btn" onclick="window.MathsApp.toggleSheetSolution()">
              <span>🔍 Afficher / Masquer la Correction détaillée</span>
              <span id="solution-toggle-arrow">▼</span>
            </button>
            <div id="sheet-solution-wrapper" class="solution-content" style="display:none;">
              ${window.MathsRenderer.markdownToHtml(activeSheet.solution)}
            </div>
          </div>
        ` : ''}
      </div>
    `;

    container.innerHTML = navHtml + sheetBody;
    window.MathsRenderer.renderElement(container);
  },

  selectSheet(idx) {
    this.selectedSheetIndex = idx;
    this.renderSheetsView();
  },

  toggleSheetSolution() {
    const wrapper = document.getElementById('sheet-solution-wrapper');
    const arrow = document.getElementById('solution-toggle-arrow');
    if (!wrapper) return;
    const isHidden = wrapper.style.display === 'none';
    wrapper.style.display = isHidden ? 'block' : 'none';
    if (arrow) arrow.textContent = isHidden ? '▲' : '▼';
  },
});
