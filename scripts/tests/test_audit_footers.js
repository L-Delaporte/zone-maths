#!/usr/bin/env node
/**
 * Pages racine : même pied de page et même menu partout (aucun lien légal ni rubrique oubliés).
 * Node seul, sans dépendance ; code de sortie 1 en cas d'échec.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
let errors = 0;
let checks = 0;
function fail(msg) { errors += 1; console.error('ÉCHEC : ' + msg); }
function read(page) { return fs.readFileSync(path.join(ROOT, page + '.html'), 'utf8'); }

const REFERENCE = ['bac', 'brevet', 'enseignants', 'parents', 'rituels', '404'];
const VARIANTS = ['a-propos', 'mentions-legales'];
const LICENCE = 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr';

function footerOf(page) {
  const m = read(page).match(/<footer\b[\s\S]*?<\/footer>/);
  if (!m) { fail(page + ' : pas de <footer>'); return ''; }
  return m[0].replace(/\s+/g, ' ').trim();
}
function firstParagraph(footer) { return (footer.match(/<p>[\s\S]*?<\/p>/) || [''])[0]; }

const reference = footerOf(REFERENCE[0]);
if (!reference.includes(LICENCE)) fail('pied de référence sans lien de licence');
for (const page of REFERENCE) {
  checks += 1;
  if (footerOf(page) !== reference) fail(page + ' : pied différent de celui de ' + REFERENCE[0]);
}
for (const page of VARIANTS) {
  checks += 1;
  const footer = footerOf(page);
  if (firstParagraph(footer) !== firstParagraph(reference)) fail(page + ' : première ligne du pied différente');
  if (!footer.includes(LICENCE)) fail(page + ' : lien de licence absent');
}

function navOf(page) {
  const m = read(page).match(/<nav class="nav-portal-links"[^>]*>([\s\S]*?)<\/nav>/);
  if (!m) { fail(page + ' : pas de menu nav-portal-links'); return ''; }
  return [...m[1].matchAll(/<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g)]
    .map((a) => a[1] + ' => ' + a[2].replace(/\s+/g, ' ').trim()).join('\n');
}
const pages = [...REFERENCE, ...VARIANTS];
const menu = navOf(pages[0]);
if (!menu.includes('exercices-de-maths/')) fail('menu sans rubrique Exercices');
for (const page of pages) {
  checks += 1;
  if (navOf(page) !== menu) fail(page + ' : menu différent de celui de ' + pages[0] + '\n' + navOf(page));
}

if (errors) { console.error(errors + ' erreur(s) sur ' + checks + ' vérifications'); process.exit(1); }
console.log('OK : pieds et menus identiques (' + checks + ' vérifications)');
