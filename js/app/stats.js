/**
 * L'Établi des Maths — Onglet Bilan : statistiques, badges, trophées, sauvegarde de la progression.
 * Méthodes de window.MathsApp (voir js/app.js), ajoutées avant l'initialisation.
 */
Object.assign(window.MathsApp, {
  // =========================================================================
  // 4. ESPACE PASSEPORT, BILAN & STATISTIQUES
  // =========================================================================
  renderStatsView() {
    const container = document.getElementById('stats-content-container');
    if (!container) return;

    const data = window.MathsStorage.load();
    const allChapters = window.MATHS_CHAPTERS || [];
    const levelChapters = allChapters.filter(c => (c.level || '3eme') === this.currentLevel);
    const levelName = this.getLevelName(this.currentLevel);

    // Calcul des stats du niveau
    let totalMastery = 0;
    let completedExosCount = 0;

    levelChapters.forEach(c => {
      const p = data.chapters[c.id];
      if (p) {
        totalMastery += (p.mastery || 0);
        completedExosCount += (p.completed || []).length;
      }
    });
    const globalProgress = levelChapters.length ? Math.round(totalMastery / levelChapters.length) : 0;

    let html = `
      <div class="passport-author-banner">
        <span>📐 <strong>L'Établi des Maths • Cycle 4 (${levelName})</strong> • Application et contenus conçus par <strong>Loïc Delaporte</strong>, Professeur de Mathématiques</span>
      </div>

      <div class="stats-overview-grid">
        <div class="stat-card">
          <span class="stat-icon">🎓</span>
          <span class="stat-val">Niveau ${data.user.level}</span>
          <span class="stat-lbl">Titre d'élève</span>
        </div>
        <div class="stat-card">
          <span class="stat-icon">⚡</span>
          <span class="stat-val">${data.user.xp} XP</span>
          <span class="stat-lbl">Points d'expérience</span>
        </div>
        <div class="stat-card">
          <span class="stat-icon">🎯</span>
          <span class="stat-val">${completedExosCount}</span>
          <span class="stat-lbl">Exercices maîtrisés</span>
        </div>
        <div class="stat-card">
          <span class="stat-icon">📊</span>
          <span class="stat-val">${globalProgress}%</span>
          <span class="stat-lbl">Programme ${levelName} validé</span>
        </div>
      </div>

      <div class="stats-section">
        <h3>🏆 Badges d'Étapes & Jalons</h3>
        <div class="badges-grid">
          ${this.renderBadgesHtml(data.badges)}
        </div>
      </div>

      <div class="stats-section">
        <h3>🔥 Trophées de Régularité (Daily Streak)</h3>
        <p class="math-p" style="margin-bottom: 1rem; font-size: 0.92rem; color: var(--text-muted);">
          S'entraîner chaque jour entretient ta flamme et débloque des trophées d'assiduité : 1 semaine, 2 semaines, 1 mois, 2 mois, 6 mois et 1 an de persévérance !
        </p>
        <div class="badges-grid">
          ${this.renderStreakBadgesHtml(data)}
        </div>
      </div>

      <div class="stats-section">
        <h3>🎖️ Rangs & Trophées par Chapitre — ${levelName}</h3>
        <p class="math-p" style="margin-bottom: 1rem; font-size: 0.92rem; color: var(--text-muted);">
          Valide les paliers d'entraînement pour faire évoluer ton titre : 🥉 <strong>Novice</strong> (Palier 1 validé) ➔ 🥈 <strong>Apprenti</strong> (Palier 2 validé) ➔ 🥇 <strong>Chevalier</strong> (Palier 3 validé) ➔ 💎 <strong>Maître</strong> (100% de la notion) !
        </p>
        <div class="chapter-trophies-grid">
          ${this.renderChapterTrophiesHtml(levelChapters, data.badges, data.chapters)}
        </div>
      </div>

      <div class="stats-section">
        <h3>🗺️ Maîtrise par Chapitre — Classe de ${levelName} (${levelChapters.length} Thèmes)</h3>
        <div class="chapters-mastery-list">
          ${levelChapters.map(c => {
            const p = data.chapters[c.id] || { mastery: 0, currentTier: 1, completed: [], validatedTiers: [] };
            const valTiers = p.validatedTiers || [];
            let highestTier = 0;
            if (p.mastery >= 100 || valTiers.includes(4) || (data.badges || []).some(b => b.id === `${c.id}_tier_4`)) {
              highestTier = 4;
            } else if (valTiers.includes(3) || (data.badges || []).some(b => b.id === `${c.id}_tier_3`) || p.mastery >= 75 || p.currentTier >= 4) {
              highestTier = 3;
            } else if (valTiers.includes(2) || (data.badges || []).some(b => b.id === `${c.id}_tier_2`) || p.mastery >= 50 || p.currentTier >= 3) {
              highestTier = 2;
            } else if (valTiers.includes(1) || (data.badges || []).some(b => b.id === `${c.id}_tier_1`) || p.mastery >= 25 || p.currentTier >= 2) {
              highestTier = 1;
            }
            const currentRank = highestTier > 0 
              ? (window.MathsAdaptiveEngine ? window.MathsAdaptiveEngine.getChapterRankTitle(c, highestTier) : `Palier ${highestTier}`)
              : 'Non débloqué';
            return `
              <div class="mastery-row">
                <div class="mastery-left">
                  <span class="mastery-code" style="color:${c.color}; font-weight:bold;">${c.num}</span>
                  <span class="mastery-name">${c.shortTitle || c.title}</span>
                </div>
                <div class="mastery-bar-wrapper">
                  <div class="mastery-bar-fill" style="width:${p.mastery || 0}%; background-color:${c.color};"></div>
                </div>
                <span class="mastery-percent">${p.mastery || 0}% — <strong>${currentRank}</strong></span>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <div class="stats-footer-actions no-print">
        <button class="btn-secondary" onclick="window.MathsStorage.exportToJson()" title="Télécharger un fichier de sauvegarde de ta progression">💾 Sauvegarder ma progression</button>
        <button class="btn-secondary" onclick="window.MathsApp.handleImportProgress()" title="Restaurer une progression depuis un fichier de sauvegarde">📂 Restaurer une sauvegarde</button>
        <button class="btn-danger" onclick="window.MathsApp.handleResetProgress()">🔄 Réinitialiser ma progression</button>
      </div>
    `;

    container.innerHTML = html;
  },

  renderBadgesHtml(unlockedBadges = []) {
    const lvl = this.getCurrentChapterLevel();
    let tier4Title = 'Cap vers la Seconde';
    let tier4Desc = 'Débloquer le palier 4 (Défi Seconde)';
    if (lvl === '6eme') {
      tier4Title = 'Cap vers la 5ème';
      tier4Desc = 'Débloquer le palier 4 (Défi 5ème)';
    } else if (lvl === '5eme') {
      tier4Title = 'Cap vers la 4ème';
      tier4Desc = 'Débloquer le palier 4 (Défi 4ème)';
    } else if (lvl === '4eme') {
      tier4Title = 'Cap vers la 3ème';
      tier4Desc = 'Débloquer le palier 4 (Défi 3ème)';
    } else if (lvl === '2nde') {
      tier4Title = 'Cap vers la 1ère Spé';
      tier4Desc = 'Débloquer le palier 4 (Défi 1ère Spé)';
    } else if (lvl === '1ere' || lvl === 'tale' || lvl === 'lycee') {
      tier4Title = 'Excellence Baccalauréat';
      tier4Desc = 'Débloquer le palier 4 (Défi & Approfondissement)';
    } else if (['L1', 'L2', 'L3', 'licence', 'capes'].includes(lvl)) {
      tier4Title = 'Rigueur Universitaire & Concours';
      tier4Desc = 'Débloquer le palier 4 (Démonstrations & Rigueur)';
    }
    const unlockedTier4 = (unlockedBadges || []).find(ub => ub.id === 'tier_4_unlocked');

    const allPossibleBadges = [
      { id: 'first_step', title: 'Premier Pas', desc: 'Compléter un exercice avec succès', icon: '🎯' },
      { id: 'level_3', title: 'Apprenti Géomètre', desc: "Atteindre le Niveau 3 d'expérience", icon: '📐' },
      { id: 'level_5', title: 'Maître du Calcul', desc: "Atteindre le Niveau 5 d'expérience", icon: '⚡' },
      { 
        id: 'tier_4_unlocked', 
        title: unlockedTier4 ? (unlockedTier4.title || tier4Title) : tier4Title, 
        desc: unlockedTier4 ? (unlockedTier4.description || tier4Desc) : tier4Desc, 
        icon: '🚀' 
      }
    ];

    return allPossibleBadges.map(b => {
      const isUnlocked = (unlockedBadges || []).some(ub => ub.id === b.id);
      return `
        <div class="badge-item ${isUnlocked ? 'unlocked' : 'locked'}">
          <span class="badge-emoji">${b.icon}</span>
          <div class="badge-info">
            <strong>${b.title}</strong>
            <small>${b.desc}</small>
          </div>
        </div>
      `;
    }).join('');
  },

  renderStreakBadgesHtml(data) {
    const milestones = (window.MathsStorage && typeof window.MathsStorage.getStreakMilestones === 'function')
      ? window.MathsStorage.getStreakMilestones(data)
      : [];

    return milestones.map(m => {
      const statusText = m.isUnlocked 
        ? '<span style="color: var(--success, #10b981); font-weight: 700;">Obtenu ✓</span>' 
        : `<span style="color: var(--text-muted);">${m.current} / ${m.days} j (${m.progressPct}%)</span>`;

      return `
        <div class="badge-item ${m.isUnlocked ? 'unlocked' : 'locked'}">
          <span class="badge-emoji">${m.icon}</span>
          <div class="badge-info">
            <div style="display: flex; justify-content: space-between; align-items: baseline; gap: 0.35rem;">
              <strong>${m.title}</strong>
              <span class="streak-trophy-pill" style="font-size: 0.7rem;">${m.label}</span>
            </div>
            <small>${m.desc} • ${statusText}</small>
          </div>
        </div>
      `;
    }).join('');
  },

  renderChapterTrophiesHtml(chapters, unlockedBadges = [], chaptersData = {}) {
    const engine = window.MathsAdaptiveEngine;
    return chapters.map(c => {
      const p = chaptersData[c.id] || { mastery: 0, currentTier: 1, validatedTiers: [] };
      const valTiers = p.validatedTiers || [];

      // Règle de déblocage stricte :
      // 1. Pour Maître : il faut 100% de la notion (p.mastery >= 100)
      // 2. Si palier 3 validé : débloque Chevalier
      // 3. Si palier 2 validé : débloque Apprenti
      // 4. Si palier 1 validé : débloque Novice
      let highestTier = 0;
      if (p.mastery >= 100 || valTiers.includes(4) || (unlockedBadges || []).some(b => b.id === `${c.id}_tier_4`)) {
        highestTier = 4;
      } else if (valTiers.includes(3) || (unlockedBadges || []).some(b => b.id === `${c.id}_tier_3`) || p.mastery >= 75 || p.currentTier >= 4) {
        highestTier = 3;
      } else if (valTiers.includes(2) || (unlockedBadges || []).some(b => b.id === `${c.id}_tier_2`) || p.mastery >= 50 || p.currentTier >= 3) {
        highestTier = 2;
      } else if (valTiers.includes(1) || (unlockedBadges || []).some(b => b.id === `${c.id}_tier_1`) || p.mastery >= 25 || p.currentTier >= 2) {
        highestTier = 1;
      }

      const tierMedals = { 1: '🥉', 2: '🥈', 3: '🥇', 4: '💎' };
      const tierLabels = {
        1: 'Palier 1 validé',
        2: 'Palier 2 validé',
        3: 'Palier 3 validé',
        4: '100% de la notion validé'
      };

      const rankTitle = highestTier > 0 
        ? (engine ? engine.getChapterRankTitle(c, highestTier) : `Palier ${highestTier}`)
        : (engine ? engine.getChapterRankTitle(c, 1) : 'Novice');

      const medal = highestTier > 0 ? tierMedals[highestTier] : '🔒';
      const statusLabel = highestTier > 0 ? tierLabels[highestTier] : 'Objectif : Palier 1';
      const displayTitle = highestTier > 0 ? rankTitle : `Objectif : ${rankTitle}`;

      return `
        <div class="chapter-trophy-card ${highestTier > 0 ? 'unlocked tier-' + highestTier : 'locked'}" 
             onclick="window.MathsApp.startChapterTier('${c.id}', ${highestTier > 0 ? highestTier : 1})"
             title="Clique pour t'entraîner sur ${c.shortTitle || c.title}">
          <div class="chapter-trophy-header">
            <div class="chapter-trophy-title-wrap">
              <span class="chapter-trophy-code" style="color: ${c.color}; border-color: ${c.color}40; background-color: ${c.color}15;">${c.num}</span>
              <strong class="chapter-trophy-name" title="${c.title}">${c.shortTitle || c.title}</strong>
            </div>
            <span class="chapter-trophy-mastery">${p.mastery || 0}%</span>
          </div>

          <div class="chapter-single-rank-banner">
            <span class="rank-single-medal">${medal}</span>
            <div class="rank-single-text">
              <span class="rank-single-status">${statusLabel}</span>
              <strong class="rank-single-title">${displayTitle}</strong>
            </div>
          </div>
        </div>
      `;
    }).join('');
  },

  handleImportProgress() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json,.json';
    input.addEventListener('change', () => {
      const file = input.files && input.files[0];
      if (!file) return;
      file.text().then(text => {
        if (!confirm('Remplacer ta progression actuelle par celle de ce fichier ?')) return;
        if (window.MathsStorage.importFromJson(text)) {
          location.reload();
        } else {
          this.showToast('❌ Ce fichier n\'est pas une sauvegarde valide de L\'Établi des Maths.', 4000);
        }
      });
    });
    input.click();
  },

  handleResetProgress() {
    if (confirm('Attention : toutes tes données, XP et badges seront réinitialisés. Confirmer ?')) {
      window.MathsStorage.resetAll();
      location.reload();
    }
  },
});
