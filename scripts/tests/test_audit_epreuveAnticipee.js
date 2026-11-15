#!/usr/bin/env node
/**
 * Épreuve anticipée de première, consignes de la version imprimable et pages piliers associées.
 * Node seul, sans dépendance ; code de sortie 1 en cas d'échec. À relancer après scripts/build_seo_pages.js.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..');
const read = (rel) => fs.readFileSync(path.join(ROOT, rel), 'utf8');

let errors = 0;
function check(label, ok, detail) {
  if (ok) return;
  errors++;
  console.error(`✘ ${label}${detail ? ` : ${detail}` : ''}`);
}

const sandbox = { document: { getElementById: () => null, querySelectorAll: () => [] }, localStorage: { getItem: () => null, setItem() {} } };
sandbox.window = sandbox;
vm.createContext(sandbox);
vm.runInContext(read('js/flashQuizGenerator.js'), sandbox, { filename: 'js/flashQuizGenerator.js' });
const { MathsQuizGenerator: quiz, MathsExamTools: tools } = sandbox;

check('corrigé masqué par défaut', quiz.showSolutions === false);
check('format dédié en première', quiz.EXAM_FORMATS['1ere'] && quiz.EXAM_FORMATS['1ere'][0] === 'ea-20');
check('pas de sujet bac-20 en première', !quiz.EXAM_FORMATS['1ere'] || quiz.EXAM_FORMATS['1ere'][0] !== 'bac-20');
check('le bac-20 reste en terminale', quiz.EXAM_FORMATS.tale && quiz.EXAM_FORMATS.tale[0] === 'bac-20');

const cases = [
  'Calculer $f(2)$. *(Saisir par exemple `3,5`.)*',
  'Déterminer le discriminant.\n\n*Saisir un nombre entier.*',
  'Donner la valeur exacte. *Saisir une fraction irréductible.*',
  'Résoudre l\'équation (saisir les solutions séparées par « ; »).'
];
for (const c of cases) {
  const out = tools.paperStatement(c);
  check('consigne de saisie retirée du sujet', !/\bsaisir\b/i.test(out), out);
  check('énoncé conservé', out.trim().length > 0, c);
}

// Partie 2 de l'épreuve anticipée : calculatrice interdite, 14 points, thèmes annoncés
vm.runInContext(read('js/data/ds_bank_1ere.js'), sandbox, { filename: 'js/data/ds_bank_1ere.js' });
for (let i = 0; i < 2000; i++) {
  const part2 = quiz.buildEaPart2(12);
  const [c1, c2] = part2.map((q) => q.chapterId);
  const total = part2.reduce((t, q) => t + q.examPoints, 0);
  check('partie 2 : trois exercices de chapitres différents', part2.length === 3 && new Set(part2.map((q) => q.chapterId)).size === 3);
  check('partie 2 : total de 14 points', total === 14, String(total));
  check('partie 2 : un exercice d\'analyse ou d\'algèbre', /^1A/.test(c1), c1);
  check('partie 2 : un exercice de géométrie ou de probabilités', /^1(G|S[12])/.test(c2), c2);
  check('partie 2 : aucun arrondi sans calculatrice', part2.every((q) => !/arrondi/i.test(q.statement)));
}

const FORBIDDEN_OFFICIAL = /\bB\.?O\.?\s*n\s*[°o]|Bulletin officiel/i;
const pages = {
  'epreuve-anticipee-de-maths': [/sans calculatrice/, /note de service/, /réponses courtes/, /Tronc commun de la voie générale/, /Voie technologique/],
  'maths-complementaires': [/pas de parcours dédié/, /programme officiel/, /loi géométrique/, /lois à densité/, /arrêté du 26 février 2026/]
};
const sitemap = read('sitemap.xml');
for (const [dir, expected] of Object.entries(pages)) {
  const html = read(`${dir}/index.html`);
  check(`${dir} : présente dans le sitemap`, sitemap.includes(`/${dir}/</loc>`));
  check(`${dir} : aucun numéro de BO`, !FORBIDDEN_OFFICIAL.test(html));
  for (const re of expected) check(`${dir} : mention attendue`, re.test(html), String(re));
}

for (const slug of ['nombres-complexes', 'nombres-complexes-et-geometrie', 'arithmetique-dans-z-et-congruences', 'theoremes-de-bezout-et-de-gauss', 'calcul-matriciel']) {
  const html = read(`cours/terminale/${slug}.html`);
  const h1 = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || '';
  check(`${slug} : « maths expertes » dans le title`, /maths expertes/i.test((html.match(/<title>([^<]*)/) || [])[1] || ''));
  check(`${slug} : « maths expertes » dans le h1`, /maths expertes/i.test(h1.replace(/<[^>]+>/g, ' ')));
}

const lycee = read('js/data/chapters_lycee.js');
check('TeX des chapitres de suites en mode math', !/u_\(n|[^$\\{(]\bu_n\b(?![^$]*\$)/.test(lycee));

const suites = read('cours/premiere/generalites-sur-les-suites-numeriques-et-sens.html');
check('métadonnées : quotient de suites converti', suites.includes('uₙ₊₁/uₙ') && !suites.includes('fracu'));
const hero = /"id": "1A5"[\s\S]*?"description": "([^"]*)"/.exec(lycee);
check('description de 1A5 lisible sans KaTeX', hero && !hero[1].includes('$'));

if (errors) {
  console.error(`test_audit_epreuveAnticipee : ${errors} échec(s)`);
  process.exit(1);
}
console.log('✔ test_audit_epreuveAnticipee : format de première, version imprimable et pages piliers conformes');
