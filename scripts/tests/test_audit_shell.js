#!/usr/bin/env node
/**
 * Coquille de l'application, sans exécution : ordre de chargement de index.html (la meta CSP coupe
 * le préchargement, d'où defer partout sauf themeInit), accueil lisible sans JavaScript, titres,
 * chargement parallèle des niveaux, raccourcis clavier.
 *
 * Usage : node scripts/tests/test_audit_shell.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');

let errors = 0;
let checks = 0;
function check(label, ok) {
  checks++;
  if (!ok) { errors++; console.error('✖ ' + label); }
}

const html = read('index.html');
const app = read('js/app.js');
const home = read('js/app/home.js');
const loader = read('js/dataLoader.js');
const visible = html.replace(/<!--[\s\S]*?-->/g, '');

const scripts = [...visible.matchAll(/<script\b([^>]*)>/g)].map(m => m[1]);
const external = scripts.filter(a => /\bsrc=/.test(a));
const blocking = external.filter(a => !/\bdefer\b/.test(a));
check('index.html : seul themeInit.js est synchrone', blocking.length === 1 && blocking[0].includes('js/themeInit.js'));
check('index.html : aucun script inline exécutable', scripts.filter(a => !/\bsrc=/.test(a)).every(a => /type="application\/(ld\+)?json"/.test(a)));
check('index.html : themeInit.js après la dernière feuille de style',
  visible.indexOf('js/themeInit.js') > visible.lastIndexOf('rel="stylesheet"'));

const bundles = visible.match(/<script id="level-bundles" type="application\/json">([\s\S]*?)<\/script>/);
let bundleKeys = 0;
try { bundleKeys = Object.keys(JSON.parse(bundles[1])).length; } catch (e) { /* compté comme échec ci-dessous */ }
check('index.html : level-bundles lisible', bundleKeys > 0);

const homeTag = (visible.match(/<section id="home-view"[^>]*>/) || [''])[0];
check('index.html : accueil visible sans JavaScript', homeTag !== '' && !/display:\s*none|\bhidden\b/.test(homeTag));
check('index.html : bloc noscript', /<noscript>/.test(visible));
check('index.html : le h1 ne contient que la marque', /<h1 id="app-main-title">L'Établi des Maths<\/h1>/.test(visible));
check('index.html : pas de meta keywords', !/name="keywords"/.test(visible));
for (const page of ['exercices-de-maths/', 'entrainement-maths/', 'reviser-le-brevet-de-maths/', 'reussir-le-bac-de-maths/', 'epreuve-anticipee-de-maths/']) {
  check(`index.html : lien vers ${page}`, visible.includes(`href="${page}"`));
}
check('accueil : pas de jargon ZPD à l\'écran', !/ZPD/.test(visible) && !/ZPD/.test(home.replace(/\/\/.*$/gm, '')));

check('dataLoader : fichiers d\'un niveau lancés ensemble', /allSettled\(urls\.map/.test(loader) && !/urls\.reduce/.test(loader));
check('app.js : plus de titre long centré sur le niveau', !/Créé par/.test(app));
check('app.js : le titre de l\'accueil revient à celui du fichier', /this\._homeTitle = document\.title/.test(app) && /document\.title = this\._homeTitle/.test(app));
const selector = (app.match(/CLICKABLE_SELECTOR\s*[:=]\s*(['"`])([\s\S]*?)\1/) || [])[2];
check('app.js : les cartes de cycle ne sont pas des boutons (contrôles imbriqués)', selector !== undefined && !selector.includes('.home-cycle-card'));
const shortcuts = (app.match(/bindKeyboardShortcuts\(\)\s*\{[\s\S]{0,1500}/) || [''])[0];
check('app.js : raccourcis ignorés avec Ctrl, Alt ou Méta', ['ctrlKey', 'altKey', 'metaKey'].every(k => shortcuts.includes(k)));

if (errors) {
  console.error(`✖ Coquille : ${errors} échec(s) sur ${checks} vérifications.`);
  process.exit(1);
}
console.log(`✔ Coquille : ${checks} vérifications.`);
