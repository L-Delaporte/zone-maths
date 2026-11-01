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

      <div class="stats-section badge-showcase">
        <h3><span aria-hidden="true">🏅</span> Mes badges</h3>
        <p class="math-p" style="margin-bottom: 1rem; font-size: 0.92rem; color: var(--text-muted);">
          Chaque badge monte de niveau : 🥉 <strong>Bronze</strong> ➔ 🥈 <strong>Argent</strong> ➔ 🥇 <strong>Or</strong> ➔ 💎 <strong>Diamant</strong> ➔ 🌟 <strong>Légende</strong>. Un niveau gagné ne se perd jamais. Touche ☆ pour afficher ton badge préféré à côté de ton niveau.
        </p>
        ${this.renderBadgeShowcaseHtml(data)}
      </div>

      <div class="stats-section">
        <h3><span aria-hidden="true">🔥</span> Trophées de Régularité (Daily Streak)</h3>
        <p class="math-p" style="margin-bottom: 1rem; font-size: 0.92rem; color: var(--text-muted);">
          S'entraîner chaque jour entretient ta flamme et débloque des trophées d'assiduité : 1 semaine, 2 semaines, 1 mois, 2 mois, 6 mois et 1 an de persévérance !
        </p>
        <div class="badges-grid">
          ${this.renderStreakBadgesHtml(data)}
        </div>
      </div>

      <div class="stats-section">
        <h3><span aria-hidden="true">🎖️</span> Rangs & Trophées par Chapitre — ${levelName}</h3>
        <p class="math-p" style="margin-bottom: 1rem; font-size: 0.92rem; color: var(--text-muted);">
          Valide les paliers d'entraînement pour faire évoluer ton titre : 🥉 <strong>Novice</strong> (Palier 1 validé) ➔ 🥈 <strong>Apprenti</strong> (Palier 2 validé) ➔ 🥇 <strong>Chevalier</strong> (Palier 3 validé) ➔ 💎 <strong>Maître</strong> (100% de la notion) ➔ 🌟 <strong>Grand Maître</strong> (de 0 % à 100 % sans erreur ni indice) !
        </p>
        <div class="chapter-trophies-grid">
          ${this.renderChapterTrophiesHtml(levelChapters, data.badges, data.chapters)}
        </div>
      </div>

      <div class="stats-section">
        <h3><span aria-hidden="true">🗺️</span> Maîtrise par Chapitre — Classe de ${levelName} (${levelChapters.length} Thèmes)</h3>
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
                  <span class="mastery-code" style="color: color-mix(in srgb, ${c.color} 40%, var(--text-main)); font-weight:bold;">${c.num}</span>
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
        <button class="btn-secondary" data-click="MathsStorage.exportToJson" title="Télécharger un fichier de sauvegarde de ta progression">💾 Sauvegarder ma progression</button>
        <button class="btn-secondary" data-click="MathsApp.handleImportProgress" title="Restaurer une progression depuis un fichier de sauvegarde">📂 Restaurer une sauvegarde</button>
        <button class="btn-danger" data-click="MathsApp.handleResetProgress">🔄 Réinitialiser ma progression</button>
      </div>
    `;

    container.innerHTML = html;
  },

  /** Niveau d'animation d'un trophée de régularité selon sa durée. */
  streakTierClass(days) {
    return days >= 180 ? 5 : days >= 60 ? 4 : days >= 30 ? 3 : days >= 14 ? 2 : 1;
  },

  /** Vitrine des badges à niveaux (js/badges.js), par famille. */
  renderBadgeShowcaseHtml(data) {
    const B = window.MathsBadges;
    if (!B) return '';
    const lvl = this.getCurrentChapterLevel();
    const fav = data.user && data.user.favoriteBadge;
    const all = B.getShowcase(data).filter(d => d.family !== 'niveau' || d.schoolLevel === lvl);
    const esc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
    const card = d => {
      const lv = d.level;
      const tc = B.tierClass(d, lv);
      const hidden = d.secret && !lv;
      const max = lv >= d.thresholds.length;
      const next = max ? null : d.thresholds[lv];
      const isRank = d.unit === 'rank';
      const cur = Math.min(d.value, next || d.value);
      const pct = max ? 100 : Math.max(0, Math.min(100, Math.round(100 * (isRank ? d.value : cur) / next)));
      const nextLabel = max ? '' : (d.secret ? '' : B.tierLabel(Object.assign({}, d), lv + 1));
      const goal = hidden
        ? `Indice : <em>${esc(d.riddle || '…')}</em>`
        : max ? `✓ ${esc(d.desc(d.thresholds[lv - 1]))}` : `${nextLabel ? `<b>${nextLabel}</b> : ` : ''}${esc(d.desc(next))}`;
      const progress = (max || d.secret) ? '' : `
            <div class="badge-progress" role="progressbar" aria-valuemin="0" aria-valuemax="${next}" aria-valuenow="${cur}" aria-label="Progression vers le niveau suivant">
              <div class="badge-progress-fill" style="width:${pct}%"></div>
            </div>
            <span class="badge-progress-txt">${isRank ? `Chapitre le moins avancé : ${['aucun palier', 'palier 1', 'palier 2', 'palier 3', '100 %', 'Grand Maître'][Math.max(0, Math.min(5, d.value))]}` : `${cur} / ${next}`}</span>`;
      const star = lv > 0 ? `<button type="button" class="badge-fav-btn${fav === d.id ? ' is-fav' : ''}" data-click="MathsApp.setFavoriteBadge" data-args='["${d.id}"]' aria-pressed="${fav === d.id}" title="${fav === d.id ? 'Retirer de l’en-tête' : 'Afficher ce badge à côté de mon niveau'}">${fav === d.id ? '★' : '☆'}</button>` : '';
      return `
          <div class="badge-item level-badge ${lv > 0 ? 'unlocked fx-t' + tc : 'locked'}${d.secret ? ' is-secret' : ''}">
            <span class="badge-emoji fx-medal" aria-hidden="true">${hidden ? '❔' : d.icon}</span>
            <div class="badge-info">
              <div class="badge-head">
                <strong>${hidden ? '???' : esc(d.title)}</strong>
                ${lv > 0 ? `<span class="badge-tier-pill tier-pill-${tc}">${B.tierLabel(d, lv)}${!d.secret && d.thresholds.length > 1 ? ` · ${lv}/${d.thresholds.length}` : ''}</span>` : ''}
                ${star}
              </div>
              <small>${goal}</small>${progress}
            </div>
          </div>`;
    };
    return B.FAMILIES.map(f => {
      const list = all.filter(d => d.family === f.id);
      if (!list.length) return '';
      const got = list.filter(d => d.level > 0).length;
      return `
        <div class="badge-family">
          <h4 class="badge-family-title">${f.title} <span class="badge-family-count">${got} / ${list.length}</span></h4>
          <p class="badge-family-intro">${f.intro}</p>
          <div class="badges-grid">${list.map(card).join('')}</div>
        </div>`;
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
        <div class="badge-item streak-badge ${m.isUnlocked ? 'unlocked fx-t' + this.streakTierClass(m.days) : 'locked'}">
          <span class="badge-emoji fx-medal">${m.icon}</span>
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

      if (highestTier === 4 && (unlockedBadges || []).some(b => b.id === `${c.id}_perfect`)) highestTier = 5;

      const tierMedals = { 1: '🥉', 2: '🥈', 3: '🥇', 4: '💎', 5: '🌟' };
      const tierLabels = {
        1: 'Palier 1 validé',
        2: 'Palier 2 validé',
        3: 'Palier 3 validé',
        4: '100% de la notion validé',
        5: '100 % sans erreur ni indice'
      };
      // Sans-faute en cours (chapitre commencé à 0 % et aucune erreur jusqu'ici)
      const flawlessLine = (p.flawless === true && highestTier < 4)
        ? `<div class="chapter-trophy-flawless" title="Aucune erreur ni indice depuis le début : continue pour décrocher le trophée Grand Maître 🌟">🌟 Sans faute en cours</div>`
        : '';

      const rankTitle = highestTier > 0 
        ? (engine ? engine.getChapterRankTitle(c, highestTier) : `Palier ${highestTier}`)
        : (engine ? engine.getChapterRankTitle(c, 1) : 'Novice');

      const medal = highestTier > 0 ? tierMedals[highestTier] : '🔒';
      const statusLabel = highestTier > 0 ? tierLabels[highestTier] : 'Objectif : Palier 1';
      const displayTitle = highestTier > 0 ? rankTitle : `Objectif : ${rankTitle}`;

      return `
        <div class="chapter-trophy-card ${highestTier > 0 ? 'unlocked tier-' + highestTier + ' fx-t' + highestTier : 'locked'}" 
             data-click="MathsApp.startChapterTier" data-args='["${c.id}", ${highestTier > 0 ? highestTier : 1}]'
             title="Clique pour t'entraîner sur ${c.shortTitle || c.title}">
          <div class="chapter-trophy-header">
            <div class="chapter-trophy-title-wrap">
              <span class="chapter-trophy-code" style="color: color-mix(in srgb, ${c.color} 40%, var(--text-main)); border-color: ${c.color}40; background-color: ${c.color}15;">${c.num}</span>
              <strong class="chapter-trophy-name" title="${c.title}">${c.shortTitle || c.title}</strong>
            </div>
            <span class="chapter-trophy-mastery">${p.mastery || 0}%</span>
          </div>

          <div class="chapter-single-rank-banner">
            ${highestTier === 5 ? '<span class="gm-sparkles" aria-hidden="true"><i>✦</i><i>✧</i><i>✦</i><i>✧</i><i>✦</i></span>' : ''}
            <span class="rank-single-medal">${medal}</span>
            <div class="rank-single-text">
              <span class="rank-single-status">${statusLabel}</span>
              <strong class="rank-single-title">${displayTitle}</strong>
            </div>
          </div>
          ${flawlessLine}
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
