/**
 * L'Établi des Maths — Gestionnaire de stockage local (localStorage)
 * Sauvegarde la progression de l'élève, ses XP, son niveau, ses badges et son historique.
 */

const STORAGE_KEY = 'maths_3e_progress_v1';

window.MathsStorage = {
  FLASHCARDS_KEY: 'maths_flashcards_leitner_v1',
  /** Réglages de l'appareil, conservés par resetAll : ils ne font pas partie de la progression de l'élève. */
  DEVICE_SETTINGS: ['maths_sound_muted', 'etabli_affichage_simple', 'etabli_police_dys', 'etabli_pwa_dismissed', 'etabli_pwa_installed', 'etabli_visits', 'etabli_sheet_options', 'etabli_raccourcis'],
  MAX_IMPORT_LENGTH: 5000000,
  // getLevelFromXp avance niveau par niveau et load() l'appelle : un XP démesuré figerait la page à chaque ouverture.
  MAX_XP: 1e9,

  // Copie en mémoire (JSON) de la progression que le navigateur refuse de conserver ; null quand tout va bien.
  _memory: null,
  // Lecture impossible : écrire écraserait une progression qu'on n'a pas pu lire.
  _writeBlocked: false,
  _warned: false,
  _persistAsked: false,

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
      defis: {}, // Défi de la semaine : { '2026-S44-college': { tries, solved, revealed, solvedAt } }
      badges: [],
      soundEnabled: true
    };
  },

  getCycleForLevel(level) {
    if (['6eme', '5eme', '4eme', '3eme'].includes(level)) return 'college';
    if (['2nde', '1ere', '1tc', '1techno', 'tale'].includes(level)) return 'lycee';
    if (['L1', 'L2', 'L3'].includes(level)) return 'licence';
    if (['capes', 'crpe', 'sante', 'pass', 'veto'].includes(level)) return 'concours';
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

  /** Identifiant (chapitre, badge, exercice, date ISO…) : ne peut porter ni balise ni attribut HTML. */
  isSafeId(v) {
    return typeof v === 'string' && /^[\w.:+-]{1,120}$/.test(v) && !['__proto__', 'constructor', 'prototype'].includes(v);
  },

  /** Copie d'une valeur JSON réduite à des nombres, des booléens et des identifiants. */
  scrub(value, depth = 0) {
    if (typeof value === 'number') return Number.isFinite(value) ? value : undefined;
    if (typeof value === 'boolean' || value === null) return value;
    if (typeof value === 'string') return this.isSafeId(value) ? value : undefined;
    if (typeof value !== 'object' || depth >= 6) return undefined;
    if (Array.isArray(value)) return value.map(v => this.scrub(v, depth + 1)).filter(v => v !== undefined);
    const out = {};
    Object.keys(value).forEach(k => {
      const v = this.isSafeId(k) ? this.scrub(value[k], depth + 1) : undefined;
      if (v !== undefined) out[k] = v;
    });
    return out;
  },

  /**
   * Complète et valide des données (sauvegarde locale ou fichier importé) :
   * un champ manquant, null ou du mauvais type ne doit jamais faire planter l'application.
   * Ces données finissent dans des gabarits HTML et un fichier importé peut avoir été fabriqué :
   * seuls les champs connus sont repris, avec le type attendu. Tout nouveau champ doit être ajouté ici.
   */
  normalize(data) {
    const isObj = v => v !== null && typeof v === 'object' && !Array.isArray(v);
    const isId = v => this.isSafeId(v);
    const isDay = v => typeof v === 'string' && /^\d{4}-\d{1,2}-\d{1,2}$/.test(v);
    const isCount = v => Number.isFinite(v) && v >= 0;
    const isText = v => typeof v === 'string' && v.length <= 300 && !/[<>"`]/.test(v);
    const out = this.getDefaultData();
    if (!isObj(data)) return out;

    if (data.theme === 'dark' || data.theme === 'light') out.theme = data.theme;
    if (typeof data.soundEnabled === 'boolean') out.soundEnabled = data.soundEnabled;

    const u = isObj(data.user) ? data.user : {};
    ['xp', 'streak', 'bestStreak'].forEach(k => { out.user[k] = isCount(u[k]) ? u[k] : 0; });
    if (out.user.xp > this.MAX_XP) out.user.xp = 0;
    ['currentCycle', 'currentLevel', 'lastActive', 'lastActiveChapter', 'favoriteBadge', 'lastExportAt'].forEach(k => { if (isId(u[k])) out.user[k] = u[k]; });
    ['lastExportXp', 'persistAskedAt'].forEach(k => { if (isCount(u[k])) out.user[k] = u[k]; });
    const lastTier = parseInt(u.lastActiveTier, 10);
    if (lastTier >= 1 && lastTier <= 4) out.user.lastActiveTier = lastTier;
    if (isDay(u.lastPracticeDate)) out.user.lastPracticeDate = u.lastPracticeDate;
    out.user.level = this.getLevelFromXp(out.user.xp).level;

    // Le titre et la description d'un badge ne sont jamais affichés depuis la sauvegarde (catalogue : js/badges.js)
    (Array.isArray(data.badges) ? data.badges : []).forEach(b => {
      if (!isObj(b) || !isId(b.id)) return;
      const badge = { id: b.id };
      ['title', 'description', 'icon', 'unlockedAt'].forEach(k => { if (isText(b[k])) badge[k] = b[k]; });
      out.badges.push(badge);
    });
    if (isObj(data.badgeLevels)) {
      const levels = this.scrub(data.badgeLevels);
      out.badgeLevels = {};
      Object.keys(levels).forEach(k => { if (isCount(levels[k])) out.badgeLevels[k] = levels[k]; });
    }
    if (isObj(data.stats)) {
      const st = this.scrub(data.stats);
      ['days', 'earlyDays'].forEach(k => { if (k in st) st[k] = Array.isArray(st[k]) ? st[k].filter(isDay) : []; });
      if (!isObj(st.today) || !Array.isArray(st.today.domains)) delete st.today;
      else st.today.domains = data.stats.today.domains.filter(isText); // noms accentués aux concours (« Nombres et calculs »)
      if (st.lastCourse !== null && !isObj(st.lastCourse)) delete st.lastCourse;
      out.stats = st;
    }

    if (isObj(data.chapters)) {
      Object.keys(data.chapters).forEach(id => {
        if (!isId(id) || !isObj(data.chapters[id])) return;
        const merged = Object.assign(this.getDefaultChapterProgress(), this.scrub(data.chapters[id]));
        if (!Array.isArray(merged.completed)) merged.completed = [];
        if (!isObj(merged.successesByTier)) merged.successesByTier = { 1: 0, 2: 0, 3: 0, 4: 0 };
        merged.mastery = Number.isFinite(merged.mastery) ? merged.mastery : 0;
        const tier = parseInt(merged.currentTier, 10);
        merged.currentTier = tier >= 1 && tier <= 4 ? tier : 1;
        ['streak', 'attempts', 'successes'].forEach(k => { if (!isCount(merged[k])) merged[k] = 0; });
        if ('validatedTiers' in merged) {
          merged.validatedTiers = Array.isArray(merged.validatedTiers) ? merged.validatedTiers.map(Number).filter(t => t >= 1 && t <= 4) : [];
        }
        ['tierWindows', 'tierAnswered', 'tierLastAt', 'tierMarks'].forEach(k => { if (k in merged && !isObj(merged[k])) delete merged[k]; });
        out.chapters[id] = merged;
      });
    }

    if (isObj(data.defis)) {
      Object.keys(data.defis).forEach(k => {
        const d = data.defis[k];
        if (!/^\d{4}-S\d{1,2}-[a-z]+$/.test(k) || !isObj(d)) return;
        out.defis[k] = { tries: Math.max(0, parseInt(d.tries, 10) || 0), solved: !!d.solved, revealed: !!d.revealed };
        if (isId(d.solvedAt)) out.defis[k].solvedAt = d.solvedAt;
      });
    }
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
    if (this._memory !== null) return this.normalize(JSON.parse(this._memory));
    let raw = null;
    try {
      raw = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      // Stockage bloqué (navigation privée stricte…) : la séance continue en mémoire
      this._writeBlocked = true;
      const initial = this.getDefaultData();
      this._memory = JSON.stringify(initial);
      return initial;
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
      } catch (err) {
        this._writeBlocked = true; // sans copie de secours, on n'écrase pas l'original
      }
      return this.getDefaultData();
    }
  },

  /** Enregistre la progression ; false si elle ne vit plus qu'en mémoire (stockage plein ou bloqué). */
  save(data) {
    const json = JSON.stringify(data);
    if (!this._writeBlocked) {
      try {
        localStorage.setItem(STORAGE_KEY, json);
        this._memory = null;
        return true;
      } catch (e) {
        console.warn('Erreur lors de la sauvegarde dans localStorage:', e);
      }
    }
    this._memory = json;
    if (data && data.user && data.user.xp > 0) this._warnOnce();
    return false;
  },

  /** Vrai si la progression en cours ne survivra pas à la fermeture de la page. */
  isSavingBlocked() {
    return this._memory !== null;
  },

  /** Prévient l'élève une seule fois par visite, dès qu'il y a quelque chose à perdre. */
  _warnOnce() {
    if (this._warned || typeof document === 'undefined') return;
    this._warned = true;
    const show = () => { if (window.MathsApp && window.MathsApp.showStorageWarning) window.MathsApp.showStorageWarning(); };
    if (document.readyState === 'complete') show();
    else window.addEventListener('load', show, { once: true });
  },

  /**
   * Demande au navigateur de ne pas effacer les données du site (Safari efface celles d'un site non
   * visité pendant 7 jours). Pas avant une vraie progression : Firefox affiche une question à l'élève.
   */
  requestPersistence(data) {
    const storage = typeof navigator !== 'undefined' && navigator.storage;
    if (this._persistAsked || !storage || !storage.persist || data.user.xp < 50) return;
    this._persistAsked = true;
    if (Date.now() - (data.user.persistAskedAt || 0) < 30 * 864e5) return;
    data.user.persistAskedAt = Date.now();
    storage.persisted().then(done => done || storage.persist()).catch(() => {});
  },

  /** État de la sauvegarde par fichier ; rappel dû si la progression a de la valeur et n'est plus couverte. */
  getBackupStatus() {
    const { user } = this.load();
    const blocked = this.isSavingBlocked();
    const last = Date.parse(user.lastExportAt) || 0;
    const recent = last && Date.now() - last < 30 * 864e5;
    const worthSaving = last ? user.xp > (user.lastExportXp || 0) : (user.xp >= 100 || user.streak >= 7);
    return { lastExportAt: last || null, blocked, due: (blocked && user.xp > 0) || (worthSaving && !recent) };
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

  /** Défi de la semaine : état d'un défi (clé « 2026-S44-college »). */
  getDefiProgress(key) {
    const st = (this.load().defis || {})[key];
    return Object.assign({ tries: 0, solved: false, revealed: false }, st || {});
  },

  updateDefiProgress(key, updateFn) {
    const data = this.load();
    if (!data.defis) data.defis = {};
    const st = Object.assign({ tries: 0, solved: false, revealed: false }, data.defis[key] || {});
    updateFn(st);
    data.defis[key] = st;
    this.save(data);
    return st;
  },

  countSolvedDefis() {
    const defis = this.load().defis || {};
    return Object.keys(defis).filter(k => defis[k] && defis[k].solved).length;
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
    this.requestPersistence(data);

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

  /** Boîtes de Leitner à joindre à la sauvegarde (null s'il n'y en a pas). */
  readFlashcards() {
    let cards = null;
    try {
      cards = JSON.parse(localStorage.getItem(this.FLASHCARDS_KEY));
    } catch (e) { /* contenu absent ou illisible : cards reste à null */ }
    const live = window.MathsFlashcards && window.MathsFlashcards.leitnerData;
    // Stockage plein : la version enregistrée est périmée, seule la mémoire est à jour.
    if (live && Object.keys(live).length && (!cards || this.isSavingBlocked())) cards = live;
    return cards && Object.keys(cards).length ? cards : null;
  },

  exportToJson() {
    const data = this.load();
    data.user.lastExportAt = new Date().toISOString();
    data.user.lastExportXp = data.user.xp;
    this.save(data);
    const flashcards = this.readFlashcards();
    const blob = new Blob([JSON.stringify(flashcards ? Object.assign({}, data, { flashcards }) : data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `etabli-des-maths_progression_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    if (window.MathsApp && window.MathsApp.onProgressExported) window.MathsApp.onProgressExported();
  },

  /** Restaure les boîtes de Leitner d'une sauvegarde. */
  importFlashcards(cards) {
    const clean = {};
    Object.entries(this.scrub(cards)).forEach(([id, c]) => {
      if (c && Number.isInteger(c.box) && c.box >= 1 && c.box <= 5) clean[id] = c;
    });
    if (window.MathsFlashcards) window.MathsFlashcards.leitnerData = clean;
    try {
      localStorage.setItem(this.FLASHCARDS_KEY, JSON.stringify(clean));
    } catch (e) {
      console.warn('Boîtes de flashcards non restaurées :', e);
    }
  },

  /** Importe une sauvegarde exportée. Retourne true si le fichier est une progression valide. */
  importFromJson(jsonString) {
    const isObj = v => v !== null && typeof v === 'object' && !Array.isArray(v);
    try {
      if (typeof jsonString !== 'string' || jsonString.length > this.MAX_IMPORT_LENGTH) return false;
      const data = JSON.parse(jsonString);
      if (!isObj(data) || !isObj(data.user) || !isObj(data.chapters)) return false;
      const clean = this.normalize(data);
      delete clean.user.persistAskedAt; // propre à l'appareil d'origine : ne doit pas retarder la demande sur celui-ci
      this.save(clean);
      if (isObj(data.flashcards)) this.importFlashcards(data.flashcards);
      return true;
    } catch (e) {
      console.error('Import invalide :', e);
      return false;
    }
  },

  /** Efface tout ce qui concerne l'élève sur cet appareil (ordinateur partagé), sauf les réglages de l'appareil. */
  resetAll() {
    this._memory = null;
    try {
      localStorage.removeItem(STORAGE_KEY);
      for (let i = localStorage.length - 1; i >= 0; i--) {
        const key = localStorage.key(i);
        if (/^(maths|etabli)_/.test(key) && !this.DEVICE_SETTINGS.includes(key)) localStorage.removeItem(key);
      }
    } catch (e) { /* stockage indisponible : il n'y a rien à effacer */ }
    return this.getDefaultData();
  }
};
