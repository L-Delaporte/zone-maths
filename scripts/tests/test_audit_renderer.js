#!/usr/bin/env node
/**
 * Non-régression du rendu Markdown (MathsRenderer.markdownToHtml), partagé par l'application
 * et par scripts/build_seo_pages.js.
 *
 * Usage (depuis n'importe où) : node scripts/tests/test_audit_renderer.js
 * Sortie : code 0 si tout est conforme, 1 sinon.
 *
 * Vérifications :
 *  - aucune regex lookbehind dans js/mathRenderer.js (SyntaxError sur Safari < 16.4 : tout le fichier serait rejeté) ;
 *  - blocs de code et code en ligne recopiés tels quels (étoiles, #, lignes vides, « < ») ;
 *  - un « < » de formule ou de texte n'est jamais lu comme une balise ; les vraies balises et les figures SVG restent ;
 *  - gras et italique, y compris près des formules et des étoiles de multiplication ;
 *  - un tableau est un bloc : le texte qui l'entoure forme ses propres paragraphes ;
 *  - jetons posés par build_seo_pages.js respectés ;
 *  - toutes les données du site : aucune balise inconnue ni « < » brut dans une formule après rendu.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..');
const RENDERER = path.join(ROOT, 'js', 'mathRenderer.js');
const source = fs.readFileSync(RENDERER, 'utf8');

const rendererCtx = {};
rendererCtx.window = rendererCtx;
vm.createContext(rendererCtx);
vm.runInContext(source, rendererCtx, { filename: 'mathRenderer.js' });
const md = (t) => rendererCtx.MathsRenderer.markdownToHtml(t);

let failures = 0;
function check(label, ok, detail) {
  if (ok) return;
  failures++;
  if (failures <= 40) console.error(`✖ ${label}${detail === undefined ? '' : `\n    ${String(detail).slice(0, 400).replace(/\n/g, '⏎')}`}`);
}
const has = (label, input, ...needles) => {
  const out = md(input);
  needles.forEach((n) => check(`${label} : attendu « ${n} »`, out.includes(n), out));
};
const hasNot = (label, input, ...needles) => {
  const out = md(input);
  needles.forEach((n) => check(`${label} : « ${n} » inattendu`, !out.includes(n), out));
};
const count = (s, needle) => s.split(needle).length - 1;

// ---------------------------------------------------------------------------
// 1. Compatibilité Safari < 16.4
// ---------------------------------------------------------------------------
check('js/mathRenderer.js ne doit contenir aucun lookbehind (?<! ou (?<=', !/\(\?<[!=]/.test(source));

// ---------------------------------------------------------------------------
// 2. Code
// ---------------------------------------------------------------------------
const PY = '```python\ns = s + f(a + k*h) * h\n\nprint(x**2 + y**2)\n# note\nif a<b:\n    c = 2*3*4\n```';
has('bloc de code recopié tel quel', PY, 's = s + f(a + k*h) * h\n\nprint(x**2 + y**2)\n# note\nif a&lt;b:\n    c = 2*3*4');
hasNot('bloc de code sans markdown', PY, '<em>', '<strong>', '<h2', 'math-p', '<br/>');
check('un seul <pre> par bloc de code', count(md(PY), '<pre') === 1, md(PY));
hasNot('texte autour d\'un bloc de code', `Voici :\n${PY}\nFin.`, '<p class="math-p">Voici\u00a0:<br/>');
has('texte autour d\'un bloc de code', `Voici :\n${PY}\nFin.`, '<p class="math-p">Voici\u00a0:</p>', '<p class="math-p">Fin.</p>');

const INLINE = '`y = y + h * f(x)` puis `f(a) * f(m) <= 0` et `**` (puissance : `2 ** 5` vaut $32$)';
has('code en ligne recopié tel quel', INLINE,
  '<code class="math-inline-code">y = y + h * f(x)</code>',
  '<code class="math-inline-code">f(a) * f(m) &lt;= 0</code>',
  '<code class="math-inline-code">**</code>',
  '<code class="math-inline-code">2 ** 5</code>', '$32$');
hasNot('code en ligne sans markdown', INLINE, '<em>', '<strong>');
has('balise factice dans du code en ligne', '`a <b c>`', '<code class="math-inline-code">a &lt;b c></code>');
has('dollars de tableur dans du code en ligne', '`=B2 * $E$1` puis $x$', '<code class="math-inline-code">=B2 * $E$1</code> puis $x$');
has('entité conservée dans du code en ligne', '`=B1&#42;B1`', '=B1&#42;B1');
has('barre verticale de code dans un tableau', '| `a|b` | c |\n|---|---|\n| d | e |', '<code class="math-inline-code">a|b</code></th>');

// ---------------------------------------------------------------------------
// 3. « < » : formule, texte, vraies balises
// ---------------------------------------------------------------------------
[
  ['$\\prod_{i<n}(x - x_i)$ différences divisées', 'i&lt;n'],
  ['$\\prod_{i<j}(\\mu_j - \\mu_i)$', 'i&lt;j'],
  ['$a<b $ puis du texte', 'a&lt;b $'],
  ['$0<p<1$', '0&lt;p&lt;1'],
  ['$$\\sum_{i<p \\le n} x_i$$', 'i&lt;p \\le'],
  ['\\(i<a \\)', 'i&lt;a \\)'],
  ['\\[i<b \\]', 'i&lt;b \\]']
].forEach(([input, expected]) => {
  has('« < » de formule', input, expected);
  check(`formule sans « < » brut : ${input}`, !/<[a-zA-Z]/.test(md(input).replace(/<\/?p[^>]*>/g, '')), md(input));
});
has('« < » de texte', 'si <condition> alors x', '&lt;condition> alors x');
has('« < » de texte devant un nom de balise jamais refermé', 'si a <b alors c', 'a &lt;b alors c');
has('« < » de texte devant un nom de balise suivi de mots', 'si a <b et c> d fin', 'a &lt;b et c> d fin');
has('« < » devant une balise SVG hors figure', 'afficher <text> à l\'écran', '&lt;text> à l');
has('vraies balises conservées', 'a<br>b <strong>c</strong> <span class="x">d</span><br/>e',
  'a<br>b <strong>c</strong> <span class="x">d</span><br/>e');
const SVG = '<svg viewBox="0 0 10 10">\n<text x="1">$x$ *a* | b</text>\n\n<line x1="0" y1="0"/>\n</svg>';
has('figure SVG intacte', SVG, SVG);
check('figure SVG sans paragraphe', !md(SVG).includes('math-p'), md(SVG));

// ---------------------------------------------------------------------------
// 4. Gras, italique, formules
// ---------------------------------------------------------------------------
const em = (input, n) => {
  const out = md(input);
  check(`italique : ${n} attendu(s) dans « ${input} »`, count(out, '<em>') === n && count(out, '</em>') === n, out);
};
em('*a* et *b*', 2);
em('(*a*)(*b*)', 2);
em('x\n*a*', 1);
em('début *un mot avec $x^*$ dedans* fin', 1);
em('2*3*4', 0);
em('a*b* c', 0);
em('\\*a*', 0);
em('$e_1^*$, $\\mathbb{N}^*$ et $x^*$', 0);
em('$2*3$ et $4*5$', 0);
em('**g** puis *i*', 1);
em('\\$ *a* puis $b$', 1);
has('gras', '**g** et **$x$**', '<strong>g</strong> et <strong>$x$</strong>');
has('dollar échappé hors formule', '\\$ **g** $x<y$', '<strong>g</strong> $x&lt;y$');
{
  const out = md('| $|x|$ | b |\n|---|---|\n| 1 | 2 |');
  check('barre verticale de formule dans un tableau', count(out, '<th ') === 2 && out.includes('$|x|$</th>'), out);
}

// ---------------------------------------------------------------------------
// 5. Tableaux
// ---------------------------------------------------------------------------
const TABLE = '| Jour | lundi |\n|---|---|\n| T | $-4$ |';
has('questions après un tableau', `Relevés :\n\n${TABLE}\n\n1. Calculer la somme.\n2. En déduire la moyenne.`,
  '</table></div>\n<p class="math-p">1. Calculer la somme.<br/>2. En déduire la moyenne.</p>');
has('questions collées à un tableau', `${TABLE}\n1. Calculer.\n2. Conclure.`,
  '</table></div>\n<p class="math-p">1. Calculer.<br/>2. Conclure.</p>');
{
  const out = md(`Voici le tableau :\n${TABLE}\nFin.`);
  check('texte avant un tableau en paragraphe séparé', out.includes('<p class="math-p">Voici le tableau\u00a0:</p>\n<div class="math-table-container">'), out);
}
has('liste après un tableau', `${TABLE}\n• point`, '<li class="math-bullet">point</li>');
{
  const out = md(`Coût : 5 $\n\n${TABLE}\n\n## Titre\n\nSoit $x<y$.`);
  check('« $ » isolé : ni le tableau ni le titre avalés', out.includes('<table') && out.includes('<h2 class="math-h2">Titre</h2>') && out.includes('$x&lt;y$'), out);
}

// 5 bis. Titres et typographie française
has('texte après un titre en paragraphe séparé', '### Titre\nLigne un\nLigne deux', '<h3 class="math-h3">Titre</h3>\n<p class="math-p">Ligne un<br/>Ligne deux</p>');
has('espaces insécables devant la ponctuation haute', 'Calcule : a ; b ! Vrai ?', 'Calcule\u00a0: a\u202f; b\u202f! Vrai\u202f?');
has('ponctuation des formules et du code intacte', 'Soit $f : x \\mapsto x ; y$ et `a : b`', '$f : x \\mapsto x ; y$', '<code class="math-inline-code">a : b</code>');
has('attributs des balises intacts', '<span title="a : b">c</span>', 'title="a : b"');

// ---------------------------------------------------------------------------
// 6. Contrat avec scripts/build_seo_pages.js (formules et SVG déjà remplacés par des jetons)
// ---------------------------------------------------------------------------
{
  const out = md('Texte\n\n%%%MATH_SVG_BLOCK_S0%%%\n\nSuite');
  check('jeton SVG du build conservé hors paragraphe', out.includes('\n%%%MATH_SVG_BLOCK_S0%%%\n'), out);
}
has('jeton de formule du build', '**@@KX0@@** et *@@KX1@@*', '<strong>@@KX0@@</strong> et <em>@@KX1@@</em>');
has('jeton de formule du build dans un tableau', '| @@KX0@@ | b |\n|---|---|\n| 1 | 2 |', '@@KX0@@</th>');

// ---------------------------------------------------------------------------
// 7. Toutes les données du site, après rendu
// ---------------------------------------------------------------------------
const HTML_TAGS = new Set('a b i u p br hr em strong small sub sup span div code pre kbd mark img ul ol li table thead tbody tr td th h1 h2 h3 h4 h5 h6 blockquote details summary section figure figcaption label button input select option'.split(' '));
const SVG_TAGS = new Set('svg g text tspan line polyline polygon path rect circle ellipse defs marker stop linearGradient radialGradient pattern clipPath foreignObject title desc use symbol'.split(' '));
const TAG_RE = /<\/?([a-zA-Z][^\s/>]*)/g;
const FORMULA_RE = /\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\]|\\\([\s\S]+?\\\)|\$[^$]+?\$/g;

function dataFiles() {
  const page = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const files = [...page.matchAll(/<script[^>]+src="(js\/data\/[^"?]+)/g)].map((m) => m[1]);
  const bundles = page.match(/<script[^>]*id="level-bundles"[^>]*>([\s\S]*?)<\/script>/);
  if (bundles) {
    for (const urls of Object.values(JSON.parse(bundles[1]))) {
      for (const u of urls) {
        const f = String(u).split('?')[0];
        if (f.startsWith('js/data/') && !files.includes(f)) files.push(f);
      }
    }
  }
  return files;
}

const dataCtx = {
  console,
  localStorage: { getItem: () => null, setItem() {}, removeItem() {} },
  document: {
    addEventListener() {}, getElementById: () => null, querySelector: () => null,
    querySelectorAll: () => [], createElement: () => ({ style: {}, appendChild() {}, setAttribute() {} })
  }
};
dataCtx.window = dataCtx;
dataCtx.self = dataCtx;
vm.createContext(dataCtx);
const files = dataFiles();
check('index.html : fichiers de données trouvés', files.length > 0);
const globalsBefore = new Set(Object.keys(dataCtx));
files.forEach((f) => vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), dataCtx, { filename: f }));

const texts = new Map();
const seen = new Set();
(function walk(o, where) {
  if (typeof o === 'string') {
    if (/[<$]/.test(o) && !texts.has(o)) texts.set(o, where);
    return;
  }
  if (!o || typeof o !== 'object' || seen.has(o)) return;
  seen.add(o);
  if (Array.isArray(o)) o.forEach((v, i) => walk(v, `${where}[${i}]`));
  else Object.entries(o).forEach(([k, v]) => walk(v, `${where}.${k}`));
})(Object.fromEntries(Object.keys(dataCtx).filter((k) => !globalsBefore.has(k)).map((k) => [k, dataCtx[k]])), 'window');

for (const [text, where] of texts) {
  const out = md(text);
  for (const svg of out.match(/<svg[\s\S]*?<\/svg>/g) || []) {
    for (const m of svg.matchAll(TAG_RE)) check(`${where} : balise inconnue dans une figure <${m[1]}`, SVG_TAGS.has(m[1]), m[0]);
  }
  const plain = out.replace(/<svg[\s\S]*?<\/svg>|<pre[\s\S]*?<\/pre>|<code[\s\S]*?<\/code>/g, ' ');
  for (const m of plain.matchAll(TAG_RE)) check(`${where} : balise inconnue <${m[1]} après rendu`, HTML_TAGS.has(m[1]), text.slice(0, 200));
  for (const m of plain.matchAll(FORMULA_RE)) check(`${where} : « < » brut dans une formule`, !m[0].includes('<'), m[0]);
}

if (failures) {
  console.error(`\n✖ ${failures} problème(s) de rendu.`);
  process.exit(1);
}
console.log(`✔ Rendu Markdown : cas unitaires et ${texts.size} textes des données.`);
