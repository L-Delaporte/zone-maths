#!/usr/bin/env node
/**
 * Non-régression de l'entraînement : lecture à l'oral des options, messages intégrés, contrastes, mise en page mobile.
 *
 * Usage (depuis n'importe où) : node scripts/tests/test_audit_training.js
 * Sortie : code 0 si tout est conforme, 1 sinon.
 *
 * Vérifications :
 *  - spokenOption : formules converties en français simple, sans aucun LaTeX résiduel ;
 *  - plus aucun alert() dans les vues entraînement, cours et fiches ; le message d'erreur est intégré et annoncé ;
 *  - contrastes calculés (AA 4,5:1 pour le texte) des pastilles, du badge XP, de l'onglet Lycée et du bouton Installer ;
 *  - règles CSS qui empêchent le débordement à 375 px et préservent le récapitulatif imprimé ;
 *  - les formules larges du cours signalent qu'elles défilent.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..');
const read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');

const failures = [];
const expect = (cond, label) => { if (!cond) failures.push(label); };

const training = read('js/app/training.js');
const course = read('js/app/course.js');
const sheets = read('js/app/sheets.js');
const css = read('css/style.css');

// --- Lecture à l'oral des options de QCM ---
const sandbox = { window: { MathsApp: {} }, console: { log() {}, warn() {}, error() {}, info() {} } };
vm.createContext(sandbox);
vm.runInContext(training, sandbox, { filename: 'training.js' });
const app = sandbox.window.MathsApp;

const EXACT = [
  ['$\\frac{-3}{4}$', 'moins 3 sur 4'],
  ['$[0;+\\infty[$', "intervalle de 0 inclus à plus l'infini"],
  ['$]-1 ; 2]$', 'intervalle de moins 1 exclu à 2 inclus'],
  ['La droite $(AB)$', 'La droite A B'],
  ['Le segment $[AB]$', 'Le segment A B'],
  ['$\\{1 ; \\{2 ; 3\\}\\}$', "ensemble 1 ; ensemble 2 ; 3, fin d'ensemble, fin d'ensemble"],
  ['$x^2+1$', 'x au carré plus 1'],
  ['$\\sqrt{2}$', 'racine carrée de 2'],
  ['$3{,}5$', '3,5'],
  ['$\\vec{u}$', 'vecteur u'],
  ['$\\overrightarrow{AB}$', 'vecteur A B'],
  ["$f'(x)$", 'f prime de x'],
  ['$a \\neq b$', 'a différent de b'],
  ['$x \\leq 3$', 'x inférieur ou égal à 3'],
  ['$2 \\times 3$', '2 fois 3'],
  ['$\\lim_{x \\to 0} f(x)$', 'limite quand x tend vers 0 de f de x'],
  ['$\\ln(2)$', 'logarithme népérien de 2'],
  ['Aucune de ces réponses', 'Aucune de ces réponses'],
  ['$P(M \\mid T^+)$', 'P de ouvrir parenthèse M sachant T plus fermer parenthèse'],
  ['$a \\mid b$', 'a divise b'],
  ['$\\{x \\mid x > 0\\}$', "ensemble x tel que x supérieur à 0, fin d'ensemble"],
  ['$\\|\\cdot\\|_1$', 'norme indice 1'],
  ["l'intervalle $]a, b[$", "l'intervalle de a exclu à b exclu"],
  ["l'angle $\\widehat{TRS}$", "l'angle T R S"],
  ['$\\mathbb{R}^3$', 'R 3'],
  ['$\\mathbb{N}^*$', 'N étoile'],
  ['$E(T_n)$', 'E de T indice n'],
  ['$V(X) = 0{,}24$', 'V de X égale 0,24'],
  ['$E(1 ; 2)$', 'E de coordonnées 1 ; 2'],
];
EXACT.forEach(([src, want]) => {
  const got = app.spokenOption(src);
  expect(got === want, `spokenOption(${src}) : attendu « ${want} », obtenu « ${got} »`);
});

const NO_RESIDUE = [
  '$\\sum_{k=1}^{n} k^2$',
  '$\\int_0^1 f(x)\\,dx$',
  '$\\begin{pmatrix} 1 & t \\\\ 0 & 1 \\end{pmatrix}$',
  '$\\{x \\in \\mathbb{R} \\mid x > 0\\}$',
  '$\\dfrac{\\sqrt{3}}{2}$',
  '$e^{-x^2}$',
  '$u_{n+1} = \\frac{u_n}{2}$',
  '$\\left( \\frac{1}{2} \\right)^n$',
  '$\\mathbb{Z}/n\\mathbb{Z}$',
  '<b>$x$</b> ou $y$',
];
NO_RESIDUE.forEach((src) => {
  const got = app.spokenOption(src);
  expect(got && !/[\\{}^_$<>]/.test(got), `spokenOption(${src}) garde du LaTeX ou du HTML : « ${got} »`);
});

expect((training.match(/'aria-label',[^\n]*spokenOption\(/g) || []).length >= 2, 'les options de QCM ne prennent plus leur nom accessible dans spokenOption');

// --- Messages intégrés au lieu de alert() ---
[['js/app/training.js', training], ['js/app/course.js', course], ['js/app/sheets.js', sheets]].forEach(([file, src]) => {
  expect(!/(^|[^.\w])(window\.)?alert\(/m.test(src), `${file} appelle encore alert()`);
});
expect(/showAnswerError\s*\(/.test(training) && /answer-error/.test(training), "le message d'erreur intégré a disparu de training.js");
expect(/this\.announce\(/.test(training), "training.js n'annonce plus rien aux lecteurs d'écran");
expect(/aria-invalid/.test(training), 'le champ en erreur ne porte plus aria-invalid');

// --- Contrastes réels ---
const lum = (hex) => {
  const n = hex.replace('#', '');
  const [r, g, b] = [0, 2, 4].map(i => parseInt(n.slice(i, i + 2), 16) / 255)
    .map(c => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => {
  const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};
const blockOf = (selector) => {
  const at = css.indexOf(`\n${selector} {`);
  if (at < 0) return '';
  return css.slice(at, css.indexOf('}', at));
};

const xp = blockOf('.xp-badge');
expect(/background-color:\s*#047857/.test(xp) && ratio('#047857', '#ffffff') >= 4.5, 'badge XP : fond sous AA avec du blanc');
expect(/white-space:\s*nowrap/.test(xp) && /flex-shrink:\s*0/.test(xp), 'badge XP : doit rester sur une ligne sans être écrasé');

const pwa = blockOf('.pwa-install-btn');
expect(/#0369a1/.test(pwa) && !/var\(--primary-fill\)\s*100%/.test(pwa) && ratio('#0369a1', '#ffffff') >= 4.5, 'bouton Installer : fin de dégradé sous AA');
expect(/linear-gradient\(135deg, #047857, #0369a1\)/.test(css), 'onglet Lycée : dégradé attendu absent');

[
  ['.tier-dot-g', '#15803d', '#ffffff'],
  ['.tier-dot-o', '#b45309', '#ffffff'],
  ['.tier-dot-r', '#dc2626', '#ffffff'],
  ['[data-theme="dark"] .tier-dot-g', '#4ade80', '#052e16'],
  ['[data-theme="dark"] .tier-dot-o', '#fbbf24', '#451a03'],
  ['[data-theme="dark"] .tier-dot-r', '#f87171', '#450a0a'],
].forEach(([selector, bg, fg]) => {
  const rule = blockOf(selector);
  expect(rule.includes(bg), `${selector} : fond ${bg} absent`);
  expect(ratio(bg, fg) >= 4.5, `${selector} : signe sous AA (${ratio(bg, fg).toFixed(2)})`);
});
expect(/tier-dot-/.test(training) && /aria-label/.test(training), "les pastilles n'ont plus de libellé détaillé");

// --- Mise en page mobile et impression ---
expect(/\.chapter-hero-banner:not\(\.home-hero-banner\)\s*\{\s*display:\s*none !important/.test(css), 'le bandeau de chapitre doit rester masqué en mobile, pas celui de l\'accueil');
expect(/\.math-text-input\s*\{[^}]*min-width:\s*0/.test(css), 'le champ de saisie peut de nouveau pousser la page en largeur');
expect(/\.math-preview-badge\s*\{[^}]*overflow-x:\s*auto/.test(css), "l'aperçu de la réponse peut de nouveau déborder");
expect(/\.help-buttons-group\s*\{[^}]*flex-wrap:\s*wrap/.test(css), 'les boutons d\'aide ne passent plus à la ligne');
expect(/\.tier-tag-short\s*\{\s*display:\s*none/.test(css), 'la version courte du palier doit être masquée hors mobile');
expect(/body\.diapo-modal-open #diaporama-modal \.modal-box\.diapo-box\s*\{[^}]*box-decoration-break:\s*clone/.test(css), 'récapitulatif imprimé : marges non répétées sur chaque page');
expect(/\.diapo-mm-detail::details-content/.test(css), 'récapitulatif imprimé : détails de calcul repliés');
expect(/\.katex-display\.scroll-more-left\.scroll-more-right\s*\{\s*-webkit-mask-image:\s*none/.test(css), "à l'impression, une formule à mi-défilement garde son fondu");
expect(!/\.home-hero-banner \.app-badge-zpd[^{]*\{\s*display:\s*none/.test(css), "la promesse « Gratuit, sans compte » ne doit pas disparaître de l'accueil mobile");

// --- Formules larges du cours ---
expect(/watchFormulaOverflow\(container\) \{/.test(course), 'watchFormulaOverflow a disparu de course.js');
expect(/typeof ResizeObserver === 'function'/.test(course), 'watchFormulaOverflow : ResizeObserver doit rester facultatif');
expect(/closest\('#exercise-input-zone'\)/.test(training) && /getClientRects\(\)\.length/.test(training), "exercice suivant : garde de focus ou d'onglet masqué retirée");
expect((course.match(/this\.watchFormulaOverflow\(container\)/g) || []).length >= 3, 'une des vues du cours ne surveille plus ses formules larges');

if (failures.length) {
  console.error(`test_audit_training : ${failures.length} échec(s)`);
  failures.forEach(f => console.error(` - ${f}`));
  process.exit(1);
}
console.log(`test_audit_training : OK (${EXACT.length + NO_RESIDUE.length} libellés parlés, contrastes et règles CSS conformes)`);
