#!/usr/bin/env node
/**
 * Progression locale (js/storage.js) : un fichier importé ne peut injecter aucun HTML, une progression
 * valide ne perd rien, le site continue si le stockage est plein ou bloqué, l'effacement est complet.
 * Usage : node scripts/tests/test_audit_storage.js
 */
const fs = require('fs');
const path = require('path');
const { isDeepStrictEqual } = require('util');

const ROOT = path.resolve(__dirname, '..', '..');
const KEY = 'maths_3e_progress_v1';
const CARDS_KEY = 'maths_flashcards_leitner_v1';

// --- Environnement de navigateur minimal ---
const store = new Map();
const faults = { read: false, write: false };
global.localStorage = {
  getItem: k => { if (faults.read) throw new Error('SecurityError'); return store.has(k) ? store.get(k) : null; },
  setItem: (k, v) => { if (faults.write) throw new Error('QuotaExceededError'); store.set(k, String(v)); },
  removeItem: k => { store.delete(k); },
  key: i => [...store.keys()][i] || null,
  get length() { return store.size; }
};
const makeEl = () => ({
  innerHTML: '', hidden: false, style: {}, className: '',
  setAttribute() {}, addEventListener() {}, appendChild() {}, remove() {}, focus() {}, click() {}, scrollIntoView() {},
  querySelector: () => makeEl(), querySelectorAll: () => []
});
const nodes = { 'home-defi': makeEl(), 'stats-content-container': makeEl() };
global.document = { readyState: 'complete', getElementById: id => nodes[id] || null, createElement: makeEl, body: makeEl() };
global.window = { MathsApp: {}, addEventListener() {} };
global.location = { search: '', reload() { reloads++; } };
let reloads = 0;
let exported = null;
global.Blob = class { constructor(parts) { exported = parts.join(''); } };
URL.createObjectURL = () => 'blob:test';
URL.revokeObjectURL = () => {};
const storageStub = { calls: 0, alreadyPersisted: false, persist() { this.calls++; return Promise.resolve(true); }, persisted() { return Promise.resolve(this.alreadyPersisted); } };
Object.defineProperty(global, 'navigator', { value: { storage: storageStub }, configurable: true });
console.warn = () => {};
console.error = (orig => (...a) => { if (!String(a[0]).startsWith('Import invalide')) orig(...a); })(console.error);

// Appartenance chapitre/niveau (window.MathsChapterLevels), comme dans la page
require(path.join(ROOT, 'js/data/chapters.js'));
require(path.join(ROOT, 'js/storage.js'));
require(path.join(ROOT, 'js/badges.js'));
require(path.join(ROOT, 'js/app/defi.js'));
require(path.join(ROOT, 'js/app/stats.js'));
const S = window.MathsStorage;
const Badges = window.MathsBadges;
const App = window.MathsApp;

let toasts = [];
let warnings = 0;
const realWarning = App.showStorageWarning;
Object.assign(App, {
  showStorageWarning() { warnings++; return realWarning.call(this); },
  showToast(html) { toasts.push(html); },
  escapeHtml: str => String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])),
  updateHeaderProfile() {},
  getLevelName: () => '3e',
  getCurrentChapterLevel: () => '3eme',
  currentLevel: '3eme',
  currentTab: 'home'
});
window.MATHS_CHAPTERS = [{ id: 'CH1', num: 'A', title: 'Chapitre', color: '#123456', level: '3eme', domain: 'nombres' }];
window.MATHS_DEFIS = [];
window.MATHS_DEFIS_UTILS = {
  CYCLES: ['college', 'lycee', 'superieur'],
  CYCLE_LABELS: { college: 'Collège', lycee: 'Lycée', superieur: 'Supérieur' },
  isoWeek: () => ({ year: 2026, week: 45 }),
  parseWeekKey: () => null,
  weekKey: (y, w) => `${y}-S${w}`,
  pick: () => ({ title: 'T', level: '5e', theme: 'X', statement: 'S', hint: 'H', solution: 'Sol', answer: '1', format: 'number' })
};

let failures = 0;
const check = (label, actual, expected) => {
  if (!isDeepStrictEqual(actual, expected)) {
    failures++;
    console.error(`✖ ${label} : obtenu ${JSON.stringify(actual)}, attendu ${JSON.stringify(expected)}`);
  }
};
const clearAll = () => {
  store.clear();
  faults.read = faults.write = false;
  S._memory = null;
  S._writeBlocked = false;
  S._warned = false;
  S._persistAsked = false;
  warnings = 0;
  toasts = [];
  exported = null;
  storageStub.calls = 0;
  storageStub.alreadyPersisted = false;
};
const stored = () => JSON.parse(store.get(KEY));
const renderDefi = () => { nodes['home-defi'].innerHTML = ''; App._defiCtx = null; App.renderDefiCard(); return nodes['home-defi'].innerHTML; };
const renderStats = () => { App.renderStatsView(); return nodes['stats-content-container'].innerHTML; };

// --- 1. Fichier piégé (attaque rejouée par l'audit, puis variantes) ---
const INJ = '<b id="inj-defi">INJ</b><a href="https://exemple-malveillant.test/">CLIQUE ICI</a><button data-click="MathsStorage.resetAll">Gadget</button>';
const META = '<meta http-equiv="refresh" content="0;url=https://exemple-malveillant.test/">';
const STYLE = 'x" style="position:fixed;inset:0" data-click="MathsStorage.resetAll';
const trapped = {
  theme: `dark${INJ}`,
  soundEnabled: INJ,
  extra: INJ,
  user: {
    name: INJ, xp: META, level: INJ, streak: INJ, bestStreak: INJ, currentCycle: INJ, currentLevel: META, lastActive: INJ,
    lastActiveChapter: INJ, lastActiveTier: INJ, favoriteBadge: STYLE, lastPracticeDate: INJ, lastExportAt: INJ, lastExportXp: INJ, unknownField: INJ
  },
  badges: [
    { id: 'tier_4_unlocked', title: INJ, description: META, icon: INJ, unlockedAt: INJ, extra: INJ },
    { id: INJ, title: 'x' },
    INJ,
    null
  ],
  badgeLevels: { sans_filet: INJ, [INJ]: 3, serie_parfaite: 2 },
  stats: {
    tenacity: INJ, days: [INJ, '2026-11-01'], earlyDays: INJ, lastCourse: INJ, secrets: { [INJ]: 'x', rebond: META },
    today: { date: INJ, domains: [INJ, 'nombres'] }, unknown: INJ
  },
  chapters: {
    [INJ]: { mastery: 10 },
    CH1: {
      mastery: INJ, currentTier: INJ, streak: INJ, attempts: INJ, successes: INJ, completed: [INJ, 'CH1-ex1'], successesByTier: INJ,
      validatedTiers: [INJ, 1, 9], tierWindows: INJ, tierMarks: { 1: [INJ, 'g'] }, tierAnswered: INJ, tierLastAt: INJ, unknown: INJ
    },
    CH2: INJ,
    __proto__x: INJ
  },
  defis: {
    '2026-S45-college': { tries: INJ, solved: INJ, revealed: 0, solvedAt: INJ, extra: INJ },
    [`2026-S45-${INJ}`]: { tries: 1 },
    '2026-S44-college': { tries: META }
  },
  flashcards: { [INJ]: { box: 1 }, 'carte-1': { box: INJ }, 'carte-2': { box: 9 }, 'carte-3': { box: 2, note: INJ } }
};
clearAll();
store.set(KEY, JSON.stringify({ user: { xp: 500 }, chapters: {} }));
check('Fichier piégé : accepté comme fichier de progression', S.importFromJson(JSON.stringify(trapped)), true);
['<', '>', 'exemple-malveillant', 'http-equiv', 'resetAll', 'INJ'].forEach(motif => {
  check(`Fichier piégé : rien de « ${motif} » dans le stockage`, store.get(KEY).includes(motif), false);
  check(`Fichier piégé : rien de « ${motif} » dans les flashcards`, store.get(CARDS_KEY).includes(motif), false);
});
const afterTrap = stored();
check('Fichier piégé : XP remis à un nombre', afterTrap.user.xp, 0);
check('Fichier piégé : palier remis à un nombre', afterTrap.chapters.CH1.currentTier, 1);
check('Fichier piégé : maîtrise remise à un nombre', afterTrap.chapters.CH1.mastery, 0);
check('Fichier piégé : palier validé incohérent retiré', afterTrap.chapters.CH1.validatedTiers, [1]);
check('Fichier piégé : essais du défi réduits à un nombre', afterTrap.defis['2026-S45-college'].tries, 0);
check('Fichier piégé : champ inconnu retiré', 'extra' in afterTrap, false);
check('Fichier piégé : badge sans texte piégé', afterTrap.badges, [{ id: 'tier_4_unlocked' }]);
check('Fichier piégé : ce qui est valide reste', afterTrap.chapters.CH1.completed, ['CH1-ex1']);
check('Fichier piégé : flashcard valide conservée sans sa note', JSON.parse(store.get(CARDS_KEY)), { 'carte-3': { box: 2 } });

// __proto__ écrit à la main : JSON.parse en fait une vraie clé
clearAll();
S.importFromJson('{"user":{"xp":5},"chapters":{"__proto__":{"mastery":99},"CH1":{"__proto__":{"pollue":1},"mastery":3}},"defis":{"__proto__":{"tries":1}},"badgeLevels":{"__proto__":{"x":1}}}');
check('__proto__ : pas de pollution', {}.pollue === undefined && {}.mastery === undefined && {}.tries === undefined, true);
check('__proto__ : pas de faux chapitre', Object.keys(stored().chapters), ['CH1']);

// Données déjà empoisonnées dans le navigateur d'un élève avant le correctif : load() les nettoie aussi
clearAll();
store.set(KEY, JSON.stringify(trapped));
check('Stockage déjà empoisonné : rien à la relecture', JSON.stringify(S.load()).includes('exemple-malveillant'), false);

// --- 2. Rendu : même si des valeurs passaient, rien n'est interprété ---
const assertClean = (label, html) => {
  ['<b id', 'exemple-malveillant', 'http-equiv', 'MathsStorage.resetAll', 'position:fixed'].forEach(motif => check(`${label} : pas de « ${motif} »`, html.includes(motif), false));
};
clearAll();
S.importFromJson(JSON.stringify(trapped));
assertClean('Accueil après import piégé', renderDefi());
assertClean('Bilan après import piégé', renderStats());

const realGetDefi = S.getDefiProgress;
S.getDefiProgress = () => ({ tries: INJ, solved: false, revealed: false });
const defiHtml = renderDefi();
S.getDefiProgress = realGetDefi;
assertClean('Défi avec essais piégés en entrée du rendu', defiHtml);

const realShowcase = Badges.getShowcase;
Badges.getShowcase = () => [{ id: 'b', family: Badges.FAMILIES[0].id, title: `<b id="x">${INJ}`, desc: () => `'"${INJ}`, thresholds: [5], level: 0, value: 0, icon: 'x' }];
const showcase = App.renderBadgeShowcaseHtml(S.load());
Badges.getShowcase = realShowcase;
assertClean('Vitrine des badges', showcase);

// --- 3. Fichiers refusés : la progression en place reste intacte ---
clearAll();
store.set(KEY, JSON.stringify({ user: { xp: 321 }, chapters: {} }));
const before = store.get(KEY);
[
  ['pas du JSON', 'ceci n\'est pas une sauvegarde'],
  ['tableau', '[1,2]'],
  ['null', 'null'],
  ['sans user', '{"chapters":{}}'],
  ['sans chapters', '{"user":{}}'],
  ['user tableau', '{"user":[],"chapters":{}}'],
  ['chapters tableau', '{"user":{},"chapters":[]}'],
  ['trop long', `{"user":{},"chapters":{},"x":"${'a'.repeat(S.MAX_IMPORT_LENGTH)}"}`]
].forEach(([label, text]) => {
  check(`Fichier refusé (${label})`, S.importFromJson(text), false);
  check(`Fichier refusé (${label}) : progression intacte`, store.get(KEY), before);
});
check('Fichier refusé (pas une chaîne)', S.importFromJson(undefined), false);

// --- 4. Progressions réelles : aucune perte ---
const legit = {
  version: 2,
  user: {
    name: 'Élève / Étudiant', xp: 1234, level: 9, streak: 12, bestStreak: 30, currentCycle: 'concours', currentLevel: 'crpe',
    lastActive: '2026-11-07T18:01:02.003Z', lastActiveChapter: 'CRPE-N1', lastActiveTier: 3, favoriteBadge: 'sans_filet',
    lastPracticeDate: '2026-11-07', lastExportAt: '2026-10-01T08:00:00.000Z', lastExportXp: 900, persistAskedAt: 1790000000000
  },
  chapters: {
    '6N1': {
      mastery: 62.5, currentTier: 3, streak: 4, completed: ['6N1-ex1', '6N1-ex2'], attempts: 40, successes: 33,
      successesByTier: { 1: 8, 2: 8, 3: 2, 4: 0 }, validatedTiers: [1, 2], tierModel: 2, flawless: false, mistakeStreak: 1,
      lastPracticedAt: 1790000000000, tierWindows: { 1: [1, 1, 0.5], 2: [1], 3: [], 4: [] }, tierAnswered: { 1: 12, 2: 9, 3: 2, 4: 0 },
      tierLastAt: { 1: 1790000000000 }, tierMarks: { 1: ['g', 'h', 'r'], 2: ['g'], 3: [], 4: [] }
    }
  },
  defis: { '2026-S44-college': { tries: 2, solved: true, revealed: false, solvedAt: '2026-10-27T10:00:00.000Z' } },
  badges: [{ id: 'CRPE-N1_tier_4', title: 'Maître des nombres', description: "Tout réussi à 100 % : c'est gagné !", icon: 'award', unlockedAt: '2026-10-20T10:00:00.000Z' }],
  badgeLevels: { sans_filet: 2, theme_5eme_nombres: 1 },
  stats: {
    tenacity: 3, relecture: 1, comebacks: 0, firstTryNoHint: 40, perfectRun: 2, perfectRunBest: 11, impeccable: 1, rituels: 5, paper: 2, firstTryFails: 0,
    days: ['2026-11-06', '2026-11-07'], earlyDays: ['2026-11-07'], lastCourse: { id: '6N1', at: 1790000000000 },
    today: { date: '2026-11-08', validated: 1, correct: 3, domains: ['Nombres et calculs', "Tests d'hypothèse", 'nombres'] },
    secrets: { rebond: '2026-11-01T10:00:00.000Z', polyvalent: '2026-11-02T10:00:00.000Z' }
  },
  theme: 'dark',
  soundEnabled: false
};
const expectLegit = data => check('Progression valide : aucun champ perdu', JSON.parse(JSON.stringify(data)), legit);
clearAll();
store.set(KEY, JSON.stringify(legit));
expectLegit(S.load());
clearAll();
check('Sauvegarde valide : acceptée', S.importFromJson(JSON.stringify(legit)), true);
expectLegit({ ...stored(), user: { ...stored().user, persistAskedAt: legit.user.persistAskedAt } }); // seul champ propre à l'appareil

// Export puis import : même progression, à la date de sauvegarde près
clearAll();
store.set(KEY, JSON.stringify(legit));
store.set(CARDS_KEY, JSON.stringify({ 'fc-1': { box: 3, nextDue: 1790000000000 } }));
S.exportToJson();
const roundTrip = JSON.parse(exported);
check('Export : flashcards jointes', roundTrip.flashcards, { 'fc-1': { box: 3, nextDue: 1790000000000 } });
clearAll();
S.importFromJson(JSON.stringify(roundTrip));
check('Aller-retour : XP', stored().user.xp, 1234);
check('Aller-retour : chapitres', stored().chapters, legit.chapters);
check('Aller-retour : flashcards restaurées', JSON.parse(store.get(CARDS_KEY)), { 'fc-1': { box: 3, nextDue: 1790000000000 } });

// Ancien fichier de sauvegarde (avant défis, stats, flashcards, version)
clearAll();
store.set(CARDS_KEY, JSON.stringify({ 'fc-1': { box: 4 } }));
check('Ancien fichier : accepté', S.importFromJson(JSON.stringify({
  user: { xp: 120, level: 3, streak: 2 },
  chapters: { N1: { mastery: 50, currentTier: '2', completed: ['N1-ex1', 'N1-dyn-12'], attempts: 3 } },
  badges: [{ id: 'tier_4_unlocked', title: 'Maître', unlockedAt: '2026-01-01T00:00:00.000Z' }]
})), true);
const old = stored();
check('Ancien fichier : XP', old.user.xp, 120);
check('Ancien fichier : palier en chaîne repris', old.chapters.N1.currentTier, 2);
check('Ancien fichier : migration des ids générés', old.chapters.N1.completed, ['N1-ex1']);
check('Ancien fichier : valeurs par défaut du chapitre', old.chapters.N1.streak, 0);
check('Ancien fichier : badge conservé', old.badges.map(b => b.id), ['tier_4_unlocked']);
check('Ancien fichier : defis créés', old.defis, {});
check('Ancien fichier : flashcards en place non touchées', JSON.parse(store.get(CARDS_KEY)), { 'fc-1': { box: 4 } });

// Parcours réel : les domaines accentués des concours comptent toujours pour le badge secret
clearAll();
['Nombres et calculs', 'Espace et géométrie', 'Grandeurs et mesures'].forEach(domain => {
  Badges.recordAnswer({ chapterId: 'CRPE-N1', domain, isCorrect: true, firstSubmission: true, hintsUsed: 0, mistakesBefore: 0, newlyValidated: [] });
});
check('Domaines accentués conservés', S.load().stats.today.domains.length, 3);
check('Badge polyvalent atteint avec 3 domaines accentués', !!S.load().stats.secrets.polyvalent, true);

// Garde-fou : un nouveau champ écrit dans la progression doit être ajouté à normalize()
const knownUser = new Set(['xp', 'level', 'streak', 'bestStreak', 'currentCycle', 'currentLevel', 'lastActive', 'lastActiveChapter', 'lastActiveTier', 'favoriteBadge', 'lastPracticeDate', 'lastExportAt', 'lastExportXp', 'persistAskedAt']);
const knownRoot = new Set(['user', 'chapters', 'defis', 'badges', 'badgeLevels', 'stats', 'theme', 'soundEnabled', 'version']);
const sources = ['js/storage.js', 'js/badges.js', 'js/app.js', 'js/app/stats.js', 'js/app/home.js', 'js/app/training.js', 'js/adaptiveEngine.js'];
sources.forEach(rel => {
  const src = fs.readFileSync(path.join(ROOT, rel), 'utf8');
  for (const m of src.matchAll(/\bdata\.user\.(\w+)\s*=(?!=)/g)) check(`Champ user.${m[1]} (${rel}) repris par normalize()`, knownUser.has(m[1]), true);
  for (const m of src.matchAll(/\bdata\.(\w+)\s*=(?!=)/g)) check(`Champ ${m[1]} (${rel}) repris par normalize()`, knownRoot.has(m[1]), true);
});

// --- 5. Stockage plein ou bloqué : la séance continue, rien n'est écrasé ---
clearAll();
faults.write = true;
S.addXp(10);
S.addXp(10);
S.updateChapterProgress('6N1', p => { p.attempts = 3; p.mastery = 12; return p; });
check('Quota plein : XP qui progresse', S.load().user.xp, 20);
check('Quota plein : chapitre retenu', S.load().chapters['6N1'].attempts, 3);
check('Quota plein : signalé', S.isSavingBlocked(), true);
check('Quota plein : prévenu une seule fois', warnings, 1);
S.exportToJson();
check('Quota plein : export depuis la mémoire', JSON.parse(exported).user.xp, 20);
faults.write = false;
S.addXp(5);
check('Place revenue : retour au stockage', S.isSavingBlocked(), false);
check('Place revenue : rien de perdu', stored().user.xp, 25);
check('Place revenue : chapitre écrit', stored().chapters['6N1'].attempts, 3);

clearAll();
store.set(KEY, JSON.stringify({ user: { xp: 777 }, chapters: {} }));
const original = store.get(KEY);
faults.read = true;
faults.write = false;
S.load();
S.addXp(10);
check('Lecture bloquée : XP de la séance', S.load().user.xp, 10);
check('Lecture bloquée : signalé', S.isSavingBlocked(), true);
check('Lecture bloquée : pas d\'écrasement de la progression', store.get(KEY), original);

clearAll();
store.set(KEY, '{pas du json');
check('Données illisibles : valeurs par défaut', S.load().user.xp, 0);
check('Données illisibles : copie de secours', store.get(`${KEY}_backup`), '{pas du json');

clearAll();
store.set(KEY, '{pas du json');
faults.write = true;
S.load();
faults.write = false;
S.addXp(10);
check('Copie de secours impossible : original préservé', store.get(KEY), '{pas du json');

clearAll();
check('Aucune progression : pas d\'avertissement', (faults.write = true, S.load().user.xp), 0);
check('Aucune progression : pas d\'avertissement affiché', warnings, 0);
check('Aucune progression : import fichier valide en mémoire', S.importFromJson(JSON.stringify(legit)), true);
check('Import en mémoire : visible pendant la visite', S.load().user.xp, 1234);

// --- 6. Réinitialisation complète ---
clearAll();
const settings = ['maths_sound_muted', 'etabli_affichage_simple', 'etabli_police_dys', 'etabli_pwa_dismissed', 'etabli_pwa_installed', 'etabli_visits', 'etabli_sheet_options'];
settings.forEach(k => store.set(k, '1'));
[KEY, `${KEY}_backup`, CARDS_KEY, 'maths_recent_rituel_statements_v2'].forEach(k => store.set(k, 'x'));
store.set('autre_site', 'x');
S.resetAll();
check('Réinitialisation : données de l\'élève effacées', [...store.keys()].sort(), [...settings, 'autre_site'].sort());
faults.write = true;
S.addXp(5);
S.resetAll();
faults.write = false;
check('Réinitialisation : copie en mémoire oubliée', S.load().user.xp, 0);

// --- 7. Rappel de sauvegarde ---
clearAll();
const setUser = u => store.set(KEY, JSON.stringify({ user: u, chapters: {} }));
const daysAgo = n => new Date(Date.now() - n * 864e5).toISOString();
setUser({ xp: 50 });
check('Rappel : pas pour une petite progression', S.getBackupStatus().due, false);
setUser({ xp: 100 });
check('Rappel : à partir de 100 XP', S.getBackupStatus().due, true);
setUser({ xp: 20, streak: 7 });
check('Rappel : après 7 jours de série', S.getBackupStatus().due, true);
setUser({ xp: 500, lastExportAt: daysAgo(5), lastExportXp: 400 });
check('Rappel : pas après une sauvegarde récente', S.getBackupStatus().due, false);
setUser({ xp: 500, lastExportAt: daysAgo(40), lastExportXp: 400 });
check('Rappel : dû un mois après, si la progression a avancé', S.getBackupStatus().due, true);
setUser({ xp: 400, lastExportAt: daysAgo(40), lastExportXp: 400 });
check('Rappel : inutile si rien n\'a changé', S.getBackupStatus().due, false);
check('Rappel : date disponible', typeof S.getBackupStatus().lastExportAt, 'number');

setUser({ xp: 100 });
check('Accueil : rappel affiché quand il est dû', renderDefi().includes('id="home-backup-reminder"'), true);
setUser({ xp: 10 });
check('Accueil : pas de rappel sinon', renderDefi().includes('home-backup-reminder'), false);

clearAll();
setUser({ xp: 200 });
App.currentTab = 'home';
S.exportToJson();
check('Export : date enregistrée', typeof stored().user.lastExportAt, 'string');
check('Export : XP mémorisés', stored().user.lastExportXp, 200);
check('Export : plus de rappel', S.getBackupStatus().due, false);
check('Export : confirmation', toasts.length, 1);

// --- 8. Demande de stockage persistant ---
const flush = () => new Promise(resolve => setImmediate(resolve));
const importFile = async text => {
  let onChange = null;
  const input = Object.assign(makeEl(), { addEventListener: (type, fn) => { onChange = fn; } });
  const realCreate = document.createElement;
  document.createElement = () => input;
  App.handleImportProgress();
  document.createElement = realCreate;
  input.files = [{ text: () => Promise.resolve(text) }];
  onChange();
  await flush();
};
(async () => {
  // Parcours du bouton « Restaurer une sauvegarde »
  global.confirm = () => true;
  clearAll();
  reloads = 0;
  await importFile(JSON.stringify(legit));
  check('Restauration : page rechargée', reloads, 1);
  check('Restauration : progression écrite', stored().user.xp, 1234);

  clearAll();
  reloads = 0;
  faults.write = true;
  await importFile(JSON.stringify(legit));
  check('Restauration sur stockage plein : pas de rechargement, qui perdrait la copie en mémoire', reloads, 0);
  check('Restauration sur stockage plein : visible pendant la visite', S.load().user.xp, 1234);
  check('Restauration sur stockage plein : élève prévenu', toasts.some(t => t.includes('cette visite')), true);

  clearAll();
  reloads = 0;
  store.set(KEY, before);
  await importFile('pas une sauvegarde');
  check('Fichier refusé par le bouton : pas de rechargement', reloads, 0);
  check('Fichier refusé par le bouton : message', toasts.some(t => t.includes('pas une sauvegarde valide')), true);
  check('Fichier refusé par le bouton : progression intacte', store.get(KEY), before);

  clearAll();
  setUser({ xp: 10 });
  S.addXp(5);
  await flush();
  check('Persistance : pas avant une vraie progression', storageStub.calls, 0);

  clearAll();
  setUser({ xp: 60 });
  S.addXp(5);
  S.addXp(5);
  await flush();
  check('Persistance : demandée une seule fois par visite', storageStub.calls, 1);
  check('Persistance : date mémorisée', typeof stored().user.persistAskedAt, 'number');

  S._persistAsked = false;
  S.addXp(5);
  await flush();
  check('Persistance : pas redemandée dans les 30 jours', storageStub.calls, 1);

  clearAll();
  storageStub.alreadyPersisted = true;
  setUser({ xp: 60 });
  S.addXp(5);
  await flush();
  check('Persistance : inutile si déjà accordée', storageStub.calls, 0);

  clearAll();
  storageStub.alreadyPersisted = false;
  storageStub.calls = 0;
  S.importFromJson(JSON.stringify({ user: { xp: 500, persistAskedAt: Date.now() - 864e5 }, chapters: {} }));
  check('Import : la date de demande de l\'autre appareil n\'est pas reprise', 'persistAskedAt' in stored().user, false);
  S.addXp(5);
  await flush();
  check('Persistance : demandée sur l\'appareil où la sauvegarde est restaurée', storageStub.calls, 1);

  // XP fabriqué : getLevelFromXp avance niveau par niveau et load() l'appelle à chaque lecture
  [9e20, 1e16, 1e10].forEach(xp => {
    clearAll();
    store.set(KEY, JSON.stringify({ user: { xp }, chapters: {} }));
    const start = Date.now();
    const u = S.load().user;
    check(`XP fabriqué ${xp} : écarté`, [u.xp, u.level], [0, 1]);
    check(`XP fabriqué ${xp} : lecture immédiate`, Date.now() - start < 200, true);
  });
  clearAll();
  setUser({ xp: 123456 });
  check('XP élevé mais plausible : conservé', S.load().user.xp, 123456);

  // Stockage plein : les boîtes enregistrées sont périmées, la sauvegarde doit prendre celles en mémoire
  clearAll();
  store.set(CARDS_KEY, JSON.stringify({ 'fc-1': { box: 1 } }));
  window.MathsFlashcards = { leitnerData: { 'fc-1': { box: 4 } } };
  check('Flashcards : version enregistrée quand tout va bien', S.readFlashcards(), { 'fc-1': { box: 1 } });
  faults.write = true;
  setUser({ xp: 60 });
  S.addXp(5);
  check('Flashcards : mémoire préférée si le stockage est plein', S.readFlashcards(), { 'fc-1': { box: 4 } });
  delete window.MathsFlashcards;

  clearAll();
  Object.defineProperty(global, 'navigator', { value: {}, configurable: true });
  setUser({ xp: 60 });
  check('Persistance : navigateur sans l\'API', S.addXp(5).xp, 65);

  if (failures) { console.error(`\n✖ test_audit_storage : ${failures} échec(s)`); process.exit(1); }
  console.log('✔ test_audit_storage : import sans injection, aucune perte, stockage bloqué, effacement, rappel et persistance OK');
  process.exit(0);
})();
