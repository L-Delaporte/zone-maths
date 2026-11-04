#!/usr/bin/env node
/**
 * build_seo_pages.js — Génère les pages de cours STATIQUES et indexables de L'Établi des Maths.
 *
 * Pourquoi : l'application (index.html) construit tout son contenu en JavaScript depuis js/data/*.js ;
 * les moteurs de recherche n'en voient presque rien. Ce script produit une page HTML par niveau et
 * par chapitre (cours complet, exercices corrigés, formules rendues par KaTeX côté serveur),
 * lisible sans JavaScript, qui renvoie vers l'application pour s'entraîner.
 *
 * USAGE (depuis la racine du dépôt, Node ≥ 16, aucune dépendance externe) :
 *
 *     node scripts/build_seo_pages.js
 *
 *   - Supprime puis régénère entièrement le dossier cours/ (idempotent, relançable à volonté).
 *   - Réécrit sitemap.xml (pages racine + toutes les pages cours/). Dates de modification stables :
 *     une page générée garde sa date précédente (lastmod du sitemap, dateModified du JSON-LD) si son
 *     contenu n'a pas changé ; sinon elle prend la date du jour (ou BUILD_DATE=2026-10-30 node scripts/…).
 *     Les pages racine écrites à la main prennent la date de leur dernier commit.
 *     Google ignore un lastmod qui change partout à chaque génération : ne pas revenir en arrière.
 *   - Vérifie que robots.txt déclare le sitemap (l'ajoute sinon).
 *   - Affiche un résumé : nombre de pages, erreurs KaTeX, titres/descriptions trop longs ou en double.
 *
 * À relancer après chaque modification des contenus (js/data/*.js), puis committer cours/ et sitemap.xml.
 *
 * Sources lues (jamais modifiées) : js/data/chapters*.js, courses.js, exercises.js, data_*.js,
 * js/mathRenderer.js (markdownToHtml réutilisé tel quel), vendor/katex/katex.min.js.
 * Feuille de style des pages générées : css/cours.css (+ css/style.css et css/landing.css).
 *
 * Les URL des chapitres sont dérivées de leur titre (slug ASCII) : changer un titre change l'URL.
 * Le registre scripts/cours_urls.json garde toutes les URL publiées de chaque chapitre : après un
 * renommage, l'ancienne URL devient automatiquement une page relais vers la nouvelle (à committer).
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { CSP_META } = require('./csp.js');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'cours');
const SITE = 'https://etabli-des-maths.fr';
const BRAND = "L'Établi des Maths";
// Redirections : GitHub Pages n'a pas de redirection serveur, une page relais (noindex, canonical,
// refresh) est générée à l'ancienne URL. Les renommages de chapitres sont gérés automatiquement par
// le registre URL_REGISTRY ; REDIRECTS ne sert qu'aux cas particuliers (ancienne URL → cible choisie
// à la main), chemins relatifs à cours/.
const URL_REGISTRY = path.join(__dirname, 'cours_urls.json');
const REDIRECTS = {};
const AUTHOR = 'Loïc Delaporte';
const BUILD_DATE = process.env.BUILD_DATE || new Date().toISOString().slice(0, 10);

// ---------------------------------------------------------------------------
// Dates de modification stables
// ---------------------------------------------------------------------------
// Les pages sont produites avec DATE_TOKEN à la place de leur date ; writeStable() compare le
// résultat à la version précédente (dates neutralisées) et ne date du jour que les pages modifiées.
const DATE_TOKEN = '__DATE_MODIFIED__';
const DATE_RE = /"dateModified": "\d{4}-\d{2}-\d{2}"/g;
const PREV = { files: new Map(), lastmod: new Map() };
const pageDates = new Map(); // chemin du sitemap (ex. /cours/3e/) → AAAA-MM-JJ

function snapshotPrevious() {
  const walk = (dir) => {
    if (!fs.existsSync(dir)) return;
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith('.html')) PREV.files.set(p, fs.readFileSync(p, 'utf8'));
    }
  };
  walk(OUT);
  const sm = path.join(ROOT, 'sitemap.xml');
  if (fs.existsSync(sm)) {
    const re = /<loc>([^<]+)<\/loc>\s*<lastmod>(\d{4}-\d{2}-\d{2})<\/lastmod>/g;
    for (const m of fs.readFileSync(sm, 'utf8').matchAll(re)) PREV.lastmod.set(m[1].replace(SITE, ''), m[2]);
  }
}

function writeStable(file, html, loc) {
  const prev = PREV.files.has(file) ? PREV.files.get(file) : (fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null);
  let date = BUILD_DATE;
  if (prev != null && prev.replace(DATE_RE, `"dateModified": "${DATE_TOKEN}"`) === html) {
    const m = prev.match(/"dateModified": "(\d{4}-\d{2}-\d{2})"/);
    date = (m && m[1]) || PREV.lastmod.get(loc) || BUILD_DATE;
  }
  fs.writeFileSync(file, html.split(DATE_TOKEN).join(date));
  if (loc) pageDates.set(loc, date);
}

/** Date du dernier commit d'un fichier écrit à la main (date du jour s'il a des modifications non committées). */
function gitDate(rel) {
  const { execFileSync } = require('child_process');
  try {
    const opts = { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] };
    if (execFileSync('git', ['status', '--porcelain', '--', rel], opts).trim()) return BUILD_DATE;
    return execFileSync('git', ['log', '-1', '--format=%cs', '--', rel], opts).trim() || BUILD_DATE;
  } catch (e) {
    return BUILD_DATE;
  }
}
const NB = '\u00a0';   // espace insécable
const NNB = '\u202f';  // espace fine insécable

// ---------------------------------------------------------------------------
// 1. Chargement des données dans un contexte « navigateur » minimal
// ---------------------------------------------------------------------------
const DATA_FILES = [
  'chapters.js', 'chapters_lycee.js', 'chapters_licence.js', 'courses.js', 'exercises.js',
  'data_6eme.js', 'data_5eme.js', 'data_4eme.js', 'data_2nde.js', 'data_1ere.js', 'data_terminale.js',
  'data_l1.js', 'data_l2.js', 'data_l3.js', 'data_capes.js', 'data_proofs.js'
];

function loadData() {
  const sandbox = { console };
  sandbox.window = sandbox;
  sandbox.self = sandbox;
  sandbox.document = {
    addEventListener() {}, querySelector() { return null; }, querySelectorAll() { return []; },
    getElementById() { return null; }, createElement() { return { style: {}, setAttribute() {}, appendChild() {} }; }
  };
  sandbox.localStorage = { getItem() { return null; }, setItem() {}, removeItem() {} };
  const ctx = vm.createContext(sandbox);
  const missing = [];
  for (const f of DATA_FILES) {
    const p = path.join(ROOT, 'js', 'data', f);
    if (!fs.existsSync(p)) { missing.push(f); continue; }
    vm.runInContext(fs.readFileSync(p, 'utf8'), ctx, { filename: f });
  }
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'js', 'mathRenderer.js'), 'utf8'), ctx, { filename: 'mathRenderer.js' });
  return { win: sandbox, missing };
}

const katex = require(path.join(ROOT, 'vendor', 'katex', 'katex.min.js'));

// ---------------------------------------------------------------------------
// 2. Niveaux
// ---------------------------------------------------------------------------
const LEVELS = [
  { code: '6eme', slug: '6e', label: '6e', de: 'de 6e', cycle: 'college', app: '6eme', edu: 'Collège — classe de 6e (cycle 3)',
    intro: "Tous les chapitres du programme de mathématiques de 6e (cycle 3) : nombres entiers et décimaux, fractions, calcul, grandeurs et mesures, géométrie et données." },
  { code: '5eme', slug: '5e', label: '5e', de: 'de 5e', cycle: 'college', app: '5eme', edu: 'Collège — classe de 5e (cycle 4)',
    intro: "Les chapitres de 5e (cycle 4) : nombres relatifs, fractions, calcul littéral, proportionnalité, symétrie centrale, triangles, parallélogrammes, statistiques et probabilités." },
  { code: '4eme', slug: '4e', label: '4e', de: 'de 4e', cycle: 'college', app: '4eme', edu: 'Collège — classe de 4e (cycle 4)',
    intro: "Les chapitres de 4e (cycle 4) : relatifs, fractions, puissances, calcul littéral, équations, théorème de Pythagore, Thalès, statistiques et probabilités." },
  { code: '3eme', slug: '3e', label: '3e', de: 'de 3e', cycle: 'college', app: '3eme', edu: 'Collège — classe de 3e (cycle 4, brevet)',
    intro: "Le programme de 3e pour préparer le brevet : arithmétique, puissances, calcul littéral, fonctions, Thalès, trigonométrie, transformations, statistiques, probabilités et algorithmique." },
  { code: '2nde', slug: 'seconde', label: 'Seconde', de: 'de seconde', cycle: 'lycee', app: '2nde', edu: 'Lycée — classe de seconde générale et technologique',
    intro: "Le programme de mathématiques de seconde : nombres réels, calcul littéral, fonctions de référence, vecteurs, géométrie repérée, statistiques et probabilités." },
  { code: '1ere', slug: 'premiere', label: 'Première', de: 'de première', cycle: 'lycee', app: '1ere', edu: 'Lycée — première, spécialité mathématiques',
    intro: "La spécialité mathématiques de première : second degré, suites, dérivation, exponentielle, trigonométrie, produit scalaire, probabilités conditionnelles et variables aléatoires." },
  { code: 'tale', slug: 'terminale', label: 'Terminale', de: 'de terminale', cycle: 'lycee', app: 'tale', edu: 'Lycée — terminale, spécialité mathématiques et mathématiques expertes',
    intro: "La spécialité mathématiques de terminale et l'option mathématiques expertes : limites, continuité, logarithme, intégration, géométrie dans l'espace, lois de probabilité, arithmétique, complexes et matrices." },
  { code: 'L1', slug: 'l1', label: 'Licence 1', de: 'de L1', cycle: 'licence', app: 'L1', edu: 'Université — licence de mathématiques, 1re année (L1)',
    intro: "Première année de licence de mathématiques : logique et ensembles, nombres complexes, algèbre linéaire, suites et fonctions réelles, développements limités, intégration et démonstrations fondamentales." },
  { code: 'L2', slug: 'l2', label: 'Licence 2', de: 'de L2', cycle: 'licence', app: 'L2', edu: 'Université — licence de mathématiques, 2e année (L2)',
    intro: "Deuxième année de licence : déterminants, réduction des endomorphismes, espaces euclidiens, séries numériques, intégrales généralisées, équations différentielles, calcul différentiel et probabilités." },
  { code: 'L3', slug: 'l3', label: 'Licence 3', de: 'de L3', cycle: 'licence', app: 'L3', edu: 'Université — licence de mathématiques, 3e année (L3)',
    intro: "Troisième année de licence : théorie des groupes, anneaux, topologie des espaces métriques, espaces de Banach, séries de Fourier, théorie de la mesure, probabilités et analyse numérique." },
  { code: 'capes', slug: 'capes', label: 'CAPES', de: 'CAPES', cycle: 'concours', app: 'capes', edu: 'Concours — CAPES et agrégation de mathématiques',
    intro: "Préparation aux oraux du CAPES de mathématiques : leçons avec plan (y compris sur les grands thèmes du secondaire : géométrie vectorielle, nombres complexes, probabilités, statistique, dénombrement), théorème clé démontré, développements possibles, remarques du jury, et épreuve d'entretien." }
];
/** Libellé court du niveau dans les titres (« Pythagore en 4e », « Maths en terminale »). */
const SHORT = { '6eme': '6e', '5eme': '5e', '4eme': '4e', '3eme': '3e', '2nde': 'seconde', '1ere': 'première', tale: 'terminale',
  L1: 'L1', L2: 'L2', L3: 'L3', capes: 'CAPES' };
for (const l of LEVELS) { l.short = SHORT[l.code]; l.en = `en ${l.short}`; }
const SCHOOL_ORDER = ['6eme', '5eme', '4eme', '3eme', '2nde', '1ere', 'tale'];
/** Noms des paliers affichés par l'application (js/adaptiveEngine.js, getTierDisplayName). */
function tierNames(code) {
  const base = ['Socle et automatismes', 'Entraînement guidé'];
  if (['L1', 'L2', 'L3'].includes(code)) return ['Socle et définitions', 'Entraînement et méthodes', 'Niveau examen', 'Démonstrations et rigueur'];
  if (code === '1ere' || code === 'tale') return base.concat(['Objectif bac', 'Défi et approfondissement']);
  if (code === '3eme') return base.concat(['Objectif brevet', 'Défi seconde']);
  const next = { '6eme': 'Défi 5e', '5eme': 'Défi 4e', '4eme': 'Défi 3e', '2nde': 'Défi première spécialité' };
  return base.concat(['Approfondissement', next[code] || 'Défi']);
}

/** Pages piliers (hubs) générées à la racine, chacune dans son dossier. */
const HUBS = {
  exercices: { dir: 'exercices-de-maths', name: 'Exercices de maths corrigés' },
  brevet: { dir: 'reviser-le-brevet-de-maths', name: 'Réviser le brevet de maths' },
  bac: { dir: 'reussir-le-bac-de-maths', name: 'Réussir le bac de maths' },
  entrainement: { dir: 'entrainement-maths', name: 'Entraînement maths en ligne' },
  oral2: { dir: 'epreuve-d-entretien-capes', name: 'Épreuve d’entretien du CAPES (oral 2)' }
};
/** Fiche de l'oral 2 du CAPES : épreuve commune à toutes les disciplines, titre et résumé dédiés. */
const ORAL2_ID = 'capes-oral2';

/** Grande catégorie d'un chapitre, commune à toutes les classes (sommaire /cours/). */
const CATEGORIES = [
  { id: 'nombres', name: 'Nombres, calcul et algèbre' },
  { id: 'fonctions', name: 'Fonctions et analyse' },
  { id: 'geometrie', name: 'Géométrie' },
  { id: 'grandeurs', name: 'Grandeurs et mesures' },
  { id: 'stats', name: 'Statistiques et probabilités' },
  { id: 'algo', name: 'Algorithmique et programmation' },
  { id: 'demos', name: 'Démonstrations' },
  { id: 'entretien', name: 'Épreuve d\u2019entretien' }
];
/** Collège : thèmes resserrés (Numérique, Géométrie, Gestion de données ; Fonctions à partir de la 3e). */
const CATEGORIES_COLLEGE = [
  { id: 'numerique', name: 'Numérique' },
  { id: 'geometrie', name: 'Géométrie' },
  { id: 'gestion', name: 'Gestion de données' },
  { id: 'fonctions', name: 'Fonctions' },
  { id: 'algo', name: 'Algorithmique et programmation' }
];
function categoryFor(it, lvl) {
  const c = categoryOf(it.ch, it.title);
  if (lvl.cycle !== 'college') return c;
  if (c === 'nombres') return 'numerique';
  if (c === 'geometrie' || c === 'grandeurs') return 'geometrie';
  if (c === 'stats') return 'gestion';
  if (c === 'fonctions') return lvl.code === '3eme' && /fonction/i.test(it.title) ? 'fonctions' : 'gestion';
  return c;
}
function categoryOf(ch, title) {
  const dom = String(ch.domainName || ch.domain || '');
  const t = String(title);
  if (/démonstrations fondamentales/i.test(dom)) return 'demos';
  if (/éthique|laïcité/i.test(dom)) return 'entretien';
  if (/statisti|probabilit|données|dénombrement|combinatoire|aléatoire|échantillonnage|fluctuation|bernoulli|binomiale/i.test(t)) return 'stats';
  if (/algorithm|programmation|pensée informatique|scratch|python/i.test(t)) return 'algo';
  if (/espaces métriques|banach|compacité|mesure et intégration|analyse numérique|calcul différentiel/i.test(t)) return 'fonctions';
  if (/vecteurs du plan|géométrie (affine|euclidienne|différentielle|vectorielle)|courbes paramétrées/i.test(t)) return 'geometrie';
  if (/fraction|relatifs|nombres complexes|matric|linéaires?,|applications linéaires|endomorphism|déterminant|espaces vectoriels|dualité|groupes?\b|anneaux|arithmétique|préhilbert|euclidiens|récurrence/i.test(t)) return 'nombres';
  if (/grandeurs et mesures/i.test(dom)) return 'grandeurs';
  if (/fonction|suite|série|dérivé|intégra|primitive|différentielle|limite|continuit|exponentiel|logarithm|convexit|proportionnalit|pourcentage|polynôme du second|taylor|dépendance entre grandeurs/i.test(t)) return 'fonctions';
  if (/géométri|espace|triangle|pythagore|thalès|trigonom|vecteur|\bdroites?\b|cercle|\bangles?\b|\baires?\b|périmètre|volume|solide|symétri|translation|rotation|homothét|produit scalaire|sphère|parallélogramme|quadrilatère|repérage|courbes paramétrées/i.test(t)) return 'geometrie';
  if (/analyse/i.test(dom)) return 'fonctions';
  return 'nombres';
}

const CYCLES = [
  { id: 'college', name: 'Collège', desc: 'De la 6e à la 3e, jusqu\u2019au brevet.' },
  { id: 'lycee', name: 'Lycée', desc: 'Seconde, puis spécialité mathématiques en première et terminale.' },
  { id: 'licence', name: 'Licence de mathématiques', desc: 'Les trois années de licence à l\u2019université.' },
  { id: 'concours', name: 'Concours de l\u2019enseignement', desc: 'Préparation aux oraux du CAPES.' }
];

// ---------------------------------------------------------------------------
// 3. Utilitaires texte
// ---------------------------------------------------------------------------
const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Espaces insécables devant : ; ! ? » et après « (texte brut uniquement). */
function frTypo(s) {
  return String(s)
    .replace(/[ \u00a0]+([:])/g, NB + '$1')
    .replace(/[ \u00a0]+([;!?])/g, NNB + '$1')
    .replace(/«[ \u00a0]*/g, '«' + NB)
    .replace(/[ \u00a0]*»/g, NB + '»');
}

function slugify(s) {
  return String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/œ/g, 'oe').replace(/æ/g, 'ae').replace(/[ß]/g, 'ss')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}
const STOP = ['et', 'de', 'du', 'des', 'la', 'le', 'les', 'd', 'l', 'a', 'à', 'en', 'au', 'aux', 'sur', 'un', 'une', 'par', 'pour', 'avec', 'dans'];
function truncSlug(slug, max) {
  if (slug.length <= max) return slug;
  const cutWord = slug[max] !== '-';
  const parts = slug.slice(0, max).split('-').filter(Boolean);
  if (cutWord) parts.pop(); // mot coupé
  while (parts.length > 2 && STOP.includes(parts[parts.length - 1])) parts.pop();
  return parts.join('-');
}
const TEX_SYMBOLS = {
  times: '×', div: '÷', cdot: '·', leq: '≤', le: '≤', geq: '≥', ge: '≥', neq: '≠', ne: '≠', approx: '≈',
  infty: '∞', in: '∈', notin: '∉', subset: '⊂', subseteq: '⊆', cup: '∪', cap: '∩', emptyset: '∅', varnothing: '∅',
  forall: '∀', exists: '∃', to: '→', mapsto: '↦', rightarrow: '→', Rightarrow: '⇒', implies: '⇒', iff: '⇔',
  Leftrightarrow: '⇔', pm: '±', mp: '∓', circ: '∘', degree: '°', ldots: '…', dots: '…', cdots: '⋯',
  pi: 'π', alpha: 'α', beta: 'β', gamma: 'γ', delta: 'δ', Delta: 'Δ', epsilon: 'ε', varepsilon: 'ε', theta: 'θ',
  lambda: 'λ', mu: 'μ', sigma: 'σ', Sigma: 'Σ', omega: 'ω', Omega: 'Ω', phi: 'φ', varphi: 'φ', rho: 'ρ', tau: 'τ',
  sum: 'Σ', prod: 'Π', int: '∫', partial: '∂', nabla: '∇', sqrt: '√', perp: '⊥', parallel: '∥', angle: '∠',
  quad: ' ', qquad: ' ', ',': ' ', ';': ' ', '!': '', ' ': ' ', '{': '{', '}': '}', '%': '%', lbrace: '{', rbrace: '}'
};
const BB = { N: 'ℕ', Z: 'ℤ', D: 'D', Q: 'ℚ', R: 'ℝ', C: 'ℂ', K: 'K' };
const SUP = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', 'n': 'ⁿ', '-': '⁻', '+': '⁺' };

/** Conversion approximative LaTeX → texte (pour <title>, meta description, JSON-LD). */
function texToText(tex) {
  let s = tex;
  s = s.replace(/\\mathbb\{(\w)\}/g, (m, l) => BB[l] || l);
  for (let i = 0; i < 3; i++) {
    s = s.replace(/\\[dt]?frac\{([^{}]*)\}\{([^{}]*)\}/g, '$1/$2');
    s = s.replace(/\\sqrt\{([^{}]*)\}/g, '√$1');
    s = s.replace(/\\(?:text|textbf|mathrm|mathbf|mathcal|operatorname|overrightarrow|vec|widehat|hat|overline|left|right)\s*\{([^{}]*)\}/g, '$1');
  }
  s = s.replace(/\\(left|right|big|Big|bigg|displaystyle)\b/g, '');
  s = s.replace(/\\([a-zA-Z]+|[,;! {}%])/g, (m, c) => (c in TEX_SYMBOLS ? TEX_SYMBOLS[c] : (/^[a-z]+$/.test(c) && c.length <= 4 ? c : '')));
  s = s.replace(/\^\{?([0-9n+-])\}?/g, (m, c) => SUP[c] || c);
  s = s.replace(/[_^]\{([^{}]*)\}/g, '$1').replace(/[_^]/g, '');
  s = s.replace(/[{}]/g, '').replace(/\s+/g, ' ').trim();
  return s;
}
/** Texte enrichi (markdown + LaTeX + HTML) → texte brut d'une ligne. */
function plain(s) {
  if (!s) return '';
  let t = String(s);
  t = t.replace(/<svg[\s\S]*?<\/svg>/gi, ' ');
  t = t.replace(/\$\$([\s\S]+?)\$\$/g, (m, x) => ' ' + texToText(x) + ' ');
  t = t.replace(/\$([^$]+?)\$/g, (m, x) => texToText(x));
  t = t.replace(/\\\(([\s\S]+?)\\\)/g, (m, x) => texToText(x));
  t = t.replace(/<[^>]+>/g, ' ').replace(/\*\*?|`|^#+\s*/gm, '');
  t = t.replace(/^[•\-]\s+/gm, '').replace(/[⚠️🎯⚡]\uFE0F?/gu, '');
  return t.replace(/\s+/g, ' ').trim();
}
function truncate(s, max) {
  if (s.length <= max) return s;
  const words = s.slice(0, max).split(' ');
  words.pop(); // dernier mot éventuellement coupé
  while (words.length > 2 && (STOP.includes(words[words.length - 1].toLowerCase().replace(/[’']$/, '')) || /^[dl][’']\S*$/i.test(words[words.length - 1]) && words[words.length - 1].length < 4)) words.pop();
  return words.join(' ').replace(/[\s,;:.—(–-]+$/, '').replace(/[\u00a0\u202f]+$/, '') + '…';
}
const lcFirst = (s) => (s && /^[A-ZÉÈÀ][a-zéèêàâîïôûç]/.test(s) ? s[0].toLowerCase() + s.slice(1) : s);
const ucFirst = (s) => (s ? s[0].toUpperCase() + s.slice(1) : s);

// ---------------------------------------------------------------------------
// 4. Rendu des mathématiques (KaTeX côté serveur) + markdown de l'application
// ---------------------------------------------------------------------------
const katexErrors = [];
let currentPage = '';

function renderTex(tex, display) {
  try {
    const out = katex.renderToString(tex, { displayMode: display, throwOnError: false, strict: 'ignore', output: 'htmlAndMathml' });
    if (out.includes('katex-error')) katexErrors.push({ page: currentPage, tex: tex.slice(0, 90) });
    return out;
  } catch (e) {
    katexErrors.push({ page: currentPage, tex: tex.slice(0, 90), err: e.message });
    return '<code>' + esc(tex) + '</code>';
  }
}

/** Remplace les formules par des jetons ; renvoie [texte, rendus]. Le contenu des blocs ``` est préservé. */
function extractMath(text) {
  const store = [];
  const codeBlocks = [];
  let t = String(text).replace(/```[\s\S]*?```/g, (m) => { codeBlocks.push(m); return `\u0002${codeBlocks.length - 1}\u0002`; });
  const svgs = [];
  t = t.replace(/<svg[\s\S]*?<\/svg>/gi, (m) => { svgs.push(m); return `\u0003${svgs.length - 1}\u0003`; });
  const put = (tex, display) => { store.push(renderTex(tex.trim(), display)); return `@@KX${store.length - 1}@@`; };
  t = t.replace(/\$\$([\s\S]+?)\$\$/g, (m, x) => put(x, true));
  t = t.replace(/\\\[([\s\S]+?)\\\]/g, (m, x) => put(x, true));
  t = t.replace(/\\\(([\s\S]+?)\\\)/g, (m, x) => put(x, false));
  t = t.replace(/(^|[^\\])\$((?:\\\$|[^$])+?)\$/g, (m, pre, x) => (/\n\s*\n/.test(x) ? m : pre + put(x, false)));
  t = t.replace(/\u0002(\d+)\u0002/g, (m, i) => codeBlocks[+i]);
  return { t, store, svgs };
}
function restoreMath(html, store, svgs) {
  return html
    .replace(/\u0003(\d+)\u0003/g, (m, i) => svgs[+i])
    .replace(/@@KX(\d+)@@/g, (m, i) => store[+i]);
}

let MD = null; // window.MathsRenderer.markdownToHtml
/** Bloc riche : markdown de l'application + KaTeX. Les titres internes sont rétrogradés (h4+). */
function rich(text) {
  if (!text) return '';
  const { t, store, svgs } = extractMath(text);
  // SVG : jeton reconnu par markdownToHtml (pas de <p> autour) mais non restauré par lui.
  let html = MD(t.replace(/\u0003(\d+)\u0003/g, '%%%MATH_SVG_BLOCK_S$1%%%'));
  html = html.replace(/%%%MATH_SVG_BLOCK_S(\d+)%%%/g, '\u0003$1\u0003');
  html = html.replace(/<(\/?)h([1-5])( class="math-h\d")?>/g, (m, close, n) => {
    const lvl = Math.min(6, Math.max(4, +n + 3));
    return close ? `</h${lvl}>` : `<h${lvl} class="math-h${lvl}">`;
  });
  return restoreMath(html, store, svgs);
}
/** Ligne riche : gras/italique/code + KaTeX, sans paragraphes. */
function inline(text) {
  if (!text) return '';
  const { t, store, svgs } = extractMath(text);
  let h = t.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/(?<![*\w])\*([^*\n]+)\*(?![*\w])/g, '<em>$1</em>')
    .replace(/`([^`\n]+)`/g, '<code>$1</code>')
    .replace(/\n/g, '<br />');
  return restoreMath(h, store, svgs);
}

// ---------------------------------------------------------------------------
// 5. Gabarit commun
// ---------------------------------------------------------------------------
function jsonLd(obj) {
  return `<script type="application/ld+json">\n${JSON.stringify(obj, null, 2).replace(/</g, '\\u003c')}\n</script>`;
}

function layout({ depth, title, description, canonical, ogType = 'website', jsonld, body, extraHead = '', active = 'cours', tag = 'Cours', ogImage = `${SITE}/assets/logo.jpg` }) {
  const up = '../'.repeat(depth);
  const cur = (key) => (key === active ? ` active" aria-current="${canonical.endsWith('/') && depth <= 1 ? 'page' : 'true'}` : '');
  return `<!DOCTYPE html>
<html lang="fr" data-theme="light">
<head>
  <meta charset="UTF-8" />
  <!-- Content-Security-Policy : voir scripts/csp.js (style-src 'unsafe-inline' requis par les attributs style de KaTeX) -->
  ${CSP_META}
  <script src="${up}js/themeInit.js"></script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}" />
  <meta name="author" content="${AUTHOR}, professeur de mathématiques" />
  <link rel="canonical" href="${canonical}" />

  <!-- Open Graph -->
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(description)}" />
  <meta property="og:type" content="${ogType}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:image" content="${ogImage}" />
  <meta property="og:image:alt" content="${esc(title)}" />
  <meta name="twitter:card" content="${ogImage.endsWith('logo.jpg') ? 'summary' : 'summary_large_image'}" />
  <meta property="og:locale" content="fr_FR" />
  <meta property="og:site_name" content="${esc(BRAND)}" />

  <link rel="stylesheet" href="${up}css/style.css" />
  <link rel="stylesheet" href="${up}css/landing.css" />
  <link rel="stylesheet" href="${up}vendor/katex/katex.min.css" />
  <link rel="stylesheet" href="${up}css/cours.css" />
  <link rel="icon" href="${up}favicon.ico" sizes="any" />
  <link rel="icon" type="image/png" sizes="32x32" href="${up}assets/favicon-32x32.png" />
  <link rel="apple-touch-icon" href="${up}assets/favicon.png" />
  <link rel="manifest" href="${up}manifest.json" />
  <meta name="theme-color" content="#2563eb" />
${extraHead}${jsonld.map((j) => '  ' + jsonLd(j).replace(/\n/g, '\n  ')).join('\n')}
</head>
<body class="cours-page">
  <a class="cours-skip" href="#contenu">Aller au contenu</a>

  <!-- Header Uniformisé -->
  <header class="app-header">
    <div class="header-inner">
      <a href="${up}index.html" class="brand-container">
        <img src="${up}assets/logo-96.png" alt="" class="brand-logo-img" width="44" height="44" />
        <div class="brand-text">
          <p class="brand-title">L'Établi des Maths <span class="brand-level-tag">${esc(tag)}</span></p>
          <span class="brand-tagline">Outils pour apprendre et pratiquer</span>
        </div>
      </a>

      <!-- Navigation entre Portails -->
      <nav class="nav-portal-links" aria-label="Portails thématiques">
        <a href="${up}index.html" class="nav-portal-btn">🏠 Accueil</a>
        <a href="${up}cours/" class="nav-portal-btn${cur('cours')}">📚 Cours</a>
        <a href="${up}${HUBS.exercices.dir}/" class="nav-portal-btn${cur('exercices')}">✏️ Exercices</a>
        <a href="${up}rituels.html" class="nav-portal-btn">⏱️ Rituels</a>
        <a href="${up}${HUBS.brevet.dir}/" class="nav-portal-btn${cur('brevet')}">📝 Brevet</a>
        <a href="${up}${HUBS.bac.dir}/" class="nav-portal-btn${cur('bac')}">🎓 Bac</a>
        <a href="${up}enseignants.html" class="nav-portal-btn">👨‍🏫 Enseignants</a>
        <a href="${up}parents.html" class="nav-portal-btn">👪 Parents</a>
      </nav>
    </div>
  </header>

  <main class="landing-wrapper cours-wrapper" id="contenu" tabindex="-1">
${body}
  </main>

  <footer class="cours-footer">
    <p>${esc(BRAND)} — Conçu par ${AUTHOR}, professeur de mathématiques • 100${NNB}% gratuit, conforme aux programmes</p>
    <p><a href="${up}cours/">Cours de maths</a> · <a href="${up}${HUBS.exercices.dir}/">Exercices corrigés</a> · <a href="${up}${HUBS.entrainement.dir}/">Entraînement en ligne</a> · <a href="${up}${HUBS.brevet.dir}/">Réviser le brevet</a> · <a href="${up}${HUBS.bac.dir}/">Réussir le bac</a> · <a href="${up}${HUBS.oral2.dir}/">Oral 2 du CAPES</a></p>
    <p><a href="${up}index.html">Ouvrir l'application</a> · <a href="${up}rituels.html">Rituels</a> · <a href="${up}brevet.html">Brevet blanc</a> · <a href="${up}bac.html">Devoir type bac</a> · <a href="${up}a-propos.html">Qui suis-je ?</a> · <a href="${up}mentions-legales.html">Mentions légales</a> · <a href="mailto:delaporte@etabli-des-maths.fr">Contact</a></p>
    <p>Contenus sous licence <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr" rel="license noopener">CC BY-NC-SA 4.0</a></p>
  </footer>
  <!-- Statistiques d'audience anonymes et conformes RGPD (GoatCounter) -->
  <script data-goatcounter="https://etabli-des-maths.goatcounter.com/count" async src="https://gc.zgo.at/count.js"></script>
</body>
</html>
`;
}

function breadcrumbHtml(items) {
  return `    <nav class="cours-breadcrumb" aria-label="Fil d'Ariane">
      <ol>
${items.map((it, i) => (i === items.length - 1
    ? `        <li><span aria-current="page">${esc(it.name)}</span></li>`
    : `        <li><a href="${it.href}">${esc(it.name)}</a></li>`)).join('\n')}
      </ol>
    </nav>`;
}
function breadcrumbLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: it.url }))
  };
}

// ---------------------------------------------------------------------------
// 6. Contenus d'un chapitre
// ---------------------------------------------------------------------------
function cleanCourseTitle(t, ch) {
  return String(t || '').replace(new RegExp('^\\s*' + ch.id.replace(/[-]/g, '\\-') + '\\s*:\\s*'), '').trim();
}

function section(id, title, inner, cls = '') {
  return `    <section class="cours-section ${cls}" id="${id}" aria-labelledby="${id}-titre">
      <h2 id="${id}-titre">${title}</h2>
${inner}
    </section>`;
}

function courseSections(ch, course, capes) {
  const out = []; // {id, title, html}
  if (capes) {
    const oral2 = capes.id === 'capes-oral2';
    out.push({ id: 'objectifs', title: oral2 ? 'Textes officiels et cadre institutionnel' : 'Prérequis',
      html: `<ul class="cours-list">${(capes.prerequisites || []).map((p) => `<li>${inline(p)}</li>`).join('')}</ul>` });
    out.push({ id: 'cours', title: oral2 ? 'Plan et synthèse thématique' : 'Proposition de plan en trois parties',
      html: (capes.plan || []).map((p) => `<article class="cours-card"><h3>${inline(p.part)}</h3>${rich(p.content)}</article>`).join('\n') });
    if (capes.keyTheorem) {
      const k = capes.keyTheorem;
      out.push({ id: 'theoreme', title: oral2 ? 'Cadre juridique et jurisprudences de référence' : 'Théorème clé et démonstration',
        html: `<article class="cours-card cours-theorem"><h3>${inline(k.title)}</h3>${rich(k.statement)}
<h4 class="cours-subhead">${oral2 ? 'Fondements juridiques' : 'Démonstration'}</h4>${rich(k.proof)}</article>` });
    }
    if ((capes.developments || []).length) out.push({ id: 'developpements', title: oral2 ? 'Études de cas' : 'Développements possibles pour l\u2019oral',
      html: `<ul class="cours-list">${capes.developments.map((d) => `<li>${inline(d)}</li>`).join('')}</ul>` });
    if ((capes.juryTips || []).length) out.push({ id: 'pieges', title: 'Remarques et questions du jury',
      html: `<ul class="cours-list cours-traps">${capes.juryTips.map((d) => `<li>${inline(d)}</li>`).join('')}</ul>` });
    return out;
  }
  if (!course) {
    out.push({ id: 'objectifs', title: 'Objectifs du chapitre', html: `<ul class="cours-list">${(ch.skills || []).map((s) => `<li>${inline(s)}</li>`).join('')}</ul>` });
    out.push({ id: 'cours', title: 'Notions clés', html: `<article class="cours-card">${rich(ch.description)}</article>` });
    return out;
  }
  const objectives = course.objectives && course.objectives.length ? course.objectives : ch.skills;
  if (objectives && objectives.length) out.push({ id: 'objectifs', title: 'Objectifs du chapitre',
    html: `<ul class="cours-list">${objectives.map((o) => `<li>${inline(o)}</li>`).join('')}</ul>` });
  const kp = course.keyPoints || course.sections || [];
  if (kp.length) out.push({ id: 'cours', title: 'Le cours',
    html: kp.map((k) => `<article class="cours-card"><h3>${inline(k.title)}</h3>${rich(k.content)}</article>`).join('\n') });
  if ((course.methods || []).length) out.push({ id: 'methodes', title: 'Méthodes et exemples rédigés',
    html: course.methods.map((m) => `<article class="cours-card cours-method"><h3>${inline(m.title)}</h3>
${m.example ? `<div class="cours-example"><p class="cours-example-label">Exemple</p>${rich(m.example)}</div>` : ''}
${(m.steps || []).length ? `<ol class="cours-steps">${m.steps.map((s) => `<li>${rich(s)}</li>`).join('')}</ol>` : ''}</article>`).join('\n') });
  if ((course.traps || []).length) out.push({ id: 'pieges', title: 'Pièges fréquents',
    html: `<ul class="cours-list cours-traps">${course.traps.map((t) => `<li>${inline(t.replace(/^\s*⚠️\s*/, ''))}</li>`).join('')}</ul>` });
  if ((course.flashcards || []).length) out.push({ id: 'revision', title: 'Questions de révision',
    html: `<p class="cours-note">Essaie de répondre de tête avant d'afficher la réponse.</p>
<div class="cours-flashcards">${course.flashcards.map((f) => `<details class="cours-flash"><summary>${inline(f.q)}</summary><div class="cours-flash-a">${rich(f.a)}</div></details>`).join('\n')}</div>` });
  return out;
}

function pickExercises(list) {
  const ok = (list || []).filter((e) => e && typeof e.statement === 'string' && e.statement.trim() && (e.solution || e.answer != null));
  const picked = [];
  for (const tier of [1, 2, 3, 4]) {
    const e = ok.find((x) => (x.tier || 1) === tier && !picked.includes(x));
    if (e) picked.push(e);
  }
  for (const e of ok) { if (picked.length >= 2) break; if (!picked.includes(e)) picked.push(e); }
  return picked.slice(0, 4);
}
const TIER_NAMES = { 1: 'Palier 1 · découverte', 2: 'Palier 2 · application', 3: 'Palier 3 · approfondissement', 4: 'Palier 4 · défi' };

function exercisesHtml(exos) {
  return exos.map((e, i) => {
    let options = '';
    let answer = '';
    if (e.type === 'mcq' && Array.isArray(e.options)) {
      let ci = typeof e.correctIndex === 'number' ? e.correctIndex : e.options.indexOf(e.answer);
      options = `<ol class="cours-mcq" type="A">${e.options.map((o) => `<li>${inline(o)}</li>`).join('')}</ol>`;
      if (ci >= 0) {
        const expl = Array.isArray(e.explanations) && e.explanations[ci] ? `<div>${rich(e.explanations[ci])}</div>` : '';
        answer = `<p class="cours-answer"><strong>Bonne réponse${NB}:</strong> ${String.fromCharCode(65 + ci)}. ${inline(e.options[ci])}</p>${expl}`;
      }
    } else if (e.answer != null && String(e.answer).trim()) {
      const a = String(e.answer);
      answer = `<p class="cours-answer"><strong>Réponse attendue${NB}:</strong> ${a.includes('$') ? inline(a) : esc(a)}</p>`;
    }
    const hint = e.hint1 ? `<details class="cours-hint"><summary>Un indice</summary><div>${rich(e.hint1)}</div></details>` : '';
    return `<article class="cours-card cours-exo">
<h3><span class="cours-exo-num">Exercice ${i + 1}</span> ${inline(e.title || '')}</h3>
<p class="cours-tier cours-tier-${e.tier || 1}">${TIER_NAMES[e.tier] || TIER_NAMES[1]}</p>
${rich(e.statement)}
${options}
${hint}
<details class="cours-solution"><summary>Voir la correction</summary><div class="cours-solution-body">${answer}${e.solution ? rich(e.solution) : ''}</div></details>
</article>`;
  }).join('\n');
}

// ---------------------------------------------------------------------------
// 7. Titres et descriptions
// ---------------------------------------------------------------------------
const usedTitles = new Map();
const usedDescs = new Map();
const warnings = [];

/** Partie principale d'un titre (avant « : », « , » ou « ( »), si elle compte au moins deux mots. */
function headOf(title) {
  const head = title.split(/\s*:\s+|,\s+|\s+\(|\s+—\s+/)[0].trim();
  return head.split(/\s+/).length >= 2 && head.length >= 10 ? head : title.replace(/\s*\([^)]*\)/g, '').trim();
}
const TITLE_MAX = 62;
/** Sujet du chapitre sans article initial : « Le raisonnement par récurrence » → « Raisonnement par récurrence ». */
const noArticle = (s) => ucFirst(String(s).replace(/^(le|la|les)\s+/i, '').replace(/^l['’]\s*/i, ''));
function chapterTitleTag(ch, lvl) {
  const t = noArticle(plain(ch.title));
  if (ch.id === ORAL2_ID) return frTypo('Oral 2 du CAPES : épreuve d’entretien et mises en situation');
  if (lvl.code === 'capes') {
    const cands = [`${t} — leçon d'oral du CAPES`, `${headOf(t)} — leçon d'oral du CAPES`, `${headOf(t)} — oral du CAPES`];
    let title = cands.find((c) => c.length <= TITLE_MAX) || `${truncate(headOf(t), TITLE_MAX - 18)} — oral du CAPES`;
    if (usedTitles.has(title)) title = title.replace(' — ', ` (${ch.num || ch.id}) — `);
    return frTypo(title);
  }
  const tt = t.replace(/\s+(de|en)\s+(L[123]|licence)\b/, '');
  const head = noArticle(headOf(tt));
  const etHead = head.split(/\s+et\s+/)[0];
  const colonHead = noArticle(tt.split(/\s*:\s+/)[0].replace(/\s*\([^)]*\)/g, ''));
  // Pas de « : » dans le sujet (le titre en contient déjà un) ; du plus précis au plus court.
  const subjects = [tt, head, etHead.length >= 8 ? etHead : '', colonHead.length >= 4 ? colonHead : '']
    .filter((x, i, arr) => x && !x.includes(':') && arr.indexOf(x) === i);
  const cands = [];
  for (const suffix of [' : cours et exercices corrigés', ' : cours et exercices', ' : cours']) {
    for (const subj of subjects) cands.push(`${subj} ${lvl.en}${suffix}`);
  }
  let title = cands.find((c) => c.length <= TITLE_MAX && !usedTitles.has(frTypo(c)))
    || `${truncate(head.replace(/\s*\([^)]*\)?/g, ''), TITLE_MAX - lvl.en.length - 9)} ${lvl.en} : cours`;
  if (usedTitles.has(frTypo(title))) title = title.replace(` ${lvl.en} :`, ` (${ch.num || ch.id}) ${lvl.en} :`);
  return frTypo(title);
}
function chapterDescription(ch, lvl, course, capes) {
  let objs = [];
  if (capes) objs = (capes.plan || []).map((p) => plain(p.part).replace(/^[IVX]+\.\s*/, ''));
  else if (course && course.objectives && course.objectives.length) objs = course.objectives.map(plain);
  else objs = (ch.skills || []).map(plain);
  objs = objs.map((o) => lcFirst(o.replace(/\.$/, '')));
  if (ch.id === ORAL2_ID) {
    return frTypo('Épreuve d’entretien du CAPES (oral 2), toutes disciplines : déroulé, laïcité et valeurs de la République, mises en situation commentées, questions du jury.');
  }
  const subj = noArticle(plain(ch.title));
  const head = capes
    ? `Leçon d'oral du CAPES de maths — ${subj}${NB}: plan détaillé, théorème clé démontré et remarques du jury. `
    : `${subj} ${lvl.en}${NB}: cours, méthodes et exercices corrigés gratuits. `;
  let d = head + (objs.length ? (capes ? 'Parties' : 'Objectifs') + `${NB}: ` + objs.join(', ') : plain(ch.description));
  d = truncate(d, 155);
  if (d.length < 110) d = truncate(`${d.replace(/…$/, '')} ${plain(ch.description)}`, 155);
  return frTypo(d);
}

/** Mots-clés pour relier un chapitre aux chapitres voisins des autres niveaux (maillage interne). */
const LINK_KEYS = ['fraction', 'relatif', 'puissance', 'racine', 'litteral', 'equation', 'inequation', 'pythagore', 'thales',
  'trigonometr', 'proportionnal', 'pourcentage', 'statistique', 'probabilit', 'fonction', 'algorithm', 'scratch', 'python',
  'vecteur', 'scalaire', 'suite', 'derive', 'exponentiel', 'logarithm', 'integra', 'primitive', 'complexe', 'arithmeti',
  'volume', 'aire', 'angle', 'triangle', 'symetri', 'translation', 'homothet', 'reperage', 'decima', 'division', 'second-degre',
  'variation', 'espace', 'denombrement', 'binomiale', 'variable-aleatoire', 'droite', 'cercle', 'semblable', 'rotation'];
const keysOf = (ch) => { const s = slugify(plain(ch.title) + ' ' + (ch.shortTitle || '')); return LINK_KEYS.filter((k) => s.includes(k)); };

// ---------------------------------------------------------------------------
// 7 bis. FAQ, contrôle des titres, FAQ des pages de niveau
// ---------------------------------------------------------------------------
/** Réponses en HTML simple (liens autorisés) ; le JSON-LD reçoit le texte brut. */
function faqHtml(faqs) {
  return `      <div class="cours-faq">
${faqs.map((f) => `        <details class="cours-faq-item"><summary><h3>${esc(frTypo(f.q))}</h3></summary><div><p>${frTypo(f.a)}</p></div></details>`).join('\n')}
      </div>`;
}
function faqLd(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') } }))
  };
}
function trackMeta(title, desc, url) {
  if (usedTitles.has(title)) warnings.push(`<title> en double : ${title}`);
  usedTitles.set(title, url);
  if (usedDescs.has(desc)) warnings.push(`description en double : ${desc}`);
  usedDescs.set(desc, url);
  if (title.length > 60 && !url.includes('/cours/')) warnings.push(`<title> de page pilier > 60 caractères : ${title}`);
}
const listFr = (arr) => (arr.length <= 1 ? arr.join('') : `${arr.slice(0, -1).join(', ')} et ${arr[arr.length - 1]}`);

function levelFaqs(lvl, items, groups) {
  const short = (it) => lcFirst(noArticle(plain(it.ch.shortTitle || headOf(it.title))));
  const faqs = [];
  if (lvl.code === 'capes') {
    faqs.push({ q: 'Que contient chaque leçon de CAPES ?', a: `Chaque leçon propose des prérequis, un plan en trois parties, un théorème clé démontré, des développements possibles pour l'oral et les remarques fréquentes du jury. ${items.length} leçons sont disponibles.` });
    faqs.push({ q: 'Les leçons de CAPES sont-elles gratuites ?', a: 'Oui, comme tout le site : sans inscription, sans publicité, sous licence libre CC BY-NC-SA.' });
    return faqs;
  }
  faqs.push({ q: `Quels chapitres sont au programme de maths ${lvl.en} ?`,
    a: `Le site couvre ${items.length} chapitres ${lvl.en}, regroupés en ${groups.length} domaine${groups.length > 1 ? 's' : ''}. ` + groups.map((g) => `${plain(g.name)} : ${listFr(g.items.map(short))}`).join('. ') + '.' });
  const t = tierNames(lvl.code);
  faqs.push({ q: `Comment s'entraîner en maths ${lvl.en} ?`,
    a: `Choisis un chapitre puis clique sur « S'entraîner » : les exercices sont générés à chaque tirage et corrigés immédiatement. Ils sont classés en quatre paliers (${t.map((n, i) => `${i + 1}. ${n}`).join(', ')}) ; un palier se débloque quand le précédent est maîtrisé.` });
  const exam = {
    '6eme': { q: 'Comment bien démarrer la 6e en maths ?', a: `La 6e consolide les acquis du CM2 : nombres décimaux, fractions comme quotient, calcul posé et mental, premières notions de géométrie. Quelques minutes de calcul mental par jour avec les <a href="../../index.html?mode=rituel&amp;level=6eme">questions flash</a> font une vraie différence, avant de passer au collège de cycle 4 en <a href="../5e/">5e</a>.` },
    '5eme': { q: 'Le programme de 5e compte-t-il pour le brevet ?', a: `Oui. L'épreuve de maths du brevet porte sur tout le cycle 4 (5e, 4e et 3e), et sa partie « automatismes » reprend des notions vues dès la 6e : priorités opératoires, fractions, relatifs et proportionnalité se travaillent donc dès la 5e. Voir <a href="../../${HUBS.brevet.dir}/">Réviser le brevet de maths</a>.` },
    '4eme': { q: 'Quels chapitres de 4e sont importants pour le brevet ?', a: `Le théorème de Pythagore, les puissances, le calcul littéral et les équations, les fractions et les pourcentages reviennent très souvent au brevet. Ils sont repris en 3e, mais les maîtriser dès la 4e allège beaucoup les révisions. Voir <a href="../../${HUBS.brevet.dir}/">Réviser le brevet de maths</a>.` },
    '3eme': { q: 'Comment réviser le brevet de maths en 3e ?', a: `Commence tôt par les automatismes (calcul, fractions, pourcentages, équations), puis travaille les chapitres qui tombent souvent : Pythagore, Thalès, trigonométrie, fonctions, probabilités et statistiques. Termine par des devoirs blancs en temps limité. Méthode et planning détaillés : <a href="../../${HUBS.brevet.dir}/">Réviser le brevet de maths</a>.` },
    '2nde': { q: 'Comment préparer la spécialité maths de première en seconde ?', a: `La spécialité s'appuie surtout sur le calcul littéral (identités remarquables, factorisation), les fonctions de référence et leurs variations, les équations et inéquations, et les vecteurs. Ce sont les chapitres de seconde à maîtriser en priorité avant d'aborder les <a href="../premiere/">cours de première</a>.` },
    '1ere': { q: 'Quelles épreuves de maths passe-t-on en première ?', a: `Depuis la session 2026, les élèves de première générale et technologique passent une épreuve anticipée de mathématiques (2 heures, sans calculatrice) : une partie d'automatismes sous forme de QCM puis des exercices. La spécialité maths, elle, est évaluée à l'écrit en terminale. Détails : <a href="../../${HUBS.bac.dir}/">Réussir le bac de maths</a>.` },
    tale: { q: 'Comment réviser le bac de maths en terminale ?', a: `L'épreuve écrite de spécialité dure 4 heures et porte sur tout le programme de terminale (en s'appuyant sur celui de première) : suites, fonctions et logarithme, intégration, géométrie dans l'espace, probabilités. Révise chapitre par chapitre, puis entraîne-toi sur des sujets complets en temps limité. Méthode détaillée : <a href="../../${HUBS.bac.dir}/">Réussir le bac de maths</a>.` }
  }[lvl.code];
  if (exam) faqs.push(exam);
  faqs.push({ q: `Les cours et exercices de maths ${lvl.de} sont-ils gratuits ?`,
    a: 'Oui : tout est gratuit, sans inscription et sans publicité. La progression est enregistrée uniquement sur ton appareil, aucune donnée personnelle n’est collectée.' });
  return faqs;
}

// ---------------------------------------------------------------------------
// 8. Construction
// ---------------------------------------------------------------------------
/** Encadré « Pour aller plus loin » d'une page chapitre : même domaine, autres niveaux, pages piliers. */
function relatedHtml(it, lvl, items, levelsData) {
  const { ch } = it;
  const idx = items.indexOf(it);
  const dom = ch.domainName || ch.domain;
  const same = items.filter((x, i) => x !== it && Math.abs(i - idx) > 1 && (x.ch.domainName || x.ch.domain) === dom).slice(0, 4);
  const cross = [];
  const si = SCHOOL_ORDER.indexOf(lvl.code);
  const keys = keysOf(ch);
  if (si >= 0 && keys.length) {
    for (const dist of [1, 2]) {
      for (const j of [si - dist, si + dist]) {
        const d = levelsData.find((x) => x.lvl.code === SCHOOL_ORDER[j]);
        if (!d) continue;
        const scored = d.items.map((x) => ({ x, n: keysOf(x.ch).filter((k) => keys.includes(k)).length })).filter((o) => o.n > 0)
          .sort((a, b) => b.n - a.n).slice(0, dist === 1 ? 2 : 1);
        for (const o of scored) if (cross.length < 4) cross.push({ it: o.x, lvl: d.lvl });
      }
    }
  }
  const hubs = [`<li><a href="../../${HUBS.exercices.dir}/">Exercices de maths corrigés, tous niveaux</a></li>`,
    `<li><a href="../../${HUBS.entrainement.dir}/">S'entraîner en ligne par paliers</a></li>`];
  if (lvl.code === '3eme' || lvl.code === '4eme') hubs.unshift(`<li><a href="../../${HUBS.brevet.dir}/">Réviser le brevet de maths</a></li>`);
  if (lvl.code === '1ere' || lvl.code === 'tale') hubs.unshift(`<li><a href="../../${HUBS.bac.dir}/">Réussir le bac de maths</a></li>`);
  if (lvl.code === 'capes') hubs.unshift(`<li><a href="../../${HUBS.oral2.dir}/">${esc(HUBS.oral2.name)}${NB}: déroulé, attentes du jury, méthode</a></li>`);
  const li = (x, l) => `<li><a href="${l === lvl ? '' : `../${l.slug}/`}${x.slug}.html">${esc(frTypo(x.title))}</a>${l === lvl ? '' : ` <span class="cours-related-lvl">${esc(l.label)}</span>`}</li>`;
  const cols = [];
  if (same.length) cols.push(`<div><p class="cours-related-title">Même thème ${esc(lvl.en)}</p><ul>${same.map((x) => li(x, lvl)).join('')}</ul></div>`);
  if (cross.length) cols.push(`<div><p class="cours-related-title">Ce thème dans les autres classes</p><ul>${cross.map((o) => li(o.it, o.lvl)).join('')}</ul></div>`);
  cols.push(`<div><p class="cours-related-title">Pour aller plus loin</p><ul>${hubs.join('')}<li><a href="./">Tous les chapitres ${esc(lvl.en)}</a></li></ul></div>`);
  return `    <nav class="cours-related" aria-label="Chapitres liés">
      ${cols.join('\n      ')}
    </nav>`;
}

// Registre des URL publiées : { idChapitre: [plus ancienne, …, actuelle] }.
// Toute URL antérieure d'un chapitre renvoie vers son URL actuelle ; celle d'un chapitre supprimé
// renvoie vers l'index de son niveau. Le registre est complété puis réécrit à chaque génération.
function registryRedirects(currentPaths) {
  const registry = fs.existsSync(URL_REGISTRY) ? JSON.parse(fs.readFileSync(URL_REGISTRY, 'utf8')) : {};
  const live = new Set(Object.values(currentPaths));
  const out = {};
  for (const [id, history] of Object.entries(registry)) {
    const to = currentPaths[id];
    if (!to) warnings.push(`Chapitre ${id} supprimé : ses anciennes URL renvoient vers l'index du niveau`);
    for (const from of history) {
      if (from === to) continue;
      if (live.has(from)) { warnings.push(`Redirection ${from} ignorée : URL reprise par un autre chapitre`); continue; }
      out[from] = to || `${from.split('/')[0]}/index.html`;
    }
  }
  let changed = false;
  for (const [id, p] of Object.entries(currentPaths)) {
    const history = registry[id] || (registry[id] = []);
    if (history[history.length - 1] !== p) {
      const i = history.indexOf(p);
      if (i >= 0) history.splice(i, 1);
      history.push(p);
      changed = true;
    }
  }
  if (changed) {
    const sorted = Object.fromEntries(Object.keys(registry).sort().map((k) => [k, registry[k]]));
    fs.writeFileSync(URL_REGISTRY, JSON.stringify(sorted, null, 1) + '\n');
    console.log('Registre des URL de cours mis à jour (scripts/cours_urls.json) : à committer avec cours/.');
  }
  return out;
}

function main() {
  const { win, missing } = loadData();
  MD = win.MathsRenderer.markdownToHtml.bind(win.MathsRenderer);
  const CH = win.MATHS_CHAPTERS || [];
  const COURSES = win.MATHS_COURSES || {};
  const EXOS = win.MATHS_EXERCISES || {};
  const CAPES = win.CAPES_LESSONS || [];

  snapshotPrevious();
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });

  const pages = []; // chemins relatifs à la racine (pour le sitemap)
  const currentPaths = {}; // id de chapitre → chemin relatif à cours/
  const levelsData = [];

  // Préparer chapitres et slugs
  for (const lvl of LEVELS) {
    const chapters = CH.filter((c) => c.level === lvl.code);
    if (!chapters.length) { warnings.push(`Niveau ${lvl.code} : aucun chapitre trouvé`); continue; }
    const used = new Set();
    const items = chapters.map((ch) => {
      const title = plain(ch.title);
      let slug = truncSlug(slugify(headOf(title)), 55);
      if (slug.length < 8 || used.has(slug)) slug = truncSlug(slugify(title.replace(/\s*\([^)]*\)/g, '')), 60);
      if (used.has(slug)) slug = `${slug}-${slugify(ch.id)}`;
      used.add(slug);
      currentPaths[ch.id] = `${lvl.slug}/${slug}.html`;
      return { ch, slug, title };
    });
    levelsData.push({ lvl, items });
  }

  // Pages chapitre
  for (const { lvl, items } of levelsData) {
    const lvlDir = path.join(OUT, lvl.slug);
    fs.mkdirSync(lvlDir, { recursive: true });
    items.forEach((it, idx) => {
      const { ch, slug, title } = it;
      currentPage = `${lvl.slug}/${slug}`;
      const course = COURSES[ch.id];
      const capes = CAPES.find((l) => l.id.toLowerCase() === ch.id.toLowerCase());
      const url = `${SITE}/cours/${lvl.slug}/${slug}.html`;
      const h1 = ch.id === ORAL2_ID
        ? `<span class="cours-title-kicker">Oral 2 du CAPES, toutes disciplines${NB}:</span> ${esc(frTypo(title))}`
        : lvl.code === 'capes'
        ? `<span class="cours-title-kicker">Leçon d'oral du CAPES${NB}:</span> ${esc(frTypo(title))}`
        : `<span class="cours-title-kicker">Cours et exercices corrigés ${esc(lvl.de)}${NB}:</span> ${esc(frTypo(title))}`;
      const titleTag = chapterTitleTag(ch, lvl);
      const desc = chapterDescription(ch, lvl, course, capes);
      it.titleTag = titleTag; it.desc = desc; it.url = url;
      if (usedTitles.has(titleTag)) warnings.push(`<title> en double : ${titleTag}`);
      usedTitles.set(titleTag, url);
      if (usedDescs.has(desc)) warnings.push(`description en double : ${desc}`);
      usedDescs.set(desc, url);

      const secs = courseSections(ch, course, capes);
      const exos = pickExercises(EXOS[ch.id]);
      if (exos.length) secs.push({ id: 'exercices', title: 'Exercices corrigés', html: exercisesHtml(exos) });
      if (exos.length < 2) warnings.push(`${ch.id} : seulement ${exos.length} exercice(s) corrigé(s)`);

      const app = `../../index.html?chapitre=${encodeURIComponent(ch.id)}`;
      const isSchool = lvl.cycle === 'college' || lvl.cycle === 'lycee';
      const hasFlash = course && (course.flashcards || []).length;
      const ctas = `      <div class="cours-cta">
        <a class="btn-primary cours-cta-main" href="${app}">🎯 S'entraîner sur ce chapitre</a>
${isSchool ? `        <a class="btn-secondary cours-cta-alt" href="../../index.html?mode=rituel&amp;chapitre=${encodeURIComponent(ch.id)}">⏱️ Rituel flash</a>\n` : ''}${hasFlash ? `        <a class="btn-secondary cours-cta-alt" href="../../index.html?mode=flashcards&amp;chapitre=${encodeURIComponent(ch.id)}">🗂️ Flashcards</a>\n` : ''}      </div>`;

      const crumbs = [
        { name: 'Accueil', href: '../../index.html', url: `${SITE}/` },
        { name: 'Cours', href: '../', url: `${SITE}/cours/` },
        { name: lvl.label, href: './', url: `${SITE}/cours/${lvl.slug}/` },
        { name: plain(ch.shortTitle || title), url }
      ];
      const prev = items[idx - 1];
      const next = items[idx + 1];
      const toc = secs.map((s) => `<li><a href="#${s.id}">${s.title}</a></li>`).join('');

      const body = `${breadcrumbHtml(crumbs)}

    <header class="cours-hero">
      <p class="landing-tag">${esc(lvl.label)} · ${esc(ch.domainName || ch.domain || 'Mathématiques')} · ${esc(ch.num || ch.id)}</p>
      <h1 class="cours-title">${h1}</h1>
      <p class="cours-lead">${inline(ch.description)}</p>
${ctas}
    </header>

    <nav class="cours-toc" aria-label="Sommaire du chapitre">
      <p class="cours-toc-title">Sommaire</p>
      <ol>${toc}</ol>
    </nav>

${secs.map((s) => section(s.id, s.title, s.html)).join('\n\n')}

    <aside class="cours-cta-box" aria-label="Entraînement">
      <p class="cours-cta-box-title">Prêt à t'entraîner${NNB}?</p>
      <p>Exercices générés à l'infini, corrigés pas à pas et classés en quatre paliers de difficulté, gratuitement et sans inscription.</p>
${ctas}
    </aside>

${relatedHtml(it, lvl, items, levelsData)}

    <nav class="cours-pager" aria-label="Chapitres voisins">
      ${prev ? `<a class="cours-pager-link cours-pager-prev" href="${prev.slug}.html" rel="prev"><span>← Chapitre précédent</span><strong>${esc(frTypo(prev.title))}</strong></a>` : '<span></span>'}
      <a class="cours-pager-link cours-pager-up" href="./"><span>Tous les chapitres</span><strong>${esc(lvl.label)}</strong></a>
      ${next ? `<a class="cours-pager-link cours-pager-next" href="${next.slug}.html" rel="next"><span>Chapitre suivant →</span><strong>${esc(frTypo(next.title))}</strong></a>` : '<span></span>'}
    </nav>`;

      const teaches = (capes ? (capes.plan || []).map((p) => plain(p.part))
        : (course && course.objectives && course.objectives.length ? course.objectives : ch.skills || []).map(plain)).filter(Boolean);
      const ld = {
        '@context': 'https://schema.org',
        '@type': 'LearningResource',
        name: `${title} — ${lvl.code === 'capes' ? 'leçon de CAPES' : 'cours et exercices corrigés ' + lvl.de}`,
        headline: title,
        description: desc,
        url,
        inLanguage: 'fr',
        educationalLevel: lvl.edu,
        learningResourceType: ['Cours', 'Exercices corrigés'],
        teaches,
        about: { '@type': 'Thing', name: plain(ch.domainName || ch.domain || 'Mathématiques') },
        isAccessibleForFree: true,
        dateModified: DATE_TOKEN,
        author: { '@type': 'Person', name: AUTHOR, jobTitle: 'Professeur de mathématiques' },
        publisher: { '@type': 'Organization', name: BRAND, url: `${SITE}/`, logo: `${SITE}/assets/logo.png` },
        isPartOf: { '@type': 'WebSite', name: BRAND, url: `${SITE}/` }
      };
      const html = layout({ depth: 2, title: titleTag, description: desc, canonical: url, ogType: 'article', jsonld: [ld, breadcrumbLd(crumbs)], body });
      writeStable(path.join(lvlDir, `${slug}.html`), html, `/cours/${lvl.slug}/${slug}.html`);
      pages.push({ loc: `/cours/${lvl.slug}/${slug}.html`, priority: '0.7' });
    });
  }

  // Pages niveau
  for (const { lvl, items } of levelsData) {
    currentPage = `${lvl.slug}/index`;
    const url = `${SITE}/cours/${lvl.slug}/`;
    const isCapes = lvl.code === 'capes';
    const h1 = isCapes ? 'Préparation au CAPES de mathématiques : leçons d’oral' : `Cours et exercices de maths ${lvl.en}, gratuits et corrigés`;
    const titleTag = frTypo(isCapes ? 'Leçons d\'oral du CAPES de maths : plans et démonstrations' : `Maths ${lvl.en} : cours et exercices corrigés gratuits`);
    const introTail = lvl.intro.replace(/^[^:]*:\s*/, '');
    const desc = frTypo(truncate(isCapes
      ? `${items.length} leçons d'oral du CAPES de mathématiques : ${introTail}`
      : `Maths ${lvl.en} : ${items.length} chapitres de cours avec méthodes et exercices corrigés, gratuits et sans inscription. ${ucFirst(introTail)}`, 155));
    const groups = [];
    for (const it of items) {
      const g = it.ch.domainName || it.ch.domain || 'Mathématiques';
      let grp = groups.find((x) => x.name === g);
      if (!grp) groups.push(grp = { name: g, items: [] });
      grp.items.push(it);
    }
    const crumbs = [
      { name: 'Accueil', href: '../../index.html', url: `${SITE}/` },
      { name: 'Cours', href: '../', url: `${SITE}/cours/` },
      { name: lvl.label, url }
    ];
    const faqs = levelFaqs(lvl, items, groups);
    const li = SCHOOL_ORDER.indexOf(lvl.code);
    const prevL = li > 0 ? levelsData.find((d) => d.lvl.code === SCHOOL_ORDER[li - 1]) : null;
    const nextL = li >= 0 && li < SCHOOL_ORDER.length - 1 ? levelsData.find((d) => d.lvl.code === SCHOOL_ORDER[li + 1]) : null;
    const examLink = ['3eme', '4eme', '5eme'].includes(lvl.code) ? `<li><a href="../../${HUBS.brevet.dir}/">Réviser le brevet de maths</a> : méthode, programme, planning</li>`
      : (lvl.code === '1ere' || lvl.code === 'tale') ? `<li><a href="../../${HUBS.bac.dir}/">Réussir le bac de maths</a> : épreuves, chapitres clés, méthode</li>`
      : lvl.code === 'capes' ? `<li><a href="../../${HUBS.oral2.dir}/">${esc(HUBS.oral2.name)}</a> : déroulé, attentes du jury, mises en situation</li>` : '';
    const body = `${breadcrumbHtml(crumbs)}

    <header class="cours-hero">
      <p class="landing-tag">${esc(CYCLES.find((c) => c.id === lvl.cycle).name)} · ${esc(lvl.label)} · ${items.length} chapitres</p>
      <h1 class="cours-title">${h1}</h1>
      <p class="cours-lead">${esc(frTypo(lvl.intro))} Chaque chapitre contient le cours complet, des méthodes rédigées et des exercices corrigés${isCapes ? '' : `, puis renvoie vers des exercices générés à l'infini pour s'entraîner`}.</p>
      <div class="cours-cta">
        <a class="btn-primary cours-cta-main" href="../../index.html?level=${encodeURIComponent(lvl.app)}">🎯 S'entraîner ${isCapes ? 'pour le CAPES' : esc(lvl.en)}</a>
${lvl.cycle === 'college' || lvl.cycle === 'lycee' ? `        <a class="btn-secondary cours-cta-alt" href="../../index.html?mode=rituel&amp;level=${encodeURIComponent(lvl.app)}">⏱️ Questions flash</a>\n` : ''}      </div>
    </header>

${groups.map((g, gi) => `    <section class="cours-section" id="domaine-${gi + 1}" aria-labelledby="domaine-${gi + 1}-titre">
      <h2 id="domaine-${gi + 1}-titre">${esc(frTypo(g.name))}</h2>
      <ul class="cours-chapter-grid">
${g.items.map((it) => `        <li><a class="cours-chapter-card" href="${it.slug}.html">
          <span class="topic-num">${esc(it.ch.num || it.ch.id)}</span>
          <span class="cours-chapter-text"><strong>${esc(frTypo(it.title))}</strong><span>${esc(truncate(plain(it.ch.description), 150))}</span></span>
        </a></li>`).join('\n')}
      </ul>
    </section>`).join('\n\n')}

${isCapes ? '' : section('methode', `Comment travailler les maths ${esc(lvl.en)}${NNB}?`, `      <ol class="cours-list">
        <li><strong>Lire le cours du chapitre</strong> et refaire seul les exemples rédigés de la partie «${NB}Méthodes${NB}».</li>
        <li><strong>Chercher les exercices corrigés</strong> de la page avant d'ouvrir la correction, puis comparer la rédaction.</li>
        <li><strong>S'entraîner par paliers</strong> dans l'application${NB}: ${tierNames(lvl.code).map((n, i) => `palier ${i + 1} «${NB}${esc(n)}${NB}»`).join(', ')}. Les exercices changent à chaque tirage.</li>
        <li><strong>Mémoriser</strong> les définitions et formules avec les flashcards, quelques minutes par jour.</li>
      </ol>`)}

${section('faq', `Questions fréquentes sur les maths ${esc(lvl.en)}`, faqHtml(faqs))}

    <nav class="cours-related" aria-label="Autres ressources">
      <div><p class="cours-related-title">Autres classes</p><ul>${prevL ? `<li><a href="../${prevL.lvl.slug}/">Cours et exercices ${esc(prevL.lvl.en)}</a> (classe précédente)</li>` : ''}${nextL ? `<li><a href="../${nextL.lvl.slug}/">Cours et exercices ${esc(nextL.lvl.en)}</a> (classe suivante)</li>` : ''}<li><a href="../">Tous les cours de maths</a></li></ul></div>
      <div><p class="cours-related-title">Pages utiles</p><ul>${examLink}<li><a href="../../${HUBS.exercices.dir}/">Exercices de maths corrigés</a>, tous niveaux</li><li><a href="../../${HUBS.entrainement.dir}/">Entraînement en ligne</a> : paliers, rituels, flashcards</li></ul></div>
    </nav>

    <nav class="cours-pager" aria-label="Autres niveaux">
${LEVELS.filter((l) => levelsData.some((d) => d.lvl === l)).map((l) => `      <a class="nav-portal-btn${l === lvl ? ' active' : ''}" href="../${l.slug}/"${l === lvl ? ' aria-current="page"' : ''}>${esc(l.label)}</a>`).join('\n')}
    </nav>`;
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: h1,
      description: desc,
      url,
      inLanguage: 'fr',
      educationalLevel: lvl.edu,
      isAccessibleForFree: true,
      isPartOf: { '@type': 'WebSite', name: BRAND, url: `${SITE}/` },
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: items.length,
        itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.title, url: it.url }))
      }
    };
    trackMeta(titleTag, desc, url);
    writeStable(path.join(OUT, lvl.slug, 'index.html'),
      layout({ depth: 2, title: titleTag, description: desc, canonical: url, jsonld: [ld, faqLd(faqs), breadcrumbLd(crumbs)], body }), `/cours/${lvl.slug}/`);
    pages.push({ loc: `/cours/${lvl.slug}/`, priority: '0.8' });
  }

  // Page d'accueil des cours (pilier « cours de maths »)
  {
    currentPage = 'index';
    const total = levelsData.reduce((n, d) => n + d.items.length, 0);
    const school = levelsData.filter((d) => SCHOOL_ORDER.includes(d.lvl.code));
    const nSchool = school.reduce((n, d) => n + d.items.length, 0);
    const url = `${SITE}/cours/`;
    const titleTag = frTypo('Cours de maths gratuits en ligne, de la 6e à la licence');
    const desc = frTypo(`${total} cours de maths gratuits, du collège au lycée, à la licence et au CAPES : leçons complètes, méthodes rédigées et exercices corrigés.`);
    const crumbs = [{ name: 'Accueil', href: '../index.html', url: `${SITE}/` }, { name: 'Cours', url }];
    const faqs = [
      { q: 'Les cours de maths sont-ils vraiment gratuits ?', a: `Oui. Les ${total} cours, les exercices corrigés et l'application d'entraînement sont gratuits, sans publicité et sans inscription. Ils sont conçus par un professeur de mathématiques et publiés sous licence libre CC BY-NC-SA.` },
      { q: 'Les cours sont-ils conformes aux programmes officiels ?', a: `Chaque chapitre suit le programme de sa classe : cycle 3 pour la 6e (nouveau programme), cycle 4 de la 5e à la 3e, programmes de seconde et de spécialité mathématiques en première et terminale, avec l'option mathématiques expertes.` },
      { q: 'Comment trouver le cours dont j’ai besoin ?', a: `Choisis ta classe ci-dessous, puis le chapitre. Chaque page de cours commence par les objectifs, présente les définitions et propriétés, des méthodes rédigées pas à pas, les pièges fréquents, des questions de révision et des exercices corrigés.` },
      { q: 'Où trouver des exercices pour s’entraîner après le cours ?', a: `Chaque cours se termine par des exercices corrigés et un bouton « S'entraîner » qui ouvre des exercices générés à l'infini, classés en quatre paliers. La page <a href="../${HUBS.exercices.dir}/">Exercices de maths corrigés</a> les regroupe par classe.` }
    ];
    const body = `${breadcrumbHtml(crumbs)}

    <header class="cours-hero">
      <p class="landing-tag">📚 ${total} chapitres en accès libre</p>
      <h1 class="cours-title">Cours de maths gratuits, de la 6e à la licence</h1>
      <p class="cours-lead">${nSchool} cours de mathématiques pour le collège et le lycée, et ${total - nSchool} pour la licence et le CAPES. Chaque leçon réunit le cours complet, des méthodes rédigées pas à pas, les pièges à éviter et des exercices corrigés. Pour s'entraîner ensuite, chaque page renvoie vers des exercices interactifs qui se renouvellent à chaque tirage.</p>
      <div class="cours-cta">
        <a class="btn-primary cours-cta-main" href="../index.html">🎯 Ouvrir l'application</a>
        <a class="btn-secondary cours-cta-alt" href="../${HUBS.exercices.dir}/">✏️ Exercices corrigés</a>
      </div>
    </header>

    <nav class="cours-toc" aria-label="Accès rapide par classe">
      <p class="cours-toc-title">Accès rapide</p>
      <ol>${levelsData.map(({ lvl }) => `<li><a href="${lvl.slug}/">${lvl.code === 'capes' ? 'CAPES de mathématiques' : `Cours de maths ${esc(lvl.en)}`}</a></li>`).join('')}</ol>
    </nav>

${CYCLES.map((cy) => {
    const lv = levelsData.filter((d) => d.lvl.cycle === cy.id);
    if (!lv.length) return '';
    return `    <section class="cours-section" id="${cy.id}" aria-labelledby="${cy.id}-titre">
      <h2 id="${cy.id}-titre">${cy.id === 'concours' ? esc(cy.name) : `Cours de maths ${cy.id === 'licence' ? 'en licence' : 'au ' + esc(cy.name.toLowerCase())}`}</h2>
      <p class="cours-note">${esc(frTypo(cy.desc))}</p>
      <div class="cours-level-grid">
${lv.map(({ lvl, items }) => `        <article class="cours-level-card">
          <h3><a href="${lvl.slug}/">${lvl.code === 'capes' ? 'CAPES de mathématiques' : esc(lvl.label)}</a> <span class="cours-count">${items.length} chapitres</span></h3>
${(lvl.cycle === 'college' ? CATEGORIES_COLLEGE : CATEGORIES).map((cat) => {
    const list = items.filter((it) => categoryFor(it, lvl) === cat.id);
    if (!list.length) return '';
    return `          <h4 class="cours-cat-title">${esc(cat.name)}</h4>
          <ul>
${list.map((it) => `            <li><a href="${lvl.slug}/${it.slug}.html">${esc(frTypo(it.title))}</a></li>`).join('\n')}
          </ul>`;
  }).filter(Boolean).join('\n')}
        </article>`).join('\n')}
      </div>
    </section>`;
  }).filter(Boolean).join('\n\n')}

${section('aussi', 'Réviser un examen, s’entraîner', `      <ul class="cours-list">
        <li><a href="../${HUBS.brevet.dir}/">Réviser le brevet de maths</a> : l'épreuve, les automatismes, les chapitres clés et un planning de révision.</li>
        <li><a href="../${HUBS.bac.dir}/">Réussir le bac de maths</a> : l'épreuve de spécialité, l'épreuve anticipée de première et la méthode.</li>
        <li><a href="../${HUBS.exercices.dir}/">Exercices de maths corrigés</a> : des exemples par classe et des liens vers chaque chapitre.</li>
        <li><a href="../${HUBS.entrainement.dir}/">Entraînement maths en ligne</a> : paliers de difficulté, questions flash et flashcards.</li>
        <li><a href="../${HUBS.oral2.dir}/">${esc(HUBS.oral2.name)}</a> : l'oral commun à toutes les disciplines, laïcité, valeurs de la République et mises en situation.</li>
      </ul>`)}

${section('faq', 'Questions fréquentes', faqHtml(faqs))}`;
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Cours de maths gratuits, de la 6e à la licence',
      description: desc,
      url,
      inLanguage: 'fr',
      isAccessibleForFree: true,
      isPartOf: { '@type': 'WebSite', name: BRAND, url: `${SITE}/` },
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: levelsData.length,
        itemListElement: levelsData.map(({ lvl }, i) => ({ '@type': 'ListItem', position: i + 1, name: lvl.code === 'capes' ? 'CAPES de mathématiques' : `Cours de maths ${lvl.en}`, url: `${SITE}/cours/${lvl.slug}/` }))
      }
    };
    trackMeta(titleTag, desc, url);
    writeStable(path.join(OUT, 'index.html'),
      layout({ depth: 1, title: titleTag, description: desc, canonical: url, jsonld: [ld, faqLd(faqs), breadcrumbLd(crumbs)], body }), '/cours/');
    pages.unshift({ loc: '/cours/', priority: '0.9' });
  }

  // Pages piliers
  const hubPages = buildHubs({ levelsData, COURSES, EXOS });

  // Pages relais des anciennes URL (hors sitemap)
  const redirects = { ...registryRedirects(currentPaths), ...REDIRECTS };
  for (const [from, to] of Object.entries(redirects)) {
    if (!fs.existsSync(path.join(OUT, to))) { warnings.push(`Redirection ${from} : cible absente ${to}`); continue; }
    if (fs.existsSync(path.join(OUT, from))) { warnings.push(`Redirection ${from} : l'ancienne URL est de nouveau une page`); continue; }
    const url = `${SITE}/cours/${to.replace(/index\.html$/, '')}`;
    fs.mkdirSync(path.dirname(path.join(OUT, from)), { recursive: true });
    fs.writeFileSync(path.join(OUT, from), `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
${CSP_META}
<title>Page déplacée — ${BRAND}</title>
<meta name="robots" content="noindex">
<link rel="canonical" href="${url}">
<meta http-equiv="refresh" content="0; url=${url}">
</head>
<body>
<p>Cette page a été déplacée : <a href="${url}">${url}</a>.</p>
</body>
</html>
`);
  }

  // Sitemap
  const rootPages = [
    { loc: '/', changefreq: 'weekly', priority: '1.0' },
    { loc: '/rituels.html', changefreq: 'monthly', priority: '0.9' },
    { loc: '/brevet.html', changefreq: 'monthly', priority: '0.9' },
    { loc: '/bac.html', changefreq: 'monthly', priority: '0.9' },
    { loc: '/enseignants.html', changefreq: 'monthly', priority: '0.85' },
    { loc: '/parents.html', changefreq: 'monthly', priority: '0.85' },
    { loc: '/a-propos.html', changefreq: 'yearly', priority: '0.5' },
    { loc: '/mentions-legales.html', changefreq: 'yearly', priority: '0.3' }
  ];
  const all = rootPages.slice(0, 1).concat(hubPages.map((loc) => ({ loc, changefreq: 'monthly', priority: '0.9' })), rootPages.slice(1),
    pages.map((p) => ({ ...p, changefreq: 'monthly' })));
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Généré par scripts/build_seo_pages.js — ne pas modifier à la main, relancer le script. -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all.map((p) => `  <url>
    <loc>${SITE}${p.loc}</loc>
    <lastmod>${pageDates.get(p.loc) || gitDate(p.loc === '/' ? 'index.html' : p.loc.slice(1))}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;
  fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemap);

  // robots.txt
  const robotsPath = path.join(ROOT, 'robots.txt');
  const robots = fs.existsSync(robotsPath) ? fs.readFileSync(robotsPath, 'utf8') : 'User-agent: *\nAllow: /\n';
  if (!/^Sitemap:\s*https:\/\/etabli-des-maths\.fr\/sitemap\.xml/m.test(robots)) {
    fs.writeFileSync(robotsPath, robots.replace(/\s*$/, '\n') + `\nSitemap: ${SITE}/sitemap.xml\n`);
  }

  // Résumé
  const nChap = levelsData.reduce((n, d) => n + d.items.length, 0);
  const longTitles = [...usedTitles.keys()].filter((t) => t.length > TITLE_MAX);
  const longDescs = [...usedDescs.keys()].filter((d) => d.length > 155);
  if (longDescs.length) console.log(`descriptions > 155 caractères : ${longDescs.length}`), longDescs.forEach((d) => console.log(`  - (${d.length}) ${d}`));
  console.log(`\n=== build_seo_pages.js — ${BUILD_DATE} ===`);
  if (missing.length) console.log(`Fichiers de données absents (ignorés) : ${missing.join(', ')}`);
  for (const { lvl, items } of levelsData) console.log(`  ${lvl.slug.padEnd(10)} ${String(items.length).padStart(3)} chapitres`);
  console.log(`Pages générées : ${pages.length} (1 sommaire + ${levelsData.length} niveaux + ${nChap} chapitres) + ${hubPages.length} pages piliers`);
  console.log(`sitemap.xml : ${all.length} URL`);
  console.log(`Erreurs KaTeX : ${katexErrors.length}`);
  katexErrors.slice(0, 40).forEach((e) => console.log(`  - [${e.page}] ${e.tex}${e.err ? ' — ' + e.err : ''}`));
  if (longTitles.length) console.log(`<title> > ${TITLE_MAX} caractères : ${longTitles.length}`), longTitles.forEach((t) => console.log(`  - (${t.length}) ${t}`));
  if (warnings.length) console.log(`Avertissements : ${warnings.length}`), warnings.forEach((w) => console.log(`  - ${w}`));
}

// ---------------------------------------------------------------------------
// 9. Pages piliers (hubs) : exercices, brevet, bac, entraînement
// ---------------------------------------------------------------------------
/** Carte d'exercice corrigé autonome (énoncé, indice, correction repliée). */
function exerciseCard(e, label, chapterLink) {
  const html = exercisesHtml([e]).replace(/<span class="cours-exo-num">Exercice 1<\/span>/, `<span class="cours-exo-num">${esc(label)}</span>`);
  return html.replace(/<\/article>$/, `${chapterLink ? `<p class="hub-exo-more">${chapterLink}</p>` : ''}</article>`);
}

function buildHubs({ levelsData, EXOS }) {
  const written = [];
  const byId = new Map();
  for (const d of levelsData) for (const it of d.items) byId.set(it.ch.id, { it, lvl: d.lvl });
  const ref = (id) => { const r = byId.get(id); if (!r) throw new Error(`Chapitre inconnu dans une page pilier : ${id}`); return r; };
  const href = (id) => { const { it, lvl } = ref(id); return `../cours/${lvl.slug}/${it.slug}.html`; };
  const app = (id) => `../index.html?chapitre=${encodeURIComponent(id)}`;
  const name = (id) => esc(frTypo(ref(id).it.title));
  const shortName = (id) => esc(frTypo(noArticle(plain(ref(id).it.ch.shortTitle || headOf(ref(id).it.title)))));
  const link = (id, text) => `<a href="${href(id)}">${text || name(id)}</a>`;
  const school = levelsData.filter((d) => SCHOOL_ORDER.includes(d.lvl.code));
  const higher = levelsData.filter((d) => !SCHOOL_ORDER.includes(d.lvl.code));

  // Exercices d'exemple : de préférence absents de la page du chapitre (pas de contenu dupliqué).
  const usedExos = new Set();
  function sample(id, tiers) {
    const all = (EXOS[id] || []).filter((e) => e && typeof e.statement === 'string' && e.statement.trim() && (e.solution || e.answer != null));
    const shown = pickExercises(EXOS[id]);
    const pool = [...all.filter((e) => !shown.includes(e)), ...shown].filter((e) => !usedExos.has(e));
    const e = tiers.map((t) => pool.find((x) => (x.tier || 1) === t)).find(Boolean) || pool[0];
    if (!e) throw new Error(`Aucun exercice disponible pour ${id}`);
    usedExos.add(e);
    return e;
  }
  const sampleCard = (id, tiers, label) => {
    currentPage = `hub/${id}`;
    const { lvl } = ref(id);
    return exerciseCard(sample(id, tiers), label || `Exemple · ${lvl.label}`,
      `Chapitre${NB}: ${link(id)} · <a href="${app(id)}">s'entraîner sur des exercices du même type</a>`);
  };
  const chapterList = (ids) => `<ul class="hub-chapters">${ids.map((id) => `<li>${link(id)}<a class="hub-train" href="${app(id)}" aria-label="S'entraîner : ${shortName(id)}">S'entraîner</a></li>`).join('')}</ul>`;
  const table = (head, rows, caption) => `<div class="hub-table-wrap"><table class="hub-table">${caption ? `<caption>${caption}</caption>` : ''}<thead><tr>${head.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c, i) => (i === 0 ? `<th scope="row">${c}</th>` : `<td>${c}</td>`)).join('')}</tr>`).join('')}</tbody></table></div>`;
  const card = (title, html) => `<article class="cours-card"><h3>${title}</h3>${html}</article>`;

  function writeHub(h) {
    const url = `${SITE}/${h.dir}/`;
    const crumbs = [{ name: 'Accueil', href: '../index.html', url: `${SITE}/` }, { name: h.crumb, url }];
    trackMeta(h.title, h.desc, url);
    const toc = h.sections.map((s) => `<li><a href="#${s.id}">${s.title}</a></li>`).join('') + '<li><a href="#faq">Questions fréquentes</a></li>';
    const body = `${breadcrumbHtml(crumbs)}

    <header class="cours-hero hub-hero">
      <p class="landing-tag">${h.kicker}</p>
      <h1 class="cours-title">${h.h1}</h1>
      <p class="cours-lead">${h.lead}</p>
      <div class="cours-cta">
${h.ctas.map((c, i) => `        <a class="${i === 0 ? 'btn-primary cours-cta-main' : 'btn-secondary cours-cta-alt'}" href="${c[1]}">${c[0]}</a>`).join('\n')}
      </div>
${h.facts ? `      <ul class="hub-facts">${h.facts.map((f) => `<li><strong>${f[0]}</strong><span>${f[1]}</span></li>`).join('')}</ul>\n` : ''}    </header>

    <nav class="cours-toc" aria-label="Sommaire de la page">
      <p class="cours-toc-title">Sommaire</p>
      <ol>${toc}</ol>
    </nav>

${h.sections.map((s) => section(s.id, s.title, s.html)).join('\n\n')}

${section('faq', 'Questions fréquentes', faqHtml(h.faqs))}

    <aside class="cours-cta-box" aria-label="Commencer">
      <p class="cours-cta-box-title">${h.boxTitle}</p>
      <p>${h.boxText || 'Gratuit, sans inscription et sans publicité. La progression reste sur ton appareil.'}</p>
      <div class="cours-cta">
${h.ctas.slice(0, 2).map((c, i) => `        <a class="${i === 0 ? 'btn-primary cours-cta-main' : 'btn-secondary cours-cta-alt'}" href="${c[1]}">${c[0]}</a>`).join('\n')}
      </div>
    </aside>

    <nav class="cours-related" aria-label="Autres pages">
      <div><p class="cours-related-title">Les autres pages</p><ul>${Object.entries(HUBS).filter(([k]) => k !== h.key).map(([, v]) => `<li><a href="../${v.dir}/">${esc(v.name)}</a></li>`).join('')}<li><a href="../cours/">Cours de maths, de la 6e à la licence</a></li></ul></div>
      <div><p class="cours-related-title">Par classe</p><ul class="hub-inline">${levelsData.map(({ lvl }) => `<li><a href="../cours/${lvl.slug}/">${esc(lvl.label)}</a></li>`).join('')}</ul></div>
    </nav>`;
    const ld = Object.assign({
      '@context': 'https://schema.org',
      '@type': h.ldType || 'WebPage',
      name: h.h1.replace(/<[^>]+>/g, ''),
      description: h.desc,
      url,
      inLanguage: 'fr',
      isAccessibleForFree: true,
      dateModified: DATE_TOKEN,
      author: { '@type': 'Person', name: AUTHOR, jobTitle: 'Professeur de mathématiques' },
      publisher: { '@type': 'Organization', name: BRAND, url: `${SITE}/`, logo: `${SITE}/assets/logo.png` },
      isPartOf: { '@type': 'WebSite', name: BRAND, url: `${SITE}/` }
    }, h.ld || {});
    fs.mkdirSync(path.join(ROOT, h.dir), { recursive: true });
    const og = fs.existsSync(path.join(ROOT, h.dir, 'og.png')) ? `${url}og.png` : undefined;
    writeStable(path.join(ROOT, h.dir, 'index.html'), layout({ depth: 1, title: h.title, description: h.desc, canonical: url,
      jsonld: [ld, faqLd(h.faqs), breadcrumbLd(crumbs)], body, active: h.key, tag: h.tag, ogImage: og }), `/${h.dir}/`);
    written.push(`/${h.dir}/`);
  }

  // ---- 9.1 Exercices de maths corrigés ---------------------------------------------------
  {
    const samples = { '6eme': ['6N7', [3, 2]], '5eme': ['5N5', [3, 2]], '4eme': ['4G1', [4, 3]], '3eme': ['N1', [3, 2]],
      '2nde': ['2N5', [3, 2]], '1ere': ['1A6', [3, 2]], tale: ['TA3', [3, 2]] };
    const nChap = school.reduce((n, d) => n + d.items.length, 0);
    const levelSections = school.map(({ lvl, items }) => {
      const [sid, tiers] = samples[lvl.code];
      return { id: `exercices-${lvl.slug}`, title: `Exercices de maths ${esc(lvl.en)}`, html: `      <p class="cours-note">${items.length} chapitres ${esc(lvl.en)}. Le lien du chapitre ouvre le cours et ses exercices corrigés rédigés${NB}; «${NB}S'entraîner${NB}» ouvre des exercices générés à l'infini, corrigés immédiatement. <a href="../cours/${lvl.slug}/">Tous les cours ${esc(lvl.en)}</a>.</p>
      ${sampleCard(sid, tiers, `Exemple corrigé · ${lvl.label}`)}
      <details class="hub-more" ${['3eme', 'tale'].includes(lvl.code) ? 'open' : ''}><summary>Les ${items.length} chapitres d'exercices ${esc(lvl.en)}</summary><div>${chapterList(items.map((x) => x.ch.id))}</div></details>` };
    });
    writeHub({
      key: 'exercices', dir: HUBS.exercices.dir, crumb: 'Exercices de maths', tag: 'Exercices',
      title: frTypo('Exercices de maths corrigés gratuits, de la 6e au bac'),
      desc: frTypo(`Exercices de maths corrigés gratuits pour ${nChap} chapitres, de la 6e à la terminale : énoncés avec correction détaillée et exercices générés à l'infini.`),
      kicker: '✏️ De la 6e à la terminale · corrigés',
      h1: 'Exercices de maths corrigés, de la 6e à la terminale',
      lead: `Pour chaque chapitre du collège et du lycée${NB}: des exercices corrigés rédigés par un professeur, puis des exercices interactifs qui se renouvellent à chaque tirage, avec correction immédiate. ${nChap} chapitres, quatre niveaux de difficulté, aucun compte à créer.`,
      ctas: [['🎯 S’entraîner maintenant', '../index.html'], ['📚 Voir les cours', '../cours/'], ['📝 Brevet blanc', '../brevet.html']],
      facts: [[String(nChap), 'chapitres du collège et du lycée'], ['4', 'paliers de difficulté'], ['∞', 'exercices générés'], ['0' + NB + '€', 'sans compte ni pub']],
      sections: [
        { id: 'principe', title: 'Deux façons de travailler les exercices', html: `      <div class="hub-grid">
        ${card('Les exercices corrigés rédigés', `<p>Sur chaque page de cours, quatre exercices de difficulté croissante, avec un indice et une correction détaillée à déplier. Idéal pour vérifier sa méthode et sa rédaction${NB}: cherche d'abord, ouvre la correction ensuite.</p>`)}
        ${card('Les exercices générés à l’infini', `<p>Dans l'application, chaque chapitre propose des exercices dont les nombres et les situations changent à chaque tirage. La réponse est vérifiée immédiatement et la correction pas à pas s'affiche. On peut s'entraîner autant qu'il le faut sans jamais retomber sur le même énoncé.</p>`)}
      </div>` },
        { id: 'paliers', title: 'Quatre paliers de difficulté', html: `      ${table(['Palier', 'Objectif', 'Pour qui'], [
          ['1 · Socle et automatismes', 'Appliquer directement une définition ou une propriété', 'Découvrir le chapitre, revoir les bases'],
          ['2 · Entraînement guidé', 'Enchaîner deux ou trois étapes classiques', 'Consolider après le cours'],
          ['3 · Approfondissement', 'Problèmes en contexte, format brevet en 3e, format bac au lycée', 'Préparer un contrôle ou un examen'],
          ['4 · Défi', 'Notions de la classe suivante, raisonnement plus long', 'Aller plus loin']
        ])}
      <p class="cours-note">Dans l'application, un palier se débloque quand le précédent est maîtrisé. Détails sur la page <a href="../${HUBS.entrainement.dir}/">Entraînement maths en ligne</a>.</p>` },
        ...levelSections,
        { id: 'superieur', title: 'Exercices de licence et de CAPES', html: `      <p class="cours-note">Pour l'université et les concours, les pages de cours contiennent aussi des exercices corrigés et des démonstrations rédigées.</p>
      <ul class="hub-chapters">${higher.map(({ lvl, items }) => `<li><a href="../cours/${lvl.slug}/">${lvl.code === 'capes' ? 'CAPES de mathématiques' : `Exercices et cours ${esc(lvl.en)}`}</a><span class="cours-count">${items.length} chapitres</span></li>`).join('')}</ul>` }
      ],
      faqs: [
        { q: 'Où trouver des exercices de maths corrigés gratuits ?', a: `Sur cette page : choisis ta classe, puis le chapitre. Chaque page de chapitre contient des exercices corrigés rédigés, et le bouton « S'entraîner » ouvre des exercices interactifs corrigés immédiatement. Tout est gratuit et sans inscription.` },
        { q: 'Les corrections sont-elles détaillées ?', a: 'Oui. Les exercices rédigés ont une correction complète avec les étapes de calcul et la justification ; les exercices générés affichent une correction pas à pas après chaque réponse, et un indice est disponible avant de répondre.' },
        { q: 'Peut-on imprimer les exercices ?', a: 'Les pages de cours s’impriment proprement : les corrections y sont dépliées. Dans l’application, l’outil « devoir blanc » génère un sujet complet avec son corrigé, prêt à imprimer.' },
        { q: 'Les exercices suivent-ils le programme ?', a: 'Oui : chaque chapitre correspond au programme officiel de sa classe, du nouveau programme de 6e (cycle 3) au cycle 4, puis à la seconde et à la spécialité mathématiques de première et de terminale, avec l’option mathématiques expertes.' },
        { q: 'Comment progresser rapidement en maths avec des exercices ?', a: 'Peu mais souvent : 15 minutes par jour valent mieux que deux heures la veille du contrôle. Commence au palier 1, cherche sans regarder la correction, refais les exercices ratés le lendemain et passe au palier suivant quand tu réussis sans aide.' }
      ],
      boxTitle: 'Prêt à faire un premier exercice' + NNB + '?',
      ldType: 'CollectionPage',
      ld: { about: { '@type': 'Thing', name: 'Exercices de mathématiques corrigés' }, learningResourceType: 'Exercices corrigés',
        mainEntity: { '@type': 'ItemList', numberOfItems: school.length,
          itemListElement: school.map(({ lvl }, i) => ({ '@type': 'ListItem', position: i + 1, name: `Exercices de maths ${lvl.en}`, url: `${SITE}/cours/${lvl.slug}/` })) } }
    });
  }

  // ---- 9.2 Réviser le brevet de maths ----------------------------------------------------
  {
    const auto = [['N1', 'Fractions et priorités opératoires'], ['4N1', 'Nombres relatifs'], ['N3', 'Puissances et notation scientifique'],
      ['4P1', 'Proportionnalité et pourcentages'], ['N2', 'Développer, réduire'], ['N4', 'Résoudre une équation'],
      ['6M4', 'Durées et conversions'], ['Org2', 'Moyenne, médiane, étendue'], ['Org4', 'Probabilités simples'], ['Org1', 'Lire un graphique, une image, un antécédent']];
    const key = [
      ['Nombres et calculs', ['N1', 'N2', 'N2bis', 'N3', 'N4', 'N5']],
      ['Géométrie', ['G0', 'G1', 'G2', 'G2bis', 'G7', 'G3', 'G6', 'G5', 'G4']],
      ['Fonctions, statistiques et probabilités', ['Org1', 'Org3', 'Org2', 'Org4']],
      ['Algorithmique', ['Algo']]
    ];
    writeHub({
      key: 'brevet', dir: HUBS.brevet.dir, crumb: 'Réviser le brevet de maths', tag: 'Brevet',
      title: frTypo('Réviser le brevet de maths : méthode, programme, planning'),
      desc: frTypo('Réviser le brevet de maths efficacement : déroulé de l’épreuve, automatismes, chapitres qui tombent, planning sur 6 semaines et brevets blancs corrigés.'),
      kicker: '📝 Brevet des collèges · 3e',
      h1: 'Réviser le brevet de maths : méthode, programme et planning',
      lead: `Comment se passe l'épreuve de mathématiques du brevet, quels automatismes travailler, quels chapitres reviennent le plus souvent, et comment organiser ses révisions semaine après semaine. Chaque notion renvoie vers son cours, des exercices corrigés et un entraînement en ligne.`,
      ctas: [['📝 Faire un brevet blanc', '../brevet.html'], ['🎯 S’entraîner sur la 3e', '../index.html?level=3eme'], ['🗂️ Flashcards de 3e', '../index.html?mode=flashcards&amp;level=3eme']],
      facts: [['2' + NB + 'h', 'd’épreuve'], ['6' + NB + 'pts', 'automatismes, sans calculatrice'], ['14' + NB + 'pts', 'problèmes, avec calculatrice'], ['6', 'semaines de planning']],
      sections: [
        { id: 'epreuve', title: 'Comment se passe l’épreuve de maths du brevet', html: `      <p>Depuis la session 2026, l'épreuve écrite de mathématiques dure <strong>2 heures</strong> et est notée sur <strong>20 points</strong>, en deux parties${NB}:</p>
      ${table(['Partie', 'Durée', 'Points', 'Ce qui est évalué'], [
        ['1 · Automatismes', 'environ 20 min', '6 points', 'Une série de questions courtes, <strong>sans calculatrice</strong>, sur des notions travaillées depuis la 6e. La copie est ramassée à la fin de la partie.'],
        ['2 · Raisonnement et résolution de problèmes', 'environ 1 h 40', '14 points', 'Plusieurs exercices indépendants, <strong>calculatrice autorisée</strong>, souvent en contexte (géométrie, fonctions, probabilités, programme Scratch). La rédaction et la justification comptent.']
      ])}
      <p class="cours-note">Les modalités peuvent évoluer d'une session à l'autre${NB}: vérifie toujours la note de service de l'année sur le site du ministère de l'Éducation nationale et auprès de ton professeur.</p>` },
        { id: 'automatismes', title: 'Les automatismes à maîtriser sans calculatrice', html: `      <p>La première partie se gagne par la régularité${NB}: ce sont des réflexes, pas des problèmes. Dix minutes par jour de <a href="../index.html?mode=rituel&amp;level=3eme">questions flash</a> suffisent à les installer. Chaque automatisme renvoie à son cours${NB}:</p>
      <ul class="hub-chapters">${auto.map(([id, t]) => `<li>${link(id, esc(t))}<span class="cours-count">${esc(ref(id).lvl.label)}</span><a class="hub-train" href="${app(id)}" aria-label="S'entraîner : ${esc(t)}">S'entraîner</a></li>`).join('')}</ul>
      <p class="cours-note">Exemples de questions${NB}: calculer le tiers de 18, écrire 0,045 en notation scientifique, augmenter un prix de 20${NNB}%, résoudre 3x${NB}+${NB}5${NB}=${NB}17, donner la médiane d'une petite série.</p>` },
        { id: 'chapitres', title: 'Les chapitres de 3e à réviser', html: `      <p>Tout le programme du cycle 4 peut être évalué. Les théorèmes de géométrie (<strong>Pythagore, Thalès, trigonométrie</strong>), le <strong>calcul littéral</strong>, les <strong>fonctions</strong> et les <strong>probabilités</strong> reviennent presque à chaque session${NB}: ce sont les priorités.</p>
      <div class="hub-grid">${key.map(([t, ids]) => card(esc(t), chapterList(ids))).join('')}</div>
      <p class="cours-note">Les bases de 4e restent indispensables${NB}: ${link('4G1', 'théorème de Pythagore en 4e')}, ${link('4N3', 'puissances')}, ${link('4N5', 'équations')}. Voir aussi <a href="../cours/3e/">tous les cours de 3e</a>.</p>` },
        { id: 'methode', title: 'La méthode en cinq étapes', html: `      <ol class="hub-steps">
        <li><strong>Faire le point.</strong> Génère un <a href="../brevet.html">brevet blanc</a> sans préparation et repère les chapitres où tu perds des points.</li>
        <li><strong>Revoir le cours ciblé.</strong> Pour chaque chapitre faible, relis la page de cours et refais les exemples de la partie «${NB}Méthodes${NB}» sans regarder la solution.</li>
        <li><strong>S'entraîner par paliers.</strong> Paliers 1 et 2 jusqu'à réussir sans indice, puis le palier 3 «${NB}Objectif brevet${NB}», calibré sur les exercices de l'examen.</li>
        <li><strong>Mémoriser.</strong> Formules de volumes, trigonométrie, identités remarquables${NB}: quelques flashcards par jour, les cartes ratées reviennent plus souvent.</li>
        <li><strong>Se mettre en conditions.</strong> Deux ou trois sujets complets en temps limité, puis corriger soi-même avec le corrigé et refaire les questions ratées le lendemain.</li>
      </ol>` },
        { id: 'planning', title: 'Planning de révision sur six semaines', html: `      ${table(['Semaine', 'Contenu', 'Outils'], [
          ['1', `Diagnostic, puis fractions, relatifs, priorités et puissances`, `<a href="../brevet.html">Brevet blanc</a>, ${link('N1', 'fractions')}, ${link('N3', 'puissances')}`],
          ['2', 'Calcul littéral, équations, proportionnalité et pourcentages', `${link('N2', 'développer')}, ${link('N2bis', 'factoriser')}, ${link('N4', 'équations')}`],
          ['3', 'Pythagore, Thalès, trigonométrie, triangles semblables', `${link('G0', 'Pythagore')}, ${link('G1', 'Thalès')}, ${link('G2', 'trigonométrie')}, ${link('G2bis', 'choisir le bon outil')}`],
          ['4', 'Fonctions linéaires et affines, statistiques, probabilités', `${link('Org3', 'fonctions affines')}, ${link('Org2', 'statistiques')}, ${link('Org4', 'probabilités')}`],
          ['5', 'Espace et volumes, transformations, Scratch ; un sujet complet', `${link('G5', 'espace')}, ${link('G6', 'transformations')}, ${link('Algo', 'Scratch')}`],
          ['6', 'Sujets en temps limité, reprise des erreurs, flashcards', `<a href="../brevet.html">Brevets blancs</a>, <a href="../index.html?mode=flashcards&amp;level=3eme">flashcards</a>`]
        ])}
      <p class="cours-note">Chaque jour${NB}: 10 minutes d'automatismes + 20 à 30 minutes sur le thème de la semaine. Les révisions sur plusieurs semaines retiennent bien mieux que le bachotage de la dernière nuit.</p>` },
        { id: 'exemple', title: 'Exercices type brevet, corrigés', html: `      ${sampleCard('G0', [3, 2], 'Type brevet · Pythagore')}
      ${sampleCard('Org4', [3, 2], 'Type brevet · probabilités')}` },
        { id: 'jour-j', title: 'Le jour de l’épreuve', html: `      <ul class="cours-list">
        <li>Partie automatismes${NB}: réponds d'abord aux questions sûres, puis reviens sur les autres${NB}; une réponse vide ne rapporte rien.</li>
        <li>Lis tout le sujet de la deuxième partie et commence par l'exercice où tu te sens le plus à l'aise${NB}: les exercices sont indépendants.</li>
        <li>Justifie${NB}: cite le théorème utilisé (Pythagore, Thalès…), écris les calculs, conclus par une phrase avec l'unité.</li>
        <li>Une question bloque${NB}? Admets le résultat et continue${NB}: les questions suivantes restent faisables.</li>
        <li>Garde 5 minutes pour relire${NB}: unités, arrondis demandés, signes.</li>
      </ul>` }
      ],
      faqs: [
        { q: 'Quand commencer à réviser le brevet de maths ?', a: 'Idéalement deux mois avant l’épreuve, avec quelques minutes d’automatismes par jour dès le début de la 3e. Le planning de six semaines proposé ici suffit si les bases sont en place ; sinon, commence par les chapitres de 4e.' },
        { q: 'Quels chapitres tombent le plus souvent au brevet de maths ?', a: 'Les théorèmes de Pythagore et de Thalès, la trigonométrie, le calcul littéral et les équations, les fonctions affines, les statistiques et les probabilités, et un programme Scratch. Mais tout le programme du cycle 4 peut être évalué.' },
        { q: 'La calculatrice est-elle autorisée au brevet de maths ?', a: 'Pas pour la partie automatismes, qui se fait sans calculatrice. Elle est autorisée (en mode examen) pour la partie raisonnement et résolution de problèmes.' },
        { q: 'Comment faire un brevet blanc de maths en ligne ?', a: 'La page <a href="../brevet.html">Brevet blanc de maths</a> génère un sujet complet de 3e avec son corrigé détaillé. Chaque sujet est différent : tu peux en refaire autant que tu veux, en temps limité.' },
        { q: 'Comment gagner des points facilement au brevet de maths ?', a: 'En sécurisant les automatismes (6 points accessibles avec de l’entraînement régulier), en justifiant chaque réponse, en n’oubliant pas les unités et en traitant toutes les questions faciles de chaque exercice, même si le début bloque.' }
      ],
      boxTitle: 'Teste ton niveau avec un brevet blanc',
      ld: { '@type': 'LearningResource', educationalLevel: 'Collège — classe de 3e (diplôme national du brevet)', learningResourceType: ['Méthode de révision', 'Exercices corrigés'],
        teaches: ['Préparation à l’épreuve de mathématiques du diplôme national du brevet'], about: { '@type': 'Thing', name: 'Brevet des collèges — mathématiques' } }
    });
  }

  // ---- 9.3 Réussir le bac de maths -------------------------------------------------------
  {
    const tale = levelsData.find((d) => d.lvl.code === 'tale');
    const groups = [];
    for (const it of tale.items) {
      const g = it.ch.domainName || it.ch.domain;
      let grp = groups.find((x) => x.name === g);
      if (!grp) groups.push(grp = { name: g, ids: [] });
      grp.ids.push(it.ch.id);
    }
    writeHub({
      key: 'bac', dir: HUBS.bac.dir, crumb: 'Réussir le bac de maths', tag: 'Bac',
      title: frTypo('Réussir le bac de maths : spécialité et épreuve anticipée'),
      desc: frTypo('Bac de maths : épreuve de spécialité en terminale, épreuve anticipée en première, chapitres clés, méthode, planning et sujets type bac corrigés, gratuits.'),
      kicker: '🎓 Baccalauréat · première et terminale',
      h1: 'Réussir le bac de maths : spécialité et épreuve anticipée',
      lead: `Les épreuves de mathématiques du baccalauréat général, les chapitres à maîtriser en première et en terminale, une méthode de révision et des exercices type bac corrigés. Chaque notion renvoie vers son cours complet et vers un entraînement en ligne par paliers.`,
      ctas: [['🎓 Faire un sujet type bac', '../bac.html'], ['🎯 S’entraîner en terminale', '../index.html?level=tale'], ['🗂️ Flashcards de terminale', '../index.html?mode=flashcards&amp;level=tale']],
      facts: [['4' + NB + 'h', 'écrit de spécialité'], ['coef.' + NB + '16', 'spécialité maths'], ['2' + NB + 'h', 'épreuve anticipée de 1re'], [String(tale.items.length), 'chapitres de terminale']],
      sections: [
        { id: 'epreuves', title: 'Les épreuves de maths au bac', html: `      <div class="hub-grid">
        ${card('Spécialité mathématiques (terminale)', `<ul class="cours-list"><li>Épreuve écrite de <strong>4 heures</strong>, en juin, <strong>coefficient 16</strong>.</li><li>Plusieurs exercices indépendants couvrant tout le programme de terminale, qui s'appuie sur celui de première.</li><li>Calculatrice autorisée en mode examen.</li><li>Les mathématiques expertes et les mathématiques complémentaires sont évaluées en contrôle continu.</li></ul>`)}
        ${card('Épreuve anticipée de mathématiques (première)', `<ul class="cours-list"><li>Depuis la session 2026, en fin de première, pour les voies générale et technologique.</li><li><strong>2 heures, sans calculatrice</strong>, notée sur 20, coefficient 2.</li><li>Une première partie d'<strong>automatismes</strong> sous forme de QCM (6 points), puis des exercices (14 points) adaptés au parcours de l'élève (avec ou sans spécialité).</li></ul>`)}
      </div>
      <p class="cours-note">Ces modalités sont fixées par les textes officiels et peuvent être ajustées${NB}: vérifie la note de service de ta session sur le site du ministère de l'Éducation nationale.</p>` },
        { id: 'terminale', title: 'Les chapitres de terminale à maîtriser', html: `      <p>Les suites, l'étude de fonctions (logarithme, exponentielle, convexité), le calcul intégral, la géométrie dans l'espace et la loi binomiale sont au cœur des sujets de spécialité.</p>
      <div class="hub-grid">${groups.map((g) => card(esc(frTypo(g.name)), chapterList(g.ids))).join('')}</div>` },
        { id: 'premiere', title: 'Ce qu’il faut savoir de première', html: `      <p>L'épreuve de terminale réutilise sans le redire tout le programme de première${NB}: ${link('1A1', 'second degré')}, ${link('1A3', 'dérivation et variations')}, ${link('1A4', 'fonction exponentielle')}, ${link('1A6', 'suites arithmétiques et géométriques')}, ${link('1S1', 'probabilités conditionnelles')} et ${link('1G2', 'produit scalaire')}. Ce sont aussi les bases de l'épreuve anticipée.</p>
      <p class="cours-note">Pour les automatismes de l'épreuve anticipée (calcul, pourcentages, lecture graphique, équations), les <a href="../index.html?mode=rituel&amp;level=1ere">questions flash de première</a> et les chapitres de <a href="../cours/seconde/">seconde</a> sont la meilleure révision. Voir <a href="../cours/premiere/">tous les cours de première</a>.</p>` },
        { id: 'methode', title: 'Méthode de révision', html: `      <ol class="hub-steps">
        <li><strong>Connaître le cours par cœur.</strong> Définitions, théorèmes et formules (limites usuelles, dérivées, primitives, loi binomiale)${NB}: les flashcards de chaque chapitre servent à ça.</li>
        <li><strong>Maîtriser les méthodes types.</strong> Récurrence, théorème des valeurs intermédiaires, étude de convexité, équation de plan, intégration par parties${NB}: chaque page de cours les rédige pas à pas.</li>
        <li><strong>S'entraîner au palier «${NB}Objectif bac${NB}».</strong> Le palier 3 de chaque chapitre reprend le niveau des exercices de l'épreuve.</li>
        <li><strong>Rédiger.</strong> Au bac, la justification compte autant que le résultat${NB}: hypothèses du théorème, calculs intermédiaires, conclusion.</li>
        <li><strong>Faire des sujets complets.</strong> En temps limité (4 h), puis corriger en notant les erreurs récurrentes.</li>
      </ol>` },
        { id: 'planning', title: 'Planning sur huit semaines', html: `      ${table(['Semaines', 'Contenu', 'Liens'], [
          ['1 – 2', 'Suites, récurrence et limites de suites', `${link('TA1', 'récurrence')}, ${link('TA2', 'limites de suites')}`],
          ['3 – 4', 'Fonctions : limites, continuité, dérivation, convexité, logarithme', `${link('TA3', 'continuité')}, ${link('TA4', 'convexité')}, ${link('TA5', 'logarithme')}`],
          ['5', 'Primitives, équations différentielles et intégration', `${link('TA6', 'primitives')}, ${link('TA7', 'intégrales')}`],
          ['6', 'Géométrie dans l’espace', `${link('TG1', 'droites et plans')}, ${link('TG2', 'produit scalaire')}`],
          ['7', 'Probabilités : loi binomiale, sommes de variables', `${link('TS1', 'loi binomiale')}, ${link('TS2', 'loi des grands nombres')}`],
          ['8', 'Sujets complets en temps limité et reprise des erreurs', '<a href="../bac.html">Sujets type bac</a>']
        ])}` },
        { id: 'exemple', title: 'Exercices type bac, corrigés', html: `      ${sampleCard('TA3', [2, 3], 'Type bac · continuité et limites')}
      ${sampleCard('1A6', [3, 2], 'Type bac · suites')}` }
      ],
      faqs: [
        { q: 'Combien de temps dure l’épreuve de spécialité maths au bac ?', a: 'L’épreuve écrite de spécialité mathématiques dure 4 heures, en terminale. Elle compte avec le coefficient 16.' },
        { q: 'Qu’est-ce que l’épreuve anticipée de mathématiques ?', a: 'Une épreuve écrite de 2 heures, sans calculatrice, passée en fin de première par les élèves des voies générale et technologique depuis la session 2026 : un QCM d’automatismes puis des exercices, pour une note sur 20 (coefficient 2).' },
        { q: 'Quels chapitres tombent le plus au bac de maths ?', a: 'Les suites (avec la récurrence), l’étude de fonctions avec l’exponentielle et le logarithme, la convexité, le calcul intégral, la géométrie dans l’espace et la loi binomiale reviennent très souvent.' },
        { q: 'Comment s’entraîner sur des sujets type bac ?', a: 'La page <a href="../bac.html">Sujet type bac de maths</a> génère un sujet de spécialité complet avec son corrigé. Chaque chapitre propose aussi un palier « Objectif bac » dans l’application.' },
        { q: 'Comment passer de 10 à 14 en maths au bac ?', a: 'En sécurisant les questions de cours et de méthode (définitions, dérivées, limites usuelles), en rédigeant chaque justification et en travaillant régulièrement des sujets complets en temps limité plutôt que des exercices isolés.' }
      ],
      boxTitle: 'Teste-toi sur un sujet type bac',
      ld: { '@type': 'LearningResource', educationalLevel: 'Lycée — première et terminale, spécialité mathématiques', learningResourceType: ['Méthode de révision', 'Exercices corrigés'],
        teaches: ['Préparation à l’épreuve de spécialité mathématiques du baccalauréat', 'Préparation à l’épreuve anticipée de mathématiques'], about: { '@type': 'Thing', name: 'Baccalauréat — mathématiques' } }
    });
  }

  // ---- 9.4 Entraînement maths en ligne ---------------------------------------------------
  {
    writeHub({
      key: 'entrainement', dir: HUBS.entrainement.dir, crumb: 'Entraînement maths', tag: 'Entraînement',
      title: frTypo('Entraînement maths en ligne gratuit : exercices par paliers'),
      desc: frTypo('S’entraîner en maths en ligne gratuitement : exercices générés à l’infini et corrigés, quatre paliers, questions flash et flashcards, de la 6e au bac.'),
      kicker: '🎯 Gratuit · sans compte · de la 6e à la licence',
      h1: 'Entraînement maths en ligne, gratuit et par paliers',
      lead: `Des exercices de mathématiques qui se renouvellent à chaque tirage, corrigés immédiatement et rangés en quatre paliers de difficulté. On choisit sa classe et son chapitre, on progresse à son rythme${NB}: pas d'inscription, pas de publicité, la progression reste sur l'appareil.`,
      ctas: [['🎯 Commencer l’entraînement', '../index.html'], ['⏱️ Questions flash', '../rituels.html'], ['✏️ Exercices corrigés', `../${HUBS.exercices.dir}/`]],
      facts: [['4', 'paliers par chapitre'], ['∞', 'exercices renouvelés'], [String(levelsData.reduce((n, d) => n + d.items.length, 0)), 'chapitres'], ['0', 'compte à créer']],
      sections: [
        { id: 'fonctionnement', title: 'Comment fonctionne l’entraînement', html: `      <ol class="hub-steps">
        <li><strong>Choisis ta classe</strong>, de la 6e à la licence.</li>
        <li><strong>Choisis un chapitre</strong>${NB}: le cours est accessible à côté des exercices.</li>
        <li><strong>Réponds</strong>${NB}: la réponse est vérifiée immédiatement. Un indice est disponible avant de répondre, la correction pas à pas après.</li>
        <li><strong>Progresse</strong>${NB}: chaque bonne réponse fait monter ta maîtrise du chapitre et débloque les paliers suivants.</li>
      </ol>` },
        { id: 'paliers', title: 'Les quatre paliers de difficulté', html: `      ${table(['Palier', 'Se débloque', 'Contenu'], [
          ['1 · Socle et automatismes', 'tout de suite', 'Appliquer une définition, un calcul direct'],
          ['2 · Entraînement guidé', 'à 25' + NNB + '% de maîtrise', 'Exercices classiques en deux ou trois étapes'],
          ['3 · Approfondissement', 'à 50' + NNB + '% de maîtrise', 'Problèmes en contexte : «' + NB + 'Objectif brevet' + NB + '» en 3e, «' + NB + 'Objectif bac' + NB + '» en première et terminale'],
          ['4 · Défi', 'à 75' + NNB + '% de maîtrise', 'Un pas vers la classe suivante']
        ])}
      <p class="cours-note">Ce principe de difficulté progressive permet de travailler juste au-dessus de son niveau, là où l'on apprend le plus, sans se décourager.</p>` },
        { id: 'flash', title: 'Questions flash et calcul mental', html: `      <p>Le mode <strong>questions flash</strong> enchaîne des questions courtes chronométrées sur les chapitres choisis, puis affiche la correction. C'est l'outil idéal pour les <strong>automatismes</strong> évalués sans calculatrice au brevet et à l'épreuve anticipée de première. En classe, les professeurs l'utilisent en <a href="../rituels.html">rituel de début de cours</a> à vidéoprojeter.</p>
      <ul class="hub-inline hub-pills">${school.map(({ lvl }) => `<li><a href="../index.html?mode=rituel&amp;level=${encodeURIComponent(lvl.app)}">Questions flash ${esc(lvl.en)}</a></li>`).join('')}</ul>` },
        { id: 'flashcards', title: 'Flashcards et répétition espacée', html: `      <p>Chaque chapitre a ses flashcards${NB}: définitions, théorèmes et formules. Elles fonctionnent comme une boîte de Leitner${NB}: une carte bien sue revient de moins en moins souvent, une carte ratée revient vite. Quelques minutes par jour suffisent pour retenir durablement le cours.</p>` },
        { id: 'devoirs', title: 'Devoirs blancs générés', html: `      <p>Pour se tester en conditions d'examen, l'application génère des sujets complets avec leur corrigé détaillé${NB}: <a href="../brevet.html">brevet blanc de maths</a> en 3e, <a href="../bac.html">sujet type bac</a> en terminale, et des devoirs d'entraînement dans chaque classe.</p>` },
        { id: 'classes', title: 'Commencer l’entraînement par classe', html: `      <ul class="hub-level-grid">${levelsData.map(({ lvl, items }) => `<li><a class="cours-chapter-card" href="../index.html?level=${encodeURIComponent(lvl.app)}"><span class="topic-num">${esc(lvl.label)}</span><span class="cours-chapter-text"><strong>${lvl.code === 'capes' ? 'Préparer le CAPES' : `S'entraîner ${esc(lvl.en)}`}</strong><span>${items.length} chapitres</span></span></a></li>`).join('')}</ul>
      <p class="cours-note">Besoin de revoir le cours d'abord${NB}? <a href="../cours/">Tous les cours de maths</a>.</p>` }
      ],
      faqs: [
        { q: 'L’entraînement est-il vraiment gratuit et sans inscription ?', a: 'Oui. Aucun compte n’est nécessaire et il n’y a pas de publicité. La progression est enregistrée dans le navigateur de ton appareil ; aucune donnée personnelle n’est envoyée.' },
        { q: 'Les exercices changent-ils à chaque fois ?', a: 'Oui : les nombres, les figures et les situations sont générés à chaque tirage. On peut s’entraîner longtemps sur un même chapitre sans retomber sur le même énoncé.' },
        { q: 'Comment débloquer les paliers ?', a: 'Le palier 1 est ouvert d’office. Les bonnes réponses font monter la maîtrise du chapitre : le palier 2 s’ouvre à 25 %, le palier 3 à 50 % et le palier 4 à 75 %.' },
        { q: 'Peut-on utiliser l’entraînement sur téléphone ?', a: 'Oui, le site s’adapte au téléphone et à la tablette, et peut être installé comme une application depuis le navigateur pour y accéder plus vite.' },
        { q: 'Un professeur peut-il l’utiliser avec sa classe ?', a: 'Oui : questions flash à projeter, liens directs vers un chapitre et un palier à partager dans l’ENT, devoirs blancs imprimables. Voir l’<a href="../enseignants.html">espace enseignants</a>.' }
      ],
      boxTitle: 'C’est parti' + NNB + '?',
      ld: { '@type': 'WebPage', about: { '@type': 'Thing', name: 'Entraînement en mathématiques en ligne' },
        mainEntity: { '@type': 'WebApplication', name: BRAND, url: `${SITE}/`, applicationCategory: 'EducationalApplication', operatingSystem: 'Web', inLanguage: 'fr', isAccessibleForFree: true,
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } } }
    });
  }
  // ---- 9.5 Épreuve d'entretien du CAPES (oral 2) -------------------------------------------
  {
    const fiche = href(ORAL2_ID);
    const caseCard = (title, situation, reponse) => card(title, `<p><strong>Situation.</strong> ${situation}</p><p><strong>Pistes de réponse.</strong> ${reponse}</p>`);
    writeHub({
      key: 'oral2', dir: HUBS.oral2.dir, crumb: 'Oral 2 du CAPES', tag: 'CAPES',
      title: frTypo('Épreuve d’entretien du CAPES (oral 2) : préparer l’oral'),
      desc: frTypo('Préparer l’épreuve d’entretien du CAPES (oral 2), toutes disciplines : déroulé, attentes du jury, laïcité, mises en situation corrigées et questions fréquentes.'),
      kicker: '🎓 Concours enseignants · toutes disciplines',
      h1: 'Épreuve d’entretien du CAPES (oral 2)',
      lead: `L'oral 2 du CAPES est un entretien de 35 minutes avec le jury, le même dans toutes les disciplines${NB}: on y parle de son parcours, de sa motivation et de situations concrètes de la vie d'un établissement. Cette page présente le déroulé de l'épreuve, ce que le jury évalue, une méthode pour les mises en situation et des cas commentés. La <a href="${fiche}">fiche complète</a> détaille les textes officiels et la jurisprudence.`,
      ctas: [['📖 Lire la fiche complète', fiche], ['🎯 S’entraîner sur des mises en situation', app(ORAL2_ID)], ['🎓 Leçons d’oral du CAPES de maths', '../cours/capes/']],
      facts: [['35' + NB + 'min', 'd’entretien, sans préparation'], ['3', 'coefficient'], ['15 + 20', 'minutes : parcours, puis mises en situation'], ['0/20', 'note éliminatoire']],
      sections: [
        { id: 'deroule', title: 'Déroulé de l’épreuve', html: `      <p>L'épreuve d'entretien est la seconde épreuve d'admission du CAPES externe. Elle n'a pas de temps de préparation et se déroule en deux temps. Son format diffère légèrement entre le concours de niveau bac${NNB}+${NNB}5 et le nouveau concours de niveau bac${NNB}+${NNB}3, organisé à partir de la session 2026.</p>
      ${table(['', 'CAPES bac' + NNB + '+' + NNB + '5', 'CAPES bac' + NNB + '+' + NNB + '3 (dès 2026)'], [
        ['Durée et coefficient', '35 minutes, coefficient 3', '35 minutes, coefficient 3'],
        ['Premier temps (15' + NB + 'min)', 'Présentation du candidat (5 minutes au plus), appuyée sur la fiche individuelle de renseignement transmise avant l’oral, puis échange avec le jury', 'Présentation de la motivation, du parcours et des expériences (5 minutes), puis échange de 10 minutes avec le jury'],
        ['Second temps (20' + NB + 'min)', 'Deux mises en situation professionnelle : l’une d’enseignement, l’autre liée à la vie scolaire', 'Questions variées, dont une mise en situation, sur les valeurs de la République et la laïcité, puis sur la projection dans le métier'],
        ['Notation', 'Sur 20 ; la note 0 est éliminatoire', 'Sur 20 ; la note 0 est éliminatoire']
      ], 'Format de l’épreuve d’entretien du CAPES externe')}
      <p class="cours-note">Les modalités sont fixées par arrêté et précisées dans la notice officielle de chaque section, publiée par le ministère. Relisez celle de votre discipline et de votre session avant l'oral.</p>` },
        { id: 'concours', title: 'Une épreuve commune à toutes les disciplines', html: `      <p>Cet entretien ne porte pas sur la discipline${NB}: il est construit sur le même modèle pour toutes les sections du CAPES (lettres, histoire-géographie, langues, sciences, mathématiques…). Les concours du second degré que sont le CAPET, le CAPLP et le CAPEPS comportent eux aussi une épreuve d'entretien de même nature, et le concours de professeur des écoles (CRPE) un entretien qui inclut en plus une partie consacrée à l'éducation physique et sportive.</p>
      <p>Les exemples de cette page sont donc volontairement pris dans plusieurs disciplines. Seule la question de la motivation demande de relier sa réponse à la matière que l'on enseignera.</p>` },
        { id: 'attentes', title: 'Ce que le jury évalue', html: `      <div class="hub-grid">
        ${card('La projection dans le métier', `<p>Le jury cherche un futur professeur qui se voit déjà dans un établissement${NB}: qui connaît ses missions, sait qu'il travaille en équipe et peut décrire une séance, une évaluation ou un échange avec une famille. Une motivation crédible s'appuie sur une expérience vécue, pas sur des formules générales.</p>`)}
        ${card('Les valeurs de la République', `<p>Laïcité, neutralité du service public, égalité entre les filles et les garçons, lutte contre les discriminations et les stéréotypes${NB}: il faut savoir les expliquer simplement et montrer comment on les fait vivre en classe, sans réciter des textes.</p>`)}
        ${card('Le sens des responsabilités', `<p>Face à une situation délicate, le jury attend une réponse posée${NB}: protéger les élèves, rappeler la règle, ne pas agir seul, informer les bons interlocuteurs. Il valorise la capacité à hiérarchiser plus que l'exhaustivité.</p>`)}
        ${card('La qualité de l’échange', `<p>C'est un entretien, pas un exposé${NB}: écouter la question, répondre précisément, accepter une objection, reconnaître une limite et rester courtois. La manière de dialoguer avec le jury préfigure celle de dialoguer avec les élèves et les familles.</p>`)}
      </div>` },
        { id: 'methode', title: 'Une méthode pour les mises en situation', html: `      <ol class="hub-steps">
        <li><strong>Comprendre la situation.</strong> Reformuler en une phrase ce qui se passe et ce qui est en jeu${NB}: la sécurité d'un élève, son droit à apprendre, une valeur, le fonctionnement de la classe.</li>
        <li><strong>Agir sur le moment.</strong> Dire ce que l'on fait concrètement dans la classe${NB}: garder son calme, rappeler la règle sans polémiquer, protéger, poursuivre le cours.</li>
        <li><strong>Ne pas rester seul.</strong> Nommer les bons interlocuteurs${NB}: professeur principal, conseiller principal d'éducation, chef d'établissement, infirmière, assistante sociale, famille.</li>
        <li><strong>Inscrire la réponse dans la durée.</strong> Prévoir un échange individuel, un suivi, une action éducative${NB}; savoir qu'un élève en danger fait l'objet, sans délai, d'une information préoccupante transmise au conseil départemental (ou d'un signalement au procureur en cas de danger grave et immédiat).</li>
        <li><strong>Justifier.</strong> Appuyer chaque décision sur un principe (intérêt de l'élève, égalité, laïcité, règlement intérieur) plutôt que sur une préférence personnelle.</li>
      </ol>` },
        { id: 'themes', title: 'Les thèmes qui reviennent', html: `      <ul class="hub-inline hub-tags"><li>Laïcité et neutralité</li><li>Contestation d’un enseignement</li><li>Harcèlement et cyberharcèlement</li><li>Élèves à besoins éducatifs particuliers</li><li>Égalité filles-garçons</li><li>Propos discriminatoires</li><li>Autorité, punitions et sanctions</li><li>Relations avec les familles</li><li>Fraude et évaluation</li><li>Usage des réseaux sociaux</li><li>Protection de l’enfance</li><li>Transition écologique</li><li>Travail en équipe</li></ul>` },
        { id: 'cas', title: 'Quatre mises en situation commentées', html: `      <p class="cours-note">Ces situations ne sont pas tirées de sujets de concours${NB}: ce sont des exemples pour s'exercer. D'autres cas, propres aux mathématiques, figurent dans la <a href="${fiche}">fiche complète</a>.</p>
      <div class="hub-grid">
        ${caseCard('Un cours contesté en sciences de la vie et de la Terre', 'Pendant un cours sur l’évolution des espèces, un élève affirme que «' + NB + 'ce qu’on apprend est faux' + NB + '» et que sa religion dit le contraire.', 'Distinguer calmement le savoir scientifique, établi par des preuves, et la croyance, qui appartient à chacun. Rappeler que le programme s’impose à tous sans demander à l’élève de renoncer à ses convictions, puis poursuivre le cours. Reprendre l’échange en tête-à-tête et, si la contestation se répète, en parler à l’équipe.')}
        ${caseCard('Un refus de la natation en éducation physique', 'Une famille demande que sa fille soit dispensée des séances de natation, pour des raisons religieuses.', `L’assiduité est une obligation (Code de l’éducation, articles L. 511-1 et R. 511-11) et l’éducation physique, natation comprise, est un enseignement obligatoire. Des convictions religieuses ne justifient pas une dispense : seule une inaptitude constatée par un médecin (article R. 312-2) ou un autre motif légitime (article L. 131-8) le peut. Le Conseil d’État admet des absences ponctuelles pour une grande fête religieuse, pas une absence systématique (14 avril 1995)${NB}; la Cour européenne des droits de l’homme a validé en 2017 l’obligation des cours de natation mixtes (Osmanoğlu et Kocabaş c. Suisse). Recevoir la famille avec le professeur principal ou la direction, expliquer les objectifs de l’activité, notamment le savoir-nager, enjeu de sécurité, et chercher l’adhésion sans transiger sur la règle.`)}
        ${caseCard('Une insulte entendue en classe', 'Lors d’un travail de groupe, un élève lance une insulte homophobe à un camarade.', `Réagir immédiatement${NB}: faire cesser les propos, rappeler qu’ils sont interdits, protéger l’élève visé. Prononcée en classe, l’injure homophobe est une injure non publique, punie d’une contravention de 5e classe (Code pénal, article R. 625-8-1)${NB}; publique, elle devient un délit (loi du 29 juillet 1881, article 33). La réponse reste d’abord éducative et disciplinaire${NB}: informer le conseiller principal d’éducation et la direction pour une éventuelle sanction, prendre des nouvelles de l’élève visé et prévoir un temps éducatif, avec les personnels de l’établissement.`)}
        ${caseCard('Un message agressif d’un parent', 'Après un devoir, un parent écrit sur l’espace numérique de travail un message virulent qui conteste la note et met en cause votre compétence.', `Ne pas répondre à chaud ni par écrit sur le même ton. Proposer un rendez-vous, si possible avec le professeur principal, pour expliquer les critères d’évaluation. Informer la direction. En cas de menaces ou d’injures, demander par écrit la protection fonctionnelle (Code général de la fonction publique, articles L. 134-1 et L. 134-5), par l’application Colibris${NB}: l’administration la doit à l’agent attaqué en raison de ses fonctions et prend sans délai des mesures conservatoires.`)}
      </div>` },
        { id: 'questions', title: 'Questions fréquentes du jury', html: `      <ul class="cours-list">
        <li>Qu'est-ce que la laïcité, en une phrase, et que garantit-elle aux élèves${NNB}?</li>
        <li>L'obligation de neutralité s'applique-t-elle aux élèves${NNB}?</li>
        <li>Un élève refuse de travailler avec une camarade${NB}: comment réagissez-vous${NNB}?</li>
        <li>Pourquoi voulez-vous enseigner, et pourquoi cette discipline${NNB}?</li>
        <li>Quels sont les rôles du professeur principal et du conseiller principal d'éducation${NNB}?</li>
        <li>Un élève vous confie un secret qui vous inquiète${NB}: que faites-vous${NNB}?</li>
        <li>Comment faites-vous progresser un élève en grande difficulté sans freiner le reste de la classe${NNB}?</li>
        <li>Que faites-vous si vous n'êtes pas d'accord avec une consigne de votre hiérarchie${NNB}?</li>
      </ul>
      <p class="cours-note">Des éléments de réponse, avec les textes à connaître, sont développés dans la <a href="${fiche}">fiche complète</a>, partie «${NB}Remarques et questions du jury${NB}».</p>` }
      ],
      faqs: [
        { q: 'Combien de temps dure l’oral 2 du CAPES ?', a: 'L’épreuve d’entretien dure 35 minutes, sans temps de préparation : 15 minutes sur le parcours et la motivation du candidat, dont une présentation de 5 minutes, puis 20 minutes de questions et de mises en situation professionnelle.' },
        { q: 'Quel est le coefficient de l’épreuve d’entretien ?', a: 'Coefficient 3. L’épreuve est notée sur 20 et la note 0 est éliminatoire.' },
        { q: 'L’épreuve d’entretien est-elle la même pour toutes les disciplines ?', a: 'Oui, dans ses grandes lignes : elle ne porte pas sur la discipline mais sur le métier de professeur et les valeurs du service public. Elle existe dans toutes les sections du CAPES, et sous une forme proche au CAPET, au CAPLP, au CAPEPS et au CRPE.' },
        { q: 'Faut-il apprendre les textes de loi par cœur ?', a: 'Non. Il faut connaître les principes et quelques références sûres (article 1er de la Constitution, loi de 1905, loi du 15 mars 2004, statut des fonctionnaires). Une référence approximative dessert davantage qu’une réponse bien argumentée sur les principes.' },
        { q: 'Comment se préparer à l’oral 2 ?', a: 'Préparer sa présentation de 5 minutes et la chronométrer, s’entraîner à voix haute sur des mises en situation variées avec la même démarche (comprendre, agir, ne pas rester seul, suivre, justifier), et se faire interroger par quelqu’un qui pose des questions de relance. Un stage ou des observations en établissement aident beaucoup à donner des exemples concrets.' }
      ],
      boxTitle: 'Continuer la préparation',
      boxText: `La <a href="${fiche}">fiche complète</a> reprend les textes officiels, la jurisprudence, des études de cas et les questions du jury. Gratuit et sans inscription.`,
      ldType: 'WebPage',
      ld: { about: [{ '@type': 'Thing', name: 'Épreuve d’entretien du CAPES' }, { '@type': 'Thing', name: 'Laïcité à l’école' }],
        audience: { '@type': 'EducationalAudience', educationalRole: 'Candidat aux concours de l’enseignement' }, learningResourceType: 'Méthode et mises en situation' }
    });
  }
  return written;
}

main();
