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
 *   - Réécrit sitemap.xml (pages racine + toutes les pages cours/) avec lastmod = date du jour
 *     (ou la date passée en variable d'environnement : BUILD_DATE=2026-10-30 node scripts/…).
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
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'cours');
const SITE = 'https://etabli-des-maths.fr';
const BRAND = "L'Établi des Maths";
const AUTHOR = 'Loïc Delaporte';
const BUILD_DATE = process.env.BUILD_DATE || new Date().toISOString().slice(0, 10);
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
    intro: "Préparation aux oraux du CAPES de mathématiques : leçons avec plan, théorème clé démontré, développements possibles, remarques du jury, et épreuve d'entretien." }
];
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

function layout({ depth, title, description, canonical, ogType = 'website', jsonld, body, extraHead = '' }) {
  const up = '../'.repeat(depth);
  return `<!DOCTYPE html>
<html lang="fr" data-theme="light">
<head>
  <meta charset="UTF-8" />
  <script>
    // Applique le thème (clair/sombre) choisi dans l'application, avant l'affichage
    try {
      document.documentElement.setAttribute('data-theme', JSON.parse(localStorage.getItem('maths_3e_progress_v1') || '{}').theme || 'light');
    } catch (e) {}
  </script>
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
  <meta property="og:image" content="${SITE}/assets/logo.jpg" />
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
      <a href="${up}index.html" class="brand-container" style="text-decoration: none;">
        <img src="${up}assets/logo-96.png" alt="L'Établi des Maths" class="brand-logo-img" width="44" height="44" />
        <div class="brand-text">
          <p class="brand-title">L'Établi des Maths <span class="brand-level-tag">Cours</span></p>
          <span class="brand-tagline">Outils pour apprendre et pratiquer</span>
        </div>
      </a>

      <!-- Navigation entre Portails -->
      <nav class="nav-portal-links" aria-label="Portails thématiques">
        <a href="${up}index.html" class="nav-portal-btn">🏠 Accueil</a>
        <a href="${up}cours/" class="nav-portal-btn active" aria-current="${depth === 1 ? 'page' : 'true'}">📚 Cours</a>
        <a href="${up}rituels.html" class="nav-portal-btn">⏱️ Rituels</a>
        <a href="${up}brevet.html" class="nav-portal-btn">📝 Brevet 3e</a>
        <a href="${up}bac.html" class="nav-portal-btn">🎓 Baccalauréat</a>
        <a href="${up}enseignants.html" class="nav-portal-btn">👨‍🏫 Enseignants</a>
      </nav>
    </div>
  </header>

  <main class="landing-wrapper cours-wrapper" id="contenu">
${body}
  </main>

  <footer class="cours-footer">
    <p>${esc(BRAND)} — Conçu par ${AUTHOR}, professeur de mathématiques • 100${NNB}% gratuit, conforme aux programmes</p>
    <p><a href="${up}cours/">Tous les cours</a> · <a href="${up}index.html">Ouvrir l'application</a> · <a href="${up}enseignants.html">Espace enseignants</a> · <a href="${up}mentions-legales.html">Mentions légales</a> · <a href="mailto:delaporte@etabli-des-maths.fr">Contact</a></p>
    <p>Contenus sous licence <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr" rel="license noopener">CC BY-NC-SA 4.0</a></p>
  </footer>
  <!-- Statistiques d'audience anonymes et conformes RGPD (GoatCounter) -->
  <script data-goatcounter="https://etabli-des-maths.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
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
function chapterTitleTag(ch, lvl) {
  const t = plain(ch.title);
  const lv = lvl.code === 'capes' ? 'préparation CAPES' : `cours ${lvl.de}`;
  const brand = ` | ${BRAND}`;
  const cands = [
    `${t} — ${lv}${brand}`,
    `${headOf(t)} — ${lv}${brand}`,
    `${t} — ${lv}`,
    `${headOf(t)} — ${lv}`
  ];
  const etHead = headOf(t).split(/\s+et\s+/)[0];
  if (etHead.split(/\s+/).length >= 2 && etHead.length >= 12) cands.push(`${etHead} — ${lv}`);
  let title = cands.find((c) => c.length <= 65) || `${truncate(headOf(t).replace(/\s*\([^)]*\)?/g, ''), 62 - lv.length - 3)} — ${lv}`;
  if (usedTitles.has(title)) title = title.replace(` — ${lv}`, ` (${ch.num || ch.id}) — ${lv}`);
  return frTypo(title);
}
function chapterDescription(ch, lvl, course, capes) {
  const lv = lvl.code === 'capes' ? 'Leçon de CAPES' : `Cours ${lvl.de}`;
  let objs = [];
  if (capes) objs = (capes.plan || []).map((p) => plain(p.part).replace(/^[IVX]+\.\s*/, ''));
  else if (course && course.objectives && course.objectives.length) objs = course.objectives.map(plain);
  else objs = (ch.skills || []).map(plain);
  objs = objs.map((o) => lcFirst(o.replace(/\.$/, '')));
  const head = `${lv} — ${plain(ch.title)}${NB}: `;
  let d = head + objs.join(', ');
  if (objs.length === 0) d = `${lv} — ${plain(ch.title)}. ${plain(ch.description)}`;
  d = truncate(d + '. Exercices corrigés.', 160);
  if (d.length < 110) d = truncate(`${d.replace(/…$/, '')} ${plain(ch.description)}`, 160);
  return frTypo(d);
}

// ---------------------------------------------------------------------------
// 8. Construction
// ---------------------------------------------------------------------------
function main() {
  const { win, missing } = loadData();
  MD = win.MathsRenderer.markdownToHtml.bind(win.MathsRenderer);
  const CH = win.MATHS_CHAPTERS || [];
  const COURSES = win.MATHS_COURSES || {};
  const EXOS = win.MATHS_EXERCISES || {};
  const CAPES = win.CAPES_LESSONS || [];

  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });

  const pages = []; // chemins relatifs à la racine (pour le sitemap)
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
      const h1 = lvl.code === 'capes'
        ? `${frTypo(title)} — leçon de CAPES`
        : `${frTypo(title)} — cours ${lvl.de}`;
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
        name: `${title} — ${lvl.code === 'capes' ? 'leçon de CAPES' : 'cours ' + lvl.de}`,
        headline: title,
        description: desc,
        url,
        inLanguage: 'fr',
        educationalLevel: lvl.edu,
        learningResourceType: ['Cours', 'Exercices corrigés'],
        teaches,
        about: { '@type': 'Thing', name: plain(ch.domainName || ch.domain || 'Mathématiques') },
        isAccessibleForFree: true,
        dateModified: BUILD_DATE,
        author: { '@type': 'Person', name: AUTHOR, jobTitle: 'Professeur de mathématiques' },
        publisher: { '@type': 'Organization', name: BRAND, url: `${SITE}/`, logo: `${SITE}/assets/logo.png` },
        isPartOf: { '@type': 'WebSite', name: BRAND, url: `${SITE}/` }
      };
      const html = layout({ depth: 2, title: titleTag, description: desc, canonical: url, ogType: 'article', jsonld: [ld, breadcrumbLd(crumbs)], body });
      fs.writeFileSync(path.join(lvlDir, `${slug}.html`), html);
      pages.push({ loc: `/cours/${lvl.slug}/${slug}.html`, priority: '0.7' });
    });
  }

  // Pages niveau
  for (const { lvl, items } of levelsData) {
    currentPage = `${lvl.slug}/index`;
    const url = `${SITE}/cours/${lvl.slug}/`;
    const isCapes = lvl.code === 'capes';
    const h1 = isCapes ? 'Préparation au CAPES de mathématiques — leçons d\u2019oral' : `Cours de mathématiques ${lvl.de} — ${items.length} chapitres`;
    let titleTag = isCapes ? `Leçons d'oral du CAPES de maths | ${BRAND}` : `Cours de maths ${lvl.de} : chapitres et exercices | ${BRAND}`;
    if (titleTag.length > 65) titleTag = titleTag.replace(` | ${BRAND}`, '');
    titleTag = frTypo(titleTag);
    const desc = frTypo(truncate(`${lvl.intro} ${items.length} chapitres avec exercices corrigés.`, 160));
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
    const body = `${breadcrumbHtml(crumbs)}

    <header class="cours-hero">
      <p class="landing-tag">${esc(CYCLES.find((c) => c.id === lvl.cycle).name)} · ${esc(lvl.label)}</p>
      <h1 class="cours-title">${h1}</h1>
      <p class="cours-lead">${esc(frTypo(lvl.intro))} Chaque chapitre contient le cours complet, des méthodes rédigées et des exercices corrigés.</p>
      <div class="cours-cta">
        <a class="btn-primary cours-cta-main" href="../../index.html?level=${encodeURIComponent(lvl.app)}">🎯 S'entraîner ${isCapes ? 'pour le CAPES' : 'en ' + esc(lvl.label)}</a>
      </div>
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
      isPartOf: { '@type': 'WebSite', name: BRAND, url: `${SITE}/` },
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: items.length,
        itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.title, url: it.url }))
      }
    };
    fs.writeFileSync(path.join(OUT, lvl.slug, 'index.html'),
      layout({ depth: 2, title: titleTag, description: desc, canonical: url, jsonld: [ld, breadcrumbLd(crumbs)], body }));
    pages.push({ loc: `/cours/${lvl.slug}/`, priority: '0.8' });
  }

  // Page d'accueil des cours
  {
    currentPage = 'index';
    const total = levelsData.reduce((n, d) => n + d.items.length, 0);
    const url = `${SITE}/cours/`;
    const titleTag = frTypo(`Cours de maths de la 6e à la licence | ${BRAND}`);
    const desc = frTypo(`${total} cours de mathématiques gratuits, du collège à la licence et au CAPES : leçons complètes, méthodes rédigées et exercices corrigés, conformes aux programmes.`);
    const crumbs = [{ name: 'Accueil', href: '../index.html', url: `${SITE}/` }, { name: 'Cours', url }];
    const body = `${breadcrumbHtml(crumbs)}

    <header class="cours-hero">
      <p class="landing-tag">📚 ${total} chapitres en accès libre</p>
      <h1 class="cours-title">Cours de mathématiques de la 6e à la licence</h1>
      <p class="cours-lead">Leçons complètes, méthodes rédigées pas à pas et exercices corrigés pour chaque chapitre du programme, du collège au CAPES. Pour s'entraîner ensuite, chaque page renvoie vers l'application interactive.</p>
      <div class="cours-cta">
        <a class="btn-primary cours-cta-main" href="../index.html">🎯 Ouvrir l'application</a>
      </div>
    </header>

${CYCLES.map((cy) => {
    const lv = levelsData.filter((d) => d.lvl.cycle === cy.id);
    if (!lv.length) return '';
    return `    <section class="cours-section" id="${cy.id}" aria-labelledby="${cy.id}-titre">
      <h2 id="${cy.id}-titre">${esc(cy.name)}</h2>
      <p class="cours-note">${esc(frTypo(cy.desc))}</p>
      <div class="cours-level-grid">
${lv.map(({ lvl, items }) => `        <article class="cours-level-card">
          <h3><a href="${lvl.slug}/">${lvl.code === 'capes' ? 'CAPES de mathématiques' : esc(lvl.label)}</a> <span class="cours-count">${items.length} chapitres</span></h3>
          <ul>
${items.map((it) => `            <li><a href="${lvl.slug}/${it.slug}.html">${esc(frTypo(it.title))}</a></li>`).join('\n')}
          </ul>
        </article>`).join('\n')}
      </div>
    </section>`;
  }).filter(Boolean).join('\n\n')}`;
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Cours de mathématiques de la 6e à la licence',
      description: desc,
      url,
      inLanguage: 'fr',
      isPartOf: { '@type': 'WebSite', name: BRAND, url: `${SITE}/` },
      hasPart: levelsData.map(({ lvl }) => ({ '@type': 'CollectionPage', name: `Cours ${lvl.de}`, url: `${SITE}/cours/${lvl.slug}/` }))
    };
    fs.writeFileSync(path.join(OUT, 'index.html'),
      layout({ depth: 1, title: titleTag, description: desc, canonical: url, jsonld: [ld, breadcrumbLd(crumbs)], body }));
    pages.unshift({ loc: '/cours/', priority: '0.9' });
  }

  // Sitemap
  const rootPages = [
    { loc: '/', changefreq: 'weekly', priority: '1.0' },
    { loc: '/rituels.html', changefreq: 'monthly', priority: '0.9' },
    { loc: '/brevet.html', changefreq: 'monthly', priority: '0.9' },
    { loc: '/bac.html', changefreq: 'monthly', priority: '0.9' },
    { loc: '/enseignants.html', changefreq: 'monthly', priority: '0.85' },
    { loc: '/mentions-legales.html', changefreq: 'yearly', priority: '0.3' }
  ];
  const all = rootPages.concat(pages.map((p) => ({ ...p, changefreq: 'monthly' })));
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Généré par scripts/build_seo_pages.js — ne pas modifier à la main, relancer le script. -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all.map((p) => `  <url>
    <loc>${SITE}${p.loc}</loc>
    <lastmod>${BUILD_DATE}</lastmod>
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
  const longTitles = [...usedTitles.keys()].filter((t) => t.length > 65);
  console.log(`\n=== build_seo_pages.js — ${BUILD_DATE} ===`);
  if (missing.length) console.log(`Fichiers de données absents (ignorés) : ${missing.join(', ')}`);
  for (const { lvl, items } of levelsData) console.log(`  ${lvl.slug.padEnd(10)} ${String(items.length).padStart(3)} chapitres`);
  console.log(`Pages générées : ${pages.length} (1 sommaire + ${levelsData.length} niveaux + ${nChap} chapitres)`);
  console.log(`sitemap.xml : ${all.length} URL`);
  console.log(`Erreurs KaTeX : ${katexErrors.length}`);
  katexErrors.slice(0, 40).forEach((e) => console.log(`  - [${e.page}] ${e.tex}${e.err ? ' — ' + e.err : ''}`));
  if (longTitles.length) console.log(`<title> > 65 caractères : ${longTitles.length}`), longTitles.forEach((t) => console.log(`  - (${t.length}) ${t}`));
  if (warnings.length) console.log(`Avertissements : ${warnings.length}`), warnings.forEach((w) => console.log(`  - ${w}`));
}

main();
