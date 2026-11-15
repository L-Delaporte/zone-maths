#!/usr/bin/env node
/**
 * Pages générées par scripts/build_seo_pages.js : balises utiles aux moteurs, ressources versionnées,
 * sitemap, et cohérence des corrigés de QCM après le mélange des options.
 * Node seul, sans dépendance ; code de sortie 1 en cas d'échec.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const DIRS = ['cours', 'exercices-de-maths', 'reviser-le-brevet-de-maths', 'reussir-le-bac-de-maths', 'entrainement-maths', 'epreuve-d-entretien-capes', 'epreuve-anticipee-de-maths', 'maths-complementaires'];
const TITLE_MAX = 62;
const DESC_MIN = 120;
const DESC_MAX = 155;
// Une lettre correcte très majoritaire rendrait le QCM devinable sans lire l'énoncé.
const LETTER_SHARE_MAX = 0.4;

let errors = 0;
let checks = 0;
function fail(msg) { errors += 1; console.error('ÉCHEC : ' + msg); }

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}
const decode = (s) => s.replace(/&#39;|&#x27;/g, "'").replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/[  ]/g, ' ');
const first = (html, re) => decode((html.match(re) || [, ''])[1]);

const pages = [];
for (const dir of DIRS) {
  for (const file of walk(path.join(ROOT, dir))) {
    const html = fs.readFileSync(file, 'utf8');
    if (/http-equiv="refresh"/.test(html) || /noindex/.test(html.slice(0, 900))) continue;
    pages.push({ rel: path.relative(ROOT, file), html });
  }
}
if (pages.length < 200) fail('trop peu de pages trouvées : ' + pages.length);

const seenTitles = new Map();
const letters = {};
let qcm = 0;
for (const { rel, html } of pages) {
  checks += 1;
  const title = first(html, /<title>([^<]*)/);
  const desc = first(html, /name="description" content="([^"]*)/);
  if (!title) fail(rel + ' : pas de <title>');
  if (title.length > TITLE_MAX) fail(`${rel} : titre de ${title.length} signes`);
  if (title.includes('…')) fail(rel + ' : titre tronqué');
  if (seenTitles.has(title)) fail(`${rel} : même titre que ${seenTitles.get(title)}`);
  seenTitles.set(title, rel);
  if (desc.length < DESC_MIN || desc.length > DESC_MAX) fail(`${rel} : description de ${desc.length} signes`);
  if (desc.includes('…')) fail(rel + ' : description tronquée');

  if (!/<meta property="og:image:alt"/.test(html)) fail(rel + ' : og:image:alt absent');
  const canonical = first(html, /rel="canonical" href="([^"]*)/);
  if (!canonical.startsWith('https://etabli-des-maths.fr/')) fail(rel + ' : canonique invalide');
  if (html.includes('?src=')) fail(rel + ' : paramètre src dans un lien');
  if (/href="[^"]*index\.html"/.test(html)) fail(rel + " : lien nu vers index.html (double l'URL de la racine)");

  for (const m of html.matchAll(/<(?:link[^>]*href|script[^>]*src)="([^"]*\/(?:css|js)\/[^"]*)"/g)) {
    if (!m[1].includes('?v=')) fail(`${rel} : ressource sans version : ${m[1]}`);
  }
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch (e) { fail(`${rel} : JSON-LD illisible (${e.message})`); }
  }

  for (const art of html.matchAll(/<article class="cours-card cours-exo">([\s\S]*?)<\/article>/g)) {
    const lists = [...art[1].matchAll(/<ol class="cours-mcq" type="A">([\s\S]*?)<\/ol>/g)];
    if (!lists.length) continue;
    const answers = [...art[1].matchAll(/class="cours-answer"><strong>[^<]*<\/strong>\s*([A-H])\. ([\s\S]*?)<\/p>/g)];
    if (answers.length !== lists.length) { fail(`${rel} : ${lists.length} QCM pour ${answers.length} réponses`); continue; }
    lists.forEach((list, i) => {
      qcm += 1;
      const items = [...list[1].matchAll(/<li>([\s\S]*?)<\/li>/g)].map((x) => x[1].trim());
      const letter = answers[i][1];
      letters[letter] = (letters[letter] || 0) + 1;
      const shown = items[letter.charCodeAt(0) - 65];
      if (shown !== answers[i][2].trim()) fail(`${rel} : la lettre ${letter} ne désigne pas l'option corrigée`);
    });
  }
}

checks += 1;
if (qcm < 100) fail('trop peu de QCM trouvés : ' + qcm);
for (const [letter, count] of Object.entries(letters)) {
  if (count / qcm > LETTER_SHARE_MAX) fail(`lettre ${letter} correcte dans ${count} QCM sur ${qcm}`);
}

// Concours : mention « aide complémentaire, sans garantie » sur chaque page, et plus d'agrégation dans les libellés
{
  const NOTICE = 'ne garantit pas la réussite au concours';
  const concoursDirs = ['capes', 'professeur-des-ecoles', 'prepa-sante', 'pass-las', 'veto-bcpst'];
  const concoursPages = ['cours/index.html', 'epreuve-d-entretien-capes/index.html'];
  for (const d of concoursDirs) {
    for (const f of fs.readdirSync(path.join(ROOT, 'cours', d))) if (f.endsWith('.html')) concoursPages.push(`cours/${d}/${f}`);
  }
  for (const rel of concoursPages) {
    checks += 1;
    const html = fs.readFileSync(path.join(ROOT, rel), 'utf8');
    if (!html.includes(NOTICE)) fail(`${rel} : mention des concours absente`);
    if (/agrégation/i.test(html)) fail(`${rel} : mention de l'agrégation`);
  }
  checks += 1;
  if (fs.readFileSync(path.join(ROOT, 'cours/3e/index.html'), 'utf8').includes(NOTICE)) fail('cours/3e : mention des concours hors concours');
}

checks += 1;
const sitemap = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
if (/<changefreq>|<priority>/.test(sitemap)) fail('sitemap : changefreq ou priority présents');
for (const m of sitemap.matchAll(/<loc>https:\/\/etabli-des-maths\.fr\/([^<]*)<\/loc>/g)) {
  const target = m[1] === '' || m[1].endsWith('/') ? m[1] + 'index.html' : m[1];
  if (!fs.existsSync(path.join(ROOT, target))) fail('sitemap : page absente : ' + m[1]);
}

if (errors) {
  console.error(`${errors} échec(s) sur ${checks} contrôles.`);
  process.exit(1);
}
console.log(`SEO : ${pages.length} pages, ${qcm} QCM (${Object.entries(letters).sort().map(([k, v]) => k + ' ' + v).join(', ')}), sitemap conforme.`);
