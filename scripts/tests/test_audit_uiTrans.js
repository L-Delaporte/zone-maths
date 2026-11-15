#!/usr/bin/env node
/**
 * Non-régression du chargement à la demande et de l'en-tête mobile.
 *
 * Usage (depuis n'importe où) : node scripts/tests/test_audit_uiTrans.js
 * Sortie : code 0 si tout est conforme, 1 sinon.
 *
 * Vérifications :
 *  - data_capes.js n'est plus chargé au démarrage, il ouvre le lot du niveau capes ;
 *  - lyceeGenerators.js reste absent des lots Licence et CAPES ;
 *  - l'index CAPES du démarrage reflète les chapitres complets (mêmes id, ordre, titres) ;
 *  - la fusion d'index et de chapitres complets ne crée aucun doublon ;
 *  - la région d'annonce pour lecteurs d'écran existe dans le HTML initial ;
 *  - le sélecteur de niveau mobile propose exactement les niveaux des pastilles du bureau.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..');
const read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');

const failures = [];
const expect = (cond, label) => { if (!cond) failures.push(label); };

const page = read('index.html');
const app = read('js/app.js');

// --- Chargement à la demande ---
const startup = [...page.matchAll(/<script[^>]+src="([^"?]+)/g)].map(m => m[1]);
expect(!startup.includes('js/data/data_capes.js'), 'data_capes.js ne doit pas être chargé au démarrage');

const block = page.match(/<script[^>]*id="level-bundles"[^>]*>([\s\S]*?)<\/script>/);
expect(block, 'bloc level-bundles introuvable');
const bundles = block ? JSON.parse(block[1]) : {};
const files = level => (bundles[level] || []).map(url => String(url).split('?')[0]);

expect(files('capes')[0] === 'js/data/data_capes.js', 'data_capes.js doit ouvrir le lot capes');
for (const level of ['L1', 'L2', 'L3', 'capes']) {
  expect(!files(level).includes('js/lyceeGenerators.js'), `lyceeGenerators.js ne doit pas figurer dans le lot ${level}`);
}
for (const level of ['L1', 'L2', 'L3']) {
  expect(!files(level).includes('js/data/data_capes.js'), `data_capes.js ne doit pas figurer dans le lot ${level}`);
}
for (const level of ['2nde', '1ere', '1tc', '1techno', 'tale', 'sante', 'pass', 'veto']) {
  expect(files(level).includes('js/lyceeGenerators.js'), `lyceeGenerators.js doit rester dans le lot ${level}`);
}

// --- Index CAPES du démarrage et fusion avec les chapitres complets ---
const sandbox = { console: { log() {}, warn() {}, error() {}, info() {} } };
sandbox.window = sandbox;
vm.createContext(sandbox);
vm.runInContext(read('js/data/chapters_licence.js'), sandbox, { filename: 'chapters_licence.js' });
const index = sandbox.window.MATHS_CHAPTERS.filter(c => c.level === 'capes').map(c => ({ ...c }));
expect(index.length > 0, "l'index CAPES est vide au démarrage");

vm.runInContext(read('js/data/data_capes.js'), sandbox, { filename: 'data_capes.js' });
const full = sandbox.window.CAPES_CHAPTERS;
expect(Array.isArray(full) && full.length > 0, 'CAPES_CHAPTERS introuvable');

const idsOf = list => list.map(c => c.id).join(',');
expect(idsOf(index) === idsOf(full), `index CAPES et chapitres complets divergent : ${idsOf(index)} / ${idsOf(full)}`);
index.forEach((entry) => {
  const chapter = full.find(c => c.id === entry.id);
  if (!chapter) return;
  for (const [key, value] of Object.entries(entry)) {
    expect(JSON.stringify(chapter[key]) === JSON.stringify(value), `${entry.id} : champ ${key} différent de l'index`);
  }
});

const allIds = sandbox.window.MATHS_CHAPTERS.map(c => c.id);
expect(new Set(allIds).size === allIds.length, 'doublons de chapitres après chargement de data_capes.js');
expect(sandbox.window.MATHS_CHAPTERS.filter(c => c.level === 'capes').every(c => c.description),
  'un chapitre CAPES fusionné a perdu sa description');

// --- Annonces pour lecteurs d'écran ---
expect(/<div id="sr-live-region"[^>]*aria-live="polite"/.test(page), 'la région #sr-live-region doit être dans le HTML initial');
expect(!/createElement\([^)]*\)[^;]*\n[^\n]*sr-live-region/.test(app), 'la région #sr-live-region ne doit pas être créée à la demande');

// --- En-tête mobile ---
const selectHtml = (page.match(/<select id="mobile-level-select"[\s\S]*?<\/select>/) || [''])[0];
expect(selectHtml, 'sélecteur de niveau mobile introuvable');
const options = [...selectHtml.matchAll(/<option value="([^"]*)"/g)].map(m => m[1]);
const pills = [...page.matchAll(/class="level-pill[^"]*"[^>]*data-level="([^"]+)"/g)].map(m => m[1]);
expect(options[0] === '', 'le sélecteur mobile doit proposer « Accueil » en premier');
expect(options.slice(1).join(',') === pills.join(','), `niveaux du sélecteur mobile (${options.slice(1)}) différents des pastilles (${pills})`);
expect(/aria-controls="header-tools-panel"/.test(page) && /id="header-tools-panel"/.test(page),
  'le bouton de menu mobile doit piloter #header-tools-panel');

if (failures.length) {
  console.error(`test_audit_uiTrans : ${failures.length} échec(s)`);
  failures.forEach(f => console.error(' - ' + f));
  process.exit(1);
}
console.log('test_audit_uiTrans : OK');
