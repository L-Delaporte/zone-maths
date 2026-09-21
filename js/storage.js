/**
 * Zone-Maths — Gestionnaire de stockage local (localStorage)
 * Sauvegarde la progression de l'élève, ses XP, son niveau, ses badges et son historique.
 */

const STORAGE_KEY = 'maths_3e_progress_v1';

window.MathsStorage = {
  getDefaultData() {
    return {
      version: 1,
      user: {
        name: 'Élève Cycle 4',
        xp: 0,
        level: 1,
        streak: 0,
        bestStreak: 0,
        currentLevel: '3eme',
        lastActive: new Date().toISOString()
      },
      chapters: {}, // { 'N1': { mastery: 0, completed: [], currentTier: 1, history: [] } }
      badges: [],
      theme: 'light',
      soundEnabled: true
    };
  },

  getCurrentLevel() {
    const data = this.load();
    return (data.user && data.user.currentLevel) ? data.user.currentLevel : '3eme';
  },

  setCurrentLevel(level) {
    const data = this.load();
    if (!data.user) data.user = {};
    data.user.currentLevel = level;
    this.save(data);
  },

  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        const initial = this.getDefaultData();
        this.save(initial);
        return initial;
      }
      const data = JSON.parse(raw);
      return Object.assign(this.getDefaultData(), data);
    } catch (e) {
      console.warn('Erreur lors du chargement de localStorage:', e);
      return this.getDefaultData();
    }
  },

  save(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('Erreur lors de la sauvegarde dans localStorage:', e);
    }
  },

  getChapterProgress(chapterId) {
    const data = this.load();
    if (!data.chapters[chapterId]) {
      data.chapters[chapterId] = {
        mastery: 0,
        currentTier: 1,
        streak: 0,
        completed: [],
        attempts: 0,
        successes: 0,
        successesByTier: { 1: 0, 2: 0, 3: 0, 4: 0 }
      };
      this.save(data);
    } else if (!data.chapters[chapterId].successesByTier) {
      data.chapters[chapterId].successesByTier = { 1: 0, 2: 0, 3: 0, 4: 0 };
      this.save(data);
    }
    return data.chapters[chapterId];
  },

  updateChapterProgress(chapterId, updateFn) {
    const data = this.load();
    if (!data.chapters[chapterId]) {
      data.chapters[chapterId] = {
        mastery: 0,
        currentTier: 1,
        streak: 0,
        completed: [],
        attempts: 0,
        successes: 0,
        successesByTier: { 1: 0, 2: 0, 3: 0, 4: 0 }
      };
    } else if (!data.chapters[chapterId].successesByTier) {
      data.chapters[chapterId].successesByTier = { 1: 0, 2: 0, 3: 0, 4: 0 };
    }
    data.chapters[chapterId] = updateFn(data.chapters[chapterId]);
    this.save(data);
    return data.chapters[chapterId];
  },

  resetChapterProgress(chapterId) {
    const data = this.load();
    data.chapters[chapterId] = {
      mastery: 0,
      currentTier: 1,
      streak: 0,
      mistakeStreak: 0,
      completed: [],
      attempts: 0,
      successes: 0,
      successesByTier: { 1: 0, 2: 0, 3: 0, 4: 0 }
    };
    this.save(data);
    return data.chapters[chapterId];
  },

  resetAllMastery() {
    const data = this.load();
    const chapterKeys = Object.keys(data.chapters || {});
    // Reset all existing tracked chapters
    chapterKeys.forEach(chId => {
      data.chapters[chId] = {
        mastery: 0,
        currentTier: 1,
        streak: 0,
        mistakeStreak: 0,
        completed: [],
        attempts: 0,
        successes: 0,
        successesByTier: { 1: 0, 2: 0, 3: 0, 4: 0 }
      };
    });
    // Ensure all 18 chapters are initialized to 0
    const allChaps = (window.MATHS_CHAPTERS || []).map(c => c.id);
    allChaps.forEach(chId => {
      data.chapters[chId] = {
        mastery: 0,
        currentTier: 1,
        streak: 0,
        mistakeStreak: 0,
        completed: [],
        attempts: 0,
        successes: 0,
        successesByTier: { 1: 0, 2: 0, 3: 0, 4: 0 }
      };
    });
    this.save(data);
    return data;
  },

  addXp(points) {
    const data = this.load();
    data.user.xp += points;
    // Calcul du niveau : 100 XP par niveau
    const newLevel = Math.floor(data.user.xp / 100) + 1;
    const leveledUp = newLevel > data.user.level;
    data.user.level = newLevel;
    data.user.lastActive = new Date().toISOString();
    this.save(data);
    return { xp: data.user.xp, level: data.user.level, leveledUp };
  },

  unlockBadge(badgeId, badgeTitle, badgeDesc, badgeIcon = 'award') {
    const data = this.load();
    if (!data.badges.some(b => b.id === badgeId)) {
      data.badges.push({
        id: badgeId,
        title: badgeTitle,
        description: badgeDesc,
        icon: badgeIcon,
        unlockedAt: new Date().toISOString()
      });
      this.save(data);
      return true; // nouveau badge
    }
    return false;
  },

  exportToJson() {
    const data = this.load();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `zone-maths_passeport_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  },

  importFromJson(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      if (data && data.version) {
        this.save(data);
        return true;
      }
      return false;
    } catch (e) {
      console.error('Import invalide :', e);
      return false;
    }
  },

  resetAll() {
    localStorage.removeItem(STORAGE_KEY);
    return this.getDefaultData();
  }
};
