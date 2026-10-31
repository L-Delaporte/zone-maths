#!/usr/bin/env node
/**
 * Génère les QR codes (SVG) imprimés sur les fiches, devoirs et rituels projetés :
 *   assets/qr/site.svg        → page d'accueil
 *   assets/qr/<ID>.svg        → entraînement direct sur le chapitre ID
 * Le paramètre src=qr permet de mesurer ces visites dans GoatCounter.
 *
 * Usage : node scripts/build_qr_codes.js   (nécessite la commande `qrencode`)
 * À relancer après l'ajout de chapitres (idempotent : ne réécrit que ce qui change).
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'assets', 'qr');
const BASE = 'https://etabli-des-maths.fr/';

const sandbox = { window: {}, console };
vm.createContext(sandbox);
for (const f of ['chapters.js', 'chapters_lycee.js', 'chapters_licence.js', 'data_capes.js']) {
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'js/data', f), 'utf8'), sandbox, { filename: f });
}
const chapters = sandbox.window.MATHS_CHAPTERS || [];

fs.mkdirSync(OUT, { recursive: true });
const targets = [['site', `${BASE}?src=qr`], ...chapters.map(c => [c.id, `${BASE}?chapitre=${encodeURIComponent(c.id)}&src=qr`])];

let written = 0;
for (const [id, url] of targets) {
  const svg = execFileSync('qrencode', ['-t', 'SVG', '-l', 'M', '-m', '1', '--svg-path', '-o', '-', url], { encoding: 'utf8' })
    .replace(/<\?xml[^>]*>\s*/, '')
    .replace(/<!--[\s\S]*?-->\s*/g, '');
  const file = path.join(OUT, `${id}.svg`);
  if (!fs.existsSync(file) || fs.readFileSync(file, 'utf8') !== svg) {
    fs.writeFileSync(file, svg);
    written++;
  }
}
console.log(`✔ QR codes : ${targets.length} (${written} écrits) dans assets/qr/`);
