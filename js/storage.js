/**
 * L'Établi des Maths — Gestionnaire de stockage local (localStorage)
 * Sauvegarde la progression de l'élève, ses XP, son niveau, ses badges et son historique.
 */

const STORAGE_KEY = 'maths_3e_progress_v1';

window.MathsStorage = {
  getDefaultData() {
    return {
      version: 2,
      user: {
        name: 'Élève / Étudiant',
        xp: 0,
        level: 1,
        streak: 0,
        bestStreak: 0,
        currentCycle: 'college',
        currentLevel: '3eme',
        lastActive: new Date().toISOString()
      },
      chapters: {}, // { 'N1': { mastery: 0, completed: [], currentTier: 1, history: [] } }
      badges: [],
      theme: 'light',
      soundEnabled: true
    };
  },

  getCycleForLevel(level) {
    if (['6eme', '5eme', '4eme', '3eme'].includes(level)) return 'college';
    if (['2nde', '1ere', 'tale'].includes(level)) return 'lycee';
    if (['L1', 'L2', 'L3', 'capes'].includes(level)) return 'licence';
    return 'college';
  },

  getCurrentCycle() {
    const data = this.load();
    if (data.user && data.user.currentCycle) return data.user.currentCycle;
    return this.getCycleForLevel(this.getCurrentLevel());
  },

  setCurrentCycle(cycle) {
    const data = this.load();
    if (!data.user) data.user = {};
    data.user.currentCycle = cycle;
    this.save(data);
  },

  getCurrentLevel() {
    const data = this.load();
    return (data.user && data.user.currentLevel) ? data.user.currentLevel : '3eme';
  },

  setCurrentLevel(level) {
    const data = this.load();
    if (!data.user) data.user = {};
    data.user.currentLevel = level;
    data.user.currentCycle = this.getCycleForLevel(level);
    this.save(data);
  },

  getLastActiveChapter() {
    const data = this.load();
    if (data.user && data.user.lastActiveChapter) {
      return {
        chapterId: data.user.lastActiveChapter,
        tier: data.user.lastActiveTier || 1
      };
    }
    // Trouver le chapitre le plus actif dans les données
    if (data.chapters) {
      const activeIds = Object.keys(data.chapters).filter(id => {
        const c = data.chapters[id];
        return c && (c.attempts > 0 || c.mastery > 0);
      });
      if (activeIds.length > 0) {
        const lastId = activeIds[activeIds.length - 1];
        return {
          chapterId: lastId,
          tier: data.chapters[lastId].currentTier || 1
        };
      }
    }
    return null;
  },

  setLastActiveChapter(chapterId, tier = 1) {
    if (!chapterId) return;
    const data = this.load();
    if (!data.user) data.user = {};
    data.user.lastActiveChapter = chapterId;
    if (tier) data.user.lastActiveTier = tier;
    this.save(data);
  },

  /** Version du schéma de données : incrémenter et compléter migrate() à chaque évolution. */
  SCHEMA_VERSION: 2,

  getDefaultChapterProgress() {
    return {
      mastery: 0,
      currentTier: 1,
      streak: 0,
      completed: [],
      attempts: 0,
      successes: 0,
      successesByTier: { 1: 0, 2: 0, 3: 0, 4: 0 }
    };
  },

  /**
   * Complète et valide des données (sauvegarde locale ou fichier importé) :
   * un champ manquant, null ou du mauvais type ne doit jamais faire planter l'application.
   */
  normalize(data) {
    const isObj = v => v !== null && typeof v === 'object' && !Array.isArray(v);
    const def = this.getDefaultData();
    if (!isObj(data)) return def;
    const out = Object.assign(def, data);
    out.user = Object.assign(this.getDefaultData().user, isObj(data.user) ? data.user : {});
    out.user.xp = Number.isFinite(out.user.xp) && out.user.xp >= 0 ? out.user.xp : 0;
    out.user.streak = Number.isFinite(out.user.streak) ? out.user.streak : 0;
    out.user.bestStreak = Number.isFinite(out.user.bestStreak) ? out.user.bestStreak : 0;
    out.badges = Array.isArray(data.badges) ? data.badges : [];
    out.chapters = {};
    if (isObj(data.chapters)) {
      Object.keys(data.chapters).forEach(id => {
        const ch = data.chapters[id];
        if (!isObj(ch)) return;
        const merged = Object.assign(this.getDefaultChapterProgress(), ch);
        if (!Array.isArray(merged.completed)) merged.completed = [];
        if (!isObj(merged.successesByTier)) merged.successesByTier = { 1: 0, 2: 0, 3: 0, 4: 0 };
        merged.mastery = Number.isFinite(merged.mastery) ? merged.mastery : 0;
        out.chapters[id] = merged;
      });
    }
    out.user.level = this.getLevelFromXp(out.user.xp).level;
    return this.migrate(out, Number(data.version) || 1);
  },

  migrate(data, fromVersion) {
    if (fromVersion < 2) {
      // v2 : les ids d'exercices générés (uniques, jamais réutilisés) ne sont plus mémorisés
      Object.values(data.chapters).forEach(ch => {
        ch.completed = ch.completed.filter(id => !/-dyn-|-gen-|fallback/.test(String(id)));
      });
    }
    data.version = this.SCHEMA_VERSION;
    return data;
  },

  load() {
    let raw = null;
    try {
      raw = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return this.getDefaultData(); // stockage bloqué (navigation privée stricte…)
    }
    if (!raw) {
      const initial = this.getDefaultData();
      this.save(initial);
      return initial;
    }
    try {
      return this.normalize(JSON.parse(raw));
    } catch (e) {
      // Données illisibles : on garde une copie de secours avant qu'une sauvegarde ne les écrase
      console.warn('Progression illisible, copie de secours conservée :', e);
      try {
        if (!localStorage.getItem(STORAGE_KEY + '_backup')) localStorage.setItem(STORAGE_KEY + '_backup', raw);
      } catch (err) {}
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
      data.chapters[chapterId] = this.getDefaultChapterProgress();
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

  /**
   * Enregistre l'activité quotidienne et met à jour le Daily Streak
   * (série de jours consécutifs où l'élève s'est entraîné)
   */
  checkAndUpdateDailyStreak(data) {
    if (!data.user) data.user = {};
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const todayStr = `${year}-${month}-${day}`;

    const lastPractice = data.user.lastPracticeDate;
    data.user.streak = data.user.streak || 0;
    data.user.bestStreak = data.user.bestStreak || 0;

    if (!lastPractice) {
      data.user.streak = 1;
      data.user.bestStreak = Math.max(data.user.bestStreak, 1);
      data.user.lastPracticeDate = todayStr;
      return { streak: data.user.streak, increased: true, alreadyPracticedToday: false };
    }

    if (lastPractice === todayStr) {
      return { streak: data.user.streak, increased: false, alreadyPracticedToday: true };
    }

    const [ly, lm, ld] = lastPractice.split('-').map(Number);
    const lastDate = new Date(ly, lm - 1, ld);
    const currentDate = new Date(year, now.getMonth(), day);
    const diffMs = currentDate.getTime() - lastDate.getTime();
    const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      data.user.streak += 1;
      data.user.bestStreak = Math.max(data.user.bestStreak, data.user.streak);
      data.user.lastPracticeDate = todayStr;
      return { streak: data.user.streak, increased: true, alreadyPracticedToday: false };
    } else if (diffDays > 1) {
      data.user.streak = 1;
      data.user.bestStreak = Math.max(data.user.bestStreak, 1);
      data.user.lastPracticeDate = todayStr;
      return { streak: data.user.streak, increased: true, reset: true, alreadyPracticedToday: false };
    }

    return { streak: data.user.streak, increased: false, alreadyPracticedToday: true };
  },

  /**
   * Retourne l'état courant du Daily Streak pour l'affichage
   */
  getDailyStreakInfo() {
    const data = this.load();
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const todayStr = `${year}-${month}-${day}`;

    const lastPractice = data.user ? data.user.lastPracticeDate : null;
    const currentStreak = (data.user && data.user.streak) ? data.user.streak : 0;
    const bestStreak = (data.user && data.user.bestStreak) ? data.user.bestStreak : 0;

    let isActiveToday = false;
    let effectiveStreak = currentStreak;

    if (!lastPractice) {
      effectiveStreak = 0;
    } else if (lastPractice === todayStr) {
      isActiveToday = true;
      effectiveStreak = currentStreak;
    } else {
      const [ly, lm, ld] = lastPractice.split('-').map(Number);
      const lastDate = new Date(ly, lm - 1, ld);
      const currentDate = new Date(year, now.getMonth(), day);
      const diffMs = currentDate.getTime() - lastDate.getTime();
      const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        isActiveToday = false;
        effectiveStreak = currentStreak;
      } else if (diffDays > 1) {
        isActiveToday = false;
        effectiveStreak = 0;
      }
    }

    return {
      streak: effectiveStreak,
      bestStreak: Math.max(bestStreak, effectiveStreak),
      isActiveToday,
      lastPracticeDate: lastPractice
    };
  },

  /**
   * Vérifie et débloque les trophées de série de jours (Daily Streak)
   * Jalons : 1 semaine (7j), 2 semaines (14j), 1 mois (30j), 2 mois (60j), 6 mois (180j), 1 an (365j)
   */
  checkStreakBadges(data) {
    if (!data) data = this.load();
    if (!data.user) data.user = {};
    if (!data.badges) data.badges = [];

    const streakVal = Math.max(data.user.bestStreak || 0, data.user.streak || 0);
    const streakMilestones = [
      { id: 'streak_7', days: 7, title: "Flamme de Bronze (1 Semaine)", desc: "S'entraîner 7 jours d'affilée sur L'Établi des Maths", icon: '🥉' },
      { id: 'streak_14', days: 14, title: "Flamme d'Argent (2 Semaines)", desc: "S'entraîner 14 jours consécutifs", icon: '🥈' },
      { id: 'streak_30', days: 30, title: "Flamme d'Or (1 Mois)", desc: "Maintenir sa série pendant 30 jours consécutifs", icon: '🥇' },
      { id: 'streak_60', days: 60, title: "Flamme de Diamant (2 Mois)", desc: "Maintenir sa série pendant 60 jours consécutifs", icon: '💎' },
      { id: 'streak_180', days: 180, title: "Flamme de Rubis (6 Mois)", desc: "Maintenir sa série pendant 6 mois consécutifs", icon: '👑' },
      { id: 'streak_365', days: 365, title: "Flamme Immortelle (1 An)", desc: "Une année complète de régularité mathématique !", icon: '🏆' }
    ];

    const newlyUnlocked = [];
    streakMilestones.forEach(m => {
      if (streakVal >= m.days) {
        if (!data.badges.some(b => b.id === m.id)) {
          data.badges.push({
            id: m.id,
            title: m.title,
            description: m.desc,
            icon: m.icon,
            unlockedAt: new Date().toISOString()
          });
          newlyUnlocked.push({ kind: 'streak', ...m });
        }
      }
    });

    return newlyUnlocked;
  },

  /**
   * Retourne la liste des trophées de régularité avec leur état (débloqué ou progression)
   */
  getStreakMilestones(data = null) {
    if (!data) data = this.load();
    const streakVal = Math.max(data.user ? (data.user.bestStreak || 0) : 0, data.user ? (data.user.streak || 0) : 0);
    const milestones = [
      { id: 'streak_7', days: 7, label: '1 semaine', title: "Flamme de Bronze", desc: "7 jours d'affilée", icon: '🥉' },
      { id: 'streak_14', days: 14, label: '2 semaines', title: "Flamme d'Argent", desc: "14 jours consécutifs", icon: '🥈' },
      { id: 'streak_30', days: 30, label: '1 mois', title: "Flamme d'Or", desc: "30 jours consécutifs", icon: '🥇' },
      { id: 'streak_60', days: 60, label: '2 mois', title: "Flamme de Diamant", desc: "60 jours consécutifs", icon: '💎' },
      { id: 'streak_180', days: 180, label: '6 mois', title: "Flamme de Rubis", desc: "6 mois consécutifs", icon: '👑' },
      { id: 'streak_365', days: 365, label: '1 an', title: "Flamme Immortelle", desc: "1 an de régularité", icon: '🏆' }
    ];

    return milestones.map(m => {
      const isUnlocked = (data.badges || []).some(b => b.id === m.id) || streakVal >= m.days;
      return {
        ...m,
        isUnlocked,
        current: Math.min(streakVal, m.days),
        progressPct: Math.min(100, Math.round((streakVal / m.days) * 100))
      };
    });
  },

  /**
   * Quantité d'XP requise pour franchir un niveau spécifique (du niveau L au niveau L + 1).
   * Courbe progressive et équilibrée inspirée du jeu vidéo :
   * - Niveau 1 -> 2 : 50 XP (5 exercices réussis, succès rapide et encourageant)
   * - Niveau 2 -> 3 : 75 XP (+25 XP)
   * - Niveau 3 -> 4 : 100 XP (+25 XP)
   * - Niveau 4 -> 5 : 125 XP (+25 XP)
   * Formule : 50 + (L - 1) * 25
   */
  getXpNeededForLevel(level) {
    const lvl = Math.max(1, parseInt(level, 10) || 1);
    return 50 + (lvl - 1) * 25;
  },

  /**
   * Calcule le niveau et la décomposition de l'XP à partir de l'XP total cumulé
   */
  getLevelFromXp(totalXp) {
    const xp = Math.max(0, parseInt(totalXp, 10) || 0);
    let currentLevel = 1;
    let accumulatedXp = 0;

    while (true) {
      const needed = this.getXpNeededForLevel(currentLevel);
      if (accumulatedXp + needed <= xp) {
        accumulatedXp += needed;
        currentLevel += 1;
      } else {
        break;
      }
    }

    const xpInLevel = xp - accumulatedXp;
    const xpNeeded = this.getXpNeededForLevel(currentLevel);
    const xpToNext = xpNeeded - xpInLevel;
    const progressPct = Math.min(100, Math.max(0, Math.round((xpInLevel / xpNeeded) * 100)));

    return {
      level: currentLevel,
      nextLevel: currentLevel + 1,
      totalXp: xp,
      xpInLevel,
      xpNeeded,
      xpToNext,
      progressPct
    };
  },

  /**
   * Retourne les informations complètes sur le niveau et l'XP de l'élève
   */
  getLevelProgressInfo() {
    const data = this.load();
    const xp = (data.user && data.user.xp) || 0;
    const progress = this.getLevelFromXp(xp);

    // Titre honorifique selon le niveau
    let rankTitle = "Apprenti de l'Établi";
    if (progress.level >= 30) rankTitle = "Légende des Mathématiques";
    else if (progress.level >= 20) rankTitle = "Grand Maître de l'Établi";
    else if (progress.level >= 15) rankTitle = "Maître Artisan";
    else if (progress.level >= 10) rankTitle = "Artisan Confirmé";
    else if (progress.level >= 5) rankTitle = "Compagnon Géomètre";

    return {
      ...progress,
      rankTitle
    };
  },

  addXp(points) {
    const data = this.load();
    data.user.xp += points;

    // Calcul du niveau selon la courbe progressive de jeu vidéo
    const progress = this.getLevelFromXp(data.user.xp);
    const newLevel = progress.level;
    const oldLevel = data.user.level || 1;
    const leveledUp = newLevel > oldLevel;
    data.user.level = newLevel;
    data.user.lastActive = new Date().toISOString();

    // Mise à jour de la série quotidienne
    this.checkAndUpdateDailyStreak(data);
    const newlyUnlockedStreakBadges = this.checkStreakBadges(data);

    this.save(data);
    return { 
      xp: data.user.xp, 
      level: data.user.level, 
      streak: data.user.streak, 
      newlyUnlockedStreakBadges, 
      leveledUp,
      xpInLevel: progress.xpInLevel,
      xpNeeded: progress.xpNeeded,
      xpToNext: progress.xpToNext
    };
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
    a.download = `etabli-des-maths_progression_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  },
  /** Importe une sauvegarde exportée. Retourne true si le fichier est une progression valide. */
  importFromJson(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      const looksValid = data && typeof data === 'object' && data.user && typeof data.user === 'object' && data.chapters && typeof data.chapters === 'object';
      if (!looksValid) return false;
      this.save(this.normalize(data));
      return true;
    } catch (e) {
      console.error('Import invalide :', e);
      return false;
    }
  },
  resetAll() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
    return this.getDefaultData();
  }
};
